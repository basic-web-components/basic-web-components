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
document.registerElement('keyboard-test', KeyboardTest);


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
    var event = new KeyboardEvent('keydown');
    Object.defineProperties(event, {
      key: { value: 'Enter' },
      keyCode: { value: 13 },
      which: { value: 13 }
    });
    fixture.dispatchEvent(event);
  });

});
