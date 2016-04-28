# API Documentation
<a name="SelectionAnimation"></a>
## SelectionAnimation
Animates selection

Expects: selectedItem property.

  **Kind**: global class

* [SelectionAnimation](#SelectionAnimation)
    * [.selectionAnimationDuration](#SelectionAnimation+selectionAnimationDuration) : <code>integer</code>
    * [.selectionAnimationKeyframes](#SelectionAnimation+selectionAnimationKeyframes) : <code>Array.&lt;cssRules&gt;</code>

<a name="SelectionAnimation+selectionAnimationDuration"></a>
### selectionAnimation.selectionAnimationDuration : <code>integer</code>
The duration of a selection animation in milliseconds.

This measures the amount of time required for an item to move from
completely unselected (offstage, usually right) to selected (center
stage), to completely unselected (offstage, usually left).

The default value is 1000 milliseconds (1 second).

  **Kind**: instance property of <code>[SelectionAnimation](#SelectionAnimation)</code>
**Default**: <code>1000</code>  
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
