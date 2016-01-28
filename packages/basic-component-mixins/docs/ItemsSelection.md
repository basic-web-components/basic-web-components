<a name="ItemsSelection"></a>
## ItemsSelection
Mixin which manages single-selection semantics for items in a
list.

This mixin expects a component to provide an `items` array of all elements
in the list. A standard way to do that with is the ContentAsItems mixin,
which takes a component's content (typically its distributed children) as the
set of list items; see that mixin for details.

This mixin tracks a single selected item in the list, and provides means to
get and set that state by item position (`selectedIndex`) or item identity
(`selectedItem`). The selection can be moved in the list via the methods
`selectFirst`, `selectLast`, `selectNext`, and `selectPrevious`.

This mixin does not produce any user-visible effects to represent selection.
Other mixins, such as SelectionAriaActive, SelectionHighlight and
SelectionInView, modify the selected item in common ways to let the user
know a given item is selected or not selected.

**Kind**: global class  
<a name="undefinedcanSelectNext"></a>
## undefinedcanSelectNext : <code>boolean</code>
True if the selection can be moved to the next item, false if not (the
selected item is the last item in the list).

**Kind**: global variable  
**Properties**

| Name |
| --- |
| canSelectNext | 

<a name="undefinedcanSelectPrevious"></a>
## undefinedcanSelectPrevious : <code>boolean</code>
True if the selection can be moved to the previous item, false if not (the
selected item is the first one in the list).

**Kind**: global variable  
**Properties**

| Name |
| --- |
| canSelectPrevious | 

<a name="undefinedselectedIndex"></a>
## undefinedselectedIndex : <code>number</code>
The index of the item which is currently selected, or -1 if there is no
selection.

Setting the index to -1 deselects any current-selected item.

**Kind**: global variable  
**Properties**

| Name |
| --- |
| selectedIndex | 

<a name="undefinedselectedItem"></a>
## undefinedselectedItem : <code>object</code>
The currently selected item, or null if there is no selection.

Setting this property to null deselects any currently-selected item.

**Kind**: global variable  
**Properties**

| Name |
| --- |
| selectedItem | 

<a name="undefinedselectionRequired"></a>
## undefinedselectionRequired : <code>boolean</code>
True if the list should always have a selection (if it has items).

**Kind**: global variable  
**Properties**

| Name |
| --- |
| selectionRequired | 

<a name="applySelection"></a>
## applySelection(item, selected)
Apply the indicate selection state to the item.

The default implementation of this method does nothing. User-visible
effects will typically be handled by other mixins.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>HTMLElement</code> | the item being selected/deselected |
| selected | <code>boolean</code> | true if the item is selected, false if not |

<a name="itemAdded"></a>
## itemAdded(item)
Handle a new item being added to the list.

The default implementation of this method simply sets the item's selection
state to false.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>HTMLElement</code> | the item being added |

<a name="selectFirst"></a>
## selectFirst()
Select the first item in the list.

**Kind**: global function  
<a name="selectLast"></a>
## selectLast()
Select the last item in the list.

**Kind**: global function  
<a name="selectNext"></a>
## selectNext()
Select the next item in the list.

**Kind**: global function  
<a name="selectPrevious"></a>
## selectPrevious()
Select the previous item in the list.

**Kind**: global function  
<a name="event_selected-item-changed"></a>
## "selected-item-changed"
Fires when the selectedItem property changes.

**Kind**: event emitted  

| Param | Type | Description |
| --- | --- | --- |
| detail.selectedItem | <code>HTMLElement</code> | The new selected item. |
| detail.previousItem | <code>HTMLElement</code> | The previously selected item. |

<a name="event_selected-item-changed"></a>
## "selected-item-changed"
Fires when the selectedIndex property changes.

**Kind**: event emitted  

| Param | Type | Description |
| --- | --- | --- |
| detail.selectedIndex | <code>number</code> | The new selected index. |

