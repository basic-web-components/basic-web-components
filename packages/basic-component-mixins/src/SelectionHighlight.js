/**
 * @class SelectionHighlight
 * @classdesc Mixin which applies standard highlight colors to a selected item.
 *
 * This mixin highlights textual items (e.g., in a list) in a standard way by
 * using the CSS `highlight` and `highlighttext` color values. These values
 * respect operating system defaults and user preferences, and hence are good
 * default values for highlight colors.
 *
 * This mixin expects an `applySelection` method to be called on an item when
 * its selected state changes. You can use the ItemsSelection mixin for that
 * purpose.
 */


export default (base) => class SelectionHighlight extends base {

  applySelection(item, selected) {
    if (super.applySelection) { super.applySelection(item, selected); }
    item.style.backgroundColor = selected ? 'highlight' : '';
    item.style.color = selected ? 'highlighttext' : '';
  }

};
