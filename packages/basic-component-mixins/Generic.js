/**
 * Mixin that allows a component to support a "generic" style: a minimalist
 * style that can easily be removed to reset its visual appearance to a baseline
 * state.
 *
 * By default, a component should provide a minimal visual presentation that
 * allows the component to function. However, the more styling the component
 * provides by default, the harder it becomes to get the component to fit in
 * in other settings. Each CSS rule has to be overridden. Worse, new CSS rules
 * added to the default style won't be overridden by default, making it hard to
 * know whether a new version of a component will still look okay.
 *
 * As a compromise, the simple Polymer behavior here defines a "generic"
 * attribute. This attribute is normally set by default, and styles can be
 * written that apply only when the generic attribute is set. This allows the
 * construction of CSS rules that will only apply to generic components like
 *
 *     :host([generic=""]) {
 *       ...
 *     }
 *
 * This makes it easy to remove all default styling -- set the generic attribute
 * to false, and all default styling will be removed.
 *
 * @class Generic
 */

export default (base) => class Generic extends base {

  createdCallback() {
    if (super.createdCallback) { super.createdCallback(); }
    this.generic = this.getAttribute('generic') || true;
  }

  /**
   * True if the component would like to receive generic styling.
   *
   * This property is true by default — set it to false to turn off all
   * generic styles. This makes it easier to apply custom styling; you won't
   * have to explicitly override styling you don't want.
   *
   * @property generic
   * @type Boolean
   * @default true
   */
  get generic() {
    return this._generic;
  }
  set generic(value) {
    if ('generic' in base.prototype) { super.generic = value; }
    // We roll our own attribute setting so that an explicitly false value shows
    // up as generic="false".
    if (typeof value === 'string') {
      value = (value !== 'false');
    }
    this._generic = value;
    if (value === false) {
      // Explicitly use false string.
      this.setAttribute('generic', 'false');
    } else if (value == null) {
      // Explicitly remove attribute.
      this.removeAttribute('generic');
    } else {
      // Use the empty string to get attribute to appear with no value.
      this.setAttribute('generic', '');
    }
  }

};
