import { assert } from 'chai';
import toggleClass from '../src/toggleClass';


describe("toggleClass helper", () => {

  it("behaves like the standard classList.toggle() function", () => {
    const element = document.createElement('div');
    assert(!element.classList.contains('foo'));
    // With no boolean parameter.
    toggleClass(element, 'foo');
    assert(element.classList.contains('foo'));
    toggleClass(element, 'foo');
    assert(!element.classList.contains('foo'));
    // With boolean parameter.
    toggleClass(element, 'foo', false);
    assert(!element.classList.contains('foo'));
    toggleClass(element, 'foo', true);
    toggleClass(element, 'foo', true);
    assert(element.classList.contains('foo'));
  });

});
