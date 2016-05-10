import microtask from './microtask';

/* Exported function extends a base class with ItemsSelection. */
export default (base) => {

  /**
   * Mixin which manages single-selection semantics for items in a list.
   *
   * This mixin expects a component to provide an `items` array of all elements
   * in the list. A standard way to do that with is the
   * [ContentAsItems](ContentAsItems.md) mixin, which takes a component's
   * content (typically its distributed children) as the set of list items; see
   * that mixin for details.
   *
   * This mixin tracks a single selected item in the list, and provides means to
   * get and set that state by item position (`selectedIndex`) or item identity
   * (`selectedItem`). The selection can be moved in the list via the methods
   * `selectFirst`, `selectLast`, `selectNext`, and `selectPrevious`.
   *
   * This mixin does not produce any user-visible effects to represent
   * selection. Other mixins, such as
   * [SelectionAriaActive](SelectionAriaActive.md),
   * [SelectionHighlight](SelectionHighlight.md) and
   * [SelectionInView](SelectionInView.md), modify the selected item in common
   * ways to let the user know a given item is selected or not selected.
   */
  class ItemsSelection extends base {

    /**
     * Apply the indicate selection state to the item.
     *
     * The default implementation of this method does nothing. User-visible
     * effects will typically be handled by other mixins.
     *
     * @param {HTMLElement} item - the item being selected/deselected
     * @param {boolean} selected - true if the item is selected, false if not
     */
    applySelection(item, selected) {
      if (super.applySelection) { super.applySelection(item, selected); }
    }

    /**
     * True if the selection can be moved to the next item, false if not (the
     * selected item is the last item in the list).
     *
     * @type {boolean}
     */
    get canSelectNext() {
      return this._canSelectNext;
    }
    set canSelectNext(canSelectNext) {
      if ('canSelectNext' in base.prototype) { super.canSelectNext = canSelectNext; }
      this._canSelectNext = canSelectNext;
    }

    /**
     * True if the selection can be moved to the previous item, false if not
     * (the selected item is the first one in the list).
     *
     * @type {boolean}
     */
    get canSelectPrevious() {
      return this._canSelectPrevious;
    }
    set canSelectPrevious(canSelectPrevious) {
      if ('canSelectPrevious' in base.prototype) { super.canSelectPrevious = canSelectPrevious; }
      this._canSelectPrevious = canSelectPrevious;
    }

    /**
     * Handle a new item being added to the list.
     *
     * The default implementation of this method simply sets the item's
     * selection state to false.
     *
     * @param {HTMLElement} item - the item being added
     */
    itemAdded(item) {
      if (super.itemAdded) { super.itemAdded(item); }
      this.applySelection(item, item === this.selectedItem);
    }

    itemsChanged() {
      if (super.itemsChanged) { super.itemsChanged(); }

      if (this.selectionRequired) {
        // Ensure selection, but do this in the next tick to give other mixins a
        // chance to do their own itemsChanged work.
        microtask(() => {
          ensureSelection(this);
        });
      }

      // The change in items may have affected which navigations are possible.
      updatePossibleNavigations(this);
    }

    /**
     * The index of the item which is currently selected.
     *
     * If `selectionWraps` is false, the index is -1 if there is no selection.
     * In that case, setting the index to -1 will deselect any
     * currently-selected item.
     *
     * @type {number}
     */
    get selectedIndex() {
      let selectedItem = this.selectedItem;

      // TODO: If selection wasn't found, most likely cause is that the DOM was
      // manipulated from underneath us. Once we track content changes, turn
      // this into a warning.
      // TODO: Memoize
      return selectedItem ?
        this.items.indexOf(selectedItem) :
        -1;
    }
    set selectedIndex(index) {
      if ('selectedIndex' in base.prototype) { super.selectedIndex = index; }
      let items = this.items;
      let item;
      if (index < 0 || items.length === 0) {
        item = null;
      } else {
        item = items[index];
      }
      this.selectedItem = item;

      let event = new CustomEvent('selected-index-changed', {
        detail: {
          selectedIndex: index,
          value: index // for Polymer binding
        }
      });
      this.dispatchEvent(event);
    }

    /**
     * The currently selected item, or null if there is no selection.
     *
     * Setting this property to null deselects any currently-selected item.
     *
     * @type {object}
     */
    get selectedItem() {
      return this._selectedItem || null;
    }
    set selectedItem(item) {
      if ('selectedItem' in base.prototype) { super.selectedItem = item; }
      let previousItem = this._selectedItem;
      if (previousItem) {
        if (item === previousItem) {
          // The indicated item is already the selected item.
          return;
        }
        // Remove previous selection.
        this.applySelection(previousItem, false);
      }

      // TODO: Confirm item is actually in the list before selecting.
      this._selectedItem = item;
      if (item) {
        this.applySelection(item, true);
      }

      // TODO: Rationalize with selectedIndex so we're not recalculating item
      // or index in each setter.
      updatePossibleNavigations(this);

      let event = new CustomEvent('selected-item-changed', {
        detail: {
          selectedItem: item,
          previousItem: previousItem,
          value: item // for Polymer binding
        }
      });
      this.dispatchEvent(event);
    }

    /**
     * Select the first item in the list.
     */
    selectFirst() {
      if (super.selectFirst) { super.selectFirst(); }
      return selectIndex(this, 0);
    }

    /**
     * True if the list should always have a selection (if it has items).
     *
     * @type {boolean}
     */
    get selectionRequired() {
      return this._selectionRequired;
    }
    set selectionRequired(selectionRequired) {
      if ('selectionRequired' in base.prototype) { super.selectionRequired = selectionRequired; }
      this._selectionRequired = selectionRequired;
      if (selectionRequired) {
        ensureSelection(this);
      }
    }

    /**
     * Select the last item in the list.
     */
    selectLast() {
      if (super.selectLast) { super.selectLast(); }
      return selectIndex(this, this.items.length - 1);
    }

    /**
     * Select the next item in the list.
     */
    selectNext() {
      if (super.selectNext) { super.selectNext(); }
      return selectIndex(this, this.selectedIndex + 1);
    }

    /**
     * Select the previous item in the list.
     */
    selectPrevious() {
      if (super.selectPrevious) { super.selectPrevious(); }
      return selectIndex(this, this.selectedIndex - 1);
    }

    /**
     * True if selection navigations wrap from last to first, and vice versa.
     *
     * @type {boolean}
     * @default {false}
     */
    get selectionWraps() {
      return this._selectionWraps || false;
    }
    set selectionWraps(value) {
      if ('selectionWraps' in base.prototype) { super.selectionWraps = value; }
      this._selectionWraps = value;
      updatePossibleNavigations(this);
    }

    /**
     * Fires when the selectedItem property changes.
     *
     * @memberof ItemsSelection
     * @event selected-item-changed
     * @param {HTMLElement} detail.selectedItem The new selected item.
     * @param {HTMLElement} detail.previousItem The previously selected item.
     */

    /**
     * Fires when the selectedIndex property changes.
     *
     * @memberof ItemsSelection
     * @event selected-index-changed
     * @param {number} detail.selectedIndex The new selected index.
     */

  }

  return ItemsSelection;
};


// If no item is selected, select a default item.
function ensureSelection(element) {
  let index = element.selectedIndex;
  if (index < 0) {
    // Selected item is no longer in the current set of items.
    if (element.items && element.items.length > 0) {
      // Select the first item.
      // TODO: If the previously-selected item has been deleted, try to select
      // an item adjacent to the position it held.
      element.selectedIndex = 0;
    } else {
      // No items for us to select, but we can at least signal that there's no
      // longer a selection.
      element.selectedItem = null;
    }
  }
}

// Ensure the given index is within bounds, and select it if it's not already
// selected.
function selectIndex(element, index) {
  let count = element.items.length;
  let boundedIndex;
  if (element.selectionWraps) {
    // JavaScript mod doesn't handle negative numbers the way we want to wrap.
    // See http://stackoverflow.com/a/18618250/76472
    boundedIndex = ((index % count) + count) % count;
  } else {
    // Keep index within bounds of array.
    boundedIndex = Math.max(Math.min(index, count - 1), 0);
  }
  let previousIndex = element.selectedIndex;
  if (previousIndex !== boundedIndex) {
    element.selectedIndex = boundedIndex;
    return true;
  } else {
    return false;
  }
}

// Following a change in selection, report whether it's now possible to
// go next/previous from the given index.
function updatePossibleNavigations(element) {
  let canSelectNext;
  let canSelectPrevious;
  let items = element.items;
  if (items == null || items.length === 0) {
    // No items to select.
    canSelectNext = false;
    canSelectPrevious = false;
  } if (element.selectionWraps) {
    // Since there are items, can always go next/previous.
    canSelectNext = true;
    canSelectPrevious = true;
  } else {
    let index = element.selectedIndex;
    if (index < 0 && items.length > 0) {
      // Special case. If there are items but no selection, declare that it's
      // always possible to go next/previous to create a selection.
      canSelectNext = true;
      canSelectPrevious = true;
    } else {
      // Normal case: we have an index in a list that has items.
      canSelectPrevious = (index > 0);
      canSelectNext = (index < items.length - 1);
    }
  }
  element.canSelectNext = canSelectNext;
  element.canSelectPrevious = canSelectPrevious;
}
