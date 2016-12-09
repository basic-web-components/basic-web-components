import AnimationStage from '../../basic-animation-stage/src/AnimationStage';
import PageDotsMixin from '../../basic-component-mixins/src/PageDotsMixin';

class AnimationStageWithDots extends PageDotsMixin(AnimationStage) {}
customElements.define('animation-stage-with-dots', AnimationStageWithDots);

export default AnimationStageWithDots;
