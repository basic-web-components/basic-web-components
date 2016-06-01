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
 * Auxiliary component for managing playback of a slideshow, audio playlist, etc.
 *
 * This component can be used to wrap a component like
 * [basic-slideshow](../basic-slideshow). Example:
 *
 *     <basic-play-controls>
 *       <basic-slideshow>
 *         ... images, etc. ...
 *       </basic-slideshow>
 *     </basic-play-controls>
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
    this.$.previousButton.addEventListener('click', event => {
      this.selectPrevious();
    });
    this.$.playButton.addEventListener('click', event => {
      this.playing = !this.playing;
    });
    this.$.nextButton.addEventListener('click', event => {
      this.selectNext();
    });
    toggleClass(this, 'playing', this.playing);
  }

  keydown(event) {
    let handled;

    switch (event.keyCode) {
      case 32: /* Space */
        this.playing = !this.playing;
        handled = true;
        break;
    }

    // Prefer mixin result if it's defined, otherwise use base result.
    return handled || (super.keydown && super.keydown(event));
  }

  pause() {
    if (this.target) {
      this.target.pause();
    }
  }

  play() {
    if (this.target) {
      this.target.play();
    }
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
        box-sizing: border-box;
        padding: 0.5em;
        position: absolute;
        text-align: center;
        width: 100%;
        z-index: 1;
      }

      button {
        background: transparent;
        border: none;
        fill: rgba(255, 255, 255, 0.5);
        padding: 0;
        vertical-align: middle;
      }
      :host(:hover) button {
        fill: rgba(255, 255, 255, 0.7);
      }
      button:hover {
        fill: rgba(255, 255, 255, 0.85);
      }
      button:active {
        fill: white;
      }

      .icon {
        height: 30px;
        width: 30px;
      }
      #playButton .icon {
        height: 40px;
        width: 40px;
      }

      :host(.playing) .pausedControl {
        display: none;
      }
      :host(:not(.playing)) .playingControl {
        display: none;
      }
      </style>

      <div id="buttons">
        <button id="previousButton">
          <svg class="icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
            <g id="skip-previous">
              <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
            </g>
          </svg>
        </button>
        <button id="playButton">
          <svg class="icon playingControl" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
            <g id="pause-circle-outline">
              <path d="M9 16h2V8H9v8zm3-14C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-4h2V8h-2v8z"></path>
            </g>
          </svg>
          <svg class="icon pausedControl" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
            <g id="play-circle-outline">
              <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
            </g>
          </svg>
        </button>
        <button id="nextButton">
          <svg class="icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
            <g id="skip-next">
              <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
            </g>
          </svg>
        </button>
      </div>

      <slot></slot>
    `;
  }

}


document.registerElement('basic-play-controls', PlayControls);
