# API Documentation
<a name="SelectedItemTextValue"></a>

## SelectedItemTextValue
Mixin which defines a `value` property that reflects the text content of a
selected item.

This mixin exists for list-like components that want to provide a more
convenient way to get/set the selected item using text.

This mixin expects a component to provide an `items` array of all elements
in the list. A standard way to do that with is
[ContentItemsMixin](ContentItemsMixin.md). This also expects the definition
of `selectedIndex` and `selectedItem` properties, which can be obtained
from [SingleSelectionMixin](SingleSelectionMixin.md).

  **Kind**: global class
<a name="SelectedItemTextValue+value"></a>

### selectedItemTextValue.value : <code>string</code>
The text content of the selected item.

Setting this value to a string will attempt to select the first list item
whose text content match that string. Setting this to a string not matching
any list item will result in no selection.

  **Kind**: instance property of <code>[SelectedItemTextValue](#SelectedItemTextValue)</code>
