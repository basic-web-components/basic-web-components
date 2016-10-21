import createSymbol from './createSymbol';
import symbols from './symbols';


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
   * [SingleSelection](SingleSelection.md) mixins.
   */
  class TimerSelection extends base {

    constructor() {
      super();
      // Set defaults.
      if (typeof this.playing === 'undefined') {
        this.playing = this[symbols.defaults].playing;
      }
      if (typeof this.selectionTimerDuration === 'undefined') {
        this.selectionTimerDuration = this[symbols.defaults].selectionTimerDuration;
      }
    }

    contentChanged() {
      if (super.contentChanged) { super.contentChanged(); }
      restartTimer(this);
    }

    get [symbols.defaults]() {
      const defaults = super[symbols.defaults] || {};
      defaults.playing = false;
      defaults.selectionTimerDuration = 1000;
      return defaults;
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
     * @default false
     */
    get playing() {
      return this[playingSymbol];
    }
    set playing(playing) {
      const previousPlaying = this[playingSymbol];
      const parsed = String(playing) === 'true'; // Cast to boolean
      if ('playing' in base.prototype) { super.playing = playing; }
      if (parsed !== previousPlaying) {
        if (playing) {
          this.play();
        } else {
          this.pause();
        }
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

    // In case this mixin is being used with TargetSelection.
    selectedItemChanged() {
      if (super.selectedItemChanged) { super.selectedItemChanged(); }
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
      return this[selectionTimerDurationSymbol];
    }
    set selectionTimerDuration(value) {
      this[selectionTimerDurationSymbol] = parseInt(value);
      if ('selectionTimerDuration' in base.prototype) { super.selectionTimerDuration = value; }
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
  if (element.playing && element.items && element.items.length > 0) {
    startTimer(element);
  }
}

function startTimer(element) {
  // If play() is called more than once, cancel any existing timer.
  clearTimer(element);
  element[timerTimeoutSymbol] = setTimeout(() => {
    selectNextWithWrap(element);
  }, element.selectionTimerDuration);
}

// Select the next item, wrapping to first item if necessary.
function selectNextWithWrap(element) {
  const items = element.items;
  if (items && items.length > 0) {
    if (element.selectedIndex == null || element.selectedIndex === items.length - 1) {
      element.selectFirst();
    } else {
      element.selectNext();
    }
  }
}
