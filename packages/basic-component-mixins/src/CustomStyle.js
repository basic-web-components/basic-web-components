export default (base) => {

  /**
   * Experimental mixin for custom styling via an inline attribute.
   */
  class CustomStyle extends base {

    get customStyle() {
      return this._customStyle;
    }
    set customStyle(customStyle) {

      if ('customStyle' in base) { super.customStyle = customStyle; }

      // Find the existing style element.
      let styleElement = this.shadowRoot.querySelector('style');
      if (!styleElement) {
        // Create a new style element.
        styleElement = document.createElement('style');
        this.shadowRoot.appendChild(styleElement);
      }
      if (!this._originalStyle) {
        this._originalStyle = styleElement.textContent;
      }

      // Remember just the custom portion of the style so we can serve it back
      // if requested.
      this._customStyle = customStyle;

      // Append the custom style to the existing style.
      styleElement.textContent = `${this._originalStyle}\n${customStyle}`;
    }

  }

  return CustomStyle;
};
