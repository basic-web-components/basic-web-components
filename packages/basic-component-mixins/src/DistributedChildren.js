/**
 * @class DistributedChildren
 * @classdesc Mixin which defines helpers for accessing a component's
 * distributed children as a flattened array or string.
 *
 * The standard DOM API provides several ways of accessing child content:
 * `children`, `childNodes`, and `textContent`. None of these functions are
 * Shadow DOM aware. This mixin defines variations of those functions that
 * *are* Shadow DOM aware.
 *
 * Note: The latest Custom Elements API design calls for a new function,
 * `getAssignedNodes` that takes an optional `deep` parameter. This mixin does
 * not yet take advantage of that API, but should.
 */


export default (base) => class DistributedChildren extends base {

  /**
   * An in-order collection of children, expanding any slot elements. Like the
   * standard children property, this skips text nodes.
   *
   * @method
   * @returns {HTMLElement[]}
   */
  get distributedChildren() {
    return expandContentElements(this.children, false);
  }

  /**
   * An in-order collection of child nodes, expanding any slot elements. Like
   * the standard childNodes property, this includes text nodes.
   *
   * @method
   * @returns {Node[]}
   */
  get distributedChildNodes() {
    return expandContentElements(this.childNodes, true);
  }

  /**
   * The concatenated text content of all child nodes, expanding any slot
   * elements.
   *
   * @method
   * @returns {string}
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
