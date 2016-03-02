import ElementBase from '../../basic-element-base/src/ElementBase';


/**
 * Renders an array of items as elements.
 */
class ArrayToList extends ElementBase {

  createElementForItem(item) {
    let element = document.createElement('div');
    this.renderItemAsElement(item, element);
    return element;
  }

  get elements() {
    return this.$.container.childNodes;
  }

  get items() {
    return this._items;
  }
  set items(value) {
    this._items = value;
    this.renderItems();
  }

  renderItemAsElement(item, element) {}

  renderItems() {
    this.elements.forEach(element => element.parentNode.removeChild(element));
    this.items.forEach(item => {
      let element = this.createElementForItem(item);
      this.$.container.appendChild(element);
    }, this);
  }

  get template() {
    return `
      <style>
      :host {
        display: block;
      }
      </style>
      <div id="container"></div>
    `;
  }

}


document.registerElement('basic-array-to-list', ArrayToList);
