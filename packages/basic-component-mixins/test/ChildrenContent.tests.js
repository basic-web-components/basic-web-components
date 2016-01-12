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
    window.contentChangedHook = () => {
      assert.equal(fixture.textContent, 'Hello');
      done();
    };
    container.appendChild(fixture);
    fixture.textContent = 'Hello';
  });

  // it("observe changes in children", done => {
  //   let fixture = document.createElement('content-test');
  //   fixture.contentChangedHook = function() {
  //     let children = Polymer.dom(fixture).children;
  //     assert.equal(children.length, 1);
  //     assert.equal(children[0].textContent, 'Hello');
  //     done();
  //   };
  //   container.appendChild(fixture);
  //   flush(function() {
  //     let div = document.createElement('div');
  //     div.textContent = 'Hello';
  //     Polymer.dom(fixture).appendChild(div);
  //   });
  // });
  //
  // it("specifying initial content triggers initial contentChanged", done => {
  //   let fixture = document.createElement('content-test');
  //   Polymer.dom(fixture).textContent = 'Hello';
  //   fixture.contentChangedHook = function() {
  //     assert.equal(Polymer.dom(fixture).textContent, 'Hello');
  //     done();
  //   };
  //   flush(function() {
  //     container.appendChild(fixture);
  //   });
  // });
  //
  // it("detaching an element stops it observing future content changes", done => {
  //   let fixture = document.createElement('content-test');
  //   fixture.contentChangedHook = function() {
  //     let childNodes = Polymer.dom(fixture).childNodes;
  //     assert.equal(childNodes[0].textContent, 'Hello');
  //     fixture.remove();
  //     done();
  //   };
  //   fixture.detatchedHook = function() {
  //     fixture.textContent = 'Goodbye';
  //   };
  //   container.appendChild(fixture);
  //   Polymer.dom(fixture).textContent = 'Hello';
  // });
  //
  // it("redistributed content triggers contentChanged", done => {
  //   let fixture = document.createElement('reproject-test');
  //   let nestedTestElement = fixture.$.nestedTestElement;
  //   container.appendChild(fixture);
  //   nestedTestElement.contentChangedHook = function() {
  //     let childNodes = Polymer.dom(fixture).childNodes;
  //     assert.equal(childNodes[0].textContent, 'Hello');
  //   };
  //   Polymer.dom(fixture).textContent = 'Hello';
  //   flush(function() {
  //     done();
  //   });
  // });
  //
  // it("adding node to shadow does not trigger contentChanged", done => {
  //   let fixture = document.createElement('content-test');
  //   fixture.contentChangedHook = function() {
  //     let childNodes = Polymer.dom(fixture).childNodes;
  //     assert.equal(childNodes.length, 1);
  //     done();
  //   };
  //   container.appendChild(fixture);
  //   // Modify an element in the shadow, which shouldn't trigger contentChanged.
  //   // Since contentChanged uses MutationObservers, and those only monitor
  //   // light DOM content, this is not an issue on Shadow DOM. But on Shady DOM,
  //   // the Basic.ContentHelpers' mutation handler will need to filter out
  //   // mutations that occur in Shady DOM elements.
  //   fixture.$.static.textContent = "This should be ignored";
  //   flush(function() {
  //     // Now add an element to the light DOM, which we do expect to trigger
  //     // contentChanged.
  //     Polymer.dom(fixture).textContent = 'Hello';
  //   });
  // });
  //
  // it("removing node from shadow does not trigger contentChanged", done => {
  //   let fixture = document.createElement('content-test');
  //   fixture.contentChangedHook = function() {
  //     let childNodes = Polymer.dom(fixture).childNodes;
  //     assert.equal(childNodes.length, 1);
  //     done();
  //   };
  //   container.appendChild(fixture);
  //   flush(function() {
  //     // Remove an element from the shadow, which shouldn't trigger contentChanged.
  //     fixture.$.static.remove();
  //     flush(function() {
  //       // Now add an element to the light DOM, which we do expect to trigger
  //       // contentChanged.
  //       Polymer.dom(fixture).textContent = 'Hello';
  //     });
  //   });
  // });
  //
  // it("removing node from light DOM *does* trigger contentChanged", done => {
  //   let fixture = document.createElement('content-test');
  //   let div = document.createElement('div');
  //   div.textContent = 'div';
  //   Polymer.dom(fixture).appendChild(div);
  //   container.appendChild(fixture);
  //   flush(function() {
  //     fixture.contentChangedHook = function() {
  //       let childNodes = Polymer.dom(fixture).childNodes;
  //       assert.equal(childNodes.length, 0);
  //       done();
  //     };
  //     // Remove a light DOM child, which should trigger contentChanged.
  //     Polymer.dom(fixture).removeChild(div);
  //   });
  // });
  //
  // test.skip('observe changes in child attribute', done => {
  //   let fixture = document.createElement('content-test');
  //   let button = document.createElement('button');
  //   fixture.appendChild(button);
  //   container.appendChild(fixture);
  //   fixture.contentChangedHook = function() {
  //     assert.isTrue(button.disabled);
  //     done();
  //   };
  //   button.setAttribute('disabled', '');
  // });
  //
  // test.skip('ignore changes in element\'s own attributes', done => {
  //   let fixture = document.createElement('content-test');
  //   fixture.contentChangedHook = function() {
  //     // Shouldn't get invoked.
  //     done(new Error("The contentChanged handler was invoked, but shouldn't have been."));
  //   };
  //   container.appendChild(fixture);
  //   fixture.sampleAttribute = 'Hello';
  //   setTimeout(done);
  // });

});
