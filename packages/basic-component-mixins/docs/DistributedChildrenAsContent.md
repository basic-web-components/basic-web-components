<a name="DistributedChildrenAsContent"></a>
## DistributedChildrenAsContent
Mixin which defines a component's content as its children,
expanding any nodes distributed to the component's slots.

This mixin is intended for use with the DistributedChildren mixin. See that
mixin for a discussion of how that works. This DistributedChildrenAsContent
mixin provides an easy way of defining the "content" of a component as the
component's distributed children. That in turn lets mixins like
ContentAsItems manipulate the children as list items.

**Kind**: global class  
<a name="undefinedcontent"></a>
## undefinedcontent : <code>Array</code>
The content of this component, defined to be the flattened array of
children distributed to the component.

**Kind**: global variable  
**Properties**

| Name |
| --- |
| content | 

