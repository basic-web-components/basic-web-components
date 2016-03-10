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
**Mixes**: <code>ContentAsItems</code>, <code>DirectionSelection</code>, <code>DistributedChildrenAsContent</code>, <code>Generic</code>, <code>ItemsSelection</code>, <code>Keyboard</code>, <code>KeyboardDirection</code>, <code>ObserveContentChanges</code>, <code>SelectionAriaActive</code>, <code>SwipeDirection</code>, <code>TargetInCollective</code>, <code>TrackpadDirection</code>  
