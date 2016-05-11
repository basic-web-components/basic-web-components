/* Exported function extends a base class with DirectionSelection. */
export default (base) => {

  /**
   * Mixin which maps direction semantics (goLeft, goRight, etc.) to selection
   * semantics (selectPrevious, selectNext, etc.).
   *
   * This mixin can be used in conjunction with the
   * [KeyboardDirection](KeyboardDirection.md) mixin (which maps keyboard events
   * to directions) and a mixin that handles selection like
   * [ItemsSelection](ItemsSelection.md).
   */
  class DirectionSelection extends base {

    goDown() {
      if (super.goDown) { super.goDown(); }
      return this.selectNext();
    }

    goEnd() {
      if (super.goEnd) { super.goEnd(); }
      return this.selectLast();
    }

    goLeft() {
      if (super.goLeft) { super.goLeft(); }
      return this.selectPrevious();
    }

    goRight() {
      if (super.goRight) { super.goRight(); }
      return this.selectNext();
    }

    goStart() {
      if (super.goStart) { super.goStart(); }
      return this.selectFirst();
    }

    goUp() {
      if (super.goUp) { super.goUp(); }
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
