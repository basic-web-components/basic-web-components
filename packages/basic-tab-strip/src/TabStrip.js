// import ClickSelectionMixin from '../../basic-component-mixins/src/ClickSelectionMixin';
import ContentItemsMixin from '../../basic-component-mixins/src/ContentItemsMixin';
import createSymbol from '../../basic-component-mixins/src/createSymbol';
import DirectionSelectionMixin from '../../basic-component-mixins/src/DirectionSelectionMixin';
import DistributedChildrenContentMixin from '../../basic-component-mixins/src/DistributedChildrenContentMixin';
import ElementBase from '../../basic-element-base/src/ElementBase';
import GenericMixin from '../../basic-component-mixins/src/GenericMixin';
import KeyboardDirectionMixin from '../../basic-component-mixins/src/KeyboardDirectionMixin';
import KeyboardMixin from '../../basic-component-mixins/src/KeyboardMixin';
import renderArrayAsElements from '../../basic-component-mixins/src/renderArrayAsElements';
import SingleSelectionMixin from '../../basic-component-mixins/src/SingleSelectionMixin';
import symbols from '../../basic-component-mixins/src/symbols';
import toggleClass from '../../basic-component-mixins/src/toggleClass';


// Symbols for private data members on an element.
const panelsSymbol = createSymbol('panels');
const spreadTabsSymbol = createSymbol('spreadTabs');
const tabPositionSymbol = createSymbol('tabPosition');


/**
 * A set of pages with a tab strip governing which page is shown.
 *
 * This stock combination applies the [TabStripMixin](../basic-tab-strip/) to a
 * [basic-modes](../basic-modes/) element. If you'd like to create something
 * more complex than this arrangement, you can use either of those elements on
 * its own.
 *
 * Since this component uses `TabStripMixin`, it obtains the names of the
 * individual tabs from a child's `aria-label` property. Example:
 *
 *     <basic-tabs>
 *       <div aria-label="One">Page one</div>
 *       <div aria-label="Two">Page two</div>
 *       <div aria-label="Three">Page three</div>
 *     </basic-tabs>
 *
 * @extends ElementBase
 * @mixes ClickSelectionMixin
 * @mixes ContentItemsMixin
 * @mixes DirectionSelectionMixin
 * @mixes DistributedChildrenContentMixin
 * @mixes GenericMixin
 * @mixes KeyboardMixin
 * @mixes KeyboardDirectionMixin
 * @mixes SingleSelectionMixin
 */
class TabStrip extends ElementBase.compose(
  // ClickSelectionMixin,
  DirectionSelectionMixin,
  GenericMixin,
  KeyboardMixin,
  KeyboardDirectionMixin,
  ContentItemsMixin,
  DistributedChildrenContentMixin,
  SingleSelectionMixin
) {

  constructor() {
    super();

    // Handle clicks/Enter on tab buttons.
    // TODO: Rationalize with ClickSelection?
    this.addEventListener('click', event => {
      this[symbols.handlingUserInteraction] = true;
      const tab = event.path[0];
      const index = Array.prototype.indexOf.call(this.items, tab);
      if (index >= 0 && this.selectedIndex !== index) {
        this.selectedIndex = index;
        // Note: We don't call preventDefault here. The default behavior for
        // mousedown includes setting keyboard focus if the element doesn't
        // already have the focus, and we want to preserve that behavior.
        event.stopPropagation();
      }
      this[symbols.handlingUserInteraction] = false;
    });

    // Set defaults.
    if (typeof this.tabPosition === 'undefined') {
      this.tabPosition = this[symbols.defaults].tabPosition;
    }
  }

  get [symbols.defaults]() {
    const defaults = super[symbols.defaults] || {};
    defaults.tabindex = null;
    defaults.tabPosition = 'top';
    return defaults;
  }

  get items() {
    return this.$.tabs.children;
  }

  [symbols.itemSelected](item, selected) {
    if (super[symbols.itemSelected]) { super[symbols.itemSelected](item, selected); }
    applySelectionToTab(item, selected);
  }

  [symbols.keydown](event) {
    const handled = super[symbols.keydown] && super[symbols.keydown](event);
    if (handled && this.selectedItem) {
      // If the event resulted in a change of selection, move the focus to the
      // newly-selected tab.
      this.selectedItem.focus();
    }
    return handled;
  }

  get panels() {
    return this[panelsSymbol];
  }
  set panels(panels) {
    this[panelsSymbol] = panels;

    // Create one tab for each panel.
    const selectedIndex = this.selectedIndex;
    const selectedPanel = panels[selectedIndex];
    renderArrayAsElements(panels, this.$.tabs, (panel, tab) => {
      if (!tab) {
        tab = document.createElement('button');
        tab.classList.add('tab');
        tab.classList.add('style-scope');
        tab.classList.add('basic-tab-strip');
        tab.setAttribute('role', 'tab');
        tab.setAttribute('tabindex', 0);
      }
      tab.id = panel.id + '_tab';
      tab.textContent = panel.getAttribute('aria-label');

      // Point tab and panel at each other.
      tab.setAttribute('aria-controls', panel.id);
      panel.setAttribute('aria-labelledby', tab.id);

      applySelectionToTab(tab, panel === selectedPanel);

      return tab;
    });

    this[symbols.itemsChanged]();
  }

  get spreadTabs() {
    return this[spreadTabsSymbol];
  }
  set spreadTabs(value) {
    this[spreadTabsSymbol] = value;
    toggleClass(this, 'spread', value);
  }

  /**
   * The position of the tab strip relative to the element's children. Valid
   * values are "top", "left", "right", and "bottom".
   *
   * @default "top"
   * @type {string}
   */
  get tabPosition() {
    return this[tabPositionSymbol];
  }
  set tabPosition(position) {
    this[tabPositionSymbol] = position;
    this.reflectAttribute('tab-position', position);
    this.navigationAxis = (position === 'top' || position === 'bottom') ?
      'horizontal' :
      'vertical';
  }

  get [symbols.template]() {
    return `
      <style>
        :host {
          display: -webkit-flex;
          display: flex;
        }

        /*
         * Avoid having tab container stretch across. User won't be able to see
         * it, but since it handles the keyboard, in Mobile Safari a tap on the
         * container background will cause the region to flash. Aligning the
         * region collapses it down to hold its contents.
         */
        #tabs {
          /* For IE bug (clicking tab produces gap between tab and page). */
          display: -webkit-flex;
          display: flex;
          -webkit-flex-direction: row;
          flex-direction: row;
          -webkit-flex: 1;
          flex: 1;
          /*
           * Try to obtain fast-tap behavior on all tabs.
           * See https://webkit.org/blog/5610/more-responsive-tapping-on-ios/.
           */
          touch-action: manipulation;
        }
        :host(:not(.spread)) #tabs {
          -webkit-align-self: flex-start;
          align-self: flex-start;
        }

        .tab {
          cursor: pointer;
          display: inline-block;
          font-family: inherit;
          font-size: inherit;
          position: relative;
        }

        :host([generic=""]) .tab {
          background: white;
          border: 1px solid #ccc;
          margin: 0;
          padding: 0.5em 0.75em;
          transition: border-color 0.25s;
        }

        :host([generic=""]) .tab.selected {
          border-color: #ccc;
          opacity: 1;
        }

        :host([generic=""]) .tab:hover {
          background-color: #eee;
        }

        /* Left/right positions */
        :host([tab-position="left"]) #tabs,
        :host([tab-position="right"]) #tabs {
          -webkit-flex-direction: column;
          flex-direction: column;
        }

        /* Spread variant */
        :host(.spread) #tabs {
          -webkit-align-items: stretch;
          align-items: stretch;
        }
        :host(.spread) .tab {
          -webkit-flex: 1;
          flex: 1;
        }

        /* Generic style, top/bottom positions */
        :host([generic=""][tab-position="top"]) .tab:not(:last-child),
        :host([generic=""][tab-position="bottom"]) .tab:not(:last-child) {
          margin-right: 0.2em;
        }

        /* Generic style, top position */
        :host([generic=""][tab-position="top"]) .tab {
          border-radius: 0.25em 0.25em 0 0;
          margin-bottom: -1px;
        }
        :host([generic=""][tab-position="top"]) .tab.selected {
          border-bottom-color: transparent;
        }

        /* Generic style, bottom position */
        :host([generic=""][tab-position="bottom"]) .tab {
          border-radius: 0 0 0.25em 0.25em;
          margin-top: -1px;
        }
        :host([generic=""][tab-position="bottom"]) .tab.selected {
          border-top-color: transparent;
        }

        /* Generic style, left/right positions */
        :host([generic=""][tab-position="left"]) .tab:not(:last-child),
        :host([generic=""][tab-position="right"]) .tab:not(:last-child) {
          margin-bottom: 0.2em;
        }

        /* Generic style, left position */
        :host([generic=""][tab-position="left"]) .tab {
          border-radius: 0.25em 0 0 0.25em;
          margin-right: -1px;
        }
        :host([generic=""][tab-position="left"]) .tab.selected {
          border-right-color: transparent;
        }

        /* Generic style, right position */
        :host([generic=""][tab-position="right"]) .tab {
          border-radius: 0 0.25em 0.25em 0;
          margin-left: -1px;
        }
        :host([generic=""][tab-position="right"]) .tab.selected {
          border-left-color: transparent;
        }
      </style>
      <div id="tabs" role="tablist"></div>
    `;
  }
}


function applySelectionToTab(tab, selected) {
  tab.setAttribute('aria-selected', selected);
}


customElements.define('basic-tab-strip', TabStrip);
export default TabStrip;
