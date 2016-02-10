/* Exported function extends a base class with Collapsible. */
export default (base) => {

  /**
   * Mixin which adds collapse/expand semantics.
   *
   * This mixin does not produce any user-visible effects. Instead it applies
   * a `basic-collapsed` CSS class to the component host if the host is
   * collapsed. It also invokes a `render` function that can be overridden to
   * apply custom effects.
   */
  class Collapsible extends base {

    attachedCallback() {
      if (super.attachedCallback) { super.attachedCallback(); }
      this.render(this.collapsed);
    }

    createdCallback() {
      if (super.createdCallback) { super.createdCallback(); }
      this._collapsed = false;
    }

    /**
     * Collapse the component.
     *
     * This is equivalent to setting the `collapsed` property to true.
     */
    collapse() {
      this.collapsed = true;
    }

    /**
     * True if the component is curently collapsed.
     *
     * @type {boolean}
     * @default false
     */
    get collapsed() {
      return this._collapsed;
    }
    set collapsed(value) {
      if ('collapsed' in base.prototype) { super.collapsed = value; }
      if (this._collapsed !== value) {
        this._collapsed = value;
        this.render(value);

        let event = new CustomEvent('collapsed-changed');
        this.dispatchEvent(event);
      }
    }

    /**
     * Expand the component.
     *
     * This is equivalent to setting the `collapsed` property to false.
     */
    expand() {
      this.collapsed = false;
    }

    /**
     * Perform custom rendering of the collapse/expand transition.
     *
     * You can override this method to perform custom effects. If you do so,
     * be sure to invoke `super()` in your implementation to get the baseline
     * behavior.
     *
     * @param {boolean} collapsing - True if the component is being collapsed,
     *        false if it's being expanded.
     */
    render(collapsing) {
      // Would like to use classList.toggle() here, but IE 11 doesn't have it.
      if (collapsing) {
        this.classList.add('basic-collapsed');
      } else {
        this.classList.remove('basic-collapsed');
      }
      this.setAttribute('aria-expanded', !collapsing);
    }

    /**
     * Toggle the component's collapsed state.
     */
    toggle() {
      this.collapsed = !this.collapsed;
    }

  }

  return Collapsible;
};
