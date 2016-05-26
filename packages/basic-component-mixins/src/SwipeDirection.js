import createSymbol from './createSymbol';


// Symbols for private data members on an element.
const deltaXSymbol = createSymbol('deltaX');
const deltaYSymbol = createSymbol('deltaY');
const multiTouchSymbol = createSymbol('multiTouch');
const previousXSymbol = createSymbol('previousX');
const previousYSymbol = createSymbol('previousY');
const startXSymbol = createSymbol('startX');
const travelFractionSymbol = createSymbol('travelFraction');


/* Exported function extends a base class with SwipeDirection. */
export default (base) => {

  /**
   * Mixin which maps touch gestures (swipe left, swipe right) to direction
   * semantics (go right, go left).
   *
   * By default, this mixin presents no user-visible effects; it just indicates a
   * direction in which the user is currently swiping or has finished swiping. To
   * map the direction to a change in selection, use the
   * [DirectionSelection](DirectionSelection.md) mixin.
   */
  class SwipeDirection extends base {

    createdCallback() {
      if (super.createdCallback) { super.createdCallback(); }

      // For the component to receive PointerEvents in IE/Edge, we need to set
      // touch-action: none. Only make this change if touch-action is currently
      // the default value ("auto"), in case the developer knows better than we
      // do what they want in their particular context.
      if (getComputedStyle(this).touchAction === 'auto') {
        this.style.touchAction = 'none';
      }

      this.travelFraction = 0;

      // TODO: Touch events could be factored out into its own mixin.

      // In all touch events, only handle single touches. We don't want to
      // inadvertently do work when the user's trying to pinch-zoom for example.
      // TODO: Even better approach than below would be to ignore touches after
      // the first if the user has already begun a swipe.
      if (window.PointerEvent) {
        // Prefer listening to standard pointer events.
        this.addEventListener('pointerdown', event => {
          if (isEventForPenOrPrimaryTouch(event)) {
            touchStart(this, event.clientX, event.clientY);
          }
        });
        this.addEventListener('pointermove', event => {
          if (isEventForPenOrPrimaryTouch(event)) {
            let handled = touchMove(this, event.clientX, event.clientY);
            if (handled) {
              event.preventDefault();
            }
          }
        });
        this.addEventListener('pointerup', event => {
          if (isEventForPenOrPrimaryTouch(event)) {
            touchEnd(this, event.clientX, event.clientY);
          }
        });
      } else {
        // Pointer events not supported -- listen to older touch events.
        this.addEventListener('touchstart', event => {
          if (this[multiTouchSymbol]) {
            return;
          } else if (event.touches.length === 1) {
            let clientX = event.changedTouches[0].clientX;
            let clientY = event.changedTouches[0].clientY;
            touchStart(this, clientX, clientY);
          } else {
            this[multiTouchSymbol] = true;
          }
        });
        this.addEventListener('touchmove', event => {
          if (!this[multiTouchSymbol] && event.touches.length === 1) {
            let clientX = event.changedTouches[0].clientX;
            let clientY = event.changedTouches[0].clientY;
            let handled = touchMove(this, clientX, clientY);
            if (handled) {
              event.preventDefault();
            }
          }
        });
        this.addEventListener('touchend', event => {
          if (event.touches.length === 0) {
            // All touches removed; gesture is complete.
            if (!this[multiTouchSymbol]) {
              // Single-touch swipe has finished.
              let clientX = event.changedTouches[0].clientX;
              let clientY = event.changedTouches[0].clientY;
              touchEnd(this, clientX, clientY);
            }
            this[multiTouchSymbol] = false;
          }
        });
      }
    }

    /**
     * Invoked when the user wants to go/navigate left.
     * The default implementation of this method does nothing.
     */
    goLeft() {
      if (super.goLeft) { return super.goLeft(); }
    }

    /**
     * Invoked when the user wants to go/navigate right.
     * The default implementation of this method does nothing.
     */
    goRight() {
      if (super.goRight) { return super.goRight(); }
    }

    // Default implementation.
    get showTransition() {
      return super.showTransition;
    }
    set showTransition(value) {
      if ('showTransition' in base.prototype) { super.showTransition = value; }
    }

    /**
     * The distance the first touchpoint has traveled since the beginning of a
     * drag, expressed as a fraction of the element's width.
     *
     * @type number
     */
    get travelFraction() {
      return this[travelFractionSymbol];
    }
    set travelFraction(value) {
      if ('travelFraction' in base.prototype) { super.travelFraction = value; }
      this[travelFractionSymbol] = value;
    }

  }

  return SwipeDirection;
};


// Return true if the pointer event is for the pen, or the primary touch point.
function isEventForPenOrPrimaryTouch(event) {
  return event.pointerType === 'pen' ||
      (event.pointerType === 'touch' && event.isPrimary);
}


function touchStart(element, clientX, clientY) {
  element.showTransition = false;
  element[startXSymbol] = clientX;
  element[previousXSymbol] = clientX;
  element[previousYSymbol] = clientY;
  element[deltaXSymbol] = 0;
  element[deltaYSymbol] = 0;
}

function touchMove(element, clientX, clientY) {
  element[deltaXSymbol] = clientX - element[previousXSymbol];
  element[deltaYSymbol] = clientY - element[previousYSymbol];
  element[previousXSymbol] = clientX;
  element[previousYSymbol] = clientY;
  if (Math.abs(element[deltaXSymbol]) > Math.abs(element[deltaYSymbol])) {
    // Move was mostly horizontal.
    trackTo(element, clientX);
    // Indicate that the event was handled. It'd be nicer if we didn't have
    // to do this so that, e.g., a user could be swiping left and right
    // while simultaneously scrolling up and down. (Native touch apps can do
    // that.) However, Mobile Safari wants to handle swipe events near the
    // page and interpret them as navigations. To avoid having a horiziontal
    // swipe misintepreted as a navigation, we indicate that we've handled
    // the event, and prevent default behavior.
    return true;
  } else {
    // Move was mostly vertical.
    return false; // Not handled
  }
}

function touchEnd(element, clientX, clientY) {
  element.showTransition = true;
  if (element[deltaXSymbol] >= 20) {
    // Finished going right at high speed.
    element.goLeft();
  } else if (element[deltaXSymbol] <= -20) {
    // Finished going left at high speed.
    element.goRight();
  } else {
    // Finished at low speed.
    trackTo(element, clientX);
    let travelFraction = element.travelFraction;
    if (travelFraction >= 0.5) {
      element.goRight();
    } else if (travelFraction <= -0.5) {
      element.goLeft();
    }
  }
  element.travelFraction = 0;
  element[deltaXSymbol] = null;
  element[deltaYSymbol] = null;
}

function trackTo(element, x) {
  let width = element.offsetWidth;
  let dragDistance = element[startXSymbol] - x;
  let fraction = width > 0 ?
    dragDistance / width :
    0;
  element.travelFraction = fraction;
}
