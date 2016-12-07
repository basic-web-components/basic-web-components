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
      this.$.tabStrip.addEventListener('selected-item-changed', () => {
        console.log(this.selectedItem);
      });
    }

    // [symbols.applySelection](item, selected) {
    //   if (super[symbols.applySelection]) { super[symbols.applySelection](item, selected); }
    //   const index = this.items.indexOf(item);
    //   // See if the corresponding tab has already been created.
    //   // If not, the correct tab will be selected when it gets created.
    //   const tabs = this.tabs;
    //   if (tabs && tabs.length > index) {
    //     const tab = this.tabs[index];
    //     if (tab) {
    //       applySelectionToTab(tab, selected);
    //     }
    //   }
    // }

    get [symbols.defaults]() {
      const defaults = super[symbols.defaults] || {};
      defaults.tabPosition = 'top';
      return defaults;
    }

    get tabs() {
      return [].slice.call(this.$.tabs.querySelectorAll('.tab'));
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
        :host([tab-position="left"]) #tabs,
        :host([tab-position="right"]) #tabs {
          -webkit-flex-direction: column;
          flex-direction: column;
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
