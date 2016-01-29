/* Exported function extends a base class with SwipeDirection. */
export default (base) => {

  /**
   * Mixin which maps touch gestures (swipe left, swipe right) to direction
   * semantics (go right, go left).
   *
   * By default, this mixin presents no user-visible effects; it just indicates a
   * direction in which the user is currently swiping or has finished swiping. To
   * map the direction to a change in selection, use the DirectionSelection mixin.
   */
  class SwipeDirection extends base {

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

    /**
     * The distance the user has moved the first touchpoint since the beginning
     * of a drag, expressed as a fraction of the element's width.
     *
     * @type number
     */
    get position() {
      return this._position;
    }
    set position(position) {
      if ('position' in base.prototype) { super.position = position; }
      this._position = position;
    }

    /**
     * Determine whether a transition should be shown during a swipe.
     *
     * Components like carousels often define animated CSS transitions for
     * sliding effects. Such a transition should usually *not* be applied while
     * the user is dragging, because a CSS animation will introduce a lag that
     * makes the swipe feel sluggish. Instead, as long as the user is dragging
     * with their finger down, the transition should be suppressed. When the
     * user releases their finger, the transition can be restored, allowing the
     * animation to show the carousel sliding into its final position.
     *
     * @param {boolean} value - true if a component-provided transition should
     * be shown, false if not.
     */
    // TODO: Rename (and flip meaning) to something like dragging()?
    showTransition(value) {
      if (super.showTransition) { super.showTransition(value); }
    }

  }

  return SwipeDirection;
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
