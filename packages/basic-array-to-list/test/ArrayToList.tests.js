import { assert } from 'chai';
import ArrayToList from '../src/ArrayToList'; // jshint ignore:line


describe("ArrayToList", () => {

  it("creates elements for each item in the items array", () => {
    let arrayToList = document.createElement('basic-array-to-list');
    arrayToList.renderItemAsElement = (item, element) => {
      element.textContent = item.toString();
    };
    let items = [
      'One',
      'Two',
      'Three'
    ];
    arrayToList.items = items;
    let elements = arrayToList.elements;
    assert.equal(elements.length, 3);
    elements.forEach((element, index) => {
      assert.equal(element.localName, 'div');
      assert.equal(element.textContent, items[index]);
    });
  });

});
