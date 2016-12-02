import ElementBase from '../../basic-element-base/src/ElementBase';
import ContentFirstChildTargetMixin from '../../basic-component-mixins/src/ContentFirstChildTargetMixin';
import DistributedChildrenContentMixin from '../../basic-component-mixins/src/DistributedChildrenContentMixin';
import KeyboardMixin from '../../basic-component-mixins/src/KeyboardMixin';
import KeyboardDirectionMixin from '../../basic-component-mixins/src/KeyboardDirectionMixin';
import symbols from '../../basic-component-mixins/src/symbols';
import TargetInCollectiveMixin from '../../basic-component-mixins/src/TargetInCollectiveMixin';
import TargetSelectionMixin from '../../basic-component-mixins/src/TargetSelectionMixin';
import TimerSelectionMixin from '../../basic-component-mixins/src/TimerSelectionMixin';


const base = ElementBase.compose(
  ContentFirstChildTargetMixin,
  DistributedChildrenContentMixin,
  KeyboardMixin,
  KeyboardDirectionMixin,
  TargetInCollectiveMixin,
  TargetSelectionMixin,
  TimerSelectionMixin
);


/**
 * Auxiliary component to advance a selection with a timer.
 *
 * This component is generally used to wrap a component like
 * [basic-carousel](../basic-carousel) or the simpler
 * [basic-sliding-carousel](../basic-sliding-carousel) to add slideshow
 * behavior. For a standalone slideshow component, see
 * [basic-slideshow](../basic-slideshow).
 *
 * Example:
 *
 *     <basic-slideshow-timer>
 *       <basic-carousel>
 *         ... images or other elements ...
 *       </basic-carousel>
 *     </basic-slideshow-timer>
 *
 * The basic-slideshow-timer component provides no visible user interface
 * elements, and exists chiefly as a convenience for use in scenarios like the
 * one above. If you're developing a component that will always want to provide
 * slideshow semantics, consider directly applying the
 * [TimerSelectionMixin](../basic-component-mixins/docs/TimerSelectionMixin.md)
 * to your component.
 *
 * @extends ElementBase
 * @mixes ContentFirstChildTargetMixin
 * @mixes DistributedChildrenContentMixin
 * @mixes KeyboardMixin
 * @mixes KeyboardDirectionMixin
 * @mixes TargetInCollectiveMixin
 * @mixes TargetSelectionMixin
 * @mixes TimerSelectionMixin
 */
class SlideshowTimer extends base {

  get [symbols.defaults]() {
    const defaults = super[symbols.defaults] || {};
    defaults.playing = true;
    defaults.selectionAnimationDuration = 500;
    defaults.selectionRequired = true;
    defaults.selectionTimerDuration = 3000;
    return defaults;
  }

  get template() {
    return `
      <style>
      :host {
        position: relative;
      }
      </style>
      <slot></slot>
    `;
  }

}


customElements.define('basic-slideshow-timer', SlideshowTimer);
