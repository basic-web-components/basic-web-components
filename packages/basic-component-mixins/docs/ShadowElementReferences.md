<a name="ShadowElementReferences"></a>
## ShadowElementReferences
Mixin to create references to elements in a component's Shadow DOM subtree.

This adds a member on the component called `this.$` that can be used to
reference shadow elements with IDs. E.g., if component's shadow contains an
element `<button id="foo">`, then this mixin will create a member
`this.$.foo` that points to that button.

Such references simplify a component's access to its own elements. In
exchange, this mixin trades off a one-time cost of querying all elements in
the shadow tree instead of paying an ongoing cost to query for an element
each time the component wants to inspect or manipulate it.

This mixin expects the component to define a Shadow DOM subtree. You can
create that tree yourself, or make use of the
[ShadowTemplate](ShadowTemplate.md) mixin.

This mixin is inspired by Polymer's [automatic
node finding](https://www.polymer-project.org/1.0/docs/devguide/local-dom.html#node-finding)
feature.

**Kind**: global class  
<a name="$"></a>
## $ : <code>object</code>
The collection of references to the elements with IDs in a component's
Shadow DOM subtree.

**Kind**: global variable  
