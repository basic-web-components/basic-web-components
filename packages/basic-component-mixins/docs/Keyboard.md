<a name="Keyboard"></a>
## Keyboard
Mixin which manages the keydown handling for a component.

This mixin handles several keyboard-related features.

First, it wires up a single keydown event handler that can be shared by
multiple mixins on a component. The event handler will invoke a `keydown`
method with the event object, and any mixin along the prototype chain that
wants to handle that method can do so.

If a mixin wants to indicate that keyboard event has been handled, and that
other mixins should *not* handle it, the mixin's `keydown` handler should
return a value of true. The convention that seems to work well is that a
mixin should see if it wants to handle the event and, if not, then ask the
superclass to see if it wants to handle the event. This has the effect of
giving the mixin that was applied last the first chance at handling a
keyboard event.

Example:

    keydown(event) {
      let handled;
      switch (event.keyCode) {
        // Handle the keys you want, setting handled = true if appropriate.
      }
      // Prefer mixin result if it's defined, otherwise use base result.
      return handled || (super.keydown && super.keydown(event));
    }

A second feature provided by this mixin is that it implicitly makes the
component a tab stop if it isn't already, by setting `tabIndex` to 0. This
has the effect of adding the component to the tab order in document order.

Finally, this mixin is designed to work with Collective class via a mixin
like TargetInCollective. This allows a set of related component instances
to cooperatively handle the keyboard. See the Collective class for details.

NOTE: For the time being, this mixin should be used with
TargetInCollective. The intention is to allow this mixin to be used without
requiring collective keyboard support, so that this mixin can be used on
its own.

**Kind**: global class  
<a name="Keyboard+keydown"></a>
### keyboard.keydown(event) ⇒ <code>boolean</code>
Handle the indicated keyboard event.

The default implementation of this method does nothing. This will
typically be handled by other mixins.

**Kind**: instance method of <code>[Keyboard](#Keyboard)</code>  
**Returns**: <code>boolean</code> - true if the event was handled  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | the keyboard event |

