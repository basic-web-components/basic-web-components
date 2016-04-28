/* Exported function extends a base class with SelectionAnimation. */
export default (base) => {

  /**
   * Animates selection
   *
   * Expects: selectedItem property.
   */
  class SelectionAnimation extends base {

    animateSelection(fromIndex, toIndex) {

      let items = this.items;
      let itemCount = items.length;

      let { whole: wholeFrom, fraction: fromFraction } = getNumericParts(itemCount, fromIndex);
      let wholeTo = getNumericParts(itemCount, toIndex).whole;

      let steps = stepsToIndex(itemCount, this.selectionWraps, fromIndex, toIndex);

      // We'll need to animate one more item than the number of steps we take.
      // That is, to go 1 step, we're animating 2 items: the one leaving the
      // stage, and the one taking center stage.
      let animateCount = Math.ceil(Math.abs(steps)) + 1;

      let forward = steps >= 0;
      let keyframes = this.selectionAnimationKeyframes;
      let direction = forward ? 'normal': 'reverse';
      let indexStep = forward ? 1 : -1;
      let duration = this.selectionAnimationDuration / animateCount;

      // Adjust starting point of animation based on whether we were in the
      // middle of a user-controlled drag.
      let startDelay = fromFraction === 0 ?
        0 :
        forward ?
          -animationFractionFromSelectionFraction(fromFraction, duration) :
          -animationFractionFromSelectionFraction(1 - fromFraction, duration);

      let itemIndex = wholeFrom;
      if (!forward && fromFraction > 0) {
        itemIndex += 1;
      }
      console.log(`animateSelection: steps ${steps}, animateCount ${animateCount}, fromIndex ${fromIndex}`);
      this._animatingSelection = true;
      for (let i = 0; i < itemCount; i++) {
        itemIndex = keepIndexWithinBounds(itemCount, itemIndex);
        let item = items[itemIndex];
        if (this._players && this._players[itemIndex]) {
          // console.log(`resetting player ${itemIndex}`);
          this._players[itemIndex].cancel();
          this._players[itemIndex] = null;
        }
        if (i < animateCount) {
          showItem(item, true);
          // Note that delay for first item will be negative. That will cause
          // the animation to start halfway through, which is what we want.
          let delay = startDelay + (i - 1) * duration/2;
          let endDelay = itemIndex === wholeTo ?
            -duration/2 :   // Stop halfway through.
            0;              // Play animation until end.

          this._players[itemIndex] = item.animate(keyframes, {
            delay: delay,
            direction: direction,
            duration: duration,
            endDelay: endDelay,
            fill: 'both'
          });

          if (i === animateCount - 1) {
            // When last animation completes, show next item in the direction
            // we're going.
            let nextUpIndex = keepIndexWithinBounds(itemCount, itemIndex + indexStep);
            let fraction = forward ? 0 : 1;
            this._players[itemIndex].onfinish = event => {
              console.log(`animation complete`);
              setPlayerFraction(this, nextUpIndex, fraction);
              showItem(items[nextUpIndex], true);
              this._animatingSelection = false;
              resetPlayers(this);
            };
          }
        } else {
          showItem(item, false);
        }
        itemIndex += indexStep;
      }
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
      console.log(`set position ${position}`);
      this.update(this.selectedIndex, position);
    }

    get selectedItem() {
      return super.selectedItem;
    }
    set selectedItem(item) {
      if ('selectedItem' in base.prototype) { super.selectedItem = item; }
      console.log(`set selectedItem ${this.selectedIndex}`);
      this.update(this.selectedIndex, 0);
    }

    /**
     * The duration of a selection animation in milliseconds.
     *
     * This measures the amount of time required for an item to move from
     * completely unselected (offstage, usually right) to selected (center
     * stage), to completely unselected (offstage, usually left).
     *
     * The default value is 1000 milliseconds (1 second).
     *
     * @type {integer}
     * @default 1000
     */
    get selectionAnimationDuration() {
      return this._selectionAnimationDuration || 1000;
    }
    set selectionAnimationDuration(value) {
      if ('selectionAnimationDuration' in base.prototype) { super.selectionAnimationDuration = value; }
      this._selectionAnimationDuration = value;
    }

    /**
     * The keyframes that define an animation that plays for an item when moving
     * forward in the sequence.
     *
     * This is an array of CSS rules that will be applied. These are used as
     * [keyframes](http://w3c.github.io/web-animations/#keyframes-section)
     * to animate the item with the
     * [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/animation).
     *
     * The animation represents the state of the next item as it moves from
     * completely unselected (offstage, usually right), to selected (center
     * stage), to completely unselected (offstage, usually left). The center time
     * of the animation should correspond to the item's quiscent selected state,
     * typically in the center of the stage and at the item's largest size.
     *
     * The default forward animation is a smooth slide at full size from right to
     * left.
     *
     * When moving the selection backward, this animation is played in reverse.
     *
     * @type {cssRules[]}
     */
    get selectionAnimationKeyframes() {
      // Standard animation slides left/right, keeps adjacent items out of view.
      return this._selectionAnimationKeyframes || [
        { transform: 'translateX(100%)' },
        { transform: 'translateX(-100%)' }
      ];
    }
    set selectionAnimationKeyframes(value) {
      if ('selectionAnimationKeyframes' in base.prototype) { super.selectionAnimationKeyframes = value; }
      this._selectionAnimationKeyframes = value;
      resetPlayers(this);
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
        console.log(`update: calling animateSelection from ${this._previousSelectedIndex} to ${selectedIndex}`);
        this.animateSelection(this._previousSelectedIndex, selectedIndex);
      } else {
        if (selectionFraction === 0 && this._animatingSelection) {
          // Currently animation to fraction 0. During that process, ignore
          // attempts to update ot fraction 0.
          console.log(`update: animating; ignored attempt to update to fraction 0.`);
          return;
        }
        console.log(`update: calling showSelection to ${selectedIndex}`);
        this.showSelection(selectedIndex);
      }
      this._previousSelectedIndex = selectedIndex;
    }
  }

  return SelectionAnimation;
};


function animationFractionFromSelectionFraction(selectionFraction, duration) {
  return selectionFraction * duration / 2;
}

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
    player = item.animate(element.selectionAnimationKeyframes, {
      duration: element.selectionAnimationDuration,
      fill: 'both'
    });
    player.pause();
    element._players[index] = player;
  }
  return player;
}

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
  // console.log(`setting ${index} to ${fraction}`);
  let player = getPlayer(element, index);
  if (player) {
    let duration = element.selectionAnimationDuration;
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
