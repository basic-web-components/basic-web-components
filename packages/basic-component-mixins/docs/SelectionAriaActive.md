# API Documentation
<a name="SelectionAriaActive"></a>
## SelectionAriaActive
Mixin which treats the selected item in a list as the active item in ARIA
accessibility terms.

Handling ARIA selection state properly is actually quite complex:

* The items in the list need to be indicated as possible items via an ARIA
  `role` attribute value such as "option".
* The selected item need to be marked as selected by setting the item's
  `aria-selected` attribute to true *and* the other items need be marked as
  *not* selected by setting `aria-selected` to false.
* The outermost element with the keyboard focus needs to have attributes
  set on it so that the selection is knowable at the list level via the
  `aria-activedescendant` attribute.
* Use of `aria-activedescendant` in turn requires that all items in the
  list have ID attributes assigned to them.

This mixin tries to address all of the above requirements. To that end,
this mixin will assign generated IDs to any item that doesn't already have
an ID.

ARIA relies on elements to provide `role` attributes. This mixin will apply
a default role of "listbox" on the outer list if it doesn't already have an
explicit role. Similarly, this mixin will apply a default role of "option"
to any list item that does not already have a role specified.

This mixin expects a set of members that manage the state of the selection:
`applySelection`, `itemAdded`, and `selectedIndex`. You can supply these
yourself, or do so via the [ItemsSelection](ItemsSelection.md) mixin.

  **Kind**: global class
