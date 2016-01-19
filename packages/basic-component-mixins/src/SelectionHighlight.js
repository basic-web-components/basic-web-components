/**
 * @class SelectionHighlight
 * @classdesc Mixin which applies standard highlight colors to a selected item
 */
 

export default (base) => class SelectionHighlight extends base {

  applySelection(item, selected) {
    if (super.applySelection) { super.applySelection(item, selected); }
    item.style.backgroundColor = selected ? 'highlight' : '';
    item.style.color = selected ? 'highlighttext' : '';
  }

};
