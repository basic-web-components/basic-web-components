import ElementBase from '../../basic-element-base/src/ElementBase';
import ContentItemsMixin from '../../basic-component-mixins/src/ContentItemsMixin';
import DistributedChildrenContentMixin from '../../basic-component-mixins/src/DistributedChildrenContentMixin';
import FractionalSelectionMixin from '../../basic-component-mixins/src/FractionalSelectionMixin';
import SelectionAnimationMixin from '../../basic-component-mixins/src/SelectionAnimationMixin';
import SelectionAriaActiveMixin from '../../basic-component-mixins/src/SelectionAriaActiveMixin';
import SingleSelectionMixin from '../../basic-component-mixins/src/SingleSelectionMixin';
import symbols from '../../basic-component-mixins/src/symbols';


const base = ElementBase.compose(
  ContentItemsMixin,
  DistributedChildrenContentMixin,
  FractionalSelectionMixin,
  SelectionAnimationMixin,
  SelectionAriaActiveMixin,
  SingleSelectionMixin
);

/**
 * Presents a single item as selected, providing animated transitions when the
 * selection changes. The same animation can be shown at an arbitrary point,
 * generally used to reflect a user-controlled touch or trackpad drag operation
 * in progress.
 *
 * [Live demo](http://basicwebcomponents.org/basic-web-components/packages/demos/animation-stage-with-dots.html)
 *
 * This component is intended to be used as a programmatic rendering surface for
 * components which want to show transitional effects.
 *
 * The component uses [SelectionAnimationMixin](../basic-component-mixins/docs/SelectionAnimationMixin.md)
 * mixin, which in turn uses the Web Animations API. For use on browsers which
 * do not support that API natively, you will need to load the
 * [Web Animations polyfill](https://github.com/web-animations/web-animations-js).
 *
 * For a simpler component that exhibits only a sliding effect, but does not
 * require the Web Animations API, see [basic-sliding-viewport](../basic-sliding-viewport).
 *
 * @extends ElementBase
 * @mixes ContentItemsMixin
 * @mixes DistributedChildrenContentMixin
 * @mixes SelectionAnimationMixin
 * @mixes SelectionAriaActiveMixin
 * @mixes SingleSelectionMixin
 */
class AnimationStage extends base {

  get [symbols.defaults]() {
    const defaults = super[symbols.defaults] || {};
    defaults.selectionRequired = true;
    return defaults;
  }

  get [symbols.template]() {
    return `
      <style>
      :host {
        overflow: hidden;
        position: relative;
      }

      #container ::slotted(*) {
        height: 100%;
        object-fit: contain;
        position: absolute;
        width: 100%;
        will-change: transform;
      }
      </style>

      <div id="container" role="none">
        <slot></slot>
      </div>
    `;
  }

}


customElements.define('basic-animation-stage', AnimationStage);
export default AnimationStage;
