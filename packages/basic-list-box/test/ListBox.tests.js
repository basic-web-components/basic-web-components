import { assert } from 'chai';
import ListBox from '../src/ListBox'; // jshint ignore:line
import microtask from '../../basic-component-mixins/src/microtask';


describe("ListBox", () => {

  it("defines a value property equivalent to text of selectedItem", done => {
    let listBox = createSampleListBox();
    microtask(() => {
      assert.equal(listBox.value, '');
      listBox.selectedIndex = 2;
      assert.equal(listBox.value, 'Two');
      listBox.value = 'One';
      assert.equal(listBox.selectedIndex, 1);
      done();
    });
  });

});

function createSampleListBox() {
  let element = document.createElement('basic-list-box');
  ['Zero', 'One', 'Two'].forEach(text => {
    let div = document.createElement('div');
    div.textContent = text;
    element.appendChild(div);
  });
  return element;
}
