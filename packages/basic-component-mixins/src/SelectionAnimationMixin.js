import createSymbol from './createSymbol';
import FractionalSelectionMixin from './FractionalSelectionMixin';
import symbols from './symbols';


// Symbols for private data members on an element.
const animationSymbol = createSymbol('animation');
const draggingSymbol = createSymbol('dragging');
const lastAnimationSymbol = createSymbol('lastAnimation');
const playingAnimationSymbol = createSymbol('animatingSelection');
const previousSelectionSymbol = createSymbol('previousSelection');
const selectionAnimationDurationSymbol = createSymbol('selectionAnimationDuration');
const selectionAnimationEffectSymbol = createSymbol('selectionAnimationEffect');
const selectionAnimationKeyframesSymbol = createSymbol('selectionAnimationKeyframes');
const resetAnimationsOnNextRenderSymbol = createSymbol('resetAnimationsOnNextRender');


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
   * dragging an element using [SwipeDirectionMixin](SwipeDirectionMixin.md)
   * or [TrackpadDirectionMixin](TrackpadDirectionMixin.md)s, then the selection
   * animation will be shown at the point exactly halfway through.
   *
   * This mixin expects a component to provide an `items` array of all elements
   * in the list, which can be provided via
   * [ContentItemsMixin](ContentItemsMixin.md). This mixin also expects
   * `selectedIndex` and `selectedItem` properties, which can be provided via
   * [SingleSelectionMixin](SingleSelectionMixin.md).
   *
   * This mixin supports a `selectionWraps` property. When true, the user can
   * navigate forward from the last item in the list and wrap around to the
   * first item, or navigate backward from the first item and wrap around to the
   * last item.
   *
   * This mixin uses the Web Animations API. For use on browsers which
   * do not support that API natively, you will need to load the
   * [Web Animations polyfill](https://github.com/web-animations/web-animations-js).
   */
  class SelectionAnimation extends base {

    constructor() {
      super();

      // Set defaults.
      if (typeof this.selectionAnimationDuration === 'undefined') {
        this.selectionAnimationDuration = this[symbols.defaults].selectionAnimationDuration;
      }
      if (typeof this.selectionAnimationEffect === 'undefined' && this.selectionAnimationKeyframes == null) {
        this.selectionAnimationEffect = this[symbols.defaults].selectionAnimationEffect;
      }

      this[symbols.dragging] = false;
    }

    get [symbols.defaults]() {
      const defaults = super[symbols.defaults] || {};
      defaults.selectionAnimationDuration = 250;
      defaults.selectionAnimationEffect = 'slide';
      return defaults;
    }

    /*
     * Provide backing for the dragging property.
     * Also, when a drag begins, reset the animations.
     */
    get [symbols.dragging]() {
      return this[draggingSymbol];
    }
    set [symbols.dragging](value) {
      const previousValue = this[symbols.dragging];
      this[draggingSymbol] = value;
      if (symbols.dragging in base.prototype) { super[symbols.dragging] = value; }
      if (value && !previousValue) {
        // Have begun a drag.
        this[resetAnimationsOnNextRenderSymbol] = true;
      }
    }

    [symbols.itemAdded](item) {
      // We mark new items in the list as explicitly visible to ARIA. Otherwise,
      // when an item isn't visible on the screen, ARIA will assume the item is
      // of no interest to the user, and leave it out of the accessibility tree.
      // If the list contains 10 items, but only 3 are visible, a screen reader
      // might then announce the list only has 3 items. To ensure that screen
      // readers and other assistive technologies announce the correct total
      // number of items, we explicitly mark all items as not hidden. This will
      // expose them all in the accessibility tree, even the items which are
      // currently not rendered.
      //
      // TODO: Generally speaking, this entire mixin assumes that the user can
      // navigate through all items in a list. But an app could style an item as
      // display:none or visibility:hidden because the user is not allowed to
      // interact with that item at the moment. Support for this scenario should
      // be added. This would entail changing all locations where a mixin
      // function is counting items, iterating over the (visible) items, and
      // showing or hiding items. Among other things, the code below to make
      // items visible to ARIA would need to discriminate between items which
      // are invisible because of animation state, or invisible because the user
      // shouldn't interact with them.
      item.setAttribute('aria-hidden', false);
    }

    itemsChanged() {
      if (super.itemsChanged) { super.itemsChanged(); }

      resetAnimations(this);

      // TODO: Also reset our notion of the last rendered selection? This comes
      // up when a DOM removal causes the selected item to change position.
      // this[previousSelectionSymbol] = null;

      renderSelection(this);
    }

    resetAnimations() {
      resetAnimations(this);
    }

    /**
     * A fractional value indicating how far the user has currently advanced to
     * the next/previous item. E.g., a `selectedFraction` of 3.5 indicates the
     * user is halfway between items 3 and 4.
     *
     * For more details, see [FractionalSelectionMixin](FractionalSelectionMixin.md)
     * mixin.
     *
     * @type {number}
     */
    get selectedFraction() {
      return super.selectedFraction || 0;
    }
    set selectedFraction(value) {
      if ('selectedFraction' in base.prototype) { super.selectedFraction = value; }
      renderSelection(this, this.selectedIndex, value);
    }

    get selectedIndex() {
      return super.selectedIndex;
    }
    set selectedIndex(index) {
      if ('selectedIndex' in base.prototype) { super.selectedIndex = index; }
      renderSelection(this, index, 0);
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
     * @type {number}
     * @default 250
     */
    get selectionAnimationDuration() {
      return this[selectionAnimationDurationSymbol];
    }
    set selectionAnimationDuration(value) {
      this[selectionAnimationDurationSymbol] = value;
      if ('selectionAnimationDuration' in base.prototype) { super.selectionAnimationDuration = value; }
    }

    /**
     * The name of a standard selection animation effect.
     *
     * This is a shorthand for setting the `selectionAnimationKeyframes`
     * property to standard keyframes. Supported string values:
     *
     * * "crossfade"
     * * "reveal"
     * * "revealWithFade"
     * * "showAdjacent"
     * * "slide"
     * * "slideWithGap"
     *
     * @type {string}
     * @default "slide"
     */
    get selectionAnimationEffect() {
      return this[selectionAnimationEffectSymbol];
    }
    set selectionAnimationEffect(value) {
      this[selectionAnimationEffectSymbol] = value;
      if ('selectionAnimationEffect' in base.prototype) { super.selectionAnimationEffect = value; }
      this.selectionAnimationKeyframes = mixin.standardEffectKeyframes[value];
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
      return this[selectionAnimationKeyframesSymbol];
    }
    set selectionAnimationKeyframes(value) {
      this[selectionAnimationKeyframesSymbol] = value;
      if ('selectionAnimationKeyframes' in base.prototype) { super.selectionAnimationKeyframes = value; }
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
  }

  return SelectionAnimation;
}


// We expose helpers on the mixin function that we want to be able to unit test.
// Since these are on the function, not on the class emitted by the function,
// they don't end up getting exposed on actual element instances.
mixin.helpers = {

  /*
   * Calculate the animation fractions for an element's items at the given
   * selection point. This is used when rendering the element's selection state
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
  animationFractionsForSelection(element, selection) {

    const items = element.items;
    if (!items) {
      return;
    }

    const itemCount = items.length;
    const selectionWraps = element.selectionWraps;

    return items.map((item, itemIndex) => {
      // How many steps from the selection point to this item?
      const steps = stepsToIndex(itemCount, selectionWraps, selection, itemIndex);
      // To convert steps to animation fraction:
      // steps      animation fraction
      //  1         0     (stage right)
      //  0         0.5   (center stage)
      // -1         1     (stage left)
      const animationFraction = (1 - steps) / 2;
      return (animationFraction >= 0 && animationFraction <= 1) ?
        animationFraction :
        null; // Outside animation range
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
  effectTimingsForSelectionAnimation(element, fromSelection, toSelection) {

    const items = element.items;
    if (!items) {
      return;
    }
    const itemCount = items.length;
    const selectionWraps = element.selectionWraps;
    const toIndex = FractionalSelectionMixin.helpers.wrappedSelectionParts(toSelection, itemCount, selectionWraps).index;
    const totalSteps = stepsToIndex(itemCount, selectionWraps, fromSelection, toSelection);
    const direction = totalSteps >= 0 ? 'normal': 'reverse';
    const fill = 'both';
    const totalDuration = element.selectionAnimationDuration;
    const stepDuration = totalSteps !== 0 ?
      totalDuration * 2 / Math.ceil(Math.abs(totalSteps)) :
      0;  // No steps required, animation will be instantenous.

    const timings = items.map((item, itemIndex) => {
      const steps = stepsToIndex(itemCount, selectionWraps, itemIndex, toSelection);
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
        const delay = stepDuration * (positionInSequence - 1)/2;
        const endDelay = itemIndex === toIndex ?
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
  crossfade: [
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
function animateSelection(element, fromSelection, toSelection) {

  resetAnimations(element);

  // Calculate the animation timings.
  const items = element.items;
  const keyframes = element.selectionAnimationKeyframes;
  element[playingAnimationSymbol] = true;
  const timings = mixin.helpers.effectTimingsForSelectionAnimation(element, fromSelection, toSelection);

  // Figure out which item will be the one *after* the one we're selecting.
  const itemCount = items.length;
  const selectionWraps = element.selectionWraps;
  const selectionIndex = FractionalSelectionMixin.helpers.selectionParts(toSelection, itemCount, selectionWraps).index;
  const totalSteps = stepsToIndex(itemCount, selectionWraps, fromSelection, toSelection);
  const forward = totalSteps >= 0;
  let nextUpIndex = selectionIndex + (forward ? 1 : - 1);
  if (selectionWraps) {
    nextUpIndex = FractionalSelectionMixin.helpers.wrappedSelection(nextUpIndex, itemCount);
  } else if (!isItemIndexInBounds(element, nextUpIndex)) {
    nextUpIndex = null; // At start/end of list; don't have a next item to show.
  }

  // Play the animations using those timings.
  let lastAnimationDetails;
  timings.forEach((timing, index) => {
    const item = items[index];
    if (timing) {
      showItem(item, true);
      const animation = item.animate(keyframes, timing);
      element[animationSymbol][index] = animation;
      if (index === nextUpIndex) {
        // This item will be animated, so will already be in the desired state
        // after the animation completes.
        nextUpIndex = null;
      }
      if (timing.endDelay !== 0) {
        // This is the animation for the item that will be left selected.
        // We want to clean up when this animation completes.
        lastAnimationDetails = { animation, index, timing, forward };
      }
    } else {
      // This item doesn't participate in the animation.
      showItem(item, false);
    }
  });

  if (lastAnimationDetails != null) {
    // Arrange for clean-up work to be performed.
    lastAnimationDetails.nextUpIndex = nextUpIndex;
    lastAnimationDetails.animation.onfinish = event => selectionAnimationFinished(element, lastAnimationDetails);
    element[lastAnimationSymbol] = lastAnimationDetails.animation;
  } else {
    // Shouldn't happen -- we should always have at least one animation.
    element[playingAnimationSymbol] = false;
  }
}


function getAnimationForItemIndex(element, index) {
  if (element[animationSymbol] == null) {
    // Not ready yet;
    return null;
  }
  let animation = element[animationSymbol][index];
  if (!animation) {
    const item = element.items[index];
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

/*
 * Render the selection state of the element.
 *
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
 *    selection, we'll just be restoring the selectedFraction to 0.
 *
 * If the list does not wrap, any selection position outside the list's bounds
 * will be damped to produce a visual effect of tension.
 */
function renderSelection(element, selectedIndex=element.selectedIndex, selectedFraction=element.selectedFraction) {
  const itemCount = element.items ? element.items.length : 0;
  if (itemCount === 0) {
    // Nothing to render.
    return;
  }
  if (selectedIndex < 0) {
    // TODO: Handle no selection.
    return;
  }
  let selection = selectedIndex + selectedFraction;
  if (element.selectionWraps) {
    // Apply wrapping to ensure consistent representation of selection.
    selection = FractionalSelectionMixin.helpers.wrappedSelection(selection, itemCount);
  } else {
    // Apply damping if necessary.
    selection = FractionalSelectionMixin.helpers.dampedSelection(selection, itemCount);
  }
  const previousSelection = element[previousSelectionSymbol];
  // TODO: If an item changes position in the DOM, we end up animating from
  // its old index to its new index, but we really don't want to animate at all.
  if (!element[symbols.dragging] && previousSelection != null &&
      previousSelection !== selection) {
    // Animate selection from previous state to new state.
    animateSelection(element, previousSelection, selection);
  } else if (selectedFraction === 0 && element[playingAnimationSymbol]) {
    // Already in process of animating to fraction 0. During that process,
    // ignore subsequent attempts to renderSelection to fraction 0.
    return;
  } else {
    // Render current selection state instantly.
    renderSelectionInstantly(element, selection);
  }
  element[previousSelectionSymbol] = selection;
}

/*
 * Instantly render (don't animate) the element's items at the given whole or
 * fractional selection index.
 */
function renderSelectionInstantly(element, toSelection) {
  if (element[resetAnimationsOnNextRenderSymbol]) {
    resetAnimations(element);
    element[resetAnimationsOnNextRenderSymbol] = false;
  }
  const animationFractions = mixin.helpers.animationFractionsForSelection(element, toSelection);
  animationFractions.map((animationFraction, index) => {
    const item = element.items[index];
    if (animationFraction != null) {
      showItem(item, true);
      setAnimationFraction(element, index, animationFraction);
    } else {
      showItem(item, false);
    }
  });
}

/*
 * We maintain an array containing an animation per item. This is used for two
 * reasons:
 *
 * * During a drag operation, we want to be able to reuse animations between
 *   drag updates.
 * * When a selection animation completes, we need to be able to leave the
 *   visibile items in a paused state. Later, we'll want to be able to clean up
 *   those animations.
 *
 * Note that this array is sparse: it will only hold up from 0–3 animations at
 * any given point.
 */
function resetAnimations(element) {
  const animations = element[animationSymbol];
  if (animations) {
    // Cancel existing animations to remove the effects they're applying.
    animations.forEach((animation, index) => {
      if (animation) {
        animation.cancel();
        animations[index] = null;
      }
    });
  }
  const itemCount = element.items ? element.items.length : 0;
  if (!animations || animations.length !== itemCount) {
    // Haven't animated before with this number of items; (re)create array.
    element[animationSymbol] = new Array(itemCount);
  }
}

/*
 * The last animation in our selection animation has completed. Clean up.
 */
function selectionAnimationFinished(element, details) {

  // When the last animation completes, show the next item in the direction
  // we're going. Waiting to that until this point is a bit of a hack to avoid
  // having a next item that's higher in the natural z-order obscure other items
  // during animation.
  const nextUpIndex = details.nextUpIndex;
  if (nextUpIndex != null) {
    if (element[animationSymbol][nextUpIndex]) {
      // Cancel existing selection animation so we can construct a new one.
      element[animationSymbol][nextUpIndex].cancel();
      element[animationSymbol][nextUpIndex] = null;
    }
    const animationFraction = details.forward ? 0 : 1;
    setAnimationFraction(element, nextUpIndex, animationFraction);
    showItem(element.items[nextUpIndex], true);
  }

  element[lastAnimationSymbol].onfinish = null;
  element[playingAnimationSymbol] = false;
}

/*
 * Pause the indicated animation and have it show the animation at the given
 * fraction (between 0 and 1) of the way through the animation.
 */
function setAnimationFraction(element, itemIndex, fraction) {
  const animation = getAnimationForItemIndex(element, itemIndex);
  if (animation) {
    const duration = element.selectionAnimationDuration;
    if (duration) {
      animation.currentTime = fraction * duration;
    }
  }
}

function showItem(item, flag) {
  item.style.visibility = flag ? 'visible' : 'hidden';
}

/*
 * Figure out how many steps it will take to go from fromSelection to
 * toSelection. To go from item 3 to item 4 is one step.
 *
 * If wrapping is allowed, then going from the last item to the first will take
 * one step (forward), and going from the first item to the last will take one
 * step (backward).
 */
function stepsToIndex(length, allowWrap, fromSelection, toSelection) {
  let steps = toSelection - fromSelection;
  // Wrapping only kicks in when list has more than 1 item.
  if (allowWrap && length > 1) {
    const wrapSteps = length - Math.abs(steps);
    if (wrapSteps <= 1) {
      // Special case
      steps = steps < 0 ?
        wrapSteps :   // Wrap forward from last item to first.
        -wrapSteps;   // Wrap backward from first item to last.
    }
  }
  return steps;
}
