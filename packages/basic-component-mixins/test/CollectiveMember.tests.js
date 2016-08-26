import { assert } from 'chai';
import TargetInCollective from '../src/TargetInCollective';


class TargetInCollectiveTest extends TargetInCollective(HTMLElement) {}
customElements.define('collective-member-test', TargetInCollectiveTest);


describe("TargetInCollective mixin", () => {

  it("assimilates the element indicated by its target property", () => {
    let element1 = document.createElement('collective-member-test');
    let element2 = {};
    let collective = element1.collective;
    element1.target = element2;
    assert.equal(collective.elements.length, 2);
    assert.equal(element2.collective, collective);
  });

});
