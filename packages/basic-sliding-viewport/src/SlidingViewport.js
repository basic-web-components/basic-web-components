import ElementBase from '../../basic-element-base/src/ElementBase';
import SpreadItems from '../../basic-spread-items/src/SpreadItems'; // jshint ignore:line

let base = ElementBase;

/**
 * Presents list items in a viewport such that only a single item is visible at
 * a time.
 *
 * Navigating between items will be represented with a horizontal visual
 * sliding effect.
 *
 * This component handles the rendering responsibilities for the basic-carousel
 * component.
 *
 * This component currently requires that you explicitly apply a size to it.
 */
class SlidingViewport extends base {

  attachedCallback() {
    if (super.attachedCallback) { super.attachedCallback(); }
    this.render();
  }

  createdCallback() {
    if (super.createdCallback) { super.createdCallback(); }
    this.classList.add('showTransition');
    this.position = 0;
  }

  get content() {
    return this.$.slidingContainer.content;
  }

  get items() {
    return this.$.slidingContainer.items;
  }

  render() {
    if (super.render) { super.render(); }
    requestAnimationFrame(renderSelection.bind(this));
  }

  /**
   * The fractional position of the element's moving surface while it is being
   * moved (dragged/scrolled/etc.).
   *
   * This is expressed as a fraction of the element's width. If the value is
   * positive, the surface is being moved to the left; if negative, the surface
   * is being moved to the right. E.g., a value of 0.5 indicates the surface has
   * moved half the element's width to the left.
   *
   * @type {number}
   */
  get position() {
    return this._position;
  }
  set position(position) {
    if ('position' in base.prototype) { super.position = position; }
    this._position = position;
    this.render();
  }

  get selectedIndex() {
    let items = this.items;
    let index = items && items.indexOf(this.selectedItem);
    return index || -1;
  }
  set selectedIndex(index) {
    if ('selectedIndex' in base.prototype) { super.selectedIndex = index; }
    let item = this.items && this.items[index];
    if (item) {
      this.selectedItem = item;
    }
  }

  get selectedItem() {
    return this._selectedItem;
  }
  set selectedItem(item) {
    if ('selectedItem' in base.prototype) { super.selectedItem = item; }
    this._selectedItem = item;
    this.render();
  }

  showTransition(show) {
    if (super.showTransition) { super.showTransition(show); }
    this.classList.toggle('showTransition', show);
  }

  get template() {
    return `
      <style>
      :host {
        display: block;
        overflow: hidden;
        position: relative;
      }

      #slidingContainer {
        height: 100%;
        position: absolute;
        /*
         Set width for IE/Edge. It's not clear why they need this, and the other
         browsers don't.
         */
        width: 100%;
        will-change: transform;
      }

      :host(.showTransition) #slidingContainer {
        -webkit-transition: -webkit-transform 0.2s ease-out;
        transition: transform 0.2s ease-out;
      }
      </style>

      <basic-spread-items id="slidingContainer">
        <slot></slot>
      </basic-spread-items>
    `;
  }

}


function renderSelection() {

  let count = this.items && this.items.length;
  if (!count) {
    // Null or zero means we don't have items to render yet.
    return;
  }

  let index = this.selectedIndex;
  if (index < 0) {
    // No selection
    // return;
    index = 0;
  }

  let position = this.position || 0;
  let dampenedPosition;
  if (index === 0 && position < 0) {
    // Apply tension from the left edge.
    dampenedPosition = -damping(-position);
  } else if (index === count - 1 && position > 0) {
    // Apply tension from the right edge.
    dampenedPosition = damping(position);
  } else {
    // No damping required.
    dampenedPosition = position;
  }
  let fractionalIndex = index + dampenedPosition;
  // Use a percentage so the transform will still work if screen size changes
  // (e.g., if device orientation changes).
  let left = -fractionalIndex * 100;
  // let left = -(fractionalIndex / count) * 100;
  let transform = 'translateX(' + left + '%)';
  this.$.slidingContainer.style.webkitTransform = transform;
  this.$.slidingContainer.style.transform = transform;
}


/*
 * Calculate damping as a function of the distance past the minimum/maximum
 * values.
 *
 * We want to asymptotically approach an absolute minimum of 1 unit
 * below/above the actual minimum/maximum. This requires calculating a
 * hyperbolic function.
 *
 * See http://www.wolframalpha.com/input/?i=y+%3D+-1%2F%28x%2B1%29+%2B+1
 * for the one we use. The only portion of that function we care about is when
 * x is zero or greater. An important consideration is that the curve be
 * tangent to the diagonal line x=y at (0, 0). This ensures smooth continuity
 * with the normal drag behavior, in which the visible sliding is linear with
 * the distance the touchpoint has been dragged.
 */
function damping(x) {
  let y = (-1 / (x + 1)) + 1;
  return y;
}


document.registerElement('basic-sliding-viewport', SlidingViewport);
export default SlidingViewport;
