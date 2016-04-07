/* Exported function extends a base class with SelectionAnimation. */
export default (base) => {

  /**
   * Animates selection
   *
   * Expects: animations
   */
  class SelectionAnimation extends base {

    get position() {
      return super.position;
    }
    set position(index) {
      if ('position' in base.prototype) { super.position = index; }
    }

    get selectedIndex() {
      return super.selectedIndex;
    }
    set selectedIndex(index) {
      if ('selectedIndex' in base.prototype) {
        super.selectedIndex = index;
      }
    }
  }

  return SelectionAnimation;
};
