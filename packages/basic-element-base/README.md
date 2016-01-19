<a name="ElementBase"></a>
## ElementBase
A sample general-purpose base class for defining custom elements
that mixes in some common features: template stamping into a shadow root,
automatic node finding, and marshalling between attributes and properties

This base class is not special in any way, and is defined only as a
convenient shorthand for applying the mixins listed above. You can use this
class as a base class for your own elements, or easily create your own base
class by applying the same set of mixins.

The ElementBase base class does not register itself as a custom element with
the browser, and hence cannot be independently instantiated.

**Kind**: global class  
