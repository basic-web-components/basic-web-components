/* Exported function extends a base class with Composable. */
export default (base) => {

  /**
   * Mixin to make a class more easily composable with other mixins.
   *
   * This mixin contributes a `compose` method that applies a set of mixin
   * functions and returns the resulting new class. This sugar can make the
   * application of many mixins at once easier to read.
   */
  class Composable extends base {

    /**
     * Apply a set of mixin functions or mixin objects to the present class and
     * return the new class.
     *
     * Instead of writing:
     *
     *     let MyClass = Mixin1(Mixin2(Mixin3(Mixin4(Mixin5(BaseClass)))));
     *
     * You can write:
     *
     *     let MyClass = Composable(BaseClass).compose(
     *       Mixin1,
     *       Mixin2,
     *       Mixin3,
     *       Mixin4,
     *       Mixin5
     *     );
     *
     * This function can also take mixin objects. A mixin object is just a
     * shorthand for a mixin function that creates a new subclass with the given
     * members. The mixin object's members are *not* copied directly onto the
     * prototype of the base class, as with traditional mixins.
     *
     * In addition to providing syntactic sugar, this mixin can be used to
     * define a class in ES5, which lacks ES6's `class` keyword.
     *
     * @param {...mixins} mixins - A set of mixin functions or objects to apply.
     */
    static compose(...mixins) {
      // We create a new subclass for each mixin in turn. The result becomes
      // the base class extended by any subsequent mixins. It turns out that
      // we can use Array.reduce() to concisely express this, using the current
      // object as the seed for reduce().
      return mixins.reduce(composeClass, this);
    }

  }

  return Composable;
};


// Properties defined by Object that we don't want to mixin.
const NON_MIXABLE_OBJECT_PROPERTIES = [
  'constructor'
];

/*
 * Apply the mixin to the given base class to return a new class.
 * The mixin can either be a function that returns the modified class, or a
 * plain object whose members will be copied to the new class' prototype.
 */
function composeClass(base, mixin) {
  if (typeof mixin === 'function') {
    // Mixin function
    return mixin(base);
  } else {
    // Mixin object
    class Subclass extends base {}
    copyOwnProperties(mixin, Subclass.prototype, NON_MIXABLE_OBJECT_PROPERTIES);
    return Subclass;
  }
}


/*
 * Copy the given properties/methods to the target.
 * Return the updated target.
 */
function copyOwnProperties(source, target, ignorePropertyNames = []) {
  Object.getOwnPropertyNames(source).forEach(name => {
    if (ignorePropertyNames.indexOf(name) < 0) {
      const descriptor = Object.getOwnPropertyDescriptor(source, name);
      Object.defineProperty(target, name, descriptor);
    }
  });
  return target;
}
