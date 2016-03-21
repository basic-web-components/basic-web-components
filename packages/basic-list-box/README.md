# API Documentation
<a name="ListBox"></a>
## ListBox ⇐ <code>ElementBase</code>
A single-selection list box that supports selection highlighting (using the
system highlight color) and keyboard navigation.

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
  just scrolling the list. The former behavior seems more generally useful
  for keyboard users.

* Pressing Page Up/Down will move the selection to the topmost/bottommost
  visible item if the selection is not already there. Thereafter, the key
  will move the selection up/down by a page, and (per the above point) make
  the selected item visible.

Programmatically selecting an item (by setting the selected property) scrolls
the item into view.

The user can also select an item by typing the beginning of an item's text.

  **Kind**: global class
**Extends:** <code>ElementBase</code>  
**Mixes**: <code>ClickSelection</code>, <code>ContentAsItems</code>, <code>DirectionSelection</code>, <code>DistributedChildrenAsContent</code>, <code>Generic</code>, <code>ItemsSelection</code>, <code>Keyboard</code>, <code>KeyboardDirection</code>, <code>KeyboardPagedSelection</code>, <code>KeyboardPrefixSelection</code>, <code>ObserveContentChanges</code>, <code>SelectionAriaActive</code>, <code>SelectionHighlight</code>, <code>SelectionInView</code>, <code>TargetInCollective</code>  

* [ListBox](#ListBox) ⇐ <code>ElementBase</code>
    * [.value](#ListBox+value) : <code>string</code>
    * [.items](#ContentAsItems+items) : <code>Array.&lt;HTMLElement&gt;</code>
    * [.applySelection(item, selected)](#ContentAsItems+applySelection)
    * [.itemAdded(item)](#ContentAsItems+itemAdded)
    * [.itemsChanged()](#ContentAsItems+itemsChanged)
    * [.content](#DistributedChildrenAsContent+content) : <code>Array.&lt;HTMLElement&gt;</code>
    * [.generic](#Generic+generic) : <code>Boolean</code>
    * [.canSelectNext](#ItemsSelection+canSelectNext) : <code>boolean</code>
    * [.canSelectPrevious](#ItemsSelection+canSelectPrevious) : <code>boolean</code>
    * [.selectedIndex](#ItemsSelection+selectedIndex) : <code>number</code>
    * [.selectedItem](#ItemsSelection+selectedItem) : <code>object</code>
    * [.selectionRequired](#ItemsSelection+selectionRequired) : <code>boolean</code>
    * [.applySelection(item, selected)](#ItemsSelection+applySelection)
    * [.itemAdded(item)](#ItemsSelection+itemAdded)
    * [.selectFirst()](#ItemsSelection+selectFirst)
    * [.selectLast()](#ItemsSelection+selectLast)
    * [.selectNext()](#ItemsSelection+selectNext)
    * [.selectPrevious()](#ItemsSelection+selectPrevious)
    * [.keydown(event)](#Keyboard+keydown) ⇒ <code>boolean</code>
    * [.navigationAxis](#KeyboardDirection+navigationAxis) : <code>string</code>
    * [.goDown()](#KeyboardDirection+goDown)
    * [.goEnd()](#KeyboardDirection+goEnd)
    * [.goLeft()](#KeyboardDirection+goLeft)
    * [.goRight()](#KeyboardDirection+goRight)
    * [.goStart()](#KeyboardDirection+goStart)
    * [.goUp()](#KeyboardDirection+goUp)
    * [.scrollTarget](#KeyboardPagedSelection+scrollTarget) : <code>HTMLElement</code>
    * [.pageDown()](#KeyboardPagedSelection+pageDown)
    * [.pageUp()](#KeyboardPagedSelection+pageUp)
    * [.selectItemWithTextPrefix(prefix)](#KeyboardPrefixSelection+selectItemWithTextPrefix)
    * [.contentChanged()](#ObserveContentChanges+contentChanged)
    * [.scrollTarget](#SelectionInView+scrollTarget) : <code>HTMLElement</code>
    * [.scrollItemIntoView(item)](#SelectionInView+scrollItemIntoView)
    * [.target](#TargetInCollective+target) : <code>HTMLElement</code>

<a name="ListBox+value"></a>
### listBox.value : <code>string</code>
The text content of the selected item.

Setting this value to a string will attempt to select the first list item
whose text content match that string. Setting this to a string not matching
any list item will result in no selection.

  **Kind**: instance property of <code>[ListBox](#ListBox)</code>
<a name="ContentAsItems+items"></a>
### listBox.items : <code>Array.&lt;HTMLElement&gt;</code>
The current set of items in the list. See the top-level documentation for
mixin for a description of how items differ from plain content.

  **Kind**: instance property of <code>[ListBox](#ListBox)</code>. Defined by <code>ContentAsItems</code> mixin.
<a name="ContentAsItems+applySelection"></a>
### listBox.applySelection(item, selected)
Apply the selection state to a single item.

Invoke this method to signal that the selected state of the indicated item
has changed. By default, this applies a `selected` CSS class if the item
is selected, and removed it if not selected.

  **Kind**: instance method of <code>[ListBox](#ListBox)</code>. Defined by <code>ContentAsItems</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| item | <code>HTMLElement</code> | The item whose selection state has changed. |
| selected | <code>boolean</code> | True if the item is selected, false if not. |

<a name="ContentAsItems+itemAdded"></a>
### listBox.itemAdded(item)
This method is invoked whenever a new item is added to the list.

The default implementation of this method does nothing. You can override
this to perform per-item initialization.

  **Kind**: instance method of <code>[ListBox](#ListBox)</code>. Defined by <code>ContentAsItems</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| item | <code>HTMLElement</code> | The item that was added. |

<a name="ContentAsItems+itemsChanged"></a>
### listBox.itemsChanged()
This method is invoked when the underlying contents change. It is also
invoked on component initialization – since the items have "changed" from
being nothing.

  **Kind**: instance method of <code>[ListBox](#ListBox)</code>. Defined by <code>ContentAsItems</code> mixin.
<a name="DistributedChildrenAsContent+content"></a>
### listBox.content : <code>Array.&lt;HTMLElement&gt;</code>
The content of this component, defined to be the flattened array of
children distributed to the component.

  **Kind**: instance property of <code>[ListBox](#ListBox)</code>. Defined by <code>DistributedChildrenAsContent</code> mixin.
<a name="Generic+generic"></a>
### listBox.generic : <code>Boolean</code>
True if the component would like to receive generic styling.

This property is true by default — set it to false to turn off all
generic styles. This makes it easier to apply custom styling; you won't
have to explicitly override styling you don't want.

  **Kind**: instance property of <code>[ListBox](#ListBox)</code>. Defined by <code>Generic</code> mixin.
**Default**: <code>true</code>  
<a name="ItemsSelection+canSelectNext"></a>
### listBox.canSelectNext : <code>boolean</code>
True if the selection can be moved to the next item, false if not (the
selected item is the last item in the list).

  **Kind**: instance property of <code>[ListBox](#ListBox)</code>. Defined by <code>ItemsSelection</code> mixin.
<a name="ItemsSelection+canSelectPrevious"></a>
### listBox.canSelectPrevious : <code>boolean</code>
True if the selection can be moved to the previous item, false if not
(the selected item is the first one in the list).

  **Kind**: instance property of <code>[ListBox](#ListBox)</code>. Defined by <code>ItemsSelection</code> mixin.
<a name="ItemsSelection+selectedIndex"></a>
### listBox.selectedIndex : <code>number</code>
The index of the item which is currently selected, or -1 if there is no
selection.

Setting the index to -1 deselects any current-selected item.

  **Kind**: instance property of <code>[ListBox](#ListBox)</code>. Defined by <code>ItemsSelection</code> mixin.
<a name="ItemsSelection+selectedItem"></a>
### listBox.selectedItem : <code>object</code>
The currently selected item, or null if there is no selection.

Setting this property to null deselects any currently-selected item.

  **Kind**: instance property of <code>[ListBox](#ListBox)</code>. Defined by <code>ItemsSelection</code> mixin.
<a name="ItemsSelection+selectionRequired"></a>
### listBox.selectionRequired : <code>boolean</code>
True if the list should always have a selection (if it has items).

  **Kind**: instance property of <code>[ListBox](#ListBox)</code>. Defined by <code>ItemsSelection</code> mixin.
<a name="ItemsSelection+applySelection"></a>
### listBox.applySelection(item, selected)
Apply the indicate selection state to the item.

The default implementation of this method does nothing. User-visible
effects will typically be handled by other mixins.

  **Kind**: instance method of <code>[ListBox](#ListBox)</code>. Defined by <code>ItemsSelection</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| item | <code>HTMLElement</code> | the item being selected/deselected |
| selected | <code>boolean</code> | true if the item is selected, false if not |

<a name="ItemsSelection+itemAdded"></a>
### listBox.itemAdded(item)
Handle a new item being added to the list.

The default implementation of this method simply sets the item's
selection state to false.

  **Kind**: instance method of <code>[ListBox](#ListBox)</code>. Defined by <code>ItemsSelection</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| item | <code>HTMLElement</code> | the item being added |

<a name="ItemsSelection+selectFirst"></a>
### listBox.selectFirst()
Select the first item in the list.

  **Kind**: instance method of <code>[ListBox](#ListBox)</code>. Defined by <code>ItemsSelection</code> mixin.
<a name="ItemsSelection+selectLast"></a>
### listBox.selectLast()
Select the last item in the list.

  **Kind**: instance method of <code>[ListBox](#ListBox)</code>. Defined by <code>ItemsSelection</code> mixin.
<a name="ItemsSelection+selectNext"></a>
### listBox.selectNext()
Select the next item in the list.

  **Kind**: instance method of <code>[ListBox](#ListBox)</code>. Defined by <code>ItemsSelection</code> mixin.
<a name="ItemsSelection+selectPrevious"></a>
### listBox.selectPrevious()
Select the previous item in the list.

  **Kind**: instance method of <code>[ListBox](#ListBox)</code>. Defined by <code>ItemsSelection</code> mixin.
<a name="Keyboard+keydown"></a>
### listBox.keydown(event) ⇒ <code>boolean</code>
Handle the indicated keyboard event.

The default implementation of this method does nothing. This will
typically be handled by other mixins.

  **Kind**: instance method of <code>[ListBox](#ListBox)</code>. Defined by <code>Keyboard</code> mixin.
**Returns**: <code>boolean</code> - true if the event was handled  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | the keyboard event |

<a name="KeyboardDirection+navigationAxis"></a>
### listBox.navigationAxis : <code>string</code>
Indicates the direction of permitted navigation with the keyboard.

Accepted values are "horizontal", "vertical", or "both" (the default).
If this property is "horizontal", the Up Arrow and Down Arrow keys will
be ignored. Conversely, if this is "vertical", the Left Arrow and Right
Arrow keys will be ignored.

  **Kind**: instance property of <code>[ListBox](#ListBox)</code>. Defined by <code>KeyboardDirection</code> mixin.
<a name="KeyboardDirection+goDown"></a>
### listBox.goDown()
Invoked when the user wants to go/navigate down.
The default implementation of this method does nothing.

  **Kind**: instance method of <code>[ListBox](#ListBox)</code>. Defined by <code>KeyboardDirection</code> mixin.
<a name="KeyboardDirection+goEnd"></a>
### listBox.goEnd()
Invoked when the user wants to go/navigate to the end (e.g., of a list).
The default implementation of this method does nothing.

  **Kind**: instance method of <code>[ListBox](#ListBox)</code>. Defined by <code>KeyboardDirection</code> mixin.
<a name="KeyboardDirection+goLeft"></a>
### listBox.goLeft()
Invoked when the user wants to go/navigate left.
The default implementation of this method does nothing.

  **Kind**: instance method of <code>[ListBox](#ListBox)</code>. Defined by <code>KeyboardDirection</code> mixin.
<a name="KeyboardDirection+goRight"></a>
### listBox.goRight()
Invoked when the user wants to go/navigate right.
The default implementation of this method does nothing.

  **Kind**: instance method of <code>[ListBox](#ListBox)</code>. Defined by <code>KeyboardDirection</code> mixin.
<a name="KeyboardDirection+goStart"></a>
### listBox.goStart()
Invoked when the user wants to go/navigate to the start (e.g., of a
list). The default implementation of this method does nothing.

  **Kind**: instance method of <code>[ListBox](#ListBox)</code>. Defined by <code>KeyboardDirection</code> mixin.
<a name="KeyboardDirection+goUp"></a>
### listBox.goUp()
Invoked when the user wants to go/navigate up.
The default implementation of this method does nothing.

  **Kind**: instance method of <code>[ListBox](#ListBox)</code>. Defined by <code>KeyboardDirection</code> mixin.
<a name="KeyboardPagedSelection+scrollTarget"></a>
### listBox.scrollTarget : <code>HTMLElement</code>
The element that should be scrolled with the Page Up/Down keys.
Default is the current element.

  **Kind**: instance property of <code>[ListBox](#ListBox)</code>. Defined by <code>KeyboardPagedSelection</code> mixin.
<a name="KeyboardPagedSelection+pageDown"></a>
### listBox.pageDown()
Scroll down one page.

  **Kind**: instance method of <code>[ListBox](#ListBox)</code>. Defined by <code>KeyboardPagedSelection</code> mixin.
<a name="KeyboardPagedSelection+pageUp"></a>
### listBox.pageUp()
Scroll up one page.

  **Kind**: instance method of <code>[ListBox](#ListBox)</code>. Defined by <code>KeyboardPagedSelection</code> mixin.
<a name="KeyboardPrefixSelection+selectItemWithTextPrefix"></a>
### listBox.selectItemWithTextPrefix(prefix)
Select the first item whose text content begins with the given prefix.

  **Kind**: instance method of <code>[ListBox](#ListBox)</code>. Defined by <code>KeyboardPrefixSelection</code> mixin.

| Param | Description |
| --- | --- |
| prefix | [String] The prefix string to search for |

<a name="ObserveContentChanges+contentChanged"></a>
### listBox.contentChanged()
Invoked when the contents of the component (including distributed
children) have changed.

This method is also invoked when a component is first instantiated; the
contents have essentially "changed" from being nothing. This allows the
component to perform initial processing of its children.

  **Kind**: instance method of <code>[ListBox](#ListBox)</code>. Defined by <code>ObserveContentChanges</code> mixin.
<a name="SelectionInView+scrollTarget"></a>
### listBox.scrollTarget : <code>HTMLElement</code>
The element that should be scrolled to bring an item into view.

The default value of this property is the element itself.

  **Kind**: instance property of <code>[ListBox](#ListBox)</code>. Defined by <code>SelectionInView</code> mixin.
<a name="SelectionInView+scrollItemIntoView"></a>
### listBox.scrollItemIntoView(item)
Scroll the given element completely into view, minimizing the degree of
scrolling performed.

Blink has a `scrollIntoViewIfNeeded()` function that does something
similar, but unfortunately it's non-standard, and in any event often ends
up scrolling more than is absolutely necessary.

  **Kind**: instance method of <code>[ListBox](#ListBox)</code>. Defined by <code>SelectionInView</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| item | <code>HTMLElement</code> | the item to scroll into view. |

<a name="TargetInCollective+target"></a>
### listBox.target : <code>HTMLElement</code>
Gets/sets the current target of the component.

Set this to point to another element. That target element will be
implicitly added to the component's collective. That is, the component
and its target will share responsibility for handling keyboard events.

You can set this property yourself, or you can use the
ContentFirstChildTarget mixin to automatically set the target to the
component's first child.

  **Kind**: instance property of <code>[ListBox](#ListBox)</code>. Defined by <code>TargetInCollective</code> mixin.
<a name="event_value-changed"></a>
## "value-changed"
Fires when the list's value property changes.

  **Kind**: event emitted
<a name="event_items-changed"></a>
## "items-changed"
Fires when the items in the list change.

  **Kind**: event emitted
<a name="event_selected-item-changed"></a>
## "selected-item-changed"
Fires when the selectedItem property changes.

  **Kind**: event emitted

| Param | Type | Description |
| --- | --- | --- |
| detail.selectedItem | <code>HTMLElement</code> | The new selected item. |
| detail.previousItem | <code>HTMLElement</code> | The previously selected item. |

<a name="event_selected-item-changed"></a>
## "selected-item-changed"
Fires when the selectedIndex property changes.

  **Kind**: event emitted

| Param | Type | Description |
| --- | --- | --- |
| detail.selectedIndex | <code>number</code> | The new selected index. |

<a name="event_content-changed"></a>
## "content-changed"
This event is raised when the component's contents (including distributed
children) have changed.

  **Kind**: event emitted
