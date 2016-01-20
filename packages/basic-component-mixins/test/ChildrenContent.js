import { assert } from 'chai';
import ChildrenContent from '../src/ChildrenContent';
import ShadowTemplate from '../src/ShadowTemplate';


/*
 * Simple element using the ChildrenContent mixin.
 */
class ContentTest extends ChildrenContent(ShadowTemplate(HTMLElement)) {

  contentChanged() {
    this._saveTextContent = this.textContent;
    if (this.contentChangedHook) {
      this.contentChangedHook();
    }
  }

  get template() {
    return `
      <div id="static">This is static content</div>
      <content></content>
    `;
  }

}
document.registerElement('content-test', ContentTest);


/*
 * Element containing an instance of the above, so we can test reprojection.
 */
class ReprojectTest extends ChildrenContent(ShadowTemplate(HTMLElement)) {
  get template() {
    return `<content-test><content></content></content-test>`;
  }
}
document.registerElement('reproject-test', ReprojectTest);


describe("ChildrenContent mixin", () => {

  let container;

  before(() => {
    container = document.getElementById('container');
  });

  afterEach(() => {
    container.innerHTML = '';
  });

  it("provides helpers to access content", () => {
    let fixture = document.createElement('content-test');
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

  it("provides helpers to access reprojected content", () => {
    let fixture = document.createElement('reproject-test');
    let div = document.createElement('div');
    div.textContent = 'aardvark';
    fixture.appendChild(div);
    assert.equal(fixture.distributedTextContent, 'aardvark');
    assert.equal(fixture.distributedChildren.length, 1);
    assert.equal(fixture.distributedChildNodes.length, 1);
    assert.equal(fixture.distributedChildNodes[0], div);
    // Inner element should report same results.
    let inner = fixture.shadowRoot.querySelector('content-test');
    assert.equal(inner.distributedTextContent, 'aardvark');
    assert.equal(inner.distributedChildren.length, 1);
    assert.equal(inner.distributedChildNodes.length, 1);
    assert.equal(inner.distributedChildNodes[0], div);
  });

});
