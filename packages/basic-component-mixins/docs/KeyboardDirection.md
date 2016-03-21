# API Documentation
<a name="KeyboardDirection"></a>
## KeyboardDirection
Mixin which maps direction keys (Left, Right, etc.) to direction semantics
(go left, go right, etc.).

This mixin expects the component to invoke a `keydown` method when a key is
pressed. You can use the [Keyboard](Keyboard.md) mixin for that purpose, or
wire up your own keyboard handling and call `keydown` yourself.

This mixin calls methods such as `goLeft` and `goRight`. You can define
what that means by implementing those methods yourself. If you want to use
direction keys to navigate a selection, use this mixin with the
[DirectionSelection](DirectionSelection.md) mixin.

  **Kind**: global class

* [KeyboardDirection](#KeyboardDirection)
    * [.navigationAxis](#KeyboardDirection+navigationAxis) : <code>string</code>
    * [.goDown()](#KeyboardDirection+goDown)
    * [.goEnd()](#KeyboardDirection+goEnd)
    * [.goLeft()](#KeyboardDirection+goLeft)
    * [.goRight()](#KeyboardDirection+goRight)
    * [.goStart()](#KeyboardDirection+goStart)
    * [.goUp()](#KeyboardDirection+goUp)

<a name="KeyboardDirection+navigationAxis"></a>
### keyboardDirection.navigationAxis : <code>string</code>
Indicates the direction of permitted navigation with the keyboard.

Accepted values are "horizontal", "vertical", or "both" (the default).
If this property is "horizontal", the Up Arrow and Down Arrow keys will
be ignored. Conversely, if this is "vertical", the Left Arrow and Right
Arrow keys will be ignored.

  **Kind**: instance property of <code>[KeyboardDirection](#KeyboardDirection)</code>
<a name="KeyboardDirection+goDown"></a>
### keyboardDirection.goDown()
Invoked when the user wants to go/navigate down.
The default implementation of this method does nothing.

  **Kind**: instance method of <code>[KeyboardDirection](#KeyboardDirection)</code>
<a name="KeyboardDirection+goEnd"></a>
### keyboardDirection.goEnd()
Invoked when the user wants to go/navigate to the end (e.g., of a list).
The default implementation of this method does nothing.

  **Kind**: instance method of <code>[KeyboardDirection](#KeyboardDirection)</code>
<a name="KeyboardDirection+goLeft"></a>
### keyboardDirection.goLeft()
Invoked when the user wants to go/navigate left.
The default implementation of this method does nothing.

  **Kind**: instance method of <code>[KeyboardDirection](#KeyboardDirection)</code>
<a name="KeyboardDirection+goRight"></a>
### keyboardDirection.goRight()
Invoked when the user wants to go/navigate right.
The default implementation of this method does nothing.

  **Kind**: instance method of <code>[KeyboardDirection](#KeyboardDirection)</code>
<a name="KeyboardDirection+goStart"></a>
### keyboardDirection.goStart()
Invoked when the user wants to go/navigate to the start (e.g., of a
list). The default implementation of this method does nothing.

  **Kind**: instance method of <code>[KeyboardDirection](#KeyboardDirection)</code>
<a name="KeyboardDirection+goUp"></a>
### keyboardDirection.goUp()
Invoked when the user wants to go/navigate up.
The default implementation of this method does nothing.

  **Kind**: instance method of <code>[KeyboardDirection](#KeyboardDirection)</code>
