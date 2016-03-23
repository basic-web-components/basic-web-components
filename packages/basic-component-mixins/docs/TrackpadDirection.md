# API Documentation
<a name="TrackpadDirection"></a>
## TrackpadDirection
Mixin which maps a horizontal trackpad swipe gestures (or horizontal mouse
wheel actions) to direction semantics.

You can use this mixin with a mixin like
[DirectionSelection](DirectionSelection.md) to let the user change the
selection with the trackpad or mouse wheel.

To respond to the trackpad, we can listen to the DOM's "wheel" events.
These events are fired as the user drags their fingers across a trackpad.
Unfortunately, browsers are missing a critical event — there is no event
when the user *stops* a gestured on the trackpad or mouse wheel.

To make things worse, the mainstream browsers continue to generate fake
wheel events even after the user has stopped dragging their fingers. These
fake events simulate the user gradually slowing down the drag until they
come to a smooth stop. In some contexts, these fake wheel events might be
helpful, but in trying to supply typical trackpad swipe navigation, these
fake events get in the way.

This component uses heuristics to work around these problems, but the
complex nature of the problem make it extremely difficult to achieve the
same degree of trackpad responsiveness possible with native applications.

  **Kind**: global class

* [TrackpadDirection](#TrackpadDirection)
    * [.goLeft()](#TrackpadDirection+goLeft)
    * [.goRight()](#TrackpadDirection+goRight)
    * [.position](#TrackpadDirection+position) : <code>number</code>

<a name="TrackpadDirection+goLeft"></a>
### trackpadDirection.goLeft()
Invoked when the user wants to go/navigate left.
The default implementation of this method does nothing.

  **Kind**: instance method of <code>[TrackpadDirection](#TrackpadDirection)</code>
<a name="TrackpadDirection+goRight"></a>
### trackpadDirection.goRight()
Invoked when the user wants to go/navigate right.
The default implementation of this method does nothing.

  **Kind**: instance method of <code>[TrackpadDirection](#TrackpadDirection)</code>
<a name="TrackpadDirection+position"></a>
### trackpadDirection.position : <code>number</code>
The distance the user has moved the first touchpoint since the beginning
of a trackpad/wheel operation, expressed as a fraction of the element's
width.

  **Kind**: instance property of <code>[TrackpadDirection](#TrackpadDirection)</code>
