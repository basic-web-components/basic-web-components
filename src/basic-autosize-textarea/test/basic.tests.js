suite('basic', function() {

  this.timeout(2000);

  var container = document.getElementById('container');

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
    flush(function() {
      assert.equal(fixture.value, 'Hello');
      done();
    });
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
    var fixtureComp = document.createElement('basic-autosize-textarea');
    container.appendChild(fixture);
    container.appendChild(fixtureComp);
    fixture.minimumRows = 10;
    flush(function() {
      assert.equal(fixture.minimumRows, 10);
      assert(fixture.$.textBox.clientHeight > 2 * fixtureComp.$.textBox.clientHeight);
      done();
    });
  });

  test('set minimumRows declaratively', function(done) {
    container.innerHTML = '<basic-autosize-textarea minimum-rows="10">Hello</basic-autosize-textarea>';
    var fixture = container.querySelector('basic-autosize-textarea');
    var fixtureComp = document.createElement('basic-autosize-textarea');
    container.appendChild(fixtureComp);
    flush(function() {
      assert.equal(fixture.minimumRows, 10);
      assert(fixture.$.textBox.clientHeight > 2 * fixtureComp.$.textBox.clientHeight);
      done();
    });
  });

  test('value', function(done) {
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
    flush(function() {
      var content = 'Hello world';
      fixture.minimumRows = 10;
      fixture.value = content;
      flush(function() {
        // Confirm minimumRows can make the element taller than is required just to fit the content
        assert.equal(fixture.minimumRows, 10);
        assert.equal(fixture.value, content);
        assert(fixture.$.textBox.clientHeight > 2 * fixtureComp.$.textBox.clientHeight);
        done();
      });
    });
  });

  test('value changes', function(done) {
    var fixture = document.createElement('basic-autosize-textarea');
    container.appendChild(fixture);
    var content = 'Hello, world';
    fixture.value = content;
    flush(function() {
      assert.equal(fixture.value, content);
      assert(fixture.$.textBox.clientHeight > 1);
      var newContent = 'Changed content';
      fixture.value = newContent;
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
    fixture.value = html;
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
    fixture.value = text;
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
    fixture.value = text;
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
