(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _AnimationStage = require('./src/AnimationStage');

var _AnimationStage2 = _interopRequireDefault(_AnimationStage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.Basic = window.Basic || {}; /*
                                    * This file is transpiled to create an ES5-compatible distribution in which
                                    * the package's main feature(s) are available via the window.Basic global.
                                    * If you're already using ES6 yourself, ignore this file, and instead import
                                    * the source file(s) you want from the src folder.
                                    */

window.Basic.AnimationStage = _AnimationStage2.default;

},{"./src/AnimationStage":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _ElementBase = require('../../basic-element-base/src/ElementBase');

var _ElementBase2 = _interopRequireDefault(_ElementBase);

var _ContentItemsMixin = require('../../basic-component-mixins/src/ContentItemsMixin');

var _ContentItemsMixin2 = _interopRequireDefault(_ContentItemsMixin);

var _DistributedChildrenContentMixin = require('../../basic-component-mixins/src/DistributedChildrenContentMixin');

var _DistributedChildrenContentMixin2 = _interopRequireDefault(_DistributedChildrenContentMixin);

var _FractionalSelectionMixin = require('../../basic-component-mixins/src/FractionalSelectionMixin');

var _FractionalSelectionMixin2 = _interopRequireDefault(_FractionalSelectionMixin);

var _SelectionAnimationMixin = require('../../basic-component-mixins/src/SelectionAnimationMixin');

var _SelectionAnimationMixin2 = _interopRequireDefault(_SelectionAnimationMixin);

var _SelectionAriaActiveMixin = require('../../basic-component-mixins/src/SelectionAriaActiveMixin');

var _SelectionAriaActiveMixin2 = _interopRequireDefault(_SelectionAriaActiveMixin);

var _SingleSelectionMixin = require('../../basic-component-mixins/src/SingleSelectionMixin');

var _SingleSelectionMixin2 = _interopRequireDefault(_SingleSelectionMixin);

var _symbols = require('../../basic-component-mixins/src/symbols');

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var base = _ElementBase2.default.compose(_ContentItemsMixin2.default, _DistributedChildrenContentMixin2.default, _FractionalSelectionMixin2.default, _SelectionAnimationMixin2.default, _SelectionAriaActiveMixin2.default, _SingleSelectionMixin2.default);

/**
 * Presents a single item as selected, providing animated transitions when the
 * selection changes. The same animation can be shown at an arbitrary point,
 * generally used to reflect a user-controlled touch or trackpad drag operation
 * in progress.
 *
 * [Live demo](http://basicwebcomponents.org/basic-web-components/packages/basic-animation-stage/)
 *
 * This component is intended to be used as a programmatic rendering surface for
 * components which want to show transitional effects.
 *
 * The component uses [SelectionAnimationMixin](../basic-component-mixins/docs/SelectionAnimationMixin.md)
 * mixin, which in turn uses the Web Animations API. For use on browsers which
 * do not support that API natively, you will need to load the
 * [Web Animations polyfill](https://github.com/web-animations/web-animations-js).
 *
 * For a simpler component that exhibits only a sliding effect, but does not
 * require the Web Animations API, see [basic-sliding-viewport](../basic-sliding-viewport).
 *
 * @extends ElementBase
 * @mixes ContentItemsMixin
 * @mixes DistributedChildrenContentMixin
 * @mixes SelectionAnimationMixin
 * @mixes SelectionAriaActiveMixin
 * @mixes SingleSelectionMixin
 */

var AnimationStage = function (_base) {
  _inherits(AnimationStage, _base);

  function AnimationStage() {
    _classCallCheck(this, AnimationStage);

    return _possibleConstructorReturn(this, (AnimationStage.__proto__ || Object.getPrototypeOf(AnimationStage)).apply(this, arguments));
  }

  _createClass(AnimationStage, [{
    key: _symbols2.default.defaults,
    get: function get() {
      var defaults = _get(AnimationStage.prototype.__proto__ || Object.getPrototypeOf(AnimationStage.prototype), _symbols2.default.defaults, this) || {};
      defaults.selectionRequired = true;
      return defaults;
    }
  }, {
    key: _symbols2.default.template,
    get: function get() {
      return '\n      <style>\n      :host {\n        overflow: hidden;\n        position: relative;\n      }\n\n      #container ::slotted(*) {\n        height: 100%;\n        object-fit: contain;\n        position: absolute;\n        width: 100%;\n        will-change: transform;\n      }\n      </style>\n\n      <div id="container" role="none">\n        <slot></slot>\n      </div>\n    ';
    }
  }]);

  return AnimationStage;
}(base);

customElements.define('basic-animation-stage', AnimationStage);
exports.default = AnimationStage;

},{"../../basic-component-mixins/src/ContentItemsMixin":14,"../../basic-component-mixins/src/DistributedChildrenContentMixin":16,"../../basic-component-mixins/src/FractionalSelectionMixin":18,"../../basic-component-mixins/src/SelectionAnimationMixin":28,"../../basic-component-mixins/src/SelectionAriaActiveMixin":29,"../../basic-component-mixins/src/SingleSelectionMixin":34,"../../basic-component-mixins/src/symbols":42,"../../basic-element-base/src/ElementBase":47}],3:[function(require,module,exports){
'use strict';

var _AutosizeTextarea = require('./src/AutosizeTextarea');

var _AutosizeTextarea2 = _interopRequireDefault(_AutosizeTextarea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.Basic = window.Basic || {}; /*
                                    * This file is transpiled to create an ES5-compatible distribution in which
                                    * the package's main feature(s) are available via the window.Basic global.
                                    * If you're already using ES6 yourself, ignore this file, and instead import
                                    * the source file(s) you want from the src folder.
                                    */

window.Basic.AutosizeTextarea = _AutosizeTextarea2.default;

},{"./src/AutosizeTextarea":4}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createSymbol = require('../../basic-component-mixins/src/createSymbol');

var _createSymbol2 = _interopRequireDefault(_createSymbol);

var _WrappedStandardElement = require('../../basic-wrapped-standard-element/src/WrappedStandardElement');

var _WrappedStandardElement2 = _interopRequireDefault(_WrappedStandardElement);

var _DistributedChildrenContentMixin = require('../../basic-component-mixins/src/DistributedChildrenContentMixin');

var _DistributedChildrenContentMixin2 = _interopRequireDefault(_DistributedChildrenContentMixin);

var _GenericMixin = require('../../basic-component-mixins/src/GenericMixin');

var _GenericMixin2 = _interopRequireDefault(_GenericMixin);

var _symbols = require('../../basic-component-mixins/src/symbols');

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Symbols for private data members on an element.
var lineHeightSymbol = (0, _createSymbol2.default)('lineHeight');
var minimumRowsSymbol = (0, _createSymbol2.default)('minimumRows');
var valueTracksContentSymbol = (0, _createSymbol2.default)('valueTracksContent');

var base = _WrappedStandardElement2.default.wrap('textarea').compose(_DistributedChildrenContentMixin2.default, _GenericMixin2.default);

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

var AutosizeTextarea = function (_base) {
  _inherits(AutosizeTextarea, _base);

  function AutosizeTextarea() {
    _classCallCheck(this, AutosizeTextarea);

    var _this = _possibleConstructorReturn(this, (AutosizeTextarea.__proto__ || Object.getPrototypeOf(AutosizeTextarea)).call(this));

    _this.inner.addEventListener('input', function (event) {
      valueChanged(_this);
    });
    _this.inner.addEventListener('keypress', function (event) {
      keypress(_this, event);
    });

    // Set defaults.
    if (typeof _this.minimumRows === 'undefined') {
      _this.minimumRows = _this[_symbols2.default.defaults].minimumRows;
    }

    // A standard textarea has its value track its textContent by default.
    // That is, changes to textContent update the value. However, if an attempt
    // is made to change the value directly, this breaks the automatic tracking.
    // From that point on, changes to textContent do *not* update the value.
    _this[valueTracksContentSymbol] = true;
    return _this;
  }

  /**
   * Resize the element such that the textarea can exactly contain its content.
   * By default, this method is invoked whenever the text content changes.
   */


  _createClass(AutosizeTextarea, [{
    key: 'autoSize',
    value: function autoSize() {
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

  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      if (_get(AutosizeTextarea.prototype.__proto__ || Object.getPrototypeOf(AutosizeTextarea.prototype), 'connectedCallback', this)) {
        _get(AutosizeTextarea.prototype.__proto__ || Object.getPrototypeOf(AutosizeTextarea.prototype), 'connectedCallback', this).call(this);
      }
      initializeWhenRendered(this);
    }
  }, {
    key: 'contentChanged',
    value: function contentChanged() {
      if (_get(AutosizeTextarea.prototype.__proto__ || Object.getPrototypeOf(AutosizeTextarea.prototype), 'contentChanged', this)) {
        _get(AutosizeTextarea.prototype.__proto__ || Object.getPrototypeOf(AutosizeTextarea.prototype), 'contentChanged', this).call(this);
      }
      if (this[valueTracksContentSymbol]) {
        var text = getTextContent(this);
        this.inner.value = unescapeHtml(text);
        valueChanged(this);
      }
    }
  }, {
    key: _symbols2.default.defaults,
    get: function get() {
      var defaults = _get(AutosizeTextarea.prototype.__proto__ || Object.getPrototypeOf(AutosizeTextarea.prototype), _symbols2.default.defaults, this) || {};
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

  }, {
    key: 'minimumRows',
    get: function get() {
      return this[minimumRowsSymbol];
    },
    set: function set(value) {
      this[minimumRowsSymbol] = parseInt(value);
      if (this[lineHeightSymbol]) {
        setMinimumHeight(this);
      }
    }
  }, {
    key: _symbols2.default.template,
    get: function get() {
      return '\n      <style>\n      :host {\n        display: block;\n      }\n\n      #autoSizeContainer {\n        position: relative;\n      }\n\n      /*\n       * Ensure both the text area and copy end up with the element\'s own font\n       * metrics, so that text will lay out the same in both of them.\n       */\n      #inner,\n      #copyContainer {\n        -moz-box-sizing: border-box;\n        box-sizing: border-box;\n        font-family: inherit;\n        font-size: inherit;\n        font-style: inherit;\n        font-weight: inherit;\n        line-height: inherit;\n        margin: 0;\n      }\n\n      #inner {\n        height: 100%;\n        overflow: hidden;\n        position: absolute;\n        resize: none;\n        top: 0;\n        width: 100%;\n        @apply(--textarea);\n      }\n\n      #copyContainer {\n        visibility: hidden;\n        white-space: pre-wrap; /* So lines wrap */\n        word-wrap: break-word; /* So we break at word boundaries when possible */\n      }\n\n      #contentContainer {\n        display: none;\n      }\n      </style>\n\n      <!--\n      The invisible copyContainer contains an extraSpace element that ensures that,\n      even if the last line of the textarea is blank, there will be something in the\n      line that forces the text copy to grow by a line. This extra space is a thin\n      space, to reduce the amount by which the text copy will prematurely grow.\n\n      The copyContainer also contains an extraLine element exists to deal with the\n      fact that, if the user presses the Enter key down, the textarea\'s content will\n      move before the complete text is available. See notes at _keypress.\n\n      Lastly, we put the HTML content element into a separate container so we can\n      hide it. We need to have a content element somewhere in the template to\n      convince Polymer that we care about the content in the Shady DOM case --\n      without that content element, Shady DOM will conclude the element doesn\'t\n      need its light DOM content, and will throw it away.\n      -->\n      <div id="autoSizeContainer">\n        <textarea id="inner"></textarea>\n        <div id="copyContainer"><span id="textCopy"></span><span id="extraSpace">&thinsp;</span><div id="extraLine">&nbsp;</div></div>\n      </div>\n      <div id="contentContainer">\n        <slot></slot>\n      </div>\n    ';
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

  }, {
    key: 'value',
    get: function get() {
      return this.inner.value;
    },
    set: function set(text) {
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

  }]);

  return AutosizeTextarea;
}(base);

function getTextContent(element) {
  var text = element.distributedTextContent;

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
    setTimeout(function () {
      return initializeWhenRendered(element);
    }, 10);
    return;
  }

  // If we reach this point, the component's elements should by styled.

  // For auto-sizing to work, we need the text copy to have the same border,
  // padding, and other relevant characteristics as the original text area.
  // Since those aspects are affected by CSS, we have to wait until the
  // element is in the document before we can update the text copy.
  var textBoxStyle = getComputedStyle(element.inner);
  var copyContainerStyle = element.$.copyContainer.style;
  copyContainerStyle.borderBottomStyle = textBoxStyle.borderBottomStyle;
  copyContainerStyle.borderBottomWidth = textBoxStyle.borderBottomWidth;
  copyContainerStyle.borderLeftStyle = textBoxStyle.borderLeftStyle;
  copyContainerStyle.borderLeftWidth = textBoxStyle.borderLeftWidth;
  copyContainerStyle.borderRightStyle = textBoxStyle.borderRightStyle;
  copyContainerStyle.borderRightWidth = textBoxStyle.borderRightWidth;
  copyContainerStyle.borderTopStyle = textBoxStyle.borderTopStyle;
  copyContainerStyle.borderTopWidth = textBoxStyle.borderTopWidth;
  copyContainerStyle.paddingBottom = textBoxStyle.paddingBottom;
  copyContainerStyle.paddingLeft = textBoxStyle.paddingLeft;
  copyContainerStyle.paddingRight = textBoxStyle.paddingRight;
  copyContainerStyle.paddingTop = textBoxStyle.paddingTop;

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
  var copyContainer = element.$.copyContainer;
  var outerHeight = copyContainer.getBoundingClientRect().height;
  var style = getComputedStyle(copyContainer);
  var paddingTop = parseFloat(style.paddingTop);
  var paddingBottom = parseFloat(style.paddingBottom);
  var innerHeight = copyContainer.clientHeight - paddingTop - paddingBottom;
  var bordersPlusPadding = outerHeight - innerHeight;
  var minHeight = element.minimumRows * element[lineHeightSymbol] + bordersPlusPadding;
  minHeight = Math.ceil(minHeight);
  copyContainer.style.minHeight = minHeight + 'px';
}

function unescapeHtml(html) {
  return html.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, ">").replace(/&quot;/g, '\"').replace(/&#039;/g, '\'');
}

/*
 * Handle a change in the element's value property.
 */
function valueChanged(element) {
  element.autoSize();
  element.dispatchEvent(new CustomEvent('value-changed'));
}

customElements.define('basic-autosize-textarea', AutosizeTextarea);
exports.default = AutosizeTextarea;

},{"../../basic-component-mixins/src/DistributedChildrenContentMixin":16,"../../basic-component-mixins/src/GenericMixin":19,"../../basic-component-mixins/src/createSymbol":38,"../../basic-component-mixins/src/symbols":42,"../../basic-wrapped-standard-element/src/WrappedStandardElement":71}],5:[function(require,module,exports){
'use strict';

var _Carousel = require('./src/Carousel');

var _Carousel2 = _interopRequireDefault(_Carousel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.Basic = window.Basic || {}; /*
                                    * This file is transpiled to create an ES5-compatible distribution in which
                                    * the package's main feature(s) are available via the window.Basic global.
                                    * If you're already using ES6 yourself, ignore this file, and instead import
                                    * the source file(s) you want from the src folder.
                                    */

window.Basic.Carousel = _Carousel2.default;

},{"./src/Carousel":6}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _AnimationStage = require('../../basic-animation-stage/src/AnimationStage');

var _AnimationStage2 = _interopRequireDefault(_AnimationStage);

var _DirectionSelectionMixin = require('../../basic-component-mixins/src/DirectionSelectionMixin');

var _DirectionSelectionMixin2 = _interopRequireDefault(_DirectionSelectionMixin);

var _KeyboardDirectionMixin = require('../../basic-component-mixins/src/KeyboardDirectionMixin');

var _KeyboardDirectionMixin2 = _interopRequireDefault(_KeyboardDirectionMixin);

var _KeyboardMixin = require('../../basic-component-mixins/src/KeyboardMixin');

var _KeyboardMixin2 = _interopRequireDefault(_KeyboardMixin);

var _SwipeDirectionMixin = require('../../basic-component-mixins/src/SwipeDirectionMixin');

var _SwipeDirectionMixin2 = _interopRequireDefault(_SwipeDirectionMixin);

var _symbols = require('../../basic-component-mixins/src/symbols');

var _symbols2 = _interopRequireDefault(_symbols);

var _TrackpadDirectionMixin = require('../../basic-component-mixins/src/TrackpadDirectionMixin');

var _TrackpadDirectionMixin2 = _interopRequireDefault(_TrackpadDirectionMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var base = _AnimationStage2.default.compose(_DirectionSelectionMixin2.default, _KeyboardMixin2.default, _KeyboardDirectionMixin2.default, _SwipeDirectionMixin2.default, _TrackpadDirectionMixin2.default);

/**
 * Lets the user navigate laterally through a sequence of child elements.
 *
 * basic-carousel is an implementation of the carousel user interface pattern,
 * commonly used for navigating between images, pages, and other elements. This
 * pattern presents the user with a linear sequence of elements, only one of
 * which is shown at a time. The user can navigate to the next/previous element
 * with a variety of input methods.
 *
 * [Live demo](http://basicwebcomponents.org/basic-web-components/packages/basic-carousel/)
 *
 * The above demo adds the optional
 * [basic-arrow-selection](../basic-arrow-selection) and
 * [basic-page-dots](../basic-page-dots) components. You can also view a
 * [plain demo](http://basicwebcomponents.org/basic-web-components/packages/basic-carousel/plain.html)
 * demo.
 *
 * basic-carousel uses its children as the elements the user will navigate
 * through. In a typical use, a basic-carousel can be used to navigate between a
 * sequence of images:
 *
 *     <basic-carousel>
 *       <img src="image1.jpg">
 *       <img src="image2.jpg">
 *       <img src="image3.jpg">
 *     </basic-carousel>
 *
 * The child elements can be of any type — they are not restricted to images.
 *
 * This component attempts to meet the [Gold Standard for web components]
 * (https://github.com/webcomponents/gold-standard/wiki) so that it is generally
 * as flexible and robust as standard HTML elements. For example, it meets the
 * "Content Changes" criteria: the carousel will adapt to new child elements
 * added or removed at runtime.
 *
 * Currently, this component does not meet the Gold Standard criteria "Size to
 * Content". As a result, for the time being, **you must manually set a size on
 * this component**. Two approaches are to: 1) stretch the component across
 * whatever surface it is contained within, or 2) set it to be larger than the
 * largest child element you want to display. The former approach is more
 * common, and can be achieved with CSS styling such as:
 *
 *     html {
 *       height: 100%;
 *     }
 *
 *     body {
 *       display: -webkit-flex;
 *       display: flex;
 *       height: 100%;
 *       margin: 0;
 *     }
 *
 *     basic-carousel {
 *       -webkit-flex: 1;
 *       flex: 1;
 *     }
 *
 * The standard basic-carousel component supports navigation via the following
 * input methods:
 *
 * * KeyboardMixin. When the carousel has focus, the user can press Left, Right,
 *   Home, or End. These navigate to the expected element.
 * * Touch. On mobile and other touch-enabled devices, the user can drag left or
 *   right.
 * * Trackpad. The user can swipe left or right on a trackpad to navigate.
 *
 * Because carousels are used in a wide variety of circumstances, by default
 * basic-carousel provides a minimal appearance and no separately interactive
 * elements such as arrow buttons on the side or dots along the bottom. Those
 * elements can be added by wrapping a basic-carousel in optional accessories:
 *
 * * [basic-arrow-selection](../basic-arrow-selection).
 *   This adds prominent left and right arrow buttons on the side of the carousel.
 * * [basic-page-dots](../basic-page-dots).
 *   This adds a series of small dots below the carousel to indicate the user's
 *   current position in the sequence.
 * * [basic-slideshow-timer](../basic-slideshow-timer).
 *   Advances to the next item on a timer.
 * * [basic-tab-strip](../basic-tab-strip).
 *   Adds a strip of traditional tab buttons.
 *
 * See those components for more details, but in general you can construct a
 * common carousel with both arrow buttons and dots like so:
 *
 *     <basic-arrow-selection>
 *       <basic-page-dots>
 *         <basic-carousel>
 *           ... images, etc. ...
 *         </basic-carousel>
 *       </basic-page-dots>
 *     </basic-arrow-selection>
 *
 * For universal access, basic-carousel automatically adds a variety of
 * [ARIA](http://www.w3.org/WAI/intro/aria) properties to itself and to child
 * elements. This helps users navigate the sequence of elements in the carousel
 * using assistive technologies.
 *
 * @mixes DirectionSelectionMixin
 * @mixes GenericMixin
 * @mixes KeyboardMixin
 * @mixes KeyboardDirectionMixin
 * @mixes SwipeDirectionMixin
 * @mixes TrackpadDirectionMixin
 */

var Carousel = function (_base) {
  _inherits(Carousel, _base);

  function Carousel() {
    _classCallCheck(this, Carousel);

    return _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).apply(this, arguments));
  }

  _createClass(Carousel, [{
    key: _symbols2.default.defaults,
    get: function get() {
      var defaults = _get(Carousel.prototype.__proto__ || Object.getPrototypeOf(Carousel.prototype), _symbols2.default.defaults, this) || {};
      defaults.navigationAxis = 'horizontal';
      defaults.selectionAnimationEffect = 'slideWithGap';
      // defaults.selectionRequired = true;
      return defaults;
    }
  }]);

  return Carousel;
}(base);

customElements.define('basic-carousel', Carousel);
exports.default = Carousel;

},{"../../basic-animation-stage/src/AnimationStage":2,"../../basic-component-mixins/src/DirectionSelectionMixin":15,"../../basic-component-mixins/src/KeyboardDirectionMixin":20,"../../basic-component-mixins/src/KeyboardMixin":21,"../../basic-component-mixins/src/SwipeDirectionMixin":35,"../../basic-component-mixins/src/TrackpadDirectionMixin":37,"../../basic-component-mixins/src/symbols":42}],7:[function(require,module,exports){
'use strict';

var _CollapsiblePanel = require('./src/CollapsiblePanel');

var _CollapsiblePanel2 = _interopRequireDefault(_CollapsiblePanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.Basic = window.Basic || {}; /*
                                    * This file is transpiled to create an ES5-compatible distribution in which
                                    * the package's main feature(s) are available via the window.Basic global.
                                    * If you're already using ES6 yourself, ignore this file, and instead import
                                    * the source file(s) you want from the src folder.
                                    */

window.Basic.CollapsiblePanel = _CollapsiblePanel2.default;

},{"./src/CollapsiblePanel":8}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _ElementBase = require('../../basic-element-base/src/ElementBase');

var _ElementBase2 = _interopRequireDefault(_ElementBase);

var _OpenCloseMixin2 = require('../../basic-component-mixins/src/OpenCloseMixin');

var _OpenCloseMixin3 = _interopRequireDefault(_OpenCloseMixin2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A panel which can be expanded/collapsed with an animated transition.
 *
 * [Live demo](http://basicwebcomponents.org/basic-web-components/packages/basic-collapsible-panel/)
 *
 * This component combines the OpenCloseMixin mixin and a simple CSS height
 * animation.
 *
 * This component handles only the duties of collapsing and expanding. It does
 * not provide a user interface for the user to trigger the change in state;
 * you must provide that user interface yourself.
 *
 * @extends ElementBase
 * @mixes OpenCloseMixin
 */
var CollapsiblePanel = function (_OpenCloseMixin) {
  _inherits(CollapsiblePanel, _OpenCloseMixin);

  function CollapsiblePanel() {
    _classCallCheck(this, CollapsiblePanel);

    var _this = _possibleConstructorReturn(this, (CollapsiblePanel.__proto__ || Object.getPrototypeOf(CollapsiblePanel)).call(this));

    _this.$.overflow.addEventListener('transitionend', function () {
      if (!_this.closed) {
        // Remove the hard-coded height we applied for the transition so that
        // the element will reflow correctly, e.g., on window resize.
        _this.$.overflow.style.height = '';
      }
      // Ensure the animation only plays once. For some reason, Safari will show
      // the animation twice without this line, even though the render function
      // explicitly removes this class when it sets the old height. Neither
      // Chrome nor Firefox seem to need this line.
      _this.classList.remove('showTransition');
    });
    return _this;
  }

  _createClass(CollapsiblePanel, [{
    key: 'render',
    value: function render(closing) {
      _get(CollapsiblePanel.prototype.__proto__ || Object.getPrototypeOf(CollapsiblePanel.prototype), 'render', this).call(this, closing);

      var naturalHeight = this.$.container.getBoundingClientRect().height;
      if (naturalHeight === 0) {
        // Most likely haven't had a chance to render yet.
        this.$.overflow.style.height = closing ? 0 : '';
        return;
      }

      // Without animating, set starting height of transition.
      this.classList.remove('showTransition');
      var oldHeight = closing ? naturalHeight : 0;
      this.$.overflow.style.height = oldHeight + 'px';

      // Force a relayout so that the starting height is applied.
      // This can be achieved by reading a property like offsetHeight.
      this.$.overflow.offsetHeight; // jshint ignore:line

      // Turn animation on, and ending height of transition.
      this.classList.add('showTransition');
      var newHeight = closing ? 0 : naturalHeight;
      this.$.overflow.style.height = newHeight + 'px';
    }
  }, {
    key: symbols.template,
    get: function get() {
      return '\n      <style>\n      :host {\n        display: block;\n        overflow: hidden;\n      }\n\n      :host(.showTransition) #overflow {\n        transition: height 0.2s;\n      }\n      </style>\n\n      <div id="overflow" role="none">\n        <div id="container" role="none">\n          <slot></slot>\n        </div>\n      </div>\n    ';
    }
  }]);

  return CollapsiblePanel;
}((0, _OpenCloseMixin3.default)(_ElementBase2.default));

customElements.define('basic-collapsible-panel', CollapsiblePanel);
exports.default = CollapsiblePanel;

},{"../../basic-component-mixins/src/OpenCloseMixin":24,"../../basic-element-base/src/ElementBase":47}],9:[function(require,module,exports){
'use strict';

var _ArrowSelectionMixin = require('./src/ArrowSelectionMixin');

var _ArrowSelectionMixin2 = _interopRequireDefault(_ArrowSelectionMixin);

var _AttributeMarshallingMixin = require('./src/AttributeMarshallingMixin');

var _AttributeMarshallingMixin2 = _interopRequireDefault(_AttributeMarshallingMixin);

var _ClickSelectionMixin = require('./src/ClickSelectionMixin');

var _ClickSelectionMixin2 = _interopRequireDefault(_ClickSelectionMixin);

var _ComposableMixin = require('./src/ComposableMixin');

var _ComposableMixin2 = _interopRequireDefault(_ComposableMixin);

var _ContentItemsMixin = require('./src/ContentItemsMixin');

var _ContentItemsMixin2 = _interopRequireDefault(_ContentItemsMixin);

var _createSymbol = require('./src/createSymbol');

var _createSymbol2 = _interopRequireDefault(_createSymbol);

var _DirectionSelectionMixin = require('./src/DirectionSelectionMixin');

var _DirectionSelectionMixin2 = _interopRequireDefault(_DirectionSelectionMixin);

var _DistributedChildrenMixin = require('./src/DistributedChildrenMixin');

var _DistributedChildrenMixin2 = _interopRequireDefault(_DistributedChildrenMixin);

var _DistributedChildrenContentMixin = require('./src/DistributedChildrenContentMixin');

var _DistributedChildrenContentMixin2 = _interopRequireDefault(_DistributedChildrenContentMixin);

var _GenericMixin = require('./src/GenericMixin');

var _GenericMixin2 = _interopRequireDefault(_GenericMixin);

var _KeyboardMixin = require('./src/KeyboardMixin');

var _KeyboardMixin2 = _interopRequireDefault(_KeyboardMixin);

var _KeyboardDirectionMixin = require('./src/KeyboardDirectionMixin');

var _KeyboardDirectionMixin2 = _interopRequireDefault(_KeyboardDirectionMixin);

var _KeyboardPagedSelectionMixin = require('./src/KeyboardPagedSelectionMixin');

var _KeyboardPagedSelectionMixin2 = _interopRequireDefault(_KeyboardPagedSelectionMixin);

var _KeyboardPrefixSelectionMixin = require('./src/KeyboardPrefixSelectionMixin');

var _KeyboardPrefixSelectionMixin2 = _interopRequireDefault(_KeyboardPrefixSelectionMixin);

var _microtask = require('./src/microtask');

var _microtask2 = _interopRequireDefault(_microtask);

var _PageDotsMixin = require('./src/PageDotsMixin');

var _PageDotsMixin2 = _interopRequireDefault(_PageDotsMixin);

var _PlayControlsMixin = require('./src/PlayControlsMixin');

var _PlayControlsMixin2 = _interopRequireDefault(_PlayControlsMixin);

var _safeAttributes = require('./src/safeAttributes');

var _safeAttributes2 = _interopRequireDefault(_safeAttributes);

var _SelectionAnimationMixin = require('./src/SelectionAnimationMixin');

var _SelectionAnimationMixin2 = _interopRequireDefault(_SelectionAnimationMixin);

var _SelectionAriaActiveMixin = require('./src/SelectionAriaActiveMixin');

var _SelectionAriaActiveMixin2 = _interopRequireDefault(_SelectionAriaActiveMixin);

var _SelectionHighlightMixin = require('./src/SelectionHighlightMixin');

var _SelectionHighlightMixin2 = _interopRequireDefault(_SelectionHighlightMixin);

var _SelectionInViewMixin = require('./src/SelectionInViewMixin');

var _SelectionInViewMixin2 = _interopRequireDefault(_SelectionInViewMixin);

var _ShadowElementReferencesMixin = require('./src/ShadowElementReferencesMixin');

var _ShadowElementReferencesMixin2 = _interopRequireDefault(_ShadowElementReferencesMixin);

var _ShadowTemplateMixin = require('./src/ShadowTemplateMixin');

var _ShadowTemplateMixin2 = _interopRequireDefault(_ShadowTemplateMixin);

var _SingleSelectionMixin = require('./src/SingleSelectionMixin');

var _SingleSelectionMixin2 = _interopRequireDefault(_SingleSelectionMixin);

var _SwipeDirectionMixin = require('./src/SwipeDirectionMixin');

var _SwipeDirectionMixin2 = _interopRequireDefault(_SwipeDirectionMixin);

var _symbols = require('./src/symbols');

var _symbols2 = _interopRequireDefault(_symbols);

var _TimerSelectionMixin = require('./src/TimerSelectionMixin');

var _TimerSelectionMixin2 = _interopRequireDefault(_TimerSelectionMixin);

var _TrackpadDirectionMixin = require('./src/TrackpadDirectionMixin');

var _TrackpadDirectionMixin2 = _interopRequireDefault(_TrackpadDirectionMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.Basic = window.Basic || {}; /*
                                    * This file is transpiled to create an ES5-compatible distribution in which
                                    * the package's main feature(s) are available via the window.Basic global.
                                    * If you're already using ES6 yourself, ignore this file, and instead import
                                    * the source file(s) you want from the src folder.
                                    */

window.Basic.ArrowSelectionMixin = _ArrowSelectionMixin2.default;
window.Basic.AttributeMarshallingMixin = _AttributeMarshallingMixin2.default;
window.Basic.ClickSelectionMixin = _ClickSelectionMixin2.default;
window.Basic.ComposableMixin = _ComposableMixin2.default;
window.Basic.ContentItemsMixin = _ContentItemsMixin2.default;
window.Basic.createSymbol = _createSymbol2.default;
window.Basic.DirectionSelectionMixin = _DirectionSelectionMixin2.default;
window.Basic.DistributedChildrenMixin = _DistributedChildrenMixin2.default;
window.Basic.DistributedChildrenContentMixin = _DistributedChildrenContentMixin2.default;
window.Basic.generic = _GenericMixin2.default;
window.Basic.KeyboardMixin = _KeyboardMixin2.default;
window.Basic.KeyboardDirectionMixin = _KeyboardDirectionMixin2.default;
window.Basic.KeyboardPagedSelectionMixin = _KeyboardPagedSelectionMixin2.default;
window.Basic.KeyboardPrefixSelectionMixin = _KeyboardPrefixSelectionMixin2.default;
window.Basic.microtask = _microtask2.default;
window.Basic.PageDotsMixin = _PageDotsMixin2.default;
window.Basic.PlayControlsMixin = _PlayControlsMixin2.default;
window.Basic.safeAttributes = _safeAttributes2.default;
window.Basic.SelectionAnimationMixin = _SelectionAnimationMixin2.default;
window.Basic.SelectionAriaActiveMixin = _SelectionAriaActiveMixin2.default;
window.Basic.SelectionHighlightMixin = _SelectionHighlightMixin2.default;
window.Basic.SelectionInViewMixin = _SelectionInViewMixin2.default;
window.Basic.ShadowElementReferencesMixin = _ShadowElementReferencesMixin2.default;
window.Basic.ShadowTemplateMixin = _ShadowTemplateMixin2.default;
window.Basic.SingleSelectionMixin = _SingleSelectionMixin2.default;
window.Basic.SwipeDirectionMixin = _SwipeDirectionMixin2.default;
window.Basic.symbols = _symbols2.default;
window.Basic.TimerSelectionMixin = _TimerSelectionMixin2.default;
window.Basic.TrackpadDirectionMixin = _TrackpadDirectionMixin2.default;

},{"./src/ArrowSelectionMixin":10,"./src/AttributeMarshallingMixin":11,"./src/ClickSelectionMixin":12,"./src/ComposableMixin":13,"./src/ContentItemsMixin":14,"./src/DirectionSelectionMixin":15,"./src/DistributedChildrenContentMixin":16,"./src/DistributedChildrenMixin":17,"./src/GenericMixin":19,"./src/KeyboardDirectionMixin":20,"./src/KeyboardMixin":21,"./src/KeyboardPagedSelectionMixin":22,"./src/KeyboardPrefixSelectionMixin":23,"./src/PageDotsMixin":25,"./src/PlayControlsMixin":26,"./src/SelectionAnimationMixin":28,"./src/SelectionAriaActiveMixin":29,"./src/SelectionHighlightMixin":30,"./src/SelectionInViewMixin":31,"./src/ShadowElementReferencesMixin":32,"./src/ShadowTemplateMixin":33,"./src/SingleSelectionMixin":34,"./src/SwipeDirectionMixin":35,"./src/TimerSelectionMixin":36,"./src/TrackpadDirectionMixin":37,"./src/createSymbol":38,"./src/microtask":39,"./src/safeAttributes":41,"./src/symbols":42}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createSymbol = require('../../basic-component-mixins/src/createSymbol');

var _createSymbol2 = _interopRequireDefault(_createSymbol);

var _symbols = require('../../basic-component-mixins/src/symbols');

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Symbols for private data members on an element.
var mousedownListenerSymbol = (0, _createSymbol2.default)('mousedownListener');
var mousemoveListenerSymbol = (0, _createSymbol2.default)('mousemoveListener');
var lastMouseXSymbol = (0, _createSymbol2.default)('lastMouseX');
var lastMouseYSymbol = (0, _createSymbol2.default)('lastMouseY');
var mouseTimeoutSymbol = (0, _createSymbol2.default)('mouseTimeout');

/* Exported function extends a base class with ArrowSelection. */

exports.default = function (base) {

  /**
   * Template mixin which adds prominent left and right arrow buttons to a
   * wrapped child such as a carousel.
   *
   * You can see a [live demo](http://basicwebcomponents.org/basic-web-components/packages/basic-arrow-selection.html)
   * of this component applied to a carousel.
   *
   * Clicking the left/right buttons selects the previous/next item.
   *
   * Typical usage:
   *
   *     class CarouselWithArrows extends ArrowSelectionMixin(Carousel) {}
   *     customElements.define('carousel-with-arrows', CarouselWithArrows);
   *
   * By default, the arrow buttons are shown on devices with a mouse or mouse-like
   * pointing device. They are not shown on a touch-capable device unless mouse
   * movement is detected. To cause the buttons to always appear, apply the
   * 'showArrows' CSS class.
   */
  var ArrowSelection = function (_base) {
    _inherits(ArrowSelection, _base);

    function ArrowSelection() {
      _classCallCheck(this, ArrowSelection);

      var _this = _possibleConstructorReturn(this, (ArrowSelection.__proto__ || Object.getPrototypeOf(ArrowSelection)).call(this));

      _this.$.buttonLeft.addEventListener('click', function (event) {
        _this.selectPrevious();
        event.stopPropagation();
      });
      _this.$.buttonRight.addEventListener('click', function (event) {
        _this.selectNext();
        event.stopPropagation();
      });
      assumeButtonFocus(_this, _this.$.buttonLeft);
      assumeButtonFocus(_this, _this.$.buttonRight);
      return _this;
    }

    _createClass(ArrowSelection, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        if (_get(ArrowSelection.prototype.__proto__ || Object.getPrototypeOf(ArrowSelection.prototype), 'connectedCallback', this)) {
          _get(ArrowSelection.prototype.__proto__ || Object.getPrototypeOf(ArrowSelection.prototype), 'connectedCallback', this).call(this);
        }

        if (!this.classList.contains('showArrows')) {
          // Determine whether we should show arrow buttons or not.
          if (deviceSupportsTouch()) {
            // A touch device might also support a mouse, but we can't know whether
            // there's actually a mouse until we hear from it.
            listenForMouse(this);
          } else {
            // The device doesn't support touch, so assume it has a mouse.
            showArrows(this);
          }
        }
      }
    }, {
      key: 'canSelectNext',
      get: function get() {
        return _get(ArrowSelection.prototype.__proto__ || Object.getPrototypeOf(ArrowSelection.prototype), 'canSelectNext', this);
      },
      set: function set(canSelectNext) {
        if ('canSelectNext' in base.prototype) {
          _set(ArrowSelection.prototype.__proto__ || Object.getPrototypeOf(ArrowSelection.prototype), 'canSelectNext', canSelectNext, this);
        }
        this.$.buttonRight.disabled = !canSelectNext;
      }
    }, {
      key: 'canSelectPrevious',
      get: function get() {
        return _get(ArrowSelection.prototype.__proto__ || Object.getPrototypeOf(ArrowSelection.prototype), 'canSelectPrevious', this);
      },
      set: function set(canSelectPrevious) {
        if ('canSelectPrevious' in base.prototype) {
          _set(ArrowSelection.prototype.__proto__ || Object.getPrototypeOf(ArrowSelection.prototype), 'canSelectPrevious', canSelectPrevious, this);
        }
        this.$.buttonLeft.disabled = !canSelectPrevious;
      }
    }, {
      key: _symbols2.default.defaults,
      get: function get() {
        var defaults = _get(ArrowSelection.prototype.__proto__ || Object.getPrototypeOf(ArrowSelection.prototype), _symbols2.default.defaults, this) || {};
        defaults.navigationAxis = 'horizontal';
        return defaults;
      }

      /*
       * The template uses the chevron-left and chevron-right SVG icons from
       * https://github.com/PolymerElements/iron-icons/blob/master/iron-icons.html.
       */

    }, {
      key: _symbols2.default.template,
      get: function get() {
        var baseTemplate = _get(ArrowSelection.prototype.__proto__ || Object.getPrototypeOf(ArrowSelection.prototype), _symbols2.default.template, this) || '';
        return '\n        <style>\n        :host {\n          -webkit-align-items: stretch;\n          align-items: stretch;\n          display: -webkit-flex;\n          display: flex;\n          -webkit-flex: 1;\n          flex: 1;\n          -webkit-justify-content: center;\n          justify-content: center;\n        }\n\n        #arrowNavigationContainer {\n          display: -webkit-flex;\n          display: flex;\n          -webkit-flex: 1;\n          flex: 1;\n          position: relative;\n        }\n\n        .navigationButton {\n          background: transparent;\n          border: 1px solid transparent;\n          box-sizing: border-box;\n          color: rgba(0, 0, 0, 0.7);\n          fill: currentColor;\n          margin: 0;\n          opacity: 1;\n          outline: none; /* REVIEW: Accessibility should be provided by other elements. */\n          padding: 0;\n          transition: opacity 1s;\n          z-index: 1;\n        }\n\n        .navigationButton:hover:not(:disabled) {\n          background: rgba(0, 0, 0, 0.5);\n          color: rgba(0, 0, 0, 0.8);\n          cursor: pointer;\n        }\n        .navigationButton:active:not(:disabled) {\n          background: rgba(0, 0, 0, 0.7);\n          color: rgba(0, 0, 0, 0.9);\n        }\n        .navigationButton:disabled {\n          color: rgba(0, 0, 0, 0.2);\n        }\n\n        :host(:not(.showArrows)) .navigationButton {\n          opacity: 0;\n          visibility: hidden;\n        }\n\n        .navigationButton .icon {\n          height: 48px;\n          width: 48px;\n        }\n\n        /* Overlay variant */\n        :host(.overlayArrows) {\n          position: relative;\n        }\n        :host(.overlayArrows) .navigationButton {\n          bottom: 0;\n          color: rgba(255, 255, 255, 0.7);\n          position: absolute;\n          top: 0;\n        }\n        :host(.overlayArrows) #buttonLeft {\n          left: 0;\n        }\n        :host(.overlayArrows) #buttonRight {\n          right: 0;\n        }\n        :host(.overlayArrows) .navigationButton:hover:not(:disabled) {\n          background: rgba(255, 255, 255, 0.2);\n          color: rgba(255, 255, 255, 0.8);\n        }\n        :host(.overlayArrows) .navigationButton:active:not(:disabled) {\n          background: rgba(255, 255, 255, 0.4);\n          color: rgba(255, 255, 255, 0.9);\n        }\n        :host(.overlayArrows) .navigationButton:disabled {\n          color: rgba(255, 255, 255, 0.3);\n        }\n        </style>\n\n        <!--\n        Accessibility note: since the navigation offered by the arrow buttons should\n        be redundant (that is, there should be other ways of navigating the list),\n        we mark the button as aria-hidden so that assistive devices ignore them.\n        -->\n        <button id="buttonLeft" class="navigationButton" disabled tabindex="-1" aria-hidden="true">\n          <svg class="icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">\n            <g id="chevron-left">\n              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>\n            </g>\n          </svg>\n        </button>\n        <div id="arrowNavigationContainer" role="none">\n          ' + baseTemplate + '\n        </div>\n        <button id="buttonRight" class="navigationButton" disabled tabindex="-1" aria-hidden="true">\n          <svg class="icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">\n            <g id="chevron-right">\n              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>\n            </g>\n          </svg>\n        </button>\n      ';
      }
    }]);

    return ArrowSelection;
  }(base);

  return ArrowSelection;
};

/*
 * By default, a button will always take focus on mousedown. For this component,
 * we want to override that behavior, such that a mousedown on a button keeps
 * the focus on the outer component.
 */


function assumeButtonFocus(element, button) {
  button.addEventListener('mousedown', function (event) {
    // Given the main element the focus if it doesn't already have it.
    element.focus();
    // Prevent the default focus-on-mousedown behavior.
    event.preventDefault();
  });
}

function deviceSupportsTouch() {
  return 'ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch;
}

// We try to detect the presence of a mouse by listening for mousemove events
// which are *not* the result of a mousedown. On a touch device, a tap on the
// page will generate a fake mousemove, followed by a mousedown. We don't want
// to respond to those fake mousemove events. To discriminate between fake and
// real mousemove events, when we get a mousemove event, we wait for a bit to
// see if the same location is reported as the location of a subsequent
// mousedown.
function listenForMouse(element) {

  element[mousedownListenerSymbol] = function (event) {
    if (element[mouseTimeoutSymbol]) {
      clearTimeout(element[mouseTimeoutSymbol]);
    }
    element[lastMouseXSymbol] = event.pageX;
    element[lastMouseYSymbol] = event.pageY;
  };
  window.addEventListener('mousedown', element[mousedownListenerSymbol]);

  element[mousemoveListenerSymbol] = function (event) {
    // Postpone checking the mousemove location to give the mousedown event a
    // chance to fire. The 250 ms delay is just guesswork; a shorter delay
    // doesn't seem to work.
    element[mouseTimeoutSymbol] = setTimeout(function () {
      if (element[lastMouseXSymbol] != null && event.pageX !== element[lastMouseXSymbol] || element[lastMouseYSymbol] != null && event.pageY !== element[lastMouseYSymbol]) {
        // mousemove event was at a location other than the last mousedown,
        // and hence most likely a real mousemove event.
        mouseDetected(element);
      } else {
        element[lastMouseXSymbol] = event.pageX;
        element[lastMouseYSymbol] = event.pageY;
      }
    }, 250);
  };
  window.addEventListener('mousemove', element[mousemoveListenerSymbol]);
}

function mouseDetected(element) {
  showArrows(element);

  // We can stop listening for mouse events now.
  if (element[mouseTimeoutSymbol]) {
    clearTimeout(element[mouseTimeoutSymbol]);
  }
  window.removeEventListener('mousedown', element[mousedownListenerSymbol]);
  window.removeEventListener('mousemove', element[mousemoveListenerSymbol]);
  element[mousedownListenerSymbol] = null;
  element[mousemoveListenerSymbol] = null;
}

function showArrows(element) {
  element.classList.add('showArrows');
}

},{"../../basic-component-mixins/src/createSymbol":38,"../../basic-component-mixins/src/symbols":42}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _safeAttributes = require('./safeAttributes');

var _safeAttributes2 = _interopRequireDefault(_safeAttributes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Memoized maps of attribute to property names and vice versa.
var attributeToPropertyNames = {};
var propertyNamesToAttributes = {};

/* Exported function extends a base class with AttributeMarshalling. */

exports.default = function (base) {

  /**
   * Mixin which marshalls attributes to properties and vice versa.
   *
   * If your component exposes a setter for a property, it's generally a good
   * idea to let devs using your component be able to set that property in HTML
   * via an element attribute. You can code that yourself by writing an
   * `attributeChangedCallback`, or you can use this mixin to get a degree of
   * automatic support.
   *
   * This mixin implements an `attributeChangedCallback` that will attempt to
   * convert a change in an element attribute into a call to the corresponding
   * property setter. Attributes typically follow hyphenated names ("foo-bar"),
   * whereas properties typically use camelCase names ("fooBar"). This mixin
   * respects that convention, automatically mapping the hyphenated attribute
   * name to the corresponding camelCase property name.
   *
   * Example: You define a component using this mixin:
   *
   *     class MyElement extends AttributeMarshallingMixin(HTMLElement) {
   *       get fooBar() { return this._fooBar; }
   *       set fooBar(value) { this._fooBar = value; }
   *     }
   *     customElements.define('my-element', MyElement);
   *
   * If someone then instantiates your component in HTML:
   *
   *     <my-element foo-bar="Hello"></my-element>
   *
   * Then, after the element has been upgraded, the `fooBar` setter will
   * automatically be invoked with the initial value "Hello".
   *
   * For the time being, this mixin only supports string-valued properties.
   * If you'd like to convert string attributes to other types (numbers,
   * booleans), you need to implement `attributeChangedCallback` yourself.
   */
  var AttributeMarshalling = function (_base) {
    _inherits(AttributeMarshalling, _base);

    function AttributeMarshalling() {
      _classCallCheck(this, AttributeMarshalling);

      return _possibleConstructorReturn(this, (AttributeMarshalling.__proto__ || Object.getPrototypeOf(AttributeMarshalling)).apply(this, arguments));
    }

    _createClass(AttributeMarshalling, [{
      key: 'attributeChangedCallback',


      /*
       * Handle a change to the attribute with the given name.
       */
      value: function attributeChangedCallback(attributeName, oldValue, newValue) {
        if (_get(AttributeMarshalling.prototype.__proto__ || Object.getPrototypeOf(AttributeMarshalling.prototype), 'attributeChangedCallback', this)) {
          _get(AttributeMarshalling.prototype.__proto__ || Object.getPrototypeOf(AttributeMarshalling.prototype), 'attributeChangedCallback', this).call(this);
        }
        var propertyName = attributeToPropertyName(attributeName);
        // If the attribute name corresponds to a property name, set the property.
        // Ignore standard HTMLElement properties handled by the DOM.
        if (propertyName in this && !(propertyName in HTMLElement.prototype)) {
          this[propertyName] = newValue;
        }
      }
    }, {
      key: 'connectedCallback',
      value: function connectedCallback() {
        if (_get(AttributeMarshalling.prototype.__proto__ || Object.getPrototypeOf(AttributeMarshalling.prototype), 'connectedCallback', this)) {
          _get(AttributeMarshalling.prototype.__proto__ || Object.getPrototypeOf(AttributeMarshalling.prototype), 'connectedCallback', this).call(this);
        }
        _safeAttributes2.default.connected(this);
      }
    }, {
      key: 'reflectAttribute',


      /**
       * Set/unset the attribute with the indicated name.
       *
       * This method exists primarily to handle the case where an element wants to
       * set a default property value that should be reflected as an attribute. An
       * important limitation of custom element consturctors is that they cannot
       * set attributes. A call to `reflectAttribute` during the constructor will
       * be deferred until the element is connected to the document.
       *
       * @param {string} attribute - The name of the *attribute* (not property) to set.
       * @param {object} value - The value to set. If null, the attribute will be removed.
       */
      value: function reflectAttribute(attribute, value) {
        return _safeAttributes2.default.setAttribute(this, attribute, value);
      }

      /**
       * Set/unset the class with the indicated name.
       *
       * This method exists primarily to handle the case where an element wants to
       * set a default property value that should be reflected as as class. An
       * important limitation of custom element consturctors is that they cannot
       * set attributes, including the `class` attribute. A call to
       * `reflectClass` during the constructor will be deferred until the element
       * is connected to the document.
       *
       * @param {string} className - The name of the class to set.
       * @param {object} value - True to set the class, false to remove it.
       */

    }, {
      key: 'reflectClass',
      value: function reflectClass(className, value) {
        return _safeAttributes2.default.toggleClass(this, className, value);
      }
    }], [{
      key: 'observedAttributes',
      get: function get() {
        return attributesForClass(this);
      }
    }]);

    return AttributeMarshalling;
  }(base);

  return AttributeMarshalling;
};

// Convert hyphenated foo-bar attribute name to camel case fooBar property name.


function attributeToPropertyName(attributeName) {
  var propertyName = attributeToPropertyNames[attributeName];
  if (!propertyName) {
    // Convert and memoize.
    var hypenRegEx = /-([a-z])/g;
    propertyName = attributeName.replace(hypenRegEx, function (match) {
      return match[1].toUpperCase();
    });
    attributeToPropertyNames[attributeName] = propertyName;
  }
  return propertyName;
}

function attributesForClass(classFn) {

  // We treat the element base classes as if they have no attributes, since we
  // don't want to receive attributeChangedCallback for them.
  if (classFn === HTMLElement || classFn === Object) {
    return [];
  }

  // Get attributes for parent class.
  var baseClass = Object.getPrototypeOf(classFn.prototype).constructor;
  var baseAttributes = attributesForClass(baseClass);

  // Get attributes for this class.
  var propertyNames = Object.getOwnPropertyNames(classFn.prototype);
  var setterNames = propertyNames.filter(function (propertyName) {
    return typeof Object.getOwnPropertyDescriptor(classFn.prototype, propertyName).set === 'function';
  });
  var attributes = setterNames.map(function (setterName) {
    return propertyNameToAttribute(setterName);
  });

  // Merge.
  var diff = attributes.filter(function (attribute) {
    return baseAttributes.indexOf(attribute) < 0;
  });
  return baseAttributes.concat(diff);
}

// Convert a camel case fooBar property name to a hyphenated foo-bar attribute.
function propertyNameToAttribute(propertyName) {
  var attribute = propertyNamesToAttributes[propertyName];
  if (!attribute) {
    // Convert and memoize.
    var uppercaseRegEx = /([A-Z])/g;
    attribute = propertyName.replace(uppercaseRegEx, '-$1').toLowerCase();
  }
  return attribute;
}

},{"./safeAttributes":41}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Exported function extends a base class with ClickSelection. */
exports.default = function (base) {

  /**
   * Mixin which maps a click (actually, a mousedown) to a selection.
   *
   * This simple mixin is useful in list box-like elements, where a click on a
   * list item implicitly selects it.
   *
   * This mixin expects the component to provide an `items` property. You can
   * provide that property yourself, or use
   * [ContentItemsMixin](ContentItemsMixin.md). This mixin also expects the
   * component to define a `selectedIndex` property. You can provide that
   * yourself, or use [SingleSelectionMixin](SingleSelectionMixin.md).
   */
  var ClickSelection = function (_base) {
    _inherits(ClickSelection, _base);

    function ClickSelection() {
      _classCallCheck(this, ClickSelection);

      /*
       * REVIEW: Which event should we listen to here?
       *
       * The standard use for this mixin is in list boxes. List boxes don't
       * appear to be consistent with regard to whether they select on mousedown
       * or click/mouseup.
       */
      var _this = _possibleConstructorReturn(this, (ClickSelection.__proto__ || Object.getPrototypeOf(ClickSelection)).call(this));

      _this.addEventListener('mousedown', function (event) {
        // HACK: If the item is a button, the event seems to be raised in
        // phase 2 (AT_TARGET), but the target is the component, not item.
        // Need to invesigate.
        var target = event.target === _this ? event.path[0] : event.target;
        var index = indexOfContainingItem(_this, target);
        if (index >= 0) {
          _this.selectedIndex = index;
          // Note: We don't call preventDefault here. The default behavior for
          // mousedown includes setting keyboard focus if the element doesn't
          // already have the focus, and we want to preserve that behavior.
          event.stopPropagation();
        }
      });
      return _this;
    }

    // Default implementation. This will typically be handled by other mixins.


    _createClass(ClickSelection, [{
      key: 'selectedIndex',
      get: function get() {
        return _get(ClickSelection.prototype.__proto__ || Object.getPrototypeOf(ClickSelection.prototype), 'selectedIndex', this);
      },
      set: function set(index) {
        if ('selectedIndex' in base.prototype) {
          _set(ClickSelection.prototype.__proto__ || Object.getPrototypeOf(ClickSelection.prototype), 'selectedIndex', index, this);
        }
      }
    }]);

    return ClickSelection;
  }(base);

  return ClickSelection;
};

/*
 * Return index of the element items that either is or contains the indicated
 * target. Return -1 if not found.
 */


function indexOfContainingItem(element, target) {
  var items = element.items;
  var itemCount = items ? items.length : 0;
  for (var i = 0; i < itemCount; i++) {
    var item = items[i];
    if (item === target || item.contains(target)) {
      return i;
    }
  }
  return -1;
}

},{}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Exported function extends a base class with Composable. */
exports.default = function (base) {

  /**
   * Mixin to make a class more easily composable with other mixins.
   *
   * This mixin contributes a `compose` method that applies a set of mixin
   * functions and returns the resulting new class. This sugar can make the
   * application of many mixins at once easier to read.
   */
  var Composable = function (_base) {
    _inherits(Composable, _base);

    function Composable() {
      _classCallCheck(this, Composable);

      return _possibleConstructorReturn(this, (Composable.__proto__ || Object.getPrototypeOf(Composable)).apply(this, arguments));
    }

    _createClass(Composable, null, [{
      key: 'compose',


      /**
       * Apply a set of mixin functions or mixin objects to the present class and
       * return the new class.
       *
       * Instead of writing:
       *
       *     let MyClass = Mixin1(Mixin2(Mixin3(Mixin4(Mixin5(BaseClass)))));
       *
       * You can write:
       *
       *     let MyClass = ComposableMixin(BaseClass).compose(
       *       Mixin1,
       *       Mixin2,
       *       Mixin3,
       *       Mixin4,
       *       Mixin5
       *     );
       *
       * This function can also take mixin objects. A mixin object is just a
       * shorthand for a mixin function that creates a new subclass with the given
       * members. The mixin object's members are *not* copied directly onto the
       * prototype of the base class, as with traditional mixins.
       *
       * In addition to providing syntactic sugar, this mixin can be used to
       * define a class in ES5, which lacks ES6's `class` keyword.
       *
       * @param {...mixins} mixins - A set of mixin functions or objects to apply.
       */
      value: function compose() {
        for (var _len = arguments.length, mixins = Array(_len), _key = 0; _key < _len; _key++) {
          mixins[_key] = arguments[_key];
        }

        // We create a new subclass for each mixin in turn. The result becomes
        // the base class extended by any subsequent mixins. It turns out that
        // we can use Array.reduce() to concisely express this, using the current
        // object as the seed for reduce().
        return mixins.reduce(composeClass, this);
      }
    }]);

    return Composable;
  }(base);

  return Composable;
};

// Properties defined by Object that we don't want to mixin.


var NON_MIXABLE_OBJECT_PROPERTIES = ['constructor'];

/*
 * Apply the mixin to the given base class to return a new class.
 * The mixin can either be a function that returns the modified class, or a
 * plain object whose members will be copied to the new class' prototype.
 */
function composeClass(base, mixin) {
  if (typeof mixin === 'function') {
    // Mixin function
    return mixin(base);
  } else {
    // Mixin object
    var Subclass = function (_base2) {
      _inherits(Subclass, _base2);

      function Subclass() {
        _classCallCheck(this, Subclass);

        return _possibleConstructorReturn(this, (Subclass.__proto__ || Object.getPrototypeOf(Subclass)).apply(this, arguments));
      }

      return Subclass;
    }(base);

    copyOwnProperties(mixin, Subclass.prototype, NON_MIXABLE_OBJECT_PROPERTIES);
    return Subclass;
  }
}

/*
 * Copy the given properties/methods to the target.
 * Return the updated target.
 */
function copyOwnProperties(source, target) {
  var ignorePropertyNames = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  Object.getOwnPropertyNames(source).forEach(function (name) {
    if (ignorePropertyNames.indexOf(name) < 0) {
      var descriptor = Object.getOwnPropertyDescriptor(source, name);
      Object.defineProperty(target, name, descriptor);
    }
  });
  return target;
}

},{}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createSymbol = require('./createSymbol');

var _createSymbol2 = _interopRequireDefault(_createSymbol);

var _toggleClass = require('./toggleClass');

var _toggleClass2 = _interopRequireDefault(_toggleClass);

var _symbols = require('./symbols');

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Symbols for private data members on an element.
var itemsSymbol = (0, _createSymbol2.default)('items');
var itemInitializedSymbol = (0, _createSymbol2.default)('itemInitialized');

/* Exported function extends a base class with ContentItems. */

exports.default = function (base) {

  /**
   * Mixin which maps content semantics (elements) to list item semantics.
   *
   * Items differ from element contents in several ways:
   *
   * * They are often referenced via index.
   * * They may have a selection state.
   * * It's common to do work to initialize the appearance or state of a new
   *   item.
   * * Auxiliary invisible child elements are filtered out and not counted as
   *   items. Auxiliary elements include link, script, style, and template
   *   elements. This filtering ensures that those auxiliary elements can be
   *   used in markup inside of a list without being treated as list items.
   *
   * This mixin expects a component to provide a `content` property returning a
   * raw set of elements. You can provide that yourself, or use
   * [DistributedChildrenContentMixin](DistributedChildrenContentMixin.md).
   *
   * The most commonly referenced property defined by this mixin is the `items`
   * property. To avoid having to do work each time that property is requested,
   * this mixin supports an optimized mode. If you invoke the `contentChanged`
   * method when the set of items changes, the mixin concludes that you'll take
   * care of notifying it of future changes, and turns on the optimization. With
   * that on, the mixin saves a reference to the computed set of items, and will
   * return that immediately on subsequent calls to the `items` property. If you
   * use this mixin in conjunction with
   * [DistributedChildrenContentMixin](DistributedChildrenContentMixin.md), the
   * `contentChanged` method will be invoked for you when the element's children
   * change, turning on the optimization automatically.
   */
  var ContentItems = function (_base) {
    _inherits(ContentItems, _base);

    function ContentItems() {
      _classCallCheck(this, ContentItems);

      return _possibleConstructorReturn(this, (ContentItems.__proto__ || Object.getPrototypeOf(ContentItems)).apply(this, arguments));
    }

    _createClass(ContentItems, [{
      key: 'contentChanged',
      value: function contentChanged() {
        if (_get(ContentItems.prototype.__proto__ || Object.getPrototypeOf(ContentItems.prototype), 'contentChanged', this)) {
          _get(ContentItems.prototype.__proto__ || Object.getPrototypeOf(ContentItems.prototype), 'contentChanged', this).call(this);
        }

        // Since we got the contentChanged call, we'll assume we'll be notified if
        // the set of items changes later. We turn on memoization of the items
        // property by setting our internal property to null (instead of
        // undefined).
        this[itemsSymbol] = null;

        this[_symbols2.default.itemsChanged]();
      }

      /**
       * This method is invoked whenever a new item is added to the list.
       *
       * The default implementation of this method does nothing. You can override
       * this to perform per-item initialization.
       *
       * @param {HTMLElement} item - The item that was added.
       */

    }, {
      key: _symbols2.default.itemAdded,
      value: function value(item) {
        if (_get(ContentItems.prototype.__proto__ || Object.getPrototypeOf(ContentItems.prototype), _symbols2.default.itemAdded, this)) {
          _get(ContentItems.prototype.__proto__ || Object.getPrototypeOf(ContentItems.prototype), _symbols2.default.itemAdded, this).call(this, item);
        }
      }

      /**
       * The selection state for a single item has changed.
       *
       * Invoke this method to signal that the selected state of the indicated item
       * has changed. By default, this applies a `selected` CSS class if the item
       * is selected, and removed it if not selected.
       *
       * @param {HTMLElement} item - The item whose selection state has changed.
       * @param {boolean} selected - True if the item is selected, false if not.
       */

    }, {
      key: _symbols2.default.itemSelected,
      value: function value(item, selected) {
        if (_get(ContentItems.prototype.__proto__ || Object.getPrototypeOf(ContentItems.prototype), _symbols2.default.itemSelected, this)) {
          _get(ContentItems.prototype.__proto__ || Object.getPrototypeOf(ContentItems.prototype), _symbols2.default.itemSelected, this).call(this, item, selected);
        }
        (0, _toggleClass2.default)(item, 'selected', selected);
      }

      /**
       * The current set of items in the list. See the top-level documentation for
       * mixin for a description of how items differ from plain content.
       *
       * @type {HTMLElement[]}
       */

    }, {
      key: _symbols2.default.itemsChanged,


      /**
       * This method is invoked when the underlying contents change. It is also
       * invoked on component initialization – since the items have "changed" from
       * being nothing.
       */
      value: function value() {
        var _this2 = this;

        if (_get(ContentItems.prototype.__proto__ || Object.getPrototypeOf(ContentItems.prototype), _symbols2.default.itemsChanged, this)) {
          _get(ContentItems.prototype.__proto__ || Object.getPrototypeOf(ContentItems.prototype), _symbols2.default.itemsChanged, this).call(this);
        }

        // Perform per-item initialization.
        Array.prototype.forEach.call(this.items, function (item) {
          if (!item[itemInitializedSymbol]) {
            _this2[_symbols2.default.itemAdded](item);
            item[itemInitializedSymbol] = true;
          }
        });

        this.dispatchEvent(new CustomEvent('items-changed'));
      }

      /**
       * Fires when the items in the list change.
       *
       * @memberof ContentItems
       * @event items-changed
       */

    }, {
      key: 'items',
      get: function get() {
        var items = void 0;
        if (this[itemsSymbol] == null) {
          items = filterAuxiliaryElements(this.content);
          // Note: test for *equality* with null; don't treat undefined as a match.
          if (this[itemsSymbol] === null) {
            // Memoize the set of items.
            this[itemsSymbol] = items;
          }
        } else {
          // Return the memoized items.
          items = this[itemsSymbol];
        }
        return items;
      }
    }]);

    return ContentItems;
  }(base);

  return ContentItems;
};

// Return the given elements, filtering out auxiliary elements that aren't
// typically visible. Items which are not elements are returned as is.


function filterAuxiliaryElements(items) {
  var auxiliaryTags = ['link', 'script', 'style', 'template'];
  return [].filter.call(items, function (item) {
    return !item.localName || auxiliaryTags.indexOf(item.localName) < 0;
  });
}

},{"./createSymbol":38,"./symbols":42,"./toggleClass":43}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _symbols = require('./symbols');

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Exported function extends a base class with DirectionSelection. */
exports.default = function (base) {

  /**
   * Mixin which maps direction semantics (goLeft, goRight, etc.) to selection
   * semantics (selectPrevious, selectNext, etc.).
   *
   * This mixin can be used in conjunction with
   * [KeyboardDirectionMixin](KeyboardDirectionMixin.md) (which maps keyboard
   * events to directions) and a mixin that handles selection like
   * [SingleSelectionMixin](SingleSelectionMixin.md).
   */
  var DirectionSelection = function (_base) {
    _inherits(DirectionSelection, _base);

    function DirectionSelection() {
      _classCallCheck(this, DirectionSelection);

      return _possibleConstructorReturn(this, (DirectionSelection.__proto__ || Object.getPrototypeOf(DirectionSelection)).apply(this, arguments));
    }

    _createClass(DirectionSelection, [{
      key: _symbols2.default.goDown,
      value: function value() {
        if (_get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), _symbols2.default.goDown, this)) {
          _get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), _symbols2.default.goDown, this).call(this);
        }
        return this.selectNext();
      }
    }, {
      key: _symbols2.default.goEnd,
      value: function value() {
        if (_get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), _symbols2.default.goEnd, this)) {
          _get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), _symbols2.default.goEnd, this).call(this);
        }
        return this.selectLast();
      }
    }, {
      key: _symbols2.default.goLeft,
      value: function value() {
        if (_get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), _symbols2.default.goLeft, this)) {
          _get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), _symbols2.default.goLeft, this).call(this);
        }
        return this.selectPrevious();
      }
    }, {
      key: _symbols2.default.goRight,
      value: function value() {
        if (_get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), _symbols2.default.goRight, this)) {
          _get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), _symbols2.default.goRight, this).call(this);
        }
        return this.selectNext();
      }
    }, {
      key: _symbols2.default.goStart,
      value: function value() {
        if (_get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), _symbols2.default.goStart, this)) {
          _get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), _symbols2.default.goStart, this).call(this);
        }
        return this.selectFirst();
      }
    }, {
      key: _symbols2.default.goUp,
      value: function value() {
        if (_get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), _symbols2.default.goUp, this)) {
          _get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), _symbols2.default.goUp, this).call(this);
        }
        return this.selectPrevious();
      }

      // Default implementation. This will typically be handled by other mixins.

    }, {
      key: 'selectFirst',


      // Default implementation. This will typically be handled by other mixins.
      value: function selectFirst() {
        if (_get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), 'selectFirst', this)) {
          return _get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), 'selectFirst', this).call(this);
        }
      }

      // Default implementation. This will typically be handled by other mixins.

    }, {
      key: 'selectLast',
      value: function selectLast() {
        if (_get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), 'selectLast', this)) {
          return _get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), 'selectLast', this).call(this);
        }
      }

      // Default implementation. This will typically be handled by other mixins.

    }, {
      key: 'selectNext',
      value: function selectNext() {
        if (_get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), 'selectNext', this)) {
          return _get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), 'selectNext', this).call(this);
        }
      }

      // Default implementation. This will typically be handled by other mixins.

    }, {
      key: 'selectPrevious',
      value: function selectPrevious() {
        if (_get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), 'selectPrevious', this)) {
          return _get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), 'selectPrevious', this).call(this);
        }
      }

      // Map drag travel fraction to selection fraction.

    }, {
      key: 'selectedFraction',
      get: function get() {
        return _get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), 'selectedFraction', this);
      },
      set: function set(value) {
        if ('selectedFraction' in base.prototype) {
          _set(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), 'selectedFraction', value, this);
        }
      }
    }, {
      key: 'travelFraction',
      get: function get() {
        return _get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), 'travelFraction', this);
      },
      set: function set(value) {
        if ('travelFraction' in base.prototype) {
          _set(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), 'travelFraction', value, this);
        }
        this.selectedFraction = value;
      }
    }]);

    return DirectionSelection;
  }(base);

  return DirectionSelection;
};

},{"./symbols":42}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _microtask = require('./microtask');

var _microtask2 = _interopRequireDefault(_microtask);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Exported function extends a base class with DistributedChildrenContent. */
exports.default = function (base) {

  /**
   * Mixin which defines a component's content as its children, expanding any
   * nodes distributed to the component's slots.
   *
   * This also provides notification of changes to a component's content. It
   * will invoke a `contentChanged` method when the component is first
   * instantiated, and whenever its distributed children change. This is an
   * easy way to satisfy the Gold Standard checklist item for monitoring
   * [Content Changes](https://github.com/webcomponents/gold-standard/wiki/Content-Changes).
   *
   * Example:
   *
   * ```
   * let base = DistributedChildrenContentMixin(DistributedChildrenMixin(HTMLElement));
   * class CountingElement extends base {
   *
   *   constructor() {
   *     super();
   *     let root = this.attachShadow({ mode: 'open' });
   *     root.innerHTML = `<slot></slot>`;
   *   }
   *
   *   contentChanged() {
   *     // Count the component's children, both initially and when changed.
   *     this.count = this.distributedChildren.length;
   *   }
   *
   * }
   * ```
   *
   * Note that content change detection depends upon the element having at least
   * one `slot` element in its shadow subtree.
   *
   * This mixin is intended for use with the
   * [DistributedChildrenMixin](DistributedChildrenMixin.md). See that mixin for
   * a discussion of how that works. This DistributedChildrenContentMixin
   * provides an easy way of defining the "content" of a component as the
   * component's distributed children. That in turn lets mixins like
   * [ContentItemsMixin](ContentItemsMixin.md) manipulate the children as list
   * items.
   */
  var DistributedChildrenContent = function (_base) {
    _inherits(DistributedChildrenContent, _base);

    function DistributedChildrenContent() {
      _classCallCheck(this, DistributedChildrenContent);

      var _this = _possibleConstructorReturn(this, (DistributedChildrenContent.__proto__ || Object.getPrototypeOf(DistributedChildrenContent)).call(this));

      if (_this.shadowRoot) {
        // Listen to changes on all slots.
        var slots = _this.shadowRoot.querySelectorAll('slot');
        slots.forEach(function (slot) {
          return slot.addEventListener('slotchange', function (event) {
            _this.contentChanged();
          });
        });
      }

      // Make an initial call to contentChanged() so that the component can do
      // initialization that it normally does when content changes.
      //
      // This will invoke contentChanged() handlers in other mixins. In order
      // that those mixins have a chance to complete their own initialization,
      // we add the contentChanged() call to the microtask queue.
      (0, _microtask2.default)(function () {
        return _this.contentChanged();
      });
      return _this;
    }

    /**
     * Invoked when the contents of the component (including distributed
     * children) have changed.
     *
     * This method is also invoked when a component is first instantiated; the
     * contents have essentially "changed" from being nothing. This allows the
     * component to perform initial processing of its children.
     */


    _createClass(DistributedChildrenContent, [{
      key: 'contentChanged',
      value: function contentChanged() {
        if (_get(DistributedChildrenContent.prototype.__proto__ || Object.getPrototypeOf(DistributedChildrenContent.prototype), 'contentChanged', this)) {
          _get(DistributedChildrenContent.prototype.__proto__ || Object.getPrototypeOf(DistributedChildrenContent.prototype), 'contentChanged', this).call(this);
        }
        var event = new CustomEvent('content-changed');
        this.dispatchEvent(event);
      }

      /**
       * The content of this component, defined to be the flattened array of
       * children distributed to the component.
       *
       * @type {HTMLElement[]}
       */

    }, {
      key: 'content',
      get: function get() {
        var distributedChildren = this.distributedChildren;
        if (typeof distributedChildren === 'undefined') {
          console.warn('DistributedChildrenContentMixin expects the component to define a "distributedChildren" property.');
        }
        return distributedChildren;
      },
      set: function set(value) {
        if ('content' in base.prototype) {
          _set(DistributedChildrenContent.prototype.__proto__ || Object.getPrototypeOf(DistributedChildrenContent.prototype), 'content', value, this);
        }
        // TODO: Set the children to the given value (which should be an array of
        // elements)?
      }

      /**
       * This event is raised when the component's contents (including distributed
       * children) have changed.
       *
       * @memberof DistributedChildrenContent
       * @event content-changed
       */

    }]);

    return DistributedChildrenContent;
  }(base);

  return DistributedChildrenContent;
};

},{"./microtask":39}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Exported function extends a base class with DistributedChildren. */
exports.default = function (base) {

  /**
   * Mixin which defines helpers for accessing a component's distributed
   * children as a flattened array or string.
   *
   * The standard DOM API provides several ways of accessing child content:
   * `children`, `childNodes`, and `textContent`. None of these functions are
   * Shadow DOM aware. This mixin defines variations of those functions that
   * *are* Shadow DOM aware.
   *
   * Example: you create a component `<count-children>` that displays a number
   * equal to the number of children placed inside that component. If someone
   * instantiates your component like:
   *
   *     <count-children>
   *       <div></div>
   *       <div></div>
   *       <div></div>
   *     </count-children>
   *
   * Then the component should show "3", because there are three children. To
   * calculate the number of children, the component can just calculate
   * `this.children.length`. However, suppose someone instantiates your
   * component inside one of their own components, and puts a `<slot>` element
   * inside your component:
   *
   *     <count-children>
   *       <slot></slot>
   *     </count-children>
   *
   * If your component only looks at `this.children`, it will always see exactly
   * one child — the `<slot>` element. But the user looking at the page will
   * *see* any nodes distributed to that slot. To match what the user sees, your
   * component should expand any `<slot>` elements it contains.
   *
   * That is the problem this mixin solves. After applying this mixin, your
   * component code has access to `this.distributedChildren`, whose `length`
   * will return the total number of all children distributed to your component
   * in the composed tree.
   *
   * Note: The latest Custom Elements API design calls for a new function,
   * `getAssignedNodes` that takes an optional `deep` parameter, that will solve
   * this problem at the API level.
   */
  var DistributedChildren = function (_base) {
    _inherits(DistributedChildren, _base);

    function DistributedChildren() {
      _classCallCheck(this, DistributedChildren);

      return _possibleConstructorReturn(this, (DistributedChildren.__proto__ || Object.getPrototypeOf(DistributedChildren)).apply(this, arguments));
    }

    _createClass(DistributedChildren, [{
      key: 'distributedChildren',


      /**
       * An in-order collection of distributed children, expanding any slot
       * elements. Like the standard children property, this skips text nodes.
       *
       * @type {HTMLElement[]}
       */
      get: function get() {
        return expandContentElements(this.children, false);
      }

      /**
       * An in-order collection of distributed child nodes, expanding any slot
       * elements. Like the standard childNodes property, this includes text
       * nodes.
       *
       * @type {Node[]}
       */

    }, {
      key: 'distributedChildNodes',
      get: function get() {
        return expandContentElements(this.childNodes, true);
      }

      /**
       * The concatenated text content of all distributed child nodes, expanding
       * any slot elements.
       *
       * @type {string}
       */

    }, {
      key: 'distributedTextContent',
      get: function get() {
        var strings = this.distributedChildNodes.map(function (child) {
          return child.textContent;
        });
        return strings.join('');
      }
    }]);

    return DistributedChildren;
  }(base);

  return DistributedChildren;
};

/*
 * Given a array of nodes, return a new array with any content elements expanded
 * to the nodes distributed to that content element. This rule is applied
 * recursively.
 *
 * If includeTextNodes is true, text nodes will be included, as in the
 * standard childNodes property; by default, this skips text nodes, like the
 * standard children property.
 */


function expandContentElements(nodes, includeTextNodes) {
  var _ref;

  var expanded = Array.prototype.map.call(nodes, function (node) {
    // We want to see if the node is an instanceof HTMLSlotELement, but
    // that class won't exist if the browser that doesn't support native
    // Shadow DOM and if the Shadow DOM polyfill hasn't been loaded. Instead,
    // we do a simplistic check to see if the tag name is "slot".
    var isSlot = typeof HTMLSlotElement !== 'undefined' ? node instanceof HTMLSlotElement : node.localName === 'slot';
    if (isSlot) {
      // Use the nodes assigned to this node instead.
      var assignedNodes = node.assignedNodes({ flatten: true });
      return assignedNodes ? expandContentElements(assignedNodes, includeTextNodes) : [];
    } else if (node instanceof HTMLElement) {
      // Plain element; use as is.
      return [node];
    } else if (node instanceof Text && includeTextNodes) {
      // Text node.
      return [node];
    } else {
      // Comment, processing instruction, etc.; skip.
      return [];
    }
  });
  var flattened = (_ref = []).concat.apply(_ref, _toConsumableArray(expanded));
  return flattened;
}

},{}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

exports.default = mixin;

var _createSymbol = require('./createSymbol');

var _createSymbol2 = _interopRequireDefault(_createSymbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Symbols for private data members on an element.
var selectedFractionSymbol = (0, _createSymbol2.default)('selectedFraction');

/* Exported function extends a base class with FractionalSelection. */
function mixin(base) {

  /**
   * Adds support for fractional selection: treating a selection as a real
   * number that combines an integer portion (an index into a list), and a
   * fraction (indicating how far of the way we are to the next or previous
   * item).
   *
   * This is useful in components that support incremental operations during
   * dragging and swiping. Example: a carousel component has several items, and the
   * currently selected item is item 3. The user begins swiping to the left,
   * moving towards selecting item 4. Halfway through this operation, the
   * fractional selection value is 3.5.
   *
   * This value permits communication between mixins like
   * [SwipeDirectionMixin](./SwipeDirectionMixin.md) and
   * [TrackpadDirectionMixin](./TrackpadDirectionMixin.md), which generate
   * fractional selection values, and mixins like
   * [SelectionAnimationMixin](./SelectionAnimationMixin.md), which can render
   * selection at a fractional value.
   */
  var FractionalSelection = function (_base) {
    _inherits(FractionalSelection, _base);

    function FractionalSelection() {
      _classCallCheck(this, FractionalSelection);

      return _possibleConstructorReturn(this, (FractionalSelection.__proto__ || Object.getPrototypeOf(FractionalSelection)).apply(this, arguments));
    }

    _createClass(FractionalSelection, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        if (_get(FractionalSelection.prototype.__proto__ || Object.getPrototypeOf(FractionalSelection.prototype), 'connectedCallback', this)) {
          _get(FractionalSelection.prototype.__proto__ || Object.getPrototypeOf(FractionalSelection.prototype), 'connectedCallback', this).call(this);
        }
        this.selectedFraction = 0;
      }

      /**
       * A fractional value indicating how far the user has currently advanced to
       * the next/previous item. E.g., a `selectedFraction` of 3.5 indicates the
       * user is halfway between items 3 and 4.
       *
       * @type {number}
       */

    }, {
      key: 'selectedFraction',
      get: function get() {
        return this[selectedFractionSymbol];
      },
      set: function set(value) {
        this[selectedFractionSymbol] = value;
        if ('selectedFraction' in base.prototype) {
          _set(FractionalSelection.prototype.__proto__ || Object.getPrototypeOf(FractionalSelection.prototype), 'selectedFraction', value, this);
        }
        var event = new CustomEvent('selected-fraction-changed');
        this.dispatchEvent(event);
      }
    }]);

    return FractionalSelection;
  }(base);

  return FractionalSelection;
}

mixin.helpers = {

  /*
   * Dampen a selection that goes past the beginning or end of a list. This is
   * generally used to produce a visual effect of tension as the user tries to
   * go further in a direction that has no more items.
   *
   * Example: suppose `itemCount` is 5, indicating a list of 5 items. The index of
   * the last item is 4. If the `selection` parameter is 4.5, the user is trying
   * to go past this last item. When a damping function is applied, the resulting
   * value will be less than 4.5 (the actual value will be 4.25). When this
   * selection state is rendered, the user will see that, each unit distance the
   * drag travels has less and less visible effect. This is perceived as tension.
   *
   * @param {number} selection - A real number indicating a selection position
   * @param {number} itemCount - An integer for the number of items in the list
   * @returns {number} A real number representing the damped selection value.
   */
  dampedSelection: function dampedSelection(selection, itemCount) {
    var bound = itemCount - 1;
    var damped = void 0;
    if (selection < 0) {
      // Trying to go past beginning of list. Apply tension from the left edge.
      damped = -mixin.helpers.damping(-selection);
    } else if (selection >= bound) {
      // Trying to go past end of list. Apply tension from the right edge.
      damped = bound + mixin.helpers.damping(selection - bound);
    } else {
      // No damping required.
      damped = selection;
    }
    return damped;
  },


  /*
   * Calculate damping as a function of the distance past the minimum/maximum
   * values.
   *
   * We want to asymptotically approach an absolute minimum of 1 unit
   * below/above the actual minimum/maximum. This requires calculating a
   * hyperbolic function.
   *
   * See http://www.wolframalpha.com/input/?i=y+%3D+-1%2F%28x%2B1%29+%2B+1
   * for the one we use. The only portion of that function we care about is when
   * x is zero or greater. An important consideration is that the curve be
   * tangent to the diagonal line x=y at (0, 0). This ensures smooth continuity
   * with the normal drag behavior, in which the visible sliding is linear with
   * the distance the touchpoint has been dragged.
   */
  damping: function damping(x) {
    var y = -1 / (x + 1) + 1;
    return y;
  },


  /*
   * Return the current fractional selection value for the given element.
   *
   * This simply adds the element's `selectedIndex` and `selectedFraction`
   * properties.
   *
   * @param {HTMLElement} element - An element that supports selection
   */
  elementSelection: function elementSelection(element) {
    var selectedIndex = element.selectedIndex;
    if (selectedIndex < 0) {
      // No selection
      return;
    }
    var selectedFraction = element.selectedFraction || 0;
    return selectedIndex + selectedFraction;
  },


  /*
   * Breaks a fractional selection into its integer and fractional parts.
   *
   * Example: if passed 3.5, this returns { index: 3, fraction: 5 }.
   *
   * @param {number} selection – A real number representing a selection point
   * @returns {object} - An object with an `index` property holding the
   * selection's integer component, and a `fraction` property holding the
   * selection's fractional component.
   */
  selectionParts: function selectionParts(selection) {
    // Stupid IE doesn't have Math.trunc.
    // const index = Math.trunc(selection);
    var index = selection < 0 ? Math.ceil(selection) : Math.floor(selection);
    var fraction = selection - index;
    return { index: index, fraction: fraction };
  },


  /*
   * Returns a fractional selection point after accounting for wrapping, ensuring
   * that the integer portion of the selection stays between 0 and `itemCount`-1.
   * That is, the integer portion will always be a valid index into the list.
   *
   * Example of wrapping past the end of the list: if `selection` is 5.5 and
   * `itemCount` is 5, this returns 0.5. Example of wrapping past the beginning of
   * the list: if `selection` is 0.5 and `itemCount` is 5, this returns 4.5.
   *
   * @param {number} selection - A real number representing a selection point
   * @param {number} itemCount - The number of items in the list
   * @returns {number} - The result of wrapping the selection point
   */
  wrappedSelection: function wrappedSelection(selection, itemCount) {
    // Handles possibility of negative mod.
    // See http://stackoverflow.com/a/18618250/76472
    return (selection % itemCount + itemCount) % itemCount;
  },


  /*
   * Return the parts of a selection, first wrapping if necessary.
   *
   * @param {number} selection – A real number representing a selection point
   * @param {number} itemCount - The number of items in the list
   * @param {boolean} wrap – True if the selection should wrap to stay within the
   * list
   * @returns {object} – The parts of the selection, using the same format as
   * `selectionParts`.
   */
  wrappedSelectionParts: function wrappedSelectionParts(selection, itemCount, wrap) {
    if (wrap) {
      selection = mixin.helpers.wrappedSelection(selection, itemCount);
    }
    return mixin.helpers.selectionParts(selection);
  }
};

},{"./createSymbol":38}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createSymbol = require('./createSymbol');

var _createSymbol2 = _interopRequireDefault(_createSymbol);

var _safeAttributes = require('./safeAttributes');

var _safeAttributes2 = _interopRequireDefault(_safeAttributes);

var _symbols = require('./symbols');

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Symbols for private data members on an element.
var genericSymbol = (0, _createSymbol2.default)('generic');

/* Exported function extends a base class with Generic. */

exports.default = function (base) {

  /**
   * Mixin which allows a component to support a "generic" style: a minimalist
   * style that can easily be removed to reset its visual appearance to a
   * baseline state.
   *
   * By default, a component should provide a minimal visual presentation that
   * allows the component to function. However, the more styling the component
   * provides by default, the harder it becomes to get the component to fit in
   * in other settings. Each CSS rule has to be overridden. Worse, new CSS rules
   * added to the default style won't be overridden by default, making it hard
   * to know whether a new version of a component will still look okay.
   *
   * As a compromise, the mixin defines a `generic` attribute. This attribute is
   * normally set by default, and styles can be written that apply only when the
   * generic attribute is set. This allows the construction of CSS rules that
   * will only apply to generic components like:
   *
   *     :host([generic=""]) {
   *       ... generic appearance defined here ...
   *     }
   *
   * This makes it easy to remove all default styling — set the `GenericMixin`
   * attribute to false, and all default styling will be removed.
   */
  var Generic = function (_base) {
    _inherits(Generic, _base);

    function Generic() {
      _classCallCheck(this, Generic);

      // Set defaults.
      var _this = _possibleConstructorReturn(this, (Generic.__proto__ || Object.getPrototypeOf(Generic)).call(this));

      if (typeof _this.generic === 'undefined') {
        _this.generic = _this[_symbols2.default.defaults].generic;
      }
      return _this;
    }

    // This mixin doesn't actually respond to attribute changes, but relies
    // on separately-defined behavior (e.g., in AttributeMarshallingMixin) for that.
    // Still, we need define a baseline attributeChangedCallback that does
    // nothing, in case this mixin gets used on its own.


    _createClass(Generic, [{
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(name, oldValue, newValue) {
        if (_get(Generic.prototype.__proto__ || Object.getPrototypeOf(Generic.prototype), 'attributeChangedCallback', this)) {
          _get(Generic.prototype.__proto__ || Object.getPrototypeOf(Generic.prototype), 'attributeChangedCallback', this).call(this, name, oldValue, newValue);
        }
      }
    }, {
      key: 'connectedCallback',
      value: function connectedCallback() {
        if (_get(Generic.prototype.__proto__ || Object.getPrototypeOf(Generic.prototype), 'connectedCallback', this)) {
          _get(Generic.prototype.__proto__ || Object.getPrototypeOf(Generic.prototype), 'connectedCallback', this).call(this);
        }
        _safeAttributes2.default.connected(this);
      }
    }, {
      key: _symbols2.default.defaults,
      get: function get() {
        var defaults = _get(Generic.prototype.__proto__ || Object.getPrototypeOf(Generic.prototype), _symbols2.default.defaults, this) || {};
        defaults.generic = true;
        return defaults;
      }

      /**
       * True if the component would like to receive generic styling.
       *
       * This property is true by default — set it to false to turn off all
       * generic styles. This makes it easier to apply custom styling; you won't
       * have to explicitly override styling you don't want.
       *
       * @type Boolean
       * @default true
       */

    }, {
      key: 'generic',
      get: function get() {
        return this[genericSymbol];
      },
      set: function set(value) {
        var parsed = typeof value === 'string' ? String(value) !== 'false' : value;
        this[genericSymbol] = parsed;

        if ('generic' in base.prototype) {
          _set(Generic.prototype.__proto__ || Object.getPrototypeOf(Generic.prototype), 'generic', value, this);
        }

        // We roll our own attribute setting so that an explicitly false value
        // shows up as GenericMixin="false".
        if (parsed === false) {
          // Explicitly use false string.
          _safeAttributes2.default.setAttribute(this, 'generic', 'false');
        } else if (parsed == null) {
          // Explicitly remove attribute. (Always safe to do this.)
          this.removeAttribute('generic');
        } else {
          // Use the empty string to get attribute to appear with no value.
          _safeAttributes2.default.setAttribute(this, 'generic', '');
        }
      }
    }]);

    return Generic;
  }(base);

  return Generic;
};

},{"./createSymbol":38,"./safeAttributes":41,"./symbols":42}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createSymbol = require('./createSymbol');

var _createSymbol2 = _interopRequireDefault(_createSymbol);

var _symbols = require('./symbols');

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Symbols for private data members on an element.
var navigationAxisSymbol = (0, _createSymbol2.default)('navigationAxis');

/* Exported function extends a base class with KeyboardDirection. */

exports.default = function (base) {

  /**
   * Mixin which maps direction keys (Left, Right, etc.) to direction semantics
   * (go left, go right, etc.).
   *
   * This mixin expects the component to invoke a `keydown` method when a key is
   * pressed. You can use [KeyboardMixin](KeyboardMixin.md) for that
   * purpose, or wire up your own keyboard handling and call `keydown` yourself.
   *
   * This mixin calls methods such as `goLeft` and `goRight`. You can define
   * what that means by implementing those methods yourself. If you want to use
   * direction keys to navigate a selection, use this mixin with
   * [DirectionSelectionMixin](DirectionSelectionMixin.md).
   */
  var KeyboardDirection = function (_base) {
    _inherits(KeyboardDirection, _base);

    function KeyboardDirection() {
      _classCallCheck(this, KeyboardDirection);

      // Set defaults.
      var _this = _possibleConstructorReturn(this, (KeyboardDirection.__proto__ || Object.getPrototypeOf(KeyboardDirection)).call(this));

      if (typeof _this.navigationAxis === 'undefined') {
        _this.navigationAxis = _this[_symbols2.default.defaults].navigationAxis;
      }
      return _this;
    }

    _createClass(KeyboardDirection, [{
      key: _symbols2.default.goDown,


      /**
       * Invoked when the user wants to go/navigate down.
       * The default implementation of this method does nothing.
       */
      value: function value() {
        if (_get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), _symbols2.default.goDown, this)) {
          return _get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), _symbols2.default.goDown, this).call(this);
        }
      }

      /**
       * Invoked when the user wants to go/navigate to the end (e.g., of a list).
       * The default implementation of this method does nothing.
       */

    }, {
      key: _symbols2.default.goEnd,
      value: function value() {
        if (_get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), _symbols2.default.goEnd, this)) {
          return _get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), _symbols2.default.goEnd, this).call(this);
        }
      }

      /**
       * Invoked when the user wants to go/navigate left.
       * The default implementation of this method does nothing.
       */

    }, {
      key: _symbols2.default.goLeft,
      value: function value() {
        if (_get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), _symbols2.default.goLeft, this)) {
          return _get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), _symbols2.default.goLeft, this).call(this);
        }
      }

      /**
       * Invoked when the user wants to go/navigate right.
       * The default implementation of this method does nothing.
       */

    }, {
      key: _symbols2.default.goRight,
      value: function value() {
        if (_get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), _symbols2.default.goRight, this)) {
          return _get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), _symbols2.default.goRight, this).call(this);
        }
      }

      /**
       * Invoked when the user wants to go/navigate to the start (e.g., of a
       * list). The default implementation of this method does nothing.
       */

    }, {
      key: _symbols2.default.goStart,
      value: function value() {
        if (_get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), _symbols2.default.goStart, this)) {
          return _get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), _symbols2.default.goStart, this).call(this);
        }
      }

      /**
       * Invoked when the user wants to go/navigate up.
       * The default implementation of this method does nothing.
       */

    }, {
      key: _symbols2.default.goUp,
      value: function value() {
        if (_get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), _symbols2.default.goUp, this)) {
          return _get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), _symbols2.default.goUp, this).call(this);
        }
      }

      /**
       * Indicates the direction of permitted navigation with the keyboard.
       *
       * Accepted values are "horizontal", "vertical", or "both" (the default).
       * If this property is "horizontal", the Up Arrow and Down Arrow keys will
       * be ignored. Conversely, if this is "vertical", the Left Arrow and Right
       * Arrow keys will be ignored.
       *
       * @type {string}
       */

    }, {
      key: _symbols2.default.keydown,
      value: function value(event) {
        var handled = void 0;

        var axis = this.navigationAxis;
        var horizontal = axis === 'horizontal' || axis === 'both';
        var vertical = axis === 'vertical' || axis === 'both';

        // Ignore Left/Right keys when metaKey or altKey modifier is also pressed,
        // as the user may be trying to navigate back or forward in the browser.
        switch (event.keyCode) {
          case 35:
            // End
            handled = this[_symbols2.default.goEnd]();
            break;
          case 36:
            // Home
            handled = this[_symbols2.default.goStart]();
            break;
          case 37:
            // Left
            if (horizontal && !event.metaKey && !event.altKey) {
              handled = this[_symbols2.default.goLeft]();
            }
            break;
          case 38:
            // Up
            if (vertical) {
              handled = event.altKey ? this[_symbols2.default.goStart]() : this[_symbols2.default.goUp]();
            }
            break;
          case 39:
            // Right
            if (horizontal && !event.metaKey && !event.altKey) {
              handled = this[_symbols2.default.goRight]();
            }
            break;
          case 40:
            // Down
            if (vertical) {
              handled = event.altKey ? this[_symbols2.default.goEnd]() : this[_symbols2.default.goDown]();
            }
            break;
        }
        // Prefer mixin result if it's defined, otherwise use base result.
        return handled || _get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), _symbols2.default.keydown, this) && _get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), _symbols2.default.keydown, this).call(this, event);
      }
    }, {
      key: _symbols2.default.defaults,
      get: function get() {
        var defaults = _get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), _symbols2.default.defaults, this) || {};
        defaults.navigationAxis = 'both';
        return defaults;
      }
    }, {
      key: 'navigationAxis',
      get: function get() {
        return this[navigationAxisSymbol];
      },
      set: function set(value) {
        this[navigationAxisSymbol] = value;
        if ('navigationAxis' in base.prototype) {
          _set(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), 'navigationAxis', value, this);
        }
      }
    }]);

    return KeyboardDirection;
  }(base);

  return KeyboardDirection;
};

},{"./createSymbol":38,"./symbols":42}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _symbols = require('./symbols');

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Exported function extends a base class with Keyboard. */
exports.default = function (base) {

  /**
   * Mixin which manages the keydown handling for a component.
   *
   * This mixin handles several keyboard-related features.
   *
   * First, it wires up a single keydown event handler that can be shared by
   * multiple mixins on a component. The event handler will invoke a `keydown`
   * method with the event object, and any mixin along the prototype chain that
   * wants to handle that method can do so.
   *
   * If a mixin wants to indicate that keyboard event has been handled, and that
   * other mixins should *not* handle it, the mixin's `keydown` handler should
   * return a value of true. The convention that seems to work well is that a
   * mixin should see if it wants to handle the event and, if not, then ask the
   * superclass to see if it wants to handle the event. This has the effect of
   * giving the mixin that was applied last the first chance at handling a
   * keyboard event.
   *
   * Example:
   *
   *     [symbols.keydown](event) {
   *       let handled;
   *       switch (event.keyCode) {
   *         // Handle the keys you want, setting handled = true if appropriate.
   *       }
   *       // Prefer mixin result if it's defined, otherwise use base result.
   *       return handled || (super[symbols.keydown] && super[symbols.keydown](event));
   *     }
   *
   * A second feature provided by this mixin is that it implicitly makes the
   * component a tab stop if it isn't already, by setting `tabIndex` to 0. This
   * has the effect of adding the component to the tab order in document order.
   */
  var Keyboard = function (_base) {
    _inherits(Keyboard, _base);

    function Keyboard() {
      _classCallCheck(this, Keyboard);

      var _this = _possibleConstructorReturn(this, (Keyboard.__proto__ || Object.getPrototypeOf(Keyboard)).call(this));

      _this.addEventListener('keydown', function (event) {
        var handled = _this[_symbols2.default.keydown](event);
        if (handled) {
          event.preventDefault();
          event.stopPropagation();
        }
      });
      return _this;
    }

    _createClass(Keyboard, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        if (_get(Keyboard.prototype.__proto__ || Object.getPrototypeOf(Keyboard.prototype), 'connectedCallback', this)) {
          _get(Keyboard.prototype.__proto__ || Object.getPrototypeOf(Keyboard.prototype), 'connectedCallback', this).call(this);
        }
        if (this.getAttribute('tabindex') == null && this[_symbols2.default.defaults].tabindex !== null) {
          this.setAttribute('tabindex', this[_symbols2.default.defaults].tabindex);
        }
      }
    }, {
      key: _symbols2.default.keydown,


      /**
       * Handle the indicated keyboard event.
       *
       * The default implementation of this method does nothing. This will
       * typically be handled by other mixins.
       *
       * @param {KeyboardEvent} event - the keyboard event
       * @return {boolean} true if the event was handled
       */
      value: function value(event) {
        if (_get(Keyboard.prototype.__proto__ || Object.getPrototypeOf(Keyboard.prototype), _symbols2.default.keydown, this)) {
          return _get(Keyboard.prototype.__proto__ || Object.getPrototypeOf(Keyboard.prototype), _symbols2.default.keydown, this).call(this, event);
        }
      }
    }, {
      key: _symbols2.default.defaults,
      get: function get() {
        var defaults = _get(Keyboard.prototype.__proto__ || Object.getPrototypeOf(Keyboard.prototype), _symbols2.default.defaults, this) || {};
        // The default tab index is 0 (document order).
        defaults.tabindex = 0;
        return defaults;
      }
    }]);

    return Keyboard;
  }(base);

  return Keyboard;
};

},{"./symbols":42}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _symbols = require('./symbols');

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Exported function extends a base class with KeyboardPagedSelection. */
exports.default = function (base) {

  /**
   * Mixin which maps page keys (Page Up, Page Down) into operations that move
   * the selection by one page.
   *
   * The keyboard interaction model generally follows that of Microsoft Windows'
   * list boxes instead of those in OS X:
   *
   * * The Page Up/Down and Home/End keys actually change the selection, rather
   *   than just scrolling. The former behavior seems more generally useful for
   *   keyboard users.
   *
   * * Pressing Page Up/Down will change the selection to the topmost/bottommost
   *   visible item if the selection is not already there. Thereafter, the key
   *   will move the selection up/down by a page, and (per the above point) make
   *   the selected item visible.
   *
   * To ensure the selected item is in view following use of Page Up/Down, use
   * the related [SelectionInViewMixin](SelectionInViewMixin.md).
   *
   * This mixin expects the component to invoke a `keydown` method when a key is
   * pressed. You can use [KeyboardMixin](KeyboardMixin.md) for that
   * purpose, or wire up your own keyboard handling and call `keydown` yourself.
   */
  var KeyboardPagedSelection = function (_base) {
    _inherits(KeyboardPagedSelection, _base);

    function KeyboardPagedSelection() {
      _classCallCheck(this, KeyboardPagedSelection);

      return _possibleConstructorReturn(this, (KeyboardPagedSelection.__proto__ || Object.getPrototypeOf(KeyboardPagedSelection)).apply(this, arguments));
    }

    _createClass(KeyboardPagedSelection, [{
      key: _symbols2.default.keydown,
      value: function value(event) {
        var handled = void 0;
        switch (event.keyCode) {
          case 33:
            // Page Up
            handled = this.pageUp();
            break;
          case 34:
            // Page Down
            handled = this.pageDown();
            break;
        }
        // Prefer mixin result if it's defined, otherwise use base result.
        return handled || _get(KeyboardPagedSelection.prototype.__proto__ || Object.getPrototypeOf(KeyboardPagedSelection.prototype), _symbols2.default.keydown, this) && _get(KeyboardPagedSelection.prototype.__proto__ || Object.getPrototypeOf(KeyboardPagedSelection.prototype), _symbols2.default.keydown, this).call(this, event);
      }

      /**
       * Scroll down one page.
       */

    }, {
      key: 'pageDown',
      value: function pageDown() {
        if (_get(KeyboardPagedSelection.prototype.__proto__ || Object.getPrototypeOf(KeyboardPagedSelection.prototype), 'pageDown', this)) {
          _get(KeyboardPagedSelection.prototype.__proto__ || Object.getPrototypeOf(KeyboardPagedSelection.prototype), 'pageDown', this).call(this);
        }
        return scrollOnePage(this, true);
      }

      /**
       * Scroll up one page.
       */

    }, {
      key: 'pageUp',
      value: function pageUp() {
        if (_get(KeyboardPagedSelection.prototype.__proto__ || Object.getPrototypeOf(KeyboardPagedSelection.prototype), 'pageUp', this)) {
          _get(KeyboardPagedSelection.prototype.__proto__ || Object.getPrototypeOf(KeyboardPagedSelection.prototype), 'pageUp', this).call(this);
        }
        return scrollOnePage(this, false);
      }

      /**
       * The element that should be scrolled with the Page Up/Down keys.
       * Default is the current element.
       *
       * @type {HTMLElement}
       */

    }, {
      key: 'scrollTarget',
      get: function get() {
        // Prefer base result.
        return 'scrollTarget' in base.prototype ? _get(KeyboardPagedSelection.prototype.__proto__ || Object.getPrototypeOf(KeyboardPagedSelection.prototype), 'scrollTarget', this) : this;
      },
      set: function set(element) {
        if ('scrollTarget' in base.prototype) {
          _set(KeyboardPagedSelection.prototype.__proto__ || Object.getPrototypeOf(KeyboardPagedSelection.prototype), 'scrollTarget', element, this);
        }
      }
    }]);

    return KeyboardPagedSelection;
  }(base);

  return KeyboardPagedSelection;
};

// Return the item whose content spans the given y position (relative to the
// top of the list's scrolling client area), or null if not found.
//
// If downward is true, move down the list of items to find the first item
// found at the given y position; if downward is false, move up the list of
// items to find the last item at that position.


function getIndexOfItemAtY(element, y, downward) {
  var items = element.items;
  var start = downward ? 0 : items.length - 1;
  var end = downward ? items.length : 0;
  var step = downward ? 1 : -1;
  var scrollTarget = element.scrollTarget;
  var topOfClientArea = scrollTarget.offsetTop + scrollTarget.clientTop;

  // Find the item spanning the indicated y coordinate.
  var item = void 0;
  var itemIndex = start;
  var itemTop = void 0;
  var found = false;
  while (itemIndex !== end) {
    item = items[itemIndex];
    itemTop = item.offsetTop - topOfClientArea;
    var itemBottom = itemTop + item.offsetHeight;
    if (itemTop <= y && itemBottom >= y) {
      // Item spans the indicated y coordinate.
      found = true;
      break;
    }
    itemIndex += step;
  }

  if (!found) {
    return null;
  }

  // We may have found an item whose padding spans the given y coordinate,
  // but whose content is actually above/below that point.
  // TODO: If the item has a border, then padding should be included in
  // considering a hit.
  var itemStyle = getComputedStyle(item);
  var itemPaddingTop = parseFloat(itemStyle.paddingTop);
  var itemPaddingBottom = parseFloat(itemStyle.paddingBottom);
  var contentTop = itemTop + item.clientTop + itemPaddingTop;
  var contentBottom = contentTop + item.clientHeight - itemPaddingTop - itemPaddingBottom;
  if (downward && contentTop <= y || !downward && contentBottom >= y) {
    // The indicated coordinate hits the actual item content.
    return itemIndex;
  } else {
    // The indicated coordinate falls within the item's padding. Back up to
    // the item below/above the item we found and return that.
    return itemIndex - step;
  }
}

// Move by one page downward (if downward is true), or upward (if false).
// Return true if we ended up changing the selection, false if not.
// TODO: Better support for horizontal lists.
function scrollOnePage(element, downward) {

  // Determine the item visible just at the edge of direction we're heading.
  // We'll select that item if it's not already selected.
  var scrollTarget = element.scrollTarget;
  var edge = scrollTarget.scrollTop + (downward ? scrollTarget.clientHeight : 0);
  var indexOfItemAtEdge = getIndexOfItemAtY(element, edge, downward);

  var selectedIndex = element.selectedIndex;
  var newIndex = void 0;
  if (indexOfItemAtEdge && selectedIndex === indexOfItemAtEdge) {
    // The item at the edge was already selected, so scroll in the indicated
    // direction by one page. Leave the new item at that edge selected.
    var delta = (downward ? 1 : -1) * scrollTarget.clientHeight;
    newIndex = getIndexOfItemAtY(element, edge + delta, downward);
  } else {
    // The item at the edge wasn't selected yet. Instead of scrolling, we'll
    // just select that item. That is, the first attempt to page up/down
    // usually just moves the selection to the edge in that direction.
    newIndex = indexOfItemAtEdge;
  }

  if (!newIndex) {
    // We can't find an item in the direction we want to travel. Select the
    // last item (if moving downward) or first item (if moving upward).
    newIndex = downward ? element.items.length - 1 : 0;
  }

  if (newIndex !== selectedIndex) {
    element.selectedIndex = newIndex;
    return true; // We handled the page up/down ourselves.
  } else {
    return false; // We didn't do anything.
  }
}

},{"./symbols":42}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createSymbol = require('./createSymbol');

var _createSymbol2 = _interopRequireDefault(_createSymbol);

var _symbols = require('./symbols');

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Symbols for private data members on an element.
var itemTextContentsSymbol = (0, _createSymbol2.default)('itemTextContents');
var typedPrefixSymbol = (0, _createSymbol2.default)('typedPrefix');
var prefixTimeoutSymbol = (0, _createSymbol2.default)('prefixTimeout');

/* Exported function extends a base class with KeyboardPrefixSelection. */

exports.default = function (base) {

  /**
   * Mixin that handles list box-style prefix typing, in which the user can type
   * a string to select the first item that begins with that string.
   *
   * Example: suppose a component using this mixin has the following items:
   *
   *     <sample-list-component>
   *       <div>Apple</div>
   *       <div>Apricot</div>
   *       <div>Banana</div>
   *       <div>Blackberry</div>
   *       <div>Blueberry</div>
   *       <div>Cantaloupe</div>
   *       <div>Cherry</div>
   *       <div>Lemon</div>
   *       <div>Lime</div>
   *     </sample-list-component>
   *
   * If this component receives the focus, and the user presses the "b" or "B"
   * key, the "Banana" item will be selected, because it's the first item that
   * matches the prefix "b". (Matching is case-insensitive.) If the user now
   * presses the "l" or "L" key quickly, the prefix to match becomes "bl", so
   * "Blackberry" will be selected.
   *
   * The prefix typing feature has a one second timeout — the prefix to match
   * will be reset after a second has passed since the user last typed a key.
   * If, in the above example, the user waits a second between typing "b" and
   * "l", the prefix will become "l", so "Lemon" would be selected.
   *
   * This mixin expects the component to invoke a `keydown` method when a key is
   * pressed. You can use [KeyboardMixin](KeyboardMixin.md) for that
   * purpose, or wire up your own keyboard handling and call `keydown` yourself.
   *
   * This mixin also expects the component to provide an `items` property. The
   * `textContent` of those items will be used for purposes of prefix matching.
   */
  var KeyboardPrefixSelection = function (_base) {
    _inherits(KeyboardPrefixSelection, _base);

    function KeyboardPrefixSelection() {
      _classCallCheck(this, KeyboardPrefixSelection);

      return _possibleConstructorReturn(this, (KeyboardPrefixSelection.__proto__ || Object.getPrototypeOf(KeyboardPrefixSelection)).apply(this, arguments));
    }

    _createClass(KeyboardPrefixSelection, [{
      key: _symbols2.default.keydown,


      // TODO: If the set of items is changed, reset the prefix.
      // [symbols.itemsChanged]() {
      //   this[itemTextContentsSymbol] = null;
      //   resetTypedPrefix(this);
      // }

      // TODO: If the selection is changed by some other means (e.g., arrow keys)
      // other than prefix typing, then that act should reset the prefix.

      value: function value(event) {
        var handled = void 0;
        var resetPrefix = true;

        switch (event.keyCode) {
          case 8:
            // Backspace
            handleBackspace(this);
            handled = true;
            resetPrefix = false;
            break;
          case 27:
            // Escape
            handled = true;
            break;
          default:
            if (!event.ctrlKey && !event.metaKey && !event.altKey && event.which !== 32 /* Space */) {
                handlePlainCharacter(this, String.fromCharCode(event.which));
              }
            resetPrefix = false;
        }

        if (resetPrefix) {
          resetTypedPrefix(this);
        }

        // Prefer mixin result if it's defined, otherwise use base result.
        return handled || _get(KeyboardPrefixSelection.prototype.__proto__ || Object.getPrototypeOf(KeyboardPrefixSelection.prototype), _symbols2.default.keydown, this) && _get(KeyboardPrefixSelection.prototype.__proto__ || Object.getPrototypeOf(KeyboardPrefixSelection.prototype), _symbols2.default.keydown, this).call(this, event);
      }

      /**
       * Select the first item whose text content begins with the given prefix.
       *
       * @param prefix [String] The prefix string to search for
       */

    }, {
      key: 'selectItemWithTextPrefix',
      value: function selectItemWithTextPrefix(prefix) {
        if (_get(KeyboardPrefixSelection.prototype.__proto__ || Object.getPrototypeOf(KeyboardPrefixSelection.prototype), 'selectItemWithTextPrefix', this)) {
          _get(KeyboardPrefixSelection.prototype.__proto__ || Object.getPrototypeOf(KeyboardPrefixSelection.prototype), 'selectItemWithTextPrefix', this).call(this, prefix);
        }
        if (prefix == null || prefix.length === 0) {
          return;
        }
        var index = getIndexOfItemWithTextPrefix(this, prefix);
        if (index >= 0) {
          this.selectedIndex = index;
        }
      }
    }]);

    return KeyboardPrefixSelection;
  }(base);

  return KeyboardPrefixSelection;
};

// Time in milliseconds after which the user is considered to have stopped
// typing.


var PREFIX_TIMEOUT_DURATION = 1000;

// Return the index of the first item with the given prefix, else -1.
function getIndexOfItemWithTextPrefix(element, prefix) {
  var itemTextContents = getItemTextContents(element);
  var prefixLength = prefix.length;
  for (var i = 0; i < itemTextContents.length; i++) {
    var itemTextContent = itemTextContents[i];
    if (itemTextContent.substr(0, prefixLength) === prefix) {
      return i;
    }
  }
  return -1;
}

// Return an array of the text content (in lowercase) of all items.
// Cache these results.
function getItemTextContents(element) {
  if (!element[itemTextContentsSymbol]) {
    var items = element.items;
    element[itemTextContentsSymbol] = items.map(function (child) {
      var text = child.textContent || child.alt;
      return text.toLowerCase();
    });
  }
  return element[itemTextContentsSymbol];
}

function handleBackspace(element) {
  var length = element[typedPrefixSymbol] ? element[typedPrefixSymbol].length : 0;
  if (length > 0) {
    element[typedPrefixSymbol] = element[typedPrefixSymbol].substr(0, length - 1);
  }
  element.selectItemWithTextPrefix(element[typedPrefixSymbol]);
  setPrefixTimeout(element);
}

function handlePlainCharacter(element, char) {
  var prefix = element[typedPrefixSymbol] || '';
  element[typedPrefixSymbol] = prefix + char.toLowerCase();
  element.selectItemWithTextPrefix(element[typedPrefixSymbol]);
  setPrefixTimeout(element);
}

function resetPrefixTimeout(element) {
  if (element[prefixTimeoutSymbol]) {
    clearTimeout(element[prefixTimeoutSymbol]);
    element[prefixTimeoutSymbol] = false;
  }
}

function resetTypedPrefix(element) {
  element[typedPrefixSymbol] = '';
  resetPrefixTimeout(element);
}

function setPrefixTimeout(element) {
  resetPrefixTimeout(element);
  element[prefixTimeoutSymbol] = setTimeout(function () {
    resetTypedPrefix(element);
  }, PREFIX_TIMEOUT_DURATION);
}

},{"./createSymbol":38,"./symbols":42}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _createSymbol = require('./createSymbol');

var _createSymbol2 = _interopRequireDefault(_createSymbol);

var _safeAttributes = require('./safeAttributes');

var _safeAttributes2 = _interopRequireDefault(_safeAttributes);

var _symbols = require('./symbols');

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Symbols for private data members on an element.
var closedSymbol = (0, _createSymbol2.default)('closed');

/* Exported function extends a base class with OpenClose. */

exports.default = function (base) {

  /**
   * Mixin which adds close/open semantics.
   *
   * This mixin does not produce any user-visible effects. Instead it applies
   * a `basic-closed` CSS class to the component host if the host is
   * closed, and a `basic-opened` class if opened. It also invokes a `render`
   * function that can be overridden to apply custom effects.
   */
  var OpenClose = function (_base) {
    _inherits(OpenClose, _base);

    function OpenClose() {
      _classCallCheck(this, OpenClose);

      // Set defaults.
      var _this = _possibleConstructorReturn(this, (OpenClose.__proto__ || Object.getPrototypeOf(OpenClose)).call(this));

      if (typeof _this.closed === 'undefined') {
        _this.closed = _this[_symbols2.default.defaults].closed;
      }
      return _this;
    }

    /**
     * Close the component.
     *
     * This is equivalent to setting the `closed` property to true.
     */


    _createClass(OpenClose, [{
      key: 'close',
      value: function close() {
        this.closed = true;
      }

      /**
       * True if the component is curently closed.
       *
       * @type {boolean}
       * @default false
       */

    }, {
      key: 'connectedCallback',
      value: function connectedCallback() {
        if (_get(OpenClose.prototype.__proto__ || Object.getPrototypeOf(OpenClose.prototype), 'connectedCallback', this)) {
          _get(OpenClose.prototype.__proto__ || Object.getPrototypeOf(OpenClose.prototype), 'connectedCallback', this).call(this);
        }
        _safeAttributes2.default.connected(this);
        this.render(this.closed);
      }
    }, {
      key: 'open',


      /**
       * Open the component.
       *
       * This is equivalent to setting the `closed` property to false.
       */
      value: function open() {
        this.closed = false;
      }

      /**
       * Perform custom rendering of the close/open transition.
       *
       * You can override this method to perform custom effects. If you do so,
       * be sure to invoke `super()` in your implementation to get the baseline
       * behavior.
       *
       * @param {boolean} closing - True if the component is being closed,
       *        false if it's being opened.
       */

    }, {
      key: 'render',
      value: function render(closing) {
        if (_get(OpenClose.prototype.__proto__ || Object.getPrototypeOf(OpenClose.prototype), 'render', this)) {
          _get(OpenClose.prototype.__proto__ || Object.getPrototypeOf(OpenClose.prototype), 'render', this).call(this);
        }
        _safeAttributes2.default.toggleClass(this, 'basic-closed', closing);
        _safeAttributes2.default.toggleClass(this, 'basic-opened', !closing);
        _safeAttributes2.default.setAttribute(this, 'aria-expanded', !closing);
      }

      /**
       * Toggle the component's open/closed state.
       */

    }, {
      key: 'toggle',
      value: function toggle() {
        this.closed = !this.closed;
      }
    }, {
      key: 'closed',
      get: function get() {
        return this[closedSymbol];
      },
      set: function set(value) {
        var previousClosed = this[closedSymbol];
        this[closedSymbol] = value;
        if ('closed' in base.prototype) {
          _set(OpenClose.prototype.__proto__ || Object.getPrototypeOf(OpenClose.prototype), 'closed', value, this);
        }
        if (value !== previousClosed) {
          this.render(value);

          var event = new CustomEvent('closed-changed');
          this.dispatchEvent(event);
        }
      }
    }, {
      key: _symbols2.default.defaults,
      get: function get() {
        var defaults = _get(OpenClose.prototype.__proto__ || Object.getPrototypeOf(OpenClose.prototype), _symbols2.default.defaults, this) || {};
        defaults.closed = false;
        return defaults;
      }
    }]);

    return OpenClose;
  }(base);

  return OpenClose;
};

},{"./createSymbol":38,"./safeAttributes":41,"./symbols":42}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _renderArrayAsElements = require('../../basic-component-mixins/src/renderArrayAsElements');

var _renderArrayAsElements2 = _interopRequireDefault(_renderArrayAsElements);

var _symbols = require('../../basic-component-mixins/src/symbols');

var _symbols2 = _interopRequireDefault(_symbols);

var _toggleClass = require('../../basic-component-mixins/src/toggleClass');

var _toggleClass2 = _interopRequireDefault(_toggleClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Exported function extends a base class with PageDots. */
exports.default = function (base) {

  /**
   * Template mixin which adds small dots to show the number of items and let
   * the user select a specific item.
   *
   * You can see a [live demo](http://basicwebcomponents.org/basic-web-components/packages/basic-page-dots.html)
   * of this component applied to a carousel.
   *
   * There will be one dot for each item, and the dot for the currently selected
   * item will be shown selected.
   *
   * Typical usage:
   *
   *     class CarouselWithDots extends PageDotsMixin(Carousel) {}
   *     customElements.define('carousel-with-dots', CarouselWithDots);
   *
   * Although the dots are quite small by default, clicking/tapping a dot will
   * will select the corresponding list item.
   */
  var PageDots = function (_base) {
    _inherits(PageDots, _base);

    function PageDots() {
      _classCallCheck(this, PageDots);

      var _this = _possibleConstructorReturn(this, (PageDots.__proto__ || Object.getPrototypeOf(PageDots)).call(this));

      _this.$.dots.addEventListener('click', function (event) {
        var dot = event.target;
        var dotIndex = _this.dots.indexOf(dot);
        if (dotIndex >= 0) {
          _this.selectedIndex = dotIndex;
        }
      });
      return _this;
    }

    _createClass(PageDots, [{
      key: _symbols2.default.itemsChanged,
      value: function value() {
        if (_get(PageDots.prototype.__proto__ || Object.getPrototypeOf(PageDots.prototype), _symbols2.default.itemsChanged, this)) {
          _get(PageDots.prototype.__proto__ || Object.getPrototypeOf(PageDots.prototype), _symbols2.default.itemsChanged, this).call(this);
        }
        (0, _renderArrayAsElements2.default)(this.items, this.$.dots, function (item, element) {
          // We don't use the item parameter, because any item will produce an
          // identical corresponding dot.
          if (!element) {
            element = document.createElement('div');
            element.classList.add('dot');
            element.classList.add('style-scope');
            element.classList.add('basic-page-dots');
            element.setAttribute('role', 'none');
            return element;
          }
        });
        refreshDots(this);
      }
    }, {
      key: _symbols2.default.itemSelected,
      value: function value(item, selected) {
        if (_get(PageDots.prototype.__proto__ || Object.getPrototypeOf(PageDots.prototype), _symbols2.default.itemSelected, this)) {
          _get(PageDots.prototype.__proto__ || Object.getPrototypeOf(PageDots.prototype), _symbols2.default.itemSelected, this).call(this, item, selected);
        }
        var index = this.items.indexOf(item);
        // See if the corresponding dot has already been created.
        // If not, the correct dot will be selected when it gets created.
        var dots = this.dots;
        if (dots && dots.length > index) {
          var dot = this.dots[index];
          if (dot) {
            (0, _toggleClass2.default)(dot, 'selected', selected);
          }
        }
      }

      /**
       * The distance the user has moved the first touchpoint since the beginning
       * of a drag, expressed as a fraction of the element's width.
       *
       * @type number
       */

    }, {
      key: 'dots',
      get: function get() {
        return [].slice.call(this.$.dots.querySelectorAll('.dot'));
      }
    }, {
      key: 'selectedFraction',
      get: function get() {
        return _get(PageDots.prototype.__proto__ || Object.getPrototypeOf(PageDots.prototype), 'selectedFraction', this);
      },
      set: function set(value) {
        if ('selectedFraction' in base.prototype) {
          _set(PageDots.prototype.__proto__ || Object.getPrototypeOf(PageDots.prototype), 'selectedFraction', value, this);
        }
        renderTransition(this, this.selectedIndex, value);
      }
    }, {
      key: 'selectedIndex',
      get: function get() {
        return _get(PageDots.prototype.__proto__ || Object.getPrototypeOf(PageDots.prototype), 'selectedIndex', this);
      },
      set: function set(index) {
        if ('selectedIndex' in base.prototype) {
          _set(PageDots.prototype.__proto__ || Object.getPrototypeOf(PageDots.prototype), 'selectedIndex', index, this);
        }
        refreshDots(this);
      }
    }, {
      key: _symbols2.default.template,
      get: function get() {
        var baseTemplate = _get(PageDots.prototype.__proto__ || Object.getPrototypeOf(PageDots.prototype), _symbols2.default.template, this) || '';
        return '\n        <style>\n        :host {\n          display: -webkit-flex;\n          display: flex;\n          position: relative;\n        }\n\n        #dots {\n          bottom: 0;\n          display: -webkit-flex;\n          display: flex;\n          -webkit-justify-content: center;\n          justify-content: center;\n          position: absolute;\n          width: 100%;\n          z-index: 1;\n        }\n\n        #dotNavigationContainer {\n          display: -webkit-flex;\n          display: flex;\n          -webkit-flex: 1;\n          flex: 1;\n          position: relative;\n          z-index: 0;\n        }\n\n        #container ::slotted(*) {\n          -webkit-flex: 1;\n          flex: 1;\n        }\n\n        .dot {\n          background: rgb(255, 255, 255);\n          border-radius: 7px;\n          box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.5);\n          box-sizing: border-box;\n          cursor: pointer;\n          height: 8px;\n          margin: 7px 5px;\n          opacity: 0.4;\n          padding: 0;\n          transition: background 0.2s box-shadow 0.2s;\n          width: 8px;\n        }\n\n        .dot:hover {\n          background: rgba(0, 0, 0, 0.75);\n          box-shadow: 0 0 1px 3px rgba(255, 255, 255, 0.5);\n        }\n\n        .dot.selected {\n          opacity: 0.95;\n        }\n\n        @media (min-width: 768px) {\n          .dot {\n            height: 12px;\n            width: 12px;\n          }\n        }\n        </style>\n\n        <div id="dots" role="none"></div>\n        <div id="dotNavigationContainer" role="none">\n          ' + baseTemplate + '\n        </div>\n      ';
      }
    }]);

    return PageDots;
  }(base);

  return PageDots;
};

// Return the index, ensuring it stays between 0 and the given length.


function keepIndexWithinBounds(length, index) {
  // Handle possibility of negative mod.
  // See http://stackoverflow.com/a/18618250/76472
  return (index % length + length) % length;
}

function renderTransition(element, selectedIndex, selectedFraction) {
  var dots = element.dots;
  if (!dots || dots.length === 0) {
    return;
  }
  var dotCount = dots.length;
  var opacityMinimum = 0.4;
  var opacityMaximum = 0.95;
  var opacityRange = opacityMaximum - opacityMinimum;
  var fractionalIndex = selectedIndex + selectedFraction;
  var leftIndex = Math.floor(fractionalIndex);
  var rightIndex = Math.ceil(fractionalIndex);
  var selectionWraps = element.selectionWraps;
  var awayIndex = selectedFraction >= 0 ? leftIndex : rightIndex;
  var towardIndex = selectedFraction >= 0 ? rightIndex : leftIndex;
  if (selectionWraps) {
    awayIndex = keepIndexWithinBounds(dotCount, awayIndex);
    towardIndex = keepIndexWithinBounds(dotCount, towardIndex);
  }
  // Stupid IE doesn't have Math.trunc.
  // const truncatedSelectedFraction = Math.trunc(selectedFraction);
  var truncatedSelectedFraction = selectedFraction < 0 ? Math.ceil(selectedFraction) : Math.floor(selectedFraction);
  var progress = selectedFraction - truncatedSelectedFraction;
  var opacityProgressThroughRange = Math.abs(progress) * opacityRange;
  dots.forEach(function (dot, index) {
    var dotOpacity = void 0;
    if (selectedFraction === 0) {
      // Remove explicit opacity and rely on styling.
      dotOpacity = '';
    } else if (index === awayIndex) {
      dotOpacity = opacityMaximum - opacityProgressThroughRange;
    } else if (index === towardIndex) {
      dotOpacity = opacityMinimum + opacityProgressThroughRange;
    } else {
      dotOpacity = opacityMinimum;
    }
    dot.style.opacity = dotOpacity;
  });
}

function refreshDots(element) {
  var selectedIndex = element.selectedIndex;
  element.dots.forEach(function (dot, i) {
    (0, _toggleClass2.default)(dot, 'selected', i === selectedIndex);
  });
}

},{"../../basic-component-mixins/src/renderArrayAsElements":40,"../../basic-component-mixins/src/symbols":42,"../../basic-component-mixins/src/toggleClass":43}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _safeAttributes = require('../../basic-component-mixins/src/safeAttributes');

var _safeAttributes2 = _interopRequireDefault(_safeAttributes);

var _symbols = require('../../basic-component-mixins/src/symbols');

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Exported function extends a base class with PlayControls. */
exports.default = function (base) {

  /**
   * Template mixin which adds buttons for managing playback of a slideshow,
   * audio playlist, etc.
   *
   * Typical usage:
   *
   *     class SlideshowWithControls extends PlayControlsMixin(Slideshow) {}
   *     customElements.define('slideshow-with-controls', SlideshowWithControls);
   *
   */
  var PlayControls = function (_base) {
    _inherits(PlayControls, _base);

    function PlayControls() {
      _classCallCheck(this, PlayControls);

      var _this = _possibleConstructorReturn(this, (PlayControls.__proto__ || Object.getPrototypeOf(PlayControls)).call(this));

      _this.$.previousButton.addEventListener('click', function (event) {
        _this.selectPrevious();
      });
      _this.$.playButton.addEventListener('click', function (event) {
        _this.playing = !_this.playing;
      });
      _this.$.nextButton.addEventListener('click', function (event) {
        _this.selectNext();
      });
      return _this;
    }

    _createClass(PlayControls, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        if (_get(PlayControls.prototype.__proto__ || Object.getPrototypeOf(PlayControls.prototype), 'connectedCallback', this)) {
          _get(PlayControls.prototype.__proto__ || Object.getPrototypeOf(PlayControls.prototype), 'connectedCallback', this).call(this);
        }
        _safeAttributes2.default.connected(this);
      }
    }, {
      key: _symbols2.default.keydown,
      value: function value(event) {
        var handled = void 0;

        switch (event.keyCode) {
          case 32:
            /* Space */
            this.playing = !this.playing;
            handled = true;
            break;
        }

        // Prefer mixin result if it's defined, otherwise use base result.
        return handled || _get(PlayControls.prototype.__proto__ || Object.getPrototypeOf(PlayControls.prototype), _symbols2.default.keydown, this) && _get(PlayControls.prototype.__proto__ || Object.getPrototypeOf(PlayControls.prototype), _symbols2.default.keydown, this).call(this, event);
      }
    }, {
      key: 'playing',
      get: function get() {
        return _get(PlayControls.prototype.__proto__ || Object.getPrototypeOf(PlayControls.prototype), 'playing', this);
      },
      set: function set(value) {
        if ('playing' in base.prototype) {
          _set(PlayControls.prototype.__proto__ || Object.getPrototypeOf(PlayControls.prototype), 'playing', value, this);
        }
        _safeAttributes2.default.toggleClass(this, 'playing', value);
      }
    }, {
      key: _symbols2.default.template,
      get: function get() {
        var baseTemplate = _get(PlayControls.prototype.__proto__ || Object.getPrototypeOf(PlayControls.prototype), _symbols2.default.template, this) || '';
        return '\n        <style>\n        :host {\n          display: -webkit-flex;\n          display: flex;\n          position: relative;\n        }\n\n        #buttons {\n          bottom: 0;\n          box-sizing: border-box;\n          padding: 0.5em;\n          position: absolute;\n          text-align: center;\n          width: 100%;\n          z-index: 1;\n        }\n\n        button {\n          background: transparent;\n          border: none;\n          fill: rgba(255, 255, 255, 0.5);\n          padding: 0;\n          transition: fill 0.5s;\n          vertical-align: middle;\n        }\n        :host(:hover) button {\n          fill: rgba(255, 255, 255, 0.7);\n        }\n        button:hover {\n          fill: rgba(255, 255, 255, 0.85);\n        }\n        button:active {\n          fill: white;\n        }\n\n        .icon {\n          height: 30px;\n          width: 30px;\n        }\n        #playButton .icon {\n          height: 40px;\n          width: 40px;\n        }\n\n        :host(.playing) .pausedControl {\n          display: none;\n        }\n        :host(:not(.playing)) .playingControl {\n          display: none;\n        }\n\n        #container {\n          display: -webkit-flex;\n          display: flex;\n          -webkit-flex: 1;\n          flex: 1;\n        }\n\n        #container ::slotted(*) {\n          -webkit-flex: 1;\n          flex: 1;\n        }\n        </style>\n\n        <div id="buttons">\n          <button id="previousButton">\n            <svg class="icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">\n              <g id="skip-previous">\n                <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>\n              </g>\n            </svg>\n          </button>\n          <button id="playButton">\n            <svg class="icon playingControl" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">\n              <g id="pause-circle-outline">\n                <path d="M9 16h2V8H9v8zm3-14C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-4h2V8h-2v8z"></path>\n              </g>\n            </svg>\n            <svg class="icon pausedControl" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">\n              <g id="play-circle-outline">\n                <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>\n              </g>\n            </svg>\n          </button>\n          <button id="nextButton">\n            <svg class="icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">\n              <g id="skip-next">\n                <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>\n              </g>\n            </svg>\n          </button>\n        </div>\n\n        <div id="container" role="none">\n          ' + baseTemplate + '\n        </div>\n      ';
      }
    }]);

    return PlayControls;
  }(base);

  return PlayControls;
};

},{"../../basic-component-mixins/src/safeAttributes":41,"../../basic-component-mixins/src/symbols":42}],27:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Exported function extends a base class with SelectedItemTextValue. */
exports.default = function (base) {

  /**
   * Mixin which defines a `value` property that reflects the text content of a
   * selected item.
   *
   * This mixin exists for list-like components that want to provide a more
   * convenient way to get/set the selected item using text.
   *
   * This mixin expects a component to provide an `items` array of all elements
   * in the list. A standard way to do that with is
   * [ContentItemsMixin](ContentItemsMixin.md). This also expects the definition
   * of `selectedIndex` and `selectedItem` properties, which can be obtained
   * from [SingleSelectionMixin](SingleSelectionMixin.md).
   */
  var SelectedItemTextValue = function (_base) {
    _inherits(SelectedItemTextValue, _base);

    function SelectedItemTextValue() {
      _classCallCheck(this, SelectedItemTextValue);

      return _possibleConstructorReturn(this, (SelectedItemTextValue.__proto__ || Object.getPrototypeOf(SelectedItemTextValue)).apply(this, arguments));
    }

    _createClass(SelectedItemTextValue, [{
      key: 'value',


      /**
       * The text content of the selected item.
       *
       * Setting this value to a string will attempt to select the first list item
       * whose text content match that string. Setting this to a string not matching
       * any list item will result in no selection.
       *
       * @type {string}
       */
      get: function get() {
        return this.selectedItem == null || this.selectedItem.textContent == null ? '' : this.selectedItem.textContent;
      },
      set: function set(text) {

        var currentIndex = this.selectedIndex;
        var newIndex = -1; // Assume we won't find the text.

        // Find the item with the indicated text.
        var items = this.items;
        for (var i = 0, length = items.length; i < length; i++) {
          if (items[i].textContent === text) {
            newIndex = i;
            break;
          }
        }

        if (newIndex !== currentIndex) {
          this.selectedIndex = newIndex;
          var event = new CustomEvent('value-changed');
          this.dispatchEvent(event);
        }
      }
    }]);

    return SelectedItemTextValue;
  }(base);

  return SelectedItemTextValue;
};

},{}],28:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

exports.default = mixin;

var _createSymbol = require('./createSymbol');

var _createSymbol2 = _interopRequireDefault(_createSymbol);

var _FractionalSelectionMixin = require('./FractionalSelectionMixin');

var _FractionalSelectionMixin2 = _interopRequireDefault(_FractionalSelectionMixin);

var _symbols = require('./symbols');

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Symbols for private data members on an element.
var animationSymbol = (0, _createSymbol2.default)('animation');
var draggingSymbol = (0, _createSymbol2.default)('dragging');
var lastAnimationSymbol = (0, _createSymbol2.default)('lastAnimation');
var playingAnimationSymbol = (0, _createSymbol2.default)('animatingSelection');
var previousSelectionSymbol = (0, _createSymbol2.default)('previousSelection');
var selectionAnimationDurationSymbol = (0, _createSymbol2.default)('selectionAnimationDuration');
var selectionAnimationEffectSymbol = (0, _createSymbol2.default)('selectionAnimationEffect');
var selectionAnimationKeyframesSymbol = (0, _createSymbol2.default)('selectionAnimationKeyframes');
var resetAnimationsOnNextRenderSymbol = (0, _createSymbol2.default)('resetAnimationsOnNextRender');

/* Exported function extends a base class with SelectionAnimation. */
function mixin(base) {

  /**
   * Mixin which uses animation to show transitions between selection states.
   *
   * This mixin can be used by components that want to provide visible
   * animations when changing the selection. For example, a carousel component
   * may want to define a sliding animation effect shown when moving between
   * items.
   *
   * The animation is defined by a `selectionAnimationKeyframes` property; see
   * that property for details on how to define these keyframes. This animation
   * will be used in two ways. First, when moving strictly between items, the
   * animation will play smoothly to show the selection changing. Second, the
   * animation can be used to render the selection at a fixed point in the
   * transition between states. E.g., if the user pauses halfway through
   * dragging an element using [SwipeDirectionMixin](SwipeDirectionMixin.md)
   * or [TrackpadDirectionMixin](TrackpadDirectionMixin.md)s, then the selection
   * animation will be shown at the point exactly halfway through.
   *
   * This mixin expects a component to provide an `items` array of all elements
   * in the list, which can be provided via
   * [ContentItemsMixin](ContentItemsMixin.md). This mixin also expects
   * `selectedIndex` and `selectedItem` properties, which can be provided via
   * [SingleSelectionMixin](SingleSelectionMixin.md).
   *
   * This mixin supports a `selectionWraps` property. When true, the user can
   * navigate forward from the last item in the list and wrap around to the
   * first item, or navigate backward from the first item and wrap around to the
   * last item.
   *
   * This mixin uses the Web Animations API. For use on browsers which
   * do not support that API natively, you will need to load the
   * [Web Animations polyfill](https://github.com/web-animations/web-animations-js).
   */
  var SelectionAnimation = function (_base) {
    _inherits(SelectionAnimation, _base);

    function SelectionAnimation() {
      _classCallCheck(this, SelectionAnimation);

      // Set defaults.
      var _this = _possibleConstructorReturn(this, (SelectionAnimation.__proto__ || Object.getPrototypeOf(SelectionAnimation)).call(this));

      if (typeof _this.selectionAnimationDuration === 'undefined') {
        _this.selectionAnimationDuration = _this[_symbols2.default.defaults].selectionAnimationDuration;
      }
      if (typeof _this.selectionAnimationEffect === 'undefined' && _this.selectionAnimationKeyframes == null) {
        _this.selectionAnimationEffect = _this[_symbols2.default.defaults].selectionAnimationEffect;
      }

      _this[_symbols2.default.dragging] = false;
      return _this;
    }

    _createClass(SelectionAnimation, [{
      key: _symbols2.default.itemAdded,
      value: function value(item) {
        // We mark new items in the list as explicitly visible to ARIA. Otherwise,
        // when an item isn't visible on the screen, ARIA will assume the item is
        // of no interest to the user, and leave it out of the accessibility tree.
        // If the list contains 10 items, but only 3 are visible, a screen reader
        // might then announce the list only has 3 items. To ensure that screen
        // readers and other assistive technologies announce the correct total
        // number of items, we explicitly mark all items as not hidden. This will
        // expose them all in the accessibility tree, even the items which are
        // currently not rendered.
        //
        // TODO: Generally speaking, this entire mixin assumes that the user can
        // navigate through all items in a list. But an app could style an item as
        // display:none or visibility:hidden because the user is not allowed to
        // interact with that item at the moment. Support for this scenario should
        // be added. This would entail changing all locations where a mixin
        // function is counting items, iterating over the (visible) items, and
        // showing or hiding items. Among other things, the code below to make
        // items visible to ARIA would need to discriminate between items which
        // are invisible because of animation state, or invisible because the user
        // shouldn't interact with them.
        item.setAttribute('aria-hidden', false);
      }
    }, {
      key: _symbols2.default.itemsChanged,
      value: function value() {
        if (_get(SelectionAnimation.prototype.__proto__ || Object.getPrototypeOf(SelectionAnimation.prototype), _symbols2.default.itemsChanged, this)) {
          _get(SelectionAnimation.prototype.__proto__ || Object.getPrototypeOf(SelectionAnimation.prototype), _symbols2.default.itemsChanged, this).call(this);
        }

        _resetAnimations(this);

        // TODO: Also reset our notion of the last rendered selection? This comes
        // up when a DOM removal causes the selected item to change position.
        // this[previousSelectionSymbol] = null;

        renderSelection(this);
      }
    }, {
      key: 'resetAnimations',
      value: function resetAnimations() {
        _resetAnimations(this);
      }

      /**
       * A fractional value indicating how far the user has currently advanced to
       * the next/previous item. E.g., a `selectedFraction` of 3.5 indicates the
       * user is halfway between items 3 and 4.
       *
       * For more details, see [FractionalSelectionMixin](FractionalSelectionMixin.md)
       * mixin.
       *
       * @type {number}
       */

    }, {
      key: _symbols2.default.defaults,
      get: function get() {
        var defaults = _get(SelectionAnimation.prototype.__proto__ || Object.getPrototypeOf(SelectionAnimation.prototype), _symbols2.default.defaults, this) || {};
        defaults.selectionAnimationDuration = 250;
        defaults.selectionAnimationEffect = 'slide';
        return defaults;
      }

      /*
       * Provide backing for the dragging property.
       * Also, when a drag begins, reset the animations.
       */

    }, {
      key: _symbols2.default.dragging,
      get: function get() {
        return this[draggingSymbol];
      },
      set: function set(value) {
        var previousValue = this[_symbols2.default.dragging];
        this[draggingSymbol] = value;
        if (_symbols2.default.dragging in base.prototype) {
          _set(SelectionAnimation.prototype.__proto__ || Object.getPrototypeOf(SelectionAnimation.prototype), _symbols2.default.dragging, value, this);
        }
        if (value && !previousValue) {
          // Have begun a drag.
          this[resetAnimationsOnNextRenderSymbol] = true;
        }
      }
    }, {
      key: 'selectedFraction',
      get: function get() {
        return _get(SelectionAnimation.prototype.__proto__ || Object.getPrototypeOf(SelectionAnimation.prototype), 'selectedFraction', this) || 0;
      },
      set: function set(value) {
        if ('selectedFraction' in base.prototype) {
          _set(SelectionAnimation.prototype.__proto__ || Object.getPrototypeOf(SelectionAnimation.prototype), 'selectedFraction', value, this);
        }
        renderSelection(this, this.selectedIndex, value);
      }
    }, {
      key: 'selectedIndex',
      get: function get() {
        return _get(SelectionAnimation.prototype.__proto__ || Object.getPrototypeOf(SelectionAnimation.prototype), 'selectedIndex', this);
      },
      set: function set(index) {
        if ('selectedIndex' in base.prototype) {
          _set(SelectionAnimation.prototype.__proto__ || Object.getPrototypeOf(SelectionAnimation.prototype), 'selectedIndex', index, this);
        }
        renderSelection(this, index, 0);
      }

      /**
       * The duration of a selection animation in milliseconds.
       *
       * This measures the amount of time required for a selection animation to
       * complete. This number remains constant, even if the number of items being
       * animated increases.
       *
       * The default value is 250 milliseconds (a quarter a second).
       *
       * @type {number}
       * @default 250
       */

    }, {
      key: 'selectionAnimationDuration',
      get: function get() {
        return this[selectionAnimationDurationSymbol];
      },
      set: function set(value) {
        this[selectionAnimationDurationSymbol] = value;
        if ('selectionAnimationDuration' in base.prototype) {
          _set(SelectionAnimation.prototype.__proto__ || Object.getPrototypeOf(SelectionAnimation.prototype), 'selectionAnimationDuration', value, this);
        }
      }

      /**
       * The name of a standard selection animation effect.
       *
       * This is a shorthand for setting the `selectionAnimationKeyframes`
       * property to standard keyframes. Supported string values:
       *
       * * "crossfade"
       * * "reveal"
       * * "revealWithFade"
       * * "showAdjacent"
       * * "slide"
       * * "slideWithGap"
       *
       * @type {string}
       * @default "slide"
       */

    }, {
      key: 'selectionAnimationEffect',
      get: function get() {
        return this[selectionAnimationEffectSymbol];
      },
      set: function set(value) {
        this[selectionAnimationEffectSymbol] = value;
        if ('selectionAnimationEffect' in base.prototype) {
          _set(SelectionAnimation.prototype.__proto__ || Object.getPrototypeOf(SelectionAnimation.prototype), 'selectionAnimationEffect', value, this);
        }
        this.selectionAnimationKeyframes = mixin.standardEffectKeyframes[value];
      }

      /**
       * The keyframes that define an animation that plays for an item when moving
       * forward in the sequence.
       *
       * This is an array of CSS rules that will be applied. These are used as
       * [keyframes](http://w3c.github.io/web-animations/#keyframes-section)
       * to animate the item with the
       * [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/animation).
       *
       * The animation represents the state of the next item as it moves from
       * completely unselected (offstage, usually right), to selected (center
       * stage), to completely unselected (offstage, usually left). The center time
       * of the animation should correspond to the item's quiscent selected state,
       * typically in the center of the stage and at the item's largest size.
       *
       * The default forward animation is a smooth slide at full size from right to
       * left.
       *
       * When moving the selection backward, this animation is played in reverse.
       *
       * @type {cssRules[]}
       */

    }, {
      key: 'selectionAnimationKeyframes',
      get: function get() {
        // Standard animation slides left/right, keeps adjacent items out of view.
        return this[selectionAnimationKeyframesSymbol];
      },
      set: function set(value) {
        this[selectionAnimationKeyframesSymbol] = value;
        if ('selectionAnimationKeyframes' in base.prototype) {
          _set(SelectionAnimation.prototype.__proto__ || Object.getPrototypeOf(SelectionAnimation.prototype), 'selectionAnimationKeyframes', value, this);
        }
        _resetAnimations(this);
        renderSelection(this);
      }
    }, {
      key: 'selectionWraps',
      get: function get() {
        return _get(SelectionAnimation.prototype.__proto__ || Object.getPrototypeOf(SelectionAnimation.prototype), 'selectionWraps', this);
      },
      set: function set(value) {
        if ('selectionWraps' in base.prototype) {
          _set(SelectionAnimation.prototype.__proto__ || Object.getPrototypeOf(SelectionAnimation.prototype), 'selectionWraps', value, this);
        }
        _resetAnimations(this);
        renderSelection(this);
      }
    }]);

    return SelectionAnimation;
  }(base);

  return SelectionAnimation;
}

// We expose helpers on the mixin function that we want to be able to unit test.
// Since these are on the function, not on the class emitted by the function,
// they don't end up getting exposed on actual element instances.
mixin.helpers = {

  /*
   * Calculate the animation fractions for an element's items at the given
   * selection point. This is used when rendering the element's selection state
   * instantaneously.
   *
   * This function considers the selectedIndex parameter, which can be a whole
   * or fractional number, and determines which items will be visible at that
   * index. This function then calculates a corresponding animation fraction: a
   * number between 0 and 1 indicating how far through the selection animation
   * an item should be shown, or null if the item should not be visible at that
   * selection index. These fractions are returned as an array, where the
   * animation fraction at position N corresponds to how item N should be shown.
   */
  animationFractionsForSelection: function animationFractionsForSelection(element, selection) {

    var items = element.items;
    if (!items) {
      return;
    }

    var itemCount = items.length;
    var selectionWraps = element.selectionWraps;

    return items.map(function (item, itemIndex) {
      // How many steps from the selection point to this item?
      var steps = stepsToIndex(itemCount, selectionWraps, selection, itemIndex);
      // To convert steps to animation fraction:
      // steps      animation fraction
      //  1         0     (stage right)
      //  0         0.5   (center stage)
      // -1         1     (stage left)
      var animationFraction = (1 - steps) / 2;
      return animationFraction >= 0 && animationFraction <= 1 ? animationFraction : null; // Outside animation range
    });
  },


  /*
   * Calculate the animation timings that should be used to smoothly animate the
   * element's items from one selection state to another.
   *
   * This returns an array of timings, where the timing at position N should be
   * used to animate item N. If an item's timing is null, then that item should
   * not take place in the animation, and should be hidden instead.
   */
  effectTimingsForSelectionAnimation: function effectTimingsForSelectionAnimation(element, fromSelection, toSelection) {

    var items = element.items;
    if (!items) {
      return;
    }
    var itemCount = items.length;
    var selectionWraps = element.selectionWraps;
    var toIndex = _FractionalSelectionMixin2.default.helpers.wrappedSelectionParts(toSelection, itemCount, selectionWraps).index;
    var totalSteps = stepsToIndex(itemCount, selectionWraps, fromSelection, toSelection);
    var direction = totalSteps >= 0 ? 'normal' : 'reverse';
    var fill = 'both';
    var totalDuration = element.selectionAnimationDuration;
    var stepDuration = totalSteps !== 0 ? totalDuration * 2 / Math.ceil(Math.abs(totalSteps)) : 0; // No steps required, animation will be instantenous.

    var timings = items.map(function (item, itemIndex) {
      var steps = stepsToIndex(itemCount, selectionWraps, itemIndex, toSelection);
      // If we include this item in the staggered sequence of animations we're
      // creating, where would the item appear in the sequence?
      var positionInSequence = totalSteps - steps;
      if (totalSteps < 0) {
        positionInSequence = -positionInSequence;
      }
      // So, is this item really included in the sequence?
      if (Math.ceil(positionInSequence) >= 0 && positionInSequence <= Math.abs(totalSteps)) {
        // Note that delay for first item will be negative. That will cause
        // the animation to start halfway through, which is what we want.
        var delay = stepDuration * (positionInSequence - 1) / 2;
        var endDelay = itemIndex === toIndex ? -stepDuration / 2 : // Stop halfway through.
        0; // Play animation until end.
        return { duration: stepDuration, direction: direction, fill: fill, delay: delay, endDelay: endDelay };
      } else {
        return null;
      }
    });

    return timings;
  }
};

// Keyframes for standard selection animation effects.
mixin.standardEffectKeyframes = {

  // Simple crossfade
  crossfade: [{ opacity: 0 }, { opacity: 1 }, { opacity: 0 }],

  // Reveal, as if sliding the top card off a deck of cards
  reveal: [{ transform: 'translateX(0%)', zIndex: 0 }, { transform: 'translateX(0%)', zIndex: 1 }, { transform: 'translateX(-100%)', zIndex: 2 }],

  // Google Photos-style reveal-with-fade animation
  revealWithFade: [{ transform: 'translateX(0%) scale(0.75)', opacity: 0, zIndex: 0 }, { transform: 'translateX(0%) scale(1.0)', opacity: 1, zIndex: 1 }, { transform: 'translateX(-100%) scale(1.0)', opacity: 1, zIndex: 2 }],

  // Carousel variant with a bit of off-stage elements showing
  showAdjacent: [{ transform: 'translateX(78%) scale(0.7)', zIndex: 0 }, { transform: 'translateX(0%) scale(0.82)', zIndex: 1 }, { transform: 'translateX(-78%) scale(0.7)', zIndex: 0 }],

  // Simple slide
  slide: [{ transform: 'translateX(100%)' }, { transform: 'translateX(-100%)' }],

  // Slide, with a gap between
  slideWithGap: [{ transform: 'translateX(110%)' }, { transform: 'translateX(-110%)' }]

};

/*
 * Smoothly animate the selection between the indicated "from" and "to"
 * indices. The former can be a fraction, e.g., when the user releases a finger
 * to complete a touch drag, and the selection will snap to the closest whole
 * index.
 */
function animateSelection(element, fromSelection, toSelection) {

  _resetAnimations(element);

  // Calculate the animation timings.
  var items = element.items;
  var keyframes = element.selectionAnimationKeyframes;
  element[playingAnimationSymbol] = true;
  var timings = mixin.helpers.effectTimingsForSelectionAnimation(element, fromSelection, toSelection);

  // Figure out which item will be the one *after* the one we're selecting.
  var itemCount = items.length;
  var selectionWraps = element.selectionWraps;
  var selectionIndex = _FractionalSelectionMixin2.default.helpers.selectionParts(toSelection, itemCount, selectionWraps).index;
  var totalSteps = stepsToIndex(itemCount, selectionWraps, fromSelection, toSelection);
  var forward = totalSteps >= 0;
  var nextUpIndex = selectionIndex + (forward ? 1 : -1);
  if (selectionWraps) {
    nextUpIndex = _FractionalSelectionMixin2.default.helpers.wrappedSelection(nextUpIndex, itemCount);
  } else if (!isItemIndexInBounds(element, nextUpIndex)) {
    nextUpIndex = null; // At start/end of list; don't have a next item to show.
  }

  // Play the animations using those timings.
  var lastAnimationDetails = void 0;
  timings.forEach(function (timing, index) {
    var item = items[index];
    if (timing) {
      showItem(item, true);
      var animation = item.animate(keyframes, timing);
      element[animationSymbol][index] = animation;
      if (index === nextUpIndex) {
        // This item will be animated, so will already be in the desired state
        // after the animation completes.
        nextUpIndex = null;
      }
      if (timing.endDelay !== 0) {
        // This is the animation for the item that will be left selected.
        // We want to clean up when this animation completes.
        lastAnimationDetails = { animation: animation, index: index, timing: timing, forward: forward };
      }
    } else {
      // This item doesn't participate in the animation.
      showItem(item, false);
    }
  });

  if (lastAnimationDetails != null) {
    // Arrange for clean-up work to be performed.
    lastAnimationDetails.nextUpIndex = nextUpIndex;
    lastAnimationDetails.animation.onfinish = function (event) {
      return selectionAnimationFinished(element, lastAnimationDetails);
    };
    element[lastAnimationSymbol] = lastAnimationDetails.animation;
  } else {
    // Shouldn't happen -- we should always have at least one animation.
    element[playingAnimationSymbol] = false;
  }
}

function getAnimationForItemIndex(element, index) {
  if (element[animationSymbol] == null) {
    // Not ready yet;
    return null;
  }
  var animation = element[animationSymbol][index];
  if (!animation) {
    var item = element.items[index];
    animation = item.animate(element.selectionAnimationKeyframes, {
      duration: element.selectionAnimationDuration,
      fill: 'both'
    });
    animation.pause();
    element[animationSymbol][index] = animation;
  }
  return animation;
}

function isItemIndexInBounds(element, index) {
  return index >= 0 && element.items && index < element.items.length;
}

/*
 * Render the selection state of the element.
 *
 * This can be used to re-render a previous selection state (if the
 * selectedIndex param is omitted), render the selection instantly at a given
 * whole or fractional selection index, or animate to a given selection index.
 *
 * There are several distinct scenarios we need to cover:
 *
 * 1. Initial positioning, or repositioning after changing a property like
 *    selectionAnimationKeyframes that affects rendering.
 * 2. Animate on selectedIndex change. This should override any animation/swipe
 *    already in progress.
 * 3. Instantly render the current position of a drag operation in progress.
 * 4. Complete a drag operation. If the drag wasn't far enough to affect
 *    selection, we'll just be restoring the selectedFraction to 0.
 *
 * If the list does not wrap, any selection position outside the list's bounds
 * will be damped to produce a visual effect of tension.
 */
function renderSelection(element) {
  var selectedIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : element.selectedIndex;
  var selectedFraction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : element.selectedFraction;

  var itemCount = element.items ? element.items.length : 0;
  if (itemCount === 0) {
    // Nothing to render.
    return;
  }
  if (selectedIndex < 0) {
    // TODO: Handle no selection.
    return;
  }
  var selection = selectedIndex + selectedFraction;
  if (element.selectionWraps) {
    // Apply wrapping to ensure consistent representation of selection.
    selection = _FractionalSelectionMixin2.default.helpers.wrappedSelection(selection, itemCount);
  } else {
    // Apply damping if necessary.
    selection = _FractionalSelectionMixin2.default.helpers.dampedSelection(selection, itemCount);
  }
  var previousSelection = element[previousSelectionSymbol];
  // TODO: If an item changes position in the DOM, we end up animating from
  // its old index to its new index, but we really don't want to animate at all.
  if (!element[_symbols2.default.dragging] && previousSelection != null && previousSelection !== selection) {
    // Animate selection from previous state to new state.
    animateSelection(element, previousSelection, selection);
  } else if (selectedFraction === 0 && element[playingAnimationSymbol]) {
    // Already in process of animating to fraction 0. During that process,
    // ignore subsequent attempts to renderSelection to fraction 0.
    return;
  } else {
    // Render current selection state instantly.
    renderSelectionInstantly(element, selection);
  }
  element[previousSelectionSymbol] = selection;
}

/*
 * Instantly render (don't animate) the element's items at the given whole or
 * fractional selection index.
 */
function renderSelectionInstantly(element, toSelection) {
  if (element[resetAnimationsOnNextRenderSymbol]) {
    _resetAnimations(element);
    element[resetAnimationsOnNextRenderSymbol] = false;
  }
  var animationFractions = mixin.helpers.animationFractionsForSelection(element, toSelection);
  animationFractions.map(function (animationFraction, index) {
    var item = element.items[index];
    if (animationFraction != null) {
      showItem(item, true);
      setAnimationFraction(element, index, animationFraction);
    } else {
      showItem(item, false);
    }
  });
}

/*
 * We maintain an array containing an animation per item. This is used for two
 * reasons:
 *
 * * During a drag operation, we want to be able to reuse animations between
 *   drag updates.
 * * When a selection animation completes, we need to be able to leave the
 *   visibile items in a paused state. Later, we'll want to be able to clean up
 *   those animations.
 *
 * Note that this array is sparse: it will only hold up from 0–3 animations at
 * any given point.
 */
function _resetAnimations(element) {
  var animations = element[animationSymbol];
  if (animations) {
    // Cancel existing animations to remove the effects they're applying.
    animations.forEach(function (animation, index) {
      if (animation) {
        animation.cancel();
        animations[index] = null;
      }
    });
  }
  var itemCount = element.items ? element.items.length : 0;
  if (!animations || animations.length !== itemCount) {
    // Haven't animated before with this number of items; (re)create array.
    element[animationSymbol] = new Array(itemCount);
  }
}

/*
 * The last animation in our selection animation has completed. Clean up.
 */
function selectionAnimationFinished(element, details) {

  // When the last animation completes, show the next item in the direction
  // we're going. Waiting to that until this point is a bit of a hack to avoid
  // having a next item that's higher in the natural z-order obscure other items
  // during animation.
  var nextUpIndex = details.nextUpIndex;
  if (nextUpIndex != null) {
    if (element[animationSymbol][nextUpIndex]) {
      // Cancel existing selection animation so we can construct a new one.
      element[animationSymbol][nextUpIndex].cancel();
      element[animationSymbol][nextUpIndex] = null;
    }
    var animationFraction = details.forward ? 0 : 1;
    setAnimationFraction(element, nextUpIndex, animationFraction);
    showItem(element.items[nextUpIndex], true);
  }

  element[lastAnimationSymbol].onfinish = null;
  element[playingAnimationSymbol] = false;
}

/*
 * Pause the indicated animation and have it show the animation at the given
 * fraction (between 0 and 1) of the way through the animation.
 */
function setAnimationFraction(element, itemIndex, fraction) {
  var animation = getAnimationForItemIndex(element, itemIndex);
  if (animation) {
    var duration = element.selectionAnimationDuration;
    if (duration) {
      animation.currentTime = fraction * duration;
    }
  }
}

function showItem(item, flag) {
  item.style.visibility = flag ? 'visible' : 'hidden';
}

/*
 * Figure out how many steps it will take to go from fromSelection to
 * toSelection. To go from item 3 to item 4 is one step.
 *
 * If wrapping is allowed, then going from the last item to the first will take
 * one step (forward), and going from the first item to the last will take one
 * step (backward).
 */
function stepsToIndex(length, allowWrap, fromSelection, toSelection) {
  var steps = toSelection - fromSelection;
  // Wrapping only kicks in when list has more than 1 item.
  if (allowWrap && length > 1) {
    var wrapSteps = length - Math.abs(steps);
    if (wrapSteps <= 1) {
      // Special case
      steps = steps < 0 ? wrapSteps : // Wrap forward from last item to first.
      -wrapSteps; // Wrap backward from first item to last.
    }
  }
  return steps;
}

},{"./FractionalSelectionMixin":18,"./createSymbol":38,"./symbols":42}],29:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _symbols = require('./symbols');

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Used to assign unique IDs to item elements without IDs.
var idCount = 0;

/* Exported function extends a base class with SelectionAriaActive. */

exports.default = function (base) {

  /**
   * Mixin which treats the selected item in a list as the active item in ARIA
   * accessibility terms.
   *
   * Handling ARIA selection state properly is actually quite complex:
   *
   * * The items in the list need to be indicated as possible items via an ARIA
   *   `role` attribute value such as "option".
   * * The selected item need to be marked as selected by setting the item's
   *   `aria-selected` attribute to true *and* the other items need be marked as
   *   *not* selected by setting `aria-selected` to false.
   * * The outermost element with the keyboard focus needs to have attributes
   *   set on it so that the selection is knowable at the list level via the
   *   `aria-activedescendant` attribute.
   * * Use of `aria-activedescendant` in turn requires that all items in the
   *   list have ID attributes assigned to them.
   *
   * This mixin tries to address all of the above requirements. To that end,
   * this mixin will assign generated IDs to any item that doesn't already have
   * an ID.
   *
   * ARIA relies on elements to provide `role` attributes. This mixin will apply
   * a default role of "listbox" on the outer list if it doesn't already have an
   * explicit role. Similarly, this mixin will apply a default role of "option"
   * to any list item that does not already have a role specified.
   *
   * This mixin expects a set of members that manage the state of the selection:
   * `[symbols.itemSelected]`, `itemAdded`, and `selectedIndex`. You can
   * supply these yourself, or do so via
   * [SingleSelectionMixin](SingleSelectionMixin.md).
   */
  var SelectionAriaActive = function (_base) {
    _inherits(SelectionAriaActive, _base);

    function SelectionAriaActive() {
      _classCallCheck(this, SelectionAriaActive);

      return _possibleConstructorReturn(this, (SelectionAriaActive.__proto__ || Object.getPrototypeOf(SelectionAriaActive)).apply(this, arguments));
    }

    _createClass(SelectionAriaActive, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        if (_get(SelectionAriaActive.prototype.__proto__ || Object.getPrototypeOf(SelectionAriaActive.prototype), 'connectedCallback', this)) {
          _get(SelectionAriaActive.prototype.__proto__ || Object.getPrototypeOf(SelectionAriaActive.prototype), 'connectedCallback', this).call(this);
        }
        // Set default ARIA role.
        if (this.getAttribute('role') == null && this[_symbols2.default.defaults].role) {
          this.setAttribute('role', this[_symbols2.default.defaults].role);
        }
      }
    }, {
      key: _symbols2.default.itemAdded,
      value: function value(item) {
        if (_get(SelectionAriaActive.prototype.__proto__ || Object.getPrototypeOf(SelectionAriaActive.prototype), _symbols2.default.itemAdded, this)) {
          _get(SelectionAriaActive.prototype.__proto__ || Object.getPrototypeOf(SelectionAriaActive.prototype), _symbols2.default.itemAdded, this).call(this, item);
        }

        if (!item.getAttribute('role')) {
          // Assign a default ARIA role.
          item.setAttribute('role', 'option');
        }

        // Ensure each item has an ID so we can set aria-activedescendant on the
        // overall list whenever the selection changes.
        //
        // The ID will take the form of a base ID plus a unique integer. The base
        // ID will be incorporate the component's own ID. E.g., if a component has
        // ID "foo", then its items will have IDs that look like "_fooOption1". If
        // the compnent has no ID itself, its items will get IDs that look like
        // "_option1". Item IDs are prefixed with an underscore to differentiate
        // them from manually-assigned IDs, and to minimize the potential for ID
        // conflicts.
        if (!item.id) {
          var baseId = this.id ? "_" + this.id + "Option" : "_option";
          item.id = baseId + idCount++;
        }
      }
    }, {
      key: _symbols2.default.itemSelected,
      value: function value(item, selected) {
        if (_get(SelectionAriaActive.prototype.__proto__ || Object.getPrototypeOf(SelectionAriaActive.prototype), _symbols2.default.itemSelected, this)) {
          _get(SelectionAriaActive.prototype.__proto__ || Object.getPrototypeOf(SelectionAriaActive.prototype), _symbols2.default.itemSelected, this).call(this, item, selected);
        }
        item.setAttribute('aria-selected', selected);
        var itemId = item.id;
        if (itemId && selected) {
          this.setAttribute('aria-activedescendant', itemId);
        }
      }
    }, {
      key: _symbols2.default.defaults,
      get: function get() {
        var defaults = _get(SelectionAriaActive.prototype.__proto__ || Object.getPrototypeOf(SelectionAriaActive.prototype), _symbols2.default.defaults, this) || {};
        defaults.role = 'listbox';
        return defaults;
      }
    }, {
      key: 'selectedItem',
      get: function get() {
        return _get(SelectionAriaActive.prototype.__proto__ || Object.getPrototypeOf(SelectionAriaActive.prototype), 'selectedItem', this);
      },
      set: function set(item) {
        if ('selectedItem' in base.prototype) {
          _set(SelectionAriaActive.prototype.__proto__ || Object.getPrototypeOf(SelectionAriaActive.prototype), 'selectedItem', item, this);
        }
        if (item == null) {
          // Selection was removed.
          this.removeAttribute('aria-activedescendant');
        }
      }
    }]);

    return SelectionAriaActive;
  }(base);

  return SelectionAriaActive;
};

},{"./symbols":42}],30:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _symbols = require('../src/symbols');

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Exported function extends a base class with SelectionHighlight. */
exports.default = function (base) {

  /**
   * Template mixin which applies standard highlight colors to a selected item.
   *
   * This mixin highlights textual items (e.g., in a list) in a standard way by
   * using the CSS `highlight` and `highlighttext` color values. These values
   * respect operating system defaults and user preferences, and hence are good
   * default values for highlight colors.
   *
   * This mixin expects a `selected` class to be applied to selected items. You
   * can use [ContentItemsMixin](ContentItemsMixin.md) for that purpose.
   */
  var SelectionHighlight = function (_base) {
    _inherits(SelectionHighlight, _base);

    function SelectionHighlight() {
      _classCallCheck(this, SelectionHighlight);

      return _possibleConstructorReturn(this, (SelectionHighlight.__proto__ || Object.getPrototypeOf(SelectionHighlight)).apply(this, arguments));
    }

    _createClass(SelectionHighlight, [{
      key: _symbols2.default.template,
      get: function get() {
        var baseTemplate = _get(SelectionHighlight.prototype.__proto__ || Object.getPrototypeOf(SelectionHighlight.prototype), _symbols2.default.template, this) || '';
        return '\n        <style>\n          :host([generic=""]) ::slotted(.selected) {\n            background-color: highlight;\n            color: highlighttext;\n          }\n        </style>\n        ' + baseTemplate + '\n      ';
      }
    }]);

    return SelectionHighlight;
  }(base);

  return SelectionHighlight;
};

},{"../src/symbols":42}],31:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Exported function extends a base class with SelectionInView. */
exports.default = function (base) {

  /**
   * Mixin which scrolls a container to ensure that a newly-selected item is
   * visible to the user.
   *
   * When the selected item in a list-like component changes, it's easier for
   * the to confirm that the selection has changed to an appropriate item if the
   * user can actually see that item.
   *
   * This mixin expects a `selectedItem` property to be set when the selection
   * changes. You can supply that yourself, or use
   * [SingleSelectionMixin](SingleSelectionMixin.md).
   */
  var SelectionInView = function (_base) {
    _inherits(SelectionInView, _base);

    function SelectionInView() {
      _classCallCheck(this, SelectionInView);

      return _possibleConstructorReturn(this, (SelectionInView.__proto__ || Object.getPrototypeOf(SelectionInView)).apply(this, arguments));
    }

    _createClass(SelectionInView, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        if (_get(SelectionInView.prototype.__proto__ || Object.getPrototypeOf(SelectionInView.prototype), 'connectedCallback', this)) {
          _get(SelectionInView.prototype.__proto__ || Object.getPrototypeOf(SelectionInView.prototype), 'connectedCallback', this).call(this);
        }
        var selectedItem = this.selectedItem;
        if (selectedItem) {
          this.scrollItemIntoView(selectedItem);
        }
      }
    }, {
      key: 'scrollItemIntoView',


      /**
       * Scroll the given element completely into view, minimizing the degree of
       * scrolling performed.
       *
       * Blink has a `scrollIntoViewIfNeeded()` function that does something
       * similar, but unfortunately it's non-standard, and in any event often ends
       * up scrolling more than is absolutely necessary.
       *
       * @param {HTMLElement} item - the item to scroll into view.
       */
      value: function scrollItemIntoView(item) {
        if (_get(SelectionInView.prototype.__proto__ || Object.getPrototypeOf(SelectionInView.prototype), 'scrollItemIntoView', this)) {
          _get(SelectionInView.prototype.__proto__ || Object.getPrototypeOf(SelectionInView.prototype), 'scrollItemIntoView', this).call(this);
        }
        // Get the relative position of the item with respect to the top of the
        // list's scrollable canvas. An item at the top of the list will have a
        // elementTop of 0.

        var scrollTarget = this.scrollTarget;
        var elementTop = item.offsetTop - scrollTarget.offsetTop - scrollTarget.clientTop;
        var elementBottom = elementTop + item.offsetHeight;
        // Determine the bottom of the scrollable canvas.
        var scrollBottom = scrollTarget.scrollTop + scrollTarget.clientHeight;
        if (elementBottom > scrollBottom) {
          // Scroll up until item is entirely visible.
          scrollTarget.scrollTop += elementBottom - scrollBottom;
        } else if (elementTop < scrollTarget.scrollTop) {
          // Scroll down until item is entirely visible.
          scrollTarget.scrollTop = elementTop;
        }
      }

      /**
       * The element that should be scrolled to bring an item into view.
       *
       * The default value of this property is the element itself.
       *
       * @type {HTMLElement}
       */

    }, {
      key: 'selectedItem',
      get: function get() {
        return _get(SelectionInView.prototype.__proto__ || Object.getPrototypeOf(SelectionInView.prototype), 'selectedItem', this);
      },
      set: function set(item) {
        if ('selectedItem' in base.prototype) {
          _set(SelectionInView.prototype.__proto__ || Object.getPrototypeOf(SelectionInView.prototype), 'selectedItem', item, this);
        }
        if (item) {
          // Keep the selected item in view.
          this.scrollItemIntoView(item);
        }
      }
    }, {
      key: 'scrollTarget',
      get: function get() {
        // Prefer base result.
        return 'scrollTarget' in base.prototype ? _get(SelectionInView.prototype.__proto__ || Object.getPrototypeOf(SelectionInView.prototype), 'scrollTarget', this) : this;
      },
      set: function set(element) {
        if ('scrollTarget' in base.prototype) {
          _set(SelectionInView.prototype.__proto__ || Object.getPrototypeOf(SelectionInView.prototype), 'scrollTarget', element, this);
        }
      }
    }]);

    return SelectionInView;
  }(base);

  return SelectionInView;
};

},{}],32:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Exported function extends a base class with ShadowElementReferences. */
exports.default = function (base) {

  /**
   * Mixin to create references to elements in a component's Shadow DOM subtree.
   *
   * This adds a member on the component called `this.$` that can be used to
   * reference shadow elements with IDs. E.g., if component's shadow contains an
   * element `<button id="foo">`, then this mixin will create a member
   * `this.$.foo` that points to that button.
   *
   * Such references simplify a component's access to its own elements. In
   * exchange, this mixin trades off a one-time cost of querying all elements in
   * the shadow tree instead of paying an ongoing cost to query for an element
   * each time the component wants to inspect or manipulate it.
   *
   * This mixin expects the component to define a Shadow DOM subtree. You can
   * create that tree yourself, or make use of
   * [ShadowTemplateMixin](ShadowTemplateMixin.md).
   *
   * This mixin is inspired by Polymer's [automatic
   * node finding](https://www.polymer-project.org/1.0/docs/devguide/local-dom.html#node-finding)
   * feature.
   */
  var ShadowElementReferences = function (_base) {
    _inherits(ShadowElementReferences, _base);

    function ShadowElementReferences() {
      _classCallCheck(this, ShadowElementReferences);

      var _this = _possibleConstructorReturn(this, (ShadowElementReferences.__proto__ || Object.getPrototypeOf(ShadowElementReferences)).call(this));

      if (_this.shadowRoot) {
        // Look for elements in the shadow subtree that have id attributes.
        // An alternatively implementation of this mixin would be to just define
        // a this.$ getter that lazily does this search the first time someone
        // tries to access this.$. That might introduce some complexity – if the
        // the tree changed after it was first populated, the result of
        // searching for a node might be somewhat unpredictable.
        _this.$ = {};
        var nodesWithIds = _this.shadowRoot.querySelectorAll('[id]');
        [].forEach.call(nodesWithIds, function (node) {
          var id = node.getAttribute('id');
          _this.$[id] = node;
        });
      }
      return _this;
    }

    /**
     * The collection of references to the elements with IDs in a component's
     * Shadow DOM subtree.
     *
     * @type {object}
     * @member $
     */


    return ShadowElementReferences;
  }(base);

  return ShadowElementReferences;
};

},{}],33:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _symbols = require('../src/symbols');

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Exported function extends a base class with ShadowTemplate. */
exports.default = function (base) {

  /**
   * Mixin for stamping a template into a Shadow DOM subtree upon component
   * instantiation.
   *
   * To use this mixin, define a `template` property as a string or HTML
   * `<template>` element:
   *
   *     class MyElement extends ShadowTemplateMixin(HTMLElement) {
   *       get [symbols.template]() {
   *         return `Hello, <em>world</em>.`;
   *       }
   *     }
   *
   * When your component class is instantiated, a shadow root will be created on
   * the instance, and the contents of the template will be cloned into the
   * shadow root. If your component does not define a `template` property, this
   * mixin has no effect.
   *
   * For the time being, this extension retains support for Shadow DOM v0. That
   * will eventually be deprecated as browsers (and the Shadow DOM polyfill)
   * implement Shadow DOM v1.
   */
  var ShadowTemplate = function (_base) {
    _inherits(ShadowTemplate, _base);

    /*
     * If the component defines a template, a shadow root will be created on the
     * component instance, and the template stamped into it.
     */
    function ShadowTemplate() {
      _classCallCheck(this, ShadowTemplate);

      var _this = _possibleConstructorReturn(this, (ShadowTemplate.__proto__ || Object.getPrototypeOf(ShadowTemplate)).call(this));

      var template = _this[_symbols2.default.template];
      // TODO: Save the processed template with the component's class prototype
      // so it doesn't need to be processed with every instantiation.
      if (template) {

        if (typeof template === 'string') {
          // Upgrade plain string to real template.
          template = createTemplateWithInnerHTML(template);
        }

        if (window.ShadowDOMPolyfill) {
          shimTemplateStyles(template, _this.localName);
        }

        var root = _this.attachShadow({ mode: 'open' });
        var clone = document.importNode(template.content, true);
        root.appendChild(clone);
      }
      return _this;
    }

    return ShadowTemplate;
  }(base);

  return ShadowTemplate;
};

// Convert a plain string of HTML into a real template element.


function createTemplateWithInnerHTML(innerHTML) {
  var template = document.createElement('template');
  // REVIEW: Is there an easier way to do this?
  // We'd like to just set innerHTML on the template content, but since it's
  // a DocumentFragment, that doesn't work.
  var div = document.createElement('div');
  div.innerHTML = innerHTML;
  while (div.childNodes.length > 0) {
    template.content.appendChild(div.childNodes[0]);
  }
  return template;
}

// Invoke basic style shimming with ShadowCSS.
function shimTemplateStyles(template, tag) {
  window.WebComponents.ShadowCSS.shimStyling(template.content, tag);
}

},{"../src/symbols":42}],34:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _createSymbol = require('./createSymbol');

var _createSymbol2 = _interopRequireDefault(_createSymbol);

var _symbols = require('./symbols');

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Symbols for private data members on an element.
var canSelectNextSymbol = (0, _createSymbol2.default)('canSelectNext');
var canSelectPreviousSymbol = (0, _createSymbol2.default)('canSelectPrevious');
var selectionRequiredSymbol = (0, _createSymbol2.default)('selectionRequired');
var selectionWrapsSymbol = (0, _createSymbol2.default)('selectionWraps');

// We want to expose both selectedIndex and selectedItem as independent
// properties but keep them in sync. This allows a component user to reference
// the selection by whatever means is most natural for their situation.
//
// To efficiently keep these properties in sync, we track "external" and
// "internal" references for each property:
//
// The external index or item is the one we report to the outside world when
// asked for selection.  When handling a change to index or item, we update the
// external reference as soon as possible, so that if anyone immediately asks
// for the current selection, they will receive a stable answer.
//
// The internal index or item tracks whichever index or item last received the
// full set of processing. Processing includes raising a change event for the
// new value. Once we've begun that processing, we store the new value as the
// internal value to indicate we've handled it.
//
var externalSelectedIndexSymbol = (0, _createSymbol2.default)('externalSelectedIndex');
var externalSelectedItemSymbol = (0, _createSymbol2.default)('externalSelectedItem');
var internalSelectedIndexSymbol = (0, _createSymbol2.default)('internalSelectedIndex');
var internalSelectedItemSymbol = (0, _createSymbol2.default)('internalSelectedItem');

/* Exported function extends a base class with SingleSelection. */

exports.default = function (base) {

  /**
   * Mixin which manages single-selection semantics for items in a list.
   *
   * This mixin expects a component to provide an `items` Array or NodeList of
   * all elements in the list. A standard way to do that with is the
   * [ContentItemsMixin](ContentItemsMixin.md), which takes a component's
   * content (typically its distributed children) as the set of list items; see
   * that mixin for details.
   *
   * This mixin tracks a single selected item in the list, and provides means to
   * get and set that state by item position (`selectedIndex`) or item identity
   * (`selectedItem`). The selection can be moved in the list via the methods
   * `selectFirst`, `selectLast`, `selectNext`, and `selectPrevious`.
   *
   * This mixin does not produce any user-visible effects to represent
   * selection. Other mixins, such as
   * [SelectionAriaActiveMixin](SelectionAriaActiveMixin.md),
   * [SelectionHighlightMixin](SelectionHighlightMixin.md) and
   * [SelectionInViewMixin](SelectionInViewMixin.md), modify the selected item
   * in common ways to let the user know a given item is selected or not
   * selected.
   */
  var SingleSelection = function (_base) {
    _inherits(SingleSelection, _base);

    function SingleSelection() {
      _classCallCheck(this, SingleSelection);

      // Set defaults.
      var _this = _possibleConstructorReturn(this, (SingleSelection.__proto__ || Object.getPrototypeOf(SingleSelection)).call(this));

      if (typeof _this.selectionRequired === 'undefined') {
        _this.selectionRequired = _this[_symbols2.default.defaults].selectionRequired;
      }
      if (typeof _this.selectionWraps === 'undefined') {
        _this.selectionWraps = _this[_symbols2.default.defaults].selectionWraps;
      }
      return _this;
    }

    /**
     * True if the selection can be moved to the next item, false if not (the
     * selected item is the last item in the list).
     *
     * @type {boolean}
     */


    _createClass(SingleSelection, [{
      key: _symbols2.default.itemAdded,


      /**
       * Handle a new item being added to the list.
       *
       * The default implementation of this method simply sets the item's
       * selection state to false.
       *
       * @param {HTMLElement} item - the item being added
       */
      value: function value(item) {
        if (_get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), _symbols2.default.itemAdded, this)) {
          _get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), _symbols2.default.itemAdded, this).call(this, item);
        }
        this[_symbols2.default.itemSelected](item, item === this.selectedItem);
      }
    }, {
      key: _symbols2.default.itemsChanged,
      value: function value() {
        if (_get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), _symbols2.default.itemsChanged, this)) {
          _get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), _symbols2.default.itemsChanged, this).call(this);
        }

        // In case selected item changed position or was removed.
        trackSelectedItem(this);

        // In case the change in items affected which navigations are possible.
        updatePossibleNavigations(this);
      }

      /**
       * Apply the indicate selection state to the item.
       *
       * The default implementation of this method does nothing. User-visible
       * effects will typically be handled by other mixins.
       *
       * @param {HTMLElement} item - the item being selected/deselected
       * @param {boolean} selected - true if the item is selected, false if not
       */

    }, {
      key: _symbols2.default.itemSelected,
      value: function value(item, selected) {
        if (_get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), _symbols2.default.itemSelected, this)) {
          _get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), _symbols2.default.itemSelected, this).call(this, item, selected);
        }
      }

      /**
       * The index of the item which is currently selected.
       *
       * A `selectedIndex` of -1 indicates there is no selection. Setting this
       * property to -1 will remove any existing selection.
       *
       * @type {number}
       */

    }, {
      key: 'selectFirst',


      /**
       * Select the first item in the list.
       */
      value: function selectFirst() {
        if (_get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'selectFirst', this)) {
          _get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'selectFirst', this).call(this);
        }
        return selectIndex(this, 0);
      }

      /**
       * True if the list should always have a selection (if it has items).
       *
       * @type {boolean}
       * @default false
       */

    }, {
      key: 'selectLast',


      /**
       * Select the last item in the list.
       */
      value: function selectLast() {
        if (_get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'selectLast', this)) {
          _get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'selectLast', this).call(this);
        }
        return selectIndex(this, this.items.length - 1);
      }

      /**
       * Select the next item in the list.
       */

    }, {
      key: 'selectNext',
      value: function selectNext() {
        if (_get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'selectNext', this)) {
          _get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'selectNext', this).call(this);
        }
        return selectIndex(this, this.selectedIndex + 1);
      }

      /**
       * Select the previous item in the list.
       *
       * If the list has no selection, the last item will be selected.
       */

    }, {
      key: 'selectPrevious',
      value: function selectPrevious() {
        if (_get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'selectPrevious', this)) {
          _get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'selectPrevious', this).call(this);
        }
        var newIndex = this.selectedIndex < 0 ? this.items.length - 1 : // No selection yet; select last item.
        this.selectedIndex - 1;
        return selectIndex(this, newIndex);
      }

      /**
       * Fires when the selectedItem property changes.
       *
       * @memberof SingleSelection
       * @event selected-item-changed
       * @param {HTMLElement} detail.selectedItem The new selected item.
       * @param {HTMLElement} detail.previousItem The previously selected item.
       */

      /**
       * Fires when the selectedIndex property changes.
       *
       * @memberof SingleSelection
       * @event selected-index-changed
       * @param {number} detail.selectedIndex The new selected index.
       */

    }, {
      key: 'canSelectNext',
      get: function get() {
        return this[canSelectNextSymbol];
      },
      set: function set(canSelectNext) {
        var previousCanSelectNext = this[canSelectNextSymbol];
        this[canSelectNextSymbol] = canSelectNext;
        if ('canSelectNext' in base.prototype) {
          _set(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'canSelectNext', canSelectNext, this);
        }
        if (canSelectNext !== previousCanSelectNext) {
          this.dispatchEvent(new CustomEvent('can-select-next-changed'));
        }
      }

      /**
       * True if the selection can be moved to the previous item, false if not
       * (the selected item is the first one in the list).
       *
       * @type {boolean}
       */

    }, {
      key: 'canSelectPrevious',
      get: function get() {
        return this[canSelectPreviousSymbol];
      },
      set: function set(canSelectPrevious) {
        var previousCanSelectPrevious = this[canSelectPreviousSymbol];
        this[canSelectPreviousSymbol] = canSelectPrevious;
        if ('canSelectPrevious' in base.prototype) {
          _set(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'canSelectPrevious', canSelectPrevious, this);
        }
        if (canSelectPrevious !== previousCanSelectPrevious) {
          this.dispatchEvent(new CustomEvent('can-select-previous-changed'));
        }
      }
    }, {
      key: _symbols2.default.defaults,
      get: function get() {
        var defaults = _get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), _symbols2.default.defaults, this) || {};
        defaults.selectionRequired = false;
        defaults.selectionWraps = false;
        return defaults;
      }
    }, {
      key: 'selectedIndex',
      get: function get() {
        return this[externalSelectedIndexSymbol] != null ? this[externalSelectedIndexSymbol] : -1;
      },
      set: function set(index) {
        // See notes at top about internal vs. external copies of this property.
        var previousSelectedIndex = this[internalSelectedIndexSymbol];
        var item = void 0;
        if (index !== this[externalSelectedIndexSymbol]) {
          // Store the new index and the corresponding item.
          var items = this.items;
          var hasItems = items && items.length > 0;
          if (!(hasItems && index >= 0 && index < items.length)) {
            index = -1; // No item at that index.
          }
          this[externalSelectedIndexSymbol] = index;
          item = hasItems && index >= 0 ? items[index] : null;
          this[externalSelectedItemSymbol] = item;
        } else {
          item = this[externalSelectedItemSymbol];
        }

        // Now let super do any work.
        if ('selectedIndex' in base.prototype) {
          _set(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'selectedIndex', index, this);
        }

        if (index !== previousSelectedIndex) {
          // The selected index changed.
          this[internalSelectedIndexSymbol] = index;

          var event = new CustomEvent('selected-index-changed', {
            detail: {
              selectedIndex: index,
              value: index // for Polymer binding. TODO: Verify still necessary
            }
          });
          this.dispatchEvent(event);
        }

        if (this[internalSelectedItemSymbol] !== item) {
          // Update selectedItem property so it can have its own effects.
          this.selectedItem = item;
        }
      }

      /**
       * The currently selected item, or null if there is no selection.
       *
       * Setting this property to null deselects any currently-selected item.
       * Setting this property to an object that is not in the list has no effect.
       *
       * TODO: Even if selectionRequired, can still explicitly set selectedItem to null.
       * TODO: If selectionRequired, leave selection alone?
       *
       * @type {object}
       */

    }, {
      key: 'selectedItem',
      get: function get() {
        return this[externalSelectedItemSymbol] || null;
      },
      set: function set(item) {
        // See notes at top about internal vs. external copies of this property.
        var previousSelectedItem = this[internalSelectedItemSymbol];
        var index = void 0;
        if (item !== this[externalSelectedItemSymbol]) {
          // Store item and look up corresponding index.
          var items = this.items;
          var hasItems = items && items.length > 0;
          index = hasItems ? Array.prototype.indexOf.call(items, item) : -1;
          this[externalSelectedIndexSymbol] = index;
          if (index < 0) {
            item = null; // The indicated item isn't actually in `items`.
          }
          this[externalSelectedItemSymbol] = item;
        } else {
          index = this[externalSelectedIndexSymbol];
        }

        // Now let super do any work.
        if ('selectedItem' in base.prototype) {
          _set(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'selectedItem', item, this);
        }

        if (item !== previousSelectedItem) {
          // The selected item changed.
          this[internalSelectedItemSymbol] = item;

          if (previousSelectedItem) {
            // Update selection state of old item.
            this[_symbols2.default.itemSelected](previousSelectedItem, false);
          }
          if (item) {
            // Update selection state to new item.
            this[_symbols2.default.itemSelected](item, true);
          }

          updatePossibleNavigations(this);

          var event = new CustomEvent('selected-item-changed', {
            detail: {
              selectedItem: item,
              value: item // for Polymer binding
            }
          });
          this.dispatchEvent(event);
        }

        if (this[internalSelectedIndexSymbol] !== index) {
          // Update selectedIndex property so it can have its own effects.
          this.selectedIndex = index;
        }
      }
    }, {
      key: 'selectionRequired',
      get: function get() {
        return this[selectionRequiredSymbol];
      },
      set: function set(selectionRequired) {
        this[selectionRequiredSymbol] = selectionRequired;
        if ('selectionRequired' in base.prototype) {
          _set(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'selectionRequired', selectionRequired, this);
        }
        trackSelectedItem(this);
      }

      /**
       * True if selection navigations wrap from last to first, and vice versa.
       *
       * @type {boolean}
       * @default false
       */

    }, {
      key: 'selectionWraps',
      get: function get() {
        return this[selectionWrapsSymbol];
      },
      set: function set(value) {
        this[selectionWrapsSymbol] = String(value) === 'true';
        if ('selectionWraps' in base.prototype) {
          _set(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'selectionWraps', value, this);
        }
        updatePossibleNavigations(this);
      }
    }]);

    return SingleSelection;
  }(base);

  return SingleSelection;
};

// Ensure the given index is within bounds, and select it if it's not already
// selected.


function selectIndex(element, index) {
  var count = element.items.length;

  var boundedIndex = element.selectionWraps ?
  // JavaScript mod doesn't handle negative numbers the way we want to wrap.
  // See http://stackoverflow.com/a/18618250/76472
  (index % count + count) % count :

  // Keep index within bounds of array.
  Math.max(Math.min(index, count - 1), 0);

  var previousIndex = element.selectedIndex;
  if (previousIndex !== boundedIndex) {
    element.selectedIndex = boundedIndex;
    return true;
  } else {
    return false;
  }
}

// Following a change in the set of items, or in the value of the
// `selectionRequired` property, reacquire the selected item. If it's moved,
// update `selectedIndex`. If it's been removed, and a selection is required,
// try to select another item.
function trackSelectedItem(element) {

  var items = element.items;
  var itemCount = items ? items.length : 0;

  var previousSelectedItem = element.selectedItem;
  if (!previousSelectedItem) {
    // No item was previously selected.
    if (element.selectionRequired) {
      // Select the first item by default.
      element.selectedIndex = 0;
    }
  } else if (itemCount === 0) {
    // We've lost the selection, and there's nothing left to select.
    element.selectedItem = null;
  } else {
    // Try to find the previously-selected item in the current set of items.
    var indexInCurrentItems = Array.prototype.indexOf.call(items, previousSelectedItem);
    var previousSelectedIndex = element.selectedIndex;
    if (indexInCurrentItems < 0) {
      // Previously-selected item was removed from the items.
      // Select the item at the same index (if it exists) or as close as possible.
      var newSelectedIndex = Math.min(previousSelectedIndex, itemCount - 1);
      // Select by item, since index may be the same, and we want to raise the
      // selected-item-changed event.
      element.selectedItem = items[newSelectedIndex];
    } else if (indexInCurrentItems !== previousSelectedIndex) {
      // Previously-selected item still there, but changed position.
      element.selectedIndex = indexInCurrentItems;
    }
  }
}

// Following a change in selection, report whether it's now possible to
// go next/previous from the given index.
function updatePossibleNavigations(element) {
  var canSelectNext = void 0;
  var canSelectPrevious = void 0;
  var items = element.items;
  if (items == null || items.length === 0) {
    // No items to select.
    canSelectNext = false;
    canSelectPrevious = false;
  }if (element.selectionWraps) {
    // Since there are items, can always go next/previous.
    canSelectNext = true;
    canSelectPrevious = true;
  } else {
    var index = element.selectedIndex;
    if (index < 0 && items.length > 0) {
      // Special case. If there are items but no selection, declare that it's
      // always possible to go next/previous to create a selection.
      canSelectNext = true;
      canSelectPrevious = true;
    } else {
      // Normal case: we have an index in a list that has items.
      canSelectPrevious = index > 0;
      canSelectNext = index < items.length - 1;
    }
  }
  if (element.canSelectNext !== canSelectNext) {
    element.canSelectNext = canSelectNext;
  }
  if (element.canSelectPrevious !== canSelectPrevious) {
    element.canSelectPrevious = canSelectPrevious;
  }
}

},{"./createSymbol":38,"./symbols":42}],35:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createSymbol = require('./createSymbol');

var _createSymbol2 = _interopRequireDefault(_createSymbol);

var _symbols = require('./symbols');

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Symbols for private data members on an element.
var deltaXSymbol = (0, _createSymbol2.default)('deltaX');
var deltaYSymbol = (0, _createSymbol2.default)('deltaY');
var multiTouchSymbol = (0, _createSymbol2.default)('multiTouch');
var previousXSymbol = (0, _createSymbol2.default)('previousX');
var previousYSymbol = (0, _createSymbol2.default)('previousY');
var startXSymbol = (0, _createSymbol2.default)('startX');
var travelFractionSymbol = (0, _createSymbol2.default)('travelFraction');

/* Exported function extends a base class with SwipeDirection. */

exports.default = function (base) {

  /**
   * Mixin which maps touch gestures (swipe left, swipe right) to direction
   * semantics (go right, go left).
   *
   * By default, this mixin presents no user-visible effects; it just indicates
   * a direction in which the user is currently swiping or has finished swiping.
   * To map the direction to a change in selection, use
   * [DirectionSelectionMixin](DirectionSelectionMixin.md).
   */
  var SwipeDirection = function (_base) {
    _inherits(SwipeDirection, _base);

    function SwipeDirection() {
      _classCallCheck(this, SwipeDirection);

      var _this = _possibleConstructorReturn(this, (SwipeDirection.__proto__ || Object.getPrototypeOf(SwipeDirection)).call(this));

      _this.travelFraction = 0;

      // In all touch events, only handle single touches. We don't want to
      // inadvertently do work when the user's trying to pinch-zoom for example.
      // TODO: Even better approach than below would be to ignore touches after
      // the first if the user has already begun a swipe.
      // TODO: Touch events should probably be factored out into its own mixin.
      if (window.PointerEvent) {
        // Prefer listening to standard pointer events.
        _this.addEventListener('pointerdown', function (event) {
          if (isEventForPenOrPrimaryTouch(event)) {
            touchStart(_this, event.clientX, event.clientY);
          }
        });
        _this.addEventListener('pointermove', function (event) {
          if (isEventForPenOrPrimaryTouch(event)) {
            var handled = touchMove(_this, event.clientX, event.clientY);
            if (handled) {
              event.preventDefault();
            }
          }
        });
        _this.addEventListener('pointerup', function (event) {
          if (isEventForPenOrPrimaryTouch(event)) {
            touchEnd(_this, event.clientX, event.clientY);
          }
        });
      } else {
        // Pointer events not supported -- listen to older touch events.
        _this.addEventListener('touchstart', function (event) {
          if (_this[multiTouchSymbol]) {
            return;
          } else if (event.touches.length === 1) {
            var clientX = event.changedTouches[0].clientX;
            var clientY = event.changedTouches[0].clientY;
            touchStart(_this, clientX, clientY);
          } else {
            _this[multiTouchSymbol] = true;
          }
        });
        _this.addEventListener('touchmove', function (event) {
          if (!_this[multiTouchSymbol] && event.touches.length === 1) {
            var clientX = event.changedTouches[0].clientX;
            var clientY = event.changedTouches[0].clientY;
            var handled = touchMove(_this, clientX, clientY);
            if (handled) {
              event.preventDefault();
            }
          }
        });
        _this.addEventListener('touchend', function (event) {
          if (event.touches.length === 0) {
            // All touches removed; gesture is complete.
            if (!_this[multiTouchSymbol]) {
              // Single-touch swipe has finished.
              var clientX = event.changedTouches[0].clientX;
              var clientY = event.changedTouches[0].clientY;
              touchEnd(_this, clientX, clientY);
            }
            _this[multiTouchSymbol] = false;
          }
        });
      }
      return _this;
    }

    _createClass(SwipeDirection, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        if (_get(SwipeDirection.prototype.__proto__ || Object.getPrototypeOf(SwipeDirection.prototype), 'connectedCallback', this)) {
          _get(SwipeDirection.prototype.__proto__ || Object.getPrototypeOf(SwipeDirection.prototype), 'connectedCallback', this).call(this);
        }

        // For the component to receive PointerEvents in IE/Edge, we need to set
        // touch-action: none. Only make this change if touch-action is currently
        // the default value ("auto"), in case the developer knows better than we
        // do what they want in their particular context.
        if (getComputedStyle(this).touchAction === 'auto') {
          this.style.touchAction = 'none';
        }
      }

      // Default implementation.

    }, {
      key: _symbols2.default.goLeft,


      /**
       * Invoked when the user wants to go/navigate left.
       * The default implementation of this method does nothing.
       */
      value: function value() {
        if (_get(SwipeDirection.prototype.__proto__ || Object.getPrototypeOf(SwipeDirection.prototype), _symbols2.default.goLeft, this)) {
          return _get(SwipeDirection.prototype.__proto__ || Object.getPrototypeOf(SwipeDirection.prototype), _symbols2.default.goLeft, this).call(this);
        }
      }

      /**
       * Invoked when the user wants to go/navigate right.
       * The default implementation of this method does nothing.
       */

    }, {
      key: _symbols2.default.goRight,
      value: function value() {
        if (_get(SwipeDirection.prototype.__proto__ || Object.getPrototypeOf(SwipeDirection.prototype), _symbols2.default.goRight, this)) {
          return _get(SwipeDirection.prototype.__proto__ || Object.getPrototypeOf(SwipeDirection.prototype), _symbols2.default.goRight, this).call(this);
        }
      }

      /**
       * The distance the first touchpoint has traveled since the beginning of a
       * drag, expressed as a fraction of the element's width.
       *
       * @type number
       */

    }, {
      key: _symbols2.default.dragging,
      get: function get() {
        return _get(SwipeDirection.prototype.__proto__ || Object.getPrototypeOf(SwipeDirection.prototype), _symbols2.default.dragging, this);
      },
      set: function set(value) {
        if (_symbols2.default.dragging in base.prototype) {
          _set(SwipeDirection.prototype.__proto__ || Object.getPrototypeOf(SwipeDirection.prototype), _symbols2.default.dragging, value, this);
        }
      }
    }, {
      key: 'travelFraction',
      get: function get() {
        return this[travelFractionSymbol];
      },
      set: function set(value) {
        this[travelFractionSymbol] = value;
        if ('travelFraction' in base.prototype) {
          _set(SwipeDirection.prototype.__proto__ || Object.getPrototypeOf(SwipeDirection.prototype), 'travelFraction', value, this);
        }
      }
    }]);

    return SwipeDirection;
  }(base);

  return SwipeDirection;
};

// Return true if the pointer event is for the pen, or the primary touch point.


function isEventForPenOrPrimaryTouch(event) {
  return event.pointerType === 'pen' || event.pointerType === 'touch' && event.isPrimary;
}

/*
 * Invoked when the user has finished a touch operation.
 */
function touchEnd(element, clientX, clientY) {
  element[_symbols2.default.dragging] = false;
  if (element[deltaXSymbol] >= 20) {
    // Finished going right at high speed.
    element[_symbols2.default.goLeft]();
  } else if (element[deltaXSymbol] <= -20) {
    // Finished going left at high speed.
    element[_symbols2.default.goRight]();
  } else {
    // Finished at low speed.
    trackTo(element, clientX);
    var travelFraction = element.travelFraction;
    if (travelFraction >= 0.5) {
      element[_symbols2.default.goRight]();
    } else if (travelFraction <= -0.5) {
      element[_symbols2.default.goLeft]();
    }
  }
  element.travelFraction = 0;
  element[deltaXSymbol] = null;
  element[deltaYSymbol] = null;
}

/*
 * Invoked when the user has moved during a touch operation.
 */
function touchMove(element, clientX, clientY) {

  element[deltaXSymbol] = clientX - element[previousXSymbol];
  element[deltaYSymbol] = clientY - element[previousYSymbol];
  element[previousXSymbol] = clientX;
  element[previousYSymbol] = clientY;
  if (Math.abs(element[deltaXSymbol]) > Math.abs(element[deltaYSymbol])) {
    // Move was mostly horizontal.
    trackTo(element, clientX);
    // Indicate that the event was handled. It'd be nicer if we didn't have
    // to do this so that, e.g., a user could be swiping left and right
    // while simultaneously scrolling up and down. (Native touch apps can do
    // that.) However, Mobile Safari wants to handle swipe events near the
    // page and interpret them as navigations. To avoid having a horiziontal
    // swipe misintepreted as a navigation, we indicate that we've handled
    // the event, and prevent default behavior.
    return true;
  } else {
    // Move was mostly vertical.
    return false; // Not handled
  }
}

/*
 * Invoked when the user has begun a touch operation.
 */
function touchStart(element, clientX, clientY) {
  element[_symbols2.default.dragging] = true;
  element[startXSymbol] = clientX;
  element[previousXSymbol] = clientX;
  element[previousYSymbol] = clientY;
  element[deltaXSymbol] = 0;
  element[deltaYSymbol] = 0;
}

function trackTo(element, x) {
  var width = element.offsetWidth;
  var dragDistance = element[startXSymbol] - x;
  var fraction = width > 0 ? dragDistance / width : 0;
  element.travelFraction = fraction;
}

},{"./createSymbol":38,"./symbols":42}],36:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createSymbol = require('./createSymbol');

var _createSymbol2 = _interopRequireDefault(_createSymbol);

var _symbols = require('./symbols');

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var playingSymbol = (0, _createSymbol2.default)('playing');
var selectionTimerDurationSymbol = (0, _createSymbol2.default)('selectionTimerDuration');
var timerTimeoutSymbol = (0, _createSymbol2.default)('timerTimeout');

/* Exported function extends a base class with TimerSelection. */

exports.default = function (base) {

  /**
   * Mixin which provides for automatic timed changes in selection.
   *
   * This mixin is useful for creating slideshow-like elements.
   *
   * This mixin expects the component to define an `items` property, as well as
   * `selectFirst` and `selectNext` methods. You can implement those yourself,
   * or use [ContentItemsMixin](ContentItemsMixin.md) and
   * [SingleSelectionMixin](SingleSelectionMixin.md).
   */
  var TimerSelection = function (_base) {
    _inherits(TimerSelection, _base);

    function TimerSelection() {
      _classCallCheck(this, TimerSelection);

      // Set defaults.
      var _this = _possibleConstructorReturn(this, (TimerSelection.__proto__ || Object.getPrototypeOf(TimerSelection)).call(this));

      if (typeof _this.playing === 'undefined') {
        _this.playing = _this[_symbols2.default.defaults].playing;
      }
      if (typeof _this.selectionTimerDuration === 'undefined') {
        _this.selectionTimerDuration = _this[_symbols2.default.defaults].selectionTimerDuration;
      }
      return _this;
    }

    _createClass(TimerSelection, [{
      key: 'contentChanged',
      value: function contentChanged() {
        if (_get(TimerSelection.prototype.__proto__ || Object.getPrototypeOf(TimerSelection.prototype), 'contentChanged', this)) {
          _get(TimerSelection.prototype.__proto__ || Object.getPrototypeOf(TimerSelection.prototype), 'contentChanged', this).call(this);
        }
        restartTimer(this);
      }
    }, {
      key: 'play',


      /**
       * Begin automatic progression of the selection.
       */
      value: function play() {
        if (_get(TimerSelection.prototype.__proto__ || Object.getPrototypeOf(TimerSelection.prototype), 'play', this)) {
          _get(TimerSelection.prototype.__proto__ || Object.getPrototypeOf(TimerSelection.prototype), 'play', this).call(this);
        }
        startTimer(this);
        this[playingSymbol] = true;
      }

      /**
       * Pause automatic progression of the selection.
       */

    }, {
      key: 'pause',
      value: function pause() {
        if (_get(TimerSelection.prototype.__proto__ || Object.getPrototypeOf(TimerSelection.prototype), 'pause', this)) {
          _get(TimerSelection.prototype.__proto__ || Object.getPrototypeOf(TimerSelection.prototype), 'pause', this).call(this);
        }
        clearTimer(this);
        this[playingSymbol] = false;
      }

      /**
       * True if the selection is being automatically advanced.
       *
       * @type {boolean}
       * @default false
       */

    }, {
      key: _symbols2.default.defaults,
      get: function get() {
        var defaults = _get(TimerSelection.prototype.__proto__ || Object.getPrototypeOf(TimerSelection.prototype), _symbols2.default.defaults, this) || {};
        defaults.playing = false;
        defaults.selectionTimerDuration = 1000;
        return defaults;
      }
    }, {
      key: 'playing',
      get: function get() {
        return this[playingSymbol];
      },
      set: function set(playing) {
        var previousPlaying = this[playingSymbol];
        var parsed = String(playing) === 'true'; // Cast to boolean
        if ('playing' in base.prototype) {
          _set(TimerSelection.prototype.__proto__ || Object.getPrototypeOf(TimerSelection.prototype), 'playing', playing, this);
        }
        if (parsed !== previousPlaying) {
          if (playing) {
            this.play();
          } else {
            this.pause();
          }
        }
      }

      /*
       * When the selected item changes (because of something this mixin did, or
       * was changed by an outside agent like the user), we wait before advancing
       * to the next item. By triggering the next item this way, we implicitly get
       * a desirable behavior: if the user changes the selection (e.g., in a
       * carousel), we let them see that selection state for a while before
       * advancing the selection ourselves.
       */

    }, {
      key: 'selectedItem',
      get: function get() {
        return _get(TimerSelection.prototype.__proto__ || Object.getPrototypeOf(TimerSelection.prototype), 'selectedItem', this);
      },
      set: function set(item) {
        if ('selectedItem' in base.prototype) {
          _set(TimerSelection.prototype.__proto__ || Object.getPrototypeOf(TimerSelection.prototype), 'selectedItem', item, this);
        }
        restartTimer(this);
      }

      /**
       * The time in milliseconds that will elapse after the selection changes
       * before the selection will be advanced to the next item in the list.
       *
       * @type {number} - Time in milliseconds
       * @default 1000 (1 second)
       */

    }, {
      key: 'selectionTimerDuration',
      get: function get() {
        return this[selectionTimerDurationSymbol];
      },
      set: function set(value) {
        this[selectionTimerDurationSymbol] = parseInt(value);
        if ('selectionTimerDuration' in base.prototype) {
          _set(TimerSelection.prototype.__proto__ || Object.getPrototypeOf(TimerSelection.prototype), 'selectionTimerDuration', value, this);
        }
      }
    }]);

    return TimerSelection;
  }(base);

  return TimerSelection;
};

function clearTimer(element) {
  if (element[timerTimeoutSymbol]) {
    clearTimeout(element[timerTimeoutSymbol]);
    element[timerTimeoutSymbol] = null;
  }
}

function restartTimer(element) {
  clearTimer(element);
  if (element.playing && element.items && element.items.length > 0) {
    startTimer(element);
  }
}

function startTimer(element) {
  // If play() is called more than once, cancel any existing timer.
  clearTimer(element);
  element[timerTimeoutSymbol] = setTimeout(function () {
    selectNextWithWrap(element);
  }, element.selectionTimerDuration);
}

// Select the next item, wrapping to first item if necessary.
function selectNextWithWrap(element) {
  var items = element.items;
  if (items && items.length > 0) {
    if (element.selectedIndex == null || element.selectedIndex === items.length - 1) {
      element.selectFirst();
    } else {
      element.selectNext();
    }
  }
}

},{"./createSymbol":38,"./symbols":42}],37:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createSymbol = require('../../basic-component-mixins/src/createSymbol');

var _createSymbol2 = _interopRequireDefault(_createSymbol);

var _symbols = require('./symbols');

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Symbols for private data members on an element.
var absorbDecelerationSymbol = (0, _createSymbol2.default)('absorbDeceleration');
var lastDeltaXSymbol = (0, _createSymbol2.default)('lastDeltaX');
var lastWheelTimeoutSymbol = (0, _createSymbol2.default)('lastWheelTimeout');
var postNavigateDelayCompleteSymbol = (0, _createSymbol2.default)('postNavigateDelayComplete');
var wheelDistanceSymbol = (0, _createSymbol2.default)('wheelDistance');

/* Exported function extends a base class with TrackpadDirection. */

exports.default = function (base) {

  /**
   * Mixin which maps a horizontal trackpad swipe gestures (or horizontal mouse
   * wheel actions) to direction semantics.
   *
   * You can use this mixin with a mixin like
   * [DirectionSelectionMixin](DirectionSelectionMixin.md) to let the user
   * change the selection with the trackpad or mouse wheel.
   *
   * To respond to the trackpad, we can listen to the DOM's "wheel" events.
   * These events are fired as the user drags their fingers across a trackpad.
   * Unfortunately, browsers are missing a critical event — there is no event
   * when the user *stops* a gestured on the trackpad or mouse wheel.
   *
   * To make things worse, the mainstream browsers continue to generate fake
   * wheel events even after the user has stopped dragging their fingers. These
   * fake events simulate the user gradually slowing down the drag until they
   * come to a smooth stop. In some contexts, these fake wheel events might be
   * helpful, but in trying to supply typical trackpad swipe navigation, these
   * fake events get in the way.
   *
   * This component uses heuristics to work around these problems, but the
   * complex nature of the problem make it extremely difficult to achieve the
   * same degree of trackpad responsiveness possible with native applications.
   */
  var TrackpadDirection = function (_base) {
    _inherits(TrackpadDirection, _base);

    function TrackpadDirection() {
      _classCallCheck(this, TrackpadDirection);

      var _this = _possibleConstructorReturn(this, (TrackpadDirection.__proto__ || Object.getPrototypeOf(TrackpadDirection)).call(this));

      _this.addEventListener('wheel', function (event) {
        var handled = wheel(_this, event);
        if (handled) {
          event.preventDefault();
        }
      });
      resetWheelTracking(_this);
      return _this;
    }

    // Default implementation.


    _createClass(TrackpadDirection, [{
      key: _symbols2.default.goLeft,


      /**
       * Invoked when the user wants to go/navigate left.
       * The default implementation of this method does nothing.
       */
      value: function value() {
        if (_get(TrackpadDirection.prototype.__proto__ || Object.getPrototypeOf(TrackpadDirection.prototype), _symbols2.default.goLeft, this)) {
          return _get(TrackpadDirection.prototype.__proto__ || Object.getPrototypeOf(TrackpadDirection.prototype), _symbols2.default.goLeft, this).call(this);
        }
      }

      /**
       * Invoked when the user wants to go/navigate right.
       * The default implementation of this method does nothing.
       */

    }, {
      key: _symbols2.default.goRight,
      value: function value() {
        if (_get(TrackpadDirection.prototype.__proto__ || Object.getPrototypeOf(TrackpadDirection.prototype), _symbols2.default.goRight, this)) {
          return _get(TrackpadDirection.prototype.__proto__ || Object.getPrototypeOf(TrackpadDirection.prototype), _symbols2.default.goRight, this).call(this);
        }
      }

      /**
       * The distance the user has moved the first touchpoint since the beginning
       * of a trackpad/wheel operation, expressed as a fraction of the element's
       * width.
       *
       * @type number
       */

    }, {
      key: _symbols2.default.dragging,
      get: function get() {
        return _get(TrackpadDirection.prototype.__proto__ || Object.getPrototypeOf(TrackpadDirection.prototype), _symbols2.default.dragging, this);
      },
      set: function set(value) {
        if (_symbols2.default.dragging in base.prototype) {
          _set(TrackpadDirection.prototype.__proto__ || Object.getPrototypeOf(TrackpadDirection.prototype), _symbols2.default.dragging, value, this);
        }
      }
    }, {
      key: 'travelFraction',
      get: function get() {
        return _get(TrackpadDirection.prototype.__proto__ || Object.getPrototypeOf(TrackpadDirection.prototype), 'travelFraction', this);
      },
      set: function set(value) {
        if ('travelFraction' in base.prototype) {
          _set(TrackpadDirection.prototype.__proto__ || Object.getPrototypeOf(TrackpadDirection.prototype), 'travelFraction', value, this);
        }
      }
    }]);

    return TrackpadDirection;
  }(base);

  return TrackpadDirection;
};

// Time we wait following a navigation before paying attention to wheel
// events again.


var POST_NAVIGATE_TIME = 250;

// Time we wait after the last wheel event before we reset things.
var WHEEL_TIME = 100;

// Following a navigation, partially reset our wheel tracking.
function postNavigate(element) {
  element.travelFraction = 0;
  element[wheelDistanceSymbol] = 0;
  element[postNavigateDelayCompleteSymbol] = true;
  element[absorbDecelerationSymbol] = true;
  setTimeout(function () {
    element[postNavigateDelayCompleteSymbol] = false;
  }, POST_NAVIGATE_TIME);
}

// Reset all state related to the tracking of the wheel.
function resetWheelTracking(element) {
  element.travelFraction = 0;
  element[wheelDistanceSymbol] = 0;
  element[lastDeltaXSymbol] = 0;
  element[absorbDecelerationSymbol] = false;
  element[postNavigateDelayCompleteSymbol] = false;
  if (element[lastWheelTimeoutSymbol]) {
    clearTimeout(element[lastWheelTimeoutSymbol]);
    element[lastWheelTimeoutSymbol] = null;
  }
}

// Define our own sign function, since (as of May 2015), Safari and IE don't
// supply Math.sign().
function sign(x) {
  return x === 0 ? 0 : x > 0 ? 1 : -1;
}

// TODO: Damping, or some other treatment for going past the ends.

/*
 * A wheel event has been generated. This could be a real wheel event, or it
 * could be fake (see notes in the header).
 *
 * This handler uses several strategies to try to approximate native trackpad
 * swipe navigation.
 *
 * If the user has dragged enough to cause a navigation, then for a short
 * delay following that navigation, subsequent wheel events will be ignored.
 *
 * Furthermore, follwowing a navigation, we ignore all wheel events until we
 * receive at least one event where the event's deltaX (distance traveled) is
 * *greater* than the previous event's deltaX. This helps us filter out the
 * fake wheel events generated by the browser to simulate deceleration.
 *
 */
function wheel(element, event) {

  // Since we have a new wheel event, reset our timer waiting for the last
  // wheel event to pass.
  if (element[lastWheelTimeoutSymbol]) {
    clearTimeout(element[lastWheelTimeoutSymbol]);
  }
  element[lastWheelTimeoutSymbol] = setTimeout(function () {
    wheelTimedOut(element);
  }, WHEEL_TIME);

  var deltaX = event.deltaX;
  var deltaY = event.deltaY;

  // See if element event represents acceleration or deceleration.
  var acceleration = sign(deltaX) * (deltaX - element[lastDeltaXSymbol]);
  element[lastDeltaXSymbol] = deltaX;

  if (Math.abs(deltaX) < Math.abs(deltaY)) {
    // Move was mostly vertical. The user may be trying scroll with the
    // trackpad/wheel. To be on the safe, we ignore such events.
    return false;
  }

  if (element[postNavigateDelayCompleteSymbol]) {
    // It's too soon after a navigation; ignore the event.
    return true;
  }

  if (acceleration > 0) {
    // The events are not (or are no longer) decelerating, so we can start
    // paying attention to them again.
    element[absorbDecelerationSymbol] = false;
  } else if (element[absorbDecelerationSymbol]) {
    // The wheel event was likely faked to simulate deceleration; ignore it.
    return true;
  }

  element[wheelDistanceSymbol] += deltaX;

  // Update the travel fraction of the element being navigated.
  var width = element.offsetWidth;
  var travelFraction = width > 0 ? element[wheelDistanceSymbol] / width : 0;
  element[_symbols2.default.dragging] = true;
  travelFraction = sign(travelFraction) * Math.min(Math.abs(travelFraction), 1);
  element.travelFraction = travelFraction;

  // If the user has dragged enough to reach the previous/next item, then
  // complete a navigation to that item.
  if (travelFraction === 1) {
    element[_symbols2.default.dragging] = false;
    element[_symbols2.default.goRight]();
    postNavigate(element);
  } else if (travelFraction === -1) {
    element[_symbols2.default.dragging] = false;
    element[_symbols2.default.goLeft]();
    postNavigate(element);
  }

  return true;
}

// A sufficiently long period of time has passed since the last wheel event.
// We snap the selection to the closest item, then reset our state.
function wheelTimedOut(element) {

  // Snap to the closest item.
  element[_symbols2.default.dragging] = false;
  var travelFraction = element.travelFraction;
  if (travelFraction >= 0.5) {
    element[_symbols2.default.goRight]();
  } else if (travelFraction <= -0.5) {
    element[_symbols2.default.goLeft]();
  }

  // TODO: Listen for the transition to complete, and then restore
  // dragging to false (or the previous value).

  resetWheelTracking(element);
}

},{"../../basic-component-mixins/src/createSymbol":38,"./symbols":42}],38:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createSymbol;
/**
 * Helper function to create a symbol that can be used for associating private
 * data with an element.
 *
 * Mixins and component classes often want to associate private data with an
 * element instance, but JavaScript does not have direct support for true
 * private properties. One approach is to use the
 * [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
 * data type to set and retrieve data on an element.
 *
 * Unfortunately, the Symbol type is not available in Internet Explorer 11. The
 * `createSymbol` helper function exists as a workaround for IE 11. Rather than
 * returning a true Symbol, it simply returns an underscore-prefixed string.
 *
 * Usage:
 *
 *     const fooSymbol = createSymbol('foo');
 *
 *     class MyElement extends HTMLElement {
 *       get foo() {
 *         return this[fooSymbol];
 *       }
 *       set foo(value) {
 *         this[fooSymbol] = value;
 *       }
 *     }
 *
 * In IE 11, this sample will "hide" data behind an instance property this._foo.
 * The use of the underscore is meant to reduce (not eliminate) the potential
 * for name conflicts, and discourage (not prevent) external access to this
 * data. In modern browsers, the above code will eliminate the potential of
 * naming conflicts, and better hide the data behind a real Symbol.
 *
 * @function createSymbol
 * @param {string} description - A string to identify the symbol when debugging
 */
function createSymbol(description) {
  return typeof Symbol === 'function' ? Symbol(description) : '_' + description;
}

},{}],39:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = microtask;
/*
 * Microtask helper for IE 11.
 *
 * Executing a function as a microtask is trivial in browsers that support
 * promises, whose then() clauses use microtask timing. IE 11 doesn't support
 * promises, but does support MutationObservers, which are also executed as
 * microtasks. So this helper uses an MutationObserver to achieve microtask
 * timing.
 *
 * See https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/
 *
 * Inspired by Polymer's async() function.
 */

// The queue of pending callbacks to be executed as microtasks.
var callbacks = [];

// Create an element that we will modify to force observable mutations.
var element = document.createTextNode('');

// A monotonically-increasing value.
var counter = 0;

/**
 * Add a callback to the microtask queue.
 *
 * This uses a MutationObserver so that it works on IE 11.
 *
 * NOTE: IE 11 may actually use timeout timing with MutationObservers. This
 * needs more investigation.
 *
 * @function microtask
 * @param {function} callback
 */
function microtask(callback) {
  callbacks.push(callback);
  // Force a mutation.
  element.textContent = ++counter;
}

// Execute any pending callbacks.
function executeCallbacks() {
  while (callbacks.length > 0) {
    var callback = callbacks.shift();
    callback();
  }
}

// Create the observer.
var observer = new MutationObserver(executeCallbacks);
observer.observe(element, {
  characterData: true
});

},{}],40:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Helper function for rendering an array of items as elements.
 *
 * This is not a mixin, but a function components can use if they need to
 * generate a set of elements for the items in an array.
 *
 * This function will reuse existing elements if possible. E.g., if it is called
 * to render an array of 4 items, and later called to render an array of 5
 * items, it can reuse the existing 4 items, creating just one new element.
 * Note, however, that this re-rendering is not automatic. If, after calling
 * this function, you manipulate the array you used, you must still call this
 * function again to re-render the array.
 *
 * The `renderItem` parameter takes a function of two arguments: an item to
 * to render, and an existing element (if one exists) which can be repurposed to
 * render that item. If the latter argument is null, the `renderItem()` function
 * should create a new element and return it. The function should do the same
 * if the supplied existing element is not suitable for rendering the given
 * item; the returned element will be used to replace the existing one. If the
 * existing element *is* suitable, the function can simply update it and return
 * it as is.
 *
 * Example: The following will render an array of strings in divs as children
 * of the `container` element:
 *
 *     let strings = ['a', 'b', 'c', ...];
 *     let container = this.querySelector(...);
 *     renderArrayAsElements(strings, container, (string, element) => {
 *       if (!element) {
 *         // No element exists yet, so create a new one.
 *         element = document.createElement('div');
 *       }
 *       // Set/update the text content of the element.
 *       element.textContent = string;
 *       return element;
 *     });
 *
 * @param {Array} items - the items to render
 * @param {HTMLElement} container - the parent that will hold the elements
 * @param {function} renderItem - returns a new element for an item, or
 *                                repurposes an existing element for an item
 */
function renderArrayAsElements(items, container, renderItem) {
  // Create a new set of elements for the current items.
  items.forEach(function (item, index) {
    var oldElement = container.childNodes[index];
    var newElement = renderItem(item, oldElement);
    if (newElement) {
      if (!oldElement) {
        container.appendChild(newElement);
      } else if (newElement !== oldElement) {
        container.replaceChild(newElement, oldElement);
      }
    }
  });

  // If the array shrank, remove the extra elements which are no longer needed.
  while (container.childNodes.length > items.length) {
    container.removeChild(container.childNodes[items.length]);
  }
}

exports.default = renderArrayAsElements;

},{}],41:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createSymbol = require('./createSymbol');

var _createSymbol2 = _interopRequireDefault(_createSymbol);

var _toggleClass2 = require('./toggleClass');

var _toggleClass3 = _interopRequireDefault(_toggleClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Symbols for private data members on an element.
var safeToSetAttributesSymbol = (0, _createSymbol2.default)('safeToSetAttributes');
var pendingAttributesSymbol = (0, _createSymbol2.default)('pendingAttributes');
var pendingClassesSymbol = (0, _createSymbol2.default)('pendingClasses');

/**
 * Helper functions for updating attributes, including the `class` attribute.
 */
exports.default = {

  /**
   * Perform any pending updates to attributes and classes.
   *
   * This writes any `setAttribute` or `toggleClass` values that were performed
   * before an element was attached to the document for the first time.
   *
   * This method should be called by mixins/components in their
   * `connectedCallback`. If mulitple mixins/components invoke this during the
   * same `connectedCallback`, only the first call will have any effect. The
   * subsequent calls will be harmless.
   *
   * @param {HTMLElement} element - The element being added to the document.
   */
  connected: function connected(element) {
    element[safeToSetAttributesSymbol] = true;

    // Set any pending attributes.
    if (element[pendingAttributesSymbol]) {
      for (var attribute in element[pendingAttributesSymbol]) {
        var value = element[pendingAttributesSymbol][attribute];
        setAttributeToElement(element, attribute, value);
      }
      element[pendingAttributesSymbol] = null;
    }

    // Set any pending classes.
    if (element[pendingClassesSymbol]) {
      for (var className in element[pendingClassesSymbol]) {
        var _value = element[pendingClassesSymbol][className];
        (0, _toggleClass3.default)(element, className, _value);
      }
      element[pendingClassesSymbol] = null;
    }
  },


  /**
   * Set/unset the attribute with the indicated name.
   *
   * This method exists primarily to handle the case where an element wants to
   * set a default property value that should be reflected as an attribute. An
   * important limitation of custom element consturctors is that they cannot
   * set attributes. A call to `setAttribute` during the constructor will
   * be deferred until the element is connected to the document.
   *
   * @param {string} attribute - The name of the *attribute* (not property) to set.
   * @param {object} value - The value to set. If null, the attribute will be removed.
   */
  setAttribute: function setAttribute(element, attribute, value) {
    if (element[safeToSetAttributesSymbol]) {
      // Safe to set attributes immediately.
      setAttributeToElement(element, attribute, value);
    } else {
      // Defer setting attributes until the first time we're connected.
      if (!element[pendingAttributesSymbol]) {
        element[pendingAttributesSymbol] = {};
      }
      element[pendingAttributesSymbol][attribute] = value;
    }
  },


  /**
   * Set/unset the class with the indicated name.
   *
   * This method exists primarily to handle the case where an element wants to
   * set a default property value that should be reflected as as class. An
   * important limitation of custom element consturctors is that they cannot
   * set attributes, including the `class` attribute. A call to
   * `toggleClass` during the constructor will be deferred until the element
   * is connected to the document.
   *
   * @param {string} className - The name of the class to set.
   * @param {object} value - True to set the class, false to remove it.
   */
  toggleClass: function toggleClass(element, className, value) {
    if (element[safeToSetAttributesSymbol]) {
      // Safe to set class immediately.
      (0, _toggleClass3.default)(element, className, value);
    } else {
      // Defer setting class until the first time we're connected.
      if (!element[pendingClassesSymbol]) {
        element[pendingClassesSymbol] = {};
      }
      element[pendingClassesSymbol][className] = value;
    }
  }
};

// Reflect the attribute to the given element.
// If the value is null, remove the attribute.

function setAttributeToElement(element, attributeName, value) {
  if (value === null || typeof value === 'undefined') {
    element.removeAttribute(attributeName);
  } else {
    var text = String(value);
    // Avoid recursive attributeChangedCallback calls.
    if (element.getAttribute(attributeName) !== text) {
      element.setAttribute(attributeName, value);
    }
  }
}

},{"./createSymbol":38,"./toggleClass":43}],42:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createSymbol = require('./createSymbol');

var _createSymbol2 = _interopRequireDefault(_createSymbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A collection of Symbol objects for standard component properties and methods.
 *
 * These Symbol objects are used to allow mixins and a component to internally
 * communicate, without exposing these properties and methods in the component's
 * public API.
 *
 * To use these Symbol objects in your own component, include this module and
 * then create a property or method whose key is the desired Symbol.
 *
 *     import 'SingleSelectionMixin' from 'basic-component-mixins/src/SingleSelectionMixin';
 *     import 'symbols' from 'basic-component-mixins/src/symbols';
 *
 *     class MyElement extends SingleSelectionMixin(HTMLElement) {
 *       [symbols.itemSelected](item, selected) {
 *         // This will be invoked whenever an item is selected/deselected.
 *       }
 *     }
 *
 * @module symbols
 */
var symbols = {

  /**
   * Symbol for the `defaults` property.
   *
   * This property can be used to set or override defaults that will be applied
   * to a new component instance. When implementing this property, take care to
   * first acquire any defaults defined by the superclass. The standard idiom is
   * as follows:
   *
   *     get [symbols.defaults]() {
   *       const defaults = super[symbols.defaults] || {};
   *       // Set or override default values here
   *       defaults.customProperty = false;
   *       return defaults;
   *     }
   *
   * @var {object} defaults
   */
  defaults: (0, _createSymbol2.default)('defaults'),

  /**
   * Symbol for the `dragging` property.
   *
   * Components like carousels often define animated CSS transitions for
   * sliding effects. Such a transition should usually *not* be applied while
   * the user is dragging, because a CSS animation will introduce a lag that
   * makes the swipe feel sluggish. Instead, as long as the user is dragging
   * with their finger down, the transition should be suppressed. When the
   * user releases their finger, the transition can be restored, allowing the
   * animation to show the carousel sliding into its final position.
   *
   * @type {boolean} true if a drag is in progress, false if not.
   */
  dragging: (0, _createSymbol2.default)('dragging'),

  /**
   * Symbol for the `goDown` method.
   *
   * This method is invoked when the user wants to go/navigate down.
   *
   * @function goDown
   */
  goDown: (0, _createSymbol2.default)('goDown'),

  /**
   * Symbol for the `goEnd` method.
   *
   * This method is invoked when the user wants to go/navigate to the end (e.g.,
   * of a list).
   *
   * @function goEnd
   */
  goEnd: (0, _createSymbol2.default)('goEnd'),

  /**
   * Symbol for the `goLeft` method.
   *
   * This method is invoked when the user wants to go/navigate left.
   *
   * @function goLeft
   */
  goLeft: (0, _createSymbol2.default)('goLeft'),

  /**
   * Symbol for the `goRight` method.
   *
   * This method is invoked when the user wants to go/navigate right.
   *
   * @function goRight
   */
  goRight: (0, _createSymbol2.default)('goRight'),

  /**
   * Symbol for the `goStart` method.
   *
   * This method is invoked when the user wants to go/navigate to the start
   * (e.g., of a list).
   *
   * @function goStart
   */
  goStart: (0, _createSymbol2.default)('goStart'),

  /**
   * Symbol for the `goUp` method.
   *
   * This method is invoked when the user wants to go/navigate up.
   *
   * @function goUp
   */
  goUp: (0, _createSymbol2.default)('goUp'),

  /**
   * Symbol for the `itemAdded` method.
   *
   * This method is invoked when a new item is added to a list.
   *
   * @function itemAdded
   * @param {HTMLElement} item - the item being selected/deselected
   */
  itemAdded: (0, _createSymbol2.default)('itemAdded'),

  /**
   * Symbol for the `itemsChanged` method.
   *
   * This method is invoked when the underlying contents change. It is also
   * invoked on component initialization – since the items have "changed" from
   * being nothing.
   */
  itemsChanged: (0, _createSymbol2.default)('itemsChanged'),

  /**
   * Symbol for the `itemSelected` method.
   *
   * This method is invoked when an item becomes selected or deselected.
   *
   * @function itemSelected
   * @param {HTMLElement} item - the item being selected/deselected
   * @param {boolean} selected - true if the item is selected, false if not
   */
  itemSelected: (0, _createSymbol2.default)('itemSelected'),

  /**
   * Symbol for the `keydown` method.
   *
   * This method is invoked when an element receives a `keydown` event.
   *
   * @function keydown
   * @param {KeyboardEvent} event - the event being processed
   */
  keydown: (0, _createSymbol2.default)('keydown'),

  /**
   * Symbol for the `template` property.
   *
   * This property returns a component's template.
   *
   * @type {string|HTMLElement}
   */
  template: (0, _createSymbol2.default)('template')
};

exports.default = symbols;

},{"./createSymbol":38}],43:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toggleClass;
/**
 * Helper function for standard classList.toggle() behavior on old browsers,
 * namely IE 11.
 *
 * The standard
 * [classlist](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
 * object has a `toggle()` function that supports a second Boolean parameter
 * that can be used to succinctly turn a class on or off. This feature is often
 * useful in designing custom elements, which may want to externally reflect
 * component state in a CSS class that can be used for styling purposes.
 *
 * Unfortunately, IE 11 does not support the Boolean parameter to
 * `classList.toggle()`. This helper function behaves like the standard
 * `toggle()`, including support for the Boolean parameter, so that it can be
 * used even on IE 11.
 *
 * @function toggleClass
 * @param {HTMLElement} element - The element to modify
 * @param {string} className - The class to add/remove
 * @param {boolean} [force] - Force the class to be added (if true) or removed
 *                            (if false)
 */
function toggleClass(element, className, force) {
  var classList = element.classList;
  var addClass = typeof force === 'undefined' ? !classList.contains(className) : force;
  if (addClass) {
    classList.add(className);
  } else {
    classList.remove(className);
  }
  return addClass;
}

},{}],44:[function(require,module,exports){
'use strict';

var _CurrentAnchor = require('./src/CurrentAnchor');

var _CurrentAnchor2 = _interopRequireDefault(_CurrentAnchor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.Basic = window.Basic || {}; /*
                                    * This file is transpiled to create an ES5-compatible distribution in which
                                    * the package's main feature(s) are available via the window.Basic global.
                                    * If you're already using ES6 yourself, ignore this file, and instead import
                                    * the source file(s) you want from the src folder.
                                    */

window.Basic.CurrentAnchor = _CurrentAnchor2.default;

},{"./src/CurrentAnchor":45}],45:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createSymbol = require('../../basic-component-mixins/src/createSymbol');

var _createSymbol2 = _interopRequireDefault(_createSymbol);

var _safeAttributes = require('../../basic-component-mixins/src/safeAttributes');

var _safeAttributes2 = _interopRequireDefault(_safeAttributes);

var _symbols = require('../../basic-component-mixins/src/symbols');

var _symbols2 = _interopRequireDefault(_symbols);

var _WrappedStandardElement = require('../../basic-wrapped-standard-element/src/WrappedStandardElement');

var _WrappedStandardElement2 = _interopRequireDefault(_WrappedStandardElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Symbols for private data members on an element.
var areaLinkSymbol = (0, _createSymbol2.default)('areaLink');

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

var CurrentAnchor = function (_WrappedStandardEleme) {
  _inherits(CurrentAnchor, _WrappedStandardEleme);

  function CurrentAnchor() {
    _classCallCheck(this, CurrentAnchor);

    var _this = _possibleConstructorReturn(this, (CurrentAnchor.__proto__ || Object.getPrototypeOf(CurrentAnchor)).call(this));

    window.addEventListener('popstate', function (event) {
      refresh(_this);
    });

    // Stupid Edge/IE "support" popstate, but don't fire it on hashchange.
    // So we have to listen for hashchange as well, with the result that a
    // standards-compliant browser may end up refreshing the link twice.
    window.addEventListener('hashchange', function (event) {
      refresh(_this);
    });

    // Set defaults.
    if (typeof _this.areaLink === 'undefined') {
      _this.areaLink = _this[_symbols2.default.defaults].areaLink;
    }
    return _this;
  }

  /**
   * True if the link points to an area within a site, not just a single page.
   *
   * If true, the matching rule to determine whether the link is current changes:
   * an area link is considered to be current if the link's destination forms a
   * prefix of the current location (instead of matching the complete URL).
   *
   * @type {boolean}
   */


  _createClass(CurrentAnchor, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      if (_get(CurrentAnchor.prototype.__proto__ || Object.getPrototypeOf(CurrentAnchor.prototype), 'connectedCallback', this)) {
        _get(CurrentAnchor.prototype.__proto__ || Object.getPrototypeOf(CurrentAnchor.prototype), 'connectedCallback', this).call(this);
      }
      _safeAttributes2.default.connected(this);
      refresh(this);
    }

    /**
     * True if the link's destination matches the current page location.
     *
     * If this is true, the element will have an `current` CSS class applied to it.
     *
     * @type {boolean}
     */

  }, {
    key: 'areaLink',
    get: function get() {
      return this[areaLinkSymbol];
    },
    set: function set(value) {
      // Cast boolean or string values to boolean.
      this[areaLinkSymbol] = String(value) === 'true';
      refresh(this);
    }
  }, {
    key: 'current',
    get: function get() {
      return this.classList.contains('current');
    },
    set: function set(value) {
      _safeAttributes2.default.toggleClass(this, 'current', value);
      this.dispatchEvent(new CustomEvent('current-changed'));
    }
  }, {
    key: _symbols2.default.defaults,
    get: function get() {
      var defaults = _get(CurrentAnchor.prototype.__proto__ || Object.getPrototypeOf(CurrentAnchor.prototype), _symbols2.default.defaults, this) || {};
      defaults.areaLink = false;
      return defaults;
    }

    // Augment href implementation so that changing href checks the active status.

  }, {
    key: 'href',
    get: function get() {
      return _get(CurrentAnchor.prototype.__proto__ || Object.getPrototypeOf(CurrentAnchor.prototype), 'href', this);
    },
    set: function set(value) {
      _set(CurrentAnchor.prototype.__proto__ || Object.getPrototypeOf(CurrentAnchor.prototype), 'href', value, this);
      refresh(this);
    }
  }, {
    key: _symbols2.default.template,
    get: function get() {
      // Reset styles so that color can be specified from the outside without
      // having to define a CSS variable.
      return '\n      <style>\n      :host {\n        display: inline-block;\n      }\n\n      #inner {\n        color: inherit;\n        display: inline-block;\n        text-decoration: inherit;\n      }\n      </style>\n      <a id="inner"><slot></slot></a>';
    }
  }]);

  return CurrentAnchor;
}(_WrappedStandardElement2.default.wrap('a'));

// Update the current status of the element based on the current location.


function refresh(element) {
  var url = window.location.href;
  var match = void 0;
  if (element.areaLink) {
    // Match prefix
    var prefix = element.href;
    // If prefix doesn't end in slash, add a slash.
    // We want to avoid matching in the middle of a folder name.
    if (prefix.length < url.length && prefix.substr(-1) !== '/') {
      prefix += '/';
    }
    match = url.substr(0, prefix.length) === prefix;
  } else {
    // Match whole path
    match = url === element.href;
  }
  element.current = match;
}

customElements.define('basic-current-anchor', CurrentAnchor);

},{"../../basic-component-mixins/src/createSymbol":38,"../../basic-component-mixins/src/safeAttributes":41,"../../basic-component-mixins/src/symbols":42,"../../basic-wrapped-standard-element/src/WrappedStandardElement":71}],46:[function(require,module,exports){
'use strict';

var _ElementBase = require('./src/ElementBase');

var _ElementBase2 = _interopRequireDefault(_ElementBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.Basic = window.Basic || {}; /*
                                    * This file is transpiled to create an ES5-compatible distribution in which
                                    * the package's main feature(s) are available via the window.Basic global.
                                    * If you're already using ES6 yourself, ignore this file, and instead import
                                    * the source file(s) you want from the src folder.
                                    */

window.Basic.ElementBase = _ElementBase2.default;

},{"./src/ElementBase":47}],47:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AttributeMarshallingMixin = require('../../basic-component-mixins/src/AttributeMarshallingMixin');

var _AttributeMarshallingMixin2 = _interopRequireDefault(_AttributeMarshallingMixin);

var _ComposableMixin = require('../../basic-component-mixins/src/ComposableMixin');

var _ComposableMixin2 = _interopRequireDefault(_ComposableMixin);

var _DistributedChildrenMixin = require('../../basic-component-mixins/src/DistributedChildrenMixin');

var _DistributedChildrenMixin2 = _interopRequireDefault(_DistributedChildrenMixin);

var _ShadowElementReferencesMixin = require('../../basic-component-mixins/src/ShadowElementReferencesMixin');

var _ShadowElementReferencesMixin2 = _interopRequireDefault(_ShadowElementReferencesMixin);

var _ShadowTemplateMixin = require('../../basic-component-mixins/src/ShadowTemplateMixin');

var _ShadowTemplateMixin2 = _interopRequireDefault(_ShadowTemplateMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A sample general-purpose base class for defining custom elements that mixes
 * in some common features: template stamping into a shadow root, shadow element
 * references, marshalling attributes to properties, and retrieving the children
 * distributed to a component.
 *
 * This base class is not special in any way, and is defined only as a
 * convenient shorthand for applying the mixins listed above. You can use this
 * class as a base class for your own elements, or easily create your own base
 * class by applying the same set of mixins.
 *
 * The ElementBase base class does not register itself as a custom element with
 * the browser, and hence cannot be independently instantiated.
 *
 * @mixes AttributeMarshallingMixin
 * @mixes ComposableMixin
 * @mixes DistributedChildrenMixin
 * @mixes ShadowElementReferencesMixin
 * @mixes ShadowTemplateMixin
 */
var ElementBase = function (_ComposableMixin$comp) {
  _inherits(ElementBase, _ComposableMixin$comp);

  function ElementBase() {
    _classCallCheck(this, ElementBase);

    return _possibleConstructorReturn(this, (ElementBase.__proto__ || Object.getPrototypeOf(ElementBase)).apply(this, arguments));
  }

  return ElementBase;
}((0, _ComposableMixin2.default)(HTMLElement).compose(_ShadowTemplateMixin2.default, // before node finding, so shadow root is populated
_ShadowElementReferencesMixin2.default, // before marshalling, so properties can use refs
_AttributeMarshallingMixin2.default, _DistributedChildrenMixin2.default));

exports.default = ElementBase;

},{"../../basic-component-mixins/src/AttributeMarshallingMixin":11,"../../basic-component-mixins/src/ComposableMixin":13,"../../basic-component-mixins/src/DistributedChildrenMixin":17,"../../basic-component-mixins/src/ShadowElementReferencesMixin":32,"../../basic-component-mixins/src/ShadowTemplateMixin":33}],48:[function(require,module,exports){
'use strict';

var _FadeOverflow = require('./src/FadeOverflow');

var _FadeOverflow2 = _interopRequireDefault(_FadeOverflow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.Basic = window.Basic || {}; /*
                                    * This file is transpiled to create an ES5-compatible distribution in which
                                    * the package's main feature(s) are available via the window.Basic global.
                                    * If you're already using ES6 yourself, ignore this file, and instead import
                                    * the source file(s) you want from the src folder.
                                    */

window.Basic.FadeOverflow = _FadeOverflow2.default;

},{"./src/FadeOverflow":49}],49:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createSymbol = require('../../basic-component-mixins/src/createSymbol');

var _createSymbol2 = _interopRequireDefault(_createSymbol);

var _ElementBase2 = require('../../basic-element-base/src/ElementBase');

var _ElementBase3 = _interopRequireDefault(_ElementBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Symbols for private data members on an element.
var fadeColorSymbol = (0, _createSymbol2.default)('fadeColor');

/**
 * Fades out content that overflows so the user knows there's more.
 *
 * This component doesn't handle interactivity.
 *
 * The component needs to know the color it should fade to, which it tries to
 * infer from the background color. In some situations, this may not work, in
 * which case you can explicitly set the fadeColor attribute.
 *
 * The component currently always displays the fade, even if the component's
 * content is short enough to fit completely in view.
 *
 * @extends ElementBase
 */

var FadeOverflow = function (_ElementBase) {
  _inherits(FadeOverflow, _ElementBase);

  function FadeOverflow() {
    _classCallCheck(this, FadeOverflow);

    return _possibleConstructorReturn(this, (FadeOverflow.__proto__ || Object.getPrototypeOf(FadeOverflow)).apply(this, arguments));
  }

  _createClass(FadeOverflow, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      if (_get(FadeOverflow.prototype.__proto__ || Object.getPrototypeOf(FadeOverflow.prototype), 'connectedCallback', this)) {
        _get(FadeOverflow.prototype.__proto__ || Object.getPrototypeOf(FadeOverflow.prototype), 'connectedCallback', this).call(this);
      }
      if (this.fadeColor == null) {
        this.refresh();
      }
    }

    /**
     * The color of the fade.
     *
     * The fade color should match the background color. The component does its
     * best to infer the background color, but in some situations, that may not
     * work. In those cases, you can manually identify the background color.
     * This should be a solid color.
     *
     * @attribute fadeColor
     * @default white
     */

  }, {
    key: 'refresh',


    /**
     * Infer the fade color from background color. If you have programmatically
     * changed the color behind the component, you can invoke this method to have
     * the component try to pick up the new background color.
     */
    value: function refresh() {
      // TODO: Automatically hide the fade if all the content can be seen.
      this.fadeColor = findBackgroundColor(this);
    }

    /**
     * True if the component should show the fade to the background color.
     *
     * @type {boolean}
     * @default true
     */

  }, {
    key: 'fadeColor',
    get: function get() {
      return this[fadeColorSymbol];
    },
    set: function set(value) {
      this[fadeColorSymbol] = value;
      if (value) {
        var rgb = extractRgbValues(value);
        if (rgb) {
          var fadeColorTransparent = 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',0)';
          var gradient = 'linear-gradient(' + fadeColorTransparent + ' 0%, ' + value + ' 100%)';
          this.$.fade.style.backgroundImage = gradient;
        }
      }
    }
  }, {
    key: 'showFade',
    get: function get() {
      return this.$.fade.style.display !== 'none';
    },
    set: function set(value) {
      this.$.fade.style.display = value ? '' : 'none';
    }
  }, {
    key: symbols.template,
    get: function get() {
      return '\n      <style>\n      :host {\n        display: block;\n        position: relative;\n        overflow: hidden;\n      }\n\n      #fade {\n        bottom: 0;\n        height: 3em;\n        max-height: 50%;\n        pointer-events: none; /* Lets user interact with content through the fade. */\n        position: absolute;\n        width: 100%;\n      }\n      </style>\n\n      <div id="fade"></div>\n      <slot></slot>\n    ';
    }
  }]);

  return FadeOverflow;
}(_ElementBase3.default);

// Return the background color of the given element. If the color is
// "transparent" (the default in Mozilla and IE) or "rgba(0, 0, 0, 0)" (the
// default transparent value in Blink and Webkit), walk up the parent chain
// until a non-transparent color is found.


function findBackgroundColor(element) {
  if (element == null || typeof element.style === 'undefined') {
    // This element has no background, assume white.
    return 'rgb(255,255,255)';
  }
  var backgroundColor = getComputedStyle(element).backgroundColor;
  if (backgroundColor === 'transparent' || backgroundColor === 'rgba(0, 0, 0, 0)') {
    return findBackgroundColor(element.parentNode);
  } else {
    return backgroundColor;
  }
}

// Return the individual RGB values from a CSS color string.
function extractRgbValues(rgbString) {
  var rgbRegex = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*[\d\.]+\s*)?\)/;
  var match = rgbRegex.exec(rgbString);
  if (match) {
    return {
      r: parseInt(match[1]),
      g: parseInt(match[2]),
      b: parseInt(match[3])
    };
  } else {
    return null;
  }
}

customElements.define('basic-fade-overflow', FadeOverflow);
exports.default = FadeOverflow;

},{"../../basic-component-mixins/src/createSymbol":38,"../../basic-element-base/src/ElementBase":47}],50:[function(require,module,exports){
'use strict';

var _ListBox = require('./src/ListBox');

var _ListBox2 = _interopRequireDefault(_ListBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.Basic = window.Basic || {}; /*
                                    * This file is transpiled to create an ES5-compatible distribution in which
                                    * the package's main feature(s) are available via the window.Basic global.
                                    * If you're already using ES6 yourself, ignore this file, and instead import
                                    * the source file(s) you want from the src folder.
                                    */

window.Basic.ListBox = _ListBox2.default;

},{"./src/ListBox":51}],51:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _ElementBase = require('../../basic-element-base/src/ElementBase');

var _ElementBase2 = _interopRequireDefault(_ElementBase);

var _DistributedChildrenContentMixin = require('../../basic-component-mixins/src/DistributedChildrenContentMixin');

var _DistributedChildrenContentMixin2 = _interopRequireDefault(_DistributedChildrenContentMixin);

var _ClickSelectionMixin = require('../../basic-component-mixins/src/ClickSelectionMixin');

var _ClickSelectionMixin2 = _interopRequireDefault(_ClickSelectionMixin);

var _ContentItemsMixin = require('../../basic-component-mixins/src/ContentItemsMixin');

var _ContentItemsMixin2 = _interopRequireDefault(_ContentItemsMixin);

var _DirectionSelectionMixin = require('../../basic-component-mixins/src/DirectionSelectionMixin');

var _DirectionSelectionMixin2 = _interopRequireDefault(_DirectionSelectionMixin);

var _GenericMixin = require('../../basic-component-mixins/src/GenericMixin');

var _GenericMixin2 = _interopRequireDefault(_GenericMixin);

var _KeyboardMixin = require('../../basic-component-mixins/src/KeyboardMixin');

var _KeyboardMixin2 = _interopRequireDefault(_KeyboardMixin);

var _KeyboardDirectionMixin = require('../../basic-component-mixins/src/KeyboardDirectionMixin');

var _KeyboardDirectionMixin2 = _interopRequireDefault(_KeyboardDirectionMixin);

var _KeyboardPagedSelectionMixin = require('../../basic-component-mixins/src/KeyboardPagedSelectionMixin');

var _KeyboardPagedSelectionMixin2 = _interopRequireDefault(_KeyboardPagedSelectionMixin);

var _KeyboardPrefixSelectionMixin = require('../../basic-component-mixins/src/KeyboardPrefixSelectionMixin');

var _KeyboardPrefixSelectionMixin2 = _interopRequireDefault(_KeyboardPrefixSelectionMixin);

var _SelectedItemTextValueMixin = require('../../basic-component-mixins/src/SelectedItemTextValueMixin');

var _SelectedItemTextValueMixin2 = _interopRequireDefault(_SelectedItemTextValueMixin);

var _SelectionAriaActiveMixin = require('../../basic-component-mixins/src/SelectionAriaActiveMixin');

var _SelectionAriaActiveMixin2 = _interopRequireDefault(_SelectionAriaActiveMixin);

var _SelectionHighlightMixin = require('../../basic-component-mixins/src/SelectionHighlightMixin');

var _SelectionHighlightMixin2 = _interopRequireDefault(_SelectionHighlightMixin);

var _SelectionInViewMixin = require('../../basic-component-mixins/src/SelectionInViewMixin');

var _SelectionInViewMixin2 = _interopRequireDefault(_SelectionInViewMixin);

var _SingleSelectionMixin = require('../../basic-component-mixins/src/SingleSelectionMixin');

var _SingleSelectionMixin2 = _interopRequireDefault(_SingleSelectionMixin);

var _symbols = require('../../basic-component-mixins/src/symbols');

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A single-selection list box that supports selection highlighting (using the
 * system highlight color) and keyboard navigation.
 *
 * [Live demo](http://basicwebcomponents.org/basic-web-components/packages/basic-list-box/)
 *
 * The user can select an item with the mouse/touch or keyboard: Up/Down, Page
 * Up/Down, Home/End.
 *
 * Like other Basic Web Components, this can handle distributed content: you can
 * include a content element inside a basic-list-box, and the list will navigate
 * through the distributed content.
 *
 * This component includes basic ARIA support to provide a reasonable default
 * experience, e.g., for screen readers. The list component itself will be
 * assigned an appropriate ARIA role (default is "listbox"). The ID of the
 * selected item will be reflected in an "aria-activedescendant" attribute
 * applied to the list. To support this feature, all items in the list need
 * unique IDs. If an item does not have an ID, basic-list-box will automatically
 * assign a default ID.
 *
 * The keyboard interaction model generally follows that of Microsoft Windows'
 * list boxes instead of those in OS X:
 *
 * * The Page Up/Down and Home/End keys actually move the selection, rather than
 *   just scrolling the list. The former behavior seems more generally useful
 *   for keyboard users.
 *
 * * Pressing Page Up/Down will move the selection to the topmost/bottommost
 *   visible item if the selection is not already there. Thereafter, the key
 *   will move the selection up/down by a page, and (per the above point) make
 *   the selected item visible.
 *
 * Programmatically selecting an item (by setting the selected property) scrolls
 * the item into view.
 *
 * The user can also select an item by typing the beginning of an item's text.
 *
 * @extends ElementBase
 * @mixes ClickSelectionMixin
 * @mixes ContentItemsMixin
 * @mixes DirectionSelectionMixin
 * @mixes DistributedChildrenContentMixin
 * @mixes GenericMixin
 * @mixes KeyboardMixin
 * @mixes KeyboardDirectionMixin
 * @mixes KeyboardPagedSelectionMixin
 * @mixes KeyboardPrefixSelectionMixin
 * @mixis SelectedItemTextValueMixin
 * @mixes SelectionAriaActiveMixin
 * @mixes SelectionHighlightMixin
 * @mixes SelectionInViewMixin
 * @mixes SingleSelectionMixin
 */
var ListBox = function (_ElementBase$compose) {
  _inherits(ListBox, _ElementBase$compose);

  function ListBox() {
    _classCallCheck(this, ListBox);

    return _possibleConstructorReturn(this, (ListBox.__proto__ || Object.getPrototypeOf(ListBox)).apply(this, arguments));
  }

  _createClass(ListBox, [{
    key: _symbols2.default.defaults,
    get: function get() {
      var defaults = _get(ListBox.prototype.__proto__ || Object.getPrototypeOf(ListBox.prototype), _symbols2.default.defaults, this) || {};
      defaults.navigationAxis = 'vertical';
      return defaults;
    }
  }, {
    key: 'scrollTarget',
    get: function get() {
      return this.$.itemsContainer;
    }
  }, {
    key: _symbols2.default.template,
    get: function get() {
      var baseTemplate = _get(ListBox.prototype.__proto__ || Object.getPrototypeOf(ListBox.prototype), _symbols2.default.template, this) || '';
      return '\n      <style>\n      :host {\n        display: -webkit-flex;\n        display: flex;\n        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n      }\n\n      [target="child"] {\n        display: -webkit-flex;\n        display: flex;\n        -webkit-flex: 1;\n        flex: 1;\n      }\n\n      #itemsContainer {\n        -webkit-flex: 1;\n        flex: 1;\n        -webkit-overflow-scrolling: touch;\n        overflow-y: scroll; /* for momentum scrolling */\n      }\n\n      /* GenericMixin appearance */\n      :host([generic=""]) {\n        border: 1px solid gray;\n        box-sizing: border-box;\n        cursor: default;\n      }\n\n      :host([generic=""]) #itemsContainer ::slotted(*) {\n        cursor: default;\n        padding: 0.25em;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n      }\n      </style>\n\n      <div id="itemsContainer" role="none">\n        <slot></slot>\n      </div>\n      ' + baseTemplate + '\n    ';
    }

    /**
     * Fires when the list's value property changes.
     *
     * @memberof ListBox
     * @event value-changed
     */

  }]);

  return ListBox;
}(_ElementBase2.default.compose(_ClickSelectionMixin2.default, _ContentItemsMixin2.default, _DirectionSelectionMixin2.default, _DistributedChildrenContentMixin2.default, _GenericMixin2.default, _KeyboardMixin2.default, _KeyboardDirectionMixin2.default, _KeyboardPagedSelectionMixin2.default, _KeyboardPrefixSelectionMixin2.default, _SelectedItemTextValueMixin2.default, _SelectionAriaActiveMixin2.default, _SelectionHighlightMixin2.default, _SelectionInViewMixin2.default, _SingleSelectionMixin2.default));

customElements.define('basic-list-box', ListBox);
exports.default = ListBox;

},{"../../basic-component-mixins/src/ClickSelectionMixin":12,"../../basic-component-mixins/src/ContentItemsMixin":14,"../../basic-component-mixins/src/DirectionSelectionMixin":15,"../../basic-component-mixins/src/DistributedChildrenContentMixin":16,"../../basic-component-mixins/src/GenericMixin":19,"../../basic-component-mixins/src/KeyboardDirectionMixin":20,"../../basic-component-mixins/src/KeyboardMixin":21,"../../basic-component-mixins/src/KeyboardPagedSelectionMixin":22,"../../basic-component-mixins/src/KeyboardPrefixSelectionMixin":23,"../../basic-component-mixins/src/SelectedItemTextValueMixin":27,"../../basic-component-mixins/src/SelectionAriaActiveMixin":29,"../../basic-component-mixins/src/SelectionHighlightMixin":30,"../../basic-component-mixins/src/SelectionInViewMixin":31,"../../basic-component-mixins/src/SingleSelectionMixin":34,"../../basic-component-mixins/src/symbols":42,"../../basic-element-base/src/ElementBase":47}],52:[function(require,module,exports){
'use strict';

var _Modes = require('./src/Modes');

var _Modes2 = _interopRequireDefault(_Modes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.Basic = window.Basic || {}; /*
                                    * This file is transpiled to create an ES5-compatible distribution in which
                                    * the package's main feature(s) are available via the window.Basic global.
                                    * If you're already using ES6 yourself, ignore this file, and instead import
                                    * the source file(s) you want from the src folder.
                                    */

window.Basic.Modes = _Modes2.default;

},{"./src/Modes":53}],53:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _ElementBase = require('../../basic-element-base/src/ElementBase');

var _ElementBase2 = _interopRequireDefault(_ElementBase);

var _DistributedChildrenContentMixin = require('../../basic-component-mixins/src/DistributedChildrenContentMixin');

var _DistributedChildrenContentMixin2 = _interopRequireDefault(_DistributedChildrenContentMixin);

var _ContentItemsMixin = require('../../basic-component-mixins/src/ContentItemsMixin');

var _ContentItemsMixin2 = _interopRequireDefault(_ContentItemsMixin);

var _SingleSelectionMixin = require('../../basic-component-mixins/src/SingleSelectionMixin');

var _SingleSelectionMixin2 = _interopRequireDefault(_SingleSelectionMixin);

var _symbols = require('../../basic-component-mixins/src/symbols');

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var base = _ElementBase2.default.compose(_ContentItemsMixin2.default, _DistributedChildrenContentMixin2.default, _SingleSelectionMixin2.default);

/**
 * Shows exactly one child element at a time. This can be useful, for example,
 * if a given UI element has multiple modes that present substantially different
 * elements.
 *
 * The transition between child elements is instantenous. If you'd like the
 * transition to be accompanied by visible animated effects, see
 * [basic-animation-stage](../basic-animation-stage).
 *
 * This component doesn't provide any UI for changing which mode is shown.
 *
 * @extends ElementBase
 * @mixes ContentItemsMixin
 * @mixes DistributedChildrenContentMixin
 * @mixes SingleSelectionMixin
 */

var Modes = function (_base) {
  _inherits(Modes, _base);

  function Modes() {
    _classCallCheck(this, Modes);

    return _possibleConstructorReturn(this, (Modes.__proto__ || Object.getPrototypeOf(Modes)).apply(this, arguments));
  }

  _createClass(Modes, [{
    key: _symbols2.default.itemSelected,
    value: function value(item, selected) {
      if (_get(Modes.prototype.__proto__ || Object.getPrototypeOf(Modes.prototype), _symbols2.default.itemSelected, this)) {
        _get(Modes.prototype.__proto__ || Object.getPrototypeOf(Modes.prototype), _symbols2.default.itemSelected, this).call(this, item, selected);
      }
      item.style.display = selected ? '' : 'none';
      item.setAttribute('aria-hidden', !selected);
    }
  }, {
    key: _symbols2.default.defaults,
    get: function get() {
      var defaults = _get(Modes.prototype.__proto__ || Object.getPrototypeOf(Modes.prototype), _symbols2.default.defaults, this) || {};
      defaults.selectionRequired = true;
      return defaults;
    }
  }, {
    key: _symbols2.default.template,
    get: function get() {
      return '<slot></slot>';
    }
  }]);

  return Modes;
}(base);

customElements.define('basic-modes', Modes);
exports.default = Modes;

},{"../../basic-component-mixins/src/ContentItemsMixin":14,"../../basic-component-mixins/src/DistributedChildrenContentMixin":16,"../../basic-component-mixins/src/SingleSelectionMixin":34,"../../basic-component-mixins/src/symbols":42,"../../basic-element-base/src/ElementBase":47}],54:[function(require,module,exports){
'use strict';

var _SlideshowWithControls = require('./src/SlideshowWithControls');

var _SlideshowWithControls2 = _interopRequireDefault(_SlideshowWithControls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.Basic = window.Basic || {}; /*
                                    * This file is transpiled to create an ES5-compatible distribution in which
                                    * the package's main feature(s) are available via the window.Basic global.
                                    * If you're already using ES6 yourself, ignore this file, and instead import
                                    * the source file(s) you want from the src folder.
                                    */

window.Basic.SlideshowWithControls = _SlideshowWithControls2.default;

},{"./src/SlideshowWithControls":55}],55:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Slideshow = require('../../basic-slideshow/src/Slideshow');

var _Slideshow2 = _interopRequireDefault(_Slideshow);

var _PlayControlsMixin2 = require('../../basic-component-mixins/src/PlayControlsMixin');

var _PlayControlsMixin3 = _interopRequireDefault(_PlayControlsMixin2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * SlideshowWithControls
 *
 * An extension of Slideshow with the addition of play controls.
 *
 * @extends Slideshow
 * @mixes PlayControlsMixin
 */
var SlideshowWithControls = function (_PlayControlsMixin) {
  _inherits(SlideshowWithControls, _PlayControlsMixin);

  function SlideshowWithControls() {
    _classCallCheck(this, SlideshowWithControls);

    return _possibleConstructorReturn(this, (SlideshowWithControls.__proto__ || Object.getPrototypeOf(SlideshowWithControls)).apply(this, arguments));
  }

  return SlideshowWithControls;
}((0, _PlayControlsMixin3.default)(_Slideshow2.default));

customElements.define('basic-slideshow-with-controls', SlideshowWithControls);

exports.default = SlideshowWithControls;

},{"../../basic-component-mixins/src/PlayControlsMixin":26,"../../basic-slideshow/src/Slideshow":57}],56:[function(require,module,exports){
'use strict';

var _Slideshow = require('./src/Slideshow');

var _Slideshow2 = _interopRequireDefault(_Slideshow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.Basic = window.Basic || {}; /*
                                    * This file is transpiled to create an ES5-compatible distribution in which
                                    * the package's main feature(s) are available via the window.Basic global.
                                    * If you're already using ES6 yourself, ignore this file, and instead import
                                    * the source file(s) you want from the src folder.
                                    */

window.Basic.Slideshow = _Slideshow2.default;

},{"./src/Slideshow":57}],57:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _ElementBase = require('../../basic-element-base/src/ElementBase');

var _ElementBase2 = _interopRequireDefault(_ElementBase);

var _ContentItemsMixin = require('../../basic-component-mixins/src/ContentItemsMixin');

var _ContentItemsMixin2 = _interopRequireDefault(_ContentItemsMixin);

var _DistributedChildrenContentMixin = require('../../basic-component-mixins/src/DistributedChildrenContentMixin');

var _DistributedChildrenContentMixin2 = _interopRequireDefault(_DistributedChildrenContentMixin);

var _FractionalSelectionMixin = require('../../basic-component-mixins/src/FractionalSelectionMixin');

var _FractionalSelectionMixin2 = _interopRequireDefault(_FractionalSelectionMixin);

var _SelectionAnimationMixin = require('../../basic-component-mixins/src/SelectionAnimationMixin');

var _SelectionAnimationMixin2 = _interopRequireDefault(_SelectionAnimationMixin);

var _SelectionAriaActiveMixin = require('../../basic-component-mixins/src/SelectionAriaActiveMixin');

var _SelectionAriaActiveMixin2 = _interopRequireDefault(_SelectionAriaActiveMixin);

var _SingleSelectionMixin = require('../../basic-component-mixins/src/SingleSelectionMixin');

var _SingleSelectionMixin2 = _interopRequireDefault(_SingleSelectionMixin);

var _symbols = require('../../basic-component-mixins/src/symbols');

var _symbols2 = _interopRequireDefault(_symbols);

var _TimerSelectionMixin = require('../../basic-component-mixins/src/TimerSelectionMixin');

var _TimerSelectionMixin2 = _interopRequireDefault(_TimerSelectionMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var base = _ElementBase2.default.compose(_ContentItemsMixin2.default, _DistributedChildrenContentMixin2.default, _FractionalSelectionMixin2.default, _SelectionAnimationMixin2.default, _SelectionAriaActiveMixin2.default, _SingleSelectionMixin2.default, _TimerSelectionMixin2.default);

/**
 * Slideshow with animated transitions.
 *
 * By default the slideshow will immediately begin playing when it is connected
 * to the document, advance every 3000 ms (3 seconds), and use a simple
 * crossfade effect.
 *
 * This component can be used on its own. To incorporate slideshow behavior into
 * a component of your own, apply the
 * [TimerSelectionMixin](../basic-component-mixins/docs/TimerSelectionMixin.md).
 *
 * @extends ElementBase
 * @mixes ContentItemsMixin
 * @mixes DistributedChildrenContentMixin
 * @mixes FractionalSelectionMixin
 * @mixes SelectionAnimationMixin
 * @mixes SelectionAriaActiveMixin
 * @mixes SingleSelectionMixin
 * @mixes TimerSelectionMixin
 */

var Slideshow = function (_base) {
  _inherits(Slideshow, _base);

  function Slideshow() {
    _classCallCheck(this, Slideshow);

    return _possibleConstructorReturn(this, (Slideshow.__proto__ || Object.getPrototypeOf(Slideshow)).apply(this, arguments));
  }

  _createClass(Slideshow, [{
    key: _symbols2.default.defaults,
    get: function get() {
      var defaults = _get(Slideshow.prototype.__proto__ || Object.getPrototypeOf(Slideshow.prototype), _symbols2.default.defaults, this) || {};
      defaults.playing = true;
      defaults.selectionAnimationDuration = 500;
      defaults.selectionAnimationEffect = 'crossfade';
      defaults.selectionRequired = true;
      defaults.selectionTimerDuration = 3000;
      defaults.selectionWraps = true;
      return defaults;
    }
  }, {
    key: _symbols2.default.template,
    get: function get() {
      return '\n      <style>\n      :host {\n        display: -webkit-flex;\n        display: flex;\n        overflow: hidden;\n        position: relative;\n      }\n\n      #container ::slotted(*) {\n        height: 100%;\n        object-fit: contain;\n        position: absolute;\n        width: 100%;\n        will-change: transform;\n      }\n      </style>\n\n      <div id="container" role="none">\n        <slot></slot>\n      </div>\n    ';
    }
  }]);

  return Slideshow;
}(base);

customElements.define('basic-slideshow', Slideshow);
exports.default = Slideshow;

},{"../../basic-component-mixins/src/ContentItemsMixin":14,"../../basic-component-mixins/src/DistributedChildrenContentMixin":16,"../../basic-component-mixins/src/FractionalSelectionMixin":18,"../../basic-component-mixins/src/SelectionAnimationMixin":28,"../../basic-component-mixins/src/SelectionAriaActiveMixin":29,"../../basic-component-mixins/src/SingleSelectionMixin":34,"../../basic-component-mixins/src/TimerSelectionMixin":36,"../../basic-component-mixins/src/symbols":42,"../../basic-element-base/src/ElementBase":47}],58:[function(require,module,exports){
'use strict';

var _SlidingCarousel = require('./src/SlidingCarousel');

var _SlidingCarousel2 = _interopRequireDefault(_SlidingCarousel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.Basic = window.Basic || {}; /*
                                    * This file is transpiled to create an ES5-compatible distribution in which
                                    * the package's main feature(s) are available via the window.Basic global.
                                    * If you're already using ES6 yourself, ignore this file, and instead import
                                    * the source file(s) you want from the src folder.
                                    */

window.Basic.SlidingCarousel = _SlidingCarousel2.default;

},{"./src/SlidingCarousel":59}],59:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _ElementBase = require('../../basic-element-base/src/ElementBase');

var _ElementBase2 = _interopRequireDefault(_ElementBase);

var _ContentItemsMixin = require('../../basic-component-mixins/src/ContentItemsMixin');

var _ContentItemsMixin2 = _interopRequireDefault(_ContentItemsMixin);

var _DirectionSelectionMixin = require('../../basic-component-mixins/src/DirectionSelectionMixin');

var _DirectionSelectionMixin2 = _interopRequireDefault(_DirectionSelectionMixin);

var _DistributedChildrenContentMixin = require('../../basic-component-mixins/src/DistributedChildrenContentMixin');

var _DistributedChildrenContentMixin2 = _interopRequireDefault(_DistributedChildrenContentMixin);

var _FractionalSelectionMixin = require('../../basic-component-mixins/src/FractionalSelectionMixin');

var _FractionalSelectionMixin2 = _interopRequireDefault(_FractionalSelectionMixin);

var _KeyboardMixin = require('../../basic-component-mixins/src/KeyboardMixin');

var _KeyboardMixin2 = _interopRequireDefault(_KeyboardMixin);

var _KeyboardDirectionMixin = require('../../basic-component-mixins/src/KeyboardDirectionMixin');

var _KeyboardDirectionMixin2 = _interopRequireDefault(_KeyboardDirectionMixin);

var _SelectionAriaActiveMixin = require('../../basic-component-mixins/src/SelectionAriaActiveMixin');

var _SelectionAriaActiveMixin2 = _interopRequireDefault(_SelectionAriaActiveMixin);

var _SingleSelectionMixin = require('../../basic-component-mixins/src/SingleSelectionMixin');

var _SingleSelectionMixin2 = _interopRequireDefault(_SingleSelectionMixin);

var _SlidingViewport = require('../../basic-sliding-viewport/src/SlidingViewport');

var _SlidingViewport2 = _interopRequireDefault(_SlidingViewport);

var _SwipeDirectionMixin = require('../../basic-component-mixins/src/SwipeDirectionMixin');

var _SwipeDirectionMixin2 = _interopRequireDefault(_SwipeDirectionMixin);

var _symbols = require('../../basic-component-mixins/src/symbols');

var _symbols2 = _interopRequireDefault(_symbols);

var _TrackpadDirectionMixin = require('../../basic-component-mixins/src/TrackpadDirectionMixin');

var _TrackpadDirectionMixin2 = _interopRequireDefault(_TrackpadDirectionMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // jshint ignore:line


var base = _ElementBase2.default.compose(_ContentItemsMixin2.default, _DirectionSelectionMixin2.default, _DistributedChildrenContentMixin2.default, _FractionalSelectionMixin2.default, _KeyboardMixin2.default, _KeyboardDirectionMixin2.default, _SelectionAriaActiveMixin2.default, _SingleSelectionMixin2.default, _SwipeDirectionMixin2.default, _TrackpadDirectionMixin2.default);

/**
 * Lets the user navigate laterally through a sequence of child elements.
 *
 * [Live demo](http://basicwebcomponents.org/basic-web-components/packages/basic-carousel/)
 *
 * basic-sliding-carousel is an implementation of the carousel user interface pattern,
 * commonly used for navigating between images, pages, and other elements. This
 * pattern presents the user with a linear sequence of elements, only one of
 * which is shown at a time. The user can navigate to the next/previous element
 * with a variety of input methods.
 *
 * basic-sliding-carousel is a simpler variation of the more sophisticated
 * [basic-carousel](../basic-carousel) component. The latter includes support
 * for _wrapping_ (going forward from the last item to the first, and vice versa),
 * and more complex visual transitions. Those transitions entail use of the
 * Web Animation API, which requires a polyfill in older browsers. Hence, the
 * simpler basic-sliding-carousel may be a more appropriate choice if factors
 * such as download size are critical.
 *
 * Beyond those differences, basic-sliding-carousel offers the same API, usage
 * recommendations, and support for keyboard/touch/mouse and assistive devices.
 * See that component for more details on use.
 *
 * @extends ElementBase
 * @mixes ContentItemsMixin
 * @mixes DirectionSelectionMixin
 * @mixes DistributedChildrenContentMixin
 * @mixes GenericMixin
 * @mixes KeyboardMixin
 * @mixes KeyboardDirectionMixin
 * @mixes SelectionAriaActiveMixin
 * @mixes SingleSelectionMixin
 * @mixes SwipeDirectionMixin
 * @mixes TrackpadDirectionMixin
 */

var SlidingCarousel = function (_base) {
  _inherits(SlidingCarousel, _base);

  function SlidingCarousel() {
    _classCallCheck(this, SlidingCarousel);

    return _possibleConstructorReturn(this, (SlidingCarousel.__proto__ || Object.getPrototypeOf(SlidingCarousel)).apply(this, arguments));
  }

  _createClass(SlidingCarousel, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      if (_get(SlidingCarousel.prototype.__proto__ || Object.getPrototypeOf(SlidingCarousel.prototype), 'connectedCallback', this)) {
        _get(SlidingCarousel.prototype.__proto__ || Object.getPrototypeOf(SlidingCarousel.prototype), 'connectedCallback', this).call(this);
      }
      // HACK
      this[_symbols2.default.itemsChanged]();
    }
  }, {
    key: _symbols2.default.defaults,
    get: function get() {
      var defaults = _get(SlidingCarousel.prototype.__proto__ || Object.getPrototypeOf(SlidingCarousel.prototype), _symbols2.default.defaults, this) || {};
      defaults.navigationAxis = 'horizontal';
      defaults.selectionRequired = true;
      return defaults;
    }

    /*
     * During drags, don't show CSS transitions.
     */

  }, {
    key: _symbols2.default.dragging,
    get: function get() {
      return !this.$.viewport.showTransition;
    },
    set: function set(value) {
      if (_symbols2.default.dragging in base.prototype) {
        _set(SlidingCarousel.prototype.__proto__ || Object.getPrototypeOf(SlidingCarousel.prototype), _symbols2.default.dragging, value, this);
      }
      this.$.viewport.showTransition = !value;
    }
  }, {
    key: 'selectedFraction',
    get: function get() {
      return this.$.viewport.selectedFraction;
    },
    set: function set(value) {
      if ('selectedFraction' in base.prototype) {
        _set(SlidingCarousel.prototype.__proto__ || Object.getPrototypeOf(SlidingCarousel.prototype), 'selectedFraction', value, this);
      }
      this.$.viewport.selectedFraction = value;
      var event = new CustomEvent('selected-fraction-changed');
      this.dispatchEvent(event);
    }
  }, {
    key: 'selectedIndex',
    get: function get() {
      return _get(SlidingCarousel.prototype.__proto__ || Object.getPrototypeOf(SlidingCarousel.prototype), 'selectedIndex', this);
    },
    set: function set(value) {
      if ('selectedIndex' in base.prototype) {
        _set(SlidingCarousel.prototype.__proto__ || Object.getPrototypeOf(SlidingCarousel.prototype), 'selectedIndex', value, this);
      }
      this.$.viewport.selectedIndex = value;
    }
  }, {
    key: 'selectedItem',
    get: function get() {
      return _get(SlidingCarousel.prototype.__proto__ || Object.getPrototypeOf(SlidingCarousel.prototype), 'selectedItem', this);
    },
    set: function set(item) {
      if ('selectedItem' in base.prototype) {
        _set(SlidingCarousel.prototype.__proto__ || Object.getPrototypeOf(SlidingCarousel.prototype), 'selectedItem', item, this);
      }
      this.$.viewport.selectedItem = item;
    }
  }, {
    key: _symbols2.default.template,
    get: function get() {
      return '\n      <style>\n      :host {\n        display: -webkit-flex;\n        display: flex;\n      }\n\n      basic-sliding-viewport {\n        display: -webkit-flex;\n        display: flex;\n        -webkit-flex: 1;\n        flex: 1;\n      }\n      </style>\n\n      <basic-sliding-viewport id="viewport" role="none">\n        <slot></slot>\n      </basic-sliding-viewport>\n    ';
    }
  }]);

  return SlidingCarousel;
}(base);

customElements.define('basic-sliding-carousel', SlidingCarousel);
exports.default = SlidingCarousel;

},{"../../basic-component-mixins/src/ContentItemsMixin":14,"../../basic-component-mixins/src/DirectionSelectionMixin":15,"../../basic-component-mixins/src/DistributedChildrenContentMixin":16,"../../basic-component-mixins/src/FractionalSelectionMixin":18,"../../basic-component-mixins/src/KeyboardDirectionMixin":20,"../../basic-component-mixins/src/KeyboardMixin":21,"../../basic-component-mixins/src/SelectionAriaActiveMixin":29,"../../basic-component-mixins/src/SingleSelectionMixin":34,"../../basic-component-mixins/src/SwipeDirectionMixin":35,"../../basic-component-mixins/src/TrackpadDirectionMixin":37,"../../basic-component-mixins/src/symbols":42,"../../basic-element-base/src/ElementBase":47,"../../basic-sliding-viewport/src/SlidingViewport":61}],60:[function(require,module,exports){
'use strict';

var _SlidingViewport = require('./src/SlidingViewport');

var _SlidingViewport2 = _interopRequireDefault(_SlidingViewport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.Basic = window.Basic || {}; /*
                                    * This file is transpiled to create an ES5-compatible distribution in which
                                    * the package's main feature(s) are available via the window.Basic global.
                                    * If you're already using ES6 yourself, ignore this file, and instead import
                                    * the source file(s) you want from the src folder.
                                    */

window.Basic.SlidingViewport = _SlidingViewport2.default;

},{"./src/SlidingViewport":61}],61:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createSymbol = require('../../basic-component-mixins/src/createSymbol');

var _createSymbol2 = _interopRequireDefault(_createSymbol);

var _ElementBase = require('../../basic-element-base/src/ElementBase');

var _ElementBase2 = _interopRequireDefault(_ElementBase);

var _FractionalSelectionMixin = require('../../basic-component-mixins/src/FractionalSelectionMixin');

var _FractionalSelectionMixin2 = _interopRequireDefault(_FractionalSelectionMixin);

var _SpreadItems = require('../../basic-spread-items/src/SpreadItems');

var _SpreadItems2 = _interopRequireDefault(_SpreadItems);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// jshint ignore:line


// Symbols for private data members on an element.
var selectedItemSymbol = (0, _createSymbol2.default)('selectedItem');

var base = _ElementBase2.default.compose(_FractionalSelectionMixin2.default);

/**
 * Presents list items in a viewport such that only a single item is visible at
 * a time.
 *
 * Navigating between items will be represented with a horizontal visual
 * sliding effect. For more complex visual effects, see
 * [basic-animation-stage](../basic-animation-stage), which takes advantage of
 * the Web Animations API.
 *
 * This component handles the rendering responsibilities for the basic-carousel
 * component.
 *
 * This component currently requires that you explicitly apply a size to it.
 *
 * @extends ElementBase
 */

var SlidingViewport = function (_base) {
  _inherits(SlidingViewport, _base);

  function SlidingViewport() {
    _classCallCheck(this, SlidingViewport);

    var _this = _possibleConstructorReturn(this, (SlidingViewport.__proto__ || Object.getPrototypeOf(SlidingViewport)).call(this));

    _this.selectedFraction = 0;
    _this.showTransition = true;
    return _this;
  }

  _createClass(SlidingViewport, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      if (_get(SlidingViewport.prototype.__proto__ || Object.getPrototypeOf(SlidingViewport.prototype), 'connectedCallback', this)) {
        _get(SlidingViewport.prototype.__proto__ || Object.getPrototypeOf(SlidingViewport.prototype), 'connectedCallback', this).call(this);
      }
      this.render();
    }
  }, {
    key: 'render',
    value: function render() {
      if (_get(SlidingViewport.prototype.__proto__ || Object.getPrototypeOf(SlidingViewport.prototype), 'render', this)) {
        _get(SlidingViewport.prototype.__proto__ || Object.getPrototypeOf(SlidingViewport.prototype), 'render', this).call(this);
      }
      requestAnimationFrame(renderSelection.bind(this));
    }
  }, {
    key: 'content',
    get: function get() {
      return this.$.slidingContainer.content;
    }
  }, {
    key: 'items',
    get: function get() {
      return this.$.slidingContainer.items;
    }
  }, {
    key: 'selectedFraction',
    get: function get() {
      return _get(SlidingViewport.prototype.__proto__ || Object.getPrototypeOf(SlidingViewport.prototype), 'selectedFraction', this);
    },
    set: function set(value) {
      if ('selectedFraction' in base.prototype) {
        _set(SlidingViewport.prototype.__proto__ || Object.getPrototypeOf(SlidingViewport.prototype), 'selectedFraction', value, this);
      }
      this.render();
    }
  }, {
    key: 'selectedIndex',
    get: function get() {
      var items = this.items;
      var selectedItem = this.selectedItem;
      return items && selectedItem ? items.indexOf(selectedItem) : -1;
    },
    set: function set(index) {
      if ('selectedIndex' in base.prototype) {
        _set(SlidingViewport.prototype.__proto__ || Object.getPrototypeOf(SlidingViewport.prototype), 'selectedIndex', index, this);
      }
      var item = this.items && this.items[index];
      if (item) {
        this.selectedItem = item;
      }
    }
  }, {
    key: 'selectedItem',
    get: function get() {
      return this[selectedItemSymbol];
    },
    set: function set(item) {
      if ('selectedItem' in base.prototype) {
        _set(SlidingViewport.prototype.__proto__ || Object.getPrototypeOf(SlidingViewport.prototype), 'selectedItem', item, this);
      }
      this[selectedItemSymbol] = item;
      this.render();
    }
  }, {
    key: 'showTransition',
    get: function get() {
      return _get(SlidingViewport.prototype.__proto__ || Object.getPrototypeOf(SlidingViewport.prototype), 'showTransition', this) || this.classList.contains('showTransition');
    },
    set: function set(value) {
      if ('showTransition' in base.prototype) {
        _set(SlidingViewport.prototype.__proto__ || Object.getPrototypeOf(SlidingViewport.prototype), 'showTransition', value, this);
      }
      this.reflectClass('showTransition', value);
    }
  }, {
    key: symbols.template,
    get: function get() {
      return '\n      <style>\n      :host {\n        display: block;\n        overflow: hidden;\n        position: relative;\n      }\n\n      #slidingContainer {\n        height: 100%;\n        position: absolute;\n        /*\n         Set width for IE/Edge. It\'s not clear why they need this, and the other\n         browsers don\'t.\n         */\n        width: 100%;\n        will-change: transform;\n      }\n\n      :host(.showTransition) #slidingContainer {\n        -webkit-transition: -webkit-transform 0.2s ease-out;\n        transition: transform 0.2s ease-out;\n      }\n      </style>\n\n      <basic-spread-items id="slidingContainer" role="none">\n        <slot></slot>\n      </basic-spread-items>\n    ';
    }
  }]);

  return SlidingViewport;
}(base);

// Note: In this routine, "this" is bound to an element instance.


function renderSelection() {
  if (!this.selectedItem) {
    return;
  }
  var selection = _FractionalSelectionMixin2.default.helpers.elementSelection(this);
  var itemCount = this.items ? this.items.length : 0;
  var damped = _FractionalSelectionMixin2.default.helpers.dampedSelection(selection, itemCount);
  // Use a percentage so the transform will still work if screen size changes
  // (e.g., if device orientation changes).
  var left = -damped * 100;
  var transform = 'translateX(' + left + '%)';
  this.$.slidingContainer.style.webkitTransform = transform;
  this.$.slidingContainer.style.transform = transform;
}

customElements.define('basic-sliding-viewport', SlidingViewport);
exports.default = SlidingViewport;

},{"../../basic-component-mixins/src/FractionalSelectionMixin":18,"../../basic-component-mixins/src/createSymbol":38,"../../basic-element-base/src/ElementBase":47,"../../basic-spread-items/src/SpreadItems":63}],62:[function(require,module,exports){
'use strict';

var _SpreadItems = require('./src/SpreadItems');

var _SpreadItems2 = _interopRequireDefault(_SpreadItems);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.Basic = window.Basic || {}; /*
                                    * This file is transpiled to create an ES5-compatible distribution in which
                                    * the package's main feature(s) are available via the window.Basic global.
                                    * If you're already using ES6 yourself, ignore this file, and instead import
                                    * the source file(s) you want from the src folder.
                                    */

window.Basic.SpreadItems = _SpreadItems2.default;

},{"./src/SpreadItems":63}],63:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _ElementBase = require('../../basic-element-base/src/ElementBase');

var _ElementBase2 = _interopRequireDefault(_ElementBase);

var _DistributedChildrenContentMixin = require('../../basic-component-mixins/src/DistributedChildrenContentMixin');

var _DistributedChildrenContentMixin2 = _interopRequireDefault(_DistributedChildrenContentMixin);

var _symbols = require('../../basic-component-mixins/src/symbols');

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Spreads out a set of items horizontally so they take equal space.
 *
 * [Live demo](http://basicwebcomponents.org/basic-web-components/packages/basic-spread-items/)
 *
 * This component is used, for example, by the basic-sliding-viewport component
 * to ensure that children of different size will take up the same amount of
 * horizontal space.
 *
 * This component currently requires an explicit size by applied to it.
 *
 * @extends ElementBase
 * @mixes DistributedChildrenContentMixin
 */
var SpreadItems = function (_ElementBase$compose) {
  _inherits(SpreadItems, _ElementBase$compose);

  function SpreadItems() {
    _classCallCheck(this, SpreadItems);

    return _possibleConstructorReturn(this, (SpreadItems.__proto__ || Object.getPrototypeOf(SpreadItems)).apply(this, arguments));
  }

  _createClass(SpreadItems, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      if (_get(SpreadItems.prototype.__proto__ || Object.getPrototypeOf(SpreadItems.prototype), 'connectedCallback', this)) {
        _get(SpreadItems.prototype.__proto__ || Object.getPrototypeOf(SpreadItems.prototype), 'connectedCallback', this).call(this);
      }
      // HACK
      this[_symbols2.default.itemsChanged]();
    }
  }, {
    key: _symbols2.default.itemsChanged,


    // TODO: Should also handle contentChanged(), but need to rationalize with
    // invocation of [symbols.itemsChanged] in connectedCallback.
    value: function value() {
      if (_get(SpreadItems.prototype.__proto__ || Object.getPrototypeOf(SpreadItems.prototype), _symbols2.default.itemsChanged, this)) {
        _get(SpreadItems.prototype.__proto__ || Object.getPrototypeOf(SpreadItems.prototype), _symbols2.default.itemsChanged, this).call(this);
      }
      var items = this.items;
      var count = items.length;
      this.$.spreadContainer.style.width = count * 100 + '%';
      var itemWidth = 100 / count + "%";
      [].forEach.call(items, function (item) {
        item.style.width = itemWidth;
      });
    }
  }, {
    key: 'items',
    get: function get() {
      return this.content;
    }
  }, {
    key: _symbols2.default.template,
    get: function get() {
      return '\n      <style>\n      :host {\n        display: block;\n      }\n\n      #spreadContainer {\n        display: -webkit-flex;\n        display: flex;\n        height: 100%;\n        position: relative;\n      }\n\n      #spreadContainer ::slotted(*) {\n        object-fit: contain;\n        object-fit: var(--basic-item-object-fit, contain);\n        height: 100%;\n        -webkit-user-drag: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n      }\n      </style>\n\n      <div id="spreadContainer" role="none">\n        <slot></slot>\n      </div>\n    ';
    }
  }]);

  return SpreadItems;
}(_ElementBase2.default.compose(_DistributedChildrenContentMixin2.default));

customElements.define('basic-spread-items', SpreadItems);
exports.default = SpreadItems;

},{"../../basic-component-mixins/src/DistributedChildrenContentMixin":16,"../../basic-component-mixins/src/symbols":42,"../../basic-element-base/src/ElementBase":47}],64:[function(require,module,exports){
'use strict';

var _TabStrip = require('./src/TabStrip');

var _TabStrip2 = _interopRequireDefault(_TabStrip);

var _TabStripMixin = require('./src/TabStripMixin');

var _TabStripMixin2 = _interopRequireDefault(_TabStripMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * This file is transpiled to create an ES5-compatible distribution in which
 * the package's main feature(s) are available via the window.Basic global.
 * If you're already using ES6 yourself, ignore this file, and instead import
 * the source file(s) you want from the src folder.
 */

window.Basic = window.Basic || {};
window.Basic.TabStrip = _TabStrip2.default;
window.Basic.TabStripMixin = _TabStripMixin2.default;

},{"./src/TabStrip":65,"./src/TabStripMixin":66}],65:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _ContentItemsMixin = require('../../basic-component-mixins/src/ContentItemsMixin');

var _ContentItemsMixin2 = _interopRequireDefault(_ContentItemsMixin);

var _createSymbol = require('../../basic-component-mixins/src/createSymbol');

var _createSymbol2 = _interopRequireDefault(_createSymbol);

var _DirectionSelectionMixin = require('../../basic-component-mixins/src/DirectionSelectionMixin');

var _DirectionSelectionMixin2 = _interopRequireDefault(_DirectionSelectionMixin);

var _DistributedChildrenContentMixin = require('../../basic-component-mixins/src/DistributedChildrenContentMixin');

var _DistributedChildrenContentMixin2 = _interopRequireDefault(_DistributedChildrenContentMixin);

var _ElementBase = require('../../basic-element-base/src/ElementBase');

var _ElementBase2 = _interopRequireDefault(_ElementBase);

var _GenericMixin = require('../../basic-component-mixins/src/GenericMixin');

var _GenericMixin2 = _interopRequireDefault(_GenericMixin);

var _KeyboardDirectionMixin = require('../../basic-component-mixins/src/KeyboardDirectionMixin');

var _KeyboardDirectionMixin2 = _interopRequireDefault(_KeyboardDirectionMixin);

var _KeyboardMixin = require('../../basic-component-mixins/src/KeyboardMixin');

var _KeyboardMixin2 = _interopRequireDefault(_KeyboardMixin);

var _renderArrayAsElements = require('../../basic-component-mixins/src/renderArrayAsElements');

var _renderArrayAsElements2 = _interopRequireDefault(_renderArrayAsElements);

var _SingleSelectionMixin = require('../../basic-component-mixins/src/SingleSelectionMixin');

var _SingleSelectionMixin2 = _interopRequireDefault(_SingleSelectionMixin);

var _symbols = require('../../basic-component-mixins/src/symbols');

var _symbols2 = _interopRequireDefault(_symbols);

var _toggleClass = require('../../basic-component-mixins/src/toggleClass');

var _toggleClass2 = _interopRequireDefault(_toggleClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // import ClickSelectionMixin from '../../basic-component-mixins/src/ClickSelectionMixin';


// Symbols for private data members on an element.
var panelsSymbol = (0, _createSymbol2.default)('panels');
var spreadTabsSymbol = (0, _createSymbol2.default)('spreadTabs');
var tabPositionSymbol = (0, _createSymbol2.default)('tabPosition');

/**
 * A set of pages with a tab strip governing which page is shown.
 *
 * This stock combination applies the [TabStripMixin](../basic-tab-strip/) to a
 * [basic-modes](../basic-modes/) element. If you'd like to create something
 * more complex than this arrangement, you can use either of those elements on
 * its own.
 *
 * Since this component uses `TabStripMixin`, it obtains the names of the
 * individual tabs from a child's `aria-label` property. Example:
 *
 *     <basic-tabs>
 *       <div aria-label="One">Page one</div>
 *       <div aria-label="Two">Page two</div>
 *       <div aria-label="Three">Page three</div>
 *     </basic-tabs>
 *
 * @extends ElementBase
 * @mixes ClickSelectionMixin
 * @mixes ContentItemsMixin
 * @mixes DirectionSelectionMixin
 * @mixes DistributedChildrenContentMixin
 * @mixes GenericMixin
 * @mixes KeyboardMixin
 * @mixes KeyboardDirectionMixin
 * @mixes SingleSelectionMixin
 */

var TabStrip = function (_ElementBase$compose) {
  _inherits(TabStrip, _ElementBase$compose);

  function TabStrip() {
    _classCallCheck(this, TabStrip);

    // Handle clicks/Enter on tab buttons.
    // TODO: Rationalize with ClickSelection?
    var _this = _possibleConstructorReturn(this, (TabStrip.__proto__ || Object.getPrototypeOf(TabStrip)).call(this));

    _this.addEventListener('click', function (event) {
      var tab = event.path[0];
      var index = Array.prototype.indexOf.call(_this.items, tab);
      if (index >= 0 && _this.selectedIndex !== index) {
        _this.selectedIndex = index;
        // Note: We don't call preventDefault here. The default behavior for
        // mousedown includes setting keyboard focus if the element doesn't
        // already have the focus, and we want to preserve that behavior.
        event.stopPropagation();
      }
    });

    // Set defaults.
    if (typeof _this.tabPosition === 'undefined') {
      _this.tabPosition = _this[_symbols2.default.defaults].tabPosition;
    }
    return _this;
  }

  _createClass(TabStrip, [{
    key: _symbols2.default.itemSelected,
    value: function value(item, selected) {
      if (_get(TabStrip.prototype.__proto__ || Object.getPrototypeOf(TabStrip.prototype), _symbols2.default.itemSelected, this)) {
        _get(TabStrip.prototype.__proto__ || Object.getPrototypeOf(TabStrip.prototype), _symbols2.default.itemSelected, this).call(this, item, selected);
      }
      applySelectionToTab(item, selected);
    }
  }, {
    key: _symbols2.default.keydown,
    value: function value(event) {
      var handled = _get(TabStrip.prototype.__proto__ || Object.getPrototypeOf(TabStrip.prototype), _symbols2.default.keydown, this) && _get(TabStrip.prototype.__proto__ || Object.getPrototypeOf(TabStrip.prototype), _symbols2.default.keydown, this).call(this, event);
      if (handled && this.selectedItem) {
        // If the event resulted in a change of selection, move the focus to the
        // newly-selected tab.
        this.selectedItem.focus();
      }
      return handled;
    }
  }, {
    key: _symbols2.default.defaults,
    get: function get() {
      var defaults = _get(TabStrip.prototype.__proto__ || Object.getPrototypeOf(TabStrip.prototype), _symbols2.default.defaults, this) || {};
      defaults.tabindex = null;
      defaults.tabPosition = 'top';
      return defaults;
    }
  }, {
    key: 'items',
    get: function get() {
      return this.$.tabs.children;
    }
  }, {
    key: 'panels',
    get: function get() {
      return this[panelsSymbol];
    },
    set: function set(panels) {
      this[panelsSymbol] = panels;

      // Create one tab for each panel.
      var selectedIndex = this.selectedIndex;
      var selectedPanel = panels[selectedIndex];
      (0, _renderArrayAsElements2.default)(panels, this.$.tabs, function (panel, tab) {
        if (!tab) {
          tab = document.createElement('button');
          tab.classList.add('tab');
          tab.classList.add('style-scope');
          tab.classList.add('basic-tab-strip');
          tab.setAttribute('role', 'tab');
          tab.setAttribute('tabindex', 0);
        }
        tab.id = panel.id + '_tab';
        tab.textContent = panel.getAttribute('aria-label');

        // Point tab and panel at each other.
        tab.setAttribute('aria-controls', panel.id);
        panel.setAttribute('aria-labelledby', tab.id);

        applySelectionToTab(tab, panel === selectedPanel);

        return tab;
      });

      this[_symbols2.default.itemsChanged]();
    }
  }, {
    key: 'spreadTabs',
    get: function get() {
      return this[spreadTabsSymbol];
    },
    set: function set(value) {
      this[spreadTabsSymbol] = value;
      (0, _toggleClass2.default)(this, 'spread', value);
    }

    /**
     * The position of the tab strip relative to the element's children. Valid
     * values are "top", "left", "right", and "bottom".
     *
     * @default "top"
     * @type {string}
     */

  }, {
    key: 'tabPosition',
    get: function get() {
      return this[tabPositionSymbol];
    },
    set: function set(position) {
      this[tabPositionSymbol] = position;
      this.reflectAttribute('tab-position', position);
      this.navigationAxis = position === 'top' || position === 'bottom' ? 'horizontal' : 'vertical';
    }
  }, {
    key: _symbols2.default.template,
    get: function get() {
      return '\n      <style>\n        :host {\n          display: -webkit-flex;\n          display: flex;\n        }\n\n        /*\n         * Avoid having tab container stretch across. User won\'t be able to see\n         * it, but since it handles the keyboard, in Mobile Safari a tap on the\n         * container background will cause the region to flash. Aligning the\n         * region collapses it down to hold its contents.\n         */\n        #tabs {\n          /* For IE bug (clicking tab produces gap between tab and page). */\n          display: -webkit-flex;\n          display: flex;\n          -webkit-flex-direction: row;\n          flex-direction: row;\n          -webkit-flex: 1;\n          flex: 1;\n          /*\n           * Try to obtain fast-tap behavior on all tabs.\n           * See https://webkit.org/blog/5610/more-responsive-tapping-on-ios/.\n           */\n          touch-action: manipulation;\n        }\n        :host(:not(.spread)) #tabs {\n          -webkit-align-self: flex-start;\n          align-self: flex-start;\n        }\n\n        .tab {\n          cursor: pointer;\n          display: inline-block;\n          font-family: inherit;\n          font-size: inherit;\n          position: relative;\n        }\n\n        :host([generic=""]) .tab {\n          background: white;\n          border: 1px solid #ccc;\n          margin: 0;\n          padding: 0.5em 0.75em;\n          transition: border-color 0.25s;\n        }\n\n        :host([generic=""]) .tab.selected {\n          border-color: #ccc;\n          opacity: 1;\n        }\n\n        :host([generic=""]) .tab:hover {\n          background-color: #eee;\n        }\n\n        /* Left/right positions */\n        :host([tab-position="left"]) #tabs,\n        :host([tab-position="right"]) #tabs {\n          -webkit-flex-direction: column;\n          flex-direction: column;\n        }\n\n        /* Spread variant */\n        :host(.spread) #tabs {\n          -webkit-align-items: stretch;\n          align-items: stretch;\n        }\n        :host(.spread) .tab {\n          -webkit-flex: 1;\n          flex: 1;\n        }\n\n        /* Generic style, top/bottom positions */\n        :host([generic=""][tab-position="top"]) .tab:not(:last-child),\n        :host([generic=""][tab-position="bottom"]) .tab:not(:last-child) {\n          margin-right: 0.2em;\n        }\n\n        /* Generic style, top position */\n        :host([generic=""][tab-position="top"]) .tab {\n          border-radius: 0.25em 0.25em 0 0;\n          margin-bottom: -1px;\n        }\n        :host([generic=""][tab-position="top"]) .tab.selected {\n          border-bottom-color: transparent;\n        }\n\n        /* Generic style, bottom position */\n        :host([generic=""][tab-position="bottom"]) .tab {\n          border-radius: 0 0 0.25em 0.25em;\n          margin-top: -1px;\n        }\n        :host([generic=""][tab-position="bottom"]) .tab.selected {\n          border-top-color: transparent;\n        }\n\n        /* Generic style, left/right positions */\n        :host([generic=""][tab-position="left"]) .tab:not(:last-child),\n        :host([generic=""][tab-position="right"]) .tab:not(:last-child) {\n          margin-bottom: 0.2em;\n        }\n\n        /* Generic style, left position */\n        :host([generic=""][tab-position="left"]) .tab {\n          border-radius: 0.25em 0 0 0.25em;\n          margin-right: -1px;\n        }\n        :host([generic=""][tab-position="left"]) .tab.selected {\n          border-right-color: transparent;\n        }\n\n        /* Generic style, right position */\n        :host([generic=""][tab-position="right"]) .tab {\n          border-radius: 0 0.25em 0.25em 0;\n          margin-left: -1px;\n        }\n        :host([generic=""][tab-position="right"]) .tab.selected {\n          border-left-color: transparent;\n        }\n      </style>\n      <div id="tabs" role="tablist"></div>\n    ';
    }
  }]);

  return TabStrip;
}(_ElementBase2.default.compose(
// ClickSelectionMixin,
_DirectionSelectionMixin2.default, _GenericMixin2.default, _KeyboardMixin2.default, _KeyboardDirectionMixin2.default, _ContentItemsMixin2.default, _DistributedChildrenContentMixin2.default, _SingleSelectionMixin2.default));

function applySelectionToTab(tab, selected) {
  tab.setAttribute('aria-selected', selected);
}

customElements.define('basic-tab-strip', TabStrip);
exports.default = TabStrip;

},{"../../basic-component-mixins/src/ContentItemsMixin":14,"../../basic-component-mixins/src/DirectionSelectionMixin":15,"../../basic-component-mixins/src/DistributedChildrenContentMixin":16,"../../basic-component-mixins/src/GenericMixin":19,"../../basic-component-mixins/src/KeyboardDirectionMixin":20,"../../basic-component-mixins/src/KeyboardMixin":21,"../../basic-component-mixins/src/SingleSelectionMixin":34,"../../basic-component-mixins/src/createSymbol":38,"../../basic-component-mixins/src/renderArrayAsElements":40,"../../basic-component-mixins/src/symbols":42,"../../basic-component-mixins/src/toggleClass":43,"../../basic-element-base/src/ElementBase":47}],66:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _TabStrip = require('./TabStrip');

var _TabStrip2 = _interopRequireDefault(_TabStrip);

var _symbols = require('../../basic-component-mixins/src/symbols');

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // jshint ignore:line


// Used to assign unique IDs to tabs for ARIA purposes.
var idCount = 0;

/* Exported function extends a base class with TabStrip. */

exports.default = function (base) {

  /**
   * A template mixin which adds strip of tabs for selecting one of the
   * component's children.
   *
   * The component creates a tab to represent each of its light DOM children.
   * The tab name is obtained by examining the children for an `aria-label`
   * property.
   *
   * Use tabs when you want to provide a large set of options or elements than
   * can comfortably fit inline, the options can be coherently grouped into pages,
   * and you want to avoid making the user navigate to a separate page. Tabs work
   * best if you only have a small handful of pages, say 2–7.
   *
   * The basic-tab-strip component does not define how a selected child is
   * represented. If you're looking for the standard behavior of just showing only
   * the selected child, you can use this component in combination with the
   * separate [basic-modes](../basic-modes/) component. A typical arrangement:
   *
   *     <basic-tab-strip>
   *       <basic-modes aria-label="Panels">
   *         <div aria-label="One">Page one</div>
   *         <div aria-label="Two">Page two</div>
   *         <div aria-label="Three">Page three</div>
   *       </basic-modes>
   *     </basic-tab-strip>
   *
   * The above combination is so common it is provided as a single component,
   * [basic-tabs](../basic-tabs/).
   *
   * The user can select a tab with the mouse or touch, as well as by through the
   * keyboard. Each tab appears as a separate button in the tab order.
   * Additionally, if the focus is currently on a tab, the user can quickly
   * navigate between tabs with the left/right arrow keys (or, if the tabs are
   * in vertical position, the up/down arrow keys).
   *
   * By default, the tabs are shown grouped to the left, where each tab is only
   * as big as necessary. You can apply the `spread` CSS class to a
   * basic-tab-strip element for a variant appearance in which the available width
   * of the element is divided up equally among tabs.
   *
   * The GenericMixin default styling of the tab strip will present the classic
   * skeumorphic look of rounded tabs attached to a surface. You can remove this
   * styling by setting the `GenericMixin` property/attribute to false.
   */
  var TabStrip = function (_base) {
    _inherits(TabStrip, _base);

    function TabStrip() {
      _classCallCheck(this, TabStrip);

      var _this = _possibleConstructorReturn(this, (TabStrip.__proto__ || Object.getPrototypeOf(TabStrip)).call(this));

      _this.$.tabStrip.addEventListener('selected-item-changed', function (event) {
        var selectedIndex = event.target.selectedIndex;
        if (_this.selectedIndex !== selectedIndex) {
          _this.selectedIndex = selectedIndex;
        }
      });
      return _this;
    }

    _createClass(TabStrip, [{
      key: _symbols2.default.itemsChanged,
      value: function value() {
        if (_get(TabStrip.prototype.__proto__ || Object.getPrototypeOf(TabStrip.prototype), _symbols2.default.itemsChanged, this)) {
          _get(TabStrip.prototype.__proto__ || Object.getPrototypeOf(TabStrip.prototype), _symbols2.default.itemsChanged, this).call(this);
        }

        var baseId = this.id ? "_" + this.id + "Panel" : "_panel";

        // Confirm that items have at least a default role and ID for ARIA purposes.
        this.items.forEach(function (item) {
          // if (!item.getAttribute('role')) {
          item.setAttribute('role', 'tabpanel');
          // }
          if (!item.id) {
            item.id = baseId + idCount++;
          }
        });

        // Point the tab strip at the panels.
        this.$.tabStrip.panels = this.items;
        this.$.tabStrip.selectedIndex = this.selectedIndex;
      }
    }, {
      key: _symbols2.default.defaults,
      get: function get() {
        var defaults = _get(TabStrip.prototype.__proto__ || Object.getPrototypeOf(TabStrip.prototype), _symbols2.default.defaults, this) || {};
        defaults.tabPosition = 'top';
        return defaults;
      }
    }, {
      key: 'generic',
      get: function get() {
        return _get(TabStrip.prototype.__proto__ || Object.getPrototypeOf(TabStrip.prototype), 'generic', this);
      },
      set: function set(value) {
        if ('generic' in base.prototype) {
          _set(TabStrip.prototype.__proto__ || Object.getPrototypeOf(TabStrip.prototype), 'generic', value, this);
        }
        this.$.tabStrip.generic = value;
      }
    }, {
      key: 'selectedIndex',
      get: function get() {
        return _get(TabStrip.prototype.__proto__ || Object.getPrototypeOf(TabStrip.prototype), 'selectedIndex', this);
      },
      set: function set(value) {
        if ('selectedIndex' in base.prototype) {
          _set(TabStrip.prototype.__proto__ || Object.getPrototypeOf(TabStrip.prototype), 'selectedIndex', value, this);
        }
        if (this.$.tabStrip.selectedIndex !== value) {
          this.$.tabStrip.selectedIndex = value;
        }
      }
    }, {
      key: 'spreadTabs',
      get: function get() {
        return this.$.tabStrip.spreadTabs;
      },
      set: function set(value) {
        this.$.tabStrip.spreadTabs = value;
      }
    }, {
      key: 'tabPosition',
      get: function get() {
        return this.$.tabStrip.tabPosition;
      },
      set: function set(position) {
        this.$.tabStrip.tabPosition = position;
        this.reflectAttribute('tab-position', position);

        // Physically reorder the tabs and pages to reflect the desired arrangement.
        // We could change the visual appearance by reversing the order of the flex
        // box, but then the visual order wouldn't reflect the document order, which
        // determines focus order. That would surprise a user trying to tab through
        // the controls.
        var firstElement = position === 'top' || position === 'left' ? this.$.tabStrip : this.$.pages;
        var lastElement = position === 'top' || position === 'left' ? this.$.pages : this.$.tabStrip;
        if (firstElement.nextSibling !== lastElement) {
          this.shadowRoot.insertBefore(firstElement, lastElement);
        }
      }
    }, {
      key: _symbols2.default.template,
      get: function get() {
        var baseTemplate = _get(TabStrip.prototype.__proto__ || Object.getPrototypeOf(TabStrip.prototype), _symbols2.default.template, this) || '';
        return '\n        <style>\n        :host {\n          display: -webkit-flex;\n          display: flex;\n          -webkit-flex-direction: column;\n          flex-direction: column;\n          position: relative;\n        }\n\n        #pages {\n          display: -webkit-flex;\n          display: flex;\n          -webkit-flex: 1;\n          flex: 1;\n          -webkit-flex-direction: column;\n          flex-direction: column;\n        }\n\n        #pages ::slotted(*) {\n          display: -webkit-flex;\n          display: flex;\n          -webkit-flex: 1;\n          flex: 1;\n        }\n\n        /* Left/right positions */\n        :host([tab-position="left"]),\n        :host([tab-position="right"]) {\n          -webkit-flex-direction: row;\n          flex-direction: row;\n        }\n\n        /* Generic style */\n        :host([generic=""]) #pages {\n          background: white;\n          border: 1px solid #ccc;\n          box-sizing: border-box;\n        }\n        </style>\n\n        <basic-tab-strip id="tabStrip" role="tablist"></basic-tab-strip>\n        <div id="pages">\n          ' + baseTemplate + '\n        </div>\n      ';
      }
    }]);

    return TabStrip;
  }(base);

  return TabStrip;
};

},{"../../basic-component-mixins/src/symbols":42,"./TabStrip":65}],67:[function(require,module,exports){
'use strict';

var _Tabs = require('./src/Tabs');

var _Tabs2 = _interopRequireDefault(_Tabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.Basic = window.Basic || {}; /*
                                    * This file is transpiled to create an ES5-compatible distribution in which
                                    * the package's main feature(s) are available via the window.Basic global.
                                    * If you're already using ES6 yourself, ignore this file, and instead import
                                    * the source file(s) you want from the src folder.
                                    */

window.Basic.Tabs = _Tabs2.default;

},{"./src/Tabs":68}],68:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GenericMixin = require('../../basic-component-mixins/src/GenericMixin');

var _GenericMixin2 = _interopRequireDefault(_GenericMixin);

var _Modes = require('../../basic-modes/src/Modes');

var _Modes2 = _interopRequireDefault(_Modes);

var _TabStripMixin = require('../../basic-tab-strip/src/TabStripMixin');

var _TabStripMixin2 = _interopRequireDefault(_TabStripMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var base = _Modes2.default.compose(_GenericMixin2.default, _TabStripMixin2.default);

/**
 * A set of pages with a tab strip governing which page is shown.
 *
 * This stock combination applies the [TabStripMixin](../basic-tab-strip/) to a
 * [basic-modes](../basic-modes/) element. If you'd like to create something
 * more complex than this arrangement, you can use either of those elements on
 * its own.
 *
 * Since this component uses `TabStripMixin`, it obtains the names of the
 * individual tabs from a child's `aria-label` property. Example:
 *
 *     <basic-tabs>
 *       <div aria-label="One">Page one</div>
 *       <div aria-label="Two">Page two</div>
 *       <div aria-label="Three">Page three</div>
 *     </basic-tabs>
 *
 * @extends Modes
 * @mixes GenericMixin
 */

var Tabs = function (_base) {
  _inherits(Tabs, _base);

  function Tabs() {
    _classCallCheck(this, Tabs);

    return _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).apply(this, arguments));
  }

  return Tabs;
}(base);

customElements.define('basic-tabs', Tabs);
exports.default = Tabs;

},{"../../basic-component-mixins/src/GenericMixin":19,"../../basic-modes/src/Modes":53,"../../basic-tab-strip/src/TabStripMixin":66}],69:[function(require,module,exports){
'use strict';

var _globals = require('../basic-animation-stage/globals');

var animationStage = _interopRequireWildcard(_globals);

var _globals2 = require('../basic-autosize-textarea/globals');

var autosizeTextarea = _interopRequireWildcard(_globals2);

var _globals3 = require('../basic-carousel/globals');

var carousel = _interopRequireWildcard(_globals3);

var _globals4 = require('../basic-collapsible-panel/globals');

var collapsiblePanel = _interopRequireWildcard(_globals4);

var _globals5 = require('../basic-component-mixins/globals');

var componentMixins = _interopRequireWildcard(_globals5);

var _globals6 = require('../basic-current-anchor/globals');

var currentAnchor = _interopRequireWildcard(_globals6);

var _globals7 = require('../basic-element-base/globals');

var elementBase = _interopRequireWildcard(_globals7);

var _globals8 = require('../basic-fade-overflow/globals');

var fadeOverflow = _interopRequireWildcard(_globals8);

var _globals9 = require('../basic-list-box/globals');

var listBox = _interopRequireWildcard(_globals9);

var _globals10 = require('../basic-modes/globals');

var modes = _interopRequireWildcard(_globals10);

var _globals11 = require('../basic-slideshow/globals');

var slideshow = _interopRequireWildcard(_globals11);

var _globals12 = require('../basic-slideshow-with-controls/globals');

var slideshowWithControls = _interopRequireWildcard(_globals12);

var _globals13 = require('../basic-sliding-carousel/globals');

var slidingCarousel = _interopRequireWildcard(_globals13);

var _globals14 = require('../basic-sliding-viewport/globals');

var slidingViewport = _interopRequireWildcard(_globals14);

var _globals15 = require('../basic-spread-items/globals');

var spreadItems = _interopRequireWildcard(_globals15);

var _globals16 = require('../basic-tabs/globals');

var tabs = _interopRequireWildcard(_globals16);

var _globals17 = require('../basic-tab-strip/globals');

var tabStrip = _interopRequireWildcard(_globals17);

var _globals18 = require('../basic-web-components/globals');

var webComponents = _interopRequireWildcard(_globals18);

var _globals19 = require('../basic-wrapped-standard-element/globals');

var wrappedStandardElement = _interopRequireWildcard(_globals19);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

},{"../basic-animation-stage/globals":1,"../basic-autosize-textarea/globals":3,"../basic-carousel/globals":5,"../basic-collapsible-panel/globals":7,"../basic-component-mixins/globals":9,"../basic-current-anchor/globals":44,"../basic-element-base/globals":46,"../basic-fade-overflow/globals":48,"../basic-list-box/globals":50,"../basic-modes/globals":52,"../basic-slideshow-with-controls/globals":54,"../basic-slideshow/globals":56,"../basic-sliding-carousel/globals":58,"../basic-sliding-viewport/globals":60,"../basic-spread-items/globals":62,"../basic-tab-strip/globals":64,"../basic-tabs/globals":67,"../basic-web-components/globals":69,"../basic-wrapped-standard-element/globals":70}],70:[function(require,module,exports){
'use strict';

var _WrappedStandardElement = require('./src/WrappedStandardElement');

var _WrappedStandardElement2 = _interopRequireDefault(_WrappedStandardElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.Basic = window.Basic || {}; /*
                                    * This file is transpiled to create an ES5-compatible distribution in which
                                    * the package's main feature(s) are available via the window.Basic global.
                                    * If you're already using ES6 yourself, ignore this file, and instead import
                                    * the source file(s) you want from the src folder.
                                    */

window.Basic.WrappedStandardElement = _WrappedStandardElement2.default;

},{"./src/WrappedStandardElement":71}],71:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ElementBase2 = require('../../basic-element-base/src/ElementBase');

var _ElementBase3 = _interopRequireDefault(_ElementBase2);

var _symbols = require('../../basic-component-mixins/src/symbols');

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * A set of events which, if fired by the inner standard element, should be
 * re-raised by the custom element. (We only need to do that under native
 * Shadow DOM, not the polyfill.)
 *
 * These are events which are spec'ed to NOT get retargetted across a Shadow DOM
 * boundary, organized by which element(s) raise the events. To properly
 * simulate these, we will need to listen for the real events, then re-raise a
 * simulation of the original event. For more information, see
 * https://www.w3.org/TR/shadow-dom/#h-events-that-are-not-leaked-into-ancestor-trees.
 *
 * It appears that we do *not* need to re-raise the non-bubbling "focus" and
 * "blur" events. These appear to be automatically re-raised as expected -- but
 * it's not clear why that happens.
 *
 * The list below is reasonably complete. It omits elements that cannot be
 * wrapped (see class notes above). Also, we haven't actually tried wrapping
 * every element in this list; some of the more obscure ones might not actually
 * work as expected, but it was easier to include them for completeness than
 * to actually verify whether or not the element can be wrapped.
 */
var reraiseEvents = {
  address: ['scroll'],
  blockquote: ['scroll'],
  caption: ['scroll'],
  center: ['scroll'],
  dd: ['scroll'],
  dir: ['scroll'],
  div: ['scroll'],
  dl: ['scroll'],
  dt: ['scroll'],
  fieldset: ['scroll'],
  form: ['reset', 'scroll'],
  frame: ['load'],
  h1: ['scroll'],
  h2: ['scroll'],
  h3: ['scroll'],
  h4: ['scroll'],
  h5: ['scroll'],
  h6: ['scroll'],
  iframe: ['load'],
  img: ['abort', 'error', 'load'],
  input: ['abort', 'change', 'error', 'select', 'load'],
  keygen: ['reset', 'select'],
  li: ['scroll'],
  link: ['load'],
  menu: ['scroll'],
  object: ['error', 'scroll'],
  ol: ['scroll'],
  p: ['scroll'],
  script: ['error', 'load'],
  select: ['change', 'scroll'],
  tbody: ['scroll'],
  tfoot: ['scroll'],
  thead: ['scroll'],
  textarea: ['change', 'select', 'scroll']
};

// Keep track of which re-raised events should bubble.
var eventBubbles = {
  abort: true,
  change: true,
  reset: true
};

// Elements which are display: block by default.
// Source: https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements
var blockElements = ['address', 'article', 'aside', 'blockquote', 'canvas', 'dd', 'div', 'dl', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'hgroup', 'hr', 'li', 'main', 'nav', 'noscript', 'ol', 'output', 'p', 'pre', 'section', 'table', 'tfoot', 'ul', 'video'];

/**
 * Wraps a standard HTML element so that the standard behavior can then be
 * extended.
 *
 * [Live demo](http://basicwebcomponents.org/basic-web-components/packages/basic-wrapped-standard-element/)
 *
 * See also [basic-autosize-textarea](../basic-autosize-textarea) and
 * [basic-current-anchor](../basic-current-anchor). The former uses
 * WrappedStandardElement to wrap a standard `<textarea>` and `<a>`,
 * respectively.
 *
 * The Custom Elements spec does not currently (as of March 2016) allow you to
 * extend the behavior of a standard HTML element like `<a>` or `<button>`.
 * As a partial workaround, the WrappedStandardElement class can create a class
 * for you that wraps an instance of a standard HTML element. For example, the
 * code below creates a class that will wrap an instance of a standard `<a>`
 * element:
 *
 *     class WrappedA extends WrappedStandardElement.wrap('a') {
 *       customMethod() { ... }
 *     }
 *     customElements.define('wrapped-a', WrappedA);
 *
 * An instance of the resulting class will look to the user like an instance of
 * the standard element class it wraps. The resulting class will *not* be an
 * `instanceof` the standard class (here, HTMLAnchorElement). Another limitation
 * is that the resulting `<wrapped-a>` will not automatically pick up CSS styles
 * for standard `<a>` elements. However, the resulting class *can* be extended.
 * E.g., instances of the above class have a `customMethod()` available to them.
 *
 * Any properties defined by the original standard element will be exposed on
 * the resulting wrapper class, and calls to get or set those properties will be
 * delegated to the wrapped element instance. Continuing the above example:
 *
 *     let wrapped = document.createElement('wrapped-a');
 *     wrapped.href = 'http://example.com/';
 *     wrapped.textContent = 'Click here';
 *
 * Here, the created custom `<wrapped-a>` element will contain inside its
 * shadow tree an instance of a standard `<a>` element. The call to set the
 * wrapper's `href` property will ultimately set the `href` on the inner link.
 * Moreover, the text content of the `<wrapped-a>` element will appear inside
 * the inner link. The result of all this is that the user will see what *looks*
 * like a normal link, just as if you had written
 * `<a href="http://example.com/">Click here</a>`. However, the actual element
 * will be an instance of your custom class, with whatever behavior you've
 * defined for it.
 *
 * Wrapped elements should raise the same events as the original standard
 * elements. E.g., if you wrap an `<img>` element, the wrapped result will raise
 * the standard `load` event as expected.
 *
 * Some elements, such as `<body>`, `<html>`, and `<style>` cannot be wrapped
 * and still achieve their standard behavior.
 *
 * @extends ElementBase
 */

var WrappedStandardElement = function (_ElementBase) {
  _inherits(WrappedStandardElement, _ElementBase);

  function WrappedStandardElement() {
    _classCallCheck(this, WrappedStandardElement);

    // Listen for any events raised by the inner element which will not
    // automatically be retargetted across the Shadow DOM boundary, and re-raise
    // those events when they happen.
    //
    // Note: It's unclear why we need to do this in the Shadow DOM polyfill.
    // In theory, events in the light DOM should bubble as normal. But this
    // code appears to be required in the polyfill case as well.
    var _this = _possibleConstructorReturn(this, (WrappedStandardElement.__proto__ || Object.getPrototypeOf(WrappedStandardElement)).call(this));

    var eventNames = reraiseEvents[_this.extends] || [];
    eventNames.forEach(function (eventName) {
      _this.inner.addEventListener(eventName, function (realEvent) {
        var event = new Event(eventName, {
          bubbles: eventBubbles[eventName] || false
        });
        _this.dispatchEvent(event);
      });
    });
    return _this;
  }

  /**
   * A description for the user of the element's purpose on the page. Setting
   * this applies the label to the inner element, ensuring that screen readers
   * and other assistive technologies will provide a meaningful description to
   * the user.
   *
   * @type {string}
   */


  _createClass(WrappedStandardElement, [{
    key: 'ariaLabel',
    get: function get() {
      return this.inner.getAttribute('aria-label');
    },
    set: function set(label) {
      // Propagate the ARIA label to the inner textarea.
      this.inner.setAttribute('aria-label', label);
    }

    /**
     * Returns a reference to the inner standard HTML element.
     *
     * @type {HTMLElement}
     */

  }, {
    key: 'inner',
    get: function get() {
      return this.$.inner;
    }

    /**
     * The template copied into the shadow tree of new instances of this element.
     *
     * The default value of this property is a template that includes an instance
     * the standard element being wrapped, with a `<slot>` element inside that
     * to pick up the element's light DOM content. For example, if you wrap an
     * `<a>` element, then the default template will look like:
     *
     *     <template>
     *       <style>
     *       :host {
     *         display: inline-block;
     *       }
     *       </style>
     *       <a id="inner">
     *         <slot></slot>
     *       </a>
     *     </template>
     *
     * The `display` styling applied to the host will be `block` for elements that
     * are block elements by default, and `inline-block` (not `inline`) for other
     * elements.
     *
     * If you'd like the template to include other elements, then override this
     * property and return a template of your own. The template should include an
     * instance of the standard HTML element you are wrapping, and the ID of that
     * element should be "inner".
     *
     * @type {(string|HTMLTemplateElement)}
     */

  }, {
    key: _symbols2.default.template,
    get: function get() {
      var display = blockElements.indexOf(this.extends) >= 0 ? 'block' : 'inline-block';
      return '<style>:host { display: ' + display + '}</style><' + this.extends + ' id="inner"><slot></slot></' + this.extends;
    }

    /**
     * Creates a class that wraps a standard HTML element.
     *
     * Note that the resulting class is a subclass of WrappedStandardElement, not
     * the standard class being wrapped. E.g., if you call
     * `WrappedStandardElement.wrap('a')`, you will get a class whose shadow tree
     * will include an anchor element, but the class will *not* inherit from
     * HTMLAnchorElement.
     *
     * @param {string} extendsTag - the standard HTML element tag to extend
     */

  }], [{
    key: 'wrap',
    value: function wrap(extendsTag) {

      // Create the new class.
      var Wrapped = function (_WrappedStandardEleme) {
        _inherits(Wrapped, _WrappedStandardEleme);

        function Wrapped() {
          _classCallCheck(this, Wrapped);

          return _possibleConstructorReturn(this, (Wrapped.__proto__ || Object.getPrototypeOf(Wrapped)).apply(this, arguments));
        }

        return Wrapped;
      }(WrappedStandardElement);

      // Indicate which tag it wraps.


      Wrapped.prototype.extends = extendsTag;

      // Create getter/setters that delegate to the wrapped element.
      var element = document.createElement(extendsTag);
      var extendsPrototype = element.constructor.prototype;
      var names = Object.getOwnPropertyNames(extendsPrototype);
      names.forEach(function (name) {
        var descriptor = Object.getOwnPropertyDescriptor(extendsPrototype, name);
        var delegate = createPropertyDelegate(name, descriptor);
        Object.defineProperty(Wrapped.prototype, name, delegate);
      });

      return Wrapped;
    }
  }]);

  return WrappedStandardElement;
}(_ElementBase3.default);

function createPropertyDelegate(name, descriptor) {
  var delegate = {
    configurable: descriptor.configurable,
    enumerable: descriptor.enumerable
  };
  if (descriptor.get) {
    delegate.get = function () {
      return this.inner[name];
    };
  }
  if (descriptor.set) {
    delegate.set = function (value) {
      this.inner[name] = value;
    };
  }
  if (descriptor.writable) {
    delegate.writable = descriptor.writable;
  }
  return delegate;
}

exports.default = WrappedStandardElement;

},{"../../basic-component-mixins/src/symbols":42,"../../basic-element-base/src/ElementBase":47}]},{},[69])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwYWNrYWdlcy9iYXNpYy1hbmltYXRpb24tc3RhZ2UvZ2xvYmFscy5qcyIsInBhY2thZ2VzL2Jhc2ljLWFuaW1hdGlvbi1zdGFnZS9zcmMvQW5pbWF0aW9uU3RhZ2UuanMiLCJwYWNrYWdlcy9iYXNpYy1hdXRvc2l6ZS10ZXh0YXJlYS9nbG9iYWxzLmpzIiwicGFja2FnZXMvYmFzaWMtYXV0b3NpemUtdGV4dGFyZWEvc3JjL0F1dG9zaXplVGV4dGFyZWEuanMiLCJwYWNrYWdlcy9iYXNpYy1jYXJvdXNlbC9nbG9iYWxzLmpzIiwicGFja2FnZXMvYmFzaWMtY2Fyb3VzZWwvc3JjL0Nhcm91c2VsLmpzIiwicGFja2FnZXMvYmFzaWMtY29sbGFwc2libGUtcGFuZWwvZ2xvYmFscy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbGxhcHNpYmxlLXBhbmVsL3NyYy9Db2xsYXBzaWJsZVBhbmVsLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9nbG9iYWxzLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQXJyb3dTZWxlY3Rpb25NaXhpbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0F0dHJpYnV0ZU1hcnNoYWxsaW5nTWl4aW4uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9DbGlja1NlbGVjdGlvbk1peGluLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ29tcG9zYWJsZU1peGluLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ29udGVudEl0ZW1zTWl4aW4uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXJlY3Rpb25TZWxlY3Rpb25NaXhpbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW5Db250ZW50TWl4aW4uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXN0cmlidXRlZENoaWxkcmVuTWl4aW4uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9GcmFjdGlvbmFsU2VsZWN0aW9uTWl4aW4uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9HZW5lcmljTWl4aW4uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9LZXlib2FyZERpcmVjdGlvbk1peGluLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvS2V5Ym9hcmRNaXhpbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0tleWJvYXJkUGFnZWRTZWxlY3Rpb25NaXhpbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0tleWJvYXJkUHJlZml4U2VsZWN0aW9uTWl4aW4uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9PcGVuQ2xvc2VNaXhpbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1BhZ2VEb3RzTWl4aW4uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9QbGF5Q29udHJvbHNNaXhpbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NlbGVjdGVkSXRlbVRleHRWYWx1ZU1peGluLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2VsZWN0aW9uQW5pbWF0aW9uTWl4aW4uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TZWxlY3Rpb25BcmlhQWN0aXZlTWl4aW4uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TZWxlY3Rpb25IaWdobGlnaHRNaXhpbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NlbGVjdGlvbkluVmlld01peGluLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2hhZG93RWxlbWVudFJlZmVyZW5jZXNNaXhpbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NoYWRvd1RlbXBsYXRlTWl4aW4uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TaW5nbGVTZWxlY3Rpb25NaXhpbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1N3aXBlRGlyZWN0aW9uTWl4aW4uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9UaW1lclNlbGVjdGlvbk1peGluLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvVHJhY2twYWREaXJlY3Rpb25NaXhpbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL2NyZWF0ZVN5bWJvbC5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL21pY3JvdGFzay5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL3JlbmRlckFycmF5QXNFbGVtZW50cy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL3NhZmVBdHRyaWJ1dGVzLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvc3ltYm9scy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL3RvZ2dsZUNsYXNzLmpzIiwicGFja2FnZXMvYmFzaWMtY3VycmVudC1hbmNob3IvZ2xvYmFscy5qcyIsInBhY2thZ2VzL2Jhc2ljLWN1cnJlbnQtYW5jaG9yL3NyYy9DdXJyZW50QW5jaG9yLmpzIiwicGFja2FnZXMvYmFzaWMtZWxlbWVudC1iYXNlL2dsb2JhbHMuanMiLCJwYWNrYWdlcy9iYXNpYy1lbGVtZW50LWJhc2Uvc3JjL0VsZW1lbnRCYXNlLmpzIiwicGFja2FnZXMvYmFzaWMtZmFkZS1vdmVyZmxvdy9nbG9iYWxzLmpzIiwicGFja2FnZXMvYmFzaWMtZmFkZS1vdmVyZmxvdy9zcmMvRmFkZU92ZXJmbG93LmpzIiwicGFja2FnZXMvYmFzaWMtbGlzdC1ib3gvZ2xvYmFscy5qcyIsInBhY2thZ2VzL2Jhc2ljLWxpc3QtYm94L3NyYy9MaXN0Qm94LmpzIiwicGFja2FnZXMvYmFzaWMtbW9kZXMvZ2xvYmFscy5qcyIsInBhY2thZ2VzL2Jhc2ljLW1vZGVzL3NyYy9Nb2Rlcy5qcyIsInBhY2thZ2VzL2Jhc2ljLXNsaWRlc2hvdy13aXRoLWNvbnRyb2xzL2dsb2JhbHMuanMiLCJwYWNrYWdlcy9iYXNpYy1zbGlkZXNob3ctd2l0aC1jb250cm9scy9zcmMvU2xpZGVzaG93V2l0aENvbnRyb2xzLmpzIiwicGFja2FnZXMvYmFzaWMtc2xpZGVzaG93L2dsb2JhbHMuanMiLCJwYWNrYWdlcy9iYXNpYy1zbGlkZXNob3cvc3JjL1NsaWRlc2hvdy5qcyIsInBhY2thZ2VzL2Jhc2ljLXNsaWRpbmctY2Fyb3VzZWwvZ2xvYmFscy5qcyIsInBhY2thZ2VzL2Jhc2ljLXNsaWRpbmctY2Fyb3VzZWwvc3JjL1NsaWRpbmdDYXJvdXNlbC5qcyIsInBhY2thZ2VzL2Jhc2ljLXNsaWRpbmctdmlld3BvcnQvZ2xvYmFscy5qcyIsInBhY2thZ2VzL2Jhc2ljLXNsaWRpbmctdmlld3BvcnQvc3JjL1NsaWRpbmdWaWV3cG9ydC5qcyIsInBhY2thZ2VzL2Jhc2ljLXNwcmVhZC1pdGVtcy9nbG9iYWxzLmpzIiwicGFja2FnZXMvYmFzaWMtc3ByZWFkLWl0ZW1zL3NyYy9TcHJlYWRJdGVtcy5qcyIsInBhY2thZ2VzL2Jhc2ljLXRhYi1zdHJpcC9nbG9iYWxzLmpzIiwicGFja2FnZXMvYmFzaWMtdGFiLXN0cmlwL3NyYy9UYWJTdHJpcC5qcyIsInBhY2thZ2VzL2Jhc2ljLXRhYi1zdHJpcC9zcmMvVGFiU3RyaXBNaXhpbi5qcyIsInBhY2thZ2VzL2Jhc2ljLXRhYnMvZ2xvYmFscy5qcyIsInBhY2thZ2VzL2Jhc2ljLXRhYnMvc3JjL1RhYnMuanMiLCJwYWNrYWdlcy9iYXNpYy13ZWItY29tcG9uZW50cy9nbG9iYWxzLmpzIiwicGFja2FnZXMvYmFzaWMtd3JhcHBlZC1zdGFuZGFyZC1lbGVtZW50L2dsb2JhbHMuanMiLCJwYWNrYWdlcy9iYXNpYy13cmFwcGVkLXN0YW5kYXJkLWVsZW1lbnQvc3JjL1dyYXBwZWRTdGFuZGFyZEVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ09BOzs7Ozs7QUFFQSxPQUFPLEtBQVAsR0FBZSxPQUFPLEtBQVAsSUFBZ0IsRUFBL0IsQyxDQVRBOzs7Ozs7O0FBVUEsT0FBTyxLQUFQLENBQWEsY0FBYjs7Ozs7Ozs7Ozs7OztBQ1ZBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUdBLElBQU0sT0FBTyxzQkFBWSxPQUFaLG1OQUFiOztBQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUEwQk0sYzs7Ozs7Ozs7OztTQUVDLGtCQUFRLFE7d0JBQVk7QUFDdkIsVUFBTSxXQUFXLDRGQUFNLGtCQUFRLFFBQWQsV0FBMkIsRUFBNUM7QUFDQSxlQUFTLGlCQUFULEdBQTZCLElBQTdCO0FBQ0EsYUFBTyxRQUFQO0FBQ0Q7O1NBRUksa0JBQVEsUTt3QkFBWTtBQUN2QjtBQW9CRDs7OztFQTdCMEIsSTs7QUFrQzdCLGVBQWUsTUFBZixDQUFzQix1QkFBdEIsRUFBK0MsY0FBL0M7a0JBQ2UsYzs7Ozs7QUN6RWY7Ozs7OztBQUVBLE9BQU8sS0FBUCxHQUFlLE9BQU8sS0FBUCxJQUFnQixFQUEvQixDLENBVEE7Ozs7Ozs7QUFVQSxPQUFPLEtBQVAsQ0FBYSxnQkFBYjs7Ozs7Ozs7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O0FBS0gsU0FBUyxzQkFBVCxDQUFnQyxJQUFoQyxFQUFzQyxVQUF0QyxFQUFrRDtBQUNoRCxNQUFNLFdBQVc7QUFDZixrQkFBYyxXQUFXLFlBRFY7QUFFZixnQkFBWSxXQUFXO0FBRlIsR0FBakI7QUFJQSxNQUFJLFdBQVcsR0FBZixFQUFvQjtBQUNsQixhQUFTLEdBQVQsR0FBZSxZQUFXO0FBQ3hCLGFBQU8sS0FBSyxLQUFMLENBQVcsSUFBWCxDQUFQO0FBQ0QsS0FGRDtBQUdEO0FBQ0QsTUFBSSxXQUFXLEdBQWYsRUFBb0I7QUFDbEIsYUFBUyxHQUFULEdBQWUsVUFBUyxLQUFULEVBQWdCO0FBQzdCLFdBQUssS0FBTCxDQUFXLElBQVgsSUFBbUIsS0FBbkI7QUFDRCxLQUZEO0FBR0Q7QUFDRCxNQUFJLFdBQVcsUUFBZixFQUF5QjtBQUN2QixhQUFTLFFBQVQsR0FBb0IsV0FBVyxRQUEvQjtBQUNEO0FBQ0QsU0FBTyxRQUFQO0FBQ0Q7O2tCQUdjLHNCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgdHJhbnNwaWxlZCB0byBjcmVhdGUgYW4gRVM1LWNvbXBhdGlibGUgZGlzdHJpYnV0aW9uIGluIHdoaWNoXG4gKiB0aGUgcGFja2FnZSdzIG1haW4gZmVhdHVyZShzKSBhcmUgYXZhaWxhYmxlIHZpYSB0aGUgd2luZG93LkJhc2ljIGdsb2JhbC5cbiAqIElmIHlvdSdyZSBhbHJlYWR5IHVzaW5nIEVTNiB5b3Vyc2VsZiwgaWdub3JlIHRoaXMgZmlsZSwgYW5kIGluc3RlYWQgaW1wb3J0XG4gKiB0aGUgc291cmNlIGZpbGUocykgeW91IHdhbnQgZnJvbSB0aGUgc3JjIGZvbGRlci5cbiAqL1xuXG5pbXBvcnQgQW5pbWF0aW9uU3RhZ2UgZnJvbSAnLi9zcmMvQW5pbWF0aW9uU3RhZ2UnO1xuXG53aW5kb3cuQmFzaWMgPSB3aW5kb3cuQmFzaWMgfHwge307XG53aW5kb3cuQmFzaWMuQW5pbWF0aW9uU3RhZ2UgPSBBbmltYXRpb25TdGFnZTtcbiIsImltcG9ydCBFbGVtZW50QmFzZSBmcm9tICcuLi8uLi9iYXNpYy1lbGVtZW50LWJhc2Uvc3JjL0VsZW1lbnRCYXNlJztcbmltcG9ydCBDb250ZW50SXRlbXNNaXhpbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Db250ZW50SXRlbXNNaXhpbic7XG5pbXBvcnQgRGlzdHJpYnV0ZWRDaGlsZHJlbkNvbnRlbnRNaXhpbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXN0cmlidXRlZENoaWxkcmVuQ29udGVudE1peGluJztcbmltcG9ydCBGcmFjdGlvbmFsU2VsZWN0aW9uTWl4aW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRnJhY3Rpb25hbFNlbGVjdGlvbk1peGluJztcbmltcG9ydCBTZWxlY3Rpb25BbmltYXRpb25NaXhpbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TZWxlY3Rpb25BbmltYXRpb25NaXhpbic7XG5pbXBvcnQgU2VsZWN0aW9uQXJpYUFjdGl2ZU1peGluIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NlbGVjdGlvbkFyaWFBY3RpdmVNaXhpbic7XG5pbXBvcnQgU2luZ2xlU2VsZWN0aW9uTWl4aW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2luZ2xlU2VsZWN0aW9uTWl4aW4nO1xuaW1wb3J0IHN5bWJvbHMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvc3ltYm9scyc7XG5cblxuY29uc3QgYmFzZSA9IEVsZW1lbnRCYXNlLmNvbXBvc2UoXG4gIENvbnRlbnRJdGVtc01peGluLFxuICBEaXN0cmlidXRlZENoaWxkcmVuQ29udGVudE1peGluLFxuICBGcmFjdGlvbmFsU2VsZWN0aW9uTWl4aW4sXG4gIFNlbGVjdGlvbkFuaW1hdGlvbk1peGluLFxuICBTZWxlY3Rpb25BcmlhQWN0aXZlTWl4aW4sXG4gIFNpbmdsZVNlbGVjdGlvbk1peGluXG4pO1xuXG4vKipcbiAqIFByZXNlbnRzIGEgc2luZ2xlIGl0ZW0gYXMgc2VsZWN0ZWQsIHByb3ZpZGluZyBhbmltYXRlZCB0cmFuc2l0aW9ucyB3aGVuIHRoZVxuICogc2VsZWN0aW9uIGNoYW5nZXMuIFRoZSBzYW1lIGFuaW1hdGlvbiBjYW4gYmUgc2hvd24gYXQgYW4gYXJiaXRyYXJ5IHBvaW50LFxuICogZ2VuZXJhbGx5IHVzZWQgdG8gcmVmbGVjdCBhIHVzZXItY29udHJvbGxlZCB0b3VjaCBvciB0cmFja3BhZCBkcmFnIG9wZXJhdGlvblxuICogaW4gcHJvZ3Jlc3MuXG4gKlxuICogW0xpdmUgZGVtb10oaHR0cDovL2Jhc2ljd2ViY29tcG9uZW50cy5vcmcvYmFzaWMtd2ViLWNvbXBvbmVudHMvcGFja2FnZXMvYmFzaWMtYW5pbWF0aW9uLXN0YWdlLylcbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBpcyBpbnRlbmRlZCB0byBiZSB1c2VkIGFzIGEgcHJvZ3JhbW1hdGljIHJlbmRlcmluZyBzdXJmYWNlIGZvclxuICogY29tcG9uZW50cyB3aGljaCB3YW50IHRvIHNob3cgdHJhbnNpdGlvbmFsIGVmZmVjdHMuXG4gKlxuICogVGhlIGNvbXBvbmVudCB1c2VzIFtTZWxlY3Rpb25BbmltYXRpb25NaXhpbl0oLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9kb2NzL1NlbGVjdGlvbkFuaW1hdGlvbk1peGluLm1kKVxuICogbWl4aW4sIHdoaWNoIGluIHR1cm4gdXNlcyB0aGUgV2ViIEFuaW1hdGlvbnMgQVBJLiBGb3IgdXNlIG9uIGJyb3dzZXJzIHdoaWNoXG4gKiBkbyBub3Qgc3VwcG9ydCB0aGF0IEFQSSBuYXRpdmVseSwgeW91IHdpbGwgbmVlZCB0byBsb2FkIHRoZVxuICogW1dlYiBBbmltYXRpb25zIHBvbHlmaWxsXShodHRwczovL2dpdGh1Yi5jb20vd2ViLWFuaW1hdGlvbnMvd2ViLWFuaW1hdGlvbnMtanMpLlxuICpcbiAqIEZvciBhIHNpbXBsZXIgY29tcG9uZW50IHRoYXQgZXhoaWJpdHMgb25seSBhIHNsaWRpbmcgZWZmZWN0LCBidXQgZG9lcyBub3RcbiAqIHJlcXVpcmUgdGhlIFdlYiBBbmltYXRpb25zIEFQSSwgc2VlIFtiYXNpYy1zbGlkaW5nLXZpZXdwb3J0XSguLi9iYXNpYy1zbGlkaW5nLXZpZXdwb3J0KS5cbiAqXG4gKiBAZXh0ZW5kcyBFbGVtZW50QmFzZVxuICogQG1peGVzIENvbnRlbnRJdGVtc01peGluXG4gKiBAbWl4ZXMgRGlzdHJpYnV0ZWRDaGlsZHJlbkNvbnRlbnRNaXhpblxuICogQG1peGVzIFNlbGVjdGlvbkFuaW1hdGlvbk1peGluXG4gKiBAbWl4ZXMgU2VsZWN0aW9uQXJpYUFjdGl2ZU1peGluXG4gKiBAbWl4ZXMgU2luZ2xlU2VsZWN0aW9uTWl4aW5cbiAqL1xuY2xhc3MgQW5pbWF0aW9uU3RhZ2UgZXh0ZW5kcyBiYXNlIHtcblxuICBnZXQgW3N5bWJvbHMuZGVmYXVsdHNdKCkge1xuICAgIGNvbnN0IGRlZmF1bHRzID0gc3VwZXJbc3ltYm9scy5kZWZhdWx0c10gfHwge307XG4gICAgZGVmYXVsdHMuc2VsZWN0aW9uUmVxdWlyZWQgPSB0cnVlO1xuICAgIHJldHVybiBkZWZhdWx0cztcbiAgfVxuXG4gIGdldCBbc3ltYm9scy50ZW1wbGF0ZV0oKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICAjY29udGFpbmVyIDo6c2xvdHRlZCgqKSB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgaWQ9XCJjb250YWluZXJcIiByb2xlPVwibm9uZVwiPlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbn1cblxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2Jhc2ljLWFuaW1hdGlvbi1zdGFnZScsIEFuaW1hdGlvblN0YWdlKTtcbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGlvblN0YWdlO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyB0cmFuc3BpbGVkIHRvIGNyZWF0ZSBhbiBFUzUtY29tcGF0aWJsZSBkaXN0cmlidXRpb24gaW4gd2hpY2hcbiAqIHRoZSBwYWNrYWdlJ3MgbWFpbiBmZWF0dXJlKHMpIGFyZSBhdmFpbGFibGUgdmlhIHRoZSB3aW5kb3cuQmFzaWMgZ2xvYmFsLlxuICogSWYgeW91J3JlIGFscmVhZHkgdXNpbmcgRVM2IHlvdXJzZWxmLCBpZ25vcmUgdGhpcyBmaWxlLCBhbmQgaW5zdGVhZCBpbXBvcnRcbiAqIHRoZSBzb3VyY2UgZmlsZShzKSB5b3Ugd2FudCBmcm9tIHRoZSBzcmMgZm9sZGVyLlxuICovXG5cbmltcG9ydCBBdXRvc2l6ZVRleHRhcmVhIGZyb20gJy4vc3JjL0F1dG9zaXplVGV4dGFyZWEnO1xuXG53aW5kb3cuQmFzaWMgPSB3aW5kb3cuQmFzaWMgfHwge307XG53aW5kb3cuQmFzaWMuQXV0b3NpemVUZXh0YXJlYSA9IEF1dG9zaXplVGV4dGFyZWE7XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL2NyZWF0ZVN5bWJvbCc7XG5pbXBvcnQgV3JhcHBlZFN0YW5kYXJkRWxlbWVudCBmcm9tICcuLi8uLi9iYXNpYy13cmFwcGVkLXN0YW5kYXJkLWVsZW1lbnQvc3JjL1dyYXBwZWRTdGFuZGFyZEVsZW1lbnQnO1xuaW1wb3J0IERpc3RyaWJ1dGVkQ2hpbGRyZW5Db250ZW50TWl4aW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlzdHJpYnV0ZWRDaGlsZHJlbkNvbnRlbnRNaXhpbic7XG5pbXBvcnQgR2VuZXJpY01peGluIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0dlbmVyaWNNaXhpbic7XG5pbXBvcnQgc3ltYm9scyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9zeW1ib2xzJztcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3QgbGluZUhlaWdodFN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnbGluZUhlaWdodCcpO1xuY29uc3QgbWluaW11bVJvd3NTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ21pbmltdW1Sb3dzJyk7XG5jb25zdCB2YWx1ZVRyYWNrc0NvbnRlbnRTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3ZhbHVlVHJhY2tzQ29udGVudCcpO1xuXG5jb25zdCBiYXNlID0gV3JhcHBlZFN0YW5kYXJkRWxlbWVudC53cmFwKCd0ZXh0YXJlYScpLmNvbXBvc2UoXG4gIERpc3RyaWJ1dGVkQ2hpbGRyZW5Db250ZW50TWl4aW4sXG4gIEdlbmVyaWNNaXhpblxuKTtcblxuLyoqXG4gKiBBIHRleHQgYXJlYSB0aGF0IG1ha2VzIGl0c2VsZiBiaWcgZW5vdWdoIHRvIHNob3cgaXRzIGNvbnRlbnQuXG4gKlxuICogW0xpdmUgZGVtb10oaHR0cDovL2Jhc2ljd2ViY29tcG9uZW50cy5vcmcvYmFzaWMtd2ViLWNvbXBvbmVudHMvcGFja2FnZXMvYmFzaWMtYXV0b3NpemUtdGV4dGFyZWEvKVxuICpcbiAqIFRoaXMgdGV4dCBpbnB1dCBjb21wb25lbnQgaXMgdXNlZnVsIGluIHNpdHVhdGlvbnMgd2hlcmUgeW91IHdhbnQgdG8gYXNrIHRoZVxuICogdXNlciB0byBlbnRlciBhcyBtdWNoIHRleHQgYXMgdGhleSB3YW50LCBidXQgZG9uJ3Qgd2FudCB0byB0YWtlIHVwIGEgbG90IG9mXG4gKiByb29tIG9uIHRoZSBwYWdlLlxuICpcbiAqIFRoZSBjb21wb25lbnQgd29ya3MgYnkgY29weWluZyB0aGUgdGV4dCB0byBhbiBpbnZpc2libGUgZWxlbWVudCB3aGljaCB3aWxsXG4gKiBhdXRvbWF0aWNhbGx5IGdyb3cgaW4gc2l6ZTsgdGhlIGV4cGFuZGluZyBjb3B5IHdpbGwgZXhwYW5kIHRoZSBjb250YWluZXIsXG4gKiB3aGljaCBpbiB0dXJuIHdpbGwgdmVydGljYWxseSBzdHJldGNoIHRoZSB0ZXh0IGFyZWEgdG8gbWF0Y2guXG4gKlxuICogVGhpcyBjb21wb25lbnQgZ2VuZXJhbGx5IGV4cG9zZXMgYWxsIHRoZSBzYW1lIGF0dHJpYnV0ZXMvcHJvcGVydGllcyBhcyBhXG4gKiBzdGFuZGFyZCBIVE1MIGA8dGV4dGFyZWE+YC5cbiAqXG4gKiBAbWl4ZXMgR2VuZXJpY01peGluXG4gKiBAbWl4ZXMgRGlzdHJpYnV0ZWRDaGlsZHJlbkNvbnRlbnRNaXhpblxuICovXG5jbGFzcyBBdXRvc2l6ZVRleHRhcmVhIGV4dGVuZHMgYmFzZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuaW5uZXIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBldmVudCA9PiB7XG4gICAgICB2YWx1ZUNoYW5nZWQodGhpcyk7XG4gICAgfSk7XG4gICAgdGhpcy5pbm5lci5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGV2ZW50ID0+IHtcbiAgICAgIGtleXByZXNzKHRoaXMsIGV2ZW50KTtcbiAgICB9KTtcblxuICAgIC8vIFNldCBkZWZhdWx0cy5cbiAgICBpZiAodHlwZW9mIHRoaXMubWluaW11bVJvd3MgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLm1pbmltdW1Sb3dzID0gdGhpc1tzeW1ib2xzLmRlZmF1bHRzXS5taW5pbXVtUm93cztcbiAgICB9XG5cbiAgICAvLyBBIHN0YW5kYXJkIHRleHRhcmVhIGhhcyBpdHMgdmFsdWUgdHJhY2sgaXRzIHRleHRDb250ZW50IGJ5IGRlZmF1bHQuXG4gICAgLy8gVGhhdCBpcywgY2hhbmdlcyB0byB0ZXh0Q29udGVudCB1cGRhdGUgdGhlIHZhbHVlLiBIb3dldmVyLCBpZiBhbiBhdHRlbXB0XG4gICAgLy8gaXMgbWFkZSB0byBjaGFuZ2UgdGhlIHZhbHVlIGRpcmVjdGx5LCB0aGlzIGJyZWFrcyB0aGUgYXV0b21hdGljIHRyYWNraW5nLlxuICAgIC8vIEZyb20gdGhhdCBwb2ludCBvbiwgY2hhbmdlcyB0byB0ZXh0Q29udGVudCBkbyAqbm90KiB1cGRhdGUgdGhlIHZhbHVlLlxuICAgIHRoaXNbdmFsdWVUcmFja3NDb250ZW50U3ltYm9sXSA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogUmVzaXplIHRoZSBlbGVtZW50IHN1Y2ggdGhhdCB0aGUgdGV4dGFyZWEgY2FuIGV4YWN0bHkgY29udGFpbiBpdHMgY29udGVudC5cbiAgICogQnkgZGVmYXVsdCwgdGhpcyBtZXRob2QgaXMgaW52b2tlZCB3aGVuZXZlciB0aGUgdGV4dCBjb250ZW50IGNoYW5nZXMuXG4gICAqL1xuICBhdXRvU2l6ZSgpIHtcbiAgICAvLyBJZiB3ZSBoYWQgc3BlY3VsYXRpdmVseSBhZGRlZCBhbiBleHRyYSBsaW5lIGJlY2F1c2Ugb2YgYW4gRW50ZXIga2V5cHJlc3MsXG4gICAgLy8gd2UgY2FuIG5vdyBoaWRlIHRoZSBleHRyYSBsaW5lLlxuICAgIHRoaXMuJC5leHRyYUxpbmUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgIC8vIFdlIHJlc2l6ZSBieSBjb3B5aW5nIHRoZSB0ZXh0YXJlYSBjb250ZW50cyB0byB0aGUgZWxlbWVudCBpdHNlbGY7IHRoZVxuICAgIC8vIHRleHQgd2lsbCB0aGVuIGFwcGVhciAodmlhIDxzbG90PikgaW5zaWRlIHRoZSBpbnZpc2libGUgZGl2LiBJZlxuICAgIC8vIHdlJ3ZlIHNldCB0aGluZ3MgdXAgY29ycmVjdGx5LCB0aGlzIG5ldyBjb250ZW50IHNob3VsZCB0YWtlIHVwIHRoZSBzYW1lXG4gICAgLy8gYW1vdW50IG9mIHJvb20gYXMgdGhlIHNhbWUgdGV4dCBpbiB0aGUgdGV4dGFyZWEuIFVwZGF0aW5nIHRoZSBlbGVtZW50J3NcbiAgICAvLyBjb250ZW50IGFkanVzdHMgdGhlIGVsZW1lbnQncyBzaXplLCB3aGljaCBpbiB0dXJuIHdpbGwgbWFrZSB0aGUgdGV4dGFyZWFcbiAgICAvLyB0aGUgY29ycmVjdCBoZWlnaHQuXG4gICAgdGhpcy4kLnRleHRDb3B5LnRleHRDb250ZW50ID0gdGhpcy52YWx1ZTtcbiAgfVxuXG4gIC8vIE5vcm1hbGx5IHRoZSB2YWx1ZSBvZiB0aGUgZWxlbWVudCBpcyBzZXQgYW5kIHJlYWQgdGhyb3VnaCBpdHMgdmFsdWVcbiAgLy8gYXR0cmlidXRlLiBBcyBhIGNvbnZlbmllbmNlLCBhbmQgdG8gbWlycm9yIHN0YW5kYXJkIHRleHRhcmVhIGJlaGF2aW9yLCBpdFxuICAvLyBpcyBwb3NzaWJsZSB0byBzZXQgdGhlIGNvbnRlbnQgb2YgdGhlIHRleHRhcmVhIGJ5IGluY2x1ZGluZyB0ZXh0IGJldHdlZW5cbiAgLy8gdGhlIG9wZW5pbmcgYW5kIGNsb3NpbmcgdGFnLiBUaGlzIHdvcmtzIG9ubHkgaW4gb25lIGRpcmVjdGlvbjogc2V0dGluZyB0aGVcbiAgLy8gdGFnIGNvbnRlbnQgdXBkYXRlcyB0aGUgdGV4dGFyZWEsIGJ1dCB1c2VyIGVkaXRzIGluIHRoZSB0ZXh0YXJlYSBhcmUgbm90XG4gIC8vIHJlZmxlY3RlZCBpbiB0aGUgdGFnIGNvbnRlbnQuIFdlIGNhcHR1cmUgdGhlIHZhbHVlIG9mIHRoZSBpbml0aWFsIHRleHRcbiAgLy8gY29udGVudCBpbiBvcmRlciB0byBzZXQgdGhlIHZhbHVlIHByb3BlcnR5IGR1cmluZyB0aGUgY3JlYXRlIGV2ZW50LlxuICAvLyBUT0RPOiBOb3JtYWxpemUgaW5kZW50YXRpb24gaW4gdGhlIHRleHQgY29udGVudC4gVXNlcnMgd2lsbCBvZnRlbiB3YW50IHRvXG4gIC8vIGluZGVudCB0aGUgbWFya3VwIHNvIHRoYXQgaXQgbG9va3MgcHJldHR5LiBXZSBzaG91bGQgZGV0ZWN0IHRoZSBpbmRlbnRhdGlvblxuICAvLyBsZXZlbCBhbmQgcmVtb3ZlIGFueSBpbmRlbnRhdGlvbiB3aGl0ZXNwYWNlXG4gIC8vIFRPRE86IENvbnNpZGVyIHVzaW5nIGNvbnRlbnQgaW5uZXJIVE1MIHJhdGhlciB0aGFuIHBsYWluIHRleHQuIFRoZSBuYXRpdmVcbiAgLy8gdGV4dGFyZWEgZWxlbWVudCB3aWxsIGluY2x1ZGUgSFRNTCwgbm90IGp1c3QgdGhlIHN0cmlwcGVkIHRleHQsIGFzIGluaXRpYWxcbiAgLy8gdmFsdWUgcHJvcGVydHkgdGV4dC5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKSB7IHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7IH1cbiAgICBpbml0aWFsaXplV2hlblJlbmRlcmVkKHRoaXMpO1xuICB9XG5cbiAgY29udGVudENoYW5nZWQoKSB7XG4gICAgaWYgKHN1cGVyLmNvbnRlbnRDaGFuZ2VkKSB7IHN1cGVyLmNvbnRlbnRDaGFuZ2VkKCk7IH1cbiAgICBpZiAodGhpc1t2YWx1ZVRyYWNrc0NvbnRlbnRTeW1ib2xdKSB7XG4gICAgICBjb25zdCB0ZXh0ID0gZ2V0VGV4dENvbnRlbnQodGhpcyk7XG4gICAgICB0aGlzLmlubmVyLnZhbHVlID0gdW5lc2NhcGVIdG1sKHRleHQpO1xuICAgICAgdmFsdWVDaGFuZ2VkKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBbc3ltYm9scy5kZWZhdWx0c10oKSB7XG4gICAgY29uc3QgZGVmYXVsdHMgPSBzdXBlcltzeW1ib2xzLmRlZmF1bHRzXSB8fCB7fTtcbiAgICBkZWZhdWx0cy5taW5pbXVtUm93cyA9IDE7XG4gICAgcmV0dXJuIGRlZmF1bHRzO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgdGhlIG1pbmltdW0gbnVtYmVyIG9mIHJvd3Mgc2hvd24uIFRoaXMgaXMgc2ltaWxhciB0byB0aGUgcm93c1xuICAgKiBhdHRyaWJ1dGUgb24gYSBzdGFuZGFyZCB0ZXh0YXJlYSwgYnV0IGJlY2F1c2UgdGhpcyBlbGVtZW50IGNhbiBncm93LCBpc1xuICAgKiBleHByZXNzZWQgYXMgYSBtaW5pbXVtIHJhdGhlciB0aGFuIGEgZml4ZWQgbnVtYmVyLlxuICAgKlxuICAgKiBCeSBkZWZhdWx0LCB0aGlzIHByb3BlcnR5IGlzIDEsIHNvIHdoZW4gZW1wdHksIHRoZSB0ZXh0IGFyZWEgd2lsbCBiZSBhXG4gICAqIHNpbmdsZSBsaW5lIHRhbGwuIFRoYXQncyBlZmZpY2llbnQgaW4gdGVybXMgb2YgdGhlIHNwYWNlIGl0IGNvbnN1bWVzLCBidXRcbiAgICogdW50aWwgdGhlIHVzZXIgaW50ZXJhY3RzIHdpdGggdGhlIGVsZW1lbnQsIHRoZXkgbWF5IG5vdCByZWFsaXplIHRoZXkgY2FuXG4gICAqIGVudGVyIG11bHRpcGxlIGxpbmVzIG9mIHRleHQuIFNldHRpbmcgdGhlIHByb3BlcnR5IHRvIGEgdmFsdWUgaGlnaGVyIHRoYW4gMVxuICAgKiB3aWxsIHNpZ25hbCB0byB0aGUgdXNlciB0aGF0IHRoZXkgY2FuIGVudGVyIG11bHRpcGxlIGxpbmVzIG9mIGEgdGV4dC5cbiAgICpcbiAgICogQnkgc2V0dGluZyB0aGlzIHByb3BlcnR5LCB5b3UgY2FuIGFsc28gY29tbXVuaWNhdGUgdG8gdGhlIHVzZXIgc29tZSBzZW5zZVxuICAgKiBvZiBob3cgbXVjaCB0ZXh0IHlvdSdyZSBleHBlY3RpbmcgdGhlbSB0byBwcm92aWRlLiBGb3IgZXhhbXBsZSwgb24gYVxuICAgKiBmZWVkYmFjayBmb3JtLCBhc2tpbmcgdGhlIHVzZXIgdG8gZW50ZXIgdGhlaXIgZmVlZGJhY2sgaW4gYSBzaW5nbGUtbGluZVxuICAgKiB0ZXh0IGJveCBpbXBsaWVzIHlvdSBkb24ndCByZWFsbHkgd2FudCB0aGVtIHRvIGVudGVyIG11Y2ggdGV4dCDigJQgZXZlbiBpZlxuICAgKiB0aGUgdGV4dCBib3ggd2lsbCBncm93IHdoZW4gdGhleSB0eXBlLiBCeSBzZXR0aW5nIHRoaXMgdG8gYSB2YWx1ZSBsaWtlLFxuICAgKiBzYXksIDEwIHJvd3MsIHlvdSBjYW4gc2lnbmFsIHRoYXQgeW91J3JlIGZ1bGx5IGV4cGVjdGluZyB0aGVtIHRvIGVudGVyIG1vcmVcbiAgICogdGV4dC5cbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICogQGRlZmF1bHQgMVxuICAgKi9cbiAgZ2V0IG1pbmltdW1Sb3dzKCkge1xuICAgIHJldHVybiB0aGlzW21pbmltdW1Sb3dzU3ltYm9sXTtcbiAgfVxuICBzZXQgbWluaW11bVJvd3ModmFsdWUpIHtcbiAgICB0aGlzW21pbmltdW1Sb3dzU3ltYm9sXSA9IHBhcnNlSW50KHZhbHVlKTtcbiAgICBpZiAodGhpc1tsaW5lSGVpZ2h0U3ltYm9sXSkge1xuICAgICAgc2V0TWluaW11bUhlaWdodCh0aGlzKTtcbiAgICB9XG4gIH1cblxuICBnZXQgW3N5bWJvbHMudGVtcGxhdGVdKCkge1xuICAgIHJldHVybiBgXG4gICAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuXG4gICAgICAjYXV0b1NpemVDb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIC8qXG4gICAgICAgKiBFbnN1cmUgYm90aCB0aGUgdGV4dCBhcmVhIGFuZCBjb3B5IGVuZCB1cCB3aXRoIHRoZSBlbGVtZW50J3Mgb3duIGZvbnRcbiAgICAgICAqIG1ldHJpY3MsIHNvIHRoYXQgdGV4dCB3aWxsIGxheSBvdXQgdGhlIHNhbWUgaW4gYm90aCBvZiB0aGVtLlxuICAgICAgICovXG4gICAgICAjaW5uZXIsXG4gICAgICAjY29weUNvbnRhaW5lciB7XG4gICAgICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgICAgZm9udC1zdHlsZTogaW5oZXJpdDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG5cbiAgICAgICNpbm5lciB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByZXNpemU6IG5vbmU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIEBhcHBseSgtLXRleHRhcmVhKTtcbiAgICAgIH1cblxuICAgICAgI2NvcHlDb250YWluZXIge1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDsgLyogU28gbGluZXMgd3JhcCAqL1xuICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7IC8qIFNvIHdlIGJyZWFrIGF0IHdvcmQgYm91bmRhcmllcyB3aGVuIHBvc3NpYmxlICovXG4gICAgICB9XG5cbiAgICAgICNjb250ZW50Q29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDwhLS1cbiAgICAgIFRoZSBpbnZpc2libGUgY29weUNvbnRhaW5lciBjb250YWlucyBhbiBleHRyYVNwYWNlIGVsZW1lbnQgdGhhdCBlbnN1cmVzIHRoYXQsXG4gICAgICBldmVuIGlmIHRoZSBsYXN0IGxpbmUgb2YgdGhlIHRleHRhcmVhIGlzIGJsYW5rLCB0aGVyZSB3aWxsIGJlIHNvbWV0aGluZyBpbiB0aGVcbiAgICAgIGxpbmUgdGhhdCBmb3JjZXMgdGhlIHRleHQgY29weSB0byBncm93IGJ5IGEgbGluZS4gVGhpcyBleHRyYSBzcGFjZSBpcyBhIHRoaW5cbiAgICAgIHNwYWNlLCB0byByZWR1Y2UgdGhlIGFtb3VudCBieSB3aGljaCB0aGUgdGV4dCBjb3B5IHdpbGwgcHJlbWF0dXJlbHkgZ3Jvdy5cblxuICAgICAgVGhlIGNvcHlDb250YWluZXIgYWxzbyBjb250YWlucyBhbiBleHRyYUxpbmUgZWxlbWVudCBleGlzdHMgdG8gZGVhbCB3aXRoIHRoZVxuICAgICAgZmFjdCB0aGF0LCBpZiB0aGUgdXNlciBwcmVzc2VzIHRoZSBFbnRlciBrZXkgZG93biwgdGhlIHRleHRhcmVhJ3MgY29udGVudCB3aWxsXG4gICAgICBtb3ZlIGJlZm9yZSB0aGUgY29tcGxldGUgdGV4dCBpcyBhdmFpbGFibGUuIFNlZSBub3RlcyBhdCBfa2V5cHJlc3MuXG5cbiAgICAgIExhc3RseSwgd2UgcHV0IHRoZSBIVE1MIGNvbnRlbnQgZWxlbWVudCBpbnRvIGEgc2VwYXJhdGUgY29udGFpbmVyIHNvIHdlIGNhblxuICAgICAgaGlkZSBpdC4gV2UgbmVlZCB0byBoYXZlIGEgY29udGVudCBlbGVtZW50IHNvbWV3aGVyZSBpbiB0aGUgdGVtcGxhdGUgdG9cbiAgICAgIGNvbnZpbmNlIFBvbHltZXIgdGhhdCB3ZSBjYXJlIGFib3V0IHRoZSBjb250ZW50IGluIHRoZSBTaGFkeSBET00gY2FzZSAtLVxuICAgICAgd2l0aG91dCB0aGF0IGNvbnRlbnQgZWxlbWVudCwgU2hhZHkgRE9NIHdpbGwgY29uY2x1ZGUgdGhlIGVsZW1lbnQgZG9lc24ndFxuICAgICAgbmVlZCBpdHMgbGlnaHQgRE9NIGNvbnRlbnQsIGFuZCB3aWxsIHRocm93IGl0IGF3YXkuXG4gICAgICAtLT5cbiAgICAgIDxkaXYgaWQ9XCJhdXRvU2l6ZUNvbnRhaW5lclwiPlxuICAgICAgICA8dGV4dGFyZWEgaWQ9XCJpbm5lclwiPjwvdGV4dGFyZWE+XG4gICAgICAgIDxkaXYgaWQ9XCJjb3B5Q29udGFpbmVyXCI+PHNwYW4gaWQ9XCJ0ZXh0Q29weVwiPjwvc3Bhbj48c3BhbiBpZD1cImV4dHJhU3BhY2VcIj4mdGhpbnNwOzwvc3Bhbj48ZGl2IGlkPVwiZXh0cmFMaW5lXCI+Jm5ic3A7PC9kaXY+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgaWQ9XCJjb250ZW50Q29udGFpbmVyXCI+XG4gICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRleHQgY3VycmVudGx5IHNob3duIGluIHRoZSB0ZXh0YXJlYS5cbiAgICpcbiAgICogTm90ZSB0aGF0IHRoZSB0ZXh0IHNob3duIGluIHRoZSB0ZXh0YXJlYSBjYW4gYWxzbyBiZSB1cGRhdGVkIGJ5IGNoYW5naW5nXG4gICAqIHRoZSBlbGVtZW50J3MgaW5uZXJIVE1ML3RleHRDb250ZW50LiBIb3dldmVyLCBpZiB0aGUgdmFsdWUgcHJvcGVydHkgaXNcbiAgICogZXhwbGljaXRseSBzZXQsIHRoYXQgd2lsbCBvdmVycmlkZSB0aGUgaW5uZXJIVE1ML3RleHRDb250ZW50LlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmlubmVyLnZhbHVlO1xuICB9XG4gIHNldCB2YWx1ZSh0ZXh0KSB7XG4gICAgLy8gRXhwbGljaXRseSBzZXR0aW5nIHZhbHVlIGJyZWFrcyBhdXRvbWF0aWMgdXBkYXRlIG9mIHZhbHVlIGZyb20gY29udGVudC5cbiAgICB0aGlzW3ZhbHVlVHJhY2tzQ29udGVudFN5bWJvbF0gPSBmYWxzZTtcbiAgICB0aGlzLmlubmVyLnZhbHVlID0gdGV4dDtcbiAgICB2YWx1ZUNoYW5nZWQodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgd2hlbiB0aGUgdXNlciB0eXBlcyBpbiB0aGUgdGV4dGFyZWEuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBBdXRvc2l6ZVRleHRhcmVhXG4gICAqIEBldmVudCBjaGFuZ2VcbiAgICovXG59XG5cblxuZnVuY3Rpb24gZ2V0VGV4dENvbnRlbnQoZWxlbWVudCkge1xuICBsZXQgdGV4dCA9IGVsZW1lbnQuZGlzdHJpYnV0ZWRUZXh0Q29udGVudDtcblxuICAvLyBUcmltIHRoZSB0ZXh0LlxuICAvLyBUaGlzIGlzIG5vbi1zdGFuZGFyZCB0ZXh0YXJlYSBiZWhhdmlvci4gQSBzdGFuZGFyZCB0ZXh0YXJlYSB3aWxsIHRyaW0gdGhlXG4gIC8vIGZpcnN0IGNoYXJhY3RlciBpZiBpdCdzIGEgbmV3bGluZSwgYnV0IHRoYXQncyBpdC4gSG93ZXZlciwgYXV0aG9ycyB3aWxsXG4gIC8vIHdhbnQgdG8gYmUgYWJsZSB0byBwbGFjZSB0aGUgb3BlbmluZyBhbmQgY2xvc2luZyB0YWdzIG9uIHRoZWlyIG93biBsaW5lcy5cbiAgLy8gU28gaXQgc2VlbXMgbW9yZSBoZWxwZnVsIHRvIHRyaW0gd2hpdGVzcGFjZSBvbiBlaXRoZXIgc2lkZS5cbiAgdGV4dCA9IHRleHQudHJpbSgpO1xuXG4gIHJldHVybiB0ZXh0O1xufVxuXG5cbi8vIFNldCB1cCBvbmNlIHRoaXMgY29tcG9uZW50IGhhcyBiZWVuIHJlbmRlcmVkLlxuLy9cbi8vIE9uIENocm9tZSAoYXMgb2YgMTAvMjMvMTQpIGF0IGxlYXN0LCBpZiBhbiBpbnN0YW5jZSBpZiB0aGlzIGNvbXBvbmVudCBpc1xuLy8gYWRkZWQgZHluYW1pY2FsbHksIGl0cyBhdHRhY2hlZCBoYW5kbGVyIG1heSB0cmlnZ2VyIGJlZm9yZSBpdHMgYmVlblxuLy8gcmVuZGVyZWQuIFRoYXQgd291bGQgY2F1c2Ugb3VyIGxheW91dCBjYWxjdWxhdGlvbnMgdG8gYmUgaW5jb3JyZWN0LlxuLy9cbmZ1bmN0aW9uIGluaXRpYWxpemVXaGVuUmVuZGVyZWQoZWxlbWVudCkge1xuXG4gIC8vIElmIHRoZSBjb21wb25lbnQgaGFzIGJlZW4gcmVuZGVyZWQsIG91ciBoZWlnaHQgc2hvdWxkIGJlIG5vbnplcm8uXG4gIGlmIChlbGVtZW50LmNsaWVudEhlaWdodCA9PT0gMCkge1xuICAgIC8vIE5vdCByZW5kZXJlZCB5ZXQ6IHdhaXQgYSBiaXQgYmVmb3JlIHRyeWluZyBhZ2Fpbi5cbiAgICBzZXRUaW1lb3V0KCgpID0+IGluaXRpYWxpemVXaGVuUmVuZGVyZWQoZWxlbWVudCksIDEwKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBJZiB3ZSByZWFjaCB0aGlzIHBvaW50LCB0aGUgY29tcG9uZW50J3MgZWxlbWVudHMgc2hvdWxkIGJ5IHN0eWxlZC5cblxuICAvLyBGb3IgYXV0by1zaXppbmcgdG8gd29yaywgd2UgbmVlZCB0aGUgdGV4dCBjb3B5IHRvIGhhdmUgdGhlIHNhbWUgYm9yZGVyLFxuICAvLyBwYWRkaW5nLCBhbmQgb3RoZXIgcmVsZXZhbnQgY2hhcmFjdGVyaXN0aWNzIGFzIHRoZSBvcmlnaW5hbCB0ZXh0IGFyZWEuXG4gIC8vIFNpbmNlIHRob3NlIGFzcGVjdHMgYXJlIGFmZmVjdGVkIGJ5IENTUywgd2UgaGF2ZSB0byB3YWl0IHVudGlsIHRoZVxuICAvLyBlbGVtZW50IGlzIGluIHRoZSBkb2N1bWVudCBiZWZvcmUgd2UgY2FuIHVwZGF0ZSB0aGUgdGV4dCBjb3B5LlxuICBjb25zdCB0ZXh0Qm94U3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQuaW5uZXIpO1xuICBjb25zdCBjb3B5Q29udGFpbmVyU3R5bGUgPSBlbGVtZW50LiQuY29weUNvbnRhaW5lci5zdHlsZTtcbiAgY29weUNvbnRhaW5lclN0eWxlLmJvcmRlckJvdHRvbVN0eWxlICA9IHRleHRCb3hTdHlsZS5ib3JkZXJCb3R0b21TdHlsZTtcbiAgY29weUNvbnRhaW5lclN0eWxlLmJvcmRlckJvdHRvbVdpZHRoICA9IHRleHRCb3hTdHlsZS5ib3JkZXJCb3R0b21XaWR0aDtcbiAgY29weUNvbnRhaW5lclN0eWxlLmJvcmRlckxlZnRTdHlsZSAgICA9IHRleHRCb3hTdHlsZS5ib3JkZXJMZWZ0U3R5bGU7XG4gIGNvcHlDb250YWluZXJTdHlsZS5ib3JkZXJMZWZ0V2lkdGggICAgPSB0ZXh0Qm94U3R5bGUuYm9yZGVyTGVmdFdpZHRoO1xuICBjb3B5Q29udGFpbmVyU3R5bGUuYm9yZGVyUmlnaHRTdHlsZSAgID0gdGV4dEJveFN0eWxlLmJvcmRlclJpZ2h0U3R5bGU7XG4gIGNvcHlDb250YWluZXJTdHlsZS5ib3JkZXJSaWdodFdpZHRoICAgPSB0ZXh0Qm94U3R5bGUuYm9yZGVyUmlnaHRXaWR0aDtcbiAgY29weUNvbnRhaW5lclN0eWxlLmJvcmRlclRvcFN0eWxlICAgICA9IHRleHRCb3hTdHlsZS5ib3JkZXJUb3BTdHlsZTtcbiAgY29weUNvbnRhaW5lclN0eWxlLmJvcmRlclRvcFdpZHRoICAgICA9IHRleHRCb3hTdHlsZS5ib3JkZXJUb3BXaWR0aDtcbiAgY29weUNvbnRhaW5lclN0eWxlLnBhZGRpbmdCb3R0b20gICAgICA9IHRleHRCb3hTdHlsZS5wYWRkaW5nQm90dG9tO1xuICBjb3B5Q29udGFpbmVyU3R5bGUucGFkZGluZ0xlZnQgICAgICAgID0gdGV4dEJveFN0eWxlLnBhZGRpbmdMZWZ0O1xuICBjb3B5Q29udGFpbmVyU3R5bGUucGFkZGluZ1JpZ2h0ICAgICAgID0gdGV4dEJveFN0eWxlLnBhZGRpbmdSaWdodDtcbiAgY29weUNvbnRhaW5lclN0eWxlLnBhZGRpbmdUb3AgICAgICAgICA9IHRleHRCb3hTdHlsZS5wYWRkaW5nVG9wO1xuXG4gIC8vIFVzZSB0aGUgZXh0cmFMaW5lIG1lbWJlciB0byBnYXVnZSB0aGUgZXhwZWN0ZWQgaGVpZ2h0IG9mIGEgc2luZ2xlIGxpbmUgb2ZcbiAgLy8gdGV4dC4gV2UgY2FuJ3QgdXNlIGxpbmVIZWlnaHQsIGJlY2F1c2UgdGhhdCBjYW4gYmUgcmVwb3J0ZWQgYXMgXCJub3JtYWxcIixcbiAgLy8gYW5kIHdlIHdhbnQgdG8ga25vdyB0aGUgYWN0dWFsIHBpeGVsIGhlaWdodC5cbiAgZWxlbWVudC4kLmV4dHJhTGluZS5zdHlsZS5kaXNwbGF5ID0gJ2luaGVyaXQnO1xuICBlbGVtZW50W2xpbmVIZWlnaHRTeW1ib2xdID0gZWxlbWVudC4kLmV4dHJhTGluZS5jbGllbnRIZWlnaHQ7XG5cbiAgLy8gTm93IHRoYXQgd2Uga25vdyB0aGUgbGluZSBoZWlnaHQsIHdlIGNhbiBoaWRlIHRoZSBleHRyYSBsaW5lLlxuICBlbGVtZW50LiQuZXh0cmFMaW5lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgLy8gVXNlIHRoZSBsaW5lIGhlaWdodCBpbiBjb25qdW5jdGlvbiB3aXRoIG1pbmltdW1Sb3dzIHRvIGVzdGFibGlzaCB0aGVcbiAgLy8gb3ZlcmFsbCBtaW5pbXVtIGhlaWdodCBvZiB0aGUgY29tcG9uZW50LlxuICBzZXRNaW5pbXVtSGVpZ2h0KGVsZW1lbnQpO1xufVxuXG5cbi8vIFNwZWN1bGF0aXZlbHkgYWRkIGEgbGluZSB0byBvdXIgY29weSBvZiB0aGUgdGV4dC4gV2UncmUgbm90IHN1cmUgd2hhdCB0aGVcbi8vIGV4YWN0IGVmZmVjdCBvZiB0eXBpbmcgdGhpcyBjaGFyYWN0ZXIgd2lsbCBiZSwgYW5kIGF0IHRoaXMgcG9pbnQgaXQncyBub3Rcbi8vIHJlZmxlY3RlZCB5ZXQgaW4gdGhlIHRleHRhcmVhJ3MgY29udGVudC4gV2Ugc3BlY3VsYXRlIHRoYXQgaXQgd2lsbCBhZGQgYVxuLy8gbGluZSB0byB0aGUgdGV4dCBhbmQgc2l6ZSBhY2NvcmRpbmdseS4gKE9uZSBvdGhlciBwb3NzaWJpbGl0eSBpcyB0aGF0IHRoZVxuLy8gdXNlcidzIHJlcGxhY2luZyBhIHNlbGVjdGVkIGNodW5rIG9mIHRleHQgd2l0aCBhIG5ld2xpbmUuKSBJbiBhbnkgZXZlbnQsXG4vLyBvbmNlIHdlIGdldCB0aGUga2V5dXAgb3IgY2hhbmdlIGV2ZW50LCB3ZSdsbCBtYWtlIGFueSBmaW5hbCBhZGp1c3RtZW50cy5cbi8vXG4vLyBUT0RPOiBJZiB0aGUgdXNlciBob2xkcyBkb3duIHRoZSBFbnRlciBrZXksIHdlIGNhbiBnZXQgYSBidW5jaCBvZiBrZXlwcmVzc1xuLy8gZXZlbnRzIGJlZm9yZSB3ZSBnZXQga2V5dXAuIFRoaXMgY2F1c2VzIGZsaWNrZXIuIEluc3RlYWQgb2Ygc3VwcG9ydGluZyBvbmx5XG4vLyBhIHNpbmdsZSBleHRyYSBzcGVjdWxhdGl2ZSBsaW5lLCB3ZSBzaG91bGQgZ3JvdyB0aGUgc3BlY3VsYXRpdmUgZWxlbWVudCB0b1xuLy8gY29udGFpbiB0aGUgbnVtYmVyIG9mIEVudGVyIGtleXByZXNzZXMgd2UndmUgcmVjZWl2ZWQuXG5mdW5jdGlvbiBrZXlwcmVzcyhlbGVtZW50LCBldmVudCkge1xuICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMgLyogRW50ZXIgKi8pIHtcbiAgICBlbGVtZW50LiQuZXh0cmFMaW5lLnN0eWxlLmRpc3BsYXkgPSAnaW5oZXJpdCc7XG4gIH1cbn1cblxuXG4vLyBTZXR0aW5nIHRoZSBtaW5pbXVtUm93cyBhdHRyaWJ1dGUgdHJhbnNsYXRlcyBpbnRvIHNldHRpbmcgdGhlIG1pbmltdW1cbi8vIGhlaWdodCBvbiB0aGUgdGV4dCBjb3B5IGNvbnRhaW5lci5cbmZ1bmN0aW9uIHNldE1pbmltdW1IZWlnaHQoZWxlbWVudCkge1xuICBjb25zdCBjb3B5Q29udGFpbmVyID0gZWxlbWVudC4kLmNvcHlDb250YWluZXI7XG4gIGNvbnN0IG91dGVySGVpZ2h0ID0gY29weUNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gIGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShjb3B5Q29udGFpbmVyKTtcbiAgY29uc3QgcGFkZGluZ1RvcCA9IHBhcnNlRmxvYXQoc3R5bGUucGFkZGluZ1RvcCk7XG4gIGNvbnN0IHBhZGRpbmdCb3R0b20gPSBwYXJzZUZsb2F0KHN0eWxlLnBhZGRpbmdCb3R0b20pO1xuICBjb25zdCBpbm5lckhlaWdodCA9IGNvcHlDb250YWluZXIuY2xpZW50SGVpZ2h0IC0gcGFkZGluZ1RvcCAtIHBhZGRpbmdCb3R0b207XG4gIGNvbnN0IGJvcmRlcnNQbHVzUGFkZGluZyA9IG91dGVySGVpZ2h0IC0gaW5uZXJIZWlnaHQ7XG4gIGxldCBtaW5IZWlnaHQgPSAoZWxlbWVudC5taW5pbXVtUm93cyAqIGVsZW1lbnRbbGluZUhlaWdodFN5bWJvbF0pICsgYm9yZGVyc1BsdXNQYWRkaW5nO1xuICBtaW5IZWlnaHQgPSBNYXRoLmNlaWwobWluSGVpZ2h0KTtcbiAgY29weUNvbnRhaW5lci5zdHlsZS5taW5IZWlnaHQgPSBtaW5IZWlnaHQgKyAncHgnO1xufVxuXG5cbmZ1bmN0aW9uIHVuZXNjYXBlSHRtbChodG1sKSB7XG4gIHJldHVybiBodG1sXG4gICAgLnJlcGxhY2UoLyZhbXA7L2csICcmJylcbiAgICAucmVwbGFjZSgvJmx0Oy9nLCAnPCcpXG4gICAgLnJlcGxhY2UoLyZndDsvZywgXCI+XCIpXG4gICAgLnJlcGxhY2UoLyZxdW90Oy9nLCAnXFxcIicpXG4gICAgLnJlcGxhY2UoLyYjMDM5Oy9nLCAnXFwnJyk7XG59XG5cblxuLypcbiAqIEhhbmRsZSBhIGNoYW5nZSBpbiB0aGUgZWxlbWVudCdzIHZhbHVlIHByb3BlcnR5LlxuICovXG5mdW5jdGlvbiB2YWx1ZUNoYW5nZWQoZWxlbWVudCkge1xuICBlbGVtZW50LmF1dG9TaXplKCk7XG4gIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3ZhbHVlLWNoYW5nZWQnKSk7XG59XG5cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdiYXNpYy1hdXRvc2l6ZS10ZXh0YXJlYScsIEF1dG9zaXplVGV4dGFyZWEpO1xuZXhwb3J0IGRlZmF1bHQgQXV0b3NpemVUZXh0YXJlYTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgdHJhbnNwaWxlZCB0byBjcmVhdGUgYW4gRVM1LWNvbXBhdGlibGUgZGlzdHJpYnV0aW9uIGluIHdoaWNoXG4gKiB0aGUgcGFja2FnZSdzIG1haW4gZmVhdHVyZShzKSBhcmUgYXZhaWxhYmxlIHZpYSB0aGUgd2luZG93LkJhc2ljIGdsb2JhbC5cbiAqIElmIHlvdSdyZSBhbHJlYWR5IHVzaW5nIEVTNiB5b3Vyc2VsZiwgaWdub3JlIHRoaXMgZmlsZSwgYW5kIGluc3RlYWQgaW1wb3J0XG4gKiB0aGUgc291cmNlIGZpbGUocykgeW91IHdhbnQgZnJvbSB0aGUgc3JjIGZvbGRlci5cbiAqL1xuXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnLi9zcmMvQ2Fyb3VzZWwnO1xuXG53aW5kb3cuQmFzaWMgPSB3aW5kb3cuQmFzaWMgfHwge307XG53aW5kb3cuQmFzaWMuQ2Fyb3VzZWwgPSBDYXJvdXNlbDtcbiIsImltcG9ydCBBbmltYXRpb25TdGFnZSBmcm9tICcuLi8uLi9iYXNpYy1hbmltYXRpb24tc3RhZ2Uvc3JjL0FuaW1hdGlvblN0YWdlJztcbmltcG9ydCBEaXJlY3Rpb25TZWxlY3Rpb25NaXhpbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXJlY3Rpb25TZWxlY3Rpb25NaXhpbic7XG5pbXBvcnQgS2V5Ym9hcmREaXJlY3Rpb25NaXhpbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9LZXlib2FyZERpcmVjdGlvbk1peGluJztcbmltcG9ydCBLZXlib2FyZE1peGluIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0tleWJvYXJkTWl4aW4nO1xuaW1wb3J0IFN3aXBlRGlyZWN0aW9uTWl4aW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU3dpcGVEaXJlY3Rpb25NaXhpbic7XG5pbXBvcnQgc3ltYm9scyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9zeW1ib2xzJztcbmltcG9ydCBUcmFja3BhZERpcmVjdGlvbk1peGluIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1RyYWNrcGFkRGlyZWN0aW9uTWl4aW4nO1xuXG5cbmNvbnN0IGJhc2UgPSBBbmltYXRpb25TdGFnZS5jb21wb3NlKFxuICBEaXJlY3Rpb25TZWxlY3Rpb25NaXhpbixcbiAgS2V5Ym9hcmRNaXhpbixcbiAgS2V5Ym9hcmREaXJlY3Rpb25NaXhpbixcbiAgU3dpcGVEaXJlY3Rpb25NaXhpbixcbiAgVHJhY2twYWREaXJlY3Rpb25NaXhpblxuKTtcblxuXG4vKipcbiAqIExldHMgdGhlIHVzZXIgbmF2aWdhdGUgbGF0ZXJhbGx5IHRocm91Z2ggYSBzZXF1ZW5jZSBvZiBjaGlsZCBlbGVtZW50cy5cbiAqXG4gKiBiYXNpYy1jYXJvdXNlbCBpcyBhbiBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgY2Fyb3VzZWwgdXNlciBpbnRlcmZhY2UgcGF0dGVybixcbiAqIGNvbW1vbmx5IHVzZWQgZm9yIG5hdmlnYXRpbmcgYmV0d2VlbiBpbWFnZXMsIHBhZ2VzLCBhbmQgb3RoZXIgZWxlbWVudHMuIFRoaXNcbiAqIHBhdHRlcm4gcHJlc2VudHMgdGhlIHVzZXIgd2l0aCBhIGxpbmVhciBzZXF1ZW5jZSBvZiBlbGVtZW50cywgb25seSBvbmUgb2ZcbiAqIHdoaWNoIGlzIHNob3duIGF0IGEgdGltZS4gVGhlIHVzZXIgY2FuIG5hdmlnYXRlIHRvIHRoZSBuZXh0L3ByZXZpb3VzIGVsZW1lbnRcbiAqIHdpdGggYSB2YXJpZXR5IG9mIGlucHV0IG1ldGhvZHMuXG4gKlxuICogW0xpdmUgZGVtb10oaHR0cDovL2Jhc2ljd2ViY29tcG9uZW50cy5vcmcvYmFzaWMtd2ViLWNvbXBvbmVudHMvcGFja2FnZXMvYmFzaWMtY2Fyb3VzZWwvKVxuICpcbiAqIFRoZSBhYm92ZSBkZW1vIGFkZHMgdGhlIG9wdGlvbmFsXG4gKiBbYmFzaWMtYXJyb3ctc2VsZWN0aW9uXSguLi9iYXNpYy1hcnJvdy1zZWxlY3Rpb24pIGFuZFxuICogW2Jhc2ljLXBhZ2UtZG90c10oLi4vYmFzaWMtcGFnZS1kb3RzKSBjb21wb25lbnRzLiBZb3UgY2FuIGFsc28gdmlldyBhXG4gKiBbcGxhaW4gZGVtb10oaHR0cDovL2Jhc2ljd2ViY29tcG9uZW50cy5vcmcvYmFzaWMtd2ViLWNvbXBvbmVudHMvcGFja2FnZXMvYmFzaWMtY2Fyb3VzZWwvcGxhaW4uaHRtbClcbiAqIGRlbW8uXG4gKlxuICogYmFzaWMtY2Fyb3VzZWwgdXNlcyBpdHMgY2hpbGRyZW4gYXMgdGhlIGVsZW1lbnRzIHRoZSB1c2VyIHdpbGwgbmF2aWdhdGVcbiAqIHRocm91Z2guIEluIGEgdHlwaWNhbCB1c2UsIGEgYmFzaWMtY2Fyb3VzZWwgY2FuIGJlIHVzZWQgdG8gbmF2aWdhdGUgYmV0d2VlbiBhXG4gKiBzZXF1ZW5jZSBvZiBpbWFnZXM6XG4gKlxuICogICAgIDxiYXNpYy1jYXJvdXNlbD5cbiAqICAgICAgIDxpbWcgc3JjPVwiaW1hZ2UxLmpwZ1wiPlxuICogICAgICAgPGltZyBzcmM9XCJpbWFnZTIuanBnXCI+XG4gKiAgICAgICA8aW1nIHNyYz1cImltYWdlMy5qcGdcIj5cbiAqICAgICA8L2Jhc2ljLWNhcm91c2VsPlxuICpcbiAqIFRoZSBjaGlsZCBlbGVtZW50cyBjYW4gYmUgb2YgYW55IHR5cGUg4oCUwqB0aGV5IGFyZSBub3QgcmVzdHJpY3RlZCB0byBpbWFnZXMuXG4gKlxuICogVGhpcyBjb21wb25lbnQgYXR0ZW1wdHMgdG8gbWVldCB0aGUgW0dvbGQgU3RhbmRhcmQgZm9yIHdlYiBjb21wb25lbnRzXVxuICogKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJjb21wb25lbnRzL2dvbGQtc3RhbmRhcmQvd2lraSkgc28gdGhhdCBpdCBpcyBnZW5lcmFsbHlcbiAqIGFzIGZsZXhpYmxlIGFuZCByb2J1c3QgYXMgc3RhbmRhcmQgSFRNTCBlbGVtZW50cy4gRm9yIGV4YW1wbGUsIGl0IG1lZXRzIHRoZVxuICogXCJDb250ZW50IENoYW5nZXNcIiBjcml0ZXJpYTogdGhlIGNhcm91c2VsIHdpbGwgYWRhcHQgdG8gbmV3IGNoaWxkIGVsZW1lbnRzXG4gKiBhZGRlZCBvciByZW1vdmVkIGF0IHJ1bnRpbWUuXG4gKlxuICogQ3VycmVudGx5LCB0aGlzIGNvbXBvbmVudCBkb2VzIG5vdCBtZWV0IHRoZSBHb2xkIFN0YW5kYXJkIGNyaXRlcmlhIFwiU2l6ZSB0b1xuICogQ29udGVudFwiLiBBcyBhIHJlc3VsdCwgZm9yIHRoZSB0aW1lIGJlaW5nLCAqKnlvdSBtdXN0IG1hbnVhbGx5IHNldCBhIHNpemUgb25cbiAqIHRoaXMgY29tcG9uZW50KiouIFR3byBhcHByb2FjaGVzIGFyZSB0bzogMSkgc3RyZXRjaCB0aGUgY29tcG9uZW50IGFjcm9zc1xuICogd2hhdGV2ZXIgc3VyZmFjZSBpdCBpcyBjb250YWluZWQgd2l0aGluLCBvciAyKSBzZXQgaXQgdG8gYmUgbGFyZ2VyIHRoYW4gdGhlXG4gKiBsYXJnZXN0IGNoaWxkIGVsZW1lbnQgeW91IHdhbnQgdG8gZGlzcGxheS4gVGhlIGZvcm1lciBhcHByb2FjaCBpcyBtb3JlXG4gKiBjb21tb24sIGFuZCBjYW4gYmUgYWNoaWV2ZWQgd2l0aCBDU1Mgc3R5bGluZyBzdWNoIGFzOlxuICpcbiAqICAgICBodG1sIHtcbiAqICAgICAgIGhlaWdodDogMTAwJTtcbiAqICAgICB9XG4gKlxuICogICAgIGJvZHkge1xuICogICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICogICAgICAgZGlzcGxheTogZmxleDtcbiAqICAgICAgIGhlaWdodDogMTAwJTtcbiAqICAgICAgIG1hcmdpbjogMDtcbiAqICAgICB9XG4gKlxuICogICAgIGJhc2ljLWNhcm91c2VsIHtcbiAqICAgICAgIC13ZWJraXQtZmxleDogMTtcbiAqICAgICAgIGZsZXg6IDE7XG4gKiAgICAgfVxuICpcbiAqIFRoZSBzdGFuZGFyZCBiYXNpYy1jYXJvdXNlbCBjb21wb25lbnQgc3VwcG9ydHMgbmF2aWdhdGlvbiB2aWEgdGhlIGZvbGxvd2luZ1xuICogaW5wdXQgbWV0aG9kczpcbiAqXG4gKiAqIEtleWJvYXJkTWl4aW4uIFdoZW4gdGhlIGNhcm91c2VsIGhhcyBmb2N1cywgdGhlIHVzZXIgY2FuIHByZXNzIExlZnQsIFJpZ2h0LFxuICogICBIb21lLCBvciBFbmQuIFRoZXNlIG5hdmlnYXRlIHRvIHRoZSBleHBlY3RlZCBlbGVtZW50LlxuICogKiBUb3VjaC4gT24gbW9iaWxlIGFuZCBvdGhlciB0b3VjaC1lbmFibGVkIGRldmljZXMsIHRoZSB1c2VyIGNhbiBkcmFnIGxlZnQgb3JcbiAqICAgcmlnaHQuXG4gKiAqIFRyYWNrcGFkLiBUaGUgdXNlciBjYW4gc3dpcGUgbGVmdCBvciByaWdodCBvbiBhIHRyYWNrcGFkIHRvIG5hdmlnYXRlLlxuICpcbiAqIEJlY2F1c2UgY2Fyb3VzZWxzIGFyZSB1c2VkIGluIGEgd2lkZSB2YXJpZXR5IG9mIGNpcmN1bXN0YW5jZXMsIGJ5IGRlZmF1bHRcbiAqIGJhc2ljLWNhcm91c2VsIHByb3ZpZGVzIGEgbWluaW1hbCBhcHBlYXJhbmNlIGFuZCBubyBzZXBhcmF0ZWx5IGludGVyYWN0aXZlXG4gKiBlbGVtZW50cyBzdWNoIGFzIGFycm93IGJ1dHRvbnMgb24gdGhlIHNpZGUgb3IgZG90cyBhbG9uZyB0aGUgYm90dG9tLiBUaG9zZVxuICogZWxlbWVudHMgY2FuIGJlIGFkZGVkIGJ5IHdyYXBwaW5nIGEgYmFzaWMtY2Fyb3VzZWwgaW4gb3B0aW9uYWwgYWNjZXNzb3JpZXM6XG4gKlxuICogKiBbYmFzaWMtYXJyb3ctc2VsZWN0aW9uXSguLi9iYXNpYy1hcnJvdy1zZWxlY3Rpb24pLlxuICogICBUaGlzIGFkZHMgcHJvbWluZW50IGxlZnQgYW5kIHJpZ2h0IGFycm93IGJ1dHRvbnMgb24gdGhlIHNpZGUgb2YgdGhlIGNhcm91c2VsLlxuICogKiBbYmFzaWMtcGFnZS1kb3RzXSguLi9iYXNpYy1wYWdlLWRvdHMpLlxuICogICBUaGlzIGFkZHMgYSBzZXJpZXMgb2Ygc21hbGwgZG90cyBiZWxvdyB0aGUgY2Fyb3VzZWwgdG8gaW5kaWNhdGUgdGhlIHVzZXInc1xuICogICBjdXJyZW50IHBvc2l0aW9uIGluIHRoZSBzZXF1ZW5jZS5cbiAqICogW2Jhc2ljLXNsaWRlc2hvdy10aW1lcl0oLi4vYmFzaWMtc2xpZGVzaG93LXRpbWVyKS5cbiAqICAgQWR2YW5jZXMgdG8gdGhlIG5leHQgaXRlbSBvbiBhIHRpbWVyLlxuICogKiBbYmFzaWMtdGFiLXN0cmlwXSguLi9iYXNpYy10YWItc3RyaXApLlxuICogICBBZGRzIGEgc3RyaXAgb2YgdHJhZGl0aW9uYWwgdGFiIGJ1dHRvbnMuXG4gKlxuICogU2VlIHRob3NlIGNvbXBvbmVudHMgZm9yIG1vcmUgZGV0YWlscywgYnV0IGluIGdlbmVyYWwgeW91IGNhbiBjb25zdHJ1Y3QgYVxuICogY29tbW9uIGNhcm91c2VsIHdpdGggYm90aCBhcnJvdyBidXR0b25zIGFuZCBkb3RzIGxpa2Ugc286XG4gKlxuICogICAgIDxiYXNpYy1hcnJvdy1zZWxlY3Rpb24+XG4gKiAgICAgICA8YmFzaWMtcGFnZS1kb3RzPlxuICogICAgICAgICA8YmFzaWMtY2Fyb3VzZWw+XG4gKiAgICAgICAgICAgLi4uIGltYWdlcywgZXRjLiAuLi5cbiAqICAgICAgICAgPC9iYXNpYy1jYXJvdXNlbD5cbiAqICAgICAgIDwvYmFzaWMtcGFnZS1kb3RzPlxuICogICAgIDwvYmFzaWMtYXJyb3ctc2VsZWN0aW9uPlxuICpcbiAqIEZvciB1bml2ZXJzYWwgYWNjZXNzLCBiYXNpYy1jYXJvdXNlbCBhdXRvbWF0aWNhbGx5IGFkZHMgYSB2YXJpZXR5IG9mXG4gKiBbQVJJQV0oaHR0cDovL3d3dy53My5vcmcvV0FJL2ludHJvL2FyaWEpIHByb3BlcnRpZXMgdG8gaXRzZWxmIGFuZCB0byBjaGlsZFxuICogZWxlbWVudHMuIFRoaXMgaGVscHMgdXNlcnMgbmF2aWdhdGUgdGhlIHNlcXVlbmNlIG9mIGVsZW1lbnRzIGluIHRoZSBjYXJvdXNlbFxuICogdXNpbmcgYXNzaXN0aXZlIHRlY2hub2xvZ2llcy5cbiAqXG4gKiBAbWl4ZXMgRGlyZWN0aW9uU2VsZWN0aW9uTWl4aW5cbiAqIEBtaXhlcyBHZW5lcmljTWl4aW5cbiAqIEBtaXhlcyBLZXlib2FyZE1peGluXG4gKiBAbWl4ZXMgS2V5Ym9hcmREaXJlY3Rpb25NaXhpblxuICogQG1peGVzIFN3aXBlRGlyZWN0aW9uTWl4aW5cbiAqIEBtaXhlcyBUcmFja3BhZERpcmVjdGlvbk1peGluXG4gKi9cbmNsYXNzIENhcm91c2VsIGV4dGVuZHMgYmFzZSB7XG5cbiAgZ2V0IFtzeW1ib2xzLmRlZmF1bHRzXSgpIHtcbiAgICBjb25zdCBkZWZhdWx0cyA9IHN1cGVyW3N5bWJvbHMuZGVmYXVsdHNdIHx8IHt9O1xuICAgIGRlZmF1bHRzLm5hdmlnYXRpb25BeGlzID0gJ2hvcml6b250YWwnO1xuICAgIGRlZmF1bHRzLnNlbGVjdGlvbkFuaW1hdGlvbkVmZmVjdCA9ICdzbGlkZVdpdGhHYXAnO1xuICAgIC8vIGRlZmF1bHRzLnNlbGVjdGlvblJlcXVpcmVkID0gdHJ1ZTtcbiAgICByZXR1cm4gZGVmYXVsdHM7XG4gIH1cblxufVxuXG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYmFzaWMtY2Fyb3VzZWwnLCBDYXJvdXNlbCk7XG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbDtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgdHJhbnNwaWxlZCB0byBjcmVhdGUgYW4gRVM1LWNvbXBhdGlibGUgZGlzdHJpYnV0aW9uIGluIHdoaWNoXG4gKiB0aGUgcGFja2FnZSdzIG1haW4gZmVhdHVyZShzKSBhcmUgYXZhaWxhYmxlIHZpYSB0aGUgd2luZG93LkJhc2ljIGdsb2JhbC5cbiAqIElmIHlvdSdyZSBhbHJlYWR5IHVzaW5nIEVTNiB5b3Vyc2VsZiwgaWdub3JlIHRoaXMgZmlsZSwgYW5kIGluc3RlYWQgaW1wb3J0XG4gKiB0aGUgc291cmNlIGZpbGUocykgeW91IHdhbnQgZnJvbSB0aGUgc3JjIGZvbGRlci5cbiAqL1xuXG5pbXBvcnQgQ29sbGFwc2libGVQYW5lbCBmcm9tICcuL3NyYy9Db2xsYXBzaWJsZVBhbmVsJztcblxud2luZG93LkJhc2ljID0gd2luZG93LkJhc2ljIHx8IHt9O1xud2luZG93LkJhc2ljLkNvbGxhcHNpYmxlUGFuZWwgPSBDb2xsYXBzaWJsZVBhbmVsO1xuIiwiaW1wb3J0IEVsZW1lbnRCYXNlIGZyb20gJy4uLy4uL2Jhc2ljLWVsZW1lbnQtYmFzZS9zcmMvRWxlbWVudEJhc2UnO1xuaW1wb3J0IE9wZW5DbG9zZU1peGluIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL09wZW5DbG9zZU1peGluJztcblxuXG4vKipcbiAqIEEgcGFuZWwgd2hpY2ggY2FuIGJlIGV4cGFuZGVkL2NvbGxhcHNlZCB3aXRoIGFuIGFuaW1hdGVkIHRyYW5zaXRpb24uXG4gKlxuICogW0xpdmUgZGVtb10oaHR0cDovL2Jhc2ljd2ViY29tcG9uZW50cy5vcmcvYmFzaWMtd2ViLWNvbXBvbmVudHMvcGFja2FnZXMvYmFzaWMtY29sbGFwc2libGUtcGFuZWwvKVxuICpcbiAqIFRoaXMgY29tcG9uZW50IGNvbWJpbmVzIHRoZSBPcGVuQ2xvc2VNaXhpbiBtaXhpbiBhbmQgYSBzaW1wbGUgQ1NTIGhlaWdodFxuICogYW5pbWF0aW9uLlxuICpcbiAqIFRoaXMgY29tcG9uZW50IGhhbmRsZXMgb25seSB0aGUgZHV0aWVzIG9mIGNvbGxhcHNpbmcgYW5kIGV4cGFuZGluZy4gSXQgZG9lc1xuICogbm90IHByb3ZpZGUgYSB1c2VyIGludGVyZmFjZSBmb3IgdGhlIHVzZXIgdG8gdHJpZ2dlciB0aGUgY2hhbmdlIGluIHN0YXRlO1xuICogeW91IG11c3QgcHJvdmlkZSB0aGF0IHVzZXIgaW50ZXJmYWNlIHlvdXJzZWxmLlxuICpcbiAqIEBleHRlbmRzIEVsZW1lbnRCYXNlXG4gKiBAbWl4ZXMgT3BlbkNsb3NlTWl4aW5cbiAqL1xuY2xhc3MgQ29sbGFwc2libGVQYW5lbCBleHRlbmRzIE9wZW5DbG9zZU1peGluKEVsZW1lbnRCYXNlKSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLiQub3ZlcmZsb3cuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsICgpID0+IHtcbiAgICAgIGlmICghdGhpcy5jbG9zZWQpIHtcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBoYXJkLWNvZGVkIGhlaWdodCB3ZSBhcHBsaWVkIGZvciB0aGUgdHJhbnNpdGlvbiBzbyB0aGF0XG4gICAgICAgIC8vIHRoZSBlbGVtZW50IHdpbGwgcmVmbG93IGNvcnJlY3RseSwgZS5nLiwgb24gd2luZG93IHJlc2l6ZS5cbiAgICAgICAgdGhpcy4kLm92ZXJmbG93LnN0eWxlLmhlaWdodCA9ICcnO1xuICAgICAgfVxuICAgICAgLy8gRW5zdXJlIHRoZSBhbmltYXRpb24gb25seSBwbGF5cyBvbmNlLiBGb3Igc29tZSByZWFzb24sIFNhZmFyaSB3aWxsIHNob3dcbiAgICAgIC8vIHRoZSBhbmltYXRpb24gdHdpY2Ugd2l0aG91dCB0aGlzIGxpbmUsIGV2ZW4gdGhvdWdoIHRoZSByZW5kZXIgZnVuY3Rpb25cbiAgICAgIC8vIGV4cGxpY2l0bHkgcmVtb3ZlcyB0aGlzIGNsYXNzIHdoZW4gaXQgc2V0cyB0aGUgb2xkIGhlaWdodC4gTmVpdGhlclxuICAgICAgLy8gQ2hyb21lIG5vciBGaXJlZm94IHNlZW0gdG8gbmVlZCB0aGlzIGxpbmUuXG4gICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3dUcmFuc2l0aW9uJyk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoY2xvc2luZykge1xuICAgIHN1cGVyLnJlbmRlcihjbG9zaW5nKTtcblxuICAgIGNvbnN0IG5hdHVyYWxIZWlnaHQgPSB0aGlzLiQuY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICBpZiAobmF0dXJhbEhlaWdodCA9PT0gMCkge1xuICAgICAgLy8gTW9zdCBsaWtlbHkgaGF2ZW4ndCBoYWQgYSBjaGFuY2UgdG8gcmVuZGVyIHlldC5cbiAgICAgIHRoaXMuJC5vdmVyZmxvdy5zdHlsZS5oZWlnaHQgPSBjbG9zaW5nID8gMCA6ICcnO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFdpdGhvdXQgYW5pbWF0aW5nLCBzZXQgc3RhcnRpbmcgaGVpZ2h0IG9mIHRyYW5zaXRpb24uXG4gICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdzaG93VHJhbnNpdGlvbicpO1xuICAgIGNvbnN0IG9sZEhlaWdodCA9IGNsb3NpbmcgPyBuYXR1cmFsSGVpZ2h0IDogMDtcbiAgICB0aGlzLiQub3ZlcmZsb3cuc3R5bGUuaGVpZ2h0ID0gb2xkSGVpZ2h0ICsgJ3B4JztcblxuICAgIC8vIEZvcmNlIGEgcmVsYXlvdXQgc28gdGhhdCB0aGUgc3RhcnRpbmcgaGVpZ2h0IGlzIGFwcGxpZWQuXG4gICAgLy8gVGhpcyBjYW4gYmUgYWNoaWV2ZWQgYnkgcmVhZGluZyBhIHByb3BlcnR5IGxpa2Ugb2Zmc2V0SGVpZ2h0LlxuICAgIHRoaXMuJC5vdmVyZmxvdy5vZmZzZXRIZWlnaHQ7IC8vIGpzaGludCBpZ25vcmU6bGluZVxuXG4gICAgLy8gVHVybiBhbmltYXRpb24gb24sIGFuZCBlbmRpbmcgaGVpZ2h0IG9mIHRyYW5zaXRpb24uXG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdzaG93VHJhbnNpdGlvbicpO1xuICAgIGNvbnN0IG5ld0hlaWdodCA9IGNsb3NpbmcgPyAwIDogbmF0dXJhbEhlaWdodDtcbiAgICB0aGlzLiQub3ZlcmZsb3cuc3R5bGUuaGVpZ2h0ID0gbmV3SGVpZ2h0ICsgJ3B4JztcbiAgfVxuXG4gIGdldCBbc3ltYm9scy50ZW1wbGF0ZV0oKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG5cbiAgICAgIDpob3N0KC5zaG93VHJhbnNpdGlvbikgI292ZXJmbG93IHtcbiAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuMnM7XG4gICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGlkPVwib3ZlcmZsb3dcIiByb2xlPVwibm9uZVwiPlxuICAgICAgICA8ZGl2IGlkPVwiY29udGFpbmVyXCIgcm9sZT1cIm5vbmVcIj5cbiAgICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG59XG5cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdiYXNpYy1jb2xsYXBzaWJsZS1wYW5lbCcsIENvbGxhcHNpYmxlUGFuZWwpO1xuZXhwb3J0IGRlZmF1bHQgQ29sbGFwc2libGVQYW5lbDtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgdHJhbnNwaWxlZCB0byBjcmVhdGUgYW4gRVM1LWNvbXBhdGlibGUgZGlzdHJpYnV0aW9uIGluIHdoaWNoXG4gKiB0aGUgcGFja2FnZSdzIG1haW4gZmVhdHVyZShzKSBhcmUgYXZhaWxhYmxlIHZpYSB0aGUgd2luZG93LkJhc2ljIGdsb2JhbC5cbiAqIElmIHlvdSdyZSBhbHJlYWR5IHVzaW5nIEVTNiB5b3Vyc2VsZiwgaWdub3JlIHRoaXMgZmlsZSwgYW5kIGluc3RlYWQgaW1wb3J0XG4gKiB0aGUgc291cmNlIGZpbGUocykgeW91IHdhbnQgZnJvbSB0aGUgc3JjIGZvbGRlci5cbiAqL1xuXG5pbXBvcnQgQXJyb3dTZWxlY3Rpb25NaXhpbiBmcm9tICcuL3NyYy9BcnJvd1NlbGVjdGlvbk1peGluJztcbmltcG9ydCBBdHRyaWJ1dGVNYXJzaGFsbGluZ01peGluIGZyb20gJy4vc3JjL0F0dHJpYnV0ZU1hcnNoYWxsaW5nTWl4aW4nO1xuaW1wb3J0IENsaWNrU2VsZWN0aW9uTWl4aW4gZnJvbSAnLi9zcmMvQ2xpY2tTZWxlY3Rpb25NaXhpbic7XG5pbXBvcnQgQ29tcG9zYWJsZU1peGluIGZyb20gJy4vc3JjL0NvbXBvc2FibGVNaXhpbic7XG5pbXBvcnQgQ29udGVudEl0ZW1zTWl4aW4gZnJvbSAnLi9zcmMvQ29udGVudEl0ZW1zTWl4aW4nO1xuaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuL3NyYy9jcmVhdGVTeW1ib2wnO1xuaW1wb3J0IERpcmVjdGlvblNlbGVjdGlvbk1peGluIGZyb20gJy4vc3JjL0RpcmVjdGlvblNlbGVjdGlvbk1peGluJztcbmltcG9ydCBEaXN0cmlidXRlZENoaWxkcmVuTWl4aW4gZnJvbSAnLi9zcmMvRGlzdHJpYnV0ZWRDaGlsZHJlbk1peGluJztcbmltcG9ydCBEaXN0cmlidXRlZENoaWxkcmVuQ29udGVudE1peGluIGZyb20gJy4vc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW5Db250ZW50TWl4aW4nO1xuaW1wb3J0IEdlbmVyaWNNaXhpbiBmcm9tICcuL3NyYy9HZW5lcmljTWl4aW4nO1xuaW1wb3J0IEtleWJvYXJkTWl4aW4gZnJvbSAnLi9zcmMvS2V5Ym9hcmRNaXhpbic7XG5pbXBvcnQgS2V5Ym9hcmREaXJlY3Rpb25NaXhpbiBmcm9tICcuL3NyYy9LZXlib2FyZERpcmVjdGlvbk1peGluJztcbmltcG9ydCBLZXlib2FyZFBhZ2VkU2VsZWN0aW9uTWl4aW4gZnJvbSAnLi9zcmMvS2V5Ym9hcmRQYWdlZFNlbGVjdGlvbk1peGluJztcbmltcG9ydCBLZXlib2FyZFByZWZpeFNlbGVjdGlvbk1peGluIGZyb20gJy4vc3JjL0tleWJvYXJkUHJlZml4U2VsZWN0aW9uTWl4aW4nO1xuaW1wb3J0IG1pY3JvdGFzayBmcm9tICcuL3NyYy9taWNyb3Rhc2snO1xuaW1wb3J0IFBhZ2VEb3RzTWl4aW4gZnJvbSAnLi9zcmMvUGFnZURvdHNNaXhpbic7XG5pbXBvcnQgUGxheUNvbnRyb2xzTWl4aW4gZnJvbSAnLi9zcmMvUGxheUNvbnRyb2xzTWl4aW4nO1xuaW1wb3J0IHNhZmVBdHRyaWJ1dGVzIGZyb20gJy4vc3JjL3NhZmVBdHRyaWJ1dGVzJztcbmltcG9ydCBTZWxlY3Rpb25BbmltYXRpb25NaXhpbiBmcm9tICcuL3NyYy9TZWxlY3Rpb25BbmltYXRpb25NaXhpbic7XG5pbXBvcnQgU2VsZWN0aW9uQXJpYUFjdGl2ZU1peGluIGZyb20gJy4vc3JjL1NlbGVjdGlvbkFyaWFBY3RpdmVNaXhpbic7XG5pbXBvcnQgU2VsZWN0aW9uSGlnaGxpZ2h0TWl4aW4gZnJvbSAnLi9zcmMvU2VsZWN0aW9uSGlnaGxpZ2h0TWl4aW4nO1xuaW1wb3J0IFNlbGVjdGlvbkluVmlld01peGluIGZyb20gJy4vc3JjL1NlbGVjdGlvbkluVmlld01peGluJztcbmltcG9ydCBTaGFkb3dFbGVtZW50UmVmZXJlbmNlc01peGluIGZyb20gJy4vc3JjL1NoYWRvd0VsZW1lbnRSZWZlcmVuY2VzTWl4aW4nO1xuaW1wb3J0IFNoYWRvd1RlbXBsYXRlTWl4aW4gZnJvbSAnLi9zcmMvU2hhZG93VGVtcGxhdGVNaXhpbic7XG5pbXBvcnQgU2luZ2xlU2VsZWN0aW9uTWl4aW4gZnJvbSAnLi9zcmMvU2luZ2xlU2VsZWN0aW9uTWl4aW4nO1xuaW1wb3J0IFN3aXBlRGlyZWN0aW9uTWl4aW4gZnJvbSAnLi9zcmMvU3dpcGVEaXJlY3Rpb25NaXhpbic7XG5pbXBvcnQgc3ltYm9scyBmcm9tICcuL3NyYy9zeW1ib2xzJztcbmltcG9ydCBUaW1lclNlbGVjdGlvbk1peGluIGZyb20gJy4vc3JjL1RpbWVyU2VsZWN0aW9uTWl4aW4nO1xuaW1wb3J0IFRyYWNrcGFkRGlyZWN0aW9uTWl4aW4gZnJvbSAnLi9zcmMvVHJhY2twYWREaXJlY3Rpb25NaXhpbic7XG5cbndpbmRvdy5CYXNpYyA9IHdpbmRvdy5CYXNpYyB8fCB7fTtcblxud2luZG93LkJhc2ljLkFycm93U2VsZWN0aW9uTWl4aW4gPSBBcnJvd1NlbGVjdGlvbk1peGluO1xud2luZG93LkJhc2ljLkF0dHJpYnV0ZU1hcnNoYWxsaW5nTWl4aW4gPSBBdHRyaWJ1dGVNYXJzaGFsbGluZ01peGluO1xud2luZG93LkJhc2ljLkNsaWNrU2VsZWN0aW9uTWl4aW4gPSBDbGlja1NlbGVjdGlvbk1peGluO1xud2luZG93LkJhc2ljLkNvbXBvc2FibGVNaXhpbiA9IENvbXBvc2FibGVNaXhpbjtcbndpbmRvdy5CYXNpYy5Db250ZW50SXRlbXNNaXhpbiA9IENvbnRlbnRJdGVtc01peGluO1xud2luZG93LkJhc2ljLmNyZWF0ZVN5bWJvbCA9IGNyZWF0ZVN5bWJvbDtcbndpbmRvdy5CYXNpYy5EaXJlY3Rpb25TZWxlY3Rpb25NaXhpbiA9IERpcmVjdGlvblNlbGVjdGlvbk1peGluO1xud2luZG93LkJhc2ljLkRpc3RyaWJ1dGVkQ2hpbGRyZW5NaXhpbiA9IERpc3RyaWJ1dGVkQ2hpbGRyZW5NaXhpbjtcbndpbmRvdy5CYXNpYy5EaXN0cmlidXRlZENoaWxkcmVuQ29udGVudE1peGluID0gRGlzdHJpYnV0ZWRDaGlsZHJlbkNvbnRlbnRNaXhpbjtcbndpbmRvdy5CYXNpYy5nZW5lcmljID0gR2VuZXJpY01peGluO1xud2luZG93LkJhc2ljLktleWJvYXJkTWl4aW4gPSBLZXlib2FyZE1peGluO1xud2luZG93LkJhc2ljLktleWJvYXJkRGlyZWN0aW9uTWl4aW4gPSBLZXlib2FyZERpcmVjdGlvbk1peGluO1xud2luZG93LkJhc2ljLktleWJvYXJkUGFnZWRTZWxlY3Rpb25NaXhpbiA9IEtleWJvYXJkUGFnZWRTZWxlY3Rpb25NaXhpbjtcbndpbmRvdy5CYXNpYy5LZXlib2FyZFByZWZpeFNlbGVjdGlvbk1peGluID0gS2V5Ym9hcmRQcmVmaXhTZWxlY3Rpb25NaXhpbjtcbndpbmRvdy5CYXNpYy5taWNyb3Rhc2sgPSBtaWNyb3Rhc2s7XG53aW5kb3cuQmFzaWMuUGFnZURvdHNNaXhpbiA9IFBhZ2VEb3RzTWl4aW47XG53aW5kb3cuQmFzaWMuUGxheUNvbnRyb2xzTWl4aW4gPSBQbGF5Q29udHJvbHNNaXhpbjtcbndpbmRvdy5CYXNpYy5zYWZlQXR0cmlidXRlcyA9IHNhZmVBdHRyaWJ1dGVzO1xud2luZG93LkJhc2ljLlNlbGVjdGlvbkFuaW1hdGlvbk1peGluID0gU2VsZWN0aW9uQW5pbWF0aW9uTWl4aW47XG53aW5kb3cuQmFzaWMuU2VsZWN0aW9uQXJpYUFjdGl2ZU1peGluID0gU2VsZWN0aW9uQXJpYUFjdGl2ZU1peGluO1xud2luZG93LkJhc2ljLlNlbGVjdGlvbkhpZ2hsaWdodE1peGluID0gU2VsZWN0aW9uSGlnaGxpZ2h0TWl4aW47XG53aW5kb3cuQmFzaWMuU2VsZWN0aW9uSW5WaWV3TWl4aW4gPSBTZWxlY3Rpb25JblZpZXdNaXhpbjtcbndpbmRvdy5CYXNpYy5TaGFkb3dFbGVtZW50UmVmZXJlbmNlc01peGluID0gU2hhZG93RWxlbWVudFJlZmVyZW5jZXNNaXhpbjtcbndpbmRvdy5CYXNpYy5TaGFkb3dUZW1wbGF0ZU1peGluID0gU2hhZG93VGVtcGxhdGVNaXhpbjtcbndpbmRvdy5CYXNpYy5TaW5nbGVTZWxlY3Rpb25NaXhpbiA9IFNpbmdsZVNlbGVjdGlvbk1peGluO1xud2luZG93LkJhc2ljLlN3aXBlRGlyZWN0aW9uTWl4aW4gPSBTd2lwZURpcmVjdGlvbk1peGluO1xud2luZG93LkJhc2ljLnN5bWJvbHMgPSBzeW1ib2xzO1xud2luZG93LkJhc2ljLlRpbWVyU2VsZWN0aW9uTWl4aW4gPSBUaW1lclNlbGVjdGlvbk1peGluO1xud2luZG93LkJhc2ljLlRyYWNrcGFkRGlyZWN0aW9uTWl4aW4gPSBUcmFja3BhZERpcmVjdGlvbk1peGluO1xuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9jcmVhdGVTeW1ib2wnO1xuaW1wb3J0IHN5bWJvbHMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvc3ltYm9scyc7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IG1vdXNlZG93bkxpc3RlbmVyU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdtb3VzZWRvd25MaXN0ZW5lcicpO1xuY29uc3QgbW91c2Vtb3ZlTGlzdGVuZXJTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ21vdXNlbW92ZUxpc3RlbmVyJyk7XG5jb25zdCBsYXN0TW91c2VYU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdsYXN0TW91c2VYJyk7XG5jb25zdCBsYXN0TW91c2VZU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdsYXN0TW91c2VZJyk7XG5jb25zdCBtb3VzZVRpbWVvdXRTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ21vdXNlVGltZW91dCcpO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggQXJyb3dTZWxlY3Rpb24uICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBUZW1wbGF0ZSBtaXhpbiB3aGljaCBhZGRzIHByb21pbmVudCBsZWZ0IGFuZCByaWdodCBhcnJvdyBidXR0b25zIHRvIGFcbiAgICogd3JhcHBlZCBjaGlsZCBzdWNoIGFzIGEgY2Fyb3VzZWwuXG4gICAqXG4gICAqIFlvdSBjYW4gc2VlIGEgW2xpdmUgZGVtb10oaHR0cDovL2Jhc2ljd2ViY29tcG9uZW50cy5vcmcvYmFzaWMtd2ViLWNvbXBvbmVudHMvcGFja2FnZXMvYmFzaWMtYXJyb3ctc2VsZWN0aW9uLmh0bWwpXG4gICAqIG9mIHRoaXMgY29tcG9uZW50IGFwcGxpZWQgdG8gYSBjYXJvdXNlbC5cbiAgICpcbiAgICogQ2xpY2tpbmcgdGhlIGxlZnQvcmlnaHQgYnV0dG9ucyBzZWxlY3RzIHRoZSBwcmV2aW91cy9uZXh0IGl0ZW0uXG4gICAqXG4gICAqIFR5cGljYWwgdXNhZ2U6XG4gICAqXG4gICAqICAgICBjbGFzcyBDYXJvdXNlbFdpdGhBcnJvd3MgZXh0ZW5kcyBBcnJvd1NlbGVjdGlvbk1peGluKENhcm91c2VsKSB7fVxuICAgKiAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdjYXJvdXNlbC13aXRoLWFycm93cycsIENhcm91c2VsV2l0aEFycm93cyk7XG4gICAqXG4gICAqIEJ5IGRlZmF1bHQsIHRoZSBhcnJvdyBidXR0b25zIGFyZSBzaG93biBvbiBkZXZpY2VzIHdpdGggYSBtb3VzZSBvciBtb3VzZS1saWtlXG4gICAqIHBvaW50aW5nIGRldmljZS4gVGhleSBhcmUgbm90IHNob3duIG9uIGEgdG91Y2gtY2FwYWJsZSBkZXZpY2UgdW5sZXNzIG1vdXNlXG4gICAqIG1vdmVtZW50IGlzIGRldGVjdGVkLiBUbyBjYXVzZSB0aGUgYnV0dG9ucyB0byBhbHdheXMgYXBwZWFyLCBhcHBseSB0aGVcbiAgICogJ3Nob3dBcnJvd3MnIENTUyBjbGFzcy5cbiAgICovXG4gIGNsYXNzIEFycm93U2VsZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG5cbiAgICAgIHRoaXMuJC5idXR0b25MZWZ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICB0aGlzLnNlbGVjdFByZXZpb3VzKCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLiQuYnV0dG9uUmlnaHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgIHRoaXMuc2VsZWN0TmV4dCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH0pO1xuICAgICAgYXNzdW1lQnV0dG9uRm9jdXModGhpcywgdGhpcy4kLmJ1dHRvbkxlZnQpO1xuICAgICAgYXNzdW1lQnV0dG9uRm9jdXModGhpcywgdGhpcy4kLmJ1dHRvblJpZ2h0KTtcbiAgICB9XG5cbiAgICBnZXQgY2FuU2VsZWN0TmV4dCgpIHtcbiAgICAgIHJldHVybiBzdXBlci5jYW5TZWxlY3ROZXh0O1xuICAgIH1cbiAgICBzZXQgY2FuU2VsZWN0TmV4dChjYW5TZWxlY3ROZXh0KSB7XG4gICAgICBpZiAoJ2NhblNlbGVjdE5leHQnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLmNhblNlbGVjdE5leHQgPSBjYW5TZWxlY3ROZXh0OyB9XG4gICAgICB0aGlzLiQuYnV0dG9uUmlnaHQuZGlzYWJsZWQgPSAhY2FuU2VsZWN0TmV4dDtcbiAgICB9XG5cbiAgICBnZXQgY2FuU2VsZWN0UHJldmlvdXMoKSB7XG4gICAgICByZXR1cm4gc3VwZXIuY2FuU2VsZWN0UHJldmlvdXM7XG4gICAgfVxuICAgIHNldCBjYW5TZWxlY3RQcmV2aW91cyhjYW5TZWxlY3RQcmV2aW91cykge1xuICAgICAgaWYgKCdjYW5TZWxlY3RQcmV2aW91cycgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuY2FuU2VsZWN0UHJldmlvdXMgPSBjYW5TZWxlY3RQcmV2aW91czsgfVxuICAgICAgdGhpcy4kLmJ1dHRvbkxlZnQuZGlzYWJsZWQgPSAhY2FuU2VsZWN0UHJldmlvdXM7XG4gICAgfVxuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2spIHsgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTsgfVxuXG4gICAgICBpZiAoIXRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93QXJyb3dzJykpIHtcbiAgICAgICAgLy8gRGV0ZXJtaW5lIHdoZXRoZXIgd2Ugc2hvdWxkIHNob3cgYXJyb3cgYnV0dG9ucyBvciBub3QuXG4gICAgICAgIGlmIChkZXZpY2VTdXBwb3J0c1RvdWNoKCkpIHtcbiAgICAgICAgICAvLyBBIHRvdWNoIGRldmljZSBtaWdodCBhbHNvIHN1cHBvcnQgYSBtb3VzZSwgYnV0IHdlIGNhbid0IGtub3cgd2hldGhlclxuICAgICAgICAgIC8vIHRoZXJlJ3MgYWN0dWFsbHkgYSBtb3VzZSB1bnRpbCB3ZSBoZWFyIGZyb20gaXQuXG4gICAgICAgICAgbGlzdGVuRm9yTW91c2UodGhpcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gVGhlIGRldmljZSBkb2Vzbid0IHN1cHBvcnQgdG91Y2gsIHNvIGFzc3VtZSBpdCBoYXMgYSBtb3VzZS5cbiAgICAgICAgICBzaG93QXJyb3dzKHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IFtzeW1ib2xzLmRlZmF1bHRzXSgpIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRzID0gc3VwZXJbc3ltYm9scy5kZWZhdWx0c10gfHwge307XG4gICAgICBkZWZhdWx0cy5uYXZpZ2F0aW9uQXhpcyA9ICdob3Jpem9udGFsJztcbiAgICAgIHJldHVybiBkZWZhdWx0cztcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFRoZSB0ZW1wbGF0ZSB1c2VzIHRoZSBjaGV2cm9uLWxlZnQgYW5kIGNoZXZyb24tcmlnaHQgU1ZHIGljb25zIGZyb21cbiAgICAgKiBodHRwczovL2dpdGh1Yi5jb20vUG9seW1lckVsZW1lbnRzL2lyb24taWNvbnMvYmxvYi9tYXN0ZXIvaXJvbi1pY29ucy5odG1sLlxuICAgICAqL1xuICAgIGdldCBbc3ltYm9scy50ZW1wbGF0ZV0oKSB7XG4gICAgICBjb25zdCBiYXNlVGVtcGxhdGUgPSBzdXBlcltzeW1ib2xzLnRlbXBsYXRlXSB8fCAnJztcbiAgICAgIHJldHVybiBgXG4gICAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgLXdlYmtpdC1mbGV4OiAxO1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgICNhcnJvd05hdmlnYXRpb25Db250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIC13ZWJraXQtZmxleDogMTtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXZpZ2F0aW9uQnV0dG9uIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgICAgICAgZmlsbDogY3VycmVudENvbG9yO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7IC8qIFJFVklFVzogQWNjZXNzaWJpbGl0eSBzaG91bGQgYmUgcHJvdmlkZWQgYnkgb3RoZXIgZWxlbWVudHMuICovXG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzO1xuICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIH1cblxuICAgICAgICAubmF2aWdhdGlvbkJ1dHRvbjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIC5uYXZpZ2F0aW9uQnV0dG9uOmFjdGl2ZTpub3QoOmRpc2FibGVkKSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XG4gICAgICAgIH1cbiAgICAgICAgLm5hdmlnYXRpb25CdXR0b246ZGlzYWJsZWQge1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdCg6bm90KC5zaG93QXJyb3dzKSkgLm5hdmlnYXRpb25CdXR0b24ge1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdmlnYXRpb25CdXR0b24gLmljb24ge1xuICAgICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgICB3aWR0aDogNDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIE92ZXJsYXkgdmFyaWFudCAqL1xuICAgICAgICA6aG9zdCgub3ZlcmxheUFycm93cykge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICA6aG9zdCgub3ZlcmxheUFycm93cykgLm5hdmlnYXRpb25CdXR0b24ge1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgIH1cbiAgICAgICAgOmhvc3QoLm92ZXJsYXlBcnJvd3MpICNidXR0b25MZWZ0IHtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB9XG4gICAgICAgIDpob3N0KC5vdmVybGF5QXJyb3dzKSAjYnV0dG9uUmlnaHQge1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB9XG4gICAgICAgIDpob3N0KC5vdmVybGF5QXJyb3dzKSAubmF2aWdhdGlvbkJ1dHRvbjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgICAgIH1cbiAgICAgICAgOmhvc3QoLm92ZXJsYXlBcnJvd3MpIC5uYXZpZ2F0aW9uQnV0dG9uOmFjdGl2ZTpub3QoOmRpc2FibGVkKSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gICAgICAgIH1cbiAgICAgICAgOmhvc3QoLm92ZXJsYXlBcnJvd3MpIC5uYXZpZ2F0aW9uQnV0dG9uOmRpc2FibGVkIHtcbiAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICAgICAgICB9XG4gICAgICAgIDwvc3R5bGU+XG5cbiAgICAgICAgPCEtLVxuICAgICAgICBBY2Nlc3NpYmlsaXR5IG5vdGU6IHNpbmNlIHRoZSBuYXZpZ2F0aW9uIG9mZmVyZWQgYnkgdGhlIGFycm93IGJ1dHRvbnMgc2hvdWxkXG4gICAgICAgIGJlIHJlZHVuZGFudCAodGhhdCBpcywgdGhlcmUgc2hvdWxkIGJlIG90aGVyIHdheXMgb2YgbmF2aWdhdGluZyB0aGUgbGlzdCksXG4gICAgICAgIHdlIG1hcmsgdGhlIGJ1dHRvbiBhcyBhcmlhLWhpZGRlbiBzbyB0aGF0IGFzc2lzdGl2ZSBkZXZpY2VzIGlnbm9yZSB0aGVtLlxuICAgICAgICAtLT5cbiAgICAgICAgPGJ1dHRvbiBpZD1cImJ1dHRvbkxlZnRcIiBjbGFzcz1cIm5hdmlnYXRpb25CdXR0b25cIiBkaXNhYmxlZCB0YWJpbmRleD1cIi0xXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgPHN2ZyBjbGFzcz1cImljb25cIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkIG1lZXRcIj5cbiAgICAgICAgICAgIDxnIGlkPVwiY2hldnJvbi1sZWZ0XCI+XG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTUuNDEgNy40MUwxNCA2bC02IDYgNiA2IDEuNDEtMS40MUwxMC44MyAxMnpcIi8+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8ZGl2IGlkPVwiYXJyb3dOYXZpZ2F0aW9uQ29udGFpbmVyXCIgcm9sZT1cIm5vbmVcIj5cbiAgICAgICAgICAke2Jhc2VUZW1wbGF0ZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gaWQ9XCJidXR0b25SaWdodFwiIGNsYXNzPVwibmF2aWdhdGlvbkJ1dHRvblwiIGRpc2FibGVkIHRhYmluZGV4PVwiLTFcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICA8c3ZnIGNsYXNzPVwiaWNvblwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWQgbWVldFwiPlxuICAgICAgICAgICAgPGcgaWQ9XCJjaGV2cm9uLXJpZ2h0XCI+XG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTAgNkw4LjU5IDcuNDEgMTMuMTcgMTJsLTQuNTggNC41OUwxMCAxOGw2LTZ6XCIvPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIGA7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gQXJyb3dTZWxlY3Rpb247XG59O1xuXG5cbi8qXG4gKiBCeSBkZWZhdWx0LCBhIGJ1dHRvbiB3aWxsIGFsd2F5cyB0YWtlIGZvY3VzIG9uIG1vdXNlZG93bi4gRm9yIHRoaXMgY29tcG9uZW50LFxuICogd2Ugd2FudCB0byBvdmVycmlkZSB0aGF0IGJlaGF2aW9yLCBzdWNoIHRoYXQgYSBtb3VzZWRvd24gb24gYSBidXR0b24ga2VlcHNcbiAqIHRoZSBmb2N1cyBvbiB0aGUgb3V0ZXIgY29tcG9uZW50LlxuICovXG5mdW5jdGlvbiBhc3N1bWVCdXR0b25Gb2N1cyhlbGVtZW50LCBidXR0b24pIHtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGV2ZW50ID0+IHtcbiAgICAvLyBHaXZlbiB0aGUgbWFpbiBlbGVtZW50IHRoZSBmb2N1cyBpZiBpdCBkb2Vzbid0IGFscmVhZHkgaGF2ZSBpdC5cbiAgICBlbGVtZW50LmZvY3VzKCk7XG4gICAgLy8gUHJldmVudCB0aGUgZGVmYXVsdCBmb2N1cy1vbi1tb3VzZWRvd24gYmVoYXZpb3IuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRldmljZVN1cHBvcnRzVG91Y2goKSB7XG4gIHJldHVybiAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgfHxcbiAgICAgICh3aW5kb3cuRG9jdW1lbnRUb3VjaCAmJiBkb2N1bWVudCBpbnN0YW5jZW9mIHdpbmRvdy5Eb2N1bWVudFRvdWNoKTtcbn1cblxuLy8gV2UgdHJ5IHRvIGRldGVjdCB0aGUgcHJlc2VuY2Ugb2YgYSBtb3VzZSBieSBsaXN0ZW5pbmcgZm9yIG1vdXNlbW92ZSBldmVudHNcbi8vIHdoaWNoIGFyZSAqbm90KiB0aGUgcmVzdWx0IG9mIGEgbW91c2Vkb3duLiBPbiBhIHRvdWNoIGRldmljZSwgYSB0YXAgb24gdGhlXG4vLyBwYWdlIHdpbGwgZ2VuZXJhdGUgYSBmYWtlIG1vdXNlbW92ZSwgZm9sbG93ZWQgYnkgYSBtb3VzZWRvd24uIFdlIGRvbid0IHdhbnRcbi8vIHRvIHJlc3BvbmQgdG8gdGhvc2UgZmFrZSBtb3VzZW1vdmUgZXZlbnRzLiBUbyBkaXNjcmltaW5hdGUgYmV0d2VlbiBmYWtlIGFuZFxuLy8gcmVhbCBtb3VzZW1vdmUgZXZlbnRzLCB3aGVuIHdlIGdldCBhIG1vdXNlbW92ZSBldmVudCwgd2Ugd2FpdCBmb3IgYSBiaXQgdG9cbi8vIHNlZSBpZiB0aGUgc2FtZSBsb2NhdGlvbiBpcyByZXBvcnRlZCBhcyB0aGUgbG9jYXRpb24gb2YgYSBzdWJzZXF1ZW50XG4vLyBtb3VzZWRvd24uXG5mdW5jdGlvbiBsaXN0ZW5Gb3JNb3VzZShlbGVtZW50KSB7XG5cbiAgZWxlbWVudFttb3VzZWRvd25MaXN0ZW5lclN5bWJvbF0gPSBldmVudCA9PiB7XG4gICAgaWYgKGVsZW1lbnRbbW91c2VUaW1lb3V0U3ltYm9sXSkge1xuICAgICAgY2xlYXJUaW1lb3V0KGVsZW1lbnRbbW91c2VUaW1lb3V0U3ltYm9sXSk7XG4gICAgfVxuICAgIGVsZW1lbnRbbGFzdE1vdXNlWFN5bWJvbF0gPSBldmVudC5wYWdlWDtcbiAgICBlbGVtZW50W2xhc3RNb3VzZVlTeW1ib2xdID0gZXZlbnQucGFnZVk7XG4gIH07XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlbGVtZW50W21vdXNlZG93bkxpc3RlbmVyU3ltYm9sXSk7XG5cbiAgZWxlbWVudFttb3VzZW1vdmVMaXN0ZW5lclN5bWJvbF0gPSBldmVudCA9PiB7XG4gICAgLy8gUG9zdHBvbmUgY2hlY2tpbmcgdGhlIG1vdXNlbW92ZSBsb2NhdGlvbiB0byBnaXZlIHRoZSBtb3VzZWRvd24gZXZlbnQgYVxuICAgIC8vIGNoYW5jZSB0byBmaXJlLiBUaGUgMjUwIG1zIGRlbGF5IGlzIGp1c3QgZ3Vlc3N3b3JrOyBhIHNob3J0ZXIgZGVsYXlcbiAgICAvLyBkb2Vzbid0IHNlZW0gdG8gd29yay5cbiAgICBlbGVtZW50W21vdXNlVGltZW91dFN5bWJvbF0gPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChlbGVtZW50W2xhc3RNb3VzZVhTeW1ib2xdICE9IG51bGwgJiYgZXZlbnQucGFnZVggIT09IGVsZW1lbnRbbGFzdE1vdXNlWFN5bWJvbF0gfHxcbiAgICAgICAgICBlbGVtZW50W2xhc3RNb3VzZVlTeW1ib2xdICE9IG51bGwgJiYgZXZlbnQucGFnZVkgIT09IGVsZW1lbnRbbGFzdE1vdXNlWVN5bWJvbF0pIHtcbiAgICAgICAgLy8gbW91c2Vtb3ZlIGV2ZW50IHdhcyBhdCBhIGxvY2F0aW9uIG90aGVyIHRoYW4gdGhlIGxhc3QgbW91c2Vkb3duLFxuICAgICAgICAvLyBhbmQgaGVuY2UgbW9zdCBsaWtlbHkgYSByZWFsIG1vdXNlbW92ZSBldmVudC5cbiAgICAgICAgbW91c2VEZXRlY3RlZChlbGVtZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnRbbGFzdE1vdXNlWFN5bWJvbF0gPSBldmVudC5wYWdlWDtcbiAgICAgICAgZWxlbWVudFtsYXN0TW91c2VZU3ltYm9sXSA9IGV2ZW50LnBhZ2VZO1xuICAgICAgfVxuICAgIH0sIDI1MCk7XG4gIH07XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBlbGVtZW50W21vdXNlbW92ZUxpc3RlbmVyU3ltYm9sXSk7XG59XG5cbmZ1bmN0aW9uIG1vdXNlRGV0ZWN0ZWQoZWxlbWVudCkge1xuICBzaG93QXJyb3dzKGVsZW1lbnQpO1xuXG4gIC8vIFdlIGNhbiBzdG9wIGxpc3RlbmluZyBmb3IgbW91c2UgZXZlbnRzIG5vdy5cbiAgaWYgKGVsZW1lbnRbbW91c2VUaW1lb3V0U3ltYm9sXSkge1xuICAgIGNsZWFyVGltZW91dChlbGVtZW50W21vdXNlVGltZW91dFN5bWJvbF0pO1xuICB9XG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlbGVtZW50W21vdXNlZG93bkxpc3RlbmVyU3ltYm9sXSk7XG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBlbGVtZW50W21vdXNlbW92ZUxpc3RlbmVyU3ltYm9sXSk7XG4gIGVsZW1lbnRbbW91c2Vkb3duTGlzdGVuZXJTeW1ib2xdID0gbnVsbDtcbiAgZWxlbWVudFttb3VzZW1vdmVMaXN0ZW5lclN5bWJvbF0gPSBudWxsO1xufVxuXG5mdW5jdGlvbiBzaG93QXJyb3dzKGVsZW1lbnQpIHtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzaG93QXJyb3dzJyk7XG59XG4iLCJpbXBvcnQgc2FmZUF0dHJpYnV0ZXMgZnJvbSAnLi9zYWZlQXR0cmlidXRlcyc7XG5cblxuLy8gTWVtb2l6ZWQgbWFwcyBvZiBhdHRyaWJ1dGUgdG8gcHJvcGVydHkgbmFtZXMgYW5kIHZpY2UgdmVyc2EuXG5jb25zdCBhdHRyaWJ1dGVUb1Byb3BlcnR5TmFtZXMgPSB7fTtcbmNvbnN0IHByb3BlcnR5TmFtZXNUb0F0dHJpYnV0ZXMgPSB7fTtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIEF0dHJpYnV0ZU1hcnNoYWxsaW5nLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggbWFyc2hhbGxzIGF0dHJpYnV0ZXMgdG8gcHJvcGVydGllcyBhbmQgdmljZSB2ZXJzYS5cbiAgICpcbiAgICogSWYgeW91ciBjb21wb25lbnQgZXhwb3NlcyBhIHNldHRlciBmb3IgYSBwcm9wZXJ0eSwgaXQncyBnZW5lcmFsbHkgYSBnb29kXG4gICAqIGlkZWEgdG8gbGV0IGRldnMgdXNpbmcgeW91ciBjb21wb25lbnQgYmUgYWJsZSB0byBzZXQgdGhhdCBwcm9wZXJ0eSBpbiBIVE1MXG4gICAqIHZpYSBhbiBlbGVtZW50IGF0dHJpYnV0ZS4gWW91IGNhbiBjb2RlIHRoYXQgeW91cnNlbGYgYnkgd3JpdGluZyBhblxuICAgKiBgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrYCwgb3IgeW91IGNhbiB1c2UgdGhpcyBtaXhpbiB0byBnZXQgYSBkZWdyZWUgb2ZcbiAgICogYXV0b21hdGljIHN1cHBvcnQuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gaW1wbGVtZW50cyBhbiBgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrYCB0aGF0IHdpbGwgYXR0ZW1wdCB0b1xuICAgKiBjb252ZXJ0IGEgY2hhbmdlIGluIGFuIGVsZW1lbnQgYXR0cmlidXRlIGludG8gYSBjYWxsIHRvIHRoZSBjb3JyZXNwb25kaW5nXG4gICAqIHByb3BlcnR5IHNldHRlci4gQXR0cmlidXRlcyB0eXBpY2FsbHkgZm9sbG93IGh5cGhlbmF0ZWQgbmFtZXMgKFwiZm9vLWJhclwiKSxcbiAgICogd2hlcmVhcyBwcm9wZXJ0aWVzIHR5cGljYWxseSB1c2UgY2FtZWxDYXNlIG5hbWVzIChcImZvb0JhclwiKS4gVGhpcyBtaXhpblxuICAgKiByZXNwZWN0cyB0aGF0IGNvbnZlbnRpb24sIGF1dG9tYXRpY2FsbHkgbWFwcGluZyB0aGUgaHlwaGVuYXRlZCBhdHRyaWJ1dGVcbiAgICogbmFtZSB0byB0aGUgY29ycmVzcG9uZGluZyBjYW1lbENhc2UgcHJvcGVydHkgbmFtZS5cbiAgICpcbiAgICogRXhhbXBsZTogWW91IGRlZmluZSBhIGNvbXBvbmVudCB1c2luZyB0aGlzIG1peGluOlxuICAgKlxuICAgKiAgICAgY2xhc3MgTXlFbGVtZW50IGV4dGVuZHMgQXR0cmlidXRlTWFyc2hhbGxpbmdNaXhpbihIVE1MRWxlbWVudCkge1xuICAgKiAgICAgICBnZXQgZm9vQmFyKCkgeyByZXR1cm4gdGhpcy5fZm9vQmFyOyB9XG4gICAqICAgICAgIHNldCBmb29CYXIodmFsdWUpIHsgdGhpcy5fZm9vQmFyID0gdmFsdWU7IH1cbiAgICogICAgIH1cbiAgICogICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbXktZWxlbWVudCcsIE15RWxlbWVudCk7XG4gICAqXG4gICAqIElmIHNvbWVvbmUgdGhlbiBpbnN0YW50aWF0ZXMgeW91ciBjb21wb25lbnQgaW4gSFRNTDpcbiAgICpcbiAgICogICAgIDxteS1lbGVtZW50IGZvby1iYXI9XCJIZWxsb1wiPjwvbXktZWxlbWVudD5cbiAgICpcbiAgICogVGhlbiwgYWZ0ZXIgdGhlIGVsZW1lbnQgaGFzIGJlZW4gdXBncmFkZWQsIHRoZSBgZm9vQmFyYCBzZXR0ZXIgd2lsbFxuICAgKiBhdXRvbWF0aWNhbGx5IGJlIGludm9rZWQgd2l0aCB0aGUgaW5pdGlhbCB2YWx1ZSBcIkhlbGxvXCIuXG4gICAqXG4gICAqIEZvciB0aGUgdGltZSBiZWluZywgdGhpcyBtaXhpbiBvbmx5IHN1cHBvcnRzIHN0cmluZy12YWx1ZWQgcHJvcGVydGllcy5cbiAgICogSWYgeW91J2QgbGlrZSB0byBjb252ZXJ0IHN0cmluZyBhdHRyaWJ1dGVzIHRvIG90aGVyIHR5cGVzIChudW1iZXJzLFxuICAgKiBib29sZWFucyksIHlvdSBuZWVkIHRvIGltcGxlbWVudCBgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrYCB5b3Vyc2VsZi5cbiAgICovXG4gIGNsYXNzIEF0dHJpYnV0ZU1hcnNoYWxsaW5nIGV4dGVuZHMgYmFzZSB7XG5cbiAgICAvKlxuICAgICAqIEhhbmRsZSBhIGNoYW5nZSB0byB0aGUgYXR0cmlidXRlIHdpdGggdGhlIGdpdmVuIG5hbWUuXG4gICAgICovXG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKGF0dHJpYnV0ZU5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xuICAgICAgaWYgKHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjaykgeyBzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soKTsgfVxuICAgICAgY29uc3QgcHJvcGVydHlOYW1lID0gYXR0cmlidXRlVG9Qcm9wZXJ0eU5hbWUoYXR0cmlidXRlTmFtZSk7XG4gICAgICAvLyBJZiB0aGUgYXR0cmlidXRlIG5hbWUgY29ycmVzcG9uZHMgdG8gYSBwcm9wZXJ0eSBuYW1lLCBzZXQgdGhlIHByb3BlcnR5LlxuICAgICAgLy8gSWdub3JlIHN0YW5kYXJkIEhUTUxFbGVtZW50IHByb3BlcnRpZXMgaGFuZGxlZCBieSB0aGUgRE9NLlxuICAgICAgaWYgKHByb3BlcnR5TmFtZSBpbiB0aGlzICYmICEocHJvcGVydHlOYW1lIGluIEhUTUxFbGVtZW50LnByb3RvdHlwZSkpIHtcbiAgICAgICAgdGhpc1twcm9wZXJ0eU5hbWVdID0gbmV3VmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2spIHsgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTsgfVxuICAgICAgc2FmZUF0dHJpYnV0ZXMuY29ubmVjdGVkKHRoaXMpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xuICAgICAgcmV0dXJuIGF0dHJpYnV0ZXNGb3JDbGFzcyh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQvdW5zZXQgdGhlIGF0dHJpYnV0ZSB3aXRoIHRoZSBpbmRpY2F0ZWQgbmFtZS5cbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIGV4aXN0cyBwcmltYXJpbHkgdG8gaGFuZGxlIHRoZSBjYXNlIHdoZXJlIGFuIGVsZW1lbnQgd2FudHMgdG9cbiAgICAgKiBzZXQgYSBkZWZhdWx0IHByb3BlcnR5IHZhbHVlIHRoYXQgc2hvdWxkIGJlIHJlZmxlY3RlZCBhcyBhbiBhdHRyaWJ1dGUuIEFuXG4gICAgICogaW1wb3J0YW50IGxpbWl0YXRpb24gb2YgY3VzdG9tIGVsZW1lbnQgY29uc3R1cmN0b3JzIGlzIHRoYXQgdGhleSBjYW5ub3RcbiAgICAgKiBzZXQgYXR0cmlidXRlcy4gQSBjYWxsIHRvIGByZWZsZWN0QXR0cmlidXRlYCBkdXJpbmcgdGhlIGNvbnN0cnVjdG9yIHdpbGxcbiAgICAgKiBiZSBkZWZlcnJlZCB1bnRpbCB0aGUgZWxlbWVudCBpcyBjb25uZWN0ZWQgdG8gdGhlIGRvY3VtZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZSAtIFRoZSBuYW1lIG9mIHRoZSAqYXR0cmlidXRlKiAobm90IHByb3BlcnR5KSB0byBzZXQuXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIHNldC4gSWYgbnVsbCwgdGhlIGF0dHJpYnV0ZSB3aWxsIGJlIHJlbW92ZWQuXG4gICAgICovXG4gICAgcmVmbGVjdEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gc2FmZUF0dHJpYnV0ZXMuc2V0QXR0cmlidXRlKHRoaXMsIGF0dHJpYnV0ZSwgdmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldC91bnNldCB0aGUgY2xhc3Mgd2l0aCB0aGUgaW5kaWNhdGVkIG5hbWUuXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBleGlzdHMgcHJpbWFyaWx5IHRvIGhhbmRsZSB0aGUgY2FzZSB3aGVyZSBhbiBlbGVtZW50IHdhbnRzIHRvXG4gICAgICogc2V0IGEgZGVmYXVsdCBwcm9wZXJ0eSB2YWx1ZSB0aGF0IHNob3VsZCBiZSByZWZsZWN0ZWQgYXMgYXMgY2xhc3MuIEFuXG4gICAgICogaW1wb3J0YW50IGxpbWl0YXRpb24gb2YgY3VzdG9tIGVsZW1lbnQgY29uc3R1cmN0b3JzIGlzIHRoYXQgdGhleSBjYW5ub3RcbiAgICAgKiBzZXQgYXR0cmlidXRlcywgaW5jbHVkaW5nIHRoZSBgY2xhc3NgIGF0dHJpYnV0ZS4gQSBjYWxsIHRvXG4gICAgICogYHJlZmxlY3RDbGFzc2AgZHVyaW5nIHRoZSBjb25zdHJ1Y3RvciB3aWxsIGJlIGRlZmVycmVkIHVudGlsIHRoZSBlbGVtZW50XG4gICAgICogaXMgY29ubmVjdGVkIHRvIHRoZSBkb2N1bWVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgLSBUaGUgbmFtZSBvZiB0aGUgY2xhc3MgdG8gc2V0LlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZSAtIFRydWUgdG8gc2V0IHRoZSBjbGFzcywgZmFsc2UgdG8gcmVtb3ZlIGl0LlxuICAgICAqL1xuICAgIHJlZmxlY3RDbGFzcyhjbGFzc05hbWUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gc2FmZUF0dHJpYnV0ZXMudG9nZ2xlQ2xhc3ModGhpcywgY2xhc3NOYW1lLCB2YWx1ZSk7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gQXR0cmlidXRlTWFyc2hhbGxpbmc7XG59O1xuXG5cbi8vIENvbnZlcnQgaHlwaGVuYXRlZCBmb28tYmFyIGF0dHJpYnV0ZSBuYW1lIHRvIGNhbWVsIGNhc2UgZm9vQmFyIHByb3BlcnR5IG5hbWUuXG5mdW5jdGlvbiBhdHRyaWJ1dGVUb1Byb3BlcnR5TmFtZShhdHRyaWJ1dGVOYW1lKSB7XG4gIGxldCBwcm9wZXJ0eU5hbWUgPSBhdHRyaWJ1dGVUb1Byb3BlcnR5TmFtZXNbYXR0cmlidXRlTmFtZV07XG4gIGlmICghcHJvcGVydHlOYW1lKSB7XG4gICAgLy8gQ29udmVydCBhbmQgbWVtb2l6ZS5cbiAgICBjb25zdCBoeXBlblJlZ0V4ID0gLy0oW2Etel0pL2c7XG4gICAgcHJvcGVydHlOYW1lID0gYXR0cmlidXRlTmFtZS5yZXBsYWNlKGh5cGVuUmVnRXgsXG4gICAgICAgIG1hdGNoID0+IG1hdGNoWzFdLnRvVXBwZXJDYXNlKCkpO1xuICAgIGF0dHJpYnV0ZVRvUHJvcGVydHlOYW1lc1thdHRyaWJ1dGVOYW1lXSA9IHByb3BlcnR5TmFtZTtcbiAgfVxuICByZXR1cm4gcHJvcGVydHlOYW1lO1xufVxuXG5mdW5jdGlvbiBhdHRyaWJ1dGVzRm9yQ2xhc3MoY2xhc3NGbikge1xuXG4gIC8vIFdlIHRyZWF0IHRoZSBlbGVtZW50IGJhc2UgY2xhc3NlcyBhcyBpZiB0aGV5IGhhdmUgbm8gYXR0cmlidXRlcywgc2luY2Ugd2VcbiAgLy8gZG9uJ3Qgd2FudCB0byByZWNlaXZlIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayBmb3IgdGhlbS5cbiAgaWYgKGNsYXNzRm4gPT09IEhUTUxFbGVtZW50IHx8IGNsYXNzRm4gPT09IE9iamVjdCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIC8vIEdldCBhdHRyaWJ1dGVzIGZvciBwYXJlbnQgY2xhc3MuXG4gIGNvbnN0IGJhc2VDbGFzcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihjbGFzc0ZuLnByb3RvdHlwZSkuY29uc3RydWN0b3I7XG4gIGNvbnN0IGJhc2VBdHRyaWJ1dGVzID0gYXR0cmlidXRlc0ZvckNsYXNzKGJhc2VDbGFzcyk7XG5cbiAgLy8gR2V0IGF0dHJpYnV0ZXMgZm9yIHRoaXMgY2xhc3MuXG4gIGNvbnN0IHByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhjbGFzc0ZuLnByb3RvdHlwZSk7XG4gIGNvbnN0IHNldHRlck5hbWVzID0gcHJvcGVydHlOYW1lcy5maWx0ZXIocHJvcGVydHlOYW1lID0+XG4gICAgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoXG4gICAgICAgIGNsYXNzRm4ucHJvdG90eXBlLCBwcm9wZXJ0eU5hbWUpLnNldCA9PT0gJ2Z1bmN0aW9uJyk7XG4gIGNvbnN0IGF0dHJpYnV0ZXMgPSBzZXR0ZXJOYW1lcy5tYXAoc2V0dGVyTmFtZSA9PlxuICAgICAgcHJvcGVydHlOYW1lVG9BdHRyaWJ1dGUoc2V0dGVyTmFtZSkpO1xuXG4gIC8vIE1lcmdlLlxuICBjb25zdCBkaWZmID0gYXR0cmlidXRlcy5maWx0ZXIoYXR0cmlidXRlID0+XG4gICAgICBiYXNlQXR0cmlidXRlcy5pbmRleE9mKGF0dHJpYnV0ZSkgPCAwKTtcbiAgcmV0dXJuIGJhc2VBdHRyaWJ1dGVzLmNvbmNhdChkaWZmKTtcbn1cblxuLy8gQ29udmVydCBhIGNhbWVsIGNhc2UgZm9vQmFyIHByb3BlcnR5IG5hbWUgdG8gYSBoeXBoZW5hdGVkIGZvby1iYXIgYXR0cmlidXRlLlxuZnVuY3Rpb24gcHJvcGVydHlOYW1lVG9BdHRyaWJ1dGUocHJvcGVydHlOYW1lKSB7XG4gIGxldCBhdHRyaWJ1dGUgPSBwcm9wZXJ0eU5hbWVzVG9BdHRyaWJ1dGVzW3Byb3BlcnR5TmFtZV07XG4gIGlmICghYXR0cmlidXRlKSB7XG4gICAgLy8gQ29udmVydCBhbmQgbWVtb2l6ZS5cbiAgICBjb25zdCB1cHBlcmNhc2VSZWdFeCA9IC8oW0EtWl0pL2c7XG4gICAgYXR0cmlidXRlID0gcHJvcGVydHlOYW1lLnJlcGxhY2UodXBwZXJjYXNlUmVnRXgsICctJDEnKS50b0xvd2VyQ2FzZSgpO1xuICB9XG4gIHJldHVybiBhdHRyaWJ1dGU7XG59XG4iLCIvKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIENsaWNrU2VsZWN0aW9uLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggbWFwcyBhIGNsaWNrIChhY3R1YWxseSwgYSBtb3VzZWRvd24pIHRvIGEgc2VsZWN0aW9uLlxuICAgKlxuICAgKiBUaGlzIHNpbXBsZSBtaXhpbiBpcyB1c2VmdWwgaW4gbGlzdCBib3gtbGlrZSBlbGVtZW50cywgd2hlcmUgYSBjbGljayBvbiBhXG4gICAqIGxpc3QgaXRlbSBpbXBsaWNpdGx5IHNlbGVjdHMgaXQuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyB0aGUgY29tcG9uZW50IHRvIHByb3ZpZGUgYW4gYGl0ZW1zYCBwcm9wZXJ0eS4gWW91IGNhblxuICAgKiBwcm92aWRlIHRoYXQgcHJvcGVydHkgeW91cnNlbGYsIG9yIHVzZVxuICAgKiBbQ29udGVudEl0ZW1zTWl4aW5dKENvbnRlbnRJdGVtc01peGluLm1kKS4gVGhpcyBtaXhpbiBhbHNvIGV4cGVjdHMgdGhlXG4gICAqIGNvbXBvbmVudCB0byBkZWZpbmUgYSBgc2VsZWN0ZWRJbmRleGAgcHJvcGVydHkuIFlvdSBjYW4gcHJvdmlkZSB0aGF0XG4gICAqIHlvdXJzZWxmLCBvciB1c2UgW1NpbmdsZVNlbGVjdGlvbk1peGluXShTaW5nbGVTZWxlY3Rpb25NaXhpbi5tZCkuXG4gICAqL1xuICBjbGFzcyBDbGlja1NlbGVjdGlvbiBleHRlbmRzIGJhc2Uge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgLypcbiAgICAgICAqIFJFVklFVzogV2hpY2ggZXZlbnQgc2hvdWxkIHdlIGxpc3RlbiB0byBoZXJlP1xuICAgICAgICpcbiAgICAgICAqIFRoZSBzdGFuZGFyZCB1c2UgZm9yIHRoaXMgbWl4aW4gaXMgaW4gbGlzdCBib3hlcy4gTGlzdCBib3hlcyBkb24ndFxuICAgICAgICogYXBwZWFyIHRvIGJlIGNvbnNpc3RlbnQgd2l0aCByZWdhcmQgdG8gd2hldGhlciB0aGV5IHNlbGVjdCBvbiBtb3VzZWRvd25cbiAgICAgICAqIG9yIGNsaWNrL21vdXNldXAuXG4gICAgICAgKi9cbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZXZlbnQgPT4ge1xuICAgICAgICAvLyBIQUNLOiBJZiB0aGUgaXRlbSBpcyBhIGJ1dHRvbiwgdGhlIGV2ZW50IHNlZW1zIHRvIGJlIHJhaXNlZCBpblxuICAgICAgICAvLyBwaGFzZSAyIChBVF9UQVJHRVQpLCBidXQgdGhlIHRhcmdldCBpcyB0aGUgY29tcG9uZW50LCBub3QgaXRlbS5cbiAgICAgICAgLy8gTmVlZCB0byBpbnZlc2lnYXRlLlxuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgPT09IHRoaXMgP1xuICAgICAgICAgIGV2ZW50LnBhdGhbMF0gOlxuICAgICAgICAgIGV2ZW50LnRhcmdldDtcbiAgICAgICAgY29uc3QgaW5kZXggPSBpbmRleE9mQ29udGFpbmluZ0l0ZW0odGhpcywgdGFyZ2V0KTtcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBpbmRleDtcbiAgICAgICAgICAvLyBOb3RlOiBXZSBkb24ndCBjYWxsIHByZXZlbnREZWZhdWx0IGhlcmUuIFRoZSBkZWZhdWx0IGJlaGF2aW9yIGZvclxuICAgICAgICAgIC8vIG1vdXNlZG93biBpbmNsdWRlcyBzZXR0aW5nIGtleWJvYXJkIGZvY3VzIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3RcbiAgICAgICAgICAvLyBhbHJlYWR5IGhhdmUgdGhlIGZvY3VzLCBhbmQgd2Ugd2FudCB0byBwcmVzZXJ2ZSB0aGF0IGJlaGF2aW9yLlxuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IGltcGxlbWVudGF0aW9uLiBUaGlzIHdpbGwgdHlwaWNhbGx5IGJlIGhhbmRsZWQgYnkgb3RoZXIgbWl4aW5zLlxuICAgIGdldCBzZWxlY3RlZEluZGV4KCkge1xuICAgICAgcmV0dXJuIHN1cGVyLnNlbGVjdGVkSW5kZXg7XG4gICAgfVxuICAgIHNldCBzZWxlY3RlZEluZGV4KGluZGV4KSB7XG4gICAgICBpZiAoJ3NlbGVjdGVkSW5kZXgnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkSW5kZXggPSBpbmRleDsgfVxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIENsaWNrU2VsZWN0aW9uO1xufTtcblxuXG4vKlxuICogUmV0dXJuIGluZGV4IG9mIHRoZSBlbGVtZW50IGl0ZW1zIHRoYXQgZWl0aGVyIGlzIG9yIGNvbnRhaW5zIHRoZSBpbmRpY2F0ZWRcbiAqIHRhcmdldC4gUmV0dXJuIC0xIGlmIG5vdCBmb3VuZC5cbiAqL1xuZnVuY3Rpb24gaW5kZXhPZkNvbnRhaW5pbmdJdGVtKGVsZW1lbnQsIHRhcmdldCkge1xuICBjb25zdCBpdGVtcyA9IGVsZW1lbnQuaXRlbXM7XG4gIGNvbnN0IGl0ZW1Db3VudCA9IGl0ZW1zID8gaXRlbXMubGVuZ3RoIDogMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtQ291bnQ7IGkrKykge1xuICAgIGxldCBpdGVtID0gaXRlbXNbaV07XG4gICAgaWYgKGl0ZW0gPT09IHRhcmdldCB8fCBpdGVtLmNvbnRhaW5zKHRhcmdldCkpIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG4iLCIvKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIENvbXBvc2FibGUuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB0byBtYWtlIGEgY2xhc3MgbW9yZSBlYXNpbHkgY29tcG9zYWJsZSB3aXRoIG90aGVyIG1peGlucy5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBjb250cmlidXRlcyBhIGBjb21wb3NlYCBtZXRob2QgdGhhdCBhcHBsaWVzIGEgc2V0IG9mIG1peGluXG4gICAqIGZ1bmN0aW9ucyBhbmQgcmV0dXJucyB0aGUgcmVzdWx0aW5nIG5ldyBjbGFzcy4gVGhpcyBzdWdhciBjYW4gbWFrZSB0aGVcbiAgICogYXBwbGljYXRpb24gb2YgbWFueSBtaXhpbnMgYXQgb25jZSBlYXNpZXIgdG8gcmVhZC5cbiAgICovXG4gIGNsYXNzIENvbXBvc2FibGUgZXh0ZW5kcyBiYXNlIHtcblxuICAgIC8qKlxuICAgICAqIEFwcGx5IGEgc2V0IG9mIG1peGluIGZ1bmN0aW9ucyBvciBtaXhpbiBvYmplY3RzIHRvIHRoZSBwcmVzZW50IGNsYXNzIGFuZFxuICAgICAqIHJldHVybiB0aGUgbmV3IGNsYXNzLlxuICAgICAqXG4gICAgICogSW5zdGVhZCBvZiB3cml0aW5nOlxuICAgICAqXG4gICAgICogICAgIGxldCBNeUNsYXNzID0gTWl4aW4xKE1peGluMihNaXhpbjMoTWl4aW40KE1peGluNShCYXNlQ2xhc3MpKSkpKTtcbiAgICAgKlxuICAgICAqIFlvdSBjYW4gd3JpdGU6XG4gICAgICpcbiAgICAgKiAgICAgbGV0IE15Q2xhc3MgPSBDb21wb3NhYmxlTWl4aW4oQmFzZUNsYXNzKS5jb21wb3NlKFxuICAgICAqICAgICAgIE1peGluMSxcbiAgICAgKiAgICAgICBNaXhpbjIsXG4gICAgICogICAgICAgTWl4aW4zLFxuICAgICAqICAgICAgIE1peGluNCxcbiAgICAgKiAgICAgICBNaXhpbjVcbiAgICAgKiAgICAgKTtcbiAgICAgKlxuICAgICAqIFRoaXMgZnVuY3Rpb24gY2FuIGFsc28gdGFrZSBtaXhpbiBvYmplY3RzLiBBIG1peGluIG9iamVjdCBpcyBqdXN0IGFcbiAgICAgKiBzaG9ydGhhbmQgZm9yIGEgbWl4aW4gZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGEgbmV3IHN1YmNsYXNzIHdpdGggdGhlIGdpdmVuXG4gICAgICogbWVtYmVycy4gVGhlIG1peGluIG9iamVjdCdzIG1lbWJlcnMgYXJlICpub3QqIGNvcGllZCBkaXJlY3RseSBvbnRvIHRoZVxuICAgICAqIHByb3RvdHlwZSBvZiB0aGUgYmFzZSBjbGFzcywgYXMgd2l0aCB0cmFkaXRpb25hbCBtaXhpbnMuXG4gICAgICpcbiAgICAgKiBJbiBhZGRpdGlvbiB0byBwcm92aWRpbmcgc3ludGFjdGljIHN1Z2FyLCB0aGlzIG1peGluIGNhbiBiZSB1c2VkIHRvXG4gICAgICogZGVmaW5lIGEgY2xhc3MgaW4gRVM1LCB3aGljaCBsYWNrcyBFUzYncyBgY2xhc3NgIGtleXdvcmQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gey4uLm1peGluc30gbWl4aW5zIC0gQSBzZXQgb2YgbWl4aW4gZnVuY3Rpb25zIG9yIG9iamVjdHMgdG8gYXBwbHkuXG4gICAgICovXG4gICAgc3RhdGljIGNvbXBvc2UoLi4ubWl4aW5zKSB7XG4gICAgICAvLyBXZSBjcmVhdGUgYSBuZXcgc3ViY2xhc3MgZm9yIGVhY2ggbWl4aW4gaW4gdHVybi4gVGhlIHJlc3VsdCBiZWNvbWVzXG4gICAgICAvLyB0aGUgYmFzZSBjbGFzcyBleHRlbmRlZCBieSBhbnkgc3Vic2VxdWVudCBtaXhpbnMuIEl0IHR1cm5zIG91dCB0aGF0XG4gICAgICAvLyB3ZSBjYW4gdXNlIEFycmF5LnJlZHVjZSgpIHRvIGNvbmNpc2VseSBleHByZXNzIHRoaXMsIHVzaW5nIHRoZSBjdXJyZW50XG4gICAgICAvLyBvYmplY3QgYXMgdGhlIHNlZWQgZm9yIHJlZHVjZSgpLlxuICAgICAgcmV0dXJuIG1peGlucy5yZWR1Y2UoY29tcG9zZUNsYXNzLCB0aGlzKTtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBDb21wb3NhYmxlO1xufTtcblxuXG4vLyBQcm9wZXJ0aWVzIGRlZmluZWQgYnkgT2JqZWN0IHRoYXQgd2UgZG9uJ3Qgd2FudCB0byBtaXhpbi5cbmNvbnN0IE5PTl9NSVhBQkxFX09CSkVDVF9QUk9QRVJUSUVTID0gW1xuICAnY29uc3RydWN0b3InXG5dO1xuXG4vKlxuICogQXBwbHkgdGhlIG1peGluIHRvIHRoZSBnaXZlbiBiYXNlIGNsYXNzIHRvIHJldHVybiBhIG5ldyBjbGFzcy5cbiAqIFRoZSBtaXhpbiBjYW4gZWl0aGVyIGJlIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBtb2RpZmllZCBjbGFzcywgb3IgYVxuICogcGxhaW4gb2JqZWN0IHdob3NlIG1lbWJlcnMgd2lsbCBiZSBjb3BpZWQgdG8gdGhlIG5ldyBjbGFzcycgcHJvdG90eXBlLlxuICovXG5mdW5jdGlvbiBjb21wb3NlQ2xhc3MoYmFzZSwgbWl4aW4pIHtcbiAgaWYgKHR5cGVvZiBtaXhpbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIE1peGluIGZ1bmN0aW9uXG4gICAgcmV0dXJuIG1peGluKGJhc2UpO1xuICB9IGVsc2Uge1xuICAgIC8vIE1peGluIG9iamVjdFxuICAgIGNsYXNzIFN1YmNsYXNzIGV4dGVuZHMgYmFzZSB7fVxuICAgIGNvcHlPd25Qcm9wZXJ0aWVzKG1peGluLCBTdWJjbGFzcy5wcm90b3R5cGUsIE5PTl9NSVhBQkxFX09CSkVDVF9QUk9QRVJUSUVTKTtcbiAgICByZXR1cm4gU3ViY2xhc3M7XG4gIH1cbn1cblxuXG4vKlxuICogQ29weSB0aGUgZ2l2ZW4gcHJvcGVydGllcy9tZXRob2RzIHRvIHRoZSB0YXJnZXQuXG4gKiBSZXR1cm4gdGhlIHVwZGF0ZWQgdGFyZ2V0LlxuICovXG5mdW5jdGlvbiBjb3B5T3duUHJvcGVydGllcyhzb3VyY2UsIHRhcmdldCwgaWdub3JlUHJvcGVydHlOYW1lcyA9IFtdKSB7XG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZSkuZm9yRWFjaChuYW1lID0+IHtcbiAgICBpZiAoaWdub3JlUHJvcGVydHlOYW1lcy5pbmRleE9mKG5hbWUpIDwgMCkge1xuICAgICAgY29uc3QgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBuYW1lKTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB0YXJnZXQ7XG59XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4vY3JlYXRlU3ltYm9sJztcbmltcG9ydCB0b2dnbGVDbGFzcyBmcm9tICcuL3RvZ2dsZUNsYXNzJztcbmltcG9ydCBzeW1ib2xzIGZyb20gJy4vc3ltYm9scyc7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IGl0ZW1zU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdpdGVtcycpO1xuY29uc3QgaXRlbUluaXRpYWxpemVkU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdpdGVtSW5pdGlhbGl6ZWQnKTtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIENvbnRlbnRJdGVtcy4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIG1hcHMgY29udGVudCBzZW1hbnRpY3MgKGVsZW1lbnRzKSB0byBsaXN0IGl0ZW0gc2VtYW50aWNzLlxuICAgKlxuICAgKiBJdGVtcyBkaWZmZXIgZnJvbSBlbGVtZW50IGNvbnRlbnRzIGluIHNldmVyYWwgd2F5czpcbiAgICpcbiAgICogKiBUaGV5IGFyZSBvZnRlbiByZWZlcmVuY2VkIHZpYSBpbmRleC5cbiAgICogKiBUaGV5IG1heSBoYXZlIGEgc2VsZWN0aW9uIHN0YXRlLlxuICAgKiAqIEl0J3MgY29tbW9uIHRvIGRvIHdvcmsgdG8gaW5pdGlhbGl6ZSB0aGUgYXBwZWFyYW5jZSBvciBzdGF0ZSBvZiBhIG5ld1xuICAgKiAgIGl0ZW0uXG4gICAqICogQXV4aWxpYXJ5IGludmlzaWJsZSBjaGlsZCBlbGVtZW50cyBhcmUgZmlsdGVyZWQgb3V0IGFuZCBub3QgY291bnRlZCBhc1xuICAgKiAgIGl0ZW1zLiBBdXhpbGlhcnkgZWxlbWVudHMgaW5jbHVkZSBsaW5rLCBzY3JpcHQsIHN0eWxlLCBhbmQgdGVtcGxhdGVcbiAgICogICBlbGVtZW50cy4gVGhpcyBmaWx0ZXJpbmcgZW5zdXJlcyB0aGF0IHRob3NlIGF1eGlsaWFyeSBlbGVtZW50cyBjYW4gYmVcbiAgICogICB1c2VkIGluIG1hcmt1cCBpbnNpZGUgb2YgYSBsaXN0IHdpdGhvdXQgYmVpbmcgdHJlYXRlZCBhcyBsaXN0IGl0ZW1zLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGV4cGVjdHMgYSBjb21wb25lbnQgdG8gcHJvdmlkZSBhIGBjb250ZW50YCBwcm9wZXJ0eSByZXR1cm5pbmcgYVxuICAgKiByYXcgc2V0IG9mIGVsZW1lbnRzLiBZb3UgY2FuIHByb3ZpZGUgdGhhdCB5b3Vyc2VsZiwgb3IgdXNlXG4gICAqIFtEaXN0cmlidXRlZENoaWxkcmVuQ29udGVudE1peGluXShEaXN0cmlidXRlZENoaWxkcmVuQ29udGVudE1peGluLm1kKS5cbiAgICpcbiAgICogVGhlIG1vc3QgY29tbW9ubHkgcmVmZXJlbmNlZCBwcm9wZXJ0eSBkZWZpbmVkIGJ5IHRoaXMgbWl4aW4gaXMgdGhlIGBpdGVtc2BcbiAgICogcHJvcGVydHkuIFRvIGF2b2lkIGhhdmluZyB0byBkbyB3b3JrIGVhY2ggdGltZSB0aGF0IHByb3BlcnR5IGlzIHJlcXVlc3RlZCxcbiAgICogdGhpcyBtaXhpbiBzdXBwb3J0cyBhbiBvcHRpbWl6ZWQgbW9kZS4gSWYgeW91IGludm9rZSB0aGUgYGNvbnRlbnRDaGFuZ2VkYFxuICAgKiBtZXRob2Qgd2hlbiB0aGUgc2V0IG9mIGl0ZW1zIGNoYW5nZXMsIHRoZSBtaXhpbiBjb25jbHVkZXMgdGhhdCB5b3UnbGwgdGFrZVxuICAgKiBjYXJlIG9mIG5vdGlmeWluZyBpdCBvZiBmdXR1cmUgY2hhbmdlcywgYW5kIHR1cm5zIG9uIHRoZSBvcHRpbWl6YXRpb24uIFdpdGhcbiAgICogdGhhdCBvbiwgdGhlIG1peGluIHNhdmVzIGEgcmVmZXJlbmNlIHRvIHRoZSBjb21wdXRlZCBzZXQgb2YgaXRlbXMsIGFuZCB3aWxsXG4gICAqIHJldHVybiB0aGF0IGltbWVkaWF0ZWx5IG9uIHN1YnNlcXVlbnQgY2FsbHMgdG8gdGhlIGBpdGVtc2AgcHJvcGVydHkuIElmIHlvdVxuICAgKiB1c2UgdGhpcyBtaXhpbiBpbiBjb25qdW5jdGlvbiB3aXRoXG4gICAqIFtEaXN0cmlidXRlZENoaWxkcmVuQ29udGVudE1peGluXShEaXN0cmlidXRlZENoaWxkcmVuQ29udGVudE1peGluLm1kKSwgdGhlXG4gICAqIGBjb250ZW50Q2hhbmdlZGAgbWV0aG9kIHdpbGwgYmUgaW52b2tlZCBmb3IgeW91IHdoZW4gdGhlIGVsZW1lbnQncyBjaGlsZHJlblxuICAgKiBjaGFuZ2UsIHR1cm5pbmcgb24gdGhlIG9wdGltaXphdGlvbiBhdXRvbWF0aWNhbGx5LlxuICAgKi9cbiAgY2xhc3MgQ29udGVudEl0ZW1zIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb250ZW50Q2hhbmdlZCgpIHtcbiAgICAgIGlmIChzdXBlci5jb250ZW50Q2hhbmdlZCkgeyBzdXBlci5jb250ZW50Q2hhbmdlZCgpOyB9XG5cbiAgICAgIC8vIFNpbmNlIHdlIGdvdCB0aGUgY29udGVudENoYW5nZWQgY2FsbCwgd2UnbGwgYXNzdW1lIHdlJ2xsIGJlIG5vdGlmaWVkIGlmXG4gICAgICAvLyB0aGUgc2V0IG9mIGl0ZW1zIGNoYW5nZXMgbGF0ZXIuIFdlIHR1cm4gb24gbWVtb2l6YXRpb24gb2YgdGhlIGl0ZW1zXG4gICAgICAvLyBwcm9wZXJ0eSBieSBzZXR0aW5nIG91ciBpbnRlcm5hbCBwcm9wZXJ0eSB0byBudWxsIChpbnN0ZWFkIG9mXG4gICAgICAvLyB1bmRlZmluZWQpLlxuICAgICAgdGhpc1tpdGVtc1N5bWJvbF0gPSBudWxsO1xuXG4gICAgICB0aGlzW3N5bWJvbHMuaXRlbXNDaGFuZ2VkXSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbmV2ZXIgYSBuZXcgaXRlbSBpcyBhZGRlZCB0byB0aGUgbGlzdC5cbiAgICAgKlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy4gWW91IGNhbiBvdmVycmlkZVxuICAgICAqIHRoaXMgdG8gcGVyZm9ybSBwZXItaXRlbSBpbml0aWFsaXphdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGl0ZW0gLSBUaGUgaXRlbSB0aGF0IHdhcyBhZGRlZC5cbiAgICAgKi9cbiAgICBbc3ltYm9scy5pdGVtQWRkZWRdKGl0ZW0pIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLml0ZW1BZGRlZF0pIHsgc3VwZXJbc3ltYm9scy5pdGVtQWRkZWRdKGl0ZW0pOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIHNlbGVjdGlvbiBzdGF0ZSBmb3IgYSBzaW5nbGUgaXRlbSBoYXMgY2hhbmdlZC5cbiAgICAgKlxuICAgICAqIEludm9rZSB0aGlzIG1ldGhvZCB0byBzaWduYWwgdGhhdCB0aGUgc2VsZWN0ZWQgc3RhdGUgb2YgdGhlIGluZGljYXRlZCBpdGVtXG4gICAgICogaGFzIGNoYW5nZWQuIEJ5IGRlZmF1bHQsIHRoaXMgYXBwbGllcyBhIGBzZWxlY3RlZGAgQ1NTIGNsYXNzIGlmIHRoZSBpdGVtXG4gICAgICogaXMgc2VsZWN0ZWQsIGFuZCByZW1vdmVkIGl0IGlmIG5vdCBzZWxlY3RlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGl0ZW0gLSBUaGUgaXRlbSB3aG9zZSBzZWxlY3Rpb24gc3RhdGUgaGFzIGNoYW5nZWQuXG4gICAgICogQHBhcmFtIHtib29sZWFufSBzZWxlY3RlZCAtIFRydWUgaWYgdGhlIGl0ZW0gaXMgc2VsZWN0ZWQsIGZhbHNlIGlmIG5vdC5cbiAgICAgKi9cbiAgICBbc3ltYm9scy5pdGVtU2VsZWN0ZWRdKGl0ZW0sIHNlbGVjdGVkKSB7XG4gICAgICBpZiAoc3VwZXJbc3ltYm9scy5pdGVtU2VsZWN0ZWRdKSB7IHN1cGVyW3N5bWJvbHMuaXRlbVNlbGVjdGVkXShpdGVtLCBzZWxlY3RlZCk7IH1cbiAgICAgIHRvZ2dsZUNsYXNzKGl0ZW0sICdzZWxlY3RlZCcsIHNlbGVjdGVkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCBzZXQgb2YgaXRlbXMgaW4gdGhlIGxpc3QuIFNlZSB0aGUgdG9wLWxldmVsIGRvY3VtZW50YXRpb24gZm9yXG4gICAgICogbWl4aW4gZm9yIGEgZGVzY3JpcHRpb24gb2YgaG93IGl0ZW1zIGRpZmZlciBmcm9tIHBsYWluIGNvbnRlbnQuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnRbXX1cbiAgICAgKi9cbiAgICBnZXQgaXRlbXMoKSB7XG4gICAgICBsZXQgaXRlbXM7XG4gICAgICBpZiAodGhpc1tpdGVtc1N5bWJvbF0gPT0gbnVsbCkge1xuICAgICAgICBpdGVtcyA9IGZpbHRlckF1eGlsaWFyeUVsZW1lbnRzKHRoaXMuY29udGVudCk7XG4gICAgICAgIC8vIE5vdGU6IHRlc3QgZm9yICplcXVhbGl0eSogd2l0aCBudWxsOyBkb24ndCB0cmVhdCB1bmRlZmluZWQgYXMgYSBtYXRjaC5cbiAgICAgICAgaWYgKHRoaXNbaXRlbXNTeW1ib2xdID09PSBudWxsKSB7XG4gICAgICAgICAgLy8gTWVtb2l6ZSB0aGUgc2V0IG9mIGl0ZW1zLlxuICAgICAgICAgIHRoaXNbaXRlbXNTeW1ib2xdID0gaXRlbXM7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFJldHVybiB0aGUgbWVtb2l6ZWQgaXRlbXMuXG4gICAgICAgIGl0ZW1zID0gdGhpc1tpdGVtc1N5bWJvbF07XG4gICAgICB9XG4gICAgICByZXR1cm4gaXRlbXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgaXMgaW52b2tlZCB3aGVuIHRoZSB1bmRlcmx5aW5nIGNvbnRlbnRzIGNoYW5nZS4gSXQgaXMgYWxzb1xuICAgICAqIGludm9rZWQgb24gY29tcG9uZW50IGluaXRpYWxpemF0aW9uIOKAkyBzaW5jZSB0aGUgaXRlbXMgaGF2ZSBcImNoYW5nZWRcIiBmcm9tXG4gICAgICogYmVpbmcgbm90aGluZy5cbiAgICAgKi9cbiAgICBbc3ltYm9scy5pdGVtc0NoYW5nZWRdKCkge1xuICAgICAgaWYgKHN1cGVyW3N5bWJvbHMuaXRlbXNDaGFuZ2VkXSkgeyBzdXBlcltzeW1ib2xzLml0ZW1zQ2hhbmdlZF0oKTsgfVxuXG4gICAgICAvLyBQZXJmb3JtIHBlci1pdGVtIGluaXRpYWxpemF0aW9uLlxuICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbCh0aGlzLml0ZW1zLCBpdGVtID0+IHtcbiAgICAgICAgaWYgKCFpdGVtW2l0ZW1Jbml0aWFsaXplZFN5bWJvbF0pIHtcbiAgICAgICAgICB0aGlzW3N5bWJvbHMuaXRlbUFkZGVkXShpdGVtKTtcbiAgICAgICAgICBpdGVtW2l0ZW1Jbml0aWFsaXplZFN5bWJvbF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnaXRlbXMtY2hhbmdlZCcpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaXJlcyB3aGVuIHRoZSBpdGVtcyBpbiB0aGUgbGlzdCBjaGFuZ2UuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgQ29udGVudEl0ZW1zXG4gICAgICogQGV2ZW50IGl0ZW1zLWNoYW5nZWRcbiAgICAgKi9cbiAgfVxuXG4gIHJldHVybiBDb250ZW50SXRlbXM7XG59O1xuXG5cbi8vIFJldHVybiB0aGUgZ2l2ZW4gZWxlbWVudHMsIGZpbHRlcmluZyBvdXQgYXV4aWxpYXJ5IGVsZW1lbnRzIHRoYXQgYXJlbid0XG4vLyB0eXBpY2FsbHkgdmlzaWJsZS4gSXRlbXMgd2hpY2ggYXJlIG5vdCBlbGVtZW50cyBhcmUgcmV0dXJuZWQgYXMgaXMuXG5mdW5jdGlvbiBmaWx0ZXJBdXhpbGlhcnlFbGVtZW50cyhpdGVtcykge1xuICBjb25zdCBhdXhpbGlhcnlUYWdzID0gW1xuICAgICdsaW5rJyxcbiAgICAnc2NyaXB0JyxcbiAgICAnc3R5bGUnLFxuICAgICd0ZW1wbGF0ZSdcbiAgXTtcbiAgcmV0dXJuIFtdLmZpbHRlci5jYWxsKGl0ZW1zLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgcmV0dXJuICFpdGVtLmxvY2FsTmFtZSB8fCBhdXhpbGlhcnlUYWdzLmluZGV4T2YoaXRlbS5sb2NhbE5hbWUpIDwgMDtcbiAgfSk7XG59XG4iLCJpbXBvcnQgc3ltYm9scyBmcm9tICcuL3N5bWJvbHMnO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggRGlyZWN0aW9uU2VsZWN0aW9uLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggbWFwcyBkaXJlY3Rpb24gc2VtYW50aWNzIChnb0xlZnQsIGdvUmlnaHQsIGV0Yy4pIHRvIHNlbGVjdGlvblxuICAgKiBzZW1hbnRpY3MgKHNlbGVjdFByZXZpb3VzLCBzZWxlY3ROZXh0LCBldGMuKS5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBjYW4gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoXG4gICAqIFtLZXlib2FyZERpcmVjdGlvbk1peGluXShLZXlib2FyZERpcmVjdGlvbk1peGluLm1kKSAod2hpY2ggbWFwcyBrZXlib2FyZFxuICAgKiBldmVudHMgdG8gZGlyZWN0aW9ucykgYW5kIGEgbWl4aW4gdGhhdCBoYW5kbGVzIHNlbGVjdGlvbiBsaWtlXG4gICAqIFtTaW5nbGVTZWxlY3Rpb25NaXhpbl0oU2luZ2xlU2VsZWN0aW9uTWl4aW4ubWQpLlxuICAgKi9cbiAgY2xhc3MgRGlyZWN0aW9uU2VsZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBbc3ltYm9scy5nb0Rvd25dKCkge1xuICAgICAgaWYgKHN1cGVyW3N5bWJvbHMuZ29Eb3duXSkgeyBzdXBlcltzeW1ib2xzLmdvRG93bl0oKTsgfVxuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0TmV4dCgpO1xuICAgIH1cblxuICAgIFtzeW1ib2xzLmdvRW5kXSgpIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLmdvRW5kXSkgeyBzdXBlcltzeW1ib2xzLmdvRW5kXSgpOyB9XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RMYXN0KCk7XG4gICAgfVxuXG4gICAgW3N5bWJvbHMuZ29MZWZ0XSgpIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLmdvTGVmdF0pIHsgc3VwZXJbc3ltYm9scy5nb0xlZnRdKCk7IH1cbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdFByZXZpb3VzKCk7XG4gICAgfVxuXG4gICAgW3N5bWJvbHMuZ29SaWdodF0oKSB7XG4gICAgICBpZiAoc3VwZXJbc3ltYm9scy5nb1JpZ2h0XSkgeyBzdXBlcltzeW1ib2xzLmdvUmlnaHRdKCk7IH1cbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdE5leHQoKTtcbiAgICB9XG5cbiAgICBbc3ltYm9scy5nb1N0YXJ0XSgpIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLmdvU3RhcnRdKSB7IHN1cGVyW3N5bWJvbHMuZ29TdGFydF0oKTsgfVxuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0Rmlyc3QoKTtcbiAgICB9XG5cbiAgICBbc3ltYm9scy5nb1VwXSgpIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLmdvVXBdKSB7IHN1cGVyW3N5bWJvbHMuZ29VcF0oKTsgfVxuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0UHJldmlvdXMoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IGltcGxlbWVudGF0aW9uLiBUaGlzIHdpbGwgdHlwaWNhbGx5IGJlIGhhbmRsZWQgYnkgb3RoZXIgbWl4aW5zLlxuICAgIGdldCBzZWxlY3RlZEZyYWN0aW9uKCkge1xuICAgICAgcmV0dXJuIHN1cGVyLnNlbGVjdGVkRnJhY3Rpb247XG4gICAgfVxuICAgIHNldCBzZWxlY3RlZEZyYWN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoJ3NlbGVjdGVkRnJhY3Rpb24nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkRnJhY3Rpb24gPSB2YWx1ZTsgfVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgaW1wbGVtZW50YXRpb24uIFRoaXMgd2lsbCB0eXBpY2FsbHkgYmUgaGFuZGxlZCBieSBvdGhlciBtaXhpbnMuXG4gICAgc2VsZWN0Rmlyc3QoKSB7XG4gICAgICBpZiAoc3VwZXIuc2VsZWN0Rmlyc3QpIHsgcmV0dXJuIHN1cGVyLnNlbGVjdEZpcnN0KCk7IH1cbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IGltcGxlbWVudGF0aW9uLiBUaGlzIHdpbGwgdHlwaWNhbGx5IGJlIGhhbmRsZWQgYnkgb3RoZXIgbWl4aW5zLlxuICAgIHNlbGVjdExhc3QoKSB7XG4gICAgICBpZiAoc3VwZXIuc2VsZWN0TGFzdCkgeyByZXR1cm4gc3VwZXIuc2VsZWN0TGFzdCgpOyB9XG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCBpbXBsZW1lbnRhdGlvbi4gVGhpcyB3aWxsIHR5cGljYWxseSBiZSBoYW5kbGVkIGJ5IG90aGVyIG1peGlucy5cbiAgICBzZWxlY3ROZXh0KCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdE5leHQpIHsgcmV0dXJuIHN1cGVyLnNlbGVjdE5leHQoKTsgfVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgaW1wbGVtZW50YXRpb24uIFRoaXMgd2lsbCB0eXBpY2FsbHkgYmUgaGFuZGxlZCBieSBvdGhlciBtaXhpbnMuXG4gICAgc2VsZWN0UHJldmlvdXMoKSB7XG4gICAgICBpZiAoc3VwZXIuc2VsZWN0UHJldmlvdXMpIHsgcmV0dXJuIHN1cGVyLnNlbGVjdFByZXZpb3VzKCk7IH1cbiAgICB9XG5cbiAgICAvLyBNYXAgZHJhZyB0cmF2ZWwgZnJhY3Rpb24gdG8gc2VsZWN0aW9uIGZyYWN0aW9uLlxuICAgIGdldCB0cmF2ZWxGcmFjdGlvbigpIHtcbiAgICAgIHJldHVybiBzdXBlci50cmF2ZWxGcmFjdGlvbjtcbiAgICB9XG4gICAgc2V0IHRyYXZlbEZyYWN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoJ3RyYXZlbEZyYWN0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci50cmF2ZWxGcmFjdGlvbiA9IHZhbHVlOyB9XG4gICAgICB0aGlzLnNlbGVjdGVkRnJhY3Rpb24gPSB2YWx1ZTtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBEaXJlY3Rpb25TZWxlY3Rpb247XG59O1xuIiwiaW1wb3J0IG1pY3JvdGFzayBmcm9tICcuL21pY3JvdGFzayc7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBEaXN0cmlidXRlZENoaWxkcmVuQ29udGVudC4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIGRlZmluZXMgYSBjb21wb25lbnQncyBjb250ZW50IGFzIGl0cyBjaGlsZHJlbiwgZXhwYW5kaW5nIGFueVxuICAgKiBub2RlcyBkaXN0cmlidXRlZCB0byB0aGUgY29tcG9uZW50J3Mgc2xvdHMuXG4gICAqXG4gICAqIFRoaXMgYWxzbyBwcm92aWRlcyBub3RpZmljYXRpb24gb2YgY2hhbmdlcyB0byBhIGNvbXBvbmVudCdzIGNvbnRlbnQuIEl0XG4gICAqIHdpbGwgaW52b2tlIGEgYGNvbnRlbnRDaGFuZ2VkYCBtZXRob2Qgd2hlbiB0aGUgY29tcG9uZW50IGlzIGZpcnN0XG4gICAqIGluc3RhbnRpYXRlZCwgYW5kIHdoZW5ldmVyIGl0cyBkaXN0cmlidXRlZCBjaGlsZHJlbiBjaGFuZ2UuIFRoaXMgaXMgYW5cbiAgICogZWFzeSB3YXkgdG8gc2F0aXNmeSB0aGUgR29sZCBTdGFuZGFyZCBjaGVja2xpc3QgaXRlbSBmb3IgbW9uaXRvcmluZ1xuICAgKiBbQ29udGVudCBDaGFuZ2VzXShodHRwczovL2dpdGh1Yi5jb20vd2ViY29tcG9uZW50cy9nb2xkLXN0YW5kYXJkL3dpa2kvQ29udGVudC1DaGFuZ2VzKS5cbiAgICpcbiAgICogRXhhbXBsZTpcbiAgICpcbiAgICogYGBgXG4gICAqIGxldCBiYXNlID0gRGlzdHJpYnV0ZWRDaGlsZHJlbkNvbnRlbnRNaXhpbihEaXN0cmlidXRlZENoaWxkcmVuTWl4aW4oSFRNTEVsZW1lbnQpKTtcbiAgICogY2xhc3MgQ291bnRpbmdFbGVtZW50IGV4dGVuZHMgYmFzZSB7XG4gICAqXG4gICAqICAgY29uc3RydWN0b3IoKSB7XG4gICAqICAgICBzdXBlcigpO1xuICAgKiAgICAgbGV0IHJvb3QgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcbiAgICogICAgIHJvb3QuaW5uZXJIVE1MID0gYDxzbG90Pjwvc2xvdD5gO1xuICAgKiAgIH1cbiAgICpcbiAgICogICBjb250ZW50Q2hhbmdlZCgpIHtcbiAgICogICAgIC8vIENvdW50IHRoZSBjb21wb25lbnQncyBjaGlsZHJlbiwgYm90aCBpbml0aWFsbHkgYW5kIHdoZW4gY2hhbmdlZC5cbiAgICogICAgIHRoaXMuY291bnQgPSB0aGlzLmRpc3RyaWJ1dGVkQ2hpbGRyZW4ubGVuZ3RoO1xuICAgKiAgIH1cbiAgICpcbiAgICogfVxuICAgKiBgYGBcbiAgICpcbiAgICogTm90ZSB0aGF0IGNvbnRlbnQgY2hhbmdlIGRldGVjdGlvbiBkZXBlbmRzIHVwb24gdGhlIGVsZW1lbnQgaGF2aW5nIGF0IGxlYXN0XG4gICAqIG9uZSBgc2xvdGAgZWxlbWVudCBpbiBpdHMgc2hhZG93IHN1YnRyZWUuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gaXMgaW50ZW5kZWQgZm9yIHVzZSB3aXRoIHRoZVxuICAgKiBbRGlzdHJpYnV0ZWRDaGlsZHJlbk1peGluXShEaXN0cmlidXRlZENoaWxkcmVuTWl4aW4ubWQpLiBTZWUgdGhhdCBtaXhpbiBmb3JcbiAgICogYSBkaXNjdXNzaW9uIG9mIGhvdyB0aGF0IHdvcmtzLiBUaGlzIERpc3RyaWJ1dGVkQ2hpbGRyZW5Db250ZW50TWl4aW5cbiAgICogcHJvdmlkZXMgYW4gZWFzeSB3YXkgb2YgZGVmaW5pbmcgdGhlIFwiY29udGVudFwiIG9mIGEgY29tcG9uZW50IGFzIHRoZVxuICAgKiBjb21wb25lbnQncyBkaXN0cmlidXRlZCBjaGlsZHJlbi4gVGhhdCBpbiB0dXJuIGxldHMgbWl4aW5zIGxpa2VcbiAgICogW0NvbnRlbnRJdGVtc01peGluXShDb250ZW50SXRlbXNNaXhpbi5tZCkgbWFuaXB1bGF0ZSB0aGUgY2hpbGRyZW4gYXMgbGlzdFxuICAgKiBpdGVtcy5cbiAgICovXG4gIGNsYXNzIERpc3RyaWJ1dGVkQ2hpbGRyZW5Db250ZW50IGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG5cbiAgICAgIGlmICh0aGlzLnNoYWRvd1Jvb3QpIHtcbiAgICAgICAgLy8gTGlzdGVuIHRvIGNoYW5nZXMgb24gYWxsIHNsb3RzLlxuICAgICAgICBjb25zdCBzbG90cyA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yQWxsKCdzbG90Jyk7XG4gICAgICAgIHNsb3RzLmZvckVhY2goc2xvdCA9PiBzbG90LmFkZEV2ZW50TGlzdGVuZXIoJ3Nsb3RjaGFuZ2UnLCBldmVudCA9PiB7XG4gICAgICAgICAgdGhpcy5jb250ZW50Q2hhbmdlZCgpO1xuICAgICAgICB9KSk7XG4gICAgICB9XG5cbiAgICAgIC8vIE1ha2UgYW4gaW5pdGlhbCBjYWxsIHRvIGNvbnRlbnRDaGFuZ2VkKCkgc28gdGhhdCB0aGUgY29tcG9uZW50IGNhbiBkb1xuICAgICAgLy8gaW5pdGlhbGl6YXRpb24gdGhhdCBpdCBub3JtYWxseSBkb2VzIHdoZW4gY29udGVudCBjaGFuZ2VzLlxuICAgICAgLy9cbiAgICAgIC8vIFRoaXMgd2lsbCBpbnZva2UgY29udGVudENoYW5nZWQoKSBoYW5kbGVycyBpbiBvdGhlciBtaXhpbnMuIEluIG9yZGVyXG4gICAgICAvLyB0aGF0IHRob3NlIG1peGlucyBoYXZlIGEgY2hhbmNlIHRvIGNvbXBsZXRlIHRoZWlyIG93biBpbml0aWFsaXphdGlvbixcbiAgICAgIC8vIHdlIGFkZCB0aGUgY29udGVudENoYW5nZWQoKSBjYWxsIHRvIHRoZSBtaWNyb3Rhc2sgcXVldWUuXG4gICAgICBtaWNyb3Rhc2soKCkgPT4gdGhpcy5jb250ZW50Q2hhbmdlZCgpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIGNvbnRlbnRzIG9mIHRoZSBjb21wb25lbnQgKGluY2x1ZGluZyBkaXN0cmlidXRlZFxuICAgICAqIGNoaWxkcmVuKSBoYXZlIGNoYW5nZWQuXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBhbHNvIGludm9rZWQgd2hlbiBhIGNvbXBvbmVudCBpcyBmaXJzdCBpbnN0YW50aWF0ZWQ7IHRoZVxuICAgICAqIGNvbnRlbnRzIGhhdmUgZXNzZW50aWFsbHkgXCJjaGFuZ2VkXCIgZnJvbSBiZWluZyBub3RoaW5nLiBUaGlzIGFsbG93cyB0aGVcbiAgICAgKiBjb21wb25lbnQgdG8gcGVyZm9ybSBpbml0aWFsIHByb2Nlc3Npbmcgb2YgaXRzIGNoaWxkcmVuLlxuICAgICAqL1xuICAgIGNvbnRlbnRDaGFuZ2VkKCkge1xuICAgICAgaWYgKHN1cGVyLmNvbnRlbnRDaGFuZ2VkKSB7IHN1cGVyLmNvbnRlbnRDaGFuZ2VkKCk7IH1cbiAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdjb250ZW50LWNoYW5nZWQnKTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbnRlbnQgb2YgdGhpcyBjb21wb25lbnQsIGRlZmluZWQgdG8gYmUgdGhlIGZsYXR0ZW5lZCBhcnJheSBvZlxuICAgICAqIGNoaWxkcmVuIGRpc3RyaWJ1dGVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnRbXX1cbiAgICAgKi9cbiAgICBnZXQgY29udGVudCgpIHtcbiAgICAgIGNvbnN0IGRpc3RyaWJ1dGVkQ2hpbGRyZW4gPSB0aGlzLmRpc3RyaWJ1dGVkQ2hpbGRyZW47XG4gICAgICBpZiAodHlwZW9mIGRpc3RyaWJ1dGVkQ2hpbGRyZW4gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgRGlzdHJpYnV0ZWRDaGlsZHJlbkNvbnRlbnRNaXhpbiBleHBlY3RzIHRoZSBjb21wb25lbnQgdG8gZGVmaW5lIGEgXCJkaXN0cmlidXRlZENoaWxkcmVuXCIgcHJvcGVydHkuYCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGlzdHJpYnV0ZWRDaGlsZHJlbjtcbiAgICB9XG4gICAgc2V0IGNvbnRlbnQodmFsdWUpIHtcbiAgICAgIGlmICgnY29udGVudCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuY29udGVudCA9IHZhbHVlOyB9XG4gICAgICAvLyBUT0RPOiBTZXQgdGhlIGNoaWxkcmVuIHRvIHRoZSBnaXZlbiB2YWx1ZSAod2hpY2ggc2hvdWxkIGJlIGFuIGFycmF5IG9mXG4gICAgICAvLyBlbGVtZW50cyk/XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBldmVudCBpcyByYWlzZWQgd2hlbiB0aGUgY29tcG9uZW50J3MgY29udGVudHMgKGluY2x1ZGluZyBkaXN0cmlidXRlZFxuICAgICAqIGNoaWxkcmVuKSBoYXZlIGNoYW5nZWQuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgRGlzdHJpYnV0ZWRDaGlsZHJlbkNvbnRlbnRcbiAgICAgKiBAZXZlbnQgY29udGVudC1jaGFuZ2VkXG4gICAgICovXG4gIH1cblxuICByZXR1cm4gRGlzdHJpYnV0ZWRDaGlsZHJlbkNvbnRlbnQ7XG59O1xuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBEaXN0cmlidXRlZENoaWxkcmVuLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggZGVmaW5lcyBoZWxwZXJzIGZvciBhY2Nlc3NpbmcgYSBjb21wb25lbnQncyBkaXN0cmlidXRlZFxuICAgKiBjaGlsZHJlbiBhcyBhIGZsYXR0ZW5lZCBhcnJheSBvciBzdHJpbmcuXG4gICAqXG4gICAqIFRoZSBzdGFuZGFyZCBET00gQVBJIHByb3ZpZGVzIHNldmVyYWwgd2F5cyBvZiBhY2Nlc3NpbmcgY2hpbGQgY29udGVudDpcbiAgICogYGNoaWxkcmVuYCwgYGNoaWxkTm9kZXNgLCBhbmQgYHRleHRDb250ZW50YC4gTm9uZSBvZiB0aGVzZSBmdW5jdGlvbnMgYXJlXG4gICAqIFNoYWRvdyBET00gYXdhcmUuIFRoaXMgbWl4aW4gZGVmaW5lcyB2YXJpYXRpb25zIG9mIHRob3NlIGZ1bmN0aW9ucyB0aGF0XG4gICAqICphcmUqIFNoYWRvdyBET00gYXdhcmUuXG4gICAqXG4gICAqIEV4YW1wbGU6IHlvdSBjcmVhdGUgYSBjb21wb25lbnQgYDxjb3VudC1jaGlsZHJlbj5gIHRoYXQgZGlzcGxheXMgYSBudW1iZXJcbiAgICogZXF1YWwgdG8gdGhlIG51bWJlciBvZiBjaGlsZHJlbiBwbGFjZWQgaW5zaWRlIHRoYXQgY29tcG9uZW50LiBJZiBzb21lb25lXG4gICAqIGluc3RhbnRpYXRlcyB5b3VyIGNvbXBvbmVudCBsaWtlOlxuICAgKlxuICAgKiAgICAgPGNvdW50LWNoaWxkcmVuPlxuICAgKiAgICAgICA8ZGl2PjwvZGl2PlxuICAgKiAgICAgICA8ZGl2PjwvZGl2PlxuICAgKiAgICAgICA8ZGl2PjwvZGl2PlxuICAgKiAgICAgPC9jb3VudC1jaGlsZHJlbj5cbiAgICpcbiAgICogVGhlbiB0aGUgY29tcG9uZW50IHNob3VsZCBzaG93IFwiM1wiLCBiZWNhdXNlIHRoZXJlIGFyZSB0aHJlZSBjaGlsZHJlbi4gVG9cbiAgICogY2FsY3VsYXRlIHRoZSBudW1iZXIgb2YgY2hpbGRyZW4sIHRoZSBjb21wb25lbnQgY2FuIGp1c3QgY2FsY3VsYXRlXG4gICAqIGB0aGlzLmNoaWxkcmVuLmxlbmd0aGAuIEhvd2V2ZXIsIHN1cHBvc2Ugc29tZW9uZSBpbnN0YW50aWF0ZXMgeW91clxuICAgKiBjb21wb25lbnQgaW5zaWRlIG9uZSBvZiB0aGVpciBvd24gY29tcG9uZW50cywgYW5kIHB1dHMgYSBgPHNsb3Q+YCBlbGVtZW50XG4gICAqIGluc2lkZSB5b3VyIGNvbXBvbmVudDpcbiAgICpcbiAgICogICAgIDxjb3VudC1jaGlsZHJlbj5cbiAgICogICAgICAgPHNsb3Q+PC9zbG90PlxuICAgKiAgICAgPC9jb3VudC1jaGlsZHJlbj5cbiAgICpcbiAgICogSWYgeW91ciBjb21wb25lbnQgb25seSBsb29rcyBhdCBgdGhpcy5jaGlsZHJlbmAsIGl0IHdpbGwgYWx3YXlzIHNlZSBleGFjdGx5XG4gICAqIG9uZSBjaGlsZCDigJTCoHRoZSBgPHNsb3Q+YCBlbGVtZW50LiBCdXQgdGhlIHVzZXIgbG9va2luZyBhdCB0aGUgcGFnZSB3aWxsXG4gICAqICpzZWUqIGFueSBub2RlcyBkaXN0cmlidXRlZCB0byB0aGF0IHNsb3QuIFRvIG1hdGNoIHdoYXQgdGhlIHVzZXIgc2VlcywgeW91clxuICAgKiBjb21wb25lbnQgc2hvdWxkIGV4cGFuZCBhbnkgYDxzbG90PmAgZWxlbWVudHMgaXQgY29udGFpbnMuXG4gICAqXG4gICAqIFRoYXQgaXMgdGhlIHByb2JsZW0gdGhpcyBtaXhpbiBzb2x2ZXMuIEFmdGVyIGFwcGx5aW5nIHRoaXMgbWl4aW4sIHlvdXJcbiAgICogY29tcG9uZW50IGNvZGUgaGFzIGFjY2VzcyB0byBgdGhpcy5kaXN0cmlidXRlZENoaWxkcmVuYCwgd2hvc2UgYGxlbmd0aGBcbiAgICogd2lsbCByZXR1cm4gdGhlIHRvdGFsIG51bWJlciBvZiBhbGwgY2hpbGRyZW4gZGlzdHJpYnV0ZWQgdG8geW91ciBjb21wb25lbnRcbiAgICogaW4gdGhlIGNvbXBvc2VkIHRyZWUuXG4gICAqXG4gICAqIE5vdGU6IFRoZSBsYXRlc3QgQ3VzdG9tIEVsZW1lbnRzIEFQSSBkZXNpZ24gY2FsbHMgZm9yIGEgbmV3IGZ1bmN0aW9uLFxuICAgKiBgZ2V0QXNzaWduZWROb2Rlc2AgdGhhdCB0YWtlcyBhbiBvcHRpb25hbCBgZGVlcGAgcGFyYW1ldGVyLCB0aGF0IHdpbGwgc29sdmVcbiAgICogdGhpcyBwcm9ibGVtIGF0IHRoZSBBUEkgbGV2ZWwuXG4gICAqL1xuICBjbGFzcyBEaXN0cmlidXRlZENoaWxkcmVuIGV4dGVuZHMgYmFzZSB7XG5cbiAgICAvKipcbiAgICAgKiBBbiBpbi1vcmRlciBjb2xsZWN0aW9uIG9mIGRpc3RyaWJ1dGVkIGNoaWxkcmVuLCBleHBhbmRpbmcgYW55IHNsb3RcbiAgICAgKiBlbGVtZW50cy4gTGlrZSB0aGUgc3RhbmRhcmQgY2hpbGRyZW4gcHJvcGVydHksIHRoaXMgc2tpcHMgdGV4dCBub2Rlcy5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudFtdfVxuICAgICAqL1xuICAgIGdldCBkaXN0cmlidXRlZENoaWxkcmVuKCkge1xuICAgICAgcmV0dXJuIGV4cGFuZENvbnRlbnRFbGVtZW50cyh0aGlzLmNoaWxkcmVuLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQW4gaW4tb3JkZXIgY29sbGVjdGlvbiBvZiBkaXN0cmlidXRlZCBjaGlsZCBub2RlcywgZXhwYW5kaW5nIGFueSBzbG90XG4gICAgICogZWxlbWVudHMuIExpa2UgdGhlIHN0YW5kYXJkIGNoaWxkTm9kZXMgcHJvcGVydHksIHRoaXMgaW5jbHVkZXMgdGV4dFxuICAgICAqIG5vZGVzLlxuICAgICAqXG4gICAgICogQHR5cGUge05vZGVbXX1cbiAgICAgKi9cbiAgICBnZXQgZGlzdHJpYnV0ZWRDaGlsZE5vZGVzKCkge1xuICAgICAgcmV0dXJuIGV4cGFuZENvbnRlbnRFbGVtZW50cyh0aGlzLmNoaWxkTm9kZXMsIHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBjb25jYXRlbmF0ZWQgdGV4dCBjb250ZW50IG9mIGFsbCBkaXN0cmlidXRlZCBjaGlsZCBub2RlcywgZXhwYW5kaW5nXG4gICAgICogYW55IHNsb3QgZWxlbWVudHMuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldCBkaXN0cmlidXRlZFRleHRDb250ZW50KCkge1xuICAgICAgY29uc3Qgc3RyaW5ncyA9IHRoaXMuZGlzdHJpYnV0ZWRDaGlsZE5vZGVzLm1hcChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgICByZXR1cm4gY2hpbGQudGV4dENvbnRlbnQ7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBzdHJpbmdzLmpvaW4oJycpO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIERpc3RyaWJ1dGVkQ2hpbGRyZW47XG59O1xuXG5cbi8qXG4gKiBHaXZlbiBhIGFycmF5IG9mIG5vZGVzLCByZXR1cm4gYSBuZXcgYXJyYXkgd2l0aCBhbnkgY29udGVudCBlbGVtZW50cyBleHBhbmRlZFxuICogdG8gdGhlIG5vZGVzIGRpc3RyaWJ1dGVkIHRvIHRoYXQgY29udGVudCBlbGVtZW50LiBUaGlzIHJ1bGUgaXMgYXBwbGllZFxuICogcmVjdXJzaXZlbHkuXG4gKlxuICogSWYgaW5jbHVkZVRleHROb2RlcyBpcyB0cnVlLCB0ZXh0IG5vZGVzIHdpbGwgYmUgaW5jbHVkZWQsIGFzIGluIHRoZVxuICogc3RhbmRhcmQgY2hpbGROb2RlcyBwcm9wZXJ0eTsgYnkgZGVmYXVsdCwgdGhpcyBza2lwcyB0ZXh0IG5vZGVzLCBsaWtlIHRoZVxuICogc3RhbmRhcmQgY2hpbGRyZW4gcHJvcGVydHkuXG4gKi9cbmZ1bmN0aW9uIGV4cGFuZENvbnRlbnRFbGVtZW50cyhub2RlcywgaW5jbHVkZVRleHROb2Rlcykge1xuICBjb25zdCBleHBhbmRlZCA9IEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChub2Rlcywgbm9kZSA9PiB7XG4gICAgLy8gV2Ugd2FudCB0byBzZWUgaWYgdGhlIG5vZGUgaXMgYW4gaW5zdGFuY2VvZiBIVE1MU2xvdEVMZW1lbnQsIGJ1dFxuICAgIC8vIHRoYXQgY2xhc3Mgd29uJ3QgZXhpc3QgaWYgdGhlIGJyb3dzZXIgdGhhdCBkb2Vzbid0IHN1cHBvcnQgbmF0aXZlXG4gICAgLy8gU2hhZG93IERPTSBhbmQgaWYgdGhlIFNoYWRvdyBET00gcG9seWZpbGwgaGFzbid0IGJlZW4gbG9hZGVkLiBJbnN0ZWFkLFxuICAgIC8vIHdlIGRvIGEgc2ltcGxpc3RpYyBjaGVjayB0byBzZWUgaWYgdGhlIHRhZyBuYW1lIGlzIFwic2xvdFwiLlxuICAgIGNvbnN0IGlzU2xvdCA9IHR5cGVvZiBIVE1MU2xvdEVsZW1lbnQgIT09ICd1bmRlZmluZWQnID9cbiAgICAgIG5vZGUgaW5zdGFuY2VvZiBIVE1MU2xvdEVsZW1lbnQgOlxuICAgICAgbm9kZS5sb2NhbE5hbWUgPT09ICdzbG90JztcbiAgICBpZiAoaXNTbG90KSB7XG4gICAgICAvLyBVc2UgdGhlIG5vZGVzIGFzc2lnbmVkIHRvIHRoaXMgbm9kZSBpbnN0ZWFkLlxuICAgICAgY29uc3QgYXNzaWduZWROb2RlcyA9IG5vZGUuYXNzaWduZWROb2Rlcyh7IGZsYXR0ZW46IHRydWUgfSk7XG4gICAgICByZXR1cm4gYXNzaWduZWROb2RlcyA/XG4gICAgICAgIGV4cGFuZENvbnRlbnRFbGVtZW50cyhhc3NpZ25lZE5vZGVzLCBpbmNsdWRlVGV4dE5vZGVzKSA6XG4gICAgICAgIFtdO1xuICAgIH0gZWxzZSBpZiAobm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAvLyBQbGFpbiBlbGVtZW50OyB1c2UgYXMgaXMuXG4gICAgICByZXR1cm4gW25vZGVdO1xuICAgIH0gZWxzZSBpZiAobm9kZSBpbnN0YW5jZW9mIFRleHQgJiYgaW5jbHVkZVRleHROb2Rlcykge1xuICAgICAgLy8gVGV4dCBub2RlLlxuICAgICAgcmV0dXJuIFtub2RlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ29tbWVudCwgcHJvY2Vzc2luZyBpbnN0cnVjdGlvbiwgZXRjLjsgc2tpcC5cbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH0pO1xuICBjb25zdCBmbGF0dGVuZWQgPSBbXS5jb25jYXQoLi4uZXhwYW5kZWQpO1xuICByZXR1cm4gZmxhdHRlbmVkO1xufVxuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuL2NyZWF0ZVN5bWJvbCc7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IHNlbGVjdGVkRnJhY3Rpb25TeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3NlbGVjdGVkRnJhY3Rpb24nKTtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIEZyYWN0aW9uYWxTZWxlY3Rpb24uICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXhpbihiYXNlKSB7XG5cbiAgLyoqXG4gICAqIEFkZHMgc3VwcG9ydCBmb3IgZnJhY3Rpb25hbCBzZWxlY3Rpb246IHRyZWF0aW5nIGEgc2VsZWN0aW9uIGFzIGEgcmVhbFxuICAgKiBudW1iZXIgdGhhdCBjb21iaW5lcyBhbiBpbnRlZ2VyIHBvcnRpb24gKGFuIGluZGV4IGludG8gYSBsaXN0KSwgYW5kIGFcbiAgICogZnJhY3Rpb24gKGluZGljYXRpbmcgaG93IGZhciBvZiB0aGUgd2F5IHdlIGFyZSB0byB0aGUgbmV4dCBvciBwcmV2aW91c1xuICAgKiBpdGVtKS5cbiAgICpcbiAgICogVGhpcyBpcyB1c2VmdWwgaW4gY29tcG9uZW50cyB0aGF0IHN1cHBvcnQgaW5jcmVtZW50YWwgb3BlcmF0aW9ucyBkdXJpbmdcbiAgICogZHJhZ2dpbmcgYW5kIHN3aXBpbmcuIEV4YW1wbGU6IGEgY2Fyb3VzZWwgY29tcG9uZW50IGhhcyBzZXZlcmFsIGl0ZW1zLCBhbmQgdGhlXG4gICAqIGN1cnJlbnRseSBzZWxlY3RlZCBpdGVtIGlzIGl0ZW0gMy4gVGhlIHVzZXIgYmVnaW5zIHN3aXBpbmcgdG8gdGhlIGxlZnQsXG4gICAqIG1vdmluZyB0b3dhcmRzIHNlbGVjdGluZyBpdGVtIDQuIEhhbGZ3YXkgdGhyb3VnaCB0aGlzIG9wZXJhdGlvbiwgdGhlXG4gICAqIGZyYWN0aW9uYWwgc2VsZWN0aW9uIHZhbHVlIGlzIDMuNS5cbiAgICpcbiAgICogVGhpcyB2YWx1ZSBwZXJtaXRzIGNvbW11bmljYXRpb24gYmV0d2VlbiBtaXhpbnMgbGlrZVxuICAgKiBbU3dpcGVEaXJlY3Rpb25NaXhpbl0oLi9Td2lwZURpcmVjdGlvbk1peGluLm1kKSBhbmRcbiAgICogW1RyYWNrcGFkRGlyZWN0aW9uTWl4aW5dKC4vVHJhY2twYWREaXJlY3Rpb25NaXhpbi5tZCksIHdoaWNoIGdlbmVyYXRlXG4gICAqIGZyYWN0aW9uYWwgc2VsZWN0aW9uIHZhbHVlcywgYW5kIG1peGlucyBsaWtlXG4gICAqIFtTZWxlY3Rpb25BbmltYXRpb25NaXhpbl0oLi9TZWxlY3Rpb25BbmltYXRpb25NaXhpbi5tZCksIHdoaWNoIGNhbiByZW5kZXJcbiAgICogc2VsZWN0aW9uIGF0IGEgZnJhY3Rpb25hbCB2YWx1ZS5cbiAgICovXG4gIGNsYXNzIEZyYWN0aW9uYWxTZWxlY3Rpb24gZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKSB7IHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7IH1cbiAgICAgIHRoaXMuc2VsZWN0ZWRGcmFjdGlvbiA9IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSBmcmFjdGlvbmFsIHZhbHVlIGluZGljYXRpbmcgaG93IGZhciB0aGUgdXNlciBoYXMgY3VycmVudGx5IGFkdmFuY2VkIHRvXG4gICAgICogdGhlIG5leHQvcHJldmlvdXMgaXRlbS4gRS5nLiwgYSBgc2VsZWN0ZWRGcmFjdGlvbmAgb2YgMy41IGluZGljYXRlcyB0aGVcbiAgICAgKiB1c2VyIGlzIGhhbGZ3YXkgYmV0d2VlbiBpdGVtcyAzIGFuZCA0LlxuICAgICAqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0ZWRGcmFjdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzW3NlbGVjdGVkRnJhY3Rpb25TeW1ib2xdO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0ZWRGcmFjdGlvbih2YWx1ZSkge1xuICAgICAgdGhpc1tzZWxlY3RlZEZyYWN0aW9uU3ltYm9sXSA9IHZhbHVlO1xuICAgICAgaWYgKCdzZWxlY3RlZEZyYWN0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEZyYWN0aW9uID0gdmFsdWU7IH1cbiAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdzZWxlY3RlZC1mcmFjdGlvbi1jaGFuZ2VkJyk7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIEZyYWN0aW9uYWxTZWxlY3Rpb247XG59XG5cblxubWl4aW4uaGVscGVycyA9IHtcblxuICAvKlxuICAgKiBEYW1wZW4gYSBzZWxlY3Rpb24gdGhhdCBnb2VzIHBhc3QgdGhlIGJlZ2lubmluZyBvciBlbmQgb2YgYSBsaXN0LiBUaGlzIGlzXG4gICAqIGdlbmVyYWxseSB1c2VkIHRvIHByb2R1Y2UgYSB2aXN1YWwgZWZmZWN0IG9mIHRlbnNpb24gYXMgdGhlIHVzZXIgdHJpZXMgdG9cbiAgICogZ28gZnVydGhlciBpbiBhIGRpcmVjdGlvbiB0aGF0IGhhcyBubyBtb3JlIGl0ZW1zLlxuICAgKlxuICAgKiBFeGFtcGxlOiBzdXBwb3NlIGBpdGVtQ291bnRgIGlzIDUsIGluZGljYXRpbmcgYSBsaXN0IG9mIDUgaXRlbXMuIFRoZSBpbmRleCBvZlxuICAgKiB0aGUgbGFzdCBpdGVtIGlzIDQuIElmIHRoZSBgc2VsZWN0aW9uYCBwYXJhbWV0ZXIgaXMgNC41LCB0aGUgdXNlciBpcyB0cnlpbmdcbiAgICogdG8gZ28gcGFzdCB0aGlzIGxhc3QgaXRlbS4gV2hlbiBhIGRhbXBpbmcgZnVuY3Rpb24gaXMgYXBwbGllZCwgdGhlIHJlc3VsdGluZ1xuICAgKiB2YWx1ZSB3aWxsIGJlIGxlc3MgdGhhbiA0LjUgKHRoZSBhY3R1YWwgdmFsdWUgd2lsbCBiZSA0LjI1KS4gV2hlbiB0aGlzXG4gICAqIHNlbGVjdGlvbiBzdGF0ZSBpcyByZW5kZXJlZCwgdGhlIHVzZXIgd2lsbCBzZWUgdGhhdCwgZWFjaCB1bml0IGRpc3RhbmNlIHRoZVxuICAgKiBkcmFnIHRyYXZlbHMgaGFzIGxlc3MgYW5kIGxlc3MgdmlzaWJsZSBlZmZlY3QuIFRoaXMgaXMgcGVyY2VpdmVkIGFzIHRlbnNpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzZWxlY3Rpb24gLSBBIHJlYWwgbnVtYmVyIGluZGljYXRpbmcgYSBzZWxlY3Rpb24gcG9zaXRpb25cbiAgICogQHBhcmFtIHtudW1iZXJ9IGl0ZW1Db3VudCAtIEFuIGludGVnZXIgZm9yIHRoZSBudW1iZXIgb2YgaXRlbXMgaW4gdGhlIGxpc3RcbiAgICogQHJldHVybnMge251bWJlcn0gQSByZWFsIG51bWJlciByZXByZXNlbnRpbmcgdGhlIGRhbXBlZCBzZWxlY3Rpb24gdmFsdWUuXG4gICAqL1xuICBkYW1wZWRTZWxlY3Rpb24oc2VsZWN0aW9uLCBpdGVtQ291bnQpIHtcbiAgICBjb25zdCBib3VuZCA9IGl0ZW1Db3VudCAtIDE7XG4gICAgbGV0IGRhbXBlZDtcbiAgICBpZiAoc2VsZWN0aW9uIDwgMCkge1xuICAgICAgLy8gVHJ5aW5nIHRvIGdvIHBhc3QgYmVnaW5uaW5nIG9mIGxpc3QuIEFwcGx5IHRlbnNpb24gZnJvbSB0aGUgbGVmdCBlZGdlLlxuICAgICAgZGFtcGVkID0gLW1peGluLmhlbHBlcnMuZGFtcGluZygtc2VsZWN0aW9uKTtcbiAgICB9IGVsc2UgaWYgKHNlbGVjdGlvbiA+PSBib3VuZCkge1xuICAgICAgLy8gVHJ5aW5nIHRvIGdvIHBhc3QgZW5kIG9mIGxpc3QuIEFwcGx5IHRlbnNpb24gZnJvbSB0aGUgcmlnaHQgZWRnZS5cbiAgICAgIGRhbXBlZCA9IGJvdW5kICsgbWl4aW4uaGVscGVycy5kYW1waW5nKHNlbGVjdGlvbiAtIGJvdW5kKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTm8gZGFtcGluZyByZXF1aXJlZC5cbiAgICAgIGRhbXBlZCA9IHNlbGVjdGlvbjtcbiAgICB9XG4gICAgcmV0dXJuIGRhbXBlZDtcbiAgfSxcblxuICAvKlxuICAgKiBDYWxjdWxhdGUgZGFtcGluZyBhcyBhIGZ1bmN0aW9uIG9mIHRoZSBkaXN0YW5jZSBwYXN0IHRoZSBtaW5pbXVtL21heGltdW1cbiAgICogdmFsdWVzLlxuICAgKlxuICAgKiBXZSB3YW50IHRvIGFzeW1wdG90aWNhbGx5IGFwcHJvYWNoIGFuIGFic29sdXRlIG1pbmltdW0gb2YgMSB1bml0XG4gICAqIGJlbG93L2Fib3ZlIHRoZSBhY3R1YWwgbWluaW11bS9tYXhpbXVtLiBUaGlzIHJlcXVpcmVzIGNhbGN1bGF0aW5nIGFcbiAgICogaHlwZXJib2xpYyBmdW5jdGlvbi5cbiAgICpcbiAgICogU2VlIGh0dHA6Ly93d3cud29sZnJhbWFscGhhLmNvbS9pbnB1dC8/aT15KyUzRCstMSUyRiUyOHglMkIxJTI5KyUyQisxXG4gICAqIGZvciB0aGUgb25lIHdlIHVzZS4gVGhlIG9ubHkgcG9ydGlvbiBvZiB0aGF0IGZ1bmN0aW9uIHdlIGNhcmUgYWJvdXQgaXMgd2hlblxuICAgKiB4IGlzIHplcm8gb3IgZ3JlYXRlci4gQW4gaW1wb3J0YW50IGNvbnNpZGVyYXRpb24gaXMgdGhhdCB0aGUgY3VydmUgYmVcbiAgICogdGFuZ2VudCB0byB0aGUgZGlhZ29uYWwgbGluZSB4PXkgYXQgKDAsIDApLiBUaGlzIGVuc3VyZXMgc21vb3RoIGNvbnRpbnVpdHlcbiAgICogd2l0aCB0aGUgbm9ybWFsIGRyYWcgYmVoYXZpb3IsIGluIHdoaWNoIHRoZSB2aXNpYmxlIHNsaWRpbmcgaXMgbGluZWFyIHdpdGhcbiAgICogdGhlIGRpc3RhbmNlIHRoZSB0b3VjaHBvaW50IGhhcyBiZWVuIGRyYWdnZWQuXG4gICAqL1xuICBkYW1waW5nKHgpIHtcbiAgICBjb25zdCB5ID0gKC0xIC8gKHggKyAxKSkgKyAxO1xuICAgIHJldHVybiB5O1xuICB9LFxuXG4gIC8qXG4gICAqIFJldHVybiB0aGUgY3VycmVudCBmcmFjdGlvbmFsIHNlbGVjdGlvbiB2YWx1ZSBmb3IgdGhlIGdpdmVuIGVsZW1lbnQuXG4gICAqXG4gICAqIFRoaXMgc2ltcGx5IGFkZHMgdGhlIGVsZW1lbnQncyBgc2VsZWN0ZWRJbmRleGAgYW5kIGBzZWxlY3RlZEZyYWN0aW9uYFxuICAgKiBwcm9wZXJ0aWVzLlxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gQW4gZWxlbWVudCB0aGF0IHN1cHBvcnRzIHNlbGVjdGlvblxuICAgKi9cbiAgZWxlbWVudFNlbGVjdGlvbihlbGVtZW50KSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRJbmRleCA9IGVsZW1lbnQuc2VsZWN0ZWRJbmRleDtcbiAgICBpZiAoc2VsZWN0ZWRJbmRleCA8IDApIHtcbiAgICAgIC8vIE5vIHNlbGVjdGlvblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzZWxlY3RlZEZyYWN0aW9uID0gZWxlbWVudC5zZWxlY3RlZEZyYWN0aW9uIHx8IDA7XG4gICAgcmV0dXJuIHNlbGVjdGVkSW5kZXggKyBzZWxlY3RlZEZyYWN0aW9uO1xuICB9LFxuXG4gIC8qXG4gICAqIEJyZWFrcyBhIGZyYWN0aW9uYWwgc2VsZWN0aW9uIGludG8gaXRzIGludGVnZXIgYW5kIGZyYWN0aW9uYWwgcGFydHMuXG4gICAqXG4gICAqIEV4YW1wbGU6IGlmIHBhc3NlZCAzLjUsIHRoaXMgcmV0dXJucyB7IGluZGV4OiAzLCBmcmFjdGlvbjogNSB9LlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2VsZWN0aW9uIOKAk8KgQSByZWFsIG51bWJlciByZXByZXNlbnRpbmcgYSBzZWxlY3Rpb24gcG9pbnRcbiAgICogQHJldHVybnMge29iamVjdH0gLSBBbiBvYmplY3Qgd2l0aCBhbiBgaW5kZXhgIHByb3BlcnR5IGhvbGRpbmcgdGhlXG4gICAqIHNlbGVjdGlvbidzIGludGVnZXIgY29tcG9uZW50LCBhbmQgYSBgZnJhY3Rpb25gIHByb3BlcnR5IGhvbGRpbmcgdGhlXG4gICAqIHNlbGVjdGlvbidzIGZyYWN0aW9uYWwgY29tcG9uZW50LlxuICAgKi9cbiAgc2VsZWN0aW9uUGFydHMoc2VsZWN0aW9uKSB7XG4gICAgLy8gU3R1cGlkIElFIGRvZXNuJ3QgaGF2ZSBNYXRoLnRydW5jLlxuICAgIC8vIGNvbnN0IGluZGV4ID0gTWF0aC50cnVuYyhzZWxlY3Rpb24pO1xuICAgIGNvbnN0IGluZGV4ID0gc2VsZWN0aW9uIDwgMCA/IE1hdGguY2VpbChzZWxlY3Rpb24pIDogTWF0aC5mbG9vcihzZWxlY3Rpb24pO1xuICAgIGNvbnN0IGZyYWN0aW9uID0gc2VsZWN0aW9uIC0gaW5kZXg7XG4gICAgcmV0dXJuIHsgaW5kZXgsIGZyYWN0aW9uIH07XG4gIH0sXG5cbiAgLypcbiAgICogUmV0dXJucyBhIGZyYWN0aW9uYWwgc2VsZWN0aW9uIHBvaW50IGFmdGVyIGFjY291bnRpbmcgZm9yIHdyYXBwaW5nLCBlbnN1cmluZ1xuICAgKiB0aGF0IHRoZSBpbnRlZ2VyIHBvcnRpb24gb2YgdGhlIHNlbGVjdGlvbiBzdGF5cyBiZXR3ZWVuIDAgYW5kIGBpdGVtQ291bnRgLTEuXG4gICAqIFRoYXQgaXMsIHRoZSBpbnRlZ2VyIHBvcnRpb24gd2lsbCBhbHdheXMgYmUgYSB2YWxpZCBpbmRleCBpbnRvIHRoZSBsaXN0LlxuICAgKlxuICAgKiBFeGFtcGxlIG9mIHdyYXBwaW5nIHBhc3QgdGhlIGVuZCBvZiB0aGUgbGlzdDogaWYgYHNlbGVjdGlvbmAgaXMgNS41IGFuZFxuICAgKiBgaXRlbUNvdW50YCBpcyA1LCB0aGlzIHJldHVybnMgMC41LiBFeGFtcGxlIG9mIHdyYXBwaW5nIHBhc3QgdGhlIGJlZ2lubmluZyBvZlxuICAgKiB0aGUgbGlzdDogaWYgYHNlbGVjdGlvbmAgaXMgMC41IGFuZCBgaXRlbUNvdW50YCBpcyA1LCB0aGlzIHJldHVybnMgNC41LlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2VsZWN0aW9uIC0gQSByZWFsIG51bWJlciByZXByZXNlbnRpbmcgYSBzZWxlY3Rpb24gcG9pbnRcbiAgICogQHBhcmFtIHtudW1iZXJ9IGl0ZW1Db3VudCAtIFRoZSBudW1iZXIgb2YgaXRlbXMgaW4gdGhlIGxpc3RcbiAgICogQHJldHVybnMge251bWJlcn0gLSBUaGUgcmVzdWx0IG9mIHdyYXBwaW5nIHRoZSBzZWxlY3Rpb24gcG9pbnRcbiAgICovXG4gIHdyYXBwZWRTZWxlY3Rpb24oc2VsZWN0aW9uLCBpdGVtQ291bnQpIHtcbiAgICAvLyBIYW5kbGVzIHBvc3NpYmlsaXR5IG9mIG5lZ2F0aXZlIG1vZC5cbiAgICAvLyBTZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTg2MTgyNTAvNzY0NzJcbiAgICByZXR1cm4gKChzZWxlY3Rpb24gJSBpdGVtQ291bnQpICsgaXRlbUNvdW50KSAlIGl0ZW1Db3VudDtcbiAgfSxcblxuICAvKlxuICAgKiBSZXR1cm4gdGhlIHBhcnRzIG9mIGEgc2VsZWN0aW9uLCBmaXJzdCB3cmFwcGluZyBpZiBuZWNlc3NhcnkuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzZWxlY3Rpb24g4oCTIEEgcmVhbCBudW1iZXIgcmVwcmVzZW50aW5nIGEgc2VsZWN0aW9uIHBvaW50XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpdGVtQ291bnQgLSBUaGUgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZSBsaXN0XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gd3JhcCDigJMgVHJ1ZSBpZiB0aGUgc2VsZWN0aW9uIHNob3VsZCB3cmFwIHRvIHN0YXkgd2l0aGluIHRoZVxuICAgKiBsaXN0XG4gICAqIEByZXR1cm5zIHtvYmplY3R9IOKAkyBUaGUgcGFydHMgb2YgdGhlIHNlbGVjdGlvbiwgdXNpbmcgdGhlIHNhbWUgZm9ybWF0IGFzXG4gICAqIGBzZWxlY3Rpb25QYXJ0c2AuXG4gICAqL1xuICB3cmFwcGVkU2VsZWN0aW9uUGFydHMoc2VsZWN0aW9uLCBpdGVtQ291bnQsIHdyYXApIHtcbiAgICBpZiAod3JhcCkge1xuICAgICAgc2VsZWN0aW9uID0gbWl4aW4uaGVscGVycy53cmFwcGVkU2VsZWN0aW9uKHNlbGVjdGlvbiwgaXRlbUNvdW50KTtcbiAgICB9XG4gICAgcmV0dXJuIG1peGluLmhlbHBlcnMuc2VsZWN0aW9uUGFydHMoc2VsZWN0aW9uKTtcbiAgfVxuXG59O1xuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuL2NyZWF0ZVN5bWJvbCc7XG5pbXBvcnQgc2FmZUF0dHJpYnV0ZXMgZnJvbSAnLi9zYWZlQXR0cmlidXRlcyc7XG5pbXBvcnQgc3ltYm9scyBmcm9tICcuL3N5bWJvbHMnO1xuXG5cbi8vIFN5bWJvbHMgZm9yIHByaXZhdGUgZGF0YSBtZW1iZXJzIG9uIGFuIGVsZW1lbnQuXG5jb25zdCBnZW5lcmljU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdnZW5lcmljJyk7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBHZW5lcmljLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggYWxsb3dzIGEgY29tcG9uZW50IHRvIHN1cHBvcnQgYSBcImdlbmVyaWNcIiBzdHlsZTogYSBtaW5pbWFsaXN0XG4gICAqIHN0eWxlIHRoYXQgY2FuIGVhc2lseSBiZSByZW1vdmVkIHRvIHJlc2V0IGl0cyB2aXN1YWwgYXBwZWFyYW5jZSB0byBhXG4gICAqIGJhc2VsaW5lIHN0YXRlLlxuICAgKlxuICAgKiBCeSBkZWZhdWx0LCBhIGNvbXBvbmVudCBzaG91bGQgcHJvdmlkZSBhIG1pbmltYWwgdmlzdWFsIHByZXNlbnRhdGlvbiB0aGF0XG4gICAqIGFsbG93cyB0aGUgY29tcG9uZW50IHRvIGZ1bmN0aW9uLiBIb3dldmVyLCB0aGUgbW9yZSBzdHlsaW5nIHRoZSBjb21wb25lbnRcbiAgICogcHJvdmlkZXMgYnkgZGVmYXVsdCwgdGhlIGhhcmRlciBpdCBiZWNvbWVzIHRvIGdldCB0aGUgY29tcG9uZW50IHRvIGZpdCBpblxuICAgKiBpbiBvdGhlciBzZXR0aW5ncy4gRWFjaCBDU1MgcnVsZSBoYXMgdG8gYmUgb3ZlcnJpZGRlbi4gV29yc2UsIG5ldyBDU1MgcnVsZXNcbiAgICogYWRkZWQgdG8gdGhlIGRlZmF1bHQgc3R5bGUgd29uJ3QgYmUgb3ZlcnJpZGRlbiBieSBkZWZhdWx0LCBtYWtpbmcgaXQgaGFyZFxuICAgKiB0byBrbm93IHdoZXRoZXIgYSBuZXcgdmVyc2lvbiBvZiBhIGNvbXBvbmVudCB3aWxsIHN0aWxsIGxvb2sgb2theS5cbiAgICpcbiAgICogQXMgYSBjb21wcm9taXNlLCB0aGUgbWl4aW4gZGVmaW5lcyBhIGBnZW5lcmljYCBhdHRyaWJ1dGUuIFRoaXMgYXR0cmlidXRlIGlzXG4gICAqIG5vcm1hbGx5IHNldCBieSBkZWZhdWx0LCBhbmQgc3R5bGVzIGNhbiBiZSB3cml0dGVuIHRoYXQgYXBwbHkgb25seSB3aGVuIHRoZVxuICAgKiBnZW5lcmljIGF0dHJpYnV0ZSBpcyBzZXQuIFRoaXMgYWxsb3dzIHRoZSBjb25zdHJ1Y3Rpb24gb2YgQ1NTIHJ1bGVzIHRoYXRcbiAgICogd2lsbCBvbmx5IGFwcGx5IHRvIGdlbmVyaWMgY29tcG9uZW50cyBsaWtlOlxuICAgKlxuICAgKiAgICAgOmhvc3QoW2dlbmVyaWM9XCJcIl0pIHtcbiAgICogICAgICAgLi4uIGdlbmVyaWMgYXBwZWFyYW5jZSBkZWZpbmVkIGhlcmUgLi4uXG4gICAqICAgICB9XG4gICAqXG4gICAqIFRoaXMgbWFrZXMgaXQgZWFzeSB0byByZW1vdmUgYWxsIGRlZmF1bHQgc3R5bGluZyDigJQgc2V0IHRoZSBgR2VuZXJpY01peGluYFxuICAgKiBhdHRyaWJ1dGUgdG8gZmFsc2UsIGFuZCBhbGwgZGVmYXVsdCBzdHlsaW5nIHdpbGwgYmUgcmVtb3ZlZC5cbiAgICovXG4gIGNsYXNzIEdlbmVyaWMgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIC8vIFNldCBkZWZhdWx0cy5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5nZW5lcmljID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLmdlbmVyaWMgPSB0aGlzW3N5bWJvbHMuZGVmYXVsdHNdLmdlbmVyaWM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVGhpcyBtaXhpbiBkb2Vzbid0IGFjdHVhbGx5IHJlc3BvbmQgdG8gYXR0cmlidXRlIGNoYW5nZXMsIGJ1dCByZWxpZXNcbiAgICAvLyBvbiBzZXBhcmF0ZWx5LWRlZmluZWQgYmVoYXZpb3IgKGUuZy4sIGluIEF0dHJpYnV0ZU1hcnNoYWxsaW5nTWl4aW4pIGZvciB0aGF0LlxuICAgIC8vIFN0aWxsLCB3ZSBuZWVkIGRlZmluZSBhIGJhc2VsaW5lIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayB0aGF0IGRvZXNcbiAgICAvLyBub3RoaW5nLCBpbiBjYXNlIHRoaXMgbWl4aW4gZ2V0cyB1c2VkIG9uIGl0cyBvd24uXG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xuICAgICAgaWYgKHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjaykgeyBzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKTsgfVxuICAgIH1cblxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKSB7IHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7IH1cbiAgICAgIHNhZmVBdHRyaWJ1dGVzLmNvbm5lY3RlZCh0aGlzKTtcbiAgICB9XG5cbiAgICBnZXQgW3N5bWJvbHMuZGVmYXVsdHNdKCkge1xuICAgICAgY29uc3QgZGVmYXVsdHMgPSBzdXBlcltzeW1ib2xzLmRlZmF1bHRzXSB8fCB7fTtcbiAgICAgIGRlZmF1bHRzLmdlbmVyaWMgPSB0cnVlO1xuICAgICAgcmV0dXJuIGRlZmF1bHRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRydWUgaWYgdGhlIGNvbXBvbmVudCB3b3VsZCBsaWtlIHRvIHJlY2VpdmUgZ2VuZXJpYyBzdHlsaW5nLlxuICAgICAqXG4gICAgICogVGhpcyBwcm9wZXJ0eSBpcyB0cnVlIGJ5IGRlZmF1bHQg4oCUwqBzZXQgaXQgdG8gZmFsc2UgdG8gdHVybiBvZmYgYWxsXG4gICAgICogZ2VuZXJpYyBzdHlsZXMuIFRoaXMgbWFrZXMgaXQgZWFzaWVyIHRvIGFwcGx5IGN1c3RvbSBzdHlsaW5nOyB5b3Ugd29uJ3RcbiAgICAgKiBoYXZlIHRvIGV4cGxpY2l0bHkgb3ZlcnJpZGUgc3R5bGluZyB5b3UgZG9uJ3Qgd2FudC5cbiAgICAgKlxuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgICovXG4gICAgZ2V0IGdlbmVyaWMoKSB7XG4gICAgICByZXR1cm4gdGhpc1tnZW5lcmljU3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IGdlbmVyaWModmFsdWUpIHtcbiAgICAgIGNvbnN0IHBhcnNlZCA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgP1xuICAgICAgICBTdHJpbmcodmFsdWUpICE9PSAnZmFsc2UnIDpcbiAgICAgICAgdmFsdWU7XG4gICAgICB0aGlzW2dlbmVyaWNTeW1ib2xdID0gcGFyc2VkO1xuXG4gICAgICBpZiAoJ2dlbmVyaWMnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLmdlbmVyaWMgPSB2YWx1ZTsgfVxuXG4gICAgICAvLyBXZSByb2xsIG91ciBvd24gYXR0cmlidXRlIHNldHRpbmcgc28gdGhhdCBhbiBleHBsaWNpdGx5IGZhbHNlIHZhbHVlXG4gICAgICAvLyBzaG93cyB1cCBhcyBHZW5lcmljTWl4aW49XCJmYWxzZVwiLlxuICAgICAgaWYgKHBhcnNlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgLy8gRXhwbGljaXRseSB1c2UgZmFsc2Ugc3RyaW5nLlxuICAgICAgICBzYWZlQXR0cmlidXRlcy5zZXRBdHRyaWJ1dGUodGhpcywgJ2dlbmVyaWMnLCAnZmFsc2UnKTtcbiAgICAgIH0gZWxzZSBpZiAocGFyc2VkID09IG51bGwpIHtcbiAgICAgICAgLy8gRXhwbGljaXRseSByZW1vdmUgYXR0cmlidXRlLiAoQWx3YXlzIHNhZmUgdG8gZG8gdGhpcy4pXG4gICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCdnZW5lcmljJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBVc2UgdGhlIGVtcHR5IHN0cmluZyB0byBnZXQgYXR0cmlidXRlIHRvIGFwcGVhciB3aXRoIG5vIHZhbHVlLlxuICAgICAgICBzYWZlQXR0cmlidXRlcy5zZXRBdHRyaWJ1dGUodGhpcywgJ2dlbmVyaWMnLCAnJyk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gR2VuZXJpYztcbn07XG5cblxuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuL2NyZWF0ZVN5bWJvbCc7XG5pbXBvcnQgc3ltYm9scyBmcm9tICcuL3N5bWJvbHMnO1xuXG5cbi8vIFN5bWJvbHMgZm9yIHByaXZhdGUgZGF0YSBtZW1iZXJzIG9uIGFuIGVsZW1lbnQuXG5jb25zdCBuYXZpZ2F0aW9uQXhpc1N5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnbmF2aWdhdGlvbkF4aXMnKTtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIEtleWJvYXJkRGlyZWN0aW9uLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggbWFwcyBkaXJlY3Rpb24ga2V5cyAoTGVmdCwgUmlnaHQsIGV0Yy4pIHRvIGRpcmVjdGlvbiBzZW1hbnRpY3NcbiAgICogKGdvIGxlZnQsIGdvIHJpZ2h0LCBldGMuKS5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIHRoZSBjb21wb25lbnQgdG8gaW52b2tlIGEgYGtleWRvd25gIG1ldGhvZCB3aGVuIGEga2V5IGlzXG4gICAqIHByZXNzZWQuIFlvdSBjYW4gdXNlIFtLZXlib2FyZE1peGluXShLZXlib2FyZE1peGluLm1kKSBmb3IgdGhhdFxuICAgKiBwdXJwb3NlLCBvciB3aXJlIHVwIHlvdXIgb3duIGtleWJvYXJkIGhhbmRsaW5nIGFuZCBjYWxsIGBrZXlkb3duYCB5b3Vyc2VsZi5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBjYWxscyBtZXRob2RzIHN1Y2ggYXMgYGdvTGVmdGAgYW5kIGBnb1JpZ2h0YC4gWW91IGNhbiBkZWZpbmVcbiAgICogd2hhdCB0aGF0IG1lYW5zIGJ5IGltcGxlbWVudGluZyB0aG9zZSBtZXRob2RzIHlvdXJzZWxmLiBJZiB5b3Ugd2FudCB0byB1c2VcbiAgICogZGlyZWN0aW9uIGtleXMgdG8gbmF2aWdhdGUgYSBzZWxlY3Rpb24sIHVzZSB0aGlzIG1peGluIHdpdGhcbiAgICogW0RpcmVjdGlvblNlbGVjdGlvbk1peGluXShEaXJlY3Rpb25TZWxlY3Rpb25NaXhpbi5tZCkuXG4gICAqL1xuICBjbGFzcyBLZXlib2FyZERpcmVjdGlvbiBleHRlbmRzIGJhc2Uge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgLy8gU2V0IGRlZmF1bHRzLlxuICAgICAgaWYgKHR5cGVvZiB0aGlzLm5hdmlnYXRpb25BeGlzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLm5hdmlnYXRpb25BeGlzID0gdGhpc1tzeW1ib2xzLmRlZmF1bHRzXS5uYXZpZ2F0aW9uQXhpcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgW3N5bWJvbHMuZGVmYXVsdHNdKCkge1xuICAgICAgY29uc3QgZGVmYXVsdHMgPSBzdXBlcltzeW1ib2xzLmRlZmF1bHRzXSB8fCB7fTtcbiAgICAgIGRlZmF1bHRzLm5hdmlnYXRpb25BeGlzID0gJ2JvdGgnO1xuICAgICAgcmV0dXJuIGRlZmF1bHRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSBkb3duLlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy5cbiAgICAgKi9cbiAgICBbc3ltYm9scy5nb0Rvd25dKCkge1xuICAgICAgaWYgKHN1cGVyW3N5bWJvbHMuZ29Eb3duXSkgeyByZXR1cm4gc3VwZXJbc3ltYm9scy5nb0Rvd25dKCk7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgdG8gdGhlIGVuZCAoZS5nLiwgb2YgYSBsaXN0KS5cbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuXG4gICAgICovXG4gICAgW3N5bWJvbHMuZ29FbmRdKCkge1xuICAgICAgaWYgKHN1cGVyW3N5bWJvbHMuZ29FbmRdKSB7IHJldHVybiBzdXBlcltzeW1ib2xzLmdvRW5kXSgpOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIGxlZnQuXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLlxuICAgICAqL1xuICAgIFtzeW1ib2xzLmdvTGVmdF0oKSB7XG4gICAgICBpZiAoc3VwZXJbc3ltYm9scy5nb0xlZnRdKSB7IHJldHVybiBzdXBlcltzeW1ib2xzLmdvTGVmdF0oKTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSByaWdodC5cbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuXG4gICAgICovXG4gICAgW3N5bWJvbHMuZ29SaWdodF0oKSB7XG4gICAgICBpZiAoc3VwZXJbc3ltYm9scy5nb1JpZ2h0XSkgeyByZXR1cm4gc3VwZXJbc3ltYm9scy5nb1JpZ2h0XSgpOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIHRvIHRoZSBzdGFydCAoZS5nLiwgb2YgYVxuICAgICAqIGxpc3QpLiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuXG4gICAgICovXG4gICAgW3N5bWJvbHMuZ29TdGFydF0oKSB7XG4gICAgICBpZiAoc3VwZXJbc3ltYm9scy5nb1N0YXJ0XSkgeyByZXR1cm4gc3VwZXJbc3ltYm9scy5nb1N0YXJ0XSgpOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIHVwLlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy5cbiAgICAgKi9cbiAgICBbc3ltYm9scy5nb1VwXSgpIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLmdvVXBdKSB7IHJldHVybiBzdXBlcltzeW1ib2xzLmdvVXBdKCk7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgdGhlIGRpcmVjdGlvbiBvZiBwZXJtaXR0ZWQgbmF2aWdhdGlvbiB3aXRoIHRoZSBrZXlib2FyZC5cbiAgICAgKlxuICAgICAqIEFjY2VwdGVkIHZhbHVlcyBhcmUgXCJob3Jpem9udGFsXCIsIFwidmVydGljYWxcIiwgb3IgXCJib3RoXCIgKHRoZSBkZWZhdWx0KS5cbiAgICAgKiBJZiB0aGlzIHByb3BlcnR5IGlzIFwiaG9yaXpvbnRhbFwiLCB0aGUgVXAgQXJyb3cgYW5kIERvd24gQXJyb3cga2V5cyB3aWxsXG4gICAgICogYmUgaWdub3JlZC4gQ29udmVyc2VseSwgaWYgdGhpcyBpcyBcInZlcnRpY2FsXCIsIHRoZSBMZWZ0IEFycm93IGFuZCBSaWdodFxuICAgICAqIEFycm93IGtleXMgd2lsbCBiZSBpZ25vcmVkLlxuICAgICAqXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXQgbmF2aWdhdGlvbkF4aXMoKSB7XG4gICAgICByZXR1cm4gdGhpc1tuYXZpZ2F0aW9uQXhpc1N5bWJvbF07XG4gICAgfVxuICAgIHNldCBuYXZpZ2F0aW9uQXhpcyh2YWx1ZSkge1xuICAgICAgdGhpc1tuYXZpZ2F0aW9uQXhpc1N5bWJvbF0gPSB2YWx1ZTtcbiAgICAgIGlmICgnbmF2aWdhdGlvbkF4aXMnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLm5hdmlnYXRpb25BeGlzID0gdmFsdWU7IH1cbiAgICB9XG5cbiAgICBbc3ltYm9scy5rZXlkb3duXShldmVudCkge1xuICAgICAgbGV0IGhhbmRsZWQ7XG5cbiAgICAgIGNvbnN0IGF4aXMgPSB0aGlzLm5hdmlnYXRpb25BeGlzO1xuICAgICAgY29uc3QgaG9yaXpvbnRhbCA9IChheGlzID09PSAnaG9yaXpvbnRhbCcgfHwgYXhpcyA9PT0gJ2JvdGgnKTtcbiAgICAgIGNvbnN0IHZlcnRpY2FsID0gKGF4aXMgPT09ICd2ZXJ0aWNhbCcgfHwgYXhpcyA9PT0gJ2JvdGgnKTtcblxuICAgICAgLy8gSWdub3JlIExlZnQvUmlnaHQga2V5cyB3aGVuIG1ldGFLZXkgb3IgYWx0S2V5IG1vZGlmaWVyIGlzIGFsc28gcHJlc3NlZCxcbiAgICAgIC8vIGFzIHRoZSB1c2VyIG1heSBiZSB0cnlpbmcgdG8gbmF2aWdhdGUgYmFjayBvciBmb3J3YXJkIGluIHRoZSBicm93c2VyLlxuICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgIGNhc2UgMzU6IC8vIEVuZFxuICAgICAgICAgIGhhbmRsZWQgPSB0aGlzW3N5bWJvbHMuZ29FbmRdKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzY6IC8vIEhvbWVcbiAgICAgICAgICBoYW5kbGVkID0gdGhpc1tzeW1ib2xzLmdvU3RhcnRdKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzc6IC8vIExlZnRcbiAgICAgICAgICBpZiAoaG9yaXpvbnRhbCAmJiAhZXZlbnQubWV0YUtleSAmJiAhZXZlbnQuYWx0S2V5KSB7XG4gICAgICAgICAgICBoYW5kbGVkID0gdGhpc1tzeW1ib2xzLmdvTGVmdF0oKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzg6IC8vIFVwXG4gICAgICAgICAgaWYgKHZlcnRpY2FsKSB7XG4gICAgICAgICAgICBoYW5kbGVkID0gZXZlbnQuYWx0S2V5ID8gdGhpc1tzeW1ib2xzLmdvU3RhcnRdKCkgOiB0aGlzW3N5bWJvbHMuZ29VcF0oKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzk6IC8vIFJpZ2h0XG4gICAgICAgICAgaWYgKGhvcml6b250YWwgJiYgIWV2ZW50Lm1ldGFLZXkgJiYgIWV2ZW50LmFsdEtleSkge1xuICAgICAgICAgICAgaGFuZGxlZCA9IHRoaXNbc3ltYm9scy5nb1JpZ2h0XSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0MDogLy8gRG93blxuICAgICAgICAgIGlmICh2ZXJ0aWNhbCkge1xuICAgICAgICAgICAgaGFuZGxlZCA9IGV2ZW50LmFsdEtleSA/IHRoaXNbc3ltYm9scy5nb0VuZF0oKSA6IHRoaXNbc3ltYm9scy5nb0Rvd25dKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgLy8gUHJlZmVyIG1peGluIHJlc3VsdCBpZiBpdCdzIGRlZmluZWQsIG90aGVyd2lzZSB1c2UgYmFzZSByZXN1bHQuXG4gICAgICByZXR1cm4gaGFuZGxlZCB8fCAoc3VwZXJbc3ltYm9scy5rZXlkb3duXSAmJiBzdXBlcltzeW1ib2xzLmtleWRvd25dKGV2ZW50KSk7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gS2V5Ym9hcmREaXJlY3Rpb247XG59O1xuIiwiaW1wb3J0IHN5bWJvbHMgZnJvbSAnLi9zeW1ib2xzJztcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIEtleWJvYXJkLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggbWFuYWdlcyB0aGUga2V5ZG93biBoYW5kbGluZyBmb3IgYSBjb21wb25lbnQuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gaGFuZGxlcyBzZXZlcmFsIGtleWJvYXJkLXJlbGF0ZWQgZmVhdHVyZXMuXG4gICAqXG4gICAqIEZpcnN0LCBpdCB3aXJlcyB1cCBhIHNpbmdsZSBrZXlkb3duIGV2ZW50IGhhbmRsZXIgdGhhdCBjYW4gYmUgc2hhcmVkIGJ5XG4gICAqIG11bHRpcGxlIG1peGlucyBvbiBhIGNvbXBvbmVudC4gVGhlIGV2ZW50IGhhbmRsZXIgd2lsbCBpbnZva2UgYSBga2V5ZG93bmBcbiAgICogbWV0aG9kIHdpdGggdGhlIGV2ZW50IG9iamVjdCwgYW5kIGFueSBtaXhpbiBhbG9uZyB0aGUgcHJvdG90eXBlIGNoYWluIHRoYXRcbiAgICogd2FudHMgdG8gaGFuZGxlIHRoYXQgbWV0aG9kIGNhbiBkbyBzby5cbiAgICpcbiAgICogSWYgYSBtaXhpbiB3YW50cyB0byBpbmRpY2F0ZSB0aGF0IGtleWJvYXJkIGV2ZW50IGhhcyBiZWVuIGhhbmRsZWQsIGFuZCB0aGF0XG4gICAqIG90aGVyIG1peGlucyBzaG91bGQgKm5vdCogaGFuZGxlIGl0LCB0aGUgbWl4aW4ncyBga2V5ZG93bmAgaGFuZGxlciBzaG91bGRcbiAgICogcmV0dXJuIGEgdmFsdWUgb2YgdHJ1ZS4gVGhlIGNvbnZlbnRpb24gdGhhdCBzZWVtcyB0byB3b3JrIHdlbGwgaXMgdGhhdCBhXG4gICAqIG1peGluIHNob3VsZCBzZWUgaWYgaXQgd2FudHMgdG8gaGFuZGxlIHRoZSBldmVudCBhbmQsIGlmIG5vdCwgdGhlbiBhc2sgdGhlXG4gICAqIHN1cGVyY2xhc3MgdG8gc2VlIGlmIGl0IHdhbnRzIHRvIGhhbmRsZSB0aGUgZXZlbnQuIFRoaXMgaGFzIHRoZSBlZmZlY3Qgb2ZcbiAgICogZ2l2aW5nIHRoZSBtaXhpbiB0aGF0IHdhcyBhcHBsaWVkIGxhc3QgdGhlIGZpcnN0IGNoYW5jZSBhdCBoYW5kbGluZyBhXG4gICAqIGtleWJvYXJkIGV2ZW50LlxuICAgKlxuICAgKiBFeGFtcGxlOlxuICAgKlxuICAgKiAgICAgW3N5bWJvbHMua2V5ZG93bl0oZXZlbnQpIHtcbiAgICogICAgICAgbGV0IGhhbmRsZWQ7XG4gICAqICAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgKiAgICAgICAgIC8vIEhhbmRsZSB0aGUga2V5cyB5b3Ugd2FudCwgc2V0dGluZyBoYW5kbGVkID0gdHJ1ZSBpZiBhcHByb3ByaWF0ZS5cbiAgICogICAgICAgfVxuICAgKiAgICAgICAvLyBQcmVmZXIgbWl4aW4gcmVzdWx0IGlmIGl0J3MgZGVmaW5lZCwgb3RoZXJ3aXNlIHVzZSBiYXNlIHJlc3VsdC5cbiAgICogICAgICAgcmV0dXJuIGhhbmRsZWQgfHwgKHN1cGVyW3N5bWJvbHMua2V5ZG93bl0gJiYgc3VwZXJbc3ltYm9scy5rZXlkb3duXShldmVudCkpO1xuICAgKiAgICAgfVxuICAgKlxuICAgKiBBIHNlY29uZCBmZWF0dXJlIHByb3ZpZGVkIGJ5IHRoaXMgbWl4aW4gaXMgdGhhdCBpdCBpbXBsaWNpdGx5IG1ha2VzIHRoZVxuICAgKiBjb21wb25lbnQgYSB0YWIgc3RvcCBpZiBpdCBpc24ndCBhbHJlYWR5LCBieSBzZXR0aW5nIGB0YWJJbmRleGAgdG8gMC4gVGhpc1xuICAgKiBoYXMgdGhlIGVmZmVjdCBvZiBhZGRpbmcgdGhlIGNvbXBvbmVudCB0byB0aGUgdGFiIG9yZGVyIGluIGRvY3VtZW50IG9yZGVyLlxuICAgKi9cbiAgY2xhc3MgS2V5Ym9hcmQgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGV2ZW50ID0+IHtcbiAgICAgICAgY29uc3QgaGFuZGxlZCA9IHRoaXNbc3ltYm9scy5rZXlkb3duXShldmVudCk7XG4gICAgICAgIGlmIChoYW5kbGVkKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2spIHsgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTsgfVxuICAgICAgaWYgKHRoaXMuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpID09IG51bGwgJiYgdGhpc1tzeW1ib2xzLmRlZmF1bHRzXS50YWJpbmRleCAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCB0aGlzW3N5bWJvbHMuZGVmYXVsdHNdLnRhYmluZGV4KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgW3N5bWJvbHMuZGVmYXVsdHNdKCkge1xuICAgICAgY29uc3QgZGVmYXVsdHMgPSBzdXBlcltzeW1ib2xzLmRlZmF1bHRzXSB8fCB7fTtcbiAgICAgIC8vIFRoZSBkZWZhdWx0IHRhYiBpbmRleCBpcyAwIChkb2N1bWVudCBvcmRlcikuXG4gICAgICBkZWZhdWx0cy50YWJpbmRleCA9IDA7XG4gICAgICByZXR1cm4gZGVmYXVsdHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIHRoZSBpbmRpY2F0ZWQga2V5Ym9hcmQgZXZlbnQuXG4gICAgICpcbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuIFRoaXMgd2lsbFxuICAgICAqIHR5cGljYWxseSBiZSBoYW5kbGVkIGJ5IG90aGVyIG1peGlucy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7S2V5Ym9hcmRFdmVudH0gZXZlbnQgLSB0aGUga2V5Ym9hcmQgZXZlbnRcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZSBldmVudCB3YXMgaGFuZGxlZFxuICAgICAqL1xuICAgIFtzeW1ib2xzLmtleWRvd25dKGV2ZW50KSB7XG4gICAgICBpZiAoc3VwZXJbc3ltYm9scy5rZXlkb3duXSkgeyByZXR1cm4gc3VwZXJbc3ltYm9scy5rZXlkb3duXShldmVudCk7IH1cbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBLZXlib2FyZDtcbn07XG4iLCJpbXBvcnQgc3ltYm9scyBmcm9tICcuL3N5bWJvbHMnO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggS2V5Ym9hcmRQYWdlZFNlbGVjdGlvbi4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIG1hcHMgcGFnZSBrZXlzIChQYWdlIFVwLCBQYWdlIERvd24pIGludG8gb3BlcmF0aW9ucyB0aGF0IG1vdmVcbiAgICogdGhlIHNlbGVjdGlvbiBieSBvbmUgcGFnZS5cbiAgICpcbiAgICogVGhlIGtleWJvYXJkIGludGVyYWN0aW9uIG1vZGVsIGdlbmVyYWxseSBmb2xsb3dzIHRoYXQgb2YgTWljcm9zb2Z0IFdpbmRvd3MnXG4gICAqIGxpc3QgYm94ZXMgaW5zdGVhZCBvZiB0aG9zZSBpbiBPUyBYOlxuICAgKlxuICAgKiAqIFRoZSBQYWdlIFVwL0Rvd24gYW5kIEhvbWUvRW5kIGtleXMgYWN0dWFsbHkgY2hhbmdlIHRoZSBzZWxlY3Rpb24sIHJhdGhlclxuICAgKiAgIHRoYW4ganVzdCBzY3JvbGxpbmcuIFRoZSBmb3JtZXIgYmVoYXZpb3Igc2VlbXMgbW9yZSBnZW5lcmFsbHkgdXNlZnVsIGZvclxuICAgKiAgIGtleWJvYXJkIHVzZXJzLlxuICAgKlxuICAgKiAqIFByZXNzaW5nIFBhZ2UgVXAvRG93biB3aWxsIGNoYW5nZSB0aGUgc2VsZWN0aW9uIHRvIHRoZSB0b3Btb3N0L2JvdHRvbW1vc3RcbiAgICogICB2aXNpYmxlIGl0ZW0gaWYgdGhlIHNlbGVjdGlvbiBpcyBub3QgYWxyZWFkeSB0aGVyZS4gVGhlcmVhZnRlciwgdGhlIGtleVxuICAgKiAgIHdpbGwgbW92ZSB0aGUgc2VsZWN0aW9uIHVwL2Rvd24gYnkgYSBwYWdlLCBhbmQgKHBlciB0aGUgYWJvdmUgcG9pbnQpIG1ha2VcbiAgICogICB0aGUgc2VsZWN0ZWQgaXRlbSB2aXNpYmxlLlxuICAgKlxuICAgKiBUbyBlbnN1cmUgdGhlIHNlbGVjdGVkIGl0ZW0gaXMgaW4gdmlldyBmb2xsb3dpbmcgdXNlIG9mIFBhZ2UgVXAvRG93biwgdXNlXG4gICAqIHRoZSByZWxhdGVkIFtTZWxlY3Rpb25JblZpZXdNaXhpbl0oU2VsZWN0aW9uSW5WaWV3TWl4aW4ubWQpLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGV4cGVjdHMgdGhlIGNvbXBvbmVudCB0byBpbnZva2UgYSBga2V5ZG93bmAgbWV0aG9kIHdoZW4gYSBrZXkgaXNcbiAgICogcHJlc3NlZC4gWW91IGNhbiB1c2UgW0tleWJvYXJkTWl4aW5dKEtleWJvYXJkTWl4aW4ubWQpIGZvciB0aGF0XG4gICAqIHB1cnBvc2UsIG9yIHdpcmUgdXAgeW91ciBvd24ga2V5Ym9hcmQgaGFuZGxpbmcgYW5kIGNhbGwgYGtleWRvd25gIHlvdXJzZWxmLlxuICAgKi9cbiAgY2xhc3MgS2V5Ym9hcmRQYWdlZFNlbGVjdGlvbiBleHRlbmRzIGJhc2Uge1xuXG4gICAgW3N5bWJvbHMua2V5ZG93bl0oZXZlbnQpIHtcbiAgICAgIGxldCBoYW5kbGVkO1xuICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgIGNhc2UgMzM6IC8vIFBhZ2UgVXBcbiAgICAgICAgICBoYW5kbGVkID0gdGhpcy5wYWdlVXAoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzNDogLy8gUGFnZSBEb3duXG4gICAgICAgICAgaGFuZGxlZCA9IHRoaXMucGFnZURvd24oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIC8vIFByZWZlciBtaXhpbiByZXN1bHQgaWYgaXQncyBkZWZpbmVkLCBvdGhlcndpc2UgdXNlIGJhc2UgcmVzdWx0LlxuICAgICAgcmV0dXJuIGhhbmRsZWQgfHwgKHN1cGVyW3N5bWJvbHMua2V5ZG93bl0gJiYgc3VwZXJbc3ltYm9scy5rZXlkb3duXShldmVudCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNjcm9sbCBkb3duIG9uZSBwYWdlLlxuICAgICAqL1xuICAgIHBhZ2VEb3duKCkge1xuICAgICAgaWYgKHN1cGVyLnBhZ2VEb3duKSB7IHN1cGVyLnBhZ2VEb3duKCk7IH1cbiAgICAgIHJldHVybiBzY3JvbGxPbmVQYWdlKHRoaXMsIHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNjcm9sbCB1cCBvbmUgcGFnZS5cbiAgICAgKi9cbiAgICBwYWdlVXAoKSB7XG4gICAgICBpZiAoc3VwZXIucGFnZVVwKSB7IHN1cGVyLnBhZ2VVcCgpOyB9XG4gICAgICByZXR1cm4gc2Nyb2xsT25lUGFnZSh0aGlzLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGVsZW1lbnQgdGhhdCBzaG91bGQgYmUgc2Nyb2xsZWQgd2l0aCB0aGUgUGFnZSBVcC9Eb3duIGtleXMuXG4gICAgICogRGVmYXVsdCBpcyB0aGUgY3VycmVudCBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIGdldCBzY3JvbGxUYXJnZXQoKSB7XG4gICAgICAvLyBQcmVmZXIgYmFzZSByZXN1bHQuXG4gICAgICByZXR1cm4gJ3Njcm9sbFRhcmdldCcgaW4gYmFzZS5wcm90b3R5cGUgPyBzdXBlci5zY3JvbGxUYXJnZXQgOiB0aGlzO1xuICAgIH1cbiAgICBzZXQgc2Nyb2xsVGFyZ2V0KGVsZW1lbnQpIHtcbiAgICAgIGlmICgnc2Nyb2xsVGFyZ2V0JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zY3JvbGxUYXJnZXQgPSBlbGVtZW50OyB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIEtleWJvYXJkUGFnZWRTZWxlY3Rpb247XG59O1xuXG5cbi8vIFJldHVybiB0aGUgaXRlbSB3aG9zZSBjb250ZW50IHNwYW5zIHRoZSBnaXZlbiB5IHBvc2l0aW9uIChyZWxhdGl2ZSB0byB0aGVcbi8vIHRvcCBvZiB0aGUgbGlzdCdzIHNjcm9sbGluZyBjbGllbnQgYXJlYSksIG9yIG51bGwgaWYgbm90IGZvdW5kLlxuLy9cbi8vIElmIGRvd253YXJkIGlzIHRydWUsIG1vdmUgZG93biB0aGUgbGlzdCBvZiBpdGVtcyB0byBmaW5kIHRoZSBmaXJzdCBpdGVtXG4vLyBmb3VuZCBhdCB0aGUgZ2l2ZW4geSBwb3NpdGlvbjsgaWYgZG93bndhcmQgaXMgZmFsc2UsIG1vdmUgdXAgdGhlIGxpc3Qgb2Zcbi8vIGl0ZW1zIHRvIGZpbmQgdGhlIGxhc3QgaXRlbSBhdCB0aGF0IHBvc2l0aW9uLlxuZnVuY3Rpb24gZ2V0SW5kZXhPZkl0ZW1BdFkoZWxlbWVudCwgeSwgZG93bndhcmQpIHtcbiAgY29uc3QgaXRlbXMgPSBlbGVtZW50Lml0ZW1zO1xuICBjb25zdCBzdGFydCA9IGRvd253YXJkID8gMCA6IGl0ZW1zLmxlbmd0aCAtIDE7XG4gIGNvbnN0IGVuZCA9IGRvd253YXJkID8gaXRlbXMubGVuZ3RoIDogMDtcbiAgY29uc3Qgc3RlcCA9IGRvd253YXJkID8gMSA6IC0xO1xuICBjb25zdCBzY3JvbGxUYXJnZXQgPSBlbGVtZW50LnNjcm9sbFRhcmdldDtcbiAgY29uc3QgdG9wT2ZDbGllbnRBcmVhID0gc2Nyb2xsVGFyZ2V0Lm9mZnNldFRvcCArIHNjcm9sbFRhcmdldC5jbGllbnRUb3A7XG5cbiAgLy8gRmluZCB0aGUgaXRlbSBzcGFubmluZyB0aGUgaW5kaWNhdGVkIHkgY29vcmRpbmF0ZS5cbiAgbGV0IGl0ZW07XG4gIGxldCBpdGVtSW5kZXggPSBzdGFydDtcbiAgbGV0IGl0ZW1Ub3A7XG4gIGxldCBmb3VuZCA9IGZhbHNlO1xuICB3aGlsZSAoaXRlbUluZGV4ICE9PSBlbmQpIHtcbiAgICBpdGVtID0gaXRlbXNbaXRlbUluZGV4XTtcbiAgICBpdGVtVG9wID0gaXRlbS5vZmZzZXRUb3AgLSB0b3BPZkNsaWVudEFyZWE7XG4gICAgY29uc3QgaXRlbUJvdHRvbSA9IGl0ZW1Ub3AgKyBpdGVtLm9mZnNldEhlaWdodDtcbiAgICBpZiAoaXRlbVRvcCA8PSB5ICYmIGl0ZW1Cb3R0b20gPj0geSkge1xuICAgICAgLy8gSXRlbSBzcGFucyB0aGUgaW5kaWNhdGVkIHkgY29vcmRpbmF0ZS5cbiAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpdGVtSW5kZXggKz0gc3RlcDtcbiAgfVxuXG4gIGlmICghZm91bmQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vIFdlIG1heSBoYXZlIGZvdW5kIGFuIGl0ZW0gd2hvc2UgcGFkZGluZyBzcGFucyB0aGUgZ2l2ZW4geSBjb29yZGluYXRlLFxuICAvLyBidXQgd2hvc2UgY29udGVudCBpcyBhY3R1YWxseSBhYm92ZS9iZWxvdyB0aGF0IHBvaW50LlxuICAvLyBUT0RPOiBJZiB0aGUgaXRlbSBoYXMgYSBib3JkZXIsIHRoZW4gcGFkZGluZyBzaG91bGQgYmUgaW5jbHVkZWQgaW5cbiAgLy8gY29uc2lkZXJpbmcgYSBoaXQuXG4gIGNvbnN0IGl0ZW1TdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoaXRlbSk7XG4gIGNvbnN0IGl0ZW1QYWRkaW5nVG9wID0gcGFyc2VGbG9hdChpdGVtU3R5bGUucGFkZGluZ1RvcCk7XG4gIGNvbnN0IGl0ZW1QYWRkaW5nQm90dG9tID0gcGFyc2VGbG9hdChpdGVtU3R5bGUucGFkZGluZ0JvdHRvbSk7XG4gIGNvbnN0IGNvbnRlbnRUb3AgPSBpdGVtVG9wICsgaXRlbS5jbGllbnRUb3AgKyBpdGVtUGFkZGluZ1RvcDtcbiAgY29uc3QgY29udGVudEJvdHRvbSA9IGNvbnRlbnRUb3AgKyBpdGVtLmNsaWVudEhlaWdodCAtIGl0ZW1QYWRkaW5nVG9wIC0gaXRlbVBhZGRpbmdCb3R0b207XG4gIGlmIChkb3dud2FyZCAmJiBjb250ZW50VG9wIDw9IHkgfHwgIWRvd253YXJkICYmIGNvbnRlbnRCb3R0b20gPj0geSkge1xuICAgIC8vIFRoZSBpbmRpY2F0ZWQgY29vcmRpbmF0ZSBoaXRzIHRoZSBhY3R1YWwgaXRlbSBjb250ZW50LlxuICAgIHJldHVybiBpdGVtSW5kZXg7XG4gIH1cbiAgZWxzZSB7XG4gICAgLy8gVGhlIGluZGljYXRlZCBjb29yZGluYXRlIGZhbGxzIHdpdGhpbiB0aGUgaXRlbSdzIHBhZGRpbmcuIEJhY2sgdXAgdG9cbiAgICAvLyB0aGUgaXRlbSBiZWxvdy9hYm92ZSB0aGUgaXRlbSB3ZSBmb3VuZCBhbmQgcmV0dXJuIHRoYXQuXG4gICAgcmV0dXJuIGl0ZW1JbmRleCAtIHN0ZXA7XG4gIH1cbn1cblxuLy8gTW92ZSBieSBvbmUgcGFnZSBkb3dud2FyZCAoaWYgZG93bndhcmQgaXMgdHJ1ZSksIG9yIHVwd2FyZCAoaWYgZmFsc2UpLlxuLy8gUmV0dXJuIHRydWUgaWYgd2UgZW5kZWQgdXAgY2hhbmdpbmcgdGhlIHNlbGVjdGlvbiwgZmFsc2UgaWYgbm90LlxuLy8gVE9ETzogQmV0dGVyIHN1cHBvcnQgZm9yIGhvcml6b250YWwgbGlzdHMuXG5mdW5jdGlvbiBzY3JvbGxPbmVQYWdlKGVsZW1lbnQsIGRvd253YXJkKSB7XG5cbiAgLy8gRGV0ZXJtaW5lIHRoZSBpdGVtIHZpc2libGUganVzdCBhdCB0aGUgZWRnZSBvZiBkaXJlY3Rpb24gd2UncmUgaGVhZGluZy5cbiAgLy8gV2UnbGwgc2VsZWN0IHRoYXQgaXRlbSBpZiBpdCdzIG5vdCBhbHJlYWR5IHNlbGVjdGVkLlxuICBjb25zdCBzY3JvbGxUYXJnZXQgPSBlbGVtZW50LnNjcm9sbFRhcmdldDtcbiAgY29uc3QgZWRnZSA9IHNjcm9sbFRhcmdldC5zY3JvbGxUb3AgKyAoZG93bndhcmQgPyBzY3JvbGxUYXJnZXQuY2xpZW50SGVpZ2h0IDogMCk7XG4gIGNvbnN0IGluZGV4T2ZJdGVtQXRFZGdlID0gZ2V0SW5kZXhPZkl0ZW1BdFkoZWxlbWVudCwgZWRnZSwgZG93bndhcmQpO1xuXG4gIGNvbnN0IHNlbGVjdGVkSW5kZXggPSBlbGVtZW50LnNlbGVjdGVkSW5kZXg7XG4gIGxldCBuZXdJbmRleDtcbiAgaWYgKGluZGV4T2ZJdGVtQXRFZGdlICYmIHNlbGVjdGVkSW5kZXggPT09IGluZGV4T2ZJdGVtQXRFZGdlKSB7XG4gICAgLy8gVGhlIGl0ZW0gYXQgdGhlIGVkZ2Ugd2FzIGFscmVhZHkgc2VsZWN0ZWQsIHNvIHNjcm9sbCBpbiB0aGUgaW5kaWNhdGVkXG4gICAgLy8gZGlyZWN0aW9uIGJ5IG9uZSBwYWdlLiBMZWF2ZSB0aGUgbmV3IGl0ZW0gYXQgdGhhdCBlZGdlIHNlbGVjdGVkLlxuICAgIGNvbnN0IGRlbHRhID0gKGRvd253YXJkID8gMSA6IC0xKSAqIHNjcm9sbFRhcmdldC5jbGllbnRIZWlnaHQ7XG4gICAgbmV3SW5kZXggPSBnZXRJbmRleE9mSXRlbUF0WShlbGVtZW50LCBlZGdlICsgZGVsdGEsIGRvd253YXJkKTtcbiAgfVxuICBlbHNlIHtcbiAgICAvLyBUaGUgaXRlbSBhdCB0aGUgZWRnZSB3YXNuJ3Qgc2VsZWN0ZWQgeWV0LiBJbnN0ZWFkIG9mIHNjcm9sbGluZywgd2UnbGxcbiAgICAvLyBqdXN0IHNlbGVjdCB0aGF0IGl0ZW0uIFRoYXQgaXMsIHRoZSBmaXJzdCBhdHRlbXB0IHRvIHBhZ2UgdXAvZG93blxuICAgIC8vIHVzdWFsbHkganVzdCBtb3ZlcyB0aGUgc2VsZWN0aW9uIHRvIHRoZSBlZGdlIGluIHRoYXQgZGlyZWN0aW9uLlxuICAgIG5ld0luZGV4ID0gaW5kZXhPZkl0ZW1BdEVkZ2U7XG4gIH1cblxuICBpZiAoIW5ld0luZGV4KSB7XG4gICAgLy8gV2UgY2FuJ3QgZmluZCBhbiBpdGVtIGluIHRoZSBkaXJlY3Rpb24gd2Ugd2FudCB0byB0cmF2ZWwuIFNlbGVjdCB0aGVcbiAgICAvLyBsYXN0IGl0ZW0gKGlmIG1vdmluZyBkb3dud2FyZCkgb3IgZmlyc3QgaXRlbSAoaWYgbW92aW5nIHVwd2FyZCkuXG4gICAgbmV3SW5kZXggPSAoZG93bndhcmQgPyBlbGVtZW50Lml0ZW1zLmxlbmd0aCAtIDEgOiAwKTtcbiAgfVxuXG4gIGlmIChuZXdJbmRleCAhPT0gc2VsZWN0ZWRJbmRleCkge1xuICAgIGVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9IG5ld0luZGV4O1xuICAgIHJldHVybiB0cnVlOyAvLyBXZSBoYW5kbGVkIHRoZSBwYWdlIHVwL2Rvd24gb3Vyc2VsdmVzLlxuICB9XG4gIGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTsgLy8gV2UgZGlkbid0IGRvIGFueXRoaW5nLlxuICB9XG59XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4vY3JlYXRlU3ltYm9sJztcbmltcG9ydCBzeW1ib2xzIGZyb20gJy4vc3ltYm9scyc7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IGl0ZW1UZXh0Q29udGVudHNTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2l0ZW1UZXh0Q29udGVudHMnKTtcbmNvbnN0IHR5cGVkUHJlZml4U3ltYm9sID0gY3JlYXRlU3ltYm9sKCd0eXBlZFByZWZpeCcpO1xuY29uc3QgcHJlZml4VGltZW91dFN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgncHJlZml4VGltZW91dCcpO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggS2V5Ym9hcmRQcmVmaXhTZWxlY3Rpb24uICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB0aGF0IGhhbmRsZXMgbGlzdCBib3gtc3R5bGUgcHJlZml4IHR5cGluZywgaW4gd2hpY2ggdGhlIHVzZXIgY2FuIHR5cGVcbiAgICogYSBzdHJpbmcgdG8gc2VsZWN0IHRoZSBmaXJzdCBpdGVtIHRoYXQgYmVnaW5zIHdpdGggdGhhdCBzdHJpbmcuXG4gICAqXG4gICAqIEV4YW1wbGU6IHN1cHBvc2UgYSBjb21wb25lbnQgdXNpbmcgdGhpcyBtaXhpbiBoYXMgdGhlIGZvbGxvd2luZyBpdGVtczpcbiAgICpcbiAgICogICAgIDxzYW1wbGUtbGlzdC1jb21wb25lbnQ+XG4gICAqICAgICAgIDxkaXY+QXBwbGU8L2Rpdj5cbiAgICogICAgICAgPGRpdj5BcHJpY290PC9kaXY+XG4gICAqICAgICAgIDxkaXY+QmFuYW5hPC9kaXY+XG4gICAqICAgICAgIDxkaXY+QmxhY2tiZXJyeTwvZGl2PlxuICAgKiAgICAgICA8ZGl2PkJsdWViZXJyeTwvZGl2PlxuICAgKiAgICAgICA8ZGl2PkNhbnRhbG91cGU8L2Rpdj5cbiAgICogICAgICAgPGRpdj5DaGVycnk8L2Rpdj5cbiAgICogICAgICAgPGRpdj5MZW1vbjwvZGl2PlxuICAgKiAgICAgICA8ZGl2PkxpbWU8L2Rpdj5cbiAgICogICAgIDwvc2FtcGxlLWxpc3QtY29tcG9uZW50PlxuICAgKlxuICAgKiBJZiB0aGlzIGNvbXBvbmVudCByZWNlaXZlcyB0aGUgZm9jdXMsIGFuZCB0aGUgdXNlciBwcmVzc2VzIHRoZSBcImJcIiBvciBcIkJcIlxuICAgKiBrZXksIHRoZSBcIkJhbmFuYVwiIGl0ZW0gd2lsbCBiZSBzZWxlY3RlZCwgYmVjYXVzZSBpdCdzIHRoZSBmaXJzdCBpdGVtIHRoYXRcbiAgICogbWF0Y2hlcyB0aGUgcHJlZml4IFwiYlwiLiAoTWF0Y2hpbmcgaXMgY2FzZS1pbnNlbnNpdGl2ZS4pIElmIHRoZSB1c2VyIG5vd1xuICAgKiBwcmVzc2VzIHRoZSBcImxcIiBvciBcIkxcIiBrZXkgcXVpY2tseSwgdGhlIHByZWZpeCB0byBtYXRjaCBiZWNvbWVzIFwiYmxcIiwgc29cbiAgICogXCJCbGFja2JlcnJ5XCIgd2lsbCBiZSBzZWxlY3RlZC5cbiAgICpcbiAgICogVGhlIHByZWZpeCB0eXBpbmcgZmVhdHVyZSBoYXMgYSBvbmUgc2Vjb25kIHRpbWVvdXQg4oCUwqB0aGUgcHJlZml4IHRvIG1hdGNoXG4gICAqIHdpbGwgYmUgcmVzZXQgYWZ0ZXIgYSBzZWNvbmQgaGFzIHBhc3NlZCBzaW5jZSB0aGUgdXNlciBsYXN0IHR5cGVkIGEga2V5LlxuICAgKiBJZiwgaW4gdGhlIGFib3ZlIGV4YW1wbGUsIHRoZSB1c2VyIHdhaXRzIGEgc2Vjb25kIGJldHdlZW4gdHlwaW5nIFwiYlwiIGFuZFxuICAgKiBcImxcIiwgdGhlIHByZWZpeCB3aWxsIGJlY29tZSBcImxcIiwgc28gXCJMZW1vblwiIHdvdWxkIGJlIHNlbGVjdGVkLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGV4cGVjdHMgdGhlIGNvbXBvbmVudCB0byBpbnZva2UgYSBga2V5ZG93bmAgbWV0aG9kIHdoZW4gYSBrZXkgaXNcbiAgICogcHJlc3NlZC4gWW91IGNhbiB1c2UgW0tleWJvYXJkTWl4aW5dKEtleWJvYXJkTWl4aW4ubWQpIGZvciB0aGF0XG4gICAqIHB1cnBvc2UsIG9yIHdpcmUgdXAgeW91ciBvd24ga2V5Ym9hcmQgaGFuZGxpbmcgYW5kIGNhbGwgYGtleWRvd25gIHlvdXJzZWxmLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGFsc28gZXhwZWN0cyB0aGUgY29tcG9uZW50IHRvIHByb3ZpZGUgYW4gYGl0ZW1zYCBwcm9wZXJ0eS4gVGhlXG4gICAqIGB0ZXh0Q29udGVudGAgb2YgdGhvc2UgaXRlbXMgd2lsbCBiZSB1c2VkIGZvciBwdXJwb3NlcyBvZiBwcmVmaXggbWF0Y2hpbmcuXG4gICAqL1xuICBjbGFzcyBLZXlib2FyZFByZWZpeFNlbGVjdGlvbiBleHRlbmRzIGJhc2Uge1xuXG4gICAgLy8gVE9ETzogSWYgdGhlIHNldCBvZiBpdGVtcyBpcyBjaGFuZ2VkLCByZXNldCB0aGUgcHJlZml4LlxuICAgIC8vIFtzeW1ib2xzLml0ZW1zQ2hhbmdlZF0oKSB7XG4gICAgLy8gICB0aGlzW2l0ZW1UZXh0Q29udGVudHNTeW1ib2xdID0gbnVsbDtcbiAgICAvLyAgIHJlc2V0VHlwZWRQcmVmaXgodGhpcyk7XG4gICAgLy8gfVxuXG4gICAgLy8gVE9ETzogSWYgdGhlIHNlbGVjdGlvbiBpcyBjaGFuZ2VkIGJ5IHNvbWUgb3RoZXIgbWVhbnMgKGUuZy4sIGFycm93IGtleXMpXG4gICAgLy8gb3RoZXIgdGhhbiBwcmVmaXggdHlwaW5nLCB0aGVuIHRoYXQgYWN0IHNob3VsZCByZXNldCB0aGUgcHJlZml4LlxuXG4gICAgW3N5bWJvbHMua2V5ZG93bl0oZXZlbnQpIHtcbiAgICAgIGxldCBoYW5kbGVkO1xuICAgICAgbGV0IHJlc2V0UHJlZml4ID0gdHJ1ZTtcblxuICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgIGNhc2UgODogLy8gQmFja3NwYWNlXG4gICAgICAgICAgaGFuZGxlQmFja3NwYWNlKHRoaXMpO1xuICAgICAgICAgIGhhbmRsZWQgPSB0cnVlO1xuICAgICAgICAgIHJlc2V0UHJlZml4ID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjc6IC8vIEVzY2FwZVxuICAgICAgICAgIGhhbmRsZWQgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGlmICghZXZlbnQuY3RybEtleSAmJiAhZXZlbnQubWV0YUtleSAmJiAhZXZlbnQuYWx0S2V5ICYmXG4gICAgICAgICAgICAgIGV2ZW50LndoaWNoICE9PSAzMiAvKiBTcGFjZSAqLykge1xuICAgICAgICAgICAgaGFuZGxlUGxhaW5DaGFyYWN0ZXIodGhpcywgU3RyaW5nLmZyb21DaGFyQ29kZShldmVudC53aGljaCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXNldFByZWZpeCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVzZXRQcmVmaXgpIHtcbiAgICAgICAgcmVzZXRUeXBlZFByZWZpeCh0aGlzKTtcbiAgICAgIH1cblxuICAgICAgLy8gUHJlZmVyIG1peGluIHJlc3VsdCBpZiBpdCdzIGRlZmluZWQsIG90aGVyd2lzZSB1c2UgYmFzZSByZXN1bHQuXG4gICAgICByZXR1cm4gaGFuZGxlZCB8fCAoc3VwZXJbc3ltYm9scy5rZXlkb3duXSAmJiBzdXBlcltzeW1ib2xzLmtleWRvd25dKGV2ZW50KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IHRoZSBmaXJzdCBpdGVtIHdob3NlIHRleHQgY29udGVudCBiZWdpbnMgd2l0aCB0aGUgZ2l2ZW4gcHJlZml4LlxuICAgICAqXG4gICAgICogQHBhcmFtIHByZWZpeCBbU3RyaW5nXSBUaGUgcHJlZml4IHN0cmluZyB0byBzZWFyY2ggZm9yXG4gICAgICovXG4gICAgc2VsZWN0SXRlbVdpdGhUZXh0UHJlZml4KHByZWZpeCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdEl0ZW1XaXRoVGV4dFByZWZpeCkgeyBzdXBlci5zZWxlY3RJdGVtV2l0aFRleHRQcmVmaXgocHJlZml4KTsgfVxuICAgICAgaWYgKHByZWZpeCA9PSBudWxsIHx8IHByZWZpeC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgaW5kZXggPSBnZXRJbmRleE9mSXRlbVdpdGhUZXh0UHJlZml4KHRoaXMsIHByZWZpeCk7XG4gICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBpbmRleDtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBLZXlib2FyZFByZWZpeFNlbGVjdGlvbjtcbn07XG5cblxuLy8gVGltZSBpbiBtaWxsaXNlY29uZHMgYWZ0ZXIgd2hpY2ggdGhlIHVzZXIgaXMgY29uc2lkZXJlZCB0byBoYXZlIHN0b3BwZWRcbi8vIHR5cGluZy5cbmNvbnN0IFBSRUZJWF9USU1FT1VUX0RVUkFUSU9OID0gMTAwMDtcblxuXG4vLyBSZXR1cm4gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBpdGVtIHdpdGggdGhlIGdpdmVuIHByZWZpeCwgZWxzZSAtMS5cbmZ1bmN0aW9uIGdldEluZGV4T2ZJdGVtV2l0aFRleHRQcmVmaXgoZWxlbWVudCwgcHJlZml4KSB7XG4gIGNvbnN0IGl0ZW1UZXh0Q29udGVudHMgPSBnZXRJdGVtVGV4dENvbnRlbnRzKGVsZW1lbnQpO1xuICBjb25zdCBwcmVmaXhMZW5ndGggPSBwcmVmaXgubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1UZXh0Q29udGVudHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBpdGVtVGV4dENvbnRlbnQgPSBpdGVtVGV4dENvbnRlbnRzW2ldO1xuICAgIGlmIChpdGVtVGV4dENvbnRlbnQuc3Vic3RyKDAsIHByZWZpeExlbmd0aCkgPT09IHByZWZpeCkge1xuICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxuLy8gUmV0dXJuIGFuIGFycmF5IG9mIHRoZSB0ZXh0IGNvbnRlbnQgKGluIGxvd2VyY2FzZSkgb2YgYWxsIGl0ZW1zLlxuLy8gQ2FjaGUgdGhlc2UgcmVzdWx0cy5cbmZ1bmN0aW9uIGdldEl0ZW1UZXh0Q29udGVudHMoZWxlbWVudCkge1xuICBpZiAoIWVsZW1lbnRbaXRlbVRleHRDb250ZW50c1N5bWJvbF0pIHtcbiAgICBjb25zdCBpdGVtcyA9IGVsZW1lbnQuaXRlbXM7XG4gICAgZWxlbWVudFtpdGVtVGV4dENvbnRlbnRzU3ltYm9sXSA9IGl0ZW1zLm1hcChjaGlsZCA9PiB7XG4gICAgICBjb25zdCB0ZXh0ID0gY2hpbGQudGV4dENvbnRlbnQgfHwgY2hpbGQuYWx0O1xuICAgICAgcmV0dXJuIHRleHQudG9Mb3dlckNhc2UoKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gZWxlbWVudFtpdGVtVGV4dENvbnRlbnRzU3ltYm9sXTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlQmFja3NwYWNlKGVsZW1lbnQpIHtcbiAgY29uc3QgbGVuZ3RoID0gZWxlbWVudFt0eXBlZFByZWZpeFN5bWJvbF0gPyBlbGVtZW50W3R5cGVkUHJlZml4U3ltYm9sXS5sZW5ndGggOiAwO1xuICBpZiAobGVuZ3RoID4gMCkge1xuICAgIGVsZW1lbnRbdHlwZWRQcmVmaXhTeW1ib2xdID0gZWxlbWVudFt0eXBlZFByZWZpeFN5bWJvbF0uc3Vic3RyKDAsIGxlbmd0aCAtIDEpO1xuICB9XG4gIGVsZW1lbnQuc2VsZWN0SXRlbVdpdGhUZXh0UHJlZml4KGVsZW1lbnRbdHlwZWRQcmVmaXhTeW1ib2xdKTtcbiAgc2V0UHJlZml4VGltZW91dChlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlUGxhaW5DaGFyYWN0ZXIoZWxlbWVudCwgY2hhcikge1xuICBjb25zdCBwcmVmaXggPSBlbGVtZW50W3R5cGVkUHJlZml4U3ltYm9sXSB8fCAnJztcbiAgZWxlbWVudFt0eXBlZFByZWZpeFN5bWJvbF0gPSBwcmVmaXggKyBjaGFyLnRvTG93ZXJDYXNlKCk7XG4gIGVsZW1lbnQuc2VsZWN0SXRlbVdpdGhUZXh0UHJlZml4KGVsZW1lbnRbdHlwZWRQcmVmaXhTeW1ib2xdKTtcbiAgc2V0UHJlZml4VGltZW91dChlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gcmVzZXRQcmVmaXhUaW1lb3V0KGVsZW1lbnQpIHtcbiAgaWYgKGVsZW1lbnRbcHJlZml4VGltZW91dFN5bWJvbF0pIHtcbiAgICBjbGVhclRpbWVvdXQoZWxlbWVudFtwcmVmaXhUaW1lb3V0U3ltYm9sXSk7XG4gICAgZWxlbWVudFtwcmVmaXhUaW1lb3V0U3ltYm9sXSA9IGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlc2V0VHlwZWRQcmVmaXgoZWxlbWVudCkge1xuICBlbGVtZW50W3R5cGVkUHJlZml4U3ltYm9sXSA9ICcnO1xuICByZXNldFByZWZpeFRpbWVvdXQoZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIHNldFByZWZpeFRpbWVvdXQoZWxlbWVudCkge1xuICByZXNldFByZWZpeFRpbWVvdXQoZWxlbWVudCk7XG4gIGVsZW1lbnRbcHJlZml4VGltZW91dFN5bWJvbF0gPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICByZXNldFR5cGVkUHJlZml4KGVsZW1lbnQpO1xuICB9LCBQUkVGSVhfVElNRU9VVF9EVVJBVElPTik7XG59XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4vY3JlYXRlU3ltYm9sJztcbmltcG9ydCBzYWZlQXR0cmlidXRlcyBmcm9tICcuL3NhZmVBdHRyaWJ1dGVzJztcbmltcG9ydCBzeW1ib2xzIGZyb20gJy4vc3ltYm9scyc7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IGNsb3NlZFN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnY2xvc2VkJyk7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBPcGVuQ2xvc2UuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBhZGRzIGNsb3NlL29wZW4gc2VtYW50aWNzLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGRvZXMgbm90IHByb2R1Y2UgYW55IHVzZXItdmlzaWJsZSBlZmZlY3RzLiBJbnN0ZWFkIGl0IGFwcGxpZXNcbiAgICogYSBgYmFzaWMtY2xvc2VkYCBDU1MgY2xhc3MgdG8gdGhlIGNvbXBvbmVudCBob3N0IGlmIHRoZSBob3N0IGlzXG4gICAqIGNsb3NlZCwgYW5kIGEgYGJhc2ljLW9wZW5lZGAgY2xhc3MgaWYgb3BlbmVkLiBJdCBhbHNvIGludm9rZXMgYSBgcmVuZGVyYFxuICAgKiBmdW5jdGlvbiB0aGF0IGNhbiBiZSBvdmVycmlkZGVuIHRvIGFwcGx5IGN1c3RvbSBlZmZlY3RzLlxuICAgKi9cbiAgY2xhc3MgT3BlbkNsb3NlIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICAvLyBTZXQgZGVmYXVsdHMuXG4gICAgICBpZiAodHlwZW9mIHRoaXMuY2xvc2VkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLmNsb3NlZCA9IHRoaXNbc3ltYm9scy5kZWZhdWx0c10uY2xvc2VkO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsb3NlIHRoZSBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gc2V0dGluZyB0aGUgYGNsb3NlZGAgcHJvcGVydHkgdG8gdHJ1ZS5cbiAgICAgKi9cbiAgICBjbG9zZSgpIHtcbiAgICAgIHRoaXMuY2xvc2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHRoZSBjb21wb25lbnQgaXMgY3VyZW50bHkgY2xvc2VkLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cbiAgICBnZXQgY2xvc2VkKCkge1xuICAgICAgcmV0dXJuIHRoaXNbY2xvc2VkU3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IGNsb3NlZCh2YWx1ZSkge1xuICAgICAgY29uc3QgcHJldmlvdXNDbG9zZWQgPSB0aGlzW2Nsb3NlZFN5bWJvbF07XG4gICAgICB0aGlzW2Nsb3NlZFN5bWJvbF0gPSB2YWx1ZTtcbiAgICAgIGlmICgnY2xvc2VkJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5jbG9zZWQgPSB2YWx1ZTsgfVxuICAgICAgaWYgKHZhbHVlICE9PSBwcmV2aW91c0Nsb3NlZCkge1xuICAgICAgICB0aGlzLnJlbmRlcih2YWx1ZSk7XG5cbiAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2Nsb3NlZC1jaGFuZ2VkJyk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2spIHsgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTsgfVxuICAgICAgc2FmZUF0dHJpYnV0ZXMuY29ubmVjdGVkKHRoaXMpO1xuICAgICAgdGhpcy5yZW5kZXIodGhpcy5jbG9zZWQpO1xuICAgIH1cblxuICAgIGdldCBbc3ltYm9scy5kZWZhdWx0c10oKSB7XG4gICAgICBjb25zdCBkZWZhdWx0cyA9IHN1cGVyW3N5bWJvbHMuZGVmYXVsdHNdIHx8IHt9O1xuICAgICAgZGVmYXVsdHMuY2xvc2VkID0gZmFsc2U7XG4gICAgICByZXR1cm4gZGVmYXVsdHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3BlbiB0aGUgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIHNldHRpbmcgdGhlIGBjbG9zZWRgIHByb3BlcnR5IHRvIGZhbHNlLlxuICAgICAqL1xuICAgIG9wZW4oKSB7XG4gICAgICB0aGlzLmNsb3NlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm0gY3VzdG9tIHJlbmRlcmluZyBvZiB0aGUgY2xvc2Uvb3BlbiB0cmFuc2l0aW9uLlxuICAgICAqXG4gICAgICogWW91IGNhbiBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwZXJmb3JtIGN1c3RvbSBlZmZlY3RzLiBJZiB5b3UgZG8gc28sXG4gICAgICogYmUgc3VyZSB0byBpbnZva2UgYHN1cGVyKClgIGluIHlvdXIgaW1wbGVtZW50YXRpb24gdG8gZ2V0IHRoZSBiYXNlbGluZVxuICAgICAqIGJlaGF2aW9yLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtib29sZWFufSBjbG9zaW5nIC0gVHJ1ZSBpZiB0aGUgY29tcG9uZW50IGlzIGJlaW5nIGNsb3NlZCxcbiAgICAgKiAgICAgICAgZmFsc2UgaWYgaXQncyBiZWluZyBvcGVuZWQuXG4gICAgICovXG4gICAgcmVuZGVyKGNsb3NpbmcpIHtcbiAgICAgIGlmIChzdXBlci5yZW5kZXIpIHsgc3VwZXIucmVuZGVyKCk7IH1cbiAgICAgIHNhZmVBdHRyaWJ1dGVzLnRvZ2dsZUNsYXNzKHRoaXMsICdiYXNpYy1jbG9zZWQnLCBjbG9zaW5nKTtcbiAgICAgIHNhZmVBdHRyaWJ1dGVzLnRvZ2dsZUNsYXNzKHRoaXMsICdiYXNpYy1vcGVuZWQnLCAhY2xvc2luZyk7XG4gICAgICBzYWZlQXR0cmlidXRlcy5zZXRBdHRyaWJ1dGUodGhpcywgJ2FyaWEtZXhwYW5kZWQnLCAhY2xvc2luZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlIHRoZSBjb21wb25lbnQncyBvcGVuL2Nsb3NlZCBzdGF0ZS5cbiAgICAgKi9cbiAgICB0b2dnbGUoKSB7XG4gICAgICB0aGlzLmNsb3NlZCA9ICF0aGlzLmNsb3NlZDtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBPcGVuQ2xvc2U7XG59O1xuIiwiaW1wb3J0IHJlbmRlckFycmF5QXNFbGVtZW50cyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9yZW5kZXJBcnJheUFzRWxlbWVudHMnO1xuaW1wb3J0IHN5bWJvbHMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvc3ltYm9scyc7XG5pbXBvcnQgdG9nZ2xlQ2xhc3MgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvdG9nZ2xlQ2xhc3MnO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggUGFnZURvdHMuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBUZW1wbGF0ZSBtaXhpbiB3aGljaCBhZGRzIHNtYWxsIGRvdHMgdG8gc2hvdyB0aGUgbnVtYmVyIG9mIGl0ZW1zIGFuZCBsZXRcbiAgICogdGhlIHVzZXIgc2VsZWN0IGEgc3BlY2lmaWMgaXRlbS5cbiAgICpcbiAgICogWW91IGNhbiBzZWUgYSBbbGl2ZSBkZW1vXShodHRwOi8vYmFzaWN3ZWJjb21wb25lbnRzLm9yZy9iYXNpYy13ZWItY29tcG9uZW50cy9wYWNrYWdlcy9iYXNpYy1wYWdlLWRvdHMuaHRtbClcbiAgICogb2YgdGhpcyBjb21wb25lbnQgYXBwbGllZCB0byBhIGNhcm91c2VsLlxuICAgKlxuICAgKiBUaGVyZSB3aWxsIGJlIG9uZSBkb3QgZm9yIGVhY2ggaXRlbSwgYW5kIHRoZSBkb3QgZm9yIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWRcbiAgICogaXRlbSB3aWxsIGJlIHNob3duIHNlbGVjdGVkLlxuICAgKlxuICAgKiBUeXBpY2FsIHVzYWdlOlxuICAgKlxuICAgKiAgICAgY2xhc3MgQ2Fyb3VzZWxXaXRoRG90cyBleHRlbmRzIFBhZ2VEb3RzTWl4aW4oQ2Fyb3VzZWwpIHt9XG4gICAqICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ2Nhcm91c2VsLXdpdGgtZG90cycsIENhcm91c2VsV2l0aERvdHMpO1xuICAgKlxuICAgKiBBbHRob3VnaCB0aGUgZG90cyBhcmUgcXVpdGUgc21hbGwgYnkgZGVmYXVsdCwgY2xpY2tpbmcvdGFwcGluZyBhIGRvdCB3aWxsXG4gICAqIHdpbGwgc2VsZWN0IHRoZSBjb3JyZXNwb25kaW5nIGxpc3QgaXRlbS5cbiAgICovXG4gIGNsYXNzIFBhZ2VEb3RzIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG5cbiAgICAgIHRoaXMuJC5kb3RzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICBjb25zdCBkb3QgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGNvbnN0IGRvdEluZGV4ID0gdGhpcy5kb3RzLmluZGV4T2YoZG90KTtcbiAgICAgICAgaWYgKGRvdEluZGV4ID49IDApIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBkb3RJbmRleDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0IGRvdHMoKSB7XG4gICAgICByZXR1cm4gW10uc2xpY2UuY2FsbCh0aGlzLiQuZG90cy5xdWVyeVNlbGVjdG9yQWxsKCcuZG90JykpO1xuICAgIH1cblxuICAgIFtzeW1ib2xzLml0ZW1zQ2hhbmdlZF0oKSB7XG4gICAgICBpZiAoc3VwZXJbc3ltYm9scy5pdGVtc0NoYW5nZWRdKSB7IHN1cGVyW3N5bWJvbHMuaXRlbXNDaGFuZ2VkXSgpOyB9XG4gICAgICByZW5kZXJBcnJheUFzRWxlbWVudHModGhpcy5pdGVtcywgdGhpcy4kLmRvdHMsIChpdGVtLCBlbGVtZW50KSA9PiB7XG4gICAgICAgIC8vIFdlIGRvbid0IHVzZSB0aGUgaXRlbSBwYXJhbWV0ZXIsIGJlY2F1c2UgYW55IGl0ZW0gd2lsbCBwcm9kdWNlIGFuXG4gICAgICAgIC8vIGlkZW50aWNhbCBjb3JyZXNwb25kaW5nIGRvdC5cbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZG90Jyk7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzdHlsZS1zY29wZScpO1xuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYmFzaWMtcGFnZS1kb3RzJyk7XG4gICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnbm9uZScpO1xuICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJlZnJlc2hEb3RzKHRoaXMpO1xuICAgIH1cblxuICAgIFtzeW1ib2xzLml0ZW1TZWxlY3RlZF0oaXRlbSwgc2VsZWN0ZWQpIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLml0ZW1TZWxlY3RlZF0pIHsgc3VwZXJbc3ltYm9scy5pdGVtU2VsZWN0ZWRdKGl0ZW0sIHNlbGVjdGVkKTsgfVxuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLml0ZW1zLmluZGV4T2YoaXRlbSk7XG4gICAgICAvLyBTZWUgaWYgdGhlIGNvcnJlc3BvbmRpbmcgZG90IGhhcyBhbHJlYWR5IGJlZW4gY3JlYXRlZC5cbiAgICAgIC8vIElmIG5vdCwgdGhlIGNvcnJlY3QgZG90IHdpbGwgYmUgc2VsZWN0ZWQgd2hlbiBpdCBnZXRzIGNyZWF0ZWQuXG4gICAgICBjb25zdCBkb3RzID0gdGhpcy5kb3RzO1xuICAgICAgaWYgKGRvdHMgJiYgZG90cy5sZW5ndGggPiBpbmRleCkge1xuICAgICAgICBjb25zdCBkb3QgPSB0aGlzLmRvdHNbaW5kZXhdO1xuICAgICAgICBpZiAoZG90KSB7XG4gICAgICAgICAgdG9nZ2xlQ2xhc3MoZG90LCAnc2VsZWN0ZWQnLCBzZWxlY3RlZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGlzdGFuY2UgdGhlIHVzZXIgaGFzIG1vdmVkIHRoZSBmaXJzdCB0b3VjaHBvaW50IHNpbmNlIHRoZSBiZWdpbm5pbmdcbiAgICAgKiBvZiBhIGRyYWcsIGV4cHJlc3NlZCBhcyBhIGZyYWN0aW9uIG9mIHRoZSBlbGVtZW50J3Mgd2lkdGguXG4gICAgICpcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0ZWRGcmFjdGlvbigpIHtcbiAgICAgIHJldHVybiBzdXBlci5zZWxlY3RlZEZyYWN0aW9uO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0ZWRGcmFjdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKCdzZWxlY3RlZEZyYWN0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEZyYWN0aW9uID0gdmFsdWU7IH1cbiAgICAgIHJlbmRlclRyYW5zaXRpb24odGhpcywgdGhpcy5zZWxlY3RlZEluZGV4LCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdGVkSW5kZXgoKSB7XG4gICAgICByZXR1cm4gc3VwZXIuc2VsZWN0ZWRJbmRleDtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGVkSW5kZXgoaW5kZXgpIHtcbiAgICAgIGlmICgnc2VsZWN0ZWRJbmRleCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJbmRleCA9IGluZGV4OyB9XG4gICAgICByZWZyZXNoRG90cyh0aGlzKTtcbiAgICB9XG5cbiAgICBnZXQgW3N5bWJvbHMudGVtcGxhdGVdKCkge1xuICAgICAgY29uc3QgYmFzZVRlbXBsYXRlID0gc3VwZXJbc3ltYm9scy50ZW1wbGF0ZV0gfHwgJyc7XG4gICAgICByZXR1cm4gYFxuICAgICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICAjZG90cyB7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIH1cblxuICAgICAgICAjZG90TmF2aWdhdGlvbkNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgLXdlYmtpdC1mbGV4OiAxO1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAjY29udGFpbmVyIDo6c2xvdHRlZCgqKSB7XG4gICAgICAgICAgLXdlYmtpdC1mbGV4OiAxO1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgIH1cblxuICAgICAgICAuZG90IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBoZWlnaHQ6IDhweDtcbiAgICAgICAgICBtYXJnaW46IDdweCA1cHg7XG4gICAgICAgICAgb3BhY2l0eTogMC40O1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzIGJveC1zaGFkb3cgMC4ycztcbiAgICAgICAgICB3aWR0aDogOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmRvdDpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMXB4IDNweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gICAgICAgIH1cblxuICAgICAgICAuZG90LnNlbGVjdGVkIHtcbiAgICAgICAgICBvcGFjaXR5OiAwLjk1O1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgLmRvdCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgPC9zdHlsZT5cblxuICAgICAgICA8ZGl2IGlkPVwiZG90c1wiIHJvbGU9XCJub25lXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJkb3ROYXZpZ2F0aW9uQ29udGFpbmVyXCIgcm9sZT1cIm5vbmVcIj5cbiAgICAgICAgICAke2Jhc2VUZW1wbGF0ZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICBgO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIFBhZ2VEb3RzO1xufTtcblxuXG4vLyBSZXR1cm4gdGhlIGluZGV4LCBlbnN1cmluZyBpdCBzdGF5cyBiZXR3ZWVuIDAgYW5kIHRoZSBnaXZlbiBsZW5ndGguXG5mdW5jdGlvbiBrZWVwSW5kZXhXaXRoaW5Cb3VuZHMobGVuZ3RoLCBpbmRleCkge1xuICAvLyBIYW5kbGUgcG9zc2liaWxpdHkgb2YgbmVnYXRpdmUgbW9kLlxuICAvLyBTZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTg2MTgyNTAvNzY0NzJcbiAgcmV0dXJuICgoaW5kZXggJSBsZW5ndGgpICsgbGVuZ3RoKSAlIGxlbmd0aDtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVHJhbnNpdGlvbihlbGVtZW50LCBzZWxlY3RlZEluZGV4LCBzZWxlY3RlZEZyYWN0aW9uKSB7XG4gIGNvbnN0IGRvdHMgPSBlbGVtZW50LmRvdHM7XG4gIGlmICghZG90cyB8fCBkb3RzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBkb3RDb3VudCA9IGRvdHMubGVuZ3RoO1xuICBjb25zdCBvcGFjaXR5TWluaW11bSA9IDAuNDtcbiAgY29uc3Qgb3BhY2l0eU1heGltdW0gPSAwLjk1O1xuICBjb25zdCBvcGFjaXR5UmFuZ2UgPSBvcGFjaXR5TWF4aW11bSAtIG9wYWNpdHlNaW5pbXVtO1xuICBjb25zdCBmcmFjdGlvbmFsSW5kZXggPSBzZWxlY3RlZEluZGV4ICsgc2VsZWN0ZWRGcmFjdGlvbjtcbiAgY29uc3QgbGVmdEluZGV4ID0gTWF0aC5mbG9vcihmcmFjdGlvbmFsSW5kZXgpO1xuICBjb25zdCByaWdodEluZGV4ID0gTWF0aC5jZWlsKGZyYWN0aW9uYWxJbmRleCk7XG4gIGNvbnN0IHNlbGVjdGlvbldyYXBzID0gZWxlbWVudC5zZWxlY3Rpb25XcmFwcztcbiAgbGV0IGF3YXlJbmRleCA9IHNlbGVjdGVkRnJhY3Rpb24gPj0gMCA/IGxlZnRJbmRleCA6IHJpZ2h0SW5kZXg7XG4gIGxldCB0b3dhcmRJbmRleCA9IHNlbGVjdGVkRnJhY3Rpb24gPj0gMCA/IHJpZ2h0SW5kZXggOiBsZWZ0SW5kZXg7XG4gIGlmIChzZWxlY3Rpb25XcmFwcykge1xuICAgIGF3YXlJbmRleCA9IGtlZXBJbmRleFdpdGhpbkJvdW5kcyhkb3RDb3VudCwgYXdheUluZGV4KTtcbiAgICB0b3dhcmRJbmRleCA9IGtlZXBJbmRleFdpdGhpbkJvdW5kcyhkb3RDb3VudCwgdG93YXJkSW5kZXgpO1xuICB9XG4gIC8vIFN0dXBpZCBJRSBkb2Vzbid0IGhhdmUgTWF0aC50cnVuYy5cbiAgLy8gY29uc3QgdHJ1bmNhdGVkU2VsZWN0ZWRGcmFjdGlvbiA9IE1hdGgudHJ1bmMoc2VsZWN0ZWRGcmFjdGlvbik7XG4gIGNvbnN0IHRydW5jYXRlZFNlbGVjdGVkRnJhY3Rpb24gPSBzZWxlY3RlZEZyYWN0aW9uIDwgMCA/IE1hdGguY2VpbChzZWxlY3RlZEZyYWN0aW9uKSA6IE1hdGguZmxvb3Ioc2VsZWN0ZWRGcmFjdGlvbik7XG4gIGNvbnN0IHByb2dyZXNzID0gc2VsZWN0ZWRGcmFjdGlvbiAtIHRydW5jYXRlZFNlbGVjdGVkRnJhY3Rpb247XG4gIGNvbnN0IG9wYWNpdHlQcm9ncmVzc1Rocm91Z2hSYW5nZSA9IE1hdGguYWJzKHByb2dyZXNzKSAqIG9wYWNpdHlSYW5nZTtcbiAgZG90cy5mb3JFYWNoKChkb3QsIGluZGV4KSA9PiB7XG4gICAgbGV0IGRvdE9wYWNpdHk7XG4gICAgaWYgKHNlbGVjdGVkRnJhY3Rpb24gPT09IDApIHtcbiAgICAgIC8vIFJlbW92ZSBleHBsaWNpdCBvcGFjaXR5IGFuZCByZWx5IG9uIHN0eWxpbmcuXG4gICAgICBkb3RPcGFjaXR5ID0gJyc7XG4gICAgfSBlbHNlIGlmIChpbmRleCA9PT0gYXdheUluZGV4KSB7XG4gICAgICBkb3RPcGFjaXR5ID0gb3BhY2l0eU1heGltdW0gLSBvcGFjaXR5UHJvZ3Jlc3NUaHJvdWdoUmFuZ2U7XG4gICAgfSBlbHNlIGlmIChpbmRleCA9PT0gdG93YXJkSW5kZXgpIHtcbiAgICAgIGRvdE9wYWNpdHkgPSBvcGFjaXR5TWluaW11bSArIG9wYWNpdHlQcm9ncmVzc1Rocm91Z2hSYW5nZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG90T3BhY2l0eSA9IG9wYWNpdHlNaW5pbXVtO1xuICAgIH1cbiAgICBkb3Quc3R5bGUub3BhY2l0eSA9IGRvdE9wYWNpdHk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZWZyZXNoRG90cyhlbGVtZW50KSB7XG4gIGNvbnN0IHNlbGVjdGVkSW5kZXggPSBlbGVtZW50LnNlbGVjdGVkSW5kZXg7XG4gIGVsZW1lbnQuZG90cy5mb3JFYWNoKChkb3QsIGkpID0+IHtcbiAgICB0b2dnbGVDbGFzcyhkb3QsICdzZWxlY3RlZCcsIGkgPT09IHNlbGVjdGVkSW5kZXgpO1xuICB9KTtcbn1cbiIsImltcG9ydCBzYWZlQXR0cmlidXRlcyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9zYWZlQXR0cmlidXRlcyc7XG5pbXBvcnQgc3ltYm9scyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9zeW1ib2xzJztcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFBsYXlDb250cm9scy4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIFRlbXBsYXRlIG1peGluIHdoaWNoIGFkZHMgYnV0dG9ucyBmb3IgbWFuYWdpbmcgcGxheWJhY2sgb2YgYSBzbGlkZXNob3csXG4gICAqIGF1ZGlvIHBsYXlsaXN0LCBldGMuXG4gICAqXG4gICAqIFR5cGljYWwgdXNhZ2U6XG4gICAqXG4gICAqICAgICBjbGFzcyBTbGlkZXNob3dXaXRoQ29udHJvbHMgZXh0ZW5kcyBQbGF5Q29udHJvbHNNaXhpbihTbGlkZXNob3cpIHt9XG4gICAqICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ3NsaWRlc2hvdy13aXRoLWNvbnRyb2xzJywgU2xpZGVzaG93V2l0aENvbnRyb2xzKTtcbiAgICpcbiAgICovXG4gIGNsYXNzIFBsYXlDb250cm9scyBleHRlbmRzIGJhc2Uge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgdGhpcy4kLnByZXZpb3VzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICB0aGlzLnNlbGVjdFByZXZpb3VzKCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuJC5wbGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICB0aGlzLnBsYXlpbmcgPSAhdGhpcy5wbGF5aW5nO1xuICAgICAgfSk7XG4gICAgICB0aGlzLiQubmV4dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgdGhpcy5zZWxlY3ROZXh0KCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jb25uZWN0ZWRDYWxsYmFjaykgeyBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpOyB9XG4gICAgICBzYWZlQXR0cmlidXRlcy5jb25uZWN0ZWQodGhpcyk7XG4gICAgfVxuXG4gICAgW3N5bWJvbHMua2V5ZG93bl0oZXZlbnQpIHtcbiAgICAgIGxldCBoYW5kbGVkO1xuXG4gICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgY2FzZSAzMjogLyogU3BhY2UgKi9cbiAgICAgICAgICB0aGlzLnBsYXlpbmcgPSAhdGhpcy5wbGF5aW5nO1xuICAgICAgICAgIGhhbmRsZWQgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICAvLyBQcmVmZXIgbWl4aW4gcmVzdWx0IGlmIGl0J3MgZGVmaW5lZCwgb3RoZXJ3aXNlIHVzZSBiYXNlIHJlc3VsdC5cbiAgICAgIHJldHVybiBoYW5kbGVkIHx8IChzdXBlcltzeW1ib2xzLmtleWRvd25dICYmIHN1cGVyW3N5bWJvbHMua2V5ZG93bl0oZXZlbnQpKTtcbiAgICB9XG5cbiAgICBnZXQgcGxheWluZygpIHtcbiAgICAgIHJldHVybiBzdXBlci5wbGF5aW5nO1xuICAgIH1cbiAgICBzZXQgcGxheWluZyh2YWx1ZSkge1xuICAgICAgaWYgKCdwbGF5aW5nJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5wbGF5aW5nID0gdmFsdWU7IH1cbiAgICAgIHNhZmVBdHRyaWJ1dGVzLnRvZ2dsZUNsYXNzKHRoaXMsICdwbGF5aW5nJywgdmFsdWUpO1xuICAgIH1cblxuICAgIGdldCBbc3ltYm9scy50ZW1wbGF0ZV0oKSB7XG4gICAgICBjb25zdCBiYXNlVGVtcGxhdGUgPSBzdXBlcltzeW1ib2xzLnRlbXBsYXRlXSB8fCAnJztcbiAgICAgIHJldHVybiBgXG4gICAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgICNidXR0b25zIHtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBmaWxsOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBmaWxsIDAuNXM7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgfVxuICAgICAgICA6aG9zdCg6aG92ZXIpIGJ1dHRvbiB7XG4gICAgICAgICAgZmlsbDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgZmlsbDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246YWN0aXZlIHtcbiAgICAgICAgICBmaWxsOiB3aGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIH1cbiAgICAgICAgI3BsYXlCdXR0b24gLmljb24ge1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KC5wbGF5aW5nKSAucGF1c2VkQ29udHJvbCB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICA6aG9zdCg6bm90KC5wbGF5aW5nKSkgLnBsYXlpbmdDb250cm9sIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgI2NvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgLXdlYmtpdC1mbGV4OiAxO1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgIH1cblxuICAgICAgICAjY29udGFpbmVyIDo6c2xvdHRlZCgqKSB7XG4gICAgICAgICAgLXdlYmtpdC1mbGV4OiAxO1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgIH1cbiAgICAgICAgPC9zdHlsZT5cblxuICAgICAgICA8ZGl2IGlkPVwiYnV0dG9uc1wiPlxuICAgICAgICAgIDxidXR0b24gaWQ9XCJwcmV2aW91c0J1dHRvblwiPlxuICAgICAgICAgICAgPHN2ZyBjbGFzcz1cImljb25cIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkIG1lZXRcIj5cbiAgICAgICAgICAgICAgPGcgaWQ9XCJza2lwLXByZXZpb3VzXCI+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk02IDZoMnYxMkg2em0zLjUgNmw4LjUgNlY2elwiLz5cbiAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBpZD1cInBsYXlCdXR0b25cIj5cbiAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJpY29uIHBsYXlpbmdDb250cm9sXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBtZWV0XCI+XG4gICAgICAgICAgICAgIDxnIGlkPVwicGF1c2UtY2lyY2xlLW91dGxpbmVcIj5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTkgMTZoMlY4SDl2OHptMy0xNEM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMCAxOGMtNC40MSAwLTgtMy41OS04LThzMy41OS04IDgtOCA4IDMuNTkgOCA4LTMuNTkgOC04IDh6bTEtNGgyVjhoLTJ2OHpcIj48L3BhdGg+XG4gICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPHN2ZyBjbGFzcz1cImljb24gcGF1c2VkQ29udHJvbFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWQgbWVldFwiPlxuICAgICAgICAgICAgICA8ZyBpZD1cInBsYXktY2lyY2xlLW91dGxpbmVcIj5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEwIDE2LjVsNi00LjUtNi00LjV2OXpNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMCAxOGMtNC40MSAwLTgtMy41OS04LThzMy41OS04IDgtOCA4IDMuNTkgOCA4LTMuNTkgOC04IDh6XCI+PC9wYXRoPlxuICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGlkPVwibmV4dEJ1dHRvblwiPlxuICAgICAgICAgICAgPHN2ZyBjbGFzcz1cImljb25cIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkIG1lZXRcIj5cbiAgICAgICAgICAgICAgPGcgaWQ9XCJza2lwLW5leHRcIj5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTYgMThsOC41LTZMNiA2djEyek0xNiA2djEyaDJWNmgtMnpcIi8+XG4gICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGlkPVwiY29udGFpbmVyXCIgcm9sZT1cIm5vbmVcIj5cbiAgICAgICAgICAke2Jhc2VUZW1wbGF0ZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICBgO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIFBsYXlDb250cm9scztcbn07XG4iLCIvKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFNlbGVjdGVkSXRlbVRleHRWYWx1ZS4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIGRlZmluZXMgYSBgdmFsdWVgIHByb3BlcnR5IHRoYXQgcmVmbGVjdHMgdGhlIHRleHQgY29udGVudCBvZiBhXG4gICAqIHNlbGVjdGVkIGl0ZW0uXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhpc3RzIGZvciBsaXN0LWxpa2UgY29tcG9uZW50cyB0aGF0IHdhbnQgdG8gcHJvdmlkZSBhIG1vcmVcbiAgICogY29udmVuaWVudCB3YXkgdG8gZ2V0L3NldCB0aGUgc2VsZWN0ZWQgaXRlbSB1c2luZyB0ZXh0LlxuICAgKlxuICAgKiBUaGlzIG1peGluIGV4cGVjdHMgYSBjb21wb25lbnQgdG8gcHJvdmlkZSBhbiBgaXRlbXNgIGFycmF5IG9mIGFsbCBlbGVtZW50c1xuICAgKiBpbiB0aGUgbGlzdC4gQSBzdGFuZGFyZCB3YXkgdG8gZG8gdGhhdCB3aXRoIGlzXG4gICAqIFtDb250ZW50SXRlbXNNaXhpbl0oQ29udGVudEl0ZW1zTWl4aW4ubWQpLiBUaGlzIGFsc28gZXhwZWN0cyB0aGUgZGVmaW5pdGlvblxuICAgKiBvZiBgc2VsZWN0ZWRJbmRleGAgYW5kIGBzZWxlY3RlZEl0ZW1gIHByb3BlcnRpZXMsIHdoaWNoIGNhbiBiZSBvYnRhaW5lZFxuICAgKiBmcm9tIFtTaW5nbGVTZWxlY3Rpb25NaXhpbl0oU2luZ2xlU2VsZWN0aW9uTWl4aW4ubWQpLlxuICAgKi9cbiAgY2xhc3MgU2VsZWN0ZWRJdGVtVGV4dFZhbHVlIGV4dGVuZHMgYmFzZSB7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGV4dCBjb250ZW50IG9mIHRoZSBzZWxlY3RlZCBpdGVtLlxuICAgICAqXG4gICAgICogU2V0dGluZyB0aGlzIHZhbHVlIHRvIGEgc3RyaW5nIHdpbGwgYXR0ZW1wdCB0byBzZWxlY3QgdGhlIGZpcnN0IGxpc3QgaXRlbVxuICAgICAqIHdob3NlIHRleHQgY29udGVudCBtYXRjaCB0aGF0IHN0cmluZy4gU2V0dGluZyB0aGlzIHRvIGEgc3RyaW5nIG5vdCBtYXRjaGluZ1xuICAgICAqIGFueSBsaXN0IGl0ZW0gd2lsbCByZXN1bHQgaW4gbm8gc2VsZWN0aW9uLlxuICAgICAqXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXQgdmFsdWUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEl0ZW0gPT0gbnVsbCB8fCB0aGlzLnNlbGVjdGVkSXRlbS50ZXh0Q29udGVudCA9PSBudWxsID9cbiAgICAgICAgJycgOlxuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbS50ZXh0Q29udGVudDtcbiAgICB9XG4gICAgc2V0IHZhbHVlKHRleHQpIHtcblxuICAgICAgY29uc3QgY3VycmVudEluZGV4ID0gdGhpcy5zZWxlY3RlZEluZGV4O1xuICAgICAgbGV0IG5ld0luZGV4ID0gLTE7IC8vIEFzc3VtZSB3ZSB3b24ndCBmaW5kIHRoZSB0ZXh0LlxuXG4gICAgICAvLyBGaW5kIHRoZSBpdGVtIHdpdGggdGhlIGluZGljYXRlZCB0ZXh0LlxuICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLml0ZW1zO1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IGl0ZW1zLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpdGVtc1tpXS50ZXh0Q29udGVudCA9PT0gdGV4dCkge1xuICAgICAgICAgIG5ld0luZGV4ID0gaTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobmV3SW5kZXggIT09IGN1cnJlbnRJbmRleCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBuZXdJbmRleDtcbiAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3ZhbHVlLWNoYW5nZWQnKTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gU2VsZWN0ZWRJdGVtVGV4dFZhbHVlO1xufTtcbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi9jcmVhdGVTeW1ib2wnO1xuaW1wb3J0IEZyYWN0aW9uYWxTZWxlY3Rpb25NaXhpbiBmcm9tICcuL0ZyYWN0aW9uYWxTZWxlY3Rpb25NaXhpbic7XG5pbXBvcnQgc3ltYm9scyBmcm9tICcuL3N5bWJvbHMnO1xuXG5cbi8vIFN5bWJvbHMgZm9yIHByaXZhdGUgZGF0YSBtZW1iZXJzIG9uIGFuIGVsZW1lbnQuXG5jb25zdCBhbmltYXRpb25TeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2FuaW1hdGlvbicpO1xuY29uc3QgZHJhZ2dpbmdTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2RyYWdnaW5nJyk7XG5jb25zdCBsYXN0QW5pbWF0aW9uU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdsYXN0QW5pbWF0aW9uJyk7XG5jb25zdCBwbGF5aW5nQW5pbWF0aW9uU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdhbmltYXRpbmdTZWxlY3Rpb24nKTtcbmNvbnN0IHByZXZpb3VzU2VsZWN0aW9uU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdwcmV2aW91c1NlbGVjdGlvbicpO1xuY29uc3Qgc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb25TeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3NlbGVjdGlvbkFuaW1hdGlvbkR1cmF0aW9uJyk7XG5jb25zdCBzZWxlY3Rpb25BbmltYXRpb25FZmZlY3RTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3NlbGVjdGlvbkFuaW1hdGlvbkVmZmVjdCcpO1xuY29uc3Qgc2VsZWN0aW9uQW5pbWF0aW9uS2V5ZnJhbWVzU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdzZWxlY3Rpb25BbmltYXRpb25LZXlmcmFtZXMnKTtcbmNvbnN0IHJlc2V0QW5pbWF0aW9uc09uTmV4dFJlbmRlclN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgncmVzZXRBbmltYXRpb25zT25OZXh0UmVuZGVyJyk7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBTZWxlY3Rpb25BbmltYXRpb24uICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXhpbihiYXNlKSB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIHVzZXMgYW5pbWF0aW9uIHRvIHNob3cgdHJhbnNpdGlvbnMgYmV0d2VlbiBzZWxlY3Rpb24gc3RhdGVzLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGNhbiBiZSB1c2VkIGJ5IGNvbXBvbmVudHMgdGhhdCB3YW50IHRvIHByb3ZpZGUgdmlzaWJsZVxuICAgKiBhbmltYXRpb25zIHdoZW4gY2hhbmdpbmcgdGhlIHNlbGVjdGlvbi4gRm9yIGV4YW1wbGUsIGEgY2Fyb3VzZWwgY29tcG9uZW50XG4gICAqIG1heSB3YW50IHRvIGRlZmluZSBhIHNsaWRpbmcgYW5pbWF0aW9uIGVmZmVjdCBzaG93biB3aGVuIG1vdmluZyBiZXR3ZWVuXG4gICAqIGl0ZW1zLlxuICAgKlxuICAgKiBUaGUgYW5pbWF0aW9uIGlzIGRlZmluZWQgYnkgYSBgc2VsZWN0aW9uQW5pbWF0aW9uS2V5ZnJhbWVzYCBwcm9wZXJ0eTsgc2VlXG4gICAqIHRoYXQgcHJvcGVydHkgZm9yIGRldGFpbHMgb24gaG93IHRvIGRlZmluZSB0aGVzZSBrZXlmcmFtZXMuIFRoaXMgYW5pbWF0aW9uXG4gICAqIHdpbGwgYmUgdXNlZCBpbiB0d28gd2F5cy4gRmlyc3QsIHdoZW4gbW92aW5nIHN0cmljdGx5IGJldHdlZW4gaXRlbXMsIHRoZVxuICAgKiBhbmltYXRpb24gd2lsbCBwbGF5IHNtb290aGx5IHRvIHNob3cgdGhlIHNlbGVjdGlvbiBjaGFuZ2luZy4gU2Vjb25kLCB0aGVcbiAgICogYW5pbWF0aW9uIGNhbiBiZSB1c2VkIHRvIHJlbmRlciB0aGUgc2VsZWN0aW9uIGF0IGEgZml4ZWQgcG9pbnQgaW4gdGhlXG4gICAqIHRyYW5zaXRpb24gYmV0d2VlbiBzdGF0ZXMuIEUuZy4sIGlmIHRoZSB1c2VyIHBhdXNlcyBoYWxmd2F5IHRocm91Z2hcbiAgICogZHJhZ2dpbmcgYW4gZWxlbWVudCB1c2luZyBbU3dpcGVEaXJlY3Rpb25NaXhpbl0oU3dpcGVEaXJlY3Rpb25NaXhpbi5tZClcbiAgICogb3IgW1RyYWNrcGFkRGlyZWN0aW9uTWl4aW5dKFRyYWNrcGFkRGlyZWN0aW9uTWl4aW4ubWQpcywgdGhlbiB0aGUgc2VsZWN0aW9uXG4gICAqIGFuaW1hdGlvbiB3aWxsIGJlIHNob3duIGF0IHRoZSBwb2ludCBleGFjdGx5IGhhbGZ3YXkgdGhyb3VnaC5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIGEgY29tcG9uZW50IHRvIHByb3ZpZGUgYW4gYGl0ZW1zYCBhcnJheSBvZiBhbGwgZWxlbWVudHNcbiAgICogaW4gdGhlIGxpc3QsIHdoaWNoIGNhbiBiZSBwcm92aWRlZCB2aWFcbiAgICogW0NvbnRlbnRJdGVtc01peGluXShDb250ZW50SXRlbXNNaXhpbi5tZCkuIFRoaXMgbWl4aW4gYWxzbyBleHBlY3RzXG4gICAqIGBzZWxlY3RlZEluZGV4YCBhbmQgYHNlbGVjdGVkSXRlbWAgcHJvcGVydGllcywgd2hpY2ggY2FuIGJlIHByb3ZpZGVkIHZpYVxuICAgKiBbU2luZ2xlU2VsZWN0aW9uTWl4aW5dKFNpbmdsZVNlbGVjdGlvbk1peGluLm1kKS5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBzdXBwb3J0cyBhIGBzZWxlY3Rpb25XcmFwc2AgcHJvcGVydHkuIFdoZW4gdHJ1ZSwgdGhlIHVzZXIgY2FuXG4gICAqIG5hdmlnYXRlIGZvcndhcmQgZnJvbSB0aGUgbGFzdCBpdGVtIGluIHRoZSBsaXN0IGFuZCB3cmFwIGFyb3VuZCB0byB0aGVcbiAgICogZmlyc3QgaXRlbSwgb3IgbmF2aWdhdGUgYmFja3dhcmQgZnJvbSB0aGUgZmlyc3QgaXRlbSBhbmQgd3JhcCBhcm91bmQgdG8gdGhlXG4gICAqIGxhc3QgaXRlbS5cbiAgICpcbiAgICogVGhpcyBtaXhpbiB1c2VzIHRoZSBXZWIgQW5pbWF0aW9ucyBBUEkuIEZvciB1c2Ugb24gYnJvd3NlcnMgd2hpY2hcbiAgICogZG8gbm90IHN1cHBvcnQgdGhhdCBBUEkgbmF0aXZlbHksIHlvdSB3aWxsIG5lZWQgdG8gbG9hZCB0aGVcbiAgICogW1dlYiBBbmltYXRpb25zIHBvbHlmaWxsXShodHRwczovL2dpdGh1Yi5jb20vd2ViLWFuaW1hdGlvbnMvd2ViLWFuaW1hdGlvbnMtanMpLlxuICAgKi9cbiAgY2xhc3MgU2VsZWN0aW9uQW5pbWF0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG5cbiAgICAgIC8vIFNldCBkZWZhdWx0cy5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5zZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvbiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvbiA9IHRoaXNbc3ltYm9scy5kZWZhdWx0c10uc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb247XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHRoaXMuc2VsZWN0aW9uQW5pbWF0aW9uRWZmZWN0ID09PSAndW5kZWZpbmVkJyAmJiB0aGlzLnNlbGVjdGlvbkFuaW1hdGlvbktleWZyYW1lcyA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uQW5pbWF0aW9uRWZmZWN0ID0gdGhpc1tzeW1ib2xzLmRlZmF1bHRzXS5zZWxlY3Rpb25BbmltYXRpb25FZmZlY3Q7XG4gICAgICB9XG5cbiAgICAgIHRoaXNbc3ltYm9scy5kcmFnZ2luZ10gPSBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXQgW3N5bWJvbHMuZGVmYXVsdHNdKCkge1xuICAgICAgY29uc3QgZGVmYXVsdHMgPSBzdXBlcltzeW1ib2xzLmRlZmF1bHRzXSB8fCB7fTtcbiAgICAgIGRlZmF1bHRzLnNlbGVjdGlvbkFuaW1hdGlvbkR1cmF0aW9uID0gMjUwO1xuICAgICAgZGVmYXVsdHMuc2VsZWN0aW9uQW5pbWF0aW9uRWZmZWN0ID0gJ3NsaWRlJztcbiAgICAgIHJldHVybiBkZWZhdWx0cztcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFByb3ZpZGUgYmFja2luZyBmb3IgdGhlIGRyYWdnaW5nIHByb3BlcnR5LlxuICAgICAqIEFsc28sIHdoZW4gYSBkcmFnIGJlZ2lucywgcmVzZXQgdGhlIGFuaW1hdGlvbnMuXG4gICAgICovXG4gICAgZ2V0IFtzeW1ib2xzLmRyYWdnaW5nXSgpIHtcbiAgICAgIHJldHVybiB0aGlzW2RyYWdnaW5nU3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IFtzeW1ib2xzLmRyYWdnaW5nXSh2YWx1ZSkge1xuICAgICAgY29uc3QgcHJldmlvdXNWYWx1ZSA9IHRoaXNbc3ltYm9scy5kcmFnZ2luZ107XG4gICAgICB0aGlzW2RyYWdnaW5nU3ltYm9sXSA9IHZhbHVlO1xuICAgICAgaWYgKHN5bWJvbHMuZHJhZ2dpbmcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXJbc3ltYm9scy5kcmFnZ2luZ10gPSB2YWx1ZTsgfVxuICAgICAgaWYgKHZhbHVlICYmICFwcmV2aW91c1ZhbHVlKSB7XG4gICAgICAgIC8vIEhhdmUgYmVndW4gYSBkcmFnLlxuICAgICAgICB0aGlzW3Jlc2V0QW5pbWF0aW9uc09uTmV4dFJlbmRlclN5bWJvbF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIFtzeW1ib2xzLml0ZW1BZGRlZF0oaXRlbSkge1xuICAgICAgLy8gV2UgbWFyayBuZXcgaXRlbXMgaW4gdGhlIGxpc3QgYXMgZXhwbGljaXRseSB2aXNpYmxlIHRvIEFSSUEuIE90aGVyd2lzZSxcbiAgICAgIC8vIHdoZW4gYW4gaXRlbSBpc24ndCB2aXNpYmxlIG9uIHRoZSBzY3JlZW4sIEFSSUEgd2lsbCBhc3N1bWUgdGhlIGl0ZW0gaXNcbiAgICAgIC8vIG9mIG5vIGludGVyZXN0IHRvIHRoZSB1c2VyLCBhbmQgbGVhdmUgaXQgb3V0IG9mIHRoZSBhY2Nlc3NpYmlsaXR5IHRyZWUuXG4gICAgICAvLyBJZiB0aGUgbGlzdCBjb250YWlucyAxMCBpdGVtcywgYnV0IG9ubHkgMyBhcmUgdmlzaWJsZSwgYSBzY3JlZW4gcmVhZGVyXG4gICAgICAvLyBtaWdodCB0aGVuIGFubm91bmNlIHRoZSBsaXN0IG9ubHkgaGFzIDMgaXRlbXMuIFRvIGVuc3VyZSB0aGF0IHNjcmVlblxuICAgICAgLy8gcmVhZGVycyBhbmQgb3RoZXIgYXNzaXN0aXZlIHRlY2hub2xvZ2llcyBhbm5vdW5jZSB0aGUgY29ycmVjdCB0b3RhbFxuICAgICAgLy8gbnVtYmVyIG9mIGl0ZW1zLCB3ZSBleHBsaWNpdGx5IG1hcmsgYWxsIGl0ZW1zIGFzIG5vdCBoaWRkZW4uIFRoaXMgd2lsbFxuICAgICAgLy8gZXhwb3NlIHRoZW0gYWxsIGluIHRoZSBhY2Nlc3NpYmlsaXR5IHRyZWUsIGV2ZW4gdGhlIGl0ZW1zIHdoaWNoIGFyZVxuICAgICAgLy8gY3VycmVudGx5IG5vdCByZW5kZXJlZC5cbiAgICAgIC8vXG4gICAgICAvLyBUT0RPOiBHZW5lcmFsbHkgc3BlYWtpbmcsIHRoaXMgZW50aXJlIG1peGluIGFzc3VtZXMgdGhhdCB0aGUgdXNlciBjYW5cbiAgICAgIC8vIG5hdmlnYXRlIHRocm91Z2ggYWxsIGl0ZW1zIGluIGEgbGlzdC4gQnV0IGFuIGFwcCBjb3VsZCBzdHlsZSBhbiBpdGVtIGFzXG4gICAgICAvLyBkaXNwbGF5Om5vbmUgb3IgdmlzaWJpbGl0eTpoaWRkZW4gYmVjYXVzZSB0aGUgdXNlciBpcyBub3QgYWxsb3dlZCB0b1xuICAgICAgLy8gaW50ZXJhY3Qgd2l0aCB0aGF0IGl0ZW0gYXQgdGhlIG1vbWVudC4gU3VwcG9ydCBmb3IgdGhpcyBzY2VuYXJpbyBzaG91bGRcbiAgICAgIC8vIGJlIGFkZGVkLiBUaGlzIHdvdWxkIGVudGFpbCBjaGFuZ2luZyBhbGwgbG9jYXRpb25zIHdoZXJlIGEgbWl4aW5cbiAgICAgIC8vIGZ1bmN0aW9uIGlzIGNvdW50aW5nIGl0ZW1zLCBpdGVyYXRpbmcgb3ZlciB0aGUgKHZpc2libGUpIGl0ZW1zLCBhbmRcbiAgICAgIC8vIHNob3dpbmcgb3IgaGlkaW5nIGl0ZW1zLiBBbW9uZyBvdGhlciB0aGluZ3MsIHRoZSBjb2RlIGJlbG93IHRvIG1ha2VcbiAgICAgIC8vIGl0ZW1zIHZpc2libGUgdG8gQVJJQSB3b3VsZCBuZWVkIHRvIGRpc2NyaW1pbmF0ZSBiZXR3ZWVuIGl0ZW1zIHdoaWNoXG4gICAgICAvLyBhcmUgaW52aXNpYmxlIGJlY2F1c2Ugb2YgYW5pbWF0aW9uIHN0YXRlLCBvciBpbnZpc2libGUgYmVjYXVzZSB0aGUgdXNlclxuICAgICAgLy8gc2hvdWxkbid0IGludGVyYWN0IHdpdGggdGhlbS5cbiAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBbc3ltYm9scy5pdGVtc0NoYW5nZWRdKCkge1xuICAgICAgaWYgKHN1cGVyW3N5bWJvbHMuaXRlbXNDaGFuZ2VkXSkgeyBzdXBlcltzeW1ib2xzLml0ZW1zQ2hhbmdlZF0oKTsgfVxuXG4gICAgICByZXNldEFuaW1hdGlvbnModGhpcyk7XG5cbiAgICAgIC8vIFRPRE86IEFsc28gcmVzZXQgb3VyIG5vdGlvbiBvZiB0aGUgbGFzdCByZW5kZXJlZCBzZWxlY3Rpb24/IFRoaXMgY29tZXNcbiAgICAgIC8vIHVwIHdoZW4gYSBET00gcmVtb3ZhbCBjYXVzZXMgdGhlIHNlbGVjdGVkIGl0ZW0gdG8gY2hhbmdlIHBvc2l0aW9uLlxuICAgICAgLy8gdGhpc1twcmV2aW91c1NlbGVjdGlvblN5bWJvbF0gPSBudWxsO1xuXG4gICAgICByZW5kZXJTZWxlY3Rpb24odGhpcyk7XG4gICAgfVxuXG4gICAgcmVzZXRBbmltYXRpb25zKCkge1xuICAgICAgcmVzZXRBbmltYXRpb25zKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgZnJhY3Rpb25hbCB2YWx1ZSBpbmRpY2F0aW5nIGhvdyBmYXIgdGhlIHVzZXIgaGFzIGN1cnJlbnRseSBhZHZhbmNlZCB0b1xuICAgICAqIHRoZSBuZXh0L3ByZXZpb3VzIGl0ZW0uIEUuZy4sIGEgYHNlbGVjdGVkRnJhY3Rpb25gIG9mIDMuNSBpbmRpY2F0ZXMgdGhlXG4gICAgICogdXNlciBpcyBoYWxmd2F5IGJldHdlZW4gaXRlbXMgMyBhbmQgNC5cbiAgICAgKlxuICAgICAqIEZvciBtb3JlIGRldGFpbHMsIHNlZSBbRnJhY3Rpb25hbFNlbGVjdGlvbk1peGluXShGcmFjdGlvbmFsU2VsZWN0aW9uTWl4aW4ubWQpXG4gICAgICogbWl4aW4uXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldCBzZWxlY3RlZEZyYWN0aW9uKCkge1xuICAgICAgcmV0dXJuIHN1cGVyLnNlbGVjdGVkRnJhY3Rpb24gfHwgMDtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGVkRnJhY3Rpb24odmFsdWUpIHtcbiAgICAgIGlmICgnc2VsZWN0ZWRGcmFjdGlvbicgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRGcmFjdGlvbiA9IHZhbHVlOyB9XG4gICAgICByZW5kZXJTZWxlY3Rpb24odGhpcywgdGhpcy5zZWxlY3RlZEluZGV4LCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdGVkSW5kZXgoKSB7XG4gICAgICByZXR1cm4gc3VwZXIuc2VsZWN0ZWRJbmRleDtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGVkSW5kZXgoaW5kZXgpIHtcbiAgICAgIGlmICgnc2VsZWN0ZWRJbmRleCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJbmRleCA9IGluZGV4OyB9XG4gICAgICByZW5kZXJTZWxlY3Rpb24odGhpcywgaW5kZXgsIDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBkdXJhdGlvbiBvZiBhIHNlbGVjdGlvbiBhbmltYXRpb24gaW4gbWlsbGlzZWNvbmRzLlxuICAgICAqXG4gICAgICogVGhpcyBtZWFzdXJlcyB0aGUgYW1vdW50IG9mIHRpbWUgcmVxdWlyZWQgZm9yIGEgc2VsZWN0aW9uIGFuaW1hdGlvbiB0b1xuICAgICAqIGNvbXBsZXRlLiBUaGlzIG51bWJlciByZW1haW5zIGNvbnN0YW50LCBldmVuIGlmIHRoZSBudW1iZXIgb2YgaXRlbXMgYmVpbmdcbiAgICAgKiBhbmltYXRlZCBpbmNyZWFzZXMuXG4gICAgICpcbiAgICAgKiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAyNTAgbWlsbGlzZWNvbmRzIChhIHF1YXJ0ZXIgYSBzZWNvbmQpLlxuICAgICAqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAZGVmYXVsdCAyNTBcbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb24oKSB7XG4gICAgICByZXR1cm4gdGhpc1tzZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvblN5bWJvbF07XG4gICAgfVxuICAgIHNldCBzZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvbih2YWx1ZSkge1xuICAgICAgdGhpc1tzZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvblN5bWJvbF0gPSB2YWx1ZTtcbiAgICAgIGlmICgnc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb24nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGlvbkFuaW1hdGlvbkR1cmF0aW9uID0gdmFsdWU7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBvZiBhIHN0YW5kYXJkIHNlbGVjdGlvbiBhbmltYXRpb24gZWZmZWN0LlxuICAgICAqXG4gICAgICogVGhpcyBpcyBhIHNob3J0aGFuZCBmb3Igc2V0dGluZyB0aGUgYHNlbGVjdGlvbkFuaW1hdGlvbktleWZyYW1lc2BcbiAgICAgKiBwcm9wZXJ0eSB0byBzdGFuZGFyZCBrZXlmcmFtZXMuIFN1cHBvcnRlZCBzdHJpbmcgdmFsdWVzOlxuICAgICAqXG4gICAgICogKiBcImNyb3NzZmFkZVwiXG4gICAgICogKiBcInJldmVhbFwiXG4gICAgICogKiBcInJldmVhbFdpdGhGYWRlXCJcbiAgICAgKiAqIFwic2hvd0FkamFjZW50XCJcbiAgICAgKiAqIFwic2xpZGVcIlxuICAgICAqICogXCJzbGlkZVdpdGhHYXBcIlxuICAgICAqXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAZGVmYXVsdCBcInNsaWRlXCJcbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0aW9uQW5pbWF0aW9uRWZmZWN0KCkge1xuICAgICAgcmV0dXJuIHRoaXNbc2VsZWN0aW9uQW5pbWF0aW9uRWZmZWN0U3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGlvbkFuaW1hdGlvbkVmZmVjdCh2YWx1ZSkge1xuICAgICAgdGhpc1tzZWxlY3Rpb25BbmltYXRpb25FZmZlY3RTeW1ib2xdID0gdmFsdWU7XG4gICAgICBpZiAoJ3NlbGVjdGlvbkFuaW1hdGlvbkVmZmVjdCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0aW9uQW5pbWF0aW9uRWZmZWN0ID0gdmFsdWU7IH1cbiAgICAgIHRoaXMuc2VsZWN0aW9uQW5pbWF0aW9uS2V5ZnJhbWVzID0gbWl4aW4uc3RhbmRhcmRFZmZlY3RLZXlmcmFtZXNbdmFsdWVdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBrZXlmcmFtZXMgdGhhdCBkZWZpbmUgYW4gYW5pbWF0aW9uIHRoYXQgcGxheXMgZm9yIGFuIGl0ZW0gd2hlbiBtb3ZpbmdcbiAgICAgKiBmb3J3YXJkIGluIHRoZSBzZXF1ZW5jZS5cbiAgICAgKlxuICAgICAqIFRoaXMgaXMgYW4gYXJyYXkgb2YgQ1NTIHJ1bGVzIHRoYXQgd2lsbCBiZSBhcHBsaWVkLiBUaGVzZSBhcmUgdXNlZCBhc1xuICAgICAqIFtrZXlmcmFtZXNdKGh0dHA6Ly93M2MuZ2l0aHViLmlvL3dlYi1hbmltYXRpb25zLyNrZXlmcmFtZXMtc2VjdGlvbilcbiAgICAgKiB0byBhbmltYXRlIHRoZSBpdGVtIHdpdGggdGhlXG4gICAgICogW1dlYiBBbmltYXRpb25zIEFQSV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL2FuaW1hdGlvbikuXG4gICAgICpcbiAgICAgKiBUaGUgYW5pbWF0aW9uIHJlcHJlc2VudHMgdGhlIHN0YXRlIG9mIHRoZSBuZXh0IGl0ZW0gYXMgaXQgbW92ZXMgZnJvbVxuICAgICAqIGNvbXBsZXRlbHkgdW5zZWxlY3RlZCAob2Zmc3RhZ2UsIHVzdWFsbHkgcmlnaHQpLCB0byBzZWxlY3RlZCAoY2VudGVyXG4gICAgICogc3RhZ2UpLCB0byBjb21wbGV0ZWx5IHVuc2VsZWN0ZWQgKG9mZnN0YWdlLCB1c3VhbGx5IGxlZnQpLiBUaGUgY2VudGVyIHRpbWVcbiAgICAgKiBvZiB0aGUgYW5pbWF0aW9uIHNob3VsZCBjb3JyZXNwb25kIHRvIHRoZSBpdGVtJ3MgcXVpc2NlbnQgc2VsZWN0ZWQgc3RhdGUsXG4gICAgICogdHlwaWNhbGx5IGluIHRoZSBjZW50ZXIgb2YgdGhlIHN0YWdlIGFuZCBhdCB0aGUgaXRlbSdzIGxhcmdlc3Qgc2l6ZS5cbiAgICAgKlxuICAgICAqIFRoZSBkZWZhdWx0IGZvcndhcmQgYW5pbWF0aW9uIGlzIGEgc21vb3RoIHNsaWRlIGF0IGZ1bGwgc2l6ZSBmcm9tIHJpZ2h0IHRvXG4gICAgICogbGVmdC5cbiAgICAgKlxuICAgICAqIFdoZW4gbW92aW5nIHRoZSBzZWxlY3Rpb24gYmFja3dhcmQsIHRoaXMgYW5pbWF0aW9uIGlzIHBsYXllZCBpbiByZXZlcnNlLlxuICAgICAqXG4gICAgICogQHR5cGUge2Nzc1J1bGVzW119XG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGlvbkFuaW1hdGlvbktleWZyYW1lcygpIHtcbiAgICAgIC8vIFN0YW5kYXJkIGFuaW1hdGlvbiBzbGlkZXMgbGVmdC9yaWdodCwga2VlcHMgYWRqYWNlbnQgaXRlbXMgb3V0IG9mIHZpZXcuXG4gICAgICByZXR1cm4gdGhpc1tzZWxlY3Rpb25BbmltYXRpb25LZXlmcmFtZXNTeW1ib2xdO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0aW9uQW5pbWF0aW9uS2V5ZnJhbWVzKHZhbHVlKSB7XG4gICAgICB0aGlzW3NlbGVjdGlvbkFuaW1hdGlvbktleWZyYW1lc1N5bWJvbF0gPSB2YWx1ZTtcbiAgICAgIGlmICgnc2VsZWN0aW9uQW5pbWF0aW9uS2V5ZnJhbWVzJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3Rpb25BbmltYXRpb25LZXlmcmFtZXMgPSB2YWx1ZTsgfVxuICAgICAgcmVzZXRBbmltYXRpb25zKHRoaXMpO1xuICAgICAgcmVuZGVyU2VsZWN0aW9uKHRoaXMpO1xuICAgIH1cblxuICAgIGdldCBzZWxlY3Rpb25XcmFwcygpIHtcbiAgICAgIHJldHVybiBzdXBlci5zZWxlY3Rpb25XcmFwcztcbiAgICB9XG4gICAgc2V0IHNlbGVjdGlvbldyYXBzKHZhbHVlKSB7XG4gICAgICBpZiAoJ3NlbGVjdGlvbldyYXBzJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3Rpb25XcmFwcyA9IHZhbHVlOyB9XG4gICAgICByZXNldEFuaW1hdGlvbnModGhpcyk7XG4gICAgICByZW5kZXJTZWxlY3Rpb24odGhpcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFNlbGVjdGlvbkFuaW1hdGlvbjtcbn1cblxuXG4vLyBXZSBleHBvc2UgaGVscGVycyBvbiB0aGUgbWl4aW4gZnVuY3Rpb24gdGhhdCB3ZSB3YW50IHRvIGJlIGFibGUgdG8gdW5pdCB0ZXN0LlxuLy8gU2luY2UgdGhlc2UgYXJlIG9uIHRoZSBmdW5jdGlvbiwgbm90IG9uIHRoZSBjbGFzcyBlbWl0dGVkIGJ5IHRoZSBmdW5jdGlvbixcbi8vIHRoZXkgZG9uJ3QgZW5kIHVwIGdldHRpbmcgZXhwb3NlZCBvbiBhY3R1YWwgZWxlbWVudCBpbnN0YW5jZXMuXG5taXhpbi5oZWxwZXJzID0ge1xuXG4gIC8qXG4gICAqIENhbGN1bGF0ZSB0aGUgYW5pbWF0aW9uIGZyYWN0aW9ucyBmb3IgYW4gZWxlbWVudCdzIGl0ZW1zIGF0IHRoZSBnaXZlblxuICAgKiBzZWxlY3Rpb24gcG9pbnQuIFRoaXMgaXMgdXNlZCB3aGVuIHJlbmRlcmluZyB0aGUgZWxlbWVudCdzIHNlbGVjdGlvbiBzdGF0ZVxuICAgKiBpbnN0YW50YW5lb3VzbHkuXG4gICAqXG4gICAqIFRoaXMgZnVuY3Rpb24gY29uc2lkZXJzIHRoZSBzZWxlY3RlZEluZGV4IHBhcmFtZXRlciwgd2hpY2ggY2FuIGJlIGEgd2hvbGVcbiAgICogb3IgZnJhY3Rpb25hbCBudW1iZXIsIGFuZCBkZXRlcm1pbmVzIHdoaWNoIGl0ZW1zIHdpbGwgYmUgdmlzaWJsZSBhdCB0aGF0XG4gICAqIGluZGV4LiBUaGlzIGZ1bmN0aW9uIHRoZW4gY2FsY3VsYXRlcyBhIGNvcnJlc3BvbmRpbmcgYW5pbWF0aW9uIGZyYWN0aW9uOiBhXG4gICAqIG51bWJlciBiZXR3ZWVuIDAgYW5kIDEgaW5kaWNhdGluZyBob3cgZmFyIHRocm91Z2ggdGhlIHNlbGVjdGlvbiBhbmltYXRpb25cbiAgICogYW4gaXRlbSBzaG91bGQgYmUgc2hvd24sIG9yIG51bGwgaWYgdGhlIGl0ZW0gc2hvdWxkIG5vdCBiZSB2aXNpYmxlIGF0IHRoYXRcbiAgICogc2VsZWN0aW9uIGluZGV4LiBUaGVzZSBmcmFjdGlvbnMgYXJlIHJldHVybmVkIGFzIGFuIGFycmF5LCB3aGVyZSB0aGVcbiAgICogYW5pbWF0aW9uIGZyYWN0aW9uIGF0IHBvc2l0aW9uIE4gY29ycmVzcG9uZHMgdG8gaG93IGl0ZW0gTiBzaG91bGQgYmUgc2hvd24uXG4gICAqL1xuICBhbmltYXRpb25GcmFjdGlvbnNGb3JTZWxlY3Rpb24oZWxlbWVudCwgc2VsZWN0aW9uKSB7XG5cbiAgICBjb25zdCBpdGVtcyA9IGVsZW1lbnQuaXRlbXM7XG4gICAgaWYgKCFpdGVtcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGl0ZW1Db3VudCA9IGl0ZW1zLmxlbmd0aDtcbiAgICBjb25zdCBzZWxlY3Rpb25XcmFwcyA9IGVsZW1lbnQuc2VsZWN0aW9uV3JhcHM7XG5cbiAgICByZXR1cm4gaXRlbXMubWFwKChpdGVtLCBpdGVtSW5kZXgpID0+IHtcbiAgICAgIC8vIEhvdyBtYW55IHN0ZXBzIGZyb20gdGhlIHNlbGVjdGlvbiBwb2ludCB0byB0aGlzIGl0ZW0/XG4gICAgICBjb25zdCBzdGVwcyA9IHN0ZXBzVG9JbmRleChpdGVtQ291bnQsIHNlbGVjdGlvbldyYXBzLCBzZWxlY3Rpb24sIGl0ZW1JbmRleCk7XG4gICAgICAvLyBUbyBjb252ZXJ0IHN0ZXBzIHRvIGFuaW1hdGlvbiBmcmFjdGlvbjpcbiAgICAgIC8vIHN0ZXBzICAgICAgYW5pbWF0aW9uIGZyYWN0aW9uXG4gICAgICAvLyAgMSAgICAgICAgIDAgICAgIChzdGFnZSByaWdodClcbiAgICAgIC8vICAwICAgICAgICAgMC41ICAgKGNlbnRlciBzdGFnZSlcbiAgICAgIC8vIC0xICAgICAgICAgMSAgICAgKHN0YWdlIGxlZnQpXG4gICAgICBjb25zdCBhbmltYXRpb25GcmFjdGlvbiA9ICgxIC0gc3RlcHMpIC8gMjtcbiAgICAgIHJldHVybiAoYW5pbWF0aW9uRnJhY3Rpb24gPj0gMCAmJiBhbmltYXRpb25GcmFjdGlvbiA8PSAxKSA/XG4gICAgICAgIGFuaW1hdGlvbkZyYWN0aW9uIDpcbiAgICAgICAgbnVsbDsgLy8gT3V0c2lkZSBhbmltYXRpb24gcmFuZ2VcbiAgICB9KTtcbiAgfSxcblxuICAvKlxuICAgKiBDYWxjdWxhdGUgdGhlIGFuaW1hdGlvbiB0aW1pbmdzIHRoYXQgc2hvdWxkIGJlIHVzZWQgdG8gc21vb3RobHkgYW5pbWF0ZSB0aGVcbiAgICogZWxlbWVudCdzIGl0ZW1zIGZyb20gb25lIHNlbGVjdGlvbiBzdGF0ZSB0byBhbm90aGVyLlxuICAgKlxuICAgKiBUaGlzIHJldHVybnMgYW4gYXJyYXkgb2YgdGltaW5ncywgd2hlcmUgdGhlIHRpbWluZyBhdCBwb3NpdGlvbiBOIHNob3VsZCBiZVxuICAgKiB1c2VkIHRvIGFuaW1hdGUgaXRlbSBOLiBJZiBhbiBpdGVtJ3MgdGltaW5nIGlzIG51bGwsIHRoZW4gdGhhdCBpdGVtIHNob3VsZFxuICAgKiBub3QgdGFrZSBwbGFjZSBpbiB0aGUgYW5pbWF0aW9uLCBhbmQgc2hvdWxkIGJlIGhpZGRlbiBpbnN0ZWFkLlxuICAgKi9cbiAgZWZmZWN0VGltaW5nc0ZvclNlbGVjdGlvbkFuaW1hdGlvbihlbGVtZW50LCBmcm9tU2VsZWN0aW9uLCB0b1NlbGVjdGlvbikge1xuXG4gICAgY29uc3QgaXRlbXMgPSBlbGVtZW50Lml0ZW1zO1xuICAgIGlmICghaXRlbXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaXRlbUNvdW50ID0gaXRlbXMubGVuZ3RoO1xuICAgIGNvbnN0IHNlbGVjdGlvbldyYXBzID0gZWxlbWVudC5zZWxlY3Rpb25XcmFwcztcbiAgICBjb25zdCB0b0luZGV4ID0gRnJhY3Rpb25hbFNlbGVjdGlvbk1peGluLmhlbHBlcnMud3JhcHBlZFNlbGVjdGlvblBhcnRzKHRvU2VsZWN0aW9uLCBpdGVtQ291bnQsIHNlbGVjdGlvbldyYXBzKS5pbmRleDtcbiAgICBjb25zdCB0b3RhbFN0ZXBzID0gc3RlcHNUb0luZGV4KGl0ZW1Db3VudCwgc2VsZWN0aW9uV3JhcHMsIGZyb21TZWxlY3Rpb24sIHRvU2VsZWN0aW9uKTtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSB0b3RhbFN0ZXBzID49IDAgPyAnbm9ybWFsJzogJ3JldmVyc2UnO1xuICAgIGNvbnN0IGZpbGwgPSAnYm90aCc7XG4gICAgY29uc3QgdG90YWxEdXJhdGlvbiA9IGVsZW1lbnQuc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb247XG4gICAgY29uc3Qgc3RlcER1cmF0aW9uID0gdG90YWxTdGVwcyAhPT0gMCA/XG4gICAgICB0b3RhbER1cmF0aW9uICogMiAvIE1hdGguY2VpbChNYXRoLmFicyh0b3RhbFN0ZXBzKSkgOlxuICAgICAgMDsgIC8vIE5vIHN0ZXBzIHJlcXVpcmVkLCBhbmltYXRpb24gd2lsbCBiZSBpbnN0YW50ZW5vdXMuXG5cbiAgICBjb25zdCB0aW1pbmdzID0gaXRlbXMubWFwKChpdGVtLCBpdGVtSW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHN0ZXBzID0gc3RlcHNUb0luZGV4KGl0ZW1Db3VudCwgc2VsZWN0aW9uV3JhcHMsIGl0ZW1JbmRleCwgdG9TZWxlY3Rpb24pO1xuICAgICAgLy8gSWYgd2UgaW5jbHVkZSB0aGlzIGl0ZW0gaW4gdGhlIHN0YWdnZXJlZCBzZXF1ZW5jZSBvZiBhbmltYXRpb25zIHdlJ3JlXG4gICAgICAvLyBjcmVhdGluZywgd2hlcmUgd291bGQgdGhlIGl0ZW0gYXBwZWFyIGluIHRoZSBzZXF1ZW5jZT9cbiAgICAgIGxldCBwb3NpdGlvbkluU2VxdWVuY2UgPSB0b3RhbFN0ZXBzIC0gc3RlcHM7XG4gICAgICBpZiAodG90YWxTdGVwcyA8IDApIHtcbiAgICAgICAgcG9zaXRpb25JblNlcXVlbmNlID0gLXBvc2l0aW9uSW5TZXF1ZW5jZTtcbiAgICAgIH1cbiAgICAgIC8vIFNvLCBpcyB0aGlzIGl0ZW0gcmVhbGx5IGluY2x1ZGVkIGluIHRoZSBzZXF1ZW5jZT9cbiAgICAgIGlmIChNYXRoLmNlaWwocG9zaXRpb25JblNlcXVlbmNlKSA+PSAwICYmIHBvc2l0aW9uSW5TZXF1ZW5jZSA8PSBNYXRoLmFicyh0b3RhbFN0ZXBzKSkge1xuICAgICAgICAvLyBOb3RlIHRoYXQgZGVsYXkgZm9yIGZpcnN0IGl0ZW0gd2lsbCBiZSBuZWdhdGl2ZS4gVGhhdCB3aWxsIGNhdXNlXG4gICAgICAgIC8vIHRoZSBhbmltYXRpb24gdG8gc3RhcnQgaGFsZndheSB0aHJvdWdoLCB3aGljaCBpcyB3aGF0IHdlIHdhbnQuXG4gICAgICAgIGNvbnN0IGRlbGF5ID0gc3RlcER1cmF0aW9uICogKHBvc2l0aW9uSW5TZXF1ZW5jZSAtIDEpLzI7XG4gICAgICAgIGNvbnN0IGVuZERlbGF5ID0gaXRlbUluZGV4ID09PSB0b0luZGV4ID9cbiAgICAgICAgICAtc3RlcER1cmF0aW9uLzIgOiAgIC8vIFN0b3AgaGFsZndheSB0aHJvdWdoLlxuICAgICAgICAgIDA7ICAgICAgICAgICAgICAvLyBQbGF5IGFuaW1hdGlvbiB1bnRpbCBlbmQuXG4gICAgICAgIHJldHVybiB7IGR1cmF0aW9uOiBzdGVwRHVyYXRpb24sIGRpcmVjdGlvbiwgZmlsbCwgZGVsYXksIGVuZERlbGF5IH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB0aW1pbmdzO1xuICB9XG5cbn07XG5cblxuLy8gS2V5ZnJhbWVzIGZvciBzdGFuZGFyZCBzZWxlY3Rpb24gYW5pbWF0aW9uIGVmZmVjdHMuXG5taXhpbi5zdGFuZGFyZEVmZmVjdEtleWZyYW1lcyA9IHtcblxuICAvLyBTaW1wbGUgY3Jvc3NmYWRlXG4gIGNyb3NzZmFkZTogW1xuICAgIHsgb3BhY2l0eTogMCB9LFxuICAgIHsgb3BhY2l0eTogMSB9LFxuICAgIHsgb3BhY2l0eTogMCB9XG4gIF0sXG5cbiAgLy8gUmV2ZWFsLCBhcyBpZiBzbGlkaW5nIHRoZSB0b3AgY2FyZCBvZmYgYSBkZWNrIG9mIGNhcmRzXG4gIHJldmVhbDogW1xuICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwJSknLCB6SW5kZXg6IDAgfSxcbiAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCUpJywgekluZGV4OiAxIH0sXG4gICAgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC0xMDAlKScsIHpJbmRleDogMiB9XG4gIF0sXG5cbiAgLy8gR29vZ2xlIFBob3Rvcy1zdHlsZSByZXZlYWwtd2l0aC1mYWRlIGFuaW1hdGlvblxuICByZXZlYWxXaXRoRmFkZTogW1xuICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwJSkgc2NhbGUoMC43NSknLCBvcGFjaXR5OiAwLCB6SW5kZXg6IDAgfSxcbiAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCUpIHNjYWxlKDEuMCknLCBvcGFjaXR5OiAxLCB6SW5kZXg6IDEgfSxcbiAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTEwMCUpIHNjYWxlKDEuMCknLCBvcGFjaXR5OiAxLCB6SW5kZXg6IDIgfVxuICBdLFxuXG4gIC8vIENhcm91c2VsIHZhcmlhbnQgd2l0aCBhIGJpdCBvZiBvZmYtc3RhZ2UgZWxlbWVudHMgc2hvd2luZ1xuICBzaG93QWRqYWNlbnQ6IFtcbiAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoNzglKSBzY2FsZSgwLjcpJywgekluZGV4OiAwIH0sXG4gICAgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDAlKSBzY2FsZSgwLjgyKScsIHpJbmRleDogMSB9LFxuICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNzglKSBzY2FsZSgwLjcpJywgekluZGV4OiAwIH1cbiAgXSxcblxuICAvLyBTaW1wbGUgc2xpZGVcbiAgc2xpZGU6IFtcbiAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMTAwJSknIH0sXG4gICAgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC0xMDAlKScgfVxuICBdLFxuXG4gIC8vIFNsaWRlLCB3aXRoIGEgZ2FwIGJldHdlZW5cbiAgc2xpZGVXaXRoR2FwOiBbXG4gICAgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDExMCUpJyB9LFxuICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtMTEwJSknIH1cbiAgXVxuXG59O1xuXG5cbi8qXG4gKiBTbW9vdGhseSBhbmltYXRlIHRoZSBzZWxlY3Rpb24gYmV0d2VlbiB0aGUgaW5kaWNhdGVkIFwiZnJvbVwiIGFuZCBcInRvXCJcbiAqIGluZGljZXMuIFRoZSBmb3JtZXIgY2FuIGJlIGEgZnJhY3Rpb24sIGUuZy4sIHdoZW4gdGhlIHVzZXIgcmVsZWFzZXMgYSBmaW5nZXJcbiAqIHRvIGNvbXBsZXRlIGEgdG91Y2ggZHJhZywgYW5kIHRoZSBzZWxlY3Rpb24gd2lsbCBzbmFwIHRvIHRoZSBjbG9zZXN0IHdob2xlXG4gKiBpbmRleC5cbiAqL1xuZnVuY3Rpb24gYW5pbWF0ZVNlbGVjdGlvbihlbGVtZW50LCBmcm9tU2VsZWN0aW9uLCB0b1NlbGVjdGlvbikge1xuXG4gIHJlc2V0QW5pbWF0aW9ucyhlbGVtZW50KTtcblxuICAvLyBDYWxjdWxhdGUgdGhlIGFuaW1hdGlvbiB0aW1pbmdzLlxuICBjb25zdCBpdGVtcyA9IGVsZW1lbnQuaXRlbXM7XG4gIGNvbnN0IGtleWZyYW1lcyA9IGVsZW1lbnQuc2VsZWN0aW9uQW5pbWF0aW9uS2V5ZnJhbWVzO1xuICBlbGVtZW50W3BsYXlpbmdBbmltYXRpb25TeW1ib2xdID0gdHJ1ZTtcbiAgY29uc3QgdGltaW5ncyA9IG1peGluLmhlbHBlcnMuZWZmZWN0VGltaW5nc0ZvclNlbGVjdGlvbkFuaW1hdGlvbihlbGVtZW50LCBmcm9tU2VsZWN0aW9uLCB0b1NlbGVjdGlvbik7XG5cbiAgLy8gRmlndXJlIG91dCB3aGljaCBpdGVtIHdpbGwgYmUgdGhlIG9uZSAqYWZ0ZXIqIHRoZSBvbmUgd2UncmUgc2VsZWN0aW5nLlxuICBjb25zdCBpdGVtQ291bnQgPSBpdGVtcy5sZW5ndGg7XG4gIGNvbnN0IHNlbGVjdGlvbldyYXBzID0gZWxlbWVudC5zZWxlY3Rpb25XcmFwcztcbiAgY29uc3Qgc2VsZWN0aW9uSW5kZXggPSBGcmFjdGlvbmFsU2VsZWN0aW9uTWl4aW4uaGVscGVycy5zZWxlY3Rpb25QYXJ0cyh0b1NlbGVjdGlvbiwgaXRlbUNvdW50LCBzZWxlY3Rpb25XcmFwcykuaW5kZXg7XG4gIGNvbnN0IHRvdGFsU3RlcHMgPSBzdGVwc1RvSW5kZXgoaXRlbUNvdW50LCBzZWxlY3Rpb25XcmFwcywgZnJvbVNlbGVjdGlvbiwgdG9TZWxlY3Rpb24pO1xuICBjb25zdCBmb3J3YXJkID0gdG90YWxTdGVwcyA+PSAwO1xuICBsZXQgbmV4dFVwSW5kZXggPSBzZWxlY3Rpb25JbmRleCArIChmb3J3YXJkID8gMSA6IC0gMSk7XG4gIGlmIChzZWxlY3Rpb25XcmFwcykge1xuICAgIG5leHRVcEluZGV4ID0gRnJhY3Rpb25hbFNlbGVjdGlvbk1peGluLmhlbHBlcnMud3JhcHBlZFNlbGVjdGlvbihuZXh0VXBJbmRleCwgaXRlbUNvdW50KTtcbiAgfSBlbHNlIGlmICghaXNJdGVtSW5kZXhJbkJvdW5kcyhlbGVtZW50LCBuZXh0VXBJbmRleCkpIHtcbiAgICBuZXh0VXBJbmRleCA9IG51bGw7IC8vIEF0IHN0YXJ0L2VuZCBvZiBsaXN0OyBkb24ndCBoYXZlIGEgbmV4dCBpdGVtIHRvIHNob3cuXG4gIH1cblxuICAvLyBQbGF5IHRoZSBhbmltYXRpb25zIHVzaW5nIHRob3NlIHRpbWluZ3MuXG4gIGxldCBsYXN0QW5pbWF0aW9uRGV0YWlscztcbiAgdGltaW5ncy5mb3JFYWNoKCh0aW1pbmcsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgaXRlbSA9IGl0ZW1zW2luZGV4XTtcbiAgICBpZiAodGltaW5nKSB7XG4gICAgICBzaG93SXRlbShpdGVtLCB0cnVlKTtcbiAgICAgIGNvbnN0IGFuaW1hdGlvbiA9IGl0ZW0uYW5pbWF0ZShrZXlmcmFtZXMsIHRpbWluZyk7XG4gICAgICBlbGVtZW50W2FuaW1hdGlvblN5bWJvbF1baW5kZXhdID0gYW5pbWF0aW9uO1xuICAgICAgaWYgKGluZGV4ID09PSBuZXh0VXBJbmRleCkge1xuICAgICAgICAvLyBUaGlzIGl0ZW0gd2lsbCBiZSBhbmltYXRlZCwgc28gd2lsbCBhbHJlYWR5IGJlIGluIHRoZSBkZXNpcmVkIHN0YXRlXG4gICAgICAgIC8vIGFmdGVyIHRoZSBhbmltYXRpb24gY29tcGxldGVzLlxuICAgICAgICBuZXh0VXBJbmRleCA9IG51bGw7XG4gICAgICB9XG4gICAgICBpZiAodGltaW5nLmVuZERlbGF5ICE9PSAwKSB7XG4gICAgICAgIC8vIFRoaXMgaXMgdGhlIGFuaW1hdGlvbiBmb3IgdGhlIGl0ZW0gdGhhdCB3aWxsIGJlIGxlZnQgc2VsZWN0ZWQuXG4gICAgICAgIC8vIFdlIHdhbnQgdG8gY2xlYW4gdXAgd2hlbiB0aGlzIGFuaW1hdGlvbiBjb21wbGV0ZXMuXG4gICAgICAgIGxhc3RBbmltYXRpb25EZXRhaWxzID0geyBhbmltYXRpb24sIGluZGV4LCB0aW1pbmcsIGZvcndhcmQgfTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVGhpcyBpdGVtIGRvZXNuJ3QgcGFydGljaXBhdGUgaW4gdGhlIGFuaW1hdGlvbi5cbiAgICAgIHNob3dJdGVtKGl0ZW0sIGZhbHNlKTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChsYXN0QW5pbWF0aW9uRGV0YWlscyAhPSBudWxsKSB7XG4gICAgLy8gQXJyYW5nZSBmb3IgY2xlYW4tdXAgd29yayB0byBiZSBwZXJmb3JtZWQuXG4gICAgbGFzdEFuaW1hdGlvbkRldGFpbHMubmV4dFVwSW5kZXggPSBuZXh0VXBJbmRleDtcbiAgICBsYXN0QW5pbWF0aW9uRGV0YWlscy5hbmltYXRpb24ub25maW5pc2ggPSBldmVudCA9PiBzZWxlY3Rpb25BbmltYXRpb25GaW5pc2hlZChlbGVtZW50LCBsYXN0QW5pbWF0aW9uRGV0YWlscyk7XG4gICAgZWxlbWVudFtsYXN0QW5pbWF0aW9uU3ltYm9sXSA9IGxhc3RBbmltYXRpb25EZXRhaWxzLmFuaW1hdGlvbjtcbiAgfSBlbHNlIHtcbiAgICAvLyBTaG91bGRuJ3QgaGFwcGVuIC0tIHdlIHNob3VsZCBhbHdheXMgaGF2ZSBhdCBsZWFzdCBvbmUgYW5pbWF0aW9uLlxuICAgIGVsZW1lbnRbcGxheWluZ0FuaW1hdGlvblN5bWJvbF0gPSBmYWxzZTtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIGdldEFuaW1hdGlvbkZvckl0ZW1JbmRleChlbGVtZW50LCBpbmRleCkge1xuICBpZiAoZWxlbWVudFthbmltYXRpb25TeW1ib2xdID09IG51bGwpIHtcbiAgICAvLyBOb3QgcmVhZHkgeWV0O1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGxldCBhbmltYXRpb24gPSBlbGVtZW50W2FuaW1hdGlvblN5bWJvbF1baW5kZXhdO1xuICBpZiAoIWFuaW1hdGlvbikge1xuICAgIGNvbnN0IGl0ZW0gPSBlbGVtZW50Lml0ZW1zW2luZGV4XTtcbiAgICBhbmltYXRpb24gPSBpdGVtLmFuaW1hdGUoZWxlbWVudC5zZWxlY3Rpb25BbmltYXRpb25LZXlmcmFtZXMsIHtcbiAgICAgIGR1cmF0aW9uOiBlbGVtZW50LnNlbGVjdGlvbkFuaW1hdGlvbkR1cmF0aW9uLFxuICAgICAgZmlsbDogJ2JvdGgnXG4gICAgfSk7XG4gICAgYW5pbWF0aW9uLnBhdXNlKCk7XG4gICAgZWxlbWVudFthbmltYXRpb25TeW1ib2xdW2luZGV4XSA9IGFuaW1hdGlvbjtcbiAgfVxuICByZXR1cm4gYW5pbWF0aW9uO1xufVxuXG5mdW5jdGlvbiBpc0l0ZW1JbmRleEluQm91bmRzKGVsZW1lbnQsIGluZGV4KSB7XG4gIHJldHVybiBpbmRleCA+PSAwICYmIGVsZW1lbnQuaXRlbXMgJiYgaW5kZXggPCBlbGVtZW50Lml0ZW1zLmxlbmd0aDtcbn1cblxuLypcbiAqIFJlbmRlciB0aGUgc2VsZWN0aW9uIHN0YXRlIG9mIHRoZSBlbGVtZW50LlxuICpcbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gcmUtcmVuZGVyIGEgcHJldmlvdXMgc2VsZWN0aW9uIHN0YXRlIChpZiB0aGVcbiAqIHNlbGVjdGVkSW5kZXggcGFyYW0gaXMgb21pdHRlZCksIHJlbmRlciB0aGUgc2VsZWN0aW9uIGluc3RhbnRseSBhdCBhIGdpdmVuXG4gKiB3aG9sZSBvciBmcmFjdGlvbmFsIHNlbGVjdGlvbiBpbmRleCwgb3IgYW5pbWF0ZSB0byBhIGdpdmVuIHNlbGVjdGlvbiBpbmRleC5cbiAqXG4gKiBUaGVyZSBhcmUgc2V2ZXJhbCBkaXN0aW5jdCBzY2VuYXJpb3Mgd2UgbmVlZCB0byBjb3ZlcjpcbiAqXG4gKiAxLiBJbml0aWFsIHBvc2l0aW9uaW5nLCBvciByZXBvc2l0aW9uaW5nIGFmdGVyIGNoYW5naW5nIGEgcHJvcGVydHkgbGlrZVxuICogICAgc2VsZWN0aW9uQW5pbWF0aW9uS2V5ZnJhbWVzIHRoYXQgYWZmZWN0cyByZW5kZXJpbmcuXG4gKiAyLiBBbmltYXRlIG9uIHNlbGVjdGVkSW5kZXggY2hhbmdlLiBUaGlzIHNob3VsZCBvdmVycmlkZSBhbnkgYW5pbWF0aW9uL3N3aXBlXG4gKiAgICBhbHJlYWR5IGluIHByb2dyZXNzLlxuICogMy4gSW5zdGFudGx5IHJlbmRlciB0aGUgY3VycmVudCBwb3NpdGlvbiBvZiBhIGRyYWcgb3BlcmF0aW9uIGluIHByb2dyZXNzLlxuICogNC4gQ29tcGxldGUgYSBkcmFnIG9wZXJhdGlvbi4gSWYgdGhlIGRyYWcgd2Fzbid0IGZhciBlbm91Z2ggdG8gYWZmZWN0XG4gKiAgICBzZWxlY3Rpb24sIHdlJ2xsIGp1c3QgYmUgcmVzdG9yaW5nIHRoZSBzZWxlY3RlZEZyYWN0aW9uIHRvIDAuXG4gKlxuICogSWYgdGhlIGxpc3QgZG9lcyBub3Qgd3JhcCwgYW55IHNlbGVjdGlvbiBwb3NpdGlvbiBvdXRzaWRlIHRoZSBsaXN0J3MgYm91bmRzXG4gKiB3aWxsIGJlIGRhbXBlZCB0byBwcm9kdWNlIGEgdmlzdWFsIGVmZmVjdCBvZiB0ZW5zaW9uLlxuICovXG5mdW5jdGlvbiByZW5kZXJTZWxlY3Rpb24oZWxlbWVudCwgc2VsZWN0ZWRJbmRleD1lbGVtZW50LnNlbGVjdGVkSW5kZXgsIHNlbGVjdGVkRnJhY3Rpb249ZWxlbWVudC5zZWxlY3RlZEZyYWN0aW9uKSB7XG4gIGNvbnN0IGl0ZW1Db3VudCA9IGVsZW1lbnQuaXRlbXMgPyBlbGVtZW50Lml0ZW1zLmxlbmd0aCA6IDA7XG4gIGlmIChpdGVtQ291bnQgPT09IDApIHtcbiAgICAvLyBOb3RoaW5nIHRvIHJlbmRlci5cbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHNlbGVjdGVkSW5kZXggPCAwKSB7XG4gICAgLy8gVE9ETzogSGFuZGxlIG5vIHNlbGVjdGlvbi5cbiAgICByZXR1cm47XG4gIH1cbiAgbGV0IHNlbGVjdGlvbiA9IHNlbGVjdGVkSW5kZXggKyBzZWxlY3RlZEZyYWN0aW9uO1xuICBpZiAoZWxlbWVudC5zZWxlY3Rpb25XcmFwcykge1xuICAgIC8vIEFwcGx5IHdyYXBwaW5nIHRvIGVuc3VyZSBjb25zaXN0ZW50IHJlcHJlc2VudGF0aW9uIG9mIHNlbGVjdGlvbi5cbiAgICBzZWxlY3Rpb24gPSBGcmFjdGlvbmFsU2VsZWN0aW9uTWl4aW4uaGVscGVycy53cmFwcGVkU2VsZWN0aW9uKHNlbGVjdGlvbiwgaXRlbUNvdW50KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBBcHBseSBkYW1waW5nIGlmIG5lY2Vzc2FyeS5cbiAgICBzZWxlY3Rpb24gPSBGcmFjdGlvbmFsU2VsZWN0aW9uTWl4aW4uaGVscGVycy5kYW1wZWRTZWxlY3Rpb24oc2VsZWN0aW9uLCBpdGVtQ291bnQpO1xuICB9XG4gIGNvbnN0IHByZXZpb3VzU2VsZWN0aW9uID0gZWxlbWVudFtwcmV2aW91c1NlbGVjdGlvblN5bWJvbF07XG4gIC8vIFRPRE86IElmIGFuIGl0ZW0gY2hhbmdlcyBwb3NpdGlvbiBpbiB0aGUgRE9NLCB3ZSBlbmQgdXAgYW5pbWF0aW5nIGZyb21cbiAgLy8gaXRzIG9sZCBpbmRleCB0byBpdHMgbmV3IGluZGV4LCBidXQgd2UgcmVhbGx5IGRvbid0IHdhbnQgdG8gYW5pbWF0ZSBhdCBhbGwuXG4gIGlmICghZWxlbWVudFtzeW1ib2xzLmRyYWdnaW5nXSAmJiBwcmV2aW91c1NlbGVjdGlvbiAhPSBudWxsICYmXG4gICAgICBwcmV2aW91c1NlbGVjdGlvbiAhPT0gc2VsZWN0aW9uKSB7XG4gICAgLy8gQW5pbWF0ZSBzZWxlY3Rpb24gZnJvbSBwcmV2aW91cyBzdGF0ZSB0byBuZXcgc3RhdGUuXG4gICAgYW5pbWF0ZVNlbGVjdGlvbihlbGVtZW50LCBwcmV2aW91c1NlbGVjdGlvbiwgc2VsZWN0aW9uKTtcbiAgfSBlbHNlIGlmIChzZWxlY3RlZEZyYWN0aW9uID09PSAwICYmIGVsZW1lbnRbcGxheWluZ0FuaW1hdGlvblN5bWJvbF0pIHtcbiAgICAvLyBBbHJlYWR5IGluIHByb2Nlc3Mgb2YgYW5pbWF0aW5nIHRvIGZyYWN0aW9uIDAuIER1cmluZyB0aGF0IHByb2Nlc3MsXG4gICAgLy8gaWdub3JlIHN1YnNlcXVlbnQgYXR0ZW1wdHMgdG8gcmVuZGVyU2VsZWN0aW9uIHRvIGZyYWN0aW9uIDAuXG4gICAgcmV0dXJuO1xuICB9IGVsc2Uge1xuICAgIC8vIFJlbmRlciBjdXJyZW50IHNlbGVjdGlvbiBzdGF0ZSBpbnN0YW50bHkuXG4gICAgcmVuZGVyU2VsZWN0aW9uSW5zdGFudGx5KGVsZW1lbnQsIHNlbGVjdGlvbik7XG4gIH1cbiAgZWxlbWVudFtwcmV2aW91c1NlbGVjdGlvblN5bWJvbF0gPSBzZWxlY3Rpb247XG59XG5cbi8qXG4gKiBJbnN0YW50bHkgcmVuZGVyIChkb24ndCBhbmltYXRlKSB0aGUgZWxlbWVudCdzIGl0ZW1zIGF0IHRoZSBnaXZlbiB3aG9sZSBvclxuICogZnJhY3Rpb25hbCBzZWxlY3Rpb24gaW5kZXguXG4gKi9cbmZ1bmN0aW9uIHJlbmRlclNlbGVjdGlvbkluc3RhbnRseShlbGVtZW50LCB0b1NlbGVjdGlvbikge1xuICBpZiAoZWxlbWVudFtyZXNldEFuaW1hdGlvbnNPbk5leHRSZW5kZXJTeW1ib2xdKSB7XG4gICAgcmVzZXRBbmltYXRpb25zKGVsZW1lbnQpO1xuICAgIGVsZW1lbnRbcmVzZXRBbmltYXRpb25zT25OZXh0UmVuZGVyU3ltYm9sXSA9IGZhbHNlO1xuICB9XG4gIGNvbnN0IGFuaW1hdGlvbkZyYWN0aW9ucyA9IG1peGluLmhlbHBlcnMuYW5pbWF0aW9uRnJhY3Rpb25zRm9yU2VsZWN0aW9uKGVsZW1lbnQsIHRvU2VsZWN0aW9uKTtcbiAgYW5pbWF0aW9uRnJhY3Rpb25zLm1hcCgoYW5pbWF0aW9uRnJhY3Rpb24sIGluZGV4KSA9PiB7XG4gICAgY29uc3QgaXRlbSA9IGVsZW1lbnQuaXRlbXNbaW5kZXhdO1xuICAgIGlmIChhbmltYXRpb25GcmFjdGlvbiAhPSBudWxsKSB7XG4gICAgICBzaG93SXRlbShpdGVtLCB0cnVlKTtcbiAgICAgIHNldEFuaW1hdGlvbkZyYWN0aW9uKGVsZW1lbnQsIGluZGV4LCBhbmltYXRpb25GcmFjdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNob3dJdGVtKGl0ZW0sIGZhbHNlKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKlxuICogV2UgbWFpbnRhaW4gYW4gYXJyYXkgY29udGFpbmluZyBhbiBhbmltYXRpb24gcGVyIGl0ZW0uIFRoaXMgaXMgdXNlZCBmb3IgdHdvXG4gKiByZWFzb25zOlxuICpcbiAqICogRHVyaW5nIGEgZHJhZyBvcGVyYXRpb24sIHdlIHdhbnQgdG8gYmUgYWJsZSB0byByZXVzZSBhbmltYXRpb25zIGJldHdlZW5cbiAqICAgZHJhZyB1cGRhdGVzLlxuICogKiBXaGVuIGEgc2VsZWN0aW9uIGFuaW1hdGlvbiBjb21wbGV0ZXMsIHdlIG5lZWQgdG8gYmUgYWJsZSB0byBsZWF2ZSB0aGVcbiAqICAgdmlzaWJpbGUgaXRlbXMgaW4gYSBwYXVzZWQgc3RhdGUuIExhdGVyLCB3ZSdsbCB3YW50IHRvIGJlIGFibGUgdG8gY2xlYW4gdXBcbiAqICAgdGhvc2UgYW5pbWF0aW9ucy5cbiAqXG4gKiBOb3RlIHRoYXQgdGhpcyBhcnJheSBpcyBzcGFyc2U6IGl0IHdpbGwgb25seSBob2xkIHVwIGZyb20gMOKAkzMgYW5pbWF0aW9ucyBhdFxuICogYW55IGdpdmVuIHBvaW50LlxuICovXG5mdW5jdGlvbiByZXNldEFuaW1hdGlvbnMoZWxlbWVudCkge1xuICBjb25zdCBhbmltYXRpb25zID0gZWxlbWVudFthbmltYXRpb25TeW1ib2xdO1xuICBpZiAoYW5pbWF0aW9ucykge1xuICAgIC8vIENhbmNlbCBleGlzdGluZyBhbmltYXRpb25zIHRvIHJlbW92ZSB0aGUgZWZmZWN0cyB0aGV5J3JlIGFwcGx5aW5nLlxuICAgIGFuaW1hdGlvbnMuZm9yRWFjaCgoYW5pbWF0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGFuaW1hdGlvbikge1xuICAgICAgICBhbmltYXRpb24uY2FuY2VsKCk7XG4gICAgICAgIGFuaW1hdGlvbnNbaW5kZXhdID0gbnVsbDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBjb25zdCBpdGVtQ291bnQgPSBlbGVtZW50Lml0ZW1zID8gZWxlbWVudC5pdGVtcy5sZW5ndGggOiAwO1xuICBpZiAoIWFuaW1hdGlvbnMgfHwgYW5pbWF0aW9ucy5sZW5ndGggIT09IGl0ZW1Db3VudCkge1xuICAgIC8vIEhhdmVuJ3QgYW5pbWF0ZWQgYmVmb3JlIHdpdGggdGhpcyBudW1iZXIgb2YgaXRlbXM7IChyZSljcmVhdGUgYXJyYXkuXG4gICAgZWxlbWVudFthbmltYXRpb25TeW1ib2xdID0gbmV3IEFycmF5KGl0ZW1Db3VudCk7XG4gIH1cbn1cblxuLypcbiAqIFRoZSBsYXN0IGFuaW1hdGlvbiBpbiBvdXIgc2VsZWN0aW9uIGFuaW1hdGlvbiBoYXMgY29tcGxldGVkLiBDbGVhbiB1cC5cbiAqL1xuZnVuY3Rpb24gc2VsZWN0aW9uQW5pbWF0aW9uRmluaXNoZWQoZWxlbWVudCwgZGV0YWlscykge1xuXG4gIC8vIFdoZW4gdGhlIGxhc3QgYW5pbWF0aW9uIGNvbXBsZXRlcywgc2hvdyB0aGUgbmV4dCBpdGVtIGluIHRoZSBkaXJlY3Rpb25cbiAgLy8gd2UncmUgZ29pbmcuIFdhaXRpbmcgdG8gdGhhdCB1bnRpbCB0aGlzIHBvaW50IGlzIGEgYml0IG9mIGEgaGFjayB0byBhdm9pZFxuICAvLyBoYXZpbmcgYSBuZXh0IGl0ZW0gdGhhdCdzIGhpZ2hlciBpbiB0aGUgbmF0dXJhbCB6LW9yZGVyIG9ic2N1cmUgb3RoZXIgaXRlbXNcbiAgLy8gZHVyaW5nIGFuaW1hdGlvbi5cbiAgY29uc3QgbmV4dFVwSW5kZXggPSBkZXRhaWxzLm5leHRVcEluZGV4O1xuICBpZiAobmV4dFVwSW5kZXggIT0gbnVsbCkge1xuICAgIGlmIChlbGVtZW50W2FuaW1hdGlvblN5bWJvbF1bbmV4dFVwSW5kZXhdKSB7XG4gICAgICAvLyBDYW5jZWwgZXhpc3Rpbmcgc2VsZWN0aW9uIGFuaW1hdGlvbiBzbyB3ZSBjYW4gY29uc3RydWN0IGEgbmV3IG9uZS5cbiAgICAgIGVsZW1lbnRbYW5pbWF0aW9uU3ltYm9sXVtuZXh0VXBJbmRleF0uY2FuY2VsKCk7XG4gICAgICBlbGVtZW50W2FuaW1hdGlvblN5bWJvbF1bbmV4dFVwSW5kZXhdID0gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgYW5pbWF0aW9uRnJhY3Rpb24gPSBkZXRhaWxzLmZvcndhcmQgPyAwIDogMTtcbiAgICBzZXRBbmltYXRpb25GcmFjdGlvbihlbGVtZW50LCBuZXh0VXBJbmRleCwgYW5pbWF0aW9uRnJhY3Rpb24pO1xuICAgIHNob3dJdGVtKGVsZW1lbnQuaXRlbXNbbmV4dFVwSW5kZXhdLCB0cnVlKTtcbiAgfVxuXG4gIGVsZW1lbnRbbGFzdEFuaW1hdGlvblN5bWJvbF0ub25maW5pc2ggPSBudWxsO1xuICBlbGVtZW50W3BsYXlpbmdBbmltYXRpb25TeW1ib2xdID0gZmFsc2U7XG59XG5cbi8qXG4gKiBQYXVzZSB0aGUgaW5kaWNhdGVkIGFuaW1hdGlvbiBhbmQgaGF2ZSBpdCBzaG93IHRoZSBhbmltYXRpb24gYXQgdGhlIGdpdmVuXG4gKiBmcmFjdGlvbiAoYmV0d2VlbiAwIGFuZCAxKSBvZiB0aGUgd2F5IHRocm91Z2ggdGhlIGFuaW1hdGlvbi5cbiAqL1xuZnVuY3Rpb24gc2V0QW5pbWF0aW9uRnJhY3Rpb24oZWxlbWVudCwgaXRlbUluZGV4LCBmcmFjdGlvbikge1xuICBjb25zdCBhbmltYXRpb24gPSBnZXRBbmltYXRpb25Gb3JJdGVtSW5kZXgoZWxlbWVudCwgaXRlbUluZGV4KTtcbiAgaWYgKGFuaW1hdGlvbikge1xuICAgIGNvbnN0IGR1cmF0aW9uID0gZWxlbWVudC5zZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvbjtcbiAgICBpZiAoZHVyYXRpb24pIHtcbiAgICAgIGFuaW1hdGlvbi5jdXJyZW50VGltZSA9IGZyYWN0aW9uICogZHVyYXRpb247XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNob3dJdGVtKGl0ZW0sIGZsYWcpIHtcbiAgaXRlbS5zdHlsZS52aXNpYmlsaXR5ID0gZmxhZyA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nO1xufVxuXG4vKlxuICogRmlndXJlIG91dCBob3cgbWFueSBzdGVwcyBpdCB3aWxsIHRha2UgdG8gZ28gZnJvbSBmcm9tU2VsZWN0aW9uIHRvXG4gKiB0b1NlbGVjdGlvbi4gVG8gZ28gZnJvbSBpdGVtIDMgdG8gaXRlbSA0IGlzIG9uZSBzdGVwLlxuICpcbiAqIElmIHdyYXBwaW5nIGlzIGFsbG93ZWQsIHRoZW4gZ29pbmcgZnJvbSB0aGUgbGFzdCBpdGVtIHRvIHRoZSBmaXJzdCB3aWxsIHRha2VcbiAqIG9uZSBzdGVwIChmb3J3YXJkKSwgYW5kIGdvaW5nIGZyb20gdGhlIGZpcnN0IGl0ZW0gdG8gdGhlIGxhc3Qgd2lsbCB0YWtlIG9uZVxuICogc3RlcCAoYmFja3dhcmQpLlxuICovXG5mdW5jdGlvbiBzdGVwc1RvSW5kZXgobGVuZ3RoLCBhbGxvd1dyYXAsIGZyb21TZWxlY3Rpb24sIHRvU2VsZWN0aW9uKSB7XG4gIGxldCBzdGVwcyA9IHRvU2VsZWN0aW9uIC0gZnJvbVNlbGVjdGlvbjtcbiAgLy8gV3JhcHBpbmcgb25seSBraWNrcyBpbiB3aGVuIGxpc3QgaGFzIG1vcmUgdGhhbiAxIGl0ZW0uXG4gIGlmIChhbGxvd1dyYXAgJiYgbGVuZ3RoID4gMSkge1xuICAgIGNvbnN0IHdyYXBTdGVwcyA9IGxlbmd0aCAtIE1hdGguYWJzKHN0ZXBzKTtcbiAgICBpZiAod3JhcFN0ZXBzIDw9IDEpIHtcbiAgICAgIC8vIFNwZWNpYWwgY2FzZVxuICAgICAgc3RlcHMgPSBzdGVwcyA8IDAgP1xuICAgICAgICB3cmFwU3RlcHMgOiAgIC8vIFdyYXAgZm9yd2FyZCBmcm9tIGxhc3QgaXRlbSB0byBmaXJzdC5cbiAgICAgICAgLXdyYXBTdGVwczsgICAvLyBXcmFwIGJhY2t3YXJkIGZyb20gZmlyc3QgaXRlbSB0byBsYXN0LlxuICAgIH1cbiAgfVxuICByZXR1cm4gc3RlcHM7XG59XG4iLCJpbXBvcnQgc3ltYm9scyBmcm9tICcuL3N5bWJvbHMnO1xuXG5cbi8vIFVzZWQgdG8gYXNzaWduIHVuaXF1ZSBJRHMgdG8gaXRlbSBlbGVtZW50cyB3aXRob3V0IElEcy5cbmxldCBpZENvdW50ID0gMDtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFNlbGVjdGlvbkFyaWFBY3RpdmUuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCB0cmVhdHMgdGhlIHNlbGVjdGVkIGl0ZW0gaW4gYSBsaXN0IGFzIHRoZSBhY3RpdmUgaXRlbSBpbiBBUklBXG4gICAqIGFjY2Vzc2liaWxpdHkgdGVybXMuXG4gICAqXG4gICAqIEhhbmRsaW5nIEFSSUEgc2VsZWN0aW9uIHN0YXRlIHByb3Blcmx5IGlzIGFjdHVhbGx5IHF1aXRlIGNvbXBsZXg6XG4gICAqXG4gICAqICogVGhlIGl0ZW1zIGluIHRoZSBsaXN0IG5lZWQgdG8gYmUgaW5kaWNhdGVkIGFzIHBvc3NpYmxlIGl0ZW1zIHZpYSBhbiBBUklBXG4gICAqICAgYHJvbGVgIGF0dHJpYnV0ZSB2YWx1ZSBzdWNoIGFzIFwib3B0aW9uXCIuXG4gICAqICogVGhlIHNlbGVjdGVkIGl0ZW0gbmVlZCB0byBiZSBtYXJrZWQgYXMgc2VsZWN0ZWQgYnkgc2V0dGluZyB0aGUgaXRlbSdzXG4gICAqICAgYGFyaWEtc2VsZWN0ZWRgIGF0dHJpYnV0ZSB0byB0cnVlICphbmQqIHRoZSBvdGhlciBpdGVtcyBuZWVkIGJlIG1hcmtlZCBhc1xuICAgKiAgICpub3QqIHNlbGVjdGVkIGJ5IHNldHRpbmcgYGFyaWEtc2VsZWN0ZWRgIHRvIGZhbHNlLlxuICAgKiAqIFRoZSBvdXRlcm1vc3QgZWxlbWVudCB3aXRoIHRoZSBrZXlib2FyZCBmb2N1cyBuZWVkcyB0byBoYXZlIGF0dHJpYnV0ZXNcbiAgICogICBzZXQgb24gaXQgc28gdGhhdCB0aGUgc2VsZWN0aW9uIGlzIGtub3dhYmxlIGF0IHRoZSBsaXN0IGxldmVsIHZpYSB0aGVcbiAgICogICBgYXJpYS1hY3RpdmVkZXNjZW5kYW50YCBhdHRyaWJ1dGUuXG4gICAqICogVXNlIG9mIGBhcmlhLWFjdGl2ZWRlc2NlbmRhbnRgIGluIHR1cm4gcmVxdWlyZXMgdGhhdCBhbGwgaXRlbXMgaW4gdGhlXG4gICAqICAgbGlzdCBoYXZlIElEIGF0dHJpYnV0ZXMgYXNzaWduZWQgdG8gdGhlbS5cbiAgICpcbiAgICogVGhpcyBtaXhpbiB0cmllcyB0byBhZGRyZXNzIGFsbCBvZiB0aGUgYWJvdmUgcmVxdWlyZW1lbnRzLiBUbyB0aGF0IGVuZCxcbiAgICogdGhpcyBtaXhpbiB3aWxsIGFzc2lnbiBnZW5lcmF0ZWQgSURzIHRvIGFueSBpdGVtIHRoYXQgZG9lc24ndCBhbHJlYWR5IGhhdmVcbiAgICogYW4gSUQuXG4gICAqXG4gICAqIEFSSUEgcmVsaWVzIG9uIGVsZW1lbnRzIHRvIHByb3ZpZGUgYHJvbGVgIGF0dHJpYnV0ZXMuIFRoaXMgbWl4aW4gd2lsbCBhcHBseVxuICAgKiBhIGRlZmF1bHQgcm9sZSBvZiBcImxpc3Rib3hcIiBvbiB0aGUgb3V0ZXIgbGlzdCBpZiBpdCBkb2Vzbid0IGFscmVhZHkgaGF2ZSBhblxuICAgKiBleHBsaWNpdCByb2xlLiBTaW1pbGFybHksIHRoaXMgbWl4aW4gd2lsbCBhcHBseSBhIGRlZmF1bHQgcm9sZSBvZiBcIm9wdGlvblwiXG4gICAqIHRvIGFueSBsaXN0IGl0ZW0gdGhhdCBkb2VzIG5vdCBhbHJlYWR5IGhhdmUgYSByb2xlIHNwZWNpZmllZC5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIGEgc2V0IG9mIG1lbWJlcnMgdGhhdCBtYW5hZ2UgdGhlIHN0YXRlIG9mIHRoZSBzZWxlY3Rpb246XG4gICAqIGBbc3ltYm9scy5pdGVtU2VsZWN0ZWRdYCwgYGl0ZW1BZGRlZGAsIGFuZCBgc2VsZWN0ZWRJbmRleGAuIFlvdSBjYW5cbiAgICogc3VwcGx5IHRoZXNlIHlvdXJzZWxmLCBvciBkbyBzbyB2aWFcbiAgICogW1NpbmdsZVNlbGVjdGlvbk1peGluXShTaW5nbGVTZWxlY3Rpb25NaXhpbi5tZCkuXG4gICAqL1xuICBjbGFzcyBTZWxlY3Rpb25BcmlhQWN0aXZlIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jb25uZWN0ZWRDYWxsYmFjaykgeyBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpOyB9XG4gICAgICAvLyBTZXQgZGVmYXVsdCBBUklBIHJvbGUuXG4gICAgICBpZiAodGhpcy5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSA9PSBudWxsICYmIHRoaXNbc3ltYm9scy5kZWZhdWx0c10ucm9sZSkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgncm9sZScsIHRoaXNbc3ltYm9scy5kZWZhdWx0c10ucm9sZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IFtzeW1ib2xzLmRlZmF1bHRzXSgpIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRzID0gc3VwZXJbc3ltYm9scy5kZWZhdWx0c10gfHwge307XG4gICAgICBkZWZhdWx0cy5yb2xlID0gJ2xpc3Rib3gnO1xuICAgICAgcmV0dXJuIGRlZmF1bHRzO1xuICAgIH1cblxuICAgIFtzeW1ib2xzLml0ZW1BZGRlZF0oaXRlbSkge1xuICAgICAgaWYgKHN1cGVyW3N5bWJvbHMuaXRlbUFkZGVkXSkgeyBzdXBlcltzeW1ib2xzLml0ZW1BZGRlZF0oaXRlbSk7IH1cblxuICAgICAgaWYgKCFpdGVtLmdldEF0dHJpYnV0ZSgncm9sZScpKSB7XG4gICAgICAgIC8vIEFzc2lnbiBhIGRlZmF1bHQgQVJJQSByb2xlLlxuICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgncm9sZScsICdvcHRpb24nKTtcbiAgICAgIH1cblxuICAgICAgLy8gRW5zdXJlIGVhY2ggaXRlbSBoYXMgYW4gSUQgc28gd2UgY2FuIHNldCBhcmlhLWFjdGl2ZWRlc2NlbmRhbnQgb24gdGhlXG4gICAgICAvLyBvdmVyYWxsIGxpc3Qgd2hlbmV2ZXIgdGhlIHNlbGVjdGlvbiBjaGFuZ2VzLlxuICAgICAgLy9cbiAgICAgIC8vIFRoZSBJRCB3aWxsIHRha2UgdGhlIGZvcm0gb2YgYSBiYXNlIElEIHBsdXMgYSB1bmlxdWUgaW50ZWdlci4gVGhlIGJhc2VcbiAgICAgIC8vIElEIHdpbGwgYmUgaW5jb3Jwb3JhdGUgdGhlIGNvbXBvbmVudCdzIG93biBJRC4gRS5nLiwgaWYgYSBjb21wb25lbnQgaGFzXG4gICAgICAvLyBJRCBcImZvb1wiLCB0aGVuIGl0cyBpdGVtcyB3aWxsIGhhdmUgSURzIHRoYXQgbG9vayBsaWtlIFwiX2Zvb09wdGlvbjFcIi4gSWZcbiAgICAgIC8vIHRoZSBjb21wbmVudCBoYXMgbm8gSUQgaXRzZWxmLCBpdHMgaXRlbXMgd2lsbCBnZXQgSURzIHRoYXQgbG9vayBsaWtlXG4gICAgICAvLyBcIl9vcHRpb24xXCIuIEl0ZW0gSURzIGFyZSBwcmVmaXhlZCB3aXRoIGFuIHVuZGVyc2NvcmUgdG8gZGlmZmVyZW50aWF0ZVxuICAgICAgLy8gdGhlbSBmcm9tIG1hbnVhbGx5LWFzc2lnbmVkIElEcywgYW5kIHRvIG1pbmltaXplIHRoZSBwb3RlbnRpYWwgZm9yIElEXG4gICAgICAvLyBjb25mbGljdHMuXG4gICAgICBpZiAoIWl0ZW0uaWQpIHtcbiAgICAgICAgY29uc3QgYmFzZUlkID0gdGhpcy5pZCA/XG4gICAgICAgICAgICBcIl9cIiArIHRoaXMuaWQgKyBcIk9wdGlvblwiIDpcbiAgICAgICAgICAgIFwiX29wdGlvblwiO1xuICAgICAgICBpdGVtLmlkID0gYmFzZUlkICsgaWRDb3VudCsrO1xuICAgICAgfVxuICAgIH1cblxuICAgIFtzeW1ib2xzLml0ZW1TZWxlY3RlZF0oaXRlbSwgc2VsZWN0ZWQpIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLml0ZW1TZWxlY3RlZF0pIHsgc3VwZXJbc3ltYm9scy5pdGVtU2VsZWN0ZWRdKGl0ZW0sIHNlbGVjdGVkKTsgfVxuICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCBzZWxlY3RlZCk7XG4gICAgICBjb25zdCBpdGVtSWQgPSBpdGVtLmlkO1xuICAgICAgaWYgKGl0ZW1JZCAmJiBzZWxlY3RlZCkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYXJpYS1hY3RpdmVkZXNjZW5kYW50JywgaXRlbUlkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgc2VsZWN0ZWRJdGVtKCkge1xuICAgICAgcmV0dXJuIHN1cGVyLnNlbGVjdGVkSXRlbTtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGVkSXRlbShpdGVtKSB7XG4gICAgICBpZiAoJ3NlbGVjdGVkSXRlbScgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJdGVtID0gaXRlbTsgfVxuICAgICAgaWYgKGl0ZW0gPT0gbnVsbCkge1xuICAgICAgICAvLyBTZWxlY3Rpb24gd2FzIHJlbW92ZWQuXG4gICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBTZWxlY3Rpb25BcmlhQWN0aXZlO1xufTtcbiIsImltcG9ydCBzeW1ib2xzIGZyb20gJy4uL3NyYy9zeW1ib2xzJztcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFNlbGVjdGlvbkhpZ2hsaWdodC4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIFRlbXBsYXRlIG1peGluIHdoaWNoIGFwcGxpZXMgc3RhbmRhcmQgaGlnaGxpZ2h0IGNvbG9ycyB0byBhIHNlbGVjdGVkIGl0ZW0uXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gaGlnaGxpZ2h0cyB0ZXh0dWFsIGl0ZW1zIChlLmcuLCBpbiBhIGxpc3QpIGluIGEgc3RhbmRhcmQgd2F5IGJ5XG4gICAqIHVzaW5nIHRoZSBDU1MgYGhpZ2hsaWdodGAgYW5kIGBoaWdobGlnaHR0ZXh0YCBjb2xvciB2YWx1ZXMuIFRoZXNlIHZhbHVlc1xuICAgKiByZXNwZWN0IG9wZXJhdGluZyBzeXN0ZW0gZGVmYXVsdHMgYW5kIHVzZXIgcHJlZmVyZW5jZXMsIGFuZCBoZW5jZSBhcmUgZ29vZFxuICAgKiBkZWZhdWx0IHZhbHVlcyBmb3IgaGlnaGxpZ2h0IGNvbG9ycy5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIGEgYHNlbGVjdGVkYCBjbGFzcyB0byBiZSBhcHBsaWVkIHRvIHNlbGVjdGVkIGl0ZW1zLiBZb3VcbiAgICogY2FuIHVzZSBbQ29udGVudEl0ZW1zTWl4aW5dKENvbnRlbnRJdGVtc01peGluLm1kKSBmb3IgdGhhdCBwdXJwb3NlLlxuICAgKi9cbiAgY2xhc3MgU2VsZWN0aW9uSGlnaGxpZ2h0IGV4dGVuZHMgYmFzZSB7XG5cbiAgICBnZXQgW3N5bWJvbHMudGVtcGxhdGVdKCkge1xuICAgICAgY29uc3QgYmFzZVRlbXBsYXRlID0gc3VwZXJbc3ltYm9scy50ZW1wbGF0ZV0gfHwgJyc7XG4gICAgICByZXR1cm4gYFxuICAgICAgICA8c3R5bGU+XG4gICAgICAgICAgOmhvc3QoW2dlbmVyaWM9XCJcIl0pIDo6c2xvdHRlZCguc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhpZ2hsaWdodDtcbiAgICAgICAgICAgIGNvbG9yOiBoaWdobGlnaHR0ZXh0O1xuICAgICAgICAgIH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgJHtiYXNlVGVtcGxhdGV9XG4gICAgICBgO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIFNlbGVjdGlvbkhpZ2hsaWdodDtcbn07XG4iLCIvKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFNlbGVjdGlvbkluVmlldy4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIHNjcm9sbHMgYSBjb250YWluZXIgdG8gZW5zdXJlIHRoYXQgYSBuZXdseS1zZWxlY3RlZCBpdGVtIGlzXG4gICAqIHZpc2libGUgdG8gdGhlIHVzZXIuXG4gICAqXG4gICAqIFdoZW4gdGhlIHNlbGVjdGVkIGl0ZW0gaW4gYSBsaXN0LWxpa2UgY29tcG9uZW50IGNoYW5nZXMsIGl0J3MgZWFzaWVyIGZvclxuICAgKiB0aGUgdG8gY29uZmlybSB0aGF0IHRoZSBzZWxlY3Rpb24gaGFzIGNoYW5nZWQgdG8gYW4gYXBwcm9wcmlhdGUgaXRlbSBpZiB0aGVcbiAgICogdXNlciBjYW4gYWN0dWFsbHkgc2VlIHRoYXQgaXRlbS5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIGEgYHNlbGVjdGVkSXRlbWAgcHJvcGVydHkgdG8gYmUgc2V0IHdoZW4gdGhlIHNlbGVjdGlvblxuICAgKiBjaGFuZ2VzLiBZb3UgY2FuIHN1cHBseSB0aGF0IHlvdXJzZWxmLCBvciB1c2VcbiAgICogW1NpbmdsZVNlbGVjdGlvbk1peGluXShTaW5nbGVTZWxlY3Rpb25NaXhpbi5tZCkuXG4gICAqL1xuICBjbGFzcyBTZWxlY3Rpb25JblZpZXcgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKSB7IHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7IH1cbiAgICAgIGNvbnN0IHNlbGVjdGVkSXRlbSA9IHRoaXMuc2VsZWN0ZWRJdGVtO1xuICAgICAgaWYgKHNlbGVjdGVkSXRlbSkge1xuICAgICAgICB0aGlzLnNjcm9sbEl0ZW1JbnRvVmlldyhzZWxlY3RlZEl0ZW0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGdldCBzZWxlY3RlZEl0ZW0oKSB7XG4gICAgICByZXR1cm4gc3VwZXIuc2VsZWN0ZWRJdGVtO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0ZWRJdGVtKGl0ZW0pIHtcbiAgICAgIGlmICgnc2VsZWN0ZWRJdGVtJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEl0ZW0gPSBpdGVtOyB9XG4gICAgICBpZiAoaXRlbSkge1xuICAgICAgICAvLyBLZWVwIHRoZSBzZWxlY3RlZCBpdGVtIGluIHZpZXcuXG4gICAgICAgIHRoaXMuc2Nyb2xsSXRlbUludG9WaWV3KGl0ZW0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNjcm9sbCB0aGUgZ2l2ZW4gZWxlbWVudCBjb21wbGV0ZWx5IGludG8gdmlldywgbWluaW1pemluZyB0aGUgZGVncmVlIG9mXG4gICAgICogc2Nyb2xsaW5nIHBlcmZvcm1lZC5cbiAgICAgKlxuICAgICAqIEJsaW5rIGhhcyBhIGBzY3JvbGxJbnRvVmlld0lmTmVlZGVkKClgIGZ1bmN0aW9uIHRoYXQgZG9lcyBzb21ldGhpbmdcbiAgICAgKiBzaW1pbGFyLCBidXQgdW5mb3J0dW5hdGVseSBpdCdzIG5vbi1zdGFuZGFyZCwgYW5kIGluIGFueSBldmVudCBvZnRlbiBlbmRzXG4gICAgICogdXAgc2Nyb2xsaW5nIG1vcmUgdGhhbiBpcyBhYnNvbHV0ZWx5IG5lY2Vzc2FyeS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGl0ZW0gLSB0aGUgaXRlbSB0byBzY3JvbGwgaW50byB2aWV3LlxuICAgICAqL1xuICAgIHNjcm9sbEl0ZW1JbnRvVmlldyhpdGVtKSB7XG4gICAgICBpZiAoc3VwZXIuc2Nyb2xsSXRlbUludG9WaWV3KSB7IHN1cGVyLnNjcm9sbEl0ZW1JbnRvVmlldygpOyB9XG4gICAgICAvLyBHZXQgdGhlIHJlbGF0aXZlIHBvc2l0aW9uIG9mIHRoZSBpdGVtIHdpdGggcmVzcGVjdCB0byB0aGUgdG9wIG9mIHRoZVxuICAgICAgLy8gbGlzdCdzIHNjcm9sbGFibGUgY2FudmFzLiBBbiBpdGVtIGF0IHRoZSB0b3Agb2YgdGhlIGxpc3Qgd2lsbCBoYXZlIGFcbiAgICAgIC8vIGVsZW1lbnRUb3Agb2YgMC5cblxuICAgICAgY29uc3Qgc2Nyb2xsVGFyZ2V0ID0gdGhpcy5zY3JvbGxUYXJnZXQ7XG4gICAgICBjb25zdCBlbGVtZW50VG9wID0gaXRlbS5vZmZzZXRUb3AgLSBzY3JvbGxUYXJnZXQub2Zmc2V0VG9wIC0gc2Nyb2xsVGFyZ2V0LmNsaWVudFRvcDtcbiAgICAgIGNvbnN0IGVsZW1lbnRCb3R0b20gPSBlbGVtZW50VG9wICsgaXRlbS5vZmZzZXRIZWlnaHQ7XG4gICAgICAvLyBEZXRlcm1pbmUgdGhlIGJvdHRvbSBvZiB0aGUgc2Nyb2xsYWJsZSBjYW52YXMuXG4gICAgICBjb25zdCBzY3JvbGxCb3R0b20gPSBzY3JvbGxUYXJnZXQuc2Nyb2xsVG9wICsgc2Nyb2xsVGFyZ2V0LmNsaWVudEhlaWdodDtcbiAgICAgIGlmIChlbGVtZW50Qm90dG9tID4gc2Nyb2xsQm90dG9tKSB7XG4gICAgICAgIC8vIFNjcm9sbCB1cCB1bnRpbCBpdGVtIGlzIGVudGlyZWx5IHZpc2libGUuXG4gICAgICAgIHNjcm9sbFRhcmdldC5zY3JvbGxUb3AgKz0gZWxlbWVudEJvdHRvbSAtIHNjcm9sbEJvdHRvbTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGVsZW1lbnRUb3AgPCBzY3JvbGxUYXJnZXQuc2Nyb2xsVG9wKSB7XG4gICAgICAgIC8vIFNjcm9sbCBkb3duIHVudGlsIGl0ZW0gaXMgZW50aXJlbHkgdmlzaWJsZS5cbiAgICAgICAgc2Nyb2xsVGFyZ2V0LnNjcm9sbFRvcCA9IGVsZW1lbnRUb3A7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGVsZW1lbnQgdGhhdCBzaG91bGQgYmUgc2Nyb2xsZWQgdG8gYnJpbmcgYW4gaXRlbSBpbnRvIHZpZXcuXG4gICAgICpcbiAgICAgKiBUaGUgZGVmYXVsdCB2YWx1ZSBvZiB0aGlzIHByb3BlcnR5IGlzIHRoZSBlbGVtZW50IGl0c2VsZi5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICBnZXQgc2Nyb2xsVGFyZ2V0KCkge1xuICAgICAgLy8gUHJlZmVyIGJhc2UgcmVzdWx0LlxuICAgICAgcmV0dXJuICdzY3JvbGxUYXJnZXQnIGluIGJhc2UucHJvdG90eXBlID8gc3VwZXIuc2Nyb2xsVGFyZ2V0IDogdGhpcztcbiAgICB9XG4gICAgc2V0IHNjcm9sbFRhcmdldChlbGVtZW50KSB7XG4gICAgICBpZiAoJ3Njcm9sbFRhcmdldCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2Nyb2xsVGFyZ2V0ID0gZWxlbWVudDsgfVxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIFNlbGVjdGlvbkluVmlldztcbn07XG4iLCIvKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFNoYWRvd0VsZW1lbnRSZWZlcmVuY2VzLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gdG8gY3JlYXRlIHJlZmVyZW5jZXMgdG8gZWxlbWVudHMgaW4gYSBjb21wb25lbnQncyBTaGFkb3cgRE9NIHN1YnRyZWUuXG4gICAqXG4gICAqIFRoaXMgYWRkcyBhIG1lbWJlciBvbiB0aGUgY29tcG9uZW50IGNhbGxlZCBgdGhpcy4kYCB0aGF0IGNhbiBiZSB1c2VkIHRvXG4gICAqIHJlZmVyZW5jZSBzaGFkb3cgZWxlbWVudHMgd2l0aCBJRHMuIEUuZy4sIGlmIGNvbXBvbmVudCdzIHNoYWRvdyBjb250YWlucyBhblxuICAgKiBlbGVtZW50IGA8YnV0dG9uIGlkPVwiZm9vXCI+YCwgdGhlbiB0aGlzIG1peGluIHdpbGwgY3JlYXRlIGEgbWVtYmVyXG4gICAqIGB0aGlzLiQuZm9vYCB0aGF0IHBvaW50cyB0byB0aGF0IGJ1dHRvbi5cbiAgICpcbiAgICogU3VjaCByZWZlcmVuY2VzIHNpbXBsaWZ5IGEgY29tcG9uZW50J3MgYWNjZXNzIHRvIGl0cyBvd24gZWxlbWVudHMuIEluXG4gICAqIGV4Y2hhbmdlLCB0aGlzIG1peGluIHRyYWRlcyBvZmYgYSBvbmUtdGltZSBjb3N0IG9mIHF1ZXJ5aW5nIGFsbCBlbGVtZW50cyBpblxuICAgKiB0aGUgc2hhZG93IHRyZWUgaW5zdGVhZCBvZiBwYXlpbmcgYW4gb25nb2luZyBjb3N0IHRvIHF1ZXJ5IGZvciBhbiBlbGVtZW50XG4gICAqIGVhY2ggdGltZSB0aGUgY29tcG9uZW50IHdhbnRzIHRvIGluc3BlY3Qgb3IgbWFuaXB1bGF0ZSBpdC5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIHRoZSBjb21wb25lbnQgdG8gZGVmaW5lIGEgU2hhZG93IERPTSBzdWJ0cmVlLiBZb3UgY2FuXG4gICAqIGNyZWF0ZSB0aGF0IHRyZWUgeW91cnNlbGYsIG9yIG1ha2UgdXNlIG9mXG4gICAqIFtTaGFkb3dUZW1wbGF0ZU1peGluXShTaGFkb3dUZW1wbGF0ZU1peGluLm1kKS5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBpcyBpbnNwaXJlZCBieSBQb2x5bWVyJ3MgW2F1dG9tYXRpY1xuICAgKiBub2RlIGZpbmRpbmddKGh0dHBzOi8vd3d3LnBvbHltZXItcHJvamVjdC5vcmcvMS4wL2RvY3MvZGV2Z3VpZGUvbG9jYWwtZG9tLmh0bWwjbm9kZS1maW5kaW5nKVxuICAgKiBmZWF0dXJlLlxuICAgKi9cbiAgY2xhc3MgU2hhZG93RWxlbWVudFJlZmVyZW5jZXMgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIGlmICh0aGlzLnNoYWRvd1Jvb3QpIHtcbiAgICAgICAgLy8gTG9vayBmb3IgZWxlbWVudHMgaW4gdGhlIHNoYWRvdyBzdWJ0cmVlIHRoYXQgaGF2ZSBpZCBhdHRyaWJ1dGVzLlxuICAgICAgICAvLyBBbiBhbHRlcm5hdGl2ZWx5IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWl4aW4gd291bGQgYmUgdG8ganVzdCBkZWZpbmVcbiAgICAgICAgLy8gYSB0aGlzLiQgZ2V0dGVyIHRoYXQgbGF6aWx5IGRvZXMgdGhpcyBzZWFyY2ggdGhlIGZpcnN0IHRpbWUgc29tZW9uZVxuICAgICAgICAvLyB0cmllcyB0byBhY2Nlc3MgdGhpcy4kLiBUaGF0IG1pZ2h0IGludHJvZHVjZSBzb21lIGNvbXBsZXhpdHkg4oCTIGlmIHRoZVxuICAgICAgICAvLyB0aGUgdHJlZSBjaGFuZ2VkIGFmdGVyIGl0IHdhcyBmaXJzdCBwb3B1bGF0ZWQsIHRoZSByZXN1bHQgb2ZcbiAgICAgICAgLy8gc2VhcmNoaW5nIGZvciBhIG5vZGUgbWlnaHQgYmUgc29tZXdoYXQgdW5wcmVkaWN0YWJsZS5cbiAgICAgICAgdGhpcy4kID0ge307XG4gICAgICAgIGNvbnN0IG5vZGVzV2l0aElkcyA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yQWxsKCdbaWRdJyk7XG4gICAgICAgIFtdLmZvckVhY2guY2FsbChub2Rlc1dpdGhJZHMsIG5vZGUgPT4ge1xuICAgICAgICAgIGNvbnN0IGlkID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICAgICAgdGhpcy4kW2lkXSA9IG5vZGU7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBjb2xsZWN0aW9uIG9mIHJlZmVyZW5jZXMgdG8gdGhlIGVsZW1lbnRzIHdpdGggSURzIGluIGEgY29tcG9uZW50J3NcbiAgICAgKiBTaGFkb3cgRE9NIHN1YnRyZWUuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqIEBtZW1iZXIgJFxuICAgICAqL1xuICB9XG5cbiAgcmV0dXJuIFNoYWRvd0VsZW1lbnRSZWZlcmVuY2VzO1xufTtcbiIsImltcG9ydCBzeW1ib2xzIGZyb20gJy4uL3NyYy9zeW1ib2xzJztcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFNoYWRvd1RlbXBsYXRlLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gZm9yIHN0YW1waW5nIGEgdGVtcGxhdGUgaW50byBhIFNoYWRvdyBET00gc3VidHJlZSB1cG9uIGNvbXBvbmVudFxuICAgKiBpbnN0YW50aWF0aW9uLlxuICAgKlxuICAgKiBUbyB1c2UgdGhpcyBtaXhpbiwgZGVmaW5lIGEgYHRlbXBsYXRlYCBwcm9wZXJ0eSBhcyBhIHN0cmluZyBvciBIVE1MXG4gICAqIGA8dGVtcGxhdGU+YCBlbGVtZW50OlxuICAgKlxuICAgKiAgICAgY2xhc3MgTXlFbGVtZW50IGV4dGVuZHMgU2hhZG93VGVtcGxhdGVNaXhpbihIVE1MRWxlbWVudCkge1xuICAgKiAgICAgICBnZXQgW3N5bWJvbHMudGVtcGxhdGVdKCkge1xuICAgKiAgICAgICAgIHJldHVybiBgSGVsbG8sIDxlbT53b3JsZDwvZW0+LmA7XG4gICAqICAgICAgIH1cbiAgICogICAgIH1cbiAgICpcbiAgICogV2hlbiB5b3VyIGNvbXBvbmVudCBjbGFzcyBpcyBpbnN0YW50aWF0ZWQsIGEgc2hhZG93IHJvb3Qgd2lsbCBiZSBjcmVhdGVkIG9uXG4gICAqIHRoZSBpbnN0YW5jZSwgYW5kIHRoZSBjb250ZW50cyBvZiB0aGUgdGVtcGxhdGUgd2lsbCBiZSBjbG9uZWQgaW50byB0aGVcbiAgICogc2hhZG93IHJvb3QuIElmIHlvdXIgY29tcG9uZW50IGRvZXMgbm90IGRlZmluZSBhIGB0ZW1wbGF0ZWAgcHJvcGVydHksIHRoaXNcbiAgICogbWl4aW4gaGFzIG5vIGVmZmVjdC5cbiAgICpcbiAgICogRm9yIHRoZSB0aW1lIGJlaW5nLCB0aGlzIGV4dGVuc2lvbiByZXRhaW5zIHN1cHBvcnQgZm9yIFNoYWRvdyBET00gdjAuIFRoYXRcbiAgICogd2lsbCBldmVudHVhbGx5IGJlIGRlcHJlY2F0ZWQgYXMgYnJvd3NlcnMgKGFuZCB0aGUgU2hhZG93IERPTSBwb2x5ZmlsbClcbiAgICogaW1wbGVtZW50IFNoYWRvdyBET00gdjEuXG4gICAqL1xuICBjbGFzcyBTaGFkb3dUZW1wbGF0ZSBleHRlbmRzIGJhc2Uge1xuXG4gICAgLypcbiAgICAgKiBJZiB0aGUgY29tcG9uZW50IGRlZmluZXMgYSB0ZW1wbGF0ZSwgYSBzaGFkb3cgcm9vdCB3aWxsIGJlIGNyZWF0ZWQgb24gdGhlXG4gICAgICogY29tcG9uZW50IGluc3RhbmNlLCBhbmQgdGhlIHRlbXBsYXRlIHN0YW1wZWQgaW50byBpdC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICBsZXQgdGVtcGxhdGUgPSB0aGlzW3N5bWJvbHMudGVtcGxhdGVdO1xuICAgICAgLy8gVE9ETzogU2F2ZSB0aGUgcHJvY2Vzc2VkIHRlbXBsYXRlIHdpdGggdGhlIGNvbXBvbmVudCdzIGNsYXNzIHByb3RvdHlwZVxuICAgICAgLy8gc28gaXQgZG9lc24ndCBuZWVkIHRvIGJlIHByb2Nlc3NlZCB3aXRoIGV2ZXJ5IGluc3RhbnRpYXRpb24uXG4gICAgICBpZiAodGVtcGxhdGUpIHtcblxuICAgICAgICBpZiAodHlwZW9mIHRlbXBsYXRlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIC8vIFVwZ3JhZGUgcGxhaW4gc3RyaW5nIHRvIHJlYWwgdGVtcGxhdGUuXG4gICAgICAgICAgdGVtcGxhdGUgPSBjcmVhdGVUZW1wbGF0ZVdpdGhJbm5lckhUTUwodGVtcGxhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHdpbmRvdy5TaGFkb3dET01Qb2x5ZmlsbCkge1xuICAgICAgICAgIHNoaW1UZW1wbGF0ZVN0eWxlcyh0ZW1wbGF0ZSwgdGhpcy5sb2NhbE5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgcm9vdCA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICAgICAgICBjb25zdCBjbG9uZSA9IGRvY3VtZW50LmltcG9ydE5vZGUodGVtcGxhdGUuY29udGVudCwgdHJ1ZSk7XG4gICAgICAgIHJvb3QuYXBwZW5kQ2hpbGQoY2xvbmUpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIFNoYWRvd1RlbXBsYXRlO1xufTtcblxuXG4vLyBDb252ZXJ0IGEgcGxhaW4gc3RyaW5nIG9mIEhUTUwgaW50byBhIHJlYWwgdGVtcGxhdGUgZWxlbWVudC5cbmZ1bmN0aW9uIGNyZWF0ZVRlbXBsYXRlV2l0aElubmVySFRNTChpbm5lckhUTUwpIHtcbiAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAvLyBSRVZJRVc6IElzIHRoZXJlIGFuIGVhc2llciB3YXkgdG8gZG8gdGhpcz9cbiAgLy8gV2UnZCBsaWtlIHRvIGp1c3Qgc2V0IGlubmVySFRNTCBvbiB0aGUgdGVtcGxhdGUgY29udGVudCwgYnV0IHNpbmNlIGl0J3NcbiAgLy8gYSBEb2N1bWVudEZyYWdtZW50LCB0aGF0IGRvZXNuJ3Qgd29yay5cbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gIHdoaWxlIChkaXYuY2hpbGROb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgdGVtcGxhdGUuY29udGVudC5hcHBlbmRDaGlsZChkaXYuY2hpbGROb2Rlc1swXSk7XG4gIH1cbiAgcmV0dXJuIHRlbXBsYXRlO1xufVxuXG4vLyBJbnZva2UgYmFzaWMgc3R5bGUgc2hpbW1pbmcgd2l0aCBTaGFkb3dDU1MuXG5mdW5jdGlvbiBzaGltVGVtcGxhdGVTdHlsZXModGVtcGxhdGUsIHRhZykge1xuICB3aW5kb3cuV2ViQ29tcG9uZW50cy5TaGFkb3dDU1Muc2hpbVN0eWxpbmcodGVtcGxhdGUuY29udGVudCwgdGFnKTtcbn1cbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi9jcmVhdGVTeW1ib2wnO1xuaW1wb3J0IHN5bWJvbHMgZnJvbSAnLi9zeW1ib2xzJztcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3QgY2FuU2VsZWN0TmV4dFN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnY2FuU2VsZWN0TmV4dCcpO1xuY29uc3QgY2FuU2VsZWN0UHJldmlvdXNTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2NhblNlbGVjdFByZXZpb3VzJyk7XG5jb25zdCBzZWxlY3Rpb25SZXF1aXJlZFN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnc2VsZWN0aW9uUmVxdWlyZWQnKTtcbmNvbnN0IHNlbGVjdGlvbldyYXBzU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdzZWxlY3Rpb25XcmFwcycpO1xuXG4vLyBXZSB3YW50IHRvIGV4cG9zZSBib3RoIHNlbGVjdGVkSW5kZXggYW5kIHNlbGVjdGVkSXRlbSBhcyBpbmRlcGVuZGVudFxuLy8gcHJvcGVydGllcyBidXQga2VlcCB0aGVtIGluIHN5bmMuIFRoaXMgYWxsb3dzIGEgY29tcG9uZW50IHVzZXIgdG8gcmVmZXJlbmNlXG4vLyB0aGUgc2VsZWN0aW9uIGJ5IHdoYXRldmVyIG1lYW5zIGlzIG1vc3QgbmF0dXJhbCBmb3IgdGhlaXIgc2l0dWF0aW9uLlxuLy9cbi8vIFRvIGVmZmljaWVudGx5IGtlZXAgdGhlc2UgcHJvcGVydGllcyBpbiBzeW5jLCB3ZSB0cmFjayBcImV4dGVybmFsXCIgYW5kXG4vLyBcImludGVybmFsXCIgcmVmZXJlbmNlcyBmb3IgZWFjaCBwcm9wZXJ0eTpcbi8vXG4vLyBUaGUgZXh0ZXJuYWwgaW5kZXggb3IgaXRlbSBpcyB0aGUgb25lIHdlIHJlcG9ydCB0byB0aGUgb3V0c2lkZSB3b3JsZCB3aGVuXG4vLyBhc2tlZCBmb3Igc2VsZWN0aW9uLiAgV2hlbiBoYW5kbGluZyBhIGNoYW5nZSB0byBpbmRleCBvciBpdGVtLCB3ZSB1cGRhdGUgdGhlXG4vLyBleHRlcm5hbCByZWZlcmVuY2UgYXMgc29vbiBhcyBwb3NzaWJsZSwgc28gdGhhdCBpZiBhbnlvbmUgaW1tZWRpYXRlbHkgYXNrc1xuLy8gZm9yIHRoZSBjdXJyZW50IHNlbGVjdGlvbiwgdGhleSB3aWxsIHJlY2VpdmUgYSBzdGFibGUgYW5zd2VyLlxuLy9cbi8vIFRoZSBpbnRlcm5hbCBpbmRleCBvciBpdGVtIHRyYWNrcyB3aGljaGV2ZXIgaW5kZXggb3IgaXRlbSBsYXN0IHJlY2VpdmVkIHRoZVxuLy8gZnVsbCBzZXQgb2YgcHJvY2Vzc2luZy4gUHJvY2Vzc2luZyBpbmNsdWRlcyByYWlzaW5nIGEgY2hhbmdlIGV2ZW50IGZvciB0aGVcbi8vIG5ldyB2YWx1ZS4gT25jZSB3ZSd2ZSBiZWd1biB0aGF0IHByb2Nlc3NpbmcsIHdlIHN0b3JlIHRoZSBuZXcgdmFsdWUgYXMgdGhlXG4vLyBpbnRlcm5hbCB2YWx1ZSB0byBpbmRpY2F0ZSB3ZSd2ZSBoYW5kbGVkIGl0LlxuLy9cbmNvbnN0IGV4dGVybmFsU2VsZWN0ZWRJbmRleFN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnZXh0ZXJuYWxTZWxlY3RlZEluZGV4Jyk7XG5jb25zdCBleHRlcm5hbFNlbGVjdGVkSXRlbVN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnZXh0ZXJuYWxTZWxlY3RlZEl0ZW0nKTtcbmNvbnN0IGludGVybmFsU2VsZWN0ZWRJbmRleFN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnaW50ZXJuYWxTZWxlY3RlZEluZGV4Jyk7XG5jb25zdCBpbnRlcm5hbFNlbGVjdGVkSXRlbVN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnaW50ZXJuYWxTZWxlY3RlZEl0ZW0nKTtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFNpbmdsZVNlbGVjdGlvbi4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIG1hbmFnZXMgc2luZ2xlLXNlbGVjdGlvbiBzZW1hbnRpY3MgZm9yIGl0ZW1zIGluIGEgbGlzdC5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIGEgY29tcG9uZW50IHRvIHByb3ZpZGUgYW4gYGl0ZW1zYCBBcnJheSBvciBOb2RlTGlzdCBvZlxuICAgKiBhbGwgZWxlbWVudHMgaW4gdGhlIGxpc3QuIEEgc3RhbmRhcmQgd2F5IHRvIGRvIHRoYXQgd2l0aCBpcyB0aGVcbiAgICogW0NvbnRlbnRJdGVtc01peGluXShDb250ZW50SXRlbXNNaXhpbi5tZCksIHdoaWNoIHRha2VzIGEgY29tcG9uZW50J3NcbiAgICogY29udGVudCAodHlwaWNhbGx5IGl0cyBkaXN0cmlidXRlZCBjaGlsZHJlbikgYXMgdGhlIHNldCBvZiBsaXN0IGl0ZW1zOyBzZWVcbiAgICogdGhhdCBtaXhpbiBmb3IgZGV0YWlscy5cbiAgICpcbiAgICogVGhpcyBtaXhpbiB0cmFja3MgYSBzaW5nbGUgc2VsZWN0ZWQgaXRlbSBpbiB0aGUgbGlzdCwgYW5kIHByb3ZpZGVzIG1lYW5zIHRvXG4gICAqIGdldCBhbmQgc2V0IHRoYXQgc3RhdGUgYnkgaXRlbSBwb3NpdGlvbiAoYHNlbGVjdGVkSW5kZXhgKSBvciBpdGVtIGlkZW50aXR5XG4gICAqIChgc2VsZWN0ZWRJdGVtYCkuIFRoZSBzZWxlY3Rpb24gY2FuIGJlIG1vdmVkIGluIHRoZSBsaXN0IHZpYSB0aGUgbWV0aG9kc1xuICAgKiBgc2VsZWN0Rmlyc3RgLCBgc2VsZWN0TGFzdGAsIGBzZWxlY3ROZXh0YCwgYW5kIGBzZWxlY3RQcmV2aW91c2AuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZG9lcyBub3QgcHJvZHVjZSBhbnkgdXNlci12aXNpYmxlIGVmZmVjdHMgdG8gcmVwcmVzZW50XG4gICAqIHNlbGVjdGlvbi4gT3RoZXIgbWl4aW5zLCBzdWNoIGFzXG4gICAqIFtTZWxlY3Rpb25BcmlhQWN0aXZlTWl4aW5dKFNlbGVjdGlvbkFyaWFBY3RpdmVNaXhpbi5tZCksXG4gICAqIFtTZWxlY3Rpb25IaWdobGlnaHRNaXhpbl0oU2VsZWN0aW9uSGlnaGxpZ2h0TWl4aW4ubWQpIGFuZFxuICAgKiBbU2VsZWN0aW9uSW5WaWV3TWl4aW5dKFNlbGVjdGlvbkluVmlld01peGluLm1kKSwgbW9kaWZ5IHRoZSBzZWxlY3RlZCBpdGVtXG4gICAqIGluIGNvbW1vbiB3YXlzIHRvIGxldCB0aGUgdXNlciBrbm93IGEgZ2l2ZW4gaXRlbSBpcyBzZWxlY3RlZCBvciBub3RcbiAgICogc2VsZWN0ZWQuXG4gICAqL1xuICBjbGFzcyBTaW5nbGVTZWxlY3Rpb24gZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIC8vIFNldCBkZWZhdWx0cy5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5zZWxlY3Rpb25SZXF1aXJlZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25SZXF1aXJlZCA9IHRoaXNbc3ltYm9scy5kZWZhdWx0c10uc2VsZWN0aW9uUmVxdWlyZWQ7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHRoaXMuc2VsZWN0aW9uV3JhcHMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uV3JhcHMgPSB0aGlzW3N5bWJvbHMuZGVmYXVsdHNdLnNlbGVjdGlvbldyYXBzO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRydWUgaWYgdGhlIHNlbGVjdGlvbiBjYW4gYmUgbW92ZWQgdG8gdGhlIG5leHQgaXRlbSwgZmFsc2UgaWYgbm90ICh0aGVcbiAgICAgKiBzZWxlY3RlZCBpdGVtIGlzIHRoZSBsYXN0IGl0ZW0gaW4gdGhlIGxpc3QpLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgZ2V0IGNhblNlbGVjdE5leHQoKSB7XG4gICAgICByZXR1cm4gdGhpc1tjYW5TZWxlY3ROZXh0U3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IGNhblNlbGVjdE5leHQoY2FuU2VsZWN0TmV4dCkge1xuICAgICAgY29uc3QgcHJldmlvdXNDYW5TZWxlY3ROZXh0ID0gdGhpc1tjYW5TZWxlY3ROZXh0U3ltYm9sXTtcbiAgICAgIHRoaXNbY2FuU2VsZWN0TmV4dFN5bWJvbF0gPSBjYW5TZWxlY3ROZXh0O1xuICAgICAgaWYgKCdjYW5TZWxlY3ROZXh0JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5jYW5TZWxlY3ROZXh0ID0gY2FuU2VsZWN0TmV4dDsgfVxuICAgICAgaWYgKGNhblNlbGVjdE5leHQgIT09IHByZXZpb3VzQ2FuU2VsZWN0TmV4dCkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjYW4tc2VsZWN0LW5leHQtY2hhbmdlZCcpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHRoZSBzZWxlY3Rpb24gY2FuIGJlIG1vdmVkIHRvIHRoZSBwcmV2aW91cyBpdGVtLCBmYWxzZSBpZiBub3RcbiAgICAgKiAodGhlIHNlbGVjdGVkIGl0ZW0gaXMgdGhlIGZpcnN0IG9uZSBpbiB0aGUgbGlzdCkuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBnZXQgY2FuU2VsZWN0UHJldmlvdXMoKSB7XG4gICAgICByZXR1cm4gdGhpc1tjYW5TZWxlY3RQcmV2aW91c1N5bWJvbF07XG4gICAgfVxuICAgIHNldCBjYW5TZWxlY3RQcmV2aW91cyhjYW5TZWxlY3RQcmV2aW91cykge1xuICAgICAgY29uc3QgcHJldmlvdXNDYW5TZWxlY3RQcmV2aW91cyA9IHRoaXNbY2FuU2VsZWN0UHJldmlvdXNTeW1ib2xdO1xuICAgICAgdGhpc1tjYW5TZWxlY3RQcmV2aW91c1N5bWJvbF0gPSBjYW5TZWxlY3RQcmV2aW91cztcbiAgICAgIGlmICgnY2FuU2VsZWN0UHJldmlvdXMnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLmNhblNlbGVjdFByZXZpb3VzID0gY2FuU2VsZWN0UHJldmlvdXM7IH1cbiAgICAgIGlmIChjYW5TZWxlY3RQcmV2aW91cyAhPT0gcHJldmlvdXNDYW5TZWxlY3RQcmV2aW91cykge1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjYW4tc2VsZWN0LXByZXZpb3VzLWNoYW5nZWQnKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IFtzeW1ib2xzLmRlZmF1bHRzXSgpIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRzID0gc3VwZXJbc3ltYm9scy5kZWZhdWx0c10gfHwge307XG4gICAgICBkZWZhdWx0cy5zZWxlY3Rpb25SZXF1aXJlZCA9IGZhbHNlO1xuICAgICAgZGVmYXVsdHMuc2VsZWN0aW9uV3JhcHMgPSBmYWxzZTtcbiAgICAgIHJldHVybiBkZWZhdWx0cztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgYSBuZXcgaXRlbSBiZWluZyBhZGRlZCB0byB0aGUgbGlzdC5cbiAgICAgKlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIHNpbXBseSBzZXRzIHRoZSBpdGVtJ3NcbiAgICAgKiBzZWxlY3Rpb24gc3RhdGUgdG8gZmFsc2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpdGVtIC0gdGhlIGl0ZW0gYmVpbmcgYWRkZWRcbiAgICAgKi9cbiAgICBbc3ltYm9scy5pdGVtQWRkZWRdKGl0ZW0pIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLml0ZW1BZGRlZF0pIHsgc3VwZXJbc3ltYm9scy5pdGVtQWRkZWRdKGl0ZW0pOyB9XG4gICAgICB0aGlzW3N5bWJvbHMuaXRlbVNlbGVjdGVkXShpdGVtLCBpdGVtID09PSB0aGlzLnNlbGVjdGVkSXRlbSk7XG4gICAgfVxuXG4gICAgW3N5bWJvbHMuaXRlbXNDaGFuZ2VkXSgpIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLml0ZW1zQ2hhbmdlZF0pIHsgc3VwZXJbc3ltYm9scy5pdGVtc0NoYW5nZWRdKCk7IH1cblxuICAgICAgLy8gSW4gY2FzZSBzZWxlY3RlZCBpdGVtIGNoYW5nZWQgcG9zaXRpb24gb3Igd2FzIHJlbW92ZWQuXG4gICAgICB0cmFja1NlbGVjdGVkSXRlbSh0aGlzKTtcblxuICAgICAgLy8gSW4gY2FzZSB0aGUgY2hhbmdlIGluIGl0ZW1zIGFmZmVjdGVkIHdoaWNoIG5hdmlnYXRpb25zIGFyZSBwb3NzaWJsZS5cbiAgICAgIHVwZGF0ZVBvc3NpYmxlTmF2aWdhdGlvbnModGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXBwbHkgdGhlIGluZGljYXRlIHNlbGVjdGlvbiBzdGF0ZSB0byB0aGUgaXRlbS5cbiAgICAgKlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy4gVXNlci12aXNpYmxlXG4gICAgICogZWZmZWN0cyB3aWxsIHR5cGljYWxseSBiZSBoYW5kbGVkIGJ5IG90aGVyIG1peGlucy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGl0ZW0gLSB0aGUgaXRlbSBiZWluZyBzZWxlY3RlZC9kZXNlbGVjdGVkXG4gICAgICogQHBhcmFtIHtib29sZWFufSBzZWxlY3RlZCAtIHRydWUgaWYgdGhlIGl0ZW0gaXMgc2VsZWN0ZWQsIGZhbHNlIGlmIG5vdFxuICAgICAqL1xuICAgIFtzeW1ib2xzLml0ZW1TZWxlY3RlZF0oaXRlbSwgc2VsZWN0ZWQpIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLml0ZW1TZWxlY3RlZF0pIHsgc3VwZXJbc3ltYm9scy5pdGVtU2VsZWN0ZWRdKGl0ZW0sIHNlbGVjdGVkKTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBpbmRleCBvZiB0aGUgaXRlbSB3aGljaCBpcyBjdXJyZW50bHkgc2VsZWN0ZWQuXG4gICAgICpcbiAgICAgKiBBIGBzZWxlY3RlZEluZGV4YCBvZiAtMSBpbmRpY2F0ZXMgdGhlcmUgaXMgbm8gc2VsZWN0aW9uLiBTZXR0aW5nIHRoaXNcbiAgICAgKiBwcm9wZXJ0eSB0byAtMSB3aWxsIHJlbW92ZSBhbnkgZXhpc3Rpbmcgc2VsZWN0aW9uLlxuICAgICAqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0ZWRJbmRleCgpIHtcbiAgICAgIHJldHVybiB0aGlzW2V4dGVybmFsU2VsZWN0ZWRJbmRleFN5bWJvbF0gIT0gbnVsbCA/XG4gICAgICAgIHRoaXNbZXh0ZXJuYWxTZWxlY3RlZEluZGV4U3ltYm9sXSA6XG4gICAgICAgIC0xO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0ZWRJbmRleChpbmRleCkge1xuICAgICAgLy8gU2VlIG5vdGVzIGF0IHRvcCBhYm91dCBpbnRlcm5hbCB2cy4gZXh0ZXJuYWwgY29waWVzIG9mIHRoaXMgcHJvcGVydHkuXG4gICAgICBjb25zdCBwcmV2aW91c1NlbGVjdGVkSW5kZXggPSB0aGlzW2ludGVybmFsU2VsZWN0ZWRJbmRleFN5bWJvbF07XG4gICAgICBsZXQgaXRlbTtcbiAgICAgIGlmIChpbmRleCAhPT0gdGhpc1tleHRlcm5hbFNlbGVjdGVkSW5kZXhTeW1ib2xdKSB7XG4gICAgICAgIC8vIFN0b3JlIHRoZSBuZXcgaW5kZXggYW5kIHRoZSBjb3JyZXNwb25kaW5nIGl0ZW0uXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5pdGVtcztcbiAgICAgICAgY29uc3QgaGFzSXRlbXMgPSBpdGVtcyAmJiBpdGVtcy5sZW5ndGggPiAwO1xuICAgICAgICBpZiAoIShoYXNJdGVtcyAmJiBpbmRleCA+PSAwICYmIGluZGV4IDwgaXRlbXMubGVuZ3RoKSkge1xuICAgICAgICAgIGluZGV4ID0gLTE7IC8vIE5vIGl0ZW0gYXQgdGhhdCBpbmRleC5cbiAgICAgICAgfVxuICAgICAgICB0aGlzW2V4dGVybmFsU2VsZWN0ZWRJbmRleFN5bWJvbF0gPSBpbmRleDtcbiAgICAgICAgaXRlbSA9IGhhc0l0ZW1zICYmIGluZGV4ID49IDAgPyBpdGVtc1tpbmRleF0gOiBudWxsO1xuICAgICAgICB0aGlzW2V4dGVybmFsU2VsZWN0ZWRJdGVtU3ltYm9sXSA9IGl0ZW07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpdGVtID0gdGhpc1tleHRlcm5hbFNlbGVjdGVkSXRlbVN5bWJvbF07XG4gICAgICB9XG5cbiAgICAgIC8vIE5vdyBsZXQgc3VwZXIgZG8gYW55IHdvcmsuXG4gICAgICBpZiAoJ3NlbGVjdGVkSW5kZXgnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkSW5kZXggPSBpbmRleDsgfVxuXG4gICAgICBpZiAoaW5kZXggIT09IHByZXZpb3VzU2VsZWN0ZWRJbmRleCkge1xuICAgICAgICAvLyBUaGUgc2VsZWN0ZWQgaW5kZXggY2hhbmdlZC5cbiAgICAgICAgdGhpc1tpbnRlcm5hbFNlbGVjdGVkSW5kZXhTeW1ib2xdID0gaW5kZXg7XG5cbiAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3NlbGVjdGVkLWluZGV4LWNoYW5nZWQnLCB7XG4gICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICBzZWxlY3RlZEluZGV4OiBpbmRleCxcbiAgICAgICAgICAgIHZhbHVlOiBpbmRleCAvLyBmb3IgUG9seW1lciBiaW5kaW5nLiBUT0RPOiBWZXJpZnkgc3RpbGwgbmVjZXNzYXJ5XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXNbaW50ZXJuYWxTZWxlY3RlZEl0ZW1TeW1ib2xdICE9PSBpdGVtKSB7XG4gICAgICAgIC8vIFVwZGF0ZSBzZWxlY3RlZEl0ZW0gcHJvcGVydHkgc28gaXQgY2FuIGhhdmUgaXRzIG93biBlZmZlY3RzLlxuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IGl0ZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnRseSBzZWxlY3RlZCBpdGVtLCBvciBudWxsIGlmIHRoZXJlIGlzIG5vIHNlbGVjdGlvbi5cbiAgICAgKlxuICAgICAqIFNldHRpbmcgdGhpcyBwcm9wZXJ0eSB0byBudWxsIGRlc2VsZWN0cyBhbnkgY3VycmVudGx5LXNlbGVjdGVkIGl0ZW0uXG4gICAgICogU2V0dGluZyB0aGlzIHByb3BlcnR5IHRvIGFuIG9iamVjdCB0aGF0IGlzIG5vdCBpbiB0aGUgbGlzdCBoYXMgbm8gZWZmZWN0LlxuICAgICAqXG4gICAgICogVE9ETzogRXZlbiBpZiBzZWxlY3Rpb25SZXF1aXJlZCwgY2FuIHN0aWxsIGV4cGxpY2l0bHkgc2V0IHNlbGVjdGVkSXRlbSB0byBudWxsLlxuICAgICAqIFRPRE86IElmIHNlbGVjdGlvblJlcXVpcmVkLCBsZWF2ZSBzZWxlY3Rpb24gYWxvbmU/XG4gICAgICpcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqL1xuICAgIGdldCBzZWxlY3RlZEl0ZW0oKSB7XG4gICAgICByZXR1cm4gdGhpc1tleHRlcm5hbFNlbGVjdGVkSXRlbVN5bWJvbF0gfHwgbnVsbDtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGVkSXRlbShpdGVtKSB7XG4gICAgICAvLyBTZWUgbm90ZXMgYXQgdG9wIGFib3V0IGludGVybmFsIHZzLiBleHRlcm5hbCBjb3BpZXMgb2YgdGhpcyBwcm9wZXJ0eS5cbiAgICAgIGNvbnN0IHByZXZpb3VzU2VsZWN0ZWRJdGVtID0gdGhpc1tpbnRlcm5hbFNlbGVjdGVkSXRlbVN5bWJvbF07XG4gICAgICBsZXQgaW5kZXg7XG4gICAgICBpZiAoaXRlbSAhPT0gdGhpc1tleHRlcm5hbFNlbGVjdGVkSXRlbVN5bWJvbF0pIHtcbiAgICAgICAgLy8gU3RvcmUgaXRlbSBhbmQgbG9vayB1cCBjb3JyZXNwb25kaW5nIGluZGV4LlxuICAgICAgICBjb25zdCBpdGVtcyA9IHRoaXMuaXRlbXM7XG4gICAgICAgIGNvbnN0IGhhc0l0ZW1zID0gaXRlbXMgJiYgaXRlbXMubGVuZ3RoID4gMDtcbiAgICAgICAgaW5kZXggPSBoYXNJdGVtcyA/IEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoaXRlbXMsIGl0ZW0pIDogLTE7XG4gICAgICAgIHRoaXNbZXh0ZXJuYWxTZWxlY3RlZEluZGV4U3ltYm9sXSA9IGluZGV4O1xuICAgICAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgICAgaXRlbSA9IG51bGw7IC8vIFRoZSBpbmRpY2F0ZWQgaXRlbSBpc24ndCBhY3R1YWxseSBpbiBgaXRlbXNgLlxuICAgICAgICB9XG4gICAgICAgIHRoaXNbZXh0ZXJuYWxTZWxlY3RlZEl0ZW1TeW1ib2xdID0gaXRlbTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZGV4ID0gdGhpc1tleHRlcm5hbFNlbGVjdGVkSW5kZXhTeW1ib2xdO1xuICAgICAgfVxuXG4gICAgICAvLyBOb3cgbGV0IHN1cGVyIGRvIGFueSB3b3JrLlxuICAgICAgaWYgKCdzZWxlY3RlZEl0ZW0nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkSXRlbSA9IGl0ZW07IH1cblxuICAgICAgaWYgKGl0ZW0gIT09IHByZXZpb3VzU2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgIC8vIFRoZSBzZWxlY3RlZCBpdGVtIGNoYW5nZWQuXG4gICAgICAgIHRoaXNbaW50ZXJuYWxTZWxlY3RlZEl0ZW1TeW1ib2xdID0gaXRlbTtcblxuICAgICAgICBpZiAocHJldmlvdXNTZWxlY3RlZEl0ZW0pIHtcbiAgICAgICAgICAvLyBVcGRhdGUgc2VsZWN0aW9uIHN0YXRlIG9mIG9sZCBpdGVtLlxuICAgICAgICAgIHRoaXNbc3ltYm9scy5pdGVtU2VsZWN0ZWRdKHByZXZpb3VzU2VsZWN0ZWRJdGVtLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAvLyBVcGRhdGUgc2VsZWN0aW9uIHN0YXRlIHRvIG5ldyBpdGVtLlxuICAgICAgICAgIHRoaXNbc3ltYm9scy5pdGVtU2VsZWN0ZWRdKGl0ZW0sIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlUG9zc2libGVOYXZpZ2F0aW9ucyh0aGlzKTtcblxuICAgICAgICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnc2VsZWN0ZWQtaXRlbS1jaGFuZ2VkJywge1xuICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgc2VsZWN0ZWRJdGVtOiBpdGVtLFxuICAgICAgICAgICAgdmFsdWU6IGl0ZW0gLy8gZm9yIFBvbHltZXIgYmluZGluZ1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzW2ludGVybmFsU2VsZWN0ZWRJbmRleFN5bWJvbF0gIT09IGluZGV4KSB7XG4gICAgICAgIC8vIFVwZGF0ZSBzZWxlY3RlZEluZGV4IHByb3BlcnR5IHNvIGl0IGNhbiBoYXZlIGl0cyBvd24gZWZmZWN0cy5cbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IHRoZSBmaXJzdCBpdGVtIGluIHRoZSBsaXN0LlxuICAgICAqL1xuICAgIHNlbGVjdEZpcnN0KCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdEZpcnN0KSB7IHN1cGVyLnNlbGVjdEZpcnN0KCk7IH1cbiAgICAgIHJldHVybiBzZWxlY3RJbmRleCh0aGlzLCAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHRoZSBsaXN0IHNob3VsZCBhbHdheXMgaGF2ZSBhIHNlbGVjdGlvbiAoaWYgaXQgaGFzIGl0ZW1zKS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGlvblJlcXVpcmVkKCkge1xuICAgICAgcmV0dXJuIHRoaXNbc2VsZWN0aW9uUmVxdWlyZWRTeW1ib2xdO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0aW9uUmVxdWlyZWQoc2VsZWN0aW9uUmVxdWlyZWQpIHtcbiAgICAgIHRoaXNbc2VsZWN0aW9uUmVxdWlyZWRTeW1ib2xdID0gc2VsZWN0aW9uUmVxdWlyZWQ7XG4gICAgICBpZiAoJ3NlbGVjdGlvblJlcXVpcmVkJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3Rpb25SZXF1aXJlZCA9IHNlbGVjdGlvblJlcXVpcmVkOyB9XG4gICAgICB0cmFja1NlbGVjdGVkSXRlbSh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHNlbGVjdGlvbiBuYXZpZ2F0aW9ucyB3cmFwIGZyb20gbGFzdCB0byBmaXJzdCwgYW5kIHZpY2UgdmVyc2EuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuICAgIGdldCBzZWxlY3Rpb25XcmFwcygpIHtcbiAgICAgIHJldHVybiB0aGlzW3NlbGVjdGlvbldyYXBzU3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGlvbldyYXBzKHZhbHVlKSB7XG4gICAgICB0aGlzW3NlbGVjdGlvbldyYXBzU3ltYm9sXSA9IFN0cmluZyh2YWx1ZSkgPT09ICd0cnVlJztcbiAgICAgIGlmICgnc2VsZWN0aW9uV3JhcHMnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGlvbldyYXBzID0gdmFsdWU7IH1cbiAgICAgIHVwZGF0ZVBvc3NpYmxlTmF2aWdhdGlvbnModGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IHRoZSBsYXN0IGl0ZW0gaW4gdGhlIGxpc3QuXG4gICAgICovXG4gICAgc2VsZWN0TGFzdCgpIHtcbiAgICAgIGlmIChzdXBlci5zZWxlY3RMYXN0KSB7IHN1cGVyLnNlbGVjdExhc3QoKTsgfVxuICAgICAgcmV0dXJuIHNlbGVjdEluZGV4KHRoaXMsIHRoaXMuaXRlbXMubGVuZ3RoIC0gMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IHRoZSBuZXh0IGl0ZW0gaW4gdGhlIGxpc3QuXG4gICAgICovXG4gICAgc2VsZWN0TmV4dCgpIHtcbiAgICAgIGlmIChzdXBlci5zZWxlY3ROZXh0KSB7IHN1cGVyLnNlbGVjdE5leHQoKTsgfVxuICAgICAgcmV0dXJuIHNlbGVjdEluZGV4KHRoaXMsIHRoaXMuc2VsZWN0ZWRJbmRleCArIDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCB0aGUgcHJldmlvdXMgaXRlbSBpbiB0aGUgbGlzdC5cbiAgICAgKlxuICAgICAqIElmIHRoZSBsaXN0IGhhcyBubyBzZWxlY3Rpb24sIHRoZSBsYXN0IGl0ZW0gd2lsbCBiZSBzZWxlY3RlZC5cbiAgICAgKi9cbiAgICBzZWxlY3RQcmV2aW91cygpIHtcbiAgICAgIGlmIChzdXBlci5zZWxlY3RQcmV2aW91cykgeyBzdXBlci5zZWxlY3RQcmV2aW91cygpOyB9XG4gICAgICBjb25zdCBuZXdJbmRleCA9IHRoaXMuc2VsZWN0ZWRJbmRleCA8IDAgP1xuICAgICAgICB0aGlzLml0ZW1zLmxlbmd0aCAtIDEgOiAgICAgLy8gTm8gc2VsZWN0aW9uIHlldDsgc2VsZWN0IGxhc3QgaXRlbS5cbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4IC0gMTtcbiAgICAgIHJldHVybiBzZWxlY3RJbmRleCh0aGlzLCBuZXdJbmRleCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmlyZXMgd2hlbiB0aGUgc2VsZWN0ZWRJdGVtIHByb3BlcnR5IGNoYW5nZXMuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgU2luZ2xlU2VsZWN0aW9uXG4gICAgICogQGV2ZW50IHNlbGVjdGVkLWl0ZW0tY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGRldGFpbC5zZWxlY3RlZEl0ZW0gVGhlIG5ldyBzZWxlY3RlZCBpdGVtLlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGRldGFpbC5wcmV2aW91c0l0ZW0gVGhlIHByZXZpb3VzbHkgc2VsZWN0ZWQgaXRlbS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEZpcmVzIHdoZW4gdGhlIHNlbGVjdGVkSW5kZXggcHJvcGVydHkgY2hhbmdlcy5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBTaW5nbGVTZWxlY3Rpb25cbiAgICAgKiBAZXZlbnQgc2VsZWN0ZWQtaW5kZXgtY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkZXRhaWwuc2VsZWN0ZWRJbmRleCBUaGUgbmV3IHNlbGVjdGVkIGluZGV4LlxuICAgICAqL1xuXG4gIH1cblxuICByZXR1cm4gU2luZ2xlU2VsZWN0aW9uO1xufTtcblxuXG4vLyBFbnN1cmUgdGhlIGdpdmVuIGluZGV4IGlzIHdpdGhpbiBib3VuZHMsIGFuZCBzZWxlY3QgaXQgaWYgaXQncyBub3QgYWxyZWFkeVxuLy8gc2VsZWN0ZWQuXG5mdW5jdGlvbiBzZWxlY3RJbmRleChlbGVtZW50LCBpbmRleCkge1xuICBjb25zdCBjb3VudCA9IGVsZW1lbnQuaXRlbXMubGVuZ3RoO1xuXG4gIGNvbnN0IGJvdW5kZWRJbmRleCA9IChlbGVtZW50LnNlbGVjdGlvbldyYXBzKSA/XG4gICAgLy8gSmF2YVNjcmlwdCBtb2QgZG9lc24ndCBoYW5kbGUgbmVnYXRpdmUgbnVtYmVycyB0aGUgd2F5IHdlIHdhbnQgdG8gd3JhcC5cbiAgICAvLyBTZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTg2MTgyNTAvNzY0NzJcbiAgICAoKGluZGV4ICUgY291bnQpICsgY291bnQpICUgY291bnQgOlxuXG4gICAgLy8gS2VlcCBpbmRleCB3aXRoaW4gYm91bmRzIG9mIGFycmF5LlxuICAgIE1hdGgubWF4KE1hdGgubWluKGluZGV4LCBjb3VudCAtIDEpLCAwKTtcblxuICBjb25zdCBwcmV2aW91c0luZGV4ID0gZWxlbWVudC5zZWxlY3RlZEluZGV4O1xuICBpZiAocHJldmlvdXNJbmRleCAhPT0gYm91bmRlZEluZGV4KSB7XG4gICAgZWxlbWVudC5zZWxlY3RlZEluZGV4ID0gYm91bmRlZEluZGV4O1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG4vLyBGb2xsb3dpbmcgYSBjaGFuZ2UgaW4gdGhlIHNldCBvZiBpdGVtcywgb3IgaW4gdGhlIHZhbHVlIG9mIHRoZVxuLy8gYHNlbGVjdGlvblJlcXVpcmVkYCBwcm9wZXJ0eSwgcmVhY3F1aXJlIHRoZSBzZWxlY3RlZCBpdGVtLiBJZiBpdCdzIG1vdmVkLFxuLy8gdXBkYXRlIGBzZWxlY3RlZEluZGV4YC4gSWYgaXQncyBiZWVuIHJlbW92ZWQsIGFuZCBhIHNlbGVjdGlvbiBpcyByZXF1aXJlZCxcbi8vIHRyeSB0byBzZWxlY3QgYW5vdGhlciBpdGVtLlxuZnVuY3Rpb24gdHJhY2tTZWxlY3RlZEl0ZW0oZWxlbWVudCkge1xuXG4gIGNvbnN0IGl0ZW1zID0gZWxlbWVudC5pdGVtcztcbiAgY29uc3QgaXRlbUNvdW50ID0gaXRlbXMgPyBpdGVtcy5sZW5ndGggOiAwO1xuXG4gIGNvbnN0IHByZXZpb3VzU2VsZWN0ZWRJdGVtID0gZWxlbWVudC5zZWxlY3RlZEl0ZW07XG4gIGlmICghcHJldmlvdXNTZWxlY3RlZEl0ZW0pIHtcbiAgICAvLyBObyBpdGVtIHdhcyBwcmV2aW91c2x5IHNlbGVjdGVkLlxuICAgIGlmIChlbGVtZW50LnNlbGVjdGlvblJlcXVpcmVkKSB7XG4gICAgICAvLyBTZWxlY3QgdGhlIGZpcnN0IGl0ZW0gYnkgZGVmYXVsdC5cbiAgICAgIGVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgfVxuICB9IGVsc2UgaWYgKGl0ZW1Db3VudCA9PT0gMCkge1xuICAgIC8vIFdlJ3ZlIGxvc3QgdGhlIHNlbGVjdGlvbiwgYW5kIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHNlbGVjdC5cbiAgICBlbGVtZW50LnNlbGVjdGVkSXRlbSA9IG51bGw7XG4gIH0gZWxzZSB7XG4gICAgLy8gVHJ5IHRvIGZpbmQgdGhlIHByZXZpb3VzbHktc2VsZWN0ZWQgaXRlbSBpbiB0aGUgY3VycmVudCBzZXQgb2YgaXRlbXMuXG4gICAgY29uc3QgaW5kZXhJbkN1cnJlbnRJdGVtcyA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoaXRlbXMsIHByZXZpb3VzU2VsZWN0ZWRJdGVtKTtcbiAgICBjb25zdCBwcmV2aW91c1NlbGVjdGVkSW5kZXggPSBlbGVtZW50LnNlbGVjdGVkSW5kZXg7XG4gICAgaWYgKGluZGV4SW5DdXJyZW50SXRlbXMgPCAwKSB7XG4gICAgICAvLyBQcmV2aW91c2x5LXNlbGVjdGVkIGl0ZW0gd2FzIHJlbW92ZWQgZnJvbSB0aGUgaXRlbXMuXG4gICAgICAvLyBTZWxlY3QgdGhlIGl0ZW0gYXQgdGhlIHNhbWUgaW5kZXggKGlmIGl0IGV4aXN0cykgb3IgYXMgY2xvc2UgYXMgcG9zc2libGUuXG4gICAgICBjb25zdCBuZXdTZWxlY3RlZEluZGV4ID0gTWF0aC5taW4ocHJldmlvdXNTZWxlY3RlZEluZGV4LCBpdGVtQ291bnQgLSAxKTtcbiAgICAgIC8vIFNlbGVjdCBieSBpdGVtLCBzaW5jZSBpbmRleCBtYXkgYmUgdGhlIHNhbWUsIGFuZCB3ZSB3YW50IHRvIHJhaXNlIHRoZVxuICAgICAgLy8gc2VsZWN0ZWQtaXRlbS1jaGFuZ2VkIGV2ZW50LlxuICAgICAgZWxlbWVudC5zZWxlY3RlZEl0ZW0gPSBpdGVtc1tuZXdTZWxlY3RlZEluZGV4XTtcbiAgICB9IGVsc2UgaWYgKGluZGV4SW5DdXJyZW50SXRlbXMgIT09IHByZXZpb3VzU2VsZWN0ZWRJbmRleCkge1xuICAgICAgLy8gUHJldmlvdXNseS1zZWxlY3RlZCBpdGVtIHN0aWxsIHRoZXJlLCBidXQgY2hhbmdlZCBwb3NpdGlvbi5cbiAgICAgIGVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9IGluZGV4SW5DdXJyZW50SXRlbXM7XG4gICAgfVxuICB9XG59XG5cbi8vIEZvbGxvd2luZyBhIGNoYW5nZSBpbiBzZWxlY3Rpb24sIHJlcG9ydCB3aGV0aGVyIGl0J3Mgbm93IHBvc3NpYmxlIHRvXG4vLyBnbyBuZXh0L3ByZXZpb3VzIGZyb20gdGhlIGdpdmVuIGluZGV4LlxuZnVuY3Rpb24gdXBkYXRlUG9zc2libGVOYXZpZ2F0aW9ucyhlbGVtZW50KSB7XG4gIGxldCBjYW5TZWxlY3ROZXh0O1xuICBsZXQgY2FuU2VsZWN0UHJldmlvdXM7XG4gIGNvbnN0IGl0ZW1zID0gZWxlbWVudC5pdGVtcztcbiAgaWYgKGl0ZW1zID09IG51bGwgfHwgaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgLy8gTm8gaXRlbXMgdG8gc2VsZWN0LlxuICAgIGNhblNlbGVjdE5leHQgPSBmYWxzZTtcbiAgICBjYW5TZWxlY3RQcmV2aW91cyA9IGZhbHNlO1xuICB9IGlmIChlbGVtZW50LnNlbGVjdGlvbldyYXBzKSB7XG4gICAgLy8gU2luY2UgdGhlcmUgYXJlIGl0ZW1zLCBjYW4gYWx3YXlzIGdvIG5leHQvcHJldmlvdXMuXG4gICAgY2FuU2VsZWN0TmV4dCA9IHRydWU7XG4gICAgY2FuU2VsZWN0UHJldmlvdXMgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGluZGV4ID0gZWxlbWVudC5zZWxlY3RlZEluZGV4O1xuICAgIGlmIChpbmRleCA8IDAgJiYgaXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgLy8gU3BlY2lhbCBjYXNlLiBJZiB0aGVyZSBhcmUgaXRlbXMgYnV0IG5vIHNlbGVjdGlvbiwgZGVjbGFyZSB0aGF0IGl0J3NcbiAgICAgIC8vIGFsd2F5cyBwb3NzaWJsZSB0byBnbyBuZXh0L3ByZXZpb3VzIHRvIGNyZWF0ZSBhIHNlbGVjdGlvbi5cbiAgICAgIGNhblNlbGVjdE5leHQgPSB0cnVlO1xuICAgICAgY2FuU2VsZWN0UHJldmlvdXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBOb3JtYWwgY2FzZTogd2UgaGF2ZSBhbiBpbmRleCBpbiBhIGxpc3QgdGhhdCBoYXMgaXRlbXMuXG4gICAgICBjYW5TZWxlY3RQcmV2aW91cyA9IChpbmRleCA+IDApO1xuICAgICAgY2FuU2VsZWN0TmV4dCA9IChpbmRleCA8IGl0ZW1zLmxlbmd0aCAtIDEpO1xuICAgIH1cbiAgfVxuICBpZiAoZWxlbWVudC5jYW5TZWxlY3ROZXh0ICE9PSBjYW5TZWxlY3ROZXh0KSB7XG4gICAgZWxlbWVudC5jYW5TZWxlY3ROZXh0ID0gY2FuU2VsZWN0TmV4dDtcbiAgfVxuICBpZiAoZWxlbWVudC5jYW5TZWxlY3RQcmV2aW91cyAhPT0gY2FuU2VsZWN0UHJldmlvdXMpIHtcbiAgICBlbGVtZW50LmNhblNlbGVjdFByZXZpb3VzID0gY2FuU2VsZWN0UHJldmlvdXM7XG4gIH1cbn1cbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi9jcmVhdGVTeW1ib2wnO1xuaW1wb3J0IHN5bWJvbHMgZnJvbSAnLi9zeW1ib2xzJztcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3QgZGVsdGFYU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdkZWx0YVgnKTtcbmNvbnN0IGRlbHRhWVN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnZGVsdGFZJyk7XG5jb25zdCBtdWx0aVRvdWNoU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdtdWx0aVRvdWNoJyk7XG5jb25zdCBwcmV2aW91c1hTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3ByZXZpb3VzWCcpO1xuY29uc3QgcHJldmlvdXNZU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdwcmV2aW91c1knKTtcbmNvbnN0IHN0YXJ0WFN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnc3RhcnRYJyk7XG5jb25zdCB0cmF2ZWxGcmFjdGlvblN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgndHJhdmVsRnJhY3Rpb24nKTtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFN3aXBlRGlyZWN0aW9uLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggbWFwcyB0b3VjaCBnZXN0dXJlcyAoc3dpcGUgbGVmdCwgc3dpcGUgcmlnaHQpIHRvIGRpcmVjdGlvblxuICAgKiBzZW1hbnRpY3MgKGdvIHJpZ2h0LCBnbyBsZWZ0KS5cbiAgICpcbiAgICogQnkgZGVmYXVsdCwgdGhpcyBtaXhpbiBwcmVzZW50cyBubyB1c2VyLXZpc2libGUgZWZmZWN0czsgaXQganVzdCBpbmRpY2F0ZXNcbiAgICogYSBkaXJlY3Rpb24gaW4gd2hpY2ggdGhlIHVzZXIgaXMgY3VycmVudGx5IHN3aXBpbmcgb3IgaGFzIGZpbmlzaGVkIHN3aXBpbmcuXG4gICAqIFRvIG1hcCB0aGUgZGlyZWN0aW9uIHRvIGEgY2hhbmdlIGluIHNlbGVjdGlvbiwgdXNlXG4gICAqIFtEaXJlY3Rpb25TZWxlY3Rpb25NaXhpbl0oRGlyZWN0aW9uU2VsZWN0aW9uTWl4aW4ubWQpLlxuICAgKi9cbiAgY2xhc3MgU3dpcGVEaXJlY3Rpb24gZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcblxuICAgICAgdGhpcy50cmF2ZWxGcmFjdGlvbiA9IDA7XG5cbiAgICAgIC8vIEluIGFsbCB0b3VjaCBldmVudHMsIG9ubHkgaGFuZGxlIHNpbmdsZSB0b3VjaGVzLiBXZSBkb24ndCB3YW50IHRvXG4gICAgICAvLyBpbmFkdmVydGVudGx5IGRvIHdvcmsgd2hlbiB0aGUgdXNlcidzIHRyeWluZyB0byBwaW5jaC16b29tIGZvciBleGFtcGxlLlxuICAgICAgLy8gVE9ETzogRXZlbiBiZXR0ZXIgYXBwcm9hY2ggdGhhbiBiZWxvdyB3b3VsZCBiZSB0byBpZ25vcmUgdG91Y2hlcyBhZnRlclxuICAgICAgLy8gdGhlIGZpcnN0IGlmIHRoZSB1c2VyIGhhcyBhbHJlYWR5IGJlZ3VuIGEgc3dpcGUuXG4gICAgICAvLyBUT0RPOiBUb3VjaCBldmVudHMgc2hvdWxkIHByb2JhYmx5IGJlIGZhY3RvcmVkIG91dCBpbnRvIGl0cyBvd24gbWl4aW4uXG4gICAgICBpZiAod2luZG93LlBvaW50ZXJFdmVudCkge1xuICAgICAgICAvLyBQcmVmZXIgbGlzdGVuaW5nIHRvIHN0YW5kYXJkIHBvaW50ZXIgZXZlbnRzLlxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGlmIChpc0V2ZW50Rm9yUGVuT3JQcmltYXJ5VG91Y2goZXZlbnQpKSB7XG4gICAgICAgICAgICB0b3VjaFN0YXJ0KHRoaXMsIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcm1vdmUnLCBldmVudCA9PiB7XG4gICAgICAgICAgaWYgKGlzRXZlbnRGb3JQZW5PclByaW1hcnlUb3VjaChldmVudCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZWQgPSB0b3VjaE1vdmUodGhpcywgZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XG4gICAgICAgICAgICBpZiAoaGFuZGxlZCkge1xuICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGlmIChpc0V2ZW50Rm9yUGVuT3JQcmltYXJ5VG91Y2goZXZlbnQpKSB7XG4gICAgICAgICAgICB0b3VjaEVuZCh0aGlzLCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUG9pbnRlciBldmVudHMgbm90IHN1cHBvcnRlZCAtLSBsaXN0ZW4gdG8gb2xkZXIgdG91Y2ggZXZlbnRzLlxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBldmVudCA9PiB7XG4gICAgICAgICAgaWYgKHRoaXNbbXVsdGlUb3VjaFN5bWJvbF0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnRvdWNoZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBjb25zdCBjbGllbnRYID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgICAgIGNvbnN0IGNsaWVudFkgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZO1xuICAgICAgICAgICAgdG91Y2hTdGFydCh0aGlzLCBjbGllbnRYLCBjbGllbnRZKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpc1ttdWx0aVRvdWNoU3ltYm9sXSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBldmVudCA9PiB7XG4gICAgICAgICAgaWYgKCF0aGlzW211bHRpVG91Y2hTeW1ib2xdICYmIGV2ZW50LnRvdWNoZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBjb25zdCBjbGllbnRYID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgICAgIGNvbnN0IGNsaWVudFkgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZO1xuICAgICAgICAgICAgY29uc3QgaGFuZGxlZCA9IHRvdWNoTW92ZSh0aGlzLCBjbGllbnRYLCBjbGllbnRZKTtcbiAgICAgICAgICAgIGlmIChoYW5kbGVkKSB7XG4gICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICBpZiAoZXZlbnQudG91Y2hlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIC8vIEFsbCB0b3VjaGVzIHJlbW92ZWQ7IGdlc3R1cmUgaXMgY29tcGxldGUuXG4gICAgICAgICAgICBpZiAoIXRoaXNbbXVsdGlUb3VjaFN5bWJvbF0pIHtcbiAgICAgICAgICAgICAgLy8gU2luZ2xlLXRvdWNoIHN3aXBlIGhhcyBmaW5pc2hlZC5cbiAgICAgICAgICAgICAgY29uc3QgY2xpZW50WCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgICAgICAgIGNvbnN0IGNsaWVudFkgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZO1xuICAgICAgICAgICAgICB0b3VjaEVuZCh0aGlzLCBjbGllbnRYLCBjbGllbnRZKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXNbbXVsdGlUb3VjaFN5bWJvbF0gPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKSB7IHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7IH1cblxuICAgICAgLy8gRm9yIHRoZSBjb21wb25lbnQgdG8gcmVjZWl2ZSBQb2ludGVyRXZlbnRzIGluIElFL0VkZ2UsIHdlIG5lZWQgdG8gc2V0XG4gICAgICAvLyB0b3VjaC1hY3Rpb246IG5vbmUuIE9ubHkgbWFrZSB0aGlzIGNoYW5nZSBpZiB0b3VjaC1hY3Rpb24gaXMgY3VycmVudGx5XG4gICAgICAvLyB0aGUgZGVmYXVsdCB2YWx1ZSAoXCJhdXRvXCIpLCBpbiBjYXNlIHRoZSBkZXZlbG9wZXIga25vd3MgYmV0dGVyIHRoYW4gd2VcbiAgICAgIC8vIGRvIHdoYXQgdGhleSB3YW50IGluIHRoZWlyIHBhcnRpY3VsYXIgY29udGV4dC5cbiAgICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKHRoaXMpLnRvdWNoQWN0aW9uID09PSAnYXV0bycpIHtcbiAgICAgICAgdGhpcy5zdHlsZS50b3VjaEFjdGlvbiA9ICdub25lJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IGltcGxlbWVudGF0aW9uLlxuICAgIGdldCBbc3ltYm9scy5kcmFnZ2luZ10oKSB7XG4gICAgICByZXR1cm4gc3VwZXJbc3ltYm9scy5kcmFnZ2luZ107XG4gICAgfVxuICAgIHNldCBbc3ltYm9scy5kcmFnZ2luZ10odmFsdWUpIHtcbiAgICAgIGlmIChzeW1ib2xzLmRyYWdnaW5nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyW3N5bWJvbHMuZHJhZ2dpbmddID0gdmFsdWU7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgbGVmdC5cbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuXG4gICAgICovXG4gICAgW3N5bWJvbHMuZ29MZWZ0XSgpIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLmdvTGVmdF0pIHsgcmV0dXJuIHN1cGVyW3N5bWJvbHMuZ29MZWZ0XSgpOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIHJpZ2h0LlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy5cbiAgICAgKi9cbiAgICBbc3ltYm9scy5nb1JpZ2h0XSgpIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLmdvUmlnaHRdKSB7IHJldHVybiBzdXBlcltzeW1ib2xzLmdvUmlnaHRdKCk7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGlzdGFuY2UgdGhlIGZpcnN0IHRvdWNocG9pbnQgaGFzIHRyYXZlbGVkIHNpbmNlIHRoZSBiZWdpbm5pbmcgb2YgYVxuICAgICAqIGRyYWcsIGV4cHJlc3NlZCBhcyBhIGZyYWN0aW9uIG9mIHRoZSBlbGVtZW50J3Mgd2lkdGguXG4gICAgICpcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKi9cbiAgICBnZXQgdHJhdmVsRnJhY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpc1t0cmF2ZWxGcmFjdGlvblN5bWJvbF07XG4gICAgfVxuICAgIHNldCB0cmF2ZWxGcmFjdGlvbih2YWx1ZSkge1xuICAgICAgdGhpc1t0cmF2ZWxGcmFjdGlvblN5bWJvbF0gPSB2YWx1ZTtcbiAgICAgIGlmICgndHJhdmVsRnJhY3Rpb24nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnRyYXZlbEZyYWN0aW9uID0gdmFsdWU7IH1cbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBTd2lwZURpcmVjdGlvbjtcbn07XG5cblxuLy8gUmV0dXJuIHRydWUgaWYgdGhlIHBvaW50ZXIgZXZlbnQgaXMgZm9yIHRoZSBwZW4sIG9yIHRoZSBwcmltYXJ5IHRvdWNoIHBvaW50LlxuZnVuY3Rpb24gaXNFdmVudEZvclBlbk9yUHJpbWFyeVRvdWNoKGV2ZW50KSB7XG4gIHJldHVybiBldmVudC5wb2ludGVyVHlwZSA9PT0gJ3BlbicgfHxcbiAgICAgIChldmVudC5wb2ludGVyVHlwZSA9PT0gJ3RvdWNoJyAmJiBldmVudC5pc1ByaW1hcnkpO1xufVxuXG4vKlxuICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIGhhcyBmaW5pc2hlZCBhIHRvdWNoIG9wZXJhdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG91Y2hFbmQoZWxlbWVudCwgY2xpZW50WCwgY2xpZW50WSkge1xuICBlbGVtZW50W3N5bWJvbHMuZHJhZ2dpbmddID0gZmFsc2U7XG4gIGlmIChlbGVtZW50W2RlbHRhWFN5bWJvbF0gPj0gMjApIHtcbiAgICAvLyBGaW5pc2hlZCBnb2luZyByaWdodCBhdCBoaWdoIHNwZWVkLlxuICAgIGVsZW1lbnRbc3ltYm9scy5nb0xlZnRdKCk7XG4gIH0gZWxzZSBpZiAoZWxlbWVudFtkZWx0YVhTeW1ib2xdIDw9IC0yMCkge1xuICAgIC8vIEZpbmlzaGVkIGdvaW5nIGxlZnQgYXQgaGlnaCBzcGVlZC5cbiAgICBlbGVtZW50W3N5bWJvbHMuZ29SaWdodF0oKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBGaW5pc2hlZCBhdCBsb3cgc3BlZWQuXG4gICAgdHJhY2tUbyhlbGVtZW50LCBjbGllbnRYKTtcbiAgICBjb25zdCB0cmF2ZWxGcmFjdGlvbiA9IGVsZW1lbnQudHJhdmVsRnJhY3Rpb247XG4gICAgaWYgKHRyYXZlbEZyYWN0aW9uID49IDAuNSkge1xuICAgICAgZWxlbWVudFtzeW1ib2xzLmdvUmlnaHRdKCk7XG4gICAgfSBlbHNlIGlmICh0cmF2ZWxGcmFjdGlvbiA8PSAtMC41KSB7XG4gICAgICBlbGVtZW50W3N5bWJvbHMuZ29MZWZ0XSgpO1xuICAgIH1cbiAgfVxuICBlbGVtZW50LnRyYXZlbEZyYWN0aW9uID0gMDtcbiAgZWxlbWVudFtkZWx0YVhTeW1ib2xdID0gbnVsbDtcbiAgZWxlbWVudFtkZWx0YVlTeW1ib2xdID0gbnVsbDtcbn1cblxuLypcbiAqIEludm9rZWQgd2hlbiB0aGUgdXNlciBoYXMgbW92ZWQgZHVyaW5nIGEgdG91Y2ggb3BlcmF0aW9uLlxuICovXG5mdW5jdGlvbiB0b3VjaE1vdmUoZWxlbWVudCwgY2xpZW50WCwgY2xpZW50WSkge1xuXG4gIGVsZW1lbnRbZGVsdGFYU3ltYm9sXSA9IGNsaWVudFggLSBlbGVtZW50W3ByZXZpb3VzWFN5bWJvbF07XG4gIGVsZW1lbnRbZGVsdGFZU3ltYm9sXSA9IGNsaWVudFkgLSBlbGVtZW50W3ByZXZpb3VzWVN5bWJvbF07XG4gIGVsZW1lbnRbcHJldmlvdXNYU3ltYm9sXSA9IGNsaWVudFg7XG4gIGVsZW1lbnRbcHJldmlvdXNZU3ltYm9sXSA9IGNsaWVudFk7XG4gIGlmIChNYXRoLmFicyhlbGVtZW50W2RlbHRhWFN5bWJvbF0pID4gTWF0aC5hYnMoZWxlbWVudFtkZWx0YVlTeW1ib2xdKSkge1xuICAgIC8vIE1vdmUgd2FzIG1vc3RseSBob3Jpem9udGFsLlxuICAgIHRyYWNrVG8oZWxlbWVudCwgY2xpZW50WCk7XG4gICAgLy8gSW5kaWNhdGUgdGhhdCB0aGUgZXZlbnQgd2FzIGhhbmRsZWQuIEl0J2QgYmUgbmljZXIgaWYgd2UgZGlkbid0IGhhdmVcbiAgICAvLyB0byBkbyB0aGlzIHNvIHRoYXQsIGUuZy4sIGEgdXNlciBjb3VsZCBiZSBzd2lwaW5nIGxlZnQgYW5kIHJpZ2h0XG4gICAgLy8gd2hpbGUgc2ltdWx0YW5lb3VzbHkgc2Nyb2xsaW5nIHVwIGFuZCBkb3duLiAoTmF0aXZlIHRvdWNoIGFwcHMgY2FuIGRvXG4gICAgLy8gdGhhdC4pIEhvd2V2ZXIsIE1vYmlsZSBTYWZhcmkgd2FudHMgdG8gaGFuZGxlIHN3aXBlIGV2ZW50cyBuZWFyIHRoZVxuICAgIC8vIHBhZ2UgYW5kIGludGVycHJldCB0aGVtIGFzIG5hdmlnYXRpb25zLiBUbyBhdm9pZCBoYXZpbmcgYSBob3JpemlvbnRhbFxuICAgIC8vIHN3aXBlIG1pc2ludGVwcmV0ZWQgYXMgYSBuYXZpZ2F0aW9uLCB3ZSBpbmRpY2F0ZSB0aGF0IHdlJ3ZlIGhhbmRsZWRcbiAgICAvLyB0aGUgZXZlbnQsIGFuZCBwcmV2ZW50IGRlZmF1bHQgYmVoYXZpb3IuXG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgLy8gTW92ZSB3YXMgbW9zdGx5IHZlcnRpY2FsLlxuICAgIHJldHVybiBmYWxzZTsgLy8gTm90IGhhbmRsZWRcbiAgfVxufVxuXG4vKlxuICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIGhhcyBiZWd1biBhIHRvdWNoIG9wZXJhdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG91Y2hTdGFydChlbGVtZW50LCBjbGllbnRYLCBjbGllbnRZKSB7XG4gIGVsZW1lbnRbc3ltYm9scy5kcmFnZ2luZ10gPSB0cnVlO1xuICBlbGVtZW50W3N0YXJ0WFN5bWJvbF0gPSBjbGllbnRYO1xuICBlbGVtZW50W3ByZXZpb3VzWFN5bWJvbF0gPSBjbGllbnRYO1xuICBlbGVtZW50W3ByZXZpb3VzWVN5bWJvbF0gPSBjbGllbnRZO1xuICBlbGVtZW50W2RlbHRhWFN5bWJvbF0gPSAwO1xuICBlbGVtZW50W2RlbHRhWVN5bWJvbF0gPSAwO1xufVxuXG5mdW5jdGlvbiB0cmFja1RvKGVsZW1lbnQsIHgpIHtcbiAgY29uc3Qgd2lkdGggPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xuICBjb25zdCBkcmFnRGlzdGFuY2UgPSBlbGVtZW50W3N0YXJ0WFN5bWJvbF0gLSB4O1xuICBjb25zdCBmcmFjdGlvbiA9IHdpZHRoID4gMCA/XG4gICAgZHJhZ0Rpc3RhbmNlIC8gd2lkdGggOlxuICAgIDA7XG4gIGVsZW1lbnQudHJhdmVsRnJhY3Rpb24gPSBmcmFjdGlvbjtcbn1cbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi9jcmVhdGVTeW1ib2wnO1xuaW1wb3J0IHN5bWJvbHMgZnJvbSAnLi9zeW1ib2xzJztcblxuXG5jb25zdCBwbGF5aW5nU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdwbGF5aW5nJyk7XG5jb25zdCBzZWxlY3Rpb25UaW1lckR1cmF0aW9uU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdzZWxlY3Rpb25UaW1lckR1cmF0aW9uJyk7XG5jb25zdCB0aW1lclRpbWVvdXRTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3RpbWVyVGltZW91dCcpO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggVGltZXJTZWxlY3Rpb24uICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBwcm92aWRlcyBmb3IgYXV0b21hdGljIHRpbWVkIGNoYW5nZXMgaW4gc2VsZWN0aW9uLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGlzIHVzZWZ1bCBmb3IgY3JlYXRpbmcgc2xpZGVzaG93LWxpa2UgZWxlbWVudHMuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyB0aGUgY29tcG9uZW50IHRvIGRlZmluZSBhbiBgaXRlbXNgIHByb3BlcnR5LCBhcyB3ZWxsIGFzXG4gICAqIGBzZWxlY3RGaXJzdGAgYW5kIGBzZWxlY3ROZXh0YCBtZXRob2RzLiBZb3UgY2FuIGltcGxlbWVudCB0aG9zZSB5b3Vyc2VsZixcbiAgICogb3IgdXNlIFtDb250ZW50SXRlbXNNaXhpbl0oQ29udGVudEl0ZW1zTWl4aW4ubWQpIGFuZFxuICAgKiBbU2luZ2xlU2VsZWN0aW9uTWl4aW5dKFNpbmdsZVNlbGVjdGlvbk1peGluLm1kKS5cbiAgICovXG4gIGNsYXNzIFRpbWVyU2VsZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICAvLyBTZXQgZGVmYXVsdHMuXG4gICAgICBpZiAodHlwZW9mIHRoaXMucGxheWluZyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5wbGF5aW5nID0gdGhpc1tzeW1ib2xzLmRlZmF1bHRzXS5wbGF5aW5nO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiB0aGlzLnNlbGVjdGlvblRpbWVyRHVyYXRpb24gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uVGltZXJEdXJhdGlvbiA9IHRoaXNbc3ltYm9scy5kZWZhdWx0c10uc2VsZWN0aW9uVGltZXJEdXJhdGlvbjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb250ZW50Q2hhbmdlZCgpIHtcbiAgICAgIGlmIChzdXBlci5jb250ZW50Q2hhbmdlZCkgeyBzdXBlci5jb250ZW50Q2hhbmdlZCgpOyB9XG4gICAgICByZXN0YXJ0VGltZXIodGhpcyk7XG4gICAgfVxuXG4gICAgZ2V0IFtzeW1ib2xzLmRlZmF1bHRzXSgpIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRzID0gc3VwZXJbc3ltYm9scy5kZWZhdWx0c10gfHwge307XG4gICAgICBkZWZhdWx0cy5wbGF5aW5nID0gZmFsc2U7XG4gICAgICBkZWZhdWx0cy5zZWxlY3Rpb25UaW1lckR1cmF0aW9uID0gMTAwMDtcbiAgICAgIHJldHVybiBkZWZhdWx0cztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCZWdpbiBhdXRvbWF0aWMgcHJvZ3Jlc3Npb24gb2YgdGhlIHNlbGVjdGlvbi5cbiAgICAgKi9cbiAgICBwbGF5KCkge1xuICAgICAgaWYgKHN1cGVyLnBsYXkpIHsgc3VwZXIucGxheSgpOyB9XG4gICAgICBzdGFydFRpbWVyKHRoaXMpO1xuICAgICAgdGhpc1twbGF5aW5nU3ltYm9sXSA9IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGF1c2UgYXV0b21hdGljIHByb2dyZXNzaW9uIG9mIHRoZSBzZWxlY3Rpb24uXG4gICAgICovXG4gICAgcGF1c2UoKSB7XG4gICAgICBpZiAoc3VwZXIucGF1c2UpIHsgc3VwZXIucGF1c2UoKTsgfVxuICAgICAgY2xlYXJUaW1lcih0aGlzKTtcbiAgICAgIHRoaXNbcGxheWluZ1N5bWJvbF0gPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHRoZSBzZWxlY3Rpb24gaXMgYmVpbmcgYXV0b21hdGljYWxseSBhZHZhbmNlZC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG4gICAgZ2V0IHBsYXlpbmcoKSB7XG4gICAgICByZXR1cm4gdGhpc1twbGF5aW5nU3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IHBsYXlpbmcocGxheWluZykge1xuICAgICAgY29uc3QgcHJldmlvdXNQbGF5aW5nID0gdGhpc1twbGF5aW5nU3ltYm9sXTtcbiAgICAgIGNvbnN0IHBhcnNlZCA9IFN0cmluZyhwbGF5aW5nKSA9PT0gJ3RydWUnOyAvLyBDYXN0IHRvIGJvb2xlYW5cbiAgICAgIGlmICgncGxheWluZycgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIucGxheWluZyA9IHBsYXlpbmc7IH1cbiAgICAgIGlmIChwYXJzZWQgIT09IHByZXZpb3VzUGxheWluZykge1xuICAgICAgICBpZiAocGxheWluZykge1xuICAgICAgICAgIHRoaXMucGxheSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICogV2hlbiB0aGUgc2VsZWN0ZWQgaXRlbSBjaGFuZ2VzIChiZWNhdXNlIG9mIHNvbWV0aGluZyB0aGlzIG1peGluIGRpZCwgb3JcbiAgICAgKiB3YXMgY2hhbmdlZCBieSBhbiBvdXRzaWRlIGFnZW50IGxpa2UgdGhlIHVzZXIpLCB3ZSB3YWl0IGJlZm9yZSBhZHZhbmNpbmdcbiAgICAgKiB0byB0aGUgbmV4dCBpdGVtLiBCeSB0cmlnZ2VyaW5nIHRoZSBuZXh0IGl0ZW0gdGhpcyB3YXksIHdlIGltcGxpY2l0bHkgZ2V0XG4gICAgICogYSBkZXNpcmFibGUgYmVoYXZpb3I6IGlmIHRoZSB1c2VyIGNoYW5nZXMgdGhlIHNlbGVjdGlvbiAoZS5nLiwgaW4gYVxuICAgICAqIGNhcm91c2VsKSwgd2UgbGV0IHRoZW0gc2VlIHRoYXQgc2VsZWN0aW9uIHN0YXRlIGZvciBhIHdoaWxlIGJlZm9yZVxuICAgICAqIGFkdmFuY2luZyB0aGUgc2VsZWN0aW9uIG91cnNlbHZlcy5cbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0ZWRJdGVtKCkge1xuICAgICAgcmV0dXJuIHN1cGVyLnNlbGVjdGVkSXRlbTtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGVkSXRlbShpdGVtKSB7XG4gICAgICBpZiAoJ3NlbGVjdGVkSXRlbScgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJdGVtID0gaXRlbTsgfVxuICAgICAgcmVzdGFydFRpbWVyKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSB0aW1lIGluIG1pbGxpc2Vjb25kcyB0aGF0IHdpbGwgZWxhcHNlIGFmdGVyIHRoZSBzZWxlY3Rpb24gY2hhbmdlc1xuICAgICAqIGJlZm9yZSB0aGUgc2VsZWN0aW9uIHdpbGwgYmUgYWR2YW5jZWQgdG8gdGhlIG5leHQgaXRlbSBpbiB0aGUgbGlzdC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9IC0gVGltZSBpbiBtaWxsaXNlY29uZHNcbiAgICAgKiBAZGVmYXVsdCAxMDAwICgxIHNlY29uZClcbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0aW9uVGltZXJEdXJhdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzW3NlbGVjdGlvblRpbWVyRHVyYXRpb25TeW1ib2xdO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0aW9uVGltZXJEdXJhdGlvbih2YWx1ZSkge1xuICAgICAgdGhpc1tzZWxlY3Rpb25UaW1lckR1cmF0aW9uU3ltYm9sXSA9IHBhcnNlSW50KHZhbHVlKTtcbiAgICAgIGlmICgnc2VsZWN0aW9uVGltZXJEdXJhdGlvbicgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0aW9uVGltZXJEdXJhdGlvbiA9IHZhbHVlOyB9XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gVGltZXJTZWxlY3Rpb247XG59O1xuXG5cbmZ1bmN0aW9uIGNsZWFyVGltZXIoZWxlbWVudCkge1xuICBpZiAoZWxlbWVudFt0aW1lclRpbWVvdXRTeW1ib2xdKSB7XG4gICAgY2xlYXJUaW1lb3V0KGVsZW1lbnRbdGltZXJUaW1lb3V0U3ltYm9sXSk7XG4gICAgZWxlbWVudFt0aW1lclRpbWVvdXRTeW1ib2xdID0gbnVsbDtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXN0YXJ0VGltZXIoZWxlbWVudCkge1xuICBjbGVhclRpbWVyKGVsZW1lbnQpO1xuICBpZiAoZWxlbWVudC5wbGF5aW5nICYmIGVsZW1lbnQuaXRlbXMgJiYgZWxlbWVudC5pdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgc3RhcnRUaW1lcihlbGVtZW50KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdGFydFRpbWVyKGVsZW1lbnQpIHtcbiAgLy8gSWYgcGxheSgpIGlzIGNhbGxlZCBtb3JlIHRoYW4gb25jZSwgY2FuY2VsIGFueSBleGlzdGluZyB0aW1lci5cbiAgY2xlYXJUaW1lcihlbGVtZW50KTtcbiAgZWxlbWVudFt0aW1lclRpbWVvdXRTeW1ib2xdID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgc2VsZWN0TmV4dFdpdGhXcmFwKGVsZW1lbnQpO1xuICB9LCBlbGVtZW50LnNlbGVjdGlvblRpbWVyRHVyYXRpb24pO1xufVxuXG4vLyBTZWxlY3QgdGhlIG5leHQgaXRlbSwgd3JhcHBpbmcgdG8gZmlyc3QgaXRlbSBpZiBuZWNlc3NhcnkuXG5mdW5jdGlvbiBzZWxlY3ROZXh0V2l0aFdyYXAoZWxlbWVudCkge1xuICBjb25zdCBpdGVtcyA9IGVsZW1lbnQuaXRlbXM7XG4gIGlmIChpdGVtcyAmJiBpdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgaWYgKGVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9PSBudWxsIHx8IGVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9PT0gaXRlbXMubGVuZ3RoIC0gMSkge1xuICAgICAgZWxlbWVudC5zZWxlY3RGaXJzdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LnNlbGVjdE5leHQoKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvY3JlYXRlU3ltYm9sJztcbmltcG9ydCBzeW1ib2xzIGZyb20gJy4vc3ltYm9scyc7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IGFic29yYkRlY2VsZXJhdGlvblN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnYWJzb3JiRGVjZWxlcmF0aW9uJyk7XG5jb25zdCBsYXN0RGVsdGFYU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdsYXN0RGVsdGFYJyk7XG5jb25zdCBsYXN0V2hlZWxUaW1lb3V0U3ltYm9sID0gY3JlYXRlU3ltYm9sKCdsYXN0V2hlZWxUaW1lb3V0Jyk7XG5jb25zdCBwb3N0TmF2aWdhdGVEZWxheUNvbXBsZXRlU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdwb3N0TmF2aWdhdGVEZWxheUNvbXBsZXRlJyk7XG5jb25zdCB3aGVlbERpc3RhbmNlU3ltYm9sID0gY3JlYXRlU3ltYm9sKCd3aGVlbERpc3RhbmNlJyk7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBUcmFja3BhZERpcmVjdGlvbi4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIG1hcHMgYSBob3Jpem9udGFsIHRyYWNrcGFkIHN3aXBlIGdlc3R1cmVzIChvciBob3Jpem9udGFsIG1vdXNlXG4gICAqIHdoZWVsIGFjdGlvbnMpIHRvIGRpcmVjdGlvbiBzZW1hbnRpY3MuXG4gICAqXG4gICAqIFlvdSBjYW4gdXNlIHRoaXMgbWl4aW4gd2l0aCBhIG1peGluIGxpa2VcbiAgICogW0RpcmVjdGlvblNlbGVjdGlvbk1peGluXShEaXJlY3Rpb25TZWxlY3Rpb25NaXhpbi5tZCkgdG8gbGV0IHRoZSB1c2VyXG4gICAqIGNoYW5nZSB0aGUgc2VsZWN0aW9uIHdpdGggdGhlIHRyYWNrcGFkIG9yIG1vdXNlIHdoZWVsLlxuICAgKlxuICAgKiBUbyByZXNwb25kIHRvIHRoZSB0cmFja3BhZCwgd2UgY2FuIGxpc3RlbiB0byB0aGUgRE9NJ3MgXCJ3aGVlbFwiIGV2ZW50cy5cbiAgICogVGhlc2UgZXZlbnRzIGFyZSBmaXJlZCBhcyB0aGUgdXNlciBkcmFncyB0aGVpciBmaW5nZXJzIGFjcm9zcyBhIHRyYWNrcGFkLlxuICAgKiBVbmZvcnR1bmF0ZWx5LCBicm93c2VycyBhcmUgbWlzc2luZyBhIGNyaXRpY2FsIGV2ZW50IOKAlMKgdGhlcmUgaXMgbm8gZXZlbnRcbiAgICogd2hlbiB0aGUgdXNlciAqc3RvcHMqIGEgZ2VzdHVyZWQgb24gdGhlIHRyYWNrcGFkIG9yIG1vdXNlIHdoZWVsLlxuICAgKlxuICAgKiBUbyBtYWtlIHRoaW5ncyB3b3JzZSwgdGhlIG1haW5zdHJlYW0gYnJvd3NlcnMgY29udGludWUgdG8gZ2VuZXJhdGUgZmFrZVxuICAgKiB3aGVlbCBldmVudHMgZXZlbiBhZnRlciB0aGUgdXNlciBoYXMgc3RvcHBlZCBkcmFnZ2luZyB0aGVpciBmaW5nZXJzLiBUaGVzZVxuICAgKiBmYWtlIGV2ZW50cyBzaW11bGF0ZSB0aGUgdXNlciBncmFkdWFsbHkgc2xvd2luZyBkb3duIHRoZSBkcmFnIHVudGlsIHRoZXlcbiAgICogY29tZSB0byBhIHNtb290aCBzdG9wLiBJbiBzb21lIGNvbnRleHRzLCB0aGVzZSBmYWtlIHdoZWVsIGV2ZW50cyBtaWdodCBiZVxuICAgKiBoZWxwZnVsLCBidXQgaW4gdHJ5aW5nIHRvIHN1cHBseSB0eXBpY2FsIHRyYWNrcGFkIHN3aXBlIG5hdmlnYXRpb24sIHRoZXNlXG4gICAqIGZha2UgZXZlbnRzIGdldCBpbiB0aGUgd2F5LlxuICAgKlxuICAgKiBUaGlzIGNvbXBvbmVudCB1c2VzIGhldXJpc3RpY3MgdG8gd29yayBhcm91bmQgdGhlc2UgcHJvYmxlbXMsIGJ1dCB0aGVcbiAgICogY29tcGxleCBuYXR1cmUgb2YgdGhlIHByb2JsZW0gbWFrZSBpdCBleHRyZW1lbHkgZGlmZmljdWx0IHRvIGFjaGlldmUgdGhlXG4gICAqIHNhbWUgZGVncmVlIG9mIHRyYWNrcGFkIHJlc3BvbnNpdmVuZXNzIHBvc3NpYmxlIHdpdGggbmF0aXZlIGFwcGxpY2F0aW9ucy5cbiAgICovXG4gIGNsYXNzIFRyYWNrcGFkRGlyZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgZXZlbnQgPT4ge1xuICAgICAgICBjb25zdCBoYW5kbGVkID0gd2hlZWwodGhpcywgZXZlbnQpO1xuICAgICAgICBpZiAoaGFuZGxlZCkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmVzZXRXaGVlbFRyYWNraW5nKHRoaXMpO1xuICAgIH1cblxuICAgIC8vIERlZmF1bHQgaW1wbGVtZW50YXRpb24uXG4gICAgZ2V0IFtzeW1ib2xzLmRyYWdnaW5nXSgpIHtcbiAgICAgIHJldHVybiBzdXBlcltzeW1ib2xzLmRyYWdnaW5nXTtcbiAgICB9XG4gICAgc2V0IFtzeW1ib2xzLmRyYWdnaW5nXSh2YWx1ZSkge1xuICAgICAgaWYgKHN5bWJvbHMuZHJhZ2dpbmcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXJbc3ltYm9scy5kcmFnZ2luZ10gPSB2YWx1ZTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSBsZWZ0LlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy5cbiAgICAgKi9cbiAgICBbc3ltYm9scy5nb0xlZnRdKCkge1xuICAgICAgaWYgKHN1cGVyW3N5bWJvbHMuZ29MZWZ0XSkgeyByZXR1cm4gc3VwZXJbc3ltYm9scy5nb0xlZnRdKCk7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgcmlnaHQuXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLlxuICAgICAqL1xuICAgIFtzeW1ib2xzLmdvUmlnaHRdKCkge1xuICAgICAgaWYgKHN1cGVyW3N5bWJvbHMuZ29SaWdodF0pIHsgcmV0dXJuIHN1cGVyW3N5bWJvbHMuZ29SaWdodF0oKTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBkaXN0YW5jZSB0aGUgdXNlciBoYXMgbW92ZWQgdGhlIGZpcnN0IHRvdWNocG9pbnQgc2luY2UgdGhlIGJlZ2lubmluZ1xuICAgICAqIG9mIGEgdHJhY2twYWQvd2hlZWwgb3BlcmF0aW9uLCBleHByZXNzZWQgYXMgYSBmcmFjdGlvbiBvZiB0aGUgZWxlbWVudCdzXG4gICAgICogd2lkdGguXG4gICAgICpcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKi9cbiAgICBnZXQgdHJhdmVsRnJhY3Rpb24oKSB7XG4gICAgICByZXR1cm4gc3VwZXIudHJhdmVsRnJhY3Rpb247XG4gICAgfVxuICAgIHNldCB0cmF2ZWxGcmFjdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKCd0cmF2ZWxGcmFjdGlvbicgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIudHJhdmVsRnJhY3Rpb24gPSB2YWx1ZTsgfVxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIFRyYWNrcGFkRGlyZWN0aW9uO1xufTtcblxuXG4vLyBUaW1lIHdlIHdhaXQgZm9sbG93aW5nIGEgbmF2aWdhdGlvbiBiZWZvcmUgcGF5aW5nIGF0dGVudGlvbiB0byB3aGVlbFxuLy8gZXZlbnRzIGFnYWluLlxuY29uc3QgUE9TVF9OQVZJR0FURV9USU1FID0gMjUwO1xuXG4vLyBUaW1lIHdlIHdhaXQgYWZ0ZXIgdGhlIGxhc3Qgd2hlZWwgZXZlbnQgYmVmb3JlIHdlIHJlc2V0IHRoaW5ncy5cbmNvbnN0IFdIRUVMX1RJTUUgPSAxMDA7XG5cblxuLy8gRm9sbG93aW5nIGEgbmF2aWdhdGlvbiwgcGFydGlhbGx5IHJlc2V0IG91ciB3aGVlbCB0cmFja2luZy5cbmZ1bmN0aW9uIHBvc3ROYXZpZ2F0ZShlbGVtZW50KSB7XG4gIGVsZW1lbnQudHJhdmVsRnJhY3Rpb24gPSAwO1xuICBlbGVtZW50W3doZWVsRGlzdGFuY2VTeW1ib2xdID0gMDtcbiAgZWxlbWVudFtwb3N0TmF2aWdhdGVEZWxheUNvbXBsZXRlU3ltYm9sXSA9IHRydWU7XG4gIGVsZW1lbnRbYWJzb3JiRGVjZWxlcmF0aW9uU3ltYm9sXSA9IHRydWU7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGVsZW1lbnRbcG9zdE5hdmlnYXRlRGVsYXlDb21wbGV0ZVN5bWJvbF0gPSBmYWxzZTtcbiAgfSwgUE9TVF9OQVZJR0FURV9USU1FKTtcbn1cblxuLy8gUmVzZXQgYWxsIHN0YXRlIHJlbGF0ZWQgdG8gdGhlIHRyYWNraW5nIG9mIHRoZSB3aGVlbC5cbmZ1bmN0aW9uIHJlc2V0V2hlZWxUcmFja2luZyhlbGVtZW50KSB7XG4gIGVsZW1lbnQudHJhdmVsRnJhY3Rpb24gPSAwO1xuICBlbGVtZW50W3doZWVsRGlzdGFuY2VTeW1ib2xdID0gMDtcbiAgZWxlbWVudFtsYXN0RGVsdGFYU3ltYm9sXSA9IDA7XG4gIGVsZW1lbnRbYWJzb3JiRGVjZWxlcmF0aW9uU3ltYm9sXSA9IGZhbHNlO1xuICBlbGVtZW50W3Bvc3ROYXZpZ2F0ZURlbGF5Q29tcGxldGVTeW1ib2xdID0gZmFsc2U7XG4gIGlmIChlbGVtZW50W2xhc3RXaGVlbFRpbWVvdXRTeW1ib2xdKSB7XG4gICAgY2xlYXJUaW1lb3V0KGVsZW1lbnRbbGFzdFdoZWVsVGltZW91dFN5bWJvbF0pO1xuICAgIGVsZW1lbnRbbGFzdFdoZWVsVGltZW91dFN5bWJvbF0gPSBudWxsO1xuICB9XG59XG5cbi8vIERlZmluZSBvdXIgb3duIHNpZ24gZnVuY3Rpb24sIHNpbmNlIChhcyBvZiBNYXkgMjAxNSksIFNhZmFyaSBhbmQgSUUgZG9uJ3Rcbi8vIHN1cHBseSBNYXRoLnNpZ24oKS5cbmZ1bmN0aW9uIHNpZ24oeCkge1xuICByZXR1cm4gKHggPT09IDApID9cbiAgICAwIDpcbiAgICAoeCA+IDApID9cbiAgICAgIDEgOlxuICAgICAgLTE7XG59XG5cbi8vIFRPRE86IERhbXBpbmcsIG9yIHNvbWUgb3RoZXIgdHJlYXRtZW50IGZvciBnb2luZyBwYXN0IHRoZSBlbmRzLlxuXG4vKlxuICogQSB3aGVlbCBldmVudCBoYXMgYmVlbiBnZW5lcmF0ZWQuIFRoaXMgY291bGQgYmUgYSByZWFsIHdoZWVsIGV2ZW50LCBvciBpdFxuICogY291bGQgYmUgZmFrZSAoc2VlIG5vdGVzIGluIHRoZSBoZWFkZXIpLlxuICpcbiAqIFRoaXMgaGFuZGxlciB1c2VzIHNldmVyYWwgc3RyYXRlZ2llcyB0byB0cnkgdG8gYXBwcm94aW1hdGUgbmF0aXZlIHRyYWNrcGFkXG4gKiBzd2lwZSBuYXZpZ2F0aW9uLlxuICpcbiAqIElmIHRoZSB1c2VyIGhhcyBkcmFnZ2VkIGVub3VnaCB0byBjYXVzZSBhIG5hdmlnYXRpb24sIHRoZW4gZm9yIGEgc2hvcnRcbiAqIGRlbGF5IGZvbGxvd2luZyB0aGF0IG5hdmlnYXRpb24sIHN1YnNlcXVlbnQgd2hlZWwgZXZlbnRzIHdpbGwgYmUgaWdub3JlZC5cbiAqXG4gKiBGdXJ0aGVybW9yZSwgZm9sbHdvd2luZyBhIG5hdmlnYXRpb24sIHdlIGlnbm9yZSBhbGwgd2hlZWwgZXZlbnRzIHVudGlsIHdlXG4gKiByZWNlaXZlIGF0IGxlYXN0IG9uZSBldmVudCB3aGVyZSB0aGUgZXZlbnQncyBkZWx0YVggKGRpc3RhbmNlIHRyYXZlbGVkKSBpc1xuICogKmdyZWF0ZXIqIHRoYW4gdGhlIHByZXZpb3VzIGV2ZW50J3MgZGVsdGFYLiBUaGlzIGhlbHBzIHVzIGZpbHRlciBvdXQgdGhlXG4gKiBmYWtlIHdoZWVsIGV2ZW50cyBnZW5lcmF0ZWQgYnkgdGhlIGJyb3dzZXIgdG8gc2ltdWxhdGUgZGVjZWxlcmF0aW9uLlxuICpcbiAqL1xuZnVuY3Rpb24gd2hlZWwoZWxlbWVudCwgZXZlbnQpIHtcblxuICAvLyBTaW5jZSB3ZSBoYXZlIGEgbmV3IHdoZWVsIGV2ZW50LCByZXNldCBvdXIgdGltZXIgd2FpdGluZyBmb3IgdGhlIGxhc3RcbiAgLy8gd2hlZWwgZXZlbnQgdG8gcGFzcy5cbiAgaWYgKGVsZW1lbnRbbGFzdFdoZWVsVGltZW91dFN5bWJvbF0pIHtcbiAgICBjbGVhclRpbWVvdXQoZWxlbWVudFtsYXN0V2hlZWxUaW1lb3V0U3ltYm9sXSk7XG4gIH1cbiAgZWxlbWVudFtsYXN0V2hlZWxUaW1lb3V0U3ltYm9sXSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHdoZWVsVGltZWRPdXQoZWxlbWVudCk7XG4gIH0sIFdIRUVMX1RJTUUpO1xuXG4gIGNvbnN0IGRlbHRhWCA9IGV2ZW50LmRlbHRhWDtcbiAgY29uc3QgZGVsdGFZID0gZXZlbnQuZGVsdGFZO1xuXG4gIC8vIFNlZSBpZiBlbGVtZW50IGV2ZW50IHJlcHJlc2VudHMgYWNjZWxlcmF0aW9uIG9yIGRlY2VsZXJhdGlvbi5cbiAgY29uc3QgYWNjZWxlcmF0aW9uID0gc2lnbihkZWx0YVgpICogKGRlbHRhWCAtIGVsZW1lbnRbbGFzdERlbHRhWFN5bWJvbF0pO1xuICBlbGVtZW50W2xhc3REZWx0YVhTeW1ib2xdID0gZGVsdGFYO1xuXG4gIGlmIChNYXRoLmFicyhkZWx0YVgpIDwgTWF0aC5hYnMoZGVsdGFZKSkge1xuICAgIC8vIE1vdmUgd2FzIG1vc3RseSB2ZXJ0aWNhbC4gVGhlIHVzZXIgbWF5IGJlIHRyeWluZyBzY3JvbGwgd2l0aCB0aGVcbiAgICAvLyB0cmFja3BhZC93aGVlbC4gVG8gYmUgb24gdGhlIHNhZmUsIHdlIGlnbm9yZSBzdWNoIGV2ZW50cy5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoZWxlbWVudFtwb3N0TmF2aWdhdGVEZWxheUNvbXBsZXRlU3ltYm9sXSkge1xuICAgIC8vIEl0J3MgdG9vIHNvb24gYWZ0ZXIgYSBuYXZpZ2F0aW9uOyBpZ25vcmUgdGhlIGV2ZW50LlxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKGFjY2VsZXJhdGlvbiA+IDApIHtcbiAgICAvLyBUaGUgZXZlbnRzIGFyZSBub3QgKG9yIGFyZSBubyBsb25nZXIpIGRlY2VsZXJhdGluZywgc28gd2UgY2FuIHN0YXJ0XG4gICAgLy8gcGF5aW5nIGF0dGVudGlvbiB0byB0aGVtIGFnYWluLlxuICAgIGVsZW1lbnRbYWJzb3JiRGVjZWxlcmF0aW9uU3ltYm9sXSA9IGZhbHNlO1xuICB9IGVsc2UgaWYgKGVsZW1lbnRbYWJzb3JiRGVjZWxlcmF0aW9uU3ltYm9sXSkge1xuICAgIC8vIFRoZSB3aGVlbCBldmVudCB3YXMgbGlrZWx5IGZha2VkIHRvIHNpbXVsYXRlIGRlY2VsZXJhdGlvbjsgaWdub3JlIGl0LlxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZWxlbWVudFt3aGVlbERpc3RhbmNlU3ltYm9sXSArPSBkZWx0YVg7XG5cbiAgLy8gVXBkYXRlIHRoZSB0cmF2ZWwgZnJhY3Rpb24gb2YgdGhlIGVsZW1lbnQgYmVpbmcgbmF2aWdhdGVkLlxuICBjb25zdCB3aWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gIGxldCB0cmF2ZWxGcmFjdGlvbiA9IHdpZHRoID4gMCA/XG4gICAgZWxlbWVudFt3aGVlbERpc3RhbmNlU3ltYm9sXSAvIHdpZHRoIDpcbiAgICAwO1xuICBlbGVtZW50W3N5bWJvbHMuZHJhZ2dpbmddID0gdHJ1ZTtcbiAgdHJhdmVsRnJhY3Rpb24gPSBzaWduKHRyYXZlbEZyYWN0aW9uKSAqIE1hdGgubWluKE1hdGguYWJzKHRyYXZlbEZyYWN0aW9uKSwgMSk7XG4gIGVsZW1lbnQudHJhdmVsRnJhY3Rpb24gPSB0cmF2ZWxGcmFjdGlvbjtcblxuICAvLyBJZiB0aGUgdXNlciBoYXMgZHJhZ2dlZCBlbm91Z2ggdG8gcmVhY2ggdGhlIHByZXZpb3VzL25leHQgaXRlbSwgdGhlblxuICAvLyBjb21wbGV0ZSBhIG5hdmlnYXRpb24gdG8gdGhhdCBpdGVtLlxuICBpZiAodHJhdmVsRnJhY3Rpb24gPT09IDEpIHtcbiAgICBlbGVtZW50W3N5bWJvbHMuZHJhZ2dpbmddID0gZmFsc2U7XG4gICAgZWxlbWVudFtzeW1ib2xzLmdvUmlnaHRdKCk7XG4gICAgcG9zdE5hdmlnYXRlKGVsZW1lbnQpO1xuICB9IGVsc2UgaWYgKHRyYXZlbEZyYWN0aW9uID09PSAtMSkge1xuICAgIGVsZW1lbnRbc3ltYm9scy5kcmFnZ2luZ10gPSBmYWxzZTtcbiAgICBlbGVtZW50W3N5bWJvbHMuZ29MZWZ0XSgpO1xuICAgIHBvc3ROYXZpZ2F0ZShlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG4vLyBBIHN1ZmZpY2llbnRseSBsb25nIHBlcmlvZCBvZiB0aW1lIGhhcyBwYXNzZWQgc2luY2UgdGhlIGxhc3Qgd2hlZWwgZXZlbnQuXG4vLyBXZSBzbmFwIHRoZSBzZWxlY3Rpb24gdG8gdGhlIGNsb3Nlc3QgaXRlbSwgdGhlbiByZXNldCBvdXIgc3RhdGUuXG5mdW5jdGlvbiB3aGVlbFRpbWVkT3V0KGVsZW1lbnQpIHtcblxuICAvLyBTbmFwIHRvIHRoZSBjbG9zZXN0IGl0ZW0uXG4gIGVsZW1lbnRbc3ltYm9scy5kcmFnZ2luZ10gPSBmYWxzZTtcbiAgY29uc3QgdHJhdmVsRnJhY3Rpb24gPSBlbGVtZW50LnRyYXZlbEZyYWN0aW9uO1xuICBpZiAodHJhdmVsRnJhY3Rpb24gPj0gMC41KSB7XG4gICAgZWxlbWVudFtzeW1ib2xzLmdvUmlnaHRdKCk7XG4gIH0gZWxzZSBpZiAodHJhdmVsRnJhY3Rpb24gPD0gLTAuNSkge1xuICAgIGVsZW1lbnRbc3ltYm9scy5nb0xlZnRdKCk7XG4gIH1cblxuICAvLyBUT0RPOiBMaXN0ZW4gZm9yIHRoZSB0cmFuc2l0aW9uIHRvIGNvbXBsZXRlLCBhbmQgdGhlbiByZXN0b3JlXG4gIC8vIGRyYWdnaW5nIHRvIGZhbHNlIChvciB0aGUgcHJldmlvdXMgdmFsdWUpLlxuXG4gIHJlc2V0V2hlZWxUcmFja2luZyhlbGVtZW50KTtcbn1cbiIsIi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIGNyZWF0ZSBhIHN5bWJvbCB0aGF0IGNhbiBiZSB1c2VkIGZvciBhc3NvY2lhdGluZyBwcml2YXRlXG4gKiBkYXRhIHdpdGggYW4gZWxlbWVudC5cbiAqXG4gKiBNaXhpbnMgYW5kIGNvbXBvbmVudCBjbGFzc2VzIG9mdGVuIHdhbnQgdG8gYXNzb2NpYXRlIHByaXZhdGUgZGF0YSB3aXRoIGFuXG4gKiBlbGVtZW50IGluc3RhbmNlLCBidXQgSmF2YVNjcmlwdCBkb2VzIG5vdCBoYXZlIGRpcmVjdCBzdXBwb3J0IGZvciB0cnVlXG4gKiBwcml2YXRlIHByb3BlcnRpZXMuIE9uZSBhcHByb2FjaCBpcyB0byB1c2UgdGhlXG4gKiBbU3ltYm9sXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9TeW1ib2wpXG4gKiBkYXRhIHR5cGUgdG8gc2V0IGFuZCByZXRyaWV2ZSBkYXRhIG9uIGFuIGVsZW1lbnQuXG4gKlxuICogVW5mb3J0dW5hdGVseSwgdGhlIFN5bWJvbCB0eXBlIGlzIG5vdCBhdmFpbGFibGUgaW4gSW50ZXJuZXQgRXhwbG9yZXIgMTEuIFRoZVxuICogYGNyZWF0ZVN5bWJvbGAgaGVscGVyIGZ1bmN0aW9uIGV4aXN0cyBhcyBhIHdvcmthcm91bmQgZm9yIElFIDExLiBSYXRoZXIgdGhhblxuICogcmV0dXJuaW5nIGEgdHJ1ZSBTeW1ib2wsIGl0IHNpbXBseSByZXR1cm5zIGFuIHVuZGVyc2NvcmUtcHJlZml4ZWQgc3RyaW5nLlxuICpcbiAqIFVzYWdlOlxuICpcbiAqICAgICBjb25zdCBmb29TeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2ZvbycpO1xuICpcbiAqICAgICBjbGFzcyBNeUVsZW1lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gKiAgICAgICBnZXQgZm9vKCkge1xuICogICAgICAgICByZXR1cm4gdGhpc1tmb29TeW1ib2xdO1xuICogICAgICAgfVxuICogICAgICAgc2V0IGZvbyh2YWx1ZSkge1xuICogICAgICAgICB0aGlzW2Zvb1N5bWJvbF0gPSB2YWx1ZTtcbiAqICAgICAgIH1cbiAqICAgICB9XG4gKlxuICogSW4gSUUgMTEsIHRoaXMgc2FtcGxlIHdpbGwgXCJoaWRlXCIgZGF0YSBiZWhpbmQgYW4gaW5zdGFuY2UgcHJvcGVydHkgdGhpcy5fZm9vLlxuICogVGhlIHVzZSBvZiB0aGUgdW5kZXJzY29yZSBpcyBtZWFudCB0byByZWR1Y2UgKG5vdCBlbGltaW5hdGUpIHRoZSBwb3RlbnRpYWxcbiAqIGZvciBuYW1lIGNvbmZsaWN0cywgYW5kIGRpc2NvdXJhZ2UgKG5vdCBwcmV2ZW50KSBleHRlcm5hbCBhY2Nlc3MgdG8gdGhpc1xuICogZGF0YS4gSW4gbW9kZXJuIGJyb3dzZXJzLCB0aGUgYWJvdmUgY29kZSB3aWxsIGVsaW1pbmF0ZSB0aGUgcG90ZW50aWFsIG9mXG4gKiBuYW1pbmcgY29uZmxpY3RzLCBhbmQgYmV0dGVyIGhpZGUgdGhlIGRhdGEgYmVoaW5kIGEgcmVhbCBTeW1ib2wuXG4gKlxuICogQGZ1bmN0aW9uIGNyZWF0ZVN5bWJvbFxuICogQHBhcmFtIHtzdHJpbmd9IGRlc2NyaXB0aW9uIC0gQSBzdHJpbmcgdG8gaWRlbnRpZnkgdGhlIHN5bWJvbCB3aGVuIGRlYnVnZ2luZ1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTeW1ib2woZGVzY3JpcHRpb24pIHtcbiAgcmV0dXJuIHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgP1xuICAgIFN5bWJvbChkZXNjcmlwdGlvbikgOlxuICAgIGBfJHtkZXNjcmlwdGlvbn1gO1xufVxuIiwiLypcbiAqIE1pY3JvdGFzayBoZWxwZXIgZm9yIElFIDExLlxuICpcbiAqIEV4ZWN1dGluZyBhIGZ1bmN0aW9uIGFzIGEgbWljcm90YXNrIGlzIHRyaXZpYWwgaW4gYnJvd3NlcnMgdGhhdCBzdXBwb3J0XG4gKiBwcm9taXNlcywgd2hvc2UgdGhlbigpIGNsYXVzZXMgdXNlIG1pY3JvdGFzayB0aW1pbmcuIElFIDExIGRvZXNuJ3Qgc3VwcG9ydFxuICogcHJvbWlzZXMsIGJ1dCBkb2VzIHN1cHBvcnQgTXV0YXRpb25PYnNlcnZlcnMsIHdoaWNoIGFyZSBhbHNvIGV4ZWN1dGVkIGFzXG4gKiBtaWNyb3Rhc2tzLiBTbyB0aGlzIGhlbHBlciB1c2VzIGFuIE11dGF0aW9uT2JzZXJ2ZXIgdG8gYWNoaWV2ZSBtaWNyb3Rhc2tcbiAqIHRpbWluZy5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9qYWtlYXJjaGliYWxkLmNvbS8yMDE1L3Rhc2tzLW1pY3JvdGFza3MtcXVldWVzLWFuZC1zY2hlZHVsZXMvXG4gKlxuICogSW5zcGlyZWQgYnkgUG9seW1lcidzIGFzeW5jKCkgZnVuY3Rpb24uXG4gKi9cblxuXG4vLyBUaGUgcXVldWUgb2YgcGVuZGluZyBjYWxsYmFja3MgdG8gYmUgZXhlY3V0ZWQgYXMgbWljcm90YXNrcy5cbmNvbnN0IGNhbGxiYWNrcyA9IFtdO1xuXG4vLyBDcmVhdGUgYW4gZWxlbWVudCB0aGF0IHdlIHdpbGwgbW9kaWZ5IHRvIGZvcmNlIG9ic2VydmFibGUgbXV0YXRpb25zLlxuY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcblxuLy8gQSBtb25vdG9uaWNhbGx5LWluY3JlYXNpbmcgdmFsdWUuXG5sZXQgY291bnRlciA9IDA7XG5cblxuLyoqXG4gKiBBZGQgYSBjYWxsYmFjayB0byB0aGUgbWljcm90YXNrIHF1ZXVlLlxuICpcbiAqIFRoaXMgdXNlcyBhIE11dGF0aW9uT2JzZXJ2ZXIgc28gdGhhdCBpdCB3b3JrcyBvbiBJRSAxMS5cbiAqXG4gKiBOT1RFOiBJRSAxMSBtYXkgYWN0dWFsbHkgdXNlIHRpbWVvdXQgdGltaW5nIHdpdGggTXV0YXRpb25PYnNlcnZlcnMuIFRoaXNcbiAqIG5lZWRzIG1vcmUgaW52ZXN0aWdhdGlvbi5cbiAqXG4gKiBAZnVuY3Rpb24gbWljcm90YXNrXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaWNyb3Rhc2soY2FsbGJhY2spIHtcbiAgY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICAvLyBGb3JjZSBhIG11dGF0aW9uLlxuICBlbGVtZW50LnRleHRDb250ZW50ID0gKytjb3VudGVyO1xufVxuXG5cbi8vIEV4ZWN1dGUgYW55IHBlbmRpbmcgY2FsbGJhY2tzLlxuZnVuY3Rpb24gZXhlY3V0ZUNhbGxiYWNrcygpIHtcbiAgd2hpbGUgKGNhbGxiYWNrcy5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgY2FsbGJhY2sgPSBjYWxsYmFja3Muc2hpZnQoKTtcbiAgICBjYWxsYmFjaygpO1xuICB9XG59XG5cblxuLy8gQ3JlYXRlIHRoZSBvYnNlcnZlci5cbmNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZXhlY3V0ZUNhbGxiYWNrcyk7XG5vYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQsIHtcbiAgY2hhcmFjdGVyRGF0YTogdHJ1ZVxufSk7XG4iLCIvKipcbiAqIEhlbHBlciBmdW5jdGlvbiBmb3IgcmVuZGVyaW5nIGFuIGFycmF5IG9mIGl0ZW1zIGFzIGVsZW1lbnRzLlxuICpcbiAqIFRoaXMgaXMgbm90IGEgbWl4aW4sIGJ1dCBhIGZ1bmN0aW9uIGNvbXBvbmVudHMgY2FuIHVzZSBpZiB0aGV5IG5lZWQgdG9cbiAqIGdlbmVyYXRlIGEgc2V0IG9mIGVsZW1lbnRzIGZvciB0aGUgaXRlbXMgaW4gYW4gYXJyYXkuXG4gKlxuICogVGhpcyBmdW5jdGlvbiB3aWxsIHJldXNlIGV4aXN0aW5nIGVsZW1lbnRzIGlmIHBvc3NpYmxlLiBFLmcuLCBpZiBpdCBpcyBjYWxsZWRcbiAqIHRvIHJlbmRlciBhbiBhcnJheSBvZiA0IGl0ZW1zLCBhbmQgbGF0ZXIgY2FsbGVkIHRvIHJlbmRlciBhbiBhcnJheSBvZiA1XG4gKiBpdGVtcywgaXQgY2FuIHJldXNlIHRoZSBleGlzdGluZyA0IGl0ZW1zLCBjcmVhdGluZyBqdXN0IG9uZSBuZXcgZWxlbWVudC5cbiAqIE5vdGUsIGhvd2V2ZXIsIHRoYXQgdGhpcyByZS1yZW5kZXJpbmcgaXMgbm90IGF1dG9tYXRpYy4gSWYsIGFmdGVyIGNhbGxpbmdcbiAqIHRoaXMgZnVuY3Rpb24sIHlvdSBtYW5pcHVsYXRlIHRoZSBhcnJheSB5b3UgdXNlZCwgeW91IG11c3Qgc3RpbGwgY2FsbCB0aGlzXG4gKiBmdW5jdGlvbiBhZ2FpbiB0byByZS1yZW5kZXIgdGhlIGFycmF5LlxuICpcbiAqIFRoZSBgcmVuZGVySXRlbWAgcGFyYW1ldGVyIHRha2VzIGEgZnVuY3Rpb24gb2YgdHdvIGFyZ3VtZW50czogYW4gaXRlbSB0b1xuICogdG8gcmVuZGVyLCBhbmQgYW4gZXhpc3RpbmcgZWxlbWVudCAoaWYgb25lIGV4aXN0cykgd2hpY2ggY2FuIGJlIHJlcHVycG9zZWQgdG9cbiAqIHJlbmRlciB0aGF0IGl0ZW0uIElmIHRoZSBsYXR0ZXIgYXJndW1lbnQgaXMgbnVsbCwgdGhlIGByZW5kZXJJdGVtKClgIGZ1bmN0aW9uXG4gKiBzaG91bGQgY3JlYXRlIGEgbmV3IGVsZW1lbnQgYW5kIHJldHVybiBpdC4gVGhlIGZ1bmN0aW9uIHNob3VsZCBkbyB0aGUgc2FtZVxuICogaWYgdGhlIHN1cHBsaWVkIGV4aXN0aW5nIGVsZW1lbnQgaXMgbm90IHN1aXRhYmxlIGZvciByZW5kZXJpbmcgdGhlIGdpdmVuXG4gKiBpdGVtOyB0aGUgcmV0dXJuZWQgZWxlbWVudCB3aWxsIGJlIHVzZWQgdG8gcmVwbGFjZSB0aGUgZXhpc3Rpbmcgb25lLiBJZiB0aGVcbiAqIGV4aXN0aW5nIGVsZW1lbnQgKmlzKiBzdWl0YWJsZSwgdGhlIGZ1bmN0aW9uIGNhbiBzaW1wbHkgdXBkYXRlIGl0IGFuZCByZXR1cm5cbiAqIGl0IGFzIGlzLlxuICpcbiAqIEV4YW1wbGU6IFRoZSBmb2xsb3dpbmcgd2lsbCByZW5kZXIgYW4gYXJyYXkgb2Ygc3RyaW5ncyBpbiBkaXZzIGFzIGNoaWxkcmVuXG4gKiBvZiB0aGUgYGNvbnRhaW5lcmAgZWxlbWVudDpcbiAqXG4gKiAgICAgbGV0IHN0cmluZ3MgPSBbJ2EnLCAnYicsICdjJywgLi4uXTtcbiAqICAgICBsZXQgY29udGFpbmVyID0gdGhpcy5xdWVyeVNlbGVjdG9yKC4uLik7XG4gKiAgICAgcmVuZGVyQXJyYXlBc0VsZW1lbnRzKHN0cmluZ3MsIGNvbnRhaW5lciwgKHN0cmluZywgZWxlbWVudCkgPT4ge1xuICogICAgICAgaWYgKCFlbGVtZW50KSB7XG4gKiAgICAgICAgIC8vIE5vIGVsZW1lbnQgZXhpc3RzIHlldCwgc28gY3JlYXRlIGEgbmV3IG9uZS5cbiAqICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICogICAgICAgfVxuICogICAgICAgLy8gU2V0L3VwZGF0ZSB0aGUgdGV4dCBjb250ZW50IG9mIHRoZSBlbGVtZW50LlxuICogICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IHN0cmluZztcbiAqICAgICAgIHJldHVybiBlbGVtZW50O1xuICogICAgIH0pO1xuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGl0ZW1zIC0gdGhlIGl0ZW1zIHRvIHJlbmRlclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGFpbmVyIC0gdGhlIHBhcmVudCB0aGF0IHdpbGwgaG9sZCB0aGUgZWxlbWVudHNcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHJlbmRlckl0ZW0gLSByZXR1cm5zIGEgbmV3IGVsZW1lbnQgZm9yIGFuIGl0ZW0sIG9yXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwdXJwb3NlcyBhbiBleGlzdGluZyBlbGVtZW50IGZvciBhbiBpdGVtXG4gKi9cbmZ1bmN0aW9uIHJlbmRlckFycmF5QXNFbGVtZW50cyhpdGVtcywgY29udGFpbmVyLCByZW5kZXJJdGVtKSB7XG4gIC8vIENyZWF0ZSBhIG5ldyBzZXQgb2YgZWxlbWVudHMgZm9yIHRoZSBjdXJyZW50IGl0ZW1zLlxuICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IG9sZEVsZW1lbnQgPSBjb250YWluZXIuY2hpbGROb2Rlc1tpbmRleF07XG4gICAgY29uc3QgbmV3RWxlbWVudCA9IHJlbmRlckl0ZW0oaXRlbSwgb2xkRWxlbWVudCk7XG4gICAgaWYgKG5ld0VsZW1lbnQpIHtcbiAgICAgIGlmICghb2xkRWxlbWVudCkge1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmV3RWxlbWVudCk7XG4gICAgICB9IGVsc2UgaWYgKG5ld0VsZW1lbnQgIT09IG9sZEVsZW1lbnQpIHtcbiAgICAgICAgY29udGFpbmVyLnJlcGxhY2VDaGlsZChuZXdFbGVtZW50LCBvbGRFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIC8vIElmIHRoZSBhcnJheSBzaHJhbmssIHJlbW92ZSB0aGUgZXh0cmEgZWxlbWVudHMgd2hpY2ggYXJlIG5vIGxvbmdlciBuZWVkZWQuXG4gIHdoaWxlIChjb250YWluZXIuY2hpbGROb2Rlcy5sZW5ndGggPiBpdGVtcy5sZW5ndGgpIHtcbiAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmNoaWxkTm9kZXNbaXRlbXMubGVuZ3RoXSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyQXJyYXlBc0VsZW1lbnRzO1xuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuL2NyZWF0ZVN5bWJvbCc7XG5pbXBvcnQgdG9nZ2xlQ2xhc3MgZnJvbSAnLi90b2dnbGVDbGFzcyc7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IHNhZmVUb1NldEF0dHJpYnV0ZXNTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3NhZmVUb1NldEF0dHJpYnV0ZXMnKTtcbmNvbnN0IHBlbmRpbmdBdHRyaWJ1dGVzU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdwZW5kaW5nQXR0cmlidXRlcycpO1xuY29uc3QgcGVuZGluZ0NsYXNzZXNTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3BlbmRpbmdDbGFzc2VzJyk7XG5cblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb25zIGZvciB1cGRhdGluZyBhdHRyaWJ1dGVzLCBpbmNsdWRpbmcgdGhlIGBjbGFzc2AgYXR0cmlidXRlLlxuICovXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgLyoqXG4gICAqIFBlcmZvcm0gYW55IHBlbmRpbmcgdXBkYXRlcyB0byBhdHRyaWJ1dGVzIGFuZCBjbGFzc2VzLlxuICAgKlxuICAgKiBUaGlzIHdyaXRlcyBhbnkgYHNldEF0dHJpYnV0ZWAgb3IgYHRvZ2dsZUNsYXNzYCB2YWx1ZXMgdGhhdCB3ZXJlIHBlcmZvcm1lZFxuICAgKiBiZWZvcmUgYW4gZWxlbWVudCB3YXMgYXR0YWNoZWQgdG8gdGhlIGRvY3VtZW50IGZvciB0aGUgZmlyc3QgdGltZS5cbiAgICpcbiAgICogVGhpcyBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZCBieSBtaXhpbnMvY29tcG9uZW50cyBpbiB0aGVpclxuICAgKiBgY29ubmVjdGVkQ2FsbGJhY2tgLiBJZiBtdWxpdHBsZSBtaXhpbnMvY29tcG9uZW50cyBpbnZva2UgdGhpcyBkdXJpbmcgdGhlXG4gICAqIHNhbWUgYGNvbm5lY3RlZENhbGxiYWNrYCwgb25seSB0aGUgZmlyc3QgY2FsbCB3aWxsIGhhdmUgYW55IGVmZmVjdC4gVGhlXG4gICAqIHN1YnNlcXVlbnQgY2FsbHMgd2lsbCBiZSBoYXJtbGVzcy5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIFRoZSBlbGVtZW50IGJlaW5nIGFkZGVkIHRvIHRoZSBkb2N1bWVudC5cbiAgICovXG4gIGNvbm5lY3RlZChlbGVtZW50KSB7XG4gICAgZWxlbWVudFtzYWZlVG9TZXRBdHRyaWJ1dGVzU3ltYm9sXSA9IHRydWU7XG5cbiAgICAvLyBTZXQgYW55IHBlbmRpbmcgYXR0cmlidXRlcy5cbiAgICBpZiAoZWxlbWVudFtwZW5kaW5nQXR0cmlidXRlc1N5bWJvbF0pIHtcbiAgICAgIGZvciAobGV0IGF0dHJpYnV0ZSBpbiBlbGVtZW50W3BlbmRpbmdBdHRyaWJ1dGVzU3ltYm9sXSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGVsZW1lbnRbcGVuZGluZ0F0dHJpYnV0ZXNTeW1ib2xdW2F0dHJpYnV0ZV07XG4gICAgICAgIHNldEF0dHJpYnV0ZVRvRWxlbWVudChlbGVtZW50LCBhdHRyaWJ1dGUsIHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGVsZW1lbnRbcGVuZGluZ0F0dHJpYnV0ZXNTeW1ib2xdID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBTZXQgYW55IHBlbmRpbmcgY2xhc3Nlcy5cbiAgICBpZiAoZWxlbWVudFtwZW5kaW5nQ2xhc3Nlc1N5bWJvbF0pIHtcbiAgICAgIGZvciAobGV0IGNsYXNzTmFtZSBpbiBlbGVtZW50W3BlbmRpbmdDbGFzc2VzU3ltYm9sXSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGVsZW1lbnRbcGVuZGluZ0NsYXNzZXNTeW1ib2xdW2NsYXNzTmFtZV07XG4gICAgICAgIHRvZ2dsZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSwgdmFsdWUpO1xuICAgICAgfVxuICAgICAgZWxlbWVudFtwZW5kaW5nQ2xhc3Nlc1N5bWJvbF0gPSBudWxsO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogU2V0L3Vuc2V0IHRoZSBhdHRyaWJ1dGUgd2l0aCB0aGUgaW5kaWNhdGVkIG5hbWUuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGV4aXN0cyBwcmltYXJpbHkgdG8gaGFuZGxlIHRoZSBjYXNlIHdoZXJlIGFuIGVsZW1lbnQgd2FudHMgdG9cbiAgICogc2V0IGEgZGVmYXVsdCBwcm9wZXJ0eSB2YWx1ZSB0aGF0IHNob3VsZCBiZSByZWZsZWN0ZWQgYXMgYW4gYXR0cmlidXRlLiBBblxuICAgKiBpbXBvcnRhbnQgbGltaXRhdGlvbiBvZiBjdXN0b20gZWxlbWVudCBjb25zdHVyY3RvcnMgaXMgdGhhdCB0aGV5IGNhbm5vdFxuICAgKiBzZXQgYXR0cmlidXRlcy4gQSBjYWxsIHRvIGBzZXRBdHRyaWJ1dGVgIGR1cmluZyB0aGUgY29uc3RydWN0b3Igd2lsbFxuICAgKiBiZSBkZWZlcnJlZCB1bnRpbCB0aGUgZWxlbWVudCBpcyBjb25uZWN0ZWQgdG8gdGhlIGRvY3VtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYXR0cmlidXRlIC0gVGhlIG5hbWUgb2YgdGhlICphdHRyaWJ1dGUqIChub3QgcHJvcGVydHkpIHRvIHNldC5cbiAgICogQHBhcmFtIHtvYmplY3R9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIHNldC4gSWYgbnVsbCwgdGhlIGF0dHJpYnV0ZSB3aWxsIGJlIHJlbW92ZWQuXG4gICAqL1xuICBzZXRBdHRyaWJ1dGUoZWxlbWVudCwgYXR0cmlidXRlLCB2YWx1ZSkge1xuICAgIGlmIChlbGVtZW50W3NhZmVUb1NldEF0dHJpYnV0ZXNTeW1ib2xdKSB7XG4gICAgICAvLyBTYWZlIHRvIHNldCBhdHRyaWJ1dGVzIGltbWVkaWF0ZWx5LlxuICAgICAgc2V0QXR0cmlidXRlVG9FbGVtZW50KGVsZW1lbnQsIGF0dHJpYnV0ZSwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBEZWZlciBzZXR0aW5nIGF0dHJpYnV0ZXMgdW50aWwgdGhlIGZpcnN0IHRpbWUgd2UncmUgY29ubmVjdGVkLlxuICAgICAgaWYgKCFlbGVtZW50W3BlbmRpbmdBdHRyaWJ1dGVzU3ltYm9sXSkge1xuICAgICAgICBlbGVtZW50W3BlbmRpbmdBdHRyaWJ1dGVzU3ltYm9sXSA9IHt9O1xuICAgICAgfVxuICAgICAgZWxlbWVudFtwZW5kaW5nQXR0cmlidXRlc1N5bWJvbF1bYXR0cmlidXRlXSA9IHZhbHVlO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogU2V0L3Vuc2V0IHRoZSBjbGFzcyB3aXRoIHRoZSBpbmRpY2F0ZWQgbmFtZS5cbiAgICpcbiAgICogVGhpcyBtZXRob2QgZXhpc3RzIHByaW1hcmlseSB0byBoYW5kbGUgdGhlIGNhc2Ugd2hlcmUgYW4gZWxlbWVudCB3YW50cyB0b1xuICAgKiBzZXQgYSBkZWZhdWx0IHByb3BlcnR5IHZhbHVlIHRoYXQgc2hvdWxkIGJlIHJlZmxlY3RlZCBhcyBhcyBjbGFzcy4gQW5cbiAgICogaW1wb3J0YW50IGxpbWl0YXRpb24gb2YgY3VzdG9tIGVsZW1lbnQgY29uc3R1cmN0b3JzIGlzIHRoYXQgdGhleSBjYW5ub3RcbiAgICogc2V0IGF0dHJpYnV0ZXMsIGluY2x1ZGluZyB0aGUgYGNsYXNzYCBhdHRyaWJ1dGUuIEEgY2FsbCB0b1xuICAgKiBgdG9nZ2xlQ2xhc3NgIGR1cmluZyB0aGUgY29uc3RydWN0b3Igd2lsbCBiZSBkZWZlcnJlZCB1bnRpbCB0aGUgZWxlbWVudFxuICAgKiBpcyBjb25uZWN0ZWQgdG8gdGhlIGRvY3VtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIC0gVGhlIG5hbWUgb2YgdGhlIGNsYXNzIHRvIHNldC5cbiAgICogQHBhcmFtIHtvYmplY3R9IHZhbHVlIC0gVHJ1ZSB0byBzZXQgdGhlIGNsYXNzLCBmYWxzZSB0byByZW1vdmUgaXQuXG4gICAqL1xuICB0b2dnbGVDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUsIHZhbHVlKSB7XG4gICAgaWYgKGVsZW1lbnRbc2FmZVRvU2V0QXR0cmlidXRlc1N5bWJvbF0pIHtcbiAgICAgIC8vIFNhZmUgdG8gc2V0IGNsYXNzIGltbWVkaWF0ZWx5LlxuICAgICAgdG9nZ2xlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lLCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIERlZmVyIHNldHRpbmcgY2xhc3MgdW50aWwgdGhlIGZpcnN0IHRpbWUgd2UncmUgY29ubmVjdGVkLlxuICAgICAgaWYgKCFlbGVtZW50W3BlbmRpbmdDbGFzc2VzU3ltYm9sXSkge1xuICAgICAgICBlbGVtZW50W3BlbmRpbmdDbGFzc2VzU3ltYm9sXSA9IHt9O1xuICAgICAgfVxuICAgICAgZWxlbWVudFtwZW5kaW5nQ2xhc3Nlc1N5bWJvbF1bY2xhc3NOYW1lXSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG59O1xuXG5cbi8vIFJlZmxlY3QgdGhlIGF0dHJpYnV0ZSB0byB0aGUgZ2l2ZW4gZWxlbWVudC5cbi8vIElmIHRoZSB2YWx1ZSBpcyBudWxsLCByZW1vdmUgdGhlIGF0dHJpYnV0ZS5cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZVRvRWxlbWVudChlbGVtZW50LCBhdHRyaWJ1dGVOYW1lLCB2YWx1ZSkge1xuICBpZiAodmFsdWUgPT09IG51bGwgfHwgdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHRleHQgPSBTdHJpbmcodmFsdWUpO1xuICAgIC8vIEF2b2lkIHJlY3Vyc2l2ZSBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sgY2FsbHMuXG4gICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpICE9PSB0ZXh0KSB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCB2YWx1ZSk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4vY3JlYXRlU3ltYm9sJztcblxuLyoqXG4gKiBBIGNvbGxlY3Rpb24gb2YgU3ltYm9sIG9iamVjdHMgZm9yIHN0YW5kYXJkIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzLlxuICpcbiAqIFRoZXNlIFN5bWJvbCBvYmplY3RzIGFyZSB1c2VkIHRvIGFsbG93IG1peGlucyBhbmQgYSBjb21wb25lbnQgdG8gaW50ZXJuYWxseVxuICogY29tbXVuaWNhdGUsIHdpdGhvdXQgZXhwb3NpbmcgdGhlc2UgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBpbiB0aGUgY29tcG9uZW50J3NcbiAqIHB1YmxpYyBBUEkuXG4gKlxuICogVG8gdXNlIHRoZXNlIFN5bWJvbCBvYmplY3RzIGluIHlvdXIgb3duIGNvbXBvbmVudCwgaW5jbHVkZSB0aGlzIG1vZHVsZSBhbmRcbiAqIHRoZW4gY3JlYXRlIGEgcHJvcGVydHkgb3IgbWV0aG9kIHdob3NlIGtleSBpcyB0aGUgZGVzaXJlZCBTeW1ib2wuXG4gKlxuICogICAgIGltcG9ydCAnU2luZ2xlU2VsZWN0aW9uTWl4aW4nIGZyb20gJ2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NpbmdsZVNlbGVjdGlvbk1peGluJztcbiAqICAgICBpbXBvcnQgJ3N5bWJvbHMnIGZyb20gJ2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL3N5bWJvbHMnO1xuICpcbiAqICAgICBjbGFzcyBNeUVsZW1lbnQgZXh0ZW5kcyBTaW5nbGVTZWxlY3Rpb25NaXhpbihIVE1MRWxlbWVudCkge1xuICogICAgICAgW3N5bWJvbHMuaXRlbVNlbGVjdGVkXShpdGVtLCBzZWxlY3RlZCkge1xuICogICAgICAgICAvLyBUaGlzIHdpbGwgYmUgaW52b2tlZCB3aGVuZXZlciBhbiBpdGVtIGlzIHNlbGVjdGVkL2Rlc2VsZWN0ZWQuXG4gKiAgICAgICB9XG4gKiAgICAgfVxuICpcbiAqIEBtb2R1bGUgc3ltYm9sc1xuICovXG5jb25zdCBzeW1ib2xzID0ge1xuXG4gIC8qKlxuICAgKiBTeW1ib2wgZm9yIHRoZSBgZGVmYXVsdHNgIHByb3BlcnR5LlxuICAgKlxuICAgKiBUaGlzIHByb3BlcnR5IGNhbiBiZSB1c2VkIHRvIHNldCBvciBvdmVycmlkZSBkZWZhdWx0cyB0aGF0IHdpbGwgYmUgYXBwbGllZFxuICAgKiB0byBhIG5ldyBjb21wb25lbnQgaW5zdGFuY2UuIFdoZW4gaW1wbGVtZW50aW5nIHRoaXMgcHJvcGVydHksIHRha2UgY2FyZSB0b1xuICAgKiBmaXJzdCBhY3F1aXJlIGFueSBkZWZhdWx0cyBkZWZpbmVkIGJ5IHRoZSBzdXBlcmNsYXNzLiBUaGUgc3RhbmRhcmQgaWRpb20gaXNcbiAgICogYXMgZm9sbG93czpcbiAgICpcbiAgICogICAgIGdldCBbc3ltYm9scy5kZWZhdWx0c10oKSB7XG4gICAqICAgICAgIGNvbnN0IGRlZmF1bHRzID0gc3VwZXJbc3ltYm9scy5kZWZhdWx0c10gfHwge307XG4gICAqICAgICAgIC8vIFNldCBvciBvdmVycmlkZSBkZWZhdWx0IHZhbHVlcyBoZXJlXG4gICAqICAgICAgIGRlZmF1bHRzLmN1c3RvbVByb3BlcnR5ID0gZmFsc2U7XG4gICAqICAgICAgIHJldHVybiBkZWZhdWx0cztcbiAgICogICAgIH1cbiAgICpcbiAgICogQHZhciB7b2JqZWN0fSBkZWZhdWx0c1xuICAgKi9cbiAgZGVmYXVsdHM6IGNyZWF0ZVN5bWJvbCgnZGVmYXVsdHMnKSxcblxuICAvKipcbiAgICogU3ltYm9sIGZvciB0aGUgYGRyYWdnaW5nYCBwcm9wZXJ0eS5cbiAgICpcbiAgICogQ29tcG9uZW50cyBsaWtlIGNhcm91c2VscyBvZnRlbiBkZWZpbmUgYW5pbWF0ZWQgQ1NTIHRyYW5zaXRpb25zIGZvclxuICAgKiBzbGlkaW5nIGVmZmVjdHMuIFN1Y2ggYSB0cmFuc2l0aW9uIHNob3VsZCB1c3VhbGx5ICpub3QqIGJlIGFwcGxpZWQgd2hpbGVcbiAgICogdGhlIHVzZXIgaXMgZHJhZ2dpbmcsIGJlY2F1c2UgYSBDU1MgYW5pbWF0aW9uIHdpbGwgaW50cm9kdWNlIGEgbGFnIHRoYXRcbiAgICogbWFrZXMgdGhlIHN3aXBlIGZlZWwgc2x1Z2dpc2guIEluc3RlYWQsIGFzIGxvbmcgYXMgdGhlIHVzZXIgaXMgZHJhZ2dpbmdcbiAgICogd2l0aCB0aGVpciBmaW5nZXIgZG93biwgdGhlIHRyYW5zaXRpb24gc2hvdWxkIGJlIHN1cHByZXNzZWQuIFdoZW4gdGhlXG4gICAqIHVzZXIgcmVsZWFzZXMgdGhlaXIgZmluZ2VyLCB0aGUgdHJhbnNpdGlvbiBjYW4gYmUgcmVzdG9yZWQsIGFsbG93aW5nIHRoZVxuICAgKiBhbmltYXRpb24gdG8gc2hvdyB0aGUgY2Fyb3VzZWwgc2xpZGluZyBpbnRvIGl0cyBmaW5hbCBwb3NpdGlvbi5cbiAgICpcbiAgICogQHR5cGUge2Jvb2xlYW59IHRydWUgaWYgYSBkcmFnIGlzIGluIHByb2dyZXNzLCBmYWxzZSBpZiBub3QuXG4gICAqL1xuICBkcmFnZ2luZzogY3JlYXRlU3ltYm9sKCdkcmFnZ2luZycpLFxuXG4gIC8qKlxuICAgKiBTeW1ib2wgZm9yIHRoZSBgZ29Eb3duYCBtZXRob2QuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSBkb3duLlxuICAgKlxuICAgKiBAZnVuY3Rpb24gZ29Eb3duXG4gICAqL1xuICBnb0Rvd246IGNyZWF0ZVN5bWJvbCgnZ29Eb3duJyksXG5cbiAgLyoqXG4gICAqIFN5bWJvbCBmb3IgdGhlIGBnb0VuZGAgbWV0aG9kLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgdG8gdGhlIGVuZCAoZS5nLixcbiAgICogb2YgYSBsaXN0KS5cbiAgICpcbiAgICogQGZ1bmN0aW9uIGdvRW5kXG4gICAqL1xuICBnb0VuZDogY3JlYXRlU3ltYm9sKCdnb0VuZCcpLFxuXG4gIC8qKlxuICAgKiBTeW1ib2wgZm9yIHRoZSBgZ29MZWZ0YCBtZXRob2QuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSBsZWZ0LlxuICAgKlxuICAgKiBAZnVuY3Rpb24gZ29MZWZ0XG4gICAqL1xuICBnb0xlZnQ6IGNyZWF0ZVN5bWJvbCgnZ29MZWZ0JyksXG5cbiAgLyoqXG4gICAqIFN5bWJvbCBmb3IgdGhlIGBnb1JpZ2h0YCBtZXRob2QuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSByaWdodC5cbiAgICpcbiAgICogQGZ1bmN0aW9uIGdvUmlnaHRcbiAgICovXG4gIGdvUmlnaHQ6IGNyZWF0ZVN5bWJvbCgnZ29SaWdodCcpLFxuXG4gIC8qKlxuICAgKiBTeW1ib2wgZm9yIHRoZSBgZ29TdGFydGAgbWV0aG9kLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgdG8gdGhlIHN0YXJ0XG4gICAqIChlLmcuLCBvZiBhIGxpc3QpLlxuICAgKlxuICAgKiBAZnVuY3Rpb24gZ29TdGFydFxuICAgKi9cbiAgZ29TdGFydDogY3JlYXRlU3ltYm9sKCdnb1N0YXJ0JyksXG5cbiAgLyoqXG4gICAqIFN5bWJvbCBmb3IgdGhlIGBnb1VwYCBtZXRob2QuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSB1cC5cbiAgICpcbiAgICogQGZ1bmN0aW9uIGdvVXBcbiAgICovXG4gIGdvVXA6IGNyZWF0ZVN5bWJvbCgnZ29VcCcpLFxuXG4gIC8qKlxuICAgKiBTeW1ib2wgZm9yIHRoZSBgaXRlbUFkZGVkYCBtZXRob2QuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbiBhIG5ldyBpdGVtIGlzIGFkZGVkIHRvIGEgbGlzdC5cbiAgICpcbiAgICogQGZ1bmN0aW9uIGl0ZW1BZGRlZFxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpdGVtIC0gdGhlIGl0ZW0gYmVpbmcgc2VsZWN0ZWQvZGVzZWxlY3RlZFxuICAgKi9cbiAgaXRlbUFkZGVkOiBjcmVhdGVTeW1ib2woJ2l0ZW1BZGRlZCcpLFxuXG5cbiAgLyoqXG4gICAqIFN5bWJvbCBmb3IgdGhlIGBpdGVtc0NoYW5nZWRgIG1ldGhvZC5cbiAgICpcbiAgICogVGhpcyBtZXRob2QgaXMgaW52b2tlZCB3aGVuIHRoZSB1bmRlcmx5aW5nIGNvbnRlbnRzIGNoYW5nZS4gSXQgaXMgYWxzb1xuICAgKiBpbnZva2VkIG9uIGNvbXBvbmVudCBpbml0aWFsaXphdGlvbiDigJMgc2luY2UgdGhlIGl0ZW1zIGhhdmUgXCJjaGFuZ2VkXCIgZnJvbVxuICAgKiBiZWluZyBub3RoaW5nLlxuICAgKi9cbiAgaXRlbXNDaGFuZ2VkOiBjcmVhdGVTeW1ib2woJ2l0ZW1zQ2hhbmdlZCcpLFxuXG4gIC8qKlxuICAgKiBTeW1ib2wgZm9yIHRoZSBgaXRlbVNlbGVjdGVkYCBtZXRob2QuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbiBhbiBpdGVtIGJlY29tZXMgc2VsZWN0ZWQgb3IgZGVzZWxlY3RlZC5cbiAgICpcbiAgICogQGZ1bmN0aW9uIGl0ZW1TZWxlY3RlZFxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpdGVtIC0gdGhlIGl0ZW0gYmVpbmcgc2VsZWN0ZWQvZGVzZWxlY3RlZFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNlbGVjdGVkIC0gdHJ1ZSBpZiB0aGUgaXRlbSBpcyBzZWxlY3RlZCwgZmFsc2UgaWYgbm90XG4gICAqL1xuICBpdGVtU2VsZWN0ZWQ6IGNyZWF0ZVN5bWJvbCgnaXRlbVNlbGVjdGVkJyksXG5cbiAgLyoqXG4gICAqIFN5bWJvbCBmb3IgdGhlIGBrZXlkb3duYCBtZXRob2QuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbiBhbiBlbGVtZW50IHJlY2VpdmVzIGEgYGtleWRvd25gIGV2ZW50LlxuICAgKlxuICAgKiBAZnVuY3Rpb24ga2V5ZG93blxuICAgKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGV2ZW50IC0gdGhlIGV2ZW50IGJlaW5nIHByb2Nlc3NlZFxuICAgKi9cbiAga2V5ZG93bjogY3JlYXRlU3ltYm9sKCdrZXlkb3duJyksXG5cbiAgLyoqXG4gICAqIFN5bWJvbCBmb3IgdGhlIGB0ZW1wbGF0ZWAgcHJvcGVydHkuXG4gICAqXG4gICAqIFRoaXMgcHJvcGVydHkgcmV0dXJucyBhIGNvbXBvbmVudCdzIHRlbXBsYXRlLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfEhUTUxFbGVtZW50fVxuICAgKi9cbiAgdGVtcGxhdGU6IGNyZWF0ZVN5bWJvbCgndGVtcGxhdGUnKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgc3ltYm9scztcbiIsIi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIGZvciBzdGFuZGFyZCBjbGFzc0xpc3QudG9nZ2xlKCkgYmVoYXZpb3Igb24gb2xkIGJyb3dzZXJzLFxuICogbmFtZWx5IElFIDExLlxuICpcbiAqIFRoZSBzdGFuZGFyZFxuICogW2NsYXNzbGlzdF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0VsZW1lbnQvY2xhc3NMaXN0KVxuICogb2JqZWN0IGhhcyBhIGB0b2dnbGUoKWAgZnVuY3Rpb24gdGhhdCBzdXBwb3J0cyBhIHNlY29uZCBCb29sZWFuIHBhcmFtZXRlclxuICogdGhhdCBjYW4gYmUgdXNlZCB0byBzdWNjaW5jdGx5IHR1cm4gYSBjbGFzcyBvbiBvciBvZmYuIFRoaXMgZmVhdHVyZSBpcyBvZnRlblxuICogdXNlZnVsIGluIGRlc2lnbmluZyBjdXN0b20gZWxlbWVudHMsIHdoaWNoIG1heSB3YW50IHRvIGV4dGVybmFsbHkgcmVmbGVjdFxuICogY29tcG9uZW50IHN0YXRlIGluIGEgQ1NTIGNsYXNzIHRoYXQgY2FuIGJlIHVzZWQgZm9yIHN0eWxpbmcgcHVycG9zZXMuXG4gKlxuICogVW5mb3J0dW5hdGVseSwgSUUgMTEgZG9lcyBub3Qgc3VwcG9ydCB0aGUgQm9vbGVhbiBwYXJhbWV0ZXIgdG9cbiAqIGBjbGFzc0xpc3QudG9nZ2xlKClgLiBUaGlzIGhlbHBlciBmdW5jdGlvbiBiZWhhdmVzIGxpa2UgdGhlIHN0YW5kYXJkXG4gKiBgdG9nZ2xlKClgLCBpbmNsdWRpbmcgc3VwcG9ydCBmb3IgdGhlIEJvb2xlYW4gcGFyYW1ldGVyLCBzbyB0aGF0IGl0IGNhbiBiZVxuICogdXNlZCBldmVuIG9uIElFIDExLlxuICpcbiAqIEBmdW5jdGlvbiB0b2dnbGVDbGFzc1xuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIFRoZSBlbGVtZW50IHRvIG1vZGlmeVxuICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSAtIFRoZSBjbGFzcyB0byBhZGQvcmVtb3ZlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtmb3JjZV0gLSBGb3JjZSB0aGUgY2xhc3MgdG8gYmUgYWRkZWQgKGlmIHRydWUpIG9yIHJlbW92ZWRcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpZiBmYWxzZSlcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9nZ2xlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lLCBmb3JjZSkge1xuICBjb25zdCBjbGFzc0xpc3QgPSBlbGVtZW50LmNsYXNzTGlzdDtcbiAgY29uc3QgYWRkQ2xhc3MgPSAodHlwZW9mIGZvcmNlID09PSAndW5kZWZpbmVkJykgP1xuICAgICFjbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSA6XG4gICAgZm9yY2U7XG4gIGlmIChhZGRDbGFzcykge1xuICAgIGNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgfSBlbHNlIHtcbiAgICBjbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gIH1cbiAgcmV0dXJuIGFkZENsYXNzO1xufVxuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyB0cmFuc3BpbGVkIHRvIGNyZWF0ZSBhbiBFUzUtY29tcGF0aWJsZSBkaXN0cmlidXRpb24gaW4gd2hpY2hcbiAqIHRoZSBwYWNrYWdlJ3MgbWFpbiBmZWF0dXJlKHMpIGFyZSBhdmFpbGFibGUgdmlhIHRoZSB3aW5kb3cuQmFzaWMgZ2xvYmFsLlxuICogSWYgeW91J3JlIGFscmVhZHkgdXNpbmcgRVM2IHlvdXJzZWxmLCBpZ25vcmUgdGhpcyBmaWxlLCBhbmQgaW5zdGVhZCBpbXBvcnRcbiAqIHRoZSBzb3VyY2UgZmlsZShzKSB5b3Ugd2FudCBmcm9tIHRoZSBzcmMgZm9sZGVyLlxuICovXG5cbmltcG9ydCBDdXJyZW50QW5jaG9yIGZyb20gJy4vc3JjL0N1cnJlbnRBbmNob3InO1xuXG53aW5kb3cuQmFzaWMgPSB3aW5kb3cuQmFzaWMgfHwge307XG53aW5kb3cuQmFzaWMuQ3VycmVudEFuY2hvciA9IEN1cnJlbnRBbmNob3I7XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL2NyZWF0ZVN5bWJvbCc7XG5pbXBvcnQgc2FmZUF0dHJpYnV0ZXMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvc2FmZUF0dHJpYnV0ZXMnO1xuaW1wb3J0IHN5bWJvbHMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvc3ltYm9scyc7XG5pbXBvcnQgV3JhcHBlZFN0YW5kYXJkRWxlbWVudCBmcm9tICcuLi8uLi9iYXNpYy13cmFwcGVkLXN0YW5kYXJkLWVsZW1lbnQvc3JjL1dyYXBwZWRTdGFuZGFyZEVsZW1lbnQnO1xuXG5cbi8vIFN5bWJvbHMgZm9yIHByaXZhdGUgZGF0YSBtZW1iZXJzIG9uIGFuIGVsZW1lbnQuXG5jb25zdCBhcmVhTGlua1N5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnYXJlYUxpbmsnKTtcblxuXG4vKipcbiAqIEFuIGFuY2hvciAobGluaykgdGhhdCBoaWdobGlnaHRzIGl0c2VsZiB3aGVuIGl0cyBkZXN0aW5hdGlvbiBtYXRjaGVzIHRoZVxuICogY3VycmVudCBsb2NhdGlvbi5cbiAqXG4gKiBbTGl2ZSBkZW1vXShodHRwOi8vYmFzaWN3ZWJjb21wb25lbnRzLm9yZy9iYXNpYy13ZWItY29tcG9uZW50cy9wYWNrYWdlcy9iYXNpYy1jdXJyZW50LWFuY2hvci8pXG4gKlxuICogU3VjaCBhIGxpbmsgY29tbW9ubHkgYXBwZWFycyBpbiB0b29sYmFycywgc2lkZSBiYXJzLCBhbmQgb3RoZXIgbmF2aWdhdGlvblxuICogZWxlbWVudHMuIEluIHRoZXNlIHNpdHVhdGlvbnMsIHlvdSBnZW5lcmFsbHkgd2FudCB0aGUgdXNlciB0byB1bmRlcnN0YW5kIHdoYXRcbiAqIHBhZ2Ugb3IgYXJlYSB0aGUgdXNlciBpcyBhbHJlYWR5IG9uLlxuICpcbiAqIFdoZW4gdGhlIGxpbmsgaXMgY3VycmVudCDigJQgd2hlbiBpdCBwb2ludHMgdG8gdGhlIGN1cnJlbnQgbG9jYXRpb24g4oCUIHRoZVxuICogbGluayB3aWxsIGhhdmUgdGhlIENTUyBgY3VycmVudGAgY2xhc3MgYXBwbGllZCB0byBpdCwgYW5kIGl0cyBgY3VycmVudGBcbiAqIHByb3BlcnR5IHdpbGwgYmUgdHJ1ZS5cbiAqXG4gKiBOb3RlOiBvbmUgbGltaXRhdGlvbiBvZiB0aGlzIGNvbXBvbmVudCBpcyB0aGF0LCBieSBkZWZhdWx0LCB0aGUgbGluayBkb2VzXG4gKiAqbm90KiBzaG93IHRoZSBzdGFuZGFyZCBsaW5rIGNvbG9yICh1c3VhbGx5IGJsdWUpIGFuZCB0ZXh0IGRlY29yYXRpb25cbiAqICh1bmRlcmxpbmUpLiBIb3dldmVyLCBpbiBuYXZpZ2F0aW9uIGVsZW1lbnRzIGxpa2UgdG9vbGJhcnMsIHlvdSBvZnRlbiB3aWxsXG4gKiB3YW50IHRvIGV4cGxpY2l0bHkgc3BlY2lmaWMgbGluayBjb2xvcnMgYW55d2F5LCBlLmcuLCB0byByZWZsZWN0IHlvdXJcbiAqIGFwcGxpY2F0aW9uJ3MgdmlzdWFsIHN0eWxlIGFuZCBicmFuZC5cbiAqL1xuY2xhc3MgQ3VycmVudEFuY2hvciBleHRlbmRzIFdyYXBwZWRTdGFuZGFyZEVsZW1lbnQud3JhcCgnYScpIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgZXZlbnQgPT4ge1xuICAgICAgcmVmcmVzaCh0aGlzKTtcbiAgICB9KTtcblxuICAgIC8vIFN0dXBpZCBFZGdlL0lFIFwic3VwcG9ydFwiIHBvcHN0YXRlLCBidXQgZG9uJ3QgZmlyZSBpdCBvbiBoYXNoY2hhbmdlLlxuICAgIC8vIFNvIHdlIGhhdmUgdG8gbGlzdGVuIGZvciBoYXNoY2hhbmdlIGFzIHdlbGwsIHdpdGggdGhlIHJlc3VsdCB0aGF0IGFcbiAgICAvLyBzdGFuZGFyZHMtY29tcGxpYW50IGJyb3dzZXIgbWF5IGVuZCB1cCByZWZyZXNoaW5nIHRoZSBsaW5rIHR3aWNlLlxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgZXZlbnQgPT4ge1xuICAgICAgcmVmcmVzaCh0aGlzKTtcbiAgICB9KTtcblxuICAgIC8vIFNldCBkZWZhdWx0cy5cbiAgICBpZiAodHlwZW9mIHRoaXMuYXJlYUxpbmsgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLmFyZWFMaW5rID0gdGhpc1tzeW1ib2xzLmRlZmF1bHRzXS5hcmVhTGluaztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVHJ1ZSBpZiB0aGUgbGluayBwb2ludHMgdG8gYW4gYXJlYSB3aXRoaW4gYSBzaXRlLCBub3QganVzdCBhIHNpbmdsZSBwYWdlLlxuICAgKlxuICAgKiBJZiB0cnVlLCB0aGUgbWF0Y2hpbmcgcnVsZSB0byBkZXRlcm1pbmUgd2hldGhlciB0aGUgbGluayBpcyBjdXJyZW50IGNoYW5nZXM6XG4gICAqIGFuIGFyZWEgbGluayBpcyBjb25zaWRlcmVkIHRvIGJlIGN1cnJlbnQgaWYgdGhlIGxpbmsncyBkZXN0aW5hdGlvbiBmb3JtcyBhXG4gICAqIHByZWZpeCBvZiB0aGUgY3VycmVudCBsb2NhdGlvbiAoaW5zdGVhZCBvZiBtYXRjaGluZyB0aGUgY29tcGxldGUgVVJMKS5cbiAgICpcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBnZXQgYXJlYUxpbmsoKSB7XG4gICAgcmV0dXJuIHRoaXNbYXJlYUxpbmtTeW1ib2xdO1xuICB9XG4gIHNldCBhcmVhTGluayh2YWx1ZSkge1xuICAgIC8vIENhc3QgYm9vbGVhbiBvciBzdHJpbmcgdmFsdWVzIHRvIGJvb2xlYW4uXG4gICAgdGhpc1thcmVhTGlua1N5bWJvbF0gPSAoU3RyaW5nKHZhbHVlKSA9PT0gJ3RydWUnKTtcbiAgICByZWZyZXNoKHRoaXMpO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKSB7IHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7IH1cbiAgICBzYWZlQXR0cmlidXRlcy5jb25uZWN0ZWQodGhpcyk7XG4gICAgcmVmcmVzaCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcnVlIGlmIHRoZSBsaW5rJ3MgZGVzdGluYXRpb24gbWF0Y2hlcyB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICAgKlxuICAgKiBJZiB0aGlzIGlzIHRydWUsIHRoZSBlbGVtZW50IHdpbGwgaGF2ZSBhbiBgY3VycmVudGAgQ1NTIGNsYXNzIGFwcGxpZWQgdG8gaXQuXG4gICAqXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgZ2V0IGN1cnJlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdjdXJyZW50Jyk7XG4gIH1cbiAgc2V0IGN1cnJlbnQodmFsdWUpIHtcbiAgICBzYWZlQXR0cmlidXRlcy50b2dnbGVDbGFzcyh0aGlzLCAnY3VycmVudCcsIHZhbHVlKTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjdXJyZW50LWNoYW5nZWQnKSk7XG4gIH1cblxuICBnZXQgW3N5bWJvbHMuZGVmYXVsdHNdKCkge1xuICAgIGNvbnN0IGRlZmF1bHRzID0gc3VwZXJbc3ltYm9scy5kZWZhdWx0c10gfHwge307XG4gICAgZGVmYXVsdHMuYXJlYUxpbmsgPSBmYWxzZTtcbiAgICByZXR1cm4gZGVmYXVsdHM7XG4gIH1cblxuICAvLyBBdWdtZW50IGhyZWYgaW1wbGVtZW50YXRpb24gc28gdGhhdCBjaGFuZ2luZyBocmVmIGNoZWNrcyB0aGUgYWN0aXZlIHN0YXR1cy5cbiAgZ2V0IGhyZWYoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmhyZWY7XG4gIH1cbiAgc2V0IGhyZWYodmFsdWUpIHtcbiAgICBzdXBlci5ocmVmID0gdmFsdWU7XG4gICAgcmVmcmVzaCh0aGlzKTtcbiAgfVxuXG4gIGdldCBbc3ltYm9scy50ZW1wbGF0ZV0oKSB7XG4gICAgLy8gUmVzZXQgc3R5bGVzIHNvIHRoYXQgY29sb3IgY2FuIGJlIHNwZWNpZmllZCBmcm9tIHRoZSBvdXRzaWRlIHdpdGhvdXRcbiAgICAvLyBoYXZpbmcgdG8gZGVmaW5lIGEgQ1NTIHZhcmlhYmxlLlxuICAgIHJldHVybiBgXG4gICAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIH1cblxuICAgICAgI2lubmVyIHtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xuICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxhIGlkPVwiaW5uZXJcIj48c2xvdD48L3Nsb3Q+PC9hPmA7XG4gIH1cblxufVxuXG5cbi8vIFVwZGF0ZSB0aGUgY3VycmVudCBzdGF0dXMgb2YgdGhlIGVsZW1lbnQgYmFzZWQgb24gdGhlIGN1cnJlbnQgbG9jYXRpb24uXG5mdW5jdGlvbiByZWZyZXNoKGVsZW1lbnQpIHtcbiAgY29uc3QgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gIGxldCBtYXRjaDtcbiAgaWYgKGVsZW1lbnQuYXJlYUxpbmspIHtcbiAgICAvLyBNYXRjaCBwcmVmaXhcbiAgICBsZXQgcHJlZml4ID0gZWxlbWVudC5ocmVmO1xuICAgIC8vIElmIHByZWZpeCBkb2Vzbid0IGVuZCBpbiBzbGFzaCwgYWRkIGEgc2xhc2guXG4gICAgLy8gV2Ugd2FudCB0byBhdm9pZCBtYXRjaGluZyBpbiB0aGUgbWlkZGxlIG9mIGEgZm9sZGVyIG5hbWUuXG4gICAgaWYgKHByZWZpeC5sZW5ndGggPCB1cmwubGVuZ3RoICYmIHByZWZpeC5zdWJzdHIoLTEpICE9PSAnLycpIHtcbiAgICAgIHByZWZpeCArPSAnLyc7XG4gICAgfVxuICAgIG1hdGNoID0gKHVybC5zdWJzdHIoMCwgcHJlZml4Lmxlbmd0aCkgPT09IHByZWZpeCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gTWF0Y2ggd2hvbGUgcGF0aFxuICAgIG1hdGNoID0gKHVybCA9PT0gZWxlbWVudC5ocmVmKTtcbiAgfVxuICBlbGVtZW50LmN1cnJlbnQgPSBtYXRjaDtcbn1cblxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2Jhc2ljLWN1cnJlbnQtYW5jaG9yJywgQ3VycmVudEFuY2hvcik7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHRyYW5zcGlsZWQgdG8gY3JlYXRlIGFuIEVTNS1jb21wYXRpYmxlIGRpc3RyaWJ1dGlvbiBpbiB3aGljaFxuICogdGhlIHBhY2thZ2UncyBtYWluIGZlYXR1cmUocykgYXJlIGF2YWlsYWJsZSB2aWEgdGhlIHdpbmRvdy5CYXNpYyBnbG9iYWwuXG4gKiBJZiB5b3UncmUgYWxyZWFkeSB1c2luZyBFUzYgeW91cnNlbGYsIGlnbm9yZSB0aGlzIGZpbGUsIGFuZCBpbnN0ZWFkIGltcG9ydFxuICogdGhlIHNvdXJjZSBmaWxlKHMpIHlvdSB3YW50IGZyb20gdGhlIHNyYyBmb2xkZXIuXG4gKi9cblxuaW1wb3J0IEVsZW1lbnRCYXNlIGZyb20gJy4vc3JjL0VsZW1lbnRCYXNlJztcblxud2luZG93LkJhc2ljID0gd2luZG93LkJhc2ljIHx8IHt9O1xud2luZG93LkJhc2ljLkVsZW1lbnRCYXNlID0gRWxlbWVudEJhc2U7XG4iLCJpbXBvcnQgQXR0cmlidXRlTWFyc2hhbGxpbmdNaXhpbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9BdHRyaWJ1dGVNYXJzaGFsbGluZ01peGluJztcbmltcG9ydCBDb21wb3NhYmxlTWl4aW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ29tcG9zYWJsZU1peGluJztcbmltcG9ydCBEaXN0cmlidXRlZENoaWxkcmVuTWl4aW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlzdHJpYnV0ZWRDaGlsZHJlbk1peGluJztcbmltcG9ydCBTaGFkb3dFbGVtZW50UmVmZXJlbmNlc01peGluIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NoYWRvd0VsZW1lbnRSZWZlcmVuY2VzTWl4aW4nO1xuaW1wb3J0IFNoYWRvd1RlbXBsYXRlTWl4aW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2hhZG93VGVtcGxhdGVNaXhpbic7XG5cblxuLyoqXG4gKiBBIHNhbXBsZSBnZW5lcmFsLXB1cnBvc2UgYmFzZSBjbGFzcyBmb3IgZGVmaW5pbmcgY3VzdG9tIGVsZW1lbnRzIHRoYXQgbWl4ZXNcbiAqIGluIHNvbWUgY29tbW9uIGZlYXR1cmVzOiB0ZW1wbGF0ZSBzdGFtcGluZyBpbnRvIGEgc2hhZG93IHJvb3QsIHNoYWRvdyBlbGVtZW50XG4gKiByZWZlcmVuY2VzLCBtYXJzaGFsbGluZyBhdHRyaWJ1dGVzIHRvIHByb3BlcnRpZXMsIGFuZCByZXRyaWV2aW5nIHRoZSBjaGlsZHJlblxuICogZGlzdHJpYnV0ZWQgdG8gYSBjb21wb25lbnQuXG4gKlxuICogVGhpcyBiYXNlIGNsYXNzIGlzIG5vdCBzcGVjaWFsIGluIGFueSB3YXksIGFuZCBpcyBkZWZpbmVkIG9ubHkgYXMgYVxuICogY29udmVuaWVudCBzaG9ydGhhbmQgZm9yIGFwcGx5aW5nIHRoZSBtaXhpbnMgbGlzdGVkIGFib3ZlLiBZb3UgY2FuIHVzZSB0aGlzXG4gKiBjbGFzcyBhcyBhIGJhc2UgY2xhc3MgZm9yIHlvdXIgb3duIGVsZW1lbnRzLCBvciBlYXNpbHkgY3JlYXRlIHlvdXIgb3duIGJhc2VcbiAqIGNsYXNzIGJ5IGFwcGx5aW5nIHRoZSBzYW1lIHNldCBvZiBtaXhpbnMuXG4gKlxuICogVGhlIEVsZW1lbnRCYXNlIGJhc2UgY2xhc3MgZG9lcyBub3QgcmVnaXN0ZXIgaXRzZWxmIGFzIGEgY3VzdG9tIGVsZW1lbnQgd2l0aFxuICogdGhlIGJyb3dzZXIsIGFuZCBoZW5jZSBjYW5ub3QgYmUgaW5kZXBlbmRlbnRseSBpbnN0YW50aWF0ZWQuXG4gKlxuICogQG1peGVzIEF0dHJpYnV0ZU1hcnNoYWxsaW5nTWl4aW5cbiAqIEBtaXhlcyBDb21wb3NhYmxlTWl4aW5cbiAqIEBtaXhlcyBEaXN0cmlidXRlZENoaWxkcmVuTWl4aW5cbiAqIEBtaXhlcyBTaGFkb3dFbGVtZW50UmVmZXJlbmNlc01peGluXG4gKiBAbWl4ZXMgU2hhZG93VGVtcGxhdGVNaXhpblxuICovXG5jbGFzcyBFbGVtZW50QmFzZSBleHRlbmRzIENvbXBvc2FibGVNaXhpbihIVE1MRWxlbWVudCkuY29tcG9zZShcbiAgU2hhZG93VGVtcGxhdGVNaXhpbiwgICAgICAgICAgLy8gYmVmb3JlIG5vZGUgZmluZGluZywgc28gc2hhZG93IHJvb3QgaXMgcG9wdWxhdGVkXG4gIFNoYWRvd0VsZW1lbnRSZWZlcmVuY2VzTWl4aW4sIC8vIGJlZm9yZSBtYXJzaGFsbGluZywgc28gcHJvcGVydGllcyBjYW4gdXNlIHJlZnNcbiAgQXR0cmlidXRlTWFyc2hhbGxpbmdNaXhpbixcbiAgRGlzdHJpYnV0ZWRDaGlsZHJlbk1peGluXG4pIHt9XG5cbmV4cG9ydCBkZWZhdWx0IEVsZW1lbnRCYXNlO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyB0cmFuc3BpbGVkIHRvIGNyZWF0ZSBhbiBFUzUtY29tcGF0aWJsZSBkaXN0cmlidXRpb24gaW4gd2hpY2hcbiAqIHRoZSBwYWNrYWdlJ3MgbWFpbiBmZWF0dXJlKHMpIGFyZSBhdmFpbGFibGUgdmlhIHRoZSB3aW5kb3cuQmFzaWMgZ2xvYmFsLlxuICogSWYgeW91J3JlIGFscmVhZHkgdXNpbmcgRVM2IHlvdXJzZWxmLCBpZ25vcmUgdGhpcyBmaWxlLCBhbmQgaW5zdGVhZCBpbXBvcnRcbiAqIHRoZSBzb3VyY2UgZmlsZShzKSB5b3Ugd2FudCBmcm9tIHRoZSBzcmMgZm9sZGVyLlxuICovXG5cbmltcG9ydCBGYWRlT3ZlcmZsb3cgZnJvbSAnLi9zcmMvRmFkZU92ZXJmbG93Jztcblxud2luZG93LkJhc2ljID0gd2luZG93LkJhc2ljIHx8IHt9O1xud2luZG93LkJhc2ljLkZhZGVPdmVyZmxvdyA9IEZhZGVPdmVyZmxvdztcbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvY3JlYXRlU3ltYm9sJztcbmltcG9ydCBFbGVtZW50QmFzZSBmcm9tICcuLi8uLi9iYXNpYy1lbGVtZW50LWJhc2Uvc3JjL0VsZW1lbnRCYXNlJztcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3QgZmFkZUNvbG9yU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdmYWRlQ29sb3InKTtcblxuXG4vKipcbiAqIEZhZGVzIG91dCBjb250ZW50IHRoYXQgb3ZlcmZsb3dzIHNvIHRoZSB1c2VyIGtub3dzIHRoZXJlJ3MgbW9yZS5cbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBkb2Vzbid0IGhhbmRsZSBpbnRlcmFjdGl2aXR5LlxuICpcbiAqIFRoZSBjb21wb25lbnQgbmVlZHMgdG8ga25vdyB0aGUgY29sb3IgaXQgc2hvdWxkIGZhZGUgdG8sIHdoaWNoIGl0IHRyaWVzIHRvXG4gKiBpbmZlciBmcm9tIHRoZSBiYWNrZ3JvdW5kIGNvbG9yLiBJbiBzb21lIHNpdHVhdGlvbnMsIHRoaXMgbWF5IG5vdCB3b3JrLCBpblxuICogd2hpY2ggY2FzZSB5b3UgY2FuIGV4cGxpY2l0bHkgc2V0IHRoZSBmYWRlQ29sb3IgYXR0cmlidXRlLlxuICpcbiAqIFRoZSBjb21wb25lbnQgY3VycmVudGx5IGFsd2F5cyBkaXNwbGF5cyB0aGUgZmFkZSwgZXZlbiBpZiB0aGUgY29tcG9uZW50J3NcbiAqIGNvbnRlbnQgaXMgc2hvcnQgZW5vdWdoIHRvIGZpdCBjb21wbGV0ZWx5IGluIHZpZXcuXG4gKlxuICogQGV4dGVuZHMgRWxlbWVudEJhc2VcbiAqL1xuY2xhc3MgRmFkZU92ZXJmbG93IGV4dGVuZHMgRWxlbWVudEJhc2Uge1xuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGlmIChzdXBlci5jb25uZWN0ZWRDYWxsYmFjaykgeyBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpOyB9XG4gICAgaWYgKHRoaXMuZmFkZUNvbG9yID09IG51bGwpIHtcbiAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgY29sb3Igb2YgdGhlIGZhZGUuXG4gICAqXG4gICAqIFRoZSBmYWRlIGNvbG9yIHNob3VsZCBtYXRjaCB0aGUgYmFja2dyb3VuZCBjb2xvci4gVGhlIGNvbXBvbmVudCBkb2VzIGl0c1xuICAgKiBiZXN0IHRvIGluZmVyIHRoZSBiYWNrZ3JvdW5kIGNvbG9yLCBidXQgaW4gc29tZSBzaXR1YXRpb25zLCB0aGF0IG1heSBub3RcbiAgICogd29yay4gSW4gdGhvc2UgY2FzZXMsIHlvdSBjYW4gbWFudWFsbHkgaWRlbnRpZnkgdGhlIGJhY2tncm91bmQgY29sb3IuXG4gICAqIFRoaXMgc2hvdWxkIGJlIGEgc29saWQgY29sb3IuXG4gICAqXG4gICAqIEBhdHRyaWJ1dGUgZmFkZUNvbG9yXG4gICAqIEBkZWZhdWx0IHdoaXRlXG4gICAqL1xuICBnZXQgZmFkZUNvbG9yKCkge1xuICAgIHJldHVybiB0aGlzW2ZhZGVDb2xvclN5bWJvbF07XG4gIH1cbiAgc2V0IGZhZGVDb2xvcih2YWx1ZSkge1xuICAgIHRoaXNbZmFkZUNvbG9yU3ltYm9sXSA9IHZhbHVlO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgY29uc3QgcmdiID0gZXh0cmFjdFJnYlZhbHVlcyh2YWx1ZSk7XG4gICAgICBpZiAocmdiKSB7XG4gICAgICAgIGNvbnN0IGZhZGVDb2xvclRyYW5zcGFyZW50ID0gYHJnYmEoJHtyZ2Iucn0sJHtyZ2IuZ30sJHtyZ2IuYn0sMClgO1xuICAgICAgICBjb25zdCBncmFkaWVudCA9IGBsaW5lYXItZ3JhZGllbnQoJHtmYWRlQ29sb3JUcmFuc3BhcmVudH0gMCUsICR7dmFsdWV9IDEwMCUpYDtcbiAgICAgICAgdGhpcy4kLmZhZGUuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gZ3JhZGllbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEluZmVyIHRoZSBmYWRlIGNvbG9yIGZyb20gYmFja2dyb3VuZCBjb2xvci4gSWYgeW91IGhhdmUgcHJvZ3JhbW1hdGljYWxseVxuICAgKiBjaGFuZ2VkIHRoZSBjb2xvciBiZWhpbmQgdGhlIGNvbXBvbmVudCwgeW91IGNhbiBpbnZva2UgdGhpcyBtZXRob2QgdG8gaGF2ZVxuICAgKiB0aGUgY29tcG9uZW50IHRyeSB0byBwaWNrIHVwIHRoZSBuZXcgYmFja2dyb3VuZCBjb2xvci5cbiAgICovXG4gIHJlZnJlc2goKSB7XG4gICAgLy8gVE9ETzogQXV0b21hdGljYWxseSBoaWRlIHRoZSBmYWRlIGlmIGFsbCB0aGUgY29udGVudCBjYW4gYmUgc2Vlbi5cbiAgICB0aGlzLmZhZGVDb2xvciA9IGZpbmRCYWNrZ3JvdW5kQ29sb3IodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogVHJ1ZSBpZiB0aGUgY29tcG9uZW50IHNob3VsZCBzaG93IHRoZSBmYWRlIHRvIHRoZSBiYWNrZ3JvdW5kIGNvbG9yLlxuICAgKlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKi9cbiAgZ2V0IHNob3dGYWRlKCkge1xuICAgIHJldHVybiB0aGlzLiQuZmFkZS5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZSc7XG4gIH1cbiAgc2V0IHNob3dGYWRlKHZhbHVlKSB7XG4gICAgdGhpcy4kLmZhZGUuc3R5bGUuZGlzcGxheSA9IHZhbHVlID8gJycgOiAnbm9uZSc7XG4gIH1cblxuICBnZXQgW3N5bWJvbHMudGVtcGxhdGVdKCkge1xuICAgIHJldHVybiBgXG4gICAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG5cbiAgICAgICNmYWRlIHtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBoZWlnaHQ6IDNlbTtcbiAgICAgICAgbWF4LWhlaWdodDogNTAlO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgLyogTGV0cyB1c2VyIGludGVyYWN0IHdpdGggY29udGVudCB0aHJvdWdoIHRoZSBmYWRlLiAqL1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBpZD1cImZhZGVcIj48L2Rpdj5cbiAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICBgO1xuICB9XG5cbn1cblxuXG4vLyBSZXR1cm4gdGhlIGJhY2tncm91bmQgY29sb3Igb2YgdGhlIGdpdmVuIGVsZW1lbnQuIElmIHRoZSBjb2xvciBpc1xuLy8gXCJ0cmFuc3BhcmVudFwiICh0aGUgZGVmYXVsdCBpbiBNb3ppbGxhIGFuZCBJRSkgb3IgXCJyZ2JhKDAsIDAsIDAsIDApXCIgKHRoZVxuLy8gZGVmYXVsdCB0cmFuc3BhcmVudCB2YWx1ZSBpbiBCbGluayBhbmQgV2Via2l0KSwgd2FsayB1cCB0aGUgcGFyZW50IGNoYWluXG4vLyB1bnRpbCBhIG5vbi10cmFuc3BhcmVudCBjb2xvciBpcyBmb3VuZC5cbmZ1bmN0aW9uIGZpbmRCYWNrZ3JvdW5kQ29sb3IoZWxlbWVudCkge1xuICBpZiAoZWxlbWVudCA9PSBudWxsIHx8IHR5cGVvZiBlbGVtZW50LnN0eWxlID09PSAndW5kZWZpbmVkJykge1xuICAgIC8vIFRoaXMgZWxlbWVudCBoYXMgbm8gYmFja2dyb3VuZCwgYXNzdW1lIHdoaXRlLlxuICAgIHJldHVybiAncmdiKDI1NSwyNTUsMjU1KSc7XG4gIH1cbiAgY29uc3QgYmFja2dyb3VuZENvbG9yID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5iYWNrZ3JvdW5kQ29sb3I7XG4gIGlmIChiYWNrZ3JvdW5kQ29sb3IgPT09ICd0cmFuc3BhcmVudCcgfHwgYmFja2dyb3VuZENvbG9yID09PSAncmdiYSgwLCAwLCAwLCAwKScpIHtcbiAgICByZXR1cm4gZmluZEJhY2tncm91bmRDb2xvcihlbGVtZW50LnBhcmVudE5vZGUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBiYWNrZ3JvdW5kQ29sb3I7XG4gIH1cbn1cblxuXG4vLyBSZXR1cm4gdGhlIGluZGl2aWR1YWwgUkdCIHZhbHVlcyBmcm9tIGEgQ1NTIGNvbG9yIHN0cmluZy5cbmZ1bmN0aW9uIGV4dHJhY3RSZ2JWYWx1ZXMocmdiU3RyaW5nKSB7XG4gIGNvbnN0IHJnYlJlZ2V4ID0gL3JnYmE/XFwoXFxzKihcXGQrKVxccyosXFxzKihcXGQrKVxccyosXFxzKihcXGQrKVxccyooPzosXFxzKltcXGRcXC5dK1xccyopP1xcKS87XG4gIGNvbnN0IG1hdGNoID0gcmdiUmVnZXguZXhlYyhyZ2JTdHJpbmcpO1xuICBpZiAobWF0Y2gpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcjogcGFyc2VJbnQobWF0Y2hbMV0pLFxuICAgICAgZzogcGFyc2VJbnQobWF0Y2hbMl0pLFxuICAgICAgYjogcGFyc2VJbnQobWF0Y2hbM10pXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYmFzaWMtZmFkZS1vdmVyZmxvdycsIEZhZGVPdmVyZmxvdyk7XG5leHBvcnQgZGVmYXVsdCBGYWRlT3ZlcmZsb3c7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHRyYW5zcGlsZWQgdG8gY3JlYXRlIGFuIEVTNS1jb21wYXRpYmxlIGRpc3RyaWJ1dGlvbiBpbiB3aGljaFxuICogdGhlIHBhY2thZ2UncyBtYWluIGZlYXR1cmUocykgYXJlIGF2YWlsYWJsZSB2aWEgdGhlIHdpbmRvdy5CYXNpYyBnbG9iYWwuXG4gKiBJZiB5b3UncmUgYWxyZWFkeSB1c2luZyBFUzYgeW91cnNlbGYsIGlnbm9yZSB0aGlzIGZpbGUsIGFuZCBpbnN0ZWFkIGltcG9ydFxuICogdGhlIHNvdXJjZSBmaWxlKHMpIHlvdSB3YW50IGZyb20gdGhlIHNyYyBmb2xkZXIuXG4gKi9cblxuaW1wb3J0IExpc3RCb3ggZnJvbSAnLi9zcmMvTGlzdEJveCc7XG5cbndpbmRvdy5CYXNpYyA9IHdpbmRvdy5CYXNpYyB8fCB7fTtcbndpbmRvdy5CYXNpYy5MaXN0Qm94ID0gTGlzdEJveDtcbiIsImltcG9ydCBFbGVtZW50QmFzZSBmcm9tICcuLi8uLi9iYXNpYy1lbGVtZW50LWJhc2Uvc3JjL0VsZW1lbnRCYXNlJztcbmltcG9ydCBEaXN0cmlidXRlZENoaWxkcmVuQ29udGVudE1peGluIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW5Db250ZW50TWl4aW4nO1xuaW1wb3J0IENsaWNrU2VsZWN0aW9uTWl4aW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ2xpY2tTZWxlY3Rpb25NaXhpbic7XG5pbXBvcnQgQ29udGVudEl0ZW1zTWl4aW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ29udGVudEl0ZW1zTWl4aW4nO1xuaW1wb3J0IERpcmVjdGlvblNlbGVjdGlvbk1peGluIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0RpcmVjdGlvblNlbGVjdGlvbk1peGluJztcbmltcG9ydCBHZW5lcmljTWl4aW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvR2VuZXJpY01peGluJztcbmltcG9ydCBLZXlib2FyZE1peGluIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0tleWJvYXJkTWl4aW4nO1xuaW1wb3J0IEtleWJvYXJkRGlyZWN0aW9uTWl4aW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvS2V5Ym9hcmREaXJlY3Rpb25NaXhpbic7XG5pbXBvcnQgS2V5Ym9hcmRQYWdlZFNlbGVjdGlvbk1peGluIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0tleWJvYXJkUGFnZWRTZWxlY3Rpb25NaXhpbic7XG5pbXBvcnQgS2V5Ym9hcmRQcmVmaXhTZWxlY3Rpb25NaXhpbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9LZXlib2FyZFByZWZpeFNlbGVjdGlvbk1peGluJztcbmltcG9ydCBTZWxlY3RlZEl0ZW1UZXh0VmFsdWVNaXhpbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TZWxlY3RlZEl0ZW1UZXh0VmFsdWVNaXhpbic7XG5pbXBvcnQgU2VsZWN0aW9uQXJpYUFjdGl2ZU1peGluIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NlbGVjdGlvbkFyaWFBY3RpdmVNaXhpbic7XG5pbXBvcnQgU2VsZWN0aW9uSGlnaGxpZ2h0TWl4aW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2VsZWN0aW9uSGlnaGxpZ2h0TWl4aW4nO1xuaW1wb3J0IFNlbGVjdGlvbkluVmlld01peGluIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NlbGVjdGlvbkluVmlld01peGluJztcbmltcG9ydCBTaW5nbGVTZWxlY3Rpb25NaXhpbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TaW5nbGVTZWxlY3Rpb25NaXhpbic7XG5pbXBvcnQgc3ltYm9scyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9zeW1ib2xzJztcblxuXG4vKipcbiAqIEEgc2luZ2xlLXNlbGVjdGlvbiBsaXN0IGJveCB0aGF0IHN1cHBvcnRzIHNlbGVjdGlvbiBoaWdobGlnaHRpbmcgKHVzaW5nIHRoZVxuICogc3lzdGVtIGhpZ2hsaWdodCBjb2xvcikgYW5kIGtleWJvYXJkIG5hdmlnYXRpb24uXG4gKlxuICogW0xpdmUgZGVtb10oaHR0cDovL2Jhc2ljd2ViY29tcG9uZW50cy5vcmcvYmFzaWMtd2ViLWNvbXBvbmVudHMvcGFja2FnZXMvYmFzaWMtbGlzdC1ib3gvKVxuICpcbiAqIFRoZSB1c2VyIGNhbiBzZWxlY3QgYW4gaXRlbSB3aXRoIHRoZSBtb3VzZS90b3VjaCBvciBrZXlib2FyZDogVXAvRG93biwgUGFnZVxuICogVXAvRG93biwgSG9tZS9FbmQuXG4gKlxuICogTGlrZSBvdGhlciBCYXNpYyBXZWIgQ29tcG9uZW50cywgdGhpcyBjYW4gaGFuZGxlIGRpc3RyaWJ1dGVkIGNvbnRlbnQ6IHlvdSBjYW5cbiAqIGluY2x1ZGUgYSBjb250ZW50IGVsZW1lbnQgaW5zaWRlIGEgYmFzaWMtbGlzdC1ib3gsIGFuZCB0aGUgbGlzdCB3aWxsIG5hdmlnYXRlXG4gKiB0aHJvdWdoIHRoZSBkaXN0cmlidXRlZCBjb250ZW50LlxuICpcbiAqIFRoaXMgY29tcG9uZW50IGluY2x1ZGVzIGJhc2ljIEFSSUEgc3VwcG9ydCB0byBwcm92aWRlIGEgcmVhc29uYWJsZSBkZWZhdWx0XG4gKiBleHBlcmllbmNlLCBlLmcuLCBmb3Igc2NyZWVuIHJlYWRlcnMuIFRoZSBsaXN0IGNvbXBvbmVudCBpdHNlbGYgd2lsbCBiZVxuICogYXNzaWduZWQgYW4gYXBwcm9wcmlhdGUgQVJJQSByb2xlIChkZWZhdWx0IGlzIFwibGlzdGJveFwiKS4gVGhlIElEIG9mIHRoZVxuICogc2VsZWN0ZWQgaXRlbSB3aWxsIGJlIHJlZmxlY3RlZCBpbiBhbiBcImFyaWEtYWN0aXZlZGVzY2VuZGFudFwiIGF0dHJpYnV0ZVxuICogYXBwbGllZCB0byB0aGUgbGlzdC4gVG8gc3VwcG9ydCB0aGlzIGZlYXR1cmUsIGFsbCBpdGVtcyBpbiB0aGUgbGlzdCBuZWVkXG4gKiB1bmlxdWUgSURzLiBJZiBhbiBpdGVtIGRvZXMgbm90IGhhdmUgYW4gSUQsIGJhc2ljLWxpc3QtYm94IHdpbGwgYXV0b21hdGljYWxseVxuICogYXNzaWduIGEgZGVmYXVsdCBJRC5cbiAqXG4gKiBUaGUga2V5Ym9hcmQgaW50ZXJhY3Rpb24gbW9kZWwgZ2VuZXJhbGx5IGZvbGxvd3MgdGhhdCBvZiBNaWNyb3NvZnQgV2luZG93cydcbiAqIGxpc3QgYm94ZXMgaW5zdGVhZCBvZiB0aG9zZSBpbiBPUyBYOlxuICpcbiAqICogVGhlIFBhZ2UgVXAvRG93biBhbmQgSG9tZS9FbmQga2V5cyBhY3R1YWxseSBtb3ZlIHRoZSBzZWxlY3Rpb24sIHJhdGhlciB0aGFuXG4gKiAgIGp1c3Qgc2Nyb2xsaW5nIHRoZSBsaXN0LiBUaGUgZm9ybWVyIGJlaGF2aW9yIHNlZW1zIG1vcmUgZ2VuZXJhbGx5IHVzZWZ1bFxuICogICBmb3Iga2V5Ym9hcmQgdXNlcnMuXG4gKlxuICogKiBQcmVzc2luZyBQYWdlIFVwL0Rvd24gd2lsbCBtb3ZlIHRoZSBzZWxlY3Rpb24gdG8gdGhlIHRvcG1vc3QvYm90dG9tbW9zdFxuICogICB2aXNpYmxlIGl0ZW0gaWYgdGhlIHNlbGVjdGlvbiBpcyBub3QgYWxyZWFkeSB0aGVyZS4gVGhlcmVhZnRlciwgdGhlIGtleVxuICogICB3aWxsIG1vdmUgdGhlIHNlbGVjdGlvbiB1cC9kb3duIGJ5IGEgcGFnZSwgYW5kIChwZXIgdGhlIGFib3ZlIHBvaW50KSBtYWtlXG4gKiAgIHRoZSBzZWxlY3RlZCBpdGVtIHZpc2libGUuXG4gKlxuICogUHJvZ3JhbW1hdGljYWxseSBzZWxlY3RpbmcgYW4gaXRlbSAoYnkgc2V0dGluZyB0aGUgc2VsZWN0ZWQgcHJvcGVydHkpIHNjcm9sbHNcbiAqIHRoZSBpdGVtIGludG8gdmlldy5cbiAqXG4gKiBUaGUgdXNlciBjYW4gYWxzbyBzZWxlY3QgYW4gaXRlbSBieSB0eXBpbmcgdGhlIGJlZ2lubmluZyBvZiBhbiBpdGVtJ3MgdGV4dC5cbiAqXG4gKiBAZXh0ZW5kcyBFbGVtZW50QmFzZVxuICogQG1peGVzIENsaWNrU2VsZWN0aW9uTWl4aW5cbiAqIEBtaXhlcyBDb250ZW50SXRlbXNNaXhpblxuICogQG1peGVzIERpcmVjdGlvblNlbGVjdGlvbk1peGluXG4gKiBAbWl4ZXMgRGlzdHJpYnV0ZWRDaGlsZHJlbkNvbnRlbnRNaXhpblxuICogQG1peGVzIEdlbmVyaWNNaXhpblxuICogQG1peGVzIEtleWJvYXJkTWl4aW5cbiAqIEBtaXhlcyBLZXlib2FyZERpcmVjdGlvbk1peGluXG4gKiBAbWl4ZXMgS2V5Ym9hcmRQYWdlZFNlbGVjdGlvbk1peGluXG4gKiBAbWl4ZXMgS2V5Ym9hcmRQcmVmaXhTZWxlY3Rpb25NaXhpblxuICogQG1peGlzIFNlbGVjdGVkSXRlbVRleHRWYWx1ZU1peGluXG4gKiBAbWl4ZXMgU2VsZWN0aW9uQXJpYUFjdGl2ZU1peGluXG4gKiBAbWl4ZXMgU2VsZWN0aW9uSGlnaGxpZ2h0TWl4aW5cbiAqIEBtaXhlcyBTZWxlY3Rpb25JblZpZXdNaXhpblxuICogQG1peGVzIFNpbmdsZVNlbGVjdGlvbk1peGluXG4gKi9cbmNsYXNzIExpc3RCb3ggZXh0ZW5kcyBFbGVtZW50QmFzZS5jb21wb3NlKFxuICBDbGlja1NlbGVjdGlvbk1peGluLFxuICBDb250ZW50SXRlbXNNaXhpbixcbiAgRGlyZWN0aW9uU2VsZWN0aW9uTWl4aW4sXG4gIERpc3RyaWJ1dGVkQ2hpbGRyZW5Db250ZW50TWl4aW4sXG4gIEdlbmVyaWNNaXhpbixcbiAgS2V5Ym9hcmRNaXhpbixcbiAgS2V5Ym9hcmREaXJlY3Rpb25NaXhpbixcbiAgS2V5Ym9hcmRQYWdlZFNlbGVjdGlvbk1peGluLFxuICBLZXlib2FyZFByZWZpeFNlbGVjdGlvbk1peGluLFxuICBTZWxlY3RlZEl0ZW1UZXh0VmFsdWVNaXhpbixcbiAgU2VsZWN0aW9uQXJpYUFjdGl2ZU1peGluLFxuICBTZWxlY3Rpb25IaWdobGlnaHRNaXhpbixcbiAgU2VsZWN0aW9uSW5WaWV3TWl4aW4sXG4gIFNpbmdsZVNlbGVjdGlvbk1peGluXG4pIHtcblxuICBnZXQgW3N5bWJvbHMuZGVmYXVsdHNdKCkge1xuICAgIGNvbnN0IGRlZmF1bHRzID0gc3VwZXJbc3ltYm9scy5kZWZhdWx0c10gfHwge307XG4gICAgZGVmYXVsdHMubmF2aWdhdGlvbkF4aXMgPSAndmVydGljYWwnO1xuICAgIHJldHVybiBkZWZhdWx0cztcbiAgfVxuXG4gIGdldCBzY3JvbGxUYXJnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuJC5pdGVtc0NvbnRhaW5lcjtcbiAgfVxuXG4gIGdldCBbc3ltYm9scy50ZW1wbGF0ZV0oKSB7XG4gICAgY29uc3QgYmFzZVRlbXBsYXRlID0gc3VwZXJbc3ltYm9scy50ZW1wbGF0ZV0gfHwgJyc7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgICB9XG5cbiAgICAgIFt0YXJnZXQ9XCJjaGlsZFwiXSB7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLXdlYmtpdC1mbGV4OiAxO1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgfVxuXG4gICAgICAjaXRlbXNDb250YWluZXIge1xuICAgICAgICAtd2Via2l0LWZsZXg6IDE7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsOyAvKiBmb3IgbW9tZW50dW0gc2Nyb2xsaW5nICovXG4gICAgICB9XG5cbiAgICAgIC8qIEdlbmVyaWNNaXhpbiBhcHBlYXJhbmNlICovXG4gICAgICA6aG9zdChbZ2VuZXJpYz1cIlwiXSkge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtnZW5lcmljPVwiXCJdKSAjaXRlbXNDb250YWluZXIgOjpzbG90dGVkKCopIHtcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICBwYWRkaW5nOiAwLjI1ZW07XG4gICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGlkPVwiaXRlbXNDb250YWluZXJcIiByb2xlPVwibm9uZVwiPlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICA8L2Rpdj5cbiAgICAgICR7YmFzZVRlbXBsYXRlfVxuICAgIGA7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgd2hlbiB0aGUgbGlzdCdzIHZhbHVlIHByb3BlcnR5IGNoYW5nZXMuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBMaXN0Qm94XG4gICAqIEBldmVudCB2YWx1ZS1jaGFuZ2VkXG4gICAqL1xufVxuXG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYmFzaWMtbGlzdC1ib3gnLCBMaXN0Qm94KTtcbmV4cG9ydCBkZWZhdWx0IExpc3RCb3g7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHRyYW5zcGlsZWQgdG8gY3JlYXRlIGFuIEVTNS1jb21wYXRpYmxlIGRpc3RyaWJ1dGlvbiBpbiB3aGljaFxuICogdGhlIHBhY2thZ2UncyBtYWluIGZlYXR1cmUocykgYXJlIGF2YWlsYWJsZSB2aWEgdGhlIHdpbmRvdy5CYXNpYyBnbG9iYWwuXG4gKiBJZiB5b3UncmUgYWxyZWFkeSB1c2luZyBFUzYgeW91cnNlbGYsIGlnbm9yZSB0aGlzIGZpbGUsIGFuZCBpbnN0ZWFkIGltcG9ydFxuICogdGhlIHNvdXJjZSBmaWxlKHMpIHlvdSB3YW50IGZyb20gdGhlIHNyYyBmb2xkZXIuXG4gKi9cblxuaW1wb3J0IE1vZGVzIGZyb20gJy4vc3JjL01vZGVzJztcblxud2luZG93LkJhc2ljID0gd2luZG93LkJhc2ljIHx8IHt9O1xud2luZG93LkJhc2ljLk1vZGVzID0gTW9kZXM7XG4iLCJpbXBvcnQgRWxlbWVudEJhc2UgZnJvbSAnLi4vLi4vYmFzaWMtZWxlbWVudC1iYXNlL3NyYy9FbGVtZW50QmFzZSc7XG5pbXBvcnQgRGlzdHJpYnV0ZWRDaGlsZHJlbkNvbnRlbnRNaXhpbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXN0cmlidXRlZENoaWxkcmVuQ29udGVudE1peGluJztcbmltcG9ydCBDb250ZW50SXRlbXNNaXhpbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Db250ZW50SXRlbXNNaXhpbic7XG5pbXBvcnQgU2luZ2xlU2VsZWN0aW9uTWl4aW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2luZ2xlU2VsZWN0aW9uTWl4aW4nO1xuaW1wb3J0IHN5bWJvbHMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvc3ltYm9scyc7XG5cbmNvbnN0IGJhc2UgPSBFbGVtZW50QmFzZS5jb21wb3NlKFxuICBDb250ZW50SXRlbXNNaXhpbixcbiAgRGlzdHJpYnV0ZWRDaGlsZHJlbkNvbnRlbnRNaXhpbixcbiAgU2luZ2xlU2VsZWN0aW9uTWl4aW5cbik7XG5cblxuLyoqXG4gKiBTaG93cyBleGFjdGx5IG9uZSBjaGlsZCBlbGVtZW50IGF0IGEgdGltZS4gVGhpcyBjYW4gYmUgdXNlZnVsLCBmb3IgZXhhbXBsZSxcbiAqIGlmIGEgZ2l2ZW4gVUkgZWxlbWVudCBoYXMgbXVsdGlwbGUgbW9kZXMgdGhhdCBwcmVzZW50IHN1YnN0YW50aWFsbHkgZGlmZmVyZW50XG4gKiBlbGVtZW50cy5cbiAqXG4gKiBUaGUgdHJhbnNpdGlvbiBiZXR3ZWVuIGNoaWxkIGVsZW1lbnRzIGlzIGluc3RhbnRlbm91cy4gSWYgeW91J2QgbGlrZSB0aGVcbiAqIHRyYW5zaXRpb24gdG8gYmUgYWNjb21wYW5pZWQgYnkgdmlzaWJsZSBhbmltYXRlZCBlZmZlY3RzLCBzZWVcbiAqIFtiYXNpYy1hbmltYXRpb24tc3RhZ2VdKC4uL2Jhc2ljLWFuaW1hdGlvbi1zdGFnZSkuXG4gKlxuICogVGhpcyBjb21wb25lbnQgZG9lc24ndCBwcm92aWRlIGFueSBVSSBmb3IgY2hhbmdpbmcgd2hpY2ggbW9kZSBpcyBzaG93bi5cbiAqXG4gKiBAZXh0ZW5kcyBFbGVtZW50QmFzZVxuICogQG1peGVzIENvbnRlbnRJdGVtc01peGluXG4gKiBAbWl4ZXMgRGlzdHJpYnV0ZWRDaGlsZHJlbkNvbnRlbnRNaXhpblxuICogQG1peGVzIFNpbmdsZVNlbGVjdGlvbk1peGluXG4gKi9cbmNsYXNzIE1vZGVzIGV4dGVuZHMgYmFzZSB7XG5cbiAgZ2V0IFtzeW1ib2xzLmRlZmF1bHRzXSgpIHtcbiAgICBjb25zdCBkZWZhdWx0cyA9IHN1cGVyW3N5bWJvbHMuZGVmYXVsdHNdIHx8IHt9O1xuICAgIGRlZmF1bHRzLnNlbGVjdGlvblJlcXVpcmVkID0gdHJ1ZTtcbiAgICByZXR1cm4gZGVmYXVsdHM7XG4gIH1cblxuICBbc3ltYm9scy5pdGVtU2VsZWN0ZWRdKGl0ZW0sIHNlbGVjdGVkKSB7XG4gICAgaWYgKHN1cGVyW3N5bWJvbHMuaXRlbVNlbGVjdGVkXSkgeyBzdXBlcltzeW1ib2xzLml0ZW1TZWxlY3RlZF0oaXRlbSwgc2VsZWN0ZWQpOyB9XG4gICAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gc2VsZWN0ZWQgPyAnJyA6ICdub25lJztcbiAgICBpdGVtLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAhc2VsZWN0ZWQpO1xuICB9XG5cbiAgZ2V0IFtzeW1ib2xzLnRlbXBsYXRlXSgpIHtcbiAgICByZXR1cm4gYDxzbG90Pjwvc2xvdD5gO1xuICB9XG5cbn1cblxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2Jhc2ljLW1vZGVzJywgTW9kZXMpO1xuZXhwb3J0IGRlZmF1bHQgTW9kZXM7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHRyYW5zcGlsZWQgdG8gY3JlYXRlIGFuIEVTNS1jb21wYXRpYmxlIGRpc3RyaWJ1dGlvbiBpbiB3aGljaFxuICogdGhlIHBhY2thZ2UncyBtYWluIGZlYXR1cmUocykgYXJlIGF2YWlsYWJsZSB2aWEgdGhlIHdpbmRvdy5CYXNpYyBnbG9iYWwuXG4gKiBJZiB5b3UncmUgYWxyZWFkeSB1c2luZyBFUzYgeW91cnNlbGYsIGlnbm9yZSB0aGlzIGZpbGUsIGFuZCBpbnN0ZWFkIGltcG9ydFxuICogdGhlIHNvdXJjZSBmaWxlKHMpIHlvdSB3YW50IGZyb20gdGhlIHNyYyBmb2xkZXIuXG4gKi9cblxuaW1wb3J0IFNsaWRlc2hvd1dpdGhDb250cm9scyBmcm9tICcuL3NyYy9TbGlkZXNob3dXaXRoQ29udHJvbHMnO1xuXG53aW5kb3cuQmFzaWMgPSB3aW5kb3cuQmFzaWMgfHwge307XG53aW5kb3cuQmFzaWMuU2xpZGVzaG93V2l0aENvbnRyb2xzID0gU2xpZGVzaG93V2l0aENvbnRyb2xzO1xuIiwiaW1wb3J0IFNsaWRlc2hvdyBmcm9tICcuLi8uLi9iYXNpYy1zbGlkZXNob3cvc3JjL1NsaWRlc2hvdyc7XG5pbXBvcnQgUGxheUNvbnRyb2xzTWl4aW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvUGxheUNvbnRyb2xzTWl4aW4nO1xuXG4vKipcbiAqIFNsaWRlc2hvd1dpdGhDb250cm9sc1xuICpcbiAqIEFuIGV4dGVuc2lvbiBvZiBTbGlkZXNob3cgd2l0aCB0aGUgYWRkaXRpb24gb2YgcGxheSBjb250cm9scy5cbiAqXG4gKiBAZXh0ZW5kcyBTbGlkZXNob3dcbiAqIEBtaXhlcyBQbGF5Q29udHJvbHNNaXhpblxuICovXG5jbGFzcyBTbGlkZXNob3dXaXRoQ29udHJvbHMgZXh0ZW5kcyBQbGF5Q29udHJvbHNNaXhpbihTbGlkZXNob3cpIHt9XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2Jhc2ljLXNsaWRlc2hvdy13aXRoLWNvbnRyb2xzJywgU2xpZGVzaG93V2l0aENvbnRyb2xzKTtcblxuZXhwb3J0IGRlZmF1bHQgU2xpZGVzaG93V2l0aENvbnRyb2xzO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyB0cmFuc3BpbGVkIHRvIGNyZWF0ZSBhbiBFUzUtY29tcGF0aWJsZSBkaXN0cmlidXRpb24gaW4gd2hpY2hcbiAqIHRoZSBwYWNrYWdlJ3MgbWFpbiBmZWF0dXJlKHMpIGFyZSBhdmFpbGFibGUgdmlhIHRoZSB3aW5kb3cuQmFzaWMgZ2xvYmFsLlxuICogSWYgeW91J3JlIGFscmVhZHkgdXNpbmcgRVM2IHlvdXJzZWxmLCBpZ25vcmUgdGhpcyBmaWxlLCBhbmQgaW5zdGVhZCBpbXBvcnRcbiAqIHRoZSBzb3VyY2UgZmlsZShzKSB5b3Ugd2FudCBmcm9tIHRoZSBzcmMgZm9sZGVyLlxuICovXG5cbmltcG9ydCBTbGlkZXNob3cgZnJvbSAnLi9zcmMvU2xpZGVzaG93Jztcblxud2luZG93LkJhc2ljID0gd2luZG93LkJhc2ljIHx8IHt9O1xud2luZG93LkJhc2ljLlNsaWRlc2hvdyA9IFNsaWRlc2hvdztcbiIsImltcG9ydCBFbGVtZW50QmFzZSBmcm9tICcuLi8uLi9iYXNpYy1lbGVtZW50LWJhc2Uvc3JjL0VsZW1lbnRCYXNlJztcbmltcG9ydCBDb250ZW50SXRlbXNNaXhpbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Db250ZW50SXRlbXNNaXhpbic7XG5pbXBvcnQgRGlzdHJpYnV0ZWRDaGlsZHJlbkNvbnRlbnRNaXhpbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXN0cmlidXRlZENoaWxkcmVuQ29udGVudE1peGluJztcbmltcG9ydCBGcmFjdGlvbmFsU2VsZWN0aW9uTWl4aW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRnJhY3Rpb25hbFNlbGVjdGlvbk1peGluJztcbmltcG9ydCBTZWxlY3Rpb25BbmltYXRpb25NaXhpbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TZWxlY3Rpb25BbmltYXRpb25NaXhpbic7XG5pbXBvcnQgU2VsZWN0aW9uQXJpYUFjdGl2ZU1peGluIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NlbGVjdGlvbkFyaWFBY3RpdmVNaXhpbic7XG5pbXBvcnQgU2luZ2xlU2VsZWN0aW9uTWl4aW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2luZ2xlU2VsZWN0aW9uTWl4aW4nO1xuaW1wb3J0IHN5bWJvbHMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvc3ltYm9scyc7XG5pbXBvcnQgVGltZXJTZWxlY3Rpb25NaXhpbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9UaW1lclNlbGVjdGlvbk1peGluJztcblxuXG5jb25zdCBiYXNlID0gRWxlbWVudEJhc2UuY29tcG9zZShcbiAgQ29udGVudEl0ZW1zTWl4aW4sXG4gIERpc3RyaWJ1dGVkQ2hpbGRyZW5Db250ZW50TWl4aW4sXG4gIEZyYWN0aW9uYWxTZWxlY3Rpb25NaXhpbixcbiAgU2VsZWN0aW9uQW5pbWF0aW9uTWl4aW4sXG4gIFNlbGVjdGlvbkFyaWFBY3RpdmVNaXhpbixcbiAgU2luZ2xlU2VsZWN0aW9uTWl4aW4sXG4gIFRpbWVyU2VsZWN0aW9uTWl4aW5cbik7XG5cblxuLyoqXG4gKiBTbGlkZXNob3cgd2l0aCBhbmltYXRlZCB0cmFuc2l0aW9ucy5cbiAqXG4gKiBCeSBkZWZhdWx0IHRoZSBzbGlkZXNob3cgd2lsbCBpbW1lZGlhdGVseSBiZWdpbiBwbGF5aW5nIHdoZW4gaXQgaXMgY29ubmVjdGVkXG4gKiB0byB0aGUgZG9jdW1lbnQsIGFkdmFuY2UgZXZlcnkgMzAwMCBtcyAoMyBzZWNvbmRzKSwgYW5kIHVzZSBhIHNpbXBsZVxuICogY3Jvc3NmYWRlIGVmZmVjdC5cbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBjYW4gYmUgdXNlZCBvbiBpdHMgb3duLiBUbyBpbmNvcnBvcmF0ZSBzbGlkZXNob3cgYmVoYXZpb3IgaW50b1xuICogYSBjb21wb25lbnQgb2YgeW91ciBvd24sIGFwcGx5IHRoZVxuICogW1RpbWVyU2VsZWN0aW9uTWl4aW5dKC4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvZG9jcy9UaW1lclNlbGVjdGlvbk1peGluLm1kKS5cbiAqXG4gKiBAZXh0ZW5kcyBFbGVtZW50QmFzZVxuICogQG1peGVzIENvbnRlbnRJdGVtc01peGluXG4gKiBAbWl4ZXMgRGlzdHJpYnV0ZWRDaGlsZHJlbkNvbnRlbnRNaXhpblxuICogQG1peGVzIEZyYWN0aW9uYWxTZWxlY3Rpb25NaXhpblxuICogQG1peGVzIFNlbGVjdGlvbkFuaW1hdGlvbk1peGluXG4gKiBAbWl4ZXMgU2VsZWN0aW9uQXJpYUFjdGl2ZU1peGluXG4gKiBAbWl4ZXMgU2luZ2xlU2VsZWN0aW9uTWl4aW5cbiAqIEBtaXhlcyBUaW1lclNlbGVjdGlvbk1peGluXG4gKi9cbmNsYXNzIFNsaWRlc2hvdyBleHRlbmRzIGJhc2Uge1xuXG4gIGdldCBbc3ltYm9scy5kZWZhdWx0c10oKSB7XG4gICAgY29uc3QgZGVmYXVsdHMgPSBzdXBlcltzeW1ib2xzLmRlZmF1bHRzXSB8fCB7fTtcbiAgICBkZWZhdWx0cy5wbGF5aW5nID0gdHJ1ZTtcbiAgICBkZWZhdWx0cy5zZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvbiA9IDUwMDtcbiAgICBkZWZhdWx0cy5zZWxlY3Rpb25BbmltYXRpb25FZmZlY3QgPSAnY3Jvc3NmYWRlJztcbiAgICBkZWZhdWx0cy5zZWxlY3Rpb25SZXF1aXJlZCA9IHRydWU7XG4gICAgZGVmYXVsdHMuc2VsZWN0aW9uVGltZXJEdXJhdGlvbiA9IDMwMDA7XG4gICAgZGVmYXVsdHMuc2VsZWN0aW9uV3JhcHMgPSB0cnVlO1xuICAgIHJldHVybiBkZWZhdWx0cztcbiAgfVxuXG4gIGdldCBbc3ltYm9scy50ZW1wbGF0ZV0oKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgICNjb250YWluZXIgOjpzbG90dGVkKCopIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBpZD1cImNvbnRhaW5lclwiIHJvbGU9XCJub25lXCI+XG4gICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxufVxuXG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYmFzaWMtc2xpZGVzaG93JywgU2xpZGVzaG93KTtcbmV4cG9ydCBkZWZhdWx0IFNsaWRlc2hvdztcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgdHJhbnNwaWxlZCB0byBjcmVhdGUgYW4gRVM1LWNvbXBhdGlibGUgZGlzdHJpYnV0aW9uIGluIHdoaWNoXG4gKiB0aGUgcGFja2FnZSdzIG1haW4gZmVhdHVyZShzKSBhcmUgYXZhaWxhYmxlIHZpYSB0aGUgd2luZG93LkJhc2ljIGdsb2JhbC5cbiAqIElmIHlvdSdyZSBhbHJlYWR5IHVzaW5nIEVTNiB5b3Vyc2VsZiwgaWdub3JlIHRoaXMgZmlsZSwgYW5kIGluc3RlYWQgaW1wb3J0XG4gKiB0aGUgc291cmNlIGZpbGUocykgeW91IHdhbnQgZnJvbSB0aGUgc3JjIGZvbGRlci5cbiAqL1xuXG5pbXBvcnQgU2xpZGluZ0Nhcm91c2VsIGZyb20gJy4vc3JjL1NsaWRpbmdDYXJvdXNlbCc7XG5cbndpbmRvdy5CYXNpYyA9IHdpbmRvdy5CYXNpYyB8fCB7fTtcbndpbmRvdy5CYXNpYy5TbGlkaW5nQ2Fyb3VzZWwgPSBTbGlkaW5nQ2Fyb3VzZWw7XG4iLCJpbXBvcnQgRWxlbWVudEJhc2UgZnJvbSAnLi4vLi4vYmFzaWMtZWxlbWVudC1iYXNlL3NyYy9FbGVtZW50QmFzZSc7XG5pbXBvcnQgQ29udGVudEl0ZW1zTWl4aW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ29udGVudEl0ZW1zTWl4aW4nO1xuaW1wb3J0IERpcmVjdGlvblNlbGVjdGlvbk1peGluIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0RpcmVjdGlvblNlbGVjdGlvbk1peGluJztcbmltcG9ydCBEaXN0cmlidXRlZENoaWxkcmVuQ29udGVudE1peGluIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW5Db250ZW50TWl4aW4nO1xuaW1wb3J0IEZyYWN0aW9uYWxTZWxlY3Rpb25NaXhpbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9GcmFjdGlvbmFsU2VsZWN0aW9uTWl4aW4nO1xuaW1wb3J0IEtleWJvYXJkTWl4aW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvS2V5Ym9hcmRNaXhpbic7XG5pbXBvcnQgS2V5Ym9hcmREaXJlY3Rpb25NaXhpbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9LZXlib2FyZERpcmVjdGlvbk1peGluJztcbmltcG9ydCBTZWxlY3Rpb25BcmlhQWN0aXZlTWl4aW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2VsZWN0aW9uQXJpYUFjdGl2ZU1peGluJztcbmltcG9ydCBTaW5nbGVTZWxlY3Rpb25NaXhpbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TaW5nbGVTZWxlY3Rpb25NaXhpbic7XG5pbXBvcnQgU2xpZGluZ1ZpZXdwb3J0IGZyb20gJy4uLy4uL2Jhc2ljLXNsaWRpbmctdmlld3BvcnQvc3JjL1NsaWRpbmdWaWV3cG9ydCc7IC8vIGpzaGludCBpZ25vcmU6bGluZVxuaW1wb3J0IFN3aXBlRGlyZWN0aW9uTWl4aW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU3dpcGVEaXJlY3Rpb25NaXhpbic7XG5pbXBvcnQgc3ltYm9scyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9zeW1ib2xzJztcbmltcG9ydCBUcmFja3BhZERpcmVjdGlvbk1peGluIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1RyYWNrcGFkRGlyZWN0aW9uTWl4aW4nO1xuXG5jb25zdCBiYXNlID0gRWxlbWVudEJhc2UuY29tcG9zZShcbiAgQ29udGVudEl0ZW1zTWl4aW4sXG4gIERpcmVjdGlvblNlbGVjdGlvbk1peGluLFxuICBEaXN0cmlidXRlZENoaWxkcmVuQ29udGVudE1peGluLFxuICBGcmFjdGlvbmFsU2VsZWN0aW9uTWl4aW4sXG4gIEtleWJvYXJkTWl4aW4sXG4gIEtleWJvYXJkRGlyZWN0aW9uTWl4aW4sXG4gIFNlbGVjdGlvbkFyaWFBY3RpdmVNaXhpbixcbiAgU2luZ2xlU2VsZWN0aW9uTWl4aW4sXG4gIFN3aXBlRGlyZWN0aW9uTWl4aW4sXG4gIFRyYWNrcGFkRGlyZWN0aW9uTWl4aW5cbik7XG5cblxuLyoqXG4gKiBMZXRzIHRoZSB1c2VyIG5hdmlnYXRlIGxhdGVyYWxseSB0aHJvdWdoIGEgc2VxdWVuY2Ugb2YgY2hpbGQgZWxlbWVudHMuXG4gKlxuICogW0xpdmUgZGVtb10oaHR0cDovL2Jhc2ljd2ViY29tcG9uZW50cy5vcmcvYmFzaWMtd2ViLWNvbXBvbmVudHMvcGFja2FnZXMvYmFzaWMtY2Fyb3VzZWwvKVxuICpcbiAqIGJhc2ljLXNsaWRpbmctY2Fyb3VzZWwgaXMgYW4gaW1wbGVtZW50YXRpb24gb2YgdGhlIGNhcm91c2VsIHVzZXIgaW50ZXJmYWNlIHBhdHRlcm4sXG4gKiBjb21tb25seSB1c2VkIGZvciBuYXZpZ2F0aW5nIGJldHdlZW4gaW1hZ2VzLCBwYWdlcywgYW5kIG90aGVyIGVsZW1lbnRzLiBUaGlzXG4gKiBwYXR0ZXJuIHByZXNlbnRzIHRoZSB1c2VyIHdpdGggYSBsaW5lYXIgc2VxdWVuY2Ugb2YgZWxlbWVudHMsIG9ubHkgb25lIG9mXG4gKiB3aGljaCBpcyBzaG93biBhdCBhIHRpbWUuIFRoZSB1c2VyIGNhbiBuYXZpZ2F0ZSB0byB0aGUgbmV4dC9wcmV2aW91cyBlbGVtZW50XG4gKiB3aXRoIGEgdmFyaWV0eSBvZiBpbnB1dCBtZXRob2RzLlxuICpcbiAqIGJhc2ljLXNsaWRpbmctY2Fyb3VzZWwgaXMgYSBzaW1wbGVyIHZhcmlhdGlvbiBvZiB0aGUgbW9yZSBzb3BoaXN0aWNhdGVkXG4gKiBbYmFzaWMtY2Fyb3VzZWxdKC4uL2Jhc2ljLWNhcm91c2VsKSBjb21wb25lbnQuIFRoZSBsYXR0ZXIgaW5jbHVkZXMgc3VwcG9ydFxuICogZm9yIF93cmFwcGluZ18gKGdvaW5nIGZvcndhcmQgZnJvbSB0aGUgbGFzdCBpdGVtIHRvIHRoZSBmaXJzdCwgYW5kIHZpY2UgdmVyc2EpLFxuICogYW5kIG1vcmUgY29tcGxleCB2aXN1YWwgdHJhbnNpdGlvbnMuIFRob3NlIHRyYW5zaXRpb25zIGVudGFpbCB1c2Ugb2YgdGhlXG4gKiBXZWIgQW5pbWF0aW9uIEFQSSwgd2hpY2ggcmVxdWlyZXMgYSBwb2x5ZmlsbCBpbiBvbGRlciBicm93c2Vycy4gSGVuY2UsIHRoZVxuICogc2ltcGxlciBiYXNpYy1zbGlkaW5nLWNhcm91c2VsIG1heSBiZSBhIG1vcmUgYXBwcm9wcmlhdGUgY2hvaWNlIGlmIGZhY3RvcnNcbiAqIHN1Y2ggYXMgZG93bmxvYWQgc2l6ZSBhcmUgY3JpdGljYWwuXG4gKlxuICogQmV5b25kIHRob3NlIGRpZmZlcmVuY2VzLCBiYXNpYy1zbGlkaW5nLWNhcm91c2VsIG9mZmVycyB0aGUgc2FtZSBBUEksIHVzYWdlXG4gKiByZWNvbW1lbmRhdGlvbnMsIGFuZCBzdXBwb3J0IGZvciBrZXlib2FyZC90b3VjaC9tb3VzZSBhbmQgYXNzaXN0aXZlIGRldmljZXMuXG4gKiBTZWUgdGhhdCBjb21wb25lbnQgZm9yIG1vcmUgZGV0YWlscyBvbiB1c2UuXG4gKlxuICogQGV4dGVuZHMgRWxlbWVudEJhc2VcbiAqIEBtaXhlcyBDb250ZW50SXRlbXNNaXhpblxuICogQG1peGVzIERpcmVjdGlvblNlbGVjdGlvbk1peGluXG4gKiBAbWl4ZXMgRGlzdHJpYnV0ZWRDaGlsZHJlbkNvbnRlbnRNaXhpblxuICogQG1peGVzIEdlbmVyaWNNaXhpblxuICogQG1peGVzIEtleWJvYXJkTWl4aW5cbiAqIEBtaXhlcyBLZXlib2FyZERpcmVjdGlvbk1peGluXG4gKiBAbWl4ZXMgU2VsZWN0aW9uQXJpYUFjdGl2ZU1peGluXG4gKiBAbWl4ZXMgU2luZ2xlU2VsZWN0aW9uTWl4aW5cbiAqIEBtaXhlcyBTd2lwZURpcmVjdGlvbk1peGluXG4gKiBAbWl4ZXMgVHJhY2twYWREaXJlY3Rpb25NaXhpblxuICovXG5jbGFzcyBTbGlkaW5nQ2Fyb3VzZWwgZXh0ZW5kcyBiYXNlIHtcblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBpZiAoc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2spIHsgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTsgfVxuICAgIC8vIEhBQ0tcbiAgICB0aGlzW3N5bWJvbHMuaXRlbXNDaGFuZ2VkXSgpO1xuICB9XG5cbiAgZ2V0IFtzeW1ib2xzLmRlZmF1bHRzXSgpIHtcbiAgICBjb25zdCBkZWZhdWx0cyA9IHN1cGVyW3N5bWJvbHMuZGVmYXVsdHNdIHx8IHt9O1xuICAgIGRlZmF1bHRzLm5hdmlnYXRpb25BeGlzID0gJ2hvcml6b250YWwnO1xuICAgIGRlZmF1bHRzLnNlbGVjdGlvblJlcXVpcmVkID0gdHJ1ZTtcbiAgICByZXR1cm4gZGVmYXVsdHM7XG4gIH1cblxuICAvKlxuICAgKiBEdXJpbmcgZHJhZ3MsIGRvbid0IHNob3cgQ1NTIHRyYW5zaXRpb25zLlxuICAgKi9cbiAgZ2V0IFtzeW1ib2xzLmRyYWdnaW5nXSgpIHtcbiAgICByZXR1cm4gIXRoaXMuJC52aWV3cG9ydC5zaG93VHJhbnNpdGlvbjtcbiAgfVxuICBzZXQgW3N5bWJvbHMuZHJhZ2dpbmddKHZhbHVlKSB7XG4gICAgaWYgKHN5bWJvbHMuZHJhZ2dpbmcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXJbc3ltYm9scy5kcmFnZ2luZ10gPSB2YWx1ZTsgfVxuICAgIHRoaXMuJC52aWV3cG9ydC5zaG93VHJhbnNpdGlvbiA9ICF2YWx1ZTtcbiAgfVxuXG4gIGdldCBzZWxlY3RlZEZyYWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiQudmlld3BvcnQuc2VsZWN0ZWRGcmFjdGlvbjtcbiAgfVxuICBzZXQgc2VsZWN0ZWRGcmFjdGlvbih2YWx1ZSkge1xuICAgIGlmICgnc2VsZWN0ZWRGcmFjdGlvbicgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRGcmFjdGlvbiA9IHZhbHVlOyB9XG4gICAgdGhpcy4kLnZpZXdwb3J0LnNlbGVjdGVkRnJhY3Rpb24gPSB2YWx1ZTtcbiAgICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnc2VsZWN0ZWQtZnJhY3Rpb24tY2hhbmdlZCcpO1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gIH1cblxuICBnZXQgc2VsZWN0ZWRJbmRleCgpIHtcbiAgICByZXR1cm4gc3VwZXIuc2VsZWN0ZWRJbmRleDtcbiAgfVxuICBzZXQgc2VsZWN0ZWRJbmRleCh2YWx1ZSkge1xuICAgIGlmICgnc2VsZWN0ZWRJbmRleCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJbmRleCA9IHZhbHVlOyB9XG4gICAgdGhpcy4kLnZpZXdwb3J0LnNlbGVjdGVkSW5kZXggPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBzZWxlY3RlZEl0ZW0oKSB7XG4gICAgcmV0dXJuIHN1cGVyLnNlbGVjdGVkSXRlbTtcbiAgfVxuICBzZXQgc2VsZWN0ZWRJdGVtKGl0ZW0pIHtcbiAgICBpZiAoJ3NlbGVjdGVkSXRlbScgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJdGVtID0gaXRlbTsgfVxuICAgIHRoaXMuJC52aWV3cG9ydC5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xuICB9XG5cbiAgZ2V0IFtzeW1ib2xzLnRlbXBsYXRlXSgpIHtcbiAgICByZXR1cm4gYFxuICAgICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB9XG5cbiAgICAgIGJhc2ljLXNsaWRpbmctdmlld3BvcnQge1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC13ZWJraXQtZmxleDogMTtcbiAgICAgICAgZmxleDogMTtcbiAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxiYXNpYy1zbGlkaW5nLXZpZXdwb3J0IGlkPVwidmlld3BvcnRcIiByb2xlPVwibm9uZVwiPlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICA8L2Jhc2ljLXNsaWRpbmctdmlld3BvcnQ+XG4gICAgYDtcbiAgfVxufVxuXG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYmFzaWMtc2xpZGluZy1jYXJvdXNlbCcsIFNsaWRpbmdDYXJvdXNlbCk7XG5leHBvcnQgZGVmYXVsdCBTbGlkaW5nQ2Fyb3VzZWw7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHRyYW5zcGlsZWQgdG8gY3JlYXRlIGFuIEVTNS1jb21wYXRpYmxlIGRpc3RyaWJ1dGlvbiBpbiB3aGljaFxuICogdGhlIHBhY2thZ2UncyBtYWluIGZlYXR1cmUocykgYXJlIGF2YWlsYWJsZSB2aWEgdGhlIHdpbmRvdy5CYXNpYyBnbG9iYWwuXG4gKiBJZiB5b3UncmUgYWxyZWFkeSB1c2luZyBFUzYgeW91cnNlbGYsIGlnbm9yZSB0aGlzIGZpbGUsIGFuZCBpbnN0ZWFkIGltcG9ydFxuICogdGhlIHNvdXJjZSBmaWxlKHMpIHlvdSB3YW50IGZyb20gdGhlIHNyYyBmb2xkZXIuXG4gKi9cblxuaW1wb3J0IFNsaWRpbmdWaWV3cG9ydCBmcm9tICcuL3NyYy9TbGlkaW5nVmlld3BvcnQnO1xuXG53aW5kb3cuQmFzaWMgPSB3aW5kb3cuQmFzaWMgfHwge307XG53aW5kb3cuQmFzaWMuU2xpZGluZ1ZpZXdwb3J0ID0gU2xpZGluZ1ZpZXdwb3J0O1xuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9jcmVhdGVTeW1ib2wnO1xuaW1wb3J0IEVsZW1lbnRCYXNlIGZyb20gJy4uLy4uL2Jhc2ljLWVsZW1lbnQtYmFzZS9zcmMvRWxlbWVudEJhc2UnO1xuaW1wb3J0IEZyYWN0aW9uYWxTZWxlY3Rpb25NaXhpbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9GcmFjdGlvbmFsU2VsZWN0aW9uTWl4aW4nO1xuaW1wb3J0IFNwcmVhZEl0ZW1zIGZyb20gJy4uLy4uL2Jhc2ljLXNwcmVhZC1pdGVtcy9zcmMvU3ByZWFkSXRlbXMnOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3Qgc2VsZWN0ZWRJdGVtU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdzZWxlY3RlZEl0ZW0nKTtcblxuXG5jb25zdCBiYXNlID0gRWxlbWVudEJhc2UuY29tcG9zZShcbiAgRnJhY3Rpb25hbFNlbGVjdGlvbk1peGluXG4pO1xuXG5cbi8qKlxuICogUHJlc2VudHMgbGlzdCBpdGVtcyBpbiBhIHZpZXdwb3J0IHN1Y2ggdGhhdCBvbmx5IGEgc2luZ2xlIGl0ZW0gaXMgdmlzaWJsZSBhdFxuICogYSB0aW1lLlxuICpcbiAqIE5hdmlnYXRpbmcgYmV0d2VlbiBpdGVtcyB3aWxsIGJlIHJlcHJlc2VudGVkIHdpdGggYSBob3Jpem9udGFsIHZpc3VhbFxuICogc2xpZGluZyBlZmZlY3QuIEZvciBtb3JlIGNvbXBsZXggdmlzdWFsIGVmZmVjdHMsIHNlZVxuICogW2Jhc2ljLWFuaW1hdGlvbi1zdGFnZV0oLi4vYmFzaWMtYW5pbWF0aW9uLXN0YWdlKSwgd2hpY2ggdGFrZXMgYWR2YW50YWdlIG9mXG4gKiB0aGUgV2ViIEFuaW1hdGlvbnMgQVBJLlxuICpcbiAqIFRoaXMgY29tcG9uZW50IGhhbmRsZXMgdGhlIHJlbmRlcmluZyByZXNwb25zaWJpbGl0aWVzIGZvciB0aGUgYmFzaWMtY2Fyb3VzZWxcbiAqIGNvbXBvbmVudC5cbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBjdXJyZW50bHkgcmVxdWlyZXMgdGhhdCB5b3UgZXhwbGljaXRseSBhcHBseSBhIHNpemUgdG8gaXQuXG4gKlxuICogQGV4dGVuZHMgRWxlbWVudEJhc2VcbiAqL1xuY2xhc3MgU2xpZGluZ1ZpZXdwb3J0IGV4dGVuZHMgYmFzZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnNlbGVjdGVkRnJhY3Rpb24gPSAwO1xuICAgIHRoaXMuc2hvd1RyYW5zaXRpb24gPSB0cnVlO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKSB7IHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7IH1cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgZ2V0IGNvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuJC5zbGlkaW5nQ29udGFpbmVyLmNvbnRlbnQ7XG4gIH1cblxuICBnZXQgaXRlbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuJC5zbGlkaW5nQ29udGFpbmVyLml0ZW1zO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmIChzdXBlci5yZW5kZXIpIHsgc3VwZXIucmVuZGVyKCk7IH1cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyU2VsZWN0aW9uLmJpbmQodGhpcykpO1xuICB9XG5cbiAgZ2V0IHNlbGVjdGVkRnJhY3Rpb24oKSB7XG4gICAgcmV0dXJuIHN1cGVyLnNlbGVjdGVkRnJhY3Rpb247XG4gIH1cbiAgc2V0IHNlbGVjdGVkRnJhY3Rpb24odmFsdWUpIHtcbiAgICBpZiAoJ3NlbGVjdGVkRnJhY3Rpb24nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkRnJhY3Rpb24gPSB2YWx1ZTsgfVxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBnZXQgc2VsZWN0ZWRJbmRleCgpIHtcbiAgICBjb25zdCBpdGVtcyA9IHRoaXMuaXRlbXM7XG4gICAgY29uc3Qgc2VsZWN0ZWRJdGVtID0gdGhpcy5zZWxlY3RlZEl0ZW07XG4gICAgcmV0dXJuIGl0ZW1zICYmIHNlbGVjdGVkSXRlbSA/XG4gICAgICBpdGVtcy5pbmRleE9mKHNlbGVjdGVkSXRlbSkgOlxuICAgICAgLTE7XG4gIH1cbiAgc2V0IHNlbGVjdGVkSW5kZXgoaW5kZXgpIHtcbiAgICBpZiAoJ3NlbGVjdGVkSW5kZXgnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkSW5kZXggPSBpbmRleDsgfVxuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLml0ZW1zICYmIHRoaXMuaXRlbXNbaW5kZXhdO1xuICAgIGlmIChpdGVtKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IGl0ZW07XG4gICAgfVxuICB9XG5cbiAgZ2V0IHNlbGVjdGVkSXRlbSgpIHtcbiAgICByZXR1cm4gdGhpc1tzZWxlY3RlZEl0ZW1TeW1ib2xdO1xuICB9XG4gIHNldCBzZWxlY3RlZEl0ZW0oaXRlbSkge1xuICAgIGlmICgnc2VsZWN0ZWRJdGVtJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEl0ZW0gPSBpdGVtOyB9XG4gICAgdGhpc1tzZWxlY3RlZEl0ZW1TeW1ib2xdID0gaXRlbTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgZ2V0IHNob3dUcmFuc2l0aW9uKCkge1xuICAgIHJldHVybiBzdXBlci5zaG93VHJhbnNpdGlvbiB8fCB0aGlzLmNsYXNzTGlzdC5jb250YWlucygnc2hvd1RyYW5zaXRpb24nKTtcbiAgfVxuICBzZXQgc2hvd1RyYW5zaXRpb24odmFsdWUpIHtcbiAgICBpZiAoJ3Nob3dUcmFuc2l0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zaG93VHJhbnNpdGlvbiA9IHZhbHVlOyB9XG4gICAgdGhpcy5yZWZsZWN0Q2xhc3MoJ3Nob3dUcmFuc2l0aW9uJywgdmFsdWUpO1xuICB9XG5cbiAgZ2V0IFtzeW1ib2xzLnRlbXBsYXRlXSgpIHtcbiAgICByZXR1cm4gYFxuICAgICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICAjc2xpZGluZ0NvbnRhaW5lciB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAvKlxuICAgICAgICAgU2V0IHdpZHRoIGZvciBJRS9FZGdlLiBJdCdzIG5vdCBjbGVhciB3aHkgdGhleSBuZWVkIHRoaXMsIGFuZCB0aGUgb3RoZXJcbiAgICAgICAgIGJyb3dzZXJzIGRvbid0LlxuICAgICAgICAgKi9cbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gICAgICB9XG5cbiAgICAgIDpob3N0KC5zaG93VHJhbnNpdGlvbikgI3NsaWRpbmdDb250YWluZXIge1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMnMgZWFzZS1vdXQ7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2Utb3V0O1xuICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGJhc2ljLXNwcmVhZC1pdGVtcyBpZD1cInNsaWRpbmdDb250YWluZXJcIiByb2xlPVwibm9uZVwiPlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICA8L2Jhc2ljLXNwcmVhZC1pdGVtcz5cbiAgICBgO1xuICB9XG5cbn1cblxuXG4vLyBOb3RlOiBJbiB0aGlzIHJvdXRpbmUsIFwidGhpc1wiIGlzIGJvdW5kIHRvIGFuIGVsZW1lbnQgaW5zdGFuY2UuXG5mdW5jdGlvbiByZW5kZXJTZWxlY3Rpb24oKSB7XG4gIGlmICghdGhpcy5zZWxlY3RlZEl0ZW0pIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3Qgc2VsZWN0aW9uID0gRnJhY3Rpb25hbFNlbGVjdGlvbk1peGluLmhlbHBlcnMuZWxlbWVudFNlbGVjdGlvbih0aGlzKTtcbiAgY29uc3QgaXRlbUNvdW50ID0gdGhpcy5pdGVtcyA/IHRoaXMuaXRlbXMubGVuZ3RoIDogMDtcbiAgY29uc3QgZGFtcGVkID0gRnJhY3Rpb25hbFNlbGVjdGlvbk1peGluLmhlbHBlcnMuZGFtcGVkU2VsZWN0aW9uKHNlbGVjdGlvbiwgaXRlbUNvdW50KTtcbiAgLy8gVXNlIGEgcGVyY2VudGFnZSBzbyB0aGUgdHJhbnNmb3JtIHdpbGwgc3RpbGwgd29yayBpZiBzY3JlZW4gc2l6ZSBjaGFuZ2VzXG4gIC8vIChlLmcuLCBpZiBkZXZpY2Ugb3JpZW50YXRpb24gY2hhbmdlcykuXG4gIGNvbnN0IGxlZnQgPSAtZGFtcGVkICogMTAwO1xuICBjb25zdCB0cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgnICsgbGVmdCArICclKSc7XG4gIHRoaXMuJC5zbGlkaW5nQ29udGFpbmVyLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgdGhpcy4kLnNsaWRpbmdDb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xufVxuXG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYmFzaWMtc2xpZGluZy12aWV3cG9ydCcsIFNsaWRpbmdWaWV3cG9ydCk7XG5leHBvcnQgZGVmYXVsdCBTbGlkaW5nVmlld3BvcnQ7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHRyYW5zcGlsZWQgdG8gY3JlYXRlIGFuIEVTNS1jb21wYXRpYmxlIGRpc3RyaWJ1dGlvbiBpbiB3aGljaFxuICogdGhlIHBhY2thZ2UncyBtYWluIGZlYXR1cmUocykgYXJlIGF2YWlsYWJsZSB2aWEgdGhlIHdpbmRvdy5CYXNpYyBnbG9iYWwuXG4gKiBJZiB5b3UncmUgYWxyZWFkeSB1c2luZyBFUzYgeW91cnNlbGYsIGlnbm9yZSB0aGlzIGZpbGUsIGFuZCBpbnN0ZWFkIGltcG9ydFxuICogdGhlIHNvdXJjZSBmaWxlKHMpIHlvdSB3YW50IGZyb20gdGhlIHNyYyBmb2xkZXIuXG4gKi9cblxuaW1wb3J0IFNwcmVhZEl0ZW1zIGZyb20gJy4vc3JjL1NwcmVhZEl0ZW1zJztcblxud2luZG93LkJhc2ljID0gd2luZG93LkJhc2ljIHx8IHt9O1xud2luZG93LkJhc2ljLlNwcmVhZEl0ZW1zID0gU3ByZWFkSXRlbXM7XG4iLCJpbXBvcnQgRWxlbWVudEJhc2UgZnJvbSAnLi4vLi4vYmFzaWMtZWxlbWVudC1iYXNlL3NyYy9FbGVtZW50QmFzZSc7XG5pbXBvcnQgRGlzdHJpYnV0ZWRDaGlsZHJlbkNvbnRlbnRNaXhpbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXN0cmlidXRlZENoaWxkcmVuQ29udGVudE1peGluJztcbmltcG9ydCBzeW1ib2xzIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL3N5bWJvbHMnO1xuXG5cbi8qKlxuICogU3ByZWFkcyBvdXQgYSBzZXQgb2YgaXRlbXMgaG9yaXpvbnRhbGx5IHNvIHRoZXkgdGFrZSBlcXVhbCBzcGFjZS5cbiAqXG4gKiBbTGl2ZSBkZW1vXShodHRwOi8vYmFzaWN3ZWJjb21wb25lbnRzLm9yZy9iYXNpYy13ZWItY29tcG9uZW50cy9wYWNrYWdlcy9iYXNpYy1zcHJlYWQtaXRlbXMvKVxuICpcbiAqIFRoaXMgY29tcG9uZW50IGlzIHVzZWQsIGZvciBleGFtcGxlLCBieSB0aGUgYmFzaWMtc2xpZGluZy12aWV3cG9ydCBjb21wb25lbnRcbiAqIHRvIGVuc3VyZSB0aGF0IGNoaWxkcmVuIG9mIGRpZmZlcmVudCBzaXplIHdpbGwgdGFrZSB1cCB0aGUgc2FtZSBhbW91bnQgb2ZcbiAqIGhvcml6b250YWwgc3BhY2UuXG4gKlxuICogVGhpcyBjb21wb25lbnQgY3VycmVudGx5IHJlcXVpcmVzIGFuIGV4cGxpY2l0IHNpemUgYnkgYXBwbGllZCB0byBpdC5cbiAqXG4gKiBAZXh0ZW5kcyBFbGVtZW50QmFzZVxuICogQG1peGVzIERpc3RyaWJ1dGVkQ2hpbGRyZW5Db250ZW50TWl4aW5cbiAqL1xuY2xhc3MgU3ByZWFkSXRlbXMgZXh0ZW5kcyBFbGVtZW50QmFzZS5jb21wb3NlKFxuICBEaXN0cmlidXRlZENoaWxkcmVuQ29udGVudE1peGluXG4pIHtcblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBpZiAoc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2spIHsgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTsgfVxuICAgIC8vIEhBQ0tcbiAgICB0aGlzW3N5bWJvbHMuaXRlbXNDaGFuZ2VkXSgpO1xuICB9XG5cbiAgZ2V0IGl0ZW1zKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XG4gIH1cblxuICAvLyBUT0RPOiBTaG91bGQgYWxzbyBoYW5kbGUgY29udGVudENoYW5nZWQoKSwgYnV0IG5lZWQgdG8gcmF0aW9uYWxpemUgd2l0aFxuICAvLyBpbnZvY2F0aW9uIG9mIFtzeW1ib2xzLml0ZW1zQ2hhbmdlZF0gaW4gY29ubmVjdGVkQ2FsbGJhY2suXG4gIFtzeW1ib2xzLml0ZW1zQ2hhbmdlZF0oKSB7XG4gICAgaWYgKHN1cGVyW3N5bWJvbHMuaXRlbXNDaGFuZ2VkXSkgeyBzdXBlcltzeW1ib2xzLml0ZW1zQ2hhbmdlZF0oKTsgfVxuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5pdGVtcztcbiAgICBjb25zdCBjb3VudCA9IGl0ZW1zLmxlbmd0aDtcbiAgICB0aGlzLiQuc3ByZWFkQ29udGFpbmVyLnN0eWxlLndpZHRoID0gKGNvdW50ICogMTAwKSArICclJztcbiAgICBjb25zdCBpdGVtV2lkdGggPSAoMTAwIC8gY291bnQpICsgXCIlXCI7XG4gICAgW10uZm9yRWFjaC5jYWxsKGl0ZW1zLCBpdGVtID0+IHtcbiAgICAgIGl0ZW0uc3R5bGUud2lkdGggPSBpdGVtV2lkdGg7XG4gICAgfSk7XG4gIH1cblxuICBnZXQgW3N5bWJvbHMudGVtcGxhdGVdKCkge1xuICAgIHJldHVybiBgXG4gICAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuXG4gICAgICAjc3ByZWFkQ29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgI3NwcmVhZENvbnRhaW5lciA6OnNsb3R0ZWQoKikge1xuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICBvYmplY3QtZml0OiB2YXIoLS1iYXNpYy1pdGVtLW9iamVjdC1maXQsIGNvbnRhaW4pO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xuICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBpZD1cInNwcmVhZENvbnRhaW5lclwiIHJvbGU9XCJub25lXCI+XG4gICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxufVxuXG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYmFzaWMtc3ByZWFkLWl0ZW1zJywgU3ByZWFkSXRlbXMpO1xuZXhwb3J0IGRlZmF1bHQgU3ByZWFkSXRlbXM7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHRyYW5zcGlsZWQgdG8gY3JlYXRlIGFuIEVTNS1jb21wYXRpYmxlIGRpc3RyaWJ1dGlvbiBpbiB3aGljaFxuICogdGhlIHBhY2thZ2UncyBtYWluIGZlYXR1cmUocykgYXJlIGF2YWlsYWJsZSB2aWEgdGhlIHdpbmRvdy5CYXNpYyBnbG9iYWwuXG4gKiBJZiB5b3UncmUgYWxyZWFkeSB1c2luZyBFUzYgeW91cnNlbGYsIGlnbm9yZSB0aGlzIGZpbGUsIGFuZCBpbnN0ZWFkIGltcG9ydFxuICogdGhlIHNvdXJjZSBmaWxlKHMpIHlvdSB3YW50IGZyb20gdGhlIHNyYyBmb2xkZXIuXG4gKi9cblxuaW1wb3J0IFRhYlN0cmlwIGZyb20gJy4vc3JjL1RhYlN0cmlwJztcbmltcG9ydCBUYWJTdHJpcE1peGluIGZyb20gJy4vc3JjL1RhYlN0cmlwTWl4aW4nO1xuXG53aW5kb3cuQmFzaWMgPSB3aW5kb3cuQmFzaWMgfHwge307XG53aW5kb3cuQmFzaWMuVGFiU3RyaXAgPSBUYWJTdHJpcDtcbndpbmRvdy5CYXNpYy5UYWJTdHJpcE1peGluID0gVGFiU3RyaXBNaXhpbjtcbiIsIi8vIGltcG9ydCBDbGlja1NlbGVjdGlvbk1peGluIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NsaWNrU2VsZWN0aW9uTWl4aW4nO1xuaW1wb3J0IENvbnRlbnRJdGVtc01peGluIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NvbnRlbnRJdGVtc01peGluJztcbmltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvY3JlYXRlU3ltYm9sJztcbmltcG9ydCBEaXJlY3Rpb25TZWxlY3Rpb25NaXhpbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXJlY3Rpb25TZWxlY3Rpb25NaXhpbic7XG5pbXBvcnQgRGlzdHJpYnV0ZWRDaGlsZHJlbkNvbnRlbnRNaXhpbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXN0cmlidXRlZENoaWxkcmVuQ29udGVudE1peGluJztcbmltcG9ydCBFbGVtZW50QmFzZSBmcm9tICcuLi8uLi9iYXNpYy1lbGVtZW50LWJhc2Uvc3JjL0VsZW1lbnRCYXNlJztcbmltcG9ydCBHZW5lcmljTWl4aW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvR2VuZXJpY01peGluJztcbmltcG9ydCBLZXlib2FyZERpcmVjdGlvbk1peGluIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0tleWJvYXJkRGlyZWN0aW9uTWl4aW4nO1xuaW1wb3J0IEtleWJvYXJkTWl4aW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvS2V5Ym9hcmRNaXhpbic7XG5pbXBvcnQgcmVuZGVyQXJyYXlBc0VsZW1lbnRzIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL3JlbmRlckFycmF5QXNFbGVtZW50cyc7XG5pbXBvcnQgU2luZ2xlU2VsZWN0aW9uTWl4aW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2luZ2xlU2VsZWN0aW9uTWl4aW4nO1xuaW1wb3J0IHN5bWJvbHMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvc3ltYm9scyc7XG5pbXBvcnQgdG9nZ2xlQ2xhc3MgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvdG9nZ2xlQ2xhc3MnO1xuXG5cbi8vIFN5bWJvbHMgZm9yIHByaXZhdGUgZGF0YSBtZW1iZXJzIG9uIGFuIGVsZW1lbnQuXG5jb25zdCBwYW5lbHNTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3BhbmVscycpO1xuY29uc3Qgc3ByZWFkVGFic1N5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnc3ByZWFkVGFicycpO1xuY29uc3QgdGFiUG9zaXRpb25TeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3RhYlBvc2l0aW9uJyk7XG5cblxuLyoqXG4gKiBBIHNldCBvZiBwYWdlcyB3aXRoIGEgdGFiIHN0cmlwIGdvdmVybmluZyB3aGljaCBwYWdlIGlzIHNob3duLlxuICpcbiAqIFRoaXMgc3RvY2sgY29tYmluYXRpb24gYXBwbGllcyB0aGUgW1RhYlN0cmlwTWl4aW5dKC4uL2Jhc2ljLXRhYi1zdHJpcC8pIHRvIGFcbiAqIFtiYXNpYy1tb2Rlc10oLi4vYmFzaWMtbW9kZXMvKSBlbGVtZW50LiBJZiB5b3UnZCBsaWtlIHRvIGNyZWF0ZSBzb21ldGhpbmdcbiAqIG1vcmUgY29tcGxleCB0aGFuIHRoaXMgYXJyYW5nZW1lbnQsIHlvdSBjYW4gdXNlIGVpdGhlciBvZiB0aG9zZSBlbGVtZW50cyBvblxuICogaXRzIG93bi5cbiAqXG4gKiBTaW5jZSB0aGlzIGNvbXBvbmVudCB1c2VzIGBUYWJTdHJpcE1peGluYCwgaXQgb2J0YWlucyB0aGUgbmFtZXMgb2YgdGhlXG4gKiBpbmRpdmlkdWFsIHRhYnMgZnJvbSBhIGNoaWxkJ3MgYGFyaWEtbGFiZWxgIHByb3BlcnR5LiBFeGFtcGxlOlxuICpcbiAqICAgICA8YmFzaWMtdGFicz5cbiAqICAgICAgIDxkaXYgYXJpYS1sYWJlbD1cIk9uZVwiPlBhZ2Ugb25lPC9kaXY+XG4gKiAgICAgICA8ZGl2IGFyaWEtbGFiZWw9XCJUd29cIj5QYWdlIHR3bzwvZGl2PlxuICogICAgICAgPGRpdiBhcmlhLWxhYmVsPVwiVGhyZWVcIj5QYWdlIHRocmVlPC9kaXY+XG4gKiAgICAgPC9iYXNpYy10YWJzPlxuICpcbiAqIEBleHRlbmRzIEVsZW1lbnRCYXNlXG4gKiBAbWl4ZXMgQ2xpY2tTZWxlY3Rpb25NaXhpblxuICogQG1peGVzIENvbnRlbnRJdGVtc01peGluXG4gKiBAbWl4ZXMgRGlyZWN0aW9uU2VsZWN0aW9uTWl4aW5cbiAqIEBtaXhlcyBEaXN0cmlidXRlZENoaWxkcmVuQ29udGVudE1peGluXG4gKiBAbWl4ZXMgR2VuZXJpY01peGluXG4gKiBAbWl4ZXMgS2V5Ym9hcmRNaXhpblxuICogQG1peGVzIEtleWJvYXJkRGlyZWN0aW9uTWl4aW5cbiAqIEBtaXhlcyBTaW5nbGVTZWxlY3Rpb25NaXhpblxuICovXG5jbGFzcyBUYWJTdHJpcCBleHRlbmRzIEVsZW1lbnRCYXNlLmNvbXBvc2UoXG4gIC8vIENsaWNrU2VsZWN0aW9uTWl4aW4sXG4gIERpcmVjdGlvblNlbGVjdGlvbk1peGluLFxuICBHZW5lcmljTWl4aW4sXG4gIEtleWJvYXJkTWl4aW4sXG4gIEtleWJvYXJkRGlyZWN0aW9uTWl4aW4sXG4gIENvbnRlbnRJdGVtc01peGluLFxuICBEaXN0cmlidXRlZENoaWxkcmVuQ29udGVudE1peGluLFxuICBTaW5nbGVTZWxlY3Rpb25NaXhpblxuKSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8vIEhhbmRsZSBjbGlja3MvRW50ZXIgb24gdGFiIGJ1dHRvbnMuXG4gICAgLy8gVE9ETzogUmF0aW9uYWxpemUgd2l0aCBDbGlja1NlbGVjdGlvbj9cbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgY29uc3QgdGFiID0gZXZlbnQucGF0aFswXTtcbiAgICAgIGNvbnN0IGluZGV4ID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbCh0aGlzLml0ZW1zLCB0YWIpO1xuICAgICAgaWYgKGluZGV4ID49IDAgJiYgdGhpcy5zZWxlY3RlZEluZGV4ICE9PSBpbmRleCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBpbmRleDtcbiAgICAgICAgLy8gTm90ZTogV2UgZG9uJ3QgY2FsbCBwcmV2ZW50RGVmYXVsdCBoZXJlLiBUaGUgZGVmYXVsdCBiZWhhdmlvciBmb3JcbiAgICAgICAgLy8gbW91c2Vkb3duIGluY2x1ZGVzIHNldHRpbmcga2V5Ym9hcmQgZm9jdXMgaWYgdGhlIGVsZW1lbnQgZG9lc24ndFxuICAgICAgICAvLyBhbHJlYWR5IGhhdmUgdGhlIGZvY3VzLCBhbmQgd2Ugd2FudCB0byBwcmVzZXJ2ZSB0aGF0IGJlaGF2aW9yLlxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFNldCBkZWZhdWx0cy5cbiAgICBpZiAodHlwZW9mIHRoaXMudGFiUG9zaXRpb24gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnRhYlBvc2l0aW9uID0gdGhpc1tzeW1ib2xzLmRlZmF1bHRzXS50YWJQb3NpdGlvbjtcbiAgICB9XG4gIH1cblxuICBnZXQgW3N5bWJvbHMuZGVmYXVsdHNdKCkge1xuICAgIGNvbnN0IGRlZmF1bHRzID0gc3VwZXJbc3ltYm9scy5kZWZhdWx0c10gfHwge307XG4gICAgZGVmYXVsdHMudGFiaW5kZXggPSBudWxsO1xuICAgIGRlZmF1bHRzLnRhYlBvc2l0aW9uID0gJ3RvcCc7XG4gICAgcmV0dXJuIGRlZmF1bHRzO1xuICB9XG5cbiAgZ2V0IGl0ZW1zKCkge1xuICAgIHJldHVybiB0aGlzLiQudGFicy5jaGlsZHJlbjtcbiAgfVxuXG4gIFtzeW1ib2xzLml0ZW1TZWxlY3RlZF0oaXRlbSwgc2VsZWN0ZWQpIHtcbiAgICBpZiAoc3VwZXJbc3ltYm9scy5pdGVtU2VsZWN0ZWRdKSB7IHN1cGVyW3N5bWJvbHMuaXRlbVNlbGVjdGVkXShpdGVtLCBzZWxlY3RlZCk7IH1cbiAgICBhcHBseVNlbGVjdGlvblRvVGFiKGl0ZW0sIHNlbGVjdGVkKTtcbiAgfVxuXG4gIFtzeW1ib2xzLmtleWRvd25dKGV2ZW50KSB7XG4gICAgY29uc3QgaGFuZGxlZCA9IHN1cGVyW3N5bWJvbHMua2V5ZG93bl0gJiYgc3VwZXJbc3ltYm9scy5rZXlkb3duXShldmVudCk7XG4gICAgaWYgKGhhbmRsZWQgJiYgdGhpcy5zZWxlY3RlZEl0ZW0pIHtcbiAgICAgIC8vIElmIHRoZSBldmVudCByZXN1bHRlZCBpbiBhIGNoYW5nZSBvZiBzZWxlY3Rpb24sIG1vdmUgdGhlIGZvY3VzIHRvIHRoZVxuICAgICAgLy8gbmV3bHktc2VsZWN0ZWQgdGFiLlxuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0uZm9jdXMoKTtcbiAgICB9XG4gICAgcmV0dXJuIGhhbmRsZWQ7XG4gIH1cblxuICBnZXQgcGFuZWxzKCkge1xuICAgIHJldHVybiB0aGlzW3BhbmVsc1N5bWJvbF07XG4gIH1cbiAgc2V0IHBhbmVscyhwYW5lbHMpIHtcbiAgICB0aGlzW3BhbmVsc1N5bWJvbF0gPSBwYW5lbHM7XG5cbiAgICAvLyBDcmVhdGUgb25lIHRhYiBmb3IgZWFjaCBwYW5lbC5cbiAgICBjb25zdCBzZWxlY3RlZEluZGV4ID0gdGhpcy5zZWxlY3RlZEluZGV4O1xuICAgIGNvbnN0IHNlbGVjdGVkUGFuZWwgPSBwYW5lbHNbc2VsZWN0ZWRJbmRleF07XG4gICAgcmVuZGVyQXJyYXlBc0VsZW1lbnRzKHBhbmVscywgdGhpcy4kLnRhYnMsIChwYW5lbCwgdGFiKSA9PiB7XG4gICAgICBpZiAoIXRhYikge1xuICAgICAgICB0YWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoJ3RhYicpO1xuICAgICAgICB0YWIuY2xhc3NMaXN0LmFkZCgnc3R5bGUtc2NvcGUnKTtcbiAgICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoJ2Jhc2ljLXRhYi1zdHJpcCcpO1xuICAgICAgICB0YWIuc2V0QXR0cmlidXRlKCdyb2xlJywgJ3RhYicpO1xuICAgICAgICB0YWIuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIDApO1xuICAgICAgfVxuICAgICAgdGFiLmlkID0gcGFuZWwuaWQgKyAnX3RhYic7XG4gICAgICB0YWIudGV4dENvbnRlbnQgPSBwYW5lbC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKTtcblxuICAgICAgLy8gUG9pbnQgdGFiIGFuZCBwYW5lbCBhdCBlYWNoIG90aGVyLlxuICAgICAgdGFiLnNldEF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycsIHBhbmVsLmlkKTtcbiAgICAgIHBhbmVsLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbGxlZGJ5JywgdGFiLmlkKTtcblxuICAgICAgYXBwbHlTZWxlY3Rpb25Ub1RhYih0YWIsIHBhbmVsID09PSBzZWxlY3RlZFBhbmVsKTtcblxuICAgICAgcmV0dXJuIHRhYjtcbiAgICB9KTtcblxuICAgIHRoaXNbc3ltYm9scy5pdGVtc0NoYW5nZWRdKCk7XG4gIH1cblxuICBnZXQgc3ByZWFkVGFicygpIHtcbiAgICByZXR1cm4gdGhpc1tzcHJlYWRUYWJzU3ltYm9sXTtcbiAgfVxuICBzZXQgc3ByZWFkVGFicyh2YWx1ZSkge1xuICAgIHRoaXNbc3ByZWFkVGFic1N5bWJvbF0gPSB2YWx1ZTtcbiAgICB0b2dnbGVDbGFzcyh0aGlzLCAnc3ByZWFkJywgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBwb3NpdGlvbiBvZiB0aGUgdGFiIHN0cmlwIHJlbGF0aXZlIHRvIHRoZSBlbGVtZW50J3MgY2hpbGRyZW4uIFZhbGlkXG4gICAqIHZhbHVlcyBhcmUgXCJ0b3BcIiwgXCJsZWZ0XCIsIFwicmlnaHRcIiwgYW5kIFwiYm90dG9tXCIuXG4gICAqXG4gICAqIEBkZWZhdWx0IFwidG9wXCJcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCB0YWJQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpc1t0YWJQb3NpdGlvblN5bWJvbF07XG4gIH1cbiAgc2V0IHRhYlBvc2l0aW9uKHBvc2l0aW9uKSB7XG4gICAgdGhpc1t0YWJQb3NpdGlvblN5bWJvbF0gPSBwb3NpdGlvbjtcbiAgICB0aGlzLnJlZmxlY3RBdHRyaWJ1dGUoJ3RhYi1wb3NpdGlvbicsIHBvc2l0aW9uKTtcbiAgICB0aGlzLm5hdmlnYXRpb25BeGlzID0gKHBvc2l0aW9uID09PSAndG9wJyB8fCBwb3NpdGlvbiA9PT0gJ2JvdHRvbScpID9cbiAgICAgICdob3Jpem9udGFsJyA6XG4gICAgICAndmVydGljYWwnO1xuICB9XG5cbiAgZ2V0IFtzeW1ib2xzLnRlbXBsYXRlXSgpIHtcbiAgICByZXR1cm4gYFxuICAgICAgPHN0eWxlPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cblxuICAgICAgICAvKlxuICAgICAgICAgKiBBdm9pZCBoYXZpbmcgdGFiIGNvbnRhaW5lciBzdHJldGNoIGFjcm9zcy4gVXNlciB3b24ndCBiZSBhYmxlIHRvIHNlZVxuICAgICAgICAgKiBpdCwgYnV0IHNpbmNlIGl0IGhhbmRsZXMgdGhlIGtleWJvYXJkLCBpbiBNb2JpbGUgU2FmYXJpIGEgdGFwIG9uIHRoZVxuICAgICAgICAgKiBjb250YWluZXIgYmFja2dyb3VuZCB3aWxsIGNhdXNlIHRoZSByZWdpb24gdG8gZmxhc2guIEFsaWduaW5nIHRoZVxuICAgICAgICAgKiByZWdpb24gY29sbGFwc2VzIGl0IGRvd24gdG8gaG9sZCBpdHMgY29udGVudHMuXG4gICAgICAgICAqL1xuICAgICAgICAjdGFicyB7XG4gICAgICAgICAgLyogRm9yIElFIGJ1ZyAoY2xpY2tpbmcgdGFiIHByb2R1Y2VzIGdhcCBiZXR3ZWVuIHRhYiBhbmQgcGFnZSkuICovXG4gICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgLXdlYmtpdC1mbGV4OiAxO1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgLypcbiAgICAgICAgICAgKiBUcnkgdG8gb2J0YWluIGZhc3QtdGFwIGJlaGF2aW9yIG9uIGFsbCB0YWJzLlxuICAgICAgICAgICAqIFNlZSBodHRwczovL3dlYmtpdC5vcmcvYmxvZy81NjEwL21vcmUtcmVzcG9uc2l2ZS10YXBwaW5nLW9uLWlvcy8uXG4gICAgICAgICAgICovXG4gICAgICAgICAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG4gICAgICAgIH1cbiAgICAgICAgOmhvc3QoOm5vdCguc3ByZWFkKSkgI3RhYnMge1xuICAgICAgICAgIC13ZWJraXQtYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRhYiB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW2dlbmVyaWM9XCJcIl0pIC50YWIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDAuNWVtIDAuNzVlbTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4yNXM7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbZ2VuZXJpYz1cIlwiXSkgLnRhYi5zZWxlY3RlZCB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjY2NjO1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbZ2VuZXJpYz1cIlwiXSkgLnRhYjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIExlZnQvcmlnaHQgcG9zaXRpb25zICovXG4gICAgICAgIDpob3N0KFt0YWItcG9zaXRpb249XCJsZWZ0XCJdKSAjdGFicyxcbiAgICAgICAgOmhvc3QoW3RhYi1wb3NpdGlvbj1cInJpZ2h0XCJdKSAjdGFicyB7XG4gICAgICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cblxuICAgICAgICAvKiBTcHJlYWQgdmFyaWFudCAqL1xuICAgICAgICA6aG9zdCguc3ByZWFkKSAjdGFicyB7XG4gICAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgICAgfVxuICAgICAgICA6aG9zdCguc3ByZWFkKSAudGFiIHtcbiAgICAgICAgICAtd2Via2l0LWZsZXg6IDE7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIEdlbmVyaWMgc3R5bGUsIHRvcC9ib3R0b20gcG9zaXRpb25zICovXG4gICAgICAgIDpob3N0KFtnZW5lcmljPVwiXCJdW3RhYi1wb3NpdGlvbj1cInRvcFwiXSkgLnRhYjpub3QoOmxhc3QtY2hpbGQpLFxuICAgICAgICA6aG9zdChbZ2VuZXJpYz1cIlwiXVt0YWItcG9zaXRpb249XCJib3R0b21cIl0pIC50YWI6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIEdlbmVyaWMgc3R5bGUsIHRvcCBwb3NpdGlvbiAqL1xuICAgICAgICA6aG9zdChbZ2VuZXJpYz1cIlwiXVt0YWItcG9zaXRpb249XCJ0b3BcIl0pIC50YWIge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVlbSAwLjI1ZW0gMCAwO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XG4gICAgICAgIH1cbiAgICAgICAgOmhvc3QoW2dlbmVyaWM9XCJcIl1bdGFiLXBvc2l0aW9uPVwidG9wXCJdKSAudGFiLnNlbGVjdGVkIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIEdlbmVyaWMgc3R5bGUsIGJvdHRvbSBwb3NpdGlvbiAqL1xuICAgICAgICA6aG9zdChbZ2VuZXJpYz1cIlwiXVt0YWItcG9zaXRpb249XCJib3R0b21cIl0pIC50YWIge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAwLjI1ZW0gMC4yNWVtO1xuICAgICAgICAgIG1hcmdpbi10b3A6IC0xcHg7XG4gICAgICAgIH1cbiAgICAgICAgOmhvc3QoW2dlbmVyaWM9XCJcIl1bdGFiLXBvc2l0aW9uPVwiYm90dG9tXCJdKSAudGFiLnNlbGVjdGVkIHtcbiAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIEdlbmVyaWMgc3R5bGUsIGxlZnQvcmlnaHQgcG9zaXRpb25zICovXG4gICAgICAgIDpob3N0KFtnZW5lcmljPVwiXCJdW3RhYi1wb3NpdGlvbj1cImxlZnRcIl0pIC50YWI6bm90KDpsYXN0LWNoaWxkKSxcbiAgICAgICAgOmhvc3QoW2dlbmVyaWM9XCJcIl1bdGFiLXBvc2l0aW9uPVwicmlnaHRcIl0pIC50YWI6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC4yZW07XG4gICAgICAgIH1cblxuICAgICAgICAvKiBHZW5lcmljIHN0eWxlLCBsZWZ0IHBvc2l0aW9uICovXG4gICAgICAgIDpob3N0KFtnZW5lcmljPVwiXCJdW3RhYi1wb3NpdGlvbj1cImxlZnRcIl0pIC50YWIge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVlbSAwIDAgMC4yNWVtO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogLTFweDtcbiAgICAgICAgfVxuICAgICAgICA6aG9zdChbZ2VuZXJpYz1cIlwiXVt0YWItcG9zaXRpb249XCJsZWZ0XCJdKSAudGFiLnNlbGVjdGVkIHtcbiAgICAgICAgICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLyogR2VuZXJpYyBzdHlsZSwgcmlnaHQgcG9zaXRpb24gKi9cbiAgICAgICAgOmhvc3QoW2dlbmVyaWM9XCJcIl1bdGFiLXBvc2l0aW9uPVwicmlnaHRcIl0pIC50YWIge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMC4yNWVtIDAuMjVlbSAwO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xuICAgICAgICB9XG4gICAgICAgIDpob3N0KFtnZW5lcmljPVwiXCJdW3RhYi1wb3NpdGlvbj1cInJpZ2h0XCJdKSAudGFiLnNlbGVjdGVkIHtcbiAgICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8ZGl2IGlkPVwidGFic1wiIHJvbGU9XCJ0YWJsaXN0XCI+PC9kaXY+XG4gICAgYDtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIGFwcGx5U2VsZWN0aW9uVG9UYWIodGFiLCBzZWxlY3RlZCkge1xuICB0YWIuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgc2VsZWN0ZWQpO1xufVxuXG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYmFzaWMtdGFiLXN0cmlwJywgVGFiU3RyaXApO1xuZXhwb3J0IGRlZmF1bHQgVGFiU3RyaXA7XG4iLCJpbXBvcnQgVGFiU3RyaXAgZnJvbSAnLi9UYWJTdHJpcCc7IC8vIGpzaGludCBpZ25vcmU6bGluZVxuaW1wb3J0IHN5bWJvbHMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvc3ltYm9scyc7XG5cblxuLy8gVXNlZCB0byBhc3NpZ24gdW5pcXVlIElEcyB0byB0YWJzIGZvciBBUklBIHB1cnBvc2VzLlxubGV0IGlkQ291bnQgPSAwO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggVGFiU3RyaXAuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBBIHRlbXBsYXRlIG1peGluIHdoaWNoIGFkZHMgc3RyaXAgb2YgdGFicyBmb3Igc2VsZWN0aW5nIG9uZSBvZiB0aGVcbiAgICogY29tcG9uZW50J3MgY2hpbGRyZW4uXG4gICAqXG4gICAqIFRoZSBjb21wb25lbnQgY3JlYXRlcyBhIHRhYiB0byByZXByZXNlbnQgZWFjaCBvZiBpdHMgbGlnaHQgRE9NIGNoaWxkcmVuLlxuICAgKiBUaGUgdGFiIG5hbWUgaXMgb2J0YWluZWQgYnkgZXhhbWluaW5nIHRoZSBjaGlsZHJlbiBmb3IgYW4gYGFyaWEtbGFiZWxgXG4gICAqIHByb3BlcnR5LlxuICAgKlxuICAgKiBVc2UgdGFicyB3aGVuIHlvdSB3YW50IHRvIHByb3ZpZGUgYSBsYXJnZSBzZXQgb2Ygb3B0aW9ucyBvciBlbGVtZW50cyB0aGFuXG4gICAqIGNhbiBjb21mb3J0YWJseSBmaXQgaW5saW5lLCB0aGUgb3B0aW9ucyBjYW4gYmUgY29oZXJlbnRseSBncm91cGVkIGludG8gcGFnZXMsXG4gICAqIGFuZCB5b3Ugd2FudCB0byBhdm9pZCBtYWtpbmcgdGhlIHVzZXIgbmF2aWdhdGUgdG8gYSBzZXBhcmF0ZSBwYWdlLiBUYWJzIHdvcmtcbiAgICogYmVzdCBpZiB5b3Ugb25seSBoYXZlIGEgc21hbGwgaGFuZGZ1bCBvZiBwYWdlcywgc2F5IDLigJM3LlxuICAgKlxuICAgKiBUaGUgYmFzaWMtdGFiLXN0cmlwIGNvbXBvbmVudCBkb2VzIG5vdCBkZWZpbmUgaG93IGEgc2VsZWN0ZWQgY2hpbGQgaXNcbiAgICogcmVwcmVzZW50ZWQuIElmIHlvdSdyZSBsb29raW5nIGZvciB0aGUgc3RhbmRhcmQgYmVoYXZpb3Igb2YganVzdCBzaG93aW5nIG9ubHlcbiAgICogdGhlIHNlbGVjdGVkIGNoaWxkLCB5b3UgY2FuIHVzZSB0aGlzIGNvbXBvbmVudCBpbiBjb21iaW5hdGlvbiB3aXRoIHRoZVxuICAgKiBzZXBhcmF0ZSBbYmFzaWMtbW9kZXNdKC4uL2Jhc2ljLW1vZGVzLykgY29tcG9uZW50LiBBIHR5cGljYWwgYXJyYW5nZW1lbnQ6XG4gICAqXG4gICAqICAgICA8YmFzaWMtdGFiLXN0cmlwPlxuICAgKiAgICAgICA8YmFzaWMtbW9kZXMgYXJpYS1sYWJlbD1cIlBhbmVsc1wiPlxuICAgKiAgICAgICAgIDxkaXYgYXJpYS1sYWJlbD1cIk9uZVwiPlBhZ2Ugb25lPC9kaXY+XG4gICAqICAgICAgICAgPGRpdiBhcmlhLWxhYmVsPVwiVHdvXCI+UGFnZSB0d288L2Rpdj5cbiAgICogICAgICAgICA8ZGl2IGFyaWEtbGFiZWw9XCJUaHJlZVwiPlBhZ2UgdGhyZWU8L2Rpdj5cbiAgICogICAgICAgPC9iYXNpYy1tb2Rlcz5cbiAgICogICAgIDwvYmFzaWMtdGFiLXN0cmlwPlxuICAgKlxuICAgKiBUaGUgYWJvdmUgY29tYmluYXRpb24gaXMgc28gY29tbW9uIGl0IGlzIHByb3ZpZGVkIGFzIGEgc2luZ2xlIGNvbXBvbmVudCxcbiAgICogW2Jhc2ljLXRhYnNdKC4uL2Jhc2ljLXRhYnMvKS5cbiAgICpcbiAgICogVGhlIHVzZXIgY2FuIHNlbGVjdCBhIHRhYiB3aXRoIHRoZSBtb3VzZSBvciB0b3VjaCwgYXMgd2VsbCBhcyBieSB0aHJvdWdoIHRoZVxuICAgKiBrZXlib2FyZC4gRWFjaCB0YWIgYXBwZWFycyBhcyBhIHNlcGFyYXRlIGJ1dHRvbiBpbiB0aGUgdGFiIG9yZGVyLlxuICAgKiBBZGRpdGlvbmFsbHksIGlmIHRoZSBmb2N1cyBpcyBjdXJyZW50bHkgb24gYSB0YWIsIHRoZSB1c2VyIGNhbiBxdWlja2x5XG4gICAqIG5hdmlnYXRlIGJldHdlZW4gdGFicyB3aXRoIHRoZSBsZWZ0L3JpZ2h0IGFycm93IGtleXMgKG9yLCBpZiB0aGUgdGFicyBhcmVcbiAgICogaW4gdmVydGljYWwgcG9zaXRpb24sIHRoZSB1cC9kb3duIGFycm93IGtleXMpLlxuICAgKlxuICAgKiBCeSBkZWZhdWx0LCB0aGUgdGFicyBhcmUgc2hvd24gZ3JvdXBlZCB0byB0aGUgbGVmdCwgd2hlcmUgZWFjaCB0YWIgaXMgb25seVxuICAgKiBhcyBiaWcgYXMgbmVjZXNzYXJ5LiBZb3UgY2FuIGFwcGx5IHRoZSBgc3ByZWFkYCBDU1MgY2xhc3MgdG8gYVxuICAgKiBiYXNpYy10YWItc3RyaXAgZWxlbWVudCBmb3IgYSB2YXJpYW50IGFwcGVhcmFuY2UgaW4gd2hpY2ggdGhlIGF2YWlsYWJsZSB3aWR0aFxuICAgKiBvZiB0aGUgZWxlbWVudCBpcyBkaXZpZGVkIHVwIGVxdWFsbHkgYW1vbmcgdGFicy5cbiAgICpcbiAgICogVGhlIEdlbmVyaWNNaXhpbiBkZWZhdWx0IHN0eWxpbmcgb2YgdGhlIHRhYiBzdHJpcCB3aWxsIHByZXNlbnQgdGhlIGNsYXNzaWNcbiAgICogc2tldW1vcnBoaWMgbG9vayBvZiByb3VuZGVkIHRhYnMgYXR0YWNoZWQgdG8gYSBzdXJmYWNlLiBZb3UgY2FuIHJlbW92ZSB0aGlzXG4gICAqIHN0eWxpbmcgYnkgc2V0dGluZyB0aGUgYEdlbmVyaWNNaXhpbmAgcHJvcGVydHkvYXR0cmlidXRlIHRvIGZhbHNlLlxuICAgKi9cbiAgY2xhc3MgVGFiU3RyaXAgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMuJC50YWJTdHJpcC5hZGRFdmVudExpc3RlbmVyKCdzZWxlY3RlZC1pdGVtLWNoYW5nZWQnLCBldmVudCA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkSW5kZXggPSBldmVudC50YXJnZXQuc2VsZWN0ZWRJbmRleDtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleCAhPT0gc2VsZWN0ZWRJbmRleCkge1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHNlbGVjdGVkSW5kZXg7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldCBbc3ltYm9scy5kZWZhdWx0c10oKSB7XG4gICAgICBjb25zdCBkZWZhdWx0cyA9IHN1cGVyW3N5bWJvbHMuZGVmYXVsdHNdIHx8IHt9O1xuICAgICAgZGVmYXVsdHMudGFiUG9zaXRpb24gPSAndG9wJztcbiAgICAgIHJldHVybiBkZWZhdWx0cztcbiAgICB9XG5cbiAgICBnZXQgZ2VuZXJpYygpIHtcbiAgICAgIHJldHVybiBzdXBlci5nZW5lcmljO1xuICAgIH1cbiAgICBzZXQgZ2VuZXJpYyh2YWx1ZSkge1xuICAgICAgaWYgKCdnZW5lcmljJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5nZW5lcmljID0gdmFsdWU7IH1cbiAgICAgIHRoaXMuJC50YWJTdHJpcC5nZW5lcmljID0gdmFsdWU7XG4gICAgfVxuXG4gICAgW3N5bWJvbHMuaXRlbXNDaGFuZ2VkXSgpIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLml0ZW1zQ2hhbmdlZF0pIHsgc3VwZXJbc3ltYm9scy5pdGVtc0NoYW5nZWRdKCk7IH1cblxuICAgICAgY29uc3QgYmFzZUlkID0gdGhpcy5pZCA/XG4gICAgICAgIFwiX1wiICsgdGhpcy5pZCArIFwiUGFuZWxcIiA6XG4gICAgICAgIFwiX3BhbmVsXCI7XG5cbiAgICAgIC8vIENvbmZpcm0gdGhhdCBpdGVtcyBoYXZlIGF0IGxlYXN0IGEgZGVmYXVsdCByb2xlIGFuZCBJRCBmb3IgQVJJQSBwdXJwb3Nlcy5cbiAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgLy8gaWYgKCFpdGVtLmdldEF0dHJpYnV0ZSgncm9sZScpKSB7XG4gICAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAndGFicGFuZWwnKTtcbiAgICAgICAgLy8gfVxuICAgICAgICBpZiAoIWl0ZW0uaWQpIHtcbiAgICAgICAgICBpdGVtLmlkID0gYmFzZUlkICsgaWRDb3VudCsrO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gUG9pbnQgdGhlIHRhYiBzdHJpcCBhdCB0aGUgcGFuZWxzLlxuICAgICAgdGhpcy4kLnRhYlN0cmlwLnBhbmVscyA9IHRoaXMuaXRlbXM7XG4gICAgICB0aGlzLiQudGFiU3RyaXAuc2VsZWN0ZWRJbmRleCA9IHRoaXMuc2VsZWN0ZWRJbmRleDtcbiAgICB9XG5cbiAgICBnZXQgc2VsZWN0ZWRJbmRleCgpIHtcbiAgICAgIHJldHVybiBzdXBlci5zZWxlY3RlZEluZGV4O1xuICAgIH1cbiAgICBzZXQgc2VsZWN0ZWRJbmRleCh2YWx1ZSkge1xuICAgICAgaWYgKCdzZWxlY3RlZEluZGV4JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEluZGV4ID0gdmFsdWU7IH1cbiAgICAgIGlmICh0aGlzLiQudGFiU3RyaXAuc2VsZWN0ZWRJbmRleCAhPT0gdmFsdWUpIHtcbiAgICAgICAgdGhpcy4kLnRhYlN0cmlwLnNlbGVjdGVkSW5kZXggPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgc3ByZWFkVGFicygpIHtcbiAgICAgIHJldHVybiB0aGlzLiQudGFiU3RyaXAuc3ByZWFkVGFicztcbiAgICB9XG4gICAgc2V0IHNwcmVhZFRhYnModmFsdWUpIHtcbiAgICAgIHRoaXMuJC50YWJTdHJpcC5zcHJlYWRUYWJzID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IHRhYlBvc2l0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuJC50YWJTdHJpcC50YWJQb3NpdGlvbjtcbiAgICB9XG4gICAgc2V0IHRhYlBvc2l0aW9uKHBvc2l0aW9uKSB7XG4gICAgICB0aGlzLiQudGFiU3RyaXAudGFiUG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgIHRoaXMucmVmbGVjdEF0dHJpYnV0ZSgndGFiLXBvc2l0aW9uJywgcG9zaXRpb24pO1xuXG4gICAgICAvLyBQaHlzaWNhbGx5IHJlb3JkZXIgdGhlIHRhYnMgYW5kIHBhZ2VzIHRvIHJlZmxlY3QgdGhlIGRlc2lyZWQgYXJyYW5nZW1lbnQuXG4gICAgICAvLyBXZSBjb3VsZCBjaGFuZ2UgdGhlIHZpc3VhbCBhcHBlYXJhbmNlIGJ5IHJldmVyc2luZyB0aGUgb3JkZXIgb2YgdGhlIGZsZXhcbiAgICAgIC8vIGJveCwgYnV0IHRoZW4gdGhlIHZpc3VhbCBvcmRlciB3b3VsZG4ndCByZWZsZWN0IHRoZSBkb2N1bWVudCBvcmRlciwgd2hpY2hcbiAgICAgIC8vIGRldGVybWluZXMgZm9jdXMgb3JkZXIuIFRoYXQgd291bGQgc3VycHJpc2UgYSB1c2VyIHRyeWluZyB0byB0YWIgdGhyb3VnaFxuICAgICAgLy8gdGhlIGNvbnRyb2xzLlxuICAgICAgY29uc3QgZmlyc3RFbGVtZW50ID0gKHBvc2l0aW9uID09PSAndG9wJyB8fCBwb3NpdGlvbiA9PT0gJ2xlZnQnKSA/XG4gICAgICAgIHRoaXMuJC50YWJTdHJpcCA6XG4gICAgICAgIHRoaXMuJC5wYWdlcztcbiAgICAgIGNvbnN0IGxhc3RFbGVtZW50ID0gKHBvc2l0aW9uID09PSAndG9wJyB8fCBwb3NpdGlvbiA9PT0gJ2xlZnQnKSA/XG4gICAgICAgIHRoaXMuJC5wYWdlcyA6XG4gICAgICAgIHRoaXMuJC50YWJTdHJpcDtcbiAgICAgIGlmIChmaXJzdEVsZW1lbnQubmV4dFNpYmxpbmcgIT09IGxhc3RFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuc2hhZG93Um9vdC5pbnNlcnRCZWZvcmUoZmlyc3RFbGVtZW50LCBsYXN0RWxlbWVudCk7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICBnZXQgW3N5bWJvbHMudGVtcGxhdGVdKCkge1xuICAgICAgY29uc3QgYmFzZVRlbXBsYXRlID0gc3VwZXJbc3ltYm9scy50ZW1wbGF0ZV0gfHwgJyc7XG4gICAgICByZXR1cm4gYFxuICAgICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICAjcGFnZXMge1xuICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIC13ZWJraXQtZmxleDogMTtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG5cbiAgICAgICAgI3BhZ2VzIDo6c2xvdHRlZCgqKSB7XG4gICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgLXdlYmtpdC1mbGV4OiAxO1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBMZWZ0L3JpZ2h0IHBvc2l0aW9ucyAqL1xuICAgICAgICA6aG9zdChbdGFiLXBvc2l0aW9uPVwibGVmdFwiXSksXG4gICAgICAgIDpob3N0KFt0YWItcG9zaXRpb249XCJyaWdodFwiXSkge1xuICAgICAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICB9XG5cbiAgICAgICAgLyogR2VuZXJpYyBzdHlsZSAqL1xuICAgICAgICA6aG9zdChbZ2VuZXJpYz1cIlwiXSkgI3BhZ2VzIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cbiAgICAgICAgPC9zdHlsZT5cblxuICAgICAgICA8YmFzaWMtdGFiLXN0cmlwIGlkPVwidGFiU3RyaXBcIiByb2xlPVwidGFibGlzdFwiPjwvYmFzaWMtdGFiLXN0cmlwPlxuICAgICAgICA8ZGl2IGlkPVwicGFnZXNcIj5cbiAgICAgICAgICAke2Jhc2VUZW1wbGF0ZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICBgO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIFRhYlN0cmlwO1xufTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgdHJhbnNwaWxlZCB0byBjcmVhdGUgYW4gRVM1LWNvbXBhdGlibGUgZGlzdHJpYnV0aW9uIGluIHdoaWNoXG4gKiB0aGUgcGFja2FnZSdzIG1haW4gZmVhdHVyZShzKSBhcmUgYXZhaWxhYmxlIHZpYSB0aGUgd2luZG93LkJhc2ljIGdsb2JhbC5cbiAqIElmIHlvdSdyZSBhbHJlYWR5IHVzaW5nIEVTNiB5b3Vyc2VsZiwgaWdub3JlIHRoaXMgZmlsZSwgYW5kIGluc3RlYWQgaW1wb3J0XG4gKiB0aGUgc291cmNlIGZpbGUocykgeW91IHdhbnQgZnJvbSB0aGUgc3JjIGZvbGRlci5cbiAqL1xuXG5pbXBvcnQgVGFicyBmcm9tICcuL3NyYy9UYWJzJztcblxud2luZG93LkJhc2ljID0gd2luZG93LkJhc2ljIHx8IHt9O1xud2luZG93LkJhc2ljLlRhYnMgPSBUYWJzO1xuIiwiaW1wb3J0IEdlbmVyaWNNaXhpbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9HZW5lcmljTWl4aW4nO1xuaW1wb3J0IE1vZGVzIGZyb20gJy4uLy4uL2Jhc2ljLW1vZGVzL3NyYy9Nb2Rlcyc7XG5pbXBvcnQgVGFiU3RyaXBNaXhpbiBmcm9tICcuLi8uLi9iYXNpYy10YWItc3RyaXAvc3JjL1RhYlN0cmlwTWl4aW4nO1xuXG5cbmNvbnN0IGJhc2UgPSBNb2Rlcy5jb21wb3NlKFxuICBHZW5lcmljTWl4aW4sXG4gIFRhYlN0cmlwTWl4aW5cbik7XG5cblxuLyoqXG4gKiBBIHNldCBvZiBwYWdlcyB3aXRoIGEgdGFiIHN0cmlwIGdvdmVybmluZyB3aGljaCBwYWdlIGlzIHNob3duLlxuICpcbiAqIFRoaXMgc3RvY2sgY29tYmluYXRpb24gYXBwbGllcyB0aGUgW1RhYlN0cmlwTWl4aW5dKC4uL2Jhc2ljLXRhYi1zdHJpcC8pIHRvIGFcbiAqIFtiYXNpYy1tb2Rlc10oLi4vYmFzaWMtbW9kZXMvKSBlbGVtZW50LiBJZiB5b3UnZCBsaWtlIHRvIGNyZWF0ZSBzb21ldGhpbmdcbiAqIG1vcmUgY29tcGxleCB0aGFuIHRoaXMgYXJyYW5nZW1lbnQsIHlvdSBjYW4gdXNlIGVpdGhlciBvZiB0aG9zZSBlbGVtZW50cyBvblxuICogaXRzIG93bi5cbiAqXG4gKiBTaW5jZSB0aGlzIGNvbXBvbmVudCB1c2VzIGBUYWJTdHJpcE1peGluYCwgaXQgb2J0YWlucyB0aGUgbmFtZXMgb2YgdGhlXG4gKiBpbmRpdmlkdWFsIHRhYnMgZnJvbSBhIGNoaWxkJ3MgYGFyaWEtbGFiZWxgIHByb3BlcnR5LiBFeGFtcGxlOlxuICpcbiAqICAgICA8YmFzaWMtdGFicz5cbiAqICAgICAgIDxkaXYgYXJpYS1sYWJlbD1cIk9uZVwiPlBhZ2Ugb25lPC9kaXY+XG4gKiAgICAgICA8ZGl2IGFyaWEtbGFiZWw9XCJUd29cIj5QYWdlIHR3bzwvZGl2PlxuICogICAgICAgPGRpdiBhcmlhLWxhYmVsPVwiVGhyZWVcIj5QYWdlIHRocmVlPC9kaXY+XG4gKiAgICAgPC9iYXNpYy10YWJzPlxuICpcbiAqIEBleHRlbmRzIE1vZGVzXG4gKiBAbWl4ZXMgR2VuZXJpY01peGluXG4gKi9cbmNsYXNzIFRhYnMgZXh0ZW5kcyBiYXNlIHt9XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYmFzaWMtdGFicycsIFRhYnMpO1xuZXhwb3J0IGRlZmF1bHQgVGFicztcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgdHJhbnNwaWxlZCB0byBjcmVhdGUgYW4gRVM1LWNvbXBhdGlibGUgZGlzdHJpYnV0aW9uIG9mIGFsbFxuICogY29tcG9uZW50cyBpbiB0aGUgcHJvamVjdC4gSWYgeW91J3JlIGFscmVhZHkgdXNpbmcgRVM2IHlvdXJzZWxmLCBpZ25vcmUgdGhpc1xuICogZmlsZSwgYW5kIGluc3RlYWQgaW1wb3J0IHRoZSBzb3VyY2UgZmlsZShzKSB5b3Ugd2FudCBmcm9tIHRoZSBzcGVjaWZpY1xuICogcGFja2FnZSB5b3Ugd2FudC5cbiAqL1xuXG4vLyBJbXBvcnQgYWxsIHRoZSBnbG9iYWxzIGZyb20gZWFjaCBwYWNrYWdlLlxuLy8gV2UgdGVsbCBqc2hpbnQgdG8gaWdub3JlIHRoZSBmYWN0IHRoYXQgd2UncmUgbm90IGFjdHVhbGx5IHVzaW5nIHRoZW0gaGVyZS5cbi8qIGpzaGludCBpZ25vcmU6c3RhcnQgKi9cblxuaW1wb3J0ICogYXMgYW5pbWF0aW9uU3RhZ2UgZnJvbSAnLi4vYmFzaWMtYW5pbWF0aW9uLXN0YWdlL2dsb2JhbHMnO1xuaW1wb3J0ICogYXMgYXV0b3NpemVUZXh0YXJlYSBmcm9tICcuLi9iYXNpYy1hdXRvc2l6ZS10ZXh0YXJlYS9nbG9iYWxzJztcbmltcG9ydCAqIGFzIGNhcm91c2VsIGZyb20gJy4uL2Jhc2ljLWNhcm91c2VsL2dsb2JhbHMnO1xuaW1wb3J0ICogYXMgY29sbGFwc2libGVQYW5lbCBmcm9tICcuLi9iYXNpYy1jb2xsYXBzaWJsZS1wYW5lbC9nbG9iYWxzJztcbmltcG9ydCAqIGFzIGNvbXBvbmVudE1peGlucyBmcm9tICcuLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL2dsb2JhbHMnO1xuaW1wb3J0ICogYXMgY3VycmVudEFuY2hvciBmcm9tICcuLi9iYXNpYy1jdXJyZW50LWFuY2hvci9nbG9iYWxzJztcbmltcG9ydCAqIGFzIGVsZW1lbnRCYXNlIGZyb20gJy4uL2Jhc2ljLWVsZW1lbnQtYmFzZS9nbG9iYWxzJztcbmltcG9ydCAqIGFzIGZhZGVPdmVyZmxvdyBmcm9tICcuLi9iYXNpYy1mYWRlLW92ZXJmbG93L2dsb2JhbHMnO1xuaW1wb3J0ICogYXMgbGlzdEJveCBmcm9tICcuLi9iYXNpYy1saXN0LWJveC9nbG9iYWxzJztcbmltcG9ydCAqIGFzIG1vZGVzIGZyb20gJy4uL2Jhc2ljLW1vZGVzL2dsb2JhbHMnO1xuaW1wb3J0ICogYXMgc2xpZGVzaG93IGZyb20gJy4uL2Jhc2ljLXNsaWRlc2hvdy9nbG9iYWxzJztcbmltcG9ydCAqIGFzIHNsaWRlc2hvd1dpdGhDb250cm9scyBmcm9tICcuLi9iYXNpYy1zbGlkZXNob3ctd2l0aC1jb250cm9scy9nbG9iYWxzJztcbmltcG9ydCAqIGFzIHNsaWRpbmdDYXJvdXNlbCBmcm9tICcuLi9iYXNpYy1zbGlkaW5nLWNhcm91c2VsL2dsb2JhbHMnO1xuaW1wb3J0ICogYXMgc2xpZGluZ1ZpZXdwb3J0IGZyb20gJy4uL2Jhc2ljLXNsaWRpbmctdmlld3BvcnQvZ2xvYmFscyc7XG5pbXBvcnQgKiBhcyBzcHJlYWRJdGVtcyBmcm9tICcuLi9iYXNpYy1zcHJlYWQtaXRlbXMvZ2xvYmFscyc7XG5pbXBvcnQgKiBhcyB0YWJzIGZyb20gJy4uL2Jhc2ljLXRhYnMvZ2xvYmFscyc7XG5pbXBvcnQgKiBhcyB0YWJTdHJpcCBmcm9tICcuLi9iYXNpYy10YWItc3RyaXAvZ2xvYmFscyc7XG5pbXBvcnQgKiBhcyB3ZWJDb21wb25lbnRzIGZyb20gJy4uL2Jhc2ljLXdlYi1jb21wb25lbnRzL2dsb2JhbHMnO1xuaW1wb3J0ICogYXMgd3JhcHBlZFN0YW5kYXJkRWxlbWVudCBmcm9tICcuLi9iYXNpYy13cmFwcGVkLXN0YW5kYXJkLWVsZW1lbnQvZ2xvYmFscyc7XG5cbi8qIGpzaGludCBpZ25vcmU6ZW5kICovXG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHRyYW5zcGlsZWQgdG8gY3JlYXRlIGFuIEVTNS1jb21wYXRpYmxlIGRpc3RyaWJ1dGlvbiBpbiB3aGljaFxuICogdGhlIHBhY2thZ2UncyBtYWluIGZlYXR1cmUocykgYXJlIGF2YWlsYWJsZSB2aWEgdGhlIHdpbmRvdy5CYXNpYyBnbG9iYWwuXG4gKiBJZiB5b3UncmUgYWxyZWFkeSB1c2luZyBFUzYgeW91cnNlbGYsIGlnbm9yZSB0aGlzIGZpbGUsIGFuZCBpbnN0ZWFkIGltcG9ydFxuICogdGhlIHNvdXJjZSBmaWxlKHMpIHlvdSB3YW50IGZyb20gdGhlIHNyYyBmb2xkZXIuXG4gKi9cblxuaW1wb3J0IFdyYXBwZWRTdGFuZGFyZEVsZW1lbnQgZnJvbSAnLi9zcmMvV3JhcHBlZFN0YW5kYXJkRWxlbWVudCc7XG5cbndpbmRvdy5CYXNpYyA9IHdpbmRvdy5CYXNpYyB8fCB7fTtcbndpbmRvdy5CYXNpYy5XcmFwcGVkU3RhbmRhcmRFbGVtZW50ID0gV3JhcHBlZFN0YW5kYXJkRWxlbWVudDtcbiIsImltcG9ydCBFbGVtZW50QmFzZSBmcm9tICcuLi8uLi9iYXNpYy1lbGVtZW50LWJhc2Uvc3JjL0VsZW1lbnRCYXNlJztcbmltcG9ydCBzeW1ib2xzIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL3N5bWJvbHMnO1xuXG5cbi8qXG4gKiBBIHNldCBvZiBldmVudHMgd2hpY2gsIGlmIGZpcmVkIGJ5IHRoZSBpbm5lciBzdGFuZGFyZCBlbGVtZW50LCBzaG91bGQgYmVcbiAqIHJlLXJhaXNlZCBieSB0aGUgY3VzdG9tIGVsZW1lbnQuIChXZSBvbmx5IG5lZWQgdG8gZG8gdGhhdCB1bmRlciBuYXRpdmVcbiAqIFNoYWRvdyBET00sIG5vdCB0aGUgcG9seWZpbGwuKVxuICpcbiAqIFRoZXNlIGFyZSBldmVudHMgd2hpY2ggYXJlIHNwZWMnZWQgdG8gTk9UIGdldCByZXRhcmdldHRlZCBhY3Jvc3MgYSBTaGFkb3cgRE9NXG4gKiBib3VuZGFyeSwgb3JnYW5pemVkIGJ5IHdoaWNoIGVsZW1lbnQocykgcmFpc2UgdGhlIGV2ZW50cy4gVG8gcHJvcGVybHlcbiAqIHNpbXVsYXRlIHRoZXNlLCB3ZSB3aWxsIG5lZWQgdG8gbGlzdGVuIGZvciB0aGUgcmVhbCBldmVudHMsIHRoZW4gcmUtcmFpc2UgYVxuICogc2ltdWxhdGlvbiBvZiB0aGUgb3JpZ2luYWwgZXZlbnQuIEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWVcbiAqIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9zaGFkb3ctZG9tLyNoLWV2ZW50cy10aGF0LWFyZS1ub3QtbGVha2VkLWludG8tYW5jZXN0b3ItdHJlZXMuXG4gKlxuICogSXQgYXBwZWFycyB0aGF0IHdlIGRvICpub3QqIG5lZWQgdG8gcmUtcmFpc2UgdGhlIG5vbi1idWJibGluZyBcImZvY3VzXCIgYW5kXG4gKiBcImJsdXJcIiBldmVudHMuIFRoZXNlIGFwcGVhciB0byBiZSBhdXRvbWF0aWNhbGx5IHJlLXJhaXNlZCBhcyBleHBlY3RlZCAtLSBidXRcbiAqIGl0J3Mgbm90IGNsZWFyIHdoeSB0aGF0IGhhcHBlbnMuXG4gKlxuICogVGhlIGxpc3QgYmVsb3cgaXMgcmVhc29uYWJseSBjb21wbGV0ZS4gSXQgb21pdHMgZWxlbWVudHMgdGhhdCBjYW5ub3QgYmVcbiAqIHdyYXBwZWQgKHNlZSBjbGFzcyBub3RlcyBhYm92ZSkuIEFsc28sIHdlIGhhdmVuJ3QgYWN0dWFsbHkgdHJpZWQgd3JhcHBpbmdcbiAqIGV2ZXJ5IGVsZW1lbnQgaW4gdGhpcyBsaXN0OyBzb21lIG9mIHRoZSBtb3JlIG9ic2N1cmUgb25lcyBtaWdodCBub3QgYWN0dWFsbHlcbiAqIHdvcmsgYXMgZXhwZWN0ZWQsIGJ1dCBpdCB3YXMgZWFzaWVyIHRvIGluY2x1ZGUgdGhlbSBmb3IgY29tcGxldGVuZXNzIHRoYW5cbiAqIHRvIGFjdHVhbGx5IHZlcmlmeSB3aGV0aGVyIG9yIG5vdCB0aGUgZWxlbWVudCBjYW4gYmUgd3JhcHBlZC5cbiAqL1xuY29uc3QgcmVyYWlzZUV2ZW50cyA9IHtcbiAgYWRkcmVzczogWydzY3JvbGwnXSxcbiAgYmxvY2txdW90ZTogWydzY3JvbGwnXSxcbiAgY2FwdGlvbjogWydzY3JvbGwnXSxcbiAgY2VudGVyOiBbJ3Njcm9sbCddLFxuICBkZDogWydzY3JvbGwnXSxcbiAgZGlyOiBbJ3Njcm9sbCddLFxuICBkaXY6IFsnc2Nyb2xsJ10sXG4gIGRsOiBbJ3Njcm9sbCddLFxuICBkdDogWydzY3JvbGwnXSxcbiAgZmllbGRzZXQ6IFsnc2Nyb2xsJ10sXG4gIGZvcm06IFsncmVzZXQnLCAnc2Nyb2xsJ10sXG4gIGZyYW1lOiBbJ2xvYWQnXSxcbiAgaDE6IFsnc2Nyb2xsJ10sXG4gIGgyOiBbJ3Njcm9sbCddLFxuICBoMzogWydzY3JvbGwnXSxcbiAgaDQ6IFsnc2Nyb2xsJ10sXG4gIGg1OiBbJ3Njcm9sbCddLFxuICBoNjogWydzY3JvbGwnXSxcbiAgaWZyYW1lOiBbJ2xvYWQnXSxcbiAgaW1nOiBbJ2Fib3J0JywgJ2Vycm9yJywgJ2xvYWQnXSxcbiAgaW5wdXQ6IFsnYWJvcnQnLCAnY2hhbmdlJywgJ2Vycm9yJywgJ3NlbGVjdCcsICdsb2FkJ10sXG4gIGtleWdlbjogWydyZXNldCcsICdzZWxlY3QnXSxcbiAgbGk6IFsnc2Nyb2xsJ10sXG4gIGxpbms6IFsnbG9hZCddLFxuICBtZW51OiBbJ3Njcm9sbCddLFxuICBvYmplY3Q6IFsnZXJyb3InLCAnc2Nyb2xsJ10sXG4gIG9sOiBbJ3Njcm9sbCddLFxuICBwOiBbJ3Njcm9sbCddLFxuICBzY3JpcHQ6IFsnZXJyb3InLCAnbG9hZCddLFxuICBzZWxlY3Q6IFsnY2hhbmdlJywgJ3Njcm9sbCddLFxuICB0Ym9keTogWydzY3JvbGwnXSxcbiAgdGZvb3Q6IFsnc2Nyb2xsJ10sXG4gIHRoZWFkOiBbJ3Njcm9sbCddLFxuICB0ZXh0YXJlYTogWydjaGFuZ2UnLCAnc2VsZWN0JywgJ3Njcm9sbCddXG59O1xuXG5cbi8vIEtlZXAgdHJhY2sgb2Ygd2hpY2ggcmUtcmFpc2VkIGV2ZW50cyBzaG91bGQgYnViYmxlLlxuY29uc3QgZXZlbnRCdWJibGVzID0ge1xuICBhYm9ydDogdHJ1ZSxcbiAgY2hhbmdlOiB0cnVlLFxuICByZXNldDogdHJ1ZVxufTtcblxuXG4vLyBFbGVtZW50cyB3aGljaCBhcmUgZGlzcGxheTogYmxvY2sgYnkgZGVmYXVsdC5cbi8vIFNvdXJjZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRNTC9CbG9jay1sZXZlbF9lbGVtZW50c1xuY29uc3QgYmxvY2tFbGVtZW50cyA9IFtcbiAgJ2FkZHJlc3MnLFxuICAnYXJ0aWNsZScsXG4gICdhc2lkZScsXG4gICdibG9ja3F1b3RlJyxcbiAgJ2NhbnZhcycsXG4gICdkZCcsXG4gICdkaXYnLFxuICAnZGwnLFxuICAnZmllbGRzZXQnLFxuICAnZmlnY2FwdGlvbicsXG4gICdmaWd1cmUnLFxuICAnZm9vdGVyJyxcbiAgJ2Zvcm0nLFxuICAnaDEnLFxuICAnaDInLFxuICAnaDMnLFxuICAnaDQnLFxuICAnaDUnLFxuICAnaDYnLFxuICAnaGVhZGVyJyxcbiAgJ2hncm91cCcsXG4gICdocicsXG4gICdsaScsXG4gICdtYWluJyxcbiAgJ25hdicsXG4gICdub3NjcmlwdCcsXG4gICdvbCcsXG4gICdvdXRwdXQnLFxuICAncCcsXG4gICdwcmUnLFxuICAnc2VjdGlvbicsXG4gICd0YWJsZScsXG4gICd0Zm9vdCcsXG4gICd1bCcsXG4gICd2aWRlbydcbl07XG5cblxuLyoqXG4gKiBXcmFwcyBhIHN0YW5kYXJkIEhUTUwgZWxlbWVudCBzbyB0aGF0IHRoZSBzdGFuZGFyZCBiZWhhdmlvciBjYW4gdGhlbiBiZVxuICogZXh0ZW5kZWQuXG4gKlxuICogW0xpdmUgZGVtb10oaHR0cDovL2Jhc2ljd2ViY29tcG9uZW50cy5vcmcvYmFzaWMtd2ViLWNvbXBvbmVudHMvcGFja2FnZXMvYmFzaWMtd3JhcHBlZC1zdGFuZGFyZC1lbGVtZW50LylcbiAqXG4gKiBTZWUgYWxzbyBbYmFzaWMtYXV0b3NpemUtdGV4dGFyZWFdKC4uL2Jhc2ljLWF1dG9zaXplLXRleHRhcmVhKSBhbmRcbiAqIFtiYXNpYy1jdXJyZW50LWFuY2hvcl0oLi4vYmFzaWMtY3VycmVudC1hbmNob3IpLiBUaGUgZm9ybWVyIHVzZXNcbiAqIFdyYXBwZWRTdGFuZGFyZEVsZW1lbnQgdG8gd3JhcCBhIHN0YW5kYXJkIGA8dGV4dGFyZWE+YCBhbmQgYDxhPmAsXG4gKiByZXNwZWN0aXZlbHkuXG4gKlxuICogVGhlIEN1c3RvbSBFbGVtZW50cyBzcGVjIGRvZXMgbm90IGN1cnJlbnRseSAoYXMgb2YgTWFyY2ggMjAxNikgYWxsb3cgeW91IHRvXG4gKiBleHRlbmQgdGhlIGJlaGF2aW9yIG9mIGEgc3RhbmRhcmQgSFRNTCBlbGVtZW50IGxpa2UgYDxhPmAgb3IgYDxidXR0b24+YC5cbiAqIEFzIGEgcGFydGlhbCB3b3JrYXJvdW5kLCB0aGUgV3JhcHBlZFN0YW5kYXJkRWxlbWVudCBjbGFzcyBjYW4gY3JlYXRlIGEgY2xhc3NcbiAqIGZvciB5b3UgdGhhdCB3cmFwcyBhbiBpbnN0YW5jZSBvZiBhIHN0YW5kYXJkIEhUTUwgZWxlbWVudC4gRm9yIGV4YW1wbGUsIHRoZVxuICogY29kZSBiZWxvdyBjcmVhdGVzIGEgY2xhc3MgdGhhdCB3aWxsIHdyYXAgYW4gaW5zdGFuY2Ugb2YgYSBzdGFuZGFyZCBgPGE+YFxuICogZWxlbWVudDpcbiAqXG4gKiAgICAgY2xhc3MgV3JhcHBlZEEgZXh0ZW5kcyBXcmFwcGVkU3RhbmRhcmRFbGVtZW50LndyYXAoJ2EnKSB7XG4gKiAgICAgICBjdXN0b21NZXRob2QoKSB7IC4uLiB9XG4gKiAgICAgfVxuICogICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnd3JhcHBlZC1hJywgV3JhcHBlZEEpO1xuICpcbiAqIEFuIGluc3RhbmNlIG9mIHRoZSByZXN1bHRpbmcgY2xhc3Mgd2lsbCBsb29rIHRvIHRoZSB1c2VyIGxpa2UgYW4gaW5zdGFuY2Ugb2ZcbiAqIHRoZSBzdGFuZGFyZCBlbGVtZW50IGNsYXNzIGl0IHdyYXBzLiBUaGUgcmVzdWx0aW5nIGNsYXNzIHdpbGwgKm5vdCogYmUgYW5cbiAqIGBpbnN0YW5jZW9mYCB0aGUgc3RhbmRhcmQgY2xhc3MgKGhlcmUsIEhUTUxBbmNob3JFbGVtZW50KS4gQW5vdGhlciBsaW1pdGF0aW9uXG4gKiBpcyB0aGF0IHRoZSByZXN1bHRpbmcgYDx3cmFwcGVkLWE+YCB3aWxsIG5vdCBhdXRvbWF0aWNhbGx5IHBpY2sgdXAgQ1NTIHN0eWxlc1xuICogZm9yIHN0YW5kYXJkIGA8YT5gIGVsZW1lbnRzLiBIb3dldmVyLCB0aGUgcmVzdWx0aW5nIGNsYXNzICpjYW4qIGJlIGV4dGVuZGVkLlxuICogRS5nLiwgaW5zdGFuY2VzIG9mIHRoZSBhYm92ZSBjbGFzcyBoYXZlIGEgYGN1c3RvbU1ldGhvZCgpYCBhdmFpbGFibGUgdG8gdGhlbS5cbiAqXG4gKiBBbnkgcHJvcGVydGllcyBkZWZpbmVkIGJ5IHRoZSBvcmlnaW5hbCBzdGFuZGFyZCBlbGVtZW50IHdpbGwgYmUgZXhwb3NlZCBvblxuICogdGhlIHJlc3VsdGluZyB3cmFwcGVyIGNsYXNzLCBhbmQgY2FsbHMgdG8gZ2V0IG9yIHNldCB0aG9zZSBwcm9wZXJ0aWVzIHdpbGwgYmVcbiAqIGRlbGVnYXRlZCB0byB0aGUgd3JhcHBlZCBlbGVtZW50IGluc3RhbmNlLiBDb250aW51aW5nIHRoZSBhYm92ZSBleGFtcGxlOlxuICpcbiAqICAgICBsZXQgd3JhcHBlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3dyYXBwZWQtYScpO1xuICogICAgIHdyYXBwZWQuaHJlZiA9ICdodHRwOi8vZXhhbXBsZS5jb20vJztcbiAqICAgICB3cmFwcGVkLnRleHRDb250ZW50ID0gJ0NsaWNrIGhlcmUnO1xuICpcbiAqIEhlcmUsIHRoZSBjcmVhdGVkIGN1c3RvbSBgPHdyYXBwZWQtYT5gIGVsZW1lbnQgd2lsbCBjb250YWluIGluc2lkZSBpdHNcbiAqIHNoYWRvdyB0cmVlIGFuIGluc3RhbmNlIG9mIGEgc3RhbmRhcmQgYDxhPmAgZWxlbWVudC4gVGhlIGNhbGwgdG8gc2V0IHRoZVxuICogd3JhcHBlcidzIGBocmVmYCBwcm9wZXJ0eSB3aWxsIHVsdGltYXRlbHkgc2V0IHRoZSBgaHJlZmAgb24gdGhlIGlubmVyIGxpbmsuXG4gKiBNb3Jlb3ZlciwgdGhlIHRleHQgY29udGVudCBvZiB0aGUgYDx3cmFwcGVkLWE+YCBlbGVtZW50IHdpbGwgYXBwZWFyIGluc2lkZVxuICogdGhlIGlubmVyIGxpbmsuIFRoZSByZXN1bHQgb2YgYWxsIHRoaXMgaXMgdGhhdCB0aGUgdXNlciB3aWxsIHNlZSB3aGF0ICpsb29rcypcbiAqIGxpa2UgYSBub3JtYWwgbGluaywganVzdCBhcyBpZiB5b3UgaGFkIHdyaXR0ZW5cbiAqIGA8YSBocmVmPVwiaHR0cDovL2V4YW1wbGUuY29tL1wiPkNsaWNrIGhlcmU8L2E+YC4gSG93ZXZlciwgdGhlIGFjdHVhbCBlbGVtZW50XG4gKiB3aWxsIGJlIGFuIGluc3RhbmNlIG9mIHlvdXIgY3VzdG9tIGNsYXNzLCB3aXRoIHdoYXRldmVyIGJlaGF2aW9yIHlvdSd2ZVxuICogZGVmaW5lZCBmb3IgaXQuXG4gKlxuICogV3JhcHBlZCBlbGVtZW50cyBzaG91bGQgcmFpc2UgdGhlIHNhbWUgZXZlbnRzIGFzIHRoZSBvcmlnaW5hbCBzdGFuZGFyZFxuICogZWxlbWVudHMuIEUuZy4sIGlmIHlvdSB3cmFwIGFuIGA8aW1nPmAgZWxlbWVudCwgdGhlIHdyYXBwZWQgcmVzdWx0IHdpbGwgcmFpc2VcbiAqIHRoZSBzdGFuZGFyZCBgbG9hZGAgZXZlbnQgYXMgZXhwZWN0ZWQuXG4gKlxuICogU29tZSBlbGVtZW50cywgc3VjaCBhcyBgPGJvZHk+YCwgYDxodG1sPmAsIGFuZCBgPHN0eWxlPmAgY2Fubm90IGJlIHdyYXBwZWRcbiAqIGFuZCBzdGlsbCBhY2hpZXZlIHRoZWlyIHN0YW5kYXJkIGJlaGF2aW9yLlxuICpcbiAqIEBleHRlbmRzIEVsZW1lbnRCYXNlXG4gKi9cbmNsYXNzIFdyYXBwZWRTdGFuZGFyZEVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50QmFzZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8vIExpc3RlbiBmb3IgYW55IGV2ZW50cyByYWlzZWQgYnkgdGhlIGlubmVyIGVsZW1lbnQgd2hpY2ggd2lsbCBub3RcbiAgICAvLyBhdXRvbWF0aWNhbGx5IGJlIHJldGFyZ2V0dGVkIGFjcm9zcyB0aGUgU2hhZG93IERPTSBib3VuZGFyeSwgYW5kIHJlLXJhaXNlXG4gICAgLy8gdGhvc2UgZXZlbnRzIHdoZW4gdGhleSBoYXBwZW4uXG4gICAgLy9cbiAgICAvLyBOb3RlOiBJdCdzIHVuY2xlYXIgd2h5IHdlIG5lZWQgdG8gZG8gdGhpcyBpbiB0aGUgU2hhZG93IERPTSBwb2x5ZmlsbC5cbiAgICAvLyBJbiB0aGVvcnksIGV2ZW50cyBpbiB0aGUgbGlnaHQgRE9NIHNob3VsZCBidWJibGUgYXMgbm9ybWFsLiBCdXQgdGhpc1xuICAgIC8vIGNvZGUgYXBwZWFycyB0byBiZSByZXF1aXJlZCBpbiB0aGUgcG9seWZpbGwgY2FzZSBhcyB3ZWxsLlxuICAgIGNvbnN0IGV2ZW50TmFtZXMgPSByZXJhaXNlRXZlbnRzW3RoaXMuZXh0ZW5kc10gfHwgW107XG4gICAgZXZlbnROYW1lcy5mb3JFYWNoKGV2ZW50TmFtZSA9PiB7XG4gICAgICB0aGlzLmlubmVyLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCByZWFsRXZlbnQgPT4ge1xuICAgICAgICBjb25zdCBldmVudCA9IG5ldyBFdmVudChldmVudE5hbWUsIHtcbiAgICAgICAgICBidWJibGVzOiBldmVudEJ1YmJsZXNbZXZlbnROYW1lXSB8fCBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgZGVzY3JpcHRpb24gZm9yIHRoZSB1c2VyIG9mIHRoZSBlbGVtZW50J3MgcHVycG9zZSBvbiB0aGUgcGFnZS4gU2V0dGluZ1xuICAgKiB0aGlzIGFwcGxpZXMgdGhlIGxhYmVsIHRvIHRoZSBpbm5lciBlbGVtZW50LCBlbnN1cmluZyB0aGF0IHNjcmVlbiByZWFkZXJzXG4gICAqIGFuZCBvdGhlciBhc3Npc3RpdmUgdGVjaG5vbG9naWVzIHdpbGwgcHJvdmlkZSBhIG1lYW5pbmdmdWwgZGVzY3JpcHRpb24gdG9cbiAgICogdGhlIHVzZXIuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgYXJpYUxhYmVsKCkge1xuICAgIHJldHVybiB0aGlzLmlubmVyLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpO1xuICB9XG4gIHNldCBhcmlhTGFiZWwobGFiZWwpIHtcbiAgICAvLyBQcm9wYWdhdGUgdGhlIEFSSUEgbGFiZWwgdG8gdGhlIGlubmVyIHRleHRhcmVhLlxuICAgIHRoaXMuaW5uZXIuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgbGFiZWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhlIGlubmVyIHN0YW5kYXJkIEhUTUwgZWxlbWVudC5cbiAgICpcbiAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgKi9cbiAgZ2V0IGlubmVyKCkge1xuICAgIHJldHVybiB0aGlzLiQuaW5uZXI7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIGNvcGllZCBpbnRvIHRoZSBzaGFkb3cgdHJlZSBvZiBuZXcgaW5zdGFuY2VzIG9mIHRoaXMgZWxlbWVudC5cbiAgICpcbiAgICogVGhlIGRlZmF1bHQgdmFsdWUgb2YgdGhpcyBwcm9wZXJ0eSBpcyBhIHRlbXBsYXRlIHRoYXQgaW5jbHVkZXMgYW4gaW5zdGFuY2VcbiAgICogdGhlIHN0YW5kYXJkIGVsZW1lbnQgYmVpbmcgd3JhcHBlZCwgd2l0aCBhIGA8c2xvdD5gIGVsZW1lbnQgaW5zaWRlIHRoYXRcbiAgICogdG8gcGljayB1cCB0aGUgZWxlbWVudCdzIGxpZ2h0IERPTSBjb250ZW50LiBGb3IgZXhhbXBsZSwgaWYgeW91IHdyYXAgYW5cbiAgICogYDxhPmAgZWxlbWVudCwgdGhlbiB0aGUgZGVmYXVsdCB0ZW1wbGF0ZSB3aWxsIGxvb2sgbGlrZTpcbiAgICpcbiAgICogICAgIDx0ZW1wbGF0ZT5cbiAgICogICAgICAgPHN0eWxlPlxuICAgKiAgICAgICA6aG9zdCB7XG4gICAqICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgKiAgICAgICB9XG4gICAqICAgICAgIDwvc3R5bGU+XG4gICAqICAgICAgIDxhIGlkPVwiaW5uZXJcIj5cbiAgICogICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAqICAgICAgIDwvYT5cbiAgICogICAgIDwvdGVtcGxhdGU+XG4gICAqXG4gICAqIFRoZSBgZGlzcGxheWAgc3R5bGluZyBhcHBsaWVkIHRvIHRoZSBob3N0IHdpbGwgYmUgYGJsb2NrYCBmb3IgZWxlbWVudHMgdGhhdFxuICAgKiBhcmUgYmxvY2sgZWxlbWVudHMgYnkgZGVmYXVsdCwgYW5kIGBpbmxpbmUtYmxvY2tgIChub3QgYGlubGluZWApIGZvciBvdGhlclxuICAgKiBlbGVtZW50cy5cbiAgICpcbiAgICogSWYgeW91J2QgbGlrZSB0aGUgdGVtcGxhdGUgdG8gaW5jbHVkZSBvdGhlciBlbGVtZW50cywgdGhlbiBvdmVycmlkZSB0aGlzXG4gICAqIHByb3BlcnR5IGFuZCByZXR1cm4gYSB0ZW1wbGF0ZSBvZiB5b3VyIG93bi4gVGhlIHRlbXBsYXRlIHNob3VsZCBpbmNsdWRlIGFuXG4gICAqIGluc3RhbmNlIG9mIHRoZSBzdGFuZGFyZCBIVE1MIGVsZW1lbnQgeW91IGFyZSB3cmFwcGluZywgYW5kIHRoZSBJRCBvZiB0aGF0XG4gICAqIGVsZW1lbnQgc2hvdWxkIGJlIFwiaW5uZXJcIi5cbiAgICpcbiAgICogQHR5cGUgeyhzdHJpbmd8SFRNTFRlbXBsYXRlRWxlbWVudCl9XG4gICAqL1xuICBnZXQgW3N5bWJvbHMudGVtcGxhdGVdKCkge1xuICAgIGNvbnN0IGRpc3BsYXkgPSBibG9ja0VsZW1lbnRzLmluZGV4T2YodGhpcy5leHRlbmRzKSA+PSAwID9cbiAgICAgICdibG9jaycgOlxuICAgICAgJ2lubGluZS1ibG9jayc7XG4gICAgcmV0dXJuIGA8c3R5bGU+Omhvc3QgeyBkaXNwbGF5OiAke2Rpc3BsYXl9fTwvc3R5bGU+PCR7dGhpcy5leHRlbmRzfSBpZD1cImlubmVyXCI+PHNsb3Q+PC9zbG90PjwvJHt0aGlzLmV4dGVuZHN9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgY2xhc3MgdGhhdCB3cmFwcyBhIHN0YW5kYXJkIEhUTUwgZWxlbWVudC5cbiAgICpcbiAgICogTm90ZSB0aGF0IHRoZSByZXN1bHRpbmcgY2xhc3MgaXMgYSBzdWJjbGFzcyBvZiBXcmFwcGVkU3RhbmRhcmRFbGVtZW50LCBub3RcbiAgICogdGhlIHN0YW5kYXJkIGNsYXNzIGJlaW5nIHdyYXBwZWQuIEUuZy4sIGlmIHlvdSBjYWxsXG4gICAqIGBXcmFwcGVkU3RhbmRhcmRFbGVtZW50LndyYXAoJ2EnKWAsIHlvdSB3aWxsIGdldCBhIGNsYXNzIHdob3NlIHNoYWRvdyB0cmVlXG4gICAqIHdpbGwgaW5jbHVkZSBhbiBhbmNob3IgZWxlbWVudCwgYnV0IHRoZSBjbGFzcyB3aWxsICpub3QqIGluaGVyaXQgZnJvbVxuICAgKiBIVE1MQW5jaG9yRWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV4dGVuZHNUYWcgLSB0aGUgc3RhbmRhcmQgSFRNTCBlbGVtZW50IHRhZyB0byBleHRlbmRcbiAgICovXG4gIHN0YXRpYyB3cmFwKGV4dGVuZHNUYWcpIHtcblxuICAgIC8vIENyZWF0ZSB0aGUgbmV3IGNsYXNzLlxuICAgIGNsYXNzIFdyYXBwZWQgZXh0ZW5kcyBXcmFwcGVkU3RhbmRhcmRFbGVtZW50IHt9XG5cbiAgICAvLyBJbmRpY2F0ZSB3aGljaCB0YWcgaXQgd3JhcHMuXG4gICAgV3JhcHBlZC5wcm90b3R5cGUuZXh0ZW5kcyA9IGV4dGVuZHNUYWc7XG5cbiAgICAvLyBDcmVhdGUgZ2V0dGVyL3NldHRlcnMgdGhhdCBkZWxlZ2F0ZSB0byB0aGUgd3JhcHBlZCBlbGVtZW50LlxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGV4dGVuZHNUYWcpO1xuICAgIGNvbnN0IGV4dGVuZHNQcm90b3R5cGUgPSBlbGVtZW50LmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgICBjb25zdCBuYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGV4dGVuZHNQcm90b3R5cGUpO1xuICAgIG5hbWVzLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGV4dGVuZHNQcm90b3R5cGUsIG5hbWUpO1xuICAgICAgICBjb25zdCBkZWxlZ2F0ZSA9IGNyZWF0ZVByb3BlcnR5RGVsZWdhdGUobmFtZSwgZGVzY3JpcHRvcik7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShXcmFwcGVkLnByb3RvdHlwZSwgbmFtZSwgZGVsZWdhdGUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIFdyYXBwZWQ7XG4gIH1cblxufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVByb3BlcnR5RGVsZWdhdGUobmFtZSwgZGVzY3JpcHRvcikge1xuICBjb25zdCBkZWxlZ2F0ZSA9IHtcbiAgICBjb25maWd1cmFibGU6IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlLFxuICAgIGVudW1lcmFibGU6IGRlc2NyaXB0b3IuZW51bWVyYWJsZSxcbiAgfTtcbiAgaWYgKGRlc2NyaXB0b3IuZ2V0KSB7XG4gICAgZGVsZWdhdGUuZ2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbm5lcltuYW1lXTtcbiAgICB9O1xuICB9XG4gIGlmIChkZXNjcmlwdG9yLnNldCkge1xuICAgIGRlbGVnYXRlLnNldCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICB0aGlzLmlubmVyW25hbWVdID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuICBpZiAoZGVzY3JpcHRvci53cml0YWJsZSkge1xuICAgIGRlbGVnYXRlLndyaXRhYmxlID0gZGVzY3JpcHRvci53cml0YWJsZTtcbiAgfVxuICByZXR1cm4gZGVsZWdhdGU7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgV3JhcHBlZFN0YW5kYXJkRWxlbWVudDtcbiJdfQ==
