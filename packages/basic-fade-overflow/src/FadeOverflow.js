import createSymbol from '../../basic-component-mixins/src/createSymbol';
import ElementBase from '../../basic-element-base/src/ElementBase';


// Symbols for private data members on an element.
const fadeColorSymbol = createSymbol('fadeColor');


/**
 * Fades out content that overflows so the user knows there's more.
 *
 * This component doesn't handle interactivity.
 *
 * The component needs to know the color it should fade to, which it tries to
 * infer from the background color. In some situations, this may not work, in
 * which case you can explicitly set the fadeColor attribute.
 *
 * The component currently always displays the fade, even if the component's
 * content is short enough to fit completely in view.
 *
 * @extends ElementBase
 */
class FadeOverflow extends ElementBase {

  attachedCallback() {
    if (super.attachedCallback) { super.attachedCallback(); }
    if (this.fadeColor == null) {
      this.refresh();
    }
  }

  createdCallback() {
    if (super.createdCallback) { super.createdCallback(); }
  }

  /**
   * The color of the fade.
   *
   * The fade color should match the background color. The component does its
   * best to infer the background color, but in some situations, that may not
   * work. In those cases, you can manually identify the background color.
   * This should be a solid color.
   *
   * @attribute fadeColor
   * @default white
   */
  get fadeColor() {
    return this[fadeColorSymbol];
  }
  set fadeColor(value) {
    this[fadeColorSymbol] = value;
    if (value) {
      let rgb = extractRgbValues(value);
      if (rgb) {
        let fadeColorTransparent = `rgba(${rgb.r},${rgb.g},${rgb.b},0)`;
        let gradient = `linear-gradient(${fadeColorTransparent} 0%, ${value} 100%)`;
        this.$.fade.style.backgroundImage = gradient;
      }
    }
  }

  /**
   * Infer the fade color from background color. If you have programmatically
   * changed the color behind the component, you can invoke this method to have
   * the component try to pick up the new background color.
   */
  refresh() {
    // TODO: Automatically hide the fade if all the content can be seen.
    this.fadeColor = findBackgroundColor(this);
  }

  /**
   * True if the component should show the fade to the background color.
   *
   * @type {boolean}
   * @default true
   */
  get showFade() {
    return this.$.fade.style.display !== 'none';
  }
  set showFade(value) {
    this.$.fade.style.display = value ? '' : 'none';
  }

  get template() {
    return `
      <style>
      :host {
        display: block;
        position: relative;
        overflow: hidden;
      }

      #fade {
        bottom: 0;
        height: 3em;
        max-height: 50%;
        pointer-events: none; /* Lets user interact with content through the fade. */
        position: absolute;
        width: 100%;
      }
      </style>

      <div id="fade"></div>
      <slot></slot>
    `;
  }

}


// Return the background color of the given element. If the color is
// "transparent" (the default in Mozilla and IE) or "rgba(0, 0, 0, 0)" (the
// default transparent value in Blink and Webkit), walk up the parent chain
// until a non-transparent color is found.
function findBackgroundColor(element) {
  if (element == null || typeof element.style === 'undefined') {
    // This element has no background, assume white.
    return 'rgb(255,255,255)';
  }
  let backgroundColor = getComputedStyle(element).backgroundColor;
  if (backgroundColor === 'transparent' || backgroundColor === 'rgba(0, 0, 0, 0)') {
    return findBackgroundColor(element.parentNode);
  } else {
    return backgroundColor;
  }
}


// Return the individual RGB values from a CSS color string.
function extractRgbValues(rgbString) {
  let rgbRegex = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*[\d\.]+\s*)?\)/;
  let match = rgbRegex.exec(rgbString);
  if (match) {
    return {
      r: parseInt(match[1]),
      g: parseInt(match[2]),
      b: parseInt(match[3])
    };
  } else {
    return null;
  }
}


document.registerElement('basic-fade-overflow', FadeOverflow);
export default FadeOverflow;
