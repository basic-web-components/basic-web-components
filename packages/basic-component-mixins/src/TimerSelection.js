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
      this.play();
    }

    /**
     * Begin automatic progression of the selection.
     */
    play() {
      if (super.play) { super.play(); }
      this._playing = true;
      setTimer(this);
    }

    /**
     * Pause automatic progression of the selection.
     */
    pause() {
      if (super.pause) { super.pause(); }
      clearTimer(this);
      this._playing = false;
    }

    /**
     * True if the selection is being automatically advanced.
     *
     * @type {boolean}
     */
    get playing() {
      return this._playing;
    }
    set playing(playing) {
      if ('playing' in base.prototype) { super.playing = playing; }
      if (playing && !this._playing) {
        this.play();
      } else if (!playing && this._playing) {
        this.pause();
      }
    }

    /*
     * When the selected item changes (because of something this mixin did,
     * or was changed by an outside agent like the user), we wait a bit before
     * advancing to the next item. By triggering the next item this way,
     * we implicitly get a desirable behavior: if the user changes the selection
     * (e.g., in a carousel), we let them see that selection state for a while
     * before advancing the selection ourselves.
     */
    get selectedItem() {
      return super.selectedItem;
    }
    set selectedItem(item) {
      if ('selectedItem' in base.prototype) { super.selectedItem = item; }
      clearTimer(this);
      if (this.playing) {
        setTimer(this);
      }
    }

  }

  return TimerSelection;
};


function clearTimer(element) {
  if (element._timeout) {
    clearTimeout(element._timeout);
    element._timeout = null;
  }
}

function setTimer(element) {
  element._timeout = setTimeout(() => {
    selectNextWithWrap(element);
  }, 2000);
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
