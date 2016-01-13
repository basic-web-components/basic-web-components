import { assert } from 'chai';
import ChildrenContent from '../src/ChildrenContent';
import ContentItems from '../src/ContentItems';


class ContentItemsTest extends ContentItems(ChildrenContent(HTMLElement)) {}
document.registerElement('content-items-test', ContentItemsTest);


describe('ContentItems mixin', () => {

  it("returns contents as items", function() {
    let element = document.createElement('content-items-test');
    element.innerHTML = `<div>1</div><div>2</div>`;
    let items = element.items;
    assert.equal(items.length, 2);
    assert.equal(items[0].textContent, '1');
    assert.equal(items[1].textContent, '2');
  });

  it("filters auxiliary elements from items", function() {
    let element = document.createElement('content-items-test');
    element.innerHTML = `
      <div>1</div>
      <link>
      <script></script>
      <style></style>
      <template></template>
      <div>2</div>
    `;
    let items = element.items;
    assert.equal(items.length, 2);
    assert.equal(items[0].textContent, '1');
    assert.equal(items[1].textContent, '2');
  });

});
