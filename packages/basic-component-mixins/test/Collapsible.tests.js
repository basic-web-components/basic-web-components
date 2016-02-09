import { assert } from 'chai';
import Collapsible from '../src/Collapsible';


class CollapsibleTest extends Collapsible(HTMLElement) {}
document.registerElement('collapsible-test', CollapsibleTest);


describe("Collapsible", () => {

  let container;

  before(() => {
    container = document.getElementById('container');
  });

  afterEach(() => {
    container.innerHTML = '';
  });

  it("is initally expanded", function() {
    let element = document.createElement('collapsible-test');
    assert(!element.collapsed);
  });

  it("can be collapsed", function() {
    let element = document.createElement('collapsible-test');
    element.collapse();
    assert(element.collapsed);
  });

  it("can be expanded", function() {
    let element = document.createElement('collapsible-test');
    element.collapse();
    assert(element.collapsed);
    element.expand();
    assert(!element.collapsed);
  });

  it("can be toggled", function() {
    let element = document.createElement('collapsible-test');
    element.toggle();
    assert(element.collapsed);
    element.toggle();
    assert(!element.collapsed);
  });

  it("renders state as a CSS class and ARIA attribute", function() {
    let element = document.createElement('collapsible-test');
    container.appendChild(element);
    assert(!element.classList.contains('basic-collapsed'));
    assert.equal(element.getAttribute('aria-expanded'), 'true');
    element.collapse();
    assert(element.classList.contains('basic-collapsed'));
    assert.equal(element.getAttribute('aria-expanded'), 'false');
  });

});
