<a name="KeyboardPagedSelection"></a>
## KeyboardPagedSelection
Mixin which maps page keys (Page Up, Page Down) into operations
that move the selection by one page

The keyboard interaction model generally follows that of Microsoft Windows'
list boxes instead of those in OS X:

* The Page Up/Down and Home/End keys actually change the selection, rather
  than just scrolling. The former behavior seems more generally useful for
  keyboard users.

* Pressing Page Up/Down will change the selection to the topmost/bottommost
  visible item if the selection is not already there. Thereafter, the key
  will move the selection up/down by a page, and (per the above point) make
  the selected item visible.

To ensure the selected item is in view following use of Page Up/Down, use the
related SelectionScroll mixin.

**Kind**: global class  
<a name="undefinedscrollTarget"></a>
## undefinedscrollTarget
The element that should be scrolled with the Page Up/Down keys.
Default is the current element.

**Kind**: global variable  
**Properties**

| Name |
| --- |
| scrollTarget | 

<a name="pageDown"></a>
## pageDown()
Scroll down one page.

**Kind**: global function  
<a name="pageUp"></a>
## pageUp()
Scroll up one page.

**Kind**: global function  
