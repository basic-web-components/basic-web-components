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
    flush(function() {
      var currentMonth = now.getMonth();
      assert.equal(fixture.month, currentMonth);
      done();
    });
  });

  test('set month attribute', function(done) {
    var fixture = document.createElement('basic-month-name');
    container.appendChild(fixture);
    fixture.month = 5;
    flush(function() {
      assert.equal(fixture.month, 5);
      var monthNameEnum = fixture.monthsOfYear(culture);
      var monthName = monthNameEnum['wide'][fixture.month + 1];
      assert.equal(fixture.$.name.textContent, monthName);
      done();
    });
  });

  test('French', function(done) {
    var fixture = document.createElement('basic-month-name');
    container.appendChild(fixture);
    fixture.month = 5;
    var bcs = document.createElement('basic-culture-selector');
    container.appendChild(bcs);
    bcs.addEventListener('culture-changed', function(event) {
      var culture = bcs.culture;

      if (culture.cldr.locale == 'en') {
        bcs.name = 'fr';
        return;
      }

      fixture.culture = culture;
      flush(function() {
        assert.equal(fixture.month, 5);
        var monthNameEnum = fixture.monthsOfYear(culture);
        var monthName = monthNameEnum['wide'][fixture.month + 1];
        assert.equal(monthName, 'juin');
        assert.equal(fixture.$.name.textContent, monthName);

        done();
      });
    });
  });

});
