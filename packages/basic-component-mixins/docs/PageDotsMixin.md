# API Documentation
<a name="PageDots"></a>

## PageDots
Template mixin which adds small dots to show the number of items and let
the user select a specific item.

You can see a
[live demo](http://basicwebcomponents.org/basic-web-components/packages/demos/carousel-with-dots.html)
of this mixin applied to a carousel.

There will be one dot for each item, and the dot for the currently selected
item will be shown selected.

Typical usage:

    class CarouselWithDots extends PageDotsMixin(Carousel) {}
    customElements.define('carousel-with-dots', CarouselWithDots);

Although the dots are quite small by default, clicking/tapping a dot will
will select the corresponding list item.

  **Kind**: global class
<a name="PageDots+selectedFraction"></a>

### pageDots.selectedFraction : <code>number</code>
The distance the user has moved the first touchpoint since the beginning
of a drag, expressed as a fraction of the element's width.

  **Kind**: instance property of <code>[PageDots](#PageDots)</code>
