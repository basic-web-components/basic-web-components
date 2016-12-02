# API Documentation
<a name="ShadowTemplate"></a>

## ShadowTemplate
Mixin for stamping a template into a Shadow DOM subtree upon component
instantiation.

To use this mixin, define a `template` property as a string or HTML
`<template>` element:

    class MyElement extends ShadowTemplateMixin(HTMLElement) {
      get template() {
        return `Hello, <em>world</em>.`;
      }
    }

When your component class is instantiated, a shadow root will be created on
the instance, and the contents of the template will be cloned into the
shadow root. If your component does not define a `template` property, this
mixin has no effect.

For the time being, this extension retains support for Shadow DOM v0. That
will eventually be deprecated as browsers (and the Shadow DOM polyfill)
implement Shadow DOM v1.

  **Kind**: global class
