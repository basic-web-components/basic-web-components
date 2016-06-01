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

Because basic-arrow-selection uses the
[TargetSelection](TargetSelection.md) mixin, it exposes members to access a
selection: `selectNext`, `selectPrevious`, `selectedIndex`, etc. These are
all delegated to the child component (here, a basic-carousel).

This mixin expects a `target` property to be set to the element actually
managing the selection. You can set that property yourself, or you can use
the [ContentFirstChildTarget](ContentFirstChildTarget.md) mixin to
implicitly take the component's first child as the target. This is what
basic-arrow-selection (above) does.

  **Kind**: global class

* [TargetSelection](#TargetSelection)
    * [.items](#TargetSelection+items) : <code>Array.&lt;HTMLElement&gt;</code>
    * [.itemsChanged()](#TargetSelection+itemsChanged)
    * [.selectedItem](#TargetSelection+selectedItem) : <code>HTMLElement</code>
    * [.selectionWraps](#TargetSelection+selectionWraps) : <code>boolean</code>
    * [.target](#TargetSelection+target) : <code>HTMLElement</code>

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
<a name="TargetSelection+selectedItem"></a>
### targetSelection.selectedItem : <code>HTMLElement</code>
The currently selected item, or null if there is no selection.

  **Kind**: instance property of <code>[TargetSelection](#TargetSelection)</code>
<a name="TargetSelection+selectionWraps"></a>
### targetSelection.selectionWraps : <code>boolean</code>
True if selection navigations wrap from last to first, and vice versa.

  **Kind**: instance property of <code>[TargetSelection](#TargetSelection)</code>
**Default**: <code>{false}</code>  
<a name="TargetSelection+target"></a>
### targetSelection.target : <code>HTMLElement</code>
Gets/sets the target element to which this component will delegate
selection actions.

  **Kind**: instance property of <code>[TargetSelection](#TargetSelection)</code>
