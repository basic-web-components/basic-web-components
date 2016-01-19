/**
 * @class TimerSelection
 * @classdesc Mixin provides for automatic timed changes in selection, as in a
 * automated slideshow
 */


export default (base) => class TimerSelection extends base {

  contentChanged() {
    if (super.contentChanged) { super.contentChanged(); }
    this.play();
  }

  /**
   * Begin automatic progression of the selection.
   *
   * @method play
   */
  play() {
    if (super.play) { super.play(); }
    this._playing = true;
    setTimer(this);
  }

  /**
   * Pause automatic progression of the selection.
   *
   * @method pause
   */
  pause() {
    if (super.pause) { super.pause(); }
    clearTimer(this);
    this._playing = false;
  }

  /**
   * True if the selection is being automatically advanced.
   *
   * @property playing
   * @type Boolean
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

  // Whether the user has selected an item manually, or we've automatically
  // advanced the selection, we wait for a bit before advancing again.
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

};



function clearTimer(element) {
  if (element._timeout) {
    clearTimeout(element._timeout);
    element._timeout = null;
  }
}

function setTimer(element) {
  element._timeout = setTimeout(selectNextWithWrap.bind(this), 2000);
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
