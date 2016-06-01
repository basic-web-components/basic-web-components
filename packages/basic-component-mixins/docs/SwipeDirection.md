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
    * [.travelFraction](#SwipeDirection+travelFraction) : <code>number</code>

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
<a name="SwipeDirection+travelFraction"></a>
### swipeDirection.travelFraction : <code>number</code>
The distance the first touchpoint has traveled since the beginning of a
drag, expressed as a fraction of the element's width.

  **Kind**: instance property of <code>[SwipeDirection](#SwipeDirection)</code>
