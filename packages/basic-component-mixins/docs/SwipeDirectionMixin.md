# API Documentation
<a name="SwipeDirection"></a>

## SwipeDirection
Mixin which maps touch gestures (swipe left, swipe right) to direction
semantics (go right, go left).

By default, this mixin presents no user-visible effects; it just indicates
a direction in which the user is currently swiping or has finished swiping.
To map the direction to a change in selection, use
[DirectionSelectionMixin](DirectionSelectionMixin.md).

  **Kind**: global class
<a name="SwipeDirection+travelFraction"></a>

### swipeDirection.travelFraction : <code>number</code>
The distance the first touchpoint has traveled since the beginning of a
drag, expressed as a fraction of the element's width.

  **Kind**: instance property of <code>[SwipeDirection](#SwipeDirection)</code>
