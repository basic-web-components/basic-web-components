/**
 * @class DirectionSelection
 * @classdesc Mixin which maps direction semantics (goLeft, goRight, etc.) to
 * selection semantics (selectPrevious, selectNext, etc.).
 *
 * This mixin can be used in conjunction with the KeyboardDirection mixin
 * (which maps keyboard events to directions) and a mixin that handles selection
 * like ItemsSelection.
 */


export default (base) => class DirectionSelection extends base {

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

  // Default implementations. These will typically be handled by other mixins.
  selectFirst() {
    if (super.selectFirst) { return super.selectFirst(); }
  }
  selectLast() {
    if (super.selectLast) { return super.selectLast(); }
  }
  selectNext() {
    if (super.selectNext) { return super.selectNext(); }
  }
  selectPrevious() {
    if (super.selectPrevious) { return super.selectPrevious(); }
  }

};
