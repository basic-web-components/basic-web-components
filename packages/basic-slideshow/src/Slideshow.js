import AnimationStage from '../../basic-animation-stage/src/AnimationStage';
import symbols from '../../basic-component-mixins/src/symbols';
import TimerSelectionMixin from '../../basic-component-mixins/src/TimerSelectionMixin';


const base = AnimationStage.compose(
  TimerSelectionMixin
);


/**
 * Slideshow with animated transitions.
 *
 * [Live demo](http://basicwebcomponents.org/basic-web-components/packages/basic-slideshow/)
 *
 * By default the slideshow will immediately begin playing when it is connected
 * to the document, advance every 3000 ms (3 seconds), and use a simple
 * crossfade effect. For a variation with play controls, see
 * [basic-slideshow-with-controls](../basic-slideshow-with-controls).
 *
 * This component can be used on its own. To incorporate slideshow behavior into
 * a component of your own, apply the
 * [TimerSelectionMixin](../basic-component-mixins/docs/TimerSelectionMixin.md).
 *
 * @extends AnimationStage
 * @mixes TimerSelectionMixin
 */
class Slideshow extends base {

  get [symbols.defaults]() {
    const defaults = super[symbols.defaults] || {};
    defaults.playing = true;
    defaults.selectionAnimationDuration = 500;
    defaults.selectionAnimationEffect = 'crossfade';
    defaults.selectionRequired = true;
    defaults.selectionTimerDuration = 3000;
    defaults.selectionWraps = true;
    return defaults;
  }

}


customElements.define('basic-slideshow', Slideshow);
export default Slideshow;
