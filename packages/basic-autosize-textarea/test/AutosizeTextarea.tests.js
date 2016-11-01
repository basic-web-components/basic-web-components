import { assert } from 'chai';
import AutosizeTextarea from '../src/AutosizeTextarea'; // jshint ignore:line
import flush from '../../basic-component-mixins/test/flush';
import microtask from '../../basic-component-mixins/src/microtask';


describe("AutosizeTextarea", () => {

  let container;

  before(() => {
    container = document.getElementById('container');
  });

  afterEach(() => {
    container.innerHTML = '';
  });

  it("can be instantiated", () => {
    const fixture = document.createElement('basic-autosize-textarea');
    container.appendChild(fixture);
    assert(fixture);
  });

  it("sets initial value from initial innerHTML", done => {
    container.innerHTML = '<basic-autosize-textarea>aardvark</basic-autosize-textarea>';
    const fixture = container.querySelector('basic-autosize-textarea');
    flush();
    // Give contentChanged time to fire.
    microtask(() => {
      assert.equal(fixture.value, 'aardvark');
      done();
    });
  });

  it("applies its value to the inner textarea", () => {
    const fixture = document.createElement('basic-autosize-textarea');
    fixture.value = 'beaver';
    assert(fixture.inner.value, 'beaver');
  });

  it("updates value when innerHTML changes", done => {
    const fixture = document.createElement('basic-autosize-textarea');
    container.appendChild(fixture);
    fixture.innerHTML = 'chihuahua';
    flush();
    // Give contentChanged time to fire.
    microtask(() => {
      assert.equal(fixture.value, 'chihuahua');
      done();
    });
  });

  it("sets minimumRows to 1 by default", () => {
    const fixture = document.createElement('basic-autosize-textarea');
    assert.equal(fixture.minimumRows, 1);
  });

  it("marshalls the minimum-rows attribute to the minimumRows property", () => {
    container.innerHTML = '<basic-autosize-textarea minimum-rows="10"></basic-autosize-textarea>';
    flush();
    const fixture = container.querySelector('basic-autosize-textarea');
    assert.equal(fixture.minimumRows, 10);
  });

  it("raises a value-changed event when its value changes", done => {
    const fixture = document.createElement('basic-autosize-textarea');
    container.appendChild(fixture);
    fixture.addEventListener('value-changed', event => {
      assert.equal(fixture.value, 'fox');
      done();
    });
    fixture.value = 'fox';
  });

  it("autosizes to fit its contents", () => {
    const fixture = document.createElement('basic-autosize-textarea');
    container.appendChild(fixture);
    flush();
    const originalHeight = fixture.clientHeight;
    fixture.value = 'One\nTwo\nThree';
    // Height with three lines of text should be over twice as big.
    flush();
    assert(fixture.clientHeight > originalHeight * 2);
  });

  it("applies minimumRows when text isn't tall enough", () => {
    const fixture = document.createElement('basic-autosize-textarea');
    container.appendChild(fixture);
    flush();
    // Original height should be sufficient to hold single line of text.
    const originalHeight = fixture.clientHeight;
    fixture.minimumRows = 3;
    flush();
    // Height with minimumRows=3 should be over twice as big.
    assert(fixture.clientHeight > originalHeight * 2);
  });

  it("autosizes works when its text content is HTML", () => {
    const fixture = document.createElement('basic-autosize-textarea');
    container.appendChild(fixture);
    flush();
    const originalHeight = fixture.clientHeight;
    fixture.value = `<html>\n<body>\n<p>\nThis is a test\n</p>\n<div>\nSome more tests\n</div>\n</body>\n</html>`;
    assert(fixture.clientHeight > originalHeight * 2);
  });

  it("autosizes works with text wrapping", () => {
    const fixture = document.createElement('basic-autosize-textarea');
    fixture.style.width = '400px';
    container.appendChild(fixture);
    flush();
    const originalHeight = fixture.clientHeight;
    fixture.value = "Lots of words to force wrapping. Lots of words to force wrapping. Lots of words to force wrapping. Lots of words to force wrapping. Lots of words to force wrapping. Lots of words to force wrapping. Lots of words to force wrapping. Lots of words to force wrapping. Lots of words to force wrapping.";
    assert(fixture.clientHeight > originalHeight * 2);
  });

  it("autosizes works with long string with no whitespace", () => {
    const fixture = document.createElement('basic-autosize-textarea');
    fixture.style.width = '400px';
    container.appendChild(fixture);
    flush();
    const originalHeight = fixture.clientHeight;
    fixture.value = "abcdefghijklmnopqrstuvwxyz.,;:+-abcdefghijklmnopqrstuvwxyz.,;:+-abcdefghijklmnopqrstuvwxyz.,;:+-abcdefghijklmnopqrstuvwxyz.,;:+-abcdefghijklmnopqrstuvwxyz.,;:+-abcdefghijklmnopqrstuvwxyz.,;:+-abcdefghijklmnopqrstuvwxyz.,;:+-abcdefghijklmnopqrstuvwxyz.,;:+-";
    assert(fixture.clientHeight > originalHeight * 2);
  });

  it("applies its placeholder property to the inner textarea", () => {
    const fixture = document.createElement('basic-autosize-textarea');
    fixture.placeholder = 'Placeholder';
    assert.equal(fixture.inner.placeholder, 'Placeholder');
    assert.notEqual(fixture.value, 'Placeholder');
  });

});
