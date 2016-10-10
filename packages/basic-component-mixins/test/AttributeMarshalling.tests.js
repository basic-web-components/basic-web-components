import { assert } from 'chai';
import microtask from '../src/microtask';
import AttributeMarshalling from '../src/AttributeMarshalling';


let defaultPropertyValue;


/* Element with camelCase property name */
class ElementWithCustomProperty extends AttributeMarshalling(HTMLElement) {

  constructor() {
    super();
    if (typeof defaultPropertyValue !== 'undefined') {
      this.customProperty = defaultPropertyValue;
    }
  }

  get customProperty() {
    return this._customProperty;
  }
  set customProperty(value) {
    this._customProperty = value;
    this.reflectAttribute('custom-property', value);
  }

}
customElements.define('element-with-custom-property', ElementWithCustomProperty);

describe("AttributeMarshalling mixin", () => {

  let container;

  before(() => {
    container = document.getElementById('container');
    defaultPropertyValue = undefined;
  });

  afterEach(() => {
    container.innerHTML = '';
  });

  it("defines observedAttributes for all custom property setters", () => {
    let observedAttributes = ElementWithCustomProperty.observedAttributes;
    assert.deepEqual(observedAttributes, ['custom-property']);
  });

  it("marshals hyphenated attribute to corresponding camelCase property", () => {
    let element = document.createElement('element-with-custom-property');
    assert.isUndefined(element.customProperty);
    element.setAttribute('custom-property', "Hello");
    assert.equal(element.customProperty, "Hello");
  });

  it("reflects property to attribute immediately if connected to document", () => {
    let element = document.createElement('element-with-custom-property');
    assert.isNull(element.getAttribute('custom-property'));
    container.appendChild(element);
    element.customProperty = true;
    assert.equal(element.getAttribute('custom-property'), 'true');
  });

  it("defers reflection of attribute during constructor", done => {
    defaultPropertyValue = true;
    let element = document.createElement('element-with-custom-property');
    assert.isNull(element.getAttribute('custom-property'));
    microtask(() => {
      assert.equal(element.getAttribute('custom-property'), 'true');
      done();
    });
  });

});
