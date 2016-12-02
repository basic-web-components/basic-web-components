/* Exported function extends a base class with DistributedChildren. */
export default (base) => {

  /**
   * Mixin which defines helpers for accessing a component's distributed
   * children as a flattened array or string.
   *
   * The standard DOM API provides several ways of accessing child content:
   * `children`, `childNodes`, and `textContent`. None of these functions are
   * Shadow DOM aware. This mixin defines variations of those functions that
   * *are* Shadow DOM aware.
   *
   * Example: you create a component `<count-children>` that displays a number
   * equal to the number of children placed inside that component. If someone
   * instantiates your component like:
   *
   *     <count-children>
   *       <div></div>
   *       <div></div>
   *       <div></div>
   *     </count-children>
   *
   * Then the component should show "3", because there are three children. To
   * calculate the number of children, the component can just calculate
   * `this.children.length`. However, suppose someone instantiates your
   * component inside one of their own components, and puts a `<slot>` element
   * inside your component:
   *
   *     <count-children>
   *       <slot></slot>
   *     </count-children>
   *
   * If your component only looks at `this.children`, it will always see exactly
   * one child — the `<slot>` element. But the user looking at the page will
   * *see* any nodes distributed to that slot. To match what the user sees, your
   * component should expand any `<slot>` elements it contains.
   *
   * That is the problem this mixin solves. After applying this mixin, your
   * component code has access to `this.distributedChildren`, whose `length`
   * will return the total number of all children distributed to your component
   * in the composed tree.
   *
   * Note: The latest Custom Elements API design calls for a new function,
   * `getAssignedNodes` that takes an optional `deep` parameter, that will solve
   * this problem at the API level.
   */
  class DistributedChildren extends base {

    /**
     * An in-order collection of distributed children, expanding any slot
     * elements. Like the standard children property, this skips text nodes.
     *
     * @type {HTMLElement[]}
     */
    get distributedChildren() {
      return expandContentElements(this.children, false);
    }

    /**
     * An in-order collection of distributed child nodes, expanding any slot
     * elements. Like the standard childNodes property, this includes text
     * nodes.
     *
     * @type {Node[]}
     */
    get distributedChildNodes() {
      return expandContentElements(this.childNodes, true);
    }

    /**
     * The concatenated text content of all distributed child nodes, expanding
     * any slot elements.
     *
     * @type {string}
     */
    get distributedTextContent() {
      const strings = this.distributedChildNodes.map(function(child) {
        return child.textContent;
      });
      return strings.join('');
    }

  }

  return DistributedChildren;
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
  const expanded = Array.prototype.map.call(nodes, node => {
    // We want to see if the node is an instanceof HTMLSlotELement, but
    // that class won't exist if the browser that doesn't support native
    // Shadow DOM and if the Shadow DOM polyfill hasn't been loaded. Instead,
    // we do a simplistic check to see if the tag name is "slot".
    const isSlot = typeof HTMLSlotElement !== 'undefined' ?
      node instanceof HTMLSlotElement :
      node.localName === 'slot';
    if (isSlot) {
      // Use the nodes assigned to this node instead.
      const assignedNodes = node.assignedNodes({ flatten: true });
      return assignedNodes ?
        expandContentElements(assignedNodes, includeTextNodes) :
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
  const flattened = [].concat(...expanded);
  return flattened;
}
