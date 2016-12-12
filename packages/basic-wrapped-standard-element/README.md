# API Documentation
<a name="WrappedStandardElement"></a>

## WrappedStandardElement ⇐ <code>ElementBase</code>
Wraps a standard HTML element so that the standard behavior can then be
extended.

[Live demo](http://basicwebcomponents.org/basic-web-components/packages/basic-wrapped-standard-element/)

See also [basic-autosize-textarea](../basic-autosize-textarea) and
[basic-current-anchor](../basic-current-anchor). The former uses
WrappedStandardElement to wrap a standard `<textarea>` and `<a>`,
respectively.

The Custom Elements spec does not currently (as of March 2016) allow you to
extend the behavior of a standard HTML element like `<a>` or `<button>`.
As a partial workaround, the WrappedStandardElement class can create a class
for you that wraps an instance of a standard HTML element. For example, the
code below creates a class that will wrap an instance of a standard `<a>`
element:

    class WrappedA extends WrappedStandardElement.wrap('a') {
      customMethod() { ... }
    }
    customElements.define('wrapped-a', WrappedA);

An instance of the resulting class will look to the user like an instance of
the standard element class it wraps. The resulting class will *not* be an
`instanceof` the standard class (here, HTMLAnchorElement). Another limitation
is that the resulting `<wrapped-a>` will not automatically pick up CSS styles
for standard `<a>` elements. However, the resulting class *can* be extended.
E.g., instances of the above class have a `customMethod()` available to them.

Any properties defined by the original standard element will be exposed on
the resulting wrapper class, and calls to get or set those properties will be
delegated to the wrapped element instance. Continuing the above example:

    let wrapped = document.createElement('wrapped-a');
    wrapped.href = 'http://example.com/';
    wrapped.textContent = 'Click here';

Here, the created custom `<wrapped-a>` element will contain inside its
shadow tree an instance of a standard `<a>` element. The call to set the
wrapper's `href` property will ultimately set the `href` on the inner link.
Moreover, the text content of the `<wrapped-a>` element will appear inside
the inner link. The result of all this is that the user will see what *looks*
like a normal link, just as if you had written
`<a href="http://example.com/">Click here</a>`. However, the actual element
will be an instance of your custom class, with whatever behavior you've
defined for it.

Wrapped elements should raise the same events as the original standard
elements. E.g., if you wrap an `<img>` element, the wrapped result will raise
the standard `load` event as expected.

Some elements, such as `<body>`, `<html>`, and `<style>` cannot be wrapped
and still achieve their standard behavior.

  **Kind**: global class
**Extends:** <code>ElementBase</code>  

* [WrappedStandardElement](#WrappedStandardElement) ⇐ <code>ElementBase</code>
    * [.ariaLabel](#WrappedStandardElement+ariaLabel) : <code>string</code>
    * [.inner](#WrappedStandardElement+inner) : <code>HTMLElement</code>
    * [.wrap(extendsTag)](#WrappedStandardElement.wrap)

<a name="WrappedStandardElement+ariaLabel"></a>

### wrappedStandardElement.ariaLabel : <code>string</code>
A description for the user of the element's purpose on the page. Setting
this applies the label to the inner element, ensuring that screen readers
and other assistive technologies will provide a meaningful description to
the user.

  **Kind**: instance property of <code>[WrappedStandardElement](#WrappedStandardElement)</code>
<a name="WrappedStandardElement+inner"></a>

### wrappedStandardElement.inner : <code>HTMLElement</code>
Returns a reference to the inner standard HTML element.

  **Kind**: instance property of <code>[WrappedStandardElement](#WrappedStandardElement)</code>
<a name="WrappedStandardElement.wrap"></a>

### WrappedStandardElement.wrap(extendsTag)
Creates a class that wraps a standard HTML element.

Note that the resulting class is a subclass of WrappedStandardElement, not
the standard class being wrapped. E.g., if you call
`WrappedStandardElement.wrap('a')`, you will get a class whose shadow tree
will include an anchor element, but the class will *not* inherit from
HTMLAnchorElement.

  **Kind**: static method of <code>[WrappedStandardElement](#WrappedStandardElement)</code>

| Param | Type | Description |
| --- | --- | --- |
| extendsTag | <code>string</code> | the standard HTML element tag to extend |

