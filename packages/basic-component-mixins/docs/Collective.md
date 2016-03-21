# A Module
This is the readme for a module.

## Install
Install it using the power of thought. While body-popping.

# API Documentation
<a name="Collective"></a>
## Collective
A group of elements that have been associated for the purpose of
accomplishing some collective behavior, e.g., keyboard handling.

There are certain components that want to cooperatively handle the keyboard.
For example, the basic-arrow-selection and basic-page-dots components are
optional components that can augment the appearance and behavior of an inner
basic-carousel, adding arrow buttons and dot buttons, respectively. When
these components are nested together, they form an implicit unit called a
*collective*:

    <basic-arrow-selection>
      <basic-page-dots>
        <basic-carousel>
          ... images, etc. ...
        </basic-carousel>
      </basic-page-dots>
    </basic-arrow-selection>

In this configuration, the three components will all have a `this.collective`
reference that refers to a shared instance of the `Collective` class.

The [Keyboard](Keyboard.md) mixin they use is sensitive to the presence of
the collective. Among other things, it will ensure that only the outermost
element above — the basic-arrow-selection — will be a tab stop that can
receive the keyboard focus. This lets the user perceive the component
arrangement above as a single unit. The Keyboard mixin will also give each
element in the collective a chance to process any keyboard events. So, even
though the basic-arrow-selection element will have the focus, the standard
keyboard navigation provided by basic-carousel will continue to work.

The [SelectionAriaActive](SelectionAriaActive.md) mixin also respects
collectives when using the `aria-activedescendant` and `role` attributes.
Those will be applied to the outermost element (basic-arrow-selection, above)
so that ARIA can correctly understand the arrangement of the elements.

You can put elements into collectives yourself, or you can use the
[TargetInCollective](TargetInCollective.md) mixin.

  **Kind**: global class

* [Collective](#Collective)
    * [new Collective([elements])](#new_Collective_new)
    * [.elements](#Collective+elements) : <code>Array.&lt;HTMLElement&gt;</code>
    * [.outermostElement](#Collective+outermostElement)
    * [.assimilate(target)](#Collective+assimilate)
    * [.invokeMethod(method, [args])](#Collective+invokeMethod)

<a name="new_Collective_new"></a>
### new Collective([elements])
Create a collective.


| Param | Type | Description |
| --- | --- | --- |
| [elements] | <code>Array.&lt;HTMLELement&gt;</code> | Initial elements to add. |

<a name="Collective+elements"></a>
### collective.elements : <code>Array.&lt;HTMLElement&gt;</code>
The elements in the collective.

  **Kind**: instance property of <code>[Collective](#Collective)</code>
<a name="Collective+outermostElement"></a>
### collective.outermostElement
The outermost element in the collective.
By convention, this is the first element in the `elements` array.

  **Kind**: instance property of <code>[Collective](#Collective)</code>
<a name="Collective+assimilate"></a>
### collective.assimilate(target)
Add the indicated target to the collective.

By convention, if two elements wants to participate in a collective, and
one element is an ancestor of the other in the DOM, the ancestor should
assimilate the descendant instead of the other way around.

After assimilation, any element in the collective that defines a
`collectiveChanged` method will have that method invoked. This allows
the collective's elements to respond to changes in the collective.

  **Kind**: instance method of <code>[Collective](#Collective)</code>

| Param | Type | Description |
| --- | --- | --- |
| target | <code>HTMLElement</code> &#124; <code>[Collective](#Collective)</code> | The element or collective to add. |

<a name="Collective+invokeMethod"></a>
### collective.invokeMethod(method, [args])
Invoke a method on all elements in the collective.

  **Kind**: instance method of <code>[Collective](#Collective)</code>

| Param | Type | Description |
| --- | --- | --- |
| method | <code>string</code> | The name of the method to invoke on all elements. |
| [args] | <code>Array.&lt;object&gt;</code> | The arguments to the method |

