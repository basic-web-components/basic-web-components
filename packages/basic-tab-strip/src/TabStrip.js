import ElementBase from '../../basic-element-base/src/ElementBase';
import ContentFirstChildTarget from '../../basic-component-mixins/src/ContentFirstChildTarget';
import DirectionSelection from '../../basic-component-mixins/src/DirectionSelection';
import DistributedChildrenAsContent from '../../basic-component-mixins/src/DistributedChildrenAsContent';
import Keyboard from '../../basic-component-mixins/src/Keyboard';
import KeyboardDirection from '../../basic-component-mixins/src/KeyboardDirection';
import ItemsSelection from '../../basic-component-mixins/src/ItemsSelection';
import ObserveContentChanges from '../../basic-component-mixins/src/ObserveContentChanges';
import renderArrayAsElements from '../../basic-component-mixins/src/renderArrayAsElements';
import TargetInCollective from '../../basic-component-mixins/src/TargetInCollective';
import TargetSelection from '../../basic-component-mixins/src/TargetSelection';
import toggleClass from '../../basic-component-mixins/src/toggleClass';


let base = ElementBase.compose(
  ContentFirstChildTarget,
  DirectionSelection,
  DistributedChildrenAsContent,
  ItemsSelection,
  Keyboard,
  KeyboardDirection,
  ObserveContentChanges,
  TargetInCollective,
  TargetSelection
);


/**
 * A horizontal strip of tabs.
 */
class TabStrip extends base {

  applySelection(item, selected) {
    if (super.applySelection) { super.applySelection(item, selected); }
    let index = this.items.indexOf(item);
    // See if the corresponding tab has already been created.
    // If not, the correct tab will be selected when it gets created.
    let tabs = this.tabs;
    if (tabs && tabs.length > index) {
      let tab = this.tabs[index];
      if (tab) {
        toggleClass(tab, 'selected', selected);
      }
    }
  }

  createdCallback() {
    super.createdCallback();
    this.$.tabs.addEventListener('click', event => {
      let tab = event.target;
      let tabIndex = this.tabs.indexOf(tab);
      if (tabIndex >= 0) {
        this.selectedIndex = tabIndex;
      }
    });
  }

  get tabs() {
    return [].slice.call(this.$.tabs.querySelectorAll('.tab'));
  }

  itemsChanged() {
    if (super.itemsChanged) { super.itemsChanged(); }
    renderArrayAsElements(this.items, this.$.tabs, (item, element) => {
      if (!element) {
        element = document.createElement('div');
        element.classList.add('tab');
        element.classList.add('style-scope');
        element.classList.add('basic-page-tabs');
        return element;
      }
      element.textContent = item.getAttribute('aria-label');
    });
    this.selectedItemChanged();  // In case position of selected item moved.
  }

  selectedItemChanged() {
    if (super.selectedItemChanged) { super.selectedItemChanged(); }
    let selectedIndex = this.selectedIndex;
    this.tabs.forEach((tab, i) => {
      toggleClass(tab, 'selected', i === selectedIndex);
    });
  }

  get template() {
    return `
      <style>
      :host {
        display: -webkit-flex;
        display: flex;
        -webkit-flex-direction: column;
        flex-direction: column;
        position: relative;
      }

      #pages {
        background: white;
        border: 1px solid #ccc;
        display: -webkit-flex;
        display: flex;
        -webkit-flex: 1;
        flex: 1;
      }

      #pages ::content > * {
        display: -webkit-flex;
        display: flex;
        -webkit-flex: 1;
        flex: 1;
      }

      .tab {
        background: white;
        border: 1px solid #ccc;
        border-radius: 0.25em 0.25em 0 0;
        cursor: pointer;
        display: inline-block;
        padding: 0.5em 0.75em;
        position: relative;
        margin-bottom: -1px;
        margin-right: 0.2em;
        transition: border-color 0.25s;
      }

      .tab:hover {
        background-color: #eee;
      }

      .tab.selected {
        border-color: #ccc;
        border-bottom-color: transparent;
        opacity: 1;
      }
      </style>

      <div id="tabs"></div>
      <div id="pages">
        <slot></slot>
      </div>
    `;
  }

}


document.registerElement('basic-tab-strip', TabStrip);
export default TabStrip;
