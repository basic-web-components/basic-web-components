# API Documentation
<a name="ItemsSelection"></a>
## ItemsSelection
Mixin which manages single-selection semantics for items in a list.

This mixin expects a component to provide an `items` array of all elements
in the list. A standard way to do that with is the
[ContentAsItems](ContentAsItems.md) mixin, which takes a component's
content (typically its distributed children) as the set of list items; see
that mixin for details.

This mixin tracks a single selected item in the list, and provides means to
get and set that state by item position (`selectedIndex`) or item identity
(`selectedItem`). The selection can be moved in the list via the methods
`selectFirst`, `selectLast`, `selectNext`, and `selectPrevious`.

This mixin does not produce any user-visible effects to represent
selection. Other mixins, such as
[SelectionAriaActive](SelectionAriaActive.md),
[SelectionHighlight](SelectionHighlight.md) and
[SelectionInView](SelectionInView.md), modify the selected item in common
ways to let the user know a given item is selected or not selected.

  **Kind**: global class

* [ItemsSelection](#ItemsSelection)
    * _instance_
        * [.canSelectNext](#ItemsSelection+canSelectNext) : <code>boolean</code>
        * [.canSelectPrevious](#ItemsSelection+canSelectPrevious) : <code>boolean</code>
        * [.selectedIndex](#ItemsSelection+selectedIndex) : <code>number</code>
        * [.selectedItem](#ItemsSelection+selectedItem) : <code>object</code>
        * [.selectionRequired](#ItemsSelection+selectionRequired) : <code>boolean</code>
        * [.applySelection(item, selected)](#ItemsSelection+applySelection)
        * [.itemAdded(item)](#ItemsSelection+itemAdded)
        * [.selectFirst()](#ItemsSelection+selectFirst)
        * [.selectLast()](#ItemsSelection+selectLast)
        * [.selectNext()](#ItemsSelection+selectNext)
        * [.selectPrevious()](#ItemsSelection+selectPrevious)
    * _static_
        * ["selected-item-changed"](#ItemsSelection.event_selected-item-changed)
        * ["selected-index-changed"](#ItemsSelection.event_selected-index-changed)

<a name="ItemsSelection+canSelectNext"></a>
### itemsSelection.canSelectNext : <code>boolean</code>
True if the selection can be moved to the next item, false if not (the
selected item is the last item in the list).

  **Kind**: instance property of <code>[ItemsSelection](#ItemsSelection)</code>
<a name="ItemsSelection+canSelectPrevious"></a>
### itemsSelection.canSelectPrevious : <code>boolean</code>
True if the selection can be moved to the previous item, false if not
(the selected item is the first one in the list).

  **Kind**: instance property of <code>[ItemsSelection](#ItemsSelection)</code>
<a name="ItemsSelection+selectedIndex"></a>
### itemsSelection.selectedIndex : <code>number</code>
The index of the item which is currently selected, or -1 if there is no
selection.

Setting the index to -1 deselects any current-selected item.

  **Kind**: instance property of <code>[ItemsSelection](#ItemsSelection)</code>
<a name="ItemsSelection+selectedItem"></a>
### itemsSelection.selectedItem : <code>object</code>
The currently selected item, or null if there is no selection.

Setting this property to null deselects any currently-selected item.

  **Kind**: instance property of <code>[ItemsSelection](#ItemsSelection)</code>
<a name="ItemsSelection+selectionRequired"></a>
### itemsSelection.selectionRequired : <code>boolean</code>
True if the list should always have a selection (if it has items).

  **Kind**: instance property of <code>[ItemsSelection](#ItemsSelection)</code>
<a name="ItemsSelection+applySelection"></a>
### itemsSelection.applySelection(item, selected)
Apply the indicate selection state to the item.

The default implementation of this method does nothing. User-visible
effects will typically be handled by other mixins.

  **Kind**: instance method of <code>[ItemsSelection](#ItemsSelection)</code>

| Param | Type | Description |
| --- | --- | --- |
| item | <code>HTMLElement</code> | the item being selected/deselected |
| selected | <code>boolean</code> | true if the item is selected, false if not |

<a name="ItemsSelection+itemAdded"></a>
### itemsSelection.itemAdded(item)
Handle a new item being added to the list.

The default implementation of this method simply sets the item's
selection state to false.

  **Kind**: instance method of <code>[ItemsSelection](#ItemsSelection)</code>

| Param | Type | Description |
| --- | --- | --- |
| item | <code>HTMLElement</code> | the item being added |

<a name="ItemsSelection+selectFirst"></a>
### itemsSelection.selectFirst()
Select the first item in the list.

  **Kind**: instance method of <code>[ItemsSelection](#ItemsSelection)</code>
<a name="ItemsSelection+selectLast"></a>
### itemsSelection.selectLast()
Select the last item in the list.

  **Kind**: instance method of <code>[ItemsSelection](#ItemsSelection)</code>
<a name="ItemsSelection+selectNext"></a>
### itemsSelection.selectNext()
Select the next item in the list.

  **Kind**: instance method of <code>[ItemsSelection](#ItemsSelection)</code>
<a name="ItemsSelection+selectPrevious"></a>
### itemsSelection.selectPrevious()
Select the previous item in the list.

  **Kind**: instance method of <code>[ItemsSelection](#ItemsSelection)</code>
<a name="ItemsSelection.event_selected-item-changed"></a>
### "selected-item-changed"
Fires when the selectedItem property changes.

  **Kind**: event emitted by <code>[ItemsSelection](#ItemsSelection)</code>

| Param | Type | Description |
| --- | --- | --- |
| detail.selectedItem | <code>HTMLElement</code> | The new selected item. |
| detail.previousItem | <code>HTMLElement</code> | The previously selected item. |

<a name="ItemsSelection.event_selected-index-changed"></a>
### "selected-index-changed"
Fires when the selectedIndex property changes.

  **Kind**: event emitted by <code>[ItemsSelection](#ItemsSelection)</code>

| Param | Type | Description |
| --- | --- | --- |
| detail.selectedIndex | <code>number</code> | The new selected index. |

