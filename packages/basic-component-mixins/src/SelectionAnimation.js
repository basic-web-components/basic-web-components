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
      return item.animate(animation, animationOptions);
    }

    animateSelection(fromIndex, toIndex) {

      // if (this._players) {
      //   this._players.forEach((player, index) => {
      //     if (player) {
      //       console.log(`player ${index} exists`);
      //     }
      //   });
      // }

      let items = this.items;
      let itemCount = items.length;

      let { whole: wholeFrom, fraction: fromFraction } = getNumericParts(itemCount, fromIndex);
      let wholeTo = getNumericParts(itemCount, toIndex).whole;

      let steps = stepsToIndex(itemCount, this.selectionWraps, fromIndex, toIndex);

      // We'll need to animate one more item than the number of steps we take.
      // That is, to go 1 step, we're animating 3 items: the one leaving the
      // stage, the one taking center stage, and the one preparing to enter the
      // stage.
      let animateCount = Math.ceil(Math.abs(steps)) + 1;

      let forward = steps >= 0;
      let animation = forward ? this.animationForward : this.animationBackward;
      let indexStep = forward ? 1 : -1;
      let duration = this.animationDuration / animateCount;

      // Adjust starting point of animation based on whether we were in the
      // middle of a user-controlled drag.
      let startDelay = fromFraction === 0 ?
        0 :
        -Math.abs(fromFraction) * duration / 2;

      // Ensure the next item in the direction we've been traveling is in
      // position to enter the stage from the anticipated direction. We do this
      // first, so that if the item ends up being animated, the animation will
      // take precedence.
      // let nextUpIndex = keepIndexWithinBounds(itemCount, wholeFrom + indexStep * animateCount);
      // setPlayerFraction(this, nextUpIndex, 0);

      let itemIndex = wholeFrom;
      console.log(`animateSelection: steps ${steps}, animateCount ${animateCount}, from ${itemIndex}`);
      for (let i = 0; i < itemCount; i++) {
        itemIndex = keepIndexWithinBounds(itemCount, itemIndex);
        let item = items[itemIndex];
        if (i < animateCount) {
          showItem(item, true);
          if (this._players && this._players[itemIndex]) {
            // console.log(`resetting player ${itemIndex}`);
            this._players[itemIndex] = null;
          }
          let delay = startDelay + (i - 1) * duration/2;
          let endDelay = itemIndex === wholeTo ?
            -duration/2 :   // Stop halfway through.
            0;              // Play animation until end.
          let player = this.animateItem(item, animation, duration, delay, endDelay);
          if (i === animateCount - 1) {
            // When last animation completes, show next item in the direction
            // we're going.
            let nextUpIndex = keepIndexWithinBounds(itemCount, itemIndex + indexStep);
            let fraction = forward ? 0 : 1;
            player.onfinish = event => {
              setPlayerFraction(this, nextUpIndex, fraction);
              showItem(items[nextUpIndex], true);
            };
          }
        } else {
          showItem(item, false);
        }
        itemIndex += indexStep;
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
      resetPlayers(this);
      this.update();
    }

    createdCallback() {
      if (super.createdCallback) { super.createdCallback(); }
      this._showTransition = true;
    }

    itemsChanged() {
      if (super.itemsChanged) { super.itemsChanged(); }
      resetPlayers(this);
      this.update();
    }

    get position() {
      return super.position;
    }
    set position(position) {
      if ('position' in base.prototype) { super.position = position; }
      this.update(this.selectedIndex, position);
    }

    get selectedItem() {
      return super.selectedItem;
    }
    set selectedItem(item) {
      if ('selectedItem' in base.prototype) { super.selectedItem = item; }
      this.update();
    }

    // TODO: Make this a getter/setter property.
    showTransition(show) {
      if (super.showTransition) { super.showTransition(show); }
      this._showTransition = show;
    }

    showSelection(toIndex) {
      let items = this.items;
      let itemCount = items.length;
      let allowWrap = this.selectionWraps;
      let { whole: wholeTo, fraction: toFraction } = getNumericParts(itemCount, toIndex);
      // TODO: Handle case where there are fewer than 3 items.
      console.log(`showSelection: wholeTo ${wholeTo}, toFraction ${toFraction}`);
      items.forEach((item, itemIndex) => {
        let steps = stepsToIndex(itemCount, allowWrap, wholeTo, itemIndex);
        if (Math.abs(steps - Math.round(toFraction)) <= 1) {
          showItem(item, true);
          // We want
          // steps      animation fraction
          // -1         1
          // 0          .5
          // 1          0
          // We also want to factor in the selection fraction.
          let animationFraction = (1 - steps + toFraction) / 2;
          setPlayerFraction(this, itemIndex, animationFraction);
        } else {
          showItem(item, false);
        }
      });
    }

    update(selectedIndex=this.selectedIndex, selectionFraction=this.position) {
      if (selectedIndex < 0) {
        // TODO: Handle no selection.
        return;
      }
      selectedIndex += selectionFraction;
      if (this._showTransition && this._previousSelectedIndex != null &&
          this._previousSelectedIndex !== selectedIndex) {
        console.log(`update: calling animateSelection`);
        this.animateSelection(this._previousSelectedIndex, selectedIndex);
      } else {
        console.log(`update: calling showSelection`);
        this.showSelection(selectedIndex);
      }
      this._previousSelectedIndex = selectedIndex;
    }
  }

  return SelectionAnimation;
};


function getNumericParts(bound, n) {
  n = keepIndexWithinBounds(bound, n);
  let whole = Math.trunc(n);
  let fraction = n - whole;
  return { whole, fraction };
}

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

function showItem(item, flag) {
  item.style.display = flag ? '' : 'none';
}

// Figure out how many steps it will take to go from fromIndex to toIndex.
// To go from item 3 to item 4 is one step.
// If wrapping is allowed, then going from the last item to the first will take
// one step (forward), and going from the first item to the last will take one
// step (backward).
function stepsToIndex(length, allowWrap, fromIndex, toIndex) {
  let steps = toIndex - fromIndex;
  let wrapSteps = length - Math.abs(steps);
  if (allowWrap && wrapSteps <= 1) {
    // Special case
    steps = steps < 0 ?
      1 : // Wrap forward from last item to first.
      -1; // Wrap backward from first item to last.
  }
  return steps;
}
