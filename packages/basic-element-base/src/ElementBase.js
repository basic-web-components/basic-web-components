/*
 * A sample general-purpose base class for defining custom elements that mixes
 * in some common features: template stamping into a shadow root, automatic node
 * finding, and marshalling between attributes and properties.
 */


import Composable from '../../basic-component-mixins/src/Composable';
import TemplateStamping from '../../basic-component-mixins/src/TemplateStamping';
import AutomaticNodeFinding from '../../basic-component-mixins/src/AutomaticNodeFinding';
import AttributeMarshalling from '../../basic-component-mixins/src/AttributeMarshalling';


export default class ElementBase extends Composable(HTMLElement).compose(
  TemplateStamping,     // before node finding, so shadow root is populated
  AutomaticNodeFinding, // before marshalling, so marshalled properties can use it
  AttributeMarshalling
) {

  /*
   * Debugging utility: logs a message, prefixed by the component's tag.
   */
  log(text) {
    if (super.log) { super.log(text); }
    console.log(`${this.localName}: ${text}`);
  }

}
