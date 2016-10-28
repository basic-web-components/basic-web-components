import { assert } from 'chai';
import Collective from '../src/Collective';


describe("Collective", () => {

  let container;

  before(() => {
    container = document.getElementById('container');
  });

  afterEach(() => {
    container.innerHTML = '';
  });

  it("initiallly has no members", function() {
    const collective = new Collective();
    assert.equal(collective.elements.length, 0);
  });

  it("has a constructor that accepts a set of elements to assimilate", function() {
    const element1 = {};
    const element2 = {};
    const collective = new Collective(element1, element2);
    assert.equal(collective.elements.length, 2);
    assert.equal(collective.elements[0], element1);
    assert.equal(collective.elements[1], element2);
    assert.equal(element1.collective, collective);
    assert.equal(element2.collective, collective);
  });

  it("can assimilate an element that doesn't yet belong to a collective", function() {
    const collective = new Collective();
    const element = {};
    collective.assimilate(element);

    // Collective should contain just this element.
    assert.equal(collective.elements.length, 1);
    assert.equal(collective.elements[0], element);

    // Element should now declare itself to be part of this collective.
    assert.equal(element.collective, collective);
  });

  it("can assimilate an element that already belongs to a collective", function() {
    const element1 = {};
    const collective1 = new Collective(element1);
    const element2 = {};
    const collective2 = new Collective(element2);
    collective1.assimilate(element2);
    assert.equal(collective1.elements.length, 2);
    assert.equal(collective1.elements[0], element1);
    assert.equal(collective1.elements[1], element2);
    assert.equal(element1.collective, collective1);
    assert.equal(element2.collective, collective1);
    assert.equal(collective2.elements.length, 0);
  });

  it("has no effect assimilating an element that's already in it", function() {
    const element = {};
    const collective = new Collective(element);
    assert.equal(collective.elements.length, 1);
    collective.assimilate(element);
    assert.equal(collective.elements.length, 1);
  });

  it("can invoke collective method on its members", function() {
    const results = [];
    const element1 = {
      method(arg) {
        results.push(arg + '1');
      }
    };
    const element2 = {
      method(arg) {
        results.push(arg + '2');
      }
    };
    const collective = new Collective(element1, element2);
    collective.invokeMethod('method', ['foo']);
    assert.equal(results.length, 2);
    assert.equal(results[0], 'foo2');
    assert.equal(results[1], 'foo1');
  });

  it("invokes the collectiveChanged method on elements when their collective", function() {
    let count = 0;
    const element = {
      collectiveChanged() {
        count++;
      }
    };
    const collective1 = new Collective(element);
    assert.equal(count, 1);
    const collective2 = new Collective();
    collective2.assimilate(collective1);
    assert.equal(count, 2);
  });

  it("can promote an attribute on an element not in a collective", () => {
    const fixture = document.createElement('selection-aria-active-test');
    container.appendChild(fixture);
    Collective.promoteAttribute(fixture, 'tabindex', '0');
    assert.equal(fixture.getAttribute('tabindex'), '0');
  });

});
