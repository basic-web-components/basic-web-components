suite('basic-aspect', function() {

  var container = document.getElementById('container');

  teardown(function() {
    container.innerHTML = '';
  });

  test("basic-aspect on its own creates its own collective", function() {
    var aspect = document.createElement('aspect-one');
    var collective = aspect.collective;
    assert.isDefined(collective);
    assert.equal(collective.aspects.length, 1);
    assert.equal(collective.aspects[0], aspect);
  });

  test("one basic-aspect can assimilate another", function() {
    var aspect1 = document.createElement('aspect-one');
    var aspect2 = document.createElement('aspect-two');
    aspect1.assimilate(aspect2);
    var collective = aspect1.collective;
    assert.equal(collective, aspect2.collective);
    assert.equal(collective.aspects.length, 2);
    assert.equal(collective.aspects[0], aspect1);
    assert.equal(collective.aspects[1], aspect2);
  });

  test("can invoke collective method on a basic-aspect in a collective", function() {
    var aspect1 = document.createElement('aspect-one');
    var aspect2 = document.createElement('aspect-two');
    aspect1.assimilate(aspect2);

    results = [];
    var collective = aspect1.collective;
    collective.method('foo');
    assert.deepEqual(results, ['foo two', 'foo one']);
  });

  test("aspect can be applied to multiple classes without interference", function() {
    var aspect1 = document.createElement('aspect-one');
    var aspect2a = document.createElement('aspect-two');
    var aspect2b = document.createElement('aspect-two');
    aspect1.assimilate(aspect2a);

    // aspect2b should be unaffected by the above, and be the solo member of its
    // collective.
    assert.equal(aspect2b.collective.aspects.length, 1);
    assert.equal(aspect2b.collective.aspects[0], aspect2b);
  });

  test("aspect can assimilate a contained aspect during ready", function() {
    var outer = document.createElement('aspect-one-wrapper');
    var collective = outer.collective;
    assert.equal(collective.aspects.length, 2);
    var inner = outer.$.inner;
    assert.equal(collective.aspects[0], outer);
    assert.equal(collective.aspects[1], inner);
  });

  test("aspect with target='child' assimilates its aspect children", function() {
    var twoAspects = document.createElement('two-aspects');
    var outer = twoAspects.$.outer;
    var inner = twoAspects.$.inner;
    var collective = outer.collective;
    assert.equal(collective.aspects.length, 2);
    assert.equal(collective.aspects[0], outer);
    assert.equal(collective.aspects[1], inner);
  });

  test("aspect assimilates any behaviors which are aspects", function() {
    var component = document.createElement('component-with-behavior-aspect');
    assert.equal(component.collective.aspects.length, 2);
    assert.equal(component.collective.message, 'Hello');
  });
});
