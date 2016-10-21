import createSymbol from './createSymbol';
import safeAttributes from './safeAttributes';
import symbols from './symbols';


// Symbols for private data members on an element.
const keydownListenerSymbol = createSymbol('keydownListener');


/* Exported function extends a base class with Keyboard. */
export default (base) => {

  /**
   * Mixin which manages the keydown handling for a component.
   *
   * This mixin handles several keyboard-related features.
   *
   * First, it wires up a single keydown event handler that can be shared by
   * multiple mixins on a component. The event handler will invoke a `keydown`
   * method with the event object, and any mixin along the prototype chain that
   * wants to handle that method can do so.
   *
   * If a mixin wants to indicate that keyboard event has been handled, and that
   * other mixins should *not* handle it, the mixin's `keydown` handler should
   * return a value of true. The convention that seems to work well is that a
   * mixin should see if it wants to handle the event and, if not, then ask the
   * superclass to see if it wants to handle the event. This has the effect of
   * giving the mixin that was applied last the first chance at handling a
   * keyboard event.
   *
   * Example:
   *
   *     [symbols.keydown](event) {
   *       let handled;
   *       switch (event.keyCode) {
   *         // Handle the keys you want, setting handled = true if appropriate.
   *       }
   *       // Prefer mixin result if it's defined, otherwise use base result.
   *       return handled || (super[symbols.keydown] && super[symbols.keydown](event));
   *     }
   *
   * A second feature provided by this mixin is that it implicitly makes the
   * component a tab stop if it isn't already, by setting `tabIndex` to 0. This
   * has the effect of adding the component to the tab order in document order.
   *
   * Finally, this mixin is designed to work with the optional
   * [Collective](Collective.md) class via a mixin like
   * [TargetInCollective](TargetInCollective.md). This allows a set of related
   * component instances to cooperatively handle the keyboard. See the
   * Collective class for details.
   */
  class Keyboard extends base {

    constructor() {
      super();
      // Assume this component is going to handle the keyboard on its own.
      // REVIEW: Move to connectedCallback?
      startListeningToKeydown(this);
    }

    /*
     * If we're now the outermost element of the collective, set up to receive
     * keyboard events. If we're no longer the outermost element, stop
     * listening.
     */
    collectiveChanged() {
      if (super.collectiveChanged) { super.collectiveChanged(); }

      if (this.collective.outermostElement !== this) {
        // We're no longer the outermost element; stop listening.
        if (isListeningToKeydown(this)) {
          stopListeningToKeydown(this);
        }
        return;
      }

      if (!this.getAttribute('aria-label')) {
        // Since we're going to handle the keyboard, see if we can adopt an ARIA
        // label from an inner element of the collective.
        const label = getCollectiveAriaLabel(this.collective);
        if (label) {
          safeAttributes.setAttribute(this, 'aria-label', label);
        }
      }

      if (!isListeningToKeydown(this)) {
        startListeningToKeydown(this);
      }
    }

    connectedCallback() {
      if (super.connectedCallback) { super.connectedCallback(); }
      safeAttributes.connected(this);
      // Set a default tab index of 0 (document order) if no tab index exists.
      // MS Edge requires we explicitly check for presence of tabindex attribute.
      if (this.getAttribute('tabindex') == null || this.tabIndex < 0) {
        this.setAttribute('tabindex', '0');
      }
    }

    /**
     * Handle the indicated keyboard event.
     *
     * The default implementation of this method does nothing. This will
     * typically be handled by other mixins.
     *
     * @param {KeyboardEvent} event - the keyboard event
     * @return {boolean} true if the event was handled
     */
    [symbols.keydown](event) {
      if (super[symbols.keydown]) { return super[symbols.keydown](event); }
    }

  }

  return Keyboard;
};


// Fire the keydown() method on the element or (if it belongs to a collective)
// all elements in the collective.
//
// Note: the value of 'this' is bound to the element which received the event.
function keydown(event) {

  let handled = false;

  if (this.collective) {
    // Give collective elements a shot at the event, working from innermost to
    // outermost (this element).
    const elements = this.collective.elements;
    for (let i = elements.length - 1; i >= 0; i--) {
      const element = elements[i];
      handled = element[symbols.keydown] && element[symbols.keydown](event);
      if (handled) {
        break;
      }
    }
  } else {
    // Component is handling the keyboard on its own.
    handled = this[symbols.keydown](event);
  }

  if (handled) {
    event.preventDefault();
    event.stopPropagation();
  }
}


// Return the first ARIA label defined by the collective.
function getCollectiveAriaLabel(collective) {
  const labels = collective.elements.map(element => element.getAttribute('aria-label'));
  // Would prefer to use Array.prototype.find here, but IE 11 doesn't have it.
  const nonNullLabels = labels.filter(label => label != null);
  return nonNullLabels[0];
}


function isListeningToKeydown(element) {
  return element[keydownListenerSymbol] != null;
}


function startListeningToKeydown(element) {
  element[keydownListenerSymbol] = keydown.bind(element);
  element.addEventListener('keydown', element[keydownListenerSymbol]);
}


function stopListeningToKeydown(element) {
  element.removeEventListener('keydown', element[keydownListenerSymbol]);
  element[keydownListenerSymbol] = null;
  element.removeAttribute('tabindex');
}
