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
<a name="KeyboardDirection+navigationAxis"></a>

### keyboardDirection.navigationAxis : <code>string</code>
Indicates the direction of permitted navigation with the keyboard.

Accepted values are "horizontal", "vertical", or "both" (the default).
If this property is "horizontal", the Up Arrow and Down Arrow keys will
be ignored. Conversely, if this is "vertical", the Left Arrow and Right
Arrow keys will be ignored.

  **Kind**: instance property of <code>[KeyboardDirection](#KeyboardDirection)</code>
