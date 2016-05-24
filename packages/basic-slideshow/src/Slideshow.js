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

  attachedCallback() {
    if (super.attachedCallback) { super.attachedCallback(); }

    // Unless told not to start playing, play by default.
    if (this.playing == null) {
      this.play();
    }
  }

  createdCallback() {
    // Set defaults, taking precedence over defaults provided by super/mixins.
    if (this.selectionAnimationDuration == null) {
      this.selectionAnimationDuration = 500;
    }
    if (this.selectionAnimationEffect == null && this.selectionAnimationKeyframes == null) {
      this.selectionAnimationEffect = 'crossfade';
    }
    if (this.selectionRequired == null) {
      this.selectionRequired = true;
    }
    if (this.selectionTimerDuration == null) {
      this.selectionTimerDuration = 3000;
    }
    if (this.selectionWraps == null) {
      this.selectionWraps = true;
    }

    if (super.createdCallback) { super.createdCallback(); }
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
