import ElementBase from '../../basic-element-base/src/ElementBase';
import OpenCloseMixin from '../../basic-component-mixins/src/OpenCloseMixin';


/**
 * A panel which can be expanded/collapsed with an animated transition.
 *
 * [Live demo](http://basicwebcomponents.org/basic-web-components/packages/basic-collapsible-panel/)
 *
 * This component combines the OpenCloseMixin mixin and a simple CSS height
 * animation.
 *
 * This component handles only the duties of collapsing and expanding. It does
 * not provide a user interface for the user to trigger the change in state;
 * you must provide that user interface yourself.
 *
 * @extends ElementBase
 * @mixes OpenCloseMixin
 */
class CollapsiblePanel extends OpenCloseMixin(ElementBase) {

  constructor() {
    super();
    this.$.overflow.addEventListener('transitionend', () => {
      if (!this.closed) {
        // Remove the hard-coded height we applied for the transition so that
        // the element will reflow correctly, e.g., on window resize.
        this.$.overflow.style.height = '';
      }
      // Ensure the animation only plays once. For some reason, Safari will show
      // the animation twice without this line, even though the render function
      // explicitly removes this class when it sets the old height. Neither
      // Chrome nor Firefox seem to need this line.
      this.classList.remove('showTransition');
    });
  }

  render(closing) {
    super.render(closing);

    const naturalHeight = this.$.container.getBoundingClientRect().height;
    if (naturalHeight === 0) {
      // Most likely haven't had a chance to render yet.
      this.$.overflow.style.height = closing ? 0 : '';
      return;
    }

    // Without animating, set starting height of transition.
    this.classList.remove('showTransition');
    const oldHeight = closing ? naturalHeight : 0;
    this.$.overflow.style.height = oldHeight + 'px';

    // Force a relayout so that the starting height is applied.
    // This can be achieved by reading a property like offsetHeight.
    this.$.overflow.offsetHeight; // jshint ignore:line

    // Turn animation on, and ending height of transition.
    this.classList.add('showTransition');
    const newHeight = closing ? 0 : naturalHeight;
    this.$.overflow.style.height = newHeight + 'px';
  }

  get template() {
    return `
      <style>
      :host {
        display: block;
        overflow: hidden;
      }

      :host(.showTransition) #overflow {
        transition: height 0.2s;
      }
      </style>

      <div id="overflow" role="none">
        <div id="container" role="none">
          <slot></slot>
        </div>
      </div>
    `;
  }

}


customElements.define('basic-collapsible-panel', CollapsiblePanel);
export default CollapsiblePanel;
