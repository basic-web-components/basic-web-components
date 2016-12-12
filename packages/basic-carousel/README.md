# API Documentation
<a name="Carousel"></a>

## Carousel
Lets the user navigate laterally through a sequence of child elements.

basic-carousel is an implementation of the carousel user interface pattern,
commonly used for navigating between images, pages, and other elements. This
pattern presents the user with a linear sequence of elements, only one of
which is shown at a time. The user can navigate to the next/previous element
with a variety of input methods.

[Live demo](http://basicwebcomponents.org/basic-web-components/packages/basic-carousel/)

The above demo adds the optional
[basic-arrow-selection](../basic-arrow-selection) and
[basic-page-dots](../basic-page-dots) components. You can also view a
[plain demo](http://basicwebcomponents.org/basic-web-components/packages/basic-carousel/plain.html)
demo.

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

* KeyboardMixin. When the carousel has focus, the user can press Left, Right,
  Home, or End. These navigate to the expected element.
* Touch. On mobile and other touch-enabled devices, the user can drag left or
  right.
* Trackpad. The user can swipe left or right on a trackpad to navigate.

Because carousels are used in a wide variety of circumstances, by default
basic-carousel provides a minimal appearance and no separately interactive
elements such as arrow buttons on the side or dots along the bottom. Those
elements can be added by wrapping a basic-carousel in optional accessories:

* [basic-arrow-selection](../basic-arrow-selection).
  This adds prominent left and right arrow buttons on the side of the carousel.
* [basic-page-dots](../basic-page-dots).
  This adds a series of small dots below the carousel to indicate the user's
  current position in the sequence.
* [basic-slideshow-timer](../basic-slideshow-timer).
  Advances to the next item on a timer.
* [basic-tab-strip](../basic-tab-strip).
  Adds a strip of traditional tab buttons.

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
**Mixes**: <code>[DirectionSelectionMixin](../basic-component-mixins/docs/DirectionSelectionMixin.md)</code>
  , <code>[GenericMixin](../basic-component-mixins/docs/GenericMixin.md)</code>
  , <code>[KeyboardMixin](../basic-component-mixins/docs/KeyboardMixin.md)</code>
  , <code>[KeyboardDirectionMixin](../basic-component-mixins/docs/KeyboardDirectionMixin.md)</code>
  , <code>[SwipeDirectionMixin](../basic-component-mixins/docs/SwipeDirectionMixin.md)</code>
  , <code>[TrackpadDirectionMixin](../basic-component-mixins/docs/TrackpadDirectionMixin.md)</code>
  

* [Carousel](#Carousel)
    * [.generic](#Generic+generic) : <code>Boolean</code>
    * [.goDown()](#KeyboardDirection+symbols.goDown)
    * [.goEnd()](#KeyboardDirection+symbols.goEnd)
    * [.goLeft()](#TrackpadDirection+symbols.goLeft)
    * [.goLeft()](#KeyboardDirection+symbols.goLeft)
    * [.goLeft()](#SwipeDirection+symbols.goLeft)
    * [.goRight()](#KeyboardDirection+symbols.goRight)
    * [.goRight()](#SwipeDirection+symbols.goRight)
    * [.goRight()](#TrackpadDirection+symbols.goRight)
    * [.goStart()](#KeyboardDirection+symbols.goStart)
    * [.goUp()](#KeyboardDirection+symbols.goUp)
    * [.keydown(event)](#Keyboard+symbols.keydown) ⇒ <code>boolean</code>
    * [.navigationAxis](#KeyboardDirection+navigationAxis) : <code>string</code>
    * [.travelFraction](#SwipeDirection+travelFraction) : <code>number</code>
    * [.travelFraction](#TrackpadDirection+travelFraction) : <code>number</code>

<a name="Generic+generic"></a>

### carousel.generic : <code>Boolean</code>
True if the component would like to receive generic styling.

This property is true by default — set it to false to turn off all
generic styles. This makes it easier to apply custom styling; you won't
have to explicitly override styling you don't want.

  **Kind**: instance property of <code>[Carousel](#Carousel)</code>. Defined by <code>[Generic](../basic-component-mixins/docs/Generic.md)</code> mixin.
**Default**: <code>true</code>  
<a name="KeyboardDirection+symbols.goDown"></a>

### Carousel.goDown()
Invoked when the user wants to go/navigate down.
The default implementation of this method does nothing.

  **Kind**: static method of <code>[Carousel](#Carousel)</code>. Defined by <code>[KeyboardDirection#symbols](../basic-component-mixins/docs/KeyboardDirection#symbols.md)</code> mixin.
<a name="KeyboardDirection+symbols.goEnd"></a>

### Carousel.goEnd()
Invoked when the user wants to go/navigate to the end (e.g., of a list).
The default implementation of this method does nothing.

  **Kind**: static method of <code>[Carousel](#Carousel)</code>. Defined by <code>[KeyboardDirection#symbols](../basic-component-mixins/docs/KeyboardDirection#symbols.md)</code> mixin.
<a name="TrackpadDirection+symbols.goLeft"></a>

### Carousel.goLeft()
Invoked when the user wants to go/navigate left.
The default implementation of this method does nothing.

  **Kind**: static method of <code>[Carousel](#Carousel)</code>. Defined by <code>[TrackpadDirection#symbols](../basic-component-mixins/docs/TrackpadDirection#symbols.md)</code> mixin.
<a name="KeyboardDirection+symbols.goLeft"></a>

### Carousel.goLeft()
Invoked when the user wants to go/navigate left.
The default implementation of this method does nothing.

  **Kind**: static method of <code>[Carousel](#Carousel)</code>. Defined by <code>[KeyboardDirection#symbols](../basic-component-mixins/docs/KeyboardDirection#symbols.md)</code> mixin.
<a name="SwipeDirection+symbols.goLeft"></a>

### Carousel.goLeft()
Invoked when the user wants to go/navigate left.
The default implementation of this method does nothing.

  **Kind**: static method of <code>[Carousel](#Carousel)</code>. Defined by <code>[SwipeDirection#symbols](../basic-component-mixins/docs/SwipeDirection#symbols.md)</code> mixin.
<a name="KeyboardDirection+symbols.goRight"></a>

### Carousel.goRight()
Invoked when the user wants to go/navigate right.
The default implementation of this method does nothing.

  **Kind**: static method of <code>[Carousel](#Carousel)</code>. Defined by <code>[KeyboardDirection#symbols](../basic-component-mixins/docs/KeyboardDirection#symbols.md)</code> mixin.
<a name="SwipeDirection+symbols.goRight"></a>

### Carousel.goRight()
Invoked when the user wants to go/navigate right.
The default implementation of this method does nothing.

  **Kind**: static method of <code>[Carousel](#Carousel)</code>. Defined by <code>[SwipeDirection#symbols](../basic-component-mixins/docs/SwipeDirection#symbols.md)</code> mixin.
<a name="TrackpadDirection+symbols.goRight"></a>

### Carousel.goRight()
Invoked when the user wants to go/navigate right.
The default implementation of this method does nothing.

  **Kind**: static method of <code>[Carousel](#Carousel)</code>. Defined by <code>[TrackpadDirection#symbols](../basic-component-mixins/docs/TrackpadDirection#symbols.md)</code> mixin.
<a name="KeyboardDirection+symbols.goStart"></a>

### Carousel.goStart()
Invoked when the user wants to go/navigate to the start (e.g., of a
list). The default implementation of this method does nothing.

  **Kind**: static method of <code>[Carousel](#Carousel)</code>. Defined by <code>[KeyboardDirection#symbols](../basic-component-mixins/docs/KeyboardDirection#symbols.md)</code> mixin.
<a name="KeyboardDirection+symbols.goUp"></a>

### Carousel.goUp()
Invoked when the user wants to go/navigate up.
The default implementation of this method does nothing.

  **Kind**: static method of <code>[Carousel](#Carousel)</code>. Defined by <code>[KeyboardDirection#symbols](../basic-component-mixins/docs/KeyboardDirection#symbols.md)</code> mixin.
<a name="Keyboard+symbols.keydown"></a>

### Carousel.keydown(event) ⇒ <code>boolean</code>
Handle the indicated keyboard event.

The default implementation of this method does nothing. This will
typically be handled by other mixins.

  **Kind**: static method of <code>[Carousel](#Carousel)</code>. Defined by <code>[Keyboard#symbols](../basic-component-mixins/docs/Keyboard#symbols.md)</code> mixin.
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
<a name="SwipeDirection+travelFraction"></a>

### carousel.travelFraction : <code>number</code>
The distance the first touchpoint has traveled since the beginning of a
drag, expressed as a fraction of the element's width.

  **Kind**: instance property of <code>[Carousel](#Carousel)</code>. Defined by <code>[SwipeDirection](../basic-component-mixins/docs/SwipeDirection.md)</code> mixin.
<a name="TrackpadDirection+travelFraction"></a>

### carousel.travelFraction : <code>number</code>
The distance the user has moved the first touchpoint since the beginning
of a trackpad/wheel operation, expressed as a fraction of the element's
width.

  **Kind**: instance property of <code>[Carousel](#Carousel)</code>. Defined by <code>[TrackpadDirection](../basic-component-mixins/docs/TrackpadDirection.md)</code> mixin.
