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
    // Standard carousel animation
    // return [
    //   { transform: 'translateX(100%)' },
    //   { transform: 'translateX(-100%)' }
    // ];
    // Carousel variant with a bit of off stage elements showing
    return [
      { transform: 'translateX(78%) scale(0.7)', zIndex: 0 },
      { transform: 'translateX(0%) scale(0.82)', zIndex: 1 },
      { transform: 'translateX(-78%) scale(0.7)', zIndex: 0 }
    ];
    // Google Photos-style animation
    // return [
    //   { transform: 'translateX(0%) scale(0.75)', opacity: 0, zIndex: -1 },
    //   { transform: 'translateX(0%) scale(1.0)', opacity: 1, zIndex: 1 },
    //   { transform: 'translateX(-100%) scale(1.0)', opacity: 1, zIndex: -1 }
    // ];
  }

  get animationDuration() {
    return 1000; // 250;
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

    // Figure out which direction we're going and how many steps that will take.
    // To go from item 3 to item 4 is 1 step.
    fromIndex = fromIndex >= 0 ? fromIndex : toIndex;
    let items = this.items;
    let itemCount = items.length;
    let forward = toIndex > fromIndex;
    let steps = Math.abs(toIndex - fromIndex);
    // let wrapSteps = itemCount - steps;
    // if (this.selectionWraps && wrapSteps < steps) {
    //   // Takes fewer steps to get there if we wrap around the other direction.
    //   steps = wrapSteps;
    //   forward = !forward;
    // }
    let wrapSteps = itemCount - steps;
    if (this.selectionWraps && wrapSteps === 1) {
      // Special case: wrap from first to last item or vice versa.
      steps = wrapSteps;
      forward = !forward;
    }

    // We'll need to animate one more item than the number of steps we take.
    // That is, to go 1 step, we're animating 2 items: the one leaving, and the
    // one entering.
    let animateCount = steps + 1;

    let animation = forward ? this.animationForward : this.animationBackward;
    let indexStep = forward ? 1 : -1;
    let duration = this.animationDuration / animateCount;

    let index = fromIndex;
    for (let i = 0; i < animateCount; i++) {
      let delay = (i - 1) * duration/2;
      let endDelay = index === toIndex ?
        -duration/2 :   // Stop halfway through.
        0;              // Play full animation.
      this.animateItem(items[index], animation, duration, delay, endDelay);
      index += indexStep;
      // Ensure we stay in bounds, handling possibility of negative mod.
      // See http://stackoverflow.com/a/18618250/76472
      index = ((index % itemCount) + itemCount) % itemCount;
    }
  }

  attachedCallback() {
    if (super.attachedCallback) { super.attachedCallback(); }
    this.selectionWraps = true;
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
