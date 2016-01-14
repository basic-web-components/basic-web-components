suite('basic-content-items', function() {

  var simpleContentAspect = {
    contribute: {
      get content() {
        return this.data;
      }
    }
  };

  test("contents returned as items", function() {
    var collective = new Basic.Collective();
    var simpleContent = clone(simpleContentAspect);
    simpleContent.data = [1, 2, 3];
    collective.assimilate(simpleContent, clone(Basic.ContentItems));
    var items = collective.items;
    assert.deepEqual(items, simpleContent.data);
  });

  test("auxiliary elements filtered from items", function() {
    var collective = new Basic.Collective();
    var simpleContent = clone(simpleContentAspect);
    var div = document.createElement('div');
    var link = document.createElement('link');
    var script = document.createElement('script');
    var style = document.createElement('style');
    var template = document.createElement('template');
    simpleContent.data = [div, link, script, style, template ];
    collective.assimilate(simpleContent, clone(Basic.ContentItems));
    var items = collective.items;
    assert.equal(items.length, 1);
    assert.equal(items[0], div);
  });

});

function clone(obj) {
  var result = {};
  for (var key in obj) {
    result[key] = obj[key];
  }
  return result;
}
