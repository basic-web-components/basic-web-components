import { assert } from 'chai';
import renderArrayAsElements from '../src/renderArrayAsElements';


class ArrayAsElementsTest extends HTMLElement {

  get items() {
    return this._items;
  }
  set items(items) {
    this._items = items;
    renderArrayAsElements(items, this, (item, element) => {
      if (!element) {
        element = document.createElement('div');
      }
      element.textContent = item;
      return element;
    });
  }

}
customElements.define('array-as-elements-test', ArrayAsElementsTest);


describe("renderArrayAsElements", () => {

  it("creates elements for each item in the items array", () => {
    let element = document.createElement('array-as-elements-test');
    let items = [
      'One',
      'Two',
      'Three'
    ];
    element.items = items;
    let childNodes = element.childNodes;
    assert.equal(childNodes.length, 3);
    [].slice.call(childNodes).forEach((element, index) => {
      assert.equal(element.localName, 'div');
      assert.equal(element.textContent, items[index]);
    });
  });

  it("reuses existing elements when adding", () => {
    let element = document.createElement('array-as-elements-test');
    let items = [
      'One',
      'Two'
    ];
    element.items = items;
    let childNodes = element.childNodes;
    assert.equal(childNodes.length, 2);
    let child0 = childNodes[0];
    let child1 = childNodes[1];
    assert.equal(child0.textContent, 'One');
    assert.equal(child1.textContent, 'Two');
    items.push('Three');
    element.items = items;
    childNodes = element.childNodes;
    assert.equal(childNodes.length, 3);
    assert.equal(childNodes[0], child0);
    assert.equal(childNodes[1], child1);
    assert.equal(childNodes[2].textContent, 'Three');
  });

  it("removes extra elements when array shrinks", () => {
    let element = document.createElement('array-as-elements-test');
    let items = [
      'One',
      'Two',
      'Three'
    ];
    element.items = items;
    assert.equal(element.childNodes.length, 3);
    items.shift();
    element.items = items;
    assert.equal(element.childNodes.length, 2);
    assert.equal(element.childNodes[0].textContent, 'Two');
    assert.equal(element.childNodes[1].textContent, 'Three');
  });

});
