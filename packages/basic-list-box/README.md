<a name="ListBox"></a>
## ListBox
A single-selection list box that supports selection highlighting
(using the system highlight color) and keyboard navigation

[Live demo](http://basicwebcomponents.org/basic-web-components/packages/basic-list-box/)

The user can select an item with the mouse/touch or keyboard: Up/Down, Page
Up/Down, Home/End.

Like other Basic Web Components, this can handle distributed content: you can
include a content element inside a basic-list-box, and the list will navigate
through the distributed content.

This component includes basic ARIA support to provide a reasonable default
experience, e.g., for screen readers. The list component itself will be
assigned an appropriate ARIA role (default is "listbox"). The ID of the
selected item will be reflected in an "aria-activedescendant" attribute
applied to the list. To support this feature, all items in the list need
unique IDs. If an item does not have an ID, basic-list-box will automatically
assign a default ID.

The keyboard interaction model generally follows that of Microsoft Windows'
list boxes instead of those in OS X:

* The Page Up/Down and Home/End keys actually move the selection, rather than
  just scrolling the list. The former behavior seems more generally useful for
  keyboard users.

* Pressing Page Up/Down will move the selection to the topmost/bottommost
  visible item if the selection is not already there. Thereafter, the key will
  move the selection up/down by a page, and (per the above point) make the
  selected item visible.

Programmatically selecting an item (by setting the selected property) scrolls
the item into view.

The user can also select an item by typing the beginning of an item's text.

**Kind**: global class  
**Mixes**: <code>DistributedChildrenAsContent</code>, <code>ClickSelection</code>, <code>TargetInCollective</code>, <code>ContentAsItems</code>, <code>DirectionSelection</code>, <code>Generic</code>, <code>ItemsSelection</code>, <code>SelectionAriaActive</code>, <code>Keyboard</code>, <code>KeyboardDirection</code>, <code>KeyboardPagedSelection</code>, <code>KeyboardPrefixSelection</code>, <code>SelectionHighlight</code>, <code>SelectionInView</code>  
<a name="value"></a>
## value : <code>String</code>
The text content of the selected item.

Setting this value to a string will attempt to select the first list item
whose text content match that string. Setting this to a string not matching
any list item will result in no selection.

**Kind**: global variable  
**Properties**

| Name |
| --- |
| value | 

<a name="event_value-changed"></a>
## "value-changed"
Fires when the list's value property changes.

**Kind**: event emitted  
