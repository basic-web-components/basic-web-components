import WrappedStandardElement from '../../basic-wrapped-standard-element/src/WrappedStandardElement';


/**
 * An anchor (link) that highlights itself when its destination matches the
 * current location.
 *
 * [Live demo](http://basicwebcomponents.org/basic-web-components/packages/basic-activating-anchor/)
 *
 * Such a link commonly appears in toolbars, side bars, and other navigation
 * elements. In these situations, you generally want the user to understand what
 * page or area the user is already on.
 *
 * Note: one limitation of this component is that, by default, the link does
 * *not* show the standard link color (usually blue). However, in navigation
 * elements like toolbars, you often will want to explicitly specific link
 * colors anyway, e.g., to reflect your application's visual style and brand.
 */
class ActivatingAnchor extends WrappedStandardElement.wrap('a') {

  /**
   * True if the link's destination matches the current page location.
   *
   * If this is true, the element will have an `active` CSS class applied to it.
   *
   * @type {boolean}
   */
  get active() {
    return this.classList.contains('active');
  }
  set active(value) {
    // Would like to use classList.toggle() here, but IE 11 doesn't have it.
    if (value) {
      this.classList.add('active');
    } else {
      this.classList.remove('active');
    }
  }

  /**
   * True if the link points to an area within a site, not just a single page.
   *
   * If true, the matching rule to determine whether the link is active changes:
   * an area link is considered to be active if the link's destination forms a
   * prefix of the current location (instead of matching the complete URL).
   *
   * @type {boolean}
   */
  get areaLink() {
    return this._areaLink;
  }
  set areaLink(value) {
    // Cast boolean or string values to boolean.
    this._areaLink = (String(value) === 'true');
    refresh(this);
  }

  attachedCallback() {
    if (super.attachedCallback) { super.attachedCallback(); }
    refresh(this);
  }

  createdCallback() {
    if (super.createdCallback) { super.createdCallback(); }
    window.addEventListener('popstate', event => {
      refresh(this);
    });
    if (typeof this._areaLink === 'undefined') {
      this._areaLink = false;
    }
  }

  // Augment href implementation so that changing href checks the active status.
  get href() {
    return super.href;
  }
  set href(value) {
    super.href = value;
    refresh(this);
  }

  get template() {
    // Specify color:inherit so that color can be specified from the outside
    // without having to define a CSS variable.
    return `
      <style>
      #inner {
        color: inherit;
      }
      </style>
      <a id="inner"><slot></slot></a>`;
  }

}


// Update the active status of the element based on the current location.
function refresh(element) {
  let current = window.location.href;
  let match;
  if (element.areaLink && element.href.length < current.length) {
    // Match prefix
    let prefix = element.href;
    // If prefix doesn't end in slash, add a slash.
    // We want to avoid matching in the middle of a folder name.
    if (prefix.substr(-1) !== '/') {
      prefix += '/';
    }
    match = (current.substr(0, prefix.length) === prefix);
  } else {
    // Match whole path
    match = (current === element.href);
  }
  element.active = match;
}


document.registerElement('basic-activating-anchor', ActivatingAnchor);
