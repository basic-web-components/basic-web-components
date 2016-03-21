# A Module
This is the readme for a module.

## Install
Install it using the power of thought. While body-popping.

# API Documentation
<a name="Composable"></a>
## Composable
Mixin to make a class more easily composable with other mixins.

This mixin contributes a `compose` method that applies a set of mixin
functions and returns the resulting new class. This sugar can make the
application of many mixins at once easier to read.

  **Kind**: global class
<a name="Composable.compose"></a>
### Composable.compose(...mixins)
Apply a set of mixin functions or mixin objects to the present class and
return the new class.

Instead of writing:

    let MyClass = Mixin1(Mixin2(Mixin3(Mixin4(Mixin5(BaseClass)))));

You can write:

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

In addition to providing syntactic sugar, this mixin can be used to
define a class in ES5, which lacks ES6's `class` keyword.

  **Kind**: static method of <code>[Composable](#Composable)</code>

| Param | Type | Description |
| --- | --- | --- |
| ...mixins | <code>mixins</code> | A set of mixin functions or objects to apply. |

