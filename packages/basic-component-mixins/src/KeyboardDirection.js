/* Exported function extends a base class with KeyboardDirection. */
export default (base) => {

  /**
   * Mixin which maps direction keys (Left, Right, etc.) to direction semantics
   * (go left, go right, etc.).
   *
   * This mixin expects the component to invoke a `keydown` method when a key is
   * pressed. You can use the Keyboard mixin for that purpose, or wire up your
   * own keyboard handling and call `keydown` yourself.
   *
   * This mixin calls methods such as `goLeft` and `goRight`. You can define
   * what that means by implementing those methods yourself. If you want to use
   * direction keys to navigate a selection, use this mixin with the
   * DirectionSelection mixin.
   */
  class KeyboardDirection extends base {

    /**
     * Invoked when the user wants to go/navigate down.
     * The default implementation of this method does nothing.
     */
    goDown() {
      if (super.goDown) { return super.goDown(); }
    }

    /**
     * Invoked when the user wants to go/navigate to the end (e.g., of a list).
     * The default implementation of this method does nothing.
     */
    goEnd() {
      if (super.goEnd) { return super.goEnd(); }
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
     * Invoked when the user wants to go/navigate to the start (e.g., of a
     * list). The default implementation of this method does nothing.
     */
    goStart() {
      if (super.goStart) { return super.goStart(); }
    }

    /**
     * Invoked when the user wants to go/navigate up.
     * The default implementation of this method does nothing.
     */
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

  }

  return KeyboardDirection;
};
