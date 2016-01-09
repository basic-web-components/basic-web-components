/**
 * A single-selection list box that supports selection highlighting (using the
 * system highlight color) and keyboard navigation.
 *
 * The user can select an item with the mouse/touch or keyboard: Up/Down, Page
 * Up/Down, Home/End.
 *
 * Like other Basic Web Components, this can handle distributed content: you can
 * include a content element inside a basic-list-box, and the list will navigate
 * through the distributed content. Note: for the time being, if you do use basic-
 * list-box inside your own component, it appears that you'll need to wire up your
 * own keyboard navigation, and forward the list navigation keys to the basic-list-
 * box.
 *
 * This component includes basic ARIA support to provide a reasonable default
 * experience, e.g., for screen readers. The list component itself will be assigned
 * an appropriate ARIA role (default is "listbox"). The ID of the selected item
 * will be reflected in an "aria-activedescendant" attribute applied to the list.
 * To support this feature, all items in the list need unique IDs. If an item does
 * not have an ID, basic-list-box will automatically assign a default ID.
 *
 * The keyboard interaction model generally follows that of Microsoft Windows'
 * list boxes instead of those in OS X:
 *
 * * The Page Up/Down and Home/End keys actually move the selection, rather than
 *   just scrolling the list. The former behavior seems more generally useful for
 *   keyboard users.
 *
 * * Pressing Page Up/Down will move the selection to the topmost/bottommost
 *   visible item if the selection is not already there. Thereafter, the key will
 *   move the selection up/down by a page, and (per the above point) make the
 *   selected item visible.
 *
 * Programmatically selecting an item (by setting the selected property) scrolls
 * the item into view.
 *
 * The user can also select an item by typing the beginning of an item's text.
 *
 * @class ListBox
 */


import ElementBase from '../../basic-element-base/src/ElementBase';
import ChildrenContent from '../../basic-component-mixins/src/ChildrenContent';
import ClickSelection from '../../basic-component-mixins/src/ClickSelection';
import CollectiveElement from '../../basic-component-mixins/src/CollectiveElement';
import ContentItems from '../../basic-component-mixins/src/ContentItems';
import DirectionSelection from '../../basic-component-mixins/src/DirectionSelection';
import Generic from '../../basic-component-mixins/src/Generic';
import ItemSelection from '../../basic-component-mixins/src/ItemSelection';
import ItemsAccessible from '../../basic-component-mixins/src/ItemsAccessible';
import Keyboard from '../../basic-component-mixins/src/Keyboard';
import KeyboardDirection from '../../basic-component-mixins/src/KeyboardDirection';
import KeyboardPagedSelection from '../../basic-component-mixins/src/KeyboardPagedSelection';
import KeyboardPrefixSelection from '../../basic-component-mixins/src/KeyboardPrefixSelection';
import SelectionHighlight from '../../basic-component-mixins/src/SelectionHighlight';
import SelectionScroll from '../../basic-component-mixins/src/SelectionScroll';


export default class ListBox extends ElementBase.compose(
    ChildrenContent,
    ClickSelection,
    CollectiveElement,
    ContentItems,
    DirectionSelection,
    Generic,
    ItemSelection,
    ItemsAccessible,
    Keyboard,
    KeyboardDirection,
    KeyboardPagedSelection,
    KeyboardPrefixSelection,
    SelectionHighlight,
    SelectionScroll
  ) {

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
        user-select: none;
      }
      </style>

      <div id="itemsContainer" role="none">
        <slot></slot>
      </div>
    `;
  }

}


document.registerElement('basic-list-box', ListBox);
