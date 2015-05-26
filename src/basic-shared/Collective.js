/*
 * Collective: a collection of objects called aspects that can each contribute
 * properties and methods to the group.
 */

(function() {


function Collective() {
  this.aspects = [];
  this.methods = {};
  this.getters = {};
  this.setters = {};

  this.assimilate.apply(this, arguments);
}


Collective.prototype = {

  /*
   * Incorporate an aspect or another collective into this one.
   *
   * "Your technological distinctiveness will be added to our own.
   *  Resistance is futile."
   *
   * Assimilate any entities specified as arguments, from first to last.
   */
  assimilate: function() {

    var didCollectiveChange = false;
    var assimilated;

    for (var i in arguments) {

      var entity = arguments[i];
      if (entity instanceof Collective) {
        assimilated = this._assimilateCollective(entity);
      } else if (entity.collective) {
        // Entity is already part of another collective; assimilate that.
        assimilated = this._assimilateCollective(entity.collective);
      } else if (typeof entity === 'function') {
        // Assume entity is an aspect class; assimilate an instance.
        assimilated = this._assimilateAspect(new entity());
      }
      else {
        assimilated = this._assimilateAspect(entity);
      }

      didCollectiveChange = didCollectiveChange || assimilated;
    }

    if (didCollectiveChange) {
      this.invokeMethod('collectiveChanged');
    }
  },

  innerAspect: function(aspect) {
    var index = this.aspects.indexOf(aspect);
    var innerIndex = index + 1;
    return innerIndex < this.aspects.length ?
      this.aspects[innerIndex] :
      null;
  },

  get innermost() {
    return this.aspects[this.aspects.length - 1];
  },

  /* Return the innermost aspect which is actually attached. */
  get innermostAttached() {
    var aspects = this.aspects;
    for (i = aspects.length - 1; i >= 0; i--) {
      if (aspects[i].parentNode) {
        return aspects[i];
      }
    }
    return null;
  },

  /* Return the innermost aspect which is an element (attached or detached). */
  get innermostElement() {
    var aspects = this.aspects;
    for (i = aspects.length - 1; i >= 0; i--) {
      if (aspects[i] instanceof HTMLElement) {
        return aspects[i];
      }
    }
    return null;
  },

  invokeGetter: function(getterName) {
    var implementations = this.getters[getterName];
    if (implementations == null || implementations.length < 1) {
      // None of the aspects implement the requested getter.
      return undefined;
    }
    var getter = implementations[0];
    var result = getter();
    return result;
  },

  invokeMethod: function() {
    var args = [].slice.call(arguments);
    var methodName = args.shift(1);
    return this._invokeImplementations(this.methods[methodName], args);
  },

  invokeSetter: function(setterName, value) {
    return this._invokeImplementations(this.setters[setterName], [value]);
  },

  outerAspect: function(aspect) {
    var index = this.aspects.indexOf(aspect);
    var outerIndex = index - 1;
    return outerIndex >= 0 ?
      this.aspects[outerIndex] :
      null;
  },

  get outermost() {
    return this.aspects[0];
  },

  /* Return the outermost aspect which is actually attached. */
  get outermostAttached() {
    var aspects = this.aspects;
    for (i = 0, length = aspects.length; i < length; i++) {
      if (aspects[i].parentNode) {
        return aspects[i];
      }
    }
    return null;
  },

  /* Return the outermost aspect which is an element (attached or detached). */
  get outermostElement() {
    var aspects = this.aspects;
    for (i = 0, length = aspects.length; i < length; i++) {
      if (aspects[i] instanceof HTMLElement) {
        return aspects[i];
      }
    }
    return null;
  },

  _addCollectiveGetter: function(getterName) {
    // Because a collective getter only ever invokes the outermost
    // implementation, we can just apply that (bound) implementation to the
    // aspect we're modifying.
    var implementations = this.getters[getterName];
    var getter = implementations[0];
    Object.defineProperty(this, getterName, {
      configurable: true,
      get: getter
    });
  },

  _addCollectiveMethod: function(methodName) {
    // Gather all non-default implementations of the indicated method.
    var implementations = this.methods[methodName].filter(function(fn) {
      return !this._isDefaultMethod(fn);
    }.bind(this));
    this[methodName] = (implementations.length === 1) ?
      // Only one method implementation; use it directly.
      implementations[0] :
      // Multiple implementations; have collective broadcast method invocation.
      this.invokeMethod.bind(this, methodName);
  },

  _addCollectiveSetter: function(setterName) {
    var implementations = this.setters[setterName];
    var fn = (implementations.length === 1) ?
      // Only one setter implementation; use it directly.
      implementations[0] :
      // Multiple implementations; have collective broadcast setter invocation.
      this.invokeSetter.bind(this, setterName);
    Object.defineProperty(this, setterName, {
      configurable: true,
      set: fn
    });
  },

  // Add the values of the second object to the first.
  _addMembers: function(object1, object2) {
    for (var key in object2) {
      var array = object1[key] || [];
      object1[key] = array.concat(object2[key]);
    }
  },

  // Return the aspect with the given name key.
  _aspectWithName: function(name) {
    var aspects = this.aspects;
    for (i = 0, length = aspects.length; i < length; i++) {
      if (aspects[i].name === name) {
        return aspects[i];
      }
    }
    return null;
  },

  // Assimilate the indicated aspect.
  // Return true if the aspect was assimilated, false otherwise.
  _assimilateAspect: function(newAspect) {

    if (newAspect.collective === this) {
      // Already part of this collective.
      return false;
    }

    if (newAspect.name && this._aspectWithName(newAspect.name)) {
      // An aspect with the same name key is already in the collective.
      // The new aspect being passed in is likely a copy of the existing aspect,
      // so we ignore the attempt to assimilate it.
      return false;
    }

    // Extract the methods, getters, and setters contributed by the new aspect.
    var newMembers = this._getContributedMembers(newAspect);

    // Add the new aspect's members to the collectives internal sets.
    this._addMembers(this.methods, newMembers.methods);
    this._addMembers(this.getters, newMembers.getters);
    this._addMembers(this.setters, newMembers.setters);

    // Expose the new members on the collective itself.
    this._exposeCollectiveMembers(newMembers);

    // Add the new aspect to this collective.
    this.aspects.push(newAspect);
    newAspect.collective = this;

    return true;
  },

  // Assimilate the indicated collective.
  // Return true if the collective was assimilated, false otherwise.
  _assimilateCollective: function(target) {

    if (target === this) {
      // Attempting to assimilate the same collective has no effect.
      return false;
    }

    target.aspects.forEach(function(aspect) {
      this._assimilateAspect(aspect);
    }.bind(this));

    // Remove all aspects from the target collective; it should no longer be
    // used.
    // REVIEW: An alternative would be for the assimilated collective to forward
    // all method calls to the assimlating collective.
    target.aspects = [];

    return true;
  },

  // Expose the indicated members directly on this collective.
  _exposeCollectiveMembers: function(members) {

    // Add collective methods
    for (var methodName in members.methods) {
      this._addCollectiveMethod(methodName);
    }

    // Add collective getters
    for (var getterName in members.getters) {
      this._addCollectiveGetter(getterName);
    }

    // Add collective setters
    for (var setterName in members.setters) {
      this._addCollectiveSetter(setterName);
    }
  },

  _invokeImplementations: function(implementations, args) {

    if (!implementations) {
      return;
    }

    // Since all invocations share the same arguments, we can process them
    // before entering the loop.
    var hasArguments = (args && args.length > 0);
    if (hasArguments) {
      // The call to bind.apply below wants an argument list that includes a
      // "this" parameter at the start. We don't need that, because we're
      // dealing with a function that's already been bound to the aspect
      // defining the method. We appear to be able to use null as the "this"
      // parameter and still have the executed function use the desired
      // aspect (the one implementing the function) as "this".
      var bindingArgs = [null].concat(args);
    }

    // Execute all of the implementations.
    var result;
    for (var length = implementations.length, i = length - 1; i >= 0; i--) {
      var fn = implementations[i];
      if (hasArguments) {
        // Arguments were supplied, so rebind the function to the arguments.
        fn = Function.prototype.bind.apply(fn, bindingArgs);
      }
      result = fn();
    }

    // The result will come from the last implementation to run, which will be
    // the outermost implementation.
    return result;
  },

  _getContributedMembers: function(aspect) {
    var contribution = aspect.contribute || {};
    var methods = {};
    var getters = {};
    var setters = {};
    Object.getOwnPropertyNames(contribution).forEach(function(key) {
      var descriptor = Object.getOwnPropertyDescriptor(contribution, key);
      var fn;
      if (typeof descriptor.value === 'function') {
        // Method
        fn = this._isDefaultMethod(descriptor.value) ?
          descriptor.value : // Return default method as is
          descriptor.value.bind(aspect);
        methods[key] = methods[key] || [];
        methods[key].push(fn);
      }
      if (typeof descriptor.get === 'function') {
        // Getter
        fn = descriptor.get.bind(aspect);
        getters[key] = getters[key] || [];
        getters[key].push(fn);
      }
      if (typeof descriptor.set === 'function') {
        // Setter
        fn = descriptor.set.bind(aspect);
        setters[key] = setters[key] || [];
        setters[key].push(fn);
      }
    }.bind(this));
    return {
      methods: methods,
      getters: getters,
      setters: setters
    };
  },

  _isDefaultMethod: function(fn) {
    return !!fn._isDefaultMethod;
  }

};


// Aspects can use the following member to declare a function that will become
// a default implementation on the collective. This default implementation will
// be invoked if no other aspect in the collective defines that function.
// However, if another aspect in the collective *does* define that function,
// this default implementation (which does nothing) will not be invoked.
Collective.defaultMethod = function() {};
// We mark the default method so that we can identify it even if we're looking
// at a copy of it.
Collective.defaultMethod._isDefaultMethod = true;


window.Basic = window.Basic || {};
window.Basic.Collective = Collective;

})();
