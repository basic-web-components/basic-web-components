<a name="ListBox"></a>
## ListBox
A single-selection list box that supports selection highlighting (using the
system highlight color) and keyboard navigation.

The user can select an item with the mouse/touch or keyboard: Up/Down, Page
Up/Down, Home/End.

Like other Basic Web Components, this can handle distributed content: you can
include a content element inside a basic-list-box, and the list will navigate
through the distributed content. Note: for the time being, if you do use basic-
list-box inside your own component, it appears that you'll need to wire up your
own keyboard navigation, and forward the list navigation keys to the basic-list-
box.

This component includes basic ARIA support to provide a reasonable default
experience, e.g., for screen readers. The list component itself will be assigned
an appropriate ARIA role (default is "listbox"). The ID of the selected item
will be reflected in an "aria-activedescendant" attribute applied to the list.
To support this feature, all items in the list need unique IDs. If an item does
not have an ID, basic-list-box will automatically assign a default ID.

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
<a name="value"></a>
## value : <code>String</code>
The text content of the selected item.

Setting this to text not found in any list item will set selectedItem to
null.

**Kind**: global variable  
**Properties**

| Name |
| --- |
| value | 

