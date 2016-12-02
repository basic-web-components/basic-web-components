import ElementBase from '../../basic-element-base/src/ElementBase';
import DistributedChildrenContentMixin from '../../basic-component-mixins/src/DistributedChildrenContentMixin';
import ClickSelectionMixin from '../../basic-component-mixins/src/ClickSelectionMixin';
import ContentItemsMixin from '../../basic-component-mixins/src/ContentItemsMixin';
import DirectionSelectionMixin from '../../basic-component-mixins/src/DirectionSelectionMixin';
import GenericMixin from '../../basic-component-mixins/src/GenericMixin';
import KeyboardMixin from '../../basic-component-mixins/src/KeyboardMixin';
import KeyboardDirectionMixin from '../../basic-component-mixins/src/KeyboardDirectionMixin';
import KeyboardPagedSelectionMixin from '../../basic-component-mixins/src/KeyboardPagedSelectionMixin';
import KeyboardPrefixSelectionMixin from '../../basic-component-mixins/src/KeyboardPrefixSelectionMixin';
import SelectedItemTextValueMixin from '../../basic-component-mixins/src/SelectedItemTextValueMixin';
import SelectionAriaActiveMixin from '../../basic-component-mixins/src/SelectionAriaActiveMixin';
import SelectionHighlightMixin from '../../basic-component-mixins/src/SelectionHighlightMixin';
import SelectionInViewMixin from '../../basic-component-mixins/src/SelectionInViewMixin';
import SingleSelectionMixin from '../../basic-component-mixins/src/SingleSelectionMixin';
import symbols from '../../basic-component-mixins/src/symbols';


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
 * @mixes ClickSelectionMixin
 * @mixes ContentItemsMixin
 * @mixes DirectionSelectionMixin
 * @mixes DistributedChildrenContentMixin
 * @mixes GenericMixin
 * @mixes KeyboardMixin
 * @mixes KeyboardDirectionMixin
 * @mixes KeyboardPagedSelectionMixin
 * @mixes KeyboardPrefixSelectionMixin
 * @mixis SelectedItemTextValueMixin
 * @mixes SelectionAriaActiveMixin
 * @mixes SelectionHighlightMixin
 * @mixes SelectionInViewMixin
 * @mixes SingleSelectionMixin
 */
class ListBox extends ElementBase.compose(
  ClickSelectionMixin,
  ContentItemsMixin,
  DirectionSelectionMixin,
  DistributedChildrenContentMixin,
  GenericMixin,
  KeyboardMixin,
  KeyboardDirectionMixin,
  KeyboardPagedSelectionMixin,
  KeyboardPrefixSelectionMixin,
  SelectedItemTextValueMixin,
  SelectionAriaActiveMixin,
  SelectionHighlightMixin,
  SelectionInViewMixin,
  SingleSelectionMixin
) {

  get [symbols.defaults]() {
    const defaults = super[symbols.defaults] || {};
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

      /* GenericMixin appearance */
      :host([generic=""]) {
        border: 1px solid gray;
        box-sizing: border-box;
        cursor: default;
      }

      :host([generic=""]) #itemsContainer ::slotted(*) {
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
   * Fires when the list's value property changes.
   *
   * @memberof ListBox
   * @event value-changed
   */
}


customElements.define('basic-list-box', ListBox);
export default ListBox;
