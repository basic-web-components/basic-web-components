import symbols from '../src/symbols';


/* Exported function extends a base class with SelectionHighlight. */
export default (base) => {

  /**
   * Template mixin which applies standard highlight colors to a selected item.
   *
   * This mixin highlights textual items (e.g., in a list) in a standard way by
   * using the CSS `highlight` and `highlighttext` color values. These values
   * respect operating system defaults and user preferences, and hence are good
   * default values for highlight colors.
   *
   * This mixin expects a `selected` class to be applied to selected items. You
   * can use [ContentItemsMixin](ContentItemsMixin.md) for that purpose.
   */
  class SelectionHighlight extends base {

    get [symbols.template]() {
      const baseTemplate = super[symbols.template] || '';
      return `
        <style>
          :host([generic=""]) ::slotted(.selected) {
            background-color: highlight;
            color: highlighttext;
          }
        </style>
        ${baseTemplate}
      `;
    }

  }

  return SelectionHighlight;
};
