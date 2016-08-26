import createSymbol from './createSymbol';
import microtask from './microtask';

// Symbols for private data members on an element.
const contentChangeObserverSymbol = createSymbol('contentChangeObserver');


// TODO: Should this be renamed to something like DistributedChildrenChanged?

/* Exported function extends a base class with ObserveContentChanges. */
export default (base) => {

  /**
   * Mixin which wires up mutation observers to report any changes in a
   * component's content (direct children, or nodes distributed to slots).
   *
   * For the time being, this can only support a single level of distributed
   * content. That is, if a component contains a slot, and the set of nodes
   * directly assigned to that slot changes, then this mixin will detect the
   * change. However, this mixin does not yet detect changes in reprojected
   * nodes. If a component's host places a slot as a child of the component
   * instance, nodes assigned to the outer host will be assigned to the host's
   * slot, then reassigned to the slot element inside the component. Changes in
   * such reprojected nodes will not (yet) be detected by this mixin.
   *
   * For comparison, see Polymer's observeNodes API, which does solve the
   * problem of tracking changes in reprojected content.
   *
   * Note: The web platform team creating the specifications for web components
   * plan to request that a new type of MutationObserver option be defined that
   * lets a component monitor changes in distributed children. This mixin will
   * be updated to take advantage of that MutationObserver option when that
   * becomes available.
   */
  class ObserveContentChanges extends base {

    constructor() {
      super();
      // REVIEW: Move to connectedCallback?
      observeContentChanges(this);

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


// TODO: Decide whether we want an option to track changes to children
// attributes.
function observeContentChanges(element) {
  element[contentChangeObserverSymbol] = new MutationObserver(() =>
    element.contentChanged()
  );
  element[contentChangeObserverSymbol].observe(element, {
    // attributes: true,
    characterData: true,
    childList: true,
    subtree: true
  });
}
