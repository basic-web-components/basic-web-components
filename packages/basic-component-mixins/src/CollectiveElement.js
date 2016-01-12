/**
 * Mixin which allows a component to provide aggregate behavior with other
 * elements, e.g., for keyboard handling.
 *
 * @mixin CollectiveElement
 */
export default (base) => class CollectiveElement extends base {

  get collective() {
    // Lazily create the collective when first asked for it.
    if (!this._collective) {
      this._collective = new Collective();
      this._collective.assimilate(this);
    }
    return this._collective;
  }
  set collective(value) {
    if ('collective' in base.prototype) { super.collective = value; }
    this._collective = value;
  }

  get target() {
    return super.target;
  }
  set target(element) {
    if ('target' in base.prototype) { super.target = element; }
    this.collective.assimilate(element);
  }

};


class Collective {

  constructor() {
    this._elements = [];
  }

  assimilate(target) {
    let elements = target.collective ?
      target.collective.elements :
      [target];
    elements.forEach(element => {
      element.collective = this;
      this._elements.push(element);
    });
    this.invokeCollectiveMethod('collectiveChanged');
  }

  get elements() {
    return this._elements;
  }

  invokeCollectiveMethod(method, ...args) {
    // Invoke from innermost to outermost.
    let elements = this.elements;
    for (let i = elements.length - 1; i >= 0; i--) {
      let element = elements[i];
      if (element[method]) {
        element[method].apply(element, args);
      }
    }
  }

  get outermostElement() {
    return this.elements[0];
  }

}
