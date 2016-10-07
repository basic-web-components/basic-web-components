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
  , <code>[SelectionAnimation](../basic-component-mixins/docs/SelectionAnimation.md)</code>
  , <code>[SelectionAriaActive](../basic-component-mixins/docs/SelectionAriaActive.md)</code>
  , <code>[SingleSelection](../basic-component-mixins/docs/SingleSelection.md)</code>
  , <code>[TimerSelection](../basic-component-mixins/docs/TimerSelection.md)</code>
  

* [Slideshow](#Slideshow) ⇐ <code>ElementBase</code>
    * [.applySelection(item, selected)](#ContentAsItems+applySelection)
    * [.applySelection(item, selected)](#SingleSelection+applySelection)
    * [.canSelectNext](#SingleSelection+canSelectNext) : <code>boolean</code>
    * [.canSelectPrevious](#SingleSelection+canSelectPrevious) : <code>boolean</code>
    * [.content](#DistributedChildrenAsContent+content) : <code>Array.&lt;HTMLElement&gt;</code>
    * ["content-changed"](#DistributedChildrenAsContent.event_content-changed)
    * [.contentChanged()](#DistributedChildrenAsContent+contentChanged)
    * [.itemAdded(item)](#SingleSelection+itemAdded)
    * [.itemAdded(item)](#ContentAsItems+itemAdded)
    * [.items](#ContentAsItems+items) : <code>Array.&lt;HTMLElement&gt;</code>
    * ["items-changed"](#ContentAsItems.event_items-changed)
    * [.itemsChanged()](#ContentAsItems+itemsChanged)
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
    * [.showTransition](#SelectionAnimation+showTransition) : <code>boolean</code>

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

<a name="SingleSelection+applySelection"></a>
### slideshow.applySelection(item, selected)
Apply the indicate selection state to the item.

The default implementation of this method does nothing. User-visible
effects will typically be handled by other mixins.

  **Kind**: instance method of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[SingleSelection](../basic-component-mixins/docs/SingleSelection.md)</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| item | <code>HTMLElement</code> | the item being selected/deselected |
| selected | <code>boolean</code> | true if the item is selected, false if not |

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
<a name="DistributedChildrenAsContent+content"></a>
### slideshow.content : <code>Array.&lt;HTMLElement&gt;</code>
The content of this component, defined to be the flattened array of
children distributed to the component.

  **Kind**: instance property of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[DistributedChildrenAsContent](../basic-component-mixins/docs/DistributedChildrenAsContent.md)</code> mixin.
<a name="DistributedChildrenAsContent.event_content-changed"></a>
### "content-changed"
This event is raised when the component's contents (including distributed
children) have changed.

  **Kind**: event emitted by <code>[Slideshow](#Slideshow)</code>. Defined by <code>[DistributedChildrenAsContent](../basic-component-mixins/docs/DistributedChildrenAsContent.md)</code> mixin.
<a name="DistributedChildrenAsContent+contentChanged"></a>
### slideshow.contentChanged()
Invoked when the contents of the component (including distributed
children) have changed.

This method is also invoked when a component is first instantiated; the
contents have essentially "changed" from being nothing. This allows the
component to perform initial processing of its children.

  **Kind**: instance method of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[DistributedChildrenAsContent](../basic-component-mixins/docs/DistributedChildrenAsContent.md)</code> mixin.
<a name="SingleSelection+itemAdded"></a>
### slideshow.itemAdded(item)
Handle a new item being added to the list.

The default implementation of this method simply sets the item's
selection state to false.

  **Kind**: instance method of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[SingleSelection](../basic-component-mixins/docs/SingleSelection.md)</code> mixin.

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

For more details, see the [FractionalSelection](FractionalSelection.md)
mixin.

  **Kind**: instance property of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[SelectionAnimation](../basic-component-mixins/docs/SelectionAnimation.md)</code> mixin.
<a name="SingleSelection+selectedIndex"></a>
### slideshow.selectedIndex : <code>number</code>
The index of the item which is currently selected.

If `selectionWraps` is false, the index is -1 if there is no selection.
In that case, setting the index to -1 will deselect any
currently-selected item.

  **Kind**: instance property of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[SingleSelection](../basic-component-mixins/docs/SingleSelection.md)</code> mixin.
<a name="SingleSelection+selectedItem"></a>
### slideshow.selectedItem : <code>object</code>
The currently selected item, or null if there is no selection.

Setting this property to null deselects any currently-selected item.

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
