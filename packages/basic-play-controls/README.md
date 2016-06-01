# API Documentation
<a name="PlayControls"></a>
## PlayControls ⇐ <code>ElementBase</code>
Auxiliary component for managing playback of a slideshow, audio playlist, etc.

This component can be used to wrap a component like
[basic-slideshow](../basic-slideshow). Example:

    <basic-play-controls>
      <basic-slideshow>
        ... images, etc. ...
      </basic-slideshow>
    </basic-play-controls>

  **Kind**: global class
**Extends:** <code>ElementBase</code>  
**Mixes**: <code>[ContentFirstChildTarget](../basic-component-mixins/docs/ContentFirstChildTarget.md)</code>
  , <code>[DirectionSelection](../basic-component-mixins/docs/DirectionSelection.md)</code>
  , <code>[DistributedChildrenAsContent](../basic-component-mixins/docs/DistributedChildrenAsContent.md)</code>
  , <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code>
  , <code>[Keyboard](../basic-component-mixins/docs/Keyboard.md)</code>
  , <code>[KeyboardDirection](../basic-component-mixins/docs/KeyboardDirection.md)</code>
  , <code>[ObserveContentChanges](../basic-component-mixins/docs/ObserveContentChanges.md)</code>
  , <code>[TargetInCollective](../basic-component-mixins/docs/TargetInCollective.md)</code>
  , <code>[TargetSelection](../basic-component-mixins/docs/TargetSelection.md)</code>
  

* [PlayControls](#PlayControls) ⇐ <code>ElementBase</code>
    * [.applySelection(item, selected)](#ItemsSelection+applySelection)
    * [.canSelectNext](#ItemsSelection+canSelectNext) : <code>boolean</code>
    * [.canSelectPrevious](#ItemsSelection+canSelectPrevious) : <code>boolean</code>
    * [.content](#DistributedChildrenAsContent+content) : <code>Array.&lt;HTMLElement&gt;</code>
    * ["content-changed"](#ObserveContentChanges.event_content-changed)
    * [.contentChanged()](#ObserveContentChanges+contentChanged)
    * [.goDown()](#KeyboardDirection+goDown)
    * [.goEnd()](#KeyboardDirection+goEnd)
    * [.goLeft()](#KeyboardDirection+goLeft)
    * [.goRight()](#KeyboardDirection+goRight)
    * [.goStart()](#KeyboardDirection+goStart)
    * [.goUp()](#KeyboardDirection+goUp)
    * [.itemAdded(item)](#ItemsSelection+itemAdded)
    * [.items](#TargetSelection+items) : <code>Array.&lt;HTMLElement&gt;</code>
    * [.itemsChanged()](#TargetSelection+itemsChanged)
    * [.keydown(event)](#Keyboard+keydown) ⇒ <code>boolean</code>
    * [.navigationAxis](#KeyboardDirection+navigationAxis) : <code>string</code>
    * ["selected-index-changed"](#ItemsSelection.event_selected-index-changed)
    * ["selected-item-changed"](#ItemsSelection.event_selected-item-changed)
    * [.selectedIndex](#ItemsSelection+selectedIndex) : <code>number</code>
    * [.selectedItem](#TargetSelection+selectedItem) : <code>HTMLElement</code>
    * [.selectedItem](#ItemsSelection+selectedItem) : <code>object</code>
    * [.selectFirst()](#ItemsSelection+selectFirst)
    * [.selectionRequired](#ItemsSelection+selectionRequired) : <code>boolean</code>
    * [.selectionWraps](#ItemsSelection+selectionWraps) : <code>boolean</code>
    * [.selectionWraps](#TargetSelection+selectionWraps) : <code>boolean</code>
    * [.selectLast()](#ItemsSelection+selectLast)
    * [.selectNext()](#ItemsSelection+selectNext)
    * [.selectPrevious()](#ItemsSelection+selectPrevious)
    * [.target](#TargetInCollective+target) : <code>HTMLElement</code>
    * [.target](#TargetSelection+target) : <code>HTMLElement</code>
    * [.target](#ContentFirstChildTarget+target) : <code>HTMLElement</code>

<a name="ItemsSelection+applySelection"></a>
### playControls.applySelection(item, selected)
Apply the indicate selection state to the item.

The default implementation of this method does nothing. User-visible
effects will typically be handled by other mixins.

  **Kind**: instance method of <code>[PlayControls](#PlayControls)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| item | <code>HTMLElement</code> | the item being selected/deselected |
| selected | <code>boolean</code> | true if the item is selected, false if not |

<a name="ItemsSelection+canSelectNext"></a>
### playControls.canSelectNext : <code>boolean</code>
True if the selection can be moved to the next item, false if not (the
selected item is the last item in the list).

  **Kind**: instance property of <code>[PlayControls](#PlayControls)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.
<a name="ItemsSelection+canSelectPrevious"></a>
### playControls.canSelectPrevious : <code>boolean</code>
True if the selection can be moved to the previous item, false if not
(the selected item is the first one in the list).

  **Kind**: instance property of <code>[PlayControls](#PlayControls)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.
<a name="DistributedChildrenAsContent+content"></a>
### playControls.content : <code>Array.&lt;HTMLElement&gt;</code>
The content of this component, defined to be the flattened array of
children distributed to the component.

  **Kind**: instance property of <code>[PlayControls](#PlayControls)</code>. Defined by <code>[DistributedChildrenAsContent](../basic-component-mixins/docs/DistributedChildrenAsContent.md)</code> mixin.
<a name="ObserveContentChanges.event_content-changed"></a>
### "content-changed"
This event is raised when the component's contents (including distributed
children) have changed.

  **Kind**: event emitted by <code>[PlayControls](#PlayControls)</code>. Defined by <code>[ObserveContentChanges](../basic-component-mixins/docs/ObserveContentChanges.md)</code> mixin.
<a name="ObserveContentChanges+contentChanged"></a>
### playControls.contentChanged()
Invoked when the contents of the component (including distributed
children) have changed.

This method is also invoked when a component is first instantiated; the
contents have essentially "changed" from being nothing. This allows the
component to perform initial processing of its children.

  **Kind**: instance method of <code>[PlayControls](#PlayControls)</code>. Defined by <code>[ObserveContentChanges](../basic-component-mixins/docs/ObserveContentChanges.md)</code> mixin.
<a name="KeyboardDirection+goDown"></a>
### playControls.goDown()
Invoked when the user wants to go/navigate down.
The default implementation of this method does nothing.

  **Kind**: instance method of <code>[PlayControls](#PlayControls)</code>. Defined by <code>[KeyboardDirection](../basic-component-mixins/docs/KeyboardDirection.md)</code> mixin.
<a name="KeyboardDirection+goEnd"></a>
### playControls.goEnd()
Invoked when the user wants to go/navigate to the end (e.g., of a list).
The default implementation of this method does nothing.

  **Kind**: instance method of <code>[PlayControls](#PlayControls)</code>. Defined by <code>[KeyboardDirection](../basic-component-mixins/docs/KeyboardDirection.md)</code> mixin.
<a name="KeyboardDirection+goLeft"></a>
### playControls.goLeft()
Invoked when the user wants to go/navigate left.
The default implementation of this method does nothing.

  **Kind**: instance method of <code>[PlayControls](#PlayControls)</code>. Defined by <code>[KeyboardDirection](../basic-component-mixins/docs/KeyboardDirection.md)</code> mixin.
<a name="KeyboardDirection+goRight"></a>
### playControls.goRight()
Invoked when the user wants to go/navigate right.
The default implementation of this method does nothing.

  **Kind**: instance method of <code>[PlayControls](#PlayControls)</code>. Defined by <code>[KeyboardDirection](../basic-component-mixins/docs/KeyboardDirection.md)</code> mixin.
<a name="KeyboardDirection+goStart"></a>
### playControls.goStart()
Invoked when the user wants to go/navigate to the start (e.g., of a
list). The default implementation of this method does nothing.

  **Kind**: instance method of <code>[PlayControls](#PlayControls)</code>. Defined by <code>[KeyboardDirection](../basic-component-mixins/docs/KeyboardDirection.md)</code> mixin.
<a name="KeyboardDirection+goUp"></a>
### playControls.goUp()
Invoked when the user wants to go/navigate up.
The default implementation of this method does nothing.

  **Kind**: instance method of <code>[PlayControls](#PlayControls)</code>. Defined by <code>[KeyboardDirection](../basic-component-mixins/docs/KeyboardDirection.md)</code> mixin.
<a name="ItemsSelection+itemAdded"></a>
### playControls.itemAdded(item)
Handle a new item being added to the list.

The default implementation of this method simply sets the item's
selection state to false.

  **Kind**: instance method of <code>[PlayControls](#PlayControls)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| item | <code>HTMLElement</code> | the item being added |

<a name="TargetSelection+items"></a>
### playControls.items : <code>Array.&lt;HTMLElement&gt;</code>
The current set of items in the list.

  **Kind**: instance property of <code>[PlayControls](#PlayControls)</code>. Defined by <code>[TargetSelection](../basic-component-mixins/docs/TargetSelection.md)</code> mixin.
<a name="TargetSelection+itemsChanged"></a>
### playControls.itemsChanged()
This method is invoked when the underlying contents change. It is also
invoked on component initialization – since the items have "changed" from
being nothing.

  **Kind**: instance method of <code>[PlayControls](#PlayControls)</code>. Defined by <code>[TargetSelection](../basic-component-mixins/docs/TargetSelection.md)</code> mixin.
<a name="Keyboard+keydown"></a>
### playControls.keydown(event) ⇒ <code>boolean</code>
Handle the indicated keyboard event.

The default implementation of this method does nothing. This will
typically be handled by other mixins.

  **Kind**: instance method of <code>[PlayControls](#PlayControls)</code>. Defined by <code>[Keyboard](../basic-component-mixins/docs/Keyboard.md)</code> mixin.
**Returns**: <code>boolean</code> - true if the event was handled  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | the keyboard event |

<a name="KeyboardDirection+navigationAxis"></a>
### playControls.navigationAxis : <code>string</code>
Indicates the direction of permitted navigation with the keyboard.

Accepted values are "horizontal", "vertical", or "both" (the default).
If this property is "horizontal", the Up Arrow and Down Arrow keys will
be ignored. Conversely, if this is "vertical", the Left Arrow and Right
Arrow keys will be ignored.

  **Kind**: instance property of <code>[PlayControls](#PlayControls)</code>. Defined by <code>[KeyboardDirection](../basic-component-mixins/docs/KeyboardDirection.md)</code> mixin.
<a name="ItemsSelection.event_selected-index-changed"></a>
### "selected-index-changed"
Fires when the selectedIndex property changes.

  **Kind**: event emitted by <code>[PlayControls](#PlayControls)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| detail.selectedIndex | <code>number</code> | The new selected index. |

<a name="ItemsSelection.event_selected-item-changed"></a>
### "selected-item-changed"
Fires when the selectedItem property changes.

  **Kind**: event emitted by <code>[PlayControls](#PlayControls)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| detail.selectedItem | <code>HTMLElement</code> | The new selected item. |
| detail.previousItem | <code>HTMLElement</code> | The previously selected item. |

<a name="ItemsSelection+selectedIndex"></a>
### playControls.selectedIndex : <code>number</code>
The index of the item which is currently selected.

If `selectionWraps` is false, the index is -1 if there is no selection.
In that case, setting the index to -1 will deselect any
currently-selected item.

  **Kind**: instance property of <code>[PlayControls](#PlayControls)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.
<a name="TargetSelection+selectedItem"></a>
### playControls.selectedItem : <code>HTMLElement</code>
The currently selected item, or null if there is no selection.

  **Kind**: instance property of <code>[PlayControls](#PlayControls)</code>. Defined by <code>[TargetSelection](../basic-component-mixins/docs/TargetSelection.md)</code> mixin.
<a name="ItemsSelection+selectedItem"></a>
### playControls.selectedItem : <code>object</code>
The currently selected item, or null if there is no selection.

Setting this property to null deselects any currently-selected item.

  **Kind**: instance property of <code>[PlayControls](#PlayControls)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.
<a name="ItemsSelection+selectFirst"></a>
### playControls.selectFirst()
Select the first item in the list.

  **Kind**: instance method of <code>[PlayControls](#PlayControls)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.
<a name="ItemsSelection+selectionRequired"></a>
### playControls.selectionRequired : <code>boolean</code>
True if the list should always have a selection (if it has items).

  **Kind**: instance property of <code>[PlayControls](#PlayControls)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.
**Default**: <code>false</code>  
<a name="ItemsSelection+selectionWraps"></a>
### playControls.selectionWraps : <code>boolean</code>
True if selection navigations wrap from last to first, and vice versa.

  **Kind**: instance property of <code>[PlayControls](#PlayControls)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.
**Default**: <code>false</code>  
<a name="TargetSelection+selectionWraps"></a>
### playControls.selectionWraps : <code>boolean</code>
True if selection navigations wrap from last to first, and vice versa.

  **Kind**: instance property of <code>[PlayControls](#PlayControls)</code>. Defined by <code>[TargetSelection](../basic-component-mixins/docs/TargetSelection.md)</code> mixin.
**Default**: <code>{false}</code>  
<a name="ItemsSelection+selectLast"></a>
### playControls.selectLast()
Select the last item in the list.

  **Kind**: instance method of <code>[PlayControls](#PlayControls)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.
<a name="ItemsSelection+selectNext"></a>
### playControls.selectNext()
Select the next item in the list.

  **Kind**: instance method of <code>[PlayControls](#PlayControls)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.
<a name="ItemsSelection+selectPrevious"></a>
### playControls.selectPrevious()
Select the previous item in the list.

  **Kind**: instance method of <code>[PlayControls](#PlayControls)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.
<a name="TargetInCollective+target"></a>
### playControls.target : <code>HTMLElement</code>
Gets/sets the current target of the component.

Set this to point to another element. That target element will be
implicitly added to the component's collective. That is, the component
and its target will share responsibility for handling keyboard events.

You can set this property yourself, or you can use the
ContentFirstChildTarget mixin to automatically set the target to the
component's first child.

  **Kind**: instance property of <code>[PlayControls](#PlayControls)</code>. Defined by <code>[TargetInCollective](../basic-component-mixins/docs/TargetInCollective.md)</code> mixin.
<a name="TargetSelection+target"></a>
### playControls.target : <code>HTMLElement</code>
Gets/sets the target element to which this component will delegate
selection actions.

  **Kind**: instance property of <code>[PlayControls](#PlayControls)</code>. Defined by <code>[TargetSelection](../basic-component-mixins/docs/TargetSelection.md)</code> mixin.
<a name="ContentFirstChildTarget+target"></a>
### playControls.target : <code>HTMLElement</code>
Gets/sets the current target of the component.

  **Kind**: instance property of <code>[PlayControls](#PlayControls)</code>. Defined by <code>[ContentFirstChildTarget](../basic-component-mixins/docs/ContentFirstChildTarget.md)</code> mixin.
