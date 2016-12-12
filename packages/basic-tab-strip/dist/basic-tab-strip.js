(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./safeAttributes":16}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
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

},{"./createSymbol":13,"./symbols":17,"./toggleClass":18}],4:[function(require,module,exports){
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

},{"./symbols":17}],5:[function(require,module,exports){
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

},{"./microtask":14}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
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

},{"./createSymbol":13,"./safeAttributes":16,"./symbols":17}],8:[function(require,module,exports){
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

},{"./createSymbol":13,"./symbols":17}],9:[function(require,module,exports){
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

},{"./symbols":17}],10:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){
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

},{"../src/symbols":17}],12:[function(require,module,exports){
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

},{"./createSymbol":13,"./symbols":17}],13:[function(require,module,exports){
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

},{}],14:[function(require,module,exports){
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

},{}],15:[function(require,module,exports){
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

},{}],16:[function(require,module,exports){
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

},{"./createSymbol":13,"./toggleClass":18}],17:[function(require,module,exports){
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

},{"./createSymbol":13}],18:[function(require,module,exports){
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

},{}],19:[function(require,module,exports){
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

},{"../../basic-component-mixins/src/AttributeMarshallingMixin":1,"../../basic-component-mixins/src/ComposableMixin":2,"../../basic-component-mixins/src/DistributedChildrenMixin":6,"../../basic-component-mixins/src/ShadowElementReferencesMixin":10,"../../basic-component-mixins/src/ShadowTemplateMixin":11}],20:[function(require,module,exports){
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

},{"./src/TabStrip":21,"./src/TabStripMixin":22}],21:[function(require,module,exports){
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

},{"../../basic-component-mixins/src/ContentItemsMixin":3,"../../basic-component-mixins/src/DirectionSelectionMixin":4,"../../basic-component-mixins/src/DistributedChildrenContentMixin":5,"../../basic-component-mixins/src/GenericMixin":7,"../../basic-component-mixins/src/KeyboardDirectionMixin":8,"../../basic-component-mixins/src/KeyboardMixin":9,"../../basic-component-mixins/src/SingleSelectionMixin":12,"../../basic-component-mixins/src/createSymbol":13,"../../basic-component-mixins/src/renderArrayAsElements":15,"../../basic-component-mixins/src/symbols":17,"../../basic-component-mixins/src/toggleClass":18,"../../basic-element-base/src/ElementBase":19}],22:[function(require,module,exports){
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

},{"../../basic-component-mixins/src/symbols":17,"./TabStrip":21}]},{},[20])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9BdHRyaWJ1dGVNYXJzaGFsbGluZ01peGluLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ29tcG9zYWJsZU1peGluLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ29udGVudEl0ZW1zTWl4aW4uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXJlY3Rpb25TZWxlY3Rpb25NaXhpbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW5Db250ZW50TWl4aW4uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXN0cmlidXRlZENoaWxkcmVuTWl4aW4uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9HZW5lcmljTWl4aW4uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9LZXlib2FyZERpcmVjdGlvbk1peGluLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvS2V5Ym9hcmRNaXhpbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NoYWRvd0VsZW1lbnRSZWZlcmVuY2VzTWl4aW4uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TaGFkb3dUZW1wbGF0ZU1peGluLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2luZ2xlU2VsZWN0aW9uTWl4aW4uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9jcmVhdGVTeW1ib2wuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9taWNyb3Rhc2suanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9yZW5kZXJBcnJheUFzRWxlbWVudHMuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9zYWZlQXR0cmlidXRlcy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL3N5bWJvbHMuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy90b2dnbGVDbGFzcy5qcyIsInBhY2thZ2VzL2Jhc2ljLWVsZW1lbnQtYmFzZS9zcmMvRWxlbWVudEJhc2UuanMiLCJwYWNrYWdlcy9iYXNpYy10YWItc3RyaXAvZ2xvYmFscy5qcyIsInBhY2thZ2VzL2Jhc2ljLXRhYi1zdHJpcC9zcmMvVGFiU3RyaXAuanMiLCJwYWNrYWdlcy9iYXNpYy10YWItc3RyaXAvc3JjL1RhYlN0cmlwTWl4aW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQUdBO0FBQ0EsSUFBTSwyQkFBMkIsRUFBakM7QUFDQSxJQUFNLDRCQUE0QixFQUFsQzs7QUFHQTs7a0JBQ2UsVUFBQyxJQUFELEVBQVU7O0FBRXZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUZ1QixNQXFDakIsb0JBckNpQjtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7QUF1Q3JCOzs7QUF2Q3FCLCtDQTBDSSxhQTFDSixFQTBDbUIsUUExQ25CLEVBMEM2QixRQTFDN0IsRUEwQ3VDO0FBQzFELHVKQUFvQztBQUFFO0FBQW1DO0FBQ3pFLFlBQU0sZUFBZSx3QkFBd0IsYUFBeEIsQ0FBckI7QUFDQTtBQUNBO0FBQ0EsWUFBSSxnQkFBZ0IsSUFBaEIsSUFBd0IsRUFBRSxnQkFBZ0IsWUFBWSxTQUE5QixDQUE1QixFQUFzRTtBQUNwRSxlQUFLLFlBQUws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QUFBO0FBQUEsMEJBK0dIO0FBQ2hCLGVBQU8sS0FBSyxDQUFMLENBQU8sUUFBUCxDQUFnQixXQUF2QjtBQUNELE9BakhvQjtBQUFBLHdCQWtITCxRQWxISyxFQWtISztBQUN4QixhQUFLLENBQUwsQ0FBTyxRQUFQLENBQWdCLFdBQWhCLEdBQThCLFFBQTlCO0FBQ0EsYUFBSyxnQkFBTCxDQUFzQixjQUF0QixFQUFzQyxRQUF0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBTSxlQUFnQixhQUFhLEtBQWIsSUFBc0IsYUFBYSxNQUFwQyxHQUNuQixLQUFLLENBQUwsQ0FBTyxRQURZLEdBRW5CLEtBQUssQ0FBTCxDQUFPLEtBRlQ7QUFHQSxZQUFNLGNBQWUsYUFBYSxLQUFiLElBQXNCLGFBQWEsTUFBcEMsR0FDbEIsS0FBSyxDQUFMLENBQU8sS0FEVyxHQUVsQixLQUFLLENBQUwsQ0FBTyxRQUZUO0FBR0EsWUFBSSxhQUFhLFdBQWIsS0FBNkIsV0FBakMsRUFBOEM7QUFDNUMsZUFBSyxVQUFMLENBQWdCLFlBQWhCLENBQTZCLFlBQTdCLEVBQTJDLFdBQTNDO0FBQ0Q7QUFFRjtBQXJJb0I7QUFBQSxXQXVJaEIsa0JBQVEsUUF2SVE7QUFBQSwwQkF1SUk7QUFDdkIsWUFBTSxlQUFlLGdGQUFNLGtCQUFRLFFBQWQsV0FBMkIsRUFBaEQ7QUFDQSw0bENBMkNNLFlBM0NOO0FBOENEO0FBdkxvQjs7QUFBQTtBQUFBLElBOENBLElBOUNBOztBQTJMdkIsU0FBTyxRQUFQO0FBQ0QsQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgc2FmZUF0dHJpYnV0ZXMgZnJvbSAnLi9zYWZlQXR0cmlidXRlcyc7XG5cblxuLy8gTWVtb2l6ZWQgbWFwcyBvZiBhdHRyaWJ1dGUgdG8gcHJvcGVydHkgbmFtZXMgYW5kIHZpY2UgdmVyc2EuXG5jb25zdCBhdHRyaWJ1dGVUb1Byb3BlcnR5TmFtZXMgPSB7fTtcbmNvbnN0IHByb3BlcnR5TmFtZXNUb0F0dHJpYnV0ZXMgPSB7fTtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIEF0dHJpYnV0ZU1hcnNoYWxsaW5nLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggbWFyc2hhbGxzIGF0dHJpYnV0ZXMgdG8gcHJvcGVydGllcyBhbmQgdmljZSB2ZXJzYS5cbiAgICpcbiAgICogSWYgeW91ciBjb21wb25lbnQgZXhwb3NlcyBhIHNldHRlciBmb3IgYSBwcm9wZXJ0eSwgaXQncyBnZW5lcmFsbHkgYSBnb29kXG4gICAqIGlkZWEgdG8gbGV0IGRldnMgdXNpbmcgeW91ciBjb21wb25lbnQgYmUgYWJsZSB0byBzZXQgdGhhdCBwcm9wZXJ0eSBpbiBIVE1MXG4gICAqIHZpYSBhbiBlbGVtZW50IGF0dHJpYnV0ZS4gWW91IGNhbiBjb2RlIHRoYXQgeW91cnNlbGYgYnkgd3JpdGluZyBhblxuICAgKiBgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrYCwgb3IgeW91IGNhbiB1c2UgdGhpcyBtaXhpbiB0byBnZXQgYSBkZWdyZWUgb2ZcbiAgICogYXV0b21hdGljIHN1cHBvcnQuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gaW1wbGVtZW50cyBhbiBgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrYCB0aGF0IHdpbGwgYXR0ZW1wdCB0b1xuICAgKiBjb252ZXJ0IGEgY2hhbmdlIGluIGFuIGVsZW1lbnQgYXR0cmlidXRlIGludG8gYSBjYWxsIHRvIHRoZSBjb3JyZXNwb25kaW5nXG4gICAqIHByb3BlcnR5IHNldHRlci4gQXR0cmlidXRlcyB0eXBpY2FsbHkgZm9sbG93IGh5cGhlbmF0ZWQgbmFtZXMgKFwiZm9vLWJhclwiKSxcbiAgICogd2hlcmVhcyBwcm9wZXJ0aWVzIHR5cGljYWxseSB1c2UgY2FtZWxDYXNlIG5hbWVzIChcImZvb0JhclwiKS4gVGhpcyBtaXhpblxuICAgKiByZXNwZWN0cyB0aGF0IGNvbnZlbnRpb24sIGF1dG9tYXRpY2FsbHkgbWFwcGluZyB0aGUgaHlwaGVuYXRlZCBhdHRyaWJ1dGVcbiAgICogbmFtZSB0byB0aGUgY29ycmVzcG9uZGluZyBjYW1lbENhc2UgcHJvcGVydHkgbmFtZS5cbiAgICpcbiAgICogRXhhbXBsZTogWW91IGRlZmluZSBhIGNvbXBvbmVudCB1c2luZyB0aGlzIG1peGluOlxuICAgKlxuICAgKiAgICAgY2xhc3MgTXlFbGVtZW50IGV4dGVuZHMgQXR0cmlidXRlTWFyc2hhbGxpbmdNaXhpbihIVE1MRWxlbWVudCkge1xuICAgKiAgICAgICBnZXQgZm9vQmFyKCkgeyByZXR1cm4gdGhpcy5fZm9vQmFyOyB9XG4gICAqICAgICAgIHNldCBmb29CYXIodmFsdWUpIHsgdGhpcy5fZm9vQmFyID0gdmFsdWU7IH1cbiAgICogICAgIH1cbiAgICogICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbXktZWxlbWVudCcsIE15RWxlbWVudCk7XG4gICAqXG4gICAqIElmIHNvbWVvbmUgdGhlbiBpbnN0YW50aWF0ZXMgeW91ciBjb21wb25lbnQgaW4gSFRNTDpcbiAgICpcbiAgICogICAgIDxteS1lbGVtZW50IGZvby1iYXI9XCJIZWxsb1wiPjwvbXktZWxlbWVudD5cbiAgICpcbiAgICogVGhlbiwgYWZ0ZXIgdGhlIGVsZW1lbnQgaGFzIGJlZW4gdXBncmFkZWQsIHRoZSBgZm9vQmFyYCBzZXR0ZXIgd2lsbFxuICAgKiBhdXRvbWF0aWNhbGx5IGJlIGludm9rZWQgd2l0aCB0aGUgaW5pdGlhbCB2YWx1ZSBcIkhlbGxvXCIuXG4gICAqXG4gICAqIEZvciB0aGUgdGltZSBiZWluZywgdGhpcyBtaXhpbiBvbmx5IHN1cHBvcnRzIHN0cmluZy12YWx1ZWQgcHJvcGVydGllcy5cbiAgICogSWYgeW91J2QgbGlrZSB0byBjb252ZXJ0IHN0cmluZyBhdHRyaWJ1dGVzIHRvIG90aGVyIHR5cGVzIChudW1iZXJzLFxuICAgKiBib29sZWFucyksIHlvdSBuZWVkIHRvIGltcGxlbWVudCBgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrYCB5b3Vyc2VsZi5cbiAgICovXG4gIGNsYXNzIEF0dHJpYnV0ZU1hcnNoYWxsaW5nIGV4dGVuZHMgYmFzZSB7XG5cbiAgICAvKlxuICAgICAqIEhhbmRsZSBhIGNoYW5nZSB0byB0aGUgYXR0cmlidXRlIHdpdGggdGhlIGdpdmVuIG5hbWUuXG4gICAgICovXG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKGF0dHJpYnV0ZU5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xuICAgICAgaWYgKHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjaykgeyBzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soKTsgfVxuICAgICAgY29uc3QgcHJvcGVydHlOYW1lID0gYXR0cmlidXRlVG9Qcm9wZXJ0eU5hbWUoYXR0cmlidXRlTmFtZSk7XG4gICAgICAvLyBJZiB0aGUgYXR0cmlidXRlIG5hbWUgY29ycmVzcG9uZHMgdG8gYSBwcm9wZXJ0eSBuYW1lLCBzZXQgdGhlIHByb3BlcnR5LlxuICAgICAgLy8gSWdub3JlIHN0YW5kYXJkIEhUTUxFbGVtZW50IHByb3BlcnRpZXMgaGFuZGxlZCBieSB0aGUgRE9NLlxuICAgICAgaWYgKHByb3BlcnR5TmFtZSBpbiB0aGlzICYmICEocHJvcGVydHlOYW1lIGluIEhUTUxFbGVtZW50LnByb3RvdHlwZSkpIHtcbiAgICAgICAgdGhpc1twcm9wZXJ0eU5hbWVdID0gbmV3VmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2spIHsgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTsgfVxuICAgICAgc2FmZUF0dHJpYnV0ZXMuY29ubmVjdGVkKHRoaXMpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xuICAgICAgcmV0dXJuIGF0dHJpYnV0ZXNGb3JDbGFzcyh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQvdW5zZXQgdGhlIGF0dHJpYnV0ZSB3aXRoIHRoZSBpbmRpY2F0ZWQgbmFtZS5cbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIGV4aXN0cyBwcmltYXJpbHkgdG8gaGFuZGxlIHRoZSBjYXNlIHdoZXJlIGFuIGVsZW1lbnQgd2FudHMgdG9cbiAgICAgKiBzZXQgYSBkZWZhdWx0IHByb3BlcnR5IHZhbHVlIHRoYXQgc2hvdWxkIGJlIHJlZmxlY3RlZCBhcyBhbiBhdHRyaWJ1dGUuIEFuXG4gICAgICogaW1wb3J0YW50IGxpbWl0YXRpb24gb2YgY3VzdG9tIGVsZW1lbnQgY29uc3R1cmN0b3JzIGlzIHRoYXQgdGhleSBjYW5ub3RcbiAgICAgKiBzZXQgYXR0cmlidXRlcy4gQSBjYWxsIHRvIGByZWZsZWN0QXR0cmlidXRlYCBkdXJpbmcgdGhlIGNvbnN0cnVjdG9yIHdpbGxcbiAgICAgKiBiZSBkZWZlcnJlZCB1bnRpbCB0aGUgZWxlbWVudCBpcyBjb25uZWN0ZWQgdG8gdGhlIGRvY3VtZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZSAtIFRoZSBuYW1lIG9mIHRoZSAqYXR0cmlidXRlKiAobm90IHByb3BlcnR5KSB0byBzZXQuXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIHNldC4gSWYgbnVsbCwgdGhlIGF0dHJpYnV0ZSB3aWxsIGJlIHJlbW92ZWQuXG4gICAgICovXG4gICAgcmVmbGVjdEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gc2FmZUF0dHJpYnV0ZXMuc2V0QXR0cmlidXRlKHRoaXMsIGF0dHJpYnV0ZSwgdmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldC91bnNldCB0aGUgY2xhc3Mgd2l0aCB0aGUgaW5kaWNhdGVkIG5hbWUuXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBleGlzdHMgcHJpbWFyaWx5IHRvIGhhbmRsZSB0aGUgY2FzZSB3aGVyZSBhbiBlbGVtZW50IHdhbnRzIHRvXG4gICAgICogc2V0IGEgZGVmYXVsdCBwcm9wZXJ0eSB2YWx1ZSB0aGF0IHNob3VsZCBiZSByZWZsZWN0ZWQgYXMgYXMgY2xhc3MuIEFuXG4gICAgICogaW1wb3J0YW50IGxpbWl0YXRpb24gb2YgY3VzdG9tIGVsZW1lbnQgY29uc3R1cmN0b3JzIGlzIHRoYXQgdGhleSBjYW5ub3RcbiAgICAgKiBzZXQgYXR0cmlidXRlcywgaW5jbHVkaW5nIHRoZSBgY2xhc3NgIGF0dHJpYnV0ZS4gQSBjYWxsIHRvXG4gICAgICogYHJlZmxlY3RDbGFzc2AgZHVyaW5nIHRoZSBjb25zdHJ1Y3RvciB3aWxsIGJlIGRlZmVycmVkIHVudGlsIHRoZSBlbGVtZW50XG4gICAgICogaXMgY29ubmVjdGVkIHRvIHRoZSBkb2N1bWVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgLSBUaGUgbmFtZSBvZiB0aGUgY2xhc3MgdG8gc2V0LlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZSAtIFRydWUgdG8gc2V0IHRoZSBjbGFzcywgZmFsc2UgdG8gcmVtb3ZlIGl0LlxuICAgICAqL1xuICAgIHJlZmxlY3RDbGFzcyhjbGFzc05hbWUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gc2FmZUF0dHJpYnV0ZXMudG9nZ2xlQ2xhc3ModGhpcywgY2xhc3NOYW1lLCB2YWx1ZSk7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gQXR0cmlidXRlTWFyc2hhbGxpbmc7XG59O1xuXG5cbi8vIENvbnZlcnQgaHlwaGVuYXRlZCBmb28tYmFyIGF0dHJpYnV0ZSBuYW1lIHRvIGNhbWVsIGNhc2UgZm9vQmFyIHByb3BlcnR5IG5hbWUuXG5mdW5jdGlvbiBhdHRyaWJ1dGVUb1Byb3BlcnR5TmFtZShhdHRyaWJ1dGVOYW1lKSB7XG4gIGxldCBwcm9wZXJ0eU5hbWUgPSBhdHRyaWJ1dGVUb1Byb3BlcnR5TmFtZXNbYXR0cmlidXRlTmFtZV07XG4gIGlmICghcHJvcGVydHlOYW1lKSB7XG4gICAgLy8gQ29udmVydCBhbmQgbWVtb2l6ZS5cbiAgICBjb25zdCBoeXBlblJlZ0V4ID0gLy0oW2Etel0pL2c7XG4gICAgcHJvcGVydHlOYW1lID0gYXR0cmlidXRlTmFtZS5yZXBsYWNlKGh5cGVuUmVnRXgsXG4gICAgICAgIG1hdGNoID0+IG1hdGNoWzFdLnRvVXBwZXJDYXNlKCkpO1xuICAgIGF0dHJpYnV0ZVRvUHJvcGVydHlOYW1lc1thdHRyaWJ1dGVOYW1lXSA9IHByb3BlcnR5TmFtZTtcbiAgfVxuICByZXR1cm4gcHJvcGVydHlOYW1lO1xufVxuXG5mdW5jdGlvbiBhdHRyaWJ1dGVzRm9yQ2xhc3MoY2xhc3NGbikge1xuXG4gIC8vIFdlIHRyZWF0IHRoZSBlbGVtZW50IGJhc2UgY2xhc3NlcyBhcyBpZiB0aGV5IGhhdmUgbm8gYXR0cmlidXRlcywgc2luY2Ugd2VcbiAgLy8gZG9uJ3Qgd2FudCB0byByZWNlaXZlIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayBmb3IgdGhlbS5cbiAgaWYgKGNsYXNzRm4gPT09IEhUTUxFbGVtZW50IHx8IGNsYXNzRm4gPT09IE9iamVjdCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIC8vIEdldCBhdHRyaWJ1dGVzIGZvciBwYXJlbnQgY2xhc3MuXG4gIGNvbnN0IGJhc2VDbGFzcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihjbGFzc0ZuLnByb3RvdHlwZSkuY29uc3RydWN0b3I7XG4gIGNvbnN0IGJhc2VBdHRyaWJ1dGVzID0gYXR0cmlidXRlc0ZvckNsYXNzKGJhc2VDbGFzcyk7XG5cbiAgLy8gR2V0IGF0dHJpYnV0ZXMgZm9yIHRoaXMgY2xhc3MuXG4gIGNvbnN0IHByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhjbGFzc0ZuLnByb3RvdHlwZSk7XG4gIGNvbnN0IHNldHRlck5hbWVzID0gcHJvcGVydHlOYW1lcy5maWx0ZXIocHJvcGVydHlOYW1lID0+XG4gICAgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoXG4gICAgICAgIGNsYXNzRm4ucHJvdG90eXBlLCBwcm9wZXJ0eU5hbWUpLnNldCA9PT0gJ2Z1bmN0aW9uJyk7XG4gIGNvbnN0IGF0dHJpYnV0ZXMgPSBzZXR0ZXJOYW1lcy5tYXAoc2V0dGVyTmFtZSA9PlxuICAgICAgcHJvcGVydHlOYW1lVG9BdHRyaWJ1dGUoc2V0dGVyTmFtZSkpO1xuXG4gIC8vIE1lcmdlLlxuICBjb25zdCBkaWZmID0gYXR0cmlidXRlcy5maWx0ZXIoYXR0cmlidXRlID0+XG4gICAgICBiYXNlQXR0cmlidXRlcy5pbmRleE9mKGF0dHJpYnV0ZSkgPCAwKTtcbiAgcmV0dXJuIGJhc2VBdHRyaWJ1dGVzLmNvbmNhdChkaWZmKTtcbn1cblxuLy8gQ29udmVydCBhIGNhbWVsIGNhc2UgZm9vQmFyIHByb3BlcnR5IG5hbWUgdG8gYSBoeXBoZW5hdGVkIGZvby1iYXIgYXR0cmlidXRlLlxuZnVuY3Rpb24gcHJvcGVydHlOYW1lVG9BdHRyaWJ1dGUocHJvcGVydHlOYW1lKSB7XG4gIGxldCBhdHRyaWJ1dGUgPSBwcm9wZXJ0eU5hbWVzVG9BdHRyaWJ1dGVzW3Byb3BlcnR5TmFtZV07XG4gIGlmICghYXR0cmlidXRlKSB7XG4gICAgLy8gQ29udmVydCBhbmQgbWVtb2l6ZS5cbiAgICBjb25zdCB1cHBlcmNhc2VSZWdFeCA9IC8oW0EtWl0pL2c7XG4gICAgYXR0cmlidXRlID0gcHJvcGVydHlOYW1lLnJlcGxhY2UodXBwZXJjYXNlUmVnRXgsICctJDEnKS50b0xvd2VyQ2FzZSgpO1xuICB9XG4gIHJldHVybiBhdHRyaWJ1dGU7XG59XG4iLCIvKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIENvbXBvc2FibGUuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB0byBtYWtlIGEgY2xhc3MgbW9yZSBlYXNpbHkgY29tcG9zYWJsZSB3aXRoIG90aGVyIG1peGlucy5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBjb250cmlidXRlcyBhIGBjb21wb3NlYCBtZXRob2QgdGhhdCBhcHBsaWVzIGEgc2V0IG9mIG1peGluXG4gICAqIGZ1bmN0aW9ucyBhbmQgcmV0dXJucyB0aGUgcmVzdWx0aW5nIG5ldyBjbGFzcy4gVGhpcyBzdWdhciBjYW4gbWFrZSB0aGVcbiAgICogYXBwbGljYXRpb24gb2YgbWFueSBtaXhpbnMgYXQgb25jZSBlYXNpZXIgdG8gcmVhZC5cbiAgICovXG4gIGNsYXNzIENvbXBvc2FibGUgZXh0ZW5kcyBiYXNlIHtcblxuICAgIC8qKlxuICAgICAqIEFwcGx5IGEgc2V0IG9mIG1peGluIGZ1bmN0aW9ucyBvciBtaXhpbiBvYmplY3RzIHRvIHRoZSBwcmVzZW50IGNsYXNzIGFuZFxuICAgICAqIHJldHVybiB0aGUgbmV3IGNsYXNzLlxuICAgICAqXG4gICAgICogSW5zdGVhZCBvZiB3cml0aW5nOlxuICAgICAqXG4gICAgICogICAgIGxldCBNeUNsYXNzID0gTWl4aW4xKE1peGluMihNaXhpbjMoTWl4aW40KE1peGluNShCYXNlQ2xhc3MpKSkpKTtcbiAgICAgKlxuICAgICAqIFlvdSBjYW4gd3JpdGU6XG4gICAgICpcbiAgICAgKiAgICAgbGV0IE15Q2xhc3MgPSBDb21wb3NhYmxlTWl4aW4oQmFzZUNsYXNzKS5jb21wb3NlKFxuICAgICAqICAgICAgIE1peGluMSxcbiAgICAgKiAgICAgICBNaXhpbjIsXG4gICAgICogICAgICAgTWl4aW4zLFxuICAgICAqICAgICAgIE1peGluNCxcbiAgICAgKiAgICAgICBNaXhpbjVcbiAgICAgKiAgICAgKTtcbiAgICAgKlxuICAgICAqIFRoaXMgZnVuY3Rpb24gY2FuIGFsc28gdGFrZSBtaXhpbiBvYmplY3RzLiBBIG1peGluIG9iamVjdCBpcyBqdXN0IGFcbiAgICAgKiBzaG9ydGhhbmQgZm9yIGEgbWl4aW4gZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGEgbmV3IHN1YmNsYXNzIHdpdGggdGhlIGdpdmVuXG4gICAgICogbWVtYmVycy4gVGhlIG1peGluIG9iamVjdCdzIG1lbWJlcnMgYXJlICpub3QqIGNvcGllZCBkaXJlY3RseSBvbnRvIHRoZVxuICAgICAqIHByb3RvdHlwZSBvZiB0aGUgYmFzZSBjbGFzcywgYXMgd2l0aCB0cmFkaXRpb25hbCBtaXhpbnMuXG4gICAgICpcbiAgICAgKiBJbiBhZGRpdGlvbiB0byBwcm92aWRpbmcgc3ludGFjdGljIHN1Z2FyLCB0aGlzIG1peGluIGNhbiBiZSB1c2VkIHRvXG4gICAgICogZGVmaW5lIGEgY2xhc3MgaW4gRVM1LCB3aGljaCBsYWNrcyBFUzYncyBgY2xhc3NgIGtleXdvcmQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gey4uLm1peGluc30gbWl4aW5zIC0gQSBzZXQgb2YgbWl4aW4gZnVuY3Rpb25zIG9yIG9iamVjdHMgdG8gYXBwbHkuXG4gICAgICovXG4gICAgc3RhdGljIGNvbXBvc2UoLi4ubWl4aW5zKSB7XG4gICAgICAvLyBXZSBjcmVhdGUgYSBuZXcgc3ViY2xhc3MgZm9yIGVhY2ggbWl4aW4gaW4gdHVybi4gVGhlIHJlc3VsdCBiZWNvbWVzXG4gICAgICAvLyB0aGUgYmFzZSBjbGFzcyBleHRlbmRlZCBieSBhbnkgc3Vic2VxdWVudCBtaXhpbnMuIEl0IHR1cm5zIG91dCB0aGF0XG4gICAgICAvLyB3ZSBjYW4gdXNlIEFycmF5LnJlZHVjZSgpIHRvIGNvbmNpc2VseSBleHByZXNzIHRoaXMsIHVzaW5nIHRoZSBjdXJyZW50XG4gICAgICAvLyBvYmplY3QgYXMgdGhlIHNlZWQgZm9yIHJlZHVjZSgpLlxuICAgICAgcmV0dXJuIG1peGlucy5yZWR1Y2UoY29tcG9zZUNsYXNzLCB0aGlzKTtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBDb21wb3NhYmxlO1xufTtcblxuXG4vLyBQcm9wZXJ0aWVzIGRlZmluZWQgYnkgT2JqZWN0IHRoYXQgd2UgZG9uJ3Qgd2FudCB0byBtaXhpbi5cbmNvbnN0IE5PTl9NSVhBQkxFX09CSkVDVF9QUk9QRVJUSUVTID0gW1xuICAnY29uc3RydWN0b3InXG5dO1xuXG4vKlxuICogQXBwbHkgdGhlIG1peGluIHRvIHRoZSBnaXZlbiBiYXNlIGNsYXNzIHRvIHJldHVybiBhIG5ldyBjbGFzcy5cbiAqIFRoZSBtaXhpbiBjYW4gZWl0aGVyIGJlIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBtb2RpZmllZCBjbGFzcywgb3IgYVxuICogcGxhaW4gb2JqZWN0IHdob3NlIG1lbWJlcnMgd2lsbCBiZSBjb3BpZWQgdG8gdGhlIG5ldyBjbGFzcycgcHJvdG90eXBlLlxuICovXG5mdW5jdGlvbiBjb21wb3NlQ2xhc3MoYmFzZSwgbWl4aW4pIHtcbiAgaWYgKHR5cGVvZiBtaXhpbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIE1peGluIGZ1bmN0aW9uXG4gICAgcmV0dXJuIG1peGluKGJhc2UpO1xuICB9IGVsc2Uge1xuICAgIC8vIE1peGluIG9iamVjdFxuICAgIGNsYXNzIFN1YmNsYXNzIGV4dGVuZHMgYmFzZSB7fVxuICAgIGNvcHlPd25Qcm9wZXJ0aWVzKG1peGluLCBTdWJjbGFzcy5wcm90b3R5cGUsIE5PTl9NSVhBQkxFX09CSkVDVF9QUk9QRVJUSUVTKTtcbiAgICByZXR1cm4gU3ViY2xhc3M7XG4gIH1cbn1cblxuXG4vKlxuICogQ29weSB0aGUgZ2l2ZW4gcHJvcGVydGllcy9tZXRob2RzIHRvIHRoZSB0YXJnZXQuXG4gKiBSZXR1cm4gdGhlIHVwZGF0ZWQgdGFyZ2V0LlxuICovXG5mdW5jdGlvbiBjb3B5T3duUHJvcGVydGllcyhzb3VyY2UsIHRhcmdldCwgaWdub3JlUHJvcGVydHlOYW1lcyA9IFtdKSB7XG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZSkuZm9yRWFjaChuYW1lID0+IHtcbiAgICBpZiAoaWdub3JlUHJvcGVydHlOYW1lcy5pbmRleE9mKG5hbWUpIDwgMCkge1xuICAgICAgY29uc3QgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBuYW1lKTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB0YXJnZXQ7XG59XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4vY3JlYXRlU3ltYm9sJztcbmltcG9ydCB0b2dnbGVDbGFzcyBmcm9tICcuL3RvZ2dsZUNsYXNzJztcbmltcG9ydCBzeW1ib2xzIGZyb20gJy4vc3ltYm9scyc7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IGl0ZW1zU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdpdGVtcycpO1xuY29uc3QgaXRlbUluaXRpYWxpemVkU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdpdGVtSW5pdGlhbGl6ZWQnKTtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIENvbnRlbnRJdGVtcy4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIG1hcHMgY29udGVudCBzZW1hbnRpY3MgKGVsZW1lbnRzKSB0byBsaXN0IGl0ZW0gc2VtYW50aWNzLlxuICAgKlxuICAgKiBJdGVtcyBkaWZmZXIgZnJvbSBlbGVtZW50IGNvbnRlbnRzIGluIHNldmVyYWwgd2F5czpcbiAgICpcbiAgICogKiBUaGV5IGFyZSBvZnRlbiByZWZlcmVuY2VkIHZpYSBpbmRleC5cbiAgICogKiBUaGV5IG1heSBoYXZlIGEgc2VsZWN0aW9uIHN0YXRlLlxuICAgKiAqIEl0J3MgY29tbW9uIHRvIGRvIHdvcmsgdG8gaW5pdGlhbGl6ZSB0aGUgYXBwZWFyYW5jZSBvciBzdGF0ZSBvZiBhIG5ld1xuICAgKiAgIGl0ZW0uXG4gICAqICogQXV4aWxpYXJ5IGludmlzaWJsZSBjaGlsZCBlbGVtZW50cyBhcmUgZmlsdGVyZWQgb3V0IGFuZCBub3QgY291bnRlZCBhc1xuICAgKiAgIGl0ZW1zLiBBdXhpbGlhcnkgZWxlbWVudHMgaW5jbHVkZSBsaW5rLCBzY3JpcHQsIHN0eWxlLCBhbmQgdGVtcGxhdGVcbiAgICogICBlbGVtZW50cy4gVGhpcyBmaWx0ZXJpbmcgZW5zdXJlcyB0aGF0IHRob3NlIGF1eGlsaWFyeSBlbGVtZW50cyBjYW4gYmVcbiAgICogICB1c2VkIGluIG1hcmt1cCBpbnNpZGUgb2YgYSBsaXN0IHdpdGhvdXQgYmVpbmcgdHJlYXRlZCBhcyBsaXN0IGl0ZW1zLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGV4cGVjdHMgYSBjb21wb25lbnQgdG8gcHJvdmlkZSBhIGBjb250ZW50YCBwcm9wZXJ0eSByZXR1cm5pbmcgYVxuICAgKiByYXcgc2V0IG9mIGVsZW1lbnRzLiBZb3UgY2FuIHByb3ZpZGUgdGhhdCB5b3Vyc2VsZiwgb3IgdXNlXG4gICAqIFtEaXN0cmlidXRlZENoaWxkcmVuQ29udGVudE1peGluXShEaXN0cmlidXRlZENoaWxkcmVuQ29udGVudE1peGluLm1kKS5cbiAgICpcbiAgICogVGhlIG1vc3QgY29tbW9ubHkgcmVmZXJlbmNlZCBwcm9wZXJ0eSBkZWZpbmVkIGJ5IHRoaXMgbWl4aW4gaXMgdGhlIGBpdGVtc2BcbiAgICogcHJvcGVydHkuIFRvIGF2b2lkIGhhdmluZyB0byBkbyB3b3JrIGVhY2ggdGltZSB0aGF0IHByb3BlcnR5IGlzIHJlcXVlc3RlZCxcbiAgICogdGhpcyBtaXhpbiBzdXBwb3J0cyBhbiBvcHRpbWl6ZWQgbW9kZS4gSWYgeW91IGludm9rZSB0aGUgYGNvbnRlbnRDaGFuZ2VkYFxuICAgKiBtZXRob2Qgd2hlbiB0aGUgc2V0IG9mIGl0ZW1zIGNoYW5nZXMsIHRoZSBtaXhpbiBjb25jbHVkZXMgdGhhdCB5b3UnbGwgdGFrZVxuICAgKiBjYXJlIG9mIG5vdGlmeWluZyBpdCBvZiBmdXR1cmUgY2hhbmdlcywgYW5kIHR1cm5zIG9uIHRoZSBvcHRpbWl6YXRpb24uIFdpdGhcbiAgICogdGhhdCBvbiwgdGhlIG1peGluIHNhdmVzIGEgcmVmZXJlbmNlIHRvIHRoZSBjb21wdXRlZCBzZXQgb2YgaXRlbXMsIGFuZCB3aWxsXG4gICAqIHJldHVybiB0aGF0IGltbWVkaWF0ZWx5IG9uIHN1YnNlcXVlbnQgY2FsbHMgdG8gdGhlIGBpdGVtc2AgcHJvcGVydHkuIElmIHlvdVxuICAgKiB1c2UgdGhpcyBtaXhpbiBpbiBjb25qdW5jdGlvbiB3aXRoXG4gICAqIFtEaXN0cmlidXRlZENoaWxkcmVuQ29udGVudE1peGluXShEaXN0cmlidXRlZENoaWxkcmVuQ29udGVudE1peGluLm1kKSwgdGhlXG4gICAqIGBjb250ZW50Q2hhbmdlZGAgbWV0aG9kIHdpbGwgYmUgaW52b2tlZCBmb3IgeW91IHdoZW4gdGhlIGVsZW1lbnQncyBjaGlsZHJlblxuICAgKiBjaGFuZ2UsIHR1cm5pbmcgb24gdGhlIG9wdGltaXphdGlvbiBhdXRvbWF0aWNhbGx5LlxuICAgKi9cbiAgY2xhc3MgQ29udGVudEl0ZW1zIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb250ZW50Q2hhbmdlZCgpIHtcbiAgICAgIGlmIChzdXBlci5jb250ZW50Q2hhbmdlZCkgeyBzdXBlci5jb250ZW50Q2hhbmdlZCgpOyB9XG5cbiAgICAgIC8vIFNpbmNlIHdlIGdvdCB0aGUgY29udGVudENoYW5nZWQgY2FsbCwgd2UnbGwgYXNzdW1lIHdlJ2xsIGJlIG5vdGlmaWVkIGlmXG4gICAgICAvLyB0aGUgc2V0IG9mIGl0ZW1zIGNoYW5nZXMgbGF0ZXIuIFdlIHR1cm4gb24gbWVtb2l6YXRpb24gb2YgdGhlIGl0ZW1zXG4gICAgICAvLyBwcm9wZXJ0eSBieSBzZXR0aW5nIG91ciBpbnRlcm5hbCBwcm9wZXJ0eSB0byBudWxsIChpbnN0ZWFkIG9mXG4gICAgICAvLyB1bmRlZmluZWQpLlxuICAgICAgdGhpc1tpdGVtc1N5bWJvbF0gPSBudWxsO1xuXG4gICAgICB0aGlzW3N5bWJvbHMuaXRlbXNDaGFuZ2VkXSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbmV2ZXIgYSBuZXcgaXRlbSBpcyBhZGRlZCB0byB0aGUgbGlzdC5cbiAgICAgKlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy4gWW91IGNhbiBvdmVycmlkZVxuICAgICAqIHRoaXMgdG8gcGVyZm9ybSBwZXItaXRlbSBpbml0aWFsaXphdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGl0ZW0gLSBUaGUgaXRlbSB0aGF0IHdhcyBhZGRlZC5cbiAgICAgKi9cbiAgICBbc3ltYm9scy5pdGVtQWRkZWRdKGl0ZW0pIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLml0ZW1BZGRlZF0pIHsgc3VwZXJbc3ltYm9scy5pdGVtQWRkZWRdKGl0ZW0pOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIHNlbGVjdGlvbiBzdGF0ZSBmb3IgYSBzaW5nbGUgaXRlbSBoYXMgY2hhbmdlZC5cbiAgICAgKlxuICAgICAqIEludm9rZSB0aGlzIG1ldGhvZCB0byBzaWduYWwgdGhhdCB0aGUgc2VsZWN0ZWQgc3RhdGUgb2YgdGhlIGluZGljYXRlZCBpdGVtXG4gICAgICogaGFzIGNoYW5nZWQuIEJ5IGRlZmF1bHQsIHRoaXMgYXBwbGllcyBhIGBzZWxlY3RlZGAgQ1NTIGNsYXNzIGlmIHRoZSBpdGVtXG4gICAgICogaXMgc2VsZWN0ZWQsIGFuZCByZW1vdmVkIGl0IGlmIG5vdCBzZWxlY3RlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGl0ZW0gLSBUaGUgaXRlbSB3aG9zZSBzZWxlY3Rpb24gc3RhdGUgaGFzIGNoYW5nZWQuXG4gICAgICogQHBhcmFtIHtib29sZWFufSBzZWxlY3RlZCAtIFRydWUgaWYgdGhlIGl0ZW0gaXMgc2VsZWN0ZWQsIGZhbHNlIGlmIG5vdC5cbiAgICAgKi9cbiAgICBbc3ltYm9scy5pdGVtU2VsZWN0ZWRdKGl0ZW0sIHNlbGVjdGVkKSB7XG4gICAgICBpZiAoc3VwZXJbc3ltYm9scy5pdGVtU2VsZWN0ZWRdKSB7IHN1cGVyW3N5bWJvbHMuaXRlbVNlbGVjdGVkXShpdGVtLCBzZWxlY3RlZCk7IH1cbiAgICAgIHRvZ2dsZUNsYXNzKGl0ZW0sICdzZWxlY3RlZCcsIHNlbGVjdGVkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCBzZXQgb2YgaXRlbXMgaW4gdGhlIGxpc3QuIFNlZSB0aGUgdG9wLWxldmVsIGRvY3VtZW50YXRpb24gZm9yXG4gICAgICogbWl4aW4gZm9yIGEgZGVzY3JpcHRpb24gb2YgaG93IGl0ZW1zIGRpZmZlciBmcm9tIHBsYWluIGNvbnRlbnQuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnRbXX1cbiAgICAgKi9cbiAgICBnZXQgaXRlbXMoKSB7XG4gICAgICBsZXQgaXRlbXM7XG4gICAgICBpZiAodGhpc1tpdGVtc1N5bWJvbF0gPT0gbnVsbCkge1xuICAgICAgICBpdGVtcyA9IGZpbHRlckF1eGlsaWFyeUVsZW1lbnRzKHRoaXMuY29udGVudCk7XG4gICAgICAgIC8vIE5vdGU6IHRlc3QgZm9yICplcXVhbGl0eSogd2l0aCBudWxsOyBkb24ndCB0cmVhdCB1bmRlZmluZWQgYXMgYSBtYXRjaC5cbiAgICAgICAgaWYgKHRoaXNbaXRlbXNTeW1ib2xdID09PSBudWxsKSB7XG4gICAgICAgICAgLy8gTWVtb2l6ZSB0aGUgc2V0IG9mIGl0ZW1zLlxuICAgICAgICAgIHRoaXNbaXRlbXNTeW1ib2xdID0gaXRlbXM7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFJldHVybiB0aGUgbWVtb2l6ZWQgaXRlbXMuXG4gICAgICAgIGl0ZW1zID0gdGhpc1tpdGVtc1N5bWJvbF07XG4gICAgICB9XG4gICAgICByZXR1cm4gaXRlbXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgaXMgaW52b2tlZCB3aGVuIHRoZSB1bmRlcmx5aW5nIGNvbnRlbnRzIGNoYW5nZS4gSXQgaXMgYWxzb1xuICAgICAqIGludm9rZWQgb24gY29tcG9uZW50IGluaXRpYWxpemF0aW9uIOKAkyBzaW5jZSB0aGUgaXRlbXMgaGF2ZSBcImNoYW5nZWRcIiBmcm9tXG4gICAgICogYmVpbmcgbm90aGluZy5cbiAgICAgKi9cbiAgICBbc3ltYm9scy5pdGVtc0NoYW5nZWRdKCkge1xuICAgICAgaWYgKHN1cGVyW3N5bWJvbHMuaXRlbXNDaGFuZ2VkXSkgeyBzdXBlcltzeW1ib2xzLml0ZW1zQ2hhbmdlZF0oKTsgfVxuXG4gICAgICAvLyBQZXJmb3JtIHBlci1pdGVtIGluaXRpYWxpemF0aW9uLlxuICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbCh0aGlzLml0ZW1zLCBpdGVtID0+IHtcbiAgICAgICAgaWYgKCFpdGVtW2l0ZW1Jbml0aWFsaXplZFN5bWJvbF0pIHtcbiAgICAgICAgICB0aGlzW3N5bWJvbHMuaXRlbUFkZGVkXShpdGVtKTtcbiAgICAgICAgICBpdGVtW2l0ZW1Jbml0aWFsaXplZFN5bWJvbF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnaXRlbXMtY2hhbmdlZCcpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaXJlcyB3aGVuIHRoZSBpdGVtcyBpbiB0aGUgbGlzdCBjaGFuZ2UuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgQ29udGVudEl0ZW1zXG4gICAgICogQGV2ZW50IGl0ZW1zLWNoYW5nZWRcbiAgICAgKi9cbiAgfVxuXG4gIHJldHVybiBDb250ZW50SXRlbXM7XG59O1xuXG5cbi8vIFJldHVybiB0aGUgZ2l2ZW4gZWxlbWVudHMsIGZpbHRlcmluZyBvdXQgYXV4aWxpYXJ5IGVsZW1lbnRzIHRoYXQgYXJlbid0XG4vLyB0eXBpY2FsbHkgdmlzaWJsZS4gSXRlbXMgd2hpY2ggYXJlIG5vdCBlbGVtZW50cyBhcmUgcmV0dXJuZWQgYXMgaXMuXG5mdW5jdGlvbiBmaWx0ZXJBdXhpbGlhcnlFbGVtZW50cyhpdGVtcykge1xuICBjb25zdCBhdXhpbGlhcnlUYWdzID0gW1xuICAgICdsaW5rJyxcbiAgICAnc2NyaXB0JyxcbiAgICAnc3R5bGUnLFxuICAgICd0ZW1wbGF0ZSdcbiAgXTtcbiAgcmV0dXJuIFtdLmZpbHRlci5jYWxsKGl0ZW1zLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgcmV0dXJuICFpdGVtLmxvY2FsTmFtZSB8fCBhdXhpbGlhcnlUYWdzLmluZGV4T2YoaXRlbS5sb2NhbE5hbWUpIDwgMDtcbiAgfSk7XG59XG4iLCJpbXBvcnQgc3ltYm9scyBmcm9tICcuL3N5bWJvbHMnO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggRGlyZWN0aW9uU2VsZWN0aW9uLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggbWFwcyBkaXJlY3Rpb24gc2VtYW50aWNzIChnb0xlZnQsIGdvUmlnaHQsIGV0Yy4pIHRvIHNlbGVjdGlvblxuICAgKiBzZW1hbnRpY3MgKHNlbGVjdFByZXZpb3VzLCBzZWxlY3ROZXh0LCBldGMuKS5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBjYW4gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoXG4gICAqIFtLZXlib2FyZERpcmVjdGlvbk1peGluXShLZXlib2FyZERpcmVjdGlvbk1peGluLm1kKSAod2hpY2ggbWFwcyBrZXlib2FyZFxuICAgKiBldmVudHMgdG8gZGlyZWN0aW9ucykgYW5kIGEgbWl4aW4gdGhhdCBoYW5kbGVzIHNlbGVjdGlvbiBsaWtlXG4gICAqIFtTaW5nbGVTZWxlY3Rpb25NaXhpbl0oU2luZ2xlU2VsZWN0aW9uTWl4aW4ubWQpLlxuICAgKi9cbiAgY2xhc3MgRGlyZWN0aW9uU2VsZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBbc3ltYm9scy5nb0Rvd25dKCkge1xuICAgICAgaWYgKHN1cGVyW3N5bWJvbHMuZ29Eb3duXSkgeyBzdXBlcltzeW1ib2xzLmdvRG93bl0oKTsgfVxuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0TmV4dCgpO1xuICAgIH1cblxuICAgIFtzeW1ib2xzLmdvRW5kXSgpIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLmdvRW5kXSkgeyBzdXBlcltzeW1ib2xzLmdvRW5kXSgpOyB9XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RMYXN0KCk7XG4gICAgfVxuXG4gICAgW3N5bWJvbHMuZ29MZWZ0XSgpIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLmdvTGVmdF0pIHsgc3VwZXJbc3ltYm9scy5nb0xlZnRdKCk7IH1cbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdFByZXZpb3VzKCk7XG4gICAgfVxuXG4gICAgW3N5bWJvbHMuZ29SaWdodF0oKSB7XG4gICAgICBpZiAoc3VwZXJbc3ltYm9scy5nb1JpZ2h0XSkgeyBzdXBlcltzeW1ib2xzLmdvUmlnaHRdKCk7IH1cbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdE5leHQoKTtcbiAgICB9XG5cbiAgICBbc3ltYm9scy5nb1N0YXJ0XSgpIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLmdvU3RhcnRdKSB7IHN1cGVyW3N5bWJvbHMuZ29TdGFydF0oKTsgfVxuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0Rmlyc3QoKTtcbiAgICB9XG5cbiAgICBbc3ltYm9scy5nb1VwXSgpIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLmdvVXBdKSB7IHN1cGVyW3N5bWJvbHMuZ29VcF0oKTsgfVxuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0UHJldmlvdXMoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IGltcGxlbWVudGF0aW9uLiBUaGlzIHdpbGwgdHlwaWNhbGx5IGJlIGhhbmRsZWQgYnkgb3RoZXIgbWl4aW5zLlxuICAgIGdldCBzZWxlY3RlZEZyYWN0aW9uKCkge1xuICAgICAgcmV0dXJuIHN1cGVyLnNlbGVjdGVkRnJhY3Rpb247XG4gICAgfVxuICAgIHNldCBzZWxlY3RlZEZyYWN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoJ3NlbGVjdGVkRnJhY3Rpb24nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkRnJhY3Rpb24gPSB2YWx1ZTsgfVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgaW1wbGVtZW50YXRpb24uIFRoaXMgd2lsbCB0eXBpY2FsbHkgYmUgaGFuZGxlZCBieSBvdGhlciBtaXhpbnMuXG4gICAgc2VsZWN0Rmlyc3QoKSB7XG4gICAgICBpZiAoc3VwZXIuc2VsZWN0Rmlyc3QpIHsgcmV0dXJuIHN1cGVyLnNlbGVjdEZpcnN0KCk7IH1cbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IGltcGxlbWVudGF0aW9uLiBUaGlzIHdpbGwgdHlwaWNhbGx5IGJlIGhhbmRsZWQgYnkgb3RoZXIgbWl4aW5zLlxuICAgIHNlbGVjdExhc3QoKSB7XG4gICAgICBpZiAoc3VwZXIuc2VsZWN0TGFzdCkgeyByZXR1cm4gc3VwZXIuc2VsZWN0TGFzdCgpOyB9XG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCBpbXBsZW1lbnRhdGlvbi4gVGhpcyB3aWxsIHR5cGljYWxseSBiZSBoYW5kbGVkIGJ5IG90aGVyIG1peGlucy5cbiAgICBzZWxlY3ROZXh0KCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdE5leHQpIHsgcmV0dXJuIHN1cGVyLnNlbGVjdE5leHQoKTsgfVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgaW1wbGVtZW50YXRpb24uIFRoaXMgd2lsbCB0eXBpY2FsbHkgYmUgaGFuZGxlZCBieSBvdGhlciBtaXhpbnMuXG4gICAgc2VsZWN0UHJldmlvdXMoKSB7XG4gICAgICBpZiAoc3VwZXIuc2VsZWN0UHJldmlvdXMpIHsgcmV0dXJuIHN1cGVyLnNlbGVjdFByZXZpb3VzKCk7IH1cbiAgICB9XG5cbiAgICAvLyBNYXAgZHJhZyB0cmF2ZWwgZnJhY3Rpb24gdG8gc2VsZWN0aW9uIGZyYWN0aW9uLlxuICAgIGdldCB0cmF2ZWxGcmFjdGlvbigpIHtcbiAgICAgIHJldHVybiBzdXBlci50cmF2ZWxGcmFjdGlvbjtcbiAgICB9XG4gICAgc2V0IHRyYXZlbEZyYWN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoJ3RyYXZlbEZyYWN0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci50cmF2ZWxGcmFjdGlvbiA9IHZhbHVlOyB9XG4gICAgICB0aGlzLnNlbGVjdGVkRnJhY3Rpb24gPSB2YWx1ZTtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBEaXJlY3Rpb25TZWxlY3Rpb247XG59O1xuIiwiaW1wb3J0IG1pY3JvdGFzayBmcm9tICcuL21pY3JvdGFzayc7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBEaXN0cmlidXRlZENoaWxkcmVuQ29udGVudC4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIGRlZmluZXMgYSBjb21wb25lbnQncyBjb250ZW50IGFzIGl0cyBjaGlsZHJlbiwgZXhwYW5kaW5nIGFueVxuICAgKiBub2RlcyBkaXN0cmlidXRlZCB0byB0aGUgY29tcG9uZW50J3Mgc2xvdHMuXG4gICAqXG4gICAqIFRoaXMgYWxzbyBwcm92aWRlcyBub3RpZmljYXRpb24gb2YgY2hhbmdlcyB0byBhIGNvbXBvbmVudCdzIGNvbnRlbnQuIEl0XG4gICAqIHdpbGwgaW52b2tlIGEgYGNvbnRlbnRDaGFuZ2VkYCBtZXRob2Qgd2hlbiB0aGUgY29tcG9uZW50IGlzIGZpcnN0XG4gICAqIGluc3RhbnRpYXRlZCwgYW5kIHdoZW5ldmVyIGl0cyBkaXN0cmlidXRlZCBjaGlsZHJlbiBjaGFuZ2UuIFRoaXMgaXMgYW5cbiAgICogZWFzeSB3YXkgdG8gc2F0aXNmeSB0aGUgR29sZCBTdGFuZGFyZCBjaGVja2xpc3QgaXRlbSBmb3IgbW9uaXRvcmluZ1xuICAgKiBbQ29udGVudCBDaGFuZ2VzXShodHRwczovL2dpdGh1Yi5jb20vd2ViY29tcG9uZW50cy9nb2xkLXN0YW5kYXJkL3dpa2kvQ29udGVudC1DaGFuZ2VzKS5cbiAgICpcbiAgICogRXhhbXBsZTpcbiAgICpcbiAgICogYGBgXG4gICAqIGxldCBiYXNlID0gRGlzdHJpYnV0ZWRDaGlsZHJlbkNvbnRlbnRNaXhpbihEaXN0cmlidXRlZENoaWxkcmVuTWl4aW4oSFRNTEVsZW1lbnQpKTtcbiAgICogY2xhc3MgQ291bnRpbmdFbGVtZW50IGV4dGVuZHMgYmFzZSB7XG4gICAqXG4gICAqICAgY29uc3RydWN0b3IoKSB7XG4gICAqICAgICBzdXBlcigpO1xuICAgKiAgICAgbGV0IHJvb3QgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcbiAgICogICAgIHJvb3QuaW5uZXJIVE1MID0gYDxzbG90Pjwvc2xvdD5gO1xuICAgKiAgIH1cbiAgICpcbiAgICogICBjb250ZW50Q2hhbmdlZCgpIHtcbiAgICogICAgIC8vIENvdW50IHRoZSBjb21wb25lbnQncyBjaGlsZHJlbiwgYm90aCBpbml0aWFsbHkgYW5kIHdoZW4gY2hhbmdlZC5cbiAgICogICAgIHRoaXMuY291bnQgPSB0aGlzLmRpc3RyaWJ1dGVkQ2hpbGRyZW4ubGVuZ3RoO1xuICAgKiAgIH1cbiAgICpcbiAgICogfVxuICAgKiBgYGBcbiAgICpcbiAgICogTm90ZSB0aGF0IGNvbnRlbnQgY2hhbmdlIGRldGVjdGlvbiBkZXBlbmRzIHVwb24gdGhlIGVsZW1lbnQgaGF2aW5nIGF0IGxlYXN0XG4gICAqIG9uZSBgc2xvdGAgZWxlbWVudCBpbiBpdHMgc2hhZG93IHN1YnRyZWUuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gaXMgaW50ZW5kZWQgZm9yIHVzZSB3aXRoIHRoZVxuICAgKiBbRGlzdHJpYnV0ZWRDaGlsZHJlbk1peGluXShEaXN0cmlidXRlZENoaWxkcmVuTWl4aW4ubWQpLiBTZWUgdGhhdCBtaXhpbiBmb3JcbiAgICogYSBkaXNjdXNzaW9uIG9mIGhvdyB0aGF0IHdvcmtzLiBUaGlzIERpc3RyaWJ1dGVkQ2hpbGRyZW5Db250ZW50TWl4aW5cbiAgICogcHJvdmlkZXMgYW4gZWFzeSB3YXkgb2YgZGVmaW5pbmcgdGhlIFwiY29udGVudFwiIG9mIGEgY29tcG9uZW50IGFzIHRoZVxuICAgKiBjb21wb25lbnQncyBkaXN0cmlidXRlZCBjaGlsZHJlbi4gVGhhdCBpbiB0dXJuIGxldHMgbWl4aW5zIGxpa2VcbiAgICogW0NvbnRlbnRJdGVtc01peGluXShDb250ZW50SXRlbXNNaXhpbi5tZCkgbWFuaXB1bGF0ZSB0aGUgY2hpbGRyZW4gYXMgbGlzdFxuICAgKiBpdGVtcy5cbiAgICovXG4gIGNsYXNzIERpc3RyaWJ1dGVkQ2hpbGRyZW5Db250ZW50IGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG5cbiAgICAgIGlmICh0aGlzLnNoYWRvd1Jvb3QpIHtcbiAgICAgICAgLy8gTGlzdGVuIHRvIGNoYW5nZXMgb24gYWxsIHNsb3RzLlxuICAgICAgICBjb25zdCBzbG90cyA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yQWxsKCdzbG90Jyk7XG4gICAgICAgIHNsb3RzLmZvckVhY2goc2xvdCA9PiBzbG90LmFkZEV2ZW50TGlzdGVuZXIoJ3Nsb3RjaGFuZ2UnLCBldmVudCA9PiB7XG4gICAgICAgICAgdGhpcy5jb250ZW50Q2hhbmdlZCgpO1xuICAgICAgICB9KSk7XG4gICAgICB9XG5cbiAgICAgIC8vIE1ha2UgYW4gaW5pdGlhbCBjYWxsIHRvIGNvbnRlbnRDaGFuZ2VkKCkgc28gdGhhdCB0aGUgY29tcG9uZW50IGNhbiBkb1xuICAgICAgLy8gaW5pdGlhbGl6YXRpb24gdGhhdCBpdCBub3JtYWxseSBkb2VzIHdoZW4gY29udGVudCBjaGFuZ2VzLlxuICAgICAgLy9cbiAgICAgIC8vIFRoaXMgd2lsbCBpbnZva2UgY29udGVudENoYW5nZWQoKSBoYW5kbGVycyBpbiBvdGhlciBtaXhpbnMuIEluIG9yZGVyXG4gICAgICAvLyB0aGF0IHRob3NlIG1peGlucyBoYXZlIGEgY2hhbmNlIHRvIGNvbXBsZXRlIHRoZWlyIG93biBpbml0aWFsaXphdGlvbixcbiAgICAgIC8vIHdlIGFkZCB0aGUgY29udGVudENoYW5nZWQoKSBjYWxsIHRvIHRoZSBtaWNyb3Rhc2sgcXVldWUuXG4gICAgICBtaWNyb3Rhc2soKCkgPT4gdGhpcy5jb250ZW50Q2hhbmdlZCgpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIGNvbnRlbnRzIG9mIHRoZSBjb21wb25lbnQgKGluY2x1ZGluZyBkaXN0cmlidXRlZFxuICAgICAqIGNoaWxkcmVuKSBoYXZlIGNoYW5nZWQuXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBhbHNvIGludm9rZWQgd2hlbiBhIGNvbXBvbmVudCBpcyBmaXJzdCBpbnN0YW50aWF0ZWQ7IHRoZVxuICAgICAqIGNvbnRlbnRzIGhhdmUgZXNzZW50aWFsbHkgXCJjaGFuZ2VkXCIgZnJvbSBiZWluZyBub3RoaW5nLiBUaGlzIGFsbG93cyB0aGVcbiAgICAgKiBjb21wb25lbnQgdG8gcGVyZm9ybSBpbml0aWFsIHByb2Nlc3Npbmcgb2YgaXRzIGNoaWxkcmVuLlxuICAgICAqL1xuICAgIGNvbnRlbnRDaGFuZ2VkKCkge1xuICAgICAgaWYgKHN1cGVyLmNvbnRlbnRDaGFuZ2VkKSB7IHN1cGVyLmNvbnRlbnRDaGFuZ2VkKCk7IH1cbiAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdjb250ZW50LWNoYW5nZWQnKTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbnRlbnQgb2YgdGhpcyBjb21wb25lbnQsIGRlZmluZWQgdG8gYmUgdGhlIGZsYXR0ZW5lZCBhcnJheSBvZlxuICAgICAqIGNoaWxkcmVuIGRpc3RyaWJ1dGVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnRbXX1cbiAgICAgKi9cbiAgICBnZXQgY29udGVudCgpIHtcbiAgICAgIGNvbnN0IGRpc3RyaWJ1dGVkQ2hpbGRyZW4gPSB0aGlzLmRpc3RyaWJ1dGVkQ2hpbGRyZW47XG4gICAgICBpZiAodHlwZW9mIGRpc3RyaWJ1dGVkQ2hpbGRyZW4gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgRGlzdHJpYnV0ZWRDaGlsZHJlbkNvbnRlbnRNaXhpbiBleHBlY3RzIHRoZSBjb21wb25lbnQgdG8gZGVmaW5lIGEgXCJkaXN0cmlidXRlZENoaWxkcmVuXCIgcHJvcGVydHkuYCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGlzdHJpYnV0ZWRDaGlsZHJlbjtcbiAgICB9XG4gICAgc2V0IGNvbnRlbnQodmFsdWUpIHtcbiAgICAgIGlmICgnY29udGVudCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuY29udGVudCA9IHZhbHVlOyB9XG4gICAgICAvLyBUT0RPOiBTZXQgdGhlIGNoaWxkcmVuIHRvIHRoZSBnaXZlbiB2YWx1ZSAod2hpY2ggc2hvdWxkIGJlIGFuIGFycmF5IG9mXG4gICAgICAvLyBlbGVtZW50cyk/XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBldmVudCBpcyByYWlzZWQgd2hlbiB0aGUgY29tcG9uZW50J3MgY29udGVudHMgKGluY2x1ZGluZyBkaXN0cmlidXRlZFxuICAgICAqIGNoaWxkcmVuKSBoYXZlIGNoYW5nZWQuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgRGlzdHJpYnV0ZWRDaGlsZHJlbkNvbnRlbnRcbiAgICAgKiBAZXZlbnQgY29udGVudC1jaGFuZ2VkXG4gICAgICovXG4gIH1cblxuICByZXR1cm4gRGlzdHJpYnV0ZWRDaGlsZHJlbkNvbnRlbnQ7XG59O1xuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBEaXN0cmlidXRlZENoaWxkcmVuLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggZGVmaW5lcyBoZWxwZXJzIGZvciBhY2Nlc3NpbmcgYSBjb21wb25lbnQncyBkaXN0cmlidXRlZFxuICAgKiBjaGlsZHJlbiBhcyBhIGZsYXR0ZW5lZCBhcnJheSBvciBzdHJpbmcuXG4gICAqXG4gICAqIFRoZSBzdGFuZGFyZCBET00gQVBJIHByb3ZpZGVzIHNldmVyYWwgd2F5cyBvZiBhY2Nlc3NpbmcgY2hpbGQgY29udGVudDpcbiAgICogYGNoaWxkcmVuYCwgYGNoaWxkTm9kZXNgLCBhbmQgYHRleHRDb250ZW50YC4gTm9uZSBvZiB0aGVzZSBmdW5jdGlvbnMgYXJlXG4gICAqIFNoYWRvdyBET00gYXdhcmUuIFRoaXMgbWl4aW4gZGVmaW5lcyB2YXJpYXRpb25zIG9mIHRob3NlIGZ1bmN0aW9ucyB0aGF0XG4gICAqICphcmUqIFNoYWRvdyBET00gYXdhcmUuXG4gICAqXG4gICAqIEV4YW1wbGU6IHlvdSBjcmVhdGUgYSBjb21wb25lbnQgYDxjb3VudC1jaGlsZHJlbj5gIHRoYXQgZGlzcGxheXMgYSBudW1iZXJcbiAgICogZXF1YWwgdG8gdGhlIG51bWJlciBvZiBjaGlsZHJlbiBwbGFjZWQgaW5zaWRlIHRoYXQgY29tcG9uZW50LiBJZiBzb21lb25lXG4gICAqIGluc3RhbnRpYXRlcyB5b3VyIGNvbXBvbmVudCBsaWtlOlxuICAgKlxuICAgKiAgICAgPGNvdW50LWNoaWxkcmVuPlxuICAgKiAgICAgICA8ZGl2PjwvZGl2PlxuICAgKiAgICAgICA8ZGl2PjwvZGl2PlxuICAgKiAgICAgICA8ZGl2PjwvZGl2PlxuICAgKiAgICAgPC9jb3VudC1jaGlsZHJlbj5cbiAgICpcbiAgICogVGhlbiB0aGUgY29tcG9uZW50IHNob3VsZCBzaG93IFwiM1wiLCBiZWNhdXNlIHRoZXJlIGFyZSB0aHJlZSBjaGlsZHJlbi4gVG9cbiAgICogY2FsY3VsYXRlIHRoZSBudW1iZXIgb2YgY2hpbGRyZW4sIHRoZSBjb21wb25lbnQgY2FuIGp1c3QgY2FsY3VsYXRlXG4gICAqIGB0aGlzLmNoaWxkcmVuLmxlbmd0aGAuIEhvd2V2ZXIsIHN1cHBvc2Ugc29tZW9uZSBpbnN0YW50aWF0ZXMgeW91clxuICAgKiBjb21wb25lbnQgaW5zaWRlIG9uZSBvZiB0aGVpciBvd24gY29tcG9uZW50cywgYW5kIHB1dHMgYSBgPHNsb3Q+YCBlbGVtZW50XG4gICAqIGluc2lkZSB5b3VyIGNvbXBvbmVudDpcbiAgICpcbiAgICogICAgIDxjb3VudC1jaGlsZHJlbj5cbiAgICogICAgICAgPHNsb3Q+PC9zbG90PlxuICAgKiAgICAgPC9jb3VudC1jaGlsZHJlbj5cbiAgICpcbiAgICogSWYgeW91ciBjb21wb25lbnQgb25seSBsb29rcyBhdCBgdGhpcy5jaGlsZHJlbmAsIGl0IHdpbGwgYWx3YXlzIHNlZSBleGFjdGx5XG4gICAqIG9uZSBjaGlsZCDigJTCoHRoZSBgPHNsb3Q+YCBlbGVtZW50LiBCdXQgdGhlIHVzZXIgbG9va2luZyBhdCB0aGUgcGFnZSB3aWxsXG4gICAqICpzZWUqIGFueSBub2RlcyBkaXN0cmlidXRlZCB0byB0aGF0IHNsb3QuIFRvIG1hdGNoIHdoYXQgdGhlIHVzZXIgc2VlcywgeW91clxuICAgKiBjb21wb25lbnQgc2hvdWxkIGV4cGFuZCBhbnkgYDxzbG90PmAgZWxlbWVudHMgaXQgY29udGFpbnMuXG4gICAqXG4gICAqIFRoYXQgaXMgdGhlIHByb2JsZW0gdGhpcyBtaXhpbiBzb2x2ZXMuIEFmdGVyIGFwcGx5aW5nIHRoaXMgbWl4aW4sIHlvdXJcbiAgICogY29tcG9uZW50IGNvZGUgaGFzIGFjY2VzcyB0byBgdGhpcy5kaXN0cmlidXRlZENoaWxkcmVuYCwgd2hvc2UgYGxlbmd0aGBcbiAgICogd2lsbCByZXR1cm4gdGhlIHRvdGFsIG51bWJlciBvZiBhbGwgY2hpbGRyZW4gZGlzdHJpYnV0ZWQgdG8geW91ciBjb21wb25lbnRcbiAgICogaW4gdGhlIGNvbXBvc2VkIHRyZWUuXG4gICAqXG4gICAqIE5vdGU6IFRoZSBsYXRlc3QgQ3VzdG9tIEVsZW1lbnRzIEFQSSBkZXNpZ24gY2FsbHMgZm9yIGEgbmV3IGZ1bmN0aW9uLFxuICAgKiBgZ2V0QXNzaWduZWROb2Rlc2AgdGhhdCB0YWtlcyBhbiBvcHRpb25hbCBgZGVlcGAgcGFyYW1ldGVyLCB0aGF0IHdpbGwgc29sdmVcbiAgICogdGhpcyBwcm9ibGVtIGF0IHRoZSBBUEkgbGV2ZWwuXG4gICAqL1xuICBjbGFzcyBEaXN0cmlidXRlZENoaWxkcmVuIGV4dGVuZHMgYmFzZSB7XG5cbiAgICAvKipcbiAgICAgKiBBbiBpbi1vcmRlciBjb2xsZWN0aW9uIG9mIGRpc3RyaWJ1dGVkIGNoaWxkcmVuLCBleHBhbmRpbmcgYW55IHNsb3RcbiAgICAgKiBlbGVtZW50cy4gTGlrZSB0aGUgc3RhbmRhcmQgY2hpbGRyZW4gcHJvcGVydHksIHRoaXMgc2tpcHMgdGV4dCBub2Rlcy5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudFtdfVxuICAgICAqL1xuICAgIGdldCBkaXN0cmlidXRlZENoaWxkcmVuKCkge1xuICAgICAgcmV0dXJuIGV4cGFuZENvbnRlbnRFbGVtZW50cyh0aGlzLmNoaWxkcmVuLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQW4gaW4tb3JkZXIgY29sbGVjdGlvbiBvZiBkaXN0cmlidXRlZCBjaGlsZCBub2RlcywgZXhwYW5kaW5nIGFueSBzbG90XG4gICAgICogZWxlbWVudHMuIExpa2UgdGhlIHN0YW5kYXJkIGNoaWxkTm9kZXMgcHJvcGVydHksIHRoaXMgaW5jbHVkZXMgdGV4dFxuICAgICAqIG5vZGVzLlxuICAgICAqXG4gICAgICogQHR5cGUge05vZGVbXX1cbiAgICAgKi9cbiAgICBnZXQgZGlzdHJpYnV0ZWRDaGlsZE5vZGVzKCkge1xuICAgICAgcmV0dXJuIGV4cGFuZENvbnRlbnRFbGVtZW50cyh0aGlzLmNoaWxkTm9kZXMsIHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBjb25jYXRlbmF0ZWQgdGV4dCBjb250ZW50IG9mIGFsbCBkaXN0cmlidXRlZCBjaGlsZCBub2RlcywgZXhwYW5kaW5nXG4gICAgICogYW55IHNsb3QgZWxlbWVudHMuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldCBkaXN0cmlidXRlZFRleHRDb250ZW50KCkge1xuICAgICAgY29uc3Qgc3RyaW5ncyA9IHRoaXMuZGlzdHJpYnV0ZWRDaGlsZE5vZGVzLm1hcChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgICByZXR1cm4gY2hpbGQudGV4dENvbnRlbnQ7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBzdHJpbmdzLmpvaW4oJycpO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIERpc3RyaWJ1dGVkQ2hpbGRyZW47XG59O1xuXG5cbi8qXG4gKiBHaXZlbiBhIGFycmF5IG9mIG5vZGVzLCByZXR1cm4gYSBuZXcgYXJyYXkgd2l0aCBhbnkgY29udGVudCBlbGVtZW50cyBleHBhbmRlZFxuICogdG8gdGhlIG5vZGVzIGRpc3RyaWJ1dGVkIHRvIHRoYXQgY29udGVudCBlbGVtZW50LiBUaGlzIHJ1bGUgaXMgYXBwbGllZFxuICogcmVjdXJzaXZlbHkuXG4gKlxuICogSWYgaW5jbHVkZVRleHROb2RlcyBpcyB0cnVlLCB0ZXh0IG5vZGVzIHdpbGwgYmUgaW5jbHVkZWQsIGFzIGluIHRoZVxuICogc3RhbmRhcmQgY2hpbGROb2RlcyBwcm9wZXJ0eTsgYnkgZGVmYXVsdCwgdGhpcyBza2lwcyB0ZXh0IG5vZGVzLCBsaWtlIHRoZVxuICogc3RhbmRhcmQgY2hpbGRyZW4gcHJvcGVydHkuXG4gKi9cbmZ1bmN0aW9uIGV4cGFuZENvbnRlbnRFbGVtZW50cyhub2RlcywgaW5jbHVkZVRleHROb2Rlcykge1xuICBjb25zdCBleHBhbmRlZCA9IEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChub2Rlcywgbm9kZSA9PiB7XG4gICAgLy8gV2Ugd2FudCB0byBzZWUgaWYgdGhlIG5vZGUgaXMgYW4gaW5zdGFuY2VvZiBIVE1MU2xvdEVMZW1lbnQsIGJ1dFxuICAgIC8vIHRoYXQgY2xhc3Mgd29uJ3QgZXhpc3QgaWYgdGhlIGJyb3dzZXIgdGhhdCBkb2Vzbid0IHN1cHBvcnQgbmF0aXZlXG4gICAgLy8gU2hhZG93IERPTSBhbmQgaWYgdGhlIFNoYWRvdyBET00gcG9seWZpbGwgaGFzbid0IGJlZW4gbG9hZGVkLiBJbnN0ZWFkLFxuICAgIC8vIHdlIGRvIGEgc2ltcGxpc3RpYyBjaGVjayB0byBzZWUgaWYgdGhlIHRhZyBuYW1lIGlzIFwic2xvdFwiLlxuICAgIGNvbnN0IGlzU2xvdCA9IHR5cGVvZiBIVE1MU2xvdEVsZW1lbnQgIT09ICd1bmRlZmluZWQnID9cbiAgICAgIG5vZGUgaW5zdGFuY2VvZiBIVE1MU2xvdEVsZW1lbnQgOlxuICAgICAgbm9kZS5sb2NhbE5hbWUgPT09ICdzbG90JztcbiAgICBpZiAoaXNTbG90KSB7XG4gICAgICAvLyBVc2UgdGhlIG5vZGVzIGFzc2lnbmVkIHRvIHRoaXMgbm9kZSBpbnN0ZWFkLlxuICAgICAgY29uc3QgYXNzaWduZWROb2RlcyA9IG5vZGUuYXNzaWduZWROb2Rlcyh7IGZsYXR0ZW46IHRydWUgfSk7XG4gICAgICByZXR1cm4gYXNzaWduZWROb2RlcyA/XG4gICAgICAgIGV4cGFuZENvbnRlbnRFbGVtZW50cyhhc3NpZ25lZE5vZGVzLCBpbmNsdWRlVGV4dE5vZGVzKSA6XG4gICAgICAgIFtdO1xuICAgIH0gZWxzZSBpZiAobm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAvLyBQbGFpbiBlbGVtZW50OyB1c2UgYXMgaXMuXG4gICAgICByZXR1cm4gW25vZGVdO1xuICAgIH0gZWxzZSBpZiAobm9kZSBpbnN0YW5jZW9mIFRleHQgJiYgaW5jbHVkZVRleHROb2Rlcykge1xuICAgICAgLy8gVGV4dCBub2RlLlxuICAgICAgcmV0dXJuIFtub2RlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ29tbWVudCwgcHJvY2Vzc2luZyBpbnN0cnVjdGlvbiwgZXRjLjsgc2tpcC5cbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH0pO1xuICBjb25zdCBmbGF0dGVuZWQgPSBbXS5jb25jYXQoLi4uZXhwYW5kZWQpO1xuICByZXR1cm4gZmxhdHRlbmVkO1xufVxuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuL2NyZWF0ZVN5bWJvbCc7XG5pbXBvcnQgc2FmZUF0dHJpYnV0ZXMgZnJvbSAnLi9zYWZlQXR0cmlidXRlcyc7XG5pbXBvcnQgc3ltYm9scyBmcm9tICcuL3N5bWJvbHMnO1xuXG5cbi8vIFN5bWJvbHMgZm9yIHByaXZhdGUgZGF0YSBtZW1iZXJzIG9uIGFuIGVsZW1lbnQuXG5jb25zdCBnZW5lcmljU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdnZW5lcmljJyk7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBHZW5lcmljLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggYWxsb3dzIGEgY29tcG9uZW50IHRvIHN1cHBvcnQgYSBcImdlbmVyaWNcIiBzdHlsZTogYSBtaW5pbWFsaXN0XG4gICAqIHN0eWxlIHRoYXQgY2FuIGVhc2lseSBiZSByZW1vdmVkIHRvIHJlc2V0IGl0cyB2aXN1YWwgYXBwZWFyYW5jZSB0byBhXG4gICAqIGJhc2VsaW5lIHN0YXRlLlxuICAgKlxuICAgKiBCeSBkZWZhdWx0LCBhIGNvbXBvbmVudCBzaG91bGQgcHJvdmlkZSBhIG1pbmltYWwgdmlzdWFsIHByZXNlbnRhdGlvbiB0aGF0XG4gICAqIGFsbG93cyB0aGUgY29tcG9uZW50IHRvIGZ1bmN0aW9uLiBIb3dldmVyLCB0aGUgbW9yZSBzdHlsaW5nIHRoZSBjb21wb25lbnRcbiAgICogcHJvdmlkZXMgYnkgZGVmYXVsdCwgdGhlIGhhcmRlciBpdCBiZWNvbWVzIHRvIGdldCB0aGUgY29tcG9uZW50IHRvIGZpdCBpblxuICAgKiBpbiBvdGhlciBzZXR0aW5ncy4gRWFjaCBDU1MgcnVsZSBoYXMgdG8gYmUgb3ZlcnJpZGRlbi4gV29yc2UsIG5ldyBDU1MgcnVsZXNcbiAgICogYWRkZWQgdG8gdGhlIGRlZmF1bHQgc3R5bGUgd29uJ3QgYmUgb3ZlcnJpZGRlbiBieSBkZWZhdWx0LCBtYWtpbmcgaXQgaGFyZFxuICAgKiB0byBrbm93IHdoZXRoZXIgYSBuZXcgdmVyc2lvbiBvZiBhIGNvbXBvbmVudCB3aWxsIHN0aWxsIGxvb2sgb2theS5cbiAgICpcbiAgICogQXMgYSBjb21wcm9taXNlLCB0aGUgbWl4aW4gZGVmaW5lcyBhIGBnZW5lcmljYCBhdHRyaWJ1dGUuIFRoaXMgYXR0cmlidXRlIGlzXG4gICAqIG5vcm1hbGx5IHNldCBieSBkZWZhdWx0LCBhbmQgc3R5bGVzIGNhbiBiZSB3cml0dGVuIHRoYXQgYXBwbHkgb25seSB3aGVuIHRoZVxuICAgKiBnZW5lcmljIGF0dHJpYnV0ZSBpcyBzZXQuIFRoaXMgYWxsb3dzIHRoZSBjb25zdHJ1Y3Rpb24gb2YgQ1NTIHJ1bGVzIHRoYXRcbiAgICogd2lsbCBvbmx5IGFwcGx5IHRvIGdlbmVyaWMgY29tcG9uZW50cyBsaWtlOlxuICAgKlxuICAgKiAgICAgOmhvc3QoW2dlbmVyaWM9XCJcIl0pIHtcbiAgICogICAgICAgLi4uIGdlbmVyaWMgYXBwZWFyYW5jZSBkZWZpbmVkIGhlcmUgLi4uXG4gICAqICAgICB9XG4gICAqXG4gICAqIFRoaXMgbWFrZXMgaXQgZWFzeSB0byByZW1vdmUgYWxsIGRlZmF1bHQgc3R5bGluZyDigJQgc2V0IHRoZSBgR2VuZXJpY01peGluYFxuICAgKiBhdHRyaWJ1dGUgdG8gZmFsc2UsIGFuZCBhbGwgZGVmYXVsdCBzdHlsaW5nIHdpbGwgYmUgcmVtb3ZlZC5cbiAgICovXG4gIGNsYXNzIEdlbmVyaWMgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIC8vIFNldCBkZWZhdWx0cy5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5nZW5lcmljID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLmdlbmVyaWMgPSB0aGlzW3N5bWJvbHMuZGVmYXVsdHNdLmdlbmVyaWM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVGhpcyBtaXhpbiBkb2Vzbid0IGFjdHVhbGx5IHJlc3BvbmQgdG8gYXR0cmlidXRlIGNoYW5nZXMsIGJ1dCByZWxpZXNcbiAgICAvLyBvbiBzZXBhcmF0ZWx5LWRlZmluZWQgYmVoYXZpb3IgKGUuZy4sIGluIEF0dHJpYnV0ZU1hcnNoYWxsaW5nTWl4aW4pIGZvciB0aGF0LlxuICAgIC8vIFN0aWxsLCB3ZSBuZWVkIGRlZmluZSBhIGJhc2VsaW5lIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayB0aGF0IGRvZXNcbiAgICAvLyBub3RoaW5nLCBpbiBjYXNlIHRoaXMgbWl4aW4gZ2V0cyB1c2VkIG9uIGl0cyBvd24uXG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xuICAgICAgaWYgKHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjaykgeyBzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKTsgfVxuICAgIH1cblxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKSB7IHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7IH1cbiAgICAgIHNhZmVBdHRyaWJ1dGVzLmNvbm5lY3RlZCh0aGlzKTtcbiAgICB9XG5cbiAgICBnZXQgW3N5bWJvbHMuZGVmYXVsdHNdKCkge1xuICAgICAgY29uc3QgZGVmYXVsdHMgPSBzdXBlcltzeW1ib2xzLmRlZmF1bHRzXSB8fCB7fTtcbiAgICAgIGRlZmF1bHRzLmdlbmVyaWMgPSB0cnVlO1xuICAgICAgcmV0dXJuIGRlZmF1bHRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRydWUgaWYgdGhlIGNvbXBvbmVudCB3b3VsZCBsaWtlIHRvIHJlY2VpdmUgZ2VuZXJpYyBzdHlsaW5nLlxuICAgICAqXG4gICAgICogVGhpcyBwcm9wZXJ0eSBpcyB0cnVlIGJ5IGRlZmF1bHQg4oCUwqBzZXQgaXQgdG8gZmFsc2UgdG8gdHVybiBvZmYgYWxsXG4gICAgICogZ2VuZXJpYyBzdHlsZXMuIFRoaXMgbWFrZXMgaXQgZWFzaWVyIHRvIGFwcGx5IGN1c3RvbSBzdHlsaW5nOyB5b3Ugd29uJ3RcbiAgICAgKiBoYXZlIHRvIGV4cGxpY2l0bHkgb3ZlcnJpZGUgc3R5bGluZyB5b3UgZG9uJ3Qgd2FudC5cbiAgICAgKlxuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgICovXG4gICAgZ2V0IGdlbmVyaWMoKSB7XG4gICAgICByZXR1cm4gdGhpc1tnZW5lcmljU3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IGdlbmVyaWModmFsdWUpIHtcbiAgICAgIGNvbnN0IHBhcnNlZCA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgP1xuICAgICAgICBTdHJpbmcodmFsdWUpICE9PSAnZmFsc2UnIDpcbiAgICAgICAgdmFsdWU7XG4gICAgICB0aGlzW2dlbmVyaWNTeW1ib2xdID0gcGFyc2VkO1xuXG4gICAgICBpZiAoJ2dlbmVyaWMnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLmdlbmVyaWMgPSB2YWx1ZTsgfVxuXG4gICAgICAvLyBXZSByb2xsIG91ciBvd24gYXR0cmlidXRlIHNldHRpbmcgc28gdGhhdCBhbiBleHBsaWNpdGx5IGZhbHNlIHZhbHVlXG4gICAgICAvLyBzaG93cyB1cCBhcyBHZW5lcmljTWl4aW49XCJmYWxzZVwiLlxuICAgICAgaWYgKHBhcnNlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgLy8gRXhwbGljaXRseSB1c2UgZmFsc2Ugc3RyaW5nLlxuICAgICAgICBzYWZlQXR0cmlidXRlcy5zZXRBdHRyaWJ1dGUodGhpcywgJ2dlbmVyaWMnLCAnZmFsc2UnKTtcbiAgICAgIH0gZWxzZSBpZiAocGFyc2VkID09IG51bGwpIHtcbiAgICAgICAgLy8gRXhwbGljaXRseSByZW1vdmUgYXR0cmlidXRlLiAoQWx3YXlzIHNhZmUgdG8gZG8gdGhpcy4pXG4gICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCdnZW5lcmljJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBVc2UgdGhlIGVtcHR5IHN0cmluZyB0byBnZXQgYXR0cmlidXRlIHRvIGFwcGVhciB3aXRoIG5vIHZhbHVlLlxuICAgICAgICBzYWZlQXR0cmlidXRlcy5zZXRBdHRyaWJ1dGUodGhpcywgJ2dlbmVyaWMnLCAnJyk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gR2VuZXJpYztcbn07XG5cblxuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuL2NyZWF0ZVN5bWJvbCc7XG5pbXBvcnQgc3ltYm9scyBmcm9tICcuL3N5bWJvbHMnO1xuXG5cbi8vIFN5bWJvbHMgZm9yIHByaXZhdGUgZGF0YSBtZW1iZXJzIG9uIGFuIGVsZW1lbnQuXG5jb25zdCBuYXZpZ2F0aW9uQXhpc1N5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnbmF2aWdhdGlvbkF4aXMnKTtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIEtleWJvYXJkRGlyZWN0aW9uLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggbWFwcyBkaXJlY3Rpb24ga2V5cyAoTGVmdCwgUmlnaHQsIGV0Yy4pIHRvIGRpcmVjdGlvbiBzZW1hbnRpY3NcbiAgICogKGdvIGxlZnQsIGdvIHJpZ2h0LCBldGMuKS5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIHRoZSBjb21wb25lbnQgdG8gaW52b2tlIGEgYGtleWRvd25gIG1ldGhvZCB3aGVuIGEga2V5IGlzXG4gICAqIHByZXNzZWQuIFlvdSBjYW4gdXNlIFtLZXlib2FyZE1peGluXShLZXlib2FyZE1peGluLm1kKSBmb3IgdGhhdFxuICAgKiBwdXJwb3NlLCBvciB3aXJlIHVwIHlvdXIgb3duIGtleWJvYXJkIGhhbmRsaW5nIGFuZCBjYWxsIGBrZXlkb3duYCB5b3Vyc2VsZi5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBjYWxscyBtZXRob2RzIHN1Y2ggYXMgYGdvTGVmdGAgYW5kIGBnb1JpZ2h0YC4gWW91IGNhbiBkZWZpbmVcbiAgICogd2hhdCB0aGF0IG1lYW5zIGJ5IGltcGxlbWVudGluZyB0aG9zZSBtZXRob2RzIHlvdXJzZWxmLiBJZiB5b3Ugd2FudCB0byB1c2VcbiAgICogZGlyZWN0aW9uIGtleXMgdG8gbmF2aWdhdGUgYSBzZWxlY3Rpb24sIHVzZSB0aGlzIG1peGluIHdpdGhcbiAgICogW0RpcmVjdGlvblNlbGVjdGlvbk1peGluXShEaXJlY3Rpb25TZWxlY3Rpb25NaXhpbi5tZCkuXG4gICAqL1xuICBjbGFzcyBLZXlib2FyZERpcmVjdGlvbiBleHRlbmRzIGJhc2Uge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgLy8gU2V0IGRlZmF1bHRzLlxuICAgICAgaWYgKHR5cGVvZiB0aGlzLm5hdmlnYXRpb25BeGlzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLm5hdmlnYXRpb25BeGlzID0gdGhpc1tzeW1ib2xzLmRlZmF1bHRzXS5uYXZpZ2F0aW9uQXhpcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgW3N5bWJvbHMuZGVmYXVsdHNdKCkge1xuICAgICAgY29uc3QgZGVmYXVsdHMgPSBzdXBlcltzeW1ib2xzLmRlZmF1bHRzXSB8fCB7fTtcbiAgICAgIGRlZmF1bHRzLm5hdmlnYXRpb25BeGlzID0gJ2JvdGgnO1xuICAgICAgcmV0dXJuIGRlZmF1bHRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSBkb3duLlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy5cbiAgICAgKi9cbiAgICBbc3ltYm9scy5nb0Rvd25dKCkge1xuICAgICAgaWYgKHN1cGVyW3N5bWJvbHMuZ29Eb3duXSkgeyByZXR1cm4gc3VwZXJbc3ltYm9scy5nb0Rvd25dKCk7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgdG8gdGhlIGVuZCAoZS5nLiwgb2YgYSBsaXN0KS5cbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuXG4gICAgICovXG4gICAgW3N5bWJvbHMuZ29FbmRdKCkge1xuICAgICAgaWYgKHN1cGVyW3N5bWJvbHMuZ29FbmRdKSB7IHJldHVybiBzdXBlcltzeW1ib2xzLmdvRW5kXSgpOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIGxlZnQuXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLlxuICAgICAqL1xuICAgIFtzeW1ib2xzLmdvTGVmdF0oKSB7XG4gICAgICBpZiAoc3VwZXJbc3ltYm9scy5nb0xlZnRdKSB7IHJldHVybiBzdXBlcltzeW1ib2xzLmdvTGVmdF0oKTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSByaWdodC5cbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuXG4gICAgICovXG4gICAgW3N5bWJvbHMuZ29SaWdodF0oKSB7XG4gICAgICBpZiAoc3VwZXJbc3ltYm9scy5nb1JpZ2h0XSkgeyByZXR1cm4gc3VwZXJbc3ltYm9scy5nb1JpZ2h0XSgpOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIHRvIHRoZSBzdGFydCAoZS5nLiwgb2YgYVxuICAgICAqIGxpc3QpLiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuXG4gICAgICovXG4gICAgW3N5bWJvbHMuZ29TdGFydF0oKSB7XG4gICAgICBpZiAoc3VwZXJbc3ltYm9scy5nb1N0YXJ0XSkgeyByZXR1cm4gc3VwZXJbc3ltYm9scy5nb1N0YXJ0XSgpOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIHVwLlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy5cbiAgICAgKi9cbiAgICBbc3ltYm9scy5nb1VwXSgpIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLmdvVXBdKSB7IHJldHVybiBzdXBlcltzeW1ib2xzLmdvVXBdKCk7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgdGhlIGRpcmVjdGlvbiBvZiBwZXJtaXR0ZWQgbmF2aWdhdGlvbiB3aXRoIHRoZSBrZXlib2FyZC5cbiAgICAgKlxuICAgICAqIEFjY2VwdGVkIHZhbHVlcyBhcmUgXCJob3Jpem9udGFsXCIsIFwidmVydGljYWxcIiwgb3IgXCJib3RoXCIgKHRoZSBkZWZhdWx0KS5cbiAgICAgKiBJZiB0aGlzIHByb3BlcnR5IGlzIFwiaG9yaXpvbnRhbFwiLCB0aGUgVXAgQXJyb3cgYW5kIERvd24gQXJyb3cga2V5cyB3aWxsXG4gICAgICogYmUgaWdub3JlZC4gQ29udmVyc2VseSwgaWYgdGhpcyBpcyBcInZlcnRpY2FsXCIsIHRoZSBMZWZ0IEFycm93IGFuZCBSaWdodFxuICAgICAqIEFycm93IGtleXMgd2lsbCBiZSBpZ25vcmVkLlxuICAgICAqXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXQgbmF2aWdhdGlvbkF4aXMoKSB7XG4gICAgICByZXR1cm4gdGhpc1tuYXZpZ2F0aW9uQXhpc1N5bWJvbF07XG4gICAgfVxuICAgIHNldCBuYXZpZ2F0aW9uQXhpcyh2YWx1ZSkge1xuICAgICAgdGhpc1tuYXZpZ2F0aW9uQXhpc1N5bWJvbF0gPSB2YWx1ZTtcbiAgICAgIGlmICgnbmF2aWdhdGlvbkF4aXMnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLm5hdmlnYXRpb25BeGlzID0gdmFsdWU7IH1cbiAgICB9XG5cbiAgICBbc3ltYm9scy5rZXlkb3duXShldmVudCkge1xuICAgICAgbGV0IGhhbmRsZWQ7XG5cbiAgICAgIGNvbnN0IGF4aXMgPSB0aGlzLm5hdmlnYXRpb25BeGlzO1xuICAgICAgY29uc3QgaG9yaXpvbnRhbCA9IChheGlzID09PSAnaG9yaXpvbnRhbCcgfHwgYXhpcyA9PT0gJ2JvdGgnKTtcbiAgICAgIGNvbnN0IHZlcnRpY2FsID0gKGF4aXMgPT09ICd2ZXJ0aWNhbCcgfHwgYXhpcyA9PT0gJ2JvdGgnKTtcblxuICAgICAgLy8gSWdub3JlIExlZnQvUmlnaHQga2V5cyB3aGVuIG1ldGFLZXkgb3IgYWx0S2V5IG1vZGlmaWVyIGlzIGFsc28gcHJlc3NlZCxcbiAgICAgIC8vIGFzIHRoZSB1c2VyIG1heSBiZSB0cnlpbmcgdG8gbmF2aWdhdGUgYmFjayBvciBmb3J3YXJkIGluIHRoZSBicm93c2VyLlxuICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgIGNhc2UgMzU6IC8vIEVuZFxuICAgICAgICAgIGhhbmRsZWQgPSB0aGlzW3N5bWJvbHMuZ29FbmRdKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzY6IC8vIEhvbWVcbiAgICAgICAgICBoYW5kbGVkID0gdGhpc1tzeW1ib2xzLmdvU3RhcnRdKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzc6IC8vIExlZnRcbiAgICAgICAgICBpZiAoaG9yaXpvbnRhbCAmJiAhZXZlbnQubWV0YUtleSAmJiAhZXZlbnQuYWx0S2V5KSB7XG4gICAgICAgICAgICBoYW5kbGVkID0gdGhpc1tzeW1ib2xzLmdvTGVmdF0oKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzg6IC8vIFVwXG4gICAgICAgICAgaWYgKHZlcnRpY2FsKSB7XG4gICAgICAgICAgICBoYW5kbGVkID0gZXZlbnQuYWx0S2V5ID8gdGhpc1tzeW1ib2xzLmdvU3RhcnRdKCkgOiB0aGlzW3N5bWJvbHMuZ29VcF0oKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzk6IC8vIFJpZ2h0XG4gICAgICAgICAgaWYgKGhvcml6b250YWwgJiYgIWV2ZW50Lm1ldGFLZXkgJiYgIWV2ZW50LmFsdEtleSkge1xuICAgICAgICAgICAgaGFuZGxlZCA9IHRoaXNbc3ltYm9scy5nb1JpZ2h0XSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0MDogLy8gRG93blxuICAgICAgICAgIGlmICh2ZXJ0aWNhbCkge1xuICAgICAgICAgICAgaGFuZGxlZCA9IGV2ZW50LmFsdEtleSA/IHRoaXNbc3ltYm9scy5nb0VuZF0oKSA6IHRoaXNbc3ltYm9scy5nb0Rvd25dKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgLy8gUHJlZmVyIG1peGluIHJlc3VsdCBpZiBpdCdzIGRlZmluZWQsIG90aGVyd2lzZSB1c2UgYmFzZSByZXN1bHQuXG4gICAgICByZXR1cm4gaGFuZGxlZCB8fCAoc3VwZXJbc3ltYm9scy5rZXlkb3duXSAmJiBzdXBlcltzeW1ib2xzLmtleWRvd25dKGV2ZW50KSk7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gS2V5Ym9hcmREaXJlY3Rpb247XG59O1xuIiwiaW1wb3J0IHN5bWJvbHMgZnJvbSAnLi9zeW1ib2xzJztcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIEtleWJvYXJkLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggbWFuYWdlcyB0aGUga2V5ZG93biBoYW5kbGluZyBmb3IgYSBjb21wb25lbnQuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gaGFuZGxlcyBzZXZlcmFsIGtleWJvYXJkLXJlbGF0ZWQgZmVhdHVyZXMuXG4gICAqXG4gICAqIEZpcnN0LCBpdCB3aXJlcyB1cCBhIHNpbmdsZSBrZXlkb3duIGV2ZW50IGhhbmRsZXIgdGhhdCBjYW4gYmUgc2hhcmVkIGJ5XG4gICAqIG11bHRpcGxlIG1peGlucyBvbiBhIGNvbXBvbmVudC4gVGhlIGV2ZW50IGhhbmRsZXIgd2lsbCBpbnZva2UgYSBga2V5ZG93bmBcbiAgICogbWV0aG9kIHdpdGggdGhlIGV2ZW50IG9iamVjdCwgYW5kIGFueSBtaXhpbiBhbG9uZyB0aGUgcHJvdG90eXBlIGNoYWluIHRoYXRcbiAgICogd2FudHMgdG8gaGFuZGxlIHRoYXQgbWV0aG9kIGNhbiBkbyBzby5cbiAgICpcbiAgICogSWYgYSBtaXhpbiB3YW50cyB0byBpbmRpY2F0ZSB0aGF0IGtleWJvYXJkIGV2ZW50IGhhcyBiZWVuIGhhbmRsZWQsIGFuZCB0aGF0XG4gICAqIG90aGVyIG1peGlucyBzaG91bGQgKm5vdCogaGFuZGxlIGl0LCB0aGUgbWl4aW4ncyBga2V5ZG93bmAgaGFuZGxlciBzaG91bGRcbiAgICogcmV0dXJuIGEgdmFsdWUgb2YgdHJ1ZS4gVGhlIGNvbnZlbnRpb24gdGhhdCBzZWVtcyB0byB3b3JrIHdlbGwgaXMgdGhhdCBhXG4gICAqIG1peGluIHNob3VsZCBzZWUgaWYgaXQgd2FudHMgdG8gaGFuZGxlIHRoZSBldmVudCBhbmQsIGlmIG5vdCwgdGhlbiBhc2sgdGhlXG4gICAqIHN1cGVyY2xhc3MgdG8gc2VlIGlmIGl0IHdhbnRzIHRvIGhhbmRsZSB0aGUgZXZlbnQuIFRoaXMgaGFzIHRoZSBlZmZlY3Qgb2ZcbiAgICogZ2l2aW5nIHRoZSBtaXhpbiB0aGF0IHdhcyBhcHBsaWVkIGxhc3QgdGhlIGZpcnN0IGNoYW5jZSBhdCBoYW5kbGluZyBhXG4gICAqIGtleWJvYXJkIGV2ZW50LlxuICAgKlxuICAgKiBFeGFtcGxlOlxuICAgKlxuICAgKiAgICAgW3N5bWJvbHMua2V5ZG93bl0oZXZlbnQpIHtcbiAgICogICAgICAgbGV0IGhhbmRsZWQ7XG4gICAqICAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgKiAgICAgICAgIC8vIEhhbmRsZSB0aGUga2V5cyB5b3Ugd2FudCwgc2V0dGluZyBoYW5kbGVkID0gdHJ1ZSBpZiBhcHByb3ByaWF0ZS5cbiAgICogICAgICAgfVxuICAgKiAgICAgICAvLyBQcmVmZXIgbWl4aW4gcmVzdWx0IGlmIGl0J3MgZGVmaW5lZCwgb3RoZXJ3aXNlIHVzZSBiYXNlIHJlc3VsdC5cbiAgICogICAgICAgcmV0dXJuIGhhbmRsZWQgfHwgKHN1cGVyW3N5bWJvbHMua2V5ZG93bl0gJiYgc3VwZXJbc3ltYm9scy5rZXlkb3duXShldmVudCkpO1xuICAgKiAgICAgfVxuICAgKlxuICAgKiBBIHNlY29uZCBmZWF0dXJlIHByb3ZpZGVkIGJ5IHRoaXMgbWl4aW4gaXMgdGhhdCBpdCBpbXBsaWNpdGx5IG1ha2VzIHRoZVxuICAgKiBjb21wb25lbnQgYSB0YWIgc3RvcCBpZiBpdCBpc24ndCBhbHJlYWR5LCBieSBzZXR0aW5nIGB0YWJJbmRleGAgdG8gMC4gVGhpc1xuICAgKiBoYXMgdGhlIGVmZmVjdCBvZiBhZGRpbmcgdGhlIGNvbXBvbmVudCB0byB0aGUgdGFiIG9yZGVyIGluIGRvY3VtZW50IG9yZGVyLlxuICAgKi9cbiAgY2xhc3MgS2V5Ym9hcmQgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGV2ZW50ID0+IHtcbiAgICAgICAgY29uc3QgaGFuZGxlZCA9IHRoaXNbc3ltYm9scy5rZXlkb3duXShldmVudCk7XG4gICAgICAgIGlmIChoYW5kbGVkKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2spIHsgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTsgfVxuICAgICAgaWYgKHRoaXMuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpID09IG51bGwgJiYgdGhpc1tzeW1ib2xzLmRlZmF1bHRzXS50YWJpbmRleCAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCB0aGlzW3N5bWJvbHMuZGVmYXVsdHNdLnRhYmluZGV4KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgW3N5bWJvbHMuZGVmYXVsdHNdKCkge1xuICAgICAgY29uc3QgZGVmYXVsdHMgPSBzdXBlcltzeW1ib2xzLmRlZmF1bHRzXSB8fCB7fTtcbiAgICAgIC8vIFRoZSBkZWZhdWx0IHRhYiBpbmRleCBpcyAwIChkb2N1bWVudCBvcmRlcikuXG4gICAgICBkZWZhdWx0cy50YWJpbmRleCA9IDA7XG4gICAgICByZXR1cm4gZGVmYXVsdHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIHRoZSBpbmRpY2F0ZWQga2V5Ym9hcmQgZXZlbnQuXG4gICAgICpcbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuIFRoaXMgd2lsbFxuICAgICAqIHR5cGljYWxseSBiZSBoYW5kbGVkIGJ5IG90aGVyIG1peGlucy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7S2V5Ym9hcmRFdmVudH0gZXZlbnQgLSB0aGUga2V5Ym9hcmQgZXZlbnRcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZSBldmVudCB3YXMgaGFuZGxlZFxuICAgICAqL1xuICAgIFtzeW1ib2xzLmtleWRvd25dKGV2ZW50KSB7XG4gICAgICBpZiAoc3VwZXJbc3ltYm9scy5rZXlkb3duXSkgeyByZXR1cm4gc3VwZXJbc3ltYm9scy5rZXlkb3duXShldmVudCk7IH1cbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBLZXlib2FyZDtcbn07XG4iLCIvKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFNoYWRvd0VsZW1lbnRSZWZlcmVuY2VzLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gdG8gY3JlYXRlIHJlZmVyZW5jZXMgdG8gZWxlbWVudHMgaW4gYSBjb21wb25lbnQncyBTaGFkb3cgRE9NIHN1YnRyZWUuXG4gICAqXG4gICAqIFRoaXMgYWRkcyBhIG1lbWJlciBvbiB0aGUgY29tcG9uZW50IGNhbGxlZCBgdGhpcy4kYCB0aGF0IGNhbiBiZSB1c2VkIHRvXG4gICAqIHJlZmVyZW5jZSBzaGFkb3cgZWxlbWVudHMgd2l0aCBJRHMuIEUuZy4sIGlmIGNvbXBvbmVudCdzIHNoYWRvdyBjb250YWlucyBhblxuICAgKiBlbGVtZW50IGA8YnV0dG9uIGlkPVwiZm9vXCI+YCwgdGhlbiB0aGlzIG1peGluIHdpbGwgY3JlYXRlIGEgbWVtYmVyXG4gICAqIGB0aGlzLiQuZm9vYCB0aGF0IHBvaW50cyB0byB0aGF0IGJ1dHRvbi5cbiAgICpcbiAgICogU3VjaCByZWZlcmVuY2VzIHNpbXBsaWZ5IGEgY29tcG9uZW50J3MgYWNjZXNzIHRvIGl0cyBvd24gZWxlbWVudHMuIEluXG4gICAqIGV4Y2hhbmdlLCB0aGlzIG1peGluIHRyYWRlcyBvZmYgYSBvbmUtdGltZSBjb3N0IG9mIHF1ZXJ5aW5nIGFsbCBlbGVtZW50cyBpblxuICAgKiB0aGUgc2hhZG93IHRyZWUgaW5zdGVhZCBvZiBwYXlpbmcgYW4gb25nb2luZyBjb3N0IHRvIHF1ZXJ5IGZvciBhbiBlbGVtZW50XG4gICAqIGVhY2ggdGltZSB0aGUgY29tcG9uZW50IHdhbnRzIHRvIGluc3BlY3Qgb3IgbWFuaXB1bGF0ZSBpdC5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIHRoZSBjb21wb25lbnQgdG8gZGVmaW5lIGEgU2hhZG93IERPTSBzdWJ0cmVlLiBZb3UgY2FuXG4gICAqIGNyZWF0ZSB0aGF0IHRyZWUgeW91cnNlbGYsIG9yIG1ha2UgdXNlIG9mXG4gICAqIFtTaGFkb3dUZW1wbGF0ZU1peGluXShTaGFkb3dUZW1wbGF0ZU1peGluLm1kKS5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBpcyBpbnNwaXJlZCBieSBQb2x5bWVyJ3MgW2F1dG9tYXRpY1xuICAgKiBub2RlIGZpbmRpbmddKGh0dHBzOi8vd3d3LnBvbHltZXItcHJvamVjdC5vcmcvMS4wL2RvY3MvZGV2Z3VpZGUvbG9jYWwtZG9tLmh0bWwjbm9kZS1maW5kaW5nKVxuICAgKiBmZWF0dXJlLlxuICAgKi9cbiAgY2xhc3MgU2hhZG93RWxlbWVudFJlZmVyZW5jZXMgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIGlmICh0aGlzLnNoYWRvd1Jvb3QpIHtcbiAgICAgICAgLy8gTG9vayBmb3IgZWxlbWVudHMgaW4gdGhlIHNoYWRvdyBzdWJ0cmVlIHRoYXQgaGF2ZSBpZCBhdHRyaWJ1dGVzLlxuICAgICAgICAvLyBBbiBhbHRlcm5hdGl2ZWx5IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWl4aW4gd291bGQgYmUgdG8ganVzdCBkZWZpbmVcbiAgICAgICAgLy8gYSB0aGlzLiQgZ2V0dGVyIHRoYXQgbGF6aWx5IGRvZXMgdGhpcyBzZWFyY2ggdGhlIGZpcnN0IHRpbWUgc29tZW9uZVxuICAgICAgICAvLyB0cmllcyB0byBhY2Nlc3MgdGhpcy4kLiBUaGF0IG1pZ2h0IGludHJvZHVjZSBzb21lIGNvbXBsZXhpdHkg4oCTIGlmIHRoZVxuICAgICAgICAvLyB0aGUgdHJlZSBjaGFuZ2VkIGFmdGVyIGl0IHdhcyBmaXJzdCBwb3B1bGF0ZWQsIHRoZSByZXN1bHQgb2ZcbiAgICAgICAgLy8gc2VhcmNoaW5nIGZvciBhIG5vZGUgbWlnaHQgYmUgc29tZXdoYXQgdW5wcmVkaWN0YWJsZS5cbiAgICAgICAgdGhpcy4kID0ge307XG4gICAgICAgIGNvbnN0IG5vZGVzV2l0aElkcyA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yQWxsKCdbaWRdJyk7XG4gICAgICAgIFtdLmZvckVhY2guY2FsbChub2Rlc1dpdGhJZHMsIG5vZGUgPT4ge1xuICAgICAgICAgIGNvbnN0IGlkID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICAgICAgdGhpcy4kW2lkXSA9IG5vZGU7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBjb2xsZWN0aW9uIG9mIHJlZmVyZW5jZXMgdG8gdGhlIGVsZW1lbnRzIHdpdGggSURzIGluIGEgY29tcG9uZW50J3NcbiAgICAgKiBTaGFkb3cgRE9NIHN1YnRyZWUuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqIEBtZW1iZXIgJFxuICAgICAqL1xuICB9XG5cbiAgcmV0dXJuIFNoYWRvd0VsZW1lbnRSZWZlcmVuY2VzO1xufTtcbiIsImltcG9ydCBzeW1ib2xzIGZyb20gJy4uL3NyYy9zeW1ib2xzJztcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFNoYWRvd1RlbXBsYXRlLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gZm9yIHN0YW1waW5nIGEgdGVtcGxhdGUgaW50byBhIFNoYWRvdyBET00gc3VidHJlZSB1cG9uIGNvbXBvbmVudFxuICAgKiBpbnN0YW50aWF0aW9uLlxuICAgKlxuICAgKiBUbyB1c2UgdGhpcyBtaXhpbiwgZGVmaW5lIGEgYHRlbXBsYXRlYCBwcm9wZXJ0eSBhcyBhIHN0cmluZyBvciBIVE1MXG4gICAqIGA8dGVtcGxhdGU+YCBlbGVtZW50OlxuICAgKlxuICAgKiAgICAgY2xhc3MgTXlFbGVtZW50IGV4dGVuZHMgU2hhZG93VGVtcGxhdGVNaXhpbihIVE1MRWxlbWVudCkge1xuICAgKiAgICAgICBnZXQgW3N5bWJvbHMudGVtcGxhdGVdKCkge1xuICAgKiAgICAgICAgIHJldHVybiBgSGVsbG8sIDxlbT53b3JsZDwvZW0+LmA7XG4gICAqICAgICAgIH1cbiAgICogICAgIH1cbiAgICpcbiAgICogV2hlbiB5b3VyIGNvbXBvbmVudCBjbGFzcyBpcyBpbnN0YW50aWF0ZWQsIGEgc2hhZG93IHJvb3Qgd2lsbCBiZSBjcmVhdGVkIG9uXG4gICAqIHRoZSBpbnN0YW5jZSwgYW5kIHRoZSBjb250ZW50cyBvZiB0aGUgdGVtcGxhdGUgd2lsbCBiZSBjbG9uZWQgaW50byB0aGVcbiAgICogc2hhZG93IHJvb3QuIElmIHlvdXIgY29tcG9uZW50IGRvZXMgbm90IGRlZmluZSBhIGB0ZW1wbGF0ZWAgcHJvcGVydHksIHRoaXNcbiAgICogbWl4aW4gaGFzIG5vIGVmZmVjdC5cbiAgICpcbiAgICogRm9yIHRoZSB0aW1lIGJlaW5nLCB0aGlzIGV4dGVuc2lvbiByZXRhaW5zIHN1cHBvcnQgZm9yIFNoYWRvdyBET00gdjAuIFRoYXRcbiAgICogd2lsbCBldmVudHVhbGx5IGJlIGRlcHJlY2F0ZWQgYXMgYnJvd3NlcnMgKGFuZCB0aGUgU2hhZG93IERPTSBwb2x5ZmlsbClcbiAgICogaW1wbGVtZW50IFNoYWRvdyBET00gdjEuXG4gICAqL1xuICBjbGFzcyBTaGFkb3dUZW1wbGF0ZSBleHRlbmRzIGJhc2Uge1xuXG4gICAgLypcbiAgICAgKiBJZiB0aGUgY29tcG9uZW50IGRlZmluZXMgYSB0ZW1wbGF0ZSwgYSBzaGFkb3cgcm9vdCB3aWxsIGJlIGNyZWF0ZWQgb24gdGhlXG4gICAgICogY29tcG9uZW50IGluc3RhbmNlLCBhbmQgdGhlIHRlbXBsYXRlIHN0YW1wZWQgaW50byBpdC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICBsZXQgdGVtcGxhdGUgPSB0aGlzW3N5bWJvbHMudGVtcGxhdGVdO1xuICAgICAgLy8gVE9ETzogU2F2ZSB0aGUgcHJvY2Vzc2VkIHRlbXBsYXRlIHdpdGggdGhlIGNvbXBvbmVudCdzIGNsYXNzIHByb3RvdHlwZVxuICAgICAgLy8gc28gaXQgZG9lc24ndCBuZWVkIHRvIGJlIHByb2Nlc3NlZCB3aXRoIGV2ZXJ5IGluc3RhbnRpYXRpb24uXG4gICAgICBpZiAodGVtcGxhdGUpIHtcblxuICAgICAgICBpZiAodHlwZW9mIHRlbXBsYXRlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIC8vIFVwZ3JhZGUgcGxhaW4gc3RyaW5nIHRvIHJlYWwgdGVtcGxhdGUuXG4gICAgICAgICAgdGVtcGxhdGUgPSBjcmVhdGVUZW1wbGF0ZVdpdGhJbm5lckhUTUwodGVtcGxhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHdpbmRvdy5TaGFkb3dET01Qb2x5ZmlsbCkge1xuICAgICAgICAgIHNoaW1UZW1wbGF0ZVN0eWxlcyh0ZW1wbGF0ZSwgdGhpcy5sb2NhbE5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgcm9vdCA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICAgICAgICBjb25zdCBjbG9uZSA9IGRvY3VtZW50LmltcG9ydE5vZGUodGVtcGxhdGUuY29udGVudCwgdHJ1ZSk7XG4gICAgICAgIHJvb3QuYXBwZW5kQ2hpbGQoY2xvbmUpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIFNoYWRvd1RlbXBsYXRlO1xufTtcblxuXG4vLyBDb252ZXJ0IGEgcGxhaW4gc3RyaW5nIG9mIEhUTUwgaW50byBhIHJlYWwgdGVtcGxhdGUgZWxlbWVudC5cbmZ1bmN0aW9uIGNyZWF0ZVRlbXBsYXRlV2l0aElubmVySFRNTChpbm5lckhUTUwpIHtcbiAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAvLyBSRVZJRVc6IElzIHRoZXJlIGFuIGVhc2llciB3YXkgdG8gZG8gdGhpcz9cbiAgLy8gV2UnZCBsaWtlIHRvIGp1c3Qgc2V0IGlubmVySFRNTCBvbiB0aGUgdGVtcGxhdGUgY29udGVudCwgYnV0IHNpbmNlIGl0J3NcbiAgLy8gYSBEb2N1bWVudEZyYWdtZW50LCB0aGF0IGRvZXNuJ3Qgd29yay5cbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gIHdoaWxlIChkaXYuY2hpbGROb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgdGVtcGxhdGUuY29udGVudC5hcHBlbmRDaGlsZChkaXYuY2hpbGROb2Rlc1swXSk7XG4gIH1cbiAgcmV0dXJuIHRlbXBsYXRlO1xufVxuXG4vLyBJbnZva2UgYmFzaWMgc3R5bGUgc2hpbW1pbmcgd2l0aCBTaGFkb3dDU1MuXG5mdW5jdGlvbiBzaGltVGVtcGxhdGVTdHlsZXModGVtcGxhdGUsIHRhZykge1xuICB3aW5kb3cuV2ViQ29tcG9uZW50cy5TaGFkb3dDU1Muc2hpbVN0eWxpbmcodGVtcGxhdGUuY29udGVudCwgdGFnKTtcbn1cbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi9jcmVhdGVTeW1ib2wnO1xuaW1wb3J0IHN5bWJvbHMgZnJvbSAnLi9zeW1ib2xzJztcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3QgY2FuU2VsZWN0TmV4dFN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnY2FuU2VsZWN0TmV4dCcpO1xuY29uc3QgY2FuU2VsZWN0UHJldmlvdXNTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2NhblNlbGVjdFByZXZpb3VzJyk7XG5jb25zdCBzZWxlY3Rpb25SZXF1aXJlZFN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnc2VsZWN0aW9uUmVxdWlyZWQnKTtcbmNvbnN0IHNlbGVjdGlvbldyYXBzU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdzZWxlY3Rpb25XcmFwcycpO1xuXG4vLyBXZSB3YW50IHRvIGV4cG9zZSBib3RoIHNlbGVjdGVkSW5kZXggYW5kIHNlbGVjdGVkSXRlbSBhcyBpbmRlcGVuZGVudFxuLy8gcHJvcGVydGllcyBidXQga2VlcCB0aGVtIGluIHN5bmMuIFRoaXMgYWxsb3dzIGEgY29tcG9uZW50IHVzZXIgdG8gcmVmZXJlbmNlXG4vLyB0aGUgc2VsZWN0aW9uIGJ5IHdoYXRldmVyIG1lYW5zIGlzIG1vc3QgbmF0dXJhbCBmb3IgdGhlaXIgc2l0dWF0aW9uLlxuLy9cbi8vIFRvIGVmZmljaWVudGx5IGtlZXAgdGhlc2UgcHJvcGVydGllcyBpbiBzeW5jLCB3ZSB0cmFjayBcImV4dGVybmFsXCIgYW5kXG4vLyBcImludGVybmFsXCIgcmVmZXJlbmNlcyBmb3IgZWFjaCBwcm9wZXJ0eTpcbi8vXG4vLyBUaGUgZXh0ZXJuYWwgaW5kZXggb3IgaXRlbSBpcyB0aGUgb25lIHdlIHJlcG9ydCB0byB0aGUgb3V0c2lkZSB3b3JsZCB3aGVuXG4vLyBhc2tlZCBmb3Igc2VsZWN0aW9uLiAgV2hlbiBoYW5kbGluZyBhIGNoYW5nZSB0byBpbmRleCBvciBpdGVtLCB3ZSB1cGRhdGUgdGhlXG4vLyBleHRlcm5hbCByZWZlcmVuY2UgYXMgc29vbiBhcyBwb3NzaWJsZSwgc28gdGhhdCBpZiBhbnlvbmUgaW1tZWRpYXRlbHkgYXNrc1xuLy8gZm9yIHRoZSBjdXJyZW50IHNlbGVjdGlvbiwgdGhleSB3aWxsIHJlY2VpdmUgYSBzdGFibGUgYW5zd2VyLlxuLy9cbi8vIFRoZSBpbnRlcm5hbCBpbmRleCBvciBpdGVtIHRyYWNrcyB3aGljaGV2ZXIgaW5kZXggb3IgaXRlbSBsYXN0IHJlY2VpdmVkIHRoZVxuLy8gZnVsbCBzZXQgb2YgcHJvY2Vzc2luZy4gUHJvY2Vzc2luZyBpbmNsdWRlcyByYWlzaW5nIGEgY2hhbmdlIGV2ZW50IGZvciB0aGVcbi8vIG5ldyB2YWx1ZS4gT25jZSB3ZSd2ZSBiZWd1biB0aGF0IHByb2Nlc3NpbmcsIHdlIHN0b3JlIHRoZSBuZXcgdmFsdWUgYXMgdGhlXG4vLyBpbnRlcm5hbCB2YWx1ZSB0byBpbmRpY2F0ZSB3ZSd2ZSBoYW5kbGVkIGl0LlxuLy9cbmNvbnN0IGV4dGVybmFsU2VsZWN0ZWRJbmRleFN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnZXh0ZXJuYWxTZWxlY3RlZEluZGV4Jyk7XG5jb25zdCBleHRlcm5hbFNlbGVjdGVkSXRlbVN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnZXh0ZXJuYWxTZWxlY3RlZEl0ZW0nKTtcbmNvbnN0IGludGVybmFsU2VsZWN0ZWRJbmRleFN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnaW50ZXJuYWxTZWxlY3RlZEluZGV4Jyk7XG5jb25zdCBpbnRlcm5hbFNlbGVjdGVkSXRlbVN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnaW50ZXJuYWxTZWxlY3RlZEl0ZW0nKTtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFNpbmdsZVNlbGVjdGlvbi4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIG1hbmFnZXMgc2luZ2xlLXNlbGVjdGlvbiBzZW1hbnRpY3MgZm9yIGl0ZW1zIGluIGEgbGlzdC5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIGEgY29tcG9uZW50IHRvIHByb3ZpZGUgYW4gYGl0ZW1zYCBBcnJheSBvciBOb2RlTGlzdCBvZlxuICAgKiBhbGwgZWxlbWVudHMgaW4gdGhlIGxpc3QuIEEgc3RhbmRhcmQgd2F5IHRvIGRvIHRoYXQgd2l0aCBpcyB0aGVcbiAgICogW0NvbnRlbnRJdGVtc01peGluXShDb250ZW50SXRlbXNNaXhpbi5tZCksIHdoaWNoIHRha2VzIGEgY29tcG9uZW50J3NcbiAgICogY29udGVudCAodHlwaWNhbGx5IGl0cyBkaXN0cmlidXRlZCBjaGlsZHJlbikgYXMgdGhlIHNldCBvZiBsaXN0IGl0ZW1zOyBzZWVcbiAgICogdGhhdCBtaXhpbiBmb3IgZGV0YWlscy5cbiAgICpcbiAgICogVGhpcyBtaXhpbiB0cmFja3MgYSBzaW5nbGUgc2VsZWN0ZWQgaXRlbSBpbiB0aGUgbGlzdCwgYW5kIHByb3ZpZGVzIG1lYW5zIHRvXG4gICAqIGdldCBhbmQgc2V0IHRoYXQgc3RhdGUgYnkgaXRlbSBwb3NpdGlvbiAoYHNlbGVjdGVkSW5kZXhgKSBvciBpdGVtIGlkZW50aXR5XG4gICAqIChgc2VsZWN0ZWRJdGVtYCkuIFRoZSBzZWxlY3Rpb24gY2FuIGJlIG1vdmVkIGluIHRoZSBsaXN0IHZpYSB0aGUgbWV0aG9kc1xuICAgKiBgc2VsZWN0Rmlyc3RgLCBgc2VsZWN0TGFzdGAsIGBzZWxlY3ROZXh0YCwgYW5kIGBzZWxlY3RQcmV2aW91c2AuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZG9lcyBub3QgcHJvZHVjZSBhbnkgdXNlci12aXNpYmxlIGVmZmVjdHMgdG8gcmVwcmVzZW50XG4gICAqIHNlbGVjdGlvbi4gT3RoZXIgbWl4aW5zLCBzdWNoIGFzXG4gICAqIFtTZWxlY3Rpb25BcmlhQWN0aXZlTWl4aW5dKFNlbGVjdGlvbkFyaWFBY3RpdmVNaXhpbi5tZCksXG4gICAqIFtTZWxlY3Rpb25IaWdobGlnaHRNaXhpbl0oU2VsZWN0aW9uSGlnaGxpZ2h0TWl4aW4ubWQpIGFuZFxuICAgKiBbU2VsZWN0aW9uSW5WaWV3TWl4aW5dKFNlbGVjdGlvbkluVmlld01peGluLm1kKSwgbW9kaWZ5IHRoZSBzZWxlY3RlZCBpdGVtXG4gICAqIGluIGNvbW1vbiB3YXlzIHRvIGxldCB0aGUgdXNlciBrbm93IGEgZ2l2ZW4gaXRlbSBpcyBzZWxlY3RlZCBvciBub3RcbiAgICogc2VsZWN0ZWQuXG4gICAqL1xuICBjbGFzcyBTaW5nbGVTZWxlY3Rpb24gZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIC8vIFNldCBkZWZhdWx0cy5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5zZWxlY3Rpb25SZXF1aXJlZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25SZXF1aXJlZCA9IHRoaXNbc3ltYm9scy5kZWZhdWx0c10uc2VsZWN0aW9uUmVxdWlyZWQ7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHRoaXMuc2VsZWN0aW9uV3JhcHMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uV3JhcHMgPSB0aGlzW3N5bWJvbHMuZGVmYXVsdHNdLnNlbGVjdGlvbldyYXBzO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRydWUgaWYgdGhlIHNlbGVjdGlvbiBjYW4gYmUgbW92ZWQgdG8gdGhlIG5leHQgaXRlbSwgZmFsc2UgaWYgbm90ICh0aGVcbiAgICAgKiBzZWxlY3RlZCBpdGVtIGlzIHRoZSBsYXN0IGl0ZW0gaW4gdGhlIGxpc3QpLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgZ2V0IGNhblNlbGVjdE5leHQoKSB7XG4gICAgICByZXR1cm4gdGhpc1tjYW5TZWxlY3ROZXh0U3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IGNhblNlbGVjdE5leHQoY2FuU2VsZWN0TmV4dCkge1xuICAgICAgY29uc3QgcHJldmlvdXNDYW5TZWxlY3ROZXh0ID0gdGhpc1tjYW5TZWxlY3ROZXh0U3ltYm9sXTtcbiAgICAgIHRoaXNbY2FuU2VsZWN0TmV4dFN5bWJvbF0gPSBjYW5TZWxlY3ROZXh0O1xuICAgICAgaWYgKCdjYW5TZWxlY3ROZXh0JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5jYW5TZWxlY3ROZXh0ID0gY2FuU2VsZWN0TmV4dDsgfVxuICAgICAgaWYgKGNhblNlbGVjdE5leHQgIT09IHByZXZpb3VzQ2FuU2VsZWN0TmV4dCkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjYW4tc2VsZWN0LW5leHQtY2hhbmdlZCcpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHRoZSBzZWxlY3Rpb24gY2FuIGJlIG1vdmVkIHRvIHRoZSBwcmV2aW91cyBpdGVtLCBmYWxzZSBpZiBub3RcbiAgICAgKiAodGhlIHNlbGVjdGVkIGl0ZW0gaXMgdGhlIGZpcnN0IG9uZSBpbiB0aGUgbGlzdCkuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBnZXQgY2FuU2VsZWN0UHJldmlvdXMoKSB7XG4gICAgICByZXR1cm4gdGhpc1tjYW5TZWxlY3RQcmV2aW91c1N5bWJvbF07XG4gICAgfVxuICAgIHNldCBjYW5TZWxlY3RQcmV2aW91cyhjYW5TZWxlY3RQcmV2aW91cykge1xuICAgICAgY29uc3QgcHJldmlvdXNDYW5TZWxlY3RQcmV2aW91cyA9IHRoaXNbY2FuU2VsZWN0UHJldmlvdXNTeW1ib2xdO1xuICAgICAgdGhpc1tjYW5TZWxlY3RQcmV2aW91c1N5bWJvbF0gPSBjYW5TZWxlY3RQcmV2aW91cztcbiAgICAgIGlmICgnY2FuU2VsZWN0UHJldmlvdXMnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLmNhblNlbGVjdFByZXZpb3VzID0gY2FuU2VsZWN0UHJldmlvdXM7IH1cbiAgICAgIGlmIChjYW5TZWxlY3RQcmV2aW91cyAhPT0gcHJldmlvdXNDYW5TZWxlY3RQcmV2aW91cykge1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjYW4tc2VsZWN0LXByZXZpb3VzLWNoYW5nZWQnKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IFtzeW1ib2xzLmRlZmF1bHRzXSgpIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRzID0gc3VwZXJbc3ltYm9scy5kZWZhdWx0c10gfHwge307XG4gICAgICBkZWZhdWx0cy5zZWxlY3Rpb25SZXF1aXJlZCA9IGZhbHNlO1xuICAgICAgZGVmYXVsdHMuc2VsZWN0aW9uV3JhcHMgPSBmYWxzZTtcbiAgICAgIHJldHVybiBkZWZhdWx0cztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgYSBuZXcgaXRlbSBiZWluZyBhZGRlZCB0byB0aGUgbGlzdC5cbiAgICAgKlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIHNpbXBseSBzZXRzIHRoZSBpdGVtJ3NcbiAgICAgKiBzZWxlY3Rpb24gc3RhdGUgdG8gZmFsc2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpdGVtIC0gdGhlIGl0ZW0gYmVpbmcgYWRkZWRcbiAgICAgKi9cbiAgICBbc3ltYm9scy5pdGVtQWRkZWRdKGl0ZW0pIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLml0ZW1BZGRlZF0pIHsgc3VwZXJbc3ltYm9scy5pdGVtQWRkZWRdKGl0ZW0pOyB9XG4gICAgICB0aGlzW3N5bWJvbHMuaXRlbVNlbGVjdGVkXShpdGVtLCBpdGVtID09PSB0aGlzLnNlbGVjdGVkSXRlbSk7XG4gICAgfVxuXG4gICAgW3N5bWJvbHMuaXRlbXNDaGFuZ2VkXSgpIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLml0ZW1zQ2hhbmdlZF0pIHsgc3VwZXJbc3ltYm9scy5pdGVtc0NoYW5nZWRdKCk7IH1cblxuICAgICAgLy8gSW4gY2FzZSBzZWxlY3RlZCBpdGVtIGNoYW5nZWQgcG9zaXRpb24gb3Igd2FzIHJlbW92ZWQuXG4gICAgICB0cmFja1NlbGVjdGVkSXRlbSh0aGlzKTtcblxuICAgICAgLy8gSW4gY2FzZSB0aGUgY2hhbmdlIGluIGl0ZW1zIGFmZmVjdGVkIHdoaWNoIG5hdmlnYXRpb25zIGFyZSBwb3NzaWJsZS5cbiAgICAgIHVwZGF0ZVBvc3NpYmxlTmF2aWdhdGlvbnModGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXBwbHkgdGhlIGluZGljYXRlIHNlbGVjdGlvbiBzdGF0ZSB0byB0aGUgaXRlbS5cbiAgICAgKlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy4gVXNlci12aXNpYmxlXG4gICAgICogZWZmZWN0cyB3aWxsIHR5cGljYWxseSBiZSBoYW5kbGVkIGJ5IG90aGVyIG1peGlucy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGl0ZW0gLSB0aGUgaXRlbSBiZWluZyBzZWxlY3RlZC9kZXNlbGVjdGVkXG4gICAgICogQHBhcmFtIHtib29sZWFufSBzZWxlY3RlZCAtIHRydWUgaWYgdGhlIGl0ZW0gaXMgc2VsZWN0ZWQsIGZhbHNlIGlmIG5vdFxuICAgICAqL1xuICAgIFtzeW1ib2xzLml0ZW1TZWxlY3RlZF0oaXRlbSwgc2VsZWN0ZWQpIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLml0ZW1TZWxlY3RlZF0pIHsgc3VwZXJbc3ltYm9scy5pdGVtU2VsZWN0ZWRdKGl0ZW0sIHNlbGVjdGVkKTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBpbmRleCBvZiB0aGUgaXRlbSB3aGljaCBpcyBjdXJyZW50bHkgc2VsZWN0ZWQuXG4gICAgICpcbiAgICAgKiBBIGBzZWxlY3RlZEluZGV4YCBvZiAtMSBpbmRpY2F0ZXMgdGhlcmUgaXMgbm8gc2VsZWN0aW9uLiBTZXR0aW5nIHRoaXNcbiAgICAgKiBwcm9wZXJ0eSB0byAtMSB3aWxsIHJlbW92ZSBhbnkgZXhpc3Rpbmcgc2VsZWN0aW9uLlxuICAgICAqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0ZWRJbmRleCgpIHtcbiAgICAgIHJldHVybiB0aGlzW2V4dGVybmFsU2VsZWN0ZWRJbmRleFN5bWJvbF0gIT0gbnVsbCA/XG4gICAgICAgIHRoaXNbZXh0ZXJuYWxTZWxlY3RlZEluZGV4U3ltYm9sXSA6XG4gICAgICAgIC0xO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0ZWRJbmRleChpbmRleCkge1xuICAgICAgLy8gU2VlIG5vdGVzIGF0IHRvcCBhYm91dCBpbnRlcm5hbCB2cy4gZXh0ZXJuYWwgY29waWVzIG9mIHRoaXMgcHJvcGVydHkuXG4gICAgICBjb25zdCBwcmV2aW91c1NlbGVjdGVkSW5kZXggPSB0aGlzW2ludGVybmFsU2VsZWN0ZWRJbmRleFN5bWJvbF07XG4gICAgICBsZXQgaXRlbTtcbiAgICAgIGlmIChpbmRleCAhPT0gdGhpc1tleHRlcm5hbFNlbGVjdGVkSW5kZXhTeW1ib2xdKSB7XG4gICAgICAgIC8vIFN0b3JlIHRoZSBuZXcgaW5kZXggYW5kIHRoZSBjb3JyZXNwb25kaW5nIGl0ZW0uXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5pdGVtcztcbiAgICAgICAgY29uc3QgaGFzSXRlbXMgPSBpdGVtcyAmJiBpdGVtcy5sZW5ndGggPiAwO1xuICAgICAgICBpZiAoIShoYXNJdGVtcyAmJiBpbmRleCA+PSAwICYmIGluZGV4IDwgaXRlbXMubGVuZ3RoKSkge1xuICAgICAgICAgIGluZGV4ID0gLTE7IC8vIE5vIGl0ZW0gYXQgdGhhdCBpbmRleC5cbiAgICAgICAgfVxuICAgICAgICB0aGlzW2V4dGVybmFsU2VsZWN0ZWRJbmRleFN5bWJvbF0gPSBpbmRleDtcbiAgICAgICAgaXRlbSA9IGhhc0l0ZW1zICYmIGluZGV4ID49IDAgPyBpdGVtc1tpbmRleF0gOiBudWxsO1xuICAgICAgICB0aGlzW2V4dGVybmFsU2VsZWN0ZWRJdGVtU3ltYm9sXSA9IGl0ZW07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpdGVtID0gdGhpc1tleHRlcm5hbFNlbGVjdGVkSXRlbVN5bWJvbF07XG4gICAgICB9XG5cbiAgICAgIC8vIE5vdyBsZXQgc3VwZXIgZG8gYW55IHdvcmsuXG4gICAgICBpZiAoJ3NlbGVjdGVkSW5kZXgnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkSW5kZXggPSBpbmRleDsgfVxuXG4gICAgICBpZiAoaW5kZXggIT09IHByZXZpb3VzU2VsZWN0ZWRJbmRleCkge1xuICAgICAgICAvLyBUaGUgc2VsZWN0ZWQgaW5kZXggY2hhbmdlZC5cbiAgICAgICAgdGhpc1tpbnRlcm5hbFNlbGVjdGVkSW5kZXhTeW1ib2xdID0gaW5kZXg7XG5cbiAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3NlbGVjdGVkLWluZGV4LWNoYW5nZWQnLCB7XG4gICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICBzZWxlY3RlZEluZGV4OiBpbmRleCxcbiAgICAgICAgICAgIHZhbHVlOiBpbmRleCAvLyBmb3IgUG9seW1lciBiaW5kaW5nLiBUT0RPOiBWZXJpZnkgc3RpbGwgbmVjZXNzYXJ5XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXNbaW50ZXJuYWxTZWxlY3RlZEl0ZW1TeW1ib2xdICE9PSBpdGVtKSB7XG4gICAgICAgIC8vIFVwZGF0ZSBzZWxlY3RlZEl0ZW0gcHJvcGVydHkgc28gaXQgY2FuIGhhdmUgaXRzIG93biBlZmZlY3RzLlxuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IGl0ZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnRseSBzZWxlY3RlZCBpdGVtLCBvciBudWxsIGlmIHRoZXJlIGlzIG5vIHNlbGVjdGlvbi5cbiAgICAgKlxuICAgICAqIFNldHRpbmcgdGhpcyBwcm9wZXJ0eSB0byBudWxsIGRlc2VsZWN0cyBhbnkgY3VycmVudGx5LXNlbGVjdGVkIGl0ZW0uXG4gICAgICogU2V0dGluZyB0aGlzIHByb3BlcnR5IHRvIGFuIG9iamVjdCB0aGF0IGlzIG5vdCBpbiB0aGUgbGlzdCBoYXMgbm8gZWZmZWN0LlxuICAgICAqXG4gICAgICogVE9ETzogRXZlbiBpZiBzZWxlY3Rpb25SZXF1aXJlZCwgY2FuIHN0aWxsIGV4cGxpY2l0bHkgc2V0IHNlbGVjdGVkSXRlbSB0byBudWxsLlxuICAgICAqIFRPRE86IElmIHNlbGVjdGlvblJlcXVpcmVkLCBsZWF2ZSBzZWxlY3Rpb24gYWxvbmU/XG4gICAgICpcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqL1xuICAgIGdldCBzZWxlY3RlZEl0ZW0oKSB7XG4gICAgICByZXR1cm4gdGhpc1tleHRlcm5hbFNlbGVjdGVkSXRlbVN5bWJvbF0gfHwgbnVsbDtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGVkSXRlbShpdGVtKSB7XG4gICAgICAvLyBTZWUgbm90ZXMgYXQgdG9wIGFib3V0IGludGVybmFsIHZzLiBleHRlcm5hbCBjb3BpZXMgb2YgdGhpcyBwcm9wZXJ0eS5cbiAgICAgIGNvbnN0IHByZXZpb3VzU2VsZWN0ZWRJdGVtID0gdGhpc1tpbnRlcm5hbFNlbGVjdGVkSXRlbVN5bWJvbF07XG4gICAgICBsZXQgaW5kZXg7XG4gICAgICBpZiAoaXRlbSAhPT0gdGhpc1tleHRlcm5hbFNlbGVjdGVkSXRlbVN5bWJvbF0pIHtcbiAgICAgICAgLy8gU3RvcmUgaXRlbSBhbmQgbG9vayB1cCBjb3JyZXNwb25kaW5nIGluZGV4LlxuICAgICAgICBjb25zdCBpdGVtcyA9IHRoaXMuaXRlbXM7XG4gICAgICAgIGNvbnN0IGhhc0l0ZW1zID0gaXRlbXMgJiYgaXRlbXMubGVuZ3RoID4gMDtcbiAgICAgICAgaW5kZXggPSBoYXNJdGVtcyA/IEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoaXRlbXMsIGl0ZW0pIDogLTE7XG4gICAgICAgIHRoaXNbZXh0ZXJuYWxTZWxlY3RlZEluZGV4U3ltYm9sXSA9IGluZGV4O1xuICAgICAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgICAgaXRlbSA9IG51bGw7IC8vIFRoZSBpbmRpY2F0ZWQgaXRlbSBpc24ndCBhY3R1YWxseSBpbiBgaXRlbXNgLlxuICAgICAgICB9XG4gICAgICAgIHRoaXNbZXh0ZXJuYWxTZWxlY3RlZEl0ZW1TeW1ib2xdID0gaXRlbTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZGV4ID0gdGhpc1tleHRlcm5hbFNlbGVjdGVkSW5kZXhTeW1ib2xdO1xuICAgICAgfVxuXG4gICAgICAvLyBOb3cgbGV0IHN1cGVyIGRvIGFueSB3b3JrLlxuICAgICAgaWYgKCdzZWxlY3RlZEl0ZW0nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkSXRlbSA9IGl0ZW07IH1cblxuICAgICAgaWYgKGl0ZW0gIT09IHByZXZpb3VzU2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgIC8vIFRoZSBzZWxlY3RlZCBpdGVtIGNoYW5nZWQuXG4gICAgICAgIHRoaXNbaW50ZXJuYWxTZWxlY3RlZEl0ZW1TeW1ib2xdID0gaXRlbTtcblxuICAgICAgICBpZiAocHJldmlvdXNTZWxlY3RlZEl0ZW0pIHtcbiAgICAgICAgICAvLyBVcGRhdGUgc2VsZWN0aW9uIHN0YXRlIG9mIG9sZCBpdGVtLlxuICAgICAgICAgIHRoaXNbc3ltYm9scy5pdGVtU2VsZWN0ZWRdKHByZXZpb3VzU2VsZWN0ZWRJdGVtLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAvLyBVcGRhdGUgc2VsZWN0aW9uIHN0YXRlIHRvIG5ldyBpdGVtLlxuICAgICAgICAgIHRoaXNbc3ltYm9scy5pdGVtU2VsZWN0ZWRdKGl0ZW0sIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlUG9zc2libGVOYXZpZ2F0aW9ucyh0aGlzKTtcblxuICAgICAgICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnc2VsZWN0ZWQtaXRlbS1jaGFuZ2VkJywge1xuICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgc2VsZWN0ZWRJdGVtOiBpdGVtLFxuICAgICAgICAgICAgdmFsdWU6IGl0ZW0gLy8gZm9yIFBvbHltZXIgYmluZGluZ1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzW2ludGVybmFsU2VsZWN0ZWRJbmRleFN5bWJvbF0gIT09IGluZGV4KSB7XG4gICAgICAgIC8vIFVwZGF0ZSBzZWxlY3RlZEluZGV4IHByb3BlcnR5IHNvIGl0IGNhbiBoYXZlIGl0cyBvd24gZWZmZWN0cy5cbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IHRoZSBmaXJzdCBpdGVtIGluIHRoZSBsaXN0LlxuICAgICAqL1xuICAgIHNlbGVjdEZpcnN0KCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdEZpcnN0KSB7IHN1cGVyLnNlbGVjdEZpcnN0KCk7IH1cbiAgICAgIHJldHVybiBzZWxlY3RJbmRleCh0aGlzLCAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHRoZSBsaXN0IHNob3VsZCBhbHdheXMgaGF2ZSBhIHNlbGVjdGlvbiAoaWYgaXQgaGFzIGl0ZW1zKS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGlvblJlcXVpcmVkKCkge1xuICAgICAgcmV0dXJuIHRoaXNbc2VsZWN0aW9uUmVxdWlyZWRTeW1ib2xdO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0aW9uUmVxdWlyZWQoc2VsZWN0aW9uUmVxdWlyZWQpIHtcbiAgICAgIHRoaXNbc2VsZWN0aW9uUmVxdWlyZWRTeW1ib2xdID0gc2VsZWN0aW9uUmVxdWlyZWQ7XG4gICAgICBpZiAoJ3NlbGVjdGlvblJlcXVpcmVkJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3Rpb25SZXF1aXJlZCA9IHNlbGVjdGlvblJlcXVpcmVkOyB9XG4gICAgICB0cmFja1NlbGVjdGVkSXRlbSh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHNlbGVjdGlvbiBuYXZpZ2F0aW9ucyB3cmFwIGZyb20gbGFzdCB0byBmaXJzdCwgYW5kIHZpY2UgdmVyc2EuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuICAgIGdldCBzZWxlY3Rpb25XcmFwcygpIHtcbiAgICAgIHJldHVybiB0aGlzW3NlbGVjdGlvbldyYXBzU3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGlvbldyYXBzKHZhbHVlKSB7XG4gICAgICB0aGlzW3NlbGVjdGlvbldyYXBzU3ltYm9sXSA9IFN0cmluZyh2YWx1ZSkgPT09ICd0cnVlJztcbiAgICAgIGlmICgnc2VsZWN0aW9uV3JhcHMnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGlvbldyYXBzID0gdmFsdWU7IH1cbiAgICAgIHVwZGF0ZVBvc3NpYmxlTmF2aWdhdGlvbnModGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IHRoZSBsYXN0IGl0ZW0gaW4gdGhlIGxpc3QuXG4gICAgICovXG4gICAgc2VsZWN0TGFzdCgpIHtcbiAgICAgIGlmIChzdXBlci5zZWxlY3RMYXN0KSB7IHN1cGVyLnNlbGVjdExhc3QoKTsgfVxuICAgICAgcmV0dXJuIHNlbGVjdEluZGV4KHRoaXMsIHRoaXMuaXRlbXMubGVuZ3RoIC0gMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IHRoZSBuZXh0IGl0ZW0gaW4gdGhlIGxpc3QuXG4gICAgICovXG4gICAgc2VsZWN0TmV4dCgpIHtcbiAgICAgIGlmIChzdXBlci5zZWxlY3ROZXh0KSB7IHN1cGVyLnNlbGVjdE5leHQoKTsgfVxuICAgICAgcmV0dXJuIHNlbGVjdEluZGV4KHRoaXMsIHRoaXMuc2VsZWN0ZWRJbmRleCArIDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCB0aGUgcHJldmlvdXMgaXRlbSBpbiB0aGUgbGlzdC5cbiAgICAgKlxuICAgICAqIElmIHRoZSBsaXN0IGhhcyBubyBzZWxlY3Rpb24sIHRoZSBsYXN0IGl0ZW0gd2lsbCBiZSBzZWxlY3RlZC5cbiAgICAgKi9cbiAgICBzZWxlY3RQcmV2aW91cygpIHtcbiAgICAgIGlmIChzdXBlci5zZWxlY3RQcmV2aW91cykgeyBzdXBlci5zZWxlY3RQcmV2aW91cygpOyB9XG4gICAgICBjb25zdCBuZXdJbmRleCA9IHRoaXMuc2VsZWN0ZWRJbmRleCA8IDAgP1xuICAgICAgICB0aGlzLml0ZW1zLmxlbmd0aCAtIDEgOiAgICAgLy8gTm8gc2VsZWN0aW9uIHlldDsgc2VsZWN0IGxhc3QgaXRlbS5cbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4IC0gMTtcbiAgICAgIHJldHVybiBzZWxlY3RJbmRleCh0aGlzLCBuZXdJbmRleCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmlyZXMgd2hlbiB0aGUgc2VsZWN0ZWRJdGVtIHByb3BlcnR5IGNoYW5nZXMuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgU2luZ2xlU2VsZWN0aW9uXG4gICAgICogQGV2ZW50IHNlbGVjdGVkLWl0ZW0tY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGRldGFpbC5zZWxlY3RlZEl0ZW0gVGhlIG5ldyBzZWxlY3RlZCBpdGVtLlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGRldGFpbC5wcmV2aW91c0l0ZW0gVGhlIHByZXZpb3VzbHkgc2VsZWN0ZWQgaXRlbS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEZpcmVzIHdoZW4gdGhlIHNlbGVjdGVkSW5kZXggcHJvcGVydHkgY2hhbmdlcy5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBTaW5nbGVTZWxlY3Rpb25cbiAgICAgKiBAZXZlbnQgc2VsZWN0ZWQtaW5kZXgtY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkZXRhaWwuc2VsZWN0ZWRJbmRleCBUaGUgbmV3IHNlbGVjdGVkIGluZGV4LlxuICAgICAqL1xuXG4gIH1cblxuICByZXR1cm4gU2luZ2xlU2VsZWN0aW9uO1xufTtcblxuXG4vLyBFbnN1cmUgdGhlIGdpdmVuIGluZGV4IGlzIHdpdGhpbiBib3VuZHMsIGFuZCBzZWxlY3QgaXQgaWYgaXQncyBub3QgYWxyZWFkeVxuLy8gc2VsZWN0ZWQuXG5mdW5jdGlvbiBzZWxlY3RJbmRleChlbGVtZW50LCBpbmRleCkge1xuICBjb25zdCBjb3VudCA9IGVsZW1lbnQuaXRlbXMubGVuZ3RoO1xuXG4gIGNvbnN0IGJvdW5kZWRJbmRleCA9IChlbGVtZW50LnNlbGVjdGlvbldyYXBzKSA/XG4gICAgLy8gSmF2YVNjcmlwdCBtb2QgZG9lc24ndCBoYW5kbGUgbmVnYXRpdmUgbnVtYmVycyB0aGUgd2F5IHdlIHdhbnQgdG8gd3JhcC5cbiAgICAvLyBTZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTg2MTgyNTAvNzY0NzJcbiAgICAoKGluZGV4ICUgY291bnQpICsgY291bnQpICUgY291bnQgOlxuXG4gICAgLy8gS2VlcCBpbmRleCB3aXRoaW4gYm91bmRzIG9mIGFycmF5LlxuICAgIE1hdGgubWF4KE1hdGgubWluKGluZGV4LCBjb3VudCAtIDEpLCAwKTtcblxuICBjb25zdCBwcmV2aW91c0luZGV4ID0gZWxlbWVudC5zZWxlY3RlZEluZGV4O1xuICBpZiAocHJldmlvdXNJbmRleCAhPT0gYm91bmRlZEluZGV4KSB7XG4gICAgZWxlbWVudC5zZWxlY3RlZEluZGV4ID0gYm91bmRlZEluZGV4O1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG4vLyBGb2xsb3dpbmcgYSBjaGFuZ2UgaW4gdGhlIHNldCBvZiBpdGVtcywgb3IgaW4gdGhlIHZhbHVlIG9mIHRoZVxuLy8gYHNlbGVjdGlvblJlcXVpcmVkYCBwcm9wZXJ0eSwgcmVhY3F1aXJlIHRoZSBzZWxlY3RlZCBpdGVtLiBJZiBpdCdzIG1vdmVkLFxuLy8gdXBkYXRlIGBzZWxlY3RlZEluZGV4YC4gSWYgaXQncyBiZWVuIHJlbW92ZWQsIGFuZCBhIHNlbGVjdGlvbiBpcyByZXF1aXJlZCxcbi8vIHRyeSB0byBzZWxlY3QgYW5vdGhlciBpdGVtLlxuZnVuY3Rpb24gdHJhY2tTZWxlY3RlZEl0ZW0oZWxlbWVudCkge1xuXG4gIGNvbnN0IGl0ZW1zID0gZWxlbWVudC5pdGVtcztcbiAgY29uc3QgaXRlbUNvdW50ID0gaXRlbXMgPyBpdGVtcy5sZW5ndGggOiAwO1xuXG4gIGNvbnN0IHByZXZpb3VzU2VsZWN0ZWRJdGVtID0gZWxlbWVudC5zZWxlY3RlZEl0ZW07XG4gIGlmICghcHJldmlvdXNTZWxlY3RlZEl0ZW0pIHtcbiAgICAvLyBObyBpdGVtIHdhcyBwcmV2aW91c2x5IHNlbGVjdGVkLlxuICAgIGlmIChlbGVtZW50LnNlbGVjdGlvblJlcXVpcmVkKSB7XG4gICAgICAvLyBTZWxlY3QgdGhlIGZpcnN0IGl0ZW0gYnkgZGVmYXVsdC5cbiAgICAgIGVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgfVxuICB9IGVsc2UgaWYgKGl0ZW1Db3VudCA9PT0gMCkge1xuICAgIC8vIFdlJ3ZlIGxvc3QgdGhlIHNlbGVjdGlvbiwgYW5kIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHNlbGVjdC5cbiAgICBlbGVtZW50LnNlbGVjdGVkSXRlbSA9IG51bGw7XG4gIH0gZWxzZSB7XG4gICAgLy8gVHJ5IHRvIGZpbmQgdGhlIHByZXZpb3VzbHktc2VsZWN0ZWQgaXRlbSBpbiB0aGUgY3VycmVudCBzZXQgb2YgaXRlbXMuXG4gICAgY29uc3QgaW5kZXhJbkN1cnJlbnRJdGVtcyA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoaXRlbXMsIHByZXZpb3VzU2VsZWN0ZWRJdGVtKTtcbiAgICBjb25zdCBwcmV2aW91c1NlbGVjdGVkSW5kZXggPSBlbGVtZW50LnNlbGVjdGVkSW5kZXg7XG4gICAgaWYgKGluZGV4SW5DdXJyZW50SXRlbXMgPCAwKSB7XG4gICAgICAvLyBQcmV2aW91c2x5LXNlbGVjdGVkIGl0ZW0gd2FzIHJlbW92ZWQgZnJvbSB0aGUgaXRlbXMuXG4gICAgICAvLyBTZWxlY3QgdGhlIGl0ZW0gYXQgdGhlIHNhbWUgaW5kZXggKGlmIGl0IGV4aXN0cykgb3IgYXMgY2xvc2UgYXMgcG9zc2libGUuXG4gICAgICBjb25zdCBuZXdTZWxlY3RlZEluZGV4ID0gTWF0aC5taW4ocHJldmlvdXNTZWxlY3RlZEluZGV4LCBpdGVtQ291bnQgLSAxKTtcbiAgICAgIC8vIFNlbGVjdCBieSBpdGVtLCBzaW5jZSBpbmRleCBtYXkgYmUgdGhlIHNhbWUsIGFuZCB3ZSB3YW50IHRvIHJhaXNlIHRoZVxuICAgICAgLy8gc2VsZWN0ZWQtaXRlbS1jaGFuZ2VkIGV2ZW50LlxuICAgICAgZWxlbWVudC5zZWxlY3RlZEl0ZW0gPSBpdGVtc1tuZXdTZWxlY3RlZEluZGV4XTtcbiAgICB9IGVsc2UgaWYgKGluZGV4SW5DdXJyZW50SXRlbXMgIT09IHByZXZpb3VzU2VsZWN0ZWRJbmRleCkge1xuICAgICAgLy8gUHJldmlvdXNseS1zZWxlY3RlZCBpdGVtIHN0aWxsIHRoZXJlLCBidXQgY2hhbmdlZCBwb3NpdGlvbi5cbiAgICAgIGVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9IGluZGV4SW5DdXJyZW50SXRlbXM7XG4gICAgfVxuICB9XG59XG5cbi8vIEZvbGxvd2luZyBhIGNoYW5nZSBpbiBzZWxlY3Rpb24sIHJlcG9ydCB3aGV0aGVyIGl0J3Mgbm93IHBvc3NpYmxlIHRvXG4vLyBnbyBuZXh0L3ByZXZpb3VzIGZyb20gdGhlIGdpdmVuIGluZGV4LlxuZnVuY3Rpb24gdXBkYXRlUG9zc2libGVOYXZpZ2F0aW9ucyhlbGVtZW50KSB7XG4gIGxldCBjYW5TZWxlY3ROZXh0O1xuICBsZXQgY2FuU2VsZWN0UHJldmlvdXM7XG4gIGNvbnN0IGl0ZW1zID0gZWxlbWVudC5pdGVtcztcbiAgaWYgKGl0ZW1zID09IG51bGwgfHwgaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgLy8gTm8gaXRlbXMgdG8gc2VsZWN0LlxuICAgIGNhblNlbGVjdE5leHQgPSBmYWxzZTtcbiAgICBjYW5TZWxlY3RQcmV2aW91cyA9IGZhbHNlO1xuICB9IGlmIChlbGVtZW50LnNlbGVjdGlvbldyYXBzKSB7XG4gICAgLy8gU2luY2UgdGhlcmUgYXJlIGl0ZW1zLCBjYW4gYWx3YXlzIGdvIG5leHQvcHJldmlvdXMuXG4gICAgY2FuU2VsZWN0TmV4dCA9IHRydWU7XG4gICAgY2FuU2VsZWN0UHJldmlvdXMgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGluZGV4ID0gZWxlbWVudC5zZWxlY3RlZEluZGV4O1xuICAgIGlmIChpbmRleCA8IDAgJiYgaXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgLy8gU3BlY2lhbCBjYXNlLiBJZiB0aGVyZSBhcmUgaXRlbXMgYnV0IG5vIHNlbGVjdGlvbiwgZGVjbGFyZSB0aGF0IGl0J3NcbiAgICAgIC8vIGFsd2F5cyBwb3NzaWJsZSB0byBnbyBuZXh0L3ByZXZpb3VzIHRvIGNyZWF0ZSBhIHNlbGVjdGlvbi5cbiAgICAgIGNhblNlbGVjdE5leHQgPSB0cnVlO1xuICAgICAgY2FuU2VsZWN0UHJldmlvdXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBOb3JtYWwgY2FzZTogd2UgaGF2ZSBhbiBpbmRleCBpbiBhIGxpc3QgdGhhdCBoYXMgaXRlbXMuXG4gICAgICBjYW5TZWxlY3RQcmV2aW91cyA9IChpbmRleCA+IDApO1xuICAgICAgY2FuU2VsZWN0TmV4dCA9IChpbmRleCA8IGl0ZW1zLmxlbmd0aCAtIDEpO1xuICAgIH1cbiAgfVxuICBpZiAoZWxlbWVudC5jYW5TZWxlY3ROZXh0ICE9PSBjYW5TZWxlY3ROZXh0KSB7XG4gICAgZWxlbWVudC5jYW5TZWxlY3ROZXh0ID0gY2FuU2VsZWN0TmV4dDtcbiAgfVxuICBpZiAoZWxlbWVudC5jYW5TZWxlY3RQcmV2aW91cyAhPT0gY2FuU2VsZWN0UHJldmlvdXMpIHtcbiAgICBlbGVtZW50LmNhblNlbGVjdFByZXZpb3VzID0gY2FuU2VsZWN0UHJldmlvdXM7XG4gIH1cbn1cbiIsIi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIGNyZWF0ZSBhIHN5bWJvbCB0aGF0IGNhbiBiZSB1c2VkIGZvciBhc3NvY2lhdGluZyBwcml2YXRlXG4gKiBkYXRhIHdpdGggYW4gZWxlbWVudC5cbiAqXG4gKiBNaXhpbnMgYW5kIGNvbXBvbmVudCBjbGFzc2VzIG9mdGVuIHdhbnQgdG8gYXNzb2NpYXRlIHByaXZhdGUgZGF0YSB3aXRoIGFuXG4gKiBlbGVtZW50IGluc3RhbmNlLCBidXQgSmF2YVNjcmlwdCBkb2VzIG5vdCBoYXZlIGRpcmVjdCBzdXBwb3J0IGZvciB0cnVlXG4gKiBwcml2YXRlIHByb3BlcnRpZXMuIE9uZSBhcHByb2FjaCBpcyB0byB1c2UgdGhlXG4gKiBbU3ltYm9sXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9TeW1ib2wpXG4gKiBkYXRhIHR5cGUgdG8gc2V0IGFuZCByZXRyaWV2ZSBkYXRhIG9uIGFuIGVsZW1lbnQuXG4gKlxuICogVW5mb3J0dW5hdGVseSwgdGhlIFN5bWJvbCB0eXBlIGlzIG5vdCBhdmFpbGFibGUgaW4gSW50ZXJuZXQgRXhwbG9yZXIgMTEuIFRoZVxuICogYGNyZWF0ZVN5bWJvbGAgaGVscGVyIGZ1bmN0aW9uIGV4aXN0cyBhcyBhIHdvcmthcm91bmQgZm9yIElFIDExLiBSYXRoZXIgdGhhblxuICogcmV0dXJuaW5nIGEgdHJ1ZSBTeW1ib2wsIGl0IHNpbXBseSByZXR1cm5zIGFuIHVuZGVyc2NvcmUtcHJlZml4ZWQgc3RyaW5nLlxuICpcbiAqIFVzYWdlOlxuICpcbiAqICAgICBjb25zdCBmb29TeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2ZvbycpO1xuICpcbiAqICAgICBjbGFzcyBNeUVsZW1lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gKiAgICAgICBnZXQgZm9vKCkge1xuICogICAgICAgICByZXR1cm4gdGhpc1tmb29TeW1ib2xdO1xuICogICAgICAgfVxuICogICAgICAgc2V0IGZvbyh2YWx1ZSkge1xuICogICAgICAgICB0aGlzW2Zvb1N5bWJvbF0gPSB2YWx1ZTtcbiAqICAgICAgIH1cbiAqICAgICB9XG4gKlxuICogSW4gSUUgMTEsIHRoaXMgc2FtcGxlIHdpbGwgXCJoaWRlXCIgZGF0YSBiZWhpbmQgYW4gaW5zdGFuY2UgcHJvcGVydHkgdGhpcy5fZm9vLlxuICogVGhlIHVzZSBvZiB0aGUgdW5kZXJzY29yZSBpcyBtZWFudCB0byByZWR1Y2UgKG5vdCBlbGltaW5hdGUpIHRoZSBwb3RlbnRpYWxcbiAqIGZvciBuYW1lIGNvbmZsaWN0cywgYW5kIGRpc2NvdXJhZ2UgKG5vdCBwcmV2ZW50KSBleHRlcm5hbCBhY2Nlc3MgdG8gdGhpc1xuICogZGF0YS4gSW4gbW9kZXJuIGJyb3dzZXJzLCB0aGUgYWJvdmUgY29kZSB3aWxsIGVsaW1pbmF0ZSB0aGUgcG90ZW50aWFsIG9mXG4gKiBuYW1pbmcgY29uZmxpY3RzLCBhbmQgYmV0dGVyIGhpZGUgdGhlIGRhdGEgYmVoaW5kIGEgcmVhbCBTeW1ib2wuXG4gKlxuICogQGZ1bmN0aW9uIGNyZWF0ZVN5bWJvbFxuICogQHBhcmFtIHtzdHJpbmd9IGRlc2NyaXB0aW9uIC0gQSBzdHJpbmcgdG8gaWRlbnRpZnkgdGhlIHN5bWJvbCB3aGVuIGRlYnVnZ2luZ1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTeW1ib2woZGVzY3JpcHRpb24pIHtcbiAgcmV0dXJuIHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgP1xuICAgIFN5bWJvbChkZXNjcmlwdGlvbikgOlxuICAgIGBfJHtkZXNjcmlwdGlvbn1gO1xufVxuIiwiLypcbiAqIE1pY3JvdGFzayBoZWxwZXIgZm9yIElFIDExLlxuICpcbiAqIEV4ZWN1dGluZyBhIGZ1bmN0aW9uIGFzIGEgbWljcm90YXNrIGlzIHRyaXZpYWwgaW4gYnJvd3NlcnMgdGhhdCBzdXBwb3J0XG4gKiBwcm9taXNlcywgd2hvc2UgdGhlbigpIGNsYXVzZXMgdXNlIG1pY3JvdGFzayB0aW1pbmcuIElFIDExIGRvZXNuJ3Qgc3VwcG9ydFxuICogcHJvbWlzZXMsIGJ1dCBkb2VzIHN1cHBvcnQgTXV0YXRpb25PYnNlcnZlcnMsIHdoaWNoIGFyZSBhbHNvIGV4ZWN1dGVkIGFzXG4gKiBtaWNyb3Rhc2tzLiBTbyB0aGlzIGhlbHBlciB1c2VzIGFuIE11dGF0aW9uT2JzZXJ2ZXIgdG8gYWNoaWV2ZSBtaWNyb3Rhc2tcbiAqIHRpbWluZy5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9qYWtlYXJjaGliYWxkLmNvbS8yMDE1L3Rhc2tzLW1pY3JvdGFza3MtcXVldWVzLWFuZC1zY2hlZHVsZXMvXG4gKlxuICogSW5zcGlyZWQgYnkgUG9seW1lcidzIGFzeW5jKCkgZnVuY3Rpb24uXG4gKi9cblxuXG4vLyBUaGUgcXVldWUgb2YgcGVuZGluZyBjYWxsYmFja3MgdG8gYmUgZXhlY3V0ZWQgYXMgbWljcm90YXNrcy5cbmNvbnN0IGNhbGxiYWNrcyA9IFtdO1xuXG4vLyBDcmVhdGUgYW4gZWxlbWVudCB0aGF0IHdlIHdpbGwgbW9kaWZ5IHRvIGZvcmNlIG9ic2VydmFibGUgbXV0YXRpb25zLlxuY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcblxuLy8gQSBtb25vdG9uaWNhbGx5LWluY3JlYXNpbmcgdmFsdWUuXG5sZXQgY291bnRlciA9IDA7XG5cblxuLyoqXG4gKiBBZGQgYSBjYWxsYmFjayB0byB0aGUgbWljcm90YXNrIHF1ZXVlLlxuICpcbiAqIFRoaXMgdXNlcyBhIE11dGF0aW9uT2JzZXJ2ZXIgc28gdGhhdCBpdCB3b3JrcyBvbiBJRSAxMS5cbiAqXG4gKiBOT1RFOiBJRSAxMSBtYXkgYWN0dWFsbHkgdXNlIHRpbWVvdXQgdGltaW5nIHdpdGggTXV0YXRpb25PYnNlcnZlcnMuIFRoaXNcbiAqIG5lZWRzIG1vcmUgaW52ZXN0aWdhdGlvbi5cbiAqXG4gKiBAZnVuY3Rpb24gbWljcm90YXNrXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaWNyb3Rhc2soY2FsbGJhY2spIHtcbiAgY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICAvLyBGb3JjZSBhIG11dGF0aW9uLlxuICBlbGVtZW50LnRleHRDb250ZW50ID0gKytjb3VudGVyO1xufVxuXG5cbi8vIEV4ZWN1dGUgYW55IHBlbmRpbmcgY2FsbGJhY2tzLlxuZnVuY3Rpb24gZXhlY3V0ZUNhbGxiYWNrcygpIHtcbiAgd2hpbGUgKGNhbGxiYWNrcy5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgY2FsbGJhY2sgPSBjYWxsYmFja3Muc2hpZnQoKTtcbiAgICBjYWxsYmFjaygpO1xuICB9XG59XG5cblxuLy8gQ3JlYXRlIHRoZSBvYnNlcnZlci5cbmNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZXhlY3V0ZUNhbGxiYWNrcyk7XG5vYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQsIHtcbiAgY2hhcmFjdGVyRGF0YTogdHJ1ZVxufSk7XG4iLCIvKipcbiAqIEhlbHBlciBmdW5jdGlvbiBmb3IgcmVuZGVyaW5nIGFuIGFycmF5IG9mIGl0ZW1zIGFzIGVsZW1lbnRzLlxuICpcbiAqIFRoaXMgaXMgbm90IGEgbWl4aW4sIGJ1dCBhIGZ1bmN0aW9uIGNvbXBvbmVudHMgY2FuIHVzZSBpZiB0aGV5IG5lZWQgdG9cbiAqIGdlbmVyYXRlIGEgc2V0IG9mIGVsZW1lbnRzIGZvciB0aGUgaXRlbXMgaW4gYW4gYXJyYXkuXG4gKlxuICogVGhpcyBmdW5jdGlvbiB3aWxsIHJldXNlIGV4aXN0aW5nIGVsZW1lbnRzIGlmIHBvc3NpYmxlLiBFLmcuLCBpZiBpdCBpcyBjYWxsZWRcbiAqIHRvIHJlbmRlciBhbiBhcnJheSBvZiA0IGl0ZW1zLCBhbmQgbGF0ZXIgY2FsbGVkIHRvIHJlbmRlciBhbiBhcnJheSBvZiA1XG4gKiBpdGVtcywgaXQgY2FuIHJldXNlIHRoZSBleGlzdGluZyA0IGl0ZW1zLCBjcmVhdGluZyBqdXN0IG9uZSBuZXcgZWxlbWVudC5cbiAqIE5vdGUsIGhvd2V2ZXIsIHRoYXQgdGhpcyByZS1yZW5kZXJpbmcgaXMgbm90IGF1dG9tYXRpYy4gSWYsIGFmdGVyIGNhbGxpbmdcbiAqIHRoaXMgZnVuY3Rpb24sIHlvdSBtYW5pcHVsYXRlIHRoZSBhcnJheSB5b3UgdXNlZCwgeW91IG11c3Qgc3RpbGwgY2FsbCB0aGlzXG4gKiBmdW5jdGlvbiBhZ2FpbiB0byByZS1yZW5kZXIgdGhlIGFycmF5LlxuICpcbiAqIFRoZSBgcmVuZGVySXRlbWAgcGFyYW1ldGVyIHRha2VzIGEgZnVuY3Rpb24gb2YgdHdvIGFyZ3VtZW50czogYW4gaXRlbSB0b1xuICogdG8gcmVuZGVyLCBhbmQgYW4gZXhpc3RpbmcgZWxlbWVudCAoaWYgb25lIGV4aXN0cykgd2hpY2ggY2FuIGJlIHJlcHVycG9zZWQgdG9cbiAqIHJlbmRlciB0aGF0IGl0ZW0uIElmIHRoZSBsYXR0ZXIgYXJndW1lbnQgaXMgbnVsbCwgdGhlIGByZW5kZXJJdGVtKClgIGZ1bmN0aW9uXG4gKiBzaG91bGQgY3JlYXRlIGEgbmV3IGVsZW1lbnQgYW5kIHJldHVybiBpdC4gVGhlIGZ1bmN0aW9uIHNob3VsZCBkbyB0aGUgc2FtZVxuICogaWYgdGhlIHN1cHBsaWVkIGV4aXN0aW5nIGVsZW1lbnQgaXMgbm90IHN1aXRhYmxlIGZvciByZW5kZXJpbmcgdGhlIGdpdmVuXG4gKiBpdGVtOyB0aGUgcmV0dXJuZWQgZWxlbWVudCB3aWxsIGJlIHVzZWQgdG8gcmVwbGFjZSB0aGUgZXhpc3Rpbmcgb25lLiBJZiB0aGVcbiAqIGV4aXN0aW5nIGVsZW1lbnQgKmlzKiBzdWl0YWJsZSwgdGhlIGZ1bmN0aW9uIGNhbiBzaW1wbHkgdXBkYXRlIGl0IGFuZCByZXR1cm5cbiAqIGl0IGFzIGlzLlxuICpcbiAqIEV4YW1wbGU6IFRoZSBmb2xsb3dpbmcgd2lsbCByZW5kZXIgYW4gYXJyYXkgb2Ygc3RyaW5ncyBpbiBkaXZzIGFzIGNoaWxkcmVuXG4gKiBvZiB0aGUgYGNvbnRhaW5lcmAgZWxlbWVudDpcbiAqXG4gKiAgICAgbGV0IHN0cmluZ3MgPSBbJ2EnLCAnYicsICdjJywgLi4uXTtcbiAqICAgICBsZXQgY29udGFpbmVyID0gdGhpcy5xdWVyeVNlbGVjdG9yKC4uLik7XG4gKiAgICAgcmVuZGVyQXJyYXlBc0VsZW1lbnRzKHN0cmluZ3MsIGNvbnRhaW5lciwgKHN0cmluZywgZWxlbWVudCkgPT4ge1xuICogICAgICAgaWYgKCFlbGVtZW50KSB7XG4gKiAgICAgICAgIC8vIE5vIGVsZW1lbnQgZXhpc3RzIHlldCwgc28gY3JlYXRlIGEgbmV3IG9uZS5cbiAqICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICogICAgICAgfVxuICogICAgICAgLy8gU2V0L3VwZGF0ZSB0aGUgdGV4dCBjb250ZW50IG9mIHRoZSBlbGVtZW50LlxuICogICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IHN0cmluZztcbiAqICAgICAgIHJldHVybiBlbGVtZW50O1xuICogICAgIH0pO1xuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGl0ZW1zIC0gdGhlIGl0ZW1zIHRvIHJlbmRlclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGFpbmVyIC0gdGhlIHBhcmVudCB0aGF0IHdpbGwgaG9sZCB0aGUgZWxlbWVudHNcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHJlbmRlckl0ZW0gLSByZXR1cm5zIGEgbmV3IGVsZW1lbnQgZm9yIGFuIGl0ZW0sIG9yXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwdXJwb3NlcyBhbiBleGlzdGluZyBlbGVtZW50IGZvciBhbiBpdGVtXG4gKi9cbmZ1bmN0aW9uIHJlbmRlckFycmF5QXNFbGVtZW50cyhpdGVtcywgY29udGFpbmVyLCByZW5kZXJJdGVtKSB7XG4gIC8vIENyZWF0ZSBhIG5ldyBzZXQgb2YgZWxlbWVudHMgZm9yIHRoZSBjdXJyZW50IGl0ZW1zLlxuICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IG9sZEVsZW1lbnQgPSBjb250YWluZXIuY2hpbGROb2Rlc1tpbmRleF07XG4gICAgY29uc3QgbmV3RWxlbWVudCA9IHJlbmRlckl0ZW0oaXRlbSwgb2xkRWxlbWVudCk7XG4gICAgaWYgKG5ld0VsZW1lbnQpIHtcbiAgICAgIGlmICghb2xkRWxlbWVudCkge1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmV3RWxlbWVudCk7XG4gICAgICB9IGVsc2UgaWYgKG5ld0VsZW1lbnQgIT09IG9sZEVsZW1lbnQpIHtcbiAgICAgICAgY29udGFpbmVyLnJlcGxhY2VDaGlsZChuZXdFbGVtZW50LCBvbGRFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIC8vIElmIHRoZSBhcnJheSBzaHJhbmssIHJlbW92ZSB0aGUgZXh0cmEgZWxlbWVudHMgd2hpY2ggYXJlIG5vIGxvbmdlciBuZWVkZWQuXG4gIHdoaWxlIChjb250YWluZXIuY2hpbGROb2Rlcy5sZW5ndGggPiBpdGVtcy5sZW5ndGgpIHtcbiAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmNoaWxkTm9kZXNbaXRlbXMubGVuZ3RoXSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyQXJyYXlBc0VsZW1lbnRzO1xuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuL2NyZWF0ZVN5bWJvbCc7XG5pbXBvcnQgdG9nZ2xlQ2xhc3MgZnJvbSAnLi90b2dnbGVDbGFzcyc7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IHNhZmVUb1NldEF0dHJpYnV0ZXNTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3NhZmVUb1NldEF0dHJpYnV0ZXMnKTtcbmNvbnN0IHBlbmRpbmdBdHRyaWJ1dGVzU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdwZW5kaW5nQXR0cmlidXRlcycpO1xuY29uc3QgcGVuZGluZ0NsYXNzZXNTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3BlbmRpbmdDbGFzc2VzJyk7XG5cblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb25zIGZvciB1cGRhdGluZyBhdHRyaWJ1dGVzLCBpbmNsdWRpbmcgdGhlIGBjbGFzc2AgYXR0cmlidXRlLlxuICovXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgLyoqXG4gICAqIFBlcmZvcm0gYW55IHBlbmRpbmcgdXBkYXRlcyB0byBhdHRyaWJ1dGVzIGFuZCBjbGFzc2VzLlxuICAgKlxuICAgKiBUaGlzIHdyaXRlcyBhbnkgYHNldEF0dHJpYnV0ZWAgb3IgYHRvZ2dsZUNsYXNzYCB2YWx1ZXMgdGhhdCB3ZXJlIHBlcmZvcm1lZFxuICAgKiBiZWZvcmUgYW4gZWxlbWVudCB3YXMgYXR0YWNoZWQgdG8gdGhlIGRvY3VtZW50IGZvciB0aGUgZmlyc3QgdGltZS5cbiAgICpcbiAgICogVGhpcyBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZCBieSBtaXhpbnMvY29tcG9uZW50cyBpbiB0aGVpclxuICAgKiBgY29ubmVjdGVkQ2FsbGJhY2tgLiBJZiBtdWxpdHBsZSBtaXhpbnMvY29tcG9uZW50cyBpbnZva2UgdGhpcyBkdXJpbmcgdGhlXG4gICAqIHNhbWUgYGNvbm5lY3RlZENhbGxiYWNrYCwgb25seSB0aGUgZmlyc3QgY2FsbCB3aWxsIGhhdmUgYW55IGVmZmVjdC4gVGhlXG4gICAqIHN1YnNlcXVlbnQgY2FsbHMgd2lsbCBiZSBoYXJtbGVzcy5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIFRoZSBlbGVtZW50IGJlaW5nIGFkZGVkIHRvIHRoZSBkb2N1bWVudC5cbiAgICovXG4gIGNvbm5lY3RlZChlbGVtZW50KSB7XG4gICAgZWxlbWVudFtzYWZlVG9TZXRBdHRyaWJ1dGVzU3ltYm9sXSA9IHRydWU7XG5cbiAgICAvLyBTZXQgYW55IHBlbmRpbmcgYXR0cmlidXRlcy5cbiAgICBpZiAoZWxlbWVudFtwZW5kaW5nQXR0cmlidXRlc1N5bWJvbF0pIHtcbiAgICAgIGZvciAobGV0IGF0dHJpYnV0ZSBpbiBlbGVtZW50W3BlbmRpbmdBdHRyaWJ1dGVzU3ltYm9sXSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGVsZW1lbnRbcGVuZGluZ0F0dHJpYnV0ZXNTeW1ib2xdW2F0dHJpYnV0ZV07XG4gICAgICAgIHNldEF0dHJpYnV0ZVRvRWxlbWVudChlbGVtZW50LCBhdHRyaWJ1dGUsIHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGVsZW1lbnRbcGVuZGluZ0F0dHJpYnV0ZXNTeW1ib2xdID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBTZXQgYW55IHBlbmRpbmcgY2xhc3Nlcy5cbiAgICBpZiAoZWxlbWVudFtwZW5kaW5nQ2xhc3Nlc1N5bWJvbF0pIHtcbiAgICAgIGZvciAobGV0IGNsYXNzTmFtZSBpbiBlbGVtZW50W3BlbmRpbmdDbGFzc2VzU3ltYm9sXSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGVsZW1lbnRbcGVuZGluZ0NsYXNzZXNTeW1ib2xdW2NsYXNzTmFtZV07XG4gICAgICAgIHRvZ2dsZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSwgdmFsdWUpO1xuICAgICAgfVxuICAgICAgZWxlbWVudFtwZW5kaW5nQ2xhc3Nlc1N5bWJvbF0gPSBudWxsO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogU2V0L3Vuc2V0IHRoZSBhdHRyaWJ1dGUgd2l0aCB0aGUgaW5kaWNhdGVkIG5hbWUuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGV4aXN0cyBwcmltYXJpbHkgdG8gaGFuZGxlIHRoZSBjYXNlIHdoZXJlIGFuIGVsZW1lbnQgd2FudHMgdG9cbiAgICogc2V0IGEgZGVmYXVsdCBwcm9wZXJ0eSB2YWx1ZSB0aGF0IHNob3VsZCBiZSByZWZsZWN0ZWQgYXMgYW4gYXR0cmlidXRlLiBBblxuICAgKiBpbXBvcnRhbnQgbGltaXRhdGlvbiBvZiBjdXN0b20gZWxlbWVudCBjb25zdHVyY3RvcnMgaXMgdGhhdCB0aGV5IGNhbm5vdFxuICAgKiBzZXQgYXR0cmlidXRlcy4gQSBjYWxsIHRvIGBzZXRBdHRyaWJ1dGVgIGR1cmluZyB0aGUgY29uc3RydWN0b3Igd2lsbFxuICAgKiBiZSBkZWZlcnJlZCB1bnRpbCB0aGUgZWxlbWVudCBpcyBjb25uZWN0ZWQgdG8gdGhlIGRvY3VtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYXR0cmlidXRlIC0gVGhlIG5hbWUgb2YgdGhlICphdHRyaWJ1dGUqIChub3QgcHJvcGVydHkpIHRvIHNldC5cbiAgICogQHBhcmFtIHtvYmplY3R9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIHNldC4gSWYgbnVsbCwgdGhlIGF0dHJpYnV0ZSB3aWxsIGJlIHJlbW92ZWQuXG4gICAqL1xuICBzZXRBdHRyaWJ1dGUoZWxlbWVudCwgYXR0cmlidXRlLCB2YWx1ZSkge1xuICAgIGlmIChlbGVtZW50W3NhZmVUb1NldEF0dHJpYnV0ZXNTeW1ib2xdKSB7XG4gICAgICAvLyBTYWZlIHRvIHNldCBhdHRyaWJ1dGVzIGltbWVkaWF0ZWx5LlxuICAgICAgc2V0QXR0cmlidXRlVG9FbGVtZW50KGVsZW1lbnQsIGF0dHJpYnV0ZSwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBEZWZlciBzZXR0aW5nIGF0dHJpYnV0ZXMgdW50aWwgdGhlIGZpcnN0IHRpbWUgd2UncmUgY29ubmVjdGVkLlxuICAgICAgaWYgKCFlbGVtZW50W3BlbmRpbmdBdHRyaWJ1dGVzU3ltYm9sXSkge1xuICAgICAgICBlbGVtZW50W3BlbmRpbmdBdHRyaWJ1dGVzU3ltYm9sXSA9IHt9O1xuICAgICAgfVxuICAgICAgZWxlbWVudFtwZW5kaW5nQXR0cmlidXRlc1N5bWJvbF1bYXR0cmlidXRlXSA9IHZhbHVlO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogU2V0L3Vuc2V0IHRoZSBjbGFzcyB3aXRoIHRoZSBpbmRpY2F0ZWQgbmFtZS5cbiAgICpcbiAgICogVGhpcyBtZXRob2QgZXhpc3RzIHByaW1hcmlseSB0byBoYW5kbGUgdGhlIGNhc2Ugd2hlcmUgYW4gZWxlbWVudCB3YW50cyB0b1xuICAgKiBzZXQgYSBkZWZhdWx0IHByb3BlcnR5IHZhbHVlIHRoYXQgc2hvdWxkIGJlIHJlZmxlY3RlZCBhcyBhcyBjbGFzcy4gQW5cbiAgICogaW1wb3J0YW50IGxpbWl0YXRpb24gb2YgY3VzdG9tIGVsZW1lbnQgY29uc3R1cmN0b3JzIGlzIHRoYXQgdGhleSBjYW5ub3RcbiAgICogc2V0IGF0dHJpYnV0ZXMsIGluY2x1ZGluZyB0aGUgYGNsYXNzYCBhdHRyaWJ1dGUuIEEgY2FsbCB0b1xuICAgKiBgdG9nZ2xlQ2xhc3NgIGR1cmluZyB0aGUgY29uc3RydWN0b3Igd2lsbCBiZSBkZWZlcnJlZCB1bnRpbCB0aGUgZWxlbWVudFxuICAgKiBpcyBjb25uZWN0ZWQgdG8gdGhlIGRvY3VtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIC0gVGhlIG5hbWUgb2YgdGhlIGNsYXNzIHRvIHNldC5cbiAgICogQHBhcmFtIHtvYmplY3R9IHZhbHVlIC0gVHJ1ZSB0byBzZXQgdGhlIGNsYXNzLCBmYWxzZSB0byByZW1vdmUgaXQuXG4gICAqL1xuICB0b2dnbGVDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUsIHZhbHVlKSB7XG4gICAgaWYgKGVsZW1lbnRbc2FmZVRvU2V0QXR0cmlidXRlc1N5bWJvbF0pIHtcbiAgICAgIC8vIFNhZmUgdG8gc2V0IGNsYXNzIGltbWVkaWF0ZWx5LlxuICAgICAgdG9nZ2xlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lLCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIERlZmVyIHNldHRpbmcgY2xhc3MgdW50aWwgdGhlIGZpcnN0IHRpbWUgd2UncmUgY29ubmVjdGVkLlxuICAgICAgaWYgKCFlbGVtZW50W3BlbmRpbmdDbGFzc2VzU3ltYm9sXSkge1xuICAgICAgICBlbGVtZW50W3BlbmRpbmdDbGFzc2VzU3ltYm9sXSA9IHt9O1xuICAgICAgfVxuICAgICAgZWxlbWVudFtwZW5kaW5nQ2xhc3Nlc1N5bWJvbF1bY2xhc3NOYW1lXSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG59O1xuXG5cbi8vIFJlZmxlY3QgdGhlIGF0dHJpYnV0ZSB0byB0aGUgZ2l2ZW4gZWxlbWVudC5cbi8vIElmIHRoZSB2YWx1ZSBpcyBudWxsLCByZW1vdmUgdGhlIGF0dHJpYnV0ZS5cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZVRvRWxlbWVudChlbGVtZW50LCBhdHRyaWJ1dGVOYW1lLCB2YWx1ZSkge1xuICBpZiAodmFsdWUgPT09IG51bGwgfHwgdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHRleHQgPSBTdHJpbmcodmFsdWUpO1xuICAgIC8vIEF2b2lkIHJlY3Vyc2l2ZSBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sgY2FsbHMuXG4gICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpICE9PSB0ZXh0KSB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCB2YWx1ZSk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4vY3JlYXRlU3ltYm9sJztcblxuLyoqXG4gKiBBIGNvbGxlY3Rpb24gb2YgU3ltYm9sIG9iamVjdHMgZm9yIHN0YW5kYXJkIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzLlxuICpcbiAqIFRoZXNlIFN5bWJvbCBvYmplY3RzIGFyZSB1c2VkIHRvIGFsbG93IG1peGlucyBhbmQgYSBjb21wb25lbnQgdG8gaW50ZXJuYWxseVxuICogY29tbXVuaWNhdGUsIHdpdGhvdXQgZXhwb3NpbmcgdGhlc2UgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBpbiB0aGUgY29tcG9uZW50J3NcbiAqIHB1YmxpYyBBUEkuXG4gKlxuICogVG8gdXNlIHRoZXNlIFN5bWJvbCBvYmplY3RzIGluIHlvdXIgb3duIGNvbXBvbmVudCwgaW5jbHVkZSB0aGlzIG1vZHVsZSBhbmRcbiAqIHRoZW4gY3JlYXRlIGEgcHJvcGVydHkgb3IgbWV0aG9kIHdob3NlIGtleSBpcyB0aGUgZGVzaXJlZCBTeW1ib2wuXG4gKlxuICogICAgIGltcG9ydCAnU2luZ2xlU2VsZWN0aW9uTWl4aW4nIGZyb20gJ2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NpbmdsZVNlbGVjdGlvbk1peGluJztcbiAqICAgICBpbXBvcnQgJ3N5bWJvbHMnIGZyb20gJ2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL3N5bWJvbHMnO1xuICpcbiAqICAgICBjbGFzcyBNeUVsZW1lbnQgZXh0ZW5kcyBTaW5nbGVTZWxlY3Rpb25NaXhpbihIVE1MRWxlbWVudCkge1xuICogICAgICAgW3N5bWJvbHMuaXRlbVNlbGVjdGVkXShpdGVtLCBzZWxlY3RlZCkge1xuICogICAgICAgICAvLyBUaGlzIHdpbGwgYmUgaW52b2tlZCB3aGVuZXZlciBhbiBpdGVtIGlzIHNlbGVjdGVkL2Rlc2VsZWN0ZWQuXG4gKiAgICAgICB9XG4gKiAgICAgfVxuICpcbiAqIEBtb2R1bGUgc3ltYm9sc1xuICovXG5jb25zdCBzeW1ib2xzID0ge1xuXG4gIC8qKlxuICAgKiBTeW1ib2wgZm9yIHRoZSBgZGVmYXVsdHNgIHByb3BlcnR5LlxuICAgKlxuICAgKiBUaGlzIHByb3BlcnR5IGNhbiBiZSB1c2VkIHRvIHNldCBvciBvdmVycmlkZSBkZWZhdWx0cyB0aGF0IHdpbGwgYmUgYXBwbGllZFxuICAgKiB0byBhIG5ldyBjb21wb25lbnQgaW5zdGFuY2UuIFdoZW4gaW1wbGVtZW50aW5nIHRoaXMgcHJvcGVydHksIHRha2UgY2FyZSB0b1xuICAgKiBmaXJzdCBhY3F1aXJlIGFueSBkZWZhdWx0cyBkZWZpbmVkIGJ5IHRoZSBzdXBlcmNsYXNzLiBUaGUgc3RhbmRhcmQgaWRpb20gaXNcbiAgICogYXMgZm9sbG93czpcbiAgICpcbiAgICogICAgIGdldCBbc3ltYm9scy5kZWZhdWx0c10oKSB7XG4gICAqICAgICAgIGNvbnN0IGRlZmF1bHRzID0gc3VwZXJbc3ltYm9scy5kZWZhdWx0c10gfHwge307XG4gICAqICAgICAgIC8vIFNldCBvciBvdmVycmlkZSBkZWZhdWx0IHZhbHVlcyBoZXJlXG4gICAqICAgICAgIGRlZmF1bHRzLmN1c3RvbVByb3BlcnR5ID0gZmFsc2U7XG4gICAqICAgICAgIHJldHVybiBkZWZhdWx0cztcbiAgICogICAgIH1cbiAgICpcbiAgICogQHZhciB7b2JqZWN0fSBkZWZhdWx0c1xuICAgKi9cbiAgZGVmYXVsdHM6IGNyZWF0ZVN5bWJvbCgnZGVmYXVsdHMnKSxcblxuICAvKipcbiAgICogU3ltYm9sIGZvciB0aGUgYGRyYWdnaW5nYCBwcm9wZXJ0eS5cbiAgICpcbiAgICogQ29tcG9uZW50cyBsaWtlIGNhcm91c2VscyBvZnRlbiBkZWZpbmUgYW5pbWF0ZWQgQ1NTIHRyYW5zaXRpb25zIGZvclxuICAgKiBzbGlkaW5nIGVmZmVjdHMuIFN1Y2ggYSB0cmFuc2l0aW9uIHNob3VsZCB1c3VhbGx5ICpub3QqIGJlIGFwcGxpZWQgd2hpbGVcbiAgICogdGhlIHVzZXIgaXMgZHJhZ2dpbmcsIGJlY2F1c2UgYSBDU1MgYW5pbWF0aW9uIHdpbGwgaW50cm9kdWNlIGEgbGFnIHRoYXRcbiAgICogbWFrZXMgdGhlIHN3aXBlIGZlZWwgc2x1Z2dpc2guIEluc3RlYWQsIGFzIGxvbmcgYXMgdGhlIHVzZXIgaXMgZHJhZ2dpbmdcbiAgICogd2l0aCB0aGVpciBmaW5nZXIgZG93biwgdGhlIHRyYW5zaXRpb24gc2hvdWxkIGJlIHN1cHByZXNzZWQuIFdoZW4gdGhlXG4gICAqIHVzZXIgcmVsZWFzZXMgdGhlaXIgZmluZ2VyLCB0aGUgdHJhbnNpdGlvbiBjYW4gYmUgcmVzdG9yZWQsIGFsbG93aW5nIHRoZVxuICAgKiBhbmltYXRpb24gdG8gc2hvdyB0aGUgY2Fyb3VzZWwgc2xpZGluZyBpbnRvIGl0cyBmaW5hbCBwb3NpdGlvbi5cbiAgICpcbiAgICogQHR5cGUge2Jvb2xlYW59IHRydWUgaWYgYSBkcmFnIGlzIGluIHByb2dyZXNzLCBmYWxzZSBpZiBub3QuXG4gICAqL1xuICBkcmFnZ2luZzogY3JlYXRlU3ltYm9sKCdkcmFnZ2luZycpLFxuXG4gIC8qKlxuICAgKiBTeW1ib2wgZm9yIHRoZSBgZ29Eb3duYCBtZXRob2QuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSBkb3duLlxuICAgKlxuICAgKiBAZnVuY3Rpb24gZ29Eb3duXG4gICAqL1xuICBnb0Rvd246IGNyZWF0ZVN5bWJvbCgnZ29Eb3duJyksXG5cbiAgLyoqXG4gICAqIFN5bWJvbCBmb3IgdGhlIGBnb0VuZGAgbWV0aG9kLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgdG8gdGhlIGVuZCAoZS5nLixcbiAgICogb2YgYSBsaXN0KS5cbiAgICpcbiAgICogQGZ1bmN0aW9uIGdvRW5kXG4gICAqL1xuICBnb0VuZDogY3JlYXRlU3ltYm9sKCdnb0VuZCcpLFxuXG4gIC8qKlxuICAgKiBTeW1ib2wgZm9yIHRoZSBgZ29MZWZ0YCBtZXRob2QuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSBsZWZ0LlxuICAgKlxuICAgKiBAZnVuY3Rpb24gZ29MZWZ0XG4gICAqL1xuICBnb0xlZnQ6IGNyZWF0ZVN5bWJvbCgnZ29MZWZ0JyksXG5cbiAgLyoqXG4gICAqIFN5bWJvbCBmb3IgdGhlIGBnb1JpZ2h0YCBtZXRob2QuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSByaWdodC5cbiAgICpcbiAgICogQGZ1bmN0aW9uIGdvUmlnaHRcbiAgICovXG4gIGdvUmlnaHQ6IGNyZWF0ZVN5bWJvbCgnZ29SaWdodCcpLFxuXG4gIC8qKlxuICAgKiBTeW1ib2wgZm9yIHRoZSBgZ29TdGFydGAgbWV0aG9kLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgdG8gdGhlIHN0YXJ0XG4gICAqIChlLmcuLCBvZiBhIGxpc3QpLlxuICAgKlxuICAgKiBAZnVuY3Rpb24gZ29TdGFydFxuICAgKi9cbiAgZ29TdGFydDogY3JlYXRlU3ltYm9sKCdnb1N0YXJ0JyksXG5cbiAgLyoqXG4gICAqIFN5bWJvbCBmb3IgdGhlIGBnb1VwYCBtZXRob2QuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSB1cC5cbiAgICpcbiAgICogQGZ1bmN0aW9uIGdvVXBcbiAgICovXG4gIGdvVXA6IGNyZWF0ZVN5bWJvbCgnZ29VcCcpLFxuXG4gIC8qKlxuICAgKiBTeW1ib2wgZm9yIHRoZSBgaXRlbUFkZGVkYCBtZXRob2QuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbiBhIG5ldyBpdGVtIGlzIGFkZGVkIHRvIGEgbGlzdC5cbiAgICpcbiAgICogQGZ1bmN0aW9uIGl0ZW1BZGRlZFxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpdGVtIC0gdGhlIGl0ZW0gYmVpbmcgc2VsZWN0ZWQvZGVzZWxlY3RlZFxuICAgKi9cbiAgaXRlbUFkZGVkOiBjcmVhdGVTeW1ib2woJ2l0ZW1BZGRlZCcpLFxuXG5cbiAgLyoqXG4gICAqIFN5bWJvbCBmb3IgdGhlIGBpdGVtc0NoYW5nZWRgIG1ldGhvZC5cbiAgICpcbiAgICogVGhpcyBtZXRob2QgaXMgaW52b2tlZCB3aGVuIHRoZSB1bmRlcmx5aW5nIGNvbnRlbnRzIGNoYW5nZS4gSXQgaXMgYWxzb1xuICAgKiBpbnZva2VkIG9uIGNvbXBvbmVudCBpbml0aWFsaXphdGlvbiDigJMgc2luY2UgdGhlIGl0ZW1zIGhhdmUgXCJjaGFuZ2VkXCIgZnJvbVxuICAgKiBiZWluZyBub3RoaW5nLlxuICAgKi9cbiAgaXRlbXNDaGFuZ2VkOiBjcmVhdGVTeW1ib2woJ2l0ZW1zQ2hhbmdlZCcpLFxuXG4gIC8qKlxuICAgKiBTeW1ib2wgZm9yIHRoZSBgaXRlbVNlbGVjdGVkYCBtZXRob2QuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbiBhbiBpdGVtIGJlY29tZXMgc2VsZWN0ZWQgb3IgZGVzZWxlY3RlZC5cbiAgICpcbiAgICogQGZ1bmN0aW9uIGl0ZW1TZWxlY3RlZFxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpdGVtIC0gdGhlIGl0ZW0gYmVpbmcgc2VsZWN0ZWQvZGVzZWxlY3RlZFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNlbGVjdGVkIC0gdHJ1ZSBpZiB0aGUgaXRlbSBpcyBzZWxlY3RlZCwgZmFsc2UgaWYgbm90XG4gICAqL1xuICBpdGVtU2VsZWN0ZWQ6IGNyZWF0ZVN5bWJvbCgnaXRlbVNlbGVjdGVkJyksXG5cbiAgLyoqXG4gICAqIFN5bWJvbCBmb3IgdGhlIGBrZXlkb3duYCBtZXRob2QuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbiBhbiBlbGVtZW50IHJlY2VpdmVzIGEgYGtleWRvd25gIGV2ZW50LlxuICAgKlxuICAgKiBAZnVuY3Rpb24ga2V5ZG93blxuICAgKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGV2ZW50IC0gdGhlIGV2ZW50IGJlaW5nIHByb2Nlc3NlZFxuICAgKi9cbiAga2V5ZG93bjogY3JlYXRlU3ltYm9sKCdrZXlkb3duJyksXG5cbiAgLyoqXG4gICAqIFN5bWJvbCBmb3IgdGhlIGB0ZW1wbGF0ZWAgcHJvcGVydHkuXG4gICAqXG4gICAqIFRoaXMgcHJvcGVydHkgcmV0dXJucyBhIGNvbXBvbmVudCdzIHRlbXBsYXRlLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfEhUTUxFbGVtZW50fVxuICAgKi9cbiAgdGVtcGxhdGU6IGNyZWF0ZVN5bWJvbCgndGVtcGxhdGUnKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgc3ltYm9scztcbiIsIi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIGZvciBzdGFuZGFyZCBjbGFzc0xpc3QudG9nZ2xlKCkgYmVoYXZpb3Igb24gb2xkIGJyb3dzZXJzLFxuICogbmFtZWx5IElFIDExLlxuICpcbiAqIFRoZSBzdGFuZGFyZFxuICogW2NsYXNzbGlzdF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0VsZW1lbnQvY2xhc3NMaXN0KVxuICogb2JqZWN0IGhhcyBhIGB0b2dnbGUoKWAgZnVuY3Rpb24gdGhhdCBzdXBwb3J0cyBhIHNlY29uZCBCb29sZWFuIHBhcmFtZXRlclxuICogdGhhdCBjYW4gYmUgdXNlZCB0byBzdWNjaW5jdGx5IHR1cm4gYSBjbGFzcyBvbiBvciBvZmYuIFRoaXMgZmVhdHVyZSBpcyBvZnRlblxuICogdXNlZnVsIGluIGRlc2lnbmluZyBjdXN0b20gZWxlbWVudHMsIHdoaWNoIG1heSB3YW50IHRvIGV4dGVybmFsbHkgcmVmbGVjdFxuICogY29tcG9uZW50IHN0YXRlIGluIGEgQ1NTIGNsYXNzIHRoYXQgY2FuIGJlIHVzZWQgZm9yIHN0eWxpbmcgcHVycG9zZXMuXG4gKlxuICogVW5mb3J0dW5hdGVseSwgSUUgMTEgZG9lcyBub3Qgc3VwcG9ydCB0aGUgQm9vbGVhbiBwYXJhbWV0ZXIgdG9cbiAqIGBjbGFzc0xpc3QudG9nZ2xlKClgLiBUaGlzIGhlbHBlciBmdW5jdGlvbiBiZWhhdmVzIGxpa2UgdGhlIHN0YW5kYXJkXG4gKiBgdG9nZ2xlKClgLCBpbmNsdWRpbmcgc3VwcG9ydCBmb3IgdGhlIEJvb2xlYW4gcGFyYW1ldGVyLCBzbyB0aGF0IGl0IGNhbiBiZVxuICogdXNlZCBldmVuIG9uIElFIDExLlxuICpcbiAqIEBmdW5jdGlvbiB0b2dnbGVDbGFzc1xuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIFRoZSBlbGVtZW50IHRvIG1vZGlmeVxuICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSAtIFRoZSBjbGFzcyB0byBhZGQvcmVtb3ZlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtmb3JjZV0gLSBGb3JjZSB0aGUgY2xhc3MgdG8gYmUgYWRkZWQgKGlmIHRydWUpIG9yIHJlbW92ZWRcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpZiBmYWxzZSlcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9nZ2xlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lLCBmb3JjZSkge1xuICBjb25zdCBjbGFzc0xpc3QgPSBlbGVtZW50LmNsYXNzTGlzdDtcbiAgY29uc3QgYWRkQ2xhc3MgPSAodHlwZW9mIGZvcmNlID09PSAndW5kZWZpbmVkJykgP1xuICAgICFjbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSA6XG4gICAgZm9yY2U7XG4gIGlmIChhZGRDbGFzcykge1xuICAgIGNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgfSBlbHNlIHtcbiAgICBjbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gIH1cbiAgcmV0dXJuIGFkZENsYXNzO1xufVxuIiwiaW1wb3J0IEF0dHJpYnV0ZU1hcnNoYWxsaW5nTWl4aW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQXR0cmlidXRlTWFyc2hhbGxpbmdNaXhpbic7XG5pbXBvcnQgQ29tcG9zYWJsZU1peGluIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NvbXBvc2FibGVNaXhpbic7XG5pbXBvcnQgRGlzdHJpYnV0ZWRDaGlsZHJlbk1peGluIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW5NaXhpbic7XG5pbXBvcnQgU2hhZG93RWxlbWVudFJlZmVyZW5jZXNNaXhpbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TaGFkb3dFbGVtZW50UmVmZXJlbmNlc01peGluJztcbmltcG9ydCBTaGFkb3dUZW1wbGF0ZU1peGluIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NoYWRvd1RlbXBsYXRlTWl4aW4nO1xuXG5cbi8qKlxuICogQSBzYW1wbGUgZ2VuZXJhbC1wdXJwb3NlIGJhc2UgY2xhc3MgZm9yIGRlZmluaW5nIGN1c3RvbSBlbGVtZW50cyB0aGF0IG1peGVzXG4gKiBpbiBzb21lIGNvbW1vbiBmZWF0dXJlczogdGVtcGxhdGUgc3RhbXBpbmcgaW50byBhIHNoYWRvdyByb290LCBzaGFkb3cgZWxlbWVudFxuICogcmVmZXJlbmNlcywgbWFyc2hhbGxpbmcgYXR0cmlidXRlcyB0byBwcm9wZXJ0aWVzLCBhbmQgcmV0cmlldmluZyB0aGUgY2hpbGRyZW5cbiAqIGRpc3RyaWJ1dGVkIHRvIGEgY29tcG9uZW50LlxuICpcbiAqIFRoaXMgYmFzZSBjbGFzcyBpcyBub3Qgc3BlY2lhbCBpbiBhbnkgd2F5LCBhbmQgaXMgZGVmaW5lZCBvbmx5IGFzIGFcbiAqIGNvbnZlbmllbnQgc2hvcnRoYW5kIGZvciBhcHBseWluZyB0aGUgbWl4aW5zIGxpc3RlZCBhYm92ZS4gWW91IGNhbiB1c2UgdGhpc1xuICogY2xhc3MgYXMgYSBiYXNlIGNsYXNzIGZvciB5b3VyIG93biBlbGVtZW50cywgb3IgZWFzaWx5IGNyZWF0ZSB5b3VyIG93biBiYXNlXG4gKiBjbGFzcyBieSBhcHBseWluZyB0aGUgc2FtZSBzZXQgb2YgbWl4aW5zLlxuICpcbiAqIFRoZSBFbGVtZW50QmFzZSBiYXNlIGNsYXNzIGRvZXMgbm90IHJlZ2lzdGVyIGl0c2VsZiBhcyBhIGN1c3RvbSBlbGVtZW50IHdpdGhcbiAqIHRoZSBicm93c2VyLCBhbmQgaGVuY2UgY2Fubm90IGJlIGluZGVwZW5kZW50bHkgaW5zdGFudGlhdGVkLlxuICpcbiAqIEBtaXhlcyBBdHRyaWJ1dGVNYXJzaGFsbGluZ01peGluXG4gKiBAbWl4ZXMgQ29tcG9zYWJsZU1peGluXG4gKiBAbWl4ZXMgRGlzdHJpYnV0ZWRDaGlsZHJlbk1peGluXG4gKiBAbWl4ZXMgU2hhZG93RWxlbWVudFJlZmVyZW5jZXNNaXhpblxuICogQG1peGVzIFNoYWRvd1RlbXBsYXRlTWl4aW5cbiAqL1xuY2xhc3MgRWxlbWVudEJhc2UgZXh0ZW5kcyBDb21wb3NhYmxlTWl4aW4oSFRNTEVsZW1lbnQpLmNvbXBvc2UoXG4gIFNoYWRvd1RlbXBsYXRlTWl4aW4sICAgICAgICAgIC8vIGJlZm9yZSBub2RlIGZpbmRpbmcsIHNvIHNoYWRvdyByb290IGlzIHBvcHVsYXRlZFxuICBTaGFkb3dFbGVtZW50UmVmZXJlbmNlc01peGluLCAvLyBiZWZvcmUgbWFyc2hhbGxpbmcsIHNvIHByb3BlcnRpZXMgY2FuIHVzZSByZWZzXG4gIEF0dHJpYnV0ZU1hcnNoYWxsaW5nTWl4aW4sXG4gIERpc3RyaWJ1dGVkQ2hpbGRyZW5NaXhpblxuKSB7fVxuXG5leHBvcnQgZGVmYXVsdCBFbGVtZW50QmFzZTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgdHJhbnNwaWxlZCB0byBjcmVhdGUgYW4gRVM1LWNvbXBhdGlibGUgZGlzdHJpYnV0aW9uIGluIHdoaWNoXG4gKiB0aGUgcGFja2FnZSdzIG1haW4gZmVhdHVyZShzKSBhcmUgYXZhaWxhYmxlIHZpYSB0aGUgd2luZG93LkJhc2ljIGdsb2JhbC5cbiAqIElmIHlvdSdyZSBhbHJlYWR5IHVzaW5nIEVTNiB5b3Vyc2VsZiwgaWdub3JlIHRoaXMgZmlsZSwgYW5kIGluc3RlYWQgaW1wb3J0XG4gKiB0aGUgc291cmNlIGZpbGUocykgeW91IHdhbnQgZnJvbSB0aGUgc3JjIGZvbGRlci5cbiAqL1xuXG5pbXBvcnQgVGFiU3RyaXAgZnJvbSAnLi9zcmMvVGFiU3RyaXAnO1xuaW1wb3J0IFRhYlN0cmlwTWl4aW4gZnJvbSAnLi9zcmMvVGFiU3RyaXBNaXhpbic7XG5cbndpbmRvdy5CYXNpYyA9IHdpbmRvdy5CYXNpYyB8fCB7fTtcbndpbmRvdy5CYXNpYy5UYWJTdHJpcCA9IFRhYlN0cmlwO1xud2luZG93LkJhc2ljLlRhYlN0cmlwTWl4aW4gPSBUYWJTdHJpcE1peGluO1xuIiwiLy8gaW1wb3J0IENsaWNrU2VsZWN0aW9uTWl4aW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ2xpY2tTZWxlY3Rpb25NaXhpbic7XG5pbXBvcnQgQ29udGVudEl0ZW1zTWl4aW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ29udGVudEl0ZW1zTWl4aW4nO1xuaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9jcmVhdGVTeW1ib2wnO1xuaW1wb3J0IERpcmVjdGlvblNlbGVjdGlvbk1peGluIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0RpcmVjdGlvblNlbGVjdGlvbk1peGluJztcbmltcG9ydCBEaXN0cmlidXRlZENoaWxkcmVuQ29udGVudE1peGluIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW5Db250ZW50TWl4aW4nO1xuaW1wb3J0IEVsZW1lbnRCYXNlIGZyb20gJy4uLy4uL2Jhc2ljLWVsZW1lbnQtYmFzZS9zcmMvRWxlbWVudEJhc2UnO1xuaW1wb3J0IEdlbmVyaWNNaXhpbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9HZW5lcmljTWl4aW4nO1xuaW1wb3J0IEtleWJvYXJkRGlyZWN0aW9uTWl4aW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvS2V5Ym9hcmREaXJlY3Rpb25NaXhpbic7XG5pbXBvcnQgS2V5Ym9hcmRNaXhpbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9LZXlib2FyZE1peGluJztcbmltcG9ydCByZW5kZXJBcnJheUFzRWxlbWVudHMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvcmVuZGVyQXJyYXlBc0VsZW1lbnRzJztcbmltcG9ydCBTaW5nbGVTZWxlY3Rpb25NaXhpbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TaW5nbGVTZWxlY3Rpb25NaXhpbic7XG5pbXBvcnQgc3ltYm9scyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9zeW1ib2xzJztcbmltcG9ydCB0b2dnbGVDbGFzcyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy90b2dnbGVDbGFzcyc7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IHBhbmVsc1N5bWJvbCA9IGNyZWF0ZVN5bWJvbCgncGFuZWxzJyk7XG5jb25zdCBzcHJlYWRUYWJzU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdzcHJlYWRUYWJzJyk7XG5jb25zdCB0YWJQb3NpdGlvblN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgndGFiUG9zaXRpb24nKTtcblxuXG4vKipcbiAqIEEgc2V0IG9mIHBhZ2VzIHdpdGggYSB0YWIgc3RyaXAgZ292ZXJuaW5nIHdoaWNoIHBhZ2UgaXMgc2hvd24uXG4gKlxuICogVGhpcyBzdG9jayBjb21iaW5hdGlvbiBhcHBsaWVzIHRoZSBbVGFiU3RyaXBNaXhpbl0oLi4vYmFzaWMtdGFiLXN0cmlwLykgdG8gYVxuICogW2Jhc2ljLW1vZGVzXSguLi9iYXNpYy1tb2Rlcy8pIGVsZW1lbnQuIElmIHlvdSdkIGxpa2UgdG8gY3JlYXRlIHNvbWV0aGluZ1xuICogbW9yZSBjb21wbGV4IHRoYW4gdGhpcyBhcnJhbmdlbWVudCwgeW91IGNhbiB1c2UgZWl0aGVyIG9mIHRob3NlIGVsZW1lbnRzIG9uXG4gKiBpdHMgb3duLlxuICpcbiAqIFNpbmNlIHRoaXMgY29tcG9uZW50IHVzZXMgYFRhYlN0cmlwTWl4aW5gLCBpdCBvYnRhaW5zIHRoZSBuYW1lcyBvZiB0aGVcbiAqIGluZGl2aWR1YWwgdGFicyBmcm9tIGEgY2hpbGQncyBgYXJpYS1sYWJlbGAgcHJvcGVydHkuIEV4YW1wbGU6XG4gKlxuICogICAgIDxiYXNpYy10YWJzPlxuICogICAgICAgPGRpdiBhcmlhLWxhYmVsPVwiT25lXCI+UGFnZSBvbmU8L2Rpdj5cbiAqICAgICAgIDxkaXYgYXJpYS1sYWJlbD1cIlR3b1wiPlBhZ2UgdHdvPC9kaXY+XG4gKiAgICAgICA8ZGl2IGFyaWEtbGFiZWw9XCJUaHJlZVwiPlBhZ2UgdGhyZWU8L2Rpdj5cbiAqICAgICA8L2Jhc2ljLXRhYnM+XG4gKlxuICogQGV4dGVuZHMgRWxlbWVudEJhc2VcbiAqIEBtaXhlcyBDbGlja1NlbGVjdGlvbk1peGluXG4gKiBAbWl4ZXMgQ29udGVudEl0ZW1zTWl4aW5cbiAqIEBtaXhlcyBEaXJlY3Rpb25TZWxlY3Rpb25NaXhpblxuICogQG1peGVzIERpc3RyaWJ1dGVkQ2hpbGRyZW5Db250ZW50TWl4aW5cbiAqIEBtaXhlcyBHZW5lcmljTWl4aW5cbiAqIEBtaXhlcyBLZXlib2FyZE1peGluXG4gKiBAbWl4ZXMgS2V5Ym9hcmREaXJlY3Rpb25NaXhpblxuICogQG1peGVzIFNpbmdsZVNlbGVjdGlvbk1peGluXG4gKi9cbmNsYXNzIFRhYlN0cmlwIGV4dGVuZHMgRWxlbWVudEJhc2UuY29tcG9zZShcbiAgLy8gQ2xpY2tTZWxlY3Rpb25NaXhpbixcbiAgRGlyZWN0aW9uU2VsZWN0aW9uTWl4aW4sXG4gIEdlbmVyaWNNaXhpbixcbiAgS2V5Ym9hcmRNaXhpbixcbiAgS2V5Ym9hcmREaXJlY3Rpb25NaXhpbixcbiAgQ29udGVudEl0ZW1zTWl4aW4sXG4gIERpc3RyaWJ1dGVkQ2hpbGRyZW5Db250ZW50TWl4aW4sXG4gIFNpbmdsZVNlbGVjdGlvbk1peGluXG4pIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgLy8gSGFuZGxlIGNsaWNrcy9FbnRlciBvbiB0YWIgYnV0dG9ucy5cbiAgICAvLyBUT0RPOiBSYXRpb25hbGl6ZSB3aXRoIENsaWNrU2VsZWN0aW9uP1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICBjb25zdCB0YWIgPSBldmVudC5wYXRoWzBdO1xuICAgICAgY29uc3QgaW5kZXggPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKHRoaXMuaXRlbXMsIHRhYik7XG4gICAgICBpZiAoaW5kZXggPj0gMCAmJiB0aGlzLnNlbGVjdGVkSW5kZXggIT09IGluZGV4KSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xuICAgICAgICAvLyBOb3RlOiBXZSBkb24ndCBjYWxsIHByZXZlbnREZWZhdWx0IGhlcmUuIFRoZSBkZWZhdWx0IGJlaGF2aW9yIGZvclxuICAgICAgICAvLyBtb3VzZWRvd24gaW5jbHVkZXMgc2V0dGluZyBrZXlib2FyZCBmb2N1cyBpZiB0aGUgZWxlbWVudCBkb2Vzbid0XG4gICAgICAgIC8vIGFscmVhZHkgaGF2ZSB0aGUgZm9jdXMsIGFuZCB3ZSB3YW50IHRvIHByZXNlcnZlIHRoYXQgYmVoYXZpb3IuXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gU2V0IGRlZmF1bHRzLlxuICAgIGlmICh0eXBlb2YgdGhpcy50YWJQb3NpdGlvbiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMudGFiUG9zaXRpb24gPSB0aGlzW3N5bWJvbHMuZGVmYXVsdHNdLnRhYlBvc2l0aW9uO1xuICAgIH1cbiAgfVxuXG4gIGdldCBbc3ltYm9scy5kZWZhdWx0c10oKSB7XG4gICAgY29uc3QgZGVmYXVsdHMgPSBzdXBlcltzeW1ib2xzLmRlZmF1bHRzXSB8fCB7fTtcbiAgICBkZWZhdWx0cy50YWJpbmRleCA9IG51bGw7XG4gICAgZGVmYXVsdHMudGFiUG9zaXRpb24gPSAndG9wJztcbiAgICByZXR1cm4gZGVmYXVsdHM7XG4gIH1cblxuICBnZXQgaXRlbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuJC50YWJzLmNoaWxkcmVuO1xuICB9XG5cbiAgW3N5bWJvbHMuaXRlbVNlbGVjdGVkXShpdGVtLCBzZWxlY3RlZCkge1xuICAgIGlmIChzdXBlcltzeW1ib2xzLml0ZW1TZWxlY3RlZF0pIHsgc3VwZXJbc3ltYm9scy5pdGVtU2VsZWN0ZWRdKGl0ZW0sIHNlbGVjdGVkKTsgfVxuICAgIGFwcGx5U2VsZWN0aW9uVG9UYWIoaXRlbSwgc2VsZWN0ZWQpO1xuICB9XG5cbiAgW3N5bWJvbHMua2V5ZG93bl0oZXZlbnQpIHtcbiAgICBjb25zdCBoYW5kbGVkID0gc3VwZXJbc3ltYm9scy5rZXlkb3duXSAmJiBzdXBlcltzeW1ib2xzLmtleWRvd25dKGV2ZW50KTtcbiAgICBpZiAoaGFuZGxlZCAmJiB0aGlzLnNlbGVjdGVkSXRlbSkge1xuICAgICAgLy8gSWYgdGhlIGV2ZW50IHJlc3VsdGVkIGluIGEgY2hhbmdlIG9mIHNlbGVjdGlvbiwgbW92ZSB0aGUgZm9jdXMgdG8gdGhlXG4gICAgICAvLyBuZXdseS1zZWxlY3RlZCB0YWIuXG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbS5mb2N1cygpO1xuICAgIH1cbiAgICByZXR1cm4gaGFuZGxlZDtcbiAgfVxuXG4gIGdldCBwYW5lbHMoKSB7XG4gICAgcmV0dXJuIHRoaXNbcGFuZWxzU3ltYm9sXTtcbiAgfVxuICBzZXQgcGFuZWxzKHBhbmVscykge1xuICAgIHRoaXNbcGFuZWxzU3ltYm9sXSA9IHBhbmVscztcblxuICAgIC8vIENyZWF0ZSBvbmUgdGFiIGZvciBlYWNoIHBhbmVsLlxuICAgIGNvbnN0IHNlbGVjdGVkSW5kZXggPSB0aGlzLnNlbGVjdGVkSW5kZXg7XG4gICAgY29uc3Qgc2VsZWN0ZWRQYW5lbCA9IHBhbmVsc1tzZWxlY3RlZEluZGV4XTtcbiAgICByZW5kZXJBcnJheUFzRWxlbWVudHMocGFuZWxzLCB0aGlzLiQudGFicywgKHBhbmVsLCB0YWIpID0+IHtcbiAgICAgIGlmICghdGFiKSB7XG4gICAgICAgIHRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICB0YWIuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG4gICAgICAgIHRhYi5jbGFzc0xpc3QuYWRkKCdzdHlsZS1zY29wZScpO1xuICAgICAgICB0YWIuY2xhc3NMaXN0LmFkZCgnYmFzaWMtdGFiLXN0cmlwJyk7XG4gICAgICAgIHRhYi5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAndGFiJyk7XG4gICAgICAgIHRhYi5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgMCk7XG4gICAgICB9XG4gICAgICB0YWIuaWQgPSBwYW5lbC5pZCArICdfdGFiJztcbiAgICAgIHRhYi50ZXh0Q29udGVudCA9IHBhbmVsLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpO1xuXG4gICAgICAvLyBQb2ludCB0YWIgYW5kIHBhbmVsIGF0IGVhY2ggb3RoZXIuXG4gICAgICB0YWIuc2V0QXR0cmlidXRlKCdhcmlhLWNvbnRyb2xzJywgcGFuZWwuaWQpO1xuICAgICAgcGFuZWwuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsbGVkYnknLCB0YWIuaWQpO1xuXG4gICAgICBhcHBseVNlbGVjdGlvblRvVGFiKHRhYiwgcGFuZWwgPT09IHNlbGVjdGVkUGFuZWwpO1xuXG4gICAgICByZXR1cm4gdGFiO1xuICAgIH0pO1xuXG4gICAgdGhpc1tzeW1ib2xzLml0ZW1zQ2hhbmdlZF0oKTtcbiAgfVxuXG4gIGdldCBzcHJlYWRUYWJzKCkge1xuICAgIHJldHVybiB0aGlzW3NwcmVhZFRhYnNTeW1ib2xdO1xuICB9XG4gIHNldCBzcHJlYWRUYWJzKHZhbHVlKSB7XG4gICAgdGhpc1tzcHJlYWRUYWJzU3ltYm9sXSA9IHZhbHVlO1xuICAgIHRvZ2dsZUNsYXNzKHRoaXMsICdzcHJlYWQnLCB2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHBvc2l0aW9uIG9mIHRoZSB0YWIgc3RyaXAgcmVsYXRpdmUgdG8gdGhlIGVsZW1lbnQncyBjaGlsZHJlbi4gVmFsaWRcbiAgICogdmFsdWVzIGFyZSBcInRvcFwiLCBcImxlZnRcIiwgXCJyaWdodFwiLCBhbmQgXCJib3R0b21cIi5cbiAgICpcbiAgICogQGRlZmF1bHQgXCJ0b3BcIlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IHRhYlBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzW3RhYlBvc2l0aW9uU3ltYm9sXTtcbiAgfVxuICBzZXQgdGFiUG9zaXRpb24ocG9zaXRpb24pIHtcbiAgICB0aGlzW3RhYlBvc2l0aW9uU3ltYm9sXSA9IHBvc2l0aW9uO1xuICAgIHRoaXMucmVmbGVjdEF0dHJpYnV0ZSgndGFiLXBvc2l0aW9uJywgcG9zaXRpb24pO1xuICAgIHRoaXMubmF2aWdhdGlvbkF4aXMgPSAocG9zaXRpb24gPT09ICd0b3AnIHx8IHBvc2l0aW9uID09PSAnYm90dG9tJykgP1xuICAgICAgJ2hvcml6b250YWwnIDpcbiAgICAgICd2ZXJ0aWNhbCc7XG4gIH1cblxuICBnZXQgW3N5bWJvbHMudGVtcGxhdGVdKCkge1xuICAgIHJldHVybiBgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qXG4gICAgICAgICAqIEF2b2lkIGhhdmluZyB0YWIgY29udGFpbmVyIHN0cmV0Y2ggYWNyb3NzLiBVc2VyIHdvbid0IGJlIGFibGUgdG8gc2VlXG4gICAgICAgICAqIGl0LCBidXQgc2luY2UgaXQgaGFuZGxlcyB0aGUga2V5Ym9hcmQsIGluIE1vYmlsZSBTYWZhcmkgYSB0YXAgb24gdGhlXG4gICAgICAgICAqIGNvbnRhaW5lciBiYWNrZ3JvdW5kIHdpbGwgY2F1c2UgdGhlIHJlZ2lvbiB0byBmbGFzaC4gQWxpZ25pbmcgdGhlXG4gICAgICAgICAqIHJlZ2lvbiBjb2xsYXBzZXMgaXQgZG93biB0byBob2xkIGl0cyBjb250ZW50cy5cbiAgICAgICAgICovXG4gICAgICAgICN0YWJzIHtcbiAgICAgICAgICAvKiBGb3IgSUUgYnVnIChjbGlja2luZyB0YWIgcHJvZHVjZXMgZ2FwIGJldHdlZW4gdGFiIGFuZCBwYWdlKS4gKi9cbiAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAtd2Via2l0LWZsZXg6IDE7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAvKlxuICAgICAgICAgICAqIFRyeSB0byBvYnRhaW4gZmFzdC10YXAgYmVoYXZpb3Igb24gYWxsIHRhYnMuXG4gICAgICAgICAgICogU2VlIGh0dHBzOi8vd2Via2l0Lm9yZy9ibG9nLzU2MTAvbW9yZS1yZXNwb25zaXZlLXRhcHBpbmctb24taW9zLy5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbiAgICAgICAgfVxuICAgICAgICA6aG9zdCg6bm90KC5zcHJlYWQpKSAjdGFicyB7XG4gICAgICAgICAgLXdlYmtpdC1hbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgICAgIH1cblxuICAgICAgICAudGFiIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbZ2VuZXJpYz1cIlwiXSkgLnRhYiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMC41ZW0gMC43NWVtO1xuICAgICAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjI1cztcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtnZW5lcmljPVwiXCJdKSAudGFiLnNlbGVjdGVkIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICNjY2M7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtnZW5lcmljPVwiXCJdKSAudGFiOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogTGVmdC9yaWdodCBwb3NpdGlvbnMgKi9cbiAgICAgICAgOmhvc3QoW3RhYi1wb3NpdGlvbj1cImxlZnRcIl0pICN0YWJzLFxuICAgICAgICA6aG9zdChbdGFiLXBvc2l0aW9uPVwicmlnaHRcIl0pICN0YWJzIHtcbiAgICAgICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIFNwcmVhZCB2YXJpYW50ICovXG4gICAgICAgIDpob3N0KC5zcHJlYWQpICN0YWJzIHtcbiAgICAgICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICAgICB9XG4gICAgICAgIDpob3N0KC5zcHJlYWQpIC50YWIge1xuICAgICAgICAgIC13ZWJraXQtZmxleDogMTtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogR2VuZXJpYyBzdHlsZSwgdG9wL2JvdHRvbSBwb3NpdGlvbnMgKi9cbiAgICAgICAgOmhvc3QoW2dlbmVyaWM9XCJcIl1bdGFiLXBvc2l0aW9uPVwidG9wXCJdKSAudGFiOm5vdCg6bGFzdC1jaGlsZCksXG4gICAgICAgIDpob3N0KFtnZW5lcmljPVwiXCJdW3RhYi1wb3NpdGlvbj1cImJvdHRvbVwiXSkgLnRhYjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuMmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogR2VuZXJpYyBzdHlsZSwgdG9wIHBvc2l0aW9uICovXG4gICAgICAgIDpob3N0KFtnZW5lcmljPVwiXCJdW3RhYi1wb3NpdGlvbj1cInRvcFwiXSkgLnRhYiB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNWVtIDAuMjVlbSAwIDA7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTFweDtcbiAgICAgICAgfVxuICAgICAgICA6aG9zdChbZ2VuZXJpYz1cIlwiXVt0YWItcG9zaXRpb249XCJ0b3BcIl0pIC50YWIuc2VsZWN0ZWQge1xuICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLyogR2VuZXJpYyBzdHlsZSwgYm90dG9tIHBvc2l0aW9uICovXG4gICAgICAgIDpob3N0KFtnZW5lcmljPVwiXCJdW3RhYi1wb3NpdGlvbj1cImJvdHRvbVwiXSkgLnRhYiB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDAuMjVlbSAwLjI1ZW07XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTFweDtcbiAgICAgICAgfVxuICAgICAgICA6aG9zdChbZ2VuZXJpYz1cIlwiXVt0YWItcG9zaXRpb249XCJib3R0b21cIl0pIC50YWIuc2VsZWN0ZWQge1xuICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLyogR2VuZXJpYyBzdHlsZSwgbGVmdC9yaWdodCBwb3NpdGlvbnMgKi9cbiAgICAgICAgOmhvc3QoW2dlbmVyaWM9XCJcIl1bdGFiLXBvc2l0aW9uPVwibGVmdFwiXSkgLnRhYjpub3QoOmxhc3QtY2hpbGQpLFxuICAgICAgICA6aG9zdChbZ2VuZXJpYz1cIlwiXVt0YWItcG9zaXRpb249XCJyaWdodFwiXSkgLnRhYjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIEdlbmVyaWMgc3R5bGUsIGxlZnQgcG9zaXRpb24gKi9cbiAgICAgICAgOmhvc3QoW2dlbmVyaWM9XCJcIl1bdGFiLXBvc2l0aW9uPVwibGVmdFwiXSkgLnRhYiB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNWVtIDAgMCAwLjI1ZW07XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMXB4O1xuICAgICAgICB9XG4gICAgICAgIDpob3N0KFtnZW5lcmljPVwiXCJdW3RhYi1wb3NpdGlvbj1cImxlZnRcIl0pIC50YWIuc2VsZWN0ZWQge1xuICAgICAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBHZW5lcmljIHN0eWxlLCByaWdodCBwb3NpdGlvbiAqL1xuICAgICAgICA6aG9zdChbZ2VuZXJpYz1cIlwiXVt0YWItcG9zaXRpb249XCJyaWdodFwiXSkgLnRhYiB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwLjI1ZW0gMC4yNWVtIDA7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xcHg7XG4gICAgICAgIH1cbiAgICAgICAgOmhvc3QoW2dlbmVyaWM9XCJcIl1bdGFiLXBvc2l0aW9uPVwicmlnaHRcIl0pIC50YWIuc2VsZWN0ZWQge1xuICAgICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxkaXYgaWQ9XCJ0YWJzXCIgcm9sZT1cInRhYmxpc3RcIj48L2Rpdj5cbiAgICBgO1xuICB9XG59XG5cblxuZnVuY3Rpb24gYXBwbHlTZWxlY3Rpb25Ub1RhYih0YWIsIHNlbGVjdGVkKSB7XG4gIHRhYi5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCBzZWxlY3RlZCk7XG59XG5cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdiYXNpYy10YWItc3RyaXAnLCBUYWJTdHJpcCk7XG5leHBvcnQgZGVmYXVsdCBUYWJTdHJpcDtcbiIsImltcG9ydCBUYWJTdHJpcCBmcm9tICcuL1RhYlN0cmlwJzsgLy8ganNoaW50IGlnbm9yZTpsaW5lXG5pbXBvcnQgc3ltYm9scyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9zeW1ib2xzJztcblxuXG4vLyBVc2VkIHRvIGFzc2lnbiB1bmlxdWUgSURzIHRvIHRhYnMgZm9yIEFSSUEgcHVycG9zZXMuXG5sZXQgaWRDb3VudCA9IDA7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBUYWJTdHJpcC4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIEEgdGVtcGxhdGUgbWl4aW4gd2hpY2ggYWRkcyBzdHJpcCBvZiB0YWJzIGZvciBzZWxlY3Rpbmcgb25lIG9mIHRoZVxuICAgKiBjb21wb25lbnQncyBjaGlsZHJlbi5cbiAgICpcbiAgICogVGhlIGNvbXBvbmVudCBjcmVhdGVzIGEgdGFiIHRvIHJlcHJlc2VudCBlYWNoIG9mIGl0cyBsaWdodCBET00gY2hpbGRyZW4uXG4gICAqIFRoZSB0YWIgbmFtZSBpcyBvYnRhaW5lZCBieSBleGFtaW5pbmcgdGhlIGNoaWxkcmVuIGZvciBhbiBgYXJpYS1sYWJlbGBcbiAgICogcHJvcGVydHkuXG4gICAqXG4gICAqIFVzZSB0YWJzIHdoZW4geW91IHdhbnQgdG8gcHJvdmlkZSBhIGxhcmdlIHNldCBvZiBvcHRpb25zIG9yIGVsZW1lbnRzIHRoYW5cbiAgICogY2FuIGNvbWZvcnRhYmx5IGZpdCBpbmxpbmUsIHRoZSBvcHRpb25zIGNhbiBiZSBjb2hlcmVudGx5IGdyb3VwZWQgaW50byBwYWdlcyxcbiAgICogYW5kIHlvdSB3YW50IHRvIGF2b2lkIG1ha2luZyB0aGUgdXNlciBuYXZpZ2F0ZSB0byBhIHNlcGFyYXRlIHBhZ2UuIFRhYnMgd29ya1xuICAgKiBiZXN0IGlmIHlvdSBvbmx5IGhhdmUgYSBzbWFsbCBoYW5kZnVsIG9mIHBhZ2VzLCBzYXkgMuKAkzcuXG4gICAqXG4gICAqIFRoZSBiYXNpYy10YWItc3RyaXAgY29tcG9uZW50IGRvZXMgbm90IGRlZmluZSBob3cgYSBzZWxlY3RlZCBjaGlsZCBpc1xuICAgKiByZXByZXNlbnRlZC4gSWYgeW91J3JlIGxvb2tpbmcgZm9yIHRoZSBzdGFuZGFyZCBiZWhhdmlvciBvZiBqdXN0IHNob3dpbmcgb25seVxuICAgKiB0aGUgc2VsZWN0ZWQgY2hpbGQsIHlvdSBjYW4gdXNlIHRoaXMgY29tcG9uZW50IGluIGNvbWJpbmF0aW9uIHdpdGggdGhlXG4gICAqIHNlcGFyYXRlIFtiYXNpYy1tb2Rlc10oLi4vYmFzaWMtbW9kZXMvKSBjb21wb25lbnQuIEEgdHlwaWNhbCBhcnJhbmdlbWVudDpcbiAgICpcbiAgICogICAgIDxiYXNpYy10YWItc3RyaXA+XG4gICAqICAgICAgIDxiYXNpYy1tb2RlcyBhcmlhLWxhYmVsPVwiUGFuZWxzXCI+XG4gICAqICAgICAgICAgPGRpdiBhcmlhLWxhYmVsPVwiT25lXCI+UGFnZSBvbmU8L2Rpdj5cbiAgICogICAgICAgICA8ZGl2IGFyaWEtbGFiZWw9XCJUd29cIj5QYWdlIHR3bzwvZGl2PlxuICAgKiAgICAgICAgIDxkaXYgYXJpYS1sYWJlbD1cIlRocmVlXCI+UGFnZSB0aHJlZTwvZGl2PlxuICAgKiAgICAgICA8L2Jhc2ljLW1vZGVzPlxuICAgKiAgICAgPC9iYXNpYy10YWItc3RyaXA+XG4gICAqXG4gICAqIFRoZSBhYm92ZSBjb21iaW5hdGlvbiBpcyBzbyBjb21tb24gaXQgaXMgcHJvdmlkZWQgYXMgYSBzaW5nbGUgY29tcG9uZW50LFxuICAgKiBbYmFzaWMtdGFic10oLi4vYmFzaWMtdGFicy8pLlxuICAgKlxuICAgKiBUaGUgdXNlciBjYW4gc2VsZWN0IGEgdGFiIHdpdGggdGhlIG1vdXNlIG9yIHRvdWNoLCBhcyB3ZWxsIGFzIGJ5IHRocm91Z2ggdGhlXG4gICAqIGtleWJvYXJkLiBFYWNoIHRhYiBhcHBlYXJzIGFzIGEgc2VwYXJhdGUgYnV0dG9uIGluIHRoZSB0YWIgb3JkZXIuXG4gICAqIEFkZGl0aW9uYWxseSwgaWYgdGhlIGZvY3VzIGlzIGN1cnJlbnRseSBvbiBhIHRhYiwgdGhlIHVzZXIgY2FuIHF1aWNrbHlcbiAgICogbmF2aWdhdGUgYmV0d2VlbiB0YWJzIHdpdGggdGhlIGxlZnQvcmlnaHQgYXJyb3cga2V5cyAob3IsIGlmIHRoZSB0YWJzIGFyZVxuICAgKiBpbiB2ZXJ0aWNhbCBwb3NpdGlvbiwgdGhlIHVwL2Rvd24gYXJyb3cga2V5cykuXG4gICAqXG4gICAqIEJ5IGRlZmF1bHQsIHRoZSB0YWJzIGFyZSBzaG93biBncm91cGVkIHRvIHRoZSBsZWZ0LCB3aGVyZSBlYWNoIHRhYiBpcyBvbmx5XG4gICAqIGFzIGJpZyBhcyBuZWNlc3NhcnkuIFlvdSBjYW4gYXBwbHkgdGhlIGBzcHJlYWRgIENTUyBjbGFzcyB0byBhXG4gICAqIGJhc2ljLXRhYi1zdHJpcCBlbGVtZW50IGZvciBhIHZhcmlhbnQgYXBwZWFyYW5jZSBpbiB3aGljaCB0aGUgYXZhaWxhYmxlIHdpZHRoXG4gICAqIG9mIHRoZSBlbGVtZW50IGlzIGRpdmlkZWQgdXAgZXF1YWxseSBhbW9uZyB0YWJzLlxuICAgKlxuICAgKiBUaGUgR2VuZXJpY01peGluIGRlZmF1bHQgc3R5bGluZyBvZiB0aGUgdGFiIHN0cmlwIHdpbGwgcHJlc2VudCB0aGUgY2xhc3NpY1xuICAgKiBza2V1bW9ycGhpYyBsb29rIG9mIHJvdW5kZWQgdGFicyBhdHRhY2hlZCB0byBhIHN1cmZhY2UuIFlvdSBjYW4gcmVtb3ZlIHRoaXNcbiAgICogc3R5bGluZyBieSBzZXR0aW5nIHRoZSBgR2VuZXJpY01peGluYCBwcm9wZXJ0eS9hdHRyaWJ1dGUgdG8gZmFsc2UuXG4gICAqL1xuICBjbGFzcyBUYWJTdHJpcCBleHRlbmRzIGJhc2Uge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgdGhpcy4kLnRhYlN0cmlwLmFkZEV2ZW50TGlzdGVuZXIoJ3NlbGVjdGVkLWl0ZW0tY2hhbmdlZCcsIGV2ZW50ID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRJbmRleCA9IGV2ZW50LnRhcmdldC5zZWxlY3RlZEluZGV4O1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4ICE9PSBzZWxlY3RlZEluZGV4KSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gc2VsZWN0ZWRJbmRleDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0IFtzeW1ib2xzLmRlZmF1bHRzXSgpIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRzID0gc3VwZXJbc3ltYm9scy5kZWZhdWx0c10gfHwge307XG4gICAgICBkZWZhdWx0cy50YWJQb3NpdGlvbiA9ICd0b3AnO1xuICAgICAgcmV0dXJuIGRlZmF1bHRzO1xuICAgIH1cblxuICAgIGdldCBnZW5lcmljKCkge1xuICAgICAgcmV0dXJuIHN1cGVyLmdlbmVyaWM7XG4gICAgfVxuICAgIHNldCBnZW5lcmljKHZhbHVlKSB7XG4gICAgICBpZiAoJ2dlbmVyaWMnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLmdlbmVyaWMgPSB2YWx1ZTsgfVxuICAgICAgdGhpcy4kLnRhYlN0cmlwLmdlbmVyaWMgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBbc3ltYm9scy5pdGVtc0NoYW5nZWRdKCkge1xuICAgICAgaWYgKHN1cGVyW3N5bWJvbHMuaXRlbXNDaGFuZ2VkXSkgeyBzdXBlcltzeW1ib2xzLml0ZW1zQ2hhbmdlZF0oKTsgfVxuXG4gICAgICBjb25zdCBiYXNlSWQgPSB0aGlzLmlkID9cbiAgICAgICAgXCJfXCIgKyB0aGlzLmlkICsgXCJQYW5lbFwiIDpcbiAgICAgICAgXCJfcGFuZWxcIjtcblxuICAgICAgLy8gQ29uZmlybSB0aGF0IGl0ZW1zIGhhdmUgYXQgbGVhc3QgYSBkZWZhdWx0IHJvbGUgYW5kIElEIGZvciBBUklBIHB1cnBvc2VzLlxuICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAvLyBpZiAoIWl0ZW0uZ2V0QXR0cmlidXRlKCdyb2xlJykpIHtcbiAgICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgncm9sZScsICd0YWJwYW5lbCcpO1xuICAgICAgICAvLyB9XG4gICAgICAgIGlmICghaXRlbS5pZCkge1xuICAgICAgICAgIGl0ZW0uaWQgPSBiYXNlSWQgKyBpZENvdW50Kys7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBQb2ludCB0aGUgdGFiIHN0cmlwIGF0IHRoZSBwYW5lbHMuXG4gICAgICB0aGlzLiQudGFiU3RyaXAucGFuZWxzID0gdGhpcy5pdGVtcztcbiAgICAgIHRoaXMuJC50YWJTdHJpcC5zZWxlY3RlZEluZGV4ID0gdGhpcy5zZWxlY3RlZEluZGV4O1xuICAgIH1cblxuICAgIGdldCBzZWxlY3RlZEluZGV4KCkge1xuICAgICAgcmV0dXJuIHN1cGVyLnNlbGVjdGVkSW5kZXg7XG4gICAgfVxuICAgIHNldCBzZWxlY3RlZEluZGV4KHZhbHVlKSB7XG4gICAgICBpZiAoJ3NlbGVjdGVkSW5kZXgnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkSW5kZXggPSB2YWx1ZTsgfVxuICAgICAgaWYgKHRoaXMuJC50YWJTdHJpcC5zZWxlY3RlZEluZGV4ICE9PSB2YWx1ZSkge1xuICAgICAgICB0aGlzLiQudGFiU3RyaXAuc2VsZWN0ZWRJbmRleCA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGdldCBzcHJlYWRUYWJzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuJC50YWJTdHJpcC5zcHJlYWRUYWJzO1xuICAgIH1cbiAgICBzZXQgc3ByZWFkVGFicyh2YWx1ZSkge1xuICAgICAgdGhpcy4kLnRhYlN0cmlwLnNwcmVhZFRhYnMgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgdGFiUG9zaXRpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy4kLnRhYlN0cmlwLnRhYlBvc2l0aW9uO1xuICAgIH1cbiAgICBzZXQgdGFiUG9zaXRpb24ocG9zaXRpb24pIHtcbiAgICAgIHRoaXMuJC50YWJTdHJpcC50YWJQb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgdGhpcy5yZWZsZWN0QXR0cmlidXRlKCd0YWItcG9zaXRpb24nLCBwb3NpdGlvbik7XG5cbiAgICAgIC8vIFBoeXNpY2FsbHkgcmVvcmRlciB0aGUgdGFicyBhbmQgcGFnZXMgdG8gcmVmbGVjdCB0aGUgZGVzaXJlZCBhcnJhbmdlbWVudC5cbiAgICAgIC8vIFdlIGNvdWxkIGNoYW5nZSB0aGUgdmlzdWFsIGFwcGVhcmFuY2UgYnkgcmV2ZXJzaW5nIHRoZSBvcmRlciBvZiB0aGUgZmxleFxuICAgICAgLy8gYm94LCBidXQgdGhlbiB0aGUgdmlzdWFsIG9yZGVyIHdvdWxkbid0IHJlZmxlY3QgdGhlIGRvY3VtZW50IG9yZGVyLCB3aGljaFxuICAgICAgLy8gZGV0ZXJtaW5lcyBmb2N1cyBvcmRlci4gVGhhdCB3b3VsZCBzdXJwcmlzZSBhIHVzZXIgdHJ5aW5nIHRvIHRhYiB0aHJvdWdoXG4gICAgICAvLyB0aGUgY29udHJvbHMuXG4gICAgICBjb25zdCBmaXJzdEVsZW1lbnQgPSAocG9zaXRpb24gPT09ICd0b3AnIHx8IHBvc2l0aW9uID09PSAnbGVmdCcpID9cbiAgICAgICAgdGhpcy4kLnRhYlN0cmlwIDpcbiAgICAgICAgdGhpcy4kLnBhZ2VzO1xuICAgICAgY29uc3QgbGFzdEVsZW1lbnQgPSAocG9zaXRpb24gPT09ICd0b3AnIHx8IHBvc2l0aW9uID09PSAnbGVmdCcpID9cbiAgICAgICAgdGhpcy4kLnBhZ2VzIDpcbiAgICAgICAgdGhpcy4kLnRhYlN0cmlwO1xuICAgICAgaWYgKGZpcnN0RWxlbWVudC5uZXh0U2libGluZyAhPT0gbGFzdEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5zaGFkb3dSb290Lmluc2VydEJlZm9yZShmaXJzdEVsZW1lbnQsIGxhc3RFbGVtZW50KTtcbiAgICAgIH1cblxuICAgIH1cblxuICAgIGdldCBbc3ltYm9scy50ZW1wbGF0ZV0oKSB7XG4gICAgICBjb25zdCBiYXNlVGVtcGxhdGUgPSBzdXBlcltzeW1ib2xzLnRlbXBsYXRlXSB8fCAnJztcbiAgICAgIHJldHVybiBgXG4gICAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgICNwYWdlcyB7XG4gICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgLXdlYmtpdC1mbGV4OiAxO1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cblxuICAgICAgICAjcGFnZXMgOjpzbG90dGVkKCopIHtcbiAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAtd2Via2l0LWZsZXg6IDE7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIExlZnQvcmlnaHQgcG9zaXRpb25zICovXG4gICAgICAgIDpob3N0KFt0YWItcG9zaXRpb249XCJsZWZ0XCJdKSxcbiAgICAgICAgOmhvc3QoW3RhYi1wb3NpdGlvbj1cInJpZ2h0XCJdKSB7XG4gICAgICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBHZW5lcmljIHN0eWxlICovXG4gICAgICAgIDpob3N0KFtnZW5lcmljPVwiXCJdKSAjcGFnZXMge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuICAgICAgICA8L3N0eWxlPlxuXG4gICAgICAgIDxiYXNpYy10YWItc3RyaXAgaWQ9XCJ0YWJTdHJpcFwiIHJvbGU9XCJ0YWJsaXN0XCI+PC9iYXNpYy10YWItc3RyaXA+XG4gICAgICAgIDxkaXYgaWQ9XCJwYWdlc1wiPlxuICAgICAgICAgICR7YmFzZVRlbXBsYXRlfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIGA7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gVGFiU3RyaXA7XG59O1xuIl19
