import createSymbol from '../../basic-component-mixins/src/createSymbol';
import symbols from '../../basic-component-mixins/src/symbols';


// Symbols for private data members on an element.
const mousedownListenerSymbol = createSymbol('mousedownListener');
const mousemoveListenerSymbol = createSymbol('mousemoveListener');
const lastMouseXSymbol = createSymbol('lastMouseX');
const lastMouseYSymbol = createSymbol('lastMouseY');
const mouseTimeoutSymbol = createSymbol('mouseTimeout');


/* Exported function extends a base class with ArrowSelection. */
export default (base) => {

  /**
   * Template mixin which adds prominent left and right arrow buttons to a
   * wrapped child such as a carousel.
   *
   * You can see a
   * [live demo](http://basicwebcomponents.org/basic-web-components/packages/demos/carousel-with-arrows.html)
   * of this mixin applied to a carousel.
   *
   * Clicking the left/right buttons selects the previous/next item.
   *
   * Typical usage:
   *
   *     class CarouselWithArrows extends ArrowSelectionMixin(Carousel) {}
   *     customElements.define('carousel-with-arrows', CarouselWithArrows);
   *
   * By default, the arrow buttons are shown on devices with a mouse or mouse-like
   * pointing device. They are not shown on a touch-capable device unless mouse
   * movement is detected. To cause the buttons to always appear, apply the
   * 'showArrows' CSS class.
   */
  class ArrowSelection extends base {

    constructor() {
      super();

      this.$.buttonLeft.addEventListener('click', event => {
        this.selectPrevious();
        event.stopPropagation();
      });
      this.$.buttonRight.addEventListener('click', event => {
        this.selectNext();
        event.stopPropagation();
      });
      assumeButtonFocus(this, this.$.buttonLeft);
      assumeButtonFocus(this, this.$.buttonRight);
    }

    get canSelectNext() {
      return super.canSelectNext;
    }
    set canSelectNext(canSelectNext) {
      if ('canSelectNext' in base.prototype) { super.canSelectNext = canSelectNext; }
      this.$.buttonRight.disabled = !canSelectNext;
    }

    get canSelectPrevious() {
      return super.canSelectPrevious;
    }
    set canSelectPrevious(canSelectPrevious) {
      if ('canSelectPrevious' in base.prototype) { super.canSelectPrevious = canSelectPrevious; }
      this.$.buttonLeft.disabled = !canSelectPrevious;
    }

    connectedCallback() {
      if (super.connectedCallback) { super.connectedCallback(); }

      if (!this.classList.contains('showArrows')) {
        // Determine whether we should show arrow buttons or not.
        if (deviceSupportsTouch()) {
          // A touch device might also support a mouse, but we can't know whether
          // there's actually a mouse until we hear from it.
          listenForMouse(this);
        } else {
          // The device doesn't support touch, so assume it has a mouse.
          showArrows(this);
        }
      }
    }

    get [symbols.defaults]() {
      const defaults = super[symbols.defaults] || {};
      defaults.navigationAxis = 'horizontal';
      return defaults;
    }

    /*
     * The template uses the chevron-left and chevron-right SVG icons from
     * https://github.com/PolymerElements/iron-icons/blob/master/iron-icons.html.
     */
    get [symbols.template]() {
      const baseTemplate = super[symbols.template] || '';
      return `
        <style>
        :host {
          -webkit-align-items: stretch;
          align-items: stretch;
          display: -webkit-flex;
          display: flex;
          -webkit-flex: 1;
          flex: 1;
          -webkit-justify-content: center;
          justify-content: center;
        }

        #arrowNavigationContainer {
          display: -webkit-flex;
          display: flex;
          -webkit-flex: 1;
          flex: 1;
          position: relative;
        }

        .navigationButton {
          background: transparent;
          border: 1px solid transparent;
          box-sizing: border-box;
          color: rgba(0, 0, 0, 0.7);
          fill: currentColor;
          margin: 0;
          opacity: 1;
          outline: none; /* REVIEW: Accessibility should be provided by other elements. */
          padding: 0;
          transition: opacity 1s;
          z-index: 1;
        }

        .navigationButton:hover:not(:disabled) {
          background: rgba(0, 0, 0, 0.5);
          color: rgba(0, 0, 0, 0.8);
          cursor: pointer;
        }
        .navigationButton:active:not(:disabled) {
          background: rgba(0, 0, 0, 0.7);
          color: rgba(0, 0, 0, 0.9);
        }
        .navigationButton:disabled {
          color: rgba(0, 0, 0, 0.2);
        }

        :host(:not(.showArrows)) .navigationButton {
          opacity: 0;
          visibility: hidden;
        }

        .navigationButton .icon {
          height: 48px;
          width: 48px;
        }

        /* Overlay variant */
        :host(.overlayArrows) {
          position: relative;
        }
        :host(.overlayArrows) .navigationButton {
          bottom: 0;
          color: rgba(255, 255, 255, 0.7);
          position: absolute;
          top: 0;
        }
        :host(.overlayArrows) #buttonLeft {
          left: 0;
        }
        :host(.overlayArrows) #buttonRight {
          right: 0;
        }
        :host(.overlayArrows) .navigationButton:hover:not(:disabled) {
          background: rgba(255, 255, 255, 0.2);
          color: rgba(255, 255, 255, 0.8);
        }
        :host(.overlayArrows) .navigationButton:active:not(:disabled) {
          background: rgba(255, 255, 255, 0.4);
          color: rgba(255, 255, 255, 0.9);
        }
        :host(.overlayArrows) .navigationButton:disabled {
          color: rgba(255, 255, 255, 0.3);
        }
        </style>

        <!--
        Accessibility note: since the navigation offered by the arrow buttons should
        be redundant (that is, there should be other ways of navigating the list),
        we mark the button as aria-hidden so that assistive devices ignore them.
        -->
        <button id="buttonLeft" class="navigationButton" disabled tabindex="-1" aria-hidden="true">
          <svg class="icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
            <g id="chevron-left">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </g>
          </svg>
        </button>
        <div id="arrowNavigationContainer" role="none">
          ${baseTemplate}
        </div>
        <button id="buttonRight" class="navigationButton" disabled tabindex="-1" aria-hidden="true">
          <svg class="icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
            <g id="chevron-right">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
            </g>
          </svg>
        </button>
      `;
    }

  }

  return ArrowSelection;
};


/*
 * By default, a button will always take focus on mousedown. For this component,
 * we want to override that behavior, such that a mousedown on a button keeps
 * the focus on the outer component.
 */
function assumeButtonFocus(element, button) {
  button.addEventListener('mousedown', event => {
    // Given the main element the focus if it doesn't already have it.
    element.focus();
    // Prevent the default focus-on-mousedown behavior.
    event.preventDefault();
  });
}

function deviceSupportsTouch() {
  return 'ontouchstart' in window ||
      (window.DocumentTouch && document instanceof window.DocumentTouch);
}

// We try to detect the presence of a mouse by listening for mousemove events
// which are *not* the result of a mousedown. On a touch device, a tap on the
// page will generate a fake mousemove, followed by a mousedown. We don't want
// to respond to those fake mousemove events. To discriminate between fake and
// real mousemove events, when we get a mousemove event, we wait for a bit to
// see if the same location is reported as the location of a subsequent
// mousedown.
function listenForMouse(element) {

  element[mousedownListenerSymbol] = event => {
    if (element[mouseTimeoutSymbol]) {
      clearTimeout(element[mouseTimeoutSymbol]);
    }
    element[lastMouseXSymbol] = event.pageX;
    element[lastMouseYSymbol] = event.pageY;
  };
  window.addEventListener('mousedown', element[mousedownListenerSymbol]);

  element[mousemoveListenerSymbol] = event => {
    // Postpone checking the mousemove location to give the mousedown event a
    // chance to fire. The 250 ms delay is just guesswork; a shorter delay
    // doesn't seem to work.
    element[mouseTimeoutSymbol] = setTimeout(() => {
      if (element[lastMouseXSymbol] != null && event.pageX !== element[lastMouseXSymbol] ||
          element[lastMouseYSymbol] != null && event.pageY !== element[lastMouseYSymbol]) {
        // mousemove event was at a location other than the last mousedown,
        // and hence most likely a real mousemove event.
        mouseDetected(element);
      } else {
        element[lastMouseXSymbol] = event.pageX;
        element[lastMouseYSymbol] = event.pageY;
      }
    }, 250);
  };
  window.addEventListener('mousemove', element[mousemoveListenerSymbol]);
}

function mouseDetected(element) {
  showArrows(element);

  // We can stop listening for mouse events now.
  if (element[mouseTimeoutSymbol]) {
    clearTimeout(element[mouseTimeoutSymbol]);
  }
  window.removeEventListener('mousedown', element[mousedownListenerSymbol]);
  window.removeEventListener('mousemove', element[mousemoveListenerSymbol]);
  element[mousedownListenerSymbol] = null;
  element[mousemoveListenerSymbol] = null;
}

function showArrows(element) {
  element.classList.add('showArrows');
}
