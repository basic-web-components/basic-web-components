import ElementBase from '../../basic-element-base/src/ElementBase';
import ContentAsItems from '../../basic-component-mixins/src/ContentAsItems';
import DirectionSelection from '../../basic-component-mixins/src/DirectionSelection';
import DistributedChildrenAsContent from '../../basic-component-mixins/src/DistributedChildrenAsContent';
import ItemsSelection from '../../basic-component-mixins/src/ItemsSelection';
import ObserveContentChanges from '../../basic-component-mixins/src/ObserveContentChanges';
import SelectionAnimation from '../../basic-component-mixins/src/SelectionAnimation';
import SelectionAriaActive from '../../basic-component-mixins/src/SelectionAriaActive';


let base = ElementBase.compose(
  ContentAsItems,
  DirectionSelection,
  DistributedChildrenAsContent,
  ItemsSelection,
  ObserveContentChanges,
  SelectionAnimation,
  SelectionAriaActive
);

/**
 * Shows animated transitions entering and leaving the viewport.
 *
 * @extends ElementBase
 */
class AnimationStage extends base {

  // Default plays forward animation in reverse.
  get animationBackward() {
    return this.animationForward.slice().reverse();
  }

  get animationForward() {
    return [
      { transform: 'translateX(100%)' },
      // { transform: 'translateX(0)' },
      { transform: 'translateX(-100%)' }
    ];
  }

  get animationDuration() {
    return 500;
  }

  animateItem(item, animation, duration, delay, endDelay) {
    let animationOptions = {
      delay: delay,
      endDelay: endDelay || 0,
      duration: duration,
      fill: 'both'
    };
    item.animate(animation, animationOptions);
  }

  animateSelection(fromIndex, toIndex) {
    let forward = fromIndex == null || toIndex > fromIndex;
    let animation = forward ? this.animationForward : this.animationBackward;
    fromIndex = fromIndex >= 0 ? fromIndex : toIndex;
    let items = this.items;
    // Stupid Edge/IE doesn't support Math.sign. Sheesh.
    let indexStep = (toIndex - fromIndex > 0) ? 1 : -1;
    let count = Math.abs(toIndex - fromIndex) + 1;
    let duration = this.animationDuration / (count + 1);
    let index = fromIndex;
    for (let i = 0; i < count; i++) {
      let delay = (i - 1) * duration/2;
      let endDelay = index === toIndex ?
        -duration/2 :   // Stop halfway through.
        0;              // Play full animation.
      this.animateItem(items[index], animation, duration, delay, endDelay);
      index += indexStep;
    }
  }

  attachedCallback() {
    if (super.attachedCallback) { super.attachedCallback(); }
    this.selectionRequired = true;
  }

  itemsChanged() {
    if (super.itemsChanged) { super.itemsChanged(); }
    // Give items their initial position
    // We do this by playing the animation with the delay and endDelay equal.
    // This has the effect of placing them instantenously at a specific point in
    // the animation.
    let animation = this.animationBackward;
    let duration = this.animationDuration;
    let selectedItem = this.selectedItem;
    this.items.forEach(item => {
      let fraction = item === selectedItem ?
        0.5 :   // Selected item shown halfway through animation: center stage.
        1;      // Other items shown all the way backward, waiting to enter.
      let delay = -fraction*duration;
      item.animate(animation, {
        duration: duration,
        delay: delay,
        endDelay: delay,
        fill: 'both'
      });
    });
  }

}


document.registerElement('basic-animation-stage', AnimationStage);
