(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createSymbol = require('../../basic-component-mixins/src/createSymbol');

var _createSymbol2 = _interopRequireDefault(_createSymbol);

var _WrappedStandardElement = require('../../basic-wrapped-standard-element/src/WrappedStandardElement');

var _WrappedStandardElement2 = _interopRequireDefault(_WrappedStandardElement);

var _DistributedChildrenAsContent = require('../../basic-component-mixins/src/DistributedChildrenAsContent');

var _DistributedChildrenAsContent2 = _interopRequireDefault(_DistributedChildrenAsContent);

var _Generic = require('../../basic-component-mixins/src/Generic');

var _Generic2 = _interopRequireDefault(_Generic);

var _ObserveContentChanges = require('../../basic-component-mixins/src/ObserveContentChanges');

var _ObserveContentChanges2 = _interopRequireDefault(_ObserveContentChanges);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Symbols for private data members on an element.
var lineHeightSymbol = (0, _createSymbol2.default)('lineHeight');
var minimumRowsSymbol = (0, _createSymbol2.default)('minimumRows');
var valueTracksContentSymbol = (0, _createSymbol2.default)('valueTracksContent');

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
 * @mixes Generic
 * @mixes DistributedChildrenAsContent
 * @mixes ObserveContentChanges
 */

var AutosizeTextarea = function (_WrappedStandardEleme) {
  _inherits(AutosizeTextarea, _WrappedStandardEleme);

  function AutosizeTextarea() {
    _classCallCheck(this, AutosizeTextarea);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AutosizeTextarea).apply(this, arguments));
  }

  _createClass(AutosizeTextarea, [{
    key: 'attachedCallback',

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
    value: function attachedCallback() {
      if (_get(Object.getPrototypeOf(AutosizeTextarea.prototype), 'attachedCallback', this)) {
        _get(Object.getPrototypeOf(AutosizeTextarea.prototype), 'attachedCallback', this).call(this);
      }
      initializeWhenRendered(this);
    }

    /**
     * Resize the element such that the textarea can exactly contain its content.
     * By default, this method is invoked whenever the text content changes.
     */

  }, {
    key: 'autoSize',
    value: function autoSize() {
      // If we had speculatively added an extra line because of an Enter keypress,
      // we can now hide the extra line.
      this.$.extraLine.style.display = 'none';

      // We resize by copying the textarea contents to the element itself; the
      // text will then appear (via <content>) inside the invisible div. If
      // we've set things up correctly, this new content should take up the same
      // amount of room as the same text in the textarea. Updating the element's
      // content adjusts the element's size, which in turn will make the textarea
      // the correct height.
      this.$.textCopy.textContent = this.value;
    }
  }, {
    key: 'contentChanged',
    value: function contentChanged() {
      if (_get(Object.getPrototypeOf(AutosizeTextarea.prototype), 'contentChanged', this)) {
        _get(Object.getPrototypeOf(AutosizeTextarea.prototype), 'contentChanged', this).call(this);
      }
      if (this[valueTracksContentSymbol]) {
        var text = getTextContent(this);
        this.inner.value = unescapeHtml(text);
        valueChanged(this);
      }
    }
  }, {
    key: 'createdCallback',
    value: function createdCallback() {
      var _this2 = this;

      if (_get(Object.getPrototypeOf(AutosizeTextarea.prototype), 'createdCallback', this)) {
        _get(Object.getPrototypeOf(AutosizeTextarea.prototype), 'createdCallback', this).call(this);
      }

      this.inner.addEventListener('input', function (event) {
        valueChanged(_this2);
      });
      this.inner.addEventListener('keypress', function (event) {
        keypress(_this2, event);
      });

      // Set defaults.
      if (typeof this.minimumRows === 'undefined') {
        this.minimumRows = this.defaults.minimumRows;
      }

      // A standard textarea has its value track its textContent by default.
      // That is, changes to textContent update the value. However, if an attempt
      // is made to change the value directly, this breaks the automatic tracking.
      // From that point on, changes to textContent do *not* update the value.
      this[valueTracksContentSymbol] = true;
    }
  }, {
    key: 'defaults',
    get: function get() {
      var defaults = _get(Object.getPrototypeOf(AutosizeTextarea.prototype), 'defaults', this) || {};
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
    key: 'template',
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
}(_WrappedStandardElement2.default.wrap('textarea').compose(_DistributedChildrenAsContent2.default, _Generic2.default, _ObserveContentChanges2.default));

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

},{"../../basic-component-mixins/src/DistributedChildrenAsContent":5,"../../basic-component-mixins/src/Generic":6,"../../basic-component-mixins/src/ObserveContentChanges":7,"../../basic-component-mixins/src/createSymbol":10,"../../basic-wrapped-standard-element/src/WrappedStandardElement":13}],2:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Memoized map of attribute to property names.
var attributeToPropertyNames = {};

/* Exported function extends a base class with AttributeMarshalling. */

exports.default = function (base) {

  /**
   * Mixin which marshalls attributes to properties (and eventually vice versa).
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
   *     class MyElement extends AttributeMarshalling(HTMLElement) {
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

      return _possibleConstructorReturn(this, Object.getPrototypeOf(AttributeMarshalling).apply(this, arguments));
    }

    _createClass(AttributeMarshalling, [{
      key: "attributeChangedCallback",

      /*
       * Handle a change to the attribute with the given name.
       */
      value: function attributeChangedCallback(attributeName, oldValue, newValue) {
        if (_get(Object.getPrototypeOf(AttributeMarshalling.prototype), "attributeChangedCallback", this)) {
          _get(Object.getPrototypeOf(AttributeMarshalling.prototype), "attributeChangedCallback", this).call(this);
        }
        var propertyName = attributeToPropertyNames[attributeName];
        if (!propertyName) {
          // Convert and memoize.
          propertyName = attributeToPropertyName(attributeName);
          attributeToPropertyNames[attributeName] = propertyName;
        }
        // If the attribute name corresponds to a property name, set the property.
        // Ignore standard HTMLElement properties handled by the DOM.
        if (propertyName in this && !(propertyName in HTMLElement.prototype)) {
          this[propertyName] = newValue;
        }
      }
    }]);

    return AttributeMarshalling;
  }(base);

  return AttributeMarshalling;
};

// Convert camel case fooBar name to hyphenated foo-bar.

function attributeToPropertyName(attributeName) {
  var propertyName = attributeName.replace(/-([a-z])/g, function (m) {
    return m[1].toUpperCase();
  });
  return propertyName;
}

},{}],3:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Composable).apply(this, arguments));
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
       *     let MyClass = Composable(BaseClass).compose(
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

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Subclass).apply(this, arguments));
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
  var ignorePropertyNames = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];

  Object.getOwnPropertyNames(source).forEach(function (name) {
    if (ignorePropertyNames.indexOf(name) < 0) {
      var descriptor = Object.getOwnPropertyDescriptor(source, name);
      Object.defineProperty(target, name, descriptor);
    }
  });
  return target;
}

},{}],4:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// TODO: Rationalize with new Custom Elements API.
// TODO: Consider renaming to match Custom Elements API.

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

      return _possibleConstructorReturn(this, Object.getPrototypeOf(DistributedChildren).apply(this, arguments));
    }

    _createClass(DistributedChildren, [{
      key: "distributedChildren",

      /**
       * An in-order collection of children, expanding any slot elements. Like the
       * standard children property, this skips text nodes.
       *
       * @type {HTMLElement[]}
       */
      get: function get() {
        return expandContentElements(this.children, false);
      }

      /**
       * An in-order collection of child nodes, expanding any slot elements. Like
       * the standard childNodes property, this includes text nodes.
       *
       * @type {Node[]}
       */

    }, {
      key: "distributedChildNodes",
      get: function get() {
        return expandContentElements(this.childNodes, true);
      }

      /**
       * The concatenated text content of all child nodes, expanding any slot
       * elements.
       *
       * @type {string}
       */

    }, {
      key: "distributedTextContent",
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
    // we do a simplistic check to see if the tag name is "slot" or "content".
    if (node.localName === "slot" || node.localName === "content") {
      // Use the nodes assigned to this node instead.
      var assignedNodes = undefined;
      if (node.assignedNodes) {
        // slot element
        assignedNodes = node.assignedNodes({ flatten: true });
      } else if (node.getDistributedNodes) {
        // content element
        assignedNodes = node.getDistributedNodes();
      }
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

},{}],5:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Exported function extends a base class with DistributedChildrenAsContent. */

exports.default = function (base) {

  /**
   * Mixin which defines a component's content as its children, expanding any
   * nodes distributed to the component's slots.
   *
   * This mixin is intended for use with the
   * [DistributedChildren](DistributedChildren.md) mixin. See that mixin for a
   * discussion of how that works. This DistributedChildrenAsContent mixin
   * provides an easy way of defining the "content" of a component as the
   * component's distributed children. That in turn lets mixins like
   * [ContentAsItems](ContentAsItems.md) manipulate the children as list items.
   */

  var DistributedChildrenAsContent = function (_base) {
    _inherits(DistributedChildrenAsContent, _base);

    function DistributedChildrenAsContent() {
      _classCallCheck(this, DistributedChildrenAsContent);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(DistributedChildrenAsContent).apply(this, arguments));
    }

    _createClass(DistributedChildrenAsContent, [{
      key: 'content',

      /**
       * The content of this component, defined to be the flattened array of
       * children distributed to the component.
       *
       * @type {HTMLElement[]}
       */
      get: function get() {
        return this.distributedChildren;
      },
      set: function set(value) {
        if ('content' in base.prototype) {
          _set(Object.getPrototypeOf(DistributedChildrenAsContent.prototype), 'content', value, this);
        }
      }
    }]);

    return DistributedChildrenAsContent;
  }(base);

  return DistributedChildrenAsContent;
};

},{}],6:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createSymbol = require('./createSymbol');

var _createSymbol2 = _interopRequireDefault(_createSymbol);

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
   *       ... Generic appearance defined here ...
   *     }
   *
   * This makes it easy to remove all default styling — set the `generic`
   * attribute to false, and all default styling will be removed.
   */

  var Generic = function (_base) {
    _inherits(Generic, _base);

    function Generic() {
      _classCallCheck(this, Generic);

      // Set defaults.

      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Generic).call(this));

      if (typeof _this.generic === 'undefined') {
        _this.generic = _this.defaults.generic;
      }
      return _this;
    }

    // This mixin doesn't actually respond to attribute changes, but relies
    // on separately-defined behavior (e.g., in AttributeMarshalling) for that.
    // Still, we need define a baseline attributeChangedCallback that does
    // nothing, in case this mixin gets used on its own.

    _createClass(Generic, [{
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(name, oldValue, newValue) {
        if (_get(Object.getPrototypeOf(Generic.prototype), 'attributeChangedCallback', this)) {
          _get(Object.getPrototypeOf(Generic.prototype), 'attributeChangedCallback', this).call(this, name, oldValue, newValue);
        }
      }
    }, {
      key: 'defaults',
      get: function get() {
        var defaults = _get(Object.getPrototypeOf(Generic.prototype), 'defaults', this) || {};
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
        if ('generic' in base.prototype) {
          _set(Object.getPrototypeOf(Generic.prototype), 'generic', value, this);
        }
        // We roll our own attribute setting so that an explicitly false value
        // shows up as generic="false".
        if (typeof value === 'string') {
          value = value !== 'false';
        }
        this[genericSymbol] = value;
        if (value === false) {
          // Explicitly use false string.
          this.setAttribute('generic', 'false');
        } else if (value == null) {
          // Explicitly remove attribute.
          this.removeAttribute('generic');
        } else {
          // Use the empty string to get attribute to appear with no value.
          this.setAttribute('generic', '');
        }
      }
    }], [{
      key: 'observedAttributes',
      get: function get() {
        var attributes = base.observedAttributes || [];
        return attributes.concat('generic');
      }
    }]);

    return Generic;
  }(base);

  return Generic;
};

},{"./createSymbol":10}],7:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createSymbol = require('./createSymbol');

var _createSymbol2 = _interopRequireDefault(_createSymbol);

var _microtask = require('./microtask');

var _microtask2 = _interopRequireDefault(_microtask);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Symbols for private data members on an element.
var contentChangeObserverSymbol = (0, _createSymbol2.default)('contentChangeObserver');

// TODO: Should this be renamed to something like DistributedChildrenChanged?

/* Exported function extends a base class with ObserveContentChanges. */

exports.default = function (base) {

  /**
   * Mixin which wires up mutation observers to report any changes in a
   * component's content (direct children, or nodes distributed to slots).
   *
   * For the time being, this can only support a single level of distributed
   * content. That is, if a component contains a slot, and the set of nodes
   * directly assigned to that slot changes, then this mixin will detect the
   * change. However, this mixin does not yet detect changes in reprojected
   * nodes. If a component's host places a slot as a child of the component
   * instance, nodes assigned to the outer host will be assigned to the host's
   * slot, then reassigned to the slot element inside the component. Changes in
   * such reprojected nodes will not (yet) be detected by this mixin.
   *
   * For comparison, see Polymer's observeNodes API, which does solve the
   * problem of tracking changes in reprojected content.
   *
   * Note: The web platform team creating the specifications for web components
   * plan to request that a new type of MutationObserver option be defined that
   * lets a component monitor changes in distributed children. This mixin will
   * be updated to take advantage of that MutationObserver option when that
   * becomes available.
   */

  var ObserveContentChanges = function (_base) {
    _inherits(ObserveContentChanges, _base);

    function ObserveContentChanges() {
      _classCallCheck(this, ObserveContentChanges);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(ObserveContentChanges).apply(this, arguments));
    }

    _createClass(ObserveContentChanges, [{
      key: 'createdCallback',
      value: function createdCallback() {
        var _this2 = this;

        if (_get(Object.getPrototypeOf(ObserveContentChanges.prototype), 'createdCallback', this)) {
          _get(Object.getPrototypeOf(ObserveContentChanges.prototype), 'createdCallback', this).call(this);
        }
        observeContentChanges(this);

        // Make an initial call to contentChanged() so that the component can do
        // initialization that it normally does when content changes.
        //
        // This will invoke contentChanged() handlers in other mixins. In order
        // that those mixins have a chance to complete their own initialization,
        // we add the contentChanged() call to the microtask queue.
        (0, _microtask2.default)(function () {
          return _this2.contentChanged();
        });
      }

      /**
       * Invoked when the contents of the component (including distributed
       * children) have changed.
       *
       * This method is also invoked when a component is first instantiated; the
       * contents have essentially "changed" from being nothing. This allows the
       * component to perform initial processing of its children.
       */

    }, {
      key: 'contentChanged',
      value: function contentChanged() {
        if (_get(Object.getPrototypeOf(ObserveContentChanges.prototype), 'contentChanged', this)) {
          _get(Object.getPrototypeOf(ObserveContentChanges.prototype), 'contentChanged', this).call(this);
        }
        var event = new CustomEvent('content-changed');
        this.dispatchEvent(event);
      }

      /**
       * This event is raised when the component's contents (including distributed
       * children) have changed.
       *
       * @memberof ObserveContentChanges
       * @event content-changed
       */

    }]);

    return ObserveContentChanges;
  }(base);

  return ObserveContentChanges;
};

// TODO: Decide whether we want an option to track changes to children
// attributes.

function observeContentChanges(element) {
  element[contentChangeObserverSymbol] = new MutationObserver(function () {
    return element.contentChanged();
  });
  element[contentChangeObserverSymbol].observe(element, {
    // attributes: true,
    characterData: true,
    childList: true,
    subtree: true
  });
}

},{"./createSymbol":10,"./microtask":11}],8:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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
   * create that tree yourself, or make use of the
   * [ShadowTemplate](ShadowTemplate.md) mixin.
   *
   * This mixin is inspired by Polymer's [automatic
   * node finding](https://www.polymer-project.org/1.0/docs/devguide/local-dom.html#node-finding)
   * feature.
   */

  var ShadowElementReferences = function (_base) {
    _inherits(ShadowElementReferences, _base);

    function ShadowElementReferences() {
      _classCallCheck(this, ShadowElementReferences);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(ShadowElementReferences).apply(this, arguments));
    }

    _createClass(ShadowElementReferences, [{
      key: 'createdCallback',
      value: function createdCallback() {
        var _this2 = this;

        if (_get(Object.getPrototypeOf(ShadowElementReferences.prototype), 'createdCallback', this)) {
          _get(Object.getPrototypeOf(ShadowElementReferences.prototype), 'createdCallback', this).call(this);
        }
        if (this.shadowRoot) {
          // Look for elements in the shadow subtree that have id attributes.
          // An alternatively implementation of this mixin would be to just define
          // a this.$ getter that lazily does this search the first time someone
          // tries to access this.$. That might introduce some complexity – if the
          // the tree changed after it was first populated, the result of
          // searching for a node might be somewhat unpredictable.
          this.$ = {};
          var nodesWithIds = this.shadowRoot.querySelectorAll('[id]');
          [].forEach.call(nodesWithIds, function (node) {
            var id = node.getAttribute('id');
            _this2.$[id] = node;
          });
        }
      }

      /**
       * The collection of references to the elements with IDs in a component's
       * Shadow DOM subtree.
       *
       * @type {object}
       * @member $
       */

    }]);

    return ShadowElementReferences;
  }(base);

  return ShadowElementReferences;
};

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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
   *     class MyElement extends ShadowTemplate(HTMLElement) {
   *       get template() {
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

      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ShadowTemplate).call(this));

      var template = _this.template;
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

},{}],10:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){
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

},{}],12:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Composable = require('../../basic-component-mixins/src/Composable');

var _Composable2 = _interopRequireDefault(_Composable);

var _ShadowTemplate = require('../../basic-component-mixins/src/ShadowTemplate');

var _ShadowTemplate2 = _interopRequireDefault(_ShadowTemplate);

var _ShadowElementReferences = require('../../basic-component-mixins/src/ShadowElementReferences');

var _ShadowElementReferences2 = _interopRequireDefault(_ShadowElementReferences);

var _AttributeMarshalling = require('../../basic-component-mixins/src/AttributeMarshalling');

var _AttributeMarshalling2 = _interopRequireDefault(_AttributeMarshalling);

var _DistributedChildren = require('../../basic-component-mixins/src/DistributedChildren');

var _DistributedChildren2 = _interopRequireDefault(_DistributedChildren);

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
 * @mixes AttributeMarshalling 
 * @mixes Composable
 * @mixes DistributedChildren
 * @mixes ShadowElementReferences
 * @mixes ShadowTemplate
 */

var ElementBase = function (_Composable$compose) {
  _inherits(ElementBase, _Composable$compose);

  function ElementBase() {
    _classCallCheck(this, ElementBase);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ElementBase).apply(this, arguments));
  }

  _createClass(ElementBase, [{
    key: 'log',

    /*
     * Debugging utility: logs a message, prefixed by the component's tag.
     */
    value: function log(text) {
      if (_get(Object.getPrototypeOf(ElementBase.prototype), 'log', this)) {
        _get(Object.getPrototypeOf(ElementBase.prototype), 'log', this).call(this, text);
      }
      console.log(this.localName + ': ' + text);
    }
  }]);

  return ElementBase;
}((0, _Composable2.default)(HTMLElement).compose(_ShadowTemplate2.default, // before node finding, so shadow root is populated
_ShadowElementReferences2.default, // before marshalling, so properties can use refs
_AttributeMarshalling2.default, _DistributedChildren2.default));

exports.default = ElementBase;

},{"../../basic-component-mixins/src/AttributeMarshalling":2,"../../basic-component-mixins/src/Composable":3,"../../basic-component-mixins/src/DistributedChildren":4,"../../basic-component-mixins/src/ShadowElementReferences":8,"../../basic-component-mixins/src/ShadowTemplate":9}],13:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ElementBase2 = require('../../basic-element-base/src/ElementBase');

var _ElementBase3 = _interopRequireDefault(_ElementBase2);

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

    return _possibleConstructorReturn(this, Object.getPrototypeOf(WrappedStandardElement).apply(this, arguments));
  }

  _createClass(WrappedStandardElement, [{
    key: 'createdCallback',
    value: function createdCallback() {
      var _this2 = this;

      if (_get(Object.getPrototypeOf(WrappedStandardElement.prototype), 'createdCallback', this)) {
        _get(Object.getPrototypeOf(WrappedStandardElement.prototype), 'createdCallback', this).call(this);
      }

      // Listen for any events raised by the inner element which will not
      // automatically be retargetted across the Shadow DOM boundary, and re-raise
      // those events when they happen.
      //
      // Note: It's unclear why we need to do this in the Shadow DOM polyfill.
      // In theory, events in the light DOM should bubble as normal. But this
      // code appears to be required in the polyfill case as well.
      var eventNames = reraiseEvents[this.extends] || [];
      eventNames.forEach(function (eventName) {
        _this2.inner.addEventListener(eventName, function (realEvent) {
          var event = new Event(eventName, {
            bubbles: eventBubbles[eventName] || false
          });
          _this2.dispatchEvent(event);
        });
      });
    }

    /**
     * Returns a reference to the inner standard HTML element.
     *
     * @type {HTMLElement}
     */

  }, {
    key: 'ariaLabel',

    /**
     * A description for the user of the element's purpose on the page. Setting
     * this applies the label to the inner element, ensuring that screen readers
     * and other assistive technologies will provide a meaningful description to
     * the user.
     *
     * @type {string}
     */
    get: function get() {
      return this.inner.getAttribute('aria-label');
    },
    set: function set(label) {
      // Propagate the ARIA label to the inner textarea.
      this.inner.setAttribute('aria-label', label);
    }
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
    key: 'template',
    get: function get() {
      var display = blockElements.indexOf(this.extends) >= 0 ? 'block' : 'inline-block';
      // TODO: Use slot instead of content.
      return '<style>:host { display: ' + display + '}</style><' + this.extends + ' id="inner"><content></content></' + this.extends;
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

          return _possibleConstructorReturn(this, Object.getPrototypeOf(Wrapped).apply(this, arguments));
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

},{"../../basic-element-base/src/ElementBase":12}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwYWNrYWdlcy9iYXNpYy1hdXRvc2l6ZS10ZXh0YXJlYS9zcmMvQXV0b3NpemVUZXh0YXJlYS5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0F0dHJpYnV0ZU1hcnNoYWxsaW5nLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ29tcG9zYWJsZS5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW4uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50LmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvR2VuZXJpYy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL09ic2VydmVDb250ZW50Q2hhbmdlcy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NoYWRvd0VsZW1lbnRSZWZlcmVuY2VzLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2hhZG93VGVtcGxhdGUuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9jcmVhdGVTeW1ib2wuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9taWNyb3Rhc2suanMiLCJwYWNrYWdlcy9iYXNpYy1lbGVtZW50LWJhc2Uvc3JjL0VsZW1lbnRCYXNlLmpzIiwicGFja2FnZXMvYmFzaWMtd3JhcHBlZC1zdGFuZGFyZC1lbGVtZW50L3NyYy9XcmFwcGVkU3RhbmRhcmRFbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUUEs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RSxRQUFRLENBQUMsQ0FBQztPQUM1RCxDQUFDLENBQUM7O0FBRUgsYUFBTyxPQUFPLENBQUM7S0FDaEI7OztTQXRIRyxzQkFBc0I7OztBQTJINUIsU0FBUyxzQkFBc0IsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFO0FBQ2hELE1BQUksUUFBUSxHQUFHO0FBQ2IsZ0JBQVksRUFBRSxVQUFVLENBQUMsWUFBWTtBQUNyQyxjQUFVLEVBQUUsVUFBVSxDQUFDLFVBQVU7R0FDbEMsQ0FBQztBQUNGLE1BQUksVUFBVSxDQUFDLEdBQUcsRUFBRTtBQUNsQixZQUFRLENBQUMsR0FBRyxHQUFHLFlBQVc7QUFDeEIsYUFBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3pCLENBQUM7R0FDSDtBQUNELE1BQUksVUFBVSxDQUFDLEdBQUcsRUFBRTtBQUNsQixZQUFRLENBQUMsR0FBRyxHQUFHLFVBQVMsS0FBSyxFQUFFO0FBQzdCLFVBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO0tBQzFCLENBQUM7R0FDSDtBQUNELE1BQUksVUFBVSxDQUFDLFFBQVEsRUFBRTtBQUN2QixZQUFRLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUM7R0FDekM7QUFDRCxTQUFPLFFBQVEsQ0FBQztDQUNqQjs7a0JBR2Msc0JBQXNCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvY3JlYXRlU3ltYm9sJztcbmltcG9ydCBXcmFwcGVkU3RhbmRhcmRFbGVtZW50IGZyb20gJy4uLy4uL2Jhc2ljLXdyYXBwZWQtc3RhbmRhcmQtZWxlbWVudC9zcmMvV3JhcHBlZFN0YW5kYXJkRWxlbWVudCc7XG5pbXBvcnQgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50JztcbmltcG9ydCBHZW5lcmljIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0dlbmVyaWMnO1xuaW1wb3J0IE9ic2VydmVDb250ZW50Q2hhbmdlcyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9PYnNlcnZlQ29udGVudENoYW5nZXMnO1xuXG5cbi8vIFN5bWJvbHMgZm9yIHByaXZhdGUgZGF0YSBtZW1iZXJzIG9uIGFuIGVsZW1lbnQuXG5jb25zdCBsaW5lSGVpZ2h0U3ltYm9sID0gY3JlYXRlU3ltYm9sKCdsaW5lSGVpZ2h0Jyk7XG5jb25zdCBtaW5pbXVtUm93c1N5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnbWluaW11bVJvd3MnKTtcbmNvbnN0IHZhbHVlVHJhY2tzQ29udGVudFN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgndmFsdWVUcmFja3NDb250ZW50Jyk7XG5cblxuXG4vKipcbiAqIEEgdGV4dCBhcmVhIHRoYXQgbWFrZXMgaXRzZWxmIGJpZyBlbm91Z2ggdG8gc2hvdyBpdHMgY29udGVudC5cbiAqXG4gKiBbTGl2ZSBkZW1vXShodHRwOi8vYmFzaWN3ZWJjb21wb25lbnRzLm9yZy9iYXNpYy13ZWItY29tcG9uZW50cy9wYWNrYWdlcy9iYXNpYy1hdXRvc2l6ZS10ZXh0YXJlYS8pXG4gKlxuICogVGhpcyB0ZXh0IGlucHV0IGNvbXBvbmVudCBpcyB1c2VmdWwgaW4gc2l0dWF0aW9ucyB3aGVyZSB5b3Ugd2FudCB0byBhc2sgdGhlXG4gKiB1c2VyIHRvIGVudGVyIGFzIG11Y2ggdGV4dCBhcyB0aGV5IHdhbnQsIGJ1dCBkb24ndCB3YW50IHRvIHRha2UgdXAgYSBsb3Qgb2ZcbiAqIHJvb20gb24gdGhlIHBhZ2UuXG4gKlxuICogVGhlIGNvbXBvbmVudCB3b3JrcyBieSBjb3B5aW5nIHRoZSB0ZXh0IHRvIGFuIGludmlzaWJsZSBlbGVtZW50IHdoaWNoIHdpbGxcbiAqIGF1dG9tYXRpY2FsbHkgZ3JvdyBpbiBzaXplOyB0aGUgZXhwYW5kaW5nIGNvcHkgd2lsbCBleHBhbmQgdGhlIGNvbnRhaW5lcixcbiAqIHdoaWNoIGluIHR1cm4gd2lsbCB2ZXJ0aWNhbGx5IHN0cmV0Y2ggdGhlIHRleHQgYXJlYSB0byBtYXRjaC5cbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBnZW5lcmFsbHkgZXhwb3NlcyBhbGwgdGhlIHNhbWUgYXR0cmlidXRlcy9wcm9wZXJ0aWVzIGFzIGFcbiAqIHN0YW5kYXJkIEhUTUwgYDx0ZXh0YXJlYT5gLlxuICpcbiAqIEBtaXhlcyBHZW5lcmljXG4gKiBAbWl4ZXMgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudFxuICogQG1peGVzIE9ic2VydmVDb250ZW50Q2hhbmdlc1xuICovXG5jbGFzcyBBdXRvc2l6ZVRleHRhcmVhIGV4dGVuZHMgV3JhcHBlZFN0YW5kYXJkRWxlbWVudC53cmFwKCd0ZXh0YXJlYScpLmNvbXBvc2UoXG4gIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQsXG4gIEdlbmVyaWMsXG4gIE9ic2VydmVDb250ZW50Q2hhbmdlc1xuKSB7XG5cbiAgLy8gTm9ybWFsbHkgdGhlIHZhbHVlIG9mIHRoZSBlbGVtZW50IGlzIHNldCBhbmQgcmVhZCB0aHJvdWdoIGl0cyB2YWx1ZVxuICAvLyBhdHRyaWJ1dGUuIEFzIGEgY29udmVuaWVuY2UsIGFuZCB0byBtaXJyb3Igc3RhbmRhcmQgdGV4dGFyZWEgYmVoYXZpb3IsIGl0XG4gIC8vIGlzIHBvc3NpYmxlIHRvIHNldCB0aGUgY29udGVudCBvZiB0aGUgdGV4dGFyZWEgYnkgaW5jbHVkaW5nIHRleHQgYmV0d2VlblxuICAvLyB0aGUgb3BlbmluZyBhbmQgY2xvc2luZyB0YWcuIFRoaXMgd29ya3Mgb25seSBpbiBvbmUgZGlyZWN0aW9uOiBzZXR0aW5nIHRoZVxuICAvLyB0YWcgY29udGVudCB1cGRhdGVzIHRoZSB0ZXh0YXJlYSwgYnV0IHVzZXIgZWRpdHMgaW4gdGhlIHRleHRhcmVhIGFyZSBub3RcbiAgLy8gcmVmbGVjdGVkIGluIHRoZSB0YWcgY29udGVudC4gV2UgY2FwdHVyZSB0aGUgdmFsdWUgb2YgdGhlIGluaXRpYWwgdGV4dFxuICAvLyBjb250ZW50IGluIG9yZGVyIHRvIHNldCB0aGUgdmFsdWUgcHJvcGVydHkgZHVyaW5nIHRoZSBjcmVhdGUgZXZlbnQuXG4gIC8vIFRPRE86IE5vcm1hbGl6ZSBpbmRlbnRhdGlvbiBpbiB0aGUgdGV4dCBjb250ZW50LiBVc2VycyB3aWxsIG9mdGVuIHdhbnQgdG9cbiAgLy8gaW5kZW50IHRoZSBtYXJrdXAgc28gdGhhdCBpdCBsb29rcyBwcmV0dHkuIFdlIHNob3VsZCBkZXRlY3QgdGhlIGluZGVudGF0aW9uXG4gIC8vIGxldmVsIGFuZCByZW1vdmUgYW55IGluZGVudGF0aW9uIHdoaXRlc3BhY2VcbiAgLy8gVE9ETzogQ29uc2lkZXIgdXNpbmcgY29udGVudCBpbm5lckhUTUwgcmF0aGVyIHRoYW4gcGxhaW4gdGV4dC4gVGhlIG5hdGl2ZVxuICAvLyB0ZXh0YXJlYSBlbGVtZW50IHdpbGwgaW5jbHVkZSBIVE1MLCBub3QganVzdCB0aGUgc3RyaXBwZWQgdGV4dCwgYXMgaW5pdGlhbFxuICAvLyB2YWx1ZSBwcm9wZXJ0eSB0ZXh0LlxuICBhdHRhY2hlZENhbGxiYWNrKCkge1xuICAgIGlmIChzdXBlci5hdHRhY2hlZENhbGxiYWNrKSB7IHN1cGVyLmF0dGFjaGVkQ2FsbGJhY2soKTsgfVxuICAgIGluaXRpYWxpemVXaGVuUmVuZGVyZWQodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogUmVzaXplIHRoZSBlbGVtZW50IHN1Y2ggdGhhdCB0aGUgdGV4dGFyZWEgY2FuIGV4YWN0bHkgY29udGFpbiBpdHMgY29udGVudC5cbiAgICogQnkgZGVmYXVsdCwgdGhpcyBtZXRob2QgaXMgaW52b2tlZCB3aGVuZXZlciB0aGUgdGV4dCBjb250ZW50IGNoYW5nZXMuXG4gICAqL1xuICBhdXRvU2l6ZSgpIHtcbiAgICAvLyBJZiB3ZSBoYWQgc3BlY3VsYXRpdmVseSBhZGRlZCBhbiBleHRyYSBsaW5lIGJlY2F1c2Ugb2YgYW4gRW50ZXIga2V5cHJlc3MsXG4gICAgLy8gd2UgY2FuIG5vdyBoaWRlIHRoZSBleHRyYSBsaW5lLlxuICAgIHRoaXMuJC5leHRyYUxpbmUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgIC8vIFdlIHJlc2l6ZSBieSBjb3B5aW5nIHRoZSB0ZXh0YXJlYSBjb250ZW50cyB0byB0aGUgZWxlbWVudCBpdHNlbGY7IHRoZVxuICAgIC8vIHRleHQgd2lsbCB0aGVuIGFwcGVhciAodmlhIDxjb250ZW50PikgaW5zaWRlIHRoZSBpbnZpc2libGUgZGl2LiBJZlxuICAgIC8vIHdlJ3ZlIHNldCB0aGluZ3MgdXAgY29ycmVjdGx5LCB0aGlzIG5ldyBjb250ZW50IHNob3VsZCB0YWtlIHVwIHRoZSBzYW1lXG4gICAgLy8gYW1vdW50IG9mIHJvb20gYXMgdGhlIHNhbWUgdGV4dCBpbiB0aGUgdGV4dGFyZWEuIFVwZGF0aW5nIHRoZSBlbGVtZW50J3NcbiAgICAvLyBjb250ZW50IGFkanVzdHMgdGhlIGVsZW1lbnQncyBzaXplLCB3aGljaCBpbiB0dXJuIHdpbGwgbWFrZSB0aGUgdGV4dGFyZWFcbiAgICAvLyB0aGUgY29ycmVjdCBoZWlnaHQuXG4gICAgdGhpcy4kLnRleHRDb3B5LnRleHRDb250ZW50ID0gdGhpcy52YWx1ZTtcbiAgfVxuXG4gIGNvbnRlbnRDaGFuZ2VkKCkge1xuICAgIGlmIChzdXBlci5jb250ZW50Q2hhbmdlZCkgeyBzdXBlci5jb250ZW50Q2hhbmdlZCgpOyB9XG4gICAgaWYgKHRoaXNbdmFsdWVUcmFja3NDb250ZW50U3ltYm9sXSkge1xuICAgICAgbGV0IHRleHQgPSBnZXRUZXh0Q29udGVudCh0aGlzKTtcbiAgICAgIHRoaXMuaW5uZXIudmFsdWUgPSB1bmVzY2FwZUh0bWwodGV4dCk7XG4gICAgICB2YWx1ZUNoYW5nZWQodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cblxuICAgIHRoaXMuaW5uZXIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBldmVudCA9PiB7XG4gICAgICB2YWx1ZUNoYW5nZWQodGhpcyk7XG4gICAgfSk7XG4gICAgdGhpcy5pbm5lci5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGV2ZW50ID0+IHtcbiAgICAgIGtleXByZXNzKHRoaXMsIGV2ZW50KTtcbiAgICB9KTtcblxuICAgIC8vIFNldCBkZWZhdWx0cy5cbiAgICBpZiAodHlwZW9mIHRoaXMubWluaW11bVJvd3MgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLm1pbmltdW1Sb3dzID0gdGhpcy5kZWZhdWx0cy5taW5pbXVtUm93cztcbiAgICB9XG5cbiAgICAvLyBBIHN0YW5kYXJkIHRleHRhcmVhIGhhcyBpdHMgdmFsdWUgdHJhY2sgaXRzIHRleHRDb250ZW50IGJ5IGRlZmF1bHQuXG4gICAgLy8gVGhhdCBpcywgY2hhbmdlcyB0byB0ZXh0Q29udGVudCB1cGRhdGUgdGhlIHZhbHVlLiBIb3dldmVyLCBpZiBhbiBhdHRlbXB0XG4gICAgLy8gaXMgbWFkZSB0byBjaGFuZ2UgdGhlIHZhbHVlIGRpcmVjdGx5LCB0aGlzIGJyZWFrcyB0aGUgYXV0b21hdGljIHRyYWNraW5nLlxuICAgIC8vIEZyb20gdGhhdCBwb2ludCBvbiwgY2hhbmdlcyB0byB0ZXh0Q29udGVudCBkbyAqbm90KiB1cGRhdGUgdGhlIHZhbHVlLlxuICAgIHRoaXNbdmFsdWVUcmFja3NDb250ZW50U3ltYm9sXSA9IHRydWU7XG4gIH1cblxuICBnZXQgZGVmYXVsdHMoKSB7XG4gICAgbGV0IGRlZmF1bHRzID0gc3VwZXIuZGVmYXVsdHMgfHwge307XG4gICAgZGVmYXVsdHMubWluaW11bVJvd3MgPSAxO1xuICAgIHJldHVybiBkZWZhdWx0cztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHRoZSBtaW5pbXVtIG51bWJlciBvZiByb3dzIHNob3duLiBUaGlzIGlzIHNpbWlsYXIgdG8gdGhlIHJvd3NcbiAgICogYXR0cmlidXRlIG9uIGEgc3RhbmRhcmQgdGV4dGFyZWEsIGJ1dCBiZWNhdXNlIHRoaXMgZWxlbWVudCBjYW4gZ3JvdywgaXNcbiAgICogZXhwcmVzc2VkIGFzIGEgbWluaW11bSByYXRoZXIgdGhhbiBhIGZpeGVkIG51bWJlci5cbiAgICpcbiAgICogQnkgZGVmYXVsdCwgdGhpcyBwcm9wZXJ0eSBpcyAxLCBzbyB3aGVuIGVtcHR5LCB0aGUgdGV4dCBhcmVhIHdpbGwgYmUgYVxuICAgKiBzaW5nbGUgbGluZSB0YWxsLiBUaGF0J3MgZWZmaWNpZW50IGluIHRlcm1zIG9mIHRoZSBzcGFjZSBpdCBjb25zdW1lcywgYnV0XG4gICAqIHVudGlsIHRoZSB1c2VyIGludGVyYWN0cyB3aXRoIHRoZSBlbGVtZW50LCB0aGV5IG1heSBub3QgcmVhbGl6ZSB0aGV5IGNhblxuICAgKiBlbnRlciBtdWx0aXBsZSBsaW5lcyBvZiB0ZXh0LiBTZXR0aW5nIHRoZSBwcm9wZXJ0eSB0byBhIHZhbHVlIGhpZ2hlciB0aGFuIDFcbiAgICogd2lsbCBzaWduYWwgdG8gdGhlIHVzZXIgdGhhdCB0aGV5IGNhbiBlbnRlciBtdWx0aXBsZSBsaW5lcyBvZiBhIHRleHQuXG4gICAqXG4gICAqIEJ5IHNldHRpbmcgdGhpcyBwcm9wZXJ0eSwgeW91IGNhbiBhbHNvIGNvbW11bmljYXRlIHRvIHRoZSB1c2VyIHNvbWUgc2Vuc2VcbiAgICogb2YgaG93IG11Y2ggdGV4dCB5b3UncmUgZXhwZWN0aW5nIHRoZW0gdG8gcHJvdmlkZS4gRm9yIGV4YW1wbGUsIG9uIGFcbiAgICogZmVlZGJhY2sgZm9ybSwgYXNraW5nIHRoZSB1c2VyIHRvIGVudGVyIHRoZWlyIGZlZWRiYWNrIGluIGEgc2luZ2xlLWxpbmVcbiAgICogdGV4dCBib3ggaW1wbGllcyB5b3UgZG9uJ3QgcmVhbGx5IHdhbnQgdGhlbSB0byBlbnRlciBtdWNoIHRleHQg4oCUIGV2ZW4gaWZcbiAgICogdGhlIHRleHQgYm94IHdpbGwgZ3JvdyB3aGVuIHRoZXkgdHlwZS4gQnkgc2V0dGluZyB0aGlzIHRvIGEgdmFsdWUgbGlrZSxcbiAgICogc2F5LCAxMCByb3dzLCB5b3UgY2FuIHNpZ25hbCB0aGF0IHlvdSdyZSBmdWxseSBleHBlY3RpbmcgdGhlbSB0byBlbnRlciBtb3JlXG4gICAqIHRleHQuXG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBkZWZhdWx0IDFcbiAgICovXG4gIGdldCBtaW5pbXVtUm93cygpIHtcbiAgICByZXR1cm4gdGhpc1ttaW5pbXVtUm93c1N5bWJvbF07XG4gIH1cbiAgc2V0IG1pbmltdW1Sb3dzKHZhbHVlKSB7XG4gICAgdGhpc1ttaW5pbXVtUm93c1N5bWJvbF0gPSBwYXJzZUludCh2YWx1ZSk7XG4gICAgaWYgKHRoaXNbbGluZUhlaWdodFN5bWJvbF0pIHtcbiAgICAgIHNldE1pbmltdW1IZWlnaHQodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBgXG4gICAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuXG4gICAgICAjYXV0b1NpemVDb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIC8qXG4gICAgICAgKiBFbnN1cmUgYm90aCB0aGUgdGV4dCBhcmVhIGFuZCBjb3B5IGVuZCB1cCB3aXRoIHRoZSBlbGVtZW50J3Mgb3duIGZvbnRcbiAgICAgICAqIG1ldHJpY3MsIHNvIHRoYXQgdGV4dCB3aWxsIGxheSBvdXQgdGhlIHNhbWUgaW4gYm90aCBvZiB0aGVtLlxuICAgICAgICovXG4gICAgICAjaW5uZXIsXG4gICAgICAjY29weUNvbnRhaW5lciB7XG4gICAgICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgICAgZm9udC1zdHlsZTogaW5oZXJpdDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG5cbiAgICAgICNpbm5lciB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByZXNpemU6IG5vbmU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIEBhcHBseSgtLXRleHRhcmVhKTtcbiAgICAgIH1cblxuICAgICAgI2NvcHlDb250YWluZXIge1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDsgLyogU28gbGluZXMgd3JhcCAqL1xuICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7IC8qIFNvIHdlIGJyZWFrIGF0IHdvcmQgYm91bmRhcmllcyB3aGVuIHBvc3NpYmxlICovXG4gICAgICB9XG5cbiAgICAgICNjb250ZW50Q29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDwhLS1cbiAgICAgIFRoZSBpbnZpc2libGUgY29weUNvbnRhaW5lciBjb250YWlucyBhbiBleHRyYVNwYWNlIGVsZW1lbnQgdGhhdCBlbnN1cmVzIHRoYXQsXG4gICAgICBldmVuIGlmIHRoZSBsYXN0IGxpbmUgb2YgdGhlIHRleHRhcmVhIGlzIGJsYW5rLCB0aGVyZSB3aWxsIGJlIHNvbWV0aGluZyBpbiB0aGVcbiAgICAgIGxpbmUgdGhhdCBmb3JjZXMgdGhlIHRleHQgY29weSB0byBncm93IGJ5IGEgbGluZS4gVGhpcyBleHRyYSBzcGFjZSBpcyBhIHRoaW5cbiAgICAgIHNwYWNlLCB0byByZWR1Y2UgdGhlIGFtb3VudCBieSB3aGljaCB0aGUgdGV4dCBjb3B5IHdpbGwgcHJlbWF0dXJlbHkgZ3Jvdy5cblxuICAgICAgVGhlIGNvcHlDb250YWluZXIgYWxzbyBjb250YWlucyBhbiBleHRyYUxpbmUgZWxlbWVudCBleGlzdHMgdG8gZGVhbCB3aXRoIHRoZVxuICAgICAgZmFjdCB0aGF0LCBpZiB0aGUgdXNlciBwcmVzc2VzIHRoZSBFbnRlciBrZXkgZG93biwgdGhlIHRleHRhcmVhJ3MgY29udGVudCB3aWxsXG4gICAgICBtb3ZlIGJlZm9yZSB0aGUgY29tcGxldGUgdGV4dCBpcyBhdmFpbGFibGUuIFNlZSBub3RlcyBhdCBfa2V5cHJlc3MuXG5cbiAgICAgIExhc3RseSwgd2UgcHV0IHRoZSBIVE1MIGNvbnRlbnQgZWxlbWVudCBpbnRvIGEgc2VwYXJhdGUgY29udGFpbmVyIHNvIHdlIGNhblxuICAgICAgaGlkZSBpdC4gV2UgbmVlZCB0byBoYXZlIGEgY29udGVudCBlbGVtZW50IHNvbWV3aGVyZSBpbiB0aGUgdGVtcGxhdGUgdG9cbiAgICAgIGNvbnZpbmNlIFBvbHltZXIgdGhhdCB3ZSBjYXJlIGFib3V0IHRoZSBjb250ZW50IGluIHRoZSBTaGFkeSBET00gY2FzZSAtLVxuICAgICAgd2l0aG91dCB0aGF0IGNvbnRlbnQgZWxlbWVudCwgU2hhZHkgRE9NIHdpbGwgY29uY2x1ZGUgdGhlIGVsZW1lbnQgZG9lc24ndFxuICAgICAgbmVlZCBpdHMgbGlnaHQgRE9NIGNvbnRlbnQsIGFuZCB3aWxsIHRocm93IGl0IGF3YXkuXG4gICAgICAtLT5cbiAgICAgIDxkaXYgaWQ9XCJhdXRvU2l6ZUNvbnRhaW5lclwiPlxuICAgICAgICA8dGV4dGFyZWEgaWQ9XCJpbm5lclwiPjwvdGV4dGFyZWE+XG4gICAgICAgIDxkaXYgaWQ9XCJjb3B5Q29udGFpbmVyXCI+PHNwYW4gaWQ9XCJ0ZXh0Q29weVwiPjwvc3Bhbj48c3BhbiBpZD1cImV4dHJhU3BhY2VcIj4mdGhpbnNwOzwvc3Bhbj48ZGl2IGlkPVwiZXh0cmFMaW5lXCI+Jm5ic3A7PC9kaXY+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgaWQ9XCJjb250ZW50Q29udGFpbmVyXCI+XG4gICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRleHQgY3VycmVudGx5IHNob3duIGluIHRoZSB0ZXh0YXJlYS5cbiAgICpcbiAgICogTm90ZSB0aGF0IHRoZSB0ZXh0IHNob3duIGluIHRoZSB0ZXh0YXJlYSBjYW4gYWxzbyBiZSB1cGRhdGVkIGJ5IGNoYW5naW5nXG4gICAqIHRoZSBlbGVtZW50J3MgaW5uZXJIVE1ML3RleHRDb250ZW50LiBIb3dldmVyLCBpZiB0aGUgdmFsdWUgcHJvcGVydHkgaXNcbiAgICogZXhwbGljaXRseSBzZXQsIHRoYXQgd2lsbCBvdmVycmlkZSB0aGUgaW5uZXJIVE1ML3RleHRDb250ZW50LlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmlubmVyLnZhbHVlO1xuICB9XG4gIHNldCB2YWx1ZSh0ZXh0KSB7XG4gICAgLy8gRXhwbGljaXRseSBzZXR0aW5nIHZhbHVlIGJyZWFrcyBhdXRvbWF0aWMgdXBkYXRlIG9mIHZhbHVlIGZyb20gY29udGVudC5cbiAgICB0aGlzW3ZhbHVlVHJhY2tzQ29udGVudFN5bWJvbF0gPSBmYWxzZTtcbiAgICB0aGlzLmlubmVyLnZhbHVlID0gdGV4dDtcbiAgICB2YWx1ZUNoYW5nZWQodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgd2hlbiB0aGUgdXNlciB0eXBlcyBpbiB0aGUgdGV4dGFyZWEuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBBdXRvc2l6ZVRleHRhcmVhXG4gICAqIEBldmVudCBjaGFuZ2VcbiAgICovXG59XG5cblxuZnVuY3Rpb24gZ2V0VGV4dENvbnRlbnQoZWxlbWVudCkge1xuICBsZXQgdGV4dCA9IGVsZW1lbnQuZGlzdHJpYnV0ZWRUZXh0Q29udGVudDtcblxuICAvLyBUcmltIHRoZSB0ZXh0LlxuICAvLyBUaGlzIGlzIG5vbi1zdGFuZGFyZCB0ZXh0YXJlYSBiZWhhdmlvci4gQSBzdGFuZGFyZCB0ZXh0YXJlYSB3aWxsIHRyaW0gdGhlXG4gIC8vIGZpcnN0IGNoYXJhY3RlciBpZiBpdCdzIGEgbmV3bGluZSwgYnV0IHRoYXQncyBpdC4gSG93ZXZlciwgYXV0aG9ycyB3aWxsXG4gIC8vIHdhbnQgdG8gYmUgYWJsZSB0byBwbGFjZSB0aGUgb3BlbmluZyBhbmQgY2xvc2luZyB0YWdzIG9uIHRoZWlyIG93biBsaW5lcy5cbiAgLy8gU28gaXQgc2VlbXMgbW9yZSBoZWxwZnVsIHRvIHRyaW0gd2hpdGVzcGFjZSBvbiBlaXRoZXIgc2lkZS5cbiAgdGV4dCA9IHRleHQudHJpbSgpO1xuXG4gIHJldHVybiB0ZXh0O1xufVxuXG5cbi8vIFNldCB1cCBvbmNlIHRoaXMgY29tcG9uZW50IGhhcyBiZWVuIHJlbmRlcmVkLlxuLy9cbi8vIE9uIENocm9tZSAoYXMgb2YgMTAvMjMvMTQpIGF0IGxlYXN0LCBpZiBhbiBpbnN0YW5jZSBpZiB0aGlzIGNvbXBvbmVudCBpc1xuLy8gYWRkZWQgZHluYW1pY2FsbHksIGl0cyBhdHRhY2hlZCBoYW5kbGVyIG1heSB0cmlnZ2VyIGJlZm9yZSBpdHMgYmVlblxuLy8gcmVuZGVyZWQuIFRoYXQgd291bGQgY2F1c2Ugb3VyIGxheW91dCBjYWxjdWxhdGlvbnMgdG8gYmUgaW5jb3JyZWN0LlxuLy9cbmZ1bmN0aW9uIGluaXRpYWxpemVXaGVuUmVuZGVyZWQoZWxlbWVudCkge1xuXG4gIC8vIElmIHRoZSBjb21wb25lbnQgaGFzIGJlZW4gcmVuZGVyZWQsIG91ciBoZWlnaHQgc2hvdWxkIGJlIG5vbnplcm8uXG4gIGlmIChlbGVtZW50LmNsaWVudEhlaWdodCA9PT0gMCkge1xuICAgIC8vIE5vdCByZW5kZXJlZCB5ZXQ6IHdhaXQgYSBiaXQgYmVmb3JlIHRyeWluZyBhZ2Fpbi5cbiAgICBzZXRUaW1lb3V0KCgpID0+IGluaXRpYWxpemVXaGVuUmVuZGVyZWQoZWxlbWVudCksIDEwKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBJZiB3ZSByZWFjaCB0aGlzIHBvaW50LCB0aGUgY29tcG9uZW50J3MgZWxlbWVudHMgc2hvdWxkIGJ5IHN0eWxlZC5cblxuICAvLyBGb3IgYXV0by1zaXppbmcgdG8gd29yaywgd2UgbmVlZCB0aGUgdGV4dCBjb3B5IHRvIGhhdmUgdGhlIHNhbWUgYm9yZGVyLFxuICAvLyBwYWRkaW5nLCBhbmQgb3RoZXIgcmVsZXZhbnQgY2hhcmFjdGVyaXN0aWNzIGFzIHRoZSBvcmlnaW5hbCB0ZXh0IGFyZWEuXG4gIC8vIFNpbmNlIHRob3NlIGFzcGVjdHMgYXJlIGFmZmVjdGVkIGJ5IENTUywgd2UgaGF2ZSB0byB3YWl0IHVudGlsIHRoZVxuICAvLyBlbGVtZW50IGlzIGluIHRoZSBkb2N1bWVudCBiZWZvcmUgd2UgY2FuIHVwZGF0ZSB0aGUgdGV4dCBjb3B5LlxuICBsZXQgdGV4dEJveFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LmlubmVyKTtcbiAgbGV0IGNvcHlDb250YWluZXJTdHlsZSA9IGVsZW1lbnQuJC5jb3B5Q29udGFpbmVyLnN0eWxlO1xuICBjb3B5Q29udGFpbmVyU3R5bGUuYm9yZGVyQm90dG9tU3R5bGUgID0gdGV4dEJveFN0eWxlLmJvcmRlckJvdHRvbVN0eWxlO1xuICBjb3B5Q29udGFpbmVyU3R5bGUuYm9yZGVyQm90dG9tV2lkdGggID0gdGV4dEJveFN0eWxlLmJvcmRlckJvdHRvbVdpZHRoO1xuICBjb3B5Q29udGFpbmVyU3R5bGUuYm9yZGVyTGVmdFN0eWxlICAgID0gdGV4dEJveFN0eWxlLmJvcmRlckxlZnRTdHlsZTtcbiAgY29weUNvbnRhaW5lclN0eWxlLmJvcmRlckxlZnRXaWR0aCAgICA9IHRleHRCb3hTdHlsZS5ib3JkZXJMZWZ0V2lkdGg7XG4gIGNvcHlDb250YWluZXJTdHlsZS5ib3JkZXJSaWdodFN0eWxlICAgPSB0ZXh0Qm94U3R5bGUuYm9yZGVyUmlnaHRTdHlsZTtcbiAgY29weUNvbnRhaW5lclN0eWxlLmJvcmRlclJpZ2h0V2lkdGggICA9IHRleHRCb3hTdHlsZS5ib3JkZXJSaWdodFdpZHRoO1xuICBjb3B5Q29udGFpbmVyU3R5bGUuYm9yZGVyVG9wU3R5bGUgICAgID0gdGV4dEJveFN0eWxlLmJvcmRlclRvcFN0eWxlO1xuICBjb3B5Q29udGFpbmVyU3R5bGUuYm9yZGVyVG9wV2lkdGggICAgID0gdGV4dEJveFN0eWxlLmJvcmRlclRvcFdpZHRoO1xuICBjb3B5Q29udGFpbmVyU3R5bGUucGFkZGluZ0JvdHRvbSAgICAgID0gdGV4dEJveFN0eWxlLnBhZGRpbmdCb3R0b207XG4gIGNvcHlDb250YWluZXJTdHlsZS5wYWRkaW5nTGVmdCAgICAgICAgPSB0ZXh0Qm94U3R5bGUucGFkZGluZ0xlZnQ7XG4gIGNvcHlDb250YWluZXJTdHlsZS5wYWRkaW5nUmlnaHQgICAgICAgPSB0ZXh0Qm94U3R5bGUucGFkZGluZ1JpZ2h0O1xuICBjb3B5Q29udGFpbmVyU3R5bGUucGFkZGluZ1RvcCAgICAgICAgID0gdGV4dEJveFN0eWxlLnBhZGRpbmdUb3A7XG5cbiAgLy8gVXNlIHRoZSBleHRyYUxpbmUgbWVtYmVyIHRvIGdhdWdlIHRoZSBleHBlY3RlZCBoZWlnaHQgb2YgYSBzaW5nbGUgbGluZSBvZlxuICAvLyB0ZXh0LiBXZSBjYW4ndCB1c2UgbGluZUhlaWdodCwgYmVjYXVzZSB0aGF0IGNhbiBiZSByZXBvcnRlZCBhcyBcIm5vcm1hbFwiLFxuICAvLyBhbmQgd2Ugd2FudCB0byBrbm93IHRoZSBhY3R1YWwgcGl4ZWwgaGVpZ2h0LlxuICBlbGVtZW50LiQuZXh0cmFMaW5lLnN0eWxlLmRpc3BsYXkgPSAnaW5oZXJpdCc7XG4gIGVsZW1lbnRbbGluZUhlaWdodFN5bWJvbF0gPSBlbGVtZW50LiQuZXh0cmFMaW5lLmNsaWVudEhlaWdodDtcblxuICAvLyBOb3cgdGhhdCB3ZSBrbm93IHRoZSBsaW5lIGhlaWdodCwgd2UgY2FuIGhpZGUgdGhlIGV4dHJhIGxpbmUuXG4gIGVsZW1lbnQuJC5leHRyYUxpbmUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAvLyBVc2UgdGhlIGxpbmUgaGVpZ2h0IGluIGNvbmp1bmN0aW9uIHdpdGggbWluaW11bVJvd3MgdG8gZXN0YWJsaXNoIHRoZVxuICAvLyBvdmVyYWxsIG1pbmltdW0gaGVpZ2h0IG9mIHRoZSBjb21wb25lbnQuXG4gIHNldE1pbmltdW1IZWlnaHQoZWxlbWVudCk7XG59XG5cblxuLy8gU3BlY3VsYXRpdmVseSBhZGQgYSBsaW5lIHRvIG91ciBjb3B5IG9mIHRoZSB0ZXh0LiBXZSdyZSBub3Qgc3VyZSB3aGF0IHRoZVxuLy8gZXhhY3QgZWZmZWN0IG9mIHR5cGluZyB0aGlzIGNoYXJhY3RlciB3aWxsIGJlLCBhbmQgYXQgdGhpcyBwb2ludCBpdCdzIG5vdFxuLy8gcmVmbGVjdGVkIHlldCBpbiB0aGUgdGV4dGFyZWEncyBjb250ZW50LiBXZSBzcGVjdWxhdGUgdGhhdCBpdCB3aWxsIGFkZCBhXG4vLyBsaW5lIHRvIHRoZSB0ZXh0IGFuZCBzaXplIGFjY29yZGluZ2x5LiAoT25lIG90aGVyIHBvc3NpYmlsaXR5IGlzIHRoYXQgdGhlXG4vLyB1c2VyJ3MgcmVwbGFjaW5nIGEgc2VsZWN0ZWQgY2h1bmsgb2YgdGV4dCB3aXRoIGEgbmV3bGluZS4pIEluIGFueSBldmVudCxcbi8vIG9uY2Ugd2UgZ2V0IHRoZSBrZXl1cCBvciBjaGFuZ2UgZXZlbnQsIHdlJ2xsIG1ha2UgYW55IGZpbmFsIGFkanVzdG1lbnRzLlxuLy9cbi8vIFRPRE86IElmIHRoZSB1c2VyIGhvbGRzIGRvd24gdGhlIEVudGVyIGtleSwgd2UgY2FuIGdldCBhIGJ1bmNoIG9mIGtleXByZXNzXG4vLyBldmVudHMgYmVmb3JlIHdlIGdldCBrZXl1cC4gVGhpcyBjYXVzZXMgZmxpY2tlci4gSW5zdGVhZCBvZiBzdXBwb3J0aW5nIG9ubHlcbi8vIGEgc2luZ2xlIGV4dHJhIHNwZWN1bGF0aXZlIGxpbmUsIHdlIHNob3VsZCBncm93IHRoZSBzcGVjdWxhdGl2ZSBlbGVtZW50IHRvXG4vLyBjb250YWluIHRoZSBudW1iZXIgb2YgRW50ZXIga2V5cHJlc3NlcyB3ZSd2ZSByZWNlaXZlZC5cbmZ1bmN0aW9uIGtleXByZXNzKGVsZW1lbnQsIGV2ZW50KSB7XG4gIGlmIChldmVudC5rZXlDb2RlID09PSAxMyAvKiBFbnRlciAqLykge1xuICAgIGVsZW1lbnQuJC5leHRyYUxpbmUuc3R5bGUuZGlzcGxheSA9ICdpbmhlcml0JztcbiAgfVxufVxuXG5cbi8vIFNldHRpbmcgdGhlIG1pbmltdW1Sb3dzIGF0dHJpYnV0ZSB0cmFuc2xhdGVzIGludG8gc2V0dGluZyB0aGUgbWluaW11bVxuLy8gaGVpZ2h0IG9uIHRoZSB0ZXh0IGNvcHkgY29udGFpbmVyLlxuZnVuY3Rpb24gc2V0TWluaW11bUhlaWdodChlbGVtZW50KSB7XG4gIGxldCBjb3B5Q29udGFpbmVyID0gZWxlbWVudC4kLmNvcHlDb250YWluZXI7XG4gIGxldCBvdXRlckhlaWdodCA9IGNvcHlDb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICBsZXQgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGNvcHlDb250YWluZXIpO1xuICBsZXQgcGFkZGluZ1RvcCA9IHBhcnNlRmxvYXQoc3R5bGUucGFkZGluZ1RvcCk7XG4gIGxldCBwYWRkaW5nQm90dG9tID0gcGFyc2VGbG9hdChzdHlsZS5wYWRkaW5nQm90dG9tKTtcbiAgbGV0IGlubmVySGVpZ2h0ID0gY29weUNvbnRhaW5lci5jbGllbnRIZWlnaHQgLSBwYWRkaW5nVG9wIC0gcGFkZGluZ0JvdHRvbTtcbiAgbGV0IGJvcmRlcnNQbHVzUGFkZGluZyA9IG91dGVySGVpZ2h0IC0gaW5uZXJIZWlnaHQ7XG4gIGxldCBtaW5IZWlnaHQgPSAoZWxlbWVudC5taW5pbXVtUm93cyAqIGVsZW1lbnRbbGluZUhlaWdodFN5bWJvbF0pICsgYm9yZGVyc1BsdXNQYWRkaW5nO1xuICBtaW5IZWlnaHQgPSBNYXRoLmNlaWwobWluSGVpZ2h0KTtcbiAgY29weUNvbnRhaW5lci5zdHlsZS5taW5IZWlnaHQgPSBtaW5IZWlnaHQgKyAncHgnO1xufVxuXG5cbmZ1bmN0aW9uIHVuZXNjYXBlSHRtbChodG1sKSB7XG4gIHJldHVybiBodG1sXG4gICAgLnJlcGxhY2UoLyZhbXA7L2csICcmJylcbiAgICAucmVwbGFjZSgvJmx0Oy9nLCAnPCcpXG4gICAgLnJlcGxhY2UoLyZndDsvZywgXCI+XCIpXG4gICAgLnJlcGxhY2UoLyZxdW90Oy9nLCAnXFxcIicpXG4gICAgLnJlcGxhY2UoLyYjMDM5Oy9nLCAnXFwnJyk7XG59XG5cblxuLypcbiAqIEhhbmRsZSBhIGNoYW5nZSBpbiB0aGUgZWxlbWVudCdzIHZhbHVlIHByb3BlcnR5LlxuICovXG5mdW5jdGlvbiB2YWx1ZUNoYW5nZWQoZWxlbWVudCkge1xuICBlbGVtZW50LmF1dG9TaXplKCk7XG4gIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3ZhbHVlLWNoYW5nZWQnKSk7XG59XG5cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdiYXNpYy1hdXRvc2l6ZS10ZXh0YXJlYScsIEF1dG9zaXplVGV4dGFyZWEpO1xuZXhwb3J0IGRlZmF1bHQgQXV0b3NpemVUZXh0YXJlYTtcbiIsIi8vIE1lbW9pemVkIG1hcCBvZiBhdHRyaWJ1dGUgdG8gcHJvcGVydHkgbmFtZXMuXG5jb25zdCBhdHRyaWJ1dGVUb1Byb3BlcnR5TmFtZXMgPSB7fTtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIEF0dHJpYnV0ZU1hcnNoYWxsaW5nLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggbWFyc2hhbGxzIGF0dHJpYnV0ZXMgdG8gcHJvcGVydGllcyAoYW5kIGV2ZW50dWFsbHkgdmljZSB2ZXJzYSkuXG4gICAqXG4gICAqIElmIHlvdXIgY29tcG9uZW50IGV4cG9zZXMgYSBzZXR0ZXIgZm9yIGEgcHJvcGVydHksIGl0J3MgZ2VuZXJhbGx5IGEgZ29vZFxuICAgKiBpZGVhIHRvIGxldCBkZXZzIHVzaW5nIHlvdXIgY29tcG9uZW50IGJlIGFibGUgdG8gc2V0IHRoYXQgcHJvcGVydHkgaW4gSFRNTFxuICAgKiB2aWEgYW4gZWxlbWVudCBhdHRyaWJ1dGUuIFlvdSBjYW4gY29kZSB0aGF0IHlvdXJzZWxmIGJ5IHdyaXRpbmcgYW5cbiAgICogYGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja2AsIG9yIHlvdSBjYW4gdXNlIHRoaXMgbWl4aW4gdG8gZ2V0IGEgZGVncmVlIG9mXG4gICAqIGF1dG9tYXRpYyBzdXBwb3J0LlxuICAgKlxuICAgKiBUaGlzIG1peGluIGltcGxlbWVudHMgYW4gYGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja2AgdGhhdCB3aWxsIGF0dGVtcHQgdG9cbiAgICogY29udmVydCBhIGNoYW5nZSBpbiBhbiBlbGVtZW50IGF0dHJpYnV0ZSBpbnRvIGEgY2FsbCB0byB0aGUgY29ycmVzcG9uZGluZ1xuICAgKiBwcm9wZXJ0eSBzZXR0ZXIuIEF0dHJpYnV0ZXMgdHlwaWNhbGx5IGZvbGxvdyBoeXBoZW5hdGVkIG5hbWVzIChcImZvby1iYXJcIiksXG4gICAqIHdoZXJlYXMgcHJvcGVydGllcyB0eXBpY2FsbHkgdXNlIGNhbWVsQ2FzZSBuYW1lcyAoXCJmb29CYXJcIikuIFRoaXMgbWl4aW5cbiAgICogcmVzcGVjdHMgdGhhdCBjb252ZW50aW9uLCBhdXRvbWF0aWNhbGx5IG1hcHBpbmcgdGhlIGh5cGhlbmF0ZWQgYXR0cmlidXRlXG4gICAqIG5hbWUgdG8gdGhlIGNvcnJlc3BvbmRpbmcgY2FtZWxDYXNlIHByb3BlcnR5IG5hbWUuXG4gICAqXG4gICAqIEV4YW1wbGU6IFlvdSBkZWZpbmUgYSBjb21wb25lbnQgdXNpbmcgdGhpcyBtaXhpbjpcbiAgICpcbiAgICogICAgIGNsYXNzIE15RWxlbWVudCBleHRlbmRzIEF0dHJpYnV0ZU1hcnNoYWxsaW5nKEhUTUxFbGVtZW50KSB7XG4gICAqICAgICAgIGdldCBmb29CYXIoKSB7IHJldHVybiB0aGlzLl9mb29CYXI7IH1cbiAgICogICAgICAgc2V0IGZvb0Jhcih2YWx1ZSkgeyB0aGlzLl9mb29CYXIgPSB2YWx1ZTsgfVxuICAgKiAgICAgfVxuICAgKiAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdteS1lbGVtZW50JywgTXlFbGVtZW50KTtcbiAgICpcbiAgICogSWYgc29tZW9uZSB0aGVuIGluc3RhbnRpYXRlcyB5b3VyIGNvbXBvbmVudCBpbiBIVE1MOlxuICAgKlxuICAgKiAgICAgPG15LWVsZW1lbnQgZm9vLWJhcj1cIkhlbGxvXCI+PC9teS1lbGVtZW50PlxuICAgKlxuICAgKiBUaGVuLCBhZnRlciB0aGUgZWxlbWVudCBoYXMgYmVlbiB1cGdyYWRlZCwgdGhlIGBmb29CYXJgIHNldHRlciB3aWxsXG4gICAqIGF1dG9tYXRpY2FsbHkgYmUgaW52b2tlZCB3aXRoIHRoZSBpbml0aWFsIHZhbHVlIFwiSGVsbG9cIi5cbiAgICpcbiAgICogRm9yIHRoZSB0aW1lIGJlaW5nLCB0aGlzIG1peGluIG9ubHkgc3VwcG9ydHMgc3RyaW5nLXZhbHVlZCBwcm9wZXJ0aWVzLlxuICAgKiBJZiB5b3UnZCBsaWtlIHRvIGNvbnZlcnQgc3RyaW5nIGF0dHJpYnV0ZXMgdG8gb3RoZXIgdHlwZXMgKG51bWJlcnMsXG4gICAqIGJvb2xlYW5zKSwgeW91IG5lZWQgdG8gaW1wbGVtZW50IGBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tgIHlvdXJzZWxmLlxuICAgKi9cbiAgY2xhc3MgQXR0cmlidXRlTWFyc2hhbGxpbmcgZXh0ZW5kcyBiYXNlIHtcblxuICAgIC8qXG4gICAgICogSGFuZGxlIGEgY2hhbmdlIHRvIHRoZSBhdHRyaWJ1dGUgd2l0aCB0aGUgZ2l2ZW4gbmFtZS5cbiAgICAgKi9cbiAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soYXR0cmlidXRlTmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG4gICAgICBpZiAoc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKSB7IHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjaygpOyB9XG4gICAgICBsZXQgcHJvcGVydHlOYW1lID0gYXR0cmlidXRlVG9Qcm9wZXJ0eU5hbWVzW2F0dHJpYnV0ZU5hbWVdO1xuICAgICAgaWYgKCFwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgLy8gQ29udmVydCBhbmQgbWVtb2l6ZS5cbiAgICAgICAgcHJvcGVydHlOYW1lID0gYXR0cmlidXRlVG9Qcm9wZXJ0eU5hbWUoYXR0cmlidXRlTmFtZSk7XG4gICAgICAgIGF0dHJpYnV0ZVRvUHJvcGVydHlOYW1lc1thdHRyaWJ1dGVOYW1lXSA9IHByb3BlcnR5TmFtZTtcbiAgICAgIH1cbiAgICAgIC8vIElmIHRoZSBhdHRyaWJ1dGUgbmFtZSBjb3JyZXNwb25kcyB0byBhIHByb3BlcnR5IG5hbWUsIHNldCB0aGUgcHJvcGVydHkuXG4gICAgICAvLyBJZ25vcmUgc3RhbmRhcmQgSFRNTEVsZW1lbnQgcHJvcGVydGllcyBoYW5kbGVkIGJ5IHRoZSBET00uXG4gICAgICBpZiAocHJvcGVydHlOYW1lIGluIHRoaXMgJiYgIShwcm9wZXJ0eU5hbWUgaW4gSFRNTEVsZW1lbnQucHJvdG90eXBlKSkge1xuICAgICAgICB0aGlzW3Byb3BlcnR5TmFtZV0gPSBuZXdWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBBdHRyaWJ1dGVNYXJzaGFsbGluZztcbn07XG5cblxuLy8gQ29udmVydCBjYW1lbCBjYXNlIGZvb0JhciBuYW1lIHRvIGh5cGhlbmF0ZWQgZm9vLWJhci5cbmZ1bmN0aW9uIGF0dHJpYnV0ZVRvUHJvcGVydHlOYW1lKGF0dHJpYnV0ZU5hbWUpIHtcbiAgbGV0IHByb3BlcnR5TmFtZSA9IGF0dHJpYnV0ZU5hbWUucmVwbGFjZSgvLShbYS16XSkvZywgbSA9PiBtWzFdLnRvVXBwZXJDYXNlKCkpO1xuICByZXR1cm4gcHJvcGVydHlOYW1lO1xufVxuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBDb21wb3NhYmxlLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gdG8gbWFrZSBhIGNsYXNzIG1vcmUgZWFzaWx5IGNvbXBvc2FibGUgd2l0aCBvdGhlciBtaXhpbnMuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gY29udHJpYnV0ZXMgYSBgY29tcG9zZWAgbWV0aG9kIHRoYXQgYXBwbGllcyBhIHNldCBvZiBtaXhpblxuICAgKiBmdW5jdGlvbnMgYW5kIHJldHVybnMgdGhlIHJlc3VsdGluZyBuZXcgY2xhc3MuIFRoaXMgc3VnYXIgY2FuIG1ha2UgdGhlXG4gICAqIGFwcGxpY2F0aW9uIG9mIG1hbnkgbWl4aW5zIGF0IG9uY2UgZWFzaWVyIHRvIHJlYWQuXG4gICAqL1xuICBjbGFzcyBDb21wb3NhYmxlIGV4dGVuZHMgYmFzZSB7XG5cbiAgICAvKipcbiAgICAgKiBBcHBseSBhIHNldCBvZiBtaXhpbiBmdW5jdGlvbnMgb3IgbWl4aW4gb2JqZWN0cyB0byB0aGUgcHJlc2VudCBjbGFzcyBhbmRcbiAgICAgKiByZXR1cm4gdGhlIG5ldyBjbGFzcy5cbiAgICAgKlxuICAgICAqIEluc3RlYWQgb2Ygd3JpdGluZzpcbiAgICAgKlxuICAgICAqICAgICBsZXQgTXlDbGFzcyA9IE1peGluMShNaXhpbjIoTWl4aW4zKE1peGluNChNaXhpbjUoQmFzZUNsYXNzKSkpKSk7XG4gICAgICpcbiAgICAgKiBZb3UgY2FuIHdyaXRlOlxuICAgICAqXG4gICAgICogICAgIGxldCBNeUNsYXNzID0gQ29tcG9zYWJsZShCYXNlQ2xhc3MpLmNvbXBvc2UoXG4gICAgICogICAgICAgTWl4aW4xLFxuICAgICAqICAgICAgIE1peGluMixcbiAgICAgKiAgICAgICBNaXhpbjMsXG4gICAgICogICAgICAgTWl4aW40LFxuICAgICAqICAgICAgIE1peGluNVxuICAgICAqICAgICApO1xuICAgICAqXG4gICAgICogVGhpcyBmdW5jdGlvbiBjYW4gYWxzbyB0YWtlIG1peGluIG9iamVjdHMuIEEgbWl4aW4gb2JqZWN0IGlzIGp1c3QgYVxuICAgICAqIHNob3J0aGFuZCBmb3IgYSBtaXhpbiBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYSBuZXcgc3ViY2xhc3Mgd2l0aCB0aGUgZ2l2ZW5cbiAgICAgKiBtZW1iZXJzLiBUaGUgbWl4aW4gb2JqZWN0J3MgbWVtYmVycyBhcmUgKm5vdCogY29waWVkIGRpcmVjdGx5IG9udG8gdGhlXG4gICAgICogcHJvdG90eXBlIG9mIHRoZSBiYXNlIGNsYXNzLCBhcyB3aXRoIHRyYWRpdGlvbmFsIG1peGlucy5cbiAgICAgKlxuICAgICAqIEluIGFkZGl0aW9uIHRvIHByb3ZpZGluZyBzeW50YWN0aWMgc3VnYXIsIHRoaXMgbWl4aW4gY2FuIGJlIHVzZWQgdG9cbiAgICAgKiBkZWZpbmUgYSBjbGFzcyBpbiBFUzUsIHdoaWNoIGxhY2tzIEVTNidzIGBjbGFzc2Aga2V5d29yZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Li4ubWl4aW5zfSBtaXhpbnMgLSBBIHNldCBvZiBtaXhpbiBmdW5jdGlvbnMgb3Igb2JqZWN0cyB0byBhcHBseS5cbiAgICAgKi9cbiAgICBzdGF0aWMgY29tcG9zZSguLi5taXhpbnMpIHtcbiAgICAgIC8vIFdlIGNyZWF0ZSBhIG5ldyBzdWJjbGFzcyBmb3IgZWFjaCBtaXhpbiBpbiB0dXJuLiBUaGUgcmVzdWx0IGJlY29tZXNcbiAgICAgIC8vIHRoZSBiYXNlIGNsYXNzIGV4dGVuZGVkIGJ5IGFueSBzdWJzZXF1ZW50IG1peGlucy4gSXQgdHVybnMgb3V0IHRoYXRcbiAgICAgIC8vIHdlIGNhbiB1c2UgQXJyYXkucmVkdWNlKCkgdG8gY29uY2lzZWx5IGV4cHJlc3MgdGhpcywgdXNpbmcgdGhlIGN1cnJlbnRcbiAgICAgIC8vIG9iamVjdCBhcyB0aGUgc2VlZCBmb3IgcmVkdWNlKCkuXG4gICAgICByZXR1cm4gbWl4aW5zLnJlZHVjZShjb21wb3NlQ2xhc3MsIHRoaXMpO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIENvbXBvc2FibGU7XG59O1xuXG5cbi8vIFByb3BlcnRpZXMgZGVmaW5lZCBieSBPYmplY3QgdGhhdCB3ZSBkb24ndCB3YW50IHRvIG1peGluLlxuY29uc3QgTk9OX01JWEFCTEVfT0JKRUNUX1BST1BFUlRJRVMgPSBbXG4gICdjb25zdHJ1Y3Rvcidcbl07XG5cbi8qXG4gKiBBcHBseSB0aGUgbWl4aW4gdG8gdGhlIGdpdmVuIGJhc2UgY2xhc3MgdG8gcmV0dXJuIGEgbmV3IGNsYXNzLlxuICogVGhlIG1peGluIGNhbiBlaXRoZXIgYmUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIG1vZGlmaWVkIGNsYXNzLCBvciBhXG4gKiBwbGFpbiBvYmplY3Qgd2hvc2UgbWVtYmVycyB3aWxsIGJlIGNvcGllZCB0byB0aGUgbmV3IGNsYXNzJyBwcm90b3R5cGUuXG4gKi9cbmZ1bmN0aW9uIGNvbXBvc2VDbGFzcyhiYXNlLCBtaXhpbikge1xuICBpZiAodHlwZW9mIG1peGluID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gTWl4aW4gZnVuY3Rpb25cbiAgICByZXR1cm4gbWl4aW4oYmFzZSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gTWl4aW4gb2JqZWN0XG4gICAgY2xhc3MgU3ViY2xhc3MgZXh0ZW5kcyBiYXNlIHt9XG4gICAgY29weU93blByb3BlcnRpZXMobWl4aW4sIFN1YmNsYXNzLnByb3RvdHlwZSwgTk9OX01JWEFCTEVfT0JKRUNUX1BST1BFUlRJRVMpO1xuICAgIHJldHVybiBTdWJjbGFzcztcbiAgfVxufVxuXG5cbi8qXG4gKiBDb3B5IHRoZSBnaXZlbiBwcm9wZXJ0aWVzL21ldGhvZHMgdG8gdGhlIHRhcmdldC5cbiAqIFJldHVybiB0aGUgdXBkYXRlZCB0YXJnZXQuXG4gKi9cbmZ1bmN0aW9uIGNvcHlPd25Qcm9wZXJ0aWVzKHNvdXJjZSwgdGFyZ2V0LCBpZ25vcmVQcm9wZXJ0eU5hbWVzID0gW10pIHtcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoc291cmNlKS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgIGlmIChpZ25vcmVQcm9wZXJ0eU5hbWVzLmluZGV4T2YobmFtZSkgPCAwKSB7XG4gICAgICBsZXQgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBuYW1lKTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB0YXJnZXQ7XG59XG4iLCIvLyBUT0RPOiBSYXRpb25hbGl6ZSB3aXRoIG5ldyBDdXN0b20gRWxlbWVudHMgQVBJLlxuLy8gVE9ETzogQ29uc2lkZXIgcmVuYW1pbmcgdG8gbWF0Y2ggQ3VzdG9tIEVsZW1lbnRzIEFQSS5cblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIERpc3RyaWJ1dGVkQ2hpbGRyZW4uICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBkZWZpbmVzIGhlbHBlcnMgZm9yIGFjY2Vzc2luZyBhIGNvbXBvbmVudCdzIGRpc3RyaWJ1dGVkXG4gICAqIGNoaWxkcmVuIGFzIGEgZmxhdHRlbmVkIGFycmF5IG9yIHN0cmluZy5cbiAgICpcbiAgICogVGhlIHN0YW5kYXJkIERPTSBBUEkgcHJvdmlkZXMgc2V2ZXJhbCB3YXlzIG9mIGFjY2Vzc2luZyBjaGlsZCBjb250ZW50OlxuICAgKiBgY2hpbGRyZW5gLCBgY2hpbGROb2Rlc2AsIGFuZCBgdGV4dENvbnRlbnRgLiBOb25lIG9mIHRoZXNlIGZ1bmN0aW9ucyBhcmVcbiAgICogU2hhZG93IERPTSBhd2FyZS4gVGhpcyBtaXhpbiBkZWZpbmVzIHZhcmlhdGlvbnMgb2YgdGhvc2UgZnVuY3Rpb25zIHRoYXRcbiAgICogKmFyZSogU2hhZG93IERPTSBhd2FyZS5cbiAgICpcbiAgICogRXhhbXBsZTogeW91IGNyZWF0ZSBhIGNvbXBvbmVudCBgPGNvdW50LWNoaWxkcmVuPmAgdGhhdCBkaXNwbGF5cyBhIG51bWJlclxuICAgKiBlcXVhbCB0byB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIHBsYWNlZCBpbnNpZGUgdGhhdCBjb21wb25lbnQuIElmIHNvbWVvbmVcbiAgICogaW5zdGFudGlhdGVzIHlvdXIgY29tcG9uZW50IGxpa2U6XG4gICAqXG4gICAqICAgICA8Y291bnQtY2hpbGRyZW4+XG4gICAqICAgICAgIDxkaXY+PC9kaXY+XG4gICAqICAgICAgIDxkaXY+PC9kaXY+XG4gICAqICAgICAgIDxkaXY+PC9kaXY+XG4gICAqICAgICA8L2NvdW50LWNoaWxkcmVuPlxuICAgKlxuICAgKiBUaGVuIHRoZSBjb21wb25lbnQgc2hvdWxkIHNob3cgXCIzXCIsIGJlY2F1c2UgdGhlcmUgYXJlIHRocmVlIGNoaWxkcmVuLiBUb1xuICAgKiBjYWxjdWxhdGUgdGhlIG51bWJlciBvZiBjaGlsZHJlbiwgdGhlIGNvbXBvbmVudCBjYW4ganVzdCBjYWxjdWxhdGVcbiAgICogYHRoaXMuY2hpbGRyZW4ubGVuZ3RoYC4gSG93ZXZlciwgc3VwcG9zZSBzb21lb25lIGluc3RhbnRpYXRlcyB5b3VyXG4gICAqIGNvbXBvbmVudCBpbnNpZGUgb25lIG9mIHRoZWlyIG93biBjb21wb25lbnRzLCBhbmQgcHV0cyBhIGA8c2xvdD5gIGVsZW1lbnRcbiAgICogaW5zaWRlIHlvdXIgY29tcG9uZW50OlxuICAgKlxuICAgKiAgICAgPGNvdW50LWNoaWxkcmVuPlxuICAgKiAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAqICAgICA8L2NvdW50LWNoaWxkcmVuPlxuICAgKlxuICAgKiBJZiB5b3VyIGNvbXBvbmVudCBvbmx5IGxvb2tzIGF0IGB0aGlzLmNoaWxkcmVuYCwgaXQgd2lsbCBhbHdheXMgc2VlIGV4YWN0bHlcbiAgICogb25lIGNoaWxkIOKAlMKgdGhlIGA8c2xvdD5gIGVsZW1lbnQuIEJ1dCB0aGUgdXNlciBsb29raW5nIGF0IHRoZSBwYWdlIHdpbGxcbiAgICogKnNlZSogYW55IG5vZGVzIGRpc3RyaWJ1dGVkIHRvIHRoYXQgc2xvdC4gVG8gbWF0Y2ggd2hhdCB0aGUgdXNlciBzZWVzLCB5b3VyXG4gICAqIGNvbXBvbmVudCBzaG91bGQgZXhwYW5kIGFueSBgPHNsb3Q+YCBlbGVtZW50cyBpdCBjb250YWlucy5cbiAgICpcbiAgICogVGhhdCBpcyB0aGUgcHJvYmxlbSB0aGlzIG1peGluIHNvbHZlcy4gQWZ0ZXIgYXBwbHlpbmcgdGhpcyBtaXhpbiwgeW91clxuICAgKiBjb21wb25lbnQgY29kZSBoYXMgYWNjZXNzIHRvIGB0aGlzLmRpc3RyaWJ1dGVkQ2hpbGRyZW5gLCB3aG9zZSBgbGVuZ3RoYFxuICAgKiB3aWxsIHJldHVybiB0aGUgdG90YWwgbnVtYmVyIG9mIGFsbCBjaGlsZHJlbiBkaXN0cmlidXRlZCB0byB5b3VyIGNvbXBvbmVudFxuICAgKiBpbiB0aGUgY29tcG9zZWQgdHJlZS5cbiAgICpcbiAgICogTm90ZTogVGhlIGxhdGVzdCBDdXN0b20gRWxlbWVudHMgQVBJIGRlc2lnbiBjYWxscyBmb3IgYSBuZXcgZnVuY3Rpb24sXG4gICAqIGBnZXRBc3NpZ25lZE5vZGVzYCB0aGF0IHRha2VzIGFuIG9wdGlvbmFsIGBkZWVwYCBwYXJhbWV0ZXIsIHRoYXQgd2lsbCBzb2x2ZVxuICAgKiB0aGlzIHByb2JsZW0gYXQgdGhlIEFQSSBsZXZlbC5cbiAgICovXG4gIGNsYXNzIERpc3RyaWJ1dGVkQ2hpbGRyZW4gZXh0ZW5kcyBiYXNlIHtcblxuICAgIC8qKlxuICAgICAqIEFuIGluLW9yZGVyIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4sIGV4cGFuZGluZyBhbnkgc2xvdCBlbGVtZW50cy4gTGlrZSB0aGVcbiAgICAgKiBzdGFuZGFyZCBjaGlsZHJlbiBwcm9wZXJ0eSwgdGhpcyBza2lwcyB0ZXh0IG5vZGVzLlxuICAgICAqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50W119XG4gICAgICovXG4gICAgZ2V0IGRpc3RyaWJ1dGVkQ2hpbGRyZW4oKSB7XG4gICAgICByZXR1cm4gZXhwYW5kQ29udGVudEVsZW1lbnRzKHRoaXMuY2hpbGRyZW4sIGZhbHNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbiBpbi1vcmRlciBjb2xsZWN0aW9uIG9mIGNoaWxkIG5vZGVzLCBleHBhbmRpbmcgYW55IHNsb3QgZWxlbWVudHMuIExpa2VcbiAgICAgKiB0aGUgc3RhbmRhcmQgY2hpbGROb2RlcyBwcm9wZXJ0eSwgdGhpcyBpbmNsdWRlcyB0ZXh0IG5vZGVzLlxuICAgICAqXG4gICAgICogQHR5cGUge05vZGVbXX1cbiAgICAgKi9cbiAgICBnZXQgZGlzdHJpYnV0ZWRDaGlsZE5vZGVzKCkge1xuICAgICAgcmV0dXJuIGV4cGFuZENvbnRlbnRFbGVtZW50cyh0aGlzLmNoaWxkTm9kZXMsIHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBjb25jYXRlbmF0ZWQgdGV4dCBjb250ZW50IG9mIGFsbCBjaGlsZCBub2RlcywgZXhwYW5kaW5nIGFueSBzbG90XG4gICAgICogZWxlbWVudHMuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldCBkaXN0cmlidXRlZFRleHRDb250ZW50KCkge1xuICAgICAgbGV0IHN0cmluZ3MgPSB0aGlzLmRpc3RyaWJ1dGVkQ2hpbGROb2Rlcy5tYXAoZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkLnRleHRDb250ZW50O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gc3RyaW5ncy5qb2luKCcnKTtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBEaXN0cmlidXRlZENoaWxkcmVuO1xufTtcblxuXG4vKlxuICogR2l2ZW4gYSBhcnJheSBvZiBub2RlcywgcmV0dXJuIGEgbmV3IGFycmF5IHdpdGggYW55IGNvbnRlbnQgZWxlbWVudHMgZXhwYW5kZWRcbiAqIHRvIHRoZSBub2RlcyBkaXN0cmlidXRlZCB0byB0aGF0IGNvbnRlbnQgZWxlbWVudC4gVGhpcyBydWxlIGlzIGFwcGxpZWRcbiAqIHJlY3Vyc2l2ZWx5LlxuICpcbiAqIElmIGluY2x1ZGVUZXh0Tm9kZXMgaXMgdHJ1ZSwgdGV4dCBub2RlcyB3aWxsIGJlIGluY2x1ZGVkLCBhcyBpbiB0aGVcbiAqIHN0YW5kYXJkIGNoaWxkTm9kZXMgcHJvcGVydHk7IGJ5IGRlZmF1bHQsIHRoaXMgc2tpcHMgdGV4dCBub2RlcywgbGlrZSB0aGVcbiAqIHN0YW5kYXJkIGNoaWxkcmVuIHByb3BlcnR5LlxuICovXG5mdW5jdGlvbiBleHBhbmRDb250ZW50RWxlbWVudHMobm9kZXMsIGluY2x1ZGVUZXh0Tm9kZXMpIHtcbiAgbGV0IGV4cGFuZGVkID0gQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKG5vZGVzLCBub2RlID0+IHtcbiAgICAvLyBXZSB3YW50IHRvIHNlZSBpZiB0aGUgbm9kZSBpcyBhbiBpbnN0YW5jZW9mIEhUTUxTbG90RUxlbWVudCwgYnV0XG4gICAgLy8gdGhhdCBjbGFzcyB3b24ndCBleGlzdCBpZiB0aGUgYnJvd3NlciB0aGF0IGRvZXNuJ3Qgc3VwcG9ydCBuYXRpdmVcbiAgICAvLyBTaGFkb3cgRE9NIGFuZCBpZiB0aGUgU2hhZG93IERPTSBwb2x5ZmlsbCBoYXNuJ3QgYmVlbiBsb2FkZWQuIEluc3RlYWQsXG4gICAgLy8gd2UgZG8gYSBzaW1wbGlzdGljIGNoZWNrIHRvIHNlZSBpZiB0aGUgdGFnIG5hbWUgaXMgXCJzbG90XCIgb3IgXCJjb250ZW50XCIuXG4gICAgaWYgKG5vZGUubG9jYWxOYW1lID09PSBcInNsb3RcIiB8fCBub2RlLmxvY2FsTmFtZSA9PT0gXCJjb250ZW50XCIpIHtcbiAgICAgIC8vIFVzZSB0aGUgbm9kZXMgYXNzaWduZWQgdG8gdGhpcyBub2RlIGluc3RlYWQuXG4gICAgICBsZXQgYXNzaWduZWROb2RlcztcbiAgICAgIGlmIChub2RlLmFzc2lnbmVkTm9kZXMpIHtcbiAgICAgICAgLy8gc2xvdCBlbGVtZW50XG4gICAgICAgIGFzc2lnbmVkTm9kZXMgPSBub2RlLmFzc2lnbmVkTm9kZXMoeyBmbGF0dGVuOiB0cnVlIH0pO1xuICAgICAgfSBlbHNlIGlmIChub2RlLmdldERpc3RyaWJ1dGVkTm9kZXMpIHtcbiAgICAgICAgLy8gY29udGVudCBlbGVtZW50XG4gICAgICAgIGFzc2lnbmVkTm9kZXMgPSBub2RlLmdldERpc3RyaWJ1dGVkTm9kZXMoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhc3NpZ25lZE5vZGVzID9cbiAgICAgICAgZXhwYW5kQ29udGVudEVsZW1lbnRzKGFzc2lnbmVkTm9kZXMsIGluY2x1ZGVUZXh0Tm9kZXMpIDpcbiAgICAgICAgW107XG4gICAgfSBlbHNlIGlmIChub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIC8vIFBsYWluIGVsZW1lbnQ7IHVzZSBhcyBpcy5cbiAgICAgIHJldHVybiBbbm9kZV07XG4gICAgfSBlbHNlIGlmIChub2RlIGluc3RhbmNlb2YgVGV4dCAmJiBpbmNsdWRlVGV4dE5vZGVzKSB7XG4gICAgICAvLyBUZXh0IG5vZGUuXG4gICAgICByZXR1cm4gW25vZGVdO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDb21tZW50LCBwcm9jZXNzaW5nIGluc3RydWN0aW9uLCBldGMuOyBza2lwLlxuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfSk7XG4gIGxldCBmbGF0dGVuZWQgPSBbXS5jb25jYXQoLi4uZXhwYW5kZWQpO1xuICByZXR1cm4gZmxhdHRlbmVkO1xufVxuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50LiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggZGVmaW5lcyBhIGNvbXBvbmVudCdzIGNvbnRlbnQgYXMgaXRzIGNoaWxkcmVuLCBleHBhbmRpbmcgYW55XG4gICAqIG5vZGVzIGRpc3RyaWJ1dGVkIHRvIHRoZSBjb21wb25lbnQncyBzbG90cy5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBpcyBpbnRlbmRlZCBmb3IgdXNlIHdpdGggdGhlXG4gICAqIFtEaXN0cmlidXRlZENoaWxkcmVuXShEaXN0cmlidXRlZENoaWxkcmVuLm1kKSBtaXhpbi4gU2VlIHRoYXQgbWl4aW4gZm9yIGFcbiAgICogZGlzY3Vzc2lvbiBvZiBob3cgdGhhdCB3b3Jrcy4gVGhpcyBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50IG1peGluXG4gICAqIHByb3ZpZGVzIGFuIGVhc3kgd2F5IG9mIGRlZmluaW5nIHRoZSBcImNvbnRlbnRcIiBvZiBhIGNvbXBvbmVudCBhcyB0aGVcbiAgICogY29tcG9uZW50J3MgZGlzdHJpYnV0ZWQgY2hpbGRyZW4uIFRoYXQgaW4gdHVybiBsZXRzIG1peGlucyBsaWtlXG4gICAqIFtDb250ZW50QXNJdGVtc10oQ29udGVudEFzSXRlbXMubWQpIG1hbmlwdWxhdGUgdGhlIGNoaWxkcmVuIGFzIGxpc3QgaXRlbXMuXG4gICAqL1xuICBjbGFzcyBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50IGV4dGVuZHMgYmFzZSB7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29udGVudCBvZiB0aGlzIGNvbXBvbmVudCwgZGVmaW5lZCB0byBiZSB0aGUgZmxhdHRlbmVkIGFycmF5IG9mXG4gICAgICogY2hpbGRyZW4gZGlzdHJpYnV0ZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudFtdfVxuICAgICAqL1xuICAgIGdldCBjb250ZW50KCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGlzdHJpYnV0ZWRDaGlsZHJlbjtcbiAgICB9XG4gICAgc2V0IGNvbnRlbnQodmFsdWUpIHtcbiAgICAgIGlmICgnY29udGVudCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuY29udGVudCA9IHZhbHVlOyB9XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudDtcbn07XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4vY3JlYXRlU3ltYm9sJztcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3QgZ2VuZXJpY1N5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnZ2VuZXJpYycpO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggR2VuZXJpYy4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIGFsbG93cyBhIGNvbXBvbmVudCB0byBzdXBwb3J0IGEgXCJnZW5lcmljXCIgc3R5bGU6IGEgbWluaW1hbGlzdFxuICAgKiBzdHlsZSB0aGF0IGNhbiBlYXNpbHkgYmUgcmVtb3ZlZCB0byByZXNldCBpdHMgdmlzdWFsIGFwcGVhcmFuY2UgdG8gYVxuICAgKiBiYXNlbGluZSBzdGF0ZS5cbiAgICpcbiAgICogQnkgZGVmYXVsdCwgYSBjb21wb25lbnQgc2hvdWxkIHByb3ZpZGUgYSBtaW5pbWFsIHZpc3VhbCBwcmVzZW50YXRpb24gdGhhdFxuICAgKiBhbGxvd3MgdGhlIGNvbXBvbmVudCB0byBmdW5jdGlvbi4gSG93ZXZlciwgdGhlIG1vcmUgc3R5bGluZyB0aGUgY29tcG9uZW50XG4gICAqIHByb3ZpZGVzIGJ5IGRlZmF1bHQsIHRoZSBoYXJkZXIgaXQgYmVjb21lcyB0byBnZXQgdGhlIGNvbXBvbmVudCB0byBmaXQgaW5cbiAgICogaW4gb3RoZXIgc2V0dGluZ3MuIEVhY2ggQ1NTIHJ1bGUgaGFzIHRvIGJlIG92ZXJyaWRkZW4uIFdvcnNlLCBuZXcgQ1NTIHJ1bGVzXG4gICAqIGFkZGVkIHRvIHRoZSBkZWZhdWx0IHN0eWxlIHdvbid0IGJlIG92ZXJyaWRkZW4gYnkgZGVmYXVsdCwgbWFraW5nIGl0IGhhcmRcbiAgICogdG8ga25vdyB3aGV0aGVyIGEgbmV3IHZlcnNpb24gb2YgYSBjb21wb25lbnQgd2lsbCBzdGlsbCBsb29rIG9rYXkuXG4gICAqXG4gICAqIEFzIGEgY29tcHJvbWlzZSwgdGhlIG1peGluIGRlZmluZXMgYSBgZ2VuZXJpY2AgYXR0cmlidXRlLiBUaGlzIGF0dHJpYnV0ZSBpc1xuICAgKiBub3JtYWxseSBzZXQgYnkgZGVmYXVsdCwgYW5kIHN0eWxlcyBjYW4gYmUgd3JpdHRlbiB0aGF0IGFwcGx5IG9ubHkgd2hlbiB0aGVcbiAgICogZ2VuZXJpYyBhdHRyaWJ1dGUgaXMgc2V0LiBUaGlzIGFsbG93cyB0aGUgY29uc3RydWN0aW9uIG9mIENTUyBydWxlcyB0aGF0XG4gICAqIHdpbGwgb25seSBhcHBseSB0byBnZW5lcmljIGNvbXBvbmVudHMgbGlrZTpcbiAgICpcbiAgICogICAgIDpob3N0KFtnZW5lcmljPVwiXCJdKSB7XG4gICAqICAgICAgIC4uLiBHZW5lcmljIGFwcGVhcmFuY2UgZGVmaW5lZCBoZXJlIC4uLlxuICAgKiAgICAgfVxuICAgKlxuICAgKiBUaGlzIG1ha2VzIGl0IGVhc3kgdG8gcmVtb3ZlIGFsbCBkZWZhdWx0IHN0eWxpbmcg4oCUIHNldCB0aGUgYGdlbmVyaWNgXG4gICAqIGF0dHJpYnV0ZSB0byBmYWxzZSwgYW5kIGFsbCBkZWZhdWx0IHN0eWxpbmcgd2lsbCBiZSByZW1vdmVkLlxuICAgKi9cbiAgY2xhc3MgR2VuZXJpYyBleHRlbmRzIGJhc2Uge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgLy8gU2V0IGRlZmF1bHRzLlxuICAgICAgaWYgKHR5cGVvZiB0aGlzLmdlbmVyaWMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuZ2VuZXJpYyA9IHRoaXMuZGVmYXVsdHMuZ2VuZXJpYztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUaGlzIG1peGluIGRvZXNuJ3QgYWN0dWFsbHkgcmVzcG9uZCB0byBhdHRyaWJ1dGUgY2hhbmdlcywgYnV0IHJlbGllc1xuICAgIC8vIG9uIHNlcGFyYXRlbHktZGVmaW5lZCBiZWhhdmlvciAoZS5nLiwgaW4gQXR0cmlidXRlTWFyc2hhbGxpbmcpIGZvciB0aGF0LlxuICAgIC8vIFN0aWxsLCB3ZSBuZWVkIGRlZmluZSBhIGJhc2VsaW5lIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayB0aGF0IGRvZXNcbiAgICAvLyBub3RoaW5nLCBpbiBjYXNlIHRoaXMgbWl4aW4gZ2V0cyB1c2VkIG9uIGl0cyBvd24uXG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xuICAgICAgaWYgKHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjaykgeyBzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKTsgfVxuICAgIH1cblxuICAgIGdldCBkZWZhdWx0cygpIHtcbiAgICAgIGxldCBkZWZhdWx0cyA9IHN1cGVyLmRlZmF1bHRzIHx8IHt9O1xuICAgICAgZGVmYXVsdHMuZ2VuZXJpYyA9IHRydWU7XG4gICAgICByZXR1cm4gZGVmYXVsdHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiB0aGUgY29tcG9uZW50IHdvdWxkIGxpa2UgdG8gcmVjZWl2ZSBnZW5lcmljIHN0eWxpbmcuXG4gICAgICpcbiAgICAgKiBUaGlzIHByb3BlcnR5IGlzIHRydWUgYnkgZGVmYXVsdCDigJTCoHNldCBpdCB0byBmYWxzZSB0byB0dXJuIG9mZiBhbGxcbiAgICAgKiBnZW5lcmljIHN0eWxlcy4gVGhpcyBtYWtlcyBpdCBlYXNpZXIgdG8gYXBwbHkgY3VzdG9tIHN0eWxpbmc7IHlvdSB3b24ndFxuICAgICAqIGhhdmUgdG8gZXhwbGljaXRseSBvdmVycmlkZSBzdHlsaW5nIHlvdSBkb24ndCB3YW50LlxuICAgICAqXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKi9cbiAgICBnZXQgZ2VuZXJpYygpIHtcbiAgICAgIHJldHVybiB0aGlzW2dlbmVyaWNTeW1ib2xdO1xuICAgIH1cbiAgICBzZXQgZ2VuZXJpYyh2YWx1ZSkge1xuICAgICAgaWYgKCdnZW5lcmljJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5nZW5lcmljID0gdmFsdWU7IH1cbiAgICAgIC8vIFdlIHJvbGwgb3VyIG93biBhdHRyaWJ1dGUgc2V0dGluZyBzbyB0aGF0IGFuIGV4cGxpY2l0bHkgZmFsc2UgdmFsdWVcbiAgICAgIC8vIHNob3dzIHVwIGFzIGdlbmVyaWM9XCJmYWxzZVwiLlxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdmFsdWUgPSAodmFsdWUgIT09ICdmYWxzZScpO1xuICAgICAgfVxuICAgICAgdGhpc1tnZW5lcmljU3ltYm9sXSA9IHZhbHVlO1xuICAgICAgaWYgKHZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICAvLyBFeHBsaWNpdGx5IHVzZSBmYWxzZSBzdHJpbmcuXG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdnZW5lcmljJywgJ2ZhbHNlJyk7XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgLy8gRXhwbGljaXRseSByZW1vdmUgYXR0cmlidXRlLlxuICAgICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnZ2VuZXJpYycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVXNlIHRoZSBlbXB0eSBzdHJpbmcgdG8gZ2V0IGF0dHJpYnV0ZSB0byBhcHBlYXIgd2l0aCBubyB2YWx1ZS5cbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2dlbmVyaWMnLCAnJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG4gICAgICBsZXQgYXR0cmlidXRlcyA9IGJhc2Uub2JzZXJ2ZWRBdHRyaWJ1dGVzIHx8IFtdO1xuICAgICAgcmV0dXJuIGF0dHJpYnV0ZXMuY29uY2F0KCdnZW5lcmljJyk7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gR2VuZXJpYztcbn07XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4vY3JlYXRlU3ltYm9sJztcbmltcG9ydCBtaWNyb3Rhc2sgZnJvbSAnLi9taWNyb3Rhc2snO1xuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3QgY29udGVudENoYW5nZU9ic2VydmVyU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdjb250ZW50Q2hhbmdlT2JzZXJ2ZXInKTtcblxuXG4vLyBUT0RPOiBTaG91bGQgdGhpcyBiZSByZW5hbWVkIHRvIHNvbWV0aGluZyBsaWtlIERpc3RyaWJ1dGVkQ2hpbGRyZW5DaGFuZ2VkP1xuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIE9ic2VydmVDb250ZW50Q2hhbmdlcy4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIHdpcmVzIHVwIG11dGF0aW9uIG9ic2VydmVycyB0byByZXBvcnQgYW55IGNoYW5nZXMgaW4gYVxuICAgKiBjb21wb25lbnQncyBjb250ZW50IChkaXJlY3QgY2hpbGRyZW4sIG9yIG5vZGVzIGRpc3RyaWJ1dGVkIHRvIHNsb3RzKS5cbiAgICpcbiAgICogRm9yIHRoZSB0aW1lIGJlaW5nLCB0aGlzIGNhbiBvbmx5IHN1cHBvcnQgYSBzaW5nbGUgbGV2ZWwgb2YgZGlzdHJpYnV0ZWRcbiAgICogY29udGVudC4gVGhhdCBpcywgaWYgYSBjb21wb25lbnQgY29udGFpbnMgYSBzbG90LCBhbmQgdGhlIHNldCBvZiBub2Rlc1xuICAgKiBkaXJlY3RseSBhc3NpZ25lZCB0byB0aGF0IHNsb3QgY2hhbmdlcywgdGhlbiB0aGlzIG1peGluIHdpbGwgZGV0ZWN0IHRoZVxuICAgKiBjaGFuZ2UuIEhvd2V2ZXIsIHRoaXMgbWl4aW4gZG9lcyBub3QgeWV0IGRldGVjdCBjaGFuZ2VzIGluIHJlcHJvamVjdGVkXG4gICAqIG5vZGVzLiBJZiBhIGNvbXBvbmVudCdzIGhvc3QgcGxhY2VzIGEgc2xvdCBhcyBhIGNoaWxkIG9mIHRoZSBjb21wb25lbnRcbiAgICogaW5zdGFuY2UsIG5vZGVzIGFzc2lnbmVkIHRvIHRoZSBvdXRlciBob3N0IHdpbGwgYmUgYXNzaWduZWQgdG8gdGhlIGhvc3Qnc1xuICAgKiBzbG90LCB0aGVuIHJlYXNzaWduZWQgdG8gdGhlIHNsb3QgZWxlbWVudCBpbnNpZGUgdGhlIGNvbXBvbmVudC4gQ2hhbmdlcyBpblxuICAgKiBzdWNoIHJlcHJvamVjdGVkIG5vZGVzIHdpbGwgbm90ICh5ZXQpIGJlIGRldGVjdGVkIGJ5IHRoaXMgbWl4aW4uXG4gICAqXG4gICAqIEZvciBjb21wYXJpc29uLCBzZWUgUG9seW1lcidzIG9ic2VydmVOb2RlcyBBUEksIHdoaWNoIGRvZXMgc29sdmUgdGhlXG4gICAqIHByb2JsZW0gb2YgdHJhY2tpbmcgY2hhbmdlcyBpbiByZXByb2plY3RlZCBjb250ZW50LlxuICAgKlxuICAgKiBOb3RlOiBUaGUgd2ViIHBsYXRmb3JtIHRlYW0gY3JlYXRpbmcgdGhlIHNwZWNpZmljYXRpb25zIGZvciB3ZWIgY29tcG9uZW50c1xuICAgKiBwbGFuIHRvIHJlcXVlc3QgdGhhdCBhIG5ldyB0eXBlIG9mIE11dGF0aW9uT2JzZXJ2ZXIgb3B0aW9uIGJlIGRlZmluZWQgdGhhdFxuICAgKiBsZXRzIGEgY29tcG9uZW50IG1vbml0b3IgY2hhbmdlcyBpbiBkaXN0cmlidXRlZCBjaGlsZHJlbi4gVGhpcyBtaXhpbiB3aWxsXG4gICAqIGJlIHVwZGF0ZWQgdG8gdGFrZSBhZHZhbnRhZ2Ugb2YgdGhhdCBNdXRhdGlvbk9ic2VydmVyIG9wdGlvbiB3aGVuIHRoYXRcbiAgICogYmVjb21lcyBhdmFpbGFibGUuXG4gICAqL1xuICBjbGFzcyBPYnNlcnZlQ29udGVudENoYW5nZXMgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cbiAgICAgIG9ic2VydmVDb250ZW50Q2hhbmdlcyh0aGlzKTtcblxuICAgICAgLy8gTWFrZSBhbiBpbml0aWFsIGNhbGwgdG8gY29udGVudENoYW5nZWQoKSBzbyB0aGF0IHRoZSBjb21wb25lbnQgY2FuIGRvXG4gICAgICAvLyBpbml0aWFsaXphdGlvbiB0aGF0IGl0IG5vcm1hbGx5IGRvZXMgd2hlbiBjb250ZW50IGNoYW5nZXMuXG4gICAgICAvL1xuICAgICAgLy8gVGhpcyB3aWxsIGludm9rZSBjb250ZW50Q2hhbmdlZCgpIGhhbmRsZXJzIGluIG90aGVyIG1peGlucy4gSW4gb3JkZXJcbiAgICAgIC8vIHRoYXQgdGhvc2UgbWl4aW5zIGhhdmUgYSBjaGFuY2UgdG8gY29tcGxldGUgdGhlaXIgb3duIGluaXRpYWxpemF0aW9uLFxuICAgICAgLy8gd2UgYWRkIHRoZSBjb250ZW50Q2hhbmdlZCgpIGNhbGwgdG8gdGhlIG1pY3JvdGFzayBxdWV1ZS5cbiAgICAgIG1pY3JvdGFzaygoKSA9PiB0aGlzLmNvbnRlbnRDaGFuZ2VkKCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgY29udGVudHMgb2YgdGhlIGNvbXBvbmVudCAoaW5jbHVkaW5nIGRpc3RyaWJ1dGVkXG4gICAgICogY2hpbGRyZW4pIGhhdmUgY2hhbmdlZC5cbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGFsc28gaW52b2tlZCB3aGVuIGEgY29tcG9uZW50IGlzIGZpcnN0IGluc3RhbnRpYXRlZDsgdGhlXG4gICAgICogY29udGVudHMgaGF2ZSBlc3NlbnRpYWxseSBcImNoYW5nZWRcIiBmcm9tIGJlaW5nIG5vdGhpbmcuIFRoaXMgYWxsb3dzIHRoZVxuICAgICAqIGNvbXBvbmVudCB0byBwZXJmb3JtIGluaXRpYWwgcHJvY2Vzc2luZyBvZiBpdHMgY2hpbGRyZW4uXG4gICAgICovXG4gICAgY29udGVudENoYW5nZWQoKSB7XG4gICAgICBpZiAoc3VwZXIuY29udGVudENoYW5nZWQpIHsgc3VwZXIuY29udGVudENoYW5nZWQoKTsgfVxuICAgICAgbGV0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdjb250ZW50LWNoYW5nZWQnKTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBldmVudCBpcyByYWlzZWQgd2hlbiB0aGUgY29tcG9uZW50J3MgY29udGVudHMgKGluY2x1ZGluZyBkaXN0cmlidXRlZFxuICAgICAqIGNoaWxkcmVuKSBoYXZlIGNoYW5nZWQuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgT2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzXG4gICAgICogQGV2ZW50IGNvbnRlbnQtY2hhbmdlZFxuICAgICAqL1xuICB9XG5cbiAgcmV0dXJuIE9ic2VydmVDb250ZW50Q2hhbmdlcztcbn07XG5cblxuLy8gVE9ETzogRGVjaWRlIHdoZXRoZXIgd2Ugd2FudCBhbiBvcHRpb24gdG8gdHJhY2sgY2hhbmdlcyB0byBjaGlsZHJlblxuLy8gYXR0cmlidXRlcy5cbmZ1bmN0aW9uIG9ic2VydmVDb250ZW50Q2hhbmdlcyhlbGVtZW50KSB7XG4gIGVsZW1lbnRbY29udGVudENoYW5nZU9ic2VydmVyU3ltYm9sXSA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+XG4gICAgZWxlbWVudC5jb250ZW50Q2hhbmdlZCgpXG4gICk7XG4gIGVsZW1lbnRbY29udGVudENoYW5nZU9ic2VydmVyU3ltYm9sXS5vYnNlcnZlKGVsZW1lbnQsIHtcbiAgICAvLyBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgIGNoYXJhY3RlckRhdGE6IHRydWUsXG4gICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgIHN1YnRyZWU6IHRydWVcbiAgfSk7XG59XG4iLCIvKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFNoYWRvd0VsZW1lbnRSZWZlcmVuY2VzLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gdG8gY3JlYXRlIHJlZmVyZW5jZXMgdG8gZWxlbWVudHMgaW4gYSBjb21wb25lbnQncyBTaGFkb3cgRE9NIHN1YnRyZWUuXG4gICAqXG4gICAqIFRoaXMgYWRkcyBhIG1lbWJlciBvbiB0aGUgY29tcG9uZW50IGNhbGxlZCBgdGhpcy4kYCB0aGF0IGNhbiBiZSB1c2VkIHRvXG4gICAqIHJlZmVyZW5jZSBzaGFkb3cgZWxlbWVudHMgd2l0aCBJRHMuIEUuZy4sIGlmIGNvbXBvbmVudCdzIHNoYWRvdyBjb250YWlucyBhblxuICAgKiBlbGVtZW50IGA8YnV0dG9uIGlkPVwiZm9vXCI+YCwgdGhlbiB0aGlzIG1peGluIHdpbGwgY3JlYXRlIGEgbWVtYmVyXG4gICAqIGB0aGlzLiQuZm9vYCB0aGF0IHBvaW50cyB0byB0aGF0IGJ1dHRvbi5cbiAgICpcbiAgICogU3VjaCByZWZlcmVuY2VzIHNpbXBsaWZ5IGEgY29tcG9uZW50J3MgYWNjZXNzIHRvIGl0cyBvd24gZWxlbWVudHMuIEluXG4gICAqIGV4Y2hhbmdlLCB0aGlzIG1peGluIHRyYWRlcyBvZmYgYSBvbmUtdGltZSBjb3N0IG9mIHF1ZXJ5aW5nIGFsbCBlbGVtZW50cyBpblxuICAgKiB0aGUgc2hhZG93IHRyZWUgaW5zdGVhZCBvZiBwYXlpbmcgYW4gb25nb2luZyBjb3N0IHRvIHF1ZXJ5IGZvciBhbiBlbGVtZW50XG4gICAqIGVhY2ggdGltZSB0aGUgY29tcG9uZW50IHdhbnRzIHRvIGluc3BlY3Qgb3IgbWFuaXB1bGF0ZSBpdC5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIHRoZSBjb21wb25lbnQgdG8gZGVmaW5lIGEgU2hhZG93IERPTSBzdWJ0cmVlLiBZb3UgY2FuXG4gICAqIGNyZWF0ZSB0aGF0IHRyZWUgeW91cnNlbGYsIG9yIG1ha2UgdXNlIG9mIHRoZVxuICAgKiBbU2hhZG93VGVtcGxhdGVdKFNoYWRvd1RlbXBsYXRlLm1kKSBtaXhpbi5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBpcyBpbnNwaXJlZCBieSBQb2x5bWVyJ3MgW2F1dG9tYXRpY1xuICAgKiBub2RlIGZpbmRpbmddKGh0dHBzOi8vd3d3LnBvbHltZXItcHJvamVjdC5vcmcvMS4wL2RvY3MvZGV2Z3VpZGUvbG9jYWwtZG9tLmh0bWwjbm9kZS1maW5kaW5nKVxuICAgKiBmZWF0dXJlLlxuICAgKi9cbiAgY2xhc3MgU2hhZG93RWxlbWVudFJlZmVyZW5jZXMgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cbiAgICAgIGlmICh0aGlzLnNoYWRvd1Jvb3QpIHtcbiAgICAgICAgLy8gTG9vayBmb3IgZWxlbWVudHMgaW4gdGhlIHNoYWRvdyBzdWJ0cmVlIHRoYXQgaGF2ZSBpZCBhdHRyaWJ1dGVzLlxuICAgICAgICAvLyBBbiBhbHRlcm5hdGl2ZWx5IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWl4aW4gd291bGQgYmUgdG8ganVzdCBkZWZpbmVcbiAgICAgICAgLy8gYSB0aGlzLiQgZ2V0dGVyIHRoYXQgbGF6aWx5IGRvZXMgdGhpcyBzZWFyY2ggdGhlIGZpcnN0IHRpbWUgc29tZW9uZVxuICAgICAgICAvLyB0cmllcyB0byBhY2Nlc3MgdGhpcy4kLiBUaGF0IG1pZ2h0IGludHJvZHVjZSBzb21lIGNvbXBsZXhpdHkg4oCTIGlmIHRoZVxuICAgICAgICAvLyB0aGUgdHJlZSBjaGFuZ2VkIGFmdGVyIGl0IHdhcyBmaXJzdCBwb3B1bGF0ZWQsIHRoZSByZXN1bHQgb2ZcbiAgICAgICAgLy8gc2VhcmNoaW5nIGZvciBhIG5vZGUgbWlnaHQgYmUgc29tZXdoYXQgdW5wcmVkaWN0YWJsZS5cbiAgICAgICAgdGhpcy4kID0ge307XG4gICAgICAgIGxldCBub2Rlc1dpdGhJZHMgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvckFsbCgnW2lkXScpO1xuICAgICAgICBbXS5mb3JFYWNoLmNhbGwobm9kZXNXaXRoSWRzLCBub2RlID0+IHtcbiAgICAgICAgICBsZXQgaWQgPSBub2RlLmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgICB0aGlzLiRbaWRdID0gbm9kZTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbGxlY3Rpb24gb2YgcmVmZXJlbmNlcyB0byB0aGUgZWxlbWVudHMgd2l0aCBJRHMgaW4gYSBjb21wb25lbnQnc1xuICAgICAqIFNoYWRvdyBET00gc3VidHJlZS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICogQG1lbWJlciAkXG4gICAgICovXG4gIH1cblxuICByZXR1cm4gU2hhZG93RWxlbWVudFJlZmVyZW5jZXM7XG59O1xuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBTaGFkb3dUZW1wbGF0ZS4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIGZvciBzdGFtcGluZyBhIHRlbXBsYXRlIGludG8gYSBTaGFkb3cgRE9NIHN1YnRyZWUgdXBvbiBjb21wb25lbnRcbiAgICogaW5zdGFudGlhdGlvbi5cbiAgICpcbiAgICogVG8gdXNlIHRoaXMgbWl4aW4sIGRlZmluZSBhIGB0ZW1wbGF0ZWAgcHJvcGVydHkgYXMgYSBzdHJpbmcgb3IgSFRNTFxuICAgKiBgPHRlbXBsYXRlPmAgZWxlbWVudDpcbiAgICpcbiAgICogICAgIGNsYXNzIE15RWxlbWVudCBleHRlbmRzIFNoYWRvd1RlbXBsYXRlKEhUTUxFbGVtZW50KSB7XG4gICAqICAgICAgIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICogICAgICAgICByZXR1cm4gYEhlbGxvLCA8ZW0+d29ybGQ8L2VtPi5gO1xuICAgKiAgICAgICB9XG4gICAqICAgICB9XG4gICAqXG4gICAqIFdoZW4geW91ciBjb21wb25lbnQgY2xhc3MgaXMgaW5zdGFudGlhdGVkLCBhIHNoYWRvdyByb290IHdpbGwgYmUgY3JlYXRlZCBvblxuICAgKiB0aGUgaW5zdGFuY2UsIGFuZCB0aGUgY29udGVudHMgb2YgdGhlIHRlbXBsYXRlIHdpbGwgYmUgY2xvbmVkIGludG8gdGhlXG4gICAqIHNoYWRvdyByb290LiBJZiB5b3VyIGNvbXBvbmVudCBkb2VzIG5vdCBkZWZpbmUgYSBgdGVtcGxhdGVgIHByb3BlcnR5LCB0aGlzXG4gICAqIG1peGluIGhhcyBubyBlZmZlY3QuXG4gICAqXG4gICAqIEZvciB0aGUgdGltZSBiZWluZywgdGhpcyBleHRlbnNpb24gcmV0YWlucyBzdXBwb3J0IGZvciBTaGFkb3cgRE9NIHYwLiBUaGF0XG4gICAqIHdpbGwgZXZlbnR1YWxseSBiZSBkZXByZWNhdGVkIGFzIGJyb3dzZXJzIChhbmQgdGhlIFNoYWRvdyBET00gcG9seWZpbGwpXG4gICAqIGltcGxlbWVudCBTaGFkb3cgRE9NIHYxLlxuICAgKi9cbiAgY2xhc3MgU2hhZG93VGVtcGxhdGUgZXh0ZW5kcyBiYXNlIHtcblxuICAgIC8qXG4gICAgICogSWYgdGhlIGNvbXBvbmVudCBkZWZpbmVzIGEgdGVtcGxhdGUsIGEgc2hhZG93IHJvb3Qgd2lsbCBiZSBjcmVhdGVkIG9uIHRoZVxuICAgICAqIGNvbXBvbmVudCBpbnN0YW5jZSwgYW5kIHRoZSB0ZW1wbGF0ZSBzdGFtcGVkIGludG8gaXQuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgbGV0IHRlbXBsYXRlID0gdGhpcy50ZW1wbGF0ZTtcbiAgICAgIC8vIFRPRE86IFNhdmUgdGhlIHByb2Nlc3NlZCB0ZW1wbGF0ZSB3aXRoIHRoZSBjb21wb25lbnQncyBjbGFzcyBwcm90b3R5cGVcbiAgICAgIC8vIHNvIGl0IGRvZXNuJ3QgbmVlZCB0byBiZSBwcm9jZXNzZWQgd2l0aCBldmVyeSBpbnN0YW50aWF0aW9uLlxuICAgICAgaWYgKHRlbXBsYXRlKSB7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0ZW1wbGF0ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAvLyBVcGdyYWRlIHBsYWluIHN0cmluZyB0byByZWFsIHRlbXBsYXRlLlxuICAgICAgICAgIHRlbXBsYXRlID0gY3JlYXRlVGVtcGxhdGVXaXRoSW5uZXJIVE1MKHRlbXBsYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh3aW5kb3cuU2hhZG93RE9NUG9seWZpbGwpIHtcbiAgICAgICAgICBzaGltVGVtcGxhdGVTdHlsZXModGVtcGxhdGUsIHRoaXMubG9jYWxOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByb290ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gICAgICAgIGxldCBjbG9uZSA9IGRvY3VtZW50LmltcG9ydE5vZGUodGVtcGxhdGUuY29udGVudCwgdHJ1ZSk7XG4gICAgICAgIHJvb3QuYXBwZW5kQ2hpbGQoY2xvbmUpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIFNoYWRvd1RlbXBsYXRlO1xufTtcblxuXG4vLyBDb252ZXJ0IGEgcGxhaW4gc3RyaW5nIG9mIEhUTUwgaW50byBhIHJlYWwgdGVtcGxhdGUgZWxlbWVudC5cbmZ1bmN0aW9uIGNyZWF0ZVRlbXBsYXRlV2l0aElubmVySFRNTChpbm5lckhUTUwpIHtcbiAgbGV0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgLy8gUkVWSUVXOiBJcyB0aGVyZSBhbiBlYXNpZXIgd2F5IHRvIGRvIHRoaXM/XG4gIC8vIFdlJ2QgbGlrZSB0byBqdXN0IHNldCBpbm5lckhUTUwgb24gdGhlIHRlbXBsYXRlIGNvbnRlbnQsIGJ1dCBzaW5jZSBpdCdzXG4gIC8vIGEgRG9jdW1lbnRGcmFnbWVudCwgdGhhdCBkb2Vzbid0IHdvcmsuXG4gIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LmlubmVySFRNTCA9IGlubmVySFRNTDtcbiAgd2hpbGUgKGRpdi5jaGlsZE5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICB0ZW1wbGF0ZS5jb250ZW50LmFwcGVuZENoaWxkKGRpdi5jaGlsZE5vZGVzWzBdKTtcbiAgfVxuICByZXR1cm4gdGVtcGxhdGU7XG59XG5cbi8vIEludm9rZSBiYXNpYyBzdHlsZSBzaGltbWluZyB3aXRoIFNoYWRvd0NTUy5cbmZ1bmN0aW9uIHNoaW1UZW1wbGF0ZVN0eWxlcyh0ZW1wbGF0ZSwgdGFnKSB7XG4gIHdpbmRvdy5XZWJDb21wb25lbnRzLlNoYWRvd0NTUy5zaGltU3R5bGluZyh0ZW1wbGF0ZS5jb250ZW50LCB0YWcpO1xufVxuIiwiLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gY3JlYXRlIGEgc3ltYm9sIHRoYXQgY2FuIGJlIHVzZWQgZm9yIGFzc29jaWF0aW5nIHByaXZhdGVcbiAqIGRhdGEgd2l0aCBhbiBlbGVtZW50LlxuICpcbiAqIE1peGlucyBhbmQgY29tcG9uZW50IGNsYXNzZXMgb2Z0ZW4gd2FudCB0byBhc3NvY2lhdGUgcHJpdmF0ZSBkYXRhIHdpdGggYW5cbiAqIGVsZW1lbnQgaW5zdGFuY2UsIGJ1dCBKYXZhU2NyaXB0IGRvZXMgbm90IGhhdmUgZGlyZWN0IHN1cHBvcnQgZm9yIHRydWVcbiAqIHByaXZhdGUgcHJvcGVydGllcy4gT25lIGFwcHJvYWNoIGlzIHRvIHVzZSB0aGVcbiAqIFtTeW1ib2xdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL1N5bWJvbClcbiAqIGRhdGEgdHlwZSB0byBzZXQgYW5kIHJldHJpZXZlIGRhdGEgb24gYW4gZWxlbWVudC5cbiAqXG4gKiBVbmZvcnR1bmF0ZWx5LCB0aGUgU3ltYm9sIHR5cGUgaXMgbm90IGF2YWlsYWJsZSBpbiBJbnRlcm5ldCBFeHBsb3JlciAxMS4gVGhlXG4gKiBgY3JlYXRlU3ltYm9sYCBoZWxwZXIgZnVuY3Rpb24gZXhpc3RzIGFzIGEgd29ya2Fyb3VuZCBmb3IgSUUgMTEuIFJhdGhlciB0aGFuXG4gKiByZXR1cm5pbmcgYSB0cnVlIFN5bWJvbCwgaXQgc2ltcGx5IHJldHVybnMgYW4gdW5kZXJzY29yZS1wcmVmaXhlZCBzdHJpbmcuXG4gKlxuICogVXNhZ2U6XG4gKlxuICogICAgIGNvbnN0IGZvb1N5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnZm9vJyk7XG4gKlxuICogICAgIGNsYXNzIE15RWxlbWVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAqICAgICAgIGdldCBmb28oKSB7XG4gKiAgICAgICAgIHJldHVybiB0aGlzW2Zvb1N5bWJvbF07XG4gKiAgICAgICB9XG4gKiAgICAgICBzZXQgZm9vKHZhbHVlKSB7XG4gKiAgICAgICAgIHRoaXNbZm9vU3ltYm9sXSA9IHZhbHVlO1xuICogICAgICAgfVxuICogICAgIH1cbiAqXG4gKiBJbiBJRSAxMSwgdGhpcyBzYW1wbGUgd2lsbCBcImhpZGVcIiBkYXRhIGJlaGluZCBhbiBpbnN0YW5jZSBwcm9wZXJ0eSB0aGlzLl9mb28uXG4gKiBUaGUgdXNlIG9mIHRoZSB1bmRlcnNjb3JlIGlzIG1lYW50IHRvIHJlZHVjZSAobm90IGVsaW1pbmF0ZSkgdGhlIHBvdGVudGlhbFxuICogZm9yIG5hbWUgY29uZmxpY3RzLCBhbmQgZGlzY291cmFnZSAobm90IHByZXZlbnQpIGV4dGVybmFsIGFjY2VzcyB0byB0aGlzXG4gKiBkYXRhLiBJbiBtb2Rlcm4gYnJvd3NlcnMsIHRoZSBhYm92ZSBjb2RlIHdpbGwgZWxpbWluYXRlIHRoZSBwb3RlbnRpYWwgb2ZcbiAqIG5hbWluZyBjb25mbGljdHMsIGFuZCBiZXR0ZXIgaGlkZSB0aGUgZGF0YSBiZWhpbmQgYSByZWFsIFN5bWJvbC5cbiAqXG4gKiBAZnVuY3Rpb24gY3JlYXRlU3ltYm9sXG4gKiBAcGFyYW0ge3N0cmluZ30gZGVzY3JpcHRpb24gLSBBIHN0cmluZyB0byBpZGVudGlmeSB0aGUgc3ltYm9sIHdoZW4gZGVidWdnaW5nXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVN5bWJvbChkZXNjcmlwdGlvbikge1xuICByZXR1cm4gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyA/XG4gICAgU3ltYm9sKGRlc2NyaXB0aW9uKSA6XG4gICAgYF8ke2Rlc2NyaXB0aW9ufWA7XG59XG4iLCIvKlxuICogTWljcm90YXNrIGhlbHBlciBmb3IgSUUgMTEuXG4gKlxuICogRXhlY3V0aW5nIGEgZnVuY3Rpb24gYXMgYSBtaWNyb3Rhc2sgaXMgdHJpdmlhbCBpbiBicm93c2VycyB0aGF0IHN1cHBvcnRcbiAqIHByb21pc2VzLCB3aG9zZSB0aGVuKCkgY2xhdXNlcyB1c2UgbWljcm90YXNrIHRpbWluZy4gSUUgMTEgZG9lc24ndCBzdXBwb3J0XG4gKiBwcm9taXNlcywgYnV0IGRvZXMgc3VwcG9ydCBNdXRhdGlvbk9ic2VydmVycywgd2hpY2ggYXJlIGFsc28gZXhlY3V0ZWQgYXNcbiAqIG1pY3JvdGFza3MuIFNvIHRoaXMgaGVscGVyIHVzZXMgYW4gTXV0YXRpb25PYnNlcnZlciB0byBhY2hpZXZlIG1pY3JvdGFza1xuICogdGltaW5nLlxuICpcbiAqIFNlZSBodHRwczovL2pha2VhcmNoaWJhbGQuY29tLzIwMTUvdGFza3MtbWljcm90YXNrcy1xdWV1ZXMtYW5kLXNjaGVkdWxlcy9cbiAqXG4gKiBJbnNwaXJlZCBieSBQb2x5bWVyJ3MgYXN5bmMoKSBmdW5jdGlvbi5cbiAqL1xuXG5cbi8vIFRoZSBxdWV1ZSBvZiBwZW5kaW5nIGNhbGxiYWNrcyB0byBiZSBleGVjdXRlZCBhcyBtaWNyb3Rhc2tzLlxubGV0IGNhbGxiYWNrcyA9IFtdO1xuXG4vLyBDcmVhdGUgYW4gZWxlbWVudCB0aGF0IHdlIHdpbGwgbW9kaWZ5IHRvIGZvcmNlIG9ic2VydmFibGUgbXV0YXRpb25zLlxubGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG5cbi8vIEEgbW9ub3RvbmljYWxseS1pbmNyZWFzaW5nIHZhbHVlLlxubGV0IGNvdW50ZXIgPSAwO1xuXG5cbi8qKlxuICogQWRkIGEgY2FsbGJhY2sgdG8gdGhlIG1pY3JvdGFzayBxdWV1ZS5cbiAqXG4gKiBUaGlzIHVzZXMgYSBNdXRhdGlvbk9ic2VydmVyIHNvIHRoYXQgaXQgd29ya3Mgb24gSUUgMTEuXG4gKlxuICogTk9URTogSUUgMTEgbWF5IGFjdHVhbGx5IHVzZSB0aW1lb3V0IHRpbWluZyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXJzLiBUaGlzXG4gKiBuZWVkcyBtb3JlIGludmVzdGlnYXRpb24uXG4gKlxuICogQGZ1bmN0aW9uIG1pY3JvdGFza1xuICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWljcm90YXNrKGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgLy8gRm9yY2UgYSBtdXRhdGlvbi5cbiAgZWxlbWVudC50ZXh0Q29udGVudCA9ICsrY291bnRlcjtcbn1cblxuXG4vLyBFeGVjdXRlIGFueSBwZW5kaW5nIGNhbGxiYWNrcy5cbmZ1bmN0aW9uIGV4ZWN1dGVDYWxsYmFja3MoKSB7XG4gIHdoaWxlIChjYWxsYmFja3MubGVuZ3RoID4gMCkge1xuICAgIGxldCBjYWxsYmFjayA9IGNhbGxiYWNrcy5zaGlmdCgpO1xuICAgIGNhbGxiYWNrKCk7XG4gIH1cbn1cblxuXG4vLyBDcmVhdGUgdGhlIG9ic2VydmVyLlxubGV0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZXhlY3V0ZUNhbGxiYWNrcyk7XG5vYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQsIHtcbiAgY2hhcmFjdGVyRGF0YTogdHJ1ZVxufSk7XG4iLCJpbXBvcnQgQ29tcG9zYWJsZSBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Db21wb3NhYmxlJztcbmltcG9ydCBTaGFkb3dUZW1wbGF0ZSBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TaGFkb3dUZW1wbGF0ZSc7XG5pbXBvcnQgU2hhZG93RWxlbWVudFJlZmVyZW5jZXMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2hhZG93RWxlbWVudFJlZmVyZW5jZXMnO1xuaW1wb3J0IEF0dHJpYnV0ZU1hcnNoYWxsaW5nIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0F0dHJpYnV0ZU1hcnNoYWxsaW5nJztcbmltcG9ydCBEaXN0cmlidXRlZENoaWxkcmVuIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW4nO1xuXG5cbi8qKlxuICogQSBzYW1wbGUgZ2VuZXJhbC1wdXJwb3NlIGJhc2UgY2xhc3MgZm9yIGRlZmluaW5nIGN1c3RvbSBlbGVtZW50cyB0aGF0IG1peGVzXG4gKiBpbiBzb21lIGNvbW1vbiBmZWF0dXJlczogdGVtcGxhdGUgc3RhbXBpbmcgaW50byBhIHNoYWRvdyByb290LCBzaGFkb3cgZWxlbWVudFxuICogcmVmZXJlbmNlcywgbWFyc2hhbGxpbmcgYXR0cmlidXRlcyB0byBwcm9wZXJ0aWVzLCBhbmQgcmV0cmlldmluZyB0aGUgY2hpbGRyZW5cbiAqIGRpc3RyaWJ1dGVkIHRvIGEgY29tcG9uZW50LlxuICpcbiAqIFRoaXMgYmFzZSBjbGFzcyBpcyBub3Qgc3BlY2lhbCBpbiBhbnkgd2F5LCBhbmQgaXMgZGVmaW5lZCBvbmx5IGFzIGFcbiAqIGNvbnZlbmllbnQgc2hvcnRoYW5kIGZvciBhcHBseWluZyB0aGUgbWl4aW5zIGxpc3RlZCBhYm92ZS4gWW91IGNhbiB1c2UgdGhpc1xuICogY2xhc3MgYXMgYSBiYXNlIGNsYXNzIGZvciB5b3VyIG93biBlbGVtZW50cywgb3IgZWFzaWx5IGNyZWF0ZSB5b3VyIG93biBiYXNlXG4gKiBjbGFzcyBieSBhcHBseWluZyB0aGUgc2FtZSBzZXQgb2YgbWl4aW5zLlxuICpcbiAqIFRoZSBFbGVtZW50QmFzZSBiYXNlIGNsYXNzIGRvZXMgbm90IHJlZ2lzdGVyIGl0c2VsZiBhcyBhIGN1c3RvbSBlbGVtZW50IHdpdGhcbiAqIHRoZSBicm93c2VyLCBhbmQgaGVuY2UgY2Fubm90IGJlIGluZGVwZW5kZW50bHkgaW5zdGFudGlhdGVkLlxuICpcbiAqIEBtaXhlcyBBdHRyaWJ1dGVNYXJzaGFsbGluZyBcbiAqIEBtaXhlcyBDb21wb3NhYmxlXG4gKiBAbWl4ZXMgRGlzdHJpYnV0ZWRDaGlsZHJlblxuICogQG1peGVzIFNoYWRvd0VsZW1lbnRSZWZlcmVuY2VzXG4gKiBAbWl4ZXMgU2hhZG93VGVtcGxhdGVcbiAqL1xuY2xhc3MgRWxlbWVudEJhc2UgZXh0ZW5kcyBDb21wb3NhYmxlKEhUTUxFbGVtZW50KS5jb21wb3NlKFxuICBTaGFkb3dUZW1wbGF0ZSwgICAgICAgICAgLy8gYmVmb3JlIG5vZGUgZmluZGluZywgc28gc2hhZG93IHJvb3QgaXMgcG9wdWxhdGVkXG4gIFNoYWRvd0VsZW1lbnRSZWZlcmVuY2VzLCAvLyBiZWZvcmUgbWFyc2hhbGxpbmcsIHNvIHByb3BlcnRpZXMgY2FuIHVzZSByZWZzXG4gIEF0dHJpYnV0ZU1hcnNoYWxsaW5nLFxuICBEaXN0cmlidXRlZENoaWxkcmVuXG4pIHtcblxuICAvKlxuICAgKiBEZWJ1Z2dpbmcgdXRpbGl0eTogbG9ncyBhIG1lc3NhZ2UsIHByZWZpeGVkIGJ5IHRoZSBjb21wb25lbnQncyB0YWcuXG4gICAqL1xuICBsb2codGV4dCkge1xuICAgIGlmIChzdXBlci5sb2cpIHsgc3VwZXIubG9nKHRleHQpOyB9XG4gICAgY29uc29sZS5sb2coYCR7dGhpcy5sb2NhbE5hbWV9OiAke3RleHR9YCk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBFbGVtZW50QmFzZTtcbiIsImltcG9ydCBFbGVtZW50QmFzZSBmcm9tICcuLi8uLi9iYXNpYy1lbGVtZW50LWJhc2Uvc3JjL0VsZW1lbnRCYXNlJztcblxuXG4vKlxuICogQSBzZXQgb2YgZXZlbnRzIHdoaWNoLCBpZiBmaXJlZCBieSB0aGUgaW5uZXIgc3RhbmRhcmQgZWxlbWVudCwgc2hvdWxkIGJlXG4gKiByZS1yYWlzZWQgYnkgdGhlIGN1c3RvbSBlbGVtZW50LiAoV2Ugb25seSBuZWVkIHRvIGRvIHRoYXQgdW5kZXIgbmF0aXZlXG4gKiBTaGFkb3cgRE9NLCBub3QgdGhlIHBvbHlmaWxsLilcbiAqXG4gKiBUaGVzZSBhcmUgZXZlbnRzIHdoaWNoIGFyZSBzcGVjJ2VkIHRvIE5PVCBnZXQgcmV0YXJnZXR0ZWQgYWNyb3NzIGEgU2hhZG93IERPTVxuICogYm91bmRhcnksIG9yZ2FuaXplZCBieSB3aGljaCBlbGVtZW50KHMpIHJhaXNlIHRoZSBldmVudHMuIFRvIHByb3Blcmx5XG4gKiBzaW11bGF0ZSB0aGVzZSwgd2Ugd2lsbCBuZWVkIHRvIGxpc3RlbiBmb3IgdGhlIHJlYWwgZXZlbnRzLCB0aGVuIHJlLXJhaXNlIGFcbiAqIHNpbXVsYXRpb24gb2YgdGhlIG9yaWdpbmFsIGV2ZW50LiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlXG4gKiBodHRwczovL3d3dy53My5vcmcvVFIvc2hhZG93LWRvbS8jaC1ldmVudHMtdGhhdC1hcmUtbm90LWxlYWtlZC1pbnRvLWFuY2VzdG9yLXRyZWVzLlxuICpcbiAqIEl0IGFwcGVhcnMgdGhhdCB3ZSBkbyAqbm90KiBuZWVkIHRvIHJlLXJhaXNlIHRoZSBub24tYnViYmxpbmcgXCJmb2N1c1wiIGFuZFxuICogXCJibHVyXCIgZXZlbnRzLiBUaGVzZSBhcHBlYXIgdG8gYmUgYXV0b21hdGljYWxseSByZS1yYWlzZWQgYXMgZXhwZWN0ZWQgLS0gYnV0XG4gKiBpdCdzIG5vdCBjbGVhciB3aHkgdGhhdCBoYXBwZW5zLlxuICpcbiAqIFRoZSBsaXN0IGJlbG93IGlzIHJlYXNvbmFibHkgY29tcGxldGUuIEl0IG9taXRzIGVsZW1lbnRzIHRoYXQgY2Fubm90IGJlXG4gKiB3cmFwcGVkIChzZWUgY2xhc3Mgbm90ZXMgYWJvdmUpLiBBbHNvLCB3ZSBoYXZlbid0IGFjdHVhbGx5IHRyaWVkIHdyYXBwaW5nXG4gKiBldmVyeSBlbGVtZW50IGluIHRoaXMgbGlzdDsgc29tZSBvZiB0aGUgbW9yZSBvYnNjdXJlIG9uZXMgbWlnaHQgbm90IGFjdHVhbGx5XG4gKiB3b3JrIGFzIGV4cGVjdGVkLCBidXQgaXQgd2FzIGVhc2llciB0byBpbmNsdWRlIHRoZW0gZm9yIGNvbXBsZXRlbmVzcyB0aGFuXG4gKiB0byBhY3R1YWxseSB2ZXJpZnkgd2hldGhlciBvciBub3QgdGhlIGVsZW1lbnQgY2FuIGJlIHdyYXBwZWQuXG4gKi9cbmNvbnN0IHJlcmFpc2VFdmVudHMgPSB7XG4gIGFkZHJlc3M6IFsnc2Nyb2xsJ10sXG4gIGJsb2NrcXVvdGU6IFsnc2Nyb2xsJ10sXG4gIGNhcHRpb246IFsnc2Nyb2xsJ10sXG4gIGNlbnRlcjogWydzY3JvbGwnXSxcbiAgZGQ6IFsnc2Nyb2xsJ10sXG4gIGRpcjogWydzY3JvbGwnXSxcbiAgZGl2OiBbJ3Njcm9sbCddLFxuICBkbDogWydzY3JvbGwnXSxcbiAgZHQ6IFsnc2Nyb2xsJ10sXG4gIGZpZWxkc2V0OiBbJ3Njcm9sbCddLFxuICBmb3JtOiBbJ3Jlc2V0JywgJ3Njcm9sbCddLFxuICBmcmFtZTogWydsb2FkJ10sXG4gIGgxOiBbJ3Njcm9sbCddLFxuICBoMjogWydzY3JvbGwnXSxcbiAgaDM6IFsnc2Nyb2xsJ10sXG4gIGg0OiBbJ3Njcm9sbCddLFxuICBoNTogWydzY3JvbGwnXSxcbiAgaDY6IFsnc2Nyb2xsJ10sXG4gIGlmcmFtZTogWydsb2FkJ10sXG4gIGltZzogWydhYm9ydCcsICdlcnJvcicsICdsb2FkJ10sXG4gIGlucHV0OiBbJ2Fib3J0JywgJ2NoYW5nZScsICdlcnJvcicsICdzZWxlY3QnLCAnbG9hZCddLFxuICBrZXlnZW46IFsncmVzZXQnLCAnc2VsZWN0J10sXG4gIGxpOiBbJ3Njcm9sbCddLFxuICBsaW5rOiBbJ2xvYWQnXSxcbiAgbWVudTogWydzY3JvbGwnXSxcbiAgb2JqZWN0OiBbJ2Vycm9yJywgJ3Njcm9sbCddLFxuICBvbDogWydzY3JvbGwnXSxcbiAgcDogWydzY3JvbGwnXSxcbiAgc2NyaXB0OiBbJ2Vycm9yJywgJ2xvYWQnXSxcbiAgc2VsZWN0OiBbJ2NoYW5nZScsICdzY3JvbGwnXSxcbiAgdGJvZHk6IFsnc2Nyb2xsJ10sXG4gIHRmb290OiBbJ3Njcm9sbCddLFxuICB0aGVhZDogWydzY3JvbGwnXSxcbiAgdGV4dGFyZWE6IFsnY2hhbmdlJywgJ3NlbGVjdCcsICdzY3JvbGwnXVxufTtcblxuXG4vLyBLZWVwIHRyYWNrIG9mIHdoaWNoIHJlLXJhaXNlZCBldmVudHMgc2hvdWxkIGJ1YmJsZS5cbmNvbnN0IGV2ZW50QnViYmxlcyA9IHtcbiAgYWJvcnQ6IHRydWUsXG4gIGNoYW5nZTogdHJ1ZSxcbiAgcmVzZXQ6IHRydWVcbn07XG5cblxuLy8gRWxlbWVudHMgd2hpY2ggYXJlIGRpc3BsYXk6IGJsb2NrIGJ5IGRlZmF1bHQuXG4vLyBTb3VyY2U6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvQmxvY2stbGV2ZWxfZWxlbWVudHNcbmNvbnN0IGJsb2NrRWxlbWVudHMgPSBbXG4gICdhZGRyZXNzJyxcbiAgJ2FydGljbGUnLFxuICAnYXNpZGUnLFxuICAnYmxvY2txdW90ZScsXG4gICdjYW52YXMnLFxuICAnZGQnLFxuICAnZGl2JyxcbiAgJ2RsJyxcbiAgJ2ZpZWxkc2V0JyxcbiAgJ2ZpZ2NhcHRpb24nLFxuICAnZmlndXJlJyxcbiAgJ2Zvb3RlcicsXG4gICdmb3JtJyxcbiAgJ2gxJyxcbiAgJ2gyJyxcbiAgJ2gzJyxcbiAgJ2g0JyxcbiAgJ2g1JyxcbiAgJ2g2JyxcbiAgJ2hlYWRlcicsXG4gICdoZ3JvdXAnLFxuICAnaHInLFxuICAnbGknLFxuICAnbWFpbicsXG4gICduYXYnLFxuICAnbm9zY3JpcHQnLFxuICAnb2wnLFxuICAnb3V0cHV0JyxcbiAgJ3AnLFxuICAncHJlJyxcbiAgJ3NlY3Rpb24nLFxuICAndGFibGUnLFxuICAndGZvb3QnLFxuICAndWwnLFxuICAndmlkZW8nXG5dO1xuXG5cbi8qKlxuICogV3JhcHMgYSBzdGFuZGFyZCBIVE1MIGVsZW1lbnQgc28gdGhhdCB0aGUgc3RhbmRhcmQgYmVoYXZpb3IgY2FuIHRoZW4gYmVcbiAqIGV4dGVuZGVkLlxuICpcbiAqIFtMaXZlIGRlbW9dKGh0dHA6Ly9iYXNpY3dlYmNvbXBvbmVudHMub3JnL2Jhc2ljLXdlYi1jb21wb25lbnRzL3BhY2thZ2VzL2Jhc2ljLXdyYXBwZWQtc3RhbmRhcmQtZWxlbWVudC8pXG4gKlxuICogU2VlIGFsc28gW2Jhc2ljLWF1dG9zaXplLXRleHRhcmVhXSguLi9iYXNpYy1hdXRvc2l6ZS10ZXh0YXJlYSkgYW5kXG4gKiBbYmFzaWMtY3VycmVudC1hbmNob3JdKC4uL2Jhc2ljLWN1cnJlbnQtYW5jaG9yKS4gVGhlIGZvcm1lciB1c2VzXG4gKiBXcmFwcGVkU3RhbmRhcmRFbGVtZW50IHRvIHdyYXAgYSBzdGFuZGFyZCBgPHRleHRhcmVhPmAgYW5kIGA8YT5gLFxuICogcmVzcGVjdGl2ZWx5LlxuICpcbiAqIFRoZSBDdXN0b20gRWxlbWVudHMgc3BlYyBkb2VzIG5vdCBjdXJyZW50bHkgKGFzIG9mIE1hcmNoIDIwMTYpIGFsbG93IHlvdSB0b1xuICogZXh0ZW5kIHRoZSBiZWhhdmlvciBvZiBhIHN0YW5kYXJkIEhUTUwgZWxlbWVudCBsaWtlIGA8YT5gIG9yIGA8YnV0dG9uPmAuXG4gKiBBcyBhIHBhcnRpYWwgd29ya2Fyb3VuZCwgdGhlIFdyYXBwZWRTdGFuZGFyZEVsZW1lbnQgY2xhc3MgY2FuIGNyZWF0ZSBhIGNsYXNzXG4gKiBmb3IgeW91IHRoYXQgd3JhcHMgYW4gaW5zdGFuY2Ugb2YgYSBzdGFuZGFyZCBIVE1MIGVsZW1lbnQuIEZvciBleGFtcGxlLCB0aGVcbiAqIGNvZGUgYmVsb3cgY3JlYXRlcyBhIGNsYXNzIHRoYXQgd2lsbCB3cmFwIGFuIGluc3RhbmNlIG9mIGEgc3RhbmRhcmQgYDxhPmBcbiAqIGVsZW1lbnQ6XG4gKlxuICogICAgIGNsYXNzIFdyYXBwZWRBIGV4dGVuZHMgV3JhcHBlZFN0YW5kYXJkRWxlbWVudC53cmFwKCdhJykge1xuICogICAgICAgY3VzdG9tTWV0aG9kKCkgeyAuLi4gfVxuICogICAgIH1cbiAqICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ3dyYXBwZWQtYScsIFdyYXBwZWRBKTtcbiAqXG4gKiBBbiBpbnN0YW5jZSBvZiB0aGUgcmVzdWx0aW5nIGNsYXNzIHdpbGwgbG9vayB0byB0aGUgdXNlciBsaWtlIGFuIGluc3RhbmNlIG9mXG4gKiB0aGUgc3RhbmRhcmQgZWxlbWVudCBjbGFzcyBpdCB3cmFwcy4gVGhlIHJlc3VsdGluZyBjbGFzcyB3aWxsICpub3QqIGJlIGFuXG4gKiBgaW5zdGFuY2VvZmAgdGhlIHN0YW5kYXJkIGNsYXNzIChoZXJlLCBIVE1MQW5jaG9yRWxlbWVudCkuIEFub3RoZXIgbGltaXRhdGlvblxuICogaXMgdGhhdCB0aGUgcmVzdWx0aW5nIGA8d3JhcHBlZC1hPmAgd2lsbCBub3QgYXV0b21hdGljYWxseSBwaWNrIHVwIENTUyBzdHlsZXNcbiAqIGZvciBzdGFuZGFyZCBgPGE+YCBlbGVtZW50cy4gSG93ZXZlciwgdGhlIHJlc3VsdGluZyBjbGFzcyAqY2FuKiBiZSBleHRlbmRlZC5cbiAqIEUuZy4sIGluc3RhbmNlcyBvZiB0aGUgYWJvdmUgY2xhc3MgaGF2ZSBhIGBjdXN0b21NZXRob2QoKWAgYXZhaWxhYmxlIHRvIHRoZW0uXG4gKlxuICogQW55IHByb3BlcnRpZXMgZGVmaW5lZCBieSB0aGUgb3JpZ2luYWwgc3RhbmRhcmQgZWxlbWVudCB3aWxsIGJlIGV4cG9zZWQgb25cbiAqIHRoZSByZXN1bHRpbmcgd3JhcHBlciBjbGFzcywgYW5kIGNhbGxzIHRvIGdldCBvciBzZXQgdGhvc2UgcHJvcGVydGllcyB3aWxsIGJlXG4gKiBkZWxlZ2F0ZWQgdG8gdGhlIHdyYXBwZWQgZWxlbWVudCBpbnN0YW5jZS4gQ29udGludWluZyB0aGUgYWJvdmUgZXhhbXBsZTpcbiAqXG4gKiAgICAgbGV0IHdyYXBwZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd3cmFwcGVkLWEnKTtcbiAqICAgICB3cmFwcGVkLmhyZWYgPSAnaHR0cDovL2V4YW1wbGUuY29tLyc7XG4gKiAgICAgd3JhcHBlZC50ZXh0Q29udGVudCA9ICdDbGljayBoZXJlJztcbiAqXG4gKiBIZXJlLCB0aGUgY3JlYXRlZCBjdXN0b20gYDx3cmFwcGVkLWE+YCBlbGVtZW50IHdpbGwgY29udGFpbiBpbnNpZGUgaXRzXG4gKiBzaGFkb3cgdHJlZSBhbiBpbnN0YW5jZSBvZiBhIHN0YW5kYXJkIGA8YT5gIGVsZW1lbnQuIFRoZSBjYWxsIHRvIHNldCB0aGVcbiAqIHdyYXBwZXIncyBgaHJlZmAgcHJvcGVydHkgd2lsbCB1bHRpbWF0ZWx5IHNldCB0aGUgYGhyZWZgIG9uIHRoZSBpbm5lciBsaW5rLlxuICogTW9yZW92ZXIsIHRoZSB0ZXh0IGNvbnRlbnQgb2YgdGhlIGA8d3JhcHBlZC1hPmAgZWxlbWVudCB3aWxsIGFwcGVhciBpbnNpZGVcbiAqIHRoZSBpbm5lciBsaW5rLiBUaGUgcmVzdWx0IG9mIGFsbCB0aGlzIGlzIHRoYXQgdGhlIHVzZXIgd2lsbCBzZWUgd2hhdCAqbG9va3MqXG4gKiBsaWtlIGEgbm9ybWFsIGxpbmssIGp1c3QgYXMgaWYgeW91IGhhZCB3cml0dGVuXG4gKiBgPGEgaHJlZj1cImh0dHA6Ly9leGFtcGxlLmNvbS9cIj5DbGljayBoZXJlPC9hPmAuIEhvd2V2ZXIsIHRoZSBhY3R1YWwgZWxlbWVudFxuICogd2lsbCBiZSBhbiBpbnN0YW5jZSBvZiB5b3VyIGN1c3RvbSBjbGFzcywgd2l0aCB3aGF0ZXZlciBiZWhhdmlvciB5b3UndmVcbiAqIGRlZmluZWQgZm9yIGl0LlxuICpcbiAqIFdyYXBwZWQgZWxlbWVudHMgc2hvdWxkIHJhaXNlIHRoZSBzYW1lIGV2ZW50cyBhcyB0aGUgb3JpZ2luYWwgc3RhbmRhcmRcbiAqIGVsZW1lbnRzLiBFLmcuLCBpZiB5b3Ugd3JhcCBhbiBgPGltZz5gIGVsZW1lbnQsIHRoZSB3cmFwcGVkIHJlc3VsdCB3aWxsIHJhaXNlXG4gKiB0aGUgc3RhbmRhcmQgYGxvYWRgIGV2ZW50IGFzIGV4cGVjdGVkLlxuICpcbiAqIFNvbWUgZWxlbWVudHMsIHN1Y2ggYXMgYDxib2R5PmAsIGA8aHRtbD5gLCBhbmQgYDxzdHlsZT5gIGNhbm5vdCBiZSB3cmFwcGVkXG4gKiBhbmQgc3RpbGwgYWNoaWV2ZSB0aGVpciBzdGFuZGFyZCBiZWhhdmlvci5cbiAqXG4gKiBAZXh0ZW5kcyBFbGVtZW50QmFzZVxuICovXG5jbGFzcyBXcmFwcGVkU3RhbmRhcmRFbGVtZW50IGV4dGVuZHMgRWxlbWVudEJhc2Uge1xuXG4gIC8qKlxuICAgKiBBIGRlc2NyaXB0aW9uIGZvciB0aGUgdXNlciBvZiB0aGUgZWxlbWVudCdzIHB1cnBvc2Ugb24gdGhlIHBhZ2UuIFNldHRpbmdcbiAgICogdGhpcyBhcHBsaWVzIHRoZSBsYWJlbCB0byB0aGUgaW5uZXIgZWxlbWVudCwgZW5zdXJpbmcgdGhhdCBzY3JlZW4gcmVhZGVyc1xuICAgKiBhbmQgb3RoZXIgYXNzaXN0aXZlIHRlY2hub2xvZ2llcyB3aWxsIHByb3ZpZGUgYSBtZWFuaW5nZnVsIGRlc2NyaXB0aW9uIHRvXG4gICAqIHRoZSB1c2VyLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IGFyaWFMYWJlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbm5lci5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKTtcbiAgfVxuICBzZXQgYXJpYUxhYmVsKGxhYmVsKSB7XG4gICAgLy8gUHJvcGFnYXRlIHRoZSBBUklBIGxhYmVsIHRvIHRoZSBpbm5lciB0ZXh0YXJlYS5cbiAgICB0aGlzLmlubmVyLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIGxhYmVsKTtcbiAgfVxuXG5cbiAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cblxuICAgIC8vIExpc3RlbiBmb3IgYW55IGV2ZW50cyByYWlzZWQgYnkgdGhlIGlubmVyIGVsZW1lbnQgd2hpY2ggd2lsbCBub3RcbiAgICAvLyBhdXRvbWF0aWNhbGx5IGJlIHJldGFyZ2V0dGVkIGFjcm9zcyB0aGUgU2hhZG93IERPTSBib3VuZGFyeSwgYW5kIHJlLXJhaXNlXG4gICAgLy8gdGhvc2UgZXZlbnRzIHdoZW4gdGhleSBoYXBwZW4uXG4gICAgLy9cbiAgICAvLyBOb3RlOiBJdCdzIHVuY2xlYXIgd2h5IHdlIG5lZWQgdG8gZG8gdGhpcyBpbiB0aGUgU2hhZG93IERPTSBwb2x5ZmlsbC5cbiAgICAvLyBJbiB0aGVvcnksIGV2ZW50cyBpbiB0aGUgbGlnaHQgRE9NIHNob3VsZCBidWJibGUgYXMgbm9ybWFsLiBCdXQgdGhpc1xuICAgIC8vIGNvZGUgYXBwZWFycyB0byBiZSByZXF1aXJlZCBpbiB0aGUgcG9seWZpbGwgY2FzZSBhcyB3ZWxsLlxuICAgIGxldCBldmVudE5hbWVzID0gcmVyYWlzZUV2ZW50c1t0aGlzLmV4dGVuZHNdIHx8IFtdO1xuICAgIGV2ZW50TmFtZXMuZm9yRWFjaChldmVudE5hbWUgPT4ge1xuICAgICAgdGhpcy5pbm5lci5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgcmVhbEV2ZW50ID0+IHtcbiAgICAgICAgbGV0IGV2ZW50ID0gbmV3IEV2ZW50KGV2ZW50TmFtZSwge1xuICAgICAgICAgIGJ1YmJsZXM6IGV2ZW50QnViYmxlc1tldmVudE5hbWVdIHx8IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgcmVmZXJlbmNlIHRvIHRoZSBpbm5lciBzdGFuZGFyZCBIVE1MIGVsZW1lbnQuXG4gICAqXG4gICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICovXG4gIGdldCBpbm5lcigpIHtcbiAgICByZXR1cm4gdGhpcy4kLmlubmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSBjb3BpZWQgaW50byB0aGUgc2hhZG93IHRyZWUgb2YgbmV3IGluc3RhbmNlcyBvZiB0aGlzIGVsZW1lbnQuXG4gICAqXG4gICAqIFRoZSBkZWZhdWx0IHZhbHVlIG9mIHRoaXMgcHJvcGVydHkgaXMgYSB0ZW1wbGF0ZSB0aGF0IGluY2x1ZGVzIGFuIGluc3RhbmNlXG4gICAqIHRoZSBzdGFuZGFyZCBlbGVtZW50IGJlaW5nIHdyYXBwZWQsIHdpdGggYSBgPHNsb3Q+YCBlbGVtZW50IGluc2lkZSB0aGF0XG4gICAqIHRvIHBpY2sgdXAgdGhlIGVsZW1lbnQncyBsaWdodCBET00gY29udGVudC4gRm9yIGV4YW1wbGUsIGlmIHlvdSB3cmFwIGFuXG4gICAqIGA8YT5gIGVsZW1lbnQsIHRoZW4gdGhlIGRlZmF1bHQgdGVtcGxhdGUgd2lsbCBsb29rIGxpa2U6XG4gICAqXG4gICAqICAgICA8dGVtcGxhdGU+XG4gICAqICAgICAgIDxzdHlsZT5cbiAgICogICAgICAgOmhvc3Qge1xuICAgKiAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICogICAgICAgfVxuICAgKiAgICAgICA8L3N0eWxlPlxuICAgKiAgICAgICA8YSBpZD1cImlubmVyXCI+XG4gICAqICAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgKiAgICAgICA8L2E+XG4gICAqICAgICA8L3RlbXBsYXRlPlxuICAgKlxuICAgKiBUaGUgYGRpc3BsYXlgIHN0eWxpbmcgYXBwbGllZCB0byB0aGUgaG9zdCB3aWxsIGJlIGBibG9ja2AgZm9yIGVsZW1lbnRzIHRoYXRcbiAgICogYXJlIGJsb2NrIGVsZW1lbnRzIGJ5IGRlZmF1bHQsIGFuZCBgaW5saW5lLWJsb2NrYCAobm90IGBpbmxpbmVgKSBmb3Igb3RoZXJcbiAgICogZWxlbWVudHMuXG4gICAqXG4gICAqIElmIHlvdSdkIGxpa2UgdGhlIHRlbXBsYXRlIHRvIGluY2x1ZGUgb3RoZXIgZWxlbWVudHMsIHRoZW4gb3ZlcnJpZGUgdGhpc1xuICAgKiBwcm9wZXJ0eSBhbmQgcmV0dXJuIGEgdGVtcGxhdGUgb2YgeW91ciBvd24uIFRoZSB0ZW1wbGF0ZSBzaG91bGQgaW5jbHVkZSBhblxuICAgKiBpbnN0YW5jZSBvZiB0aGUgc3RhbmRhcmQgSFRNTCBlbGVtZW50IHlvdSBhcmUgd3JhcHBpbmcsIGFuZCB0aGUgSUQgb2YgdGhhdFxuICAgKiBlbGVtZW50IHNob3VsZCBiZSBcImlubmVyXCIuXG4gICAqXG4gICAqIEB0eXBlIHsoc3RyaW5nfEhUTUxUZW1wbGF0ZUVsZW1lbnQpfVxuICAgKi9cbiAgZ2V0IHRlbXBsYXRlKCkge1xuICAgIGxldCBkaXNwbGF5ID0gYmxvY2tFbGVtZW50cy5pbmRleE9mKHRoaXMuZXh0ZW5kcykgPj0gMCA/XG4gICAgICAnYmxvY2snIDpcbiAgICAgICdpbmxpbmUtYmxvY2snO1xuICAgIC8vIFRPRE86IFVzZSBzbG90IGluc3RlYWQgb2YgY29udGVudC5cbiAgICByZXR1cm4gYDxzdHlsZT46aG9zdCB7IGRpc3BsYXk6ICR7ZGlzcGxheX19PC9zdHlsZT48JHt0aGlzLmV4dGVuZHN9IGlkPVwiaW5uZXJcIj48Y29udGVudD48L2NvbnRlbnQ+PC8ke3RoaXMuZXh0ZW5kc31gO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBjbGFzcyB0aGF0IHdyYXBzIGEgc3RhbmRhcmQgSFRNTCBlbGVtZW50LlxuICAgKlxuICAgKiBOb3RlIHRoYXQgdGhlIHJlc3VsdGluZyBjbGFzcyBpcyBhIHN1YmNsYXNzIG9mIFdyYXBwZWRTdGFuZGFyZEVsZW1lbnQsIG5vdFxuICAgKiB0aGUgc3RhbmRhcmQgY2xhc3MgYmVpbmcgd3JhcHBlZC4gRS5nLiwgaWYgeW91IGNhbGxcbiAgICogYFdyYXBwZWRTdGFuZGFyZEVsZW1lbnQud3JhcCgnYScpYCwgeW91IHdpbGwgZ2V0IGEgY2xhc3Mgd2hvc2Ugc2hhZG93IHRyZWVcbiAgICogd2lsbCBpbmNsdWRlIGFuIGFuY2hvciBlbGVtZW50LCBidXQgdGhlIGNsYXNzIHdpbGwgKm5vdCogaW5oZXJpdCBmcm9tXG4gICAqIEhUTUxBbmNob3JFbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXh0ZW5kc1RhZyAtIHRoZSBzdGFuZGFyZCBIVE1MIGVsZW1lbnQgdGFnIHRvIGV4dGVuZFxuICAgKi9cbiAgc3RhdGljIHdyYXAoZXh0ZW5kc1RhZykge1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBuZXcgY2xhc3MuXG4gICAgY2xhc3MgV3JhcHBlZCBleHRlbmRzIFdyYXBwZWRTdGFuZGFyZEVsZW1lbnQge31cblxuICAgIC8vIEluZGljYXRlIHdoaWNoIHRhZyBpdCB3cmFwcy5cbiAgICBXcmFwcGVkLnByb3RvdHlwZS5leHRlbmRzID0gZXh0ZW5kc1RhZztcblxuICAgIC8vIENyZWF0ZSBnZXR0ZXIvc2V0dGVycyB0aGF0IGRlbGVnYXRlIHRvIHRoZSB3cmFwcGVkIGVsZW1lbnQuXG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGV4dGVuZHNUYWcpO1xuICAgIGxldCBleHRlbmRzUHJvdG90eXBlID0gZWxlbWVudC5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gICAgbGV0IG5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZXh0ZW5kc1Byb3RvdHlwZSk7XG4gICAgbmFtZXMuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgICAgbGV0IGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGV4dGVuZHNQcm90b3R5cGUsIG5hbWUpO1xuICAgICAgICBsZXQgZGVsZWdhdGUgPSBjcmVhdGVQcm9wZXJ0eURlbGVnYXRlKG5hbWUsIGRlc2NyaXB0b3IpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoV3JhcHBlZC5wcm90b3R5cGUsIG5hbWUsIGRlbGVnYXRlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBXcmFwcGVkO1xuICB9XG5cbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVQcm9wZXJ0eURlbGVnYXRlKG5hbWUsIGRlc2NyaXB0b3IpIHtcbiAgbGV0IGRlbGVnYXRlID0ge1xuICAgIGNvbmZpZ3VyYWJsZTogZGVzY3JpcHRvci5jb25maWd1cmFibGUsXG4gICAgZW51bWVyYWJsZTogZGVzY3JpcHRvci5lbnVtZXJhYmxlLFxuICB9O1xuICBpZiAoZGVzY3JpcHRvci5nZXQpIHtcbiAgICBkZWxlZ2F0ZS5nZXQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmlubmVyW25hbWVdO1xuICAgIH07XG4gIH1cbiAgaWYgKGRlc2NyaXB0b3Iuc2V0KSB7XG4gICAgZGVsZWdhdGUuc2V0ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHRoaXMuaW5uZXJbbmFtZV0gPSB2YWx1ZTtcbiAgICB9O1xuICB9XG4gIGlmIChkZXNjcmlwdG9yLndyaXRhYmxlKSB7XG4gICAgZGVsZWdhdGUud3JpdGFibGUgPSBkZXNjcmlwdG9yLndyaXRhYmxlO1xuICB9XG4gIHJldHVybiBkZWxlZ2F0ZTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBXcmFwcGVkU3RhbmRhcmRFbGVtZW50O1xuIl19
