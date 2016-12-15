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
 * [Live demo](http://basicwebcomponents.org/basic-web-components/packages/demos/modes-with-arrows-and-keyboard.html)
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

  get [symbols.defaults]() {
    const defaults = super[symbols.defaults] || {};
    defaults.selectionRequired = true;
    return defaults;
  }

  [symbols.itemAdded](item) {
    if (super[symbols.itemAdded]) { super[symbols.itemAdded](item); }
    // TODO: See node about aria-hidden below.
    item.setAttribute('aria-hidden', 'false');
  }

  [symbols.itemSelected](item, selected) {
    if (super[symbols.itemSelected]) { super[symbols.itemSelected](item, selected); }
    item.style.display = selected ? '' : 'none';
    // TODO: Should the modes which are not visible be exposed to ARIA?
    // Sometimes this will be desirable, as when an inactive mode should be
    // both physically invisible and invisible to ARIA. In other cases, it
    // might be desirable to let the user navigate the modes with the keyboard,
    // in which case ARIA should be able to see the inactive modes.
    // item.setAttribute('aria-hidden', !selected);
  }

  get [symbols.template]() {
    return `<slot></slot>`;
  }

}


customElements.define('basic-modes', Modes);
export default Modes;
