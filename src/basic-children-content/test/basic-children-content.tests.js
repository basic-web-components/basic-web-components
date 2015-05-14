suite('basic-children-content', function() {

  var container = document.getElementById('container');

  teardown(function() {
    container.innerHTML = '';
  });

  test("on its own, returns its children", function() {
    var basicContent = document.createElement('basic-children-content');
    var div = document.createElement('div');
    Polymer.dom(basicContent).appendChild(div);
    var content = basicContent.content;
    assert.equal(content.length, 1);
    assert.equal(content[0], div);
  });

  test("in collective, returns children of bottommost aspect", function() {
    var outer = document.createElement('basic-children-content');
    var inner = document.createElement('basic-children-content');
    var div = document.createElement('div');
    Polymer.dom(inner).appendChild(div);
    Polymer.dom(outer).appendChild(inner);
    outer.assimilate(inner);
    var content = outer.content;
    assert.equal(content.length, 1);
    assert.equal(content[0], div);
  });

  test("when its children change, it invokes the contentChanged handler", function(done) {
    var div = document.createElement('div');
    var aspect = {
      contribute: {
        contentChanged: function() {
          // Wait until we actaully have content.
          var content = this.collective.content;
          if (content.length > 0) {
            assert.equal(content[0], div);
            done();
          }
        }
      }
    };
    var basicContent = document.createElement('basic-children-content');
    Polymer.dom(container).appendChild(basicContent);
    flush(function() {
      assert.equal(basicContent.content.length, 0);
      var collective = new Basic.Collective(aspect);
      collective.assimilate(basicContent);
      Polymer.dom(basicContent).appendChild(div);
    });
  });

  test("when the children of the bottommost aspect change, it invokes the contentChanged handler", function(done) {
    var div = document.createElement('div');
    var changeDetectorAspect = {
      contribute: {
        contentChanged: function() {
          assert.equal(this.collective.content.length, 1);
          assert.equal(this.collective.content[0], div);
          done();
        }
      }
    };
    var outer = document.createElement('basic-children-content');
    var inner = document.createElement('basic-aspect');
    Polymer.dom(outer).appendChild(inner);
    flush(function() {
      var collective = new Basic.Collective(changeDetectorAspect, outer, inner);
      assert.equal(outer.content.length, 0);
      Polymer.dom(inner).appendChild(div);
    });
  });

  test("content returns flattened list of distributed content", function() {
    var fixture = document.createElement('content-distribution-test');
    var div = document.createElement('div');
    Polymer.dom(fixture).appendChild(div);
    Polymer.dom.flush();
    var basicContent = Polymer.dom(fixture.root).querySelector('basic-children-content');
    var content = basicContent.content;
    assert.equal(content.length, 1);
    assert.equal(content[0], div);
  });

});
