# API Documentation
<a name="SingleSelection"></a>

## SingleSelection
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

* [SingleSelection](#SingleSelection)
    * [.canSelectNext](#SingleSelection+canSelectNext) : <code>boolean</code>
    * [.canSelectPrevious](#SingleSelection+canSelectPrevious) : <code>boolean</code>
    * ["selected-index-changed"](#SingleSelection.event_selected-index-changed)
    * ["selected-item-changed"](#SingleSelection.event_selected-item-changed)
    * [.selectedIndex](#SingleSelection+selectedIndex) : <code>number</code>
    * [.selectedItem](#SingleSelection+selectedItem) : <code>object</code>
    * [.selectFirst()](#SingleSelection+selectFirst)
    * [.selectionRequired](#SingleSelection+selectionRequired) : <code>boolean</code>
    * [.selectionWraps](#SingleSelection+selectionWraps) : <code>boolean</code>
    * [.selectLast()](#SingleSelection+selectLast)
    * [.selectNext()](#SingleSelection+selectNext)
    * [.selectPrevious()](#SingleSelection+selectPrevious)

<a name="SingleSelection+canSelectNext"></a>

### singleSelection.canSelectNext : <code>boolean</code>
True if the selection can be moved to the next item, false if not (the
selected item is the last item in the list).

  **Kind**: instance property of <code>[SingleSelection](#SingleSelection)</code>
<a name="SingleSelection+canSelectPrevious"></a>

### singleSelection.canSelectPrevious : <code>boolean</code>
True if the selection can be moved to the previous item, false if not
(the selected item is the first one in the list).

  **Kind**: instance property of <code>[SingleSelection](#SingleSelection)</code>
<a name="SingleSelection.event_selected-index-changed"></a>

### "selected-index-changed"
Fires when the selectedIndex property changes.

  **Kind**: event emitted by <code>[SingleSelection](#SingleSelection)</code>

| Param | Type | Description |
| --- | --- | --- |
| detail.selectedIndex | <code>number</code> | The new selected index. |

<a name="SingleSelection.event_selected-item-changed"></a>

### "selected-item-changed"
Fires when the selectedItem property changes.

  **Kind**: event emitted by <code>[SingleSelection](#SingleSelection)</code>

| Param | Type | Description |
| --- | --- | --- |
| detail.selectedItem | <code>HTMLElement</code> | The new selected item. |
| detail.previousItem | <code>HTMLElement</code> | The previously selected item. |

<a name="SingleSelection+selectedIndex"></a>

### singleSelection.selectedIndex : <code>number</code>
The index of the item which is currently selected.

If `selectionWraps` is false, the index is -1 if there is no selection.
In that case, setting the index to -1 will deselect any
currently-selected item.

  **Kind**: instance property of <code>[SingleSelection](#SingleSelection)</code>
<a name="SingleSelection+selectedItem"></a>

### singleSelection.selectedItem : <code>object</code>
The currently selected item, or null if there is no selection.

Setting this property to null deselects any currently-selected item.

  **Kind**: instance property of <code>[SingleSelection](#SingleSelection)</code>
<a name="SingleSelection+selectFirst"></a>

### singleSelection.selectFirst()
Select the first item in the list.

  **Kind**: instance method of <code>[SingleSelection](#SingleSelection)</code>
<a name="SingleSelection+selectionRequired"></a>

### singleSelection.selectionRequired : <code>boolean</code>
True if the list should always have a selection (if it has items).

  **Kind**: instance property of <code>[SingleSelection](#SingleSelection)</code>
**Default**: <code>false</code>  
<a name="SingleSelection+selectionWraps"></a>

### singleSelection.selectionWraps : <code>boolean</code>
True if selection navigations wrap from last to first, and vice versa.

  **Kind**: instance property of <code>[SingleSelection](#SingleSelection)</code>
**Default**: <code>false</code>  
<a name="SingleSelection+selectLast"></a>

### singleSelection.selectLast()
Select the last item in the list.

  **Kind**: instance method of <code>[SingleSelection](#SingleSelection)</code>
<a name="SingleSelection+selectNext"></a>

### singleSelection.selectNext()
Select the next item in the list.

  **Kind**: instance method of <code>[SingleSelection](#SingleSelection)</code>
<a name="SingleSelection+selectPrevious"></a>

### singleSelection.selectPrevious()
Select the previous item in the list.

If the list has no selection, the last item will be selected.

  **Kind**: instance method of <code>[SingleSelection](#SingleSelection)</code>
