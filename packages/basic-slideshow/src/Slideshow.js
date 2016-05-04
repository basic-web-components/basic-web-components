import ElementBase from '../../basic-element-base/src/ElementBase';
import ContentAsItems from '../../basic-component-mixins/src/ContentAsItems';
import DistributedChildrenAsContent from '../../basic-component-mixins/src/DistributedChildrenAsContent';
import ItemsSelection from '../../basic-component-mixins/src/ItemsSelection';
import ObserveContentChanges from '../../basic-component-mixins/src/ObserveContentChanges';
import SelectionAnimation from '../../basic-component-mixins/src/SelectionAnimation';
import SelectionAriaActive from '../../basic-component-mixins/src/SelectionAriaActive';
import TimerSelection from '../../basic-component-mixins/src/TimerSelection';


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

  get selectionAnimationDuration() {
    return 500;
  }

  get selectionAnimationKeyframes() {
    return [
      { opacity: 0 },
      { opacity: 1 },
      { opacity: 0 }
    ];
  }

  get selectionRequired() {
    return true;
  }

  get selectionWraps() {
    return super.selectionWraps || true;
  }
  set selectionWraps(value) {
    if ('selectionWraps' in base.prototype) { super.selectionWraps = value; }
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
