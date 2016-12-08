import Carousel from '../../basic-carousel/src/Carousel';
import PageDotsMixin from '../../basic-component-mixins/src/PageDotsMixin';

class CarouselWithDots extends PageDotsMixin(Carousel) {}
customElements.define('carousel-with-dots', CarouselWithDots);

export default CarouselWithDots;
