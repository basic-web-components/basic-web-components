<a name="KeyboardDirection"></a>
## KeyboardDirection
Mixin which maps direction keys (Left, Right, etc.) to direction
semantics (go left, go right, etc.).

This mixin expects the component to invoke a `keydown` method when a key is
pressed. You can use the Keyboard mixin for that purpose, or wire up your
own keyboard handling and call `keydown` yourself.

This mixin calls methods such as `goLeft` and `goRight`. You can define what
that means by implementing those methods yourself. If you want to use
direction keys to navigate a selection, use this mixin with the
DirectionSelection mixin.

**Kind**: global class  
<a name="goDown"></a>
## goDown()
Invoked when the user wants to go/navigate down.
The default implementation of this method does nothing.

**Kind**: global function  
<a name="goEnd"></a>
## goEnd()
Invoked when the user wants to go/navigate to the end (e.g., of a list).
The default implementation of this method does nothing.

**Kind**: global function  
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
<a name="goStart"></a>
## goStart()
Invoked when the user wants to go/navigate to the start (e.g., of a list).
The default implementation of this method does nothing.

**Kind**: global function  
<a name="goUp"></a>
## goUp()
Invoked when the user wants to go/navigate up.
The default implementation of this method does nothing.

**Kind**: global function  
