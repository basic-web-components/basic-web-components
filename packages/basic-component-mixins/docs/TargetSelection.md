<a name="TargetSelection"></a>
## TargetSelection
Mixin which allows a component to delegate its own selection semantics to a
target element.

This is useful when defining components that act as optional features for a
component that acts like a list. See basic-arrow-selection and
basic-page-dots for examples of components used as optional features for
components like basic-carousel. A typical usage might be:

    <basic-arrow-selection>
      <basic-carousel>
        ... images, etc. ...
      </basic-carousel>
    </basic-arrow-selection>

Because basic-arrow-selection uses the TargetSelection mixin, it exposes
members to access a selection: `selectNext`, `selectPrevious`,
`selectedIndex`, etc. These are all delegated to the child component (here,
a basic-carousel).

This mixin expects a `target` property to be set to the element actually
managing the selection. You can set that property yourself, or you can use
the ContentFirstChildTarget mixin to implicitly take the component's first
child as the target. This is what basic-arrow-selection (above) does.

**Kind**: global class  

* [TargetSelection](#TargetSelection)
    * [.items](#TargetSelection+items) : <code>Array.&lt;HTMLElement&gt;</code>
    * [.selectedIndex](#TargetSelection+selectedIndex) : <code>number</code>
    * [.selectedItem](#TargetSelection+selectedItem) : <code>HTMLElement</code>
    * [.target](#TargetSelection+target) : <code>HTMLElement</code>
    * [.indexOfItem(item)](#TargetSelection+indexOfItem) ⇒ <code>number</code>
    * [.itemsChanged()](#TargetSelection+itemsChanged)

<a name="TargetSelection+items"></a>
### targetSelection.items : <code>Array.&lt;HTMLElement&gt;</code>
The current set of items in the list.

**Kind**: instance property of <code>[TargetSelection](#TargetSelection)</code>  
<a name="TargetSelection+selectedIndex"></a>
### targetSelection.selectedIndex : <code>number</code>
The index of the item which is currently selected, or -1 if there is no
selection.

**Kind**: instance property of <code>[TargetSelection](#TargetSelection)</code>  
<a name="TargetSelection+selectedItem"></a>
### targetSelection.selectedItem : <code>HTMLElement</code>
The currently selected item, or null if there is no selection.

**Kind**: instance property of <code>[TargetSelection](#TargetSelection)</code>  
<a name="TargetSelection+target"></a>
### targetSelection.target : <code>HTMLElement</code>
Gets/sets the target element to which this component will delegate
selection actions.

**Kind**: instance property of <code>[TargetSelection](#TargetSelection)</code>  
<a name="TargetSelection+indexOfItem"></a>
### targetSelection.indexOfItem(item) ⇒ <code>number</code>
Return the positional index for the indicated item.

**Kind**: instance method of <code>[TargetSelection](#TargetSelection)</code>  
**Returns**: <code>number</code> - The index of the item, or -1 if not found.  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>HTMLElement</code> | The item whose index is requested. |

<a name="TargetSelection+itemsChanged"></a>
### targetSelection.itemsChanged()
This method is invoked when the underlying contents change. It is also
invoked on component initialization – since the items have "changed" from
being nothing.

**Kind**: instance method of <code>[TargetSelection](#TargetSelection)</code>  
