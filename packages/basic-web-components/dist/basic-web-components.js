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
 * The above demo is a plain carousel. It's often combined, however, with
 * mixins like
 * [ArrowSelectionMixin](../basic-component-mixins/docs/ArrowSelectionMixin.md),
 * [PageDotsMixin](../basic-component-mixins/docs/PageDotsMixin.md),
 * [TimerSelectionMixin](../basic-component-mixins/docs/TimerSelectionMixin.md).
 * For example, you can view a
 * [demo with arrows and page dots](http://basicwebcomponents.org/basic-web-components/packages/demos/carousel-with-arrows-and-dots.html).
 * See the specific mixins for other carousel demos.
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

var _symbols = require('../../basic-component-mixins/src/symbols');

var _symbols2 = _interopRequireDefault(_symbols);

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
    key: _symbols2.default.template,
    get: function get() {
      return '\n      <style>\n      :host {\n        display: block;\n        overflow: hidden;\n      }\n\n      :host(.showTransition) #overflow {\n        transition: height 0.2s;\n      }\n      </style>\n\n      <div id="overflow" role="none">\n        <div id="container" role="none">\n          <slot></slot>\n        </div>\n      </div>\n    ';
    }
  }]);

  return CollapsiblePanel;
}((0, _OpenCloseMixin3.default)(_ElementBase2.default));

customElements.define('basic-collapsible-panel', CollapsiblePanel);
exports.default = CollapsiblePanel;

},{"../../basic-component-mixins/src/OpenCloseMixin":24,"../../basic-component-mixins/src/symbols":42,"../../basic-element-base/src/ElementBase":47}],9:[function(require,module,exports){
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
   * You can see a
   * [live demo](http://basicwebcomponents.org/basic-web-components/packages/demos/carousel-with-arrows.html)
   * of this mixin applied to a carousel.
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
   * You can see a
   * [live demo](http://basicwebcomponents.org/basic-web-components/packages/demos/carousel-with-dots.html)
   * of this mixin applied to a carousel.
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
   * This mixin is useful for creating slideshow-like elements such as
   * [basic-slideshow](../packages/basic-slideshow) and
   * [basic-slideshow-with-controls](../packages/basic-slideshow-with-controls).
   *
   * Typical usage:
   *
   *     class CarouselWithTimer extends TimerSelectionMixin(Carousel) {}
   *     customElements.define('carousel-with-arrows', CarouselWithTimer);
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

var _symbols = require('../../basic-component-mixins/src/symbols');

var _symbols2 = _interopRequireDefault(_symbols);

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
    key: _symbols2.default.template,
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

},{"../../basic-component-mixins/src/createSymbol":38,"../../basic-component-mixins/src/symbols":42,"../../basic-element-base/src/ElementBase":47}],50:[function(require,module,exports){
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
 * An extension of
 * [basic-slideshow](../basic-slideshow) that adds play controls
 * via [PlayControlsMixin](../basic-component-mixins/docs/PlayControlsMixin.md).
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

var _symbols = require('../../basic-component-mixins/src/symbols');

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // jshint ignore:line


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
    key: _symbols2.default.template,
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

},{"../../basic-component-mixins/src/FractionalSelectionMixin":18,"../../basic-component-mixins/src/createSymbol":38,"../../basic-component-mixins/src/symbols":42,"../../basic-element-base/src/ElementBase":47,"../../basic-spread-items/src/SpreadItems":63}],62:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwYWNrYWdlcy9iYXNpYy1hbmltYXRpb24tc3RhZ2UvZ2xvYmFscy5qcyIsInBhY2thZ2VzL2Jhc2ljLWFuaW1hdGlvbi1zdGFnZS9zcmMvQW5pbWF0aW9uU3RhZ2UuanMiLCJwYWNrYWdlcy9iYXNpYy1hdXRvc2l6ZS10ZXh0YXJlYS9nbG9iYWxzLmpzIiwicGFja2FnZXMvYmFzaWMtYXV0b3NpemUtdGV4dGFyZWEvc3JjL0F1dG9zaXplVGV4dGFyZWEuanMiLCJwYWNrYWdlcy9iYXNpYy1jYXJvdXNlbC9nbG9iYWxzLmpzIiwicGFja2FnZXMvYmFzaWMtY2Fyb3VzZWwvc3JjL0Nhcm91c2VsLmpzIiwicGFja2FnZXMvYmFzaWMtY29sbGFwc2libGUtcGFuZWwvZ2xvYmFscy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbGxhcHNpYmxlLXBhbmVsL3NyYy9Db2xsYXBzaWJsZVBhbmVsLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9nbG9iYWxzLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQXJyb3dTZWxlY3Rpb25NaXhpbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0F0dHJpYnV0ZU1hcnNoYWxsaW5nTWl4aW4uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9DbGlja1NlbGVjdGlvbk1peGluLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ29tcG9zYWJsZU1peGluLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ29udGVudEl0ZW1zTWl4aW4uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXJlY3Rpb25TZWxlY3Rpb25NaXhpbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW5Db250ZW50TWl4aW4uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXN0cmlidXRlZENoaWxkcmVuTWl4aW4uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9GcmFjdGlvbmFsU2VsZWN0aW9uTWl4aW4uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9HZW5lcmljTWl4aW4uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9LZXlib2FyZERpcmVjdGlvbk1peGluLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvS2V5Ym9hcmRNaXhpbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0tleWJvYXJkUGFnZWRTZWxlY3Rpb25NaXhpbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0tleWJvYXJkUHJlZml4U2VsZWN0aW9uTWl4aW4uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9PcGVuQ2xvc2VNaXhpbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1BhZ2VEb3RzTWl4aW4uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9QbGF5Q29udHJvbHNNaXhpbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NlbGVjdGVkSXRlbVRleHRWYWx1ZU1peGluLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2VsZWN0aW9uQW5pbWF0aW9uTWl4aW4uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TZWxlY3Rpb25BcmlhQWN0aXZlTWl4aW4uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TZWxlY3Rpb25IaWdobGlnaHRNaXhpbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NlbGVjdGlvbkluVmlld01peGluLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2hhZG93RWxlbWVudFJlZmVyZW5jZXNNaXhpbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NoYWRvd1RlbXBsYXRlTWl4aW4uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TaW5nbGVTZWxlY3Rpb25NaXhpbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1N3aXBlRGlyZWN0aW9uTWl4aW4uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9UaW1lclNlbGVjdGlvbk1peGluLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvVHJhY2twYWREaXJlY3Rpb25NaXhpbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL2NyZWF0ZVN5bWJvbC5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL21pY3JvdGFzay5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL3JlbmRlckFycmF5QXNFbGVtZW50cy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL3NhZmVBdHRyaWJ1dGVzLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvc3ltYm9scy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL3RvZ2dsZUNsYXNzLmpzIiwicGFja2FnZXMvYmFzaWMtY3VycmVudC1hbmNob3IvZ2xvYmFscy5qcyIsInBhY2thZ2VzL2Jhc2ljLWN1cnJlbnQtYW5jaG9yL3NyYy9DdXJyZW50QW5jaG9yLmpzIiwicGFja2FnZXMvYmFzaWMtZWxlbWVudC1iYXNlL2dsb2JhbHMuanMiLCJwYWNrYWdlcy9iYXNpYy1lbGVtZW50LWJhc2Uvc3JjL0VsZW1lbnRCYXNlLmpzIiwicGFja2FnZXMvYmFzaWMtZmFkZS1vdmVyZmxvdy9nbG9iYWxzLmpzIiwicGFja2FnZXMvYmFzaWMtZmFkZS1vdmVyZmxvdy9zcmMvRmFkZU92ZXJmbG93LmpzIiwicGFja2FnZXMvYmFzaWMtbGlzdC1ib3gvZ2xvYmFscy5qcyIsInBhY2thZ2VzL2Jhc2ljLWxpc3QtYm94L3NyYy9MaXN0Qm94LmpzIiwicGFja2FnZXMvYmFzaWMtbW9kZXMvZ2xvYmFscy5qcyIsInBhY2thZ2VzL2Jhc2ljLW1vZGVzL3NyYy9Nb2Rlcy5qcyIsInBhY2thZ2VzL2Jhc2ljLXNsaWRlc2hvdy13aXRoLWNvbnRyb2xzL2dsb2JhbHMuanMiLCJwYWNrYWdlcy9iYXNpYy1zbGlkZXNob3ctd2l0aC1jb250cm9scy9zcmMvU2xpZGVzaG93V2l0aENvbnRyb2xzLmpzIiwicGFja2FnZXMvYmFzaWMtc2xpZGVzaG93L2dsb2JhbHMuanMiLCJwYWNrYWdlcy9iYXNpYy1zbGlkZXNob3cvc3JjL1NsaWRlc2hvdy5qcyIsInBhY2thZ2VzL2Jhc2ljLXNsaWRpbmctY2Fyb3VzZWwvZ2xvYmFscy5qcyIsInBhY2thZ2VzL2Jhc2ljLXNsaWRpbmctY2Fyb3VzZWwvc3JjL1NsaWRpbmdDYXJvdXNlbC5qcyIsInBhY2thZ2VzL2Jhc2ljLXNsaWRpbmctdmlld3BvcnQvZ2xvYmFscy5qcyIsInBhY2thZ2VzL2Jhc2ljLXNsaWRpbmctdmlld3BvcnQvc3JjL1NsaWRpbmdWaWV3cG9ydC5qcyIsInBhY2thZ2VzL2Jhc2ljLXNwcmVhZC1pdGVtcy9nbG9iYWxzLmpzIiwicGFja2FnZXMvYmFzaWMtc3ByZWFkLWl0ZW1zL3NyYy9TcHJlYWRJdGVtcy5qcyIsInBhY2thZ2VzL2Jhc2ljLXRhYi1zdHJpcC9nbG9iYWxzLmpzIiwicGFja2FnZXMvYmFzaWMtdGFiLXN0cmlwL3NyYy9UYWJTdHJpcC5qcyIsInBhY2thZ2VzL2Jhc2ljLXRhYi1zdHJpcC9zcmMvVGFiU3RyaXBNaXhpbi5qcyIsInBhY2thZ2VzL2Jhc2ljLXRhYnMvZ2xvYmFscy5qcyIsInBhY2thZ2VzL2Jhc2ljLXRhYnMvc3JjL1RhYnMuanMiLCJwYWNrYWdlcy9iYXNpYy13ZWItY29tcG9uZW50cy9nbG9iYWxzLmpzIiwicGFja2FnZXMvYmFzaWMtd3JhcHBlZC1zdGFuZGFyZC1lbGVtZW50L2dsb2JhbHMuanMiLCJwYWNrYWdlcy9iYXNpYy13cmFwcGVkLXN0YW5kYXJkLWVsZW1lbnQvc3JjL1dyYXBwZWRTdGFuZGFyZEVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ09BOzs7Ozs7QUFFQSxPQUFPLEtBQVAsR0FBZSxPQUFPLEtBQVAsSUFBZ0IsRUFBL0IsQyxDQVRBOzs7Ozs7O0FBVUEsT0FBTyxLQUFQLENBQWEsY0FBYjs7Ozs7Ozs7Ozs7OztBQ1ZBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUdBLElBQU0sT0FBTyxzQkFBWSxPQUFaLG1OQUFiOztBQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUEwQk0sYzs7Ozs7Ozs7OztTQUVDLGtCQUFRLFE7d0JBQVk7QUFDdkIsVUFBTSxXQUFXLDRGQUFNLGtCQUFRLFFBQWQsV0FBMkIsRUFBNUM7QUFDQSxlQUFTLGlCQUFULEdBQTZCLElBQTdCO0FBQ0EsYUFBTyxRQUFQO0FBQ0Q7O1NBRUksa0JBQVEsUTt3QkFBWTtBQUN2QjtBQW9CRDs7OztFQTdCMEIsSTs7QUFrQzdCLGVBQWUsTUFBZixDQUFzQix1QkFBdEIsRUFBK0MsY0FBL0M7a0JBQ2UsYzs7Ozs7QUN6RWY7Ozs7OztBQUVBLE9BQU8sS0FBUCxHQUFlLE9BQU8sS0FBUCxJQUFnQixFQUEvQixDLENBVEE7Ozs7Ozs7QUFVQSxPQUFPLEtBQVAsQ0FBYSxnQkFBYjs7Ozs7Ozs7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QyxRQUEvQztBQUNILE9BSkQ7O0FBTUEsYUFBTyxPQUFQO0FBQ0Q7Ozs7OztBQUtILFNBQVMsc0JBQVQsQ0FBZ0MsSUFBaEMsRUFBc0MsVUFBdEMsRUFBa0Q7QUFDaEQsTUFBTSxXQUFXO0FBQ2Ysa0JBQWMsV0FBVyxZQURWO0FBRWYsZ0JBQVksV0FBVztBQUZSLEdBQWpCO0FBSUEsTUFBSSxXQUFXLEdBQWYsRUFBb0I7QUFDbEIsYUFBUyxHQUFULEdBQWUsWUFBVztBQUN4QixhQUFPLEtBQUssS0FBTCxDQUFXLElBQVgsQ0FBUDtBQUNELEtBRkQ7QUFHRDtBQUNELE1BQUksV0FBVyxHQUFmLEVBQW9CO0FBQ2xCLGFBQVMsR0FBVCxHQUFlLFVBQVMsS0FBVCxFQUFnQjtBQUM3QixXQUFLLEtBQUwsQ0FBVyxJQUFYLElBQW1CLEtBQW5CO0FBQ0QsS0FGRDtBQUdEO0FBQ0QsTUFBSSxXQUFXLFFBQWYsRUFBeUI7QUFDdkIsYUFBUyxRQUFULEdBQW9CLFdBQVcsUUFBL0I7QUFDRDtBQUNELFNBQU8sUUFBUDtBQUNEOztrQkFHYyxzQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKlxuICogVGhpcyBmaWxlIGlzIHRyYW5zcGlsZWQgdG8gY3JlYXRlIGFuIEVTNS1jb21wYXRpYmxlIGRpc3RyaWJ1dGlvbiBpbiB3aGljaFxuICogdGhlIHBhY2thZ2UncyBtYWluIGZlYXR1cmUocykgYXJlIGF2YWlsYWJsZSB2aWEgdGhlIHdpbmRvdy5CYXNpYyBnbG9iYWwuXG4gKiBJZiB5b3UncmUgYWxyZWFkeSB1c2luZyBFUzYgeW91cnNlbGYsIGlnbm9yZSB0aGlzIGZpbGUsIGFuZCBpbnN0ZWFkIGltcG9ydFxuICogdGhlIHNvdXJjZSBmaWxlKHMpIHlvdSB3YW50IGZyb20gdGhlIHNyYyBmb2xkZXIuXG4gKi9cblxuaW1wb3J0IEFuaW1hdGlvblN0YWdlIGZyb20gJy4vc3JjL0FuaW1hdGlvblN0YWdlJztcblxud2luZG93LkJhc2ljID0gd2luZG93LkJhc2ljIHx8IHt9O1xud2luZG93LkJhc2ljLkFuaW1hdGlvblN0YWdlID0gQW5pbWF0aW9uU3RhZ2U7XG4iLCJpbXBvcnQgRWxlbWVudEJhc2UgZnJvbSAnLi4vLi4vYmFzaWMtZWxlbWVudC1iYXNlL3NyYy9FbGVtZW50QmFzZSc7XG5pbXBvcnQgQ29udGVudEl0ZW1zTWl4aW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ29udGVudEl0ZW1zTWl4aW4nO1xuaW1wb3J0IERpc3RyaWJ1dGVkQ2hpbGRyZW5Db250ZW50TWl4aW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlzdHJpYnV0ZWRDaGlsZHJlbkNvbnRlbnRNaXhpbic7XG5pbXBvcnQgRnJhY3Rpb25hbFNlbGVjdGlvbk1peGluIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0ZyYWN0aW9uYWxTZWxlY3Rpb25NaXhpbic7XG5pbXBvcnQgU2VsZWN0aW9uQW5pbWF0aW9uTWl4aW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2VsZWN0aW9uQW5pbWF0aW9uTWl4aW4nO1xuaW1wb3J0IFNlbGVjdGlvbkFyaWFBY3RpdmVNaXhpbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TZWxlY3Rpb25BcmlhQWN0aXZlTWl4aW4nO1xuaW1wb3J0IFNpbmdsZVNlbGVjdGlvbk1peGluIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NpbmdsZVNlbGVjdGlvbk1peGluJztcbmltcG9ydCBzeW1ib2xzIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL3N5bWJvbHMnO1xuXG5cbmNvbnN0IGJhc2UgPSBFbGVtZW50QmFzZS5jb21wb3NlKFxuICBDb250ZW50SXRlbXNNaXhpbixcbiAgRGlzdHJpYnV0ZWRDaGlsZHJlbkNvbnRlbnRNaXhpbixcbiAgRnJhY3Rpb25hbFNlbGVjdGlvbk1peGluLFxuICBTZWxlY3Rpb25BbmltYXRpb25NaXhpbixcbiAgU2VsZWN0aW9uQXJpYUFjdGl2ZU1peGluLFxuICBTaW5nbGVTZWxlY3Rpb25NaXhpblxuKTtcblxuLyoqXG4gKiBQcmVzZW50cyBhIHNpbmdsZSBpdGVtIGFzIHNlbGVjdGVkLCBwcm92aWRpbmcgYW5pbWF0ZWQgdHJhbnNpdGlvbnMgd2hlbiB0aGVcbiAqIHNlbGVjdGlvbiBjaGFuZ2VzLiBUaGUgc2FtZSBhbmltYXRpb24gY2FuIGJlIHNob3duIGF0IGFuIGFyYml0cmFyeSBwb2ludCxcbiAqIGdlbmVyYWxseSB1c2VkIHRvIHJlZmxlY3QgYSB1c2VyLWNvbnRyb2xsZWQgdG91Y2ggb3IgdHJhY2twYWQgZHJhZyBvcGVyYXRpb25cbiAqIGluIHByb2dyZXNzLlxuICpcbiAqIFtMaXZlIGRlbW9dKGh0dHA6Ly9iYXNpY3dlYmNvbXBvbmVudHMub3JnL2Jhc2ljLXdlYi1jb21wb25lbnRzL3BhY2thZ2VzL2Jhc2ljLWFuaW1hdGlvbi1zdGFnZS8pXG4gKlxuICogVGhpcyBjb21wb25lbnQgaXMgaW50ZW5kZWQgdG8gYmUgdXNlZCBhcyBhIHByb2dyYW1tYXRpYyByZW5kZXJpbmcgc3VyZmFjZSBmb3JcbiAqIGNvbXBvbmVudHMgd2hpY2ggd2FudCB0byBzaG93IHRyYW5zaXRpb25hbCBlZmZlY3RzLlxuICpcbiAqIFRoZSBjb21wb25lbnQgdXNlcyBbU2VsZWN0aW9uQW5pbWF0aW9uTWl4aW5dKC4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvZG9jcy9TZWxlY3Rpb25BbmltYXRpb25NaXhpbi5tZClcbiAqIG1peGluLCB3aGljaCBpbiB0dXJuIHVzZXMgdGhlIFdlYiBBbmltYXRpb25zIEFQSS4gRm9yIHVzZSBvbiBicm93c2VycyB3aGljaFxuICogZG8gbm90IHN1cHBvcnQgdGhhdCBBUEkgbmF0aXZlbHksIHlvdSB3aWxsIG5lZWQgdG8gbG9hZCB0aGVcbiAqIFtXZWIgQW5pbWF0aW9ucyBwb2x5ZmlsbF0oaHR0cHM6Ly9naXRodWIuY29tL3dlYi1hbmltYXRpb25zL3dlYi1hbmltYXRpb25zLWpzKS5cbiAqXG4gKiBGb3IgYSBzaW1wbGVyIGNvbXBvbmVudCB0aGF0IGV4aGliaXRzIG9ubHkgYSBzbGlkaW5nIGVmZmVjdCwgYnV0IGRvZXMgbm90XG4gKiByZXF1aXJlIHRoZSBXZWIgQW5pbWF0aW9ucyBBUEksIHNlZSBbYmFzaWMtc2xpZGluZy12aWV3cG9ydF0oLi4vYmFzaWMtc2xpZGluZy12aWV3cG9ydCkuXG4gKlxuICogQGV4dGVuZHMgRWxlbWVudEJhc2VcbiAqIEBtaXhlcyBDb250ZW50SXRlbXNNaXhpblxuICogQG1peGVzIERpc3RyaWJ1dGVkQ2hpbGRyZW5Db250ZW50TWl4aW5cbiAqIEBtaXhlcyBTZWxlY3Rpb25BbmltYXRpb25NaXhpblxuICogQG1peGVzIFNlbGVjdGlvbkFyaWFBY3RpdmVNaXhpblxuICogQG1peGVzIFNpbmdsZVNlbGVjdGlvbk1peGluXG4gKi9cbmNsYXNzIEFuaW1hdGlvblN0YWdlIGV4dGVuZHMgYmFzZSB7XG5cbiAgZ2V0IFtzeW1ib2xzLmRlZmF1bHRzXSgpIHtcbiAgICBjb25zdCBkZWZhdWx0cyA9IHN1cGVyW3N5bWJvbHMuZGVmYXVsdHNdIHx8IHt9O1xuICAgIGRlZmF1bHRzLnNlbGVjdGlvblJlcXVpcmVkID0gdHJ1ZTtcbiAgICByZXR1cm4gZGVmYXVsdHM7XG4gIH1cblxuICBnZXQgW3N5bWJvbHMudGVtcGxhdGVdKCkge1xuICAgIHJldHVybiBgXG4gICAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgI2NvbnRhaW5lciA6OnNsb3R0ZWQoKikge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGlkPVwiY29udGFpbmVyXCIgcm9sZT1cIm5vbmVcIj5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG59XG5cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdiYXNpYy1hbmltYXRpb24tc3RhZ2UnLCBBbmltYXRpb25TdGFnZSk7XG5leHBvcnQgZGVmYXVsdCBBbmltYXRpb25TdGFnZTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgdHJhbnNwaWxlZCB0byBjcmVhdGUgYW4gRVM1LWNvbXBhdGlibGUgZGlzdHJpYnV0aW9uIGluIHdoaWNoXG4gKiB0aGUgcGFja2FnZSdzIG1haW4gZmVhdHVyZShzKSBhcmUgYXZhaWxhYmxlIHZpYSB0aGUgd2luZG93LkJhc2ljIGdsb2JhbC5cbiAqIElmIHlvdSdyZSBhbHJlYWR5IHVzaW5nIEVTNiB5b3Vyc2VsZiwgaWdub3JlIHRoaXMgZmlsZSwgYW5kIGluc3RlYWQgaW1wb3J0XG4gKiB0aGUgc291cmNlIGZpbGUocykgeW91IHdhbnQgZnJvbSB0aGUgc3JjIGZvbGRlci5cbiAqL1xuXG5pbXBvcnQgQXV0b3NpemVUZXh0YXJlYSBmcm9tICcuL3NyYy9BdXRvc2l6ZVRleHRhcmVhJztcblxud2luZG93LkJhc2ljID0gd2luZG93LkJhc2ljIHx8IHt9O1xud2luZG93LkJhc2ljLkF1dG9zaXplVGV4dGFyZWEgPSBBdXRvc2l6ZVRleHRhcmVhO1xuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9jcmVhdGVTeW1ib2wnO1xuaW1wb3J0IFdyYXBwZWRTdGFuZGFyZEVsZW1lbnQgZnJvbSAnLi4vLi4vYmFzaWMtd3JhcHBlZC1zdGFuZGFyZC1lbGVtZW50L3NyYy9XcmFwcGVkU3RhbmRhcmRFbGVtZW50JztcbmltcG9ydCBEaXN0cmlidXRlZENoaWxkcmVuQ29udGVudE1peGluIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW5Db250ZW50TWl4aW4nO1xuaW1wb3J0IEdlbmVyaWNNaXhpbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9HZW5lcmljTWl4aW4nO1xuaW1wb3J0IHN5bWJvbHMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvc3ltYm9scyc7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IGxpbmVIZWlnaHRTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2xpbmVIZWlnaHQnKTtcbmNvbnN0IG1pbmltdW1Sb3dzU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdtaW5pbXVtUm93cycpO1xuY29uc3QgdmFsdWVUcmFja3NDb250ZW50U3ltYm9sID0gY3JlYXRlU3ltYm9sKCd2YWx1ZVRyYWNrc0NvbnRlbnQnKTtcblxuY29uc3QgYmFzZSA9IFdyYXBwZWRTdGFuZGFyZEVsZW1lbnQud3JhcCgndGV4dGFyZWEnKS5jb21wb3NlKFxuICBEaXN0cmlidXRlZENoaWxkcmVuQ29udGVudE1peGluLFxuICBHZW5lcmljTWl4aW5cbik7XG5cbi8qKlxuICogQSB0ZXh0IGFyZWEgdGhhdCBtYWtlcyBpdHNlbGYgYmlnIGVub3VnaCB0byBzaG93IGl0cyBjb250ZW50LlxuICpcbiAqIFtMaXZlIGRlbW9dKGh0dHA6Ly9iYXNpY3dlYmNvbXBvbmVudHMub3JnL2Jhc2ljLXdlYi1jb21wb25lbnRzL3BhY2thZ2VzL2Jhc2ljLWF1dG9zaXplLXRleHRhcmVhLylcbiAqXG4gKiBUaGlzIHRleHQgaW5wdXQgY29tcG9uZW50IGlzIHVzZWZ1bCBpbiBzaXR1YXRpb25zIHdoZXJlIHlvdSB3YW50IHRvIGFzayB0aGVcbiAqIHVzZXIgdG8gZW50ZXIgYXMgbXVjaCB0ZXh0IGFzIHRoZXkgd2FudCwgYnV0IGRvbid0IHdhbnQgdG8gdGFrZSB1cCBhIGxvdCBvZlxuICogcm9vbSBvbiB0aGUgcGFnZS5cbiAqXG4gKiBUaGUgY29tcG9uZW50IHdvcmtzIGJ5IGNvcHlpbmcgdGhlIHRleHQgdG8gYW4gaW52aXNpYmxlIGVsZW1lbnQgd2hpY2ggd2lsbFxuICogYXV0b21hdGljYWxseSBncm93IGluIHNpemU7IHRoZSBleHBhbmRpbmcgY29weSB3aWxsIGV4cGFuZCB0aGUgY29udGFpbmVyLFxuICogd2hpY2ggaW4gdHVybiB3aWxsIHZlcnRpY2FsbHkgc3RyZXRjaCB0aGUgdGV4dCBhcmVhIHRvIG1hdGNoLlxuICpcbiAqIFRoaXMgY29tcG9uZW50IGdlbmVyYWxseSBleHBvc2VzIGFsbCB0aGUgc2FtZSBhdHRyaWJ1dGVzL3Byb3BlcnRpZXMgYXMgYVxuICogc3RhbmRhcmQgSFRNTCBgPHRleHRhcmVhPmAuXG4gKlxuICogQG1peGVzIEdlbmVyaWNNaXhpblxuICogQG1peGVzIERpc3RyaWJ1dGVkQ2hpbGRyZW5Db250ZW50TWl4aW5cbiAqL1xuY2xhc3MgQXV0b3NpemVUZXh0YXJlYSBleHRlbmRzIGJhc2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmlubmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZXZlbnQgPT4ge1xuICAgICAgdmFsdWVDaGFuZ2VkKHRoaXMpO1xuICAgIH0pO1xuICAgIHRoaXMuaW5uZXIuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBldmVudCA9PiB7XG4gICAgICBrZXlwcmVzcyh0aGlzLCBldmVudCk7XG4gICAgfSk7XG5cbiAgICAvLyBTZXQgZGVmYXVsdHMuXG4gICAgaWYgKHR5cGVvZiB0aGlzLm1pbmltdW1Sb3dzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5taW5pbXVtUm93cyA9IHRoaXNbc3ltYm9scy5kZWZhdWx0c10ubWluaW11bVJvd3M7XG4gICAgfVxuXG4gICAgLy8gQSBzdGFuZGFyZCB0ZXh0YXJlYSBoYXMgaXRzIHZhbHVlIHRyYWNrIGl0cyB0ZXh0Q29udGVudCBieSBkZWZhdWx0LlxuICAgIC8vIFRoYXQgaXMsIGNoYW5nZXMgdG8gdGV4dENvbnRlbnQgdXBkYXRlIHRoZSB2YWx1ZS4gSG93ZXZlciwgaWYgYW4gYXR0ZW1wdFxuICAgIC8vIGlzIG1hZGUgdG8gY2hhbmdlIHRoZSB2YWx1ZSBkaXJlY3RseSwgdGhpcyBicmVha3MgdGhlIGF1dG9tYXRpYyB0cmFja2luZy5cbiAgICAvLyBGcm9tIHRoYXQgcG9pbnQgb24sIGNoYW5nZXMgdG8gdGV4dENvbnRlbnQgZG8gKm5vdCogdXBkYXRlIHRoZSB2YWx1ZS5cbiAgICB0aGlzW3ZhbHVlVHJhY2tzQ29udGVudFN5bWJvbF0gPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2l6ZSB0aGUgZWxlbWVudCBzdWNoIHRoYXQgdGhlIHRleHRhcmVhIGNhbiBleGFjdGx5IGNvbnRhaW4gaXRzIGNvbnRlbnQuXG4gICAqIEJ5IGRlZmF1bHQsIHRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbmV2ZXIgdGhlIHRleHQgY29udGVudCBjaGFuZ2VzLlxuICAgKi9cbiAgYXV0b1NpemUoKSB7XG4gICAgLy8gSWYgd2UgaGFkIHNwZWN1bGF0aXZlbHkgYWRkZWQgYW4gZXh0cmEgbGluZSBiZWNhdXNlIG9mIGFuIEVudGVyIGtleXByZXNzLFxuICAgIC8vIHdlIGNhbiBub3cgaGlkZSB0aGUgZXh0cmEgbGluZS5cbiAgICB0aGlzLiQuZXh0cmFMaW5lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAvLyBXZSByZXNpemUgYnkgY29weWluZyB0aGUgdGV4dGFyZWEgY29udGVudHMgdG8gdGhlIGVsZW1lbnQgaXRzZWxmOyB0aGVcbiAgICAvLyB0ZXh0IHdpbGwgdGhlbiBhcHBlYXIgKHZpYSA8c2xvdD4pIGluc2lkZSB0aGUgaW52aXNpYmxlIGRpdi4gSWZcbiAgICAvLyB3ZSd2ZSBzZXQgdGhpbmdzIHVwIGNvcnJlY3RseSwgdGhpcyBuZXcgY29udGVudCBzaG91bGQgdGFrZSB1cCB0aGUgc2FtZVxuICAgIC8vIGFtb3VudCBvZiByb29tIGFzIHRoZSBzYW1lIHRleHQgaW4gdGhlIHRleHRhcmVhLiBVcGRhdGluZyB0aGUgZWxlbWVudCdzXG4gICAgLy8gY29udGVudCBhZGp1c3RzIHRoZSBlbGVtZW50J3Mgc2l6ZSwgd2hpY2ggaW4gdHVybiB3aWxsIG1ha2UgdGhlIHRleHRhcmVhXG4gICAgLy8gdGhlIGNvcnJlY3QgaGVpZ2h0LlxuICAgIHRoaXMuJC50ZXh0Q29weS50ZXh0Q29udGVudCA9IHRoaXMudmFsdWU7XG4gIH1cblxuICAvLyBOb3JtYWxseSB0aGUgdmFsdWUgb2YgdGhlIGVsZW1lbnQgaXMgc2V0IGFuZCByZWFkIHRocm91Z2ggaXRzIHZhbHVlXG4gIC8vIGF0dHJpYnV0ZS4gQXMgYSBjb252ZW5pZW5jZSwgYW5kIHRvIG1pcnJvciBzdGFuZGFyZCB0ZXh0YXJlYSBiZWhhdmlvciwgaXRcbiAgLy8gaXMgcG9zc2libGUgdG8gc2V0IHRoZSBjb250ZW50IG9mIHRoZSB0ZXh0YXJlYSBieSBpbmNsdWRpbmcgdGV4dCBiZXR3ZWVuXG4gIC8vIHRoZSBvcGVuaW5nIGFuZCBjbG9zaW5nIHRhZy4gVGhpcyB3b3JrcyBvbmx5IGluIG9uZSBkaXJlY3Rpb246IHNldHRpbmcgdGhlXG4gIC8vIHRhZyBjb250ZW50IHVwZGF0ZXMgdGhlIHRleHRhcmVhLCBidXQgdXNlciBlZGl0cyBpbiB0aGUgdGV4dGFyZWEgYXJlIG5vdFxuICAvLyByZWZsZWN0ZWQgaW4gdGhlIHRhZyBjb250ZW50LiBXZSBjYXB0dXJlIHRoZSB2YWx1ZSBvZiB0aGUgaW5pdGlhbCB0ZXh0XG4gIC8vIGNvbnRlbnQgaW4gb3JkZXIgdG8gc2V0IHRoZSB2YWx1ZSBwcm9wZXJ0eSBkdXJpbmcgdGhlIGNyZWF0ZSBldmVudC5cbiAgLy8gVE9ETzogTm9ybWFsaXplIGluZGVudGF0aW9uIGluIHRoZSB0ZXh0IGNvbnRlbnQuIFVzZXJzIHdpbGwgb2Z0ZW4gd2FudCB0b1xuICAvLyBpbmRlbnQgdGhlIG1hcmt1cCBzbyB0aGF0IGl0IGxvb2tzIHByZXR0eS4gV2Ugc2hvdWxkIGRldGVjdCB0aGUgaW5kZW50YXRpb25cbiAgLy8gbGV2ZWwgYW5kIHJlbW92ZSBhbnkgaW5kZW50YXRpb24gd2hpdGVzcGFjZVxuICAvLyBUT0RPOiBDb25zaWRlciB1c2luZyBjb250ZW50IGlubmVySFRNTCByYXRoZXIgdGhhbiBwbGFpbiB0ZXh0LiBUaGUgbmF0aXZlXG4gIC8vIHRleHRhcmVhIGVsZW1lbnQgd2lsbCBpbmNsdWRlIEhUTUwsIG5vdCBqdXN0IHRoZSBzdHJpcHBlZCB0ZXh0LCBhcyBpbml0aWFsXG4gIC8vIHZhbHVlIHByb3BlcnR5IHRleHQuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGlmIChzdXBlci5jb25uZWN0ZWRDYWxsYmFjaykgeyBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpOyB9XG4gICAgaW5pdGlhbGl6ZVdoZW5SZW5kZXJlZCh0aGlzKTtcbiAgfVxuXG4gIGNvbnRlbnRDaGFuZ2VkKCkge1xuICAgIGlmIChzdXBlci5jb250ZW50Q2hhbmdlZCkgeyBzdXBlci5jb250ZW50Q2hhbmdlZCgpOyB9XG4gICAgaWYgKHRoaXNbdmFsdWVUcmFja3NDb250ZW50U3ltYm9sXSkge1xuICAgICAgY29uc3QgdGV4dCA9IGdldFRleHRDb250ZW50KHRoaXMpO1xuICAgICAgdGhpcy5pbm5lci52YWx1ZSA9IHVuZXNjYXBlSHRtbCh0ZXh0KTtcbiAgICAgIHZhbHVlQ2hhbmdlZCh0aGlzKTtcbiAgICB9XG4gIH1cblxuICBnZXQgW3N5bWJvbHMuZGVmYXVsdHNdKCkge1xuICAgIGNvbnN0IGRlZmF1bHRzID0gc3VwZXJbc3ltYm9scy5kZWZhdWx0c10gfHwge307XG4gICAgZGVmYXVsdHMubWluaW11bVJvd3MgPSAxO1xuICAgIHJldHVybiBkZWZhdWx0cztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHRoZSBtaW5pbXVtIG51bWJlciBvZiByb3dzIHNob3duLiBUaGlzIGlzIHNpbWlsYXIgdG8gdGhlIHJvd3NcbiAgICogYXR0cmlidXRlIG9uIGEgc3RhbmRhcmQgdGV4dGFyZWEsIGJ1dCBiZWNhdXNlIHRoaXMgZWxlbWVudCBjYW4gZ3JvdywgaXNcbiAgICogZXhwcmVzc2VkIGFzIGEgbWluaW11bSByYXRoZXIgdGhhbiBhIGZpeGVkIG51bWJlci5cbiAgICpcbiAgICogQnkgZGVmYXVsdCwgdGhpcyBwcm9wZXJ0eSBpcyAxLCBzbyB3aGVuIGVtcHR5LCB0aGUgdGV4dCBhcmVhIHdpbGwgYmUgYVxuICAgKiBzaW5nbGUgbGluZSB0YWxsLiBUaGF0J3MgZWZmaWNpZW50IGluIHRlcm1zIG9mIHRoZSBzcGFjZSBpdCBjb25zdW1lcywgYnV0XG4gICAqIHVudGlsIHRoZSB1c2VyIGludGVyYWN0cyB3aXRoIHRoZSBlbGVtZW50LCB0aGV5IG1heSBub3QgcmVhbGl6ZSB0aGV5IGNhblxuICAgKiBlbnRlciBtdWx0aXBsZSBsaW5lcyBvZiB0ZXh0LiBTZXR0aW5nIHRoZSBwcm9wZXJ0eSB0byBhIHZhbHVlIGhpZ2hlciB0aGFuIDFcbiAgICogd2lsbCBzaWduYWwgdG8gdGhlIHVzZXIgdGhhdCB0aGV5IGNhbiBlbnRlciBtdWx0aXBsZSBsaW5lcyBvZiBhIHRleHQuXG4gICAqXG4gICAqIEJ5IHNldHRpbmcgdGhpcyBwcm9wZXJ0eSwgeW91IGNhbiBhbHNvIGNvbW11bmljYXRlIHRvIHRoZSB1c2VyIHNvbWUgc2Vuc2VcbiAgICogb2YgaG93IG11Y2ggdGV4dCB5b3UncmUgZXhwZWN0aW5nIHRoZW0gdG8gcHJvdmlkZS4gRm9yIGV4YW1wbGUsIG9uIGFcbiAgICogZmVlZGJhY2sgZm9ybSwgYXNraW5nIHRoZSB1c2VyIHRvIGVudGVyIHRoZWlyIGZlZWRiYWNrIGluIGEgc2luZ2xlLWxpbmVcbiAgICogdGV4dCBib3ggaW1wbGllcyB5b3UgZG9uJ3QgcmVhbGx5IHdhbnQgdGhlbSB0byBlbnRlciBtdWNoIHRleHQg4oCUIGV2ZW4gaWZcbiAgICogdGhlIHRleHQgYm94IHdpbGwgZ3JvdyB3aGVuIHRoZXkgdHlwZS4gQnkgc2V0dGluZyB0aGlzIHRvIGEgdmFsdWUgbGlrZSxcbiAgICogc2F5LCAxMCByb3dzLCB5b3UgY2FuIHNpZ25hbCB0aGF0IHlvdSdyZSBmdWxseSBleHBlY3RpbmcgdGhlbSB0byBlbnRlciBtb3JlXG4gICAqIHRleHQuXG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBkZWZhdWx0IDFcbiAgICovXG4gIGdldCBtaW5pbXVtUm93cygpIHtcbiAgICByZXR1cm4gdGhpc1ttaW5pbXVtUm93c1N5bWJvbF07XG4gIH1cbiAgc2V0IG1pbmltdW1Sb3dzKHZhbHVlKSB7XG4gICAgdGhpc1ttaW5pbXVtUm93c1N5bWJvbF0gPSBwYXJzZUludCh2YWx1ZSk7XG4gICAgaWYgKHRoaXNbbGluZUhlaWdodFN5bWJvbF0pIHtcbiAgICAgIHNldE1pbmltdW1IZWlnaHQodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IFtzeW1ib2xzLnRlbXBsYXRlXSgpIHtcbiAgICByZXR1cm4gYFxuICAgICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgI2F1dG9TaXplQ29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICAvKlxuICAgICAgICogRW5zdXJlIGJvdGggdGhlIHRleHQgYXJlYSBhbmQgY29weSBlbmQgdXAgd2l0aCB0aGUgZWxlbWVudCdzIG93biBmb250XG4gICAgICAgKiBtZXRyaWNzLCBzbyB0aGF0IHRleHQgd2lsbCBsYXkgb3V0IHRoZSBzYW1lIGluIGJvdGggb2YgdGhlbS5cbiAgICAgICAqL1xuICAgICAgI2lubmVyLFxuICAgICAgI2NvcHlDb250YWluZXIge1xuICAgICAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgIGZvbnQtc3R5bGU6IGluaGVyaXQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuXG4gICAgICAjaW5uZXIge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmVzaXplOiBub25lO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBAYXBwbHkoLS10ZXh0YXJlYSk7XG4gICAgICB9XG5cbiAgICAgICNjb3B5Q29udGFpbmVyIHtcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7IC8qIFNvIGxpbmVzIHdyYXAgKi9cbiAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkOyAvKiBTbyB3ZSBicmVhayBhdCB3b3JkIGJvdW5kYXJpZXMgd2hlbiBwb3NzaWJsZSAqL1xuICAgICAgfVxuXG4gICAgICAjY29udGVudENvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8IS0tXG4gICAgICBUaGUgaW52aXNpYmxlIGNvcHlDb250YWluZXIgY29udGFpbnMgYW4gZXh0cmFTcGFjZSBlbGVtZW50IHRoYXQgZW5zdXJlcyB0aGF0LFxuICAgICAgZXZlbiBpZiB0aGUgbGFzdCBsaW5lIG9mIHRoZSB0ZXh0YXJlYSBpcyBibGFuaywgdGhlcmUgd2lsbCBiZSBzb21ldGhpbmcgaW4gdGhlXG4gICAgICBsaW5lIHRoYXQgZm9yY2VzIHRoZSB0ZXh0IGNvcHkgdG8gZ3JvdyBieSBhIGxpbmUuIFRoaXMgZXh0cmEgc3BhY2UgaXMgYSB0aGluXG4gICAgICBzcGFjZSwgdG8gcmVkdWNlIHRoZSBhbW91bnQgYnkgd2hpY2ggdGhlIHRleHQgY29weSB3aWxsIHByZW1hdHVyZWx5IGdyb3cuXG5cbiAgICAgIFRoZSBjb3B5Q29udGFpbmVyIGFsc28gY29udGFpbnMgYW4gZXh0cmFMaW5lIGVsZW1lbnQgZXhpc3RzIHRvIGRlYWwgd2l0aCB0aGVcbiAgICAgIGZhY3QgdGhhdCwgaWYgdGhlIHVzZXIgcHJlc3NlcyB0aGUgRW50ZXIga2V5IGRvd24sIHRoZSB0ZXh0YXJlYSdzIGNvbnRlbnQgd2lsbFxuICAgICAgbW92ZSBiZWZvcmUgdGhlIGNvbXBsZXRlIHRleHQgaXMgYXZhaWxhYmxlLiBTZWUgbm90ZXMgYXQgX2tleXByZXNzLlxuXG4gICAgICBMYXN0bHksIHdlIHB1dCB0aGUgSFRNTCBjb250ZW50IGVsZW1lbnQgaW50byBhIHNlcGFyYXRlIGNvbnRhaW5lciBzbyB3ZSBjYW5cbiAgICAgIGhpZGUgaXQuIFdlIG5lZWQgdG8gaGF2ZSBhIGNvbnRlbnQgZWxlbWVudCBzb21ld2hlcmUgaW4gdGhlIHRlbXBsYXRlIHRvXG4gICAgICBjb252aW5jZSBQb2x5bWVyIHRoYXQgd2UgY2FyZSBhYm91dCB0aGUgY29udGVudCBpbiB0aGUgU2hhZHkgRE9NIGNhc2UgLS1cbiAgICAgIHdpdGhvdXQgdGhhdCBjb250ZW50IGVsZW1lbnQsIFNoYWR5IERPTSB3aWxsIGNvbmNsdWRlIHRoZSBlbGVtZW50IGRvZXNuJ3RcbiAgICAgIG5lZWQgaXRzIGxpZ2h0IERPTSBjb250ZW50LCBhbmQgd2lsbCB0aHJvdyBpdCBhd2F5LlxuICAgICAgLS0+XG4gICAgICA8ZGl2IGlkPVwiYXV0b1NpemVDb250YWluZXJcIj5cbiAgICAgICAgPHRleHRhcmVhIGlkPVwiaW5uZXJcIj48L3RleHRhcmVhPlxuICAgICAgICA8ZGl2IGlkPVwiY29weUNvbnRhaW5lclwiPjxzcGFuIGlkPVwidGV4dENvcHlcIj48L3NwYW4+PHNwYW4gaWQ9XCJleHRyYVNwYWNlXCI+JnRoaW5zcDs8L3NwYW4+PGRpdiBpZD1cImV4dHJhTGluZVwiPiZuYnNwOzwvZGl2PjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGlkPVwiY29udGVudENvbnRhaW5lclwiPlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZXh0IGN1cnJlbnRseSBzaG93biBpbiB0aGUgdGV4dGFyZWEuXG4gICAqXG4gICAqIE5vdGUgdGhhdCB0aGUgdGV4dCBzaG93biBpbiB0aGUgdGV4dGFyZWEgY2FuIGFsc28gYmUgdXBkYXRlZCBieSBjaGFuZ2luZ1xuICAgKiB0aGUgZWxlbWVudCdzIGlubmVySFRNTC90ZXh0Q29udGVudC4gSG93ZXZlciwgaWYgdGhlIHZhbHVlIHByb3BlcnR5IGlzXG4gICAqIGV4cGxpY2l0bHkgc2V0LCB0aGF0IHdpbGwgb3ZlcnJpZGUgdGhlIGlubmVySFRNTC90ZXh0Q29udGVudC5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbm5lci52YWx1ZTtcbiAgfVxuICBzZXQgdmFsdWUodGV4dCkge1xuICAgIC8vIEV4cGxpY2l0bHkgc2V0dGluZyB2YWx1ZSBicmVha3MgYXV0b21hdGljIHVwZGF0ZSBvZiB2YWx1ZSBmcm9tIGNvbnRlbnQuXG4gICAgdGhpc1t2YWx1ZVRyYWNrc0NvbnRlbnRTeW1ib2xdID0gZmFsc2U7XG4gICAgdGhpcy5pbm5lci52YWx1ZSA9IHRleHQ7XG4gICAgdmFsdWVDaGFuZ2VkKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gdGhlIHVzZXIgdHlwZXMgaW4gdGhlIHRleHRhcmVhLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQXV0b3NpemVUZXh0YXJlYVxuICAgKiBAZXZlbnQgY2hhbmdlXG4gICAqL1xufVxuXG5cbmZ1bmN0aW9uIGdldFRleHRDb250ZW50KGVsZW1lbnQpIHtcbiAgbGV0IHRleHQgPSBlbGVtZW50LmRpc3RyaWJ1dGVkVGV4dENvbnRlbnQ7XG5cbiAgLy8gVHJpbSB0aGUgdGV4dC5cbiAgLy8gVGhpcyBpcyBub24tc3RhbmRhcmQgdGV4dGFyZWEgYmVoYXZpb3IuIEEgc3RhbmRhcmQgdGV4dGFyZWEgd2lsbCB0cmltIHRoZVxuICAvLyBmaXJzdCBjaGFyYWN0ZXIgaWYgaXQncyBhIG5ld2xpbmUsIGJ1dCB0aGF0J3MgaXQuIEhvd2V2ZXIsIGF1dGhvcnMgd2lsbFxuICAvLyB3YW50IHRvIGJlIGFibGUgdG8gcGxhY2UgdGhlIG9wZW5pbmcgYW5kIGNsb3NpbmcgdGFncyBvbiB0aGVpciBvd24gbGluZXMuXG4gIC8vIFNvIGl0IHNlZW1zIG1vcmUgaGVscGZ1bCB0byB0cmltIHdoaXRlc3BhY2Ugb24gZWl0aGVyIHNpZGUuXG4gIHRleHQgPSB0ZXh0LnRyaW0oKTtcblxuICByZXR1cm4gdGV4dDtcbn1cblxuXG4vLyBTZXQgdXAgb25jZSB0aGlzIGNvbXBvbmVudCBoYXMgYmVlbiByZW5kZXJlZC5cbi8vXG4vLyBPbiBDaHJvbWUgKGFzIG9mIDEwLzIzLzE0KSBhdCBsZWFzdCwgaWYgYW4gaW5zdGFuY2UgaWYgdGhpcyBjb21wb25lbnQgaXNcbi8vIGFkZGVkIGR5bmFtaWNhbGx5LCBpdHMgYXR0YWNoZWQgaGFuZGxlciBtYXkgdHJpZ2dlciBiZWZvcmUgaXRzIGJlZW5cbi8vIHJlbmRlcmVkLiBUaGF0IHdvdWxkIGNhdXNlIG91ciBsYXlvdXQgY2FsY3VsYXRpb25zIHRvIGJlIGluY29ycmVjdC5cbi8vXG5mdW5jdGlvbiBpbml0aWFsaXplV2hlblJlbmRlcmVkKGVsZW1lbnQpIHtcblxuICAvLyBJZiB0aGUgY29tcG9uZW50IGhhcyBiZWVuIHJlbmRlcmVkLCBvdXIgaGVpZ2h0IHNob3VsZCBiZSBub256ZXJvLlxuICBpZiAoZWxlbWVudC5jbGllbnRIZWlnaHQgPT09IDApIHtcbiAgICAvLyBOb3QgcmVuZGVyZWQgeWV0OiB3YWl0IGEgYml0IGJlZm9yZSB0cnlpbmcgYWdhaW4uXG4gICAgc2V0VGltZW91dCgoKSA9PiBpbml0aWFsaXplV2hlblJlbmRlcmVkKGVsZW1lbnQpLCAxMCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gSWYgd2UgcmVhY2ggdGhpcyBwb2ludCwgdGhlIGNvbXBvbmVudCdzIGVsZW1lbnRzIHNob3VsZCBieSBzdHlsZWQuXG5cbiAgLy8gRm9yIGF1dG8tc2l6aW5nIHRvIHdvcmssIHdlIG5lZWQgdGhlIHRleHQgY29weSB0byBoYXZlIHRoZSBzYW1lIGJvcmRlcixcbiAgLy8gcGFkZGluZywgYW5kIG90aGVyIHJlbGV2YW50IGNoYXJhY3RlcmlzdGljcyBhcyB0aGUgb3JpZ2luYWwgdGV4dCBhcmVhLlxuICAvLyBTaW5jZSB0aG9zZSBhc3BlY3RzIGFyZSBhZmZlY3RlZCBieSBDU1MsIHdlIGhhdmUgdG8gd2FpdCB1bnRpbCB0aGVcbiAgLy8gZWxlbWVudCBpcyBpbiB0aGUgZG9jdW1lbnQgYmVmb3JlIHdlIGNhbiB1cGRhdGUgdGhlIHRleHQgY29weS5cbiAgY29uc3QgdGV4dEJveFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LmlubmVyKTtcbiAgY29uc3QgY29weUNvbnRhaW5lclN0eWxlID0gZWxlbWVudC4kLmNvcHlDb250YWluZXIuc3R5bGU7XG4gIGNvcHlDb250YWluZXJTdHlsZS5ib3JkZXJCb3R0b21TdHlsZSAgPSB0ZXh0Qm94U3R5bGUuYm9yZGVyQm90dG9tU3R5bGU7XG4gIGNvcHlDb250YWluZXJTdHlsZS5ib3JkZXJCb3R0b21XaWR0aCAgPSB0ZXh0Qm94U3R5bGUuYm9yZGVyQm90dG9tV2lkdGg7XG4gIGNvcHlDb250YWluZXJTdHlsZS5ib3JkZXJMZWZ0U3R5bGUgICAgPSB0ZXh0Qm94U3R5bGUuYm9yZGVyTGVmdFN0eWxlO1xuICBjb3B5Q29udGFpbmVyU3R5bGUuYm9yZGVyTGVmdFdpZHRoICAgID0gdGV4dEJveFN0eWxlLmJvcmRlckxlZnRXaWR0aDtcbiAgY29weUNvbnRhaW5lclN0eWxlLmJvcmRlclJpZ2h0U3R5bGUgICA9IHRleHRCb3hTdHlsZS5ib3JkZXJSaWdodFN0eWxlO1xuICBjb3B5Q29udGFpbmVyU3R5bGUuYm9yZGVyUmlnaHRXaWR0aCAgID0gdGV4dEJveFN0eWxlLmJvcmRlclJpZ2h0V2lkdGg7XG4gIGNvcHlDb250YWluZXJTdHlsZS5ib3JkZXJUb3BTdHlsZSAgICAgPSB0ZXh0Qm94U3R5bGUuYm9yZGVyVG9wU3R5bGU7XG4gIGNvcHlDb250YWluZXJTdHlsZS5ib3JkZXJUb3BXaWR0aCAgICAgPSB0ZXh0Qm94U3R5bGUuYm9yZGVyVG9wV2lkdGg7XG4gIGNvcHlDb250YWluZXJTdHlsZS5wYWRkaW5nQm90dG9tICAgICAgPSB0ZXh0Qm94U3R5bGUucGFkZGluZ0JvdHRvbTtcbiAgY29weUNvbnRhaW5lclN0eWxlLnBhZGRpbmdMZWZ0ICAgICAgICA9IHRleHRCb3hTdHlsZS5wYWRkaW5nTGVmdDtcbiAgY29weUNvbnRhaW5lclN0eWxlLnBhZGRpbmdSaWdodCAgICAgICA9IHRleHRCb3hTdHlsZS5wYWRkaW5nUmlnaHQ7XG4gIGNvcHlDb250YWluZXJTdHlsZS5wYWRkaW5nVG9wICAgICAgICAgPSB0ZXh0Qm94U3R5bGUucGFkZGluZ1RvcDtcblxuICAvLyBVc2UgdGhlIGV4dHJhTGluZSBtZW1iZXIgdG8gZ2F1Z2UgdGhlIGV4cGVjdGVkIGhlaWdodCBvZiBhIHNpbmdsZSBsaW5lIG9mXG4gIC8vIHRleHQuIFdlIGNhbid0IHVzZSBsaW5lSGVpZ2h0LCBiZWNhdXNlIHRoYXQgY2FuIGJlIHJlcG9ydGVkIGFzIFwibm9ybWFsXCIsXG4gIC8vIGFuZCB3ZSB3YW50IHRvIGtub3cgdGhlIGFjdHVhbCBwaXhlbCBoZWlnaHQuXG4gIGVsZW1lbnQuJC5leHRyYUxpbmUuc3R5bGUuZGlzcGxheSA9ICdpbmhlcml0JztcbiAgZWxlbWVudFtsaW5lSGVpZ2h0U3ltYm9sXSA9IGVsZW1lbnQuJC5leHRyYUxpbmUuY2xpZW50SGVpZ2h0O1xuXG4gIC8vIE5vdyB0aGF0IHdlIGtub3cgdGhlIGxpbmUgaGVpZ2h0LCB3ZSBjYW4gaGlkZSB0aGUgZXh0cmEgbGluZS5cbiAgZWxlbWVudC4kLmV4dHJhTGluZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gIC8vIFVzZSB0aGUgbGluZSBoZWlnaHQgaW4gY29uanVuY3Rpb24gd2l0aCBtaW5pbXVtUm93cyB0byBlc3RhYmxpc2ggdGhlXG4gIC8vIG92ZXJhbGwgbWluaW11bSBoZWlnaHQgb2YgdGhlIGNvbXBvbmVudC5cbiAgc2V0TWluaW11bUhlaWdodChlbGVtZW50KTtcbn1cblxuXG4vLyBTcGVjdWxhdGl2ZWx5IGFkZCBhIGxpbmUgdG8gb3VyIGNvcHkgb2YgdGhlIHRleHQuIFdlJ3JlIG5vdCBzdXJlIHdoYXQgdGhlXG4vLyBleGFjdCBlZmZlY3Qgb2YgdHlwaW5nIHRoaXMgY2hhcmFjdGVyIHdpbGwgYmUsIGFuZCBhdCB0aGlzIHBvaW50IGl0J3Mgbm90XG4vLyByZWZsZWN0ZWQgeWV0IGluIHRoZSB0ZXh0YXJlYSdzIGNvbnRlbnQuIFdlIHNwZWN1bGF0ZSB0aGF0IGl0IHdpbGwgYWRkIGFcbi8vIGxpbmUgdG8gdGhlIHRleHQgYW5kIHNpemUgYWNjb3JkaW5nbHkuIChPbmUgb3RoZXIgcG9zc2liaWxpdHkgaXMgdGhhdCB0aGVcbi8vIHVzZXIncyByZXBsYWNpbmcgYSBzZWxlY3RlZCBjaHVuayBvZiB0ZXh0IHdpdGggYSBuZXdsaW5lLikgSW4gYW55IGV2ZW50LFxuLy8gb25jZSB3ZSBnZXQgdGhlIGtleXVwIG9yIGNoYW5nZSBldmVudCwgd2UnbGwgbWFrZSBhbnkgZmluYWwgYWRqdXN0bWVudHMuXG4vL1xuLy8gVE9ETzogSWYgdGhlIHVzZXIgaG9sZHMgZG93biB0aGUgRW50ZXIga2V5LCB3ZSBjYW4gZ2V0IGEgYnVuY2ggb2Yga2V5cHJlc3Ncbi8vIGV2ZW50cyBiZWZvcmUgd2UgZ2V0IGtleXVwLiBUaGlzIGNhdXNlcyBmbGlja2VyLiBJbnN0ZWFkIG9mIHN1cHBvcnRpbmcgb25seVxuLy8gYSBzaW5nbGUgZXh0cmEgc3BlY3VsYXRpdmUgbGluZSwgd2Ugc2hvdWxkIGdyb3cgdGhlIHNwZWN1bGF0aXZlIGVsZW1lbnQgdG9cbi8vIGNvbnRhaW4gdGhlIG51bWJlciBvZiBFbnRlciBrZXlwcmVzc2VzIHdlJ3ZlIHJlY2VpdmVkLlxuZnVuY3Rpb24ga2V5cHJlc3MoZWxlbWVudCwgZXZlbnQpIHtcbiAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzIC8qIEVudGVyICovKSB7XG4gICAgZWxlbWVudC4kLmV4dHJhTGluZS5zdHlsZS5kaXNwbGF5ID0gJ2luaGVyaXQnO1xuICB9XG59XG5cblxuLy8gU2V0dGluZyB0aGUgbWluaW11bVJvd3MgYXR0cmlidXRlIHRyYW5zbGF0ZXMgaW50byBzZXR0aW5nIHRoZSBtaW5pbXVtXG4vLyBoZWlnaHQgb24gdGhlIHRleHQgY29weSBjb250YWluZXIuXG5mdW5jdGlvbiBzZXRNaW5pbXVtSGVpZ2h0KGVsZW1lbnQpIHtcbiAgY29uc3QgY29weUNvbnRhaW5lciA9IGVsZW1lbnQuJC5jb3B5Q29udGFpbmVyO1xuICBjb25zdCBvdXRlckhlaWdodCA9IGNvcHlDb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICBjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoY29weUNvbnRhaW5lcik7XG4gIGNvbnN0IHBhZGRpbmdUb3AgPSBwYXJzZUZsb2F0KHN0eWxlLnBhZGRpbmdUb3ApO1xuICBjb25zdCBwYWRkaW5nQm90dG9tID0gcGFyc2VGbG9hdChzdHlsZS5wYWRkaW5nQm90dG9tKTtcbiAgY29uc3QgaW5uZXJIZWlnaHQgPSBjb3B5Q29udGFpbmVyLmNsaWVudEhlaWdodCAtIHBhZGRpbmdUb3AgLSBwYWRkaW5nQm90dG9tO1xuICBjb25zdCBib3JkZXJzUGx1c1BhZGRpbmcgPSBvdXRlckhlaWdodCAtIGlubmVySGVpZ2h0O1xuICBsZXQgbWluSGVpZ2h0ID0gKGVsZW1lbnQubWluaW11bVJvd3MgKiBlbGVtZW50W2xpbmVIZWlnaHRTeW1ib2xdKSArIGJvcmRlcnNQbHVzUGFkZGluZztcbiAgbWluSGVpZ2h0ID0gTWF0aC5jZWlsKG1pbkhlaWdodCk7XG4gIGNvcHlDb250YWluZXIuc3R5bGUubWluSGVpZ2h0ID0gbWluSGVpZ2h0ICsgJ3B4Jztcbn1cblxuXG5mdW5jdGlvbiB1bmVzY2FwZUh0bWwoaHRtbCkge1xuICByZXR1cm4gaHRtbFxuICAgIC5yZXBsYWNlKC8mYW1wOy9nLCAnJicpXG4gICAgLnJlcGxhY2UoLyZsdDsvZywgJzwnKVxuICAgIC5yZXBsYWNlKC8mZ3Q7L2csIFwiPlwiKVxuICAgIC5yZXBsYWNlKC8mcXVvdDsvZywgJ1xcXCInKVxuICAgIC5yZXBsYWNlKC8mIzAzOTsvZywgJ1xcJycpO1xufVxuXG5cbi8qXG4gKiBIYW5kbGUgYSBjaGFuZ2UgaW4gdGhlIGVsZW1lbnQncyB2YWx1ZSBwcm9wZXJ0eS5cbiAqL1xuZnVuY3Rpb24gdmFsdWVDaGFuZ2VkKGVsZW1lbnQpIHtcbiAgZWxlbWVudC5hdXRvU2l6ZSgpO1xuICBlbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCd2YWx1ZS1jaGFuZ2VkJykpO1xufVxuXG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYmFzaWMtYXV0b3NpemUtdGV4dGFyZWEnLCBBdXRvc2l6ZVRleHRhcmVhKTtcbmV4cG9ydCBkZWZhdWx0IEF1dG9zaXplVGV4dGFyZWE7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHRyYW5zcGlsZWQgdG8gY3JlYXRlIGFuIEVTNS1jb21wYXRpYmxlIGRpc3RyaWJ1dGlvbiBpbiB3aGljaFxuICogdGhlIHBhY2thZ2UncyBtYWluIGZlYXR1cmUocykgYXJlIGF2YWlsYWJsZSB2aWEgdGhlIHdpbmRvdy5CYXNpYyBnbG9iYWwuXG4gKiBJZiB5b3UncmUgYWxyZWFkeSB1c2luZyBFUzYgeW91cnNlbGYsIGlnbm9yZSB0aGlzIGZpbGUsIGFuZCBpbnN0ZWFkIGltcG9ydFxuICogdGhlIHNvdXJjZSBmaWxlKHMpIHlvdSB3YW50IGZyb20gdGhlIHNyYyBmb2xkZXIuXG4gKi9cblxuaW1wb3J0IENhcm91c2VsIGZyb20gJy4vc3JjL0Nhcm91c2VsJztcblxud2luZG93LkJhc2ljID0gd2luZG93LkJhc2ljIHx8IHt9O1xud2luZG93LkJhc2ljLkNhcm91c2VsID0gQ2Fyb3VzZWw7XG4iLCJpbXBvcnQgQW5pbWF0aW9uU3RhZ2UgZnJvbSAnLi4vLi4vYmFzaWMtYW5pbWF0aW9uLXN0YWdlL3NyYy9BbmltYXRpb25TdGFnZSc7XG5pbXBvcnQgRGlyZWN0aW9uU2VsZWN0aW9uTWl4aW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlyZWN0aW9uU2VsZWN0aW9uTWl4aW4nO1xuaW1wb3J0IEtleWJvYXJkRGlyZWN0aW9uTWl4aW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvS2V5Ym9hcmREaXJlY3Rpb25NaXhpbic7XG5pbXBvcnQgS2V5Ym9hcmRNaXhpbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9LZXlib2FyZE1peGluJztcbmltcG9ydCBTd2lwZURpcmVjdGlvbk1peGluIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1N3aXBlRGlyZWN0aW9uTWl4aW4nO1xuaW1wb3J0IHN5bWJvbHMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvc3ltYm9scyc7XG5pbXBvcnQgVHJhY2twYWREaXJlY3Rpb25NaXhpbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9UcmFja3BhZERpcmVjdGlvbk1peGluJztcblxuXG5jb25zdCBiYXNlID0gQW5pbWF0aW9uU3RhZ2UuY29tcG9zZShcbiAgRGlyZWN0aW9uU2VsZWN0aW9uTWl4aW4sXG4gIEtleWJvYXJkTWl4aW4sXG4gIEtleWJvYXJkRGlyZWN0aW9uTWl4aW4sXG4gIFN3aXBlRGlyZWN0aW9uTWl4aW4sXG4gIFRyYWNrcGFkRGlyZWN0aW9uTWl4aW5cbik7XG5cblxuLyoqXG4gKiBMZXRzIHRoZSB1c2VyIG5hdmlnYXRlIGxhdGVyYWxseSB0aHJvdWdoIGEgc2VxdWVuY2Ugb2YgY2hpbGQgZWxlbWVudHMuXG4gKlxuICogYmFzaWMtY2Fyb3VzZWwgaXMgYW4gaW1wbGVtZW50YXRpb24gb2YgdGhlIGNhcm91c2VsIHVzZXIgaW50ZXJmYWNlIHBhdHRlcm4sXG4gKiBjb21tb25seSB1c2VkIGZvciBuYXZpZ2F0aW5nIGJldHdlZW4gaW1hZ2VzLCBwYWdlcywgYW5kIG90aGVyIGVsZW1lbnRzLiBUaGlzXG4gKiBwYXR0ZXJuIHByZXNlbnRzIHRoZSB1c2VyIHdpdGggYSBsaW5lYXIgc2VxdWVuY2Ugb2YgZWxlbWVudHMsIG9ubHkgb25lIG9mXG4gKiB3aGljaCBpcyBzaG93biBhdCBhIHRpbWUuIFRoZSB1c2VyIGNhbiBuYXZpZ2F0ZSB0byB0aGUgbmV4dC9wcmV2aW91cyBlbGVtZW50XG4gKiB3aXRoIGEgdmFyaWV0eSBvZiBpbnB1dCBtZXRob2RzLlxuICpcbiAqIFtMaXZlIGRlbW9dKGh0dHA6Ly9iYXNpY3dlYmNvbXBvbmVudHMub3JnL2Jhc2ljLXdlYi1jb21wb25lbnRzL3BhY2thZ2VzL2Jhc2ljLWNhcm91c2VsLylcbiAqXG4gKiBUaGUgYWJvdmUgZGVtbyBpcyBhIHBsYWluIGNhcm91c2VsLiBJdCdzIG9mdGVuIGNvbWJpbmVkLCBob3dldmVyLCB3aXRoXG4gKiBtaXhpbnMgbGlrZVxuICogW0Fycm93U2VsZWN0aW9uTWl4aW5dKC4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvZG9jcy9BcnJvd1NlbGVjdGlvbk1peGluLm1kKSxcbiAqIFtQYWdlRG90c01peGluXSguLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL2RvY3MvUGFnZURvdHNNaXhpbi5tZCksXG4gKiBbVGltZXJTZWxlY3Rpb25NaXhpbl0oLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9kb2NzL1RpbWVyU2VsZWN0aW9uTWl4aW4ubWQpLlxuICogRm9yIGV4YW1wbGUsIHlvdSBjYW4gdmlldyBhXG4gKiBbZGVtbyB3aXRoIGFycm93cyBhbmQgcGFnZSBkb3RzXShodHRwOi8vYmFzaWN3ZWJjb21wb25lbnRzLm9yZy9iYXNpYy13ZWItY29tcG9uZW50cy9wYWNrYWdlcy9kZW1vcy9jYXJvdXNlbC13aXRoLWFycm93cy1hbmQtZG90cy5odG1sKS5cbiAqIFNlZSB0aGUgc3BlY2lmaWMgbWl4aW5zIGZvciBvdGhlciBjYXJvdXNlbCBkZW1vcy5cbiAqXG4gKiBiYXNpYy1jYXJvdXNlbCB1c2VzIGl0cyBjaGlsZHJlbiBhcyB0aGUgZWxlbWVudHMgdGhlIHVzZXIgd2lsbCBuYXZpZ2F0ZVxuICogdGhyb3VnaC4gSW4gYSB0eXBpY2FsIHVzZSwgYSBiYXNpYy1jYXJvdXNlbCBjYW4gYmUgdXNlZCB0byBuYXZpZ2F0ZSBiZXR3ZWVuIGFcbiAqIHNlcXVlbmNlIG9mIGltYWdlczpcbiAqXG4gKiAgICAgPGJhc2ljLWNhcm91c2VsPlxuICogICAgICAgPGltZyBzcmM9XCJpbWFnZTEuanBnXCI+XG4gKiAgICAgICA8aW1nIHNyYz1cImltYWdlMi5qcGdcIj5cbiAqICAgICAgIDxpbWcgc3JjPVwiaW1hZ2UzLmpwZ1wiPlxuICogICAgIDwvYmFzaWMtY2Fyb3VzZWw+XG4gKlxuICogVGhlIGNoaWxkIGVsZW1lbnRzIGNhbiBiZSBvZiBhbnkgdHlwZSDigJTCoHRoZXkgYXJlIG5vdCByZXN0cmljdGVkIHRvIGltYWdlcy5cbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBhdHRlbXB0cyB0byBtZWV0IHRoZSBbR29sZCBTdGFuZGFyZCBmb3Igd2ViIGNvbXBvbmVudHNdXG4gKiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYmNvbXBvbmVudHMvZ29sZC1zdGFuZGFyZC93aWtpKSBzbyB0aGF0IGl0IGlzIGdlbmVyYWxseVxuICogYXMgZmxleGlibGUgYW5kIHJvYnVzdCBhcyBzdGFuZGFyZCBIVE1MIGVsZW1lbnRzLiBGb3IgZXhhbXBsZSwgaXQgbWVldHMgdGhlXG4gKiBcIkNvbnRlbnQgQ2hhbmdlc1wiIGNyaXRlcmlhOiB0aGUgY2Fyb3VzZWwgd2lsbCBhZGFwdCB0byBuZXcgY2hpbGQgZWxlbWVudHNcbiAqIGFkZGVkIG9yIHJlbW92ZWQgYXQgcnVudGltZS5cbiAqXG4gKiBDdXJyZW50bHksIHRoaXMgY29tcG9uZW50IGRvZXMgbm90IG1lZXQgdGhlIEdvbGQgU3RhbmRhcmQgY3JpdGVyaWEgXCJTaXplIHRvXG4gKiBDb250ZW50XCIuIEFzIGEgcmVzdWx0LCBmb3IgdGhlIHRpbWUgYmVpbmcsICoqeW91IG11c3QgbWFudWFsbHkgc2V0IGEgc2l6ZSBvblxuICogdGhpcyBjb21wb25lbnQqKi4gVHdvIGFwcHJvYWNoZXMgYXJlIHRvOiAxKSBzdHJldGNoIHRoZSBjb21wb25lbnQgYWNyb3NzXG4gKiB3aGF0ZXZlciBzdXJmYWNlIGl0IGlzIGNvbnRhaW5lZCB3aXRoaW4sIG9yIDIpIHNldCBpdCB0byBiZSBsYXJnZXIgdGhhbiB0aGVcbiAqIGxhcmdlc3QgY2hpbGQgZWxlbWVudCB5b3Ugd2FudCB0byBkaXNwbGF5LiBUaGUgZm9ybWVyIGFwcHJvYWNoIGlzIG1vcmVcbiAqIGNvbW1vbiwgYW5kIGNhbiBiZSBhY2hpZXZlZCB3aXRoIENTUyBzdHlsaW5nIHN1Y2ggYXM6XG4gKlxuICogICAgIGh0bWwge1xuICogICAgICAgaGVpZ2h0OiAxMDAlO1xuICogICAgIH1cbiAqXG4gKiAgICAgYm9keSB7XG4gKiAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gKiAgICAgICBkaXNwbGF5OiBmbGV4O1xuICogICAgICAgaGVpZ2h0OiAxMDAlO1xuICogICAgICAgbWFyZ2luOiAwO1xuICogICAgIH1cbiAqXG4gKiAgICAgYmFzaWMtY2Fyb3VzZWwge1xuICogICAgICAgLXdlYmtpdC1mbGV4OiAxO1xuICogICAgICAgZmxleDogMTtcbiAqICAgICB9XG4gKlxuICogVGhlIHN0YW5kYXJkIGJhc2ljLWNhcm91c2VsIGNvbXBvbmVudCBzdXBwb3J0cyBuYXZpZ2F0aW9uIHZpYSB0aGUgZm9sbG93aW5nXG4gKiBpbnB1dCBtZXRob2RzOlxuICpcbiAqICogS2V5Ym9hcmRNaXhpbi4gV2hlbiB0aGUgY2Fyb3VzZWwgaGFzIGZvY3VzLCB0aGUgdXNlciBjYW4gcHJlc3MgTGVmdCwgUmlnaHQsXG4gKiAgIEhvbWUsIG9yIEVuZC4gVGhlc2UgbmF2aWdhdGUgdG8gdGhlIGV4cGVjdGVkIGVsZW1lbnQuXG4gKiAqIFRvdWNoLiBPbiBtb2JpbGUgYW5kIG90aGVyIHRvdWNoLWVuYWJsZWQgZGV2aWNlcywgdGhlIHVzZXIgY2FuIGRyYWcgbGVmdCBvclxuICogICByaWdodC5cbiAqICogVHJhY2twYWQuIFRoZSB1c2VyIGNhbiBzd2lwZSBsZWZ0IG9yIHJpZ2h0IG9uIGEgdHJhY2twYWQgdG8gbmF2aWdhdGUuXG4gKlxuICogQmVjYXVzZSBjYXJvdXNlbHMgYXJlIHVzZWQgaW4gYSB3aWRlIHZhcmlldHkgb2YgY2lyY3Vtc3RhbmNlcywgYnkgZGVmYXVsdFxuICogYmFzaWMtY2Fyb3VzZWwgcHJvdmlkZXMgYSBtaW5pbWFsIGFwcGVhcmFuY2UgYW5kIG5vIHNlcGFyYXRlbHkgaW50ZXJhY3RpdmVcbiAqIGVsZW1lbnRzIHN1Y2ggYXMgYXJyb3cgYnV0dG9ucyBvbiB0aGUgc2lkZSBvciBkb3RzIGFsb25nIHRoZSBib3R0b20uIFRob3NlXG4gKiBlbGVtZW50cyBjYW4gYmUgYWRkZWQgYnkgd3JhcHBpbmcgYSBiYXNpYy1jYXJvdXNlbCBpbiBvcHRpb25hbCBhY2Nlc3NvcmllczpcbiAqXG4gKiAqIFtiYXNpYy1hcnJvdy1zZWxlY3Rpb25dKC4uL2Jhc2ljLWFycm93LXNlbGVjdGlvbikuXG4gKiAgIFRoaXMgYWRkcyBwcm9taW5lbnQgbGVmdCBhbmQgcmlnaHQgYXJyb3cgYnV0dG9ucyBvbiB0aGUgc2lkZSBvZiB0aGUgY2Fyb3VzZWwuXG4gKiAqIFtiYXNpYy1wYWdlLWRvdHNdKC4uL2Jhc2ljLXBhZ2UtZG90cykuXG4gKiAgIFRoaXMgYWRkcyBhIHNlcmllcyBvZiBzbWFsbCBkb3RzIGJlbG93IHRoZSBjYXJvdXNlbCB0byBpbmRpY2F0ZSB0aGUgdXNlcidzXG4gKiAgIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIHNlcXVlbmNlLlxuICogKiBbYmFzaWMtc2xpZGVzaG93LXRpbWVyXSguLi9iYXNpYy1zbGlkZXNob3ctdGltZXIpLlxuICogICBBZHZhbmNlcyB0byB0aGUgbmV4dCBpdGVtIG9uIGEgdGltZXIuXG4gKiAqIFtiYXNpYy10YWItc3RyaXBdKC4uL2Jhc2ljLXRhYi1zdHJpcCkuXG4gKiAgIEFkZHMgYSBzdHJpcCBvZiB0cmFkaXRpb25hbCB0YWIgYnV0dG9ucy5cbiAqXG4gKiBTZWUgdGhvc2UgY29tcG9uZW50cyBmb3IgbW9yZSBkZXRhaWxzLCBidXQgaW4gZ2VuZXJhbCB5b3UgY2FuIGNvbnN0cnVjdCBhXG4gKiBjb21tb24gY2Fyb3VzZWwgd2l0aCBib3RoIGFycm93IGJ1dHRvbnMgYW5kIGRvdHMgbGlrZSBzbzpcbiAqXG4gKiAgICAgPGJhc2ljLWFycm93LXNlbGVjdGlvbj5cbiAqICAgICAgIDxiYXNpYy1wYWdlLWRvdHM+XG4gKiAgICAgICAgIDxiYXNpYy1jYXJvdXNlbD5cbiAqICAgICAgICAgICAuLi4gaW1hZ2VzLCBldGMuIC4uLlxuICogICAgICAgICA8L2Jhc2ljLWNhcm91c2VsPlxuICogICAgICAgPC9iYXNpYy1wYWdlLWRvdHM+XG4gKiAgICAgPC9iYXNpYy1hcnJvdy1zZWxlY3Rpb24+XG4gKlxuICogRm9yIHVuaXZlcnNhbCBhY2Nlc3MsIGJhc2ljLWNhcm91c2VsIGF1dG9tYXRpY2FsbHkgYWRkcyBhIHZhcmlldHkgb2ZcbiAqIFtBUklBXShodHRwOi8vd3d3LnczLm9yZy9XQUkvaW50cm8vYXJpYSkgcHJvcGVydGllcyB0byBpdHNlbGYgYW5kIHRvIGNoaWxkXG4gKiBlbGVtZW50cy4gVGhpcyBoZWxwcyB1c2VycyBuYXZpZ2F0ZSB0aGUgc2VxdWVuY2Ugb2YgZWxlbWVudHMgaW4gdGhlIGNhcm91c2VsXG4gKiB1c2luZyBhc3Npc3RpdmUgdGVjaG5vbG9naWVzLlxuICpcbiAqIEBtaXhlcyBEaXJlY3Rpb25TZWxlY3Rpb25NaXhpblxuICogQG1peGVzIEdlbmVyaWNNaXhpblxuICogQG1peGVzIEtleWJvYXJkTWl4aW5cbiAqIEBtaXhlcyBLZXlib2FyZERpcmVjdGlvbk1peGluXG4gKiBAbWl4ZXMgU3dpcGVEaXJlY3Rpb25NaXhpblxuICogQG1peGVzIFRyYWNrcGFkRGlyZWN0aW9uTWl4aW5cbiAqL1xuY2xhc3MgQ2Fyb3VzZWwgZXh0ZW5kcyBiYXNlIHtcblxuICBnZXQgW3N5bWJvbHMuZGVmYXVsdHNdKCkge1xuICAgIGNvbnN0IGRlZmF1bHRzID0gc3VwZXJbc3ltYm9scy5kZWZhdWx0c10gfHwge307XG4gICAgZGVmYXVsdHMubmF2aWdhdGlvbkF4aXMgPSAnaG9yaXpvbnRhbCc7XG4gICAgZGVmYXVsdHMuc2VsZWN0aW9uQW5pbWF0aW9uRWZmZWN0ID0gJ3NsaWRlV2l0aEdhcCc7XG4gICAgLy8gZGVmYXVsdHMuc2VsZWN0aW9uUmVxdWlyZWQgPSB0cnVlO1xuICAgIHJldHVybiBkZWZhdWx0cztcbiAgfVxuXG59XG5cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdiYXNpYy1jYXJvdXNlbCcsIENhcm91c2VsKTtcbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyB0cmFuc3BpbGVkIHRvIGNyZWF0ZSBhbiBFUzUtY29tcGF0aWJsZSBkaXN0cmlidXRpb24gaW4gd2hpY2hcbiAqIHRoZSBwYWNrYWdlJ3MgbWFpbiBmZWF0dXJlKHMpIGFyZSBhdmFpbGFibGUgdmlhIHRoZSB3aW5kb3cuQmFzaWMgZ2xvYmFsLlxuICogSWYgeW91J3JlIGFscmVhZHkgdXNpbmcgRVM2IHlvdXJzZWxmLCBpZ25vcmUgdGhpcyBmaWxlLCBhbmQgaW5zdGVhZCBpbXBvcnRcbiAqIHRoZSBzb3VyY2UgZmlsZShzKSB5b3Ugd2FudCBmcm9tIHRoZSBzcmMgZm9sZGVyLlxuICovXG5cbmltcG9ydCBDb2xsYXBzaWJsZVBhbmVsIGZyb20gJy4vc3JjL0NvbGxhcHNpYmxlUGFuZWwnO1xuXG53aW5kb3cuQmFzaWMgPSB3aW5kb3cuQmFzaWMgfHwge307XG53aW5kb3cuQmFzaWMuQ29sbGFwc2libGVQYW5lbCA9IENvbGxhcHNpYmxlUGFuZWw7XG4iLCJpbXBvcnQgRWxlbWVudEJhc2UgZnJvbSAnLi4vLi4vYmFzaWMtZWxlbWVudC1iYXNlL3NyYy9FbGVtZW50QmFzZSc7XG5pbXBvcnQgT3BlbkNsb3NlTWl4aW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvT3BlbkNsb3NlTWl4aW4nO1xuaW1wb3J0IHN5bWJvbHMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvc3ltYm9scyc7XG5cblxuLyoqXG4gKiBBIHBhbmVsIHdoaWNoIGNhbiBiZSBleHBhbmRlZC9jb2xsYXBzZWQgd2l0aCBhbiBhbmltYXRlZCB0cmFuc2l0aW9uLlxuICpcbiAqIFtMaXZlIGRlbW9dKGh0dHA6Ly9iYXNpY3dlYmNvbXBvbmVudHMub3JnL2Jhc2ljLXdlYi1jb21wb25lbnRzL3BhY2thZ2VzL2Jhc2ljLWNvbGxhcHNpYmxlLXBhbmVsLylcbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBjb21iaW5lcyB0aGUgT3BlbkNsb3NlTWl4aW4gbWl4aW4gYW5kIGEgc2ltcGxlIENTUyBoZWlnaHRcbiAqIGFuaW1hdGlvbi5cbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBoYW5kbGVzIG9ubHkgdGhlIGR1dGllcyBvZiBjb2xsYXBzaW5nIGFuZCBleHBhbmRpbmcuIEl0IGRvZXNcbiAqIG5vdCBwcm92aWRlIGEgdXNlciBpbnRlcmZhY2UgZm9yIHRoZSB1c2VyIHRvIHRyaWdnZXIgdGhlIGNoYW5nZSBpbiBzdGF0ZTtcbiAqIHlvdSBtdXN0IHByb3ZpZGUgdGhhdCB1c2VyIGludGVyZmFjZSB5b3Vyc2VsZi5cbiAqXG4gKiBAZXh0ZW5kcyBFbGVtZW50QmFzZVxuICogQG1peGVzIE9wZW5DbG9zZU1peGluXG4gKi9cbmNsYXNzIENvbGxhcHNpYmxlUGFuZWwgZXh0ZW5kcyBPcGVuQ2xvc2VNaXhpbihFbGVtZW50QmFzZSkge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy4kLm92ZXJmbG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuY2xvc2VkKSB7XG4gICAgICAgIC8vIFJlbW92ZSB0aGUgaGFyZC1jb2RlZCBoZWlnaHQgd2UgYXBwbGllZCBmb3IgdGhlIHRyYW5zaXRpb24gc28gdGhhdFxuICAgICAgICAvLyB0aGUgZWxlbWVudCB3aWxsIHJlZmxvdyBjb3JyZWN0bHksIGUuZy4sIG9uIHdpbmRvdyByZXNpemUuXG4gICAgICAgIHRoaXMuJC5vdmVyZmxvdy5zdHlsZS5oZWlnaHQgPSAnJztcbiAgICAgIH1cbiAgICAgIC8vIEVuc3VyZSB0aGUgYW5pbWF0aW9uIG9ubHkgcGxheXMgb25jZS4gRm9yIHNvbWUgcmVhc29uLCBTYWZhcmkgd2lsbCBzaG93XG4gICAgICAvLyB0aGUgYW5pbWF0aW9uIHR3aWNlIHdpdGhvdXQgdGhpcyBsaW5lLCBldmVuIHRob3VnaCB0aGUgcmVuZGVyIGZ1bmN0aW9uXG4gICAgICAvLyBleHBsaWNpdGx5IHJlbW92ZXMgdGhpcyBjbGFzcyB3aGVuIGl0IHNldHMgdGhlIG9sZCBoZWlnaHQuIE5laXRoZXJcbiAgICAgIC8vIENocm9tZSBub3IgRmlyZWZveCBzZWVtIHRvIG5lZWQgdGhpcyBsaW5lLlxuICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdzaG93VHJhbnNpdGlvbicpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKGNsb3NpbmcpIHtcbiAgICBzdXBlci5yZW5kZXIoY2xvc2luZyk7XG5cbiAgICBjb25zdCBuYXR1cmFsSGVpZ2h0ID0gdGhpcy4kLmNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgaWYgKG5hdHVyYWxIZWlnaHQgPT09IDApIHtcbiAgICAgIC8vIE1vc3QgbGlrZWx5IGhhdmVuJ3QgaGFkIGEgY2hhbmNlIHRvIHJlbmRlciB5ZXQuXG4gICAgICB0aGlzLiQub3ZlcmZsb3cuc3R5bGUuaGVpZ2h0ID0gY2xvc2luZyA/IDAgOiAnJztcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBXaXRob3V0IGFuaW1hdGluZywgc2V0IHN0YXJ0aW5nIGhlaWdodCBvZiB0cmFuc2l0aW9uLlxuICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnc2hvd1RyYW5zaXRpb24nKTtcbiAgICBjb25zdCBvbGRIZWlnaHQgPSBjbG9zaW5nID8gbmF0dXJhbEhlaWdodCA6IDA7XG4gICAgdGhpcy4kLm92ZXJmbG93LnN0eWxlLmhlaWdodCA9IG9sZEhlaWdodCArICdweCc7XG5cbiAgICAvLyBGb3JjZSBhIHJlbGF5b3V0IHNvIHRoYXQgdGhlIHN0YXJ0aW5nIGhlaWdodCBpcyBhcHBsaWVkLlxuICAgIC8vIFRoaXMgY2FuIGJlIGFjaGlldmVkIGJ5IHJlYWRpbmcgYSBwcm9wZXJ0eSBsaWtlIG9mZnNldEhlaWdodC5cbiAgICB0aGlzLiQub3ZlcmZsb3cub2Zmc2V0SGVpZ2h0OyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcblxuICAgIC8vIFR1cm4gYW5pbWF0aW9uIG9uLCBhbmQgZW5kaW5nIGhlaWdodCBvZiB0cmFuc2l0aW9uLlxuICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnc2hvd1RyYW5zaXRpb24nKTtcbiAgICBjb25zdCBuZXdIZWlnaHQgPSBjbG9zaW5nID8gMCA6IG5hdHVyYWxIZWlnaHQ7XG4gICAgdGhpcy4kLm92ZXJmbG93LnN0eWxlLmhlaWdodCA9IG5ld0hlaWdodCArICdweCc7XG4gIH1cblxuICBnZXQgW3N5bWJvbHMudGVtcGxhdGVdKCkge1xuICAgIHJldHVybiBgXG4gICAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCguc2hvd1RyYW5zaXRpb24pICNvdmVyZmxvdyB7XG4gICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjJzO1xuICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBpZD1cIm92ZXJmbG93XCIgcm9sZT1cIm5vbmVcIj5cbiAgICAgICAgPGRpdiBpZD1cImNvbnRhaW5lclwiIHJvbGU9XCJub25lXCI+XG4gICAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxufVxuXG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYmFzaWMtY29sbGFwc2libGUtcGFuZWwnLCBDb2xsYXBzaWJsZVBhbmVsKTtcbmV4cG9ydCBkZWZhdWx0IENvbGxhcHNpYmxlUGFuZWw7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHRyYW5zcGlsZWQgdG8gY3JlYXRlIGFuIEVTNS1jb21wYXRpYmxlIGRpc3RyaWJ1dGlvbiBpbiB3aGljaFxuICogdGhlIHBhY2thZ2UncyBtYWluIGZlYXR1cmUocykgYXJlIGF2YWlsYWJsZSB2aWEgdGhlIHdpbmRvdy5CYXNpYyBnbG9iYWwuXG4gKiBJZiB5b3UncmUgYWxyZWFkeSB1c2luZyBFUzYgeW91cnNlbGYsIGlnbm9yZSB0aGlzIGZpbGUsIGFuZCBpbnN0ZWFkIGltcG9ydFxuICogdGhlIHNvdXJjZSBmaWxlKHMpIHlvdSB3YW50IGZyb20gdGhlIHNyYyBmb2xkZXIuXG4gKi9cblxuaW1wb3J0IEFycm93U2VsZWN0aW9uTWl4aW4gZnJvbSAnLi9zcmMvQXJyb3dTZWxlY3Rpb25NaXhpbic7XG5pbXBvcnQgQXR0cmlidXRlTWFyc2hhbGxpbmdNaXhpbiBmcm9tICcuL3NyYy9BdHRyaWJ1dGVNYXJzaGFsbGluZ01peGluJztcbmltcG9ydCBDbGlja1NlbGVjdGlvbk1peGluIGZyb20gJy4vc3JjL0NsaWNrU2VsZWN0aW9uTWl4aW4nO1xuaW1wb3J0IENvbXBvc2FibGVNaXhpbiBmcm9tICcuL3NyYy9Db21wb3NhYmxlTWl4aW4nO1xuaW1wb3J0IENvbnRlbnRJdGVtc01peGluIGZyb20gJy4vc3JjL0NvbnRlbnRJdGVtc01peGluJztcbmltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi9zcmMvY3JlYXRlU3ltYm9sJztcbmltcG9ydCBEaXJlY3Rpb25TZWxlY3Rpb25NaXhpbiBmcm9tICcuL3NyYy9EaXJlY3Rpb25TZWxlY3Rpb25NaXhpbic7XG5pbXBvcnQgRGlzdHJpYnV0ZWRDaGlsZHJlbk1peGluIGZyb20gJy4vc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW5NaXhpbic7XG5pbXBvcnQgRGlzdHJpYnV0ZWRDaGlsZHJlbkNvbnRlbnRNaXhpbiBmcm9tICcuL3NyYy9EaXN0cmlidXRlZENoaWxkcmVuQ29udGVudE1peGluJztcbmltcG9ydCBHZW5lcmljTWl4aW4gZnJvbSAnLi9zcmMvR2VuZXJpY01peGluJztcbmltcG9ydCBLZXlib2FyZE1peGluIGZyb20gJy4vc3JjL0tleWJvYXJkTWl4aW4nO1xuaW1wb3J0IEtleWJvYXJkRGlyZWN0aW9uTWl4aW4gZnJvbSAnLi9zcmMvS2V5Ym9hcmREaXJlY3Rpb25NaXhpbic7XG5pbXBvcnQgS2V5Ym9hcmRQYWdlZFNlbGVjdGlvbk1peGluIGZyb20gJy4vc3JjL0tleWJvYXJkUGFnZWRTZWxlY3Rpb25NaXhpbic7XG5pbXBvcnQgS2V5Ym9hcmRQcmVmaXhTZWxlY3Rpb25NaXhpbiBmcm9tICcuL3NyYy9LZXlib2FyZFByZWZpeFNlbGVjdGlvbk1peGluJztcbmltcG9ydCBtaWNyb3Rhc2sgZnJvbSAnLi9zcmMvbWljcm90YXNrJztcbmltcG9ydCBQYWdlRG90c01peGluIGZyb20gJy4vc3JjL1BhZ2VEb3RzTWl4aW4nO1xuaW1wb3J0IFBsYXlDb250cm9sc01peGluIGZyb20gJy4vc3JjL1BsYXlDb250cm9sc01peGluJztcbmltcG9ydCBzYWZlQXR0cmlidXRlcyBmcm9tICcuL3NyYy9zYWZlQXR0cmlidXRlcyc7XG5pbXBvcnQgU2VsZWN0aW9uQW5pbWF0aW9uTWl4aW4gZnJvbSAnLi9zcmMvU2VsZWN0aW9uQW5pbWF0aW9uTWl4aW4nO1xuaW1wb3J0IFNlbGVjdGlvbkFyaWFBY3RpdmVNaXhpbiBmcm9tICcuL3NyYy9TZWxlY3Rpb25BcmlhQWN0aXZlTWl4aW4nO1xuaW1wb3J0IFNlbGVjdGlvbkhpZ2hsaWdodE1peGluIGZyb20gJy4vc3JjL1NlbGVjdGlvbkhpZ2hsaWdodE1peGluJztcbmltcG9ydCBTZWxlY3Rpb25JblZpZXdNaXhpbiBmcm9tICcuL3NyYy9TZWxlY3Rpb25JblZpZXdNaXhpbic7XG5pbXBvcnQgU2hhZG93RWxlbWVudFJlZmVyZW5jZXNNaXhpbiBmcm9tICcuL3NyYy9TaGFkb3dFbGVtZW50UmVmZXJlbmNlc01peGluJztcbmltcG9ydCBTaGFkb3dUZW1wbGF0ZU1peGluIGZyb20gJy4vc3JjL1NoYWRvd1RlbXBsYXRlTWl4aW4nO1xuaW1wb3J0IFNpbmdsZVNlbGVjdGlvbk1peGluIGZyb20gJy4vc3JjL1NpbmdsZVNlbGVjdGlvbk1peGluJztcbmltcG9ydCBTd2lwZURpcmVjdGlvbk1peGluIGZyb20gJy4vc3JjL1N3aXBlRGlyZWN0aW9uTWl4aW4nO1xuaW1wb3J0IHN5bWJvbHMgZnJvbSAnLi9zcmMvc3ltYm9scyc7XG5pbXBvcnQgVGltZXJTZWxlY3Rpb25NaXhpbiBmcm9tICcuL3NyYy9UaW1lclNlbGVjdGlvbk1peGluJztcbmltcG9ydCBUcmFja3BhZERpcmVjdGlvbk1peGluIGZyb20gJy4vc3JjL1RyYWNrcGFkRGlyZWN0aW9uTWl4aW4nO1xuXG53aW5kb3cuQmFzaWMgPSB3aW5kb3cuQmFzaWMgfHwge307XG5cbndpbmRvdy5CYXNpYy5BcnJvd1NlbGVjdGlvbk1peGluID0gQXJyb3dTZWxlY3Rpb25NaXhpbjtcbndpbmRvdy5CYXNpYy5BdHRyaWJ1dGVNYXJzaGFsbGluZ01peGluID0gQXR0cmlidXRlTWFyc2hhbGxpbmdNaXhpbjtcbndpbmRvdy5CYXNpYy5DbGlja1NlbGVjdGlvbk1peGluID0gQ2xpY2tTZWxlY3Rpb25NaXhpbjtcbndpbmRvdy5CYXNpYy5Db21wb3NhYmxlTWl4aW4gPSBDb21wb3NhYmxlTWl4aW47XG53aW5kb3cuQmFzaWMuQ29udGVudEl0ZW1zTWl4aW4gPSBDb250ZW50SXRlbXNNaXhpbjtcbndpbmRvdy5CYXNpYy5jcmVhdGVTeW1ib2wgPSBjcmVhdGVTeW1ib2w7XG53aW5kb3cuQmFzaWMuRGlyZWN0aW9uU2VsZWN0aW9uTWl4aW4gPSBEaXJlY3Rpb25TZWxlY3Rpb25NaXhpbjtcbndpbmRvdy5CYXNpYy5EaXN0cmlidXRlZENoaWxkcmVuTWl4aW4gPSBEaXN0cmlidXRlZENoaWxkcmVuTWl4aW47XG53aW5kb3cuQmFzaWMuRGlzdHJpYnV0ZWRDaGlsZHJlbkNvbnRlbnRNaXhpbiA9IERpc3RyaWJ1dGVkQ2hpbGRyZW5Db250ZW50TWl4aW47XG53aW5kb3cuQmFzaWMuZ2VuZXJpYyA9IEdlbmVyaWNNaXhpbjtcbndpbmRvdy5CYXNpYy5LZXlib2FyZE1peGluID0gS2V5Ym9hcmRNaXhpbjtcbndpbmRvdy5CYXNpYy5LZXlib2FyZERpcmVjdGlvbk1peGluID0gS2V5Ym9hcmREaXJlY3Rpb25NaXhpbjtcbndpbmRvdy5CYXNpYy5LZXlib2FyZFBhZ2VkU2VsZWN0aW9uTWl4aW4gPSBLZXlib2FyZFBhZ2VkU2VsZWN0aW9uTWl4aW47XG53aW5kb3cuQmFzaWMuS2V5Ym9hcmRQcmVmaXhTZWxlY3Rpb25NaXhpbiA9IEtleWJvYXJkUHJlZml4U2VsZWN0aW9uTWl4aW47XG53aW5kb3cuQmFzaWMubWljcm90YXNrID0gbWljcm90YXNrO1xud2luZG93LkJhc2ljLlBhZ2VEb3RzTWl4aW4gPSBQYWdlRG90c01peGluO1xud2luZG93LkJhc2ljLlBsYXlDb250cm9sc01peGluID0gUGxheUNvbnRyb2xzTWl4aW47XG53aW5kb3cuQmFzaWMuc2FmZUF0dHJpYnV0ZXMgPSBzYWZlQXR0cmlidXRlcztcbndpbmRvdy5CYXNpYy5TZWxlY3Rpb25BbmltYXRpb25NaXhpbiA9IFNlbGVjdGlvbkFuaW1hdGlvbk1peGluO1xud2luZG93LkJhc2ljLlNlbGVjdGlvbkFyaWFBY3RpdmVNaXhpbiA9IFNlbGVjdGlvbkFyaWFBY3RpdmVNaXhpbjtcbndpbmRvdy5CYXNpYy5TZWxlY3Rpb25IaWdobGlnaHRNaXhpbiA9IFNlbGVjdGlvbkhpZ2hsaWdodE1peGluO1xud2luZG93LkJhc2ljLlNlbGVjdGlvbkluVmlld01peGluID0gU2VsZWN0aW9uSW5WaWV3TWl4aW47XG53aW5kb3cuQmFzaWMuU2hhZG93RWxlbWVudFJlZmVyZW5jZXNNaXhpbiA9IFNoYWRvd0VsZW1lbnRSZWZlcmVuY2VzTWl4aW47XG53aW5kb3cuQmFzaWMuU2hhZG93VGVtcGxhdGVNaXhpbiA9IFNoYWRvd1RlbXBsYXRlTWl4aW47XG53aW5kb3cuQmFzaWMuU2luZ2xlU2VsZWN0aW9uTWl4aW4gPSBTaW5nbGVTZWxlY3Rpb25NaXhpbjtcbndpbmRvdy5CYXNpYy5Td2lwZURpcmVjdGlvbk1peGluID0gU3dpcGVEaXJlY3Rpb25NaXhpbjtcbndpbmRvdy5CYXNpYy5zeW1ib2xzID0gc3ltYm9scztcbndpbmRvdy5CYXNpYy5UaW1lclNlbGVjdGlvbk1peGluID0gVGltZXJTZWxlY3Rpb25NaXhpbjtcbndpbmRvdy5CYXNpYy5UcmFja3BhZERpcmVjdGlvbk1peGluID0gVHJhY2twYWREaXJlY3Rpb25NaXhpbjtcbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvY3JlYXRlU3ltYm9sJztcbmltcG9ydCBzeW1ib2xzIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL3N5bWJvbHMnO1xuXG5cbi8vIFN5bWJvbHMgZm9yIHByaXZhdGUgZGF0YSBtZW1iZXJzIG9uIGFuIGVsZW1lbnQuXG5jb25zdCBtb3VzZWRvd25MaXN0ZW5lclN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnbW91c2Vkb3duTGlzdGVuZXInKTtcbmNvbnN0IG1vdXNlbW92ZUxpc3RlbmVyU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdtb3VzZW1vdmVMaXN0ZW5lcicpO1xuY29uc3QgbGFzdE1vdXNlWFN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnbGFzdE1vdXNlWCcpO1xuY29uc3QgbGFzdE1vdXNlWVN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnbGFzdE1vdXNlWScpO1xuY29uc3QgbW91c2VUaW1lb3V0U3ltYm9sID0gY3JlYXRlU3ltYm9sKCdtb3VzZVRpbWVvdXQnKTtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIEFycm93U2VsZWN0aW9uLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogVGVtcGxhdGUgbWl4aW4gd2hpY2ggYWRkcyBwcm9taW5lbnQgbGVmdCBhbmQgcmlnaHQgYXJyb3cgYnV0dG9ucyB0byBhXG4gICAqIHdyYXBwZWQgY2hpbGQgc3VjaCBhcyBhIGNhcm91c2VsLlxuICAgKlxuICAgKiBZb3UgY2FuIHNlZSBhXG4gICAqIFtsaXZlIGRlbW9dKGh0dHA6Ly9iYXNpY3dlYmNvbXBvbmVudHMub3JnL2Jhc2ljLXdlYi1jb21wb25lbnRzL3BhY2thZ2VzL2RlbW9zL2Nhcm91c2VsLXdpdGgtYXJyb3dzLmh0bWwpXG4gICAqIG9mIHRoaXMgbWl4aW4gYXBwbGllZCB0byBhIGNhcm91c2VsLlxuICAgKlxuICAgKiBDbGlja2luZyB0aGUgbGVmdC9yaWdodCBidXR0b25zIHNlbGVjdHMgdGhlIHByZXZpb3VzL25leHQgaXRlbS5cbiAgICpcbiAgICogVHlwaWNhbCB1c2FnZTpcbiAgICpcbiAgICogICAgIGNsYXNzIENhcm91c2VsV2l0aEFycm93cyBleHRlbmRzIEFycm93U2VsZWN0aW9uTWl4aW4oQ2Fyb3VzZWwpIHt9XG4gICAqICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ2Nhcm91c2VsLXdpdGgtYXJyb3dzJywgQ2Fyb3VzZWxXaXRoQXJyb3dzKTtcbiAgICpcbiAgICogQnkgZGVmYXVsdCwgdGhlIGFycm93IGJ1dHRvbnMgYXJlIHNob3duIG9uIGRldmljZXMgd2l0aCBhIG1vdXNlIG9yIG1vdXNlLWxpa2VcbiAgICogcG9pbnRpbmcgZGV2aWNlLiBUaGV5IGFyZSBub3Qgc2hvd24gb24gYSB0b3VjaC1jYXBhYmxlIGRldmljZSB1bmxlc3MgbW91c2VcbiAgICogbW92ZW1lbnQgaXMgZGV0ZWN0ZWQuIFRvIGNhdXNlIHRoZSBidXR0b25zIHRvIGFsd2F5cyBhcHBlYXIsIGFwcGx5IHRoZVxuICAgKiAnc2hvd0Fycm93cycgQ1NTIGNsYXNzLlxuICAgKi9cbiAgY2xhc3MgQXJyb3dTZWxlY3Rpb24gZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcblxuICAgICAgdGhpcy4kLmJ1dHRvbkxlZnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgIHRoaXMuc2VsZWN0UHJldmlvdXMoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuJC5idXR0b25SaWdodC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgdGhpcy5zZWxlY3ROZXh0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfSk7XG4gICAgICBhc3N1bWVCdXR0b25Gb2N1cyh0aGlzLCB0aGlzLiQuYnV0dG9uTGVmdCk7XG4gICAgICBhc3N1bWVCdXR0b25Gb2N1cyh0aGlzLCB0aGlzLiQuYnV0dG9uUmlnaHQpO1xuICAgIH1cblxuICAgIGdldCBjYW5TZWxlY3ROZXh0KCkge1xuICAgICAgcmV0dXJuIHN1cGVyLmNhblNlbGVjdE5leHQ7XG4gICAgfVxuICAgIHNldCBjYW5TZWxlY3ROZXh0KGNhblNlbGVjdE5leHQpIHtcbiAgICAgIGlmICgnY2FuU2VsZWN0TmV4dCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuY2FuU2VsZWN0TmV4dCA9IGNhblNlbGVjdE5leHQ7IH1cbiAgICAgIHRoaXMuJC5idXR0b25SaWdodC5kaXNhYmxlZCA9ICFjYW5TZWxlY3ROZXh0O1xuICAgIH1cblxuICAgIGdldCBjYW5TZWxlY3RQcmV2aW91cygpIHtcbiAgICAgIHJldHVybiBzdXBlci5jYW5TZWxlY3RQcmV2aW91cztcbiAgICB9XG4gICAgc2V0IGNhblNlbGVjdFByZXZpb3VzKGNhblNlbGVjdFByZXZpb3VzKSB7XG4gICAgICBpZiAoJ2NhblNlbGVjdFByZXZpb3VzJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5jYW5TZWxlY3RQcmV2aW91cyA9IGNhblNlbGVjdFByZXZpb3VzOyB9XG4gICAgICB0aGlzLiQuYnV0dG9uTGVmdC5kaXNhYmxlZCA9ICFjYW5TZWxlY3RQcmV2aW91cztcbiAgICB9XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jb25uZWN0ZWRDYWxsYmFjaykgeyBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpOyB9XG5cbiAgICAgIGlmICghdGhpcy5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3dBcnJvd3MnKSkge1xuICAgICAgICAvLyBEZXRlcm1pbmUgd2hldGhlciB3ZSBzaG91bGQgc2hvdyBhcnJvdyBidXR0b25zIG9yIG5vdC5cbiAgICAgICAgaWYgKGRldmljZVN1cHBvcnRzVG91Y2goKSkge1xuICAgICAgICAgIC8vIEEgdG91Y2ggZGV2aWNlIG1pZ2h0IGFsc28gc3VwcG9ydCBhIG1vdXNlLCBidXQgd2UgY2FuJ3Qga25vdyB3aGV0aGVyXG4gICAgICAgICAgLy8gdGhlcmUncyBhY3R1YWxseSBhIG1vdXNlIHVudGlsIHdlIGhlYXIgZnJvbSBpdC5cbiAgICAgICAgICBsaXN0ZW5Gb3JNb3VzZSh0aGlzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBUaGUgZGV2aWNlIGRvZXNuJ3Qgc3VwcG9ydCB0b3VjaCwgc28gYXNzdW1lIGl0IGhhcyBhIG1vdXNlLlxuICAgICAgICAgIHNob3dBcnJvd3ModGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgW3N5bWJvbHMuZGVmYXVsdHNdKCkge1xuICAgICAgY29uc3QgZGVmYXVsdHMgPSBzdXBlcltzeW1ib2xzLmRlZmF1bHRzXSB8fCB7fTtcbiAgICAgIGRlZmF1bHRzLm5hdmlnYXRpb25BeGlzID0gJ2hvcml6b250YWwnO1xuICAgICAgcmV0dXJuIGRlZmF1bHRzO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogVGhlIHRlbXBsYXRlIHVzZXMgdGhlIGNoZXZyb24tbGVmdCBhbmQgY2hldnJvbi1yaWdodCBTVkcgaWNvbnMgZnJvbVxuICAgICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9Qb2x5bWVyRWxlbWVudHMvaXJvbi1pY29ucy9ibG9iL21hc3Rlci9pcm9uLWljb25zLmh0bWwuXG4gICAgICovXG4gICAgZ2V0IFtzeW1ib2xzLnRlbXBsYXRlXSgpIHtcbiAgICAgIGNvbnN0IGJhc2VUZW1wbGF0ZSA9IHN1cGVyW3N5bWJvbHMudGVtcGxhdGVdIHx8ICcnO1xuICAgICAgcmV0dXJuIGBcbiAgICAgICAgPHN0eWxlPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAtd2Via2l0LWZsZXg6IDE7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgI2Fycm93TmF2aWdhdGlvbkNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgLXdlYmtpdC1mbGV4OiAxO1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdmlnYXRpb25CdXR0b24ge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICAgICAgICBmaWxsOiBjdXJyZW50Q29sb3I7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTsgLyogUkVWSUVXOiBBY2Nlc3NpYmlsaXR5IHNob3VsZCBiZSBwcm92aWRlZCBieSBvdGhlciBlbGVtZW50cy4gKi9cbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXM7XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXZpZ2F0aW9uQnV0dG9uOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLm5hdmlnYXRpb25CdXR0b246YWN0aXZlOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcbiAgICAgICAgfVxuICAgICAgICAubmF2aWdhdGlvbkJ1dHRvbjpkaXNhYmxlZCB7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KDpub3QoLnNob3dBcnJvd3MpKSAubmF2aWdhdGlvbkJ1dHRvbiB7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgIH1cblxuICAgICAgICAubmF2aWdhdGlvbkJ1dHRvbiAuaWNvbiB7XG4gICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICAgIHdpZHRoOiA0OHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLyogT3ZlcmxheSB2YXJpYW50ICovXG4gICAgICAgIDpob3N0KC5vdmVybGF5QXJyb3dzKSB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG4gICAgICAgIDpob3N0KC5vdmVybGF5QXJyb3dzKSAubmF2aWdhdGlvbkJ1dHRvbiB7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgfVxuICAgICAgICA6aG9zdCgub3ZlcmxheUFycm93cykgI2J1dHRvbkxlZnQge1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIH1cbiAgICAgICAgOmhvc3QoLm92ZXJsYXlBcnJvd3MpICNidXR0b25SaWdodCB7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIH1cbiAgICAgICAgOmhvc3QoLm92ZXJsYXlBcnJvd3MpIC5uYXZpZ2F0aW9uQnV0dG9uOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICAgICAgfVxuICAgICAgICA6aG9zdCgub3ZlcmxheUFycm93cykgLm5hdmlnYXRpb25CdXR0b246YWN0aXZlOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgICAgICAgfVxuICAgICAgICA6aG9zdCgub3ZlcmxheUFycm93cykgLm5hdmlnYXRpb25CdXR0b246ZGlzYWJsZWQge1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gICAgICAgIH1cbiAgICAgICAgPC9zdHlsZT5cblxuICAgICAgICA8IS0tXG4gICAgICAgIEFjY2Vzc2liaWxpdHkgbm90ZTogc2luY2UgdGhlIG5hdmlnYXRpb24gb2ZmZXJlZCBieSB0aGUgYXJyb3cgYnV0dG9ucyBzaG91bGRcbiAgICAgICAgYmUgcmVkdW5kYW50ICh0aGF0IGlzLCB0aGVyZSBzaG91bGQgYmUgb3RoZXIgd2F5cyBvZiBuYXZpZ2F0aW5nIHRoZSBsaXN0KSxcbiAgICAgICAgd2UgbWFyayB0aGUgYnV0dG9uIGFzIGFyaWEtaGlkZGVuIHNvIHRoYXQgYXNzaXN0aXZlIGRldmljZXMgaWdub3JlIHRoZW0uXG4gICAgICAgIC0tPlxuICAgICAgICA8YnV0dG9uIGlkPVwiYnV0dG9uTGVmdFwiIGNsYXNzPVwibmF2aWdhdGlvbkJ1dHRvblwiIGRpc2FibGVkIHRhYmluZGV4PVwiLTFcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICA8c3ZnIGNsYXNzPVwiaWNvblwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWQgbWVldFwiPlxuICAgICAgICAgICAgPGcgaWQ9XCJjaGV2cm9uLWxlZnRcIj5cbiAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNS40MSA3LjQxTDE0IDZsLTYgNiA2IDYgMS40MS0xLjQxTDEwLjgzIDEyelwiLz5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxkaXYgaWQ9XCJhcnJvd05hdmlnYXRpb25Db250YWluZXJcIiByb2xlPVwibm9uZVwiPlxuICAgICAgICAgICR7YmFzZVRlbXBsYXRlfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBpZD1cImJ1dHRvblJpZ2h0XCIgY2xhc3M9XCJuYXZpZ2F0aW9uQnV0dG9uXCIgZGlzYWJsZWQgdGFiaW5kZXg9XCItMVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgIDxzdmcgY2xhc3M9XCJpY29uXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBtZWV0XCI+XG4gICAgICAgICAgICA8ZyBpZD1cImNoZXZyb24tcmlnaHRcIj5cbiAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMCA2TDguNTkgNy40MSAxMy4xNyAxMmwtNC41OCA0LjU5TDEwIDE4bDYtNnpcIi8+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgYDtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBBcnJvd1NlbGVjdGlvbjtcbn07XG5cblxuLypcbiAqIEJ5IGRlZmF1bHQsIGEgYnV0dG9uIHdpbGwgYWx3YXlzIHRha2UgZm9jdXMgb24gbW91c2Vkb3duLiBGb3IgdGhpcyBjb21wb25lbnQsXG4gKiB3ZSB3YW50IHRvIG92ZXJyaWRlIHRoYXQgYmVoYXZpb3IsIHN1Y2ggdGhhdCBhIG1vdXNlZG93biBvbiBhIGJ1dHRvbiBrZWVwc1xuICogdGhlIGZvY3VzIG9uIHRoZSBvdXRlciBjb21wb25lbnQuXG4gKi9cbmZ1bmN0aW9uIGFzc3VtZUJ1dHRvbkZvY3VzKGVsZW1lbnQsIGJ1dHRvbikge1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZXZlbnQgPT4ge1xuICAgIC8vIEdpdmVuIHRoZSBtYWluIGVsZW1lbnQgdGhlIGZvY3VzIGlmIGl0IGRvZXNuJ3QgYWxyZWFkeSBoYXZlIGl0LlxuICAgIGVsZW1lbnQuZm9jdXMoKTtcbiAgICAvLyBQcmV2ZW50IHRoZSBkZWZhdWx0IGZvY3VzLW9uLW1vdXNlZG93biBiZWhhdmlvci5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZGV2aWNlU3VwcG9ydHNUb3VjaCgpIHtcbiAgcmV0dXJuICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fFxuICAgICAgKHdpbmRvdy5Eb2N1bWVudFRvdWNoICYmIGRvY3VtZW50IGluc3RhbmNlb2Ygd2luZG93LkRvY3VtZW50VG91Y2gpO1xufVxuXG4vLyBXZSB0cnkgdG8gZGV0ZWN0IHRoZSBwcmVzZW5jZSBvZiBhIG1vdXNlIGJ5IGxpc3RlbmluZyBmb3IgbW91c2Vtb3ZlIGV2ZW50c1xuLy8gd2hpY2ggYXJlICpub3QqIHRoZSByZXN1bHQgb2YgYSBtb3VzZWRvd24uIE9uIGEgdG91Y2ggZGV2aWNlLCBhIHRhcCBvbiB0aGVcbi8vIHBhZ2Ugd2lsbCBnZW5lcmF0ZSBhIGZha2UgbW91c2Vtb3ZlLCBmb2xsb3dlZCBieSBhIG1vdXNlZG93bi4gV2UgZG9uJ3Qgd2FudFxuLy8gdG8gcmVzcG9uZCB0byB0aG9zZSBmYWtlIG1vdXNlbW92ZSBldmVudHMuIFRvIGRpc2NyaW1pbmF0ZSBiZXR3ZWVuIGZha2UgYW5kXG4vLyByZWFsIG1vdXNlbW92ZSBldmVudHMsIHdoZW4gd2UgZ2V0IGEgbW91c2Vtb3ZlIGV2ZW50LCB3ZSB3YWl0IGZvciBhIGJpdCB0b1xuLy8gc2VlIGlmIHRoZSBzYW1lIGxvY2F0aW9uIGlzIHJlcG9ydGVkIGFzIHRoZSBsb2NhdGlvbiBvZiBhIHN1YnNlcXVlbnRcbi8vIG1vdXNlZG93bi5cbmZ1bmN0aW9uIGxpc3RlbkZvck1vdXNlKGVsZW1lbnQpIHtcblxuICBlbGVtZW50W21vdXNlZG93bkxpc3RlbmVyU3ltYm9sXSA9IGV2ZW50ID0+IHtcbiAgICBpZiAoZWxlbWVudFttb3VzZVRpbWVvdXRTeW1ib2xdKSB7XG4gICAgICBjbGVhclRpbWVvdXQoZWxlbWVudFttb3VzZVRpbWVvdXRTeW1ib2xdKTtcbiAgICB9XG4gICAgZWxlbWVudFtsYXN0TW91c2VYU3ltYm9sXSA9IGV2ZW50LnBhZ2VYO1xuICAgIGVsZW1lbnRbbGFzdE1vdXNlWVN5bWJvbF0gPSBldmVudC5wYWdlWTtcbiAgfTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGVsZW1lbnRbbW91c2Vkb3duTGlzdGVuZXJTeW1ib2xdKTtcblxuICBlbGVtZW50W21vdXNlbW92ZUxpc3RlbmVyU3ltYm9sXSA9IGV2ZW50ID0+IHtcbiAgICAvLyBQb3N0cG9uZSBjaGVja2luZyB0aGUgbW91c2Vtb3ZlIGxvY2F0aW9uIHRvIGdpdmUgdGhlIG1vdXNlZG93biBldmVudCBhXG4gICAgLy8gY2hhbmNlIHRvIGZpcmUuIFRoZSAyNTAgbXMgZGVsYXkgaXMganVzdCBndWVzc3dvcms7IGEgc2hvcnRlciBkZWxheVxuICAgIC8vIGRvZXNuJ3Qgc2VlbSB0byB3b3JrLlxuICAgIGVsZW1lbnRbbW91c2VUaW1lb3V0U3ltYm9sXSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnRbbGFzdE1vdXNlWFN5bWJvbF0gIT0gbnVsbCAmJiBldmVudC5wYWdlWCAhPT0gZWxlbWVudFtsYXN0TW91c2VYU3ltYm9sXSB8fFxuICAgICAgICAgIGVsZW1lbnRbbGFzdE1vdXNlWVN5bWJvbF0gIT0gbnVsbCAmJiBldmVudC5wYWdlWSAhPT0gZWxlbWVudFtsYXN0TW91c2VZU3ltYm9sXSkge1xuICAgICAgICAvLyBtb3VzZW1vdmUgZXZlbnQgd2FzIGF0IGEgbG9jYXRpb24gb3RoZXIgdGhhbiB0aGUgbGFzdCBtb3VzZWRvd24sXG4gICAgICAgIC8vIGFuZCBoZW5jZSBtb3N0IGxpa2VseSBhIHJlYWwgbW91c2Vtb3ZlIGV2ZW50LlxuICAgICAgICBtb3VzZURldGVjdGVkKGVsZW1lbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudFtsYXN0TW91c2VYU3ltYm9sXSA9IGV2ZW50LnBhZ2VYO1xuICAgICAgICBlbGVtZW50W2xhc3RNb3VzZVlTeW1ib2xdID0gZXZlbnQucGFnZVk7XG4gICAgICB9XG4gICAgfSwgMjUwKTtcbiAgfTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGVsZW1lbnRbbW91c2Vtb3ZlTGlzdGVuZXJTeW1ib2xdKTtcbn1cblxuZnVuY3Rpb24gbW91c2VEZXRlY3RlZChlbGVtZW50KSB7XG4gIHNob3dBcnJvd3MoZWxlbWVudCk7XG5cbiAgLy8gV2UgY2FuIHN0b3AgbGlzdGVuaW5nIGZvciBtb3VzZSBldmVudHMgbm93LlxuICBpZiAoZWxlbWVudFttb3VzZVRpbWVvdXRTeW1ib2xdKSB7XG4gICAgY2xlYXJUaW1lb3V0KGVsZW1lbnRbbW91c2VUaW1lb3V0U3ltYm9sXSk7XG4gIH1cbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGVsZW1lbnRbbW91c2Vkb3duTGlzdGVuZXJTeW1ib2xdKTtcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGVsZW1lbnRbbW91c2Vtb3ZlTGlzdGVuZXJTeW1ib2xdKTtcbiAgZWxlbWVudFttb3VzZWRvd25MaXN0ZW5lclN5bWJvbF0gPSBudWxsO1xuICBlbGVtZW50W21vdXNlbW92ZUxpc3RlbmVyU3ltYm9sXSA9IG51bGw7XG59XG5cbmZ1bmN0aW9uIHNob3dBcnJvd3MoZWxlbWVudCkge1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Nob3dBcnJvd3MnKTtcbn1cbiIsImltcG9ydCBzYWZlQXR0cmlidXRlcyBmcm9tICcuL3NhZmVBdHRyaWJ1dGVzJztcblxuXG4vLyBNZW1vaXplZCBtYXBzIG9mIGF0dHJpYnV0ZSB0byBwcm9wZXJ0eSBuYW1lcyBhbmQgdmljZSB2ZXJzYS5cbmNvbnN0IGF0dHJpYnV0ZVRvUHJvcGVydHlOYW1lcyA9IHt9O1xuY29uc3QgcHJvcGVydHlOYW1lc1RvQXR0cmlidXRlcyA9IHt9O1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggQXR0cmlidXRlTWFyc2hhbGxpbmcuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBtYXJzaGFsbHMgYXR0cmlidXRlcyB0byBwcm9wZXJ0aWVzIGFuZCB2aWNlIHZlcnNhLlxuICAgKlxuICAgKiBJZiB5b3VyIGNvbXBvbmVudCBleHBvc2VzIGEgc2V0dGVyIGZvciBhIHByb3BlcnR5LCBpdCdzIGdlbmVyYWxseSBhIGdvb2RcbiAgICogaWRlYSB0byBsZXQgZGV2cyB1c2luZyB5b3VyIGNvbXBvbmVudCBiZSBhYmxlIHRvIHNldCB0aGF0IHByb3BlcnR5IGluIEhUTUxcbiAgICogdmlhIGFuIGVsZW1lbnQgYXR0cmlidXRlLiBZb3UgY2FuIGNvZGUgdGhhdCB5b3Vyc2VsZiBieSB3cml0aW5nIGFuXG4gICAqIGBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tgLCBvciB5b3UgY2FuIHVzZSB0aGlzIG1peGluIHRvIGdldCBhIGRlZ3JlZSBvZlxuICAgKiBhdXRvbWF0aWMgc3VwcG9ydC5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBpbXBsZW1lbnRzIGFuIGBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tgIHRoYXQgd2lsbCBhdHRlbXB0IHRvXG4gICAqIGNvbnZlcnQgYSBjaGFuZ2UgaW4gYW4gZWxlbWVudCBhdHRyaWJ1dGUgaW50byBhIGNhbGwgdG8gdGhlIGNvcnJlc3BvbmRpbmdcbiAgICogcHJvcGVydHkgc2V0dGVyLiBBdHRyaWJ1dGVzIHR5cGljYWxseSBmb2xsb3cgaHlwaGVuYXRlZCBuYW1lcyAoXCJmb28tYmFyXCIpLFxuICAgKiB3aGVyZWFzIHByb3BlcnRpZXMgdHlwaWNhbGx5IHVzZSBjYW1lbENhc2UgbmFtZXMgKFwiZm9vQmFyXCIpLiBUaGlzIG1peGluXG4gICAqIHJlc3BlY3RzIHRoYXQgY29udmVudGlvbiwgYXV0b21hdGljYWxseSBtYXBwaW5nIHRoZSBoeXBoZW5hdGVkIGF0dHJpYnV0ZVxuICAgKiBuYW1lIHRvIHRoZSBjb3JyZXNwb25kaW5nIGNhbWVsQ2FzZSBwcm9wZXJ0eSBuYW1lLlxuICAgKlxuICAgKiBFeGFtcGxlOiBZb3UgZGVmaW5lIGEgY29tcG9uZW50IHVzaW5nIHRoaXMgbWl4aW46XG4gICAqXG4gICAqICAgICBjbGFzcyBNeUVsZW1lbnQgZXh0ZW5kcyBBdHRyaWJ1dGVNYXJzaGFsbGluZ01peGluKEhUTUxFbGVtZW50KSB7XG4gICAqICAgICAgIGdldCBmb29CYXIoKSB7IHJldHVybiB0aGlzLl9mb29CYXI7IH1cbiAgICogICAgICAgc2V0IGZvb0Jhcih2YWx1ZSkgeyB0aGlzLl9mb29CYXIgPSB2YWx1ZTsgfVxuICAgKiAgICAgfVxuICAgKiAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdteS1lbGVtZW50JywgTXlFbGVtZW50KTtcbiAgICpcbiAgICogSWYgc29tZW9uZSB0aGVuIGluc3RhbnRpYXRlcyB5b3VyIGNvbXBvbmVudCBpbiBIVE1MOlxuICAgKlxuICAgKiAgICAgPG15LWVsZW1lbnQgZm9vLWJhcj1cIkhlbGxvXCI+PC9teS1lbGVtZW50PlxuICAgKlxuICAgKiBUaGVuLCBhZnRlciB0aGUgZWxlbWVudCBoYXMgYmVlbiB1cGdyYWRlZCwgdGhlIGBmb29CYXJgIHNldHRlciB3aWxsXG4gICAqIGF1dG9tYXRpY2FsbHkgYmUgaW52b2tlZCB3aXRoIHRoZSBpbml0aWFsIHZhbHVlIFwiSGVsbG9cIi5cbiAgICpcbiAgICogRm9yIHRoZSB0aW1lIGJlaW5nLCB0aGlzIG1peGluIG9ubHkgc3VwcG9ydHMgc3RyaW5nLXZhbHVlZCBwcm9wZXJ0aWVzLlxuICAgKiBJZiB5b3UnZCBsaWtlIHRvIGNvbnZlcnQgc3RyaW5nIGF0dHJpYnV0ZXMgdG8gb3RoZXIgdHlwZXMgKG51bWJlcnMsXG4gICAqIGJvb2xlYW5zKSwgeW91IG5lZWQgdG8gaW1wbGVtZW50IGBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tgIHlvdXJzZWxmLlxuICAgKi9cbiAgY2xhc3MgQXR0cmlidXRlTWFyc2hhbGxpbmcgZXh0ZW5kcyBiYXNlIHtcblxuICAgIC8qXG4gICAgICogSGFuZGxlIGEgY2hhbmdlIHRvIHRoZSBhdHRyaWJ1dGUgd2l0aCB0aGUgZ2l2ZW4gbmFtZS5cbiAgICAgKi9cbiAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soYXR0cmlidXRlTmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG4gICAgICBpZiAoc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKSB7IHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjaygpOyB9XG4gICAgICBjb25zdCBwcm9wZXJ0eU5hbWUgPSBhdHRyaWJ1dGVUb1Byb3BlcnR5TmFtZShhdHRyaWJ1dGVOYW1lKTtcbiAgICAgIC8vIElmIHRoZSBhdHRyaWJ1dGUgbmFtZSBjb3JyZXNwb25kcyB0byBhIHByb3BlcnR5IG5hbWUsIHNldCB0aGUgcHJvcGVydHkuXG4gICAgICAvLyBJZ25vcmUgc3RhbmRhcmQgSFRNTEVsZW1lbnQgcHJvcGVydGllcyBoYW5kbGVkIGJ5IHRoZSBET00uXG4gICAgICBpZiAocHJvcGVydHlOYW1lIGluIHRoaXMgJiYgIShwcm9wZXJ0eU5hbWUgaW4gSFRNTEVsZW1lbnQucHJvdG90eXBlKSkge1xuICAgICAgICB0aGlzW3Byb3BlcnR5TmFtZV0gPSBuZXdWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jb25uZWN0ZWRDYWxsYmFjaykgeyBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpOyB9XG4gICAgICBzYWZlQXR0cmlidXRlcy5jb25uZWN0ZWQodGhpcyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG4gICAgICByZXR1cm4gYXR0cmlidXRlc0ZvckNsYXNzKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldC91bnNldCB0aGUgYXR0cmlidXRlIHdpdGggdGhlIGluZGljYXRlZCBuYW1lLlxuICAgICAqXG4gICAgICogVGhpcyBtZXRob2QgZXhpc3RzIHByaW1hcmlseSB0byBoYW5kbGUgdGhlIGNhc2Ugd2hlcmUgYW4gZWxlbWVudCB3YW50cyB0b1xuICAgICAqIHNldCBhIGRlZmF1bHQgcHJvcGVydHkgdmFsdWUgdGhhdCBzaG91bGQgYmUgcmVmbGVjdGVkIGFzIGFuIGF0dHJpYnV0ZS4gQW5cbiAgICAgKiBpbXBvcnRhbnQgbGltaXRhdGlvbiBvZiBjdXN0b20gZWxlbWVudCBjb25zdHVyY3RvcnMgaXMgdGhhdCB0aGV5IGNhbm5vdFxuICAgICAqIHNldCBhdHRyaWJ1dGVzLiBBIGNhbGwgdG8gYHJlZmxlY3RBdHRyaWJ1dGVgIGR1cmluZyB0aGUgY29uc3RydWN0b3Igd2lsbFxuICAgICAqIGJlIGRlZmVycmVkIHVudGlsIHRoZSBlbGVtZW50IGlzIGNvbm5lY3RlZCB0byB0aGUgZG9jdW1lbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYXR0cmlidXRlIC0gVGhlIG5hbWUgb2YgdGhlICphdHRyaWJ1dGUqIChub3QgcHJvcGVydHkpIHRvIHNldC5cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gc2V0LiBJZiBudWxsLCB0aGUgYXR0cmlidXRlIHdpbGwgYmUgcmVtb3ZlZC5cbiAgICAgKi9cbiAgICByZWZsZWN0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBzYWZlQXR0cmlidXRlcy5zZXRBdHRyaWJ1dGUodGhpcywgYXR0cmlidXRlLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0L3Vuc2V0IHRoZSBjbGFzcyB3aXRoIHRoZSBpbmRpY2F0ZWQgbmFtZS5cbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIGV4aXN0cyBwcmltYXJpbHkgdG8gaGFuZGxlIHRoZSBjYXNlIHdoZXJlIGFuIGVsZW1lbnQgd2FudHMgdG9cbiAgICAgKiBzZXQgYSBkZWZhdWx0IHByb3BlcnR5IHZhbHVlIHRoYXQgc2hvdWxkIGJlIHJlZmxlY3RlZCBhcyBhcyBjbGFzcy4gQW5cbiAgICAgKiBpbXBvcnRhbnQgbGltaXRhdGlvbiBvZiBjdXN0b20gZWxlbWVudCBjb25zdHVyY3RvcnMgaXMgdGhhdCB0aGV5IGNhbm5vdFxuICAgICAqIHNldCBhdHRyaWJ1dGVzLCBpbmNsdWRpbmcgdGhlIGBjbGFzc2AgYXR0cmlidXRlLiBBIGNhbGwgdG9cbiAgICAgKiBgcmVmbGVjdENsYXNzYCBkdXJpbmcgdGhlIGNvbnN0cnVjdG9yIHdpbGwgYmUgZGVmZXJyZWQgdW50aWwgdGhlIGVsZW1lbnRcbiAgICAgKiBpcyBjb25uZWN0ZWQgdG8gdGhlIGRvY3VtZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBjbGFzcyB0byBzZXQuXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHZhbHVlIC0gVHJ1ZSB0byBzZXQgdGhlIGNsYXNzLCBmYWxzZSB0byByZW1vdmUgaXQuXG4gICAgICovXG4gICAgcmVmbGVjdENsYXNzKGNsYXNzTmFtZSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBzYWZlQXR0cmlidXRlcy50b2dnbGVDbGFzcyh0aGlzLCBjbGFzc05hbWUsIHZhbHVlKTtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBBdHRyaWJ1dGVNYXJzaGFsbGluZztcbn07XG5cblxuLy8gQ29udmVydCBoeXBoZW5hdGVkIGZvby1iYXIgYXR0cmlidXRlIG5hbWUgdG8gY2FtZWwgY2FzZSBmb29CYXIgcHJvcGVydHkgbmFtZS5cbmZ1bmN0aW9uIGF0dHJpYnV0ZVRvUHJvcGVydHlOYW1lKGF0dHJpYnV0ZU5hbWUpIHtcbiAgbGV0IHByb3BlcnR5TmFtZSA9IGF0dHJpYnV0ZVRvUHJvcGVydHlOYW1lc1thdHRyaWJ1dGVOYW1lXTtcbiAgaWYgKCFwcm9wZXJ0eU5hbWUpIHtcbiAgICAvLyBDb252ZXJ0IGFuZCBtZW1vaXplLlxuICAgIGNvbnN0IGh5cGVuUmVnRXggPSAvLShbYS16XSkvZztcbiAgICBwcm9wZXJ0eU5hbWUgPSBhdHRyaWJ1dGVOYW1lLnJlcGxhY2UoaHlwZW5SZWdFeCxcbiAgICAgICAgbWF0Y2ggPT4gbWF0Y2hbMV0udG9VcHBlckNhc2UoKSk7XG4gICAgYXR0cmlidXRlVG9Qcm9wZXJ0eU5hbWVzW2F0dHJpYnV0ZU5hbWVdID0gcHJvcGVydHlOYW1lO1xuICB9XG4gIHJldHVybiBwcm9wZXJ0eU5hbWU7XG59XG5cbmZ1bmN0aW9uIGF0dHJpYnV0ZXNGb3JDbGFzcyhjbGFzc0ZuKSB7XG5cbiAgLy8gV2UgdHJlYXQgdGhlIGVsZW1lbnQgYmFzZSBjbGFzc2VzIGFzIGlmIHRoZXkgaGF2ZSBubyBhdHRyaWJ1dGVzLCBzaW5jZSB3ZVxuICAvLyBkb24ndCB3YW50IHRvIHJlY2VpdmUgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrIGZvciB0aGVtLlxuICBpZiAoY2xhc3NGbiA9PT0gSFRNTEVsZW1lbnQgfHwgY2xhc3NGbiA9PT0gT2JqZWN0KSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgLy8gR2V0IGF0dHJpYnV0ZXMgZm9yIHBhcmVudCBjbGFzcy5cbiAgY29uc3QgYmFzZUNsYXNzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGNsYXNzRm4ucHJvdG90eXBlKS5jb25zdHJ1Y3RvcjtcbiAgY29uc3QgYmFzZUF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzRm9yQ2xhc3MoYmFzZUNsYXNzKTtcblxuICAvLyBHZXQgYXR0cmlidXRlcyBmb3IgdGhpcyBjbGFzcy5cbiAgY29uc3QgcHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGNsYXNzRm4ucHJvdG90eXBlKTtcbiAgY29uc3Qgc2V0dGVyTmFtZXMgPSBwcm9wZXJ0eU5hbWVzLmZpbHRlcihwcm9wZXJ0eU5hbWUgPT5cbiAgICB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihcbiAgICAgICAgY2xhc3NGbi5wcm90b3R5cGUsIHByb3BlcnR5TmFtZSkuc2V0ID09PSAnZnVuY3Rpb24nKTtcbiAgY29uc3QgYXR0cmlidXRlcyA9IHNldHRlck5hbWVzLm1hcChzZXR0ZXJOYW1lID0+XG4gICAgICBwcm9wZXJ0eU5hbWVUb0F0dHJpYnV0ZShzZXR0ZXJOYW1lKSk7XG5cbiAgLy8gTWVyZ2UuXG4gIGNvbnN0IGRpZmYgPSBhdHRyaWJ1dGVzLmZpbHRlcihhdHRyaWJ1dGUgPT5cbiAgICAgIGJhc2VBdHRyaWJ1dGVzLmluZGV4T2YoYXR0cmlidXRlKSA8IDApO1xuICByZXR1cm4gYmFzZUF0dHJpYnV0ZXMuY29uY2F0KGRpZmYpO1xufVxuXG4vLyBDb252ZXJ0IGEgY2FtZWwgY2FzZSBmb29CYXIgcHJvcGVydHkgbmFtZSB0byBhIGh5cGhlbmF0ZWQgZm9vLWJhciBhdHRyaWJ1dGUuXG5mdW5jdGlvbiBwcm9wZXJ0eU5hbWVUb0F0dHJpYnV0ZShwcm9wZXJ0eU5hbWUpIHtcbiAgbGV0IGF0dHJpYnV0ZSA9IHByb3BlcnR5TmFtZXNUb0F0dHJpYnV0ZXNbcHJvcGVydHlOYW1lXTtcbiAgaWYgKCFhdHRyaWJ1dGUpIHtcbiAgICAvLyBDb252ZXJ0IGFuZCBtZW1vaXplLlxuICAgIGNvbnN0IHVwcGVyY2FzZVJlZ0V4ID0gLyhbQS1aXSkvZztcbiAgICBhdHRyaWJ1dGUgPSBwcm9wZXJ0eU5hbWUucmVwbGFjZSh1cHBlcmNhc2VSZWdFeCwgJy0kMScpLnRvTG93ZXJDYXNlKCk7XG4gIH1cbiAgcmV0dXJuIGF0dHJpYnV0ZTtcbn1cbiIsIi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggQ2xpY2tTZWxlY3Rpb24uICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBtYXBzIGEgY2xpY2sgKGFjdHVhbGx5LCBhIG1vdXNlZG93bikgdG8gYSBzZWxlY3Rpb24uXG4gICAqXG4gICAqIFRoaXMgc2ltcGxlIG1peGluIGlzIHVzZWZ1bCBpbiBsaXN0IGJveC1saWtlIGVsZW1lbnRzLCB3aGVyZSBhIGNsaWNrIG9uIGFcbiAgICogbGlzdCBpdGVtIGltcGxpY2l0bHkgc2VsZWN0cyBpdC5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIHRoZSBjb21wb25lbnQgdG8gcHJvdmlkZSBhbiBgaXRlbXNgIHByb3BlcnR5LiBZb3UgY2FuXG4gICAqIHByb3ZpZGUgdGhhdCBwcm9wZXJ0eSB5b3Vyc2VsZiwgb3IgdXNlXG4gICAqIFtDb250ZW50SXRlbXNNaXhpbl0oQ29udGVudEl0ZW1zTWl4aW4ubWQpLiBUaGlzIG1peGluIGFsc28gZXhwZWN0cyB0aGVcbiAgICogY29tcG9uZW50IHRvIGRlZmluZSBhIGBzZWxlY3RlZEluZGV4YCBwcm9wZXJ0eS4gWW91IGNhbiBwcm92aWRlIHRoYXRcbiAgICogeW91cnNlbGYsIG9yIHVzZSBbU2luZ2xlU2VsZWN0aW9uTWl4aW5dKFNpbmdsZVNlbGVjdGlvbk1peGluLm1kKS5cbiAgICovXG4gIGNsYXNzIENsaWNrU2VsZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICAvKlxuICAgICAgICogUkVWSUVXOiBXaGljaCBldmVudCBzaG91bGQgd2UgbGlzdGVuIHRvIGhlcmU/XG4gICAgICAgKlxuICAgICAgICogVGhlIHN0YW5kYXJkIHVzZSBmb3IgdGhpcyBtaXhpbiBpcyBpbiBsaXN0IGJveGVzLiBMaXN0IGJveGVzIGRvbid0XG4gICAgICAgKiBhcHBlYXIgdG8gYmUgY29uc2lzdGVudCB3aXRoIHJlZ2FyZCB0byB3aGV0aGVyIHRoZXkgc2VsZWN0IG9uIG1vdXNlZG93blxuICAgICAgICogb3IgY2xpY2svbW91c2V1cC5cbiAgICAgICAqL1xuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBldmVudCA9PiB7XG4gICAgICAgIC8vIEhBQ0s6IElmIHRoZSBpdGVtIGlzIGEgYnV0dG9uLCB0aGUgZXZlbnQgc2VlbXMgdG8gYmUgcmFpc2VkIGluXG4gICAgICAgIC8vIHBoYXNlIDIgKEFUX1RBUkdFVCksIGJ1dCB0aGUgdGFyZ2V0IGlzIHRoZSBjb21wb25lbnQsIG5vdCBpdGVtLlxuICAgICAgICAvLyBOZWVkIHRvIGludmVzaWdhdGUuXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCA9PT0gdGhpcyA/XG4gICAgICAgICAgZXZlbnQucGF0aFswXSA6XG4gICAgICAgICAgZXZlbnQudGFyZ2V0O1xuICAgICAgICBjb25zdCBpbmRleCA9IGluZGV4T2ZDb250YWluaW5nSXRlbSh0aGlzLCB0YXJnZXQpO1xuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xuICAgICAgICAgIC8vIE5vdGU6IFdlIGRvbid0IGNhbGwgcHJldmVudERlZmF1bHQgaGVyZS4gVGhlIGRlZmF1bHQgYmVoYXZpb3IgZm9yXG4gICAgICAgICAgLy8gbW91c2Vkb3duIGluY2x1ZGVzIHNldHRpbmcga2V5Ym9hcmQgZm9jdXMgaWYgdGhlIGVsZW1lbnQgZG9lc24ndFxuICAgICAgICAgIC8vIGFscmVhZHkgaGF2ZSB0aGUgZm9jdXMsIGFuZCB3ZSB3YW50IHRvIHByZXNlcnZlIHRoYXQgYmVoYXZpb3IuXG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIERlZmF1bHQgaW1wbGVtZW50YXRpb24uIFRoaXMgd2lsbCB0eXBpY2FsbHkgYmUgaGFuZGxlZCBieSBvdGhlciBtaXhpbnMuXG4gICAgZ2V0IHNlbGVjdGVkSW5kZXgoKSB7XG4gICAgICByZXR1cm4gc3VwZXIuc2VsZWN0ZWRJbmRleDtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGVkSW5kZXgoaW5kZXgpIHtcbiAgICAgIGlmICgnc2VsZWN0ZWRJbmRleCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJbmRleCA9IGluZGV4OyB9XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gQ2xpY2tTZWxlY3Rpb247XG59O1xuXG5cbi8qXG4gKiBSZXR1cm4gaW5kZXggb2YgdGhlIGVsZW1lbnQgaXRlbXMgdGhhdCBlaXRoZXIgaXMgb3IgY29udGFpbnMgdGhlIGluZGljYXRlZFxuICogdGFyZ2V0LiBSZXR1cm4gLTEgaWYgbm90IGZvdW5kLlxuICovXG5mdW5jdGlvbiBpbmRleE9mQ29udGFpbmluZ0l0ZW0oZWxlbWVudCwgdGFyZ2V0KSB7XG4gIGNvbnN0IGl0ZW1zID0gZWxlbWVudC5pdGVtcztcbiAgY29uc3QgaXRlbUNvdW50ID0gaXRlbXMgPyBpdGVtcy5sZW5ndGggOiAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1Db3VudDsgaSsrKSB7XG4gICAgbGV0IGl0ZW0gPSBpdGVtc1tpXTtcbiAgICBpZiAoaXRlbSA9PT0gdGFyZ2V0IHx8IGl0ZW0uY29udGFpbnModGFyZ2V0KSkge1xuICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cbiIsIi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggQ29tcG9zYWJsZS4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHRvIG1ha2UgYSBjbGFzcyBtb3JlIGVhc2lseSBjb21wb3NhYmxlIHdpdGggb3RoZXIgbWl4aW5zLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGNvbnRyaWJ1dGVzIGEgYGNvbXBvc2VgIG1ldGhvZCB0aGF0IGFwcGxpZXMgYSBzZXQgb2YgbWl4aW5cbiAgICogZnVuY3Rpb25zIGFuZCByZXR1cm5zIHRoZSByZXN1bHRpbmcgbmV3IGNsYXNzLiBUaGlzIHN1Z2FyIGNhbiBtYWtlIHRoZVxuICAgKiBhcHBsaWNhdGlvbiBvZiBtYW55IG1peGlucyBhdCBvbmNlIGVhc2llciB0byByZWFkLlxuICAgKi9cbiAgY2xhc3MgQ29tcG9zYWJsZSBleHRlbmRzIGJhc2Uge1xuXG4gICAgLyoqXG4gICAgICogQXBwbHkgYSBzZXQgb2YgbWl4aW4gZnVuY3Rpb25zIG9yIG1peGluIG9iamVjdHMgdG8gdGhlIHByZXNlbnQgY2xhc3MgYW5kXG4gICAgICogcmV0dXJuIHRoZSBuZXcgY2xhc3MuXG4gICAgICpcbiAgICAgKiBJbnN0ZWFkIG9mIHdyaXRpbmc6XG4gICAgICpcbiAgICAgKiAgICAgbGV0IE15Q2xhc3MgPSBNaXhpbjEoTWl4aW4yKE1peGluMyhNaXhpbjQoTWl4aW41KEJhc2VDbGFzcykpKSkpO1xuICAgICAqXG4gICAgICogWW91IGNhbiB3cml0ZTpcbiAgICAgKlxuICAgICAqICAgICBsZXQgTXlDbGFzcyA9IENvbXBvc2FibGVNaXhpbihCYXNlQ2xhc3MpLmNvbXBvc2UoXG4gICAgICogICAgICAgTWl4aW4xLFxuICAgICAqICAgICAgIE1peGluMixcbiAgICAgKiAgICAgICBNaXhpbjMsXG4gICAgICogICAgICAgTWl4aW40LFxuICAgICAqICAgICAgIE1peGluNVxuICAgICAqICAgICApO1xuICAgICAqXG4gICAgICogVGhpcyBmdW5jdGlvbiBjYW4gYWxzbyB0YWtlIG1peGluIG9iamVjdHMuIEEgbWl4aW4gb2JqZWN0IGlzIGp1c3QgYVxuICAgICAqIHNob3J0aGFuZCBmb3IgYSBtaXhpbiBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYSBuZXcgc3ViY2xhc3Mgd2l0aCB0aGUgZ2l2ZW5cbiAgICAgKiBtZW1iZXJzLiBUaGUgbWl4aW4gb2JqZWN0J3MgbWVtYmVycyBhcmUgKm5vdCogY29waWVkIGRpcmVjdGx5IG9udG8gdGhlXG4gICAgICogcHJvdG90eXBlIG9mIHRoZSBiYXNlIGNsYXNzLCBhcyB3aXRoIHRyYWRpdGlvbmFsIG1peGlucy5cbiAgICAgKlxuICAgICAqIEluIGFkZGl0aW9uIHRvIHByb3ZpZGluZyBzeW50YWN0aWMgc3VnYXIsIHRoaXMgbWl4aW4gY2FuIGJlIHVzZWQgdG9cbiAgICAgKiBkZWZpbmUgYSBjbGFzcyBpbiBFUzUsIHdoaWNoIGxhY2tzIEVTNidzIGBjbGFzc2Aga2V5d29yZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Li4ubWl4aW5zfSBtaXhpbnMgLSBBIHNldCBvZiBtaXhpbiBmdW5jdGlvbnMgb3Igb2JqZWN0cyB0byBhcHBseS5cbiAgICAgKi9cbiAgICBzdGF0aWMgY29tcG9zZSguLi5taXhpbnMpIHtcbiAgICAgIC8vIFdlIGNyZWF0ZSBhIG5ldyBzdWJjbGFzcyBmb3IgZWFjaCBtaXhpbiBpbiB0dXJuLiBUaGUgcmVzdWx0IGJlY29tZXNcbiAgICAgIC8vIHRoZSBiYXNlIGNsYXNzIGV4dGVuZGVkIGJ5IGFueSBzdWJzZXF1ZW50IG1peGlucy4gSXQgdHVybnMgb3V0IHRoYXRcbiAgICAgIC8vIHdlIGNhbiB1c2UgQXJyYXkucmVkdWNlKCkgdG8gY29uY2lzZWx5IGV4cHJlc3MgdGhpcywgdXNpbmcgdGhlIGN1cnJlbnRcbiAgICAgIC8vIG9iamVjdCBhcyB0aGUgc2VlZCBmb3IgcmVkdWNlKCkuXG4gICAgICByZXR1cm4gbWl4aW5zLnJlZHVjZShjb21wb3NlQ2xhc3MsIHRoaXMpO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIENvbXBvc2FibGU7XG59O1xuXG5cbi8vIFByb3BlcnRpZXMgZGVmaW5lZCBieSBPYmplY3QgdGhhdCB3ZSBkb24ndCB3YW50IHRvIG1peGluLlxuY29uc3QgTk9OX01JWEFCTEVfT0JKRUNUX1BST1BFUlRJRVMgPSBbXG4gICdjb25zdHJ1Y3Rvcidcbl07XG5cbi8qXG4gKiBBcHBseSB0aGUgbWl4aW4gdG8gdGhlIGdpdmVuIGJhc2UgY2xhc3MgdG8gcmV0dXJuIGEgbmV3IGNsYXNzLlxuICogVGhlIG1peGluIGNhbiBlaXRoZXIgYmUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIG1vZGlmaWVkIGNsYXNzLCBvciBhXG4gKiBwbGFpbiBvYmplY3Qgd2hvc2UgbWVtYmVycyB3aWxsIGJlIGNvcGllZCB0byB0aGUgbmV3IGNsYXNzJyBwcm90b3R5cGUuXG4gKi9cbmZ1bmN0aW9uIGNvbXBvc2VDbGFzcyhiYXNlLCBtaXhpbikge1xuICBpZiAodHlwZW9mIG1peGluID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gTWl4aW4gZnVuY3Rpb25cbiAgICByZXR1cm4gbWl4aW4oYmFzZSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gTWl4aW4gb2JqZWN0XG4gICAgY2xhc3MgU3ViY2xhc3MgZXh0ZW5kcyBiYXNlIHt9XG4gICAgY29weU93blByb3BlcnRpZXMobWl4aW4sIFN1YmNsYXNzLnByb3RvdHlwZSwgTk9OX01JWEFCTEVfT0JKRUNUX1BST1BFUlRJRVMpO1xuICAgIHJldHVybiBTdWJjbGFzcztcbiAgfVxufVxuXG5cbi8qXG4gKiBDb3B5IHRoZSBnaXZlbiBwcm9wZXJ0aWVzL21ldGhvZHMgdG8gdGhlIHRhcmdldC5cbiAqIFJldHVybiB0aGUgdXBkYXRlZCB0YXJnZXQuXG4gKi9cbmZ1bmN0aW9uIGNvcHlPd25Qcm9wZXJ0aWVzKHNvdXJjZSwgdGFyZ2V0LCBpZ25vcmVQcm9wZXJ0eU5hbWVzID0gW10pIHtcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoc291cmNlKS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgIGlmIChpZ25vcmVQcm9wZXJ0eU5hbWVzLmluZGV4T2YobmFtZSkgPCAwKSB7XG4gICAgICBjb25zdCBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIG5hbWUpO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHRhcmdldDtcbn1cbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi9jcmVhdGVTeW1ib2wnO1xuaW1wb3J0IHRvZ2dsZUNsYXNzIGZyb20gJy4vdG9nZ2xlQ2xhc3MnO1xuaW1wb3J0IHN5bWJvbHMgZnJvbSAnLi9zeW1ib2xzJztcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3QgaXRlbXNTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2l0ZW1zJyk7XG5jb25zdCBpdGVtSW5pdGlhbGl6ZWRTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2l0ZW1Jbml0aWFsaXplZCcpO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggQ29udGVudEl0ZW1zLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggbWFwcyBjb250ZW50IHNlbWFudGljcyAoZWxlbWVudHMpIHRvIGxpc3QgaXRlbSBzZW1hbnRpY3MuXG4gICAqXG4gICAqIEl0ZW1zIGRpZmZlciBmcm9tIGVsZW1lbnQgY29udGVudHMgaW4gc2V2ZXJhbCB3YXlzOlxuICAgKlxuICAgKiAqIFRoZXkgYXJlIG9mdGVuIHJlZmVyZW5jZWQgdmlhIGluZGV4LlxuICAgKiAqIFRoZXkgbWF5IGhhdmUgYSBzZWxlY3Rpb24gc3RhdGUuXG4gICAqICogSXQncyBjb21tb24gdG8gZG8gd29yayB0byBpbml0aWFsaXplIHRoZSBhcHBlYXJhbmNlIG9yIHN0YXRlIG9mIGEgbmV3XG4gICAqICAgaXRlbS5cbiAgICogKiBBdXhpbGlhcnkgaW52aXNpYmxlIGNoaWxkIGVsZW1lbnRzIGFyZSBmaWx0ZXJlZCBvdXQgYW5kIG5vdCBjb3VudGVkIGFzXG4gICAqICAgaXRlbXMuIEF1eGlsaWFyeSBlbGVtZW50cyBpbmNsdWRlIGxpbmssIHNjcmlwdCwgc3R5bGUsIGFuZCB0ZW1wbGF0ZVxuICAgKiAgIGVsZW1lbnRzLiBUaGlzIGZpbHRlcmluZyBlbnN1cmVzIHRoYXQgdGhvc2UgYXV4aWxpYXJ5IGVsZW1lbnRzIGNhbiBiZVxuICAgKiAgIHVzZWQgaW4gbWFya3VwIGluc2lkZSBvZiBhIGxpc3Qgd2l0aG91dCBiZWluZyB0cmVhdGVkIGFzIGxpc3QgaXRlbXMuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyBhIGNvbXBvbmVudCB0byBwcm92aWRlIGEgYGNvbnRlbnRgIHByb3BlcnR5IHJldHVybmluZyBhXG4gICAqIHJhdyBzZXQgb2YgZWxlbWVudHMuIFlvdSBjYW4gcHJvdmlkZSB0aGF0IHlvdXJzZWxmLCBvciB1c2VcbiAgICogW0Rpc3RyaWJ1dGVkQ2hpbGRyZW5Db250ZW50TWl4aW5dKERpc3RyaWJ1dGVkQ2hpbGRyZW5Db250ZW50TWl4aW4ubWQpLlxuICAgKlxuICAgKiBUaGUgbW9zdCBjb21tb25seSByZWZlcmVuY2VkIHByb3BlcnR5IGRlZmluZWQgYnkgdGhpcyBtaXhpbiBpcyB0aGUgYGl0ZW1zYFxuICAgKiBwcm9wZXJ0eS4gVG8gYXZvaWQgaGF2aW5nIHRvIGRvIHdvcmsgZWFjaCB0aW1lIHRoYXQgcHJvcGVydHkgaXMgcmVxdWVzdGVkLFxuICAgKiB0aGlzIG1peGluIHN1cHBvcnRzIGFuIG9wdGltaXplZCBtb2RlLiBJZiB5b3UgaW52b2tlIHRoZSBgY29udGVudENoYW5nZWRgXG4gICAqIG1ldGhvZCB3aGVuIHRoZSBzZXQgb2YgaXRlbXMgY2hhbmdlcywgdGhlIG1peGluIGNvbmNsdWRlcyB0aGF0IHlvdSdsbCB0YWtlXG4gICAqIGNhcmUgb2Ygbm90aWZ5aW5nIGl0IG9mIGZ1dHVyZSBjaGFuZ2VzLCBhbmQgdHVybnMgb24gdGhlIG9wdGltaXphdGlvbi4gV2l0aFxuICAgKiB0aGF0IG9uLCB0aGUgbWl4aW4gc2F2ZXMgYSByZWZlcmVuY2UgdG8gdGhlIGNvbXB1dGVkIHNldCBvZiBpdGVtcywgYW5kIHdpbGxcbiAgICogcmV0dXJuIHRoYXQgaW1tZWRpYXRlbHkgb24gc3Vic2VxdWVudCBjYWxscyB0byB0aGUgYGl0ZW1zYCBwcm9wZXJ0eS4gSWYgeW91XG4gICAqIHVzZSB0aGlzIG1peGluIGluIGNvbmp1bmN0aW9uIHdpdGhcbiAgICogW0Rpc3RyaWJ1dGVkQ2hpbGRyZW5Db250ZW50TWl4aW5dKERpc3RyaWJ1dGVkQ2hpbGRyZW5Db250ZW50TWl4aW4ubWQpLCB0aGVcbiAgICogYGNvbnRlbnRDaGFuZ2VkYCBtZXRob2Qgd2lsbCBiZSBpbnZva2VkIGZvciB5b3Ugd2hlbiB0aGUgZWxlbWVudCdzIGNoaWxkcmVuXG4gICAqIGNoYW5nZSwgdHVybmluZyBvbiB0aGUgb3B0aW1pemF0aW9uIGF1dG9tYXRpY2FsbHkuXG4gICAqL1xuICBjbGFzcyBDb250ZW50SXRlbXMgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbnRlbnRDaGFuZ2VkKCkge1xuICAgICAgaWYgKHN1cGVyLmNvbnRlbnRDaGFuZ2VkKSB7IHN1cGVyLmNvbnRlbnRDaGFuZ2VkKCk7IH1cblxuICAgICAgLy8gU2luY2Ugd2UgZ290IHRoZSBjb250ZW50Q2hhbmdlZCBjYWxsLCB3ZSdsbCBhc3N1bWUgd2UnbGwgYmUgbm90aWZpZWQgaWZcbiAgICAgIC8vIHRoZSBzZXQgb2YgaXRlbXMgY2hhbmdlcyBsYXRlci4gV2UgdHVybiBvbiBtZW1vaXphdGlvbiBvZiB0aGUgaXRlbXNcbiAgICAgIC8vIHByb3BlcnR5IGJ5IHNldHRpbmcgb3VyIGludGVybmFsIHByb3BlcnR5IHRvIG51bGwgKGluc3RlYWQgb2ZcbiAgICAgIC8vIHVuZGVmaW5lZCkuXG4gICAgICB0aGlzW2l0ZW1zU3ltYm9sXSA9IG51bGw7XG5cbiAgICAgIHRoaXNbc3ltYm9scy5pdGVtc0NoYW5nZWRdKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgaXMgaW52b2tlZCB3aGVuZXZlciBhIG5ldyBpdGVtIGlzIGFkZGVkIHRvIHRoZSBsaXN0LlxuICAgICAqXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLiBZb3UgY2FuIG92ZXJyaWRlXG4gICAgICogdGhpcyB0byBwZXJmb3JtIHBlci1pdGVtIGluaXRpYWxpemF0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaXRlbSAtIFRoZSBpdGVtIHRoYXQgd2FzIGFkZGVkLlxuICAgICAqL1xuICAgIFtzeW1ib2xzLml0ZW1BZGRlZF0oaXRlbSkge1xuICAgICAgaWYgKHN1cGVyW3N5bWJvbHMuaXRlbUFkZGVkXSkgeyBzdXBlcltzeW1ib2xzLml0ZW1BZGRlZF0oaXRlbSk7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2VsZWN0aW9uIHN0YXRlIGZvciBhIHNpbmdsZSBpdGVtIGhhcyBjaGFuZ2VkLlxuICAgICAqXG4gICAgICogSW52b2tlIHRoaXMgbWV0aG9kIHRvIHNpZ25hbCB0aGF0IHRoZSBzZWxlY3RlZCBzdGF0ZSBvZiB0aGUgaW5kaWNhdGVkIGl0ZW1cbiAgICAgKiBoYXMgY2hhbmdlZC4gQnkgZGVmYXVsdCwgdGhpcyBhcHBsaWVzIGEgYHNlbGVjdGVkYCBDU1MgY2xhc3MgaWYgdGhlIGl0ZW1cbiAgICAgKiBpcyBzZWxlY3RlZCwgYW5kIHJlbW92ZWQgaXQgaWYgbm90IHNlbGVjdGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaXRlbSAtIFRoZSBpdGVtIHdob3NlIHNlbGVjdGlvbiBzdGF0ZSBoYXMgY2hhbmdlZC5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNlbGVjdGVkIC0gVHJ1ZSBpZiB0aGUgaXRlbSBpcyBzZWxlY3RlZCwgZmFsc2UgaWYgbm90LlxuICAgICAqL1xuICAgIFtzeW1ib2xzLml0ZW1TZWxlY3RlZF0oaXRlbSwgc2VsZWN0ZWQpIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLml0ZW1TZWxlY3RlZF0pIHsgc3VwZXJbc3ltYm9scy5pdGVtU2VsZWN0ZWRdKGl0ZW0sIHNlbGVjdGVkKTsgfVxuICAgICAgdG9nZ2xlQ2xhc3MoaXRlbSwgJ3NlbGVjdGVkJywgc2VsZWN0ZWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IHNldCBvZiBpdGVtcyBpbiB0aGUgbGlzdC4gU2VlIHRoZSB0b3AtbGV2ZWwgZG9jdW1lbnRhdGlvbiBmb3JcbiAgICAgKiBtaXhpbiBmb3IgYSBkZXNjcmlwdGlvbiBvZiBob3cgaXRlbXMgZGlmZmVyIGZyb20gcGxhaW4gY29udGVudC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudFtdfVxuICAgICAqL1xuICAgIGdldCBpdGVtcygpIHtcbiAgICAgIGxldCBpdGVtcztcbiAgICAgIGlmICh0aGlzW2l0ZW1zU3ltYm9sXSA9PSBudWxsKSB7XG4gICAgICAgIGl0ZW1zID0gZmlsdGVyQXV4aWxpYXJ5RWxlbWVudHModGhpcy5jb250ZW50KTtcbiAgICAgICAgLy8gTm90ZTogdGVzdCBmb3IgKmVxdWFsaXR5KiB3aXRoIG51bGw7IGRvbid0IHRyZWF0IHVuZGVmaW5lZCBhcyBhIG1hdGNoLlxuICAgICAgICBpZiAodGhpc1tpdGVtc1N5bWJvbF0gPT09IG51bGwpIHtcbiAgICAgICAgICAvLyBNZW1vaXplIHRoZSBzZXQgb2YgaXRlbXMuXG4gICAgICAgICAgdGhpc1tpdGVtc1N5bWJvbF0gPSBpdGVtcztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUmV0dXJuIHRoZSBtZW1vaXplZCBpdGVtcy5cbiAgICAgICAgaXRlbXMgPSB0aGlzW2l0ZW1zU3ltYm9sXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpdGVtcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIHdoZW4gdGhlIHVuZGVybHlpbmcgY29udGVudHMgY2hhbmdlLiBJdCBpcyBhbHNvXG4gICAgICogaW52b2tlZCBvbiBjb21wb25lbnQgaW5pdGlhbGl6YXRpb24g4oCTIHNpbmNlIHRoZSBpdGVtcyBoYXZlIFwiY2hhbmdlZFwiIGZyb21cbiAgICAgKiBiZWluZyBub3RoaW5nLlxuICAgICAqL1xuICAgIFtzeW1ib2xzLml0ZW1zQ2hhbmdlZF0oKSB7XG4gICAgICBpZiAoc3VwZXJbc3ltYm9scy5pdGVtc0NoYW5nZWRdKSB7IHN1cGVyW3N5bWJvbHMuaXRlbXNDaGFuZ2VkXSgpOyB9XG5cbiAgICAgIC8vIFBlcmZvcm0gcGVyLWl0ZW0gaW5pdGlhbGl6YXRpb24uXG4gICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHRoaXMuaXRlbXMsIGl0ZW0gPT4ge1xuICAgICAgICBpZiAoIWl0ZW1baXRlbUluaXRpYWxpemVkU3ltYm9sXSkge1xuICAgICAgICAgIHRoaXNbc3ltYm9scy5pdGVtQWRkZWRdKGl0ZW0pO1xuICAgICAgICAgIGl0ZW1baXRlbUluaXRpYWxpemVkU3ltYm9sXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdpdGVtcy1jaGFuZ2VkJykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpcmVzIHdoZW4gdGhlIGl0ZW1zIGluIHRoZSBsaXN0IGNoYW5nZS5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBDb250ZW50SXRlbXNcbiAgICAgKiBAZXZlbnQgaXRlbXMtY2hhbmdlZFxuICAgICAqL1xuICB9XG5cbiAgcmV0dXJuIENvbnRlbnRJdGVtcztcbn07XG5cblxuLy8gUmV0dXJuIHRoZSBnaXZlbiBlbGVtZW50cywgZmlsdGVyaW5nIG91dCBhdXhpbGlhcnkgZWxlbWVudHMgdGhhdCBhcmVuJ3Rcbi8vIHR5cGljYWxseSB2aXNpYmxlLiBJdGVtcyB3aGljaCBhcmUgbm90IGVsZW1lbnRzIGFyZSByZXR1cm5lZCBhcyBpcy5cbmZ1bmN0aW9uIGZpbHRlckF1eGlsaWFyeUVsZW1lbnRzKGl0ZW1zKSB7XG4gIGNvbnN0IGF1eGlsaWFyeVRhZ3MgPSBbXG4gICAgJ2xpbmsnLFxuICAgICdzY3JpcHQnLFxuICAgICdzdHlsZScsXG4gICAgJ3RlbXBsYXRlJ1xuICBdO1xuICByZXR1cm4gW10uZmlsdGVyLmNhbGwoaXRlbXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICByZXR1cm4gIWl0ZW0ubG9jYWxOYW1lIHx8IGF1eGlsaWFyeVRhZ3MuaW5kZXhPZihpdGVtLmxvY2FsTmFtZSkgPCAwO1xuICB9KTtcbn1cbiIsImltcG9ydCBzeW1ib2xzIGZyb20gJy4vc3ltYm9scyc7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBEaXJlY3Rpb25TZWxlY3Rpb24uICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBtYXBzIGRpcmVjdGlvbiBzZW1hbnRpY3MgKGdvTGVmdCwgZ29SaWdodCwgZXRjLikgdG8gc2VsZWN0aW9uXG4gICAqIHNlbWFudGljcyAoc2VsZWN0UHJldmlvdXMsIHNlbGVjdE5leHQsIGV0Yy4pLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGNhbiBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGhcbiAgICogW0tleWJvYXJkRGlyZWN0aW9uTWl4aW5dKEtleWJvYXJkRGlyZWN0aW9uTWl4aW4ubWQpICh3aGljaCBtYXBzIGtleWJvYXJkXG4gICAqIGV2ZW50cyB0byBkaXJlY3Rpb25zKSBhbmQgYSBtaXhpbiB0aGF0IGhhbmRsZXMgc2VsZWN0aW9uIGxpa2VcbiAgICogW1NpbmdsZVNlbGVjdGlvbk1peGluXShTaW5nbGVTZWxlY3Rpb25NaXhpbi5tZCkuXG4gICAqL1xuICBjbGFzcyBEaXJlY3Rpb25TZWxlY3Rpb24gZXh0ZW5kcyBiYXNlIHtcblxuICAgIFtzeW1ib2xzLmdvRG93bl0oKSB7XG4gICAgICBpZiAoc3VwZXJbc3ltYm9scy5nb0Rvd25dKSB7IHN1cGVyW3N5bWJvbHMuZ29Eb3duXSgpOyB9XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3ROZXh0KCk7XG4gICAgfVxuXG4gICAgW3N5bWJvbHMuZ29FbmRdKCkge1xuICAgICAgaWYgKHN1cGVyW3N5bWJvbHMuZ29FbmRdKSB7IHN1cGVyW3N5bWJvbHMuZ29FbmRdKCk7IH1cbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdExhc3QoKTtcbiAgICB9XG5cbiAgICBbc3ltYm9scy5nb0xlZnRdKCkge1xuICAgICAgaWYgKHN1cGVyW3N5bWJvbHMuZ29MZWZ0XSkgeyBzdXBlcltzeW1ib2xzLmdvTGVmdF0oKTsgfVxuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0UHJldmlvdXMoKTtcbiAgICB9XG5cbiAgICBbc3ltYm9scy5nb1JpZ2h0XSgpIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLmdvUmlnaHRdKSB7IHN1cGVyW3N5bWJvbHMuZ29SaWdodF0oKTsgfVxuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0TmV4dCgpO1xuICAgIH1cblxuICAgIFtzeW1ib2xzLmdvU3RhcnRdKCkge1xuICAgICAgaWYgKHN1cGVyW3N5bWJvbHMuZ29TdGFydF0pIHsgc3VwZXJbc3ltYm9scy5nb1N0YXJ0XSgpOyB9XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RGaXJzdCgpO1xuICAgIH1cblxuICAgIFtzeW1ib2xzLmdvVXBdKCkge1xuICAgICAgaWYgKHN1cGVyW3N5bWJvbHMuZ29VcF0pIHsgc3VwZXJbc3ltYm9scy5nb1VwXSgpOyB9XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RQcmV2aW91cygpO1xuICAgIH1cblxuICAgIC8vIERlZmF1bHQgaW1wbGVtZW50YXRpb24uIFRoaXMgd2lsbCB0eXBpY2FsbHkgYmUgaGFuZGxlZCBieSBvdGhlciBtaXhpbnMuXG4gICAgZ2V0IHNlbGVjdGVkRnJhY3Rpb24oKSB7XG4gICAgICByZXR1cm4gc3VwZXIuc2VsZWN0ZWRGcmFjdGlvbjtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGVkRnJhY3Rpb24odmFsdWUpIHtcbiAgICAgIGlmICgnc2VsZWN0ZWRGcmFjdGlvbicgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRGcmFjdGlvbiA9IHZhbHVlOyB9XG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCBpbXBsZW1lbnRhdGlvbi4gVGhpcyB3aWxsIHR5cGljYWxseSBiZSBoYW5kbGVkIGJ5IG90aGVyIG1peGlucy5cbiAgICBzZWxlY3RGaXJzdCgpIHtcbiAgICAgIGlmIChzdXBlci5zZWxlY3RGaXJzdCkgeyByZXR1cm4gc3VwZXIuc2VsZWN0Rmlyc3QoKTsgfVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgaW1wbGVtZW50YXRpb24uIFRoaXMgd2lsbCB0eXBpY2FsbHkgYmUgaGFuZGxlZCBieSBvdGhlciBtaXhpbnMuXG4gICAgc2VsZWN0TGFzdCgpIHtcbiAgICAgIGlmIChzdXBlci5zZWxlY3RMYXN0KSB7IHJldHVybiBzdXBlci5zZWxlY3RMYXN0KCk7IH1cbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IGltcGxlbWVudGF0aW9uLiBUaGlzIHdpbGwgdHlwaWNhbGx5IGJlIGhhbmRsZWQgYnkgb3RoZXIgbWl4aW5zLlxuICAgIHNlbGVjdE5leHQoKSB7XG4gICAgICBpZiAoc3VwZXIuc2VsZWN0TmV4dCkgeyByZXR1cm4gc3VwZXIuc2VsZWN0TmV4dCgpOyB9XG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCBpbXBsZW1lbnRhdGlvbi4gVGhpcyB3aWxsIHR5cGljYWxseSBiZSBoYW5kbGVkIGJ5IG90aGVyIG1peGlucy5cbiAgICBzZWxlY3RQcmV2aW91cygpIHtcbiAgICAgIGlmIChzdXBlci5zZWxlY3RQcmV2aW91cykgeyByZXR1cm4gc3VwZXIuc2VsZWN0UHJldmlvdXMoKTsgfVxuICAgIH1cblxuICAgIC8vIE1hcCBkcmFnIHRyYXZlbCBmcmFjdGlvbiB0byBzZWxlY3Rpb24gZnJhY3Rpb24uXG4gICAgZ2V0IHRyYXZlbEZyYWN0aW9uKCkge1xuICAgICAgcmV0dXJuIHN1cGVyLnRyYXZlbEZyYWN0aW9uO1xuICAgIH1cbiAgICBzZXQgdHJhdmVsRnJhY3Rpb24odmFsdWUpIHtcbiAgICAgIGlmICgndHJhdmVsRnJhY3Rpb24nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnRyYXZlbEZyYWN0aW9uID0gdmFsdWU7IH1cbiAgICAgIHRoaXMuc2VsZWN0ZWRGcmFjdGlvbiA9IHZhbHVlO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIERpcmVjdGlvblNlbGVjdGlvbjtcbn07XG4iLCJpbXBvcnQgbWljcm90YXNrIGZyb20gJy4vbWljcm90YXNrJztcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIERpc3RyaWJ1dGVkQ2hpbGRyZW5Db250ZW50LiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggZGVmaW5lcyBhIGNvbXBvbmVudCdzIGNvbnRlbnQgYXMgaXRzIGNoaWxkcmVuLCBleHBhbmRpbmcgYW55XG4gICAqIG5vZGVzIGRpc3RyaWJ1dGVkIHRvIHRoZSBjb21wb25lbnQncyBzbG90cy5cbiAgICpcbiAgICogVGhpcyBhbHNvIHByb3ZpZGVzIG5vdGlmaWNhdGlvbiBvZiBjaGFuZ2VzIHRvIGEgY29tcG9uZW50J3MgY29udGVudC4gSXRcbiAgICogd2lsbCBpbnZva2UgYSBgY29udGVudENoYW5nZWRgIG1ldGhvZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgZmlyc3RcbiAgICogaW5zdGFudGlhdGVkLCBhbmQgd2hlbmV2ZXIgaXRzIGRpc3RyaWJ1dGVkIGNoaWxkcmVuIGNoYW5nZS4gVGhpcyBpcyBhblxuICAgKiBlYXN5IHdheSB0byBzYXRpc2Z5IHRoZSBHb2xkIFN0YW5kYXJkIGNoZWNrbGlzdCBpdGVtIGZvciBtb25pdG9yaW5nXG4gICAqIFtDb250ZW50IENoYW5nZXNdKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJjb21wb25lbnRzL2dvbGQtc3RhbmRhcmQvd2lraS9Db250ZW50LUNoYW5nZXMpLlxuICAgKlxuICAgKiBFeGFtcGxlOlxuICAgKlxuICAgKiBgYGBcbiAgICogbGV0IGJhc2UgPSBEaXN0cmlidXRlZENoaWxkcmVuQ29udGVudE1peGluKERpc3RyaWJ1dGVkQ2hpbGRyZW5NaXhpbihIVE1MRWxlbWVudCkpO1xuICAgKiBjbGFzcyBDb3VudGluZ0VsZW1lbnQgZXh0ZW5kcyBiYXNlIHtcbiAgICpcbiAgICogICBjb25zdHJ1Y3RvcigpIHtcbiAgICogICAgIHN1cGVyKCk7XG4gICAqICAgICBsZXQgcm9vdCA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICAgKiAgICAgcm9vdC5pbm5lckhUTUwgPSBgPHNsb3Q+PC9zbG90PmA7XG4gICAqICAgfVxuICAgKlxuICAgKiAgIGNvbnRlbnRDaGFuZ2VkKCkge1xuICAgKiAgICAgLy8gQ291bnQgdGhlIGNvbXBvbmVudCdzIGNoaWxkcmVuLCBib3RoIGluaXRpYWxseSBhbmQgd2hlbiBjaGFuZ2VkLlxuICAgKiAgICAgdGhpcy5jb3VudCA9IHRoaXMuZGlzdHJpYnV0ZWRDaGlsZHJlbi5sZW5ndGg7XG4gICAqICAgfVxuICAgKlxuICAgKiB9XG4gICAqIGBgYFxuICAgKlxuICAgKiBOb3RlIHRoYXQgY29udGVudCBjaGFuZ2UgZGV0ZWN0aW9uIGRlcGVuZHMgdXBvbiB0aGUgZWxlbWVudCBoYXZpbmcgYXQgbGVhc3RcbiAgICogb25lIGBzbG90YCBlbGVtZW50IGluIGl0cyBzaGFkb3cgc3VidHJlZS5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBpcyBpbnRlbmRlZCBmb3IgdXNlIHdpdGggdGhlXG4gICAqIFtEaXN0cmlidXRlZENoaWxkcmVuTWl4aW5dKERpc3RyaWJ1dGVkQ2hpbGRyZW5NaXhpbi5tZCkuIFNlZSB0aGF0IG1peGluIGZvclxuICAgKiBhIGRpc2N1c3Npb24gb2YgaG93IHRoYXQgd29ya3MuIFRoaXMgRGlzdHJpYnV0ZWRDaGlsZHJlbkNvbnRlbnRNaXhpblxuICAgKiBwcm92aWRlcyBhbiBlYXN5IHdheSBvZiBkZWZpbmluZyB0aGUgXCJjb250ZW50XCIgb2YgYSBjb21wb25lbnQgYXMgdGhlXG4gICAqIGNvbXBvbmVudCdzIGRpc3RyaWJ1dGVkIGNoaWxkcmVuLiBUaGF0IGluIHR1cm4gbGV0cyBtaXhpbnMgbGlrZVxuICAgKiBbQ29udGVudEl0ZW1zTWl4aW5dKENvbnRlbnRJdGVtc01peGluLm1kKSBtYW5pcHVsYXRlIHRoZSBjaGlsZHJlbiBhcyBsaXN0XG4gICAqIGl0ZW1zLlxuICAgKi9cbiAgY2xhc3MgRGlzdHJpYnV0ZWRDaGlsZHJlbkNvbnRlbnQgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcblxuICAgICAgaWYgKHRoaXMuc2hhZG93Um9vdCkge1xuICAgICAgICAvLyBMaXN0ZW4gdG8gY2hhbmdlcyBvbiBhbGwgc2xvdHMuXG4gICAgICAgIGNvbnN0IHNsb3RzID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3JBbGwoJ3Nsb3QnKTtcbiAgICAgICAgc2xvdHMuZm9yRWFjaChzbG90ID0+IHNsb3QuYWRkRXZlbnRMaXN0ZW5lcignc2xvdGNoYW5nZScsIGV2ZW50ID0+IHtcbiAgICAgICAgICB0aGlzLmNvbnRlbnRDaGFuZ2VkKCk7XG4gICAgICAgIH0pKTtcbiAgICAgIH1cblxuICAgICAgLy8gTWFrZSBhbiBpbml0aWFsIGNhbGwgdG8gY29udGVudENoYW5nZWQoKSBzbyB0aGF0IHRoZSBjb21wb25lbnQgY2FuIGRvXG4gICAgICAvLyBpbml0aWFsaXphdGlvbiB0aGF0IGl0IG5vcm1hbGx5IGRvZXMgd2hlbiBjb250ZW50IGNoYW5nZXMuXG4gICAgICAvL1xuICAgICAgLy8gVGhpcyB3aWxsIGludm9rZSBjb250ZW50Q2hhbmdlZCgpIGhhbmRsZXJzIGluIG90aGVyIG1peGlucy4gSW4gb3JkZXJcbiAgICAgIC8vIHRoYXQgdGhvc2UgbWl4aW5zIGhhdmUgYSBjaGFuY2UgdG8gY29tcGxldGUgdGhlaXIgb3duIGluaXRpYWxpemF0aW9uLFxuICAgICAgLy8gd2UgYWRkIHRoZSBjb250ZW50Q2hhbmdlZCgpIGNhbGwgdG8gdGhlIG1pY3JvdGFzayBxdWV1ZS5cbiAgICAgIG1pY3JvdGFzaygoKSA9PiB0aGlzLmNvbnRlbnRDaGFuZ2VkKCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgY29udGVudHMgb2YgdGhlIGNvbXBvbmVudCAoaW5jbHVkaW5nIGRpc3RyaWJ1dGVkXG4gICAgICogY2hpbGRyZW4pIGhhdmUgY2hhbmdlZC5cbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGFsc28gaW52b2tlZCB3aGVuIGEgY29tcG9uZW50IGlzIGZpcnN0IGluc3RhbnRpYXRlZDsgdGhlXG4gICAgICogY29udGVudHMgaGF2ZSBlc3NlbnRpYWxseSBcImNoYW5nZWRcIiBmcm9tIGJlaW5nIG5vdGhpbmcuIFRoaXMgYWxsb3dzIHRoZVxuICAgICAqIGNvbXBvbmVudCB0byBwZXJmb3JtIGluaXRpYWwgcHJvY2Vzc2luZyBvZiBpdHMgY2hpbGRyZW4uXG4gICAgICovXG4gICAgY29udGVudENoYW5nZWQoKSB7XG4gICAgICBpZiAoc3VwZXIuY29udGVudENoYW5nZWQpIHsgc3VwZXIuY29udGVudENoYW5nZWQoKTsgfVxuICAgICAgY29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2NvbnRlbnQtY2hhbmdlZCcpO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29udGVudCBvZiB0aGlzIGNvbXBvbmVudCwgZGVmaW5lZCB0byBiZSB0aGUgZmxhdHRlbmVkIGFycmF5IG9mXG4gICAgICogY2hpbGRyZW4gZGlzdHJpYnV0ZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudFtdfVxuICAgICAqL1xuICAgIGdldCBjb250ZW50KCkge1xuICAgICAgY29uc3QgZGlzdHJpYnV0ZWRDaGlsZHJlbiA9IHRoaXMuZGlzdHJpYnV0ZWRDaGlsZHJlbjtcbiAgICAgIGlmICh0eXBlb2YgZGlzdHJpYnV0ZWRDaGlsZHJlbiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGBEaXN0cmlidXRlZENoaWxkcmVuQ29udGVudE1peGluIGV4cGVjdHMgdGhlIGNvbXBvbmVudCB0byBkZWZpbmUgYSBcImRpc3RyaWJ1dGVkQ2hpbGRyZW5cIiBwcm9wZXJ0eS5gKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkaXN0cmlidXRlZENoaWxkcmVuO1xuICAgIH1cbiAgICBzZXQgY29udGVudCh2YWx1ZSkge1xuICAgICAgaWYgKCdjb250ZW50JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5jb250ZW50ID0gdmFsdWU7IH1cbiAgICAgIC8vIFRPRE86IFNldCB0aGUgY2hpbGRyZW4gdG8gdGhlIGdpdmVuIHZhbHVlICh3aGljaCBzaG91bGQgYmUgYW4gYXJyYXkgb2ZcbiAgICAgIC8vIGVsZW1lbnRzKT9cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGV2ZW50IGlzIHJhaXNlZCB3aGVuIHRoZSBjb21wb25lbnQncyBjb250ZW50cyAoaW5jbHVkaW5nIGRpc3RyaWJ1dGVkXG4gICAgICogY2hpbGRyZW4pIGhhdmUgY2hhbmdlZC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBEaXN0cmlidXRlZENoaWxkcmVuQ29udGVudFxuICAgICAqIEBldmVudCBjb250ZW50LWNoYW5nZWRcbiAgICAgKi9cbiAgfVxuXG4gIHJldHVybiBEaXN0cmlidXRlZENoaWxkcmVuQ29udGVudDtcbn07XG4iLCIvKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIERpc3RyaWJ1dGVkQ2hpbGRyZW4uICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBkZWZpbmVzIGhlbHBlcnMgZm9yIGFjY2Vzc2luZyBhIGNvbXBvbmVudCdzIGRpc3RyaWJ1dGVkXG4gICAqIGNoaWxkcmVuIGFzIGEgZmxhdHRlbmVkIGFycmF5IG9yIHN0cmluZy5cbiAgICpcbiAgICogVGhlIHN0YW5kYXJkIERPTSBBUEkgcHJvdmlkZXMgc2V2ZXJhbCB3YXlzIG9mIGFjY2Vzc2luZyBjaGlsZCBjb250ZW50OlxuICAgKiBgY2hpbGRyZW5gLCBgY2hpbGROb2Rlc2AsIGFuZCBgdGV4dENvbnRlbnRgLiBOb25lIG9mIHRoZXNlIGZ1bmN0aW9ucyBhcmVcbiAgICogU2hhZG93IERPTSBhd2FyZS4gVGhpcyBtaXhpbiBkZWZpbmVzIHZhcmlhdGlvbnMgb2YgdGhvc2UgZnVuY3Rpb25zIHRoYXRcbiAgICogKmFyZSogU2hhZG93IERPTSBhd2FyZS5cbiAgICpcbiAgICogRXhhbXBsZTogeW91IGNyZWF0ZSBhIGNvbXBvbmVudCBgPGNvdW50LWNoaWxkcmVuPmAgdGhhdCBkaXNwbGF5cyBhIG51bWJlclxuICAgKiBlcXVhbCB0byB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIHBsYWNlZCBpbnNpZGUgdGhhdCBjb21wb25lbnQuIElmIHNvbWVvbmVcbiAgICogaW5zdGFudGlhdGVzIHlvdXIgY29tcG9uZW50IGxpa2U6XG4gICAqXG4gICAqICAgICA8Y291bnQtY2hpbGRyZW4+XG4gICAqICAgICAgIDxkaXY+PC9kaXY+XG4gICAqICAgICAgIDxkaXY+PC9kaXY+XG4gICAqICAgICAgIDxkaXY+PC9kaXY+XG4gICAqICAgICA8L2NvdW50LWNoaWxkcmVuPlxuICAgKlxuICAgKiBUaGVuIHRoZSBjb21wb25lbnQgc2hvdWxkIHNob3cgXCIzXCIsIGJlY2F1c2UgdGhlcmUgYXJlIHRocmVlIGNoaWxkcmVuLiBUb1xuICAgKiBjYWxjdWxhdGUgdGhlIG51bWJlciBvZiBjaGlsZHJlbiwgdGhlIGNvbXBvbmVudCBjYW4ganVzdCBjYWxjdWxhdGVcbiAgICogYHRoaXMuY2hpbGRyZW4ubGVuZ3RoYC4gSG93ZXZlciwgc3VwcG9zZSBzb21lb25lIGluc3RhbnRpYXRlcyB5b3VyXG4gICAqIGNvbXBvbmVudCBpbnNpZGUgb25lIG9mIHRoZWlyIG93biBjb21wb25lbnRzLCBhbmQgcHV0cyBhIGA8c2xvdD5gIGVsZW1lbnRcbiAgICogaW5zaWRlIHlvdXIgY29tcG9uZW50OlxuICAgKlxuICAgKiAgICAgPGNvdW50LWNoaWxkcmVuPlxuICAgKiAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAqICAgICA8L2NvdW50LWNoaWxkcmVuPlxuICAgKlxuICAgKiBJZiB5b3VyIGNvbXBvbmVudCBvbmx5IGxvb2tzIGF0IGB0aGlzLmNoaWxkcmVuYCwgaXQgd2lsbCBhbHdheXMgc2VlIGV4YWN0bHlcbiAgICogb25lIGNoaWxkIOKAlMKgdGhlIGA8c2xvdD5gIGVsZW1lbnQuIEJ1dCB0aGUgdXNlciBsb29raW5nIGF0IHRoZSBwYWdlIHdpbGxcbiAgICogKnNlZSogYW55IG5vZGVzIGRpc3RyaWJ1dGVkIHRvIHRoYXQgc2xvdC4gVG8gbWF0Y2ggd2hhdCB0aGUgdXNlciBzZWVzLCB5b3VyXG4gICAqIGNvbXBvbmVudCBzaG91bGQgZXhwYW5kIGFueSBgPHNsb3Q+YCBlbGVtZW50cyBpdCBjb250YWlucy5cbiAgICpcbiAgICogVGhhdCBpcyB0aGUgcHJvYmxlbSB0aGlzIG1peGluIHNvbHZlcy4gQWZ0ZXIgYXBwbHlpbmcgdGhpcyBtaXhpbiwgeW91clxuICAgKiBjb21wb25lbnQgY29kZSBoYXMgYWNjZXNzIHRvIGB0aGlzLmRpc3RyaWJ1dGVkQ2hpbGRyZW5gLCB3aG9zZSBgbGVuZ3RoYFxuICAgKiB3aWxsIHJldHVybiB0aGUgdG90YWwgbnVtYmVyIG9mIGFsbCBjaGlsZHJlbiBkaXN0cmlidXRlZCB0byB5b3VyIGNvbXBvbmVudFxuICAgKiBpbiB0aGUgY29tcG9zZWQgdHJlZS5cbiAgICpcbiAgICogTm90ZTogVGhlIGxhdGVzdCBDdXN0b20gRWxlbWVudHMgQVBJIGRlc2lnbiBjYWxscyBmb3IgYSBuZXcgZnVuY3Rpb24sXG4gICAqIGBnZXRBc3NpZ25lZE5vZGVzYCB0aGF0IHRha2VzIGFuIG9wdGlvbmFsIGBkZWVwYCBwYXJhbWV0ZXIsIHRoYXQgd2lsbCBzb2x2ZVxuICAgKiB0aGlzIHByb2JsZW0gYXQgdGhlIEFQSSBsZXZlbC5cbiAgICovXG4gIGNsYXNzIERpc3RyaWJ1dGVkQ2hpbGRyZW4gZXh0ZW5kcyBiYXNlIHtcblxuICAgIC8qKlxuICAgICAqIEFuIGluLW9yZGVyIGNvbGxlY3Rpb24gb2YgZGlzdHJpYnV0ZWQgY2hpbGRyZW4sIGV4cGFuZGluZyBhbnkgc2xvdFxuICAgICAqIGVsZW1lbnRzLiBMaWtlIHRoZSBzdGFuZGFyZCBjaGlsZHJlbiBwcm9wZXJ0eSwgdGhpcyBza2lwcyB0ZXh0IG5vZGVzLlxuICAgICAqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50W119XG4gICAgICovXG4gICAgZ2V0IGRpc3RyaWJ1dGVkQ2hpbGRyZW4oKSB7XG4gICAgICByZXR1cm4gZXhwYW5kQ29udGVudEVsZW1lbnRzKHRoaXMuY2hpbGRyZW4sIGZhbHNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbiBpbi1vcmRlciBjb2xsZWN0aW9uIG9mIGRpc3RyaWJ1dGVkIGNoaWxkIG5vZGVzLCBleHBhbmRpbmcgYW55IHNsb3RcbiAgICAgKiBlbGVtZW50cy4gTGlrZSB0aGUgc3RhbmRhcmQgY2hpbGROb2RlcyBwcm9wZXJ0eSwgdGhpcyBpbmNsdWRlcyB0ZXh0XG4gICAgICogbm9kZXMuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Tm9kZVtdfVxuICAgICAqL1xuICAgIGdldCBkaXN0cmlidXRlZENoaWxkTm9kZXMoKSB7XG4gICAgICByZXR1cm4gZXhwYW5kQ29udGVudEVsZW1lbnRzKHRoaXMuY2hpbGROb2RlcywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbmNhdGVuYXRlZCB0ZXh0IGNvbnRlbnQgb2YgYWxsIGRpc3RyaWJ1dGVkIGNoaWxkIG5vZGVzLCBleHBhbmRpbmdcbiAgICAgKiBhbnkgc2xvdCBlbGVtZW50cy5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0IGRpc3RyaWJ1dGVkVGV4dENvbnRlbnQoKSB7XG4gICAgICBjb25zdCBzdHJpbmdzID0gdGhpcy5kaXN0cmlidXRlZENoaWxkTm9kZXMubWFwKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICAgIHJldHVybiBjaGlsZC50ZXh0Q29udGVudDtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHN0cmluZ3Muam9pbignJyk7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gRGlzdHJpYnV0ZWRDaGlsZHJlbjtcbn07XG5cblxuLypcbiAqIEdpdmVuIGEgYXJyYXkgb2Ygbm9kZXMsIHJldHVybiBhIG5ldyBhcnJheSB3aXRoIGFueSBjb250ZW50IGVsZW1lbnRzIGV4cGFuZGVkXG4gKiB0byB0aGUgbm9kZXMgZGlzdHJpYnV0ZWQgdG8gdGhhdCBjb250ZW50IGVsZW1lbnQuIFRoaXMgcnVsZSBpcyBhcHBsaWVkXG4gKiByZWN1cnNpdmVseS5cbiAqXG4gKiBJZiBpbmNsdWRlVGV4dE5vZGVzIGlzIHRydWUsIHRleHQgbm9kZXMgd2lsbCBiZSBpbmNsdWRlZCwgYXMgaW4gdGhlXG4gKiBzdGFuZGFyZCBjaGlsZE5vZGVzIHByb3BlcnR5OyBieSBkZWZhdWx0LCB0aGlzIHNraXBzIHRleHQgbm9kZXMsIGxpa2UgdGhlXG4gKiBzdGFuZGFyZCBjaGlsZHJlbiBwcm9wZXJ0eS5cbiAqL1xuZnVuY3Rpb24gZXhwYW5kQ29udGVudEVsZW1lbnRzKG5vZGVzLCBpbmNsdWRlVGV4dE5vZGVzKSB7XG4gIGNvbnN0IGV4cGFuZGVkID0gQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKG5vZGVzLCBub2RlID0+IHtcbiAgICAvLyBXZSB3YW50IHRvIHNlZSBpZiB0aGUgbm9kZSBpcyBhbiBpbnN0YW5jZW9mIEhUTUxTbG90RUxlbWVudCwgYnV0XG4gICAgLy8gdGhhdCBjbGFzcyB3b24ndCBleGlzdCBpZiB0aGUgYnJvd3NlciB0aGF0IGRvZXNuJ3Qgc3VwcG9ydCBuYXRpdmVcbiAgICAvLyBTaGFkb3cgRE9NIGFuZCBpZiB0aGUgU2hhZG93IERPTSBwb2x5ZmlsbCBoYXNuJ3QgYmVlbiBsb2FkZWQuIEluc3RlYWQsXG4gICAgLy8gd2UgZG8gYSBzaW1wbGlzdGljIGNoZWNrIHRvIHNlZSBpZiB0aGUgdGFnIG5hbWUgaXMgXCJzbG90XCIuXG4gICAgY29uc3QgaXNTbG90ID0gdHlwZW9mIEhUTUxTbG90RWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgP1xuICAgICAgbm9kZSBpbnN0YW5jZW9mIEhUTUxTbG90RWxlbWVudCA6XG4gICAgICBub2RlLmxvY2FsTmFtZSA9PT0gJ3Nsb3QnO1xuICAgIGlmIChpc1Nsb3QpIHtcbiAgICAgIC8vIFVzZSB0aGUgbm9kZXMgYXNzaWduZWQgdG8gdGhpcyBub2RlIGluc3RlYWQuXG4gICAgICBjb25zdCBhc3NpZ25lZE5vZGVzID0gbm9kZS5hc3NpZ25lZE5vZGVzKHsgZmxhdHRlbjogdHJ1ZSB9KTtcbiAgICAgIHJldHVybiBhc3NpZ25lZE5vZGVzID9cbiAgICAgICAgZXhwYW5kQ29udGVudEVsZW1lbnRzKGFzc2lnbmVkTm9kZXMsIGluY2x1ZGVUZXh0Tm9kZXMpIDpcbiAgICAgICAgW107XG4gICAgfSBlbHNlIGlmIChub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIC8vIFBsYWluIGVsZW1lbnQ7IHVzZSBhcyBpcy5cbiAgICAgIHJldHVybiBbbm9kZV07XG4gICAgfSBlbHNlIGlmIChub2RlIGluc3RhbmNlb2YgVGV4dCAmJiBpbmNsdWRlVGV4dE5vZGVzKSB7XG4gICAgICAvLyBUZXh0IG5vZGUuXG4gICAgICByZXR1cm4gW25vZGVdO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDb21tZW50LCBwcm9jZXNzaW5nIGluc3RydWN0aW9uLCBldGMuOyBza2lwLlxuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfSk7XG4gIGNvbnN0IGZsYXR0ZW5lZCA9IFtdLmNvbmNhdCguLi5leHBhbmRlZCk7XG4gIHJldHVybiBmbGF0dGVuZWQ7XG59XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4vY3JlYXRlU3ltYm9sJztcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3Qgc2VsZWN0ZWRGcmFjdGlvblN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnc2VsZWN0ZWRGcmFjdGlvbicpO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggRnJhY3Rpb25hbFNlbGVjdGlvbi4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1peGluKGJhc2UpIHtcblxuICAvKipcbiAgICogQWRkcyBzdXBwb3J0IGZvciBmcmFjdGlvbmFsIHNlbGVjdGlvbjogdHJlYXRpbmcgYSBzZWxlY3Rpb24gYXMgYSByZWFsXG4gICAqIG51bWJlciB0aGF0IGNvbWJpbmVzIGFuIGludGVnZXIgcG9ydGlvbiAoYW4gaW5kZXggaW50byBhIGxpc3QpLCBhbmQgYVxuICAgKiBmcmFjdGlvbiAoaW5kaWNhdGluZyBob3cgZmFyIG9mIHRoZSB3YXkgd2UgYXJlIHRvIHRoZSBuZXh0IG9yIHByZXZpb3VzXG4gICAqIGl0ZW0pLlxuICAgKlxuICAgKiBUaGlzIGlzIHVzZWZ1bCBpbiBjb21wb25lbnRzIHRoYXQgc3VwcG9ydCBpbmNyZW1lbnRhbCBvcGVyYXRpb25zIGR1cmluZ1xuICAgKiBkcmFnZ2luZyBhbmQgc3dpcGluZy4gRXhhbXBsZTogYSBjYXJvdXNlbCBjb21wb25lbnQgaGFzIHNldmVyYWwgaXRlbXMsIGFuZCB0aGVcbiAgICogY3VycmVudGx5IHNlbGVjdGVkIGl0ZW0gaXMgaXRlbSAzLiBUaGUgdXNlciBiZWdpbnMgc3dpcGluZyB0byB0aGUgbGVmdCxcbiAgICogbW92aW5nIHRvd2FyZHMgc2VsZWN0aW5nIGl0ZW0gNC4gSGFsZndheSB0aHJvdWdoIHRoaXMgb3BlcmF0aW9uLCB0aGVcbiAgICogZnJhY3Rpb25hbCBzZWxlY3Rpb24gdmFsdWUgaXMgMy41LlxuICAgKlxuICAgKiBUaGlzIHZhbHVlIHBlcm1pdHMgY29tbXVuaWNhdGlvbiBiZXR3ZWVuIG1peGlucyBsaWtlXG4gICAqIFtTd2lwZURpcmVjdGlvbk1peGluXSguL1N3aXBlRGlyZWN0aW9uTWl4aW4ubWQpIGFuZFxuICAgKiBbVHJhY2twYWREaXJlY3Rpb25NaXhpbl0oLi9UcmFja3BhZERpcmVjdGlvbk1peGluLm1kKSwgd2hpY2ggZ2VuZXJhdGVcbiAgICogZnJhY3Rpb25hbCBzZWxlY3Rpb24gdmFsdWVzLCBhbmQgbWl4aW5zIGxpa2VcbiAgICogW1NlbGVjdGlvbkFuaW1hdGlvbk1peGluXSguL1NlbGVjdGlvbkFuaW1hdGlvbk1peGluLm1kKSwgd2hpY2ggY2FuIHJlbmRlclxuICAgKiBzZWxlY3Rpb24gYXQgYSBmcmFjdGlvbmFsIHZhbHVlLlxuICAgKi9cbiAgY2xhc3MgRnJhY3Rpb25hbFNlbGVjdGlvbiBleHRlbmRzIGJhc2Uge1xuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2spIHsgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTsgfVxuICAgICAgdGhpcy5zZWxlY3RlZEZyYWN0aW9uID0gMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIGZyYWN0aW9uYWwgdmFsdWUgaW5kaWNhdGluZyBob3cgZmFyIHRoZSB1c2VyIGhhcyBjdXJyZW50bHkgYWR2YW5jZWQgdG9cbiAgICAgKiB0aGUgbmV4dC9wcmV2aW91cyBpdGVtLiBFLmcuLCBhIGBzZWxlY3RlZEZyYWN0aW9uYCBvZiAzLjUgaW5kaWNhdGVzIHRoZVxuICAgICAqIHVzZXIgaXMgaGFsZndheSBiZXR3ZWVuIGl0ZW1zIDMgYW5kIDQuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldCBzZWxlY3RlZEZyYWN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXNbc2VsZWN0ZWRGcmFjdGlvblN5bWJvbF07XG4gICAgfVxuICAgIHNldCBzZWxlY3RlZEZyYWN0aW9uKHZhbHVlKSB7XG4gICAgICB0aGlzW3NlbGVjdGVkRnJhY3Rpb25TeW1ib2xdID0gdmFsdWU7XG4gICAgICBpZiAoJ3NlbGVjdGVkRnJhY3Rpb24nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkRnJhY3Rpb24gPSB2YWx1ZTsgfVxuICAgICAgY29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3NlbGVjdGVkLWZyYWN0aW9uLWNoYW5nZWQnKTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gRnJhY3Rpb25hbFNlbGVjdGlvbjtcbn1cblxuXG5taXhpbi5oZWxwZXJzID0ge1xuXG4gIC8qXG4gICAqIERhbXBlbiBhIHNlbGVjdGlvbiB0aGF0IGdvZXMgcGFzdCB0aGUgYmVnaW5uaW5nIG9yIGVuZCBvZiBhIGxpc3QuIFRoaXMgaXNcbiAgICogZ2VuZXJhbGx5IHVzZWQgdG8gcHJvZHVjZSBhIHZpc3VhbCBlZmZlY3Qgb2YgdGVuc2lvbiBhcyB0aGUgdXNlciB0cmllcyB0b1xuICAgKiBnbyBmdXJ0aGVyIGluIGEgZGlyZWN0aW9uIHRoYXQgaGFzIG5vIG1vcmUgaXRlbXMuXG4gICAqXG4gICAqIEV4YW1wbGU6IHN1cHBvc2UgYGl0ZW1Db3VudGAgaXMgNSwgaW5kaWNhdGluZyBhIGxpc3Qgb2YgNSBpdGVtcy4gVGhlIGluZGV4IG9mXG4gICAqIHRoZSBsYXN0IGl0ZW0gaXMgNC4gSWYgdGhlIGBzZWxlY3Rpb25gIHBhcmFtZXRlciBpcyA0LjUsIHRoZSB1c2VyIGlzIHRyeWluZ1xuICAgKiB0byBnbyBwYXN0IHRoaXMgbGFzdCBpdGVtLiBXaGVuIGEgZGFtcGluZyBmdW5jdGlvbiBpcyBhcHBsaWVkLCB0aGUgcmVzdWx0aW5nXG4gICAqIHZhbHVlIHdpbGwgYmUgbGVzcyB0aGFuIDQuNSAodGhlIGFjdHVhbCB2YWx1ZSB3aWxsIGJlIDQuMjUpLiBXaGVuIHRoaXNcbiAgICogc2VsZWN0aW9uIHN0YXRlIGlzIHJlbmRlcmVkLCB0aGUgdXNlciB3aWxsIHNlZSB0aGF0LCBlYWNoIHVuaXQgZGlzdGFuY2UgdGhlXG4gICAqIGRyYWcgdHJhdmVscyBoYXMgbGVzcyBhbmQgbGVzcyB2aXNpYmxlIGVmZmVjdC4gVGhpcyBpcyBwZXJjZWl2ZWQgYXMgdGVuc2lvbi5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNlbGVjdGlvbiAtIEEgcmVhbCBudW1iZXIgaW5kaWNhdGluZyBhIHNlbGVjdGlvbiBwb3NpdGlvblxuICAgKiBAcGFyYW0ge251bWJlcn0gaXRlbUNvdW50IC0gQW4gaW50ZWdlciBmb3IgdGhlIG51bWJlciBvZiBpdGVtcyBpbiB0aGUgbGlzdFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBBIHJlYWwgbnVtYmVyIHJlcHJlc2VudGluZyB0aGUgZGFtcGVkIHNlbGVjdGlvbiB2YWx1ZS5cbiAgICovXG4gIGRhbXBlZFNlbGVjdGlvbihzZWxlY3Rpb24sIGl0ZW1Db3VudCkge1xuICAgIGNvbnN0IGJvdW5kID0gaXRlbUNvdW50IC0gMTtcbiAgICBsZXQgZGFtcGVkO1xuICAgIGlmIChzZWxlY3Rpb24gPCAwKSB7XG4gICAgICAvLyBUcnlpbmcgdG8gZ28gcGFzdCBiZWdpbm5pbmcgb2YgbGlzdC4gQXBwbHkgdGVuc2lvbiBmcm9tIHRoZSBsZWZ0IGVkZ2UuXG4gICAgICBkYW1wZWQgPSAtbWl4aW4uaGVscGVycy5kYW1waW5nKC1zZWxlY3Rpb24pO1xuICAgIH0gZWxzZSBpZiAoc2VsZWN0aW9uID49IGJvdW5kKSB7XG4gICAgICAvLyBUcnlpbmcgdG8gZ28gcGFzdCBlbmQgb2YgbGlzdC4gQXBwbHkgdGVuc2lvbiBmcm9tIHRoZSByaWdodCBlZGdlLlxuICAgICAgZGFtcGVkID0gYm91bmQgKyBtaXhpbi5oZWxwZXJzLmRhbXBpbmcoc2VsZWN0aW9uIC0gYm91bmQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBObyBkYW1waW5nIHJlcXVpcmVkLlxuICAgICAgZGFtcGVkID0gc2VsZWN0aW9uO1xuICAgIH1cbiAgICByZXR1cm4gZGFtcGVkO1xuICB9LFxuXG4gIC8qXG4gICAqIENhbGN1bGF0ZSBkYW1waW5nIGFzIGEgZnVuY3Rpb24gb2YgdGhlIGRpc3RhbmNlIHBhc3QgdGhlIG1pbmltdW0vbWF4aW11bVxuICAgKiB2YWx1ZXMuXG4gICAqXG4gICAqIFdlIHdhbnQgdG8gYXN5bXB0b3RpY2FsbHkgYXBwcm9hY2ggYW4gYWJzb2x1dGUgbWluaW11bSBvZiAxIHVuaXRcbiAgICogYmVsb3cvYWJvdmUgdGhlIGFjdHVhbCBtaW5pbXVtL21heGltdW0uIFRoaXMgcmVxdWlyZXMgY2FsY3VsYXRpbmcgYVxuICAgKiBoeXBlcmJvbGljIGZ1bmN0aW9uLlxuICAgKlxuICAgKiBTZWUgaHR0cDovL3d3dy53b2xmcmFtYWxwaGEuY29tL2lucHV0Lz9pPXkrJTNEKy0xJTJGJTI4eCUyQjElMjkrJTJCKzFcbiAgICogZm9yIHRoZSBvbmUgd2UgdXNlLiBUaGUgb25seSBwb3J0aW9uIG9mIHRoYXQgZnVuY3Rpb24gd2UgY2FyZSBhYm91dCBpcyB3aGVuXG4gICAqIHggaXMgemVybyBvciBncmVhdGVyLiBBbiBpbXBvcnRhbnQgY29uc2lkZXJhdGlvbiBpcyB0aGF0IHRoZSBjdXJ2ZSBiZVxuICAgKiB0YW5nZW50IHRvIHRoZSBkaWFnb25hbCBsaW5lIHg9eSBhdCAoMCwgMCkuIFRoaXMgZW5zdXJlcyBzbW9vdGggY29udGludWl0eVxuICAgKiB3aXRoIHRoZSBub3JtYWwgZHJhZyBiZWhhdmlvciwgaW4gd2hpY2ggdGhlIHZpc2libGUgc2xpZGluZyBpcyBsaW5lYXIgd2l0aFxuICAgKiB0aGUgZGlzdGFuY2UgdGhlIHRvdWNocG9pbnQgaGFzIGJlZW4gZHJhZ2dlZC5cbiAgICovXG4gIGRhbXBpbmcoeCkge1xuICAgIGNvbnN0IHkgPSAoLTEgLyAoeCArIDEpKSArIDE7XG4gICAgcmV0dXJuIHk7XG4gIH0sXG5cbiAgLypcbiAgICogUmV0dXJuIHRoZSBjdXJyZW50IGZyYWN0aW9uYWwgc2VsZWN0aW9uIHZhbHVlIGZvciB0aGUgZ2l2ZW4gZWxlbWVudC5cbiAgICpcbiAgICogVGhpcyBzaW1wbHkgYWRkcyB0aGUgZWxlbWVudCdzIGBzZWxlY3RlZEluZGV4YCBhbmQgYHNlbGVjdGVkRnJhY3Rpb25gXG4gICAqIHByb3BlcnRpZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBBbiBlbGVtZW50IHRoYXQgc3VwcG9ydHMgc2VsZWN0aW9uXG4gICAqL1xuICBlbGVtZW50U2VsZWN0aW9uKGVsZW1lbnQpIHtcbiAgICBjb25zdCBzZWxlY3RlZEluZGV4ID0gZWxlbWVudC5zZWxlY3RlZEluZGV4O1xuICAgIGlmIChzZWxlY3RlZEluZGV4IDwgMCkge1xuICAgICAgLy8gTm8gc2VsZWN0aW9uXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHNlbGVjdGVkRnJhY3Rpb24gPSBlbGVtZW50LnNlbGVjdGVkRnJhY3Rpb24gfHwgMDtcbiAgICByZXR1cm4gc2VsZWN0ZWRJbmRleCArIHNlbGVjdGVkRnJhY3Rpb247XG4gIH0sXG5cbiAgLypcbiAgICogQnJlYWtzIGEgZnJhY3Rpb25hbCBzZWxlY3Rpb24gaW50byBpdHMgaW50ZWdlciBhbmQgZnJhY3Rpb25hbCBwYXJ0cy5cbiAgICpcbiAgICogRXhhbXBsZTogaWYgcGFzc2VkIDMuNSwgdGhpcyByZXR1cm5zIHsgaW5kZXg6IDMsIGZyYWN0aW9uOiA1IH0uXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzZWxlY3Rpb24g4oCTwqBBIHJlYWwgbnVtYmVyIHJlcHJlc2VudGluZyBhIHNlbGVjdGlvbiBwb2ludFxuICAgKiBAcmV0dXJucyB7b2JqZWN0fSAtIEFuIG9iamVjdCB3aXRoIGFuIGBpbmRleGAgcHJvcGVydHkgaG9sZGluZyB0aGVcbiAgICogc2VsZWN0aW9uJ3MgaW50ZWdlciBjb21wb25lbnQsIGFuZCBhIGBmcmFjdGlvbmAgcHJvcGVydHkgaG9sZGluZyB0aGVcbiAgICogc2VsZWN0aW9uJ3MgZnJhY3Rpb25hbCBjb21wb25lbnQuXG4gICAqL1xuICBzZWxlY3Rpb25QYXJ0cyhzZWxlY3Rpb24pIHtcbiAgICAvLyBTdHVwaWQgSUUgZG9lc24ndCBoYXZlIE1hdGgudHJ1bmMuXG4gICAgLy8gY29uc3QgaW5kZXggPSBNYXRoLnRydW5jKHNlbGVjdGlvbik7XG4gICAgY29uc3QgaW5kZXggPSBzZWxlY3Rpb24gPCAwID8gTWF0aC5jZWlsKHNlbGVjdGlvbikgOiBNYXRoLmZsb29yKHNlbGVjdGlvbik7XG4gICAgY29uc3QgZnJhY3Rpb24gPSBzZWxlY3Rpb24gLSBpbmRleDtcbiAgICByZXR1cm4geyBpbmRleCwgZnJhY3Rpb24gfTtcbiAgfSxcblxuICAvKlxuICAgKiBSZXR1cm5zIGEgZnJhY3Rpb25hbCBzZWxlY3Rpb24gcG9pbnQgYWZ0ZXIgYWNjb3VudGluZyBmb3Igd3JhcHBpbmcsIGVuc3VyaW5nXG4gICAqIHRoYXQgdGhlIGludGVnZXIgcG9ydGlvbiBvZiB0aGUgc2VsZWN0aW9uIHN0YXlzIGJldHdlZW4gMCBhbmQgYGl0ZW1Db3VudGAtMS5cbiAgICogVGhhdCBpcywgdGhlIGludGVnZXIgcG9ydGlvbiB3aWxsIGFsd2F5cyBiZSBhIHZhbGlkIGluZGV4IGludG8gdGhlIGxpc3QuXG4gICAqXG4gICAqIEV4YW1wbGUgb2Ygd3JhcHBpbmcgcGFzdCB0aGUgZW5kIG9mIHRoZSBsaXN0OiBpZiBgc2VsZWN0aW9uYCBpcyA1LjUgYW5kXG4gICAqIGBpdGVtQ291bnRgIGlzIDUsIHRoaXMgcmV0dXJucyAwLjUuIEV4YW1wbGUgb2Ygd3JhcHBpbmcgcGFzdCB0aGUgYmVnaW5uaW5nIG9mXG4gICAqIHRoZSBsaXN0OiBpZiBgc2VsZWN0aW9uYCBpcyAwLjUgYW5kIGBpdGVtQ291bnRgIGlzIDUsIHRoaXMgcmV0dXJucyA0LjUuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzZWxlY3Rpb24gLSBBIHJlYWwgbnVtYmVyIHJlcHJlc2VudGluZyBhIHNlbGVjdGlvbiBwb2ludFxuICAgKiBAcGFyYW0ge251bWJlcn0gaXRlbUNvdW50IC0gVGhlIG51bWJlciBvZiBpdGVtcyBpbiB0aGUgbGlzdFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSAtIFRoZSByZXN1bHQgb2Ygd3JhcHBpbmcgdGhlIHNlbGVjdGlvbiBwb2ludFxuICAgKi9cbiAgd3JhcHBlZFNlbGVjdGlvbihzZWxlY3Rpb24sIGl0ZW1Db3VudCkge1xuICAgIC8vIEhhbmRsZXMgcG9zc2liaWxpdHkgb2YgbmVnYXRpdmUgbW9kLlxuICAgIC8vIFNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xODYxODI1MC83NjQ3MlxuICAgIHJldHVybiAoKHNlbGVjdGlvbiAlIGl0ZW1Db3VudCkgKyBpdGVtQ291bnQpICUgaXRlbUNvdW50O1xuICB9LFxuXG4gIC8qXG4gICAqIFJldHVybiB0aGUgcGFydHMgb2YgYSBzZWxlY3Rpb24sIGZpcnN0IHdyYXBwaW5nIGlmIG5lY2Vzc2FyeS5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNlbGVjdGlvbiDigJMgQSByZWFsIG51bWJlciByZXByZXNlbnRpbmcgYSBzZWxlY3Rpb24gcG9pbnRcbiAgICogQHBhcmFtIHtudW1iZXJ9IGl0ZW1Db3VudCAtIFRoZSBudW1iZXIgb2YgaXRlbXMgaW4gdGhlIGxpc3RcbiAgICogQHBhcmFtIHtib29sZWFufSB3cmFwIOKAkyBUcnVlIGlmIHRoZSBzZWxlY3Rpb24gc2hvdWxkIHdyYXAgdG8gc3RheSB3aXRoaW4gdGhlXG4gICAqIGxpc3RcbiAgICogQHJldHVybnMge29iamVjdH0g4oCTIFRoZSBwYXJ0cyBvZiB0aGUgc2VsZWN0aW9uLCB1c2luZyB0aGUgc2FtZSBmb3JtYXQgYXNcbiAgICogYHNlbGVjdGlvblBhcnRzYC5cbiAgICovXG4gIHdyYXBwZWRTZWxlY3Rpb25QYXJ0cyhzZWxlY3Rpb24sIGl0ZW1Db3VudCwgd3JhcCkge1xuICAgIGlmICh3cmFwKSB7XG4gICAgICBzZWxlY3Rpb24gPSBtaXhpbi5oZWxwZXJzLndyYXBwZWRTZWxlY3Rpb24oc2VsZWN0aW9uLCBpdGVtQ291bnQpO1xuICAgIH1cbiAgICByZXR1cm4gbWl4aW4uaGVscGVycy5zZWxlY3Rpb25QYXJ0cyhzZWxlY3Rpb24pO1xuICB9XG5cbn07XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4vY3JlYXRlU3ltYm9sJztcbmltcG9ydCBzYWZlQXR0cmlidXRlcyBmcm9tICcuL3NhZmVBdHRyaWJ1dGVzJztcbmltcG9ydCBzeW1ib2xzIGZyb20gJy4vc3ltYm9scyc7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IGdlbmVyaWNTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2dlbmVyaWMnKTtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIEdlbmVyaWMuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBhbGxvd3MgYSBjb21wb25lbnQgdG8gc3VwcG9ydCBhIFwiZ2VuZXJpY1wiIHN0eWxlOiBhIG1pbmltYWxpc3RcbiAgICogc3R5bGUgdGhhdCBjYW4gZWFzaWx5IGJlIHJlbW92ZWQgdG8gcmVzZXQgaXRzIHZpc3VhbCBhcHBlYXJhbmNlIHRvIGFcbiAgICogYmFzZWxpbmUgc3RhdGUuXG4gICAqXG4gICAqIEJ5IGRlZmF1bHQsIGEgY29tcG9uZW50IHNob3VsZCBwcm92aWRlIGEgbWluaW1hbCB2aXN1YWwgcHJlc2VudGF0aW9uIHRoYXRcbiAgICogYWxsb3dzIHRoZSBjb21wb25lbnQgdG8gZnVuY3Rpb24uIEhvd2V2ZXIsIHRoZSBtb3JlIHN0eWxpbmcgdGhlIGNvbXBvbmVudFxuICAgKiBwcm92aWRlcyBieSBkZWZhdWx0LCB0aGUgaGFyZGVyIGl0IGJlY29tZXMgdG8gZ2V0IHRoZSBjb21wb25lbnQgdG8gZml0IGluXG4gICAqIGluIG90aGVyIHNldHRpbmdzLiBFYWNoIENTUyBydWxlIGhhcyB0byBiZSBvdmVycmlkZGVuLiBXb3JzZSwgbmV3IENTUyBydWxlc1xuICAgKiBhZGRlZCB0byB0aGUgZGVmYXVsdCBzdHlsZSB3b24ndCBiZSBvdmVycmlkZGVuIGJ5IGRlZmF1bHQsIG1ha2luZyBpdCBoYXJkXG4gICAqIHRvIGtub3cgd2hldGhlciBhIG5ldyB2ZXJzaW9uIG9mIGEgY29tcG9uZW50IHdpbGwgc3RpbGwgbG9vayBva2F5LlxuICAgKlxuICAgKiBBcyBhIGNvbXByb21pc2UsIHRoZSBtaXhpbiBkZWZpbmVzIGEgYGdlbmVyaWNgIGF0dHJpYnV0ZS4gVGhpcyBhdHRyaWJ1dGUgaXNcbiAgICogbm9ybWFsbHkgc2V0IGJ5IGRlZmF1bHQsIGFuZCBzdHlsZXMgY2FuIGJlIHdyaXR0ZW4gdGhhdCBhcHBseSBvbmx5IHdoZW4gdGhlXG4gICAqIGdlbmVyaWMgYXR0cmlidXRlIGlzIHNldC4gVGhpcyBhbGxvd3MgdGhlIGNvbnN0cnVjdGlvbiBvZiBDU1MgcnVsZXMgdGhhdFxuICAgKiB3aWxsIG9ubHkgYXBwbHkgdG8gZ2VuZXJpYyBjb21wb25lbnRzIGxpa2U6XG4gICAqXG4gICAqICAgICA6aG9zdChbZ2VuZXJpYz1cIlwiXSkge1xuICAgKiAgICAgICAuLi4gZ2VuZXJpYyBhcHBlYXJhbmNlIGRlZmluZWQgaGVyZSAuLi5cbiAgICogICAgIH1cbiAgICpcbiAgICogVGhpcyBtYWtlcyBpdCBlYXN5IHRvIHJlbW92ZSBhbGwgZGVmYXVsdCBzdHlsaW5nIOKAlCBzZXQgdGhlIGBHZW5lcmljTWl4aW5gXG4gICAqIGF0dHJpYnV0ZSB0byBmYWxzZSwgYW5kIGFsbCBkZWZhdWx0IHN0eWxpbmcgd2lsbCBiZSByZW1vdmVkLlxuICAgKi9cbiAgY2xhc3MgR2VuZXJpYyBleHRlbmRzIGJhc2Uge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgLy8gU2V0IGRlZmF1bHRzLlxuICAgICAgaWYgKHR5cGVvZiB0aGlzLmdlbmVyaWMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuZ2VuZXJpYyA9IHRoaXNbc3ltYm9scy5kZWZhdWx0c10uZ2VuZXJpYztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUaGlzIG1peGluIGRvZXNuJ3QgYWN0dWFsbHkgcmVzcG9uZCB0byBhdHRyaWJ1dGUgY2hhbmdlcywgYnV0IHJlbGllc1xuICAgIC8vIG9uIHNlcGFyYXRlbHktZGVmaW5lZCBiZWhhdmlvciAoZS5nLiwgaW4gQXR0cmlidXRlTWFyc2hhbGxpbmdNaXhpbikgZm9yIHRoYXQuXG4gICAgLy8gU3RpbGwsIHdlIG5lZWQgZGVmaW5lIGEgYmFzZWxpbmUgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrIHRoYXQgZG9lc1xuICAgIC8vIG5vdGhpbmcsIGluIGNhc2UgdGhpcyBtaXhpbiBnZXRzIHVzZWQgb24gaXRzIG93bi5cbiAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG4gICAgICBpZiAoc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKSB7IHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpOyB9XG4gICAgfVxuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2spIHsgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTsgfVxuICAgICAgc2FmZUF0dHJpYnV0ZXMuY29ubmVjdGVkKHRoaXMpO1xuICAgIH1cblxuICAgIGdldCBbc3ltYm9scy5kZWZhdWx0c10oKSB7XG4gICAgICBjb25zdCBkZWZhdWx0cyA9IHN1cGVyW3N5bWJvbHMuZGVmYXVsdHNdIHx8IHt9O1xuICAgICAgZGVmYXVsdHMuZ2VuZXJpYyA9IHRydWU7XG4gICAgICByZXR1cm4gZGVmYXVsdHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiB0aGUgY29tcG9uZW50IHdvdWxkIGxpa2UgdG8gcmVjZWl2ZSBnZW5lcmljIHN0eWxpbmcuXG4gICAgICpcbiAgICAgKiBUaGlzIHByb3BlcnR5IGlzIHRydWUgYnkgZGVmYXVsdCDigJTCoHNldCBpdCB0byBmYWxzZSB0byB0dXJuIG9mZiBhbGxcbiAgICAgKiBnZW5lcmljIHN0eWxlcy4gVGhpcyBtYWtlcyBpdCBlYXNpZXIgdG8gYXBwbHkgY3VzdG9tIHN0eWxpbmc7IHlvdSB3b24ndFxuICAgICAqIGhhdmUgdG8gZXhwbGljaXRseSBvdmVycmlkZSBzdHlsaW5nIHlvdSBkb24ndCB3YW50LlxuICAgICAqXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKi9cbiAgICBnZXQgZ2VuZXJpYygpIHtcbiAgICAgIHJldHVybiB0aGlzW2dlbmVyaWNTeW1ib2xdO1xuICAgIH1cbiAgICBzZXQgZ2VuZXJpYyh2YWx1ZSkge1xuICAgICAgY29uc3QgcGFyc2VkID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/XG4gICAgICAgIFN0cmluZyh2YWx1ZSkgIT09ICdmYWxzZScgOlxuICAgICAgICB2YWx1ZTtcbiAgICAgIHRoaXNbZ2VuZXJpY1N5bWJvbF0gPSBwYXJzZWQ7XG5cbiAgICAgIGlmICgnZ2VuZXJpYycgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuZ2VuZXJpYyA9IHZhbHVlOyB9XG5cbiAgICAgIC8vIFdlIHJvbGwgb3VyIG93biBhdHRyaWJ1dGUgc2V0dGluZyBzbyB0aGF0IGFuIGV4cGxpY2l0bHkgZmFsc2UgdmFsdWVcbiAgICAgIC8vIHNob3dzIHVwIGFzIEdlbmVyaWNNaXhpbj1cImZhbHNlXCIuXG4gICAgICBpZiAocGFyc2VkID09PSBmYWxzZSkge1xuICAgICAgICAvLyBFeHBsaWNpdGx5IHVzZSBmYWxzZSBzdHJpbmcuXG4gICAgICAgIHNhZmVBdHRyaWJ1dGVzLnNldEF0dHJpYnV0ZSh0aGlzLCAnZ2VuZXJpYycsICdmYWxzZScpO1xuICAgICAgfSBlbHNlIGlmIChwYXJzZWQgPT0gbnVsbCkge1xuICAgICAgICAvLyBFeHBsaWNpdGx5IHJlbW92ZSBhdHRyaWJ1dGUuIChBbHdheXMgc2FmZSB0byBkbyB0aGlzLilcbiAgICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ2dlbmVyaWMnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFVzZSB0aGUgZW1wdHkgc3RyaW5nIHRvIGdldCBhdHRyaWJ1dGUgdG8gYXBwZWFyIHdpdGggbm8gdmFsdWUuXG4gICAgICAgIHNhZmVBdHRyaWJ1dGVzLnNldEF0dHJpYnV0ZSh0aGlzLCAnZ2VuZXJpYycsICcnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBHZW5lcmljO1xufTtcblxuXG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4vY3JlYXRlU3ltYm9sJztcbmltcG9ydCBzeW1ib2xzIGZyb20gJy4vc3ltYm9scyc7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IG5hdmlnYXRpb25BeGlzU3ltYm9sID0gY3JlYXRlU3ltYm9sKCduYXZpZ2F0aW9uQXhpcycpO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggS2V5Ym9hcmREaXJlY3Rpb24uICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBtYXBzIGRpcmVjdGlvbiBrZXlzIChMZWZ0LCBSaWdodCwgZXRjLikgdG8gZGlyZWN0aW9uIHNlbWFudGljc1xuICAgKiAoZ28gbGVmdCwgZ28gcmlnaHQsIGV0Yy4pLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGV4cGVjdHMgdGhlIGNvbXBvbmVudCB0byBpbnZva2UgYSBga2V5ZG93bmAgbWV0aG9kIHdoZW4gYSBrZXkgaXNcbiAgICogcHJlc3NlZC4gWW91IGNhbiB1c2UgW0tleWJvYXJkTWl4aW5dKEtleWJvYXJkTWl4aW4ubWQpIGZvciB0aGF0XG4gICAqIHB1cnBvc2UsIG9yIHdpcmUgdXAgeW91ciBvd24ga2V5Ym9hcmQgaGFuZGxpbmcgYW5kIGNhbGwgYGtleWRvd25gIHlvdXJzZWxmLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGNhbGxzIG1ldGhvZHMgc3VjaCBhcyBgZ29MZWZ0YCBhbmQgYGdvUmlnaHRgLiBZb3UgY2FuIGRlZmluZVxuICAgKiB3aGF0IHRoYXQgbWVhbnMgYnkgaW1wbGVtZW50aW5nIHRob3NlIG1ldGhvZHMgeW91cnNlbGYuIElmIHlvdSB3YW50IHRvIHVzZVxuICAgKiBkaXJlY3Rpb24ga2V5cyB0byBuYXZpZ2F0ZSBhIHNlbGVjdGlvbiwgdXNlIHRoaXMgbWl4aW4gd2l0aFxuICAgKiBbRGlyZWN0aW9uU2VsZWN0aW9uTWl4aW5dKERpcmVjdGlvblNlbGVjdGlvbk1peGluLm1kKS5cbiAgICovXG4gIGNsYXNzIEtleWJvYXJkRGlyZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICAvLyBTZXQgZGVmYXVsdHMuXG4gICAgICBpZiAodHlwZW9mIHRoaXMubmF2aWdhdGlvbkF4aXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMubmF2aWdhdGlvbkF4aXMgPSB0aGlzW3N5bWJvbHMuZGVmYXVsdHNdLm5hdmlnYXRpb25BeGlzO1xuICAgICAgfVxuICAgIH1cblxuICAgIGdldCBbc3ltYm9scy5kZWZhdWx0c10oKSB7XG4gICAgICBjb25zdCBkZWZhdWx0cyA9IHN1cGVyW3N5bWJvbHMuZGVmYXVsdHNdIHx8IHt9O1xuICAgICAgZGVmYXVsdHMubmF2aWdhdGlvbkF4aXMgPSAnYm90aCc7XG4gICAgICByZXR1cm4gZGVmYXVsdHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIGRvd24uXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLlxuICAgICAqL1xuICAgIFtzeW1ib2xzLmdvRG93bl0oKSB7XG4gICAgICBpZiAoc3VwZXJbc3ltYm9scy5nb0Rvd25dKSB7IHJldHVybiBzdXBlcltzeW1ib2xzLmdvRG93bl0oKTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSB0byB0aGUgZW5kIChlLmcuLCBvZiBhIGxpc3QpLlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy5cbiAgICAgKi9cbiAgICBbc3ltYm9scy5nb0VuZF0oKSB7XG4gICAgICBpZiAoc3VwZXJbc3ltYm9scy5nb0VuZF0pIHsgcmV0dXJuIHN1cGVyW3N5bWJvbHMuZ29FbmRdKCk7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgbGVmdC5cbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuXG4gICAgICovXG4gICAgW3N5bWJvbHMuZ29MZWZ0XSgpIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLmdvTGVmdF0pIHsgcmV0dXJuIHN1cGVyW3N5bWJvbHMuZ29MZWZ0XSgpOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIHJpZ2h0LlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy5cbiAgICAgKi9cbiAgICBbc3ltYm9scy5nb1JpZ2h0XSgpIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLmdvUmlnaHRdKSB7IHJldHVybiBzdXBlcltzeW1ib2xzLmdvUmlnaHRdKCk7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgdG8gdGhlIHN0YXJ0IChlLmcuLCBvZiBhXG4gICAgICogbGlzdCkuIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy5cbiAgICAgKi9cbiAgICBbc3ltYm9scy5nb1N0YXJ0XSgpIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLmdvU3RhcnRdKSB7IHJldHVybiBzdXBlcltzeW1ib2xzLmdvU3RhcnRdKCk7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgdXAuXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLlxuICAgICAqL1xuICAgIFtzeW1ib2xzLmdvVXBdKCkge1xuICAgICAgaWYgKHN1cGVyW3N5bWJvbHMuZ29VcF0pIHsgcmV0dXJuIHN1cGVyW3N5bWJvbHMuZ29VcF0oKTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB0aGUgZGlyZWN0aW9uIG9mIHBlcm1pdHRlZCBuYXZpZ2F0aW9uIHdpdGggdGhlIGtleWJvYXJkLlxuICAgICAqXG4gICAgICogQWNjZXB0ZWQgdmFsdWVzIGFyZSBcImhvcml6b250YWxcIiwgXCJ2ZXJ0aWNhbFwiLCBvciBcImJvdGhcIiAodGhlIGRlZmF1bHQpLlxuICAgICAqIElmIHRoaXMgcHJvcGVydHkgaXMgXCJob3Jpem9udGFsXCIsIHRoZSBVcCBBcnJvdyBhbmQgRG93biBBcnJvdyBrZXlzIHdpbGxcbiAgICAgKiBiZSBpZ25vcmVkLiBDb252ZXJzZWx5LCBpZiB0aGlzIGlzIFwidmVydGljYWxcIiwgdGhlIExlZnQgQXJyb3cgYW5kIFJpZ2h0XG4gICAgICogQXJyb3cga2V5cyB3aWxsIGJlIGlnbm9yZWQuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldCBuYXZpZ2F0aW9uQXhpcygpIHtcbiAgICAgIHJldHVybiB0aGlzW25hdmlnYXRpb25BeGlzU3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IG5hdmlnYXRpb25BeGlzKHZhbHVlKSB7XG4gICAgICB0aGlzW25hdmlnYXRpb25BeGlzU3ltYm9sXSA9IHZhbHVlO1xuICAgICAgaWYgKCduYXZpZ2F0aW9uQXhpcycgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIubmF2aWdhdGlvbkF4aXMgPSB2YWx1ZTsgfVxuICAgIH1cblxuICAgIFtzeW1ib2xzLmtleWRvd25dKGV2ZW50KSB7XG4gICAgICBsZXQgaGFuZGxlZDtcblxuICAgICAgY29uc3QgYXhpcyA9IHRoaXMubmF2aWdhdGlvbkF4aXM7XG4gICAgICBjb25zdCBob3Jpem9udGFsID0gKGF4aXMgPT09ICdob3Jpem9udGFsJyB8fCBheGlzID09PSAnYm90aCcpO1xuICAgICAgY29uc3QgdmVydGljYWwgPSAoYXhpcyA9PT0gJ3ZlcnRpY2FsJyB8fCBheGlzID09PSAnYm90aCcpO1xuXG4gICAgICAvLyBJZ25vcmUgTGVmdC9SaWdodCBrZXlzIHdoZW4gbWV0YUtleSBvciBhbHRLZXkgbW9kaWZpZXIgaXMgYWxzbyBwcmVzc2VkLFxuICAgICAgLy8gYXMgdGhlIHVzZXIgbWF5IGJlIHRyeWluZyB0byBuYXZpZ2F0ZSBiYWNrIG9yIGZvcndhcmQgaW4gdGhlIGJyb3dzZXIuXG4gICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgY2FzZSAzNTogLy8gRW5kXG4gICAgICAgICAgaGFuZGxlZCA9IHRoaXNbc3ltYm9scy5nb0VuZF0oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzNjogLy8gSG9tZVxuICAgICAgICAgIGhhbmRsZWQgPSB0aGlzW3N5bWJvbHMuZ29TdGFydF0oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzNzogLy8gTGVmdFxuICAgICAgICAgIGlmIChob3Jpem9udGFsICYmICFldmVudC5tZXRhS2V5ICYmICFldmVudC5hbHRLZXkpIHtcbiAgICAgICAgICAgIGhhbmRsZWQgPSB0aGlzW3N5bWJvbHMuZ29MZWZ0XSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzODogLy8gVXBcbiAgICAgICAgICBpZiAodmVydGljYWwpIHtcbiAgICAgICAgICAgIGhhbmRsZWQgPSBldmVudC5hbHRLZXkgPyB0aGlzW3N5bWJvbHMuZ29TdGFydF0oKSA6IHRoaXNbc3ltYm9scy5nb1VwXSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOTogLy8gUmlnaHRcbiAgICAgICAgICBpZiAoaG9yaXpvbnRhbCAmJiAhZXZlbnQubWV0YUtleSAmJiAhZXZlbnQuYWx0S2V5KSB7XG4gICAgICAgICAgICBoYW5kbGVkID0gdGhpc1tzeW1ib2xzLmdvUmlnaHRdKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQwOiAvLyBEb3duXG4gICAgICAgICAgaWYgKHZlcnRpY2FsKSB7XG4gICAgICAgICAgICBoYW5kbGVkID0gZXZlbnQuYWx0S2V5ID8gdGhpc1tzeW1ib2xzLmdvRW5kXSgpIDogdGhpc1tzeW1ib2xzLmdvRG93bl0oKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICAvLyBQcmVmZXIgbWl4aW4gcmVzdWx0IGlmIGl0J3MgZGVmaW5lZCwgb3RoZXJ3aXNlIHVzZSBiYXNlIHJlc3VsdC5cbiAgICAgIHJldHVybiBoYW5kbGVkIHx8IChzdXBlcltzeW1ib2xzLmtleWRvd25dICYmIHN1cGVyW3N5bWJvbHMua2V5ZG93bl0oZXZlbnQpKTtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBLZXlib2FyZERpcmVjdGlvbjtcbn07XG4iLCJpbXBvcnQgc3ltYm9scyBmcm9tICcuL3N5bWJvbHMnO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggS2V5Ym9hcmQuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBtYW5hZ2VzIHRoZSBrZXlkb3duIGhhbmRsaW5nIGZvciBhIGNvbXBvbmVudC5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBoYW5kbGVzIHNldmVyYWwga2V5Ym9hcmQtcmVsYXRlZCBmZWF0dXJlcy5cbiAgICpcbiAgICogRmlyc3QsIGl0IHdpcmVzIHVwIGEgc2luZ2xlIGtleWRvd24gZXZlbnQgaGFuZGxlciB0aGF0IGNhbiBiZSBzaGFyZWQgYnlcbiAgICogbXVsdGlwbGUgbWl4aW5zIG9uIGEgY29tcG9uZW50LiBUaGUgZXZlbnQgaGFuZGxlciB3aWxsIGludm9rZSBhIGBrZXlkb3duYFxuICAgKiBtZXRob2Qgd2l0aCB0aGUgZXZlbnQgb2JqZWN0LCBhbmQgYW55IG1peGluIGFsb25nIHRoZSBwcm90b3R5cGUgY2hhaW4gdGhhdFxuICAgKiB3YW50cyB0byBoYW5kbGUgdGhhdCBtZXRob2QgY2FuIGRvIHNvLlxuICAgKlxuICAgKiBJZiBhIG1peGluIHdhbnRzIHRvIGluZGljYXRlIHRoYXQga2V5Ym9hcmQgZXZlbnQgaGFzIGJlZW4gaGFuZGxlZCwgYW5kIHRoYXRcbiAgICogb3RoZXIgbWl4aW5zIHNob3VsZCAqbm90KiBoYW5kbGUgaXQsIHRoZSBtaXhpbidzIGBrZXlkb3duYCBoYW5kbGVyIHNob3VsZFxuICAgKiByZXR1cm4gYSB2YWx1ZSBvZiB0cnVlLiBUaGUgY29udmVudGlvbiB0aGF0IHNlZW1zIHRvIHdvcmsgd2VsbCBpcyB0aGF0IGFcbiAgICogbWl4aW4gc2hvdWxkIHNlZSBpZiBpdCB3YW50cyB0byBoYW5kbGUgdGhlIGV2ZW50IGFuZCwgaWYgbm90LCB0aGVuIGFzayB0aGVcbiAgICogc3VwZXJjbGFzcyB0byBzZWUgaWYgaXQgd2FudHMgdG8gaGFuZGxlIHRoZSBldmVudC4gVGhpcyBoYXMgdGhlIGVmZmVjdCBvZlxuICAgKiBnaXZpbmcgdGhlIG1peGluIHRoYXQgd2FzIGFwcGxpZWQgbGFzdCB0aGUgZmlyc3QgY2hhbmNlIGF0IGhhbmRsaW5nIGFcbiAgICoga2V5Ym9hcmQgZXZlbnQuXG4gICAqXG4gICAqIEV4YW1wbGU6XG4gICAqXG4gICAqICAgICBbc3ltYm9scy5rZXlkb3duXShldmVudCkge1xuICAgKiAgICAgICBsZXQgaGFuZGxlZDtcbiAgICogICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAqICAgICAgICAgLy8gSGFuZGxlIHRoZSBrZXlzIHlvdSB3YW50LCBzZXR0aW5nIGhhbmRsZWQgPSB0cnVlIGlmIGFwcHJvcHJpYXRlLlxuICAgKiAgICAgICB9XG4gICAqICAgICAgIC8vIFByZWZlciBtaXhpbiByZXN1bHQgaWYgaXQncyBkZWZpbmVkLCBvdGhlcndpc2UgdXNlIGJhc2UgcmVzdWx0LlxuICAgKiAgICAgICByZXR1cm4gaGFuZGxlZCB8fCAoc3VwZXJbc3ltYm9scy5rZXlkb3duXSAmJiBzdXBlcltzeW1ib2xzLmtleWRvd25dKGV2ZW50KSk7XG4gICAqICAgICB9XG4gICAqXG4gICAqIEEgc2Vjb25kIGZlYXR1cmUgcHJvdmlkZWQgYnkgdGhpcyBtaXhpbiBpcyB0aGF0IGl0IGltcGxpY2l0bHkgbWFrZXMgdGhlXG4gICAqIGNvbXBvbmVudCBhIHRhYiBzdG9wIGlmIGl0IGlzbid0IGFscmVhZHksIGJ5IHNldHRpbmcgYHRhYkluZGV4YCB0byAwLiBUaGlzXG4gICAqIGhhcyB0aGUgZWZmZWN0IG9mIGFkZGluZyB0aGUgY29tcG9uZW50IHRvIHRoZSB0YWIgb3JkZXIgaW4gZG9jdW1lbnQgb3JkZXIuXG4gICAqL1xuICBjbGFzcyBLZXlib2FyZCBleHRlbmRzIGJhc2Uge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZXZlbnQgPT4ge1xuICAgICAgICBjb25zdCBoYW5kbGVkID0gdGhpc1tzeW1ib2xzLmtleWRvd25dKGV2ZW50KTtcbiAgICAgICAgaWYgKGhhbmRsZWQpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jb25uZWN0ZWRDYWxsYmFjaykgeyBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpOyB9XG4gICAgICBpZiAodGhpcy5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JykgPT0gbnVsbCAmJiB0aGlzW3N5bWJvbHMuZGVmYXVsdHNdLnRhYmluZGV4ICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIHRoaXNbc3ltYm9scy5kZWZhdWx0c10udGFiaW5kZXgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGdldCBbc3ltYm9scy5kZWZhdWx0c10oKSB7XG4gICAgICBjb25zdCBkZWZhdWx0cyA9IHN1cGVyW3N5bWJvbHMuZGVmYXVsdHNdIHx8IHt9O1xuICAgICAgLy8gVGhlIGRlZmF1bHQgdGFiIGluZGV4IGlzIDAgKGRvY3VtZW50IG9yZGVyKS5cbiAgICAgIGRlZmF1bHRzLnRhYmluZGV4ID0gMDtcbiAgICAgIHJldHVybiBkZWZhdWx0cztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgdGhlIGluZGljYXRlZCBrZXlib2FyZCBldmVudC5cbiAgICAgKlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy4gVGhpcyB3aWxsXG4gICAgICogdHlwaWNhbGx5IGJlIGhhbmRsZWQgYnkgb3RoZXIgbWl4aW5zLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBldmVudCAtIHRoZSBrZXlib2FyZCBldmVudFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhlIGV2ZW50IHdhcyBoYW5kbGVkXG4gICAgICovXG4gICAgW3N5bWJvbHMua2V5ZG93bl0oZXZlbnQpIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLmtleWRvd25dKSB7IHJldHVybiBzdXBlcltzeW1ib2xzLmtleWRvd25dKGV2ZW50KTsgfVxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIEtleWJvYXJkO1xufTtcbiIsImltcG9ydCBzeW1ib2xzIGZyb20gJy4vc3ltYm9scyc7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBLZXlib2FyZFBhZ2VkU2VsZWN0aW9uLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggbWFwcyBwYWdlIGtleXMgKFBhZ2UgVXAsIFBhZ2UgRG93bikgaW50byBvcGVyYXRpb25zIHRoYXQgbW92ZVxuICAgKiB0aGUgc2VsZWN0aW9uIGJ5IG9uZSBwYWdlLlxuICAgKlxuICAgKiBUaGUga2V5Ym9hcmQgaW50ZXJhY3Rpb24gbW9kZWwgZ2VuZXJhbGx5IGZvbGxvd3MgdGhhdCBvZiBNaWNyb3NvZnQgV2luZG93cydcbiAgICogbGlzdCBib3hlcyBpbnN0ZWFkIG9mIHRob3NlIGluIE9TIFg6XG4gICAqXG4gICAqICogVGhlIFBhZ2UgVXAvRG93biBhbmQgSG9tZS9FbmQga2V5cyBhY3R1YWxseSBjaGFuZ2UgdGhlIHNlbGVjdGlvbiwgcmF0aGVyXG4gICAqICAgdGhhbiBqdXN0IHNjcm9sbGluZy4gVGhlIGZvcm1lciBiZWhhdmlvciBzZWVtcyBtb3JlIGdlbmVyYWxseSB1c2VmdWwgZm9yXG4gICAqICAga2V5Ym9hcmQgdXNlcnMuXG4gICAqXG4gICAqICogUHJlc3NpbmcgUGFnZSBVcC9Eb3duIHdpbGwgY2hhbmdlIHRoZSBzZWxlY3Rpb24gdG8gdGhlIHRvcG1vc3QvYm90dG9tbW9zdFxuICAgKiAgIHZpc2libGUgaXRlbSBpZiB0aGUgc2VsZWN0aW9uIGlzIG5vdCBhbHJlYWR5IHRoZXJlLiBUaGVyZWFmdGVyLCB0aGUga2V5XG4gICAqICAgd2lsbCBtb3ZlIHRoZSBzZWxlY3Rpb24gdXAvZG93biBieSBhIHBhZ2UsIGFuZCAocGVyIHRoZSBhYm92ZSBwb2ludCkgbWFrZVxuICAgKiAgIHRoZSBzZWxlY3RlZCBpdGVtIHZpc2libGUuXG4gICAqXG4gICAqIFRvIGVuc3VyZSB0aGUgc2VsZWN0ZWQgaXRlbSBpcyBpbiB2aWV3IGZvbGxvd2luZyB1c2Ugb2YgUGFnZSBVcC9Eb3duLCB1c2VcbiAgICogdGhlIHJlbGF0ZWQgW1NlbGVjdGlvbkluVmlld01peGluXShTZWxlY3Rpb25JblZpZXdNaXhpbi5tZCkuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyB0aGUgY29tcG9uZW50IHRvIGludm9rZSBhIGBrZXlkb3duYCBtZXRob2Qgd2hlbiBhIGtleSBpc1xuICAgKiBwcmVzc2VkLiBZb3UgY2FuIHVzZSBbS2V5Ym9hcmRNaXhpbl0oS2V5Ym9hcmRNaXhpbi5tZCkgZm9yIHRoYXRcbiAgICogcHVycG9zZSwgb3Igd2lyZSB1cCB5b3VyIG93biBrZXlib2FyZCBoYW5kbGluZyBhbmQgY2FsbCBga2V5ZG93bmAgeW91cnNlbGYuXG4gICAqL1xuICBjbGFzcyBLZXlib2FyZFBhZ2VkU2VsZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBbc3ltYm9scy5rZXlkb3duXShldmVudCkge1xuICAgICAgbGV0IGhhbmRsZWQ7XG4gICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgY2FzZSAzMzogLy8gUGFnZSBVcFxuICAgICAgICAgIGhhbmRsZWQgPSB0aGlzLnBhZ2VVcCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM0OiAvLyBQYWdlIERvd25cbiAgICAgICAgICBoYW5kbGVkID0gdGhpcy5wYWdlRG93bigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgLy8gUHJlZmVyIG1peGluIHJlc3VsdCBpZiBpdCdzIGRlZmluZWQsIG90aGVyd2lzZSB1c2UgYmFzZSByZXN1bHQuXG4gICAgICByZXR1cm4gaGFuZGxlZCB8fCAoc3VwZXJbc3ltYm9scy5rZXlkb3duXSAmJiBzdXBlcltzeW1ib2xzLmtleWRvd25dKGV2ZW50KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2Nyb2xsIGRvd24gb25lIHBhZ2UuXG4gICAgICovXG4gICAgcGFnZURvd24oKSB7XG4gICAgICBpZiAoc3VwZXIucGFnZURvd24pIHsgc3VwZXIucGFnZURvd24oKTsgfVxuICAgICAgcmV0dXJuIHNjcm9sbE9uZVBhZ2UodGhpcywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2Nyb2xsIHVwIG9uZSBwYWdlLlxuICAgICAqL1xuICAgIHBhZ2VVcCgpIHtcbiAgICAgIGlmIChzdXBlci5wYWdlVXApIHsgc3VwZXIucGFnZVVwKCk7IH1cbiAgICAgIHJldHVybiBzY3JvbGxPbmVQYWdlKHRoaXMsIGZhbHNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZWxlbWVudCB0aGF0IHNob3VsZCBiZSBzY3JvbGxlZCB3aXRoIHRoZSBQYWdlIFVwL0Rvd24ga2V5cy5cbiAgICAgKiBEZWZhdWx0IGlzIHRoZSBjdXJyZW50IGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgZ2V0IHNjcm9sbFRhcmdldCgpIHtcbiAgICAgIC8vIFByZWZlciBiYXNlIHJlc3VsdC5cbiAgICAgIHJldHVybiAnc2Nyb2xsVGFyZ2V0JyBpbiBiYXNlLnByb3RvdHlwZSA/IHN1cGVyLnNjcm9sbFRhcmdldCA6IHRoaXM7XG4gICAgfVxuICAgIHNldCBzY3JvbGxUYXJnZXQoZWxlbWVudCkge1xuICAgICAgaWYgKCdzY3JvbGxUYXJnZXQnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNjcm9sbFRhcmdldCA9IGVsZW1lbnQ7IH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gS2V5Ym9hcmRQYWdlZFNlbGVjdGlvbjtcbn07XG5cblxuLy8gUmV0dXJuIHRoZSBpdGVtIHdob3NlIGNvbnRlbnQgc3BhbnMgdGhlIGdpdmVuIHkgcG9zaXRpb24gKHJlbGF0aXZlIHRvIHRoZVxuLy8gdG9wIG9mIHRoZSBsaXN0J3Mgc2Nyb2xsaW5nIGNsaWVudCBhcmVhKSwgb3IgbnVsbCBpZiBub3QgZm91bmQuXG4vL1xuLy8gSWYgZG93bndhcmQgaXMgdHJ1ZSwgbW92ZSBkb3duIHRoZSBsaXN0IG9mIGl0ZW1zIHRvIGZpbmQgdGhlIGZpcnN0IGl0ZW1cbi8vIGZvdW5kIGF0IHRoZSBnaXZlbiB5IHBvc2l0aW9uOyBpZiBkb3dud2FyZCBpcyBmYWxzZSwgbW92ZSB1cCB0aGUgbGlzdCBvZlxuLy8gaXRlbXMgdG8gZmluZCB0aGUgbGFzdCBpdGVtIGF0IHRoYXQgcG9zaXRpb24uXG5mdW5jdGlvbiBnZXRJbmRleE9mSXRlbUF0WShlbGVtZW50LCB5LCBkb3dud2FyZCkge1xuICBjb25zdCBpdGVtcyA9IGVsZW1lbnQuaXRlbXM7XG4gIGNvbnN0IHN0YXJ0ID0gZG93bndhcmQgPyAwIDogaXRlbXMubGVuZ3RoIC0gMTtcbiAgY29uc3QgZW5kID0gZG93bndhcmQgPyBpdGVtcy5sZW5ndGggOiAwO1xuICBjb25zdCBzdGVwID0gZG93bndhcmQgPyAxIDogLTE7XG4gIGNvbnN0IHNjcm9sbFRhcmdldCA9IGVsZW1lbnQuc2Nyb2xsVGFyZ2V0O1xuICBjb25zdCB0b3BPZkNsaWVudEFyZWEgPSBzY3JvbGxUYXJnZXQub2Zmc2V0VG9wICsgc2Nyb2xsVGFyZ2V0LmNsaWVudFRvcDtcblxuICAvLyBGaW5kIHRoZSBpdGVtIHNwYW5uaW5nIHRoZSBpbmRpY2F0ZWQgeSBjb29yZGluYXRlLlxuICBsZXQgaXRlbTtcbiAgbGV0IGl0ZW1JbmRleCA9IHN0YXJ0O1xuICBsZXQgaXRlbVRvcDtcbiAgbGV0IGZvdW5kID0gZmFsc2U7XG4gIHdoaWxlIChpdGVtSW5kZXggIT09IGVuZCkge1xuICAgIGl0ZW0gPSBpdGVtc1tpdGVtSW5kZXhdO1xuICAgIGl0ZW1Ub3AgPSBpdGVtLm9mZnNldFRvcCAtIHRvcE9mQ2xpZW50QXJlYTtcbiAgICBjb25zdCBpdGVtQm90dG9tID0gaXRlbVRvcCArIGl0ZW0ub2Zmc2V0SGVpZ2h0O1xuICAgIGlmIChpdGVtVG9wIDw9IHkgJiYgaXRlbUJvdHRvbSA+PSB5KSB7XG4gICAgICAvLyBJdGVtIHNwYW5zIHRoZSBpbmRpY2F0ZWQgeSBjb29yZGluYXRlLlxuICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGl0ZW1JbmRleCArPSBzdGVwO1xuICB9XG5cbiAgaWYgKCFmb3VuZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLy8gV2UgbWF5IGhhdmUgZm91bmQgYW4gaXRlbSB3aG9zZSBwYWRkaW5nIHNwYW5zIHRoZSBnaXZlbiB5IGNvb3JkaW5hdGUsXG4gIC8vIGJ1dCB3aG9zZSBjb250ZW50IGlzIGFjdHVhbGx5IGFib3ZlL2JlbG93IHRoYXQgcG9pbnQuXG4gIC8vIFRPRE86IElmIHRoZSBpdGVtIGhhcyBhIGJvcmRlciwgdGhlbiBwYWRkaW5nIHNob3VsZCBiZSBpbmNsdWRlZCBpblxuICAvLyBjb25zaWRlcmluZyBhIGhpdC5cbiAgY29uc3QgaXRlbVN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShpdGVtKTtcbiAgY29uc3QgaXRlbVBhZGRpbmdUb3AgPSBwYXJzZUZsb2F0KGl0ZW1TdHlsZS5wYWRkaW5nVG9wKTtcbiAgY29uc3QgaXRlbVBhZGRpbmdCb3R0b20gPSBwYXJzZUZsb2F0KGl0ZW1TdHlsZS5wYWRkaW5nQm90dG9tKTtcbiAgY29uc3QgY29udGVudFRvcCA9IGl0ZW1Ub3AgKyBpdGVtLmNsaWVudFRvcCArIGl0ZW1QYWRkaW5nVG9wO1xuICBjb25zdCBjb250ZW50Qm90dG9tID0gY29udGVudFRvcCArIGl0ZW0uY2xpZW50SGVpZ2h0IC0gaXRlbVBhZGRpbmdUb3AgLSBpdGVtUGFkZGluZ0JvdHRvbTtcbiAgaWYgKGRvd253YXJkICYmIGNvbnRlbnRUb3AgPD0geSB8fCAhZG93bndhcmQgJiYgY29udGVudEJvdHRvbSA+PSB5KSB7XG4gICAgLy8gVGhlIGluZGljYXRlZCBjb29yZGluYXRlIGhpdHMgdGhlIGFjdHVhbCBpdGVtIGNvbnRlbnQuXG4gICAgcmV0dXJuIGl0ZW1JbmRleDtcbiAgfVxuICBlbHNlIHtcbiAgICAvLyBUaGUgaW5kaWNhdGVkIGNvb3JkaW5hdGUgZmFsbHMgd2l0aGluIHRoZSBpdGVtJ3MgcGFkZGluZy4gQmFjayB1cCB0b1xuICAgIC8vIHRoZSBpdGVtIGJlbG93L2Fib3ZlIHRoZSBpdGVtIHdlIGZvdW5kIGFuZCByZXR1cm4gdGhhdC5cbiAgICByZXR1cm4gaXRlbUluZGV4IC0gc3RlcDtcbiAgfVxufVxuXG4vLyBNb3ZlIGJ5IG9uZSBwYWdlIGRvd253YXJkIChpZiBkb3dud2FyZCBpcyB0cnVlKSwgb3IgdXB3YXJkIChpZiBmYWxzZSkuXG4vLyBSZXR1cm4gdHJ1ZSBpZiB3ZSBlbmRlZCB1cCBjaGFuZ2luZyB0aGUgc2VsZWN0aW9uLCBmYWxzZSBpZiBub3QuXG4vLyBUT0RPOiBCZXR0ZXIgc3VwcG9ydCBmb3IgaG9yaXpvbnRhbCBsaXN0cy5cbmZ1bmN0aW9uIHNjcm9sbE9uZVBhZ2UoZWxlbWVudCwgZG93bndhcmQpIHtcblxuICAvLyBEZXRlcm1pbmUgdGhlIGl0ZW0gdmlzaWJsZSBqdXN0IGF0IHRoZSBlZGdlIG9mIGRpcmVjdGlvbiB3ZSdyZSBoZWFkaW5nLlxuICAvLyBXZSdsbCBzZWxlY3QgdGhhdCBpdGVtIGlmIGl0J3Mgbm90IGFscmVhZHkgc2VsZWN0ZWQuXG4gIGNvbnN0IHNjcm9sbFRhcmdldCA9IGVsZW1lbnQuc2Nyb2xsVGFyZ2V0O1xuICBjb25zdCBlZGdlID0gc2Nyb2xsVGFyZ2V0LnNjcm9sbFRvcCArIChkb3dud2FyZCA/IHNjcm9sbFRhcmdldC5jbGllbnRIZWlnaHQgOiAwKTtcbiAgY29uc3QgaW5kZXhPZkl0ZW1BdEVkZ2UgPSBnZXRJbmRleE9mSXRlbUF0WShlbGVtZW50LCBlZGdlLCBkb3dud2FyZCk7XG5cbiAgY29uc3Qgc2VsZWN0ZWRJbmRleCA9IGVsZW1lbnQuc2VsZWN0ZWRJbmRleDtcbiAgbGV0IG5ld0luZGV4O1xuICBpZiAoaW5kZXhPZkl0ZW1BdEVkZ2UgJiYgc2VsZWN0ZWRJbmRleCA9PT0gaW5kZXhPZkl0ZW1BdEVkZ2UpIHtcbiAgICAvLyBUaGUgaXRlbSBhdCB0aGUgZWRnZSB3YXMgYWxyZWFkeSBzZWxlY3RlZCwgc28gc2Nyb2xsIGluIHRoZSBpbmRpY2F0ZWRcbiAgICAvLyBkaXJlY3Rpb24gYnkgb25lIHBhZ2UuIExlYXZlIHRoZSBuZXcgaXRlbSBhdCB0aGF0IGVkZ2Ugc2VsZWN0ZWQuXG4gICAgY29uc3QgZGVsdGEgPSAoZG93bndhcmQgPyAxIDogLTEpICogc2Nyb2xsVGFyZ2V0LmNsaWVudEhlaWdodDtcbiAgICBuZXdJbmRleCA9IGdldEluZGV4T2ZJdGVtQXRZKGVsZW1lbnQsIGVkZ2UgKyBkZWx0YSwgZG93bndhcmQpO1xuICB9XG4gIGVsc2Uge1xuICAgIC8vIFRoZSBpdGVtIGF0IHRoZSBlZGdlIHdhc24ndCBzZWxlY3RlZCB5ZXQuIEluc3RlYWQgb2Ygc2Nyb2xsaW5nLCB3ZSdsbFxuICAgIC8vIGp1c3Qgc2VsZWN0IHRoYXQgaXRlbS4gVGhhdCBpcywgdGhlIGZpcnN0IGF0dGVtcHQgdG8gcGFnZSB1cC9kb3duXG4gICAgLy8gdXN1YWxseSBqdXN0IG1vdmVzIHRoZSBzZWxlY3Rpb24gdG8gdGhlIGVkZ2UgaW4gdGhhdCBkaXJlY3Rpb24uXG4gICAgbmV3SW5kZXggPSBpbmRleE9mSXRlbUF0RWRnZTtcbiAgfVxuXG4gIGlmICghbmV3SW5kZXgpIHtcbiAgICAvLyBXZSBjYW4ndCBmaW5kIGFuIGl0ZW0gaW4gdGhlIGRpcmVjdGlvbiB3ZSB3YW50IHRvIHRyYXZlbC4gU2VsZWN0IHRoZVxuICAgIC8vIGxhc3QgaXRlbSAoaWYgbW92aW5nIGRvd253YXJkKSBvciBmaXJzdCBpdGVtIChpZiBtb3ZpbmcgdXB3YXJkKS5cbiAgICBuZXdJbmRleCA9IChkb3dud2FyZCA/IGVsZW1lbnQuaXRlbXMubGVuZ3RoIC0gMSA6IDApO1xuICB9XG5cbiAgaWYgKG5ld0luZGV4ICE9PSBzZWxlY3RlZEluZGV4KSB7XG4gICAgZWxlbWVudC5zZWxlY3RlZEluZGV4ID0gbmV3SW5kZXg7XG4gICAgcmV0dXJuIHRydWU7IC8vIFdlIGhhbmRsZWQgdGhlIHBhZ2UgdXAvZG93biBvdXJzZWx2ZXMuXG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlOyAvLyBXZSBkaWRuJ3QgZG8gYW55dGhpbmcuXG4gIH1cbn1cbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi9jcmVhdGVTeW1ib2wnO1xuaW1wb3J0IHN5bWJvbHMgZnJvbSAnLi9zeW1ib2xzJztcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3QgaXRlbVRleHRDb250ZW50c1N5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnaXRlbVRleHRDb250ZW50cycpO1xuY29uc3QgdHlwZWRQcmVmaXhTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3R5cGVkUHJlZml4Jyk7XG5jb25zdCBwcmVmaXhUaW1lb3V0U3ltYm9sID0gY3JlYXRlU3ltYm9sKCdwcmVmaXhUaW1lb3V0Jyk7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBLZXlib2FyZFByZWZpeFNlbGVjdGlvbi4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHRoYXQgaGFuZGxlcyBsaXN0IGJveC1zdHlsZSBwcmVmaXggdHlwaW5nLCBpbiB3aGljaCB0aGUgdXNlciBjYW4gdHlwZVxuICAgKiBhIHN0cmluZyB0byBzZWxlY3QgdGhlIGZpcnN0IGl0ZW0gdGhhdCBiZWdpbnMgd2l0aCB0aGF0IHN0cmluZy5cbiAgICpcbiAgICogRXhhbXBsZTogc3VwcG9zZSBhIGNvbXBvbmVudCB1c2luZyB0aGlzIG1peGluIGhhcyB0aGUgZm9sbG93aW5nIGl0ZW1zOlxuICAgKlxuICAgKiAgICAgPHNhbXBsZS1saXN0LWNvbXBvbmVudD5cbiAgICogICAgICAgPGRpdj5BcHBsZTwvZGl2PlxuICAgKiAgICAgICA8ZGl2PkFwcmljb3Q8L2Rpdj5cbiAgICogICAgICAgPGRpdj5CYW5hbmE8L2Rpdj5cbiAgICogICAgICAgPGRpdj5CbGFja2JlcnJ5PC9kaXY+XG4gICAqICAgICAgIDxkaXY+Qmx1ZWJlcnJ5PC9kaXY+XG4gICAqICAgICAgIDxkaXY+Q2FudGFsb3VwZTwvZGl2PlxuICAgKiAgICAgICA8ZGl2PkNoZXJyeTwvZGl2PlxuICAgKiAgICAgICA8ZGl2PkxlbW9uPC9kaXY+XG4gICAqICAgICAgIDxkaXY+TGltZTwvZGl2PlxuICAgKiAgICAgPC9zYW1wbGUtbGlzdC1jb21wb25lbnQ+XG4gICAqXG4gICAqIElmIHRoaXMgY29tcG9uZW50IHJlY2VpdmVzIHRoZSBmb2N1cywgYW5kIHRoZSB1c2VyIHByZXNzZXMgdGhlIFwiYlwiIG9yIFwiQlwiXG4gICAqIGtleSwgdGhlIFwiQmFuYW5hXCIgaXRlbSB3aWxsIGJlIHNlbGVjdGVkLCBiZWNhdXNlIGl0J3MgdGhlIGZpcnN0IGl0ZW0gdGhhdFxuICAgKiBtYXRjaGVzIHRoZSBwcmVmaXggXCJiXCIuIChNYXRjaGluZyBpcyBjYXNlLWluc2Vuc2l0aXZlLikgSWYgdGhlIHVzZXIgbm93XG4gICAqIHByZXNzZXMgdGhlIFwibFwiIG9yIFwiTFwiIGtleSBxdWlja2x5LCB0aGUgcHJlZml4IHRvIG1hdGNoIGJlY29tZXMgXCJibFwiLCBzb1xuICAgKiBcIkJsYWNrYmVycnlcIiB3aWxsIGJlIHNlbGVjdGVkLlxuICAgKlxuICAgKiBUaGUgcHJlZml4IHR5cGluZyBmZWF0dXJlIGhhcyBhIG9uZSBzZWNvbmQgdGltZW91dCDigJTCoHRoZSBwcmVmaXggdG8gbWF0Y2hcbiAgICogd2lsbCBiZSByZXNldCBhZnRlciBhIHNlY29uZCBoYXMgcGFzc2VkIHNpbmNlIHRoZSB1c2VyIGxhc3QgdHlwZWQgYSBrZXkuXG4gICAqIElmLCBpbiB0aGUgYWJvdmUgZXhhbXBsZSwgdGhlIHVzZXIgd2FpdHMgYSBzZWNvbmQgYmV0d2VlbiB0eXBpbmcgXCJiXCIgYW5kXG4gICAqIFwibFwiLCB0aGUgcHJlZml4IHdpbGwgYmVjb21lIFwibFwiLCBzbyBcIkxlbW9uXCIgd291bGQgYmUgc2VsZWN0ZWQuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyB0aGUgY29tcG9uZW50IHRvIGludm9rZSBhIGBrZXlkb3duYCBtZXRob2Qgd2hlbiBhIGtleSBpc1xuICAgKiBwcmVzc2VkLiBZb3UgY2FuIHVzZSBbS2V5Ym9hcmRNaXhpbl0oS2V5Ym9hcmRNaXhpbi5tZCkgZm9yIHRoYXRcbiAgICogcHVycG9zZSwgb3Igd2lyZSB1cCB5b3VyIG93biBrZXlib2FyZCBoYW5kbGluZyBhbmQgY2FsbCBga2V5ZG93bmAgeW91cnNlbGYuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gYWxzbyBleHBlY3RzIHRoZSBjb21wb25lbnQgdG8gcHJvdmlkZSBhbiBgaXRlbXNgIHByb3BlcnR5LiBUaGVcbiAgICogYHRleHRDb250ZW50YCBvZiB0aG9zZSBpdGVtcyB3aWxsIGJlIHVzZWQgZm9yIHB1cnBvc2VzIG9mIHByZWZpeCBtYXRjaGluZy5cbiAgICovXG4gIGNsYXNzIEtleWJvYXJkUHJlZml4U2VsZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgICAvLyBUT0RPOiBJZiB0aGUgc2V0IG9mIGl0ZW1zIGlzIGNoYW5nZWQsIHJlc2V0IHRoZSBwcmVmaXguXG4gICAgLy8gW3N5bWJvbHMuaXRlbXNDaGFuZ2VkXSgpIHtcbiAgICAvLyAgIHRoaXNbaXRlbVRleHRDb250ZW50c1N5bWJvbF0gPSBudWxsO1xuICAgIC8vICAgcmVzZXRUeXBlZFByZWZpeCh0aGlzKTtcbiAgICAvLyB9XG5cbiAgICAvLyBUT0RPOiBJZiB0aGUgc2VsZWN0aW9uIGlzIGNoYW5nZWQgYnkgc29tZSBvdGhlciBtZWFucyAoZS5nLiwgYXJyb3cga2V5cylcbiAgICAvLyBvdGhlciB0aGFuIHByZWZpeCB0eXBpbmcsIHRoZW4gdGhhdCBhY3Qgc2hvdWxkIHJlc2V0IHRoZSBwcmVmaXguXG5cbiAgICBbc3ltYm9scy5rZXlkb3duXShldmVudCkge1xuICAgICAgbGV0IGhhbmRsZWQ7XG4gICAgICBsZXQgcmVzZXRQcmVmaXggPSB0cnVlO1xuXG4gICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgY2FzZSA4OiAvLyBCYWNrc3BhY2VcbiAgICAgICAgICBoYW5kbGVCYWNrc3BhY2UodGhpcyk7XG4gICAgICAgICAgaGFuZGxlZCA9IHRydWU7XG4gICAgICAgICAgcmVzZXRQcmVmaXggPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyNzogLy8gRXNjYXBlXG4gICAgICAgICAgaGFuZGxlZCA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgaWYgKCFldmVudC5jdHJsS2V5ICYmICFldmVudC5tZXRhS2V5ICYmICFldmVudC5hbHRLZXkgJiZcbiAgICAgICAgICAgICAgZXZlbnQud2hpY2ggIT09IDMyIC8qIFNwYWNlICovKSB7XG4gICAgICAgICAgICBoYW5kbGVQbGFpbkNoYXJhY3Rlcih0aGlzLCBTdHJpbmcuZnJvbUNoYXJDb2RlKGV2ZW50LndoaWNoKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlc2V0UHJlZml4ID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXNldFByZWZpeCkge1xuICAgICAgICByZXNldFR5cGVkUHJlZml4KHRoaXMpO1xuICAgICAgfVxuXG4gICAgICAvLyBQcmVmZXIgbWl4aW4gcmVzdWx0IGlmIGl0J3MgZGVmaW5lZCwgb3RoZXJ3aXNlIHVzZSBiYXNlIHJlc3VsdC5cbiAgICAgIHJldHVybiBoYW5kbGVkIHx8IChzdXBlcltzeW1ib2xzLmtleWRvd25dICYmIHN1cGVyW3N5bWJvbHMua2V5ZG93bl0oZXZlbnQpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgdGhlIGZpcnN0IGl0ZW0gd2hvc2UgdGV4dCBjb250ZW50IGJlZ2lucyB3aXRoIHRoZSBnaXZlbiBwcmVmaXguXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcHJlZml4IFtTdHJpbmddIFRoZSBwcmVmaXggc3RyaW5nIHRvIHNlYXJjaCBmb3JcbiAgICAgKi9cbiAgICBzZWxlY3RJdGVtV2l0aFRleHRQcmVmaXgocHJlZml4KSB7XG4gICAgICBpZiAoc3VwZXIuc2VsZWN0SXRlbVdpdGhUZXh0UHJlZml4KSB7IHN1cGVyLnNlbGVjdEl0ZW1XaXRoVGV4dFByZWZpeChwcmVmaXgpOyB9XG4gICAgICBpZiAocHJlZml4ID09IG51bGwgfHwgcHJlZml4Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBpbmRleCA9IGdldEluZGV4T2ZJdGVtV2l0aFRleHRQcmVmaXgodGhpcywgcHJlZml4KTtcbiAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIEtleWJvYXJkUHJlZml4U2VsZWN0aW9uO1xufTtcblxuXG4vLyBUaW1lIGluIG1pbGxpc2Vjb25kcyBhZnRlciB3aGljaCB0aGUgdXNlciBpcyBjb25zaWRlcmVkIHRvIGhhdmUgc3RvcHBlZFxuLy8gdHlwaW5nLlxuY29uc3QgUFJFRklYX1RJTUVPVVRfRFVSQVRJT04gPSAxMDAwO1xuXG5cbi8vIFJldHVybiB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGl0ZW0gd2l0aCB0aGUgZ2l2ZW4gcHJlZml4LCBlbHNlIC0xLlxuZnVuY3Rpb24gZ2V0SW5kZXhPZkl0ZW1XaXRoVGV4dFByZWZpeChlbGVtZW50LCBwcmVmaXgpIHtcbiAgY29uc3QgaXRlbVRleHRDb250ZW50cyA9IGdldEl0ZW1UZXh0Q29udGVudHMoZWxlbWVudCk7XG4gIGNvbnN0IHByZWZpeExlbmd0aCA9IHByZWZpeC5sZW5ndGg7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbVRleHRDb250ZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGl0ZW1UZXh0Q29udGVudCA9IGl0ZW1UZXh0Q29udGVudHNbaV07XG4gICAgaWYgKGl0ZW1UZXh0Q29udGVudC5zdWJzdHIoMCwgcHJlZml4TGVuZ3RoKSA9PT0gcHJlZml4KSB7XG4gICAgICByZXR1cm4gaTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG4vLyBSZXR1cm4gYW4gYXJyYXkgb2YgdGhlIHRleHQgY29udGVudCAoaW4gbG93ZXJjYXNlKSBvZiBhbGwgaXRlbXMuXG4vLyBDYWNoZSB0aGVzZSByZXN1bHRzLlxuZnVuY3Rpb24gZ2V0SXRlbVRleHRDb250ZW50cyhlbGVtZW50KSB7XG4gIGlmICghZWxlbWVudFtpdGVtVGV4dENvbnRlbnRzU3ltYm9sXSkge1xuICAgIGNvbnN0IGl0ZW1zID0gZWxlbWVudC5pdGVtcztcbiAgICBlbGVtZW50W2l0ZW1UZXh0Q29udGVudHNTeW1ib2xdID0gaXRlbXMubWFwKGNoaWxkID0+IHtcbiAgICAgIGNvbnN0IHRleHQgPSBjaGlsZC50ZXh0Q29udGVudCB8fCBjaGlsZC5hbHQ7XG4gICAgICByZXR1cm4gdGV4dC50b0xvd2VyQ2FzZSgpO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBlbGVtZW50W2l0ZW1UZXh0Q29udGVudHNTeW1ib2xdO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVCYWNrc3BhY2UoZWxlbWVudCkge1xuICBjb25zdCBsZW5ndGggPSBlbGVtZW50W3R5cGVkUHJlZml4U3ltYm9sXSA/IGVsZW1lbnRbdHlwZWRQcmVmaXhTeW1ib2xdLmxlbmd0aCA6IDA7XG4gIGlmIChsZW5ndGggPiAwKSB7XG4gICAgZWxlbWVudFt0eXBlZFByZWZpeFN5bWJvbF0gPSBlbGVtZW50W3R5cGVkUHJlZml4U3ltYm9sXS5zdWJzdHIoMCwgbGVuZ3RoIC0gMSk7XG4gIH1cbiAgZWxlbWVudC5zZWxlY3RJdGVtV2l0aFRleHRQcmVmaXgoZWxlbWVudFt0eXBlZFByZWZpeFN5bWJvbF0pO1xuICBzZXRQcmVmaXhUaW1lb3V0KGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVQbGFpbkNoYXJhY3RlcihlbGVtZW50LCBjaGFyKSB7XG4gIGNvbnN0IHByZWZpeCA9IGVsZW1lbnRbdHlwZWRQcmVmaXhTeW1ib2xdIHx8ICcnO1xuICBlbGVtZW50W3R5cGVkUHJlZml4U3ltYm9sXSA9IHByZWZpeCArIGNoYXIudG9Mb3dlckNhc2UoKTtcbiAgZWxlbWVudC5zZWxlY3RJdGVtV2l0aFRleHRQcmVmaXgoZWxlbWVudFt0eXBlZFByZWZpeFN5bWJvbF0pO1xuICBzZXRQcmVmaXhUaW1lb3V0KGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiByZXNldFByZWZpeFRpbWVvdXQoZWxlbWVudCkge1xuICBpZiAoZWxlbWVudFtwcmVmaXhUaW1lb3V0U3ltYm9sXSkge1xuICAgIGNsZWFyVGltZW91dChlbGVtZW50W3ByZWZpeFRpbWVvdXRTeW1ib2xdKTtcbiAgICBlbGVtZW50W3ByZWZpeFRpbWVvdXRTeW1ib2xdID0gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzZXRUeXBlZFByZWZpeChlbGVtZW50KSB7XG4gIGVsZW1lbnRbdHlwZWRQcmVmaXhTeW1ib2xdID0gJyc7XG4gIHJlc2V0UHJlZml4VGltZW91dChlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gc2V0UHJlZml4VGltZW91dChlbGVtZW50KSB7XG4gIHJlc2V0UHJlZml4VGltZW91dChlbGVtZW50KTtcbiAgZWxlbWVudFtwcmVmaXhUaW1lb3V0U3ltYm9sXSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHJlc2V0VHlwZWRQcmVmaXgoZWxlbWVudCk7XG4gIH0sIFBSRUZJWF9USU1FT1VUX0RVUkFUSU9OKTtcbn1cbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi9jcmVhdGVTeW1ib2wnO1xuaW1wb3J0IHNhZmVBdHRyaWJ1dGVzIGZyb20gJy4vc2FmZUF0dHJpYnV0ZXMnO1xuaW1wb3J0IHN5bWJvbHMgZnJvbSAnLi9zeW1ib2xzJztcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3QgY2xvc2VkU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdjbG9zZWQnKTtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIE9wZW5DbG9zZS4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIGFkZHMgY2xvc2Uvb3BlbiBzZW1hbnRpY3MuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZG9lcyBub3QgcHJvZHVjZSBhbnkgdXNlci12aXNpYmxlIGVmZmVjdHMuIEluc3RlYWQgaXQgYXBwbGllc1xuICAgKiBhIGBiYXNpYy1jbG9zZWRgIENTUyBjbGFzcyB0byB0aGUgY29tcG9uZW50IGhvc3QgaWYgdGhlIGhvc3QgaXNcbiAgICogY2xvc2VkLCBhbmQgYSBgYmFzaWMtb3BlbmVkYCBjbGFzcyBpZiBvcGVuZWQuIEl0IGFsc28gaW52b2tlcyBhIGByZW5kZXJgXG4gICAqIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIG92ZXJyaWRkZW4gdG8gYXBwbHkgY3VzdG9tIGVmZmVjdHMuXG4gICAqL1xuICBjbGFzcyBPcGVuQ2xvc2UgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIC8vIFNldCBkZWZhdWx0cy5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5jbG9zZWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuY2xvc2VkID0gdGhpc1tzeW1ib2xzLmRlZmF1bHRzXS5jbG9zZWQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xvc2UgdGhlIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byBzZXR0aW5nIHRoZSBgY2xvc2VkYCBwcm9wZXJ0eSB0byB0cnVlLlxuICAgICAqL1xuICAgIGNsb3NlKCkge1xuICAgICAgdGhpcy5jbG9zZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRydWUgaWYgdGhlIGNvbXBvbmVudCBpcyBjdXJlbnRseSBjbG9zZWQuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuICAgIGdldCBjbG9zZWQoKSB7XG4gICAgICByZXR1cm4gdGhpc1tjbG9zZWRTeW1ib2xdO1xuICAgIH1cbiAgICBzZXQgY2xvc2VkKHZhbHVlKSB7XG4gICAgICBjb25zdCBwcmV2aW91c0Nsb3NlZCA9IHRoaXNbY2xvc2VkU3ltYm9sXTtcbiAgICAgIHRoaXNbY2xvc2VkU3ltYm9sXSA9IHZhbHVlO1xuICAgICAgaWYgKCdjbG9zZWQnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLmNsb3NlZCA9IHZhbHVlOyB9XG4gICAgICBpZiAodmFsdWUgIT09IHByZXZpb3VzQ2xvc2VkKSB7XG4gICAgICAgIHRoaXMucmVuZGVyKHZhbHVlKTtcblxuICAgICAgICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnY2xvc2VkLWNoYW5nZWQnKTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jb25uZWN0ZWRDYWxsYmFjaykgeyBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpOyB9XG4gICAgICBzYWZlQXR0cmlidXRlcy5jb25uZWN0ZWQodGhpcyk7XG4gICAgICB0aGlzLnJlbmRlcih0aGlzLmNsb3NlZCk7XG4gICAgfVxuXG4gICAgZ2V0IFtzeW1ib2xzLmRlZmF1bHRzXSgpIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRzID0gc3VwZXJbc3ltYm9scy5kZWZhdWx0c10gfHwge307XG4gICAgICBkZWZhdWx0cy5jbG9zZWQgPSBmYWxzZTtcbiAgICAgIHJldHVybiBkZWZhdWx0cztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPcGVuIHRoZSBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gc2V0dGluZyB0aGUgYGNsb3NlZGAgcHJvcGVydHkgdG8gZmFsc2UuXG4gICAgICovXG4gICAgb3BlbigpIHtcbiAgICAgIHRoaXMuY2xvc2VkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybSBjdXN0b20gcmVuZGVyaW5nIG9mIHRoZSBjbG9zZS9vcGVuIHRyYW5zaXRpb24uXG4gICAgICpcbiAgICAgKiBZb3UgY2FuIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHBlcmZvcm0gY3VzdG9tIGVmZmVjdHMuIElmIHlvdSBkbyBzbyxcbiAgICAgKiBiZSBzdXJlIHRvIGludm9rZSBgc3VwZXIoKWAgaW4geW91ciBpbXBsZW1lbnRhdGlvbiB0byBnZXQgdGhlIGJhc2VsaW5lXG4gICAgICogYmVoYXZpb3IuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGNsb3NpbmcgLSBUcnVlIGlmIHRoZSBjb21wb25lbnQgaXMgYmVpbmcgY2xvc2VkLFxuICAgICAqICAgICAgICBmYWxzZSBpZiBpdCdzIGJlaW5nIG9wZW5lZC5cbiAgICAgKi9cbiAgICByZW5kZXIoY2xvc2luZykge1xuICAgICAgaWYgKHN1cGVyLnJlbmRlcikgeyBzdXBlci5yZW5kZXIoKTsgfVxuICAgICAgc2FmZUF0dHJpYnV0ZXMudG9nZ2xlQ2xhc3ModGhpcywgJ2Jhc2ljLWNsb3NlZCcsIGNsb3NpbmcpO1xuICAgICAgc2FmZUF0dHJpYnV0ZXMudG9nZ2xlQ2xhc3ModGhpcywgJ2Jhc2ljLW9wZW5lZCcsICFjbG9zaW5nKTtcbiAgICAgIHNhZmVBdHRyaWJ1dGVzLnNldEF0dHJpYnV0ZSh0aGlzLCAnYXJpYS1leHBhbmRlZCcsICFjbG9zaW5nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGUgdGhlIGNvbXBvbmVudCdzIG9wZW4vY2xvc2VkIHN0YXRlLlxuICAgICAqL1xuICAgIHRvZ2dsZSgpIHtcbiAgICAgIHRoaXMuY2xvc2VkID0gIXRoaXMuY2xvc2VkO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIE9wZW5DbG9zZTtcbn07XG4iLCJpbXBvcnQgcmVuZGVyQXJyYXlBc0VsZW1lbnRzIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL3JlbmRlckFycmF5QXNFbGVtZW50cyc7XG5pbXBvcnQgc3ltYm9scyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9zeW1ib2xzJztcbmltcG9ydCB0b2dnbGVDbGFzcyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy90b2dnbGVDbGFzcyc7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBQYWdlRG90cy4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIFRlbXBsYXRlIG1peGluIHdoaWNoIGFkZHMgc21hbGwgZG90cyB0byBzaG93IHRoZSBudW1iZXIgb2YgaXRlbXMgYW5kIGxldFxuICAgKiB0aGUgdXNlciBzZWxlY3QgYSBzcGVjaWZpYyBpdGVtLlxuICAgKlxuICAgKiBZb3UgY2FuIHNlZSBhXG4gICAqIFtsaXZlIGRlbW9dKGh0dHA6Ly9iYXNpY3dlYmNvbXBvbmVudHMub3JnL2Jhc2ljLXdlYi1jb21wb25lbnRzL3BhY2thZ2VzL2RlbW9zL2Nhcm91c2VsLXdpdGgtZG90cy5odG1sKVxuICAgKiBvZiB0aGlzIG1peGluIGFwcGxpZWQgdG8gYSBjYXJvdXNlbC5cbiAgICpcbiAgICogVGhlcmUgd2lsbCBiZSBvbmUgZG90IGZvciBlYWNoIGl0ZW0sIGFuZCB0aGUgZG90IGZvciB0aGUgY3VycmVudGx5IHNlbGVjdGVkXG4gICAqIGl0ZW0gd2lsbCBiZSBzaG93biBzZWxlY3RlZC5cbiAgICpcbiAgICogVHlwaWNhbCB1c2FnZTpcbiAgICpcbiAgICogICAgIGNsYXNzIENhcm91c2VsV2l0aERvdHMgZXh0ZW5kcyBQYWdlRG90c01peGluKENhcm91c2VsKSB7fVxuICAgKiAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdjYXJvdXNlbC13aXRoLWRvdHMnLCBDYXJvdXNlbFdpdGhEb3RzKTtcbiAgICpcbiAgICogQWx0aG91Z2ggdGhlIGRvdHMgYXJlIHF1aXRlIHNtYWxsIGJ5IGRlZmF1bHQsIGNsaWNraW5nL3RhcHBpbmcgYSBkb3Qgd2lsbFxuICAgKiB3aWxsIHNlbGVjdCB0aGUgY29ycmVzcG9uZGluZyBsaXN0IGl0ZW0uXG4gICAqL1xuICBjbGFzcyBQYWdlRG90cyBleHRlbmRzIGJhc2Uge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuXG4gICAgICB0aGlzLiQuZG90cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgY29uc3QgZG90ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBjb25zdCBkb3RJbmRleCA9IHRoaXMuZG90cy5pbmRleE9mKGRvdCk7XG4gICAgICAgIGlmIChkb3RJbmRleCA+PSAwKSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gZG90SW5kZXg7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldCBkb3RzKCkge1xuICAgICAgcmV0dXJuIFtdLnNsaWNlLmNhbGwodGhpcy4kLmRvdHMucXVlcnlTZWxlY3RvckFsbCgnLmRvdCcpKTtcbiAgICB9XG5cbiAgICBbc3ltYm9scy5pdGVtc0NoYW5nZWRdKCkge1xuICAgICAgaWYgKHN1cGVyW3N5bWJvbHMuaXRlbXNDaGFuZ2VkXSkgeyBzdXBlcltzeW1ib2xzLml0ZW1zQ2hhbmdlZF0oKTsgfVxuICAgICAgcmVuZGVyQXJyYXlBc0VsZW1lbnRzKHRoaXMuaXRlbXMsIHRoaXMuJC5kb3RzLCAoaXRlbSwgZWxlbWVudCkgPT4ge1xuICAgICAgICAvLyBXZSBkb24ndCB1c2UgdGhlIGl0ZW0gcGFyYW1ldGVyLCBiZWNhdXNlIGFueSBpdGVtIHdpbGwgcHJvZHVjZSBhblxuICAgICAgICAvLyBpZGVudGljYWwgY29ycmVzcG9uZGluZyBkb3QuXG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RvdCcpO1xuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3R5bGUtc2NvcGUnKTtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Jhc2ljLXBhZ2UtZG90cycpO1xuICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdyb2xlJywgJ25vbmUnKTtcbiAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZWZyZXNoRG90cyh0aGlzKTtcbiAgICB9XG5cbiAgICBbc3ltYm9scy5pdGVtU2VsZWN0ZWRdKGl0ZW0sIHNlbGVjdGVkKSB7XG4gICAgICBpZiAoc3VwZXJbc3ltYm9scy5pdGVtU2VsZWN0ZWRdKSB7IHN1cGVyW3N5bWJvbHMuaXRlbVNlbGVjdGVkXShpdGVtLCBzZWxlY3RlZCk7IH1cbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pO1xuICAgICAgLy8gU2VlIGlmIHRoZSBjb3JyZXNwb25kaW5nIGRvdCBoYXMgYWxyZWFkeSBiZWVuIGNyZWF0ZWQuXG4gICAgICAvLyBJZiBub3QsIHRoZSBjb3JyZWN0IGRvdCB3aWxsIGJlIHNlbGVjdGVkIHdoZW4gaXQgZ2V0cyBjcmVhdGVkLlxuICAgICAgY29uc3QgZG90cyA9IHRoaXMuZG90cztcbiAgICAgIGlmIChkb3RzICYmIGRvdHMubGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgICAgY29uc3QgZG90ID0gdGhpcy5kb3RzW2luZGV4XTtcbiAgICAgICAgaWYgKGRvdCkge1xuICAgICAgICAgIHRvZ2dsZUNsYXNzKGRvdCwgJ3NlbGVjdGVkJywgc2VsZWN0ZWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGRpc3RhbmNlIHRoZSB1c2VyIGhhcyBtb3ZlZCB0aGUgZmlyc3QgdG91Y2hwb2ludCBzaW5jZSB0aGUgYmVnaW5uaW5nXG4gICAgICogb2YgYSBkcmFnLCBleHByZXNzZWQgYXMgYSBmcmFjdGlvbiBvZiB0aGUgZWxlbWVudCdzIHdpZHRoLlxuICAgICAqXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGVkRnJhY3Rpb24oKSB7XG4gICAgICByZXR1cm4gc3VwZXIuc2VsZWN0ZWRGcmFjdGlvbjtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGVkRnJhY3Rpb24odmFsdWUpIHtcbiAgICAgIGlmICgnc2VsZWN0ZWRGcmFjdGlvbicgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRGcmFjdGlvbiA9IHZhbHVlOyB9XG4gICAgICByZW5kZXJUcmFuc2l0aW9uKHRoaXMsIHRoaXMuc2VsZWN0ZWRJbmRleCwgdmFsdWUpO1xuICAgIH1cblxuICAgIGdldCBzZWxlY3RlZEluZGV4KCkge1xuICAgICAgcmV0dXJuIHN1cGVyLnNlbGVjdGVkSW5kZXg7XG4gICAgfVxuICAgIHNldCBzZWxlY3RlZEluZGV4KGluZGV4KSB7XG4gICAgICBpZiAoJ3NlbGVjdGVkSW5kZXgnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkSW5kZXggPSBpbmRleDsgfVxuICAgICAgcmVmcmVzaERvdHModGhpcyk7XG4gICAgfVxuXG4gICAgZ2V0IFtzeW1ib2xzLnRlbXBsYXRlXSgpIHtcbiAgICAgIGNvbnN0IGJhc2VUZW1wbGF0ZSA9IHN1cGVyW3N5bWJvbHMudGVtcGxhdGVdIHx8ICcnO1xuICAgICAgcmV0dXJuIGBcbiAgICAgICAgPHN0eWxlPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG5cbiAgICAgICAgI2RvdHMge1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgI2RvdE5hdmlnYXRpb25Db250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIC13ZWJraXQtZmxleDogMTtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgI2NvbnRhaW5lciA6OnNsb3R0ZWQoKikge1xuICAgICAgICAgIC13ZWJraXQtZmxleDogMTtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRvdCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgaGVpZ2h0OiA4cHg7XG4gICAgICAgICAgbWFyZ2luOiA3cHggNXB4O1xuICAgICAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyBib3gtc2hhZG93IDAuMnM7XG4gICAgICAgICAgd2lkdGg6IDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kb3Q6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDFweCAzcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRvdC5zZWxlY3RlZCB7XG4gICAgICAgICAgb3BhY2l0eTogMC45NTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgIC5kb3Qge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMnB4O1xuICAgICAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIDwvc3R5bGU+XG5cbiAgICAgICAgPGRpdiBpZD1cImRvdHNcIiByb2xlPVwibm9uZVwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwiZG90TmF2aWdhdGlvbkNvbnRhaW5lclwiIHJvbGU9XCJub25lXCI+XG4gICAgICAgICAgJHtiYXNlVGVtcGxhdGV9XG4gICAgICAgIDwvZGl2PlxuICAgICAgYDtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBQYWdlRG90cztcbn07XG5cblxuLy8gUmV0dXJuIHRoZSBpbmRleCwgZW5zdXJpbmcgaXQgc3RheXMgYmV0d2VlbiAwIGFuZCB0aGUgZ2l2ZW4gbGVuZ3RoLlxuZnVuY3Rpb24ga2VlcEluZGV4V2l0aGluQm91bmRzKGxlbmd0aCwgaW5kZXgpIHtcbiAgLy8gSGFuZGxlIHBvc3NpYmlsaXR5IG9mIG5lZ2F0aXZlIG1vZC5cbiAgLy8gU2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE4NjE4MjUwLzc2NDcyXG4gIHJldHVybiAoKGluZGV4ICUgbGVuZ3RoKSArIGxlbmd0aCkgJSBsZW5ndGg7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRyYW5zaXRpb24oZWxlbWVudCwgc2VsZWN0ZWRJbmRleCwgc2VsZWN0ZWRGcmFjdGlvbikge1xuICBjb25zdCBkb3RzID0gZWxlbWVudC5kb3RzO1xuICBpZiAoIWRvdHMgfHwgZG90cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgZG90Q291bnQgPSBkb3RzLmxlbmd0aDtcbiAgY29uc3Qgb3BhY2l0eU1pbmltdW0gPSAwLjQ7XG4gIGNvbnN0IG9wYWNpdHlNYXhpbXVtID0gMC45NTtcbiAgY29uc3Qgb3BhY2l0eVJhbmdlID0gb3BhY2l0eU1heGltdW0gLSBvcGFjaXR5TWluaW11bTtcbiAgY29uc3QgZnJhY3Rpb25hbEluZGV4ID0gc2VsZWN0ZWRJbmRleCArIHNlbGVjdGVkRnJhY3Rpb247XG4gIGNvbnN0IGxlZnRJbmRleCA9IE1hdGguZmxvb3IoZnJhY3Rpb25hbEluZGV4KTtcbiAgY29uc3QgcmlnaHRJbmRleCA9IE1hdGguY2VpbChmcmFjdGlvbmFsSW5kZXgpO1xuICBjb25zdCBzZWxlY3Rpb25XcmFwcyA9IGVsZW1lbnQuc2VsZWN0aW9uV3JhcHM7XG4gIGxldCBhd2F5SW5kZXggPSBzZWxlY3RlZEZyYWN0aW9uID49IDAgPyBsZWZ0SW5kZXggOiByaWdodEluZGV4O1xuICBsZXQgdG93YXJkSW5kZXggPSBzZWxlY3RlZEZyYWN0aW9uID49IDAgPyByaWdodEluZGV4IDogbGVmdEluZGV4O1xuICBpZiAoc2VsZWN0aW9uV3JhcHMpIHtcbiAgICBhd2F5SW5kZXggPSBrZWVwSW5kZXhXaXRoaW5Cb3VuZHMoZG90Q291bnQsIGF3YXlJbmRleCk7XG4gICAgdG93YXJkSW5kZXggPSBrZWVwSW5kZXhXaXRoaW5Cb3VuZHMoZG90Q291bnQsIHRvd2FyZEluZGV4KTtcbiAgfVxuICAvLyBTdHVwaWQgSUUgZG9lc24ndCBoYXZlIE1hdGgudHJ1bmMuXG4gIC8vIGNvbnN0IHRydW5jYXRlZFNlbGVjdGVkRnJhY3Rpb24gPSBNYXRoLnRydW5jKHNlbGVjdGVkRnJhY3Rpb24pO1xuICBjb25zdCB0cnVuY2F0ZWRTZWxlY3RlZEZyYWN0aW9uID0gc2VsZWN0ZWRGcmFjdGlvbiA8IDAgPyBNYXRoLmNlaWwoc2VsZWN0ZWRGcmFjdGlvbikgOiBNYXRoLmZsb29yKHNlbGVjdGVkRnJhY3Rpb24pO1xuICBjb25zdCBwcm9ncmVzcyA9IHNlbGVjdGVkRnJhY3Rpb24gLSB0cnVuY2F0ZWRTZWxlY3RlZEZyYWN0aW9uO1xuICBjb25zdCBvcGFjaXR5UHJvZ3Jlc3NUaHJvdWdoUmFuZ2UgPSBNYXRoLmFicyhwcm9ncmVzcykgKiBvcGFjaXR5UmFuZ2U7XG4gIGRvdHMuZm9yRWFjaCgoZG90LCBpbmRleCkgPT4ge1xuICAgIGxldCBkb3RPcGFjaXR5O1xuICAgIGlmIChzZWxlY3RlZEZyYWN0aW9uID09PSAwKSB7XG4gICAgICAvLyBSZW1vdmUgZXhwbGljaXQgb3BhY2l0eSBhbmQgcmVseSBvbiBzdHlsaW5nLlxuICAgICAgZG90T3BhY2l0eSA9ICcnO1xuICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IGF3YXlJbmRleCkge1xuICAgICAgZG90T3BhY2l0eSA9IG9wYWNpdHlNYXhpbXVtIC0gb3BhY2l0eVByb2dyZXNzVGhyb3VnaFJhbmdlO1xuICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IHRvd2FyZEluZGV4KSB7XG4gICAgICBkb3RPcGFjaXR5ID0gb3BhY2l0eU1pbmltdW0gKyBvcGFjaXR5UHJvZ3Jlc3NUaHJvdWdoUmFuZ2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvdE9wYWNpdHkgPSBvcGFjaXR5TWluaW11bTtcbiAgICB9XG4gICAgZG90LnN0eWxlLm9wYWNpdHkgPSBkb3RPcGFjaXR5O1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVmcmVzaERvdHMoZWxlbWVudCkge1xuICBjb25zdCBzZWxlY3RlZEluZGV4ID0gZWxlbWVudC5zZWxlY3RlZEluZGV4O1xuICBlbGVtZW50LmRvdHMuZm9yRWFjaCgoZG90LCBpKSA9PiB7XG4gICAgdG9nZ2xlQ2xhc3MoZG90LCAnc2VsZWN0ZWQnLCBpID09PSBzZWxlY3RlZEluZGV4KTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgc2FmZUF0dHJpYnV0ZXMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvc2FmZUF0dHJpYnV0ZXMnO1xuaW1wb3J0IHN5bWJvbHMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvc3ltYm9scyc7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBQbGF5Q29udHJvbHMuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBUZW1wbGF0ZSBtaXhpbiB3aGljaCBhZGRzIGJ1dHRvbnMgZm9yIG1hbmFnaW5nIHBsYXliYWNrIG9mIGEgc2xpZGVzaG93LFxuICAgKiBhdWRpbyBwbGF5bGlzdCwgZXRjLlxuICAgKlxuICAgKiBUeXBpY2FsIHVzYWdlOlxuICAgKlxuICAgKiAgICAgY2xhc3MgU2xpZGVzaG93V2l0aENvbnRyb2xzIGV4dGVuZHMgUGxheUNvbnRyb2xzTWl4aW4oU2xpZGVzaG93KSB7fVxuICAgKiAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdzbGlkZXNob3ctd2l0aC1jb250cm9scycsIFNsaWRlc2hvd1dpdGhDb250cm9scyk7XG4gICAqXG4gICAqL1xuICBjbGFzcyBQbGF5Q29udHJvbHMgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMuJC5wcmV2aW91c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgdGhpcy5zZWxlY3RQcmV2aW91cygpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLiQucGxheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgdGhpcy5wbGF5aW5nID0gIXRoaXMucGxheWluZztcbiAgICAgIH0pO1xuICAgICAgdGhpcy4kLm5leHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgIHRoaXMuc2VsZWN0TmV4dCgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2spIHsgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTsgfVxuICAgICAgc2FmZUF0dHJpYnV0ZXMuY29ubmVjdGVkKHRoaXMpO1xuICAgIH1cblxuICAgIFtzeW1ib2xzLmtleWRvd25dKGV2ZW50KSB7XG4gICAgICBsZXQgaGFuZGxlZDtcblxuICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgIGNhc2UgMzI6IC8qIFNwYWNlICovXG4gICAgICAgICAgdGhpcy5wbGF5aW5nID0gIXRoaXMucGxheWluZztcbiAgICAgICAgICBoYW5kbGVkID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgLy8gUHJlZmVyIG1peGluIHJlc3VsdCBpZiBpdCdzIGRlZmluZWQsIG90aGVyd2lzZSB1c2UgYmFzZSByZXN1bHQuXG4gICAgICByZXR1cm4gaGFuZGxlZCB8fCAoc3VwZXJbc3ltYm9scy5rZXlkb3duXSAmJiBzdXBlcltzeW1ib2xzLmtleWRvd25dKGV2ZW50KSk7XG4gICAgfVxuXG4gICAgZ2V0IHBsYXlpbmcoKSB7XG4gICAgICByZXR1cm4gc3VwZXIucGxheWluZztcbiAgICB9XG4gICAgc2V0IHBsYXlpbmcodmFsdWUpIHtcbiAgICAgIGlmICgncGxheWluZycgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIucGxheWluZyA9IHZhbHVlOyB9XG4gICAgICBzYWZlQXR0cmlidXRlcy50b2dnbGVDbGFzcyh0aGlzLCAncGxheWluZycsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBnZXQgW3N5bWJvbHMudGVtcGxhdGVdKCkge1xuICAgICAgY29uc3QgYmFzZVRlbXBsYXRlID0gc3VwZXJbc3ltYm9scy50ZW1wbGF0ZV0gfHwgJyc7XG4gICAgICByZXR1cm4gYFxuICAgICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICAjYnV0dG9ucyB7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgcGFkZGluZzogMC41ZW07XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgZmlsbDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgdHJhbnNpdGlvbjogZmlsbCAwLjVzO1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIH1cbiAgICAgICAgOmhvc3QoOmhvdmVyKSBidXR0b24ge1xuICAgICAgICAgIGZpbGw6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246aG92ZXIge1xuICAgICAgICAgIGZpbGw6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSk7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmFjdGl2ZSB7XG4gICAgICAgICAgZmlsbDogd2hpdGU7XG4gICAgICAgIH1cblxuICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICB9XG4gICAgICAgICNwbGF5QnV0dG9uIC5pY29uIHtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdCgucGxheWluZykgLnBhdXNlZENvbnRyb2wge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgOmhvc3QoOm5vdCgucGxheWluZykpIC5wbGF5aW5nQ29udHJvbCB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgICNjb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIC13ZWJraXQtZmxleDogMTtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgI2NvbnRhaW5lciA6OnNsb3R0ZWQoKikge1xuICAgICAgICAgIC13ZWJraXQtZmxleDogMTtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICB9XG4gICAgICAgIDwvc3R5bGU+XG5cbiAgICAgICAgPGRpdiBpZD1cImJ1dHRvbnNcIj5cbiAgICAgICAgICA8YnV0dG9uIGlkPVwicHJldmlvdXNCdXR0b25cIj5cbiAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJpY29uXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBtZWV0XCI+XG4gICAgICAgICAgICAgIDxnIGlkPVwic2tpcC1wcmV2aW91c1wiPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNiA2aDJ2MTJINnptMy41IDZsOC41IDZWNnpcIi8+XG4gICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gaWQ9XCJwbGF5QnV0dG9uXCI+XG4gICAgICAgICAgICA8c3ZnIGNsYXNzPVwiaWNvbiBwbGF5aW5nQ29udHJvbFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWQgbWVldFwiPlxuICAgICAgICAgICAgICA8ZyBpZD1cInBhdXNlLWNpcmNsZS1vdXRsaW5lXCI+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk05IDE2aDJWOEg5djh6bTMtMTRDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgMThjLTQuNDEgMC04LTMuNTktOC04czMuNTktOCA4LTggOCAzLjU5IDggOC0zLjU5IDgtOCA4em0xLTRoMlY4aC0ydjh6XCI+PC9wYXRoPlxuICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJpY29uIHBhdXNlZENvbnRyb2xcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkIG1lZXRcIj5cbiAgICAgICAgICAgICAgPGcgaWQ9XCJwbGF5LWNpcmNsZS1vdXRsaW5lXCI+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMCAxNi41bDYtNC41LTYtNC41djl6TTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgMThjLTQuNDEgMC04LTMuNTktOC04czMuNTktOCA4LTggOCAzLjU5IDggOC0zLjU5IDgtOCA4elwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBpZD1cIm5leHRCdXR0b25cIj5cbiAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJpY29uXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBtZWV0XCI+XG4gICAgICAgICAgICAgIDxnIGlkPVwic2tpcC1uZXh0XCI+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk02IDE4bDguNS02TDYgNnYxMnpNMTYgNnYxMmgyVjZoLTJ6XCIvPlxuICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBpZD1cImNvbnRhaW5lclwiIHJvbGU9XCJub25lXCI+XG4gICAgICAgICAgJHtiYXNlVGVtcGxhdGV9XG4gICAgICAgIDwvZGl2PlxuICAgICAgYDtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBQbGF5Q29udHJvbHM7XG59O1xuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBTZWxlY3RlZEl0ZW1UZXh0VmFsdWUuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBkZWZpbmVzIGEgYHZhbHVlYCBwcm9wZXJ0eSB0aGF0IHJlZmxlY3RzIHRoZSB0ZXh0IGNvbnRlbnQgb2YgYVxuICAgKiBzZWxlY3RlZCBpdGVtLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGV4aXN0cyBmb3IgbGlzdC1saWtlIGNvbXBvbmVudHMgdGhhdCB3YW50IHRvIHByb3ZpZGUgYSBtb3JlXG4gICAqIGNvbnZlbmllbnQgd2F5IHRvIGdldC9zZXQgdGhlIHNlbGVjdGVkIGl0ZW0gdXNpbmcgdGV4dC5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIGEgY29tcG9uZW50IHRvIHByb3ZpZGUgYW4gYGl0ZW1zYCBhcnJheSBvZiBhbGwgZWxlbWVudHNcbiAgICogaW4gdGhlIGxpc3QuIEEgc3RhbmRhcmQgd2F5IHRvIGRvIHRoYXQgd2l0aCBpc1xuICAgKiBbQ29udGVudEl0ZW1zTWl4aW5dKENvbnRlbnRJdGVtc01peGluLm1kKS4gVGhpcyBhbHNvIGV4cGVjdHMgdGhlIGRlZmluaXRpb25cbiAgICogb2YgYHNlbGVjdGVkSW5kZXhgIGFuZCBgc2VsZWN0ZWRJdGVtYCBwcm9wZXJ0aWVzLCB3aGljaCBjYW4gYmUgb2J0YWluZWRcbiAgICogZnJvbSBbU2luZ2xlU2VsZWN0aW9uTWl4aW5dKFNpbmdsZVNlbGVjdGlvbk1peGluLm1kKS5cbiAgICovXG4gIGNsYXNzIFNlbGVjdGVkSXRlbVRleHRWYWx1ZSBleHRlbmRzIGJhc2Uge1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRleHQgY29udGVudCBvZiB0aGUgc2VsZWN0ZWQgaXRlbS5cbiAgICAgKlxuICAgICAqIFNldHRpbmcgdGhpcyB2YWx1ZSB0byBhIHN0cmluZyB3aWxsIGF0dGVtcHQgdG8gc2VsZWN0IHRoZSBmaXJzdCBsaXN0IGl0ZW1cbiAgICAgKiB3aG9zZSB0ZXh0IGNvbnRlbnQgbWF0Y2ggdGhhdCBzdHJpbmcuIFNldHRpbmcgdGhpcyB0byBhIHN0cmluZyBub3QgbWF0Y2hpbmdcbiAgICAgKiBhbnkgbGlzdCBpdGVtIHdpbGwgcmVzdWx0IGluIG5vIHNlbGVjdGlvbi5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0IHZhbHVlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRJdGVtID09IG51bGwgfHwgdGhpcy5zZWxlY3RlZEl0ZW0udGV4dENvbnRlbnQgPT0gbnVsbCA/XG4gICAgICAgICcnIDpcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0udGV4dENvbnRlbnQ7XG4gICAgfVxuICAgIHNldCB2YWx1ZSh0ZXh0KSB7XG5cbiAgICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHRoaXMuc2VsZWN0ZWRJbmRleDtcbiAgICAgIGxldCBuZXdJbmRleCA9IC0xOyAvLyBBc3N1bWUgd2Ugd29uJ3QgZmluZCB0aGUgdGV4dC5cblxuICAgICAgLy8gRmluZCB0aGUgaXRlbSB3aXRoIHRoZSBpbmRpY2F0ZWQgdGV4dC5cbiAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5pdGVtcztcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSBpdGVtcy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaXRlbXNbaV0udGV4dENvbnRlbnQgPT09IHRleHQpIHtcbiAgICAgICAgICBuZXdJbmRleCA9IGk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG5ld0luZGV4ICE9PSBjdXJyZW50SW5kZXgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gbmV3SW5kZXg7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCd2YWx1ZS1jaGFuZ2VkJyk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFNlbGVjdGVkSXRlbVRleHRWYWx1ZTtcbn07XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4vY3JlYXRlU3ltYm9sJztcbmltcG9ydCBGcmFjdGlvbmFsU2VsZWN0aW9uTWl4aW4gZnJvbSAnLi9GcmFjdGlvbmFsU2VsZWN0aW9uTWl4aW4nO1xuaW1wb3J0IHN5bWJvbHMgZnJvbSAnLi9zeW1ib2xzJztcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3QgYW5pbWF0aW9uU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdhbmltYXRpb24nKTtcbmNvbnN0IGRyYWdnaW5nU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdkcmFnZ2luZycpO1xuY29uc3QgbGFzdEFuaW1hdGlvblN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnbGFzdEFuaW1hdGlvbicpO1xuY29uc3QgcGxheWluZ0FuaW1hdGlvblN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnYW5pbWF0aW5nU2VsZWN0aW9uJyk7XG5jb25zdCBwcmV2aW91c1NlbGVjdGlvblN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgncHJldmlvdXNTZWxlY3Rpb24nKTtcbmNvbnN0IHNlbGVjdGlvbkFuaW1hdGlvbkR1cmF0aW9uU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdzZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvbicpO1xuY29uc3Qgc2VsZWN0aW9uQW5pbWF0aW9uRWZmZWN0U3ltYm9sID0gY3JlYXRlU3ltYm9sKCdzZWxlY3Rpb25BbmltYXRpb25FZmZlY3QnKTtcbmNvbnN0IHNlbGVjdGlvbkFuaW1hdGlvbktleWZyYW1lc1N5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnc2VsZWN0aW9uQW5pbWF0aW9uS2V5ZnJhbWVzJyk7XG5jb25zdCByZXNldEFuaW1hdGlvbnNPbk5leHRSZW5kZXJTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3Jlc2V0QW5pbWF0aW9uc09uTmV4dFJlbmRlcicpO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggU2VsZWN0aW9uQW5pbWF0aW9uLiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl4aW4oYmFzZSkge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCB1c2VzIGFuaW1hdGlvbiB0byBzaG93IHRyYW5zaXRpb25zIGJldHdlZW4gc2VsZWN0aW9uIHN0YXRlcy5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBjYW4gYmUgdXNlZCBieSBjb21wb25lbnRzIHRoYXQgd2FudCB0byBwcm92aWRlIHZpc2libGVcbiAgICogYW5pbWF0aW9ucyB3aGVuIGNoYW5naW5nIHRoZSBzZWxlY3Rpb24uIEZvciBleGFtcGxlLCBhIGNhcm91c2VsIGNvbXBvbmVudFxuICAgKiBtYXkgd2FudCB0byBkZWZpbmUgYSBzbGlkaW5nIGFuaW1hdGlvbiBlZmZlY3Qgc2hvd24gd2hlbiBtb3ZpbmcgYmV0d2VlblxuICAgKiBpdGVtcy5cbiAgICpcbiAgICogVGhlIGFuaW1hdGlvbiBpcyBkZWZpbmVkIGJ5IGEgYHNlbGVjdGlvbkFuaW1hdGlvbktleWZyYW1lc2AgcHJvcGVydHk7IHNlZVxuICAgKiB0aGF0IHByb3BlcnR5IGZvciBkZXRhaWxzIG9uIGhvdyB0byBkZWZpbmUgdGhlc2Uga2V5ZnJhbWVzLiBUaGlzIGFuaW1hdGlvblxuICAgKiB3aWxsIGJlIHVzZWQgaW4gdHdvIHdheXMuIEZpcnN0LCB3aGVuIG1vdmluZyBzdHJpY3RseSBiZXR3ZWVuIGl0ZW1zLCB0aGVcbiAgICogYW5pbWF0aW9uIHdpbGwgcGxheSBzbW9vdGhseSB0byBzaG93IHRoZSBzZWxlY3Rpb24gY2hhbmdpbmcuIFNlY29uZCwgdGhlXG4gICAqIGFuaW1hdGlvbiBjYW4gYmUgdXNlZCB0byByZW5kZXIgdGhlIHNlbGVjdGlvbiBhdCBhIGZpeGVkIHBvaW50IGluIHRoZVxuICAgKiB0cmFuc2l0aW9uIGJldHdlZW4gc3RhdGVzLiBFLmcuLCBpZiB0aGUgdXNlciBwYXVzZXMgaGFsZndheSB0aHJvdWdoXG4gICAqIGRyYWdnaW5nIGFuIGVsZW1lbnQgdXNpbmcgW1N3aXBlRGlyZWN0aW9uTWl4aW5dKFN3aXBlRGlyZWN0aW9uTWl4aW4ubWQpXG4gICAqIG9yIFtUcmFja3BhZERpcmVjdGlvbk1peGluXShUcmFja3BhZERpcmVjdGlvbk1peGluLm1kKXMsIHRoZW4gdGhlIHNlbGVjdGlvblxuICAgKiBhbmltYXRpb24gd2lsbCBiZSBzaG93biBhdCB0aGUgcG9pbnQgZXhhY3RseSBoYWxmd2F5IHRocm91Z2guXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyBhIGNvbXBvbmVudCB0byBwcm92aWRlIGFuIGBpdGVtc2AgYXJyYXkgb2YgYWxsIGVsZW1lbnRzXG4gICAqIGluIHRoZSBsaXN0LCB3aGljaCBjYW4gYmUgcHJvdmlkZWQgdmlhXG4gICAqIFtDb250ZW50SXRlbXNNaXhpbl0oQ29udGVudEl0ZW1zTWl4aW4ubWQpLiBUaGlzIG1peGluIGFsc28gZXhwZWN0c1xuICAgKiBgc2VsZWN0ZWRJbmRleGAgYW5kIGBzZWxlY3RlZEl0ZW1gIHByb3BlcnRpZXMsIHdoaWNoIGNhbiBiZSBwcm92aWRlZCB2aWFcbiAgICogW1NpbmdsZVNlbGVjdGlvbk1peGluXShTaW5nbGVTZWxlY3Rpb25NaXhpbi5tZCkuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gc3VwcG9ydHMgYSBgc2VsZWN0aW9uV3JhcHNgIHByb3BlcnR5LiBXaGVuIHRydWUsIHRoZSB1c2VyIGNhblxuICAgKiBuYXZpZ2F0ZSBmb3J3YXJkIGZyb20gdGhlIGxhc3QgaXRlbSBpbiB0aGUgbGlzdCBhbmQgd3JhcCBhcm91bmQgdG8gdGhlXG4gICAqIGZpcnN0IGl0ZW0sIG9yIG5hdmlnYXRlIGJhY2t3YXJkIGZyb20gdGhlIGZpcnN0IGl0ZW0gYW5kIHdyYXAgYXJvdW5kIHRvIHRoZVxuICAgKiBsYXN0IGl0ZW0uXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gdXNlcyB0aGUgV2ViIEFuaW1hdGlvbnMgQVBJLiBGb3IgdXNlIG9uIGJyb3dzZXJzIHdoaWNoXG4gICAqIGRvIG5vdCBzdXBwb3J0IHRoYXQgQVBJIG5hdGl2ZWx5LCB5b3Ugd2lsbCBuZWVkIHRvIGxvYWQgdGhlXG4gICAqIFtXZWIgQW5pbWF0aW9ucyBwb2x5ZmlsbF0oaHR0cHM6Ly9naXRodWIuY29tL3dlYi1hbmltYXRpb25zL3dlYi1hbmltYXRpb25zLWpzKS5cbiAgICovXG4gIGNsYXNzIFNlbGVjdGlvbkFuaW1hdGlvbiBleHRlbmRzIGJhc2Uge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuXG4gICAgICAvLyBTZXQgZGVmYXVsdHMuXG4gICAgICBpZiAodHlwZW9mIHRoaXMuc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb24gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb24gPSB0aGlzW3N5bWJvbHMuZGVmYXVsdHNdLnNlbGVjdGlvbkFuaW1hdGlvbkR1cmF0aW9uO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiB0aGlzLnNlbGVjdGlvbkFuaW1hdGlvbkVmZmVjdCA9PT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5zZWxlY3Rpb25BbmltYXRpb25LZXlmcmFtZXMgPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbkFuaW1hdGlvbkVmZmVjdCA9IHRoaXNbc3ltYm9scy5kZWZhdWx0c10uc2VsZWN0aW9uQW5pbWF0aW9uRWZmZWN0O1xuICAgICAgfVxuXG4gICAgICB0aGlzW3N5bWJvbHMuZHJhZ2dpbmddID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0IFtzeW1ib2xzLmRlZmF1bHRzXSgpIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRzID0gc3VwZXJbc3ltYm9scy5kZWZhdWx0c10gfHwge307XG4gICAgICBkZWZhdWx0cy5zZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvbiA9IDI1MDtcbiAgICAgIGRlZmF1bHRzLnNlbGVjdGlvbkFuaW1hdGlvbkVmZmVjdCA9ICdzbGlkZSc7XG4gICAgICByZXR1cm4gZGVmYXVsdHM7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBQcm92aWRlIGJhY2tpbmcgZm9yIHRoZSBkcmFnZ2luZyBwcm9wZXJ0eS5cbiAgICAgKiBBbHNvLCB3aGVuIGEgZHJhZyBiZWdpbnMsIHJlc2V0IHRoZSBhbmltYXRpb25zLlxuICAgICAqL1xuICAgIGdldCBbc3ltYm9scy5kcmFnZ2luZ10oKSB7XG4gICAgICByZXR1cm4gdGhpc1tkcmFnZ2luZ1N5bWJvbF07XG4gICAgfVxuICAgIHNldCBbc3ltYm9scy5kcmFnZ2luZ10odmFsdWUpIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzVmFsdWUgPSB0aGlzW3N5bWJvbHMuZHJhZ2dpbmddO1xuICAgICAgdGhpc1tkcmFnZ2luZ1N5bWJvbF0gPSB2YWx1ZTtcbiAgICAgIGlmIChzeW1ib2xzLmRyYWdnaW5nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyW3N5bWJvbHMuZHJhZ2dpbmddID0gdmFsdWU7IH1cbiAgICAgIGlmICh2YWx1ZSAmJiAhcHJldmlvdXNWYWx1ZSkge1xuICAgICAgICAvLyBIYXZlIGJlZ3VuIGEgZHJhZy5cbiAgICAgICAgdGhpc1tyZXNldEFuaW1hdGlvbnNPbk5leHRSZW5kZXJTeW1ib2xdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBbc3ltYm9scy5pdGVtQWRkZWRdKGl0ZW0pIHtcbiAgICAgIC8vIFdlIG1hcmsgbmV3IGl0ZW1zIGluIHRoZSBsaXN0IGFzIGV4cGxpY2l0bHkgdmlzaWJsZSB0byBBUklBLiBPdGhlcndpc2UsXG4gICAgICAvLyB3aGVuIGFuIGl0ZW0gaXNuJ3QgdmlzaWJsZSBvbiB0aGUgc2NyZWVuLCBBUklBIHdpbGwgYXNzdW1lIHRoZSBpdGVtIGlzXG4gICAgICAvLyBvZiBubyBpbnRlcmVzdCB0byB0aGUgdXNlciwgYW5kIGxlYXZlIGl0IG91dCBvZiB0aGUgYWNjZXNzaWJpbGl0eSB0cmVlLlxuICAgICAgLy8gSWYgdGhlIGxpc3QgY29udGFpbnMgMTAgaXRlbXMsIGJ1dCBvbmx5IDMgYXJlIHZpc2libGUsIGEgc2NyZWVuIHJlYWRlclxuICAgICAgLy8gbWlnaHQgdGhlbiBhbm5vdW5jZSB0aGUgbGlzdCBvbmx5IGhhcyAzIGl0ZW1zLiBUbyBlbnN1cmUgdGhhdCBzY3JlZW5cbiAgICAgIC8vIHJlYWRlcnMgYW5kIG90aGVyIGFzc2lzdGl2ZSB0ZWNobm9sb2dpZXMgYW5ub3VuY2UgdGhlIGNvcnJlY3QgdG90YWxcbiAgICAgIC8vIG51bWJlciBvZiBpdGVtcywgd2UgZXhwbGljaXRseSBtYXJrIGFsbCBpdGVtcyBhcyBub3QgaGlkZGVuLiBUaGlzIHdpbGxcbiAgICAgIC8vIGV4cG9zZSB0aGVtIGFsbCBpbiB0aGUgYWNjZXNzaWJpbGl0eSB0cmVlLCBldmVuIHRoZSBpdGVtcyB3aGljaCBhcmVcbiAgICAgIC8vIGN1cnJlbnRseSBub3QgcmVuZGVyZWQuXG4gICAgICAvL1xuICAgICAgLy8gVE9ETzogR2VuZXJhbGx5IHNwZWFraW5nLCB0aGlzIGVudGlyZSBtaXhpbiBhc3N1bWVzIHRoYXQgdGhlIHVzZXIgY2FuXG4gICAgICAvLyBuYXZpZ2F0ZSB0aHJvdWdoIGFsbCBpdGVtcyBpbiBhIGxpc3QuIEJ1dCBhbiBhcHAgY291bGQgc3R5bGUgYW4gaXRlbSBhc1xuICAgICAgLy8gZGlzcGxheTpub25lIG9yIHZpc2liaWxpdHk6aGlkZGVuIGJlY2F1c2UgdGhlIHVzZXIgaXMgbm90IGFsbG93ZWQgdG9cbiAgICAgIC8vIGludGVyYWN0IHdpdGggdGhhdCBpdGVtIGF0IHRoZSBtb21lbnQuIFN1cHBvcnQgZm9yIHRoaXMgc2NlbmFyaW8gc2hvdWxkXG4gICAgICAvLyBiZSBhZGRlZC4gVGhpcyB3b3VsZCBlbnRhaWwgY2hhbmdpbmcgYWxsIGxvY2F0aW9ucyB3aGVyZSBhIG1peGluXG4gICAgICAvLyBmdW5jdGlvbiBpcyBjb3VudGluZyBpdGVtcywgaXRlcmF0aW5nIG92ZXIgdGhlICh2aXNpYmxlKSBpdGVtcywgYW5kXG4gICAgICAvLyBzaG93aW5nIG9yIGhpZGluZyBpdGVtcy4gQW1vbmcgb3RoZXIgdGhpbmdzLCB0aGUgY29kZSBiZWxvdyB0byBtYWtlXG4gICAgICAvLyBpdGVtcyB2aXNpYmxlIHRvIEFSSUEgd291bGQgbmVlZCB0byBkaXNjcmltaW5hdGUgYmV0d2VlbiBpdGVtcyB3aGljaFxuICAgICAgLy8gYXJlIGludmlzaWJsZSBiZWNhdXNlIG9mIGFuaW1hdGlvbiBzdGF0ZSwgb3IgaW52aXNpYmxlIGJlY2F1c2UgdGhlIHVzZXJcbiAgICAgIC8vIHNob3VsZG4ndCBpbnRlcmFjdCB3aXRoIHRoZW0uXG4gICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgW3N5bWJvbHMuaXRlbXNDaGFuZ2VkXSgpIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLml0ZW1zQ2hhbmdlZF0pIHsgc3VwZXJbc3ltYm9scy5pdGVtc0NoYW5nZWRdKCk7IH1cblxuICAgICAgcmVzZXRBbmltYXRpb25zKHRoaXMpO1xuXG4gICAgICAvLyBUT0RPOiBBbHNvIHJlc2V0IG91ciBub3Rpb24gb2YgdGhlIGxhc3QgcmVuZGVyZWQgc2VsZWN0aW9uPyBUaGlzIGNvbWVzXG4gICAgICAvLyB1cCB3aGVuIGEgRE9NIHJlbW92YWwgY2F1c2VzIHRoZSBzZWxlY3RlZCBpdGVtIHRvIGNoYW5nZSBwb3NpdGlvbi5cbiAgICAgIC8vIHRoaXNbcHJldmlvdXNTZWxlY3Rpb25TeW1ib2xdID0gbnVsbDtcblxuICAgICAgcmVuZGVyU2VsZWN0aW9uKHRoaXMpO1xuICAgIH1cblxuICAgIHJlc2V0QW5pbWF0aW9ucygpIHtcbiAgICAgIHJlc2V0QW5pbWF0aW9ucyh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIGZyYWN0aW9uYWwgdmFsdWUgaW5kaWNhdGluZyBob3cgZmFyIHRoZSB1c2VyIGhhcyBjdXJyZW50bHkgYWR2YW5jZWQgdG9cbiAgICAgKiB0aGUgbmV4dC9wcmV2aW91cyBpdGVtLiBFLmcuLCBhIGBzZWxlY3RlZEZyYWN0aW9uYCBvZiAzLjUgaW5kaWNhdGVzIHRoZVxuICAgICAqIHVzZXIgaXMgaGFsZndheSBiZXR3ZWVuIGl0ZW1zIDMgYW5kIDQuXG4gICAgICpcbiAgICAgKiBGb3IgbW9yZSBkZXRhaWxzLCBzZWUgW0ZyYWN0aW9uYWxTZWxlY3Rpb25NaXhpbl0oRnJhY3Rpb25hbFNlbGVjdGlvbk1peGluLm1kKVxuICAgICAqIG1peGluLlxuICAgICAqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0ZWRGcmFjdGlvbigpIHtcbiAgICAgIHJldHVybiBzdXBlci5zZWxlY3RlZEZyYWN0aW9uIHx8IDA7XG4gICAgfVxuICAgIHNldCBzZWxlY3RlZEZyYWN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoJ3NlbGVjdGVkRnJhY3Rpb24nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkRnJhY3Rpb24gPSB2YWx1ZTsgfVxuICAgICAgcmVuZGVyU2VsZWN0aW9uKHRoaXMsIHRoaXMuc2VsZWN0ZWRJbmRleCwgdmFsdWUpO1xuICAgIH1cblxuICAgIGdldCBzZWxlY3RlZEluZGV4KCkge1xuICAgICAgcmV0dXJuIHN1cGVyLnNlbGVjdGVkSW5kZXg7XG4gICAgfVxuICAgIHNldCBzZWxlY3RlZEluZGV4KGluZGV4KSB7XG4gICAgICBpZiAoJ3NlbGVjdGVkSW5kZXgnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkSW5kZXggPSBpbmRleDsgfVxuICAgICAgcmVuZGVyU2VsZWN0aW9uKHRoaXMsIGluZGV4LCAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZHVyYXRpb24gb2YgYSBzZWxlY3Rpb24gYW5pbWF0aW9uIGluIG1pbGxpc2Vjb25kcy5cbiAgICAgKlxuICAgICAqIFRoaXMgbWVhc3VyZXMgdGhlIGFtb3VudCBvZiB0aW1lIHJlcXVpcmVkIGZvciBhIHNlbGVjdGlvbiBhbmltYXRpb24gdG9cbiAgICAgKiBjb21wbGV0ZS4gVGhpcyBudW1iZXIgcmVtYWlucyBjb25zdGFudCwgZXZlbiBpZiB0aGUgbnVtYmVyIG9mIGl0ZW1zIGJlaW5nXG4gICAgICogYW5pbWF0ZWQgaW5jcmVhc2VzLlxuICAgICAqXG4gICAgICogVGhlIGRlZmF1bHQgdmFsdWUgaXMgMjUwIG1pbGxpc2Vjb25kcyAoYSBxdWFydGVyIGEgc2Vjb25kKS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQGRlZmF1bHQgMjUwXG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGlvbkFuaW1hdGlvbkR1cmF0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXNbc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb25TeW1ib2xdO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb24odmFsdWUpIHtcbiAgICAgIHRoaXNbc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb25TeW1ib2xdID0gdmFsdWU7XG4gICAgICBpZiAoJ3NlbGVjdGlvbkFuaW1hdGlvbkR1cmF0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvbiA9IHZhbHVlOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIG5hbWUgb2YgYSBzdGFuZGFyZCBzZWxlY3Rpb24gYW5pbWF0aW9uIGVmZmVjdC5cbiAgICAgKlxuICAgICAqIFRoaXMgaXMgYSBzaG9ydGhhbmQgZm9yIHNldHRpbmcgdGhlIGBzZWxlY3Rpb25BbmltYXRpb25LZXlmcmFtZXNgXG4gICAgICogcHJvcGVydHkgdG8gc3RhbmRhcmQga2V5ZnJhbWVzLiBTdXBwb3J0ZWQgc3RyaW5nIHZhbHVlczpcbiAgICAgKlxuICAgICAqICogXCJjcm9zc2ZhZGVcIlxuICAgICAqICogXCJyZXZlYWxcIlxuICAgICAqICogXCJyZXZlYWxXaXRoRmFkZVwiXG4gICAgICogKiBcInNob3dBZGphY2VudFwiXG4gICAgICogKiBcInNsaWRlXCJcbiAgICAgKiAqIFwic2xpZGVXaXRoR2FwXCJcbiAgICAgKlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQGRlZmF1bHQgXCJzbGlkZVwiXG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGlvbkFuaW1hdGlvbkVmZmVjdCgpIHtcbiAgICAgIHJldHVybiB0aGlzW3NlbGVjdGlvbkFuaW1hdGlvbkVmZmVjdFN5bWJvbF07XG4gICAgfVxuICAgIHNldCBzZWxlY3Rpb25BbmltYXRpb25FZmZlY3QodmFsdWUpIHtcbiAgICAgIHRoaXNbc2VsZWN0aW9uQW5pbWF0aW9uRWZmZWN0U3ltYm9sXSA9IHZhbHVlO1xuICAgICAgaWYgKCdzZWxlY3Rpb25BbmltYXRpb25FZmZlY3QnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGlvbkFuaW1hdGlvbkVmZmVjdCA9IHZhbHVlOyB9XG4gICAgICB0aGlzLnNlbGVjdGlvbkFuaW1hdGlvbktleWZyYW1lcyA9IG1peGluLnN0YW5kYXJkRWZmZWN0S2V5ZnJhbWVzW3ZhbHVlXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUga2V5ZnJhbWVzIHRoYXQgZGVmaW5lIGFuIGFuaW1hdGlvbiB0aGF0IHBsYXlzIGZvciBhbiBpdGVtIHdoZW4gbW92aW5nXG4gICAgICogZm9yd2FyZCBpbiB0aGUgc2VxdWVuY2UuXG4gICAgICpcbiAgICAgKiBUaGlzIGlzIGFuIGFycmF5IG9mIENTUyBydWxlcyB0aGF0IHdpbGwgYmUgYXBwbGllZC4gVGhlc2UgYXJlIHVzZWQgYXNcbiAgICAgKiBba2V5ZnJhbWVzXShodHRwOi8vdzNjLmdpdGh1Yi5pby93ZWItYW5pbWF0aW9ucy8ja2V5ZnJhbWVzLXNlY3Rpb24pXG4gICAgICogdG8gYW5pbWF0ZSB0aGUgaXRlbSB3aXRoIHRoZVxuICAgICAqIFtXZWIgQW5pbWF0aW9ucyBBUEldKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9hbmltYXRpb24pLlxuICAgICAqXG4gICAgICogVGhlIGFuaW1hdGlvbiByZXByZXNlbnRzIHRoZSBzdGF0ZSBvZiB0aGUgbmV4dCBpdGVtIGFzIGl0IG1vdmVzIGZyb21cbiAgICAgKiBjb21wbGV0ZWx5IHVuc2VsZWN0ZWQgKG9mZnN0YWdlLCB1c3VhbGx5IHJpZ2h0KSwgdG8gc2VsZWN0ZWQgKGNlbnRlclxuICAgICAqIHN0YWdlKSwgdG8gY29tcGxldGVseSB1bnNlbGVjdGVkIChvZmZzdGFnZSwgdXN1YWxseSBsZWZ0KS4gVGhlIGNlbnRlciB0aW1lXG4gICAgICogb2YgdGhlIGFuaW1hdGlvbiBzaG91bGQgY29ycmVzcG9uZCB0byB0aGUgaXRlbSdzIHF1aXNjZW50IHNlbGVjdGVkIHN0YXRlLFxuICAgICAqIHR5cGljYWxseSBpbiB0aGUgY2VudGVyIG9mIHRoZSBzdGFnZSBhbmQgYXQgdGhlIGl0ZW0ncyBsYXJnZXN0IHNpemUuXG4gICAgICpcbiAgICAgKiBUaGUgZGVmYXVsdCBmb3J3YXJkIGFuaW1hdGlvbiBpcyBhIHNtb290aCBzbGlkZSBhdCBmdWxsIHNpemUgZnJvbSByaWdodCB0b1xuICAgICAqIGxlZnQuXG4gICAgICpcbiAgICAgKiBXaGVuIG1vdmluZyB0aGUgc2VsZWN0aW9uIGJhY2t3YXJkLCB0aGlzIGFuaW1hdGlvbiBpcyBwbGF5ZWQgaW4gcmV2ZXJzZS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtjc3NSdWxlc1tdfVxuICAgICAqL1xuICAgIGdldCBzZWxlY3Rpb25BbmltYXRpb25LZXlmcmFtZXMoKSB7XG4gICAgICAvLyBTdGFuZGFyZCBhbmltYXRpb24gc2xpZGVzIGxlZnQvcmlnaHQsIGtlZXBzIGFkamFjZW50IGl0ZW1zIG91dCBvZiB2aWV3LlxuICAgICAgcmV0dXJuIHRoaXNbc2VsZWN0aW9uQW5pbWF0aW9uS2V5ZnJhbWVzU3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGlvbkFuaW1hdGlvbktleWZyYW1lcyh2YWx1ZSkge1xuICAgICAgdGhpc1tzZWxlY3Rpb25BbmltYXRpb25LZXlmcmFtZXNTeW1ib2xdID0gdmFsdWU7XG4gICAgICBpZiAoJ3NlbGVjdGlvbkFuaW1hdGlvbktleWZyYW1lcycgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0aW9uQW5pbWF0aW9uS2V5ZnJhbWVzID0gdmFsdWU7IH1cbiAgICAgIHJlc2V0QW5pbWF0aW9ucyh0aGlzKTtcbiAgICAgIHJlbmRlclNlbGVjdGlvbih0aGlzKTtcbiAgICB9XG5cbiAgICBnZXQgc2VsZWN0aW9uV3JhcHMoKSB7XG4gICAgICByZXR1cm4gc3VwZXIuc2VsZWN0aW9uV3JhcHM7XG4gICAgfVxuICAgIHNldCBzZWxlY3Rpb25XcmFwcyh2YWx1ZSkge1xuICAgICAgaWYgKCdzZWxlY3Rpb25XcmFwcycgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0aW9uV3JhcHMgPSB2YWx1ZTsgfVxuICAgICAgcmVzZXRBbmltYXRpb25zKHRoaXMpO1xuICAgICAgcmVuZGVyU2VsZWN0aW9uKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBTZWxlY3Rpb25BbmltYXRpb247XG59XG5cblxuLy8gV2UgZXhwb3NlIGhlbHBlcnMgb24gdGhlIG1peGluIGZ1bmN0aW9uIHRoYXQgd2Ugd2FudCB0byBiZSBhYmxlIHRvIHVuaXQgdGVzdC5cbi8vIFNpbmNlIHRoZXNlIGFyZSBvbiB0aGUgZnVuY3Rpb24sIG5vdCBvbiB0aGUgY2xhc3MgZW1pdHRlZCBieSB0aGUgZnVuY3Rpb24sXG4vLyB0aGV5IGRvbid0IGVuZCB1cCBnZXR0aW5nIGV4cG9zZWQgb24gYWN0dWFsIGVsZW1lbnQgaW5zdGFuY2VzLlxubWl4aW4uaGVscGVycyA9IHtcblxuICAvKlxuICAgKiBDYWxjdWxhdGUgdGhlIGFuaW1hdGlvbiBmcmFjdGlvbnMgZm9yIGFuIGVsZW1lbnQncyBpdGVtcyBhdCB0aGUgZ2l2ZW5cbiAgICogc2VsZWN0aW9uIHBvaW50LiBUaGlzIGlzIHVzZWQgd2hlbiByZW5kZXJpbmcgdGhlIGVsZW1lbnQncyBzZWxlY3Rpb24gc3RhdGVcbiAgICogaW5zdGFudGFuZW91c2x5LlxuICAgKlxuICAgKiBUaGlzIGZ1bmN0aW9uIGNvbnNpZGVycyB0aGUgc2VsZWN0ZWRJbmRleCBwYXJhbWV0ZXIsIHdoaWNoIGNhbiBiZSBhIHdob2xlXG4gICAqIG9yIGZyYWN0aW9uYWwgbnVtYmVyLCBhbmQgZGV0ZXJtaW5lcyB3aGljaCBpdGVtcyB3aWxsIGJlIHZpc2libGUgYXQgdGhhdFxuICAgKiBpbmRleC4gVGhpcyBmdW5jdGlvbiB0aGVuIGNhbGN1bGF0ZXMgYSBjb3JyZXNwb25kaW5nIGFuaW1hdGlvbiBmcmFjdGlvbjogYVxuICAgKiBudW1iZXIgYmV0d2VlbiAwIGFuZCAxIGluZGljYXRpbmcgaG93IGZhciB0aHJvdWdoIHRoZSBzZWxlY3Rpb24gYW5pbWF0aW9uXG4gICAqIGFuIGl0ZW0gc2hvdWxkIGJlIHNob3duLCBvciBudWxsIGlmIHRoZSBpdGVtIHNob3VsZCBub3QgYmUgdmlzaWJsZSBhdCB0aGF0XG4gICAqIHNlbGVjdGlvbiBpbmRleC4gVGhlc2UgZnJhY3Rpb25zIGFyZSByZXR1cm5lZCBhcyBhbiBhcnJheSwgd2hlcmUgdGhlXG4gICAqIGFuaW1hdGlvbiBmcmFjdGlvbiBhdCBwb3NpdGlvbiBOIGNvcnJlc3BvbmRzIHRvIGhvdyBpdGVtIE4gc2hvdWxkIGJlIHNob3duLlxuICAgKi9cbiAgYW5pbWF0aW9uRnJhY3Rpb25zRm9yU2VsZWN0aW9uKGVsZW1lbnQsIHNlbGVjdGlvbikge1xuXG4gICAgY29uc3QgaXRlbXMgPSBlbGVtZW50Lml0ZW1zO1xuICAgIGlmICghaXRlbXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBpdGVtQ291bnQgPSBpdGVtcy5sZW5ndGg7XG4gICAgY29uc3Qgc2VsZWN0aW9uV3JhcHMgPSBlbGVtZW50LnNlbGVjdGlvbldyYXBzO1xuXG4gICAgcmV0dXJuIGl0ZW1zLm1hcCgoaXRlbSwgaXRlbUluZGV4KSA9PiB7XG4gICAgICAvLyBIb3cgbWFueSBzdGVwcyBmcm9tIHRoZSBzZWxlY3Rpb24gcG9pbnQgdG8gdGhpcyBpdGVtP1xuICAgICAgY29uc3Qgc3RlcHMgPSBzdGVwc1RvSW5kZXgoaXRlbUNvdW50LCBzZWxlY3Rpb25XcmFwcywgc2VsZWN0aW9uLCBpdGVtSW5kZXgpO1xuICAgICAgLy8gVG8gY29udmVydCBzdGVwcyB0byBhbmltYXRpb24gZnJhY3Rpb246XG4gICAgICAvLyBzdGVwcyAgICAgIGFuaW1hdGlvbiBmcmFjdGlvblxuICAgICAgLy8gIDEgICAgICAgICAwICAgICAoc3RhZ2UgcmlnaHQpXG4gICAgICAvLyAgMCAgICAgICAgIDAuNSAgIChjZW50ZXIgc3RhZ2UpXG4gICAgICAvLyAtMSAgICAgICAgIDEgICAgIChzdGFnZSBsZWZ0KVxuICAgICAgY29uc3QgYW5pbWF0aW9uRnJhY3Rpb24gPSAoMSAtIHN0ZXBzKSAvIDI7XG4gICAgICByZXR1cm4gKGFuaW1hdGlvbkZyYWN0aW9uID49IDAgJiYgYW5pbWF0aW9uRnJhY3Rpb24gPD0gMSkgP1xuICAgICAgICBhbmltYXRpb25GcmFjdGlvbiA6XG4gICAgICAgIG51bGw7IC8vIE91dHNpZGUgYW5pbWF0aW9uIHJhbmdlXG4gICAgfSk7XG4gIH0sXG5cbiAgLypcbiAgICogQ2FsY3VsYXRlIHRoZSBhbmltYXRpb24gdGltaW5ncyB0aGF0IHNob3VsZCBiZSB1c2VkIHRvIHNtb290aGx5IGFuaW1hdGUgdGhlXG4gICAqIGVsZW1lbnQncyBpdGVtcyBmcm9tIG9uZSBzZWxlY3Rpb24gc3RhdGUgdG8gYW5vdGhlci5cbiAgICpcbiAgICogVGhpcyByZXR1cm5zIGFuIGFycmF5IG9mIHRpbWluZ3MsIHdoZXJlIHRoZSB0aW1pbmcgYXQgcG9zaXRpb24gTiBzaG91bGQgYmVcbiAgICogdXNlZCB0byBhbmltYXRlIGl0ZW0gTi4gSWYgYW4gaXRlbSdzIHRpbWluZyBpcyBudWxsLCB0aGVuIHRoYXQgaXRlbSBzaG91bGRcbiAgICogbm90IHRha2UgcGxhY2UgaW4gdGhlIGFuaW1hdGlvbiwgYW5kIHNob3VsZCBiZSBoaWRkZW4gaW5zdGVhZC5cbiAgICovXG4gIGVmZmVjdFRpbWluZ3NGb3JTZWxlY3Rpb25BbmltYXRpb24oZWxlbWVudCwgZnJvbVNlbGVjdGlvbiwgdG9TZWxlY3Rpb24pIHtcblxuICAgIGNvbnN0IGl0ZW1zID0gZWxlbWVudC5pdGVtcztcbiAgICBpZiAoIWl0ZW1zKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGl0ZW1Db3VudCA9IGl0ZW1zLmxlbmd0aDtcbiAgICBjb25zdCBzZWxlY3Rpb25XcmFwcyA9IGVsZW1lbnQuc2VsZWN0aW9uV3JhcHM7XG4gICAgY29uc3QgdG9JbmRleCA9IEZyYWN0aW9uYWxTZWxlY3Rpb25NaXhpbi5oZWxwZXJzLndyYXBwZWRTZWxlY3Rpb25QYXJ0cyh0b1NlbGVjdGlvbiwgaXRlbUNvdW50LCBzZWxlY3Rpb25XcmFwcykuaW5kZXg7XG4gICAgY29uc3QgdG90YWxTdGVwcyA9IHN0ZXBzVG9JbmRleChpdGVtQ291bnQsIHNlbGVjdGlvbldyYXBzLCBmcm9tU2VsZWN0aW9uLCB0b1NlbGVjdGlvbik7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gdG90YWxTdGVwcyA+PSAwID8gJ25vcm1hbCc6ICdyZXZlcnNlJztcbiAgICBjb25zdCBmaWxsID0gJ2JvdGgnO1xuICAgIGNvbnN0IHRvdGFsRHVyYXRpb24gPSBlbGVtZW50LnNlbGVjdGlvbkFuaW1hdGlvbkR1cmF0aW9uO1xuICAgIGNvbnN0IHN0ZXBEdXJhdGlvbiA9IHRvdGFsU3RlcHMgIT09IDAgP1xuICAgICAgdG90YWxEdXJhdGlvbiAqIDIgLyBNYXRoLmNlaWwoTWF0aC5hYnModG90YWxTdGVwcykpIDpcbiAgICAgIDA7ICAvLyBObyBzdGVwcyByZXF1aXJlZCwgYW5pbWF0aW9uIHdpbGwgYmUgaW5zdGFudGVub3VzLlxuXG4gICAgY29uc3QgdGltaW5ncyA9IGl0ZW1zLm1hcCgoaXRlbSwgaXRlbUluZGV4KSA9PiB7XG4gICAgICBjb25zdCBzdGVwcyA9IHN0ZXBzVG9JbmRleChpdGVtQ291bnQsIHNlbGVjdGlvbldyYXBzLCBpdGVtSW5kZXgsIHRvU2VsZWN0aW9uKTtcbiAgICAgIC8vIElmIHdlIGluY2x1ZGUgdGhpcyBpdGVtIGluIHRoZSBzdGFnZ2VyZWQgc2VxdWVuY2Ugb2YgYW5pbWF0aW9ucyB3ZSdyZVxuICAgICAgLy8gY3JlYXRpbmcsIHdoZXJlIHdvdWxkIHRoZSBpdGVtIGFwcGVhciBpbiB0aGUgc2VxdWVuY2U/XG4gICAgICBsZXQgcG9zaXRpb25JblNlcXVlbmNlID0gdG90YWxTdGVwcyAtIHN0ZXBzO1xuICAgICAgaWYgKHRvdGFsU3RlcHMgPCAwKSB7XG4gICAgICAgIHBvc2l0aW9uSW5TZXF1ZW5jZSA9IC1wb3NpdGlvbkluU2VxdWVuY2U7XG4gICAgICB9XG4gICAgICAvLyBTbywgaXMgdGhpcyBpdGVtIHJlYWxseSBpbmNsdWRlZCBpbiB0aGUgc2VxdWVuY2U/XG4gICAgICBpZiAoTWF0aC5jZWlsKHBvc2l0aW9uSW5TZXF1ZW5jZSkgPj0gMCAmJiBwb3NpdGlvbkluU2VxdWVuY2UgPD0gTWF0aC5hYnModG90YWxTdGVwcykpIHtcbiAgICAgICAgLy8gTm90ZSB0aGF0IGRlbGF5IGZvciBmaXJzdCBpdGVtIHdpbGwgYmUgbmVnYXRpdmUuIFRoYXQgd2lsbCBjYXVzZVxuICAgICAgICAvLyB0aGUgYW5pbWF0aW9uIHRvIHN0YXJ0IGhhbGZ3YXkgdGhyb3VnaCwgd2hpY2ggaXMgd2hhdCB3ZSB3YW50LlxuICAgICAgICBjb25zdCBkZWxheSA9IHN0ZXBEdXJhdGlvbiAqIChwb3NpdGlvbkluU2VxdWVuY2UgLSAxKS8yO1xuICAgICAgICBjb25zdCBlbmREZWxheSA9IGl0ZW1JbmRleCA9PT0gdG9JbmRleCA/XG4gICAgICAgICAgLXN0ZXBEdXJhdGlvbi8yIDogICAvLyBTdG9wIGhhbGZ3YXkgdGhyb3VnaC5cbiAgICAgICAgICAwOyAgICAgICAgICAgICAgLy8gUGxheSBhbmltYXRpb24gdW50aWwgZW5kLlxuICAgICAgICByZXR1cm4geyBkdXJhdGlvbjogc3RlcER1cmF0aW9uLCBkaXJlY3Rpb24sIGZpbGwsIGRlbGF5LCBlbmREZWxheSB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGltaW5ncztcbiAgfVxuXG59O1xuXG5cbi8vIEtleWZyYW1lcyBmb3Igc3RhbmRhcmQgc2VsZWN0aW9uIGFuaW1hdGlvbiBlZmZlY3RzLlxubWl4aW4uc3RhbmRhcmRFZmZlY3RLZXlmcmFtZXMgPSB7XG5cbiAgLy8gU2ltcGxlIGNyb3NzZmFkZVxuICBjcm9zc2ZhZGU6IFtcbiAgICB7IG9wYWNpdHk6IDAgfSxcbiAgICB7IG9wYWNpdHk6IDEgfSxcbiAgICB7IG9wYWNpdHk6IDAgfVxuICBdLFxuXG4gIC8vIFJldmVhbCwgYXMgaWYgc2xpZGluZyB0aGUgdG9wIGNhcmQgb2ZmIGEgZGVjayBvZiBjYXJkc1xuICByZXZlYWw6IFtcbiAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCUpJywgekluZGV4OiAwIH0sXG4gICAgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDAlKScsIHpJbmRleDogMSB9LFxuICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtMTAwJSknLCB6SW5kZXg6IDIgfVxuICBdLFxuXG4gIC8vIEdvb2dsZSBQaG90b3Mtc3R5bGUgcmV2ZWFsLXdpdGgtZmFkZSBhbmltYXRpb25cbiAgcmV2ZWFsV2l0aEZhZGU6IFtcbiAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCUpIHNjYWxlKDAuNzUpJywgb3BhY2l0eTogMCwgekluZGV4OiAwIH0sXG4gICAgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDAlKSBzY2FsZSgxLjApJywgb3BhY2l0eTogMSwgekluZGV4OiAxIH0sXG4gICAgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC0xMDAlKSBzY2FsZSgxLjApJywgb3BhY2l0eTogMSwgekluZGV4OiAyIH1cbiAgXSxcblxuICAvLyBDYXJvdXNlbCB2YXJpYW50IHdpdGggYSBiaXQgb2Ygb2ZmLXN0YWdlIGVsZW1lbnRzIHNob3dpbmdcbiAgc2hvd0FkamFjZW50OiBbXG4gICAgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDc4JSkgc2NhbGUoMC43KScsIHpJbmRleDogMCB9LFxuICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwJSkgc2NhbGUoMC44MiknLCB6SW5kZXg6IDEgfSxcbiAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTc4JSkgc2NhbGUoMC43KScsIHpJbmRleDogMCB9XG4gIF0sXG5cbiAgLy8gU2ltcGxlIHNsaWRlXG4gIHNsaWRlOiBbXG4gICAgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDEwMCUpJyB9LFxuICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtMTAwJSknIH1cbiAgXSxcblxuICAvLyBTbGlkZSwgd2l0aCBhIGdhcCBiZXR3ZWVuXG4gIHNsaWRlV2l0aEdhcDogW1xuICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgxMTAlKScgfSxcbiAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTExMCUpJyB9XG4gIF1cblxufTtcblxuXG4vKlxuICogU21vb3RobHkgYW5pbWF0ZSB0aGUgc2VsZWN0aW9uIGJldHdlZW4gdGhlIGluZGljYXRlZCBcImZyb21cIiBhbmQgXCJ0b1wiXG4gKiBpbmRpY2VzLiBUaGUgZm9ybWVyIGNhbiBiZSBhIGZyYWN0aW9uLCBlLmcuLCB3aGVuIHRoZSB1c2VyIHJlbGVhc2VzIGEgZmluZ2VyXG4gKiB0byBjb21wbGV0ZSBhIHRvdWNoIGRyYWcsIGFuZCB0aGUgc2VsZWN0aW9uIHdpbGwgc25hcCB0byB0aGUgY2xvc2VzdCB3aG9sZVxuICogaW5kZXguXG4gKi9cbmZ1bmN0aW9uIGFuaW1hdGVTZWxlY3Rpb24oZWxlbWVudCwgZnJvbVNlbGVjdGlvbiwgdG9TZWxlY3Rpb24pIHtcblxuICByZXNldEFuaW1hdGlvbnMoZWxlbWVudCk7XG5cbiAgLy8gQ2FsY3VsYXRlIHRoZSBhbmltYXRpb24gdGltaW5ncy5cbiAgY29uc3QgaXRlbXMgPSBlbGVtZW50Lml0ZW1zO1xuICBjb25zdCBrZXlmcmFtZXMgPSBlbGVtZW50LnNlbGVjdGlvbkFuaW1hdGlvbktleWZyYW1lcztcbiAgZWxlbWVudFtwbGF5aW5nQW5pbWF0aW9uU3ltYm9sXSA9IHRydWU7XG4gIGNvbnN0IHRpbWluZ3MgPSBtaXhpbi5oZWxwZXJzLmVmZmVjdFRpbWluZ3NGb3JTZWxlY3Rpb25BbmltYXRpb24oZWxlbWVudCwgZnJvbVNlbGVjdGlvbiwgdG9TZWxlY3Rpb24pO1xuXG4gIC8vIEZpZ3VyZSBvdXQgd2hpY2ggaXRlbSB3aWxsIGJlIHRoZSBvbmUgKmFmdGVyKiB0aGUgb25lIHdlJ3JlIHNlbGVjdGluZy5cbiAgY29uc3QgaXRlbUNvdW50ID0gaXRlbXMubGVuZ3RoO1xuICBjb25zdCBzZWxlY3Rpb25XcmFwcyA9IGVsZW1lbnQuc2VsZWN0aW9uV3JhcHM7XG4gIGNvbnN0IHNlbGVjdGlvbkluZGV4ID0gRnJhY3Rpb25hbFNlbGVjdGlvbk1peGluLmhlbHBlcnMuc2VsZWN0aW9uUGFydHModG9TZWxlY3Rpb24sIGl0ZW1Db3VudCwgc2VsZWN0aW9uV3JhcHMpLmluZGV4O1xuICBjb25zdCB0b3RhbFN0ZXBzID0gc3RlcHNUb0luZGV4KGl0ZW1Db3VudCwgc2VsZWN0aW9uV3JhcHMsIGZyb21TZWxlY3Rpb24sIHRvU2VsZWN0aW9uKTtcbiAgY29uc3QgZm9yd2FyZCA9IHRvdGFsU3RlcHMgPj0gMDtcbiAgbGV0IG5leHRVcEluZGV4ID0gc2VsZWN0aW9uSW5kZXggKyAoZm9yd2FyZCA/IDEgOiAtIDEpO1xuICBpZiAoc2VsZWN0aW9uV3JhcHMpIHtcbiAgICBuZXh0VXBJbmRleCA9IEZyYWN0aW9uYWxTZWxlY3Rpb25NaXhpbi5oZWxwZXJzLndyYXBwZWRTZWxlY3Rpb24obmV4dFVwSW5kZXgsIGl0ZW1Db3VudCk7XG4gIH0gZWxzZSBpZiAoIWlzSXRlbUluZGV4SW5Cb3VuZHMoZWxlbWVudCwgbmV4dFVwSW5kZXgpKSB7XG4gICAgbmV4dFVwSW5kZXggPSBudWxsOyAvLyBBdCBzdGFydC9lbmQgb2YgbGlzdDsgZG9uJ3QgaGF2ZSBhIG5leHQgaXRlbSB0byBzaG93LlxuICB9XG5cbiAgLy8gUGxheSB0aGUgYW5pbWF0aW9ucyB1c2luZyB0aG9zZSB0aW1pbmdzLlxuICBsZXQgbGFzdEFuaW1hdGlvbkRldGFpbHM7XG4gIHRpbWluZ3MuZm9yRWFjaCgodGltaW5nLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGl0ZW0gPSBpdGVtc1tpbmRleF07XG4gICAgaWYgKHRpbWluZykge1xuICAgICAgc2hvd0l0ZW0oaXRlbSwgdHJ1ZSk7XG4gICAgICBjb25zdCBhbmltYXRpb24gPSBpdGVtLmFuaW1hdGUoa2V5ZnJhbWVzLCB0aW1pbmcpO1xuICAgICAgZWxlbWVudFthbmltYXRpb25TeW1ib2xdW2luZGV4XSA9IGFuaW1hdGlvbjtcbiAgICAgIGlmIChpbmRleCA9PT0gbmV4dFVwSW5kZXgpIHtcbiAgICAgICAgLy8gVGhpcyBpdGVtIHdpbGwgYmUgYW5pbWF0ZWQsIHNvIHdpbGwgYWxyZWFkeSBiZSBpbiB0aGUgZGVzaXJlZCBzdGF0ZVxuICAgICAgICAvLyBhZnRlciB0aGUgYW5pbWF0aW9uIGNvbXBsZXRlcy5cbiAgICAgICAgbmV4dFVwSW5kZXggPSBudWxsO1xuICAgICAgfVxuICAgICAgaWYgKHRpbWluZy5lbmREZWxheSAhPT0gMCkge1xuICAgICAgICAvLyBUaGlzIGlzIHRoZSBhbmltYXRpb24gZm9yIHRoZSBpdGVtIHRoYXQgd2lsbCBiZSBsZWZ0IHNlbGVjdGVkLlxuICAgICAgICAvLyBXZSB3YW50IHRvIGNsZWFuIHVwIHdoZW4gdGhpcyBhbmltYXRpb24gY29tcGxldGVzLlxuICAgICAgICBsYXN0QW5pbWF0aW9uRGV0YWlscyA9IHsgYW5pbWF0aW9uLCBpbmRleCwgdGltaW5nLCBmb3J3YXJkIH07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRoaXMgaXRlbSBkb2Vzbid0IHBhcnRpY2lwYXRlIGluIHRoZSBhbmltYXRpb24uXG4gICAgICBzaG93SXRlbShpdGVtLCBmYWxzZSk7XG4gICAgfVxuICB9KTtcblxuICBpZiAobGFzdEFuaW1hdGlvbkRldGFpbHMgIT0gbnVsbCkge1xuICAgIC8vIEFycmFuZ2UgZm9yIGNsZWFuLXVwIHdvcmsgdG8gYmUgcGVyZm9ybWVkLlxuICAgIGxhc3RBbmltYXRpb25EZXRhaWxzLm5leHRVcEluZGV4ID0gbmV4dFVwSW5kZXg7XG4gICAgbGFzdEFuaW1hdGlvbkRldGFpbHMuYW5pbWF0aW9uLm9uZmluaXNoID0gZXZlbnQgPT4gc2VsZWN0aW9uQW5pbWF0aW9uRmluaXNoZWQoZWxlbWVudCwgbGFzdEFuaW1hdGlvbkRldGFpbHMpO1xuICAgIGVsZW1lbnRbbGFzdEFuaW1hdGlvblN5bWJvbF0gPSBsYXN0QW5pbWF0aW9uRGV0YWlscy5hbmltYXRpb247XG4gIH0gZWxzZSB7XG4gICAgLy8gU2hvdWxkbid0IGhhcHBlbiAtLSB3ZSBzaG91bGQgYWx3YXlzIGhhdmUgYXQgbGVhc3Qgb25lIGFuaW1hdGlvbi5cbiAgICBlbGVtZW50W3BsYXlpbmdBbmltYXRpb25TeW1ib2xdID0gZmFsc2U7XG4gIH1cbn1cblxuXG5mdW5jdGlvbiBnZXRBbmltYXRpb25Gb3JJdGVtSW5kZXgoZWxlbWVudCwgaW5kZXgpIHtcbiAgaWYgKGVsZW1lbnRbYW5pbWF0aW9uU3ltYm9sXSA9PSBudWxsKSB7XG4gICAgLy8gTm90IHJlYWR5IHlldDtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBsZXQgYW5pbWF0aW9uID0gZWxlbWVudFthbmltYXRpb25TeW1ib2xdW2luZGV4XTtcbiAgaWYgKCFhbmltYXRpb24pIHtcbiAgICBjb25zdCBpdGVtID0gZWxlbWVudC5pdGVtc1tpbmRleF07XG4gICAgYW5pbWF0aW9uID0gaXRlbS5hbmltYXRlKGVsZW1lbnQuc2VsZWN0aW9uQW5pbWF0aW9uS2V5ZnJhbWVzLCB7XG4gICAgICBkdXJhdGlvbjogZWxlbWVudC5zZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvbixcbiAgICAgIGZpbGw6ICdib3RoJ1xuICAgIH0pO1xuICAgIGFuaW1hdGlvbi5wYXVzZSgpO1xuICAgIGVsZW1lbnRbYW5pbWF0aW9uU3ltYm9sXVtpbmRleF0gPSBhbmltYXRpb247XG4gIH1cbiAgcmV0dXJuIGFuaW1hdGlvbjtcbn1cblxuZnVuY3Rpb24gaXNJdGVtSW5kZXhJbkJvdW5kcyhlbGVtZW50LCBpbmRleCkge1xuICByZXR1cm4gaW5kZXggPj0gMCAmJiBlbGVtZW50Lml0ZW1zICYmIGluZGV4IDwgZWxlbWVudC5pdGVtcy5sZW5ndGg7XG59XG5cbi8qXG4gKiBSZW5kZXIgdGhlIHNlbGVjdGlvbiBzdGF0ZSBvZiB0aGUgZWxlbWVudC5cbiAqXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIHJlLXJlbmRlciBhIHByZXZpb3VzIHNlbGVjdGlvbiBzdGF0ZSAoaWYgdGhlXG4gKiBzZWxlY3RlZEluZGV4IHBhcmFtIGlzIG9taXR0ZWQpLCByZW5kZXIgdGhlIHNlbGVjdGlvbiBpbnN0YW50bHkgYXQgYSBnaXZlblxuICogd2hvbGUgb3IgZnJhY3Rpb25hbCBzZWxlY3Rpb24gaW5kZXgsIG9yIGFuaW1hdGUgdG8gYSBnaXZlbiBzZWxlY3Rpb24gaW5kZXguXG4gKlxuICogVGhlcmUgYXJlIHNldmVyYWwgZGlzdGluY3Qgc2NlbmFyaW9zIHdlIG5lZWQgdG8gY292ZXI6XG4gKlxuICogMS4gSW5pdGlhbCBwb3NpdGlvbmluZywgb3IgcmVwb3NpdGlvbmluZyBhZnRlciBjaGFuZ2luZyBhIHByb3BlcnR5IGxpa2VcbiAqICAgIHNlbGVjdGlvbkFuaW1hdGlvbktleWZyYW1lcyB0aGF0IGFmZmVjdHMgcmVuZGVyaW5nLlxuICogMi4gQW5pbWF0ZSBvbiBzZWxlY3RlZEluZGV4IGNoYW5nZS4gVGhpcyBzaG91bGQgb3ZlcnJpZGUgYW55IGFuaW1hdGlvbi9zd2lwZVxuICogICAgYWxyZWFkeSBpbiBwcm9ncmVzcy5cbiAqIDMuIEluc3RhbnRseSByZW5kZXIgdGhlIGN1cnJlbnQgcG9zaXRpb24gb2YgYSBkcmFnIG9wZXJhdGlvbiBpbiBwcm9ncmVzcy5cbiAqIDQuIENvbXBsZXRlIGEgZHJhZyBvcGVyYXRpb24uIElmIHRoZSBkcmFnIHdhc24ndCBmYXIgZW5vdWdoIHRvIGFmZmVjdFxuICogICAgc2VsZWN0aW9uLCB3ZSdsbCBqdXN0IGJlIHJlc3RvcmluZyB0aGUgc2VsZWN0ZWRGcmFjdGlvbiB0byAwLlxuICpcbiAqIElmIHRoZSBsaXN0IGRvZXMgbm90IHdyYXAsIGFueSBzZWxlY3Rpb24gcG9zaXRpb24gb3V0c2lkZSB0aGUgbGlzdCdzIGJvdW5kc1xuICogd2lsbCBiZSBkYW1wZWQgdG8gcHJvZHVjZSBhIHZpc3VhbCBlZmZlY3Qgb2YgdGVuc2lvbi5cbiAqL1xuZnVuY3Rpb24gcmVuZGVyU2VsZWN0aW9uKGVsZW1lbnQsIHNlbGVjdGVkSW5kZXg9ZWxlbWVudC5zZWxlY3RlZEluZGV4LCBzZWxlY3RlZEZyYWN0aW9uPWVsZW1lbnQuc2VsZWN0ZWRGcmFjdGlvbikge1xuICBjb25zdCBpdGVtQ291bnQgPSBlbGVtZW50Lml0ZW1zID8gZWxlbWVudC5pdGVtcy5sZW5ndGggOiAwO1xuICBpZiAoaXRlbUNvdW50ID09PSAwKSB7XG4gICAgLy8gTm90aGluZyB0byByZW5kZXIuXG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChzZWxlY3RlZEluZGV4IDwgMCkge1xuICAgIC8vIFRPRE86IEhhbmRsZSBubyBzZWxlY3Rpb24uXG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCBzZWxlY3Rpb24gPSBzZWxlY3RlZEluZGV4ICsgc2VsZWN0ZWRGcmFjdGlvbjtcbiAgaWYgKGVsZW1lbnQuc2VsZWN0aW9uV3JhcHMpIHtcbiAgICAvLyBBcHBseSB3cmFwcGluZyB0byBlbnN1cmUgY29uc2lzdGVudCByZXByZXNlbnRhdGlvbiBvZiBzZWxlY3Rpb24uXG4gICAgc2VsZWN0aW9uID0gRnJhY3Rpb25hbFNlbGVjdGlvbk1peGluLmhlbHBlcnMud3JhcHBlZFNlbGVjdGlvbihzZWxlY3Rpb24sIGl0ZW1Db3VudCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gQXBwbHkgZGFtcGluZyBpZiBuZWNlc3NhcnkuXG4gICAgc2VsZWN0aW9uID0gRnJhY3Rpb25hbFNlbGVjdGlvbk1peGluLmhlbHBlcnMuZGFtcGVkU2VsZWN0aW9uKHNlbGVjdGlvbiwgaXRlbUNvdW50KTtcbiAgfVxuICBjb25zdCBwcmV2aW91c1NlbGVjdGlvbiA9IGVsZW1lbnRbcHJldmlvdXNTZWxlY3Rpb25TeW1ib2xdO1xuICAvLyBUT0RPOiBJZiBhbiBpdGVtIGNoYW5nZXMgcG9zaXRpb24gaW4gdGhlIERPTSwgd2UgZW5kIHVwIGFuaW1hdGluZyBmcm9tXG4gIC8vIGl0cyBvbGQgaW5kZXggdG8gaXRzIG5ldyBpbmRleCwgYnV0IHdlIHJlYWxseSBkb24ndCB3YW50IHRvIGFuaW1hdGUgYXQgYWxsLlxuICBpZiAoIWVsZW1lbnRbc3ltYm9scy5kcmFnZ2luZ10gJiYgcHJldmlvdXNTZWxlY3Rpb24gIT0gbnVsbCAmJlxuICAgICAgcHJldmlvdXNTZWxlY3Rpb24gIT09IHNlbGVjdGlvbikge1xuICAgIC8vIEFuaW1hdGUgc2VsZWN0aW9uIGZyb20gcHJldmlvdXMgc3RhdGUgdG8gbmV3IHN0YXRlLlxuICAgIGFuaW1hdGVTZWxlY3Rpb24oZWxlbWVudCwgcHJldmlvdXNTZWxlY3Rpb24sIHNlbGVjdGlvbik7XG4gIH0gZWxzZSBpZiAoc2VsZWN0ZWRGcmFjdGlvbiA9PT0gMCAmJiBlbGVtZW50W3BsYXlpbmdBbmltYXRpb25TeW1ib2xdKSB7XG4gICAgLy8gQWxyZWFkeSBpbiBwcm9jZXNzIG9mIGFuaW1hdGluZyB0byBmcmFjdGlvbiAwLiBEdXJpbmcgdGhhdCBwcm9jZXNzLFxuICAgIC8vIGlnbm9yZSBzdWJzZXF1ZW50IGF0dGVtcHRzIHRvIHJlbmRlclNlbGVjdGlvbiB0byBmcmFjdGlvbiAwLlxuICAgIHJldHVybjtcbiAgfSBlbHNlIHtcbiAgICAvLyBSZW5kZXIgY3VycmVudCBzZWxlY3Rpb24gc3RhdGUgaW5zdGFudGx5LlxuICAgIHJlbmRlclNlbGVjdGlvbkluc3RhbnRseShlbGVtZW50LCBzZWxlY3Rpb24pO1xuICB9XG4gIGVsZW1lbnRbcHJldmlvdXNTZWxlY3Rpb25TeW1ib2xdID0gc2VsZWN0aW9uO1xufVxuXG4vKlxuICogSW5zdGFudGx5IHJlbmRlciAoZG9uJ3QgYW5pbWF0ZSkgdGhlIGVsZW1lbnQncyBpdGVtcyBhdCB0aGUgZ2l2ZW4gd2hvbGUgb3JcbiAqIGZyYWN0aW9uYWwgc2VsZWN0aW9uIGluZGV4LlxuICovXG5mdW5jdGlvbiByZW5kZXJTZWxlY3Rpb25JbnN0YW50bHkoZWxlbWVudCwgdG9TZWxlY3Rpb24pIHtcbiAgaWYgKGVsZW1lbnRbcmVzZXRBbmltYXRpb25zT25OZXh0UmVuZGVyU3ltYm9sXSkge1xuICAgIHJlc2V0QW5pbWF0aW9ucyhlbGVtZW50KTtcbiAgICBlbGVtZW50W3Jlc2V0QW5pbWF0aW9uc09uTmV4dFJlbmRlclN5bWJvbF0gPSBmYWxzZTtcbiAgfVxuICBjb25zdCBhbmltYXRpb25GcmFjdGlvbnMgPSBtaXhpbi5oZWxwZXJzLmFuaW1hdGlvbkZyYWN0aW9uc0ZvclNlbGVjdGlvbihlbGVtZW50LCB0b1NlbGVjdGlvbik7XG4gIGFuaW1hdGlvbkZyYWN0aW9ucy5tYXAoKGFuaW1hdGlvbkZyYWN0aW9uLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGl0ZW0gPSBlbGVtZW50Lml0ZW1zW2luZGV4XTtcbiAgICBpZiAoYW5pbWF0aW9uRnJhY3Rpb24gIT0gbnVsbCkge1xuICAgICAgc2hvd0l0ZW0oaXRlbSwgdHJ1ZSk7XG4gICAgICBzZXRBbmltYXRpb25GcmFjdGlvbihlbGVtZW50LCBpbmRleCwgYW5pbWF0aW9uRnJhY3Rpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaG93SXRlbShpdGVtLCBmYWxzZSk7XG4gICAgfVxuICB9KTtcbn1cblxuLypcbiAqIFdlIG1haW50YWluIGFuIGFycmF5IGNvbnRhaW5pbmcgYW4gYW5pbWF0aW9uIHBlciBpdGVtLiBUaGlzIGlzIHVzZWQgZm9yIHR3b1xuICogcmVhc29uczpcbiAqXG4gKiAqIER1cmluZyBhIGRyYWcgb3BlcmF0aW9uLCB3ZSB3YW50IHRvIGJlIGFibGUgdG8gcmV1c2UgYW5pbWF0aW9ucyBiZXR3ZWVuXG4gKiAgIGRyYWcgdXBkYXRlcy5cbiAqICogV2hlbiBhIHNlbGVjdGlvbiBhbmltYXRpb24gY29tcGxldGVzLCB3ZSBuZWVkIHRvIGJlIGFibGUgdG8gbGVhdmUgdGhlXG4gKiAgIHZpc2liaWxlIGl0ZW1zIGluIGEgcGF1c2VkIHN0YXRlLiBMYXRlciwgd2UnbGwgd2FudCB0byBiZSBhYmxlIHRvIGNsZWFuIHVwXG4gKiAgIHRob3NlIGFuaW1hdGlvbnMuXG4gKlxuICogTm90ZSB0aGF0IHRoaXMgYXJyYXkgaXMgc3BhcnNlOiBpdCB3aWxsIG9ubHkgaG9sZCB1cCBmcm9tIDDigJMzIGFuaW1hdGlvbnMgYXRcbiAqIGFueSBnaXZlbiBwb2ludC5cbiAqL1xuZnVuY3Rpb24gcmVzZXRBbmltYXRpb25zKGVsZW1lbnQpIHtcbiAgY29uc3QgYW5pbWF0aW9ucyA9IGVsZW1lbnRbYW5pbWF0aW9uU3ltYm9sXTtcbiAgaWYgKGFuaW1hdGlvbnMpIHtcbiAgICAvLyBDYW5jZWwgZXhpc3RpbmcgYW5pbWF0aW9ucyB0byByZW1vdmUgdGhlIGVmZmVjdHMgdGhleSdyZSBhcHBseWluZy5cbiAgICBhbmltYXRpb25zLmZvckVhY2goKGFuaW1hdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChhbmltYXRpb24pIHtcbiAgICAgICAgYW5pbWF0aW9uLmNhbmNlbCgpO1xuICAgICAgICBhbmltYXRpb25zW2luZGV4XSA9IG51bGw7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgY29uc3QgaXRlbUNvdW50ID0gZWxlbWVudC5pdGVtcyA/IGVsZW1lbnQuaXRlbXMubGVuZ3RoIDogMDtcbiAgaWYgKCFhbmltYXRpb25zIHx8IGFuaW1hdGlvbnMubGVuZ3RoICE9PSBpdGVtQ291bnQpIHtcbiAgICAvLyBIYXZlbid0IGFuaW1hdGVkIGJlZm9yZSB3aXRoIHRoaXMgbnVtYmVyIG9mIGl0ZW1zOyAocmUpY3JlYXRlIGFycmF5LlxuICAgIGVsZW1lbnRbYW5pbWF0aW9uU3ltYm9sXSA9IG5ldyBBcnJheShpdGVtQ291bnQpO1xuICB9XG59XG5cbi8qXG4gKiBUaGUgbGFzdCBhbmltYXRpb24gaW4gb3VyIHNlbGVjdGlvbiBhbmltYXRpb24gaGFzIGNvbXBsZXRlZC4gQ2xlYW4gdXAuXG4gKi9cbmZ1bmN0aW9uIHNlbGVjdGlvbkFuaW1hdGlvbkZpbmlzaGVkKGVsZW1lbnQsIGRldGFpbHMpIHtcblxuICAvLyBXaGVuIHRoZSBsYXN0IGFuaW1hdGlvbiBjb21wbGV0ZXMsIHNob3cgdGhlIG5leHQgaXRlbSBpbiB0aGUgZGlyZWN0aW9uXG4gIC8vIHdlJ3JlIGdvaW5nLiBXYWl0aW5nIHRvIHRoYXQgdW50aWwgdGhpcyBwb2ludCBpcyBhIGJpdCBvZiBhIGhhY2sgdG8gYXZvaWRcbiAgLy8gaGF2aW5nIGEgbmV4dCBpdGVtIHRoYXQncyBoaWdoZXIgaW4gdGhlIG5hdHVyYWwgei1vcmRlciBvYnNjdXJlIG90aGVyIGl0ZW1zXG4gIC8vIGR1cmluZyBhbmltYXRpb24uXG4gIGNvbnN0IG5leHRVcEluZGV4ID0gZGV0YWlscy5uZXh0VXBJbmRleDtcbiAgaWYgKG5leHRVcEluZGV4ICE9IG51bGwpIHtcbiAgICBpZiAoZWxlbWVudFthbmltYXRpb25TeW1ib2xdW25leHRVcEluZGV4XSkge1xuICAgICAgLy8gQ2FuY2VsIGV4aXN0aW5nIHNlbGVjdGlvbiBhbmltYXRpb24gc28gd2UgY2FuIGNvbnN0cnVjdCBhIG5ldyBvbmUuXG4gICAgICBlbGVtZW50W2FuaW1hdGlvblN5bWJvbF1bbmV4dFVwSW5kZXhdLmNhbmNlbCgpO1xuICAgICAgZWxlbWVudFthbmltYXRpb25TeW1ib2xdW25leHRVcEluZGV4XSA9IG51bGw7XG4gICAgfVxuICAgIGNvbnN0IGFuaW1hdGlvbkZyYWN0aW9uID0gZGV0YWlscy5mb3J3YXJkID8gMCA6IDE7XG4gICAgc2V0QW5pbWF0aW9uRnJhY3Rpb24oZWxlbWVudCwgbmV4dFVwSW5kZXgsIGFuaW1hdGlvbkZyYWN0aW9uKTtcbiAgICBzaG93SXRlbShlbGVtZW50Lml0ZW1zW25leHRVcEluZGV4XSwgdHJ1ZSk7XG4gIH1cblxuICBlbGVtZW50W2xhc3RBbmltYXRpb25TeW1ib2xdLm9uZmluaXNoID0gbnVsbDtcbiAgZWxlbWVudFtwbGF5aW5nQW5pbWF0aW9uU3ltYm9sXSA9IGZhbHNlO1xufVxuXG4vKlxuICogUGF1c2UgdGhlIGluZGljYXRlZCBhbmltYXRpb24gYW5kIGhhdmUgaXQgc2hvdyB0aGUgYW5pbWF0aW9uIGF0IHRoZSBnaXZlblxuICogZnJhY3Rpb24gKGJldHdlZW4gMCBhbmQgMSkgb2YgdGhlIHdheSB0aHJvdWdoIHRoZSBhbmltYXRpb24uXG4gKi9cbmZ1bmN0aW9uIHNldEFuaW1hdGlvbkZyYWN0aW9uKGVsZW1lbnQsIGl0ZW1JbmRleCwgZnJhY3Rpb24pIHtcbiAgY29uc3QgYW5pbWF0aW9uID0gZ2V0QW5pbWF0aW9uRm9ySXRlbUluZGV4KGVsZW1lbnQsIGl0ZW1JbmRleCk7XG4gIGlmIChhbmltYXRpb24pIHtcbiAgICBjb25zdCBkdXJhdGlvbiA9IGVsZW1lbnQuc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb247XG4gICAgaWYgKGR1cmF0aW9uKSB7XG4gICAgICBhbmltYXRpb24uY3VycmVudFRpbWUgPSBmcmFjdGlvbiAqIGR1cmF0aW9uO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzaG93SXRlbShpdGVtLCBmbGFnKSB7XG4gIGl0ZW0uc3R5bGUudmlzaWJpbGl0eSA9IGZsYWcgPyAndmlzaWJsZScgOiAnaGlkZGVuJztcbn1cblxuLypcbiAqIEZpZ3VyZSBvdXQgaG93IG1hbnkgc3RlcHMgaXQgd2lsbCB0YWtlIHRvIGdvIGZyb20gZnJvbVNlbGVjdGlvbiB0b1xuICogdG9TZWxlY3Rpb24uIFRvIGdvIGZyb20gaXRlbSAzIHRvIGl0ZW0gNCBpcyBvbmUgc3RlcC5cbiAqXG4gKiBJZiB3cmFwcGluZyBpcyBhbGxvd2VkLCB0aGVuIGdvaW5nIGZyb20gdGhlIGxhc3QgaXRlbSB0byB0aGUgZmlyc3Qgd2lsbCB0YWtlXG4gKiBvbmUgc3RlcCAoZm9yd2FyZCksIGFuZCBnb2luZyBmcm9tIHRoZSBmaXJzdCBpdGVtIHRvIHRoZSBsYXN0IHdpbGwgdGFrZSBvbmVcbiAqIHN0ZXAgKGJhY2t3YXJkKS5cbiAqL1xuZnVuY3Rpb24gc3RlcHNUb0luZGV4KGxlbmd0aCwgYWxsb3dXcmFwLCBmcm9tU2VsZWN0aW9uLCB0b1NlbGVjdGlvbikge1xuICBsZXQgc3RlcHMgPSB0b1NlbGVjdGlvbiAtIGZyb21TZWxlY3Rpb247XG4gIC8vIFdyYXBwaW5nIG9ubHkga2lja3MgaW4gd2hlbiBsaXN0IGhhcyBtb3JlIHRoYW4gMSBpdGVtLlxuICBpZiAoYWxsb3dXcmFwICYmIGxlbmd0aCA+IDEpIHtcbiAgICBjb25zdCB3cmFwU3RlcHMgPSBsZW5ndGggLSBNYXRoLmFicyhzdGVwcyk7XG4gICAgaWYgKHdyYXBTdGVwcyA8PSAxKSB7XG4gICAgICAvLyBTcGVjaWFsIGNhc2VcbiAgICAgIHN0ZXBzID0gc3RlcHMgPCAwID9cbiAgICAgICAgd3JhcFN0ZXBzIDogICAvLyBXcmFwIGZvcndhcmQgZnJvbSBsYXN0IGl0ZW0gdG8gZmlyc3QuXG4gICAgICAgIC13cmFwU3RlcHM7ICAgLy8gV3JhcCBiYWNrd2FyZCBmcm9tIGZpcnN0IGl0ZW0gdG8gbGFzdC5cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0ZXBzO1xufVxuIiwiaW1wb3J0IHN5bWJvbHMgZnJvbSAnLi9zeW1ib2xzJztcblxuXG4vLyBVc2VkIHRvIGFzc2lnbiB1bmlxdWUgSURzIHRvIGl0ZW0gZWxlbWVudHMgd2l0aG91dCBJRHMuXG5sZXQgaWRDb3VudCA9IDA7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBTZWxlY3Rpb25BcmlhQWN0aXZlLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggdHJlYXRzIHRoZSBzZWxlY3RlZCBpdGVtIGluIGEgbGlzdCBhcyB0aGUgYWN0aXZlIGl0ZW0gaW4gQVJJQVxuICAgKiBhY2Nlc3NpYmlsaXR5IHRlcm1zLlxuICAgKlxuICAgKiBIYW5kbGluZyBBUklBIHNlbGVjdGlvbiBzdGF0ZSBwcm9wZXJseSBpcyBhY3R1YWxseSBxdWl0ZSBjb21wbGV4OlxuICAgKlxuICAgKiAqIFRoZSBpdGVtcyBpbiB0aGUgbGlzdCBuZWVkIHRvIGJlIGluZGljYXRlZCBhcyBwb3NzaWJsZSBpdGVtcyB2aWEgYW4gQVJJQVxuICAgKiAgIGByb2xlYCBhdHRyaWJ1dGUgdmFsdWUgc3VjaCBhcyBcIm9wdGlvblwiLlxuICAgKiAqIFRoZSBzZWxlY3RlZCBpdGVtIG5lZWQgdG8gYmUgbWFya2VkIGFzIHNlbGVjdGVkIGJ5IHNldHRpbmcgdGhlIGl0ZW0nc1xuICAgKiAgIGBhcmlhLXNlbGVjdGVkYCBhdHRyaWJ1dGUgdG8gdHJ1ZSAqYW5kKiB0aGUgb3RoZXIgaXRlbXMgbmVlZCBiZSBtYXJrZWQgYXNcbiAgICogICAqbm90KiBzZWxlY3RlZCBieSBzZXR0aW5nIGBhcmlhLXNlbGVjdGVkYCB0byBmYWxzZS5cbiAgICogKiBUaGUgb3V0ZXJtb3N0IGVsZW1lbnQgd2l0aCB0aGUga2V5Ym9hcmQgZm9jdXMgbmVlZHMgdG8gaGF2ZSBhdHRyaWJ1dGVzXG4gICAqICAgc2V0IG9uIGl0IHNvIHRoYXQgdGhlIHNlbGVjdGlvbiBpcyBrbm93YWJsZSBhdCB0aGUgbGlzdCBsZXZlbCB2aWEgdGhlXG4gICAqICAgYGFyaWEtYWN0aXZlZGVzY2VuZGFudGAgYXR0cmlidXRlLlxuICAgKiAqIFVzZSBvZiBgYXJpYS1hY3RpdmVkZXNjZW5kYW50YCBpbiB0dXJuIHJlcXVpcmVzIHRoYXQgYWxsIGl0ZW1zIGluIHRoZVxuICAgKiAgIGxpc3QgaGF2ZSBJRCBhdHRyaWJ1dGVzIGFzc2lnbmVkIHRvIHRoZW0uXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gdHJpZXMgdG8gYWRkcmVzcyBhbGwgb2YgdGhlIGFib3ZlIHJlcXVpcmVtZW50cy4gVG8gdGhhdCBlbmQsXG4gICAqIHRoaXMgbWl4aW4gd2lsbCBhc3NpZ24gZ2VuZXJhdGVkIElEcyB0byBhbnkgaXRlbSB0aGF0IGRvZXNuJ3QgYWxyZWFkeSBoYXZlXG4gICAqIGFuIElELlxuICAgKlxuICAgKiBBUklBIHJlbGllcyBvbiBlbGVtZW50cyB0byBwcm92aWRlIGByb2xlYCBhdHRyaWJ1dGVzLiBUaGlzIG1peGluIHdpbGwgYXBwbHlcbiAgICogYSBkZWZhdWx0IHJvbGUgb2YgXCJsaXN0Ym94XCIgb24gdGhlIG91dGVyIGxpc3QgaWYgaXQgZG9lc24ndCBhbHJlYWR5IGhhdmUgYW5cbiAgICogZXhwbGljaXQgcm9sZS4gU2ltaWxhcmx5LCB0aGlzIG1peGluIHdpbGwgYXBwbHkgYSBkZWZhdWx0IHJvbGUgb2YgXCJvcHRpb25cIlxuICAgKiB0byBhbnkgbGlzdCBpdGVtIHRoYXQgZG9lcyBub3QgYWxyZWFkeSBoYXZlIGEgcm9sZSBzcGVjaWZpZWQuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyBhIHNldCBvZiBtZW1iZXJzIHRoYXQgbWFuYWdlIHRoZSBzdGF0ZSBvZiB0aGUgc2VsZWN0aW9uOlxuICAgKiBgW3N5bWJvbHMuaXRlbVNlbGVjdGVkXWAsIGBpdGVtQWRkZWRgLCBhbmQgYHNlbGVjdGVkSW5kZXhgLiBZb3UgY2FuXG4gICAqIHN1cHBseSB0aGVzZSB5b3Vyc2VsZiwgb3IgZG8gc28gdmlhXG4gICAqIFtTaW5nbGVTZWxlY3Rpb25NaXhpbl0oU2luZ2xlU2VsZWN0aW9uTWl4aW4ubWQpLlxuICAgKi9cbiAgY2xhc3MgU2VsZWN0aW9uQXJpYUFjdGl2ZSBleHRlbmRzIGJhc2Uge1xuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2spIHsgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTsgfVxuICAgICAgLy8gU2V0IGRlZmF1bHQgQVJJQSByb2xlLlxuICAgICAgaWYgKHRoaXMuZ2V0QXR0cmlidXRlKCdyb2xlJykgPT0gbnVsbCAmJiB0aGlzW3N5bWJvbHMuZGVmYXVsdHNdLnJvbGUpIHtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCB0aGlzW3N5bWJvbHMuZGVmYXVsdHNdLnJvbGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGdldCBbc3ltYm9scy5kZWZhdWx0c10oKSB7XG4gICAgICBjb25zdCBkZWZhdWx0cyA9IHN1cGVyW3N5bWJvbHMuZGVmYXVsdHNdIHx8IHt9O1xuICAgICAgZGVmYXVsdHMucm9sZSA9ICdsaXN0Ym94JztcbiAgICAgIHJldHVybiBkZWZhdWx0cztcbiAgICB9XG5cbiAgICBbc3ltYm9scy5pdGVtQWRkZWRdKGl0ZW0pIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLml0ZW1BZGRlZF0pIHsgc3VwZXJbc3ltYm9scy5pdGVtQWRkZWRdKGl0ZW0pOyB9XG5cbiAgICAgIGlmICghaXRlbS5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSkge1xuICAgICAgICAvLyBBc3NpZ24gYSBkZWZhdWx0IEFSSUEgcm9sZS5cbiAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnb3B0aW9uJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIEVuc3VyZSBlYWNoIGl0ZW0gaGFzIGFuIElEIHNvIHdlIGNhbiBzZXQgYXJpYS1hY3RpdmVkZXNjZW5kYW50IG9uIHRoZVxuICAgICAgLy8gb3ZlcmFsbCBsaXN0IHdoZW5ldmVyIHRoZSBzZWxlY3Rpb24gY2hhbmdlcy5cbiAgICAgIC8vXG4gICAgICAvLyBUaGUgSUQgd2lsbCB0YWtlIHRoZSBmb3JtIG9mIGEgYmFzZSBJRCBwbHVzIGEgdW5pcXVlIGludGVnZXIuIFRoZSBiYXNlXG4gICAgICAvLyBJRCB3aWxsIGJlIGluY29ycG9yYXRlIHRoZSBjb21wb25lbnQncyBvd24gSUQuIEUuZy4sIGlmIGEgY29tcG9uZW50IGhhc1xuICAgICAgLy8gSUQgXCJmb29cIiwgdGhlbiBpdHMgaXRlbXMgd2lsbCBoYXZlIElEcyB0aGF0IGxvb2sgbGlrZSBcIl9mb29PcHRpb24xXCIuIElmXG4gICAgICAvLyB0aGUgY29tcG5lbnQgaGFzIG5vIElEIGl0c2VsZiwgaXRzIGl0ZW1zIHdpbGwgZ2V0IElEcyB0aGF0IGxvb2sgbGlrZVxuICAgICAgLy8gXCJfb3B0aW9uMVwiLiBJdGVtIElEcyBhcmUgcHJlZml4ZWQgd2l0aCBhbiB1bmRlcnNjb3JlIHRvIGRpZmZlcmVudGlhdGVcbiAgICAgIC8vIHRoZW0gZnJvbSBtYW51YWxseS1hc3NpZ25lZCBJRHMsIGFuZCB0byBtaW5pbWl6ZSB0aGUgcG90ZW50aWFsIGZvciBJRFxuICAgICAgLy8gY29uZmxpY3RzLlxuICAgICAgaWYgKCFpdGVtLmlkKSB7XG4gICAgICAgIGNvbnN0IGJhc2VJZCA9IHRoaXMuaWQgP1xuICAgICAgICAgICAgXCJfXCIgKyB0aGlzLmlkICsgXCJPcHRpb25cIiA6XG4gICAgICAgICAgICBcIl9vcHRpb25cIjtcbiAgICAgICAgaXRlbS5pZCA9IGJhc2VJZCArIGlkQ291bnQrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBbc3ltYm9scy5pdGVtU2VsZWN0ZWRdKGl0ZW0sIHNlbGVjdGVkKSB7XG4gICAgICBpZiAoc3VwZXJbc3ltYm9scy5pdGVtU2VsZWN0ZWRdKSB7IHN1cGVyW3N5bWJvbHMuaXRlbVNlbGVjdGVkXShpdGVtLCBzZWxlY3RlZCk7IH1cbiAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgc2VsZWN0ZWQpO1xuICAgICAgY29uc3QgaXRlbUlkID0gaXRlbS5pZDtcbiAgICAgIGlmIChpdGVtSWQgJiYgc2VsZWN0ZWQpIHtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcsIGl0ZW1JZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdGVkSXRlbSgpIHtcbiAgICAgIHJldHVybiBzdXBlci5zZWxlY3RlZEl0ZW07XG4gICAgfVxuICAgIHNldCBzZWxlY3RlZEl0ZW0oaXRlbSkge1xuICAgICAgaWYgKCdzZWxlY3RlZEl0ZW0nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkSXRlbSA9IGl0ZW07IH1cbiAgICAgIGlmIChpdGVtID09IG51bGwpIHtcbiAgICAgICAgLy8gU2VsZWN0aW9uIHdhcyByZW1vdmVkLlxuICAgICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1hY3RpdmVkZXNjZW5kYW50Jyk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gU2VsZWN0aW9uQXJpYUFjdGl2ZTtcbn07XG4iLCJpbXBvcnQgc3ltYm9scyBmcm9tICcuLi9zcmMvc3ltYm9scyc7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBTZWxlY3Rpb25IaWdobGlnaHQuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBUZW1wbGF0ZSBtaXhpbiB3aGljaCBhcHBsaWVzIHN0YW5kYXJkIGhpZ2hsaWdodCBjb2xvcnMgdG8gYSBzZWxlY3RlZCBpdGVtLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGhpZ2hsaWdodHMgdGV4dHVhbCBpdGVtcyAoZS5nLiwgaW4gYSBsaXN0KSBpbiBhIHN0YW5kYXJkIHdheSBieVxuICAgKiB1c2luZyB0aGUgQ1NTIGBoaWdobGlnaHRgIGFuZCBgaGlnaGxpZ2h0dGV4dGAgY29sb3IgdmFsdWVzLiBUaGVzZSB2YWx1ZXNcbiAgICogcmVzcGVjdCBvcGVyYXRpbmcgc3lzdGVtIGRlZmF1bHRzIGFuZCB1c2VyIHByZWZlcmVuY2VzLCBhbmQgaGVuY2UgYXJlIGdvb2RcbiAgICogZGVmYXVsdCB2YWx1ZXMgZm9yIGhpZ2hsaWdodCBjb2xvcnMuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyBhIGBzZWxlY3RlZGAgY2xhc3MgdG8gYmUgYXBwbGllZCB0byBzZWxlY3RlZCBpdGVtcy4gWW91XG4gICAqIGNhbiB1c2UgW0NvbnRlbnRJdGVtc01peGluXShDb250ZW50SXRlbXNNaXhpbi5tZCkgZm9yIHRoYXQgcHVycG9zZS5cbiAgICovXG4gIGNsYXNzIFNlbGVjdGlvbkhpZ2hsaWdodCBleHRlbmRzIGJhc2Uge1xuXG4gICAgZ2V0IFtzeW1ib2xzLnRlbXBsYXRlXSgpIHtcbiAgICAgIGNvbnN0IGJhc2VUZW1wbGF0ZSA9IHN1cGVyW3N5bWJvbHMudGVtcGxhdGVdIHx8ICcnO1xuICAgICAgcmV0dXJuIGBcbiAgICAgICAgPHN0eWxlPlxuICAgICAgICAgIDpob3N0KFtnZW5lcmljPVwiXCJdKSA6OnNsb3R0ZWQoLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoaWdobGlnaHQ7XG4gICAgICAgICAgICBjb2xvcjogaGlnaGxpZ2h0dGV4dDtcbiAgICAgICAgICB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgICR7YmFzZVRlbXBsYXRlfVxuICAgICAgYDtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBTZWxlY3Rpb25IaWdobGlnaHQ7XG59O1xuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBTZWxlY3Rpb25JblZpZXcuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBzY3JvbGxzIGEgY29udGFpbmVyIHRvIGVuc3VyZSB0aGF0IGEgbmV3bHktc2VsZWN0ZWQgaXRlbSBpc1xuICAgKiB2aXNpYmxlIHRvIHRoZSB1c2VyLlxuICAgKlxuICAgKiBXaGVuIHRoZSBzZWxlY3RlZCBpdGVtIGluIGEgbGlzdC1saWtlIGNvbXBvbmVudCBjaGFuZ2VzLCBpdCdzIGVhc2llciBmb3JcbiAgICogdGhlIHRvIGNvbmZpcm0gdGhhdCB0aGUgc2VsZWN0aW9uIGhhcyBjaGFuZ2VkIHRvIGFuIGFwcHJvcHJpYXRlIGl0ZW0gaWYgdGhlXG4gICAqIHVzZXIgY2FuIGFjdHVhbGx5IHNlZSB0aGF0IGl0ZW0uXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyBhIGBzZWxlY3RlZEl0ZW1gIHByb3BlcnR5IHRvIGJlIHNldCB3aGVuIHRoZSBzZWxlY3Rpb25cbiAgICogY2hhbmdlcy4gWW91IGNhbiBzdXBwbHkgdGhhdCB5b3Vyc2VsZiwgb3IgdXNlXG4gICAqIFtTaW5nbGVTZWxlY3Rpb25NaXhpbl0oU2luZ2xlU2VsZWN0aW9uTWl4aW4ubWQpLlxuICAgKi9cbiAgY2xhc3MgU2VsZWN0aW9uSW5WaWV3IGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jb25uZWN0ZWRDYWxsYmFjaykgeyBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpOyB9XG4gICAgICBjb25zdCBzZWxlY3RlZEl0ZW0gPSB0aGlzLnNlbGVjdGVkSXRlbTtcbiAgICAgIGlmIChzZWxlY3RlZEl0ZW0pIHtcbiAgICAgICAgdGhpcy5zY3JvbGxJdGVtSW50b1ZpZXcoc2VsZWN0ZWRJdGVtKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgc2VsZWN0ZWRJdGVtKCkge1xuICAgICAgcmV0dXJuIHN1cGVyLnNlbGVjdGVkSXRlbTtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGVkSXRlbShpdGVtKSB7XG4gICAgICBpZiAoJ3NlbGVjdGVkSXRlbScgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJdGVtID0gaXRlbTsgfVxuICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgLy8gS2VlcCB0aGUgc2VsZWN0ZWQgaXRlbSBpbiB2aWV3LlxuICAgICAgICB0aGlzLnNjcm9sbEl0ZW1JbnRvVmlldyhpdGVtKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTY3JvbGwgdGhlIGdpdmVuIGVsZW1lbnQgY29tcGxldGVseSBpbnRvIHZpZXcsIG1pbmltaXppbmcgdGhlIGRlZ3JlZSBvZlxuICAgICAqIHNjcm9sbGluZyBwZXJmb3JtZWQuXG4gICAgICpcbiAgICAgKiBCbGluayBoYXMgYSBgc2Nyb2xsSW50b1ZpZXdJZk5lZWRlZCgpYCBmdW5jdGlvbiB0aGF0IGRvZXMgc29tZXRoaW5nXG4gICAgICogc2ltaWxhciwgYnV0IHVuZm9ydHVuYXRlbHkgaXQncyBub24tc3RhbmRhcmQsIGFuZCBpbiBhbnkgZXZlbnQgb2Z0ZW4gZW5kc1xuICAgICAqIHVwIHNjcm9sbGluZyBtb3JlIHRoYW4gaXMgYWJzb2x1dGVseSBuZWNlc3NhcnkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpdGVtIC0gdGhlIGl0ZW0gdG8gc2Nyb2xsIGludG8gdmlldy5cbiAgICAgKi9cbiAgICBzY3JvbGxJdGVtSW50b1ZpZXcoaXRlbSkge1xuICAgICAgaWYgKHN1cGVyLnNjcm9sbEl0ZW1JbnRvVmlldykgeyBzdXBlci5zY3JvbGxJdGVtSW50b1ZpZXcoKTsgfVxuICAgICAgLy8gR2V0IHRoZSByZWxhdGl2ZSBwb3NpdGlvbiBvZiB0aGUgaXRlbSB3aXRoIHJlc3BlY3QgdG8gdGhlIHRvcCBvZiB0aGVcbiAgICAgIC8vIGxpc3QncyBzY3JvbGxhYmxlIGNhbnZhcy4gQW4gaXRlbSBhdCB0aGUgdG9wIG9mIHRoZSBsaXN0IHdpbGwgaGF2ZSBhXG4gICAgICAvLyBlbGVtZW50VG9wIG9mIDAuXG5cbiAgICAgIGNvbnN0IHNjcm9sbFRhcmdldCA9IHRoaXMuc2Nyb2xsVGFyZ2V0O1xuICAgICAgY29uc3QgZWxlbWVudFRvcCA9IGl0ZW0ub2Zmc2V0VG9wIC0gc2Nyb2xsVGFyZ2V0Lm9mZnNldFRvcCAtIHNjcm9sbFRhcmdldC5jbGllbnRUb3A7XG4gICAgICBjb25zdCBlbGVtZW50Qm90dG9tID0gZWxlbWVudFRvcCArIGl0ZW0ub2Zmc2V0SGVpZ2h0O1xuICAgICAgLy8gRGV0ZXJtaW5lIHRoZSBib3R0b20gb2YgdGhlIHNjcm9sbGFibGUgY2FudmFzLlxuICAgICAgY29uc3Qgc2Nyb2xsQm90dG9tID0gc2Nyb2xsVGFyZ2V0LnNjcm9sbFRvcCArIHNjcm9sbFRhcmdldC5jbGllbnRIZWlnaHQ7XG4gICAgICBpZiAoZWxlbWVudEJvdHRvbSA+IHNjcm9sbEJvdHRvbSkge1xuICAgICAgICAvLyBTY3JvbGwgdXAgdW50aWwgaXRlbSBpcyBlbnRpcmVseSB2aXNpYmxlLlxuICAgICAgICBzY3JvbGxUYXJnZXQuc2Nyb2xsVG9wICs9IGVsZW1lbnRCb3R0b20gLSBzY3JvbGxCb3R0b207XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChlbGVtZW50VG9wIDwgc2Nyb2xsVGFyZ2V0LnNjcm9sbFRvcCkge1xuICAgICAgICAvLyBTY3JvbGwgZG93biB1bnRpbCBpdGVtIGlzIGVudGlyZWx5IHZpc2libGUuXG4gICAgICAgIHNjcm9sbFRhcmdldC5zY3JvbGxUb3AgPSBlbGVtZW50VG9wO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBlbGVtZW50IHRoYXQgc2hvdWxkIGJlIHNjcm9sbGVkIHRvIGJyaW5nIGFuIGl0ZW0gaW50byB2aWV3LlxuICAgICAqXG4gICAgICogVGhlIGRlZmF1bHQgdmFsdWUgb2YgdGhpcyBwcm9wZXJ0eSBpcyB0aGUgZWxlbWVudCBpdHNlbGYuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgZ2V0IHNjcm9sbFRhcmdldCgpIHtcbiAgICAgIC8vIFByZWZlciBiYXNlIHJlc3VsdC5cbiAgICAgIHJldHVybiAnc2Nyb2xsVGFyZ2V0JyBpbiBiYXNlLnByb3RvdHlwZSA/IHN1cGVyLnNjcm9sbFRhcmdldCA6IHRoaXM7XG4gICAgfVxuICAgIHNldCBzY3JvbGxUYXJnZXQoZWxlbWVudCkge1xuICAgICAgaWYgKCdzY3JvbGxUYXJnZXQnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNjcm9sbFRhcmdldCA9IGVsZW1lbnQ7IH1cbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBTZWxlY3Rpb25JblZpZXc7XG59O1xuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBTaGFkb3dFbGVtZW50UmVmZXJlbmNlcy4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHRvIGNyZWF0ZSByZWZlcmVuY2VzIHRvIGVsZW1lbnRzIGluIGEgY29tcG9uZW50J3MgU2hhZG93IERPTSBzdWJ0cmVlLlxuICAgKlxuICAgKiBUaGlzIGFkZHMgYSBtZW1iZXIgb24gdGhlIGNvbXBvbmVudCBjYWxsZWQgYHRoaXMuJGAgdGhhdCBjYW4gYmUgdXNlZCB0b1xuICAgKiByZWZlcmVuY2Ugc2hhZG93IGVsZW1lbnRzIHdpdGggSURzLiBFLmcuLCBpZiBjb21wb25lbnQncyBzaGFkb3cgY29udGFpbnMgYW5cbiAgICogZWxlbWVudCBgPGJ1dHRvbiBpZD1cImZvb1wiPmAsIHRoZW4gdGhpcyBtaXhpbiB3aWxsIGNyZWF0ZSBhIG1lbWJlclxuICAgKiBgdGhpcy4kLmZvb2AgdGhhdCBwb2ludHMgdG8gdGhhdCBidXR0b24uXG4gICAqXG4gICAqIFN1Y2ggcmVmZXJlbmNlcyBzaW1wbGlmeSBhIGNvbXBvbmVudCdzIGFjY2VzcyB0byBpdHMgb3duIGVsZW1lbnRzLiBJblxuICAgKiBleGNoYW5nZSwgdGhpcyBtaXhpbiB0cmFkZXMgb2ZmIGEgb25lLXRpbWUgY29zdCBvZiBxdWVyeWluZyBhbGwgZWxlbWVudHMgaW5cbiAgICogdGhlIHNoYWRvdyB0cmVlIGluc3RlYWQgb2YgcGF5aW5nIGFuIG9uZ29pbmcgY29zdCB0byBxdWVyeSBmb3IgYW4gZWxlbWVudFxuICAgKiBlYWNoIHRpbWUgdGhlIGNvbXBvbmVudCB3YW50cyB0byBpbnNwZWN0IG9yIG1hbmlwdWxhdGUgaXQuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyB0aGUgY29tcG9uZW50IHRvIGRlZmluZSBhIFNoYWRvdyBET00gc3VidHJlZS4gWW91IGNhblxuICAgKiBjcmVhdGUgdGhhdCB0cmVlIHlvdXJzZWxmLCBvciBtYWtlIHVzZSBvZlxuICAgKiBbU2hhZG93VGVtcGxhdGVNaXhpbl0oU2hhZG93VGVtcGxhdGVNaXhpbi5tZCkuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gaXMgaW5zcGlyZWQgYnkgUG9seW1lcidzIFthdXRvbWF0aWNcbiAgICogbm9kZSBmaW5kaW5nXShodHRwczovL3d3dy5wb2x5bWVyLXByb2plY3Qub3JnLzEuMC9kb2NzL2Rldmd1aWRlL2xvY2FsLWRvbS5odG1sI25vZGUtZmluZGluZylcbiAgICogZmVhdHVyZS5cbiAgICovXG4gIGNsYXNzIFNoYWRvd0VsZW1lbnRSZWZlcmVuY2VzIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICBpZiAodGhpcy5zaGFkb3dSb290KSB7XG4gICAgICAgIC8vIExvb2sgZm9yIGVsZW1lbnRzIGluIHRoZSBzaGFkb3cgc3VidHJlZSB0aGF0IGhhdmUgaWQgYXR0cmlidXRlcy5cbiAgICAgICAgLy8gQW4gYWx0ZXJuYXRpdmVseSBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1peGluIHdvdWxkIGJlIHRvIGp1c3QgZGVmaW5lXG4gICAgICAgIC8vIGEgdGhpcy4kIGdldHRlciB0aGF0IGxhemlseSBkb2VzIHRoaXMgc2VhcmNoIHRoZSBmaXJzdCB0aW1lIHNvbWVvbmVcbiAgICAgICAgLy8gdHJpZXMgdG8gYWNjZXNzIHRoaXMuJC4gVGhhdCBtaWdodCBpbnRyb2R1Y2Ugc29tZSBjb21wbGV4aXR5IOKAkyBpZiB0aGVcbiAgICAgICAgLy8gdGhlIHRyZWUgY2hhbmdlZCBhZnRlciBpdCB3YXMgZmlyc3QgcG9wdWxhdGVkLCB0aGUgcmVzdWx0IG9mXG4gICAgICAgIC8vIHNlYXJjaGluZyBmb3IgYSBub2RlIG1pZ2h0IGJlIHNvbWV3aGF0IHVucHJlZGljdGFibGUuXG4gICAgICAgIHRoaXMuJCA9IHt9O1xuICAgICAgICBjb25zdCBub2Rlc1dpdGhJZHMgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvckFsbCgnW2lkXScpO1xuICAgICAgICBbXS5mb3JFYWNoLmNhbGwobm9kZXNXaXRoSWRzLCBub2RlID0+IHtcbiAgICAgICAgICBjb25zdCBpZCA9IG5vZGUuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgICAgICAgIHRoaXMuJFtpZF0gPSBub2RlO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29sbGVjdGlvbiBvZiByZWZlcmVuY2VzIHRvIHRoZSBlbGVtZW50cyB3aXRoIElEcyBpbiBhIGNvbXBvbmVudCdzXG4gICAgICogU2hhZG93IERPTSBzdWJ0cmVlLlxuICAgICAqXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKiBAbWVtYmVyICRcbiAgICAgKi9cbiAgfVxuXG4gIHJldHVybiBTaGFkb3dFbGVtZW50UmVmZXJlbmNlcztcbn07XG4iLCJpbXBvcnQgc3ltYm9scyBmcm9tICcuLi9zcmMvc3ltYm9scyc7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBTaGFkb3dUZW1wbGF0ZS4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIGZvciBzdGFtcGluZyBhIHRlbXBsYXRlIGludG8gYSBTaGFkb3cgRE9NIHN1YnRyZWUgdXBvbiBjb21wb25lbnRcbiAgICogaW5zdGFudGlhdGlvbi5cbiAgICpcbiAgICogVG8gdXNlIHRoaXMgbWl4aW4sIGRlZmluZSBhIGB0ZW1wbGF0ZWAgcHJvcGVydHkgYXMgYSBzdHJpbmcgb3IgSFRNTFxuICAgKiBgPHRlbXBsYXRlPmAgZWxlbWVudDpcbiAgICpcbiAgICogICAgIGNsYXNzIE15RWxlbWVudCBleHRlbmRzIFNoYWRvd1RlbXBsYXRlTWl4aW4oSFRNTEVsZW1lbnQpIHtcbiAgICogICAgICAgZ2V0IFtzeW1ib2xzLnRlbXBsYXRlXSgpIHtcbiAgICogICAgICAgICByZXR1cm4gYEhlbGxvLCA8ZW0+d29ybGQ8L2VtPi5gO1xuICAgKiAgICAgICB9XG4gICAqICAgICB9XG4gICAqXG4gICAqIFdoZW4geW91ciBjb21wb25lbnQgY2xhc3MgaXMgaW5zdGFudGlhdGVkLCBhIHNoYWRvdyByb290IHdpbGwgYmUgY3JlYXRlZCBvblxuICAgKiB0aGUgaW5zdGFuY2UsIGFuZCB0aGUgY29udGVudHMgb2YgdGhlIHRlbXBsYXRlIHdpbGwgYmUgY2xvbmVkIGludG8gdGhlXG4gICAqIHNoYWRvdyByb290LiBJZiB5b3VyIGNvbXBvbmVudCBkb2VzIG5vdCBkZWZpbmUgYSBgdGVtcGxhdGVgIHByb3BlcnR5LCB0aGlzXG4gICAqIG1peGluIGhhcyBubyBlZmZlY3QuXG4gICAqXG4gICAqIEZvciB0aGUgdGltZSBiZWluZywgdGhpcyBleHRlbnNpb24gcmV0YWlucyBzdXBwb3J0IGZvciBTaGFkb3cgRE9NIHYwLiBUaGF0XG4gICAqIHdpbGwgZXZlbnR1YWxseSBiZSBkZXByZWNhdGVkIGFzIGJyb3dzZXJzIChhbmQgdGhlIFNoYWRvdyBET00gcG9seWZpbGwpXG4gICAqIGltcGxlbWVudCBTaGFkb3cgRE9NIHYxLlxuICAgKi9cbiAgY2xhc3MgU2hhZG93VGVtcGxhdGUgZXh0ZW5kcyBiYXNlIHtcblxuICAgIC8qXG4gICAgICogSWYgdGhlIGNvbXBvbmVudCBkZWZpbmVzIGEgdGVtcGxhdGUsIGEgc2hhZG93IHJvb3Qgd2lsbCBiZSBjcmVhdGVkIG9uIHRoZVxuICAgICAqIGNvbXBvbmVudCBpbnN0YW5jZSwgYW5kIHRoZSB0ZW1wbGF0ZSBzdGFtcGVkIGludG8gaXQuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgbGV0IHRlbXBsYXRlID0gdGhpc1tzeW1ib2xzLnRlbXBsYXRlXTtcbiAgICAgIC8vIFRPRE86IFNhdmUgdGhlIHByb2Nlc3NlZCB0ZW1wbGF0ZSB3aXRoIHRoZSBjb21wb25lbnQncyBjbGFzcyBwcm90b3R5cGVcbiAgICAgIC8vIHNvIGl0IGRvZXNuJ3QgbmVlZCB0byBiZSBwcm9jZXNzZWQgd2l0aCBldmVyeSBpbnN0YW50aWF0aW9uLlxuICAgICAgaWYgKHRlbXBsYXRlKSB7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0ZW1wbGF0ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAvLyBVcGdyYWRlIHBsYWluIHN0cmluZyB0byByZWFsIHRlbXBsYXRlLlxuICAgICAgICAgIHRlbXBsYXRlID0gY3JlYXRlVGVtcGxhdGVXaXRoSW5uZXJIVE1MKHRlbXBsYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh3aW5kb3cuU2hhZG93RE9NUG9seWZpbGwpIHtcbiAgICAgICAgICBzaGltVGVtcGxhdGVTdHlsZXModGVtcGxhdGUsIHRoaXMubG9jYWxOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJvb3QgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcbiAgICAgICAgY29uc3QgY2xvbmUgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRlbXBsYXRlLmNvbnRlbnQsIHRydWUpO1xuICAgICAgICByb290LmFwcGVuZENoaWxkKGNsb25lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBTaGFkb3dUZW1wbGF0ZTtcbn07XG5cblxuLy8gQ29udmVydCBhIHBsYWluIHN0cmluZyBvZiBIVE1MIGludG8gYSByZWFsIHRlbXBsYXRlIGVsZW1lbnQuXG5mdW5jdGlvbiBjcmVhdGVUZW1wbGF0ZVdpdGhJbm5lckhUTUwoaW5uZXJIVE1MKSB7XG4gIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgLy8gUkVWSUVXOiBJcyB0aGVyZSBhbiBlYXNpZXIgd2F5IHRvIGRvIHRoaXM/XG4gIC8vIFdlJ2QgbGlrZSB0byBqdXN0IHNldCBpbm5lckhUTUwgb24gdGhlIHRlbXBsYXRlIGNvbnRlbnQsIGJ1dCBzaW5jZSBpdCdzXG4gIC8vIGEgRG9jdW1lbnRGcmFnbWVudCwgdGhhdCBkb2Vzbid0IHdvcmsuXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuaW5uZXJIVE1MID0gaW5uZXJIVE1MO1xuICB3aGlsZSAoZGl2LmNoaWxkTm9kZXMubGVuZ3RoID4gMCkge1xuICAgIHRlbXBsYXRlLmNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2LmNoaWxkTm9kZXNbMF0pO1xuICB9XG4gIHJldHVybiB0ZW1wbGF0ZTtcbn1cblxuLy8gSW52b2tlIGJhc2ljIHN0eWxlIHNoaW1taW5nIHdpdGggU2hhZG93Q1NTLlxuZnVuY3Rpb24gc2hpbVRlbXBsYXRlU3R5bGVzKHRlbXBsYXRlLCB0YWcpIHtcbiAgd2luZG93LldlYkNvbXBvbmVudHMuU2hhZG93Q1NTLnNoaW1TdHlsaW5nKHRlbXBsYXRlLmNvbnRlbnQsIHRhZyk7XG59XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4vY3JlYXRlU3ltYm9sJztcbmltcG9ydCBzeW1ib2xzIGZyb20gJy4vc3ltYm9scyc7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IGNhblNlbGVjdE5leHRTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2NhblNlbGVjdE5leHQnKTtcbmNvbnN0IGNhblNlbGVjdFByZXZpb3VzU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdjYW5TZWxlY3RQcmV2aW91cycpO1xuY29uc3Qgc2VsZWN0aW9uUmVxdWlyZWRTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3NlbGVjdGlvblJlcXVpcmVkJyk7XG5jb25zdCBzZWxlY3Rpb25XcmFwc1N5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnc2VsZWN0aW9uV3JhcHMnKTtcblxuLy8gV2Ugd2FudCB0byBleHBvc2UgYm90aCBzZWxlY3RlZEluZGV4IGFuZCBzZWxlY3RlZEl0ZW0gYXMgaW5kZXBlbmRlbnRcbi8vIHByb3BlcnRpZXMgYnV0IGtlZXAgdGhlbSBpbiBzeW5jLiBUaGlzIGFsbG93cyBhIGNvbXBvbmVudCB1c2VyIHRvIHJlZmVyZW5jZVxuLy8gdGhlIHNlbGVjdGlvbiBieSB3aGF0ZXZlciBtZWFucyBpcyBtb3N0IG5hdHVyYWwgZm9yIHRoZWlyIHNpdHVhdGlvbi5cbi8vXG4vLyBUbyBlZmZpY2llbnRseSBrZWVwIHRoZXNlIHByb3BlcnRpZXMgaW4gc3luYywgd2UgdHJhY2sgXCJleHRlcm5hbFwiIGFuZFxuLy8gXCJpbnRlcm5hbFwiIHJlZmVyZW5jZXMgZm9yIGVhY2ggcHJvcGVydHk6XG4vL1xuLy8gVGhlIGV4dGVybmFsIGluZGV4IG9yIGl0ZW0gaXMgdGhlIG9uZSB3ZSByZXBvcnQgdG8gdGhlIG91dHNpZGUgd29ybGQgd2hlblxuLy8gYXNrZWQgZm9yIHNlbGVjdGlvbi4gIFdoZW4gaGFuZGxpbmcgYSBjaGFuZ2UgdG8gaW5kZXggb3IgaXRlbSwgd2UgdXBkYXRlIHRoZVxuLy8gZXh0ZXJuYWwgcmVmZXJlbmNlIGFzIHNvb24gYXMgcG9zc2libGUsIHNvIHRoYXQgaWYgYW55b25lIGltbWVkaWF0ZWx5IGFza3Ncbi8vIGZvciB0aGUgY3VycmVudCBzZWxlY3Rpb24sIHRoZXkgd2lsbCByZWNlaXZlIGEgc3RhYmxlIGFuc3dlci5cbi8vXG4vLyBUaGUgaW50ZXJuYWwgaW5kZXggb3IgaXRlbSB0cmFja3Mgd2hpY2hldmVyIGluZGV4IG9yIGl0ZW0gbGFzdCByZWNlaXZlZCB0aGVcbi8vIGZ1bGwgc2V0IG9mIHByb2Nlc3NpbmcuIFByb2Nlc3NpbmcgaW5jbHVkZXMgcmFpc2luZyBhIGNoYW5nZSBldmVudCBmb3IgdGhlXG4vLyBuZXcgdmFsdWUuIE9uY2Ugd2UndmUgYmVndW4gdGhhdCBwcm9jZXNzaW5nLCB3ZSBzdG9yZSB0aGUgbmV3IHZhbHVlIGFzIHRoZVxuLy8gaW50ZXJuYWwgdmFsdWUgdG8gaW5kaWNhdGUgd2UndmUgaGFuZGxlZCBpdC5cbi8vXG5jb25zdCBleHRlcm5hbFNlbGVjdGVkSW5kZXhTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2V4dGVybmFsU2VsZWN0ZWRJbmRleCcpO1xuY29uc3QgZXh0ZXJuYWxTZWxlY3RlZEl0ZW1TeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2V4dGVybmFsU2VsZWN0ZWRJdGVtJyk7XG5jb25zdCBpbnRlcm5hbFNlbGVjdGVkSW5kZXhTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2ludGVybmFsU2VsZWN0ZWRJbmRleCcpO1xuY29uc3QgaW50ZXJuYWxTZWxlY3RlZEl0ZW1TeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2ludGVybmFsU2VsZWN0ZWRJdGVtJyk7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBTaW5nbGVTZWxlY3Rpb24uICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBtYW5hZ2VzIHNpbmdsZS1zZWxlY3Rpb24gc2VtYW50aWNzIGZvciBpdGVtcyBpbiBhIGxpc3QuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyBhIGNvbXBvbmVudCB0byBwcm92aWRlIGFuIGBpdGVtc2AgQXJyYXkgb3IgTm9kZUxpc3Qgb2ZcbiAgICogYWxsIGVsZW1lbnRzIGluIHRoZSBsaXN0LiBBIHN0YW5kYXJkIHdheSB0byBkbyB0aGF0IHdpdGggaXMgdGhlXG4gICAqIFtDb250ZW50SXRlbXNNaXhpbl0oQ29udGVudEl0ZW1zTWl4aW4ubWQpLCB3aGljaCB0YWtlcyBhIGNvbXBvbmVudCdzXG4gICAqIGNvbnRlbnQgKHR5cGljYWxseSBpdHMgZGlzdHJpYnV0ZWQgY2hpbGRyZW4pIGFzIHRoZSBzZXQgb2YgbGlzdCBpdGVtczsgc2VlXG4gICAqIHRoYXQgbWl4aW4gZm9yIGRldGFpbHMuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gdHJhY2tzIGEgc2luZ2xlIHNlbGVjdGVkIGl0ZW0gaW4gdGhlIGxpc3QsIGFuZCBwcm92aWRlcyBtZWFucyB0b1xuICAgKiBnZXQgYW5kIHNldCB0aGF0IHN0YXRlIGJ5IGl0ZW0gcG9zaXRpb24gKGBzZWxlY3RlZEluZGV4YCkgb3IgaXRlbSBpZGVudGl0eVxuICAgKiAoYHNlbGVjdGVkSXRlbWApLiBUaGUgc2VsZWN0aW9uIGNhbiBiZSBtb3ZlZCBpbiB0aGUgbGlzdCB2aWEgdGhlIG1ldGhvZHNcbiAgICogYHNlbGVjdEZpcnN0YCwgYHNlbGVjdExhc3RgLCBgc2VsZWN0TmV4dGAsIGFuZCBgc2VsZWN0UHJldmlvdXNgLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGRvZXMgbm90IHByb2R1Y2UgYW55IHVzZXItdmlzaWJsZSBlZmZlY3RzIHRvIHJlcHJlc2VudFxuICAgKiBzZWxlY3Rpb24uIE90aGVyIG1peGlucywgc3VjaCBhc1xuICAgKiBbU2VsZWN0aW9uQXJpYUFjdGl2ZU1peGluXShTZWxlY3Rpb25BcmlhQWN0aXZlTWl4aW4ubWQpLFxuICAgKiBbU2VsZWN0aW9uSGlnaGxpZ2h0TWl4aW5dKFNlbGVjdGlvbkhpZ2hsaWdodE1peGluLm1kKSBhbmRcbiAgICogW1NlbGVjdGlvbkluVmlld01peGluXShTZWxlY3Rpb25JblZpZXdNaXhpbi5tZCksIG1vZGlmeSB0aGUgc2VsZWN0ZWQgaXRlbVxuICAgKiBpbiBjb21tb24gd2F5cyB0byBsZXQgdGhlIHVzZXIga25vdyBhIGdpdmVuIGl0ZW0gaXMgc2VsZWN0ZWQgb3Igbm90XG4gICAqIHNlbGVjdGVkLlxuICAgKi9cbiAgY2xhc3MgU2luZ2xlU2VsZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICAvLyBTZXQgZGVmYXVsdHMuXG4gICAgICBpZiAodHlwZW9mIHRoaXMuc2VsZWN0aW9uUmVxdWlyZWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uUmVxdWlyZWQgPSB0aGlzW3N5bWJvbHMuZGVmYXVsdHNdLnNlbGVjdGlvblJlcXVpcmVkO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiB0aGlzLnNlbGVjdGlvbldyYXBzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbldyYXBzID0gdGhpc1tzeW1ib2xzLmRlZmF1bHRzXS5zZWxlY3Rpb25XcmFwcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHRoZSBzZWxlY3Rpb24gY2FuIGJlIG1vdmVkIHRvIHRoZSBuZXh0IGl0ZW0sIGZhbHNlIGlmIG5vdCAodGhlXG4gICAgICogc2VsZWN0ZWQgaXRlbSBpcyB0aGUgbGFzdCBpdGVtIGluIHRoZSBsaXN0KS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIGdldCBjYW5TZWxlY3ROZXh0KCkge1xuICAgICAgcmV0dXJuIHRoaXNbY2FuU2VsZWN0TmV4dFN5bWJvbF07XG4gICAgfVxuICAgIHNldCBjYW5TZWxlY3ROZXh0KGNhblNlbGVjdE5leHQpIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzQ2FuU2VsZWN0TmV4dCA9IHRoaXNbY2FuU2VsZWN0TmV4dFN5bWJvbF07XG4gICAgICB0aGlzW2NhblNlbGVjdE5leHRTeW1ib2xdID0gY2FuU2VsZWN0TmV4dDtcbiAgICAgIGlmICgnY2FuU2VsZWN0TmV4dCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuY2FuU2VsZWN0TmV4dCA9IGNhblNlbGVjdE5leHQ7IH1cbiAgICAgIGlmIChjYW5TZWxlY3ROZXh0ICE9PSBwcmV2aW91c0NhblNlbGVjdE5leHQpIHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2FuLXNlbGVjdC1uZXh0LWNoYW5nZWQnKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiB0aGUgc2VsZWN0aW9uIGNhbiBiZSBtb3ZlZCB0byB0aGUgcHJldmlvdXMgaXRlbSwgZmFsc2UgaWYgbm90XG4gICAgICogKHRoZSBzZWxlY3RlZCBpdGVtIGlzIHRoZSBmaXJzdCBvbmUgaW4gdGhlIGxpc3QpLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgZ2V0IGNhblNlbGVjdFByZXZpb3VzKCkge1xuICAgICAgcmV0dXJuIHRoaXNbY2FuU2VsZWN0UHJldmlvdXNTeW1ib2xdO1xuICAgIH1cbiAgICBzZXQgY2FuU2VsZWN0UHJldmlvdXMoY2FuU2VsZWN0UHJldmlvdXMpIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzQ2FuU2VsZWN0UHJldmlvdXMgPSB0aGlzW2NhblNlbGVjdFByZXZpb3VzU3ltYm9sXTtcbiAgICAgIHRoaXNbY2FuU2VsZWN0UHJldmlvdXNTeW1ib2xdID0gY2FuU2VsZWN0UHJldmlvdXM7XG4gICAgICBpZiAoJ2NhblNlbGVjdFByZXZpb3VzJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5jYW5TZWxlY3RQcmV2aW91cyA9IGNhblNlbGVjdFByZXZpb3VzOyB9XG4gICAgICBpZiAoY2FuU2VsZWN0UHJldmlvdXMgIT09IHByZXZpb3VzQ2FuU2VsZWN0UHJldmlvdXMpIHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2FuLXNlbGVjdC1wcmV2aW91cy1jaGFuZ2VkJykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGdldCBbc3ltYm9scy5kZWZhdWx0c10oKSB7XG4gICAgICBjb25zdCBkZWZhdWx0cyA9IHN1cGVyW3N5bWJvbHMuZGVmYXVsdHNdIHx8IHt9O1xuICAgICAgZGVmYXVsdHMuc2VsZWN0aW9uUmVxdWlyZWQgPSBmYWxzZTtcbiAgICAgIGRlZmF1bHRzLnNlbGVjdGlvbldyYXBzID0gZmFsc2U7XG4gICAgICByZXR1cm4gZGVmYXVsdHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIGEgbmV3IGl0ZW0gYmVpbmcgYWRkZWQgdG8gdGhlIGxpc3QuXG4gICAgICpcbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBzaW1wbHkgc2V0cyB0aGUgaXRlbSdzXG4gICAgICogc2VsZWN0aW9uIHN0YXRlIHRvIGZhbHNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaXRlbSAtIHRoZSBpdGVtIGJlaW5nIGFkZGVkXG4gICAgICovXG4gICAgW3N5bWJvbHMuaXRlbUFkZGVkXShpdGVtKSB7XG4gICAgICBpZiAoc3VwZXJbc3ltYm9scy5pdGVtQWRkZWRdKSB7IHN1cGVyW3N5bWJvbHMuaXRlbUFkZGVkXShpdGVtKTsgfVxuICAgICAgdGhpc1tzeW1ib2xzLml0ZW1TZWxlY3RlZF0oaXRlbSwgaXRlbSA9PT0gdGhpcy5zZWxlY3RlZEl0ZW0pO1xuICAgIH1cblxuICAgIFtzeW1ib2xzLml0ZW1zQ2hhbmdlZF0oKSB7XG4gICAgICBpZiAoc3VwZXJbc3ltYm9scy5pdGVtc0NoYW5nZWRdKSB7IHN1cGVyW3N5bWJvbHMuaXRlbXNDaGFuZ2VkXSgpOyB9XG5cbiAgICAgIC8vIEluIGNhc2Ugc2VsZWN0ZWQgaXRlbSBjaGFuZ2VkIHBvc2l0aW9uIG9yIHdhcyByZW1vdmVkLlxuICAgICAgdHJhY2tTZWxlY3RlZEl0ZW0odGhpcyk7XG5cbiAgICAgIC8vIEluIGNhc2UgdGhlIGNoYW5nZSBpbiBpdGVtcyBhZmZlY3RlZCB3aGljaCBuYXZpZ2F0aW9ucyBhcmUgcG9zc2libGUuXG4gICAgICB1cGRhdGVQb3NzaWJsZU5hdmlnYXRpb25zKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFwcGx5IHRoZSBpbmRpY2F0ZSBzZWxlY3Rpb24gc3RhdGUgdG8gdGhlIGl0ZW0uXG4gICAgICpcbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuIFVzZXItdmlzaWJsZVxuICAgICAqIGVmZmVjdHMgd2lsbCB0eXBpY2FsbHkgYmUgaGFuZGxlZCBieSBvdGhlciBtaXhpbnMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpdGVtIC0gdGhlIGl0ZW0gYmVpbmcgc2VsZWN0ZWQvZGVzZWxlY3RlZFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gc2VsZWN0ZWQgLSB0cnVlIGlmIHRoZSBpdGVtIGlzIHNlbGVjdGVkLCBmYWxzZSBpZiBub3RcbiAgICAgKi9cbiAgICBbc3ltYm9scy5pdGVtU2VsZWN0ZWRdKGl0ZW0sIHNlbGVjdGVkKSB7XG4gICAgICBpZiAoc3VwZXJbc3ltYm9scy5pdGVtU2VsZWN0ZWRdKSB7IHN1cGVyW3N5bWJvbHMuaXRlbVNlbGVjdGVkXShpdGVtLCBzZWxlY3RlZCk7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW5kZXggb2YgdGhlIGl0ZW0gd2hpY2ggaXMgY3VycmVudGx5IHNlbGVjdGVkLlxuICAgICAqXG4gICAgICogQSBgc2VsZWN0ZWRJbmRleGAgb2YgLTEgaW5kaWNhdGVzIHRoZXJlIGlzIG5vIHNlbGVjdGlvbi4gU2V0dGluZyB0aGlzXG4gICAgICogcHJvcGVydHkgdG8gLTEgd2lsbCByZW1vdmUgYW55IGV4aXN0aW5nIHNlbGVjdGlvbi5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGVkSW5kZXgoKSB7XG4gICAgICByZXR1cm4gdGhpc1tleHRlcm5hbFNlbGVjdGVkSW5kZXhTeW1ib2xdICE9IG51bGwgP1xuICAgICAgICB0aGlzW2V4dGVybmFsU2VsZWN0ZWRJbmRleFN5bWJvbF0gOlxuICAgICAgICAtMTtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGVkSW5kZXgoaW5kZXgpIHtcbiAgICAgIC8vIFNlZSBub3RlcyBhdCB0b3AgYWJvdXQgaW50ZXJuYWwgdnMuIGV4dGVybmFsIGNvcGllcyBvZiB0aGlzIHByb3BlcnR5LlxuICAgICAgY29uc3QgcHJldmlvdXNTZWxlY3RlZEluZGV4ID0gdGhpc1tpbnRlcm5hbFNlbGVjdGVkSW5kZXhTeW1ib2xdO1xuICAgICAgbGV0IGl0ZW07XG4gICAgICBpZiAoaW5kZXggIT09IHRoaXNbZXh0ZXJuYWxTZWxlY3RlZEluZGV4U3ltYm9sXSkge1xuICAgICAgICAvLyBTdG9yZSB0aGUgbmV3IGluZGV4IGFuZCB0aGUgY29ycmVzcG9uZGluZyBpdGVtLlxuICAgICAgICBjb25zdCBpdGVtcyA9IHRoaXMuaXRlbXM7XG4gICAgICAgIGNvbnN0IGhhc0l0ZW1zID0gaXRlbXMgJiYgaXRlbXMubGVuZ3RoID4gMDtcbiAgICAgICAgaWYgKCEoaGFzSXRlbXMgJiYgaW5kZXggPj0gMCAmJiBpbmRleCA8IGl0ZW1zLmxlbmd0aCkpIHtcbiAgICAgICAgICBpbmRleCA9IC0xOyAvLyBObyBpdGVtIGF0IHRoYXQgaW5kZXguXG4gICAgICAgIH1cbiAgICAgICAgdGhpc1tleHRlcm5hbFNlbGVjdGVkSW5kZXhTeW1ib2xdID0gaW5kZXg7XG4gICAgICAgIGl0ZW0gPSBoYXNJdGVtcyAmJiBpbmRleCA+PSAwID8gaXRlbXNbaW5kZXhdIDogbnVsbDtcbiAgICAgICAgdGhpc1tleHRlcm5hbFNlbGVjdGVkSXRlbVN5bWJvbF0gPSBpdGVtO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbSA9IHRoaXNbZXh0ZXJuYWxTZWxlY3RlZEl0ZW1TeW1ib2xdO1xuICAgICAgfVxuXG4gICAgICAvLyBOb3cgbGV0IHN1cGVyIGRvIGFueSB3b3JrLlxuICAgICAgaWYgKCdzZWxlY3RlZEluZGV4JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEluZGV4ID0gaW5kZXg7IH1cblxuICAgICAgaWYgKGluZGV4ICE9PSBwcmV2aW91c1NlbGVjdGVkSW5kZXgpIHtcbiAgICAgICAgLy8gVGhlIHNlbGVjdGVkIGluZGV4IGNoYW5nZWQuXG4gICAgICAgIHRoaXNbaW50ZXJuYWxTZWxlY3RlZEluZGV4U3ltYm9sXSA9IGluZGV4O1xuXG4gICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdzZWxlY3RlZC1pbmRleC1jaGFuZ2VkJywge1xuICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgc2VsZWN0ZWRJbmRleDogaW5kZXgsXG4gICAgICAgICAgICB2YWx1ZTogaW5kZXggLy8gZm9yIFBvbHltZXIgYmluZGluZy4gVE9ETzogVmVyaWZ5IHN0aWxsIG5lY2Vzc2FyeVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzW2ludGVybmFsU2VsZWN0ZWRJdGVtU3ltYm9sXSAhPT0gaXRlbSkge1xuICAgICAgICAvLyBVcGRhdGUgc2VsZWN0ZWRJdGVtIHByb3BlcnR5IHNvIGl0IGNhbiBoYXZlIGl0cyBvd24gZWZmZWN0cy5cbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgaXRlbSwgb3IgbnVsbCBpZiB0aGVyZSBpcyBubyBzZWxlY3Rpb24uXG4gICAgICpcbiAgICAgKiBTZXR0aW5nIHRoaXMgcHJvcGVydHkgdG8gbnVsbCBkZXNlbGVjdHMgYW55IGN1cnJlbnRseS1zZWxlY3RlZCBpdGVtLlxuICAgICAqIFNldHRpbmcgdGhpcyBwcm9wZXJ0eSB0byBhbiBvYmplY3QgdGhhdCBpcyBub3QgaW4gdGhlIGxpc3QgaGFzIG5vIGVmZmVjdC5cbiAgICAgKlxuICAgICAqIFRPRE86IEV2ZW4gaWYgc2VsZWN0aW9uUmVxdWlyZWQsIGNhbiBzdGlsbCBleHBsaWNpdGx5IHNldCBzZWxlY3RlZEl0ZW0gdG8gbnVsbC5cbiAgICAgKiBUT0RPOiBJZiBzZWxlY3Rpb25SZXF1aXJlZCwgbGVhdmUgc2VsZWN0aW9uIGFsb25lP1xuICAgICAqXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0ZWRJdGVtKCkge1xuICAgICAgcmV0dXJuIHRoaXNbZXh0ZXJuYWxTZWxlY3RlZEl0ZW1TeW1ib2xdIHx8IG51bGw7XG4gICAgfVxuICAgIHNldCBzZWxlY3RlZEl0ZW0oaXRlbSkge1xuICAgICAgLy8gU2VlIG5vdGVzIGF0IHRvcCBhYm91dCBpbnRlcm5hbCB2cy4gZXh0ZXJuYWwgY29waWVzIG9mIHRoaXMgcHJvcGVydHkuXG4gICAgICBjb25zdCBwcmV2aW91c1NlbGVjdGVkSXRlbSA9IHRoaXNbaW50ZXJuYWxTZWxlY3RlZEl0ZW1TeW1ib2xdO1xuICAgICAgbGV0IGluZGV4O1xuICAgICAgaWYgKGl0ZW0gIT09IHRoaXNbZXh0ZXJuYWxTZWxlY3RlZEl0ZW1TeW1ib2xdKSB7XG4gICAgICAgIC8vIFN0b3JlIGl0ZW0gYW5kIGxvb2sgdXAgY29ycmVzcG9uZGluZyBpbmRleC5cbiAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLml0ZW1zO1xuICAgICAgICBjb25zdCBoYXNJdGVtcyA9IGl0ZW1zICYmIGl0ZW1zLmxlbmd0aCA+IDA7XG4gICAgICAgIGluZGV4ID0gaGFzSXRlbXMgPyBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGl0ZW1zLCBpdGVtKSA6IC0xO1xuICAgICAgICB0aGlzW2V4dGVybmFsU2VsZWN0ZWRJbmRleFN5bWJvbF0gPSBpbmRleDtcbiAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgIGl0ZW0gPSBudWxsOyAvLyBUaGUgaW5kaWNhdGVkIGl0ZW0gaXNuJ3QgYWN0dWFsbHkgaW4gYGl0ZW1zYC5cbiAgICAgICAgfVxuICAgICAgICB0aGlzW2V4dGVybmFsU2VsZWN0ZWRJdGVtU3ltYm9sXSA9IGl0ZW07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmRleCA9IHRoaXNbZXh0ZXJuYWxTZWxlY3RlZEluZGV4U3ltYm9sXTtcbiAgICAgIH1cblxuICAgICAgLy8gTm93IGxldCBzdXBlciBkbyBhbnkgd29yay5cbiAgICAgIGlmICgnc2VsZWN0ZWRJdGVtJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEl0ZW0gPSBpdGVtOyB9XG5cbiAgICAgIGlmIChpdGVtICE9PSBwcmV2aW91c1NlbGVjdGVkSXRlbSkge1xuICAgICAgICAvLyBUaGUgc2VsZWN0ZWQgaXRlbSBjaGFuZ2VkLlxuICAgICAgICB0aGlzW2ludGVybmFsU2VsZWN0ZWRJdGVtU3ltYm9sXSA9IGl0ZW07XG5cbiAgICAgICAgaWYgKHByZXZpb3VzU2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgICAgLy8gVXBkYXRlIHNlbGVjdGlvbiBzdGF0ZSBvZiBvbGQgaXRlbS5cbiAgICAgICAgICB0aGlzW3N5bWJvbHMuaXRlbVNlbGVjdGVkXShwcmV2aW91c1NlbGVjdGVkSXRlbSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgLy8gVXBkYXRlIHNlbGVjdGlvbiBzdGF0ZSB0byBuZXcgaXRlbS5cbiAgICAgICAgICB0aGlzW3N5bWJvbHMuaXRlbVNlbGVjdGVkXShpdGVtLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZVBvc3NpYmxlTmF2aWdhdGlvbnModGhpcyk7XG5cbiAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3NlbGVjdGVkLWl0ZW0tY2hhbmdlZCcsIHtcbiAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgIHNlbGVjdGVkSXRlbTogaXRlbSxcbiAgICAgICAgICAgIHZhbHVlOiBpdGVtIC8vIGZvciBQb2x5bWVyIGJpbmRpbmdcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpc1tpbnRlcm5hbFNlbGVjdGVkSW5kZXhTeW1ib2xdICE9PSBpbmRleCkge1xuICAgICAgICAvLyBVcGRhdGUgc2VsZWN0ZWRJbmRleCBwcm9wZXJ0eSBzbyBpdCBjYW4gaGF2ZSBpdHMgb3duIGVmZmVjdHMuXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCB0aGUgZmlyc3QgaXRlbSBpbiB0aGUgbGlzdC5cbiAgICAgKi9cbiAgICBzZWxlY3RGaXJzdCgpIHtcbiAgICAgIGlmIChzdXBlci5zZWxlY3RGaXJzdCkgeyBzdXBlci5zZWxlY3RGaXJzdCgpOyB9XG4gICAgICByZXR1cm4gc2VsZWN0SW5kZXgodGhpcywgMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiB0aGUgbGlzdCBzaG91bGQgYWx3YXlzIGhhdmUgYSBzZWxlY3Rpb24gKGlmIGl0IGhhcyBpdGVtcykuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuICAgIGdldCBzZWxlY3Rpb25SZXF1aXJlZCgpIHtcbiAgICAgIHJldHVybiB0aGlzW3NlbGVjdGlvblJlcXVpcmVkU3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGlvblJlcXVpcmVkKHNlbGVjdGlvblJlcXVpcmVkKSB7XG4gICAgICB0aGlzW3NlbGVjdGlvblJlcXVpcmVkU3ltYm9sXSA9IHNlbGVjdGlvblJlcXVpcmVkO1xuICAgICAgaWYgKCdzZWxlY3Rpb25SZXF1aXJlZCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0aW9uUmVxdWlyZWQgPSBzZWxlY3Rpb25SZXF1aXJlZDsgfVxuICAgICAgdHJhY2tTZWxlY3RlZEl0ZW0odGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiBzZWxlY3Rpb24gbmF2aWdhdGlvbnMgd3JhcCBmcm9tIGxhc3QgdG8gZmlyc3QsIGFuZCB2aWNlIHZlcnNhLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0aW9uV3JhcHMoKSB7XG4gICAgICByZXR1cm4gdGhpc1tzZWxlY3Rpb25XcmFwc1N5bWJvbF07XG4gICAgfVxuICAgIHNldCBzZWxlY3Rpb25XcmFwcyh2YWx1ZSkge1xuICAgICAgdGhpc1tzZWxlY3Rpb25XcmFwc1N5bWJvbF0gPSBTdHJpbmcodmFsdWUpID09PSAndHJ1ZSc7XG4gICAgICBpZiAoJ3NlbGVjdGlvbldyYXBzJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3Rpb25XcmFwcyA9IHZhbHVlOyB9XG4gICAgICB1cGRhdGVQb3NzaWJsZU5hdmlnYXRpb25zKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCB0aGUgbGFzdCBpdGVtIGluIHRoZSBsaXN0LlxuICAgICAqL1xuICAgIHNlbGVjdExhc3QoKSB7XG4gICAgICBpZiAoc3VwZXIuc2VsZWN0TGFzdCkgeyBzdXBlci5zZWxlY3RMYXN0KCk7IH1cbiAgICAgIHJldHVybiBzZWxlY3RJbmRleCh0aGlzLCB0aGlzLml0ZW1zLmxlbmd0aCAtIDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCB0aGUgbmV4dCBpdGVtIGluIHRoZSBsaXN0LlxuICAgICAqL1xuICAgIHNlbGVjdE5leHQoKSB7XG4gICAgICBpZiAoc3VwZXIuc2VsZWN0TmV4dCkgeyBzdXBlci5zZWxlY3ROZXh0KCk7IH1cbiAgICAgIHJldHVybiBzZWxlY3RJbmRleCh0aGlzLCB0aGlzLnNlbGVjdGVkSW5kZXggKyAxKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgdGhlIHByZXZpb3VzIGl0ZW0gaW4gdGhlIGxpc3QuXG4gICAgICpcbiAgICAgKiBJZiB0aGUgbGlzdCBoYXMgbm8gc2VsZWN0aW9uLCB0aGUgbGFzdCBpdGVtIHdpbGwgYmUgc2VsZWN0ZWQuXG4gICAgICovXG4gICAgc2VsZWN0UHJldmlvdXMoKSB7XG4gICAgICBpZiAoc3VwZXIuc2VsZWN0UHJldmlvdXMpIHsgc3VwZXIuc2VsZWN0UHJldmlvdXMoKTsgfVxuICAgICAgY29uc3QgbmV3SW5kZXggPSB0aGlzLnNlbGVjdGVkSW5kZXggPCAwID9cbiAgICAgICAgdGhpcy5pdGVtcy5sZW5ndGggLSAxIDogICAgIC8vIE5vIHNlbGVjdGlvbiB5ZXQ7IHNlbGVjdCBsYXN0IGl0ZW0uXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCAtIDE7XG4gICAgICByZXR1cm4gc2VsZWN0SW5kZXgodGhpcywgbmV3SW5kZXgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpcmVzIHdoZW4gdGhlIHNlbGVjdGVkSXRlbSBwcm9wZXJ0eSBjaGFuZ2VzLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIFNpbmdsZVNlbGVjdGlvblxuICAgICAqIEBldmVudCBzZWxlY3RlZC1pdGVtLWNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBkZXRhaWwuc2VsZWN0ZWRJdGVtIFRoZSBuZXcgc2VsZWN0ZWQgaXRlbS5cbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBkZXRhaWwucHJldmlvdXNJdGVtIFRoZSBwcmV2aW91c2x5IHNlbGVjdGVkIGl0ZW0uXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBGaXJlcyB3aGVuIHRoZSBzZWxlY3RlZEluZGV4IHByb3BlcnR5IGNoYW5nZXMuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgU2luZ2xlU2VsZWN0aW9uXG4gICAgICogQGV2ZW50IHNlbGVjdGVkLWluZGV4LWNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGV0YWlsLnNlbGVjdGVkSW5kZXggVGhlIG5ldyBzZWxlY3RlZCBpbmRleC5cbiAgICAgKi9cblxuICB9XG5cbiAgcmV0dXJuIFNpbmdsZVNlbGVjdGlvbjtcbn07XG5cblxuLy8gRW5zdXJlIHRoZSBnaXZlbiBpbmRleCBpcyB3aXRoaW4gYm91bmRzLCBhbmQgc2VsZWN0IGl0IGlmIGl0J3Mgbm90IGFscmVhZHlcbi8vIHNlbGVjdGVkLlxuZnVuY3Rpb24gc2VsZWN0SW5kZXgoZWxlbWVudCwgaW5kZXgpIHtcbiAgY29uc3QgY291bnQgPSBlbGVtZW50Lml0ZW1zLmxlbmd0aDtcblxuICBjb25zdCBib3VuZGVkSW5kZXggPSAoZWxlbWVudC5zZWxlY3Rpb25XcmFwcykgP1xuICAgIC8vIEphdmFTY3JpcHQgbW9kIGRvZXNuJ3QgaGFuZGxlIG5lZ2F0aXZlIG51bWJlcnMgdGhlIHdheSB3ZSB3YW50IHRvIHdyYXAuXG4gICAgLy8gU2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE4NjE4MjUwLzc2NDcyXG4gICAgKChpbmRleCAlIGNvdW50KSArIGNvdW50KSAlIGNvdW50IDpcblxuICAgIC8vIEtlZXAgaW5kZXggd2l0aGluIGJvdW5kcyBvZiBhcnJheS5cbiAgICBNYXRoLm1heChNYXRoLm1pbihpbmRleCwgY291bnQgLSAxKSwgMCk7XG5cbiAgY29uc3QgcHJldmlvdXNJbmRleCA9IGVsZW1lbnQuc2VsZWN0ZWRJbmRleDtcbiAgaWYgKHByZXZpb3VzSW5kZXggIT09IGJvdW5kZWRJbmRleCkge1xuICAgIGVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9IGJvdW5kZWRJbmRleDtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuLy8gRm9sbG93aW5nIGEgY2hhbmdlIGluIHRoZSBzZXQgb2YgaXRlbXMsIG9yIGluIHRoZSB2YWx1ZSBvZiB0aGVcbi8vIGBzZWxlY3Rpb25SZXF1aXJlZGAgcHJvcGVydHksIHJlYWNxdWlyZSB0aGUgc2VsZWN0ZWQgaXRlbS4gSWYgaXQncyBtb3ZlZCxcbi8vIHVwZGF0ZSBgc2VsZWN0ZWRJbmRleGAuIElmIGl0J3MgYmVlbiByZW1vdmVkLCBhbmQgYSBzZWxlY3Rpb24gaXMgcmVxdWlyZWQsXG4vLyB0cnkgdG8gc2VsZWN0IGFub3RoZXIgaXRlbS5cbmZ1bmN0aW9uIHRyYWNrU2VsZWN0ZWRJdGVtKGVsZW1lbnQpIHtcblxuICBjb25zdCBpdGVtcyA9IGVsZW1lbnQuaXRlbXM7XG4gIGNvbnN0IGl0ZW1Db3VudCA9IGl0ZW1zID8gaXRlbXMubGVuZ3RoIDogMDtcblxuICBjb25zdCBwcmV2aW91c1NlbGVjdGVkSXRlbSA9IGVsZW1lbnQuc2VsZWN0ZWRJdGVtO1xuICBpZiAoIXByZXZpb3VzU2VsZWN0ZWRJdGVtKSB7XG4gICAgLy8gTm8gaXRlbSB3YXMgcHJldmlvdXNseSBzZWxlY3RlZC5cbiAgICBpZiAoZWxlbWVudC5zZWxlY3Rpb25SZXF1aXJlZCkge1xuICAgICAgLy8gU2VsZWN0IHRoZSBmaXJzdCBpdGVtIGJ5IGRlZmF1bHQuXG4gICAgICBlbGVtZW50LnNlbGVjdGVkSW5kZXggPSAwO1xuICAgIH1cbiAgfSBlbHNlIGlmIChpdGVtQ291bnQgPT09IDApIHtcbiAgICAvLyBXZSd2ZSBsb3N0IHRoZSBzZWxlY3Rpb24sIGFuZCB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byBzZWxlY3QuXG4gICAgZWxlbWVudC5zZWxlY3RlZEl0ZW0gPSBudWxsO1xuICB9IGVsc2Uge1xuICAgIC8vIFRyeSB0byBmaW5kIHRoZSBwcmV2aW91c2x5LXNlbGVjdGVkIGl0ZW0gaW4gdGhlIGN1cnJlbnQgc2V0IG9mIGl0ZW1zLlxuICAgIGNvbnN0IGluZGV4SW5DdXJyZW50SXRlbXMgPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGl0ZW1zLCBwcmV2aW91c1NlbGVjdGVkSXRlbSk7XG4gICAgY29uc3QgcHJldmlvdXNTZWxlY3RlZEluZGV4ID0gZWxlbWVudC5zZWxlY3RlZEluZGV4O1xuICAgIGlmIChpbmRleEluQ3VycmVudEl0ZW1zIDwgMCkge1xuICAgICAgLy8gUHJldmlvdXNseS1zZWxlY3RlZCBpdGVtIHdhcyByZW1vdmVkIGZyb20gdGhlIGl0ZW1zLlxuICAgICAgLy8gU2VsZWN0IHRoZSBpdGVtIGF0IHRoZSBzYW1lIGluZGV4IChpZiBpdCBleGlzdHMpIG9yIGFzIGNsb3NlIGFzIHBvc3NpYmxlLlxuICAgICAgY29uc3QgbmV3U2VsZWN0ZWRJbmRleCA9IE1hdGgubWluKHByZXZpb3VzU2VsZWN0ZWRJbmRleCwgaXRlbUNvdW50IC0gMSk7XG4gICAgICAvLyBTZWxlY3QgYnkgaXRlbSwgc2luY2UgaW5kZXggbWF5IGJlIHRoZSBzYW1lLCBhbmQgd2Ugd2FudCB0byByYWlzZSB0aGVcbiAgICAgIC8vIHNlbGVjdGVkLWl0ZW0tY2hhbmdlZCBldmVudC5cbiAgICAgIGVsZW1lbnQuc2VsZWN0ZWRJdGVtID0gaXRlbXNbbmV3U2VsZWN0ZWRJbmRleF07XG4gICAgfSBlbHNlIGlmIChpbmRleEluQ3VycmVudEl0ZW1zICE9PSBwcmV2aW91c1NlbGVjdGVkSW5kZXgpIHtcbiAgICAgIC8vIFByZXZpb3VzbHktc2VsZWN0ZWQgaXRlbSBzdGlsbCB0aGVyZSwgYnV0IGNoYW5nZWQgcG9zaXRpb24uXG4gICAgICBlbGVtZW50LnNlbGVjdGVkSW5kZXggPSBpbmRleEluQ3VycmVudEl0ZW1zO1xuICAgIH1cbiAgfVxufVxuXG4vLyBGb2xsb3dpbmcgYSBjaGFuZ2UgaW4gc2VsZWN0aW9uLCByZXBvcnQgd2hldGhlciBpdCdzIG5vdyBwb3NzaWJsZSB0b1xuLy8gZ28gbmV4dC9wcmV2aW91cyBmcm9tIHRoZSBnaXZlbiBpbmRleC5cbmZ1bmN0aW9uIHVwZGF0ZVBvc3NpYmxlTmF2aWdhdGlvbnMoZWxlbWVudCkge1xuICBsZXQgY2FuU2VsZWN0TmV4dDtcbiAgbGV0IGNhblNlbGVjdFByZXZpb3VzO1xuICBjb25zdCBpdGVtcyA9IGVsZW1lbnQuaXRlbXM7XG4gIGlmIChpdGVtcyA9PSBudWxsIHx8IGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgIC8vIE5vIGl0ZW1zIHRvIHNlbGVjdC5cbiAgICBjYW5TZWxlY3ROZXh0ID0gZmFsc2U7XG4gICAgY2FuU2VsZWN0UHJldmlvdXMgPSBmYWxzZTtcbiAgfSBpZiAoZWxlbWVudC5zZWxlY3Rpb25XcmFwcykge1xuICAgIC8vIFNpbmNlIHRoZXJlIGFyZSBpdGVtcywgY2FuIGFsd2F5cyBnbyBuZXh0L3ByZXZpb3VzLlxuICAgIGNhblNlbGVjdE5leHQgPSB0cnVlO1xuICAgIGNhblNlbGVjdFByZXZpb3VzID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBpbmRleCA9IGVsZW1lbnQuc2VsZWN0ZWRJbmRleDtcbiAgICBpZiAoaW5kZXggPCAwICYmIGl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIFNwZWNpYWwgY2FzZS4gSWYgdGhlcmUgYXJlIGl0ZW1zIGJ1dCBubyBzZWxlY3Rpb24sIGRlY2xhcmUgdGhhdCBpdCdzXG4gICAgICAvLyBhbHdheXMgcG9zc2libGUgdG8gZ28gbmV4dC9wcmV2aW91cyB0byBjcmVhdGUgYSBzZWxlY3Rpb24uXG4gICAgICBjYW5TZWxlY3ROZXh0ID0gdHJ1ZTtcbiAgICAgIGNhblNlbGVjdFByZXZpb3VzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTm9ybWFsIGNhc2U6IHdlIGhhdmUgYW4gaW5kZXggaW4gYSBsaXN0IHRoYXQgaGFzIGl0ZW1zLlxuICAgICAgY2FuU2VsZWN0UHJldmlvdXMgPSAoaW5kZXggPiAwKTtcbiAgICAgIGNhblNlbGVjdE5leHQgPSAoaW5kZXggPCBpdGVtcy5sZW5ndGggLSAxKTtcbiAgICB9XG4gIH1cbiAgaWYgKGVsZW1lbnQuY2FuU2VsZWN0TmV4dCAhPT0gY2FuU2VsZWN0TmV4dCkge1xuICAgIGVsZW1lbnQuY2FuU2VsZWN0TmV4dCA9IGNhblNlbGVjdE5leHQ7XG4gIH1cbiAgaWYgKGVsZW1lbnQuY2FuU2VsZWN0UHJldmlvdXMgIT09IGNhblNlbGVjdFByZXZpb3VzKSB7XG4gICAgZWxlbWVudC5jYW5TZWxlY3RQcmV2aW91cyA9IGNhblNlbGVjdFByZXZpb3VzO1xuICB9XG59XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4vY3JlYXRlU3ltYm9sJztcbmltcG9ydCBzeW1ib2xzIGZyb20gJy4vc3ltYm9scyc7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IGRlbHRhWFN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnZGVsdGFYJyk7XG5jb25zdCBkZWx0YVlTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2RlbHRhWScpO1xuY29uc3QgbXVsdGlUb3VjaFN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnbXVsdGlUb3VjaCcpO1xuY29uc3QgcHJldmlvdXNYU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdwcmV2aW91c1gnKTtcbmNvbnN0IHByZXZpb3VzWVN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgncHJldmlvdXNZJyk7XG5jb25zdCBzdGFydFhTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3N0YXJ0WCcpO1xuY29uc3QgdHJhdmVsRnJhY3Rpb25TeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3RyYXZlbEZyYWN0aW9uJyk7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBTd2lwZURpcmVjdGlvbi4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIG1hcHMgdG91Y2ggZ2VzdHVyZXMgKHN3aXBlIGxlZnQsIHN3aXBlIHJpZ2h0KSB0byBkaXJlY3Rpb25cbiAgICogc2VtYW50aWNzIChnbyByaWdodCwgZ28gbGVmdCkuXG4gICAqXG4gICAqIEJ5IGRlZmF1bHQsIHRoaXMgbWl4aW4gcHJlc2VudHMgbm8gdXNlci12aXNpYmxlIGVmZmVjdHM7IGl0IGp1c3QgaW5kaWNhdGVzXG4gICAqIGEgZGlyZWN0aW9uIGluIHdoaWNoIHRoZSB1c2VyIGlzIGN1cnJlbnRseSBzd2lwaW5nIG9yIGhhcyBmaW5pc2hlZCBzd2lwaW5nLlxuICAgKiBUbyBtYXAgdGhlIGRpcmVjdGlvbiB0byBhIGNoYW5nZSBpbiBzZWxlY3Rpb24sIHVzZVxuICAgKiBbRGlyZWN0aW9uU2VsZWN0aW9uTWl4aW5dKERpcmVjdGlvblNlbGVjdGlvbk1peGluLm1kKS5cbiAgICovXG4gIGNsYXNzIFN3aXBlRGlyZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG5cbiAgICAgIHRoaXMudHJhdmVsRnJhY3Rpb24gPSAwO1xuXG4gICAgICAvLyBJbiBhbGwgdG91Y2ggZXZlbnRzLCBvbmx5IGhhbmRsZSBzaW5nbGUgdG91Y2hlcy4gV2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgLy8gaW5hZHZlcnRlbnRseSBkbyB3b3JrIHdoZW4gdGhlIHVzZXIncyB0cnlpbmcgdG8gcGluY2gtem9vbSBmb3IgZXhhbXBsZS5cbiAgICAgIC8vIFRPRE86IEV2ZW4gYmV0dGVyIGFwcHJvYWNoIHRoYW4gYmVsb3cgd291bGQgYmUgdG8gaWdub3JlIHRvdWNoZXMgYWZ0ZXJcbiAgICAgIC8vIHRoZSBmaXJzdCBpZiB0aGUgdXNlciBoYXMgYWxyZWFkeSBiZWd1biBhIHN3aXBlLlxuICAgICAgLy8gVE9ETzogVG91Y2ggZXZlbnRzIHNob3VsZCBwcm9iYWJseSBiZSBmYWN0b3JlZCBvdXQgaW50byBpdHMgb3duIG1peGluLlxuICAgICAgaWYgKHdpbmRvdy5Qb2ludGVyRXZlbnQpIHtcbiAgICAgICAgLy8gUHJlZmVyIGxpc3RlbmluZyB0byBzdGFuZGFyZCBwb2ludGVyIGV2ZW50cy5cbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIGV2ZW50ID0+IHtcbiAgICAgICAgICBpZiAoaXNFdmVudEZvclBlbk9yUHJpbWFyeVRvdWNoKGV2ZW50KSkge1xuICAgICAgICAgICAgdG91Y2hTdGFydCh0aGlzLCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJtb3ZlJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGlmIChpc0V2ZW50Rm9yUGVuT3JQcmltYXJ5VG91Y2goZXZlbnQpKSB7XG4gICAgICAgICAgICBjb25zdCBoYW5kbGVkID0gdG91Y2hNb3ZlKHRoaXMsIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuICAgICAgICAgICAgaWYgKGhhbmRsZWQpIHtcbiAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICBpZiAoaXNFdmVudEZvclBlbk9yUHJpbWFyeVRvdWNoKGV2ZW50KSkge1xuICAgICAgICAgICAgdG91Y2hFbmQodGhpcywgZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFBvaW50ZXIgZXZlbnRzIG5vdCBzdXBwb3J0ZWQgLS0gbGlzdGVuIHRvIG9sZGVyIHRvdWNoIGV2ZW50cy5cbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZXZlbnQgPT4ge1xuICAgICAgICAgIGlmICh0aGlzW211bHRpVG91Y2hTeW1ib2xdKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfSBlbHNlIGlmIChldmVudC50b3VjaGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgY29uc3QgY2xpZW50WCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgICAgICBjb25zdCBjbGllbnRZID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WTtcbiAgICAgICAgICAgIHRvdWNoU3RhcnQodGhpcywgY2xpZW50WCwgY2xpZW50WSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXNbbXVsdGlUb3VjaFN5bWJvbF0gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGlmICghdGhpc1ttdWx0aVRvdWNoU3ltYm9sXSAmJiBldmVudC50b3VjaGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgY29uc3QgY2xpZW50WCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgICAgICBjb25zdCBjbGllbnRZID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WTtcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZWQgPSB0b3VjaE1vdmUodGhpcywgY2xpZW50WCwgY2xpZW50WSk7XG4gICAgICAgICAgICBpZiAoaGFuZGxlZCkge1xuICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBldmVudCA9PiB7XG4gICAgICAgICAgaWYgKGV2ZW50LnRvdWNoZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAvLyBBbGwgdG91Y2hlcyByZW1vdmVkOyBnZXN0dXJlIGlzIGNvbXBsZXRlLlxuICAgICAgICAgICAgaWYgKCF0aGlzW211bHRpVG91Y2hTeW1ib2xdKSB7XG4gICAgICAgICAgICAgIC8vIFNpbmdsZS10b3VjaCBzd2lwZSBoYXMgZmluaXNoZWQuXG4gICAgICAgICAgICAgIGNvbnN0IGNsaWVudFggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICAgICAgICBjb25zdCBjbGllbnRZID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WTtcbiAgICAgICAgICAgICAgdG91Y2hFbmQodGhpcywgY2xpZW50WCwgY2xpZW50WSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzW211bHRpVG91Y2hTeW1ib2xdID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jb25uZWN0ZWRDYWxsYmFjaykgeyBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpOyB9XG5cbiAgICAgIC8vIEZvciB0aGUgY29tcG9uZW50IHRvIHJlY2VpdmUgUG9pbnRlckV2ZW50cyBpbiBJRS9FZGdlLCB3ZSBuZWVkIHRvIHNldFxuICAgICAgLy8gdG91Y2gtYWN0aW9uOiBub25lLiBPbmx5IG1ha2UgdGhpcyBjaGFuZ2UgaWYgdG91Y2gtYWN0aW9uIGlzIGN1cnJlbnRseVxuICAgICAgLy8gdGhlIGRlZmF1bHQgdmFsdWUgKFwiYXV0b1wiKSwgaW4gY2FzZSB0aGUgZGV2ZWxvcGVyIGtub3dzIGJldHRlciB0aGFuIHdlXG4gICAgICAvLyBkbyB3aGF0IHRoZXkgd2FudCBpbiB0aGVpciBwYXJ0aWN1bGFyIGNvbnRleHQuXG4gICAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzKS50b3VjaEFjdGlvbiA9PT0gJ2F1dG8nKSB7XG4gICAgICAgIHRoaXMuc3R5bGUudG91Y2hBY3Rpb24gPSAnbm9uZSc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCBpbXBsZW1lbnRhdGlvbi5cbiAgICBnZXQgW3N5bWJvbHMuZHJhZ2dpbmddKCkge1xuICAgICAgcmV0dXJuIHN1cGVyW3N5bWJvbHMuZHJhZ2dpbmddO1xuICAgIH1cbiAgICBzZXQgW3N5bWJvbHMuZHJhZ2dpbmddKHZhbHVlKSB7XG4gICAgICBpZiAoc3ltYm9scy5kcmFnZ2luZyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlcltzeW1ib2xzLmRyYWdnaW5nXSA9IHZhbHVlOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIGxlZnQuXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLlxuICAgICAqL1xuICAgIFtzeW1ib2xzLmdvTGVmdF0oKSB7XG4gICAgICBpZiAoc3VwZXJbc3ltYm9scy5nb0xlZnRdKSB7IHJldHVybiBzdXBlcltzeW1ib2xzLmdvTGVmdF0oKTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSByaWdodC5cbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuXG4gICAgICovXG4gICAgW3N5bWJvbHMuZ29SaWdodF0oKSB7XG4gICAgICBpZiAoc3VwZXJbc3ltYm9scy5nb1JpZ2h0XSkgeyByZXR1cm4gc3VwZXJbc3ltYm9scy5nb1JpZ2h0XSgpOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGRpc3RhbmNlIHRoZSBmaXJzdCB0b3VjaHBvaW50IGhhcyB0cmF2ZWxlZCBzaW5jZSB0aGUgYmVnaW5uaW5nIG9mIGFcbiAgICAgKiBkcmFnLCBleHByZXNzZWQgYXMgYSBmcmFjdGlvbiBvZiB0aGUgZWxlbWVudCdzIHdpZHRoLlxuICAgICAqXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICovXG4gICAgZ2V0IHRyYXZlbEZyYWN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXNbdHJhdmVsRnJhY3Rpb25TeW1ib2xdO1xuICAgIH1cbiAgICBzZXQgdHJhdmVsRnJhY3Rpb24odmFsdWUpIHtcbiAgICAgIHRoaXNbdHJhdmVsRnJhY3Rpb25TeW1ib2xdID0gdmFsdWU7XG4gICAgICBpZiAoJ3RyYXZlbEZyYWN0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci50cmF2ZWxGcmFjdGlvbiA9IHZhbHVlOyB9XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gU3dpcGVEaXJlY3Rpb247XG59O1xuXG5cbi8vIFJldHVybiB0cnVlIGlmIHRoZSBwb2ludGVyIGV2ZW50IGlzIGZvciB0aGUgcGVuLCBvciB0aGUgcHJpbWFyeSB0b3VjaCBwb2ludC5cbmZ1bmN0aW9uIGlzRXZlbnRGb3JQZW5PclByaW1hcnlUb3VjaChldmVudCkge1xuICByZXR1cm4gZXZlbnQucG9pbnRlclR5cGUgPT09ICdwZW4nIHx8XG4gICAgICAoZXZlbnQucG9pbnRlclR5cGUgPT09ICd0b3VjaCcgJiYgZXZlbnQuaXNQcmltYXJ5KTtcbn1cblxuLypcbiAqIEludm9rZWQgd2hlbiB0aGUgdXNlciBoYXMgZmluaXNoZWQgYSB0b3VjaCBvcGVyYXRpb24uXG4gKi9cbmZ1bmN0aW9uIHRvdWNoRW5kKGVsZW1lbnQsIGNsaWVudFgsIGNsaWVudFkpIHtcbiAgZWxlbWVudFtzeW1ib2xzLmRyYWdnaW5nXSA9IGZhbHNlO1xuICBpZiAoZWxlbWVudFtkZWx0YVhTeW1ib2xdID49IDIwKSB7XG4gICAgLy8gRmluaXNoZWQgZ29pbmcgcmlnaHQgYXQgaGlnaCBzcGVlZC5cbiAgICBlbGVtZW50W3N5bWJvbHMuZ29MZWZ0XSgpO1xuICB9IGVsc2UgaWYgKGVsZW1lbnRbZGVsdGFYU3ltYm9sXSA8PSAtMjApIHtcbiAgICAvLyBGaW5pc2hlZCBnb2luZyBsZWZ0IGF0IGhpZ2ggc3BlZWQuXG4gICAgZWxlbWVudFtzeW1ib2xzLmdvUmlnaHRdKCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gRmluaXNoZWQgYXQgbG93IHNwZWVkLlxuICAgIHRyYWNrVG8oZWxlbWVudCwgY2xpZW50WCk7XG4gICAgY29uc3QgdHJhdmVsRnJhY3Rpb24gPSBlbGVtZW50LnRyYXZlbEZyYWN0aW9uO1xuICAgIGlmICh0cmF2ZWxGcmFjdGlvbiA+PSAwLjUpIHtcbiAgICAgIGVsZW1lbnRbc3ltYm9scy5nb1JpZ2h0XSgpO1xuICAgIH0gZWxzZSBpZiAodHJhdmVsRnJhY3Rpb24gPD0gLTAuNSkge1xuICAgICAgZWxlbWVudFtzeW1ib2xzLmdvTGVmdF0oKTtcbiAgICB9XG4gIH1cbiAgZWxlbWVudC50cmF2ZWxGcmFjdGlvbiA9IDA7XG4gIGVsZW1lbnRbZGVsdGFYU3ltYm9sXSA9IG51bGw7XG4gIGVsZW1lbnRbZGVsdGFZU3ltYm9sXSA9IG51bGw7XG59XG5cbi8qXG4gKiBJbnZva2VkIHdoZW4gdGhlIHVzZXIgaGFzIG1vdmVkIGR1cmluZyBhIHRvdWNoIG9wZXJhdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG91Y2hNb3ZlKGVsZW1lbnQsIGNsaWVudFgsIGNsaWVudFkpIHtcblxuICBlbGVtZW50W2RlbHRhWFN5bWJvbF0gPSBjbGllbnRYIC0gZWxlbWVudFtwcmV2aW91c1hTeW1ib2xdO1xuICBlbGVtZW50W2RlbHRhWVN5bWJvbF0gPSBjbGllbnRZIC0gZWxlbWVudFtwcmV2aW91c1lTeW1ib2xdO1xuICBlbGVtZW50W3ByZXZpb3VzWFN5bWJvbF0gPSBjbGllbnRYO1xuICBlbGVtZW50W3ByZXZpb3VzWVN5bWJvbF0gPSBjbGllbnRZO1xuICBpZiAoTWF0aC5hYnMoZWxlbWVudFtkZWx0YVhTeW1ib2xdKSA+IE1hdGguYWJzKGVsZW1lbnRbZGVsdGFZU3ltYm9sXSkpIHtcbiAgICAvLyBNb3ZlIHdhcyBtb3N0bHkgaG9yaXpvbnRhbC5cbiAgICB0cmFja1RvKGVsZW1lbnQsIGNsaWVudFgpO1xuICAgIC8vIEluZGljYXRlIHRoYXQgdGhlIGV2ZW50IHdhcyBoYW5kbGVkLiBJdCdkIGJlIG5pY2VyIGlmIHdlIGRpZG4ndCBoYXZlXG4gICAgLy8gdG8gZG8gdGhpcyBzbyB0aGF0LCBlLmcuLCBhIHVzZXIgY291bGQgYmUgc3dpcGluZyBsZWZ0IGFuZCByaWdodFxuICAgIC8vIHdoaWxlIHNpbXVsdGFuZW91c2x5IHNjcm9sbGluZyB1cCBhbmQgZG93bi4gKE5hdGl2ZSB0b3VjaCBhcHBzIGNhbiBkb1xuICAgIC8vIHRoYXQuKSBIb3dldmVyLCBNb2JpbGUgU2FmYXJpIHdhbnRzIHRvIGhhbmRsZSBzd2lwZSBldmVudHMgbmVhciB0aGVcbiAgICAvLyBwYWdlIGFuZCBpbnRlcnByZXQgdGhlbSBhcyBuYXZpZ2F0aW9ucy4gVG8gYXZvaWQgaGF2aW5nIGEgaG9yaXppb250YWxcbiAgICAvLyBzd2lwZSBtaXNpbnRlcHJldGVkIGFzIGEgbmF2aWdhdGlvbiwgd2UgaW5kaWNhdGUgdGhhdCB3ZSd2ZSBoYW5kbGVkXG4gICAgLy8gdGhlIGV2ZW50LCBhbmQgcHJldmVudCBkZWZhdWx0IGJlaGF2aW9yLlxuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIC8vIE1vdmUgd2FzIG1vc3RseSB2ZXJ0aWNhbC5cbiAgICByZXR1cm4gZmFsc2U7IC8vIE5vdCBoYW5kbGVkXG4gIH1cbn1cblxuLypcbiAqIEludm9rZWQgd2hlbiB0aGUgdXNlciBoYXMgYmVndW4gYSB0b3VjaCBvcGVyYXRpb24uXG4gKi9cbmZ1bmN0aW9uIHRvdWNoU3RhcnQoZWxlbWVudCwgY2xpZW50WCwgY2xpZW50WSkge1xuICBlbGVtZW50W3N5bWJvbHMuZHJhZ2dpbmddID0gdHJ1ZTtcbiAgZWxlbWVudFtzdGFydFhTeW1ib2xdID0gY2xpZW50WDtcbiAgZWxlbWVudFtwcmV2aW91c1hTeW1ib2xdID0gY2xpZW50WDtcbiAgZWxlbWVudFtwcmV2aW91c1lTeW1ib2xdID0gY2xpZW50WTtcbiAgZWxlbWVudFtkZWx0YVhTeW1ib2xdID0gMDtcbiAgZWxlbWVudFtkZWx0YVlTeW1ib2xdID0gMDtcbn1cblxuZnVuY3Rpb24gdHJhY2tUbyhlbGVtZW50LCB4KSB7XG4gIGNvbnN0IHdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgY29uc3QgZHJhZ0Rpc3RhbmNlID0gZWxlbWVudFtzdGFydFhTeW1ib2xdIC0geDtcbiAgY29uc3QgZnJhY3Rpb24gPSB3aWR0aCA+IDAgP1xuICAgIGRyYWdEaXN0YW5jZSAvIHdpZHRoIDpcbiAgICAwO1xuICBlbGVtZW50LnRyYXZlbEZyYWN0aW9uID0gZnJhY3Rpb247XG59XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4vY3JlYXRlU3ltYm9sJztcbmltcG9ydCBzeW1ib2xzIGZyb20gJy4vc3ltYm9scyc7XG5cblxuY29uc3QgcGxheWluZ1N5bWJvbCA9IGNyZWF0ZVN5bWJvbCgncGxheWluZycpO1xuY29uc3Qgc2VsZWN0aW9uVGltZXJEdXJhdGlvblN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnc2VsZWN0aW9uVGltZXJEdXJhdGlvbicpO1xuY29uc3QgdGltZXJUaW1lb3V0U3ltYm9sID0gY3JlYXRlU3ltYm9sKCd0aW1lclRpbWVvdXQnKTtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFRpbWVyU2VsZWN0aW9uLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggcHJvdmlkZXMgZm9yIGF1dG9tYXRpYyB0aW1lZCBjaGFuZ2VzIGluIHNlbGVjdGlvbi5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBpcyB1c2VmdWwgZm9yIGNyZWF0aW5nIHNsaWRlc2hvdy1saWtlIGVsZW1lbnRzIHN1Y2ggYXNcbiAgICogW2Jhc2ljLXNsaWRlc2hvd10oLi4vcGFja2FnZXMvYmFzaWMtc2xpZGVzaG93KSBhbmRcbiAgICogW2Jhc2ljLXNsaWRlc2hvdy13aXRoLWNvbnRyb2xzXSguLi9wYWNrYWdlcy9iYXNpYy1zbGlkZXNob3ctd2l0aC1jb250cm9scykuXG4gICAqXG4gICAqIFR5cGljYWwgdXNhZ2U6XG4gICAqXG4gICAqICAgICBjbGFzcyBDYXJvdXNlbFdpdGhUaW1lciBleHRlbmRzIFRpbWVyU2VsZWN0aW9uTWl4aW4oQ2Fyb3VzZWwpIHt9XG4gICAqICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ2Nhcm91c2VsLXdpdGgtYXJyb3dzJywgQ2Fyb3VzZWxXaXRoVGltZXIpO1xuICAgKlxuICAgKiBUaGlzIG1peGluIGV4cGVjdHMgdGhlIGNvbXBvbmVudCB0byBkZWZpbmUgYW4gYGl0ZW1zYCBwcm9wZXJ0eSwgYXMgd2VsbCBhc1xuICAgKiBgc2VsZWN0Rmlyc3RgIGFuZCBgc2VsZWN0TmV4dGAgbWV0aG9kcy4gWW91IGNhbiBpbXBsZW1lbnQgdGhvc2UgeW91cnNlbGYsXG4gICAqIG9yIHVzZSBbQ29udGVudEl0ZW1zTWl4aW5dKENvbnRlbnRJdGVtc01peGluLm1kKSBhbmRcbiAgICogW1NpbmdsZVNlbGVjdGlvbk1peGluXShTaW5nbGVTZWxlY3Rpb25NaXhpbi5tZCkuXG4gICAqL1xuICBjbGFzcyBUaW1lclNlbGVjdGlvbiBleHRlbmRzIGJhc2Uge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgLy8gU2V0IGRlZmF1bHRzLlxuICAgICAgaWYgKHR5cGVvZiB0aGlzLnBsYXlpbmcgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMucGxheWluZyA9IHRoaXNbc3ltYm9scy5kZWZhdWx0c10ucGxheWluZztcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5zZWxlY3Rpb25UaW1lckR1cmF0aW9uID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLnNlbGVjdGlvblRpbWVyRHVyYXRpb24gPSB0aGlzW3N5bWJvbHMuZGVmYXVsdHNdLnNlbGVjdGlvblRpbWVyRHVyYXRpb247XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29udGVudENoYW5nZWQoKSB7XG4gICAgICBpZiAoc3VwZXIuY29udGVudENoYW5nZWQpIHsgc3VwZXIuY29udGVudENoYW5nZWQoKTsgfVxuICAgICAgcmVzdGFydFRpbWVyKHRoaXMpO1xuICAgIH1cblxuICAgIGdldCBbc3ltYm9scy5kZWZhdWx0c10oKSB7XG4gICAgICBjb25zdCBkZWZhdWx0cyA9IHN1cGVyW3N5bWJvbHMuZGVmYXVsdHNdIHx8IHt9O1xuICAgICAgZGVmYXVsdHMucGxheWluZyA9IGZhbHNlO1xuICAgICAgZGVmYXVsdHMuc2VsZWN0aW9uVGltZXJEdXJhdGlvbiA9IDEwMDA7XG4gICAgICByZXR1cm4gZGVmYXVsdHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQmVnaW4gYXV0b21hdGljIHByb2dyZXNzaW9uIG9mIHRoZSBzZWxlY3Rpb24uXG4gICAgICovXG4gICAgcGxheSgpIHtcbiAgICAgIGlmIChzdXBlci5wbGF5KSB7IHN1cGVyLnBsYXkoKTsgfVxuICAgICAgc3RhcnRUaW1lcih0aGlzKTtcbiAgICAgIHRoaXNbcGxheWluZ1N5bWJvbF0gPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhdXNlIGF1dG9tYXRpYyBwcm9ncmVzc2lvbiBvZiB0aGUgc2VsZWN0aW9uLlxuICAgICAqL1xuICAgIHBhdXNlKCkge1xuICAgICAgaWYgKHN1cGVyLnBhdXNlKSB7IHN1cGVyLnBhdXNlKCk7IH1cbiAgICAgIGNsZWFyVGltZXIodGhpcyk7XG4gICAgICB0aGlzW3BsYXlpbmdTeW1ib2xdID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiB0aGUgc2VsZWN0aW9uIGlzIGJlaW5nIGF1dG9tYXRpY2FsbHkgYWR2YW5jZWQuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuICAgIGdldCBwbGF5aW5nKCkge1xuICAgICAgcmV0dXJuIHRoaXNbcGxheWluZ1N5bWJvbF07XG4gICAgfVxuICAgIHNldCBwbGF5aW5nKHBsYXlpbmcpIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzUGxheWluZyA9IHRoaXNbcGxheWluZ1N5bWJvbF07XG4gICAgICBjb25zdCBwYXJzZWQgPSBTdHJpbmcocGxheWluZykgPT09ICd0cnVlJzsgLy8gQ2FzdCB0byBib29sZWFuXG4gICAgICBpZiAoJ3BsYXlpbmcnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnBsYXlpbmcgPSBwbGF5aW5nOyB9XG4gICAgICBpZiAocGFyc2VkICE9PSBwcmV2aW91c1BsYXlpbmcpIHtcbiAgICAgICAgaWYgKHBsYXlpbmcpIHtcbiAgICAgICAgICB0aGlzLnBsYXkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnBhdXNlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFdoZW4gdGhlIHNlbGVjdGVkIGl0ZW0gY2hhbmdlcyAoYmVjYXVzZSBvZiBzb21ldGhpbmcgdGhpcyBtaXhpbiBkaWQsIG9yXG4gICAgICogd2FzIGNoYW5nZWQgYnkgYW4gb3V0c2lkZSBhZ2VudCBsaWtlIHRoZSB1c2VyKSwgd2Ugd2FpdCBiZWZvcmUgYWR2YW5jaW5nXG4gICAgICogdG8gdGhlIG5leHQgaXRlbS4gQnkgdHJpZ2dlcmluZyB0aGUgbmV4dCBpdGVtIHRoaXMgd2F5LCB3ZSBpbXBsaWNpdGx5IGdldFxuICAgICAqIGEgZGVzaXJhYmxlIGJlaGF2aW9yOiBpZiB0aGUgdXNlciBjaGFuZ2VzIHRoZSBzZWxlY3Rpb24gKGUuZy4sIGluIGFcbiAgICAgKiBjYXJvdXNlbCksIHdlIGxldCB0aGVtIHNlZSB0aGF0IHNlbGVjdGlvbiBzdGF0ZSBmb3IgYSB3aGlsZSBiZWZvcmVcbiAgICAgKiBhZHZhbmNpbmcgdGhlIHNlbGVjdGlvbiBvdXJzZWx2ZXMuXG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGVkSXRlbSgpIHtcbiAgICAgIHJldHVybiBzdXBlci5zZWxlY3RlZEl0ZW07XG4gICAgfVxuICAgIHNldCBzZWxlY3RlZEl0ZW0oaXRlbSkge1xuICAgICAgaWYgKCdzZWxlY3RlZEl0ZW0nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkSXRlbSA9IGl0ZW07IH1cbiAgICAgIHJlc3RhcnRUaW1lcih0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGltZSBpbiBtaWxsaXNlY29uZHMgdGhhdCB3aWxsIGVsYXBzZSBhZnRlciB0aGUgc2VsZWN0aW9uIGNoYW5nZXNcbiAgICAgKiBiZWZvcmUgdGhlIHNlbGVjdGlvbiB3aWxsIGJlIGFkdmFuY2VkIHRvIHRoZSBuZXh0IGl0ZW0gaW4gdGhlIGxpc3QuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bnVtYmVyfSAtIFRpbWUgaW4gbWlsbGlzZWNvbmRzXG4gICAgICogQGRlZmF1bHQgMTAwMCAoMSBzZWNvbmQpXG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGlvblRpbWVyRHVyYXRpb24oKSB7XG4gICAgICByZXR1cm4gdGhpc1tzZWxlY3Rpb25UaW1lckR1cmF0aW9uU3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGlvblRpbWVyRHVyYXRpb24odmFsdWUpIHtcbiAgICAgIHRoaXNbc2VsZWN0aW9uVGltZXJEdXJhdGlvblN5bWJvbF0gPSBwYXJzZUludCh2YWx1ZSk7XG4gICAgICBpZiAoJ3NlbGVjdGlvblRpbWVyRHVyYXRpb24nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGlvblRpbWVyRHVyYXRpb24gPSB2YWx1ZTsgfVxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIFRpbWVyU2VsZWN0aW9uO1xufTtcblxuXG5mdW5jdGlvbiBjbGVhclRpbWVyKGVsZW1lbnQpIHtcbiAgaWYgKGVsZW1lbnRbdGltZXJUaW1lb3V0U3ltYm9sXSkge1xuICAgIGNsZWFyVGltZW91dChlbGVtZW50W3RpbWVyVGltZW91dFN5bWJvbF0pO1xuICAgIGVsZW1lbnRbdGltZXJUaW1lb3V0U3ltYm9sXSA9IG51bGw7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzdGFydFRpbWVyKGVsZW1lbnQpIHtcbiAgY2xlYXJUaW1lcihlbGVtZW50KTtcbiAgaWYgKGVsZW1lbnQucGxheWluZyAmJiBlbGVtZW50Lml0ZW1zICYmIGVsZW1lbnQuaXRlbXMubGVuZ3RoID4gMCkge1xuICAgIHN0YXJ0VGltZXIoZWxlbWVudCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RhcnRUaW1lcihlbGVtZW50KSB7XG4gIC8vIElmIHBsYXkoKSBpcyBjYWxsZWQgbW9yZSB0aGFuIG9uY2UsIGNhbmNlbCBhbnkgZXhpc3RpbmcgdGltZXIuXG4gIGNsZWFyVGltZXIoZWxlbWVudCk7XG4gIGVsZW1lbnRbdGltZXJUaW1lb3V0U3ltYm9sXSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHNlbGVjdE5leHRXaXRoV3JhcChlbGVtZW50KTtcbiAgfSwgZWxlbWVudC5zZWxlY3Rpb25UaW1lckR1cmF0aW9uKTtcbn1cblxuLy8gU2VsZWN0IHRoZSBuZXh0IGl0ZW0sIHdyYXBwaW5nIHRvIGZpcnN0IGl0ZW0gaWYgbmVjZXNzYXJ5LlxuZnVuY3Rpb24gc2VsZWN0TmV4dFdpdGhXcmFwKGVsZW1lbnQpIHtcbiAgY29uc3QgaXRlbXMgPSBlbGVtZW50Lml0ZW1zO1xuICBpZiAoaXRlbXMgJiYgaXRlbXMubGVuZ3RoID4gMCkge1xuICAgIGlmIChlbGVtZW50LnNlbGVjdGVkSW5kZXggPT0gbnVsbCB8fCBlbGVtZW50LnNlbGVjdGVkSW5kZXggPT09IGl0ZW1zLmxlbmd0aCAtIDEpIHtcbiAgICAgIGVsZW1lbnQuc2VsZWN0Rmlyc3QoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5zZWxlY3ROZXh0KCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL2NyZWF0ZVN5bWJvbCc7XG5pbXBvcnQgc3ltYm9scyBmcm9tICcuL3N5bWJvbHMnO1xuXG5cbi8vIFN5bWJvbHMgZm9yIHByaXZhdGUgZGF0YSBtZW1iZXJzIG9uIGFuIGVsZW1lbnQuXG5jb25zdCBhYnNvcmJEZWNlbGVyYXRpb25TeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2Fic29yYkRlY2VsZXJhdGlvbicpO1xuY29uc3QgbGFzdERlbHRhWFN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnbGFzdERlbHRhWCcpO1xuY29uc3QgbGFzdFdoZWVsVGltZW91dFN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnbGFzdFdoZWVsVGltZW91dCcpO1xuY29uc3QgcG9zdE5hdmlnYXRlRGVsYXlDb21wbGV0ZVN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgncG9zdE5hdmlnYXRlRGVsYXlDb21wbGV0ZScpO1xuY29uc3Qgd2hlZWxEaXN0YW5jZVN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnd2hlZWxEaXN0YW5jZScpO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggVHJhY2twYWREaXJlY3Rpb24uICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBtYXBzIGEgaG9yaXpvbnRhbCB0cmFja3BhZCBzd2lwZSBnZXN0dXJlcyAob3IgaG9yaXpvbnRhbCBtb3VzZVxuICAgKiB3aGVlbCBhY3Rpb25zKSB0byBkaXJlY3Rpb24gc2VtYW50aWNzLlxuICAgKlxuICAgKiBZb3UgY2FuIHVzZSB0aGlzIG1peGluIHdpdGggYSBtaXhpbiBsaWtlXG4gICAqIFtEaXJlY3Rpb25TZWxlY3Rpb25NaXhpbl0oRGlyZWN0aW9uU2VsZWN0aW9uTWl4aW4ubWQpIHRvIGxldCB0aGUgdXNlclxuICAgKiBjaGFuZ2UgdGhlIHNlbGVjdGlvbiB3aXRoIHRoZSB0cmFja3BhZCBvciBtb3VzZSB3aGVlbC5cbiAgICpcbiAgICogVG8gcmVzcG9uZCB0byB0aGUgdHJhY2twYWQsIHdlIGNhbiBsaXN0ZW4gdG8gdGhlIERPTSdzIFwid2hlZWxcIiBldmVudHMuXG4gICAqIFRoZXNlIGV2ZW50cyBhcmUgZmlyZWQgYXMgdGhlIHVzZXIgZHJhZ3MgdGhlaXIgZmluZ2VycyBhY3Jvc3MgYSB0cmFja3BhZC5cbiAgICogVW5mb3J0dW5hdGVseSwgYnJvd3NlcnMgYXJlIG1pc3NpbmcgYSBjcml0aWNhbCBldmVudCDigJTCoHRoZXJlIGlzIG5vIGV2ZW50XG4gICAqIHdoZW4gdGhlIHVzZXIgKnN0b3BzKiBhIGdlc3R1cmVkIG9uIHRoZSB0cmFja3BhZCBvciBtb3VzZSB3aGVlbC5cbiAgICpcbiAgICogVG8gbWFrZSB0aGluZ3Mgd29yc2UsIHRoZSBtYWluc3RyZWFtIGJyb3dzZXJzIGNvbnRpbnVlIHRvIGdlbmVyYXRlIGZha2VcbiAgICogd2hlZWwgZXZlbnRzIGV2ZW4gYWZ0ZXIgdGhlIHVzZXIgaGFzIHN0b3BwZWQgZHJhZ2dpbmcgdGhlaXIgZmluZ2Vycy4gVGhlc2VcbiAgICogZmFrZSBldmVudHMgc2ltdWxhdGUgdGhlIHVzZXIgZ3JhZHVhbGx5IHNsb3dpbmcgZG93biB0aGUgZHJhZyB1bnRpbCB0aGV5XG4gICAqIGNvbWUgdG8gYSBzbW9vdGggc3RvcC4gSW4gc29tZSBjb250ZXh0cywgdGhlc2UgZmFrZSB3aGVlbCBldmVudHMgbWlnaHQgYmVcbiAgICogaGVscGZ1bCwgYnV0IGluIHRyeWluZyB0byBzdXBwbHkgdHlwaWNhbCB0cmFja3BhZCBzd2lwZSBuYXZpZ2F0aW9uLCB0aGVzZVxuICAgKiBmYWtlIGV2ZW50cyBnZXQgaW4gdGhlIHdheS5cbiAgICpcbiAgICogVGhpcyBjb21wb25lbnQgdXNlcyBoZXVyaXN0aWNzIHRvIHdvcmsgYXJvdW5kIHRoZXNlIHByb2JsZW1zLCBidXQgdGhlXG4gICAqIGNvbXBsZXggbmF0dXJlIG9mIHRoZSBwcm9ibGVtIG1ha2UgaXQgZXh0cmVtZWx5IGRpZmZpY3VsdCB0byBhY2hpZXZlIHRoZVxuICAgKiBzYW1lIGRlZ3JlZSBvZiB0cmFja3BhZCByZXNwb25zaXZlbmVzcyBwb3NzaWJsZSB3aXRoIG5hdGl2ZSBhcHBsaWNhdGlvbnMuXG4gICAqL1xuICBjbGFzcyBUcmFja3BhZERpcmVjdGlvbiBleHRlbmRzIGJhc2Uge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIGV2ZW50ID0+IHtcbiAgICAgICAgY29uc3QgaGFuZGxlZCA9IHdoZWVsKHRoaXMsIGV2ZW50KTtcbiAgICAgICAgaWYgKGhhbmRsZWQpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJlc2V0V2hlZWxUcmFja2luZyh0aGlzKTtcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IGltcGxlbWVudGF0aW9uLlxuICAgIGdldCBbc3ltYm9scy5kcmFnZ2luZ10oKSB7XG4gICAgICByZXR1cm4gc3VwZXJbc3ltYm9scy5kcmFnZ2luZ107XG4gICAgfVxuICAgIHNldCBbc3ltYm9scy5kcmFnZ2luZ10odmFsdWUpIHtcbiAgICAgIGlmIChzeW1ib2xzLmRyYWdnaW5nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyW3N5bWJvbHMuZHJhZ2dpbmddID0gdmFsdWU7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgbGVmdC5cbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuXG4gICAgICovXG4gICAgW3N5bWJvbHMuZ29MZWZ0XSgpIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLmdvTGVmdF0pIHsgcmV0dXJuIHN1cGVyW3N5bWJvbHMuZ29MZWZ0XSgpOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIHJpZ2h0LlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy5cbiAgICAgKi9cbiAgICBbc3ltYm9scy5nb1JpZ2h0XSgpIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLmdvUmlnaHRdKSB7IHJldHVybiBzdXBlcltzeW1ib2xzLmdvUmlnaHRdKCk7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGlzdGFuY2UgdGhlIHVzZXIgaGFzIG1vdmVkIHRoZSBmaXJzdCB0b3VjaHBvaW50IHNpbmNlIHRoZSBiZWdpbm5pbmdcbiAgICAgKiBvZiBhIHRyYWNrcGFkL3doZWVsIG9wZXJhdGlvbiwgZXhwcmVzc2VkIGFzIGEgZnJhY3Rpb24gb2YgdGhlIGVsZW1lbnQnc1xuICAgICAqIHdpZHRoLlxuICAgICAqXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICovXG4gICAgZ2V0IHRyYXZlbEZyYWN0aW9uKCkge1xuICAgICAgcmV0dXJuIHN1cGVyLnRyYXZlbEZyYWN0aW9uO1xuICAgIH1cbiAgICBzZXQgdHJhdmVsRnJhY3Rpb24odmFsdWUpIHtcbiAgICAgIGlmICgndHJhdmVsRnJhY3Rpb24nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnRyYXZlbEZyYWN0aW9uID0gdmFsdWU7IH1cbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBUcmFja3BhZERpcmVjdGlvbjtcbn07XG5cblxuLy8gVGltZSB3ZSB3YWl0IGZvbGxvd2luZyBhIG5hdmlnYXRpb24gYmVmb3JlIHBheWluZyBhdHRlbnRpb24gdG8gd2hlZWxcbi8vIGV2ZW50cyBhZ2Fpbi5cbmNvbnN0IFBPU1RfTkFWSUdBVEVfVElNRSA9IDI1MDtcblxuLy8gVGltZSB3ZSB3YWl0IGFmdGVyIHRoZSBsYXN0IHdoZWVsIGV2ZW50IGJlZm9yZSB3ZSByZXNldCB0aGluZ3MuXG5jb25zdCBXSEVFTF9USU1FID0gMTAwO1xuXG5cbi8vIEZvbGxvd2luZyBhIG5hdmlnYXRpb24sIHBhcnRpYWxseSByZXNldCBvdXIgd2hlZWwgdHJhY2tpbmcuXG5mdW5jdGlvbiBwb3N0TmF2aWdhdGUoZWxlbWVudCkge1xuICBlbGVtZW50LnRyYXZlbEZyYWN0aW9uID0gMDtcbiAgZWxlbWVudFt3aGVlbERpc3RhbmNlU3ltYm9sXSA9IDA7XG4gIGVsZW1lbnRbcG9zdE5hdmlnYXRlRGVsYXlDb21wbGV0ZVN5bWJvbF0gPSB0cnVlO1xuICBlbGVtZW50W2Fic29yYkRlY2VsZXJhdGlvblN5bWJvbF0gPSB0cnVlO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBlbGVtZW50W3Bvc3ROYXZpZ2F0ZURlbGF5Q29tcGxldGVTeW1ib2xdID0gZmFsc2U7XG4gIH0sIFBPU1RfTkFWSUdBVEVfVElNRSk7XG59XG5cbi8vIFJlc2V0IGFsbCBzdGF0ZSByZWxhdGVkIHRvIHRoZSB0cmFja2luZyBvZiB0aGUgd2hlZWwuXG5mdW5jdGlvbiByZXNldFdoZWVsVHJhY2tpbmcoZWxlbWVudCkge1xuICBlbGVtZW50LnRyYXZlbEZyYWN0aW9uID0gMDtcbiAgZWxlbWVudFt3aGVlbERpc3RhbmNlU3ltYm9sXSA9IDA7XG4gIGVsZW1lbnRbbGFzdERlbHRhWFN5bWJvbF0gPSAwO1xuICBlbGVtZW50W2Fic29yYkRlY2VsZXJhdGlvblN5bWJvbF0gPSBmYWxzZTtcbiAgZWxlbWVudFtwb3N0TmF2aWdhdGVEZWxheUNvbXBsZXRlU3ltYm9sXSA9IGZhbHNlO1xuICBpZiAoZWxlbWVudFtsYXN0V2hlZWxUaW1lb3V0U3ltYm9sXSkge1xuICAgIGNsZWFyVGltZW91dChlbGVtZW50W2xhc3RXaGVlbFRpbWVvdXRTeW1ib2xdKTtcbiAgICBlbGVtZW50W2xhc3RXaGVlbFRpbWVvdXRTeW1ib2xdID0gbnVsbDtcbiAgfVxufVxuXG4vLyBEZWZpbmUgb3VyIG93biBzaWduIGZ1bmN0aW9uLCBzaW5jZSAoYXMgb2YgTWF5IDIwMTUpLCBTYWZhcmkgYW5kIElFIGRvbid0XG4vLyBzdXBwbHkgTWF0aC5zaWduKCkuXG5mdW5jdGlvbiBzaWduKHgpIHtcbiAgcmV0dXJuICh4ID09PSAwKSA/XG4gICAgMCA6XG4gICAgKHggPiAwKSA/XG4gICAgICAxIDpcbiAgICAgIC0xO1xufVxuXG4vLyBUT0RPOiBEYW1waW5nLCBvciBzb21lIG90aGVyIHRyZWF0bWVudCBmb3IgZ29pbmcgcGFzdCB0aGUgZW5kcy5cblxuLypcbiAqIEEgd2hlZWwgZXZlbnQgaGFzIGJlZW4gZ2VuZXJhdGVkLiBUaGlzIGNvdWxkIGJlIGEgcmVhbCB3aGVlbCBldmVudCwgb3IgaXRcbiAqIGNvdWxkIGJlIGZha2UgKHNlZSBub3RlcyBpbiB0aGUgaGVhZGVyKS5cbiAqXG4gKiBUaGlzIGhhbmRsZXIgdXNlcyBzZXZlcmFsIHN0cmF0ZWdpZXMgdG8gdHJ5IHRvIGFwcHJveGltYXRlIG5hdGl2ZSB0cmFja3BhZFxuICogc3dpcGUgbmF2aWdhdGlvbi5cbiAqXG4gKiBJZiB0aGUgdXNlciBoYXMgZHJhZ2dlZCBlbm91Z2ggdG8gY2F1c2UgYSBuYXZpZ2F0aW9uLCB0aGVuIGZvciBhIHNob3J0XG4gKiBkZWxheSBmb2xsb3dpbmcgdGhhdCBuYXZpZ2F0aW9uLCBzdWJzZXF1ZW50IHdoZWVsIGV2ZW50cyB3aWxsIGJlIGlnbm9yZWQuXG4gKlxuICogRnVydGhlcm1vcmUsIGZvbGx3b3dpbmcgYSBuYXZpZ2F0aW9uLCB3ZSBpZ25vcmUgYWxsIHdoZWVsIGV2ZW50cyB1bnRpbCB3ZVxuICogcmVjZWl2ZSBhdCBsZWFzdCBvbmUgZXZlbnQgd2hlcmUgdGhlIGV2ZW50J3MgZGVsdGFYIChkaXN0YW5jZSB0cmF2ZWxlZCkgaXNcbiAqICpncmVhdGVyKiB0aGFuIHRoZSBwcmV2aW91cyBldmVudCdzIGRlbHRhWC4gVGhpcyBoZWxwcyB1cyBmaWx0ZXIgb3V0IHRoZVxuICogZmFrZSB3aGVlbCBldmVudHMgZ2VuZXJhdGVkIGJ5IHRoZSBicm93c2VyIHRvIHNpbXVsYXRlIGRlY2VsZXJhdGlvbi5cbiAqXG4gKi9cbmZ1bmN0aW9uIHdoZWVsKGVsZW1lbnQsIGV2ZW50KSB7XG5cbiAgLy8gU2luY2Ugd2UgaGF2ZSBhIG5ldyB3aGVlbCBldmVudCwgcmVzZXQgb3VyIHRpbWVyIHdhaXRpbmcgZm9yIHRoZSBsYXN0XG4gIC8vIHdoZWVsIGV2ZW50IHRvIHBhc3MuXG4gIGlmIChlbGVtZW50W2xhc3RXaGVlbFRpbWVvdXRTeW1ib2xdKSB7XG4gICAgY2xlYXJUaW1lb3V0KGVsZW1lbnRbbGFzdFdoZWVsVGltZW91dFN5bWJvbF0pO1xuICB9XG4gIGVsZW1lbnRbbGFzdFdoZWVsVGltZW91dFN5bWJvbF0gPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICB3aGVlbFRpbWVkT3V0KGVsZW1lbnQpO1xuICB9LCBXSEVFTF9USU1FKTtcblxuICBjb25zdCBkZWx0YVggPSBldmVudC5kZWx0YVg7XG4gIGNvbnN0IGRlbHRhWSA9IGV2ZW50LmRlbHRhWTtcblxuICAvLyBTZWUgaWYgZWxlbWVudCBldmVudCByZXByZXNlbnRzIGFjY2VsZXJhdGlvbiBvciBkZWNlbGVyYXRpb24uXG4gIGNvbnN0IGFjY2VsZXJhdGlvbiA9IHNpZ24oZGVsdGFYKSAqIChkZWx0YVggLSBlbGVtZW50W2xhc3REZWx0YVhTeW1ib2xdKTtcbiAgZWxlbWVudFtsYXN0RGVsdGFYU3ltYm9sXSA9IGRlbHRhWDtcblxuICBpZiAoTWF0aC5hYnMoZGVsdGFYKSA8IE1hdGguYWJzKGRlbHRhWSkpIHtcbiAgICAvLyBNb3ZlIHdhcyBtb3N0bHkgdmVydGljYWwuIFRoZSB1c2VyIG1heSBiZSB0cnlpbmcgc2Nyb2xsIHdpdGggdGhlXG4gICAgLy8gdHJhY2twYWQvd2hlZWwuIFRvIGJlIG9uIHRoZSBzYWZlLCB3ZSBpZ25vcmUgc3VjaCBldmVudHMuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGVsZW1lbnRbcG9zdE5hdmlnYXRlRGVsYXlDb21wbGV0ZVN5bWJvbF0pIHtcbiAgICAvLyBJdCdzIHRvbyBzb29uIGFmdGVyIGEgbmF2aWdhdGlvbjsgaWdub3JlIHRoZSBldmVudC5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChhY2NlbGVyYXRpb24gPiAwKSB7XG4gICAgLy8gVGhlIGV2ZW50cyBhcmUgbm90IChvciBhcmUgbm8gbG9uZ2VyKSBkZWNlbGVyYXRpbmcsIHNvIHdlIGNhbiBzdGFydFxuICAgIC8vIHBheWluZyBhdHRlbnRpb24gdG8gdGhlbSBhZ2Fpbi5cbiAgICBlbGVtZW50W2Fic29yYkRlY2VsZXJhdGlvblN5bWJvbF0gPSBmYWxzZTtcbiAgfSBlbHNlIGlmIChlbGVtZW50W2Fic29yYkRlY2VsZXJhdGlvblN5bWJvbF0pIHtcbiAgICAvLyBUaGUgd2hlZWwgZXZlbnQgd2FzIGxpa2VseSBmYWtlZCB0byBzaW11bGF0ZSBkZWNlbGVyYXRpb247IGlnbm9yZSBpdC5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGVsZW1lbnRbd2hlZWxEaXN0YW5jZVN5bWJvbF0gKz0gZGVsdGFYO1xuXG4gIC8vIFVwZGF0ZSB0aGUgdHJhdmVsIGZyYWN0aW9uIG9mIHRoZSBlbGVtZW50IGJlaW5nIG5hdmlnYXRlZC5cbiAgY29uc3Qgd2lkdGggPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xuICBsZXQgdHJhdmVsRnJhY3Rpb24gPSB3aWR0aCA+IDAgP1xuICAgIGVsZW1lbnRbd2hlZWxEaXN0YW5jZVN5bWJvbF0gLyB3aWR0aCA6XG4gICAgMDtcbiAgZWxlbWVudFtzeW1ib2xzLmRyYWdnaW5nXSA9IHRydWU7XG4gIHRyYXZlbEZyYWN0aW9uID0gc2lnbih0cmF2ZWxGcmFjdGlvbikgKiBNYXRoLm1pbihNYXRoLmFicyh0cmF2ZWxGcmFjdGlvbiksIDEpO1xuICBlbGVtZW50LnRyYXZlbEZyYWN0aW9uID0gdHJhdmVsRnJhY3Rpb247XG5cbiAgLy8gSWYgdGhlIHVzZXIgaGFzIGRyYWdnZWQgZW5vdWdoIHRvIHJlYWNoIHRoZSBwcmV2aW91cy9uZXh0IGl0ZW0sIHRoZW5cbiAgLy8gY29tcGxldGUgYSBuYXZpZ2F0aW9uIHRvIHRoYXQgaXRlbS5cbiAgaWYgKHRyYXZlbEZyYWN0aW9uID09PSAxKSB7XG4gICAgZWxlbWVudFtzeW1ib2xzLmRyYWdnaW5nXSA9IGZhbHNlO1xuICAgIGVsZW1lbnRbc3ltYm9scy5nb1JpZ2h0XSgpO1xuICAgIHBvc3ROYXZpZ2F0ZShlbGVtZW50KTtcbiAgfSBlbHNlIGlmICh0cmF2ZWxGcmFjdGlvbiA9PT0gLTEpIHtcbiAgICBlbGVtZW50W3N5bWJvbHMuZHJhZ2dpbmddID0gZmFsc2U7XG4gICAgZWxlbWVudFtzeW1ib2xzLmdvTGVmdF0oKTtcbiAgICBwb3N0TmF2aWdhdGUoZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLy8gQSBzdWZmaWNpZW50bHkgbG9uZyBwZXJpb2Qgb2YgdGltZSBoYXMgcGFzc2VkIHNpbmNlIHRoZSBsYXN0IHdoZWVsIGV2ZW50LlxuLy8gV2Ugc25hcCB0aGUgc2VsZWN0aW9uIHRvIHRoZSBjbG9zZXN0IGl0ZW0sIHRoZW4gcmVzZXQgb3VyIHN0YXRlLlxuZnVuY3Rpb24gd2hlZWxUaW1lZE91dChlbGVtZW50KSB7XG5cbiAgLy8gU25hcCB0byB0aGUgY2xvc2VzdCBpdGVtLlxuICBlbGVtZW50W3N5bWJvbHMuZHJhZ2dpbmddID0gZmFsc2U7XG4gIGNvbnN0IHRyYXZlbEZyYWN0aW9uID0gZWxlbWVudC50cmF2ZWxGcmFjdGlvbjtcbiAgaWYgKHRyYXZlbEZyYWN0aW9uID49IDAuNSkge1xuICAgIGVsZW1lbnRbc3ltYm9scy5nb1JpZ2h0XSgpO1xuICB9IGVsc2UgaWYgKHRyYXZlbEZyYWN0aW9uIDw9IC0wLjUpIHtcbiAgICBlbGVtZW50W3N5bWJvbHMuZ29MZWZ0XSgpO1xuICB9XG5cbiAgLy8gVE9ETzogTGlzdGVuIGZvciB0aGUgdHJhbnNpdGlvbiB0byBjb21wbGV0ZSwgYW5kIHRoZW4gcmVzdG9yZVxuICAvLyBkcmFnZ2luZyB0byBmYWxzZSAob3IgdGhlIHByZXZpb3VzIHZhbHVlKS5cblxuICByZXNldFdoZWVsVHJhY2tpbmcoZWxlbWVudCk7XG59XG4iLCIvKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBjcmVhdGUgYSBzeW1ib2wgdGhhdCBjYW4gYmUgdXNlZCBmb3IgYXNzb2NpYXRpbmcgcHJpdmF0ZVxuICogZGF0YSB3aXRoIGFuIGVsZW1lbnQuXG4gKlxuICogTWl4aW5zIGFuZCBjb21wb25lbnQgY2xhc3NlcyBvZnRlbiB3YW50IHRvIGFzc29jaWF0ZSBwcml2YXRlIGRhdGEgd2l0aCBhblxuICogZWxlbWVudCBpbnN0YW5jZSwgYnV0IEphdmFTY3JpcHQgZG9lcyBub3QgaGF2ZSBkaXJlY3Qgc3VwcG9ydCBmb3IgdHJ1ZVxuICogcHJpdmF0ZSBwcm9wZXJ0aWVzLiBPbmUgYXBwcm9hY2ggaXMgdG8gdXNlIHRoZVxuICogW1N5bWJvbF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvU3ltYm9sKVxuICogZGF0YSB0eXBlIHRvIHNldCBhbmQgcmV0cmlldmUgZGF0YSBvbiBhbiBlbGVtZW50LlxuICpcbiAqIFVuZm9ydHVuYXRlbHksIHRoZSBTeW1ib2wgdHlwZSBpcyBub3QgYXZhaWxhYmxlIGluIEludGVybmV0IEV4cGxvcmVyIDExLiBUaGVcbiAqIGBjcmVhdGVTeW1ib2xgIGhlbHBlciBmdW5jdGlvbiBleGlzdHMgYXMgYSB3b3JrYXJvdW5kIGZvciBJRSAxMS4gUmF0aGVyIHRoYW5cbiAqIHJldHVybmluZyBhIHRydWUgU3ltYm9sLCBpdCBzaW1wbHkgcmV0dXJucyBhbiB1bmRlcnNjb3JlLXByZWZpeGVkIHN0cmluZy5cbiAqXG4gKiBVc2FnZTpcbiAqXG4gKiAgICAgY29uc3QgZm9vU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdmb28nKTtcbiAqXG4gKiAgICAgY2xhc3MgTXlFbGVtZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICogICAgICAgZ2V0IGZvbygpIHtcbiAqICAgICAgICAgcmV0dXJuIHRoaXNbZm9vU3ltYm9sXTtcbiAqICAgICAgIH1cbiAqICAgICAgIHNldCBmb28odmFsdWUpIHtcbiAqICAgICAgICAgdGhpc1tmb29TeW1ib2xdID0gdmFsdWU7XG4gKiAgICAgICB9XG4gKiAgICAgfVxuICpcbiAqIEluIElFIDExLCB0aGlzIHNhbXBsZSB3aWxsIFwiaGlkZVwiIGRhdGEgYmVoaW5kIGFuIGluc3RhbmNlIHByb3BlcnR5IHRoaXMuX2Zvby5cbiAqIFRoZSB1c2Ugb2YgdGhlIHVuZGVyc2NvcmUgaXMgbWVhbnQgdG8gcmVkdWNlIChub3QgZWxpbWluYXRlKSB0aGUgcG90ZW50aWFsXG4gKiBmb3IgbmFtZSBjb25mbGljdHMsIGFuZCBkaXNjb3VyYWdlIChub3QgcHJldmVudCkgZXh0ZXJuYWwgYWNjZXNzIHRvIHRoaXNcbiAqIGRhdGEuIEluIG1vZGVybiBicm93c2VycywgdGhlIGFib3ZlIGNvZGUgd2lsbCBlbGltaW5hdGUgdGhlIHBvdGVudGlhbCBvZlxuICogbmFtaW5nIGNvbmZsaWN0cywgYW5kIGJldHRlciBoaWRlIHRoZSBkYXRhIGJlaGluZCBhIHJlYWwgU3ltYm9sLlxuICpcbiAqIEBmdW5jdGlvbiBjcmVhdGVTeW1ib2xcbiAqIEBwYXJhbSB7c3RyaW5nfSBkZXNjcmlwdGlvbiAtIEEgc3RyaW5nIHRvIGlkZW50aWZ5IHRoZSBzeW1ib2wgd2hlbiBkZWJ1Z2dpbmdcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU3ltYm9sKGRlc2NyaXB0aW9uKSB7XG4gIHJldHVybiB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nID9cbiAgICBTeW1ib2woZGVzY3JpcHRpb24pIDpcbiAgICBgXyR7ZGVzY3JpcHRpb259YDtcbn1cbiIsIi8qXG4gKiBNaWNyb3Rhc2sgaGVscGVyIGZvciBJRSAxMS5cbiAqXG4gKiBFeGVjdXRpbmcgYSBmdW5jdGlvbiBhcyBhIG1pY3JvdGFzayBpcyB0cml2aWFsIGluIGJyb3dzZXJzIHRoYXQgc3VwcG9ydFxuICogcHJvbWlzZXMsIHdob3NlIHRoZW4oKSBjbGF1c2VzIHVzZSBtaWNyb3Rhc2sgdGltaW5nLiBJRSAxMSBkb2Vzbid0IHN1cHBvcnRcbiAqIHByb21pc2VzLCBidXQgZG9lcyBzdXBwb3J0IE11dGF0aW9uT2JzZXJ2ZXJzLCB3aGljaCBhcmUgYWxzbyBleGVjdXRlZCBhc1xuICogbWljcm90YXNrcy4gU28gdGhpcyBoZWxwZXIgdXNlcyBhbiBNdXRhdGlvbk9ic2VydmVyIHRvIGFjaGlldmUgbWljcm90YXNrXG4gKiB0aW1pbmcuXG4gKlxuICogU2VlIGh0dHBzOi8vamFrZWFyY2hpYmFsZC5jb20vMjAxNS90YXNrcy1taWNyb3Rhc2tzLXF1ZXVlcy1hbmQtc2NoZWR1bGVzL1xuICpcbiAqIEluc3BpcmVkIGJ5IFBvbHltZXIncyBhc3luYygpIGZ1bmN0aW9uLlxuICovXG5cblxuLy8gVGhlIHF1ZXVlIG9mIHBlbmRpbmcgY2FsbGJhY2tzIHRvIGJlIGV4ZWN1dGVkIGFzIG1pY3JvdGFza3MuXG5jb25zdCBjYWxsYmFja3MgPSBbXTtcblxuLy8gQ3JlYXRlIGFuIGVsZW1lbnQgdGhhdCB3ZSB3aWxsIG1vZGlmeSB0byBmb3JjZSBvYnNlcnZhYmxlIG11dGF0aW9ucy5cbmNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG5cbi8vIEEgbW9ub3RvbmljYWxseS1pbmNyZWFzaW5nIHZhbHVlLlxubGV0IGNvdW50ZXIgPSAwO1xuXG5cbi8qKlxuICogQWRkIGEgY2FsbGJhY2sgdG8gdGhlIG1pY3JvdGFzayBxdWV1ZS5cbiAqXG4gKiBUaGlzIHVzZXMgYSBNdXRhdGlvbk9ic2VydmVyIHNvIHRoYXQgaXQgd29ya3Mgb24gSUUgMTEuXG4gKlxuICogTk9URTogSUUgMTEgbWF5IGFjdHVhbGx5IHVzZSB0aW1lb3V0IHRpbWluZyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXJzLiBUaGlzXG4gKiBuZWVkcyBtb3JlIGludmVzdGlnYXRpb24uXG4gKlxuICogQGZ1bmN0aW9uIG1pY3JvdGFza1xuICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWljcm90YXNrKGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgLy8gRm9yY2UgYSBtdXRhdGlvbi5cbiAgZWxlbWVudC50ZXh0Q29udGVudCA9ICsrY291bnRlcjtcbn1cblxuXG4vLyBFeGVjdXRlIGFueSBwZW5kaW5nIGNhbGxiYWNrcy5cbmZ1bmN0aW9uIGV4ZWN1dGVDYWxsYmFja3MoKSB7XG4gIHdoaWxlIChjYWxsYmFja3MubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IGNhbGxiYWNrID0gY2FsbGJhY2tzLnNoaWZ0KCk7XG4gICAgY2FsbGJhY2soKTtcbiAgfVxufVxuXG5cbi8vIENyZWF0ZSB0aGUgb2JzZXJ2ZXIuXG5jb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGV4ZWN1dGVDYWxsYmFja3MpO1xub2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50LCB7XG4gIGNoYXJhY3RlckRhdGE6IHRydWVcbn0pO1xuIiwiLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gZm9yIHJlbmRlcmluZyBhbiBhcnJheSBvZiBpdGVtcyBhcyBlbGVtZW50cy5cbiAqXG4gKiBUaGlzIGlzIG5vdCBhIG1peGluLCBidXQgYSBmdW5jdGlvbiBjb21wb25lbnRzIGNhbiB1c2UgaWYgdGhleSBuZWVkIHRvXG4gKiBnZW5lcmF0ZSBhIHNldCBvZiBlbGVtZW50cyBmb3IgdGhlIGl0ZW1zIGluIGFuIGFycmF5LlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gd2lsbCByZXVzZSBleGlzdGluZyBlbGVtZW50cyBpZiBwb3NzaWJsZS4gRS5nLiwgaWYgaXQgaXMgY2FsbGVkXG4gKiB0byByZW5kZXIgYW4gYXJyYXkgb2YgNCBpdGVtcywgYW5kIGxhdGVyIGNhbGxlZCB0byByZW5kZXIgYW4gYXJyYXkgb2YgNVxuICogaXRlbXMsIGl0IGNhbiByZXVzZSB0aGUgZXhpc3RpbmcgNCBpdGVtcywgY3JlYXRpbmcganVzdCBvbmUgbmV3IGVsZW1lbnQuXG4gKiBOb3RlLCBob3dldmVyLCB0aGF0IHRoaXMgcmUtcmVuZGVyaW5nIGlzIG5vdCBhdXRvbWF0aWMuIElmLCBhZnRlciBjYWxsaW5nXG4gKiB0aGlzIGZ1bmN0aW9uLCB5b3UgbWFuaXB1bGF0ZSB0aGUgYXJyYXkgeW91IHVzZWQsIHlvdSBtdXN0IHN0aWxsIGNhbGwgdGhpc1xuICogZnVuY3Rpb24gYWdhaW4gdG8gcmUtcmVuZGVyIHRoZSBhcnJheS5cbiAqXG4gKiBUaGUgYHJlbmRlckl0ZW1gIHBhcmFtZXRlciB0YWtlcyBhIGZ1bmN0aW9uIG9mIHR3byBhcmd1bWVudHM6IGFuIGl0ZW0gdG9cbiAqIHRvIHJlbmRlciwgYW5kIGFuIGV4aXN0aW5nIGVsZW1lbnQgKGlmIG9uZSBleGlzdHMpIHdoaWNoIGNhbiBiZSByZXB1cnBvc2VkIHRvXG4gKiByZW5kZXIgdGhhdCBpdGVtLiBJZiB0aGUgbGF0dGVyIGFyZ3VtZW50IGlzIG51bGwsIHRoZSBgcmVuZGVySXRlbSgpYCBmdW5jdGlvblxuICogc2hvdWxkIGNyZWF0ZSBhIG5ldyBlbGVtZW50IGFuZCByZXR1cm4gaXQuIFRoZSBmdW5jdGlvbiBzaG91bGQgZG8gdGhlIHNhbWVcbiAqIGlmIHRoZSBzdXBwbGllZCBleGlzdGluZyBlbGVtZW50IGlzIG5vdCBzdWl0YWJsZSBmb3IgcmVuZGVyaW5nIHRoZSBnaXZlblxuICogaXRlbTsgdGhlIHJldHVybmVkIGVsZW1lbnQgd2lsbCBiZSB1c2VkIHRvIHJlcGxhY2UgdGhlIGV4aXN0aW5nIG9uZS4gSWYgdGhlXG4gKiBleGlzdGluZyBlbGVtZW50ICppcyogc3VpdGFibGUsIHRoZSBmdW5jdGlvbiBjYW4gc2ltcGx5IHVwZGF0ZSBpdCBhbmQgcmV0dXJuXG4gKiBpdCBhcyBpcy5cbiAqXG4gKiBFeGFtcGxlOiBUaGUgZm9sbG93aW5nIHdpbGwgcmVuZGVyIGFuIGFycmF5IG9mIHN0cmluZ3MgaW4gZGl2cyBhcyBjaGlsZHJlblxuICogb2YgdGhlIGBjb250YWluZXJgIGVsZW1lbnQ6XG4gKlxuICogICAgIGxldCBzdHJpbmdzID0gWydhJywgJ2InLCAnYycsIC4uLl07XG4gKiAgICAgbGV0IGNvbnRhaW5lciA9IHRoaXMucXVlcnlTZWxlY3RvciguLi4pO1xuICogICAgIHJlbmRlckFycmF5QXNFbGVtZW50cyhzdHJpbmdzLCBjb250YWluZXIsIChzdHJpbmcsIGVsZW1lbnQpID0+IHtcbiAqICAgICAgIGlmICghZWxlbWVudCkge1xuICogICAgICAgICAvLyBObyBlbGVtZW50IGV4aXN0cyB5ZXQsIHNvIGNyZWF0ZSBhIG5ldyBvbmUuXG4gKiAgICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAqICAgICAgIH1cbiAqICAgICAgIC8vIFNldC91cGRhdGUgdGhlIHRleHQgY29udGVudCBvZiB0aGUgZWxlbWVudC5cbiAqICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBzdHJpbmc7XG4gKiAgICAgICByZXR1cm4gZWxlbWVudDtcbiAqICAgICB9KTtcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBpdGVtcyAtIHRoZSBpdGVtcyB0byByZW5kZXJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRhaW5lciAtIHRoZSBwYXJlbnQgdGhhdCB3aWxsIGhvbGQgdGhlIGVsZW1lbnRzXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSByZW5kZXJJdGVtIC0gcmV0dXJucyBhIG5ldyBlbGVtZW50IGZvciBhbiBpdGVtLCBvclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcHVycG9zZXMgYW4gZXhpc3RpbmcgZWxlbWVudCBmb3IgYW4gaXRlbVxuICovXG5mdW5jdGlvbiByZW5kZXJBcnJheUFzRWxlbWVudHMoaXRlbXMsIGNvbnRhaW5lciwgcmVuZGVySXRlbSkge1xuICAvLyBDcmVhdGUgYSBuZXcgc2V0IG9mIGVsZW1lbnRzIGZvciB0aGUgY3VycmVudCBpdGVtcy5cbiAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBvbGRFbGVtZW50ID0gY29udGFpbmVyLmNoaWxkTm9kZXNbaW5kZXhdO1xuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSByZW5kZXJJdGVtKGl0ZW0sIG9sZEVsZW1lbnQpO1xuICAgIGlmIChuZXdFbGVtZW50KSB7XG4gICAgICBpZiAoIW9sZEVsZW1lbnQpIHtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0VsZW1lbnQpO1xuICAgICAgfSBlbHNlIGlmIChuZXdFbGVtZW50ICE9PSBvbGRFbGVtZW50KSB7XG4gICAgICAgIGNvbnRhaW5lci5yZXBsYWNlQ2hpbGQobmV3RWxlbWVudCwgb2xkRWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICAvLyBJZiB0aGUgYXJyYXkgc2hyYW5rLCByZW1vdmUgdGhlIGV4dHJhIGVsZW1lbnRzIHdoaWNoIGFyZSBubyBsb25nZXIgbmVlZGVkLlxuICB3aGlsZSAoY29udGFpbmVyLmNoaWxkTm9kZXMubGVuZ3RoID4gaXRlbXMubGVuZ3RoKSB7XG4gICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5jaGlsZE5vZGVzW2l0ZW1zLmxlbmd0aF0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckFycmF5QXNFbGVtZW50cztcbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi9jcmVhdGVTeW1ib2wnO1xuaW1wb3J0IHRvZ2dsZUNsYXNzIGZyb20gJy4vdG9nZ2xlQ2xhc3MnO1xuXG5cbi8vIFN5bWJvbHMgZm9yIHByaXZhdGUgZGF0YSBtZW1iZXJzIG9uIGFuIGVsZW1lbnQuXG5jb25zdCBzYWZlVG9TZXRBdHRyaWJ1dGVzU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdzYWZlVG9TZXRBdHRyaWJ1dGVzJyk7XG5jb25zdCBwZW5kaW5nQXR0cmlidXRlc1N5bWJvbCA9IGNyZWF0ZVN5bWJvbCgncGVuZGluZ0F0dHJpYnV0ZXMnKTtcbmNvbnN0IHBlbmRpbmdDbGFzc2VzU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdwZW5kaW5nQ2xhc3NlcycpO1xuXG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9ucyBmb3IgdXBkYXRpbmcgYXR0cmlidXRlcywgaW5jbHVkaW5nIHRoZSBgY2xhc3NgIGF0dHJpYnV0ZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuXG4gIC8qKlxuICAgKiBQZXJmb3JtIGFueSBwZW5kaW5nIHVwZGF0ZXMgdG8gYXR0cmlidXRlcyBhbmQgY2xhc3Nlcy5cbiAgICpcbiAgICogVGhpcyB3cml0ZXMgYW55IGBzZXRBdHRyaWJ1dGVgIG9yIGB0b2dnbGVDbGFzc2AgdmFsdWVzIHRoYXQgd2VyZSBwZXJmb3JtZWRcbiAgICogYmVmb3JlIGFuIGVsZW1lbnQgd2FzIGF0dGFjaGVkIHRvIHRoZSBkb2N1bWVudCBmb3IgdGhlIGZpcnN0IHRpbWUuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIHNob3VsZCBiZSBjYWxsZWQgYnkgbWl4aW5zL2NvbXBvbmVudHMgaW4gdGhlaXJcbiAgICogYGNvbm5lY3RlZENhbGxiYWNrYC4gSWYgbXVsaXRwbGUgbWl4aW5zL2NvbXBvbmVudHMgaW52b2tlIHRoaXMgZHVyaW5nIHRoZVxuICAgKiBzYW1lIGBjb25uZWN0ZWRDYWxsYmFja2AsIG9ubHkgdGhlIGZpcnN0IGNhbGwgd2lsbCBoYXZlIGFueSBlZmZlY3QuIFRoZVxuICAgKiBzdWJzZXF1ZW50IGNhbGxzIHdpbGwgYmUgaGFybWxlc3MuXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBUaGUgZWxlbWVudCBiZWluZyBhZGRlZCB0byB0aGUgZG9jdW1lbnQuXG4gICAqL1xuICBjb25uZWN0ZWQoZWxlbWVudCkge1xuICAgIGVsZW1lbnRbc2FmZVRvU2V0QXR0cmlidXRlc1N5bWJvbF0gPSB0cnVlO1xuXG4gICAgLy8gU2V0IGFueSBwZW5kaW5nIGF0dHJpYnV0ZXMuXG4gICAgaWYgKGVsZW1lbnRbcGVuZGluZ0F0dHJpYnV0ZXNTeW1ib2xdKSB7XG4gICAgICBmb3IgKGxldCBhdHRyaWJ1dGUgaW4gZWxlbWVudFtwZW5kaW5nQXR0cmlidXRlc1N5bWJvbF0pIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBlbGVtZW50W3BlbmRpbmdBdHRyaWJ1dGVzU3ltYm9sXVthdHRyaWJ1dGVdO1xuICAgICAgICBzZXRBdHRyaWJ1dGVUb0VsZW1lbnQoZWxlbWVudCwgYXR0cmlidXRlLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgICBlbGVtZW50W3BlbmRpbmdBdHRyaWJ1dGVzU3ltYm9sXSA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gU2V0IGFueSBwZW5kaW5nIGNsYXNzZXMuXG4gICAgaWYgKGVsZW1lbnRbcGVuZGluZ0NsYXNzZXNTeW1ib2xdKSB7XG4gICAgICBmb3IgKGxldCBjbGFzc05hbWUgaW4gZWxlbWVudFtwZW5kaW5nQ2xhc3Nlc1N5bWJvbF0pIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBlbGVtZW50W3BlbmRpbmdDbGFzc2VzU3ltYm9sXVtjbGFzc05hbWVdO1xuICAgICAgICB0b2dnbGVDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUsIHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGVsZW1lbnRbcGVuZGluZ0NsYXNzZXNTeW1ib2xdID0gbnVsbDtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNldC91bnNldCB0aGUgYXR0cmlidXRlIHdpdGggdGhlIGluZGljYXRlZCBuYW1lLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBleGlzdHMgcHJpbWFyaWx5IHRvIGhhbmRsZSB0aGUgY2FzZSB3aGVyZSBhbiBlbGVtZW50IHdhbnRzIHRvXG4gICAqIHNldCBhIGRlZmF1bHQgcHJvcGVydHkgdmFsdWUgdGhhdCBzaG91bGQgYmUgcmVmbGVjdGVkIGFzIGFuIGF0dHJpYnV0ZS4gQW5cbiAgICogaW1wb3J0YW50IGxpbWl0YXRpb24gb2YgY3VzdG9tIGVsZW1lbnQgY29uc3R1cmN0b3JzIGlzIHRoYXQgdGhleSBjYW5ub3RcbiAgICogc2V0IGF0dHJpYnV0ZXMuIEEgY2FsbCB0byBgc2V0QXR0cmlidXRlYCBkdXJpbmcgdGhlIGNvbnN0cnVjdG9yIHdpbGxcbiAgICogYmUgZGVmZXJyZWQgdW50aWwgdGhlIGVsZW1lbnQgaXMgY29ubmVjdGVkIHRvIHRoZSBkb2N1bWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZSAtIFRoZSBuYW1lIG9mIHRoZSAqYXR0cmlidXRlKiAobm90IHByb3BlcnR5KSB0byBzZXQuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBzZXQuIElmIG51bGwsIHRoZSBhdHRyaWJ1dGUgd2lsbCBiZSByZW1vdmVkLlxuICAgKi9cbiAgc2V0QXR0cmlidXRlKGVsZW1lbnQsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgICBpZiAoZWxlbWVudFtzYWZlVG9TZXRBdHRyaWJ1dGVzU3ltYm9sXSkge1xuICAgICAgLy8gU2FmZSB0byBzZXQgYXR0cmlidXRlcyBpbW1lZGlhdGVseS5cbiAgICAgIHNldEF0dHJpYnV0ZVRvRWxlbWVudChlbGVtZW50LCBhdHRyaWJ1dGUsIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRGVmZXIgc2V0dGluZyBhdHRyaWJ1dGVzIHVudGlsIHRoZSBmaXJzdCB0aW1lIHdlJ3JlIGNvbm5lY3RlZC5cbiAgICAgIGlmICghZWxlbWVudFtwZW5kaW5nQXR0cmlidXRlc1N5bWJvbF0pIHtcbiAgICAgICAgZWxlbWVudFtwZW5kaW5nQXR0cmlidXRlc1N5bWJvbF0gPSB7fTtcbiAgICAgIH1cbiAgICAgIGVsZW1lbnRbcGVuZGluZ0F0dHJpYnV0ZXNTeW1ib2xdW2F0dHJpYnV0ZV0gPSB2YWx1ZTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNldC91bnNldCB0aGUgY2xhc3Mgd2l0aCB0aGUgaW5kaWNhdGVkIG5hbWUuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGV4aXN0cyBwcmltYXJpbHkgdG8gaGFuZGxlIHRoZSBjYXNlIHdoZXJlIGFuIGVsZW1lbnQgd2FudHMgdG9cbiAgICogc2V0IGEgZGVmYXVsdCBwcm9wZXJ0eSB2YWx1ZSB0aGF0IHNob3VsZCBiZSByZWZsZWN0ZWQgYXMgYXMgY2xhc3MuIEFuXG4gICAqIGltcG9ydGFudCBsaW1pdGF0aW9uIG9mIGN1c3RvbSBlbGVtZW50IGNvbnN0dXJjdG9ycyBpcyB0aGF0IHRoZXkgY2Fubm90XG4gICAqIHNldCBhdHRyaWJ1dGVzLCBpbmNsdWRpbmcgdGhlIGBjbGFzc2AgYXR0cmlidXRlLiBBIGNhbGwgdG9cbiAgICogYHRvZ2dsZUNsYXNzYCBkdXJpbmcgdGhlIGNvbnN0cnVjdG9yIHdpbGwgYmUgZGVmZXJyZWQgdW50aWwgdGhlIGVsZW1lbnRcbiAgICogaXMgY29ubmVjdGVkIHRvIHRoZSBkb2N1bWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBjbGFzcyB0byBzZXQuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZSAtIFRydWUgdG8gc2V0IHRoZSBjbGFzcywgZmFsc2UgdG8gcmVtb3ZlIGl0LlxuICAgKi9cbiAgdG9nZ2xlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lLCB2YWx1ZSkge1xuICAgIGlmIChlbGVtZW50W3NhZmVUb1NldEF0dHJpYnV0ZXNTeW1ib2xdKSB7XG4gICAgICAvLyBTYWZlIHRvIHNldCBjbGFzcyBpbW1lZGlhdGVseS5cbiAgICAgIHRvZ2dsZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBEZWZlciBzZXR0aW5nIGNsYXNzIHVudGlsIHRoZSBmaXJzdCB0aW1lIHdlJ3JlIGNvbm5lY3RlZC5cbiAgICAgIGlmICghZWxlbWVudFtwZW5kaW5nQ2xhc3Nlc1N5bWJvbF0pIHtcbiAgICAgICAgZWxlbWVudFtwZW5kaW5nQ2xhc3Nlc1N5bWJvbF0gPSB7fTtcbiAgICAgIH1cbiAgICAgIGVsZW1lbnRbcGVuZGluZ0NsYXNzZXNTeW1ib2xdW2NsYXNzTmFtZV0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxufTtcblxuXG4vLyBSZWZsZWN0IHRoZSBhdHRyaWJ1dGUgdG8gdGhlIGdpdmVuIGVsZW1lbnQuXG4vLyBJZiB0aGUgdmFsdWUgaXMgbnVsbCwgcmVtb3ZlIHRoZSBhdHRyaWJ1dGUuXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVUb0VsZW1lbnQoZWxlbWVudCwgYXR0cmlidXRlTmFtZSwgdmFsdWUpIHtcbiAgaWYgKHZhbHVlID09PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB0ZXh0ID0gU3RyaW5nKHZhbHVlKTtcbiAgICAvLyBBdm9pZCByZWN1cnNpdmUgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrIGNhbGxzLlxuICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKSAhPT0gdGV4dCkge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuL2NyZWF0ZVN5bWJvbCc7XG5cbi8qKlxuICogQSBjb2xsZWN0aW9uIG9mIFN5bWJvbCBvYmplY3RzIGZvciBzdGFuZGFyZCBjb21wb25lbnQgcHJvcGVydGllcyBhbmQgbWV0aG9kcy5cbiAqXG4gKiBUaGVzZSBTeW1ib2wgb2JqZWN0cyBhcmUgdXNlZCB0byBhbGxvdyBtaXhpbnMgYW5kIGEgY29tcG9uZW50IHRvIGludGVybmFsbHlcbiAqIGNvbW11bmljYXRlLCB3aXRob3V0IGV4cG9zaW5nIHRoZXNlIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgaW4gdGhlIGNvbXBvbmVudCdzXG4gKiBwdWJsaWMgQVBJLlxuICpcbiAqIFRvIHVzZSB0aGVzZSBTeW1ib2wgb2JqZWN0cyBpbiB5b3VyIG93biBjb21wb25lbnQsIGluY2x1ZGUgdGhpcyBtb2R1bGUgYW5kXG4gKiB0aGVuIGNyZWF0ZSBhIHByb3BlcnR5IG9yIG1ldGhvZCB3aG9zZSBrZXkgaXMgdGhlIGRlc2lyZWQgU3ltYm9sLlxuICpcbiAqICAgICBpbXBvcnQgJ1NpbmdsZVNlbGVjdGlvbk1peGluJyBmcm9tICdiYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TaW5nbGVTZWxlY3Rpb25NaXhpbic7XG4gKiAgICAgaW1wb3J0ICdzeW1ib2xzJyBmcm9tICdiYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9zeW1ib2xzJztcbiAqXG4gKiAgICAgY2xhc3MgTXlFbGVtZW50IGV4dGVuZHMgU2luZ2xlU2VsZWN0aW9uTWl4aW4oSFRNTEVsZW1lbnQpIHtcbiAqICAgICAgIFtzeW1ib2xzLml0ZW1TZWxlY3RlZF0oaXRlbSwgc2VsZWN0ZWQpIHtcbiAqICAgICAgICAgLy8gVGhpcyB3aWxsIGJlIGludm9rZWQgd2hlbmV2ZXIgYW4gaXRlbSBpcyBzZWxlY3RlZC9kZXNlbGVjdGVkLlxuICogICAgICAgfVxuICogICAgIH1cbiAqXG4gKiBAbW9kdWxlIHN5bWJvbHNcbiAqL1xuY29uc3Qgc3ltYm9scyA9IHtcblxuICAvKipcbiAgICogU3ltYm9sIGZvciB0aGUgYGRlZmF1bHRzYCBwcm9wZXJ0eS5cbiAgICpcbiAgICogVGhpcyBwcm9wZXJ0eSBjYW4gYmUgdXNlZCB0byBzZXQgb3Igb3ZlcnJpZGUgZGVmYXVsdHMgdGhhdCB3aWxsIGJlIGFwcGxpZWRcbiAgICogdG8gYSBuZXcgY29tcG9uZW50IGluc3RhbmNlLiBXaGVuIGltcGxlbWVudGluZyB0aGlzIHByb3BlcnR5LCB0YWtlIGNhcmUgdG9cbiAgICogZmlyc3QgYWNxdWlyZSBhbnkgZGVmYXVsdHMgZGVmaW5lZCBieSB0aGUgc3VwZXJjbGFzcy4gVGhlIHN0YW5kYXJkIGlkaW9tIGlzXG4gICAqIGFzIGZvbGxvd3M6XG4gICAqXG4gICAqICAgICBnZXQgW3N5bWJvbHMuZGVmYXVsdHNdKCkge1xuICAgKiAgICAgICBjb25zdCBkZWZhdWx0cyA9IHN1cGVyW3N5bWJvbHMuZGVmYXVsdHNdIHx8IHt9O1xuICAgKiAgICAgICAvLyBTZXQgb3Igb3ZlcnJpZGUgZGVmYXVsdCB2YWx1ZXMgaGVyZVxuICAgKiAgICAgICBkZWZhdWx0cy5jdXN0b21Qcm9wZXJ0eSA9IGZhbHNlO1xuICAgKiAgICAgICByZXR1cm4gZGVmYXVsdHM7XG4gICAqICAgICB9XG4gICAqXG4gICAqIEB2YXIge29iamVjdH0gZGVmYXVsdHNcbiAgICovXG4gIGRlZmF1bHRzOiBjcmVhdGVTeW1ib2woJ2RlZmF1bHRzJyksXG5cbiAgLyoqXG4gICAqIFN5bWJvbCBmb3IgdGhlIGBkcmFnZ2luZ2AgcHJvcGVydHkuXG4gICAqXG4gICAqIENvbXBvbmVudHMgbGlrZSBjYXJvdXNlbHMgb2Z0ZW4gZGVmaW5lIGFuaW1hdGVkIENTUyB0cmFuc2l0aW9ucyBmb3JcbiAgICogc2xpZGluZyBlZmZlY3RzLiBTdWNoIGEgdHJhbnNpdGlvbiBzaG91bGQgdXN1YWxseSAqbm90KiBiZSBhcHBsaWVkIHdoaWxlXG4gICAqIHRoZSB1c2VyIGlzIGRyYWdnaW5nLCBiZWNhdXNlIGEgQ1NTIGFuaW1hdGlvbiB3aWxsIGludHJvZHVjZSBhIGxhZyB0aGF0XG4gICAqIG1ha2VzIHRoZSBzd2lwZSBmZWVsIHNsdWdnaXNoLiBJbnN0ZWFkLCBhcyBsb25nIGFzIHRoZSB1c2VyIGlzIGRyYWdnaW5nXG4gICAqIHdpdGggdGhlaXIgZmluZ2VyIGRvd24sIHRoZSB0cmFuc2l0aW9uIHNob3VsZCBiZSBzdXBwcmVzc2VkLiBXaGVuIHRoZVxuICAgKiB1c2VyIHJlbGVhc2VzIHRoZWlyIGZpbmdlciwgdGhlIHRyYW5zaXRpb24gY2FuIGJlIHJlc3RvcmVkLCBhbGxvd2luZyB0aGVcbiAgICogYW5pbWF0aW9uIHRvIHNob3cgdGhlIGNhcm91c2VsIHNsaWRpbmcgaW50byBpdHMgZmluYWwgcG9zaXRpb24uXG4gICAqXG4gICAqIEB0eXBlIHtib29sZWFufSB0cnVlIGlmIGEgZHJhZyBpcyBpbiBwcm9ncmVzcywgZmFsc2UgaWYgbm90LlxuICAgKi9cbiAgZHJhZ2dpbmc6IGNyZWF0ZVN5bWJvbCgnZHJhZ2dpbmcnKSxcblxuICAvKipcbiAgICogU3ltYm9sIGZvciB0aGUgYGdvRG93bmAgbWV0aG9kLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgZG93bi5cbiAgICpcbiAgICogQGZ1bmN0aW9uIGdvRG93blxuICAgKi9cbiAgZ29Eb3duOiBjcmVhdGVTeW1ib2woJ2dvRG93bicpLFxuXG4gIC8qKlxuICAgKiBTeW1ib2wgZm9yIHRoZSBgZ29FbmRgIG1ldGhvZC5cbiAgICpcbiAgICogVGhpcyBtZXRob2QgaXMgaW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIHRvIHRoZSBlbmQgKGUuZy4sXG4gICAqIG9mIGEgbGlzdCkuXG4gICAqXG4gICAqIEBmdW5jdGlvbiBnb0VuZFxuICAgKi9cbiAgZ29FbmQ6IGNyZWF0ZVN5bWJvbCgnZ29FbmQnKSxcblxuICAvKipcbiAgICogU3ltYm9sIGZvciB0aGUgYGdvTGVmdGAgbWV0aG9kLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgbGVmdC5cbiAgICpcbiAgICogQGZ1bmN0aW9uIGdvTGVmdFxuICAgKi9cbiAgZ29MZWZ0OiBjcmVhdGVTeW1ib2woJ2dvTGVmdCcpLFxuXG4gIC8qKlxuICAgKiBTeW1ib2wgZm9yIHRoZSBgZ29SaWdodGAgbWV0aG9kLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgcmlnaHQuXG4gICAqXG4gICAqIEBmdW5jdGlvbiBnb1JpZ2h0XG4gICAqL1xuICBnb1JpZ2h0OiBjcmVhdGVTeW1ib2woJ2dvUmlnaHQnKSxcblxuICAvKipcbiAgICogU3ltYm9sIGZvciB0aGUgYGdvU3RhcnRgIG1ldGhvZC5cbiAgICpcbiAgICogVGhpcyBtZXRob2QgaXMgaW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIHRvIHRoZSBzdGFydFxuICAgKiAoZS5nLiwgb2YgYSBsaXN0KS5cbiAgICpcbiAgICogQGZ1bmN0aW9uIGdvU3RhcnRcbiAgICovXG4gIGdvU3RhcnQ6IGNyZWF0ZVN5bWJvbCgnZ29TdGFydCcpLFxuXG4gIC8qKlxuICAgKiBTeW1ib2wgZm9yIHRoZSBgZ29VcGAgbWV0aG9kLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgdXAuXG4gICAqXG4gICAqIEBmdW5jdGlvbiBnb1VwXG4gICAqL1xuICBnb1VwOiBjcmVhdGVTeW1ib2woJ2dvVXAnKSxcblxuICAvKipcbiAgICogU3ltYm9sIGZvciB0aGUgYGl0ZW1BZGRlZGAgbWV0aG9kLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIHdoZW4gYSBuZXcgaXRlbSBpcyBhZGRlZCB0byBhIGxpc3QuXG4gICAqXG4gICAqIEBmdW5jdGlvbiBpdGVtQWRkZWRcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaXRlbSAtIHRoZSBpdGVtIGJlaW5nIHNlbGVjdGVkL2Rlc2VsZWN0ZWRcbiAgICovXG4gIGl0ZW1BZGRlZDogY3JlYXRlU3ltYm9sKCdpdGVtQWRkZWQnKSxcblxuXG4gIC8qKlxuICAgKiBTeW1ib2wgZm9yIHRoZSBgaXRlbXNDaGFuZ2VkYCBtZXRob2QuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbiB0aGUgdW5kZXJseWluZyBjb250ZW50cyBjaGFuZ2UuIEl0IGlzIGFsc29cbiAgICogaW52b2tlZCBvbiBjb21wb25lbnQgaW5pdGlhbGl6YXRpb24g4oCTIHNpbmNlIHRoZSBpdGVtcyBoYXZlIFwiY2hhbmdlZFwiIGZyb21cbiAgICogYmVpbmcgbm90aGluZy5cbiAgICovXG4gIGl0ZW1zQ2hhbmdlZDogY3JlYXRlU3ltYm9sKCdpdGVtc0NoYW5nZWQnKSxcblxuICAvKipcbiAgICogU3ltYm9sIGZvciB0aGUgYGl0ZW1TZWxlY3RlZGAgbWV0aG9kLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIHdoZW4gYW4gaXRlbSBiZWNvbWVzIHNlbGVjdGVkIG9yIGRlc2VsZWN0ZWQuXG4gICAqXG4gICAqIEBmdW5jdGlvbiBpdGVtU2VsZWN0ZWRcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaXRlbSAtIHRoZSBpdGVtIGJlaW5nIHNlbGVjdGVkL2Rlc2VsZWN0ZWRcbiAgICogQHBhcmFtIHtib29sZWFufSBzZWxlY3RlZCAtIHRydWUgaWYgdGhlIGl0ZW0gaXMgc2VsZWN0ZWQsIGZhbHNlIGlmIG5vdFxuICAgKi9cbiAgaXRlbVNlbGVjdGVkOiBjcmVhdGVTeW1ib2woJ2l0ZW1TZWxlY3RlZCcpLFxuXG4gIC8qKlxuICAgKiBTeW1ib2wgZm9yIHRoZSBga2V5ZG93bmAgbWV0aG9kLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIHdoZW4gYW4gZWxlbWVudCByZWNlaXZlcyBhIGBrZXlkb3duYCBldmVudC5cbiAgICpcbiAgICogQGZ1bmN0aW9uIGtleWRvd25cbiAgICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBldmVudCAtIHRoZSBldmVudCBiZWluZyBwcm9jZXNzZWRcbiAgICovXG4gIGtleWRvd246IGNyZWF0ZVN5bWJvbCgna2V5ZG93bicpLFxuXG4gIC8qKlxuICAgKiBTeW1ib2wgZm9yIHRoZSBgdGVtcGxhdGVgIHByb3BlcnR5LlxuICAgKlxuICAgKiBUaGlzIHByb3BlcnR5IHJldHVybnMgYSBjb21wb25lbnQncyB0ZW1wbGF0ZS5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ3xIVE1MRWxlbWVudH1cbiAgICovXG4gIHRlbXBsYXRlOiBjcmVhdGVTeW1ib2woJ3RlbXBsYXRlJylcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN5bWJvbHM7XG4iLCIvKipcbiAqIEhlbHBlciBmdW5jdGlvbiBmb3Igc3RhbmRhcmQgY2xhc3NMaXN0LnRvZ2dsZSgpIGJlaGF2aW9yIG9uIG9sZCBicm93c2VycyxcbiAqIG5hbWVseSBJRSAxMS5cbiAqXG4gKiBUaGUgc3RhbmRhcmRcbiAqIFtjbGFzc2xpc3RdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9FbGVtZW50L2NsYXNzTGlzdClcbiAqIG9iamVjdCBoYXMgYSBgdG9nZ2xlKClgIGZ1bmN0aW9uIHRoYXQgc3VwcG9ydHMgYSBzZWNvbmQgQm9vbGVhbiBwYXJhbWV0ZXJcbiAqIHRoYXQgY2FuIGJlIHVzZWQgdG8gc3VjY2luY3RseSB0dXJuIGEgY2xhc3Mgb24gb3Igb2ZmLiBUaGlzIGZlYXR1cmUgaXMgb2Z0ZW5cbiAqIHVzZWZ1bCBpbiBkZXNpZ25pbmcgY3VzdG9tIGVsZW1lbnRzLCB3aGljaCBtYXkgd2FudCB0byBleHRlcm5hbGx5IHJlZmxlY3RcbiAqIGNvbXBvbmVudCBzdGF0ZSBpbiBhIENTUyBjbGFzcyB0aGF0IGNhbiBiZSB1c2VkIGZvciBzdHlsaW5nIHB1cnBvc2VzLlxuICpcbiAqIFVuZm9ydHVuYXRlbHksIElFIDExIGRvZXMgbm90IHN1cHBvcnQgdGhlIEJvb2xlYW4gcGFyYW1ldGVyIHRvXG4gKiBgY2xhc3NMaXN0LnRvZ2dsZSgpYC4gVGhpcyBoZWxwZXIgZnVuY3Rpb24gYmVoYXZlcyBsaWtlIHRoZSBzdGFuZGFyZFxuICogYHRvZ2dsZSgpYCwgaW5jbHVkaW5nIHN1cHBvcnQgZm9yIHRoZSBCb29sZWFuIHBhcmFtZXRlciwgc28gdGhhdCBpdCBjYW4gYmVcbiAqIHVzZWQgZXZlbiBvbiBJRSAxMS5cbiAqXG4gKiBAZnVuY3Rpb24gdG9nZ2xlQ2xhc3NcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBUaGUgZWxlbWVudCB0byBtb2RpZnlcbiAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgLSBUaGUgY2xhc3MgdG8gYWRkL3JlbW92ZVxuICogQHBhcmFtIHtib29sZWFufSBbZm9yY2VdIC0gRm9yY2UgdGhlIGNsYXNzIHRvIGJlIGFkZGVkIChpZiB0cnVlKSBvciByZW1vdmVkXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaWYgZmFsc2UpXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvZ2dsZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSwgZm9yY2UpIHtcbiAgY29uc3QgY2xhc3NMaXN0ID0gZWxlbWVudC5jbGFzc0xpc3Q7XG4gIGNvbnN0IGFkZENsYXNzID0gKHR5cGVvZiBmb3JjZSA9PT0gJ3VuZGVmaW5lZCcpID9cbiAgICAhY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkgOlxuICAgIGZvcmNlO1xuICBpZiAoYWRkQ2xhc3MpIHtcbiAgICBjbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICB9XG4gIHJldHVybiBhZGRDbGFzcztcbn1cbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgdHJhbnNwaWxlZCB0byBjcmVhdGUgYW4gRVM1LWNvbXBhdGlibGUgZGlzdHJpYnV0aW9uIGluIHdoaWNoXG4gKiB0aGUgcGFja2FnZSdzIG1haW4gZmVhdHVyZShzKSBhcmUgYXZhaWxhYmxlIHZpYSB0aGUgd2luZG93LkJhc2ljIGdsb2JhbC5cbiAqIElmIHlvdSdyZSBhbHJlYWR5IHVzaW5nIEVTNiB5b3Vyc2VsZiwgaWdub3JlIHRoaXMgZmlsZSwgYW5kIGluc3RlYWQgaW1wb3J0XG4gKiB0aGUgc291cmNlIGZpbGUocykgeW91IHdhbnQgZnJvbSB0aGUgc3JjIGZvbGRlci5cbiAqL1xuXG5pbXBvcnQgQ3VycmVudEFuY2hvciBmcm9tICcuL3NyYy9DdXJyZW50QW5jaG9yJztcblxud2luZG93LkJhc2ljID0gd2luZG93LkJhc2ljIHx8IHt9O1xud2luZG93LkJhc2ljLkN1cnJlbnRBbmNob3IgPSBDdXJyZW50QW5jaG9yO1xuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9jcmVhdGVTeW1ib2wnO1xuaW1wb3J0IHNhZmVBdHRyaWJ1dGVzIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL3NhZmVBdHRyaWJ1dGVzJztcbmltcG9ydCBzeW1ib2xzIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL3N5bWJvbHMnO1xuaW1wb3J0IFdyYXBwZWRTdGFuZGFyZEVsZW1lbnQgZnJvbSAnLi4vLi4vYmFzaWMtd3JhcHBlZC1zdGFuZGFyZC1lbGVtZW50L3NyYy9XcmFwcGVkU3RhbmRhcmRFbGVtZW50JztcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3QgYXJlYUxpbmtTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2FyZWFMaW5rJyk7XG5cblxuLyoqXG4gKiBBbiBhbmNob3IgKGxpbmspIHRoYXQgaGlnaGxpZ2h0cyBpdHNlbGYgd2hlbiBpdHMgZGVzdGluYXRpb24gbWF0Y2hlcyB0aGVcbiAqIGN1cnJlbnQgbG9jYXRpb24uXG4gKlxuICogW0xpdmUgZGVtb10oaHR0cDovL2Jhc2ljd2ViY29tcG9uZW50cy5vcmcvYmFzaWMtd2ViLWNvbXBvbmVudHMvcGFja2FnZXMvYmFzaWMtY3VycmVudC1hbmNob3IvKVxuICpcbiAqIFN1Y2ggYSBsaW5rIGNvbW1vbmx5IGFwcGVhcnMgaW4gdG9vbGJhcnMsIHNpZGUgYmFycywgYW5kIG90aGVyIG5hdmlnYXRpb25cbiAqIGVsZW1lbnRzLiBJbiB0aGVzZSBzaXR1YXRpb25zLCB5b3UgZ2VuZXJhbGx5IHdhbnQgdGhlIHVzZXIgdG8gdW5kZXJzdGFuZCB3aGF0XG4gKiBwYWdlIG9yIGFyZWEgdGhlIHVzZXIgaXMgYWxyZWFkeSBvbi5cbiAqXG4gKiBXaGVuIHRoZSBsaW5rIGlzIGN1cnJlbnQg4oCUIHdoZW4gaXQgcG9pbnRzIHRvIHRoZSBjdXJyZW50IGxvY2F0aW9uIOKAlCB0aGVcbiAqIGxpbmsgd2lsbCBoYXZlIHRoZSBDU1MgYGN1cnJlbnRgIGNsYXNzIGFwcGxpZWQgdG8gaXQsIGFuZCBpdHMgYGN1cnJlbnRgXG4gKiBwcm9wZXJ0eSB3aWxsIGJlIHRydWUuXG4gKlxuICogTm90ZTogb25lIGxpbWl0YXRpb24gb2YgdGhpcyBjb21wb25lbnQgaXMgdGhhdCwgYnkgZGVmYXVsdCwgdGhlIGxpbmsgZG9lc1xuICogKm5vdCogc2hvdyB0aGUgc3RhbmRhcmQgbGluayBjb2xvciAodXN1YWxseSBibHVlKSBhbmQgdGV4dCBkZWNvcmF0aW9uXG4gKiAodW5kZXJsaW5lKS4gSG93ZXZlciwgaW4gbmF2aWdhdGlvbiBlbGVtZW50cyBsaWtlIHRvb2xiYXJzLCB5b3Ugb2Z0ZW4gd2lsbFxuICogd2FudCB0byBleHBsaWNpdGx5IHNwZWNpZmljIGxpbmsgY29sb3JzIGFueXdheSwgZS5nLiwgdG8gcmVmbGVjdCB5b3VyXG4gKiBhcHBsaWNhdGlvbidzIHZpc3VhbCBzdHlsZSBhbmQgYnJhbmQuXG4gKi9cbmNsYXNzIEN1cnJlbnRBbmNob3IgZXh0ZW5kcyBXcmFwcGVkU3RhbmRhcmRFbGVtZW50LndyYXAoJ2EnKSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIGV2ZW50ID0+IHtcbiAgICAgIHJlZnJlc2godGhpcyk7XG4gICAgfSk7XG5cbiAgICAvLyBTdHVwaWQgRWRnZS9JRSBcInN1cHBvcnRcIiBwb3BzdGF0ZSwgYnV0IGRvbid0IGZpcmUgaXQgb24gaGFzaGNoYW5nZS5cbiAgICAvLyBTbyB3ZSBoYXZlIHRvIGxpc3RlbiBmb3IgaGFzaGNoYW5nZSBhcyB3ZWxsLCB3aXRoIHRoZSByZXN1bHQgdGhhdCBhXG4gICAgLy8gc3RhbmRhcmRzLWNvbXBsaWFudCBicm93c2VyIG1heSBlbmQgdXAgcmVmcmVzaGluZyB0aGUgbGluayB0d2ljZS5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIGV2ZW50ID0+IHtcbiAgICAgIHJlZnJlc2godGhpcyk7XG4gICAgfSk7XG5cbiAgICAvLyBTZXQgZGVmYXVsdHMuXG4gICAgaWYgKHR5cGVvZiB0aGlzLmFyZWFMaW5rID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5hcmVhTGluayA9IHRoaXNbc3ltYm9scy5kZWZhdWx0c10uYXJlYUxpbms7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRydWUgaWYgdGhlIGxpbmsgcG9pbnRzIHRvIGFuIGFyZWEgd2l0aGluIGEgc2l0ZSwgbm90IGp1c3QgYSBzaW5nbGUgcGFnZS5cbiAgICpcbiAgICogSWYgdHJ1ZSwgdGhlIG1hdGNoaW5nIHJ1bGUgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGxpbmsgaXMgY3VycmVudCBjaGFuZ2VzOlxuICAgKiBhbiBhcmVhIGxpbmsgaXMgY29uc2lkZXJlZCB0byBiZSBjdXJyZW50IGlmIHRoZSBsaW5rJ3MgZGVzdGluYXRpb24gZm9ybXMgYVxuICAgKiBwcmVmaXggb2YgdGhlIGN1cnJlbnQgbG9jYXRpb24gKGluc3RlYWQgb2YgbWF0Y2hpbmcgdGhlIGNvbXBsZXRlIFVSTCkuXG4gICAqXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgZ2V0IGFyZWFMaW5rKCkge1xuICAgIHJldHVybiB0aGlzW2FyZWFMaW5rU3ltYm9sXTtcbiAgfVxuICBzZXQgYXJlYUxpbmsodmFsdWUpIHtcbiAgICAvLyBDYXN0IGJvb2xlYW4gb3Igc3RyaW5nIHZhbHVlcyB0byBib29sZWFuLlxuICAgIHRoaXNbYXJlYUxpbmtTeW1ib2xdID0gKFN0cmluZyh2YWx1ZSkgPT09ICd0cnVlJyk7XG4gICAgcmVmcmVzaCh0aGlzKTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGlmIChzdXBlci5jb25uZWN0ZWRDYWxsYmFjaykgeyBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpOyB9XG4gICAgc2FmZUF0dHJpYnV0ZXMuY29ubmVjdGVkKHRoaXMpO1xuICAgIHJlZnJlc2godGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogVHJ1ZSBpZiB0aGUgbGluaydzIGRlc3RpbmF0aW9uIG1hdGNoZXMgdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAgICpcbiAgICogSWYgdGhpcyBpcyB0cnVlLCB0aGUgZWxlbWVudCB3aWxsIGhhdmUgYW4gYGN1cnJlbnRgIENTUyBjbGFzcyBhcHBsaWVkIHRvIGl0LlxuICAgKlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIGdldCBjdXJyZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNsYXNzTGlzdC5jb250YWlucygnY3VycmVudCcpO1xuICB9XG4gIHNldCBjdXJyZW50KHZhbHVlKSB7XG4gICAgc2FmZUF0dHJpYnV0ZXMudG9nZ2xlQ2xhc3ModGhpcywgJ2N1cnJlbnQnLCB2YWx1ZSk7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY3VycmVudC1jaGFuZ2VkJykpO1xuICB9XG5cbiAgZ2V0IFtzeW1ib2xzLmRlZmF1bHRzXSgpIHtcbiAgICBjb25zdCBkZWZhdWx0cyA9IHN1cGVyW3N5bWJvbHMuZGVmYXVsdHNdIHx8IHt9O1xuICAgIGRlZmF1bHRzLmFyZWFMaW5rID0gZmFsc2U7XG4gICAgcmV0dXJuIGRlZmF1bHRzO1xuICB9XG5cbiAgLy8gQXVnbWVudCBocmVmIGltcGxlbWVudGF0aW9uIHNvIHRoYXQgY2hhbmdpbmcgaHJlZiBjaGVja3MgdGhlIGFjdGl2ZSBzdGF0dXMuXG4gIGdldCBocmVmKCkge1xuICAgIHJldHVybiBzdXBlci5ocmVmO1xuICB9XG4gIHNldCBocmVmKHZhbHVlKSB7XG4gICAgc3VwZXIuaHJlZiA9IHZhbHVlO1xuICAgIHJlZnJlc2godGhpcyk7XG4gIH1cblxuICBnZXQgW3N5bWJvbHMudGVtcGxhdGVdKCkge1xuICAgIC8vIFJlc2V0IHN0eWxlcyBzbyB0aGF0IGNvbG9yIGNhbiBiZSBzcGVjaWZpZWQgZnJvbSB0aGUgb3V0c2lkZSB3aXRob3V0XG4gICAgLy8gaGF2aW5nIHRvIGRlZmluZSBhIENTUyB2YXJpYWJsZS5cbiAgICByZXR1cm4gYFxuICAgICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG5cbiAgICAgICNpbm5lciB7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcbiAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8YSBpZD1cImlubmVyXCI+PHNsb3Q+PC9zbG90PjwvYT5gO1xuICB9XG5cbn1cblxuXG4vLyBVcGRhdGUgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIHRoZSBlbGVtZW50IGJhc2VkIG9uIHRoZSBjdXJyZW50IGxvY2F0aW9uLlxuZnVuY3Rpb24gcmVmcmVzaChlbGVtZW50KSB7XG4gIGNvbnN0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICBsZXQgbWF0Y2g7XG4gIGlmIChlbGVtZW50LmFyZWFMaW5rKSB7XG4gICAgLy8gTWF0Y2ggcHJlZml4XG4gICAgbGV0IHByZWZpeCA9IGVsZW1lbnQuaHJlZjtcbiAgICAvLyBJZiBwcmVmaXggZG9lc24ndCBlbmQgaW4gc2xhc2gsIGFkZCBhIHNsYXNoLlxuICAgIC8vIFdlIHdhbnQgdG8gYXZvaWQgbWF0Y2hpbmcgaW4gdGhlIG1pZGRsZSBvZiBhIGZvbGRlciBuYW1lLlxuICAgIGlmIChwcmVmaXgubGVuZ3RoIDwgdXJsLmxlbmd0aCAmJiBwcmVmaXguc3Vic3RyKC0xKSAhPT0gJy8nKSB7XG4gICAgICBwcmVmaXggKz0gJy8nO1xuICAgIH1cbiAgICBtYXRjaCA9ICh1cmwuc3Vic3RyKDAsIHByZWZpeC5sZW5ndGgpID09PSBwcmVmaXgpO1xuICB9IGVsc2Uge1xuICAgIC8vIE1hdGNoIHdob2xlIHBhdGhcbiAgICBtYXRjaCA9ICh1cmwgPT09IGVsZW1lbnQuaHJlZik7XG4gIH1cbiAgZWxlbWVudC5jdXJyZW50ID0gbWF0Y2g7XG59XG5cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdiYXNpYy1jdXJyZW50LWFuY2hvcicsIEN1cnJlbnRBbmNob3IpO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyB0cmFuc3BpbGVkIHRvIGNyZWF0ZSBhbiBFUzUtY29tcGF0aWJsZSBkaXN0cmlidXRpb24gaW4gd2hpY2hcbiAqIHRoZSBwYWNrYWdlJ3MgbWFpbiBmZWF0dXJlKHMpIGFyZSBhdmFpbGFibGUgdmlhIHRoZSB3aW5kb3cuQmFzaWMgZ2xvYmFsLlxuICogSWYgeW91J3JlIGFscmVhZHkgdXNpbmcgRVM2IHlvdXJzZWxmLCBpZ25vcmUgdGhpcyBmaWxlLCBhbmQgaW5zdGVhZCBpbXBvcnRcbiAqIHRoZSBzb3VyY2UgZmlsZShzKSB5b3Ugd2FudCBmcm9tIHRoZSBzcmMgZm9sZGVyLlxuICovXG5cbmltcG9ydCBFbGVtZW50QmFzZSBmcm9tICcuL3NyYy9FbGVtZW50QmFzZSc7XG5cbndpbmRvdy5CYXNpYyA9IHdpbmRvdy5CYXNpYyB8fCB7fTtcbndpbmRvdy5CYXNpYy5FbGVtZW50QmFzZSA9IEVsZW1lbnRCYXNlO1xuIiwiaW1wb3J0IEF0dHJpYnV0ZU1hcnNoYWxsaW5nTWl4aW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQXR0cmlidXRlTWFyc2hhbGxpbmdNaXhpbic7XG5pbXBvcnQgQ29tcG9zYWJsZU1peGluIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NvbXBvc2FibGVNaXhpbic7XG5pbXBvcnQgRGlzdHJpYnV0ZWRDaGlsZHJlbk1peGluIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW5NaXhpbic7XG5pbXBvcnQgU2hhZG93RWxlbWVudFJlZmVyZW5jZXNNaXhpbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TaGFkb3dFbGVtZW50UmVmZXJlbmNlc01peGluJztcbmltcG9ydCBTaGFkb3dUZW1wbGF0ZU1peGluIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NoYWRvd1RlbXBsYXRlTWl4aW4nO1xuXG5cbi8qKlxuICogQSBzYW1wbGUgZ2VuZXJhbC1wdXJwb3NlIGJhc2UgY2xhc3MgZm9yIGRlZmluaW5nIGN1c3RvbSBlbGVtZW50cyB0aGF0IG1peGVzXG4gKiBpbiBzb21lIGNvbW1vbiBmZWF0dXJlczogdGVtcGxhdGUgc3RhbXBpbmcgaW50byBhIHNoYWRvdyByb290LCBzaGFkb3cgZWxlbWVudFxuICogcmVmZXJlbmNlcywgbWFyc2hhbGxpbmcgYXR0cmlidXRlcyB0byBwcm9wZXJ0aWVzLCBhbmQgcmV0cmlldmluZyB0aGUgY2hpbGRyZW5cbiAqIGRpc3RyaWJ1dGVkIHRvIGEgY29tcG9uZW50LlxuICpcbiAqIFRoaXMgYmFzZSBjbGFzcyBpcyBub3Qgc3BlY2lhbCBpbiBhbnkgd2F5LCBhbmQgaXMgZGVmaW5lZCBvbmx5IGFzIGFcbiAqIGNvbnZlbmllbnQgc2hvcnRoYW5kIGZvciBhcHBseWluZyB0aGUgbWl4aW5zIGxpc3RlZCBhYm92ZS4gWW91IGNhbiB1c2UgdGhpc1xuICogY2xhc3MgYXMgYSBiYXNlIGNsYXNzIGZvciB5b3VyIG93biBlbGVtZW50cywgb3IgZWFzaWx5IGNyZWF0ZSB5b3VyIG93biBiYXNlXG4gKiBjbGFzcyBieSBhcHBseWluZyB0aGUgc2FtZSBzZXQgb2YgbWl4aW5zLlxuICpcbiAqIFRoZSBFbGVtZW50QmFzZSBiYXNlIGNsYXNzIGRvZXMgbm90IHJlZ2lzdGVyIGl0c2VsZiBhcyBhIGN1c3RvbSBlbGVtZW50IHdpdGhcbiAqIHRoZSBicm93c2VyLCBhbmQgaGVuY2UgY2Fubm90IGJlIGluZGVwZW5kZW50bHkgaW5zdGFudGlhdGVkLlxuICpcbiAqIEBtaXhlcyBBdHRyaWJ1dGVNYXJzaGFsbGluZ01peGluXG4gKiBAbWl4ZXMgQ29tcG9zYWJsZU1peGluXG4gKiBAbWl4ZXMgRGlzdHJpYnV0ZWRDaGlsZHJlbk1peGluXG4gKiBAbWl4ZXMgU2hhZG93RWxlbWVudFJlZmVyZW5jZXNNaXhpblxuICogQG1peGVzIFNoYWRvd1RlbXBsYXRlTWl4aW5cbiAqL1xuY2xhc3MgRWxlbWVudEJhc2UgZXh0ZW5kcyBDb21wb3NhYmxlTWl4aW4oSFRNTEVsZW1lbnQpLmNvbXBvc2UoXG4gIFNoYWRvd1RlbXBsYXRlTWl4aW4sICAgICAgICAgIC8vIGJlZm9yZSBub2RlIGZpbmRpbmcsIHNvIHNoYWRvdyByb290IGlzIHBvcHVsYXRlZFxuICBTaGFkb3dFbGVtZW50UmVmZXJlbmNlc01peGluLCAvLyBiZWZvcmUgbWFyc2hhbGxpbmcsIHNvIHByb3BlcnRpZXMgY2FuIHVzZSByZWZzXG4gIEF0dHJpYnV0ZU1hcnNoYWxsaW5nTWl4aW4sXG4gIERpc3RyaWJ1dGVkQ2hpbGRyZW5NaXhpblxuKSB7fVxuXG5leHBvcnQgZGVmYXVsdCBFbGVtZW50QmFzZTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgdHJhbnNwaWxlZCB0byBjcmVhdGUgYW4gRVM1LWNvbXBhdGlibGUgZGlzdHJpYnV0aW9uIGluIHdoaWNoXG4gKiB0aGUgcGFja2FnZSdzIG1haW4gZmVhdHVyZShzKSBhcmUgYXZhaWxhYmxlIHZpYSB0aGUgd2luZG93LkJhc2ljIGdsb2JhbC5cbiAqIElmIHlvdSdyZSBhbHJlYWR5IHVzaW5nIEVTNiB5b3Vyc2VsZiwgaWdub3JlIHRoaXMgZmlsZSwgYW5kIGluc3RlYWQgaW1wb3J0XG4gKiB0aGUgc291cmNlIGZpbGUocykgeW91IHdhbnQgZnJvbSB0aGUgc3JjIGZvbGRlci5cbiAqL1xuXG5pbXBvcnQgRmFkZU92ZXJmbG93IGZyb20gJy4vc3JjL0ZhZGVPdmVyZmxvdyc7XG5cbndpbmRvdy5CYXNpYyA9IHdpbmRvdy5CYXNpYyB8fCB7fTtcbndpbmRvdy5CYXNpYy5GYWRlT3ZlcmZsb3cgPSBGYWRlT3ZlcmZsb3c7XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL2NyZWF0ZVN5bWJvbCc7XG5pbXBvcnQgRWxlbWVudEJhc2UgZnJvbSAnLi4vLi4vYmFzaWMtZWxlbWVudC1iYXNlL3NyYy9FbGVtZW50QmFzZSc7XG5pbXBvcnQgc3ltYm9scyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9zeW1ib2xzJztcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3QgZmFkZUNvbG9yU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdmYWRlQ29sb3InKTtcblxuXG4vKipcbiAqIEZhZGVzIG91dCBjb250ZW50IHRoYXQgb3ZlcmZsb3dzIHNvIHRoZSB1c2VyIGtub3dzIHRoZXJlJ3MgbW9yZS5cbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBkb2Vzbid0IGhhbmRsZSBpbnRlcmFjdGl2aXR5LlxuICpcbiAqIFRoZSBjb21wb25lbnQgbmVlZHMgdG8ga25vdyB0aGUgY29sb3IgaXQgc2hvdWxkIGZhZGUgdG8sIHdoaWNoIGl0IHRyaWVzIHRvXG4gKiBpbmZlciBmcm9tIHRoZSBiYWNrZ3JvdW5kIGNvbG9yLiBJbiBzb21lIHNpdHVhdGlvbnMsIHRoaXMgbWF5IG5vdCB3b3JrLCBpblxuICogd2hpY2ggY2FzZSB5b3UgY2FuIGV4cGxpY2l0bHkgc2V0IHRoZSBmYWRlQ29sb3IgYXR0cmlidXRlLlxuICpcbiAqIFRoZSBjb21wb25lbnQgY3VycmVudGx5IGFsd2F5cyBkaXNwbGF5cyB0aGUgZmFkZSwgZXZlbiBpZiB0aGUgY29tcG9uZW50J3NcbiAqIGNvbnRlbnQgaXMgc2hvcnQgZW5vdWdoIHRvIGZpdCBjb21wbGV0ZWx5IGluIHZpZXcuXG4gKlxuICogQGV4dGVuZHMgRWxlbWVudEJhc2VcbiAqL1xuY2xhc3MgRmFkZU92ZXJmbG93IGV4dGVuZHMgRWxlbWVudEJhc2Uge1xuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGlmIChzdXBlci5jb25uZWN0ZWRDYWxsYmFjaykgeyBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpOyB9XG4gICAgaWYgKHRoaXMuZmFkZUNvbG9yID09IG51bGwpIHtcbiAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgY29sb3Igb2YgdGhlIGZhZGUuXG4gICAqXG4gICAqIFRoZSBmYWRlIGNvbG9yIHNob3VsZCBtYXRjaCB0aGUgYmFja2dyb3VuZCBjb2xvci4gVGhlIGNvbXBvbmVudCBkb2VzIGl0c1xuICAgKiBiZXN0IHRvIGluZmVyIHRoZSBiYWNrZ3JvdW5kIGNvbG9yLCBidXQgaW4gc29tZSBzaXR1YXRpb25zLCB0aGF0IG1heSBub3RcbiAgICogd29yay4gSW4gdGhvc2UgY2FzZXMsIHlvdSBjYW4gbWFudWFsbHkgaWRlbnRpZnkgdGhlIGJhY2tncm91bmQgY29sb3IuXG4gICAqIFRoaXMgc2hvdWxkIGJlIGEgc29saWQgY29sb3IuXG4gICAqXG4gICAqIEBhdHRyaWJ1dGUgZmFkZUNvbG9yXG4gICAqIEBkZWZhdWx0IHdoaXRlXG4gICAqL1xuICBnZXQgZmFkZUNvbG9yKCkge1xuICAgIHJldHVybiB0aGlzW2ZhZGVDb2xvclN5bWJvbF07XG4gIH1cbiAgc2V0IGZhZGVDb2xvcih2YWx1ZSkge1xuICAgIHRoaXNbZmFkZUNvbG9yU3ltYm9sXSA9IHZhbHVlO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgY29uc3QgcmdiID0gZXh0cmFjdFJnYlZhbHVlcyh2YWx1ZSk7XG4gICAgICBpZiAocmdiKSB7XG4gICAgICAgIGNvbnN0IGZhZGVDb2xvclRyYW5zcGFyZW50ID0gYHJnYmEoJHtyZ2Iucn0sJHtyZ2IuZ30sJHtyZ2IuYn0sMClgO1xuICAgICAgICBjb25zdCBncmFkaWVudCA9IGBsaW5lYXItZ3JhZGllbnQoJHtmYWRlQ29sb3JUcmFuc3BhcmVudH0gMCUsICR7dmFsdWV9IDEwMCUpYDtcbiAgICAgICAgdGhpcy4kLmZhZGUuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gZ3JhZGllbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEluZmVyIHRoZSBmYWRlIGNvbG9yIGZyb20gYmFja2dyb3VuZCBjb2xvci4gSWYgeW91IGhhdmUgcHJvZ3JhbW1hdGljYWxseVxuICAgKiBjaGFuZ2VkIHRoZSBjb2xvciBiZWhpbmQgdGhlIGNvbXBvbmVudCwgeW91IGNhbiBpbnZva2UgdGhpcyBtZXRob2QgdG8gaGF2ZVxuICAgKiB0aGUgY29tcG9uZW50IHRyeSB0byBwaWNrIHVwIHRoZSBuZXcgYmFja2dyb3VuZCBjb2xvci5cbiAgICovXG4gIHJlZnJlc2goKSB7XG4gICAgLy8gVE9ETzogQXV0b21hdGljYWxseSBoaWRlIHRoZSBmYWRlIGlmIGFsbCB0aGUgY29udGVudCBjYW4gYmUgc2Vlbi5cbiAgICB0aGlzLmZhZGVDb2xvciA9IGZpbmRCYWNrZ3JvdW5kQ29sb3IodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogVHJ1ZSBpZiB0aGUgY29tcG9uZW50IHNob3VsZCBzaG93IHRoZSBmYWRlIHRvIHRoZSBiYWNrZ3JvdW5kIGNvbG9yLlxuICAgKlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKi9cbiAgZ2V0IHNob3dGYWRlKCkge1xuICAgIHJldHVybiB0aGlzLiQuZmFkZS5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZSc7XG4gIH1cbiAgc2V0IHNob3dGYWRlKHZhbHVlKSB7XG4gICAgdGhpcy4kLmZhZGUuc3R5bGUuZGlzcGxheSA9IHZhbHVlID8gJycgOiAnbm9uZSc7XG4gIH1cblxuICBnZXQgW3N5bWJvbHMudGVtcGxhdGVdKCkge1xuICAgIHJldHVybiBgXG4gICAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG5cbiAgICAgICNmYWRlIHtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBoZWlnaHQ6IDNlbTtcbiAgICAgICAgbWF4LWhlaWdodDogNTAlO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgLyogTGV0cyB1c2VyIGludGVyYWN0IHdpdGggY29udGVudCB0aHJvdWdoIHRoZSBmYWRlLiAqL1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBpZD1cImZhZGVcIj48L2Rpdj5cbiAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICBgO1xuICB9XG5cbn1cblxuXG4vLyBSZXR1cm4gdGhlIGJhY2tncm91bmQgY29sb3Igb2YgdGhlIGdpdmVuIGVsZW1lbnQuIElmIHRoZSBjb2xvciBpc1xuLy8gXCJ0cmFuc3BhcmVudFwiICh0aGUgZGVmYXVsdCBpbiBNb3ppbGxhIGFuZCBJRSkgb3IgXCJyZ2JhKDAsIDAsIDAsIDApXCIgKHRoZVxuLy8gZGVmYXVsdCB0cmFuc3BhcmVudCB2YWx1ZSBpbiBCbGluayBhbmQgV2Via2l0KSwgd2FsayB1cCB0aGUgcGFyZW50IGNoYWluXG4vLyB1bnRpbCBhIG5vbi10cmFuc3BhcmVudCBjb2xvciBpcyBmb3VuZC5cbmZ1bmN0aW9uIGZpbmRCYWNrZ3JvdW5kQ29sb3IoZWxlbWVudCkge1xuICBpZiAoZWxlbWVudCA9PSBudWxsIHx8IHR5cGVvZiBlbGVtZW50LnN0eWxlID09PSAndW5kZWZpbmVkJykge1xuICAgIC8vIFRoaXMgZWxlbWVudCBoYXMgbm8gYmFja2dyb3VuZCwgYXNzdW1lIHdoaXRlLlxuICAgIHJldHVybiAncmdiKDI1NSwyNTUsMjU1KSc7XG4gIH1cbiAgY29uc3QgYmFja2dyb3VuZENvbG9yID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5iYWNrZ3JvdW5kQ29sb3I7XG4gIGlmIChiYWNrZ3JvdW5kQ29sb3IgPT09ICd0cmFuc3BhcmVudCcgfHwgYmFja2dyb3VuZENvbG9yID09PSAncmdiYSgwLCAwLCAwLCAwKScpIHtcbiAgICByZXR1cm4gZmluZEJhY2tncm91bmRDb2xvcihlbGVtZW50LnBhcmVudE5vZGUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBiYWNrZ3JvdW5kQ29sb3I7XG4gIH1cbn1cblxuXG4vLyBSZXR1cm4gdGhlIGluZGl2aWR1YWwgUkdCIHZhbHVlcyBmcm9tIGEgQ1NTIGNvbG9yIHN0cmluZy5cbmZ1bmN0aW9uIGV4dHJhY3RSZ2JWYWx1ZXMocmdiU3RyaW5nKSB7XG4gIGNvbnN0IHJnYlJlZ2V4ID0gL3JnYmE/XFwoXFxzKihcXGQrKVxccyosXFxzKihcXGQrKVxccyosXFxzKihcXGQrKVxccyooPzosXFxzKltcXGRcXC5dK1xccyopP1xcKS87XG4gIGNvbnN0IG1hdGNoID0gcmdiUmVnZXguZXhlYyhyZ2JTdHJpbmcpO1xuICBpZiAobWF0Y2gpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcjogcGFyc2VJbnQobWF0Y2hbMV0pLFxuICAgICAgZzogcGFyc2VJbnQobWF0Y2hbMl0pLFxuICAgICAgYjogcGFyc2VJbnQobWF0Y2hbM10pXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYmFzaWMtZmFkZS1vdmVyZmxvdycsIEZhZGVPdmVyZmxvdyk7XG5leHBvcnQgZGVmYXVsdCBGYWRlT3ZlcmZsb3c7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHRyYW5zcGlsZWQgdG8gY3JlYXRlIGFuIEVTNS1jb21wYXRpYmxlIGRpc3RyaWJ1dGlvbiBpbiB3aGljaFxuICogdGhlIHBhY2thZ2UncyBtYWluIGZlYXR1cmUocykgYXJlIGF2YWlsYWJsZSB2aWEgdGhlIHdpbmRvdy5CYXNpYyBnbG9iYWwuXG4gKiBJZiB5b3UncmUgYWxyZWFkeSB1c2luZyBFUzYgeW91cnNlbGYsIGlnbm9yZSB0aGlzIGZpbGUsIGFuZCBpbnN0ZWFkIGltcG9ydFxuICogdGhlIHNvdXJjZSBmaWxlKHMpIHlvdSB3YW50IGZyb20gdGhlIHNyYyBmb2xkZXIuXG4gKi9cblxuaW1wb3J0IExpc3RCb3ggZnJvbSAnLi9zcmMvTGlzdEJveCc7XG5cbndpbmRvdy5CYXNpYyA9IHdpbmRvdy5CYXNpYyB8fCB7fTtcbndpbmRvdy5CYXNpYy5MaXN0Qm94ID0gTGlzdEJveDtcbiIsImltcG9ydCBFbGVtZW50QmFzZSBmcm9tICcuLi8uLi9iYXNpYy1lbGVtZW50LWJhc2Uvc3JjL0VsZW1lbnRCYXNlJztcbmltcG9ydCBEaXN0cmlidXRlZENoaWxkcmVuQ29udGVudE1peGluIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW5Db250ZW50TWl4aW4nO1xuaW1wb3J0IENsaWNrU2VsZWN0aW9uTWl4aW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ2xpY2tTZWxlY3Rpb25NaXhpbic7XG5pbXBvcnQgQ29udGVudEl0ZW1zTWl4aW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ29udGVudEl0ZW1zTWl4aW4nO1xuaW1wb3J0IERpcmVjdGlvblNlbGVjdGlvbk1peGluIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0RpcmVjdGlvblNlbGVjdGlvbk1peGluJztcbmltcG9ydCBHZW5lcmljTWl4aW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvR2VuZXJpY01peGluJztcbmltcG9ydCBLZXlib2FyZE1peGluIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0tleWJvYXJkTWl4aW4nO1xuaW1wb3J0IEtleWJvYXJkRGlyZWN0aW9uTWl4aW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvS2V5Ym9hcmREaXJlY3Rpb25NaXhpbic7XG5pbXBvcnQgS2V5Ym9hcmRQYWdlZFNlbGVjdGlvbk1peGluIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0tleWJvYXJkUGFnZWRTZWxlY3Rpb25NaXhpbic7XG5pbXBvcnQgS2V5Ym9hcmRQcmVmaXhTZWxlY3Rpb25NaXhpbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9LZXlib2FyZFByZWZpeFNlbGVjdGlvbk1peGluJztcbmltcG9ydCBTZWxlY3RlZEl0ZW1UZXh0VmFsdWVNaXhpbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TZWxlY3RlZEl0ZW1UZXh0VmFsdWVNaXhpbic7XG5pbXBvcnQgU2VsZWN0aW9uQXJpYUFjdGl2ZU1peGluIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NlbGVjdGlvbkFyaWFBY3RpdmVNaXhpbic7XG5pbXBvcnQgU2VsZWN0aW9uSGlnaGxpZ2h0TWl4aW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2VsZWN0aW9uSGlnaGxpZ2h0TWl4aW4nO1xuaW1wb3J0IFNlbGVjdGlvbkluVmlld01peGluIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NlbGVjdGlvbkluVmlld01peGluJztcbmltcG9ydCBTaW5nbGVTZWxlY3Rpb25NaXhpbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TaW5nbGVTZWxlY3Rpb25NaXhpbic7XG5pbXBvcnQgc3ltYm9scyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9zeW1ib2xzJztcblxuXG4vKipcbiAqIEEgc2luZ2xlLXNlbGVjdGlvbiBsaXN0IGJveCB0aGF0IHN1cHBvcnRzIHNlbGVjdGlvbiBoaWdobGlnaHRpbmcgKHVzaW5nIHRoZVxuICogc3lzdGVtIGhpZ2hsaWdodCBjb2xvcikgYW5kIGtleWJvYXJkIG5hdmlnYXRpb24uXG4gKlxuICogW0xpdmUgZGVtb10oaHR0cDovL2Jhc2ljd2ViY29tcG9uZW50cy5vcmcvYmFzaWMtd2ViLWNvbXBvbmVudHMvcGFja2FnZXMvYmFzaWMtbGlzdC1ib3gvKVxuICpcbiAqIFRoZSB1c2VyIGNhbiBzZWxlY3QgYW4gaXRlbSB3aXRoIHRoZSBtb3VzZS90b3VjaCBvciBrZXlib2FyZDogVXAvRG93biwgUGFnZVxuICogVXAvRG93biwgSG9tZS9FbmQuXG4gKlxuICogTGlrZSBvdGhlciBCYXNpYyBXZWIgQ29tcG9uZW50cywgdGhpcyBjYW4gaGFuZGxlIGRpc3RyaWJ1dGVkIGNvbnRlbnQ6IHlvdSBjYW5cbiAqIGluY2x1ZGUgYSBjb250ZW50IGVsZW1lbnQgaW5zaWRlIGEgYmFzaWMtbGlzdC1ib3gsIGFuZCB0aGUgbGlzdCB3aWxsIG5hdmlnYXRlXG4gKiB0aHJvdWdoIHRoZSBkaXN0cmlidXRlZCBjb250ZW50LlxuICpcbiAqIFRoaXMgY29tcG9uZW50IGluY2x1ZGVzIGJhc2ljIEFSSUEgc3VwcG9ydCB0byBwcm92aWRlIGEgcmVhc29uYWJsZSBkZWZhdWx0XG4gKiBleHBlcmllbmNlLCBlLmcuLCBmb3Igc2NyZWVuIHJlYWRlcnMuIFRoZSBsaXN0IGNvbXBvbmVudCBpdHNlbGYgd2lsbCBiZVxuICogYXNzaWduZWQgYW4gYXBwcm9wcmlhdGUgQVJJQSByb2xlIChkZWZhdWx0IGlzIFwibGlzdGJveFwiKS4gVGhlIElEIG9mIHRoZVxuICogc2VsZWN0ZWQgaXRlbSB3aWxsIGJlIHJlZmxlY3RlZCBpbiBhbiBcImFyaWEtYWN0aXZlZGVzY2VuZGFudFwiIGF0dHJpYnV0ZVxuICogYXBwbGllZCB0byB0aGUgbGlzdC4gVG8gc3VwcG9ydCB0aGlzIGZlYXR1cmUsIGFsbCBpdGVtcyBpbiB0aGUgbGlzdCBuZWVkXG4gKiB1bmlxdWUgSURzLiBJZiBhbiBpdGVtIGRvZXMgbm90IGhhdmUgYW4gSUQsIGJhc2ljLWxpc3QtYm94IHdpbGwgYXV0b21hdGljYWxseVxuICogYXNzaWduIGEgZGVmYXVsdCBJRC5cbiAqXG4gKiBUaGUga2V5Ym9hcmQgaW50ZXJhY3Rpb24gbW9kZWwgZ2VuZXJhbGx5IGZvbGxvd3MgdGhhdCBvZiBNaWNyb3NvZnQgV2luZG93cydcbiAqIGxpc3QgYm94ZXMgaW5zdGVhZCBvZiB0aG9zZSBpbiBPUyBYOlxuICpcbiAqICogVGhlIFBhZ2UgVXAvRG93biBhbmQgSG9tZS9FbmQga2V5cyBhY3R1YWxseSBtb3ZlIHRoZSBzZWxlY3Rpb24sIHJhdGhlciB0aGFuXG4gKiAgIGp1c3Qgc2Nyb2xsaW5nIHRoZSBsaXN0LiBUaGUgZm9ybWVyIGJlaGF2aW9yIHNlZW1zIG1vcmUgZ2VuZXJhbGx5IHVzZWZ1bFxuICogICBmb3Iga2V5Ym9hcmQgdXNlcnMuXG4gKlxuICogKiBQcmVzc2luZyBQYWdlIFVwL0Rvd24gd2lsbCBtb3ZlIHRoZSBzZWxlY3Rpb24gdG8gdGhlIHRvcG1vc3QvYm90dG9tbW9zdFxuICogICB2aXNpYmxlIGl0ZW0gaWYgdGhlIHNlbGVjdGlvbiBpcyBub3QgYWxyZWFkeSB0aGVyZS4gVGhlcmVhZnRlciwgdGhlIGtleVxuICogICB3aWxsIG1vdmUgdGhlIHNlbGVjdGlvbiB1cC9kb3duIGJ5IGEgcGFnZSwgYW5kIChwZXIgdGhlIGFib3ZlIHBvaW50KSBtYWtlXG4gKiAgIHRoZSBzZWxlY3RlZCBpdGVtIHZpc2libGUuXG4gKlxuICogUHJvZ3JhbW1hdGljYWxseSBzZWxlY3RpbmcgYW4gaXRlbSAoYnkgc2V0dGluZyB0aGUgc2VsZWN0ZWQgcHJvcGVydHkpIHNjcm9sbHNcbiAqIHRoZSBpdGVtIGludG8gdmlldy5cbiAqXG4gKiBUaGUgdXNlciBjYW4gYWxzbyBzZWxlY3QgYW4gaXRlbSBieSB0eXBpbmcgdGhlIGJlZ2lubmluZyBvZiBhbiBpdGVtJ3MgdGV4dC5cbiAqXG4gKiBAZXh0ZW5kcyBFbGVtZW50QmFzZVxuICogQG1peGVzIENsaWNrU2VsZWN0aW9uTWl4aW5cbiAqIEBtaXhlcyBDb250ZW50SXRlbXNNaXhpblxuICogQG1peGVzIERpcmVjdGlvblNlbGVjdGlvbk1peGluXG4gKiBAbWl4ZXMgRGlzdHJpYnV0ZWRDaGlsZHJlbkNvbnRlbnRNaXhpblxuICogQG1peGVzIEdlbmVyaWNNaXhpblxuICogQG1peGVzIEtleWJvYXJkTWl4aW5cbiAqIEBtaXhlcyBLZXlib2FyZERpcmVjdGlvbk1peGluXG4gKiBAbWl4ZXMgS2V5Ym9hcmRQYWdlZFNlbGVjdGlvbk1peGluXG4gKiBAbWl4ZXMgS2V5Ym9hcmRQcmVmaXhTZWxlY3Rpb25NaXhpblxuICogQG1peGlzIFNlbGVjdGVkSXRlbVRleHRWYWx1ZU1peGluXG4gKiBAbWl4ZXMgU2VsZWN0aW9uQXJpYUFjdGl2ZU1peGluXG4gKiBAbWl4ZXMgU2VsZWN0aW9uSGlnaGxpZ2h0TWl4aW5cbiAqIEBtaXhlcyBTZWxlY3Rpb25JblZpZXdNaXhpblxuICogQG1peGVzIFNpbmdsZVNlbGVjdGlvbk1peGluXG4gKi9cbmNsYXNzIExpc3RCb3ggZXh0ZW5kcyBFbGVtZW50QmFzZS5jb21wb3NlKFxuICBDbGlja1NlbGVjdGlvbk1peGluLFxuICBDb250ZW50SXRlbXNNaXhpbixcbiAgRGlyZWN0aW9uU2VsZWN0aW9uTWl4aW4sXG4gIERpc3RyaWJ1dGVkQ2hpbGRyZW5Db250ZW50TWl4aW4sXG4gIEdlbmVyaWNNaXhpbixcbiAgS2V5Ym9hcmRNaXhpbixcbiAgS2V5Ym9hcmREaXJlY3Rpb25NaXhpbixcbiAgS2V5Ym9hcmRQYWdlZFNlbGVjdGlvbk1peGluLFxuICBLZXlib2FyZFByZWZpeFNlbGVjdGlvbk1peGluLFxuICBTZWxlY3RlZEl0ZW1UZXh0VmFsdWVNaXhpbixcbiAgU2VsZWN0aW9uQXJpYUFjdGl2ZU1peGluLFxuICBTZWxlY3Rpb25IaWdobGlnaHRNaXhpbixcbiAgU2VsZWN0aW9uSW5WaWV3TWl4aW4sXG4gIFNpbmdsZVNlbGVjdGlvbk1peGluXG4pIHtcblxuICBnZXQgW3N5bWJvbHMuZGVmYXVsdHNdKCkge1xuICAgIGNvbnN0IGRlZmF1bHRzID0gc3VwZXJbc3ltYm9scy5kZWZhdWx0c10gfHwge307XG4gICAgZGVmYXVsdHMubmF2aWdhdGlvbkF4aXMgPSAndmVydGljYWwnO1xuICAgIHJldHVybiBkZWZhdWx0cztcbiAgfVxuXG4gIGdldCBzY3JvbGxUYXJnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuJC5pdGVtc0NvbnRhaW5lcjtcbiAgfVxuXG4gIGdldCBbc3ltYm9scy50ZW1wbGF0ZV0oKSB7XG4gICAgY29uc3QgYmFzZVRlbXBsYXRlID0gc3VwZXJbc3ltYm9scy50ZW1wbGF0ZV0gfHwgJyc7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgICB9XG5cbiAgICAgIFt0YXJnZXQ9XCJjaGlsZFwiXSB7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLXdlYmtpdC1mbGV4OiAxO1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgfVxuXG4gICAgICAjaXRlbXNDb250YWluZXIge1xuICAgICAgICAtd2Via2l0LWZsZXg6IDE7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsOyAvKiBmb3IgbW9tZW50dW0gc2Nyb2xsaW5nICovXG4gICAgICB9XG5cbiAgICAgIC8qIEdlbmVyaWNNaXhpbiBhcHBlYXJhbmNlICovXG4gICAgICA6aG9zdChbZ2VuZXJpYz1cIlwiXSkge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtnZW5lcmljPVwiXCJdKSAjaXRlbXNDb250YWluZXIgOjpzbG90dGVkKCopIHtcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICBwYWRkaW5nOiAwLjI1ZW07XG4gICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGlkPVwiaXRlbXNDb250YWluZXJcIiByb2xlPVwibm9uZVwiPlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICA8L2Rpdj5cbiAgICAgICR7YmFzZVRlbXBsYXRlfVxuICAgIGA7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgd2hlbiB0aGUgbGlzdCdzIHZhbHVlIHByb3BlcnR5IGNoYW5nZXMuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBMaXN0Qm94XG4gICAqIEBldmVudCB2YWx1ZS1jaGFuZ2VkXG4gICAqL1xufVxuXG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYmFzaWMtbGlzdC1ib3gnLCBMaXN0Qm94KTtcbmV4cG9ydCBkZWZhdWx0IExpc3RCb3g7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHRyYW5zcGlsZWQgdG8gY3JlYXRlIGFuIEVTNS1jb21wYXRpYmxlIGRpc3RyaWJ1dGlvbiBpbiB3aGljaFxuICogdGhlIHBhY2thZ2UncyBtYWluIGZlYXR1cmUocykgYXJlIGF2YWlsYWJsZSB2aWEgdGhlIHdpbmRvdy5CYXNpYyBnbG9iYWwuXG4gKiBJZiB5b3UncmUgYWxyZWFkeSB1c2luZyBFUzYgeW91cnNlbGYsIGlnbm9yZSB0aGlzIGZpbGUsIGFuZCBpbnN0ZWFkIGltcG9ydFxuICogdGhlIHNvdXJjZSBmaWxlKHMpIHlvdSB3YW50IGZyb20gdGhlIHNyYyBmb2xkZXIuXG4gKi9cblxuaW1wb3J0IE1vZGVzIGZyb20gJy4vc3JjL01vZGVzJztcblxud2luZG93LkJhc2ljID0gd2luZG93LkJhc2ljIHx8IHt9O1xud2luZG93LkJhc2ljLk1vZGVzID0gTW9kZXM7XG4iLCJpbXBvcnQgRWxlbWVudEJhc2UgZnJvbSAnLi4vLi4vYmFzaWMtZWxlbWVudC1iYXNlL3NyYy9FbGVtZW50QmFzZSc7XG5pbXBvcnQgRGlzdHJpYnV0ZWRDaGlsZHJlbkNvbnRlbnRNaXhpbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXN0cmlidXRlZENoaWxkcmVuQ29udGVudE1peGluJztcbmltcG9ydCBDb250ZW50SXRlbXNNaXhpbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Db250ZW50SXRlbXNNaXhpbic7XG5pbXBvcnQgU2luZ2xlU2VsZWN0aW9uTWl4aW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2luZ2xlU2VsZWN0aW9uTWl4aW4nO1xuaW1wb3J0IHN5bWJvbHMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvc3ltYm9scyc7XG5cbmNvbnN0IGJhc2UgPSBFbGVtZW50QmFzZS5jb21wb3NlKFxuICBDb250ZW50SXRlbXNNaXhpbixcbiAgRGlzdHJpYnV0ZWRDaGlsZHJlbkNvbnRlbnRNaXhpbixcbiAgU2luZ2xlU2VsZWN0aW9uTWl4aW5cbik7XG5cblxuLyoqXG4gKiBTaG93cyBleGFjdGx5IG9uZSBjaGlsZCBlbGVtZW50IGF0IGEgdGltZS4gVGhpcyBjYW4gYmUgdXNlZnVsLCBmb3IgZXhhbXBsZSxcbiAqIGlmIGEgZ2l2ZW4gVUkgZWxlbWVudCBoYXMgbXVsdGlwbGUgbW9kZXMgdGhhdCBwcmVzZW50IHN1YnN0YW50aWFsbHkgZGlmZmVyZW50XG4gKiBlbGVtZW50cy5cbiAqXG4gKiBUaGUgdHJhbnNpdGlvbiBiZXR3ZWVuIGNoaWxkIGVsZW1lbnRzIGlzIGluc3RhbnRlbm91cy4gSWYgeW91J2QgbGlrZSB0aGVcbiAqIHRyYW5zaXRpb24gdG8gYmUgYWNjb21wYW5pZWQgYnkgdmlzaWJsZSBhbmltYXRlZCBlZmZlY3RzLCBzZWVcbiAqIFtiYXNpYy1hbmltYXRpb24tc3RhZ2VdKC4uL2Jhc2ljLWFuaW1hdGlvbi1zdGFnZSkuXG4gKlxuICogVGhpcyBjb21wb25lbnQgZG9lc24ndCBwcm92aWRlIGFueSBVSSBmb3IgY2hhbmdpbmcgd2hpY2ggbW9kZSBpcyBzaG93bi5cbiAqXG4gKiBAZXh0ZW5kcyBFbGVtZW50QmFzZVxuICogQG1peGVzIENvbnRlbnRJdGVtc01peGluXG4gKiBAbWl4ZXMgRGlzdHJpYnV0ZWRDaGlsZHJlbkNvbnRlbnRNaXhpblxuICogQG1peGVzIFNpbmdsZVNlbGVjdGlvbk1peGluXG4gKi9cbmNsYXNzIE1vZGVzIGV4dGVuZHMgYmFzZSB7XG5cbiAgZ2V0IFtzeW1ib2xzLmRlZmF1bHRzXSgpIHtcbiAgICBjb25zdCBkZWZhdWx0cyA9IHN1cGVyW3N5bWJvbHMuZGVmYXVsdHNdIHx8IHt9O1xuICAgIGRlZmF1bHRzLnNlbGVjdGlvblJlcXVpcmVkID0gdHJ1ZTtcbiAgICByZXR1cm4gZGVmYXVsdHM7XG4gIH1cblxuICBbc3ltYm9scy5pdGVtU2VsZWN0ZWRdKGl0ZW0sIHNlbGVjdGVkKSB7XG4gICAgaWYgKHN1cGVyW3N5bWJvbHMuaXRlbVNlbGVjdGVkXSkgeyBzdXBlcltzeW1ib2xzLml0ZW1TZWxlY3RlZF0oaXRlbSwgc2VsZWN0ZWQpOyB9XG4gICAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gc2VsZWN0ZWQgPyAnJyA6ICdub25lJztcbiAgICBpdGVtLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAhc2VsZWN0ZWQpO1xuICB9XG5cbiAgZ2V0IFtzeW1ib2xzLnRlbXBsYXRlXSgpIHtcbiAgICByZXR1cm4gYDxzbG90Pjwvc2xvdD5gO1xuICB9XG5cbn1cblxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2Jhc2ljLW1vZGVzJywgTW9kZXMpO1xuZXhwb3J0IGRlZmF1bHQgTW9kZXM7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHRyYW5zcGlsZWQgdG8gY3JlYXRlIGFuIEVTNS1jb21wYXRpYmxlIGRpc3RyaWJ1dGlvbiBpbiB3aGljaFxuICogdGhlIHBhY2thZ2UncyBtYWluIGZlYXR1cmUocykgYXJlIGF2YWlsYWJsZSB2aWEgdGhlIHdpbmRvdy5CYXNpYyBnbG9iYWwuXG4gKiBJZiB5b3UncmUgYWxyZWFkeSB1c2luZyBFUzYgeW91cnNlbGYsIGlnbm9yZSB0aGlzIGZpbGUsIGFuZCBpbnN0ZWFkIGltcG9ydFxuICogdGhlIHNvdXJjZSBmaWxlKHMpIHlvdSB3YW50IGZyb20gdGhlIHNyYyBmb2xkZXIuXG4gKi9cblxuaW1wb3J0IFNsaWRlc2hvd1dpdGhDb250cm9scyBmcm9tICcuL3NyYy9TbGlkZXNob3dXaXRoQ29udHJvbHMnO1xuXG53aW5kb3cuQmFzaWMgPSB3aW5kb3cuQmFzaWMgfHwge307XG53aW5kb3cuQmFzaWMuU2xpZGVzaG93V2l0aENvbnRyb2xzID0gU2xpZGVzaG93V2l0aENvbnRyb2xzO1xuIiwiaW1wb3J0IFNsaWRlc2hvdyBmcm9tICcuLi8uLi9iYXNpYy1zbGlkZXNob3cvc3JjL1NsaWRlc2hvdyc7XG5pbXBvcnQgUGxheUNvbnRyb2xzTWl4aW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvUGxheUNvbnRyb2xzTWl4aW4nO1xuXG4vKipcbiAqIEFuIGV4dGVuc2lvbiBvZlxuICogW2Jhc2ljLXNsaWRlc2hvd10oLi4vYmFzaWMtc2xpZGVzaG93KSB0aGF0IGFkZHMgcGxheSBjb250cm9sc1xuICogdmlhIFtQbGF5Q29udHJvbHNNaXhpbl0oLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9kb2NzL1BsYXlDb250cm9sc01peGluLm1kKS5cbiAqXG4gKiBAZXh0ZW5kcyBTbGlkZXNob3dcbiAqIEBtaXhlcyBQbGF5Q29udHJvbHNNaXhpblxuICovXG5jbGFzcyBTbGlkZXNob3dXaXRoQ29udHJvbHMgZXh0ZW5kcyBQbGF5Q29udHJvbHNNaXhpbihTbGlkZXNob3cpIHt9XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2Jhc2ljLXNsaWRlc2hvdy13aXRoLWNvbnRyb2xzJywgU2xpZGVzaG93V2l0aENvbnRyb2xzKTtcblxuZXhwb3J0IGRlZmF1bHQgU2xpZGVzaG93V2l0aENvbnRyb2xzO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyB0cmFuc3BpbGVkIHRvIGNyZWF0ZSBhbiBFUzUtY29tcGF0aWJsZSBkaXN0cmlidXRpb24gaW4gd2hpY2hcbiAqIHRoZSBwYWNrYWdlJ3MgbWFpbiBmZWF0dXJlKHMpIGFyZSBhdmFpbGFibGUgdmlhIHRoZSB3aW5kb3cuQmFzaWMgZ2xvYmFsLlxuICogSWYgeW91J3JlIGFscmVhZHkgdXNpbmcgRVM2IHlvdXJzZWxmLCBpZ25vcmUgdGhpcyBmaWxlLCBhbmQgaW5zdGVhZCBpbXBvcnRcbiAqIHRoZSBzb3VyY2UgZmlsZShzKSB5b3Ugd2FudCBmcm9tIHRoZSBzcmMgZm9sZGVyLlxuICovXG5cbmltcG9ydCBTbGlkZXNob3cgZnJvbSAnLi9zcmMvU2xpZGVzaG93Jztcblxud2luZG93LkJhc2ljID0gd2luZG93LkJhc2ljIHx8IHt9O1xud2luZG93LkJhc2ljLlNsaWRlc2hvdyA9IFNsaWRlc2hvdztcbiIsImltcG9ydCBFbGVtZW50QmFzZSBmcm9tICcuLi8uLi9iYXNpYy1lbGVtZW50LWJhc2Uvc3JjL0VsZW1lbnRCYXNlJztcbmltcG9ydCBDb250ZW50SXRlbXNNaXhpbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Db250ZW50SXRlbXNNaXhpbic7XG5pbXBvcnQgRGlzdHJpYnV0ZWRDaGlsZHJlbkNvbnRlbnRNaXhpbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXN0cmlidXRlZENoaWxkcmVuQ29udGVudE1peGluJztcbmltcG9ydCBGcmFjdGlvbmFsU2VsZWN0aW9uTWl4aW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRnJhY3Rpb25hbFNlbGVjdGlvbk1peGluJztcbmltcG9ydCBTZWxlY3Rpb25BbmltYXRpb25NaXhpbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TZWxlY3Rpb25BbmltYXRpb25NaXhpbic7XG5pbXBvcnQgU2VsZWN0aW9uQXJpYUFjdGl2ZU1peGluIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NlbGVjdGlvbkFyaWFBY3RpdmVNaXhpbic7XG5pbXBvcnQgU2luZ2xlU2VsZWN0aW9uTWl4aW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2luZ2xlU2VsZWN0aW9uTWl4aW4nO1xuaW1wb3J0IHN5bWJvbHMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvc3ltYm9scyc7XG5pbXBvcnQgVGltZXJTZWxlY3Rpb25NaXhpbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9UaW1lclNlbGVjdGlvbk1peGluJztcblxuXG5jb25zdCBiYXNlID0gRWxlbWVudEJhc2UuY29tcG9zZShcbiAgQ29udGVudEl0ZW1zTWl4aW4sXG4gIERpc3RyaWJ1dGVkQ2hpbGRyZW5Db250ZW50TWl4aW4sXG4gIEZyYWN0aW9uYWxTZWxlY3Rpb25NaXhpbixcbiAgU2VsZWN0aW9uQW5pbWF0aW9uTWl4aW4sXG4gIFNlbGVjdGlvbkFyaWFBY3RpdmVNaXhpbixcbiAgU2luZ2xlU2VsZWN0aW9uTWl4aW4sXG4gIFRpbWVyU2VsZWN0aW9uTWl4aW5cbik7XG5cblxuLyoqXG4gKiBTbGlkZXNob3cgd2l0aCBhbmltYXRlZCB0cmFuc2l0aW9ucy5cbiAqXG4gKiBCeSBkZWZhdWx0IHRoZSBzbGlkZXNob3cgd2lsbCBpbW1lZGlhdGVseSBiZWdpbiBwbGF5aW5nIHdoZW4gaXQgaXMgY29ubmVjdGVkXG4gKiB0byB0aGUgZG9jdW1lbnQsIGFkdmFuY2UgZXZlcnkgMzAwMCBtcyAoMyBzZWNvbmRzKSwgYW5kIHVzZSBhIHNpbXBsZVxuICogY3Jvc3NmYWRlIGVmZmVjdC5cbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBjYW4gYmUgdXNlZCBvbiBpdHMgb3duLiBUbyBpbmNvcnBvcmF0ZSBzbGlkZXNob3cgYmVoYXZpb3IgaW50b1xuICogYSBjb21wb25lbnQgb2YgeW91ciBvd24sIGFwcGx5IHRoZVxuICogW1RpbWVyU2VsZWN0aW9uTWl4aW5dKC4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvZG9jcy9UaW1lclNlbGVjdGlvbk1peGluLm1kKS5cbiAqXG4gKiBAZXh0ZW5kcyBFbGVtZW50QmFzZVxuICogQG1peGVzIENvbnRlbnRJdGVtc01peGluXG4gKiBAbWl4ZXMgRGlzdHJpYnV0ZWRDaGlsZHJlbkNvbnRlbnRNaXhpblxuICogQG1peGVzIEZyYWN0aW9uYWxTZWxlY3Rpb25NaXhpblxuICogQG1peGVzIFNlbGVjdGlvbkFuaW1hdGlvbk1peGluXG4gKiBAbWl4ZXMgU2VsZWN0aW9uQXJpYUFjdGl2ZU1peGluXG4gKiBAbWl4ZXMgU2luZ2xlU2VsZWN0aW9uTWl4aW5cbiAqIEBtaXhlcyBUaW1lclNlbGVjdGlvbk1peGluXG4gKi9cbmNsYXNzIFNsaWRlc2hvdyBleHRlbmRzIGJhc2Uge1xuXG4gIGdldCBbc3ltYm9scy5kZWZhdWx0c10oKSB7XG4gICAgY29uc3QgZGVmYXVsdHMgPSBzdXBlcltzeW1ib2xzLmRlZmF1bHRzXSB8fCB7fTtcbiAgICBkZWZhdWx0cy5wbGF5aW5nID0gdHJ1ZTtcbiAgICBkZWZhdWx0cy5zZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvbiA9IDUwMDtcbiAgICBkZWZhdWx0cy5zZWxlY3Rpb25BbmltYXRpb25FZmZlY3QgPSAnY3Jvc3NmYWRlJztcbiAgICBkZWZhdWx0cy5zZWxlY3Rpb25SZXF1aXJlZCA9IHRydWU7XG4gICAgZGVmYXVsdHMuc2VsZWN0aW9uVGltZXJEdXJhdGlvbiA9IDMwMDA7XG4gICAgZGVmYXVsdHMuc2VsZWN0aW9uV3JhcHMgPSB0cnVlO1xuICAgIHJldHVybiBkZWZhdWx0cztcbiAgfVxuXG4gIGdldCBbc3ltYm9scy50ZW1wbGF0ZV0oKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgICNjb250YWluZXIgOjpzbG90dGVkKCopIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBpZD1cImNvbnRhaW5lclwiIHJvbGU9XCJub25lXCI+XG4gICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxufVxuXG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYmFzaWMtc2xpZGVzaG93JywgU2xpZGVzaG93KTtcbmV4cG9ydCBkZWZhdWx0IFNsaWRlc2hvdztcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgdHJhbnNwaWxlZCB0byBjcmVhdGUgYW4gRVM1LWNvbXBhdGlibGUgZGlzdHJpYnV0aW9uIGluIHdoaWNoXG4gKiB0aGUgcGFja2FnZSdzIG1haW4gZmVhdHVyZShzKSBhcmUgYXZhaWxhYmxlIHZpYSB0aGUgd2luZG93LkJhc2ljIGdsb2JhbC5cbiAqIElmIHlvdSdyZSBhbHJlYWR5IHVzaW5nIEVTNiB5b3Vyc2VsZiwgaWdub3JlIHRoaXMgZmlsZSwgYW5kIGluc3RlYWQgaW1wb3J0XG4gKiB0aGUgc291cmNlIGZpbGUocykgeW91IHdhbnQgZnJvbSB0aGUgc3JjIGZvbGRlci5cbiAqL1xuXG5pbXBvcnQgU2xpZGluZ0Nhcm91c2VsIGZyb20gJy4vc3JjL1NsaWRpbmdDYXJvdXNlbCc7XG5cbndpbmRvdy5CYXNpYyA9IHdpbmRvdy5CYXNpYyB8fCB7fTtcbndpbmRvdy5CYXNpYy5TbGlkaW5nQ2Fyb3VzZWwgPSBTbGlkaW5nQ2Fyb3VzZWw7XG4iLCJpbXBvcnQgRWxlbWVudEJhc2UgZnJvbSAnLi4vLi4vYmFzaWMtZWxlbWVudC1iYXNlL3NyYy9FbGVtZW50QmFzZSc7XG5pbXBvcnQgQ29udGVudEl0ZW1zTWl4aW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ29udGVudEl0ZW1zTWl4aW4nO1xuaW1wb3J0IERpcmVjdGlvblNlbGVjdGlvbk1peGluIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0RpcmVjdGlvblNlbGVjdGlvbk1peGluJztcbmltcG9ydCBEaXN0cmlidXRlZENoaWxkcmVuQ29udGVudE1peGluIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW5Db250ZW50TWl4aW4nO1xuaW1wb3J0IEZyYWN0aW9uYWxTZWxlY3Rpb25NaXhpbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9GcmFjdGlvbmFsU2VsZWN0aW9uTWl4aW4nO1xuaW1wb3J0IEtleWJvYXJkTWl4aW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvS2V5Ym9hcmRNaXhpbic7XG5pbXBvcnQgS2V5Ym9hcmREaXJlY3Rpb25NaXhpbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9LZXlib2FyZERpcmVjdGlvbk1peGluJztcbmltcG9ydCBTZWxlY3Rpb25BcmlhQWN0aXZlTWl4aW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2VsZWN0aW9uQXJpYUFjdGl2ZU1peGluJztcbmltcG9ydCBTaW5nbGVTZWxlY3Rpb25NaXhpbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TaW5nbGVTZWxlY3Rpb25NaXhpbic7XG5pbXBvcnQgU2xpZGluZ1ZpZXdwb3J0IGZyb20gJy4uLy4uL2Jhc2ljLXNsaWRpbmctdmlld3BvcnQvc3JjL1NsaWRpbmdWaWV3cG9ydCc7IC8vIGpzaGludCBpZ25vcmU6bGluZVxuaW1wb3J0IFN3aXBlRGlyZWN0aW9uTWl4aW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU3dpcGVEaXJlY3Rpb25NaXhpbic7XG5pbXBvcnQgc3ltYm9scyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9zeW1ib2xzJztcbmltcG9ydCBUcmFja3BhZERpcmVjdGlvbk1peGluIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1RyYWNrcGFkRGlyZWN0aW9uTWl4aW4nO1xuXG5jb25zdCBiYXNlID0gRWxlbWVudEJhc2UuY29tcG9zZShcbiAgQ29udGVudEl0ZW1zTWl4aW4sXG4gIERpcmVjdGlvblNlbGVjdGlvbk1peGluLFxuICBEaXN0cmlidXRlZENoaWxkcmVuQ29udGVudE1peGluLFxuICBGcmFjdGlvbmFsU2VsZWN0aW9uTWl4aW4sXG4gIEtleWJvYXJkTWl4aW4sXG4gIEtleWJvYXJkRGlyZWN0aW9uTWl4aW4sXG4gIFNlbGVjdGlvbkFyaWFBY3RpdmVNaXhpbixcbiAgU2luZ2xlU2VsZWN0aW9uTWl4aW4sXG4gIFN3aXBlRGlyZWN0aW9uTWl4aW4sXG4gIFRyYWNrcGFkRGlyZWN0aW9uTWl4aW5cbik7XG5cblxuLyoqXG4gKiBMZXRzIHRoZSB1c2VyIG5hdmlnYXRlIGxhdGVyYWxseSB0aHJvdWdoIGEgc2VxdWVuY2Ugb2YgY2hpbGQgZWxlbWVudHMuXG4gKlxuICogW0xpdmUgZGVtb10oaHR0cDovL2Jhc2ljd2ViY29tcG9uZW50cy5vcmcvYmFzaWMtd2ViLWNvbXBvbmVudHMvcGFja2FnZXMvYmFzaWMtY2Fyb3VzZWwvKVxuICpcbiAqIGJhc2ljLXNsaWRpbmctY2Fyb3VzZWwgaXMgYW4gaW1wbGVtZW50YXRpb24gb2YgdGhlIGNhcm91c2VsIHVzZXIgaW50ZXJmYWNlIHBhdHRlcm4sXG4gKiBjb21tb25seSB1c2VkIGZvciBuYXZpZ2F0aW5nIGJldHdlZW4gaW1hZ2VzLCBwYWdlcywgYW5kIG90aGVyIGVsZW1lbnRzLiBUaGlzXG4gKiBwYXR0ZXJuIHByZXNlbnRzIHRoZSB1c2VyIHdpdGggYSBsaW5lYXIgc2VxdWVuY2Ugb2YgZWxlbWVudHMsIG9ubHkgb25lIG9mXG4gKiB3aGljaCBpcyBzaG93biBhdCBhIHRpbWUuIFRoZSB1c2VyIGNhbiBuYXZpZ2F0ZSB0byB0aGUgbmV4dC9wcmV2aW91cyBlbGVtZW50XG4gKiB3aXRoIGEgdmFyaWV0eSBvZiBpbnB1dCBtZXRob2RzLlxuICpcbiAqIGJhc2ljLXNsaWRpbmctY2Fyb3VzZWwgaXMgYSBzaW1wbGVyIHZhcmlhdGlvbiBvZiB0aGUgbW9yZSBzb3BoaXN0aWNhdGVkXG4gKiBbYmFzaWMtY2Fyb3VzZWxdKC4uL2Jhc2ljLWNhcm91c2VsKSBjb21wb25lbnQuIFRoZSBsYXR0ZXIgaW5jbHVkZXMgc3VwcG9ydFxuICogZm9yIF93cmFwcGluZ18gKGdvaW5nIGZvcndhcmQgZnJvbSB0aGUgbGFzdCBpdGVtIHRvIHRoZSBmaXJzdCwgYW5kIHZpY2UgdmVyc2EpLFxuICogYW5kIG1vcmUgY29tcGxleCB2aXN1YWwgdHJhbnNpdGlvbnMuIFRob3NlIHRyYW5zaXRpb25zIGVudGFpbCB1c2Ugb2YgdGhlXG4gKiBXZWIgQW5pbWF0aW9uIEFQSSwgd2hpY2ggcmVxdWlyZXMgYSBwb2x5ZmlsbCBpbiBvbGRlciBicm93c2Vycy4gSGVuY2UsIHRoZVxuICogc2ltcGxlciBiYXNpYy1zbGlkaW5nLWNhcm91c2VsIG1heSBiZSBhIG1vcmUgYXBwcm9wcmlhdGUgY2hvaWNlIGlmIGZhY3RvcnNcbiAqIHN1Y2ggYXMgZG93bmxvYWQgc2l6ZSBhcmUgY3JpdGljYWwuXG4gKlxuICogQmV5b25kIHRob3NlIGRpZmZlcmVuY2VzLCBiYXNpYy1zbGlkaW5nLWNhcm91c2VsIG9mZmVycyB0aGUgc2FtZSBBUEksIHVzYWdlXG4gKiByZWNvbW1lbmRhdGlvbnMsIGFuZCBzdXBwb3J0IGZvciBrZXlib2FyZC90b3VjaC9tb3VzZSBhbmQgYXNzaXN0aXZlIGRldmljZXMuXG4gKiBTZWUgdGhhdCBjb21wb25lbnQgZm9yIG1vcmUgZGV0YWlscyBvbiB1c2UuXG4gKlxuICogQGV4dGVuZHMgRWxlbWVudEJhc2VcbiAqIEBtaXhlcyBDb250ZW50SXRlbXNNaXhpblxuICogQG1peGVzIERpcmVjdGlvblNlbGVjdGlvbk1peGluXG4gKiBAbWl4ZXMgRGlzdHJpYnV0ZWRDaGlsZHJlbkNvbnRlbnRNaXhpblxuICogQG1peGVzIEdlbmVyaWNNaXhpblxuICogQG1peGVzIEtleWJvYXJkTWl4aW5cbiAqIEBtaXhlcyBLZXlib2FyZERpcmVjdGlvbk1peGluXG4gKiBAbWl4ZXMgU2VsZWN0aW9uQXJpYUFjdGl2ZU1peGluXG4gKiBAbWl4ZXMgU2luZ2xlU2VsZWN0aW9uTWl4aW5cbiAqIEBtaXhlcyBTd2lwZURpcmVjdGlvbk1peGluXG4gKiBAbWl4ZXMgVHJhY2twYWREaXJlY3Rpb25NaXhpblxuICovXG5jbGFzcyBTbGlkaW5nQ2Fyb3VzZWwgZXh0ZW5kcyBiYXNlIHtcblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBpZiAoc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2spIHsgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTsgfVxuICAgIC8vIEhBQ0tcbiAgICB0aGlzW3N5bWJvbHMuaXRlbXNDaGFuZ2VkXSgpO1xuICB9XG5cbiAgZ2V0IFtzeW1ib2xzLmRlZmF1bHRzXSgpIHtcbiAgICBjb25zdCBkZWZhdWx0cyA9IHN1cGVyW3N5bWJvbHMuZGVmYXVsdHNdIHx8IHt9O1xuICAgIGRlZmF1bHRzLm5hdmlnYXRpb25BeGlzID0gJ2hvcml6b250YWwnO1xuICAgIGRlZmF1bHRzLnNlbGVjdGlvblJlcXVpcmVkID0gdHJ1ZTtcbiAgICByZXR1cm4gZGVmYXVsdHM7XG4gIH1cblxuICAvKlxuICAgKiBEdXJpbmcgZHJhZ3MsIGRvbid0IHNob3cgQ1NTIHRyYW5zaXRpb25zLlxuICAgKi9cbiAgZ2V0IFtzeW1ib2xzLmRyYWdnaW5nXSgpIHtcbiAgICByZXR1cm4gIXRoaXMuJC52aWV3cG9ydC5zaG93VHJhbnNpdGlvbjtcbiAgfVxuICBzZXQgW3N5bWJvbHMuZHJhZ2dpbmddKHZhbHVlKSB7XG4gICAgaWYgKHN5bWJvbHMuZHJhZ2dpbmcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXJbc3ltYm9scy5kcmFnZ2luZ10gPSB2YWx1ZTsgfVxuICAgIHRoaXMuJC52aWV3cG9ydC5zaG93VHJhbnNpdGlvbiA9ICF2YWx1ZTtcbiAgfVxuXG4gIGdldCBzZWxlY3RlZEZyYWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiQudmlld3BvcnQuc2VsZWN0ZWRGcmFjdGlvbjtcbiAgfVxuICBzZXQgc2VsZWN0ZWRGcmFjdGlvbih2YWx1ZSkge1xuICAgIGlmICgnc2VsZWN0ZWRGcmFjdGlvbicgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRGcmFjdGlvbiA9IHZhbHVlOyB9XG4gICAgdGhpcy4kLnZpZXdwb3J0LnNlbGVjdGVkRnJhY3Rpb24gPSB2YWx1ZTtcbiAgICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnc2VsZWN0ZWQtZnJhY3Rpb24tY2hhbmdlZCcpO1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gIH1cblxuICBnZXQgc2VsZWN0ZWRJbmRleCgpIHtcbiAgICByZXR1cm4gc3VwZXIuc2VsZWN0ZWRJbmRleDtcbiAgfVxuICBzZXQgc2VsZWN0ZWRJbmRleCh2YWx1ZSkge1xuICAgIGlmICgnc2VsZWN0ZWRJbmRleCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJbmRleCA9IHZhbHVlOyB9XG4gICAgdGhpcy4kLnZpZXdwb3J0LnNlbGVjdGVkSW5kZXggPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBzZWxlY3RlZEl0ZW0oKSB7XG4gICAgcmV0dXJuIHN1cGVyLnNlbGVjdGVkSXRlbTtcbiAgfVxuICBzZXQgc2VsZWN0ZWRJdGVtKGl0ZW0pIHtcbiAgICBpZiAoJ3NlbGVjdGVkSXRlbScgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJdGVtID0gaXRlbTsgfVxuICAgIHRoaXMuJC52aWV3cG9ydC5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xuICB9XG5cbiAgZ2V0IFtzeW1ib2xzLnRlbXBsYXRlXSgpIHtcbiAgICByZXR1cm4gYFxuICAgICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB9XG5cbiAgICAgIGJhc2ljLXNsaWRpbmctdmlld3BvcnQge1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC13ZWJraXQtZmxleDogMTtcbiAgICAgICAgZmxleDogMTtcbiAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxiYXNpYy1zbGlkaW5nLXZpZXdwb3J0IGlkPVwidmlld3BvcnRcIiByb2xlPVwibm9uZVwiPlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICA8L2Jhc2ljLXNsaWRpbmctdmlld3BvcnQ+XG4gICAgYDtcbiAgfVxufVxuXG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYmFzaWMtc2xpZGluZy1jYXJvdXNlbCcsIFNsaWRpbmdDYXJvdXNlbCk7XG5leHBvcnQgZGVmYXVsdCBTbGlkaW5nQ2Fyb3VzZWw7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHRyYW5zcGlsZWQgdG8gY3JlYXRlIGFuIEVTNS1jb21wYXRpYmxlIGRpc3RyaWJ1dGlvbiBpbiB3aGljaFxuICogdGhlIHBhY2thZ2UncyBtYWluIGZlYXR1cmUocykgYXJlIGF2YWlsYWJsZSB2aWEgdGhlIHdpbmRvdy5CYXNpYyBnbG9iYWwuXG4gKiBJZiB5b3UncmUgYWxyZWFkeSB1c2luZyBFUzYgeW91cnNlbGYsIGlnbm9yZSB0aGlzIGZpbGUsIGFuZCBpbnN0ZWFkIGltcG9ydFxuICogdGhlIHNvdXJjZSBmaWxlKHMpIHlvdSB3YW50IGZyb20gdGhlIHNyYyBmb2xkZXIuXG4gKi9cblxuaW1wb3J0IFNsaWRpbmdWaWV3cG9ydCBmcm9tICcuL3NyYy9TbGlkaW5nVmlld3BvcnQnO1xuXG53aW5kb3cuQmFzaWMgPSB3aW5kb3cuQmFzaWMgfHwge307XG53aW5kb3cuQmFzaWMuU2xpZGluZ1ZpZXdwb3J0ID0gU2xpZGluZ1ZpZXdwb3J0O1xuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9jcmVhdGVTeW1ib2wnO1xuaW1wb3J0IEVsZW1lbnRCYXNlIGZyb20gJy4uLy4uL2Jhc2ljLWVsZW1lbnQtYmFzZS9zcmMvRWxlbWVudEJhc2UnO1xuaW1wb3J0IEZyYWN0aW9uYWxTZWxlY3Rpb25NaXhpbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9GcmFjdGlvbmFsU2VsZWN0aW9uTWl4aW4nO1xuaW1wb3J0IFNwcmVhZEl0ZW1zIGZyb20gJy4uLy4uL2Jhc2ljLXNwcmVhZC1pdGVtcy9zcmMvU3ByZWFkSXRlbXMnOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcbmltcG9ydCBzeW1ib2xzIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL3N5bWJvbHMnO1xuXG5cbi8vIFN5bWJvbHMgZm9yIHByaXZhdGUgZGF0YSBtZW1iZXJzIG9uIGFuIGVsZW1lbnQuXG5jb25zdCBzZWxlY3RlZEl0ZW1TeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3NlbGVjdGVkSXRlbScpO1xuXG5cbmNvbnN0IGJhc2UgPSBFbGVtZW50QmFzZS5jb21wb3NlKFxuICBGcmFjdGlvbmFsU2VsZWN0aW9uTWl4aW5cbik7XG5cblxuLyoqXG4gKiBQcmVzZW50cyBsaXN0IGl0ZW1zIGluIGEgdmlld3BvcnQgc3VjaCB0aGF0IG9ubHkgYSBzaW5nbGUgaXRlbSBpcyB2aXNpYmxlIGF0XG4gKiBhIHRpbWUuXG4gKlxuICogTmF2aWdhdGluZyBiZXR3ZWVuIGl0ZW1zIHdpbGwgYmUgcmVwcmVzZW50ZWQgd2l0aCBhIGhvcml6b250YWwgdmlzdWFsXG4gKiBzbGlkaW5nIGVmZmVjdC4gRm9yIG1vcmUgY29tcGxleCB2aXN1YWwgZWZmZWN0cywgc2VlXG4gKiBbYmFzaWMtYW5pbWF0aW9uLXN0YWdlXSguLi9iYXNpYy1hbmltYXRpb24tc3RhZ2UpLCB3aGljaCB0YWtlcyBhZHZhbnRhZ2Ugb2ZcbiAqIHRoZSBXZWIgQW5pbWF0aW9ucyBBUEkuXG4gKlxuICogVGhpcyBjb21wb25lbnQgaGFuZGxlcyB0aGUgcmVuZGVyaW5nIHJlc3BvbnNpYmlsaXRpZXMgZm9yIHRoZSBiYXNpYy1jYXJvdXNlbFxuICogY29tcG9uZW50LlxuICpcbiAqIFRoaXMgY29tcG9uZW50IGN1cnJlbnRseSByZXF1aXJlcyB0aGF0IHlvdSBleHBsaWNpdGx5IGFwcGx5IGEgc2l6ZSB0byBpdC5cbiAqXG4gKiBAZXh0ZW5kcyBFbGVtZW50QmFzZVxuICovXG5jbGFzcyBTbGlkaW5nVmlld3BvcnQgZXh0ZW5kcyBiYXNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc2VsZWN0ZWRGcmFjdGlvbiA9IDA7XG4gICAgdGhpcy5zaG93VHJhbnNpdGlvbiA9IHRydWU7XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBpZiAoc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2spIHsgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTsgfVxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBnZXQgY29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy4kLnNsaWRpbmdDb250YWluZXIuY29udGVudDtcbiAgfVxuXG4gIGdldCBpdGVtcygpIHtcbiAgICByZXR1cm4gdGhpcy4kLnNsaWRpbmdDb250YWluZXIuaXRlbXM7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHN1cGVyLnJlbmRlcikgeyBzdXBlci5yZW5kZXIoKTsgfVxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXJTZWxlY3Rpb24uYmluZCh0aGlzKSk7XG4gIH1cblxuICBnZXQgc2VsZWN0ZWRGcmFjdGlvbigpIHtcbiAgICByZXR1cm4gc3VwZXIuc2VsZWN0ZWRGcmFjdGlvbjtcbiAgfVxuICBzZXQgc2VsZWN0ZWRGcmFjdGlvbih2YWx1ZSkge1xuICAgIGlmICgnc2VsZWN0ZWRGcmFjdGlvbicgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRGcmFjdGlvbiA9IHZhbHVlOyB9XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIGdldCBzZWxlY3RlZEluZGV4KCkge1xuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5pdGVtcztcbiAgICBjb25zdCBzZWxlY3RlZEl0ZW0gPSB0aGlzLnNlbGVjdGVkSXRlbTtcbiAgICByZXR1cm4gaXRlbXMgJiYgc2VsZWN0ZWRJdGVtID9cbiAgICAgIGl0ZW1zLmluZGV4T2Yoc2VsZWN0ZWRJdGVtKSA6XG4gICAgICAtMTtcbiAgfVxuICBzZXQgc2VsZWN0ZWRJbmRleChpbmRleCkge1xuICAgIGlmICgnc2VsZWN0ZWRJbmRleCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJbmRleCA9IGluZGV4OyB9XG4gICAgY29uc3QgaXRlbSA9IHRoaXMuaXRlbXMgJiYgdGhpcy5pdGVtc1tpbmRleF07XG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gaXRlbTtcbiAgICB9XG4gIH1cblxuICBnZXQgc2VsZWN0ZWRJdGVtKCkge1xuICAgIHJldHVybiB0aGlzW3NlbGVjdGVkSXRlbVN5bWJvbF07XG4gIH1cbiAgc2V0IHNlbGVjdGVkSXRlbShpdGVtKSB7XG4gICAgaWYgKCdzZWxlY3RlZEl0ZW0nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkSXRlbSA9IGl0ZW07IH1cbiAgICB0aGlzW3NlbGVjdGVkSXRlbVN5bWJvbF0gPSBpdGVtO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBnZXQgc2hvd1RyYW5zaXRpb24oKSB7XG4gICAgcmV0dXJuIHN1cGVyLnNob3dUcmFuc2l0aW9uIHx8IHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93VHJhbnNpdGlvbicpO1xuICB9XG4gIHNldCBzaG93VHJhbnNpdGlvbih2YWx1ZSkge1xuICAgIGlmICgnc2hvd1RyYW5zaXRpb24nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNob3dUcmFuc2l0aW9uID0gdmFsdWU7IH1cbiAgICB0aGlzLnJlZmxlY3RDbGFzcygnc2hvd1RyYW5zaXRpb24nLCB2YWx1ZSk7XG4gIH1cblxuICBnZXQgW3N5bWJvbHMudGVtcGxhdGVdKCkge1xuICAgIHJldHVybiBgXG4gICAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgICNzbGlkaW5nQ29udGFpbmVyIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIC8qXG4gICAgICAgICBTZXQgd2lkdGggZm9yIElFL0VkZ2UuIEl0J3Mgbm90IGNsZWFyIHdoeSB0aGV5IG5lZWQgdGhpcywgYW5kIHRoZSBvdGhlclxuICAgICAgICAgYnJvd3NlcnMgZG9uJ3QuXG4gICAgICAgICAqL1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoLnNob3dUcmFuc2l0aW9uKSAjc2xpZGluZ0NvbnRhaW5lciB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4ycyBlYXNlLW91dDtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1vdXQ7XG4gICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8YmFzaWMtc3ByZWFkLWl0ZW1zIGlkPVwic2xpZGluZ0NvbnRhaW5lclwiIHJvbGU9XCJub25lXCI+XG4gICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgIDwvYmFzaWMtc3ByZWFkLWl0ZW1zPlxuICAgIGA7XG4gIH1cblxufVxuXG5cbi8vIE5vdGU6IEluIHRoaXMgcm91dGluZSwgXCJ0aGlzXCIgaXMgYm91bmQgdG8gYW4gZWxlbWVudCBpbnN0YW5jZS5cbmZ1bmN0aW9uIHJlbmRlclNlbGVjdGlvbigpIHtcbiAgaWYgKCF0aGlzLnNlbGVjdGVkSXRlbSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBzZWxlY3Rpb24gPSBGcmFjdGlvbmFsU2VsZWN0aW9uTWl4aW4uaGVscGVycy5lbGVtZW50U2VsZWN0aW9uKHRoaXMpO1xuICBjb25zdCBpdGVtQ291bnQgPSB0aGlzLml0ZW1zID8gdGhpcy5pdGVtcy5sZW5ndGggOiAwO1xuICBjb25zdCBkYW1wZWQgPSBGcmFjdGlvbmFsU2VsZWN0aW9uTWl4aW4uaGVscGVycy5kYW1wZWRTZWxlY3Rpb24oc2VsZWN0aW9uLCBpdGVtQ291bnQpO1xuICAvLyBVc2UgYSBwZXJjZW50YWdlIHNvIHRoZSB0cmFuc2Zvcm0gd2lsbCBzdGlsbCB3b3JrIGlmIHNjcmVlbiBzaXplIGNoYW5nZXNcbiAgLy8gKGUuZy4sIGlmIGRldmljZSBvcmllbnRhdGlvbiBjaGFuZ2VzKS5cbiAgY29uc3QgbGVmdCA9IC1kYW1wZWQgKiAxMDA7XG4gIGNvbnN0IHRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKCcgKyBsZWZ0ICsgJyUpJztcbiAgdGhpcy4kLnNsaWRpbmdDb250YWluZXIuc3R5bGUud2Via2l0VHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICB0aGlzLiQuc2xpZGluZ0NvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG59XG5cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdiYXNpYy1zbGlkaW5nLXZpZXdwb3J0JywgU2xpZGluZ1ZpZXdwb3J0KTtcbmV4cG9ydCBkZWZhdWx0IFNsaWRpbmdWaWV3cG9ydDtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgdHJhbnNwaWxlZCB0byBjcmVhdGUgYW4gRVM1LWNvbXBhdGlibGUgZGlzdHJpYnV0aW9uIGluIHdoaWNoXG4gKiB0aGUgcGFja2FnZSdzIG1haW4gZmVhdHVyZShzKSBhcmUgYXZhaWxhYmxlIHZpYSB0aGUgd2luZG93LkJhc2ljIGdsb2JhbC5cbiAqIElmIHlvdSdyZSBhbHJlYWR5IHVzaW5nIEVTNiB5b3Vyc2VsZiwgaWdub3JlIHRoaXMgZmlsZSwgYW5kIGluc3RlYWQgaW1wb3J0XG4gKiB0aGUgc291cmNlIGZpbGUocykgeW91IHdhbnQgZnJvbSB0aGUgc3JjIGZvbGRlci5cbiAqL1xuXG5pbXBvcnQgU3ByZWFkSXRlbXMgZnJvbSAnLi9zcmMvU3ByZWFkSXRlbXMnO1xuXG53aW5kb3cuQmFzaWMgPSB3aW5kb3cuQmFzaWMgfHwge307XG53aW5kb3cuQmFzaWMuU3ByZWFkSXRlbXMgPSBTcHJlYWRJdGVtcztcbiIsImltcG9ydCBFbGVtZW50QmFzZSBmcm9tICcuLi8uLi9iYXNpYy1lbGVtZW50LWJhc2Uvc3JjL0VsZW1lbnRCYXNlJztcbmltcG9ydCBEaXN0cmlidXRlZENoaWxkcmVuQ29udGVudE1peGluIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW5Db250ZW50TWl4aW4nO1xuaW1wb3J0IHN5bWJvbHMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvc3ltYm9scyc7XG5cblxuLyoqXG4gKiBTcHJlYWRzIG91dCBhIHNldCBvZiBpdGVtcyBob3Jpem9udGFsbHkgc28gdGhleSB0YWtlIGVxdWFsIHNwYWNlLlxuICpcbiAqIFtMaXZlIGRlbW9dKGh0dHA6Ly9iYXNpY3dlYmNvbXBvbmVudHMub3JnL2Jhc2ljLXdlYi1jb21wb25lbnRzL3BhY2thZ2VzL2Jhc2ljLXNwcmVhZC1pdGVtcy8pXG4gKlxuICogVGhpcyBjb21wb25lbnQgaXMgdXNlZCwgZm9yIGV4YW1wbGUsIGJ5IHRoZSBiYXNpYy1zbGlkaW5nLXZpZXdwb3J0IGNvbXBvbmVudFxuICogdG8gZW5zdXJlIHRoYXQgY2hpbGRyZW4gb2YgZGlmZmVyZW50IHNpemUgd2lsbCB0YWtlIHVwIHRoZSBzYW1lIGFtb3VudCBvZlxuICogaG9yaXpvbnRhbCBzcGFjZS5cbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBjdXJyZW50bHkgcmVxdWlyZXMgYW4gZXhwbGljaXQgc2l6ZSBieSBhcHBsaWVkIHRvIGl0LlxuICpcbiAqIEBleHRlbmRzIEVsZW1lbnRCYXNlXG4gKiBAbWl4ZXMgRGlzdHJpYnV0ZWRDaGlsZHJlbkNvbnRlbnRNaXhpblxuICovXG5jbGFzcyBTcHJlYWRJdGVtcyBleHRlbmRzIEVsZW1lbnRCYXNlLmNvbXBvc2UoXG4gIERpc3RyaWJ1dGVkQ2hpbGRyZW5Db250ZW50TWl4aW5cbikge1xuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGlmIChzdXBlci5jb25uZWN0ZWRDYWxsYmFjaykgeyBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpOyB9XG4gICAgLy8gSEFDS1xuICAgIHRoaXNbc3ltYm9scy5pdGVtc0NoYW5nZWRdKCk7XG4gIH1cblxuICBnZXQgaXRlbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgfVxuXG4gIC8vIFRPRE86IFNob3VsZCBhbHNvIGhhbmRsZSBjb250ZW50Q2hhbmdlZCgpLCBidXQgbmVlZCB0byByYXRpb25hbGl6ZSB3aXRoXG4gIC8vIGludm9jYXRpb24gb2YgW3N5bWJvbHMuaXRlbXNDaGFuZ2VkXSBpbiBjb25uZWN0ZWRDYWxsYmFjay5cbiAgW3N5bWJvbHMuaXRlbXNDaGFuZ2VkXSgpIHtcbiAgICBpZiAoc3VwZXJbc3ltYm9scy5pdGVtc0NoYW5nZWRdKSB7IHN1cGVyW3N5bWJvbHMuaXRlbXNDaGFuZ2VkXSgpOyB9XG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLml0ZW1zO1xuICAgIGNvbnN0IGNvdW50ID0gaXRlbXMubGVuZ3RoO1xuICAgIHRoaXMuJC5zcHJlYWRDb250YWluZXIuc3R5bGUud2lkdGggPSAoY291bnQgKiAxMDApICsgJyUnO1xuICAgIGNvbnN0IGl0ZW1XaWR0aCA9ICgxMDAgLyBjb3VudCkgKyBcIiVcIjtcbiAgICBbXS5mb3JFYWNoLmNhbGwoaXRlbXMsIGl0ZW0gPT4ge1xuICAgICAgaXRlbS5zdHlsZS53aWR0aCA9IGl0ZW1XaWR0aDtcbiAgICB9KTtcbiAgfVxuXG4gIGdldCBbc3ltYm9scy50ZW1wbGF0ZV0oKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgICNzcHJlYWRDb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICAjc3ByZWFkQ29udGFpbmVyIDo6c2xvdHRlZCgqKSB7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICAgIG9iamVjdC1maXQ6IHZhcigtLWJhc2ljLWl0ZW0tb2JqZWN0LWZpdCwgY29udGFpbik7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG4gICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGlkPVwic3ByZWFkQ29udGFpbmVyXCIgcm9sZT1cIm5vbmVcIj5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG59XG5cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdiYXNpYy1zcHJlYWQtaXRlbXMnLCBTcHJlYWRJdGVtcyk7XG5leHBvcnQgZGVmYXVsdCBTcHJlYWRJdGVtcztcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgdHJhbnNwaWxlZCB0byBjcmVhdGUgYW4gRVM1LWNvbXBhdGlibGUgZGlzdHJpYnV0aW9uIGluIHdoaWNoXG4gKiB0aGUgcGFja2FnZSdzIG1haW4gZmVhdHVyZShzKSBhcmUgYXZhaWxhYmxlIHZpYSB0aGUgd2luZG93LkJhc2ljIGdsb2JhbC5cbiAqIElmIHlvdSdyZSBhbHJlYWR5IHVzaW5nIEVTNiB5b3Vyc2VsZiwgaWdub3JlIHRoaXMgZmlsZSwgYW5kIGluc3RlYWQgaW1wb3J0XG4gKiB0aGUgc291cmNlIGZpbGUocykgeW91IHdhbnQgZnJvbSB0aGUgc3JjIGZvbGRlci5cbiAqL1xuXG5pbXBvcnQgVGFiU3RyaXAgZnJvbSAnLi9zcmMvVGFiU3RyaXAnO1xuaW1wb3J0IFRhYlN0cmlwTWl4aW4gZnJvbSAnLi9zcmMvVGFiU3RyaXBNaXhpbic7XG5cbndpbmRvdy5CYXNpYyA9IHdpbmRvdy5CYXNpYyB8fCB7fTtcbndpbmRvdy5CYXNpYy5UYWJTdHJpcCA9IFRhYlN0cmlwO1xud2luZG93LkJhc2ljLlRhYlN0cmlwTWl4aW4gPSBUYWJTdHJpcE1peGluO1xuIiwiLy8gaW1wb3J0IENsaWNrU2VsZWN0aW9uTWl4aW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ2xpY2tTZWxlY3Rpb25NaXhpbic7XG5pbXBvcnQgQ29udGVudEl0ZW1zTWl4aW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ29udGVudEl0ZW1zTWl4aW4nO1xuaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9jcmVhdGVTeW1ib2wnO1xuaW1wb3J0IERpcmVjdGlvblNlbGVjdGlvbk1peGluIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0RpcmVjdGlvblNlbGVjdGlvbk1peGluJztcbmltcG9ydCBEaXN0cmlidXRlZENoaWxkcmVuQ29udGVudE1peGluIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW5Db250ZW50TWl4aW4nO1xuaW1wb3J0IEVsZW1lbnRCYXNlIGZyb20gJy4uLy4uL2Jhc2ljLWVsZW1lbnQtYmFzZS9zcmMvRWxlbWVudEJhc2UnO1xuaW1wb3J0IEdlbmVyaWNNaXhpbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9HZW5lcmljTWl4aW4nO1xuaW1wb3J0IEtleWJvYXJkRGlyZWN0aW9uTWl4aW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvS2V5Ym9hcmREaXJlY3Rpb25NaXhpbic7XG5pbXBvcnQgS2V5Ym9hcmRNaXhpbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9LZXlib2FyZE1peGluJztcbmltcG9ydCByZW5kZXJBcnJheUFzRWxlbWVudHMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvcmVuZGVyQXJyYXlBc0VsZW1lbnRzJztcbmltcG9ydCBTaW5nbGVTZWxlY3Rpb25NaXhpbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TaW5nbGVTZWxlY3Rpb25NaXhpbic7XG5pbXBvcnQgc3ltYm9scyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9zeW1ib2xzJztcbmltcG9ydCB0b2dnbGVDbGFzcyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy90b2dnbGVDbGFzcyc7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IHBhbmVsc1N5bWJvbCA9IGNyZWF0ZVN5bWJvbCgncGFuZWxzJyk7XG5jb25zdCBzcHJlYWRUYWJzU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdzcHJlYWRUYWJzJyk7XG5jb25zdCB0YWJQb3NpdGlvblN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgndGFiUG9zaXRpb24nKTtcblxuXG4vKipcbiAqIEEgc2V0IG9mIHBhZ2VzIHdpdGggYSB0YWIgc3RyaXAgZ292ZXJuaW5nIHdoaWNoIHBhZ2UgaXMgc2hvd24uXG4gKlxuICogVGhpcyBzdG9jayBjb21iaW5hdGlvbiBhcHBsaWVzIHRoZSBbVGFiU3RyaXBNaXhpbl0oLi4vYmFzaWMtdGFiLXN0cmlwLykgdG8gYVxuICogW2Jhc2ljLW1vZGVzXSguLi9iYXNpYy1tb2Rlcy8pIGVsZW1lbnQuIElmIHlvdSdkIGxpa2UgdG8gY3JlYXRlIHNvbWV0aGluZ1xuICogbW9yZSBjb21wbGV4IHRoYW4gdGhpcyBhcnJhbmdlbWVudCwgeW91IGNhbiB1c2UgZWl0aGVyIG9mIHRob3NlIGVsZW1lbnRzIG9uXG4gKiBpdHMgb3duLlxuICpcbiAqIFNpbmNlIHRoaXMgY29tcG9uZW50IHVzZXMgYFRhYlN0cmlwTWl4aW5gLCBpdCBvYnRhaW5zIHRoZSBuYW1lcyBvZiB0aGVcbiAqIGluZGl2aWR1YWwgdGFicyBmcm9tIGEgY2hpbGQncyBgYXJpYS1sYWJlbGAgcHJvcGVydHkuIEV4YW1wbGU6XG4gKlxuICogICAgIDxiYXNpYy10YWJzPlxuICogICAgICAgPGRpdiBhcmlhLWxhYmVsPVwiT25lXCI+UGFnZSBvbmU8L2Rpdj5cbiAqICAgICAgIDxkaXYgYXJpYS1sYWJlbD1cIlR3b1wiPlBhZ2UgdHdvPC9kaXY+XG4gKiAgICAgICA8ZGl2IGFyaWEtbGFiZWw9XCJUaHJlZVwiPlBhZ2UgdGhyZWU8L2Rpdj5cbiAqICAgICA8L2Jhc2ljLXRhYnM+XG4gKlxuICogQGV4dGVuZHMgRWxlbWVudEJhc2VcbiAqIEBtaXhlcyBDbGlja1NlbGVjdGlvbk1peGluXG4gKiBAbWl4ZXMgQ29udGVudEl0ZW1zTWl4aW5cbiAqIEBtaXhlcyBEaXJlY3Rpb25TZWxlY3Rpb25NaXhpblxuICogQG1peGVzIERpc3RyaWJ1dGVkQ2hpbGRyZW5Db250ZW50TWl4aW5cbiAqIEBtaXhlcyBHZW5lcmljTWl4aW5cbiAqIEBtaXhlcyBLZXlib2FyZE1peGluXG4gKiBAbWl4ZXMgS2V5Ym9hcmREaXJlY3Rpb25NaXhpblxuICogQG1peGVzIFNpbmdsZVNlbGVjdGlvbk1peGluXG4gKi9cbmNsYXNzIFRhYlN0cmlwIGV4dGVuZHMgRWxlbWVudEJhc2UuY29tcG9zZShcbiAgLy8gQ2xpY2tTZWxlY3Rpb25NaXhpbixcbiAgRGlyZWN0aW9uU2VsZWN0aW9uTWl4aW4sXG4gIEdlbmVyaWNNaXhpbixcbiAgS2V5Ym9hcmRNaXhpbixcbiAgS2V5Ym9hcmREaXJlY3Rpb25NaXhpbixcbiAgQ29udGVudEl0ZW1zTWl4aW4sXG4gIERpc3RyaWJ1dGVkQ2hpbGRyZW5Db250ZW50TWl4aW4sXG4gIFNpbmdsZVNlbGVjdGlvbk1peGluXG4pIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgLy8gSGFuZGxlIGNsaWNrcy9FbnRlciBvbiB0YWIgYnV0dG9ucy5cbiAgICAvLyBUT0RPOiBSYXRpb25hbGl6ZSB3aXRoIENsaWNrU2VsZWN0aW9uP1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICBjb25zdCB0YWIgPSBldmVudC5wYXRoWzBdO1xuICAgICAgY29uc3QgaW5kZXggPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKHRoaXMuaXRlbXMsIHRhYik7XG4gICAgICBpZiAoaW5kZXggPj0gMCAmJiB0aGlzLnNlbGVjdGVkSW5kZXggIT09IGluZGV4KSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xuICAgICAgICAvLyBOb3RlOiBXZSBkb24ndCBjYWxsIHByZXZlbnREZWZhdWx0IGhlcmUuIFRoZSBkZWZhdWx0IGJlaGF2aW9yIGZvclxuICAgICAgICAvLyBtb3VzZWRvd24gaW5jbHVkZXMgc2V0dGluZyBrZXlib2FyZCBmb2N1cyBpZiB0aGUgZWxlbWVudCBkb2Vzbid0XG4gICAgICAgIC8vIGFscmVhZHkgaGF2ZSB0aGUgZm9jdXMsIGFuZCB3ZSB3YW50IHRvIHByZXNlcnZlIHRoYXQgYmVoYXZpb3IuXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gU2V0IGRlZmF1bHRzLlxuICAgIGlmICh0eXBlb2YgdGhpcy50YWJQb3NpdGlvbiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMudGFiUG9zaXRpb24gPSB0aGlzW3N5bWJvbHMuZGVmYXVsdHNdLnRhYlBvc2l0aW9uO1xuICAgIH1cbiAgfVxuXG4gIGdldCBbc3ltYm9scy5kZWZhdWx0c10oKSB7XG4gICAgY29uc3QgZGVmYXVsdHMgPSBzdXBlcltzeW1ib2xzLmRlZmF1bHRzXSB8fCB7fTtcbiAgICBkZWZhdWx0cy50YWJpbmRleCA9IG51bGw7XG4gICAgZGVmYXVsdHMudGFiUG9zaXRpb24gPSAndG9wJztcbiAgICByZXR1cm4gZGVmYXVsdHM7XG4gIH1cblxuICBnZXQgaXRlbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuJC50YWJzLmNoaWxkcmVuO1xuICB9XG5cbiAgW3N5bWJvbHMuaXRlbVNlbGVjdGVkXShpdGVtLCBzZWxlY3RlZCkge1xuICAgIGlmIChzdXBlcltzeW1ib2xzLml0ZW1TZWxlY3RlZF0pIHsgc3VwZXJbc3ltYm9scy5pdGVtU2VsZWN0ZWRdKGl0ZW0sIHNlbGVjdGVkKTsgfVxuICAgIGFwcGx5U2VsZWN0aW9uVG9UYWIoaXRlbSwgc2VsZWN0ZWQpO1xuICB9XG5cbiAgW3N5bWJvbHMua2V5ZG93bl0oZXZlbnQpIHtcbiAgICBjb25zdCBoYW5kbGVkID0gc3VwZXJbc3ltYm9scy5rZXlkb3duXSAmJiBzdXBlcltzeW1ib2xzLmtleWRvd25dKGV2ZW50KTtcbiAgICBpZiAoaGFuZGxlZCAmJiB0aGlzLnNlbGVjdGVkSXRlbSkge1xuICAgICAgLy8gSWYgdGhlIGV2ZW50IHJlc3VsdGVkIGluIGEgY2hhbmdlIG9mIHNlbGVjdGlvbiwgbW92ZSB0aGUgZm9jdXMgdG8gdGhlXG4gICAgICAvLyBuZXdseS1zZWxlY3RlZCB0YWIuXG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbS5mb2N1cygpO1xuICAgIH1cbiAgICByZXR1cm4gaGFuZGxlZDtcbiAgfVxuXG4gIGdldCBwYW5lbHMoKSB7XG4gICAgcmV0dXJuIHRoaXNbcGFuZWxzU3ltYm9sXTtcbiAgfVxuICBzZXQgcGFuZWxzKHBhbmVscykge1xuICAgIHRoaXNbcGFuZWxzU3ltYm9sXSA9IHBhbmVscztcblxuICAgIC8vIENyZWF0ZSBvbmUgdGFiIGZvciBlYWNoIHBhbmVsLlxuICAgIGNvbnN0IHNlbGVjdGVkSW5kZXggPSB0aGlzLnNlbGVjdGVkSW5kZXg7XG4gICAgY29uc3Qgc2VsZWN0ZWRQYW5lbCA9IHBhbmVsc1tzZWxlY3RlZEluZGV4XTtcbiAgICByZW5kZXJBcnJheUFzRWxlbWVudHMocGFuZWxzLCB0aGlzLiQudGFicywgKHBhbmVsLCB0YWIpID0+IHtcbiAgICAgIGlmICghdGFiKSB7XG4gICAgICAgIHRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICB0YWIuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG4gICAgICAgIHRhYi5jbGFzc0xpc3QuYWRkKCdzdHlsZS1zY29wZScpO1xuICAgICAgICB0YWIuY2xhc3NMaXN0LmFkZCgnYmFzaWMtdGFiLXN0cmlwJyk7XG4gICAgICAgIHRhYi5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAndGFiJyk7XG4gICAgICAgIHRhYi5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgMCk7XG4gICAgICB9XG4gICAgICB0YWIuaWQgPSBwYW5lbC5pZCArICdfdGFiJztcbiAgICAgIHRhYi50ZXh0Q29udGVudCA9IHBhbmVsLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpO1xuXG4gICAgICAvLyBQb2ludCB0YWIgYW5kIHBhbmVsIGF0IGVhY2ggb3RoZXIuXG4gICAgICB0YWIuc2V0QXR0cmlidXRlKCdhcmlhLWNvbnRyb2xzJywgcGFuZWwuaWQpO1xuICAgICAgcGFuZWwuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsbGVkYnknLCB0YWIuaWQpO1xuXG4gICAgICBhcHBseVNlbGVjdGlvblRvVGFiKHRhYiwgcGFuZWwgPT09IHNlbGVjdGVkUGFuZWwpO1xuXG4gICAgICByZXR1cm4gdGFiO1xuICAgIH0pO1xuXG4gICAgdGhpc1tzeW1ib2xzLml0ZW1zQ2hhbmdlZF0oKTtcbiAgfVxuXG4gIGdldCBzcHJlYWRUYWJzKCkge1xuICAgIHJldHVybiB0aGlzW3NwcmVhZFRhYnNTeW1ib2xdO1xuICB9XG4gIHNldCBzcHJlYWRUYWJzKHZhbHVlKSB7XG4gICAgdGhpc1tzcHJlYWRUYWJzU3ltYm9sXSA9IHZhbHVlO1xuICAgIHRvZ2dsZUNsYXNzKHRoaXMsICdzcHJlYWQnLCB2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHBvc2l0aW9uIG9mIHRoZSB0YWIgc3RyaXAgcmVsYXRpdmUgdG8gdGhlIGVsZW1lbnQncyBjaGlsZHJlbi4gVmFsaWRcbiAgICogdmFsdWVzIGFyZSBcInRvcFwiLCBcImxlZnRcIiwgXCJyaWdodFwiLCBhbmQgXCJib3R0b21cIi5cbiAgICpcbiAgICogQGRlZmF1bHQgXCJ0b3BcIlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IHRhYlBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzW3RhYlBvc2l0aW9uU3ltYm9sXTtcbiAgfVxuICBzZXQgdGFiUG9zaXRpb24ocG9zaXRpb24pIHtcbiAgICB0aGlzW3RhYlBvc2l0aW9uU3ltYm9sXSA9IHBvc2l0aW9uO1xuICAgIHRoaXMucmVmbGVjdEF0dHJpYnV0ZSgndGFiLXBvc2l0aW9uJywgcG9zaXRpb24pO1xuICAgIHRoaXMubmF2aWdhdGlvbkF4aXMgPSAocG9zaXRpb24gPT09ICd0b3AnIHx8IHBvc2l0aW9uID09PSAnYm90dG9tJykgP1xuICAgICAgJ2hvcml6b250YWwnIDpcbiAgICAgICd2ZXJ0aWNhbCc7XG4gIH1cblxuICBnZXQgW3N5bWJvbHMudGVtcGxhdGVdKCkge1xuICAgIHJldHVybiBgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qXG4gICAgICAgICAqIEF2b2lkIGhhdmluZyB0YWIgY29udGFpbmVyIHN0cmV0Y2ggYWNyb3NzLiBVc2VyIHdvbid0IGJlIGFibGUgdG8gc2VlXG4gICAgICAgICAqIGl0LCBidXQgc2luY2UgaXQgaGFuZGxlcyB0aGUga2V5Ym9hcmQsIGluIE1vYmlsZSBTYWZhcmkgYSB0YXAgb24gdGhlXG4gICAgICAgICAqIGNvbnRhaW5lciBiYWNrZ3JvdW5kIHdpbGwgY2F1c2UgdGhlIHJlZ2lvbiB0byBmbGFzaC4gQWxpZ25pbmcgdGhlXG4gICAgICAgICAqIHJlZ2lvbiBjb2xsYXBzZXMgaXQgZG93biB0byBob2xkIGl0cyBjb250ZW50cy5cbiAgICAgICAgICovXG4gICAgICAgICN0YWJzIHtcbiAgICAgICAgICAvKiBGb3IgSUUgYnVnIChjbGlja2luZyB0YWIgcHJvZHVjZXMgZ2FwIGJldHdlZW4gdGFiIGFuZCBwYWdlKS4gKi9cbiAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAtd2Via2l0LWZsZXg6IDE7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAvKlxuICAgICAgICAgICAqIFRyeSB0byBvYnRhaW4gZmFzdC10YXAgYmVoYXZpb3Igb24gYWxsIHRhYnMuXG4gICAgICAgICAgICogU2VlIGh0dHBzOi8vd2Via2l0Lm9yZy9ibG9nLzU2MTAvbW9yZS1yZXNwb25zaXZlLXRhcHBpbmctb24taW9zLy5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbiAgICAgICAgfVxuICAgICAgICA6aG9zdCg6bm90KC5zcHJlYWQpKSAjdGFicyB7XG4gICAgICAgICAgLXdlYmtpdC1hbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgICAgIH1cblxuICAgICAgICAudGFiIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbZ2VuZXJpYz1cIlwiXSkgLnRhYiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMC41ZW0gMC43NWVtO1xuICAgICAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjI1cztcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtnZW5lcmljPVwiXCJdKSAudGFiLnNlbGVjdGVkIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICNjY2M7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtnZW5lcmljPVwiXCJdKSAudGFiOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogTGVmdC9yaWdodCBwb3NpdGlvbnMgKi9cbiAgICAgICAgOmhvc3QoW3RhYi1wb3NpdGlvbj1cImxlZnRcIl0pICN0YWJzLFxuICAgICAgICA6aG9zdChbdGFiLXBvc2l0aW9uPVwicmlnaHRcIl0pICN0YWJzIHtcbiAgICAgICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIFNwcmVhZCB2YXJpYW50ICovXG4gICAgICAgIDpob3N0KC5zcHJlYWQpICN0YWJzIHtcbiAgICAgICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICAgICB9XG4gICAgICAgIDpob3N0KC5zcHJlYWQpIC50YWIge1xuICAgICAgICAgIC13ZWJraXQtZmxleDogMTtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogR2VuZXJpYyBzdHlsZSwgdG9wL2JvdHRvbSBwb3NpdGlvbnMgKi9cbiAgICAgICAgOmhvc3QoW2dlbmVyaWM9XCJcIl1bdGFiLXBvc2l0aW9uPVwidG9wXCJdKSAudGFiOm5vdCg6bGFzdC1jaGlsZCksXG4gICAgICAgIDpob3N0KFtnZW5lcmljPVwiXCJdW3RhYi1wb3NpdGlvbj1cImJvdHRvbVwiXSkgLnRhYjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuMmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogR2VuZXJpYyBzdHlsZSwgdG9wIHBvc2l0aW9uICovXG4gICAgICAgIDpob3N0KFtnZW5lcmljPVwiXCJdW3RhYi1wb3NpdGlvbj1cInRvcFwiXSkgLnRhYiB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNWVtIDAuMjVlbSAwIDA7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTFweDtcbiAgICAgICAgfVxuICAgICAgICA6aG9zdChbZ2VuZXJpYz1cIlwiXVt0YWItcG9zaXRpb249XCJ0b3BcIl0pIC50YWIuc2VsZWN0ZWQge1xuICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLyogR2VuZXJpYyBzdHlsZSwgYm90dG9tIHBvc2l0aW9uICovXG4gICAgICAgIDpob3N0KFtnZW5lcmljPVwiXCJdW3RhYi1wb3NpdGlvbj1cImJvdHRvbVwiXSkgLnRhYiB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDAuMjVlbSAwLjI1ZW07XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTFweDtcbiAgICAgICAgfVxuICAgICAgICA6aG9zdChbZ2VuZXJpYz1cIlwiXVt0YWItcG9zaXRpb249XCJib3R0b21cIl0pIC50YWIuc2VsZWN0ZWQge1xuICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLyogR2VuZXJpYyBzdHlsZSwgbGVmdC9yaWdodCBwb3NpdGlvbnMgKi9cbiAgICAgICAgOmhvc3QoW2dlbmVyaWM9XCJcIl1bdGFiLXBvc2l0aW9uPVwibGVmdFwiXSkgLnRhYjpub3QoOmxhc3QtY2hpbGQpLFxuICAgICAgICA6aG9zdChbZ2VuZXJpYz1cIlwiXVt0YWItcG9zaXRpb249XCJyaWdodFwiXSkgLnRhYjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIEdlbmVyaWMgc3R5bGUsIGxlZnQgcG9zaXRpb24gKi9cbiAgICAgICAgOmhvc3QoW2dlbmVyaWM9XCJcIl1bdGFiLXBvc2l0aW9uPVwibGVmdFwiXSkgLnRhYiB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNWVtIDAgMCAwLjI1ZW07XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMXB4O1xuICAgICAgICB9XG4gICAgICAgIDpob3N0KFtnZW5lcmljPVwiXCJdW3RhYi1wb3NpdGlvbj1cImxlZnRcIl0pIC50YWIuc2VsZWN0ZWQge1xuICAgICAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBHZW5lcmljIHN0eWxlLCByaWdodCBwb3NpdGlvbiAqL1xuICAgICAgICA6aG9zdChbZ2VuZXJpYz1cIlwiXVt0YWItcG9zaXRpb249XCJyaWdodFwiXSkgLnRhYiB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwLjI1ZW0gMC4yNWVtIDA7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xcHg7XG4gICAgICAgIH1cbiAgICAgICAgOmhvc3QoW2dlbmVyaWM9XCJcIl1bdGFiLXBvc2l0aW9uPVwicmlnaHRcIl0pIC50YWIuc2VsZWN0ZWQge1xuICAgICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxkaXYgaWQ9XCJ0YWJzXCIgcm9sZT1cInRhYmxpc3RcIj48L2Rpdj5cbiAgICBgO1xuICB9XG59XG5cblxuZnVuY3Rpb24gYXBwbHlTZWxlY3Rpb25Ub1RhYih0YWIsIHNlbGVjdGVkKSB7XG4gIHRhYi5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCBzZWxlY3RlZCk7XG59XG5cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdiYXNpYy10YWItc3RyaXAnLCBUYWJTdHJpcCk7XG5leHBvcnQgZGVmYXVsdCBUYWJTdHJpcDtcbiIsImltcG9ydCBUYWJTdHJpcCBmcm9tICcuL1RhYlN0cmlwJzsgLy8ganNoaW50IGlnbm9yZTpsaW5lXG5pbXBvcnQgc3ltYm9scyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9zeW1ib2xzJztcblxuXG4vLyBVc2VkIHRvIGFzc2lnbiB1bmlxdWUgSURzIHRvIHRhYnMgZm9yIEFSSUEgcHVycG9zZXMuXG5sZXQgaWRDb3VudCA9IDA7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBUYWJTdHJpcC4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIEEgdGVtcGxhdGUgbWl4aW4gd2hpY2ggYWRkcyBzdHJpcCBvZiB0YWJzIGZvciBzZWxlY3Rpbmcgb25lIG9mIHRoZVxuICAgKiBjb21wb25lbnQncyBjaGlsZHJlbi5cbiAgICpcbiAgICogVGhlIGNvbXBvbmVudCBjcmVhdGVzIGEgdGFiIHRvIHJlcHJlc2VudCBlYWNoIG9mIGl0cyBsaWdodCBET00gY2hpbGRyZW4uXG4gICAqIFRoZSB0YWIgbmFtZSBpcyBvYnRhaW5lZCBieSBleGFtaW5pbmcgdGhlIGNoaWxkcmVuIGZvciBhbiBgYXJpYS1sYWJlbGBcbiAgICogcHJvcGVydHkuXG4gICAqXG4gICAqIFVzZSB0YWJzIHdoZW4geW91IHdhbnQgdG8gcHJvdmlkZSBhIGxhcmdlIHNldCBvZiBvcHRpb25zIG9yIGVsZW1lbnRzIHRoYW5cbiAgICogY2FuIGNvbWZvcnRhYmx5IGZpdCBpbmxpbmUsIHRoZSBvcHRpb25zIGNhbiBiZSBjb2hlcmVudGx5IGdyb3VwZWQgaW50byBwYWdlcyxcbiAgICogYW5kIHlvdSB3YW50IHRvIGF2b2lkIG1ha2luZyB0aGUgdXNlciBuYXZpZ2F0ZSB0byBhIHNlcGFyYXRlIHBhZ2UuIFRhYnMgd29ya1xuICAgKiBiZXN0IGlmIHlvdSBvbmx5IGhhdmUgYSBzbWFsbCBoYW5kZnVsIG9mIHBhZ2VzLCBzYXkgMuKAkzcuXG4gICAqXG4gICAqIFRoZSBiYXNpYy10YWItc3RyaXAgY29tcG9uZW50IGRvZXMgbm90IGRlZmluZSBob3cgYSBzZWxlY3RlZCBjaGlsZCBpc1xuICAgKiByZXByZXNlbnRlZC4gSWYgeW91J3JlIGxvb2tpbmcgZm9yIHRoZSBzdGFuZGFyZCBiZWhhdmlvciBvZiBqdXN0IHNob3dpbmcgb25seVxuICAgKiB0aGUgc2VsZWN0ZWQgY2hpbGQsIHlvdSBjYW4gdXNlIHRoaXMgY29tcG9uZW50IGluIGNvbWJpbmF0aW9uIHdpdGggdGhlXG4gICAqIHNlcGFyYXRlIFtiYXNpYy1tb2Rlc10oLi4vYmFzaWMtbW9kZXMvKSBjb21wb25lbnQuIEEgdHlwaWNhbCBhcnJhbmdlbWVudDpcbiAgICpcbiAgICogICAgIDxiYXNpYy10YWItc3RyaXA+XG4gICAqICAgICAgIDxiYXNpYy1tb2RlcyBhcmlhLWxhYmVsPVwiUGFuZWxzXCI+XG4gICAqICAgICAgICAgPGRpdiBhcmlhLWxhYmVsPVwiT25lXCI+UGFnZSBvbmU8L2Rpdj5cbiAgICogICAgICAgICA8ZGl2IGFyaWEtbGFiZWw9XCJUd29cIj5QYWdlIHR3bzwvZGl2PlxuICAgKiAgICAgICAgIDxkaXYgYXJpYS1sYWJlbD1cIlRocmVlXCI+UGFnZSB0aHJlZTwvZGl2PlxuICAgKiAgICAgICA8L2Jhc2ljLW1vZGVzPlxuICAgKiAgICAgPC9iYXNpYy10YWItc3RyaXA+XG4gICAqXG4gICAqIFRoZSBhYm92ZSBjb21iaW5hdGlvbiBpcyBzbyBjb21tb24gaXQgaXMgcHJvdmlkZWQgYXMgYSBzaW5nbGUgY29tcG9uZW50LFxuICAgKiBbYmFzaWMtdGFic10oLi4vYmFzaWMtdGFicy8pLlxuICAgKlxuICAgKiBUaGUgdXNlciBjYW4gc2VsZWN0IGEgdGFiIHdpdGggdGhlIG1vdXNlIG9yIHRvdWNoLCBhcyB3ZWxsIGFzIGJ5IHRocm91Z2ggdGhlXG4gICAqIGtleWJvYXJkLiBFYWNoIHRhYiBhcHBlYXJzIGFzIGEgc2VwYXJhdGUgYnV0dG9uIGluIHRoZSB0YWIgb3JkZXIuXG4gICAqIEFkZGl0aW9uYWxseSwgaWYgdGhlIGZvY3VzIGlzIGN1cnJlbnRseSBvbiBhIHRhYiwgdGhlIHVzZXIgY2FuIHF1aWNrbHlcbiAgICogbmF2aWdhdGUgYmV0d2VlbiB0YWJzIHdpdGggdGhlIGxlZnQvcmlnaHQgYXJyb3cga2V5cyAob3IsIGlmIHRoZSB0YWJzIGFyZVxuICAgKiBpbiB2ZXJ0aWNhbCBwb3NpdGlvbiwgdGhlIHVwL2Rvd24gYXJyb3cga2V5cykuXG4gICAqXG4gICAqIEJ5IGRlZmF1bHQsIHRoZSB0YWJzIGFyZSBzaG93biBncm91cGVkIHRvIHRoZSBsZWZ0LCB3aGVyZSBlYWNoIHRhYiBpcyBvbmx5XG4gICAqIGFzIGJpZyBhcyBuZWNlc3NhcnkuIFlvdSBjYW4gYXBwbHkgdGhlIGBzcHJlYWRgIENTUyBjbGFzcyB0byBhXG4gICAqIGJhc2ljLXRhYi1zdHJpcCBlbGVtZW50IGZvciBhIHZhcmlhbnQgYXBwZWFyYW5jZSBpbiB3aGljaCB0aGUgYXZhaWxhYmxlIHdpZHRoXG4gICAqIG9mIHRoZSBlbGVtZW50IGlzIGRpdmlkZWQgdXAgZXF1YWxseSBhbW9uZyB0YWJzLlxuICAgKlxuICAgKiBUaGUgR2VuZXJpY01peGluIGRlZmF1bHQgc3R5bGluZyBvZiB0aGUgdGFiIHN0cmlwIHdpbGwgcHJlc2VudCB0aGUgY2xhc3NpY1xuICAgKiBza2V1bW9ycGhpYyBsb29rIG9mIHJvdW5kZWQgdGFicyBhdHRhY2hlZCB0byBhIHN1cmZhY2UuIFlvdSBjYW4gcmVtb3ZlIHRoaXNcbiAgICogc3R5bGluZyBieSBzZXR0aW5nIHRoZSBgR2VuZXJpY01peGluYCBwcm9wZXJ0eS9hdHRyaWJ1dGUgdG8gZmFsc2UuXG4gICAqL1xuICBjbGFzcyBUYWJTdHJpcCBleHRlbmRzIGJhc2Uge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgdGhpcy4kLnRhYlN0cmlwLmFkZEV2ZW50TGlzdGVuZXIoJ3NlbGVjdGVkLWl0ZW0tY2hhbmdlZCcsIGV2ZW50ID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRJbmRleCA9IGV2ZW50LnRhcmdldC5zZWxlY3RlZEluZGV4O1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4ICE9PSBzZWxlY3RlZEluZGV4KSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gc2VsZWN0ZWRJbmRleDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0IFtzeW1ib2xzLmRlZmF1bHRzXSgpIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRzID0gc3VwZXJbc3ltYm9scy5kZWZhdWx0c10gfHwge307XG4gICAgICBkZWZhdWx0cy50YWJQb3NpdGlvbiA9ICd0b3AnO1xuICAgICAgcmV0dXJuIGRlZmF1bHRzO1xuICAgIH1cblxuICAgIGdldCBnZW5lcmljKCkge1xuICAgICAgcmV0dXJuIHN1cGVyLmdlbmVyaWM7XG4gICAgfVxuICAgIHNldCBnZW5lcmljKHZhbHVlKSB7XG4gICAgICBpZiAoJ2dlbmVyaWMnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLmdlbmVyaWMgPSB2YWx1ZTsgfVxuICAgICAgdGhpcy4kLnRhYlN0cmlwLmdlbmVyaWMgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBbc3ltYm9scy5pdGVtc0NoYW5nZWRdKCkge1xuICAgICAgaWYgKHN1cGVyW3N5bWJvbHMuaXRlbXNDaGFuZ2VkXSkgeyBzdXBlcltzeW1ib2xzLml0ZW1zQ2hhbmdlZF0oKTsgfVxuXG4gICAgICBjb25zdCBiYXNlSWQgPSB0aGlzLmlkID9cbiAgICAgICAgXCJfXCIgKyB0aGlzLmlkICsgXCJQYW5lbFwiIDpcbiAgICAgICAgXCJfcGFuZWxcIjtcblxuICAgICAgLy8gQ29uZmlybSB0aGF0IGl0ZW1zIGhhdmUgYXQgbGVhc3QgYSBkZWZhdWx0IHJvbGUgYW5kIElEIGZvciBBUklBIHB1cnBvc2VzLlxuICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAvLyBpZiAoIWl0ZW0uZ2V0QXR0cmlidXRlKCdyb2xlJykpIHtcbiAgICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgncm9sZScsICd0YWJwYW5lbCcpO1xuICAgICAgICAvLyB9XG4gICAgICAgIGlmICghaXRlbS5pZCkge1xuICAgICAgICAgIGl0ZW0uaWQgPSBiYXNlSWQgKyBpZENvdW50Kys7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBQb2ludCB0aGUgdGFiIHN0cmlwIGF0IHRoZSBwYW5lbHMuXG4gICAgICB0aGlzLiQudGFiU3RyaXAucGFuZWxzID0gdGhpcy5pdGVtcztcbiAgICAgIHRoaXMuJC50YWJTdHJpcC5zZWxlY3RlZEluZGV4ID0gdGhpcy5zZWxlY3RlZEluZGV4O1xuICAgIH1cblxuICAgIGdldCBzZWxlY3RlZEluZGV4KCkge1xuICAgICAgcmV0dXJuIHN1cGVyLnNlbGVjdGVkSW5kZXg7XG4gICAgfVxuICAgIHNldCBzZWxlY3RlZEluZGV4KHZhbHVlKSB7XG4gICAgICBpZiAoJ3NlbGVjdGVkSW5kZXgnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkSW5kZXggPSB2YWx1ZTsgfVxuICAgICAgaWYgKHRoaXMuJC50YWJTdHJpcC5zZWxlY3RlZEluZGV4ICE9PSB2YWx1ZSkge1xuICAgICAgICB0aGlzLiQudGFiU3RyaXAuc2VsZWN0ZWRJbmRleCA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGdldCBzcHJlYWRUYWJzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuJC50YWJTdHJpcC5zcHJlYWRUYWJzO1xuICAgIH1cbiAgICBzZXQgc3ByZWFkVGFicyh2YWx1ZSkge1xuICAgICAgdGhpcy4kLnRhYlN0cmlwLnNwcmVhZFRhYnMgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgdGFiUG9zaXRpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy4kLnRhYlN0cmlwLnRhYlBvc2l0aW9uO1xuICAgIH1cbiAgICBzZXQgdGFiUG9zaXRpb24ocG9zaXRpb24pIHtcbiAgICAgIHRoaXMuJC50YWJTdHJpcC50YWJQb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgdGhpcy5yZWZsZWN0QXR0cmlidXRlKCd0YWItcG9zaXRpb24nLCBwb3NpdGlvbik7XG5cbiAgICAgIC8vIFBoeXNpY2FsbHkgcmVvcmRlciB0aGUgdGFicyBhbmQgcGFnZXMgdG8gcmVmbGVjdCB0aGUgZGVzaXJlZCBhcnJhbmdlbWVudC5cbiAgICAgIC8vIFdlIGNvdWxkIGNoYW5nZSB0aGUgdmlzdWFsIGFwcGVhcmFuY2UgYnkgcmV2ZXJzaW5nIHRoZSBvcmRlciBvZiB0aGUgZmxleFxuICAgICAgLy8gYm94LCBidXQgdGhlbiB0aGUgdmlzdWFsIG9yZGVyIHdvdWxkbid0IHJlZmxlY3QgdGhlIGRvY3VtZW50IG9yZGVyLCB3aGljaFxuICAgICAgLy8gZGV0ZXJtaW5lcyBmb2N1cyBvcmRlci4gVGhhdCB3b3VsZCBzdXJwcmlzZSBhIHVzZXIgdHJ5aW5nIHRvIHRhYiB0aHJvdWdoXG4gICAgICAvLyB0aGUgY29udHJvbHMuXG4gICAgICBjb25zdCBmaXJzdEVsZW1lbnQgPSAocG9zaXRpb24gPT09ICd0b3AnIHx8IHBvc2l0aW9uID09PSAnbGVmdCcpID9cbiAgICAgICAgdGhpcy4kLnRhYlN0cmlwIDpcbiAgICAgICAgdGhpcy4kLnBhZ2VzO1xuICAgICAgY29uc3QgbGFzdEVsZW1lbnQgPSAocG9zaXRpb24gPT09ICd0b3AnIHx8IHBvc2l0aW9uID09PSAnbGVmdCcpID9cbiAgICAgICAgdGhpcy4kLnBhZ2VzIDpcbiAgICAgICAgdGhpcy4kLnRhYlN0cmlwO1xuICAgICAgaWYgKGZpcnN0RWxlbWVudC5uZXh0U2libGluZyAhPT0gbGFzdEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5zaGFkb3dSb290Lmluc2VydEJlZm9yZShmaXJzdEVsZW1lbnQsIGxhc3RFbGVtZW50KTtcbiAgICAgIH1cblxuICAgIH1cblxuICAgIGdldCBbc3ltYm9scy50ZW1wbGF0ZV0oKSB7XG4gICAgICBjb25zdCBiYXNlVGVtcGxhdGUgPSBzdXBlcltzeW1ib2xzLnRlbXBsYXRlXSB8fCAnJztcbiAgICAgIHJldHVybiBgXG4gICAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgICNwYWdlcyB7XG4gICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgLXdlYmtpdC1mbGV4OiAxO1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cblxuICAgICAgICAjcGFnZXMgOjpzbG90dGVkKCopIHtcbiAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAtd2Via2l0LWZsZXg6IDE7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIExlZnQvcmlnaHQgcG9zaXRpb25zICovXG4gICAgICAgIDpob3N0KFt0YWItcG9zaXRpb249XCJsZWZ0XCJdKSxcbiAgICAgICAgOmhvc3QoW3RhYi1wb3NpdGlvbj1cInJpZ2h0XCJdKSB7XG4gICAgICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBHZW5lcmljIHN0eWxlICovXG4gICAgICAgIDpob3N0KFtnZW5lcmljPVwiXCJdKSAjcGFnZXMge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuICAgICAgICA8L3N0eWxlPlxuXG4gICAgICAgIDxiYXNpYy10YWItc3RyaXAgaWQ9XCJ0YWJTdHJpcFwiIHJvbGU9XCJ0YWJsaXN0XCI+PC9iYXNpYy10YWItc3RyaXA+XG4gICAgICAgIDxkaXYgaWQ9XCJwYWdlc1wiPlxuICAgICAgICAgICR7YmFzZVRlbXBsYXRlfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIGA7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gVGFiU3RyaXA7XG59O1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyB0cmFuc3BpbGVkIHRvIGNyZWF0ZSBhbiBFUzUtY29tcGF0aWJsZSBkaXN0cmlidXRpb24gaW4gd2hpY2hcbiAqIHRoZSBwYWNrYWdlJ3MgbWFpbiBmZWF0dXJlKHMpIGFyZSBhdmFpbGFibGUgdmlhIHRoZSB3aW5kb3cuQmFzaWMgZ2xvYmFsLlxuICogSWYgeW91J3JlIGFscmVhZHkgdXNpbmcgRVM2IHlvdXJzZWxmLCBpZ25vcmUgdGhpcyBmaWxlLCBhbmQgaW5zdGVhZCBpbXBvcnRcbiAqIHRoZSBzb3VyY2UgZmlsZShzKSB5b3Ugd2FudCBmcm9tIHRoZSBzcmMgZm9sZGVyLlxuICovXG5cbmltcG9ydCBUYWJzIGZyb20gJy4vc3JjL1RhYnMnO1xuXG53aW5kb3cuQmFzaWMgPSB3aW5kb3cuQmFzaWMgfHwge307XG53aW5kb3cuQmFzaWMuVGFicyA9IFRhYnM7XG4iLCJpbXBvcnQgR2VuZXJpY01peGluIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0dlbmVyaWNNaXhpbic7XG5pbXBvcnQgTW9kZXMgZnJvbSAnLi4vLi4vYmFzaWMtbW9kZXMvc3JjL01vZGVzJztcbmltcG9ydCBUYWJTdHJpcE1peGluIGZyb20gJy4uLy4uL2Jhc2ljLXRhYi1zdHJpcC9zcmMvVGFiU3RyaXBNaXhpbic7XG5cblxuY29uc3QgYmFzZSA9IE1vZGVzLmNvbXBvc2UoXG4gIEdlbmVyaWNNaXhpbixcbiAgVGFiU3RyaXBNaXhpblxuKTtcblxuXG4vKipcbiAqIEEgc2V0IG9mIHBhZ2VzIHdpdGggYSB0YWIgc3RyaXAgZ292ZXJuaW5nIHdoaWNoIHBhZ2UgaXMgc2hvd24uXG4gKlxuICogVGhpcyBzdG9jayBjb21iaW5hdGlvbiBhcHBsaWVzIHRoZSBbVGFiU3RyaXBNaXhpbl0oLi4vYmFzaWMtdGFiLXN0cmlwLykgdG8gYVxuICogW2Jhc2ljLW1vZGVzXSguLi9iYXNpYy1tb2Rlcy8pIGVsZW1lbnQuIElmIHlvdSdkIGxpa2UgdG8gY3JlYXRlIHNvbWV0aGluZ1xuICogbW9yZSBjb21wbGV4IHRoYW4gdGhpcyBhcnJhbmdlbWVudCwgeW91IGNhbiB1c2UgZWl0aGVyIG9mIHRob3NlIGVsZW1lbnRzIG9uXG4gKiBpdHMgb3duLlxuICpcbiAqIFNpbmNlIHRoaXMgY29tcG9uZW50IHVzZXMgYFRhYlN0cmlwTWl4aW5gLCBpdCBvYnRhaW5zIHRoZSBuYW1lcyBvZiB0aGVcbiAqIGluZGl2aWR1YWwgdGFicyBmcm9tIGEgY2hpbGQncyBgYXJpYS1sYWJlbGAgcHJvcGVydHkuIEV4YW1wbGU6XG4gKlxuICogICAgIDxiYXNpYy10YWJzPlxuICogICAgICAgPGRpdiBhcmlhLWxhYmVsPVwiT25lXCI+UGFnZSBvbmU8L2Rpdj5cbiAqICAgICAgIDxkaXYgYXJpYS1sYWJlbD1cIlR3b1wiPlBhZ2UgdHdvPC9kaXY+XG4gKiAgICAgICA8ZGl2IGFyaWEtbGFiZWw9XCJUaHJlZVwiPlBhZ2UgdGhyZWU8L2Rpdj5cbiAqICAgICA8L2Jhc2ljLXRhYnM+XG4gKlxuICogQGV4dGVuZHMgTW9kZXNcbiAqIEBtaXhlcyBHZW5lcmljTWl4aW5cbiAqL1xuY2xhc3MgVGFicyBleHRlbmRzIGJhc2Uge31cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdiYXNpYy10YWJzJywgVGFicyk7XG5leHBvcnQgZGVmYXVsdCBUYWJzO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyB0cmFuc3BpbGVkIHRvIGNyZWF0ZSBhbiBFUzUtY29tcGF0aWJsZSBkaXN0cmlidXRpb24gb2YgYWxsXG4gKiBjb21wb25lbnRzIGluIHRoZSBwcm9qZWN0LiBJZiB5b3UncmUgYWxyZWFkeSB1c2luZyBFUzYgeW91cnNlbGYsIGlnbm9yZSB0aGlzXG4gKiBmaWxlLCBhbmQgaW5zdGVhZCBpbXBvcnQgdGhlIHNvdXJjZSBmaWxlKHMpIHlvdSB3YW50IGZyb20gdGhlIHNwZWNpZmljXG4gKiBwYWNrYWdlIHlvdSB3YW50LlxuICovXG5cbi8vIEltcG9ydCBhbGwgdGhlIGdsb2JhbHMgZnJvbSBlYWNoIHBhY2thZ2UuXG4vLyBXZSB0ZWxsIGpzaGludCB0byBpZ25vcmUgdGhlIGZhY3QgdGhhdCB3ZSdyZSBub3QgYWN0dWFsbHkgdXNpbmcgdGhlbSBoZXJlLlxuLyoganNoaW50IGlnbm9yZTpzdGFydCAqL1xuXG5pbXBvcnQgKiBhcyBhbmltYXRpb25TdGFnZSBmcm9tICcuLi9iYXNpYy1hbmltYXRpb24tc3RhZ2UvZ2xvYmFscyc7XG5pbXBvcnQgKiBhcyBhdXRvc2l6ZVRleHRhcmVhIGZyb20gJy4uL2Jhc2ljLWF1dG9zaXplLXRleHRhcmVhL2dsb2JhbHMnO1xuaW1wb3J0ICogYXMgY2Fyb3VzZWwgZnJvbSAnLi4vYmFzaWMtY2Fyb3VzZWwvZ2xvYmFscyc7XG5pbXBvcnQgKiBhcyBjb2xsYXBzaWJsZVBhbmVsIGZyb20gJy4uL2Jhc2ljLWNvbGxhcHNpYmxlLXBhbmVsL2dsb2JhbHMnO1xuaW1wb3J0ICogYXMgY29tcG9uZW50TWl4aW5zIGZyb20gJy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvZ2xvYmFscyc7XG5pbXBvcnQgKiBhcyBjdXJyZW50QW5jaG9yIGZyb20gJy4uL2Jhc2ljLWN1cnJlbnQtYW5jaG9yL2dsb2JhbHMnO1xuaW1wb3J0ICogYXMgZWxlbWVudEJhc2UgZnJvbSAnLi4vYmFzaWMtZWxlbWVudC1iYXNlL2dsb2JhbHMnO1xuaW1wb3J0ICogYXMgZmFkZU92ZXJmbG93IGZyb20gJy4uL2Jhc2ljLWZhZGUtb3ZlcmZsb3cvZ2xvYmFscyc7XG5pbXBvcnQgKiBhcyBsaXN0Qm94IGZyb20gJy4uL2Jhc2ljLWxpc3QtYm94L2dsb2JhbHMnO1xuaW1wb3J0ICogYXMgbW9kZXMgZnJvbSAnLi4vYmFzaWMtbW9kZXMvZ2xvYmFscyc7XG5pbXBvcnQgKiBhcyBzbGlkZXNob3cgZnJvbSAnLi4vYmFzaWMtc2xpZGVzaG93L2dsb2JhbHMnO1xuaW1wb3J0ICogYXMgc2xpZGVzaG93V2l0aENvbnRyb2xzIGZyb20gJy4uL2Jhc2ljLXNsaWRlc2hvdy13aXRoLWNvbnRyb2xzL2dsb2JhbHMnO1xuaW1wb3J0ICogYXMgc2xpZGluZ0Nhcm91c2VsIGZyb20gJy4uL2Jhc2ljLXNsaWRpbmctY2Fyb3VzZWwvZ2xvYmFscyc7XG5pbXBvcnQgKiBhcyBzbGlkaW5nVmlld3BvcnQgZnJvbSAnLi4vYmFzaWMtc2xpZGluZy12aWV3cG9ydC9nbG9iYWxzJztcbmltcG9ydCAqIGFzIHNwcmVhZEl0ZW1zIGZyb20gJy4uL2Jhc2ljLXNwcmVhZC1pdGVtcy9nbG9iYWxzJztcbmltcG9ydCAqIGFzIHRhYnMgZnJvbSAnLi4vYmFzaWMtdGFicy9nbG9iYWxzJztcbmltcG9ydCAqIGFzIHRhYlN0cmlwIGZyb20gJy4uL2Jhc2ljLXRhYi1zdHJpcC9nbG9iYWxzJztcbmltcG9ydCAqIGFzIHdlYkNvbXBvbmVudHMgZnJvbSAnLi4vYmFzaWMtd2ViLWNvbXBvbmVudHMvZ2xvYmFscyc7XG5pbXBvcnQgKiBhcyB3cmFwcGVkU3RhbmRhcmRFbGVtZW50IGZyb20gJy4uL2Jhc2ljLXdyYXBwZWQtc3RhbmRhcmQtZWxlbWVudC9nbG9iYWxzJztcblxuLyoganNoaW50IGlnbm9yZTplbmQgKi9cbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgdHJhbnNwaWxlZCB0byBjcmVhdGUgYW4gRVM1LWNvbXBhdGlibGUgZGlzdHJpYnV0aW9uIGluIHdoaWNoXG4gKiB0aGUgcGFja2FnZSdzIG1haW4gZmVhdHVyZShzKSBhcmUgYXZhaWxhYmxlIHZpYSB0aGUgd2luZG93LkJhc2ljIGdsb2JhbC5cbiAqIElmIHlvdSdyZSBhbHJlYWR5IHVzaW5nIEVTNiB5b3Vyc2VsZiwgaWdub3JlIHRoaXMgZmlsZSwgYW5kIGluc3RlYWQgaW1wb3J0XG4gKiB0aGUgc291cmNlIGZpbGUocykgeW91IHdhbnQgZnJvbSB0aGUgc3JjIGZvbGRlci5cbiAqL1xuXG5pbXBvcnQgV3JhcHBlZFN0YW5kYXJkRWxlbWVudCBmcm9tICcuL3NyYy9XcmFwcGVkU3RhbmRhcmRFbGVtZW50Jztcblxud2luZG93LkJhc2ljID0gd2luZG93LkJhc2ljIHx8IHt9O1xud2luZG93LkJhc2ljLldyYXBwZWRTdGFuZGFyZEVsZW1lbnQgPSBXcmFwcGVkU3RhbmRhcmRFbGVtZW50O1xuIiwiaW1wb3J0IEVsZW1lbnRCYXNlIGZyb20gJy4uLy4uL2Jhc2ljLWVsZW1lbnQtYmFzZS9zcmMvRWxlbWVudEJhc2UnO1xuaW1wb3J0IHN5bWJvbHMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvc3ltYm9scyc7XG5cblxuLypcbiAqIEEgc2V0IG9mIGV2ZW50cyB3aGljaCwgaWYgZmlyZWQgYnkgdGhlIGlubmVyIHN0YW5kYXJkIGVsZW1lbnQsIHNob3VsZCBiZVxuICogcmUtcmFpc2VkIGJ5IHRoZSBjdXN0b20gZWxlbWVudC4gKFdlIG9ubHkgbmVlZCB0byBkbyB0aGF0IHVuZGVyIG5hdGl2ZVxuICogU2hhZG93IERPTSwgbm90IHRoZSBwb2x5ZmlsbC4pXG4gKlxuICogVGhlc2UgYXJlIGV2ZW50cyB3aGljaCBhcmUgc3BlYydlZCB0byBOT1QgZ2V0IHJldGFyZ2V0dGVkIGFjcm9zcyBhIFNoYWRvdyBET01cbiAqIGJvdW5kYXJ5LCBvcmdhbml6ZWQgYnkgd2hpY2ggZWxlbWVudChzKSByYWlzZSB0aGUgZXZlbnRzLiBUbyBwcm9wZXJseVxuICogc2ltdWxhdGUgdGhlc2UsIHdlIHdpbGwgbmVlZCB0byBsaXN0ZW4gZm9yIHRoZSByZWFsIGV2ZW50cywgdGhlbiByZS1yYWlzZSBhXG4gKiBzaW11bGF0aW9uIG9mIHRoZSBvcmlnaW5hbCBldmVudC4gRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZVxuICogaHR0cHM6Ly93d3cudzMub3JnL1RSL3NoYWRvdy1kb20vI2gtZXZlbnRzLXRoYXQtYXJlLW5vdC1sZWFrZWQtaW50by1hbmNlc3Rvci10cmVlcy5cbiAqXG4gKiBJdCBhcHBlYXJzIHRoYXQgd2UgZG8gKm5vdCogbmVlZCB0byByZS1yYWlzZSB0aGUgbm9uLWJ1YmJsaW5nIFwiZm9jdXNcIiBhbmRcbiAqIFwiYmx1clwiIGV2ZW50cy4gVGhlc2UgYXBwZWFyIHRvIGJlIGF1dG9tYXRpY2FsbHkgcmUtcmFpc2VkIGFzIGV4cGVjdGVkIC0tIGJ1dFxuICogaXQncyBub3QgY2xlYXIgd2h5IHRoYXQgaGFwcGVucy5cbiAqXG4gKiBUaGUgbGlzdCBiZWxvdyBpcyByZWFzb25hYmx5IGNvbXBsZXRlLiBJdCBvbWl0cyBlbGVtZW50cyB0aGF0IGNhbm5vdCBiZVxuICogd3JhcHBlZCAoc2VlIGNsYXNzIG5vdGVzIGFib3ZlKS4gQWxzbywgd2UgaGF2ZW4ndCBhY3R1YWxseSB0cmllZCB3cmFwcGluZ1xuICogZXZlcnkgZWxlbWVudCBpbiB0aGlzIGxpc3Q7IHNvbWUgb2YgdGhlIG1vcmUgb2JzY3VyZSBvbmVzIG1pZ2h0IG5vdCBhY3R1YWxseVxuICogd29yayBhcyBleHBlY3RlZCwgYnV0IGl0IHdhcyBlYXNpZXIgdG8gaW5jbHVkZSB0aGVtIGZvciBjb21wbGV0ZW5lc3MgdGhhblxuICogdG8gYWN0dWFsbHkgdmVyaWZ5IHdoZXRoZXIgb3Igbm90IHRoZSBlbGVtZW50IGNhbiBiZSB3cmFwcGVkLlxuICovXG5jb25zdCByZXJhaXNlRXZlbnRzID0ge1xuICBhZGRyZXNzOiBbJ3Njcm9sbCddLFxuICBibG9ja3F1b3RlOiBbJ3Njcm9sbCddLFxuICBjYXB0aW9uOiBbJ3Njcm9sbCddLFxuICBjZW50ZXI6IFsnc2Nyb2xsJ10sXG4gIGRkOiBbJ3Njcm9sbCddLFxuICBkaXI6IFsnc2Nyb2xsJ10sXG4gIGRpdjogWydzY3JvbGwnXSxcbiAgZGw6IFsnc2Nyb2xsJ10sXG4gIGR0OiBbJ3Njcm9sbCddLFxuICBmaWVsZHNldDogWydzY3JvbGwnXSxcbiAgZm9ybTogWydyZXNldCcsICdzY3JvbGwnXSxcbiAgZnJhbWU6IFsnbG9hZCddLFxuICBoMTogWydzY3JvbGwnXSxcbiAgaDI6IFsnc2Nyb2xsJ10sXG4gIGgzOiBbJ3Njcm9sbCddLFxuICBoNDogWydzY3JvbGwnXSxcbiAgaDU6IFsnc2Nyb2xsJ10sXG4gIGg2OiBbJ3Njcm9sbCddLFxuICBpZnJhbWU6IFsnbG9hZCddLFxuICBpbWc6IFsnYWJvcnQnLCAnZXJyb3InLCAnbG9hZCddLFxuICBpbnB1dDogWydhYm9ydCcsICdjaGFuZ2UnLCAnZXJyb3InLCAnc2VsZWN0JywgJ2xvYWQnXSxcbiAga2V5Z2VuOiBbJ3Jlc2V0JywgJ3NlbGVjdCddLFxuICBsaTogWydzY3JvbGwnXSxcbiAgbGluazogWydsb2FkJ10sXG4gIG1lbnU6IFsnc2Nyb2xsJ10sXG4gIG9iamVjdDogWydlcnJvcicsICdzY3JvbGwnXSxcbiAgb2w6IFsnc2Nyb2xsJ10sXG4gIHA6IFsnc2Nyb2xsJ10sXG4gIHNjcmlwdDogWydlcnJvcicsICdsb2FkJ10sXG4gIHNlbGVjdDogWydjaGFuZ2UnLCAnc2Nyb2xsJ10sXG4gIHRib2R5OiBbJ3Njcm9sbCddLFxuICB0Zm9vdDogWydzY3JvbGwnXSxcbiAgdGhlYWQ6IFsnc2Nyb2xsJ10sXG4gIHRleHRhcmVhOiBbJ2NoYW5nZScsICdzZWxlY3QnLCAnc2Nyb2xsJ11cbn07XG5cblxuLy8gS2VlcCB0cmFjayBvZiB3aGljaCByZS1yYWlzZWQgZXZlbnRzIHNob3VsZCBidWJibGUuXG5jb25zdCBldmVudEJ1YmJsZXMgPSB7XG4gIGFib3J0OiB0cnVlLFxuICBjaGFuZ2U6IHRydWUsXG4gIHJlc2V0OiB0cnVlXG59O1xuXG5cbi8vIEVsZW1lbnRzIHdoaWNoIGFyZSBkaXNwbGF5OiBibG9jayBieSBkZWZhdWx0LlxuLy8gU291cmNlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVE1ML0Jsb2NrLWxldmVsX2VsZW1lbnRzXG5jb25zdCBibG9ja0VsZW1lbnRzID0gW1xuICAnYWRkcmVzcycsXG4gICdhcnRpY2xlJyxcbiAgJ2FzaWRlJyxcbiAgJ2Jsb2NrcXVvdGUnLFxuICAnY2FudmFzJyxcbiAgJ2RkJyxcbiAgJ2RpdicsXG4gICdkbCcsXG4gICdmaWVsZHNldCcsXG4gICdmaWdjYXB0aW9uJyxcbiAgJ2ZpZ3VyZScsXG4gICdmb290ZXInLFxuICAnZm9ybScsXG4gICdoMScsXG4gICdoMicsXG4gICdoMycsXG4gICdoNCcsXG4gICdoNScsXG4gICdoNicsXG4gICdoZWFkZXInLFxuICAnaGdyb3VwJyxcbiAgJ2hyJyxcbiAgJ2xpJyxcbiAgJ21haW4nLFxuICAnbmF2JyxcbiAgJ25vc2NyaXB0JyxcbiAgJ29sJyxcbiAgJ291dHB1dCcsXG4gICdwJyxcbiAgJ3ByZScsXG4gICdzZWN0aW9uJyxcbiAgJ3RhYmxlJyxcbiAgJ3Rmb290JyxcbiAgJ3VsJyxcbiAgJ3ZpZGVvJ1xuXTtcblxuXG4vKipcbiAqIFdyYXBzIGEgc3RhbmRhcmQgSFRNTCBlbGVtZW50IHNvIHRoYXQgdGhlIHN0YW5kYXJkIGJlaGF2aW9yIGNhbiB0aGVuIGJlXG4gKiBleHRlbmRlZC5cbiAqXG4gKiBbTGl2ZSBkZW1vXShodHRwOi8vYmFzaWN3ZWJjb21wb25lbnRzLm9yZy9iYXNpYy13ZWItY29tcG9uZW50cy9wYWNrYWdlcy9iYXNpYy13cmFwcGVkLXN0YW5kYXJkLWVsZW1lbnQvKVxuICpcbiAqIFNlZSBhbHNvIFtiYXNpYy1hdXRvc2l6ZS10ZXh0YXJlYV0oLi4vYmFzaWMtYXV0b3NpemUtdGV4dGFyZWEpIGFuZFxuICogW2Jhc2ljLWN1cnJlbnQtYW5jaG9yXSguLi9iYXNpYy1jdXJyZW50LWFuY2hvcikuIFRoZSBmb3JtZXIgdXNlc1xuICogV3JhcHBlZFN0YW5kYXJkRWxlbWVudCB0byB3cmFwIGEgc3RhbmRhcmQgYDx0ZXh0YXJlYT5gIGFuZCBgPGE+YCxcbiAqIHJlc3BlY3RpdmVseS5cbiAqXG4gKiBUaGUgQ3VzdG9tIEVsZW1lbnRzIHNwZWMgZG9lcyBub3QgY3VycmVudGx5IChhcyBvZiBNYXJjaCAyMDE2KSBhbGxvdyB5b3UgdG9cbiAqIGV4dGVuZCB0aGUgYmVoYXZpb3Igb2YgYSBzdGFuZGFyZCBIVE1MIGVsZW1lbnQgbGlrZSBgPGE+YCBvciBgPGJ1dHRvbj5gLlxuICogQXMgYSBwYXJ0aWFsIHdvcmthcm91bmQsIHRoZSBXcmFwcGVkU3RhbmRhcmRFbGVtZW50IGNsYXNzIGNhbiBjcmVhdGUgYSBjbGFzc1xuICogZm9yIHlvdSB0aGF0IHdyYXBzIGFuIGluc3RhbmNlIG9mIGEgc3RhbmRhcmQgSFRNTCBlbGVtZW50LiBGb3IgZXhhbXBsZSwgdGhlXG4gKiBjb2RlIGJlbG93IGNyZWF0ZXMgYSBjbGFzcyB0aGF0IHdpbGwgd3JhcCBhbiBpbnN0YW5jZSBvZiBhIHN0YW5kYXJkIGA8YT5gXG4gKiBlbGVtZW50OlxuICpcbiAqICAgICBjbGFzcyBXcmFwcGVkQSBleHRlbmRzIFdyYXBwZWRTdGFuZGFyZEVsZW1lbnQud3JhcCgnYScpIHtcbiAqICAgICAgIGN1c3RvbU1ldGhvZCgpIHsgLi4uIH1cbiAqICAgICB9XG4gKiAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCd3cmFwcGVkLWEnLCBXcmFwcGVkQSk7XG4gKlxuICogQW4gaW5zdGFuY2Ugb2YgdGhlIHJlc3VsdGluZyBjbGFzcyB3aWxsIGxvb2sgdG8gdGhlIHVzZXIgbGlrZSBhbiBpbnN0YW5jZSBvZlxuICogdGhlIHN0YW5kYXJkIGVsZW1lbnQgY2xhc3MgaXQgd3JhcHMuIFRoZSByZXN1bHRpbmcgY2xhc3Mgd2lsbCAqbm90KiBiZSBhblxuICogYGluc3RhbmNlb2ZgIHRoZSBzdGFuZGFyZCBjbGFzcyAoaGVyZSwgSFRNTEFuY2hvckVsZW1lbnQpLiBBbm90aGVyIGxpbWl0YXRpb25cbiAqIGlzIHRoYXQgdGhlIHJlc3VsdGluZyBgPHdyYXBwZWQtYT5gIHdpbGwgbm90IGF1dG9tYXRpY2FsbHkgcGljayB1cCBDU1Mgc3R5bGVzXG4gKiBmb3Igc3RhbmRhcmQgYDxhPmAgZWxlbWVudHMuIEhvd2V2ZXIsIHRoZSByZXN1bHRpbmcgY2xhc3MgKmNhbiogYmUgZXh0ZW5kZWQuXG4gKiBFLmcuLCBpbnN0YW5jZXMgb2YgdGhlIGFib3ZlIGNsYXNzIGhhdmUgYSBgY3VzdG9tTWV0aG9kKClgIGF2YWlsYWJsZSB0byB0aGVtLlxuICpcbiAqIEFueSBwcm9wZXJ0aWVzIGRlZmluZWQgYnkgdGhlIG9yaWdpbmFsIHN0YW5kYXJkIGVsZW1lbnQgd2lsbCBiZSBleHBvc2VkIG9uXG4gKiB0aGUgcmVzdWx0aW5nIHdyYXBwZXIgY2xhc3MsIGFuZCBjYWxscyB0byBnZXQgb3Igc2V0IHRob3NlIHByb3BlcnRpZXMgd2lsbCBiZVxuICogZGVsZWdhdGVkIHRvIHRoZSB3cmFwcGVkIGVsZW1lbnQgaW5zdGFuY2UuIENvbnRpbnVpbmcgdGhlIGFib3ZlIGV4YW1wbGU6XG4gKlxuICogICAgIGxldCB3cmFwcGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnd3JhcHBlZC1hJyk7XG4gKiAgICAgd3JhcHBlZC5ocmVmID0gJ2h0dHA6Ly9leGFtcGxlLmNvbS8nO1xuICogICAgIHdyYXBwZWQudGV4dENvbnRlbnQgPSAnQ2xpY2sgaGVyZSc7XG4gKlxuICogSGVyZSwgdGhlIGNyZWF0ZWQgY3VzdG9tIGA8d3JhcHBlZC1hPmAgZWxlbWVudCB3aWxsIGNvbnRhaW4gaW5zaWRlIGl0c1xuICogc2hhZG93IHRyZWUgYW4gaW5zdGFuY2Ugb2YgYSBzdGFuZGFyZCBgPGE+YCBlbGVtZW50LiBUaGUgY2FsbCB0byBzZXQgdGhlXG4gKiB3cmFwcGVyJ3MgYGhyZWZgIHByb3BlcnR5IHdpbGwgdWx0aW1hdGVseSBzZXQgdGhlIGBocmVmYCBvbiB0aGUgaW5uZXIgbGluay5cbiAqIE1vcmVvdmVyLCB0aGUgdGV4dCBjb250ZW50IG9mIHRoZSBgPHdyYXBwZWQtYT5gIGVsZW1lbnQgd2lsbCBhcHBlYXIgaW5zaWRlXG4gKiB0aGUgaW5uZXIgbGluay4gVGhlIHJlc3VsdCBvZiBhbGwgdGhpcyBpcyB0aGF0IHRoZSB1c2VyIHdpbGwgc2VlIHdoYXQgKmxvb2tzKlxuICogbGlrZSBhIG5vcm1hbCBsaW5rLCBqdXN0IGFzIGlmIHlvdSBoYWQgd3JpdHRlblxuICogYDxhIGhyZWY9XCJodHRwOi8vZXhhbXBsZS5jb20vXCI+Q2xpY2sgaGVyZTwvYT5gLiBIb3dldmVyLCB0aGUgYWN0dWFsIGVsZW1lbnRcbiAqIHdpbGwgYmUgYW4gaW5zdGFuY2Ugb2YgeW91ciBjdXN0b20gY2xhc3MsIHdpdGggd2hhdGV2ZXIgYmVoYXZpb3IgeW91J3ZlXG4gKiBkZWZpbmVkIGZvciBpdC5cbiAqXG4gKiBXcmFwcGVkIGVsZW1lbnRzIHNob3VsZCByYWlzZSB0aGUgc2FtZSBldmVudHMgYXMgdGhlIG9yaWdpbmFsIHN0YW5kYXJkXG4gKiBlbGVtZW50cy4gRS5nLiwgaWYgeW91IHdyYXAgYW4gYDxpbWc+YCBlbGVtZW50LCB0aGUgd3JhcHBlZCByZXN1bHQgd2lsbCByYWlzZVxuICogdGhlIHN0YW5kYXJkIGBsb2FkYCBldmVudCBhcyBleHBlY3RlZC5cbiAqXG4gKiBTb21lIGVsZW1lbnRzLCBzdWNoIGFzIGA8Ym9keT5gLCBgPGh0bWw+YCwgYW5kIGA8c3R5bGU+YCBjYW5ub3QgYmUgd3JhcHBlZFxuICogYW5kIHN0aWxsIGFjaGlldmUgdGhlaXIgc3RhbmRhcmQgYmVoYXZpb3IuXG4gKlxuICogQGV4dGVuZHMgRWxlbWVudEJhc2VcbiAqL1xuY2xhc3MgV3JhcHBlZFN0YW5kYXJkRWxlbWVudCBleHRlbmRzIEVsZW1lbnRCYXNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgLy8gTGlzdGVuIGZvciBhbnkgZXZlbnRzIHJhaXNlZCBieSB0aGUgaW5uZXIgZWxlbWVudCB3aGljaCB3aWxsIG5vdFxuICAgIC8vIGF1dG9tYXRpY2FsbHkgYmUgcmV0YXJnZXR0ZWQgYWNyb3NzIHRoZSBTaGFkb3cgRE9NIGJvdW5kYXJ5LCBhbmQgcmUtcmFpc2VcbiAgICAvLyB0aG9zZSBldmVudHMgd2hlbiB0aGV5IGhhcHBlbi5cbiAgICAvL1xuICAgIC8vIE5vdGU6IEl0J3MgdW5jbGVhciB3aHkgd2UgbmVlZCB0byBkbyB0aGlzIGluIHRoZSBTaGFkb3cgRE9NIHBvbHlmaWxsLlxuICAgIC8vIEluIHRoZW9yeSwgZXZlbnRzIGluIHRoZSBsaWdodCBET00gc2hvdWxkIGJ1YmJsZSBhcyBub3JtYWwuIEJ1dCB0aGlzXG4gICAgLy8gY29kZSBhcHBlYXJzIHRvIGJlIHJlcXVpcmVkIGluIHRoZSBwb2x5ZmlsbCBjYXNlIGFzIHdlbGwuXG4gICAgY29uc3QgZXZlbnROYW1lcyA9IHJlcmFpc2VFdmVudHNbdGhpcy5leHRlbmRzXSB8fCBbXTtcbiAgICBldmVudE5hbWVzLmZvckVhY2goZXZlbnROYW1lID0+IHtcbiAgICAgIHRoaXMuaW5uZXIuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIHJlYWxFdmVudCA9PiB7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEV2ZW50KGV2ZW50TmFtZSwge1xuICAgICAgICAgIGJ1YmJsZXM6IGV2ZW50QnViYmxlc1tldmVudE5hbWVdIHx8IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQSBkZXNjcmlwdGlvbiBmb3IgdGhlIHVzZXIgb2YgdGhlIGVsZW1lbnQncyBwdXJwb3NlIG9uIHRoZSBwYWdlLiBTZXR0aW5nXG4gICAqIHRoaXMgYXBwbGllcyB0aGUgbGFiZWwgdG8gdGhlIGlubmVyIGVsZW1lbnQsIGVuc3VyaW5nIHRoYXQgc2NyZWVuIHJlYWRlcnNcbiAgICogYW5kIG90aGVyIGFzc2lzdGl2ZSB0ZWNobm9sb2dpZXMgd2lsbCBwcm92aWRlIGEgbWVhbmluZ2Z1bCBkZXNjcmlwdGlvbiB0b1xuICAgKiB0aGUgdXNlci5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCBhcmlhTGFiZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5uZXIuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJyk7XG4gIH1cbiAgc2V0IGFyaWFMYWJlbChsYWJlbCkge1xuICAgIC8vIFByb3BhZ2F0ZSB0aGUgQVJJQSBsYWJlbCB0byB0aGUgaW5uZXIgdGV4dGFyZWEuXG4gICAgdGhpcy5pbm5lci5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBsYWJlbCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHJlZmVyZW5jZSB0byB0aGUgaW5uZXIgc3RhbmRhcmQgSFRNTCBlbGVtZW50LlxuICAgKlxuICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAqL1xuICBnZXQgaW5uZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuJC5pbm5lcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgY29waWVkIGludG8gdGhlIHNoYWRvdyB0cmVlIG9mIG5ldyBpbnN0YW5jZXMgb2YgdGhpcyBlbGVtZW50LlxuICAgKlxuICAgKiBUaGUgZGVmYXVsdCB2YWx1ZSBvZiB0aGlzIHByb3BlcnR5IGlzIGEgdGVtcGxhdGUgdGhhdCBpbmNsdWRlcyBhbiBpbnN0YW5jZVxuICAgKiB0aGUgc3RhbmRhcmQgZWxlbWVudCBiZWluZyB3cmFwcGVkLCB3aXRoIGEgYDxzbG90PmAgZWxlbWVudCBpbnNpZGUgdGhhdFxuICAgKiB0byBwaWNrIHVwIHRoZSBlbGVtZW50J3MgbGlnaHQgRE9NIGNvbnRlbnQuIEZvciBleGFtcGxlLCBpZiB5b3Ugd3JhcCBhblxuICAgKiBgPGE+YCBlbGVtZW50LCB0aGVuIHRoZSBkZWZhdWx0IHRlbXBsYXRlIHdpbGwgbG9vayBsaWtlOlxuICAgKlxuICAgKiAgICAgPHRlbXBsYXRlPlxuICAgKiAgICAgICA8c3R5bGU+XG4gICAqICAgICAgIDpob3N0IHtcbiAgICogICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAqICAgICAgIH1cbiAgICogICAgICAgPC9zdHlsZT5cbiAgICogICAgICAgPGEgaWQ9XCJpbm5lclwiPlxuICAgKiAgICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICogICAgICAgPC9hPlxuICAgKiAgICAgPC90ZW1wbGF0ZT5cbiAgICpcbiAgICogVGhlIGBkaXNwbGF5YCBzdHlsaW5nIGFwcGxpZWQgdG8gdGhlIGhvc3Qgd2lsbCBiZSBgYmxvY2tgIGZvciBlbGVtZW50cyB0aGF0XG4gICAqIGFyZSBibG9jayBlbGVtZW50cyBieSBkZWZhdWx0LCBhbmQgYGlubGluZS1ibG9ja2AgKG5vdCBgaW5saW5lYCkgZm9yIG90aGVyXG4gICAqIGVsZW1lbnRzLlxuICAgKlxuICAgKiBJZiB5b3UnZCBsaWtlIHRoZSB0ZW1wbGF0ZSB0byBpbmNsdWRlIG90aGVyIGVsZW1lbnRzLCB0aGVuIG92ZXJyaWRlIHRoaXNcbiAgICogcHJvcGVydHkgYW5kIHJldHVybiBhIHRlbXBsYXRlIG9mIHlvdXIgb3duLiBUaGUgdGVtcGxhdGUgc2hvdWxkIGluY2x1ZGUgYW5cbiAgICogaW5zdGFuY2Ugb2YgdGhlIHN0YW5kYXJkIEhUTUwgZWxlbWVudCB5b3UgYXJlIHdyYXBwaW5nLCBhbmQgdGhlIElEIG9mIHRoYXRcbiAgICogZWxlbWVudCBzaG91bGQgYmUgXCJpbm5lclwiLlxuICAgKlxuICAgKiBAdHlwZSB7KHN0cmluZ3xIVE1MVGVtcGxhdGVFbGVtZW50KX1cbiAgICovXG4gIGdldCBbc3ltYm9scy50ZW1wbGF0ZV0oKSB7XG4gICAgY29uc3QgZGlzcGxheSA9IGJsb2NrRWxlbWVudHMuaW5kZXhPZih0aGlzLmV4dGVuZHMpID49IDAgP1xuICAgICAgJ2Jsb2NrJyA6XG4gICAgICAnaW5saW5lLWJsb2NrJztcbiAgICByZXR1cm4gYDxzdHlsZT46aG9zdCB7IGRpc3BsYXk6ICR7ZGlzcGxheX19PC9zdHlsZT48JHt0aGlzLmV4dGVuZHN9IGlkPVwiaW5uZXJcIj48c2xvdD48L3Nsb3Q+PC8ke3RoaXMuZXh0ZW5kc31gO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBjbGFzcyB0aGF0IHdyYXBzIGEgc3RhbmRhcmQgSFRNTCBlbGVtZW50LlxuICAgKlxuICAgKiBOb3RlIHRoYXQgdGhlIHJlc3VsdGluZyBjbGFzcyBpcyBhIHN1YmNsYXNzIG9mIFdyYXBwZWRTdGFuZGFyZEVsZW1lbnQsIG5vdFxuICAgKiB0aGUgc3RhbmRhcmQgY2xhc3MgYmVpbmcgd3JhcHBlZC4gRS5nLiwgaWYgeW91IGNhbGxcbiAgICogYFdyYXBwZWRTdGFuZGFyZEVsZW1lbnQud3JhcCgnYScpYCwgeW91IHdpbGwgZ2V0IGEgY2xhc3Mgd2hvc2Ugc2hhZG93IHRyZWVcbiAgICogd2lsbCBpbmNsdWRlIGFuIGFuY2hvciBlbGVtZW50LCBidXQgdGhlIGNsYXNzIHdpbGwgKm5vdCogaW5oZXJpdCBmcm9tXG4gICAqIEhUTUxBbmNob3JFbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXh0ZW5kc1RhZyAtIHRoZSBzdGFuZGFyZCBIVE1MIGVsZW1lbnQgdGFnIHRvIGV4dGVuZFxuICAgKi9cbiAgc3RhdGljIHdyYXAoZXh0ZW5kc1RhZykge1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBuZXcgY2xhc3MuXG4gICAgY2xhc3MgV3JhcHBlZCBleHRlbmRzIFdyYXBwZWRTdGFuZGFyZEVsZW1lbnQge31cblxuICAgIC8vIEluZGljYXRlIHdoaWNoIHRhZyBpdCB3cmFwcy5cbiAgICBXcmFwcGVkLnByb3RvdHlwZS5leHRlbmRzID0gZXh0ZW5kc1RhZztcblxuICAgIC8vIENyZWF0ZSBnZXR0ZXIvc2V0dGVycyB0aGF0IGRlbGVnYXRlIHRvIHRoZSB3cmFwcGVkIGVsZW1lbnQuXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZXh0ZW5kc1RhZyk7XG4gICAgY29uc3QgZXh0ZW5kc1Byb3RvdHlwZSA9IGVsZW1lbnQuY29uc3RydWN0b3IucHJvdG90eXBlO1xuICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZXh0ZW5kc1Byb3RvdHlwZSk7XG4gICAgbmFtZXMuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZXh0ZW5kc1Byb3RvdHlwZSwgbmFtZSk7XG4gICAgICAgIGNvbnN0IGRlbGVnYXRlID0gY3JlYXRlUHJvcGVydHlEZWxlZ2F0ZShuYW1lLCBkZXNjcmlwdG9yKTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdyYXBwZWQucHJvdG90eXBlLCBuYW1lLCBkZWxlZ2F0ZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gV3JhcHBlZDtcbiAgfVxuXG59XG5cblxuZnVuY3Rpb24gY3JlYXRlUHJvcGVydHlEZWxlZ2F0ZShuYW1lLCBkZXNjcmlwdG9yKSB7XG4gIGNvbnN0IGRlbGVnYXRlID0ge1xuICAgIGNvbmZpZ3VyYWJsZTogZGVzY3JpcHRvci5jb25maWd1cmFibGUsXG4gICAgZW51bWVyYWJsZTogZGVzY3JpcHRvci5lbnVtZXJhYmxlLFxuICB9O1xuICBpZiAoZGVzY3JpcHRvci5nZXQpIHtcbiAgICBkZWxlZ2F0ZS5nZXQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmlubmVyW25hbWVdO1xuICAgIH07XG4gIH1cbiAgaWYgKGRlc2NyaXB0b3Iuc2V0KSB7XG4gICAgZGVsZWdhdGUuc2V0ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHRoaXMuaW5uZXJbbmFtZV0gPSB2YWx1ZTtcbiAgICB9O1xuICB9XG4gIGlmIChkZXNjcmlwdG9yLndyaXRhYmxlKSB7XG4gICAgZGVsZWdhdGUud3JpdGFibGUgPSBkZXNjcmlwdG9yLndyaXRhYmxlO1xuICB9XG4gIHJldHVybiBkZWxlZ2F0ZTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBXcmFwcGVkU3RhbmRhcmRFbGVtZW50O1xuIl19
