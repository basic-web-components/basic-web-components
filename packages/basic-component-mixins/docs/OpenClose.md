# API Documentation
<a name="OpenClose"></a>
## OpenClose
Mixin which adds close/open semantics.

This mixin does not produce any user-visible effects. Instead it applies
a `basic-closed` CSS class to the component host if the host is
closed, and a `basic-opened` class if opened. It also invokes a `render`
function that can be overridden to apply custom effects.

  **Kind**: global class

* [OpenClose](#OpenClose)
    * [.close()](#OpenClose+close)
    * [.closed](#OpenClose+closed) : <code>boolean</code>
    * [.open()](#OpenClose+open)
    * [.render(closing)](#OpenClose+render)
    * [.toggle()](#OpenClose+toggle)

<a name="OpenClose+close"></a>
### openClose.close()
Close the component.

This is equivalent to setting the `closed` property to true.

  **Kind**: instance method of <code>[OpenClose](#OpenClose)</code>
<a name="OpenClose+closed"></a>
### openClose.closed : <code>boolean</code>
True if the component is curently closed.

  **Kind**: instance property of <code>[OpenClose](#OpenClose)</code>
**Default**: <code>false</code>  
<a name="OpenClose+open"></a>
### openClose.open()
Open the component.

This is equivalent to setting the `closed` property to false.

  **Kind**: instance method of <code>[OpenClose](#OpenClose)</code>
<a name="OpenClose+render"></a>
### openClose.render(closing)
Perform custom rendering of the close/open transition.

You can override this method to perform custom effects. If you do so,
be sure to invoke `super()` in your implementation to get the baseline
behavior.

  **Kind**: instance method of <code>[OpenClose](#OpenClose)</code>

| Param | Type | Description |
| --- | --- | --- |
| closing | <code>boolean</code> | True if the component is being closed,        false if it's being opened. |

<a name="OpenClose+toggle"></a>
### openClose.toggle()
Toggle the component's open/closed state.

  **Kind**: instance method of <code>[OpenClose](#OpenClose)</code>
