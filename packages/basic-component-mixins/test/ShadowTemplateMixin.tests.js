import { assert } from 'chai';
import symbols from '../src/symbols';
import ShadowTemplateMixin from '../src/ShadowTemplateMixin';


class MyElement extends HTMLElement {
  greet() {
    return `Hello!`;
  }
}
customElements.define('my-element', MyElement);

/* Element with a simple template */
class ElementWithStringTemplate extends ShadowTemplateMixin(HTMLElement) {
  get [symbols.template]() {
    return "Hello";
  }
}
customElements.define('element-with-string-template', ElementWithStringTemplate);


/* Element with a real template */
const template = document.createElement('template');
template.content.textContent = "Hello";
class ElementWithRealTemplate extends ShadowTemplateMixin(HTMLElement) {
  get [symbols.template]() {
    return template;
  }
}
customElements.define('element-with-real-template', ElementWithRealTemplate);


describe("ShadowTemplateMixin", () => {

  it("stamps string template into root", () => {
    const element = document.createElement('element-with-string-template');
    assert(element.shadowRoot);
    assert.equal(element.shadowRoot.textContent.trim(), "Hello");
  });

  it("stamps real template into root", () => {
    const element = document.createElement('element-with-real-template');
    assert(element.shadowRoot);
    assert.equal(element.shadowRoot.textContent.trim(), "Hello");
  });

});
