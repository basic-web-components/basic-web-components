/* Exported function extends a base class with SelectionAnimation. */
export default (base) => {

  /**
   * Animates selection
   *
   * Expects: selectedItem, animation, animationDuration properties
   */
  class SelectionAnimation extends base {

    animateItem(item, animation, duration, delay, endDelay) {
      let animationOptions = {
        delay: delay,
        endDelay: endDelay || 0,
        duration: duration,
        fill: 'both'
      };
      item.animate(animation, animationOptions);
    }

    animateSelection(fromIndex, toIndex) {

      fromIndex = fromIndex >= 0 ? fromIndex : toIndex;
      let items = this.items;
      let itemCount = items.length;
      let steps = stepsToIndex(itemCount, this.selectionWraps, fromIndex, toIndex);

      // We'll need to animate one more item than the number of steps we take.
      // That is, to go 1 step, we're animating 2 items: the one leaving, and the
      // one entering.
      let animateCount = Math.abs(steps) + 1;

      let forward = steps >= 0;
      let animation = forward ? this.animationForward : this.animationBackward;
      let indexStep = forward ? 1 : -1;
      let duration = this.animationDuration / animateCount;

      let index = fromIndex;
      for (let i = 0; i < animateCount; i++) {
        let delay = (i - 1) * duration/2;
        let endDelay = index === toIndex ?
          -duration/2 :   // Stop halfway through.
          0;              // Play full animation.
        this.animateItem(items[index], animation, duration, delay, endDelay);
        index += indexStep;
        // Ensure we stay in bounds, handling possibility of negative mod.
        // See http://stackoverflow.com/a/18618250/76472
        index = ((index % itemCount) + itemCount) % itemCount;
      }
    }

    /**
     * The animation that plays for an item when moving backward in the sequence.
     *
     * See the `animationForward` property for details.
     *
     * If no `animationBackward` property is defined, this animation will default
     * to the reverse of the `animationForward` animation.
     *
     * @type {cssRules[]}
     */
    get animationBackward() {
      return this._animationBackward || this.animationForward.slice().reverse();
    }
    set animationBackward(animation) {
      this._animationBackward = animation;
      this.resetItemPositions();
    }

    itemsChanged() {
      if (super.itemsChanged) { super.itemsChanged(); }
      this.resetItemPositions();
    }

    // get position() {
    //   return super.position;
    // }
    // set position(index) {
    //   if ('position' in base.prototype) { super.position = index; }
    // }

    // Move items to their initial positions, based on their spatial relationship
    // to the selected item.
    resetItemPositions() {
      let animation = this.animationForward;
      let duration = this.animationDuration;
      let selectedIndex = this.selectedIndex;
      let itemCount = this.items.length;
      let allowWrap = this.selectionWraps;
      this.items.forEach((item, index) => {
        // We want to position items with respect to the selected item, so for
        // each item we calculate how many steps it would take to get from the
        // selected item to that item.
        let steps = stepsToIndex(itemCount, allowWrap, selectedIndex, index);
        let fraction = steps === 0 ?
          0.5 :   // Halfway through animation, i.e., center stage.
          steps > 0 ?
            0:    // Offstage next
            1;    // Offstage previous
        let time = fraction*duration;
        applyAnimationFrame(animation, duration, item, time);
      });
    }

    get selectedItem() {
      return super.selectedItem;
    }
    set selectedItem(item) {
      if ('selectedItem' in base.prototype) { super.selectedItem = item; }
      let index = this.items.indexOf(item);
      this.animateSelection(this._previousSelectedIndex, index);
      this._previousSelectedIndex = index;
    }
  }

  return SelectionAnimation;
};


// Apply the animation to the item at the indicated time.
function applyAnimationFrame(animation, duration, item, time) {
  let delay = -time;
  let endDelay = -(duration - time);
  item.animate(animation, {
    duration: duration,
    delay: delay,
    endDelay: endDelay,
    fill: 'both'
  });
}

// Figure out how many steps it will take to go from fromIndex to toIndex.
// To go from item 3 to item 4 is one step.
// If wrapping is allowed, then going from the last item to the first will take
// one step (forward), and going from the first item to the last will take one
// step (backward).
function stepsToIndex(length, allowWrap, fromIndex, toIndex) {
  let steps = toIndex - fromIndex;
  let wrapSteps = length - Math.abs(steps);
  if (allowWrap && wrapSteps === 1) {
    // Special case
    steps = steps < 0 ?
      1 : // Wrap forward from last item to first.
      -1; // Wrap backward from first item to last.
  }
  return steps;
}
