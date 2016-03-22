# API Documentation
<a name="SelectionInView"></a>
## SelectionInView
Mixin which scrolls a container to ensure that a newly-selected item is
visible to the user.

When the selected item in a list-like component changes, it's easier for
the to confirm that the selection has changed to an appropriate item if the
user can actually see that item.

This mixin expects a `selectedItem` property to be set when the selection
changes. You can supply that yourself, or use the
[ItemsSelection](ItemsSelection.md) mixin.

  **Kind**: global class

* [SelectionInView](#SelectionInView)
    * [.scrollItemIntoView(item)](#SelectionInView+scrollItemIntoView)
    * [.scrollTarget](#SelectionInView+scrollTarget) : <code>HTMLElement</code>

<a name="SelectionInView+scrollItemIntoView"></a>
### selectionInView.scrollItemIntoView(item)
Scroll the given element completely into view, minimizing the degree of
scrolling performed.

Blink has a `scrollIntoViewIfNeeded()` function that does something
similar, but unfortunately it's non-standard, and in any event often ends
up scrolling more than is absolutely necessary.

  **Kind**: instance method of <code>[SelectionInView](#SelectionInView)</code>

| Param | Type | Description |
| --- | --- | --- |
| item | <code>HTMLElement</code> | the item to scroll into view. |

<a name="SelectionInView+scrollTarget"></a>
### selectionInView.scrollTarget : <code>HTMLElement</code>
The element that should be scrolled to bring an item into view.

The default value of this property is the element itself.

  **Kind**: instance property of <code>[SelectionInView](#SelectionInView)</code>
