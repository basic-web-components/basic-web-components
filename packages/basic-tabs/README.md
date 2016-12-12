# API Documentation
<a name="Tabs"></a>

## Tabs ⇐ <code>Modes</code>
A set of pages with a tab strip governing which page is shown.

This stock combination applies the [TabStripMixin](../basic-tab-strip/) to a
[basic-modes](../basic-modes/) element. If you'd like to create something
more complex than this arrangement, you can use either of those elements on
its own.

Since this component uses `TabStripMixin`, it obtains the names of the
individual tabs from a child's `aria-label` property. Example:

    <basic-tabs>
      <div aria-label="One">Page one</div>
      <div aria-label="Two">Page two</div>
      <div aria-label="Three">Page three</div>
    </basic-tabs>

  **Kind**: global class
**Extends:** <code>Modes</code>  
**Mixes**: <code>[GenericMixin](../basic-component-mixins/docs/GenericMixin.md)</code>
  
<a name="Generic+generic"></a>

### tabs.generic : <code>Boolean</code>
True if the component would like to receive generic styling.

This property is true by default — set it to false to turn off all
generic styles. This makes it easier to apply custom styling; you won't
have to explicitly override styling you don't want.

  **Kind**: instance property of <code>[Tabs](#Tabs)</code>. Defined by <code>[Generic](../basic-component-mixins/docs/Generic.md)</code> mixin.
**Default**: <code>true</code>  
