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

},{}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
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
        if (_get(Object.getPrototypeOf(ChildrenContent.prototype), 'createdCallback', this)) {
          _get(Object.getPrototypeOf(ChildrenContent.prototype), 'createdCallback', this).call(this);
        }

        observeContentChanges(this);

        // Make an initial call to contentChanged() so that the component can do
        // initialization that it normally does when content changes.
        this.contentChanged();
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

},{}],4:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Mixin which allows a component to provide aggregate behavior with other
 * elements, e.g., for keyboard handling.
 *
 * @mixin CollectiveElement
 */

exports.default = function (base) {
  return function (_base) {
    _inherits(CollectiveElement, _base);

    function CollectiveElement() {
      _classCallCheck(this, CollectiveElement);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(CollectiveElement).apply(this, arguments));
    }

    _createClass(CollectiveElement, [{
      key: 'collective',
      get: function get() {
        // Lazily create the collective when first asked for it.
        if (!this._collective) {
          this._collective = new Collective();
          this._collective.assimilate(this);
        }
        return this._collective;
      },
      set: function set(value) {
        if ('collective' in base.prototype) {
          _set(Object.getPrototypeOf(CollectiveElement.prototype), 'collective', value, this);
        }
        this._collective = value;
      }
    }, {
      key: 'target',
      get: function get() {
        return _get(Object.getPrototypeOf(CollectiveElement.prototype), 'target', this);
      },
      set: function set(element) {
        if ('target' in base.prototype) {
          _set(Object.getPrototypeOf(CollectiveElement.prototype), 'target', element, this);
        }
        this.collective.assimilate(element);
      }
    }]);

    return CollectiveElement;
  }(base);
};

var Collective = function () {
  function Collective() {
    _classCallCheck(this, Collective);

    this._elements = [];
  }

  _createClass(Collective, [{
    key: 'assimilate',
    value: function assimilate(target) {
      var _this2 = this;

      var elements = target.collective ? target.collective.elements : [target];
      elements.forEach(function (element) {
        element.collective = _this2;
        _this2._elements.push(element);
      });
      this.invokeCollectiveMethod('collectiveChanged');
    }
  }, {
    key: 'invokeCollectiveMethod',
    value: function invokeCollectiveMethod(method) {
      // Invoke from innermost to outermost.
      var elements = this.elements;

      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      for (var i = elements.length - 1; i >= 0; i--) {
        var element = elements[i];
        if (element[method]) {
          element[method].apply(element, args);
        }
      }
    }
  }, {
    key: 'elements',
    get: function get() {
      return this._elements;
    }
  }, {
    key: 'outermostElement',
    get: function get() {
      return this.elements[0];
    }
  }]);

  return Collective;
}();

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
 * Mixin that defines the target of a component -- the element the component is
 * managing or somehow responsible for -- as its first child.
 *
 * @mixin ContentFirstChildTarget
 */

exports.default = function (base) {
  return function (_base) {
    _inherits(ContentFirstChildTarget, _base);

    function ContentFirstChildTarget() {
      _classCallCheck(this, ContentFirstChildTarget);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(ContentFirstChildTarget).apply(this, arguments));
    }

    _createClass(ContentFirstChildTarget, [{
      key: 'contentChanged',
      value: function contentChanged() {
        if (_get(Object.getPrototypeOf(ContentFirstChildTarget.prototype), 'contentChanged', this)) {
          _get(Object.getPrototypeOf(ContentFirstChildTarget.prototype), 'contentChanged', this).call(this);
        }
        var content = this.content;
        var target = content && content[0];
        if (target) {
          this.target = target;
        }
      }
    }, {
      key: 'target',
      get: function get() {
        return this._target;
      },
      set: function set(element) {
        if ('target' in base.prototype) {
          _set(Object.getPrototypeOf(ContentFirstChildTarget.prototype), 'target', element, this);
        }
        this._target = element;
      }
    }]);

    return ContentFirstChildTarget;
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
 * Mixin which manages the keydown handling for a component.
 *
 * TODO: Document collective behavior.
 * TODO: Provide baseline behavior outside of a collective.
 *
 * @mixin Keyboard
 */

exports.default = function (base) {
  return function (_base) {
    _inherits(Keyboard, _base);

    function Keyboard() {
      _classCallCheck(this, Keyboard);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Keyboard).apply(this, arguments));
    }

    _createClass(Keyboard, [{
      key: 'keydown',

      // Default keydown handler. This will typically be handled by other mixins.
      value: function keydown(event) {
        if (_get(Object.getPrototypeOf(Keyboard.prototype), 'keydown', this)) {
          return _get(Object.getPrototypeOf(Keyboard.prototype), 'keydown', this).call(this, event);
        }
      }

      /*
       * If we're now the outermost element of the collective, set up to receive
       * keyboard events. If we're no longer the outermost element, stop listening.
       */

    }, {
      key: 'collectiveChanged',
      value: function collectiveChanged() {
        if (_get(Object.getPrototypeOf(Keyboard.prototype), 'collectiveChanged', this)) {
          _get(Object.getPrototypeOf(Keyboard.prototype), 'collectiveChanged', this).call(this);
        }

        var outermostElement = this.collective.outermostElement;
        if (outermostElement === this && !this.getAttribute('aria-label')) {
          // Since we're handling the keyboard, see if we can adopt an ARIA label
          // from an inner element of the collective.
          var label = getCollectiveAriaLabel(this.collective);
          if (label) {
            this.setAttribute('aria-label', label);
          }
        }

        // Make sure only the outermost element in the collective is listening to
        // the keyboard.
        this.collective.elements.forEach(function (element) {

          var shouldListen = element === outermostElement;
          var isListening = isListeningToKeydown(element);
          if (isListening !== shouldListen) {
            if (shouldListen) {
              startListeningToKeydown(element);
            } else {
              stopListeningToKeydown(element);
            }
          }
          if (!shouldListen && element.getAttribute('aria-label')) {
            // Remove the ARIA label from inner element's not handling the keyboard.
            element.removeAttribute('aria-label');
          }
        });
      }
    }]);

    return Keyboard;
  }(base);
};

function keydown(event) {

  // Give collective elements a shot at the event, working from innermost to
  // outermost (this element).
  var handled = undefined;
  var elements = this.collective.elements;
  for (var i = elements.length - 1; i >= 0; i--) {
    var element = elements[i];
    handled = element.keydown && element.keydown(event);
    if (handled) {
      break;
    }
  }

  if (handled) {
    event.preventDefault();
    event.stopPropagation();
  }
}

// Return the first ARIA label defined by the collective.
function getCollectiveAriaLabel(collective) {
  var labels = collective.elements.map(function (element) {
    return element.getAttribute('aria-label');
  });
  return labels.find(function (label) {
    return label !== null;
  });
}

function isListeningToKeydown(element) {
  return element._keydownListener != null;
}

function startListeningToKeydown(element) {
  element._keydownListener = keydown.bind(element);
  element.addEventListener('keydown', element._keydownListener);
  if (element.tabIndex < 0) {
    element.setAttribute('tabIndex', 0);
  }
}

function stopListeningToKeydown(element) {
  element.removeEventListener('keydown', element._keydownListener);
  element._keydownListener = null;
  element.removeAttribute('tabIndex');
}

},{}],8:[function(require,module,exports){
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
 * Mixin that allows a component to delegate its own selection semantics to a
 * target element. This is useful when defining components that act as
 * optional decorators for a component that acts like a list.
 *
 * @mixin TargetSelection
 */

exports.default = function (base) {
  return function (_base) {
    _inherits(TargetSelection, _base);

    function TargetSelection() {
      _classCallCheck(this, TargetSelection);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(TargetSelection).apply(this, arguments));
    }

    _createClass(TargetSelection, [{
      key: 'indexOfItem',

      // attachedCallback() {
      //   // Apply any selection made before assimilation.
      //   if (this._prematureSelectedIndex
      //       && 'selectedIndex' in this && this.selectedIndex === -1) {
      //     this.selectedIndex = this._prematureSelectedIndex;
      //     this._prematureSelectedIndex = null;
      //   }
      // }

      value: function indexOfItem(item) {
        if (_get(Object.getPrototypeOf(TargetSelection.prototype), 'indexOfItem', this)) {
          _get(Object.getPrototypeOf(TargetSelection.prototype), 'indexOfItem', this).call(this, item);
        }
        var target = this.target;
        return target ? target.indexOfItem(item) : -1;
      }
    }, {
      key: 'itemsChanged',
      value: function itemsChanged() {
        if (_get(Object.getPrototypeOf(TargetSelection.prototype), 'itemsChanged', this)) {
          _get(Object.getPrototypeOf(TargetSelection.prototype), 'itemsChanged', this).call(this);
        }
        this.dispatchEvent(new CustomEvent('items-changed'));
      }

      /**
       * The index of the item which is currently selected, or -1 if there is no
       * selection.
       *
       * @property selectedIndex
       * @type Number
       */

    }, {
      key: 'selectedItemChanged',
      value: function selectedItemChanged() {
        if (_get(Object.getPrototypeOf(TargetSelection.prototype), 'selectedItemChanged', this)) {
          _get(Object.getPrototypeOf(TargetSelection.prototype), 'selectedItemChanged', this).call(this);
        }
      }
    }, {
      key: 'items',
      get: function get() {
        var target = this.target;
        var items = target && target.items;
        return items || [];
      }
    }, {
      key: 'selectedIndex',
      get: function get() {
        var target = this.target;
        return target && target.selectedIndex;
      },
      set: function set(index) {
        if ('selectedIndex' in base.prototype) {
          _set(Object.getPrototypeOf(TargetSelection.prototype), 'selectedIndex', index, this);
        }
        // if ('selectedIndex' in this {
        //   this.selectedIndex = index;
        // } else {
        //   // Selection is being made before the collective supports it.
        //   this._prematureSelectedIndex = index;
        // }
        var target = this.target;
        if (target && target.selectedIndex !== index) {
          target.selectedIndex = index;
        }
      }

      /**
       * The currently selected item, or null if there is no selection.
       *
       * @property selectedItem
       * @type Object
       */

    }, {
      key: 'selectedItem',
      get: function get() {
        var target = this.target;
        return target && target.selectedItem;
      },
      set: function set(item) {
        if ('selectedItem' in base.prototype) {
          _set(Object.getPrototypeOf(TargetSelection.prototype), 'selectedItem', item, this);
        }
        var target = this.target;
        if (target) {
          target.selectedItem = item;
        }
      }
    }, {
      key: 'target',
      get: function get() {
        return _get(Object.getPrototypeOf(TargetSelection.prototype), 'target', this);
      },
      set: function set(element) {
        var _this2 = this;

        if ('target' in base.prototype) {
          _set(Object.getPrototypeOf(TargetSelection.prototype), 'target', element, this);
        }
        if (this._itemsChangedListener) {
          this.removeEventListener('items-changed', this._itemsChangedListener);
        }
        if (this._selectedItemChangedListener) {
          this.removeEventListener('selected-item-changed', this._selectedItemChangedListener);
        }
        this._itemsChangedListener = element.addEventListener('items-changed', function (event) {
          _this2.itemsChanged();
        });
        this._selectedItemChangedListener = element.addEventListener('selected-item-changed', function (event) {
          // Let the component know the target's selection changed, but without
          // re-invoking the selectIndex/selectedItem setter.
          _this2.selectedItemChanged();
        });
        // Force initial refresh.
        this.itemsChanged();
      }
    }]);

    return TargetSelection;
  }(base);
};

},{}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * A sample general-purpose base class for defining custom elements that mixes
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * in some common features: template stamping into a shadow root, automatic node
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * finding, and marshalling between attributes and properties.
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

},{"../../basic-component-mixins/src/AttributeMarshalling":1,"../../basic-component-mixins/src/AutomaticNodeFinding":2,"../../basic-component-mixins/src/Composable":5,"../../basic-component-mixins/src/TemplateStamping":9}],11:[function(require,module,exports){
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

var _CollectiveElement = require('../../basic-component-mixins/src/CollectiveElement');

var _CollectiveElement2 = _interopRequireDefault(_CollectiveElement);

var _ContentFirstChildTarget = require('../../basic-component-mixins/src/ContentFirstChildTarget');

var _ContentFirstChildTarget2 = _interopRequireDefault(_ContentFirstChildTarget);

var _Keyboard = require('../../basic-component-mixins/src/Keyboard');

var _Keyboard2 = _interopRequireDefault(_Keyboard);

var _TargetSelection = require('../../basic-component-mixins/src/TargetSelection');

var _TargetSelection2 = _interopRequireDefault(_TargetSelection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Presents a set of small dots to show list item count and select list items.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * There will be one dot for each item, and the dot for the currently selected
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * item will be shown selected.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Clicking a dot will select the corresponding list item.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class PageDots
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var base = _ElementBase2.default.compose(_ChildrenContent2.default, _CollectiveElement2.default, _ContentFirstChildTarget2.default, _Keyboard2.default, _TargetSelection2.default);

var PageDots = function (_base) {
  _inherits(PageDots, _base);

  function PageDots() {
    _classCallCheck(this, PageDots);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(PageDots).apply(this, arguments));
  }

  _createClass(PageDots, [{
    key: 'applySelection',
    value: function applySelection(item, selected) {
      if (_get(Object.getPrototypeOf(PageDots.prototype), 'applySelection', this)) {
        _get(Object.getPrototypeOf(PageDots.prototype), 'applySelection', this).call(this, item, selected);
      }
      var index = this.indexOfItem(item);
      // See if the corresponding dot has already been created.
      // If not, the correct dot will be selected when it gets created.
      var dots = this.dots;
      if (dots && dots.length > index) {
        var dot = this.dots[index];
        if (dot) {
          dot.classList.toggle('selected', selected);
        }
      }
    }
  }, {
    key: 'createdCallback',
    value: function createdCallback() {
      var _this2 = this;

      _get(Object.getPrototypeOf(PageDots.prototype), 'createdCallback', this).call(this);
      this.$.dots.addEventListener('click', function (event) {
        var dot = event.target;
        var dotIndex = _this2.dots.indexOf(dot);
        if (dotIndex >= 0) {
          _this2.selectedIndex = dotIndex;
        }
      });
    }
  }, {
    key: 'itemsChanged',
    value: function itemsChanged() {
      if (_get(Object.getPrototypeOf(PageDots.prototype), 'itemsChanged', this)) {
        _get(Object.getPrototypeOf(PageDots.prototype), 'itemsChanged', this).call(this);
      }
      createDots(this);
      this.selectedItemChanged(); // In case position of selected item moved.
    }
  }, {
    key: 'selectedItemChanged',
    value: function selectedItemChanged() {
      if (_get(Object.getPrototypeOf(PageDots.prototype), 'selectedItemChanged', this)) {
        _get(Object.getPrototypeOf(PageDots.prototype), 'selectedItemChanged', this).call(this);
      }
      var selectedIndex = this.selectedIndex;
      this.dots.forEach(function (dot, i) {
        dot.classList.toggle('selected', i === selectedIndex);
      });
    }
  }, {
    key: 'dots',
    get: function get() {
      return [].slice.call(this.$.dots.querySelectorAll('.dot'));
    }
  }, {
    key: 'template',
    get: function get() {
      return '\n      <style>\n      :host {\n        display: -webkit-inline-flex;\n        display: inline-flex;\n        position: relative;\n      }\n\n      #dots {\n        bottom: 0;\n        display: -webkit-flex;\n        display: flex;\n        -webkit-justify-content: center;\n        justify-content: center;\n        position: absolute;\n        width: 100%;\n        z-index: 1;\n      }\n\n      .dot {\n        background: rgba(255, 255, 255, 0.4);\n        border-radius: 7px;\n        box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.5);\n        box-sizing: border-box;\n        height: 8px;\n        margin: 7px 5px;\n        padding: 0;\n        transition: background 0.2s box-shadow 0.2s;\n        width: 8px;\n      }\n\n      .dot:hover {\n        background: rgba(0, 0, 0, 0.75);\n        box-shadow: 0 0 1px 3px rgba(255, 255, 255, 0.5);\n      }\n\n      .dot.selected {\n        background: rgba(255, 255, 255, 0.95);\n      }\n\n      @media (min-width: 768px) {\n        .dot {\n          height: 12px;\n          width: 12px;\n        }\n      }\n      </style>\n\n      <!--\n      REVIEW: These dots aren\'t buttons, because they\'re never meant to be used\n      on their own. There should always be some other, more accessible, way to\n      navigate the content.\n      -->\n      <!-- TODO: Replace with something that\'s basically a list box -->\n      <div id="dots"></div>\n      <slot></slot>\n    ';
    }
  }]);

  return PageDots;
}(base);

exports.default = PageDots;

function createDot() {
  var dot = document.createElement('div');
  dot.classList.add('dot');
  dot.classList.add('style-scope');
  dot.classList.add('basic-page-dots');
  return dot;
}

function createDots(element) {
  var newDotCount = element.items.length;
  var dotContainer = element.$.dots;
  var existingDotCount = dotContainer.children.length;
  if (newDotCount === existingDotCount) {
    return;
  } else if (existingDotCount > newDotCount) {
    // Remove extra dots.
    while (dotContainer.children.length > newDotCount) {
      dotContainer.removeChild(dotContainer.children[0]);
    }
  } else {
    // Create needed dots.
    for (var i = existingDotCount; i < newDotCount; i++) {
      var dot = createDot();
      dotContainer.appendChild(dot);
    }
  }
}

document.registerElement('basic-page-dots', PageDots);

},{"../../basic-component-mixins/src/ChildrenContent":3,"../../basic-component-mixins/src/CollectiveElement":4,"../../basic-component-mixins/src/ContentFirstChildTarget":6,"../../basic-component-mixins/src/Keyboard":7,"../../basic-component-mixins/src/TargetSelection":8,"../../basic-element-base/src/ElementBase":10}]},{},[11])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9BdHRyaWJ1dGVNYXJzaGFsbGluZy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0F1dG9tYXRpY05vZGVGaW5kaW5nLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ2hpbGRyZW5Db250ZW50LmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ29sbGVjdGl2ZUVsZW1lbnQuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Db21wb3NhYmxlLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ29udGVudEZpcnN0Q2hpbGRUYXJnZXQuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9LZXlib2FyZC5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1RhcmdldFNlbGVjdGlvbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1RlbXBsYXRlU3RhbXBpbmcuanMiLCJwYWNrYWdlcy9iYXNpYy1lbGVtZW50LWJhc2Uvc3JjL0VsZW1lbnRCYXNlLmpzIiwicGFja2FnZXMvYmFzaWMtcGFnZS1kb3RzL3NyYy9QYWdlRG90cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQ09lLFVBQUMsSUFBSTs7Y0FBVyxvQkFBb0I7O2FBQXBCLG9CQUFvQjs0QkFBcEIsb0JBQW9COztvRUFBcEIsb0JBQW9COzs7aUJBQXBCLG9CQUFvQjs7Ozs7OytDQUt4QixJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRTtBQUNqRCx1Q0FOMkIsb0JBQW9CLGdEQU1YO0FBQUUscUNBTlgsb0JB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VyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ25ELFVBQUksR0FBRyxHQUFHLFNBQVMsRUFBRSxDQUFDO0FBQ3RCLGtCQUFZLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQy9CO0dBQ0Y7Q0FDRjs7QUFHRCxRQUFRLENBQUMsZUFBZSxDQUFDLGlCQUFpQixFQUFFLFFBQVEsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxuICogTWFyc2hhbGwgYXR0cmlidXRlcyB0byBwcm9wZXJ0aWVzIChhbmQgZXZlbnR1YWxseSB2aWNlIHZlcnNhKS5cbiAqIE9ubHkgc3VwcG9ydHMgc3RyaW5nIHByb3BlcnRpZXMgZm9yIG5vdy5cbiAqXG4gKiBAbWl4aW4gQXR0cmlidXRlTWFyc2hhbGxpbmdcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4gY2xhc3MgQXR0cmlidXRlTWFyc2hhbGxpbmcgZXh0ZW5kcyBiYXNlIHtcblxuICAvKlxuICAgKiBIYW5kbGUgYSBjaGFuZ2UgdG8gdGhlIGF0dHJpYnV0ZSB3aXRoIHRoZSBnaXZlbiBuYW1lLlxuICAgKi9cbiAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xuICAgIGlmIChzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2spIHsgc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKCk7IH1cbiAgICAvLyBJZiB0aGUgYXR0cmlidXRlIG5hbWUgY29ycmVzcG9uZHMgdG8gYSBwcm9wZXJ0eSBuYW1lLCB0aGVuIHNldCB0aGF0XG4gICAgLy8gcHJvcGVydHkuIElnbm9yZSBjaGFuZ2VzIGluIHN0YW5kYXJkIEhUTUxFbGVtZW50IHByb3BlcnRpZXMuXG4gICAgbGV0IHByb3BlcnR5TmFtZSA9IGF0dHJpYnV0ZVRvUHJvcGVydHlOYW1lKG5hbWUpO1xuICAgIGlmIChwcm9wZXJ0eU5hbWUgaW4gdGhpcyAmJiAhKHByb3BlcnR5TmFtZSBpbiBIVE1MRWxlbWVudC5wcm90b3R5cGUpKSB7XG4gICAgICB0aGlzW3Byb3BlcnR5TmFtZV0gPSBuZXdWYWx1ZTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuICAgIFtdLmZvckVhY2guY2FsbCh0aGlzLmF0dHJpYnV0ZXMsIGF0dHJpYnV0ZSA9PiB7XG4gICAgICB0aGlzLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhhdHRyaWJ1dGUubmFtZSwgdW5kZWZpbmVkLCBhdHRyaWJ1dGUudmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbn07XG5cblxuLy8gQ29udmVydCBjYW1lbCBjYXNlIGZvb0JhciBuYW1lIHRvIGh5cGhlbmF0ZWQgZm9vLWJhci5cbmZ1bmN0aW9uIGF0dHJpYnV0ZVRvUHJvcGVydHlOYW1lKGF0dHJpYnV0ZU5hbWUpIHtcbiAgbGV0IHByb3BlcnR5TmFtZSA9IGF0dHJpYnV0ZU5hbWUucmVwbGFjZSgvLShbYS16XSkvZywgbSA9PiBtWzFdLnRvVXBwZXJDYXNlKCkpO1xuICByZXR1cm4gcHJvcGVydHlOYW1lO1xufVxuXG4vLyBDb252ZXJ0IGh5cGhlbmF0ZWQgZm9vLWJhciBuYW1lIHRvIGNhbWVsIGNhc2UgZm9vQmFyLlxuLy8gVE9ETzogVXNlIHRoaXMgd2hlbiB3ZSBzdXBwb3J0IHJlZmxlY3Rpb24gb2YgcHJvcGVydGllcyB0byBhdHRyaWJ1dGVzLlxuLy8gZnVuY3Rpb24gcHJvcGVydHlUb0F0dHJpYnV0ZU5hbWUocHJvcGVydHlOYW1lKSB7XG4vLyAgIGxldCBhdHRyaWJ1dGVOYW1lID0gcHJvcGVydHlOYW1lLnJlcGxhY2UoLyhbYS16XVtBLVpdKS9nLCBnID0+IGdbMF0gKyAnLScgKyBnWzFdLnRvTG93ZXJDYXNlKCkpO1xuLy8gICByZXR1cm4gYXR0cmlidXRlTmFtZTtcbi8vIH1cbiIsIi8qKlxuICogTWl4aW4gdG8gc3VwcG9ydCBQb2x5bWVyLXN0eWxlIGF1dG9tYXRpYyBub2RlIGZpbmRpbmcuXG4gKlxuICogVGhpcyBhZGRzIGEgbWVtYmVyIG9uIHRoZSBjb21wb25lbnQgY2FsbGVkIGAkYCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlZmVyZW5jZVxuICogZWxlbWVudHMgd2l0aCBJRHMuIEUuZy4sIGlmIGNvbXBvbmVudCdzIHNoYWRvdyBjb250YWlucyBhbiBlbGVtZW50XG4gKiBgPGJ1dHRvbiBpZD1cImZvb1wiPmAsIHRoZW4gdGhpcyBtaXhpbiB3aWxsIGNyZWF0ZSBhIG1lbWJlciBgdGhpcy4kLmZvb2AgdGhhdFxuICogcG9pbnRzIHRvIHRoYXQgYnV0dG9uLiBTdWNoIHJlZmVyZW5jZXMgc2ltcGxpZnkgYSBjb21wb25lbnQncyBhY2Nlc3MgdG8gaXRzXG4gKiBvd24gZWxlbWVudHMuXG4gKlxuICogVGhpcyB0cmFkZXMgb2ZmIGEgb25lLXRpbWUgY29zdCBvZiBxdWVyeWluZyBhbGwgZWxlbWVudHMgaW4gdGhlIHNoYWRvdyB0cmVlXG4gKiBhZ2FpbnN0IGhhdmluZyB0byBxdWVyeSBmb3IgYW4gZWxlbWVudCBlYWNoIHRpbWUgdGhlIGNvbXBvbmVudCB3YW50cyB0b1xuICogaW5zcGVjdCBvciBtYW5pcHVsYXRlIGl0LlxuICpcbiAqIFNlZSBodHRwczovL3d3dy5wb2x5bWVyLXByb2plY3Qub3JnLzEuMC9kb2NzL2Rldmd1aWRlL2xvY2FsLWRvbS5odG1sI25vZGUtZmluZGluZy5cbiAqXG4gKiBAbWl4aW4gQXV0b21hdGljTm9kZUZpbmRpbmdcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4gY2xhc3MgQXV0b21hdGljTm9kZUZpbmRpbmcgZXh0ZW5kcyBiYXNlIHtcblxuICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuICAgIGlmICh0aGlzLnNoYWRvd1Jvb3QpIHtcbiAgICAgIHRoaXMuJCA9IHt9O1xuICAgICAgbGV0IG5vZGVzV2l0aElkcyA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yQWxsKCdbaWRdJyk7XG4gICAgICBbXS5mb3JFYWNoLmNhbGwobm9kZXNXaXRoSWRzLCBub2RlID0+IHtcbiAgICAgICAgbGV0IGlkID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICAgIHRoaXMuJFtpZF0gPSBub2RlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbn07XG4iLCIvKipcbiAqIE1peGluIHRoYXQgZGVmaW5lcyBhIGNvbXBvbmVudCdzIGNvbnRlbnQgYXMgaXRzIGNoaWxkcmVuLiBDaGFuZ2VzIGluIHRoZVxuICogY29udGVudCB3aWxsIGJlIHRyYWNrZWQsIGFuZCBhIGNvbnRlbnRDaGFuZ2VkIG1ldGhvZCB3aWxsIGJlIGludm9rZWQgb24gdGhlXG4gKiBjb21wb25lbnQgd2hlbiBpdHMgY2hpbGRyZW4gY2hhbmdlLlxuICpcbiAqIEBtaXhpbiBDaGlsZHJlbkNvbnRlbnRcbiAqL1xuXG4vLyBUT0RPOiBEb24ndCByZXNwb25kIHRvIGNoYW5nZXMgaW4gYXR0cmlidXRlcywgb3IgYXQgbGVhc3Qgb2ZmZXIgdGhhdCBhcyBhblxuLy8gb3B0aW9uLlxuXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4gY2xhc3MgQ2hpbGRyZW5Db250ZW50IGV4dGVuZHMgYmFzZSB7XG5cbiAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cblxuICAgIG9ic2VydmVDb250ZW50Q2hhbmdlcyh0aGlzKTtcblxuICAgIC8vIE1ha2UgYW4gaW5pdGlhbCBjYWxsIHRvIGNvbnRlbnRDaGFuZ2VkKCkgc28gdGhhdCB0aGUgY29tcG9uZW50IGNhbiBkb1xuICAgIC8vIGluaXRpYWxpemF0aW9uIHRoYXQgaXQgbm9ybWFsbHkgZG9lcyB3aGVuIGNvbnRlbnQgY2hhbmdlcy5cbiAgICB0aGlzLmNvbnRlbnRDaGFuZ2VkKCk7XG4gIH1cblxuICBjb250ZW50Q2hhbmdlZCgpIHtcbiAgICBpZiAoc3VwZXIuY29udGVudENoYW5nZWQpIHsgc3VwZXIuY29udGVudENoYW5nZWQoKTsgfVxuICAgIGxldCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnY29udGVudC1jaGFuZ2VkJyk7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgZmxhdHRlbmVkIGNvbnRlbnQgb2YgdGhpcyBjb21wb25lbnQuXG4gICAqXG4gICAqIEBwcm9wZXJ0eSBjb250ZW50XG4gICAqIEB0eXBlIFtPYmplY3RdXG4gICAqL1xuICBnZXQgY29udGVudCgpIHtcbiAgICByZXR1cm4gZXhwYW5kQ29udGVudEVsZW1lbnRzKHRoaXMuY2hpbGRyZW4pO1xuICB9XG4gIHNldCBjb250ZW50KHZhbHVlKSB7XG4gICAgaWYgKCdjb250ZW50JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5jb250ZW50ID0gdmFsdWU7IH1cbiAgfVxuXG4gIC8qXG4gICAqIFJldHVybnMgYW4gaW4tb3JkZXIgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiwgZXhwYW5kaW5nIGFueSBjb250ZW50IG5vZGVzLlxuICAgKiBMaWtlIHRoZSBzdGFuZGFyZCBjaGlsZHJlbiBwcm9wZXJ0eSwgdGhpcyBza2lwcyB0ZXh0IG5vZGVzLlxuICAgKlxuICAgKiBUT0RPOiBUaGlzIHdhbGtzIHRoZSB3aG9sZSBjb250ZW50IHRyZWUgZXZlcnkgdGltZSB0aGUgbGlzdCBpcyByZXF1ZXN0ZWQuXG4gICAqIEl0J2QgYmUgbmljZSB0byBjYWNoZSB0aGUgYW5zd2VyIGFuZCBpbnZhbGlkYXRlIGl0IG9ubHkgd2hlbiBjb250ZW50XG4gICAqIGFjdHVhbGx5IGNoYW5nZXMuXG4gICAqL1xuICBnZXQgZGlzdHJpYnV0ZWRDaGlsZHJlbigpIHtcbiAgICByZXR1cm4gZXhwYW5kQ29udGVudEVsZW1lbnRzKHRoaXMuY2hpbGRyZW4sIGZhbHNlKTtcbiAgfVxuXG4gIC8qXG4gICAqIFJldHVybnMgYW4gaW4tb3JkZXIgY29sbGVjdGlvbiBvZiBjaGlsZCBub2RlcywgZXhwYW5kaW5nIGFueSBjb250ZW50IG5vZGVzLlxuICAgKiBMaWtlIHRoZSBzdGFuZGFyZCBjaGlsZE5vZGVzIHByb3BlcnR5LCB0aGlzIGluY2x1ZGVzIHRleHQgbm9kZXMuXG4gICAqL1xuICBnZXQgZGlzdHJpYnV0ZWRDaGlsZE5vZGVzKCkge1xuICAgIHJldHVybiBleHBhbmRDb250ZW50RWxlbWVudHModGhpcy5jaGlsZE5vZGVzLCB0cnVlKTtcbiAgfVxuXG4gIC8qXG4gICAqIFJldHVybnMgdGhlIGNvbmNhdGVuYXRlZCB0ZXh0IGNvbnRlbnQgb2YgYWxsIGNoaWxkIG5vZGVzLCBleHBhbmRpbmcgYW55XG4gICAqIGNvbnRlbnQgbm9kZXMuXG4gICAqL1xuICBnZXQgZGlzdHJpYnV0ZWRUZXh0Q29udGVudCgpIHtcbiAgICBsZXQgc3RyaW5ncyA9IHRoaXMuZGlzdHJpYnV0ZWRDaGlsZE5vZGVzLm1hcChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgcmV0dXJuIGNoaWxkLnRleHRDb250ZW50O1xuICAgIH0pO1xuICAgIHJldHVybiBzdHJpbmdzLmpvaW4oJycpO1xuICB9XG5cbn07XG5cblxuLypcbiAqIEdpdmVuIGEgYXJyYXkgb2Ygbm9kZXMsIHJldHVybiBhIG5ldyBhcnJheSB3aXRoIGFueSBjb250ZW50IGVsZW1lbnRzIGV4cGFuZGVkXG4gKiB0byB0aGUgbm9kZXMgZGlzdHJpYnV0ZWQgdG8gdGhhdCBjb250ZW50IGVsZW1lbnQuIFRoaXMgcnVsZSBpcyBhcHBsaWVkXG4gKiByZWN1cnNpdmVseS5cbiAqXG4gKiBJZiBpbmNsdWRlVGV4dE5vZGVzIGlzIHRydWUsIHRleHQgbm9kZXMgd2lsbCBiZSBpbmNsdWRlZCwgYXMgaW4gdGhlXG4gKiBzdGFuZGFyZCBjaGlsZE5vZGVzIHByb3BlcnR5OyBieSBkZWZhdWx0LCB0aGlzIHNraXBzIHRleHQgbm9kZXMsIGxpa2UgdGhlXG4gKiBzdGFuZGFyZCBjaGlsZHJlbiBwcm9wZXJ0eS5cbiAqL1xuZnVuY3Rpb24gZXhwYW5kQ29udGVudEVsZW1lbnRzKG5vZGVzLCBpbmNsdWRlVGV4dE5vZGVzKSB7XG4gIGxldCBleHBhbmRlZCA9IEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChub2Rlcywgbm9kZSA9PiB7XG4gICAgLy8gV2Ugd2FudCB0byBzZWUgaWYgdGhlIG5vZGUgaXMgYW4gaW5zdGFuY2VvZiBIVE1MU2xvdEVMZW1lbnQsIGJ1dFxuICAgIC8vIHRoYXQgY2xhc3Mgd29uJ3QgZXhpc3QgaWYgdGhlIGJyb3dzZXIgdGhhdCBkb2Vzbid0IHN1cHBvcnQgbmF0aXZlXG4gICAgLy8gU2hhZG93IERPTSBhbmQgaWYgdGhlIFNoYWRvdyBET00gcG9seWZpbGwgaGFzbid0IGJlZW4gbG9hZGVkLiBJbnN0ZWFkLFxuICAgIC8vIHdlIGRvIGEgc2ltcGxpc3RpYyBjaGVjayB0byBzZWUgaWYgdGhlIHRhZyBuYW1lIGlzIFwic2xvdFwiIG9yIFwiY29udGVudFwiLlxuICAgIGlmIChub2RlLmxvY2FsTmFtZSAmJiAobm9kZS5sb2NhbE5hbWUgPT09IFwic2xvdFwiIHx8IG5vZGUubG9jYWxOYW1lID09PSBcImNvbnRlbnRcIikpIHtcbiAgICAgIC8vIGNvbnRlbnQgZWxlbWVudDsgdXNlIGl0cyBkaXN0cmlidXRlZCBub2RlcyBpbnN0ZWFkLlxuICAgICAgbGV0IGRpc3RyaWJ1dGVkTm9kZXMgPSBub2RlLmdldERpc3RyaWJ1dGVkTm9kZXMoKTtcbiAgICAgIHJldHVybiBkaXN0cmlidXRlZE5vZGVzID9cbiAgICAgICAgZXhwYW5kQ29udGVudEVsZW1lbnRzKGRpc3RyaWJ1dGVkTm9kZXMsIGluY2x1ZGVUZXh0Tm9kZXMpIDpcbiAgICAgICAgW107XG4gICAgfSBlbHNlIGlmIChub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIC8vIFBsYWluIGVsZW1lbnQ7IHVzZSBhcyBpcy5cbiAgICAgIHJldHVybiBbbm9kZV07XG4gICAgfSBlbHNlIGlmIChub2RlIGluc3RhbmNlb2YgVGV4dCAmJiBpbmNsdWRlVGV4dE5vZGVzKSB7XG4gICAgICAvLyBUZXh0IG5vZGUuXG4gICAgICByZXR1cm4gW25vZGVdO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDb21tZW50LCBwcm9jZXNzaW5nIGluc3RydWN0aW9uLCBldGMuOyBza2lwLlxuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfSk7XG4gIGxldCBmbGF0dGVuZWQgPSBbXS5jb25jYXQoLi4uZXhwYW5kZWQpO1xuICByZXR1cm4gZmxhdHRlbmVkO1xufVxuXG5cbmZ1bmN0aW9uIG9ic2VydmVDb250ZW50Q2hhbmdlcyhlbGVtZW50KSB7XG4gIGVsZW1lbnQuX2NvbnRlbnRDaGFuZ2VPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+XG4gICAgZWxlbWVudC5jb250ZW50Q2hhbmdlZCgpXG4gICk7XG4gIGVsZW1lbnQuX2NvbnRlbnRDaGFuZ2VPYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQsIHtcbiAgICAvLyBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgIGNoYXJhY3RlckRhdGE6IHRydWUsXG4gICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgIHN1YnRyZWU6IHRydWVcbiAgfSk7XG59XG4iLCIvKipcbiAqIE1peGluIHdoaWNoIGFsbG93cyBhIGNvbXBvbmVudCB0byBwcm92aWRlIGFnZ3JlZ2F0ZSBiZWhhdmlvciB3aXRoIG90aGVyXG4gKiBlbGVtZW50cywgZS5nLiwgZm9yIGtleWJvYXJkIGhhbmRsaW5nLlxuICpcbiAqIEBtaXhpbiBDb2xsZWN0aXZlRWxlbWVudFxuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4gY2xhc3MgQ29sbGVjdGl2ZUVsZW1lbnQgZXh0ZW5kcyBiYXNlIHtcblxuICBnZXQgY29sbGVjdGl2ZSgpIHtcbiAgICAvLyBMYXppbHkgY3JlYXRlIHRoZSBjb2xsZWN0aXZlIHdoZW4gZmlyc3QgYXNrZWQgZm9yIGl0LlxuICAgIGlmICghdGhpcy5fY29sbGVjdGl2ZSkge1xuICAgICAgdGhpcy5fY29sbGVjdGl2ZSA9IG5ldyBDb2xsZWN0aXZlKCk7XG4gICAgICB0aGlzLl9jb2xsZWN0aXZlLmFzc2ltaWxhdGUodGhpcyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9jb2xsZWN0aXZlO1xuICB9XG4gIHNldCBjb2xsZWN0aXZlKHZhbHVlKSB7XG4gICAgaWYgKCdjb2xsZWN0aXZlJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5jb2xsZWN0aXZlID0gdmFsdWU7IH1cbiAgICB0aGlzLl9jb2xsZWN0aXZlID0gdmFsdWU7XG4gIH1cblxuICBnZXQgdGFyZ2V0KCkge1xuICAgIHJldHVybiBzdXBlci50YXJnZXQ7XG4gIH1cbiAgc2V0IHRhcmdldChlbGVtZW50KSB7XG4gICAgaWYgKCd0YXJnZXQnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnRhcmdldCA9IGVsZW1lbnQ7IH1cbiAgICB0aGlzLmNvbGxlY3RpdmUuYXNzaW1pbGF0ZShlbGVtZW50KTtcbiAgfVxuXG59O1xuXG5cbmNsYXNzIENvbGxlY3RpdmUge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX2VsZW1lbnRzID0gW107XG4gIH1cblxuICBhc3NpbWlsYXRlKHRhcmdldCkge1xuICAgIGxldCBlbGVtZW50cyA9IHRhcmdldC5jb2xsZWN0aXZlID9cbiAgICAgIHRhcmdldC5jb2xsZWN0aXZlLmVsZW1lbnRzIDpcbiAgICAgIFt0YXJnZXRdO1xuICAgIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBlbGVtZW50LmNvbGxlY3RpdmUgPSB0aGlzO1xuICAgICAgdGhpcy5fZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICB9KTtcbiAgICB0aGlzLmludm9rZUNvbGxlY3RpdmVNZXRob2QoJ2NvbGxlY3RpdmVDaGFuZ2VkJyk7XG4gIH1cblxuICBnZXQgZWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRzO1xuICB9XG5cbiAgaW52b2tlQ29sbGVjdGl2ZU1ldGhvZChtZXRob2QsIC4uLmFyZ3MpIHtcbiAgICAvLyBJbnZva2UgZnJvbSBpbm5lcm1vc3QgdG8gb3V0ZXJtb3N0LlxuICAgIGxldCBlbGVtZW50cyA9IHRoaXMuZWxlbWVudHM7XG4gICAgZm9yIChsZXQgaSA9IGVsZW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xuICAgICAgaWYgKGVsZW1lbnRbbWV0aG9kXSkge1xuICAgICAgICBlbGVtZW50W21ldGhvZF0uYXBwbHkoZWxlbWVudCwgYXJncyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0IG91dGVybW9zdEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudHNbMF07XG4gIH1cblxufVxuIiwiLyoqXG4gKiBNaXhpbiB0byBtYWtlIGEgY2xhc3MgbW9yZSBlYXNpbHkgY29tcG9zYWJsZSB3aXRoIG90aGVyIG1peGlucy5cbiAqXG4gKiBUaGUgbWFpbiBjb250cmlidXRpb24gaXMgdGhlIGludHJvZHVjdGlvbiBvZiBhIGBjb21wb3NlYCBtZXRob2QgdGhhdCBhcHBsaWVzXG4gKiBhIHNldCBvZiBtaXhpbiBmdW5jdGlvbnMgYW5kIHJldHVybnMgdGhlIHJlc3VsdGluZyBuZXcgY2xhc3MuIFRoaXMgc3VnYXJcbiAqIGNhbiBtYWtlIHRoZSBhcHBsaWNhdGlvbiBvZiBtYW55IG1peGlucyBhdCBvbmNlIGVhc2llciB0byByZWFkLlxuICpcbiAqIEBtaXhpbiBDb21wb3NhYmxlXG4gKi9cblxuXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4gY2xhc3MgQ29tcG9zYWJsZSBleHRlbmRzIGJhc2Uge1xuXG4gIC8qKlxuICAgKiBBcHBseSBhIHNldCBvZiBtaXhpbiBmdW5jdGlvbnMgb3IgbWl4aW4gb2JqZWN0cyB0byB0aGUgcHJlc2VudCBjbGFzcyBhbmRcbiAgICogcmV0dXJuIHRoZSBuZXcgY2xhc3MuXG4gICAqXG4gICAqIEEgY2FsbCBsaWtlXG4gICAqXG4gICAqICAgICBsZXQgTXlDbGFzcyA9IE1peGluMShNaXhpbjIoTWl4aW4zKE1peGluNChNaXhpbjUoQmFzZUNsYXNzKSkpKSk7XG4gICAqXG4gICAqIENhbiBiZSBjb252ZXJ0ZWQgdG86XG4gICAqXG4gICAqICAgICBsZXQgTXlDbGFzcyA9IENvbXBvc2FibGUoQmFzZUNsYXNzKS5jb21wb3NlKFxuICAgKiAgICAgICBNaXhpbjEsXG4gICAqICAgICAgIE1peGluMixcbiAgICogICAgICAgTWl4aW4zLFxuICAgKiAgICAgICBNaXhpbjQsXG4gICAqICAgICAgIE1peGluNVxuICAgKiAgICAgKTtcbiAgICpcbiAgICogVGhpcyBmdW5jdGlvbiBjYW4gYWxzbyB0YWtlIG1peGluIG9iamVjdHMuIEEgbWl4aW4gb2JqZWN0IGlzIGp1c3QgYVxuICAgKiBzaG9ydGhhbmQgZm9yIGEgbWl4aW4gZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGEgbmV3IHN1YmNsYXNzIHdpdGggdGhlIGdpdmVuXG4gICAqIG1lbWJlcnMuIFRoZSBtaXhpbiBvYmplY3QncyBtZW1iZXJzIGFyZSAqbm90KiBjb3BpZWQgZGlyZWN0bHkgb250byB0aGVcbiAgICogcHJvdG90eXBlIG9mIHRoZSBiYXNlIGNsYXNzLCBhcyB3aXRoIHRyYWRpdGlvbmFsIG1peGlucy5cbiAgICovXG4gIHN0YXRpYyBjb21wb3NlKC4uLm1peGlucykge1xuICAgIC8vIFdlIGNyZWF0ZSBhIG5ldyBzdWJjbGFzcyBmb3IgZWFjaCBtaXhpbiBpbiB0dXJuLiBUaGUgcmVzdWx0IGJlY29tZXNcbiAgICAvLyB0aGUgYmFzZSBjbGFzcyBleHRlbmRlZCBieSBhbnkgc3Vic2VxdWVudCBtaXhpbnMuIEl0IHR1cm5zIG91dCB0aGF0XG4gICAgLy8gd2UgY2FuIHVzZSBBcnJheS5yZWR1Y2UoKSB0byBjb25jaXNlbHkgZXhwcmVzcyB0aGlzLCB1c2luZyB0aGUgY3VycmVudFxuICAgIC8vIG9iamVjdCBhcyB0aGUgc2VlZCBmb3IgcmVkdWNlKCkuXG4gICAgcmV0dXJuIG1peGlucy5yZWR1Y2UoY29tcG9zZUNsYXNzLCB0aGlzKTtcbiAgfVxuXG59O1xuXG5cbi8vIFByb3BlcnRpZXMgZGVmaW5lZCBieSBPYmplY3QgdGhhdCB3ZSBkb24ndCB3YW50IHRvIG1peGluLlxuY29uc3QgTk9OX01JWEFCTEVfT0JKRUNUX1BST1BFUlRJRVMgPSBbXG4gICdjb25zdHJ1Y3Rvcidcbl07XG5cbi8qXG4gKiBBcHBseSB0aGUgbWl4aW4gdG8gdGhlIGdpdmVuIGJhc2UgY2xhc3MgdG8gcmV0dXJuIGEgbmV3IGNsYXNzLlxuICogVGhlIG1peGluIGNhbiBlaXRoZXIgYmUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIG1vZGlmaWVkIGNsYXNzLCBvciBhXG4gKiBwbGFpbiBvYmplY3Qgd2hvc2UgbWVtYmVycyB3aWxsIGJlIGNvcGllZCB0byB0aGUgbmV3IGNsYXNzJyBwcm90b3R5cGUuXG4gKi9cbmZ1bmN0aW9uIGNvbXBvc2VDbGFzcyhiYXNlLCBtaXhpbikge1xuICBpZiAodHlwZW9mIG1peGluID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gTWl4aW4gZnVuY3Rpb25cbiAgICByZXR1cm4gbWl4aW4oYmFzZSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gTWl4aW4gb2JqZWN0XG4gICAgY2xhc3MgU3ViY2xhc3MgZXh0ZW5kcyBiYXNlIHt9XG4gICAgY29weU93blByb3BlcnRpZXMobWl4aW4sIFN1YmNsYXNzLnByb3RvdHlwZSwgTk9OX01JWEFCTEVfT0JKRUNUX1BST1BFUlRJRVMpO1xuICAgIHJldHVybiBTdWJjbGFzcztcbiAgfVxufVxuXG5cbi8qXG4gKiBDb3B5IHRoZSBnaXZlbiBwcm9wZXJ0aWVzL21ldGhvZHMgdG8gdGhlIHRhcmdldC5cbiAqIFJldHVybiB0aGUgdXBkYXRlZCB0YXJnZXQuXG4gKi9cbmZ1bmN0aW9uIGNvcHlPd25Qcm9wZXJ0aWVzKHNvdXJjZSwgdGFyZ2V0LCBpZ25vcmVQcm9wZXJ0eU5hbWVzID0gW10pIHtcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoc291cmNlKS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgIGlmIChpZ25vcmVQcm9wZXJ0eU5hbWVzLmluZGV4T2YobmFtZSkgPCAwKSB7XG4gICAgICBsZXQgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBuYW1lKTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB0YXJnZXQ7XG59XG4iLCIvKipcbiAqIE1peGluIHRoYXQgZGVmaW5lcyB0aGUgdGFyZ2V0IG9mIGEgY29tcG9uZW50IC0tIHRoZSBlbGVtZW50IHRoZSBjb21wb25lbnQgaXNcbiAqIG1hbmFnaW5nIG9yIHNvbWVob3cgcmVzcG9uc2libGUgZm9yIC0tIGFzIGl0cyBmaXJzdCBjaGlsZC5cbiAqXG4gKiBAbWl4aW4gQ29udGVudEZpcnN0Q2hpbGRUYXJnZXRcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4gY2xhc3MgQ29udGVudEZpcnN0Q2hpbGRUYXJnZXQgZXh0ZW5kcyBiYXNlIHtcblxuICBjb250ZW50Q2hhbmdlZCgpIHtcbiAgICBpZiAoc3VwZXIuY29udGVudENoYW5nZWQpIHsgc3VwZXIuY29udGVudENoYW5nZWQoKTsgfVxuICAgIGxldCBjb250ZW50ID0gdGhpcy5jb250ZW50O1xuICAgIGxldCB0YXJnZXQgPSBjb250ZW50ICYmIGNvbnRlbnRbMF07XG4gICAgaWYgKHRhcmdldCkge1xuICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHRhcmdldCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFyZ2V0O1xuICB9XG4gIHNldCB0YXJnZXQoZWxlbWVudCkge1xuICAgIGlmICgndGFyZ2V0JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci50YXJnZXQgPSBlbGVtZW50OyB9XG4gICAgdGhpcy5fdGFyZ2V0ID0gZWxlbWVudDtcbiAgfVxuXG59O1xuIiwiLyoqXG4gKiBNaXhpbiB3aGljaCBtYW5hZ2VzIHRoZSBrZXlkb3duIGhhbmRsaW5nIGZvciBhIGNvbXBvbmVudC5cbiAqXG4gKiBUT0RPOiBEb2N1bWVudCBjb2xsZWN0aXZlIGJlaGF2aW9yLlxuICogVE9ETzogUHJvdmlkZSBiYXNlbGluZSBiZWhhdmlvciBvdXRzaWRlIG9mIGEgY29sbGVjdGl2ZS5cbiAqXG4gKiBAbWl4aW4gS2V5Ym9hcmRcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4gY2xhc3MgS2V5Ym9hcmQgZXh0ZW5kcyBiYXNlIHtcblxuICAvLyBEZWZhdWx0IGtleWRvd24gaGFuZGxlci4gVGhpcyB3aWxsIHR5cGljYWxseSBiZSBoYW5kbGVkIGJ5IG90aGVyIG1peGlucy5cbiAga2V5ZG93bihldmVudCkge1xuICAgIGlmIChzdXBlci5rZXlkb3duKSB7IHJldHVybiBzdXBlci5rZXlkb3duKGV2ZW50KTsgfVxuICB9XG5cbiAgLypcbiAgICogSWYgd2UncmUgbm93IHRoZSBvdXRlcm1vc3QgZWxlbWVudCBvZiB0aGUgY29sbGVjdGl2ZSwgc2V0IHVwIHRvIHJlY2VpdmVcbiAgICoga2V5Ym9hcmQgZXZlbnRzLiBJZiB3ZSdyZSBubyBsb25nZXIgdGhlIG91dGVybW9zdCBlbGVtZW50LCBzdG9wIGxpc3RlbmluZy5cbiAgICovXG4gIGNvbGxlY3RpdmVDaGFuZ2VkKCkge1xuICAgIGlmIChzdXBlci5jb2xsZWN0aXZlQ2hhbmdlZCkgeyBzdXBlci5jb2xsZWN0aXZlQ2hhbmdlZCgpOyB9XG5cbiAgICBsZXQgb3V0ZXJtb3N0RWxlbWVudCA9IHRoaXMuY29sbGVjdGl2ZS5vdXRlcm1vc3RFbGVtZW50O1xuICAgIGlmIChvdXRlcm1vc3RFbGVtZW50ID09PSB0aGlzICYmICF0aGlzLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAvLyBTaW5jZSB3ZSdyZSBoYW5kbGluZyB0aGUga2V5Ym9hcmQsIHNlZSBpZiB3ZSBjYW4gYWRvcHQgYW4gQVJJQSBsYWJlbFxuICAgICAgLy8gZnJvbSBhbiBpbm5lciBlbGVtZW50IG9mIHRoZSBjb2xsZWN0aXZlLlxuICAgICAgbGV0IGxhYmVsID0gZ2V0Q29sbGVjdGl2ZUFyaWFMYWJlbCh0aGlzLmNvbGxlY3RpdmUpO1xuICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgbGFiZWwpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE1ha2Ugc3VyZSBvbmx5IHRoZSBvdXRlcm1vc3QgZWxlbWVudCBpbiB0aGUgY29sbGVjdGl2ZSBpcyBsaXN0ZW5pbmcgdG9cbiAgICAvLyB0aGUga2V5Ym9hcmQuXG4gICAgdGhpcy5jb2xsZWN0aXZlLmVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG5cbiAgICAgIGxldCBzaG91bGRMaXN0ZW4gPSAoZWxlbWVudCA9PT0gb3V0ZXJtb3N0RWxlbWVudCk7XG4gICAgICBsZXQgaXNMaXN0ZW5pbmcgPSBpc0xpc3RlbmluZ1RvS2V5ZG93bihlbGVtZW50KTtcbiAgICAgIGlmIChpc0xpc3RlbmluZyAhPT0gc2hvdWxkTGlzdGVuKSB7XG4gICAgICAgIGlmIChzaG91bGRMaXN0ZW4pIHtcbiAgICAgICAgICBzdGFydExpc3RlbmluZ1RvS2V5ZG93bihlbGVtZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdG9wTGlzdGVuaW5nVG9LZXlkb3duKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIXNob3VsZExpc3RlbiAmJiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgIC8vIFJlbW92ZSB0aGUgQVJJQSBsYWJlbCBmcm9tIGlubmVyIGVsZW1lbnQncyBub3QgaGFuZGxpbmcgdGhlIGtleWJvYXJkLlxuICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpO1xuICAgICAgfVxuXG4gICAgfSk7XG4gIH1cblxufTtcblxuXG5mdW5jdGlvbiBrZXlkb3duKGV2ZW50KSB7XG5cbiAgLy8gR2l2ZSBjb2xsZWN0aXZlIGVsZW1lbnRzIGEgc2hvdCBhdCB0aGUgZXZlbnQsIHdvcmtpbmcgZnJvbSBpbm5lcm1vc3QgdG9cbiAgLy8gb3V0ZXJtb3N0ICh0aGlzIGVsZW1lbnQpLlxuICBsZXQgaGFuZGxlZDtcbiAgbGV0IGVsZW1lbnRzID0gdGhpcy5jb2xsZWN0aXZlLmVsZW1lbnRzO1xuICBmb3IgKGxldCBpID0gZWxlbWVudHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBsZXQgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xuICAgIGhhbmRsZWQgPSBlbGVtZW50LmtleWRvd24gJiYgZWxlbWVudC5rZXlkb3duKGV2ZW50KTtcbiAgICBpZiAoaGFuZGxlZCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKGhhbmRsZWQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG59XG5cblxuLy8gUmV0dXJuIHRoZSBmaXJzdCBBUklBIGxhYmVsIGRlZmluZWQgYnkgdGhlIGNvbGxlY3RpdmUuXG5mdW5jdGlvbiBnZXRDb2xsZWN0aXZlQXJpYUxhYmVsKGNvbGxlY3RpdmUpIHtcbiAgbGV0IGxhYmVscyA9IGNvbGxlY3RpdmUuZWxlbWVudHMubWFwKGVsZW1lbnQgPT4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSk7XG4gIHJldHVybiBsYWJlbHMuZmluZChsYWJlbCA9PiBsYWJlbCAhPT0gbnVsbCk7XG59XG5cblxuZnVuY3Rpb24gaXNMaXN0ZW5pbmdUb0tleWRvd24oZWxlbWVudCkge1xuICByZXR1cm4gZWxlbWVudC5fa2V5ZG93bkxpc3RlbmVyICE9IG51bGw7XG59XG5cblxuZnVuY3Rpb24gc3RhcnRMaXN0ZW5pbmdUb0tleWRvd24oZWxlbWVudCkge1xuICBlbGVtZW50Ll9rZXlkb3duTGlzdGVuZXIgPSBrZXlkb3duLmJpbmQoZWxlbWVudCk7XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGVsZW1lbnQuX2tleWRvd25MaXN0ZW5lcik7XG4gIGlmIChlbGVtZW50LnRhYkluZGV4IDwgMCkge1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd0YWJJbmRleCcsIDApO1xuICB9XG59XG5cblxuZnVuY3Rpb24gc3RvcExpc3RlbmluZ1RvS2V5ZG93bihlbGVtZW50KSB7XG4gIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGVsZW1lbnQuX2tleWRvd25MaXN0ZW5lcik7XG4gIGVsZW1lbnQuX2tleWRvd25MaXN0ZW5lciA9IG51bGw7XG4gIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd0YWJJbmRleCcpO1xufVxuIiwiLyoqXG4gKiBNaXhpbiB0aGF0IGFsbG93cyBhIGNvbXBvbmVudCB0byBkZWxlZ2F0ZSBpdHMgb3duIHNlbGVjdGlvbiBzZW1hbnRpY3MgdG8gYVxuICogdGFyZ2V0IGVsZW1lbnQuIFRoaXMgaXMgdXNlZnVsIHdoZW4gZGVmaW5pbmcgY29tcG9uZW50cyB0aGF0IGFjdCBhc1xuICogb3B0aW9uYWwgZGVjb3JhdG9ycyBmb3IgYSBjb21wb25lbnQgdGhhdCBhY3RzIGxpa2UgYSBsaXN0LlxuICpcbiAqIEBtaXhpbiBUYXJnZXRTZWxlY3Rpb25cbiAqL1xuXG5cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiBjbGFzcyBUYXJnZXRTZWxlY3Rpb24gZXh0ZW5kcyBiYXNlIHtcblxuICAvLyBhdHRhY2hlZENhbGxiYWNrKCkge1xuICAvLyAgIC8vIEFwcGx5IGFueSBzZWxlY3Rpb24gbWFkZSBiZWZvcmUgYXNzaW1pbGF0aW9uLlxuICAvLyAgIGlmICh0aGlzLl9wcmVtYXR1cmVTZWxlY3RlZEluZGV4XG4gIC8vICAgICAgICYmICdzZWxlY3RlZEluZGV4JyBpbiB0aGlzICYmIHRoaXMuc2VsZWN0ZWRJbmRleCA9PT0gLTEpIHtcbiAgLy8gICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHRoaXMuX3ByZW1hdHVyZVNlbGVjdGVkSW5kZXg7XG4gIC8vICAgICB0aGlzLl9wcmVtYXR1cmVTZWxlY3RlZEluZGV4ID0gbnVsbDtcbiAgLy8gICB9XG4gIC8vIH1cblxuICBpbmRleE9mSXRlbShpdGVtKSB7XG4gICAgaWYgKHN1cGVyLmluZGV4T2ZJdGVtKSB7IHN1cGVyLmluZGV4T2ZJdGVtKGl0ZW0pOyB9XG4gICAgbGV0IHRhcmdldCA9IHRoaXMudGFyZ2V0O1xuICAgIHJldHVybiB0YXJnZXQgP1xuICAgICAgdGFyZ2V0LmluZGV4T2ZJdGVtKGl0ZW0pIDpcbiAgICAgIC0xO1xuICB9XG5cbiAgZ2V0IGl0ZW1zKCkge1xuICAgIGxldCB0YXJnZXQgPSB0aGlzLnRhcmdldDtcbiAgICBsZXQgaXRlbXMgPSB0YXJnZXQgJiYgdGFyZ2V0Lml0ZW1zO1xuICAgIHJldHVybiBpdGVtcyB8fCBbXTtcbiAgfVxuXG4gIGl0ZW1zQ2hhbmdlZCgpIHtcbiAgICBpZiAoc3VwZXIuaXRlbXNDaGFuZ2VkKSB7IHN1cGVyLml0ZW1zQ2hhbmdlZCgpOyB9XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnaXRlbXMtY2hhbmdlZCcpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgaW5kZXggb2YgdGhlIGl0ZW0gd2hpY2ggaXMgY3VycmVudGx5IHNlbGVjdGVkLCBvciAtMSBpZiB0aGVyZSBpcyBub1xuICAgKiBzZWxlY3Rpb24uXG4gICAqXG4gICAqIEBwcm9wZXJ0eSBzZWxlY3RlZEluZGV4XG4gICAqIEB0eXBlIE51bWJlclxuICAgKi9cbiAgZ2V0IHNlbGVjdGVkSW5kZXgoKSB7XG4gICAgbGV0IHRhcmdldCA9IHRoaXMudGFyZ2V0O1xuICAgIHJldHVybiB0YXJnZXQgJiYgdGFyZ2V0LnNlbGVjdGVkSW5kZXg7XG4gIH1cbiAgc2V0IHNlbGVjdGVkSW5kZXgoaW5kZXgpIHtcbiAgICBpZiAoJ3NlbGVjdGVkSW5kZXgnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkSW5kZXggPSBpbmRleDsgfVxuICAgIC8vIGlmICgnc2VsZWN0ZWRJbmRleCcgaW4gdGhpcyB7XG4gICAgLy8gICB0aGlzLnNlbGVjdGVkSW5kZXggPSBpbmRleDtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgLy8gU2VsZWN0aW9uIGlzIGJlaW5nIG1hZGUgYmVmb3JlIHRoZSBjb2xsZWN0aXZlIHN1cHBvcnRzIGl0LlxuICAgIC8vICAgdGhpcy5fcHJlbWF0dXJlU2VsZWN0ZWRJbmRleCA9IGluZGV4O1xuICAgIC8vIH1cbiAgICBsZXQgdGFyZ2V0ID0gdGhpcy50YXJnZXQ7XG4gICAgaWYgKHRhcmdldCAmJiB0YXJnZXQuc2VsZWN0ZWRJbmRleCAhPT0gaW5kZXgpIHtcbiAgICAgIHRhcmdldC5zZWxlY3RlZEluZGV4ID0gaW5kZXg7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgaXRlbSwgb3IgbnVsbCBpZiB0aGVyZSBpcyBubyBzZWxlY3Rpb24uXG4gICAqXG4gICAqIEBwcm9wZXJ0eSBzZWxlY3RlZEl0ZW1cbiAgICogQHR5cGUgT2JqZWN0XG4gICAqL1xuICBnZXQgc2VsZWN0ZWRJdGVtKCkge1xuICAgIGxldCB0YXJnZXQgPSB0aGlzLnRhcmdldDtcbiAgICByZXR1cm4gdGFyZ2V0ICYmIHRhcmdldC5zZWxlY3RlZEl0ZW07XG4gIH1cbiAgc2V0IHNlbGVjdGVkSXRlbShpdGVtKSB7XG4gICAgaWYgKCdzZWxlY3RlZEl0ZW0nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkSXRlbSA9IGl0ZW07IH1cbiAgICBsZXQgdGFyZ2V0ID0gdGhpcy50YXJnZXQ7XG4gICAgaWYgKHRhcmdldCkge1xuICAgICAgdGFyZ2V0LnNlbGVjdGVkSXRlbSA9IGl0ZW07XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0ZWRJdGVtQ2hhbmdlZCgpIHtcbiAgICBpZiAoc3VwZXIuc2VsZWN0ZWRJdGVtQ2hhbmdlZCkgeyBzdXBlci5zZWxlY3RlZEl0ZW1DaGFuZ2VkKCk7IH1cbiAgfVxuXG4gIGdldCB0YXJnZXQoKSB7XG4gICAgcmV0dXJuIHN1cGVyLnRhcmdldDtcbiAgfVxuICBzZXQgdGFyZ2V0KGVsZW1lbnQpIHtcbiAgICBpZiAoJ3RhcmdldCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIudGFyZ2V0ID0gZWxlbWVudDsgfVxuICAgIGlmICh0aGlzLl9pdGVtc0NoYW5nZWRMaXN0ZW5lcikge1xuICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdpdGVtcy1jaGFuZ2VkJywgdGhpcy5faXRlbXNDaGFuZ2VkTGlzdGVuZXIpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2VsZWN0ZWRJdGVtQ2hhbmdlZExpc3RlbmVyKSB7XG4gICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3NlbGVjdGVkLWl0ZW0tY2hhbmdlZCcsIHRoaXMuX3NlbGVjdGVkSXRlbUNoYW5nZWRMaXN0ZW5lcik7XG4gICAgfVxuICAgIHRoaXMuX2l0ZW1zQ2hhbmdlZExpc3RlbmVyID0gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpdGVtcy1jaGFuZ2VkJywgZXZlbnQgPT4ge1xuICAgICAgdGhpcy5pdGVtc0NoYW5nZWQoKTtcbiAgICB9KTtcbiAgICB0aGlzLl9zZWxlY3RlZEl0ZW1DaGFuZ2VkTGlzdGVuZXIgPSBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3NlbGVjdGVkLWl0ZW0tY2hhbmdlZCcsIGV2ZW50ID0+IHtcbiAgICAgIC8vIExldCB0aGUgY29tcG9uZW50IGtub3cgdGhlIHRhcmdldCdzIHNlbGVjdGlvbiBjaGFuZ2VkLCBidXQgd2l0aG91dFxuICAgICAgLy8gcmUtaW52b2tpbmcgdGhlIHNlbGVjdEluZGV4L3NlbGVjdGVkSXRlbSBzZXR0ZXIuXG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbUNoYW5nZWQoKTtcbiAgICB9KTtcbiAgICAvLyBGb3JjZSBpbml0aWFsIHJlZnJlc2guXG4gICAgdGhpcy5pdGVtc0NoYW5nZWQoKTtcbiAgfVxuXG59O1xuIiwiLyoqXG4gKiBNaXhpbiBmb3IgdGVtcGxhdGUgc3RhbXBpbmcuIElmIGEgY29tcG9uZW50IGRlZmluZXMgYSB0ZW1wbGF0ZSBwcm9wZXJ0eSAoYXMgYVxuICogc3RyaW5nIG9yIHJlZmVyZW5jaW5nIGEgSFRNTCB0ZW1wbGF0ZSksIHdoZW4gdGhlIGNvbXBvbmVudCBjbGFzcyBpc1xuICogaW5zdGFudGlhdGVkLCBhIHNoYWRvdyByb290IHdpbGwgYmUgY3JlYXRlZCBvbiB0aGUgaW5zdGFuY2UsIGFuZCB0aGUgY29udGVudHNcbiAqIG9mIHRoZSB0ZW1wbGF0ZSB3aWxsIGJlIGNsb25lZCBpbnRvIHRoZSBzaGFkb3cgcm9vdC5cbiAqXG4gKiBGb3IgdGhlIHRpbWUgYmVpbmcsIHRoaXMgZXh0ZW5zaW9uIHJldGFpbnMgc3VwcG9ydCBmb3IgU2hhZG93IERPTSB2MC5cbiAqIFRoYXQgd2lsbCBldmVudHVhbGx5IGJlIGRlcHJlY2F0ZWQgYXMgYnJvd3NlcnMgaW1wbGVtZW50IFNoYWRvdyBET00gdjEuXG4gKlxuICogQG1peGluIFRlbXBsYXRlU3RhbXBpbmdcbiAqL1xuXG5cbi8vIEZlYXR1cmUgZGV0ZWN0aW9uIGZvciBvbGQgU2hhZG93IERPTSB2MC5cbmNvbnN0IFVTSU5HX1NIQURPV19ET01fVjAgPSAodHlwZW9mIEhUTUxFbGVtZW50LnByb3RvdHlwZS5jcmVhdGVTaGFkb3dSb290ICE9PSAndW5kZWZpbmVkJyk7XG5cblxuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IGNsYXNzIFRlbXBsYXRlU3RhbXBpbmcgZXh0ZW5kcyBiYXNlIHtcblxuICAvKlxuICAgKiBJZiB0aGUgY29tcG9uZW50IGRlZmluZXMgYSB0ZW1wbGF0ZSwgYSBzaGFkb3cgcm9vdCB3aWxsIGJlIGNyZWF0ZWQgb24gdGhlXG4gICAqIGNvbXBvbmVudCBpbnN0YW5jZSwgYW5kIHRoZSB0ZW1wbGF0ZSBzdGFtcGVkIGludG8gaXQuXG4gICAqL1xuICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuICAgIGxldCB0ZW1wbGF0ZSA9IHRoaXMudGVtcGxhdGU7XG4gICAgLy8gVE9ETzogU2F2ZSB0aGUgcHJvY2Vzc2VkIHRlbXBsYXRlIHdpdGggdGhlIGNvbXBvbmVudCdzIGNsYXNzIHByb3RvdHlwZVxuICAgIC8vIHNvIGl0IGRvZXNuJ3QgbmVlZCB0byBiZSBwcm9jZXNzZWQgd2l0aCBldmVyeSBpbnN0YW50aWF0aW9uLlxuICAgIGlmICh0ZW1wbGF0ZSkge1xuXG4gICAgICBpZiAodHlwZW9mIHRlbXBsYXRlID09PSAnc3RyaW5nJykge1xuICAgICAgICAvLyBVcGdyYWRlIHBsYWluIHN0cmluZyB0byByZWFsIHRlbXBsYXRlLlxuICAgICAgICB0ZW1wbGF0ZSA9IGNyZWF0ZVRlbXBsYXRlV2l0aElubmVySFRNTCh0ZW1wbGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChVU0lOR19TSEFET1dfRE9NX1YwKSB7XG4gICAgICAgIHBvbHlmaWxsU2xvdFdpdGhDb250ZW50KHRlbXBsYXRlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHdpbmRvdy5TaGFkb3dET01Qb2x5ZmlsbCkge1xuICAgICAgICBzaGltVGVtcGxhdGVTdHlsZXModGVtcGxhdGUsIHRoaXMubG9jYWxOYW1lKTtcbiAgICAgIH1cblxuICAgICAgLy8gdGhpcy5sb2coXCJjbG9uaW5nIHRlbXBsYXRlIGludG8gc2hhZG93IHJvb3RcIik7XG4gICAgICBsZXQgcm9vdCA9IFVTSU5HX1NIQURPV19ET01fVjAgP1xuICAgICAgICB0aGlzLmNyZWF0ZVNoYWRvd1Jvb3QoKSA6ICAgICAgICAgICAgIC8vIFNoYWRvdyBET00gdjBcbiAgICAgICAgdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7ICAvLyBTaGFkb3cgRE9NIHYxXG4gICAgICBsZXQgY2xvbmUgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRlbXBsYXRlLmNvbnRlbnQsIHRydWUpO1xuICAgICAgcm9vdC5hcHBlbmRDaGlsZChjbG9uZSk7XG4gICAgfVxuICB9XG5cbn07XG5cblxuLy8gQ29udmVydCBhIHBsYWluIHN0cmluZyBvZiBIVE1MIGludG8gYSByZWFsIHRlbXBsYXRlIGVsZW1lbnQuXG5mdW5jdGlvbiBjcmVhdGVUZW1wbGF0ZVdpdGhJbm5lckhUTUwoaW5uZXJIVE1MKSB7XG4gIGxldCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gIC8vIFJFVklFVzogSXMgdGhlcmUgYW4gZWFzaWVyIHdheSB0byBkbyB0aGlzP1xuICAvLyBXZSdkIGxpa2UgdG8ganVzdCBzZXQgaW5uZXJIVE1MIG9uIHRoZSB0ZW1wbGF0ZSBjb250ZW50LCBidXQgc2luY2UgaXQnc1xuICAvLyBhIERvY3VtZW50RnJhZ21lbnQsIHRoYXQgZG9lc24ndCB3b3JrLlxuICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gIHdoaWxlIChkaXYuY2hpbGROb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgdGVtcGxhdGUuY29udGVudC5hcHBlbmRDaGlsZChkaXYuY2hpbGROb2Rlc1swXSk7XG4gIH1cbiAgcmV0dXJuIHRlbXBsYXRlO1xufVxuXG4vLyBSZXBsYWNlIG9jY3VyZW5jZXMgb2YgdjEgc2xvdCBlbGVtZW50cyB3aXRoIHYwIGNvbnRlbnQgZWxlbWVudHMuXG4vLyBUaGlzIGRvZXMgbm90IHlldCBtYXAgbmFtZWQgc2xvdHMgdG8gY29udGVudCBzZWxlY3QgY2xhdXNlcy5cbmZ1bmN0aW9uIHBvbHlmaWxsU2xvdFdpdGhDb250ZW50KHRlbXBsYXRlKSB7XG4gIFtdLmZvckVhY2guY2FsbCh0ZW1wbGF0ZS5jb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3Nsb3QnKSwgc2xvdEVsZW1lbnQgPT4ge1xuICAgIGxldCBjb250ZW50RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NvbnRlbnQnKTtcbiAgICBzbG90RWxlbWVudC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChjb250ZW50RWxlbWVudCwgc2xvdEVsZW1lbnQpO1xuICB9KTtcbn1cblxuLy8gSW52b2tlIGJhc2ljIHN0eWxlIHNoaW1taW5nIHdpdGggU2hhZG93Q1NTLlxuZnVuY3Rpb24gc2hpbVRlbXBsYXRlU3R5bGVzKHRlbXBsYXRlLCB0YWcpIHtcbiAgd2luZG93LldlYkNvbXBvbmVudHMuU2hhZG93Q1NTLnNoaW1TdHlsaW5nKHRlbXBsYXRlLmNvbnRlbnQsIHRhZyk7XG59XG4iLCIvKlxuICogQSBzYW1wbGUgZ2VuZXJhbC1wdXJwb3NlIGJhc2UgY2xhc3MgZm9yIGRlZmluaW5nIGN1c3RvbSBlbGVtZW50cyB0aGF0IG1peGVzXG4gKiBpbiBzb21lIGNvbW1vbiBmZWF0dXJlczogdGVtcGxhdGUgc3RhbXBpbmcgaW50byBhIHNoYWRvdyByb290LCBhdXRvbWF0aWMgbm9kZVxuICogZmluZGluZywgYW5kIG1hcnNoYWxsaW5nIGJldHdlZW4gYXR0cmlidXRlcyBhbmQgcHJvcGVydGllcy5cbiAqL1xuXG5cbmltcG9ydCBDb21wb3NhYmxlIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NvbXBvc2FibGUnO1xuaW1wb3J0IFRlbXBsYXRlU3RhbXBpbmcgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvVGVtcGxhdGVTdGFtcGluZyc7XG5pbXBvcnQgQXV0b21hdGljTm9kZUZpbmRpbmcgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQXV0b21hdGljTm9kZUZpbmRpbmcnO1xuaW1wb3J0IEF0dHJpYnV0ZU1hcnNoYWxsaW5nIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0F0dHJpYnV0ZU1hcnNoYWxsaW5nJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbGVtZW50QmFzZSBleHRlbmRzIENvbXBvc2FibGUoSFRNTEVsZW1lbnQpLmNvbXBvc2UoXG4gIFRlbXBsYXRlU3RhbXBpbmcsICAgICAvLyBiZWZvcmUgbm9kZSBmaW5kaW5nLCBzbyBzaGFkb3cgcm9vdCBpcyBwb3B1bGF0ZWRcbiAgQXV0b21hdGljTm9kZUZpbmRpbmcsIC8vIGJlZm9yZSBtYXJzaGFsbGluZywgc28gbWFyc2hhbGxlZCBwcm9wZXJ0aWVzIGNhbiB1c2UgaXRcbiAgQXR0cmlidXRlTWFyc2hhbGxpbmdcbikge1xuXG4gIC8qXG4gICAqIERlYnVnZ2luZyB1dGlsaXR5OiBsb2dzIGEgbWVzc2FnZSwgcHJlZml4ZWQgYnkgdGhlIGNvbXBvbmVudCdzIHRhZy5cbiAgICovXG4gIGxvZyh0ZXh0KSB7XG4gICAgaWYgKHN1cGVyLmxvZykgeyBzdXBlci5sb2codGV4dCk7IH1cbiAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmxvY2FsTmFtZX06ICR7dGV4dH1gKTtcbiAgfVxuXG59XG4iLCIvKipcbiAqIFByZXNlbnRzIGEgc2V0IG9mIHNtYWxsIGRvdHMgdG8gc2hvdyBsaXN0IGl0ZW0gY291bnQgYW5kIHNlbGVjdCBsaXN0IGl0ZW1zLlxuICogVGhlcmUgd2lsbCBiZSBvbmUgZG90IGZvciBlYWNoIGl0ZW0sIGFuZCB0aGUgZG90IGZvciB0aGUgY3VycmVudGx5IHNlbGVjdGVkXG4gKiBpdGVtIHdpbGwgYmUgc2hvd24gc2VsZWN0ZWQuXG4gKlxuICogQ2xpY2tpbmcgYSBkb3Qgd2lsbCBzZWxlY3QgdGhlIGNvcnJlc3BvbmRpbmcgbGlzdCBpdGVtLlxuICpcbiAqIEBjbGFzcyBQYWdlRG90c1xuICovXG5cbmltcG9ydCBFbGVtZW50QmFzZSBmcm9tICcuLi8uLi9iYXNpYy1lbGVtZW50LWJhc2Uvc3JjL0VsZW1lbnRCYXNlJztcbmltcG9ydCBDaGlsZHJlbkNvbnRlbnQgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ2hpbGRyZW5Db250ZW50JztcbmltcG9ydCBDb2xsZWN0aXZlRWxlbWVudCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Db2xsZWN0aXZlRWxlbWVudCc7XG5pbXBvcnQgQ29udGVudEZpcnN0Q2hpbGRUYXJnZXQgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ29udGVudEZpcnN0Q2hpbGRUYXJnZXQnO1xuaW1wb3J0IEtleWJvYXJkIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0tleWJvYXJkJztcbmltcG9ydCBUYXJnZXRTZWxlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvVGFyZ2V0U2VsZWN0aW9uJztcblxuXG5sZXQgYmFzZSA9IEVsZW1lbnRCYXNlLmNvbXBvc2UoXG4gIENoaWxkcmVuQ29udGVudCxcbiAgQ29sbGVjdGl2ZUVsZW1lbnQsXG4gIENvbnRlbnRGaXJzdENoaWxkVGFyZ2V0LFxuICBLZXlib2FyZCxcbiAgVGFyZ2V0U2VsZWN0aW9uXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlRG90cyBleHRlbmRzIGJhc2Uge1xuXG4gIGFwcGx5U2VsZWN0aW9uKGl0ZW0sIHNlbGVjdGVkKSB7XG4gICAgaWYgKHN1cGVyLmFwcGx5U2VsZWN0aW9uKSB7IHN1cGVyLmFwcGx5U2VsZWN0aW9uKGl0ZW0sIHNlbGVjdGVkKTsgfVxuICAgIGxldCBpbmRleCA9IHRoaXMuaW5kZXhPZkl0ZW0oaXRlbSk7XG4gICAgLy8gU2VlIGlmIHRoZSBjb3JyZXNwb25kaW5nIGRvdCBoYXMgYWxyZWFkeSBiZWVuIGNyZWF0ZWQuXG4gICAgLy8gSWYgbm90LCB0aGUgY29ycmVjdCBkb3Qgd2lsbCBiZSBzZWxlY3RlZCB3aGVuIGl0IGdldHMgY3JlYXRlZC5cbiAgICBsZXQgZG90cyA9IHRoaXMuZG90cztcbiAgICBpZiAoZG90cyAmJiBkb3RzLmxlbmd0aCA+IGluZGV4KSB7XG4gICAgICBsZXQgZG90ID0gdGhpcy5kb3RzW2luZGV4XTtcbiAgICAgIGlmIChkb3QpIHtcbiAgICAgICAgZG90LmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdGVkJywgc2VsZWN0ZWQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLiQuZG90cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgIGxldCBkb3QgPSBldmVudC50YXJnZXQ7XG4gICAgICBsZXQgZG90SW5kZXggPSB0aGlzLmRvdHMuaW5kZXhPZihkb3QpO1xuICAgICAgaWYgKGRvdEluZGV4ID49IDApIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gZG90SW5kZXg7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBnZXQgZG90cygpIHtcbiAgICByZXR1cm4gW10uc2xpY2UuY2FsbCh0aGlzLiQuZG90cy5xdWVyeVNlbGVjdG9yQWxsKCcuZG90JykpO1xuICB9XG5cbiAgaXRlbXNDaGFuZ2VkKCkge1xuICAgIGlmIChzdXBlci5pdGVtc0NoYW5nZWQpIHsgc3VwZXIuaXRlbXNDaGFuZ2VkKCk7IH1cbiAgICBjcmVhdGVEb3RzKHRoaXMpO1xuICAgIHRoaXMuc2VsZWN0ZWRJdGVtQ2hhbmdlZCgpOyAgLy8gSW4gY2FzZSBwb3NpdGlvbiBvZiBzZWxlY3RlZCBpdGVtIG1vdmVkLlxuICB9XG5cbiAgc2VsZWN0ZWRJdGVtQ2hhbmdlZCgpIHtcbiAgICBpZiAoc3VwZXIuc2VsZWN0ZWRJdGVtQ2hhbmdlZCkgeyBzdXBlci5zZWxlY3RlZEl0ZW1DaGFuZ2VkKCk7IH1cbiAgICBsZXQgc2VsZWN0ZWRJbmRleCA9IHRoaXMuc2VsZWN0ZWRJbmRleDtcbiAgICB0aGlzLmRvdHMuZm9yRWFjaCgoZG90LCBpKSA9PiB7XG4gICAgICBkb3QuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnLCBpID09PSBzZWxlY3RlZEluZGV4KTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gYFxuICAgICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1mbGV4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICAjZG90cyB7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgIH1cblxuICAgICAgLmRvdCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGhlaWdodDogOHB4O1xuICAgICAgICBtYXJnaW46IDdweCA1cHg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyBib3gtc2hhZG93IDAuMnM7XG4gICAgICAgIHdpZHRoOiA4cHg7XG4gICAgICB9XG5cbiAgICAgIC5kb3Q6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMXB4IDNweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gICAgICB9XG5cbiAgICAgIC5kb3Quc2VsZWN0ZWQge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgLmRvdCB7XG4gICAgICAgICAgaGVpZ2h0OiAxMnB4O1xuICAgICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8IS0tXG4gICAgICBSRVZJRVc6IFRoZXNlIGRvdHMgYXJlbid0IGJ1dHRvbnMsIGJlY2F1c2UgdGhleSdyZSBuZXZlciBtZWFudCB0byBiZSB1c2VkXG4gICAgICBvbiB0aGVpciBvd24uIFRoZXJlIHNob3VsZCBhbHdheXMgYmUgc29tZSBvdGhlciwgbW9yZSBhY2Nlc3NpYmxlLCB3YXkgdG9cbiAgICAgIG5hdmlnYXRlIHRoZSBjb250ZW50LlxuICAgICAgLS0+XG4gICAgICA8IS0tIFRPRE86IFJlcGxhY2Ugd2l0aCBzb21ldGhpbmcgdGhhdCdzIGJhc2ljYWxseSBhIGxpc3QgYm94IC0tPlxuICAgICAgPGRpdiBpZD1cImRvdHNcIj48L2Rpdj5cbiAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICBgO1xuICB9XG5cbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVEb3QoKSB7XG4gIGxldCBkb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZG90LmNsYXNzTGlzdC5hZGQoJ2RvdCcpO1xuICBkb3QuY2xhc3NMaXN0LmFkZCgnc3R5bGUtc2NvcGUnKTtcbiAgZG90LmNsYXNzTGlzdC5hZGQoJ2Jhc2ljLXBhZ2UtZG90cycpO1xuICByZXR1cm4gZG90O1xufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZURvdHMoZWxlbWVudCkge1xuICBsZXQgbmV3RG90Q291bnQgPSBlbGVtZW50Lml0ZW1zLmxlbmd0aDtcbiAgbGV0IGRvdENvbnRhaW5lciA9IGVsZW1lbnQuJC5kb3RzO1xuICBsZXQgZXhpc3RpbmdEb3RDb3VudCA9IGRvdENvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGg7XG4gIGlmIChuZXdEb3RDb3VudCA9PT0gZXhpc3RpbmdEb3RDb3VudCkge1xuICAgIHJldHVybjtcbiAgfSBlbHNlIGlmIChleGlzdGluZ0RvdENvdW50ID4gbmV3RG90Q291bnQpIHtcbiAgICAvLyBSZW1vdmUgZXh0cmEgZG90cy5cbiAgICB3aGlsZSAoZG90Q29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aCA+IG5ld0RvdENvdW50KSB7XG4gICAgICBkb3RDb250YWluZXIucmVtb3ZlQ2hpbGQoZG90Q29udGFpbmVyLmNoaWxkcmVuWzBdKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gQ3JlYXRlIG5lZWRlZCBkb3RzLlxuICAgIGZvciAobGV0IGkgPSBleGlzdGluZ0RvdENvdW50OyBpIDwgbmV3RG90Q291bnQ7IGkrKykge1xuICAgICAgbGV0IGRvdCA9IGNyZWF0ZURvdCgpO1xuICAgICAgZG90Q29udGFpbmVyLmFwcGVuZENoaWxkKGRvdCk7XG4gICAgfVxuICB9XG59XG5cblxuZG9jdW1lbnQucmVnaXN0ZXJFbGVtZW50KCdiYXNpYy1wYWdlLWRvdHMnLCBQYWdlRG90cyk7XG4iXX0=
