/*
 * Polymer-style automatic node finding.
 * See https://www.polymer-project.org/1.0/docs/devguide/local-dom.html#node-finding.
 */

export default (base) => class AutomaticNodeFinding extends base {

  createdCallback() {
    if (super.createdCallback) { super.createdCallback(); }
    if (this.shadowRoot) {
      this.$ = {};
      var nodesWithIds = this.shadowRoot.querySelectorAll('[id]');
      [].forEach.call(nodesWithIds, node => {
        var id = node.getAttribute('id');
        this.$[id] = node;
      });
    }
  }

};
