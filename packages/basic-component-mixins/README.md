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

* [AttributeMarshalling](docs/AttributeMarshalling.md).
  Marshall element attributes to component properties (and eventually vice
  versa). This includes mapping hyphenated `foo-bar` attribute references to
  camelCase `fooBar` property names.
* [ClickSelection](docs/ClickSelection.md).
  Translates a click on a child element into a selection.
* [Collective](docs/Collective.md).
  Not a mixin itself, this class is used by the CollectiveMember mixin to track
  the components that should be treated as a unit for keyboard purposes.
* [Composable](docs/Composable.md).
  Facilitates the application of a set of mixins.
* [ContentAsItems](docs/ContentAsItems.md).
  Lets a component treat its content as items in a list.
* [ContentFirstChildTarget](docs/ContentFirstChildTarget.md).
  Allows a component to take its first child as a target it wants to augment in
  some way.
* [DirectionToSelection](docs/DirectionSelection.md).
  Translates direction (up/down, left/right) semantics into selection semantics
  (select previous/next).
* [DistributedChildren](docs/DistributedChildren.md).
  Helpers to access the nodes distributed to a component as a flattened array
  or string.
* [DistributedChildrenAsContent](docs/DistributedChildrenAsContent.md).
  Defines a component's content as its (flattened, distributed) children.
  Typically used in conjunction with the DistributedChildren mixin.
* [Generic](docs/Generic.md).
  Lets a component easily disable standard, optional styling.
* [ItemsSelection](docs/ItemsSelection.md).
  Allows a set of items in a list to be selectable.
* [Keyboard](docs/Keyboard.md).
  Lets a component handle keyboard events. Includes support for collective
  keyboard handling.
* [KeyboardDirection](docs/KeyboardDirection.md).
  Translates directional keys (e.g., Up/Down) into direction semantics
  (up/down).
* [KeyboardPagedSelection](docs/KeyboardPagedSelection.md).
  Translates page keys (Page Up/Page Down) into selection semantics.
* [KeyboardPrefixSelection](docs/KeyboardPrefixSelection.md).
  Translates prefix typing into selection semantics. This allows, e.g., a list
  box to allow selection by typing the start of the desired list item.
* [ObserveContentChanges](docs/ObserveContentChanges.md).
  Wires up mutation observers to report any changes in a component's content
  (direct children, or nodes distributed to slots).
* [SelectionAriaActive](docs/SelectionAriaActive.md).
  Treat the selected item in a list as the active item in ARIA accessibility
  terms.
* [SelectionHighlight](docs/SelectionHighlight.md).
  Applies standard text highlight colors to the selected item in a list.
* [SelectionInView](docs/SelectionInView.md).
  Scrolls the component to keep the selected item in view.
* [ShadowElementReferences](docs/ShadowElementReferences.md).
  Lets a component easily access elements in its Shadow DOM subtree.
* [ShadowTemplate](docs/ShadowTemplate.md).
  Makes it easy for a component to define template content that should be cloned
  into a Shadow DOM subtree when the component is instantiated.
* [SwipeToDirection](docs/SwipeDirection.md).
  Translates left/right touch swipe gestures into selection semantics.
* [TargetInCollective](docs/TargetInCollective.md).
  Adds a component's target element (e.g., the component's first child) to
  the set of elements collectively handling the keyboard.
* [TargetSelection](docs/TargetSelection.md).
  Allows a component to track and manage selection for a separate target
  element.
* [TimerSelection](docs/TimerSelection.md).
  Allows the selection to be updated on a timer.
* [TrackpadDirection](docs/TrackpadDirection.md).
  Translates trackpad swipes or horizontal mouse wheel drags into direction
  semantics.
* [composeTemplates](docs/composeTemplates.md).
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
