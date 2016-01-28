/**
 * @class TargetSelection
 * @classdesc Mixin that allows a component to delegate its own selection
 * semantics to a target element.
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
 * Because basic-arrow-selection uses the TargetSelection mixin, it exposes
 * members to access a selection: `selectNext`, `selectPrevious`,
 * `selectedIndex`, etc. These are all delegated to the child component (here, a
 * basic-carousel).
 *
 * This mixin expects a `target` property to be set to the element actually
 * managing the selection. You can set that property yourself, or you can use
 * the ContentFirstChildTarget mixin to implicitly take the component's first
 * child as the target. This is what basic-arrow-selection (above) does.
 */


export default (base) => class TargetSelection extends base {

  // attachedCallback() {
  //   // Apply any selection made before assimilation.
  //   if (this._prematureSelectedIndex
  //       && 'selectedIndex' in this && this.selectedIndex === -1) {
  //     this.selectedIndex = this._prematureSelectedIndex;
  //     this._prematureSelectedIndex = null;
  //   }
  // }

  /**
   * Return the positional index for the indicated item.
   *
   * @method indexOfItem
   * @param {HTMLElement} item The item whose index is requested.
   * @returns {number} The index of the item, or -1 if not found.
   */
  indexOfItem(item) {
    if (super.indexOfItem) { super.indexOfItem(item); }
    let target = this.target;
    return target ?
      target.indexOfItem(item) :
      -1;
  }

  /**
   * The current set of items in the list.
   *
   * @member {HTMLElement[]}
   */
  get items() {
    let target = this.target;
    let items = target && target.items;
    return items || [];
  }

  /**
   * This method is invoked when the underlying contents change. It is also
   * invoked on component initialization – since the items have "changed" from
   * being nothing.
   *
   * @method itemsChanged
   */
  itemsChanged() {
    if (super.itemsChanged) { super.itemsChanged(); }
    this.dispatchEvent(new CustomEvent('items-changed'));
  }

  /**
   * The index of the item which is currently selected, or -1 if there is no
   * selection.
   *
   * @property selectedIndex
   * @type Number
   */
  get selectedIndex() {
    let target = this.target;
    return target && target.selectedIndex;
  }
  set selectedIndex(index) {
    if ('selectedIndex' in base.prototype) { super.selectedIndex = index; }
    // if ('selectedIndex' in this {
    //   this.selectedIndex = index;
    // } else {
    //   // Selection is being made before the collective supports it.
    //   this._prematureSelectedIndex = index;
    // }
    let target = this.target;
    if (target && target.selectedIndex !== index) {
      target.selectedIndex = index;
    }
  }

  /**
   * The currently selected item, or null if there is no selection.
   *
   * @property selectedItem
   * @type {HTMLElement}
   */
  get selectedItem() {
    let target = this.target;
    return target && target.selectedItem;
  }
  set selectedItem(item) {
    if ('selectedItem' in base.prototype) { super.selectedItem = item; }
    let target = this.target;
    if (target) {
      target.selectedItem = item;
    }
  }

  selectedItemChanged() {
    if (super.selectedItemChanged) { super.selectedItemChanged(); }
  }

  /**
   * Gets/sets the target element to which this component will delegate
   * selection actions.
   *
   * @property target
   * @type {HTMLElement}
   */
  get target() {
    return super.target;
  }
  set target(element) {
    if ('target' in base.prototype) { super.target = element; }
    if (this._itemsChangedListener) {
      this.removeEventListener('items-changed', this._itemsChangedListener);
    }
    if (this._selectedItemChangedListener) {
      this.removeEventListener('selected-item-changed', this._selectedItemChangedListener);
    }
    this._itemsChangedListener = element.addEventListener('items-changed', event => {
      this.itemsChanged();
    });
    this._selectedItemChangedListener = element.addEventListener('selected-item-changed', event => {
      // Let the component know the target's selection changed, but without
      // re-invoking the selectIndex/selectedItem setter.
      this.selectedItemChanged();
    });
    // Force initial refresh.
    this.itemsChanged();
  }

};
