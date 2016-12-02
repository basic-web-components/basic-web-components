import { assert } from 'chai';
import DistributedChildrenMixin from '../src/DistributedChildrenMixin';
import DistributedChildrenContentMixin from '../src/DistributedChildrenContentMixin';
import ContentItemsMixin from '../src/ContentItemsMixin';


class ContentAsItemsTest extends ContentItemsMixin(DistributedChildrenContentMixin(
  DistributedChildrenMixin(HTMLElement)
)) {}
customElements.define('content-items-test', ContentAsItemsTest);


describe("ContentItemsMixin", () => {

  it("returns contents as items", function() {
    const element = document.createElement('content-items-test');
    element.innerHTML = `<div>1</div><div>2</div>`;
    const items = element.items;
    assert.equal(items.length, 2);
    assert.equal(items[0].textContent, '1');
    assert.equal(items[1].textContent, '2');
  });

  it("filters auxiliary elements from items", function() {
    const element = document.createElement('content-items-test');
    element.innerHTML = `
      <div>1</div>
      <link>
      <script></script>
      <style></style>
      <template></template>
      <div>2</div>
    `;
    const items = element.items;
    assert.equal(items.length, 2);
    assert.equal(items[0].textContent, '1');
    assert.equal(items[1].textContent, '2');
  });

});
