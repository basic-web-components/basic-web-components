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
**Mixes**: <code>[ClickSelectionMixin](../basic-component-mixins/docs/ClickSelectionMixin.md)</code>
  , <code>[ContentItemsMixin](../basic-component-mixins/docs/ContentItemsMixin.md)</code>
  , <code>[DirectionSelectionMixin](../basic-component-mixins/docs/DirectionSelectionMixin.md)</code>
  , <code>[DistributedChildrenContentMixin](../basic-component-mixins/docs/DistributedChildrenContentMixin.md)</code>
  , <code>[GenericMixin](../basic-component-mixins/docs/GenericMixin.md)</code>
  , <code>[KeyboardMixin](../basic-component-mixins/docs/KeyboardMixin.md)</code>
  , <code>[KeyboardDirectionMixin](../basic-component-mixins/docs/KeyboardDirectionMixin.md)</code>
  , <code>[KeyboardPagedSelectionMixin](../basic-component-mixins/docs/KeyboardPagedSelectionMixin.md)</code>
  , <code>[KeyboardPrefixSelectionMixin](../basic-component-mixins/docs/KeyboardPrefixSelectionMixin.md)</code>
  , <code>[SelectionAriaActiveMixin](../basic-component-mixins/docs/SelectionAriaActiveMixin.md)</code>
  , <code>[SelectionHighlightMixin](../basic-component-mixins/docs/SelectionHighlightMixin.md)</code>
  , <code>[SelectionInViewMixin](../basic-component-mixins/docs/SelectionInViewMixin.md)</code>
  , <code>[SingleSelectionMixin](../basic-component-mixins/docs/SingleSelectionMixin.md)</code>
  
**Mixis**: SelectedItemTextValueMixin  

* [ListBox](#ListBox) ⇐ <code>ElementBase</code>
    * [.canSelectNext](#SingleSelection+canSelectNext) : <code>boolean</code>
    * [.canSelectPrevious](#SingleSelection+canSelectPrevious) : <code>boolean</code>
    * [.content](#DistributedChildrenContent+content) : <code>Array.&lt;HTMLElement&gt;</code>
    * ["content-changed"](#DistributedChildrenContent.event_content-changed)
    * [.contentChanged()](#DistributedChildrenContent+contentChanged)
    * [.generic](#Generic+generic) : <code>Boolean</code>
    * [.goDown()](#KeyboardDirection+symbols.goDown)
    * [.goEnd()](#KeyboardDirection+symbols.goEnd)
    * [.goLeft()](#KeyboardDirection+symbols.goLeft)
    * [.goRight()](#KeyboardDirection+symbols.goRight)
    * [.goStart()](#KeyboardDirection+symbols.goStart)
    * [.goUp()](#KeyboardDirection+symbols.goUp)
    * [.itemAdded(item)](#ContentItems+symbols.itemAdded)
    * [.itemAdded(item)](#SingleSelection+symbols.itemAdded)
    * [.items](#ContentItems+items) : <code>Array.&lt;HTMLElement&gt;</code>
    * ["items-changed"](#ContentItems.event_items-changed)
    * [.itemsChanged()](#ContentItems+symbols.itemsChanged)
    * [.itemSelected(item, selected)](#SingleSelection+symbols.itemSelected)
    * [.itemSelected(item, selected)](#ContentItems+symbols.itemSelected)
    * [.keydown(event)](#Keyboard+symbols.keydown) ⇒ <code>boolean</code>
    * [.navigationAxis](#KeyboardDirection+navigationAxis) : <code>string</code>
    * [.pageDown()](#KeyboardPagedSelection+pageDown)
    * [.pageUp()](#KeyboardPagedSelection+pageUp)
    * [.scrollItemIntoView(item)](#SelectionInView+scrollItemIntoView)
    * [.scrollTarget](#SelectionInView+scrollTarget) : <code>HTMLElement</code>
    * [.scrollTarget](#KeyboardPagedSelection+scrollTarget) : <code>HTMLElement</code>
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
    * ["value-changed"](#ListBox.event_value-changed)

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
<a name="DistributedChildrenContent+content"></a>

### listBox.content : <code>Array.&lt;HTMLElement&gt;</code>
The content of this component, defined to be the flattened array of
children distributed to the component.

  **Kind**: instance property of <code>[ListBox](#ListBox)</code>. Defined by <code>[DistributedChildrenContent](../basic-component-mixins/docs/DistributedChildrenContent.md)</code> mixin.
<a name="DistributedChildrenContent.event_content-changed"></a>

### "content-changed"
This event is raised when the component's contents (including distributed
children) have changed.

  **Kind**: event emitted by <code>[ListBox](#ListBox)</code>. Defined by <code>[DistributedChildrenContent](../basic-component-mixins/docs/DistributedChildrenContent.md)</code> mixin.
<a name="DistributedChildrenContent+contentChanged"></a>

### listBox.contentChanged()
Invoked when the contents of the component (including distributed
children) have changed.

This method is also invoked when a component is first instantiated; the
contents have essentially "changed" from being nothing. This allows the
component to perform initial processing of its children.

  **Kind**: instance method of <code>[ListBox](#ListBox)</code>. Defined by <code>[DistributedChildrenContent](../basic-component-mixins/docs/DistributedChildrenContent.md)</code> mixin.
<a name="Generic+generic"></a>

### listBox.generic : <code>Boolean</code>
True if the component would like to receive generic styling.

This property is true by default — set it to false to turn off all
generic styles. This makes it easier to apply custom styling; you won't
have to explicitly override styling you don't want.

  **Kind**: instance property of <code>[ListBox](#ListBox)</code>. Defined by <code>[Generic](../basic-component-mixins/docs/Generic.md)</code> mixin.
**Default**: <code>true</code>  
<a name="KeyboardDirection+symbols.goDown"></a>

### ListBox.goDown()
Invoked when the user wants to go/navigate down.
The default implementation of this method does nothing.

  **Kind**: static method of <code>[ListBox](#ListBox)</code>. Defined by <code>[KeyboardDirection#symbols](../basic-component-mixins/docs/KeyboardDirection#symbols.md)</code> mixin.
<a name="KeyboardDirection+symbols.goEnd"></a>

### ListBox.goEnd()
Invoked when the user wants to go/navigate to the end (e.g., of a list).
The default implementation of this method does nothing.

  **Kind**: static method of <code>[ListBox](#ListBox)</code>. Defined by <code>[KeyboardDirection#symbols](../basic-component-mixins/docs/KeyboardDirection#symbols.md)</code> mixin.
<a name="KeyboardDirection+symbols.goLeft"></a>

### ListBox.goLeft()
Invoked when the user wants to go/navigate left.
The default implementation of this method does nothing.

  **Kind**: static method of <code>[ListBox](#ListBox)</code>. Defined by <code>[KeyboardDirection#symbols](../basic-component-mixins/docs/KeyboardDirection#symbols.md)</code> mixin.
<a name="KeyboardDirection+symbols.goRight"></a>

### ListBox.goRight()
Invoked when the user wants to go/navigate right.
The default implementation of this method does nothing.

  **Kind**: static method of <code>[ListBox](#ListBox)</code>. Defined by <code>[KeyboardDirection#symbols](../basic-component-mixins/docs/KeyboardDirection#symbols.md)</code> mixin.
<a name="KeyboardDirection+symbols.goStart"></a>

### ListBox.goStart()
Invoked when the user wants to go/navigate to the start (e.g., of a
list). The default implementation of this method does nothing.

  **Kind**: static method of <code>[ListBox](#ListBox)</code>. Defined by <code>[KeyboardDirection#symbols](../basic-component-mixins/docs/KeyboardDirection#symbols.md)</code> mixin.
<a name="KeyboardDirection+symbols.goUp"></a>

### ListBox.goUp()
Invoked when the user wants to go/navigate up.
The default implementation of this method does nothing.

  **Kind**: static method of <code>[ListBox](#ListBox)</code>. Defined by <code>[KeyboardDirection#symbols](../basic-component-mixins/docs/KeyboardDirection#symbols.md)</code> mixin.
<a name="ContentItems+symbols.itemAdded"></a>

### ListBox.itemAdded(item)
This method is invoked whenever a new item is added to the list.

The default implementation of this method does nothing. You can override
this to perform per-item initialization.

  **Kind**: static method of <code>[ListBox](#ListBox)</code>. Defined by <code>[ContentItems#symbols](../basic-component-mixins/docs/ContentItems#symbols.md)</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| item | <code>HTMLElement</code> | The item that was added. |

<a name="SingleSelection+symbols.itemAdded"></a>

### ListBox.itemAdded(item)
Handle a new item being added to the list.

The default implementation of this method simply sets the item's
selection state to false.

  **Kind**: static method of <code>[ListBox](#ListBox)</code>. Defined by <code>[SingleSelection#symbols](../basic-component-mixins/docs/SingleSelection#symbols.md)</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| item | <code>HTMLElement</code> | the item being added |

<a name="ContentItems+items"></a>

### listBox.items : <code>Array.&lt;HTMLElement&gt;</code>
The current set of items in the list. See the top-level documentation for
mixin for a description of how items differ from plain content.

  **Kind**: instance property of <code>[ListBox](#ListBox)</code>. Defined by <code>[ContentItems](../basic-component-mixins/docs/ContentItems.md)</code> mixin.
<a name="ContentItems.event_items-changed"></a>

### "items-changed"
Fires when the items in the list change.

  **Kind**: event emitted by <code>[ListBox](#ListBox)</code>. Defined by <code>[ContentItems](../basic-component-mixins/docs/ContentItems.md)</code> mixin.
<a name="ContentItems+symbols.itemsChanged"></a>

### ListBox.itemsChanged()
This method is invoked when the underlying contents change. It is also
invoked on component initialization – since the items have "changed" from
being nothing.

  **Kind**: static method of <code>[ListBox](#ListBox)</code>. Defined by <code>[ContentItems#symbols](../basic-component-mixins/docs/ContentItems#symbols.md)</code> mixin.
<a name="SingleSelection+symbols.itemSelected"></a>

### ListBox.itemSelected(item, selected)
Apply the indicate selection state to the item.

The default implementation of this method does nothing. User-visible
effects will typically be handled by other mixins.

  **Kind**: static method of <code>[ListBox](#ListBox)</code>. Defined by <code>[SingleSelection#symbols](../basic-component-mixins/docs/SingleSelection#symbols.md)</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| item | <code>HTMLElement</code> | the item being selected/deselected |
| selected | <code>boolean</code> | true if the item is selected, false if not |

<a name="ContentItems+symbols.itemSelected"></a>

### ListBox.itemSelected(item, selected)
The selection state for a single item has changed.

Invoke this method to signal that the selected state of the indicated item
has changed. By default, this applies a `selected` CSS class if the item
is selected, and removed it if not selected.

  **Kind**: static method of <code>[ListBox](#ListBox)</code>. Defined by <code>[ContentItems#symbols](../basic-component-mixins/docs/ContentItems#symbols.md)</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| item | <code>HTMLElement</code> | The item whose selection state has changed. |
| selected | <code>boolean</code> | True if the item is selected, false if not. |

<a name="Keyboard+symbols.keydown"></a>

### ListBox.keydown(event) ⇒ <code>boolean</code>
Handle the indicated keyboard event.

The default implementation of this method does nothing. This will
typically be handled by other mixins.

  **Kind**: static method of <code>[ListBox](#ListBox)</code>. Defined by <code>[Keyboard#symbols](../basic-component-mixins/docs/Keyboard#symbols.md)</code> mixin.
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

<a name="SelectionInView+scrollTarget"></a>

### listBox.scrollTarget : <code>HTMLElement</code>
The element that should be scrolled to bring an item into view.

The default value of this property is the element itself.

  **Kind**: instance property of <code>[ListBox](#ListBox)</code>. Defined by <code>[SelectionInView](../basic-component-mixins/docs/SelectionInView.md)</code> mixin.
<a name="KeyboardPagedSelection+scrollTarget"></a>

### listBox.scrollTarget : <code>HTMLElement</code>
The element that should be scrolled with the Page Up/Down keys.
Default is the current element.

  **Kind**: instance property of <code>[ListBox](#ListBox)</code>. Defined by <code>[KeyboardPagedSelection](../basic-component-mixins/docs/KeyboardPagedSelection.md)</code> mixin.
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

A `selectedIndex` of -1 indicates there is no selection. Setting this
property to -1 will remove any existing selection.

  **Kind**: instance property of <code>[ListBox](#ListBox)</code>. Defined by <code>[SingleSelection](../basic-component-mixins/docs/SingleSelection.md)</code> mixin.
<a name="SingleSelection+selectedItem"></a>

### listBox.selectedItem : <code>object</code>
The currently selected item, or null if there is no selection.

Setting this property to null deselects any currently-selected item.
Setting this property to an object that is not in the list has no effect.

TODO: Even if selectionRequired, can still explicitly set selectedItem to null.
TODO: If selectionRequired, leave selection alone?

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
<a name="ListBox.event_value-changed"></a>

### "value-changed"
Fires when the list's value property changes.

  **Kind**: event emitted by <code>[ListBox](#ListBox)</code>
