import ElementBase from '../../basic-element-base/src/ElementBase';


// Feature detection for old Shadow DOM v0.
const USING_SHADOW_DOM_V0 = (typeof HTMLElement.prototype.createShadowRoot !== 'undefined');


/**
 * Wraps a standard HTML element so that the standard behavior can then be
 * extended.
 *
 * [Live demo](http://basicwebcomponents.org/basic-web-components/packages/basic-wrapped-standard-element/)
 *
 * The Custom Elements spec does not currently (as of March 2016) allow you to
 * extend the behavior of a standard HTML element like `<a>` or `<button>`.
 * As a partial workaround, the WrappedStandardElement class can create a class
 * for you that wraps an instance of a standard HTML element. For example, the
 * code below creates a class that will wrap an instance of a standard `<a>`
 * element:
 *
 *     class WrappedA extends WrappedStandardElement.wrap('a') {
 *       customMethod() { ... }
 *     }
 *     document.registerElement('wrapped-a', WrappedA);
 *
 * An instance of the resulting class will look to the user like an instance of
 * the standard element class it wraps. The resulting class will *not* be an
 * `instanceof` the standard class (here, HTMLAnchorElement). Another limitation
 * is that the resulting `<wrapped-a>` will not automatically pick up CSS styles
 * for standard `<a>` elements. However, the resulting class *can* be extended.
 * E.g., instances of the above class have a `customMethod()` available to them.
 *
 * Any properties defined by the original standard element will be exposed on
 * the resulting wrapper class, and calls to get or set those properties will be
 * delegated to the wrapped element instance. Continuing the above example:
 *
 *     let wrapped = document.createElement('wrapped-a');
 *     wrapped.href = 'http://example.com/';
 *     wrapped.textContent = 'Click here';
 *
 * Here, the created custom `<wrapped-a>` element will contain inside its
 * shadow tree an instance of a standard `<a>` element. The call to set the
 * wrapper's `href` property will ultimately set the `href` on the inner link.
 * Moreover, the text content of the `<wrapped-a>` element will appear inside
 * the inner link. The result of all this is that the user will see what *looks*
 * like a normal link, just as if you had written
 * `<a href="http://example.com/">Click here</a>`. However, the actual element
 * will be an instance of your custom class, with whatever behavior you've
 * defined for it.
 */
class WrappedStandardElement extends ElementBase {

  /**
   * A description for the user of the element's purpose on the page. Setting
   * this applies the label to the inner element, ensuring that screen readers
   * and other assistive technologies will provide a meaningful description to
   * the user.
   *
   * @type {string}
   */
  get ariaLabel() {
    return this.inner.getAttribute('aria-label');
  }
  set ariaLabel(label) {
    // Propagate the ARIA label to the inner textarea.
    this.inner.setAttribute('aria-label', label);
  }

  /**
   * Returns a reference to the inner standard HTML element.
   *
   * @type {HTMLElement}
   */
  get inner() {
    return this.$.inner;
  }

  /**
   * The template copied into the shadow tree of new instances of this element.
   *
   * The default value of this property is a template that includes an instance
   * the standard element being wrapped, with a `<slot>` element inside that
   * to pick up the element's light DOM content. For example, if you wrap an
   * `<a>` element, then the template will look like:
   *
   *     <template>
   *       <a id="inner">
   *         <slot></slot>
   *       </a>
   *     </template>
   *
   * If you'd like the template to include other elements, then override this
   * property and return a template of your own. The template should include an
   * instance of the standard HTML element you are wrapping, and the ID of that
   * element should be "inner".
   *
   * @type {(string|HTMLTemplateElement)}
   */
  get template() {
    // TODO: Use slot instead of content.
    return `<${this.extends} id="inner"><content></content></${this.extends}`;
  }

  /**
   * Creates a class that wraps a standard HTML element.
   *
   * Note that the resulting class is a subclass of WrappedStandardElement, not
   * the standard class being wrapped. E.g., if you call
   * `WrappedStandardElement.wrap('a')`, you will get a class whose shadow tree
   * will include an anchor element, but the class will *not* inherit from
   * HTMLAnchorElement.
   *
   * @param {string} extendsTag - the standard HTML element tag to extend
   */
  static wrap(extendsTag) {

    // Create the new class.
    class Wrapped extends WrappedStandardElement {}

    // Indicate which tag it wraps.
    Wrapped.prototype.extends = extendsTag;

    // Create getter/setters that delegate to the wrapped element.
    let element = document.createElement(extendsTag);
    let extendsPrototype = element.constructor.prototype;
    let names = Object.getOwnPropertyNames(extendsPrototype);
    names.forEach(name => {
        let descriptor = Object.getOwnPropertyDescriptor(extendsPrototype, name);
        let delegate = createPropertyDelegate(name, descriptor);
        Object.defineProperty(Wrapped.prototype, name, delegate);
    });

    return Wrapped;
  }

}


function createPropertyDelegate(name, descriptor) {
  let delegate = {
    configurable: descriptor.configurable,
    enumerable: descriptor.enumerable,
  };
  if (descriptor.get) {
    delegate.get = function() {
      return this.inner[name];
    }
  }
  if (descriptor.set) {
    delegate.set = function(value) {
      this.inner[name] = value;
    }
  }
  if (descriptor.writable) {
    delegate.writable = descriptor.writable;
  }
  return delegate;
}


export default WrappedStandardElement;
