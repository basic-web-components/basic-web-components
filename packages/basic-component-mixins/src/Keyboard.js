/**
 * @class Keyboard
 * @classdesc Mixin which manages the keydown handling for a component
 *
 * TODO: Document collective behavior.
 * TODO: Provide baseline behavior outside of a collective.
 */

export default (base) => class Keyboard extends base {

  // Default keydown handler. This will typically be handled by other mixins.
  keydown(event) {
    if (super.keydown) { return super.keydown(event); }
  }

  /*
   * If we're now the outermost element of the collective, set up to receive
   * keyboard events. If we're no longer the outermost element, stop listening.
   */
  collectiveChanged() {
    if (super.collectiveChanged) { super.collectiveChanged(); }

    let outermostElement = this.collective.outermostElement;
    if (outermostElement === this && !this.getAttribute('aria-label')) {
      // Since we're handling the keyboard, see if we can adopt an ARIA label
      // from an inner element of the collective.
      let label = getCollectiveAriaLabel(this.collective);
      if (label) {
        this.setAttribute('aria-label', label);
      }
    }

    // Make sure only the outermost element in the collective is listening to
    // the keyboard.
    this.collective.elements.forEach(element => {

      let shouldListen = (element === outermostElement);
      let isListening = isListeningToKeydown(element);
      if (isListening !== shouldListen) {
        if (shouldListen) {
          startListeningToKeydown(element);
        } else {
          stopListeningToKeydown(element);
        }
      }
      if (!shouldListen && element.getAttribute('aria-label')) {
        // Remove the ARIA label from inner element's not handling the keyboard.
        element.removeAttribute('aria-label');
      }

    });
  }

};


function keydown(event) {

  // Give collective elements a shot at the event, working from innermost to
  // outermost (this element).
  let handled;
  let elements = this.collective.elements;
  for (let i = elements.length - 1; i >= 0; i--) {
    let element = elements[i];
    handled = element.keydown && element.keydown(event);
    if (handled) {
      break;
    }
  }

  if (handled) {
    event.preventDefault();
    event.stopPropagation();
  }
}


// Return the first ARIA label defined by the collective.
function getCollectiveAriaLabel(collective) {
  let labels = collective.elements.map(element => element.getAttribute('aria-label'));
  return labels.find(label => label !== null);
}


function isListeningToKeydown(element) {
  return element._keydownListener != null;
}


function startListeningToKeydown(element) {
  element._keydownListener = keydown.bind(element);
  element.addEventListener('keydown', element._keydownListener);
  // Set a default tab index of 0 (document order) if no tab index exists.
  // MS Edge requires we explicitly check for presence of tabindex attribute.
  if (element.getAttribute('tabindex') == null || element.tabIndex < 0) {
    element.setAttribute('tabindex', '0');
  }
}


function stopListeningToKeydown(element) {
  element.removeEventListener('keydown', element._keydownListener);
  element._keydownListener = null;
  element.removeAttribute('tabindex');
}
