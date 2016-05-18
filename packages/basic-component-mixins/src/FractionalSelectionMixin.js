// TODO: Drop use of "Mixin" in name.

import createSymbol from './createSymbol';

const selectedFractionSymbol = createSymbol('selectedFraction');


/* Exported function extends a base class with FractionalSelectionMixin. */
export default (base) => {

  class FractionalSelectionMixin extends base {

    attachedCallback() {
      if (super.attachedCallback) { super.attachedCallback(); }
      this.selectedFraction = 0;
    }

    /**
     * A fractional value indicating how far the user has currently advanced to
     * the next/previous item. E.g., a `selectedFraction` of 3.5 indicates the
     * user is halfway between items 3 and 4.
     *
     * @type {number}
     */
    get selectedFraction() {
      return this[selectedFractionSymbol];
    }
    set selectedFraction(value) {
      if ('selectedFraction' in base.prototype) { super.selectedFraction = value; }
      this[selectedFractionSymbol] = value;
      let event = new CustomEvent('selection-fraction-changed');
      this.dispatchEvent(event);
    }

  }

  return FractionalSelectionMixin;
};
