# API Documentation
<a name="SelectionHighlight"></a>
## SelectionHighlight
Mixin which applies standard highlight colors to a selected item.

This mixin highlights textual items (e.g., in a list) in a standard way by
using the CSS `highlight` and `highlighttext` color values. These values
respect operating system defaults and user preferences, and hence are good
default values for highlight colors.

This mixin expects a `selected` class to be applied to selected items. You
can use the [ContentAsItems](ContentAsItems.md) mixin for that purpose.

  **Kind**: global class
