suite('basic', function() {

  this.timeout(2000);

  var container = document.getElementById('container');

  teardown(function () {
    container.innerHTML = '';
  });

  test('instantiation', function (done) {
    var fixture = document.createElement('basic-days-of-week');
    container.appendChild(fixture);
    var now = new Date();
    flush(function () {
      assert(fixture);
      done();
    });
  });

});