import GenericMixin from '../../basic-component-mixins/src/GenericMixin';
import Modes from '../../basic-modes/src/Modes'; // jshint ignore:line
import TabStripMixin from '../../basic-tab-strip/src/TabStripMixin';


const base = Modes.compose(
  GenericMixin,
  TabStripMixin
);


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
 * @extends Modes
 * @mixes GenericMixin
 * @mixes TabStripMixin
 */
class Tabs extends base {

  get generic() {
    return super.generic;
  }
  set generic(value) {
    if ('generic' in base.prototype) { super.generic = value; }
    this.$.tabs.generic = value;
  }

}

customElements.define('basic-tabs', Tabs);
