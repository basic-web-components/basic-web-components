# API Documentation
<a name="Modes"></a>
## Modes ⇐ <code>ElementBase</code>
Shows exactly one child element at a time.

This can be useful, for example, if a given UI element has multiple modes
that present substantially different elements.

This component doesn't provide any UI for changing which mode is shown.

  **Kind**: global class
**Extends:** <code>ElementBase</code>  
**Mixes**: <code>ContentAsItems</code>, <code>DistributedChildrenAsContent</code>, <code>ItemsSelection</code>, <code>ObserveContentChanges</code>, <code>SelectionAriaActive</code>, <code>TargetInCollective</code>  

* [Modes](#Modes) ⇐ <code>ElementBase</code>
    * [.items](#ContentAsItems+items) : <code>Array.&lt;HTMLElement&gt;</code>
    * [.applySelection(item, selected)](#ContentAsItems+applySelection)
    * [.itemAdded(item)](#ContentAsItems+itemAdded)
    * [.itemsChanged()](#ContentAsItems+itemsChanged)
    * [.content](#DistributedChildrenAsContent+content) : <code>Array.&lt;HTMLElement&gt;</code>
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
    * [.contentChanged()](#ObserveContentChanges+contentChanged)
    * [.target](#TargetInCollective+target) : <code>HTMLElement</code>

<a name="ContentAsItems+items"></a>
### modes.items : <code>Array.&lt;HTMLElement&gt;</code>
The current set of items in the list. See the top-level documentation for
mixin for a description of how items differ from plain content.

  **Kind**: instance property of <code>[Modes](#Modes)</code>. Defined by <code>ContentAsItems</code> mixin.
<a name="ContentAsItems+applySelection"></a>
### modes.applySelection(item, selected)
Apply the selection state to a single item.

Invoke this method to signal that the selected state of the indicated item
has changed. By default, this applies a `selected` CSS class if the item
is selected, and removed it if not selected.

  **Kind**: instance method of <code>[Modes](#Modes)</code>. Defined by <code>ContentAsItems</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| item | <code>HTMLElement</code> | The item whose selection state has changed. |
| selected | <code>boolean</code> | True if the item is selected, false if not. |

<a name="ContentAsItems+itemAdded"></a>
### modes.itemAdded(item)
This method is invoked whenever a new item is added to the list.

The default implementation of this method does nothing. You can override
this to perform per-item initialization.

  **Kind**: instance method of <code>[Modes](#Modes)</code>. Defined by <code>ContentAsItems</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| item | <code>HTMLElement</code> | The item that was added. |

<a name="ContentAsItems+itemsChanged"></a>
### modes.itemsChanged()
This method is invoked when the underlying contents change. It is also
invoked on component initialization – since the items have "changed" from
being nothing.

  **Kind**: instance method of <code>[Modes](#Modes)</code>. Defined by <code>ContentAsItems</code> mixin.
<a name="DistributedChildrenAsContent+content"></a>
### modes.content : <code>Array.&lt;HTMLElement&gt;</code>
The content of this component, defined to be the flattened array of
children distributed to the component.

  **Kind**: instance property of <code>[Modes](#Modes)</code>. Defined by <code>DistributedChildrenAsContent</code> mixin.
<a name="ItemsSelection+canSelectNext"></a>
### modes.canSelectNext : <code>boolean</code>
True if the selection can be moved to the next item, false if not (the
selected item is the last item in the list).

  **Kind**: instance property of <code>[Modes](#Modes)</code>. Defined by <code>ItemsSelection</code> mixin.
<a name="ItemsSelection+canSelectPrevious"></a>
### modes.canSelectPrevious : <code>boolean</code>
True if the selection can be moved to the previous item, false if not
(the selected item is the first one in the list).

  **Kind**: instance property of <code>[Modes](#Modes)</code>. Defined by <code>ItemsSelection</code> mixin.
<a name="ItemsSelection+selectedIndex"></a>
### modes.selectedIndex : <code>number</code>
The index of the item which is currently selected, or -1 if there is no
selection.

Setting the index to -1 deselects any current-selected item.

  **Kind**: instance property of <code>[Modes](#Modes)</code>. Defined by <code>ItemsSelection</code> mixin.
<a name="ItemsSelection+selectedItem"></a>
### modes.selectedItem : <code>object</code>
The currently selected item, or null if there is no selection.

Setting this property to null deselects any currently-selected item.

  **Kind**: instance property of <code>[Modes](#Modes)</code>. Defined by <code>ItemsSelection</code> mixin.
<a name="ItemsSelection+selectionRequired"></a>
### modes.selectionRequired : <code>boolean</code>
True if the list should always have a selection (if it has items).

  **Kind**: instance property of <code>[Modes](#Modes)</code>. Defined by <code>ItemsSelection</code> mixin.
<a name="ItemsSelection+applySelection"></a>
### modes.applySelection(item, selected)
Apply the indicate selection state to the item.

The default implementation of this method does nothing. User-visible
effects will typically be handled by other mixins.

  **Kind**: instance method of <code>[Modes](#Modes)</code>. Defined by <code>ItemsSelection</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| item | <code>HTMLElement</code> | the item being selected/deselected |
| selected | <code>boolean</code> | true if the item is selected, false if not |

<a name="ItemsSelection+itemAdded"></a>
### modes.itemAdded(item)
Handle a new item being added to the list.

The default implementation of this method simply sets the item's
selection state to false.

  **Kind**: instance method of <code>[Modes](#Modes)</code>. Defined by <code>ItemsSelection</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| item | <code>HTMLElement</code> | the item being added |

<a name="ItemsSelection+selectFirst"></a>
### modes.selectFirst()
Select the first item in the list.

  **Kind**: instance method of <code>[Modes](#Modes)</code>. Defined by <code>ItemsSelection</code> mixin.
<a name="ItemsSelection+selectLast"></a>
### modes.selectLast()
Select the last item in the list.

  **Kind**: instance method of <code>[Modes](#Modes)</code>. Defined by <code>ItemsSelection</code> mixin.
<a name="ItemsSelection+selectNext"></a>
### modes.selectNext()
Select the next item in the list.

  **Kind**: instance method of <code>[Modes](#Modes)</code>. Defined by <code>ItemsSelection</code> mixin.
<a name="ItemsSelection+selectPrevious"></a>
### modes.selectPrevious()
Select the previous item in the list.

  **Kind**: instance method of <code>[Modes](#Modes)</code>. Defined by <code>ItemsSelection</code> mixin.
<a name="ObserveContentChanges+contentChanged"></a>
### modes.contentChanged()
Invoked when the contents of the component (including distributed
children) have changed.

This method is also invoked when a component is first instantiated; the
contents have essentially "changed" from being nothing. This allows the
component to perform initial processing of its children.

  **Kind**: instance method of <code>[Modes](#Modes)</code>. Defined by <code>ObserveContentChanges</code> mixin.
<a name="TargetInCollective+target"></a>
### modes.target : <code>HTMLElement</code>
Gets/sets the current target of the component.

Set this to point to another element. That target element will be
implicitly added to the component's collective. That is, the component
and its target will share responsibility for handling keyboard events.

You can set this property yourself, or you can use the
ContentFirstChildTarget mixin to automatically set the target to the
component's first child.

  **Kind**: instance property of <code>[Modes](#Modes)</code>. Defined by <code>TargetInCollective</code> mixin.
<a name="event_items-changed"></a>
## "items-changed"
Fires when the items in the list change.

  **Kind**: event emitted
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

<a name="event_content-changed"></a>
## "content-changed"
This event is raised when the component's contents (including distributed
children) have changed.

  **Kind**: event emitted
