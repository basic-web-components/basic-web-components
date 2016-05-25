import WrappedStandardElement from '../../basic-wrapped-standard-element/src/WrappedStandardElement';
import toggleClass from '../../basic-component-mixins/src/toggleClass';


/**
 * An anchor (link) that highlights itself when its destination matches the
 * current location.
 *
 * [Live demo](http://basicwebcomponents.org/basic-web-components/packages/basic-current-anchor/)
 *
 * Such a link commonly appears in toolbars, side bars, and other navigation
 * elements. In these situations, you generally want the user to understand what
 * page or area the user is already on.
 *
 * When the link is current — when it points to the current location — the
 * link will have the CSS `current` class applied to it, and its `current`
 * property will be true.
 *
 * Note: one limitation of this component is that, by default, the link does
 * *not* show the standard link color (usually blue) and text decoration
 * (underline). However, in navigation elements like toolbars, you often will
 * want to explicitly specific link colors anyway, e.g., to reflect your
 * application's visual style and brand.
 */
class CurrentAnchor extends WrappedStandardElement.wrap('a') {

  /**
   * True if the link points to an area within a site, not just a single page.
   *
   * If true, the matching rule to determine whether the link is current changes:
   * an area link is considered to be current if the link's destination forms a
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

    // Stupid Edge/IE "support" popstate, but don't fire it on hashchange.
    // So we have to listen for hashchange as well, with the result that a
    // standards-compliant browser may end up refreshing the link twice.
    window.addEventListener('hashchange', event => {
      refresh(this);
    });

    if (this.areaLink == null) {
      this.areaLink = this.defaults.areaLink;
    }
  }

  /**
   * True if the link's destination matches the current page location.
   *
   * If this is true, the element will have an `current` CSS class applied to it.
   *
   * @type {boolean}
   */
  get current() {
    return this.classList.contains('current');
  }
  set current(value) {
    toggleClass(this, 'current', value);
    this.dispatchEvent(new CustomEvent('current-changed'));
  }

  get defaults() {
    let defaults = super.defaults || {};
    defaults.areaLink = false;
    return defaults;
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
    // Reset styles so that color can be specified from the outside without
    // having to define a CSS variable.
    return `
      <style>
      :host {
        display: inline-block;
      }

      #inner {
        color: inherit;
        display: inline-block;
        text-decoration: inherit;
      }
      </style>
      <a id="inner"><slot></slot></a>`;
  }

}


// Update the current status of the element based on the current location.
function refresh(element) {
  let url = window.location.href;
  let match;
  if (element.areaLink) {
    // Match prefix
    let prefix = element.href;
    // If prefix doesn't end in slash, add a slash.
    // We want to avoid matching in the middle of a folder name.
    if (prefix.length < url.length && prefix.substr(-1) !== '/') {
      prefix += '/';
    }
    match = (url.substr(0, prefix.length) === prefix);
  } else {
    // Match whole path
    match = (url === element.href);
  }
  element.current = match;
}


document.registerElement('basic-current-anchor', CurrentAnchor);
