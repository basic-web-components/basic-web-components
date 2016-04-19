import ElementBase from '../../basic-element-base/src/ElementBase';
import ContentAsItems from '../../basic-component-mixins/src/ContentAsItems';
import DirectionSelection from '../../basic-component-mixins/src/DirectionSelection';
import DistributedChildrenAsContent from '../../basic-component-mixins/src/DistributedChildrenAsContent';
import ItemsSelection from '../../basic-component-mixins/src/ItemsSelection';
import ObserveContentChanges from '../../basic-component-mixins/src/ObserveContentChanges';
import SelectionAnimation from '../../basic-component-mixins/src/SelectionAnimation';
import SelectionAriaActive from '../../basic-component-mixins/src/SelectionAriaActive';
import SwipeDirection from '../../basic-component-mixins/src/SwipeDirection';


let base = ElementBase.compose(
  ContentAsItems,
  DirectionSelection,
  DistributedChildrenAsContent,
  ItemsSelection,
  ObserveContentChanges,
  SelectionAnimation,
  SelectionAriaActive,
  SwipeDirection
);

/**
 * Shows animated transitions entering and leaving the viewport.
 *
 * @extends ElementBase
 */
class AnimationStage extends base {

  get animationDuration() {
    return 1000; // 500;
  }

  /**
   * The animation that plays for an item when moving forward in the sequence.
   *
   * This is an array of CSS rules that will be applied. The format is the same
   * as that for the
   * [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/animation).
   *
   * The animation represents the state of the next item as it moves from
   * completely unselected (off stage, usually right), to selected (center
   * stage), to completely unselected (off stage, usually left). The center time
   * of the animation should correspond to the item's quiscent selected state,
   * typically in the center of the stage and at the item's largest size.
   *
   * The default forward animation is a smooth slide at full size from right to
   * left.
   *
   * @type {cssRules[]}
   */
  get animationForward() {
    // Standard animation slides left/right, keeps adjacent items out of view.
    return super.animationForward || [
      { transform: 'translateX(100%)' },
      { transform: 'translateX(-100%)' }
    ];
  }
  set animationForward(animation) {
    if ('animationForward' in base.prototype) { super.animationForward = animation; }
  }

  attachedCallback() {
    if (super.attachedCallback) { super.attachedCallback(); }
    this.selectionWraps = true;
    this.selectionRequired = true;
  }

}


document.registerElement('basic-animation-stage', AnimationStage);
