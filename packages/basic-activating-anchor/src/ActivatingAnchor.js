import WrappedStandardElement from '../../basic-wrapped-standard-element/src/WrappedStandardElement';


class ActivatingAnchor extends WrappedStandardElement.wrap('a') {

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

  get href() {
    return super.href;
  }
  set href(value) {
    super.href = value;
    refresh(this);
  }

}


// Update the active status of the element based on the current location.
function refresh(element) {
  let current = window.location.href;
  element.active = element.areaLink ?
    (current.substr(0, element.href.length) === element.href) : // Match prefix
    (current === element.href); // Match whole path
}


document.registerElement('basic-activating-anchor', ActivatingAnchor);
