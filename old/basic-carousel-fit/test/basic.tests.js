suite('basic', function() {

  this.timeout(2000);

  var container = document.getElementById('container');

  function setInnerHTML(elem, text) {
    var textNode = document.createTextNode(text);
    var children = Polymer.dom(elem).childNodes;
    for (var i = 0; i < children.length; i++) {
      Polymer.dom(elem).removeChild(children[i]);
    }
    Polymer.dom(elem).appendChild(textNode);
  }

  test('instantiation', function (done) {
    var fixture = document.createElement('basic-carousel-fit');
    container.appendChild(fixture);
    flush(function () {
      assert(fixture);
      done();
    });
  });

});