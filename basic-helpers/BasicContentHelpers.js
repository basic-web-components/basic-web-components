/**
 * Basic helpers related to managing component content.
 *
 * These helpers generally deal with the tracking of changes in content, and
 * flattening a content tree (including distributed content).
 *
 * These can be mixed into in any element with the use of Platform.mixin():
 *
 * Polymer(Platform.mixin({
 *
 *   // Your own properties/methods go here.
 *   ready: function() { ... }
 *
 * }, BasicContentHelpers));
 *
 */

var BasicContentHelpers = {

  /*
   * Returns an in-order collection of children, expanding any content nodes.
   * Like the standard children property, this skips text nodes.
   *
   * TODO: This walks the whole content tree every time the list is requested.
   * It'd be nice to cache the answer and invalidate it only when content
   * actually changes.
   */
  get flattenChildren() {
    return this._flatten(this.children, false);
  },

  /*
   * Returns an in-order collection of child nodes, expanding any content nodes.
   * Like the standard childNodes property, this includes text nodes.
   */
  get flattenChildNodes() {
    return this._flatten(this.childNodes, true);
  },

  get flattenTextContent() {
    var strings = this.flattenChildNodes.map(function(node) {
      return node.textContent;
    });
    return strings.join('');
  },

  /*
   * Given a node, return the children of that element. If any of the children
   * are content elements, instead of returning the content element, return the
   * nodes distributed to it. (Apply this rule recursively.)
   *
   * If includeTextNodes is true, text nodes will be included, as in the
   * standard childNodes property; by default, this skips text nodes, like the
   * standard children property.
   */
  _flatten: function(nodes, includeTextNodes) {
    var expanded = Array.prototype.map.call(nodes, function(node) {
      if (node instanceof HTMLContentElement) {
        // content element; use its distributed nodes instead.
        return this._flatten(node.getDistributedNodes(), includeTextNodes);
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
  },

  /**
   * Return the host element for this element. If this element is not hosted by
   * another element (it's not attached to anything, or is hosted by the
   * top-level document), this returns null.
   *
   * This getter is used by BasicContentHelpers itself, but is also useful
   * generally.
   */
  get host() {
    for (var parent = this.parentNode; parent != null; parent = parent.parentNode) {
      if (parent.host) {
        return parent.host;
      }
    }
  },

  /**
   * If the element has a contentChanged handler, then wire up an observer 
   * that will invoke this handler whenever content changes.
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
  observeContentChanges: function(observeChanges) {
    if (observeChanges == null || observeChanges) {
      // Start observing
      if (this.contentChanged) {
        this._observeContentChanges(this, this._contentChanged.bind(this));
        if (this.childNodes.length > 0) {
          // Consider any initial content of a new element to be "changed" content.
          this._contentChanged();
        }
      }
    } else if (this._contentChangeObserver) {
      // Stop observing
      this._contentChangeObserver.disconnect();
      this._contentChangeObserver = null;
    }
  },

  // Invoke the contentChanged handler -- but first, see if the nodes' new
  // content includes a content element, in which case we'd need to monitor the
  // component's host for changes, too.
  _contentChanged: function(mutations) {

    // Special case: attribute mutations on the element itself aren't considered
    // changes to content, so we ignore them. (Attribute changes are only
    // treated as content changes if they apply to children.)
    if (mutations) {
      var selfAttributeMutations = mutations.filter(function(mutation) {
        return mutation.target === this && mutation.type === 'attributes';
      }.bind(this));
      if (selfAttributeMutations.length === mutations.length) {
        // All mutations were only modifications to this element's own attributes.
        return;
      }
    }

    var containsContentNode = (this.querySelector('content') != null);
    if (containsContentNode) {
      // The element's new content contains <content> nodes, so from now on,
      // we need to observe our host element, too.
      // TODO: If this element's content changes again, disconnect any
      // outstanding observers of that old content.
      // TODO: If the host element *also* contains <content> nodes, we should
      // watch those too. *sigh*
      this._observeHostContentChanges();
    }

    // Invoke the element's own handler.
    this.contentChanged();
  },

  // Wire up an observer for (light DOM) content change events on the given
  // node.
  _observeContentChanges: function(node, handler) {
    node._contentChangeObserver = new MutationObserver(handler);
    node._contentChangeObserver.observe(node, {
      attributes: true,
      characterData: true,
      childList: true,
      subtree: true
    });
  },

  _observeHostContentChanges: function() {
    var host = this.host;
    if (host) {
      this._observeContentChanges(host, function() {
        this.contentChanged();
      }.bind(this));
    }
  }

};
