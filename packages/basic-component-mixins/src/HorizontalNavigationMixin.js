import DirectionSelectionMixin from '../../basic-component-mixins/src/DirectionSelectionMixin';
import KeyboardDirectionMixin from '../../basic-component-mixins/src/KeyboardDirectionMixin';
import KeyboardMixin from '../../basic-component-mixins/src/KeyboardMixin';
import SwipeDirectionMixin from '../../basic-component-mixins/src/SwipeDirectionMixin';
import symbols from '../../basic-component-mixins/src/symbols';
import TrackpadDirectionMixin from '../../basic-component-mixins/src/TrackpadDirectionMixin';


export default (base) => {

  const mixins = [
    DirectionSelectionMixin,
    KeyboardMixin,
    KeyboardDirectionMixin,
    SwipeDirectionMixin,
    TrackpadDirectionMixin
  ];

  // Don't assume base class uses ComposableMixin. Do composition by hand.
  const baseWithMixins = mixins.reduce((c, mixin) => mixin(c), base);

  /**
   * @mixes KeyboardMixin
   * @mixes KeyboardDirectionMixin
   * @mixes SwipeDirectionMixin
   * @mixes TrackpadDirectionMixin
   */
  class HorizontalNavigation extends baseWithMixins {

    get [symbols.defaults]() {
      const defaults = super[symbols.defaults] || {};
      defaults.navigationAxis = 'horizontal';
      defaults.selectionAnimationEffect = 'slideWithGap';
      // defaults.selectionRequired = true;
      return defaults;
    }

  }

  return HorizontalNavigation;

};
