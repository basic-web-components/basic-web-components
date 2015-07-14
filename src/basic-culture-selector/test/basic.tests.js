suite('basic', function() {

  this.timeout(2000);

  var container = document.getElementById('container');

  teardown(function () {
    container.innerHTML = '';
  });

  test('instantiation', function(done) {
    var fixture = document.createElement('basic-culture-selector');
    container.appendChild(fixture);
    fixture.addEventListener('basic-culture-changed', function(event) {
      assert(fixture);
      done();
    });
  });

  test('default name', function(done) {
    var fixture = document.createElement('basic-culture-selector');
    container.appendChild(fixture);
    fixture.addEventListener('basic-culture-changed', function(event) {
      assert.equal(fixture.name, 'en');
      done();
    });
  });

  test('set name', function(done) {
    var fixture = document.createElement('basic-culture-selector');
    container.appendChild(fixture);
    fixture.addEventListener('basic-culture-changed', function(event) {
      var culture = event.detail.culture;

      // Skip the default setting notification
      if (fixture.name == 'en') {
        fixture.name = 'fr';
        return;
      }

      assert.equal(fixture.name, 'fr');
      assert(culture);
      assert(culture.cldr);
      assert(culture.cldr.locale);
      var locale = culture.cldr.locale;
      var numberFormatter = Globalize(locale).numberFormatter();
      var dateFormatter = Globalize(locale).dateFormatter();
      var currencyFormatter = Globalize(locale).currencyFormatter('USD');

      assert.equal(dateFormatter(new Date('May 6, 1994')), '6/5/1994');
      assert.equal(numberFormatter(1234567.89), '1 234 567,89');
      assert.equal(currencyFormatter(1234.56), '1 234,56 $US');

      done();
    });
  });

  test('first day of week', function(done) {
    var fixture = document.createElement('basic-culture-selector');
    container.appendChild(fixture);
    fixture.addEventListener('basic-culture-changed', function (event) {
      var culture = event.detail.culture;
      assert(culture);
      assert(culture.cldr);

      var day = fixture.firstDayOfWeek(culture);
      if (fixture.name == 'en') {
        assert.equal(day, 0);
        fixture.name = 'fr';
        return;
      }

      assert.equal(day, 1);
      done();
    });
  });

});