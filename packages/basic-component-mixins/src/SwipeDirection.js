/**
 * @class SwipeDirection
 * @classdesc Mixin which maps touch gestures (swipe left, swipe right) to direction
 * semantics (goRight, goLeft)
 */


export default (base) => class SwipeDirection extends base {

  createdCallback() {
    if (super.createdCallback) { super.createdCallback(); }

    this.position = 0;

    // TODO: Touch events could be factored out into its own mixin.

    // In all touch events, only handle single touches. We don't want to
    // inadvertently do work when the user's trying to pinch-zoom for example.
    // TODO: Even better approach than below would be to ignore touches after
    // the first if the user has already begun a swipe.
    this.addEventListener('touchstart', event => {
      if (this._multiTouch) {
        return;
      } else if (event.touches.length === 1) {
        touchStart(this, event);
      } else {
        this._multiTouch = true;
      }
    });
    this.addEventListener('touchmove', event => {
      if (!this._multiTouch && event.touches.length === 1) {
        let handled = touchMove(this, event);
        if (handled) {
          event.preventDefault();
        }
      }
    });
    this.addEventListener('touchend', event => {
      if (event.touches.length === 0) {
        // All touches removed; gesture is complete.
        if (!this._multiTouch) {
          // Single-touch swipe has finished.
          touchEnd(this, event);
        }
        this._multiTouch = false;
      }
    });
  }

  // Default implementations
  goLeft() {
    if (super.goLeft) { return super.goLeft(); }
  }
  goRight() {
    if (super.goRight) { return super.goRight(); }
  }

  /**
   * The distance the user has moved the first touchpoint since the beginning
   * of a drag, expressed as a fraction of the element's width.
   *
   * @property position
   * @type Number
   */
  get position() {
    return this._position;
  }
  set position(position) {
    if ('position' in base.prototype) { super.position = position; }
    this._position = position;
  }

  // Default implementation
  showTransition(value) {
    if (super.showTransition) { super.showTransition(value); }
  }

};


function touchStart(element, event) {
  element.showTransition(false);
  let x = event.changedTouches[0].clientX;
  let y = event.changedTouches[0].clientY;
  element._startX = x;
  element._previousX = x;
  element._previousY = y;
  element._deltaX = 0;
  element._deltaY = 0;
}

function touchMove(element, event) {
  let x = event.changedTouches[0].clientX;
  let y = event.changedTouches[0].clientY;
  element._deltaX = x - element._previousX;
  element._deltaY = y - element._previousY;
  element._previousX = x;
  element._previousY = y;
  if (Math.abs(element._deltaX) > Math.abs(element._deltaY)) {
    // Move was mostly horizontal.
    trackTo(element, x);
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

function touchEnd(element, event) {
  element.showTransition(true);
  let x = event.changedTouches[0].clientX;
  if (element._deltaX >= 20) {
    // Finished going right at high speed.
    // console.log("flick right " + element._deltaX);
    element.goLeft();
  } else if (element._deltaX <= -20) {
    // Finished going left at high speed.
    // console.log("flick left " + element._deltaX);
    element.goRight();
  } else {
    // Finished at low speed.
    // console.log("slow drag " + element._deltaX);
    trackTo(element, x);
    let position = element.position;
    if (position >= 0.5) {
      element.goRight();
    } else if (position <= -0.5) {
      element.goLeft();
    }
  }
  element.position = 0;
  element._deltaX = null;
  element._deltaY = null;
}

function trackTo(element, x) {
  let width = element.offsetWidth;
  let dragDistance = element._startX - x;
  let fraction = width > 0 ?
    dragDistance / width :
    0;
  element.position = fraction;
}
