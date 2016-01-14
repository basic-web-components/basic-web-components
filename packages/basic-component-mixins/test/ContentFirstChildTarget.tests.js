import { assert } from 'chai';
import ChildrenContent from '../src/ChildrenContent';
import CollectiveMember from '../src/CollectiveMember';
import ContentFirstChildTarget from '../src/ContentFirstChildTarget';


class ContentFirstChildTargetTest extends ContentFirstChildTarget(
  CollectiveMember(
    ChildrenContent(HTMLElement)
  )
) {}
document.registerElement('content-first-child-target-test', ContentFirstChildTargetTest);


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
        let fixture = container.querySelector('content-first-child-target-test');
        let div = fixture.children[0];
        let collective = fixture.collective;
        assert.equal(collective.elements.length, 2);
        assert.equal(collective.elements[0], fixture);
        assert.equal(collective.elements[1], div);
        done();
      });
    });
  });

});
