import { assert } from 'chai';
import OpenClose from '../src/OpenClose';


class OpenCloseTest extends OpenClose(HTMLElement) {}
customElements.define('open-close-test', OpenCloseTest);


describe("OpenClose mixin", () => {

  let container;

  before(() => {
    container = document.getElementById('container');
  });

  afterEach(() => {
    container.innerHTML = '';
  });

  it("is initally opened", function() {
    let element = document.createElement('open-close-test');
    assert(!element.closed);
  });

  it("can be closed", function() {
    let element = document.createElement('open-close-test');
    element.close();
    assert(element.closed);
  });

  it("can be opened", function() {
    let element = document.createElement('open-close-test');
    element.close();
    assert(element.closed);
    element.open();
    assert(!element.closed);
  });

  it("can be toggled", function() {
    let element = document.createElement('open-close-test');
    element.toggle();
    assert(element.closed);
    element.toggle();
    assert(!element.closed);
  });

  it("renders state as a CSS class and ARIA attribute", done => {
    let element = document.createElement('open-close-test');
    container.appendChild(element);
    // Timeout gives polyfill time to upgrade element.
    setTimeout(() => {
      assert(element.classList.contains('basic-opened'));
      assert(!element.classList.contains('basic-closed'));
      assert.equal(element.getAttribute('aria-expanded'), 'true');
      element.close();
      assert(!element.classList.contains('basic-opened'));
      assert(element.classList.contains('basic-closed'));
      assert.equal(element.getAttribute('aria-expanded'), 'false');
      done();
    });
  });

});
