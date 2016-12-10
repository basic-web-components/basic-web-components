# API Documentation
<a name="TabStrip"></a>

## TabStrip
A template mixin which adds strip of tabs for selecting one of the
component's children.

The component creates a tab to represent each of its light DOM children.
The tab name is obtained by examining the children for an `aria-label`
property.

Use tabs when you want to provide a large set of options or elements than
can comfortably fit inline, the options can be coherently grouped into pages,
and you want to avoid making the user navigate to a separate page. Tabs work
best if you only have a small handful of pages, say 2–7.

The basic-tab-strip component does not define how a selected child is
represented. If you're looking for the standard behavior of just showing only
the selected child, you can use this component in combination with the
separate [basic-modes](../basic-modes/) component. A typical arrangement:

    <basic-tab-strip>
      <basic-modes aria-label="Panels">
        <div aria-label="One">Page one</div>
        <div aria-label="Two">Page two</div>
        <div aria-label="Three">Page three</div>
      </basic-modes>
    </basic-tab-strip>

The above combination is so common it is provided as a single component,
[basic-tabs](../basic-tabs/).

The user can select a tab with the mouse or touch, as well as by through the
keyboard. Each tab appears as a separate button in the tab order.
Additionally, if the focus is currently on a tab, the user can quickly
navigate between tabs with the left/right arrow keys (or, if the tabs are
in vertical position, the up/down arrow keys).

By default, the tabs are shown grouped to the left, where each tab is only
as big as necessary. You can apply the `spread` CSS class to a
basic-tab-strip element for a variant appearance in which the available width
of the element is divided up equally among tabs.

The GenericMixin default styling of the tab strip will present the classic
skeumorphic look of rounded tabs attached to a surface. You can remove this
styling by setting the `GenericMixin` property/attribute to false.

  **Kind**: global class
