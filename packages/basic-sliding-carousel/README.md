# API Documentation
<a name="SlidingCarousel"></a>

## SlidingCarousel ⇐ <code>ElementBase</code>
Lets the user navigate laterally through a sequence of child elements.

[Live demo](http://basicwebcomponents.org/basic-web-components/packages/basic-carousel/)

basic-sliding-carousel is an implementation of the carousel user interface pattern,
commonly used for navigating between images, pages, and other elements. This
pattern presents the user with a linear sequence of elements, only one of
which is shown at a time. The user can navigate to the next/previous element
with a variety of input methods.

basic-sliding-carousel is a simpler variation of the more sophisticated
[basic-carousel](../basic-carousel) component. The latter includes support
for _wrapping_ (going forward from the last item to the first, and vice versa),
and more complex visual transitions. Those transitions entail use of the
Web Animation API, which requires a polyfill in older browsers. Hence, the
simpler basic-sliding-carousel may be a more appropriate choice if factors
such as download size are critical.

Beyond those differences, basic-sliding-carousel offers the same API, usage
recommendations, and support for keyboard/touch/mouse and assistive devices.
See that component for more details on use.

  **Kind**: global class
**Extends:** <code>ElementBase</code>  
**Mixes**: <code>[ContentItemsMixin](../basic-component-mixins/docs/ContentItemsMixin.md)</code>
  , <code>[DirectionSelectionMixin](../basic-component-mixins/docs/DirectionSelectionMixin.md)</code>
  , <code>[DistributedChildrenContentMixin](../basic-component-mixins/docs/DistributedChildrenContentMixin.md)</code>
  , <code>[GenericMixin](../basic-component-mixins/docs/GenericMixin.md)</code>
  , <code>[KeyboardMixin](../basic-component-mixins/docs/KeyboardMixin.md)</code>
  , <code>[KeyboardDirectionMixin](../basic-component-mixins/docs/KeyboardDirectionMixin.md)</code>
  , <code>[SelectionAriaActiveMixin](../basic-component-mixins/docs/SelectionAriaActiveMixin.md)</code>
  , <code>[SingleSelectionMixin](../basic-component-mixins/docs/SingleSelectionMixin.md)</code>
  , <code>[SwipeDirectionMixin](../basic-component-mixins/docs/SwipeDirectionMixin.md)</code>
  , <code>[TrackpadDirectionMixin](../basic-component-mixins/docs/TrackpadDirectionMixin.md)</code>
  

* [SlidingCarousel](#SlidingCarousel) ⇐ <code>ElementBase</code>
    * [.applySelection(item, selected)](#ContentItems+symbols.applySelection)
    * [.applySelection(item, selected)](#SingleSelection+symbols.applySelection)
    * [.canSelectNext](#SingleSelection+canSelectNext) : <code>boolean</code>
    * [.canSelectPrevious](#SingleSelection+canSelectPrevious) : <code>boolean</code>
    * [.content](#DistributedChildrenContent+content) : <code>Array.&lt;HTMLElement&gt;</code>
    * ["content-changed"](#DistributedChildrenContent.event_content-changed)
    * [.contentChanged()](#DistributedChildrenContent+contentChanged)
    * [.generic](#Generic+generic) : <code>Boolean</code>
    * [.goDown()](#KeyboardDirection+symbols.goDown)
    * [.goEnd()](#KeyboardDirection+symbols.goEnd)
    * [.goLeft()](#KeyboardDirection+symbols.goLeft)
    * [.goLeft()](#TrackpadDirection+symbols.goLeft)
    * [.goLeft()](#SwipeDirection+symbols.goLeft)
    * [.goRight()](#KeyboardDirection+symbols.goRight)
    * [.goRight()](#SwipeDirection+symbols.goRight)
    * [.goRight()](#TrackpadDirection+symbols.goRight)
    * [.goStart()](#KeyboardDirection+symbols.goStart)
    * [.goUp()](#KeyboardDirection+symbols.goUp)
    * [.itemAdded(item)](#SingleSelection+symbols.itemAdded)
    * [.itemAdded(item)](#ContentItems+symbols.itemAdded)
    * [.items](#ContentItems+items) : <code>Array.&lt;HTMLElement&gt;</code>
    * ["items-changed"](#ContentItems.event_items-changed)
    * [.itemsChanged()](#ContentItems+symbols.itemsChanged)
    * [.keydown(event)](#Keyboard+symbols.keydown) ⇒ <code>boolean</code>
    * [.navigationAxis](#KeyboardDirection+navigationAxis) : <code>string</code>
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
    * [.travelFraction](#SwipeDirection+travelFraction) : <code>number</code>
    * [.travelFraction](#TrackpadDirection+travelFraction) : <code>number</code>

<a name="ContentItems+symbols.applySelection"></a>

### SlidingCarousel.applySelection(item, selected)
Apply the selection state to a single item.

Invoke this method to signal that the selected state of the indicated item
has changed. By default, this applies a `selected` CSS class if the item
is selected, and removed it if not selected.

  **Kind**: static method of <code>[SlidingCarousel](#SlidingCarousel)</code>. Defined by <code>[ContentItems#symbols](../basic-component-mixins/docs/ContentItems#symbols.md)</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| item | <code>HTMLElement</code> | The item whose selection state has changed. |
| selected | <code>boolean</code> | True if the item is selected, false if not. |

<a name="SingleSelection+symbols.applySelection"></a>

### SlidingCarousel.applySelection(item, selected)
Apply the indicate selection state to the item.

The default implementation of this method does nothing. User-visible
effects will typically be handled by other mixins.

  **Kind**: static method of <code>[SlidingCarousel](#SlidingCarousel)</code>. Defined by <code>[SingleSelection#symbols](../basic-component-mixins/docs/SingleSelection#symbols.md)</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| item | <code>HTMLElement</code> | the item being selected/deselected |
| selected | <code>boolean</code> | true if the item is selected, false if not |

<a name="SingleSelection+canSelectNext"></a>

### slidingCarousel.canSelectNext : <code>boolean</code>
True if the selection can be moved to the next item, false if not (the
selected item is the last item in the list).

  **Kind**: instance property of <code>[SlidingCarousel](#SlidingCarousel)</code>. Defined by <code>[SingleSelection](../basic-component-mixins/docs/SingleSelection.md)</code> mixin.
<a name="SingleSelection+canSelectPrevious"></a>

### slidingCarousel.canSelectPrevious : <code>boolean</code>
True if the selection can be moved to the previous item, false if not
(the selected item is the first one in the list).

  **Kind**: instance property of <code>[SlidingCarousel](#SlidingCarousel)</code>. Defined by <code>[SingleSelection](../basic-component-mixins/docs/SingleSelection.md)</code> mixin.
<a name="DistributedChildrenContent+content"></a>

### slidingCarousel.content : <code>Array.&lt;HTMLElement&gt;</code>
The content of this component, defined to be the flattened array of
children distributed to the component.

  **Kind**: instance property of <code>[SlidingCarousel](#SlidingCarousel)</code>. Defined by <code>[DistributedChildrenContent](../basic-component-mixins/docs/DistributedChildrenContent.md)</code> mixin.
<a name="DistributedChildrenContent.event_content-changed"></a>

### "content-changed"
This event is raised when the component's contents (including distributed
children) have changed.

  **Kind**: event emitted by <code>[SlidingCarousel](#SlidingCarousel)</code>. Defined by <code>[DistributedChildrenContent](../basic-component-mixins/docs/DistributedChildrenContent.md)</code> mixin.
<a name="DistributedChildrenContent+contentChanged"></a>

### slidingCarousel.contentChanged()
Invoked when the contents of the component (including distributed
children) have changed.

This method is also invoked when a component is first instantiated; the
contents have essentially "changed" from being nothing. This allows the
component to perform initial processing of its children.

  **Kind**: instance method of <code>[SlidingCarousel](#SlidingCarousel)</code>. Defined by <code>[DistributedChildrenContent](../basic-component-mixins/docs/DistributedChildrenContent.md)</code> mixin.
<a name="Generic+generic"></a>

### slidingCarousel.generic : <code>Boolean</code>
True if the component would like to receive generic styling.

This property is true by default — set it to false to turn off all
generic styles. This makes it easier to apply custom styling; you won't
have to explicitly override styling you don't want.

  **Kind**: instance property of <code>[SlidingCarousel](#SlidingCarousel)</code>. Defined by <code>[Generic](../basic-component-mixins/docs/Generic.md)</code> mixin.
**Default**: <code>true</code>  
<a name="KeyboardDirection+symbols.goDown"></a>

### SlidingCarousel.goDown()
Invoked when the user wants to go/navigate down.
The default implementation of this method does nothing.

  **Kind**: static method of <code>[SlidingCarousel](#SlidingCarousel)</code>. Defined by <code>[KeyboardDirection#symbols](../basic-component-mixins/docs/KeyboardDirection#symbols.md)</code> mixin.
<a name="KeyboardDirection+symbols.goEnd"></a>

### SlidingCarousel.goEnd()
Invoked when the user wants to go/navigate to the end (e.g., of a list).
The default implementation of this method does nothing.

  **Kind**: static method of <code>[SlidingCarousel](#SlidingCarousel)</code>. Defined by <code>[KeyboardDirection#symbols](../basic-component-mixins/docs/KeyboardDirection#symbols.md)</code> mixin.
<a name="KeyboardDirection+symbols.goLeft"></a>

### SlidingCarousel.goLeft()
Invoked when the user wants to go/navigate left.
The default implementation of this method does nothing.

  **Kind**: static method of <code>[SlidingCarousel](#SlidingCarousel)</code>. Defined by <code>[KeyboardDirection#symbols](../basic-component-mixins/docs/KeyboardDirection#symbols.md)</code> mixin.
<a name="TrackpadDirection+symbols.goLeft"></a>

### SlidingCarousel.goLeft()
Invoked when the user wants to go/navigate left.
The default implementation of this method does nothing.

  **Kind**: static method of <code>[SlidingCarousel](#SlidingCarousel)</code>. Defined by <code>[TrackpadDirection#symbols](../basic-component-mixins/docs/TrackpadDirection#symbols.md)</code> mixin.
<a name="SwipeDirection+symbols.goLeft"></a>

### SlidingCarousel.goLeft()
Invoked when the user wants to go/navigate left.
The default implementation of this method does nothing.

  **Kind**: static method of <code>[SlidingCarousel](#SlidingCarousel)</code>. Defined by <code>[SwipeDirection#symbols](../basic-component-mixins/docs/SwipeDirection#symbols.md)</code> mixin.
<a name="KeyboardDirection+symbols.goRight"></a>

### SlidingCarousel.goRight()
Invoked when the user wants to go/navigate right.
The default implementation of this method does nothing.

  **Kind**: static method of <code>[SlidingCarousel](#SlidingCarousel)</code>. Defined by <code>[KeyboardDirection#symbols](../basic-component-mixins/docs/KeyboardDirection#symbols.md)</code> mixin.
<a name="SwipeDirection+symbols.goRight"></a>

### SlidingCarousel.goRight()
Invoked when the user wants to go/navigate right.
The default implementation of this method does nothing.

  **Kind**: static method of <code>[SlidingCarousel](#SlidingCarousel)</code>. Defined by <code>[SwipeDirection#symbols](../basic-component-mixins/docs/SwipeDirection#symbols.md)</code> mixin.
<a name="TrackpadDirection+symbols.goRight"></a>

### SlidingCarousel.goRight()
Invoked when the user wants to go/navigate right.
The default implementation of this method does nothing.

  **Kind**: static method of <code>[SlidingCarousel](#SlidingCarousel)</code>. Defined by <code>[TrackpadDirection#symbols](../basic-component-mixins/docs/TrackpadDirection#symbols.md)</code> mixin.
<a name="KeyboardDirection+symbols.goStart"></a>

### SlidingCarousel.goStart()
Invoked when the user wants to go/navigate to the start (e.g., of a
list). The default implementation of this method does nothing.

  **Kind**: static method of <code>[SlidingCarousel](#SlidingCarousel)</code>. Defined by <code>[KeyboardDirection#symbols](../basic-component-mixins/docs/KeyboardDirection#symbols.md)</code> mixin.
<a name="KeyboardDirection+symbols.goUp"></a>

### SlidingCarousel.goUp()
Invoked when the user wants to go/navigate up.
The default implementation of this method does nothing.

  **Kind**: static method of <code>[SlidingCarousel](#SlidingCarousel)</code>. Defined by <code>[KeyboardDirection#symbols](../basic-component-mixins/docs/KeyboardDirection#symbols.md)</code> mixin.
<a name="SingleSelection+symbols.itemAdded"></a>

### SlidingCarousel.itemAdded(item)
Handle a new item being added to the list.

The default implementation of this method simply sets the item's
selection state to false.

  **Kind**: static method of <code>[SlidingCarousel](#SlidingCarousel)</code>. Defined by <code>[SingleSelection#symbols](../basic-component-mixins/docs/SingleSelection#symbols.md)</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| item | <code>HTMLElement</code> | the item being added |

<a name="ContentItems+symbols.itemAdded"></a>

### SlidingCarousel.itemAdded(item)
This method is invoked whenever a new item is added to the list.

The default implementation of this method does nothing. You can override
this to perform per-item initialization.

  **Kind**: static method of <code>[SlidingCarousel](#SlidingCarousel)</code>. Defined by <code>[ContentItems#symbols](../basic-component-mixins/docs/ContentItems#symbols.md)</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| item | <code>HTMLElement</code> | The item that was added. |

<a name="ContentItems+items"></a>

### slidingCarousel.items : <code>Array.&lt;HTMLElement&gt;</code>
The current set of items in the list. See the top-level documentation for
mixin for a description of how items differ from plain content.

  **Kind**: instance property of <code>[SlidingCarousel](#SlidingCarousel)</code>. Defined by <code>[ContentItems](../basic-component-mixins/docs/ContentItems.md)</code> mixin.
<a name="ContentItems.event_items-changed"></a>

### "items-changed"
Fires when the items in the list change.

  **Kind**: event emitted by <code>[SlidingCarousel](#SlidingCarousel)</code>. Defined by <code>[ContentItems](../basic-component-mixins/docs/ContentItems.md)</code> mixin.
<a name="ContentItems+symbols.itemsChanged"></a>

### SlidingCarousel.itemsChanged()
This method is invoked when the underlying contents change. It is also
invoked on component initialization – since the items have "changed" from
being nothing.

  **Kind**: static method of <code>[SlidingCarousel](#SlidingCarousel)</code>. Defined by <code>[ContentItems#symbols](../basic-component-mixins/docs/ContentItems#symbols.md)</code> mixin.
<a name="Keyboard+symbols.keydown"></a>

### SlidingCarousel.keydown(event) ⇒ <code>boolean</code>
Handle the indicated keyboard event.

The default implementation of this method does nothing. This will
typically be handled by other mixins.

  **Kind**: static method of <code>[SlidingCarousel](#SlidingCarousel)</code>. Defined by <code>[Keyboard#symbols](../basic-component-mixins/docs/Keyboard#symbols.md)</code> mixin.
**Returns**: <code>boolean</code> - true if the event was handled  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | the keyboard event |

<a name="KeyboardDirection+navigationAxis"></a>

### slidingCarousel.navigationAxis : <code>string</code>
Indicates the direction of permitted navigation with the keyboard.

Accepted values are "horizontal", "vertical", or "both" (the default).
If this property is "horizontal", the Up Arrow and Down Arrow keys will
be ignored. Conversely, if this is "vertical", the Left Arrow and Right
Arrow keys will be ignored.

  **Kind**: instance property of <code>[SlidingCarousel](#SlidingCarousel)</code>. Defined by <code>[KeyboardDirection](../basic-component-mixins/docs/KeyboardDirection.md)</code> mixin.
<a name="SingleSelection.event_selected-index-changed"></a>

### "selected-index-changed"
Fires when the selectedIndex property changes.

  **Kind**: event emitted by <code>[SlidingCarousel](#SlidingCarousel)</code>. Defined by <code>[SingleSelection](../basic-component-mixins/docs/SingleSelection.md)</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| detail.selectedIndex | <code>number</code> | The new selected index. |

<a name="SingleSelection.event_selected-item-changed"></a>

### "selected-item-changed"
Fires when the selectedItem property changes.

  **Kind**: event emitted by <code>[SlidingCarousel](#SlidingCarousel)</code>. Defined by <code>[SingleSelection](../basic-component-mixins/docs/SingleSelection.md)</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| detail.selectedItem | <code>HTMLElement</code> | The new selected item. |
| detail.previousItem | <code>HTMLElement</code> | The previously selected item. |

<a name="SingleSelection+selectedIndex"></a>

### slidingCarousel.selectedIndex : <code>number</code>
The index of the item which is currently selected.

A `selectedIndex` of -1 indicates there is no selection. Setting this
property to -1 will remove any existing selection.

  **Kind**: instance property of <code>[SlidingCarousel](#SlidingCarousel)</code>. Defined by <code>[SingleSelection](../basic-component-mixins/docs/SingleSelection.md)</code> mixin.
<a name="SingleSelection+selectedItem"></a>

### slidingCarousel.selectedItem : <code>object</code>
The currently selected item, or null if there is no selection.

Setting this property to null deselects any currently-selected item.
Setting this property to an object that is not in the list has no effect.

TODO: Even if selectionRequired, can still explicitly set selectedItem to null.
TODO: If selectionRequired, leave selection alone?

  **Kind**: instance property of <code>[SlidingCarousel](#SlidingCarousel)</code>. Defined by <code>[SingleSelection](../basic-component-mixins/docs/SingleSelection.md)</code> mixin.
<a name="SingleSelection+selectFirst"></a>

### slidingCarousel.selectFirst()
Select the first item in the list.

  **Kind**: instance method of <code>[SlidingCarousel](#SlidingCarousel)</code>. Defined by <code>[SingleSelection](../basic-component-mixins/docs/SingleSelection.md)</code> mixin.
<a name="SingleSelection+selectionRequired"></a>

### slidingCarousel.selectionRequired : <code>boolean</code>
True if the list should always have a selection (if it has items).

  **Kind**: instance property of <code>[SlidingCarousel](#SlidingCarousel)</code>. Defined by <code>[SingleSelection](../basic-component-mixins/docs/SingleSelection.md)</code> mixin.
**Default**: <code>false</code>  
<a name="SingleSelection+selectionWraps"></a>

### slidingCarousel.selectionWraps : <code>boolean</code>
True if selection navigations wrap from last to first, and vice versa.

  **Kind**: instance property of <code>[SlidingCarousel](#SlidingCarousel)</code>. Defined by <code>[SingleSelection](../basic-component-mixins/docs/SingleSelection.md)</code> mixin.
**Default**: <code>false</code>  
<a name="SingleSelection+selectLast"></a>

### slidingCarousel.selectLast()
Select the last item in the list.

  **Kind**: instance method of <code>[SlidingCarousel](#SlidingCarousel)</code>. Defined by <code>[SingleSelection](../basic-component-mixins/docs/SingleSelection.md)</code> mixin.
<a name="SingleSelection+selectNext"></a>

### slidingCarousel.selectNext()
Select the next item in the list.

  **Kind**: instance method of <code>[SlidingCarousel](#SlidingCarousel)</code>. Defined by <code>[SingleSelection](../basic-component-mixins/docs/SingleSelection.md)</code> mixin.
<a name="SingleSelection+selectPrevious"></a>

### slidingCarousel.selectPrevious()
Select the previous item in the list.

If the list has no selection, the last item will be selected.

  **Kind**: instance method of <code>[SlidingCarousel](#SlidingCarousel)</code>. Defined by <code>[SingleSelection](../basic-component-mixins/docs/SingleSelection.md)</code> mixin.
<a name="SwipeDirection+travelFraction"></a>

### slidingCarousel.travelFraction : <code>number</code>
The distance the first touchpoint has traveled since the beginning of a
drag, expressed as a fraction of the element's width.

  **Kind**: instance property of <code>[SlidingCarousel](#SlidingCarousel)</code>. Defined by <code>[SwipeDirection](../basic-component-mixins/docs/SwipeDirection.md)</code> mixin.
<a name="TrackpadDirection+travelFraction"></a>

### slidingCarousel.travelFraction : <code>number</code>
The distance the user has moved the first touchpoint since the beginning
of a trackpad/wheel operation, expressed as a fraction of the element's
width.

  **Kind**: instance property of <code>[SlidingCarousel](#SlidingCarousel)</code>. Defined by <code>[TrackpadDirection](../basic-component-mixins/docs/TrackpadDirection.md)</code> mixin.
