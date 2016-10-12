import { assert } from 'chai';
import AttributeMarshalling from '../src/AttributeMarshalling';


let defaultPropertyValue;
let defaultClass;


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


/* Element that adds a class to itself */
class ElementWithClass extends AttributeMarshalling(HTMLElement) {
  constructor() {
    super();
    if (typeof defaultClass !== 'undefined') {
      this.reflectClass(defaultClass, true);
    }
  }
}
customElements.define('element-with-class', ElementWithClass);


describe("AttributeMarshalling mixin", () => {

  let container;

  before(() => {
    container = document.getElementById('container');
    defaultPropertyValue = undefined;
    defaultClass = undefined;
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

  it("defers reflection of attribute during constructor until connected to document", () => {
    defaultPropertyValue = true;
    let element = document.createElement('element-with-custom-property');
    assert.isNull(element.getAttribute('custom-property'));
    container.appendChild(element);
    assert.equal(element.getAttribute('custom-property'), 'true');
  });

  it("reflects class immediately if connected to document", () => {
    let element = document.createElement('element-with-class');
    assert.equal(element.classList.length, 0);
    container.appendChild(element);
    element.reflectClass('custom', true);
    assert.equal(element.classList.length, 1);
    assert.equal(element.classList[0], ['custom']);
  });

  it("defers reflection of class during constructor until connected to document", () => {
    defaultClass = 'custom';
    let element = document.createElement('element-with-class');
    assert.equal(element.classList.length, 0);
    container.appendChild(element);
    assert.equal(element.classList.length, 1);
    assert.equal(element.classList[0], ['custom']);
  });

});
