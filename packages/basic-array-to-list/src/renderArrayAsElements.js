/**
 * Helper function for rendering an array of items as elements.
 *
 * @param {Array} items - the items to render
 * @param {HTMLElement} container - the parent that will hold the elements
 * @param {function} renderItem - returns a new element for an item, or
 *                                repurposes an existing element for an item
 */
export default function renderArrayAsElements(items, container, renderItem) {
  // Create a new set of elements for the current items.
  items.forEach((item, index) => {
    let oldElement = container.childNodes[index];
    let newElement = renderItem(item, oldElement);
    if (!oldElement) {
      container.appendChild(newElement);
    } else if (newElement !== oldElement) {
      container.replaceChild(newElement, oldElement);
    }
  });

  // If the array shrank, remove the extra elements which are no longer needed.
  while (container.childNodes.length > items.length) {
    container.removeChild(container.childNodes[items.length]);
  }
}
