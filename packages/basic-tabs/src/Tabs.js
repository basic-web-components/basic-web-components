import ElementBase from '../../basic-element-base/src/ElementBase';
import Generic from '../../basic-component-mixins/src/Generic';
import ItemsSelection from '../../basic-component-mixins/src/ItemsSelection';
import Modes from '../../basic-modes/src/Modes'; // jshint ignore:line
import TabStrip from '../../basic-tab-strip/src/TabStrip'; // jshint ignore:line
import TargetSelection from '../../basic-component-mixins/src/TargetSelection';


/**
 * A set of pages with a tab strip governing which page is shown.
 *
 * This stock combination puts together a [basic-tab-strip](../basic-tab-strip/)
 * and a [basic-modes](../basic-modes/) element. If you'd like to create
 * something more complex than this arrangement, you can use either of those
 * elements on its own.
 *
 * Since this component uses basic-tab-strip internally, it obtains the names of
 * the individual tabs the same way: from a child's `aria-label` property.
 * Example:
 *
 *     <basic-tabs>
 *       <div aria-label="One">Page one</div>
 *       <div aria-label="Two">Page two</div>
 *       <div aria-label="Three">Page three</div>
 *     </basic-tabs>
 *
 * @extends ElementBase
 * @mixes ItemsSelection
 * @mixes TargetSelection
 */
class Tabs extends ElementBase.compose(
  Generic,
  ItemsSelection,
  TargetSelection
) {

  get generic() {
    return super.generic;
  }
  set generic(value) {
    super.generic = value;
    // Forward the generic value to the tab strip.
    this.$.tabStrip.generic = value;
  }

  /**
   * The position of the tab strip relative to the element's children. Valid
   * values are "top", "left", "right", and "bottom".
   *
   * @default "top"
   * @type {string}
   */
  get tabPosition() {
    return this.$.tabStrip.tabPosition;
  }
  set tabPosition(position) {
    this.$.tabStrip.tabPosition = position;
  }

  get target() {
    return this.$.modes;
  }

  get template() {
    return `
      <style>
      :host {
        display: -webkit-inline-flex;
        display: inline-flex;
        -webkit-flex-direction: column;
        flex-direction: column;
      }

      #tabStrip {
        -webkit-flex: 1;
        flex: 1;
      }
      </style>

      <basic-tab-strip id="tabStrip">
        <basic-modes id="modes">
          <slot></slot>
        </basic-modes>
      </basic-tab-strip>
    `;
  }

}


document.registerElement('basic-tabs', Tabs);
