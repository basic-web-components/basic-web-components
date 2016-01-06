/**
 * Mixin which maps page keys (Page Up, Page Down) into operations that move
 * the selection by one page.
 *
 * The keyboard interaction model generally follows that of Microsoft Windows'
 * list boxes instead of those in OS X:
 *
 * * The Page Up/Down and Home/End keys actually change the selection, rather
 *   than just scrolling. The former behavior seems more generally useful for
 *   keyboard users.
 *
 * * Pressing Page Up/Down will change the selection to the topmost/bottommost
 *   visible item if the selection is not already there. Thereafter, the key will
 *   move the selection up/down by a page, and (per the above point) make the
 *   selected item visible.
 *
 * To ensure the selected item is in view following use of Page Up/Down, use the
 * related SelectionScroll mixin.
 *
 * @class KeyboardPagedSelection
 */

export default (base) => class KeyboardPagedSelection extends base {

  keydown(event) {
    let handled;
    switch (event.keyCode) {
      case 33: // Page Up
        handled = this.pageUp();
        break;
      case 34: // Page Down
        handled = this.pageDown();
        break;
    }
    // Prefer mixin result if it's defined, otherwise use base result.
    return handled || (super.keydown && super.keydown(event));
  }

  /**
   * Scroll down one page.
   *
   * @method pageDown
   */
  pageDown() {
    if (super.pageDown) { super.pageDown(); }
    return scrollOnePage(this, true);
  }

  /**
   * Scroll up one page.
   *
   * @method pageUp
   */
  pageUp() {
    if (super.pageUp) { super.pageUp(); }
    return scrollOnePage(this, false);
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


// Return the item whose content spans the given y position (relative to the
// top of the list's scrolling client area), or null if not found.
//
// If downward is true, move down the list of items to find the first item
// found at the given y position; if downward is false, move up the list of
// items to find the last item at that position.
function getIndexOfItemAtY(element, y, downward) {
  let items = element.items;
  let start = downward ? 0 : items.length - 1;
  let end = downward ? items.length : 0;
  let step = downward ? 1 : -1;
  let scrollTarget = element.scrollTarget;
  let topOfClientArea = scrollTarget.offsetTop + scrollTarget.clientTop;

  // Find the item spanning the indicated y coordinate.
  let itemIndex;
  let itemTop;
  let item = items.find((item, index) => {
    itemIndex = index;
    itemTop = item.offsetTop - topOfClientArea;
    let itemBottom = itemTop + item.offsetHeight;
    return (itemTop <= y && itemBottom >= y);
  });

  if (!item) {
    return null;
  }

  // We may have found an item whose padding spans the given y coordinate,
  // but whose content is actually above/below that point.
  // TODO: If the item has a border, then padding should be included in
  // considering a hit.
  let itemStyle = getComputedStyle(item);
  let itemPaddingTop = parseFloat(itemStyle.paddingTop);
  let itemPaddingBottom = parseFloat(itemStyle.paddingBottom);
  let contentTop = itemTop + item.clientTop + itemPaddingTop;
  let contentBottom = contentTop + item.clientHeight - itemPaddingTop - itemPaddingBottom;
  if (downward && contentTop <= y || !downward && contentBottom >= y) {
    // The indicated coordinate hits the actual item content.
    return itemIndex;
  }
  else {
    // The indicated coordinate falls within the item's padding. Back up to
    // the item below/above the item we found and return that.
    return itemIndex - step;
  }
}

// Move by one page downward (if downward is true), or upward (if false).
// Return true if we ended up changing the selection, false if not.
// TODO: Better support for horizontal lists.
function scrollOnePage(element, downward) {

  // Determine the item visible just at the edge of direction we're heading.
  // We'll select that item if it's not already selected.
  let scrollTarget = element.scrollTarget;
  let edge = scrollTarget.scrollTop + (downward ? scrollTarget.clientHeight : 0);
  let indexOfItemAtEdge = getIndexOfItemAtY(element, edge, downward);

  let selectedIndex = element.selectedIndex;
  let newIndex;
  if (indexOfItemAtEdge && selectedIndex === indexOfItemAtEdge) {
    // The item at the edge was already selected, so scroll in the indicated
    // direction by one page. Leave the new item at that edge selected.
    let delta = (downward ? 1 : -1) * scrollTarget.clientHeight;
    newIndex = getIndexOfItemAtY(element, edge + delta, downward);
  }
  else {
    // The item at the edge wasn't selected yet. Instead of scrolling, we'll
    // just select that item. That is, the first attempt to page up/down
    // usually just moves the selection to the edge in that direction.
    newIndex = indexOfItemAtEdge;
  }

  if (!newIndex) {
    // We can't find an item in the direction we want to travel. Select the
    // last item (if moving downward) or first item (if moving upward).
    newIndex = (downward ? element.items.length - 1 : 0);
  }

  if (newIndex !== selectedIndex) {
    element.selectedIndex = newIndex;
    return true; // We handled the page up/down ourselves.
  }
  else {
    return false; // We didn't do anything.
  }
}
