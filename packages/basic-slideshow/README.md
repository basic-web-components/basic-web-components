# API Documentation
<a name="Slideshow"></a>

## Slideshow ⇐ <code>ElementBase</code>
Slideshow with animated transitions.

[Live demo](http://basicwebcomponents.org/basic-web-components/packages/basic-slideshow/)

By default the slideshow will immediately begin playing when it is connected
to the document, advance every 3000 ms (3 seconds), and use a simple
crossfade effect. For a variation with play controls, see
[basic-slideshow-with-controls](../basic-slideshow-with-controls).

This component can be used on its own. To incorporate slideshow behavior into
a component of your own, apply the
[TimerSelectionMixin](../basic-component-mixins/docs/TimerSelectionMixin.md).

  **Kind**: global class
**Extends:** <code>ElementBase</code>  
**Mixes**: <code>[ContentItemsMixin](../basic-component-mixins/docs/ContentItemsMixin.md)</code>
  , <code>[DistributedChildrenContentMixin](../basic-component-mixins/docs/DistributedChildrenContentMixin.md)</code>
  , <code>[FractionalSelectionMixin](../basic-component-mixins/docs/FractionalSelectionMixin.md)</code>
  , <code>[SelectionAnimationMixin](../basic-component-mixins/docs/SelectionAnimationMixin.md)</code>
  , <code>[SelectionAriaActiveMixin](../basic-component-mixins/docs/SelectionAriaActiveMixin.md)</code>
  , <code>[SingleSelectionMixin](../basic-component-mixins/docs/SingleSelectionMixin.md)</code>
  , <code>[TimerSelectionMixin](../basic-component-mixins/docs/TimerSelectionMixin.md)</code>
  

* [Slideshow](#Slideshow) ⇐ <code>ElementBase</code>
    * [.canSelectNext](#SingleSelection+canSelectNext) : <code>boolean</code>
    * [.canSelectPrevious](#SingleSelection+canSelectPrevious) : <code>boolean</code>
    * [.content](#DistributedChildrenContent+content) : <code>Array.&lt;HTMLElement&gt;</code>
    * ["content-changed"](#DistributedChildrenContent.event_content-changed)
    * [.contentChanged()](#DistributedChildrenContent+contentChanged)
    * [.itemAdded(item)](#ContentItems+symbols.itemAdded)
    * [.itemAdded(item)](#SingleSelection+symbols.itemAdded)
    * [.items](#ContentItems+items) : <code>Array.&lt;HTMLElement&gt;</code>
    * ["items-changed"](#ContentItems.event_items-changed)
    * [.itemsChanged()](#ContentItems+symbols.itemsChanged)
    * [.itemSelected(item, selected)](#SingleSelection+symbols.itemSelected)
    * [.itemSelected(item, selected)](#ContentItems+symbols.itemSelected)
    * [.pause()](#TimerSelection+pause)
    * [.play()](#TimerSelection+play)
    * [.playing](#TimerSelection+playing) : <code>boolean</code>
    * ["selected-index-changed"](#SingleSelection.event_selected-index-changed)
    * ["selected-item-changed"](#SingleSelection.event_selected-item-changed)
    * [.selectedFraction](#FractionalSelection+selectedFraction) : <code>number</code>
    * [.selectedFraction](#SelectionAnimation+selectedFraction) : <code>number</code>
    * [.selectedIndex](#SingleSelection+selectedIndex) : <code>number</code>
    * [.selectedItem](#SingleSelection+selectedItem) : <code>object</code>
    * [.selectFirst()](#SingleSelection+selectFirst)
    * [.selectionAnimationDuration](#SelectionAnimation+selectionAnimationDuration) : <code>number</code>
    * [.selectionAnimationEffect](#SelectionAnimation+selectionAnimationEffect) : <code>string</code>
    * [.selectionAnimationKeyframes](#SelectionAnimation+selectionAnimationKeyframes) : <code>Array.&lt;cssRules&gt;</code>
    * [.selectionRequired](#SingleSelection+selectionRequired) : <code>boolean</code>
    * [.selectionTimerDuration](#TimerSelection+selectionTimerDuration) : <code>number</code>
    * [.selectionWraps](#SingleSelection+selectionWraps) : <code>boolean</code>
    * [.selectLast()](#SingleSelection+selectLast)
    * [.selectNext()](#SingleSelection+selectNext)
    * [.selectPrevious()](#SingleSelection+selectPrevious)

<a name="SingleSelection+canSelectNext"></a>

### slideshow.canSelectNext : <code>boolean</code>
True if the selection can be moved to the next item, false if not (the
selected item is the last item in the list).

  **Kind**: instance property of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[SingleSelection](../basic-component-mixins/docs/SingleSelection.md)</code> mixin.
<a name="SingleSelection+canSelectPrevious"></a>

### slideshow.canSelectPrevious : <code>boolean</code>
True if the selection can be moved to the previous item, false if not
(the selected item is the first one in the list).

  **Kind**: instance property of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[SingleSelection](../basic-component-mixins/docs/SingleSelection.md)</code> mixin.
<a name="DistributedChildrenContent+content"></a>

### slideshow.content : <code>Array.&lt;HTMLElement&gt;</code>
The content of this component, defined to be the flattened array of
children distributed to the component.

  **Kind**: instance property of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[DistributedChildrenContent](../basic-component-mixins/docs/DistributedChildrenContent.md)</code> mixin.
<a name="DistributedChildrenContent.event_content-changed"></a>

### "content-changed"
This event is raised when the component's contents (including distributed
children) have changed.

  **Kind**: event emitted by <code>[Slideshow](#Slideshow)</code>. Defined by <code>[DistributedChildrenContent](../basic-component-mixins/docs/DistributedChildrenContent.md)</code> mixin.
<a name="DistributedChildrenContent+contentChanged"></a>

### slideshow.contentChanged()
Invoked when the contents of the component (including distributed
children) have changed.

This method is also invoked when a component is first instantiated; the
contents have essentially "changed" from being nothing. This allows the
component to perform initial processing of its children.

  **Kind**: instance method of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[DistributedChildrenContent](../basic-component-mixins/docs/DistributedChildrenContent.md)</code> mixin.
<a name="ContentItems+symbols.itemAdded"></a>

### Slideshow.itemAdded(item)
This method is invoked whenever a new item is added to the list.

The default implementation of this method does nothing. You can override
this to perform per-item initialization.

  **Kind**: static method of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[ContentItems#symbols](../basic-component-mixins/docs/ContentItems#symbols.md)</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| item | <code>HTMLElement</code> | The item that was added. |

<a name="SingleSelection+symbols.itemAdded"></a>

### Slideshow.itemAdded(item)
Handle a new item being added to the list.

The default implementation of this method simply sets the item's
selection state to false.

  **Kind**: static method of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[SingleSelection#symbols](../basic-component-mixins/docs/SingleSelection#symbols.md)</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| item | <code>HTMLElement</code> | the item being added |

<a name="ContentItems+items"></a>

### slideshow.items : <code>Array.&lt;HTMLElement&gt;</code>
The current set of items in the list. See the top-level documentation for
mixin for a description of how items differ from plain content.

  **Kind**: instance property of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[ContentItems](../basic-component-mixins/docs/ContentItems.md)</code> mixin.
<a name="ContentItems.event_items-changed"></a>

### "items-changed"
Fires when the items in the list change.

  **Kind**: event emitted by <code>[Slideshow](#Slideshow)</code>. Defined by <code>[ContentItems](../basic-component-mixins/docs/ContentItems.md)</code> mixin.
<a name="ContentItems+symbols.itemsChanged"></a>

### Slideshow.itemsChanged()
This method is invoked when the underlying contents change. It is also
invoked on component initialization – since the items have "changed" from
being nothing.

  **Kind**: static method of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[ContentItems#symbols](../basic-component-mixins/docs/ContentItems#symbols.md)</code> mixin.
<a name="SingleSelection+symbols.itemSelected"></a>

### Slideshow.itemSelected(item, selected)
Apply the indicate selection state to the item.

The default implementation of this method does nothing. User-visible
effects will typically be handled by other mixins.

  **Kind**: static method of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[SingleSelection#symbols](../basic-component-mixins/docs/SingleSelection#symbols.md)</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| item | <code>HTMLElement</code> | the item being selected/deselected |
| selected | <code>boolean</code> | true if the item is selected, false if not |

<a name="ContentItems+symbols.itemSelected"></a>

### Slideshow.itemSelected(item, selected)
The selection state for a single item has changed.

Invoke this method to signal that the selected state of the indicated item
has changed. By default, this applies a `selected` CSS class if the item
is selected, and removed it if not selected.

  **Kind**: static method of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[ContentItems#symbols](../basic-component-mixins/docs/ContentItems#symbols.md)</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| item | <code>HTMLElement</code> | The item whose selection state has changed. |
| selected | <code>boolean</code> | True if the item is selected, false if not. |

<a name="TimerSelection+pause"></a>

### slideshow.pause()
Pause automatic progression of the selection.

  **Kind**: instance method of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[TimerSelection](../basic-component-mixins/docs/TimerSelection.md)</code> mixin.
<a name="TimerSelection+play"></a>

### slideshow.play()
Begin automatic progression of the selection.

  **Kind**: instance method of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[TimerSelection](../basic-component-mixins/docs/TimerSelection.md)</code> mixin.
<a name="TimerSelection+playing"></a>

### slideshow.playing : <code>boolean</code>
True if the selection is being automatically advanced.

  **Kind**: instance property of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[TimerSelection](../basic-component-mixins/docs/TimerSelection.md)</code> mixin.
**Default**: <code>false</code>  
<a name="SingleSelection.event_selected-index-changed"></a>

### "selected-index-changed"
Fires when the selectedIndex property changes.

  **Kind**: event emitted by <code>[Slideshow](#Slideshow)</code>. Defined by <code>[SingleSelection](../basic-component-mixins/docs/SingleSelection.md)</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| detail.selectedIndex | <code>number</code> | The new selected index. |

<a name="SingleSelection.event_selected-item-changed"></a>

### "selected-item-changed"
Fires when the selectedItem property changes.

  **Kind**: event emitted by <code>[Slideshow](#Slideshow)</code>. Defined by <code>[SingleSelection](../basic-component-mixins/docs/SingleSelection.md)</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| detail.selectedItem | <code>HTMLElement</code> | The new selected item. |
| detail.previousItem | <code>HTMLElement</code> | The previously selected item. |

<a name="FractionalSelection+selectedFraction"></a>

### slideshow.selectedFraction : <code>number</code>
A fractional value indicating how far the user has currently advanced to
the next/previous item. E.g., a `selectedFraction` of 3.5 indicates the
user is halfway between items 3 and 4.

  **Kind**: instance property of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[FractionalSelection](../basic-component-mixins/docs/FractionalSelection.md)</code> mixin.
<a name="SelectionAnimation+selectedFraction"></a>

### slideshow.selectedFraction : <code>number</code>
A fractional value indicating how far the user has currently advanced to
the next/previous item. E.g., a `selectedFraction` of 3.5 indicates the
user is halfway between items 3 and 4.

For more details, see [FractionalSelectionMixin](FractionalSelectionMixin.md)
mixin.

  **Kind**: instance property of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[SelectionAnimation](../basic-component-mixins/docs/SelectionAnimation.md)</code> mixin.
<a name="SingleSelection+selectedIndex"></a>

### slideshow.selectedIndex : <code>number</code>
The index of the item which is currently selected.

A `selectedIndex` of -1 indicates there is no selection. Setting this
property to -1 will remove any existing selection.

  **Kind**: instance property of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[SingleSelection](../basic-component-mixins/docs/SingleSelection.md)</code> mixin.
<a name="SingleSelection+selectedItem"></a>

### slideshow.selectedItem : <code>object</code>
The currently selected item, or null if there is no selection.

Setting this property to null deselects any currently-selected item.
Setting this property to an object that is not in the list has no effect.

TODO: Even if selectionRequired, can still explicitly set selectedItem to null.
TODO: If selectionRequired, leave selection alone?

  **Kind**: instance property of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[SingleSelection](../basic-component-mixins/docs/SingleSelection.md)</code> mixin.
<a name="SingleSelection+selectFirst"></a>

### slideshow.selectFirst()
Select the first item in the list.

  **Kind**: instance method of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[SingleSelection](../basic-component-mixins/docs/SingleSelection.md)</code> mixin.
<a name="SelectionAnimation+selectionAnimationDuration"></a>

### slideshow.selectionAnimationDuration : <code>number</code>
The duration of a selection animation in milliseconds.

This measures the amount of time required for a selection animation to
complete. This number remains constant, even if the number of items being
animated increases.

The default value is 250 milliseconds (a quarter a second).

  **Kind**: instance property of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[SelectionAnimation](../basic-component-mixins/docs/SelectionAnimation.md)</code> mixin.
**Default**: <code>250</code>  
<a name="SelectionAnimation+selectionAnimationEffect"></a>

### slideshow.selectionAnimationEffect : <code>string</code>
The name of a standard selection animation effect.

This is a shorthand for setting the `selectionAnimationKeyframes`
property to standard keyframes. Supported string values:

* "crossfade"
* "reveal"
* "revealWithFade"
* "showAdjacent"
* "slide"
* "slideWithGap"

  **Kind**: instance property of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[SelectionAnimation](../basic-component-mixins/docs/SelectionAnimation.md)</code> mixin.
**Default**: <code>&quot;\&quot;slide\&quot;&quot;</code>  
<a name="SelectionAnimation+selectionAnimationKeyframes"></a>

### slideshow.selectionAnimationKeyframes : <code>Array.&lt;cssRules&gt;</code>
The keyframes that define an animation that plays for an item when moving
forward in the sequence.

This is an array of CSS rules that will be applied. These are used as
[keyframes](http://w3c.github.io/web-animations/#keyframes-section)
to animate the item with the
[Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/animation).

The animation represents the state of the next item as it moves from
completely unselected (offstage, usually right), to selected (center
stage), to completely unselected (offstage, usually left). The center time
of the animation should correspond to the item's quiscent selected state,
typically in the center of the stage and at the item's largest size.

The default forward animation is a smooth slide at full size from right to
left.

When moving the selection backward, this animation is played in reverse.

  **Kind**: instance property of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[SelectionAnimation](../basic-component-mixins/docs/SelectionAnimation.md)</code> mixin.
<a name="SingleSelection+selectionRequired"></a>

### slideshow.selectionRequired : <code>boolean</code>
True if the list should always have a selection (if it has items).

  **Kind**: instance property of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[SingleSelection](../basic-component-mixins/docs/SingleSelection.md)</code> mixin.
**Default**: <code>false</code>  
<a name="TimerSelection+selectionTimerDuration"></a>

### slideshow.selectionTimerDuration : <code>number</code>
The time in milliseconds that will elapse after the selection changes
before the selection will be advanced to the next item in the list.

  **Kind**: instance property of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[TimerSelection](../basic-component-mixins/docs/TimerSelection.md)</code> mixin.
**Default**: <code>1000 (1 second)</code>  
<a name="SingleSelection+selectionWraps"></a>

### slideshow.selectionWraps : <code>boolean</code>
True if selection navigations wrap from last to first, and vice versa.

  **Kind**: instance property of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[SingleSelection](../basic-component-mixins/docs/SingleSelection.md)</code> mixin.
**Default**: <code>false</code>  
<a name="SingleSelection+selectLast"></a>

### slideshow.selectLast()
Select the last item in the list.

  **Kind**: instance method of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[SingleSelection](../basic-component-mixins/docs/SingleSelection.md)</code> mixin.
<a name="SingleSelection+selectNext"></a>

### slideshow.selectNext()
Select the next item in the list.

  **Kind**: instance method of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[SingleSelection](../basic-component-mixins/docs/SingleSelection.md)</code> mixin.
<a name="SingleSelection+selectPrevious"></a>

### slideshow.selectPrevious()
Select the previous item in the list.

If the list has no selection, the last item will be selected.

  **Kind**: instance method of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[SingleSelection](../basic-component-mixins/docs/SingleSelection.md)</code> mixin.
