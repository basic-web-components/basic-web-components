import { assert } from 'chai';
import ShadowTemplate from '../src/ShadowTemplate';


/* Element with a simple template */
class ElementWithStringTemplate extends ShadowTemplate(HTMLElement) {
  get template() {
    return "Hello";
  }
}
document.registerElement('element-with-string-template', ElementWithStringTemplate);


/* Element with a real template */
let template = document.createElement('template');
template.content.textContent = "Hello";
class ElementWithRealTemplate extends ShadowTemplate(HTMLElement) {
  get template() {
    return template;
  }
}
document.registerElement('element-with-real-template', ElementWithRealTemplate);


describe("ShadowTemplate mixin", () => {

  it("stamps string template into root", () => {
    let element = document.createElement('element-with-string-template');
    assert(element.shadowRoot);
    assert.equal(element.shadowRoot.textContent.trim(), "Hello");
  });

  it("stamps real template into root", () => {
    let element = document.createElement('element-with-real-template');
    assert(element.shadowRoot);
    assert.equal(element.shadowRoot.textContent.trim(), "Hello");
  });

});
