# API Documentation
<a name="DistributedChildren"></a>

## DistributedChildren
Mixin which defines helpers for accessing a component's distributed
children as a flattened array or string.

The standard DOM API provides several ways of accessing child content:
`children`, `childNodes`, and `textContent`. None of these functions are
Shadow DOM aware. This mixin defines variations of those functions that
*are* Shadow DOM aware.

Example: you create a component `<count-children>` that displays a number
equal to the number of children placed inside that component. If someone
instantiates your component like:

    <count-children>
      <div></div>
      <div></div>
      <div></div>
    </count-children>

Then the component should show "3", because there are three children. To
calculate the number of children, the component can just calculate
`this.children.length`. However, suppose someone instantiates your
component inside one of their own components, and puts a `<slot>` element
inside your component:

    <count-children>
      <slot></slot>
    </count-children>

If your component only looks at `this.children`, it will always see exactly
one child — the `<slot>` element. But the user looking at the page will
*see* any nodes distributed to that slot. To match what the user sees, your
component should expand any `<slot>` elements it contains.

That is the problem this mixin solves. After applying this mixin, your
component code has access to `this.distributedChildren`, whose `length`
will return the total number of all children distributed to your component
in the composed tree.

Note: The latest Custom Elements API design calls for a new function,
`getAssignedNodes` that takes an optional `deep` parameter, that will solve
this problem at the API level.

  **Kind**: global class

* [DistributedChildren](#DistributedChildren)
    * [.distributedChildNodes](#DistributedChildren+distributedChildNodes) : <code>Array.&lt;Node&gt;</code>
    * [.distributedChildren](#DistributedChildren+distributedChildren) : <code>Array.&lt;HTMLElement&gt;</code>
    * [.distributedTextContent](#DistributedChildren+distributedTextContent) : <code>string</code>

<a name="DistributedChildren+distributedChildNodes"></a>

### distributedChildren.distributedChildNodes : <code>Array.&lt;Node&gt;</code>
An in-order collection of child nodes, expanding any slot elements. Like
the standard childNodes property, this includes text nodes.

  **Kind**: instance property of <code>[DistributedChildren](#DistributedChildren)</code>
<a name="DistributedChildren+distributedChildren"></a>

### distributedChildren.distributedChildren : <code>Array.&lt;HTMLElement&gt;</code>
An in-order collection of children, expanding any slot elements. Like the
standard children property, this skips text nodes.

  **Kind**: instance property of <code>[DistributedChildren](#DistributedChildren)</code>
<a name="DistributedChildren+distributedTextContent"></a>

### distributedChildren.distributedTextContent : <code>string</code>
The concatenated text content of all child nodes, expanding any slot
elements.

  **Kind**: instance property of <code>[DistributedChildren](#DistributedChildren)</code>
