/**
 * @class ShadowElementReferences
 * @classdesc Mixin to create references to elements in a component's Shadow
 * DOM subtree
 *
 * This adds a member on the component called `$` that can be used to reference
 * shadow elements with IDs. E.g., if component's shadow contains an element
 * `<button id="foo">`, then this mixin will create a member `this.$.foo` that
 * points to that button. Such references simplify a component's access to its
 * own elements.
 *
 * This trades off a one-time cost of querying all elements in the shadow tree
 * against having to query for an element each time the component wants to
 * inspect or manipulate it.
 *
 * This mixin is inspired by Polymer's automatic node finding feature.
 * See https://www.polymer-project.org/1.0/docs/devguide/local-dom.html#node-finding.
 */


export default (base) => class ShadowElementReferences extends base {

  createdCallback() {
    if (super.createdCallback) { super.createdCallback(); }
    if (this.shadowRoot) {
      this.$ = {};
      let nodesWithIds = this.shadowRoot.querySelectorAll('[id]');
      [].forEach.call(nodesWithIds, node => {
        let id = node.getAttribute('id');
        this.$[id] = node;
      });
    }
  }

};
