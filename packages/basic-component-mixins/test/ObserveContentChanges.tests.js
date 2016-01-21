import { assert } from 'chai';
// import DistributedChildrenAsContent from '../src/DistributedChildrenAsContent';
import ShadowTemplate from '../src/ShadowTemplate';
import ObserveContentChanges from '../src/ObserveContentChanges';


/*
 * Simple element using the ObserveContentChanges mixin.
 */
class ObserveTest extends ObserveContentChanges(
  ShadowTemplate(HTMLElement)
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
      <content></content>
    `;
  }

}
document.registerElement('observe-test', ObserveTest);


/*
 * Element containing an instance of the above, so we can test reprojection.
 */
class ObserveReprojectTest extends ObserveContentChanges(ShadowTemplate(HTMLElement)) {
  get template() {
    return `<observe-test><content></content></observe-test>`;
  }
}
document.registerElement('observe-reproject-test', ObserveReprojectTest);


describe("ObserveContentChanges mixin", () => {

  let container;

  before(() => {
    container = document.getElementById('container');
  });

  afterEach(() => {
    container.innerHTML = '';
  });

  it("makes initial call to contentChanged when component is created", done => {
    container.innerHTML = `<observe-test>beaver</observe-test>`;
    let fixture = container.querySelector('observe-test');
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
    let fixture = document.createElement('observe-test');
    fixture.contentChangedHook = (element) => {
      assert.equal(fixture.textContent, 'chihuahua');
      done();
    };
    container.appendChild(fixture);
    fixture.textContent = 'chihuahua';
  });

  it("calls contentChanged when children change", done => {
    let fixture = document.createElement('observe-test');
    fixture.contentChangedHook = () => {
      assert.equal(fixture.textContent, 'dingo');
      done();
    };
    container.appendChild(fixture);
    let div = document.createElement('div');
    div.textContent = 'dingo';
    fixture.appendChild(div);
  });

  // TODO: Restore support for tracking changes in component host.
  it.skip("calls contentChanged when redistributed content changes", done => {
    let fixture = document.createElement('observe-reproject-test');
    let contentTest = fixture.shadowRoot.querySelector('observe-test');
    container.appendChild(fixture);
    fixture.contentChangedHook = function(element) {
      if (element === contentTest) {
        assert.equal(element.textContent, 'echidna');
        done();
      }
    };
    fixture.textContent = 'echidna';
  });

  it("doesn't call contentChanged for changes in the component's shadow tree", done => {
    let fixture = document.createElement('observe-test');
    container.appendChild(fixture);
    // Wait for initial contentChanged to be invoked.
    Promise.resolve().then(() => {
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
    let fixture = document.createElement('observe-test');
    fixture.contentChangedHook = function() {
      assert.equal(fixture.textContent, 'gorilla');
      done();
    };
    container.appendChild(fixture);

    // Remove an element from the shadow, which shouldn't trigger contentChanged.
    let shadowElement = fixture.shadowRoot.querySelector('#static');
    shadowElement.remove();

    // Now add an element to the light DOM, which we do expect to trigger
    // contentChanged.
    fixture.textContent = 'gorilla';
  });

  it("*does* call contentChangend if node is removed from light DOM", done => {
    let fixture = document.createElement('observe-test');
    let div = document.createElement('div');
    div.textContent = 'div';
    fixture.appendChild(div);
    container.appendChild(fixture);
    fixture.contentChangedHook = function() {
      assert.equal(fixture.childNodes.length, 0);
      done();
    };
    // Remove a light DOM child, which should trigger contentChanged.
    fixture.removeChild(div);
  });

  // TODO: Restore ability to treat changes in shadow element attributes (but
  // not component's own attributes) as content changes.

  it.skip("calls contentChanged when shadow element attributes change", done => {
    let fixture = document.createElement('observe-test');
    let button = document.createElement('button');
    fixture.appendChild(button);
    container.appendChild(fixture);
    fixture.contentChangedHook = function() {
      assert.isTrue(button.disabled);
      done();
    };
    button.setAttribute('disabled', '');
  });

  it.skip("doesn't call contentChanged when element's own attributes change", done => {
    let fixture = document.createElement('observe-test');
    fixture.contentChangedHook = function() {
      // Shouldn't get invoked.
      done(new Error("The contentChanged handler was invoked, but shouldn't have been."));
    };
    container.appendChild(fixture);
    fixture.sampleAttribute = 'hedgehog';
    setTimeout(done);
  });

});
