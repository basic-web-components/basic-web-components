/**
 * @class Collective
 * @classdesc A group of elements that have been joined together for the purpose of
 * accomplishing some collective behavior, e.g., keyboard handling.
 *
 * This is not a mixin, but a class used by the TargetInCollective mixin.
 */


export default class Collective {

  constructor(...elements) {
    this.elements = [];
    elements.forEach(element => this.assimilate(element));
  }

  /**
   * Add the indicated target to the collective.
   *
   * @method assimilate
   * @param {(HTMLElement|Collective)} target - the element or collective to add
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
