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
 * The [KeyboardMixin](KeyboardMixin.md) they use is sensitive to the presence of
 * the collective. Among other things, it will ensure that only the outermost
 * element above — the basic-arrow-selection — will be a tab stop that can
 * receive the keyboard focus. This lets the user perceive the component
 * arrangement above as a single unit. The KeyboardMixin mixin will also give each
 * element in the collective a chance to process any keyboard events. So, even
 * though the basic-arrow-selection element will have the focus, the standard
 * keyboard navigation provided by basic-carousel will continue to work.
 *
 * The [SelectionAriaActiveMixin](SelectionAriaActiveMixin.md) also respects
 * collectives when using the `aria-activedescendant` and `role` attributes.
 * Those will be applied to the outermost element (basic-arrow-selection, above)
 * so that ARIA can correctly understand the arrangement of the elements.
 *
 * You can put elements into collectives yourself, or you can use the
 * [TargetInCollectiveMixin](TargetInCollectiveMixin.md).
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
    this.assimilate(elements);
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
      // Assimlate another collective.
      collectiveChanged = assimilateCollective(this, target);
    } else if (target instanceof Array) {
      // Assimilate an array of elements.
      target.forEach(element => {
        const elementAdded = assimilateElement(this, element);
        collectiveChanged = collectiveChanged || elementAdded;
      });
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
    const elements = this.elements;
    for (let i = elements.length - 1; i >= 0; i--) {
      const element = elements[i];
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

  /**
   * Set a default attribute on an element that may be in a collective. This
   * function is designed to help collectives work with browser features like
   * keyboard support and ARIA, where only the outermost member of a collective
   * should expose, e.g., tabindex or ARIA attributes.
   *
   * If the element is not in a collective, and the element doesn't have the
   * given attribute, set the attribute on the element to the default value.
   *
   * If the element *is* in a collective, scan the collective's inner members
   * to see if any of them have the attribute. If so, promote that value to the
   * outermost element. If a `residualValue` is supplied, set the inner members'
   * attribute to that value; otherwise, remove the attribute from the inner
   * member.
   *
   * @param {HTMLElement} element - An element that may or may not be in a collective.
   * @param {string} attributeName - The name of the attribute.
   * @param {string} [defaultValue] - The default value for the attribute.
   */
  static promoteAttribute(element, attributeName, defaultValue, residualValue) {
    let outermost;
    let attributeValue = defaultValue;
    if (!element.collective) {
      // Element isn't part of a collective; treat it as outermost.
      outermost = element;

    // REVIEW: Uncommenting these lines makes collectives more efficient, as
    // only the outermost element in the collective will do the attribute work.
    // However, that requires that all members of a collective implement the
    // same mixins (e.g., SelectionAriaActiveMixin), which feels limiting. Leaving
    // this in here as a comment until this can be considered further.

    // } else if (element !== element.collective.outermostElement) {
    //   // Let the outermost element handle this.
    //   return;

    } else {
      // Scan inner elements, working from inside (end) toward out (start).
      // Pick up any attribute value they have and remove it.
      let elements = element.collective.elements;
      outermost = elements[0];
      for (let i = elements.length - 1; i > 0; i--) {
        const innerElement = elements[i];
        const innerAttributeValue = innerElement.getAttribute(attributeName);
        if (innerAttributeValue && innerAttributeValue !== residualValue) {
          attributeValue = innerAttributeValue;
          if (residualValue) {
            innerElement.setAttribute(attributeName, residualValue);
          } else {
            innerElement.removeAttribute(attributeName);
          }
        } else if (!innerAttributeValue && residualValue) {
          innerElement.setAttribute(attributeName, residualValue);
        }
      }
    }
    if (attributeValue) {
      // Set attribute on outermost element if it doesn't already have it, or
      // if the existing attribute value is the default.
      const existingAttributeValue = outermost.getAttribute(attributeName);
      if (!existingAttributeValue ||
          (existingAttributeValue === defaultValue && attributeValue !== defaultValue)) {
        outermost.setAttribute(attributeName, attributeValue);
      }
    }
  }

}


// The first collective assimilates the second.
function assimilateCollective(collective1, collective2) {
  if (collective1 === collective2) {
    // Collectives are same; ignore.
    return false;
  }

  const elements = collective2.elements;

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
