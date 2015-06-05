/**
 * Basic helpers related the tracking of changes in content, and flattening a
 * content tree (including distributed content).
 *
 */

(function() {


/*
 * Given a array of nodes, return a new array with any content elements expanded
 * to the nodes distributed to that content element. This rule is applied
 * recursively.
 *
 * If includeTextNodes is true, text nodes will be included, as in the
 * standard childNodes property; by default, this skips text nodes, like the
 * standard children property.
 */
function expandContentElements(nodes, includeTextNodes) {
  var expanded = Array.prototype.map.call(nodes, function(node) {
    // We want to see if the node is an instanceof HTMLContentElement, but
    // that class won't exist if the browser that doesn't support native
    // Shadow DOM and if the Shadow DOM polyfill hasn't been loaded. Instead,
    // we do a simplistic check to see if the tag name is "content".
    if (node.localName && node.localName === "content") {
      // content element; use its distributed nodes instead.

      // HACK: In Polymer 0.8 rc 7, a call to getDistributedNodes() can fail if
      // made too early. Until that can be fixed, do a pre-check to make sure
      // the call will succeed.
      if (node._distributedNodes || node.getDistributedNodes) {
        var distributedNodes = Polymer.dom(node).getDistributedNodes();
        return expandContentElements(distributedNodes, includeTextNodes);
      } else {
        return [];
      }

    } else if (node instanceof HTMLElement) {
      // Plain element; use as is.
      return [node];
    } else if (node instanceof Text && includeTextNodes) {
      // Text node.
      return [node];
    } else {
      // Comment, processing instruction, etc.; skip.
      return [];
    }
  }.bind(this));
  var flattened = Array.prototype.concat.apply([], expanded);
  return flattened;
}


//
// Respond to a mutation on an observed element.
//
function mutationObserved(mutations) {

  // TODO: Decide whether we want to treat attribute changes as content changes.
  // Special case: attribute mutations on the element itself aren't considered
  // changes to content, so we ignore them. (Attribute changes are only
  // treated as content changes if they apply to children.)
  // if (mutations) {
  //   var selfAttributeMutations = mutations.filter(function(mutation) {
  //     return mutation.target === this && mutation.type === 'attributes';
  //   }.bind(this));
  //   if (selfAttributeMutations.length === mutations.length) {
  //     // All mutations were only modifications to this element's own attributes.
  //     return;
  //   }
  // }

  // See if the mutation actually occurred in light DOM.
  // If we're using native Shadow DOM, the mutations must have occurred in light
  // DOM; we wouldn't hear about mutations in shadow DOM. For Shady DOM, we need
  // to apply our own heuristics to determine whether mutations were in the
  // simulated light DOM.
  var mutationsInLightDom = Polymer.Settings.useNativeShadow ||
    includesLightDomMutations(mutations, this);

  if (mutationsInLightDom) {
    lightDomContentChanged(this);
  }

}


//
// Return true if the given mutations include at least one mutation in the
// component's light DOM.
//
function includesLightDomMutations(mutations, component) {

  if (!mutations) {
    // Assume there was a light DOM mutation.
    return true;
  }

  // Look for at least one light DOM mutation DOM.
  return mutations.some(function(mutation) {
    return isLightDomMutation(mutation, component);
  });
}


// Return true if the node is a light DOM child of the indicated component.
function isLightDomDescendant(node, component) {
  var parent = Polymer.dom(node).parentNode;
  if (parent === component) {
    // The parent itself is in the component's light DOM.
    return true;
  } else if (parent instanceof HTMLElement) {
    // Walk up to see if the parent is in component's light DOM.
    return isLightDomDescendant(parent, component);
  } else {
    // We've done one of the following:
    // * walked up in to a shadow root
    // * walked up out of the document
    // In either case, the original node wasn't a light DOM child of the
    // component.
    return false;
  }
}


// Return true if the given mutation only affects the component's light DOM
// (and not Shady DOM).
function isLightDomMutation(mutation, component) {
  // See if at least one added node was in light DOM.
  var lightDomAddition = Array.prototype.some.call(mutation.addedNodes, function(addedNode) {
    return isLightDomDescendant(addedNode, component);
  });
  if (lightDomAddition) {
    return true;
  }
  var lightDomRemoval = Array.prototype.some.call(mutation.removedNodes, function(removedNode) {
    return wasLightDomDescendant(removedNode, mutation.target, component);
  });
  return lightDomRemoval;
}


function lightDomContentChanged(node) {

  // See if the elements' new content includes a content element, in which case
  // we'll need to monitor the component's host for changes, too.
  observeHostIfContentElementPresent(node);

  // Invoke the element's own handler.
  if (!node._contentChangeHandler) {
    // TODO: Investigate how this condition can come about.
    // It shouldn't happen, but does.
    // debugger;
  } else {
    node._contentChangeHandler();
  }

}


// Wire up an observer for (light DOM) content change events on the given
// node.
function observeContentMutations(node, handler) {
  node._contentChangeObserver = new MutationObserver(handler);
  node._contentChangeObserver.observe(node, {
    // attributes: true,
    characterData: true,
    childList: true,
    subtree: true
  });
}


// If the indicated component has contains a content element, the changes in the
// *host* element's light DOM content will cause nodes to be redistributed to
// component.
//
// In order to notified of such content changes, we wire up a mutation
// observed on the host.
//
// We also recursively call this function on the host: it may very well contain
// a content element itself, meaning that we'll have to observe content changes
// on *its* host, and so on. In that case, the node parameter indicates the
// host we're considering in this call.
function observeHostIfContentElementPresent(component, node) {
  node = node || component;
  var contentElement = Polymer.dom(node).querySelector('content');
  if (contentElement) {
    // The element's new content contains at least one content element, so we
    // also need to observe our host element, too.
    // TODO: If this element's content changes again, disconnect any
    // outstanding observers of that old content.
    var host = Basic.ContentHelpers.getHost(node);
    if (host) {
      node._contentHost = host;
      observeContentMutations(host, function() {
        lightDomContentChanged(component);
      });
      observeHostIfContentElementPresent(component, host);
    }
  }
}


function stopObservingContentMutations(node) {
  if (node._contentChangeObserver) {
    // Stop observing
    node._contentChangeObserver.disconnect();
    node._contentChangeObserver = null;
    node._contentChangeHandler = null;
  }
  if (node._contentHost) {
    // Stop observing changes on host.
    stopObservingContentMutations(node._contentHost);
    node._contentHost = null;
  }
}


// Return true if the given node *was* a child of the given container in the
// component's Shady DOM. The container may be the component itself, or an
// element somewhere in the component's simulated shadow tree.
//
// This work is pretty hard to do without more cooperation from Shady DOM. By
// the time a removal mutation occurs, all internal Shady DOM state has been
// scraped off the node. We do our best to try to guess whether the indicated
// node was projected from light DOM into the container, or whether the node
// was part of the shadow tree.
function wasLightDomDescendant(node, container, component) {

  if (container === component) {
    // The node is (or was) a direct child of the component.
    // This is an important but ambiguous case. In Shady DOM, we can't tell for
    // sure after a removal whether the node was removed from the component's
    // light DOM or simulated shadow DOM. As an approximation, we look at the
    // node's classList for a hint.
    return !wasNodeInShadowOfComponent(node, component);
  }

  if (isLightDomDescendant(container, component)) {
    // The container was in the light DOM.
    // REVIEW: What if the container is in the shadow of an element in the
    // component's light DOM?
    return true;
  }

  // The node must have been in the shadow tree somewhere
  // Walk up the hierarchy from the point where the node was removed.
  return wasNodeProjectedIntoContainer(node, container, component);
}


// Return true if the node appears to have been projected into the given
// container within the component's shadow subtree.
//
// For a remove mutation to be in light DOM, the mutation target should be the
// component itself, or a container within the component's composed shadow tree.
// If the latter, the container should contain a content element, and the
// container's host should either be the component, or an element that similarly
// contains a content element is is hosted by the component (or... and so on).
function wasNodeProjectedIntoContainer(node, container, component) {
  var content = Polymer.dom(container).querySelector('content');
  if (!content) {
    // No content element, so node couldn't have been projected into container.
    return false;
  }
  var containerHost = Basic.ContentHelpers.getHost(container);
  if (!containerHost) {
    // No host, so node couldn't have been projected into container.
    return false;
  }
  if (wasNodeInShadowOfComponent(node, containerHost)) {
    // Node was inside the container, but was actually put there by the
    // container's host as part of that host's shadow.
    return false;
  }
  return (containerHost === component) ?
    true :
    wasNodeProjectedIntoContainer(node, containerHost, component);
}


// Take a guess at whether the indicated node was in the shadow of the given
// component. This relies on the fact that Shady DOM stamps a "style-scope"
// CSS class onto elements in the simulated shadow, along with a CSS class name
// matching the component's tag (localName). These CSS classes remain even after
// a node has been removed from the document and all other Shady DOM residue has
// been scraped away, so we can look at these classes as a heuristic.
//
// Because this function relies on CSS classes, it always returns false for text
// nodes and other nodes that can't take classes.
function wasNodeInShadowOfComponent(node, component) {
  var classList = node.classList;
  return classList &&
    (classList.contains('style-scope') && classList.contains(component.localName));
}



window.Basic = window.Basic || {};

/*
 * A collection of content helpers that can be used by any element.
 */
window.Basic.ContentHelpers = {

  /*
   * Returns an in-order collection of children, expanding any content nodes.
   * Like the standard children property, this skips text nodes.
   *
   * TODO: This walks the whole content tree every time the list is requested.
   * It'd be nice to cache the answer and invalidate it only when content
   * actually changes.
   */
  flattenChildren: function(node) {
    var children = Polymer.dom(node).children;
    return expandContentElements(children, false);
  },

  /*
   * Returns an in-order collection of child nodes, expanding any content nodes.
   * Like the standard childNodes property, this includes text nodes.
   */
  flattenChildNodes: function(node) {
    var childNodes = Polymer.dom(node).childNodes;
    return expandContentElements(childNodes, true);
  },

  /*
   * Returns the concatenated text content of all child nodes, expanding any
   * content nodes.
   */
  flattenTextContent: function(node) {
    var flattenedChildNodes = Basic.ContentHelpers.flattenChildNodes(node);
    var strings = flattenedChildNodes.map(function(child) {
      return child.textContent;
    });
    return strings.join('');
  },

  /**
   * Return the host element for this element. If this element is not hosted by
   * another element (it's not attached to anything, or is hosted by the
   * top-level document), this returns null.
   *
   * This getter is used by Basic.ContentHelpers itself, but is also useful
   * generally.
   */
  getHost: function(node) {
    var parent = Polymer.dom(node).parentNode;
    while (parent) {
      // REVIEW: Is there an official Shady DOM way to get the host?
      // var host = Polymer.dom(parent)._hostForNode(parent);
      var host = parent.host;
      if (host) {
        return host;
      }
      parent = Polymer.dom(parent).parentNode;
    }
    return null;
  },

  /**
   * Wire up a MutationObserver that will invoke an element's contentChanged
   * handler whenever the element's content changes.
   *
   * In many cases, a component performs processing of its own children: it
   * performs layout operations on them, it modifies them. There is currently
   * (March 2015) no concise, standard means of doing this. Moreover, handling
   * reprojected Shadow DOM content is non-trivial.
   *
   * This approach abstracts that complexity behind a "contentChanged" handler.
   * This will be invoked whenever the component's content changes, including
   * reprojected content. Additionally, if a component currently has content,
   * the contentChanged handler will be immediately invoked.
   *
   * By default, this will invoke a handler on the element called
   * "contentChanged". If the optional handler parameter is supplied, that
   * handler will be invoked instead. If the handler parameter is null, this
   * function will disconnect any existing observer.
   *
   * This method is typically invoked by a component's attached handler, and
   * the invoked with observeChanges = false in the detached handler.
   *
   * NOTE: This content observation system currently works with native Shadow
   * DOM, but only partially supports Polymer's Shady DOM. Specifically, when
   * using Shady DOM, a component will detect nodes *added* to it (including
   * when a node is replacing another node), but the component will not
   * correctly detect when nodes are only *removed* from it.
   *
   * @method observeContentChanges
   * @param {Function} handler The function to invoke when content changes.
   */
  observeContentChanges: function(node, handler) {
    if (handler || typeof handler === 'undefined') {
      // Start observing
      handler = (handler || node.contentChanged).bind(node);
      node._contentChangeHandler = handler;
      observeContentMutations(node, mutationObserved.bind(node));
      if (Polymer.dom(node).childNodes.length > 0) {
        // Consider any initial content of a new element to be "changed" content.
        lightDomContentChanged(node);
      }
    } else {
      stopObservingContentMutations(node);
    }
  }

};

/*
 * A Polymer element behavior that automatically wires up content observation,
 * and simplifies access to the various content-flattening helper functions.
 */
window.Basic.ContentChanged = {

  attached: function() {
    Basic.ContentHelpers.observeContentChanges(this);
  },

  detached: function() {
    Basic.ContentHelpers.observeContentChanges(this, false);
  },

  get flattenChildren() {
    return Basic.ContentHelpers.flattenChildren(this);
  },

  get flattenChildNodes() {
    return Basic.ContentHelpers.flattenChildNodes(this);
  },

  get flattenTextContent() {
    return Basic.ContentHelpers.flattenTextContent(this);
  }

};

})();
