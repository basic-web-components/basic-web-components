import { assert } from 'chai';
import WrappedStandardElement from '../src/WrappedStandardElement';


let WrappedA = WrappedStandardElement.wrap('a');
document.registerElement('wrapped-a', WrappedA);


describe("WrappedStandardElement", () => {

  it("creates an instance of the wrapped element", () => {
    let element = document.createElement('wrapped-a');
    assert(element.inner instanceof HTMLAnchorElement);
  });

  it("exposes getter/setters that proxy to the wrapped element", () => {
    let element = document.createElement('wrapped-a');
    element.href = 'http://localhost/foo/bar.html';
    assert.equal(element.inner.href, 'http://localhost/foo/bar.html');
    assert.equal(element.protocol, 'http:');
    assert.equal(element.hostname, 'localhost');
    assert.equal(element.pathname, '/foo/bar.html');
  });

  it("marshals attributes to properties on the inner element", () => {
    let element = document.createElement('wrapped-a');
    element.setAttribute('href', 'http://example.com/');
    assert.equal(element.inner.href, 'http://example.com/');
  })

});
