import { assert } from 'chai';
import DistributedChildren from '../src/DistributedChildren';
import ShadowTemplate from '../src/ShadowTemplate';


/*
 * Simple element using the DistributedChildren mixin.
 */
class ChildrenTest extends DistributedChildren(ShadowTemplate(HTMLElement)) {

  contentChanged() {
    this._saveTextContent = this.textContent;
    if (this.contentChangedHook) {
      this.contentChangedHook();
    }
  }

  get template() {
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
class ReprojectTest extends DistributedChildren(ShadowTemplate(HTMLElement)) {
  get template() {
    return `<children-test><slot></slot></children-test>`;
  }
}
customElements.define('reproject-test', ReprojectTest);


describe("DistributedChildren mixin", () => {

  let container;

  before(() => {
    container = document.getElementById('container');
  });

  afterEach(() => {
    container.innerHTML = '';
  });

  it("provides helpers to access direct children", () => {
    let fixture = document.createElement('children-test');
    let div1 = document.createElement('div');
    let text = document.createTextNode(' ');
    let div2 = document.createElement('div');
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
    let fixture = document.createElement('reproject-test');
    let div = document.createElement('div');
    div.textContent = 'aardvark';
    fixture.appendChild(div);
    // Wait for polyfill.
    setTimeout(() => {
      assert.equal(fixture.distributedTextContent, 'aardvark');
      assert.equal(fixture.distributedChildren.length, 1);
      assert.equal(fixture.distributedChildNodes.length, 1);
      assert.equal(fixture.distributedChildNodes[0], div);
      // Inner element should report same results.
      let inner = fixture.shadowRoot.querySelector('children-test');
      assert.equal(inner.distributedTextContent, 'aardvark');
      assert.equal(inner.distributedChildren.length, 1);
      assert.equal(inner.distributedChildNodes.length, 1);
      assert.equal(inner.distributedChildNodes[0], div);
      done();
    });
  });

});
