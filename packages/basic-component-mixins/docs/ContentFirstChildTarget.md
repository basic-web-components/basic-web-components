<a name="ContentFirstChildTarget"></a>
## ContentFirstChildTarget
Mixin that defines the target of a component — the element the
component is managing or somehow responsible for — as its first child.

Some components serve to decorate or modify other elements. A common pattern
is to have one component wrap another, and have the outer, parent component
implicitly modify the child. This mixin facilitates this by implicitly taking
an element's first child as its "target".

Example:

    <outer-element>
      <inner-element></inner-element>
    </outer-element>

If `outer-element` uses this mixin, then its `target` property will be
set to point to the `inner-element`, because that is its first child.

This mixin expects a `content` property that returns the element's content.
You can implement that yourself, or use the DistributedChildrenAsContent
mixin.

This mixin can be combined with the TargetInCollective mixin to have a
component participate in collective keyboard handling. *

**Kind**: global class  
<a name="undefinedtarget"></a>
## undefinedtarget : <code>HTMLElement</code>
Gets/sets the current target of the component.

**Kind**: global variable  
**Properties**

| Name |
| --- |
| target | 

