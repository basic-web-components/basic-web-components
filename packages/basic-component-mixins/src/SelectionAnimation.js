/* Exported function extends a base class with SelectionAnimation. */
export default (base) => {

  /**
   * Animates selection
   */
  class SelectionAnimation extends base {

    get selectedIndex() {
      return super.selectedIndex;
    }
    set selectedIndex(index) {
      if ('selectedIndex' in base) { super.selectedIndex = index; }
    }
  }

  return SelectionAnimation;
};
