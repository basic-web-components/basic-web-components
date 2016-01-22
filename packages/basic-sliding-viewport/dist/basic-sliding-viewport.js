(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
 * @class AttributeMarshalling
 * @classdesc Mixin which marshalls attributes to properties (and eventually
 * vice versa)
 *
 * This only supports string properties for now.
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

},{}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class Composable
 * @classdesc Mixin to make a class more easily composable with other mixins
 *
 * The main contribution is the introduction of a `compose` method that applies
 * a set of mixin functions and returns the resulting new class. This sugar
 * can make the application of many mixins at once easier to read.
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

},{}],3:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class DistributedChildren
 * @classdesc Mixin which defines helpers for accessing a component's
 * distributed children as a flattened array or string.
 */

exports.default = function (base) {
  return function (_base) {
    _inherits(DistributedChildren, _base);

    function DistributedChildren() {
      _classCallCheck(this, DistributedChildren);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(DistributedChildren).apply(this, arguments));
    }

    _createClass(DistributedChildren, [{
      key: "distributedChildren",

      /*
       * Returns an in-order collection of children, expanding any content nodes.
       * Like the standard children property, this skips text nodes.
       *
       * TODO: This walks the whole content tree every time the list is requested.
       * It'd be nice to cache the answer and invalidate it only when content
       * actually changes.
       */
      get: function get() {
        return expandContentElements(this.children, false);
      }

      /*
       * Returns an in-order collection of child nodes, expanding any content nodes.
       * Like the standard childNodes property, this includes text nodes.
       */

    }, {
      key: "distributedChildNodes",
      get: function get() {
        return expandContentElements(this.childNodes, true);
      }

      /*
       * Returns the concatenated text content of all child nodes, expanding any
       * content nodes.
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

},{}],4:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class DistributedChildrenAsContent
 * @classdesc Mixin which defines a component's content as its children,
 * including any nodes distributed to the component's slots.
 */

exports.default = function (base) {
  return function (_base) {
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
       * @property content
       * @type Array
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
};

},{}],5:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _microtask = require('./lib/microtask');

var _microtask2 = _interopRequireDefault(_microtask);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class ObserveContentChanges
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @classdesc Wires up mutation observers to report any changes in a component's
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * content (direct children, or nodes distributed to slots).
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * For comparison, see Polymer's observeNodes API, which does solve the problem
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * of tracking changes in reprojected content.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

// TODO: Don't respond to changes in attributes, or at least offer that as an
// option.

exports.default = function (base) {
  return function (_base) {
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
        // This will invoke contentChanged() handlers in other mixins. In order that
        // those mixins have a chance to complete their own initialization, we add
        // the contentChanged() call to the microtask queue.
        (0, _microtask2.default)(function () {
          return _this2.contentChanged();
        });
      }
    }, {
      key: 'contentChanged',
      value: function contentChanged() {
        if (_get(Object.getPrototypeOf(ObserveContentChanges.prototype), 'contentChanged', this)) {
          _get(Object.getPrototypeOf(ObserveContentChanges.prototype), 'contentChanged', this).call(this);
        }
        var event = new CustomEvent('content-changed');
        this.dispatchEvent(event);
      }
    }]);

    return ObserveContentChanges;
  }(base);
};

// TODO: Decide whether we want an option to track changes to children
// attributes.

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

},{"./lib/microtask":8}],6:[function(require,module,exports){
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
 * @class ShadowElementReferences
 * @classdesc Mixin to create references to elements in a component's Shadow
 * DOM subtree
 *
 * This adds a member on the component called `$` that can be used to reference
 * shadow elements with IDs. E.g., if component's shadow contains an element
 * `<button id="foo">`, then this mixin will create a member `this.$.foo` that
 * points to that button. Such references simplify a component's access to its
 * own elements.
 *
 * This trades off a one-time cost of querying all elements in the shadow tree
 * against having to query for an element each time the component wants to
 * inspect or manipulate it.
 *
 * This mixin is inspired by Polymer's automatic node finding feature.
 * See https://www.polymer-project.org/1.0/docs/devguide/local-dom.html#node-finding.
 */

exports.default = function (base) {
  return function (_base) {
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
 * @class ShadowTemplate
 * @classdesc Mixin for stamping a template into a Shadow DOM subtree upon
 * component instantiation
 *
 * If a component defines a template property (as a string or referencing a HTML
 * template), when the component class is instantiated, a shadow root will be
 * created on the instance, and the contents of the template will be cloned into
 * the shadow root.
 *
 * For the time being, this extension retains support for Shadow DOM v0.
 * That will eventually be deprecated as browsers implement Shadow DOM v1.
 */

// Feature detection for old Shadow DOM v0.
var USING_SHADOW_DOM_V0 = typeof HTMLElement.prototype.createShadowRoot !== 'undefined';

exports.default = function (base) {
  return function (_base) {
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
 * @function microtask
 *
 * Adds a function to the microtask queue.
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
    console.log(callback);
    callback();
  }
}

// Create the observer.
var observer = new MutationObserver(executeCallbacks);
observer.observe(element, {
  characterData: true
});

},{}],9:[function(require,module,exports){
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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class ElementBase
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @classdesc A sample general-purpose base class for defining custom elements
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * that mixes in some common features: template stamping into a shadow root,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * shadow element references, marshalling attributes to properties, and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * retrieving the children distributed to a component.
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

},{"../../basic-component-mixins/src/AttributeMarshalling":1,"../../basic-component-mixins/src/Composable":2,"../../basic-component-mixins/src/DistributedChildren":3,"../../basic-component-mixins/src/ShadowElementReferences":6,"../../basic-component-mixins/src/ShadowTemplate":7}],10:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ElementBase = require('../../basic-element-base/src/ElementBase');

var _ElementBase2 = _interopRequireDefault(_ElementBase);

var _SpreadItems = require('../../basic-spread-items/src/SpreadItems');

var _SpreadItems2 = _interopRequireDefault(_SpreadItems);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class SlidingViewport
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @classdesc Presents list items in a viewport such that only a single item is
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * visible at a time
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Navigating between items will be represented with a horizontal visual
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * sliding effect.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This component handles the rendering responsibilities for the basic-carousel
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * component.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This component currently requires that you explicitly apply a size to it.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

// jshint ignore:line

var base = _ElementBase2.default;

var SlidingViewport = function (_base) {
  _inherits(SlidingViewport, _base);

  function SlidingViewport() {
    _classCallCheck(this, SlidingViewport);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(SlidingViewport).apply(this, arguments));
  }

  _createClass(SlidingViewport, [{
    key: 'attachedCallback',
    value: function attachedCallback() {
      if (_get(Object.getPrototypeOf(SlidingViewport.prototype), 'attachedCallback', this)) {
        _get(Object.getPrototypeOf(SlidingViewport.prototype), 'attachedCallback', this).call(this);
      }
      this.render();
    }
  }, {
    key: 'createdCallback',
    value: function createdCallback() {
      if (_get(Object.getPrototypeOf(SlidingViewport.prototype), 'createdCallback', this)) {
        _get(Object.getPrototypeOf(SlidingViewport.prototype), 'createdCallback', this).call(this);
      }
      this.classList.add('showTransition');
      this.position = 0;
    }
  }, {
    key: 'render',
    value: function render() {
      if (_get(Object.getPrototypeOf(SlidingViewport.prototype), 'render', this)) {
        _get(Object.getPrototypeOf(SlidingViewport.prototype), 'render', this).call(this);
      }
      requestAnimationFrame(renderSelection.bind(this));
    }

    /**
     * The fractional position of the element's moving surface while it is being
     * moved (dragged/scrolled/etc.).
     *
     * This is expressed as a fraction of the element's width. If the value is
     * positive, the surface is being moved to the left; if negative, the surface
     * is being moved to the right. E.g., a value of 0.5 indicates the surface has
     * moved half the element's width to the left.
     *
     * @property position
     * @type Number
     */

  }, {
    key: 'showTransition',
    value: function showTransition(show) {
      if (_get(Object.getPrototypeOf(SlidingViewport.prototype), 'showTransition', this)) {
        _get(Object.getPrototypeOf(SlidingViewport.prototype), 'showTransition', this).call(this, show);
      }
      this.classList.toggle('showTransition', show);
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
    key: 'position',
    get: function get() {
      return this._position;
    },
    set: function set(position) {
      if ('position' in base.prototype) {
        _set(Object.getPrototypeOf(SlidingViewport.prototype), 'position', position, this);
      }
      this._position = position;
      this.render();
    }
  }, {
    key: 'selectedIndex',
    get: function get() {
      var items = this.items;
      var index = items && items.indexOf(this.selectedItem);
      return index || -1;
    },
    set: function set(index) {
      if ('selectedIndex' in base.prototype) {
        _set(Object.getPrototypeOf(SlidingViewport.prototype), 'selectedIndex', index, this);
      }
      var item = this.items && this.items[index];
      if (item) {
        this.selectedItem = item;
      }
    }
  }, {
    key: 'selectedItem',
    get: function get() {
      return this._selectedItem;
    },
    set: function set(item) {
      if ('selectedItem' in base.prototype) {
        _set(Object.getPrototypeOf(SlidingViewport.prototype), 'selectedItem', item, this);
      }
      this._selectedItem = item;
      this.render();
    }
  }, {
    key: 'template',
    get: function get() {
      return '\n      <style>\n      :host {\n        display: block;\n        overflow: hidden;\n        position: relative;\n      }\n\n      #slidingContainer {\n        height: 100%;\n        position: absolute;\n        /*\n         Set width for IE/Edge. It\'s not clear why they need this, and the other\n         browsers don\'t.\n         */\n        width: 100%;\n        will-change: transform;\n      }\n\n      :host(.showTransition) #slidingContainer {\n        -webkit-transition: -webkit-transform 0.2s ease-out;\n        transition: transform 0.2s ease-out;\n      }\n      </style>\n\n      <basic-spread-items id="slidingContainer">\n        <slot></slot>\n      </basic-spread-items>\n    ';
    }
  }]);

  return SlidingViewport;
}(base);

exports.default = SlidingViewport;

function renderSelection() {

  var count = this.items && this.items.length;
  if (!count) {
    // Null or zero means we don't have items to render yet.
    return;
  }

  var index = this.selectedIndex;
  if (index < 0) {
    // No selection
    // return;
    index = 0;
  }

  var position = this.position || 0;
  var dampenedPosition = undefined;
  if (index === 0 && position < 0) {
    // Apply tension from the left edge.
    dampenedPosition = -damping(-position);
  } else if (index === count - 1 && position > 0) {
    // Apply tension from the right edge.
    dampenedPosition = damping(position);
  } else {
    // No damping required.
    dampenedPosition = position;
  }
  var fractionalIndex = index + dampenedPosition;
  // Use a percentage so the transform will still work if screen size changes
  // (e.g., if device orientation changes).
  var left = -fractionalIndex * 100;
  // let left = -(fractionalIndex / count) * 100;
  var transform = 'translateX(' + left + '%)';
  this.$.slidingContainer.style.webkitTransform = transform;
  this.$.slidingContainer.style.transform = transform;
}

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
function damping(x) {
  var y = -1 / (x + 1) + 1;
  return y;
}

document.registerElement('basic-sliding-viewport', SlidingViewport);

},{"../../basic-element-base/src/ElementBase":9,"../../basic-spread-items/src/SpreadItems":11}],11:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ElementBase = require('../../basic-element-base/src/ElementBase');

var _ElementBase2 = _interopRequireDefault(_ElementBase);

var _DistributedChildrenAsContent = require('../../basic-component-mixins/src/DistributedChildrenAsContent');

var _DistributedChildrenAsContent2 = _interopRequireDefault(_DistributedChildrenAsContent);

var _ObserveContentChanges = require('../../basic-component-mixins/src/ObserveContentChanges');

var _ObserveContentChanges2 = _interopRequireDefault(_ObserveContentChanges);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class SpreadItems
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @classdesc Spreads out a set of items horizontally so they take equal space
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This component is used, for example, by the basic-sliding-viewport component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * to ensure that children of different size will take up the same amount of
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * horizontal space.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This component currently requires an explicit size by applied to it.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @mixes DistributedChildrenAsContent
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var SpreadItems = function (_ElementBase$compose) {
  _inherits(SpreadItems, _ElementBase$compose);

  function SpreadItems() {
    _classCallCheck(this, SpreadItems);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(SpreadItems).apply(this, arguments));
  }

  _createClass(SpreadItems, [{
    key: 'attachedCallback',
    value: function attachedCallback() {
      if (_get(Object.getPrototypeOf(SpreadItems.prototype), 'attachedCallback', this)) {
        _get(Object.getPrototypeOf(SpreadItems.prototype), 'attachedCallback', this).call(this);
      }
      // HACK
      this.itemsChanged();
    }
  }, {
    key: 'itemsChanged',

    // TODO: Should also handle contentChanged(), but need to rationalize with
    // invocation of itemsChanged in attachedCallback.
    value: function itemsChanged() {
      if (_get(Object.getPrototypeOf(SpreadItems.prototype), 'itemsChanged', this)) {
        _get(Object.getPrototypeOf(SpreadItems.prototype), 'itemsChanged', this).call(this);
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
    key: 'template',
    get: function get() {
      return '\n      <style>\n      :host {\n        display: block;\n      }\n\n      #spreadContainer {\n        display: -webkit-flex;\n        display: flex;\n        height: 100%;\n        position: relative;\n      }\n\n      #spreadContainer ::content > * {\n        object-fit: contain;\n        object-fit: var(--basic-item-object-fit, contain);\n        touch-action: none;\n        height: 100%;\n        -webkit-user-drag: none;\n        -moz-user-select: none;\n        user-select: none;\n      }\n      </style>\n\n      <div id="spreadContainer">\n        <slot></slot>\n      </div>\n    ';
    }
  }]);

  return SpreadItems;
}(_ElementBase2.default.compose(_DistributedChildrenAsContent2.default, _ObserveContentChanges2.default));

exports.default = SpreadItems;

document.registerElement('basic-spread-items', SpreadItems);

},{"../../basic-component-mixins/src/DistributedChildrenAsContent":4,"../../basic-component-mixins/src/ObserveContentChanges":5,"../../basic-element-base/src/ElementBase":9}]},{},[10])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9BdHRyaWJ1dGVNYXJzaGFsbGluZy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NvbXBvc2FibGUuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXN0cmlidXRlZENoaWxkcmVuLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudC5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL09ic2VydmVDb250ZW50Q2hhbmdlcy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NoYWRvd0VsZW1lbnRSZWZlcmVuY2VzLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2hhZG93VGVtcGxhdGUuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9saWIvbWljcm90YXNrLmpzIiwicGFja2FnZXMvYmFzaWMtZWxlbWVudC1iYXNlL3NyYy9FbGVtZW50QmFzZS5qcyIsInBhY2thZ2VzL2Jhc2ljLXNsaWRpbmctdmlld3BvcnQvc3JjL1NsaWRpbmdWaWV3cG9ydC5qcyIsInBhY2thZ2VzL2Jhc2ljLXNwcmVhZC1pdGVtcy9zcmMvU3ByZWFkSXRlbXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDU2UsVUFBQyxJQUFJOztjQUFXLG9CQUFvQjs7YUFBcEIsb0JBQW9COzRCQUFwQixvQkFBb0I7O29FQUFwQixvQkFBb0I7OztpQkFBcEIsb0JBQW9COzs7Ozs7K0NBS3hCLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFO0FBQ2pELHVDQU4yQixvQkFBb0IsZ0RBTVg7QUFBRSxxQ0FOWCxvQkFBb0IsMERBTXdCO1NBQUU7OztBQUFBLEFBR3pFLFlBQUksWUFBWSxHQUFHLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2pELFlBQUksWUFBWSxJQUFJLElBQUksSUFBSSxFQUFFLFlBQVksSUFBSSxXQUFXLENBQUMsU0FBUyxDQUFBLEFBQUMsRUFBRTtBQUNwRSxjQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsUUFBUSxDQUFDO1NBQy9CO09BQ0Y7Ozt3Q0FFaUI7OztBQUNoQix1Q0FoQjJCLG9CQUFvQix1Q0FnQnBCO0FBQUUscUNBaEJGLG9CQUFvQixpREFnQk07U0FBRTtBQUN2RCxVQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFVBQUEsU0FBUyxFQUFJO0FBQzVDLGlCQUFLLHdCQUF3QixDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzRSxDQUFDLENBQUM7T0FDSjs7O1dBcEI0QixvQkFBb0I7SUFBUyxJQUFJO0NBc0IvRDs7OztBQUlELFNBQVMsdUJBQXVCLENBQUMsYUFBYSxFQUFFO0FBQzlDLE1BQUksWUFBWSxHQUFHLGFBQWEsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLFVBQUEsQ0FBQztXQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUU7R0FBQSxDQUFDLENBQUM7QUFDL0UsU0FBTyxZQUFZLENBQUM7Q0FDckI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDNUJjLFVBQUMsSUFBSTs7Y0FBVyxVQUFVOzthQUFWLFVBQVU7NEJBQVYsVUFBVTs7b0VBQVYsVUFBVTs7O2lCQUFWLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dDQXlCYjswQ0FBUixNQUFNO0FBQU4sZ0JBQU07Ozs7Ozs7QUFLdEIsZUFBTyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztPQUMxQzs7O1dBL0I0QixVQUFVO0lBQVMsSUFBSTtDQWlDckQ7Ozs7QUFJRCxJQUFNLDZCQUE2QixHQUFHLENBQ3BDLGFBQWEsQ0FDZDs7Ozs7OztBQUFDLEFBT0YsU0FBUyxZQUFZLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRTtBQUNqQyxNQUFJLE9BQU8sS0FBSyxLQUFLLFVBQVUsRUFBRTs7QUFFL0IsV0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7R0FDcEIsTUFBTTs7O1FBRUMsUUFBUTtnQkFBUixRQUFROztlQUFSLFFBQVE7OEJBQVIsUUFBUTs7c0VBQVIsUUFBUTs7O2FBQVIsUUFBUTtNQUFTLElBQUk7O0FBQzNCLHFCQUFpQixDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsU0FBUyxFQUFFLDZCQUE2QixDQUFDLENBQUM7QUFDNUUsV0FBTyxRQUFRLENBQUM7R0FDakI7Q0FDRjs7Ozs7O0FBQUEsQUFPRCxTQUFTLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQTRCO01BQTFCLG1CQUFtQix5REFBRyxFQUFFOztBQUNqRSxRQUFNLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSSxFQUFJO0FBQ2pELFFBQUksbUJBQW1CLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUN6QyxVQUFJLFVBQVUsR0FBRyxNQUFNLENBQUMsd0JBQXdCLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQy9ELFlBQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztLQUNqRDtHQUNGLENBQUMsQ0FBQztBQUNILFNBQU8sTUFBTSxDQUFDO0NBQ2Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDMUVjLFVBQUMsSUFBSTs7Y0FBVyxtQkFBbUI7O2FBQW5CLG1CQUFtQjs0QkFBbkIsbUJBQW1COztvRUFBbkIsbUJBQW1COzs7aUJBQW5CLG1CQUFtQjs7Ozs7Ozs7Ozs7MEJBVXRCO0FBQ3hCLGVBQU8scUJBQXFCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztPQUNwRDs7Ozs7Ozs7OzBCQU0yQjtBQUMxQixlQUFPLHFCQUFxQixDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7T0FDckQ7Ozs7Ozs7OzswQkFNNEI7QUFDM0IsWUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxVQUFTLEtBQUssRUFBRTtBQUMzRCxpQkFBTyxLQUFLLENBQUMsV0FBVyxDQUFDO1NBQzFCLENBQUMsQ0FBQztBQUNILGVBQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztPQUN6Qjs7O1dBL0I0QixtQkFBbUI7SUFBUyxJQUFJO0NBaUM5RDs7Ozs7Ozs7Ozs7O0FBWUQsU0FBUyxxQkFBcUIsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLEVBQUU7OztBQUN0RCxNQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFVBQUEsSUFBSSxFQUFJOzs7OztBQUtyRCxRQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLFNBQVMsS0FBSyxNQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUEsQUFBQyxFQUFFOztBQUVqRixVQUFJLGdCQUFnQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0FBQ2xELGFBQU8sZ0JBQWdCLEdBQ3JCLHFCQUFxQixDQUFDLGdCQUFnQixFQUFFLGdCQUFnQixDQUFDLEdBQ3pELEVBQUUsQ0FBQztLQUNOLE1BQU0sSUFBSSxJQUFJLFlBQVksV0FBVyxFQUFFOztBQUV0QyxhQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZixNQUFNLElBQUksSUFBSSxZQUFZLElBQUksSUFBSSxnQkFBZ0IsRUFBRTs7QUFFbkQsYUFBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2YsTUFBTTs7QUFFTCxhQUFPLEVBQUUsQ0FBQztLQUNYO0dBQ0YsQ0FBQyxDQUFDO0FBQ0gsTUFBSSxTQUFTLEdBQUcsUUFBQSxFQUFFLEVBQUMsTUFBTSxNQUFBLDBCQUFJLFFBQVEsRUFBQyxDQUFDO0FBQ3ZDLFNBQU8sU0FBUyxDQUFDO0NBQ2xCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQ3RFYyxVQUFDLElBQUk7O2NBQVcsNEJBQTRCOzthQUE1Qiw0QkFBNEI7NEJBQTVCLDRCQUE0Qjs7b0VBQTVCLDRCQUE0Qjs7O2lCQUE1Qiw0QkFBNEI7Ozs7Ozs7Ozs7MEJBUzNDO0FBQ1osZUFBTyxJQUFJLENBQUMsbUJBQW1CLENBQUM7T0FDakM7d0JBQ1csS0FBSyxFQUFFO0FBQ2pCLFlBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7QUFBRSxxQ0FiUiw0QkFBNEIsd0JBYUosS0FBSyxRQUFDO1NBQUU7T0FDNUQ7OztXQWQ0Qiw0QkFBNEI7SUFBUyxJQUFJO0NBZ0J2RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDRWMsVUFBQyxJQUFJOztjQUFXLHFCQUFxQjs7YUFBckIscUJBQXFCOzRCQUFyQixxQkFBcUI7O29FQUFyQixxQkFBcUI7OztpQkFBckIscUJBQXFCOzt3Q0FFaEM7OztBQUNoQix1Q0FIMkIscUJBQXFCLHVDQUdyQjtBQUFFLHFDQUhGLHFCQUFxQixpREFHSztTQUFFO0FBQ3ZELDZCQUFxQixDQUFDLElBQUksQ0FBQzs7Ozs7Ozs7QUFBQyxBQVE1QixpQ0FBVTtpQkFBTSxPQUFLLGNBQWMsRUFBRTtTQUFBLENBQUMsQ0FBQztPQUN4Qzs7O3VDQUVnQjtBQUNmLHVDQWhCMkIscUJBQXFCLHNDQWdCdEI7QUFBRSxxQ0FoQkQscUJBQXFCLGdEQWdCRztTQUFFO0FBQ3JELFlBQUksS0FBSyxHQUFHLElBQUksV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDL0MsWUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztPQUMzQjs7O1dBbkI0QixxQkFBcUI7SUFBUyxJQUFJO0NBcUJoRTs7Ozs7QUFLRCxTQUFTLHFCQUFxQixDQUFDLE9BQU8sRUFBRTtBQUN0QyxTQUFPLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQztXQUNwRCxPQUFPLENBQUMsY0FBYyxFQUFFO0dBQUEsQ0FDekIsQ0FBQztBQUNGLFNBQU8sQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFOztBQUU5QyxpQkFBYSxFQUFFLElBQUk7QUFDbkIsYUFBUyxFQUFFLElBQUk7QUFDZixXQUFPLEVBQUUsSUFBSTtHQUNkLENBQUMsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkN6Q2MsVUFBQyxJQUFJOztjQUFXLHVCQUF1Qjs7YUFBdkIsdUJBQXVCOzRCQUF2Qix1QkFBdUI7O29FQUF2Qix1QkFBdUI7OztpQkFBdkIsdUJBQXVCOzt3Q0FFbEM7OztBQUNoQix1Q0FIMkIsdUJBQXVCLHVDQUd2QjtBQUFFLHFDQUhGLHVCQUF1QixpREFHRztTQUFFO0FBQ3ZELFlBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtBQUNuQixjQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUNaLGNBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDNUQsWUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFVBQUEsSUFBSSxFQUFJO0FBQ3BDLGdCQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2pDLG1CQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUM7V0FDbkIsQ0FBQyxDQUFDO1NBQ0o7T0FDRjs7O1dBWjRCLHVCQUF1QjtJQUFTLElBQUk7Q0FjbEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkQsSUFBTSxtQkFBbUIsR0FBSSxPQUFPLFdBQVcsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEtBQUssV0FBVyxBQUFDLENBQUM7O2tCQUc3RSxVQUFDLElBQUk7O2NBQVcsY0FBYzs7YUFBZCxjQUFjOzRCQUFkLGNBQWM7O29FQUFkLGNBQWM7OztpQkFBZCxjQUFjOzs7Ozs7O3dDQU16QjtBQUNoQix1Q0FQMkIsY0FBYyx1Q0FPZDtBQUFFLHFDQVBGLGNBQWMsaURBT1k7U0FBRTtBQUN2RCxZQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUTs7O0FBQUMsQUFHN0IsWUFBSSxRQUFRLEVBQUU7O0FBRVosY0FBSSxPQUFPLFFBQVEsS0FBSyxRQUFRLEVBQUU7O0FBRWhDLG9CQUFRLEdBQUcsMkJBQTJCLENBQUMsUUFBUSxDQUFDLENBQUM7V0FDbEQ7O0FBRUQsY0FBSSxtQkFBbUIsRUFBRTtBQUN2QixtQ0FBdUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztXQUNuQzs7QUFFRCxjQUFJLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRTtBQUM1Qiw4QkFBa0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1dBQzlDOzs7QUFBQSxBQUdELGNBQUksSUFBSSxHQUFHLG1CQUFtQixHQUM1QixJQUFJLENBQUMsZ0JBQWdCLEVBQUU7QUFDdkIsY0FBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQztBQUFDLEFBQ3RDLGNBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztBQUN4RCxjQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3pCO09BQ0Y7OztXQWpDNEIsY0FBYztJQUFTLElBQUk7Q0FtQ3pEOzs7O0FBSUQsU0FBUywyQkFBMkIsQ0FBQyxTQUFTLEVBQUU7QUFDOUMsTUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUM7Ozs7QUFBQyxBQUlsRCxNQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3hDLEtBQUcsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0FBQzFCLFNBQU8sR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQ2hDLFlBQVEsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztHQUNqRDtBQUNELFNBQU8sUUFBUSxDQUFDO0NBQ2pCOzs7O0FBQUEsQUFJRCxTQUFTLHVCQUF1QixDQUFDLFFBQVEsRUFBRTtBQUN6QyxJQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLFVBQUEsV0FBVyxFQUFJO0FBQ3hFLFFBQUksY0FBYyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDdkQsZUFBVyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0dBQ2xFLENBQUMsQ0FBQztDQUNKOzs7QUFBQSxBQUdELFNBQVMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxRQUFNLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztDQUNuRTs7Ozs7Ozs7a0JDckR1QixTQUFTOzs7Ozs7Ozs7Ozs7Ozs7O0FBZGpDLElBQUksU0FBUyxHQUFHLEVBQUU7OztBQUFDLEFBR25CLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDOzs7QUFBQyxBQUcxQyxJQUFJLE9BQU8sR0FBRyxDQUFDOzs7Ozs7O0FBQUMsQUFRRCxTQUFTLFNBQVMsQ0FBQyxRQUFRLEVBQUU7QUFDMUMsV0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7O0FBQUMsQUFFekIsU0FBTyxDQUFDLFdBQVcsR0FBRyxFQUFFLE9BQU8sQ0FBQztDQUNqQzs7O0FBQUEsQUFJRCxTQUFTLGdCQUFnQixHQUFHO0FBQzFCLFNBQU8sU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7QUFDM0IsUUFBSSxRQUFRLEdBQUcsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2pDLFdBQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDdEIsWUFBUSxFQUFFLENBQUM7R0FDWjtDQUNGOzs7QUFBQSxBQUlELElBQUksUUFBUSxHQUFHLElBQUksZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUN0RCxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRTtBQUN4QixlQUFhLEVBQUUsSUFBSTtDQUNwQixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUMzQmtCLFdBQVc7WUFBWCxXQUFXOztXQUFYLFdBQVc7MEJBQVgsV0FBVzs7a0VBQVgsV0FBVzs7O2VBQVgsV0FBVzs7Ozs7O3dCQVUxQixJQUFJLEVBQUU7QUFDUixxQ0FYaUIsV0FBVywyQkFXYjtBQUFFLG1DQVhBLFdBQVcscUNBV0QsSUFBSSxFQUFFO09BQUU7QUFDbkMsYUFBTyxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsU0FBUyxVQUFLLElBQUksQ0FBRyxDQUFDO0tBQzNDOzs7U0Fia0IsV0FBVztFQUFTLDBCQUFXLFdBQVcsQ0FBQyxDQUFDLE9BQU87OzhEQUt2RTs7a0JBTG9CLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05oQyxJQUFJLElBQUksd0JBQWMsQ0FBQzs7SUFFRixlQUFlO1lBQWYsZUFBZTs7V0FBZixlQUFlOzBCQUFmLGVBQWU7O2tFQUFmLGVBQWU7OztlQUFmLGVBQWU7O3VDQUVmO0FBQ2pCLHFDQUhpQixlQUFlLHdDQUdKO0FBQUUsbUNBSGIsZUFBZSxrREFHdUI7T0FBRTtBQUN6RCxVQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7S0FDZjs7O3NDQUVpQjtBQUNoQixxQ0FSaUIsZUFBZSx1Q0FRTDtBQUFFLG1DQVJaLGVBQWUsaURBUXFCO09BQUU7QUFDdkQsVUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUNyQyxVQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztLQUNuQjs7OzZCQVVRO0FBQ1AscUNBdEJpQixlQUFlLDhCQXNCZDtBQUFFLG1DQXRCSCxlQUFlLHdDQXNCRztPQUFFO0FBQ3JDLDJCQUFxQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztLQUNuRDs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBNkNjLElBQUksRUFBRTtBQUNuQixxQ0F0RWlCLGVBQWUsc0NBc0VOO0FBQUUsbUNBdEVYLGVBQWUsZ0RBc0VpQixJQUFJLEVBQUU7T0FBRTtBQUN6RCxVQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUMvQzs7O3dCQTNEYTtBQUNaLGFBQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUM7S0FDeEM7Ozt3QkFFVztBQUNWLGFBQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7S0FDdEM7Ozt3QkFtQmM7QUFDYixhQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7S0FDdkI7c0JBQ1ksUUFBUSxFQUFFO0FBQ3JCLFVBQUksVUFBVSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7QUFBRSxtQ0ExQ25CLGVBQWUseUJBMENxQixRQUFRLFFBQUM7T0FBRTtBQUNoRSxVQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztBQUMxQixVQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7S0FDZjs7O3dCQUVtQjtBQUNsQixVQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQ3ZCLFVBQUksS0FBSyxHQUFHLEtBQUssSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN0RCxhQUFPLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztLQUNwQjtzQkFDaUIsS0FBSyxFQUFFO0FBQ3ZCLFVBQUksZUFBZSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7QUFBRSxtQ0FyRHhCLGVBQWUsOEJBcUQrQixLQUFLLFFBQUM7T0FBRTtBQUN2RSxVQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDM0MsVUFBSSxJQUFJLEVBQUU7QUFDUixZQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztPQUMxQjtLQUNGOzs7d0JBRWtCO0FBQ2pCLGFBQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztLQUMzQjtzQkFDZ0IsSUFBSSxFQUFFO0FBQ3JCLFVBQUksY0FBYyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7QUFBRSxtQ0FoRXZCLGVBQWUsNkJBZ0U2QixJQUFJLFFBQUM7T0FBRTtBQUNwRSxVQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztBQUMxQixVQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7S0FDZjs7O3dCQU9jO0FBQ2IsdXNCQTRCRTtLQUNIOzs7U0F4R2tCLGVBQWU7RUFBUyxJQUFJOztrQkFBNUIsZUFBZTs7QUE2R3BDLFNBQVMsZUFBZSxHQUFHOztBQUV6QixNQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO0FBQzVDLE1BQUksQ0FBQyxLQUFLLEVBQUU7O0FBRVYsV0FBTztHQUNSOztBQUVELE1BQUksS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7QUFDL0IsTUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFOzs7QUFHYixTQUFLLEdBQUcsQ0FBQyxDQUFDO0dBQ1g7O0FBRUQsTUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUM7QUFDbEMsTUFBSSxnQkFBZ0IsWUFBQSxDQUFDO0FBQ3JCLE1BQUksS0FBSyxLQUFLLENBQUMsSUFBSSxRQUFRLEdBQUcsQ0FBQyxFQUFFOztBQUUvQixvQkFBZ0IsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0dBQ3hDLE1BQU0sSUFBSSxLQUFLLEtBQUssS0FBSyxHQUFHLENBQUMsSUFBSSxRQUFRLEdBQUcsQ0FBQyxFQUFFOztBQUU5QyxvQkFBZ0IsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7R0FDdEMsTUFBTTs7QUFFTCxvQkFBZ0IsR0FBRyxRQUFRLENBQUM7R0FDN0I7QUFDRCxNQUFJLGVBQWUsR0FBRyxLQUFLLEdBQUcsZ0JBQWdCOzs7QUFBQyxBQUcvQyxNQUFJLElBQUksR0FBRyxDQUFDLGVBQWUsR0FBRyxHQUFHOztBQUFDLEFBRWxDLE1BQUksU0FBUyxHQUFHLGFBQWEsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQzVDLE1BQUksQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7QUFDMUQsTUFBSSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztDQUNyRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQWtCRCxTQUFTLE9BQU8sQ0FBQyxDQUFDLEVBQUU7QUFDbEIsTUFBSSxDQUFDLEdBQUcsQUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBLEFBQUMsR0FBSSxDQUFDLENBQUM7QUFDM0IsU0FBTyxDQUFDLENBQUM7Q0FDVjs7QUFHRCxRQUFRLENBQUMsZUFBZSxDQUFDLHdCQUF3QixFQUFFLGVBQWUsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQzFLL0MsV0FBVztZQUFYLFdBQVc7O1dBQVgsV0FBVzswQkFBWCxXQUFXOztrRUFBWCxXQUFXOzs7ZUFBWCxXQUFXOzt1Q0FLWDtBQUNqQixxQ0FOaUIsV0FBVyx3Q0FNQTtBQUFFLG1DQU5iLFdBQVcsa0RBTTJCO09BQUU7O0FBQUEsQUFFekQsVUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0tBQ3JCOzs7Ozs7bUNBUWM7QUFDYixxQ0FsQmlCLFdBQVcsb0NBa0JKO0FBQUUsbUNBbEJULFdBQVcsOENBa0JtQjtPQUFFO0FBQ2pELFVBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDdkIsVUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztBQUN6QixVQUFJLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEFBQUMsS0FBSyxHQUFHLEdBQUcsR0FBSSxHQUFHLENBQUM7QUFDekQsVUFBSSxTQUFTLEdBQUcsQUFBQyxHQUFHLEdBQUcsS0FBSyxHQUFJLEdBQUcsQ0FBQztBQUNwQyxRQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsVUFBQSxJQUFJLEVBQUk7QUFDN0IsWUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO09BQzlCLENBQUMsQ0FBQztLQUNKOzs7d0JBZlc7QUFDVixhQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7S0FDckI7Ozt3QkFlYztBQUNiLGdtQkEyQkU7S0FDSDs7O1NBekRrQixXQUFXO0VBQVMsc0JBQVksT0FBTyx5RUFHM0Q7O2tCQUhvQixXQUFXOztBQThEaEMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxvQkFBb0IsRUFBRSxXQUFXLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcbiAqIEBjbGFzcyBBdHRyaWJ1dGVNYXJzaGFsbGluZ1xuICogQGNsYXNzZGVzYyBNaXhpbiB3aGljaCBtYXJzaGFsbHMgYXR0cmlidXRlcyB0byBwcm9wZXJ0aWVzIChhbmQgZXZlbnR1YWxseVxuICogdmljZSB2ZXJzYSlcbiAqXG4gKiBUaGlzIG9ubHkgc3VwcG9ydHMgc3RyaW5nIHByb3BlcnRpZXMgZm9yIG5vdy5cbiAqL1xuXG5cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiBjbGFzcyBBdHRyaWJ1dGVNYXJzaGFsbGluZyBleHRlbmRzIGJhc2Uge1xuXG4gIC8qXG4gICAqIEhhbmRsZSBhIGNoYW5nZSB0byB0aGUgYXR0cmlidXRlIHdpdGggdGhlIGdpdmVuIG5hbWUuXG4gICAqL1xuICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG4gICAgaWYgKHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjaykgeyBzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soKTsgfVxuICAgIC8vIElmIHRoZSBhdHRyaWJ1dGUgbmFtZSBjb3JyZXNwb25kcyB0byBhIHByb3BlcnR5IG5hbWUsIHRoZW4gc2V0IHRoYXRcbiAgICAvLyBwcm9wZXJ0eS4gSWdub3JlIGNoYW5nZXMgaW4gc3RhbmRhcmQgSFRNTEVsZW1lbnQgcHJvcGVydGllcy5cbiAgICBsZXQgcHJvcGVydHlOYW1lID0gYXR0cmlidXRlVG9Qcm9wZXJ0eU5hbWUobmFtZSk7XG4gICAgaWYgKHByb3BlcnR5TmFtZSBpbiB0aGlzICYmICEocHJvcGVydHlOYW1lIGluIEhUTUxFbGVtZW50LnByb3RvdHlwZSkpIHtcbiAgICAgIHRoaXNbcHJvcGVydHlOYW1lXSA9IG5ld1ZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG4gICAgW10uZm9yRWFjaC5jYWxsKHRoaXMuYXR0cmlidXRlcywgYXR0cmlidXRlID0+IHtcbiAgICAgIHRoaXMuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKGF0dHJpYnV0ZS5uYW1lLCB1bmRlZmluZWQsIGF0dHJpYnV0ZS52YWx1ZSk7XG4gICAgfSk7XG4gIH1cblxufTtcblxuXG4vLyBDb252ZXJ0IGNhbWVsIGNhc2UgZm9vQmFyIG5hbWUgdG8gaHlwaGVuYXRlZCBmb28tYmFyLlxuZnVuY3Rpb24gYXR0cmlidXRlVG9Qcm9wZXJ0eU5hbWUoYXR0cmlidXRlTmFtZSkge1xuICBsZXQgcHJvcGVydHlOYW1lID0gYXR0cmlidXRlTmFtZS5yZXBsYWNlKC8tKFthLXpdKS9nLCBtID0+IG1bMV0udG9VcHBlckNhc2UoKSk7XG4gIHJldHVybiBwcm9wZXJ0eU5hbWU7XG59XG5cbi8vIENvbnZlcnQgaHlwaGVuYXRlZCBmb28tYmFyIG5hbWUgdG8gY2FtZWwgY2FzZSBmb29CYXIuXG4vLyBUT0RPOiBVc2UgdGhpcyB3aGVuIHdlIHN1cHBvcnQgcmVmbGVjdGlvbiBvZiBwcm9wZXJ0aWVzIHRvIGF0dHJpYnV0ZXMuXG4vLyBmdW5jdGlvbiBwcm9wZXJ0eVRvQXR0cmlidXRlTmFtZShwcm9wZXJ0eU5hbWUpIHtcbi8vICAgbGV0IGF0dHJpYnV0ZU5hbWUgPSBwcm9wZXJ0eU5hbWUucmVwbGFjZSgvKFthLXpdW0EtWl0pL2csIGcgPT4gZ1swXSArICctJyArIGdbMV0udG9Mb3dlckNhc2UoKSk7XG4vLyAgIHJldHVybiBhdHRyaWJ1dGVOYW1lO1xuLy8gfVxuIiwiLyoqXG4gKiBAY2xhc3MgQ29tcG9zYWJsZVxuICogQGNsYXNzZGVzYyBNaXhpbiB0byBtYWtlIGEgY2xhc3MgbW9yZSBlYXNpbHkgY29tcG9zYWJsZSB3aXRoIG90aGVyIG1peGluc1xuICpcbiAqIFRoZSBtYWluIGNvbnRyaWJ1dGlvbiBpcyB0aGUgaW50cm9kdWN0aW9uIG9mIGEgYGNvbXBvc2VgIG1ldGhvZCB0aGF0IGFwcGxpZXNcbiAqIGEgc2V0IG9mIG1peGluIGZ1bmN0aW9ucyBhbmQgcmV0dXJucyB0aGUgcmVzdWx0aW5nIG5ldyBjbGFzcy4gVGhpcyBzdWdhclxuICogY2FuIG1ha2UgdGhlIGFwcGxpY2F0aW9uIG9mIG1hbnkgbWl4aW5zIGF0IG9uY2UgZWFzaWVyIHRvIHJlYWQuXG4gKi9cblxuXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4gY2xhc3MgQ29tcG9zYWJsZSBleHRlbmRzIGJhc2Uge1xuXG4gIC8qKlxuICAgKiBBcHBseSBhIHNldCBvZiBtaXhpbiBmdW5jdGlvbnMgb3IgbWl4aW4gb2JqZWN0cyB0byB0aGUgcHJlc2VudCBjbGFzcyBhbmRcbiAgICogcmV0dXJuIHRoZSBuZXcgY2xhc3MuXG4gICAqXG4gICAqIEEgY2FsbCBsaWtlXG4gICAqXG4gICAqICAgICBsZXQgTXlDbGFzcyA9IE1peGluMShNaXhpbjIoTWl4aW4zKE1peGluNChNaXhpbjUoQmFzZUNsYXNzKSkpKSk7XG4gICAqXG4gICAqIENhbiBiZSBjb252ZXJ0ZWQgdG86XG4gICAqXG4gICAqICAgICBsZXQgTXlDbGFzcyA9IENvbXBvc2FibGUoQmFzZUNsYXNzKS5jb21wb3NlKFxuICAgKiAgICAgICBNaXhpbjEsXG4gICAqICAgICAgIE1peGluMixcbiAgICogICAgICAgTWl4aW4zLFxuICAgKiAgICAgICBNaXhpbjQsXG4gICAqICAgICAgIE1peGluNVxuICAgKiAgICAgKTtcbiAgICpcbiAgICogVGhpcyBmdW5jdGlvbiBjYW4gYWxzbyB0YWtlIG1peGluIG9iamVjdHMuIEEgbWl4aW4gb2JqZWN0IGlzIGp1c3QgYVxuICAgKiBzaG9ydGhhbmQgZm9yIGEgbWl4aW4gZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGEgbmV3IHN1YmNsYXNzIHdpdGggdGhlIGdpdmVuXG4gICAqIG1lbWJlcnMuIFRoZSBtaXhpbiBvYmplY3QncyBtZW1iZXJzIGFyZSAqbm90KiBjb3BpZWQgZGlyZWN0bHkgb250byB0aGVcbiAgICogcHJvdG90eXBlIG9mIHRoZSBiYXNlIGNsYXNzLCBhcyB3aXRoIHRyYWRpdGlvbmFsIG1peGlucy5cbiAgICovXG4gIHN0YXRpYyBjb21wb3NlKC4uLm1peGlucykge1xuICAgIC8vIFdlIGNyZWF0ZSBhIG5ldyBzdWJjbGFzcyBmb3IgZWFjaCBtaXhpbiBpbiB0dXJuLiBUaGUgcmVzdWx0IGJlY29tZXNcbiAgICAvLyB0aGUgYmFzZSBjbGFzcyBleHRlbmRlZCBieSBhbnkgc3Vic2VxdWVudCBtaXhpbnMuIEl0IHR1cm5zIG91dCB0aGF0XG4gICAgLy8gd2UgY2FuIHVzZSBBcnJheS5yZWR1Y2UoKSB0byBjb25jaXNlbHkgZXhwcmVzcyB0aGlzLCB1c2luZyB0aGUgY3VycmVudFxuICAgIC8vIG9iamVjdCBhcyB0aGUgc2VlZCBmb3IgcmVkdWNlKCkuXG4gICAgcmV0dXJuIG1peGlucy5yZWR1Y2UoY29tcG9zZUNsYXNzLCB0aGlzKTtcbiAgfVxuXG59O1xuXG5cbi8vIFByb3BlcnRpZXMgZGVmaW5lZCBieSBPYmplY3QgdGhhdCB3ZSBkb24ndCB3YW50IHRvIG1peGluLlxuY29uc3QgTk9OX01JWEFCTEVfT0JKRUNUX1BST1BFUlRJRVMgPSBbXG4gICdjb25zdHJ1Y3Rvcidcbl07XG5cbi8qXG4gKiBBcHBseSB0aGUgbWl4aW4gdG8gdGhlIGdpdmVuIGJhc2UgY2xhc3MgdG8gcmV0dXJuIGEgbmV3IGNsYXNzLlxuICogVGhlIG1peGluIGNhbiBlaXRoZXIgYmUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIG1vZGlmaWVkIGNsYXNzLCBvciBhXG4gKiBwbGFpbiBvYmplY3Qgd2hvc2UgbWVtYmVycyB3aWxsIGJlIGNvcGllZCB0byB0aGUgbmV3IGNsYXNzJyBwcm90b3R5cGUuXG4gKi9cbmZ1bmN0aW9uIGNvbXBvc2VDbGFzcyhiYXNlLCBtaXhpbikge1xuICBpZiAodHlwZW9mIG1peGluID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gTWl4aW4gZnVuY3Rpb25cbiAgICByZXR1cm4gbWl4aW4oYmFzZSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gTWl4aW4gb2JqZWN0XG4gICAgY2xhc3MgU3ViY2xhc3MgZXh0ZW5kcyBiYXNlIHt9XG4gICAgY29weU93blByb3BlcnRpZXMobWl4aW4sIFN1YmNsYXNzLnByb3RvdHlwZSwgTk9OX01JWEFCTEVfT0JKRUNUX1BST1BFUlRJRVMpO1xuICAgIHJldHVybiBTdWJjbGFzcztcbiAgfVxufVxuXG5cbi8qXG4gKiBDb3B5IHRoZSBnaXZlbiBwcm9wZXJ0aWVzL21ldGhvZHMgdG8gdGhlIHRhcmdldC5cbiAqIFJldHVybiB0aGUgdXBkYXRlZCB0YXJnZXQuXG4gKi9cbmZ1bmN0aW9uIGNvcHlPd25Qcm9wZXJ0aWVzKHNvdXJjZSwgdGFyZ2V0LCBpZ25vcmVQcm9wZXJ0eU5hbWVzID0gW10pIHtcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoc291cmNlKS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgIGlmIChpZ25vcmVQcm9wZXJ0eU5hbWVzLmluZGV4T2YobmFtZSkgPCAwKSB7XG4gICAgICBsZXQgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBuYW1lKTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB0YXJnZXQ7XG59XG4iLCIvKipcbiAqIEBjbGFzcyBEaXN0cmlidXRlZENoaWxkcmVuXG4gKiBAY2xhc3NkZXNjIE1peGluIHdoaWNoIGRlZmluZXMgaGVscGVycyBmb3IgYWNjZXNzaW5nIGEgY29tcG9uZW50J3NcbiAqIGRpc3RyaWJ1dGVkIGNoaWxkcmVuIGFzIGEgZmxhdHRlbmVkIGFycmF5IG9yIHN0cmluZy5cbiAqL1xuXG5cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiBjbGFzcyBEaXN0cmlidXRlZENoaWxkcmVuIGV4dGVuZHMgYmFzZSB7XG5cbiAgLypcbiAgICogUmV0dXJucyBhbiBpbi1vcmRlciBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuLCBleHBhbmRpbmcgYW55IGNvbnRlbnQgbm9kZXMuXG4gICAqIExpa2UgdGhlIHN0YW5kYXJkIGNoaWxkcmVuIHByb3BlcnR5LCB0aGlzIHNraXBzIHRleHQgbm9kZXMuXG4gICAqXG4gICAqIFRPRE86IFRoaXMgd2Fsa3MgdGhlIHdob2xlIGNvbnRlbnQgdHJlZSBldmVyeSB0aW1lIHRoZSBsaXN0IGlzIHJlcXVlc3RlZC5cbiAgICogSXQnZCBiZSBuaWNlIHRvIGNhY2hlIHRoZSBhbnN3ZXIgYW5kIGludmFsaWRhdGUgaXQgb25seSB3aGVuIGNvbnRlbnRcbiAgICogYWN0dWFsbHkgY2hhbmdlcy5cbiAgICovXG4gIGdldCBkaXN0cmlidXRlZENoaWxkcmVuKCkge1xuICAgIHJldHVybiBleHBhbmRDb250ZW50RWxlbWVudHModGhpcy5jaGlsZHJlbiwgZmFsc2UpO1xuICB9XG5cbiAgLypcbiAgICogUmV0dXJucyBhbiBpbi1vcmRlciBjb2xsZWN0aW9uIG9mIGNoaWxkIG5vZGVzLCBleHBhbmRpbmcgYW55IGNvbnRlbnQgbm9kZXMuXG4gICAqIExpa2UgdGhlIHN0YW5kYXJkIGNoaWxkTm9kZXMgcHJvcGVydHksIHRoaXMgaW5jbHVkZXMgdGV4dCBub2Rlcy5cbiAgICovXG4gIGdldCBkaXN0cmlidXRlZENoaWxkTm9kZXMoKSB7XG4gICAgcmV0dXJuIGV4cGFuZENvbnRlbnRFbGVtZW50cyh0aGlzLmNoaWxkTm9kZXMsIHRydWUpO1xuICB9XG5cbiAgLypcbiAgICogUmV0dXJucyB0aGUgY29uY2F0ZW5hdGVkIHRleHQgY29udGVudCBvZiBhbGwgY2hpbGQgbm9kZXMsIGV4cGFuZGluZyBhbnlcbiAgICogY29udGVudCBub2Rlcy5cbiAgICovXG4gIGdldCBkaXN0cmlidXRlZFRleHRDb250ZW50KCkge1xuICAgIGxldCBzdHJpbmdzID0gdGhpcy5kaXN0cmlidXRlZENoaWxkTm9kZXMubWFwKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICByZXR1cm4gY2hpbGQudGV4dENvbnRlbnQ7XG4gICAgfSk7XG4gICAgcmV0dXJuIHN0cmluZ3Muam9pbignJyk7XG4gIH1cblxufTtcblxuXG4vKlxuICogR2l2ZW4gYSBhcnJheSBvZiBub2RlcywgcmV0dXJuIGEgbmV3IGFycmF5IHdpdGggYW55IGNvbnRlbnQgZWxlbWVudHMgZXhwYW5kZWRcbiAqIHRvIHRoZSBub2RlcyBkaXN0cmlidXRlZCB0byB0aGF0IGNvbnRlbnQgZWxlbWVudC4gVGhpcyBydWxlIGlzIGFwcGxpZWRcbiAqIHJlY3Vyc2l2ZWx5LlxuICpcbiAqIElmIGluY2x1ZGVUZXh0Tm9kZXMgaXMgdHJ1ZSwgdGV4dCBub2RlcyB3aWxsIGJlIGluY2x1ZGVkLCBhcyBpbiB0aGVcbiAqIHN0YW5kYXJkIGNoaWxkTm9kZXMgcHJvcGVydHk7IGJ5IGRlZmF1bHQsIHRoaXMgc2tpcHMgdGV4dCBub2RlcywgbGlrZSB0aGVcbiAqIHN0YW5kYXJkIGNoaWxkcmVuIHByb3BlcnR5LlxuICovXG5mdW5jdGlvbiBleHBhbmRDb250ZW50RWxlbWVudHMobm9kZXMsIGluY2x1ZGVUZXh0Tm9kZXMpIHtcbiAgbGV0IGV4cGFuZGVkID0gQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKG5vZGVzLCBub2RlID0+IHtcbiAgICAvLyBXZSB3YW50IHRvIHNlZSBpZiB0aGUgbm9kZSBpcyBhbiBpbnN0YW5jZW9mIEhUTUxTbG90RUxlbWVudCwgYnV0XG4gICAgLy8gdGhhdCBjbGFzcyB3b24ndCBleGlzdCBpZiB0aGUgYnJvd3NlciB0aGF0IGRvZXNuJ3Qgc3VwcG9ydCBuYXRpdmVcbiAgICAvLyBTaGFkb3cgRE9NIGFuZCBpZiB0aGUgU2hhZG93IERPTSBwb2x5ZmlsbCBoYXNuJ3QgYmVlbiBsb2FkZWQuIEluc3RlYWQsXG4gICAgLy8gd2UgZG8gYSBzaW1wbGlzdGljIGNoZWNrIHRvIHNlZSBpZiB0aGUgdGFnIG5hbWUgaXMgXCJzbG90XCIgb3IgXCJjb250ZW50XCIuXG4gICAgaWYgKG5vZGUubG9jYWxOYW1lICYmIChub2RlLmxvY2FsTmFtZSA9PT0gXCJzbG90XCIgfHwgbm9kZS5sb2NhbE5hbWUgPT09IFwiY29udGVudFwiKSkge1xuICAgICAgLy8gY29udGVudCBlbGVtZW50OyB1c2UgaXRzIGRpc3RyaWJ1dGVkIG5vZGVzIGluc3RlYWQuXG4gICAgICBsZXQgZGlzdHJpYnV0ZWROb2RlcyA9IG5vZGUuZ2V0RGlzdHJpYnV0ZWROb2RlcygpO1xuICAgICAgcmV0dXJuIGRpc3RyaWJ1dGVkTm9kZXMgP1xuICAgICAgICBleHBhbmRDb250ZW50RWxlbWVudHMoZGlzdHJpYnV0ZWROb2RlcywgaW5jbHVkZVRleHROb2RlcykgOlxuICAgICAgICBbXTtcbiAgICB9IGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgLy8gUGxhaW4gZWxlbWVudDsgdXNlIGFzIGlzLlxuICAgICAgcmV0dXJuIFtub2RlXTtcbiAgICB9IGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBUZXh0ICYmIGluY2x1ZGVUZXh0Tm9kZXMpIHtcbiAgICAgIC8vIFRleHQgbm9kZS5cbiAgICAgIHJldHVybiBbbm9kZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIENvbW1lbnQsIHByb2Nlc3NpbmcgaW5zdHJ1Y3Rpb24sIGV0Yy47IHNraXAuXG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9KTtcbiAgbGV0IGZsYXR0ZW5lZCA9IFtdLmNvbmNhdCguLi5leHBhbmRlZCk7XG4gIHJldHVybiBmbGF0dGVuZWQ7XG59XG4iLCIvKipcbiAqIEBjbGFzcyBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50XG4gKiBAY2xhc3NkZXNjIE1peGluIHdoaWNoIGRlZmluZXMgYSBjb21wb25lbnQncyBjb250ZW50IGFzIGl0cyBjaGlsZHJlbixcbiAqIGluY2x1ZGluZyBhbnkgbm9kZXMgZGlzdHJpYnV0ZWQgdG8gdGhlIGNvbXBvbmVudCdzIHNsb3RzLlxuICovXG5cblxuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IGNsYXNzIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQgZXh0ZW5kcyBiYXNlIHtcblxuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhpcyBjb21wb25lbnQsIGRlZmluZWQgdG8gYmUgdGhlIGZsYXR0ZW5lZCBhcnJheSBvZlxuICAgKiBjaGlsZHJlbiBkaXN0cmlidXRlZCB0byB0aGUgY29tcG9uZW50LlxuICAgKlxuICAgKiBAcHJvcGVydHkgY29udGVudFxuICAgKiBAdHlwZSBBcnJheVxuICAgKi9cbiAgZ2V0IGNvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzdHJpYnV0ZWRDaGlsZHJlbjtcbiAgfVxuICBzZXQgY29udGVudCh2YWx1ZSkge1xuICAgIGlmICgnY29udGVudCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuY29udGVudCA9IHZhbHVlOyB9XG4gIH1cblxufTtcbiIsIi8qKlxuICogQGNsYXNzIE9ic2VydmVDb250ZW50Q2hhbmdlc1xuICogQGNsYXNzZGVzYyBXaXJlcyB1cCBtdXRhdGlvbiBvYnNlcnZlcnMgdG8gcmVwb3J0IGFueSBjaGFuZ2VzIGluIGEgY29tcG9uZW50J3NcbiAqIGNvbnRlbnQgKGRpcmVjdCBjaGlsZHJlbiwgb3Igbm9kZXMgZGlzdHJpYnV0ZWQgdG8gc2xvdHMpLlxuICpcbiAqIEZvciB0aGUgdGltZSBiZWluZywgdGhpcyBjYW4gb25seSBzdXBwb3J0IGEgc2luZ2xlIGxldmVsIG9mIGRpc3RyaWJ1dGVkXG4gKiBjb250ZW50LiBUaGF0IGlzLCBpZiBhIGNvbXBvbmVudCBjb250YWlucyBhIHNsb3QsIGFuZCB0aGUgc2V0IG9mIG5vZGVzXG4gKiBkaXJlY3RseSBhc3NpZ25lZCB0byB0aGF0IHNsb3QgY2hhbmdlcywgdGhlbiB0aGlzIG1peGluIHdpbGwgZGV0ZWN0IHRoZVxuICogY2hhbmdlLiBIb3dldmVyLCB0aGlzIG1peGluIGRvZXMgbm90IHlldCBkZXRlY3QgY2hhbmdlcyBpbiByZXByb2plY3RlZFxuICogbm9kZXMuIElmIGEgY29tcG9uZW50J3MgaG9zdCBwbGFjZXMgYSBzbG90IGFzIGEgY2hpbGQgb2YgdGhlIGNvbXBvbmVudFxuICogaW5zdGFuY2UsIG5vZGVzIGFzc2lnbmVkIHRvIHRoZSBvdXRlciBob3N0IHdpbGwgYmUgYXNzaWduZWQgdG8gdGhlIGhvc3Qnc1xuICogc2xvdCwgdGhlbiByZWFzc2lnbmVkIHRvIHRoZSBzbG90IGVsZW1lbnQgaW5zaWRlIHRoZSBjb21wb25lbnQuIENoYW5nZXMgaW5cbiAqIHN1Y2ggcmVwcm9qZWN0ZWQgbm9kZXMgd2lsbCBub3QgKHlldCkgYmUgZGV0ZWN0ZWQgYnkgdGhpcyBtaXhpbi5cbiAqXG4gKiBGb3IgY29tcGFyaXNvbiwgc2VlIFBvbHltZXIncyBvYnNlcnZlTm9kZXMgQVBJLCB3aGljaCBkb2VzIHNvbHZlIHRoZSBwcm9ibGVtXG4gKiBvZiB0cmFja2luZyBjaGFuZ2VzIGluIHJlcHJvamVjdGVkIGNvbnRlbnQuXG4gKi9cblxuXG5pbXBvcnQgbWljcm90YXNrIGZyb20gJy4vbGliL21pY3JvdGFzayc7XG5cblxuLy8gVE9ETzogRG9uJ3QgcmVzcG9uZCB0byBjaGFuZ2VzIGluIGF0dHJpYnV0ZXMsIG9yIGF0IGxlYXN0IG9mZmVyIHRoYXQgYXMgYW5cbi8vIG9wdGlvbi5cblxuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IGNsYXNzIE9ic2VydmVDb250ZW50Q2hhbmdlcyBleHRlbmRzIGJhc2Uge1xuXG4gIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG4gICAgb2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzKHRoaXMpO1xuXG4gICAgLy8gTWFrZSBhbiBpbml0aWFsIGNhbGwgdG8gY29udGVudENoYW5nZWQoKSBzbyB0aGF0IHRoZSBjb21wb25lbnQgY2FuIGRvXG4gICAgLy8gaW5pdGlhbGl6YXRpb24gdGhhdCBpdCBub3JtYWxseSBkb2VzIHdoZW4gY29udGVudCBjaGFuZ2VzLlxuICAgIC8vXG4gICAgLy8gVGhpcyB3aWxsIGludm9rZSBjb250ZW50Q2hhbmdlZCgpIGhhbmRsZXJzIGluIG90aGVyIG1peGlucy4gSW4gb3JkZXIgdGhhdFxuICAgIC8vIHRob3NlIG1peGlucyBoYXZlIGEgY2hhbmNlIHRvIGNvbXBsZXRlIHRoZWlyIG93biBpbml0aWFsaXphdGlvbiwgd2UgYWRkXG4gICAgLy8gdGhlIGNvbnRlbnRDaGFuZ2VkKCkgY2FsbCB0byB0aGUgbWljcm90YXNrIHF1ZXVlLlxuICAgIG1pY3JvdGFzaygoKSA9PiB0aGlzLmNvbnRlbnRDaGFuZ2VkKCkpO1xuICB9XG5cbiAgY29udGVudENoYW5nZWQoKSB7XG4gICAgaWYgKHN1cGVyLmNvbnRlbnRDaGFuZ2VkKSB7IHN1cGVyLmNvbnRlbnRDaGFuZ2VkKCk7IH1cbiAgICBsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2NvbnRlbnQtY2hhbmdlZCcpO1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gIH1cblxufTtcblxuXG4vLyBUT0RPOiBEZWNpZGUgd2hldGhlciB3ZSB3YW50IGFuIG9wdGlvbiB0byB0cmFjayBjaGFuZ2VzIHRvIGNoaWxkcmVuXG4vLyBhdHRyaWJ1dGVzLlxuZnVuY3Rpb24gb2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzKGVsZW1lbnQpIHtcbiAgZWxlbWVudC5fY29udGVudENoYW5nZU9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT5cbiAgICBlbGVtZW50LmNvbnRlbnRDaGFuZ2VkKClcbiAgKTtcbiAgZWxlbWVudC5fY29udGVudENoYW5nZU9ic2VydmVyLm9ic2VydmUoZWxlbWVudCwge1xuICAgIC8vIGF0dHJpYnV0ZXM6IHRydWUsXG4gICAgY2hhcmFjdGVyRGF0YTogdHJ1ZSxcbiAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgc3VidHJlZTogdHJ1ZVxuICB9KTtcbn1cbiIsIi8qKlxuICogQGNsYXNzIFNoYWRvd0VsZW1lbnRSZWZlcmVuY2VzXG4gKiBAY2xhc3NkZXNjIE1peGluIHRvIGNyZWF0ZSByZWZlcmVuY2VzIHRvIGVsZW1lbnRzIGluIGEgY29tcG9uZW50J3MgU2hhZG93XG4gKiBET00gc3VidHJlZVxuICpcbiAqIFRoaXMgYWRkcyBhIG1lbWJlciBvbiB0aGUgY29tcG9uZW50IGNhbGxlZCBgJGAgdGhhdCBjYW4gYmUgdXNlZCB0byByZWZlcmVuY2VcbiAqIHNoYWRvdyBlbGVtZW50cyB3aXRoIElEcy4gRS5nLiwgaWYgY29tcG9uZW50J3Mgc2hhZG93IGNvbnRhaW5zIGFuIGVsZW1lbnRcbiAqIGA8YnV0dG9uIGlkPVwiZm9vXCI+YCwgdGhlbiB0aGlzIG1peGluIHdpbGwgY3JlYXRlIGEgbWVtYmVyIGB0aGlzLiQuZm9vYCB0aGF0XG4gKiBwb2ludHMgdG8gdGhhdCBidXR0b24uIFN1Y2ggcmVmZXJlbmNlcyBzaW1wbGlmeSBhIGNvbXBvbmVudCdzIGFjY2VzcyB0byBpdHNcbiAqIG93biBlbGVtZW50cy5cbiAqXG4gKiBUaGlzIHRyYWRlcyBvZmYgYSBvbmUtdGltZSBjb3N0IG9mIHF1ZXJ5aW5nIGFsbCBlbGVtZW50cyBpbiB0aGUgc2hhZG93IHRyZWVcbiAqIGFnYWluc3QgaGF2aW5nIHRvIHF1ZXJ5IGZvciBhbiBlbGVtZW50IGVhY2ggdGltZSB0aGUgY29tcG9uZW50IHdhbnRzIHRvXG4gKiBpbnNwZWN0IG9yIG1hbmlwdWxhdGUgaXQuXG4gKlxuICogVGhpcyBtaXhpbiBpcyBpbnNwaXJlZCBieSBQb2x5bWVyJ3MgYXV0b21hdGljIG5vZGUgZmluZGluZyBmZWF0dXJlLlxuICogU2VlIGh0dHBzOi8vd3d3LnBvbHltZXItcHJvamVjdC5vcmcvMS4wL2RvY3MvZGV2Z3VpZGUvbG9jYWwtZG9tLmh0bWwjbm9kZS1maW5kaW5nLlxuICovXG5cblxuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IGNsYXNzIFNoYWRvd0VsZW1lbnRSZWZlcmVuY2VzIGV4dGVuZHMgYmFzZSB7XG5cbiAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cbiAgICBpZiAodGhpcy5zaGFkb3dSb290KSB7XG4gICAgICB0aGlzLiQgPSB7fTtcbiAgICAgIGxldCBub2Rlc1dpdGhJZHMgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvckFsbCgnW2lkXScpO1xuICAgICAgW10uZm9yRWFjaC5jYWxsKG5vZGVzV2l0aElkcywgbm9kZSA9PiB7XG4gICAgICAgIGxldCBpZCA9IG5vZGUuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgICAgICB0aGlzLiRbaWRdID0gbm9kZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG59O1xuIiwiLyoqXG4gKiBAY2xhc3MgU2hhZG93VGVtcGxhdGVcbiAqIEBjbGFzc2Rlc2MgTWl4aW4gZm9yIHN0YW1waW5nIGEgdGVtcGxhdGUgaW50byBhIFNoYWRvdyBET00gc3VidHJlZSB1cG9uXG4gKiBjb21wb25lbnQgaW5zdGFudGlhdGlvblxuICpcbiAqIElmIGEgY29tcG9uZW50IGRlZmluZXMgYSB0ZW1wbGF0ZSBwcm9wZXJ0eSAoYXMgYSBzdHJpbmcgb3IgcmVmZXJlbmNpbmcgYSBIVE1MXG4gKiB0ZW1wbGF0ZSksIHdoZW4gdGhlIGNvbXBvbmVudCBjbGFzcyBpcyBpbnN0YW50aWF0ZWQsIGEgc2hhZG93IHJvb3Qgd2lsbCBiZVxuICogY3JlYXRlZCBvbiB0aGUgaW5zdGFuY2UsIGFuZCB0aGUgY29udGVudHMgb2YgdGhlIHRlbXBsYXRlIHdpbGwgYmUgY2xvbmVkIGludG9cbiAqIHRoZSBzaGFkb3cgcm9vdC5cbiAqXG4gKiBGb3IgdGhlIHRpbWUgYmVpbmcsIHRoaXMgZXh0ZW5zaW9uIHJldGFpbnMgc3VwcG9ydCBmb3IgU2hhZG93IERPTSB2MC5cbiAqIFRoYXQgd2lsbCBldmVudHVhbGx5IGJlIGRlcHJlY2F0ZWQgYXMgYnJvd3NlcnMgaW1wbGVtZW50IFNoYWRvdyBET00gdjEuXG4gKi9cblxuXG4vLyBGZWF0dXJlIGRldGVjdGlvbiBmb3Igb2xkIFNoYWRvdyBET00gdjAuXG5jb25zdCBVU0lOR19TSEFET1dfRE9NX1YwID0gKHR5cGVvZiBIVE1MRWxlbWVudC5wcm90b3R5cGUuY3JlYXRlU2hhZG93Um9vdCAhPT0gJ3VuZGVmaW5lZCcpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiBjbGFzcyBTaGFkb3dUZW1wbGF0ZSBleHRlbmRzIGJhc2Uge1xuXG4gIC8qXG4gICAqIElmIHRoZSBjb21wb25lbnQgZGVmaW5lcyBhIHRlbXBsYXRlLCBhIHNoYWRvdyByb290IHdpbGwgYmUgY3JlYXRlZCBvbiB0aGVcbiAgICogY29tcG9uZW50IGluc3RhbmNlLCBhbmQgdGhlIHRlbXBsYXRlIHN0YW1wZWQgaW50byBpdC5cbiAgICovXG4gIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG4gICAgbGV0IHRlbXBsYXRlID0gdGhpcy50ZW1wbGF0ZTtcbiAgICAvLyBUT0RPOiBTYXZlIHRoZSBwcm9jZXNzZWQgdGVtcGxhdGUgd2l0aCB0aGUgY29tcG9uZW50J3MgY2xhc3MgcHJvdG90eXBlXG4gICAgLy8gc28gaXQgZG9lc24ndCBuZWVkIHRvIGJlIHByb2Nlc3NlZCB3aXRoIGV2ZXJ5IGluc3RhbnRpYXRpb24uXG4gICAgaWYgKHRlbXBsYXRlKSB7XG5cbiAgICAgIGlmICh0eXBlb2YgdGVtcGxhdGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIC8vIFVwZ3JhZGUgcGxhaW4gc3RyaW5nIHRvIHJlYWwgdGVtcGxhdGUuXG4gICAgICAgIHRlbXBsYXRlID0gY3JlYXRlVGVtcGxhdGVXaXRoSW5uZXJIVE1MKHRlbXBsYXRlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKFVTSU5HX1NIQURPV19ET01fVjApIHtcbiAgICAgICAgcG9seWZpbGxTbG90V2l0aENvbnRlbnQodGVtcGxhdGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAod2luZG93LlNoYWRvd0RPTVBvbHlmaWxsKSB7XG4gICAgICAgIHNoaW1UZW1wbGF0ZVN0eWxlcyh0ZW1wbGF0ZSwgdGhpcy5sb2NhbE5hbWUpO1xuICAgICAgfVxuXG4gICAgICAvLyB0aGlzLmxvZyhcImNsb25pbmcgdGVtcGxhdGUgaW50byBzaGFkb3cgcm9vdFwiKTtcbiAgICAgIGxldCByb290ID0gVVNJTkdfU0hBRE9XX0RPTV9WMCA/XG4gICAgICAgIHRoaXMuY3JlYXRlU2hhZG93Um9vdCgpIDogICAgICAgICAgICAgLy8gU2hhZG93IERPTSB2MFxuICAgICAgICB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTsgIC8vIFNoYWRvdyBET00gdjFcbiAgICAgIGxldCBjbG9uZSA9IGRvY3VtZW50LmltcG9ydE5vZGUodGVtcGxhdGUuY29udGVudCwgdHJ1ZSk7XG4gICAgICByb290LmFwcGVuZENoaWxkKGNsb25lKTtcbiAgICB9XG4gIH1cblxufTtcblxuXG4vLyBDb252ZXJ0IGEgcGxhaW4gc3RyaW5nIG9mIEhUTUwgaW50byBhIHJlYWwgdGVtcGxhdGUgZWxlbWVudC5cbmZ1bmN0aW9uIGNyZWF0ZVRlbXBsYXRlV2l0aElubmVySFRNTChpbm5lckhUTUwpIHtcbiAgbGV0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgLy8gUkVWSUVXOiBJcyB0aGVyZSBhbiBlYXNpZXIgd2F5IHRvIGRvIHRoaXM/XG4gIC8vIFdlJ2QgbGlrZSB0byBqdXN0IHNldCBpbm5lckhUTUwgb24gdGhlIHRlbXBsYXRlIGNvbnRlbnQsIGJ1dCBzaW5jZSBpdCdzXG4gIC8vIGEgRG9jdW1lbnRGcmFnbWVudCwgdGhhdCBkb2Vzbid0IHdvcmsuXG4gIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LmlubmVySFRNTCA9IGlubmVySFRNTDtcbiAgd2hpbGUgKGRpdi5jaGlsZE5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICB0ZW1wbGF0ZS5jb250ZW50LmFwcGVuZENoaWxkKGRpdi5jaGlsZE5vZGVzWzBdKTtcbiAgfVxuICByZXR1cm4gdGVtcGxhdGU7XG59XG5cbi8vIFJlcGxhY2Ugb2NjdXJlbmNlcyBvZiB2MSBzbG90IGVsZW1lbnRzIHdpdGggdjAgY29udGVudCBlbGVtZW50cy5cbi8vIFRoaXMgZG9lcyBub3QgeWV0IG1hcCBuYW1lZCBzbG90cyB0byBjb250ZW50IHNlbGVjdCBjbGF1c2VzLlxuZnVuY3Rpb24gcG9seWZpbGxTbG90V2l0aENvbnRlbnQodGVtcGxhdGUpIHtcbiAgW10uZm9yRWFjaC5jYWxsKHRlbXBsYXRlLmNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnc2xvdCcpLCBzbG90RWxlbWVudCA9PiB7XG4gICAgbGV0IGNvbnRlbnRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY29udGVudCcpO1xuICAgIHNsb3RFbGVtZW50LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGNvbnRlbnRFbGVtZW50LCBzbG90RWxlbWVudCk7XG4gIH0pO1xufVxuXG4vLyBJbnZva2UgYmFzaWMgc3R5bGUgc2hpbW1pbmcgd2l0aCBTaGFkb3dDU1MuXG5mdW5jdGlvbiBzaGltVGVtcGxhdGVTdHlsZXModGVtcGxhdGUsIHRhZykge1xuICB3aW5kb3cuV2ViQ29tcG9uZW50cy5TaGFkb3dDU1Muc2hpbVN0eWxpbmcodGVtcGxhdGUuY29udGVudCwgdGFnKTtcbn1cbiIsIi8qXG4gKiBNaWNyb3Rhc2sgaGVscGVyIGZvciBJRSAxMS5cbiAqXG4gKiBFeGVjdXRpbmcgYSBmdW5jdGlvbiBhcyBhIG1pY3JvdGFzayBpcyB0cml2aWFsIGluIGJyb3dzZXJzIHRoYXQgc3VwcG9ydFxuICogcHJvbWlzZXMsIHdob3NlIHRoZW4oKSBjbGF1c2VzIHVzZSBtaWNyb3Rhc2sgdGltaW5nLiBJRSAxMSBkb2Vzbid0IHN1cHBvcnRcbiAqIHByb21pc2VzLCBidXQgZG9lcyBzdXBwb3J0IE11dGF0aW9uT2JzZXJ2ZXJzLCB3aGljaCBhcmUgYWxzbyBleGVjdXRlZCBhc1xuICogbWljcm90YXNrcy4gU28gdGhpcyBoZWxwZXIgdXNlcyBhbiBNdXRhdGlvbk9ic2VydmVyIHRvIGFjaGlldmUgbWljcm90YXNrXG4gKiB0aW1pbmcuXG4gKlxuICogU2VlIGh0dHBzOi8vamFrZWFyY2hpYmFsZC5jb20vMjAxNS90YXNrcy1taWNyb3Rhc2tzLXF1ZXVlcy1hbmQtc2NoZWR1bGVzL1xuICpcbiAqIEluc3BpcmVkIGJ5IFBvbHltZXIncyBhc3luYygpIGZ1bmN0aW9uLlxuICovXG5cblxuLy8gVGhlIHF1ZXVlIG9mIHBlbmRpbmcgY2FsbGJhY2tzIHRvIGJlIGV4ZWN1dGVkIGFzIG1pY3JvdGFza3MuXG5sZXQgY2FsbGJhY2tzID0gW107XG5cbi8vIENyZWF0ZSBhbiBlbGVtZW50IHRoYXQgd2Ugd2lsbCBtb2RpZnkgdG8gZm9yY2Ugb2JzZXJ2YWJsZSBtdXRhdGlvbnMuXG5sZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcblxuLy8gQSBtb25vdG9uaWNhbGx5LWluY3JlYXNpbmcgdmFsdWUuXG5sZXQgY291bnRlciA9IDA7XG5cblxuLyoqXG4gKiBAZnVuY3Rpb24gbWljcm90YXNrXG4gKlxuICogQWRkcyBhIGZ1bmN0aW9uIHRvIHRoZSBtaWNyb3Rhc2sgcXVldWUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pY3JvdGFzayhjYWxsYmFjaykge1xuICBjYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gIC8vIEZvcmNlIGEgbXV0YXRpb24uXG4gIGVsZW1lbnQudGV4dENvbnRlbnQgPSArK2NvdW50ZXI7XG59XG5cblxuLy8gRXhlY3V0ZSBhbnkgcGVuZGluZyBjYWxsYmFja3MuXG5mdW5jdGlvbiBleGVjdXRlQ2FsbGJhY2tzKCkge1xuICB3aGlsZSAoY2FsbGJhY2tzLmxlbmd0aCA+IDApIHtcbiAgICBsZXQgY2FsbGJhY2sgPSBjYWxsYmFja3Muc2hpZnQoKTtcbiAgICBjb25zb2xlLmxvZyhjYWxsYmFjayk7XG4gICAgY2FsbGJhY2soKTtcbiAgfVxufVxuXG5cbi8vIENyZWF0ZSB0aGUgb2JzZXJ2ZXIuXG5sZXQgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihleGVjdXRlQ2FsbGJhY2tzKTtcbm9ic2VydmVyLm9ic2VydmUoZWxlbWVudCwge1xuICBjaGFyYWN0ZXJEYXRhOiB0cnVlXG59KTtcbiIsIi8qKlxuICogQGNsYXNzIEVsZW1lbnRCYXNlXG4gKiBAY2xhc3NkZXNjIEEgc2FtcGxlIGdlbmVyYWwtcHVycG9zZSBiYXNlIGNsYXNzIGZvciBkZWZpbmluZyBjdXN0b20gZWxlbWVudHNcbiAqIHRoYXQgbWl4ZXMgaW4gc29tZSBjb21tb24gZmVhdHVyZXM6IHRlbXBsYXRlIHN0YW1waW5nIGludG8gYSBzaGFkb3cgcm9vdCxcbiAqIHNoYWRvdyBlbGVtZW50IHJlZmVyZW5jZXMsIG1hcnNoYWxsaW5nIGF0dHJpYnV0ZXMgdG8gcHJvcGVydGllcywgYW5kXG4gKiByZXRyaWV2aW5nIHRoZSBjaGlsZHJlbiBkaXN0cmlidXRlZCB0byBhIGNvbXBvbmVudC5cbiAqXG4gKiBUaGlzIGJhc2UgY2xhc3MgaXMgbm90IHNwZWNpYWwgaW4gYW55IHdheSwgYW5kIGlzIGRlZmluZWQgb25seSBhcyBhXG4gKiBjb252ZW5pZW50IHNob3J0aGFuZCBmb3IgYXBwbHlpbmcgdGhlIG1peGlucyBsaXN0ZWQgYWJvdmUuIFlvdSBjYW4gdXNlIHRoaXNcbiAqIGNsYXNzIGFzIGEgYmFzZSBjbGFzcyBmb3IgeW91ciBvd24gZWxlbWVudHMsIG9yIGVhc2lseSBjcmVhdGUgeW91ciBvd24gYmFzZVxuICogY2xhc3MgYnkgYXBwbHlpbmcgdGhlIHNhbWUgc2V0IG9mIG1peGlucy5cbiAqXG4gKiBUaGUgRWxlbWVudEJhc2UgYmFzZSBjbGFzcyBkb2VzIG5vdCByZWdpc3RlciBpdHNlbGYgYXMgYSBjdXN0b20gZWxlbWVudCB3aXRoXG4gKiB0aGUgYnJvd3NlciwgYW5kIGhlbmNlIGNhbm5vdCBiZSBpbmRlcGVuZGVudGx5IGluc3RhbnRpYXRlZC5cbiAqL1xuXG5cbmltcG9ydCBDb21wb3NhYmxlIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NvbXBvc2FibGUnO1xuaW1wb3J0IFNoYWRvd1RlbXBsYXRlIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NoYWRvd1RlbXBsYXRlJztcbmltcG9ydCBTaGFkb3dFbGVtZW50UmVmZXJlbmNlcyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TaGFkb3dFbGVtZW50UmVmZXJlbmNlcyc7XG5pbXBvcnQgQXR0cmlidXRlTWFyc2hhbGxpbmcgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQXR0cmlidXRlTWFyc2hhbGxpbmcnO1xuaW1wb3J0IERpc3RyaWJ1dGVkQ2hpbGRyZW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlzdHJpYnV0ZWRDaGlsZHJlbic7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWxlbWVudEJhc2UgZXh0ZW5kcyBDb21wb3NhYmxlKEhUTUxFbGVtZW50KS5jb21wb3NlKFxuICBTaGFkb3dUZW1wbGF0ZSwgICAgICAgICAgLy8gYmVmb3JlIG5vZGUgZmluZGluZywgc28gc2hhZG93IHJvb3QgaXMgcG9wdWxhdGVkXG4gIFNoYWRvd0VsZW1lbnRSZWZlcmVuY2VzLCAvLyBiZWZvcmUgbWFyc2hhbGxpbmcsIHNvIHByb3BlcnRpZXMgY2FuIHVzZSByZWZzXG4gIEF0dHJpYnV0ZU1hcnNoYWxsaW5nLFxuICBEaXN0cmlidXRlZENoaWxkcmVuXG4pIHtcblxuICAvKlxuICAgKiBEZWJ1Z2dpbmcgdXRpbGl0eTogbG9ncyBhIG1lc3NhZ2UsIHByZWZpeGVkIGJ5IHRoZSBjb21wb25lbnQncyB0YWcuXG4gICAqL1xuICBsb2codGV4dCkge1xuICAgIGlmIChzdXBlci5sb2cpIHsgc3VwZXIubG9nKHRleHQpOyB9XG4gICAgY29uc29sZS5sb2coYCR7dGhpcy5sb2NhbE5hbWV9OiAke3RleHR9YCk7XG4gIH1cblxufVxuIiwiLyoqXG4gKiBAY2xhc3MgU2xpZGluZ1ZpZXdwb3J0XG4gKiBAY2xhc3NkZXNjIFByZXNlbnRzIGxpc3QgaXRlbXMgaW4gYSB2aWV3cG9ydCBzdWNoIHRoYXQgb25seSBhIHNpbmdsZSBpdGVtIGlzXG4gKiB2aXNpYmxlIGF0IGEgdGltZVxuICpcbiAqIE5hdmlnYXRpbmcgYmV0d2VlbiBpdGVtcyB3aWxsIGJlIHJlcHJlc2VudGVkIHdpdGggYSBob3Jpem9udGFsIHZpc3VhbFxuICogc2xpZGluZyBlZmZlY3QuXG4gKlxuICogVGhpcyBjb21wb25lbnQgaGFuZGxlcyB0aGUgcmVuZGVyaW5nIHJlc3BvbnNpYmlsaXRpZXMgZm9yIHRoZSBiYXNpYy1jYXJvdXNlbFxuICogY29tcG9uZW50LlxuICpcbiAqIFRoaXMgY29tcG9uZW50IGN1cnJlbnRseSByZXF1aXJlcyB0aGF0IHlvdSBleHBsaWNpdGx5IGFwcGx5IGEgc2l6ZSB0byBpdC5cbiAqL1xuXG5cbmltcG9ydCBFbGVtZW50QmFzZSBmcm9tICcuLi8uLi9iYXNpYy1lbGVtZW50LWJhc2Uvc3JjL0VsZW1lbnRCYXNlJztcbmltcG9ydCBTcHJlYWRJdGVtcyBmcm9tICcuLi8uLi9iYXNpYy1zcHJlYWQtaXRlbXMvc3JjL1NwcmVhZEl0ZW1zJzsgLy8ganNoaW50IGlnbm9yZTpsaW5lXG5cbmxldCBiYXNlID0gRWxlbWVudEJhc2U7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRpbmdWaWV3cG9ydCBleHRlbmRzIGJhc2Uge1xuXG4gIGF0dGFjaGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHN1cGVyLmF0dGFjaGVkQ2FsbGJhY2spIHsgc3VwZXIuYXR0YWNoZWRDYWxsYmFjaygpOyB9XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdzaG93VHJhbnNpdGlvbicpO1xuICAgIHRoaXMucG9zaXRpb24gPSAwO1xuICB9XG5cbiAgZ2V0IGNvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuJC5zbGlkaW5nQ29udGFpbmVyLmNvbnRlbnQ7XG4gIH1cblxuICBnZXQgaXRlbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuJC5zbGlkaW5nQ29udGFpbmVyLml0ZW1zO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmIChzdXBlci5yZW5kZXIpIHsgc3VwZXIucmVuZGVyKCk7IH1cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyU2VsZWN0aW9uLmJpbmQodGhpcykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBmcmFjdGlvbmFsIHBvc2l0aW9uIG9mIHRoZSBlbGVtZW50J3MgbW92aW5nIHN1cmZhY2Ugd2hpbGUgaXQgaXMgYmVpbmdcbiAgICogbW92ZWQgKGRyYWdnZWQvc2Nyb2xsZWQvZXRjLikuXG4gICAqXG4gICAqIFRoaXMgaXMgZXhwcmVzc2VkIGFzIGEgZnJhY3Rpb24gb2YgdGhlIGVsZW1lbnQncyB3aWR0aC4gSWYgdGhlIHZhbHVlIGlzXG4gICAqIHBvc2l0aXZlLCB0aGUgc3VyZmFjZSBpcyBiZWluZyBtb3ZlZCB0byB0aGUgbGVmdDsgaWYgbmVnYXRpdmUsIHRoZSBzdXJmYWNlXG4gICAqIGlzIGJlaW5nIG1vdmVkIHRvIHRoZSByaWdodC4gRS5nLiwgYSB2YWx1ZSBvZiAwLjUgaW5kaWNhdGVzIHRoZSBzdXJmYWNlIGhhc1xuICAgKiBtb3ZlZCBoYWxmIHRoZSBlbGVtZW50J3Mgd2lkdGggdG8gdGhlIGxlZnQuXG4gICAqXG4gICAqIEBwcm9wZXJ0eSBwb3NpdGlvblxuICAgKiBAdHlwZSBOdW1iZXJcbiAgICovXG4gIGdldCBwb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9zaXRpb247XG4gIH1cbiAgc2V0IHBvc2l0aW9uKHBvc2l0aW9uKSB7XG4gICAgaWYgKCdwb3NpdGlvbicgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIucG9zaXRpb24gPSBwb3NpdGlvbjsgfVxuICAgIHRoaXMuX3Bvc2l0aW9uID0gcG9zaXRpb247XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIGdldCBzZWxlY3RlZEluZGV4KCkge1xuICAgIGxldCBpdGVtcyA9IHRoaXMuaXRlbXM7XG4gICAgbGV0IGluZGV4ID0gaXRlbXMgJiYgaXRlbXMuaW5kZXhPZih0aGlzLnNlbGVjdGVkSXRlbSk7XG4gICAgcmV0dXJuIGluZGV4IHx8IC0xO1xuICB9XG4gIHNldCBzZWxlY3RlZEluZGV4KGluZGV4KSB7XG4gICAgaWYgKCdzZWxlY3RlZEluZGV4JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEluZGV4ID0gaW5kZXg7IH1cbiAgICBsZXQgaXRlbSA9IHRoaXMuaXRlbXMgJiYgdGhpcy5pdGVtc1tpbmRleF07XG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gaXRlbTtcbiAgICB9XG4gIH1cblxuICBnZXQgc2VsZWN0ZWRJdGVtKCkge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZEl0ZW07XG4gIH1cbiAgc2V0IHNlbGVjdGVkSXRlbShpdGVtKSB7XG4gICAgaWYgKCdzZWxlY3RlZEl0ZW0nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkSXRlbSA9IGl0ZW07IH1cbiAgICB0aGlzLl9zZWxlY3RlZEl0ZW0gPSBpdGVtO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBzaG93VHJhbnNpdGlvbihzaG93KSB7XG4gICAgaWYgKHN1cGVyLnNob3dUcmFuc2l0aW9uKSB7IHN1cGVyLnNob3dUcmFuc2l0aW9uKHNob3cpOyB9XG4gICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdzaG93VHJhbnNpdGlvbicsIHNob3cpO1xuICB9XG5cbiAgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBgXG4gICAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgICNzbGlkaW5nQ29udGFpbmVyIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIC8qXG4gICAgICAgICBTZXQgd2lkdGggZm9yIElFL0VkZ2UuIEl0J3Mgbm90IGNsZWFyIHdoeSB0aGV5IG5lZWQgdGhpcywgYW5kIHRoZSBvdGhlclxuICAgICAgICAgYnJvd3NlcnMgZG9uJ3QuXG4gICAgICAgICAqL1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoLnNob3dUcmFuc2l0aW9uKSAjc2xpZGluZ0NvbnRhaW5lciB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4ycyBlYXNlLW91dDtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1vdXQ7XG4gICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8YmFzaWMtc3ByZWFkLWl0ZW1zIGlkPVwic2xpZGluZ0NvbnRhaW5lclwiPlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICA8L2Jhc2ljLXNwcmVhZC1pdGVtcz5cbiAgICBgO1xuICB9XG5cbn1cblxuXG5mdW5jdGlvbiByZW5kZXJTZWxlY3Rpb24oKSB7XG5cbiAgbGV0IGNvdW50ID0gdGhpcy5pdGVtcyAmJiB0aGlzLml0ZW1zLmxlbmd0aDtcbiAgaWYgKCFjb3VudCkge1xuICAgIC8vIE51bGwgb3IgemVybyBtZWFucyB3ZSBkb24ndCBoYXZlIGl0ZW1zIHRvIHJlbmRlciB5ZXQuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IGluZGV4ID0gdGhpcy5zZWxlY3RlZEluZGV4O1xuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgLy8gTm8gc2VsZWN0aW9uXG4gICAgLy8gcmV0dXJuO1xuICAgIGluZGV4ID0gMDtcbiAgfVxuXG4gIGxldCBwb3NpdGlvbiA9IHRoaXMucG9zaXRpb24gfHwgMDtcbiAgbGV0IGRhbXBlbmVkUG9zaXRpb247XG4gIGlmIChpbmRleCA9PT0gMCAmJiBwb3NpdGlvbiA8IDApIHtcbiAgICAvLyBBcHBseSB0ZW5zaW9uIGZyb20gdGhlIGxlZnQgZWRnZS5cbiAgICBkYW1wZW5lZFBvc2l0aW9uID0gLWRhbXBpbmcoLXBvc2l0aW9uKTtcbiAgfSBlbHNlIGlmIChpbmRleCA9PT0gY291bnQgLSAxICYmIHBvc2l0aW9uID4gMCkge1xuICAgIC8vIEFwcGx5IHRlbnNpb24gZnJvbSB0aGUgcmlnaHQgZWRnZS5cbiAgICBkYW1wZW5lZFBvc2l0aW9uID0gZGFtcGluZyhwb3NpdGlvbik7XG4gIH0gZWxzZSB7XG4gICAgLy8gTm8gZGFtcGluZyByZXF1aXJlZC5cbiAgICBkYW1wZW5lZFBvc2l0aW9uID0gcG9zaXRpb247XG4gIH1cbiAgbGV0IGZyYWN0aW9uYWxJbmRleCA9IGluZGV4ICsgZGFtcGVuZWRQb3NpdGlvbjtcbiAgLy8gVXNlIGEgcGVyY2VudGFnZSBzbyB0aGUgdHJhbnNmb3JtIHdpbGwgc3RpbGwgd29yayBpZiBzY3JlZW4gc2l6ZSBjaGFuZ2VzXG4gIC8vIChlLmcuLCBpZiBkZXZpY2Ugb3JpZW50YXRpb24gY2hhbmdlcykuXG4gIGxldCBsZWZ0ID0gLWZyYWN0aW9uYWxJbmRleCAqIDEwMDtcbiAgLy8gbGV0IGxlZnQgPSAtKGZyYWN0aW9uYWxJbmRleCAvIGNvdW50KSAqIDEwMDtcbiAgbGV0IHRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKCcgKyBsZWZ0ICsgJyUpJztcbiAgdGhpcy4kLnNsaWRpbmdDb250YWluZXIuc3R5bGUud2Via2l0VHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICB0aGlzLiQuc2xpZGluZ0NvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG59XG5cblxuLypcbiAqIENhbGN1bGF0ZSBkYW1waW5nIGFzIGEgZnVuY3Rpb24gb2YgdGhlIGRpc3RhbmNlIHBhc3QgdGhlIG1pbmltdW0vbWF4aW11bVxuICogdmFsdWVzLlxuICpcbiAqIFdlIHdhbnQgdG8gYXN5bXB0b3RpY2FsbHkgYXBwcm9hY2ggYW4gYWJzb2x1dGUgbWluaW11bSBvZiAxIHVuaXRcbiAqIGJlbG93L2Fib3ZlIHRoZSBhY3R1YWwgbWluaW11bS9tYXhpbXVtLiBUaGlzIHJlcXVpcmVzIGNhbGN1bGF0aW5nIGFcbiAqIGh5cGVyYm9saWMgZnVuY3Rpb24uXG4gKlxuICogU2VlIGh0dHA6Ly93d3cud29sZnJhbWFscGhhLmNvbS9pbnB1dC8/aT15KyUzRCstMSUyRiUyOHglMkIxJTI5KyUyQisxXG4gKiBmb3IgdGhlIG9uZSB3ZSB1c2UuIFRoZSBvbmx5IHBvcnRpb24gb2YgdGhhdCBmdW5jdGlvbiB3ZSBjYXJlIGFib3V0IGlzIHdoZW5cbiAqIHggaXMgemVybyBvciBncmVhdGVyLiBBbiBpbXBvcnRhbnQgY29uc2lkZXJhdGlvbiBpcyB0aGF0IHRoZSBjdXJ2ZSBiZVxuICogdGFuZ2VudCB0byB0aGUgZGlhZ29uYWwgbGluZSB4PXkgYXQgKDAsIDApLiBUaGlzIGVuc3VyZXMgc21vb3RoIGNvbnRpbnVpdHlcbiAqIHdpdGggdGhlIG5vcm1hbCBkcmFnIGJlaGF2aW9yLCBpbiB3aGljaCB0aGUgdmlzaWJsZSBzbGlkaW5nIGlzIGxpbmVhciB3aXRoXG4gKiB0aGUgZGlzdGFuY2UgdGhlIHRvdWNocG9pbnQgaGFzIGJlZW4gZHJhZ2dlZC5cbiAqL1xuZnVuY3Rpb24gZGFtcGluZyh4KSB7XG4gIGxldCB5ID0gKC0xIC8gKHggKyAxKSkgKyAxO1xuICByZXR1cm4geTtcbn1cblxuXG5kb2N1bWVudC5yZWdpc3RlckVsZW1lbnQoJ2Jhc2ljLXNsaWRpbmctdmlld3BvcnQnLCBTbGlkaW5nVmlld3BvcnQpO1xuIiwiLyoqXG4gKiBAY2xhc3MgU3ByZWFkSXRlbXNcbiAqIEBjbGFzc2Rlc2MgU3ByZWFkcyBvdXQgYSBzZXQgb2YgaXRlbXMgaG9yaXpvbnRhbGx5IHNvIHRoZXkgdGFrZSBlcXVhbCBzcGFjZVxuICpcbiAqIFRoaXMgY29tcG9uZW50IGlzIHVzZWQsIGZvciBleGFtcGxlLCBieSB0aGUgYmFzaWMtc2xpZGluZy12aWV3cG9ydCBjb21wb25lbnRcbiAqIHRvIGVuc3VyZSB0aGF0IGNoaWxkcmVuIG9mIGRpZmZlcmVudCBzaXplIHdpbGwgdGFrZSB1cCB0aGUgc2FtZSBhbW91bnQgb2ZcbiAqIGhvcml6b250YWwgc3BhY2UuXG4gKlxuICogVGhpcyBjb21wb25lbnQgY3VycmVudGx5IHJlcXVpcmVzIGFuIGV4cGxpY2l0IHNpemUgYnkgYXBwbGllZCB0byBpdC5cbiAqXG4gKiBAbWl4ZXMgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudFxuICovXG5cblxuaW1wb3J0IEVsZW1lbnRCYXNlIGZyb20gJy4uLy4uL2Jhc2ljLWVsZW1lbnQtYmFzZS9zcmMvRWxlbWVudEJhc2UnO1xuaW1wb3J0IERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCc7XG5pbXBvcnQgT2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL09ic2VydmVDb250ZW50Q2hhbmdlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwcmVhZEl0ZW1zIGV4dGVuZHMgRWxlbWVudEJhc2UuY29tcG9zZShcbiAgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCxcbiAgT2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzXG4pIHtcblxuICBhdHRhY2hlZENhbGxiYWNrKCkge1xuICAgIGlmIChzdXBlci5hdHRhY2hlZENhbGxiYWNrKSB7IHN1cGVyLmF0dGFjaGVkQ2FsbGJhY2soKTsgfVxuICAgIC8vIEhBQ0tcbiAgICB0aGlzLml0ZW1zQ2hhbmdlZCgpO1xuICB9XG5cbiAgZ2V0IGl0ZW1zKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XG4gIH1cblxuICAvLyBUT0RPOiBTaG91bGQgYWxzbyBoYW5kbGUgY29udGVudENoYW5nZWQoKSwgYnV0IG5lZWQgdG8gcmF0aW9uYWxpemUgd2l0aFxuICAvLyBpbnZvY2F0aW9uIG9mIGl0ZW1zQ2hhbmdlZCBpbiBhdHRhY2hlZENhbGxiYWNrLlxuICBpdGVtc0NoYW5nZWQoKSB7XG4gICAgaWYgKHN1cGVyLml0ZW1zQ2hhbmdlZCkgeyBzdXBlci5pdGVtc0NoYW5nZWQoKTsgfVxuICAgIGxldCBpdGVtcyA9IHRoaXMuaXRlbXM7XG4gICAgbGV0IGNvdW50ID0gaXRlbXMubGVuZ3RoO1xuICAgIHRoaXMuJC5zcHJlYWRDb250YWluZXIuc3R5bGUud2lkdGggPSAoY291bnQgKiAxMDApICsgJyUnO1xuICAgIGxldCBpdGVtV2lkdGggPSAoMTAwIC8gY291bnQpICsgXCIlXCI7XG4gICAgW10uZm9yRWFjaC5jYWxsKGl0ZW1zLCBpdGVtID0+IHtcbiAgICAgIGl0ZW0uc3R5bGUud2lkdGggPSBpdGVtV2lkdGg7XG4gICAgfSk7XG4gIH1cblxuICBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgICNzcHJlYWRDb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICAjc3ByZWFkQ29udGFpbmVyIDo6Y29udGVudCA+ICoge1xuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICBvYmplY3QtZml0OiB2YXIoLS1iYXNpYy1pdGVtLW9iamVjdC1maXQsIGNvbnRhaW4pO1xuICAgICAgICB0b3VjaC1hY3Rpb246IG5vbmU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG4gICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBpZD1cInNwcmVhZENvbnRhaW5lclwiPlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbn1cblxuXG5kb2N1bWVudC5yZWdpc3RlckVsZW1lbnQoJ2Jhc2ljLXNwcmVhZC1pdGVtcycsIFNwcmVhZEl0ZW1zKTtcbiJdfQ==
