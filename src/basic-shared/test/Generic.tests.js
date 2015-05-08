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
});
