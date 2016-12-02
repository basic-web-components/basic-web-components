# API Documentation
<a name="SpreadItems"></a>

## SpreadItems ⇐ <code>ElementBase</code>
Spreads out a set of items horizontally so they take equal space.

[Live demo](http://basicwebcomponents.org/basic-web-components/packages/basic-spread-items/)

This component is used, for example, by the basic-sliding-viewport component
to ensure that children of different size will take up the same amount of
horizontal space.

This component currently requires an explicit size by applied to it.

  **Kind**: global class
**Extends:** <code>ElementBase</code>  
**Mixes**: <code>[DistributedChildrenContentMixin](../basic-component-mixins/docs/DistributedChildrenContentMixin.md)</code>
  

* [SpreadItems](#SpreadItems) ⇐ <code>ElementBase</code>
    * [.content](#DistributedChildrenContent+content) : <code>Array.&lt;HTMLElement&gt;</code>
    * ["content-changed"](#DistributedChildrenContent.event_content-changed)
    * [.contentChanged()](#DistributedChildrenContent+contentChanged)

<a name="DistributedChildrenContent+content"></a>

### spreadItems.content : <code>Array.&lt;HTMLElement&gt;</code>
The content of this component, defined to be the flattened array of
children distributed to the component.

  **Kind**: instance property of <code>[SpreadItems](#SpreadItems)</code>. Defined by <code>[DistributedChildrenContent](../basic-component-mixins/docs/DistributedChildrenContent.md)</code> mixin.
<a name="DistributedChildrenContent.event_content-changed"></a>

### "content-changed"
This event is raised when the component's contents (including distributed
children) have changed.

  **Kind**: event emitted by <code>[SpreadItems](#SpreadItems)</code>. Defined by <code>[DistributedChildrenContent](../basic-component-mixins/docs/DistributedChildrenContent.md)</code> mixin.
<a name="DistributedChildrenContent+contentChanged"></a>

### spreadItems.contentChanged()
Invoked when the contents of the component (including distributed
children) have changed.

This method is also invoked when a component is first instantiated; the
contents have essentially "changed" from being nothing. This allows the
component to perform initial processing of its children.

  **Kind**: instance method of <code>[SpreadItems](#SpreadItems)</code>. Defined by <code>[DistributedChildrenContent](../basic-component-mixins/docs/DistributedChildrenContent.md)</code> mixin.
