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
        { opacity: 0.8, transform: 'translateX(100%)' },
        { opacity: 1.0, transform: 'translateX(0)' },
        { opacity: 1.0, transform: 'translateX(-100%)' }
      ],
      enter: [
        { opacity: 0.8, transform: 'translateX(100%)' },
        { opacity: 1.0, transform: 'translateX(0)' },
      ],
      exit: [
        { opacity: 1.0, transform: 'translateX(0)' },
        { opacity: 0.8, transform: 'translateX(-100%)' }
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

  // position is between -1 (previous) and 1 (next). 0 = current item.
  animateItem(item, animation, delay) {
    let duration = (animation.length - 1) * this.animationDuration;
    let animationOptions = {
      delay: delay,
      duration: duration,
      // easing: 'ease-in-out',
      fill: 'both'
    };
    item.animate(animation, animationOptions);
  }

  animateSelection(fromIndex, toIndex) {
    console.log(`animating from ${fromIndex} to ${toIndex}`);
    let forward = fromIndex == null || toIndex > fromIndex;
    let animations = this.animations[forward ? 'forward' : 'backward'];
    let duration = this.animationDuration;
    fromIndex = fromIndex >= 0 ? fromIndex : toIndex;
    let items = this.items;
    // Old selected item moves off stage.
    let intermediaryCount = 0;
    if (fromIndex >= 0) {
      console.log(`${fromIndex}: 0`);
      this.animateItem(items[fromIndex], animations.exit, 0);
      // Intermediary items enter and then immediately exit stage.
      intermediaryCount = fromIndex === toIndex ?
        0 :
        Math.abs(toIndex - fromIndex) - 1;
      let intermediaryStep = Math.sign(toIndex - fromIndex);
      for (let i = 0; i < intermediaryCount; i++) {
        let index = fromIndex + intermediaryStep * (i + 1);
        console.log(`${index}: ${i * duration}`);
        this.animateItem(items[index], animations.cross, i * duration);
      }
    }
    // New selected item moves on stage.
    console.log(`${toIndex}: ${duration * intermediaryCount}`);
    this.animateItem(items[toIndex], animations.enter, duration * intermediaryCount);
  }

  // applySelection(item, selected) {
  //   let index = this.items.indexOf(item);
  //   let selectedIndex = this.selectedIndex; // Too expensive?
  //   let fraction;
  //   if (selected) {
  //     fraction = 0.5;
  //   } else {
  //     fraction = index > selectedIndex ?
  //       0 :
  //       1;
  //   }
  //   console.log(`${item.textContent} selected: ${selected}, index: ${index} (current: ${selectedIndex}), ${fraction}`);
  //   animateItem(this, item, fraction);
  // }

  attachedCallback() {
    if (super.attachedCallback) { super.attachedCallback(); }
    this.selectionRequired = true;
  }
  //
  // itemsChanged() {
  //   console.log("itemsChanged");
  //   console.log("Resetting players");
  //   this._players = null;
  //   if (super.itemsChanged) { super.itemsChanged(); }
  // }
  //
  // get players() {
  //   if (!this._players && this.items) {
  //     console.log("Creating players");
  //     this._players = new Array(this.items.length);
  //   }
  //   return this._players;
  // }

}


document.registerElement('basic-animation-stage', AnimationStage);
