suite('Collective', function() {

  test("new Basic.Collective has no aspects or member functions", function() {
    var collective = new Basic.Collective();
    assert.equal(collective.aspects.length, 0);
  });

  test("assimilate aspect that doesn't yet belong to a collective", function() {
    var collective = new Basic.Collective();
    var aspect = {
      contribute: {
        method: function() {}
      }
    };
    collective.assimilate(aspect);

    // Collective should contain just this aspect.
    assert.equal(collective.aspects.length, 1);
    assert.equal(collective.aspects[0], aspect);

    // Aspect should now declare itself to be part of this collective.
    assert.equal(aspect.collective, collective);
  });

  test("Collective constructor accepts a set of entities to assimilate", function() {
    var aspect1 = {};
    var aspect2 = {};
    var collective = new Basic.Collective(aspect1, aspect2);
    assert.equal(collective.aspects.length, 2);
    assert.equal(collective.aspects[0], aspect1);
    assert.equal(collective.aspects[1], aspect2);
    assert.equal(aspect1.collective, collective);
    assert.equal(aspect2.collective, collective);
  });

  test("assimilate collective", function() {
    var aspect1 = {};
    var collective1 = new Basic.Collective(aspect1);
    var aspect2 = {};
    var collective2 = new Basic.Collective(aspect2);
    collective1.assimilate(collective2);
    assert.equal(collective1.aspects.length, 2);
    assert.equal(collective1.aspects[0], aspect1);
    assert.equal(collective1.aspects[1], aspect2);
    assert.equal(aspect1.collective, collective1);
    assert.equal(aspect2.collective, collective1);
    assert.equal(collective2.aspects.length, 0);
  });

  test("assimilate aspect that already belongs to a collective", function() {
    var aspect1 = {};
    var collective1 = new Basic.Collective(aspect1);
    var aspect2 = {};
    var collective2 = new Basic.Collective(aspect2);
    collective1.assimilate(aspect2);
    assert.equal(collective1.aspects.length, 2);
    assert.equal(collective1.aspects[0], aspect1);
    assert.equal(collective1.aspects[1], aspect2);
    assert.equal(aspect1.collective, collective1);
    assert.equal(aspect2.collective, collective1);
    assert.equal(collective2.aspects.length, 0);
  });

  test("assimilating aspect that's already in the same collective has no effect", function() {
    var aspect = {};
    var collective = new Basic.Collective(aspect);
    assert.equal(collective.aspects.length, 1);
    collective.assimilate(aspect);
    assert.equal(collective.aspects.length, 1);
  });

  test("collective methods are union of assimilated aspect methods", function() {
    var aspect1 = {
      contribute: {
        foo: function() {},
        // Doesn't implement bar.
        bletch: function() {}
      }
    };
    var aspect2 = {
      contribute: {
        // Doesn't implement foo.
        bar: function() {},
        bletch: function() {}
      }
    };
    var collective = new Basic.Collective(aspect1, aspect2);
    var methods = collective.methods;
    assert.equal(methods.foo.length, 1);
    assert.equal(methods.bar.length, 1);
    assert.equal(methods.bletch.length, 2);
  });

  test("collective method executes that method on all aspects that have it", function() {
    var results = [];
    var aspect1 = {
      contribute: {
        method: function(arg) {
          results.push('outermost ' + arg);
        }
      }
    };
    var aspect2 = {
      contribute: {
        // Does not implement method in question.
      }
    };
    var aspect3 = {
      contribute: {
        method: function(arg) {
          results.push('innermost ' + arg);
        }
      }
    };
    var collective = new Basic.Collective(aspect1, aspect2, aspect3);
    assert.equal(collective.methods.method.length, 2);

    collective.invokeMethod('method', ['foo']);
    assert.equal(results.length, 2);
    assert.equal(results[0], 'innermost foo');
    assert.equal(results[1], 'outermost foo');
  });

  test("aspect's collectiveChanged handler invoked when collective changes", function() {
    var count = 0;
    var aspect = {
      contribute: {
        collectiveChanged: function() {
          count++;
        }
      }
    };
    var collective1 = new Basic.Collective(aspect);
    assert.equal(count, 1);
    var collective2 = new Basic.Collective(collective1);
    assert.equal(count, 2);
  });

  test("collective decorates itself with all the collective's methods", function() {
    var aspect1 = {
      contribute: {
        getName: function(arg) {
          return this.name + ' ' + arg;
        }
      },
      name: 'aspect1'
    };
    var aspect2 = {
      contribute: {
        // Does not implement getName.
      },
      name: 'aspect2'
    };
    var collective = new Basic.Collective(aspect1, aspect2);
    assert.equal(collective.getName('foo'), 'aspect1 foo');
  });

  test("collective getter invokes outermost aspect with that getter", function() {
    var aspect1 = {
      contribute: {
        get value() {
          return 1;
        }
      }
    };
    var aspect2 = {
      contribute: {
        get value() {
          return 2;
        }
      }
    };
    var collective = new Basic.Collective(aspect1, aspect2);

    assert.equal(collective.getters.value.length, 2);

    // Only outermost getter is invoked, so we get 1 instead of 2.
    assert.equal(collective.value, 1);
  });

  test("collective setter invoke setters on all aspects that have it", function() {
    var aspect1 = {
      contribute: {
        set value(arg) {
          results.push('outer ' + arg);
        }
      }
    };
    var aspect2 = {
      contribute: {
        set value(arg) {
          results.push('inner ' + arg)
        }
      }
    };
    var collective = new Basic.Collective(aspect1, aspect2);

    var setters = collective.setters;
    assert.equal(setters.value.length, 2);

    var results = [];
    collective.value = 'foo';
    assert.deepEqual(results, ['inner foo', 'outer foo']);
  });

  test("assimilating a class assimilates an instance of that class", function() {
    var aspectClass = function() {};
    var collective = new Basic.Collective(aspectClass);
    assert.isUndefined(aspectClass.collective);
    var aspect = collective.aspects[0];
    assert.instanceOf(aspect, aspectClass);
  });

  test("don't assimilate an aspect if one with the same 'name' key has already been assimilated", function() {
    var aspect1 = {
      name: 'Sample'
    };
    var aspect2 = {
      name: 'Sample' // Same as above
    };
    var collective = new Basic.Collective(aspect1, aspect2);
    assert.equal(collective.aspects.length, 1);
  });

});
