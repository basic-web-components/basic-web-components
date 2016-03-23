import toggleClass from '../../basic-component-mixins/src/toggleClass';


/* Exported function extends a base class with ContentAsItems. */
export default (base) => {

  /**
   * Mixin which maps content semantics (elements) to list item semantics.
   *
   * This mixin expects a component to provide a `content` property returning a
   * raw set of elements. You can provide that yourself, or use the
   * [DistributedChildrenAsContent](DistributedChildrenAsContent.md) mixin.
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
      if (this._items == null) {
        this._items = filterAuxiliaryElements(this.content);
      }
      return this._items;
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
