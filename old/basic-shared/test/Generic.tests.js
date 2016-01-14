suite('Generic', function() {

  this.timeout(2000);

  var container = document.getElementById('container');

  teardown(function() {
    container.innerHTML = '';
  });

  test('generic style on by default', function(done) {
    var fixture = document.createElement('generic-element');
    container.appendChild(fixture);
    flush(function() {
      assert(fixture.generic);
      var display = getComputedStyle(fixture).display;
      assert.equal(display, 'block');
      done();
    });
  });

  test('generic style off', function(done) {
    var fixture = document.createElement('generic-element');
    fixture.generic = false;
    container.appendChild(fixture);
    flush(function() {
      var display = getComputedStyle(fixture).display;
      assert.equal(display, 'inline-block');
      done();
    });
  });

  test('set generic to false via attribute', function(done) {
    var div = document.createElement('div');
    Polymer.dom(div).innerHTML = '<generic-element generic="false"></generic-element>';
    container.appendChild(div);
    flush(function() {
      var fixture = Polymer.dom(div).children[0];
      var display = getComputedStyle(fixture).display;
      assert.equal(display, 'inline-block');
      done();
    });
  });

});
