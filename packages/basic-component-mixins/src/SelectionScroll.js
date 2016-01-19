/**
 * @class SelectionScroll
 * @classdesc Mixin which scrolls a container to keep the selected item visible
 */


export default (base) => class SelectionScroll extends base {

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
   * Blink has a scrollIntoViewIfNeeded() function that almost the same thing,
   * but unfortunately it's non-standard, and in any event often ends up
   * scrolling more than is absolutely necessary.
   *
   * @method scrollItemIntoView
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
   * The element that should be scrolled with the Page Up/Down keys.
   * Default is the current element.
   *
   * @property scrollTarget
   */
  get scrollTarget() {
    // Prefer base result.
    return 'scrollTarget' in base.prototype ? super.scrollTarget : this;
  }
  set scrollTarget(element) {
    if ('scrollTarget' in base.prototype) { super.scrollTarget = element; }
  }

};
