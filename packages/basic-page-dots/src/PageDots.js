/**
 * Presents a set of small dots to show list item count and select list items.
 * There will be one dot for each item, and the dot for the currently selected
 * item will be shown selected.
 *
 * Clicking a dot will select the corresponding list item.
 *
 * @class PageDots
 */

import ElementBase from '../../basic-element-base/src/ElementBase';
import ChildrenContent from '../../basic-component-mixins/ChildrenContent';
import CollectiveElement from '../../basic-component-mixins/CollectiveElement';
import ContentFirstChildTarget from '../../basic-component-mixins/ContentFirstChildTarget';
import Keyboard from '../../basic-component-mixins/Keyboard';
import TargetSelection from '../../basic-component-mixins/TargetSelection';


let base = ElementBase.compose(
  ChildrenContent,
  CollectiveElement,
  ContentFirstChildTarget,
  Keyboard,
  TargetSelection
);

export default class PageDots extends base {

  applySelection(item, selected) {
    if (super.applySelection) { super.applySelection(item, selected); }
    let index = this.indexOfItem(item);
    // See if the corresponding dot has already been created.
    // If not, the correct dot will be selected when it gets created.
    let dots = this.dots;
    if (dots && dots.length > index) {
      let dot = this.dots[index];
      if (dot) {
        dot.classList.toggle('selected', selected);
      }
    }
  }

  createdCallback() {
    super.createdCallback();
    this.$.dots.addEventListener('click', event => {
      let dot = event.target;
      let dotIndex = this.dots.indexOf(dot);
      if (dotIndex >= 0) {
        this.selectedIndex = dotIndex;
      }
    });
  }

  get dots() {
    return [].slice.call(this.$.dots.querySelectorAll('.dot'));
  }

  itemsChanged() {
    if (super.itemsChanged) { super.itemsChanged(); }
    createDots(this);
    this.selectedItemChanged();  // In case position of selected item moved.
  }

  selectedItemChanged() {
    if (super.selectedItemChanged) { super.selectedItemChanged(); }
    let selectedIndex = this.selectedIndex;
    this.dots.forEach((dot, i) => {
      dot.classList.toggle('selected', i === selectedIndex);
    });
  }

  get template() {
    return `
      <style>
      :host {
        display: -webkit-inline-flex;
        display: inline-flex;
        position: relative;
      }

      #dots {
        bottom: 0;
        display: -webkit-flex;
        display: flex;
        -webkit-justify-content: center;
        justify-content: center;
        position: absolute;
        width: 100%;
        z-index: 1;
      }

      .dot {
        background: rgba(255, 255, 255, 0.4);
        border-radius: 7px;
        box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.5);
        box-sizing: border-box;
        height: 8px;
        margin: 7px 5px;
        padding: 0;
        transition: background 0.2s box-shadow 0.2s;
        width: 8px;
      }

      .dot:hover {
        background: rgba(0, 0, 0, 0.75);
        box-shadow: 0 0 1px 3px rgba(255, 255, 255, 0.5);
      }

      .dot.selected {
        background: rgba(255, 255, 255, 0.95);
      }

      @media (min-width: 768px) {
        .dot {
          height: 12px;
          width: 12px;
        }
      }
      </style>

      <!--
      REVIEW: These dots aren't buttons, because they're never meant to be used
      on their own. There should always be some other, more accessible, way to
      navigate the content.
      -->
      <!-- TODO: Replace with something that's basically a list box -->
      <div id="dots"></div>
      <slot></slot>
    `;
  }

}


function createDot() {
  let dot = document.createElement('div');
  dot.classList.add('dot');
  dot.classList.add('style-scope');
  dot.classList.add('basic-page-dots');
  return dot;
}


function createDots(element) {
  let newDotCount = element.items.length;
  let dotContainer = element.$.dots;
  let existingDotCount = dotContainer.children.length;
  if (newDotCount === existingDotCount) {
    return;
  } else if (existingDotCount > newDotCount) {
    // Remove extra dots.
    while (dotContainer.children.length > newDotCount) {
      dotContainer.removeChild(dotContainer.children[0]);
    }
  } else {
    // Create needed dots.
    for (let i = existingDotCount; i < newDotCount; i++) {
      let dot = createDot();
      dotContainer.appendChild(dot);
    }
  }
}


document.registerElement('basic-page-dots', PageDots);
