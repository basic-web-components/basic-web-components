/*
 * A very simple set of helpers to support the use of generic styling in a
 * component.
 *
 * By default, a component should provide a minimal visual presentation that
 * allows the component to function. However, the more styling the component
 * provides by default, the harder it becomes to get the component to fit in
 * in other settings. Each CSS rule has to be overridden. Worse, new CSS rules
 * added to the default style won't be overridden by default, making it hard to
 * know whether a new version of a component will still look okay.
 *
 * As a compromise, these helpers allow the creation of a "generic" attribute.
 * This attribute is normally set by default, and styles can be written that
 * apply only when the generic attribute is set. This makes it easy to remove
 * all default styling -- set the generic attribute to false, and all default
 * styling will be removed.
 */

BasicGenericHelpers = {

  /*
   * This member can be included in the "properties" key for a Polymer element.
   * E.g.:
   *
   * Polymer({
   *   is: 'my-element',
   *   properties: {
   *     generic: BasicGenericHelpers.generic
   *   }
   * });
   *
   */
  generic: {
    type: Boolean,
    value: null,
    reflectToAttribute: true
  },

  /*
   * Invoke this method in a component's ready handler to set the generic
   * attribute to true by default.
   *
   * We explicitly set the generic attribute to true, rather than providing that
   * as a default value. A default value won't appear on an element instance as
   * an attribute, but an attribute we set explicitly will. We need the
   * attribute there so that generic styling can be set simply by defining rules
   * like
   *
   *  :host([generic=""]) {
   *    ...
   *  }
   *
   */
  setGenericDefault: function(element) {
    if (element.getAttribute('generic') == null) {
      element.generic = true;
    }
  }

};
