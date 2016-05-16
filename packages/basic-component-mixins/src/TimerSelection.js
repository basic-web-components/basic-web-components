import createSymbol from './createSymbol';

const playingSymbol = createSymbol('playing');
const selectionTimerDurationSymbol = createSymbol('selectionTimerDuration');
const timerTimeoutSymbol = createSymbol('timerTimeout');


/* Exported function extends a base class with TimerSelection. */
export default (base) => {

  /**
   * Mixin which provides for automatic timed changes in selection.
   *
   * This mixin is useful for creating slideshow-like elements.
   *
   * This mixin expects the component to define an `items` property, as well as
   * `selectFirst` and `selectNext` methods. You can implement those yourself,
   * or use the [ContentAsItems](ContentAsItems.md) and
   * [ItemsSelection](ItemsSelection.md) mixins.
   */
  class TimerSelection extends base {

    contentChanged() {
      if (super.contentChanged) { super.contentChanged(); }
      restartTimer(this);
    }

    /**
     * Begin automatic progression of the selection.
     */
    play() {
      if (super.play) { super.play(); }
      startTimer(this);
      this[playingSymbol] = true;
    }

    /**
     * Pause automatic progression of the selection.
     */
    pause() {
      if (super.pause) { super.pause(); }
      clearTimer(this);
      this[playingSymbol] = false;
    }

    /**
     * True if the selection is being automatically advanced.
     *
     * @type {boolean}
     */
    get playing() {
      return this[playingSymbol] || true;
    }
    set playing(playing) {
      if ('playing' in base.prototype) { super.playing = playing; }
      if (playing && !this[playingSymbol]) {
        this.play();
      } else if (!playing && this[playingSymbol]) {
        this.pause();
      }
    }

    /*
     * When the selected item changes (because of something this mixin did, or
     * was changed by an outside agent like the user), we wait before advancing
     * to the next item. By triggering the next item this way, we implicitly get
     * a desirable behavior: if the user changes the selection (e.g., in a
     * carousel), we let them see that selection state for a while before
     * advancing the selection ourselves.
     */
    get selectedItem() {
      return super.selectedItem;
    }
    set selectedItem(item) {
      if ('selectedItem' in base.prototype) { super.selectedItem = item; }
      restartTimer(this);
    }

    /**
     * The time in milliseconds that will elapse after the selection changes
     * before the selection will be advanced to the next item in the list.
     *
     * @type {number} - Time in milliseconds
     * @default 1000 (1 second)
     */
    get selectionTimerDuration() {
      return super.selectionTimerDuration || this[selectionTimerDurationSymbol] || 1000;
    }
    set selectionTimerDuration(value) {
      if ('selectionTimerDuration' in base.prototype) { super.selectionTimerDuration = value; }
      this[selectionTimerDurationSymbol] = value;
    }

  }

  return TimerSelection;
};


function clearTimer(element) {
  if (element[timerTimeoutSymbol]) {
    clearTimeout(element[timerTimeoutSymbol]);
    element[timerTimeoutSymbol] = null;
  }
}

function restartTimer(element) {
  clearTimer(element);
  if (element.playing) {
    startTimer(element);
  }
}

function startTimer(element) {
  element[timerTimeoutSymbol] = setTimeout(() => {
    selectNextWithWrap(element);
  }, element.selectionTimerDuration);
}

// Select the next item, wrapping to first item if necessary.
function selectNextWithWrap(element) {
  let items = element.items;
  if (items) {
    if (element.selectedIndex == null || element.selectedIndex === items.length - 1) {
      element.selectFirst();
    } else {
      element.selectNext();
    }
  }
}
