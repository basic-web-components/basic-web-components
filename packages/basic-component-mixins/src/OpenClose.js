import createSymbol from './createSymbol';
import safeAttributes from './safeAttributes';


// Symbols for private data members on an element.
const closedSymbol = createSymbol('closed');


/* Exported function extends a base class with OpenClose. */
export default (base) => {

  /**
   * Mixin which adds close/open semantics.
   *
   * This mixin does not produce any user-visible effects. Instead it applies
   * a `basic-closed` CSS class to the component host if the host is
   * closed, and a `basic-opened` class if opened. It also invokes a `render`
   * function that can be overridden to apply custom effects.
   */
  class OpenClose extends base {

    constructor() {
      super();
      // Set defaults.
      if (typeof this.closed === 'undefined') {
        this.closed = this.defaults.closed;
      }
    }

    /**
     * Close the component.
     *
     * This is equivalent to setting the `closed` property to true.
     */
    close() {
      this.closed = true;
    }

    /**
     * True if the component is curently closed.
     *
     * @type {boolean}
     * @default false
     */
    get closed() {
      return this[closedSymbol];
    }
    set closed(value) {
      let previousClosed = this[closedSymbol];
      this[closedSymbol] = value;
      if ('closed' in base.prototype) { super.closed = value; }
      if (value !== previousClosed) {
        this.render(value);

        let event = new CustomEvent('closed-changed');
        this.dispatchEvent(event);
      }
    }

    connectedCallback() {
      if (super.connectedCallback) { super.connectedCallback(); }
      safeAttributes.connected(this);
      this.render(this.closed);
    }

    get defaults() {
      let defaults = super.defaults || {};
      defaults.closed = false;
      return defaults;
    }

    /**
     * Open the component.
     *
     * This is equivalent to setting the `closed` property to false.
     */
    open() {
      this.closed = false;
    }

    /**
     * Perform custom rendering of the close/open transition.
     *
     * You can override this method to perform custom effects. If you do so,
     * be sure to invoke `super()` in your implementation to get the baseline
     * behavior.
     *
     * @param {boolean} closing - True if the component is being closed,
     *        false if it's being opened.
     */
    render(closing) {
      if (super.render) { super.render(); }
      safeAttributes.toggleClass(this, 'basic-closed', closing);
      safeAttributes.toggleClass(this, 'basic-opened', !closing);
      safeAttributes.setAttribute(this, 'aria-expanded', !closing);
    }

    /**
     * Toggle the component's open/closed state.
     */
    toggle() {
      this.closed = !this.closed;
    }

  }

  return OpenClose;
};
