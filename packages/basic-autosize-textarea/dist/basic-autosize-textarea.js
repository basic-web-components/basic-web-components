(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ElementBase = require('../../basic-element-base/src/ElementBase');

var _ElementBase2 = _interopRequireDefault(_ElementBase);

var _ChildrenContent = require('../../basic-component-mixins/src/ChildrenContent');

var _ChildrenContent2 = _interopRequireDefault(_ChildrenContent);

var _Generic = require('../../basic-component-mixins/src/Generic');

var _Generic2 = _interopRequireDefault(_Generic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * A text area that makes itself big enough to show its content.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This works by copying the text to an invisible element which will automatically
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * grow in size; the expanding copy will expand the container, which in turn
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * stretch the text area.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class AutosizeTextarea
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var AutosizeTextarea = function (_ElementBase$compose) {
  _inherits(AutosizeTextarea, _ElementBase$compose);

  function AutosizeTextarea() {
    _classCallCheck(this, AutosizeTextarea);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AutosizeTextarea).apply(this, arguments));
  }

  _createClass(AutosizeTextarea, [{
    key: 'attachedCallback',

    // Normally the value of the element is set and read through its value
    // attribute. As a convenience, and to mirror standard textarea behavior,
    // it is possible to set the content of the textarea by including text between
    // the opening and closing tag. This works only in one direction: setting
    // the tag content updates the textarea, but user edits in the textarea are
    // not reflected in the tag content. We capture the value of the initial text content
    // in order to set the value property during the create event.
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
     *
     * @method autoSize
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
      if (this._valueTracksContent) {
        var text = getTextContent(this);
        this.$.textBox.value = unescapeHtml(text);
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

      this.$.textBox.addEventListener('change', function (event) {
        // Raise our own change event (since change events aren't automatically
        // retargetted).
        _this2.dispatchEvent(new CustomEvent('change'));
      });
      this.$.textBox.addEventListener('input', function (event) {
        valueChanged(_this2);
      });
      this.$.textBox.addEventListener('keypress', function (event) {
        keypress(_this2, event);
      });

      // A standard textarea has its value track its textContent by default.
      // That is, changes to textContent update the value. However, if an attempt
      // is made to change the value directly, this breaks the automatic tracking.
      // From that point on, changes to textContent do *not* update the value.
      this._valueTracksContent = true;
    }

    /**
     * Determines the minimum number of rows shown. This is similar to the rows
     * attribute on a standard textarea, but because this element can grow, is
     * expressed as a minimum rather than a fixed number.
     *
     * @property minimumRows
     * @type number
     * @default 1
     */

  }, {
    key: 'ariaLabel',
    get: function get() {
      return this.$.textBox.getAttribute('aria-label');
    },
    set: function set(label) {
      // Propagate the ARIA label to the inner textarea.
      this.$.textBox.setAttribute('aria-label', label);
    }
  }, {
    key: 'minimumRows',
    get: function get() {
      return this._minimumRows || 1;
    },
    set: function set(value) {
      this._minimumRows = parseInt(value);
      if (this._lineHeight) {
        setMinimumHeight(this);
      }
    }

    /**
     * A prompt shown when the field is empty to indicate what the user should enter.
     *
     * @property placeholder
     * @type string
     */

  }, {
    key: 'placeholder',
    get: function get() {
      return this.$.textBox.getAttribute('placeholder');
    },
    set: function set(value) {
      // Propagate the placeholder to the inner textarea.
      this.$.textBox.setAttribute('placeholder', value);
    }
  }, {
    key: 'selectionEnd',
    get: function get() {
      return this.$.textBox.selectionEnd;
    },
    set: function set(value) {
      this.$.textBox.selectionEnd = value;
    }
  }, {
    key: 'selectionStart',
    get: function get() {
      return this.$.textBox.selectionStart;
    },
    set: function set(value) {
      this.$.textBox.selectionStart = value;
    }
  }, {
    key: 'template',
    get: function get() {
      return '\n      <style>\n      :host {\n        display: block;\n      }\n\n      #autoSizeContainer {\n        position: relative;\n      }\n\n      /*\n       * Ensure both the text area and copy end up with the element\'s own font\n       * metrics, so that text will lay out the same in both of them.\n       */\n      #textBox,\n      #copyContainer {\n        -moz-box-sizing: border-box;\n        box-sizing: border-box;\n        font-family: inherit;\n        font-size: inherit;\n        font-style: inherit;\n        font-weight: inherit;\n        line-height: inherit;\n        margin: 0;\n      }\n\n      #textBox {\n        height: 100%;\n        overflow: hidden;\n        position: absolute;\n        resize: none;\n        top: 0;\n        width: 100%;\n        @apply(--textarea);\n      }\n\n      #copyContainer {\n        visibility: hidden;\n        white-space: pre-wrap; /* So lines wrap */\n        word-wrap: break-word; /* So we break at word boundaries when possible */\n      }\n\n      #contentContainer {\n        display: none;\n      }\n      </style>\n\n      <!--\n      The invisible copyContainer contains an extraSpace element that ensures that,\n      even if the last line of the textarea is blank, there will be something in the\n      line that forces the text copy to grow by a line. This extra space is a thin\n      space, to reduce the amount by which the text copy will prematurely grow.\n\n      The copyContainer also contains an extraLine element exists to deal with the\n      fact that, if the user presses the Enter key down, the textarea\'s content will\n      move before the complete text is available. See notes at _keypress.\n\n      Lastly, we put the HTML content element into a separate container so we can\n      hide it. We need to have a content element somewhere in the template to\n      convince Polymer that we care about the content in the Shady DOM case --\n      without that content element, Shady DOM will conclude the element doesn\'t\n      need its light DOM content, and will throw it away.\n      -->\n      <div id="autoSizeContainer">\n        <textarea id="textBox"></textarea>\n        <div id="copyContainer"><span id="textCopy"></span><span id="extraSpace">&thinsp;</span><div id="extraLine">&nbsp;</div></div>\n      </div>\n      <div id="contentContainer">\n        <slot></slot>\n      </div>\n    ';
    }

    /**
     * The text shown in the textarea.
     *
     * Note that the text shown in the textarea can also be updated by changing
     * the element's innerHTML/textContent. However, if the value property is
     * explicitly set, that will override the innerHTML/textContent.
     *
     * @property value
     * @type string
     */

  }, {
    key: 'value',
    get: function get() {
      return this.$.textBox.value;
    },
    set: function set(text) {
      // Explicitly setting value breaks automatic update of value from content.
      this._valueTracksContent = false;
      this.$.textBox.value = text;
      valueChanged(this);
    }
  }]);

  return AutosizeTextarea;
}(_ElementBase2.default.compose(_ChildrenContent2.default, _Generic2.default));

/**
 * Fires when the user types in the textarea.
 *
 * @event change
 */

exports.default = AutosizeTextarea;
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
  var textBoxStyle = getComputedStyle(element.$.textBox);
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
  element._lineHeight = element.$.extraLine.clientHeight;

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
  var minHeight = element.minimumRows * element._lineHeight + bordersPlusPadding;
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

document.registerElement('basic-autosize-textarea', AutosizeTextarea);

},{"../../basic-component-mixins/src/ChildrenContent":4,"../../basic-component-mixins/src/Generic":6,"../../basic-element-base/src/ElementBase":8}],2:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Marshall attributes to properties (and eventually vice versa).
 * Only supports string properties for now.
 *
 * @mixin AttributeMarshalling
 */

exports.default = function (base) {
  return function (_base) {
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
      value: function attributeChangedCallback(name, oldValue, newValue) {
        if (_get(Object.getPrototypeOf(AttributeMarshalling.prototype), "attributeChangedCallback", this)) {
          _get(Object.getPrototypeOf(AttributeMarshalling.prototype), "attributeChangedCallback", this).call(this);
        }
        // If the attribute name corresponds to a property name, then set that
        // property. Ignore changes in standard HTMLElement properties.
        var propertyName = attributeToPropertyName(name);
        if (propertyName in this && !(propertyName in HTMLElement.prototype)) {
          this[propertyName] = newValue;
        }
      }
    }, {
      key: "createdCallback",
      value: function createdCallback() {
        var _this2 = this;

        if (_get(Object.getPrototypeOf(AttributeMarshalling.prototype), "createdCallback", this)) {
          _get(Object.getPrototypeOf(AttributeMarshalling.prototype), "createdCallback", this).call(this);
        }
        [].forEach.call(this.attributes, function (attribute) {
          _this2.attributeChangedCallback(attribute.name, undefined, attribute.value);
        });
      }
    }]);

    return AttributeMarshalling;
  }(base);
};

// Convert camel case fooBar name to hyphenated foo-bar.

function attributeToPropertyName(attributeName) {
  var propertyName = attributeName.replace(/-([a-z])/g, function (m) {
    return m[1].toUpperCase();
  });
  return propertyName;
}

// Convert hyphenated foo-bar name to camel case fooBar.
// TODO: Use this when we support reflection of properties to attributes.
// function propertyToAttributeName(propertyName) {
//   let attributeName = propertyName.replace(/([a-z][A-Z])/g, g => g[0] + '-' + g[1].toLowerCase());
//   return attributeName;
// }

},{}],3:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Mixin to support Polymer-style automatic node finding.
 *
 * This adds a member on the component called `$` that can be used to reference
 * elements with IDs. E.g., if component's shadow contains an element
 * `<button id="foo">`, then this mixin will create a member `this.$.foo` that
 * points to that button. Such references simplify a component's access to its
 * own elements.
 *
 * This trades off a one-time cost of querying all elements in the shadow tree
 * against having to query for an element each time the component wants to
 * inspect or manipulate it.
 *
 * See https://www.polymer-project.org/1.0/docs/devguide/local-dom.html#node-finding.
 *
 * @mixin AutomaticNodeFinding
 */

exports.default = function (base) {
  return function (_base) {
    _inherits(AutomaticNodeFinding, _base);

    function AutomaticNodeFinding() {
      _classCallCheck(this, AutomaticNodeFinding);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(AutomaticNodeFinding).apply(this, arguments));
    }

    _createClass(AutomaticNodeFinding, [{
      key: 'createdCallback',
      value: function createdCallback() {
        var _this2 = this;

        if (_get(Object.getPrototypeOf(AutomaticNodeFinding.prototype), 'createdCallback', this)) {
          _get(Object.getPrototypeOf(AutomaticNodeFinding.prototype), 'createdCallback', this).call(this);
        }
        if (this.shadowRoot) {
          this.$ = {};
          var nodesWithIds = this.shadowRoot.querySelectorAll('[id]');
          [].forEach.call(nodesWithIds, function (node) {
            var id = node.getAttribute('id');
            _this2.$[id] = node;
          });
        }
      }
    }]);

    return AutomaticNodeFinding;
  }(base);
};

},{}],4:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Mixin that defines a component's content as its children. Changes in the
 * content will be tracked, and a contentChanged method will be invoked on the
 * component when its children change.
 *
 * @mixin ChildrenContent
 */

// TODO: Don't respond to changes in attributes, or at least offer that as an
// option.

exports.default = function (base) {
  return function (_base) {
    _inherits(ChildrenContent, _base);

    function ChildrenContent() {
      _classCallCheck(this, ChildrenContent);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(ChildrenContent).apply(this, arguments));
    }

    _createClass(ChildrenContent, [{
      key: 'createdCallback',
      value: function createdCallback() {
        var _this2 = this;

        if (_get(Object.getPrototypeOf(ChildrenContent.prototype), 'createdCallback', this)) {
          _get(Object.getPrototypeOf(ChildrenContent.prototype), 'createdCallback', this).call(this);
        }
        observeContentChanges(this);

        // Make an initial call to contentChanged() so that the component can do
        // initialization that it normally does when content changes.
        //
        // This will invoke contentChanged() handlers in other mixins. In order that
        // those mixins have a chance to complete their own initialization, we add
        // the contentChanged() call to the microtask queue via a promise.
        // See https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/
        Promise.resolve().then(function () {
          return _this2.contentChanged();
        });
      }
    }, {
      key: 'contentChanged',
      value: function contentChanged() {
        if (_get(Object.getPrototypeOf(ChildrenContent.prototype), 'contentChanged', this)) {
          _get(Object.getPrototypeOf(ChildrenContent.prototype), 'contentChanged', this).call(this);
        }
        var event = new CustomEvent('content-changed');
        this.dispatchEvent(event);
      }
    }, {
      key: 'initialized',
      value: function initialized() {
        // Make an initial call to contentChanged() so that the component can do
        // initialization that it normally does when content changes.
        this.contentChanged();
      }

      /**
       * The flattened content of this component.
       *
       * @property content
       * @type [Object]
       */

    }, {
      key: 'content',
      get: function get() {
        return expandContentElements(this.children);
      },
      set: function set(value) {
        if ('content' in base.prototype) {
          _set(Object.getPrototypeOf(ChildrenContent.prototype), 'content', value, this);
        }
      }

      /*
       * Returns an in-order collection of children, expanding any content nodes.
       * Like the standard children property, this skips text nodes.
       *
       * TODO: This walks the whole content tree every time the list is requested.
       * It'd be nice to cache the answer and invalidate it only when content
       * actually changes.
       */

    }, {
      key: 'distributedChildren',
      get: function get() {
        return expandContentElements(this.children, false);
      }

      /*
       * Returns an in-order collection of child nodes, expanding any content nodes.
       * Like the standard childNodes property, this includes text nodes.
       */

    }, {
      key: 'distributedChildNodes',
      get: function get() {
        return expandContentElements(this.childNodes, true);
      }

      /*
       * Returns the concatenated text content of all child nodes, expanding any
       * content nodes.
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

    return ChildrenContent;
  }(base);
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
    if (node.localName && (node.localName === "slot" || node.localName === "content")) {
      // content element; use its distributed nodes instead.
      var distributedNodes = node.getDistributedNodes();
      return distributedNodes ? expandContentElements(distributedNodes, includeTextNodes) : [];
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

function observeContentChanges(element) {
  element._contentChangeObserver = new MutationObserver(function () {
    return element.contentChanged();
  });
  element._contentChangeObserver.observe(element, {
    // attributes: true,
    characterData: true,
    childList: true,
    subtree: true
  });
}

},{}],5:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Mixin to make a class more easily composable with other mixins.
 *
 * The main contribution is the introduction of a `compose` method that applies
 * a set of mixin functions and returns the resulting new class. This sugar
 * can make the application of many mixins at once easier to read.
 *
 * @mixin Composable
 */

exports.default = function (base) {
  return function (_base) {
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
       * A call like
       *
       *     let MyClass = Mixin1(Mixin2(Mixin3(Mixin4(Mixin5(BaseClass)))));
       *
       * Can be converted to:
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

},{}],6:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Mixin that allows a component to support a "generic" style: a minimalist
 * style that can easily be removed to reset its visual appearance to a baseline
 * state.
 *
 * By default, a component should provide a minimal visual presentation that
 * allows the component to function. However, the more styling the component
 * provides by default, the harder it becomes to get the component to fit in
 * in other settings. Each CSS rule has to be overridden. Worse, new CSS rules
 * added to the default style won't be overridden by default, making it hard to
 * know whether a new version of a component will still look okay.
 *
 * As a compromise, the simple Polymer behavior here defines a "generic"
 * attribute. This attribute is normally set by default, and styles can be
 * written that apply only when the generic attribute is set. This allows the
 * construction of CSS rules that will only apply to generic components like
 *
 *     :host([generic=""]) {
 *       ...
 *     }
 *
 * This makes it easy to remove all default styling -- set the generic attribute
 * to false, and all default styling will be removed.
 */

exports.default = function (base) {
  return function (_base) {
    _inherits(Generic, _base);

    function Generic() {
      _classCallCheck(this, Generic);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Generic).apply(this, arguments));
    }

    _createClass(Generic, [{
      key: 'createdCallback',
      value: function createdCallback() {
        if (_get(Object.getPrototypeOf(Generic.prototype), 'createdCallback', this)) {
          _get(Object.getPrototypeOf(Generic.prototype), 'createdCallback', this).call(this);
        }
        this.generic = this.getAttribute('generic') || true;
      }

      /**
       * True if the component would like to receive generic styling.
       *
       * This property is true by default — set it to false to turn off all
       * generic styles. This makes it easier to apply custom styling; you won't
       * have to explicitly override styling you don't want.
       *
       * @property generic
       * @type Boolean
       * @default true
       */

    }, {
      key: 'generic',
      get: function get() {
        return this._generic;
      },
      set: function set(value) {
        if ('generic' in base.prototype) {
          _set(Object.getPrototypeOf(Generic.prototype), 'generic', value, this);
        }
        // We roll our own attribute setting so that an explicitly false value shows
        // up as generic="false".
        if (typeof value === 'string') {
          value = value !== 'false';
        }
        this._generic = value;
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
    }]);

    return Generic;
  }(base);
};

},{}],7:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Mixin for template stamping. If a component defines a template property (as a
 * string or referencing a HTML template), when the component class is
 * instantiated, a shadow root will be created on the instance, and the contents
 * of the template will be cloned into the shadow root.
 *
 * For the time being, this extension retains support for Shadow DOM v0.
 * That will eventually be deprecated as browsers implement Shadow DOM v1.
 *
 * @mixin TemplateStamping
 */

// Feature detection for old Shadow DOM v0.
var USING_SHADOW_DOM_V0 = typeof HTMLElement.prototype.createShadowRoot !== 'undefined';

exports.default = function (base) {
  return function (_base) {
    _inherits(TemplateStamping, _base);

    function TemplateStamping() {
      _classCallCheck(this, TemplateStamping);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(TemplateStamping).apply(this, arguments));
    }

    _createClass(TemplateStamping, [{
      key: 'createdCallback',

      /*
       * If the component defines a template, a shadow root will be created on the
       * component instance, and the template stamped into it.
       */
      value: function createdCallback() {
        if (_get(Object.getPrototypeOf(TemplateStamping.prototype), 'createdCallback', this)) {
          _get(Object.getPrototypeOf(TemplateStamping.prototype), 'createdCallback', this).call(this);
        }
        var template = this.template;
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
          var root = USING_SHADOW_DOM_V0 ? this.createShadowRoot() : // Shadow DOM v0
          this.attachShadow({ mode: 'open' }); // Shadow DOM v1
          var clone = document.importNode(template.content, true);
          root.appendChild(clone);
        }
      }
    }]);

    return TemplateStamping;
  }(base);
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

// Replace occurences of v1 slot elements with v0 content elements.
// This does not yet map named slots to content select clauses.
function polyfillSlotWithContent(template) {
  [].forEach.call(template.content.querySelectorAll('slot'), function (slotElement) {
    var contentElement = document.createElement('content');
    slotElement.parentNode.replaceChild(contentElement, slotElement);
  });
}

// Invoke basic style shimming with ShadowCSS.
function shimTemplateStyles(template, tag) {
  window.WebComponents.ShadowCSS.shimStyling(template.content, tag);
}

},{}],8:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Composable = require('../../basic-component-mixins/src/Composable');

var _Composable2 = _interopRequireDefault(_Composable);

var _TemplateStamping = require('../../basic-component-mixins/src/TemplateStamping');

var _TemplateStamping2 = _interopRequireDefault(_TemplateStamping);

var _AutomaticNodeFinding = require('../../basic-component-mixins/src/AutomaticNodeFinding');

var _AutomaticNodeFinding2 = _interopRequireDefault(_AutomaticNodeFinding);

var _AttributeMarshalling = require('../../basic-component-mixins/src/AttributeMarshalling');

var _AttributeMarshalling2 = _interopRequireDefault(_AttributeMarshalling);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * A sample general-purpose base class for defining custom elements that mixes
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * in some common features: template stamping into a shadow root, automatic node
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * finding, and marshalling between attributes and properties.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This base class is not special in any way, and is defined only as a
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * convenient shorthand for applying the mixins listed above. You can use this
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * class as a base class for your own elements, or easily create your own base
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * class by applying the same set of mixins.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class ElementBase
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
}((0, _Composable2.default)(HTMLElement).compose(_TemplateStamping2.default, // before node finding, so shadow root is populated
_AutomaticNodeFinding2.default, // before marshalling, so marshalled properties can use it
_AttributeMarshalling2.default));

exports.default = ElementBase;

},{"../../basic-component-mixins/src/AttributeMarshalling":2,"../../basic-component-mixins/src/AutomaticNodeFinding":3,"../../basic-component-mixins/src/Composable":5,"../../basic-component-mixins/src/TemplateStamping":7}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwYWNrYWdlcy9iYXNpYy1hdXRvc2l6ZS10ZXh0YXJlYS9zcmMvQXV0b3NpemVUZXh0YXJlYS5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0F0dHJpYnV0ZU1hcnNoYWxsaW5nLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQXV0b21hdGljTm9kZUZpbmRpbmcuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9DaGlsZHJlbkNvbnRlbnQuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Db21wb3NhYmxlLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvR2VuZXJpYy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1RlbXBsYXRlU3RhbXBpbmcuanMiLCJwYWNrYWdlcy9iYXNpYy1lbGVtZW50LWJhc2Uvc3JjL0VsZW1lbnRCYXNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNlcUIsZ0JBQWdCO1lBQWhCLGdCQUFnQjs7V0FBaEIsZ0JBQWdCOzBCQUFoQixnQkFBZ0I7O2tFQUFoQixnQkFBZ0I7OztlQUFoQixnQkFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7dUNBMEJoQjtBQUNqQixxQ0EzQmlCLGdCQUFnQix3Q0EyQkw7QUFBRSxtQ0EzQmIsZ0JBQWdCLGtEQTJCc0I7T0FBRTtBQUN6RCw0QkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM5Qjs7Ozs7Ozs7Ozs7K0JBUVU7OztBQUdULFVBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTTs7Ozs7Ozs7QUFBQyxBQVF4QyxVQUFJLENBQUMsQ0FBQyxDQUFD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QyxDQUFDLENBQUM7R0FDakQ7QUFDRCxTQUFPLFFBQVEsQ0FBQztDQUNqQjs7OztBQUFBLEFBSUQsU0FBUyx1QkFBdUIsQ0FBQyxRQUFRLEVBQUU7QUFDekMsSUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxVQUFBLFdBQVcsRUFBSTtBQUN4RSxRQUFJLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3ZELGVBQVcsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxXQUFXLENBQUMsQ0FBQztHQUNsRSxDQUFDLENBQUM7Q0FDSjs7O0FBQUEsQUFHRCxTQUFTLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUU7QUFDekMsUUFBTSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7Q0FDbkU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQzdEb0IsV0FBVztZQUFYLFdBQVc7O1dBQVgsV0FBVzswQkFBWCxXQUFXOztrRUFBWCxXQUFXOzs7ZUFBWCxXQUFXOzs7Ozs7d0JBUzFCLElBQUksRUFBRTtBQUNSLHFDQVZpQixXQUFXLDJCQVViO0FBQUUsbUNBVkEsV0FBVyxxQ0FVRCxJQUFJLEVBQUU7T0FBRTtBQUNuQyxhQUFPLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxTQUFTLFVBQUssSUFBSSxDQUFHLENBQUM7S0FDM0M7OztTQVprQixXQUFXO0VBQVMsMEJBQVcsV0FBVyxDQUFDLENBQUMsT0FBTzs7K0JBSXZFOztrQkFKb0IsV0FBVyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKlxuICogQSB0ZXh0IGFyZWEgdGhhdCBtYWtlcyBpdHNlbGYgYmlnIGVub3VnaCB0byBzaG93IGl0cyBjb250ZW50LlxuICpcbiAqIFRoaXMgd29ya3MgYnkgY29weWluZyB0aGUgdGV4dCB0byBhbiBpbnZpc2libGUgZWxlbWVudCB3aGljaCB3aWxsIGF1dG9tYXRpY2FsbHlcbiAqIGdyb3cgaW4gc2l6ZTsgdGhlIGV4cGFuZGluZyBjb3B5IHdpbGwgZXhwYW5kIHRoZSBjb250YWluZXIsIHdoaWNoIGluIHR1cm5cbiAqIHN0cmV0Y2ggdGhlIHRleHQgYXJlYS5cbiAqXG4gKiBAY2xhc3MgQXV0b3NpemVUZXh0YXJlYVxuICovXG5cbmltcG9ydCBFbGVtZW50QmFzZSBmcm9tICcuLi8uLi9iYXNpYy1lbGVtZW50LWJhc2Uvc3JjL0VsZW1lbnRCYXNlJztcbmltcG9ydCBDaGlsZHJlbkNvbnRlbnQgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ2hpbGRyZW5Db250ZW50JztcbmltcG9ydCBHZW5lcmljIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0dlbmVyaWMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dG9zaXplVGV4dGFyZWEgZXh0ZW5kcyBFbGVtZW50QmFzZS5jb21wb3NlKFxuICBDaGlsZHJlbkNvbnRlbnQsXG4gIEdlbmVyaWNcbikge1xuXG4gIGdldCBhcmlhTGFiZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuJC50ZXh0Qm94LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpO1xuICB9XG4gIHNldCBhcmlhTGFiZWwobGFiZWwpIHtcbiAgICAvLyBQcm9wYWdhdGUgdGhlIEFSSUEgbGFiZWwgdG8gdGhlIGlubmVyIHRleHRhcmVhLlxuICAgIHRoaXMuJC50ZXh0Qm94LnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIGxhYmVsKTtcbiAgfVxuXG4gIC8vIE5vcm1hbGx5IHRoZSB2YWx1ZSBvZiB0aGUgZWxlbWVudCBpcyBzZXQgYW5kIHJlYWQgdGhyb3VnaCBpdHMgdmFsdWVcbiAgLy8gYXR0cmlidXRlLiBBcyBhIGNvbnZlbmllbmNlLCBhbmQgdG8gbWlycm9yIHN0YW5kYXJkIHRleHRhcmVhIGJlaGF2aW9yLFxuICAvLyBpdCBpcyBwb3NzaWJsZSB0byBzZXQgdGhlIGNvbnRlbnQgb2YgdGhlIHRleHRhcmVhIGJ5IGluY2x1ZGluZyB0ZXh0IGJldHdlZW5cbiAgLy8gdGhlIG9wZW5pbmcgYW5kIGNsb3NpbmcgdGFnLiBUaGlzIHdvcmtzIG9ubHkgaW4gb25lIGRpcmVjdGlvbjogc2V0dGluZ1xuICAvLyB0aGUgdGFnIGNvbnRlbnQgdXBkYXRlcyB0aGUgdGV4dGFyZWEsIGJ1dCB1c2VyIGVkaXRzIGluIHRoZSB0ZXh0YXJlYSBhcmVcbiAgLy8gbm90IHJlZmxlY3RlZCBpbiB0aGUgdGFnIGNvbnRlbnQuIFdlIGNhcHR1cmUgdGhlIHZhbHVlIG9mIHRoZSBpbml0aWFsIHRleHQgY29udGVudFxuICAvLyBpbiBvcmRlciB0byBzZXQgdGhlIHZhbHVlIHByb3BlcnR5IGR1cmluZyB0aGUgY3JlYXRlIGV2ZW50LlxuICAvLyBUT0RPOiBOb3JtYWxpemUgaW5kZW50YXRpb24gaW4gdGhlIHRleHQgY29udGVudC4gVXNlcnMgd2lsbCBvZnRlbiB3YW50IHRvXG4gIC8vIGluZGVudCB0aGUgbWFya3VwIHNvIHRoYXQgaXQgbG9va3MgcHJldHR5LiBXZSBzaG91bGQgZGV0ZWN0IHRoZSBpbmRlbnRhdGlvblxuICAvLyBsZXZlbCBhbmQgcmVtb3ZlIGFueSBpbmRlbnRhdGlvbiB3aGl0ZXNwYWNlXG4gIC8vIFRPRE86IENvbnNpZGVyIHVzaW5nIGNvbnRlbnQgaW5uZXJIVE1MIHJhdGhlciB0aGFuIHBsYWluIHRleHQuIFRoZSBuYXRpdmVcbiAgLy8gdGV4dGFyZWEgZWxlbWVudCB3aWxsIGluY2x1ZGUgSFRNTCwgbm90IGp1c3QgdGhlIHN0cmlwcGVkIHRleHQsIGFzIGluaXRpYWxcbiAgLy8gdmFsdWUgcHJvcGVydHkgdGV4dC5cbiAgYXR0YWNoZWRDYWxsYmFjaygpIHtcbiAgICBpZiAoc3VwZXIuYXR0YWNoZWRDYWxsYmFjaykgeyBzdXBlci5hdHRhY2hlZENhbGxiYWNrKCk7IH1cbiAgICBpbml0aWFsaXplV2hlblJlbmRlcmVkKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2l6ZSB0aGUgZWxlbWVudCBzdWNoIHRoYXQgdGhlIHRleHRhcmVhIGNhbiBleGFjdGx5IGNvbnRhaW4gaXRzIGNvbnRlbnQuXG4gICAqIEJ5IGRlZmF1bHQsIHRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbmV2ZXIgdGhlIHRleHQgY29udGVudCBjaGFuZ2VzLlxuICAgKlxuICAgKiBAbWV0aG9kIGF1dG9TaXplXG4gICAqL1xuICBhdXRvU2l6ZSgpIHtcbiAgICAvLyBJZiB3ZSBoYWQgc3BlY3VsYXRpdmVseSBhZGRlZCBhbiBleHRyYSBsaW5lIGJlY2F1c2Ugb2YgYW4gRW50ZXIga2V5cHJlc3MsXG4gICAgLy8gd2UgY2FuIG5vdyBoaWRlIHRoZSBleHRyYSBsaW5lLlxuICAgIHRoaXMuJC5leHRyYUxpbmUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgIC8vIFdlIHJlc2l6ZSBieSBjb3B5aW5nIHRoZSB0ZXh0YXJlYSBjb250ZW50cyB0byB0aGUgZWxlbWVudCBpdHNlbGY7IHRoZVxuICAgIC8vIHRleHQgd2lsbCB0aGVuIGFwcGVhciAodmlhIDxjb250ZW50PikgaW5zaWRlIHRoZSBpbnZpc2libGUgZGl2LiBJZlxuICAgIC8vIHdlJ3ZlIHNldCB0aGluZ3MgdXAgY29ycmVjdGx5LCB0aGlzIG5ldyBjb250ZW50IHNob3VsZCB0YWtlIHVwIHRoZSBzYW1lXG4gICAgLy8gYW1vdW50IG9mIHJvb20gYXMgdGhlIHNhbWUgdGV4dCBpbiB0aGUgdGV4dGFyZWEuIFVwZGF0aW5nIHRoZSBlbGVtZW50J3NcbiAgICAvLyBjb250ZW50IGFkanVzdHMgdGhlIGVsZW1lbnQncyBzaXplLCB3aGljaCBpbiB0dXJuIHdpbGwgbWFrZSB0aGUgdGV4dGFyZWFcbiAgICAvLyB0aGUgY29ycmVjdCBoZWlnaHQuXG4gICAgdGhpcy4kLnRleHRDb3B5LnRleHRDb250ZW50ID0gdGhpcy52YWx1ZTtcbiAgfVxuXG4gIGNvbnRlbnRDaGFuZ2VkKCkge1xuICAgIGlmIChzdXBlci5jb250ZW50Q2hhbmdlZCkgeyBzdXBlci5jb250ZW50Q2hhbmdlZCgpOyB9XG4gICAgaWYgKHRoaXMuX3ZhbHVlVHJhY2tzQ29udGVudCkge1xuICAgICAgbGV0IHRleHQgPSBnZXRUZXh0Q29udGVudCh0aGlzKTtcbiAgICAgIHRoaXMuJC50ZXh0Qm94LnZhbHVlID0gdW5lc2NhcGVIdG1sKHRleHQpO1xuICAgICAgdmFsdWVDaGFuZ2VkKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG5cbiAgICB0aGlzLiQudGV4dEJveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldmVudCA9PiB7XG4gICAgICAvLyBSYWlzZSBvdXIgb3duIGNoYW5nZSBldmVudCAoc2luY2UgY2hhbmdlIGV2ZW50cyBhcmVuJ3QgYXV0b21hdGljYWxseVxuICAgICAgLy8gcmV0YXJnZXR0ZWQpLlxuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2hhbmdlJykpO1xuICAgIH0pO1xuICAgIHRoaXMuJC50ZXh0Qm94LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZXZlbnQgPT4ge1xuICAgICAgdmFsdWVDaGFuZ2VkKHRoaXMpO1xuICAgIH0pO1xuICAgIHRoaXMuJC50ZXh0Qm94LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZXZlbnQgPT4ge1xuICAgICAga2V5cHJlc3ModGhpcywgZXZlbnQpO1xuICAgIH0pO1xuXG4gICAgLy8gQSBzdGFuZGFyZCB0ZXh0YXJlYSBoYXMgaXRzIHZhbHVlIHRyYWNrIGl0cyB0ZXh0Q29udGVudCBieSBkZWZhdWx0LlxuICAgIC8vIFRoYXQgaXMsIGNoYW5nZXMgdG8gdGV4dENvbnRlbnQgdXBkYXRlIHRoZSB2YWx1ZS4gSG93ZXZlciwgaWYgYW4gYXR0ZW1wdFxuICAgIC8vIGlzIG1hZGUgdG8gY2hhbmdlIHRoZSB2YWx1ZSBkaXJlY3RseSwgdGhpcyBicmVha3MgdGhlIGF1dG9tYXRpYyB0cmFja2luZy5cbiAgICAvLyBGcm9tIHRoYXQgcG9pbnQgb24sIGNoYW5nZXMgdG8gdGV4dENvbnRlbnQgZG8gKm5vdCogdXBkYXRlIHRoZSB2YWx1ZS5cbiAgICB0aGlzLl92YWx1ZVRyYWNrc0NvbnRlbnQgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgdGhlIG1pbmltdW0gbnVtYmVyIG9mIHJvd3Mgc2hvd24uIFRoaXMgaXMgc2ltaWxhciB0byB0aGUgcm93c1xuICAgKiBhdHRyaWJ1dGUgb24gYSBzdGFuZGFyZCB0ZXh0YXJlYSwgYnV0IGJlY2F1c2UgdGhpcyBlbGVtZW50IGNhbiBncm93LCBpc1xuICAgKiBleHByZXNzZWQgYXMgYSBtaW5pbXVtIHJhdGhlciB0aGFuIGEgZml4ZWQgbnVtYmVyLlxuICAgKlxuICAgKiBAcHJvcGVydHkgbWluaW11bVJvd3NcbiAgICogQHR5cGUgbnVtYmVyXG4gICAqIEBkZWZhdWx0IDFcbiAgICovXG4gIGdldCBtaW5pbXVtUm93cygpIHtcbiAgICByZXR1cm4gdGhpcy5fbWluaW11bVJvd3MgfHwgMTtcbiAgfVxuICBzZXQgbWluaW11bVJvd3ModmFsdWUpIHtcbiAgICB0aGlzLl9taW5pbXVtUm93cyA9IHBhcnNlSW50KHZhbHVlKTtcbiAgICBpZiAodGhpcy5fbGluZUhlaWdodCkge1xuICAgICAgc2V0TWluaW11bUhlaWdodCh0aGlzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQSBwcm9tcHQgc2hvd24gd2hlbiB0aGUgZmllbGQgaXMgZW1wdHkgdG8gaW5kaWNhdGUgd2hhdCB0aGUgdXNlciBzaG91bGQgZW50ZXIuXG4gICAqXG4gICAqIEBwcm9wZXJ0eSBwbGFjZWhvbGRlclxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICovXG4gIGdldCBwbGFjZWhvbGRlcigpIHtcbiAgICByZXR1cm4gdGhpcy4kLnRleHRCb3guZ2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicpO1xuICB9XG4gIHNldCBwbGFjZWhvbGRlcih2YWx1ZSkge1xuICAgIC8vIFByb3BhZ2F0ZSB0aGUgcGxhY2Vob2xkZXIgdG8gdGhlIGlubmVyIHRleHRhcmVhLlxuICAgIHRoaXMuJC50ZXh0Qm94LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCB2YWx1ZSk7XG4gIH1cblxuICBnZXQgc2VsZWN0aW9uRW5kKCkge1xuICAgIHJldHVybiB0aGlzLiQudGV4dEJveC5zZWxlY3Rpb25FbmQ7XG4gIH1cbiAgc2V0IHNlbGVjdGlvbkVuZCh2YWx1ZSkge1xuICAgIHRoaXMuJC50ZXh0Qm94LnNlbGVjdGlvbkVuZCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHNlbGVjdGlvblN0YXJ0KCkge1xuICAgIHJldHVybiB0aGlzLiQudGV4dEJveC5zZWxlY3Rpb25TdGFydDtcbiAgfVxuICBzZXQgc2VsZWN0aW9uU3RhcnQodmFsdWUpIHtcbiAgICB0aGlzLiQudGV4dEJveC5zZWxlY3Rpb25TdGFydCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBgXG4gICAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuXG4gICAgICAjYXV0b1NpemVDb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIC8qXG4gICAgICAgKiBFbnN1cmUgYm90aCB0aGUgdGV4dCBhcmVhIGFuZCBjb3B5IGVuZCB1cCB3aXRoIHRoZSBlbGVtZW50J3Mgb3duIGZvbnRcbiAgICAgICAqIG1ldHJpY3MsIHNvIHRoYXQgdGV4dCB3aWxsIGxheSBvdXQgdGhlIHNhbWUgaW4gYm90aCBvZiB0aGVtLlxuICAgICAgICovXG4gICAgICAjdGV4dEJveCxcbiAgICAgICNjb3B5Q29udGFpbmVyIHtcbiAgICAgICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICBmb250LXN0eWxlOiBpbmhlcml0O1xuICAgICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cblxuICAgICAgI3RleHRCb3gge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmVzaXplOiBub25lO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBAYXBwbHkoLS10ZXh0YXJlYSk7XG4gICAgICB9XG5cbiAgICAgICNjb3B5Q29udGFpbmVyIHtcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7IC8qIFNvIGxpbmVzIHdyYXAgKi9cbiAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkOyAvKiBTbyB3ZSBicmVhayBhdCB3b3JkIGJvdW5kYXJpZXMgd2hlbiBwb3NzaWJsZSAqL1xuICAgICAgfVxuXG4gICAgICAjY29udGVudENvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8IS0tXG4gICAgICBUaGUgaW52aXNpYmxlIGNvcHlDb250YWluZXIgY29udGFpbnMgYW4gZXh0cmFTcGFjZSBlbGVtZW50IHRoYXQgZW5zdXJlcyB0aGF0LFxuICAgICAgZXZlbiBpZiB0aGUgbGFzdCBsaW5lIG9mIHRoZSB0ZXh0YXJlYSBpcyBibGFuaywgdGhlcmUgd2lsbCBiZSBzb21ldGhpbmcgaW4gdGhlXG4gICAgICBsaW5lIHRoYXQgZm9yY2VzIHRoZSB0ZXh0IGNvcHkgdG8gZ3JvdyBieSBhIGxpbmUuIFRoaXMgZXh0cmEgc3BhY2UgaXMgYSB0aGluXG4gICAgICBzcGFjZSwgdG8gcmVkdWNlIHRoZSBhbW91bnQgYnkgd2hpY2ggdGhlIHRleHQgY29weSB3aWxsIHByZW1hdHVyZWx5IGdyb3cuXG5cbiAgICAgIFRoZSBjb3B5Q29udGFpbmVyIGFsc28gY29udGFpbnMgYW4gZXh0cmFMaW5lIGVsZW1lbnQgZXhpc3RzIHRvIGRlYWwgd2l0aCB0aGVcbiAgICAgIGZhY3QgdGhhdCwgaWYgdGhlIHVzZXIgcHJlc3NlcyB0aGUgRW50ZXIga2V5IGRvd24sIHRoZSB0ZXh0YXJlYSdzIGNvbnRlbnQgd2lsbFxuICAgICAgbW92ZSBiZWZvcmUgdGhlIGNvbXBsZXRlIHRleHQgaXMgYXZhaWxhYmxlLiBTZWUgbm90ZXMgYXQgX2tleXByZXNzLlxuXG4gICAgICBMYXN0bHksIHdlIHB1dCB0aGUgSFRNTCBjb250ZW50IGVsZW1lbnQgaW50byBhIHNlcGFyYXRlIGNvbnRhaW5lciBzbyB3ZSBjYW5cbiAgICAgIGhpZGUgaXQuIFdlIG5lZWQgdG8gaGF2ZSBhIGNvbnRlbnQgZWxlbWVudCBzb21ld2hlcmUgaW4gdGhlIHRlbXBsYXRlIHRvXG4gICAgICBjb252aW5jZSBQb2x5bWVyIHRoYXQgd2UgY2FyZSBhYm91dCB0aGUgY29udGVudCBpbiB0aGUgU2hhZHkgRE9NIGNhc2UgLS1cbiAgICAgIHdpdGhvdXQgdGhhdCBjb250ZW50IGVsZW1lbnQsIFNoYWR5IERPTSB3aWxsIGNvbmNsdWRlIHRoZSBlbGVtZW50IGRvZXNuJ3RcbiAgICAgIG5lZWQgaXRzIGxpZ2h0IERPTSBjb250ZW50LCBhbmQgd2lsbCB0aHJvdyBpdCBhd2F5LlxuICAgICAgLS0+XG4gICAgICA8ZGl2IGlkPVwiYXV0b1NpemVDb250YWluZXJcIj5cbiAgICAgICAgPHRleHRhcmVhIGlkPVwidGV4dEJveFwiPjwvdGV4dGFyZWE+XG4gICAgICAgIDxkaXYgaWQ9XCJjb3B5Q29udGFpbmVyXCI+PHNwYW4gaWQ9XCJ0ZXh0Q29weVwiPjwvc3Bhbj48c3BhbiBpZD1cImV4dHJhU3BhY2VcIj4mdGhpbnNwOzwvc3Bhbj48ZGl2IGlkPVwiZXh0cmFMaW5lXCI+Jm5ic3A7PC9kaXY+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgaWQ9XCJjb250ZW50Q29udGFpbmVyXCI+XG4gICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRleHQgc2hvd24gaW4gdGhlIHRleHRhcmVhLlxuICAgKlxuICAgKiBOb3RlIHRoYXQgdGhlIHRleHQgc2hvd24gaW4gdGhlIHRleHRhcmVhIGNhbiBhbHNvIGJlIHVwZGF0ZWQgYnkgY2hhbmdpbmdcbiAgICogdGhlIGVsZW1lbnQncyBpbm5lckhUTUwvdGV4dENvbnRlbnQuIEhvd2V2ZXIsIGlmIHRoZSB2YWx1ZSBwcm9wZXJ0eSBpc1xuICAgKiBleHBsaWNpdGx5IHNldCwgdGhhdCB3aWxsIG92ZXJyaWRlIHRoZSBpbm5lckhUTUwvdGV4dENvbnRlbnQuXG4gICAqXG4gICAqIEBwcm9wZXJ0eSB2YWx1ZVxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICovXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy4kLnRleHRCb3gudmFsdWU7XG4gIH1cbiAgc2V0IHZhbHVlKHRleHQpIHtcbiAgICAvLyBFeHBsaWNpdGx5IHNldHRpbmcgdmFsdWUgYnJlYWtzIGF1dG9tYXRpYyB1cGRhdGUgb2YgdmFsdWUgZnJvbSBjb250ZW50LlxuICAgIHRoaXMuX3ZhbHVlVHJhY2tzQ29udGVudCA9IGZhbHNlO1xuICAgIHRoaXMuJC50ZXh0Qm94LnZhbHVlID0gdGV4dDtcbiAgICB2YWx1ZUNoYW5nZWQodGhpcyk7XG4gIH1cblxufVxuXG5cbi8qKlxuICogRmlyZXMgd2hlbiB0aGUgdXNlciB0eXBlcyBpbiB0aGUgdGV4dGFyZWEuXG4gKlxuICogQGV2ZW50IGNoYW5nZVxuICovXG5cblxuZnVuY3Rpb24gZ2V0VGV4dENvbnRlbnQoZWxlbWVudCkge1xuICBsZXQgdGV4dCA9IGVsZW1lbnQuZGlzdHJpYnV0ZWRUZXh0Q29udGVudDtcblxuICAvLyBUcmltIHRoZSB0ZXh0LlxuICAvLyBUaGlzIGlzIG5vbi1zdGFuZGFyZCB0ZXh0YXJlYSBiZWhhdmlvci4gQSBzdGFuZGFyZCB0ZXh0YXJlYSB3aWxsIHRyaW0gdGhlXG4gIC8vIGZpcnN0IGNoYXJhY3RlciBpZiBpdCdzIGEgbmV3bGluZSwgYnV0IHRoYXQncyBpdC4gSG93ZXZlciwgYXV0aG9ycyB3aWxsXG4gIC8vIHdhbnQgdG8gYmUgYWJsZSB0byBwbGFjZSB0aGUgb3BlbmluZyBhbmQgY2xvc2luZyB0YWdzIG9uIHRoZWlyIG93biBsaW5lcy5cbiAgLy8gU28gaXQgc2VlbXMgbW9yZSBoZWxwZnVsIHRvIHRyaW0gd2hpdGVzcGFjZSBvbiBlaXRoZXIgc2lkZS5cbiAgdGV4dCA9IHRleHQudHJpbSgpO1xuXG4gIHJldHVybiB0ZXh0O1xufVxuXG5cbi8vIFNldCB1cCBvbmNlIHRoaXMgY29tcG9uZW50IGhhcyBiZWVuIHJlbmRlcmVkLlxuLy9cbi8vIE9uIENocm9tZSAoYXMgb2YgMTAvMjMvMTQpIGF0IGxlYXN0LCBpZiBhbiBpbnN0YW5jZSBpZiB0aGlzIGNvbXBvbmVudCBpc1xuLy8gYWRkZWQgZHluYW1pY2FsbHksIGl0cyBhdHRhY2hlZCBoYW5kbGVyIG1heSB0cmlnZ2VyIGJlZm9yZSBpdHMgYmVlblxuLy8gcmVuZGVyZWQuIFRoYXQgd291bGQgY2F1c2Ugb3VyIGxheW91dCBjYWxjdWxhdGlvbnMgdG8gYmUgaW5jb3JyZWN0LlxuLy9cbmZ1bmN0aW9uIGluaXRpYWxpemVXaGVuUmVuZGVyZWQoZWxlbWVudCkge1xuXG4gIC8vIElmIHRoZSBjb21wb25lbnQgaGFzIGJlZW4gcmVuZGVyZWQsIG91ciBoZWlnaHQgc2hvdWxkIGJlIG5vbnplcm8uXG4gIGlmIChlbGVtZW50LmNsaWVudEhlaWdodCA9PT0gMCkge1xuICAgIC8vIE5vdCByZW5kZXJlZCB5ZXQ6IHdhaXQgYSBiaXQgYmVmb3JlIHRyeWluZyBhZ2Fpbi5cbiAgICBzZXRUaW1lb3V0KCgpID0+IGluaXRpYWxpemVXaGVuUmVuZGVyZWQoZWxlbWVudCksIDEwKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBJZiB3ZSByZWFjaCB0aGlzIHBvaW50LCB0aGUgY29tcG9uZW50J3MgZWxlbWVudHMgc2hvdWxkIGJ5IHN0eWxlZC5cblxuICAvLyBGb3IgYXV0by1zaXppbmcgdG8gd29yaywgd2UgbmVlZCB0aGUgdGV4dCBjb3B5IHRvIGhhdmUgdGhlIHNhbWUgYm9yZGVyLFxuICAvLyBwYWRkaW5nLCBhbmQgb3RoZXIgcmVsZXZhbnQgY2hhcmFjdGVyaXN0aWNzIGFzIHRoZSBvcmlnaW5hbCB0ZXh0IGFyZWEuXG4gIC8vIFNpbmNlIHRob3NlIGFzcGVjdHMgYXJlIGFmZmVjdGVkIGJ5IENTUywgd2UgaGF2ZSB0byB3YWl0IHVudGlsIHRoZVxuICAvLyBlbGVtZW50IGlzIGluIHRoZSBkb2N1bWVudCBiZWZvcmUgd2UgY2FuIHVwZGF0ZSB0aGUgdGV4dCBjb3B5LlxuICBsZXQgdGV4dEJveFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LiQudGV4dEJveCk7XG4gIGxldCBjb3B5Q29udGFpbmVyU3R5bGUgPSBlbGVtZW50LiQuY29weUNvbnRhaW5lci5zdHlsZTtcbiAgY29weUNvbnRhaW5lclN0eWxlLmJvcmRlckJvdHRvbVN0eWxlICA9IHRleHRCb3hTdHlsZS5ib3JkZXJCb3R0b21TdHlsZTtcbiAgY29weUNvbnRhaW5lclN0eWxlLmJvcmRlckJvdHRvbVdpZHRoICA9IHRleHRCb3hTdHlsZS5ib3JkZXJCb3R0b21XaWR0aDtcbiAgY29weUNvbnRhaW5lclN0eWxlLmJvcmRlckxlZnRTdHlsZSAgICA9IHRleHRCb3hTdHlsZS5ib3JkZXJMZWZ0U3R5bGU7XG4gIGNvcHlDb250YWluZXJTdHlsZS5ib3JkZXJMZWZ0V2lkdGggICAgPSB0ZXh0Qm94U3R5bGUuYm9yZGVyTGVmdFdpZHRoO1xuICBjb3B5Q29udGFpbmVyU3R5bGUuYm9yZGVyUmlnaHRTdHlsZSAgID0gdGV4dEJveFN0eWxlLmJvcmRlclJpZ2h0U3R5bGU7XG4gIGNvcHlDb250YWluZXJTdHlsZS5ib3JkZXJSaWdodFdpZHRoICAgPSB0ZXh0Qm94U3R5bGUuYm9yZGVyUmlnaHRXaWR0aDtcbiAgY29weUNvbnRhaW5lclN0eWxlLmJvcmRlclRvcFN0eWxlICAgICA9IHRleHRCb3hTdHlsZS5ib3JkZXJUb3BTdHlsZTtcbiAgY29weUNvbnRhaW5lclN0eWxlLmJvcmRlclRvcFdpZHRoICAgICA9IHRleHRCb3hTdHlsZS5ib3JkZXJUb3BXaWR0aDtcbiAgY29weUNvbnRhaW5lclN0eWxlLnBhZGRpbmdCb3R0b20gICAgICA9IHRleHRCb3hTdHlsZS5wYWRkaW5nQm90dG9tO1xuICBjb3B5Q29udGFpbmVyU3R5bGUucGFkZGluZ0xlZnQgICAgICAgID0gdGV4dEJveFN0eWxlLnBhZGRpbmdMZWZ0O1xuICBjb3B5Q29udGFpbmVyU3R5bGUucGFkZGluZ1JpZ2h0ICAgICAgID0gdGV4dEJveFN0eWxlLnBhZGRpbmdSaWdodDtcbiAgY29weUNvbnRhaW5lclN0eWxlLnBhZGRpbmdUb3AgICAgICAgICA9IHRleHRCb3hTdHlsZS5wYWRkaW5nVG9wO1xuXG4gIC8vIFVzZSB0aGUgZXh0cmFMaW5lIG1lbWJlciB0byBnYXVnZSB0aGUgZXhwZWN0ZWQgaGVpZ2h0IG9mIGEgc2luZ2xlIGxpbmUgb2ZcbiAgLy8gdGV4dC4gV2UgY2FuJ3QgdXNlIGxpbmVIZWlnaHQsIGJlY2F1c2UgdGhhdCBjYW4gYmUgcmVwb3J0ZWQgYXMgXCJub3JtYWxcIixcbiAgLy8gYW5kIHdlIHdhbnQgdG8ga25vdyB0aGUgYWN0dWFsIHBpeGVsIGhlaWdodC5cbiAgZWxlbWVudC4kLmV4dHJhTGluZS5zdHlsZS5kaXNwbGF5ID0gJ2luaGVyaXQnO1xuICBlbGVtZW50Ll9saW5lSGVpZ2h0ID0gZWxlbWVudC4kLmV4dHJhTGluZS5jbGllbnRIZWlnaHQ7XG5cbiAgLy8gTm93IHRoYXQgd2Uga25vdyB0aGUgbGluZSBoZWlnaHQsIHdlIGNhbiBoaWRlIHRoZSBleHRyYSBsaW5lLlxuICBlbGVtZW50LiQuZXh0cmFMaW5lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgLy8gVXNlIHRoZSBsaW5lIGhlaWdodCBpbiBjb25qdW5jdGlvbiB3aXRoIG1pbmltdW1Sb3dzIHRvIGVzdGFibGlzaCB0aGVcbiAgLy8gb3ZlcmFsbCBtaW5pbXVtIGhlaWdodCBvZiB0aGUgY29tcG9uZW50LlxuICBzZXRNaW5pbXVtSGVpZ2h0KGVsZW1lbnQpO1xufVxuXG5cbi8vIFNwZWN1bGF0aXZlbHkgYWRkIGEgbGluZSB0byBvdXIgY29weSBvZiB0aGUgdGV4dC4gV2UncmUgbm90IHN1cmUgd2hhdCB0aGVcbi8vIGV4YWN0IGVmZmVjdCBvZiB0eXBpbmcgdGhpcyBjaGFyYWN0ZXIgd2lsbCBiZSwgYW5kIGF0IHRoaXMgcG9pbnQgaXQncyBub3Rcbi8vIHJlZmxlY3RlZCB5ZXQgaW4gdGhlIHRleHRhcmVhJ3MgY29udGVudC4gV2Ugc3BlY3VsYXRlIHRoYXQgaXQgd2lsbCBhZGQgYVxuLy8gbGluZSB0byB0aGUgdGV4dCBhbmQgc2l6ZSBhY2NvcmRpbmdseS4gKE9uZSBvdGhlciBwb3NzaWJpbGl0eSBpcyB0aGF0IHRoZVxuLy8gdXNlcidzIHJlcGxhY2luZyBhIHNlbGVjdGVkIGNodW5rIG9mIHRleHQgd2l0aCBhIG5ld2xpbmUuKSBJbiBhbnkgZXZlbnQsXG4vLyBvbmNlIHdlIGdldCB0aGUga2V5dXAgb3IgY2hhbmdlIGV2ZW50LCB3ZSdsbCBtYWtlIGFueSBmaW5hbCBhZGp1c3RtZW50cy5cbi8vXG4vLyBUT0RPOiBJZiB0aGUgdXNlciBob2xkcyBkb3duIHRoZSBFbnRlciBrZXksIHdlIGNhbiBnZXQgYSBidW5jaCBvZiBrZXlwcmVzc1xuLy8gZXZlbnRzIGJlZm9yZSB3ZSBnZXQga2V5dXAuIFRoaXMgY2F1c2VzIGZsaWNrZXIuIEluc3RlYWQgb2Ygc3VwcG9ydGluZyBvbmx5XG4vLyBhIHNpbmdsZSBleHRyYSBzcGVjdWxhdGl2ZSBsaW5lLCB3ZSBzaG91bGQgZ3JvdyB0aGUgc3BlY3VsYXRpdmUgZWxlbWVudCB0b1xuLy8gY29udGFpbiB0aGUgbnVtYmVyIG9mIEVudGVyIGtleXByZXNzZXMgd2UndmUgcmVjZWl2ZWQuXG5mdW5jdGlvbiBrZXlwcmVzcyhlbGVtZW50LCBldmVudCkge1xuICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMgLyogRW50ZXIgKi8pIHtcbiAgICBlbGVtZW50LiQuZXh0cmFMaW5lLnN0eWxlLmRpc3BsYXkgPSAnaW5oZXJpdCc7XG4gIH1cbn1cblxuXG4vLyBTZXR0aW5nIHRoZSBtaW5pbXVtUm93cyBhdHRyaWJ1dGUgdHJhbnNsYXRlcyBpbnRvIHNldHRpbmcgdGhlIG1pbmltdW1cbi8vIGhlaWdodCBvbiB0aGUgdGV4dCBjb3B5IGNvbnRhaW5lci5cbmZ1bmN0aW9uIHNldE1pbmltdW1IZWlnaHQoZWxlbWVudCkge1xuICBsZXQgY29weUNvbnRhaW5lciA9IGVsZW1lbnQuJC5jb3B5Q29udGFpbmVyO1xuICBsZXQgb3V0ZXJIZWlnaHQgPSBjb3B5Q29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgbGV0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShjb3B5Q29udGFpbmVyKTtcbiAgbGV0IHBhZGRpbmdUb3AgPSBwYXJzZUZsb2F0KHN0eWxlLnBhZGRpbmdUb3ApO1xuICBsZXQgcGFkZGluZ0JvdHRvbSA9IHBhcnNlRmxvYXQoc3R5bGUucGFkZGluZ0JvdHRvbSk7XG4gIGxldCBpbm5lckhlaWdodCA9IGNvcHlDb250YWluZXIuY2xpZW50SGVpZ2h0IC0gcGFkZGluZ1RvcCAtIHBhZGRpbmdCb3R0b207XG4gIGxldCBib3JkZXJzUGx1c1BhZGRpbmcgPSBvdXRlckhlaWdodCAtIGlubmVySGVpZ2h0O1xuICBsZXQgbWluSGVpZ2h0ID0gKGVsZW1lbnQubWluaW11bVJvd3MgKiBlbGVtZW50Ll9saW5lSGVpZ2h0KSArIGJvcmRlcnNQbHVzUGFkZGluZztcbiAgbWluSGVpZ2h0ID0gTWF0aC5jZWlsKG1pbkhlaWdodCk7XG4gIGNvcHlDb250YWluZXIuc3R5bGUubWluSGVpZ2h0ID0gbWluSGVpZ2h0ICsgJ3B4Jztcbn1cblxuXG5mdW5jdGlvbiB1bmVzY2FwZUh0bWwoaHRtbCkge1xuICByZXR1cm4gaHRtbFxuICAgIC5yZXBsYWNlKC8mYW1wOy9nLCAnJicpXG4gICAgLnJlcGxhY2UoLyZsdDsvZywgJzwnKVxuICAgIC5yZXBsYWNlKC8mZ3Q7L2csIFwiPlwiKVxuICAgIC5yZXBsYWNlKC8mcXVvdDsvZywgJ1xcXCInKVxuICAgIC5yZXBsYWNlKC8mIzAzOTsvZywgJ1xcJycpO1xufVxuXG5cbi8qXG4gKiBIYW5kbGUgYSBjaGFuZ2UgaW4gdGhlIGVsZW1lbnQncyB2YWx1ZSBwcm9wZXJ0eS5cbiAqL1xuZnVuY3Rpb24gdmFsdWVDaGFuZ2VkKGVsZW1lbnQpIHtcbiAgZWxlbWVudC5hdXRvU2l6ZSgpO1xuICBlbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCd2YWx1ZS1jaGFuZ2VkJykpO1xufVxuXG5cbmRvY3VtZW50LnJlZ2lzdGVyRWxlbWVudCgnYmFzaWMtYXV0b3NpemUtdGV4dGFyZWEnLCBBdXRvc2l6ZVRleHRhcmVhKTtcbiIsIi8qKlxuICogTWFyc2hhbGwgYXR0cmlidXRlcyB0byBwcm9wZXJ0aWVzIChhbmQgZXZlbnR1YWxseSB2aWNlIHZlcnNhKS5cbiAqIE9ubHkgc3VwcG9ydHMgc3RyaW5nIHByb3BlcnRpZXMgZm9yIG5vdy5cbiAqXG4gKiBAbWl4aW4gQXR0cmlidXRlTWFyc2hhbGxpbmdcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4gY2xhc3MgQXR0cmlidXRlTWFyc2hhbGxpbmcgZXh0ZW5kcyBiYXNlIHtcblxuICAvKlxuICAgKiBIYW5kbGUgYSBjaGFuZ2UgdG8gdGhlIGF0dHJpYnV0ZSB3aXRoIHRoZSBnaXZlbiBuYW1lLlxuICAgKi9cbiAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xuICAgIGlmIChzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2spIHsgc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKCk7IH1cbiAgICAvLyBJZiB0aGUgYXR0cmlidXRlIG5hbWUgY29ycmVzcG9uZHMgdG8gYSBwcm9wZXJ0eSBuYW1lLCB0aGVuIHNldCB0aGF0XG4gICAgLy8gcHJvcGVydHkuIElnbm9yZSBjaGFuZ2VzIGluIHN0YW5kYXJkIEhUTUxFbGVtZW50IHByb3BlcnRpZXMuXG4gICAgbGV0IHByb3BlcnR5TmFtZSA9IGF0dHJpYnV0ZVRvUHJvcGVydHlOYW1lKG5hbWUpO1xuICAgIGlmIChwcm9wZXJ0eU5hbWUgaW4gdGhpcyAmJiAhKHByb3BlcnR5TmFtZSBpbiBIVE1MRWxlbWVudC5wcm90b3R5cGUpKSB7XG4gICAgICB0aGlzW3Byb3BlcnR5TmFtZV0gPSBuZXdWYWx1ZTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuICAgIFtdLmZvckVhY2guY2FsbCh0aGlzLmF0dHJpYnV0ZXMsIGF0dHJpYnV0ZSA9PiB7XG4gICAgICB0aGlzLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhhdHRyaWJ1dGUubmFtZSwgdW5kZWZpbmVkLCBhdHRyaWJ1dGUudmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbn07XG5cblxuLy8gQ29udmVydCBjYW1lbCBjYXNlIGZvb0JhciBuYW1lIHRvIGh5cGhlbmF0ZWQgZm9vLWJhci5cbmZ1bmN0aW9uIGF0dHJpYnV0ZVRvUHJvcGVydHlOYW1lKGF0dHJpYnV0ZU5hbWUpIHtcbiAgbGV0IHByb3BlcnR5TmFtZSA9IGF0dHJpYnV0ZU5hbWUucmVwbGFjZSgvLShbYS16XSkvZywgbSA9PiBtWzFdLnRvVXBwZXJDYXNlKCkpO1xuICByZXR1cm4gcHJvcGVydHlOYW1lO1xufVxuXG4vLyBDb252ZXJ0IGh5cGhlbmF0ZWQgZm9vLWJhciBuYW1lIHRvIGNhbWVsIGNhc2UgZm9vQmFyLlxuLy8gVE9ETzogVXNlIHRoaXMgd2hlbiB3ZSBzdXBwb3J0IHJlZmxlY3Rpb24gb2YgcHJvcGVydGllcyB0byBhdHRyaWJ1dGVzLlxuLy8gZnVuY3Rpb24gcHJvcGVydHlUb0F0dHJpYnV0ZU5hbWUocHJvcGVydHlOYW1lKSB7XG4vLyAgIGxldCBhdHRyaWJ1dGVOYW1lID0gcHJvcGVydHlOYW1lLnJlcGxhY2UoLyhbYS16XVtBLVpdKS9nLCBnID0+IGdbMF0gKyAnLScgKyBnWzFdLnRvTG93ZXJDYXNlKCkpO1xuLy8gICByZXR1cm4gYXR0cmlidXRlTmFtZTtcbi8vIH1cbiIsIi8qKlxuICogTWl4aW4gdG8gc3VwcG9ydCBQb2x5bWVyLXN0eWxlIGF1dG9tYXRpYyBub2RlIGZpbmRpbmcuXG4gKlxuICogVGhpcyBhZGRzIGEgbWVtYmVyIG9uIHRoZSBjb21wb25lbnQgY2FsbGVkIGAkYCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlZmVyZW5jZVxuICogZWxlbWVudHMgd2l0aCBJRHMuIEUuZy4sIGlmIGNvbXBvbmVudCdzIHNoYWRvdyBjb250YWlucyBhbiBlbGVtZW50XG4gKiBgPGJ1dHRvbiBpZD1cImZvb1wiPmAsIHRoZW4gdGhpcyBtaXhpbiB3aWxsIGNyZWF0ZSBhIG1lbWJlciBgdGhpcy4kLmZvb2AgdGhhdFxuICogcG9pbnRzIHRvIHRoYXQgYnV0dG9uLiBTdWNoIHJlZmVyZW5jZXMgc2ltcGxpZnkgYSBjb21wb25lbnQncyBhY2Nlc3MgdG8gaXRzXG4gKiBvd24gZWxlbWVudHMuXG4gKlxuICogVGhpcyB0cmFkZXMgb2ZmIGEgb25lLXRpbWUgY29zdCBvZiBxdWVyeWluZyBhbGwgZWxlbWVudHMgaW4gdGhlIHNoYWRvdyB0cmVlXG4gKiBhZ2FpbnN0IGhhdmluZyB0byBxdWVyeSBmb3IgYW4gZWxlbWVudCBlYWNoIHRpbWUgdGhlIGNvbXBvbmVudCB3YW50cyB0b1xuICogaW5zcGVjdCBvciBtYW5pcHVsYXRlIGl0LlxuICpcbiAqIFNlZSBodHRwczovL3d3dy5wb2x5bWVyLXByb2plY3Qub3JnLzEuMC9kb2NzL2Rldmd1aWRlL2xvY2FsLWRvbS5odG1sI25vZGUtZmluZGluZy5cbiAqXG4gKiBAbWl4aW4gQXV0b21hdGljTm9kZUZpbmRpbmdcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4gY2xhc3MgQXV0b21hdGljTm9kZUZpbmRpbmcgZXh0ZW5kcyBiYXNlIHtcblxuICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuICAgIGlmICh0aGlzLnNoYWRvd1Jvb3QpIHtcbiAgICAgIHRoaXMuJCA9IHt9O1xuICAgICAgbGV0IG5vZGVzV2l0aElkcyA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yQWxsKCdbaWRdJyk7XG4gICAgICBbXS5mb3JFYWNoLmNhbGwobm9kZXNXaXRoSWRzLCBub2RlID0+IHtcbiAgICAgICAgbGV0IGlkID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICAgIHRoaXMuJFtpZF0gPSBub2RlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbn07XG4iLCIvKipcbiAqIE1peGluIHRoYXQgZGVmaW5lcyBhIGNvbXBvbmVudCdzIGNvbnRlbnQgYXMgaXRzIGNoaWxkcmVuLiBDaGFuZ2VzIGluIHRoZVxuICogY29udGVudCB3aWxsIGJlIHRyYWNrZWQsIGFuZCBhIGNvbnRlbnRDaGFuZ2VkIG1ldGhvZCB3aWxsIGJlIGludm9rZWQgb24gdGhlXG4gKiBjb21wb25lbnQgd2hlbiBpdHMgY2hpbGRyZW4gY2hhbmdlLlxuICpcbiAqIEBtaXhpbiBDaGlsZHJlbkNvbnRlbnRcbiAqL1xuXG4vLyBUT0RPOiBEb24ndCByZXNwb25kIHRvIGNoYW5nZXMgaW4gYXR0cmlidXRlcywgb3IgYXQgbGVhc3Qgb2ZmZXIgdGhhdCBhcyBhblxuLy8gb3B0aW9uLlxuXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4gY2xhc3MgQ2hpbGRyZW5Db250ZW50IGV4dGVuZHMgYmFzZSB7XG5cbiAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cbiAgICBvYnNlcnZlQ29udGVudENoYW5nZXModGhpcyk7XG5cbiAgICAvLyBNYWtlIGFuIGluaXRpYWwgY2FsbCB0byBjb250ZW50Q2hhbmdlZCgpIHNvIHRoYXQgdGhlIGNvbXBvbmVudCBjYW4gZG9cbiAgICAvLyBpbml0aWFsaXphdGlvbiB0aGF0IGl0IG5vcm1hbGx5IGRvZXMgd2hlbiBjb250ZW50IGNoYW5nZXMuXG4gICAgLy9cbiAgICAvLyBUaGlzIHdpbGwgaW52b2tlIGNvbnRlbnRDaGFuZ2VkKCkgaGFuZGxlcnMgaW4gb3RoZXIgbWl4aW5zLiBJbiBvcmRlciB0aGF0XG4gICAgLy8gdGhvc2UgbWl4aW5zIGhhdmUgYSBjaGFuY2UgdG8gY29tcGxldGUgdGhlaXIgb3duIGluaXRpYWxpemF0aW9uLCB3ZSBhZGRcbiAgICAvLyB0aGUgY29udGVudENoYW5nZWQoKSBjYWxsIHRvIHRoZSBtaWNyb3Rhc2sgcXVldWUgdmlhIGEgcHJvbWlzZS5cbiAgICAvLyBTZWUgaHR0cHM6Ly9qYWtlYXJjaGliYWxkLmNvbS8yMDE1L3Rhc2tzLW1pY3JvdGFza3MtcXVldWVzLWFuZC1zY2hlZHVsZXMvXG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLmNvbnRlbnRDaGFuZ2VkKCkpO1xuICB9XG5cbiAgY29udGVudENoYW5nZWQoKSB7XG4gICAgaWYgKHN1cGVyLmNvbnRlbnRDaGFuZ2VkKSB7IHN1cGVyLmNvbnRlbnRDaGFuZ2VkKCk7IH1cbiAgICBsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2NvbnRlbnQtY2hhbmdlZCcpO1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gIH1cblxuICBpbml0aWFsaXplZCgpIHtcbiAgICAvLyBNYWtlIGFuIGluaXRpYWwgY2FsbCB0byBjb250ZW50Q2hhbmdlZCgpIHNvIHRoYXQgdGhlIGNvbXBvbmVudCBjYW4gZG9cbiAgICAvLyBpbml0aWFsaXphdGlvbiB0aGF0IGl0IG5vcm1hbGx5IGRvZXMgd2hlbiBjb250ZW50IGNoYW5nZXMuXG4gICAgdGhpcy5jb250ZW50Q2hhbmdlZCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBmbGF0dGVuZWQgY29udGVudCBvZiB0aGlzIGNvbXBvbmVudC5cbiAgICpcbiAgICogQHByb3BlcnR5IGNvbnRlbnRcbiAgICogQHR5cGUgW09iamVjdF1cbiAgICovXG4gIGdldCBjb250ZW50KCkge1xuICAgIHJldHVybiBleHBhbmRDb250ZW50RWxlbWVudHModGhpcy5jaGlsZHJlbik7XG4gIH1cbiAgc2V0IGNvbnRlbnQodmFsdWUpIHtcbiAgICBpZiAoJ2NvbnRlbnQnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLmNvbnRlbnQgPSB2YWx1ZTsgfVxuICB9XG5cbiAgLypcbiAgICogUmV0dXJucyBhbiBpbi1vcmRlciBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuLCBleHBhbmRpbmcgYW55IGNvbnRlbnQgbm9kZXMuXG4gICAqIExpa2UgdGhlIHN0YW5kYXJkIGNoaWxkcmVuIHByb3BlcnR5LCB0aGlzIHNraXBzIHRleHQgbm9kZXMuXG4gICAqXG4gICAqIFRPRE86IFRoaXMgd2Fsa3MgdGhlIHdob2xlIGNvbnRlbnQgdHJlZSBldmVyeSB0aW1lIHRoZSBsaXN0IGlzIHJlcXVlc3RlZC5cbiAgICogSXQnZCBiZSBuaWNlIHRvIGNhY2hlIHRoZSBhbnN3ZXIgYW5kIGludmFsaWRhdGUgaXQgb25seSB3aGVuIGNvbnRlbnRcbiAgICogYWN0dWFsbHkgY2hhbmdlcy5cbiAgICovXG4gIGdldCBkaXN0cmlidXRlZENoaWxkcmVuKCkge1xuICAgIHJldHVybiBleHBhbmRDb250ZW50RWxlbWVudHModGhpcy5jaGlsZHJlbiwgZmFsc2UpO1xuICB9XG5cbiAgLypcbiAgICogUmV0dXJucyBhbiBpbi1vcmRlciBjb2xsZWN0aW9uIG9mIGNoaWxkIG5vZGVzLCBleHBhbmRpbmcgYW55IGNvbnRlbnQgbm9kZXMuXG4gICAqIExpa2UgdGhlIHN0YW5kYXJkIGNoaWxkTm9kZXMgcHJvcGVydHksIHRoaXMgaW5jbHVkZXMgdGV4dCBub2Rlcy5cbiAgICovXG4gIGdldCBkaXN0cmlidXRlZENoaWxkTm9kZXMoKSB7XG4gICAgcmV0dXJuIGV4cGFuZENvbnRlbnRFbGVtZW50cyh0aGlzLmNoaWxkTm9kZXMsIHRydWUpO1xuICB9XG5cbiAgLypcbiAgICogUmV0dXJucyB0aGUgY29uY2F0ZW5hdGVkIHRleHQgY29udGVudCBvZiBhbGwgY2hpbGQgbm9kZXMsIGV4cGFuZGluZyBhbnlcbiAgICogY29udGVudCBub2Rlcy5cbiAgICovXG4gIGdldCBkaXN0cmlidXRlZFRleHRDb250ZW50KCkge1xuICAgIGxldCBzdHJpbmdzID0gdGhpcy5kaXN0cmlidXRlZENoaWxkTm9kZXMubWFwKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICByZXR1cm4gY2hpbGQudGV4dENvbnRlbnQ7XG4gICAgfSk7XG4gICAgcmV0dXJuIHN0cmluZ3Muam9pbignJyk7XG4gIH1cblxufTtcblxuXG4vKlxuICogR2l2ZW4gYSBhcnJheSBvZiBub2RlcywgcmV0dXJuIGEgbmV3IGFycmF5IHdpdGggYW55IGNvbnRlbnQgZWxlbWVudHMgZXhwYW5kZWRcbiAqIHRvIHRoZSBub2RlcyBkaXN0cmlidXRlZCB0byB0aGF0IGNvbnRlbnQgZWxlbWVudC4gVGhpcyBydWxlIGlzIGFwcGxpZWRcbiAqIHJlY3Vyc2l2ZWx5LlxuICpcbiAqIElmIGluY2x1ZGVUZXh0Tm9kZXMgaXMgdHJ1ZSwgdGV4dCBub2RlcyB3aWxsIGJlIGluY2x1ZGVkLCBhcyBpbiB0aGVcbiAqIHN0YW5kYXJkIGNoaWxkTm9kZXMgcHJvcGVydHk7IGJ5IGRlZmF1bHQsIHRoaXMgc2tpcHMgdGV4dCBub2RlcywgbGlrZSB0aGVcbiAqIHN0YW5kYXJkIGNoaWxkcmVuIHByb3BlcnR5LlxuICovXG5mdW5jdGlvbiBleHBhbmRDb250ZW50RWxlbWVudHMobm9kZXMsIGluY2x1ZGVUZXh0Tm9kZXMpIHtcbiAgbGV0IGV4cGFuZGVkID0gQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKG5vZGVzLCBub2RlID0+IHtcbiAgICAvLyBXZSB3YW50IHRvIHNlZSBpZiB0aGUgbm9kZSBpcyBhbiBpbnN0YW5jZW9mIEhUTUxTbG90RUxlbWVudCwgYnV0XG4gICAgLy8gdGhhdCBjbGFzcyB3b24ndCBleGlzdCBpZiB0aGUgYnJvd3NlciB0aGF0IGRvZXNuJ3Qgc3VwcG9ydCBuYXRpdmVcbiAgICAvLyBTaGFkb3cgRE9NIGFuZCBpZiB0aGUgU2hhZG93IERPTSBwb2x5ZmlsbCBoYXNuJ3QgYmVlbiBsb2FkZWQuIEluc3RlYWQsXG4gICAgLy8gd2UgZG8gYSBzaW1wbGlzdGljIGNoZWNrIHRvIHNlZSBpZiB0aGUgdGFnIG5hbWUgaXMgXCJzbG90XCIgb3IgXCJjb250ZW50XCIuXG4gICAgaWYgKG5vZGUubG9jYWxOYW1lICYmIChub2RlLmxvY2FsTmFtZSA9PT0gXCJzbG90XCIgfHwgbm9kZS5sb2NhbE5hbWUgPT09IFwiY29udGVudFwiKSkge1xuICAgICAgLy8gY29udGVudCBlbGVtZW50OyB1c2UgaXRzIGRpc3RyaWJ1dGVkIG5vZGVzIGluc3RlYWQuXG4gICAgICBsZXQgZGlzdHJpYnV0ZWROb2RlcyA9IG5vZGUuZ2V0RGlzdHJpYnV0ZWROb2RlcygpO1xuICAgICAgcmV0dXJuIGRpc3RyaWJ1dGVkTm9kZXMgP1xuICAgICAgICBleHBhbmRDb250ZW50RWxlbWVudHMoZGlzdHJpYnV0ZWROb2RlcywgaW5jbHVkZVRleHROb2RlcykgOlxuICAgICAgICBbXTtcbiAgICB9IGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgLy8gUGxhaW4gZWxlbWVudDsgdXNlIGFzIGlzLlxuICAgICAgcmV0dXJuIFtub2RlXTtcbiAgICB9IGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBUZXh0ICYmIGluY2x1ZGVUZXh0Tm9kZXMpIHtcbiAgICAgIC8vIFRleHQgbm9kZS5cbiAgICAgIHJldHVybiBbbm9kZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIENvbW1lbnQsIHByb2Nlc3NpbmcgaW5zdHJ1Y3Rpb24sIGV0Yy47IHNraXAuXG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9KTtcbiAgbGV0IGZsYXR0ZW5lZCA9IFtdLmNvbmNhdCguLi5leHBhbmRlZCk7XG4gIHJldHVybiBmbGF0dGVuZWQ7XG59XG5cblxuZnVuY3Rpb24gb2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzKGVsZW1lbnQpIHtcbiAgZWxlbWVudC5fY29udGVudENoYW5nZU9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT5cbiAgICBlbGVtZW50LmNvbnRlbnRDaGFuZ2VkKClcbiAgKTtcbiAgZWxlbWVudC5fY29udGVudENoYW5nZU9ic2VydmVyLm9ic2VydmUoZWxlbWVudCwge1xuICAgIC8vIGF0dHJpYnV0ZXM6IHRydWUsXG4gICAgY2hhcmFjdGVyRGF0YTogdHJ1ZSxcbiAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgc3VidHJlZTogdHJ1ZVxuICB9KTtcbn1cbiIsIi8qKlxuICogTWl4aW4gdG8gbWFrZSBhIGNsYXNzIG1vcmUgZWFzaWx5IGNvbXBvc2FibGUgd2l0aCBvdGhlciBtaXhpbnMuXG4gKlxuICogVGhlIG1haW4gY29udHJpYnV0aW9uIGlzIHRoZSBpbnRyb2R1Y3Rpb24gb2YgYSBgY29tcG9zZWAgbWV0aG9kIHRoYXQgYXBwbGllc1xuICogYSBzZXQgb2YgbWl4aW4gZnVuY3Rpb25zIGFuZCByZXR1cm5zIHRoZSByZXN1bHRpbmcgbmV3IGNsYXNzLiBUaGlzIHN1Z2FyXG4gKiBjYW4gbWFrZSB0aGUgYXBwbGljYXRpb24gb2YgbWFueSBtaXhpbnMgYXQgb25jZSBlYXNpZXIgdG8gcmVhZC5cbiAqXG4gKiBAbWl4aW4gQ29tcG9zYWJsZVxuICovXG5cblxuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IGNsYXNzIENvbXBvc2FibGUgZXh0ZW5kcyBiYXNlIHtcblxuICAvKipcbiAgICogQXBwbHkgYSBzZXQgb2YgbWl4aW4gZnVuY3Rpb25zIG9yIG1peGluIG9iamVjdHMgdG8gdGhlIHByZXNlbnQgY2xhc3MgYW5kXG4gICAqIHJldHVybiB0aGUgbmV3IGNsYXNzLlxuICAgKlxuICAgKiBBIGNhbGwgbGlrZVxuICAgKlxuICAgKiAgICAgbGV0IE15Q2xhc3MgPSBNaXhpbjEoTWl4aW4yKE1peGluMyhNaXhpbjQoTWl4aW41KEJhc2VDbGFzcykpKSkpO1xuICAgKlxuICAgKiBDYW4gYmUgY29udmVydGVkIHRvOlxuICAgKlxuICAgKiAgICAgbGV0IE15Q2xhc3MgPSBDb21wb3NhYmxlKEJhc2VDbGFzcykuY29tcG9zZShcbiAgICogICAgICAgTWl4aW4xLFxuICAgKiAgICAgICBNaXhpbjIsXG4gICAqICAgICAgIE1peGluMyxcbiAgICogICAgICAgTWl4aW40LFxuICAgKiAgICAgICBNaXhpbjVcbiAgICogICAgICk7XG4gICAqXG4gICAqIFRoaXMgZnVuY3Rpb24gY2FuIGFsc28gdGFrZSBtaXhpbiBvYmplY3RzLiBBIG1peGluIG9iamVjdCBpcyBqdXN0IGFcbiAgICogc2hvcnRoYW5kIGZvciBhIG1peGluIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBhIG5ldyBzdWJjbGFzcyB3aXRoIHRoZSBnaXZlblxuICAgKiBtZW1iZXJzLiBUaGUgbWl4aW4gb2JqZWN0J3MgbWVtYmVycyBhcmUgKm5vdCogY29waWVkIGRpcmVjdGx5IG9udG8gdGhlXG4gICAqIHByb3RvdHlwZSBvZiB0aGUgYmFzZSBjbGFzcywgYXMgd2l0aCB0cmFkaXRpb25hbCBtaXhpbnMuXG4gICAqL1xuICBzdGF0aWMgY29tcG9zZSguLi5taXhpbnMpIHtcbiAgICAvLyBXZSBjcmVhdGUgYSBuZXcgc3ViY2xhc3MgZm9yIGVhY2ggbWl4aW4gaW4gdHVybi4gVGhlIHJlc3VsdCBiZWNvbWVzXG4gICAgLy8gdGhlIGJhc2UgY2xhc3MgZXh0ZW5kZWQgYnkgYW55IHN1YnNlcXVlbnQgbWl4aW5zLiBJdCB0dXJucyBvdXQgdGhhdFxuICAgIC8vIHdlIGNhbiB1c2UgQXJyYXkucmVkdWNlKCkgdG8gY29uY2lzZWx5IGV4cHJlc3MgdGhpcywgdXNpbmcgdGhlIGN1cnJlbnRcbiAgICAvLyBvYmplY3QgYXMgdGhlIHNlZWQgZm9yIHJlZHVjZSgpLlxuICAgIHJldHVybiBtaXhpbnMucmVkdWNlKGNvbXBvc2VDbGFzcywgdGhpcyk7XG4gIH1cblxufTtcblxuXG4vLyBQcm9wZXJ0aWVzIGRlZmluZWQgYnkgT2JqZWN0IHRoYXQgd2UgZG9uJ3Qgd2FudCB0byBtaXhpbi5cbmNvbnN0IE5PTl9NSVhBQkxFX09CSkVDVF9QUk9QRVJUSUVTID0gW1xuICAnY29uc3RydWN0b3InXG5dO1xuXG4vKlxuICogQXBwbHkgdGhlIG1peGluIHRvIHRoZSBnaXZlbiBiYXNlIGNsYXNzIHRvIHJldHVybiBhIG5ldyBjbGFzcy5cbiAqIFRoZSBtaXhpbiBjYW4gZWl0aGVyIGJlIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBtb2RpZmllZCBjbGFzcywgb3IgYVxuICogcGxhaW4gb2JqZWN0IHdob3NlIG1lbWJlcnMgd2lsbCBiZSBjb3BpZWQgdG8gdGhlIG5ldyBjbGFzcycgcHJvdG90eXBlLlxuICovXG5mdW5jdGlvbiBjb21wb3NlQ2xhc3MoYmFzZSwgbWl4aW4pIHtcbiAgaWYgKHR5cGVvZiBtaXhpbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIE1peGluIGZ1bmN0aW9uXG4gICAgcmV0dXJuIG1peGluKGJhc2UpO1xuICB9IGVsc2Uge1xuICAgIC8vIE1peGluIG9iamVjdFxuICAgIGNsYXNzIFN1YmNsYXNzIGV4dGVuZHMgYmFzZSB7fVxuICAgIGNvcHlPd25Qcm9wZXJ0aWVzKG1peGluLCBTdWJjbGFzcy5wcm90b3R5cGUsIE5PTl9NSVhBQkxFX09CSkVDVF9QUk9QRVJUSUVTKTtcbiAgICByZXR1cm4gU3ViY2xhc3M7XG4gIH1cbn1cblxuXG4vKlxuICogQ29weSB0aGUgZ2l2ZW4gcHJvcGVydGllcy9tZXRob2RzIHRvIHRoZSB0YXJnZXQuXG4gKiBSZXR1cm4gdGhlIHVwZGF0ZWQgdGFyZ2V0LlxuICovXG5mdW5jdGlvbiBjb3B5T3duUHJvcGVydGllcyhzb3VyY2UsIHRhcmdldCwgaWdub3JlUHJvcGVydHlOYW1lcyA9IFtdKSB7XG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZSkuZm9yRWFjaChuYW1lID0+IHtcbiAgICBpZiAoaWdub3JlUHJvcGVydHlOYW1lcy5pbmRleE9mKG5hbWUpIDwgMCkge1xuICAgICAgbGV0IGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgbmFtZSk7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gdGFyZ2V0O1xufVxuIiwiLyoqXG4gKiBNaXhpbiB0aGF0IGFsbG93cyBhIGNvbXBvbmVudCB0byBzdXBwb3J0IGEgXCJnZW5lcmljXCIgc3R5bGU6IGEgbWluaW1hbGlzdFxuICogc3R5bGUgdGhhdCBjYW4gZWFzaWx5IGJlIHJlbW92ZWQgdG8gcmVzZXQgaXRzIHZpc3VhbCBhcHBlYXJhbmNlIHRvIGEgYmFzZWxpbmVcbiAqIHN0YXRlLlxuICpcbiAqIEJ5IGRlZmF1bHQsIGEgY29tcG9uZW50IHNob3VsZCBwcm92aWRlIGEgbWluaW1hbCB2aXN1YWwgcHJlc2VudGF0aW9uIHRoYXRcbiAqIGFsbG93cyB0aGUgY29tcG9uZW50IHRvIGZ1bmN0aW9uLiBIb3dldmVyLCB0aGUgbW9yZSBzdHlsaW5nIHRoZSBjb21wb25lbnRcbiAqIHByb3ZpZGVzIGJ5IGRlZmF1bHQsIHRoZSBoYXJkZXIgaXQgYmVjb21lcyB0byBnZXQgdGhlIGNvbXBvbmVudCB0byBmaXQgaW5cbiAqIGluIG90aGVyIHNldHRpbmdzLiBFYWNoIENTUyBydWxlIGhhcyB0byBiZSBvdmVycmlkZGVuLiBXb3JzZSwgbmV3IENTUyBydWxlc1xuICogYWRkZWQgdG8gdGhlIGRlZmF1bHQgc3R5bGUgd29uJ3QgYmUgb3ZlcnJpZGRlbiBieSBkZWZhdWx0LCBtYWtpbmcgaXQgaGFyZCB0b1xuICoga25vdyB3aGV0aGVyIGEgbmV3IHZlcnNpb24gb2YgYSBjb21wb25lbnQgd2lsbCBzdGlsbCBsb29rIG9rYXkuXG4gKlxuICogQXMgYSBjb21wcm9taXNlLCB0aGUgc2ltcGxlIFBvbHltZXIgYmVoYXZpb3IgaGVyZSBkZWZpbmVzIGEgXCJnZW5lcmljXCJcbiAqIGF0dHJpYnV0ZS4gVGhpcyBhdHRyaWJ1dGUgaXMgbm9ybWFsbHkgc2V0IGJ5IGRlZmF1bHQsIGFuZCBzdHlsZXMgY2FuIGJlXG4gKiB3cml0dGVuIHRoYXQgYXBwbHkgb25seSB3aGVuIHRoZSBnZW5lcmljIGF0dHJpYnV0ZSBpcyBzZXQuIFRoaXMgYWxsb3dzIHRoZVxuICogY29uc3RydWN0aW9uIG9mIENTUyBydWxlcyB0aGF0IHdpbGwgb25seSBhcHBseSB0byBnZW5lcmljIGNvbXBvbmVudHMgbGlrZVxuICpcbiAqICAgICA6aG9zdChbZ2VuZXJpYz1cIlwiXSkge1xuICogICAgICAgLi4uXG4gKiAgICAgfVxuICpcbiAqIFRoaXMgbWFrZXMgaXQgZWFzeSB0byByZW1vdmUgYWxsIGRlZmF1bHQgc3R5bGluZyAtLSBzZXQgdGhlIGdlbmVyaWMgYXR0cmlidXRlXG4gKiB0byBmYWxzZSwgYW5kIGFsbCBkZWZhdWx0IHN0eWxpbmcgd2lsbCBiZSByZW1vdmVkLlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiBjbGFzcyBHZW5lcmljIGV4dGVuZHMgYmFzZSB7XG5cbiAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cbiAgICB0aGlzLmdlbmVyaWMgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZ2VuZXJpYycpIHx8IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogVHJ1ZSBpZiB0aGUgY29tcG9uZW50IHdvdWxkIGxpa2UgdG8gcmVjZWl2ZSBnZW5lcmljIHN0eWxpbmcuXG4gICAqXG4gICAqIFRoaXMgcHJvcGVydHkgaXMgdHJ1ZSBieSBkZWZhdWx0IOKAlMKgc2V0IGl0IHRvIGZhbHNlIHRvIHR1cm4gb2ZmIGFsbFxuICAgKiBnZW5lcmljIHN0eWxlcy4gVGhpcyBtYWtlcyBpdCBlYXNpZXIgdG8gYXBwbHkgY3VzdG9tIHN0eWxpbmc7IHlvdSB3b24ndFxuICAgKiBoYXZlIHRvIGV4cGxpY2l0bHkgb3ZlcnJpZGUgc3R5bGluZyB5b3UgZG9uJ3Qgd2FudC5cbiAgICpcbiAgICogQHByb3BlcnR5IGdlbmVyaWNcbiAgICogQHR5cGUgQm9vbGVhblxuICAgKiBAZGVmYXVsdCB0cnVlXG4gICAqL1xuICBnZXQgZ2VuZXJpYygpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2VuZXJpYztcbiAgfVxuICBzZXQgZ2VuZXJpYyh2YWx1ZSkge1xuICAgIGlmICgnZ2VuZXJpYycgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuZ2VuZXJpYyA9IHZhbHVlOyB9XG4gICAgLy8gV2Ugcm9sbCBvdXIgb3duIGF0dHJpYnV0ZSBzZXR0aW5nIHNvIHRoYXQgYW4gZXhwbGljaXRseSBmYWxzZSB2YWx1ZSBzaG93c1xuICAgIC8vIHVwIGFzIGdlbmVyaWM9XCJmYWxzZVwiLlxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YWx1ZSA9ICh2YWx1ZSAhPT0gJ2ZhbHNlJyk7XG4gICAgfVxuICAgIHRoaXMuX2dlbmVyaWMgPSB2YWx1ZTtcbiAgICBpZiAodmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAvLyBFeHBsaWNpdGx5IHVzZSBmYWxzZSBzdHJpbmcuXG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnZ2VuZXJpYycsICdmYWxzZScpO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgLy8gRXhwbGljaXRseSByZW1vdmUgYXR0cmlidXRlLlxuICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ2dlbmVyaWMnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVXNlIHRoZSBlbXB0eSBzdHJpbmcgdG8gZ2V0IGF0dHJpYnV0ZSB0byBhcHBlYXIgd2l0aCBubyB2YWx1ZS5cbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdnZW5lcmljJywgJycpO1xuICAgIH1cbiAgfVxuXG59O1xuIiwiLyoqXG4gKiBNaXhpbiBmb3IgdGVtcGxhdGUgc3RhbXBpbmcuIElmIGEgY29tcG9uZW50IGRlZmluZXMgYSB0ZW1wbGF0ZSBwcm9wZXJ0eSAoYXMgYVxuICogc3RyaW5nIG9yIHJlZmVyZW5jaW5nIGEgSFRNTCB0ZW1wbGF0ZSksIHdoZW4gdGhlIGNvbXBvbmVudCBjbGFzcyBpc1xuICogaW5zdGFudGlhdGVkLCBhIHNoYWRvdyByb290IHdpbGwgYmUgY3JlYXRlZCBvbiB0aGUgaW5zdGFuY2UsIGFuZCB0aGUgY29udGVudHNcbiAqIG9mIHRoZSB0ZW1wbGF0ZSB3aWxsIGJlIGNsb25lZCBpbnRvIHRoZSBzaGFkb3cgcm9vdC5cbiAqXG4gKiBGb3IgdGhlIHRpbWUgYmVpbmcsIHRoaXMgZXh0ZW5zaW9uIHJldGFpbnMgc3VwcG9ydCBmb3IgU2hhZG93IERPTSB2MC5cbiAqIFRoYXQgd2lsbCBldmVudHVhbGx5IGJlIGRlcHJlY2F0ZWQgYXMgYnJvd3NlcnMgaW1wbGVtZW50IFNoYWRvdyBET00gdjEuXG4gKlxuICogQG1peGluIFRlbXBsYXRlU3RhbXBpbmdcbiAqL1xuXG5cbi8vIEZlYXR1cmUgZGV0ZWN0aW9uIGZvciBvbGQgU2hhZG93IERPTSB2MC5cbmNvbnN0IFVTSU5HX1NIQURPV19ET01fVjAgPSAodHlwZW9mIEhUTUxFbGVtZW50LnByb3RvdHlwZS5jcmVhdGVTaGFkb3dSb290ICE9PSAndW5kZWZpbmVkJyk7XG5cblxuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IGNsYXNzIFRlbXBsYXRlU3RhbXBpbmcgZXh0ZW5kcyBiYXNlIHtcblxuICAvKlxuICAgKiBJZiB0aGUgY29tcG9uZW50IGRlZmluZXMgYSB0ZW1wbGF0ZSwgYSBzaGFkb3cgcm9vdCB3aWxsIGJlIGNyZWF0ZWQgb24gdGhlXG4gICAqIGNvbXBvbmVudCBpbnN0YW5jZSwgYW5kIHRoZSB0ZW1wbGF0ZSBzdGFtcGVkIGludG8gaXQuXG4gICAqL1xuICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuICAgIGxldCB0ZW1wbGF0ZSA9IHRoaXMudGVtcGxhdGU7XG4gICAgLy8gVE9ETzogU2F2ZSB0aGUgcHJvY2Vzc2VkIHRlbXBsYXRlIHdpdGggdGhlIGNvbXBvbmVudCdzIGNsYXNzIHByb3RvdHlwZVxuICAgIC8vIHNvIGl0IGRvZXNuJ3QgbmVlZCB0byBiZSBwcm9jZXNzZWQgd2l0aCBldmVyeSBpbnN0YW50aWF0aW9uLlxuICAgIGlmICh0ZW1wbGF0ZSkge1xuXG4gICAgICBpZiAodHlwZW9mIHRlbXBsYXRlID09PSAnc3RyaW5nJykge1xuICAgICAgICAvLyBVcGdyYWRlIHBsYWluIHN0cmluZyB0byByZWFsIHRlbXBsYXRlLlxuICAgICAgICB0ZW1wbGF0ZSA9IGNyZWF0ZVRlbXBsYXRlV2l0aElubmVySFRNTCh0ZW1wbGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChVU0lOR19TSEFET1dfRE9NX1YwKSB7XG4gICAgICAgIHBvbHlmaWxsU2xvdFdpdGhDb250ZW50KHRlbXBsYXRlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHdpbmRvdy5TaGFkb3dET01Qb2x5ZmlsbCkge1xuICAgICAgICBzaGltVGVtcGxhdGVTdHlsZXModGVtcGxhdGUsIHRoaXMubG9jYWxOYW1lKTtcbiAgICAgIH1cblxuICAgICAgLy8gdGhpcy5sb2coXCJjbG9uaW5nIHRlbXBsYXRlIGludG8gc2hhZG93IHJvb3RcIik7XG4gICAgICBsZXQgcm9vdCA9IFVTSU5HX1NIQURPV19ET01fVjAgP1xuICAgICAgICB0aGlzLmNyZWF0ZVNoYWRvd1Jvb3QoKSA6ICAgICAgICAgICAgIC8vIFNoYWRvdyBET00gdjBcbiAgICAgICAgdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7ICAvLyBTaGFkb3cgRE9NIHYxXG4gICAgICBsZXQgY2xvbmUgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRlbXBsYXRlLmNvbnRlbnQsIHRydWUpO1xuICAgICAgcm9vdC5hcHBlbmRDaGlsZChjbG9uZSk7XG4gICAgfVxuICB9XG5cbn07XG5cblxuLy8gQ29udmVydCBhIHBsYWluIHN0cmluZyBvZiBIVE1MIGludG8gYSByZWFsIHRlbXBsYXRlIGVsZW1lbnQuXG5mdW5jdGlvbiBjcmVhdGVUZW1wbGF0ZVdpdGhJbm5lckhUTUwoaW5uZXJIVE1MKSB7XG4gIGxldCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gIC8vIFJFVklFVzogSXMgdGhlcmUgYW4gZWFzaWVyIHdheSB0byBkbyB0aGlzP1xuICAvLyBXZSdkIGxpa2UgdG8ganVzdCBzZXQgaW5uZXJIVE1MIG9uIHRoZSB0ZW1wbGF0ZSBjb250ZW50LCBidXQgc2luY2UgaXQnc1xuICAvLyBhIERvY3VtZW50RnJhZ21lbnQsIHRoYXQgZG9lc24ndCB3b3JrLlxuICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gIHdoaWxlIChkaXYuY2hpbGROb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgdGVtcGxhdGUuY29udGVudC5hcHBlbmRDaGlsZChkaXYuY2hpbGROb2Rlc1swXSk7XG4gIH1cbiAgcmV0dXJuIHRlbXBsYXRlO1xufVxuXG4vLyBSZXBsYWNlIG9jY3VyZW5jZXMgb2YgdjEgc2xvdCBlbGVtZW50cyB3aXRoIHYwIGNvbnRlbnQgZWxlbWVudHMuXG4vLyBUaGlzIGRvZXMgbm90IHlldCBtYXAgbmFtZWQgc2xvdHMgdG8gY29udGVudCBzZWxlY3QgY2xhdXNlcy5cbmZ1bmN0aW9uIHBvbHlmaWxsU2xvdFdpdGhDb250ZW50KHRlbXBsYXRlKSB7XG4gIFtdLmZvckVhY2guY2FsbCh0ZW1wbGF0ZS5jb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3Nsb3QnKSwgc2xvdEVsZW1lbnQgPT4ge1xuICAgIGxldCBjb250ZW50RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NvbnRlbnQnKTtcbiAgICBzbG90RWxlbWVudC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChjb250ZW50RWxlbWVudCwgc2xvdEVsZW1lbnQpO1xuICB9KTtcbn1cblxuLy8gSW52b2tlIGJhc2ljIHN0eWxlIHNoaW1taW5nIHdpdGggU2hhZG93Q1NTLlxuZnVuY3Rpb24gc2hpbVRlbXBsYXRlU3R5bGVzKHRlbXBsYXRlLCB0YWcpIHtcbiAgd2luZG93LldlYkNvbXBvbmVudHMuU2hhZG93Q1NTLnNoaW1TdHlsaW5nKHRlbXBsYXRlLmNvbnRlbnQsIHRhZyk7XG59XG4iLCIvKipcbiAqIEEgc2FtcGxlIGdlbmVyYWwtcHVycG9zZSBiYXNlIGNsYXNzIGZvciBkZWZpbmluZyBjdXN0b20gZWxlbWVudHMgdGhhdCBtaXhlc1xuICogaW4gc29tZSBjb21tb24gZmVhdHVyZXM6IHRlbXBsYXRlIHN0YW1waW5nIGludG8gYSBzaGFkb3cgcm9vdCwgYXV0b21hdGljIG5vZGVcbiAqIGZpbmRpbmcsIGFuZCBtYXJzaGFsbGluZyBiZXR3ZWVuIGF0dHJpYnV0ZXMgYW5kIHByb3BlcnRpZXMuXG4gKlxuICogVGhpcyBiYXNlIGNsYXNzIGlzIG5vdCBzcGVjaWFsIGluIGFueSB3YXksIGFuZCBpcyBkZWZpbmVkIG9ubHkgYXMgYVxuICogY29udmVuaWVudCBzaG9ydGhhbmQgZm9yIGFwcGx5aW5nIHRoZSBtaXhpbnMgbGlzdGVkIGFib3ZlLiBZb3UgY2FuIHVzZSB0aGlzXG4gKiBjbGFzcyBhcyBhIGJhc2UgY2xhc3MgZm9yIHlvdXIgb3duIGVsZW1lbnRzLCBvciBlYXNpbHkgY3JlYXRlIHlvdXIgb3duIGJhc2VcbiAqIGNsYXNzIGJ5IGFwcGx5aW5nIHRoZSBzYW1lIHNldCBvZiBtaXhpbnMuXG4gKlxuICogQGNsYXNzIEVsZW1lbnRCYXNlXG4gKi9cblxuXG5pbXBvcnQgQ29tcG9zYWJsZSBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Db21wb3NhYmxlJztcbmltcG9ydCBUZW1wbGF0ZVN0YW1waW5nIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1RlbXBsYXRlU3RhbXBpbmcnO1xuaW1wb3J0IEF1dG9tYXRpY05vZGVGaW5kaW5nIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0F1dG9tYXRpY05vZGVGaW5kaW5nJztcbmltcG9ydCBBdHRyaWJ1dGVNYXJzaGFsbGluZyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9BdHRyaWJ1dGVNYXJzaGFsbGluZyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWxlbWVudEJhc2UgZXh0ZW5kcyBDb21wb3NhYmxlKEhUTUxFbGVtZW50KS5jb21wb3NlKFxuICBUZW1wbGF0ZVN0YW1waW5nLCAgICAgLy8gYmVmb3JlIG5vZGUgZmluZGluZywgc28gc2hhZG93IHJvb3QgaXMgcG9wdWxhdGVkXG4gIEF1dG9tYXRpY05vZGVGaW5kaW5nLCAvLyBiZWZvcmUgbWFyc2hhbGxpbmcsIHNvIG1hcnNoYWxsZWQgcHJvcGVydGllcyBjYW4gdXNlIGl0XG4gIEF0dHJpYnV0ZU1hcnNoYWxsaW5nXG4pIHtcblxuICAvKlxuICAgKiBEZWJ1Z2dpbmcgdXRpbGl0eTogbG9ncyBhIG1lc3NhZ2UsIHByZWZpeGVkIGJ5IHRoZSBjb21wb25lbnQncyB0YWcuXG4gICAqL1xuICBsb2codGV4dCkge1xuICAgIGlmIChzdXBlci5sb2cpIHsgc3VwZXIubG9nKHRleHQpOyB9XG4gICAgY29uc29sZS5sb2coYCR7dGhpcy5sb2NhbE5hbWV9OiAke3RleHR9YCk7XG4gIH1cblxufVxuIl19
