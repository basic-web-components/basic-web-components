/**
 * Mixin that defines a component's content as its children. Changes in the
 * content will be tracked, and a contentChanged method will be invoked on the
 * component when its children change.
 *
 * @mixin ChildrenContent
 */

// TODO: Don't respond to changes in attributes, or at least offer that as an
// option.

export default (base) => class ChildrenContent extends base {

  createdCallback() {
    if (super.createdCallback) { super.createdCallback(); }
    observeContentChanges(this);

    // Make an initial call to contentChanged() so that the component can do
    // initialization that it normally does when content changes.
    //
    // This will invoke contentChanged() handlers in other mixins. In order that
    // those mixins have a chance to complete their own initialization, we add
    // the contentChanged() call to the microtask queue via a promise.
    // See https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/
    Promise.resolve().then(() => this.contentChanged());
  }

  contentChanged() {
    if (super.contentChanged) { super.contentChanged(); }
    let event = new CustomEvent('content-changed');
    this.dispatchEvent(event);
  }

  initialized() {
    // Make an initial call to contentChanged() so that the component can do
    // initialization that it normally does when content changes.
    this.contentChanged();
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
    // We want to see if the node is an instanceof HTMLSlotELement, but
    // that class won't exist if the browser that doesn't support native
    // Shadow DOM and if the Shadow DOM polyfill hasn't been loaded. Instead,
    // we do a simplistic check to see if the tag name is "slot" or "content".
    if (node.localName && (node.localName === "slot" || node.localName === "content")) {
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
