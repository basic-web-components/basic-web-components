import ElementBase from '../../basic-element-base/src/ElementBase';
import ContentAsItems from '../../basic-component-mixins/src/ContentAsItems';
import DirectionSelection from '../../basic-component-mixins/src/DirectionSelection';
import DistributedChildrenAsContent from '../../basic-component-mixins/src/DistributedChildrenAsContent';
import ItemsSelection from '../../basic-component-mixins/src/ItemsSelection';
import ObserveContentChanges from '../../basic-component-mixins/src/ObserveContentChanges';
import SelectionAnimation from '../../basic-component-mixins/src/SelectionAnimation';
import SelectionAriaActive from '../../basic-component-mixins/src/SelectionAriaActive';
import SwipeDirection from '../../basic-component-mixins/src/SwipeDirection';
import TrackpadDirection from '../../basic-component-mixins/src/TrackpadDirection';


let base = ElementBase.compose(
  ContentAsItems,
  DirectionSelection,
  DistributedChildrenAsContent,
  ItemsSelection,
  ObserveContentChanges,
  SelectionAnimation,
  SelectionAriaActive,
  SwipeDirection,
  TrackpadDirection
);

/**
 * Shows animated transitions entering and leaving the viewport.
 *
 * @extends ElementBase
 * @mixes ContentAsItems
 * @mixes DirectionSelection
 * @mixes DistributedChildrenAsContent
 * @mixes ItemsSelection
 * @mixes ObserveContentChanges
 * @mixes SelectionAnimation
 * @mixes SelectionAriaActive
 * @mixes SwipeDirection
 */
class AnimationStage extends base {

  attachedCallback() {
    if (super.attachedCallback) { super.attachedCallback(); }
    this.selectionRequired = true;
  }

  get selectedFraction() {
    return this._selectedFraction;
  }
  set selectedFraction(value) {
    if ('selectedFraction' in base.prototype) { super.selectedFraction = value; }
    this._selectedFraction = value;
    let event = new CustomEvent('selection-fraction-changed');
    this.dispatchEvent(event);
  }

}


document.registerElement('basic-animation-stage', AnimationStage);
