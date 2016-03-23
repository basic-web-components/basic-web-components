# API Documentation
<a name="ContentAsItems"></a>
## ContentAsItems
Mixin which maps content semantics (elements) to list item semantics.

This mixin expects a component to provide a `content` property returning a
raw set of elements. You can provide that yourself, or use the
[DistributedChildrenAsContent](DistributedChildrenAsContent.md) mixin.

Items differ from element contents in several ways:

* They are often referenced via index.
* They may have a selection state.
* It's common to do work to initialize the appearance or state of a new
  item.
* Auxiliary invisible child elements are filtered out and not counted as
  items. Auxiliary elements include link, script, style, and template
  elements. This filtering ensures that those auxiliary elements can be
  used in markup inside of a list without being treated as list items.

  **Kind**: global class

* [ContentAsItems](#ContentAsItems)
    * [.applySelection(item, selected)](#ContentAsItems+applySelection)
    * [.itemAdded(item)](#ContentAsItems+itemAdded)
    * [.items](#ContentAsItems+items) : <code>Array.&lt;HTMLElement&gt;</code>
    * ["items-changed"](#ContentAsItems.event_items-changed)
    * [.itemsChanged()](#ContentAsItems+itemsChanged)

<a name="ContentAsItems+applySelection"></a>
### contentAsItems.applySelection(item, selected)
Apply the selection state to a single item.

Invoke this method to signal that the selected state of the indicated item
has changed. By default, this applies a `selected` CSS class if the item
is selected, and removed it if not selected.

  **Kind**: instance method of <code>[ContentAsItems](#ContentAsItems)</code>

| Param | Type | Description |
| --- | --- | --- |
| item | <code>HTMLElement</code> | The item whose selection state has changed. |
| selected | <code>boolean</code> | True if the item is selected, false if not. |

<a name="ContentAsItems+itemAdded"></a>
### contentAsItems.itemAdded(item)
This method is invoked whenever a new item is added to the list.

The default implementation of this method does nothing. You can override
this to perform per-item initialization.

  **Kind**: instance method of <code>[ContentAsItems](#ContentAsItems)</code>

| Param | Type | Description |
| --- | --- | --- |
| item | <code>HTMLElement</code> | The item that was added. |

<a name="ContentAsItems+items"></a>
### contentAsItems.items : <code>Array.&lt;HTMLElement&gt;</code>
The current set of items in the list. See the top-level documentation for
mixin for a description of how items differ from plain content.

  **Kind**: instance property of <code>[ContentAsItems](#ContentAsItems)</code>
<a name="ContentAsItems.event_items-changed"></a>
### "items-changed"
Fires when the items in the list change.

  **Kind**: event emitted by <code>[ContentAsItems](#ContentAsItems)</code>
<a name="ContentAsItems+itemsChanged"></a>
### contentAsItems.itemsChanged()
This method is invoked when the underlying contents change. It is also
invoked on component initialization – since the items have "changed" from
being nothing.

  **Kind**: instance method of <code>[ContentAsItems](#ContentAsItems)</code>
