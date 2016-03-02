import { assert } from 'chai';
import renderArrayAsElements from '../src/renderArrayAsElements';


class ArrayAsElementsTest extends HTMLElement {

  get items() {
    return this._items;
  }
  set items(items) {
    this._items = items;
    renderArrayAsElements(items, this, item => {
      let element = document.createElement('div');
      element.textContent = item;
      return element;
    });
  }

}
document.registerElement('array-as-elements-test', ArrayAsElementsTest);


describe("renderArrayAsElements", () => {

  it("creates elements for each item in the items array", () => {
    let fixture = document.createElement('array-as-elements-test');
    let items = [
      'One',
      'Two',
      'Three'
    ];
    fixture.items = items;
    let elements = fixture.childNodes;
    assert.equal(elements.length, 3);
    elements.forEach((element, index) => {
      assert.equal(element.localName, 'div');
      assert.equal(element.textContent, items[index]);
    });
  });

});
