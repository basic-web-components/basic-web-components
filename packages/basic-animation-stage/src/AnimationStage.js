import ElementBase from '../../basic-element-base/src/ElementBase';
import ContentAsItems from '../../basic-component-mixins/src/ContentAsItems';
import DirectionSelection from '../../basic-component-mixins/src/DirectionSelection';
import DistributedChildrenAsContent from '../../basic-component-mixins/src/DistributedChildrenAsContent';
import ItemsSelection from '../../basic-component-mixins/src/ItemsSelection';
import ObserveContentChanges from '../../basic-component-mixins/src/ObserveContentChanges';
import SelectionAnimation from '../../basic-component-mixins/src/SelectionAnimation';


let base = ElementBase.compose(
  ContentAsItems,
  DirectionSelection,
  DistributedChildrenAsContent,
  ItemsSelection,
  ObserveContentChanges,
  SelectionAnimation
);

/**
 * Shows animated transitions entering and leaving the viewport.
 *
 * @extends ElementBase
 */
class AnimationStage extends base {

  get animation() {
    return [
      { opacity: 0.8, transform: 'translateX(100%)' },
      { opacity: 1.0, transform: 'translateX(0)' },
      { opacity: 0.8, transform: 'translateX(-100%)' }
    ];
  }

  get animationDuration() {
    return 200;
  }

  applySelection(item, selected) {
    let index = this.items.indexOf(item);
    let selectedIndex = this.selectedIndex; // Too expensive?
    let fraction;
    if (selected) {
      fraction = 0.5;
    } else {
      fraction = index > selectedIndex ?
        0 :
        1;
    }
    console.log(`${item.textContent} selected: ${selected}, index: ${index} (current: ${selectedIndex}), ${fraction}`);
    animateItem(this, item, fraction);
  }

  attachedCallback() {
    if (super.attachedCallback) { super.attachedCallback(); }
    this.selectionRequired = true;
  }

  itemsChanged() {
    console.log("itemsChanged");
    console.log("Resetting players");
    this._players = null;
    if (super.itemsChanged) { super.itemsChanged(); }
  }

  get players() {
    if (!this._players && this.items) {
      console.log("Creating players");
      this._players = new Array(this.items.length);
    }
    return this._players;
  }

}


// complete = portion (between 0 and 1) of the way through animation.
function animateItem(element, item, fraction) {
  let player = getPlayerForItem(element, item);
  if (player) {
    let duration = element.animationDuration;
    let time = fraction * duration;
    player.currentTime = time;
  }
}

function getPlayerForItem(element, item) {
  let players = element.players;
  if (!players) {
    return;
  }
  let index = element.items.indexOf(item);
  if (index < 0) {
    return null;
  }
  let player = players[index];
  if (!player) {
    console.log(`Creating player ${index}`);
    let animation = element.animation;
    let animationOptions = {
      duration: element.animationDuration,
      easing: 'ease-in-out',
      fill: 'both'
    };
    player = item.animate(animation, animationOptions);
    player.pause();
    players[index] = player;
  }
  return player;
}


document.registerElement('basic-animation-stage', AnimationStage);
