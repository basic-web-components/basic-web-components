(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ElementBase = require('../../basic-element-base/src/ElementBase');

var _ElementBase2 = _interopRequireDefault(_ElementBase);

var _OpenClose2 = require('../../basic-component-mixins/src/OpenClose');

var _OpenClose3 = _interopRequireDefault(_OpenClose2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A panel which can be expanded/collapsed with an animated transition.
 *
 * This component combines the OpenClose mixin and a simple CSS height
 * animation.
 *
 * This component handles only the duties of collapsing and expanding. It does
 * not provide a user interface for the user to trigger the change in state;
 * you must provide that user interface yourself.
 *
 * @mixes OpenClose
 */

var CollapsiblePanel = function (_OpenClose) {
  _inherits(CollapsiblePanel, _OpenClose);

  function CollapsiblePanel() {
    _classCallCheck(this, CollapsiblePanel);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(CollapsiblePanel).apply(this, arguments));
  }

  _createClass(CollapsiblePanel, [{
    key: 'createdCallback',
    value: function createdCallback() {
      var _this2 = this;

      if (_get(Object.getPrototypeOf(CollapsiblePanel.prototype), 'createdCallback', this)) {
        _get(Object.getPrototypeOf(CollapsiblePanel.prototype), 'createdCallback', this).call(this);
      }
      this.$.overflow.addEventListener('transitionend', function () {
        if (!_this2.closed) {
          // Remove the hard-coded height we applied for the transition so that
          // the element will reflow correctly, e.g., on window resize.
          _this2.$.overflow.style.height = '';
        }
        // Ensure the animation only plays once. For some reason, Safari will show
        // the animation twice without this line, even though the render function
        // explicitly removes this class when it sets the old height. Neither
        // Chrome nor Firefox seem to need this line.
        _this2.classList.remove('showTransition');
      });
    }
  }, {
    key: 'render',
    value: function render(closing) {
      _get(Object.getPrototypeOf(CollapsiblePanel.prototype), 'render', this).call(this, closing);

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
    key: 'template',
    get: function get() {
      return '\n      <style>\n      :host {\n        display: block;\n        overflow: hidden;\n      }\n\n      :host(.showTransition) #overflow {\n        transition: height 0.2s;\n      }\n      </style>\n\n      <div id="overflow">\n        <div id="container">\n          <slot></slot>\n        </div>\n      </div>\n    ';
    }
  }]);

  return CollapsiblePanel;
}((0, _OpenClose3.default)(_ElementBase2.default));

document.registerElement('basic-collapsible-panel', CollapsiblePanel);
exports.default = CollapsiblePanel;

},{"../../basic-component-mixins/src/OpenClose":5,"../../basic-element-base/src/ElementBase":8}],2:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
   *     document.registerElement('my-element', MyElement);
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

      /*
       * Generate an initial call to attributeChangedCallback for each attribute
       * on the element.
       *
       * TODO: The plan for Custom Elements v1 is for the browser to handle this.
       * Once that's handled (including in polyfills), this call can go away.
       */

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

  return AttributeMarshalling;
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

},{}],5:[function(require,module,exports){
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

      return _possibleConstructorReturn(this, Object.getPrototypeOf(OpenClose).apply(this, arguments));
    }

    _createClass(OpenClose, [{
      key: 'attachedCallback',
      value: function attachedCallback() {
        if (_get(Object.getPrototypeOf(OpenClose.prototype), 'attachedCallback', this)) {
          _get(Object.getPrototypeOf(OpenClose.prototype), 'attachedCallback', this).call(this);
        }
        this.render(this.closed);
      }
    }, {
      key: 'createdCallback',
      value: function createdCallback() {
        if (_get(Object.getPrototypeOf(OpenClose.prototype), 'createdCallback', this)) {
          _get(Object.getPrototypeOf(OpenClose.prototype), 'createdCallback', this).call(this);
        }
        this._closed = false;
      }

      /**
       * Close the component.
       *
       * This is equivalent to setting the `closed` property to true.
       */

    }, {
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
        // Would like to use classList.toggle() here, but IE 11 doesn't have it.
        if (closing) {
          this.classList.add('basic-closed');
          this.classList.remove('basic-opened');
        } else {
          this.classList.remove('basic-closed');
          this.classList.add('basic-opened');
        }
        this.setAttribute('aria-expanded', !closing);
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
        return this._closed;
      },
      set: function set(value) {
        if ('closed' in base.prototype) {
          _set(Object.getPrototypeOf(OpenClose.prototype), 'closed', value, this);
        }
        if (this._closed !== value) {
          this._closed = value;
          this.render(value);

          var event = new CustomEvent('closed-changed');
          this.dispatchEvent(event);
        }
      }
    }]);

    return OpenClose;
  }(base);

  return OpenClose;
};

},{}],6:[function(require,module,exports){
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
   * create that tree yourself, or make use of the ShadowTemplate mixin.
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
    }]);

    return ShadowElementReferences;
  }(base);

  return ShadowElementReferences;
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

// Feature detection for old Shadow DOM v0.
var USING_SHADOW_DOM_V0 = typeof HTMLElement.prototype.createShadowRoot !== 'undefined';

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

    function ShadowTemplate() {
      _classCallCheck(this, ShadowTemplate);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(ShadowTemplate).apply(this, arguments));
    }

    _createClass(ShadowTemplate, [{
      key: 'createdCallback',

      /*
       * If the component defines a template, a shadow root will be created on the
       * component instance, and the template stamped into it.
       */
      value: function createdCallback() {
        if (_get(Object.getPrototypeOf(ShadowTemplate.prototype), 'createdCallback', this)) {
          _get(Object.getPrototypeOf(ShadowTemplate.prototype), 'createdCallback', this).call(this);
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

},{"../../basic-component-mixins/src/AttributeMarshalling":2,"../../basic-component-mixins/src/Composable":3,"../../basic-component-mixins/src/DistributedChildren":4,"../../basic-component-mixins/src/ShadowElementReferences":6,"../../basic-component-mixins/src/ShadowTemplate":7}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwYWNrYWdlc1xcYmFzaWMtY29sbGFwc2libGUtcGFuZWxcXHNyY1xcQ29sbGFwc2libGVQYW5lbC5qcyIsInBhY2thZ2VzXFxiYXNpYy1jb21wb25lbnQtbWl4aW5zXFxzcmNcXEF0dHJpYnV0ZU1hcnNoYWxsaW5nLmpzIiwicGFja2FnZXNcXGJhc2ljLWNvbXBvbmVudC1taXhpbnNcXHNyY1xcQ29tcG9zYWJsZS5qcyIsInBhY2thZ2VzXFxiYXNpYy1jb21wb25lbnQtbWl4aW5zXFxzcmNcXERpc3RyaWJ1dGVkQ2hpbGRyZW4uanMiLCJwYWNrYWdlc1xcYmFzaWMtY29tcG9uZW50LW1peGluc1xcc3JjXFxPcGVuQ2xvc2UuanMiLCJwYWNrYWdlc1xcYmFzaWMtY29tcG9uZW50LW1peGluc1xcc3JjXFxTaGFkb3dFbGVtZW50UmVmZXJlbmNlcy5qcyIsInBhY2thZ2VzXFxiYXNpYy1jb21wb25lbnQtbWl4aW5zXFxzcmNcXFNoYWRvd1RlbXBsYXRlLmpzIiwicGFja2FnZXNcXGJhc2ljLWVsZW1lbnQtYmFzZVxcc3JjXFxFbGVtZW50QmFzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2dCTSxnQkFBZ0I7WUFBaEIsZ0JBQWdCOztXQUFoQixnQkFBZ0I7MEJBQWhCLGdCQUFnQjs7a0VBQWhCLGdCQUFnQjs7O2VBQWhCLGdCQUFnQjs7c0NBRUY7OztBQUNoQixxQ0FIRSxnQkFBZ0IsdUNBR1M7QUFBRSxtQ0FIM0IsZ0JBQWdCLGlEQUdtQztPQUFFO0FBQ3ZELFVBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsRUFBRSxZQUFNO0FBQ3RELFlBQUksQ0FBQyxPQUFLLE1BQU0sRUFBRTs7O0FBR2hCLGlCQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1B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QUFDO0dBQ2pEO0FBQ0QsU0FBTyxRQUFRLENBQUM7Q0FDakI7Ozs7QUFBQSxBQUlELFNBQVMsdUJBQXVCLENBQUMsUUFBUSxFQUFFO0FBQ3pDLElBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsVUFBQSxXQUFXLEVBQUk7QUFDeEUsUUFBSSxjQUFjLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN2RCxlQUFXLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsV0FBVyxDQUFDLENBQUM7R0FDbEUsQ0FBQyxDQUFDO0NBQ0o7OztBQUFBLEFBR0QsU0FBUyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLFFBQU0sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0NBQ25FOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQzNFSyxXQUFXO1lBQVgsV0FBVzs7V0FBWCxXQUFXOzBCQUFYLFdBQVc7O2tFQUFYLFdBQVc7OztlQUFYLFdBQVc7Ozs7Ozt3QkFVWCxJQUFJLEVBQUU7QUFDUixxQ0FYRSxXQUFXLDJCQVdFO0FBQUUsbUNBWGYsV0FBVyxxQ0FXYyxJQUFJLEVBQUU7T0FBRTtBQUNuQyxhQUFPLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxTQUFTLFVBQUssSUFBSSxDQUFHLENBQUM7S0FDM0M7OztTQWJHLFdBQVc7RUFBUywwQkFBVyxXQUFXLENBQUMsQ0FBQyxPQUFPOzs4REFLeEQ7O2tCQVljLFdBQVciLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IEVsZW1lbnRCYXNlIGZyb20gJy4uLy4uL2Jhc2ljLWVsZW1lbnQtYmFzZS9zcmMvRWxlbWVudEJhc2UnO1xyXG5pbXBvcnQgT3BlbkNsb3NlIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL09wZW5DbG9zZSc7XHJcblxyXG5cclxuLyoqXHJcbiAqIEEgcGFuZWwgd2hpY2ggY2FuIGJlIGV4cGFuZGVkL2NvbGxhcHNlZCB3aXRoIGFuIGFuaW1hdGVkIHRyYW5zaXRpb24uXHJcbiAqXHJcbiAqIFRoaXMgY29tcG9uZW50IGNvbWJpbmVzIHRoZSBPcGVuQ2xvc2UgbWl4aW4gYW5kIGEgc2ltcGxlIENTUyBoZWlnaHRcclxuICogYW5pbWF0aW9uLlxyXG4gKlxyXG4gKiBUaGlzIGNvbXBvbmVudCBoYW5kbGVzIG9ubHkgdGhlIGR1dGllcyBvZiBjb2xsYXBzaW5nIGFuZCBleHBhbmRpbmcuIEl0IGRvZXNcclxuICogbm90IHByb3ZpZGUgYSB1c2VyIGludGVyZmFjZSBmb3IgdGhlIHVzZXIgdG8gdHJpZ2dlciB0aGUgY2hhbmdlIGluIHN0YXRlO1xyXG4gKiB5b3UgbXVzdCBwcm92aWRlIHRoYXQgdXNlciBpbnRlcmZhY2UgeW91cnNlbGYuXHJcbiAqXHJcbiAqIEBtaXhlcyBPcGVuQ2xvc2VcclxuICovXHJcbmNsYXNzIENvbGxhcHNpYmxlUGFuZWwgZXh0ZW5kcyBPcGVuQ2xvc2UoRWxlbWVudEJhc2UpIHtcclxuXHJcbiAgY3JlYXRlZENhbGxiYWNrKCkge1xyXG4gICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxyXG4gICAgdGhpcy4kLm92ZXJmbG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB7XHJcbiAgICAgIGlmICghdGhpcy5jbG9zZWQpIHtcclxuICAgICAgICAvLyBSZW1vdmUgdGhlIGhhcmQtY29kZWQgaGVpZ2h0IHdlIGFwcGxpZWQgZm9yIHRoZSB0cmFuc2l0aW9uIHNvIHRoYXRcclxuICAgICAgICAvLyB0aGUgZWxlbWVudCB3aWxsIHJlZmxvdyBjb3JyZWN0bHksIGUuZy4sIG9uIHdpbmRvdyByZXNpemUuXHJcbiAgICAgICAgdGhpcy4kLm92ZXJmbG93LnN0eWxlLmhlaWdodCA9ICcnO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIEVuc3VyZSB0aGUgYW5pbWF0aW9uIG9ubHkgcGxheXMgb25jZS4gRm9yIHNvbWUgcmVhc29uLCBTYWZhcmkgd2lsbCBzaG93XHJcbiAgICAgIC8vIHRoZSBhbmltYXRpb24gdHdpY2Ugd2l0aG91dCB0aGlzIGxpbmUsIGV2ZW4gdGhvdWdoIHRoZSByZW5kZXIgZnVuY3Rpb25cclxuICAgICAgLy8gZXhwbGljaXRseSByZW1vdmVzIHRoaXMgY2xhc3Mgd2hlbiBpdCBzZXRzIHRoZSBvbGQgaGVpZ2h0LiBOZWl0aGVyXHJcbiAgICAgIC8vIENocm9tZSBub3IgRmlyZWZveCBzZWVtIHRvIG5lZWQgdGhpcyBsaW5lLlxyXG4gICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3dUcmFuc2l0aW9uJyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcihjbG9zaW5nKSB7XHJcbiAgICBzdXBlci5yZW5kZXIoY2xvc2luZyk7XHJcblxyXG4gICAgbGV0IG5hdHVyYWxIZWlnaHQgPSB0aGlzLiQuY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcclxuICAgIGlmIChuYXR1cmFsSGVpZ2h0ID09PSAwKSB7XHJcbiAgICAgIC8vIE1vc3QgbGlrZWx5IGhhdmVuJ3QgaGFkIGEgY2hhbmNlIHRvIHJlbmRlciB5ZXQuXHJcbiAgICAgIHRoaXMuJC5vdmVyZmxvdy5zdHlsZS5oZWlnaHQgPSBjbG9zaW5nID8gMCA6ICcnO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gV2l0aG91dCBhbmltYXRpbmcsIHNldCBzdGFydGluZyBoZWlnaHQgb2YgdHJhbnNpdGlvbi5cclxuICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnc2hvd1RyYW5zaXRpb24nKTtcclxuICAgIGxldCBvbGRIZWlnaHQgPSBjbG9zaW5nID8gbmF0dXJhbEhlaWdodCA6IDA7XHJcbiAgICB0aGlzLiQub3ZlcmZsb3cuc3R5bGUuaGVpZ2h0ID0gb2xkSGVpZ2h0ICsgJ3B4JztcclxuXHJcbiAgICAvLyBGb3JjZSBhIHJlbGF5b3V0IHNvIHRoYXQgdGhlIHN0YXJ0aW5nIGhlaWdodCBpcyBhcHBsaWVkLlxyXG4gICAgLy8gVGhpcyBjYW4gYmUgYWNoaWV2ZWQgYnkgcmVhZGluZyBhIHByb3BlcnR5IGxpa2Ugb2Zmc2V0SGVpZ2h0LlxyXG4gICAgdGhpcy4kLm92ZXJmbG93Lm9mZnNldEhlaWdodDsgLy8ganNoaW50IGlnbm9yZTpsaW5lXHJcblxyXG4gICAgLy8gVHVybiBhbmltYXRpb24gb24sIGFuZCBlbmRpbmcgaGVpZ2h0IG9mIHRyYW5zaXRpb24uXHJcbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ3Nob3dUcmFuc2l0aW9uJyk7XHJcbiAgICBsZXQgbmV3SGVpZ2h0ID0gY2xvc2luZyA/IDAgOiBuYXR1cmFsSGVpZ2h0O1xyXG4gICAgdGhpcy4kLm92ZXJmbG93LnN0eWxlLmhlaWdodCA9IG5ld0hlaWdodCArICdweCc7XHJcbiAgfVxyXG5cclxuICBnZXQgdGVtcGxhdGUoKSB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgICA8c3R5bGU+XHJcbiAgICAgIDpob3N0IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICA6aG9zdCguc2hvd1RyYW5zaXRpb24pICNvdmVyZmxvdyB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuMnM7XHJcbiAgICAgIH1cclxuICAgICAgPC9zdHlsZT5cclxuXHJcbiAgICAgIDxkaXYgaWQ9XCJvdmVyZmxvd1wiPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxzbG90Pjwvc2xvdD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG5kb2N1bWVudC5yZWdpc3RlckVsZW1lbnQoJ2Jhc2ljLWNvbGxhcHNpYmxlLXBhbmVsJywgQ29sbGFwc2libGVQYW5lbCk7XHJcbmV4cG9ydCBkZWZhdWx0IENvbGxhcHNpYmxlUGFuZWw7XHJcbiIsIi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggQXR0cmlidXRlTWFyc2hhbGxpbmcuICovXHJcbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XHJcblxyXG4gIC8qKlxyXG4gICAqIE1peGluIHdoaWNoIG1hcnNoYWxscyBhdHRyaWJ1dGVzIHRvIHByb3BlcnRpZXMgKGFuZCBldmVudHVhbGx5IHZpY2UgdmVyc2EpLlxyXG4gICAqXHJcbiAgICogSWYgeW91ciBjb21wb25lbnQgZXhwb3NlcyBhIHNldHRlciBmb3IgYSBwcm9wZXJ0eSwgaXQncyBnZW5lcmFsbHkgYSBnb29kXHJcbiAgICogaWRlYSB0byBsZXQgZGV2cyB1c2luZyB5b3VyIGNvbXBvbmVudCBiZSBhYmxlIHRvIHNldCB0aGF0IHByb3BlcnR5IGluIEhUTUxcclxuICAgKiB2aWEgYW4gZWxlbWVudCBhdHRyaWJ1dGUuIFlvdSBjYW4gY29kZSB0aGF0IHlvdXJzZWxmIGJ5IHdyaXRpbmcgYW5cclxuICAgKiBgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrYCwgb3IgeW91IGNhbiB1c2UgdGhpcyBtaXhpbiB0byBnZXQgYSBkZWdyZWUgb2ZcclxuICAgKiBhdXRvbWF0aWMgc3VwcG9ydC5cclxuICAgKlxyXG4gICAqIFRoaXMgbWl4aW4gaW1wbGVtZW50cyBhbiBgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrYCB0aGF0IHdpbGwgYXR0ZW1wdCB0b1xyXG4gICAqIGNvbnZlcnQgYSBjaGFuZ2UgaW4gYW4gZWxlbWVudCBhdHRyaWJ1dGUgaW50byBhIGNhbGwgdG8gdGhlIGNvcnJlc3BvbmRpbmdcclxuICAgKiBwcm9wZXJ0eSBzZXR0ZXIuIEF0dHJpYnV0ZXMgdHlwaWNhbGx5IGZvbGxvdyBoeXBoZW5hdGVkIG5hbWVzIChcImZvby1iYXJcIiksXHJcbiAgICogd2hlcmVhcyBwcm9wZXJ0aWVzIHR5cGljYWxseSB1c2UgY2FtZWxDYXNlIG5hbWVzIChcImZvb0JhclwiKS4gVGhpcyBtaXhpblxyXG4gICAqIHJlc3BlY3RzIHRoYXQgY29udmVudGlvbiwgYXV0b21hdGljYWxseSBtYXBwaW5nIHRoZSBoeXBoZW5hdGVkIGF0dHJpYnV0ZVxyXG4gICAqIG5hbWUgdG8gdGhlIGNvcnJlc3BvbmRpbmcgY2FtZWxDYXNlIHByb3BlcnR5IG5hbWUuXHJcbiAgICpcclxuICAgKiBFeGFtcGxlOiBZb3UgZGVmaW5lIGEgY29tcG9uZW50IHVzaW5nIHRoaXMgbWl4aW46XHJcbiAgICpcclxuICAgKiAgICAgY2xhc3MgTXlFbGVtZW50IGV4dGVuZHMgQXR0cmlidXRlTWFyc2hhbGxpbmcoSFRNTEVsZW1lbnQpIHtcclxuICAgKiAgICAgICBnZXQgZm9vQmFyKCkgeyByZXR1cm4gdGhpcy5fZm9vQmFyOyB9XHJcbiAgICogICAgICAgc2V0IGZvb0Jhcih2YWx1ZSkgeyB0aGlzLl9mb29CYXIgPSB2YWx1ZTsgfVxyXG4gICAqICAgICB9XHJcbiAgICogICAgIGRvY3VtZW50LnJlZ2lzdGVyRWxlbWVudCgnbXktZWxlbWVudCcsIE15RWxlbWVudCk7XHJcbiAgICpcclxuICAgKiBJZiBzb21lb25lIHRoZW4gaW5zdGFudGlhdGVzIHlvdXIgY29tcG9uZW50IGluIEhUTUw6XHJcbiAgICpcclxuICAgKiAgICAgPG15LWVsZW1lbnQgZm9vLWJhcj1cIkhlbGxvXCI+PC9teS1lbGVtZW50PlxyXG4gICAqXHJcbiAgICogVGhlbiwgYWZ0ZXIgdGhlIGVsZW1lbnQgaGFzIGJlZW4gdXBncmFkZWQsIHRoZSBgZm9vQmFyYCBzZXR0ZXIgd2lsbFxyXG4gICAqIGF1dG9tYXRpY2FsbHkgYmUgaW52b2tlZCB3aXRoIHRoZSBpbml0aWFsIHZhbHVlIFwiSGVsbG9cIi5cclxuICAgKlxyXG4gICAqIEZvciB0aGUgdGltZSBiZWluZywgdGhpcyBtaXhpbiBvbmx5IHN1cHBvcnRzIHN0cmluZy12YWx1ZWQgcHJvcGVydGllcy5cclxuICAgKiBJZiB5b3UnZCBsaWtlIHRvIGNvbnZlcnQgc3RyaW5nIGF0dHJpYnV0ZXMgdG8gb3RoZXIgdHlwZXMgKG51bWJlcnMsXHJcbiAgICogYm9vbGVhbnMpLCB5b3UgbmVlZCB0byBpbXBsZW1lbnQgYGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja2AgeW91cnNlbGYuXHJcbiAgICovXHJcbiAgY2xhc3MgQXR0cmlidXRlTWFyc2hhbGxpbmcgZXh0ZW5kcyBiYXNlIHtcclxuXHJcbiAgICAvKlxyXG4gICAgICogSGFuZGxlIGEgY2hhbmdlIHRvIHRoZSBhdHRyaWJ1dGUgd2l0aCB0aGUgZ2l2ZW4gbmFtZS5cclxuICAgICAqL1xyXG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xyXG4gICAgICBpZiAoc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKSB7IHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjaygpOyB9XHJcbiAgICAgIC8vIElmIHRoZSBhdHRyaWJ1dGUgbmFtZSBjb3JyZXNwb25kcyB0byBhIHByb3BlcnR5IG5hbWUsIHRoZW4gc2V0IHRoYXRcclxuICAgICAgLy8gcHJvcGVydHkuIElnbm9yZSBjaGFuZ2VzIGluIHN0YW5kYXJkIEhUTUxFbGVtZW50IHByb3BlcnRpZXMuXHJcbiAgICAgIGxldCBwcm9wZXJ0eU5hbWUgPSBhdHRyaWJ1dGVUb1Byb3BlcnR5TmFtZShuYW1lKTtcclxuICAgICAgaWYgKHByb3BlcnR5TmFtZSBpbiB0aGlzICYmICEocHJvcGVydHlOYW1lIGluIEhUTUxFbGVtZW50LnByb3RvdHlwZSkpIHtcclxuICAgICAgICB0aGlzW3Byb3BlcnR5TmFtZV0gPSBuZXdWYWx1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBHZW5lcmF0ZSBhbiBpbml0aWFsIGNhbGwgdG8gYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrIGZvciBlYWNoIGF0dHJpYnV0ZVxyXG4gICAgICogb24gdGhlIGVsZW1lbnQuXHJcbiAgICAgKlxyXG4gICAgICogVE9ETzogVGhlIHBsYW4gZm9yIEN1c3RvbSBFbGVtZW50cyB2MSBpcyBmb3IgdGhlIGJyb3dzZXIgdG8gaGFuZGxlIHRoaXMuXHJcbiAgICAgKiBPbmNlIHRoYXQncyBoYW5kbGVkIChpbmNsdWRpbmcgaW4gcG9seWZpbGxzKSwgdGhpcyBjYWxsIGNhbiBnbyBhd2F5LlxyXG4gICAgICovXHJcbiAgICBjcmVhdGVkQ2FsbGJhY2soKSB7XHJcbiAgICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cclxuICAgICAgW10uZm9yRWFjaC5jYWxsKHRoaXMuYXR0cmlidXRlcywgYXR0cmlidXRlID0+IHtcclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhhdHRyaWJ1dGUubmFtZSwgdW5kZWZpbmVkLCBhdHRyaWJ1dGUudmFsdWUpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICByZXR1cm4gQXR0cmlidXRlTWFyc2hhbGxpbmc7XHJcbn07XHJcblxyXG5cclxuLy8gQ29udmVydCBjYW1lbCBjYXNlIGZvb0JhciBuYW1lIHRvIGh5cGhlbmF0ZWQgZm9vLWJhci5cclxuZnVuY3Rpb24gYXR0cmlidXRlVG9Qcm9wZXJ0eU5hbWUoYXR0cmlidXRlTmFtZSkge1xyXG4gIGxldCBwcm9wZXJ0eU5hbWUgPSBhdHRyaWJ1dGVOYW1lLnJlcGxhY2UoLy0oW2Etel0pL2csIG0gPT4gbVsxXS50b1VwcGVyQ2FzZSgpKTtcclxuICByZXR1cm4gcHJvcGVydHlOYW1lO1xyXG59XHJcblxyXG4vLyBDb252ZXJ0IGh5cGhlbmF0ZWQgZm9vLWJhciBuYW1lIHRvIGNhbWVsIGNhc2UgZm9vQmFyLlxyXG4vLyBUT0RPOiBVc2UgdGhpcyB3aGVuIHdlIHN1cHBvcnQgcmVmbGVjdGlvbiBvZiBwcm9wZXJ0aWVzIHRvIGF0dHJpYnV0ZXMuXHJcbi8vIGZ1bmN0aW9uIHByb3BlcnR5VG9BdHRyaWJ1dGVOYW1lKHByb3BlcnR5TmFtZSkge1xyXG4vLyAgIGxldCBhdHRyaWJ1dGVOYW1lID0gcHJvcGVydHlOYW1lLnJlcGxhY2UoLyhbYS16XVtBLVpdKS9nLCBnID0+IGdbMF0gKyAnLScgKyBnWzFdLnRvTG93ZXJDYXNlKCkpO1xyXG4vLyAgIHJldHVybiBhdHRyaWJ1dGVOYW1lO1xyXG4vLyB9XHJcbiIsIi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggQ29tcG9zYWJsZS4gKi9cclxuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcclxuXHJcbiAgLyoqXHJcbiAgICogTWl4aW4gdG8gbWFrZSBhIGNsYXNzIG1vcmUgZWFzaWx5IGNvbXBvc2FibGUgd2l0aCBvdGhlciBtaXhpbnMuXHJcbiAgICpcclxuICAgKiBUaGlzIG1peGluIGNvbnRyaWJ1dGVzIGEgYGNvbXBvc2VgIG1ldGhvZCB0aGF0IGFwcGxpZXMgYSBzZXQgb2YgbWl4aW5cclxuICAgKiBmdW5jdGlvbnMgYW5kIHJldHVybnMgdGhlIHJlc3VsdGluZyBuZXcgY2xhc3MuIFRoaXMgc3VnYXIgY2FuIG1ha2UgdGhlXHJcbiAgICogYXBwbGljYXRpb24gb2YgbWFueSBtaXhpbnMgYXQgb25jZSBlYXNpZXIgdG8gcmVhZC5cclxuICAgKi9cclxuICBjbGFzcyBDb21wb3NhYmxlIGV4dGVuZHMgYmFzZSB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBcHBseSBhIHNldCBvZiBtaXhpbiBmdW5jdGlvbnMgb3IgbWl4aW4gb2JqZWN0cyB0byB0aGUgcHJlc2VudCBjbGFzcyBhbmRcclxuICAgICAqIHJldHVybiB0aGUgbmV3IGNsYXNzLlxyXG4gICAgICpcclxuICAgICAqIEluc3RlYWQgb2Ygd3JpdGluZzpcclxuICAgICAqXHJcbiAgICAgKiAgICAgbGV0IE15Q2xhc3MgPSBNaXhpbjEoTWl4aW4yKE1peGluMyhNaXhpbjQoTWl4aW41KEJhc2VDbGFzcykpKSkpO1xyXG4gICAgICpcclxuICAgICAqIFlvdSBjYW4gd3JpdGU6XHJcbiAgICAgKlxyXG4gICAgICogICAgIGxldCBNeUNsYXNzID0gQ29tcG9zYWJsZShCYXNlQ2xhc3MpLmNvbXBvc2UoXHJcbiAgICAgKiAgICAgICBNaXhpbjEsXHJcbiAgICAgKiAgICAgICBNaXhpbjIsXHJcbiAgICAgKiAgICAgICBNaXhpbjMsXHJcbiAgICAgKiAgICAgICBNaXhpbjQsXHJcbiAgICAgKiAgICAgICBNaXhpbjVcclxuICAgICAqICAgICApO1xyXG4gICAgICpcclxuICAgICAqIFRoaXMgZnVuY3Rpb24gY2FuIGFsc28gdGFrZSBtaXhpbiBvYmplY3RzLiBBIG1peGluIG9iamVjdCBpcyBqdXN0IGFcclxuICAgICAqIHNob3J0aGFuZCBmb3IgYSBtaXhpbiBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYSBuZXcgc3ViY2xhc3Mgd2l0aCB0aGUgZ2l2ZW5cclxuICAgICAqIG1lbWJlcnMuIFRoZSBtaXhpbiBvYmplY3QncyBtZW1iZXJzIGFyZSAqbm90KiBjb3BpZWQgZGlyZWN0bHkgb250byB0aGVcclxuICAgICAqIHByb3RvdHlwZSBvZiB0aGUgYmFzZSBjbGFzcywgYXMgd2l0aCB0cmFkaXRpb25hbCBtaXhpbnMuXHJcbiAgICAgKlxyXG4gICAgICogSW4gYWRkaXRpb24gdG8gcHJvdmlkaW5nIHN5bnRhY3RpYyBzdWdhciwgdGhpcyBtaXhpbiBjYW4gYmUgdXNlZCB0b1xyXG4gICAgICogZGVmaW5lIGEgY2xhc3MgaW4gRVM1LCB3aGljaCBsYWNrcyBFUzYncyBgY2xhc3NgIGtleXdvcmQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHsuLi5taXhpbnN9IG1peGlucyAtIEEgc2V0IG9mIG1peGluIGZ1bmN0aW9ucyBvciBvYmplY3RzIHRvIGFwcGx5LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY29tcG9zZSguLi5taXhpbnMpIHtcclxuICAgICAgLy8gV2UgY3JlYXRlIGEgbmV3IHN1YmNsYXNzIGZvciBlYWNoIG1peGluIGluIHR1cm4uIFRoZSByZXN1bHQgYmVjb21lc1xyXG4gICAgICAvLyB0aGUgYmFzZSBjbGFzcyBleHRlbmRlZCBieSBhbnkgc3Vic2VxdWVudCBtaXhpbnMuIEl0IHR1cm5zIG91dCB0aGF0XHJcbiAgICAgIC8vIHdlIGNhbiB1c2UgQXJyYXkucmVkdWNlKCkgdG8gY29uY2lzZWx5IGV4cHJlc3MgdGhpcywgdXNpbmcgdGhlIGN1cnJlbnRcclxuICAgICAgLy8gb2JqZWN0IGFzIHRoZSBzZWVkIGZvciByZWR1Y2UoKS5cclxuICAgICAgcmV0dXJuIG1peGlucy5yZWR1Y2UoY29tcG9zZUNsYXNzLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICByZXR1cm4gQ29tcG9zYWJsZTtcclxufTtcclxuXHJcblxyXG4vLyBQcm9wZXJ0aWVzIGRlZmluZWQgYnkgT2JqZWN0IHRoYXQgd2UgZG9uJ3Qgd2FudCB0byBtaXhpbi5cclxuY29uc3QgTk9OX01JWEFCTEVfT0JKRUNUX1BST1BFUlRJRVMgPSBbXHJcbiAgJ2NvbnN0cnVjdG9yJ1xyXG5dO1xyXG5cclxuLypcclxuICogQXBwbHkgdGhlIG1peGluIHRvIHRoZSBnaXZlbiBiYXNlIGNsYXNzIHRvIHJldHVybiBhIG5ldyBjbGFzcy5cclxuICogVGhlIG1peGluIGNhbiBlaXRoZXIgYmUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIG1vZGlmaWVkIGNsYXNzLCBvciBhXHJcbiAqIHBsYWluIG9iamVjdCB3aG9zZSBtZW1iZXJzIHdpbGwgYmUgY29waWVkIHRvIHRoZSBuZXcgY2xhc3MnIHByb3RvdHlwZS5cclxuICovXHJcbmZ1bmN0aW9uIGNvbXBvc2VDbGFzcyhiYXNlLCBtaXhpbikge1xyXG4gIGlmICh0eXBlb2YgbWl4aW4gPT09ICdmdW5jdGlvbicpIHtcclxuICAgIC8vIE1peGluIGZ1bmN0aW9uXHJcbiAgICByZXR1cm4gbWl4aW4oYmFzZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIE1peGluIG9iamVjdFxyXG4gICAgY2xhc3MgU3ViY2xhc3MgZXh0ZW5kcyBiYXNlIHt9XHJcbiAgICBjb3B5T3duUHJvcGVydGllcyhtaXhpbiwgU3ViY2xhc3MucHJvdG90eXBlLCBOT05fTUlYQUJMRV9PQkpFQ1RfUFJPUEVSVElFUyk7XHJcbiAgICByZXR1cm4gU3ViY2xhc3M7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLypcclxuICogQ29weSB0aGUgZ2l2ZW4gcHJvcGVydGllcy9tZXRob2RzIHRvIHRoZSB0YXJnZXQuXHJcbiAqIFJldHVybiB0aGUgdXBkYXRlZCB0YXJnZXQuXHJcbiAqL1xyXG5mdW5jdGlvbiBjb3B5T3duUHJvcGVydGllcyhzb3VyY2UsIHRhcmdldCwgaWdub3JlUHJvcGVydHlOYW1lcyA9IFtdKSB7XHJcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoc291cmNlKS5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgaWYgKGlnbm9yZVByb3BlcnR5TmFtZXMuaW5kZXhPZihuYW1lKSA8IDApIHtcclxuICAgICAgbGV0IGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgbmFtZSk7XHJcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHJldHVybiB0YXJnZXQ7XHJcbn1cclxuIiwiLy8gVE9ETzogUmF0aW9uYWxpemUgd2l0aCBuZXcgQ3VzdG9tIEVsZW1lbnRzIEFQSS5cclxuLy8gVE9ETzogQ29uc2lkZXIgcmVuYW1pbmcgdG8gbWF0Y2ggQ3VzdG9tIEVsZW1lbnRzIEFQSS5cclxuXHJcblxyXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIERpc3RyaWJ1dGVkQ2hpbGRyZW4uICovXHJcbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XHJcblxyXG4gIC8qKlxyXG4gICAqIE1peGluIHdoaWNoIGRlZmluZXMgaGVscGVycyBmb3IgYWNjZXNzaW5nIGEgY29tcG9uZW50J3MgZGlzdHJpYnV0ZWRcclxuICAgKiBjaGlsZHJlbiBhcyBhIGZsYXR0ZW5lZCBhcnJheSBvciBzdHJpbmcuXHJcbiAgICpcclxuICAgKiBUaGUgc3RhbmRhcmQgRE9NIEFQSSBwcm92aWRlcyBzZXZlcmFsIHdheXMgb2YgYWNjZXNzaW5nIGNoaWxkIGNvbnRlbnQ6XHJcbiAgICogYGNoaWxkcmVuYCwgYGNoaWxkTm9kZXNgLCBhbmQgYHRleHRDb250ZW50YC4gTm9uZSBvZiB0aGVzZSBmdW5jdGlvbnMgYXJlXHJcbiAgICogU2hhZG93IERPTSBhd2FyZS4gVGhpcyBtaXhpbiBkZWZpbmVzIHZhcmlhdGlvbnMgb2YgdGhvc2UgZnVuY3Rpb25zIHRoYXRcclxuICAgKiAqYXJlKiBTaGFkb3cgRE9NIGF3YXJlLlxyXG4gICAqXHJcbiAgICogRXhhbXBsZTogeW91IGNyZWF0ZSBhIGNvbXBvbmVudCBgPGNvdW50LWNoaWxkcmVuPmAgdGhhdCBkaXNwbGF5cyBhIG51bWJlclxyXG4gICAqIGVxdWFsIHRvIHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gcGxhY2VkIGluc2lkZSB0aGF0IGNvbXBvbmVudC4gSWYgc29tZW9uZVxyXG4gICAqIGluc3RhbnRpYXRlcyB5b3VyIGNvbXBvbmVudCBsaWtlOlxyXG4gICAqXHJcbiAgICogICAgIDxjb3VudC1jaGlsZHJlbj5cclxuICAgKiAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAqICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICogICAgICAgPGRpdj48L2Rpdj5cclxuICAgKiAgICAgPC9jb3VudC1jaGlsZHJlbj5cclxuICAgKlxyXG4gICAqIFRoZW4gdGhlIGNvbXBvbmVudCBzaG91bGQgc2hvdyBcIjNcIiwgYmVjYXVzZSB0aGVyZSBhcmUgdGhyZWUgY2hpbGRyZW4uIFRvXHJcbiAgICogY2FsY3VsYXRlIHRoZSBudW1iZXIgb2YgY2hpbGRyZW4sIHRoZSBjb21wb25lbnQgY2FuIGp1c3QgY2FsY3VsYXRlXHJcbiAgICogYHRoaXMuY2hpbGRyZW4ubGVuZ3RoYC4gSG93ZXZlciwgc3VwcG9zZSBzb21lb25lIGluc3RhbnRpYXRlcyB5b3VyXHJcbiAgICogY29tcG9uZW50IGluc2lkZSBvbmUgb2YgdGhlaXIgb3duIGNvbXBvbmVudHMsIGFuZCBwdXRzIGEgYDxzbG90PmAgZWxlbWVudFxyXG4gICAqIGluc2lkZSB5b3VyIGNvbXBvbmVudDpcclxuICAgKlxyXG4gICAqICAgICA8Y291bnQtY2hpbGRyZW4+XHJcbiAgICogICAgICAgPHNsb3Q+PC9zbG90PlxyXG4gICAqICAgICA8L2NvdW50LWNoaWxkcmVuPlxyXG4gICAqXHJcbiAgICogSWYgeW91ciBjb21wb25lbnQgb25seSBsb29rcyBhdCBgdGhpcy5jaGlsZHJlbmAsIGl0IHdpbGwgYWx3YXlzIHNlZSBleGFjdGx5XHJcbiAgICogb25lIGNoaWxkIOKAlMKgdGhlIGA8c2xvdD5gIGVsZW1lbnQuIEJ1dCB0aGUgdXNlciBsb29raW5nIGF0IHRoZSBwYWdlIHdpbGxcclxuICAgKiAqc2VlKiBhbnkgbm9kZXMgZGlzdHJpYnV0ZWQgdG8gdGhhdCBzbG90LiBUbyBtYXRjaCB3aGF0IHRoZSB1c2VyIHNlZXMsIHlvdXJcclxuICAgKiBjb21wb25lbnQgc2hvdWxkIGV4cGFuZCBhbnkgYDxzbG90PmAgZWxlbWVudHMgaXQgY29udGFpbnMuXHJcbiAgICpcclxuICAgKiBUaGF0IGlzIHRoZSBwcm9ibGVtIHRoaXMgbWl4aW4gc29sdmVzLiBBZnRlciBhcHBseWluZyB0aGlzIG1peGluLCB5b3VyXHJcbiAgICogY29tcG9uZW50IGNvZGUgaGFzIGFjY2VzcyB0byBgdGhpcy5kaXN0cmlidXRlZENoaWxkcmVuYCwgd2hvc2UgYGxlbmd0aGBcclxuICAgKiB3aWxsIHJldHVybiB0aGUgdG90YWwgbnVtYmVyIG9mIGFsbCBjaGlsZHJlbiBkaXN0cmlidXRlZCB0byB5b3VyIGNvbXBvbmVudFxyXG4gICAqIGluIHRoZSBjb21wb3NlZCB0cmVlLlxyXG4gICAqXHJcbiAgICogTm90ZTogVGhlIGxhdGVzdCBDdXN0b20gRWxlbWVudHMgQVBJIGRlc2lnbiBjYWxscyBmb3IgYSBuZXcgZnVuY3Rpb24sXHJcbiAgICogYGdldEFzc2lnbmVkTm9kZXNgIHRoYXQgdGFrZXMgYW4gb3B0aW9uYWwgYGRlZXBgIHBhcmFtZXRlciwgdGhhdCB3aWxsIHNvbHZlXHJcbiAgICogdGhpcyBwcm9ibGVtIGF0IHRoZSBBUEkgbGV2ZWwuXHJcbiAgICovXHJcbiAgY2xhc3MgRGlzdHJpYnV0ZWRDaGlsZHJlbiBleHRlbmRzIGJhc2Uge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQW4gaW4tb3JkZXIgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiwgZXhwYW5kaW5nIGFueSBzbG90IGVsZW1lbnRzLiBMaWtlIHRoZVxyXG4gICAgICogc3RhbmRhcmQgY2hpbGRyZW4gcHJvcGVydHksIHRoaXMgc2tpcHMgdGV4dCBub2Rlcy5cclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnRbXX1cclxuICAgICAqL1xyXG4gICAgZ2V0IGRpc3RyaWJ1dGVkQ2hpbGRyZW4oKSB7XHJcbiAgICAgIHJldHVybiBleHBhbmRDb250ZW50RWxlbWVudHModGhpcy5jaGlsZHJlbiwgZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQW4gaW4tb3JkZXIgY29sbGVjdGlvbiBvZiBjaGlsZCBub2RlcywgZXhwYW5kaW5nIGFueSBzbG90IGVsZW1lbnRzLiBMaWtlXHJcbiAgICAgKiB0aGUgc3RhbmRhcmQgY2hpbGROb2RlcyBwcm9wZXJ0eSwgdGhpcyBpbmNsdWRlcyB0ZXh0IG5vZGVzLlxyXG4gICAgICpcclxuICAgICAqIEB0eXBlIHtOb2RlW119XHJcbiAgICAgKi9cclxuICAgIGdldCBkaXN0cmlidXRlZENoaWxkTm9kZXMoKSB7XHJcbiAgICAgIHJldHVybiBleHBhbmRDb250ZW50RWxlbWVudHModGhpcy5jaGlsZE5vZGVzLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBjb25jYXRlbmF0ZWQgdGV4dCBjb250ZW50IG9mIGFsbCBjaGlsZCBub2RlcywgZXhwYW5kaW5nIGFueSBzbG90XHJcbiAgICAgKiBlbGVtZW50cy5cclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAgICovXHJcbiAgICBnZXQgZGlzdHJpYnV0ZWRUZXh0Q29udGVudCgpIHtcclxuICAgICAgbGV0IHN0cmluZ3MgPSB0aGlzLmRpc3RyaWJ1dGVkQ2hpbGROb2Rlcy5tYXAoZnVuY3Rpb24oY2hpbGQpIHtcclxuICAgICAgICByZXR1cm4gY2hpbGQudGV4dENvbnRlbnQ7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gc3RyaW5ncy5qb2luKCcnKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICByZXR1cm4gRGlzdHJpYnV0ZWRDaGlsZHJlbjtcclxufTtcclxuXHJcblxyXG4vKlxyXG4gKiBHaXZlbiBhIGFycmF5IG9mIG5vZGVzLCByZXR1cm4gYSBuZXcgYXJyYXkgd2l0aCBhbnkgY29udGVudCBlbGVtZW50cyBleHBhbmRlZFxyXG4gKiB0byB0aGUgbm9kZXMgZGlzdHJpYnV0ZWQgdG8gdGhhdCBjb250ZW50IGVsZW1lbnQuIFRoaXMgcnVsZSBpcyBhcHBsaWVkXHJcbiAqIHJlY3Vyc2l2ZWx5LlxyXG4gKlxyXG4gKiBJZiBpbmNsdWRlVGV4dE5vZGVzIGlzIHRydWUsIHRleHQgbm9kZXMgd2lsbCBiZSBpbmNsdWRlZCwgYXMgaW4gdGhlXHJcbiAqIHN0YW5kYXJkIGNoaWxkTm9kZXMgcHJvcGVydHk7IGJ5IGRlZmF1bHQsIHRoaXMgc2tpcHMgdGV4dCBub2RlcywgbGlrZSB0aGVcclxuICogc3RhbmRhcmQgY2hpbGRyZW4gcHJvcGVydHkuXHJcbiAqL1xyXG5mdW5jdGlvbiBleHBhbmRDb250ZW50RWxlbWVudHMobm9kZXMsIGluY2x1ZGVUZXh0Tm9kZXMpIHtcclxuICBsZXQgZXhwYW5kZWQgPSBBcnJheS5wcm90b3R5cGUubWFwLmNhbGwobm9kZXMsIG5vZGUgPT4ge1xyXG4gICAgLy8gV2Ugd2FudCB0byBzZWUgaWYgdGhlIG5vZGUgaXMgYW4gaW5zdGFuY2VvZiBIVE1MU2xvdEVMZW1lbnQsIGJ1dFxyXG4gICAgLy8gdGhhdCBjbGFzcyB3b24ndCBleGlzdCBpZiB0aGUgYnJvd3NlciB0aGF0IGRvZXNuJ3Qgc3VwcG9ydCBuYXRpdmVcclxuICAgIC8vIFNoYWRvdyBET00gYW5kIGlmIHRoZSBTaGFkb3cgRE9NIHBvbHlmaWxsIGhhc24ndCBiZWVuIGxvYWRlZC4gSW5zdGVhZCxcclxuICAgIC8vIHdlIGRvIGEgc2ltcGxpc3RpYyBjaGVjayB0byBzZWUgaWYgdGhlIHRhZyBuYW1lIGlzIFwic2xvdFwiIG9yIFwiY29udGVudFwiLlxyXG4gICAgaWYgKG5vZGUubG9jYWxOYW1lICYmIChub2RlLmxvY2FsTmFtZSA9PT0gXCJzbG90XCIgfHwgbm9kZS5sb2NhbE5hbWUgPT09IFwiY29udGVudFwiKSkge1xyXG4gICAgICAvLyBjb250ZW50IGVsZW1lbnQ7IHVzZSBpdHMgZGlzdHJpYnV0ZWQgbm9kZXMgaW5zdGVhZC5cclxuICAgICAgbGV0IGRpc3RyaWJ1dGVkTm9kZXMgPSBub2RlLmdldERpc3RyaWJ1dGVkTm9kZXMoKTtcclxuICAgICAgcmV0dXJuIGRpc3RyaWJ1dGVkTm9kZXMgP1xyXG4gICAgICAgIGV4cGFuZENvbnRlbnRFbGVtZW50cyhkaXN0cmlidXRlZE5vZGVzLCBpbmNsdWRlVGV4dE5vZGVzKSA6XHJcbiAgICAgICAgW107XHJcbiAgICB9IGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAvLyBQbGFpbiBlbGVtZW50OyB1c2UgYXMgaXMuXHJcbiAgICAgIHJldHVybiBbbm9kZV07XHJcbiAgICB9IGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBUZXh0ICYmIGluY2x1ZGVUZXh0Tm9kZXMpIHtcclxuICAgICAgLy8gVGV4dCBub2RlLlxyXG4gICAgICByZXR1cm4gW25vZGVdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gQ29tbWVudCwgcHJvY2Vzc2luZyBpbnN0cnVjdGlvbiwgZXRjLjsgc2tpcC5cclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGxldCBmbGF0dGVuZWQgPSBbXS5jb25jYXQoLi4uZXhwYW5kZWQpO1xyXG4gIHJldHVybiBmbGF0dGVuZWQ7XHJcbn1cclxuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBPcGVuQ2xvc2UuICovXHJcbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XHJcblxyXG4gIC8qKlxyXG4gICAqIE1peGluIHdoaWNoIGFkZHMgY2xvc2Uvb3BlbiBzZW1hbnRpY3MuXHJcbiAgICpcclxuICAgKiBUaGlzIG1peGluIGRvZXMgbm90IHByb2R1Y2UgYW55IHVzZXItdmlzaWJsZSBlZmZlY3RzLiBJbnN0ZWFkIGl0IGFwcGxpZXNcclxuICAgKiBhIGBiYXNpYy1jbG9zZWRgIENTUyBjbGFzcyB0byB0aGUgY29tcG9uZW50IGhvc3QgaWYgdGhlIGhvc3QgaXNcclxuICAgKiBjbG9zZWQsIGFuZCBhIGBiYXNpYy1vcGVuZWRgIGNsYXNzIGlmIG9wZW5lZC4gSXQgYWxzbyBpbnZva2VzIGEgYHJlbmRlcmBcclxuICAgKiBmdW5jdGlvbiB0aGF0IGNhbiBiZSBvdmVycmlkZGVuIHRvIGFwcGx5IGN1c3RvbSBlZmZlY3RzLlxyXG4gICAqL1xyXG4gIGNsYXNzIE9wZW5DbG9zZSBleHRlbmRzIGJhc2Uge1xyXG5cclxuICAgIGF0dGFjaGVkQ2FsbGJhY2soKSB7XHJcbiAgICAgIGlmIChzdXBlci5hdHRhY2hlZENhbGxiYWNrKSB7IHN1cGVyLmF0dGFjaGVkQ2FsbGJhY2soKTsgfVxyXG4gICAgICB0aGlzLnJlbmRlcih0aGlzLmNsb3NlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlZENhbGxiYWNrKCkge1xyXG4gICAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XHJcbiAgICAgIHRoaXMuX2Nsb3NlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2xvc2UgdGhlIGNvbXBvbmVudC5cclxuICAgICAqXHJcbiAgICAgKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gc2V0dGluZyB0aGUgYGNsb3NlZGAgcHJvcGVydHkgdG8gdHJ1ZS5cclxuICAgICAqL1xyXG4gICAgY2xvc2UoKSB7XHJcbiAgICAgIHRoaXMuY2xvc2VkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRydWUgaWYgdGhlIGNvbXBvbmVudCBpcyBjdXJlbnRseSBjbG9zZWQuXHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxyXG4gICAgICovXHJcbiAgICBnZXQgY2xvc2VkKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fY2xvc2VkO1xyXG4gICAgfVxyXG4gICAgc2V0IGNsb3NlZCh2YWx1ZSkge1xyXG4gICAgICBpZiAoJ2Nsb3NlZCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuY2xvc2VkID0gdmFsdWU7IH1cclxuICAgICAgaWYgKHRoaXMuX2Nsb3NlZCAhPT0gdmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9jbG9zZWQgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnJlbmRlcih2YWx1ZSk7XHJcblxyXG4gICAgICAgIGxldCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnY2xvc2VkLWNoYW5nZWQnKTtcclxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPcGVuIHRoZSBjb21wb25lbnQuXHJcbiAgICAgKlxyXG4gICAgICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIHNldHRpbmcgdGhlIGBjbG9zZWRgIHByb3BlcnR5IHRvIGZhbHNlLlxyXG4gICAgICovXHJcbiAgICBvcGVuKCkge1xyXG4gICAgICB0aGlzLmNsb3NlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUGVyZm9ybSBjdXN0b20gcmVuZGVyaW5nIG9mIHRoZSBjbG9zZS9vcGVuIHRyYW5zaXRpb24uXHJcbiAgICAgKlxyXG4gICAgICogWW91IGNhbiBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwZXJmb3JtIGN1c3RvbSBlZmZlY3RzLiBJZiB5b3UgZG8gc28sXHJcbiAgICAgKiBiZSBzdXJlIHRvIGludm9rZSBgc3VwZXIoKWAgaW4geW91ciBpbXBsZW1lbnRhdGlvbiB0byBnZXQgdGhlIGJhc2VsaW5lXHJcbiAgICAgKiBiZWhhdmlvci5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGNsb3NpbmcgLSBUcnVlIGlmIHRoZSBjb21wb25lbnQgaXMgYmVpbmcgY2xvc2VkLFxyXG4gICAgICogICAgICAgIGZhbHNlIGlmIGl0J3MgYmVpbmcgb3BlbmVkLlxyXG4gICAgICovXHJcbiAgICByZW5kZXIoY2xvc2luZykge1xyXG4gICAgICAvLyBXb3VsZCBsaWtlIHRvIHVzZSBjbGFzc0xpc3QudG9nZ2xlKCkgaGVyZSwgYnV0IElFIDExIGRvZXNuJ3QgaGF2ZSBpdC5cclxuICAgICAgaWYgKGNsb3NpbmcpIHtcclxuICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2Jhc2ljLWNsb3NlZCcpO1xyXG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnYmFzaWMtb3BlbmVkJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdiYXNpYy1jbG9zZWQnKTtcclxuICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2Jhc2ljLW9wZW5lZCcpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgIWNsb3NpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVG9nZ2xlIHRoZSBjb21wb25lbnQncyBvcGVuL2Nsb3NlZCBzdGF0ZS5cclxuICAgICAqL1xyXG4gICAgdG9nZ2xlKCkge1xyXG4gICAgICB0aGlzLmNsb3NlZCA9ICF0aGlzLmNsb3NlZDtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICByZXR1cm4gT3BlbkNsb3NlO1xyXG59O1xyXG4iLCIvKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFNoYWRvd0VsZW1lbnRSZWZlcmVuY2VzLiAqL1xyXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xyXG5cclxuICAvKipcclxuICAgKiBNaXhpbiB0byBjcmVhdGUgcmVmZXJlbmNlcyB0byBlbGVtZW50cyBpbiBhIGNvbXBvbmVudCdzIFNoYWRvdyBET00gc3VidHJlZS5cclxuICAgKlxyXG4gICAqIFRoaXMgYWRkcyBhIG1lbWJlciBvbiB0aGUgY29tcG9uZW50IGNhbGxlZCBgdGhpcy4kYCB0aGF0IGNhbiBiZSB1c2VkIHRvXHJcbiAgICogcmVmZXJlbmNlIHNoYWRvdyBlbGVtZW50cyB3aXRoIElEcy4gRS5nLiwgaWYgY29tcG9uZW50J3Mgc2hhZG93IGNvbnRhaW5zIGFuXHJcbiAgICogZWxlbWVudCBgPGJ1dHRvbiBpZD1cImZvb1wiPmAsIHRoZW4gdGhpcyBtaXhpbiB3aWxsIGNyZWF0ZSBhIG1lbWJlclxyXG4gICAqIGB0aGlzLiQuZm9vYCB0aGF0IHBvaW50cyB0byB0aGF0IGJ1dHRvbi5cclxuICAgKlxyXG4gICAqIFN1Y2ggcmVmZXJlbmNlcyBzaW1wbGlmeSBhIGNvbXBvbmVudCdzIGFjY2VzcyB0byBpdHMgb3duIGVsZW1lbnRzLiBJblxyXG4gICAqIGV4Y2hhbmdlLCB0aGlzIG1peGluIHRyYWRlcyBvZmYgYSBvbmUtdGltZSBjb3N0IG9mIHF1ZXJ5aW5nIGFsbCBlbGVtZW50cyBpblxyXG4gICAqIHRoZSBzaGFkb3cgdHJlZSBpbnN0ZWFkIG9mIHBheWluZyBhbiBvbmdvaW5nIGNvc3QgdG8gcXVlcnkgZm9yIGFuIGVsZW1lbnRcclxuICAgKiBlYWNoIHRpbWUgdGhlIGNvbXBvbmVudCB3YW50cyB0byBpbnNwZWN0IG9yIG1hbmlwdWxhdGUgaXQuXHJcbiAgICpcclxuICAgKiBUaGlzIG1peGluIGV4cGVjdHMgdGhlIGNvbXBvbmVudCB0byBkZWZpbmUgYSBTaGFkb3cgRE9NIHN1YnRyZWUuIFlvdSBjYW5cclxuICAgKiBjcmVhdGUgdGhhdCB0cmVlIHlvdXJzZWxmLCBvciBtYWtlIHVzZSBvZiB0aGUgU2hhZG93VGVtcGxhdGUgbWl4aW4uXHJcbiAgICpcclxuICAgKiBUaGlzIG1peGluIGlzIGluc3BpcmVkIGJ5IFBvbHltZXIncyBbYXV0b21hdGljXHJcbiAgICogbm9kZSBmaW5kaW5nXShodHRwczovL3d3dy5wb2x5bWVyLXByb2plY3Qub3JnLzEuMC9kb2NzL2Rldmd1aWRlL2xvY2FsLWRvbS5odG1sI25vZGUtZmluZGluZylcclxuICAgKiBmZWF0dXJlLlxyXG4gICAqL1xyXG4gIGNsYXNzIFNoYWRvd0VsZW1lbnRSZWZlcmVuY2VzIGV4dGVuZHMgYmFzZSB7XHJcblxyXG4gICAgY3JlYXRlZENhbGxiYWNrKCkge1xyXG4gICAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XHJcbiAgICAgIGlmICh0aGlzLnNoYWRvd1Jvb3QpIHtcclxuICAgICAgICAvLyBMb29rIGZvciBlbGVtZW50cyBpbiB0aGUgc2hhZG93IHN1YnRyZWUgdGhhdCBoYXZlIGlkIGF0dHJpYnV0ZXMuXHJcbiAgICAgICAgLy8gQW4gYWx0ZXJuYXRpdmVseSBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1peGluIHdvdWxkIGJlIHRvIGp1c3QgZGVmaW5lXHJcbiAgICAgICAgLy8gYSB0aGlzLiQgZ2V0dGVyIHRoYXQgbGF6aWx5IGRvZXMgdGhpcyBzZWFyY2ggdGhlIGZpcnN0IHRpbWUgc29tZW9uZVxyXG4gICAgICAgIC8vIHRyaWVzIHRvIGFjY2VzcyB0aGlzLiQuIFRoYXQgbWlnaHQgaW50cm9kdWNlIHNvbWUgY29tcGxleGl0eSDigJMgaWYgdGhlXHJcbiAgICAgICAgLy8gdGhlIHRyZWUgY2hhbmdlZCBhZnRlciBpdCB3YXMgZmlyc3QgcG9wdWxhdGVkLCB0aGUgcmVzdWx0IG9mXHJcbiAgICAgICAgLy8gc2VhcmNoaW5nIGZvciBhIG5vZGUgbWlnaHQgYmUgc29tZXdoYXQgdW5wcmVkaWN0YWJsZS5cclxuICAgICAgICB0aGlzLiQgPSB7fTtcclxuICAgICAgICBsZXQgbm9kZXNXaXRoSWRzID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpZF0nKTtcclxuICAgICAgICBbXS5mb3JFYWNoLmNhbGwobm9kZXNXaXRoSWRzLCBub2RlID0+IHtcclxuICAgICAgICAgIGxldCBpZCA9IG5vZGUuZ2V0QXR0cmlidXRlKCdpZCcpO1xyXG4gICAgICAgICAgdGhpcy4kW2lkXSA9IG5vZGU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICByZXR1cm4gU2hhZG93RWxlbWVudFJlZmVyZW5jZXM7XHJcbn07XHJcbiIsIi8vIEZlYXR1cmUgZGV0ZWN0aW9uIGZvciBvbGQgU2hhZG93IERPTSB2MC5cclxuY29uc3QgVVNJTkdfU0hBRE9XX0RPTV9WMCA9ICh0eXBlb2YgSFRNTEVsZW1lbnQucHJvdG90eXBlLmNyZWF0ZVNoYWRvd1Jvb3QgIT09ICd1bmRlZmluZWQnKTtcclxuXHJcblxyXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFNoYWRvd1RlbXBsYXRlLiAqL1xyXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xyXG5cclxuICAvKipcclxuICAgKiBNaXhpbiBmb3Igc3RhbXBpbmcgYSB0ZW1wbGF0ZSBpbnRvIGEgU2hhZG93IERPTSBzdWJ0cmVlIHVwb24gY29tcG9uZW50XHJcbiAgICogaW5zdGFudGlhdGlvbi5cclxuICAgKlxyXG4gICAqIFRvIHVzZSB0aGlzIG1peGluLCBkZWZpbmUgYSBgdGVtcGxhdGVgIHByb3BlcnR5IGFzIGEgc3RyaW5nIG9yIEhUTUxcclxuICAgKiBgPHRlbXBsYXRlPmAgZWxlbWVudDpcclxuICAgKlxyXG4gICAqICAgICBjbGFzcyBNeUVsZW1lbnQgZXh0ZW5kcyBTaGFkb3dUZW1wbGF0ZShIVE1MRWxlbWVudCkge1xyXG4gICAqICAgICAgIGdldCB0ZW1wbGF0ZSgpIHtcclxuICAgKiAgICAgICAgIHJldHVybiBgSGVsbG8sIDxlbT53b3JsZDwvZW0+LmA7XHJcbiAgICogICAgICAgfVxyXG4gICAqICAgICB9XHJcbiAgICpcclxuICAgKiBXaGVuIHlvdXIgY29tcG9uZW50IGNsYXNzIGlzIGluc3RhbnRpYXRlZCwgYSBzaGFkb3cgcm9vdCB3aWxsIGJlIGNyZWF0ZWQgb25cclxuICAgKiB0aGUgaW5zdGFuY2UsIGFuZCB0aGUgY29udGVudHMgb2YgdGhlIHRlbXBsYXRlIHdpbGwgYmUgY2xvbmVkIGludG8gdGhlXHJcbiAgICogc2hhZG93IHJvb3QuIElmIHlvdXIgY29tcG9uZW50IGRvZXMgbm90IGRlZmluZSBhIGB0ZW1wbGF0ZWAgcHJvcGVydHksIHRoaXNcclxuICAgKiBtaXhpbiBoYXMgbm8gZWZmZWN0LlxyXG4gICAqXHJcbiAgICogRm9yIHRoZSB0aW1lIGJlaW5nLCB0aGlzIGV4dGVuc2lvbiByZXRhaW5zIHN1cHBvcnQgZm9yIFNoYWRvdyBET00gdjAuIFRoYXRcclxuICAgKiB3aWxsIGV2ZW50dWFsbHkgYmUgZGVwcmVjYXRlZCBhcyBicm93c2VycyAoYW5kIHRoZSBTaGFkb3cgRE9NIHBvbHlmaWxsKVxyXG4gICAqIGltcGxlbWVudCBTaGFkb3cgRE9NIHYxLlxyXG4gICAqL1xyXG4gIGNsYXNzIFNoYWRvd1RlbXBsYXRlIGV4dGVuZHMgYmFzZSB7XHJcblxyXG4gICAgLypcclxuICAgICAqIElmIHRoZSBjb21wb25lbnQgZGVmaW5lcyBhIHRlbXBsYXRlLCBhIHNoYWRvdyByb290IHdpbGwgYmUgY3JlYXRlZCBvbiB0aGVcclxuICAgICAqIGNvbXBvbmVudCBpbnN0YW5jZSwgYW5kIHRoZSB0ZW1wbGF0ZSBzdGFtcGVkIGludG8gaXQuXHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZWRDYWxsYmFjaygpIHtcclxuICAgICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxyXG4gICAgICBsZXQgdGVtcGxhdGUgPSB0aGlzLnRlbXBsYXRlO1xyXG4gICAgICAvLyBUT0RPOiBTYXZlIHRoZSBwcm9jZXNzZWQgdGVtcGxhdGUgd2l0aCB0aGUgY29tcG9uZW50J3MgY2xhc3MgcHJvdG90eXBlXHJcbiAgICAgIC8vIHNvIGl0IGRvZXNuJ3QgbmVlZCB0byBiZSBwcm9jZXNzZWQgd2l0aCBldmVyeSBpbnN0YW50aWF0aW9uLlxyXG4gICAgICBpZiAodGVtcGxhdGUpIHtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiB0ZW1wbGF0ZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgIC8vIFVwZ3JhZGUgcGxhaW4gc3RyaW5nIHRvIHJlYWwgdGVtcGxhdGUuXHJcbiAgICAgICAgICB0ZW1wbGF0ZSA9IGNyZWF0ZVRlbXBsYXRlV2l0aElubmVySFRNTCh0ZW1wbGF0ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoVVNJTkdfU0hBRE9XX0RPTV9WMCkge1xyXG4gICAgICAgICAgcG9seWZpbGxTbG90V2l0aENvbnRlbnQodGVtcGxhdGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHdpbmRvdy5TaGFkb3dET01Qb2x5ZmlsbCkge1xyXG4gICAgICAgICAgc2hpbVRlbXBsYXRlU3R5bGVzKHRlbXBsYXRlLCB0aGlzLmxvY2FsTmFtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB0aGlzLmxvZyhcImNsb25pbmcgdGVtcGxhdGUgaW50byBzaGFkb3cgcm9vdFwiKTtcclxuICAgICAgICBsZXQgcm9vdCA9IFVTSU5HX1NIQURPV19ET01fVjAgP1xyXG4gICAgICAgICAgdGhpcy5jcmVhdGVTaGFkb3dSb290KCkgOiAgICAgICAgICAgICAvLyBTaGFkb3cgRE9NIHYwXHJcbiAgICAgICAgICB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTsgIC8vIFNoYWRvdyBET00gdjFcclxuICAgICAgICBsZXQgY2xvbmUgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRlbXBsYXRlLmNvbnRlbnQsIHRydWUpO1xyXG4gICAgICAgIHJvb3QuYXBwZW5kQ2hpbGQoY2xvbmUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIFNoYWRvd1RlbXBsYXRlO1xyXG59O1xyXG5cclxuXHJcbi8vIENvbnZlcnQgYSBwbGFpbiBzdHJpbmcgb2YgSFRNTCBpbnRvIGEgcmVhbCB0ZW1wbGF0ZSBlbGVtZW50LlxyXG5mdW5jdGlvbiBjcmVhdGVUZW1wbGF0ZVdpdGhJbm5lckhUTUwoaW5uZXJIVE1MKSB7XHJcbiAgbGV0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcclxuICAvLyBSRVZJRVc6IElzIHRoZXJlIGFuIGVhc2llciB3YXkgdG8gZG8gdGhpcz9cclxuICAvLyBXZSdkIGxpa2UgdG8ganVzdCBzZXQgaW5uZXJIVE1MIG9uIHRoZSB0ZW1wbGF0ZSBjb250ZW50LCBidXQgc2luY2UgaXQnc1xyXG4gIC8vIGEgRG9jdW1lbnRGcmFnbWVudCwgdGhhdCBkb2Vzbid0IHdvcmsuXHJcbiAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGRpdi5pbm5lckhUTUwgPSBpbm5lckhUTUw7XHJcbiAgd2hpbGUgKGRpdi5jaGlsZE5vZGVzLmxlbmd0aCA+IDApIHtcclxuICAgIHRlbXBsYXRlLmNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2LmNoaWxkTm9kZXNbMF0pO1xyXG4gIH1cclxuICByZXR1cm4gdGVtcGxhdGU7XHJcbn1cclxuXHJcbi8vIFJlcGxhY2Ugb2NjdXJlbmNlcyBvZiB2MSBzbG90IGVsZW1lbnRzIHdpdGggdjAgY29udGVudCBlbGVtZW50cy5cclxuLy8gVGhpcyBkb2VzIG5vdCB5ZXQgbWFwIG5hbWVkIHNsb3RzIHRvIGNvbnRlbnQgc2VsZWN0IGNsYXVzZXMuXHJcbmZ1bmN0aW9uIHBvbHlmaWxsU2xvdFdpdGhDb250ZW50KHRlbXBsYXRlKSB7XHJcbiAgW10uZm9yRWFjaC5jYWxsKHRlbXBsYXRlLmNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnc2xvdCcpLCBzbG90RWxlbWVudCA9PiB7XHJcbiAgICBsZXQgY29udGVudEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjb250ZW50Jyk7XHJcbiAgICBzbG90RWxlbWVudC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChjb250ZW50RWxlbWVudCwgc2xvdEVsZW1lbnQpO1xyXG4gIH0pO1xyXG59XHJcblxyXG4vLyBJbnZva2UgYmFzaWMgc3R5bGUgc2hpbW1pbmcgd2l0aCBTaGFkb3dDU1MuXHJcbmZ1bmN0aW9uIHNoaW1UZW1wbGF0ZVN0eWxlcyh0ZW1wbGF0ZSwgdGFnKSB7XHJcbiAgd2luZG93LldlYkNvbXBvbmVudHMuU2hhZG93Q1NTLnNoaW1TdHlsaW5nKHRlbXBsYXRlLmNvbnRlbnQsIHRhZyk7XHJcbn1cclxuIiwiaW1wb3J0IENvbXBvc2FibGUgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ29tcG9zYWJsZSc7XHJcbmltcG9ydCBTaGFkb3dUZW1wbGF0ZSBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TaGFkb3dUZW1wbGF0ZSc7XHJcbmltcG9ydCBTaGFkb3dFbGVtZW50UmVmZXJlbmNlcyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TaGFkb3dFbGVtZW50UmVmZXJlbmNlcyc7XHJcbmltcG9ydCBBdHRyaWJ1dGVNYXJzaGFsbGluZyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9BdHRyaWJ1dGVNYXJzaGFsbGluZyc7XHJcbmltcG9ydCBEaXN0cmlidXRlZENoaWxkcmVuIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW4nO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBBIHNhbXBsZSBnZW5lcmFsLXB1cnBvc2UgYmFzZSBjbGFzcyBmb3IgZGVmaW5pbmcgY3VzdG9tIGVsZW1lbnRzIHRoYXQgbWl4ZXNcclxuICogaW4gc29tZSBjb21tb24gZmVhdHVyZXM6IHRlbXBsYXRlIHN0YW1waW5nIGludG8gYSBzaGFkb3cgcm9vdCwgc2hhZG93IGVsZW1lbnRcclxuICogcmVmZXJlbmNlcywgbWFyc2hhbGxpbmcgYXR0cmlidXRlcyB0byBwcm9wZXJ0aWVzLCBhbmQgcmV0cmlldmluZyB0aGUgY2hpbGRyZW5cclxuICogZGlzdHJpYnV0ZWQgdG8gYSBjb21wb25lbnQuXHJcbiAqXHJcbiAqIFRoaXMgYmFzZSBjbGFzcyBpcyBub3Qgc3BlY2lhbCBpbiBhbnkgd2F5LCBhbmQgaXMgZGVmaW5lZCBvbmx5IGFzIGFcclxuICogY29udmVuaWVudCBzaG9ydGhhbmQgZm9yIGFwcGx5aW5nIHRoZSBtaXhpbnMgbGlzdGVkIGFib3ZlLiBZb3UgY2FuIHVzZSB0aGlzXHJcbiAqIGNsYXNzIGFzIGEgYmFzZSBjbGFzcyBmb3IgeW91ciBvd24gZWxlbWVudHMsIG9yIGVhc2lseSBjcmVhdGUgeW91ciBvd24gYmFzZVxyXG4gKiBjbGFzcyBieSBhcHBseWluZyB0aGUgc2FtZSBzZXQgb2YgbWl4aW5zLlxyXG4gKlxyXG4gKiBUaGUgRWxlbWVudEJhc2UgYmFzZSBjbGFzcyBkb2VzIG5vdCByZWdpc3RlciBpdHNlbGYgYXMgYSBjdXN0b20gZWxlbWVudCB3aXRoXHJcbiAqIHRoZSBicm93c2VyLCBhbmQgaGVuY2UgY2Fubm90IGJlIGluZGVwZW5kZW50bHkgaW5zdGFudGlhdGVkLlxyXG4gKi9cclxuY2xhc3MgRWxlbWVudEJhc2UgZXh0ZW5kcyBDb21wb3NhYmxlKEhUTUxFbGVtZW50KS5jb21wb3NlKFxyXG4gIFNoYWRvd1RlbXBsYXRlLCAgICAgICAgICAvLyBiZWZvcmUgbm9kZSBmaW5kaW5nLCBzbyBzaGFkb3cgcm9vdCBpcyBwb3B1bGF0ZWRcclxuICBTaGFkb3dFbGVtZW50UmVmZXJlbmNlcywgLy8gYmVmb3JlIG1hcnNoYWxsaW5nLCBzbyBwcm9wZXJ0aWVzIGNhbiB1c2UgcmVmc1xyXG4gIEF0dHJpYnV0ZU1hcnNoYWxsaW5nLFxyXG4gIERpc3RyaWJ1dGVkQ2hpbGRyZW5cclxuKSB7XHJcblxyXG4gIC8qXHJcbiAgICogRGVidWdnaW5nIHV0aWxpdHk6IGxvZ3MgYSBtZXNzYWdlLCBwcmVmaXhlZCBieSB0aGUgY29tcG9uZW50J3MgdGFnLlxyXG4gICAqL1xyXG4gIGxvZyh0ZXh0KSB7XHJcbiAgICBpZiAoc3VwZXIubG9nKSB7IHN1cGVyLmxvZyh0ZXh0KTsgfVxyXG4gICAgY29uc29sZS5sb2coYCR7dGhpcy5sb2NhbE5hbWV9OiAke3RleHR9YCk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWxlbWVudEJhc2U7XHJcbiJdfQ==
