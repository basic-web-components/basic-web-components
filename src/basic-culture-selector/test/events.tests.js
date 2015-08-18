suite('events', function() {

  this.timeout(2000);

  var container = document.getElementById('container');

  teardown(function () {
    container.innerHTML = '';
  });

  test('culture-changed', function (done) {
    var fixture = document.createElement('basic-culture-selector');
    container.appendChild(fixture);
    assert.equal(fixture.name, 'en');
    fixture.addEventListener('culture-changed', function(event) {
      if (fixture.name == 'en') {
        fixture.name = 'fr';
        return;
      }

      assert.equal(fixture.name, 'fr');
      done();
    });
  });

});