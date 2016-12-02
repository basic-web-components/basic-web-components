# API Documentation
<a name="ArrowSelection"></a>

## ArrowSelection ⇐ <code>ElementBase</code>
Component which adds prominent left and right arrow buttons to a wrapped
child such as a carousel.

You can see a [live demo](http://basicwebcomponents.org/basic-web-components/packages/basic-carousel/carouselWithArrows.html)
of this component applied to a carousel.

Clicking the left/right buttons selects the previous/next item.

Typical usage:

    <basic-arrow-selection>
      <basic-carousel>
        ... images, etc. ...
      </basic-carousel>
    </basic-arrow-selection>

By default, the arrow buttons are shown on devices with a mouse or mouse-like
pointing device. They are not shown on a touch-capable device unless mouse
movement is detected. To cause the buttons to always appear, apply the
'showArrows' CSS class.

  **Kind**: global class
**Extends:** <code>ElementBase</code>  
**Mixes**: <code>[ContentFirstChildTargetMixin](../basic-component-mixins/docs/ContentFirstChildTargetMixin.md)</code>
  , <code>[DirectionSelectionMixin](../basic-component-mixins/docs/DirectionSelectionMixin.md)</code>
  , <code>[DistributedChildrenContentMixin](../basic-component-mixins/docs/DistributedChildrenContentMixin.md)</code>
  , <code>[KeyboardMixin](../basic-component-mixins/docs/KeyboardMixin.md)</code>
  , <code>[KeyboardDirectionMixin](../basic-component-mixins/docs/KeyboardDirectionMixin.md)</code>
  , <code>[TargetInCollectiveMixin](../basic-component-mixins/docs/TargetInCollectiveMixin.md)</code>
  , <code>[TargetSelectionMixin](../basic-component-mixins/docs/TargetSelectionMixin.md)</code>
  

* [ArrowSelection](#ArrowSelection) ⇐ <code>ElementBase</code>
    * [.canSelectNext](#TargetSelection+canSelectNext) : <code>boolean</code>
    * [.canSelectPrevious](#TargetSelection+canSelectPrevious) : <code>boolean</code>
    * [.content](#DistributedChildrenContent+content) : <code>Array.&lt;HTMLElement&gt;</code>
    * ["content-changed"](#DistributedChildrenContent.event_content-changed)
    * [.contentChanged()](#DistributedChildrenContent+contentChanged)
    * [.goDown()](#KeyboardDirection+symbols.goDown)
    * [.goEnd()](#KeyboardDirection+symbols.goEnd)
    * [.goLeft()](#KeyboardDirection+symbols.goLeft)
    * [.goRight()](#KeyboardDirection+symbols.goRight)
    * [.goStart()](#KeyboardDirection+symbols.goStart)
    * [.goUp()](#KeyboardDirection+symbols.goUp)
    * [.items](#TargetSelection+items) : <code>Array.&lt;HTMLElement&gt;</code>
    * [.itemsChanged()](#TargetSelection+itemsChanged)
    * [.keydown(event)](#Keyboard+symbols.keydown) ⇒ <code>boolean</code>
    * [.navigationAxis](#KeyboardDirection+navigationAxis) : <code>string</code>
    * [.selectedFraction](#TargetSelection+selectedFraction) : <code>number</code>
    * [.selectedIndex](#TargetSelection+selectedIndex) : <code>number</code>
    * [.selectedItem](#TargetSelection+selectedItem) : <code>HTMLElement</code>
    * [.selectFirst()](#TargetSelection+selectFirst)
    * [.selectionRequired](#TargetSelection+selectionRequired) : <code>boolean</code>
    * [.selectionWraps](#TargetSelection+selectionWraps) : <code>boolean</code>
    * [.selectLast()](#TargetSelection+selectLast)
    * [.selectNext()](#TargetSelection+selectNext)
    * [.selectPrevious()](#TargetSelection+selectPrevious)
    * [.target](#TargetSelection+target) : <code>HTMLElement</code>
    * [.target](#ContentFirstChildTarget+target) : <code>HTMLElement</code>
    * [.target](#TargetInCollective+target) : <code>HTMLElement</code>

<a name="TargetSelection+canSelectNext"></a>

### arrowSelection.canSelectNext : <code>boolean</code>
True if the selection can be moved to the next item, false if not (the
selected item is the last item in the list).

  **Kind**: instance property of <code>[ArrowSelection](#ArrowSelection)</code>. Defined by <code>[TargetSelection](../basic-component-mixins/docs/TargetSelection.md)</code> mixin.
<a name="TargetSelection+canSelectPrevious"></a>

### arrowSelection.canSelectPrevious : <code>boolean</code>
True if the selection can be moved to the previous item, false if not
(the selected item is the first one in the list).

  **Kind**: instance property of <code>[ArrowSelection](#ArrowSelection)</code>. Defined by <code>[TargetSelection](../basic-component-mixins/docs/TargetSelection.md)</code> mixin.
<a name="DistributedChildrenContent+content"></a>

### arrowSelection.content : <code>Array.&lt;HTMLElement&gt;</code>
The content of this component, defined to be the flattened array of
children distributed to the component.

  **Kind**: instance property of <code>[ArrowSelection](#ArrowSelection)</code>. Defined by <code>[DistributedChildrenContent](../basic-component-mixins/docs/DistributedChildrenContent.md)</code> mixin.
<a name="DistributedChildrenContent.event_content-changed"></a>

### "content-changed"
This event is raised when the component's contents (including distributed
children) have changed.

  **Kind**: event emitted by <code>[ArrowSelection](#ArrowSelection)</code>. Defined by <code>[DistributedChildrenContent](../basic-component-mixins/docs/DistributedChildrenContent.md)</code> mixin.
<a name="DistributedChildrenContent+contentChanged"></a>

### arrowSelection.contentChanged()
Invoked when the contents of the component (including distributed
children) have changed.

This method is also invoked when a component is first instantiated; the
contents have essentially "changed" from being nothing. This allows the
component to perform initial processing of its children.

  **Kind**: instance method of <code>[ArrowSelection](#ArrowSelection)</code>. Defined by <code>[DistributedChildrenContent](../basic-component-mixins/docs/DistributedChildrenContent.md)</code> mixin.
<a name="KeyboardDirection+symbols.goDown"></a>

### ArrowSelection.goDown()
Invoked when the user wants to go/navigate down.
The default implementation of this method does nothing.

  **Kind**: static method of <code>[ArrowSelection](#ArrowSelection)</code>. Defined by <code>[KeyboardDirection#symbols](../basic-component-mixins/docs/KeyboardDirection#symbols.md)</code> mixin.
<a name="KeyboardDirection+symbols.goEnd"></a>

### ArrowSelection.goEnd()
Invoked when the user wants to go/navigate to the end (e.g., of a list).
The default implementation of this method does nothing.

  **Kind**: static method of <code>[ArrowSelection](#ArrowSelection)</code>. Defined by <code>[KeyboardDirection#symbols](../basic-component-mixins/docs/KeyboardDirection#symbols.md)</code> mixin.
<a name="KeyboardDirection+symbols.goLeft"></a>

### ArrowSelection.goLeft()
Invoked when the user wants to go/navigate left.
The default implementation of this method does nothing.

  **Kind**: static method of <code>[ArrowSelection](#ArrowSelection)</code>. Defined by <code>[KeyboardDirection#symbols](../basic-component-mixins/docs/KeyboardDirection#symbols.md)</code> mixin.
<a name="KeyboardDirection+symbols.goRight"></a>

### ArrowSelection.goRight()
Invoked when the user wants to go/navigate right.
The default implementation of this method does nothing.

  **Kind**: static method of <code>[ArrowSelection](#ArrowSelection)</code>. Defined by <code>[KeyboardDirection#symbols](../basic-component-mixins/docs/KeyboardDirection#symbols.md)</code> mixin.
<a name="KeyboardDirection+symbols.goStart"></a>

### ArrowSelection.goStart()
Invoked when the user wants to go/navigate to the start (e.g., of a
list). The default implementation of this method does nothing.

  **Kind**: static method of <code>[ArrowSelection](#ArrowSelection)</code>. Defined by <code>[KeyboardDirection#symbols](../basic-component-mixins/docs/KeyboardDirection#symbols.md)</code> mixin.
<a name="KeyboardDirection+symbols.goUp"></a>

### ArrowSelection.goUp()
Invoked when the user wants to go/navigate up.
The default implementation of this method does nothing.

  **Kind**: static method of <code>[ArrowSelection](#ArrowSelection)</code>. Defined by <code>[KeyboardDirection#symbols](../basic-component-mixins/docs/KeyboardDirection#symbols.md)</code> mixin.
<a name="TargetSelection+items"></a>

### arrowSelection.items : <code>Array.&lt;HTMLElement&gt;</code>
The current set of items in the list.

  **Kind**: instance property of <code>[ArrowSelection](#ArrowSelection)</code>. Defined by <code>[TargetSelection](../basic-component-mixins/docs/TargetSelection.md)</code> mixin.
<a name="TargetSelection+itemsChanged"></a>

### arrowSelection.itemsChanged()
This method is invoked when the underlying contents change. It is also
invoked on component initialization – since the items have "changed" from
being nothing.

  **Kind**: instance method of <code>[ArrowSelection](#ArrowSelection)</code>. Defined by <code>[TargetSelection](../basic-component-mixins/docs/TargetSelection.md)</code> mixin.
<a name="Keyboard+symbols.keydown"></a>

### ArrowSelection.keydown(event) ⇒ <code>boolean</code>
Handle the indicated keyboard event.

The default implementation of this method does nothing. This will
typically be handled by other mixins.

  **Kind**: static method of <code>[ArrowSelection](#ArrowSelection)</code>. Defined by <code>[Keyboard#symbols](../basic-component-mixins/docs/Keyboard#symbols.md)</code> mixin.
**Returns**: <code>boolean</code> - true if the event was handled  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | the keyboard event |

<a name="KeyboardDirection+navigationAxis"></a>

### arrowSelection.navigationAxis : <code>string</code>
Indicates the direction of permitted navigation with the keyboard.

Accepted values are "horizontal", "vertical", or "both" (the default).
If this property is "horizontal", the Up Arrow and Down Arrow keys will
be ignored. Conversely, if this is "vertical", the Left Arrow and Right
Arrow keys will be ignored.

  **Kind**: instance property of <code>[ArrowSelection](#ArrowSelection)</code>. Defined by <code>[KeyboardDirection](../basic-component-mixins/docs/KeyboardDirection.md)</code> mixin.
<a name="TargetSelection+selectedFraction"></a>

### arrowSelection.selectedFraction : <code>number</code>
A fractional value indicating how far the user has currently advanced to
the next/previous item. E.g., a `selectedFraction` of 3.5 indicates the
user is halfway between items 3 and 4.

  **Kind**: instance property of <code>[ArrowSelection](#ArrowSelection)</code>. Defined by <code>[TargetSelection](../basic-component-mixins/docs/TargetSelection.md)</code> mixin.
<a name="TargetSelection+selectedIndex"></a>

### arrowSelection.selectedIndex : <code>number</code>
Index of the currently selected item, or -1 if there is no selection.

  **Kind**: instance property of <code>[ArrowSelection](#ArrowSelection)</code>. Defined by <code>[TargetSelection](../basic-component-mixins/docs/TargetSelection.md)</code> mixin.
<a name="TargetSelection+selectedItem"></a>

### arrowSelection.selectedItem : <code>HTMLElement</code>
The currently selected item, or null if there is no selection.

  **Kind**: instance property of <code>[ArrowSelection](#ArrowSelection)</code>. Defined by <code>[TargetSelection](../basic-component-mixins/docs/TargetSelection.md)</code> mixin.
<a name="TargetSelection+selectFirst"></a>

### arrowSelection.selectFirst()
Select the first item in the list.

  **Kind**: instance method of <code>[ArrowSelection](#ArrowSelection)</code>. Defined by <code>[TargetSelection](../basic-component-mixins/docs/TargetSelection.md)</code> mixin.
<a name="TargetSelection+selectionRequired"></a>

### arrowSelection.selectionRequired : <code>boolean</code>
True if the list should always have a selection (if it has items).

  **Kind**: instance property of <code>[ArrowSelection](#ArrowSelection)</code>. Defined by <code>[TargetSelection](../basic-component-mixins/docs/TargetSelection.md)</code> mixin.
**Default**: <code>false</code>  
<a name="TargetSelection+selectionWraps"></a>

### arrowSelection.selectionWraps : <code>boolean</code>
True if selection navigations wrap from last to first, and vice versa.

  **Kind**: instance property of <code>[ArrowSelection](#ArrowSelection)</code>. Defined by <code>[TargetSelection](../basic-component-mixins/docs/TargetSelection.md)</code> mixin.
**Default**: <code>{false}</code>  
<a name="TargetSelection+selectLast"></a>

### arrowSelection.selectLast()
Select the last item in the list.

  **Kind**: instance method of <code>[ArrowSelection](#ArrowSelection)</code>. Defined by <code>[TargetSelection](../basic-component-mixins/docs/TargetSelection.md)</code> mixin.
<a name="TargetSelection+selectNext"></a>

### arrowSelection.selectNext()
Select the next item in the list.

  **Kind**: instance method of <code>[ArrowSelection](#ArrowSelection)</code>. Defined by <code>[TargetSelection](../basic-component-mixins/docs/TargetSelection.md)</code> mixin.
<a name="TargetSelection+selectPrevious"></a>

### arrowSelection.selectPrevious()
Select the previous item in the list.

If the list has no selection, the last item will be selected.

  **Kind**: instance method of <code>[ArrowSelection](#ArrowSelection)</code>. Defined by <code>[TargetSelection](../basic-component-mixins/docs/TargetSelection.md)</code> mixin.
<a name="TargetSelection+target"></a>

### arrowSelection.target : <code>HTMLElement</code>
Gets/sets the target element to which this component will delegate
selection actions.

  **Kind**: instance property of <code>[ArrowSelection](#ArrowSelection)</code>. Defined by <code>[TargetSelection](../basic-component-mixins/docs/TargetSelection.md)</code> mixin.
<a name="ContentFirstChildTarget+target"></a>

### arrowSelection.target : <code>HTMLElement</code>
Gets/sets the current target of the component.

  **Kind**: instance property of <code>[ArrowSelection](#ArrowSelection)</code>. Defined by <code>[ContentFirstChildTarget](../basic-component-mixins/docs/ContentFirstChildTarget.md)</code> mixin.
<a name="TargetInCollective+target"></a>

### arrowSelection.target : <code>HTMLElement</code>
Gets/sets the current target of the component.

Set this to point to another element. That target element will be
implicitly added to the component's collective. That is, the component
and its target will share responsibility for handling keyboard events.

You can set this property yourself, or you can use the
ContentFirstChildTargetMixin mixin to automatically set the target to the
component's first child.

  **Kind**: instance property of <code>[ArrowSelection](#ArrowSelection)</code>. Defined by <code>[TargetInCollective](../basic-component-mixins/docs/TargetInCollective.md)</code> mixin.
