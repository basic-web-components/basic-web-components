import ArrowSelectionMixin from '../../basic-component-mixins/src/ArrowSelectionMixin';
import Carousel from '../../basic-carousel/src/Carousel';
import PageDotsMixin from '../../basic-component-mixins/src/PageDotsMixin';

class CarouselWithArrows extends Carousel.compose(
  ArrowSelectionMixin,
  PageDotsMixin
) {}
customElements.define('carousel-with-arrows-and-dots', CarouselWithArrows);

export default CarouselWithArrows;
