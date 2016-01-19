/**
 * @class Composable
 * @classdesc Mixin to make a class more easily composable with other mixins
 *
 * The main contribution is the introduction of a `compose` method that applies
 * a set of mixin functions and returns the resulting new class. This sugar
 * can make the application of many mixins at once easier to read.
 */


export default (base) => class Composable extends base {

  /**
   * Apply a set of mixin functions or mixin objects to the present class and
   * return the new class.
   *
   * A call like
   *
   *     let MyClass = Mixin1(Mixin2(Mixin3(Mixin4(Mixin5(BaseClass)))));
   *
   * Can be converted to:
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
   */
  static compose(...mixins) {
    // We create a new subclass for each mixin in turn. The result becomes
    // the base class extended by any subsequent mixins. It turns out that
    // we can use Array.reduce() to concisely express this, using the current
    // object as the seed for reduce().
    return mixins.reduce(composeClass, this);
  }

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
      let descriptor = Object.getOwnPropertyDescriptor(source, name);
      Object.defineProperty(target, name, descriptor);
    }
  });
  return target;
}
