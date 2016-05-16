import ElementBase from '../../basic-element-base/src/ElementBase';
import ContentFirstChildTarget from '../../basic-component-mixins/src/ContentFirstChildTarget';
import DirectionSelection from '../../basic-component-mixins/src/DirectionSelection';
import DistributedChildrenAsContent from '../../basic-component-mixins/src/DistributedChildrenAsContent';
import ItemsSelection from '../../basic-component-mixins/src/ItemsSelection';
import Keyboard from '../../basic-component-mixins/src/Keyboard';
import KeyboardDirection from '../../basic-component-mixins/src/KeyboardDirection';
import ObserveContentChanges from '../../basic-component-mixins/src/ObserveContentChanges';
import TargetInCollective from '../../basic-component-mixins/src/TargetInCollective';
import TargetSelection from '../../basic-component-mixins/src/TargetSelection';
import toggleClass from '../../basic-component-mixins/src/toggleClass';


let base = ElementBase.compose(
  ContentFirstChildTarget,
  DirectionSelection,
  DistributedChildrenAsContent,
  ItemsSelection,
  Keyboard,
  KeyboardDirection,
  ObserveContentChanges,
  TargetInCollective,
  TargetSelection
);

/**
 * Controls for managing playback of a slideshow, audio playlist, etc.
 *
 * @extends ElementBase
 * @mixes ContentFirstChildTarget
 * @mixes DirectionSelection
 * @mixes DistributedChildrenAsContent
 * @mixes ItemsSelection
 * @mixes Keyboard
 * @mixes KeyboardDirection
 * @mixes ObserveContentChanges
 * @mixes TargetInCollective
 * @mixes TargetSelection
 */
class PlayControls extends base {

  createdCallback() {
    super.createdCallback();
    this.$.playButton.addEventListener('click', event => {
      this.playing = !this.playing;
    });
    toggleClass(this, 'playing', this.playing);
  }

  get playing() {
    return this.target && this.target.playing;
  }
  set playing(value) {
    if ('playing' in base.prototype) { super.playing = value; }
    if (this.target) {
      this.target.playing = value;
    }
    toggleClass(this, 'playing', value);
  }

  get template() {
    return `
      <style>
      :host {
        display: -webkit-inline-flex;
        display: inline-flex;
        position: relative;
      }

      #buttons {
        bottom: 0;
        padding: 0.5em;
        position: absolute;
        text-align: center;
        width: 100%;
        z-index: 1;
      }

      :host(.playing) .pausedControl {
        display: none;
      }
      :host(:not(.playing)) .playingControl {
        display: none;
      }
      </style>

      <div id="buttons">
        <button id="playButton">
          <span class="playingControl">Pause</span>
          <span class="pausedControl">Play</span>
        </button>
      </div>

      <slot></slot>
    `;
  }

}


document.registerElement('basic-play-controls', PlayControls);
