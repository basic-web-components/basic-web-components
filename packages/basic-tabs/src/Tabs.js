import ElementBase from '../../basic-element-base/src/ElementBase';
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
 */
class Tabs extends ElementBase.compose(
  ItemsSelection,
  TargetSelection
) {

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
