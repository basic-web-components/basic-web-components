<a name="ClickSelection"></a>
## ClickSelection
Mixin which maps a click (actually, a mousedown) to a selection.

This simple mixin is useful in list box-like elements, where a click on a
list item implicitly selects it.

This mixin expects the component to provide a method `indexOfItem(item)`.
You can provide that method yourself, or use the ContentAsItems mixin.

**Kind**: global class  
