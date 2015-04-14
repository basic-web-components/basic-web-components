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
    assert.equal(fixture.eventStack[1], 'attributeChanged');
    assert.equal(fixture.eventStack[2], 'ready');
    container.appendChild(fixture);
    flush(function() {
      assert.equal(fixture.eventStack.length, 4);
      assert.equal(fixture.eventStack[3], 'attached');
      container.innerHTML = '';
      flush(function() {
        assert.equal(fixture.eventStack.length, 5);
        assert.equal(fixture.eventStack[4], 'detached');
        done();
      })
    });
  });

  test('placeholder', function(done) {
    assert(true);
    done();
  });

});

