# API Documentation
<a name="SlideshowTimer"></a>

## SlideshowTimer ⇐ <code>ElementBase</code>
Auxiliary component to advance a selection with a timer.

This component is generally used to wrap a component like
[basic-carousel](../basic-carousel) or the simpler
[basic-sliding-carousel](../basic-sliding-carousel) to add slideshow
behavior. For a standalone slideshow component, see
[basic-slideshow](../basic-slideshow).

Example:

    <basic-slideshow-timer>
      <basic-carousel>
        ... images or other elements ...
      </basic-carousel>
    </basic-slideshow-timer>

The basic-slideshow-timer component provides no visible user interface
elements, and exists chiefly as a convenience for use in scenarios like the
one above. If you're developing a component that will always want to provide
slideshow semantics, consider directly applying the
[TimerSelectionMixin](../basic-component-mixins/docs/TimerSelectionMixin.md)
to your component.

  **Kind**: global class
**Extends:** <code>ElementBase</code>  
**Mixes**: <code>[ContentFirstChildTargetMixin](../basic-component-mixins/docs/ContentFirstChildTargetMixin.md)</code>
  , <code>[DistributedChildrenContentMixin](../basic-component-mixins/docs/DistributedChildrenContentMixin.md)</code>
  , <code>[KeyboardMixin](../basic-component-mixins/docs/KeyboardMixin.md)</code>
  , <code>[KeyboardDirectionMixin](../basic-component-mixins/docs/KeyboardDirectionMixin.md)</code>
  , <code>[TargetInCollectiveMixin](../basic-component-mixins/docs/TargetInCollectiveMixin.md)</code>
  , <code>[TargetSelectionMixin](../basic-component-mixins/docs/TargetSelectionMixin.md)</code>
  , <code>[TimerSelectionMixin](../basic-component-mixins/docs/TimerSelectionMixin.md)</code>
  

* [SlideshowTimer](#SlideshowTimer) ⇐ <code>ElementBase</code>
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
    * [.pause()](#TimerSelection+pause)
    * [.play()](#TimerSelection+play)
    * [.playing](#TimerSelection+playing) : <code>boolean</code>
    * [.selectedFraction](#TargetSelection+selectedFraction) : <code>number</code>
    * [.selectedIndex](#TargetSelection+selectedIndex) : <code>number</code>
    * [.selectedItem](#TargetSelection+selectedItem) : <code>HTMLElement</code>
    * [.selectFirst()](#TargetSelection+selectFirst)
    * [.selectionRequired](#TargetSelection+selectionRequired) : <code>boolean</code>
    * [.selectionTimerDuration](#TimerSelection+selectionTimerDuration) : <code>number</code>
    * [.selectionWraps](#TargetSelection+selectionWraps) : <code>boolean</code>
    * [.selectLast()](#TargetSelection+selectLast)
    * [.selectNext()](#TargetSelection+selectNext)
    * [.selectPrevious()](#TargetSelection+selectPrevious)
    * [.target](#TargetInCollective+target) : <code>HTMLElement</code>
    * [.target](#ContentFirstChildTarget+target) : <code>HTMLElement</code>
    * [.target](#TargetSelection+target) : <code>HTMLElement</code>

<a name="TargetSelection+canSelectNext"></a>

### slideshowTimer.canSelectNext : <code>boolean</code>
True if the selection can be moved to the next item, false if not (the
selected item is the last item in the list).

  **Kind**: instance property of <code>[SlideshowTimer](#SlideshowTimer)</code>. Defined by <code>[TargetSelection](../basic-component-mixins/docs/TargetSelection.md)</code> mixin.
<a name="TargetSelection+canSelectPrevious"></a>

### slideshowTimer.canSelectPrevious : <code>boolean</code>
True if the selection can be moved to the previous item, false if not
(the selected item is the first one in the list).

  **Kind**: instance property of <code>[SlideshowTimer](#SlideshowTimer)</code>. Defined by <code>[TargetSelection](../basic-component-mixins/docs/TargetSelection.md)</code> mixin.
<a name="DistributedChildrenContent+content"></a>

### slideshowTimer.content : <code>Array.&lt;HTMLElement&gt;</code>
The content of this component, defined to be the flattened array of
children distributed to the component.

  **Kind**: instance property of <code>[SlideshowTimer](#SlideshowTimer)</code>. Defined by <code>[DistributedChildrenContent](../basic-component-mixins/docs/DistributedChildrenContent.md)</code> mixin.
<a name="DistributedChildrenContent.event_content-changed"></a>

### "content-changed"
This event is raised when the component's contents (including distributed
children) have changed.

  **Kind**: event emitted by <code>[SlideshowTimer](#SlideshowTimer)</code>. Defined by <code>[DistributedChildrenContent](../basic-component-mixins/docs/DistributedChildrenContent.md)</code> mixin.
<a name="DistributedChildrenContent+contentChanged"></a>

### slideshowTimer.contentChanged()
Invoked when the contents of the component (including distributed
children) have changed.

This method is also invoked when a component is first instantiated; the
contents have essentially "changed" from being nothing. This allows the
component to perform initial processing of its children.

  **Kind**: instance method of <code>[SlideshowTimer](#SlideshowTimer)</code>. Defined by <code>[DistributedChildrenContent](../basic-component-mixins/docs/DistributedChildrenContent.md)</code> mixin.
<a name="KeyboardDirection+symbols.goDown"></a>

### SlideshowTimer.goDown()
Invoked when the user wants to go/navigate down.
The default implementation of this method does nothing.

  **Kind**: static method of <code>[SlideshowTimer](#SlideshowTimer)</code>. Defined by <code>[KeyboardDirection#symbols](../basic-component-mixins/docs/KeyboardDirection#symbols.md)</code> mixin.
<a name="KeyboardDirection+symbols.goEnd"></a>

### SlideshowTimer.goEnd()
Invoked when the user wants to go/navigate to the end (e.g., of a list).
The default implementation of this method does nothing.

  **Kind**: static method of <code>[SlideshowTimer](#SlideshowTimer)</code>. Defined by <code>[KeyboardDirection#symbols](../basic-component-mixins/docs/KeyboardDirection#symbols.md)</code> mixin.
<a name="KeyboardDirection+symbols.goLeft"></a>

### SlideshowTimer.goLeft()
Invoked when the user wants to go/navigate left.
The default implementation of this method does nothing.

  **Kind**: static method of <code>[SlideshowTimer](#SlideshowTimer)</code>. Defined by <code>[KeyboardDirection#symbols](../basic-component-mixins/docs/KeyboardDirection#symbols.md)</code> mixin.
<a name="KeyboardDirection+symbols.goRight"></a>

### SlideshowTimer.goRight()
Invoked when the user wants to go/navigate right.
The default implementation of this method does nothing.

  **Kind**: static method of <code>[SlideshowTimer](#SlideshowTimer)</code>. Defined by <code>[KeyboardDirection#symbols](../basic-component-mixins/docs/KeyboardDirection#symbols.md)</code> mixin.
<a name="KeyboardDirection+symbols.goStart"></a>

### SlideshowTimer.goStart()
Invoked when the user wants to go/navigate to the start (e.g., of a
list). The default implementation of this method does nothing.

  **Kind**: static method of <code>[SlideshowTimer](#SlideshowTimer)</code>. Defined by <code>[KeyboardDirection#symbols](../basic-component-mixins/docs/KeyboardDirection#symbols.md)</code> mixin.
<a name="KeyboardDirection+symbols.goUp"></a>

### SlideshowTimer.goUp()
Invoked when the user wants to go/navigate up.
The default implementation of this method does nothing.

  **Kind**: static method of <code>[SlideshowTimer](#SlideshowTimer)</code>. Defined by <code>[KeyboardDirection#symbols](../basic-component-mixins/docs/KeyboardDirection#symbols.md)</code> mixin.
<a name="TargetSelection+items"></a>

### slideshowTimer.items : <code>Array.&lt;HTMLElement&gt;</code>
The current set of items in the list.

  **Kind**: instance property of <code>[SlideshowTimer](#SlideshowTimer)</code>. Defined by <code>[TargetSelection](../basic-component-mixins/docs/TargetSelection.md)</code> mixin.
<a name="TargetSelection+itemsChanged"></a>

### slideshowTimer.itemsChanged()
This method is invoked when the underlying contents change. It is also
invoked on component initialization – since the items have "changed" from
being nothing.

  **Kind**: instance method of <code>[SlideshowTimer](#SlideshowTimer)</code>. Defined by <code>[TargetSelection](../basic-component-mixins/docs/TargetSelection.md)</code> mixin.
<a name="Keyboard+symbols.keydown"></a>

### SlideshowTimer.keydown(event) ⇒ <code>boolean</code>
Handle the indicated keyboard event.

The default implementation of this method does nothing. This will
typically be handled by other mixins.

  **Kind**: static method of <code>[SlideshowTimer](#SlideshowTimer)</code>. Defined by <code>[Keyboard#symbols](../basic-component-mixins/docs/Keyboard#symbols.md)</code> mixin.
**Returns**: <code>boolean</code> - true if the event was handled  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | the keyboard event |

<a name="KeyboardDirection+navigationAxis"></a>

### slideshowTimer.navigationAxis : <code>string</code>
Indicates the direction of permitted navigation with the keyboard.

Accepted values are "horizontal", "vertical", or "both" (the default).
If this property is "horizontal", the Up Arrow and Down Arrow keys will
be ignored. Conversely, if this is "vertical", the Left Arrow and Right
Arrow keys will be ignored.

  **Kind**: instance property of <code>[SlideshowTimer](#SlideshowTimer)</code>. Defined by <code>[KeyboardDirection](../basic-component-mixins/docs/KeyboardDirection.md)</code> mixin.
<a name="TimerSelection+pause"></a>

### slideshowTimer.pause()
Pause automatic progression of the selection.

  **Kind**: instance method of <code>[SlideshowTimer](#SlideshowTimer)</code>. Defined by <code>[TimerSelection](../basic-component-mixins/docs/TimerSelection.md)</code> mixin.
<a name="TimerSelection+play"></a>

### slideshowTimer.play()
Begin automatic progression of the selection.

  **Kind**: instance method of <code>[SlideshowTimer](#SlideshowTimer)</code>. Defined by <code>[TimerSelection](../basic-component-mixins/docs/TimerSelection.md)</code> mixin.
<a name="TimerSelection+playing"></a>

### slideshowTimer.playing : <code>boolean</code>
True if the selection is being automatically advanced.

  **Kind**: instance property of <code>[SlideshowTimer](#SlideshowTimer)</code>. Defined by <code>[TimerSelection](../basic-component-mixins/docs/TimerSelection.md)</code> mixin.
**Default**: <code>false</code>  
<a name="TargetSelection+selectedFraction"></a>

### slideshowTimer.selectedFraction : <code>number</code>
A fractional value indicating how far the user has currently advanced to
the next/previous item. E.g., a `selectedFraction` of 3.5 indicates the
user is halfway between items 3 and 4.

  **Kind**: instance property of <code>[SlideshowTimer](#SlideshowTimer)</code>. Defined by <code>[TargetSelection](../basic-component-mixins/docs/TargetSelection.md)</code> mixin.
<a name="TargetSelection+selectedIndex"></a>

### slideshowTimer.selectedIndex : <code>number</code>
Index of the currently selected item, or -1 if there is no selection.

  **Kind**: instance property of <code>[SlideshowTimer](#SlideshowTimer)</code>. Defined by <code>[TargetSelection](../basic-component-mixins/docs/TargetSelection.md)</code> mixin.
<a name="TargetSelection+selectedItem"></a>

### slideshowTimer.selectedItem : <code>HTMLElement</code>
The currently selected item, or null if there is no selection.

  **Kind**: instance property of <code>[SlideshowTimer](#SlideshowTimer)</code>. Defined by <code>[TargetSelection](../basic-component-mixins/docs/TargetSelection.md)</code> mixin.
<a name="TargetSelection+selectFirst"></a>

### slideshowTimer.selectFirst()
Select the first item in the list.

  **Kind**: instance method of <code>[SlideshowTimer](#SlideshowTimer)</code>. Defined by <code>[TargetSelection](../basic-component-mixins/docs/TargetSelection.md)</code> mixin.
<a name="TargetSelection+selectionRequired"></a>

### slideshowTimer.selectionRequired : <code>boolean</code>
True if the list should always have a selection (if it has items).

  **Kind**: instance property of <code>[SlideshowTimer](#SlideshowTimer)</code>. Defined by <code>[TargetSelection](../basic-component-mixins/docs/TargetSelection.md)</code> mixin.
**Default**: <code>false</code>  
<a name="TimerSelection+selectionTimerDuration"></a>

### slideshowTimer.selectionTimerDuration : <code>number</code>
The time in milliseconds that will elapse after the selection changes
before the selection will be advanced to the next item in the list.

  **Kind**: instance property of <code>[SlideshowTimer](#SlideshowTimer)</code>. Defined by <code>[TimerSelection](../basic-component-mixins/docs/TimerSelection.md)</code> mixin.
**Default**: <code>1000 (1 second)</code>  
<a name="TargetSelection+selectionWraps"></a>

### slideshowTimer.selectionWraps : <code>boolean</code>
True if selection navigations wrap from last to first, and vice versa.

  **Kind**: instance property of <code>[SlideshowTimer](#SlideshowTimer)</code>. Defined by <code>[TargetSelection](../basic-component-mixins/docs/TargetSelection.md)</code> mixin.
**Default**: <code>{false}</code>  
<a name="TargetSelection+selectLast"></a>

### slideshowTimer.selectLast()
Select the last item in the list.

  **Kind**: instance method of <code>[SlideshowTimer](#SlideshowTimer)</code>. Defined by <code>[TargetSelection](../basic-component-mixins/docs/TargetSelection.md)</code> mixin.
<a name="TargetSelection+selectNext"></a>

### slideshowTimer.selectNext()
Select the next item in the list.

  **Kind**: instance method of <code>[SlideshowTimer](#SlideshowTimer)</code>. Defined by <code>[TargetSelection](../basic-component-mixins/docs/TargetSelection.md)</code> mixin.
<a name="TargetSelection+selectPrevious"></a>

### slideshowTimer.selectPrevious()
Select the previous item in the list.

If the list has no selection, the last item will be selected.

  **Kind**: instance method of <code>[SlideshowTimer](#SlideshowTimer)</code>. Defined by <code>[TargetSelection](../basic-component-mixins/docs/TargetSelection.md)</code> mixin.
<a name="TargetInCollective+target"></a>

### slideshowTimer.target : <code>HTMLElement</code>
Gets/sets the current target of the component.

Set this to point to another element. That target element will be
implicitly added to the component's collective. That is, the component
and its target will share responsibility for handling keyboard events.

You can set this property yourself, or you can use the
ContentFirstChildTargetMixin mixin to automatically set the target to the
component's first child.

  **Kind**: instance property of <code>[SlideshowTimer](#SlideshowTimer)</code>. Defined by <code>[TargetInCollective](../basic-component-mixins/docs/TargetInCollective.md)</code> mixin.
<a name="ContentFirstChildTarget+target"></a>

### slideshowTimer.target : <code>HTMLElement</code>
Gets/sets the current target of the component.

  **Kind**: instance property of <code>[SlideshowTimer](#SlideshowTimer)</code>. Defined by <code>[ContentFirstChildTarget](../basic-component-mixins/docs/ContentFirstChildTarget.md)</code> mixin.
<a name="TargetSelection+target"></a>

### slideshowTimer.target : <code>HTMLElement</code>
Gets/sets the target element to which this component will delegate
selection actions.

  **Kind**: instance property of <code>[SlideshowTimer](#SlideshowTimer)</code>. Defined by <code>[TargetSelection](../basic-component-mixins/docs/TargetSelection.md)</code> mixin.
