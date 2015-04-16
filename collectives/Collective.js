/*
 * Collective: a collection of objects called aspects that can each contribute
 * properties and methods to the group.
 */


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
    for (var i in arguments) {
      var entity = arguments[i];
      if (entity instanceof Collective) {
        this._assimilateCollective(entity);
      } else if (entity.collective) {
        // Entity is already part of another collective; assimilate that.
        this._assimilateCollective(entity.collective);
      } else if (typeof entity === 'function') {
        // Assume entity is an aspect class; assimilate an instance.
        this._assimilateAspect(new entity());
      }
      else {
        this._assimilateAspect(entity);
      }
    }
    this.invokeMethod('collectiveChanged');
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

  _addCollectiveGetterToAspect: function(aspect, getterName) {
    // Because a collective getter only ever invokes the outermost
    // implementation, we can just apply that (bound) implementation to the
    // aspect we're modifying.
    var implementations = this.getters[getterName];
    var getter = implementations[0];
    Object.defineProperty(aspect, getterName, {
      configurable: true,
      get: getter
    });
  },

  _addCollectiveMethodToAspect: function(aspect, methodName) {
    var implementations = this.methods[methodName];
    aspect[methodName] = (implementations.length === 1) ?
      // Only one method implementation; use it directly.
      implementations[0] :
      // Multiple implementations; have collective broadcast method invocation.
      this.invokeMethod.bind(this, methodName);
  },

  _addCollectiveSetterToAspect: function(aspect, setterName) {
    var implementations = this.setters[setterName];
    var fn = (implementations.length === 1) ?
      // Only one setter implementation; use it directly.
      implementations[0] :
      // Multiple implementations; have collective broadcast setter invocation.
      this.invokeSetter.bind(this, setterName);
    Object.defineProperty(aspect, setterName, {
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

  _applyMembersToAspect: function(members, aspect) {

    // TODO: Optimize for case in which the set of methods/getters/setters
    // contains only one function. That function can directly be applied to
    // the aspect, instead of having to be wrapped.

    // Add collective methods
    for (var methodName in members.methods) {
      this._addCollectiveMethodToAspect(aspect, methodName);
    }

    // Add collective getters
    for (var getterName in members.getters) {
      this._addCollectiveGetterToAspect(aspect, getterName);
    }

    // Add collective setters
    for (var setterName in members.setters) {
      this._addCollectiveSetterToAspect(aspect, setterName);
    }
  },

  // Assimilate the indicated aspect.
  _assimilateAspect: function(newAspect) {

    // Extract the methods, getters, and setters contributed by the new aspect.
    var newMembers = this._getContributedMembers(newAspect);

    // Add the newAspect's members to the collective.
    this._addMembers(this.methods, newMembers.methods);
    this._addMembers(this.getters, newMembers.getters);
    this._addMembers(this.setters, newMembers.setters);

    // Apply the new members to the existing aspects in the collective.
    for (var i = 0, length = this.aspects.length; i < length; i++) {
      this._applyMembersToAspect(newMembers, this.aspects[i]);
    }

    // Add the new aspect to this collective.
    this.aspects.push(newAspect);
    newAspect.collective = this;

    // Add all the collective's members to the new aspect.
    var collectiveMembers = {
      methods: this.methods,
      getters: this.getters,
      setters: this.setters
    };
    this._applyMembersToAspect(collectiveMembers, newAspect);

  },

  // Assimilate the indicated collective.
  _assimilateCollective: function(target) {
    target.aspects.forEach(function(aspect) {
      this._assimilateAspect(aspect);
    }.bind(this));

    // Remove all aspects from the target collective; it should no longer be
    // used.
    // REVIEW: An alternative would be for the assimilated collective to forward
    // all method calls to the assimlating collective.
    target.aspects = [];
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
        fn = descriptor.value.bind(aspect);
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
  }

};
