import { assert } from 'chai';
import ActivatingAnchor from '../src/ActivatingAnchor';


describe("ActivatingAnchor", () => {

  it("makes the link active if its destination is the current location", () => {
    let element = document.createElement('basic-activating-anchor');
    assert(!element.active);
    assert(!element.classList.contains('active'));
    element.href = window.location.href;
    element.refresh();
    assert(element.active);
    assert(element.classList.contains('active'));
  });

  it("makes an area link active if its destination is a prefix of the current location", () => {
    let element = document.createElement('basic-activating-anchor');
    element.href = window.location.origin;
    element.refresh();
    assert(!element.active);
    assert(!element.classList.contains('active'));
    element.areaLink = true;
    assert(element.active);
    assert(element.classList.contains('active'));
  });

});
