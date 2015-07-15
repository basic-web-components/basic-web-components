suite('events', function() {

  this.timeout(2000);

  var container = document.getElementById('container');
  var initDate = new Date('10 March 2015');

  teardown(function () {
    container.innerHTML = '';
  });

  test('change', function(done) {
    var fixture = document.createElement('basic-month-and-year');
    container.appendChild(fixture);
    fixture.addEventListener('change', function(e) {
      assert.deepEqual(fixture.date, initDate);
      assert.equal(fixture.$.monthName.month, fixture.date.getMonth());
      assert.equal(fixture.$.year.textContent, fixture.date.getFullYear());
      done();
    });

    fixture.date = initDate;
    flush(function() {
      fixture.dispatchEvent(new CustomEvent('change'));
    })
  });

});
