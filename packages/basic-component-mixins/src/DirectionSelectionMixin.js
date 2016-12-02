import symbols from './symbols';


/* Exported function extends a base class with DirectionSelection. */
export default (base) => {

  /**
   * Mixin which maps direction semantics (goLeft, goRight, etc.) to selection
   * semantics (selectPrevious, selectNext, etc.).
   *
   * This mixin can be used in conjunction with
   * [KeyboardDirectionMixin](KeyboardDirectionMixin.md) (which maps keyboard
   * events to directions) and a mixin that handles selection like
   * [SingleSelectionMixin](SingleSelectionMixin.md).
   */
  class DirectionSelection extends base {

    [symbols.goDown]() {
      if (super[symbols.goDown]) { super[symbols.goDown](); }
      return this.selectNext();
    }

    [symbols.goEnd]() {
      if (super[symbols.goEnd]) { super[symbols.goEnd](); }
      return this.selectLast();
    }

    [symbols.goLeft]() {
      if (super[symbols.goLeft]) { super[symbols.goLeft](); }
      return this.selectPrevious();
    }

    [symbols.goRight]() {
      if (super[symbols.goRight]) { super[symbols.goRight](); }
      return this.selectNext();
    }

    [symbols.goStart]() {
      if (super[symbols.goStart]) { super[symbols.goStart](); }
      return this.selectFirst();
    }

    [symbols.goUp]() {
      if (super[symbols.goUp]) { super[symbols.goUp](); }
      return this.selectPrevious();
    }

    // Default implementation. This will typically be handled by other mixins.
    get selectedFraction() {
      return super.selectedFraction;
    }
    set selectedFraction(value) {
      if ('selectedFraction' in base.prototype) { super.selectedFraction = value; }
    }

    // Default implementation. This will typically be handled by other mixins.
    selectFirst() {
      if (super.selectFirst) { return super.selectFirst(); }
    }

    // Default implementation. This will typically be handled by other mixins.
    selectLast() {
      if (super.selectLast) { return super.selectLast(); }
    }

    // Default implementation. This will typically be handled by other mixins.
    selectNext() {
      if (super.selectNext) { return super.selectNext(); }
    }

    // Default implementation. This will typically be handled by other mixins.
    selectPrevious() {
      if (super.selectPrevious) { return super.selectPrevious(); }
    }

    // Map drag travel fraction to selection fraction.
    get travelFraction() {
      return super.travelFraction;
    }
    set travelFraction(value) {
      if ('travelFraction' in base.prototype) { super.travelFraction = value; }
      this.selectedFraction = value;
    }

  }

  return DirectionSelection;
};
