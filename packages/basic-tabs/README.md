# API Documentation
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
**Mixes**: <code>[Generic](../basic-component-mixins/docs/Generic.md)</code>
  , <code>[SingleSelection](../basic-component-mixins/docs/SingleSelection.md)</code>
  , <code>[TargetSelection](../basic-component-mixins/docs/TargetSelection.md)</code>
  

* [Tabs](#Tabs) ⇐ <code>ElementBase</code>
    * [.applySelection(item, selected)](#SingleSelection+applySelection)
    * [.canSelectNext](#SingleSelection+canSelectNext) : <code>boolean</code>
    * [.canSelectPrevious](#SingleSelection+canSelectPrevious) : <code>boolean</code>
    * [.generic](#Generic+generic) : <code>Boolean</code>
    * [.itemAdded(item)](#SingleSelection+itemAdded)
    * [.items](#TargetSelection+items) : <code>Array.&lt;HTMLElement&gt;</code>
    * [.itemsChanged()](#TargetSelection+itemsChanged)
    * ["selected-index-changed"](#SingleSelection.event_selected-index-changed)
    * ["selected-item-changed"](#SingleSelection.event_selected-item-changed)
    * [.selectedIndex](#SingleSelection+selectedIndex) : <code>number</code>
    * [.selectedItem](#SingleSelection+selectedItem) : <code>object</code>
    * [.selectedItem](#TargetSelection+selectedItem) : <code>HTMLElement</code>
    * [.selectFirst()](#SingleSelection+selectFirst)
    * [.selectionRequired](#SingleSelection+selectionRequired) : <code>boolean</code>
    * [.selectionWraps](#TargetSelection+selectionWraps) : <code>boolean</code>
    * [.selectionWraps](#SingleSelection+selectionWraps) : <code>boolean</code>
    * [.selectLast()](#SingleSelection+selectLast)
    * [.selectNext()](#SingleSelection+selectNext)
    * [.selectPrevious()](#SingleSelection+selectPrevious)
    * [.tabPosition](#Tabs+tabPosition) : <code>string</code>
    * [.target](#TargetSelection+target) : <code>HTMLElement</code>

<a name="SingleSelection+applySelection"></a>

### tabs.applySelection(item, selected)
Apply the indicate selection state to the item.

The default implementation of this method does nothing. User-visible
effects will typically be handled by other mixins.

  **Kind**: instance method of <code>[Tabs](#Tabs)</code>. Defined by <code>[SingleSelection](../basic-component-mixins/docs/SingleSelection.md)</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| item | <code>HTMLElement</code> | the item being selected/deselected |
| selected | <code>boolean</code> | true if the item is selected, false if not |

<a name="SingleSelection+canSelectNext"></a>

### tabs.canSelectNext : <code>boolean</code>
True if the selection can be moved to the next item, false if not (the
selected item is the last item in the list).

  **Kind**: instance property of <code>[Tabs](#Tabs)</code>. Defined by <code>[SingleSelection](../basic-component-mixins/docs/SingleSelection.md)</code> mixin.
<a name="SingleSelection+canSelectPrevious"></a>

### tabs.canSelectPrevious : <code>boolean</code>
True if the selection can be moved to the previous item, false if not
(the selected item is the first one in the list).

  **Kind**: instance property of <code>[Tabs](#Tabs)</code>. Defined by <code>[SingleSelection](../basic-component-mixins/docs/SingleSelection.md)</code> mixin.
<a name="Generic+generic"></a>

### tabs.generic : <code>Boolean</code>
True if the component would like to receive generic styling.

This property is true by default — set it to false to turn off all
generic styles. This makes it easier to apply custom styling; you won't
have to explicitly override styling you don't want.

  **Kind**: instance property of <code>[Tabs](#Tabs)</code>. Defined by <code>[Generic](../basic-component-mixins/docs/Generic.md)</code> mixin.
**Default**: <code>true</code>  
<a name="SingleSelection+itemAdded"></a>

### tabs.itemAdded(item)
Handle a new item being added to the list.

The default implementation of this method simply sets the item's
selection state to false.

  **Kind**: instance method of <code>[Tabs](#Tabs)</code>. Defined by <code>[SingleSelection](../basic-component-mixins/docs/SingleSelection.md)</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| item | <code>HTMLElement</code> | the item being added |

<a name="TargetSelection+items"></a>

### tabs.items : <code>Array.&lt;HTMLElement&gt;</code>
The current set of items in the list.

  **Kind**: instance property of <code>[Tabs](#Tabs)</code>. Defined by <code>[TargetSelection](../basic-component-mixins/docs/TargetSelection.md)</code> mixin.
<a name="TargetSelection+itemsChanged"></a>

### tabs.itemsChanged()
This method is invoked when the underlying contents change. It is also
invoked on component initialization – since the items have "changed" from
being nothing.

  **Kind**: instance method of <code>[Tabs](#Tabs)</code>. Defined by <code>[TargetSelection](../basic-component-mixins/docs/TargetSelection.md)</code> mixin.
<a name="SingleSelection.event_selected-index-changed"></a>

### "selected-index-changed"
Fires when the selectedIndex property changes.

  **Kind**: event emitted by <code>[Tabs](#Tabs)</code>. Defined by <code>[SingleSelection](../basic-component-mixins/docs/SingleSelection.md)</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| detail.selectedIndex | <code>number</code> | The new selected index. |

<a name="SingleSelection.event_selected-item-changed"></a>

### "selected-item-changed"
Fires when the selectedItem property changes.

  **Kind**: event emitted by <code>[Tabs](#Tabs)</code>. Defined by <code>[SingleSelection](../basic-component-mixins/docs/SingleSelection.md)</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| detail.selectedItem | <code>HTMLElement</code> | The new selected item. |
| detail.previousItem | <code>HTMLElement</code> | The previously selected item. |

<a name="SingleSelection+selectedIndex"></a>

### tabs.selectedIndex : <code>number</code>
The index of the item which is currently selected.

If `selectionWraps` is false, the index is -1 if there is no selection.
In that case, setting the index to -1 will deselect any
currently-selected item.

  **Kind**: instance property of <code>[Tabs](#Tabs)</code>. Defined by <code>[SingleSelection](../basic-component-mixins/docs/SingleSelection.md)</code> mixin.
<a name="SingleSelection+selectedItem"></a>

### tabs.selectedItem : <code>object</code>
The currently selected item, or null if there is no selection.

Setting this property to null deselects any currently-selected item.

  **Kind**: instance property of <code>[Tabs](#Tabs)</code>. Defined by <code>[SingleSelection](../basic-component-mixins/docs/SingleSelection.md)</code> mixin.
<a name="TargetSelection+selectedItem"></a>

### tabs.selectedItem : <code>HTMLElement</code>
The currently selected item, or null if there is no selection.

  **Kind**: instance property of <code>[Tabs](#Tabs)</code>. Defined by <code>[TargetSelection](../basic-component-mixins/docs/TargetSelection.md)</code> mixin.
<a name="SingleSelection+selectFirst"></a>

### tabs.selectFirst()
Select the first item in the list.

  **Kind**: instance method of <code>[Tabs](#Tabs)</code>. Defined by <code>[SingleSelection](../basic-component-mixins/docs/SingleSelection.md)</code> mixin.
<a name="SingleSelection+selectionRequired"></a>

### tabs.selectionRequired : <code>boolean</code>
True if the list should always have a selection (if it has items).

  **Kind**: instance property of <code>[Tabs](#Tabs)</code>. Defined by <code>[SingleSelection](../basic-component-mixins/docs/SingleSelection.md)</code> mixin.
**Default**: <code>false</code>  
<a name="TargetSelection+selectionWraps"></a>

### tabs.selectionWraps : <code>boolean</code>
True if selection navigations wrap from last to first, and vice versa.

  **Kind**: instance property of <code>[Tabs](#Tabs)</code>. Defined by <code>[TargetSelection](../basic-component-mixins/docs/TargetSelection.md)</code> mixin.
**Default**: <code>{false}</code>  
<a name="SingleSelection+selectionWraps"></a>

### tabs.selectionWraps : <code>boolean</code>
True if selection navigations wrap from last to first, and vice versa.

  **Kind**: instance property of <code>[Tabs](#Tabs)</code>. Defined by <code>[SingleSelection](../basic-component-mixins/docs/SingleSelection.md)</code> mixin.
**Default**: <code>false</code>  
<a name="SingleSelection+selectLast"></a>

### tabs.selectLast()
Select the last item in the list.

  **Kind**: instance method of <code>[Tabs](#Tabs)</code>. Defined by <code>[SingleSelection](../basic-component-mixins/docs/SingleSelection.md)</code> mixin.
<a name="SingleSelection+selectNext"></a>

### tabs.selectNext()
Select the next item in the list.

  **Kind**: instance method of <code>[Tabs](#Tabs)</code>. Defined by <code>[SingleSelection](../basic-component-mixins/docs/SingleSelection.md)</code> mixin.
<a name="SingleSelection+selectPrevious"></a>

### tabs.selectPrevious()
Select the previous item in the list.

If the list has no selection, the last item will be selected.

  **Kind**: instance method of <code>[Tabs](#Tabs)</code>. Defined by <code>[SingleSelection](../basic-component-mixins/docs/SingleSelection.md)</code> mixin.
<a name="Tabs+tabPosition"></a>

### tabs.tabPosition : <code>string</code>
The position of the tab strip relative to the element's children. Valid
values are "top", "left", "right", and "bottom".

  **Kind**: instance property of <code>[Tabs](#Tabs)</code>
**Default**: <code>&quot;\&quot;top\&quot;&quot;</code>  
<a name="TargetSelection+target"></a>

### tabs.target : <code>HTMLElement</code>
Gets/sets the target element to which this component will delegate
selection actions.

  **Kind**: instance property of <code>[Tabs](#Tabs)</code>. Defined by <code>[TargetSelection](../basic-component-mixins/docs/TargetSelection.md)</code> mixin.
