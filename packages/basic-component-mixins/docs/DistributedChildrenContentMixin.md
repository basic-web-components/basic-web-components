# API Documentation
<a name="DistributedChildrenContent"></a>

## DistributedChildrenContent
Mixin which defines a component's content as its children, expanding any
nodes distributed to the component's slots.

This also provides notification of changes to a component's content. It
will invoke a `contentChanged` method when the component is first
instantiated, and whenever its distributed children change. This is an
easy way to satisfy the Gold Standard checklist item for monitoring
[Content Changes](https://github.com/webcomponents/gold-standard/wiki/Content-Changes).

Example:

```
let base = DistributedChildrenContentMixin(DistributedChildrenMixin(HTMLElement));
class CountingElement extends base {

  constructor() {
    super();
    let root = this.attachShadow({ mode: 'open' });
    root.innerHTML = `<slot></slot>`;
  }

  contentChanged() {
    // Count the component's children, both initially and when changed.
    this.count = this.distributedChildren.length;
  }

}
```

Note that content change detection depends upon the element having at least
one `slot` element in its shadow subtree.

This mixin is intended for use with the
[DistributedChildrenMixin](DistributedChildrenMixin.md). See that mixin for
a discussion of how that works. This DistributedChildrenContentMixin
provides an easy way of defining the "content" of a component as the
component's distributed children. That in turn lets mixins like
[ContentItemsMixin](ContentItemsMixin.md) manipulate the children as list
items.

  **Kind**: global class

* [DistributedChildrenContent](#DistributedChildrenContent)
    * [.content](#DistributedChildrenContent+content) : <code>Array.&lt;HTMLElement&gt;</code>
    * ["content-changed"](#DistributedChildrenContent.event_content-changed)
    * [.contentChanged()](#DistributedChildrenContent+contentChanged)

<a name="DistributedChildrenContent+content"></a>

### distributedChildrenContent.content : <code>Array.&lt;HTMLElement&gt;</code>
The content of this component, defined to be the flattened array of
children distributed to the component.

  **Kind**: instance property of <code>[DistributedChildrenContent](#DistributedChildrenContent)</code>
<a name="DistributedChildrenContent.event_content-changed"></a>

### "content-changed"
This event is raised when the component's contents (including distributed
children) have changed.

  **Kind**: event emitted by <code>[DistributedChildrenContent](#DistributedChildrenContent)</code>
<a name="DistributedChildrenContent+contentChanged"></a>

### distributedChildrenContent.contentChanged()
Invoked when the contents of the component (including distributed
children) have changed.

This method is also invoked when a component is first instantiated; the
contents have essentially "changed" from being nothing. This allows the
component to perform initial processing of its children.

  **Kind**: instance method of <code>[DistributedChildrenContent](#DistributedChildrenContent)</code>
