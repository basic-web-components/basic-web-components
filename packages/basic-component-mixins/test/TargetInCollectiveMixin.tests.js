import { assert } from 'chai';
import TargetInCollectiveMixin from '../src/TargetInCollectiveMixin';


class TargetInCollectiveMixinTest extends TargetInCollectiveMixin(HTMLElement) {}
customElements.define('target-in-collective-mixin-test', TargetInCollectiveMixinTest);


describe("TargetInCollectiveMixin", () => {

  it("assimilates the element indicated by its target property", () => {
    const element1 = document.createElement('target-in-collective-mixin-test');
    const element2 = {};
    const collective = element1.collective;
    element1.target = element2;
    assert.equal(collective.elements.length, 2);
    assert.equal(element2.collective, collective);
  });

});
