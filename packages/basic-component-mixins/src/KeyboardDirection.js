/**
 * @class KeyboardDirection
 * @classdesc Mixin which maps direction keys (Left, Right, etc.) to direction
 * semantics (goLeft, goRight, etc.)
 */


export default (base) => class KeyboardDirection extends base {

  // Default implementations. These will typically be handled by other mixins.
  goDown() {
    if (super.goDown) { return super.goDown(); }
  }
  goEnd() {
    if (super.goEnd) { return super.goEnd(); }
  }
  goLeft() {
    if (super.goLeft) { return super.goLeft(); }
  }
  goRight() {
    if (super.goRight) { return super.goRight(); }
  }
  goStart() {
    if (super.goStart) { return super.goStart(); }
  }
  goUp() {
    if (super.goUp) { return super.goUp(); }
  }

  keydown(event) {
    let handled;
    // Ignore Left/Right keys when metaKey or altKey modifier is also pressed,
    // as the user may be trying to navigate back or forward in the browser.
    switch (event.keyCode) {
      case 35: // End
        handled = this.goEnd();
        break;
      case 36: // Home
        handled = this.goStart();
        break;
      case 37: // Left
        if (!event.metaKey && !event.altKey) {
          handled = this.goLeft();
        }
        break;
      case 38: // Up
        handled = event.altKey ? this.goStart() : this.goUp();
        break;
      case 39: // Right
        if (!event.metaKey && !event.altKey) {
          handled = this.goRight();
        }
        break;
      case 40: // Down
        handled = event.altKey ? this.goEnd() : this.goDown();
        break;
    }
    // Prefer mixin result if it's defined, otherwise use base result.
    return handled || (super.keydown && super.keydown(event));
  }

};
