import Slideshow from '../../basic-slideshow/src/Slideshow';
import PlayControlsMixin from '../../basic-component-mixins/src/PlayControlsMixin';

/**
 * SlideshowWithControls
 *
 * An extension of Slideshow with the addition of play controls.
 *
 * @extends Slideshow
 * @mixes PlayControlsMixin
 */
class SlideshowWithControls extends PlayControlsMixin(Slideshow) {}
customElements.define('basic-slideshow-with-controls', SlideshowWithControls);

export default SlideshowWithControls;
