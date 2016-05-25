import ElementBase from '../../basic-element-base/src/ElementBase';
import DistributedChildrenAsContent from '../../basic-component-mixins/src/DistributedChildrenAsContent';
import ClickSelection from '../../basic-component-mixins/src/ClickSelection';
import ContentAsItems from '../../basic-component-mixins/src/ContentAsItems';
import DirectionSelection from '../../basic-component-mixins/src/DirectionSelection';
import Generic from '../../basic-component-mixins/src/Generic';
import ItemsSelection from '../../basic-component-mixins/src/ItemsSelection';
import Keyboard from '../../basic-component-mixins/src/Keyboard';
import KeyboardDirection from '../../basic-component-mixins/src/KeyboardDirection';
import KeyboardPagedSelection from '../../basic-component-mixins/src/KeyboardPagedSelection';
import KeyboardPrefixSelection from '../../basic-component-mixins/src/KeyboardPrefixSelection';
import ObserveContentChanges from '../../basic-component-mixins/src/ObserveContentChanges';
import SelectionAriaActive from '../../basic-component-mixins/src/SelectionAriaActive';
import SelectionHighlight from '../../basic-component-mixins/src/SelectionHighlight';
import SelectionInView from '../../basic-component-mixins/src/SelectionInView';
import TargetInCollective from '../../basic-component-mixins/src/TargetInCollective';


/**
 * A single-selection list box that supports selection highlighting (using the
 * system highlight color) and keyboard navigation.
 *
 * [Live demo](http://basicwebcomponents.org/basic-web-components/packages/basic-list-box/)
 *
 * The user can select an item with the mouse/touch or keyboard: Up/Down, Page
 * Up/Down, Home/End.
 *
 * Like other Basic Web Components, this can handle distributed content: you can
 * include a content element inside a basic-list-box, and the list will navigate
 * through the distributed content.
 *
 * This component includes basic ARIA support to provide a reasonable default
 * experience, e.g., for screen readers. The list component itself will be
 * assigned an appropriate ARIA role (default is "listbox"). The ID of the
 * selected item will be reflected in an "aria-activedescendant" attribute
 * applied to the list. To support this feature, all items in the list need
 * unique IDs. If an item does not have an ID, basic-list-box will automatically
 * assign a default ID.
 *
 * The keyboard interaction model generally follows that of Microsoft Windows'
 * list boxes instead of those in OS X:
 *
 * * The Page Up/Down and Home/End keys actually move the selection, rather than
 *   just scrolling the list. The former behavior seems more generally useful
 *   for keyboard users.
 *
 * * Pressing Page Up/Down will move the selection to the topmost/bottommost
 *   visible item if the selection is not already there. Thereafter, the key
 *   will move the selection up/down by a page, and (per the above point) make
 *   the selected item visible.
 *
 * Programmatically selecting an item (by setting the selected property) scrolls
 * the item into view.
 *
 * The user can also select an item by typing the beginning of an item's text.
 *
 * @extends ElementBase
 * @mixes ClickSelection
 * @mixes ContentAsItems
 * @mixes DirectionSelection
 * @mixes DistributedChildrenAsContent
 * @mixes Generic
 * @mixes ItemsSelection
 * @mixes Keyboard
 * @mixes KeyboardDirection
 * @mixes KeyboardPagedSelection
 * @mixes KeyboardPrefixSelection
 * @mixes ObserveContentChanges
 * @mixes SelectionAriaActive
 * @mixes SelectionHighlight
 * @mixes SelectionInView
 * @mixes TargetInCollective
 */
class ListBox extends ElementBase.compose(
  ClickSelection,
  ContentAsItems,
  DirectionSelection,
  DistributedChildrenAsContent,
  Generic,
  ItemsSelection,
  Keyboard,
  KeyboardDirection,
  KeyboardPagedSelection,
  KeyboardPrefixSelection,
  ObserveContentChanges,
  SelectionAriaActive,
  SelectionHighlight,
  SelectionInView,
  TargetInCollective
) {

  get defaults() {
    let defaults = super.defaults || {};
    defaults.navigationAxis = 'vertical';
    return defaults;
  }

  get scrollTarget() {
    return this.$.itemsContainer;
  }

  get template() {
    return `
      <style>
      :host {
        display: -webkit-flex;
        display: flex;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      }

      [target="child"] {
        display: -webkit-flex;
        display: flex;
        -webkit-flex: 1;
        flex: 1;
      }

      #itemsContainer {
        -webkit-flex: 1;
        flex: 1;
        -webkit-overflow-scrolling: touch;
        overflow-y: scroll; /* for momentum scrolling */
      }

      /* Generic appearance */
      :host([generic=""]) {
        border: 1px solid gray;
        box-sizing: border-box;
        cursor: default;
      }

      :host([generic=""]) #itemsContainer ::content > * {
        cursor: default;
        padding: 0.25em;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      </style>

      <div id="itemsContainer" role="none">
        <slot></slot>
      </div>
    `;
  }

  /**
   * The text content of the selected item.
   *
   * Setting this value to a string will attempt to select the first list item
   * whose text content match that string. Setting this to a string not matching
   * any list item will result in no selection.
   *
   * @type {string}
   */
  get value() {
    return this.selectedItem == null || this.selectedItem.textContent == null ?
      '' :
      this.selectedItem.textContent;
  }
  set value(text) {

    let currentIndex = this.selectedIndex;
    let newIndex = -1; // Assume we won't find the text.

    // Find the item with the indicated text.
    let items = this.items;
    for (let i = 0, length = items.length; i < length; i++) {
      if (items[i].textContent === text) {
        newIndex = i;
        break;
      }
    }

    if (newIndex !== currentIndex) {
      this.selectedIndex = newIndex;
      let event = new CustomEvent('value-changed');
      this.dispatchEvent(event);
    }
  }


  /**
   * Fires when the list's value property changes.
   *
   * @memberof ListBox
   * @event value-changed
   */
}


document.registerElement('basic-list-box', ListBox);
export default ListBox;
