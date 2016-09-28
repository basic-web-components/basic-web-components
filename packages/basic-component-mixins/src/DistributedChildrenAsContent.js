import microtask from './microtask';


/* Exported function extends a base class with DistributedChildrenAsContent. */
export default (base) => {

  /**
   * Mixin which defines a component's content as its children, expanding any
   * nodes distributed to the component's slots.
   *
   * This also provides notification of changes to a component's content.
   *
   * This mixin is intended for use with the
   * [DistributedChildren](DistributedChildren.md) mixin. See that mixin for a
   * discussion of how that works. This DistributedChildrenAsContent mixin
   * provides an easy way of defining the "content" of a component as the
   * component's distributed children. That in turn lets mixins like
   * [ContentAsItems](ContentAsItems.md) manipulate the children as list items.
   */
  class DistributedChildrenAsContent extends base {

    constructor() {
      super();

      if (this.shadowRoot) {
        // Listen to changes on all slots.
        let slots = this.shadowRoot.querySelectorAll('slot');
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
      let event = new CustomEvent('content-changed');
      this.dispatchEvent(event);
    }

    /**
     * The content of this component, defined to be the flattened array of
     * children distributed to the component.
     *
     * @type {HTMLElement[]}
     */
    get content() {
      return this.distributedChildren;
    }
    set content(value) {
      if ('content' in base.prototype) { super.content = value; }
    }

    /**
     * This event is raised when the component's contents (including distributed
     * children) have changed.
     *
     * @memberof DistributedChildrenAsContent
     * @event content-changed
     */
  }

  return DistributedChildrenAsContent;
};
