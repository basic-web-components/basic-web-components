<a name="SlidingViewport"></a>
## SlidingViewport
Presents list items in a viewport such that only a single item is
visible at a time

Navigating between items will be represented with a horizontal visual
sliding effect.

This component handles the rendering responsibilities for the basic-carousel
component.

This component currently requires that you explicitly apply a size to it.

**Kind**: global class  
<a name="position"></a>
## position : <code>Number</code>
The fractional position of the element's moving surface while it is being
moved (dragged/scrolled/etc.).

This is expressed as a fraction of the element's width. If the value is
positive, the surface is being moved to the left; if negative, the surface
is being moved to the right. E.g., a value of 0.5 indicates the surface has
moved half the element's width to the left.

**Kind**: global variable  
**Properties**

| Name |
| --- |
| position | 

