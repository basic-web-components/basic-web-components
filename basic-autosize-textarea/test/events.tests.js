suite('events', function() {

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

  teardown(function () {
    container.innerHTML = '';
  });

  test('change', function (done) {
    var fixture = document.createElement('basic-autosize-textarea');
    container.appendChild(fixture);
    flush(function () {
      var newText = 'foo\nbar\nfizbo';

      // Ensure we can see the internal textarea element
      assert(fixture.$.textBox);

      var textBox = fixture.$.textBox;

      // Note the initial clientHeight which should be less than when we add lines of text
      var clientHeight = textBox.clientHeight;

      // Set up the event listener on the change event
      fixture.addEventListener('change', function(e) {
        // Do we have the new text?
        assert.equal(fixture.value, newText);

        // The minimumRows property should not have changed
        assert.equal(fixture.minimumRows, 1);

        // Get the new client height and assert it should be more than twice the old value
        var newClientHeight = textBox.clientHeight;
        assert(newClientHeight >  2 * clientHeight);

        done();
      });

      // Set the new text and flush the browser
      setInnerHTML(fixture, newText);
      flush(function() {
        fixture.dispatchEvent(new CustomEvent('change'));
      });
    });
  });

});
