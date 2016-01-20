/**
 * @class ChildrenContent
 * @classdesc Mixin which defines a component's content as its children,
 * including any nodes distributed to the component's slots.
 */


export default (base) => class ChildrenContent extends base {

  /**
   * The content of this component.
   *
   * This is a synonym for the distributedChildren property.
   *
   * @property content
   * @type Array
   */
  get content() {
    return this.distributedChildren;
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
