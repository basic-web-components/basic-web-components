suite('basic', function() {

  this.timeout(2000);

  var container = document.getElementById('container');

  teardown(function() {
    container.innerHTML = '';
  });

  test('instantiation', function(done) {
    var fixture = document.createElement('lifecycle-tester');
    assert(fixture);
    assert(fixture.eventStack);
    assert(fixture.eventStack.length);
    assert.equal(fixture.eventStack.length, 3);
    assert.equal(fixture.eventStack[0], 'created');
    // BUGBUG - attributeChanged is called in polyfilled browsers after create and before ready, but
    // not in Chrome.
    assert(fixture.eventStack[1] == 'attributeChanged' || fixture.eventStack[1] == 'ready');
    assert(fixture.eventStack[2] == 'attributeChanged' || fixture.eventStack[2] == 'ready');
    /* Replace when polyfill behavior matches native
    assert.equal(fixture.eventStack[1], 'attributeChanged');
    assert.equal(fixture.eventStack[2], 'ready');
    */
    container.appendChild(fixture);
    flush(function() {
      assert.equal(fixture.eventStack.length, 4);
      assert.equal(fixture.eventStack[3], 'attached');
      container.innerHTML = '';
      flush(function() {
        assert.equal(fixture.eventStack.length, 5);
        assert.equal(fixture.eventStack[4], 'detached');
        done();
      });
    });
  });

  test('constructor - called after ready, before attached', function(done) {
    var eventStack = [];
    var onCreated = function() {
      console.log('onCreated');
      eventStack.push('onCreated');
      // Shouldn't ever be called
      assert(false);
    };
    var onReady = function() {
      console.log('onReady');
      eventStack.push('onReady');
      // Shouldn't ever be called
      assert(false);
    };
    var onAttached = function() {
      console.log('onAttached');
      eventStack.push('onAttached');
      assert.equal(eventStack.length, 1);
      assert.equal(eventStack[0], 'onAttached');
    };
    var onAttributeChanged = function() {
      console.log('onAttributeChanged');
      eventStack.push('onAttributeChanged');
      // Shouldn't ever be called
      assert(false);
    };
    var onDetached = function() {
      console.log('onDetached');
      eventStack.push('onDetached');
      assert.equal(eventStack.length, 2);
      assert.equal(eventStack[1], 'onDetached');
    };

    var fixture = new LifecycleTester(onCreated, onReady, onAttached, onAttributeChanged, onDetached);
    assert(fixture);
    assert(fixture.eventStack);
    assert(eventStack);
    assert.equal(fixture.eventStack.length, 0);
    assert.equal(eventStack.length, 0);

    container.appendChild(fixture);
    flush(function() {
      container.innerHTML = '';
      flush(function() {
        assert.equal(eventStack.length, 2);
        assert.equal(eventStack[1], 'onDetached');
        done();
      });
    });
  });

  test.skip('hold for web viewing', function(done) {
    assert(true);
  });

});

