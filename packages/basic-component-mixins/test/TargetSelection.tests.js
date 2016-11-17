import { assert } from 'chai';
import SingleSelection from '../src/SingleSelection';
import TargetSelection from '../src/TargetSelection';


const base = TargetSelection(HTMLElement);
class TargetSelectionTest extends base {
  get target() {
    return this._target;
  }
  set target(value) {
    this._target = value;
    if ('target' in base.prototype) { super.target = value; }
  }
}
customElements.define('target-selection-test', TargetSelectionTest);

class TargetSelectionTarget extends SingleSelection(HTMLElement) {
  get items() {
    // Convert children to array in a way IE 11 can handle.
    return Array.prototype.slice.call(this.children);
  }
}
customElements.define('target-selection-target', TargetSelectionTarget);

describe("TargetSelection mixin", () => {

  let outer;
  let inner;
  let items;

  before(() => {
    outer = document.createElement('target-selection-test');
    inner = document.createElement('target-selection-target');
    items = ['Zero', 'One', 'Two'].map(text => {
      const item = document.createElement('div');
      item.textContent = text;
      return item;
    });
    items.forEach(item => inner.appendChild(item));
    outer.target = inner;
  });

  it("setting target selection updates own selection", () => {
    assert.equal(outer.selectedIndex, -1);
    assert.equal(outer.selectedItem, null);
    inner.selectedIndex = 0;
    assert.equal(outer.selectedIndex, 0);
    assert.equal(outer.selectedItem, items[0]);
  });

  it("setting own selection updates target selection", () => {
    outer.selectedIndex = 0;
    assert.equal(inner.selectedIndex, 0);
    outer.selectedItem = items[1];
    assert.equal(inner.selectedItem, items[1]);
  });

});
