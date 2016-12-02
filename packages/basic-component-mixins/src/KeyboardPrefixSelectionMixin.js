import createSymbol from './createSymbol';
import symbols from './symbols';


// Symbols for private data members on an element.
const itemTextContentsSymbol = createSymbol('itemTextContents');
const typedPrefixSymbol = createSymbol('typedPrefix');
const prefixTimeoutSymbol = createSymbol('prefixTimeout');


/* Exported function extends a base class with KeyboardPrefixSelection. */
export default (base) => {

  /**
   * Mixin that handles list box-style prefix typing, in which the user can type
   * a string to select the first item that begins with that string.
   *
   * Example: suppose a component using this mixin has the following items:
   *
   *     <sample-list-component>
   *       <div>Apple</div>
   *       <div>Apricot</div>
   *       <div>Banana</div>
   *       <div>Blackberry</div>
   *       <div>Blueberry</div>
   *       <div>Cantaloupe</div>
   *       <div>Cherry</div>
   *       <div>Lemon</div>
   *       <div>Lime</div>
   *     </sample-list-component>
   *
   * If this component receives the focus, and the user presses the "b" or "B"
   * key, the "Banana" item will be selected, because it's the first item that
   * matches the prefix "b". (Matching is case-insensitive.) If the user now
   * presses the "l" or "L" key quickly, the prefix to match becomes "bl", so
   * "Blackberry" will be selected.
   *
   * The prefix typing feature has a one second timeout — the prefix to match
   * will be reset after a second has passed since the user last typed a key.
   * If, in the above example, the user waits a second between typing "b" and
   * "l", the prefix will become "l", so "Lemon" would be selected.
   *
   * This mixin expects the component to invoke a `keydown` method when a key is
   * pressed. You can use [KeyboardMixin](KeyboardMixin.md) for that
   * purpose, or wire up your own keyboard handling and call `keydown` yourself.
   *
   * This mixin also expects the component to provide an `items` property. The
   * `textContent` of those items will be used for purposes of prefix matching.
   */
  class KeyboardPrefixSelection extends base {

    // TODO: If the set of items is changed, reset the prefix.
    // itemsChanged() {
    //   this[itemTextContentsSymbol] = null;
    //   resetTypedPrefix(this);
    // }

    // TODO: If the selection is changed by some other means (e.g., arrow keys)
    // other than prefix typing, then that act should reset the prefix.

    [symbols.keydown](event) {
      let handled;
      let resetPrefix = true;

      switch (event.keyCode) {
        case 8: // Backspace
          handleBackspace(this);
          handled = true;
          resetPrefix = false;
          break;
        case 27: // Escape
          handled = true;
          break;
        default:
          if (!event.ctrlKey && !event.metaKey && !event.altKey &&
              event.which !== 32 /* Space */) {
            handlePlainCharacter(this, String.fromCharCode(event.which));
          }
          resetPrefix = false;
      }

      if (resetPrefix) {
        resetTypedPrefix(this);
      }

      // Prefer mixin result if it's defined, otherwise use base result.
      return handled || (super[symbols.keydown] && super[symbols.keydown](event));
    }

    /**
     * Select the first item whose text content begins with the given prefix.
     *
     * @param prefix [String] The prefix string to search for
     */
    selectItemWithTextPrefix(prefix) {
      if (super.selectItemWithTextPrefix) { super.selectItemWithTextPrefix(prefix); }
      if (prefix == null || prefix.length === 0) {
        return;
      }
      const index = getIndexOfItemWithTextPrefix(this, prefix);
      if (index >= 0) {
        this.selectedIndex = index;
      }
    }

  }

  return KeyboardPrefixSelection;
};


// Time in milliseconds after which the user is considered to have stopped
// typing.
const PREFIX_TIMEOUT_DURATION = 1000;


// Return the index of the first item with the given prefix, else -1.
function getIndexOfItemWithTextPrefix(element, prefix) {
  const itemTextContents = getItemTextContents(element);
  const prefixLength = prefix.length;
  for (let i = 0; i < itemTextContents.length; i++) {
    const itemTextContent = itemTextContents[i];
    if (itemTextContent.substr(0, prefixLength) === prefix) {
      return i;
    }
  }
  return -1;
}

// Return an array of the text content (in lowercase) of all items.
// Cache these results.
function getItemTextContents(element) {
  if (!element[itemTextContentsSymbol]) {
    const items = element.items;
    element[itemTextContentsSymbol] = items.map(child => {
      const text = child.textContent || child.alt;
      return text.toLowerCase();
    });
  }
  return element[itemTextContentsSymbol];
}

function handleBackspace(element) {
  const length = element[typedPrefixSymbol] ? element[typedPrefixSymbol].length : 0;
  if (length > 0) {
    element[typedPrefixSymbol] = element[typedPrefixSymbol].substr(0, length - 1);
  }
  element.selectItemWithTextPrefix(element[typedPrefixSymbol]);
  setPrefixTimeout(element);
}

function handlePlainCharacter(element, char) {
  const prefix = element[typedPrefixSymbol] || '';
  element[typedPrefixSymbol] = prefix + char.toLowerCase();
  element.selectItemWithTextPrefix(element[typedPrefixSymbol]);
  setPrefixTimeout(element);
}

function resetPrefixTimeout(element) {
  if (element[prefixTimeoutSymbol]) {
    clearTimeout(element[prefixTimeoutSymbol]);
    element[prefixTimeoutSymbol] = false;
  }
}

function resetTypedPrefix(element) {
  element[typedPrefixSymbol] = '';
  resetPrefixTimeout(element);
}

function setPrefixTimeout(element) {
  resetPrefixTimeout(element);
  element[prefixTimeoutSymbol] = setTimeout(() => {
    resetTypedPrefix(element);
  }, PREFIX_TIMEOUT_DURATION);
}
