import { assert } from 'chai';
import AttributeMarshalling from '../src/AttributeMarshalling';
import SingleSelection from '../src/SingleSelection';


class SingleSelectionTest extends SingleSelection(AttributeMarshalling(HTMLElement)) {
  indexOfItem(item) {
    return this.items.indexOf(item);
  }
  get items() {
    // Convert children to array in a way IE 11 can handle.
    return Array.prototype.slice.call(this.children);
  }
}
customElements.define('items-selection-test', SingleSelectionTest);


describe("SingleSelection mixin", () => {

  let container;

  before(() => {
    container = document.getElementById('container');
  });

  afterEach(() => {
    container.innerHTML = '';
  });

  it("has selectedItem initially null", () => {
    const element = document.createElement('items-selection-test');
    assert.isNull(element.selectedItem);
    assert.equal(element.selectedIndex, -1);
  });

  it("updates selectingIndex when selectedItem changes", () => {
    const element = createSampleElement();
    element.selectedIndex = 2;
    assert.equal(element.selectedItem, element.children[2]);
  });

  it("updates selectedItem when selectedIndex changes", () => {
    const element = createSampleElement();
    element.selectedItem = element.children[2];
    assert.equal(element.selectedIndex, 2);
  });

  it("can set selectedIndex in markup", done => {
    container.innerHTML = `
      <items-selection-test selected-index="0">
        <div></div>
      </items-selection-test>
    `;
    // Timeout gives polyfill time to upgrade element.
    setTimeout(() => {
      const list = container.querySelector('items-selection-test');
      const item = list.children[0];
      assert.equal(list.selectedItem, item);
      done();
    });
  });

  it("changing selection raises the selected-item-changed event", done => {
    const element = createSampleElement();
    element.addEventListener('selected-item-changed', () => {
      done();
    });
    container.appendChild(element);
    element.selectedIndex = 1;
  });

  it("can advance the selection to the next item", () => {
    const element = createSampleElement();
    assert.equal(element.selectedIndex, -1);
    element.selectNext();
    assert.equal(element.selectedIndex, 0);
    element.selectNext();
    element.selectNext();
    assert.equal(element.selectedIndex, 2);
    element.selectNext(); // Moving past last item should have no effect.
    assert.equal(element.selectedIndex, 2);
  });

  it("can move the selection to the previous item", () => {
    const element = createSampleElement();
    assert.equal(element.selectedIndex, -1);
    element.selectPrevious();
    assert.equal(element.selectedIndex, 2); // last item
    element.selectPrevious();
    assert.equal(element.selectedIndex, 1);
  });

  it("can wrap the selection from the last to the first item", () => {
    const element = createSampleElement();
    element.selectionWraps = true;
    element.selectedIndex = 2;
    element.selectNext();
    assert.equal(element.selectedIndex, 0);
  });

});

function createSampleElement() {
  const element = document.createElement('items-selection-test');
  ['Zero', 'One', 'Two'].forEach(text => {
    const div = document.createElement('div');
    div.textContent = text;
    element.appendChild(div);
  });
  return element;
}