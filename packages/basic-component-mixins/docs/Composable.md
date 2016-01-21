<a name="Composable"></a>
## Composable
Mixin to make a class more easily composable with other mixins

The main contribution is the introduction of a `compose` method that applies
a set of mixin functions and returns the resulting new class. This sugar
can make the application of many mixins at once easier to read.

**Kind**: global class  
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
