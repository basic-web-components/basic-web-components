# API Documentation
<a name="AnimationStage"></a>

## AnimationStage ⇐ <code>ElementBase</code>
Presents a single item as selected, providing animated transitions when the
selection changes. The same animation can be shown at an arbitrary point,
generally used to reflet a user-controlled touch or trackpad drag operation
in progress.

[Live demo](http://basicwebcomponents.org/basic-web-components/packages/basic-animation-stage/)

This component is intended to be used as the rendering surface for components
like [basic-carousel](../basic-carousel), slideshows, etc., which want to
show transitional effects.

The component uses the [SelectionAnimation](../basic-component-mixins/docs/SelectionAnimation.md)
mixin, which in turn uses the Web Animations API. For use on browsers which
do not support that API natively, you will need to load the
[Web Animations polyfill](https://github.com/web-animations/web-animations-js).

For a simpler component that exhibits only a sliding effect, but does not
require the Web Animations API, see [basic-sliding-viewport](../basic-sliding-viewport).

  **Kind**: global class
**Extends:** <code>ElementBase</code>  
**Mixes**: <code>[ContentAsItems](../basic-component-mixins/docs/ContentAsItems.md)</code>
  , <code>[DirectionSelection](../basic-component-mixins/docs/DirectionSelection.md)</code>
  , <code>[DistributedChildrenAsContent](../basic-component-mixins/docs/DistributedChildrenAsContent.md)</code>
  , <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code>
  , <code>[ObserveContentChanges](../basic-component-mixins/docs/ObserveContentChanges.md)</code>
  , <code>[SelectionAnimation](../basic-component-mixins/docs/SelectionAnimation.md)</code>
  , <code>[SelectionAriaActive](../basic-component-mixins/docs/SelectionAriaActive.md)</code>
  , <code>[SwipeDirection](../basic-component-mixins/docs/SwipeDirection.md)</code>
  , <code>[TrackpadDirection](../basic-component-mixins/docs/TrackpadDirection.md)</code>
  

* [AnimationStage](#AnimationStage) ⇐ <code>ElementBase</code>
    * [.applySelection(item, selected)](#ContentAsItems+applySelection)
    * [.applySelection(item, selected)](#ItemsSelection+applySelection)
    * [.canSelectNext](#ItemsSelection+canSelectNext) : <code>boolean</code>
    * [.canSelectPrevious](#ItemsSelection+canSelectPrevious) : <code>boolean</code>
    * [.content](#DistributedChildrenAsContent+content) : <code>Array.&lt;HTMLElement&gt;</code>
    * ["content-changed"](#ObserveContentChanges.event_content-changed)
    * [.contentChanged()](#ObserveContentChanges+contentChanged)
    * [.goLeft()](#TrackpadDirection+goLeft)
    * [.goLeft()](#SwipeDirection+goLeft)
    * [.goRight()](#SwipeDirection+goRight)
    * [.goRight()](#TrackpadDirection+goRight)
    * [.itemAdded(item)](#ItemsSelection+itemAdded)
    * [.itemAdded(item)](#ContentAsItems+itemAdded)
    * [.items](#ContentAsItems+items) : <code>Array.&lt;HTMLElement&gt;</code>
    * ["items-changed"](#ContentAsItems.event_items-changed)
    * [.itemsChanged()](#ContentAsItems+itemsChanged)
    * ["selected-index-changed"](#ItemsSelection.event_selected-index-changed)
    * ["selected-item-changed"](#ItemsSelection.event_selected-item-changed)
    * [.selectedFraction](#SelectionAnimation+selectedFraction) : <code>number</code>
    * [.selectedIndex](#ItemsSelection+selectedIndex) : <code>number</code>
    * [.selectedItem](#ItemsSelection+selectedItem) : <code>object</code>
    * [.selectFirst()](#ItemsSelection+selectFirst)
    * [.selectionAnimationDuration](#SelectionAnimation+selectionAnimationDuration) : <code>integer</code>
    * [.selectionAnimationKeyframes](#SelectionAnimation+selectionAnimationKeyframes) : <code>Array.&lt;cssRules&gt;</code>
    * [.selectionRequired](#ItemsSelection+selectionRequired) : <code>boolean</code>
    * [.selectionWraps](#ItemsSelection+selectionWraps) : <code>boolean</code>
    * [.selectLast()](#ItemsSelection+selectLast)
    * [.selectNext()](#ItemsSelection+selectNext)
    * [.selectPrevious()](#ItemsSelection+selectPrevious)
    * [.showTransition](#SelectionAnimation+showTransition) : <code>boolean</code>
    * [.travelFraction](#SwipeDirection+travelFraction) : <code>number</code>
    * [.travelFraction](#TrackpadDirection+travelFraction) : <code>number</code>

<a name="ContentAsItems+applySelection"></a>

### animationStage.applySelection(item, selected)
Apply the selection state to a single item.

Invoke this method to signal that the selected state of the indicated item
has changed. By default, this applies a `selected` CSS class if the item
is selected, and removed it if not selected.

  **Kind**: instance method of <code>[AnimationStage](#AnimationStage)</code>. Defined by <code>[ContentAsItems](../basic-component-mixins/docs/ContentAsItems.md)</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| item | <code>HTMLElement</code> | The item whose selection state has changed. |
| selected | <code>boolean</code> | True if the item is selected, false if not. |

<a name="ItemsSelection+applySelection"></a>

### animationStage.applySelection(item, selected)
Apply the indicate selection state to the item.

The default implementation of this method does nothing. User-visible
effects will typically be handled by other mixins.

  **Kind**: instance method of <code>[AnimationStage](#AnimationStage)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| item | <code>HTMLElement</code> | the item being selected/deselected |
| selected | <code>boolean</code> | true if the item is selected, false if not |

<a name="ItemsSelection+canSelectNext"></a>

### animationStage.canSelectNext : <code>boolean</code>
True if the selection can be moved to the next item, false if not (the
selected item is the last item in the list).

  **Kind**: instance property of <code>[AnimationStage](#AnimationStage)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.
<a name="ItemsSelection+canSelectPrevious"></a>

### animationStage.canSelectPrevious : <code>boolean</code>
True if the selection can be moved to the previous item, false if not
(the selected item is the first one in the list).

  **Kind**: instance property of <code>[AnimationStage](#AnimationStage)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.
<a name="DistributedChildrenAsContent+content"></a>

### animationStage.content : <code>Array.&lt;HTMLElement&gt;</code>
The content of this component, defined to be the flattened array of
children distributed to the component.

  **Kind**: instance property of <code>[AnimationStage](#AnimationStage)</code>. Defined by <code>[DistributedChildrenAsContent](../basic-component-mixins/docs/DistributedChildrenAsContent.md)</code> mixin.
<a name="ObserveContentChanges.event_content-changed"></a>

### "content-changed"
This event is raised when the component's contents (including distributed
children) have changed.

  **Kind**: event emitted by <code>[AnimationStage](#AnimationStage)</code>. Defined by <code>[ObserveContentChanges](../basic-component-mixins/docs/ObserveContentChanges.md)</code> mixin.
<a name="ObserveContentChanges+contentChanged"></a>

### animationStage.contentChanged()
Invoked when the contents of the component (including distributed
children) have changed.

This method is also invoked when a component is first instantiated; the
contents have essentially "changed" from being nothing. This allows the
component to perform initial processing of its children.

  **Kind**: instance method of <code>[AnimationStage](#AnimationStage)</code>. Defined by <code>[ObserveContentChanges](../basic-component-mixins/docs/ObserveContentChanges.md)</code> mixin.
<a name="TrackpadDirection+goLeft"></a>

### animationStage.goLeft()
Invoked when the user wants to go/navigate left.
The default implementation of this method does nothing.

  **Kind**: instance method of <code>[AnimationStage](#AnimationStage)</code>. Defined by <code>[TrackpadDirection](../basic-component-mixins/docs/TrackpadDirection.md)</code> mixin.
<a name="SwipeDirection+goLeft"></a>

### animationStage.goLeft()
Invoked when the user wants to go/navigate left.
The default implementation of this method does nothing.

  **Kind**: instance method of <code>[AnimationStage](#AnimationStage)</code>. Defined by <code>[SwipeDirection](../basic-component-mixins/docs/SwipeDirection.md)</code> mixin.
<a name="SwipeDirection+goRight"></a>

### animationStage.goRight()
Invoked when the user wants to go/navigate right.
The default implementation of this method does nothing.

  **Kind**: instance method of <code>[AnimationStage](#AnimationStage)</code>. Defined by <code>[SwipeDirection](../basic-component-mixins/docs/SwipeDirection.md)</code> mixin.
<a name="TrackpadDirection+goRight"></a>

### animationStage.goRight()
Invoked when the user wants to go/navigate right.
The default implementation of this method does nothing.

  **Kind**: instance method of <code>[AnimationStage](#AnimationStage)</code>. Defined by <code>[TrackpadDirection](../basic-component-mixins/docs/TrackpadDirection.md)</code> mixin.
<a name="ItemsSelection+itemAdded"></a>

### animationStage.itemAdded(item)
Handle a new item being added to the list.

The default implementation of this method simply sets the item's
selection state to false.

  **Kind**: instance method of <code>[AnimationStage](#AnimationStage)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| item | <code>HTMLElement</code> | the item being added |

<a name="ContentAsItems+itemAdded"></a>

### animationStage.itemAdded(item)
This method is invoked whenever a new item is added to the list.

The default implementation of this method does nothing. You can override
this to perform per-item initialization.

  **Kind**: instance method of <code>[AnimationStage](#AnimationStage)</code>. Defined by <code>[ContentAsItems](../basic-component-mixins/docs/ContentAsItems.md)</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| item | <code>HTMLElement</code> | The item that was added. |

<a name="ContentAsItems+items"></a>

### animationStage.items : <code>Array.&lt;HTMLElement&gt;</code>
The current set of items in the list. See the top-level documentation for
mixin for a description of how items differ from plain content.

  **Kind**: instance property of <code>[AnimationStage](#AnimationStage)</code>. Defined by <code>[ContentAsItems](../basic-component-mixins/docs/ContentAsItems.md)</code> mixin.
<a name="ContentAsItems.event_items-changed"></a>

### "items-changed"
Fires when the items in the list change.

  **Kind**: event emitted by <code>[AnimationStage](#AnimationStage)</code>. Defined by <code>[ContentAsItems](../basic-component-mixins/docs/ContentAsItems.md)</code> mixin.
<a name="ContentAsItems+itemsChanged"></a>

### animationStage.itemsChanged()
This method is invoked when the underlying contents change. It is also
invoked on component initialization – since the items have "changed" from
being nothing.

  **Kind**: instance method of <code>[AnimationStage](#AnimationStage)</code>. Defined by <code>[ContentAsItems](../basic-component-mixins/docs/ContentAsItems.md)</code> mixin.
<a name="ItemsSelection.event_selected-index-changed"></a>

### "selected-index-changed"
Fires when the selectedIndex property changes.

  **Kind**: event emitted by <code>[AnimationStage](#AnimationStage)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| detail.selectedIndex | <code>number</code> | The new selected index. |

<a name="ItemsSelection.event_selected-item-changed"></a>

### "selected-item-changed"
Fires when the selectedItem property changes.

  **Kind**: event emitted by <code>[AnimationStage](#AnimationStage)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.

| Param | Type | Description |
| --- | --- | --- |
| detail.selectedItem | <code>HTMLElement</code> | The new selected item. |
| detail.previousItem | <code>HTMLElement</code> | The previously selected item. |

<a name="SelectionAnimation+selectedFraction"></a>

### animationStage.selectedFraction : <code>number</code>
A fractional value indicating how far the user has currently advanced to
the next/previous item. E.g., a `selectedFraction` of 3.5 indicates the
user is halfway between items 3 and 4.

For more details, see the [fractionalSelection](fractionalSelection.md)
helper functions.

  **Kind**: instance property of <code>[AnimationStage](#AnimationStage)</code>. Defined by <code>[SelectionAnimation](../basic-component-mixins/docs/SelectionAnimation.md)</code> mixin.
<a name="ItemsSelection+selectedIndex"></a>

### animationStage.selectedIndex : <code>number</code>
The index of the item which is currently selected.

If `selectionWraps` is false, the index is -1 if there is no selection.
In that case, setting the index to -1 will deselect any
currently-selected item.

  **Kind**: instance property of <code>[AnimationStage](#AnimationStage)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.
<a name="ItemsSelection+selectedItem"></a>

### animationStage.selectedItem : <code>object</code>
The currently selected item, or null if there is no selection.

Setting this property to null deselects any currently-selected item.

  **Kind**: instance property of <code>[AnimationStage](#AnimationStage)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.
<a name="ItemsSelection+selectFirst"></a>

### animationStage.selectFirst()
Select the first item in the list.

  **Kind**: instance method of <code>[AnimationStage](#AnimationStage)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.
<a name="SelectionAnimation+selectionAnimationDuration"></a>

### animationStage.selectionAnimationDuration : <code>integer</code>
The duration of a selection animation in milliseconds.

This measures the amount of time required for a selection animation to
complete. This number remains constant, even if the number of items being
animated increases.

The default value is 250 milliseconds (a quarter a second).

  **Kind**: instance property of <code>[AnimationStage](#AnimationStage)</code>. Defined by <code>[SelectionAnimation](../basic-component-mixins/docs/SelectionAnimation.md)</code> mixin.
**Default**: <code>250</code>  
<a name="SelectionAnimation+selectionAnimationKeyframes"></a>

### animationStage.selectionAnimationKeyframes : <code>Array.&lt;cssRules&gt;</code>
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

  **Kind**: instance property of <code>[AnimationStage](#AnimationStage)</code>. Defined by <code>[SelectionAnimation](../basic-component-mixins/docs/SelectionAnimation.md)</code> mixin.
<a name="ItemsSelection+selectionRequired"></a>

### animationStage.selectionRequired : <code>boolean</code>
True if the list should always have a selection (if it has items).

  **Kind**: instance property of <code>[AnimationStage](#AnimationStage)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.
<a name="ItemsSelection+selectionWraps"></a>

### animationStage.selectionWraps : <code>boolean</code>
True if selection navigations wrap from last to first, and vice versa.

  **Kind**: instance property of <code>[AnimationStage](#AnimationStage)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.
**Default**: <code>{false}</code>  
<a name="ItemsSelection+selectLast"></a>

### animationStage.selectLast()
Select the last item in the list.

  **Kind**: instance method of <code>[AnimationStage](#AnimationStage)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.
<a name="ItemsSelection+selectNext"></a>

### animationStage.selectNext()
Select the next item in the list.

  **Kind**: instance method of <code>[AnimationStage](#AnimationStage)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.
<a name="ItemsSelection+selectPrevious"></a>

### animationStage.selectPrevious()
Select the previous item in the list.

  **Kind**: instance method of <code>[AnimationStage](#AnimationStage)</code>. Defined by <code>[ItemsSelection](../basic-component-mixins/docs/ItemsSelection.md)</code> mixin.
<a name="SelectionAnimation+showTransition"></a>

### animationStage.showTransition : <code>boolean</code>
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

  **Kind**: instance property of <code>[AnimationStage](#AnimationStage)</code>. Defined by <code>[SelectionAnimation](../basic-component-mixins/docs/SelectionAnimation.md)</code> mixin.
<a name="SwipeDirection+travelFraction"></a>

### animationStage.travelFraction : <code>number</code>
The distance the first touchpoint has traveled since the beginning of a
drag, expressed as a fraction of the element's width.

  **Kind**: instance property of <code>[AnimationStage](#AnimationStage)</code>. Defined by <code>[SwipeDirection](../basic-component-mixins/docs/SwipeDirection.md)</code> mixin.
<a name="TrackpadDirection+travelFraction"></a>

### animationStage.travelFraction : <code>number</code>
The distance the user has moved the first touchpoint since the beginning
of a trackpad/wheel operation, expressed as a fraction of the element's
width.

  **Kind**: instance property of <code>[AnimationStage](#AnimationStage)</code>. Defined by <code>[TrackpadDirection](../basic-component-mixins/docs/TrackpadDirection.md)</code> mixin.
