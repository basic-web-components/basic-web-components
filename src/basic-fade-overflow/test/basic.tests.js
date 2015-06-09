suite('basic', function() {

  this.timeout(2000);

  var container = document.getElementById('container');
  var testText = document.getElementById('text').innerHTML;

  teardown(function () {
    container.innerHTML = '';
    document.body.style.background = '';
  });

  test('fadeColor attribute is defined', function(done) {
    var fixture = document.createElement('basic-fade-overflow');
    fixture.innerHTML = testText;
    container.appendChild(fixture);
    flush(function() {
      assert(fixture.fadeColor != undefined);
      done();
    });
  });

  test('default fadeColor is set to white', function(done) {
    var fixture = document.createElement('basic-fade-overflow');
    fixture.innerHTML = testText;
    container.appendChild(fixture);
    flush(function() {
      var rgb = fixture._extractRgbValues(fixture.fadeColor);
      assert(rgb.r == 255 && rgb.g == 255 && rgb.b == 255);
      done();
    });
  });

  test('refresh updates fadeColor', function(done) {
    var fixture = document.createElement('basic-fade-overflow');
    fixture.innerHTML = testText;
    container.appendChild(fixture);
    document.body.style.backgroundColor = 'red';
    flush(function() {
      fixture.refresh();
      var rgb = fixture._extractRgbValues(fixture.fadeColor);
      assert(rgb.r == 255 && rgb.g == 0 && rgb.b == 0);
      done();
    });
  });

  test('explicitly set fadeColor with rgb string', function(done) {
    var fixture = document.createElement('basic-fade-overflow');
    fixture.innerHTML = testText;
    container.appendChild(fixture);
    fixture.fadeColor = 'rgb(0, 0, 255)';
    flush(function() {
      var rgb = fixture._extractRgbValues(fixture.fadeColor);
      assert(rgb.r == 0 && rgb.g == 0 && rgb.b == 255);
      done();
    });
  });

});
