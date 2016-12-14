import ContentItemsMixin from '../../basic-component-mixins/src/ContentItemsMixin';
import DistributedChildrenContentMixin from '../../basic-component-mixins/src/DistributedChildrenContentMixin';
import ElementBase from '../../basic-element-base/src/ElementBase';
import FractionalSelectionMixin from '../../basic-component-mixins/src/FractionalSelectionMixin';
import SelectionAriaActiveMixin from '../../basic-component-mixins/src/SelectionAriaActiveMixin';
import SingleSelectionMixin from '../../basic-component-mixins/src/SingleSelectionMixin';
import SpreadItems from '../../basic-spread-items/src/SpreadItems'; // jshint ignore:line
import symbols from '../../basic-component-mixins/src/symbols';


const base = ElementBase.compose(
  ContentItemsMixin,
  DistributedChildrenContentMixin,
  FractionalSelectionMixin,
  SelectionAriaActiveMixin,
  SingleSelectionMixin
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
 * @mixes ContentItemsMixin
 * @mixes DistributedChildrenContentMixin
 * @mixes FractionalSelectionMixin
 * @mixes SelectionAriaActiveMixin
 * @mixes SingleSelectionMixin
 */
class SlidingViewport extends base {

  constructor() {
    super();
    this[symbols.dragging] = false;
  }

  get [symbols.defaults]() {
    const defaults = super[symbols.defaults] || {};
    defaults.selectionRequired = true;
    return defaults;
  }

  /*
   * During drags, don't show CSS transitions.
   */
  get [symbols.dragging]() {
    return !this.showTransition;
  }
  set [symbols.dragging](value) {
    if (symbols.dragging in base.prototype) { super[symbols.dragging] = value; }
    this.reflectClass('showTransition', !value);
  }

  get selectedFraction() {
    return super.selectedFraction;
  }
  set selectedFraction(value) {
    if ('selectedFraction' in base.prototype) { super.selectedFraction = value; }
    render(this);
  }

  get selectedItem() {
    return super.selectedItem;
  }
  set selectedItem(item) {
    if ('selectedItem' in base.prototype) { super.selectedItem = item; }
    render(this);
  }

  get [symbols.template]() {
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

      <basic-spread-items id="slidingContainer" role="none">
        <slot></slot>
      </basic-spread-items>
    `;
  }

}



function render(element) {
  requestAnimationFrame(renderSelection.bind(element));
}

// Note: In this routine, "this" is bound to an element instance.
function renderSelection() {
  if (!this.selectedItem) {
    return;
  }
  const selection = FractionalSelectionMixin.helpers.elementSelection(this);
  const itemCount = this.items ? this.items.length : 0;
  const damped = FractionalSelectionMixin.helpers.dampedSelection(selection, itemCount);
  // Use a percentage so the transform will still work if screen size changes
  // (e.g., if device orientation changes).
  const left = -damped * 100;
  const transform = 'translateX(' + left + '%)';
  this.$.slidingContainer.style.webkitTransform = transform;
  this.$.slidingContainer.style.transform = transform;
}


customElements.define('basic-sliding-viewport', SlidingViewport);
export default SlidingViewport;
