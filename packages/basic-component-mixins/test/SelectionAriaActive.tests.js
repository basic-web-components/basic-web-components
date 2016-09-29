import { assert } from 'chai';
import SelectionAriaActive from '../src/SelectionAriaActive';
import SingleSelection from '../src/SingleSelection';


class SelectionAriaActiveTest extends SelectionAriaActive(SingleSelection(HTMLElement)) {
  get items() {
    // Convert children to array in a way IE 11 can handle.
    return Array.prototype.slice.call(this.children);
  }
}
customElements.define('selection-aria-active-test', SelectionAriaActiveTest);


describe("SelectionAriaActive mixin", () => {

  it("assigns default roles to list and items, and default IDs to items without IDs", () => {
    let list = document.createElement('selection-aria-active-test');
    list.id = 'test'; // Will be used as basis for assigned item IDs.
    let item1 = document.createElement('div');
    item1.id = 'explicitID';
    list.appendChild(item1);
    let item2 = document.createElement('div');
    // Leave item2 without an ID.
    list.appendChild(item2);
    // Initialize items
    list.itemAdded(item1);
    list.itemAdded(item2);
    assert.equal(list.getAttribute('role'), 'listbox'); // default role
    assert.equal(item1.id, 'explicitID'); // unchanged
    assert.equal(item1.getAttribute('role'), 'option'); // default role
    assert.equal(item2.id, '_testOption0'); // implicitly assigned ID
    assert.equal(item2.getAttribute('role'), 'option'); // default role
  });

  it("indicates the selection state on both the list and the item", () => {
    let list = document.createElement('selection-aria-active-test');
    let item1 = document.createElement('div');
    list.appendChild(item1);
    let item2 = document.createElement('div');
    list.appendChild(item2);
    // Initialize items
    list.itemAdded(item1);
    list.itemAdded(item2);
    list.selectedItem = item1;
    assert.equal(list.getAttribute('aria-activedescendant'), item1.id);
    assert.equal(item1.getAttribute('aria-selected'), 'true');
    assert.equal(item2.getAttribute('aria-selected'), 'false');
    list.selectedItem = item2;
    assert.equal(list.getAttribute('aria-activedescendant'), item2.id);
    assert.equal(item1.getAttribute('aria-selected'), 'false');
    assert.equal(item2.getAttribute('aria-selected'), 'true');
  });

});
