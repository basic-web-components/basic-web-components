# API Documentation
<a name="SelectionAnimation"></a>

## SelectionAnimation
Mixin which uses animation to show transitions between selection states.

This mixin can be used by components that want to provide visible
animations when changing the selection. For example, a carousel component
may want to define a sliding animation effect shown when moving between
items.

The animation is defined by a `selectionAnimationKeyframes` property; see
that property for details on how to define these keyframes. This animation
will be used in two ways. First, when moving strictly between items, the
animation will play smoothly to show the selection changing. Second, the
animation can be used to render the selection at a fixed point in the
transition between states. E.g., if the user pauses halfway through
dragging an element using [SwipeDirectionMixin](SwipeDirectionMixin.md)
or [TrackpadDirectionMixin](TrackpadDirectionMixin.md)s, then the selection
animation will be shown at the point exactly halfway through.

This mixin expects a component to provide an `items` array of all elements
in the list, which can be provided via
[ContentItemsMixin](ContentItemsMixin.md). This mixin also expects
`selectedIndex` and `selectedItem` properties, which can be provided via
[SingleSelectionMixin](SingleSelectionMixin.md).

This mixin supports a `selectionWraps` property. When true, the user can
navigate forward from the last item in the list and wrap around to the
first item, or navigate backward from the first item and wrap around to the
last item.

This mixin uses the Web Animations API. For use on browsers which
do not support that API natively, you will need to load the
[Web Animations polyfill](https://github.com/web-animations/web-animations-js).

  **Kind**: global class

* [SelectionAnimation](#SelectionAnimation)
    * [.selectedFraction](#SelectionAnimation+selectedFraction) : <code>number</code>
    * [.selectionAnimationDuration](#SelectionAnimation+selectionAnimationDuration) : <code>number</code>
    * [.selectionAnimationEffect](#SelectionAnimation+selectionAnimationEffect) : <code>string</code>
    * [.selectionAnimationKeyframes](#SelectionAnimation+selectionAnimationKeyframes) : <code>Array.&lt;cssRules&gt;</code>

<a name="SelectionAnimation+selectedFraction"></a>

### selectionAnimation.selectedFraction : <code>number</code>
A fractional value indicating how far the user has currently advanced to
the next/previous item. E.g., a `selectedFraction` of 3.5 indicates the
user is halfway between items 3 and 4.

For more details, see [FractionalSelectionMixin](FractionalSelectionMixin.md)
mixin.

  **Kind**: instance property of <code>[SelectionAnimation](#SelectionAnimation)</code>
<a name="SelectionAnimation+selectionAnimationDuration"></a>

### selectionAnimation.selectionAnimationDuration : <code>number</code>
The duration of a selection animation in milliseconds.

This measures the amount of time required for a selection animation to
complete. This number remains constant, even if the number of items being
animated increases.

The default value is 250 milliseconds (a quarter a second).

  **Kind**: instance property of <code>[SelectionAnimation](#SelectionAnimation)</code>
**Default**: <code>250</code>  
<a name="SelectionAnimation+selectionAnimationEffect"></a>

### selectionAnimation.selectionAnimationEffect : <code>string</code>
The name of a standard selection animation effect.

This is a shorthand for setting the `selectionAnimationKeyframes`
property to standard keyframes. Supported string values:

* "crossfade"
* "reveal"
* "revealWithFade"
* "showAdjacent"
* "slide"
* "slideWithGap"

  **Kind**: instance property of <code>[SelectionAnimation](#SelectionAnimation)</code>
**Default**: <code>&quot;\&quot;slide\&quot;&quot;</code>  
<a name="SelectionAnimation+selectionAnimationKeyframes"></a>

### selectionAnimation.selectionAnimationKeyframes : <code>Array.&lt;cssRules&gt;</code>
The keyframes that define an animation that plays for an item when moving
forward in the sequence.

This is an array of CSS rules that will be applied. These are used as
[keyframes](http://w3c.github.io/web-animations/#keyframes-section)
to animate the item with the
[Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/animation).

The animation represents the state of the next item as it moves from
completely unselected (offstage, usually right), to selected (center
stage), to completely unselected (offstage, usually left). The center time
of the animation should correspond to the item's quiscent selected state,
typically in the center of the stage and at the item's largest size.

The default forward animation is a smooth slide at full size from right to
left.

When moving the selection backward, this animation is played in reverse.

  **Kind**: instance property of <code>[SelectionAnimation](#SelectionAnimation)</code>
