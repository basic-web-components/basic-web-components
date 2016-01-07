/**
 * Mixin that defines a component's content as its children.
 *
 * @mixin ChildrenContent
 */

// TODO: Factor content change tracking into its own mixin.
// TODO: Don't respond to changes in attributes, or at least offer that as an
// option.

export default (base) => class ChildrenContent extends base {

  createdCallback() {
    if (super.createdCallback) { super.createdCallback(); }
    // Until we have content observing again, force a call to contentChanged().
    // HACK: Do this asynchronously, so other mixins have a chance to set up
    // before this call.
    setTimeout(() => this.contentChanged());

    observeContentChanges(this);
  }

  contentChanged() {
    if (super.contentChanged) { super.contentChanged(); }
    let event = new CustomEvent('content-changed');
    this.dispatchEvent(event);
  }

  /**
   * The flattened content of this component.
   *
   * @property content
   * @type [Object]
   */
  get content() {
    return expandContentElements(this.children);
  }
  set content(value) {
    if ('content' in base.prototype) { super.content = value; }
  }

  /*
   * Returns an in-order collection of children, expanding any content nodes.
   * Like the standard children property, this skips text nodes.
   *
   * TODO: This walks the whole content tree every time the list is requested.
   * It'd be nice to cache the answer and invalidate it only when content
   * actually changes.
   */
  get distributedChildren() {
    return expandContentElements(this.children, false);
  }

  /*
   * Returns an in-order collection of child nodes, expanding any content nodes.
   * Like the standard childNodes property, this includes text nodes.
   */
  get distributedChildNodes() {
    return expandContentElements(this.childNodes, true);
  }

  /*
   * Returns the concatenated text content of all child nodes, expanding any
   * content nodes.
   */
  get distributedTextContent() {
    let strings = this.distributedChildNodes.map(function(child) {
      return child.textContent;
    });
    return strings.join('');
  }

};


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
  let expanded = Array.prototype.map.call(nodes, node => {
    // We want to see if the node is an instanceof HTMLContentElement, but
    // that class won't exist if the browser that doesn't support native
    // Shadow DOM and if the Shadow DOM polyfill hasn't been loaded. Instead,
    // we do a simplistic check to see if the tag name is "content".
    if (node.localName && node.localName === "content") {
      // content element; use its distributed nodes instead.
      let distributedNodes = node.getDistributedNodes();
      return distributedNodes ?
        expandContentElements(distributedNodes, includeTextNodes) :
        [];
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
  });
  let flattened = [].concat(...expanded);
  return flattened;
}


function observeContentChanges(element) {
  element._contentChangeObserver = new MutationObserver(() =>
    element.contentChanged()
  );
  element._contentChangeObserver.observe(element, {
    // attributes: true,
    characterData: true,
    childList: true,
    subtree: true
  });
}
