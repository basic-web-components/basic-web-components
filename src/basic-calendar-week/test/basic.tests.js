suite('basic', function() {

  this.timeout(2000);

  var container = document.getElementById('container');
  var initDate = new Date('10 March 2015');

  teardown(function () {
    container.innerHTML = '';
  });

  test('default date', function (done) {
    var fixture = document.createElement('basic-calendar-week');
    container.appendChild(fixture);
    var now = new Date();
    assert.equal(now.getDay(), fixture.date.getDay());
    assert.equal(now.getMonth(), fixture.date.getMonth());
    assert.equal(now.getFullYear(), fixture.date.getFullYear());
    done();
  });

  test('set date attribute', function (done) {
    var fixture = document.createElement('basic-calendar-week');
    container.appendChild(fixture);
    now = new Date();
    fixture.date = now;
    flush(function() {
      assert.deepEqual(now, fixture.date);
      done();
    });
  });

  test('dayElementForDate', function(done) {
    var fixture = document.createElement('basic-calendar-week');
    container.appendChild(fixture);
    flush(function() {
      var elem = fixture.dayElementForDate(new Date());
      assert(elem);
      done();
    });
  });

  test('days', function(done) {
    var fixture = document.createElement('basic-calendar-week');
    container.appendChild(fixture);
    fixture.date = initDate;
    flush(function() {
      assert(fixture.days);
      assert.equal(fixture.days.length, 7);
      done();
    });
  });

  test('firstDate', function(done) {
    var fixture = document.createElement('basic-calendar-week');
    container.appendChild(fixture);
    fixture.date = initDate;
    flush(function() {
      var first = new Date('8 March 2015');
      assert.deepEqual(fixture.firstDate, first);
      done();
    });
  });

  test('lastDate', function(done) {
    var fixture = document.createElement('basic-calendar-week');
    container.appendChild(fixture);
    fixture.date = initDate;
    flush(function() {
      var last = new Date('14 March 2015');
      assert.deepEqual(fixture.lastDate, last);
      done();
    });
  });

});

