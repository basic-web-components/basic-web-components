import ElementBase from '../../basic-element-base/src/ElementBase';
import FractionalSelectionMixin from '../../basic-component-mixins/src/FractionalSelectionMixin';
import SpreadItems from '../../basic-spread-items/src/SpreadItems'; // jshint ignore:line

import toggleClass from '../../basic-component-mixins/src/toggleClass';
import * as fractionalSelection from '../../basic-component-mixins/src/fractionalSelection';


let base = ElementBase.compose(
  FractionalSelectionMixin
);


/**
 * Presents list items in a viewport such that only a single item is visible at
 * a time.
 *
 * Navigating between items will be represented with a horizontal visual
 * sliding effect. For more complex visual effects, see
 * [basic-animation-stage](../basic-animation-stage), which takes advantage of
 * the Web Animations API.
 *
 * This component handles the rendering responsibilities for the basic-carousel
 * component.
 *
 * This component currently requires that you explicitly apply a size to it.
 *
 * @extends ElementBase
 */
class SlidingViewport extends base {

  attachedCallback() {
    if (super.attachedCallback) { super.attachedCallback(); }
    this.render();
  }

  createdCallback() {
    if (super.createdCallback) { super.createdCallback(); }
    this.selectedFraction = 0;
    this.showTransition = true;
  }

  get content() {
    return this.$.slidingContainer.content;
  }

  get items() {
    return this.$.slidingContainer.items;
  }

  render() {
    if (super.render) { super.render(); }
    requestAnimationFrame(renderSelection.bind(this));
  }

  get selectedFraction() {
    return super.selectedFraction;
  }
  set selectedFraction(value) {
    if ('selectedFraction' in base.prototype) { super.selectedFraction = value; }
    this.render();
  }

  get selectedIndex() {
    let items = this.items;
    let selectedItem = this.selectedItem;
    return items && selectedItem ?
      items.indexOf(selectedItem) :
      -1;
  }
  set selectedIndex(index) {
    if ('selectedIndex' in base.prototype) { super.selectedIndex = index; }
    let item = this.items && this.items[index];
    if (item) {
      this.selectedItem = item;
    }
  }

  get selectedItem() {
    return this._selectedItem;
  }
  set selectedItem(item) {
    if ('selectedItem' in base.prototype) { super.selectedItem = item; }
    this._selectedItem = item;
    this.render();
  }

  get showTransition() {
    return super.showTransition || this.classList.contains('showTransition');
  }
  set showTransition(value) {
    if ('showTransition' in base.prototype) { super.showTransition = value; }
    toggleClass(this, 'showTransition', value);
  }

  get template() {
    return `
      <style>
      :host {
        display: block;
        overflow: hidden;
        position: relative;
      }

      #slidingContainer {
        height: 100%;
        position: absolute;
        /*
         Set width for IE/Edge. It's not clear why they need this, and the other
         browsers don't.
         */
        width: 100%;
        will-change: transform;
      }

      :host(.showTransition) #slidingContainer {
        -webkit-transition: -webkit-transform 0.2s ease-out;
        transition: transform 0.2s ease-out;
      }
      </style>

      <basic-spread-items id="slidingContainer">
        <slot></slot>
      </basic-spread-items>
    `;
  }

}


// Note: In this routine, "this" is bound to an element instance.
function renderSelection() {
  if (!this.selectedItem) {
    return;
  }
  let selection = fractionalSelection.elementSelection(this);
  let itemCount = this.items ? this.items.length : 0;
  let damped = fractionalSelection.dampedSelection(selection, itemCount);
  // Use a percentage so the transform will still work if screen size changes
  // (e.g., if device orientation changes).
  let left = -damped * 100;
  let transform = 'translateX(' + left + '%)';
  this.$.slidingContainer.style.webkitTransform = transform;
  this.$.slidingContainer.style.transform = transform;
}


document.registerElement('basic-sliding-viewport', SlidingViewport);
export default SlidingViewport;
