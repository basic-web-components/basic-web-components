import ElementBase from '../../basic-element-base/src/ElementBase';
import DistributedChildrenContentMixin from '../../basic-component-mixins/src/DistributedChildrenContentMixin';
import ContentItemsMixin from '../../basic-component-mixins/src/ContentItemsMixin';
import SingleSelectionMixin from '../../basic-component-mixins/src/SingleSelectionMixin';
import symbols from '../../basic-component-mixins/src/symbols';

const base = ElementBase.compose(
  ContentItemsMixin,
  DistributedChildrenContentMixin,
  SingleSelectionMixin
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
 * @mixes ContentItemsMixin
 * @mixes DistributedChildrenContentMixin
 * @mixes SingleSelectionMixin
 */
class Modes extends base {

  [symbols.applySelection](item, selected) {
    if (super[symbols.applySelection]) { super[symbols.applySelection](item, selected); }
    item.style.display = selected ? '' : 'none';
    item.setAttribute('aria-hidden', !selected);
  }

  get [symbols.defaults]() {
    const defaults = super[symbols.defaults] || {};
    defaults.selectionRequired = true;
    return defaults;
  }

  get template() {
    return `<slot></slot>`;
  }

}


customElements.define('basic-modes', Modes);
export default Modes;
