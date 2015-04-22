suite('basic', function() {

  this.timeout(2000);

  var container = document.getElementById('container');

  function setInnerHTML(elem, text) {
    var textNode = document.createTextNode(text);
    var children = Polymer.dom(elem).childNodes;
    for (var i = 0; i < children.length; i++) {
      Polymer.dom(elem).removeChild(children[i]);
    }
    Polymer.dom(elem).appendChild(textNode);
  }

  teardown(function() {
    container.innerHTML = '';
  });

  test('instantiation', function(done) {
    var fixture = document.createElement('basic-autosize-textarea');
    container.appendChild(fixture);
    flush(function() {
      assert(fixture);
      done();
    });
  });

  test('innerHTML becomes value', function(done) {
    container.innerHTML = '<basic-autosize-textarea>Hello</basic-autosize-textarea>';
    var fixture = container.querySelector('basic-autosize-textarea');
    if (fixture.value) {
      // Native Shadow DOM
      assert.equal(fixture.value, 'Hello');
      done();
    } else {
      // Shady DOM -- need to wait for value to be set.
      // Note that this is technically a race condition with the event listener
      // added after setting container.innerHTML. That this works depends on
      // shady DOM implementation details. Revisit.
      fixture.addEventListener('value-changed', function() {
        assert.equal(fixture.value, 'Hello');
        done();
      })
    }
  });

  test('default minimumRows', function(done) {
    var fixture = document.createElement('basic-autosize-textarea');
    container.appendChild(fixture);
    flush(function() {
      assert.equal(fixture.minimumRows, 1);
      done();
    });
  });

  test('set minimumRows', function(done) {
    var fixture = document.createElement('basic-autosize-textarea');
    container.appendChild(fixture);
    fixture.minimumRows = 10;
    flush(function() {
      assert.equal(fixture.minimumRows, 10);
      done();
    });
  });

  // BUGBUG - skip this test for now. We need to set up our MutationObserver
  // in BasicContentHelpers not to fire contentChanged events for local DOM
  // changes under shady DOM.
  test.skip('value', function(done) {
    var fixture = document.createElement('basic-autosize-textarea');
    container.appendChild(fixture);
    fixture.value = 'Hello, world';
    flush(function() {
      assert.equal(fixture.value, "Hello, world");
      assert(fixture.$.textBox.clientHeight > 1);
      done();
    })
  });

  test('minimumRows can make element taller than required to fit content', function(done) {
    var fixture = document.createElement('basic-autosize-textarea');
    var fixtureComp = document.createElement('basic-autosize-textarea');
    container.appendChild(fixture);
    container.appendChild(fixtureComp);
    fixture.minimumRows = 10;
    setInnerHTML(fixture, 'Hello, world');
    flush(function() {
      // Confirm minimumRows can make the element taller than is required just to fit the content
      assert.equal(fixture.minimumRows, 10);
      assert.equal(fixture.value, 'Hello, world');
      assert(fixture.$.textBox.clientHeight > 2 * fixtureComp.$.textBox.clientHeight);
      done();
    });
  });

  test('value changes', function(done) {
    var fixture = document.createElement('basic-autosize-textarea');
    container.appendChild(fixture);
    var content = 'Hello, world';
    setInnerHTML(fixture, content);
    flush(function() {
      assert.equal(fixture.value, content);
      assert(fixture.$.textBox.clientHeight > 1);
      var newContent = "Changed content";
      setInnerHTML(fixture, newContent);
      flush(function() {
        assert.equal(fixture.value, newContent);
        assert(fixture.$.textBox.clientHeight > 1);
        done();
      });
    });
  });

  test('autosize works when content is HTML', function(done) {
    var fixture = document.createElement('basic-autosize-textarea');
    var fixtureComp = document.createElement('basic-autosize-textarea');
    container.appendChild(fixture);
    container.appendChild(fixtureComp);
    // Confirm autosize works when content is HTML
    var html = '<html>\n<body>\n<p>\nThis is a test\n</p>\n<div>\nSome more tests\n</div>\n</body>\n</html>';
    setInnerHTML(fixture, html);
    flush(function() {
      assert(fixture.$.textBox.clientHeight > 2 * fixtureComp.$.textBox.clientHeight);
      done();
    });
  });

  test('autosize works with text wrapping', function(done) {
    var fixture = document.createElement('basic-autosize-textarea');
    var fixtureComp = document.createElement('basic-autosize-textarea');
    container.appendChild(fixture);
    container.appendChild(fixtureComp);
    var text = 'Lots of words to force wrapping. Lots of words to force wrapping. ' +
    'Lots of words to force wrapping. Lots of words to force wrapping. Lots of words to force wrapping. ' +
    'Lots of words to force wrapping. Lots of words to force wrapping. Lots of words to force wrapping. ' +
    'Lots of words to force wrapping. Lots of words to force wrapping. Lots of words to force wrapping. ' +
    'Lots of words to force wrapping. Lots of words to force wrapping. Lots of words to force wrapping. ';
    setInnerHTML(fixture, text);
    flush(function() {
      assert(fixture.$.textBox.clientHeight > 2 * fixtureComp.$.textBox.clientHeight);
      done();
    });
  });

  test('autosize works with long string with no whitespace', function(done) {
    var fixture = document.createElement('basic-autosize-textarea');
    var fixtureComp = document.createElement('basic-autosize-textarea')
    container.appendChild(fixture);
    container.appendChild(fixtureComp);
    text = 'sadf;lksadfjl;sdfjl;ksjdfkjsd;lfjsdlkfjksdjfosadjflwemrflkwefoawefowmefomwefomowefomweofmwqefmwoqemfowqefomwqefoiwemfomwqeofkmwefomwerfklasjdlmwefoqwkemfwqemfowqmefowqmefowmefowqemfowemfowqemfwoefokwqmefokmwerfokmwefwoqemfowqmefokqwmefowqefowqmefoqwemfowemfomweofijweoirulwemfkwejfoijewtjoiqhewfknwerofijqewrotmerfomoewfqweofmqweofjqweofmweomwqeorjqweoifmqwoefqoewfmoqewfmqwoefmqwefoqwemfoiwejrtomqwdfoiqwemromqweofiwmerowqeoimwqeormwqefom';
    setInnerHTML(fixture, text);
    flush(function() {
      assert(fixture.$.textBox.clientHeight > 2 * fixtureComp.$.textBox.clientHeight);
      done();
    })
  });

  test('placeholder', function(done) {
    var fixture = document.createElement('basic-autosize-textarea');
    container.appendChild(fixture);
    fixture.placeholder = 'Placeholder text';
    flush(function() {
      assert.equal(fixture.placeholder, "Placeholder text");
      assert.notEqual(fixture.value, "Placeholder text");
      done();
    });
  });

});
