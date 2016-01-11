import { assert } from 'chai';
import AutosizeTextarea from '../src/AutosizeTextarea'; // jshint ignore:line


describe('AutosizeTextarea', () => {

  let container;

  before(() => {
    container = document.getElementById('container');
  });

  afterEach(() => {
    container.innerHTML = '';
  });

  it("can be instantiated", () => {
    let fixture = document.createElement('basic-autosize-textarea');
    container.appendChild(fixture);
    assert(fixture);
  });

  it("sets initial value from initial innerHTML", () => {
    container.innerHTML = '<basic-autosize-textarea>Hello</basic-autosize-textarea>';
    let fixture = container.querySelector('basic-autosize-textarea');
    assert.equal(fixture.value, 'Hello');
  });

  it("applies its value to the inner textarea", () => {
    let fixture = document.createElement('basic-autosize-textarea');
    fixture.value = 'Hello';
    assert(fixture.$.textBox.value, 'Hello');
  });

  it("updates value when innerHTML changes", done => {
    let fixture = document.createElement('basic-autosize-textarea');
    container.appendChild(fixture);
    fixture.value = 'Initial value';
    let newContent = 'New value';
    fixture.innerHTML = newContent;
    setTimeout(() => {
      assert.equal(fixture.value, newContent);
      done();
    });
  });

  it("sets minimumRows to 1 by default", () => {
    let fixture = document.createElement('basic-autosize-textarea');
    assert.equal(fixture.minimumRows, 1);
  });

  it("marshalls the minimum-rows attribute to the minimumRows property", () => {
    container.innerHTML = '<basic-autosize-textarea minimum-rows="10">Hello</basic-autosize-textarea>';
    let fixture = container.querySelector('basic-autosize-textarea');
    assert.equal(fixture.minimumRows, 10);
  });

  it("raises a value-changed event when its value changes", done => {
    container.innerHTML = '<basic-autosize-textarea minimum-rows="10">Hello</basic-autosize-textarea>';
    let fixture = container.querySelector('basic-autosize-textarea');
    fixture.addEventListener('value-changed', event => {
      assert.equal(fixture.value, 'Goodbye');
      done();
    });
    fixture.value = 'Goodbye';
  });

  it("autosizes to fit its contents", () => {
    let fixture = document.createElement('basic-autosize-textarea');
    container.appendChild(fixture);
    // Original height should be sufficient to hold single line of text.
    let originalHeight = fixture.clientHeight;
    fixture.value = 'One\nTwo\nThree';
    // Height with three lines of text should be over twice as big.
    assert(fixture.clientHeight > originalHeight * 2);
  });

  it("applies minimumRows when text isn't tall enough", () => {
    let fixture = document.createElement('basic-autosize-textarea');
    container.appendChild(fixture);
    // Original height should be sufficient to hold single line of text.
    let originalHeight = fixture.clientHeight;
    fixture.minimumRows = 3;
    // Height with minimumRows=3 should be over twice as big.
    assert(fixture.clientHeight > originalHeight * 2);
  });

  it("autosizes works when its text content is HTML", () => {
    let fixture = document.createElement('basic-autosize-textarea');
    container.appendChild(fixture);
    let originalHeight = fixture.clientHeight;
    fixture.value = `<html>\n<body>\n<p>\nThis is a test\n</p>\n<div>\nSome more tests\n</div>\n</body>\n</html>`;
    assert(fixture.clientHeight > originalHeight * 2);
  });

  it("autosizes works with text wrapping", () => {
    let fixture = document.createElement('basic-autosize-textarea');
    fixture.style.width = '400px';
    container.appendChild(fixture);
    let originalHeight = fixture.clientHeight;
    fixture.value = "Lots of words to force wrapping. Lots of words to force wrapping. Lots of words to force wrapping. Lots of words to force wrapping. Lots of words to force wrapping. Lots of words to force wrapping. Lots of words to force wrapping. Lots of words to force wrapping. Lots of words to force wrapping.";
    assert(fixture.clientHeight > originalHeight * 2);
  });

  it("autosizes works with long string with no whitespace", () => {
    let fixture = document.createElement('basic-autosize-textarea');
    fixture.style.width = '400px';
    container.appendChild(fixture);
    let originalHeight = fixture.clientHeight;
    fixture.value = "abcdefghijklmnopqrstuvwxyz.,;:+-abcdefghijklmnopqrstuvwxyz.,;:+-abcdefghijklmnopqrstuvwxyz.,;:+-abcdefghijklmnopqrstuvwxyz.,;:+-abcdefghijklmnopqrstuvwxyz.,;:+-abcdefghijklmnopqrstuvwxyz.,;:+-abcdefghijklmnopqrstuvwxyz.,;:+-abcdefghijklmnopqrstuvwxyz.,;:+-";
    assert(fixture.clientHeight > originalHeight * 2);
  });

  it("applies its placeholder property to the inner textarea", () => {
    let fixture = document.createElement('basic-autosize-textarea');
    fixture.placeholder = 'Placeholder';
    assert.equal(fixture.$.textBox.placeholder, 'Placeholder');
    assert.notEqual(fixture.value, 'Placeholder');
  });

});
