import { assert } from 'chai';
import DistributedChildren from '../src/DistributedChildren';
import DistributedChildrenAsContent from '../src/DistributedChildrenAsContent';
import TargetInCollective from '../src/TargetInCollective';
import ContentFirstChildTarget from '../src/ContentFirstChildTarget';


class ContentFirstChildTargetTest extends ContentFirstChildTarget(
  TargetInCollective(DistributedChildrenAsContent(
    DistributedChildren(HTMLElement)
  ))
) {}
customElements.define('content-first-child-target-test', ContentFirstChildTargetTest);


describe("ContentFirstChildTarget mixin", () => {

  let container;

  before(() => {
    container = document.getElementById('container');
  });

  afterEach(() => {
    container.innerHTML = '';
  });

  it("automatically assimilates its first child", done => {
    container.innerHTML = `
      <content-first-child-target-test>
        <div></div>
      </content-first-child-target-test>
    `;
    // Timeout gives polyfill time to upgrade element.
    setTimeout(() => {
      // Yet another timeout because Edge seems to need two cycles to upgrade.
      setTimeout(() => {
        const fixture = container.querySelector('content-first-child-target-test');
        const div = fixture.children[0];
        const collective = fixture.collective;
        assert.equal(collective.elements.length, 2);
        assert.equal(collective.elements[0], fixture);
        assert.equal(collective.elements[1], div);
        done();
      });
    });
  });

});
