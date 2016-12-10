# API Documentation
<a name="ArrowSelection"></a>

## ArrowSelection
Template mixin which adds prominent left and right arrow buttons to a
wrapped child such as a carousel.

You can see a [live demo](http://basicwebcomponents.org/basic-web-components/packages/basic-arrow-selection.html)
of this component applied to a carousel.

Clicking the left/right buttons selects the previous/next item.

Typical usage:

    class CarouselWithArrows extends ArrowSelectionMixin(Carousel) {}
    customElements.define('carousel-with-arrows', CarouselWithArrows);

By default, the arrow buttons are shown on devices with a mouse or mouse-like
pointing device. They are not shown on a touch-capable device unless mouse
movement is detected. To cause the buttons to always appear, apply the
'showArrows' CSS class.

  **Kind**: global class
