import createSymbol from './createSymbol';
import symbols from './symbols';


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

    constructor() {
      super();

      this.travelFraction = 0;

      // In all touch events, only handle single touches. We don't want to
      // inadvertently do work when the user's trying to pinch-zoom for example.
      // TODO: Even better approach than below would be to ignore touches after
      // the first if the user has already begun a swipe.
      // TODO: Touch events should probably be factored out into its own mixin.
      if (window.PointerEvent) {
        // Prefer listening to standard pointer events.
        this.addEventListener('pointerdown', event => {
          if (isEventForPenOrPrimaryTouch(event)) {
            this.touchStart(event.clientX, event.clientY);
          }
        });
        this.addEventListener('pointermove', event => {
          if (isEventForPenOrPrimaryTouch(event)) {
            let handled = this.touchMove(event.clientX, event.clientY);
            if (handled) {
              event.preventDefault();
            }
          }
        });
        this.addEventListener('pointerup', event => {
          if (isEventForPenOrPrimaryTouch(event)) {
            this.touchEnd(event.clientX, event.clientY);
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
            this.touchStart(clientX, clientY);
          } else {
            this[multiTouchSymbol] = true;
          }
        });
        this.addEventListener('touchmove', event => {
          if (!this[multiTouchSymbol] && event.touches.length === 1) {
            let clientX = event.changedTouches[0].clientX;
            let clientY = event.changedTouches[0].clientY;
            let handled = this.touchMove(clientX, clientY);
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
              this.touchEnd(clientX, clientY);
            }
            this[multiTouchSymbol] = false;
          }
        });
      }
    }

    connectedCallback() {
      if (super.connectedCallback) { super.connectedCallback(); }

      // For the component to receive PointerEvents in IE/Edge, we need to set
      // touch-action: none. Only make this change if touch-action is currently
      // the default value ("auto"), in case the developer knows better than we
      // do what they want in their particular context.
      if (getComputedStyle(this).touchAction === 'auto') {
        this.style.touchAction = 'none';
      }
    }

    /**
     * Invoked when the user wants to go/navigate left.
     * The default implementation of this method does nothing.
     */
    [symbols.goLeft]() {
      if (super[symbols.goLeft]) { return super[symbols.goLeft](); }
    }

    /**
     * Invoked when the user wants to go/navigate right.
     * The default implementation of this method does nothing.
     */
    [symbols.goRight]() {
      if (super[symbols.goRight]) { return super[symbols.goRight](); }
    }

    // Default implementation.
    get showTransition() {
      return super.showTransition;
    }
    set showTransition(value) {
      if ('showTransition' in base.prototype) { super.showTransition = value; }
    }

    /**
     * Invoked when the user has finished a touch operation.
     *
     * @param {number} clientX - The horizontal component of the first touch point
     * @param {number} clientY - The vertical component of the first touch point
     */
    touchEnd(clientX, clientY) {
      if (super.touchEnd) { super.touchEnd(); }
      this.showTransition = true;
      if (this[deltaXSymbol] >= 20) {
        // Finished going right at high speed.
        this[symbols.goLeft]();
      } else if (this[deltaXSymbol] <= -20) {
        // Finished going left at high speed.
        this[symbols.goRight]();
      } else {
        // Finished at low speed.
        trackTo(this, clientX);
        let travelFraction = this.travelFraction;
        if (travelFraction >= 0.5) {
          this[symbols.goRight]();
        } else if (travelFraction <= -0.5) {
          this[symbols.goLeft]();
        }
      }
      this.travelFraction = 0;
      this[deltaXSymbol] = null;
      this[deltaYSymbol] = null;
    }

    /**
     * Invoked when the user has moved during a touch operation.
     *
     * @param {number} clientX - The horizontal component of the first touch point
     * @param {number} clientY - The vertical component of the first touch point
     */
    touchMove(clientX, clientY) {
      if (super.touchMove) { super.touchMove(); }

      this[deltaXSymbol] = clientX - this[previousXSymbol];
      this[deltaYSymbol] = clientY - this[previousYSymbol];
      this[previousXSymbol] = clientX;
      this[previousYSymbol] = clientY;
      if (Math.abs(this[deltaXSymbol]) > Math.abs(this[deltaYSymbol])) {
        // Move was mostly horizontal.
        trackTo(this, clientX);
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

    /**
     * Invoked when the user has begun a touch operation.
     *
     * @param {number} clientX - The horizontal component of the first touch point
     * @param {number} clientY - The vertical component of the first touch point
     */
    touchStart(clientX, clientY) {
      if (super.touchStart) { super.touchStart(); }
      this.showTransition = false;
      this[startXSymbol] = clientX;
      this[previousXSymbol] = clientX;
      this[previousYSymbol] = clientY;
      this[deltaXSymbol] = 0;
      this[deltaYSymbol] = 0;
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
      this[travelFractionSymbol] = value;
      if ('travelFraction' in base.prototype) { super.travelFraction = value; }
    }

  }

  return SwipeDirection;
};


// Return true if the pointer event is for the pen, or the primary touch point.
function isEventForPenOrPrimaryTouch(event) {
  return event.pointerType === 'pen' ||
      (event.pointerType === 'touch' && event.isPrimary);
}

function trackTo(element, x) {
  let width = element.offsetWidth;
  let dragDistance = element[startXSymbol] - x;
  let fraction = width > 0 ?
    dragDistance / width :
    0;
  element.travelFraction = fraction;
}
