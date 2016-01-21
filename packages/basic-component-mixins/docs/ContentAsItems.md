<a name="ContentAsItems"></a>
## ContentAsItems
Mixin which maps content semantics (children) to list item
semantics

Items differ from children in several ways:

* They are often referenced via index.
* They may have a selection state.
* It's common to do work to initialize the appearance or state of a new item.
* Auxiliary invisible child elements are filtered out and not counted as
  items. Auxiliary elements include link, script, style, and template
  elements.

**Kind**: global class  
<a name="undefineditems"></a>
## undefineditems
The current set of items in the list.

**Kind**: global variable  
**Properties**

| Name | Type |
| --- | --- |
| items | <code>object</code> | 

<a name="indexOfItem"></a>
## indexOfItem(item) ⇒ <code>number</code>
Returns the positional index for the indicated item.

Because this acts like a getter, this does not invoke a base implementation.

**Kind**: global function  
**Returns**: <code>number</code> - The index of the item, or -1 if not found.  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>object</code> | The item whose index is requested. |

<a name="event_items-changed"></a>
## "items-changed"
Fires when the items in the list change.

**Kind**: event emitted  
