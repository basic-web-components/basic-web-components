import ElementBase from '../../basic-element-base/src/ElementBase';
import ContentItemsMixin from '../../basic-component-mixins/src/ContentItemsMixin';
import DirectionSelectionMixin from '../../basic-component-mixins/src/DirectionSelectionMixin';
import DistributedChildrenContentMixin from '../../basic-component-mixins/src/DistributedChildrenContentMixin';
import FractionalSelectionMixin from '../../basic-component-mixins/src/FractionalSelectionMixin';
import KeyboardMixin from '../../basic-component-mixins/src/KeyboardMixin';
import KeyboardDirectionMixin from '../../basic-component-mixins/src/KeyboardDirectionMixin';
import SelectionAriaActiveMixin from '../../basic-component-mixins/src/SelectionAriaActiveMixin';
import SingleSelectionMixin from '../../basic-component-mixins/src/SingleSelectionMixin';
import SlidingViewport from '../../basic-sliding-viewport/src/SlidingViewport'; // jshint ignore:line
import SwipeDirectionMixin from '../../basic-component-mixins/src/SwipeDirectionMixin';
import symbols from '../../basic-component-mixins/src/symbols';
import TrackpadDirectionMixin from '../../basic-component-mixins/src/TrackpadDirectionMixin';

const base = ElementBase.compose(
  ContentItemsMixin,
  DirectionSelectionMixin,
  DistributedChildrenContentMixin,
  FractionalSelectionMixin,
  KeyboardMixin,
  KeyboardDirectionMixin,
  SelectionAriaActiveMixin,
  SingleSelectionMixin,
  SwipeDirectionMixin,
  TrackpadDirectionMixin
);


/**
 * Lets the user navigate laterally through a sequence of child elements.
 *
 * [Live demo](http://basicwebcomponents.org/basic-web-components/packages/basic-carousel/)
 *
 * basic-sliding-carousel is an implementation of the carousel user interface pattern,
 * commonly used for navigating between images, pages, and other elements. This
 * pattern presents the user with a linear sequence of elements, only one of
 * which is shown at a time. The user can navigate to the next/previous element
 * with a variety of input methods.
 *
 * basic-sliding-carousel is a simpler variation of the more sophisticated
 * [basic-carousel](../basic-carousel) component. The latter includes support
 * for _wrapping_ (going forward from the last item to the first, and vice versa),
 * and more complex visual transitions. Those transitions entail use of the
 * Web Animation API, which requires a polyfill in older browsers. Hence, the
 * simpler basic-sliding-carousel may be a more appropriate choice if factors
 * such as download size are critical.
 *
 * Beyond those differences, basic-sliding-carousel offers the same API, usage
 * recommendations, and support for keyboard/touch/mouse and assistive devices.
 * See that component for more details on use.
 *
 * @extends ElementBase
 * @mixes ContentItemsMixin
 * @mixes DirectionSelectionMixin
 * @mixes DistributedChildrenContentMixin
 * @mixes GenericMixin
 * @mixes KeyboardMixin
 * @mixes KeyboardDirectionMixin
 * @mixes SelectionAriaActiveMixin
 * @mixes SingleSelectionMixin
 * @mixes SwipeDirectionMixin
 * @mixes TrackpadDirectionMixin
 */
class SlidingCarousel extends base {

  connectedCallback() {
    if (super.connectedCallback) { super.connectedCallback(); }
    // HACK
    this[symbols.itemsChanged]();
  }

  get [symbols.defaults]() {
    const defaults = super[symbols.defaults] || {};
    defaults.navigationAxis = 'horizontal';
    defaults.selectionRequired = true;
    return defaults;
  }

  /*
   * During drags, don't show CSS transitions.
   */
  get [symbols.dragging]() {
    return !this.$.viewport.showTransition;
  }
  set [symbols.dragging](value) {
    if (symbols.dragging in base.prototype) { super[symbols.dragging] = value; }
    this.$.viewport.showTransition = !value;
  }

  get selectedFraction() {
    return this.$.viewport.selectedFraction;
  }
  set selectedFraction(value) {
    if ('selectedFraction' in base.prototype) { super.selectedFraction = value; }
    this.$.viewport.selectedFraction = value;
    const event = new CustomEvent('selected-fraction-changed');
    this.dispatchEvent(event);
  }

  get selectedIndex() {
    return super.selectedIndex;
  }
  set selectedIndex(value) {
    if ('selectedIndex' in base.prototype) { super.selectedIndex = value; }
    this.$.viewport.selectedIndex = value;
  }

  get selectedItem() {
    return super.selectedItem;
  }
  set selectedItem(item) {
    if ('selectedItem' in base.prototype) { super.selectedItem = item; }
    this.$.viewport.selectedItem = item;
  }

  get template() {
    return `
      <style>
      :host {
        display: -webkit-flex;
        display: flex;
      }

      basic-sliding-viewport {
        display: -webkit-flex;
        display: flex;
        -webkit-flex: 1;
        flex: 1;
      }
      </style>

      <basic-sliding-viewport id="viewport" role="none">
        <slot></slot>
      </basic-sliding-viewport>
    `;
  }
}


customElements.define('basic-sliding-carousel', SlidingCarousel);
export default SlidingCarousel;
