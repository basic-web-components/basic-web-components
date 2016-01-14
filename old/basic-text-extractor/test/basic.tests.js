suite('basic', function() {

  this.timeout(2000);

  var container = document.getElementById('container');

  teardown(function () {
    container.innerHTML = '';
  });

  test('default value', function(done) {
    var fixture = document.createElement('basic-text-extractor');
    Polymer.dom(container).appendChild(fixture);
    flush(function() {
      assert.equal(fixture.value, undefined);
      done();
    });
  });

  test('changed value', function(done) {
    var fixture = document.createElement('basic-text-extractor');
    Polymer.dom(container).appendChild(fixture);
    flush(function() {
      assert.equal(fixture.value, undefined);
      var content = 'foo';
      Polymer.dom(fixture).innerHTML = content;
      flush(function() {
        assert.equal(fixture.value, content);
        done();
      })
    });
  });

});
