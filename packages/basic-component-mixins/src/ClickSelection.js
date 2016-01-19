/**
 * @class ClickSelection
 * @classdesc Mixin which maps a click (actually, a mousedown) to selection
 *
 * If the user clicks an element, and the element is an item in the list, then
 * the component's selectedIndex will be set to the index for that item.
 */


export default (base) => class ClickSelection extends base {

  createdCallback() {
    if (super.createdCallback) { super.createdCallback(); }
    /*
     * REVIEW: Which event should we listen to here?
     *
     * The standard use for this mixin is in list boxes. List boxes don't
     * appear to be consistent with regard to whether they select on mousedown
     * or click/mouseup.
     */
    this.addEventListener('mousedown', event => {
      selectTarget(this, event.target);
      // Note: We don't call preventDefault here. The default behavior for
      // mousedown includes setting keyboard focus if the element doesn't
      // already have the focus, and we want to preserve that behavior.
      event.stopPropagation();
    });
  }

  // Default implementation. This will typically be handled by other mixins.
  get selectedIndex() {
    return super.selectedIndex;
  }
  set selectedIndex(index) {
    if ('selectedIndex' in base.prototype) { super.selectedIndex = index; }
  }

};

// TODO: Handle the case where a list item has subelements. Walk up the DOM
// hierarchy until we find an item in the list, or come back to this element,
// in which case the element that was tapped isn't an item (and should be
// ignored).
function selectTarget(element, target) {
  let index = element.indexOfItem && element.indexOfItem(target);
  if (index >= 0) {
    element.selectedIndex = index;
  }
}
