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
**Mixes**: <code>[AttributeMarshalling](../basic-component-mixins/docs/AttributeMarshalling.md)</code>
  , <code>[Composable](../basic-component-mixins/docs/Composable.md)</code>
  , <code>[DistributedChildren](../basic-component-mixins/docs/DistributedChildren.md)</code>
  , <code>[ShadowElementReferences](../basic-component-mixins/docs/ShadowElementReferences.md)</code>
  , <code>[ShadowTemplate](../basic-component-mixins/docs/ShadowTemplate.md)</code>
  

* [ElementBase](#ElementBase)
    * [.compose(...mixins)](#Composable.compose)
    * [.distributedChildNodes](#DistributedChildren+distributedChildNodes) : <code>Array.&lt;Node&gt;</code>
    * [.distributedChildren](#DistributedChildren+distributedChildren) : <code>Array.&lt;HTMLElement&gt;</code>
    * [.distributedTextContent](#DistributedChildren+distributedTextContent) : <code>string</code>

<a name="Composable.compose"></a>
### ElementBase.compose(...mixins)
Apply a set of mixin functions or mixin objects to the present class and
return the new class.

Instead of writing:

    let MyClass = Mixin1(Mixin2(Mixin3(Mixin4(Mixin5(BaseClass)))));

You can write:

    let MyClass = Composable(BaseClass).compose(
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
An in-order collection of child nodes, expanding any slot elements. Like
the standard childNodes property, this includes text nodes.

  **Kind**: instance property of <code>[ElementBase](#ElementBase)</code>. Defined by <code>[DistributedChildren](../basic-component-mixins/docs/DistributedChildren.md)</code> mixin.
<a name="DistributedChildren+distributedChildren"></a>
### elementBase.distributedChildren : <code>Array.&lt;HTMLElement&gt;</code>
An in-order collection of children, expanding any slot elements. Like the
standard children property, this skips text nodes.

  **Kind**: instance property of <code>[ElementBase](#ElementBase)</code>. Defined by <code>[DistributedChildren](../basic-component-mixins/docs/DistributedChildren.md)</code> mixin.
<a name="DistributedChildren+distributedTextContent"></a>
### elementBase.distributedTextContent : <code>string</code>
The concatenated text content of all child nodes, expanding any slot
elements.

  **Kind**: instance property of <code>[ElementBase](#ElementBase)</code>. Defined by <code>[DistributedChildren](../basic-component-mixins/docs/DistributedChildren.md)</code> mixin.
<a name="$"></a>
## $ : <code>object</code>
The collection of references to the elements with IDs in a component's
Shadow DOM subtree.

  **Kind**: global variable
