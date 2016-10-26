import createSymbol from '../../basic-component-mixins/src/createSymbol';
import symbols from './symbols';


// Symbols for private data members on an element.
const absorbDecelerationSymbol = createSymbol('absorbDeceleration');
const lastDeltaXSymbol = createSymbol('lastDeltaX');
const lastWheelTimeoutSymbol = createSymbol('lastWheelTimeout');
const postNavigateDelayCompleteSymbol = createSymbol('postNavigateDelayComplete');
const wheelDistanceSymbol = createSymbol('wheelDistance');


/* Exported function extends a base class with TrackpadDirection. */
export default (base) => {

  /**
   * Mixin which maps a horizontal trackpad swipe gestures (or horizontal mouse
   * wheel actions) to direction semantics.
   *
   * You can use this mixin with a mixin like
   * [DirectionSelection](DirectionSelection.md) to let the user change the
   * selection with the trackpad or mouse wheel.
   *
   * To respond to the trackpad, we can listen to the DOM's "wheel" events.
   * These events are fired as the user drags their fingers across a trackpad.
   * Unfortunately, browsers are missing a critical event — there is no event
   * when the user *stops* a gestured on the trackpad or mouse wheel.
   *
   * To make things worse, the mainstream browsers continue to generate fake
   * wheel events even after the user has stopped dragging their fingers. These
   * fake events simulate the user gradually slowing down the drag until they
   * come to a smooth stop. In some contexts, these fake wheel events might be
   * helpful, but in trying to supply typical trackpad swipe navigation, these
   * fake events get in the way.
   *
   * This component uses heuristics to work around these problems, but the
   * complex nature of the problem make it extremely difficult to achieve the
   * same degree of trackpad responsiveness possible with native applications.
   */
  class TrackpadDirection extends base {

    constructor() {
      super();
      this.addEventListener('wheel', event => {
        const handled = wheel(this, event);
        if (handled) {
          event.preventDefault();
        }
      });
      resetWheelTracking(this);
    }

    // Default implementation.
    get [symbols.dragging]() {
      return super[symbols.dragging];
    }
    set [symbols.dragging](value) {
      if (symbols.dragging in base.prototype) { super[symbols.dragging] = value; }
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

    /**
     * The distance the user has moved the first touchpoint since the beginning
     * of a trackpad/wheel operation, expressed as a fraction of the element's
     * width.
     *
     * @type number
     */
    get travelFraction() {
      return super.travelFraction;
    }
    set travelFraction(value) {
      if ('travelFraction' in base.prototype) { super.travelFraction = value; }
    }

  }

  return TrackpadDirection;
};


// Time we wait following a navigation before paying attention to wheel
// events again.
const POST_NAVIGATE_TIME = 250;

// Time we wait after the last wheel event before we reset things.
const WHEEL_TIME = 100;


// Following a navigation, partially reset our wheel tracking.
function postNavigate(element) {
  element.travelFraction = 0;
  element[wheelDistanceSymbol] = 0;
  element[postNavigateDelayCompleteSymbol] = true;
  element[absorbDecelerationSymbol] = true;
  setTimeout(() => {
    element[postNavigateDelayCompleteSymbol] = false;
  }, POST_NAVIGATE_TIME);
}

// Reset all state related to the tracking of the wheel.
function resetWheelTracking(element) {
  element.travelFraction = 0;
  element[wheelDistanceSymbol] = 0;
  element[lastDeltaXSymbol] = 0;
  element[absorbDecelerationSymbol] = false;
  element[postNavigateDelayCompleteSymbol] = false;
  if (element[lastWheelTimeoutSymbol]) {
    clearTimeout(element[lastWheelTimeoutSymbol]);
    element[lastWheelTimeoutSymbol] = null;
  }
}

// Define our own sign function, since (as of May 2015), Safari and IE don't
// supply Math.sign().
function sign(x) {
  return (x === 0) ?
    0 :
    (x > 0) ?
      1 :
      -1;
}

// TODO: Damping, or some other treatment for going past the ends.

/*
 * A wheel event has been generated. This could be a real wheel event, or it
 * could be fake (see notes in the header).
 *
 * This handler uses several strategies to try to approximate native trackpad
 * swipe navigation.
 *
 * If the user has dragged enough to cause a navigation, then for a short
 * delay following that navigation, subsequent wheel events will be ignored.
 *
 * Furthermore, follwowing a navigation, we ignore all wheel events until we
 * receive at least one event where the event's deltaX (distance traveled) is
 * *greater* than the previous event's deltaX. This helps us filter out the
 * fake wheel events generated by the browser to simulate deceleration.
 *
 */
function wheel(element, event) {

  // Since we have a new wheel event, reset our timer waiting for the last
  // wheel event to pass.
  if (element[lastWheelTimeoutSymbol]) {
    clearTimeout(element[lastWheelTimeoutSymbol]);
  }
  element[lastWheelTimeoutSymbol] = setTimeout(() => {
    wheelTimedOut(element);
  }, WHEEL_TIME);

  const deltaX = event.deltaX;
  const deltaY = event.deltaY;

  // See if element event represents acceleration or deceleration.
  const acceleration = sign(deltaX) * (deltaX - element[lastDeltaXSymbol]);
  element[lastDeltaXSymbol] = deltaX;

  if (Math.abs(deltaX) < Math.abs(deltaY)) {
    // Move was mostly vertical. The user may be trying scroll with the
    // trackpad/wheel. To be on the safe, we ignore such events.
    return false;
  }

  if (element[postNavigateDelayCompleteSymbol]) {
    // It's too soon after a navigation; ignore the event.
    return true;
  }

  if (acceleration > 0) {
    // The events are not (or are no longer) decelerating, so we can start
    // paying attention to them again.
    element[absorbDecelerationSymbol] = false;
  } else if (element[absorbDecelerationSymbol]) {
    // The wheel event was likely faked to simulate deceleration; ignore it.
    return true;
  }

  element[wheelDistanceSymbol] += deltaX;

  // Update the travel fraction of the element being navigated.
  const width = element.offsetWidth;
  let travelFraction = width > 0 ?
    element[wheelDistanceSymbol] / width :
    0;
  element[symbols.dragging] = true;
  travelFraction = sign(travelFraction) * Math.min(Math.abs(travelFraction), 1);
  element.travelFraction = travelFraction;

  // If the user has dragged enough to reach the previous/next item, then
  // complete a navigation to that item.
  if (travelFraction === 1) {
    element[symbols.dragging] = false;
    element[symbols.goRight]();
    postNavigate(element);
  } else if (travelFraction === -1) {
    element[symbols.dragging] = false;
    element[symbols.goLeft]();
    postNavigate(element);
  }

  return true;
}

// A sufficiently long period of time has passed since the last wheel event.
// We snap the selection to the closest item, then reset our state.
function wheelTimedOut(element) {

  // Snap to the closest item.
  element[symbols.dragging] = false;
  const travelFraction = element.travelFraction;
  if (travelFraction >= 0.5) {
    element[symbols.goRight]();
  } else if (travelFraction <= -0.5) {
    element[symbols.goLeft]();
  }

  // TODO: Listen for the transition to complete, and then restore
  // dragging to false (or the previous value).

  resetWheelTracking(element);
}
