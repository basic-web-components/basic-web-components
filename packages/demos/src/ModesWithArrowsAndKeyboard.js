import ArrowSelectionMixin from '../../basic-component-mixins/src/ArrowSelectionMixin';
import DirectionSelectionMixin from '../../basic-component-mixins/src/DirectionSelectionMixin';
import KeyboardDirectionMixin from '../../basic-component-mixins/src/KeyboardDirectionMixin';
import KeyboardMixin from '../../basic-component-mixins/src/KeyboardMixin';
import Modes from '../../basic-modes/src/Modes';
import SelectionAriaActiveMixin from '../../basic-component-mixins/src/SelectionAriaActiveMixin';

class ModesWithArrowsAndKeyboard extends Modes.compose(
  ArrowSelectionMixin,
  DirectionSelectionMixin,
  KeyboardDirectionMixin,
  KeyboardMixin,
  SelectionAriaActiveMixin
) {}

customElements.define('modes-with-arrows-and-keyboard', ModesWithArrowsAndKeyboard);
export default ModesWithArrowsAndKeyboard;
