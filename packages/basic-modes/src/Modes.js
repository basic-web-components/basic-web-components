import ElementBase from '../../basic-element-base/src/ElementBase';
import DistributedChildrenAsContent from '../../basic-component-mixins/src/DistributedChildrenAsContent';
import ContentAsItems from '../../basic-component-mixins/src/ContentAsItems';
import SingleSelection from '../../basic-component-mixins/src/SingleSelection';
import SelectionAriaActive from '../../basic-component-mixins/src/SelectionAriaActive';
import TargetInCollective from '../../basic-component-mixins/src/TargetInCollective';

let base = ElementBase.compose(
  ContentAsItems,
  DistributedChildrenAsContent,
  SingleSelection,
  SelectionAriaActive,
  TargetInCollective
);


/**
 * Shows exactly one child element at a time. This can be useful, for example,
 * if a given UI element has multiple modes that present substantially different
 * elements.
 *
 * The transition between child elements is instantenous. If you'd like the
 * transition to be accompanied by visible animated effects, see
 * [basic-animation-stage](../basic-animation-stage).
 *
 * This component doesn't provide any UI for changing which mode is shown.
 *
 * @extends ElementBase
 * @mixes ContentAsItems
 * @mixes DistributedChildrenAsContent
 * @mixes SingleSelection
 * @mixes SelectionAriaActive
 * @mixes TargetInCollective
 */
class Modes extends base {

  applySelection(item, selected) {
    if (super.applySelection) { super.applySelection(item, selected); }
    item.style.display = selected ? '' : 'none';
    item.setAttribute('aria-hidden', !selected);
  }

  get defaults() {
    let defaults = super.defaults || {};
    defaults.selectionRequired = true;
    return defaults;
  }

}


customElements.define('basic-modes', Modes);
export default Modes;
