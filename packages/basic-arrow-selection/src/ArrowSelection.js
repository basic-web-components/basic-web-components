/**
 * @class ArrowSelection
 * @classdesc Component which adds prominent left and right arrow buttons to a
 * wrapped child such as a carousel
 *
 * Clicking the left/right buttons selects the previous/next item.
 *
 * Typical usage:
 *
 *     <basic-arrow-selection>
 *       <basic-carousel>
 *         ... images, etc. ...
 *       </basic-carousel>
 *     </basic-arrow-selection>
 *
 * By default, the arrow buttons are shown on devices with a mouse or mouse-like
 * point device. They are not shown on a touch-capable device unless mouse
 * movement is detected. To cause the buttons to always appear, apply the
 * 'showArrows' CSS class.
 *
 * @mixes DistributedChildrenAsContent
 * @mixes TargetInCollective
 * @mixes ContentFirstChildTarget
 * @mixes ItemsSelection
 * @mixes Keyboard
 * @mixes TargetSelection
 */


import ElementBase from '../../basic-element-base/src/ElementBase';
import DistributedChildrenAsContent from '../../basic-component-mixins/src/DistributedChildrenAsContent';
import ContentFirstChildTarget from '../../basic-component-mixins/src/ContentFirstChildTarget';
import ItemsSelection from '../../basic-component-mixins/src/ItemsSelection';
import Keyboard from '../../basic-component-mixins/src/Keyboard';
import ObserveContentChanges from '../../basic-component-mixins/src/ObserveContentChanges';
import TargetInCollective from '../../basic-component-mixins/src/TargetInCollective';
import TargetSelection from '../../basic-component-mixins/src/TargetSelection';


let base = ElementBase.compose(
  DistributedChildrenAsContent,
  ContentFirstChildTarget,
  ItemsSelection,
  Keyboard,
  ObserveContentChanges,
  TargetInCollective,
  TargetSelection
);

export default class ArrowSelection extends base {

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

  createdCallback() {
    super.createdCallback();
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

  selectedItemChanged() {
    if (super.selectedItemChanged) { super.selectedItemChanged(); }
    // HACK: Force an update of the set of possible navigations.
    this.itemsChanged();
  }

  /*
   * The template uses the chevron-left and chevron-right SVG icons from
   * https://github.com/PolymerElements/iron-icons/blob/master/iron-icons.html.
   */
  get template() {
    return `
      <style>
      :host {
        display: -webkit-inline-flex;
        display: inline-flex;
      }

      #arrowNavigationContainer {
        display: -webkit-inline-flex;
        display: inline-flex;
        -webkit-flex: 1;
        flex: 1;
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
      :host(.overlay) {
        position: relative;
      }
      :host(.overlay) .navigationButton {
        bottom: 0;
        color: rgba(255, 255, 255, 0.7);
        position: absolute;
        top: 0;
      }
      :host(.overlay) #buttonLeft {
        left: 0;
      }
      :host(.overlay) #buttonRight {
        right: 0;
      }
      :host(.overlay) .navigationButton:hover:not(:disabled) {
        background: rgba(255, 255, 255, 0.2);
        color: rgba(255, 255, 255, 0.8);
      }
      :host(.overlay) .navigationButton:active:not(:disabled) {
        background: rgba(255, 255, 255, 0.4);
        color: rgba(255, 255, 255, 0.9);
      }
      :host(.overlay) .navigationButton:disabled {
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
      <div id="arrowNavigationContainer">
        <slot></slot>
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


/*
 * By default, a button will always take focus on mousedown. For this component,
 * we want to override that behavior, such that a mousedown on a button keeps
 * the focus on the outer component.
 */
function assumeButtonFocus(element, button) {
  button.addEventListener('mousedown', event => {
    // Given the outer element focus if it doesn't already have it.
    let outermost = element.collective.outermostElement;
    if (outermost) {
      outermost.focus();
    }
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
// real mousemove events, when we get a mousemove event, we wait for a tick to
// see if the same location is reported as the location of a subsequent
// mousedown.
function listenForMouse(element) {

  element._mousedownListener = event => {
    // console.log("mousedown");
    element._lastMouseDownPageX = event.pageX;
    element._lastMouseDownPageY = event.pageY;
  };
  window.addEventListener('mousedown', element._mousedownListener);

  element._mousemoveListener = event => {
    // console.log("mousemove");
    setTimeout(() => {
      if (event.pageX !== element._lastMouseDownPageX ||
          event.pageY !== element._lastMouseDownPageY) {
        // mousemove event was at a location other than the last mousedown,
        // and hence most likely a real mousemove event.
        mouseDetected(element);
      }
    });
  };
  window.addEventListener('mousemove', element._mousemoveListener);
}


function mouseDetected(element) {
  // console.log("mouse detected");
  showArrows(element);

  // We can stop listening for mouse events now.
  window.removeEventListener('mousedown', element._mousedownListener);
  window.removeEventListener('mousemove', element._mousemoveListener);
  element._mousedownListener = null;
  element._mousemoveListener = null;
}


function showArrows(element) {
  element.classList.add('showArrows');
}


document.registerElement('basic-arrow-selection', ArrowSelection);
