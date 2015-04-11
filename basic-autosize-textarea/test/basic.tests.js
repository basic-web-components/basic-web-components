suite('basic', function() {

  this.timeout(2000);

  var container = document.getElementById('container');

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

  test('value', function(done) {
    var fixture = document.createElement('basic-autosize-textarea');
    container.appendChild(fixture);
    fixture.innerHTML = 'Hello, world';
    flush(function() {
      assert.equal(fixture.value, "Hello, world");
      done();
    })
  });

  test.skip('minimumRows can make element taller than required to fit content', function(done) {
    var fixture = document.createElement('basic-autosize-textarea');
    var fixtureComp = document.createElement('basic-autosize-textarea');
    container.appendChild(fixture);
    container.appendChild(fixtureComp);
    fixture.minimumRows = 10;
    fixture.innerHTML = 'Hello, world';
    flush(function() {
      // Confirm minimumRows can make the element taller than is required just to fit the content
      assert.equal(fixture.minimumRows, 10);
      assert.equal(fixture.value, 'Hello, world');
      assert(fixture.$.textBox.clientHeight > 2 * fixtureComp.$.textBox.clientHeight);
      done();
    });
  });

  test('value through innerHTML', function(done) {
    var fixture = document.createElement('basic-autosize-textarea');
    container.appendChild(fixture);
    var content = 'Hello, world';
    fixture.innerHTML = content;
    flush(function() {
      assert.equal(fixture.value, content);
      var newContent = "Changed content";
      fixture.innerHTML = newContent;
      flush(function() {
        assert.equal(fixture.value, newContent);
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

