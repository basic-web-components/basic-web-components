suite('basic-list-box', function() {

  var container = document.getElementById('container');

  teardown(function() {
    container.innerHTML = '';
    listBox = null;
  });

  test("new list box has empty items collection", function() {
    var listBox = document.createElement('basic-list-box');
    assert.equal(listBox.items.length, 0);
  });

  test("selectedItem initially null", function(done) {
    var listBox = createSampleListBox();
    Polymer.dom(container).appendChild(listBox);
    flush(function() {
      assert.isNull(listBox.selectedItem);
      assert.equal(listBox.selectedIndex, -1);
      done();
    });
  });

  test("setting selectingIndex also updates selectedItem", function(done) {
    var listBox = createSampleListBox();
    Polymer.dom(container).appendChild(listBox);
    flush(function() {
      listBox.selectedIndex = 2;
      assert.equal(listBox.selectedItem, Polymer.dom(listBox).children[2]);
      done();
    });
  });

  test("setting selectedItem also updates selectedIndex", function(done) {
    var listBox = createSampleListBox();
    Polymer.dom(container).appendChild(listBox);
    flush(function() {
      listBox.selectedItem = Polymer.dom(listBox).children[2];
      assert.equal(listBox.selectedIndex, 2);
      done();
    });
  });

  test("setting selectedItem also updates value", function(done) {
    var listBox = createSampleListBox();
    Polymer.dom(container).appendChild(listBox);
    flush(function() {
      assert.equal(listBox.value, '');
      listBox.selectedIndex = 2;
      assert.equal(listBox.value, 'Two');
      done();
    });
  });

  test("setting value updates selectedItem", function(done) {
    var listBox = createSampleListBox();
    Polymer.dom(container).appendChild(listBox);
    flush(function() {
      listBox.value = 'Two';
      assert.equal(listBox.selectedIndex, 2);
      done();
    });
  });

  test("can set selectedIndex in markup", function(done) {
    var html = '<basic-list-box selected-index="0"><span></span></basic-list-box>';
    Polymer.dom(container).innerHTML = html;
    flush(function() {
      var list = Polymer.dom(container).children[0];
      var span = Polymer.dom(list).children[0];
      assert.equal(list.selectedItem, span);
      done();
    });
  });

  test("changing selection raises the selected-item-changed event", function(done) {
    var listBox = createSampleListBox();
    Polymer.dom(container).appendChild(listBox);
    flush(function() {
      listBox.addEventListener('selected-item-changed', function() {
        done();
      });
      listBox.selectedIndex = 1;
    });
  });

});

function createSampleListBox() {
  var listBox = document.createElement('basic-list-box');
  var texts = ['Zero', 'One', 'Two'];
  texts.forEach(function(text) {
    var div = document.createElement('div');
    div.textContent = text;
    Polymer.dom(listBox).appendChild(div);
  });
  return listBox;
}