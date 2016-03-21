# API Documentation
<a name="TabStrip"></a>
## TabStrip ⇐ <code>ElementBase</code>
A strip of tabs for selecting one of the component's children.

The component creates a tab to represent each of its light DOM children.
The tab name is obtained by examining the children for an `aria-label`
property.

Use tabs when you want to provide a large set of options or elements than
can comfortably fit inline, the options can be coherently grouped into pages,
and you want to avoid making the user navigate to a separate page. Tabs work
best if you only have a small handful of pages, say 2–7.

The basic-tab-strip component does not define how a selected child is
represented. If you're looking for the standard behavior of just showing only
the selected child, you can use this component in combination with the
separate [basic-modes](../basic-modes/) component. A typical arrangement:

    <basic-tab-strip>
      <basic-modes aria-label="Panels">
        <div aria-label="One">Page one</div>
        <div aria-label="Two">Page two</div>
        <div aria-label="Three">Page three</div>
      </basic-modes>
    </basic-tab-strip>

The above combination is so common it is provided as a single component,
[basic-tabs](../basic-tabs/).

The user can select a tab with the mouse or touch, as well as by through the
keyboard. Each tab appears as a separate button in the tab order.
Additionally, if the focus is currently on a tab, the user can quickly
navigate between tabs with the left/right arrow keys (or, if the tabs are
in vertical position, the up/down arrow keys).

By default, the tabs are shown grouped to the left, where each tab is only
as big as necessary. You can apply the `spread` CSS class to a
basic-tab-strip element for a variant appearance in which the available width
of the element is divided up equally among tabs.

The generic default styling of the tab strip will present the classic
skeumorphic look of rounded tabs attached to a surface. You can remove this
styling by setting the `generic` property/attribute to false.

  **Kind**: global class
**Extends:** <code>ElementBase</code>  
**Mixes**: <code>[ContentFirstChildTarget](../basic-component-mixins/docs/ContentFirstChildTarget.md)</code>
  , <code>[DirectionSelection](../basic-component-mixins/docs/DirectionSelection.md)</code>
  , <code>[DistributedChildrenAsContent](../basic-component-mixins/docs/DistributedChildrenAsContent.md)</code>
  , <code>[Generic](../basic-component-mixins/docs/Generic.md)</code>
  , <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code>
  , <code>[KeyboardDirection](../basic-component-mixins/docs/KeyboardDirection.md)</code>
  , <code>[ObserveContentChanges](../basic-component-mixins/docs/ObserveContentChanges.md)</code>
  , <code>[TargetSelection](../basic-component-mixins/docs/TargetSelection.md)</code>
  

* [TabStrip](#TabStrip) ⇐ <code>ElementBase</code>
    * [.tabPosition](#TabStrip+tabPosition) : <code>string</code>
    * [.target](#ContentFirstChildTarget+target) : <code>HTMLElement</code>
    * [.content](#DistributedChildrenAsContent+content) : <code>Array.&lt;HTMLElement&gt;</code>
    * [.generic](#Generic+generic) : <code>Boolean</code>
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
    * [.navigationAxis](#KeyboardDirection+navigationAxis) : <code>string</code>
    * [.goDown()](#KeyboardDirection+goDown)
    * [.goEnd()](#KeyboardDirection+goEnd)
    * [.goLeft()](#KeyboardDirection+goLeft)
    * [.goRight()](#KeyboardDirection+goRight)
    * [.goStart()](#KeyboardDirection+goStart)
    * [.goUp()](#KeyboardDirection+goUp)
    * [.contentChanged()](#ObserveContentChanges+contentChanged)
    * [.items](#TargetSelection+items) : <code>Array.&lt;HTMLElement&gt;</code>
    * [.selectedIndex](#TargetSelection+selectedIndex) : <code>number</code>
    * [.selectedItem](#TargetSelection+selectedItem) : <code>HTMLElement</code>
    * [.target](#TargetSelection+target) : <code>HTMLElement</code>
    * [.itemsChanged()](#TargetSelection+itemsChanged)

<a name="TabStrip+tabPosition"></a>
### tabStrip.tabPosition : <code>string</code>
The position of the tab strip relative to the element's children. Valid
values are "top", "left", "right", and "bottom".

  **Kind**: instance property of <code>[TabStrip](#TabStrip)</code>
**Default**: <code>&quot;\&quot;top\&quot;&quot;</code>  
<a name="ContentFirstChildTarget+target"></a>
### tabStrip.target : <code>HTMLElement</code>
Gets/sets the current target of the component.

  **Kind**: instance property of <code>[TabStrip](#TabStrip)</code>. Defined by <code>[ContentFirstChildTarget](../basic-component-mixins/docs/ContentFirstChildTarget.md)</code> mixin.
<a name="DistributedChildrenAsContent+content"></a>
### tabStrip.content : <code>Array.&lt;HTMLElement&gt;</code>
The content of this component, defined to be the flattened array of
children distributed to the component.

  **Kind**: instance property of <code>[TabStrip](#TabStrip)</code>. Defined by <code>[DistributedChildrenAsContent](../basic-component-mixins/docs/DistributedChildrenAsContent.md)</code> mixin.
<a name="Generic+generic"></a>
### tabStrip.generic : <code>Boolean</code>
True if the component would like to receive generic styling.

This property is true by default — set it to false to turn off all
generic styles. This makes it easier to apply custom styling; you won't
have to explicitly override styling you don't want.

  **Kind**: instance property of <code>[TabStrip](#TabStrip)</code>. Defined by <code>[Generic](../basic-component-mixins/docs/Generic.md)</code> mixin.
**Default**: <code>true</code>  
<a name="ItemsSelection+canSelectNext"></a>
### tabStrip.canSelectNext : <code>boolean</code>
True if the selection can be moved to the next item, false if not (the
selected item is the last item in the list).

  **Kind**: instance property of <code>[TabStrip](#TabStrip)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.
<a name="ItemsSelection+canSelectPrevious"></a>
### tabStrip.canSelectPrevious : <code>boolean</code>
True if the selection can be moved to the previous item, false if not
(the selected item is the first one in the list).

  **Kind**: instance property of <code>[TabStrip](#TabStrip)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.
<a name="ItemsSelection+selectedIndex"></a>
### tabStrip.selectedIndex : <code>number</code>
The index of the item which is currently selected, or -1 if there is no
selection.

Setting the index to -1 deselects any current-selected item.

  **Kind**: instance property of <code>[TabStrip](#TabStrip)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.
<a name="ItemsSelection+selectedItem"></a>
### tabStrip.selectedItem : <code>object</code>
The currently selected item, or null if there is no selection.

Setting this property to null deselects any currently-selected item.

  **Kind**: instance property of <code>[TabStrip](#TabStrip)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.
<a name="ItemsSelection+selectionRequired"></a>
### tabStrip.selectionRequired : <code>boolean</code>
True if the list should always have a selection (if it has items).

  **Kind**: instance property of <code>[TabStrip](#TabStrip)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.
<a name="ItemsSelection+applySelection"></a>
### tabStrip.applySelection(item, selected)
Apply the indicate selection state to the item.

The default implementation of this method does nothing. User-visible
effects will typically be handled by other mixins.

  **Kind**: instance method of <code>[TabStrip](#TabStrip)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| item | <code>HTMLElement</code> | the item being selected/deselected |
| selected | <code>boolean</code> | true if the item is selected, false if not |

<a name="ItemsSelection+itemAdded"></a>
### tabStrip.itemAdded(item)
Handle a new item being added to the list.

The default implementation of this method simply sets the item's
selection state to false.

  **Kind**: instance method of <code>[TabStrip](#TabStrip)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| item | <code>HTMLElement</code> | the item being added |

<a name="ItemsSelection+selectFirst"></a>
### tabStrip.selectFirst()
Select the first item in the list.

  **Kind**: instance method of <code>[TabStrip](#TabStrip)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.
<a name="ItemsSelection+selectLast"></a>
### tabStrip.selectLast()
Select the last item in the list.

  **Kind**: instance method of <code>[TabStrip](#TabStrip)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.
<a name="ItemsSelection+selectNext"></a>
### tabStrip.selectNext()
Select the next item in the list.

  **Kind**: instance method of <code>[TabStrip](#TabStrip)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.
<a name="ItemsSelection+selectPrevious"></a>
### tabStrip.selectPrevious()
Select the previous item in the list.

  **Kind**: instance method of <code>[TabStrip](#TabStrip)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.
<a name="KeyboardDirection+navigationAxis"></a>
### tabStrip.navigationAxis : <code>string</code>
Indicates the direction of permitted navigation with the keyboard.

Accepted values are "horizontal", "vertical", or "both" (the default).
If this property is "horizontal", the Up Arrow and Down Arrow keys will
be ignored. Conversely, if this is "vertical", the Left Arrow and Right
Arrow keys will be ignored.

  **Kind**: instance property of <code>[TabStrip](#TabStrip)</code>. Defined by <code>[KeyboardDirection](../basic-component-mixins/docs/KeyboardDirection.md)</code> mixin.
<a name="KeyboardDirection+goDown"></a>
### tabStrip.goDown()
Invoked when the user wants to go/navigate down.
The default implementation of this method does nothing.

  **Kind**: instance method of <code>[TabStrip](#TabStrip)</code>. Defined by <code>[KeyboardDirection](../basic-component-mixins/docs/KeyboardDirection.md)</code> mixin.
<a name="KeyboardDirection+goEnd"></a>
### tabStrip.goEnd()
Invoked when the user wants to go/navigate to the end (e.g., of a list).
The default implementation of this method does nothing.

  **Kind**: instance method of <code>[TabStrip](#TabStrip)</code>. Defined by <code>[KeyboardDirection](../basic-component-mixins/docs/KeyboardDirection.md)</code> mixin.
<a name="KeyboardDirection+goLeft"></a>
### tabStrip.goLeft()
Invoked when the user wants to go/navigate left.
The default implementation of this method does nothing.

  **Kind**: instance method of <code>[TabStrip](#TabStrip)</code>. Defined by <code>[KeyboardDirection](../basic-component-mixins/docs/KeyboardDirection.md)</code> mixin.
<a name="KeyboardDirection+goRight"></a>
### tabStrip.goRight()
Invoked when the user wants to go/navigate right.
The default implementation of this method does nothing.

  **Kind**: instance method of <code>[TabStrip](#TabStrip)</code>. Defined by <code>[KeyboardDirection](../basic-component-mixins/docs/KeyboardDirection.md)</code> mixin.
<a name="KeyboardDirection+goStart"></a>
### tabStrip.goStart()
Invoked when the user wants to go/navigate to the start (e.g., of a
list). The default implementation of this method does nothing.

  **Kind**: instance method of <code>[TabStrip](#TabStrip)</code>. Defined by <code>[KeyboardDirection](../basic-component-mixins/docs/KeyboardDirection.md)</code> mixin.
<a name="KeyboardDirection+goUp"></a>
### tabStrip.goUp()
Invoked when the user wants to go/navigate up.
The default implementation of this method does nothing.

  **Kind**: instance method of <code>[TabStrip](#TabStrip)</code>. Defined by <code>[KeyboardDirection](../basic-component-mixins/docs/KeyboardDirection.md)</code> mixin.
<a name="ObserveContentChanges+contentChanged"></a>
### tabStrip.contentChanged()
Invoked when the contents of the component (including distributed
children) have changed.

This method is also invoked when a component is first instantiated; the
contents have essentially "changed" from being nothing. This allows the
component to perform initial processing of its children.

  **Kind**: instance method of <code>[TabStrip](#TabStrip)</code>. Defined by <code>[ObserveContentChanges](../basic-component-mixins/docs/ObserveContentChanges.md)</code> mixin.
<a name="TargetSelection+items"></a>
### tabStrip.items : <code>Array.&lt;HTMLElement&gt;</code>
The current set of items in the list.

  **Kind**: instance property of <code>[TabStrip](#TabStrip)</code>. Defined by <code>[TargetSelection](../basic-component-mixins/docs/TargetSelection.md)</code> mixin.
<a name="TargetSelection+selectedIndex"></a>
### tabStrip.selectedIndex : <code>number</code>
The index of the item which is currently selected, or -1 if there is no
selection.

  **Kind**: instance property of <code>[TabStrip](#TabStrip)</code>. Defined by <code>[TargetSelection](../basic-component-mixins/docs/TargetSelection.md)</code> mixin.
<a name="TargetSelection+selectedItem"></a>
### tabStrip.selectedItem : <code>HTMLElement</code>
The currently selected item, or null if there is no selection.

  **Kind**: instance property of <code>[TabStrip](#TabStrip)</code>. Defined by <code>[TargetSelection](../basic-component-mixins/docs/TargetSelection.md)</code> mixin.
<a name="TargetSelection+target"></a>
### tabStrip.target : <code>HTMLElement</code>
Gets/sets the target element to which this component will delegate
selection actions.

  **Kind**: instance property of <code>[TabStrip](#TabStrip)</code>. Defined by <code>[TargetSelection](../basic-component-mixins/docs/TargetSelection.md)</code> mixin.
<a name="TargetSelection+itemsChanged"></a>
### tabStrip.itemsChanged()
This method is invoked when the underlying contents change. It is also
invoked on component initialization – since the items have "changed" from
being nothing.

  **Kind**: instance method of <code>[TabStrip](#TabStrip)</code>. Defined by <code>[TargetSelection](../basic-component-mixins/docs/TargetSelection.md)</code> mixin.
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
