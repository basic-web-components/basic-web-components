# API Documentation
<a name="FractionalSelection"></a>
## FractionalSelection
Adds support for fractional selection: treating a selection as a real
number that combines an integer portion (an index into a list), and a
fraction (indicating how far of the way we are to the next or previous
item).

This is useful in components that support incremental operations during
dragging and swiping. Example: a carousel component has several items, and the
currently selected item is item 3. The user begins swiping to the left,
moving towards selecting item 4. Halfway through this operation, the
fractional selection value is 3.5.

This value permits communication between mixins like
[SwipeDirection](./SwipeDirection.md) and
[TrackpadDirection](./TrackpadDirection.md), which generate fractional
selection values, and mixins like
[SelectionAnimation](./SelectionAnimation.md), which can render selection
at a fractional value.

  **Kind**: global class
<a name="FractionalSelection+selectedFraction"></a>
### fractionalSelection.selectedFraction : <code>number</code>
A fractional value indicating how far the user has currently advanced to
the next/previous item. E.g., a `selectedFraction` of 3.5 indicates the
user is halfway between items 3 and 4.

  **Kind**: instance property of <code>[FractionalSelection](#FractionalSelection)</code>
