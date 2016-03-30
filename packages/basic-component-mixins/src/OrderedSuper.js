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
      this.methodNodes = {};
      walkChainAndCollectNodes(this, fnName);
      arrayMixins.forEach(mixin => {
        executeMethod(this, mixin, fnName, ...args);
      });
    }
  }

  return OrderedSuper;
};

function executeMethod(obj, mixinName, fnName, ...args) {
  let methodNode = obj.methodNodes[mixinName];
  if (methodNode == null) {
    return;
  }

  let hasProtoNext = methodNode.protoNext != null;
  let savedFn = null;
  if (hasProtoNext) {
    savedFn = methodNode.protoNext[fnName];
    methodNode.protoNext[fnName] = function() {};
  }

  let fn = methodNode.proto[fnName].bind(obj);
  fn(...args);

  if (hasProtoNext) {
    methodNode.protoNext[fnName] = savedFn;
  }
}

function walkChainAndCollectNodes(obj, fnName) {
  let proto = Object.getPrototypeOf(obj);
  let methodNodePrev = null;

  while (proto != null) {
    proto = Object.getPrototypeOf(proto);
    if (proto != null &&
      proto.constructor != null &&
      proto.constructor !== undefined &&
      proto[fnName] != null &&
      proto[fnName] !== undefined) {

      let methodNodeCurrent = obj.methodNodes[proto.constructor.name] = {
        proto: proto,
        protoNext: null
      };

      if (methodNodePrev) {
        methodNodePrev.protoNext = proto;
      }
      methodNodePrev = methodNodeCurrent;
    }
  }
}