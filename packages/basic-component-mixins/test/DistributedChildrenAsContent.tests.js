import { assert } from 'chai';
import microtask from '../src/microtask';
import DistributedChildren from '../src/DistributedChildren';
import DistributedChildrenAsContent from '../src/DistributedChildrenAsContent';
import ShadowTemplate from '../src/ShadowTemplate';


/*
 * Simple element using the DistributedChildrenAsContent mixin.
 */
class ContentTest extends DistributedChildrenAsContent(
  DistributedChildren(
    ShadowTemplate(HTMLElement)
  )
) {

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
customElements.define('content-test', ContentTest);


/*
 * Element wrapping an instance of the above, so we can test detection of
 * changes in final distribution (not just direct slot assignments).
 */
class WrappedContentTest extends ShadowTemplate(HTMLElement) {
  get template() {
    return `<content-test><slot></slot></content-test>`;
  }
}
customElements.define('wrapped-content-test', WrappedContentTest);


describe("DistributedChildrenAsContent mixin", () => {

  let container;

  before(() => {
    container = document.getElementById('container');
  });

  afterEach(() => {
    container.innerHTML = '';
  });

  it("returns direct assigned nodes as content", () => {
    let fixture = document.createElement('content-test');
    fixture.innerHTML = `
      <div>One</div>
      <div>Two</div>
      <div>Three</div>
    `;
    assert.equal(fixture.content.length, 3);
  });

  it("returns distributed nodes as content", () => {
    let wrapper = document.createElement('wrapped-content-test');
    wrapper.innerHTML = `
      <div>One</div>
      <div>Two</div>
      <div>Three</div>
    `;
    let fixture = wrapper.shadowRoot.querySelector('content-test');
    assert.equal(fixture.content.length, 3);
  });

  it("makes initial call to contentChanged when component is created", done => {
    container.innerHTML = `<content-test>beaver</content-test>`;
    let fixture = container.querySelector('content-test');
    // Timeout gives polyfill time to upgrade element.
    setTimeout(() => {
      // Yet another timeout because Edge seems to need two cycles to upgrade.
      setTimeout(() => {
        assert.equal(fixture._saveTextContent, 'beaver');
        done();
      });
    });
  });

  it("calls contentChanged when textContent changes", done => {
    let fixture = document.createElement('content-test');
    container.appendChild(fixture);
    // Wait for initial contentChanged call to complete.
    microtask(() => {
      fixture.contentChangedHook = (element) => {
        assert.equal(fixture.textContent, 'chihuahua');
        done();
      };
      fixture.textContent = 'chihuahua';
    });
  });

  it("calls contentChanged when children change", done => {
    let fixture = document.createElement('content-test');
    container.appendChild(fixture);
    // Wait for initial contentChanged call to complete.
    microtask(() => {
      fixture.contentChangedHook = () => {
        assert.equal(fixture.textContent, 'dingo');
        done();
      };
      let div = document.createElement('div');
      div.textContent = 'dingo';
      fixture.appendChild(div);
    });
  });

  it("calls contentChanged when redistributed content changes", done => {
    let wrapper = document.createElement('wrapped-content-test');
    let fixture = wrapper.shadowRoot.querySelector('content-test');
    container.appendChild(wrapper);
    // Wait for initial contentChanged call to complete.
    microtask(() => {
      fixture.contentChangedHook = function() {
        assert.equal(wrapper.textContent, 'echidna');
        done();
      };
      wrapper.textContent = 'echidna';
    });
  });

  it("doesn't call contentChanged for changes in the component's shadow tree", done => {
    let fixture = document.createElement('content-test');
    container.appendChild(fixture);
    // Wait for initial contentChanged call to complete.
    microtask(() => {
      // Listen for future contentChanged invocations.
      fixture.contentChangedHook = function() {
        assert.equal(fixture.textContent, 'fox');
        done();
      };
      // Modify an element in the shadow, which shouldn't trigger contentChanged.
      // Since contentChanged uses MutationObservers, and those only monitor light
      // DOM content, this is not an issue on Shadow DOM. But under the polyfill,
      // the mutation handler will need to filter out mutations that occur in
      // Shady DOM elements.
      let shadowElement = fixture.shadowRoot.querySelector('#static');
      shadowElement.textContent = "This should be ignored";

      // Now add an element to the light DOM, which we *do* expect to trigger
      // contentChanged. Use a timeout to ensure that contentChanged has had a
      // chance to pick up (and ignore)the DOM mutation above.
      setTimeout(() => fixture.textContent = 'fox');
    });
  });

  it("doesn't call contentChanged when node is removed from shadow DOM", done => {
    let fixture = document.createElement('content-test');
    container.appendChild(fixture);
    // Wait for initial contentChanged call to complete.
    microtask(() => {

      fixture.contentChangedHook = function() {
        assert.equal(fixture.textContent, 'gorilla');
        done();
      };

      // Remove an element from the shadow, which shouldn't trigger contentChanged.
      let shadowElement = fixture.shadowRoot.querySelector('#static');
      shadowElement.remove();

      // Now add an element to the light DOM, which we do expect to trigger
      // contentChanged.
      fixture.textContent = 'gorilla';

    });
  });

  it("*does* call contentChanged if node is removed from light DOM", done => {
    let fixture = document.createElement('content-test');
    let div = document.createElement('div');
    div.textContent = 'div';
    fixture.appendChild(div);
    container.appendChild(fixture);
    // Wait for initial contentChanged call to complete.
    microtask(() => {
      fixture.contentChangedHook = function() {
        assert.equal(fixture.childNodes.length, 0);
        done();
      };
      // Remove a light DOM child, which should trigger contentChanged.
      fixture.removeChild(div);
    });
  });

  // TODO: Restore ability to treat changes in shadow element attributes (but
  // not component's own attributes) as content changes.
  it.skip("calls contentChanged when shadow element attributes change", done => {
    let fixture = document.createElement('content-test');
    let button = document.createElement('button');
    fixture.appendChild(button);
    container.appendChild(fixture);
    fixture.contentChangedHook = function() {
      assert.isTrue(button.disabled);
      done();
    };
    button.setAttribute('disabled', '');
  });

  it("doesn't call contentChanged when element's own attributes change", done => {
    let fixture = document.createElement('content-test');
    container.appendChild(fixture);
    // Wait for initial contentChanged call to complete.
    microtask(() => {
      fixture.contentChangedHook = function() {
        // Shouldn't get invoked.
        done(new Error("The contentChanged handler was invoked, but shouldn't have been."));
      };
      fixture.sampleAttribute = 'hedgehog';
      microtask(() => done());
    });
  });

});
