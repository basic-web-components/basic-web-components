import ElementBase from '../../basic-element-base/src/ElementBase';
import ContentFirstChildTarget from '../../basic-component-mixins/src/ContentFirstChildTarget';
import DistributedChildrenAsContent from '../../basic-component-mixins/src/DistributedChildrenAsContent';
import ItemsSelection from '../../basic-component-mixins/src/ItemsSelection';
import Keyboard from '../../basic-component-mixins/src/Keyboard';
import ObserveContentChanges from '../../basic-component-mixins/src/ObserveContentChanges';
import renderArrayAsElements from '../../basic-component-mixins/src/renderArrayAsElements';
import TargetInCollective from '../../basic-component-mixins/src/TargetInCollective';
import TargetSelection from '../../basic-component-mixins/src/TargetSelection';
import toggleClass from '../../basic-component-mixins/src/toggleClass';


let base = ElementBase.compose(
  ContentFirstChildTarget,
  DistributedChildrenAsContent,
  ItemsSelection,
  Keyboard,
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
 * @mixes DistributedChildrenAsContent
 * @mixes ItemsSelection
 * @mixes Keyboard
 * @mixes ObserveContentChanges
 * @mixes TargetInCollective
 * @mixes TargetSelection
 */
class PageDots extends base {

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

  createdCallback() {
    super.createdCallback();

    this.$.dots.addEventListener('click', event => {
      let dot = event.target;
      let dotIndex = this.dots.indexOf(dot);
      if (dotIndex >= 0) {
        this.selectedIndex = dotIndex;
      }
    });

    this.navigationAxis = 'horizontal';
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
  get position() {
    return this.target && this.target.position;
  }
  set position(value) {
    if ('position' in base.prototype) { super.position = value; }
    if (this.target && this.target.position !== value) {
      this.target.position = value;
    } else {
      renderTransition(this, this.selectedIndex, value);
    }
    this.dispatchEvent(new CustomEvent('position-changed'));
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
    if (this._positionChangedListener) {
      this.removeEventListener('position-changed', this._positionChangedListener);
    }
    this._positionChangedListener = element.addEventListener('position-changed', event => {
      this.position = element.position;
    });
  }

  get template() {
    return `
      <style>
      :host {
        display: -webkit-inline-flex;
        display: inline-flex;
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
      <slot></slot>
    `;
  }

}


function renderTransition(element, selectedIndex, position) {
  let dots = element.dots;
  if (!dots || dots.length === 0) {
    return;
  }
  let opacityMinimum = 0.4;
  let opacityMaximum = 0.95;
  let opacityRange = opacityMaximum - opacityMinimum;
  let fractionalIndex = selectedIndex + position;
  let leftIndex = Math.floor(fractionalIndex);
  let rightIndex = Math.ceil(fractionalIndex);
  let awayIndex = position >= 0 ? leftIndex : rightIndex;
  let towardIndex = position >= 0 ? rightIndex : leftIndex;
  let progress = position - Math.trunc(position);
  let opacityProgressThroughRange = Math.abs(progress) * opacityRange;
  dots.forEach((dot, index) => {
    let dotOpacity;
    if (position === 0) {
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


document.registerElement('basic-page-dots', PageDots);
export default PageDots;
