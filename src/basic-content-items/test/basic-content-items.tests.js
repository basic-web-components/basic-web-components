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

});

function clone(obj) {
  var result = {};
  for (var key in obj) {
    result[key] = obj[key];
  }
  return result;
}
