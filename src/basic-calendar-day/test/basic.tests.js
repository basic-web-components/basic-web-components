suite('basic', function() {

  this.timeout(2000);

  var container = document.getElementById('container');

  teardown(function() {
    container.innerHTML = '';
  });

  test('default date', function(done) {
    var fixture = document.createElement('basic-calendar-day');
    container.appendChild(fixture);
    var now = new Date();
    flush(function() {
      assert(fixture.date instanceof Date);
      assert(now >= fixture.date);
      done();
    });
  });

  test('set date', function(done) {
    var fixture = document.createElement('basic-calendar-day');
    container.appendChild(fixture);
    fixture.date = new Date('14 March 2015');
    flush(function() {
      assert.deepEqual(fixture.date, new Date('March 14, 2015'));
      assert.equal(fixture.$.day.textContent, fixture.date.getDate());
      done();
    });
  });

  test('classList does not contain today', function(done) {
    var fixture = document.createElement('basic-calendar-day');
    container.appendChild(fixture);
    fixture.date = new Date('14 March 2015');
    flush(function() {
      assert.equal(fixture.classList.contains('today'), false);
      done();
    });
  });

  test('classList contains past', function(done) {
    var fixture = document.createElement('basic-calendar-day');
    container.appendChild(fixture);
    fixture.date = new Date('14 March 2015');
    flush(function() {
      assert.equal(fixture.classList.contains('past'), true);
      done();
    });
  });

  test('classList does not contain future', function(done) {
    var fixture = document.createElement('basic-calendar-day');
    container.appendChild(fixture);
    fixture.date = new Date('14 March 2015');
    flush(function() {
      assert.equal(fixture.classList.contains('future'), false);
      done();
    });
  });

  test('classList does not contain firstDayOfMonth', function(done) {
    var fixture = document.createElement('basic-calendar-day');
    container.appendChild(fixture);
    fixture.date = new Date('14 March 2015');
    flush(function() {
      assert.equal(fixture.classList.contains('firstDayOfMonth'), false);
      done();
    });
  });

  test('classList does not contain lastDayOfMonth', function(done) {
    var fixture = document.createElement('basic-calendar-day');
    container.appendChild(fixture);
    fixture.date = new Date('14 March 2015');
    flush(function () {
      assert.equal(fixture.classList.contains('lastDayOfMonth'), false);
      done();
    });
  });

  test('classList does not contain firstWeek', function(done) {
    var fixture = document.createElement('basic-calendar-day');
    container.appendChild(fixture);
    fixture.date = new Date('14 March 2015');
    flush(function() {
      assert.equal(fixture.classList.contains('firstWeek'), false);
      done();
    });
  });

  test('classList does not contain sunday', function(done) {
    var fixture = document.createElement('basic-calendar-day');
    container.appendChild(fixture);
    fixture.date = new Date('14 March 2015');
    flush(function() {
      assert.equal(fixture.classList.contains('sunday'), false);
      done();
    });
  });

  test('classList contains saturday', function(done) {
    var fixture = document.createElement('basic-calendar-day');
    container.appendChild(fixture);
    fixture.date = new Date('14 March 2015');
    flush(function() {
      assert.equal(fixture.classList.contains('saturday'), true);
      done();
    });
  });

  test('classList contains weekend', function(done) {
    var fixture = document.createElement('basic-calendar-day');
    container.appendChild(fixture);
    fixture.date = new Date('14 March 2015');
    flush(function() {
      assert.equal(fixture.classList.contains('weekend'), true);
      done();
    });
  });

  test('classList does not contain weekday', function(done) {
    var fixture = document.createElement('basic-calendar-day');
    container.appendChild(fixture);
    fixture.date = new Date('14 March 2015');
    flush(function() {
      assert.equal(fixture.classList.contains('weekday'), false);
      done();
    });
  });

  test('classList does not contain alternateMonth', function(done) {
    var fixture = document.createElement('basic-calendar-day');
    container.appendChild(fixture);
    fixture.date = new Date('14 March 2015');
    flush(function() {
      var today = fixture.today();
      var altMonth = Math.abs(fixture.date.getMonth() - today.getMonth()) % 2 === 1;
      assert.equal(fixture.classList.contains('alternateMonth'), altMonth);
      done();
    });
  });

});
