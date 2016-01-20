/**
 * @class ShadowTemplate
 * @classdesc Mixin for stamping a template into a Shadow DOM subtree upon
 * component instantiation
 *
 * If a component defines a template property (as a string or referencing a HTML
 * template), when the component class is instantiated, a shadow root will be
 * created on the instance, and the contents of the template will be cloned into
 * the shadow root.
 *
 * For the time being, this extension retains support for Shadow DOM v0.
 * That will eventually be deprecated as browsers implement Shadow DOM v1.
 */


// Feature detection for old Shadow DOM v0.
const USING_SHADOW_DOM_V0 = (typeof HTMLElement.prototype.createShadowRoot !== 'undefined');


export default (base) => class ShadowTemplate extends base {

  /*
   * If the component defines a template, a shadow root will be created on the
   * component instance, and the template stamped into it.
   */
  createdCallback() {
    if (super.createdCallback) { super.createdCallback(); }
    let template = this.template;
    // TODO: Save the processed template with the component's class prototype
    // so it doesn't need to be processed with every instantiation.
    if (template) {

      if (typeof template === 'string') {
        // Upgrade plain string to real template.
        template = createTemplateWithInnerHTML(template);
      }

      if (USING_SHADOW_DOM_V0) {
        polyfillSlotWithContent(template);
      }

      if (window.ShadowDOMPolyfill) {
        shimTemplateStyles(template, this.localName);
      }

      // this.log("cloning template into shadow root");
      let root = USING_SHADOW_DOM_V0 ?
        this.createShadowRoot() :             // Shadow DOM v0
        this.attachShadow({ mode: 'open' });  // Shadow DOM v1
      let clone = document.importNode(template.content, true);
      root.appendChild(clone);
    }
  }

};


// Convert a plain string of HTML into a real template element.
function createTemplateWithInnerHTML(innerHTML) {
  let template = document.createElement('template');
  // REVIEW: Is there an easier way to do this?
  // We'd like to just set innerHTML on the template content, but since it's
  // a DocumentFragment, that doesn't work.
  let div = document.createElement('div');
  div.innerHTML = innerHTML;
  while (div.childNodes.length > 0) {
    template.content.appendChild(div.childNodes[0]);
  }
  return template;
}

// Replace occurences of v1 slot elements with v0 content elements.
// This does not yet map named slots to content select clauses.
function polyfillSlotWithContent(template) {
  [].forEach.call(template.content.querySelectorAll('slot'), slotElement => {
    let contentElement = document.createElement('content');
    slotElement.parentNode.replaceChild(contentElement, slotElement);
  });
}

// Invoke basic style shimming with ShadowCSS.
function shimTemplateStyles(template, tag) {
  window.WebComponents.ShadowCSS.shimStyling(template.content, tag);
}
