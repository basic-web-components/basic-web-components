<a name="SelectionAriaActive"></a>
## SelectionAriaActive
Mixin which treats the selected item in a list as the active item
in ARIA accessibility terms

Handling ARIA selection state properly is actually quite complex. Not only
does the selected item need to be marked as selected; the other items should
be marked as *not* selected. Additionally, the outermost element with the
keyboard focus needs to have attributes set on it so that the selection is
knowable at the list level. That in turn requires that all items in the list
have ID attributes assigned to them. (To that end, this mixin will assign
generated IDs to any item that doesn't already have an ID.)

**Kind**: global class  
