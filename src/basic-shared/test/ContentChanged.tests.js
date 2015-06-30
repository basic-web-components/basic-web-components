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
      assert.equal(Polymer.dom(fixture).textContent, 'Hello');
      done();
    };
    container.appendChild(fixture);
    flush(function() {
      Polymer.dom(fixture).textContent = 'Hello';
    });
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
    flush(function() {
      var div = document.createElement('div');
      div.textContent = 'Hello';
      Polymer.dom(fixture).appendChild(div);
    });
  });

  test('specifying initial content triggers initial contentChanged', function(done) {
    var fixture = document.createElement('content-test-element');
    Polymer.dom(fixture).textContent = 'Hello';
    fixture.contentChangedHook = function() {
      assert.equal(Polymer.dom(fixture).textContent, 'Hello');
      done();
    };
    flush(function() {
      container.appendChild(fixture);
    });
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
    Polymer.dom(fixture).textContent = 'Hello';
  });

  test('redistributed content triggers contentChanged', function(done) {
    var fixture = document.createElement('reproject-test');
    var nestedTestElement = fixture.$.nestedTestElement;
    container.appendChild(fixture);
    nestedTestElement.contentChangedHook = function() {
      var childNodes = Polymer.dom(fixture).childNodes;
      assert.equal(childNodes[0].textContent, 'Hello');
    };
    Polymer.dom(fixture).textContent = 'Hello';
    flush(function() {
      done();
    });
  });

  test('adding node to shadow does not trigger contentChanged', function(done) {
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
      Polymer.dom(fixture).textContent = 'Hello';
    });
  });

  test('removing node from shadow does not trigger contentChanged', function(done) {
    var fixture = document.createElement('content-test-element');
    fixture.contentChangedHook = function() {
      var childNodes = Polymer.dom(fixture).childNodes;
      assert.equal(childNodes.length, 1);
      done();
    };
    container.appendChild(fixture);
    flush(function() {
      // Remove an element from the shadow, which shouldn't trigger contentChanged.
      fixture.$.static.remove();
      flush(function() {
        // Now add an element to the light DOM, which we do expect to trigger
        // contentChanged.
        Polymer.dom(fixture).textContent = 'Hello';
      });
    });
  });

  test('removing node from light DOM *does* trigger contentChanged', function(done) {
    var fixture = document.createElement('content-test-element');
    var div = document.createElement('div');
    div.textContent = 'div';
    Polymer.dom(fixture).appendChild(div);
    container.appendChild(fixture);
    flush(function() {
      fixture.contentChangedHook = function() {
        var childNodes = Polymer.dom(fixture).childNodes;
        assert.equal(childNodes.length, 0);
        done();
      };
      // Remove a light DOM child, which should trigger contentChanged.
      Polymer.dom(fixture).removeChild(div);
    });
  });

  test("by default, don't observe changes in subtree", function(done) {
    var fixture = document.createElement('content-test-element');
    var state = 1;
    var child = document.createElement('div');
    Polymer.dom(fixture).appendChild(child);
    fixture.contentChangedHook = function() {
      // This handler should only get invoked when the first child is added,
      // and then again when the sibling child is added.
      assert.isTrue(state === 1 || state === 3);
      if (state === 3) {
        done();
      }
    };
    container.appendChild(fixture);
    flush(function() {
      // Adding grandchild should have no effect.
      state = 2;
      var grandchild = document.createElement('span');
      Polymer.dom(child).appendChild(grandchild);
      flush(function() {
        // Adding a sibling child should have an effect.
        state = 3;
        var sibling = document.createElement('p');
        Polymer.dom(fixture).appendChild(sibling);
      });
    });
  });

  test("opt into observing changes in subtree", function(done) {
    var fixture = document.createElement('content-test-element');
    fixture.contentChangedOptions = {
      characterData: true,
      childList: true,
      subtree: true // Default is false
    };
    var child = document.createElement('div');
    Polymer.dom(fixture).appendChild(child);
    container.appendChild(fixture);
    flush(function() {
      fixture.contentChangedHook = function() {
        var children = Polymer.dom(fixture).children;
        var grandchildren = Polymer.dom(children[0]).children;
        assert.equal(grandchildren.length, 1);
        done();
      };
      // Adding grandchild should be detected.
      var grandchild = document.createElement('span');
      Polymer.dom(child).appendChild(grandchild);
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
