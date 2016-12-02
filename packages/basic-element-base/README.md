# API Documentation
<a name="ElementBase"></a>

## ElementBase
A sample general-purpose base class for defining custom elements that mixes
in some common features: template stamping into a shadow root, shadow element
references, marshalling attributes to properties, and retrieving the children
distributed to a component.

This base class is not special in any way, and is defined only as a
convenient shorthand for applying the mixins listed above. You can use this
class as a base class for your own elements, or easily create your own base
class by applying the same set of mixins.

The ElementBase base class does not register itself as a custom element with
the browser, and hence cannot be independently instantiated.

  **Kind**: global class
**Mixes**: <code>[AttributeMarshallingMixin](../basic-component-mixins/docs/AttributeMarshallingMixin.md)</code>
  , <code>[ComposableMixin](../basic-component-mixins/docs/ComposableMixin.md)</code>
  , <code>[DistributedChildrenMixin](../basic-component-mixins/docs/DistributedChildrenMixin.md)</code>
  , <code>[ShadowElementReferencesMixin](../basic-component-mixins/docs/ShadowElementReferencesMixin.md)</code>
  , <code>[ShadowTemplateMixin](../basic-component-mixins/docs/ShadowTemplateMixin.md)</code>
  

* [ElementBase](#ElementBase)
    * [.compose(...mixins)](#Composable.compose)
    * [.distributedChildNodes](#DistributedChildren+distributedChildNodes) : <code>Array.&lt;Node&gt;</code>
    * [.distributedChildren](#DistributedChildren+distributedChildren) : <code>Array.&lt;HTMLElement&gt;</code>
    * [.distributedTextContent](#DistributedChildren+distributedTextContent) : <code>string</code>
    * [.reflectAttribute(attribute, value)](#AttributeMarshalling+reflectAttribute)
    * [.reflectClass(className, value)](#AttributeMarshalling+reflectClass)

<a name="Composable.compose"></a>

### ElementBase.compose(...mixins)
Apply a set of mixin functions or mixin objects to the present class and
return the new class.

Instead of writing:

    let MyClass = Mixin1(Mixin2(Mixin3(Mixin4(Mixin5(BaseClass)))));

You can write:

    let MyClass = ComposableMixin(BaseClass).compose(
      Mixin1,
      Mixin2,
      Mixin3,
      Mixin4,
      Mixin5
    );

This function can also take mixin objects. A mixin object is just a
shorthand for a mixin function that creates a new subclass with the given
members. The mixin object's members are *not* copied directly onto the
prototype of the base class, as with traditional mixins.

In addition to providing syntactic sugar, this mixin can be used to
define a class in ES5, which lacks ES6's `class` keyword.

  **Kind**: static method of <code>[ElementBase](#ElementBase)</code>. Defined by <code>[Composable](../basic-component-mixins/docs/Composable.md)</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| ...mixins | <code>mixins</code> | A set of mixin functions or objects to apply. |

<a name="DistributedChildren+distributedChildNodes"></a>

### elementBase.distributedChildNodes : <code>Array.&lt;Node&gt;</code>
An in-order collection of distributed child nodes, expanding any slot
elements. Like the standard childNodes property, this includes text
nodes.

  **Kind**: instance property of <code>[ElementBase](#ElementBase)</code>. Defined by <code>[DistributedChildren](../basic-component-mixins/docs/DistributedChildren.md)</code> mixin.
<a name="DistributedChildren+distributedChildren"></a>

### elementBase.distributedChildren : <code>Array.&lt;HTMLElement&gt;</code>
An in-order collection of distributed children, expanding any slot
elements. Like the standard children property, this skips text nodes.

  **Kind**: instance property of <code>[ElementBase](#ElementBase)</code>. Defined by <code>[DistributedChildren](../basic-component-mixins/docs/DistributedChildren.md)</code> mixin.
<a name="DistributedChildren+distributedTextContent"></a>

### elementBase.distributedTextContent : <code>string</code>
The concatenated text content of all distributed child nodes, expanding
any slot elements.

  **Kind**: instance property of <code>[ElementBase](#ElementBase)</code>. Defined by <code>[DistributedChildren](../basic-component-mixins/docs/DistributedChildren.md)</code> mixin.
<a name="AttributeMarshalling+reflectAttribute"></a>

### elementBase.reflectAttribute(attribute, value)
Set/unset the attribute with the indicated name.

This method exists primarily to handle the case where an element wants to
set a default property value that should be reflected as an attribute. An
important limitation of custom element consturctors is that they cannot
set attributes. A call to `reflectAttribute` during the constructor will
be deferred until the element is connected to the document.

  **Kind**: instance method of <code>[ElementBase](#ElementBase)</code>. Defined by <code>[AttributeMarshalling](../basic-component-mixins/docs/AttributeMarshalling.md)</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| attribute | <code>string</code> | The name of the *attribute* (not property) to set. |
| value | <code>object</code> | The value to set. If null, the attribute will be removed. |

<a name="AttributeMarshalling+reflectClass"></a>

### elementBase.reflectClass(className, value)
Set/unset the class with the indicated name.

This method exists primarily to handle the case where an element wants to
set a default property value that should be reflected as as class. An
important limitation of custom element consturctors is that they cannot
set attributes, including the `class` attribute. A call to
`reflectClass` during the constructor will be deferred until the element
is connected to the document.

  **Kind**: instance method of <code>[ElementBase](#ElementBase)</code>. Defined by <code>[AttributeMarshalling](../basic-component-mixins/docs/AttributeMarshalling.md)</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| className | <code>string</code> | The name of the class to set. |
| value | <code>object</code> | True to set the class, false to remove it. |

<a name="$"></a>

## $ : <code>object</code>
The collection of references to the elements with IDs in a component's
Shadow DOM subtree.

  **Kind**: global variable
