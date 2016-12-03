import Carousel from '../../basic-carousel/src/Carousel';
import PageDotsMixin from './PageDotsMixin.js';


class CarouselWithDots extends PageDotsMixin(Carousel) {
}


customElements.define('carousel-with-dots', CarouselWithDots);
