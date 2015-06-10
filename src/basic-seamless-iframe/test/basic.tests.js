suite('basic', function() {

  this.timeout(2000);

  var container = document.getElementById('container');

  teardown(function () {
    container.innerHTML = '';
  });

  // TODO
  test.skip('receives content from framed page', function(done) {
    var fixture = document.createElement('basic-seamless-iframe');
    container.appendChild(fixture);
    flush(function() {
      done();
    });
  });

});

