import { assert } from 'chai';
import flush from './flush';
import GenericMixin from '../src/GenericMixin';
import ShadowTemplateMixin from '../src/ShadowTemplateMixin';
import symbols from '../src/symbols';


class GenericTest extends GenericMixin(ShadowTemplateMixin(HTMLElement)) {
  get [symbols.template]() {
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
        <slot></slot>
      </template>
    `;
  }
}
customElements.define('generic-test', GenericTest);


describe("GenericMixin", function() {

  let container;

  before(() => {
    container = document.getElementById('container');
  });

  afterEach(() => {
    container.innerHTML = '';
  });

  it("turns on generic style by default", done => {
    const fixture = document.createElement('generic-test');
    container.appendChild(fixture);
    flush();
    assert(fixture.generic);
    assert.equal(fixture.getAttribute('generic'), '');
    const display = getComputedStyle(fixture).display;
    assert.equal(display, 'block');
    done();
  });

  it("exposes generic property to turn generic styling on/off", () => {
    const fixture = document.createElement('generic-test');
    container.appendChild(fixture);
    fixture.generic = false;
    flush();
    assert.equal(fixture.getAttribute('generic'), 'false');
    assert.equal(getComputedStyle(fixture).display, 'inline-block');
    fixture.generic = true;
    assert.equal(fixture.getAttribute('generic'), '');
    assert.equal(getComputedStyle(fixture).display, 'block');
  });

});
