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

      if (this._players) {
        this._players.forEach((player, index) => {
          if (player) {
            console.log(`player ${index} exists`);
          }
        });
      }

      // Existing players will need to be recreated next time they're needed.
      // resetPlayers(this);

      let items = this.items;
      let itemCount = items.length;
      let steps = stepsToIndex(itemCount, this.selectionWraps, fromIndex, toIndex);

      // We'll need to animate one more item than the number of steps we take.
      // That is, to go 1 step, we're animating 2 items: the one leaving the
      // stage, and the one taking center stage.
      let animateCount = Math.abs(steps) + 1;

      let forward = steps >= 0;
      let animation = forward ? this.animationForward : this.animationBackward;
      let indexStep = forward ? 1 : -1;
      let duration = this.animationDuration / animateCount;

      // Adjust starting point of animation based on whether we were in the
      // middle of a user-controlled drag.
      let position = this.position;
      let startDelay = position === 0 ?
        0 :
        -Math.abs(position) * duration / 2;

      // Ensure the next item in the direction we've been traveling is in
      // position to enter the stage from the anticipated direction. We do this
      // first, so that if the item ends up being animated, the animation will
      // take precedence.
      let nextUpIndex = keepIndexWithinBounds(itemCount, fromIndex + indexStep * animateCount);
      setPlayerFraction(this, nextUpIndex, 0);

      let index = fromIndex;
      for (let i = 0; i < animateCount; i++) {
        if (this._players && this._players[index]) {
          console.log(`resetting player ${index}`);
          this._players[index] = null;
        } else {
        }
        let delay = startDelay + (i - 1) * duration/2;
        let endDelay = index === toIndex ?
          -duration/2 :   // Stop halfway through.
          0;              // Play full animation.
        this.animateItem(items[index], animation, duration, delay, endDelay);
        index = keepIndexWithinBounds(itemCount, index + indexStep);
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
    }

    get animationForward() {
      return this._animationForward || super.animationForward;
    }
    set animationForward(animation) {
      if ('animationForward' in base.prototype) { super.animationForward = animation; }
      this._animationForward = animation;
      this.resetItemPositions();
    }

    createdCallback() {
      if (super.createdCallback) { super.createdCallback(); }
      this._showTransition = true;
    }

    itemsChanged() {
      if (super.itemsChanged) { super.itemsChanged(); }
      resetPlayers(this);
      this.resetItemPositions();
    }

    get position() {
      return super.position;
    }
    set position(position) {
      if ('position' in base.prototype) { super.position = position; }
      let selectedIndex = this.selectedIndex;
      console.log(`position ${position}, selectedIndex ${selectedIndex}`);
      if (selectedIndex >= 0) {
        if (this._showTransition && this._previousSelectedIndex != null) {
          this.animateSelection(this._previousSelectedIndex, selectedIndex);
        } else {
          this.snapSelection(selectedIndex);
        }
      }
    }

    // Move items to their initial positions, based on their spatial relationship
    // to the selected item.
    resetItemPositions() {
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
        setPlayerFraction(this, index, fraction);
      });
    }

    get selectedItem() {
      return super.selectedItem;
    }
    set selectedItem(item) {
      if ('selectedItem' in base.prototype) { super.selectedItem = item; }
      let index = this.items.indexOf(item);
      if (this._showTransition && this._previousSelectedIndex != null) {
        this.animateSelection(this._previousSelectedIndex, index);
      } else {
        this.resetItemPositions();
      }
      this._previousSelectedIndex = index;
    }

    // TODO: Make this a getter/setter property.
    showTransition(show) {
      if (super.showTransition) { super.showTransition(show); }
      this._showTransition = show;
    }

    snapSelection(toIndex) {
      let position = this.position;
      let indexBase = toIndex + Math.trunc(position);
      let positionFraction = position - Math.trunc(position);
      let items = this.items;
      let itemCount = items.length;
      // TODO: Handle case where there are fewer than 3 items.
      for (let i = -1; i <= 1; i++) {
        // We want
        // position   fraction
        // -1         0
        // 0          .5
        // 1          1
        // We also need to offset relative to the selected index.
        let fraction = (-i + positionFraction + 1) / 2;
        let index = keepIndexWithinBounds(itemCount, indexBase + i);
        setPlayerFraction(this, index, fraction);
      }
    }
  }

  return SelectionAnimation;
};


function getPlayer(element, index) {
  if (element._players == null) {
    // Not ready yet;
    return null;
  }
  let player = element._players[index];
  if (!player) {
    let item = element.items[index];
    player = item.animate(element.animationForward, {
      duration: element.animationDuration,
      fill: 'both'
    });
    player.pause();
    element._players[index] = player;
  }
  return player;
}

// Return a modification of the given animation, where the values in the first
// key frame are replaced with the current values of the corresponding
// properties on the indicated target.
// function incrementalAnimation(animation, target) {
//   let firstFrame = animation[0];
//   let newFrame = {};
//   let style = getComputedStyle(target);
//   Object.keys(firstFrame).forEach(property => {
//     newFrame[property] = style[property];
//   });
//   let newAnimation = animation.slice();
//   newAnimation[0] = newFrame;
//   return newAnimation;
// }

// Return the index, ensuring it stays between 0 and the given length.
function keepIndexWithinBounds(length, index) {
  // Handle possibility of negative mod.
  // See http://stackoverflow.com/a/18618250/76472
  return ((index % length) + length) % length;
}

function resetPlayers(element) {
  console.log(`resetting players`);
  element._players = new Array(element.items.length);
}

// Pause the indicated player and have it show the animation at the given
// fraction (between 0 and 1) of the way through the animation.
function setPlayerFraction(element, index, fraction) {
  console.log(`setting ${index} to ${fraction}`);
  let player = getPlayer(element, index);
  if (player) {
    let duration = element.animationDuration;
    player.currentTime = fraction * duration;
  }
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
