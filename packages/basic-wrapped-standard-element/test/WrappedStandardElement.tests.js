import { assert } from 'chai';
import WrappedStandardElement from '../src/WrappedStandardElement';


let WrappedA = WrappedStandardElement.wrap('a');
document.registerElement('wrapped-a', WrappedA);


describe("WrappedStandardElement", () => {

  it("creates an instance of the wrapped element", () => {
    let wrapped = document.createElement('wrapped-a');
    assert(wrapped.inner instanceof HTMLAnchorElement);
  });

  it("exposes getter/setters that proxy to the wrapped element", () => {
    let wrapped = document.createElement('wrapped-a');
    wrapped.href = 'http://localhost/foo/bar.html';
    assert.equal(wrapped.inner.href, 'http://localhost/foo/bar.html');
    assert.equal(wrapped.protocol, 'http:');
    assert.equal(wrapped.hostname, 'localhost');
    assert.equal(wrapped.pathname, '/foo/bar.html');
  });

  it("marshals attributes to properties on the inner element", () => {
    let wrapped = document.createElement('wrapped-a');
    wrapped.setAttribute('href', 'http://example.com/');
    assert.equal(wrapped.inner.href, 'http://example.com/');
  })

});
