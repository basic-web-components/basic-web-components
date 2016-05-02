/* Exported function extends a base class with SelectionAnimation. */
export default (base) => {

  /**
   * Animates selection
   *
   * Expects: selectedItem property.
   */
  class SelectionAnimation extends base {

    animateSelection(fromIndex, toIndex) {

      console.log(`animateSelection: from ${fromIndex} to ${toIndex}`);
      resetAnimations(this);
      if (this._lastSelectionAnimation) {
        // Cancel the effects of the last selection animation.
        this._lastSelectionAnimation.onfinish = null;
        this._lastSelectionAnimation = null;
      }
      let items = this.items;
      let keyframes = this.selectionAnimationKeyframes;
      this._animatingSelection = true;
      let timings = this._effectTimingsForSelectionAnimation(fromIndex, toIndex);
      let lastAnimationDetails;

      timings.forEach((timing, index) => {
        let item = items[index];
        if (timing) {
          showItem(item, true);
          let animation = item.animate(keyframes, timing);

          // Figure out whether this animation will be the last one to end
          // (possibly concurrent with another animation).
          let endTime = timing.delay + timing.duration + timing.endDelay;
          if (lastAnimationDetails == null || endTime > lastAnimationDetails.endTime) {
            lastAnimationDetails = { animation, endTime, timing };
          }
        } else {
          showItem(item, false);
        }
      });

      if (lastAnimationDetails) {
        displayNextItemWhenAnimationCompletes(this, lastAnimationDetails, toIndex);
      } else {
        // Shouldn't happen -- we should always have at least one animation.
        this._animatingSelection = false;
      }
    }

    _effectTimingsForSelectionAnimation(fromIndex, toIndex) {

      let items = this.items;
      if (!items) {
        return;
      }
      let itemCount = items.length;
      let wholeTo = getNumericParts(itemCount, toIndex).whole;
      let selectionWraps = this.selectionWraps;
      let totalSteps = stepsToIndex(itemCount, selectionWraps, fromIndex, toIndex);
      let direction = totalSteps >= 0 ? 'normal': 'reverse';
      let fill = 'both';
      let totalDuration = this.selectionAnimationDuration;
      let stepDuration = totalDuration * 2 / Math.ceil(Math.abs(totalSteps));

      let timings = items.map((item, itemIndex) => {
        let steps = stepsToIndex(itemCount, selectionWraps, itemIndex, toIndex);
        // If we include this item in the staggered sequence of animations we're
        // creating, where would the item appear in the sequence?
        let positionInSequence = totalSteps - steps;
        if (totalSteps < 0) {
          positionInSequence = -positionInSequence;
        }
        // So, is this item really included in the sequence?
        if (Math.ceil(positionInSequence) >= 0 && positionInSequence <= Math.abs(totalSteps)) {
          // Note that delay for first item will be negative. That will cause
          // the animation to start halfway through, which is what we want.
          let delay = stepDuration * (positionInSequence - 1)/2;
          let endDelay = itemIndex === wholeTo ?
            -stepDuration/2 :   // Stop halfway through.
            0;              // Play animation until end.
          return { duration: stepDuration, direction, fill, delay, endDelay };
        } else {
          return null;
        }
      });

      console.log(timings);
      return timings;
    }

    createdCallback() {
      if (super.createdCallback) { super.createdCallback(); }
      this._showTransition = true;
    }

    itemsChanged() {
      if (super.itemsChanged) { super.itemsChanged(); }
      resetAnimations(this);
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
     * This measures the amount of time required for a selection animation to
     * complete. This number remains constant, even if the number of items being
     * animated increases.
     *
     * The default value is 250 milliseconds (a quarter a second).
     *
     * @type {integer}
     * @default 250
     */
    get selectionAnimationDuration() {
      return this._selectionAnimationDuration || 250;
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
      resetAnimations(this);
      this.update();
    }

    get selectionWraps() {
      return super.selectionWraps;
    }
    set selectionWraps(value) {
      if ('selectionWraps' in base.prototype) { super.selectionWraps = value; }
      resetAnimations(this);
      this.update();
    }

    // TODO: Make this a getter/setter property.
    showTransition(show) {
      if (super.showTransition) { super.showTransition(show); }
      this._showTransition = show;
    }

    showSelection(toIndex) {
      let animationFractions = this._animationFractionsAtSelectionIndex(toIndex);
      animationFractions.map((animationFraction, index) => {
        let item = this.items[index];
        if (animationFraction != null) {
          showItem(item, true);
          setAnimationFraction(this, index, animationFraction);
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
          // attempts to update to fraction 0.
          console.log(`update: animating; ignored attempt to update to fraction 0.`);
          return;
        }
        console.log(`update: calling showSelection to ${selectedIndex}`);
        this.showSelection(selectedIndex);
      }
      this._previousSelectedIndex = selectedIndex;
    }

    // TODO: Handle case where there are fewer than 3 items.
    _animationFractionsAtSelectionIndex(selectionIndex) {
      let items = this.items;
      if (!items) {
        return;
      }
      let itemCount = items.length;
      let selectionWraps = this.selectionWraps;
      let { whole: wholeIndex, fraction: indexFraction } = getNumericParts(itemCount, selectionIndex);
      return items.map((item, itemIndex) => {
        let steps = stepsToIndex(itemCount, true, wholeIndex, itemIndex);
        let oneStepOrLessAway = Math.abs(steps - Math.round(indexFraction)) <= 1;
        if (oneStepOrLessAway &&
            (selectionWraps || isItemIndexInBounds(this, selectionIndex + steps))) {
          // We want:
          // steps      animation fraction
          // -1         1     (stage right)
          //  0         0.5   (center stage)
          //  1         0     (stage left)
          // We also want to factor in the selection fraction.
          let animationFraction = (1 - steps + indexFraction) / 2;
          return animationFraction;
        } else {
          return null;
        }
      });
    }
  }

  return SelectionAnimation;
};


function displayNextItemWhenAnimationCompletes(element, animationDetails, toIndex) {
  // When the last animation completes, show the next item in the
  // direction we're going. This waiting is a hack to avoid having static
  // items higher in the natural z-order obscure items during animation.
  let forward = animationDetails.timing.direction === 'normal';
  let items = element.items;
  let nextUpIndex = getNumericParts(items.length, toIndex).whole + (forward ? 1 : - 1);
  element._lastSelectionAnimation = animationDetails.animation;
  element._lastSelectionAnimation.onfinish = event => {
    console.log(`animation complete, showing ${nextUpIndex}`);
    if (isItemIndexInBounds(element, nextUpIndex) || element.selectionWraps) {
      nextUpIndex = keepIndexWithinBounds(items.length, nextUpIndex);
      let nextUpItem = items[nextUpIndex];
      let animationFraction = forward ? 0 : 1;
      setAnimationFraction(element, nextUpIndex, animationFraction);
      showItem(nextUpItem, true);
    }
    element._animatingSelection = false;
    element._lastSelectionAnimation = null;
  };
}

function getNumericParts(bound, n) {
  n = keepIndexWithinBounds(bound, n);
  let whole = Math.trunc(n);
  let fraction = n - whole;
  return { whole, fraction };
}

function getAnimationForItemIndex(element, index) {
  if (element._animations == null) {
    // Not ready yet;
    return null;
  }
  let animation = element._animations[index];
  if (!animation) {
    let item = element.items[index];
    animation = item.animate(element.selectionAnimationKeyframes, {
      duration: element.selectionAnimationDuration,
      fill: 'both'
    });
    animation.pause();
    element._animations[index] = animation;
  }
  return animation;
}

function isItemIndexInBounds(element, index) {
  return index >= 0 && element.items && index < element.items.length;
}

// Return the index, ensuring it stays between 0 and the given length.
function keepIndexWithinBounds(length, index) {
  // Handle possibility of negative mod.
  // See http://stackoverflow.com/a/18618250/76472
  return ((index % length) + length) % length;
}

function resetAnimations(element) {
  console.log(`resetting animations`);
  element._animations = new Array(element.items.length);
}

// Pause the indicated animation and have it show the animation at the given
// fraction (between 0 and 1) of the way through the animation.
function setAnimationFraction(element, itemIndex, fraction) {
  let animation = getAnimationForItemIndex(element, itemIndex);
  if (animation) {
    let duration = element.selectionAnimationDuration;
    animation.currentTime = fraction * duration;
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
  if (allowWrap) {
    let wrapSteps = length - Math.abs(steps);
    if (wrapSteps <= 1) {
      // Special case
      steps = steps < 0 ?
        wrapSteps :   // Wrap forward from last item to first.
        -wrapSteps;   // Wrap backward from first item to last.
    }
  }
  return steps;
}
