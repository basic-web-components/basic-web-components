import ElementBase from '../../basic-element-base/src/ElementBase';
import ContentAsItems from '../../basic-component-mixins/src/ContentAsItems';
import DirectionSelection from '../../basic-component-mixins/src/DirectionSelection';
import DistributedChildrenAsContent from '../../basic-component-mixins/src/DistributedChildrenAsContent';
import FractionalSelection from '../../basic-component-mixins/src/FractionalSelection';
import Generic from '../../basic-component-mixins/src/Generic';
import ItemsSelection from '../../basic-component-mixins/src/ItemsSelection';
import Keyboard from '../../basic-component-mixins/src/Keyboard';
import KeyboardDirection from '../../basic-component-mixins/src/KeyboardDirection';
import ObserveContentChanges from '../../basic-component-mixins/src/ObserveContentChanges';
import SelectionAriaActive from '../../basic-component-mixins/src/SelectionAriaActive';
import SlidingViewport from '../../basic-sliding-viewport/src/SlidingViewport'; // jshint ignore:line
import SwipeDirection from '../../basic-component-mixins/src/SwipeDirection';
import TargetInCollective from '../../basic-component-mixins/src/TargetInCollective';
import TrackpadDirection from '../../basic-component-mixins/src/TrackpadDirection';

let base = ElementBase.compose(
  ContentAsItems,
  DirectionSelection,
  DistributedChildrenAsContent,
  FractionalSelection,
  Generic,
  ItemsSelection,
  Keyboard,
  KeyboardDirection,
  ObserveContentChanges,
  SelectionAriaActive,
  SwipeDirection,
  TargetInCollective,
  TrackpadDirection
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
 * @mixes ContentAsItems
 * @mixes DirectionSelection
 * @mixes DistributedChildrenAsContent
 * @mixes Generic
 * @mixes ItemsSelection
 * @mixes Keyboard
 * @mixes KeyboardDirection
 * @mixes ObserveContentChanges
 * @mixes SelectionAriaActive
 * @mixes SwipeDirection
 * @mixes TargetInCollective
 * @mixes TrackpadDirection
 */
class SlidingCarousel extends base {

  attachedCallback() {
    if (super.attachedCallback) { super.attachedCallback(); }
    // HACK
    this.itemsChanged();
    this.selectionRequired = true;
  }

  createdCallback() {
    if (super.createdCallback) { super.createdCallback(); }
    this.navigationAxis = 'horizontal';
  }

  get selectedFraction() {
    return this.$.viewport.selectedFraction;
  }
  set selectedFraction(value) {
    if ('selectedFraction' in base.prototype) { super.selectedFraction = value; }
    this.$.viewport.selectedFraction = value;
    let event = new CustomEvent('selection-fraction-changed');
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

  /**
   * Determine whether a transition should be shown during selection.
   *
   * Components like carousels often define animated CSS transitions for
   * sliding effects. Such a transition should usually *not* be applied while
   * the user is dragging, because a CSS animation will introduce a lag that
   * makes the swipe feel sluggish. Instead, as long as the user is dragging
   * with their finger down, the transition should be suppressed. When the
   * user releases their finger, the transition can be restored, allowing the
   * animation to show the carousel sliding into its final position.
   *
   * Note: This property is only intended to let a component cooperate with
   * mixins that may be applied to it, and is not intended to let someone
   * using component permanently enable or disable transition effects.
   *
   * @type {boolean} true if a component-provided transition should be shown,
   * false if not.
   */
  get showTransition() {
    return super.showTransition || this.$.viewport.showTransition;
  }
  set showTransition(value) {
    if ('showTransition' in base.prototype) { super.showTransition = value; }
    this.$.viewport.showTransition = value;
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

      <basic-sliding-viewport id="viewport">
        <slot></slot>
      </basic-sliding-viewport>
    `;
  }
}


document.registerElement('basic-sliding-carousel', SlidingCarousel);
export default SlidingCarousel;
