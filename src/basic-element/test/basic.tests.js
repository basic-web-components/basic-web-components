suite('basic', function() {

  this.timeout(2000);

  var container = document.getElementById('container');

  teardown(function() {
    container.innerHTML = '';
  });

  test('instantiation', function(done) {
    var fixture = document.createElement('basic-element');
    container.appendChild(fixture);
    flush(function() {
      assert(fixture);
      done();
    });
  });

  test('generic style on', function(done) {
    var fixture = document.createElement('basic-element');
    container.appendChild(fixture);
    flush(function() {
      assert.equal(window.getComputedStyle(fixture, null).getPropertyValue('background-color'), 'rgb(255, 0, 0)');
      done();
    });
  });

  test('generic style off', function(done) {
    var fixture = document.createElement('basic-element');
    fixture.setAttribute('generic', false);
    container.appendChild(fixture);
    flush(function() {
      var styleValue = window.getComputedStyle(fixture, null).getPropertyValue('background-color');
      assert(styleValue == 'rgba(0, 0, 0, 0)' || styleValue == 'transparent');
      done();
    });
  });
});
