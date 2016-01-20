/**
 * @class Modes
 * @classdesc Shows exactly one child element at a time
 *
 * This can be useful, for example, if a given UI element has multiple modes
 * that present substantially different elements.
 *
 * This component doesn't provide any UI for changing which mode is shown.
 */


import ElementBase from '../../basic-element-base/src/ElementBase';
import ChildrenContent from '../../basic-component-mixins/src/ChildrenContent';
import ContentItems from '../../basic-component-mixins/src/ContentItems';
import ItemsSelection from '../../basic-component-mixins/src/ItemsSelection';
import ObserveContentChanges from '../../basic-component-mixins/src/ObserveContentChanges';
import SelectionAriaActive from '../../basic-component-mixins/src/SelectionAriaActive';
import TargetInCollective from '../../basic-component-mixins/src/TargetInCollective';

let base = ElementBase.compose(
  ChildrenContent,
  ContentItems,
  ItemsSelection,
  ObserveContentChanges,
  SelectionAriaActive,
  TargetInCollective
);


export default class Modes extends base {

  applySelection(item, selected) {
    if (super.applySelection) { super.applySelection(item, selected); }
    // item.style.visibility = selected ? 'visible' : 'hidden';
    item.style.display = selected ? 'inherit' : 'none';
  }

  attachedCallback() {
    // HACK
    this.itemsChanged();
    this.selectionRequired = true;
  }

  // itemAdded(item) {
  //   if (super.itemAdded) { super.itemAdded(item); }
  //   item.style.position = 'absolute';
  //   item.style.top = 0;
  // }

}


document.registerElement('basic-modes', Modes);
