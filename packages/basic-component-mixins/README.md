# Mixins

This package includes the following mixins:

* [AttributeMarshalling](src/AttributeMarshalling.js).
  Marshall element attributes to component properties (and eventually vice versa).
* [AutomaticNodeFinding](src/AutomaticNodeFinding.js).
  Lets a component easily access elements in its Shadow DOM subtree.
* [ChildrenContent](src/ChildrenContent.js).
  Defines a component's content as its children. Often used in conjunction with
  the ContentItems mixin.
* [ClickSelection](src/ClickSelection.js).
  Translates a click on a child element into a selection.
* [Collective](src/Collective.js).
  Not a mixin itself, this class is used by the CollectiveMember mixin to track
  the components that should be treated as a unit for keyboard purposes.
* [CollectiveMember](src/CollectiveMember.js).
  Lets a component participate in the collective management of keyboard focus
  and keyboard handling.
* [Composable](src/Composable.js).
  Facilitates the application of a set of mixins.
* [ContentFirstChildTarget](src/ContentFirstChildTarget.js).
  Allows a component to take its first child as a target it wants to augment in
  some way.
* [ContentItems](src/ContentItems.js).
  Lets a component treat its content as items in a list.
* [DirectionSelection](src/DirectionSelection.js).
  Translates direction (up/down, left/right) semantics into selection semantics
  (select previous/next).
* [Generic](src/Generic.js).
  Lets a component easily disable standard, optional styling.
* [ItemsAccessible](src/ItemsAccessible.js).
  Makes the items in a list accessible via ARIA.
* [ItemsSelection](src/ItemsSelection.js).
  Allows a set of items in a list to be selectable.
* [Keyboard](src/Keyboard.js).
  Lets a component handle keyboard events. Includes support for collective
  keyboard handling.
* [KeyboardDirection](src/KeyboardDirection.js).
  Translates directional keys (e.g., Up/Down) into direction semantics
  (up/down).
* [KeyboardPagedSelection](src/KeyboardPagedSelection.js).
  Translates page keys (Page Up/Page Down) into selection semantics.
* [KeyboardPrefixSelection](src/KeyboardPrefixSelection.js).
  Translates prefix typing into selection semantics. This allows, e.g., a list
  box to allow selection by typing the start of the desired list item.
* [SelectionHighlight](src/SelectionHighlight.js).
  Applies standard text highlight colors to the selected item in a list.
* [SelectionScroll](src/SelectionScroll.js).
  Scrolls the component to keep the selected item in view.
* [SwipeDirection](src/SwipeDirection.js).
  Translates left/right touch swipe gestures into selection semantics.
* [TargetSelection](src/TargetSelection.js).
  Allows a component to track and manage selection for a separate target
  element.
* [TemplateStamping](src/TemplateStamping.js).
  Makes it easy for a component to define template content that should be cloned
  into a Shadow DOM subtree when the component is instantiated.
* [TimerSelection](src/TimerSelection.js).
  Allows the selection to be updated on a timer.
* [TrackpadDirection](src/TrackpadDirection.js).
  Translates trackpad swipes or horizontal mouse wheel drags into direction
  semantics.
* [composeTemplates](src/composeTemplates.js).
  Not a mixin, but a helper function for letting a component insert its template
  inside a template defined by a base class.
