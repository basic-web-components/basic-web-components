# API Documentation
<a name="KeyboardPagedSelection"></a>

## KeyboardPagedSelection
Mixin which maps page keys (Page Up, Page Down) into operations that move
the selection by one page.

The keyboard interaction model generally follows that of Microsoft Windows'
list boxes instead of those in OS X:

* The Page Up/Down and Home/End keys actually change the selection, rather
  than just scrolling. The former behavior seems more generally useful for
  keyboard users.

* Pressing Page Up/Down will change the selection to the topmost/bottommost
  visible item if the selection is not already there. Thereafter, the key
  will move the selection up/down by a page, and (per the above point) make
  the selected item visible.

To ensure the selected item is in view following use of Page Up/Down, use
the related [SelectionInView](SelectionInView.md) mixin.

This mixin expects the component to invoke a `keydown` method when a key is
pressed. You can use the [Keyboard](Keyboard.md) mixin for that purpose, or
wire up your own keyboard handling and call `keydown` yourself.

  **Kind**: global class

* [KeyboardPagedSelection](#KeyboardPagedSelection)
    * [.pageDown()](#KeyboardPagedSelection+pageDown)
    * [.pageUp()](#KeyboardPagedSelection+pageUp)
    * [.scrollTarget](#KeyboardPagedSelection+scrollTarget) : <code>HTMLElement</code>

<a name="KeyboardPagedSelection+pageDown"></a>

### keyboardPagedSelection.pageDown()
Scroll down one page.

  **Kind**: instance method of <code>[KeyboardPagedSelection](#KeyboardPagedSelection)</code>
<a name="KeyboardPagedSelection+pageUp"></a>

### keyboardPagedSelection.pageUp()
Scroll up one page.

  **Kind**: instance method of <code>[KeyboardPagedSelection](#KeyboardPagedSelection)</code>
<a name="KeyboardPagedSelection+scrollTarget"></a>

### keyboardPagedSelection.scrollTarget : <code>HTMLElement</code>
The element that should be scrolled with the Page Up/Down keys.
Default is the current element.

  **Kind**: instance property of <code>[KeyboardPagedSelection](#KeyboardPagedSelection)</code>
