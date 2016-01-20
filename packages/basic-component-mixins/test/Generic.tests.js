import { assert } from 'chai';
import ShadowTemplate from '../src/ShadowTemplate';
import Generic from '../src/Generic';


class GenericTest extends Generic(ShadowTemplate(HTMLElement)) {
  get template() {
    return `
      <style>
      :host {
        display: inline-block;
      }

      :host([generic=""]) {
        display: block;
      }
      </style>
      <template>
        <content></content>
      </template>
    `;
  }
}
document.registerElement('generic-test', GenericTest);


describe("Generic mixin", function() {

  let container;

  before(() => {
    container = document.getElementById('container');
  });

  afterEach(() => {
    container.innerHTML = '';
  });

  it("turns on generic style by default", () => {
    let fixture = document.createElement('generic-test');
    container.appendChild(fixture);
    assert(fixture.generic);
    let display = getComputedStyle(fixture).display;
    assert.equal(display, 'block');
  });

  it("exposes generic property to turn generic styling on/off", () => {
    let fixture = document.createElement('generic-test');
    container.appendChild(fixture);
    fixture.generic = false;
    assert.equal(getComputedStyle(fixture).display, 'inline-block');
    fixture.generic = true;
    assert.equal(getComputedStyle(fixture).display, 'block');
  });

});
