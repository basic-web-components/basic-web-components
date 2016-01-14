import { assert } from 'chai';
import AttributeMarshalling from '../src/AttributeMarshalling';
import ItemsSelection from '../src/ItemsSelection';


class ItemsSelectionTest extends ItemsSelection(AttributeMarshalling(HTMLElement)) {
  indexOfItem(item) {
    return this.items.indexOf(item);
  }
  get items() {
    return [...this.children];
  }
}
document.registerElement('items-selection-test', ItemsSelectionTest);


describe("ItemsSelection mixin", () => {

  let container;

  before(() => {
    container = document.getElementById('container');
  });

  afterEach(() => {
    container.innerHTML = '';
  });

  it("has selectedItem initially null", () => {
    let element = document.createElement('items-selection-test');
    assert.isNull(element.selectedItem);
    assert.equal(element.selectedIndex, -1);
  });

  it("updates selectingIndex when selectedItem changes", () => {
    let element = createSampleElement();
    element.selectedIndex = 2;
    assert.equal(element.selectedItem, element.children[2]);
  });

  it("updates selectedItem when selectedIndex changes", () => {
    let element = createSampleElement();
    element.selectedItem = element.children[2];
    assert.equal(element.selectedIndex, 2);
  });

  it("can set selectedIndex in markup", done => {
    container.innerHTML = `
      <items-selection-test selected-index="0">
        <div></div>
      </items-selection-test>
    `;
    // Microtask gives polyfill time to upgrade element.
    Promise.resolve().then(() => {
      let list = container.querySelector('items-selection-test');
      let item = list.children[0];
      assert.equal(list.selectedItem, item);
      done();
    });
  });

  it("changing selection raises the selected-item-changed event", done => {
    let element = createSampleElement();
    element.addEventListener('selected-item-changed', () => {
      done();
    });
    container.appendChild(element);
    element.selectedIndex = 1;
  });

});

function createSampleElement() {
  let element = document.createElement('items-selection-test');
  ['Zero', 'One', 'Two'].forEach(text => {
    let div = document.createElement('div');
    div.textContent = text;
    element.appendChild(div);
  });
  return element;
}