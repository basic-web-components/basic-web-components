# API Documentation
<a name="CollapsiblePanel"></a>

## CollapsiblePanel ⇐ <code>ElementBase</code>
A panel which can be expanded/collapsed with an animated transition.

[Live demo](http://basicwebcomponents.org/basic-web-components/packages/basic-collapsible-panel/)

This component combines the OpenCloseMixin mixin and a simple CSS height
animation.

This component handles only the duties of collapsing and expanding. It does
not provide a user interface for the user to trigger the change in state;
you must provide that user interface yourself.

  **Kind**: global class
**Extends:** <code>ElementBase</code>  
**Mixes**: <code>[OpenCloseMixin](../basic-component-mixins/docs/OpenCloseMixin.md)</code>
  

* [CollapsiblePanel](#CollapsiblePanel) ⇐ <code>ElementBase</code>
    * [.close()](#OpenClose+close)
    * [.closed](#OpenClose+closed) : <code>boolean</code>
    * [.open()](#OpenClose+open)
    * [.render(closing)](#OpenClose+render)
    * [.toggle()](#OpenClose+toggle)

<a name="OpenClose+close"></a>

### collapsiblePanel.close()
Close the component.

This is equivalent to setting the `closed` property to true.

  **Kind**: instance method of <code>[CollapsiblePanel](#CollapsiblePanel)</code>. Defined by <code>[OpenClose](../basic-component-mixins/docs/OpenClose.md)</code> mixin.
<a name="OpenClose+closed"></a>

### collapsiblePanel.closed : <code>boolean</code>
True if the component is curently closed.

  **Kind**: instance property of <code>[CollapsiblePanel](#CollapsiblePanel)</code>. Defined by <code>[OpenClose](../basic-component-mixins/docs/OpenClose.md)</code> mixin.
**Default**: <code>false</code>  
<a name="OpenClose+open"></a>

### collapsiblePanel.open()
Open the component.

This is equivalent to setting the `closed` property to false.

  **Kind**: instance method of <code>[CollapsiblePanel](#CollapsiblePanel)</code>. Defined by <code>[OpenClose](../basic-component-mixins/docs/OpenClose.md)</code> mixin.
<a name="OpenClose+render"></a>

### collapsiblePanel.render(closing)
Perform custom rendering of the close/open transition.

You can override this method to perform custom effects. If you do so,
be sure to invoke `super()` in your implementation to get the baseline
behavior.

  **Kind**: instance method of <code>[CollapsiblePanel](#CollapsiblePanel)</code>. Defined by <code>[OpenClose](../basic-component-mixins/docs/OpenClose.md)</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| closing | <code>boolean</code> | True if the component is being closed,        false if it's being opened. |

<a name="OpenClose+toggle"></a>

### collapsiblePanel.toggle()
Toggle the component's open/closed state.

  **Kind**: instance method of <code>[CollapsiblePanel](#CollapsiblePanel)</code>. Defined by <code>[OpenClose](../basic-component-mixins/docs/OpenClose.md)</code> mixin.
