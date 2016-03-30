# API Documentation
<a name="OrderedSuper"></a>
## OrderedSuper
Mixin which supports specifying the order in which calls to super execute against mixins.
This mixin overrides the prototype chain order, allowing a class with mixins to specify
the order in which mixins implementing a particular method are called, where a mixin
implements a particular method.

  **Kind**: global class
<a name="OrderedSuper+orderedSuper"></a>
### orderedSuper.orderedSuper()
Replaces a call to super, where the call order of mixins implementing the
method may be called.

  **Kind**: instance method of <code>[OrderedSuper](#OrderedSuper)</code>
