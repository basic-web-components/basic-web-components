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
**Mixes**: <code>[ClickSelection](../basic-component-mixins/docs/ClickSelection.md)</code>
  , <code>[ContentAsItems](../basic-component-mixins/docs/ContentAsItems.md)</code>
  , <code>[DirectionSelection](../basic-component-mixins/docs/DirectionSelection.md)</code>
  , <code>[DistributedChildrenAsContent](../basic-component-mixins/docs/DistributedChildrenAsContent.md)</code>
  , <code>[Generic](../basic-component-mixins/docs/Generic.md)</code>
  , <code>[Keyboard](../basic-component-mixins/docs/Keyboard.md)</code>
  , <code>[KeyboardDirection](../basic-component-mixins/docs/KeyboardDirection.md)</code>
  , <code>[KeyboardPagedSelection](../basic-component-mixins/docs/KeyboardPagedSelection.md)</code>
  , <code>[KeyboardPrefixSelection](../basic-component-mixins/docs/KeyboardPrefixSelection.md)</code>
  , <code>[SelectionAriaActive](../basic-component-mixins/docs/SelectionAriaActive.md)</code>
  , <code>[SelectionHighlight](../basic-component-mixins/docs/SelectionHighlight.md)</code>
  , <code>[SelectionInView](../basic-component-mixins/docs/SelectionInView.md)</code>
  , <code>[SingleSelection](../basic-component-mixins/docs/SingleSelection.md)</code>
  

* [ListBox](#ListBox) ⇐ <code>ElementBase</code>
    * [.applySelection(item, selected)](#SingleSelection+applySelection)
    * [.applySelection(item, selected)](#ContentAsItems+applySelection)
    * [.canSelectNext](#SingleSelection+canSelectNext) : <code>boolean</code>
    * [.canSelectPrevious](#SingleSelection+canSelectPrevious) : <code>boolean</code>
    * [.content](#DistributedChildrenAsContent+content) : <code>Array.&lt;HTMLElement&gt;</code>
    * ["content-changed"](#DistributedChildrenAsContent.event_content-changed)
    * [.contentChanged()](#DistributedChildrenAsContent+contentChanged)
    * [.generic](#Generic+generic) : <code>Boolean</code>
    * [.goDown()](#KeyboardDirection+goDown)
    * [.goEnd()](#KeyboardDirection+goEnd)
    * [.goLeft()](#KeyboardDirection+goLeft)
    * [.goRight()](#KeyboardDirection+goRight)
    * [.goStart()](#KeyboardDirection+goStart)
    * [.goUp()](#KeyboardDirection+goUp)
    * [.itemAdded(item)](#ContentAsItems+itemAdded)
    * [.itemAdded(item)](#SingleSelection+itemAdded)
    * [.items](#ContentAsItems+items) : <code>Array.&lt;HTMLElement&gt;</code>
    * ["items-changed"](#ContentAsItems.event_items-changed)
    * [.itemsChanged()](#ContentAsItems+itemsChanged)
    * [.keydown(event)](#Keyboard+keydown) ⇒ <code>boolean</code>
    * [.navigationAxis](#KeyboardDirection+navigationAxis) : <code>string</code>
    * [.pageDown()](#KeyboardPagedSelection+pageDown)
    * [.pageUp()](#KeyboardPagedSelection+pageUp)
    * [.scrollItemIntoView(item)](#SelectionInView+scrollItemIntoView)
    * [.scrollTarget](#KeyboardPagedSelection+scrollTarget) : <code>HTMLElement</code>
    * [.scrollTarget](#SelectionInView+scrollTarget) : <code>HTMLElement</code>
    * ["selected-index-changed"](#SingleSelection.event_selected-index-changed)
    * ["selected-item-changed"](#SingleSelection.event_selected-item-changed)
    * [.selectedIndex](#SingleSelection+selectedIndex) : <code>number</code>
    * [.selectedItem](#SingleSelection+selectedItem) : <code>object</code>
    * [.selectFirst()](#SingleSelection+selectFirst)
    * [.selectionRequired](#SingleSelection+selectionRequired) : <code>boolean</code>
    * [.selectionWraps](#SingleSelection+selectionWraps) : <code>boolean</code>
    * [.selectItemWithTextPrefix(prefix)](#KeyboardPrefixSelection+selectItemWithTextPrefix)
    * [.selectLast()](#SingleSelection+selectLast)
    * [.selectNext()](#SingleSelection+selectNext)
    * [.selectPrevious()](#SingleSelection+selectPrevious)
    * [.value](#ListBox+value) : <code>string</code>
    * ["value-changed"](#ListBox.event_value-changed)

<a name="SingleSelection+applySelection"></a>

### listBox.applySelection(item, selected)
Apply the indicate selection state to the item.

The default implementation of this method does nothing. User-visible
effects will typically be handled by other mixins.

  **Kind**: instance method of <code>[ListBox](#ListBox)</code>. Defined by <code>[SingleSelection](../basic-component-mixins/docs/SingleSelection.md)</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| item | <code>HTMLElement</code> | the item being selected/deselected |
| selected | <code>boolean</code> | true if the item is selected, false if not |

<a name="ContentAsItems+applySelection"></a>

### listBox.applySelection(item, selected)
Apply the selection state to a single item.

Invoke this method to signal that the selected state of the indicated item
has changed. By default, this applies a `selected` CSS class if the item
is selected, and removed it if not selected.

  **Kind**: instance method of <code>[ListBox](#ListBox)</code>. Defined by <code>[ContentAsItems](../basic-component-mixins/docs/ContentAsItems.md)</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| item | <code>HTMLElement</code> | The item whose selection state has changed. |
| selected | <code>boolean</code> | True if the item is selected, false if not. |

<a name="SingleSelection+canSelectNext"></a>

### listBox.canSelectNext : <code>boolean</code>
True if the selection can be moved to the next item, false if not (the
selected item is the last item in the list).

  **Kind**: instance property of <code>[ListBox](#ListBox)</code>. Defined by <code>[SingleSelection](../basic-component-mixins/docs/SingleSelection.md)</code> mixin.
<a name="SingleSelection+canSelectPrevious"></a>

### listBox.canSelectPrevious : <code>boolean</code>
True if the selection can be moved to the previous item, false if not
(the selected item is the first one in the list).

  **Kind**: instance property of <code>[ListBox](#ListBox)</code>. Defined by <code>[SingleSelection](../basic-component-mixins/docs/SingleSelection.md)</code> mixin.
<a name="DistributedChildrenAsContent+content"></a>

### listBox.content : <code>Array.&lt;HTMLElement&gt;</code>
The content of this component, defined to be the flattened array of
children distributed to the component.

  **Kind**: instance property of <code>[ListBox](#ListBox)</code>. Defined by <code>[DistributedChildrenAsContent](../basic-component-mixins/docs/DistributedChildrenAsContent.md)</code> mixin.
<a name="DistributedChildrenAsContent.event_content-changed"></a>

### "content-changed"
This event is raised when the component's contents (including distributed
children) have changed.

  **Kind**: event emitted by <code>[ListBox](#ListBox)</code>. Defined by <code>[DistributedChildrenAsContent](../basic-component-mixins/docs/DistributedChildrenAsContent.md)</code> mixin.
<a name="DistributedChildrenAsContent+contentChanged"></a>

### listBox.contentChanged()
Invoked when the contents of the component (including distributed
children) have changed.

This method is also invoked when a component is first instantiated; the
contents have essentially "changed" from being nothing. This allows the
component to perform initial processing of its children.

  **Kind**: instance method of <code>[ListBox](#ListBox)</code>. Defined by <code>[DistributedChildrenAsContent](../basic-component-mixins/docs/DistributedChildrenAsContent.md)</code> mixin.
<a name="Generic+generic"></a>

### listBox.generic : <code>Boolean</code>
True if the component would like to receive generic styling.

This property is true by default — set it to false to turn off all
generic styles. This makes it easier to apply custom styling; you won't
have to explicitly override styling you don't want.

  **Kind**: instance property of <code>[ListBox](#ListBox)</code>. Defined by <code>[Generic](../basic-component-mixins/docs/Generic.md)</code> mixin.
**Default**: <code>true</code>  
<a name="KeyboardDirection+goDown"></a>

### listBox.goDown()
Invoked when the user wants to go/navigate down.
The default implementation of this method does nothing.

  **Kind**: instance method of <code>[ListBox](#ListBox)</code>. Defined by <code>[KeyboardDirection](../basic-component-mixins/docs/KeyboardDirection.md)</code> mixin.
<a name="KeyboardDirection+goEnd"></a>

### listBox.goEnd()
Invoked when the user wants to go/navigate to the end (e.g., of a list).
The default implementation of this method does nothing.

  **Kind**: instance method of <code>[ListBox](#ListBox)</code>. Defined by <code>[KeyboardDirection](../basic-component-mixins/docs/KeyboardDirection.md)</code> mixin.
<a name="KeyboardDirection+goLeft"></a>

### listBox.goLeft()
Invoked when the user wants to go/navigate left.
The default implementation of this method does nothing.

  **Kind**: instance method of <code>[ListBox](#ListBox)</code>. Defined by <code>[KeyboardDirection](../basic-component-mixins/docs/KeyboardDirection.md)</code> mixin.
<a name="KeyboardDirection+goRight"></a>

### listBox.goRight()
Invoked when the user wants to go/navigate right.
The default implementation of this method does nothing.

  **Kind**: instance method of <code>[ListBox](#ListBox)</code>. Defined by <code>[KeyboardDirection](../basic-component-mixins/docs/KeyboardDirection.md)</code> mixin.
<a name="KeyboardDirection+goStart"></a>

### listBox.goStart()
Invoked when the user wants to go/navigate to the start (e.g., of a
list). The default implementation of this method does nothing.

  **Kind**: instance method of <code>[ListBox](#ListBox)</code>. Defined by <code>[KeyboardDirection](../basic-component-mixins/docs/KeyboardDirection.md)</code> mixin.
<a name="KeyboardDirection+goUp"></a>

### listBox.goUp()
Invoked when the user wants to go/navigate up.
The default implementation of this method does nothing.

  **Kind**: instance method of <code>[ListBox](#ListBox)</code>. Defined by <code>[KeyboardDirection](../basic-component-mixins/docs/KeyboardDirection.md)</code> mixin.
<a name="ContentAsItems+itemAdded"></a>

### listBox.itemAdded(item)
This method is invoked whenever a new item is added to the list.

The default implementation of this method does nothing. You can override
this to perform per-item initialization.

  **Kind**: instance method of <code>[ListBox](#ListBox)</code>. Defined by <code>[ContentAsItems](../basic-component-mixins/docs/ContentAsItems.md)</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| item | <code>HTMLElement</code> | The item that was added. |

<a name="SingleSelection+itemAdded"></a>

### listBox.itemAdded(item)
Handle a new item being added to the list.

The default implementation of this method simply sets the item's
selection state to false.

  **Kind**: instance method of <code>[ListBox](#ListBox)</code>. Defined by <code>[SingleSelection](../basic-component-mixins/docs/SingleSelection.md)</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| item | <code>HTMLElement</code> | the item being added |

<a name="ContentAsItems+items"></a>

### listBox.items : <code>Array.&lt;HTMLElement&gt;</code>
The current set of items in the list. See the top-level documentation for
mixin for a description of how items differ from plain content.

  **Kind**: instance property of <code>[ListBox](#ListBox)</code>. Defined by <code>[ContentAsItems](../basic-component-mixins/docs/ContentAsItems.md)</code> mixin.
<a name="ContentAsItems.event_items-changed"></a>

### "items-changed"
Fires when the items in the list change.

  **Kind**: event emitted by <code>[ListBox](#ListBox)</code>. Defined by <code>[ContentAsItems](../basic-component-mixins/docs/ContentAsItems.md)</code> mixin.
<a name="ContentAsItems+itemsChanged"></a>

### listBox.itemsChanged()
This method is invoked when the underlying contents change. It is also
invoked on component initialization – since the items have "changed" from
being nothing.

  **Kind**: instance method of <code>[ListBox](#ListBox)</code>. Defined by <code>[ContentAsItems](../basic-component-mixins/docs/ContentAsItems.md)</code> mixin.
<a name="Keyboard+keydown"></a>

### listBox.keydown(event) ⇒ <code>boolean</code>
Handle the indicated keyboard event.

The default implementation of this method does nothing. This will
typically be handled by other mixins.

  **Kind**: instance method of <code>[ListBox](#ListBox)</code>. Defined by <code>[Keyboard](../basic-component-mixins/docs/Keyboard.md)</code> mixin.
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

  **Kind**: instance property of <code>[ListBox](#ListBox)</code>. Defined by <code>[KeyboardDirection](../basic-component-mixins/docs/KeyboardDirection.md)</code> mixin.
<a name="KeyboardPagedSelection+pageDown"></a>

### listBox.pageDown()
Scroll down one page.

  **Kind**: instance method of <code>[ListBox](#ListBox)</code>. Defined by <code>[KeyboardPagedSelection](../basic-component-mixins/docs/KeyboardPagedSelection.md)</code> mixin.
<a name="KeyboardPagedSelection+pageUp"></a>

### listBox.pageUp()
Scroll up one page.

  **Kind**: instance method of <code>[ListBox](#ListBox)</code>. Defined by <code>[KeyboardPagedSelection](../basic-component-mixins/docs/KeyboardPagedSelection.md)</code> mixin.
<a name="SelectionInView+scrollItemIntoView"></a>

### listBox.scrollItemIntoView(item)
Scroll the given element completely into view, minimizing the degree of
scrolling performed.

Blink has a `scrollIntoViewIfNeeded()` function that does something
similar, but unfortunately it's non-standard, and in any event often ends
up scrolling more than is absolutely necessary.

  **Kind**: instance method of <code>[ListBox](#ListBox)</code>. Defined by <code>[SelectionInView](../basic-component-mixins/docs/SelectionInView.md)</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| item | <code>HTMLElement</code> | the item to scroll into view. |

<a name="KeyboardPagedSelection+scrollTarget"></a>

### listBox.scrollTarget : <code>HTMLElement</code>
The element that should be scrolled with the Page Up/Down keys.
Default is the current element.

  **Kind**: instance property of <code>[ListBox](#ListBox)</code>. Defined by <code>[KeyboardPagedSelection](../basic-component-mixins/docs/KeyboardPagedSelection.md)</code> mixin.
<a name="SelectionInView+scrollTarget"></a>

### listBox.scrollTarget : <code>HTMLElement</code>
The element that should be scrolled to bring an item into view.

The default value of this property is the element itself.

  **Kind**: instance property of <code>[ListBox](#ListBox)</code>. Defined by <code>[SelectionInView](../basic-component-mixins/docs/SelectionInView.md)</code> mixin.
<a name="SingleSelection.event_selected-index-changed"></a>

### "selected-index-changed"
Fires when the selectedIndex property changes.

  **Kind**: event emitted by <code>[ListBox](#ListBox)</code>. Defined by <code>[SingleSelection](../basic-component-mixins/docs/SingleSelection.md)</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| detail.selectedIndex | <code>number</code> | The new selected index. |

<a name="SingleSelection.event_selected-item-changed"></a>

### "selected-item-changed"
Fires when the selectedItem property changes.

  **Kind**: event emitted by <code>[ListBox](#ListBox)</code>. Defined by <code>[SingleSelection](../basic-component-mixins/docs/SingleSelection.md)</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| detail.selectedItem | <code>HTMLElement</code> | The new selected item. |
| detail.previousItem | <code>HTMLElement</code> | The previously selected item. |

<a name="SingleSelection+selectedIndex"></a>

### listBox.selectedIndex : <code>number</code>
The index of the item which is currently selected.

If `selectionWraps` is false, the index is -1 if there is no selection.
In that case, setting the index to -1 will deselect any
currently-selected item.

  **Kind**: instance property of <code>[ListBox](#ListBox)</code>. Defined by <code>[SingleSelection](../basic-component-mixins/docs/SingleSelection.md)</code> mixin.
<a name="SingleSelection+selectedItem"></a>

### listBox.selectedItem : <code>object</code>
The currently selected item, or null if there is no selection.

Setting this property to null deselects any currently-selected item.

  **Kind**: instance property of <code>[ListBox](#ListBox)</code>. Defined by <code>[SingleSelection](../basic-component-mixins/docs/SingleSelection.md)</code> mixin.
<a name="SingleSelection+selectFirst"></a>

### listBox.selectFirst()
Select the first item in the list.

  **Kind**: instance method of <code>[ListBox](#ListBox)</code>. Defined by <code>[SingleSelection](../basic-component-mixins/docs/SingleSelection.md)</code> mixin.
<a name="SingleSelection+selectionRequired"></a>

### listBox.selectionRequired : <code>boolean</code>
True if the list should always have a selection (if it has items).

  **Kind**: instance property of <code>[ListBox](#ListBox)</code>. Defined by <code>[SingleSelection](../basic-component-mixins/docs/SingleSelection.md)</code> mixin.
**Default**: <code>false</code>  
<a name="SingleSelection+selectionWraps"></a>

### listBox.selectionWraps : <code>boolean</code>
True if selection navigations wrap from last to first, and vice versa.

  **Kind**: instance property of <code>[ListBox](#ListBox)</code>. Defined by <code>[SingleSelection](../basic-component-mixins/docs/SingleSelection.md)</code> mixin.
**Default**: <code>false</code>  
<a name="KeyboardPrefixSelection+selectItemWithTextPrefix"></a>

### listBox.selectItemWithTextPrefix(prefix)
Select the first item whose text content begins with the given prefix.

  **Kind**: instance method of <code>[ListBox](#ListBox)</code>. Defined by <code>[KeyboardPrefixSelection](../basic-component-mixins/docs/KeyboardPrefixSelection.md)</code> mixin.

| Param | Description |
| --- | --- |
| prefix | [String] The prefix string to search for |

<a name="SingleSelection+selectLast"></a>

### listBox.selectLast()
Select the last item in the list.

  **Kind**: instance method of <code>[ListBox](#ListBox)</code>. Defined by <code>[SingleSelection](../basic-component-mixins/docs/SingleSelection.md)</code> mixin.
<a name="SingleSelection+selectNext"></a>

### listBox.selectNext()
Select the next item in the list.

  **Kind**: instance method of <code>[ListBox](#ListBox)</code>. Defined by <code>[SingleSelection](../basic-component-mixins/docs/SingleSelection.md)</code> mixin.
<a name="SingleSelection+selectPrevious"></a>

### listBox.selectPrevious()
Select the previous item in the list.

If the list has no selection, the last item will be selected.

  **Kind**: instance method of <code>[ListBox](#ListBox)</code>. Defined by <code>[SingleSelection](../basic-component-mixins/docs/SingleSelection.md)</code> mixin.
<a name="ListBox+value"></a>

### listBox.value : <code>string</code>
The text content of the selected item.

Setting this value to a string will attempt to select the first list item
whose text content match that string. Setting this to a string not matching
any list item will result in no selection.

  **Kind**: instance property of <code>[ListBox](#ListBox)</code>
<a name="ListBox.event_value-changed"></a>

### "value-changed"
Fires when the list's value property changes.

  **Kind**: event emitted by <code>[ListBox](#ListBox)</code>
