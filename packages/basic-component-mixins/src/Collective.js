/**
 * A group of elements that have been associated for the purpose of
 * accomplishing some collective behavior, e.g., keyboard handling.
 *
 * There are certain components that want to cooperatively handle the keyboard.
 * For example, the basic-arrow-selection and basic-page-dots components are
 * optional components that can augment the appearance and behavior of an inner
 * basic-carousel, adding arrow buttons and dot buttons, respectively. When
 * these components are nested together, they form an implicit unit called a
 * *collective*:
 *
 *     <basic-arrow-selection>
 *       <basic-page-dots>
 *         <basic-carousel>
 *           ... images, etc. ...
 *         </basic-carousel>
 *       </basic-page-dots>
 *     </basic-arrow-selection>
 *
 * In this configuration, the three components will all have a `this.collective`
 * reference that refers to a shared instance of the `Collective` class.
 *
 * The Keyboard mixin they use is sensitive to the presence of
 * the collective. Among other things, it will ensure that only the outermost
 * element above — the basic-arrow-selection — will be a tab stop that can
 * receive the keyboard focus. This lets the user perceive the component
 * arrangement above as a single unit. The Keyboard mixin will also give each
 * element in the collective a chance to process any keyboard events. So, even
 * though the basic-arrow-selection element will have the focus, the standard
 * keyboard navigation provided by basic-carousel will continue to work.
 *
 * The SelectionAriaActive component also respects collectives when using the
 * `aria-activedescendant` and `role` attributes. Those will be applied to the
 * outermost element (basic-arrow-selection, above) so that ARIA can correctly
 * understand the arrangement of the elements.
 *
 * You can put elements into collectives yourself, or you can use the
 * TargetInCollective mixin.
 */
class Collective {

  /**
   * Create a collective.
   *
   * @param {HTMLELement[]} [elements] - Initial elements to add.
   */
  constructor(...elements) {
    /**
     * The elements in the collective.
     *
     * @type {HTMLElement[]}
     */
    this.elements = [];
    elements.forEach(element => this.assimilate(element));
  }

  /**
   * Add the indicated target to the collective.
   *
   * By convention, if two elements wants to participate in a collective, and
   * one element is an ancestor of the other in the DOM, the ancestor should
   * assimilate the descendant instead of the other way around.
   *
   * After assimilation, any element in the collective that defines a
   * `collectiveChanged` method will have that method invoked. This allows
   * the collective's elements to respond to changes in the collective.
   *
   * @param {(HTMLElement|Collective)} target - The element or collective to add.
   */
  assimilate(target) {
    let collectiveChanged;
    if (target instanceof Collective) {
      collectiveChanged = assimilateCollective(this, target);
    } else if (target.collective) {
      // Target is already part of a collective, assimilate it.
      collectiveChanged = assimilateCollective(this, target.collective);
    } else {
      // Assimilate an individual element.
      collectiveChanged = assimilateElement(this, target);
    }

    if (collectiveChanged) {
      this.invokeMethod('collectiveChanged');
    }
  }

  /**
   * Invoke a method on all elements in the collective.
   *
   * @param {string} method - The name of the method to invoke on all elements.
   * @param {object[]} [args] - The arguments to the method
   */
  invokeMethod(method, ...args) {
    // Invoke from innermost to outermost.
    let elements = this.elements;
    for (let i = elements.length - 1; i >= 0; i--) {
      let element = elements[i];
      if (element[method]) {
        element[method].apply(element, args);
      }
    }
  }

  /**
   * The outermost element in the collective.
   * By convention, this is the first element in the `elements` array.
   */
  get outermostElement() {
    return this.elements[0];
  }

}


// The first collective assimilates the second.
function assimilateCollective(collective1, collective2) {
  if (collective1 === collective2) {
    // Collectives are same; ignore.
    return false;
  }

  let elements = collective2.elements;

  // Old collective will no longer have any elements of its own.
  collective2.elements = [];

  elements.forEach(element => {
    assimilateElement(collective1, element);
  });

  return true;
}


// Assimilate the indicated element.
function assimilateElement(collective, element) {
  if (element.collective === collective) {
    // Already part of this collective.
    return false;
  }
  element.collective = collective;
  collective.elements.push(element);
  return true;
}


export default Collective;
