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
    this._areaLink = value;
    this.refresh();
  }

  attachedCallback() {
    if (super.attachedCallback) { super.attachedCallback(); }
    this.refresh();
  }

  createdCallback() {
    if (super.createdCallback) { super.createdCallback(); }
    window.addEventListener('popstate', event => {
      this.refresh();
    });
    this._areaLink = false;
  }

  get href() {
    return super.href;
  }
  set href(value) {
    super.href = value;
    this.refresh();
  }

  refresh() {
    let current = window.location.href;
    this.active = this.areaLink ?
      (current.substr(0, this.href.length) === this.href) : // Match prefix
      (current === this.href);                              // Match whole path
  }

}


document.registerElement('basic-activating-anchor', ActivatingAnchor);
