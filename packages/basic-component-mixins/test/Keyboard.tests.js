import { assert } from 'chai';
import Keyboard from '../src/Keyboard';


class KeyboardTest extends Keyboard(HTMLElement) {
  keydown(event) {
    if (super.keydown) { super.keydown(event); }
    if (this.keydownHook) {
      this.keydownHook(event);
    }
  }
}
customElements.define('keyboard-test', KeyboardTest);


describe("Keyboard mixin", () => {

  let container;

  before(() => {
    container = document.getElementById('container');
  });

  afterEach(() => {
    container.innerHTML = '';
  });

  it("listens to keydown and fires the keydown() method", done => {
    let fixture = document.createElement('keyboard-test');
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
    event = window.wrap(event);
    Object.defineProperties(event, {
      key: { value: 'Enter' },
      keyCode: { value: 13 },
      which: { value: 13 }
    });
    fixture.dispatchEvent(event);
  });

});
