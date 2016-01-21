<a name="ShadowTemplate"></a>
## ShadowTemplate
Mixin for stamping a template into a Shadow DOM subtree upon
component instantiation

If a component defines a template property (as a string or referencing a HTML
template), when the component class is instantiated, a shadow root will be
created on the instance, and the contents of the template will be cloned into
the shadow root.

For the time being, this extension retains support for Shadow DOM v0.
That will eventually be deprecated as browsers implement Shadow DOM v1.

**Kind**: global class  
