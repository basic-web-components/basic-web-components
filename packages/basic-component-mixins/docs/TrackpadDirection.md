<a name="TrackpadDirection"></a>
## TrackpadDirection
Mixin which maps a horizontal trackpad swipe gestures (or
horizontal mouse wheel actions) to direction semantics

To respond to the trackpad, we can listen to the DOM's "wheel" events. These
events are fired as the user drags their fingers across a trackpad.
Unfortunately, this scheme is missing a critical event — there is no event
when the user *stops* a gestured on the trackpad.

To complicate matters, the mainstream browsers continue to generate wheel
events even after the user has stopped dragging their fingers. These fake
events simulate the user gradually slowing down the drag until they come to a
smooth stop. In some contexts, these fake wheel events might be helpful, but
in trying to supply typical trackpad swipe navigation, these fake events get
in the way.

This component uses some heuristics to work around these problems, but the
complex nature of the problem make it extremely difficult to achieve the same
degree of trackpad responsiveness possible with native applications.

**Kind**: global class  
