suite('basic', function() {

  this.timeout(2000);

  var container = document.getElementById('container');

  teardown(function() {
    container.innerHTML = '';
  });

  test.skip('instantiation', function(done) {
    var fixture = document.createElement('basic-autosize-textarea');
    container.appendChild(fixture);
    flush(function() {
      assert(fixture);
      done();
    });
  });

  test('instantiate via innerHTML', function(done) {
    container.innerHTML = '<basic-autosize-textarea>Hello</basic-autosize-textarea>';
    flush(function() {
      var fixture = container.querySelector('basic-autosize-textarea');
      var textNode = Polymer.dom(fixture).childNodes[0];
      assert.equal(textNode.textContent, 'Hello');
      done();
    });
  });

  test.skip('default minimumRows', function(done) {
    var fixture = document.createElement('basic-autosize-textarea');
    container.appendChild(fixture);
    flush(function() {
      assert.equal(fixture.minimumRows, 1);
      done();
    });
  });

  test.skip('set minimumRows', function(done) {
    var fixture = document.createElement('basic-autosize-textarea');
    container.appendChild(fixture);
    fixture.minimumRows = 10;
    flush(function() {
      assert.equal(fixture.minimumRows, 10);
      done();
    });
  });

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

  test.skip('minimumRows can make element taller than required to fit content', function(done) {
    var fixture = document.createElement('basic-autosize-textarea');
    var fixtureComp = document.createElement('basic-autosize-textarea');
    container.appendChild(fixture);
    container.appendChild(fixtureComp);
    fixture.minimumRows = 10;
    fixture.value = 'Hello, world';
    flush(function() {
      // Confirm minimumRows can make the element taller than is required just to fit the content
      assert.equal(fixture.minimumRows, 10);
      assert.equal(fixture.value, 'Hello, world');
      assert(fixture.$.textBox.clientHeight > 2 * fixtureComp.$.textBox.clientHeight);
      done();
    });
  });

  test.skip('value changes', function(done) {
    var fixture = document.createElement('basic-autosize-textarea');
    container.appendChild(fixture);
    var content = 'Hello, world';
    fixture.value = content;
    flush(function() {
      assert.equal(fixture.value, content);
      assert(fixture.$.textBox.clientHeight > 1);
      var newContent = "Changed content";
      fixture.value = newContent;
      flush(function() {
        assert.equal(fixture.value, newContent);
        assert(fixture.$.textBox.clientHeight > 1);
        done();
      });
    });
  });

  test.skip('autosize works when content is HTML', function(done) {
    var fixture = document.createElement('basic-autosize-textarea');
    var fixtureComp = document.createElement('basic-autosize-textarea');
    container.appendChild(fixture);
    container.appendChild(fixtureComp);
    // Confirm autosize works when content is HTML
    fixture.value = '<html>\n<body>\n<p>\nThis is a test\n</p>\n<div>\nSome more tests\n</div>\n</body>\n</html>';
    flush(function() {
      assert(fixture.$.textBox.clientHeight > 2 * fixtureComp.$.textBox.clientHeight);
      done();
    });
  });

  test.skip('autosize works with text wrapping', function(done) {
    var fixture = document.createElement('basic-autosize-textarea');
    var fixtureComp = document.createElement('basic-autosize-textarea');
    container.appendChild(fixture);
    container.appendChild(fixtureComp);
    fixture.value = 'Lots of words to force wrapping. Lots of words to force wrapping. ' +
    'Lots of words to force wrapping. Lots of words to force wrapping. Lots of words to force wrapping. ' +
    'Lots of words to force wrapping. Lots of words to force wrapping. Lots of words to force wrapping. ' +
    'Lots of words to force wrapping. Lots of words to force wrapping. Lots of words to force wrapping. ' +
    'Lots of words to force wrapping. Lots of words to force wrapping. Lots of words to force wrapping. ';

    flush(function() {
      assert(fixture.$.textBox.clientHeight > 2 * fixtureComp.$.textBox.clientHeight);
      done();
    });
  });

  test.skip('autosize works with long string with no whitespace', function(done) {
    var fixture = document.createElement('basic-autosize-textarea');
    var fixtureComp = document.createElement('basic-autosize-textarea')
    container.appendChild(fixture);
    container.appendChild(fixtureComp);
    fixture.value = 'sadf;lksadfjl;sdfjl;ksjdfkjsd;lfjsdlkfjksdjfosadjflwemrflkwefoawefowmefomwefomowefomweofmwqefmwoqemfowqefomwqefoiwemfomwqeofkmwefomwerfklasjdlmwefoqwkemfwqemfowqmefowqmefowmefowqemfowemfowqemfwoefokwqmefokmwerfokmwefwoqemfowqmefokqwmefowqefowqmefoqwemfowemfomweofijweoirulwemfkwejfoijewtjoiqhewfknwerofijqewrotmerfomoewfqweofmqweofjqweofmweomwqeorjqweoifmqwoefqoewfmoqewfmqwoefmqwefoqwemfoiwejrtomqwdfoiqwemromqweofiwmerowqeoimwqeormwqefom';

    flush(function() {
      assert(fixture.$.textBox.clientHeight > 2 * fixtureComp.$.textBox.clientHeight);
      done();
    })
  });

  test.skip('placeholder', function(done) {
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
