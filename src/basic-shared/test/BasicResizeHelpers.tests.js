suite('BasicResizeHelpers', function() {

  this.timeout(2000);

  var container = document.getElementById('container');

  // Simulate a resize event.
  var simulateResize = function() {
    var event = new UIEvent('resize');
    window.dispatchEvent(event);
  };

  teardown(function() {
    container.innerHTML = '';
  });

  test('listenForResize should trigger initial call to resized handler', function(done) {
    var fixture = document.createElement('resize-test-element');
    container.appendChild(fixture);
    flush(function() {
      assert.equal(fixture.resizeCallCount, 1);
      done();
    });
  });

  test.skip('window resize event should trigger resized handler if element size changed', function(done) {
    var fixture = document.createElement('resize-test-element');
    container.appendChild(fixture);
    flush(function() {
      assert.equal(fixture.resizeCallCount, 1);
      // BUGBUG - with Polymer 0.8, the following no longer results in the element having a different size
      fixture.style.width = '50%';  // Force element to have a different size.
      fixture.resizeCallHook = function() {
        assert.equal(fixture.resizeCallCount, 2);
        done();
      };
      simulateResize(); // Should trigger resize
      simulateResize(); // Shouldn't trigger resize, since size won't have changed
    });
  });

});
