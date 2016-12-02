# API Documentation
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

Because basic-arrow-selection uses
[TargetSelectionMixin](TargetSelectionMixin.md), it exposes members to
access a selection: `selectNext`, `selectPrevious`, `selectedIndex`, etc.
These are all delegated to the child component (here, a basic-carousel).

This mixin expects a `target` property to be set to the element actually
managing the selection. You can set that property yourself, or you can use
[ContentFirstChildTargetMixin](ContentFirstChildTargetMixin.md) to
implicitly take the component's first child as the target. This is what
basic-arrow-selection (above) does.

  **Kind**: global class

* [TargetSelection](#TargetSelection)
    * [.canSelectNext](#TargetSelection+canSelectNext) : <code>boolean</code>
    * [.canSelectPrevious](#TargetSelection+canSelectPrevious) : <code>boolean</code>
    * [.items](#TargetSelection+items) : <code>Array.&lt;HTMLElement&gt;</code>
    * [.itemsChanged()](#TargetSelection+itemsChanged)
    * [.selectedFraction](#TargetSelection+selectedFraction) : <code>number</code>
    * [.selectedIndex](#TargetSelection+selectedIndex) : <code>number</code>
    * [.selectedItem](#TargetSelection+selectedItem) : <code>HTMLElement</code>
    * [.selectFirst()](#TargetSelection+selectFirst)
    * [.selectionRequired](#TargetSelection+selectionRequired) : <code>boolean</code>
    * [.selectionWraps](#TargetSelection+selectionWraps) : <code>boolean</code>
    * [.selectLast()](#TargetSelection+selectLast)
    * [.selectNext()](#TargetSelection+selectNext)
    * [.selectPrevious()](#TargetSelection+selectPrevious)
    * [.target](#TargetSelection+target) : <code>HTMLElement</code>

<a name="TargetSelection+canSelectNext"></a>

### targetSelection.canSelectNext : <code>boolean</code>
True if the selection can be moved to the next item, false if not (the
selected item is the last item in the list).

  **Kind**: instance property of <code>[TargetSelection](#TargetSelection)</code>
<a name="TargetSelection+canSelectPrevious"></a>

### targetSelection.canSelectPrevious : <code>boolean</code>
True if the selection can be moved to the previous item, false if not
(the selected item is the first one in the list).

  **Kind**: instance property of <code>[TargetSelection](#TargetSelection)</code>
<a name="TargetSelection+items"></a>

### targetSelection.items : <code>Array.&lt;HTMLElement&gt;</code>
The current set of items in the list.

  **Kind**: instance property of <code>[TargetSelection](#TargetSelection)</code>
<a name="TargetSelection+itemsChanged"></a>

### targetSelection.itemsChanged()
This method is invoked when the underlying contents change. It is also
invoked on component initialization – since the items have "changed" from
being nothing.

  **Kind**: instance method of <code>[TargetSelection](#TargetSelection)</code>
<a name="TargetSelection+selectedFraction"></a>

### targetSelection.selectedFraction : <code>number</code>
A fractional value indicating how far the user has currently advanced to
the next/previous item. E.g., a `selectedFraction` of 3.5 indicates the
user is halfway between items 3 and 4.

  **Kind**: instance property of <code>[TargetSelection](#TargetSelection)</code>
<a name="TargetSelection+selectedIndex"></a>

### targetSelection.selectedIndex : <code>number</code>
Index of the currently selected item, or -1 if there is no selection.

  **Kind**: instance property of <code>[TargetSelection](#TargetSelection)</code>
<a name="TargetSelection+selectedItem"></a>

### targetSelection.selectedItem : <code>HTMLElement</code>
The currently selected item, or null if there is no selection.

  **Kind**: instance property of <code>[TargetSelection](#TargetSelection)</code>
<a name="TargetSelection+selectFirst"></a>

### targetSelection.selectFirst()
Select the first item in the list.

  **Kind**: instance method of <code>[TargetSelection](#TargetSelection)</code>
<a name="TargetSelection+selectionRequired"></a>

### targetSelection.selectionRequired : <code>boolean</code>
True if the list should always have a selection (if it has items).

  **Kind**: instance property of <code>[TargetSelection](#TargetSelection)</code>
**Default**: <code>false</code>  
<a name="TargetSelection+selectionWraps"></a>

### targetSelection.selectionWraps : <code>boolean</code>
True if selection navigations wrap from last to first, and vice versa.

  **Kind**: instance property of <code>[TargetSelection](#TargetSelection)</code>
**Default**: <code>{false}</code>  
<a name="TargetSelection+selectLast"></a>

### targetSelection.selectLast()
Select the last item in the list.

  **Kind**: instance method of <code>[TargetSelection](#TargetSelection)</code>
<a name="TargetSelection+selectNext"></a>

### targetSelection.selectNext()
Select the next item in the list.

  **Kind**: instance method of <code>[TargetSelection](#TargetSelection)</code>
<a name="TargetSelection+selectPrevious"></a>

### targetSelection.selectPrevious()
Select the previous item in the list.

If the list has no selection, the last item will be selected.

  **Kind**: instance method of <code>[TargetSelection](#TargetSelection)</code>
<a name="TargetSelection+target"></a>

### targetSelection.target : <code>HTMLElement</code>
Gets/sets the target element to which this component will delegate
selection actions.

  **Kind**: instance property of <code>[TargetSelection](#TargetSelection)</code>
