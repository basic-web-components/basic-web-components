suite('BasicContentHelpers', function() {

  this.timeout(2000);

  var container = document.getElementById('container');

  teardown(function() {
    container.innerHTML = '';
  });

  test('basic setup', function(done) {
    var fixture = document.createElement('content-test-element');
    container.appendChild(fixture);
    done();
  });

  test('observe changes in textContent', function(done) {
    var fixture = document.createElement('content-test-element');
    fixture.contentChangedHook = function() {
      assert.equal(fixture.textContent, 'Hello');
      done();
    };
    container.appendChild(fixture);
    fixture.textContent = 'Hello';
  });

  test('observe changes in children', function(done) {
    var fixture = document.createElement('content-test-element');
    fixture.contentChangedHook = function() {
      assert.equal(fixture.children.length, 1);
      assert.equal(fixture.textContent, 'Hello');
      done();
    };
    container.appendChild(fixture);
    fixture.innerHTML = '<div>Hello</div';
  });

  test('specifying initial content triggers initial contentChanged', function(done) {
    var fixture = document.createElement('content-test-element');
    fixture.textContent = 'Hello';
    fixture.contentChangedHook = function() {
      assert.equal(fixture.textContent, 'Hello');
      done();
    };
    container.appendChild(fixture);
  });

  test('detaching an element stops it observing future content changes', function(done) {
    var fixture = document.createElement('content-test-element');
    fixture.contentChangedHook = function() {
      assert.equal(fixture.textContent, 'Hello');
      fixture.remove();
      done();
    };
    fixture.detatchedHook = function() {
      fixture.textContent = 'Goodbye';
    };
    container.appendChild(fixture);
    fixture.textContent = 'Hello';
  });

  test.skip('redistributed content triggers contentChanged', function(done) {
    var fixture = document.createElement('reproject-test');
    var nestedTestElement = fixture.$.nestedTestElement;
    container.appendChild(fixture);
    nestedTestElement.contentChangedHook = function() {
      assert.equal(fixture.textContent, 'Hello');
      done();
    };
    fixture.textContent = 'Hello';
  });

  test('observe changes in child attribute', function(done) {
    var fixture = document.createElement('content-test-element');
    var button = document.createElement('button');
    fixture.appendChild(button);
    container.appendChild(fixture);
    fixture.contentChangedHook = function() {
      assert.isTrue(button.disabled);
      done();
    };
    button.setAttribute('disabled', '');
  });

  test("ignore changes in element's own attributes", function(done) {
    var fixture = document.createElement('content-test-element');
    fixture.contentChangedHook = function() {
      // Shouldn't get invoked.
      done(new Error("The contentChanged handler was invoked, but shouldn't have been."));
    };
    container.appendChild(fixture);
    fixture.sampleAttribute = 'Hello';
    setTimeout(done);
  });

});
