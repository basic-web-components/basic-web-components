import microtask from './microtask';


// TODO: Fold into DistributeChildrenAsContent?

/* Exported function extends a base class with ObserveContentChanges. */
export default (base) => {

  /**
   * Mixin which provides notification of changes to a component's content: the
   * nodes directly assigned to, or ultimately distributed to, the component's
   * slots.
   */
  class ObserveContentChanges extends base {

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
     * This event is raised when the component's contents (including distributed
     * children) have changed.
     *
     * @memberof ObserveContentChanges
     * @event content-changed
     */
  }

  return ObserveContentChanges;
};
