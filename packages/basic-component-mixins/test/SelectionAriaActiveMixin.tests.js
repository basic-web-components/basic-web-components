import { assert } from 'chai';
import Collective from '../src/Collective';
import SelectionAriaActiveMixin from '../src/SelectionAriaActiveMixin';
import SingleSelectionMixin from '../src/SingleSelectionMixin';
import symbols from '../src/symbols';


class SelectionAriaActiveTest extends SelectionAriaActiveMixin(SingleSelectionMixin(HTMLElement)) {
  get items() {
    // Convert children to array in a way IE 11 can handle.
    return Array.prototype.slice.call(this.children);
  }
}
customElements.define('selection-aria-active-test', SelectionAriaActiveTest);


describe("SelectionAriaActiveMixin", () => {

  let container;

  before(() => {
    container = document.getElementById('container');
  });

  afterEach(() => {
    container.innerHTML = '';
  });

  it("assigns default roles to list and items, and default IDs to items without IDs", () => {
    const list = document.createElement('selection-aria-active-test');
    list.id = 'test'; // Will be used as basis for assigned item IDs.
    const item1 = document.createElement('div');
    item1.id = 'explicitID';
    list.appendChild(item1);
    const item2 = document.createElement('div');
    // Leave item2 without an ID.
    list.appendChild(item2);
    // Initialize items using private API.
    list[symbols.itemAdded](item1);
    list[symbols.itemAdded](item2);
    container.append(list);
    assert.equal(list.getAttribute('role'), 'listbox'); // default role
    assert.equal(item1.id, 'explicitID'); // unchanged
    assert.equal(item1.getAttribute('role'), 'option'); // default role
    assert.equal(item2.id, '_testOption0'); // implicitly assigned ID
    assert.equal(item2.getAttribute('role'), 'option'); // default role
  });

  it("indicates the selection state on both the list and the item", () => {
    const list = document.createElement('selection-aria-active-test');
    const item1 = document.createElement('div');
    list.appendChild(item1);
    const item2 = document.createElement('div');
    list.appendChild(item2);
    // Initialize items using private API.
    list[symbols.itemAdded](item1);
    list[symbols.itemAdded](item2);
    list.selectedItem = item1;
    assert.equal(list.getAttribute('aria-activedescendant'), item1.id);
    assert.equal(item1.getAttribute('aria-selected'), 'true');
    assert.equal(item2.getAttribute('aria-selected'), 'false');
    list.selectedItem = item2;
    assert.equal(list.getAttribute('aria-activedescendant'), item2.id);
    assert.equal(item1.getAttribute('aria-selected'), 'false');
    assert.equal(item2.getAttribute('aria-selected'), 'true');
  });

  it("assigns a default role of 'listbox'", () => {
    const noRole = document.createElement('selection-aria-active-test');
    container.appendChild(noRole);
    assert.equal(noRole.getAttribute('role'), 'listbox');
  });

  it("doesn't overwrite an explicit role", () => {
    const hasRole = document.createElement('selection-aria-active-test');
    hasRole.setAttribute('role', 'tabs');
    container.appendChild(hasRole);
    assert.equal(hasRole.getAttribute('role'), 'tabs');
  });

  it("promotes the role of a collective and sets inner roles to 'none'", () => {
    const outer = document.createElement('selection-aria-active-test');
    const inner = document.createElement('selection-aria-active-test');
    outer.setAttribute('id', 'outer');
    inner.setAttribute('id', 'inner');
    inner.setAttribute('role', 'tabs');
    outer.appendChild(inner);
    container.appendChild(outer); // Add to document first.
    new Collective(outer, inner);
    assert.equal(outer.getAttribute('role'), 'tabs');
    assert.equal(inner.getAttribute('role'), 'none');
  });

});
