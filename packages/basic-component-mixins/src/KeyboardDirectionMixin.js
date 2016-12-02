import createSymbol from './createSymbol';
import symbols from './symbols';


// Symbols for private data members on an element.
const navigationAxisSymbol = createSymbol('navigationAxis');


/* Exported function extends a base class with KeyboardDirection. */
export default (base) => {

  /**
   * Mixin which maps direction keys (Left, Right, etc.) to direction semantics
   * (go left, go right, etc.).
   *
   * This mixin expects the component to invoke a `keydown` method when a key is
   * pressed. You can use [KeyboardMixin](KeyboardMixin.md) for that
   * purpose, or wire up your own keyboard handling and call `keydown` yourself.
   *
   * This mixin calls methods such as `goLeft` and `goRight`. You can define
   * what that means by implementing those methods yourself. If you want to use
   * direction keys to navigate a selection, use this mixin with
   * [DirectionSelectionMixin](DirectionSelectionMixin.md).
   */
  class KeyboardDirection extends base {

    constructor() {
      super();
      // Set defaults.
      if (typeof this.navigationAxis === 'undefined') {
        this.navigationAxis = this[symbols.defaults].navigationAxis;
      }
    }

    get [symbols.defaults]() {
      const defaults = super[symbols.defaults] || {};
      defaults.navigationAxis = 'both';
      return defaults;
    }

    /**
     * Invoked when the user wants to go/navigate down.
     * The default implementation of this method does nothing.
     */
    [symbols.goDown]() {
      if (super[symbols.goDown]) { return super[symbols.goDown](); }
    }

    /**
     * Invoked when the user wants to go/navigate to the end (e.g., of a list).
     * The default implementation of this method does nothing.
     */
    [symbols.goEnd]() {
      if (super[symbols.goEnd]) { return super[symbols.goEnd](); }
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
     * Invoked when the user wants to go/navigate to the start (e.g., of a
     * list). The default implementation of this method does nothing.
     */
    [symbols.goStart]() {
      if (super[symbols.goStart]) { return super[symbols.goStart](); }
    }

    /**
     * Invoked when the user wants to go/navigate up.
     * The default implementation of this method does nothing.
     */
    [symbols.goUp]() {
      if (super[symbols.goUp]) { return super[symbols.goUp](); }
    }

    /**
     * Indicates the direction of permitted navigation with the keyboard.
     *
     * Accepted values are "horizontal", "vertical", or "both" (the default).
     * If this property is "horizontal", the Up Arrow and Down Arrow keys will
     * be ignored. Conversely, if this is "vertical", the Left Arrow and Right
     * Arrow keys will be ignored.
     *
     * @type {string}
     */
    get navigationAxis() {
      return this[navigationAxisSymbol];
    }
    set navigationAxis(value) {
      this[navigationAxisSymbol] = value;
      if ('navigationAxis' in base.prototype) { super.navigationAxis = value; }
    }

    [symbols.keydown](event) {
      let handled;

      const axis = this.navigationAxis;
      const horizontal = (axis === 'horizontal' || axis === 'both');
      const vertical = (axis === 'vertical' || axis === 'both');

      // Ignore Left/Right keys when metaKey or altKey modifier is also pressed,
      // as the user may be trying to navigate back or forward in the browser.
      switch (event.keyCode) {
        case 35: // End
          handled = this[symbols.goEnd]();
          break;
        case 36: // Home
          handled = this[symbols.goStart]();
          break;
        case 37: // Left
          if (horizontal && !event.metaKey && !event.altKey) {
            handled = this[symbols.goLeft]();
          }
          break;
        case 38: // Up
          if (vertical) {
            handled = event.altKey ? this[symbols.goStart]() : this[symbols.goUp]();
          }
          break;
        case 39: // Right
          if (horizontal && !event.metaKey && !event.altKey) {
            handled = this[symbols.goRight]();
          }
          break;
        case 40: // Down
          if (vertical) {
            handled = event.altKey ? this[symbols.goEnd]() : this[symbols.goDown]();
          }
          break;
      }
      // Prefer mixin result if it's defined, otherwise use base result.
      return handled || (super[symbols.keydown] && super[symbols.keydown](event));
    }

  }

  return KeyboardDirection;
};
