import Collective from './Collective';


/* Exported function extends a base class with TargetInCollective. */
export default (base) => {

  /**
   * Mixin which allows a component to provide aggregate behavior with other
   * elements, e.g., for keyboard handling.
   *
   * This mixin implicitly creates a collective for a component so that it can
   * participate in collective keyboard handling. See the
   * [Collective](Collective.md) class for details.
   *
   * You can use this mixin in conjunction with
   * [ContentFirstChildTarget](ContentFirstChildTarget.md) to automatically have
   * the component's collective extended to its first child.
   */
  class TargetInCollective extends base {

    constructor() {
      super();
      this.collective = new Collective(this);
    }

    /**
     * Gets/sets the current target of the component.
     *
     * Set this to point to another element. That target element will be
     * implicitly added to the component's collective. That is, the component
     * and its target will share responsibility for handling keyboard events.
     *
     * You can set this property yourself, or you can use the
     * ContentFirstChildTarget mixin to automatically set the target to the
     * component's first child.
     *
     * @type {HTMLElement}
     */
    get target() {
      return super.target;
    }
    set target(element) {
      if ('target' in base.prototype) { super.target = element; }
      this.collective.assimilate(element);
    }

  }

  return TargetInCollective;
};
