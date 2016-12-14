# API Documentation
<a name="HorizontalNavigation"></a>

## HorizontalNavigation
  **Kind**: global class
**Mixes**: <code>[KeyboardMixin](../basic-component-mixins/docs/KeyboardMixin.md)</code>
  , <code>[KeyboardDirectionMixin](../basic-component-mixins/docs/KeyboardDirectionMixin.md)</code>
  , <code>[SwipeDirectionMixin](../basic-component-mixins/docs/SwipeDirectionMixin.md)</code>
  , <code>[TrackpadDirectionMixin](../basic-component-mixins/docs/TrackpadDirectionMixin.md)</code>
  

* [HorizontalNavigation](#HorizontalNavigation)
    * [.goDown()](#KeyboardDirection+symbols.goDown)
    * [.goEnd()](#KeyboardDirection+symbols.goEnd)
    * [.goLeft()](#TrackpadDirection+symbols.goLeft)
    * [.goLeft()](#KeyboardDirection+symbols.goLeft)
    * [.goLeft()](#SwipeDirection+symbols.goLeft)
    * [.goRight()](#KeyboardDirection+symbols.goRight)
    * [.goRight()](#SwipeDirection+symbols.goRight)
    * [.goRight()](#TrackpadDirection+symbols.goRight)
    * [.goStart()](#KeyboardDirection+symbols.goStart)
    * [.goUp()](#KeyboardDirection+symbols.goUp)
    * [.keydown(event)](#Keyboard+symbols.keydown) ⇒ <code>boolean</code>
    * [.navigationAxis](#KeyboardDirection+navigationAxis) : <code>string</code>
    * [.travelFraction](#SwipeDirection+travelFraction) : <code>number</code>
    * [.travelFraction](#TrackpadDirection+travelFraction) : <code>number</code>

<a name="KeyboardDirection+symbols.goDown"></a>

### HorizontalNavigation.goDown()
Invoked when the user wants to go/navigate down.
The default implementation of this method does nothing.

  **Kind**: static method of <code>[HorizontalNavigation](#HorizontalNavigation)</code>. Defined by <code>[KeyboardDirection#symbols](../basic-component-mixins/docs/KeyboardDirection#symbols.md)</code> mixin.
<a name="KeyboardDirection+symbols.goEnd"></a>

### HorizontalNavigation.goEnd()
Invoked when the user wants to go/navigate to the end (e.g., of a list).
The default implementation of this method does nothing.

  **Kind**: static method of <code>[HorizontalNavigation](#HorizontalNavigation)</code>. Defined by <code>[KeyboardDirection#symbols](../basic-component-mixins/docs/KeyboardDirection#symbols.md)</code> mixin.
<a name="TrackpadDirection+symbols.goLeft"></a>

### HorizontalNavigation.goLeft()
Invoked when the user wants to go/navigate left.
The default implementation of this method does nothing.

  **Kind**: static method of <code>[HorizontalNavigation](#HorizontalNavigation)</code>. Defined by <code>[TrackpadDirection#symbols](../basic-component-mixins/docs/TrackpadDirection#symbols.md)</code> mixin.
<a name="KeyboardDirection+symbols.goLeft"></a>

### HorizontalNavigation.goLeft()
Invoked when the user wants to go/navigate left.
The default implementation of this method does nothing.

  **Kind**: static method of <code>[HorizontalNavigation](#HorizontalNavigation)</code>. Defined by <code>[KeyboardDirection#symbols](../basic-component-mixins/docs/KeyboardDirection#symbols.md)</code> mixin.
<a name="SwipeDirection+symbols.goLeft"></a>

### HorizontalNavigation.goLeft()
Invoked when the user wants to go/navigate left.
The default implementation of this method does nothing.

  **Kind**: static method of <code>[HorizontalNavigation](#HorizontalNavigation)</code>. Defined by <code>[SwipeDirection#symbols](../basic-component-mixins/docs/SwipeDirection#symbols.md)</code> mixin.
<a name="KeyboardDirection+symbols.goRight"></a>

### HorizontalNavigation.goRight()
Invoked when the user wants to go/navigate right.
The default implementation of this method does nothing.

  **Kind**: static method of <code>[HorizontalNavigation](#HorizontalNavigation)</code>. Defined by <code>[KeyboardDirection#symbols](../basic-component-mixins/docs/KeyboardDirection#symbols.md)</code> mixin.
<a name="SwipeDirection+symbols.goRight"></a>

### HorizontalNavigation.goRight()
Invoked when the user wants to go/navigate right.
The default implementation of this method does nothing.

  **Kind**: static method of <code>[HorizontalNavigation](#HorizontalNavigation)</code>. Defined by <code>[SwipeDirection#symbols](../basic-component-mixins/docs/SwipeDirection#symbols.md)</code> mixin.
<a name="TrackpadDirection+symbols.goRight"></a>

### HorizontalNavigation.goRight()
Invoked when the user wants to go/navigate right.
The default implementation of this method does nothing.

  **Kind**: static method of <code>[HorizontalNavigation](#HorizontalNavigation)</code>. Defined by <code>[TrackpadDirection#symbols](../basic-component-mixins/docs/TrackpadDirection#symbols.md)</code> mixin.
<a name="KeyboardDirection+symbols.goStart"></a>

### HorizontalNavigation.goStart()
Invoked when the user wants to go/navigate to the start (e.g., of a
list). The default implementation of this method does nothing.

  **Kind**: static method of <code>[HorizontalNavigation](#HorizontalNavigation)</code>. Defined by <code>[KeyboardDirection#symbols](../basic-component-mixins/docs/KeyboardDirection#symbols.md)</code> mixin.
<a name="KeyboardDirection+symbols.goUp"></a>

### HorizontalNavigation.goUp()
Invoked when the user wants to go/navigate up.
The default implementation of this method does nothing.

  **Kind**: static method of <code>[HorizontalNavigation](#HorizontalNavigation)</code>. Defined by <code>[KeyboardDirection#symbols](../basic-component-mixins/docs/KeyboardDirection#symbols.md)</code> mixin.
<a name="Keyboard+symbols.keydown"></a>

### HorizontalNavigation.keydown(event) ⇒ <code>boolean</code>
Handle the indicated keyboard event.

The default implementation of this method does nothing. This will
typically be handled by other mixins.

  **Kind**: static method of <code>[HorizontalNavigation](#HorizontalNavigation)</code>. Defined by <code>[Keyboard#symbols](../basic-component-mixins/docs/Keyboard#symbols.md)</code> mixin.
**Returns**: <code>boolean</code> - true if the event was handled  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | the keyboard event |

<a name="KeyboardDirection+navigationAxis"></a>

### horizontalNavigation.navigationAxis : <code>string</code>
Indicates the direction of permitted navigation with the keyboard.

Accepted values are "horizontal", "vertical", or "both" (the default).
If this property is "horizontal", the Up Arrow and Down Arrow keys will
be ignored. Conversely, if this is "vertical", the Left Arrow and Right
Arrow keys will be ignored.

  **Kind**: instance property of <code>[HorizontalNavigation](#HorizontalNavigation)</code>. Defined by <code>[KeyboardDirection](../basic-component-mixins/docs/KeyboardDirection.md)</code> mixin.
<a name="SwipeDirection+travelFraction"></a>

### horizontalNavigation.travelFraction : <code>number</code>
The distance the first touchpoint has traveled since the beginning of a
drag, expressed as a fraction of the element's width.

  **Kind**: instance property of <code>[HorizontalNavigation](#HorizontalNavigation)</code>. Defined by <code>[SwipeDirection](../basic-component-mixins/docs/SwipeDirection.md)</code> mixin.
<a name="TrackpadDirection+travelFraction"></a>

### horizontalNavigation.travelFraction : <code>number</code>
The distance the user has moved the first touchpoint since the beginning
of a trackpad/wheel operation, expressed as a fraction of the element's
width.

  **Kind**: instance property of <code>[HorizontalNavigation](#HorizontalNavigation)</code>. Defined by <code>[TrackpadDirection](../basic-component-mixins/docs/TrackpadDirection.md)</code> mixin.
