import { assert } from 'chai';
import AutosizeTextarea from '../src/AutosizeTextarea'; // jshint ignore:line


describe("AutosizeTextarea", () => {

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

  it("sets initial value from initial innerHTML", done => {
    container.innerHTML = '<basic-autosize-textarea>aardvark</basic-autosize-textarea>';
    let fixture = container.querySelector('basic-autosize-textarea');
    // Timeout gives time for: 1) polyfill to upgrade element, 2) contentChanged
    // to be fired.
    setTimeout(() => {
      // Yet another timeout because Edge seems to need two cycles to upgrade.
      setTimeout(() => {
        assert.equal(fixture.value, 'aardvark');
        done();
      });
    });
  });

  it("applies its value to the inner textarea", () => {
    let fixture = document.createElement('basic-autosize-textarea');
    fixture.value = 'beaver';
    assert(fixture.$.textBox.value, 'beaver');
  });

  it("updates value when innerHTML changes", done => {
    let fixture = document.createElement('basic-autosize-textarea');
    container.appendChild(fixture);
    fixture.innerHTML = 'chihuahua';
    // Use microtask to wait for mutation observer to pick up change.
    Promise.resolve().then(() => {
      assert.equal(fixture.value, 'chihuahua');
      done();
    });
  });

  it("sets minimumRows to 1 by default", () => {
    let fixture = document.createElement('basic-autosize-textarea');
    assert.equal(fixture.minimumRows, 1);
  });

  it("marshalls the minimum-rows attribute to the minimumRows property", done => {
    container.innerHTML = '<basic-autosize-textarea minimum-rows="10"></basic-autosize-textarea>';
    // Timeout gives polyfill time to upgrade element.
    setTimeout(() => {
      let fixture = container.querySelector('basic-autosize-textarea');
      assert.equal(fixture.minimumRows, 10);
      done();
    });
  });

  it("raises a value-changed event when its value changes", done => {
    let fixture = document.createElement('basic-autosize-textarea');
    container.appendChild(fixture);
    fixture.addEventListener('value-changed', event => {
      assert.equal(fixture.value, 'fox');
      done();
    });
    fixture.value = 'fox';
  });

  it("autosizes to fit its contents", done => {
    let fixture = document.createElement('basic-autosize-textarea');
    container.appendChild(fixture);
    // Timeout gives polyfill time to upgrade element.
    setTimeout(() => {
      // Original height should be sufficient to hold single line of text.
      let originalHeight = fixture.clientHeight;
      fixture.value = 'One\nTwo\nThree';
      // Height with three lines of text should be over twice as big.
      assert(fixture.clientHeight > originalHeight * 2);
      done();
    });
  });

  it("applies minimumRows when text isn't tall enough", done => {
    let fixture = document.createElement('basic-autosize-textarea');
    container.appendChild(fixture);
    // Timeout gives polyfill time to upgrade element.
    setTimeout(() => {
      // Original height should be sufficient to hold single line of text.
      let originalHeight = fixture.clientHeight;
      fixture.minimumRows = 3;
      // Timeout gives time to apply styling.
      setTimeout(() => {
        // Height with minimumRows=3 should be over twice as big.
        assert(fixture.clientHeight > originalHeight * 2);
        done();
      });
    });
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
