import TabStrip from './TabStrip'; // jshint line:ignore
import symbols from '../../basic-component-mixins/src/symbols';


// Used to assign unique IDs to tabs for ARIA purposes.
let idCount = 0;


/* Exported function extends a base class with TabStrip. */
export default (base) => {

  /**
   * A template mixin which adds strip of tabs for selecting one of the
   * component's children.
   *
   * The component creates a tab to represent each of its light DOM children.
   * The tab name is obtained by examining the children for an `aria-label`
   * property.
   *
   * Use tabs when you want to provide a large set of options or elements than
   * can comfortably fit inline, the options can be coherently grouped into pages,
   * and you want to avoid making the user navigate to a separate page. Tabs work
   * best if you only have a small handful of pages, say 2–7.
   *
   * The basic-tab-strip component does not define how a selected child is
   * represented. If you're looking for the standard behavior of just showing only
   * the selected child, you can use this component in combination with the
   * separate [basic-modes](../basic-modes/) component. A typical arrangement:
   *
   *     <basic-tab-strip>
   *       <basic-modes aria-label="Panels">
   *         <div aria-label="One">Page one</div>
   *         <div aria-label="Two">Page two</div>
   *         <div aria-label="Three">Page three</div>
   *       </basic-modes>
   *     </basic-tab-strip>
   *
   * The above combination is so common it is provided as a single component,
   * [basic-tabs](../basic-tabs/).
   *
   * The user can select a tab with the mouse or touch, as well as by through the
   * keyboard. Each tab appears as a separate button in the tab order.
   * Additionally, if the focus is currently on a tab, the user can quickly
   * navigate between tabs with the left/right arrow keys (or, if the tabs are
   * in vertical position, the up/down arrow keys).
   *
   * By default, the tabs are shown grouped to the left, where each tab is only
   * as big as necessary. You can apply the `spread` CSS class to a
   * basic-tab-strip element for a variant appearance in which the available width
   * of the element is divided up equally among tabs.
   *
   * The GenericMixin default styling of the tab strip will present the classic
   * skeumorphic look of rounded tabs attached to a surface. You can remove this
   * styling by setting the `GenericMixin` property/attribute to false.
   */
  class TabStrip extends base {

    constructor() {
      super();
      this.$.tabStrip.addEventListener('selected-item-changed', event => {
        const selectedIndex = event.target.selectedIndex;
        if (this.selectedIndex !== selectedIndex) {
          this.selectedIndex = selectedIndex;
        }
      });
    }

    get [symbols.defaults]() {
      const defaults = super[symbols.defaults] || {};
      defaults.tabPosition = 'top';
      return defaults;
    }

    get generic() {
      return super.generic;
    }
    set generic(value) {
      if ('generic' in base.prototype) { super.generic = value; }
      this.$.tabStrip.generic = value;
    }

    [symbols.itemsChanged]() {
      if (super[symbols.itemsChanged]) { super[symbols.itemsChanged](); }

      const baseId = this.id ?
        "_" + this.id + "Panel" :
        "_panel";

      // Confirm that items have at least a default role and ID for ARIA purposes.
      this.items.forEach(item => {
        // if (!item.getAttribute('role')) {
          item.setAttribute('role', 'tabpanel');
        // }
        if (!item.id) {
          item.id = baseId + idCount++;
        }
      });

      // Point the tab strip at the panels.
      this.$.tabStrip.panels = this.items;
      this.$.tabStrip.selectedIndex = this.selectedIndex;
    }

    get selectedIndex() {
      return super.selectedIndex;
    }
    set selectedIndex(value) {
      if ('selectedIndex' in base.prototype) { super.selectedIndex = value; }
      if (this.$.tabStrip.selectedIndex !== value) {
        this.$.tabStrip.selectedIndex = value;
      }
    }

    get spreadTabs() {
      return this.$.tabStrip.spreadTabs;
    }
    set spreadTabs(value) {
      this.$.tabStrip.spreadTabs = value;
    }

    get tabPosition() {
      return this.$.tabStrip.tabPosition;
    }
    set tabPosition(position) {
      this.$.tabStrip.tabPosition = position;
      this.reflectAttribute('tab-position', position);

      // Physically reorder the tabs and pages to reflect the desired arrangement.
      // We could change the visual appearance by reversing the order of the flex
      // box, but then the visual order wouldn't reflect the document order, which
      // determines focus order. That would surprise a user trying to tab through
      // the controls.
      const firstElement = (position === 'top' || position === 'left') ?
        this.$.tabStrip :
        this.$.pages;
      const lastElement = (position === 'top' || position === 'left') ?
        this.$.pages :
        this.$.tabStrip;
      if (firstElement.nextSibling !== lastElement) {
        this.shadowRoot.insertBefore(firstElement, lastElement);
      }

    }

    get template() {
      const baseTemplate = super.template || '';
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
          display: -webkit-flex;
          display: flex;
          -webkit-flex: 1;
          flex: 1;
          -webkit-flex-direction: column;
          flex-direction: column;
        }

        #pages ::slotted(*) {
          display: -webkit-flex;
          display: flex;
          -webkit-flex: 1;
          flex: 1;
        }

        /* Left/right positions */
        :host([tab-position="left"]),
        :host([tab-position="right"]) {
          -webkit-flex-direction: row;
          flex-direction: row;
        }

        /* Generic style */
        :host([generic=""]) #pages {
          background: white;
          border: 1px solid #ccc;
          box-sizing: border-box;
        }
        </style>

        <basic-tab-strip id="tabStrip" role="tablist"></basic-tab-strip>
        <div id="pages">
          ${baseTemplate}
        </div>
      `;
    }

  }

  return TabStrip;
};
