import { assert } from 'chai';
import DistributedChildrenMixin from '../src/DistributedChildrenMixin';
import DistributedChildrenContentMixin from '../src/DistributedChildrenContentMixin';
import TargetInCollectiveMixin from '../src/TargetInCollectiveMixin';
import ContentFirstChildTargetMixin from '../src/ContentFirstChildTargetMixin';


class ContentFirstChildTargetMixinTest extends ContentFirstChildTargetMixin(
  TargetInCollectiveMixin(DistributedChildrenContentMixin(
    DistributedChildrenMixin(HTMLElement)
  ))
) {}
customElements.define('content-first-child-target-mixin-test', ContentFirstChildTargetMixinTest);


describe("ContentFirstChildTargetMixin", () => {

  let container;

  before(() => {
    container = document.getElementById('container');
  });

  afterEach(() => {
    container.innerHTML = '';
  });

  it("automatically assimilates its first child", done => {
    container.innerHTML = `
      <content-first-child-target-mixin-test>
        <div></div>
      </content-first-child-target-mixin-test>
    `;
    // Timeout gives polyfill time to upgrade element.
    setTimeout(() => {
      // Yet another timeout because Edge seems to need two cycles to upgrade.
      setTimeout(() => {
        const fixture = container.querySelector('content-first-child-target-mixin-test');
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
