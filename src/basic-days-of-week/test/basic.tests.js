suite('basic', function() {

  this.timeout(2000);

  var container = document.getElementById('container');

  teardown(function () {
    container.innerHTML = '';
  });

  test('instantiation', function(done) {
    var fixture = document.createElement('basic-days-of-week');
    container.appendChild(fixture);
    var now = new Date();
    flush(function () {
      assert(fixture);
      done();
    });
  });

  test('French', function(done) {
    var fixture = document.createElement('basic-days-of-week');
    container.appendChild(fixture);
    var bcs = document.createElement('basic-culture-selector');
    container.appendChild(bcs);
    bcs.addEventListener('culture-changed', function(event) {
      var culture = bcs.culture;

      if (culture.cldr.locale == 'en') {
        bcs.name = 'fr';
        return;
      }

      assert.equal(culture.cldr.locale, 'fr');
      fixture.culture = culture;
      flush(function() {
        var dayNameEnum = fixture.daysOfWeek(culture);
        assert(dayNameEnum);
        assert.equal(dayNameEnum['wide'][fixture.dateWeekDays[0]], 'dimanche');
        assert.equal(dayNameEnum['abbreviated'][fixture.dateWeekDays[1]], 'lun.');
        done();
      });
    });
  });

});