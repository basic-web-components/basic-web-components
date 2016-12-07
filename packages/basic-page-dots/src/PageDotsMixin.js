import renderArrayAsElements from '../../basic-component-mixins/src/renderArrayAsElements';
import symbols from '../../basic-component-mixins/src/symbols';
import toggleClass from '../../basic-component-mixins/src/toggleClass';


/* Exported function extends a base class with PageDots. */
export default (base) => {

  /**
   * Template mixin which adds small dots to show the number of items and let
   * the user select a specific item.
   *
   * You can see a [live demo](http://basicwebcomponents.org/basic-web-components/packages/basic-page-dots.html)
   * of this component applied to a carousel.
   *
   * There will be one dot for each item, and the dot for the currently selected
   * item will be shown selected.
   *
   * Typical usage:
   *
   *     class CarouselWithDots extends PageDotsMixin(Carousel) {}
   *     customElements.define('carousel-with-dots', CarouselWithDots);
   *
   * Although the dots are quite small by default, clicking/tapping a dot will
   * will select the corresponding list item.
   */
  class PageDots extends base {

    constructor() {
      super();

      this.$.dots.addEventListener('click', event => {
        const dot = event.target;
        const dotIndex = this.dots.indexOf(dot);
        if (dotIndex >= 0) {
          this.selectedIndex = dotIndex;
        }
      });
    }

    [symbols.applySelection](item, selected) {
      if (super[symbols.applySelection]) { super[symbols.applySelection](item, selected); }
      const index = this.items.indexOf(item);
      // See if the corresponding dot has already been created.
      // If not, the correct dot will be selected when it gets created.
      const dots = this.dots;
      if (dots && dots.length > index) {
        const dot = this.dots[index];
        if (dot) {
          toggleClass(dot, 'selected', selected);
        }
      }
    }

    get dots() {
      return [].slice.call(this.$.dots.querySelectorAll('.dot'));
    }

    [symbols.itemsChanged]() {
      if (super[symbols.itemsChanged]) { super[symbols.itemsChanged](); }
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
      refreshDots(this);
    }

    /**
     * The distance the user has moved the first touchpoint since the beginning
     * of a drag, expressed as a fraction of the element's width.
     *
     * @type number
     */
    get selectedFraction() {
      return super.selectedFraction;
    }
    set selectedFraction(value) {
      if ('selectedFraction' in base.prototype) { super.selectedFraction = value; }
      renderTransition(this, this.selectedIndex, value);
    }

    get selectedIndex() {
      return super.selectedIndex;
    }
    set selectedIndex(index) {
      if ('selectedIndex' in base.prototype) { super.selectedIndex = index; }
      refreshDots(this);
    }

    get template() {
      const baseTemplate = super.template || '';
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

        #dotNavigationContainer {
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

        <div id="dots" role="none"></div>
        <div id="dotNavigationContainer" role="none">
          ${baseTemplate}
        </div>
      `;
    }

  }

  return PageDots;
};


// Return the index, ensuring it stays between 0 and the given length.
function keepIndexWithinBounds(length, index) {
  // Handle possibility of negative mod.
  // See http://stackoverflow.com/a/18618250/76472
  return ((index % length) + length) % length;
}

function renderTransition(element, selectedIndex, selectedFraction) {
  const dots = element.dots;
  if (!dots || dots.length === 0) {
    return;
  }
  const dotCount = dots.length;
  const opacityMinimum = 0.4;
  const opacityMaximum = 0.95;
  const opacityRange = opacityMaximum - opacityMinimum;
  const fractionalIndex = selectedIndex + selectedFraction;
  const leftIndex = Math.floor(fractionalIndex);
  const rightIndex = Math.ceil(fractionalIndex);
  const selectionWraps = element.selectionWraps;
  let awayIndex = selectedFraction >= 0 ? leftIndex : rightIndex;
  let towardIndex = selectedFraction >= 0 ? rightIndex : leftIndex;
  if (selectionWraps) {
    awayIndex = keepIndexWithinBounds(dotCount, awayIndex);
    towardIndex = keepIndexWithinBounds(dotCount, towardIndex);
  }
  // Stupid IE doesn't have Math.trunc.
  // const truncatedSelectedFraction = Math.trunc(selectedFraction);
  const truncatedSelectedFraction = selectedFraction < 0 ? Math.ceil(selectedFraction) : Math.floor(selectedFraction);
  const progress = selectedFraction - truncatedSelectedFraction;
  const opacityProgressThroughRange = Math.abs(progress) * opacityRange;
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

function refreshDots(element) {
  const selectedIndex = element.selectedIndex;
  element.dots.forEach((dot, i) => {
    toggleClass(dot, 'selected', i === selectedIndex);
  });
}
