<a name="TabStrip"></a>
## TabStrip ⇐ <code>ElementBase</code>
A horizontal strip of tabs.

The component creates a tab to represent each of its light DOM children —
the panels (a.k.a pages) that will be shown or hidden when the user selects
a tab.

The user can select a tab with the mouse or touch, as well as by through the
keyboard. Each tab appears as a separate button in the tab order.
Additionally, if the focus is currently on a tab, the user can quickly
navigate between tabs with the left and right arrow keys.

By default, the tabs are shown grouped to the left, where each tab is only
as big as necessary. You can apply the `spread` CSS class to a
basic-tab-strip element for a variant appearance in which the available width
of the element is divided up equally among tabs.

**Kind**: global class  
**Extends:** <code>ElementBase</code>  
**Mixes**: <code>ContentFirstChildTarget</code>, <code>DirectionSelection</code>, <code>DistributedChildrenAsContent</code>, <code>ItemsSelection</code>, <code>KeyboardDirection</code>, <code>ObserveContentChanges</code>, <code>TargetSelection</code>  
<a name="TabStrip+tabPosition"></a>
### tabStrip.tabPosition : <code>string</code>
The position of the tab strip relative to the element's children. Valid
values are "top", "left", "right", and "bottom".

**Kind**: instance property of <code>[TabStrip](#TabStrip)</code>  
**Default**: <code>&quot;\&quot;top\&quot;&quot;</code>  
