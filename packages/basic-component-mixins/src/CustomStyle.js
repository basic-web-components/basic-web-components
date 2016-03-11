export default (base) => {

  class CustomStyle extends base {

    get customStyle() {
      return this._customStyle;
    }
    set customStyle(customStyle) {
      let styleElement = this.shadowRoot.querySelector('style');
      if (!styleElement) {
        console.warn("Tried to set custom-style on an element whose shadow tree contains no <style> element.");
        return;
      }
      if (!this._originalStyle) {
        this._originalStyle = styleElement.textContent;
      }
      this._customStyle = customStyle;
      styleElement.textContent = `${this._originalStyle}\n${customStyle}`;
    }

  }

  return CustomStyle;
};
