import { assert } from 'chai';
import flush from '../../basic-component-mixins/test/flush';
import CurrentAnchor from '../src/CurrentAnchor'; // jshint ignore:line


describe("CurrentAnchor", () => {

  let container;

  before(() => {
    container = document.getElementById('container');
  });

  afterEach(() => {
    container.innerHTML = '';
  });

  it("makes the link current if its destination is the current location", () => {
    const element = document.createElement('basic-current-anchor');
    assert(!element.active);
    container.appendChild(element);
    flush();
    assert(!element.classList.contains('current'));
    element.href = window.location.href;
    assert(element.current);
    assert(element.classList.contains('current'));
  });

  it("makes an area link current if its destination is a prefix of the current location", () => {
    const element = document.createElement('basic-current-anchor');
    element.href = window.location.origin;
    assert(!element.current);
    container.appendChild(element);
    flush();
    assert(!element.classList.contains('current'));
    element.areaLink = true;
    assert(element.current);
    assert(element.classList.contains('current'));
  });

});
