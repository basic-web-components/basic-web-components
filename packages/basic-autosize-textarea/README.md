<a name="AutosizeTextarea"></a>
## AutosizeTextarea
A text area that makes itself big enough to show its content.

This works by copying the text to an invisible element which will automatically
grow in size; the expanding copy will expand the container, which in turn
stretch the text area.

**Kind**: global class  
<a name="minimumRows"></a>
## minimumRows : <code>number</code>
Determines the minimum number of rows shown. This is similar to the rows
attribute on a standard textarea, but because this element can grow, is
expressed as a minimum rather than a fixed number.

**Kind**: global variable  
**Default**: <code>1</code>  
**Properties**

| Name |
| --- |
| minimumRows | 

<a name="placeholder"></a>
## placeholder : <code>string</code>
A prompt shown when the field is empty to indicate what the user should enter.

**Kind**: global variable  
**Properties**

| Name |
| --- |
| placeholder | 

<a name="value"></a>
## value : <code>string</code>
The text shown in the textarea.

Note that the text shown in the textarea can also be updated by changing
the element's innerHTML/textContent. However, if the value property is
explicitly set, that will override the innerHTML/textContent.

**Kind**: global variable  
**Properties**

| Name |
| --- |
| value | 

<a name="autoSize"></a>
## autoSize()
Resize the element such that the textarea can exactly contain its content.
By default, this method is invoked whenever the text content changes.

**Kind**: global function  
<a name="event_change"></a>
## "change"
Fires when the user types in the textarea.

**Kind**: event emitted  
