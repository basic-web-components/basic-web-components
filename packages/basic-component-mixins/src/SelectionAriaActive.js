import symbols from './symbols';


// Used to assign unique IDs to item elements without IDs.
let idCount = 0;


/* Exported function extends a base class with SelectionAriaActive. */
export default (base) => {

  /**
   * Mixin which treats the selected item in a list as the active item in ARIA
   * accessibility terms.
   *
   * Handling ARIA selection state properly is actually quite complex:
   *
   * * The items in the list need to be indicated as possible items via an ARIA
   *   `role` attribute value such as "option".
   * * The selected item need to be marked as selected by setting the item's
   *   `aria-selected` attribute to true *and* the other items need be marked as
   *   *not* selected by setting `aria-selected` to false.
   * * The outermost element with the keyboard focus needs to have attributes
   *   set on it so that the selection is knowable at the list level via the
   *   `aria-activedescendant` attribute.
   * * Use of `aria-activedescendant` in turn requires that all items in the
   *   list have ID attributes assigned to them.
   *
   * This mixin tries to address all of the above requirements. To that end,
   * this mixin will assign generated IDs to any item that doesn't already have
   * an ID.
   *
   * ARIA relies on elements to provide `role` attributes. This mixin will apply
   * a default role of "listbox" on the outer list if it doesn't already have an
   * explicit role. Similarly, this mixin will apply a default role of "option"
   * to any list item that does not already have a role specified.
   *
   * This mixin expects a set of members that manage the state of the selection:
   * `[symbols.applySelection]`, `itemAdded`, and `selectedIndex`. You can supply these
   * yourself, or do so via the [SingleSelection](SingleSelection.md) mixin.
   */
  class SelectionAriaActive extends base {

    [symbols.applySelection](item, selected) {
      if (super[symbols.applySelection]) { super[symbols.applySelection](item, selected); }
      item.setAttribute('aria-selected', selected);
      const itemId = item.id;
      if (itemId) {
        if (selected) {
          outermostElement(this).setAttribute('aria-activedescendant', itemId);
        }
      }
    }

    collectiveChanged() {
      if (super.collectiveChanged) { super.collectiveChanged(); }
      setAriaAttributes(this);
    }

    connectedCallback() {
      if (super.connectedCallback) { super.connectedCallback(); }
      setAriaAttributes(this);
    }

    [symbols.itemAdded](item) {
      if (super[symbols.itemAdded]) { super[symbols.itemAdded](item); }

      if (!item.getAttribute('role')) {
        // Assign a default ARIA role.
        item.setAttribute('role', 'option');
      }

      // Ensure each item has an ID so we can set aria-activedescendant on the
      // overall list whenever the selection changes.
      //
      // The ID will take the form of a base ID plus a unique integer. The base
      // ID will be incorporate the component's own ID. E.g., if a component has
      // ID "foo", then its items will have IDs that look like "_fooOption1". If
      // the compnent has no ID itself, its items will get IDs that look like
      // "_option1". Item IDs are prefixed with an underscore to differentiate
      // them from manually-assigned IDs, and to minimize the potential for ID
      // conflicts.
      if (!item.id) {
        const baseId = this.id ?
            "_" + this.id + "Option" :
            "_option";
        item.id = baseId + idCount++;
      }
    }

    get selectedItem() {
      return super.selectedItem;
    }
    set selectedItem(item) {
      if ('selectedItem' in base.prototype) { super.selectedItem = item; }
      // Catch the case where the selection is removed.
      if (item == null) {
        outermostElement(this).removeAttribute('aria-activedescendant');
      }
    }

  }

  return SelectionAriaActive;
};


// Return the first ARIA activedescendant defined by the collective.
function getCollectiveAriaActiveDescendant(collective) {
  const descendants = collective.elements.map(element => element.getAttribute('aria-activedescendant'));
  const nonNullDescendants = descendants.filter(descendant => descendant !== null);
  return nonNullDescendants[0];
}


// Return the first ARIA label defined by the collective.
function getCollectiveAriaRole(collective) {
  const roles = collective.elements.map(element => element.getAttribute('role'));
  const nonNullRoles = roles.filter(role => role !== null);
  return nonNullRoles[0];
}

function outermostElement(element) {
  return element.collective ?
    element.collective.outermostElement :
    element;
}

function setAriaAttributes(element) {

  if (!element.isConnected) {
    return;
  }
  if (element.collective && element !== element.collective.outermostElement) {
    // Not the outermost element, do nothing and let the outermost element
    // handle things.
    return;
  }

  // Ensure the element has an ARIA role.
  if (!element.getAttribute('role')) {
    // Try to promote an ARIA role from an inner element. If none is found,
    // use a default role.
    let role = element.collective && getCollectiveAriaRole(element.collective);
    role = role || 'listbox';
    element.setAttribute('role', role);
  }

  if (!element.getAttribute('aria-activedescendant') && element.collective) {
    // Try to promote an ARIA activedescendant value from an inner element.
    const descendant = getCollectiveAriaActiveDescendant(element.collective);
    if (descendant) {
      element.setAttribute('aria-activedescendant', descendant);
    }
  }

  if (element.collective) {
    // Remove the ARIA role and activedescendant values from the collective's
    // inner elements.
    element.collective.elements.forEach(member => {
      if (member !== element) {
        member.removeAttribute('aria-activedescendant');
        member.setAttribute('role', 'none');
      }
    });
  }

}
