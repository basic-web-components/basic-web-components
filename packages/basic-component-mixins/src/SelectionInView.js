/* Exported function extends a base class with SelectionInView. */
export default (base) => {

  /**
   * Mixin which scrolls a container to ensure that a newly-selected item is
   * visible to the user.
   *
   * When the selected item in a list-like component changes, it's easier for
   * the to confirm that the selection has changed to an appropriate item if the
   * user can actually see that item.
   *
   * This mixin expects a `selectedItem` property to be set when the selection
   * changes. You can supply that yourself, or use the
   * [ItemsSelection](ItemsSelection.md) mixin.
   */
  class SelectionInView extends base {

    attachedCallback() {
      if (super.attachedCallback) { super.attachedCallback(); }
      let selectedItem = this.selectedItem;
      if (selectedItem) {
        this.scrollItemIntoView(selectedItem);
      }
    }

    get selectedItem() {
      return super.selectedItem;
    }
    set selectedItem(item) {
      if ('selectedItem' in base.prototype) { super.selectedItem = item; }
      if (item) {
        // Keep the selected item in view.
        this.scrollItemIntoView(item);
      }
    }

    /**
     * Scroll the given element completely into view, minimizing the degree of
     * scrolling performed.
     *
     * Blink has a `scrollIntoViewIfNeeded()` function that does something
     * similar, but unfortunately it's non-standard, and in any event often ends
     * up scrolling more than is absolutely necessary.
     *
     * @param {HTMLElement} item - the item to scroll into view.
     */
    scrollItemIntoView(item) {
      if (super.scrollItemIntoView) { super.scrollItemIntoView(); }
      // Get the relative position of the item with respect to the top of the
      // list's scrollable canvas. An item at the top of the list will have a
      // elementTop of 0.

      let scrollTarget = this.scrollTarget;
      let elementTop = item.offsetTop - scrollTarget.offsetTop - scrollTarget.clientTop;
      let elementBottom = elementTop + item.offsetHeight;
      // Determine the bottom of the scrollable canvas.
      let scrollBottom = scrollTarget.scrollTop + scrollTarget.clientHeight;
      if (elementBottom > scrollBottom) {
        // Scroll up until item is entirely visible.
        scrollTarget.scrollTop += elementBottom - scrollBottom;
      }
      else if (elementTop < scrollTarget.scrollTop) {
        // Scroll down until item is entirely visible.
        scrollTarget.scrollTop = elementTop;
      }
    }

    /**
     * The element that should be scrolled to bring an item into view.
     *
     * The default value of this property is the element itself.
     *
     * @type {HTMLElement}
     */
    get scrollTarget() {
      // Prefer base result.
      return 'scrollTarget' in base.prototype ? super.scrollTarget : this;
    }
    set scrollTarget(element) {
      if ('scrollTarget' in base.prototype) { super.scrollTarget = element; }
    }

  }

  return SelectionInView;
};
