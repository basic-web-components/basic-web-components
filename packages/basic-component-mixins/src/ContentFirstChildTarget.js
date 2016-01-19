/**
 * @class ContentFirstChildTarget
 * @classdesc Mixin that defines the target of a component -- the element the
 * component is managing or somehow responsible for -- as its first child
 */


export default (base) => class ContentFirstChildTarget extends base {

  contentChanged() {
    if (super.contentChanged) { super.contentChanged(); }
    let content = this.content;
    let target = content && content[0];
    if (target) {
      this.target = target;
    }
  }

  get target() {
    return this._target;
  }
  set target(element) {
    if ('target' in base.prototype) { super.target = element; }
    this._target = element;
  }

};
