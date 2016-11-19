/* Exported function extends a base class with ClickSelection. */
export default (base) => {

  /**
   * Mixin which maps a click (actually, a mousedown) to a selection.
   *
   * This simple mixin is useful in list box-like elements, where a click on a
   * list item implicitly selects it.
   *
   * This mixin expects the component to provide an `items` property. You can
   * provide that property yourself, or use the
   * [ContentAsItems](ContentAsItems.md) mixin. This mixin also expects the
   * component to define a `selectedIndex` property. You can provide that
   * yourself, or use the [SingleSelection](SingleSelection.md) mixin.
   */
  class ClickSelection extends base {

    constructor() {
      super();
      /*
       * REVIEW: Which event should we listen to here?
       *
       * The standard use for this mixin is in list boxes. List boxes don't
       * appear to be consistent with regard to whether they select on mousedown
       * or click/mouseup.
       */
      this.addEventListener('mousedown', event => {
        const index = indexOfContainingItem(this, event.target);
        if (index >= 0) {
          this.selectedIndex = index;
          // Note: We don't call preventDefault here. The default behavior for
          // mousedown includes setting keyboard focus if the element doesn't
          // already have the focus, and we want to preserve that behavior.
          event.stopPropagation();
        }
      });
    }

    // Default implementation. This will typically be handled by other mixins.
    get selectedIndex() {
      return super.selectedIndex;
    }
    set selectedIndex(index) {
      if ('selectedIndex' in base.prototype) { super.selectedIndex = index; }
    }

  }

  return ClickSelection;
};


/*
 * Return index of the element items that either is or contains the indicated
 * target. Return -1 if not found.
 */
function indexOfContainingItem(element, target) {
  const items = element.items;
  const itemCount = items ? items.length : 0;
  for (let i = 0; i < itemCount; i++) {
    let item = items[i];
    if (item === target || item.contains(target)) {
      return i;
    }
  }
  return -1;
}
