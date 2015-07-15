suite('basic', function() {

  this.timeout(2000);

  var container = document.getElementById('container');

  teardown(function () {
    container.innerHTML = '';
  });

  test('default month', function (done) {
    var fixture = document.createElement('basic-month-name');
    container.appendChild(fixture);
    var now = new Date();
    var currentMonth = now.getMonth();
    assert.equal(fixture.month, currentMonth);
    done();
  });

  test('set month attribute', function(done) {
    var fixture = document.createElement('basic-month-name');
    container.appendChild(fixture);
    fixture.month = 5;
    flush(function() {
      assert.equal(fixture.month, 5);
      var monthNameEnum = fixture.culture ? fixture.culture.months.names : BasicMonthName.names;
      var monthName = monthNameEnum[5];
      assert.equal(fixture.$.name.textContent, monthName);
      done();
    });
  });

});
