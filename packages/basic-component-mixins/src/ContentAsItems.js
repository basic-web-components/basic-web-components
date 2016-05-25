import toggleClass from '../../basic-component-mixins/src/toggleClass';


/* Exported function extends a base class with ContentAsItems. */
export default (base) => {

  /**
   * Mixin which maps content semantics (elements) to list item semantics.
   *
   * Items differ from element contents in several ways:
   *
   * * They are often referenced via index.
   * * They may have a selection state.
   * * It's common to do work to initialize the appearance or state of a new
   *   item.
   * * Auxiliary invisible child elements are filtered out and not counted as
   *   items. Auxiliary elements include link, script, style, and template
   *   elements. This filtering ensures that those auxiliary elements can be
   *   used in markup inside of a list without being treated as list items.
   *
   * This mixin expects a component to provide a `content` property returning a
   * raw set of elements. You can provide that yourself, or use the
   * [DistributedChildrenAsContent](DistributedChildrenAsContent.md) mixin.
   *
   * The most commonly referenced property defined by this mixin is the `items`
   * property. To avoid having to do work each time that property is requested,
   * this mixin supports an optimized mode. If you invoke the `contentChanged`
   * method when the set of items changes, the mixin concludes that you'll take
   * care of notifying it of future changes, and turns on the optimization. With
   * that on, the mixin saves a reference to the computed set of items, and will
   * return that immediately on subsequent calls to the `items` property. If you
   * use this mixin in conjunction with the
   * [ObserveContentChanges](ObserveContentChanges.md) mixin, the
   * `contentChanged` method will be invoked for you when the element's children
   * change, turning on the optimization automatically.
   */
  class ContentAsItems extends base {

    /**
     * Apply the selection state to a single item.
     *
     * Invoke this method to signal that the selected state of the indicated item
     * has changed. By default, this applies a `selected` CSS class if the item
     * is selected, and removed it if not selected.
     *
     * @param {HTMLElement} item - The item whose selection state has changed.
     * @param {boolean} selected - True if the item is selected, false if not.
     */
    applySelection(item, selected) {
      if (super.applySelection) { super.applySelection(item, selected); }
      toggleClass(item, 'selected', selected);
    }

    contentChanged() {
      if (super.contentChanged) { super.contentChanged(); }

      // Since we got the contentChanged call, we'll assume we'll be notified if
      // the set of items changes later. We turn on memoization of the items
      // property by setting our internal property to null (instead of
      // undefined).
      this._items = null;

      this.itemsChanged();
    }

    /**
     * This method is invoked whenever a new item is added to the list.
     *
     * The default implementation of this method does nothing. You can override
     * this to perform per-item initialization.
     *
     * @param {HTMLElement} item - The item that was added.
     */
    itemAdded(item) {
      if (super.itemAdded) { super.itemAdded(item); }
    }

    /**
     * The current set of items in the list. See the top-level documentation for
     * mixin for a description of how items differ from plain content.
     *
     * @type {HTMLElement[]}
     */
    get items() {
      let items;
      if (this._items == null) {
        items = filterAuxiliaryElements(this.content);
        // Note: test for *equality* with null; don't treat undefined as a match.
        if (this._items === null) {
          // Memoize the set of items.
          this._items = items;
        }
      } else {
        // Return the memoized items.
        items = this._items;
      }
      return items;
    }

    /**
     * This method is invoked when the underlying contents change. It is also
     * invoked on component initialization – since the items have "changed" from
     * being nothing.
     */
    itemsChanged() {
      if (super.itemsChanged) { super.itemsChanged(); }

      // Perform per-item initialization.
      this.items.forEach(item => {
        if (!item._itemInitialized) {
          this.itemAdded(item);
          item._itemInitialized = true;
        }
      });

      this.dispatchEvent(new CustomEvent('items-changed'));
    }

    /*
     * @event items-changed
     *
     * This event is raised when the set of items changes.
     */
  }

  return ContentAsItems;
};


// Return the given elements, filtering out auxiliary elements that aren't
// typically visible. Items which are not elements are returned as is.
function filterAuxiliaryElements(items) {
  let auxiliaryTags = [
    'link',
    'script',
    'style',
    'template'
  ];
  return [].filter.call(items, function(item) {
    return !item.localName || auxiliaryTags.indexOf(item.localName) < 0;
  });
}


/**
 * Fires when the items in the list change.
 *
 * @memberof ContentAsItems
 * @event items-changed
 */
