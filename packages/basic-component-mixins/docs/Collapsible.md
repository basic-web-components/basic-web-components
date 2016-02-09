<a name="Collapsible"></a>
## Collapsible
Mixin which adds collapse/expand semantics.

This mixin does not produce any user-visible effects. Instead it applies
a `basic-collapsed` CSS class to the component host if the host is
collapsed. It also invokes a `render` function that can be overridden to
apply custom effects.

**Kind**: global class  

* [Collapsible](#Collapsible)
    * [.collapsed](#Collapsible+collapsed) : <code>boolean</code>
    * [.collapse()](#Collapsible+collapse)
    * [.expand()](#Collapsible+expand)
    * [.render(collapsing)](#Collapsible+render)
    * [.toggle()](#Collapsible+toggle)

<a name="Collapsible+collapsed"></a>
### collapsible.collapsed : <code>boolean</code>
True if the component is curently collapsed.

**Kind**: instance property of <code>[Collapsible](#Collapsible)</code>  
**Default**: <code>false</code>  
<a name="Collapsible+collapse"></a>
### collapsible.collapse()
Collapse the component.

This is equivalent to setting the `collapsed` property to true.

**Kind**: instance method of <code>[Collapsible](#Collapsible)</code>  
<a name="Collapsible+expand"></a>
### collapsible.expand()
Expand the component.

This is equivalent to setting the `collapsed` property to false.

**Kind**: instance method of <code>[Collapsible](#Collapsible)</code>  
<a name="Collapsible+render"></a>
### collapsible.render(collapsing)
Perform custom rendering of the collapse/expand transition.

You can override this method to perform custom effects. If you do so,
be sure to invoke `super()` in your implementation to get the baseline
behavior.

**Kind**: instance method of <code>[Collapsible](#Collapsible)</code>  

| Param | Type | Description |
| --- | --- | --- |
| collapsing | <code>boolean</code> | True if the component is being collapsed,        false if it's being expanded. |

<a name="Collapsible+toggle"></a>
### collapsible.toggle()
Toggle the component's collapsed state.

**Kind**: instance method of <code>[Collapsible](#Collapsible)</code>  
