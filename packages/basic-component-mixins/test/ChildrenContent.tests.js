import { assert } from 'chai';
import ChildrenContent from '../src/ChildrenContent';


/*
 * Simple element using the ChildrenContent mixin.
 */
class ContentTest extends ChildrenContent(HTMLElement) {

  contentChanged() {
    if (window.contentChangedHook) {
      window.contentChangedHook(this);
    }
  }

  createdCallback() {
    if (super.createdCallback) { super.createdCallback(); }
    // TODO: Make this work in browsers other than Chrome Canary + Safari.
    let root = this.attachShadow({open: true});
    root.innerHTML = `<div id="static">This is static content</div><content></content>`;
  }

}
document.registerElement('content-test', ContentTest);


/*
 * Element containing an instance of the above, so we can test reprojection.
 */
class ReprojectTest extends ChildrenContent(HTMLElement) {
  createdCallback() {
    // TODO: Make this work in browsers other than Chrome Canary + Safari.
    let root = this.attachShadow({open: true});
    root.innerHTML = `<content-test><content></content></content-test>`;
  }
}
document.registerElement('reproject-test', ReprojectTest);


describe('ChildrenContent mixin', () => {

  let container;

  before(() => {
    container = document.getElementById('container');
  });

  afterEach(() => {
    container.innerHTML = '';
    window.contentChangedHook = null;
  });

  it("provides helpers to access content", () => {
    let fixture = document.createElement('content-test');
    let div1 = document.createElement('div');
    let text = new Text();
    let div2 = document.createElement('div');
    div1.textContent = 'Hello';
    text.textContent = ' ';
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
    div.textContent = 'Hello';
    fixture.appendChild(div);
    assert.equal(fixture.distributedTextContent, 'Hello');
    assert.equal(fixture.distributedChildren.length, 1);
    assert.equal(fixture.distributedChildNodes.length, 1);
    assert.equal(fixture.distributedChildNodes[0], div);
    // Inner element should report same results.
    let inner = fixture.shadowRoot.querySelector('content-test');
    assert.equal(inner.distributedTextContent, 'Hello');
    assert.equal(inner.distributedChildren.length, 1);
    assert.equal(inner.distributedChildNodes.length, 1);
    assert.equal(inner.distributedChildNodes[0], div);
  });

  it("makes initial call to contentChanged when component is created", done => {
    window.contentChangedHook = (fixture) => {
      assert.equal(fixture.textContent, 'Hello');
      done();
    };
    container.innerHTML = `<content-test>Hello</content-test>`;
  });

  it("calls contentChanged when textContent changes", done => {
    let fixture = document.createElement('content-test');
    window.contentChangedHook = (element) => {
      assert.equal(fixture.textContent, 'Hello');
      done();
    };
    container.appendChild(fixture);
    fixture.textContent = 'Hello';
  });

  it("calls contentChanged when children change", done => {
    let fixture = document.createElement('content-test');
    window.contentChangedHook = () => {
      assert.equal(fixture.textContent, 'Hello');
      done();
    };
    container.appendChild(fixture);
    let div = document.createElement('div');
    div.textContent = 'Hello';
    fixture.appendChild(div);
  });

  // TODO: Restore support for tracking changes in component host.
  it.skip("calls contentChanged when redistributed content changes", done => {
    let fixture = document.createElement('reproject-test');
    let contentTest = fixture.shadowRoot.querySelector('content-test');
    container.appendChild(fixture);
    window.contentChangedHook = function(element) {
      if (element === contentTest) {
        assert.equal(element.textContent, 'Hello');
        done();
      }
    };
    fixture.textContent = 'Hello';
  });

  it("doesn't call contentChanged for changes in the component's shadow tree", done => {
    let fixture = document.createElement('content-test');
    window.contentChangedHook = function() {
      assert.equal(fixture.textContent, 'Hello');
      done();
    };
    container.appendChild(fixture);
    // Modify an element in the shadow, which shouldn't trigger contentChanged.
    // Since contentChanged uses MutationObservers, and those only monitor light
    // DOM content, this is not an issue on Shadow DOM. But under the polyfill,
    // the mutation handler will need to filter out mutations that occur in
    // Shady DOM elements.
    let shadowElement = fixture.shadowRoot.querySelector('#static');
    shadowElement.textContent = "This should be ignored";
    setTimeout(() => {
      // Now add an element to the light DOM, which we do expect to trigger
      // contentChanged.
      fixture.textContent = 'Hello';
    });
  });

  it("doesn't call contentChanged when node is removed from shadow DOM", done => {
    let fixture = document.createElement('content-test');
    window.contentChangedHook = function() {
      assert.equal(fixture.textContent, 'Hello');
      done();
    };
    container.appendChild(fixture);

    // Remove an element from the shadow, which shouldn't trigger contentChanged.
    let shadowElement = fixture.shadowRoot.querySelector('#static');
    shadowElement.remove();

    // Now add an element to the light DOM, which we do expect to trigger
    // contentChanged.
    fixture.textContent = 'Hello';
  });

  it("*does* call contentChangend if node is removed from light DOM", done => {
    let fixture = document.createElement('content-test');
    let div = document.createElement('div');
    div.textContent = 'div';
    fixture.appendChild(div);
    container.appendChild(fixture);
    window.contentChangedHook = function() {
      assert.equal(fixture.childNodes.length, 0);
      done();
    };
    // Remove a light DOM child, which should trigger contentChanged.
    fixture.removeChild(div);
  });

  // TODO: Restore ability to treat changes in shadow element attributes (but
  // not component's own attributes) as content changes.

  it.skip("calls contentChanged when shadow element attributes change", done => {
    let fixture = document.createElement('content-test');
    let button = document.createElement('button');
    fixture.appendChild(button);
    container.appendChild(fixture);
    window.contentChangedHook = function() {
      assert.isTrue(button.disabled);
      done();
    };
    button.setAttribute('disabled', '');
  });

  it.skip("doesn't call contentChanged when element's own attributes change", done => {
    let fixture = document.createElement('content-test');
    window.contentChangedHook = function() {
      // Shouldn't get invoked.
      done(new Error("The contentChanged handler was invoked, but shouldn't have been."));
    };
    container.appendChild(fixture);
    fixture.sampleAttribute = 'Hello';
    setTimeout(done);
  });

});
