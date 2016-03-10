<a name="TabStrip"></a>
## TabStrip ⇐ <code>ElementBase</code>
A strip of tabs for selecting one of the component's children.

The component creates a tab to represent each of its light DOM children.
The tab name is obtained by examining the children for an `aria-label`
property.

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

**Kind**: global class  
**Extends:** <code>ElementBase</code>  
**Mixes**: <code>ContentFirstChildTarget</code>, <code>DirectionSelection</code>, <code>DistributedChildrenAsContent</code>, <code>Generic</code>, <code>ItemsSelection</code>, <code>KeyboardDirection</code>, <code>ObserveContentChanges</code>, <code>TargetSelection</code>  
<a name="TabStrip+tabPosition"></a>
### tabStrip.tabPosition : <code>string</code>
The position of the tab strip relative to the element's children. Valid
values are "top", "left", "right", and "bottom".

**Kind**: instance property of <code>[TabStrip](#TabStrip)</code>  
**Default**: <code>&quot;\&quot;top\&quot;&quot;</code>  
