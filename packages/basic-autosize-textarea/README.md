# API Documentation
<a name="AutosizeTextarea"></a>
## AutosizeTextarea
A text area that makes itself big enough to show its content.

[Live demo](http://basicwebcomponents.org/basic-web-components/packages/basic-autosize-textarea/)

This text input component is useful in situations where you want to ask the
user to enter as much text as they want, but don't want to take up a lot of
room on the page.

The component works by copying the text to an invisible element which will
automatically grow in size; the expanding copy will expand the container,
which in turn will vertically stretch the text area to match.

This component generally exposes all the same attributes/properties as a
standard HTML `<textarea>`.

  **Kind**: global class
**Mixes**: <code>[Generic](../basic-component-mixins/docs/Generic.md)</code>
  , <code>[DistributedChildrenAsContent](../basic-component-mixins/docs/DistributedChildrenAsContent.md)</code>
  , <code>[ObserveContentChanges](../basic-component-mixins/docs/ObserveContentChanges.md)</code>
  

* [AutosizeTextarea](#AutosizeTextarea)
    * [.autoSize()](#AutosizeTextarea+autoSize)
    * ["change"](#AutosizeTextarea.event_change)
    * [.content](#DistributedChildrenAsContent+content) : <code>Array.&lt;HTMLElement&gt;</code>
    * ["content-changed"](#ObserveContentChanges.event_content-changed)
    * [.contentChanged()](#ObserveContentChanges+contentChanged)
    * [.generic](#Generic+generic) : <code>Boolean</code>
    * [.minimumRows](#AutosizeTextarea+minimumRows) : <code>number</code>
    * [.value](#AutosizeTextarea+value) : <code>string</code>

<a name="AutosizeTextarea+autoSize"></a>
### autosizeTextarea.autoSize()
Resize the element such that the textarea can exactly contain its content.
By default, this method is invoked whenever the text content changes.

  **Kind**: instance method of <code>[AutosizeTextarea](#AutosizeTextarea)</code>
<a name="AutosizeTextarea.event_change"></a>
### "change"
Fires when the user types in the textarea.

  **Kind**: event emitted by <code>[AutosizeTextarea](#AutosizeTextarea)</code>
<a name="DistributedChildrenAsContent+content"></a>
### autosizeTextarea.content : <code>Array.&lt;HTMLElement&gt;</code>
The content of this component, defined to be the flattened array of
children distributed to the component.

  **Kind**: instance property of <code>[AutosizeTextarea](#AutosizeTextarea)</code>. Defined by <code>[DistributedChildrenAsContent](../basic-component-mixins/docs/DistributedChildrenAsContent.md)</code> mixin.
<a name="ObserveContentChanges.event_content-changed"></a>
### "content-changed"
This event is raised when the component's contents (including distributed
children) have changed.

  **Kind**: event emitted by <code>[AutosizeTextarea](#AutosizeTextarea)</code>. Defined by <code>[ObserveContentChanges](../basic-component-mixins/docs/ObserveContentChanges.md)</code> mixin.
<a name="ObserveContentChanges+contentChanged"></a>
### autosizeTextarea.contentChanged()
Invoked when the contents of the component (including distributed
children) have changed.

This method is also invoked when a component is first instantiated; the
contents have essentially "changed" from being nothing. This allows the
component to perform initial processing of its children.

  **Kind**: instance method of <code>[AutosizeTextarea](#AutosizeTextarea)</code>. Defined by <code>[ObserveContentChanges](../basic-component-mixins/docs/ObserveContentChanges.md)</code> mixin.
<a name="Generic+generic"></a>
### autosizeTextarea.generic : <code>Boolean</code>
True if the component would like to receive generic styling.

This property is true by default — set it to false to turn off all
generic styles. This makes it easier to apply custom styling; you won't
have to explicitly override styling you don't want.

  **Kind**: instance property of <code>[AutosizeTextarea](#AutosizeTextarea)</code>. Defined by <code>[Generic](../basic-component-mixins/docs/Generic.md)</code> mixin.
**Default**: <code>true</code>  
<a name="AutosizeTextarea+minimumRows"></a>
### autosizeTextarea.minimumRows : <code>number</code>
Determines the minimum number of rows shown. This is similar to the rows
attribute on a standard textarea, but because this element can grow, is
expressed as a minimum rather than a fixed number.

By default, this property is 1, so when empty, the text area will be a
single line tall. That's efficient in terms of the space it consumes, but
until the user interacts with the element, they may not realize they can
enter multiple lines of text. Setting the property to a value higher than 1
will signal to the user that they can enter multiple lines of a text.

By setting this property, you can also communicate to the user some sense
of how much text you're expecting them to provide. For example, on a
feedback form, asking the user to enter their feedback in a single-line
text box implies you don't really want them to enter much text — even if
the text box will grow when they type. By setting this to a value like,
say, 10 rows, you can signal that you're fully expecting them to enter more
text.

  **Kind**: instance property of <code>[AutosizeTextarea](#AutosizeTextarea)</code>
**Default**: <code>1</code>  
<a name="AutosizeTextarea+value"></a>
### autosizeTextarea.value : <code>string</code>
The text currently shown in the textarea.

Note that the text shown in the textarea can also be updated by changing
the element's innerHTML/textContent. However, if the value property is
explicitly set, that will override the innerHTML/textContent.

  **Kind**: instance property of <code>[AutosizeTextarea](#AutosizeTextarea)</code>
