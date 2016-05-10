import createSymbol from './createSymbol';


// Symbols for hanging data off an element.
const animatingSelectionSymbol = createSymbol('animatingSelection');
const animationSymbol = createSymbol('animations');
const lastAnimationSymbol = createSymbol('lastAnimation');
const previousSelectionIndexSymbol = createSymbol('previousSelectionIndex');
const showTransitionSymbol = createSymbol('showTransition');
const selectionAnimationDurationSymbol = createSymbol('selectionAnimationDuration');
const selectionAnimationKeyframesSymbol = createSymbol('selectionAnimationKeyframes');


/* Exported function extends a base class with SelectionAnimation. */
export default function mixin(base) {

  /**
   * Mixin which uses animation to show transitions between selection states.
   *
   * This mixin can be used by components that want to provide visible
   * animations when changing the selection. For example, a carousel component
   * may want to define a sliding animation effect shown when moving between
   * items.
   *
   * The animation is defined by a `selectionAnimationKeyframes` property; see
   * that property for details on how to define these keyframes. This animation
   * will be used in two ways. First, when moving strictly between items, the
   * animation will play smoothly to show the selection changing. Second, the
   * animation can be used to render the selection at a fixed point in the
   * transition between states. E.g., if the user pauses halfway through
   * dragging an element using the [SwipeDirection](SwipeDirection.md) or
   * [TrackpadDirection](TrackpadDirection.md) mixins, then the selection
   * animation will be shown at the point exactly halfway through.
   *
   * This mixin expects a component to provide an `items` array of all elements
   * in the list, which can be provided via the
   * [ContentAsItems](ContentAsItems.md) mixin. This mixin also expects
   * `selectedIndex` and `selectedItem` properties, which can be provided via
   * the [ItemsSelection](ItemsSelection.md) mixin.
   */
  class SelectionAnimation extends base {

    createdCallback() {
      if (super.createdCallback) { super.createdCallback(); }
      this[showTransitionSymbol] = true;
    }

    itemsChanged() {
      if (super.itemsChanged) { super.itemsChanged(); }
      resetAnimations(this);
      renderSelection(this);
    }

    get position() {
      return super.position;
    }
    set position(position) {
      if ('position' in base.prototype) { super.position = position; }
      renderSelection(this, this.selectedIndex, position);
    }

    get selectedItem() {
      return super.selectedItem;
    }
    set selectedItem(item) {
      if ('selectedItem' in base.prototype) { super.selectedItem = item; }
      renderSelection(this, this.selectedIndex, 0);
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
      return this[selectionAnimationDurationSymbol] || 250;
    }
    set selectionAnimationDuration(value) {
      if ('selectionAnimationDuration' in base.prototype) { super.selectionAnimationDuration = value; }
      this[selectionAnimationDurationSymbol] = value;
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
      return this[selectionAnimationKeyframesSymbol] || mixin.standardEffectKeyframes.slide;
    }
    set selectionAnimationKeyframes(value) {
      if ('selectionAnimationKeyframes' in base.prototype) { super.selectionAnimationKeyframes = value; }
      this[selectionAnimationKeyframesSymbol] = value;
      resetAnimations(this);
      renderSelection(this);
    }

    get selectionWraps() {
      return super.selectionWraps;
    }
    set selectionWraps(value) {
      if ('selectionWraps' in base.prototype) { super.selectionWraps = value; }
      resetAnimations(this);
      renderSelection(this);
    }

    // TODO: Make this a getter/setter property.
    showTransition(show) {
      if (super.showTransition) { super.showTransition(show); }
      this[showTransitionSymbol] = show;
    }
  }

  return SelectionAnimation;
}


// We expose helpers on the mixin function that we want to be able to unit test.
// Since these are on the function, not on the class emitted by the function,
// they don't end up getting exposed on actual element instances.
mixin.helpers = {

  /*
   * Calculate the animation fractions for an element's items at the given
   * selection index. This is used when rendering the element's selection state
   * instantaneously.
   *
   * This function considers the selectedIndex parameter, which can be a whole
   * or fractional number, and determines which items will be visible at that
   * index. This function then calculates a corresponding animation fraction: a
   * number between 0 and 1 indicating how far through the selection animation
   * an item should be shown, or null if the item should not be visible at that
   * selection index. These fractions are returned as an array, where the
   * animation fraction at position N corresponds to how item N should be shown.
   */
  // TODO: Handle case where there are fewer than 3 items.
  animationFractionsAtSelectionIndex(element, selectionIndex) {
    let items = element.items;
    if (!items) {
      return;
    }
    let itemCount = items.length;
    let selectionWraps = element.selectionWraps;
    let { whole: wholeIndex, fraction: indexFraction } = getNumericParts(itemCount, selectionIndex);
    return items.map((item, itemIndex) => {
      let steps = stepsToIndex(itemCount, true, wholeIndex, itemIndex);
      let oneStepOrLessAway = Math.abs(steps - Math.round(indexFraction)) <= 1;
      if (oneStepOrLessAway &&
          (selectionWraps || isItemIndexInBounds(element, selectionIndex + steps))) {
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
  },

  /*
   * Calculate the animation timings that should be used to smoothly animate the
   * element's items from one selection state to another.
   *
   * This returns an array of timings, where the timing at position N should be
   * used to animate item N. If an item's timing is null, then that item should
   * not take place in the animation, and should be hidden instead.
   */
  effectTimingsForSelectionAnimation(element, fromIndex, toIndex) {

    let items = element.items;
    if (!items) {
      return;
    }
    let itemCount = items.length;
    let wholeTo = getNumericParts(itemCount, toIndex).whole;
    let selectionWraps = element.selectionWraps;
    let totalSteps = stepsToIndex(itemCount, selectionWraps, fromIndex, toIndex);
    let direction = totalSteps >= 0 ? 'normal': 'reverse';
    let fill = 'both';
    let totalDuration = element.selectionAnimationDuration;
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

    return timings;
  }

};


// Keyframes for standard selection animation effects.
mixin.standardEffectKeyframes = {

  // Simple crossfade
  fade: [
    { opacity: 0 },
    { opacity: 1 },
    { opacity: 0 }
  ],

  // Reveal, as if sliding the top card off a deck of cards
  reveal: [
    { transform: 'translateX(0%)', zIndex: 0 },
    { transform: 'translateX(0%)', zIndex: 1 },
    { transform: 'translateX(-100%)', zIndex: 2 }
  ],

  // Google Photos-style reveal-with-fade animation
  revealWithFade: [
    { transform: 'translateX(0%) scale(0.75)', opacity: 0, zIndex: 0 },
    { transform: 'translateX(0%) scale(1.0)', opacity: 1, zIndex: 1 },
    { transform: 'translateX(-100%) scale(1.0)', opacity: 1, zIndex: 2 }
  ],

  // Carousel variant with a bit of off-stage elements showing
  showAdjacent: [
    { transform: 'translateX(78%) scale(0.7)', zIndex: 0 },
    { transform: 'translateX(0%) scale(0.82)', zIndex: 1 },
    { transform: 'translateX(-78%) scale(0.7)', zIndex: 0 }
  ],

  // Simple slide
  slide: [
    { transform: 'translateX(100%)' },
    { transform: 'translateX(-100%)' }
  ],

  // Slide, with a gap between
  slideWithGap: [
    { transform: 'translateX(110%)' },
    { transform: 'translateX(-110%)' }
  ]

};


/*
 * Smoothly animate the selection between the indicated "from" and "to"
 * indices. The former can be a fraction, e.g., when the user releases a finger
 * to complete a touch drag, and the selection will snap to the closest whole
 * index.
 */
function animateSelection(element, fromIndex, toIndex) {

  resetAnimations(element);

  if (element[lastAnimationSymbol]) {
    // Cancel the effects of the last selection animation.
    element[lastAnimationSymbol].onfinish = null;
    element[lastAnimationSymbol] = null;
  }

  // Calculate the animation timings.
  let items = element.items;
  let keyframes = element.selectionAnimationKeyframes;
  element[animatingSelectionSymbol] = true;
  let timings = mixin.helpers.effectTimingsForSelectionAnimation(element, fromIndex, toIndex);
  let lastAnimationDetails;

  // Play the animations using those timings.
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
      // This item doesn't participate in the animation.
      showItem(item, false);
    }
  });

  if (lastAnimationDetails) {
    displayNextItemWhenAnimationCompletes(element, lastAnimationDetails, toIndex);
  } else {
    // Shouldn't happen -- we should always have at least one animation.
    element[animatingSelectionSymbol] = false;
  }
}

/*
 * When the last animation completes, show the next item in the direction we're
 * going. This waiting is a hack to avoid having static items higher in the
 * natural z-order obscure items during animation.
 */
function displayNextItemWhenAnimationCompletes(element, animationDetails, toIndex) {
  let forward = animationDetails.timing.direction === 'normal';
  let items = element.items;
  let nextUpIndex = getNumericParts(items.length, toIndex).whole + (forward ? 1 : - 1);
  element[lastAnimationSymbol] = animationDetails.animation;
  element[lastAnimationSymbol].onfinish = event => {
    if (isItemIndexInBounds(element, nextUpIndex) || element.selectionWraps) {
      nextUpIndex = keepIndexWithinBounds(items.length, nextUpIndex);
      let nextUpItem = items[nextUpIndex];
      let animationFraction = forward ? 0 : 1;
      setAnimationFraction(element, nextUpIndex, animationFraction);
      showItem(nextUpItem, true);
    }
    element[animatingSelectionSymbol] = false;
    element[lastAnimationSymbol] = null;
  };
}

function getNumericParts(bound, n) {
  n = keepIndexWithinBounds(bound, n);
  let whole = Math.trunc(n);
  let fraction = n - whole;
  return { whole, fraction };
}

function getAnimationForItemIndex(element, index) {
  if (element[animationSymbol] == null) {
    // Not ready yet;
    return null;
  }
  let animation = element[animationSymbol][index];
  if (!animation) {
    let item = element.items[index];
    animation = item.animate(element.selectionAnimationKeyframes, {
      duration: element.selectionAnimationDuration,
      fill: 'both'
    });
    animation.pause();
    element[animationSymbol][index] = animation;
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

/*
 * Render the selection state of the element.
 * This can be used to re-render a previous selection state (if the
 * selectedIndex param is omitted), render the selection instantly at a given
 * whole or fractional selection index, or animate to a given selection index.
 *
 * There are several distinct scenarios we need to cover:
 *
 * 1. Initial positioning, or repositioning after changing a property like
 *    selectionAnimationKeyframes that affects rendering.
 * 2. Animate on selectedIndex change. This should override any animation/swipe
 *    already in progress.
 * 3. Instantly render the current position of a drag operation in progress.
 * 4. Complete a drag operation. If the drag wasn't far enough to affect
 *    selection, we'll just be restoring the selectionFraction to 0.
 *
 */
function renderSelection(element, selectedIndex=element.selectedIndex, selectionFraction=element.position) {
  if (selectedIndex < 0) {
    // TODO: Handle no selection.
    return;
  }
  selectedIndex += selectionFraction;
  let previousSelectionIndex = element[previousSelectionIndexSymbol];
  if (element[showTransitionSymbol] && previousSelectionIndex != null &&
      previousSelectionIndex !== selectedIndex) {
    // Animate selection from previous state to new state.
    animateSelection(element, previousSelectionIndex, selectedIndex);
  } else {
    // Render current selection state instantly.
    if (selectionFraction === 0 && element[animatingSelectionSymbol]) {
      // Already in process of animating to fraction 0. During that process,
      // ignore subsequent attempts to renderSelection to fraction 0.
      return;
    }
    renderSelectionInstantly(element, selectedIndex);
  }
  element[previousSelectionIndexSymbol] = selectedIndex;
}

/*
 * Instantly render (don't animate) the element's items at the given whole or
 * fractional selection index.
 */
function renderSelectionInstantly(element, toIndex) {
  let animationFractions = mixin.helpers.animationFractionsAtSelectionIndex(element, toIndex);
  animationFractions.map((animationFraction, index) => {
    let item = element.items[index];
    if (animationFraction != null) {
      showItem(item, true);
      setAnimationFraction(element, index, animationFraction);
    } else {
      showItem(item, false);
    }
  });
}

function resetAnimations(element) {
  element[animationSymbol] = new Array(element.items.length);
}

/*
 * Pause the indicated animation and have it show the animation at the given
 * fraction (between 0 and 1) of the way through the animation.
 */
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

/*
 * Figure out how many steps it will take to go from fromIndex to toIndex. To go
 * from item 3 to item 4 is one step.
 *
 * If wrapping is allowed, then going from the last item to the first will take
 * one step (forward), and going from the first item to the last will take one
 * step (backward).
 */
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
