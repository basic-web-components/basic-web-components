import Slideshow from '../../basic-slideshow/src/Slideshow';
import PlayControlsMixin from '../../basic-component-mixins/src/PlayControlsMixin';

class SlideshowWithControls extends PlayControlsMixin(Slideshow) {}
customElements.define('basic-slideshow-with-controls', SlideshowWithControls);

export default SlideshowWithControls;
