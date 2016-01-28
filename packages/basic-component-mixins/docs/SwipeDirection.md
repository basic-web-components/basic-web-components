<a name="SwipeDirection"></a>
## SwipeDirection
Mixin which maps touch gestures (swipe left, swipe right) to direction
semantics (go right, go left).

By default, this mixin presents no user-visible effects; it just indicates a
direction in which the user is currently swiping or has finished swiping. To
map the direction to a change in selection, use the DirectionSelection mixin.

**Kind**: global class  
<a name="undefinedposition"></a>
## undefinedposition : <code>number</code>
The distance the user has moved the first touchpoint since the beginning
of a drag, expressed as a fraction of the element's width.

**Kind**: global variable  
**Properties**

| Name |
| --- |
| position | 

<a name="goLeft"></a>
## goLeft()
Invoked when the user wants to go/navigate left.
The default implementation of this method does nothing.

**Kind**: global function  
<a name="goRight"></a>
## goRight()
Invoked when the user wants to go/navigate right.
The default implementation of this method does nothing.

**Kind**: global function  
<a name="showTransition"></a>
## showTransition(value)
Determine whether a transition should be shown during a swipe.

Components like carousels often define animated CSS transitions for sliding
effects. Such a transition should usually *not* be applied while the user
is dragging, because a CSS animation will introduce a lag that makes the
swipe feel sluggish. Instead, as long as the user is dragging with their
finger down, the transition should be suppressed. When the user releases
their finger, the transition can be restored, allowing the animation to
show the carousel sliding into its final position.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>boolean</code> | true if a component-provided transition should be        shown, false if not. |

