import ElementBase from '../../basic-element-base/src/ElementBase';
import ContentItemsMixin from '../../basic-component-mixins/src/ContentItemsMixin';
import DistributedChildrenContentMixin from '../../basic-component-mixins/src/DistributedChildrenContentMixin';
import FractionalSelectionMixin from '../../basic-component-mixins/src/FractionalSelectionMixin';
import SelectionAnimationMixin from '../../basic-component-mixins/src/SelectionAnimationMixin';
import SelectionAriaActiveMixin from '../../basic-component-mixins/src/SelectionAriaActiveMixin';
import SingleSelectionMixin from '../../basic-component-mixins/src/SingleSelectionMixin';
import symbols from '../../basic-component-mixins/src/symbols';
import TimerSelectionMixin from '../../basic-component-mixins/src/TimerSelectionMixin';


const base = ElementBase.compose(
  ContentItemsMixin,
  DistributedChildrenContentMixin,
  FractionalSelectionMixin,
  SelectionAnimationMixin,
  SelectionAriaActiveMixin,
  SingleSelectionMixin,
  TimerSelectionMixin
);


/**
 * Slideshow with animated transitions.
 *
 * By default the slideshow will immediately begin playing when it is connected
 * to the document, advance every 3000 ms (3 seconds), and use a simple
 * crossfade effect.
 *
 * This component can be used on its own. To incorporate slideshow behavior into
 * a component of your own, apply the
 * [TimerSelectionMixin](../basic-component-mixins/docs/TimerSelectionMixin.md).
 *
 * @extends ElementBase
 * @mixes ContentItemsMixin
 * @mixes DistributedChildrenContentMixin
 * @mixes FractionalSelectionMixin
 * @mixes SelectionAnimationMixin
 * @mixes SelectionAriaActiveMixin
 * @mixes SingleSelectionMixin
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

  get template() {
    return `
      <style>
      :host {
        display: -webkit-flex;
        display: flex;
        overflow: hidden;
        position: relative;
      }

      #container ::slotted(*) {
        height: 100%;
        object-fit: contain;
        position: absolute;
        width: 100%;
        will-change: transform;
      }
      </style>

      <div id="container" role="none">
        <slot></slot>
      </div>
    `;
  }

}


customElements.define('basic-slideshow', Slideshow);
export default Slideshow;
