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

  /**
   * The animation that plays for an item when moving backward in the sequence.
   *
   * See the `animationForward` property for details.
   *
   * If no `animationBackward` property is defined, this animation will default
   * to the reverse of the `animationForward` animation.
   *
   * @type {cssRules[]}
   */
  get animationBackward() {
    return this._animationBackward || this.animationForward.slice().reverse();
  }
  set animationBackward(animation) {
    this._animationBackward = animation;
    initialPositions(this);
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
    return this._animationForward || [
      { transform: 'translateX(100%)' },
      { transform: 'translateX(-100%)' }
    ];
  }
  set animationForward(animation) {
    this._animationForward = animation;
    initialPositions(this);
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
    initialPositions(this);
  }

  test(time) {
    applyAnimationFrame(this.animationForward, this.animationDuration, this.items[0], time);
  }

}


// Give items their initial position
function initialPositions(element) {
  // We play the animation with the delay and endDelay set so that only a single
  // frame of the animation will play;
  let animation = element.animationForward;
  let duration = element.animationDuration;
  let selectedIndex = element.selectedIndex;
  element.items.forEach((item, index) => {
    let fraction = index === selectedIndex ?
      0.5 :   // Selected item shown halfway through animation: center stage.
      index > selectedIndex ?
        0:    // Offstage next
        1;    // Offstage previous
    let time = fraction*duration;
    applyAnimationFrame(animation, duration, item, time);
  });
}

// Apply the animation to the item at the indicated time.
function applyAnimationFrame(animation, duration, item, time) {
  let delay = -time;
  let endDelay = -(duration - time);
  item.animate(animation, {
    duration: duration,
    delay: delay,
    endDelay: endDelay,
    fill: 'both'
  });
}


document.registerElement('basic-animation-stage', AnimationStage);
