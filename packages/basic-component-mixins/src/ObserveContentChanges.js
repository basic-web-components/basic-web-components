/**
 * @class ObserveContentChanges
 * @classdesc Wires up mutation observers to report any changes in a component's
 * content (direct children, or nodes distributed to slots).
 *
 * For the time being, this can only support a single level of distributed
 * content. That is, if a component contains a slot, and the set of nodes
 * directly assigned to that slot changes, then this mixin will detect the
 * change. However, this mixin does not yet detect changes in reprojected
 * nodes. If a component's host places a slot as a child of the component
 * instance, nodes assigned to the outer host will be assigned to the host's
 * slot, then reassigned to the slot element inside the component. Changes in
 * such reprojected nodes will not (yet) be detected by this mixin.
 *
 * For comparison, see Polymer's observeNodes API, which does solve the problem
 * of tracking changes in reprojected content.
 */


import microtask from './microtask';


// TODO: Don't respond to changes in attributes, or at least offer that as an
// option.

export default (base) => class ObserveContentChanges extends base {

  createdCallback() {
    if (super.createdCallback) { super.createdCallback(); }
    observeContentChanges(this);

    // Make an initial call to contentChanged() so that the component can do
    // initialization that it normally does when content changes.
    //
    // This will invoke contentChanged() handlers in other mixins. In order that
    // those mixins have a chance to complete their own initialization, we add
    // the contentChanged() call to the microtask queue.
    microtask(() => this.contentChanged());
  }

  contentChanged() {
    if (super.contentChanged) { super.contentChanged(); }
    let event = new CustomEvent('content-changed');
    this.dispatchEvent(event);
  }

};


// TODO: Decide whether we want an option to track changes to children
// attributes.
function observeContentChanges(element) {
  element._contentChangeObserver = new MutationObserver(() =>
    element.contentChanged()
  );
  element._contentChangeObserver.observe(element, {
    // attributes: true,
    characterData: true,
    childList: true,
    subtree: true
  });
}
