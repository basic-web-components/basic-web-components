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

  get animations() {
    let forward = {
      cross: [
        { transform: 'translateX(100%)' },
        { transform: 'translateX(0)' },
        { transform: 'translateX(-100%)' }
      ],
      enter: [
        { transform: 'translateX(100%)' },
        { transform: 'translateX(0)' },
      ],
      exit: [
        { transform: 'translateX(0)' },
        { transform: 'translateX(-100%)' }
      ]
    };
    let backward = {
      cross: forward.cross.slice().reverse(),
      enter: forward.exit.slice().reverse(),
      exit: forward.enter.slice().reverse()
    };
    return { forward, backward };
  }

  get animationDuration() {
    return 200;
  }

  animateItem(item, animation, delay, animationDuration) {
    let duration = (animation.length - 1) * animationDuration;
    let animationOptions = {
      delay: delay,
      duration: duration,
      // easing: 'ease-in-out',
      fill: 'both'
    };
    item.animate(animation, animationOptions);
  }

  animateSelection(fromIndex, toIndex) {
    let forward = fromIndex == null || toIndex > fromIndex;
    let animations = this.animations[forward ? 'forward' : 'backward'];
    let duration = this.animationDuration;
    fromIndex = fromIndex >= 0 ? fromIndex : toIndex;
    let items = this.items;
    let intermediaryCount = 0;
    if (fromIndex >= 0) {
      intermediaryCount = fromIndex === toIndex ?
        0 :
        Math.abs(toIndex - fromIndex) - 1;
      let intermediaryStep = Math.sign(toIndex - fromIndex);
      duration = duration / (intermediaryCount + 1);

      // Old selected item moves off stage.
      this.animateItem(items[fromIndex], animations.exit, 0, duration);

      // Intermediary items cross stage (enter and then immediately exit).
      for (let i = 0; i < intermediaryCount; i++) {
        let index = fromIndex + intermediaryStep * (i + 1);
        this.animateItem(items[index], animations.cross, i * duration, duration);
      }
    }
    // New selected item moves on stage.
    this.animateItem(items[toIndex], animations.enter, duration * intermediaryCount, duration);
  }

  attachedCallback() {
    if (super.attachedCallback) { super.attachedCallback(); }
    this.selectionRequired = true;
  }

  itemsChanged() {
    if (super.itemsChanged) { super.itemsChanged(); }
    // Give items initial position.
    // Do this by animating them a single frame from the forward/enter animation.
    let enterAnimation = this.animations.forward.enter;
    let offStageFrame = enterAnimation[0];
    let onStageFrame = enterAnimation[enterAnimation.length - 1];
    let selectedItem = this.selectedItem;
    this.items.forEach(item => {
      let animation = item === selectedItem ?
        [onStageFrame] :
        [offStageFrame];
      item.animate(animation, {
        fill: 'both'
      });
    });
  }

}


document.registerElement('basic-animation-stage', AnimationStage);
