# API Documentation
<a name="dampedSelection"></a>

## dampedSelection(selection, itemCount) ⇒ <code>number</code>
Dampen a selection that goes past the beginning or end of a list. This is
generally used to produce a visual effect of tension as the user tries to
go further in a direction that has no more items.

Example: suppose `itemCount` is 5, indicating a list of 5 items. The index of
the last item is 4. If the `selection` parameter is 4.5, the user is trying
to go past this last item. When a damping function is applied, the resulting
value will be less than 4.5 (the actual value will be 4.25). When this
selection state is rendered, the user will see that, each unit distance the
drag travels has less and less visible effect. This is perceived as tension.

  **Kind**: global function
**Returns**: <code>number</code> - A real number representing the damped selection value.  

| Param | Type | Description |
| --- | --- | --- |
| selection | <code>number</code> | A real number indicating a selection position |
| itemCount | <code>number</code> | An integer for the number of items in the list |

<a name="elementSelection"></a>

## elementSelection(element)
Return the current fractional selection value for the given element.

This simply adds the element's `selectedIndex` and `selectedFraction`
properties.

  **Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| element | <code>HTMLElement</code> | An element that supports selection |

<a name="selectionParts"></a>

## selectionParts(selection) ⇒ <code>object</code>
Breaks a fractional selection into its integer and fractional parts.

Example: if passed 3.5, this returns { index: 3, fraction: 5 }.

  **Kind**: global function
**Returns**: <code>object</code> - - An object with an `index` property holding the
selection's integer component, and a `fraction` property holding the
selection's fractional component.  

| Param | Type | Description |
| --- | --- | --- |
| selection | <code>number</code> | – A real number representing a selection point |

<a name="wrappedSelection"></a>

## wrappedSelection(selection, itemCount) ⇒ <code>number</code>
Returns a fractional selection point after accounting for wrapping, ensuring
that the integer portion of the selection stays between 0 and `itemCount`-1.
That is, the integer portion will always be a valid index into the list.

Example of wrapping past the end of the list: if `selection` is 5.5 and
`itemCount` is 5, this returns 0.5. Example of wrapping past the beginning of
the list: if `selection` is 0.5 and `itemCount` is 5, this returns 4.5.

  **Kind**: global function
**Returns**: <code>number</code> - - The result of wrapping the selection point  

| Param | Type | Description |
| --- | --- | --- |
| selection | <code>number</code> | A real number representing a selection point |
| itemCount | <code>number</code> | The number of items in the list |

<a name="wrappedSelectionParts"></a>

## wrappedSelectionParts(selection, itemCount, wrap) ⇒ <code>object</code>
Return the parts of a selection, first wrapping if necessary.

  **Kind**: global function
**Returns**: <code>object</code> - – The parts of the selection, using the same format as
`selectionParts`.  

| Param | Type | Description |
| --- | --- | --- |
| selection | <code>number</code> | – A real number representing a selection point |
| itemCount | <code>number</code> | The number of items in the list |
| wrap | <code>boolean</code> | – True if the selection should wrap to stay within the list |

