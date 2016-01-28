<a name="DistributedChildren"></a>
## DistributedChildren
Mixin which defines helpers for accessing a component's
distributed children as a flattened array or string.

The standard DOM API provides several ways of accessing child content:
`children`, `childNodes`, and `textContent`. None of these functions are
Shadow DOM aware. This mixin defines variations of those functions that
*are* Shadow DOM aware.

Note: The latest Custom Elements API design calls for a new function,
`getAssignedNodes` that takes an optional `deep` parameter. This mixin does
not yet take advantage of that API, but should.

**Kind**: global class  
<a name="undefineddistributedChildren"></a>
## undefineddistributedChildren() ⇒ <code>Array.&lt;HTMLElement&gt;</code>
An in-order collection of children, expanding any slot elements. Like the
standard children property, this skips text nodes.

**Kind**: global function  
<a name="undefineddistributedChildNodes"></a>
## undefineddistributedChildNodes() ⇒ <code>Array.&lt;Node&gt;</code>
An in-order collection of child nodes, expanding any slot elements. Like
the standard childNodes property, this includes text nodes.

**Kind**: global function  
<a name="undefineddistributedTextContent"></a>
## undefineddistributedTextContent() ⇒ <code>string</code>
The concatenated text content of all child nodes, expanding any slot
elements.

**Kind**: global function  
