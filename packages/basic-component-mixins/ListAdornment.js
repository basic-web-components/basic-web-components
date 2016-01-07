/**
 * Groups together mixins used by a component that wants to adorn a list-like
 * component exposing items, e.g., to reflect or manipulate the selection.
 * The first child of the component will be used as the target.
 *
 * NOTE: This is currently implemented as a function that composes in a list
 * of specific mixins. That function form is somewhat awkward right now.
 */

import Composable from './Composable';

import ChildrenContent from './ChildrenContent';
import ContentFirstChildTarget from './ContentFirstChildTarget';
import Keyboard from './Keyboard';
import TargetSelection from './TargetSelection';

export default function ListAdornment(base) {
  return Composable.compose.call(
    base,
    ChildrenContent,
    ContentFirstChildTarget,
    Keyboard,
    TargetSelection
  );
}

export default ListAdornment;
