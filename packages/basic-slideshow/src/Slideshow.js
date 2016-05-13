import ElementBase from '../../basic-element-base/src/ElementBase';
import ContentAsItems from '../../basic-component-mixins/src/ContentAsItems';
import DistributedChildrenAsContent from '../../basic-component-mixins/src/DistributedChildrenAsContent';
import ItemsSelection from '../../basic-component-mixins/src/ItemsSelection';
import ObserveContentChanges from '../../basic-component-mixins/src/ObserveContentChanges';
import SelectionAnimation from '../../basic-component-mixins/src/SelectionAnimation';
import SelectionAriaActive from '../../basic-component-mixins/src/SelectionAriaActive';
import TimerSelection from '../../basic-component-mixins/src/TimerSelection';

// import createSymbol from '../../basic-component-mixins/src/createSymbol';


let base = ElementBase.compose(
  ContentAsItems,
  DistributedChildrenAsContent,
  ItemsSelection,
  ObserveContentChanges,
  SelectionAnimation,
  SelectionAriaActive,
  TimerSelection
);

/**
 * Slideshow with animated transitions.
 *
 * @extends ElementBase
 */
class Slideshow extends base {

  createdCallback() {
    if (super.createdCallback) { super.createdCallback(); }
    this.selectionAnimationDuration = 500;
    this.selectionAnimationKeyframes = SelectionAnimation.standardEffectKeyframes.fade;
    this.selectionRequired = true;
    this.selectionWraps = true;
  }

  // get selectionAnimationDuration() {
  //   return super.selectionAnimationDuration || 500;
  // }
  // set selectionAnimationDuration(value) {
  //   if ('selectionAnimationDuration' in base.prototype) { super.selectionAnimationDuration = value; }
  // }
  //
  // get selectionAnimationKeyframes() {
  //   return super.selectionAnimationKeyframes || SelectionAnimation.standardEffectKeyframes.fade;
  // }
  // set selectionAnimationKeyframes(value) {
  //   if ('selectionAnimationKeyframes' in super.prototype) { super.selectionAnimationKeyframes = value; }
  // }
  //
  // get selectionRequired() {
  //   return super.selectionRequired || true;
  // }
  // set selectionRequired(value) {
  //   if ('selectionRequired' in base.prototype) { super.selectionRequired = value; }
  // }
  //
  // get selectionWraps() {
  //   return super.selectionWraps || true;
  // }
  // set selectionWraps(value) {
  //   if ('selectionWraps' in base.prototype) { super.selectionWraps = value; }
  // }

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
