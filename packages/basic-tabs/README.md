<a name="Tabs"></a>
## Tabs ⇐ <code>ElementBase</code>
A set of pages with a tab strip governing which page is shown.

This stock combination puts together a [basic-tab-strip](../basic-tab-strip/)
and a [basic-modes](../basic-modes/) element. If you'd like to create
something more complex than this arrangement, you can use either of those
elements on its own.

Since this component uses basic-tab-strip internally, it obtains the names of
the individual tabs the same way: from a child's `aria-label` property.
Example:

    <basic-tabs>
      <div aria-label="One">Page one</div>
      <div aria-label="Two">Page two</div>
      <div aria-label="Three">Page three</div>
    </basic-tabs>

**Kind**: global class  
**Extends:** <code>ElementBase</code>  
**Mixes**: <code>ItemsSelection</code>, <code>TargetSelection</code>  
<a name="Tabs+tabPosition"></a>
### tabs.tabPosition : <code>string</code>
The position of the tab strip relative to the element's children. Valid
values are "top", "left", "right", and "bottom".

**Kind**: instance property of <code>[Tabs](#Tabs)</code>  
**Default**: <code>&quot;\&quot;top\&quot;&quot;</code>  
