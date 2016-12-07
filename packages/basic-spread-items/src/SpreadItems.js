import ElementBase from '../../basic-element-base/src/ElementBase';
import DistributedChildrenContentMixin from '../../basic-component-mixins/src/DistributedChildrenContentMixin';
import symbols from '../../basic-component-mixins/src/symbols';


/**
 * Spreads out a set of items horizontally so they take equal space.
 *
 * [Live demo](http://basicwebcomponents.org/basic-web-components/packages/basic-spread-items/)
 *
 * This component is used, for example, by the basic-sliding-viewport component
 * to ensure that children of different size will take up the same amount of
 * horizontal space.
 *
 * This component currently requires an explicit size by applied to it.
 *
 * @extends ElementBase
 * @mixes DistributedChildrenContentMixin
 */
class SpreadItems extends ElementBase.compose(
  DistributedChildrenContentMixin
) {

  connectedCallback() {
    if (super.connectedCallback) { super.connectedCallback(); }
    // HACK
    this[symbols.itemsChanged]();
  }

  get items() {
    return this.content;
  }

  // TODO: Should also handle contentChanged(), but need to rationalize with
  // invocation of [symbols.itemsChanged] in connectedCallback.
  [symbols.itemsChanged]() {
    if (super[symbols.itemsChanged]) { super[symbols.itemsChanged](); }
    const items = this.items;
    const count = items.length;
    this.$.spreadContainer.style.width = (count * 100) + '%';
    const itemWidth = (100 / count) + "%";
    [].forEach.call(items, item => {
      item.style.width = itemWidth;
    });
  }

  get template() {
    return `
      <style>
      :host {
        display: block;
      }

      #spreadContainer {
        display: -webkit-flex;
        display: flex;
        height: 100%;
        position: relative;
      }

      #spreadContainer ::slotted(*) {
        object-fit: contain;
        object-fit: var(--basic-item-object-fit, contain);
        height: 100%;
        -webkit-user-drag: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      </style>

      <div id="spreadContainer" role="none">
        <slot></slot>
      </div>
    `;
  }

}


customElements.define('basic-spread-items', SpreadItems);
export default SpreadItems;
