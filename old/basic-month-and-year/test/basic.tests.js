suite('basic', function() {

  this.timeout(2000);

  var container = document.getElementById('container');
  var initDate = new Date('10 March 2015');

  teardown(function () {
    container.innerHTML = '';
  });

  test('default date', function (done) {
    var fixture = document.createElement('basic-month-and-year');
    container.appendChild(fixture);
    var now = new Date();
    flush(function() {
      assert(fixture.date instanceof Date);
      assert(now >= fixture.date);
      done();
    });
  });

  test('set date attribute', function (done) {
    var fixture = document.createElement('basic-month-and-year');
    container.appendChild(fixture);
    fixture.date = initDate;
    flush(function() {
      assert.deepEqual(fixture.date, initDate);
      done();
    });
  });

});

