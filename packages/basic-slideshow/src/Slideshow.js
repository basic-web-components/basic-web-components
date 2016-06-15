import ElementBase from '../../basic-element-base/src/ElementBase';
import ContentAsItems from '../../basic-component-mixins/src/ContentAsItems';
import DistributedChildrenAsContent from '../../basic-component-mixins/src/DistributedChildrenAsContent';
import FractionalSelection from '../../basic-component-mixins/src/FractionalSelection';
import ItemsSelection from '../../basic-component-mixins/src/ItemsSelection';
import ObserveContentChanges from '../../basic-component-mixins/src/ObserveContentChanges';
import SelectionAnimation from '../../basic-component-mixins/src/SelectionAnimation';
import SelectionAriaActive from '../../basic-component-mixins/src/SelectionAriaActive';
import TimerSelection from '../../basic-component-mixins/src/TimerSelection';


let base = ElementBase.compose(
  ContentAsItems,
  DistributedChildrenAsContent,
  FractionalSelection,
  ItemsSelection,
  ObserveContentChanges,
  SelectionAnimation,
  SelectionAriaActive,
  TimerSelection
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
 * [TimerSelection](../basic-component-mixins/docs/TimerSelection.md) mixin. To
 * add slideshow functionality to a component such as a carousel, wrap it with
 * the auxiliary [basic-slideshow-timer](../basic-slideshow-timer) component.
 *
 * @extends ElementBase
 * @mixes ContentAsItems
 * @mixes DistributedChildrenAsContent
 * @mixes FractionalSelection
 * @mixes ItemsSelection
 * @mixes ObserveContentChanges
 * @mixes SelectionAnimation
 * @mixes SelectionAriaActive
 * @mixes TimerSelection
 */
class Slideshow extends base {

  get defaults() {
    let defaults = super.defaults || {};
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

      #container ::content > * {
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


document.registerElement('basic-slideshow', Slideshow);
