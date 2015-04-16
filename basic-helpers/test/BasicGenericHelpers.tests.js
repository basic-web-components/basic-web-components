suite('basic', function() {

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
      var fontWeight = getComputedStyle(fixture).fontWeight;
      assert.equal(fontWeight, 'bold');
      done();
    });
  });

  test('generic style off', function(done) {
    var fixture = document.createElement('generic-element');
    fixture.generic = false;
    container.appendChild(fixture);
    flush(function() {
      var fontWeight = getComputedStyle(fixture).fontWeight;
      assert.equal(fontWeight, 'normal');
      done();
    });
  });
});
