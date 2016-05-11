/**
 * Drag operations past the beginning or end of a list should generally exhibit
 * a visible tension effect to let the user know they can't go further in that
 * direction.
 *
 * This function takes as parameters the relevant facts about a list element,
 */
export function getDampedSelection(element) {

  let selectedIndex = element.selectedIndex;
  if (selectedIndex < 0) {
    // No selection
    return;
  }
  let selectionFraction = element.selectionFraction || 0;
  let itemCount = element.items ? element.items.length : 0;

  let dampedFraction;
  if (selectedIndex === 0 && selectionFraction < 0) {
    // Trying to go past beginning of list. Apply tension from the left edge.
    dampedFraction = -damping(-selectionFraction);
  } else if (selectedIndex === itemCount - 1 && selectionFraction > 0) {
    // Trying to go past end of list. Apply tension from the right edge.
    dampedFraction = damping(selectionFraction);
  } else {
    // No damping required.
    dampedFraction = selectionFraction;
  }

  return selectedIndex + dampedFraction;
}


export function getFractionalSelection(element) {
  let selectedIndex = element.selectedIndex;
  if (selectedIndex < 0) {
    // No selection
    return;
  }
  let selectionFraction = element.selectionFraction || 0;
  return selectedIndex + selectionFraction;
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
