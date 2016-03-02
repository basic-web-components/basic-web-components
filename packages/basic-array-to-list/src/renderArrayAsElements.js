/**
 * Renders an array of items as elements.
 */
export default function renderArrayAsElements(items, container, createElementForItem) {
  // Remove any elements for old items.
  container.childNodes.forEach(oldElement => container.removeChild(oldElement));

  // Create a new set of elements for the current items.
  items.forEach(item => {
    let element = createElementForItem(item);
    container.appendChild(element);
  });
}
