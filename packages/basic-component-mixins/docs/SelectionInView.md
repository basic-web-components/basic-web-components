<a name="SelectionInView"></a>
## SelectionInView
Mixin which scrolls a container to keep the selected item visible

**Kind**: global class  
<a name="undefinedscrollTarget"></a>
## undefinedscrollTarget
The element that should be scrolled with the Page Up/Down keys.
Default is the current element.

**Kind**: global variable  
**Properties**

| Name |
| --- |
| scrollTarget | 

<a name="scrollItemIntoView"></a>
## scrollItemIntoView()
Scroll the given element completely into view, minimizing the degree of
scrolling performed.

Blink has a scrollIntoViewIfNeeded() function that almost the same thing,
but unfortunately it's non-standard, and in any event often ends up
scrolling more than is absolutely necessary.

**Kind**: global function  
