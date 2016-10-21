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
    * [.touchEnd(clientX, clientY)](#SwipeDirection+touchEnd)
    * [.touchMove(clientX, clientY)](#SwipeDirection+touchMove)
    * [.touchStart(clientX, clientY)](#SwipeDirection+touchStart)
    * [.travelFraction](#SwipeDirection+travelFraction) : <code>number</code>

<a name="SwipeDirection+touchEnd"></a>

### swipeDirection.touchEnd(clientX, clientY)
Invoked when the user has finished a touch operation.

  **Kind**: instance method of <code>[SwipeDirection](#SwipeDirection)</code>

| Param | Type | Description |
| --- | --- | --- |
| clientX | <code>number</code> | The horizontal component of the first touch point |
| clientY | <code>number</code> | The vertical component of the first touch point |

<a name="SwipeDirection+touchMove"></a>

### swipeDirection.touchMove(clientX, clientY)
Invoked when the user has moved during a touch operation.

  **Kind**: instance method of <code>[SwipeDirection](#SwipeDirection)</code>

| Param | Type | Description |
| --- | --- | --- |
| clientX | <code>number</code> | The horizontal component of the first touch point |
| clientY | <code>number</code> | The vertical component of the first touch point |

<a name="SwipeDirection+touchStart"></a>

### swipeDirection.touchStart(clientX, clientY)
Invoked when the user has begun a touch operation.

  **Kind**: instance method of <code>[SwipeDirection](#SwipeDirection)</code>

| Param | Type | Description |
| --- | --- | --- |
| clientX | <code>number</code> | The horizontal component of the first touch point |
| clientY | <code>number</code> | The vertical component of the first touch point |

<a name="SwipeDirection+travelFraction"></a>

### swipeDirection.travelFraction : <code>number</code>
The distance the first touchpoint has traveled since the beginning of a
drag, expressed as a fraction of the element's width.

  **Kind**: instance property of <code>[SwipeDirection](#SwipeDirection)</code>
