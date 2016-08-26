import createSymbol from '../../basic-component-mixins/src/createSymbol';
import ElementBase from '../../basic-element-base/src/ElementBase';
import ContentFirstChildTarget from '../../basic-component-mixins/src/ContentFirstChildTarget';
import DirectionSelection from '../../basic-component-mixins/src/DirectionSelection';
import DistributedChildrenAsContent from '../../basic-component-mixins/src/DistributedChildrenAsContent';
import ItemsSelection from '../../basic-component-mixins/src/ItemsSelection';
import Keyboard from '../../basic-component-mixins/src/Keyboard';
import KeyboardDirection from '../../basic-component-mixins/src/KeyboardDirection';
import ObserveContentChanges from '../../basic-component-mixins/src/ObserveContentChanges';
import renderArrayAsElements from '../../basic-component-mixins/src/renderArrayAsElements';
import TargetInCollective from '../../basic-component-mixins/src/TargetInCollective';
import TargetSelection from '../../basic-component-mixins/src/TargetSelection';
import toggleClass from '../../basic-component-mixins/src/toggleClass';


// Symbols for private data members on an element.
const selectedFractionChangedListenerSymbol = createSymbol('selectedFractionChangedListener');


let base = ElementBase.compose(
  ContentFirstChildTarget,
  DirectionSelection,
  DistributedChildrenAsContent,
  ItemsSelection,
  Keyboard,
  KeyboardDirection,
  ObserveContentChanges,
  TargetInCollective,
  TargetSelection
);

/**
 * Presents a set of small dots to show list item count and select list items.
 *
 * You can see a [live demo](http://basicwebcomponents.org/basic-web-components/packages/basic-carousel/carouselWithDots.html)
 * of this component applied to a carousel.
 *
 * There will be one dot for each item, and the dot for the currently selected
 * item will be shown selected.
 *
 * Typical usage:
 *
 *     <basic-page-dots>
 *       <basic-carousel>
 *         ... images, etc. ...
 *       </basic-carousel>
 *     </basic-page-dots>
 *
 * Although the dots are quite small by default, clicking/tapping a dot will
 * will select the corresponding list item.
 *
 * @extends ElementBase
 * @mixes ContentFirstChildTarget
 * @mixes DirectionSelection
 * @mixes DistributedChildrenAsContent
 * @mixes ItemsSelection
 * @mixes Keyboard
 * @mixes KeyboardDirection
 * @mixes ObserveContentChanges
 * @mixes TargetInCollective
 * @mixes TargetSelection
 */
class PageDots extends base {

  constructor() {
    super();

    this.$.dots.addEventListener('click', event => {
      let dot = event.target;
      let dotIndex = this.dots.indexOf(dot);
      if (dotIndex >= 0) {
        this.selectedIndex = dotIndex;
      }
    });
  }

  applySelection(item, selected) {
    if (super.applySelection) { super.applySelection(item, selected); }
    let index = this.items.indexOf(item);
    // See if the corresponding dot has already been created.
    // If not, the correct dot will be selected when it gets created.
    let dots = this.dots;
    if (dots && dots.length > index) {
      let dot = this.dots[index];
      if (dot) {
        toggleClass(dot, 'selected', selected);
      }
    }
  }

  get defaults() {
    let defaults = super.defaults || {};
    defaults.navigationAxis = 'horizontal';
    return defaults;
  }

  get dots() {
    return [].slice.call(this.$.dots.querySelectorAll('.dot'));
  }

  itemsChanged() {
    if (super.itemsChanged) { super.itemsChanged(); }
    renderArrayAsElements(this.items, this.$.dots, (item, element) => {
      // We don't use the item parameter, because any item will produce an
      // identical corresponding dot.
      if (!element) {
        element = document.createElement('div');
        element.classList.add('dot');
        element.classList.add('style-scope');
        element.classList.add('basic-page-dots');
        element.setAttribute('role', 'none');
        return element;
      }
    });
    this.selectedItemChanged();  // In case position of selected item moved.
  }

  /**
   * The distance the user has moved the first touchpoint since the beginning
   * of a drag, expressed as a fraction of the element's width.
   *
   * @type number
   */
  get selectedFraction() {
    return this.target && this.target.selectedFraction;
  }
  set selectedFraction(value) {
    if ('selectedFraction' in base.prototype) { super.selectedFraction = value; }
    if (this.target && this.target.selectedFraction !== value) {
      this.target.selectedFraction = value;
    } else {
      renderTransition(this, this.selectedIndex, value);
    }
    this.dispatchEvent(new CustomEvent('selected-fraction-changed'));
  }

  selectedItemChanged() {
    if (super.selectedItemChanged) { super.selectedItemChanged(); }
    let selectedIndex = this.selectedIndex;
    this.dots.forEach((dot, i) => {
      toggleClass(dot, 'selected', i === selectedIndex);
    });
  }

  get target() {
    return super.target;
  }
  set target(element) {
    if ('target' in base.prototype) { super.target = element; }
    if (this[selectedFractionChangedListenerSymbol]) {
      this.removeEventListener('selected-fraction-changed', this[selectedFractionChangedListenerSymbol]);
    }
    this[selectedFractionChangedListenerSymbol] = element.addEventListener('selected-fraction-changed', event => {
      this.selectedFraction = element.selectedFraction;
    });
  }

  get template() {
    return `
      <style>
      :host {
        display: -webkit-flex;
        display: flex;
        position: relative;
      }

      #dots {
        bottom: 0;
        display: -webkit-flex;
        display: flex;
        -webkit-justify-content: center;
        justify-content: center;
        position: absolute;
        width: 100%;
        z-index: 1;
      }

      #container {
        display: -webkit-flex;
        display: flex;
        -webkit-flex: 1;
        flex: 1;
        position: relative;
        z-index: 0;
      }

      #container ::slotted(*) {
        -webkit-flex: 1;
        flex: 1;
      }

      .dot {
        background: rgb(255, 255, 255);
        border-radius: 7px;
        box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.5);
        box-sizing: border-box;
        cursor: pointer;
        height: 8px;
        margin: 7px 5px;
        opacity: 0.4;
        padding: 0;
        transition: background 0.2s box-shadow 0.2s;
        width: 8px;
      }

      .dot:hover {
        background: rgba(0, 0, 0, 0.75);
        box-shadow: 0 0 1px 3px rgba(255, 255, 255, 0.5);
      }

      .dot.selected {
        opacity: 0.95;
      }

      @media (min-width: 768px) {
        .dot {
          height: 12px;
          width: 12px;
        }
      }
      </style>

      <div id="dots"></div>
      <div id="container" role="none">
        <slot></slot>
      </div>
    `;
  }

}


// Return the index, ensuring it stays between 0 and the given length.
function keepIndexWithinBounds(length, index) {
  // Handle possibility of negative mod.
  // See http://stackoverflow.com/a/18618250/76472
  return ((index % length) + length) % length;
}

function renderTransition(element, selectedIndex, selectedFraction) {
  let dots = element.dots;
  if (!dots || dots.length === 0) {
    return;
  }
  let dotCount = dots.length;
  let opacityMinimum = 0.4;
  let opacityMaximum = 0.95;
  let opacityRange = opacityMaximum - opacityMinimum;
  let fractionalIndex = selectedIndex + selectedFraction;
  let leftIndex = Math.floor(fractionalIndex);
  let rightIndex = Math.ceil(fractionalIndex);
  let selectionWraps = element.selectionWraps;
  let awayIndex = selectedFraction >= 0 ? leftIndex : rightIndex;
  let towardIndex = selectedFraction >= 0 ? rightIndex : leftIndex;
  if (selectionWraps) {
    awayIndex = keepIndexWithinBounds(dotCount, awayIndex);
    towardIndex = keepIndexWithinBounds(dotCount, towardIndex);
  }
  // Stupid IE doesn't have Math.trunc.
  // let truncatedSelectedFraction = Math.trunc(selectedFraction);
  let truncatedSelectedFraction = selectedFraction < 0 ? Math.ceil(selectedFraction) : Math.floor(selectedFraction);
  let progress = selectedFraction - truncatedSelectedFraction;
  let opacityProgressThroughRange = Math.abs(progress) * opacityRange;
  dots.forEach((dot, index) => {
    let dotOpacity;
    if (selectedFraction === 0) {
      // Remove explicit opacity and rely on styling.
      dotOpacity = '';
    } else if (index === awayIndex) {
      dotOpacity = opacityMaximum - opacityProgressThroughRange;
    } else if (index === towardIndex) {
      dotOpacity = opacityMinimum + opacityProgressThroughRange;
    } else {
      dotOpacity = opacityMinimum;
    }
    dot.style.opacity = dotOpacity;
  });
}


customElements.define('basic-page-dots', PageDots);
export default PageDots;
