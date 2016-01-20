/**
 * @class ElementBase
 * @classdesc A sample general-purpose base class for defining custom elements
 * that mixes in some common features: template stamping into a shadow root,
 * shadow element references, and marshalling between attributes and properties
 *
 * This base class is not special in any way, and is defined only as a
 * convenient shorthand for applying the mixins listed above. You can use this
 * class as a base class for your own elements, or easily create your own base
 * class by applying the same set of mixins.
 *
 * The ElementBase base class does not register itself as a custom element with
 * the browser, and hence cannot be independently instantiated.
 */


import Composable from '../../basic-component-mixins/src/Composable';
import ShadowTemplate from '../../basic-component-mixins/src/ShadowTemplate';
import ShadowElementReferences from '../../basic-component-mixins/src/ShadowElementReferences';
import AttributeMarshalling from '../../basic-component-mixins/src/AttributeMarshalling';


export default class ElementBase extends Composable(HTMLElement).compose(
  ShadowTemplate,          // before node finding, so shadow root is populated
  ShadowElementReferences, // before marshalling, so properties can use refs
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
