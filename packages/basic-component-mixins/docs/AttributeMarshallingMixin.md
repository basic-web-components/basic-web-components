# API Documentation
<a name="AttributeMarshalling"></a>

## AttributeMarshalling
Mixin which marshalls attributes to properties and vice versa.

If your component exposes a setter for a property, it's generally a good
idea to let devs using your component be able to set that property in HTML
via an element attribute. You can code that yourself by writing an
`attributeChangedCallback`, or you can use this mixin to get a degree of
automatic support.

This mixin implements an `attributeChangedCallback` that will attempt to
convert a change in an element attribute into a call to the corresponding
property setter. Attributes typically follow hyphenated names ("foo-bar"),
whereas properties typically use camelCase names ("fooBar"). This mixin
respects that convention, automatically mapping the hyphenated attribute
name to the corresponding camelCase property name.

Example: You define a component using this mixin:

    class MyElement extends AttributeMarshallingMixin(HTMLElement) {
      get fooBar() { return this._fooBar; }
      set fooBar(value) { this._fooBar = value; }
    }
    customElements.define('my-element', MyElement);

If someone then instantiates your component in HTML:

    <my-element foo-bar="Hello"></my-element>

Then, after the element has been upgraded, the `fooBar` setter will
automatically be invoked with the initial value "Hello".

For the time being, this mixin only supports string-valued properties.
If you'd like to convert string attributes to other types (numbers,
booleans), you need to implement `attributeChangedCallback` yourself.

  **Kind**: global class

* [AttributeMarshalling](#AttributeMarshalling)
    * [.reflectAttribute(attribute, value)](#AttributeMarshalling+reflectAttribute)
    * [.reflectClass(className, value)](#AttributeMarshalling+reflectClass)

<a name="AttributeMarshalling+reflectAttribute"></a>

### attributeMarshalling.reflectAttribute(attribute, value)
Set/unset the attribute with the indicated name.

This method exists primarily to handle the case where an element wants to
set a default property value that should be reflected as an attribute. An
important limitation of custom element consturctors is that they cannot
set attributes. A call to `reflectAttribute` during the constructor will
be deferred until the element is connected to the document.

  **Kind**: instance method of <code>[AttributeMarshalling](#AttributeMarshalling)</code>

| Param | Type | Description |
| --- | --- | --- |
| attribute | <code>string</code> | The name of the *attribute* (not property) to set. |
| value | <code>object</code> | The value to set. If null, the attribute will be removed. |

<a name="AttributeMarshalling+reflectClass"></a>

### attributeMarshalling.reflectClass(className, value)
Set/unset the class with the indicated name.

This method exists primarily to handle the case where an element wants to
set a default property value that should be reflected as as class. An
important limitation of custom element consturctors is that they cannot
set attributes, including the `class` attribute. A call to
`reflectClass` during the constructor will be deferred until the element
is connected to the document.

  **Kind**: instance method of <code>[AttributeMarshalling](#AttributeMarshalling)</code>

| Param | Type | Description |
| --- | --- | --- |
| className | <code>string</code> | The name of the class to set. |
| value | <code>object</code> | True to set the class, false to remove it. |

