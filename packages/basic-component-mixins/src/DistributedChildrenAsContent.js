/**
 * @class DistributedChildrenAsContent
 * @classdesc Mixin which defines a component's content as its children,
 * including any nodes distributed to the component's slots.
 */


export default (base) => class DistributedChildrenAsContent extends base {

  /**
   * The content of this component, defined to be the flattened array of
   * children distributed to the component.
   *
   * @property content
   * @type Array
   */
  get content() {
    return this.distributedChildren;
  }
  set content(value) {
    if ('content' in base.prototype) { super.content = value; }
  }

};
