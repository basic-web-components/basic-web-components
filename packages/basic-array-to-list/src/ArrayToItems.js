/**
 * Renders an array of items as elements.
 */
export default (base) => {

  class ArrayToItems extends base {

    get elements() {
      return this.container.childNodes;
    }

    get container() {
      return this;
    }

    get items() {
      return this._items;
    }
    set items(value) {
      if ('items' in base) { super.items = value; }
      this._items = value;
      renderItems(this);
    }

  }

  return ArrayToItems;

};



function renderItems(element) {
  // Remove any elements for old items.
  let container = element.container;
  container.childNodes.forEach(oldElement => container.removeChild(oldElement));

  // Create a new set of elements for the current items.
  element.items.forEach(item => {
    let newElement = element.createElementForItem(item);
    element.container.appendChild(newElement);
  }, element);
}
