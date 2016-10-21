/* Exported function extends a base class with SelectionHighlight. */
export default (base) => {

  /**
   * Mixin which applies standard highlight colors to a selected item.
   *
   * This mixin highlights textual items (e.g., in a list) in a standard way by
   * using the CSS `highlight` and `highlighttext` color values. These values
   * respect operating system defaults and user preferences, and hence are good
   * default values for highlight colors.
   *
   * This mixin expects a `selected` class to be applied to selected items. You
   * can use the [ContentAsItems](ContentAsItems.md) mixin for that purpose.
   */
  class SelectionHighlight extends base {

    constructor() {
      super();
      if (this.shadowRoot) {
        const style = document.createElement('style');
        style.innerHTML = `
          ::slotted(.selected) {
            background-color: highlight;
            color: highlighttext;
          }
        `;
        this.shadowRoot.appendChild(style);
      }
    }

  }

  return SelectionHighlight;
};
