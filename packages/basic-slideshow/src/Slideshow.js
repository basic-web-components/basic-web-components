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
 * By default the slideshow advances every 3000 ms (3 seconds). You can adjust
 * this time by setting `selectionTimerDuration` to the desired time in
 * milliseconds.
 *
 * @extends ElementBase
 */
class Slideshow extends base {

  createdCallback() {
    if (super.createdCallback) { super.createdCallback(); }
    this.selectionAnimationDuration = 500;
    this.selectionAnimationKeyframes = SelectionAnimation.standardEffectKeyframes.fade;
    this.selectionRequired = true;
    this.selectionTimerDuration = 3000;
    this.selectionWraps = true;
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
