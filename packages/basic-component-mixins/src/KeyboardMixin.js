import symbols from './symbols';


/* Exported function extends a base class with Keyboard. */
export default (base) => {

  /**
   * Mixin which manages the keydown handling for a component.
   *
   * This mixin handles several keyboard-related features.
   *
   * First, it wires up a single keydown event handler that can be shared by
   * multiple mixins on a component. The event handler will invoke a `keydown`
   * method with the event object, and any mixin along the prototype chain that
   * wants to handle that method can do so.
   *
   * If a mixin wants to indicate that keyboard event has been handled, and that
   * other mixins should *not* handle it, the mixin's `keydown` handler should
   * return a value of true. The convention that seems to work well is that a
   * mixin should see if it wants to handle the event and, if not, then ask the
   * superclass to see if it wants to handle the event. This has the effect of
   * giving the mixin that was applied last the first chance at handling a
   * keyboard event.
   *
   * Example:
   *
   *     [symbols.keydown](event) {
   *       let handled;
   *       switch (event.keyCode) {
   *         // Handle the keys you want, setting handled = true if appropriate.
   *       }
   *       // Prefer mixin result if it's defined, otherwise use base result.
   *       return handled || (super[symbols.keydown] && super[symbols.keydown](event));
   *     }
   *
   * A second feature provided by this mixin is that it implicitly makes the
   * component a tab stop if it isn't already, by setting `tabIndex` to 0. This
   * has the effect of adding the component to the tab order in document order.
   */
  class Keyboard extends base {

    constructor() {
      super();
      this.addEventListener('keydown', event => {
        const handled = this[symbols.keydown](event);
        if (handled) {
          event.preventDefault();
          event.stopPropagation();
        }
      });
    }

    connectedCallback() {
      if (super.connectedCallback) { super.connectedCallback(); }
      if (this.getAttribute('tabindex') == null) {
        this.setAttribute('tabindex', this[symbols.defaults].tabindex);
      }
    }

    get [symbols.defaults]() {
      const defaults = super[symbols.defaults] || {};
      // The default tab index is 0 (document order).
      defaults.tabindex = 0;
      return defaults;
    }

    /**
     * Handle the indicated keyboard event.
     *
     * The default implementation of this method does nothing. This will
     * typically be handled by other mixins.
     *
     * @param {KeyboardEvent} event - the keyboard event
     * @return {boolean} true if the event was handled
     */
    [symbols.keydown](event) {
      if (super[symbols.keydown]) { return super[symbols.keydown](event); }
    }

  }

  return Keyboard;
};
