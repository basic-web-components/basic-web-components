import microtask from './microtask';


/* Exported function extends a base class with DistributedChildrenContent. */
export default (base) => {

  /**
   * Mixin which defines a component's content as its children, expanding any
   * nodes distributed to the component's slots.
   *
   * This also provides notification of changes to a component's content. It
   * will invoke a `contentChanged` method when the component is first
   * instantiated, and whenever its distributed children change. This is an
   * easy way to satisfy the Gold Standard checklist item for monitoring
   * [Content Changes](https://github.com/webcomponents/gold-standard/wiki/Content-Changes).
   *
   * Example:
   *
   * ```
   * let base = DistributedChildrenContentMixin(DistributedChildrenMixin(HTMLElement));
   * class CountingElement extends base {
   *
   *   constructor() {
   *     super();
   *     let root = this.attachShadow({ mode: 'open' });
   *     root.innerHTML = `<slot></slot>`;
   *   }
   *
   *   contentChanged() {
   *     // Count the component's children, both initially and when changed.
   *     this.count = this.distributedChildren.length;
   *   }
   *
   * }
   * ```
   *
   * Note that content change detection depends upon the element having at least
   * one `slot` element in its shadow subtree.
   *
   * This mixin is intended for use with the
   * [DistributedChildrenMixin](DistributedChildrenMixin.md). See that mixin for
   * a discussion of how that works. This DistributedChildrenContentMixin
   * provides an easy way of defining the "content" of a component as the
   * component's distributed children. That in turn lets mixins like
   * [ContentItemsMixin](ContentItemsMixin.md) manipulate the children as list
   * items.
   */
  class DistributedChildrenContent extends base {

    constructor() {
      super();

      if (this.shadowRoot) {
        // Listen to changes on all slots.
        const slots = this.shadowRoot.querySelectorAll('slot');
        slots.forEach(slot => slot.addEventListener('slotchange', event => {
          this.contentChanged();
        }));
      }

      // Make an initial call to contentChanged() so that the component can do
      // initialization that it normally does when content changes.
      //
      // This will invoke contentChanged() handlers in other mixins. In order
      // that those mixins have a chance to complete their own initialization,
      // we add the contentChanged() call to the microtask queue.
      microtask(() => this.contentChanged());
    }

    /**
     * Invoked when the contents of the component (including distributed
     * children) have changed.
     *
     * This method is also invoked when a component is first instantiated; the
     * contents have essentially "changed" from being nothing. This allows the
     * component to perform initial processing of its children.
     */
    contentChanged() {
      if (super.contentChanged) { super.contentChanged(); }
      const event = new CustomEvent('content-changed');
      this.dispatchEvent(event);
    }

    /**
     * The content of this component, defined to be the flattened array of
     * children distributed to the component.
     *
     * @type {HTMLElement[]}
     */
    get content() {
      const distributedChildren = this.distributedChildren;
      if (typeof distributedChildren === 'undefined') {
        console.warn(`DistributedChildrenContentMixin expects the component to define a "distributedChildren" property.`);
      }
      return distributedChildren;
    }
    set content(value) {
      if ('content' in base.prototype) { super.content = value; }
      // TODO: Set the children to the given value (which should be an array of
      // elements)?
    }

    /**
     * This event is raised when the component's contents (including distributed
     * children) have changed.
     *
     * @memberof DistributedChildrenContent
     * @event content-changed
     */
  }

  return DistributedChildrenContent;
};
