import createSymbol from './createSymbol';


// Symbols for private data members on an element.
const targetSymbol = createSymbol('target');


/* Exported function extends a base class with ContentFirstChildTarget. */
export default (base) => {

  /**
   * Mixin that defines the target of a component — the element the component is
   * managing or somehow responsible for — as its first child.
   *
   * Some components serve to decorate or modify other elements. A common
   * pattern is to have one component wrap another, and have the outer, parent
   * component implicitly modify the child. This mixin facilitates this by
   * implicitly taking an element's first child as its "target".
   *
   * Example:
   *
   *     <outer-element>
   *       <inner-element></inner-element>
   *     </outer-element>
   *
   * If `outer-element` uses this mixin, then its `target` property will be
   * set to point to the `inner-element`, because that is its first child.
   *
   * This mixin expects a `content` property that returns the element's content.
   * You can implement that yourself, or use the
   * [DistributedChildrenAsContent](DistributedChildrenAsContent.md) mixin.
   *
   * This mixin can be combined with the
   * [TargetInCollective](TargetInCollective.md) mixin to have a component
   * participate in collective keyboard handling.
   */
  class ContentFirstChildTarget extends base {

    contentChanged() {
      if (super.contentChanged) { super.contentChanged(); }
      const content = this.content;
      const target = content && content[0];
      // A component using a target will likely do a bunch of work when the
      // target changes, so only set the target if it's actually changed.
      if (target && target !== this.target) {
        this.target = target;
      }
    }

    /**
     * Gets/sets the current target of the component.
     *
     * @type {HTMLElement}
     */
    get target() {
      return this[targetSymbol];
    }
    set target(element) {
      this[targetSymbol] = element;
      if ('target' in base.prototype) { super.target = element; }
    }

  }

  return ContentFirstChildTarget;
};
