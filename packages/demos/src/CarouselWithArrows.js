import ArrowSelectionMixin from '../../basic-component-mixins/src/ArrowSelectionMixin';
import Carousel from '../../basic-carousel/src/Carousel';

class CarouselWithArrows extends ArrowSelectionMixin(Carousel) {}
customElements.define('carousel-with-arrows', CarouselWithArrows);

export default CarouselWithArrows;
