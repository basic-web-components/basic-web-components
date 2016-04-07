import ElementBase from '../../basic-element-base/src/ElementBase';
import SelectionAnimation from '../../basic-component-mixins/src/SelectionAnimation';


/**
 * Shows animated transitions entering and leaving the viewport.
 *
 * @extends ElementBase
 */
class AnimationStage extends ElementBase.compose(SelectionAnimation) {
}


document.registerElement('basic-animation-stage', AnimationStage);
