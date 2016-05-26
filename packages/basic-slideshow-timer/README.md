# API Documentation
<a name="SlideshowTimer"></a>

## SlideshowTimer ⇐ <code>ElementBase</code>
Auxiliary component to advance a selection with a timer.

This component is generally used to wrap a component like
[basic-carousel](../basic-carousel) or the simpler
[basic-sliding-carousel](../basic-sliding-carousel) to add slideshow
behavior. For a standalone slideshow component, see
[basic-slideshow](../basic-slideshow).

Example:

    <basic-slideshow-timer>
      <basic-carousel>
        ... images or other elements ...
      </basic-carousel>
    </basic-slideshow-timer>

The basic-slideshow-timer component provides no visible user interface
elements, and exists chiefly as a convenience for use in scenarios like the
one above. If you're developing a component that will always want to provide
slideshow semantics, consider directly applying the
[TimerSelection](../basic-component-mixins/docs/TimerSelection.md) mixin
to your component.

  **Kind**: global class
**Extends:** <code>ElementBase</code>  
