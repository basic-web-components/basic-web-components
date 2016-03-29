/* Exported function extends a base class with OrderedSuper. */
export default (base) => {

  /**
   * Mixin which supports specifying the order in which calls to super execute against mixins.
   * This mixin overrides the prototype chain order, allowing a class with mixins to specify
   * the order in which mixins implementing a particular method are called, where a mixin
   * implements a particular method.
   */
  class OrderedSuper extends base {

    /**
     * Replaces a call to super, where the call order of mixins implementing the
     * method may be called.
     */
    orderedSuper(arrayMixins, fnName, ...args) {
      arrayMixins.forEach(mixin => {
        walkChain(this, mixin, fnName, ...args);
      });
    }
  }

  return OrderedSuper;
};

function walkChain(obj, mixin, fnName, ...args) {
  let proto = Object.getPrototypeOf(obj);
  let callingProto = null;
  let nextProto = null;

  while (proto != null && (callingProto == null || nextProto == null)) {
    proto = Object.getPrototypeOf(proto);
    if (proto != null &&
      proto.constructor != null &&
      proto.constructor !== undefined) {

      if (proto.constructor.name === mixin) {
        callingProto = proto;
      }
      else if (callingProto != null && proto[fnName] != null && proto[fnName] !== undefined) {
        nextProto = proto;
      }
    }
  }

  let savedFn = null;
  if (nextProto) {
    savedFn = nextProto[fnName];
    nextProto[fnName] = function() {};
  }

  if (callingProto) {
    let fn = callingProto[fnName].bind(obj);
    fn(...args);
  }

  if (nextProto && savedFn) {
    nextProto[fnName] = savedFn;
  }
}