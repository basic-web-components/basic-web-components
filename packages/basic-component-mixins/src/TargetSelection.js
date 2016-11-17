import createSymbol from './createSymbol';


// Symbols for private data members on an element.
const itemsChangedListenerSymbol = createSymbol('itemsChangedListener');
const selectedItemChangedListenerSymbol = createSymbol('selectedItemChangedListener');


/* Exported function extends a base class with TargetSelection. */
export default (base) => {

  /**
   * Mixin which allows a component to delegate its own selection semantics to a
   * target element.
   *
   * This is useful when defining components that act as optional features for a
   * component that acts like a list. See basic-arrow-selection and
   * basic-page-dots for examples of components used as optional features for
   * components like basic-carousel. A typical usage might be:
   *
   *     <basic-arrow-selection>
   *       <basic-carousel>
   *         ... images, etc. ...
   *       </basic-carousel>
   *     </basic-arrow-selection>
   *
   * Because basic-arrow-selection uses the
   * [TargetSelection](TargetSelection.md) mixin, it exposes members to access a
   * selection: `selectNext`, `selectPrevious`, `selectedIndex`, etc. These are
   * all delegated to the child component (here, a basic-carousel).
   *
   * This mixin expects a `target` property to be set to the element actually
   * managing the selection. You can set that property yourself, or you can use
   * the [ContentFirstChildTarget](ContentFirstChildTarget.md) mixin to
   * implicitly take the component's first child as the target. This is what
   * basic-arrow-selection (above) does.
   */
  class TargetSelection extends base {

    /**
     * True if the selection can be moved to the next item, false if not (the
     * selected item is the last item in the list).
     *
     * @type {boolean}
     */
    get canSelectNext() {
      return this.target && this.target.canSelectNext;
    }
    set canSelectNext(canSelectNext) {
      if ('canSelectNext' in base.prototype) { super.canSelectNext = canSelectNext; }
      const target = this.target;
      if (target) {
        target.canSelectNext = canSelectNext;
      }
    }

    /**
     * True if the selection can be moved to the previous item, false if not
     * (the selected item is the first one in the list).
     *
     * @type {boolean}
     */
    get canSelectPrevious() {
      return this.target && this.target.canSelectPrevious;
    }
    set canSelectPrevious(canSelectPrevious) {
      if ('canSelectPrevious' in base.prototype) { super.canSelectPrevious = canSelectPrevious; }
      const target = this.target;
      if (target) {
        target.canSelectPrevious = canSelectPrevious;
      }
    }

    /**
     * The current set of items in the list.
     *
     * @type {HTMLElement[]}
     */
    get items() {
      const items = this.target && this.target.items;
      return items || [];
    }

    /**
     * This method is invoked when the underlying contents change. It is also
     * invoked on component initialization – since the items have "changed" from
     * being nothing.
     */
    itemsChanged() {
      if (super.itemsChanged) { super.itemsChanged(); }
      this.dispatchEvent(new CustomEvent('items-changed'));
    }

    get selectedFraction() {
      return this.target && this.target.selectedFraction;
    }
    set selectedFraction(fraction) {
      if ('selectedFraction' in base.prototype) { super.selectedFraction = fraction; }
      const target = this.target;
      if (target && target.selectedFraction !== fraction) {
        target.selectedFraction = fraction;
      }
    }

    /**
     * Index of the currently selected item, or -1 if there is no selection.
     *
     * @type {number}
     */
    get selectedIndex() {
      return this.target && this.target.selectedIndex;
    }
    set selectedIndex(index) {
      if ('selectedIndex' in base.prototype) { super.selectedIndex = index; }
      const target = this.target;
      if (target) {
        target.selectedIndex = index;
      }
    }

    /**
     * The currently selected item, or null if there is no selection.
     *
     * @type {HTMLElement}
     */
    get selectedItem() {
      return this.target && this.target.selectedItem;
    }
    set selectedItem(item) {
      if ('selectedItem' in base.prototype) { super.selectedItem = item; }
      const target = this.target;
      if (target) {
        target.selectedItem = item;
      }
    }

    // This method exists so wrapping components can handle a change in the
    // selection without potentially re-invoking the selectedItem setter. This
    // is kind of unsatisfying, though. It'd be nicer to let such components
    // just implement the getter/setter for selectedItem, but have a way to
    // know whether they need to also invoke the property getter/setter for the
    // target component.
    selectedItemChanged() {
      if (super.selectedItemChanged) { super.selectedItemChanged(); }
      this.dispatchEvent(new CustomEvent('selected-item-changed'));
    }

    /**
     * Select the first item in the list.
     */
    selectFirst() {
      if (super.selectFirst) { super.selectFirst(); }
      return this.target && this.target.selectFirst();
    }

    /**
     * True if the list should always have a selection (if it has items).
     *
     * @type {boolean}
     * @default false
     */
    get selectionRequired() {
      return this.target && this.target.selectionRequired;
    }
    set selectionRequired(selectionRequired) {
      if ('selectionRequired' in base.prototype) { super.selectionRequired = selectionRequired; }
      const target = this.target;
      if (target) {
        target.selectionRequired = selectionRequired;
      }
    }

    /**
     * True if selection navigations wrap from last to first, and vice versa.
     *
     * @type {boolean}
     * @default {false}
     */
    get selectionWraps() {
      return this.target && this.target.selectionWraps;
    }
    set selectionWraps(value) {
      if ('selectionWraps' in base.prototype) { super.selectionWraps = value; }
      const target = this.target;
      if (target) {
        target.selectionWraps = value;
      }
    }

    /**
     * Select the last item in the list.
     */
    selectLast() {
      if (super.selectLast) { super.selectLast(); }
      return this.target && this.target.selectLast();
    }

    /**
     * Select the next item in the list.
     */
    selectNext() {
      if (super.selectNext) { super.selectNext(); }
      return this.target && this.target.selectNext();
    }

    /**
     * Select the previous item in the list.
     *
     * If the list has no selection, the last item will be selected.
     */
    selectPrevious() {
      if (super.selectPrevious) { super.selectPrevious(); }
      return this.target && this.target.selectPrevious();
    }

    /**
     * Gets/sets the target element to which this component will delegate
     * selection actions.
     *
     * @type {HTMLElement}
     */
    get target() {
      return super.target;
    }
    set target(element) {
      if ('target' in base.prototype) { super.target = element; }
      if (this[itemsChangedListenerSymbol]) {
        this.removeEventListener('items-changed', this[itemsChangedListenerSymbol]);
      }
      if (this[selectedItemChangedListenerSymbol]) {
        this.removeEventListener('selected-item-changed', this[selectedItemChangedListenerSymbol]);
      }
      this[itemsChangedListenerSymbol] = element.addEventListener('items-changed', event => {
        this.itemsChanged();
      });
      this[selectedItemChangedListenerSymbol] = element.addEventListener('selected-item-changed', event => {
        // REVIEW: Components applying TargetSelection both listen to this
        // event (on the target), and raise it themselves. In theory, they're
        // expected to *not* catch the events they raise themselves, but Chrome
        // (at least) appears to violate that expectation. That is, it's
        // possible to have event.target === this. More confusingly, the guard
        // below, which is intended to avoid recursive calls to
        // selectedItemChanged, doesn't work as expected. Even if the debugger
        // shows event.target === this, the contents of the "if" statement will
        // be executed.
        if (event.target !== this) {
          // Let the component know the target's selection changed, but without
          // re-invoking the selectIndex/selectedItem setter.
          this.selectedItemChanged();
        }
      });
      // Force initial refresh.
      this.itemsChanged();
    }

  }

  return TargetSelection;
};
