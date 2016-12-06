import { assert } from 'chai';
import KeyboardMixin from '../src/KeyboardMixin';
import symbols from '../src/symbols';


class KeyboardTest extends KeyboardMixin(HTMLElement) {
  [symbols.keydown](event) {
    if (super.keydown) { super.keydown(event); }
    if (this.keydownHook) {
      this.keydownHook(event);
    }
  }
}
customElements.define('keyboard-test', KeyboardTest);


describe("KeyboardMixin", () => {

  let container;

  before(() => {
    container = document.getElementById('container');
  });

  afterEach(() => {
    container.innerHTML = '';
  });

  it("assigns a tabindex of 0 by default", () => {
    const fixture = document.createElement('keyboard-test');
    container.appendChild(fixture);
    assert.equal(fixture.getAttribute('tabindex'), '0');
  });

  it("doesn't overwrite an explicit tabindex", () => {
    const fixture = document.createElement('keyboard-test');
    fixture.setAttribute('tabindex', '1');
    container.appendChild(fixture);
    assert.equal(fixture.getAttribute('tabindex'), '1');
  });

  it("listens to keydown and fires the keydown() method", done => {
    const fixture = document.createElement('keyboard-test');
    fixture.keydownHook = (event) => {
      assert.equal(event.keyCode, 13);
      done();
    };
    container.appendChild(fixture);
    let event;
    try {
      event = new window.KeyboardEvent('keydown');
    } catch (e) {
      // Stupid IE 11 doesn't support the KeyboardEvent constructor.
      event = document.createEvent('KeyboardEvent');
      event.initKeyboardEvent(
        'keydown',
        true, // bubbles
        true, // cancelable
        window, // view
        'Enter', // key
        0, // location
        '', // modifiers
        false, // repeat
        '' // locale
      );
    }
    // HACK: Polyfill fails to wrap the event on its own.
    // event = window.wrap(event);
    Object.defineProperties(event, {
      key: { value: 'Enter' },
      keyCode: { value: 13 },
      which: { value: 13 }
    });
    fixture.dispatchEvent(event);
  });

});
