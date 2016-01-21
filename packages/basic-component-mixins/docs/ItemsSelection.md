<a name="ItemsSelection"></a>
## ItemsSelection
Mixin which manages selection semantics for items in a list

**Kind**: global class  
<a name="undefinedselectedIndex"></a>
## undefinedselectedIndex : <code>Number</code>
The index of the item which is currently selected, or -1 if there is no
selection.

**Kind**: global variable  
**Properties**

| Name |
| --- |
| selectedIndex | 

<a name="undefinedselectedItem"></a>
## undefinedselectedItem : <code>Object</code>
The currently selected item, or null if there is no selection.

**Kind**: global variable  
**Properties**

| Name |
| --- |
| selectedItem | 

<a name="undefinedselectionRequired"></a>
## undefinedselectionRequired : <code>Boolean</code>
True if the list should always have a selection (if it has items).

**Kind**: global variable  
**Properties**

| Name |
| --- |
| selectionRequired | 

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

| Param | Description |
| --- | --- |
| detail.selectedItem | The new selected item. |
| detail.previousItem | The previously selected item. |

<a name="event_selected-item-changed"></a>
## "selected-item-changed"
Fires when the selectedIndex property changes.

**Kind**: event emitted  

| Param | Description |
| --- | --- |
| detail.selectedIndex | The new selected index. |

