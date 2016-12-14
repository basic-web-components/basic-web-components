import HorizontalNavigationMixin from '../../basic-component-mixins/src/HorizontalNavigationMixin';
import SlidingViewport from '../../basic-sliding-viewport/src/SlidingViewport';


/**
 * Lets the user navigate laterally through a sequence of child elements
 * using a simple CSS transition effect to show horizontal movement.
 *
 * [Live demo](http://basicwebcomponents.org/basic-web-components/packages/basic-sliding-carousel/)
 *
 * basic-sliding-carousel is an implementation of the carousel user interface
 * pattern, commonly used for navigating between images, pages, and other
 * elements. This pattern presents the user with a linear sequence of elements,
 * only one of which is shown at a time. The user can navigate to the
 * next/previous element with a variety of input methods.
 *
 * basic-sliding-carousel is a simpler variation of the more sophisticated
 * [basic-carousel](../basic-carousel) component. The latter includes support
 * for wrapping (going forward from the last item to the first, and vice versa),
 * and more complex visual transitions. Those transitions entail use of the Web
 * Animation API, which requires a polyfill in older browsers. Hence, the
 * simpler basic-sliding-carousel may be a more appropriate choice if factors
 * such as download size are critical.
 *
 * Beyond those differences, basic-sliding-carousel offers the same API, usage
 * recommendations, and support for keyboard/touch/mouse and assistive devices.
 * See that component for more details on use.
 *
 * @extends SlidingViewport
 * @mixes HorizontalNavigationMixin
 */
class SlidingCarousel extends SlidingViewport.compose(
  HorizontalNavigationMixin
) {}


customElements.define('basic-sliding-carousel', SlidingCarousel);
export default SlidingCarousel;
