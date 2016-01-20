This package implements common web component features as mixins. It uses mixins
to achieve the same results as a monolithic component framework, while
permitting more flexibility and a pay-as-you-go approach to complexity and
performance.

Design goals:

1. Have each web component mixins focus on solving a single, common task. They
   should be well-factored. They should be able to be used on their own, or in
   combination.
2. Introduce as few new concepts as possible. Any developer who understands the
   DOM API should find this architecture appealing, without having to learn many
   proprietary concepts (beyond mixins, see below).
3. Focus on native browser support for ES6 and web components. The architecture
   should be useful in a production application today, but should also feel
   correct in a future world in which native ES6 and web components are
   everywhere.


# Building

After cloning this repository:

    > npm install
    > grunt build


# Composing web component classes with mixins as functions

Web components can be expressed as compositions of base classes and mixins.
Mixins here are defined as a function that takes a base class and returns a
subclass defining the new features:

    let MyMixin = (base) => class MyMixin extends base {
      // Mixin defines properties and methods here.
    };

The mixins in this package take care to ensure that base class properties and
methods are not broken by the mixin. In particular, if a mixin wants to add a
new property or method, it also invokes the base class' property or method. To
do that consistently, these mixins follow standardized [Composition
Rules](Composition Rules.md). If you are interested in creating your own
component mixins, you may find it helpful to follow those guidelines to ensure
that your mixins can interoperate cleanly with the ones in this package.

A virtue of a functional mixin is that you do not need to use any library to
apply it. This increases the chance that mixins can be shared across projects.
If a common extension/mixin solution can be agreed upon, frameworks sharing that
solution gain a certain degree of code sharing, interoperability, and can share
conceptual materials. This reduces the learning curve for dealing with any one
framework.

Frameworks can still make their own decisions about which features they want to
offer by virtue of which mixins they incorporate into their base classes.


# Web component mixins

The /src folder includes mixins for common web component features:

* [AttributeMarshalling](src/AttributeMarshalling.js).
  Marshall element attributes to component properties (and eventually vice
  versa). This includes mapping hyphenated `foo-bar` attribute references to
  camelCase `fooBar` property names.
* [ChildrenAsContent](src/ChildrenContent.js).
  Defines a component's content as its children. Often used in conjunction with
  the ContentItems mixin.
* [ClickSelection](src/ClickSelection.js).
  Translates a click on a child element into a selection.
* [Collective](src/Collective.js).
  Not a mixin itself, this class is used by the CollectiveMember mixin to track
  the components that should be treated as a unit for keyboard purposes.
* [TargetToCollective](src/CollectiveMember.js).
  Lets a component participate in the collective management of keyboard focus
  and keyboard handling.
* [Composable](src/Composable.js).
  Facilitates the application of a set of mixins.
* [ContentFirstChildTarget](src/ContentFirstChildTarget.js).
  Allows a component to take its first child as a target it wants to augment in
  some way.
* [ContentAsItems](src/ContentItems.js).
  Lets a component treat its content as items in a list.
* [DirectionToSelection](src/DirectionSelection.js).
  Translates direction (up/down, left/right) semantics into selection semantics
  (select previous/next).
* [Generic](src/Generic.js).
  Lets a component easily disable standard, optional styling.
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
* [ObserveContentChanges](src/ObserveContentChanges.js).
  Wires up mutation observers to report any changes in a component's content
  (direct children, or nodes distributed to slots).
* [SelectionAriaActive](src/SelectionAriaActive.js).
  Treat the selected item in a list as the active item in ARIA accessibility
  terms.
* [SelectionHighlight](src/SelectionHighlight.js).
  Applies standard text highlight colors to the selected item in a list.
* [SelectionInView](src/SelectionScroll.js).
  Scrolls the component to keep the selected item in view.
* [ShadowElementReferences](src/ShadowElementReferences.js).
  Lets a component easily access elements in its Shadow DOM subtree.
* [ShadowTemplate](src/ShadowTemplate.js).
  Makes it easy for a component to define template content that should be cloned
  into a Shadow DOM subtree when the component is instantiated.
* [SwipeToDirection](src/SwipeDirection.js).
  Translates left/right touch swipe gestures into selection semantics.
* [TargetToSelection](src/TargetSelection.js).
  Allows a component to track and manage selection for a separate target
  element.
* [TimerToSelection](src/TimerSelection.js).
  Allows the selection to be updated on a timer.
* [TrackpadToDirection](src/TrackpadDirection.js).
  Translates trackpad swipes or horizontal mouse wheel drags into direction
  semantics.
* [composeTemplates](src/composeTemplates.js).
  Not a mixin, but a helper function for letting a component insert its template
  inside a template defined by a base class.


# Applying multiple mixins

Since web components often include many mixins, a helper mixin called Composable
provides syntactic sugar that allows multiple mixins to be applied in a single
call. Instead of defining an element like:

    class MyElement extends Mixin1(Mixin2(Mixin3(Mixin4(HTMLElement)))) {
      ...
    }

You can write:

    class MyElement extends Composable(HTMLElement).compose(
      Mixin1,
      Mixin2,
      Mixin3,
      Mixin4
    ) {
      ...
    }
