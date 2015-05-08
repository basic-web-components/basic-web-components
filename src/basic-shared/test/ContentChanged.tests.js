suite('ContentHelpers and ContentChanged', function() {

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
      var firstChild = Polymer.dom(fixture).childNodes[0]
      assert.equal(firstChild.textContent, 'Hello');
      done();
    };
    container.appendChild(fixture);
    var text = new Text();
    text.textContent = 'Hello';
    Polymer.dom(fixture).appendChild(text);
  });

  test('observe changes in children', function(done) {
    var fixture = document.createElement('content-test-element');
    fixture.contentChangedHook = function() {
      var children = Polymer.dom(fixture).children;
      assert.equal(children.length, 1);
      assert.equal(children[0].textContent, 'Hello');
      done();
    };
    container.appendChild(fixture);
    var div = document.createElement('div');
    div.textContent = 'Hello';
    Polymer.dom(fixture).appendChild(div);
  });

  test('specifying initial content triggers initial contentChanged', function(done) {
    var fixture = document.createElement('content-test-element');
    var text = new Text();
    text.textContent = 'Hello';
    Polymer.dom(fixture).appendChild(text);
    fixture.contentChangedHook = function() {
      var text = Polymer.dom(fixture).childNodes[0];
      assert.equal(text.textContent, 'Hello');
      done();
    };
    container.appendChild(fixture);
  });

  test('detaching an element stops it observing future content changes', function(done) {
    var fixture = document.createElement('content-test-element');
    fixture.contentChangedHook = function() {
      var childNodes = Polymer.dom(fixture).childNodes;
      assert.equal(childNodes[0].textContent, 'Hello');
      fixture.remove();
      done();
    };
    fixture.detatchedHook = function() {
      fixture.textContent = 'Goodbye';
    };
    container.appendChild(fixture);
    var text = new Text();
    text.textContent = 'Hello';
    Polymer.dom(fixture).appendChild(text);
  });

  test('redistributed content triggers contentChanged', function(done) {
    var fixture = document.createElement('reproject-test');
    var nestedTestElement = fixture.$.nestedTestElement;
    container.appendChild(fixture);
    nestedTestElement.contentChangedHook = function() {
      var childNodes = Polymer.dom(fixture).childNodes;
      assert.equal(childNodes[0].textContent, 'Hello');
    };
    var text = new Text();
    text.textContent = 'Hello';
    Polymer.dom(fixture).appendChild(text);
    flush(function() {
      done();
    });
  });

  test('removing light dom nodes', function(done) {
    container.innerHTML = '<reproject-test><div>Div text</div>Plain text<button type=\'button\'>Button text</button></reproject-test>';
    var fixture = container.querySelector('reproject-test');
    flush(function() {
      var button = Polymer.dom(fixture).querySelector('button');
      assert(button);
      var div = Polymer.dom(fixture).querySelector('div');
      assert(div);
      Basic.ContentHelpers.removeLightDomNodes(fixture);
      button = Polymer.dom(fixture).querySelector('button');
      assert(!button);
      div = Polymer.dom(fixture).querySelector('div');
      assert(!div);
      done();
    });
  });

  test('modifying shadow does not trigger contentChanged', function(done) {
    var fixture = document.createElement('content-test-element');
    fixture.contentChangedHook = function() {
      var childNodes = Polymer.dom(fixture).childNodes;
      assert.equal(childNodes.length, 1);
      done();
    };
    container.appendChild(fixture);
    // Modify an element in the shadow, which shouldn't trigger contentChanged.
    // Since contentChanged uses MutationObservers, and those only monitor
    // light DOM content, this is not an issue on Shadow DOM. But on Shady DOM,
    // the Basic.ContentHelpers' mutation handler will need to filter out
    // mutations that occur in Shady DOM elements.
    fixture.$.static.textContent = "This should be ignored";
    flush(function() {
      // Now add an element to the light DOM, which we do expect to trigger
      // contentChanged.
      var text = new Text();
      text.textContent = 'Hello'
      Polymer.dom(fixture).appendChild(text);
    });
  });

  test.skip('observe changes in child attribute', function(done) {
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

  test.skip('ignore changes in element\'s own attributes', function(done) {
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
