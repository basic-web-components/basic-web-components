# API Documentation
<a name="ContentAsItems"></a>

## ContentAsItems
Mixin which maps content semantics (elements) to list item semantics.

Items differ from element contents in several ways:

* They are often referenced via index.
* They may have a selection state.
* It's common to do work to initialize the appearance or state of a new
  item.
* Auxiliary invisible child elements are filtered out and not counted as
  items. Auxiliary elements include link, script, style, and template
  elements. This filtering ensures that those auxiliary elements can be
  used in markup inside of a list without being treated as list items.

This mixin expects a component to provide a `content` property returning a
raw set of elements. You can provide that yourself, or use the
[DistributedChildrenAsContent](DistributedChildrenAsContent.md) mixin.

The most commonly referenced property defined by this mixin is the `items`
property. To avoid having to do work each time that property is requested,
this mixin supports an optimized mode. If you invoke the `contentChanged`
method when the set of items changes, the mixin concludes that you'll take
care of notifying it of future changes, and turns on the optimization. With
that on, the mixin saves a reference to the computed set of items, and will
return that immediately on subsequent calls to the `items` property. If you
use this mixin in conjunction with the
[DistributedChildrenAsContent](DistributedChildrenAsContent.md) mixin, the
`contentChanged` method will be invoked for you when the element's children
change, turning on the optimization automatically.

  **Kind**: global class

* [ContentAsItems](#ContentAsItems)
    * [.items](#ContentAsItems+items) : <code>Array.&lt;HTMLElement&gt;</code>
    * ["items-changed"](#ContentAsItems.event_items-changed)
    * [.itemsChanged()](#ContentAsItems+itemsChanged)

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
