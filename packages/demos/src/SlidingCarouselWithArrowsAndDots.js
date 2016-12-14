import ArrowSelectionMixin from '../../basic-component-mixins/src/ArrowSelectionMixin';
import SlidingCarousel from '../../basic-sliding-carousel/src/SlidingCarousel';
import PageDotsMixin from '../../basic-component-mixins/src/PageDotsMixin';

class SlidingCarouselWithArrowsAndDots extends SlidingCarousel.compose(
  ArrowSelectionMixin,
  PageDotsMixin
) {}

customElements.define('sliding-carousel-with-arrows-and-dots', SlidingCarouselWithArrowsAndDots);
export default SlidingCarouselWithArrowsAndDots;
