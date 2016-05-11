/**
 * Drag operations past the beginning or end of a list should generally exhibit
 * a visible tension effect to let the user know they can't go further in that
 * direction.
 *
 */


export function dampedSelection(selection, itemCount) {
  let damped;
  let bound = itemCount - 1;
  if (selection < 0) {
    // Trying to go past beginning of list. Apply tension from the left edge.
    damped = -damping(-selection);
  } else if (selection >= bound) {
    // Trying to go past end of list. Apply tension from the right edge.
    damped = bound + damping(selection - bound);
  } else {
    // No damping required.
    damped = selection;
  }
  return damped;
}

export function dampedElementSelection(element) {
  let selection = elementSelection(element);
  let itemCount = element.items ? element.items.length : 0;
  return dampedSelection(selection, itemCount);
}

export function elementSelection(element) {
  let selectedIndex = element.selectedIndex;
  if (selectedIndex < 0) {
    // No selection
    return;
  }
  let selectionFraction = element.selectionFraction || 0;
  return selectedIndex + selectionFraction;
}

export function selectionParts(selection) {
  let index = Math.trunc(selection);
  let fraction = selection - index;
  return { index, fraction };
}

// Return the selection, ensuring it stays between 0 and the given count - 1.
export function wrappedSelection(selection, itemCount) {
  // Handle possibility of negative mod.
  // See http://stackoverflow.com/a/18618250/76472
  return ((selection % itemCount) + itemCount) % itemCount;
}

export function wrappedSelectionParts(selection, itemCount, wrap) {
  if (wrap) {
    selection = wrappedSelection(selection, itemCount);
  }
  return selectionParts(selection);
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
