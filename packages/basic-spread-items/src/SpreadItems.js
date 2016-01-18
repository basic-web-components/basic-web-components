/**
 * Spreads out a set of items horizontally so they take equal space. This is
 * used, for example, by the basic-sliding-viewport component to ensure that
 * children of different size will take up the same amount of horizontal space.
 *
 * This component currently requires an explicit size by applied to it.
 *
 * @class basic-spread-items
 * @mixes ChildrenContent
 */

import ElementBase from '../../basic-element-base/src/ElementBase';
import ChildrenContent from '../../basic-component-mixins/src/ChildrenContent';

export default class SpreadItems extends ElementBase.compose(ChildrenContent) {

  attachedCallback() {
    if (super.attachedCallback) { super.attachedCallback(); }
    // HACK
    this.itemsChanged();
  }

  get items() {
    return this.content;
  }

  itemsChanged() {
    if (super.itemsChanged) { super.itemsChanged(); }
    let items = this.items;
    let count = items.length;
    this.$.spreadContainer.style.width = (count * 100) + '%';
    let itemWidth = (100 / count) + "%";
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

      #spreadContainer ::content > * {
        object-fit: contain;
        object-fit: var(--basic-item-object-fit, contain);
        touch-action: none;
        height: 100%;
        -webkit-user-drag: none;
        -moz-user-select: none;
        user-select: none;
      }
      </style>

      <div id="spreadContainer">
        <slot></slot>
      </div>
    `;
  }

}


document.registerElement('basic-spread-items', SpreadItems);
