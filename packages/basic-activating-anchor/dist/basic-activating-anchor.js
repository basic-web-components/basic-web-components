(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _WrappedStandardElement = require('../../basic-wrapped-standard-element/src/WrappedStandardElement');

var _WrappedStandardElement2 = _interopRequireDefault(_WrappedStandardElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * An anchor (link) that highlights itself when its destination matches the
 * current location.
 *
 * [Live demo](http://basicwebcomponents.org/basic-web-components/packages/basic-activating-anchor/)
 *
 * Such a link commonly appears in toolbars, side bars, and other navigation
 * elements. In these situations, you generally want the user to understand what
 * page or area the user is already on.
 *
 * Note: one limitation of this component is that, by default, the link does
 * *not* show the standard link color (usually blue). However, in navigation
 * elements like toolbars, you often will want to explicitly specific link
 * colors anyway, e.g., to reflect your application's visual style and brand.
 */

var ActivatingAnchor = function (_WrappedStandardEleme) {
  _inherits(ActivatingAnchor, _WrappedStandardEleme);

  function ActivatingAnchor() {
    _classCallCheck(this, ActivatingAnchor);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ActivatingAnchor).apply(this, arguments));
  }

  _createClass(ActivatingAnchor, [{
    key: 'attachedCallback',
    value: function attachedCallback() {
      if (_get(Object.getPrototypeOf(ActivatingAnchor.prototype), 'attachedCallback', this)) {
        _get(Object.getPrototypeOf(ActivatingAnchor.prototype), 'attachedCallback', this).call(this);
      }
      refresh(this);
    }
  }, {
    key: 'createdCallback',
    value: function createdCallback() {
      var _this2 = this;

      if (_get(Object.getPrototypeOf(ActivatingAnchor.prototype), 'createdCallback', this)) {
        _get(Object.getPrototypeOf(ActivatingAnchor.prototype), 'createdCallback', this).call(this);
      }
      window.addEventListener('popstate', function (event) {
        refresh(_this2);
      });
      if (typeof this._areaLink === 'undefined') {
        this._areaLink = false;
      }
    }

    // Augment href implementation so that changing href checks the active status.

  }, {
    key: 'active',

    /**
     * True if the link's destination matches the current page location.
     *
     * If this is true, the element will have an `active` CSS class applied to it.
     *
     * @type {boolean}
     */
    get: function get() {
      return this.classList.contains('active');
    },
    set: function set(value) {
      // Would like to use classList.toggle() here, but IE 11 doesn't have it.
      if (value) {
        this.classList.add('active');
      } else {
        this.classList.remove('active');
      }
    }

    /**
     * True if the link points to an area within a site, not just a single page.
     *
     * If true, the matching rule to determine whether the link is active changes:
     * an area link is considered to be active if the link's destination forms a
     * prefix of the current location (instead of matching the complete URL).
     *
     * @type {boolean}
     */

  }, {
    key: 'areaLink',
    get: function get() {
      return this._areaLink;
    },
    set: function set(value) {
      // Cast boolean or string values to boolean.
      this._areaLink = String(value) === 'true';
      refresh(this);
    }
  }, {
    key: 'href',
    get: function get() {
      return _get(Object.getPrototypeOf(ActivatingAnchor.prototype), 'href', this);
    },
    set: function set(value) {
      _set(Object.getPrototypeOf(ActivatingAnchor.prototype), 'href', value, this);
      refresh(this);
    }
  }, {
    key: 'template',
    get: function get() {
      // Specify color:inherit so that color can be specified from the outside
      // without having to define a CSS variable.
      return '\n      <style>\n      #inner {\n        color: inherit;\n      }\n      </style>\n      <a id="inner"><slot></slot></a>';
    }
  }]);

  return ActivatingAnchor;
}(_WrappedStandardElement2.default.wrap('a'));

// Update the active status of the element based on the current location.

function refresh(element) {
  var current = window.location.href;
  var match = undefined;
  if (element.areaLink && element.href.length < current.length) {
    // Match prefix
    var prefix = element.href;
    // If prefix doesn't end in slash, add a slash.
    // We want to avoid matching in the middle of a folder name.
    if (prefix.substr(-1) !== '/') {
      prefix += '/';
    }
    match = current.substr(0, prefix.length) === prefix;
  } else {
    // Match whole path
    match = current === element.href;
  }
  element.active = match;
}

document.registerElement('basic-activating-anchor', ActivatingAnchor);

},{"../../basic-wrapped-standard-element/src/WrappedStandardElement":8}],2:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
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

},{"../../basic-component-mixins/src/AttributeMarshalling":2,"../../basic-component-mixins/src/Composable":3,"../../basic-component-mixins/src/DistributedChildren":4,"../../basic-component-mixins/src/ShadowElementReferences":5,"../../basic-component-mixins/src/ShadowTemplate":6}],8:[function(require,module,exports){
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

// Feature detection for old Shadow DOM v0.
var USING_SHADOW_DOM_V0 = typeof HTMLElement.prototype.createShadowRoot !== 'undefined';

/**
 * Wraps a standard HTML element so that the standard behavior can then be
 * extended.
 *
 * [Live demo](http://basicwebcomponents.org/basic-web-components/packages/basic-wrapped-standard-element/)
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
 *     document.registerElement('wrapped-a', WrappedA);
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
      // automatically be retargetted across the Shadow DOM boundary.
      var eventNames = nonRetargettedEventsForElement[this.extends] || [];
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
     * `<a>` element, then the template will look like:
     *
     *     <template>
     *       <a id="inner">
     *         <slot></slot>
     *       </a>
     *     </template>
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
      // TODO: Use slot instead of content.
      return '<' + this.extends + ' id="inner"><content></content></' + this.extends;
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

/*
 * Events which are spec'ed to NOT get retargetted across a Shadow DOM
 * boundary, organized by which element(s) raise the events. To properly
 * simulate these, we will need to listen for the real events, then re-raise
 * a simulation of the original event.
 *
 * See https://www.w3.org/TR/shadow-dom/#h-events-that-are-not-leaked-into-ancestor-trees
 *
 * The list below is reasonably complete. It omits elements that cannot be
 * wrapped (see class notes above). Also, we haven't actually tried wrapping
 * every element in this list; some of the more obscure ones might not actually
 * work as expected, but it was easier to include them for completeness than
 * to actually verify whether or not the element can be wrapped.
 */

var nonRetargettedEventsForElement = {
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

},{"../../basic-element-base/src/ElementBase":7}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwYWNrYWdlcy9iYXNpYy1hY3RpdmF0aW5nLWFuY2hvci9zcmMvQWN0aXZhdGluZ0FuY2hvci5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0F0dHJpYnV0ZU1hcnNoYWxsaW5nLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ29tcG9zYWJsZS5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW4uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TaGFkb3dFbGVtZW50UmVmZXJlbmNlcy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NoYWRvd1RlbXBsYXRlLmpzIiwicGFja2FnZXMvYmFzaWMtZWxlbWVudC1iYXNlL3NyYy9FbGVtZW50QmFzZS5qcyIsInBhY2thZ2VzL2Jhc2ljLXdyYXBwZWQtc3RhbmRhcmQtZWxlbWVudC9zcmMvV3JhcHBlZFN0YW5kYXJkRWxlbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2tCTSxnQkFBZ0I7WUFBaEIsZ0JBQWdCOztXQUFoQixnQkFBZ0I7MEJBQWhCLGdCQUFnQjs7a0VBQWhCLGdCQUFnQjs7O2VBQWhCLGdCQUFnQjs7dUNBdUNEO0FBQ2pCLHFDQXhDRSxnQkFBZ0Isd0NBd0NVO0FBQUUsbUNBeEM1QixnQkFBZ0Isa0RBd0NxQztPQUFFO0FBQ3pELGFBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7c0NBRWlCOzs7QUFDaEIscUNBN0NFLGdCQUFnQix1Q0E2Q1M7QUFBRSxtQ0E3QzNCLGdCQUFnQixpREE2Q21DO09BQUU7QUFDdkQsWUFBTSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFB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akIsVUFBUSxFQUFFLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Q0FDekM7OztBQUFDLEFBSUYsSUFBTSxZQUFZLEdBQUc7QUFDbkIsT0FBSyxFQUFFLElBQUk7QUFDWCxRQUFNLEVBQUUsSUFBSTtBQUNaLE9BQUssRUFBRSxJQUFJO0NBQ1osQ0FBQzs7QUFHRixTQUFTLHNCQUFzQixDQUFDLElBQUksRUFBRSxVQUFVLEVBQUU7QUFDaEQsTUFBSSxRQUFRLEdBQUc7QUFDYixnQkFBWSxFQUFFLFVBQVUsQ0FBQyxZQUFZO0FBQ3JDLGNBQVUsRUFBRSxVQUFVLENBQUMsVUFBVTtHQUNsQyxDQUFDO0FBQ0YsTUFBSSxVQUFVLENBQUMsR0FBRyxFQUFFO0FBQ2xCLFlBQVEsQ0FBQyxHQUFHLEdBQUcsWUFBVztBQUN4QixhQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDekIsQ0FBQTtHQUNGO0FBQ0QsTUFBSSxVQUFVLENBQUMsR0FBRyxFQUFFO0FBQ2xCLFlBQVEsQ0FBQyxHQUFHLEdBQUcsVUFBUyxLQUFLLEVBQUU7QUFDN0IsVUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7S0FDMUIsQ0FBQTtHQUNGO0FBQ0QsTUFBSSxVQUFVLENBQUMsUUFBUSxFQUFFO0FBQ3ZCLFlBQVEsQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQztHQUN6QztBQUNELFNBQU8sUUFBUSxDQUFDO0NBQ2pCOztrQkFHYyxzQkFBc0IiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFdyYXBwZWRTdGFuZGFyZEVsZW1lbnQgZnJvbSAnLi4vLi4vYmFzaWMtd3JhcHBlZC1zdGFuZGFyZC1lbGVtZW50L3NyYy9XcmFwcGVkU3RhbmRhcmRFbGVtZW50JztcblxuXG4vKipcbiAqIEFuIGFuY2hvciAobGluaykgdGhhdCBoaWdobGlnaHRzIGl0c2VsZiB3aGVuIGl0cyBkZXN0aW5hdGlvbiBtYXRjaGVzIHRoZVxuICogY3VycmVudCBsb2NhdGlvbi5cbiAqXG4gKiBbTGl2ZSBkZW1vXShodHRwOi8vYmFzaWN3ZWJjb21wb25lbnRzLm9yZy9iYXNpYy13ZWItY29tcG9uZW50cy9wYWNrYWdlcy9iYXNpYy1hY3RpdmF0aW5nLWFuY2hvci8pXG4gKlxuICogU3VjaCBhIGxpbmsgY29tbW9ubHkgYXBwZWFycyBpbiB0b29sYmFycywgc2lkZSBiYXJzLCBhbmQgb3RoZXIgbmF2aWdhdGlvblxuICogZWxlbWVudHMuIEluIHRoZXNlIHNpdHVhdGlvbnMsIHlvdSBnZW5lcmFsbHkgd2FudCB0aGUgdXNlciB0byB1bmRlcnN0YW5kIHdoYXRcbiAqIHBhZ2Ugb3IgYXJlYSB0aGUgdXNlciBpcyBhbHJlYWR5IG9uLlxuICpcbiAqIE5vdGU6IG9uZSBsaW1pdGF0aW9uIG9mIHRoaXMgY29tcG9uZW50IGlzIHRoYXQsIGJ5IGRlZmF1bHQsIHRoZSBsaW5rIGRvZXNcbiAqICpub3QqIHNob3cgdGhlIHN0YW5kYXJkIGxpbmsgY29sb3IgKHVzdWFsbHkgYmx1ZSkuIEhvd2V2ZXIsIGluIG5hdmlnYXRpb25cbiAqIGVsZW1lbnRzIGxpa2UgdG9vbGJhcnMsIHlvdSBvZnRlbiB3aWxsIHdhbnQgdG8gZXhwbGljaXRseSBzcGVjaWZpYyBsaW5rXG4gKiBjb2xvcnMgYW55d2F5LCBlLmcuLCB0byByZWZsZWN0IHlvdXIgYXBwbGljYXRpb24ncyB2aXN1YWwgc3R5bGUgYW5kIGJyYW5kLlxuICovXG5jbGFzcyBBY3RpdmF0aW5nQW5jaG9yIGV4dGVuZHMgV3JhcHBlZFN0YW5kYXJkRWxlbWVudC53cmFwKCdhJykge1xuXG4gIC8qKlxuICAgKiBUcnVlIGlmIHRoZSBsaW5rJ3MgZGVzdGluYXRpb24gbWF0Y2hlcyB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICAgKlxuICAgKiBJZiB0aGlzIGlzIHRydWUsIHRoZSBlbGVtZW50IHdpbGwgaGF2ZSBhbiBgYWN0aXZlYCBDU1MgY2xhc3MgYXBwbGllZCB0byBpdC5cbiAgICpcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBnZXQgYWN0aXZlKCkge1xuICAgIHJldHVybiB0aGlzLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJyk7XG4gIH1cbiAgc2V0IGFjdGl2ZSh2YWx1ZSkge1xuICAgIC8vIFdvdWxkIGxpa2UgdG8gdXNlIGNsYXNzTGlzdC50b2dnbGUoKSBoZXJlLCBidXQgSUUgMTEgZG9lc24ndCBoYXZlIGl0LlxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVHJ1ZSBpZiB0aGUgbGluayBwb2ludHMgdG8gYW4gYXJlYSB3aXRoaW4gYSBzaXRlLCBub3QganVzdCBhIHNpbmdsZSBwYWdlLlxuICAgKlxuICAgKiBJZiB0cnVlLCB0aGUgbWF0Y2hpbmcgcnVsZSB0byBkZXRlcm1pbmUgd2hldGhlciB0aGUgbGluayBpcyBhY3RpdmUgY2hhbmdlczpcbiAgICogYW4gYXJlYSBsaW5rIGlzIGNvbnNpZGVyZWQgdG8gYmUgYWN0aXZlIGlmIHRoZSBsaW5rJ3MgZGVzdGluYXRpb24gZm9ybXMgYVxuICAgKiBwcmVmaXggb2YgdGhlIGN1cnJlbnQgbG9jYXRpb24gKGluc3RlYWQgb2YgbWF0Y2hpbmcgdGhlIGNvbXBsZXRlIFVSTCkuXG4gICAqXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgZ2V0IGFyZWFMaW5rKCkge1xuICAgIHJldHVybiB0aGlzLl9hcmVhTGluaztcbiAgfVxuICBzZXQgYXJlYUxpbmsodmFsdWUpIHtcbiAgICAvLyBDYXN0IGJvb2xlYW4gb3Igc3RyaW5nIHZhbHVlcyB0byBib29sZWFuLlxuICAgIHRoaXMuX2FyZWFMaW5rID0gKFN0cmluZyh2YWx1ZSkgPT09ICd0cnVlJyk7XG4gICAgcmVmcmVzaCh0aGlzKTtcbiAgfVxuXG4gIGF0dGFjaGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHN1cGVyLmF0dGFjaGVkQ2FsbGJhY2spIHsgc3VwZXIuYXR0YWNoZWRDYWxsYmFjaygpOyB9XG4gICAgcmVmcmVzaCh0aGlzKTtcbiAgfVxuXG4gIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgZXZlbnQgPT4ge1xuICAgICAgcmVmcmVzaCh0aGlzKTtcbiAgICB9KTtcbiAgICBpZiAodHlwZW9mIHRoaXMuX2FyZWFMaW5rID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5fYXJlYUxpbmsgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvLyBBdWdtZW50IGhyZWYgaW1wbGVtZW50YXRpb24gc28gdGhhdCBjaGFuZ2luZyBocmVmIGNoZWNrcyB0aGUgYWN0aXZlIHN0YXR1cy5cbiAgZ2V0IGhyZWYoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmhyZWY7XG4gIH1cbiAgc2V0IGhyZWYodmFsdWUpIHtcbiAgICBzdXBlci5ocmVmID0gdmFsdWU7XG4gICAgcmVmcmVzaCh0aGlzKTtcbiAgfVxuXG4gIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICAvLyBTcGVjaWZ5IGNvbG9yOmluaGVyaXQgc28gdGhhdCBjb2xvciBjYW4gYmUgc3BlY2lmaWVkIGZyb20gdGhlIG91dHNpZGVcbiAgICAvLyB3aXRob3V0IGhhdmluZyB0byBkZWZpbmUgYSBDU1MgdmFyaWFibGUuXG4gICAgcmV0dXJuIGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICNpbm5lciB7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxhIGlkPVwiaW5uZXJcIj48c2xvdD48L3Nsb3Q+PC9hPmA7XG4gIH1cblxufVxuXG5cbi8vIFVwZGF0ZSB0aGUgYWN0aXZlIHN0YXR1cyBvZiB0aGUgZWxlbWVudCBiYXNlZCBvbiB0aGUgY3VycmVudCBsb2NhdGlvbi5cbmZ1bmN0aW9uIHJlZnJlc2goZWxlbWVudCkge1xuICBsZXQgY3VycmVudCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICBsZXQgbWF0Y2g7XG4gIGlmIChlbGVtZW50LmFyZWFMaW5rICYmIGVsZW1lbnQuaHJlZi5sZW5ndGggPCBjdXJyZW50Lmxlbmd0aCkge1xuICAgIC8vIE1hdGNoIHByZWZpeFxuICAgIGxldCBwcmVmaXggPSBlbGVtZW50LmhyZWY7XG4gICAgLy8gSWYgcHJlZml4IGRvZXNuJ3QgZW5kIGluIHNsYXNoLCBhZGQgYSBzbGFzaC5cbiAgICAvLyBXZSB3YW50IHRvIGF2b2lkIG1hdGNoaW5nIGluIHRoZSBtaWRkbGUgb2YgYSBmb2xkZXIgbmFtZS5cbiAgICBpZiAocHJlZml4LnN1YnN0cigtMSkgIT09ICcvJykge1xuICAgICAgcHJlZml4ICs9ICcvJztcbiAgICB9XG4gICAgbWF0Y2ggPSAoY3VycmVudC5zdWJzdHIoMCwgcHJlZml4Lmxlbmd0aCkgPT09IHByZWZpeCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gTWF0Y2ggd2hvbGUgcGF0aFxuICAgIG1hdGNoID0gKGN1cnJlbnQgPT09IGVsZW1lbnQuaHJlZik7XG4gIH1cbiAgZWxlbWVudC5hY3RpdmUgPSBtYXRjaDtcbn1cblxuXG5kb2N1bWVudC5yZWdpc3RlckVsZW1lbnQoJ2Jhc2ljLWFjdGl2YXRpbmctYW5jaG9yJywgQWN0aXZhdGluZ0FuY2hvcik7XG4iLCIvKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIEF0dHJpYnV0ZU1hcnNoYWxsaW5nLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggbWFyc2hhbGxzIGF0dHJpYnV0ZXMgdG8gcHJvcGVydGllcyAoYW5kIGV2ZW50dWFsbHkgdmljZSB2ZXJzYSkuXG4gICAqXG4gICAqIElmIHlvdXIgY29tcG9uZW50IGV4cG9zZXMgYSBzZXR0ZXIgZm9yIGEgcHJvcGVydHksIGl0J3MgZ2VuZXJhbGx5IGEgZ29vZFxuICAgKiBpZGVhIHRvIGxldCBkZXZzIHVzaW5nIHlvdXIgY29tcG9uZW50IGJlIGFibGUgdG8gc2V0IHRoYXQgcHJvcGVydHkgaW4gSFRNTFxuICAgKiB2aWEgYW4gZWxlbWVudCBhdHRyaWJ1dGUuIFlvdSBjYW4gY29kZSB0aGF0IHlvdXJzZWxmIGJ5IHdyaXRpbmcgYW5cbiAgICogYGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja2AsIG9yIHlvdSBjYW4gdXNlIHRoaXMgbWl4aW4gdG8gZ2V0IGEgZGVncmVlIG9mXG4gICAqIGF1dG9tYXRpYyBzdXBwb3J0LlxuICAgKlxuICAgKiBUaGlzIG1peGluIGltcGxlbWVudHMgYW4gYGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja2AgdGhhdCB3aWxsIGF0dGVtcHQgdG9cbiAgICogY29udmVydCBhIGNoYW5nZSBpbiBhbiBlbGVtZW50IGF0dHJpYnV0ZSBpbnRvIGEgY2FsbCB0byB0aGUgY29ycmVzcG9uZGluZ1xuICAgKiBwcm9wZXJ0eSBzZXR0ZXIuIEF0dHJpYnV0ZXMgdHlwaWNhbGx5IGZvbGxvdyBoeXBoZW5hdGVkIG5hbWVzIChcImZvby1iYXJcIiksXG4gICAqIHdoZXJlYXMgcHJvcGVydGllcyB0eXBpY2FsbHkgdXNlIGNhbWVsQ2FzZSBuYW1lcyAoXCJmb29CYXJcIikuIFRoaXMgbWl4aW5cbiAgICogcmVzcGVjdHMgdGhhdCBjb252ZW50aW9uLCBhdXRvbWF0aWNhbGx5IG1hcHBpbmcgdGhlIGh5cGhlbmF0ZWQgYXR0cmlidXRlXG4gICAqIG5hbWUgdG8gdGhlIGNvcnJlc3BvbmRpbmcgY2FtZWxDYXNlIHByb3BlcnR5IG5hbWUuXG4gICAqXG4gICAqIEV4YW1wbGU6IFlvdSBkZWZpbmUgYSBjb21wb25lbnQgdXNpbmcgdGhpcyBtaXhpbjpcbiAgICpcbiAgICogICAgIGNsYXNzIE15RWxlbWVudCBleHRlbmRzIEF0dHJpYnV0ZU1hcnNoYWxsaW5nKEhUTUxFbGVtZW50KSB7XG4gICAqICAgICAgIGdldCBmb29CYXIoKSB7IHJldHVybiB0aGlzLl9mb29CYXI7IH1cbiAgICogICAgICAgc2V0IGZvb0Jhcih2YWx1ZSkgeyB0aGlzLl9mb29CYXIgPSB2YWx1ZTsgfVxuICAgKiAgICAgfVxuICAgKiAgICAgZG9jdW1lbnQucmVnaXN0ZXJFbGVtZW50KCdteS1lbGVtZW50JywgTXlFbGVtZW50KTtcbiAgICpcbiAgICogSWYgc29tZW9uZSB0aGVuIGluc3RhbnRpYXRlcyB5b3VyIGNvbXBvbmVudCBpbiBIVE1MOlxuICAgKlxuICAgKiAgICAgPG15LWVsZW1lbnQgZm9vLWJhcj1cIkhlbGxvXCI+PC9teS1lbGVtZW50PlxuICAgKlxuICAgKiBUaGVuLCBhZnRlciB0aGUgZWxlbWVudCBoYXMgYmVlbiB1cGdyYWRlZCwgdGhlIGBmb29CYXJgIHNldHRlciB3aWxsXG4gICAqIGF1dG9tYXRpY2FsbHkgYmUgaW52b2tlZCB3aXRoIHRoZSBpbml0aWFsIHZhbHVlIFwiSGVsbG9cIi5cbiAgICpcbiAgICogRm9yIHRoZSB0aW1lIGJlaW5nLCB0aGlzIG1peGluIG9ubHkgc3VwcG9ydHMgc3RyaW5nLXZhbHVlZCBwcm9wZXJ0aWVzLlxuICAgKiBJZiB5b3UnZCBsaWtlIHRvIGNvbnZlcnQgc3RyaW5nIGF0dHJpYnV0ZXMgdG8gb3RoZXIgdHlwZXMgKG51bWJlcnMsXG4gICAqIGJvb2xlYW5zKSwgeW91IG5lZWQgdG8gaW1wbGVtZW50IGBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tgIHlvdXJzZWxmLlxuICAgKi9cbiAgY2xhc3MgQXR0cmlidXRlTWFyc2hhbGxpbmcgZXh0ZW5kcyBiYXNlIHtcblxuICAgIC8qXG4gICAgICogSGFuZGxlIGEgY2hhbmdlIHRvIHRoZSBhdHRyaWJ1dGUgd2l0aCB0aGUgZ2l2ZW4gbmFtZS5cbiAgICAgKi9cbiAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG4gICAgICBpZiAoc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKSB7IHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjaygpOyB9XG4gICAgICAvLyBJZiB0aGUgYXR0cmlidXRlIG5hbWUgY29ycmVzcG9uZHMgdG8gYSBwcm9wZXJ0eSBuYW1lLCB0aGVuIHNldCB0aGF0XG4gICAgICAvLyBwcm9wZXJ0eS4gSWdub3JlIGNoYW5nZXMgaW4gc3RhbmRhcmQgSFRNTEVsZW1lbnQgcHJvcGVydGllcy5cbiAgICAgIGxldCBwcm9wZXJ0eU5hbWUgPSBhdHRyaWJ1dGVUb1Byb3BlcnR5TmFtZShuYW1lKTtcbiAgICAgIGlmIChwcm9wZXJ0eU5hbWUgaW4gdGhpcyAmJiAhKHByb3BlcnR5TmFtZSBpbiBIVE1MRWxlbWVudC5wcm90b3R5cGUpKSB7XG4gICAgICAgIHRoaXNbcHJvcGVydHlOYW1lXSA9IG5ld1ZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICogR2VuZXJhdGUgYW4gaW5pdGlhbCBjYWxsIHRvIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayBmb3IgZWFjaCBhdHRyaWJ1dGVcbiAgICAgKiBvbiB0aGUgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIFRPRE86IFRoZSBwbGFuIGZvciBDdXN0b20gRWxlbWVudHMgdjEgaXMgZm9yIHRoZSBicm93c2VyIHRvIGhhbmRsZSB0aGlzLlxuICAgICAqIE9uY2UgdGhhdCdzIGhhbmRsZWQgKGluY2x1ZGluZyBpbiBwb2x5ZmlsbHMpLCB0aGlzIGNhbGwgY2FuIGdvIGF3YXkuXG4gICAgICovXG4gICAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuICAgICAgW10uZm9yRWFjaC5jYWxsKHRoaXMuYXR0cmlidXRlcywgYXR0cmlidXRlID0+IHtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soYXR0cmlidXRlLm5hbWUsIHVuZGVmaW5lZCwgYXR0cmlidXRlLnZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIEF0dHJpYnV0ZU1hcnNoYWxsaW5nO1xufTtcblxuXG4vLyBDb252ZXJ0IGNhbWVsIGNhc2UgZm9vQmFyIG5hbWUgdG8gaHlwaGVuYXRlZCBmb28tYmFyLlxuZnVuY3Rpb24gYXR0cmlidXRlVG9Qcm9wZXJ0eU5hbWUoYXR0cmlidXRlTmFtZSkge1xuICBsZXQgcHJvcGVydHlOYW1lID0gYXR0cmlidXRlTmFtZS5yZXBsYWNlKC8tKFthLXpdKS9nLCBtID0+IG1bMV0udG9VcHBlckNhc2UoKSk7XG4gIHJldHVybiBwcm9wZXJ0eU5hbWU7XG59XG5cbi8vIENvbnZlcnQgaHlwaGVuYXRlZCBmb28tYmFyIG5hbWUgdG8gY2FtZWwgY2FzZSBmb29CYXIuXG4vLyBUT0RPOiBVc2UgdGhpcyB3aGVuIHdlIHN1cHBvcnQgcmVmbGVjdGlvbiBvZiBwcm9wZXJ0aWVzIHRvIGF0dHJpYnV0ZXMuXG4vLyBmdW5jdGlvbiBwcm9wZXJ0eVRvQXR0cmlidXRlTmFtZShwcm9wZXJ0eU5hbWUpIHtcbi8vICAgbGV0IGF0dHJpYnV0ZU5hbWUgPSBwcm9wZXJ0eU5hbWUucmVwbGFjZSgvKFthLXpdW0EtWl0pL2csIGcgPT4gZ1swXSArICctJyArIGdbMV0udG9Mb3dlckNhc2UoKSk7XG4vLyAgIHJldHVybiBhdHRyaWJ1dGVOYW1lO1xuLy8gfVxuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBDb21wb3NhYmxlLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gdG8gbWFrZSBhIGNsYXNzIG1vcmUgZWFzaWx5IGNvbXBvc2FibGUgd2l0aCBvdGhlciBtaXhpbnMuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gY29udHJpYnV0ZXMgYSBgY29tcG9zZWAgbWV0aG9kIHRoYXQgYXBwbGllcyBhIHNldCBvZiBtaXhpblxuICAgKiBmdW5jdGlvbnMgYW5kIHJldHVybnMgdGhlIHJlc3VsdGluZyBuZXcgY2xhc3MuIFRoaXMgc3VnYXIgY2FuIG1ha2UgdGhlXG4gICAqIGFwcGxpY2F0aW9uIG9mIG1hbnkgbWl4aW5zIGF0IG9uY2UgZWFzaWVyIHRvIHJlYWQuXG4gICAqL1xuICBjbGFzcyBDb21wb3NhYmxlIGV4dGVuZHMgYmFzZSB7XG5cbiAgICAvKipcbiAgICAgKiBBcHBseSBhIHNldCBvZiBtaXhpbiBmdW5jdGlvbnMgb3IgbWl4aW4gb2JqZWN0cyB0byB0aGUgcHJlc2VudCBjbGFzcyBhbmRcbiAgICAgKiByZXR1cm4gdGhlIG5ldyBjbGFzcy5cbiAgICAgKlxuICAgICAqIEluc3RlYWQgb2Ygd3JpdGluZzpcbiAgICAgKlxuICAgICAqICAgICBsZXQgTXlDbGFzcyA9IE1peGluMShNaXhpbjIoTWl4aW4zKE1peGluNChNaXhpbjUoQmFzZUNsYXNzKSkpKSk7XG4gICAgICpcbiAgICAgKiBZb3UgY2FuIHdyaXRlOlxuICAgICAqXG4gICAgICogICAgIGxldCBNeUNsYXNzID0gQ29tcG9zYWJsZShCYXNlQ2xhc3MpLmNvbXBvc2UoXG4gICAgICogICAgICAgTWl4aW4xLFxuICAgICAqICAgICAgIE1peGluMixcbiAgICAgKiAgICAgICBNaXhpbjMsXG4gICAgICogICAgICAgTWl4aW40LFxuICAgICAqICAgICAgIE1peGluNVxuICAgICAqICAgICApO1xuICAgICAqXG4gICAgICogVGhpcyBmdW5jdGlvbiBjYW4gYWxzbyB0YWtlIG1peGluIG9iamVjdHMuIEEgbWl4aW4gb2JqZWN0IGlzIGp1c3QgYVxuICAgICAqIHNob3J0aGFuZCBmb3IgYSBtaXhpbiBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYSBuZXcgc3ViY2xhc3Mgd2l0aCB0aGUgZ2l2ZW5cbiAgICAgKiBtZW1iZXJzLiBUaGUgbWl4aW4gb2JqZWN0J3MgbWVtYmVycyBhcmUgKm5vdCogY29waWVkIGRpcmVjdGx5IG9udG8gdGhlXG4gICAgICogcHJvdG90eXBlIG9mIHRoZSBiYXNlIGNsYXNzLCBhcyB3aXRoIHRyYWRpdGlvbmFsIG1peGlucy5cbiAgICAgKlxuICAgICAqIEluIGFkZGl0aW9uIHRvIHByb3ZpZGluZyBzeW50YWN0aWMgc3VnYXIsIHRoaXMgbWl4aW4gY2FuIGJlIHVzZWQgdG9cbiAgICAgKiBkZWZpbmUgYSBjbGFzcyBpbiBFUzUsIHdoaWNoIGxhY2tzIEVTNidzIGBjbGFzc2Aga2V5d29yZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Li4ubWl4aW5zfSBtaXhpbnMgLSBBIHNldCBvZiBtaXhpbiBmdW5jdGlvbnMgb3Igb2JqZWN0cyB0byBhcHBseS5cbiAgICAgKi9cbiAgICBzdGF0aWMgY29tcG9zZSguLi5taXhpbnMpIHtcbiAgICAgIC8vIFdlIGNyZWF0ZSBhIG5ldyBzdWJjbGFzcyBmb3IgZWFjaCBtaXhpbiBpbiB0dXJuLiBUaGUgcmVzdWx0IGJlY29tZXNcbiAgICAgIC8vIHRoZSBiYXNlIGNsYXNzIGV4dGVuZGVkIGJ5IGFueSBzdWJzZXF1ZW50IG1peGlucy4gSXQgdHVybnMgb3V0IHRoYXRcbiAgICAgIC8vIHdlIGNhbiB1c2UgQXJyYXkucmVkdWNlKCkgdG8gY29uY2lzZWx5IGV4cHJlc3MgdGhpcywgdXNpbmcgdGhlIGN1cnJlbnRcbiAgICAgIC8vIG9iamVjdCBhcyB0aGUgc2VlZCBmb3IgcmVkdWNlKCkuXG4gICAgICByZXR1cm4gbWl4aW5zLnJlZHVjZShjb21wb3NlQ2xhc3MsIHRoaXMpO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIENvbXBvc2FibGU7XG59O1xuXG5cbi8vIFByb3BlcnRpZXMgZGVmaW5lZCBieSBPYmplY3QgdGhhdCB3ZSBkb24ndCB3YW50IHRvIG1peGluLlxuY29uc3QgTk9OX01JWEFCTEVfT0JKRUNUX1BST1BFUlRJRVMgPSBbXG4gICdjb25zdHJ1Y3Rvcidcbl07XG5cbi8qXG4gKiBBcHBseSB0aGUgbWl4aW4gdG8gdGhlIGdpdmVuIGJhc2UgY2xhc3MgdG8gcmV0dXJuIGEgbmV3IGNsYXNzLlxuICogVGhlIG1peGluIGNhbiBlaXRoZXIgYmUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIG1vZGlmaWVkIGNsYXNzLCBvciBhXG4gKiBwbGFpbiBvYmplY3Qgd2hvc2UgbWVtYmVycyB3aWxsIGJlIGNvcGllZCB0byB0aGUgbmV3IGNsYXNzJyBwcm90b3R5cGUuXG4gKi9cbmZ1bmN0aW9uIGNvbXBvc2VDbGFzcyhiYXNlLCBtaXhpbikge1xuICBpZiAodHlwZW9mIG1peGluID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gTWl4aW4gZnVuY3Rpb25cbiAgICByZXR1cm4gbWl4aW4oYmFzZSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gTWl4aW4gb2JqZWN0XG4gICAgY2xhc3MgU3ViY2xhc3MgZXh0ZW5kcyBiYXNlIHt9XG4gICAgY29weU93blByb3BlcnRpZXMobWl4aW4sIFN1YmNsYXNzLnByb3RvdHlwZSwgTk9OX01JWEFCTEVfT0JKRUNUX1BST1BFUlRJRVMpO1xuICAgIHJldHVybiBTdWJjbGFzcztcbiAgfVxufVxuXG5cbi8qXG4gKiBDb3B5IHRoZSBnaXZlbiBwcm9wZXJ0aWVzL21ldGhvZHMgdG8gdGhlIHRhcmdldC5cbiAqIFJldHVybiB0aGUgdXBkYXRlZCB0YXJnZXQuXG4gKi9cbmZ1bmN0aW9uIGNvcHlPd25Qcm9wZXJ0aWVzKHNvdXJjZSwgdGFyZ2V0LCBpZ25vcmVQcm9wZXJ0eU5hbWVzID0gW10pIHtcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoc291cmNlKS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgIGlmIChpZ25vcmVQcm9wZXJ0eU5hbWVzLmluZGV4T2YobmFtZSkgPCAwKSB7XG4gICAgICBsZXQgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBuYW1lKTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB0YXJnZXQ7XG59XG4iLCIvLyBUT0RPOiBSYXRpb25hbGl6ZSB3aXRoIG5ldyBDdXN0b20gRWxlbWVudHMgQVBJLlxuLy8gVE9ETzogQ29uc2lkZXIgcmVuYW1pbmcgdG8gbWF0Y2ggQ3VzdG9tIEVsZW1lbnRzIEFQSS5cblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIERpc3RyaWJ1dGVkQ2hpbGRyZW4uICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBkZWZpbmVzIGhlbHBlcnMgZm9yIGFjY2Vzc2luZyBhIGNvbXBvbmVudCdzIGRpc3RyaWJ1dGVkXG4gICAqIGNoaWxkcmVuIGFzIGEgZmxhdHRlbmVkIGFycmF5IG9yIHN0cmluZy5cbiAgICpcbiAgICogVGhlIHN0YW5kYXJkIERPTSBBUEkgcHJvdmlkZXMgc2V2ZXJhbCB3YXlzIG9mIGFjY2Vzc2luZyBjaGlsZCBjb250ZW50OlxuICAgKiBgY2hpbGRyZW5gLCBgY2hpbGROb2Rlc2AsIGFuZCBgdGV4dENvbnRlbnRgLiBOb25lIG9mIHRoZXNlIGZ1bmN0aW9ucyBhcmVcbiAgICogU2hhZG93IERPTSBhd2FyZS4gVGhpcyBtaXhpbiBkZWZpbmVzIHZhcmlhdGlvbnMgb2YgdGhvc2UgZnVuY3Rpb25zIHRoYXRcbiAgICogKmFyZSogU2hhZG93IERPTSBhd2FyZS5cbiAgICpcbiAgICogRXhhbXBsZTogeW91IGNyZWF0ZSBhIGNvbXBvbmVudCBgPGNvdW50LWNoaWxkcmVuPmAgdGhhdCBkaXNwbGF5cyBhIG51bWJlclxuICAgKiBlcXVhbCB0byB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIHBsYWNlZCBpbnNpZGUgdGhhdCBjb21wb25lbnQuIElmIHNvbWVvbmVcbiAgICogaW5zdGFudGlhdGVzIHlvdXIgY29tcG9uZW50IGxpa2U6XG4gICAqXG4gICAqICAgICA8Y291bnQtY2hpbGRyZW4+XG4gICAqICAgICAgIDxkaXY+PC9kaXY+XG4gICAqICAgICAgIDxkaXY+PC9kaXY+XG4gICAqICAgICAgIDxkaXY+PC9kaXY+XG4gICAqICAgICA8L2NvdW50LWNoaWxkcmVuPlxuICAgKlxuICAgKiBUaGVuIHRoZSBjb21wb25lbnQgc2hvdWxkIHNob3cgXCIzXCIsIGJlY2F1c2UgdGhlcmUgYXJlIHRocmVlIGNoaWxkcmVuLiBUb1xuICAgKiBjYWxjdWxhdGUgdGhlIG51bWJlciBvZiBjaGlsZHJlbiwgdGhlIGNvbXBvbmVudCBjYW4ganVzdCBjYWxjdWxhdGVcbiAgICogYHRoaXMuY2hpbGRyZW4ubGVuZ3RoYC4gSG93ZXZlciwgc3VwcG9zZSBzb21lb25lIGluc3RhbnRpYXRlcyB5b3VyXG4gICAqIGNvbXBvbmVudCBpbnNpZGUgb25lIG9mIHRoZWlyIG93biBjb21wb25lbnRzLCBhbmQgcHV0cyBhIGA8c2xvdD5gIGVsZW1lbnRcbiAgICogaW5zaWRlIHlvdXIgY29tcG9uZW50OlxuICAgKlxuICAgKiAgICAgPGNvdW50LWNoaWxkcmVuPlxuICAgKiAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAqICAgICA8L2NvdW50LWNoaWxkcmVuPlxuICAgKlxuICAgKiBJZiB5b3VyIGNvbXBvbmVudCBvbmx5IGxvb2tzIGF0IGB0aGlzLmNoaWxkcmVuYCwgaXQgd2lsbCBhbHdheXMgc2VlIGV4YWN0bHlcbiAgICogb25lIGNoaWxkIOKAlMKgdGhlIGA8c2xvdD5gIGVsZW1lbnQuIEJ1dCB0aGUgdXNlciBsb29raW5nIGF0IHRoZSBwYWdlIHdpbGxcbiAgICogKnNlZSogYW55IG5vZGVzIGRpc3RyaWJ1dGVkIHRvIHRoYXQgc2xvdC4gVG8gbWF0Y2ggd2hhdCB0aGUgdXNlciBzZWVzLCB5b3VyXG4gICAqIGNvbXBvbmVudCBzaG91bGQgZXhwYW5kIGFueSBgPHNsb3Q+YCBlbGVtZW50cyBpdCBjb250YWlucy5cbiAgICpcbiAgICogVGhhdCBpcyB0aGUgcHJvYmxlbSB0aGlzIG1peGluIHNvbHZlcy4gQWZ0ZXIgYXBwbHlpbmcgdGhpcyBtaXhpbiwgeW91clxuICAgKiBjb21wb25lbnQgY29kZSBoYXMgYWNjZXNzIHRvIGB0aGlzLmRpc3RyaWJ1dGVkQ2hpbGRyZW5gLCB3aG9zZSBgbGVuZ3RoYFxuICAgKiB3aWxsIHJldHVybiB0aGUgdG90YWwgbnVtYmVyIG9mIGFsbCBjaGlsZHJlbiBkaXN0cmlidXRlZCB0byB5b3VyIGNvbXBvbmVudFxuICAgKiBpbiB0aGUgY29tcG9zZWQgdHJlZS5cbiAgICpcbiAgICogTm90ZTogVGhlIGxhdGVzdCBDdXN0b20gRWxlbWVudHMgQVBJIGRlc2lnbiBjYWxscyBmb3IgYSBuZXcgZnVuY3Rpb24sXG4gICAqIGBnZXRBc3NpZ25lZE5vZGVzYCB0aGF0IHRha2VzIGFuIG9wdGlvbmFsIGBkZWVwYCBwYXJhbWV0ZXIsIHRoYXQgd2lsbCBzb2x2ZVxuICAgKiB0aGlzIHByb2JsZW0gYXQgdGhlIEFQSSBsZXZlbC5cbiAgICovXG4gIGNsYXNzIERpc3RyaWJ1dGVkQ2hpbGRyZW4gZXh0ZW5kcyBiYXNlIHtcblxuICAgIC8qKlxuICAgICAqIEFuIGluLW9yZGVyIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4sIGV4cGFuZGluZyBhbnkgc2xvdCBlbGVtZW50cy4gTGlrZSB0aGVcbiAgICAgKiBzdGFuZGFyZCBjaGlsZHJlbiBwcm9wZXJ0eSwgdGhpcyBza2lwcyB0ZXh0IG5vZGVzLlxuICAgICAqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50W119XG4gICAgICovXG4gICAgZ2V0IGRpc3RyaWJ1dGVkQ2hpbGRyZW4oKSB7XG4gICAgICByZXR1cm4gZXhwYW5kQ29udGVudEVsZW1lbnRzKHRoaXMuY2hpbGRyZW4sIGZhbHNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbiBpbi1vcmRlciBjb2xsZWN0aW9uIG9mIGNoaWxkIG5vZGVzLCBleHBhbmRpbmcgYW55IHNsb3QgZWxlbWVudHMuIExpa2VcbiAgICAgKiB0aGUgc3RhbmRhcmQgY2hpbGROb2RlcyBwcm9wZXJ0eSwgdGhpcyBpbmNsdWRlcyB0ZXh0IG5vZGVzLlxuICAgICAqXG4gICAgICogQHR5cGUge05vZGVbXX1cbiAgICAgKi9cbiAgICBnZXQgZGlzdHJpYnV0ZWRDaGlsZE5vZGVzKCkge1xuICAgICAgcmV0dXJuIGV4cGFuZENvbnRlbnRFbGVtZW50cyh0aGlzLmNoaWxkTm9kZXMsIHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBjb25jYXRlbmF0ZWQgdGV4dCBjb250ZW50IG9mIGFsbCBjaGlsZCBub2RlcywgZXhwYW5kaW5nIGFueSBzbG90XG4gICAgICogZWxlbWVudHMuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldCBkaXN0cmlidXRlZFRleHRDb250ZW50KCkge1xuICAgICAgbGV0IHN0cmluZ3MgPSB0aGlzLmRpc3RyaWJ1dGVkQ2hpbGROb2Rlcy5tYXAoZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkLnRleHRDb250ZW50O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gc3RyaW5ncy5qb2luKCcnKTtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBEaXN0cmlidXRlZENoaWxkcmVuO1xufTtcblxuXG4vKlxuICogR2l2ZW4gYSBhcnJheSBvZiBub2RlcywgcmV0dXJuIGEgbmV3IGFycmF5IHdpdGggYW55IGNvbnRlbnQgZWxlbWVudHMgZXhwYW5kZWRcbiAqIHRvIHRoZSBub2RlcyBkaXN0cmlidXRlZCB0byB0aGF0IGNvbnRlbnQgZWxlbWVudC4gVGhpcyBydWxlIGlzIGFwcGxpZWRcbiAqIHJlY3Vyc2l2ZWx5LlxuICpcbiAqIElmIGluY2x1ZGVUZXh0Tm9kZXMgaXMgdHJ1ZSwgdGV4dCBub2RlcyB3aWxsIGJlIGluY2x1ZGVkLCBhcyBpbiB0aGVcbiAqIHN0YW5kYXJkIGNoaWxkTm9kZXMgcHJvcGVydHk7IGJ5IGRlZmF1bHQsIHRoaXMgc2tpcHMgdGV4dCBub2RlcywgbGlrZSB0aGVcbiAqIHN0YW5kYXJkIGNoaWxkcmVuIHByb3BlcnR5LlxuICovXG5mdW5jdGlvbiBleHBhbmRDb250ZW50RWxlbWVudHMobm9kZXMsIGluY2x1ZGVUZXh0Tm9kZXMpIHtcbiAgbGV0IGV4cGFuZGVkID0gQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKG5vZGVzLCBub2RlID0+IHtcbiAgICAvLyBXZSB3YW50IHRvIHNlZSBpZiB0aGUgbm9kZSBpcyBhbiBpbnN0YW5jZW9mIEhUTUxTbG90RUxlbWVudCwgYnV0XG4gICAgLy8gdGhhdCBjbGFzcyB3b24ndCBleGlzdCBpZiB0aGUgYnJvd3NlciB0aGF0IGRvZXNuJ3Qgc3VwcG9ydCBuYXRpdmVcbiAgICAvLyBTaGFkb3cgRE9NIGFuZCBpZiB0aGUgU2hhZG93IERPTSBwb2x5ZmlsbCBoYXNuJ3QgYmVlbiBsb2FkZWQuIEluc3RlYWQsXG4gICAgLy8gd2UgZG8gYSBzaW1wbGlzdGljIGNoZWNrIHRvIHNlZSBpZiB0aGUgdGFnIG5hbWUgaXMgXCJzbG90XCIgb3IgXCJjb250ZW50XCIuXG4gICAgaWYgKG5vZGUubG9jYWxOYW1lICYmIChub2RlLmxvY2FsTmFtZSA9PT0gXCJzbG90XCIgfHwgbm9kZS5sb2NhbE5hbWUgPT09IFwiY29udGVudFwiKSkge1xuICAgICAgLy8gY29udGVudCBlbGVtZW50OyB1c2UgaXRzIGRpc3RyaWJ1dGVkIG5vZGVzIGluc3RlYWQuXG4gICAgICBsZXQgZGlzdHJpYnV0ZWROb2RlcyA9IG5vZGUuZ2V0RGlzdHJpYnV0ZWROb2RlcygpO1xuICAgICAgcmV0dXJuIGRpc3RyaWJ1dGVkTm9kZXMgP1xuICAgICAgICBleHBhbmRDb250ZW50RWxlbWVudHMoZGlzdHJpYnV0ZWROb2RlcywgaW5jbHVkZVRleHROb2RlcykgOlxuICAgICAgICBbXTtcbiAgICB9IGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgLy8gUGxhaW4gZWxlbWVudDsgdXNlIGFzIGlzLlxuICAgICAgcmV0dXJuIFtub2RlXTtcbiAgICB9IGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBUZXh0ICYmIGluY2x1ZGVUZXh0Tm9kZXMpIHtcbiAgICAgIC8vIFRleHQgbm9kZS5cbiAgICAgIHJldHVybiBbbm9kZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIENvbW1lbnQsIHByb2Nlc3NpbmcgaW5zdHJ1Y3Rpb24sIGV0Yy47IHNraXAuXG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9KTtcbiAgbGV0IGZsYXR0ZW5lZCA9IFtdLmNvbmNhdCguLi5leHBhbmRlZCk7XG4gIHJldHVybiBmbGF0dGVuZWQ7XG59XG4iLCIvKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFNoYWRvd0VsZW1lbnRSZWZlcmVuY2VzLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gdG8gY3JlYXRlIHJlZmVyZW5jZXMgdG8gZWxlbWVudHMgaW4gYSBjb21wb25lbnQncyBTaGFkb3cgRE9NIHN1YnRyZWUuXG4gICAqXG4gICAqIFRoaXMgYWRkcyBhIG1lbWJlciBvbiB0aGUgY29tcG9uZW50IGNhbGxlZCBgdGhpcy4kYCB0aGF0IGNhbiBiZSB1c2VkIHRvXG4gICAqIHJlZmVyZW5jZSBzaGFkb3cgZWxlbWVudHMgd2l0aCBJRHMuIEUuZy4sIGlmIGNvbXBvbmVudCdzIHNoYWRvdyBjb250YWlucyBhblxuICAgKiBlbGVtZW50IGA8YnV0dG9uIGlkPVwiZm9vXCI+YCwgdGhlbiB0aGlzIG1peGluIHdpbGwgY3JlYXRlIGEgbWVtYmVyXG4gICAqIGB0aGlzLiQuZm9vYCB0aGF0IHBvaW50cyB0byB0aGF0IGJ1dHRvbi5cbiAgICpcbiAgICogU3VjaCByZWZlcmVuY2VzIHNpbXBsaWZ5IGEgY29tcG9uZW50J3MgYWNjZXNzIHRvIGl0cyBvd24gZWxlbWVudHMuIEluXG4gICAqIGV4Y2hhbmdlLCB0aGlzIG1peGluIHRyYWRlcyBvZmYgYSBvbmUtdGltZSBjb3N0IG9mIHF1ZXJ5aW5nIGFsbCBlbGVtZW50cyBpblxuICAgKiB0aGUgc2hhZG93IHRyZWUgaW5zdGVhZCBvZiBwYXlpbmcgYW4gb25nb2luZyBjb3N0IHRvIHF1ZXJ5IGZvciBhbiBlbGVtZW50XG4gICAqIGVhY2ggdGltZSB0aGUgY29tcG9uZW50IHdhbnRzIHRvIGluc3BlY3Qgb3IgbWFuaXB1bGF0ZSBpdC5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIHRoZSBjb21wb25lbnQgdG8gZGVmaW5lIGEgU2hhZG93IERPTSBzdWJ0cmVlLiBZb3UgY2FuXG4gICAqIGNyZWF0ZSB0aGF0IHRyZWUgeW91cnNlbGYsIG9yIG1ha2UgdXNlIG9mIHRoZSBTaGFkb3dUZW1wbGF0ZSBtaXhpbi5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBpcyBpbnNwaXJlZCBieSBQb2x5bWVyJ3MgW2F1dG9tYXRpY1xuICAgKiBub2RlIGZpbmRpbmddKGh0dHBzOi8vd3d3LnBvbHltZXItcHJvamVjdC5vcmcvMS4wL2RvY3MvZGV2Z3VpZGUvbG9jYWwtZG9tLmh0bWwjbm9kZS1maW5kaW5nKVxuICAgKiBmZWF0dXJlLlxuICAgKi9cbiAgY2xhc3MgU2hhZG93RWxlbWVudFJlZmVyZW5jZXMgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cbiAgICAgIGlmICh0aGlzLnNoYWRvd1Jvb3QpIHtcbiAgICAgICAgLy8gTG9vayBmb3IgZWxlbWVudHMgaW4gdGhlIHNoYWRvdyBzdWJ0cmVlIHRoYXQgaGF2ZSBpZCBhdHRyaWJ1dGVzLlxuICAgICAgICAvLyBBbiBhbHRlcm5hdGl2ZWx5IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWl4aW4gd291bGQgYmUgdG8ganVzdCBkZWZpbmVcbiAgICAgICAgLy8gYSB0aGlzLiQgZ2V0dGVyIHRoYXQgbGF6aWx5IGRvZXMgdGhpcyBzZWFyY2ggdGhlIGZpcnN0IHRpbWUgc29tZW9uZVxuICAgICAgICAvLyB0cmllcyB0byBhY2Nlc3MgdGhpcy4kLiBUaGF0IG1pZ2h0IGludHJvZHVjZSBzb21lIGNvbXBsZXhpdHkg4oCTIGlmIHRoZVxuICAgICAgICAvLyB0aGUgdHJlZSBjaGFuZ2VkIGFmdGVyIGl0IHdhcyBmaXJzdCBwb3B1bGF0ZWQsIHRoZSByZXN1bHQgb2ZcbiAgICAgICAgLy8gc2VhcmNoaW5nIGZvciBhIG5vZGUgbWlnaHQgYmUgc29tZXdoYXQgdW5wcmVkaWN0YWJsZS5cbiAgICAgICAgdGhpcy4kID0ge307XG4gICAgICAgIGxldCBub2Rlc1dpdGhJZHMgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvckFsbCgnW2lkXScpO1xuICAgICAgICBbXS5mb3JFYWNoLmNhbGwobm9kZXNXaXRoSWRzLCBub2RlID0+IHtcbiAgICAgICAgICBsZXQgaWQgPSBub2RlLmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgICB0aGlzLiRbaWRdID0gbm9kZTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gU2hhZG93RWxlbWVudFJlZmVyZW5jZXM7XG59O1xuIiwiLy8gRmVhdHVyZSBkZXRlY3Rpb24gZm9yIG9sZCBTaGFkb3cgRE9NIHYwLlxuY29uc3QgVVNJTkdfU0hBRE9XX0RPTV9WMCA9ICh0eXBlb2YgSFRNTEVsZW1lbnQucHJvdG90eXBlLmNyZWF0ZVNoYWRvd1Jvb3QgIT09ICd1bmRlZmluZWQnKTtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFNoYWRvd1RlbXBsYXRlLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gZm9yIHN0YW1waW5nIGEgdGVtcGxhdGUgaW50byBhIFNoYWRvdyBET00gc3VidHJlZSB1cG9uIGNvbXBvbmVudFxuICAgKiBpbnN0YW50aWF0aW9uLlxuICAgKlxuICAgKiBUbyB1c2UgdGhpcyBtaXhpbiwgZGVmaW5lIGEgYHRlbXBsYXRlYCBwcm9wZXJ0eSBhcyBhIHN0cmluZyBvciBIVE1MXG4gICAqIGA8dGVtcGxhdGU+YCBlbGVtZW50OlxuICAgKlxuICAgKiAgICAgY2xhc3MgTXlFbGVtZW50IGV4dGVuZHMgU2hhZG93VGVtcGxhdGUoSFRNTEVsZW1lbnQpIHtcbiAgICogICAgICAgZ2V0IHRlbXBsYXRlKCkge1xuICAgKiAgICAgICAgIHJldHVybiBgSGVsbG8sIDxlbT53b3JsZDwvZW0+LmA7XG4gICAqICAgICAgIH1cbiAgICogICAgIH1cbiAgICpcbiAgICogV2hlbiB5b3VyIGNvbXBvbmVudCBjbGFzcyBpcyBpbnN0YW50aWF0ZWQsIGEgc2hhZG93IHJvb3Qgd2lsbCBiZSBjcmVhdGVkIG9uXG4gICAqIHRoZSBpbnN0YW5jZSwgYW5kIHRoZSBjb250ZW50cyBvZiB0aGUgdGVtcGxhdGUgd2lsbCBiZSBjbG9uZWQgaW50byB0aGVcbiAgICogc2hhZG93IHJvb3QuIElmIHlvdXIgY29tcG9uZW50IGRvZXMgbm90IGRlZmluZSBhIGB0ZW1wbGF0ZWAgcHJvcGVydHksIHRoaXNcbiAgICogbWl4aW4gaGFzIG5vIGVmZmVjdC5cbiAgICpcbiAgICogRm9yIHRoZSB0aW1lIGJlaW5nLCB0aGlzIGV4dGVuc2lvbiByZXRhaW5zIHN1cHBvcnQgZm9yIFNoYWRvdyBET00gdjAuIFRoYXRcbiAgICogd2lsbCBldmVudHVhbGx5IGJlIGRlcHJlY2F0ZWQgYXMgYnJvd3NlcnMgKGFuZCB0aGUgU2hhZG93IERPTSBwb2x5ZmlsbClcbiAgICogaW1wbGVtZW50IFNoYWRvdyBET00gdjEuXG4gICAqL1xuICBjbGFzcyBTaGFkb3dUZW1wbGF0ZSBleHRlbmRzIGJhc2Uge1xuXG4gICAgLypcbiAgICAgKiBJZiB0aGUgY29tcG9uZW50IGRlZmluZXMgYSB0ZW1wbGF0ZSwgYSBzaGFkb3cgcm9vdCB3aWxsIGJlIGNyZWF0ZWQgb24gdGhlXG4gICAgICogY29tcG9uZW50IGluc3RhbmNlLCBhbmQgdGhlIHRlbXBsYXRlIHN0YW1wZWQgaW50byBpdC5cbiAgICAgKi9cbiAgICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG4gICAgICBsZXQgdGVtcGxhdGUgPSB0aGlzLnRlbXBsYXRlO1xuICAgICAgLy8gVE9ETzogU2F2ZSB0aGUgcHJvY2Vzc2VkIHRlbXBsYXRlIHdpdGggdGhlIGNvbXBvbmVudCdzIGNsYXNzIHByb3RvdHlwZVxuICAgICAgLy8gc28gaXQgZG9lc24ndCBuZWVkIHRvIGJlIHByb2Nlc3NlZCB3aXRoIGV2ZXJ5IGluc3RhbnRpYXRpb24uXG4gICAgICBpZiAodGVtcGxhdGUpIHtcblxuICAgICAgICBpZiAodHlwZW9mIHRlbXBsYXRlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIC8vIFVwZ3JhZGUgcGxhaW4gc3RyaW5nIHRvIHJlYWwgdGVtcGxhdGUuXG4gICAgICAgICAgdGVtcGxhdGUgPSBjcmVhdGVUZW1wbGF0ZVdpdGhJbm5lckhUTUwodGVtcGxhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFVTSU5HX1NIQURPV19ET01fVjApIHtcbiAgICAgICAgICBwb2x5ZmlsbFNsb3RXaXRoQ29udGVudCh0ZW1wbGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAod2luZG93LlNoYWRvd0RPTVBvbHlmaWxsKSB7XG4gICAgICAgICAgc2hpbVRlbXBsYXRlU3R5bGVzKHRlbXBsYXRlLCB0aGlzLmxvY2FsTmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0aGlzLmxvZyhcImNsb25pbmcgdGVtcGxhdGUgaW50byBzaGFkb3cgcm9vdFwiKTtcbiAgICAgICAgbGV0IHJvb3QgPSBVU0lOR19TSEFET1dfRE9NX1YwID9cbiAgICAgICAgICB0aGlzLmNyZWF0ZVNoYWRvd1Jvb3QoKSA6ICAgICAgICAgICAgIC8vIFNoYWRvdyBET00gdjBcbiAgICAgICAgICB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTsgIC8vIFNoYWRvdyBET00gdjFcbiAgICAgICAgbGV0IGNsb25lID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0ZW1wbGF0ZS5jb250ZW50LCB0cnVlKTtcbiAgICAgICAgcm9vdC5hcHBlbmRDaGlsZChjbG9uZSk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gU2hhZG93VGVtcGxhdGU7XG59O1xuXG5cbi8vIENvbnZlcnQgYSBwbGFpbiBzdHJpbmcgb2YgSFRNTCBpbnRvIGEgcmVhbCB0ZW1wbGF0ZSBlbGVtZW50LlxuZnVuY3Rpb24gY3JlYXRlVGVtcGxhdGVXaXRoSW5uZXJIVE1MKGlubmVySFRNTCkge1xuICBsZXQgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAvLyBSRVZJRVc6IElzIHRoZXJlIGFuIGVhc2llciB3YXkgdG8gZG8gdGhpcz9cbiAgLy8gV2UnZCBsaWtlIHRvIGp1c3Qgc2V0IGlubmVySFRNTCBvbiB0aGUgdGVtcGxhdGUgY29udGVudCwgYnV0IHNpbmNlIGl0J3NcbiAgLy8gYSBEb2N1bWVudEZyYWdtZW50LCB0aGF0IGRvZXNuJ3Qgd29yay5cbiAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuaW5uZXJIVE1MID0gaW5uZXJIVE1MO1xuICB3aGlsZSAoZGl2LmNoaWxkTm9kZXMubGVuZ3RoID4gMCkge1xuICAgIHRlbXBsYXRlLmNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2LmNoaWxkTm9kZXNbMF0pO1xuICB9XG4gIHJldHVybiB0ZW1wbGF0ZTtcbn1cblxuLy8gUmVwbGFjZSBvY2N1cmVuY2VzIG9mIHYxIHNsb3QgZWxlbWVudHMgd2l0aCB2MCBjb250ZW50IGVsZW1lbnRzLlxuLy8gVGhpcyBkb2VzIG5vdCB5ZXQgbWFwIG5hbWVkIHNsb3RzIHRvIGNvbnRlbnQgc2VsZWN0IGNsYXVzZXMuXG5mdW5jdGlvbiBwb2x5ZmlsbFNsb3RXaXRoQ29udGVudCh0ZW1wbGF0ZSkge1xuICBbXS5mb3JFYWNoLmNhbGwodGVtcGxhdGUuY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCdzbG90JyksIHNsb3RFbGVtZW50ID0+IHtcbiAgICBsZXQgY29udGVudEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjb250ZW50Jyk7XG4gICAgc2xvdEVsZW1lbnQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoY29udGVudEVsZW1lbnQsIHNsb3RFbGVtZW50KTtcbiAgfSk7XG59XG5cbi8vIEludm9rZSBiYXNpYyBzdHlsZSBzaGltbWluZyB3aXRoIFNoYWRvd0NTUy5cbmZ1bmN0aW9uIHNoaW1UZW1wbGF0ZVN0eWxlcyh0ZW1wbGF0ZSwgdGFnKSB7XG4gIHdpbmRvdy5XZWJDb21wb25lbnRzLlNoYWRvd0NTUy5zaGltU3R5bGluZyh0ZW1wbGF0ZS5jb250ZW50LCB0YWcpO1xufVxuIiwiaW1wb3J0IENvbXBvc2FibGUgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ29tcG9zYWJsZSc7XG5pbXBvcnQgU2hhZG93VGVtcGxhdGUgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2hhZG93VGVtcGxhdGUnO1xuaW1wb3J0IFNoYWRvd0VsZW1lbnRSZWZlcmVuY2VzIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NoYWRvd0VsZW1lbnRSZWZlcmVuY2VzJztcbmltcG9ydCBBdHRyaWJ1dGVNYXJzaGFsbGluZyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9BdHRyaWJ1dGVNYXJzaGFsbGluZyc7XG5pbXBvcnQgRGlzdHJpYnV0ZWRDaGlsZHJlbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXN0cmlidXRlZENoaWxkcmVuJztcblxuXG4vKipcbiAqIEEgc2FtcGxlIGdlbmVyYWwtcHVycG9zZSBiYXNlIGNsYXNzIGZvciBkZWZpbmluZyBjdXN0b20gZWxlbWVudHMgdGhhdCBtaXhlc1xuICogaW4gc29tZSBjb21tb24gZmVhdHVyZXM6IHRlbXBsYXRlIHN0YW1waW5nIGludG8gYSBzaGFkb3cgcm9vdCwgc2hhZG93IGVsZW1lbnRcbiAqIHJlZmVyZW5jZXMsIG1hcnNoYWxsaW5nIGF0dHJpYnV0ZXMgdG8gcHJvcGVydGllcywgYW5kIHJldHJpZXZpbmcgdGhlIGNoaWxkcmVuXG4gKiBkaXN0cmlidXRlZCB0byBhIGNvbXBvbmVudC5cbiAqXG4gKiBUaGlzIGJhc2UgY2xhc3MgaXMgbm90IHNwZWNpYWwgaW4gYW55IHdheSwgYW5kIGlzIGRlZmluZWQgb25seSBhcyBhXG4gKiBjb252ZW5pZW50IHNob3J0aGFuZCBmb3IgYXBwbHlpbmcgdGhlIG1peGlucyBsaXN0ZWQgYWJvdmUuIFlvdSBjYW4gdXNlIHRoaXNcbiAqIGNsYXNzIGFzIGEgYmFzZSBjbGFzcyBmb3IgeW91ciBvd24gZWxlbWVudHMsIG9yIGVhc2lseSBjcmVhdGUgeW91ciBvd24gYmFzZVxuICogY2xhc3MgYnkgYXBwbHlpbmcgdGhlIHNhbWUgc2V0IG9mIG1peGlucy5cbiAqXG4gKiBUaGUgRWxlbWVudEJhc2UgYmFzZSBjbGFzcyBkb2VzIG5vdCByZWdpc3RlciBpdHNlbGYgYXMgYSBjdXN0b20gZWxlbWVudCB3aXRoXG4gKiB0aGUgYnJvd3NlciwgYW5kIGhlbmNlIGNhbm5vdCBiZSBpbmRlcGVuZGVudGx5IGluc3RhbnRpYXRlZC5cbiAqL1xuY2xhc3MgRWxlbWVudEJhc2UgZXh0ZW5kcyBDb21wb3NhYmxlKEhUTUxFbGVtZW50KS5jb21wb3NlKFxuICBTaGFkb3dUZW1wbGF0ZSwgICAgICAgICAgLy8gYmVmb3JlIG5vZGUgZmluZGluZywgc28gc2hhZG93IHJvb3QgaXMgcG9wdWxhdGVkXG4gIFNoYWRvd0VsZW1lbnRSZWZlcmVuY2VzLCAvLyBiZWZvcmUgbWFyc2hhbGxpbmcsIHNvIHByb3BlcnRpZXMgY2FuIHVzZSByZWZzXG4gIEF0dHJpYnV0ZU1hcnNoYWxsaW5nLFxuICBEaXN0cmlidXRlZENoaWxkcmVuXG4pIHtcblxuICAvKlxuICAgKiBEZWJ1Z2dpbmcgdXRpbGl0eTogbG9ncyBhIG1lc3NhZ2UsIHByZWZpeGVkIGJ5IHRoZSBjb21wb25lbnQncyB0YWcuXG4gICAqL1xuICBsb2codGV4dCkge1xuICAgIGlmIChzdXBlci5sb2cpIHsgc3VwZXIubG9nKHRleHQpOyB9XG4gICAgY29uc29sZS5sb2coYCR7dGhpcy5sb2NhbE5hbWV9OiAke3RleHR9YCk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBFbGVtZW50QmFzZTtcbiIsImltcG9ydCBFbGVtZW50QmFzZSBmcm9tICcuLi8uLi9iYXNpYy1lbGVtZW50LWJhc2Uvc3JjL0VsZW1lbnRCYXNlJztcblxuXG4vLyBGZWF0dXJlIGRldGVjdGlvbiBmb3Igb2xkIFNoYWRvdyBET00gdjAuXG5jb25zdCBVU0lOR19TSEFET1dfRE9NX1YwID0gKHR5cGVvZiBIVE1MRWxlbWVudC5wcm90b3R5cGUuY3JlYXRlU2hhZG93Um9vdCAhPT0gJ3VuZGVmaW5lZCcpO1xuXG5cbi8qKlxuICogV3JhcHMgYSBzdGFuZGFyZCBIVE1MIGVsZW1lbnQgc28gdGhhdCB0aGUgc3RhbmRhcmQgYmVoYXZpb3IgY2FuIHRoZW4gYmVcbiAqIGV4dGVuZGVkLlxuICpcbiAqIFtMaXZlIGRlbW9dKGh0dHA6Ly9iYXNpY3dlYmNvbXBvbmVudHMub3JnL2Jhc2ljLXdlYi1jb21wb25lbnRzL3BhY2thZ2VzL2Jhc2ljLXdyYXBwZWQtc3RhbmRhcmQtZWxlbWVudC8pXG4gKlxuICogVGhlIEN1c3RvbSBFbGVtZW50cyBzcGVjIGRvZXMgbm90IGN1cnJlbnRseSAoYXMgb2YgTWFyY2ggMjAxNikgYWxsb3cgeW91IHRvXG4gKiBleHRlbmQgdGhlIGJlaGF2aW9yIG9mIGEgc3RhbmRhcmQgSFRNTCBlbGVtZW50IGxpa2UgYDxhPmAgb3IgYDxidXR0b24+YC5cbiAqIEFzIGEgcGFydGlhbCB3b3JrYXJvdW5kLCB0aGUgV3JhcHBlZFN0YW5kYXJkRWxlbWVudCBjbGFzcyBjYW4gY3JlYXRlIGEgY2xhc3NcbiAqIGZvciB5b3UgdGhhdCB3cmFwcyBhbiBpbnN0YW5jZSBvZiBhIHN0YW5kYXJkIEhUTUwgZWxlbWVudC4gRm9yIGV4YW1wbGUsIHRoZVxuICogY29kZSBiZWxvdyBjcmVhdGVzIGEgY2xhc3MgdGhhdCB3aWxsIHdyYXAgYW4gaW5zdGFuY2Ugb2YgYSBzdGFuZGFyZCBgPGE+YFxuICogZWxlbWVudDpcbiAqXG4gKiAgICAgY2xhc3MgV3JhcHBlZEEgZXh0ZW5kcyBXcmFwcGVkU3RhbmRhcmRFbGVtZW50LndyYXAoJ2EnKSB7XG4gKiAgICAgICBjdXN0b21NZXRob2QoKSB7IC4uLiB9XG4gKiAgICAgfVxuICogICAgIGRvY3VtZW50LnJlZ2lzdGVyRWxlbWVudCgnd3JhcHBlZC1hJywgV3JhcHBlZEEpO1xuICpcbiAqIEFuIGluc3RhbmNlIG9mIHRoZSByZXN1bHRpbmcgY2xhc3Mgd2lsbCBsb29rIHRvIHRoZSB1c2VyIGxpa2UgYW4gaW5zdGFuY2Ugb2ZcbiAqIHRoZSBzdGFuZGFyZCBlbGVtZW50IGNsYXNzIGl0IHdyYXBzLiBUaGUgcmVzdWx0aW5nIGNsYXNzIHdpbGwgKm5vdCogYmUgYW5cbiAqIGBpbnN0YW5jZW9mYCB0aGUgc3RhbmRhcmQgY2xhc3MgKGhlcmUsIEhUTUxBbmNob3JFbGVtZW50KS4gQW5vdGhlciBsaW1pdGF0aW9uXG4gKiBpcyB0aGF0IHRoZSByZXN1bHRpbmcgYDx3cmFwcGVkLWE+YCB3aWxsIG5vdCBhdXRvbWF0aWNhbGx5IHBpY2sgdXAgQ1NTIHN0eWxlc1xuICogZm9yIHN0YW5kYXJkIGA8YT5gIGVsZW1lbnRzLiBIb3dldmVyLCB0aGUgcmVzdWx0aW5nIGNsYXNzICpjYW4qIGJlIGV4dGVuZGVkLlxuICogRS5nLiwgaW5zdGFuY2VzIG9mIHRoZSBhYm92ZSBjbGFzcyBoYXZlIGEgYGN1c3RvbU1ldGhvZCgpYCBhdmFpbGFibGUgdG8gdGhlbS5cbiAqXG4gKiBBbnkgcHJvcGVydGllcyBkZWZpbmVkIGJ5IHRoZSBvcmlnaW5hbCBzdGFuZGFyZCBlbGVtZW50IHdpbGwgYmUgZXhwb3NlZCBvblxuICogdGhlIHJlc3VsdGluZyB3cmFwcGVyIGNsYXNzLCBhbmQgY2FsbHMgdG8gZ2V0IG9yIHNldCB0aG9zZSBwcm9wZXJ0aWVzIHdpbGwgYmVcbiAqIGRlbGVnYXRlZCB0byB0aGUgd3JhcHBlZCBlbGVtZW50IGluc3RhbmNlLiBDb250aW51aW5nIHRoZSBhYm92ZSBleGFtcGxlOlxuICpcbiAqICAgICBsZXQgd3JhcHBlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3dyYXBwZWQtYScpO1xuICogICAgIHdyYXBwZWQuaHJlZiA9ICdodHRwOi8vZXhhbXBsZS5jb20vJztcbiAqICAgICB3cmFwcGVkLnRleHRDb250ZW50ID0gJ0NsaWNrIGhlcmUnO1xuICpcbiAqIEhlcmUsIHRoZSBjcmVhdGVkIGN1c3RvbSBgPHdyYXBwZWQtYT5gIGVsZW1lbnQgd2lsbCBjb250YWluIGluc2lkZSBpdHNcbiAqIHNoYWRvdyB0cmVlIGFuIGluc3RhbmNlIG9mIGEgc3RhbmRhcmQgYDxhPmAgZWxlbWVudC4gVGhlIGNhbGwgdG8gc2V0IHRoZVxuICogd3JhcHBlcidzIGBocmVmYCBwcm9wZXJ0eSB3aWxsIHVsdGltYXRlbHkgc2V0IHRoZSBgaHJlZmAgb24gdGhlIGlubmVyIGxpbmsuXG4gKiBNb3Jlb3ZlciwgdGhlIHRleHQgY29udGVudCBvZiB0aGUgYDx3cmFwcGVkLWE+YCBlbGVtZW50IHdpbGwgYXBwZWFyIGluc2lkZVxuICogdGhlIGlubmVyIGxpbmsuIFRoZSByZXN1bHQgb2YgYWxsIHRoaXMgaXMgdGhhdCB0aGUgdXNlciB3aWxsIHNlZSB3aGF0ICpsb29rcypcbiAqIGxpa2UgYSBub3JtYWwgbGluaywganVzdCBhcyBpZiB5b3UgaGFkIHdyaXR0ZW5cbiAqIGA8YSBocmVmPVwiaHR0cDovL2V4YW1wbGUuY29tL1wiPkNsaWNrIGhlcmU8L2E+YC4gSG93ZXZlciwgdGhlIGFjdHVhbCBlbGVtZW50XG4gKiB3aWxsIGJlIGFuIGluc3RhbmNlIG9mIHlvdXIgY3VzdG9tIGNsYXNzLCB3aXRoIHdoYXRldmVyIGJlaGF2aW9yIHlvdSd2ZVxuICogZGVmaW5lZCBmb3IgaXQuXG4gKlxuICogV3JhcHBlZCBlbGVtZW50cyBzaG91bGQgcmFpc2UgdGhlIHNhbWUgZXZlbnRzIGFzIHRoZSBvcmlnaW5hbCBzdGFuZGFyZFxuICogZWxlbWVudHMuIEUuZy4sIGlmIHlvdSB3cmFwIGFuIGA8aW1nPmAgZWxlbWVudCwgdGhlIHdyYXBwZWQgcmVzdWx0IHdpbGwgcmFpc2VcbiAqIHRoZSBzdGFuZGFyZCBgbG9hZGAgZXZlbnQgYXMgZXhwZWN0ZWQuXG4gKlxuICogU29tZSBlbGVtZW50cywgc3VjaCBhcyBgPGJvZHk+YCwgYDxodG1sPmAsIGFuZCBgPHN0eWxlPmAgY2Fubm90IGJlIHdyYXBwZWRcbiAqIGFuZCBzdGlsbCBhY2hpZXZlIHRoZWlyIHN0YW5kYXJkIGJlaGF2aW9yLlxuICovXG5jbGFzcyBXcmFwcGVkU3RhbmRhcmRFbGVtZW50IGV4dGVuZHMgRWxlbWVudEJhc2Uge1xuXG4gIC8qKlxuICAgKiBBIGRlc2NyaXB0aW9uIGZvciB0aGUgdXNlciBvZiB0aGUgZWxlbWVudCdzIHB1cnBvc2Ugb24gdGhlIHBhZ2UuIFNldHRpbmdcbiAgICogdGhpcyBhcHBsaWVzIHRoZSBsYWJlbCB0byB0aGUgaW5uZXIgZWxlbWVudCwgZW5zdXJpbmcgdGhhdCBzY3JlZW4gcmVhZGVyc1xuICAgKiBhbmQgb3RoZXIgYXNzaXN0aXZlIHRlY2hub2xvZ2llcyB3aWxsIHByb3ZpZGUgYSBtZWFuaW5nZnVsIGRlc2NyaXB0aW9uIHRvXG4gICAqIHRoZSB1c2VyLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IGFyaWFMYWJlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbm5lci5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKTtcbiAgfVxuICBzZXQgYXJpYUxhYmVsKGxhYmVsKSB7XG4gICAgLy8gUHJvcGFnYXRlIHRoZSBBUklBIGxhYmVsIHRvIHRoZSBpbm5lciB0ZXh0YXJlYS5cbiAgICB0aGlzLmlubmVyLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIGxhYmVsKTtcbiAgfVxuXG5cbiAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cblxuICAgIC8vIExpc3RlbiBmb3IgYW55IGV2ZW50cyByYWlzZWQgYnkgdGhlIGlubmVyIGVsZW1lbnQgd2hpY2ggd2lsbCBub3RcbiAgICAvLyBhdXRvbWF0aWNhbGx5IGJlIHJldGFyZ2V0dGVkIGFjcm9zcyB0aGUgU2hhZG93IERPTSBib3VuZGFyeS5cbiAgICBsZXQgZXZlbnROYW1lcyA9IG5vblJldGFyZ2V0dGVkRXZlbnRzRm9yRWxlbWVudFt0aGlzLmV4dGVuZHNdIHx8IFtdO1xuICAgIGV2ZW50TmFtZXMuZm9yRWFjaChldmVudE5hbWUgPT4ge1xuICAgICAgdGhpcy5pbm5lci5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgcmVhbEV2ZW50ID0+IHtcbiAgICAgICAgbGV0IGV2ZW50ID0gbmV3IEV2ZW50KGV2ZW50TmFtZSwge1xuICAgICAgICAgIGJ1YmJsZXM6IGV2ZW50QnViYmxlc1tldmVudE5hbWVdIHx8IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgcmVmZXJlbmNlIHRvIHRoZSBpbm5lciBzdGFuZGFyZCBIVE1MIGVsZW1lbnQuXG4gICAqXG4gICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICovXG4gIGdldCBpbm5lcigpIHtcbiAgICByZXR1cm4gdGhpcy4kLmlubmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSBjb3BpZWQgaW50byB0aGUgc2hhZG93IHRyZWUgb2YgbmV3IGluc3RhbmNlcyBvZiB0aGlzIGVsZW1lbnQuXG4gICAqXG4gICAqIFRoZSBkZWZhdWx0IHZhbHVlIG9mIHRoaXMgcHJvcGVydHkgaXMgYSB0ZW1wbGF0ZSB0aGF0IGluY2x1ZGVzIGFuIGluc3RhbmNlXG4gICAqIHRoZSBzdGFuZGFyZCBlbGVtZW50IGJlaW5nIHdyYXBwZWQsIHdpdGggYSBgPHNsb3Q+YCBlbGVtZW50IGluc2lkZSB0aGF0XG4gICAqIHRvIHBpY2sgdXAgdGhlIGVsZW1lbnQncyBsaWdodCBET00gY29udGVudC4gRm9yIGV4YW1wbGUsIGlmIHlvdSB3cmFwIGFuXG4gICAqIGA8YT5gIGVsZW1lbnQsIHRoZW4gdGhlIHRlbXBsYXRlIHdpbGwgbG9vayBsaWtlOlxuICAgKlxuICAgKiAgICAgPHRlbXBsYXRlPlxuICAgKiAgICAgICA8YSBpZD1cImlubmVyXCI+XG4gICAqICAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgKiAgICAgICA8L2E+XG4gICAqICAgICA8L3RlbXBsYXRlPlxuICAgKlxuICAgKiBJZiB5b3UnZCBsaWtlIHRoZSB0ZW1wbGF0ZSB0byBpbmNsdWRlIG90aGVyIGVsZW1lbnRzLCB0aGVuIG92ZXJyaWRlIHRoaXNcbiAgICogcHJvcGVydHkgYW5kIHJldHVybiBhIHRlbXBsYXRlIG9mIHlvdXIgb3duLiBUaGUgdGVtcGxhdGUgc2hvdWxkIGluY2x1ZGUgYW5cbiAgICogaW5zdGFuY2Ugb2YgdGhlIHN0YW5kYXJkIEhUTUwgZWxlbWVudCB5b3UgYXJlIHdyYXBwaW5nLCBhbmQgdGhlIElEIG9mIHRoYXRcbiAgICogZWxlbWVudCBzaG91bGQgYmUgXCJpbm5lclwiLlxuICAgKlxuICAgKiBAdHlwZSB7KHN0cmluZ3xIVE1MVGVtcGxhdGVFbGVtZW50KX1cbiAgICovXG4gIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICAvLyBUT0RPOiBVc2Ugc2xvdCBpbnN0ZWFkIG9mIGNvbnRlbnQuXG4gICAgcmV0dXJuIGA8JHt0aGlzLmV4dGVuZHN9IGlkPVwiaW5uZXJcIj48Y29udGVudD48L2NvbnRlbnQ+PC8ke3RoaXMuZXh0ZW5kc31gO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBjbGFzcyB0aGF0IHdyYXBzIGEgc3RhbmRhcmQgSFRNTCBlbGVtZW50LlxuICAgKlxuICAgKiBOb3RlIHRoYXQgdGhlIHJlc3VsdGluZyBjbGFzcyBpcyBhIHN1YmNsYXNzIG9mIFdyYXBwZWRTdGFuZGFyZEVsZW1lbnQsIG5vdFxuICAgKiB0aGUgc3RhbmRhcmQgY2xhc3MgYmVpbmcgd3JhcHBlZC4gRS5nLiwgaWYgeW91IGNhbGxcbiAgICogYFdyYXBwZWRTdGFuZGFyZEVsZW1lbnQud3JhcCgnYScpYCwgeW91IHdpbGwgZ2V0IGEgY2xhc3Mgd2hvc2Ugc2hhZG93IHRyZWVcbiAgICogd2lsbCBpbmNsdWRlIGFuIGFuY2hvciBlbGVtZW50LCBidXQgdGhlIGNsYXNzIHdpbGwgKm5vdCogaW5oZXJpdCBmcm9tXG4gICAqIEhUTUxBbmNob3JFbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXh0ZW5kc1RhZyAtIHRoZSBzdGFuZGFyZCBIVE1MIGVsZW1lbnQgdGFnIHRvIGV4dGVuZFxuICAgKi9cbiAgc3RhdGljIHdyYXAoZXh0ZW5kc1RhZykge1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBuZXcgY2xhc3MuXG4gICAgY2xhc3MgV3JhcHBlZCBleHRlbmRzIFdyYXBwZWRTdGFuZGFyZEVsZW1lbnQge31cblxuICAgIC8vIEluZGljYXRlIHdoaWNoIHRhZyBpdCB3cmFwcy5cbiAgICBXcmFwcGVkLnByb3RvdHlwZS5leHRlbmRzID0gZXh0ZW5kc1RhZztcblxuICAgIC8vIENyZWF0ZSBnZXR0ZXIvc2V0dGVycyB0aGF0IGRlbGVnYXRlIHRvIHRoZSB3cmFwcGVkIGVsZW1lbnQuXG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGV4dGVuZHNUYWcpO1xuICAgIGxldCBleHRlbmRzUHJvdG90eXBlID0gZWxlbWVudC5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gICAgbGV0IG5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZXh0ZW5kc1Byb3RvdHlwZSk7XG4gICAgbmFtZXMuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgICAgbGV0IGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGV4dGVuZHNQcm90b3R5cGUsIG5hbWUpO1xuICAgICAgICBsZXQgZGVsZWdhdGUgPSBjcmVhdGVQcm9wZXJ0eURlbGVnYXRlKG5hbWUsIGRlc2NyaXB0b3IpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoV3JhcHBlZC5wcm90b3R5cGUsIG5hbWUsIGRlbGVnYXRlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBXcmFwcGVkO1xuICB9XG5cbn1cblxuXG4vKlxuICogRXZlbnRzIHdoaWNoIGFyZSBzcGVjJ2VkIHRvIE5PVCBnZXQgcmV0YXJnZXR0ZWQgYWNyb3NzIGEgU2hhZG93IERPTVxuICogYm91bmRhcnksIG9yZ2FuaXplZCBieSB3aGljaCBlbGVtZW50KHMpIHJhaXNlIHRoZSBldmVudHMuIFRvIHByb3Blcmx5XG4gKiBzaW11bGF0ZSB0aGVzZSwgd2Ugd2lsbCBuZWVkIHRvIGxpc3RlbiBmb3IgdGhlIHJlYWwgZXZlbnRzLCB0aGVuIHJlLXJhaXNlXG4gKiBhIHNpbXVsYXRpb24gb2YgdGhlIG9yaWdpbmFsIGV2ZW50LlxuICpcbiAqIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvc2hhZG93LWRvbS8jaC1ldmVudHMtdGhhdC1hcmUtbm90LWxlYWtlZC1pbnRvLWFuY2VzdG9yLXRyZWVzXG4gKlxuICogVGhlIGxpc3QgYmVsb3cgaXMgcmVhc29uYWJseSBjb21wbGV0ZS4gSXQgb21pdHMgZWxlbWVudHMgdGhhdCBjYW5ub3QgYmVcbiAqIHdyYXBwZWQgKHNlZSBjbGFzcyBub3RlcyBhYm92ZSkuIEFsc28sIHdlIGhhdmVuJ3QgYWN0dWFsbHkgdHJpZWQgd3JhcHBpbmdcbiAqIGV2ZXJ5IGVsZW1lbnQgaW4gdGhpcyBsaXN0OyBzb21lIG9mIHRoZSBtb3JlIG9ic2N1cmUgb25lcyBtaWdodCBub3QgYWN0dWFsbHlcbiAqIHdvcmsgYXMgZXhwZWN0ZWQsIGJ1dCBpdCB3YXMgZWFzaWVyIHRvIGluY2x1ZGUgdGhlbSBmb3IgY29tcGxldGVuZXNzIHRoYW5cbiAqIHRvIGFjdHVhbGx5IHZlcmlmeSB3aGV0aGVyIG9yIG5vdCB0aGUgZWxlbWVudCBjYW4gYmUgd3JhcHBlZC5cbiAqL1xuY29uc3Qgbm9uUmV0YXJnZXR0ZWRFdmVudHNGb3JFbGVtZW50ID0ge1xuICBhZGRyZXNzOiBbJ3Njcm9sbCddLFxuICBibG9ja3F1b3RlOiBbJ3Njcm9sbCddLFxuICBjYXB0aW9uOiBbJ3Njcm9sbCddLFxuICBjZW50ZXI6IFsnc2Nyb2xsJ10sXG4gIGRkOiBbJ3Njcm9sbCddLFxuICBkaXI6IFsnc2Nyb2xsJ10sXG4gIGRpdjogWydzY3JvbGwnXSxcbiAgZGw6IFsnc2Nyb2xsJ10sXG4gIGR0OiBbJ3Njcm9sbCddLFxuICBmaWVsZHNldDogWydzY3JvbGwnXSxcbiAgZm9ybTogWydyZXNldCcsICdzY3JvbGwnXSxcbiAgZnJhbWU6IFsnbG9hZCddLFxuICBoMTogWydzY3JvbGwnXSxcbiAgaDI6IFsnc2Nyb2xsJ10sXG4gIGgzOiBbJ3Njcm9sbCddLFxuICBoNDogWydzY3JvbGwnXSxcbiAgaDU6IFsnc2Nyb2xsJ10sXG4gIGg2OiBbJ3Njcm9sbCddLFxuICBpZnJhbWU6IFsnbG9hZCddLFxuICBpbWc6IFsnYWJvcnQnLCAnZXJyb3InLCAnbG9hZCddLFxuICBpbnB1dDogWydhYm9ydCcsICdjaGFuZ2UnLCAnZXJyb3InLCAnc2VsZWN0JywgJ2xvYWQnXSxcbiAga2V5Z2VuOiBbJ3Jlc2V0JywgJ3NlbGVjdCddLFxuICBsaTogWydzY3JvbGwnXSxcbiAgbGluazogWydsb2FkJ10sXG4gIG1lbnU6IFsnc2Nyb2xsJ10sXG4gIG9iamVjdDogWydlcnJvcicsICdzY3JvbGwnXSxcbiAgb2w6IFsnc2Nyb2xsJ10sXG4gIHA6IFsnc2Nyb2xsJ10sXG4gIHNjcmlwdDogWydlcnJvcicsICdsb2FkJ10sXG4gIHNlbGVjdDogWydjaGFuZ2UnLCAnc2Nyb2xsJ10sXG4gIHRib2R5OiBbJ3Njcm9sbCddLFxuICB0Zm9vdDogWydzY3JvbGwnXSxcbiAgdGhlYWQ6IFsnc2Nyb2xsJ10sXG4gIHRleHRhcmVhOiBbJ2NoYW5nZScsICdzZWxlY3QnLCAnc2Nyb2xsJ11cbn07XG5cblxuLy8gS2VlcCB0cmFjayBvZiB3aGljaCByZS1yYWlzZWQgZXZlbnRzIHNob3VsZCBidWJibGUuXG5jb25zdCBldmVudEJ1YmJsZXMgPSB7XG4gIGFib3J0OiB0cnVlLFxuICBjaGFuZ2U6IHRydWUsXG4gIHJlc2V0OiB0cnVlXG59O1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZVByb3BlcnR5RGVsZWdhdGUobmFtZSwgZGVzY3JpcHRvcikge1xuICBsZXQgZGVsZWdhdGUgPSB7XG4gICAgY29uZmlndXJhYmxlOiBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSxcbiAgICBlbnVtZXJhYmxlOiBkZXNjcmlwdG9yLmVudW1lcmFibGUsXG4gIH07XG4gIGlmIChkZXNjcmlwdG9yLmdldCkge1xuICAgIGRlbGVnYXRlLmdldCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW5uZXJbbmFtZV07XG4gICAgfVxuICB9XG4gIGlmIChkZXNjcmlwdG9yLnNldCkge1xuICAgIGRlbGVnYXRlLnNldCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICB0aGlzLmlubmVyW25hbWVdID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIGlmIChkZXNjcmlwdG9yLndyaXRhYmxlKSB7XG4gICAgZGVsZWdhdGUud3JpdGFibGUgPSBkZXNjcmlwdG9yLndyaXRhYmxlO1xuICB9XG4gIHJldHVybiBkZWxlZ2F0ZTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBXcmFwcGVkU3RhbmRhcmRFbGVtZW50O1xuIl19
