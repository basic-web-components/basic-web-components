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
 * @extends ElementBase
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
        position: relative;
      }
      </style>
      <slot></slot>
    `;
  }

}


document.registerElement('basic-slideshow', Slideshow);
