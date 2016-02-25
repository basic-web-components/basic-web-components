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
**Mixes**: <code>Generic</code>, <code>DistributedChildrenAsContent</code>  

* [AutosizeTextarea](#AutosizeTextarea)
    * [.minimumRows](#AutosizeTextarea+minimumRows) : <code>number</code>
    * [.value](#AutosizeTextarea+value) : <code>string</code>
    * [.autoSize()](#AutosizeTextarea+autoSize)

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
<a name="AutosizeTextarea+autoSize"></a>
### autosizeTextarea.autoSize()
Resize the element such that the textarea can exactly contain its content.
By default, this method is invoked whenever the text content changes.

**Kind**: instance method of <code>[AutosizeTextarea](#AutosizeTextarea)</code>  
<a name="event_change"></a>
## "change"
Fires when the user types in the textarea.

**Kind**: event emitted  
