/* Exported function extends a base class with AttributeMarshalling. */
export default (base) => {

  /**
   * Mixin which marshalls attributes to properties (and eventually vice versa).
   *
   * If your component exposes a setter for a property, it's generally a good
   * idea to let devs using your component be able to set that property in HTML
   * via an element attribute. You can code that yourself by writing an
   * `attributeChangedCallback`, or you can use this mixin to get a degree of
   * automatic support.
   *
   * This mixin implements an `attributeChangedCallback` that will attempt to
   * convert a change in an element attribute into a call to the corresponding
   * property setter. Attributes typically follow hyphenated names ("foo-bar"),
   * whereas properties typically use camelCase names ("fooBar"). This mixin
   * respects that convention, automatically mapping the hyphenated attribute
   * name to the corresponding camelCase property name.
   *
   * Example: You define a component using this mixin:
   *
   *     class MyElement extends AttributeMarshalling(HTMLElement) {
   *       get fooBar() { return this._fooBar; }
   *       set fooBar(value) { this._fooBar = value; }
   *     }
   *     document.registerElement('my-element', MyElement);
   *
   * If someone then instantiates your component in HTML:
   *
   *     <my-element foo-bar="Hello"></my-element>
   *
   * Then, after the element has been upgraded, the `fooBar` setter will
   * automatically be invoked with the initial value "Hello".
   *
   * For the time being, this mixin only supports string-valued properties.
   * If you'd like to convert string attributes to other types (numbers,
   * booleans), you need to implement `attributeChangedCallback` yourself.
   */
  class AttributeMarshalling extends base {

    /*
     * Handle a change to the attribute with the given name.
     */
    attributeChangedCallback(name, oldValue, newValue) {
      if (super.attributeChangedCallback) { super.attributeChangedCallback(); }
      // If the attribute name corresponds to a property name, then set that
      // property. Ignore changes in standard HTMLElement properties.
      let propertyName = attributeToPropertyName(name);
      if (propertyName in this && !(propertyName in HTMLElement.prototype)) {
        this[propertyName] = newValue;
      }
    }

    /*
     * Generate an initial call to attributeChangedCallback for each attribute
     * on the element.
     *
     * TODO: The plan for Custom Elements v1 is for the browser to handle this.
     * Once that's handled (including in polyfills), this call can go away.
     */
    createdCallback() {
      if (super.createdCallback) { super.createdCallback(); }
      [].forEach.call(this.attributes, attribute => {
        this.attributeChangedCallback(attribute.name, undefined, attribute.value);
      });
    }

  }

  return AttributeMarshalling;
};


// Convert camel case fooBar name to hyphenated foo-bar.
function attributeToPropertyName(attributeName) {
  let propertyName = attributeName.replace(/-([a-z])/g, m => m[1].toUpperCase());
  return propertyName;
}

// Convert hyphenated foo-bar name to camel case fooBar.
// TODO: Use this when we support reflection of properties to attributes.
// function propertyToAttributeName(propertyName) {
//   let attributeName = propertyName.replace(/([a-z][A-Z])/g, g => g[0] + '-' + g[1].toLowerCase());
//   return attributeName;
// }
