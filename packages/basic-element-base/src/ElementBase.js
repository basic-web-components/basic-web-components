import AttributeMarshallingMixin from '../../basic-component-mixins/src/AttributeMarshallingMixin';
import ComposableMixin from '../../basic-component-mixins/src/ComposableMixin';
import DistributedChildrenMixin from '../../basic-component-mixins/src/DistributedChildrenMixin';
import ShadowElementReferencesMixin from '../../basic-component-mixins/src/ShadowElementReferencesMixin';
import ShadowTemplateMixin from '../../basic-component-mixins/src/ShadowTemplateMixin';


/**
 * A sample general-purpose base class for defining custom elements that mixes
 * in some common features: template stamping into a shadow root, shadow element
 * references, marshalling attributes to properties, and retrieving the children
 * distributed to a component.
 *
 * This base class is not special in any way, and is defined only as a
 * convenient shorthand for applying the mixins listed above. You can use this
 * class as a base class for your own elements, or easily create your own base
 * class by applying the same set of mixins.
 *
 * The ElementBase base class does not register itself as a custom element with
 * the browser, and hence cannot be independently instantiated.
 *
 * @mixes AttributeMarshallingMixin
 * @mixes ComposableMixin
 * @mixes DistributedChildrenMixin
 * @mixes ShadowElementReferencesMixin
 * @mixes ShadowTemplateMixin
 */
class ElementBase extends ComposableMixin(HTMLElement).compose(
  ShadowTemplateMixin,          // before node finding, so shadow root is populated
  ShadowElementReferencesMixin, // before marshalling, so properties can use refs
  AttributeMarshallingMixin,
  DistributedChildrenMixin
) {}

export default ElementBase;
