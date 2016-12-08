import createSymbol from '../../basic-component-mixins/src/createSymbol';
import WrappedStandardElement from '../../basic-wrapped-standard-element/src/WrappedStandardElement';
import DistributedChildrenContentMixin from '../../basic-component-mixins/src/DistributedChildrenContentMixin';
import GenericMixin from '../../basic-component-mixins/src/GenericMixin';
import symbols from '../../basic-component-mixins/src/symbols';


// Symbols for private data members on an element.
const lineHeightSymbol = createSymbol('lineHeight');
const minimumRowsSymbol = createSymbol('minimumRows');
const valueTracksContentSymbol = createSymbol('valueTracksContent');

const base = WrappedStandardElement.wrap('textarea').compose(
  DistributedChildrenContentMixin,
  GenericMixin
);

/**
 * A text area that makes itself big enough to show its content.
 *
 * [Live demo](http://basicwebcomponents.org/basic-web-components/packages/basic-autosize-textarea/)
 *
 * This text input component is useful in situations where you want to ask the
 * user to enter as much text as they want, but don't want to take up a lot of
 * room on the page.
 *
 * The component works by copying the text to an invisible element which will
 * automatically grow in size; the expanding copy will expand the container,
 * which in turn will vertically stretch the text area to match.
 *
 * This component generally exposes all the same attributes/properties as a
 * standard HTML `<textarea>`.
 *
 * @mixes GenericMixin
 * @mixes DistributedChildrenContentMixin
 */
class AutosizeTextarea extends base {

  constructor() {
    super();

    this.inner.addEventListener('input', event => {
      valueChanged(this);
    });
    this.inner.addEventListener('keypress', event => {
      keypress(this, event);
    });

    // Set defaults.
    if (typeof this.minimumRows === 'undefined') {
      this.minimumRows = this[symbols.defaults].minimumRows;
    }

    // A standard textarea has its value track its textContent by default.
    // That is, changes to textContent update the value. However, if an attempt
    // is made to change the value directly, this breaks the automatic tracking.
    // From that point on, changes to textContent do *not* update the value.
    this[valueTracksContentSymbol] = true;
  }

  /**
   * Resize the element such that the textarea can exactly contain its content.
   * By default, this method is invoked whenever the text content changes.
   */
  autoSize() {
    // If we had speculatively added an extra line because of an Enter keypress,
    // we can now hide the extra line.
    this.$.extraLine.style.display = 'none';

    // We resize by copying the textarea contents to the element itself; the
    // text will then appear (via <slot>) inside the invisible div. If
    // we've set things up correctly, this new content should take up the same
    // amount of room as the same text in the textarea. Updating the element's
    // content adjusts the element's size, which in turn will make the textarea
    // the correct height.
    this.$.textCopy.textContent = this.value;
  }

  // Normally the value of the element is set and read through its value
  // attribute. As a convenience, and to mirror standard textarea behavior, it
  // is possible to set the content of the textarea by including text between
  // the opening and closing tag. This works only in one direction: setting the
  // tag content updates the textarea, but user edits in the textarea are not
  // reflected in the tag content. We capture the value of the initial text
  // content in order to set the value property during the create event.
  // TODO: Normalize indentation in the text content. Users will often want to
  // indent the markup so that it looks pretty. We should detect the indentation
  // level and remove any indentation whitespace
  // TODO: Consider using content innerHTML rather than plain text. The native
  // textarea element will include HTML, not just the stripped text, as initial
  // value property text.
  connectedCallback() {
    if (super.connectedCallback) { super.connectedCallback(); }
    initializeWhenRendered(this);
  }

  contentChanged() {
    if (super.contentChanged) { super.contentChanged(); }
    if (this[valueTracksContentSymbol]) {
      const text = getTextContent(this);
      this.inner.value = unescapeHtml(text);
      valueChanged(this);
    }
  }

  get [symbols.defaults]() {
    const defaults = super[symbols.defaults] || {};
    defaults.minimumRows = 1;
    return defaults;
  }

  /**
   * Determines the minimum number of rows shown. This is similar to the rows
   * attribute on a standard textarea, but because this element can grow, is
   * expressed as a minimum rather than a fixed number.
   *
   * By default, this property is 1, so when empty, the text area will be a
   * single line tall. That's efficient in terms of the space it consumes, but
   * until the user interacts with the element, they may not realize they can
   * enter multiple lines of text. Setting the property to a value higher than 1
   * will signal to the user that they can enter multiple lines of a text.
   *
   * By setting this property, you can also communicate to the user some sense
   * of how much text you're expecting them to provide. For example, on a
   * feedback form, asking the user to enter their feedback in a single-line
   * text box implies you don't really want them to enter much text — even if
   * the text box will grow when they type. By setting this to a value like,
   * say, 10 rows, you can signal that you're fully expecting them to enter more
   * text.
   *
   * @type {number}
   * @default 1
   */
  get minimumRows() {
    return this[minimumRowsSymbol];
  }
  set minimumRows(value) {
    this[minimumRowsSymbol] = parseInt(value);
    if (this[lineHeightSymbol]) {
      setMinimumHeight(this);
    }
  }

  get [symbols.template]() {
    return `
      <style>
      :host {
        display: block;
      }

      #autoSizeContainer {
        position: relative;
      }

      /*
       * Ensure both the text area and copy end up with the element's own font
       * metrics, so that text will lay out the same in both of them.
       */
      #inner,
      #copyContainer {
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        font-family: inherit;
        font-size: inherit;
        font-style: inherit;
        font-weight: inherit;
        line-height: inherit;
        margin: 0;
      }

      #inner {
        height: 100%;
        overflow: hidden;
        position: absolute;
        resize: none;
        top: 0;
        width: 100%;
        @apply(--textarea);
      }

      #copyContainer {
        visibility: hidden;
        white-space: pre-wrap; /* So lines wrap */
        word-wrap: break-word; /* So we break at word boundaries when possible */
      }

      #contentContainer {
        display: none;
      }
      </style>

      <!--
      The invisible copyContainer contains an extraSpace element that ensures that,
      even if the last line of the textarea is blank, there will be something in the
      line that forces the text copy to grow by a line. This extra space is a thin
      space, to reduce the amount by which the text copy will prematurely grow.

      The copyContainer also contains an extraLine element exists to deal with the
      fact that, if the user presses the Enter key down, the textarea's content will
      move before the complete text is available. See notes at _keypress.

      Lastly, we put the HTML content element into a separate container so we can
      hide it. We need to have a content element somewhere in the template to
      convince Polymer that we care about the content in the Shady DOM case --
      without that content element, Shady DOM will conclude the element doesn't
      need its light DOM content, and will throw it away.
      -->
      <div id="autoSizeContainer">
        <textarea id="inner"></textarea>
        <div id="copyContainer"><span id="textCopy"></span><span id="extraSpace">&thinsp;</span><div id="extraLine">&nbsp;</div></div>
      </div>
      <div id="contentContainer">
        <slot></slot>
      </div>
    `;
  }

  /**
   * The text currently shown in the textarea.
   *
   * Note that the text shown in the textarea can also be updated by changing
   * the element's innerHTML/textContent. However, if the value property is
   * explicitly set, that will override the innerHTML/textContent.
   *
   * @type {string}
   */
  get value() {
    return this.inner.value;
  }
  set value(text) {
    // Explicitly setting value breaks automatic update of value from content.
    this[valueTracksContentSymbol] = false;
    this.inner.value = text;
    valueChanged(this);
  }

  /**
   * Fires when the user types in the textarea.
   *
   * @memberof AutosizeTextarea
   * @event change
   */
}


function getTextContent(element) {
  let text = element.distributedTextContent;

  // Trim the text.
  // This is non-standard textarea behavior. A standard textarea will trim the
  // first character if it's a newline, but that's it. However, authors will
  // want to be able to place the opening and closing tags on their own lines.
  // So it seems more helpful to trim whitespace on either side.
  text = text.trim();

  return text;
}


// Set up once this component has been rendered.
//
// On Chrome (as of 10/23/14) at least, if an instance if this component is
// added dynamically, its attached handler may trigger before its been
// rendered. That would cause our layout calculations to be incorrect.
//
function initializeWhenRendered(element) {

  // If the component has been rendered, our height should be nonzero.
  if (element.clientHeight === 0) {
    // Not rendered yet: wait a bit before trying again.
    setTimeout(() => initializeWhenRendered(element), 10);
    return;
  }

  // If we reach this point, the component's elements should by styled.

  // For auto-sizing to work, we need the text copy to have the same border,
  // padding, and other relevant characteristics as the original text area.
  // Since those aspects are affected by CSS, we have to wait until the
  // element is in the document before we can update the text copy.
  const textBoxStyle = getComputedStyle(element.inner);
  const copyContainerStyle = element.$.copyContainer.style;
  copyContainerStyle.borderBottomStyle  = textBoxStyle.borderBottomStyle;
  copyContainerStyle.borderBottomWidth  = textBoxStyle.borderBottomWidth;
  copyContainerStyle.borderLeftStyle    = textBoxStyle.borderLeftStyle;
  copyContainerStyle.borderLeftWidth    = textBoxStyle.borderLeftWidth;
  copyContainerStyle.borderRightStyle   = textBoxStyle.borderRightStyle;
  copyContainerStyle.borderRightWidth   = textBoxStyle.borderRightWidth;
  copyContainerStyle.borderTopStyle     = textBoxStyle.borderTopStyle;
  copyContainerStyle.borderTopWidth     = textBoxStyle.borderTopWidth;
  copyContainerStyle.paddingBottom      = textBoxStyle.paddingBottom;
  copyContainerStyle.paddingLeft        = textBoxStyle.paddingLeft;
  copyContainerStyle.paddingRight       = textBoxStyle.paddingRight;
  copyContainerStyle.paddingTop         = textBoxStyle.paddingTop;

  // Use the extraLine member to gauge the expected height of a single line of
  // text. We can't use lineHeight, because that can be reported as "normal",
  // and we want to know the actual pixel height.
  element.$.extraLine.style.display = 'inherit';
  element[lineHeightSymbol] = element.$.extraLine.clientHeight;

  // Now that we know the line height, we can hide the extra line.
  element.$.extraLine.style.display = 'none';

  // Use the line height in conjunction with minimumRows to establish the
  // overall minimum height of the component.
  setMinimumHeight(element);
}


// Speculatively add a line to our copy of the text. We're not sure what the
// exact effect of typing this character will be, and at this point it's not
// reflected yet in the textarea's content. We speculate that it will add a
// line to the text and size accordingly. (One other possibility is that the
// user's replacing a selected chunk of text with a newline.) In any event,
// once we get the keyup or change event, we'll make any final adjustments.
//
// TODO: If the user holds down the Enter key, we can get a bunch of keypress
// events before we get keyup. This causes flicker. Instead of supporting only
// a single extra speculative line, we should grow the speculative element to
// contain the number of Enter keypresses we've received.
function keypress(element, event) {
  if (event.keyCode === 13 /* Enter */) {
    element.$.extraLine.style.display = 'inherit';
  }
}


// Setting the minimumRows attribute translates into setting the minimum
// height on the text copy container.
function setMinimumHeight(element) {
  const copyContainer = element.$.copyContainer;
  const outerHeight = copyContainer.getBoundingClientRect().height;
  const style = getComputedStyle(copyContainer);
  const paddingTop = parseFloat(style.paddingTop);
  const paddingBottom = parseFloat(style.paddingBottom);
  const innerHeight = copyContainer.clientHeight - paddingTop - paddingBottom;
  const bordersPlusPadding = outerHeight - innerHeight;
  let minHeight = (element.minimumRows * element[lineHeightSymbol]) + bordersPlusPadding;
  minHeight = Math.ceil(minHeight);
  copyContainer.style.minHeight = minHeight + 'px';
}


function unescapeHtml(html) {
  return html
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '\"')
    .replace(/&#039;/g, '\'');
}


/*
 * Handle a change in the element's value property.
 */
function valueChanged(element) {
  element.autoSize();
  element.dispatchEvent(new CustomEvent('value-changed'));
}


customElements.define('basic-autosize-textarea', AutosizeTextarea);
export default AutosizeTextarea;
