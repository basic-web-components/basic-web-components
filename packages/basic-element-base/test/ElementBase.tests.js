import { assert } from 'chai';
import ElementBase from '../src/ElementBase.js';


/* Simple base element with template and custom createdCallback. */
class SimpleElementBaseSubclass extends ElementBase {

  constructor() {
    super();
    // Make sure mixins are calling super().
    this.customCreatedCallbackInvoked = true;
  }

  get template() {
    return "Hello";
  }

}
customElements.define('simple-element-base-subclass', SimpleElementBaseSubclass);


describe("ElementBase component", () => {

  it("supports template", () => {
    const element = document.createElement('simple-element-base-subclass');
    assert(element.customCreatedCallbackInvoked);
    assert.equal(element.shadowRoot.textContent.trim(), "Hello");
  });

});
