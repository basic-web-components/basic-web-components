suite('basic', function() {

  this.timeout(2000);

  var container = document.getElementById('container');
  var initDate = new Date('10 March 2015');

  teardown(function () {
    container.innerHTML = '';
  });

  test('default date', function (done) {
    var fixture = document.createElement('basic-calendar-month-days');
    container.appendChild(fixture);
    var now = new Date();
    assert.equal(now.getDay(), fixture.date.getDay());
    assert.equal(now.getMonth(), fixture.date.getMonth());
    assert.equal(now.getFullYear(), fixture.date.getFullYear());
    done();
  });

  test('set date attribute', function (done) {
    var fixture = document.createElement('basic-calendar-month-days');
    container.appendChild(fixture);
    var now = new Date();
    fixture.date = now;
    flush(function () {
      assert.deepEqual(fixture.date, now);
      done();
    });
  });

  test('dayElementForDate', function(done) {
    var fixture = document.createElement('basic-calendar-month-days');
    container.appendChild(fixture);
    var elem = fixture.dayElementForDate(new Date());
    assert(elem);
    done();
  });

  test('firstDateOfMonth', function(done) {
    var fixture = document.createElement('basic-calendar-month-days');
    container.appendChild(fixture);
    fixture.date = initDate;
    flush(function() {
      var val = fixture.firstDateOfMonth;
      assert.deepEqual(val, new Date('1 March 2015'));
      done();
    });
  });

  test('isDateInMonth - true', function(done) {
    var fixture = document.createElement('basic-calendar-month-days');
    container.appendChild(fixture);
    fixture.date = initDate;
    flush(function() {
      assert(fixture.isDateInMonth(initDate));
      done();
    });
  });

  test('isDateInMonth - false', function(done) {
    var fixture = document.createElement('basic-calendar-month-days');
    container.appendChild(fixture);
    var date = new Date('2 February 2015');
    var badDate = new Date('2 March 2015');
    fixture.date = date;
    flush(function() {
      assert(!fixture.isDateInMonth(badDate));
      done();
    });
  });

  test('lastDateOfMonth', function(done) {
    var fixture = document.createElement('basic-calendar-month-days');
    container.appendChild(fixture);
    fixture.date = initDate;
    flush(function() {
      var last = fixture.lastDateOfMonth;
      assert.deepEqual(last, new Date('31 March 2015'));
      done();
    });
  });

  test('weekElementForDate', function(done) {
    var fixture = document.createElement('basic-calendar-month-days');
    container.appendChild(fixture);
    fixture.date = initDate;
    flush(function() {
      var elem = fixture.weekElementForDate(new Date('1 March 2015'));
      assert(elem);
      elem = fixture.weekElementForDate(new Date('1 December 2015'));
      assert(!elem);
      done();
    });
  });

  test('weeks', function(done) {
    var fixture = document.createElement('basic-calendar-month-days');
    container.appendChild(fixture);
    fixture.date = initDate;
    flush(function() {
      assert(fixture.weeks);
      assert.equal(fixture.weeks.length, 6);
      done();
    });
  });

});
