import { assert } from 'chai';
import WrappedStandardElement from '../src/WrappedStandardElement';


let WrappedA = WrappedStandardElement.wrap('a');
document.registerElement('wrapped-a', WrappedA);

let WrappedIframe = WrappedStandardElement.wrap('iframe');
document.registerElement('wrapped-iframe', WrappedIframe);


describe("WrappedStandardElement", () => {

  let container;

  before(() => {
    container = document.getElementById('container');
  });

  afterEach(() => {
    container.innerHTML = '';
  });

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
  });

  it("re-raises events not automatically retargetted by Shadow DOM", done => {
    let element = document.createElement('wrapped-iframe');
    container.appendChild(element);
    element.addEventListener('load', event => {
      done();
    });
    element.src = '../README.md'; // Load any local file to trigger the load event.
  });

});
