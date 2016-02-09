import ElementBase from '../../basic-element-base/src/ElementBase';
import Collapsible from '../../basic-component-mixins/src/Collapsible';


/**
 * A panel which can be expanded/collapsed with an animated transition.
 *
 * This component combines the Collapsible mixin and a simple CSS height
 * animation.
 *
 * This component handles only the duties of collapsing and expanding. It does
 * not provide a user interface for the user to trigger the change in state;
 * you must provide that user interface yourself.
 *
 * @mixes Collapsible
 */
class CollapsiblePanel extends Collapsible(ElementBase) {

  createdCallback() {
    if (super.createdCallback) { super.createdCallback(); }
    this.$.overflow.addEventListener('transitionend', () => {
      if (!this.collapsed) {
        // Remove the hard-coded height we applied for the transition so that
        // the element will reflow correctly, e.g., on window resize.
        this.$.overflow.style.height = '';
      }
    });
  }

  render(collapsing) {
    super.render(collapsing);

    let naturalHeight = this.$.container.getBoundingClientRect().height;
    if (naturalHeight === 0) {
      // Most likely haven't had a chance to render yet.
      this.$.overflow.style.height = collapsing ? 0 : '';
      return;
    }

    // Without animating, set starting height of transition.
    this.classList.remove('showTransition');
    let oldHeight = collapsing ? naturalHeight : 0;
    this.$.overflow.style.height = oldHeight + 'px';

    // Force a relayout so that the starting height is applied.
    // This can be achieved by reading a property like offsetHeight.
    this.$.overflow.offsetHeight; // jshint ignore:line

    // Turn animation on, and ending height of transition.
    this.classList.add('showTransition');
    let newHeight = collapsing ? 0 : naturalHeight;
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

      ::content > *:first-child {
        margin-top: 0;
      }
      </style>

      <div id="overflow">
        <div id="container">
          <slot></slot>
        </div>
      </div>
    `;
  }

}


document.registerElement('basic-collapsible-panel', CollapsiblePanel);
export default CollapsiblePanel;
