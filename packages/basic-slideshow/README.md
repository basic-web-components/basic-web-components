# API Documentation
<a name="Slideshow"></a>
## Slideshow ⇐ <code>ElementBase</code>
Slideshow with animated transitions.

By default the slideshow will immediately begin playing when it is connected
to the document, advance every 3000 ms (3 seconds), and use a simple
crossfade effect.

This component can be used on its own. To incorporate slideshow behavior into
a component of your own, apply the
[TimerSelection](../basic-component-mixins/docs/TimerSelection.md) mixin. To
add slideshow functionality to a component such as a carousel, wrap it with
the auxiliary [basic-slideshow-timer](../basic-slideshow-timer) component.

  **Kind**: global class
**Extends:** <code>ElementBase</code>  
**Mixes**: <code>[ContentAsItems](../basic-component-mixins/docs/ContentAsItems.md)</code>
  , <code>[DistributedChildrenAsContent](../basic-component-mixins/docs/DistributedChildrenAsContent.md)</code>
  , <code>[FractionalSelection](../basic-component-mixins/docs/FractionalSelection.md)</code>
  , <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code>
  , <code>[ObserveContentChanges](../basic-component-mixins/docs/ObserveContentChanges.md)</code>
  , <code>[SelectionAnimation](../basic-component-mixins/docs/SelectionAnimation.md)</code>
  , <code>[SelectionAriaActive](../basic-component-mixins/docs/SelectionAriaActive.md)</code>
  , <code>[TimerSelection](../basic-component-mixins/docs/TimerSelection.md)</code>
  

* [Slideshow](#Slideshow) ⇐ <code>ElementBase</code>
    * [.applySelection(item, selected)](#ItemsSelection+applySelection)
    * [.applySelection(item, selected)](#ContentAsItems+applySelection)
    * [.canSelectNext](#ItemsSelection+canSelectNext) : <code>boolean</code>
    * [.canSelectPrevious](#ItemsSelection+canSelectPrevious) : <code>boolean</code>
    * [.content](#DistributedChildrenAsContent+content) : <code>Array.&lt;HTMLElement&gt;</code>
    * ["content-changed"](#ObserveContentChanges.event_content-changed)
    * [.contentChanged()](#ObserveContentChanges+contentChanged)
    * [.dampedSelection(selection, itemCount)](#mixin.helpers.dampedSelection) ⇒ <code>number</code>
    * [.elementSelection(element)](#mixin.helpers.elementSelection)
    * [.itemAdded(item)](#ItemsSelection+itemAdded)
    * [.itemAdded(item)](#ContentAsItems+itemAdded)
    * [.items](#ContentAsItems+items) : <code>Array.&lt;HTMLElement&gt;</code>
    * ["items-changed"](#ContentAsItems.event_items-changed)
    * [.itemsChanged()](#ContentAsItems+itemsChanged)
    * [.pause()](#TimerSelection+pause)
    * [.play()](#TimerSelection+play)
    * [.playing](#TimerSelection+playing) : <code>boolean</code>
    * ["selected-index-changed"](#ItemsSelection.event_selected-index-changed)
    * ["selected-item-changed"](#ItemsSelection.event_selected-item-changed)
    * [.selectedFraction](#SelectionAnimation+selectedFraction) : <code>number</code>
    * [.selectedFraction](#FractionalSelection+selectedFraction) : <code>number</code>
    * [.selectedIndex](#ItemsSelection+selectedIndex) : <code>number</code>
    * [.selectedItem](#ItemsSelection+selectedItem) : <code>object</code>
    * [.selectFirst()](#ItemsSelection+selectFirst)
    * [.selectionAnimationDuration](#SelectionAnimation+selectionAnimationDuration) : <code>number</code>
    * [.selectionAnimationEffect](#SelectionAnimation+selectionAnimationEffect) : <code>string</code>
    * [.selectionAnimationKeyframes](#SelectionAnimation+selectionAnimationKeyframes) : <code>Array.&lt;cssRules&gt;</code>
    * [.selectionParts(selection)](#mixin.helpers.selectionParts) ⇒ <code>object</code>
    * [.selectionRequired](#ItemsSelection+selectionRequired) : <code>boolean</code>
    * [.selectionTimerDuration](#TimerSelection+selectionTimerDuration) : <code>number</code>
    * [.selectionWraps](#ItemsSelection+selectionWraps) : <code>boolean</code>
    * [.selectLast()](#ItemsSelection+selectLast)
    * [.selectNext()](#ItemsSelection+selectNext)
    * [.selectPrevious()](#ItemsSelection+selectPrevious)
    * [.showTransition](#SelectionAnimation+showTransition) : <code>boolean</code>
    * [.wrappedSelection(selection, itemCount)](#mixin.helpers.wrappedSelection) ⇒ <code>number</code>
    * [.wrappedSelectionParts(selection, itemCount, wrap)](#mixin.helpers.wrappedSelectionParts) ⇒ <code>object</code>

<a name="ItemsSelection+applySelection"></a>
### slideshow.applySelection(item, selected)
Apply the indicate selection state to the item.

The default implementation of this method does nothing. User-visible
effects will typically be handled by other mixins.

  **Kind**: instance method of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| item | <code>HTMLElement</code> | the item being selected/deselected |
| selected | <code>boolean</code> | true if the item is selected, false if not |

<a name="ContentAsItems+applySelection"></a>
### slideshow.applySelection(item, selected)
Apply the selection state to a single item.

Invoke this method to signal that the selected state of the indicated item
has changed. By default, this applies a `selected` CSS class if the item
is selected, and removed it if not selected.

  **Kind**: instance method of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[ContentAsItems](../basic-component-mixins/docs/ContentAsItems.md)</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| item | <code>HTMLElement</code> | The item whose selection state has changed. |
| selected | <code>boolean</code> | True if the item is selected, false if not. |

<a name="ItemsSelection+canSelectNext"></a>
### slideshow.canSelectNext : <code>boolean</code>
True if the selection can be moved to the next item, false if not (the
selected item is the last item in the list).

  **Kind**: instance property of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.
<a name="ItemsSelection+canSelectPrevious"></a>
### slideshow.canSelectPrevious : <code>boolean</code>
True if the selection can be moved to the previous item, false if not
(the selected item is the first one in the list).

  **Kind**: instance property of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.
<a name="DistributedChildrenAsContent+content"></a>
### slideshow.content : <code>Array.&lt;HTMLElement&gt;</code>
The content of this component, defined to be the flattened array of
children distributed to the component.

  **Kind**: instance property of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[DistributedChildrenAsContent](../basic-component-mixins/docs/DistributedChildrenAsContent.md)</code> mixin.
<a name="ObserveContentChanges.event_content-changed"></a>
### "content-changed"
This event is raised when the component's contents (including distributed
children) have changed.

  **Kind**: event emitted by <code>[Slideshow](#Slideshow)</code>. Defined by <code>[ObserveContentChanges](../basic-component-mixins/docs/ObserveContentChanges.md)</code> mixin.
<a name="ObserveContentChanges+contentChanged"></a>
### slideshow.contentChanged()
Invoked when the contents of the component (including distributed
children) have changed.

This method is also invoked when a component is first instantiated; the
contents have essentially "changed" from being nothing. This allows the
component to perform initial processing of its children.

  **Kind**: instance method of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[ObserveContentChanges](../basic-component-mixins/docs/ObserveContentChanges.md)</code> mixin.
<a name="mixin.helpers.dampedSelection"></a>
### Slideshow.dampedSelection(selection, itemCount) ⇒ <code>number</code>
Dampen a selection that goes past the beginning or end of a list. This is
generally used to produce a visual effect of tension as the user tries to
go further in a direction that has no more items.

Example: suppose `itemCount` is 5, indicating a list of 5 items. The index of
the last item is 4. If the `selection` parameter is 4.5, the user is trying
to go past this last item. When a damping function is applied, the resulting
value will be less than 4.5 (the actual value will be 4.25). When this
selection state is rendered, the user will see that, each unit distance the
drag travels has less and less visible effect. This is perceived as tension.

  **Kind**: static method of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[mixin.helpers](../basic-component-mixins/docs/mixin.helpers.md)</code> mixin.
**Returns**: <code>number</code> - A real number representing the damped selection value.  

| Param | Type | Description |
| --- | --- | --- |
| selection | <code>number</code> | A real number indicating a selection position |
| itemCount | <code>number</code> | An integer for the number of items in the list |

<a name="mixin.helpers.elementSelection"></a>
### Slideshow.elementSelection(element)
Return the current fractional selection value for the given element.

This simply adds the element's `selectedIndex` and `selectedFraction`
properties.

  **Kind**: static method of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[mixin.helpers](../basic-component-mixins/docs/mixin.helpers.md)</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| element | <code>HTMLElement</code> | An element that supports selection |

<a name="ItemsSelection+itemAdded"></a>
### slideshow.itemAdded(item)
Handle a new item being added to the list.

The default implementation of this method simply sets the item's
selection state to false.

  **Kind**: instance method of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| item | <code>HTMLElement</code> | the item being added |

<a name="ContentAsItems+itemAdded"></a>
### slideshow.itemAdded(item)
This method is invoked whenever a new item is added to the list.

The default implementation of this method does nothing. You can override
this to perform per-item initialization.

  **Kind**: instance method of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[ContentAsItems](../basic-component-mixins/docs/ContentAsItems.md)</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| item | <code>HTMLElement</code> | The item that was added. |

<a name="ContentAsItems+items"></a>
### slideshow.items : <code>Array.&lt;HTMLElement&gt;</code>
The current set of items in the list. See the top-level documentation for
mixin for a description of how items differ from plain content.

  **Kind**: instance property of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[ContentAsItems](../basic-component-mixins/docs/ContentAsItems.md)</code> mixin.
<a name="ContentAsItems.event_items-changed"></a>
### "items-changed"
Fires when the items in the list change.

  **Kind**: event emitted by <code>[Slideshow](#Slideshow)</code>. Defined by <code>[ContentAsItems](../basic-component-mixins/docs/ContentAsItems.md)</code> mixin.
<a name="ContentAsItems+itemsChanged"></a>
### slideshow.itemsChanged()
This method is invoked when the underlying contents change. It is also
invoked on component initialization – since the items have "changed" from
being nothing.

  **Kind**: instance method of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[ContentAsItems](../basic-component-mixins/docs/ContentAsItems.md)</code> mixin.
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
<a name="ItemsSelection.event_selected-index-changed"></a>
### "selected-index-changed"
Fires when the selectedIndex property changes.

  **Kind**: event emitted by <code>[Slideshow](#Slideshow)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| detail.selectedIndex | <code>number</code> | The new selected index. |

<a name="ItemsSelection.event_selected-item-changed"></a>
### "selected-item-changed"
Fires when the selectedItem property changes.

  **Kind**: event emitted by <code>[Slideshow](#Slideshow)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| detail.selectedItem | <code>HTMLElement</code> | The new selected item. |
| detail.previousItem | <code>HTMLElement</code> | The previously selected item. |

<a name="SelectionAnimation+selectedFraction"></a>
### slideshow.selectedFraction : <code>number</code>
A fractional value indicating how far the user has currently advanced to
the next/previous item. E.g., a `selectedFraction` of 3.5 indicates the
user is halfway between items 3 and 4.

For more details, see the [FractionalSelection](FractionalSelection.md)
mixin.

  **Kind**: instance property of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[SelectionAnimation](../basic-component-mixins/docs/SelectionAnimation.md)</code> mixin.
<a name="FractionalSelection+selectedFraction"></a>
### slideshow.selectedFraction : <code>number</code>
A fractional value indicating how far the user has currently advanced to
the next/previous item. E.g., a `selectedFraction` of 3.5 indicates the
user is halfway between items 3 and 4.

  **Kind**: instance property of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[FractionalSelection](../basic-component-mixins/docs/FractionalSelection.md)</code> mixin.
<a name="ItemsSelection+selectedIndex"></a>
### slideshow.selectedIndex : <code>number</code>
The index of the item which is currently selected.

If `selectionWraps` is false, the index is -1 if there is no selection.
In that case, setting the index to -1 will deselect any
currently-selected item.

  **Kind**: instance property of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.
<a name="ItemsSelection+selectedItem"></a>
### slideshow.selectedItem : <code>object</code>
The currently selected item, or null if there is no selection.

Setting this property to null deselects any currently-selected item.

  **Kind**: instance property of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.
<a name="ItemsSelection+selectFirst"></a>
### slideshow.selectFirst()
Select the first item in the list.

  **Kind**: instance method of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.
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
<a name="mixin.helpers.selectionParts"></a>
### Slideshow.selectionParts(selection) ⇒ <code>object</code>
Breaks a fractional selection into its integer and fractional parts.

Example: if passed 3.5, this returns { index: 3, fraction: 5 }.

  **Kind**: static method of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[mixin.helpers](../basic-component-mixins/docs/mixin.helpers.md)</code> mixin.
**Returns**: <code>object</code> - - An object with an `index` property holding the
selection's integer component, and a `fraction` property holding the
selection's fractional component.  

| Param | Type | Description |
| --- | --- | --- |
| selection | <code>number</code> | – A real number representing a selection point |

<a name="ItemsSelection+selectionRequired"></a>
### slideshow.selectionRequired : <code>boolean</code>
True if the list should always have a selection (if it has items).

  **Kind**: instance property of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.
**Default**: <code>false</code>  
<a name="TimerSelection+selectionTimerDuration"></a>
### slideshow.selectionTimerDuration : <code>number</code>
The time in milliseconds that will elapse after the selection changes
before the selection will be advanced to the next item in the list.

  **Kind**: instance property of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[TimerSelection](../basic-component-mixins/docs/TimerSelection.md)</code> mixin.
**Default**: <code>1000 (1 second)</code>  
<a name="ItemsSelection+selectionWraps"></a>
### slideshow.selectionWraps : <code>boolean</code>
True if selection navigations wrap from last to first, and vice versa.

  **Kind**: instance property of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.
**Default**: <code>false</code>  
<a name="ItemsSelection+selectLast"></a>
### slideshow.selectLast()
Select the last item in the list.

  **Kind**: instance method of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.
<a name="ItemsSelection+selectNext"></a>
### slideshow.selectNext()
Select the next item in the list.

  **Kind**: instance method of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.
<a name="ItemsSelection+selectPrevious"></a>
### slideshow.selectPrevious()
Select the previous item in the list.

  **Kind**: instance method of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.
<a name="SelectionAnimation+showTransition"></a>
### slideshow.showTransition : <code>boolean</code>
Determine whether a transition should be shown during selection.

Components like carousels often define animated CSS transitions for
sliding effects. Such a transition should usually *not* be applied while
the user is dragging, because a CSS animation will introduce a lag that
makes the swipe feel sluggish. Instead, as long as the user is dragging
with their finger down, the transition should be suppressed. When the
user releases their finger, the transition can be restored, allowing the
animation to show the carousel sliding into its final position.

Note: This property is only intended to let a component cooperate with
mixins that may be applied to it, and is not intended to let someone
using component permanently enable or disable transition effects.

  **Kind**: instance property of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[SelectionAnimation](../basic-component-mixins/docs/SelectionAnimation.md)</code> mixin.
<a name="mixin.helpers.wrappedSelection"></a>
### Slideshow.wrappedSelection(selection, itemCount) ⇒ <code>number</code>
Returns a fractional selection point after accounting for wrapping, ensuring
that the integer portion of the selection stays between 0 and `itemCount`-1.
That is, the integer portion will always be a valid index into the list.

Example of wrapping past the end of the list: if `selection` is 5.5 and
`itemCount` is 5, this returns 0.5. Example of wrapping past the beginning of
the list: if `selection` is 0.5 and `itemCount` is 5, this returns 4.5.

  **Kind**: static method of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[mixin.helpers](../basic-component-mixins/docs/mixin.helpers.md)</code> mixin.
**Returns**: <code>number</code> - - The result of wrapping the selection point  

| Param | Type | Description |
| --- | --- | --- |
| selection | <code>number</code> | A real number representing a selection point |
| itemCount | <code>number</code> | The number of items in the list |

<a name="mixin.helpers.wrappedSelectionParts"></a>
### Slideshow.wrappedSelectionParts(selection, itemCount, wrap) ⇒ <code>object</code>
Return the parts of a selection, first wrapping if necessary.

  **Kind**: static method of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[mixin.helpers](../basic-component-mixins/docs/mixin.helpers.md)</code> mixin.
**Returns**: <code>object</code> - – The parts of the selection, using the same format as
`selectionParts`.  

| Param | Type | Description |
| --- | --- | --- |
| selection | <code>number</code> | – A real number representing a selection point |
| itemCount | <code>number</code> | The number of items in the list |
| wrap | <code>boolean</code> | – True if the selection should wrap to stay within the list |

