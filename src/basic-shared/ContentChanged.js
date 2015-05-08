/**
 * Basic helpers related the tracking of changes in content, and flattening a
 * content tree (including distributed content).
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


// Invoke an element's contentChanged handler -- but first, see if the elements'
// new content includes a content element, in which case we'll need to monitor
// the component's host for changes, too.
function handleContentChanged(mutations) {

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

  // Filter out mutations which occurred in Shady DOM.
  if (mutations) {
    var mutationsInLightDom = mutations.filter(function(mutation) {
      return isLightDomMutation(mutation, this);
    }.bind(this));
    if (mutationsInLightDom.length === 0) {
      // All mutations were only modifications in Shady DOM.
      return;
    }
  }

  observeHostIfContentElementPresent(this);

  // Invoke the element's own handler.
  this.contentChanged();
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
    return false;
  }
}


// Return true if the given mutation only affects the component's light DOM
// (and not Shady DOM).
function isLightDomMutation(mutation, component) {
  // See if at least one added node was in light DOM.
  return Array.prototype.some.call(mutation.addedNodes, function(addedNode) {
    return isLightDomDescendant(addedNode, component);
  });
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


// If the indicated node contains a content element, the changes in the *host*
// element's light DOM content will cause nodes to be redistributed to this
// node. In order to notified of such content changes, we wire up a mutation
// observed on the host. We also recursively call this function on the host: it
// may very well contain a content element itself, meaning that we'll have to
// observe content changes on *its* host, and so on...
function observeHostIfContentElementPresent(node) {
  var contentElement = Polymer.dom(node).querySelector('content');
  if (contentElement) {
    // The element's new content contains at least one content element, so we
    // also need to observe our host element, too.
    // TODO: If this element's content changes again, disconnect any
    // outstanding observers of that old content.
    var host = Basic.ContentHelpers.getHost(node);
    if (host) {
      observeContentMutations(host, function() {
        node.contentChanged();
      });
      observeHostIfContentElementPresent(host);
    }
  }
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
   * Removes nodes distributed to <content></content>
   */
  removeLightDomNodes: function(node) {
    var content = Polymer.dom(node.root).querySelector('content');
    var distributedNodes = Polymer.dom(content).getDistributedNodes();
    if (!distributedNodes) {
      return;
    }
    for (var i = 0; i < distributedNodes.length; i++) {
      Polymer.dom(node).removeChild(distributedNodes[i]);
    }
  },

  /*
   * Returns the concatenated text content of all child nodes, expanding any
   * content nodes.
   */
  flattenTextContent: function(node) {
    var flattenedChildNodes = BasicContentHelpers.flattenChildNodes(node);
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
   * This getter is used by BasicContentHelpers itself, but is also useful
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
   * If the optional observeChanges parameter is false, this function will
   * disconnect any existing observer.
   *
   * This method is typically invoked by a component's attached handler, and
   * the invoked with observeChanges = false in the detached handler.
   *
   * @method observeContentChanges
   */
  observeContentChanges: function(node, observeChanges) {
    if (observeChanges || observeChanges == null) {
      // Start observing
      observeContentMutations(node, handleContentChanged.bind(node));
      if (Polymer.dom(node).childNodes.length > 0) {
        // Consider any initial content of a new element to be "changed" content.
        handleContentChanged.call(node);
      }
    } else if (node._contentChangeObserver) {
      // Stop observing
      node._contentChangeObserver.disconnect();
      node._contentChangeObserver = null;
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
