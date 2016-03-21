# API Documentation
<a name="Carousel"></a>
## Carousel ⇐ <code>ElementBase</code>
Lets the user navigate laterally through a sequence of child elements.

basic-carousel is an implementation of the carousel user interface pattern,
commonly used for navigating between images, pages, and other elements. This
pattern presents the user with a linear sequence of elements, only one of
which is shown at a time. The user can navigate to the next/previous element
with a variety of input methods.

[Live demo](http://basicwebcomponents.org/basic-web-components/packages/basic-carousel/)

You can also view demos with optional
[arrows](http://basicwebcomponents.org/basic-web-components/packages/basic-carousel/carouselWithArrows.html),
[dots](http://basicwebcomponents.org/basic-web-components/packages/basic-carousel/carouselWithDots.html),
or both [arrows and dots](http://basicwebcomponents.org/basic-web-components/packages/basic-carousel/carouselWithArrowsAndDots.html).

basic-carousel uses its children as the elements the user will navigate
through. In a typical use, a basic-carousel can be used to navigate between a
sequence of images:

    <basic-carousel>
      <img src="image1.jpg">
      <img src="image2.jpg">
      <img src="image3.jpg">
    </basic-carousel>

The child elements can be of any type — they are not restricted to images.

This component attempts to meet the [Gold Standard for web components]
(https://github.com/webcomponents/gold-standard/wiki) so that it is generally
as flexible and robust as standard HTML elements. For example, it meets the
"Content Changes" criteria: the carousel will adapt to new child elements
added or removed at runtime.

Currently, this component does not meet the Gold Standard criteria "Size to
Content". As a result, for the time being, **you must manually set a size on
this component**. Two approaches are to: 1) stretch the component across
whatever surface it is contained within, or 2) set it to be larger than the
largest child element you want to display. The former approach is more
common, and can be achieved with CSS styling such as:

    html {
      height: 100%;
    }

    body {
      display: -webkit-flex;
      display: flex;
      height: 100%;
      margin: 0;
    }

    basic-carousel {
      -webkit-flex: 1;
      flex: 1;
    }

The standard basic-carousel component supports navigation via the following
input methods:

* Keyboard. When the carousel has focus, the user can press Left, Right,
  Home, or End. These navigate to the expected element.
* Touch. On mobile and other touch-enabled devices, the user can drag left or
  right.
* Trackpad. The user can swipe left or right on a trackpad to navigate.

Because carousels are used in a wide variety of circumstances, by default
basic-carousel provides a minimal appearance and no separately interactive
elements such as arrow buttons on the side or dots along the bottom. Those
elements can be added by wrapping a basic-carousel in optional accessories:

* [basic-arrow-selection](http://github.com/basic-web-components/basic-web-components/packages/basic-arrow-selection).
  This adds prominent left and right arrow buttons on the side of the carousel.
* [basic-page-dots](http://github.com/basic-web-components/basic-web-components/packages/basic-page-dots).
  This adds a series of small dots below the carousel to indicate the user's
  current position in the sequence.

See those components for more details, but in general you can construct a
common carousel with both arrow buttons and dots like so:

    <basic-arrow-selection>
      <basic-page-dots>
        <basic-carousel>
          ... images, etc. ...
        </basic-carousel>
      </basic-page-dots>
    </basic-arrow-selection>

For universal access, basic-carousel automatically adds a variety of
[ARIA](http://www.w3.org/WAI/intro/aria) properties to itself and to child
elements. This helps users navigate the sequence of elements in the carousel
using assistive technologies.

  **Kind**: global class
**Extends:** <code>ElementBase</code>  
**Mixes**: <code>[ContentAsItems](../basic-component-mixins/docs/ContentAsItems.md)</code>
  , <code>[DirectionSelection](../basic-component-mixins/docs/DirectionSelection.md)</code>
  , <code>[DistributedChildrenAsContent](../basic-component-mixins/docs/DistributedChildrenAsContent.md)</code>
  , <code>[Generic](../basic-component-mixins/docs/Generic.md)</code>
  , <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code>
  , <code>[Keyboard](../basic-component-mixins/docs/Keyboard.md)</code>
  , <code>[KeyboardDirection](../basic-component-mixins/docs/KeyboardDirection.md)</code>
  , <code>[ObserveContentChanges](../basic-component-mixins/docs/ObserveContentChanges.md)</code>
  , <code>[SelectionAriaActive](../basic-component-mixins/docs/SelectionAriaActive.md)</code>
  , <code>[SwipeDirection](../basic-component-mixins/docs/SwipeDirection.md)</code>
  , <code>[TargetInCollective](../basic-component-mixins/docs/TargetInCollective.md)</code>
  , <code>[TrackpadDirection](../basic-component-mixins/docs/TrackpadDirection.md)</code>
  

* [Carousel](#Carousel) ⇐ <code>ElementBase</code>
    * _instance_
        * [.items](#ContentAsItems+items) : <code>Array.&lt;HTMLElement&gt;</code>
        * [.applySelection(item, selected)](#ContentAsItems+applySelection)
        * [.itemAdded(item)](#ContentAsItems+itemAdded)
        * [.itemsChanged()](#ContentAsItems+itemsChanged)
    * _static_
        * ["items-changed"](#ContentAsItems.event_items-changed)
    * _instance_
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
    * _static_
        * ["selected-item-changed"](#ItemsSelection.event_selected-item-changed)
        * ["selected-index-changed"](#ItemsSelection.event_selected-index-changed)
    * _instance_
        * [.keydown(event)](#Keyboard+keydown) ⇒ <code>boolean</code>
        * [.navigationAxis](#KeyboardDirection+navigationAxis) : <code>string</code>
        * [.goDown()](#KeyboardDirection+goDown)
        * [.goEnd()](#KeyboardDirection+goEnd)
        * [.goLeft()](#KeyboardDirection+goLeft)
        * [.goRight()](#KeyboardDirection+goRight)
        * [.goStart()](#KeyboardDirection+goStart)
        * [.goUp()](#KeyboardDirection+goUp)
        * [.contentChanged()](#ObserveContentChanges+contentChanged)
    * _static_
        * ["content-changed"](#ObserveContentChanges.event_content-changed)
    * _instance_
        * [.position](#SwipeDirection+position) : <code>number</code>
        * [.goLeft()](#SwipeDirection+goLeft)
        * [.goRight()](#SwipeDirection+goRight)
        * [.showTransition(value)](#SwipeDirection+showTransition)
        * [.target](#TargetInCollective+target) : <code>HTMLElement</code>
        * [.position](#TrackpadDirection+position) : <code>number</code>
        * [.goLeft()](#TrackpadDirection+goLeft)
        * [.goRight()](#TrackpadDirection+goRight)

<a name="ContentAsItems+items"></a>
### carousel.items : <code>Array.&lt;HTMLElement&gt;</code>
The current set of items in the list. See the top-level documentation for
mixin for a description of how items differ from plain content.

  **Kind**: instance property of <code>[Carousel](#Carousel)</code>. Defined by <code>[ContentAsItems](../basic-component-mixins/docs/ContentAsItems.md)</code> mixin.
<a name="ContentAsItems+applySelection"></a>
### carousel.applySelection(item, selected)
Apply the selection state to a single item.

Invoke this method to signal that the selected state of the indicated item
has changed. By default, this applies a `selected` CSS class if the item
is selected, and removed it if not selected.

  **Kind**: instance method of <code>[Carousel](#Carousel)</code>. Defined by <code>[ContentAsItems](../basic-component-mixins/docs/ContentAsItems.md)</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| item | <code>HTMLElement</code> | The item whose selection state has changed. |
| selected | <code>boolean</code> | True if the item is selected, false if not. |

<a name="ContentAsItems+itemAdded"></a>
### carousel.itemAdded(item)
This method is invoked whenever a new item is added to the list.

The default implementation of this method does nothing. You can override
this to perform per-item initialization.

  **Kind**: instance method of <code>[Carousel](#Carousel)</code>. Defined by <code>[ContentAsItems](../basic-component-mixins/docs/ContentAsItems.md)</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| item | <code>HTMLElement</code> | The item that was added. |

<a name="ContentAsItems+itemsChanged"></a>
### carousel.itemsChanged()
This method is invoked when the underlying contents change. It is also
invoked on component initialization – since the items have "changed" from
being nothing.

  **Kind**: instance method of <code>[Carousel](#Carousel)</code>. Defined by <code>[ContentAsItems](../basic-component-mixins/docs/ContentAsItems.md)</code> mixin.
<a name="ContentAsItems.event_items-changed"></a>
### "items-changed"
Fires when the items in the list change.

  **Kind**: event emitted by <code>[Carousel](#Carousel)</code>. Defined by <code>[ContentAsItems](../basic-component-mixins/docs/ContentAsItems.md)</code> mixin.
<a name="DistributedChildrenAsContent+content"></a>
### carousel.content : <code>Array.&lt;HTMLElement&gt;</code>
The content of this component, defined to be the flattened array of
children distributed to the component.

  **Kind**: instance property of <code>[Carousel](#Carousel)</code>. Defined by <code>[DistributedChildrenAsContent](../basic-component-mixins/docs/DistributedChildrenAsContent.md)</code> mixin.
<a name="Generic+generic"></a>
### carousel.generic : <code>Boolean</code>
True if the component would like to receive generic styling.

This property is true by default — set it to false to turn off all
generic styles. This makes it easier to apply custom styling; you won't
have to explicitly override styling you don't want.

  **Kind**: instance property of <code>[Carousel](#Carousel)</code>. Defined by <code>[Generic](../basic-component-mixins/docs/Generic.md)</code> mixin.
**Default**: <code>true</code>  
<a name="ItemsSelection+canSelectNext"></a>
### carousel.canSelectNext : <code>boolean</code>
True if the selection can be moved to the next item, false if not (the
selected item is the last item in the list).

  **Kind**: instance property of <code>[Carousel](#Carousel)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.
<a name="ItemsSelection+canSelectPrevious"></a>
### carousel.canSelectPrevious : <code>boolean</code>
True if the selection can be moved to the previous item, false if not
(the selected item is the first one in the list).

  **Kind**: instance property of <code>[Carousel](#Carousel)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.
<a name="ItemsSelection+selectedIndex"></a>
### carousel.selectedIndex : <code>number</code>
The index of the item which is currently selected, or -1 if there is no
selection.

Setting the index to -1 deselects any current-selected item.

  **Kind**: instance property of <code>[Carousel](#Carousel)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.
<a name="ItemsSelection+selectedItem"></a>
### carousel.selectedItem : <code>object</code>
The currently selected item, or null if there is no selection.

Setting this property to null deselects any currently-selected item.

  **Kind**: instance property of <code>[Carousel](#Carousel)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.
<a name="ItemsSelection+selectionRequired"></a>
### carousel.selectionRequired : <code>boolean</code>
True if the list should always have a selection (if it has items).

  **Kind**: instance property of <code>[Carousel](#Carousel)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.
<a name="ItemsSelection+applySelection"></a>
### carousel.applySelection(item, selected)
Apply the indicate selection state to the item.

The default implementation of this method does nothing. User-visible
effects will typically be handled by other mixins.

  **Kind**: instance method of <code>[Carousel](#Carousel)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| item | <code>HTMLElement</code> | the item being selected/deselected |
| selected | <code>boolean</code> | true if the item is selected, false if not |

<a name="ItemsSelection+itemAdded"></a>
### carousel.itemAdded(item)
Handle a new item being added to the list.

The default implementation of this method simply sets the item's
selection state to false.

  **Kind**: instance method of <code>[Carousel](#Carousel)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| item | <code>HTMLElement</code> | the item being added |

<a name="ItemsSelection+selectFirst"></a>
### carousel.selectFirst()
Select the first item in the list.

  **Kind**: instance method of <code>[Carousel](#Carousel)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.
<a name="ItemsSelection+selectLast"></a>
### carousel.selectLast()
Select the last item in the list.

  **Kind**: instance method of <code>[Carousel](#Carousel)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.
<a name="ItemsSelection+selectNext"></a>
### carousel.selectNext()
Select the next item in the list.

  **Kind**: instance method of <code>[Carousel](#Carousel)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.
<a name="ItemsSelection+selectPrevious"></a>
### carousel.selectPrevious()
Select the previous item in the list.

  **Kind**: instance method of <code>[Carousel](#Carousel)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.
<a name="ItemsSelection.event_selected-item-changed"></a>
### "selected-item-changed"
Fires when the selectedItem property changes.

  **Kind**: event emitted by <code>[Carousel](#Carousel)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| detail.selectedItem | <code>HTMLElement</code> | The new selected item. |
| detail.previousItem | <code>HTMLElement</code> | The previously selected item. |

<a name="ItemsSelection.event_selected-index-changed"></a>
### "selected-index-changed"
Fires when the selectedIndex property changes.

  **Kind**: event emitted by <code>[Carousel](#Carousel)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| detail.selectedIndex | <code>number</code> | The new selected index. |

<a name="Keyboard+keydown"></a>
### carousel.keydown(event) ⇒ <code>boolean</code>
Handle the indicated keyboard event.

The default implementation of this method does nothing. This will
typically be handled by other mixins.

  **Kind**: instance method of <code>[Carousel](#Carousel)</code>. Defined by <code>[Keyboard](../basic-component-mixins/docs/Keyboard.md)</code> mixin.
**Returns**: <code>boolean</code> - true if the event was handled  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | the keyboard event |

<a name="KeyboardDirection+navigationAxis"></a>
### carousel.navigationAxis : <code>string</code>
Indicates the direction of permitted navigation with the keyboard.

Accepted values are "horizontal", "vertical", or "both" (the default).
If this property is "horizontal", the Up Arrow and Down Arrow keys will
be ignored. Conversely, if this is "vertical", the Left Arrow and Right
Arrow keys will be ignored.

  **Kind**: instance property of <code>[Carousel](#Carousel)</code>. Defined by <code>[KeyboardDirection](../basic-component-mixins/docs/KeyboardDirection.md)</code> mixin.
<a name="KeyboardDirection+goDown"></a>
### carousel.goDown()
Invoked when the user wants to go/navigate down.
The default implementation of this method does nothing.

  **Kind**: instance method of <code>[Carousel](#Carousel)</code>. Defined by <code>[KeyboardDirection](../basic-component-mixins/docs/KeyboardDirection.md)</code> mixin.
<a name="KeyboardDirection+goEnd"></a>
### carousel.goEnd()
Invoked when the user wants to go/navigate to the end (e.g., of a list).
The default implementation of this method does nothing.

  **Kind**: instance method of <code>[Carousel](#Carousel)</code>. Defined by <code>[KeyboardDirection](../basic-component-mixins/docs/KeyboardDirection.md)</code> mixin.
<a name="KeyboardDirection+goLeft"></a>
### carousel.goLeft()
Invoked when the user wants to go/navigate left.
The default implementation of this method does nothing.

  **Kind**: instance method of <code>[Carousel](#Carousel)</code>. Defined by <code>[KeyboardDirection](../basic-component-mixins/docs/KeyboardDirection.md)</code> mixin.
<a name="KeyboardDirection+goRight"></a>
### carousel.goRight()
Invoked when the user wants to go/navigate right.
The default implementation of this method does nothing.

  **Kind**: instance method of <code>[Carousel](#Carousel)</code>. Defined by <code>[KeyboardDirection](../basic-component-mixins/docs/KeyboardDirection.md)</code> mixin.
<a name="KeyboardDirection+goStart"></a>
### carousel.goStart()
Invoked when the user wants to go/navigate to the start (e.g., of a
list). The default implementation of this method does nothing.

  **Kind**: instance method of <code>[Carousel](#Carousel)</code>. Defined by <code>[KeyboardDirection](../basic-component-mixins/docs/KeyboardDirection.md)</code> mixin.
<a name="KeyboardDirection+goUp"></a>
### carousel.goUp()
Invoked when the user wants to go/navigate up.
The default implementation of this method does nothing.

  **Kind**: instance method of <code>[Carousel](#Carousel)</code>. Defined by <code>[KeyboardDirection](../basic-component-mixins/docs/KeyboardDirection.md)</code> mixin.
<a name="ObserveContentChanges+contentChanged"></a>
### carousel.contentChanged()
Invoked when the contents of the component (including distributed
children) have changed.

This method is also invoked when a component is first instantiated; the
contents have essentially "changed" from being nothing. This allows the
component to perform initial processing of its children.

  **Kind**: instance method of <code>[Carousel](#Carousel)</code>. Defined by <code>[ObserveContentChanges](../basic-component-mixins/docs/ObserveContentChanges.md)</code> mixin.
<a name="ObserveContentChanges.event_content-changed"></a>
### "content-changed"
This event is raised when the component's contents (including distributed
children) have changed.

  **Kind**: event emitted by <code>[Carousel](#Carousel)</code>. Defined by <code>[ObserveContentChanges](../basic-component-mixins/docs/ObserveContentChanges.md)</code> mixin.
<a name="SwipeDirection+position"></a>
### carousel.position : <code>number</code>
The distance the user has moved the first touchpoint since the beginning
of a drag, expressed as a fraction of the element's width.

  **Kind**: instance property of <code>[Carousel](#Carousel)</code>. Defined by <code>[SwipeDirection](../basic-component-mixins/docs/SwipeDirection.md)</code> mixin.
<a name="SwipeDirection+goLeft"></a>
### carousel.goLeft()
Invoked when the user wants to go/navigate left.
The default implementation of this method does nothing.

  **Kind**: instance method of <code>[Carousel](#Carousel)</code>. Defined by <code>[SwipeDirection](../basic-component-mixins/docs/SwipeDirection.md)</code> mixin.
<a name="SwipeDirection+goRight"></a>
### carousel.goRight()
Invoked when the user wants to go/navigate right.
The default implementation of this method does nothing.

  **Kind**: instance method of <code>[Carousel](#Carousel)</code>. Defined by <code>[SwipeDirection](../basic-component-mixins/docs/SwipeDirection.md)</code> mixin.
<a name="SwipeDirection+showTransition"></a>
### carousel.showTransition(value)
Determine whether a transition should be shown during a swipe.

Components like carousels often define animated CSS transitions for
sliding effects. Such a transition should usually *not* be applied while
the user is dragging, because a CSS animation will introduce a lag that
makes the swipe feel sluggish. Instead, as long as the user is dragging
with their finger down, the transition should be suppressed. When the
user releases their finger, the transition can be restored, allowing the
animation to show the carousel sliding into its final position.

  **Kind**: instance method of <code>[Carousel](#Carousel)</code>. Defined by <code>[SwipeDirection](../basic-component-mixins/docs/SwipeDirection.md)</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| value | <code>boolean</code> | true if a component-provided transition should be shown, false if not. |

<a name="TargetInCollective+target"></a>
### carousel.target : <code>HTMLElement</code>
Gets/sets the current target of the component.

Set this to point to another element. That target element will be
implicitly added to the component's collective. That is, the component
and its target will share responsibility for handling keyboard events.

You can set this property yourself, or you can use the
ContentFirstChildTarget mixin to automatically set the target to the
component's first child.

  **Kind**: instance property of <code>[Carousel](#Carousel)</code>. Defined by <code>[TargetInCollective](../basic-component-mixins/docs/TargetInCollective.md)</code> mixin.
<a name="TrackpadDirection+position"></a>
### carousel.position : <code>number</code>
The distance the user has moved the first touchpoint since the beginning
of a trackpad/wheel operation, expressed as a fraction of the element's
width.

  **Kind**: instance property of <code>[Carousel](#Carousel)</code>. Defined by <code>[TrackpadDirection](../basic-component-mixins/docs/TrackpadDirection.md)</code> mixin.
<a name="TrackpadDirection+goLeft"></a>
### carousel.goLeft()
Invoked when the user wants to go/navigate left.
The default implementation of this method does nothing.

  **Kind**: instance method of <code>[Carousel](#Carousel)</code>. Defined by <code>[TrackpadDirection](../basic-component-mixins/docs/TrackpadDirection.md)</code> mixin.
<a name="TrackpadDirection+goRight"></a>
### carousel.goRight()
Invoked when the user wants to go/navigate right.
The default implementation of this method does nothing.

  **Kind**: instance method of <code>[Carousel](#Carousel)</code>. Defined by <code>[TrackpadDirection](../basic-component-mixins/docs/TrackpadDirection.md)</code> mixin.
