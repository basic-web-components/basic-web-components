suite('events', function() {

  this.timeout(2000);

  var container = document.getElementById('container');

  teardown(function () {
    container.innerHTML = '';
  });

  test('basic-culture-changed', function (done) {
    var fixture = document.createElement('basic-culture-selector');
    container.appendChild(fixture);
    assert.equal(fixture.name, 'en');
    fixture.addEventListener('basic-culture-changed', function(e) {
      assert.equal(fixture.name, 'fr-FR');
      done();
    });

    fixture.name = 'fr-FR';
  });

});