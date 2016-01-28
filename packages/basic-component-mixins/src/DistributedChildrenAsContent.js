/**
 * @class DistributedChildrenAsContent
 * @classdesc Mixin which defines a component's content as its children,
 * expanding any nodes distributed to the component's slots.
 *
 * This mixin is intended for use with the DistributedChildren mixin. See that
 * mixin for a discussion of how that works. This DistributedChildrenAsContent
 * mixin provides an easy way of defining the "content" of a component as the
 * component's distributed children. That in turn lets mixins like
 * ContentAsItems manipulate the children as list items.
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
