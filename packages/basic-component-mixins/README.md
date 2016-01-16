<a name="AttributeMarshalling"></a>
## AttributeMarshalling
Marshall attributes to properties (and eventually vice versa).
Only supports string properties for now.

**Kind**: global class  
<a name="AutomaticNodeFinding"></a>
## AutomaticNodeFinding
Mixin to support Polymer-style automatic node finding.

This adds a member on the component called `$` that can be used to reference
elements with IDs. E.g., if component's shadow contains an element
`<button id="foo">`, then this mixin will create a member `this.$.foo` that
points to that button. Such references simplify a component's access to its
own elements.

This trades off a one-time cost of querying all elements in the shadow tree
against having to query for an element each time the component wants to
inspect or manipulate it.

See https://www.polymer-project.org/1.0/docs/devguide/local-dom.html#node-finding.

**Kind**: global class  
<a name="ChildrenContent"></a>
## ChildrenContent
Mixin that defines a component's content as its children. Changes in the
content will be tracked, and a contentChanged method will be invoked on the
component when its children change.

**Kind**: global class  
<a name="ClickSelection"></a>
## ClickSelection
Mixin which maps a click (actually, a mousedown) to selection.

If the user clicks an element, and the element is an item in the list, then
the component's selectedIndex will be set to the index for that item.

**Kind**: global class  
<a name="Collective"></a>
## Collective
A group of elements that have been joined together for the purpose of
accomplishing some collective behavior, e.g., keyboard handling.

This isn't a mixin, but a class used by the CollectiveMember mixin.

**Kind**: global class  
<a name="CollectiveMember"></a>
## CollectiveMember
Mixin which allows a component to provide aggregate behavior with other
elements, e.g., for keyboard handling.

**Kind**: global class  
<a name="Composable"></a>
## Composable
Mixin to make a class more easily composable with other mixins.

The main contribution is the introduction of a `compose` method that applies
a set of mixin functions and returns the resulting new class. This sugar
can make the application of many mixins at once easier to read.

**Kind**: global class  
<a name="ContentFirstChildTarget"></a>
## ContentFirstChildTarget
Mixin that defines the target of a component -- the element the component is
managing or somehow responsible for -- as its first child.

**Kind**: global class  
<a name="ContentItems"></a>
## ContentItems
Mixin that maps content semantics (children) to list item semantics.

Items differ from children in several ways:

* They can be referenced via index.
* They can have a selection state.
* Auxiliary invisible child elements are filtered out and not counted as
  items. Auxiliary elements include link, script, style, and template
  elements.

**Kind**: global class  
<a name="DirectionSelection"></a>
## DirectionSelection
Mixin which maps direction semantics (goLeft, goRight, etc.) to selection
semantics (selectPrevious, selectNext, etc.).

**Kind**: global class  
<a name="Generic"></a>
## Generic
Mixin that allows a component to support a "generic" style: a minimalist
style that can easily be removed to reset its visual appearance to a baseline
state.

By default, a component should provide a minimal visual presentation that
allows the component to function. However, the more styling the component
provides by default, the harder it becomes to get the component to fit in
in other settings. Each CSS rule has to be overridden. Worse, new CSS rules
added to the default style won't be overridden by default, making it hard to
know whether a new version of a component will still look okay.

As a compromise, the simple Polymer behavior here defines a "generic"
attribute. This attribute is normally set by default, and styles can be
written that apply only when the generic attribute is set. This allows the
construction of CSS rules that will only apply to generic components like

    :host([generic=""]) {
      ...
    }

This makes it easy to remove all default styling -- set the generic attribute
to false, and all default styling will be removed.

**Kind**: global class  
<a name="ItemsAccessible"></a>
## ItemsAccessible
Mixin which manages ARIA roles for a component that wants to act as a list.

**Kind**: global class  
<a name="ItemsSelection"></a>
## ItemsSelection
Mixin which manages selection semantics for items in a list.

**Kind**: global class  
<a name="Keyboard"></a>
## Keyboard
Mixin which manages the keydown handling for a component.

TODO: Document collective behavior.
TODO: Provide baseline behavior outside of a collective.

**Kind**: global class  
<a name="KeyboardDirection"></a>
## KeyboardDirection
Mixin which maps direction keys (Left, Right, etc.) to direction semantics
(goLeft, goRight, etc.).

**Kind**: global class  
<a name="KeyboardPagedSelection"></a>
## KeyboardPagedSelection
Mixin which maps page keys (Page Up, Page Down) into operations that move
the selection by one page.

The keyboard interaction model generally follows that of Microsoft Windows'
list boxes instead of those in OS X:

* The Page Up/Down and Home/End keys actually change the selection, rather
  than just scrolling. The former behavior seems more generally useful for
  keyboard users.

* Pressing Page Up/Down will change the selection to the topmost/bottommost
  visible item if the selection is not already there. Thereafter, the key will
  move the selection up/down by a page, and (per the above point) make the
  selected item visible.

To ensure the selected item is in view following use of Page Up/Down, use the
related SelectionScroll mixin.

**Kind**: global class  
<a name="KeyboardPrefixSelection"></a>
## KeyboardPrefixSelection
Mixin that handles list box-style prefix typing, in which the user can type a
string to select the first item that begins with that string.

**Kind**: global class  
<a name="SelectionHighlight"></a>
## SelectionHighlight
Mixin which applies standard highlight colors to a selected item.

**Kind**: global class  
<a name="SelectionScroll"></a>
## SelectionScroll
Mixin which scrolls a container to keep the selected item visible.

**Kind**: global class  
<a name="SwipeDirection"></a>
## SwipeDirection
Mixin which maps touch gestures (swipe left, swipe right) to direction
semantics (goRight, goLeft).

**Kind**: global class  
<a name="TargetSelection"></a>
## TargetSelection
Mixin that allows a component to delegate its own selection semantics to a
target element. This is useful when defining components that act as
optional decorators for a component that acts like a list.

**Kind**: global class  
<a name="TemplateStamping"></a>
## TemplateStamping
Mixin for template stamping. If a component defines a template property (as a
string or referencing a HTML template), when the component class is
instantiated, a shadow root will be created on the instance, and the contents
of the template will be cloned into the shadow root.

For the time being, this extension retains support for Shadow DOM v0.
That will eventually be deprecated as browsers implement Shadow DOM v1.

**Kind**: global class  
<a name="TimerSelection"></a>
## TimerSelection
Mixin provides for automatic timed changes in selection, as in a
automated slideshow.

**Kind**: global class  
<a name="TrackpadDirection"></a>
## TrackpadDirection
Mixin which maps a horizontal trackpad swipe gestures (or horizontal mouse
wheel actions) to direction semantics.

To respond to the trackpad, we can listen to the DOM's "wheel" events. These
events are fired as the user drags their fingers across a trackpad.
Unfortunately, this scheme is missing a critical event — there is no event
when the user *stops* a gestured on the trackpad.

To complicate matters, the mainstream browsers continue to generate wheel
events even after the user has stopped dragging their fingers. These fake
events simulate the user gradually slowing down the drag until they come to a
smooth stop. In some contexts, these fake wheel events might be helpful, but
in trying to supply typical trackpad swipe navigation, these fake events get
in the way.

This component uses some heuristics to work around these problems, but the
complex nature of the problem make it extremely difficult to achieve the same
degree of trackpad responsiveness possible with native applications.

**Kind**: global class  
<a name="composeTemplates"></a>
## composeTemplates
Given two templates, "fold" one inside the other. For now, this just entails
putting the first inside the location of the first <content> node in the
second template.

Example: if the first (sub) template is

  <template>
    Hello, <slot></slot>.
  </template>

and the second (base) template is

  <template>
    <b>
      <slot></slot>
    </b>
  </template>

Then the returned folded template is

  <template>
    <b>
      Hello, <slot></slot>.
    </b>
  </template>

**Kind**: global class  
<a name="undefinedcontent"></a>
## undefinedcontent : <code>Array</code>
The flattened content of this component.

**Kind**: global variable  
**Properties**

| Name |
| --- |
| content | 

<a name="undefineditems"></a>
## undefineditems
The current set of items in the list.

**Kind**: global variable  
**Properties**

| Name | Type |
| --- | --- |
| items | <code>object</code> | 

<a name="undefinedgeneric"></a>
## undefinedgeneric : <code>Boolean</code>
True if the component would like to receive generic styling.

This property is true by default — set it to false to turn off all
generic styles. This makes it easier to apply custom styling; you won't
have to explicitly override styling you don't want.

**Kind**: global variable  
**Default**: <code>true</code>  
**Properties**

| Name |
| --- |
| generic | 

<a name="undefinedselectedIndex"></a>
## undefinedselectedIndex : <code>Number</code>
The index of the item which is currently selected, or -1 if there is no
selection.

**Kind**: global variable  
**Properties**

| Name |
| --- |
| selectedIndex | 

<a name="undefinedselectedItem"></a>
## undefinedselectedItem : <code>Object</code>
The currently selected item, or null if there is no selection.

**Kind**: global variable  
**Properties**

| Name |
| --- |
| selectedItem | 

<a name="undefinedselectionRequired"></a>
## undefinedselectionRequired : <code>Boolean</code>
True if the list should always have a selection (if it has items).

**Kind**: global variable  
**Properties**

| Name |
| --- |
| selectionRequired | 

<a name="undefinedscrollTarget"></a>
## undefinedscrollTarget
The element that should be scrolled with the Page Up/Down keys.
Default is the current element.

**Kind**: global variable  
**Properties**

| Name |
| --- |
| scrollTarget | 

<a name="undefinedscrollTarget"></a>
## undefinedscrollTarget
The element that should be scrolled with the Page Up/Down keys.
Default is the current element.

**Kind**: global variable  
**Properties**

| Name |
| --- |
| scrollTarget | 

<a name="undefinedposition"></a>
## undefinedposition : <code>Number</code>
The distance the user has moved the first touchpoint since the beginning
of a drag, expressed as a fraction of the element's width.

**Kind**: global variable  
**Properties**

| Name |
| --- |
| position | 

<a name="undefinedselectedIndex"></a>
## undefinedselectedIndex : <code>Number</code>
The index of the item which is currently selected, or -1 if there is no
selection.

**Kind**: global variable  
**Properties**

| Name |
| --- |
| selectedIndex | 

<a name="undefinedselectedItem"></a>
## undefinedselectedItem : <code>Object</code>
The currently selected item, or null if there is no selection.

**Kind**: global variable  
**Properties**

| Name |
| --- |
| selectedItem | 

<a name="undefinedplaying"></a>
## undefinedplaying : <code>Boolean</code>
True if the selection is being automatically advanced.

**Kind**: global variable  
**Properties**

| Name |
| --- |
| playing | 

<a name="undefinedcompose"></a>
## undefinedcompose()
Apply a set of mixin functions or mixin objects to the present class and
return the new class.

A call like

    let MyClass = Mixin1(Mixin2(Mixin3(Mixin4(Mixin5(BaseClass)))));

Can be converted to:

    let MyClass = Composable(BaseClass).compose(
      Mixin1,
      Mixin2,
      Mixin3,
      Mixin4,
      Mixin5
    );

This function can also take mixin objects. A mixin object is just a
shorthand for a mixin function that creates a new subclass with the given
members. The mixin object's members are *not* copied directly onto the
prototype of the base class, as with traditional mixins.

**Kind**: global function  
<a name="indexOfItem"></a>
## indexOfItem(item) ⇒ <code>number</code>
Returns the positional index for the indicated item.

Because this acts like a getter, this does not invoke a base implementation.

**Kind**: global function  
**Returns**: <code>number</code> - The index of the item, or -1 if not found.  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>object</code> | The item whose index is requested. |

<a name="selectFirst"></a>
## selectFirst()
Select the first item in the list.

**Kind**: global function  
<a name="selectLast"></a>
## selectLast()
Select the last item in the list.

**Kind**: global function  
<a name="selectNext"></a>
## selectNext()
Select the next item in the list.

**Kind**: global function  
<a name="selectPrevious"></a>
## selectPrevious()
Select the previous item in the list.

**Kind**: global function  
<a name="pageDown"></a>
## pageDown()
Scroll down one page.

**Kind**: global function  
<a name="pageUp"></a>
## pageUp()
Scroll up one page.

**Kind**: global function  
<a name="selectItemWithTextPrefix"></a>
## selectItemWithTextPrefix(prefix)
Select the first item whose text content begins with the given prefix.

**Kind**: global function  

| Param | Description |
| --- | --- |
| prefix | [String] The string to search for |

<a name="scrollItemIntoView"></a>
## scrollItemIntoView()
Scroll the given element completely into view, minimizing the degree of
scrolling performed.

Blink has a scrollIntoViewIfNeeded() function that almost the same thing,
but unfortunately it's non-standard, and in any event often ends up
scrolling more than is absolutely necessary.

**Kind**: global function  
<a name="play"></a>
## play()
Begin automatic progression of the selection.

**Kind**: global function  
<a name="pause"></a>
## pause()
Pause automatic progression of the selection.

**Kind**: global function  
<a name="event_items-changed"></a>
## "items-changed"
Fires when the items in the list change.

**Kind**: event emitted  
<a name="event_selected-item-changed"></a>
## "selected-item-changed"
Fires when the selectedItem property changes.

**Kind**: event emitted  

| Param | Description |
| --- | --- |
| detail.selectedItem | The new selected item. |
| detail.previousItem | The previously selected item. |

<a name="event_selected-item-changed"></a>
## "selected-item-changed"
Fires when the selectedIndex property changes.

**Kind**: event emitted  

| Param | Description |
| --- | --- |
| detail.selectedIndex | The new selected index. |

