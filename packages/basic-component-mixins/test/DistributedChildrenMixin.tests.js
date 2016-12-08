import { assert } from 'chai';
import DistributedChildrenMixin from '../src/DistributedChildrenMixin';
import ShadowTemplateMixin from '../src/ShadowTemplateMixin';
import symbols from '../src/symbols';


/*
 * Simple element using the DistributedChildrenMixin mixin.
 */
class ChildrenTest extends DistributedChildrenMixin(ShadowTemplateMixin(HTMLElement)) {
  get [symbols.template]() {
    return `
      <div id="static">This is static content</div>
      <slot></slot>
    `;
  }
}
customElements.define('children-test', ChildrenTest);


/*
 * Element containing an instance of the above, so we can test reprojection.
 */
class ReprojectTest extends DistributedChildrenMixin(ShadowTemplateMixin(HTMLElement)) {
  get [symbols.template]() {
    return `<children-test><slot></slot></children-test>`;
  }
}
customElements.define('reproject-test', ReprojectTest);


describe("DistributedChildrenMixin", () => {

  let container;

  before(() => {
    container = document.getElementById('container');
  });

  afterEach(() => {
    container.innerHTML = '';
  });

  it("provides helpers to access direct children", () => {
    const fixture = document.createElement('children-test');
    const div1 = document.createElement('div');
    const text = document.createTextNode(' ');
    const div2 = document.createElement('div');
    div1.textContent = 'Hello';
    div2.textContent = 'World';
    fixture.appendChild(div1);
    fixture.appendChild(text);
    fixture.appendChild(div2);
    assert.equal(fixture.distributedTextContent, 'Hello World');
    assert.equal(fixture.distributedChildren.length, 2);
    assert.equal(fixture.distributedChildNodes.length, 3);
    assert.equal(fixture.distributedChildNodes[2], div2);
  });

  it("provides helpers to access reprojected children", done => {
    const fixture = document.createElement('reproject-test');
    const div = document.createElement('div');
    div.textContent = 'aardvark';
    fixture.appendChild(div);
    // Wait for polyfill.
    setTimeout(() => {
      assert.equal(fixture.distributedTextContent, 'aardvark');
      assert.equal(fixture.distributedChildren.length, 1);
      assert.equal(fixture.distributedChildNodes.length, 1);
      assert.equal(fixture.distributedChildNodes[0], div);
      // Inner element should report same results.
      const inner = fixture.shadowRoot.querySelector('children-test');
      assert.equal(inner.distributedTextContent, 'aardvark');
      assert.equal(inner.distributedChildren.length, 1);
      assert.equal(inner.distributedChildNodes.length, 1);
      assert.equal(inner.distributedChildNodes[0], div);
      done();
    });
  });

});
