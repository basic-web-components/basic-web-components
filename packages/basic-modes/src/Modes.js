import ElementBase from '../../basic-element-base/src/ElementBase';
import DistributedChildrenAsContent from '../../basic-component-mixins/src/DistributedChildrenAsContent';
import ContentAsItems from '../../basic-component-mixins/src/ContentAsItems';
import ItemsSelection from '../../basic-component-mixins/src/ItemsSelection';
import ObserveContentChanges from '../../basic-component-mixins/src/ObserveContentChanges';
import SelectionAriaActive from '../../basic-component-mixins/src/SelectionAriaActive';
import TargetInCollective from '../../basic-component-mixins/src/TargetInCollective';

let base = ElementBase.compose(
  DistributedChildrenAsContent,
  ContentAsItems,
  ItemsSelection,
  ObserveContentChanges,
  SelectionAriaActive,
  TargetInCollective
);


/**
 * Shows exactly one child element at a time.
 *
 * This can be useful, for example, if a given UI element has multiple modes
 * that present substantially different elements.
 *
 * This component doesn't provide any UI for changing which mode is shown.
 */
class Modes extends base {

  applySelection(item, selected) {
    if (super.applySelection) { super.applySelection(item, selected); }
    item.style.display = selected ? '' : 'none';
    item.setAttribute('aria-hidden', !selected);
  }

  attachedCallback() {
    this.selectionRequired = true;
  }

}


document.registerElement('basic-modes', Modes);
export default Modes;
