# API Documentation
<a name="SlidingViewport"></a>

## SlidingViewport ⇐ <code>ElementBase</code>
Presents list items in a viewport such that only a single item is visible at
a time.

Navigating between items will be represented with a horizontal visual
sliding effect. For more complex visual effects, see
[basic-animation-stage](../basic-animation-stage), which takes advantage of
the Web Animations API.

This component handles the rendering responsibilities for the basic-carousel
component.

This component currently requires that you explicitly apply a size to it.

  **Kind**: global class
**Extends:** <code>ElementBase</code>  
<a name="SlidingViewport+selectedFraction"></a>

### slidingViewport.selectedFraction : <code>number</code>
A fractional value indicating how far the user has currently advanced to
the next/previous item. E.g., a `selectedFraction` of 3.5 indicates the
user is halfway between items 3 and 4.

For more details, see the [fractionalSelection](fractionalSelection.md)
helper functions.

  **Kind**: instance property of <code>[SlidingViewport](#SlidingViewport)</code>
