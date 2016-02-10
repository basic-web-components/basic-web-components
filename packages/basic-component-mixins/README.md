# basic-component-mixins

Mixin library for creating web components in plain JavaScript (ES5 or ES6)

[![npm version](https://img.shields.io/npm/v/basic-component-mixins.svg?style=flat)](https://www.npmjs.com/package/basic-component-mixins)

This library implements common web component features as JavaScript mixins. It
is designed for people who would like to create web components in plain
JavaScript while avoiding much of the boilerplate that comes up in component
creation. The mixins permit flexibility and a pay-as-you-go approach to
complexity and performance.

Design goals:

1. **Focus each mixin on solving a single, common component task.**
   Each mixin should be useful on its own, or in combination.
2. **Introduce as few new concepts as possible.**
   A developer who understands the DOM API should be able to work with these
   mixins without having to substantially change the way they write code. They
   shouldn't have to learn many proprietary concepts beyond those listed below,
   chiefly the notion of defining a mixin as a function.
3. **Anticipate native browser support for ES6 and web components.**
   The architecture should be useful in an ES5 application today, but should
   also feel correct in a future world in which native ES6 and web components
   are everywhere.

All of the top-level Basic Web Components are constructed with these mixins. In
fact, by design, most of those components are little more than combinations of
mixins. That factoring allows you to create your own web components in the
likely event that your needs differ from those driving the design of the Basic
Web Components. You can use these mixins without using those components.


# Mixin concepts

## Mixins as functions

The mixins in this library all take the form of a function. Each function takes
a base class and returns a subclass defining the desired features:

    let MyMixin = (base) => class MyMixin extends base {
      // Mixin defines properties and methods here.
      greet() {
        return "Hello";
      }
    };

    class MyBaseClass {}
    let NewClass = MyMixin(MyBaseClass);

    let obj = new NewClass();
    obj.greet(); // "Hello"

Many JavaScript mixin implementations destructively modify a class prototype,
but mixins of the functional style shown above do not. Rather, functional mixins
extend the prototype chain and return a new class. Such functions have been
called "higher-order components", but we prefer the term "mixin" for brevity.

The mixins in this package take care to ensure that base class properties and
methods are not broken by the mixin. In particular, if a mixin wants to add a
new property or method, it also invokes the base class' property or method. To
do that consistently, these mixins follow standardized [Composition
Rules](Composition Rules.md). If you are interested in creating your own
component mixins, you may find it helpful to follow those guidelines to ensure
that your mixins can interoperate cleanly with the ones in this package.

A core virtue of a functional mixin is that you do not need to use any library
to apply it. This lets you use these mixins with any conventional means of
defining JavaScript classes — you don't have to invoke a proprietary class
factory, nor do you have to load a separate framework or runtime.

Because mixins define behavior through composition, you're not limited by the
constraints of a single-inheritance class hierarchy. That said, you can still
use a class hierarchy if you feel that's suitable for your application. For
example, you can compose a set of mixins to create a custom base class from
which your other classes derive. But the use of such a base class is not
dictated here.


## Semantic mixin factoring

In a number of areas, this package factors high-level component services into
mixins that work together to deliver the overall service. This is done to
increase flexibility.

For example, this library includes three mixins that work in concert. When
applied to a custom element, these mixins take care of mapping presses on
keyboard arrows (Left/Right) into selection actions (select previous/next).
They each take care of a different piece of the problem:

* The [Keyboard](docs/Keyboard.md) mixin wires up a single keydown listener on
  the component that can be shared by multiple mixins. When the component has
  the focus, a keypress will result in the invocation of a `keydown` method. By
  default, that method does nothing.
* The [KeyboardDirection](docs/KeyboardDirection.md) mixin maps keyboard
  semantics to direction semantics. It defines a `keydown` method that maps
  Left/Right arrow key presses into calls to methods `goLeft` and `goRight`,
  respectively. By default, those methods do nothing.
* The [DirectionSelection](docs/DirectionSelection.md) mixin maps direction
  semantics to selection semantics. It defines `goLeft` and `goRight` methods
  which respectively invoke methods `selectPrevious` and `selectNext`. Again, by
  default, those methods do nothing.

If all three mixins are applied to a component, then when the user presses, say,
the Right arrow key, the following sequence happens:

    (keyboard event) → keydown() → goRight() → selectNext()

Other mixins can map selection semantics to user-visible effects, such as
highlighting the selected item, ensure the selected item is in view, or do
something entirely new which you define.

Such factoring may initially feel overly complex, but permits a critical degree
of developer freedom. You might want to handle the keyboard a different way,
for example. Or you may want to create a component that handles arrow
keypresses for something other than selection, for example. Or you may want to
let the user manipulate the selection through other modalities, such as touch
gestures, mouse actions, speech commands, etc.

As one example of another mode of user input, the
[SwipeDirection](docs/SwipeDirection.md) mixin maps touch gestures to `goLeft`
and `goRight` method calls. It can therefore be used in combination with the
DirectionSelection mixin above, with the result that swipes will change the
selection:

    (touch event) → goRight() → selectNext()

The SwipeDirection and KeyboardDirection mixins are compatible, and can be
applied to the same component. Users of that component will be able to change
the selection with both touch gestures and the keyboard.

This factoring allows components with radically different presentations to
nevertheless share a considerable amount of user interface logic. For example,
the [basic-carousel](../packages/basic-carousel) and
[basic-list-box](packages/basic-list-box) components look very different, but
both make use of same mixins to support changing the selection with the
keyboard. In fact, nearly all of those components' behavior is defined through
shared mixins factored this way.


# Using the mixins to create web components

## Installation of the mixins package via npm

Add a `dependencies` key for `basic-component-mixins` in your project's
package.json file. Until native Shadow DOM support is available on all browsers
you want to support, you'll want to include the [webcomponents.js
polyfill](https://github.com/webcomponents/webcomponentsjs) as well:

    {
      ...
      "dependencies": {
        "basic-component-mixins": "^0.7",
        "webcomponents.js": "^0.7.2"
      },
    }

Then issue an `npm install` as usual.

A [sample-component](https://github.com/basic-web-components/sample-component)
project demonstrates the use of npm to depend on the basic-component-mixins
package. It shows the creation of a simple component in both ES6 and ES5.


## ES6

Your ES6 code can reference the mixin as a function exported by the
corresponding file in this package's /src folder. You then apply the mixin to
the element base class you'd like to use. This can be `HTMLElement`, or an
element class of your own creation.

As a very simple example, if you'd like to create a web component that puts the
word "Hello" before its tag contents, you can use the ShadowTemplate mixin. This
will look for a `template` property on the component, attach a new Shadow DOM
subtree to the component, then copy the template into the shadow subtree.

    import ShadowTemplate from 'basic-component-mixins/src/ShadowTemplate';

    // Create a simple custom element that supports a template.
    class GreetElement extends ShadowTemplate(HTMLElement) {
      get template() {
        return `
          Hello, <slot></slot>.
        `;
      }
    }

    // Register the custom element with the browser.
    document.registerElement('greet-element', GreetElement);

Compile this source with your favorite ES6 processor (e.g.,
[Babel](https://babeljs.org)), then load the result into a page.

    <html>
    <head>
      <script src="node_modules/webcomponents.js/webcomponents.js"></script>
      <script src="greet-element.js"></script>
    </head>
    <body>
      <!-- Hello, world. -->
      <greet-element>world</greet-element>
    </body>
    </html>


## ES5

This package's /dist folder contains a JavaScript file that defines all the
mixins as globals available via `window.Basic`. For example, the ShadowTemplate
mixin shown above is available as `window.Basic.ShadowTemplate`.

You can create your custom element class by hand:

    // greet-element.js

    var GreetElement = Basic.ShadowTemplate(HTMLElement);
    GreetElement.prototype.template = 'Hello, <slot></slot>.';

    document.registerElement('greet-element', GreetElement);

You can also use Composable mixin to create the class:

    // greet-element.js

    var GreetElement = Basic.Composable(HTMLElement).compose(
      Basic.ShadowTemplate,
      {
        template: 'Hello, <slot></slot>.'
      }
    );

    document.registerElement('greet-element', GreetElement);

Then load the script defining the element into your page:

    <html>
    <head>
      <script src="node_modules/webcomponents.js/webcomponents.js"></script>
      <script src="node_modules/basic-component-mixins/dist/basic-component-mixins.js"></script>
      <script src="greet-element.js"></script>
    </head>
    <body>
      <!-- Hello, world. -->
      <greet-element>world</greet-element>
    </body>
    </html>


# Web component mixins

The /src folder includes the complete set of mixins, each of which address some
common web component feature:

* [AttributeMarshalling](docs/AttributeMarshalling.md).
  Marshall element attributes to component properties (and eventually vice
  versa). This includes mapping hyphenated `foo-bar` attribute references to
  camelCase `fooBar` property names.
* [ClickSelection](docs/ClickSelection.md).
  Translates a click on a child element into a selection.
* [Collapsible](docs/Collapsible.md).
  Adds collapse/expand semantics.
* [Collective](docs/Collective.md).
  Not a mixin itself, this class is used by the CollectiveMember mixin to track
  the components that should be treated as a unit for keyboard purposes.
* [Composable](docs/Composable.md).
  Facilitates the application of a set of mixins.
* [composeTemplates](docs/composeTemplates.md).
  Not a mixin, but a helper function for letting a component insert its template
  inside a template defined by a base class.
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
