import createSymbol from './createSymbol';
import microtask from './microtask';
import symbols from './symbols';


// Symbols for private data members on an element.
const canSelectNextSymbol = createSymbol('canSelectNext');
const canSelectPreviousSymbol = createSymbol('canSelectPrevious');
const previousSelectedIndexSymbol = createSymbol('previousSelectedIndex');
const previousSelectedItemSymbol = createSymbol('previousSelectedItem');
const selectedIndexSymbol = createSymbol('selectedIndex');
const selectedItemSymbol = createSymbol('selectedItem');
const selectionRequiredSymbol = createSymbol('selectionRequired');
const selectionWrapsSymbol = createSymbol('selectionWraps');


/* Exported function extends a base class with SingleSelection. */
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
  class SingleSelection extends base {

    constructor() {
      super();
      // Set defaults.
      if (typeof this.selectionRequired === 'undefined') {
        this.selectionRequired = this[symbols.defaults].selectionRequired;
      }
      if (typeof this.selectionWraps === 'undefined') {
        this.selectionWraps = this[symbols.defaults].selectionWraps;
      }
    }

    /**
     * Apply the indicate selection state to the item.
     *
     * The default implementation of this method does nothing. User-visible
     * effects will typically be handled by other mixins.
     *
     * @param {HTMLElement} item - the item being selected/deselected
     * @param {boolean} selected - true if the item is selected, false if not
     */
    [symbols.applySelection](item, selected) {
      if (super[symbols.applySelection]) { super[symbols.applySelection](item, selected); }
    }

    /**
     * True if the selection can be moved to the next item, false if not (the
     * selected item is the last item in the list).
     *
     * @type {boolean}
     */
    get canSelectNext() {
      return this[canSelectNextSymbol];
    }
    set canSelectNext(canSelectNext) {
      this[canSelectNextSymbol] = canSelectNext;
      if ('canSelectNext' in base.prototype) { super.canSelectNext = canSelectNext; }
    }

    /**
     * True if the selection can be moved to the previous item, false if not
     * (the selected item is the first one in the list).
     *
     * @type {boolean}
     */
    get canSelectPrevious() {
      return this[canSelectPreviousSymbol];
    }
    set canSelectPrevious(canSelectPrevious) {
      this[canSelectPreviousSymbol] = canSelectPrevious;
      if ('canSelectPrevious' in base.prototype) { super.canSelectPrevious = canSelectPrevious; }
    }

    get [symbols.defaults]() {
      const defaults = super[symbols.defaults] || {};
      defaults.selectionRequired = false;
      defaults.selectionWraps = false;
      return defaults;
    }

    /**
     * Handle a new item being added to the list.
     *
     * The default implementation of this method simply sets the item's
     * selection state to false.
     *
     * @param {HTMLElement} item - the item being added
     */
    [symbols.itemAdded](item) {
      if (super[symbols.itemAdded]) { super[symbols.itemAdded](item); }
      this[symbols.applySelection](item, item === this.selectedItem);
    }

    itemsChanged() {
      if (super.itemsChanged) { super.itemsChanged(); }

      if (this.selectionRequired) {
        // Ensure selection, but only after giving other mixins a chance to
        // finish their own itemsChanged work.
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
      return this[selectedIndexSymbol] != null ?
        this[selectedIndexSymbol] :
        -1;
    }
    set selectedIndex(index) {
      // Store index and corresponding item.
      const previousSelectedIndex = this[previousSelectedIndexSymbol];
      const items = this.items;
      const hasItems = items && items.length > 0;
      this[selectedIndexSymbol] = hasItems && index >= 0 && index < items.length ?
        index :
        -1;
      const item = hasItems && index >= 0 ?
        items[index] :
        null;
      this[selectedItemSymbol] = item;

      // Now let super do any work.
      if ('selectedIndex' in base.prototype) { super.selectedIndex = index; }

      if (index === previousSelectedIndex) {
        // The indicated index was already the selected index.
        return;
      }
      // The index changed.

      this[previousSelectedIndexSymbol] = index;

      const event = new CustomEvent('selected-index-changed', {
        detail: {
          selectedIndex: index,
          value: index // for Polymer binding. TODO: Verify still necessary
        }
      });
      this.dispatchEvent(event);

      if (this[previousSelectedItemSymbol] !== item) {
        // Update selectedItem property so it can have its own effects.
        this.selectedItem = item;
      }
    }

    /**
     * The currently selected item, or null if there is no selection.
     *
     * Setting this property to null deselects any currently-selected item.
     * Setting this property to an object that is not in the list has no effect.
     *
     * TODO: Even if selectionRequired, can still explicitly set selectedItem to null.
     * TODO: If selectionRequired, leave selection alone?
     *
     * @type {object}
     */
    get selectedItem() {
      return this[selectedItemSymbol] || null;
    }
    set selectedItem(item) {
      // Store index and corresponding item.
      const previousSelectedItem = this[previousSelectedItemSymbol];
      const items = this.items;
      const hasItems = items && items.length > 0;
      const index = hasItems ? items.indexOf(item) : -1;
      this[selectedIndexSymbol] = index;
      this[selectedItemSymbol] = index >= 0 ? item : null;

      // Now let super do any work.
      if ('selectedItem' in base.prototype) { super.selectedItem = item; }

      if (item === previousSelectedItem) {
        // The indicated item was already the selected item.
        return;
      }
      // The selected item changed.

      this[previousSelectedItemSymbol] = item;
      if (previousSelectedItem) {
        // Update selection state of old item.
        this[symbols.applySelection](previousSelectedItem, false);
      }
      if (item) {
        // Update selection state to new item.
        this[symbols.applySelection](item, true);
      }

      // TODO: Rationalize with selectedIndex so we're not recalculating item
      // or index in each setter.
      updatePossibleNavigations(this);

      const event = new CustomEvent('selected-item-changed', {
        detail: {
          selectedItem: item,
          value: item // for Polymer binding
        }
      });
      this.dispatchEvent(event);

      if (this[previousSelectedIndexSymbol] !== index) {
        // Update selectedIndex property so it can have its own effects.
        this.selectedIndex = index;
      }
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
     * @default false
     */
    get selectionRequired() {
      return this[selectionRequiredSymbol];
    }
    set selectionRequired(selectionRequired) {
      this[selectionRequiredSymbol] = selectionRequired;
      if ('selectionRequired' in base.prototype) { super.selectionRequired = selectionRequired; }
      if (selectionRequired) {
        ensureSelection(this);
      }
    }

    /**
     * True if selection navigations wrap from last to first, and vice versa.
     *
     * @type {boolean}
     * @default false
     */
    get selectionWraps() {
      return this[selectionWrapsSymbol];
    }
    set selectionWraps(value) {
      this[selectionWrapsSymbol] = String(value) === 'true';
      if ('selectionWraps' in base.prototype) { super.selectionWraps = value; }
      updatePossibleNavigations(this);
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
     *
     * If the list has no selection, the last item will be selected.
     */
    selectPrevious() {
      if (super.selectPrevious) { super.selectPrevious(); }
      const newIndex = this.selectedIndex < 0 ?
        this.items.length - 1 :     // No selection yet; select last item.
        this.selectedIndex - 1;
      return selectIndex(this, newIndex);
    }

    /**
     * Fires when the selectedItem property changes.
     *
     * @memberof SingleSelection
     * @event selected-item-changed
     * @param {HTMLElement} detail.selectedItem The new selected item.
     * @param {HTMLElement} detail.previousItem The previously selected item.
     */

    /**
     * Fires when the selectedIndex property changes.
     *
     * @memberof SingleSelection
     * @event selected-index-changed
     * @param {number} detail.selectedIndex The new selected index.
     */

  }

  return SingleSelection;
};


// If no item is selected, select a default item.
function ensureSelection(element) {
  const items = element.items;
  const itemCount = items ? items.length : 0;
  const previouslySelectedItem = element[selectedItemSymbol];
  if (previouslySelectedItem) {
    if (itemCount === 0) {
    // No items for us to select, but at least signal that there's no longer a
    // selection.
      element.selectedItem = null;
    } else if (previouslySelectedItem && items.indexOf(previouslySelectedItem) < 0) {
      // Previously selected item is no longer in the current set of items.
      // Select the item at the same index (if it exists) or as close as possible.
      const previousSelectedIndex = element[selectedIndexSymbol];
      const newIndex = Math.min(previousSelectedIndex, itemCount - 1);
      element.selectedItem = items[newIndex];
    }
  } else if (itemCount > 0) {
    // Select the first item by default.
    element.selectedIndex = 0;
  }
}

// Ensure the given index is within bounds, and select it if it's not already
// selected.
function selectIndex(element, index) {
  const count = element.items.length;

  const boundedIndex = (element.selectionWraps) ?
    // JavaScript mod doesn't handle negative numbers the way we want to wrap.
    // See http://stackoverflow.com/a/18618250/76472
    ((index % count) + count) % count :

    // Keep index within bounds of array.
    Math.max(Math.min(index, count - 1), 0);

  const previousIndex = element.selectedIndex;
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
  const items = element.items;
  if (items == null || items.length === 0) {
    // No items to select.
    canSelectNext = false;
    canSelectPrevious = false;
  } if (element.selectionWraps) {
    // Since there are items, can always go next/previous.
    canSelectNext = true;
    canSelectPrevious = true;
  } else {
    const index = element.selectedIndex;
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
