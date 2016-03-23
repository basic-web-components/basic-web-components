# API Documentation
<a name="SwipeDirection"></a>
## SwipeDirection
Mixin which maps touch gestures (swipe left, swipe right) to direction
semantics (go right, go left).

By default, this mixin presents no user-visible effects; it just indicates a
direction in which the user is currently swiping or has finished swiping. To
map the direction to a change in selection, use the
[DirectionSelection](DirectionSelection.md) mixin.

  **Kind**: global class

* [SwipeDirection](#SwipeDirection)
    * [.goLeft()](#SwipeDirection+goLeft)
    * [.goRight()](#SwipeDirection+goRight)
    * [.position](#SwipeDirection+position) : <code>number</code>
    * [.showTransition(value)](#SwipeDirection+showTransition)

<a name="SwipeDirection+goLeft"></a>
### swipeDirection.goLeft()
Invoked when the user wants to go/navigate left.
The default implementation of this method does nothing.

  **Kind**: instance method of <code>[SwipeDirection](#SwipeDirection)</code>
<a name="SwipeDirection+goRight"></a>
### swipeDirection.goRight()
Invoked when the user wants to go/navigate right.
The default implementation of this method does nothing.

  **Kind**: instance method of <code>[SwipeDirection](#SwipeDirection)</code>
<a name="SwipeDirection+position"></a>
### swipeDirection.position : <code>number</code>
The distance the user has moved the first touchpoint since the beginning
of a drag, expressed as a fraction of the element's width.

  **Kind**: instance property of <code>[SwipeDirection](#SwipeDirection)</code>
<a name="SwipeDirection+showTransition"></a>
### swipeDirection.showTransition(value)
Determine whether a transition should be shown during a swipe.

Components like carousels often define animated CSS transitions for
sliding effects. Such a transition should usually *not* be applied while
the user is dragging, because a CSS animation will introduce a lag that
makes the swipe feel sluggish. Instead, as long as the user is dragging
with their finger down, the transition should be suppressed. When the
user releases their finger, the transition can be restored, allowing the
animation to show the carousel sliding into its final position.

  **Kind**: instance method of <code>[SwipeDirection](#SwipeDirection)</code>

| Param | Type | Description |
| --- | --- | --- |
| value | <code>boolean</code> | true if a component-provided transition should be shown, false if not. |

