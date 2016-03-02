import { assert } from 'chai';
import ArrayToItems from '../src/ArrayToItems';


class ArrayToItemsTest extends ArrayToItems(HTMLElement) {

  createElementForItem(item) {
    let element = document.createElement('div');
    element.textContent = item;
    return element;
  }

}
document.registerElement('array-to-items-test', ArrayToItemsTest);


describe("ArrayToItems", () => {

  it("creates elements for each item in the items array", () => {
    let fixture = document.createElement('array-to-items-test');
    let items = [
      'One',
      'Two',
      'Three'
    ];
    fixture.items = items;
    let elements = fixture.elements;
    assert.equal(elements.length, 3);
    elements.forEach((element, index) => {
      assert.equal(element.localName, 'div');
      assert.equal(element.textContent, items[index]);
    });
  });

});
