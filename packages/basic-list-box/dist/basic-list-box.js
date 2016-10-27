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

},{"./safeAttributes":21}],2:[function(require,module,exports){
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
   * provide that property yourself, or use the
   * [ContentAsItems](ContentAsItems.md) mixin. This mixin also expects the
   * component to define a `selectedIndex` property. You can provide that
   * yourself, or use the [SingleSelection](SingleSelection.md) mixin.
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
        selectTarget(_this, event.target);
        // Note: We don't call preventDefault here. The default behavior for
        // mousedown includes setting keyboard focus if the element doesn't
        // already have the focus, and we want to preserve that behavior.
        event.stopPropagation();
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

// TODO: Handle the case where a list item has subelements. Walk up the DOM
// hierarchy until we find an item in the list, or come back to this element,
// in which case the element that was tapped isn't an item (and should be
// ignored).


function selectTarget(element, target) {
  var index = element.items && element.items.indexOf(target);
  if (index >= 0) {
    element.selectedIndex = index;
  }
}

},{}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
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

/* Exported function extends a base class with ContentAsItems. */

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
   * raw set of elements. You can provide that yourself, or use the
   * [DistributedChildrenAsContent](DistributedChildrenAsContent.md) mixin.
   *
   * The most commonly referenced property defined by this mixin is the `items`
   * property. To avoid having to do work each time that property is requested,
   * this mixin supports an optimized mode. If you invoke the `contentChanged`
   * method when the set of items changes, the mixin concludes that you'll take
   * care of notifying it of future changes, and turns on the optimization. With
   * that on, the mixin saves a reference to the computed set of items, and will
   * return that immediately on subsequent calls to the `items` property. If you
   * use this mixin in conjunction with the
   * [DistributedChildrenAsContent](DistributedChildrenAsContent.md) mixin, the
   * `contentChanged` method will be invoked for you when the element's children
   * change, turning on the optimization automatically.
   */
  var ContentAsItems = function (_base) {
    _inherits(ContentAsItems, _base);

    function ContentAsItems() {
      _classCallCheck(this, ContentAsItems);

      return _possibleConstructorReturn(this, (ContentAsItems.__proto__ || Object.getPrototypeOf(ContentAsItems)).apply(this, arguments));
    }

    _createClass(ContentAsItems, [{
      key: _symbols2.default.applySelection,


      /**
       * Apply the selection state to a single item.
       *
       * Invoke this method to signal that the selected state of the indicated item
       * has changed. By default, this applies a `selected` CSS class if the item
       * is selected, and removed it if not selected.
       *
       * @param {HTMLElement} item - The item whose selection state has changed.
       * @param {boolean} selected - True if the item is selected, false if not.
       */
      value: function value(item, selected) {
        if (_get(ContentAsItems.prototype.__proto__ || Object.getPrototypeOf(ContentAsItems.prototype), _symbols2.default.applySelection, this)) {
          _get(ContentAsItems.prototype.__proto__ || Object.getPrototypeOf(ContentAsItems.prototype), _symbols2.default.applySelection, this).call(this, item, selected);
        }
        (0, _toggleClass2.default)(item, 'selected', selected);
      }
    }, {
      key: 'contentChanged',
      value: function contentChanged() {
        if (_get(ContentAsItems.prototype.__proto__ || Object.getPrototypeOf(ContentAsItems.prototype), 'contentChanged', this)) {
          _get(ContentAsItems.prototype.__proto__ || Object.getPrototypeOf(ContentAsItems.prototype), 'contentChanged', this).call(this);
        }

        // Since we got the contentChanged call, we'll assume we'll be notified if
        // the set of items changes later. We turn on memoization of the items
        // property by setting our internal property to null (instead of
        // undefined).
        this[itemsSymbol] = null;

        this.itemsChanged();
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
        if (_get(ContentAsItems.prototype.__proto__ || Object.getPrototypeOf(ContentAsItems.prototype), _symbols2.default.itemAdded, this)) {
          _get(ContentAsItems.prototype.__proto__ || Object.getPrototypeOf(ContentAsItems.prototype), _symbols2.default.itemAdded, this).call(this, item);
        }
      }

      /**
       * The current set of items in the list. See the top-level documentation for
       * mixin for a description of how items differ from plain content.
       *
       * @type {HTMLElement[]}
       */

    }, {
      key: 'itemsChanged',


      /**
       * This method is invoked when the underlying contents change. It is also
       * invoked on component initialization – since the items have "changed" from
       * being nothing.
       */
      value: function itemsChanged() {
        var _this2 = this;

        if (_get(ContentAsItems.prototype.__proto__ || Object.getPrototypeOf(ContentAsItems.prototype), 'itemsChanged', this)) {
          _get(ContentAsItems.prototype.__proto__ || Object.getPrototypeOf(ContentAsItems.prototype), 'itemsChanged', this).call(this);
        }

        // Perform per-item initialization.
        this.items.forEach(function (item) {
          if (!item[itemInitializedSymbol]) {
            _this2[_symbols2.default.itemAdded](item);
            item[itemInitializedSymbol] = true;
          }
        });

        this.dispatchEvent(new CustomEvent('items-changed'));
      }

      /*
       * @event items-changed
       *
       * This event is raised when the set of items changes.
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

    return ContentAsItems;
  }(base);

  return ContentAsItems;
};

// Return the given elements, filtering out auxiliary elements that aren't
// typically visible. Items which are not elements are returned as is.


function filterAuxiliaryElements(items) {
  var auxiliaryTags = ['link', 'script', 'style', 'template'];
  return [].filter.call(items, function (item) {
    return !item.localName || auxiliaryTags.indexOf(item.localName) < 0;
  });
}

/**
 * Fires when the items in the list change.
 *
 * @memberof ContentAsItems
 * @event items-changed
 */

},{"./createSymbol":19,"./symbols":22,"./toggleClass":23}],5:[function(require,module,exports){
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
   * This mixin can be used in conjunction with the
   * [KeyboardDirection](KeyboardDirection.md) mixin (which maps keyboard events
   * to directions) and a mixin that handles selection like
   * [SingleSelection](SingleSelection.md).
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

},{"./symbols":22}],6:[function(require,module,exports){
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

var _microtask = require('./microtask');

var _microtask2 = _interopRequireDefault(_microtask);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Exported function extends a base class with DistributedChildrenAsContent. */
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
   * let base = DistributedChildrenAsContent(DistributedChildren(HTMLElement));
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

      var _this = _possibleConstructorReturn(this, (DistributedChildrenAsContent.__proto__ || Object.getPrototypeOf(DistributedChildrenAsContent)).call(this));

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


    _createClass(DistributedChildrenAsContent, [{
      key: 'contentChanged',
      value: function contentChanged() {
        if (_get(DistributedChildrenAsContent.prototype.__proto__ || Object.getPrototypeOf(DistributedChildrenAsContent.prototype), 'contentChanged', this)) {
          _get(DistributedChildrenAsContent.prototype.__proto__ || Object.getPrototypeOf(DistributedChildrenAsContent.prototype), 'contentChanged', this).call(this);
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
        return this.distributedChildren;
      },
      set: function set(value) {
        if ('content' in base.prototype) {
          _set(DistributedChildrenAsContent.prototype.__proto__ || Object.getPrototypeOf(DistributedChildrenAsContent.prototype), 'content', value, this);
        }
        // TODO: Set the children to the given value (which should be an array of
        // elements)?
      }

      /**
       * This event is raised when the component's contents (including distributed
       * children) have changed.
       *
       * @memberof DistributedChildrenAsContent
       * @event content-changed
       */

    }]);

    return DistributedChildrenAsContent;
  }(base);

  return DistributedChildrenAsContent;
};

},{"./microtask":20}],8:[function(require,module,exports){
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
      var _this = _possibleConstructorReturn(this, (Generic.__proto__ || Object.getPrototypeOf(Generic)).call(this));

      if (typeof _this.generic === 'undefined') {
        _this.generic = _this[_symbols2.default.defaults].generic;
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
        // shows up as generic="false".
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

},{"./createSymbol":19,"./safeAttributes":21,"./symbols":22}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
var keydownListenerSymbol = (0, _createSymbol2.default)('keydownListener');

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
   *
   * Finally, this mixin is designed to work with the optional
   * [Collective](Collective.md) class via a mixin like
   * [TargetInCollective](TargetInCollective.md). This allows a set of related
   * component instances to cooperatively handle the keyboard. See the
   * Collective class for details.
   */
  var Keyboard = function (_base) {
    _inherits(Keyboard, _base);

    function Keyboard() {
      _classCallCheck(this, Keyboard);

      // Assume this component is going to handle the keyboard on its own.
      // REVIEW: Move to connectedCallback?
      var _this = _possibleConstructorReturn(this, (Keyboard.__proto__ || Object.getPrototypeOf(Keyboard)).call(this));

      startListeningToKeydown(_this);
      return _this;
    }

    /*
     * If we're now the outermost element of the collective, set up to receive
     * keyboard events. If we're no longer the outermost element, stop
     * listening.
     */


    _createClass(Keyboard, [{
      key: 'collectiveChanged',
      value: function collectiveChanged() {
        if (_get(Keyboard.prototype.__proto__ || Object.getPrototypeOf(Keyboard.prototype), 'collectiveChanged', this)) {
          _get(Keyboard.prototype.__proto__ || Object.getPrototypeOf(Keyboard.prototype), 'collectiveChanged', this).call(this);
        }

        if (this.collective.outermostElement !== this) {
          // We're no longer the outermost element; stop listening.
          if (isListeningToKeydown(this)) {
            stopListeningToKeydown(this);
          }
          return;
        }

        if (!this.getAttribute('aria-label')) {
          // Since we're going to handle the keyboard, see if we can adopt an ARIA
          // label from an inner element of the collective.
          var label = getCollectiveAriaLabel(this.collective);
          if (label) {
            _safeAttributes2.default.setAttribute(this, 'aria-label', label);
          }
        }

        if (!isListeningToKeydown(this)) {
          startListeningToKeydown(this);
        }
      }
    }, {
      key: 'connectedCallback',
      value: function connectedCallback() {
        if (_get(Keyboard.prototype.__proto__ || Object.getPrototypeOf(Keyboard.prototype), 'connectedCallback', this)) {
          _get(Keyboard.prototype.__proto__ || Object.getPrototypeOf(Keyboard.prototype), 'connectedCallback', this).call(this);
        }
        _safeAttributes2.default.connected(this);
        // Set a default tab index of 0 (document order) if no tab index exists.
        // MS Edge requires we explicitly check for presence of tabindex attribute.
        if (this.getAttribute('tabindex') == null || this.tabIndex < 0) {
          this.setAttribute('tabindex', '0');
        }
      }

      /**
       * Handle the indicated keyboard event.
       *
       * The default implementation of this method does nothing. This will
       * typically be handled by other mixins.
       *
       * @param {KeyboardEvent} event - the keyboard event
       * @return {boolean} true if the event was handled
       */

    }, {
      key: _symbols2.default.keydown,
      value: function value(event) {
        if (_get(Keyboard.prototype.__proto__ || Object.getPrototypeOf(Keyboard.prototype), _symbols2.default.keydown, this)) {
          return _get(Keyboard.prototype.__proto__ || Object.getPrototypeOf(Keyboard.prototype), _symbols2.default.keydown, this).call(this, event);
        }
      }
    }]);

    return Keyboard;
  }(base);

  return Keyboard;
};

// Fire the keydown() method on the element or (if it belongs to a collective)
// all elements in the collective.
//
// Note: the value of 'this' is bound to the element which received the event.


function keydown(event) {

  var handled = false;

  if (this.collective) {
    // Give collective elements a shot at the event, working from innermost to
    // outermost (this element).
    var elements = this.collective.elements;
    for (var i = elements.length - 1; i >= 0; i--) {
      var element = elements[i];
      handled = element[_symbols2.default.keydown] && element[_symbols2.default.keydown](event);
      if (handled) {
        break;
      }
    }
  } else {
    // Component is handling the keyboard on its own.
    handled = this[_symbols2.default.keydown](event);
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
  // Would prefer to use Array.prototype.find here, but IE 11 doesn't have it.
  var nonNullLabels = labels.filter(function (label) {
    return label != null;
  });
  return nonNullLabels[0];
}

function isListeningToKeydown(element) {
  return element[keydownListenerSymbol] != null;
}

function startListeningToKeydown(element) {
  element[keydownListenerSymbol] = keydown.bind(element);
  element.addEventListener('keydown', element[keydownListenerSymbol]);
}

function stopListeningToKeydown(element) {
  element.removeEventListener('keydown', element[keydownListenerSymbol]);
  element[keydownListenerSymbol] = null;
  element.removeAttribute('tabindex');
}

},{"./createSymbol":19,"./safeAttributes":21,"./symbols":22}],10:[function(require,module,exports){
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
   * pressed. You can use the [Keyboard](Keyboard.md) mixin for that purpose, or
   * wire up your own keyboard handling and call `keydown` yourself.
   *
   * This mixin calls methods such as `goLeft` and `goRight`. You can define
   * what that means by implementing those methods yourself. If you want to use
   * direction keys to navigate a selection, use this mixin with the
   * [DirectionSelection](DirectionSelection.md) mixin.
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

},{"./createSymbol":19,"./symbols":22}],11:[function(require,module,exports){
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
   * the related [SelectionInView](SelectionInView.md) mixin.
   *
   * This mixin expects the component to invoke a `keydown` method when a key is
   * pressed. You can use the [Keyboard](Keyboard.md) mixin for that purpose, or
   * wire up your own keyboard handling and call `keydown` yourself.
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

},{"./symbols":22}],12:[function(require,module,exports){
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
   * pressed. You can use the [Keyboard](Keyboard.md) mixin for that purpose, or
   * wire up your own keyboard handling and call `keydown` yourself.
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
      // itemsChanged() {
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

},{"./createSymbol":19,"./symbols":22}],13:[function(require,module,exports){
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
   * `[symbols.applySelection]`, `itemAdded`, and `selectedIndex`. You can supply these
   * yourself, or do so via the [SingleSelection](SingleSelection.md) mixin.
   */
  var SelectionAriaActive = function (_base) {
    _inherits(SelectionAriaActive, _base);

    function SelectionAriaActive() {
      _classCallCheck(this, SelectionAriaActive);

      return _possibleConstructorReturn(this, (SelectionAriaActive.__proto__ || Object.getPrototypeOf(SelectionAriaActive)).apply(this, arguments));
    }

    _createClass(SelectionAriaActive, [{
      key: _symbols2.default.applySelection,
      value: function value(item, selected) {
        if (_get(SelectionAriaActive.prototype.__proto__ || Object.getPrototypeOf(SelectionAriaActive.prototype), _symbols2.default.applySelection, this)) {
          _get(SelectionAriaActive.prototype.__proto__ || Object.getPrototypeOf(SelectionAriaActive.prototype), _symbols2.default.applySelection, this).call(this, item, selected);
        }
        item.setAttribute('aria-selected', selected);
        var itemId = item.id;
        if (itemId) {
          if (selected) {
            outermostElement(this).setAttribute('aria-activedescendant', itemId);
          }
        }
      }
    }, {
      key: 'collectiveChanged',
      value: function collectiveChanged() {
        if (_get(SelectionAriaActive.prototype.__proto__ || Object.getPrototypeOf(SelectionAriaActive.prototype), 'collectiveChanged', this)) {
          _get(SelectionAriaActive.prototype.__proto__ || Object.getPrototypeOf(SelectionAriaActive.prototype), 'collectiveChanged', this).call(this);
        }
        setAriaAttributes(this);
      }
    }, {
      key: 'connectedCallback',
      value: function connectedCallback() {
        if (_get(SelectionAriaActive.prototype.__proto__ || Object.getPrototypeOf(SelectionAriaActive.prototype), 'connectedCallback', this)) {
          _get(SelectionAriaActive.prototype.__proto__ || Object.getPrototypeOf(SelectionAriaActive.prototype), 'connectedCallback', this).call(this);
        }
        setAriaAttributes(this);
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
      key: 'selectedItem',
      get: function get() {
        return _get(SelectionAriaActive.prototype.__proto__ || Object.getPrototypeOf(SelectionAriaActive.prototype), 'selectedItem', this);
      },
      set: function set(item) {
        if ('selectedItem' in base.prototype) {
          _set(SelectionAriaActive.prototype.__proto__ || Object.getPrototypeOf(SelectionAriaActive.prototype), 'selectedItem', item, this);
        }
        // Catch the case where the selection is removed.
        if (item == null) {
          outermostElement(this).removeAttribute('aria-activedescendant');
        }
      }
    }]);

    return SelectionAriaActive;
  }(base);

  return SelectionAriaActive;
};

// Return the first ARIA activedescendant defined by the collective.


function getCollectiveAriaActiveDescendant(collective) {
  var descendants = collective.elements.map(function (element) {
    return element.getAttribute('aria-activedescendant');
  });
  var nonNullDescendants = descendants.filter(function (descendant) {
    return descendant !== null;
  });
  return nonNullDescendants[0];
}

// Return the first ARIA label defined by the collective.
function getCollectiveAriaRole(collective) {
  var roles = collective.elements.map(function (element) {
    return element.getAttribute('role');
  });
  var nonNullRoles = roles.filter(function (role) {
    return role !== null;
  });
  return nonNullRoles[0];
}

function outermostElement(element) {
  return element.collective ? element.collective.outermostElement : element;
}

function setAriaAttributes(element) {

  if (!element.isConnected) {
    return;
  }
  if (element.collective && element !== element.collective.outermostElement) {
    // Not the outermost element, do nothing and let the outermost element
    // handle things.
    return;
  }

  // Ensure the element has an ARIA role.
  if (!element.getAttribute('role')) {
    // Try to promote an ARIA role from an inner element. If none is found,
    // use a default role.
    var role = element.collective && getCollectiveAriaRole(element.collective);
    role = role || 'listbox';
    element.setAttribute('role', role);
  }

  if (!element.getAttribute('aria-activedescendant') && element.collective) {
    // Try to promote an ARIA activedescendant value from an inner element.
    var descendant = getCollectiveAriaActiveDescendant(element.collective);
    if (descendant) {
      element.setAttribute('aria-activedescendant', descendant);
    }
  }

  if (element.collective) {
    // Remove the ARIA role and activedescendant values from the collective's
    // inner elements.
    element.collective.elements.forEach(function (member) {
      if (member !== element) {
        member.removeAttribute('aria-activedescendant');
        member.setAttribute('role', 'none');
      }
    });
  }
}

},{"./symbols":22}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Exported function extends a base class with SelectionHighlight. */
exports.default = function (base) {

  /**
   * Mixin which applies standard highlight colors to a selected item.
   *
   * This mixin highlights textual items (e.g., in a list) in a standard way by
   * using the CSS `highlight` and `highlighttext` color values. These values
   * respect operating system defaults and user preferences, and hence are good
   * default values for highlight colors.
   *
   * This mixin expects a `selected` class to be applied to selected items. You
   * can use the [ContentAsItems](ContentAsItems.md) mixin for that purpose.
   */
  var SelectionHighlight = function (_base) {
    _inherits(SelectionHighlight, _base);

    function SelectionHighlight() {
      _classCallCheck(this, SelectionHighlight);

      var _this = _possibleConstructorReturn(this, (SelectionHighlight.__proto__ || Object.getPrototypeOf(SelectionHighlight)).call(this));

      if (_this.shadowRoot) {
        var style = document.createElement('style');
        style.innerHTML = '\n          ::slotted(.selected) {\n            background-color: highlight;\n            color: highlighttext;\n          }\n        ';
        _this.shadowRoot.appendChild(style);
      }
      return _this;
    }

    return SelectionHighlight;
  }(base);

  return SelectionHighlight;
};

},{}],15:[function(require,module,exports){
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
   * changes. You can supply that yourself, or use the
   * [SingleSelection](SingleSelection.md) mixin.
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

},{}],16:[function(require,module,exports){
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

},{}],17:[function(require,module,exports){
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

      var _this = _possibleConstructorReturn(this, (ShadowTemplate.__proto__ || Object.getPrototypeOf(ShadowTemplate)).call(this));

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

},{}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createSymbol = require('./createSymbol');

var _createSymbol2 = _interopRequireDefault(_createSymbol);

var _microtask = require('./microtask');

var _microtask2 = _interopRequireDefault(_microtask);

var _symbols = require('./symbols');

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Symbols for private data members on an element.
var canSelectNextSymbol = (0, _createSymbol2.default)('canSelectNext');
var canSelectPreviousSymbol = (0, _createSymbol2.default)('canSelectPrevious');
var selectedItemSymbol = (0, _createSymbol2.default)('selectedItem');
var selectionRequiredSymbol = (0, _createSymbol2.default)('selectionRequired');
var selectionWrapsSymbol = (0, _createSymbol2.default)('selectionWraps');

/* Exported function extends a base class with SingleSelection. */

exports.default = function (base) {

  /**
   * Mixin which manages single-selection semantics for items in a list.
   *
   * This mixin expects a component to provide an `items` array of all elements
   * in the list. A standard way to do that with is the
   * [ContentAsItems](ContentAsItems.md) mixin, which takes a component's
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
   * [SelectionAriaActive](SelectionAriaActive.md),
   * [SelectionHighlight](SelectionHighlight.md) and
   * [SelectionInView](SelectionInView.md), modify the selected item in common
   * ways to let the user know a given item is selected or not selected.
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
     * Apply the indicate selection state to the item.
     *
     * The default implementation of this method does nothing. User-visible
     * effects will typically be handled by other mixins.
     *
     * @param {HTMLElement} item - the item being selected/deselected
     * @param {boolean} selected - true if the item is selected, false if not
     */


    _createClass(SingleSelection, [{
      key: _symbols2.default.applySelection,
      value: function value(item, selected) {
        if (_get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), _symbols2.default.applySelection, this)) {
          _get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), _symbols2.default.applySelection, this).call(this, item, selected);
        }
      }

      /**
       * True if the selection can be moved to the next item, false if not (the
       * selected item is the last item in the list).
       *
       * @type {boolean}
       */

    }, {
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
        this[_symbols2.default.applySelection](item, item === this.selectedItem);
      }
    }, {
      key: 'itemsChanged',
      value: function itemsChanged() {
        var _this2 = this;

        if (_get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'itemsChanged', this)) {
          _get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'itemsChanged', this).call(this);
        }

        if (this.selectionRequired) {
          // Ensure selection, but do this in the next tick to give other mixins a
          // chance to do their own itemsChanged work.
          (0, _microtask2.default)(function () {
            ensureSelection(_this2);
          });
        }

        // The change in items may have affected which navigations are possible.
        updatePossibleNavigations(this);
      }

      /**
       * The index of the item which is currently selected.
       *
       * If `selectionWraps` is false, the index is -1 if there is no selection.
       * In that case, setting the index to -1 will deselect any
       * currently-selected item.
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
       * True if selection navigations wrap from last to first, and vice versa.
       *
       * @type {boolean}
       * @default false
       */

    }, {
      key: 'canSelectNext',
      get: function get() {
        return this[canSelectNextSymbol];
      },
      set: function set(canSelectNext) {
        this[canSelectNextSymbol] = canSelectNext;
        if ('canSelectNext' in base.prototype) {
          _set(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'canSelectNext', canSelectNext, this);
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
        this[canSelectPreviousSymbol] = canSelectPrevious;
        if ('canSelectPrevious' in base.prototype) {
          _set(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'canSelectPrevious', canSelectPrevious, this);
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
        var selectedItem = this.selectedItem;

        // TODO: If selection wasn't found, most likely cause is that the DOM was
        // manipulated from underneath us. Once we track content changes, turn
        // this into a warning.
        // TODO: Memoize
        return selectedItem ? this.items.indexOf(selectedItem) : -1;
      },
      set: function set(index) {
        // TODO: Pull setting of selectedItem above super() call. */
        if ('selectedIndex' in base.prototype) {
          _set(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'selectedIndex', index, this);
        }
        var items = this.items;
        var item = index < 0 || items.length === 0 ? null : items[index];
        this.selectedItem = item;

        var event = new CustomEvent('selected-index-changed', {
          detail: {
            selectedIndex: index,
            value: index // for Polymer binding
          }
        });
        this.dispatchEvent(event);
      }

      /**
       * The currently selected item, or null if there is no selection.
       *
       * Setting this property to null deselects any currently-selected item.
       *
       * @type {object}
       */

    }, {
      key: 'selectedItem',
      get: function get() {
        return this[selectedItemSymbol] || null;
      },
      set: function set(item) {
        var previousItem = this[selectedItemSymbol];
        // TODO: Confirm item is actually in the list before selecting.
        this[selectedItemSymbol] = item;

        if ('selectedItem' in base.prototype) {
          _set(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'selectedItem', item, this);
        }
        if (previousItem) {
          if (item === previousItem) {
            // The indicated item is already the selected item.
            return;
          }
          // Remove previous selection.
          this[_symbols2.default.applySelection](previousItem, false);
        }

        if (item) {
          this[_symbols2.default.applySelection](item, true);
        }

        // TODO: Rationalize with selectedIndex so we're not recalculating item
        // or index in each setter.
        updatePossibleNavigations(this);

        var event = new CustomEvent('selected-item-changed', {
          detail: {
            selectedItem: item,
            previousItem: previousItem,
            value: item // for Polymer binding
          }
        });
        this.dispatchEvent(event);
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
        if (selectionRequired) {
          ensureSelection(this);
        }
      }
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

    }]);

    return SingleSelection;
  }(base);

  return SingleSelection;
};

// If no item is selected, select a default item.


function ensureSelection(element) {
  var index = element.selectedIndex;
  if (index < 0) {
    // Selected item is no longer in the current set of items.
    if (element.items && element.items.length > 0) {
      // Select the first item.
      // TODO: If the previously-selected item has been deleted, try to select
      // an item adjacent to the position it held.
      element.selectedIndex = 0;
    } else {
      // No items for us to select, but we can at least signal that there's no
      // longer a selection.
      element.selectedItem = null;
    }
  }
}

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
  element.canSelectNext = canSelectNext;
  element.canSelectPrevious = canSelectPrevious;
}

},{"./createSymbol":19,"./microtask":20,"./symbols":22}],19:[function(require,module,exports){
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

},{}],20:[function(require,module,exports){
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

},{}],21:[function(require,module,exports){
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
    element.setAttribute(attributeName, value);
  }
}

},{"./createSymbol":19,"./toggleClass":23}],22:[function(require,module,exports){
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
 *     import 'SingleSelection' from 'basic-component-mixins/src/SingleSelection';
 *     import 'symbols' from 'basic-component-mixins/src/symbols';
 *
 *     class MyElement extends SingleSelection(HTMLElement) {
 *       [symbols.applySelection](item, selected) {
 *         // This will be invoked whenever an item is selected/deselected.
 *       }
 *     }
 *
 * @module symbols
 */
var symbols = {

  /**
   * Symbol for the `applySelection` method.
   *
   * This method applies the indicated selection state to an item.
   *
   * @function applySelection
   * @param {HTMLElement} item - the item being selected/deselected
   * @param {boolean} selected - true if the item is selected, false if not
   */
  applySelection: (0, _createSymbol2.default)('[symbols.applySelection]'),

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
   * Symbol for the `keydown` method.
   *
   * This method is invoked when an element receives a `keydown` event.
   *
   * @function keydown
   * @param {KeyboardEvent} event - the event being processed
   */
  keydown: (0, _createSymbol2.default)('keydown')
};

exports.default = symbols;

},{"./createSymbol":19}],23:[function(require,module,exports){
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

},{}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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

    return _possibleConstructorReturn(this, (ElementBase.__proto__ || Object.getPrototypeOf(ElementBase)).apply(this, arguments));
  }

  _createClass(ElementBase, [{
    key: 'log',


    /*
     * Debugging utility: logs a message, prefixed by the component's tag.
     */
    value: function log(text) {
      if (_get(ElementBase.prototype.__proto__ || Object.getPrototypeOf(ElementBase.prototype), 'log', this)) {
        _get(ElementBase.prototype.__proto__ || Object.getPrototypeOf(ElementBase.prototype), 'log', this).call(this, text);
      }
      console.log(this.localName + ': ' + text);
    }
  }]);

  return ElementBase;
}((0, _Composable2.default)(HTMLElement).compose(_ShadowTemplate2.default, // before node finding, so shadow root is populated
_ShadowElementReferences2.default, // before marshalling, so properties can use refs
_AttributeMarshalling2.default, _DistributedChildren2.default));

exports.default = ElementBase;

},{"../../basic-component-mixins/src/AttributeMarshalling":1,"../../basic-component-mixins/src/Composable":3,"../../basic-component-mixins/src/DistributedChildren":6,"../../basic-component-mixins/src/ShadowElementReferences":16,"../../basic-component-mixins/src/ShadowTemplate":17}],25:[function(require,module,exports){
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

},{"./src/ListBox":26}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _ElementBase = require('../../basic-element-base/src/ElementBase');

var _ElementBase2 = _interopRequireDefault(_ElementBase);

var _DistributedChildrenAsContent = require('../../basic-component-mixins/src/DistributedChildrenAsContent');

var _DistributedChildrenAsContent2 = _interopRequireDefault(_DistributedChildrenAsContent);

var _ClickSelection = require('../../basic-component-mixins/src/ClickSelection');

var _ClickSelection2 = _interopRequireDefault(_ClickSelection);

var _ContentAsItems = require('../../basic-component-mixins/src/ContentAsItems');

var _ContentAsItems2 = _interopRequireDefault(_ContentAsItems);

var _DirectionSelection = require('../../basic-component-mixins/src/DirectionSelection');

var _DirectionSelection2 = _interopRequireDefault(_DirectionSelection);

var _Generic = require('../../basic-component-mixins/src/Generic');

var _Generic2 = _interopRequireDefault(_Generic);

var _Keyboard = require('../../basic-component-mixins/src/Keyboard');

var _Keyboard2 = _interopRequireDefault(_Keyboard);

var _KeyboardDirection = require('../../basic-component-mixins/src/KeyboardDirection');

var _KeyboardDirection2 = _interopRequireDefault(_KeyboardDirection);

var _KeyboardPagedSelection = require('../../basic-component-mixins/src/KeyboardPagedSelection');

var _KeyboardPagedSelection2 = _interopRequireDefault(_KeyboardPagedSelection);

var _KeyboardPrefixSelection = require('../../basic-component-mixins/src/KeyboardPrefixSelection');

var _KeyboardPrefixSelection2 = _interopRequireDefault(_KeyboardPrefixSelection);

var _SelectionAriaActive = require('../../basic-component-mixins/src/SelectionAriaActive');

var _SelectionAriaActive2 = _interopRequireDefault(_SelectionAriaActive);

var _SelectionHighlight = require('../../basic-component-mixins/src/SelectionHighlight');

var _SelectionHighlight2 = _interopRequireDefault(_SelectionHighlight);

var _SelectionInView = require('../../basic-component-mixins/src/SelectionInView');

var _SelectionInView2 = _interopRequireDefault(_SelectionInView);

var _SingleSelection = require('../../basic-component-mixins/src/SingleSelection');

var _SingleSelection2 = _interopRequireDefault(_SingleSelection);

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
 * @mixes ClickSelection
 * @mixes ContentAsItems
 * @mixes DirectionSelection
 * @mixes DistributedChildrenAsContent
 * @mixes Generic
 * @mixes Keyboard
 * @mixes KeyboardDirection
 * @mixes KeyboardPagedSelection
 * @mixes KeyboardPrefixSelection
 * @mixes SelectionAriaActive
 * @mixes SelectionHighlight
 * @mixes SelectionInView
 * @mixes SingleSelection
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
    key: 'template',
    get: function get() {
      return '\n      <style>\n      :host {\n        display: -webkit-flex;\n        display: flex;\n        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n      }\n\n      [target="child"] {\n        display: -webkit-flex;\n        display: flex;\n        -webkit-flex: 1;\n        flex: 1;\n      }\n\n      #itemsContainer {\n        -webkit-flex: 1;\n        flex: 1;\n        -webkit-overflow-scrolling: touch;\n        overflow-y: scroll; /* for momentum scrolling */\n      }\n\n      /* Generic appearance */\n      :host([generic=""]) {\n        border: 1px solid gray;\n        box-sizing: border-box;\n        cursor: default;\n      }\n\n      :host([generic=""]) #itemsContainer ::slotted(*) {\n        cursor: default;\n        padding: 0.25em;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n      }\n      </style>\n\n      <div id="itemsContainer" role="none">\n        <slot></slot>\n      </div>\n    ';
    }

    /**
     * The text content of the selected item.
     *
     * Setting this value to a string will attempt to select the first list item
     * whose text content match that string. Setting this to a string not matching
     * any list item will result in no selection.
     *
     * @type {string}
     */

  }, {
    key: 'value',
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

    /**
     * Fires when the list's value property changes.
     *
     * @memberof ListBox
     * @event value-changed
     */

  }]);

  return ListBox;
}(_ElementBase2.default.compose(_ClickSelection2.default, _ContentAsItems2.default, _DirectionSelection2.default, _DistributedChildrenAsContent2.default, _Generic2.default, _Keyboard2.default, _KeyboardDirection2.default, _KeyboardPagedSelection2.default, _KeyboardPrefixSelection2.default, _SelectionAriaActive2.default, _SelectionHighlight2.default, _SelectionInView2.default, _SingleSelection2.default));

customElements.define('basic-list-box', ListBox);
exports.default = ListBox;

},{"../../basic-component-mixins/src/ClickSelection":2,"../../basic-component-mixins/src/ContentAsItems":4,"../../basic-component-mixins/src/DirectionSelection":5,"../../basic-component-mixins/src/DistributedChildrenAsContent":7,"../../basic-component-mixins/src/Generic":8,"../../basic-component-mixins/src/Keyboard":9,"../../basic-component-mixins/src/KeyboardDirection":10,"../../basic-component-mixins/src/KeyboardPagedSelection":11,"../../basic-component-mixins/src/KeyboardPrefixSelection":12,"../../basic-component-mixins/src/SelectionAriaActive":13,"../../basic-component-mixins/src/SelectionHighlight":14,"../../basic-component-mixins/src/SelectionInView":15,"../../basic-component-mixins/src/SingleSelection":18,"../../basic-component-mixins/src/symbols":22,"../../basic-element-base/src/ElementBase":24}]},{},[25])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9BdHRyaWJ1dGVNYXJzaGFsbGluZy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NsaWNrU2VsZWN0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ29tcG9zYWJsZS5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NvbnRlbnRBc0l0ZW1zLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlyZWN0aW9uU2VsZWN0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlzdHJpYnV0ZWRDaGlsZHJlbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9HZW5lcmljLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvS2V5Ym9hcmQuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9LZXlib2FyZERpcmVjdGlvbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0tleWJvYXJkUGFnZWRTZWxlY3Rpb24uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9LZXlib2FyZFByZWZpeFNlbGVjdGlvbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NlbGVjdGlvbkFyaWFBY3RpdmUuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TZWxlY3Rpb25IaWdobGlnaHQuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TZWxlY3Rpb25JblZpZXcuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TaGFkb3dFbGVtZW50UmVmZXJlbmNlcy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NoYWRvd1RlbXBsYXRlLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2luZ2xlU2VsZWN0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvY3JlYXRlU3ltYm9sLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvbWljcm90YXNrLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvc2FmZUF0dHJpYnV0ZXMuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9zeW1ib2xzLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvdG9nZ2xlQ2xhc3MuanMiLCJwYWNrYWdlcy9iYXNpYy1lbGVtZW50LWJhc2Uvc3JjL0VsZW1lbnRCYXNlLmpzIiwicGFja2FnZXMvYmFzaWMtbGlzdC1ib3gvZ2xvYmFscy5qcyIsInBhY2thZ2VzL2Jhc2ljLWxpc3QtYm94L3NyYy9MaXN0Qm94LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUFHQTtBQUNBLElBQU0sMkJBQTJCLEVBQWpDO0FBQ0EsSUFBTSw0QkFBNEIsRUFBbEM7O0FBR0E7O2tCQUNlLFVBQUMsSUFBRCxFQUFVOztBQUV2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFGdUIsTUFxQ2pCLG9CQXJDaUI7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7O0FBdUNyQjs7O0FBdkNxQiwrQ0EwQ0ksYUExQ0osRUEwQ21CLFFBMUNuQixFQTBDNkIs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QXlCLElBQTdCLEVBQW1DO0FBQ2pDLHFCQUFXLENBQVg7QUFDQTtBQUNEO0FBQ0Y7O0FBRUQsVUFBSSxhQUFhLFlBQWpCLEVBQStCO0FBQzdCLGFBQUssYUFBTCxHQUFxQixRQUFyQjtBQUNBLFlBQU0sUUFBUSxJQUFJLFdBQUosQ0FBZ0IsZUFBaEIsQ0FBZDtBQUNBLGFBQUssYUFBTCxDQUFtQixLQUFuQjtBQUNEO0FBQ0Y7O0FBR0Q7Ozs7Ozs7Ozs7RUE1R29CLHNCQUFZLE9BQVosc1g7O0FBcUh0QixlQUFlLE1BQWYsQ0FBc0IsZ0JBQXRCLEVBQXdDLE9BQXhDO2tCQUNlLE8iLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHNhZmVBdHRyaWJ1dGVzIGZyb20gJy4vc2FmZUF0dHJpYnV0ZXMnO1xuXG5cbi8vIE1lbW9pemVkIG1hcHMgb2YgYXR0cmlidXRlIHRvIHByb3BlcnR5IG5hbWVzIGFuZCB2aWNlIHZlcnNhLlxuY29uc3QgYXR0cmlidXRlVG9Qcm9wZXJ0eU5hbWVzID0ge307XG5jb25zdCBwcm9wZXJ0eU5hbWVzVG9BdHRyaWJ1dGVzID0ge307XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBBdHRyaWJ1dGVNYXJzaGFsbGluZy4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIG1hcnNoYWxscyBhdHRyaWJ1dGVzIHRvIHByb3BlcnRpZXMgYW5kIHZpY2UgdmVyc2EuXG4gICAqXG4gICAqIElmIHlvdXIgY29tcG9uZW50IGV4cG9zZXMgYSBzZXR0ZXIgZm9yIGEgcHJvcGVydHksIGl0J3MgZ2VuZXJhbGx5IGEgZ29vZFxuICAgKiBpZGVhIHRvIGxldCBkZXZzIHVzaW5nIHlvdXIgY29tcG9uZW50IGJlIGFibGUgdG8gc2V0IHRoYXQgcHJvcGVydHkgaW4gSFRNTFxuICAgKiB2aWEgYW4gZWxlbWVudCBhdHRyaWJ1dGUuIFlvdSBjYW4gY29kZSB0aGF0IHlvdXJzZWxmIGJ5IHdyaXRpbmcgYW5cbiAgICogYGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja2AsIG9yIHlvdSBjYW4gdXNlIHRoaXMgbWl4aW4gdG8gZ2V0IGEgZGVncmVlIG9mXG4gICAqIGF1dG9tYXRpYyBzdXBwb3J0LlxuICAgKlxuICAgKiBUaGlzIG1peGluIGltcGxlbWVudHMgYW4gYGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja2AgdGhhdCB3aWxsIGF0dGVtcHQgdG9cbiAgICogY29udmVydCBhIGNoYW5nZSBpbiBhbiBlbGVtZW50IGF0dHJpYnV0ZSBpbnRvIGEgY2FsbCB0byB0aGUgY29ycmVzcG9uZGluZ1xuICAgKiBwcm9wZXJ0eSBzZXR0ZXIuIEF0dHJpYnV0ZXMgdHlwaWNhbGx5IGZvbGxvdyBoeXBoZW5hdGVkIG5hbWVzIChcImZvby1iYXJcIiksXG4gICAqIHdoZXJlYXMgcHJvcGVydGllcyB0eXBpY2FsbHkgdXNlIGNhbWVsQ2FzZSBuYW1lcyAoXCJmb29CYXJcIikuIFRoaXMgbWl4aW5cbiAgICogcmVzcGVjdHMgdGhhdCBjb252ZW50aW9uLCBhdXRvbWF0aWNhbGx5IG1hcHBpbmcgdGhlIGh5cGhlbmF0ZWQgYXR0cmlidXRlXG4gICAqIG5hbWUgdG8gdGhlIGNvcnJlc3BvbmRpbmcgY2FtZWxDYXNlIHByb3BlcnR5IG5hbWUuXG4gICAqXG4gICAqIEV4YW1wbGU6IFlvdSBkZWZpbmUgYSBjb21wb25lbnQgdXNpbmcgdGhpcyBtaXhpbjpcbiAgICpcbiAgICogICAgIGNsYXNzIE15RWxlbWVudCBleHRlbmRzIEF0dHJpYnV0ZU1hcnNoYWxsaW5nKEhUTUxFbGVtZW50KSB7XG4gICAqICAgICAgIGdldCBmb29CYXIoKSB7IHJldHVybiB0aGlzLl9mb29CYXI7IH1cbiAgICogICAgICAgc2V0IGZvb0Jhcih2YWx1ZSkgeyB0aGlzLl9mb29CYXIgPSB2YWx1ZTsgfVxuICAgKiAgICAgfVxuICAgKiAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdteS1lbGVtZW50JywgTXlFbGVtZW50KTtcbiAgICpcbiAgICogSWYgc29tZW9uZSB0aGVuIGluc3RhbnRpYXRlcyB5b3VyIGNvbXBvbmVudCBpbiBIVE1MOlxuICAgKlxuICAgKiAgICAgPG15LWVsZW1lbnQgZm9vLWJhcj1cIkhlbGxvXCI+PC9teS1lbGVtZW50PlxuICAgKlxuICAgKiBUaGVuLCBhZnRlciB0aGUgZWxlbWVudCBoYXMgYmVlbiB1cGdyYWRlZCwgdGhlIGBmb29CYXJgIHNldHRlciB3aWxsXG4gICAqIGF1dG9tYXRpY2FsbHkgYmUgaW52b2tlZCB3aXRoIHRoZSBpbml0aWFsIHZhbHVlIFwiSGVsbG9cIi5cbiAgICpcbiAgICogRm9yIHRoZSB0aW1lIGJlaW5nLCB0aGlzIG1peGluIG9ubHkgc3VwcG9ydHMgc3RyaW5nLXZhbHVlZCBwcm9wZXJ0aWVzLlxuICAgKiBJZiB5b3UnZCBsaWtlIHRvIGNvbnZlcnQgc3RyaW5nIGF0dHJpYnV0ZXMgdG8gb3RoZXIgdHlwZXMgKG51bWJlcnMsXG4gICAqIGJvb2xlYW5zKSwgeW91IG5lZWQgdG8gaW1wbGVtZW50IGBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tgIHlvdXJzZWxmLlxuICAgKi9cbiAgY2xhc3MgQXR0cmlidXRlTWFyc2hhbGxpbmcgZXh0ZW5kcyBiYXNlIHtcblxuICAgIC8qXG4gICAgICogSGFuZGxlIGEgY2hhbmdlIHRvIHRoZSBhdHRyaWJ1dGUgd2l0aCB0aGUgZ2l2ZW4gbmFtZS5cbiAgICAgKi9cbiAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soYXR0cmlidXRlTmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG4gICAgICBpZiAoc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKSB7IHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjaygpOyB9XG4gICAgICBjb25zdCBwcm9wZXJ0eU5hbWUgPSBhdHRyaWJ1dGVUb1Byb3BlcnR5TmFtZShhdHRyaWJ1dGVOYW1lKTtcbiAgICAgIC8vIElmIHRoZSBhdHRyaWJ1dGUgbmFtZSBjb3JyZXNwb25kcyB0byBhIHByb3BlcnR5IG5hbWUsIHNldCB0aGUgcHJvcGVydHkuXG4gICAgICAvLyBJZ25vcmUgc3RhbmRhcmQgSFRNTEVsZW1lbnQgcHJvcGVydGllcyBoYW5kbGVkIGJ5IHRoZSBET00uXG4gICAgICBpZiAocHJvcGVydHlOYW1lIGluIHRoaXMgJiYgIShwcm9wZXJ0eU5hbWUgaW4gSFRNTEVsZW1lbnQucHJvdG90eXBlKSkge1xuICAgICAgICB0aGlzW3Byb3BlcnR5TmFtZV0gPSBuZXdWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jb25uZWN0ZWRDYWxsYmFjaykgeyBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpOyB9XG4gICAgICBzYWZlQXR0cmlidXRlcy5jb25uZWN0ZWQodGhpcyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG4gICAgICByZXR1cm4gYXR0cmlidXRlc0ZvckNsYXNzKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldC91bnNldCB0aGUgYXR0cmlidXRlIHdpdGggdGhlIGluZGljYXRlZCBuYW1lLlxuICAgICAqXG4gICAgICogVGhpcyBtZXRob2QgZXhpc3RzIHByaW1hcmlseSB0byBoYW5kbGUgdGhlIGNhc2Ugd2hlcmUgYW4gZWxlbWVudCB3YW50cyB0b1xuICAgICAqIHNldCBhIGRlZmF1bHQgcHJvcGVydHkgdmFsdWUgdGhhdCBzaG91bGQgYmUgcmVmbGVjdGVkIGFzIGFuIGF0dHJpYnV0ZS4gQW5cbiAgICAgKiBpbXBvcnRhbnQgbGltaXRhdGlvbiBvZiBjdXN0b20gZWxlbWVudCBjb25zdHVyY3RvcnMgaXMgdGhhdCB0aGV5IGNhbm5vdFxuICAgICAqIHNldCBhdHRyaWJ1dGVzLiBBIGNhbGwgdG8gYHJlZmxlY3RBdHRyaWJ1dGVgIGR1cmluZyB0aGUgY29uc3RydWN0b3Igd2lsbFxuICAgICAqIGJlIGRlZmVycmVkIHVudGlsIHRoZSBlbGVtZW50IGlzIGNvbm5lY3RlZCB0byB0aGUgZG9jdW1lbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYXR0cmlidXRlIC0gVGhlIG5hbWUgb2YgdGhlICphdHRyaWJ1dGUqIChub3QgcHJvcGVydHkpIHRvIHNldC5cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gc2V0LiBJZiBudWxsLCB0aGUgYXR0cmlidXRlIHdpbGwgYmUgcmVtb3ZlZC5cbiAgICAgKi9cbiAgICByZWZsZWN0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBzYWZlQXR0cmlidXRlcy5zZXRBdHRyaWJ1dGUodGhpcywgYXR0cmlidXRlLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0L3Vuc2V0IHRoZSBjbGFzcyB3aXRoIHRoZSBpbmRpY2F0ZWQgbmFtZS5cbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIGV4aXN0cyBwcmltYXJpbHkgdG8gaGFuZGxlIHRoZSBjYXNlIHdoZXJlIGFuIGVsZW1lbnQgd2FudHMgdG9cbiAgICAgKiBzZXQgYSBkZWZhdWx0IHByb3BlcnR5IHZhbHVlIHRoYXQgc2hvdWxkIGJlIHJlZmxlY3RlZCBhcyBhcyBjbGFzcy4gQW5cbiAgICAgKiBpbXBvcnRhbnQgbGltaXRhdGlvbiBvZiBjdXN0b20gZWxlbWVudCBjb25zdHVyY3RvcnMgaXMgdGhhdCB0aGV5IGNhbm5vdFxuICAgICAqIHNldCBhdHRyaWJ1dGVzLCBpbmNsdWRpbmcgdGhlIGBjbGFzc2AgYXR0cmlidXRlLiBBIGNhbGwgdG9cbiAgICAgKiBgcmVmbGVjdENsYXNzYCBkdXJpbmcgdGhlIGNvbnN0cnVjdG9yIHdpbGwgYmUgZGVmZXJyZWQgdW50aWwgdGhlIGVsZW1lbnRcbiAgICAgKiBpcyBjb25uZWN0ZWQgdG8gdGhlIGRvY3VtZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBjbGFzcyB0byBzZXQuXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHZhbHVlIC0gVHJ1ZSB0byBzZXQgdGhlIGNsYXNzLCBmYWxzZSB0byByZW1vdmUgaXQuXG4gICAgICovXG4gICAgcmVmbGVjdENsYXNzKGNsYXNzTmFtZSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBzYWZlQXR0cmlidXRlcy50b2dnbGVDbGFzcyh0aGlzLCBjbGFzc05hbWUsIHZhbHVlKTtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBBdHRyaWJ1dGVNYXJzaGFsbGluZztcbn07XG5cblxuLy8gQ29udmVydCBoeXBoZW5hdGVkIGZvby1iYXIgYXR0cmlidXRlIG5hbWUgdG8gY2FtZWwgY2FzZSBmb29CYXIgcHJvcGVydHkgbmFtZS5cbmZ1bmN0aW9uIGF0dHJpYnV0ZVRvUHJvcGVydHlOYW1lKGF0dHJpYnV0ZU5hbWUpIHtcbiAgbGV0IHByb3BlcnR5TmFtZSA9IGF0dHJpYnV0ZVRvUHJvcGVydHlOYW1lc1thdHRyaWJ1dGVOYW1lXTtcbiAgaWYgKCFwcm9wZXJ0eU5hbWUpIHtcbiAgICAvLyBDb252ZXJ0IGFuZCBtZW1vaXplLlxuICAgIGNvbnN0IGh5cGVuUmVnRXggPSAvLShbYS16XSkvZztcbiAgICBwcm9wZXJ0eU5hbWUgPSBhdHRyaWJ1dGVOYW1lLnJlcGxhY2UoaHlwZW5SZWdFeCxcbiAgICAgICAgbWF0Y2ggPT4gbWF0Y2hbMV0udG9VcHBlckNhc2UoKSk7XG4gICAgYXR0cmlidXRlVG9Qcm9wZXJ0eU5hbWVzW2F0dHJpYnV0ZU5hbWVdID0gcHJvcGVydHlOYW1lO1xuICB9XG4gIHJldHVybiBwcm9wZXJ0eU5hbWU7XG59XG5cbmZ1bmN0aW9uIGF0dHJpYnV0ZXNGb3JDbGFzcyhjbGFzc0ZuKSB7XG5cbiAgLy8gV2UgdHJlYXQgdGhlIGVsZW1lbnQgYmFzZSBjbGFzc2VzIGFzIGlmIHRoZXkgaGF2ZSBubyBhdHRyaWJ1dGVzLCBzaW5jZSB3ZVxuICAvLyBkb24ndCB3YW50IHRvIHJlY2VpdmUgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrIGZvciB0aGVtLlxuICBpZiAoY2xhc3NGbiA9PT0gSFRNTEVsZW1lbnQgfHwgY2xhc3NGbiA9PT0gT2JqZWN0KSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgLy8gR2V0IGF0dHJpYnV0ZXMgZm9yIHBhcmVudCBjbGFzcy5cbiAgY29uc3QgYmFzZUNsYXNzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGNsYXNzRm4ucHJvdG90eXBlKS5jb25zdHJ1Y3RvcjtcbiAgY29uc3QgYmFzZUF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzRm9yQ2xhc3MoYmFzZUNsYXNzKTtcblxuICAvLyBHZXQgYXR0cmlidXRlcyBmb3IgdGhpcyBjbGFzcy5cbiAgY29uc3QgcHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGNsYXNzRm4ucHJvdG90eXBlKTtcbiAgY29uc3Qgc2V0dGVyTmFtZXMgPSBwcm9wZXJ0eU5hbWVzLmZpbHRlcihwcm9wZXJ0eU5hbWUgPT5cbiAgICB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihcbiAgICAgICAgY2xhc3NGbi5wcm90b3R5cGUsIHByb3BlcnR5TmFtZSkuc2V0ID09PSAnZnVuY3Rpb24nKTtcbiAgY29uc3QgYXR0cmlidXRlcyA9IHNldHRlck5hbWVzLm1hcChzZXR0ZXJOYW1lID0+XG4gICAgICBwcm9wZXJ0eU5hbWVUb0F0dHJpYnV0ZShzZXR0ZXJOYW1lKSk7XG5cbiAgLy8gTWVyZ2UuXG4gIGNvbnN0IGRpZmYgPSBhdHRyaWJ1dGVzLmZpbHRlcihhdHRyaWJ1dGUgPT5cbiAgICAgIGJhc2VBdHRyaWJ1dGVzLmluZGV4T2YoYXR0cmlidXRlKSA8IDApO1xuICByZXR1cm4gYmFzZUF0dHJpYnV0ZXMuY29uY2F0KGRpZmYpO1xufVxuXG4vLyBDb252ZXJ0IGEgY2FtZWwgY2FzZSBmb29CYXIgcHJvcGVydHkgbmFtZSB0byBhIGh5cGhlbmF0ZWQgZm9vLWJhciBhdHRyaWJ1dGUuXG5mdW5jdGlvbiBwcm9wZXJ0eU5hbWVUb0F0dHJpYnV0ZShwcm9wZXJ0eU5hbWUpIHtcbiAgbGV0IGF0dHJpYnV0ZSA9IHByb3BlcnR5TmFtZXNUb0F0dHJpYnV0ZXNbcHJvcGVydHlOYW1lXTtcbiAgaWYgKCFhdHRyaWJ1dGUpIHtcbiAgICAvLyBDb252ZXJ0IGFuZCBtZW1vaXplLlxuICAgIGNvbnN0IHVwcGVyY2FzZVJlZ0V4ID0gLyhbQS1aXSkvZztcbiAgICBhdHRyaWJ1dGUgPSBwcm9wZXJ0eU5hbWUucmVwbGFjZSh1cHBlcmNhc2VSZWdFeCwgJy0kMScpLnRvTG93ZXJDYXNlKCk7XG4gIH1cbiAgcmV0dXJuIGF0dHJpYnV0ZTtcbn1cbiIsIi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggQ2xpY2tTZWxlY3Rpb24uICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBtYXBzIGEgY2xpY2sgKGFjdHVhbGx5LCBhIG1vdXNlZG93bikgdG8gYSBzZWxlY3Rpb24uXG4gICAqXG4gICAqIFRoaXMgc2ltcGxlIG1peGluIGlzIHVzZWZ1bCBpbiBsaXN0IGJveC1saWtlIGVsZW1lbnRzLCB3aGVyZSBhIGNsaWNrIG9uIGFcbiAgICogbGlzdCBpdGVtIGltcGxpY2l0bHkgc2VsZWN0cyBpdC5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIHRoZSBjb21wb25lbnQgdG8gcHJvdmlkZSBhbiBgaXRlbXNgIHByb3BlcnR5LiBZb3UgY2FuXG4gICAqIHByb3ZpZGUgdGhhdCBwcm9wZXJ0eSB5b3Vyc2VsZiwgb3IgdXNlIHRoZVxuICAgKiBbQ29udGVudEFzSXRlbXNdKENvbnRlbnRBc0l0ZW1zLm1kKSBtaXhpbi4gVGhpcyBtaXhpbiBhbHNvIGV4cGVjdHMgdGhlXG4gICAqIGNvbXBvbmVudCB0byBkZWZpbmUgYSBgc2VsZWN0ZWRJbmRleGAgcHJvcGVydHkuIFlvdSBjYW4gcHJvdmlkZSB0aGF0XG4gICAqIHlvdXJzZWxmLCBvciB1c2UgdGhlIFtTaW5nbGVTZWxlY3Rpb25dKFNpbmdsZVNlbGVjdGlvbi5tZCkgbWl4aW4uXG4gICAqL1xuICBjbGFzcyBDbGlja1NlbGVjdGlvbiBleHRlbmRzIGJhc2Uge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgLypcbiAgICAgICAqIFJFVklFVzogV2hpY2ggZXZlbnQgc2hvdWxkIHdlIGxpc3RlbiB0byBoZXJlP1xuICAgICAgICpcbiAgICAgICAqIFRoZSBzdGFuZGFyZCB1c2UgZm9yIHRoaXMgbWl4aW4gaXMgaW4gbGlzdCBib3hlcy4gTGlzdCBib3hlcyBkb24ndFxuICAgICAgICogYXBwZWFyIHRvIGJlIGNvbnNpc3RlbnQgd2l0aCByZWdhcmQgdG8gd2hldGhlciB0aGV5IHNlbGVjdCBvbiBtb3VzZWRvd25cbiAgICAgICAqIG9yIGNsaWNrL21vdXNldXAuXG4gICAgICAgKi9cbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZXZlbnQgPT4ge1xuICAgICAgICBzZWxlY3RUYXJnZXQodGhpcywgZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgLy8gTm90ZTogV2UgZG9uJ3QgY2FsbCBwcmV2ZW50RGVmYXVsdCBoZXJlLiBUaGUgZGVmYXVsdCBiZWhhdmlvciBmb3JcbiAgICAgICAgLy8gbW91c2Vkb3duIGluY2x1ZGVzIHNldHRpbmcga2V5Ym9hcmQgZm9jdXMgaWYgdGhlIGVsZW1lbnQgZG9lc24ndFxuICAgICAgICAvLyBhbHJlYWR5IGhhdmUgdGhlIGZvY3VzLCBhbmQgd2Ugd2FudCB0byBwcmVzZXJ2ZSB0aGF0IGJlaGF2aW9yLlxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIERlZmF1bHQgaW1wbGVtZW50YXRpb24uIFRoaXMgd2lsbCB0eXBpY2FsbHkgYmUgaGFuZGxlZCBieSBvdGhlciBtaXhpbnMuXG4gICAgZ2V0IHNlbGVjdGVkSW5kZXgoKSB7XG4gICAgICByZXR1cm4gc3VwZXIuc2VsZWN0ZWRJbmRleDtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGVkSW5kZXgoaW5kZXgpIHtcbiAgICAgIGlmICgnc2VsZWN0ZWRJbmRleCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJbmRleCA9IGluZGV4OyB9XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gQ2xpY2tTZWxlY3Rpb247XG59O1xuXG5cbi8vIFRPRE86IEhhbmRsZSB0aGUgY2FzZSB3aGVyZSBhIGxpc3QgaXRlbSBoYXMgc3ViZWxlbWVudHMuIFdhbGsgdXAgdGhlIERPTVxuLy8gaGllcmFyY2h5IHVudGlsIHdlIGZpbmQgYW4gaXRlbSBpbiB0aGUgbGlzdCwgb3IgY29tZSBiYWNrIHRvIHRoaXMgZWxlbWVudCxcbi8vIGluIHdoaWNoIGNhc2UgdGhlIGVsZW1lbnQgdGhhdCB3YXMgdGFwcGVkIGlzbid0IGFuIGl0ZW0gKGFuZCBzaG91bGQgYmVcbi8vIGlnbm9yZWQpLlxuZnVuY3Rpb24gc2VsZWN0VGFyZ2V0KGVsZW1lbnQsIHRhcmdldCkge1xuICBjb25zdCBpbmRleCA9IGVsZW1lbnQuaXRlbXMgJiYgZWxlbWVudC5pdGVtcy5pbmRleE9mKHRhcmdldCk7XG4gIGlmIChpbmRleCA+PSAwKSB7XG4gICAgZWxlbWVudC5zZWxlY3RlZEluZGV4ID0gaW5kZXg7XG4gIH1cbn1cbiIsIi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggQ29tcG9zYWJsZS4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHRvIG1ha2UgYSBjbGFzcyBtb3JlIGVhc2lseSBjb21wb3NhYmxlIHdpdGggb3RoZXIgbWl4aW5zLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGNvbnRyaWJ1dGVzIGEgYGNvbXBvc2VgIG1ldGhvZCB0aGF0IGFwcGxpZXMgYSBzZXQgb2YgbWl4aW5cbiAgICogZnVuY3Rpb25zIGFuZCByZXR1cm5zIHRoZSByZXN1bHRpbmcgbmV3IGNsYXNzLiBUaGlzIHN1Z2FyIGNhbiBtYWtlIHRoZVxuICAgKiBhcHBsaWNhdGlvbiBvZiBtYW55IG1peGlucyBhdCBvbmNlIGVhc2llciB0byByZWFkLlxuICAgKi9cbiAgY2xhc3MgQ29tcG9zYWJsZSBleHRlbmRzIGJhc2Uge1xuXG4gICAgLyoqXG4gICAgICogQXBwbHkgYSBzZXQgb2YgbWl4aW4gZnVuY3Rpb25zIG9yIG1peGluIG9iamVjdHMgdG8gdGhlIHByZXNlbnQgY2xhc3MgYW5kXG4gICAgICogcmV0dXJuIHRoZSBuZXcgY2xhc3MuXG4gICAgICpcbiAgICAgKiBJbnN0ZWFkIG9mIHdyaXRpbmc6XG4gICAgICpcbiAgICAgKiAgICAgbGV0IE15Q2xhc3MgPSBNaXhpbjEoTWl4aW4yKE1peGluMyhNaXhpbjQoTWl4aW41KEJhc2VDbGFzcykpKSkpO1xuICAgICAqXG4gICAgICogWW91IGNhbiB3cml0ZTpcbiAgICAgKlxuICAgICAqICAgICBsZXQgTXlDbGFzcyA9IENvbXBvc2FibGUoQmFzZUNsYXNzKS5jb21wb3NlKFxuICAgICAqICAgICAgIE1peGluMSxcbiAgICAgKiAgICAgICBNaXhpbjIsXG4gICAgICogICAgICAgTWl4aW4zLFxuICAgICAqICAgICAgIE1peGluNCxcbiAgICAgKiAgICAgICBNaXhpbjVcbiAgICAgKiAgICAgKTtcbiAgICAgKlxuICAgICAqIFRoaXMgZnVuY3Rpb24gY2FuIGFsc28gdGFrZSBtaXhpbiBvYmplY3RzLiBBIG1peGluIG9iamVjdCBpcyBqdXN0IGFcbiAgICAgKiBzaG9ydGhhbmQgZm9yIGEgbWl4aW4gZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGEgbmV3IHN1YmNsYXNzIHdpdGggdGhlIGdpdmVuXG4gICAgICogbWVtYmVycy4gVGhlIG1peGluIG9iamVjdCdzIG1lbWJlcnMgYXJlICpub3QqIGNvcGllZCBkaXJlY3RseSBvbnRvIHRoZVxuICAgICAqIHByb3RvdHlwZSBvZiB0aGUgYmFzZSBjbGFzcywgYXMgd2l0aCB0cmFkaXRpb25hbCBtaXhpbnMuXG4gICAgICpcbiAgICAgKiBJbiBhZGRpdGlvbiB0byBwcm92aWRpbmcgc3ludGFjdGljIHN1Z2FyLCB0aGlzIG1peGluIGNhbiBiZSB1c2VkIHRvXG4gICAgICogZGVmaW5lIGEgY2xhc3MgaW4gRVM1LCB3aGljaCBsYWNrcyBFUzYncyBgY2xhc3NgIGtleXdvcmQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gey4uLm1peGluc30gbWl4aW5zIC0gQSBzZXQgb2YgbWl4aW4gZnVuY3Rpb25zIG9yIG9iamVjdHMgdG8gYXBwbHkuXG4gICAgICovXG4gICAgc3RhdGljIGNvbXBvc2UoLi4ubWl4aW5zKSB7XG4gICAgICAvLyBXZSBjcmVhdGUgYSBuZXcgc3ViY2xhc3MgZm9yIGVhY2ggbWl4aW4gaW4gdHVybi4gVGhlIHJlc3VsdCBiZWNvbWVzXG4gICAgICAvLyB0aGUgYmFzZSBjbGFzcyBleHRlbmRlZCBieSBhbnkgc3Vic2VxdWVudCBtaXhpbnMuIEl0IHR1cm5zIG91dCB0aGF0XG4gICAgICAvLyB3ZSBjYW4gdXNlIEFycmF5LnJlZHVjZSgpIHRvIGNvbmNpc2VseSBleHByZXNzIHRoaXMsIHVzaW5nIHRoZSBjdXJyZW50XG4gICAgICAvLyBvYmplY3QgYXMgdGhlIHNlZWQgZm9yIHJlZHVjZSgpLlxuICAgICAgcmV0dXJuIG1peGlucy5yZWR1Y2UoY29tcG9zZUNsYXNzLCB0aGlzKTtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBDb21wb3NhYmxlO1xufTtcblxuXG4vLyBQcm9wZXJ0aWVzIGRlZmluZWQgYnkgT2JqZWN0IHRoYXQgd2UgZG9uJ3Qgd2FudCB0byBtaXhpbi5cbmNvbnN0IE5PTl9NSVhBQkxFX09CSkVDVF9QUk9QRVJUSUVTID0gW1xuICAnY29uc3RydWN0b3InXG5dO1xuXG4vKlxuICogQXBwbHkgdGhlIG1peGluIHRvIHRoZSBnaXZlbiBiYXNlIGNsYXNzIHRvIHJldHVybiBhIG5ldyBjbGFzcy5cbiAqIFRoZSBtaXhpbiBjYW4gZWl0aGVyIGJlIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBtb2RpZmllZCBjbGFzcywgb3IgYVxuICogcGxhaW4gb2JqZWN0IHdob3NlIG1lbWJlcnMgd2lsbCBiZSBjb3BpZWQgdG8gdGhlIG5ldyBjbGFzcycgcHJvdG90eXBlLlxuICovXG5mdW5jdGlvbiBjb21wb3NlQ2xhc3MoYmFzZSwgbWl4aW4pIHtcbiAgaWYgKHR5cGVvZiBtaXhpbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIE1peGluIGZ1bmN0aW9uXG4gICAgcmV0dXJuIG1peGluKGJhc2UpO1xuICB9IGVsc2Uge1xuICAgIC8vIE1peGluIG9iamVjdFxuICAgIGNsYXNzIFN1YmNsYXNzIGV4dGVuZHMgYmFzZSB7fVxuICAgIGNvcHlPd25Qcm9wZXJ0aWVzKG1peGluLCBTdWJjbGFzcy5wcm90b3R5cGUsIE5PTl9NSVhBQkxFX09CSkVDVF9QUk9QRVJUSUVTKTtcbiAgICByZXR1cm4gU3ViY2xhc3M7XG4gIH1cbn1cblxuXG4vKlxuICogQ29weSB0aGUgZ2l2ZW4gcHJvcGVydGllcy9tZXRob2RzIHRvIHRoZSB0YXJnZXQuXG4gKiBSZXR1cm4gdGhlIHVwZGF0ZWQgdGFyZ2V0LlxuICovXG5mdW5jdGlvbiBjb3B5T3duUHJvcGVydGllcyhzb3VyY2UsIHRhcmdldCwgaWdub3JlUHJvcGVydHlOYW1lcyA9IFtdKSB7XG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZSkuZm9yRWFjaChuYW1lID0+IHtcbiAgICBpZiAoaWdub3JlUHJvcGVydHlOYW1lcy5pbmRleE9mKG5hbWUpIDwgMCkge1xuICAgICAgY29uc3QgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBuYW1lKTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB0YXJnZXQ7XG59XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4vY3JlYXRlU3ltYm9sJztcbmltcG9ydCB0b2dnbGVDbGFzcyBmcm9tICcuL3RvZ2dsZUNsYXNzJztcbmltcG9ydCBzeW1ib2xzIGZyb20gJy4vc3ltYm9scyc7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IGl0ZW1zU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdpdGVtcycpO1xuY29uc3QgaXRlbUluaXRpYWxpemVkU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdpdGVtSW5pdGlhbGl6ZWQnKTtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIENvbnRlbnRBc0l0ZW1zLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggbWFwcyBjb250ZW50IHNlbWFudGljcyAoZWxlbWVudHMpIHRvIGxpc3QgaXRlbSBzZW1hbnRpY3MuXG4gICAqXG4gICAqIEl0ZW1zIGRpZmZlciBmcm9tIGVsZW1lbnQgY29udGVudHMgaW4gc2V2ZXJhbCB3YXlzOlxuICAgKlxuICAgKiAqIFRoZXkgYXJlIG9mdGVuIHJlZmVyZW5jZWQgdmlhIGluZGV4LlxuICAgKiAqIFRoZXkgbWF5IGhhdmUgYSBzZWxlY3Rpb24gc3RhdGUuXG4gICAqICogSXQncyBjb21tb24gdG8gZG8gd29yayB0byBpbml0aWFsaXplIHRoZSBhcHBlYXJhbmNlIG9yIHN0YXRlIG9mIGEgbmV3XG4gICAqICAgaXRlbS5cbiAgICogKiBBdXhpbGlhcnkgaW52aXNpYmxlIGNoaWxkIGVsZW1lbnRzIGFyZSBmaWx0ZXJlZCBvdXQgYW5kIG5vdCBjb3VudGVkIGFzXG4gICAqICAgaXRlbXMuIEF1eGlsaWFyeSBlbGVtZW50cyBpbmNsdWRlIGxpbmssIHNjcmlwdCwgc3R5bGUsIGFuZCB0ZW1wbGF0ZVxuICAgKiAgIGVsZW1lbnRzLiBUaGlzIGZpbHRlcmluZyBlbnN1cmVzIHRoYXQgdGhvc2UgYXV4aWxpYXJ5IGVsZW1lbnRzIGNhbiBiZVxuICAgKiAgIHVzZWQgaW4gbWFya3VwIGluc2lkZSBvZiBhIGxpc3Qgd2l0aG91dCBiZWluZyB0cmVhdGVkIGFzIGxpc3QgaXRlbXMuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyBhIGNvbXBvbmVudCB0byBwcm92aWRlIGEgYGNvbnRlbnRgIHByb3BlcnR5IHJldHVybmluZyBhXG4gICAqIHJhdyBzZXQgb2YgZWxlbWVudHMuIFlvdSBjYW4gcHJvdmlkZSB0aGF0IHlvdXJzZWxmLCBvciB1c2UgdGhlXG4gICAqIFtEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50XShEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50Lm1kKSBtaXhpbi5cbiAgICpcbiAgICogVGhlIG1vc3QgY29tbW9ubHkgcmVmZXJlbmNlZCBwcm9wZXJ0eSBkZWZpbmVkIGJ5IHRoaXMgbWl4aW4gaXMgdGhlIGBpdGVtc2BcbiAgICogcHJvcGVydHkuIFRvIGF2b2lkIGhhdmluZyB0byBkbyB3b3JrIGVhY2ggdGltZSB0aGF0IHByb3BlcnR5IGlzIHJlcXVlc3RlZCxcbiAgICogdGhpcyBtaXhpbiBzdXBwb3J0cyBhbiBvcHRpbWl6ZWQgbW9kZS4gSWYgeW91IGludm9rZSB0aGUgYGNvbnRlbnRDaGFuZ2VkYFxuICAgKiBtZXRob2Qgd2hlbiB0aGUgc2V0IG9mIGl0ZW1zIGNoYW5nZXMsIHRoZSBtaXhpbiBjb25jbHVkZXMgdGhhdCB5b3UnbGwgdGFrZVxuICAgKiBjYXJlIG9mIG5vdGlmeWluZyBpdCBvZiBmdXR1cmUgY2hhbmdlcywgYW5kIHR1cm5zIG9uIHRoZSBvcHRpbWl6YXRpb24uIFdpdGhcbiAgICogdGhhdCBvbiwgdGhlIG1peGluIHNhdmVzIGEgcmVmZXJlbmNlIHRvIHRoZSBjb21wdXRlZCBzZXQgb2YgaXRlbXMsIGFuZCB3aWxsXG4gICAqIHJldHVybiB0aGF0IGltbWVkaWF0ZWx5IG9uIHN1YnNlcXVlbnQgY2FsbHMgdG8gdGhlIGBpdGVtc2AgcHJvcGVydHkuIElmIHlvdVxuICAgKiB1c2UgdGhpcyBtaXhpbiBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZVxuICAgKiBbRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudF0oRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudC5tZCkgbWl4aW4sIHRoZVxuICAgKiBgY29udGVudENoYW5nZWRgIG1ldGhvZCB3aWxsIGJlIGludm9rZWQgZm9yIHlvdSB3aGVuIHRoZSBlbGVtZW50J3MgY2hpbGRyZW5cbiAgICogY2hhbmdlLCB0dXJuaW5nIG9uIHRoZSBvcHRpbWl6YXRpb24gYXV0b21hdGljYWxseS5cbiAgICovXG4gIGNsYXNzIENvbnRlbnRBc0l0ZW1zIGV4dGVuZHMgYmFzZSB7XG5cbiAgICAvKipcbiAgICAgKiBBcHBseSB0aGUgc2VsZWN0aW9uIHN0YXRlIHRvIGEgc2luZ2xlIGl0ZW0uXG4gICAgICpcbiAgICAgKiBJbnZva2UgdGhpcyBtZXRob2QgdG8gc2lnbmFsIHRoYXQgdGhlIHNlbGVjdGVkIHN0YXRlIG9mIHRoZSBpbmRpY2F0ZWQgaXRlbVxuICAgICAqIGhhcyBjaGFuZ2VkLiBCeSBkZWZhdWx0LCB0aGlzIGFwcGxpZXMgYSBgc2VsZWN0ZWRgIENTUyBjbGFzcyBpZiB0aGUgaXRlbVxuICAgICAqIGlzIHNlbGVjdGVkLCBhbmQgcmVtb3ZlZCBpdCBpZiBub3Qgc2VsZWN0ZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpdGVtIC0gVGhlIGl0ZW0gd2hvc2Ugc2VsZWN0aW9uIHN0YXRlIGhhcyBjaGFuZ2VkLlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gc2VsZWN0ZWQgLSBUcnVlIGlmIHRoZSBpdGVtIGlzIHNlbGVjdGVkLCBmYWxzZSBpZiBub3QuXG4gICAgICovXG4gICAgW3N5bWJvbHMuYXBwbHlTZWxlY3Rpb25dKGl0ZW0sIHNlbGVjdGVkKSB7XG4gICAgICBpZiAoc3VwZXJbc3ltYm9scy5hcHBseVNlbGVjdGlvbl0pIHsgc3VwZXJbc3ltYm9scy5hcHBseVNlbGVjdGlvbl0oaXRlbSwgc2VsZWN0ZWQpOyB9XG4gICAgICB0b2dnbGVDbGFzcyhpdGVtLCAnc2VsZWN0ZWQnLCBzZWxlY3RlZCk7XG4gICAgfVxuXG4gICAgY29udGVudENoYW5nZWQoKSB7XG4gICAgICBpZiAoc3VwZXIuY29udGVudENoYW5nZWQpIHsgc3VwZXIuY29udGVudENoYW5nZWQoKTsgfVxuXG4gICAgICAvLyBTaW5jZSB3ZSBnb3QgdGhlIGNvbnRlbnRDaGFuZ2VkIGNhbGwsIHdlJ2xsIGFzc3VtZSB3ZSdsbCBiZSBub3RpZmllZCBpZlxuICAgICAgLy8gdGhlIHNldCBvZiBpdGVtcyBjaGFuZ2VzIGxhdGVyLiBXZSB0dXJuIG9uIG1lbW9pemF0aW9uIG9mIHRoZSBpdGVtc1xuICAgICAgLy8gcHJvcGVydHkgYnkgc2V0dGluZyBvdXIgaW50ZXJuYWwgcHJvcGVydHkgdG8gbnVsbCAoaW5zdGVhZCBvZlxuICAgICAgLy8gdW5kZWZpbmVkKS5cbiAgICAgIHRoaXNbaXRlbXNTeW1ib2xdID0gbnVsbDtcblxuICAgICAgdGhpcy5pdGVtc0NoYW5nZWQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIHdoZW5ldmVyIGEgbmV3IGl0ZW0gaXMgYWRkZWQgdG8gdGhlIGxpc3QuXG4gICAgICpcbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuIFlvdSBjYW4gb3ZlcnJpZGVcbiAgICAgKiB0aGlzIHRvIHBlcmZvcm0gcGVyLWl0ZW0gaW5pdGlhbGl6YXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpdGVtIC0gVGhlIGl0ZW0gdGhhdCB3YXMgYWRkZWQuXG4gICAgICovXG4gICAgW3N5bWJvbHMuaXRlbUFkZGVkXShpdGVtKSB7XG4gICAgICBpZiAoc3VwZXJbc3ltYm9scy5pdGVtQWRkZWRdKSB7IHN1cGVyW3N5bWJvbHMuaXRlbUFkZGVkXShpdGVtKTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IHNldCBvZiBpdGVtcyBpbiB0aGUgbGlzdC4gU2VlIHRoZSB0b3AtbGV2ZWwgZG9jdW1lbnRhdGlvbiBmb3JcbiAgICAgKiBtaXhpbiBmb3IgYSBkZXNjcmlwdGlvbiBvZiBob3cgaXRlbXMgZGlmZmVyIGZyb20gcGxhaW4gY29udGVudC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudFtdfVxuICAgICAqL1xuICAgIGdldCBpdGVtcygpIHtcbiAgICAgIGxldCBpdGVtcztcbiAgICAgIGlmICh0aGlzW2l0ZW1zU3ltYm9sXSA9PSBudWxsKSB7XG4gICAgICAgIGl0ZW1zID0gZmlsdGVyQXV4aWxpYXJ5RWxlbWVudHModGhpcy5jb250ZW50KTtcbiAgICAgICAgLy8gTm90ZTogdGVzdCBmb3IgKmVxdWFsaXR5KiB3aXRoIG51bGw7IGRvbid0IHRyZWF0IHVuZGVmaW5lZCBhcyBhIG1hdGNoLlxuICAgICAgICBpZiAodGhpc1tpdGVtc1N5bWJvbF0gPT09IG51bGwpIHtcbiAgICAgICAgICAvLyBNZW1vaXplIHRoZSBzZXQgb2YgaXRlbXMuXG4gICAgICAgICAgdGhpc1tpdGVtc1N5bWJvbF0gPSBpdGVtcztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUmV0dXJuIHRoZSBtZW1vaXplZCBpdGVtcy5cbiAgICAgICAgaXRlbXMgPSB0aGlzW2l0ZW1zU3ltYm9sXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpdGVtcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIHdoZW4gdGhlIHVuZGVybHlpbmcgY29udGVudHMgY2hhbmdlLiBJdCBpcyBhbHNvXG4gICAgICogaW52b2tlZCBvbiBjb21wb25lbnQgaW5pdGlhbGl6YXRpb24g4oCTIHNpbmNlIHRoZSBpdGVtcyBoYXZlIFwiY2hhbmdlZFwiIGZyb21cbiAgICAgKiBiZWluZyBub3RoaW5nLlxuICAgICAqL1xuICAgIGl0ZW1zQ2hhbmdlZCgpIHtcbiAgICAgIGlmIChzdXBlci5pdGVtc0NoYW5nZWQpIHsgc3VwZXIuaXRlbXNDaGFuZ2VkKCk7IH1cblxuICAgICAgLy8gUGVyZm9ybSBwZXItaXRlbSBpbml0aWFsaXphdGlvbi5cbiAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaWYgKCFpdGVtW2l0ZW1Jbml0aWFsaXplZFN5bWJvbF0pIHtcbiAgICAgICAgICB0aGlzW3N5bWJvbHMuaXRlbUFkZGVkXShpdGVtKTtcbiAgICAgICAgICBpdGVtW2l0ZW1Jbml0aWFsaXplZFN5bWJvbF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnaXRlbXMtY2hhbmdlZCcpKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEBldmVudCBpdGVtcy1jaGFuZ2VkXG4gICAgICpcbiAgICAgKiBUaGlzIGV2ZW50IGlzIHJhaXNlZCB3aGVuIHRoZSBzZXQgb2YgaXRlbXMgY2hhbmdlcy5cbiAgICAgKi9cbiAgfVxuXG4gIHJldHVybiBDb250ZW50QXNJdGVtcztcbn07XG5cblxuLy8gUmV0dXJuIHRoZSBnaXZlbiBlbGVtZW50cywgZmlsdGVyaW5nIG91dCBhdXhpbGlhcnkgZWxlbWVudHMgdGhhdCBhcmVuJ3Rcbi8vIHR5cGljYWxseSB2aXNpYmxlLiBJdGVtcyB3aGljaCBhcmUgbm90IGVsZW1lbnRzIGFyZSByZXR1cm5lZCBhcyBpcy5cbmZ1bmN0aW9uIGZpbHRlckF1eGlsaWFyeUVsZW1lbnRzKGl0ZW1zKSB7XG4gIGNvbnN0IGF1eGlsaWFyeVRhZ3MgPSBbXG4gICAgJ2xpbmsnLFxuICAgICdzY3JpcHQnLFxuICAgICdzdHlsZScsXG4gICAgJ3RlbXBsYXRlJ1xuICBdO1xuICByZXR1cm4gW10uZmlsdGVyLmNhbGwoaXRlbXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICByZXR1cm4gIWl0ZW0ubG9jYWxOYW1lIHx8IGF1eGlsaWFyeVRhZ3MuaW5kZXhPZihpdGVtLmxvY2FsTmFtZSkgPCAwO1xuICB9KTtcbn1cblxuXG4vKipcbiAqIEZpcmVzIHdoZW4gdGhlIGl0ZW1zIGluIHRoZSBsaXN0IGNoYW5nZS5cbiAqXG4gKiBAbWVtYmVyb2YgQ29udGVudEFzSXRlbXNcbiAqIEBldmVudCBpdGVtcy1jaGFuZ2VkXG4gKi9cbiIsImltcG9ydCBzeW1ib2xzIGZyb20gJy4vc3ltYm9scyc7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBEaXJlY3Rpb25TZWxlY3Rpb24uICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBtYXBzIGRpcmVjdGlvbiBzZW1hbnRpY3MgKGdvTGVmdCwgZ29SaWdodCwgZXRjLikgdG8gc2VsZWN0aW9uXG4gICAqIHNlbWFudGljcyAoc2VsZWN0UHJldmlvdXMsIHNlbGVjdE5leHQsIGV0Yy4pLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGNhbiBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggdGhlXG4gICAqIFtLZXlib2FyZERpcmVjdGlvbl0oS2V5Ym9hcmREaXJlY3Rpb24ubWQpIG1peGluICh3aGljaCBtYXBzIGtleWJvYXJkIGV2ZW50c1xuICAgKiB0byBkaXJlY3Rpb25zKSBhbmQgYSBtaXhpbiB0aGF0IGhhbmRsZXMgc2VsZWN0aW9uIGxpa2VcbiAgICogW1NpbmdsZVNlbGVjdGlvbl0oU2luZ2xlU2VsZWN0aW9uLm1kKS5cbiAgICovXG4gIGNsYXNzIERpcmVjdGlvblNlbGVjdGlvbiBleHRlbmRzIGJhc2Uge1xuXG4gICAgW3N5bWJvbHMuZ29Eb3duXSgpIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLmdvRG93bl0pIHsgc3VwZXJbc3ltYm9scy5nb0Rvd25dKCk7IH1cbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdE5leHQoKTtcbiAgICB9XG5cbiAgICBbc3ltYm9scy5nb0VuZF0oKSB7XG4gICAgICBpZiAoc3VwZXJbc3ltYm9scy5nb0VuZF0pIHsgc3VwZXJbc3ltYm9scy5nb0VuZF0oKTsgfVxuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0TGFzdCgpO1xuICAgIH1cblxuICAgIFtzeW1ib2xzLmdvTGVmdF0oKSB7XG4gICAgICBpZiAoc3VwZXJbc3ltYm9scy5nb0xlZnRdKSB7IHN1cGVyW3N5bWJvbHMuZ29MZWZ0XSgpOyB9XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RQcmV2aW91cygpO1xuICAgIH1cblxuICAgIFtzeW1ib2xzLmdvUmlnaHRdKCkge1xuICAgICAgaWYgKHN1cGVyW3N5bWJvbHMuZ29SaWdodF0pIHsgc3VwZXJbc3ltYm9scy5nb1JpZ2h0XSgpOyB9XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3ROZXh0KCk7XG4gICAgfVxuXG4gICAgW3N5bWJvbHMuZ29TdGFydF0oKSB7XG4gICAgICBpZiAoc3VwZXJbc3ltYm9scy5nb1N0YXJ0XSkgeyBzdXBlcltzeW1ib2xzLmdvU3RhcnRdKCk7IH1cbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdEZpcnN0KCk7XG4gICAgfVxuXG4gICAgW3N5bWJvbHMuZ29VcF0oKSB7XG4gICAgICBpZiAoc3VwZXJbc3ltYm9scy5nb1VwXSkgeyBzdXBlcltzeW1ib2xzLmdvVXBdKCk7IH1cbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdFByZXZpb3VzKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCBpbXBsZW1lbnRhdGlvbi4gVGhpcyB3aWxsIHR5cGljYWxseSBiZSBoYW5kbGVkIGJ5IG90aGVyIG1peGlucy5cbiAgICBnZXQgc2VsZWN0ZWRGcmFjdGlvbigpIHtcbiAgICAgIHJldHVybiBzdXBlci5zZWxlY3RlZEZyYWN0aW9uO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0ZWRGcmFjdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKCdzZWxlY3RlZEZyYWN0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEZyYWN0aW9uID0gdmFsdWU7IH1cbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IGltcGxlbWVudGF0aW9uLiBUaGlzIHdpbGwgdHlwaWNhbGx5IGJlIGhhbmRsZWQgYnkgb3RoZXIgbWl4aW5zLlxuICAgIHNlbGVjdEZpcnN0KCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdEZpcnN0KSB7IHJldHVybiBzdXBlci5zZWxlY3RGaXJzdCgpOyB9XG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCBpbXBsZW1lbnRhdGlvbi4gVGhpcyB3aWxsIHR5cGljYWxseSBiZSBoYW5kbGVkIGJ5IG90aGVyIG1peGlucy5cbiAgICBzZWxlY3RMYXN0KCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdExhc3QpIHsgcmV0dXJuIHN1cGVyLnNlbGVjdExhc3QoKTsgfVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgaW1wbGVtZW50YXRpb24uIFRoaXMgd2lsbCB0eXBpY2FsbHkgYmUgaGFuZGxlZCBieSBvdGhlciBtaXhpbnMuXG4gICAgc2VsZWN0TmV4dCgpIHtcbiAgICAgIGlmIChzdXBlci5zZWxlY3ROZXh0KSB7IHJldHVybiBzdXBlci5zZWxlY3ROZXh0KCk7IH1cbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IGltcGxlbWVudGF0aW9uLiBUaGlzIHdpbGwgdHlwaWNhbGx5IGJlIGhhbmRsZWQgYnkgb3RoZXIgbWl4aW5zLlxuICAgIHNlbGVjdFByZXZpb3VzKCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdFByZXZpb3VzKSB7IHJldHVybiBzdXBlci5zZWxlY3RQcmV2aW91cygpOyB9XG4gICAgfVxuXG4gICAgLy8gTWFwIGRyYWcgdHJhdmVsIGZyYWN0aW9uIHRvIHNlbGVjdGlvbiBmcmFjdGlvbi5cbiAgICBnZXQgdHJhdmVsRnJhY3Rpb24oKSB7XG4gICAgICByZXR1cm4gc3VwZXIudHJhdmVsRnJhY3Rpb247XG4gICAgfVxuICAgIHNldCB0cmF2ZWxGcmFjdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKCd0cmF2ZWxGcmFjdGlvbicgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIudHJhdmVsRnJhY3Rpb24gPSB2YWx1ZTsgfVxuICAgICAgdGhpcy5zZWxlY3RlZEZyYWN0aW9uID0gdmFsdWU7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gRGlyZWN0aW9uU2VsZWN0aW9uO1xufTtcbiIsIi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggRGlzdHJpYnV0ZWRDaGlsZHJlbi4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIGRlZmluZXMgaGVscGVycyBmb3IgYWNjZXNzaW5nIGEgY29tcG9uZW50J3MgZGlzdHJpYnV0ZWRcbiAgICogY2hpbGRyZW4gYXMgYSBmbGF0dGVuZWQgYXJyYXkgb3Igc3RyaW5nLlxuICAgKlxuICAgKiBUaGUgc3RhbmRhcmQgRE9NIEFQSSBwcm92aWRlcyBzZXZlcmFsIHdheXMgb2YgYWNjZXNzaW5nIGNoaWxkIGNvbnRlbnQ6XG4gICAqIGBjaGlsZHJlbmAsIGBjaGlsZE5vZGVzYCwgYW5kIGB0ZXh0Q29udGVudGAuIE5vbmUgb2YgdGhlc2UgZnVuY3Rpb25zIGFyZVxuICAgKiBTaGFkb3cgRE9NIGF3YXJlLiBUaGlzIG1peGluIGRlZmluZXMgdmFyaWF0aW9ucyBvZiB0aG9zZSBmdW5jdGlvbnMgdGhhdFxuICAgKiAqYXJlKiBTaGFkb3cgRE9NIGF3YXJlLlxuICAgKlxuICAgKiBFeGFtcGxlOiB5b3UgY3JlYXRlIGEgY29tcG9uZW50IGA8Y291bnQtY2hpbGRyZW4+YCB0aGF0IGRpc3BsYXlzIGEgbnVtYmVyXG4gICAqIGVxdWFsIHRvIHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gcGxhY2VkIGluc2lkZSB0aGF0IGNvbXBvbmVudC4gSWYgc29tZW9uZVxuICAgKiBpbnN0YW50aWF0ZXMgeW91ciBjb21wb25lbnQgbGlrZTpcbiAgICpcbiAgICogICAgIDxjb3VudC1jaGlsZHJlbj5cbiAgICogICAgICAgPGRpdj48L2Rpdj5cbiAgICogICAgICAgPGRpdj48L2Rpdj5cbiAgICogICAgICAgPGRpdj48L2Rpdj5cbiAgICogICAgIDwvY291bnQtY2hpbGRyZW4+XG4gICAqXG4gICAqIFRoZW4gdGhlIGNvbXBvbmVudCBzaG91bGQgc2hvdyBcIjNcIiwgYmVjYXVzZSB0aGVyZSBhcmUgdGhyZWUgY2hpbGRyZW4uIFRvXG4gICAqIGNhbGN1bGF0ZSB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuLCB0aGUgY29tcG9uZW50IGNhbiBqdXN0IGNhbGN1bGF0ZVxuICAgKiBgdGhpcy5jaGlsZHJlbi5sZW5ndGhgLiBIb3dldmVyLCBzdXBwb3NlIHNvbWVvbmUgaW5zdGFudGlhdGVzIHlvdXJcbiAgICogY29tcG9uZW50IGluc2lkZSBvbmUgb2YgdGhlaXIgb3duIGNvbXBvbmVudHMsIGFuZCBwdXRzIGEgYDxzbG90PmAgZWxlbWVudFxuICAgKiBpbnNpZGUgeW91ciBjb21wb25lbnQ6XG4gICAqXG4gICAqICAgICA8Y291bnQtY2hpbGRyZW4+XG4gICAqICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICogICAgIDwvY291bnQtY2hpbGRyZW4+XG4gICAqXG4gICAqIElmIHlvdXIgY29tcG9uZW50IG9ubHkgbG9va3MgYXQgYHRoaXMuY2hpbGRyZW5gLCBpdCB3aWxsIGFsd2F5cyBzZWUgZXhhY3RseVxuICAgKiBvbmUgY2hpbGQg4oCUwqB0aGUgYDxzbG90PmAgZWxlbWVudC4gQnV0IHRoZSB1c2VyIGxvb2tpbmcgYXQgdGhlIHBhZ2Ugd2lsbFxuICAgKiAqc2VlKiBhbnkgbm9kZXMgZGlzdHJpYnV0ZWQgdG8gdGhhdCBzbG90LiBUbyBtYXRjaCB3aGF0IHRoZSB1c2VyIHNlZXMsIHlvdXJcbiAgICogY29tcG9uZW50IHNob3VsZCBleHBhbmQgYW55IGA8c2xvdD5gIGVsZW1lbnRzIGl0IGNvbnRhaW5zLlxuICAgKlxuICAgKiBUaGF0IGlzIHRoZSBwcm9ibGVtIHRoaXMgbWl4aW4gc29sdmVzLiBBZnRlciBhcHBseWluZyB0aGlzIG1peGluLCB5b3VyXG4gICAqIGNvbXBvbmVudCBjb2RlIGhhcyBhY2Nlc3MgdG8gYHRoaXMuZGlzdHJpYnV0ZWRDaGlsZHJlbmAsIHdob3NlIGBsZW5ndGhgXG4gICAqIHdpbGwgcmV0dXJuIHRoZSB0b3RhbCBudW1iZXIgb2YgYWxsIGNoaWxkcmVuIGRpc3RyaWJ1dGVkIHRvIHlvdXIgY29tcG9uZW50XG4gICAqIGluIHRoZSBjb21wb3NlZCB0cmVlLlxuICAgKlxuICAgKiBOb3RlOiBUaGUgbGF0ZXN0IEN1c3RvbSBFbGVtZW50cyBBUEkgZGVzaWduIGNhbGxzIGZvciBhIG5ldyBmdW5jdGlvbixcbiAgICogYGdldEFzc2lnbmVkTm9kZXNgIHRoYXQgdGFrZXMgYW4gb3B0aW9uYWwgYGRlZXBgIHBhcmFtZXRlciwgdGhhdCB3aWxsIHNvbHZlXG4gICAqIHRoaXMgcHJvYmxlbSBhdCB0aGUgQVBJIGxldmVsLlxuICAgKi9cbiAgY2xhc3MgRGlzdHJpYnV0ZWRDaGlsZHJlbiBleHRlbmRzIGJhc2Uge1xuXG4gICAgLyoqXG4gICAgICogQW4gaW4tb3JkZXIgY29sbGVjdGlvbiBvZiBkaXN0cmlidXRlZCBjaGlsZHJlbiwgZXhwYW5kaW5nIGFueSBzbG90XG4gICAgICogZWxlbWVudHMuIExpa2UgdGhlIHN0YW5kYXJkIGNoaWxkcmVuIHByb3BlcnR5LCB0aGlzIHNraXBzIHRleHQgbm9kZXMuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnRbXX1cbiAgICAgKi9cbiAgICBnZXQgZGlzdHJpYnV0ZWRDaGlsZHJlbigpIHtcbiAgICAgIHJldHVybiBleHBhbmRDb250ZW50RWxlbWVudHModGhpcy5jaGlsZHJlbiwgZmFsc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFuIGluLW9yZGVyIGNvbGxlY3Rpb24gb2YgZGlzdHJpYnV0ZWQgY2hpbGQgbm9kZXMsIGV4cGFuZGluZyBhbnkgc2xvdFxuICAgICAqIGVsZW1lbnRzLiBMaWtlIHRoZSBzdGFuZGFyZCBjaGlsZE5vZGVzIHByb3BlcnR5LCB0aGlzIGluY2x1ZGVzIHRleHRcbiAgICAgKiBub2Rlcy5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtOb2RlW119XG4gICAgICovXG4gICAgZ2V0IGRpc3RyaWJ1dGVkQ2hpbGROb2RlcygpIHtcbiAgICAgIHJldHVybiBleHBhbmRDb250ZW50RWxlbWVudHModGhpcy5jaGlsZE5vZGVzLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29uY2F0ZW5hdGVkIHRleHQgY29udGVudCBvZiBhbGwgZGlzdHJpYnV0ZWQgY2hpbGQgbm9kZXMsIGV4cGFuZGluZ1xuICAgICAqIGFueSBzbG90IGVsZW1lbnRzLlxuICAgICAqXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXQgZGlzdHJpYnV0ZWRUZXh0Q29udGVudCgpIHtcbiAgICAgIGNvbnN0IHN0cmluZ3MgPSB0aGlzLmRpc3RyaWJ1dGVkQ2hpbGROb2Rlcy5tYXAoZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkLnRleHRDb250ZW50O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gc3RyaW5ncy5qb2luKCcnKTtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBEaXN0cmlidXRlZENoaWxkcmVuO1xufTtcblxuXG4vKlxuICogR2l2ZW4gYSBhcnJheSBvZiBub2RlcywgcmV0dXJuIGEgbmV3IGFycmF5IHdpdGggYW55IGNvbnRlbnQgZWxlbWVudHMgZXhwYW5kZWRcbiAqIHRvIHRoZSBub2RlcyBkaXN0cmlidXRlZCB0byB0aGF0IGNvbnRlbnQgZWxlbWVudC4gVGhpcyBydWxlIGlzIGFwcGxpZWRcbiAqIHJlY3Vyc2l2ZWx5LlxuICpcbiAqIElmIGluY2x1ZGVUZXh0Tm9kZXMgaXMgdHJ1ZSwgdGV4dCBub2RlcyB3aWxsIGJlIGluY2x1ZGVkLCBhcyBpbiB0aGVcbiAqIHN0YW5kYXJkIGNoaWxkTm9kZXMgcHJvcGVydHk7IGJ5IGRlZmF1bHQsIHRoaXMgc2tpcHMgdGV4dCBub2RlcywgbGlrZSB0aGVcbiAqIHN0YW5kYXJkIGNoaWxkcmVuIHByb3BlcnR5LlxuICovXG5mdW5jdGlvbiBleHBhbmRDb250ZW50RWxlbWVudHMobm9kZXMsIGluY2x1ZGVUZXh0Tm9kZXMpIHtcbiAgY29uc3QgZXhwYW5kZWQgPSBBcnJheS5wcm90b3R5cGUubWFwLmNhbGwobm9kZXMsIG5vZGUgPT4ge1xuICAgIC8vIFdlIHdhbnQgdG8gc2VlIGlmIHRoZSBub2RlIGlzIGFuIGluc3RhbmNlb2YgSFRNTFNsb3RFTGVtZW50LCBidXRcbiAgICAvLyB0aGF0IGNsYXNzIHdvbid0IGV4aXN0IGlmIHRoZSBicm93c2VyIHRoYXQgZG9lc24ndCBzdXBwb3J0IG5hdGl2ZVxuICAgIC8vIFNoYWRvdyBET00gYW5kIGlmIHRoZSBTaGFkb3cgRE9NIHBvbHlmaWxsIGhhc24ndCBiZWVuIGxvYWRlZC4gSW5zdGVhZCxcbiAgICAvLyB3ZSBkbyBhIHNpbXBsaXN0aWMgY2hlY2sgdG8gc2VlIGlmIHRoZSB0YWcgbmFtZSBpcyBcInNsb3RcIi5cbiAgICBjb25zdCBpc1Nsb3QgPSB0eXBlb2YgSFRNTFNsb3RFbGVtZW50ICE9PSAndW5kZWZpbmVkJyA/XG4gICAgICBub2RlIGluc3RhbmNlb2YgSFRNTFNsb3RFbGVtZW50IDpcbiAgICAgIG5vZGUubG9jYWxOYW1lID09PSAnc2xvdCc7XG4gICAgaWYgKGlzU2xvdCkge1xuICAgICAgLy8gVXNlIHRoZSBub2RlcyBhc3NpZ25lZCB0byB0aGlzIG5vZGUgaW5zdGVhZC5cbiAgICAgIGNvbnN0IGFzc2lnbmVkTm9kZXMgPSBub2RlLmFzc2lnbmVkTm9kZXMoeyBmbGF0dGVuOiB0cnVlIH0pO1xuICAgICAgcmV0dXJuIGFzc2lnbmVkTm9kZXMgP1xuICAgICAgICBleHBhbmRDb250ZW50RWxlbWVudHMoYXNzaWduZWROb2RlcywgaW5jbHVkZVRleHROb2RlcykgOlxuICAgICAgICBbXTtcbiAgICB9IGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgLy8gUGxhaW4gZWxlbWVudDsgdXNlIGFzIGlzLlxuICAgICAgcmV0dXJuIFtub2RlXTtcbiAgICB9IGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBUZXh0ICYmIGluY2x1ZGVUZXh0Tm9kZXMpIHtcbiAgICAgIC8vIFRleHQgbm9kZS5cbiAgICAgIHJldHVybiBbbm9kZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIENvbW1lbnQsIHByb2Nlc3NpbmcgaW5zdHJ1Y3Rpb24sIGV0Yy47IHNraXAuXG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9KTtcbiAgY29uc3QgZmxhdHRlbmVkID0gW10uY29uY2F0KC4uLmV4cGFuZGVkKTtcbiAgcmV0dXJuIGZsYXR0ZW5lZDtcbn1cbiIsImltcG9ydCBtaWNyb3Rhc2sgZnJvbSAnLi9taWNyb3Rhc2snO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudC4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIGRlZmluZXMgYSBjb21wb25lbnQncyBjb250ZW50IGFzIGl0cyBjaGlsZHJlbiwgZXhwYW5kaW5nIGFueVxuICAgKiBub2RlcyBkaXN0cmlidXRlZCB0byB0aGUgY29tcG9uZW50J3Mgc2xvdHMuXG4gICAqXG4gICAqIFRoaXMgYWxzbyBwcm92aWRlcyBub3RpZmljYXRpb24gb2YgY2hhbmdlcyB0byBhIGNvbXBvbmVudCdzIGNvbnRlbnQuIEl0XG4gICAqIHdpbGwgaW52b2tlIGEgYGNvbnRlbnRDaGFuZ2VkYCBtZXRob2Qgd2hlbiB0aGUgY29tcG9uZW50IGlzIGZpcnN0XG4gICAqIGluc3RhbnRpYXRlZCwgYW5kIHdoZW5ldmVyIGl0cyBkaXN0cmlidXRlZCBjaGlsZHJlbiBjaGFuZ2UuIFRoaXMgaXMgYW5cbiAgICogZWFzeSB3YXkgdG8gc2F0aXNmeSB0aGUgR29sZCBTdGFuZGFyZCBjaGVja2xpc3QgaXRlbSBmb3IgbW9uaXRvcmluZ1xuICAgKiBbQ29udGVudCBDaGFuZ2VzXShodHRwczovL2dpdGh1Yi5jb20vd2ViY29tcG9uZW50cy9nb2xkLXN0YW5kYXJkL3dpa2kvQ29udGVudC1DaGFuZ2VzKS5cbiAgICpcbiAgICogRXhhbXBsZTpcbiAgICpcbiAgICogYGBgXG4gICAqIGxldCBiYXNlID0gRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudChEaXN0cmlidXRlZENoaWxkcmVuKEhUTUxFbGVtZW50KSk7XG4gICAqIGNsYXNzIENvdW50aW5nRWxlbWVudCBleHRlbmRzIGJhc2Uge1xuICAgKlxuICAgKiAgIGNvbnN0cnVjdG9yKCkge1xuICAgKiAgICAgc3VwZXIoKTtcbiAgICogICAgIGxldCByb290ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gICAqICAgICByb290LmlubmVySFRNTCA9IGA8c2xvdD48L3Nsb3Q+YDtcbiAgICogICB9XG4gICAqXG4gICAqICAgY29udGVudENoYW5nZWQoKSB7XG4gICAqICAgICAvLyBDb3VudCB0aGUgY29tcG9uZW50J3MgY2hpbGRyZW4sIGJvdGggaW5pdGlhbGx5IGFuZCB3aGVuIGNoYW5nZWQuXG4gICAqICAgICB0aGlzLmNvdW50ID0gdGhpcy5kaXN0cmlidXRlZENoaWxkcmVuLmxlbmd0aDtcbiAgICogICB9XG4gICAqXG4gICAqIH1cbiAgICogYGBgXG4gICAqXG4gICAqIE5vdGUgdGhhdCBjb250ZW50IGNoYW5nZSBkZXRlY3Rpb24gZGVwZW5kcyB1cG9uIHRoZSBlbGVtZW50IGhhdmluZyBhdCBsZWFzdFxuICAgKiBvbmUgYHNsb3RgIGVsZW1lbnQgaW4gaXRzIHNoYWRvdyBzdWJ0cmVlLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGlzIGludGVuZGVkIGZvciB1c2Ugd2l0aCB0aGVcbiAgICogW0Rpc3RyaWJ1dGVkQ2hpbGRyZW5dKERpc3RyaWJ1dGVkQ2hpbGRyZW4ubWQpIG1peGluLiBTZWUgdGhhdCBtaXhpbiBmb3IgYVxuICAgKiBkaXNjdXNzaW9uIG9mIGhvdyB0aGF0IHdvcmtzLiBUaGlzIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQgbWl4aW5cbiAgICogcHJvdmlkZXMgYW4gZWFzeSB3YXkgb2YgZGVmaW5pbmcgdGhlIFwiY29udGVudFwiIG9mIGEgY29tcG9uZW50IGFzIHRoZVxuICAgKiBjb21wb25lbnQncyBkaXN0cmlidXRlZCBjaGlsZHJlbi4gVGhhdCBpbiB0dXJuIGxldHMgbWl4aW5zIGxpa2VcbiAgICogW0NvbnRlbnRBc0l0ZW1zXShDb250ZW50QXNJdGVtcy5tZCkgbWFuaXB1bGF0ZSB0aGUgY2hpbGRyZW4gYXMgbGlzdCBpdGVtcy5cbiAgICovXG4gIGNsYXNzIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcblxuICAgICAgaWYgKHRoaXMuc2hhZG93Um9vdCkge1xuICAgICAgICAvLyBMaXN0ZW4gdG8gY2hhbmdlcyBvbiBhbGwgc2xvdHMuXG4gICAgICAgIGNvbnN0IHNsb3RzID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3JBbGwoJ3Nsb3QnKTtcbiAgICAgICAgc2xvdHMuZm9yRWFjaChzbG90ID0+IHNsb3QuYWRkRXZlbnRMaXN0ZW5lcignc2xvdGNoYW5nZScsIGV2ZW50ID0+IHtcbiAgICAgICAgICB0aGlzLmNvbnRlbnRDaGFuZ2VkKCk7XG4gICAgICAgIH0pKTtcbiAgICAgIH1cblxuICAgICAgLy8gTWFrZSBhbiBpbml0aWFsIGNhbGwgdG8gY29udGVudENoYW5nZWQoKSBzbyB0aGF0IHRoZSBjb21wb25lbnQgY2FuIGRvXG4gICAgICAvLyBpbml0aWFsaXphdGlvbiB0aGF0IGl0IG5vcm1hbGx5IGRvZXMgd2hlbiBjb250ZW50IGNoYW5nZXMuXG4gICAgICAvL1xuICAgICAgLy8gVGhpcyB3aWxsIGludm9rZSBjb250ZW50Q2hhbmdlZCgpIGhhbmRsZXJzIGluIG90aGVyIG1peGlucy4gSW4gb3JkZXJcbiAgICAgIC8vIHRoYXQgdGhvc2UgbWl4aW5zIGhhdmUgYSBjaGFuY2UgdG8gY29tcGxldGUgdGhlaXIgb3duIGluaXRpYWxpemF0aW9uLFxuICAgICAgLy8gd2UgYWRkIHRoZSBjb250ZW50Q2hhbmdlZCgpIGNhbGwgdG8gdGhlIG1pY3JvdGFzayBxdWV1ZS5cbiAgICAgIG1pY3JvdGFzaygoKSA9PiB0aGlzLmNvbnRlbnRDaGFuZ2VkKCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgY29udGVudHMgb2YgdGhlIGNvbXBvbmVudCAoaW5jbHVkaW5nIGRpc3RyaWJ1dGVkXG4gICAgICogY2hpbGRyZW4pIGhhdmUgY2hhbmdlZC5cbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGFsc28gaW52b2tlZCB3aGVuIGEgY29tcG9uZW50IGlzIGZpcnN0IGluc3RhbnRpYXRlZDsgdGhlXG4gICAgICogY29udGVudHMgaGF2ZSBlc3NlbnRpYWxseSBcImNoYW5nZWRcIiBmcm9tIGJlaW5nIG5vdGhpbmcuIFRoaXMgYWxsb3dzIHRoZVxuICAgICAqIGNvbXBvbmVudCB0byBwZXJmb3JtIGluaXRpYWwgcHJvY2Vzc2luZyBvZiBpdHMgY2hpbGRyZW4uXG4gICAgICovXG4gICAgY29udGVudENoYW5nZWQoKSB7XG4gICAgICBpZiAoc3VwZXIuY29udGVudENoYW5nZWQpIHsgc3VwZXIuY29udGVudENoYW5nZWQoKTsgfVxuICAgICAgY29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2NvbnRlbnQtY2hhbmdlZCcpO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29udGVudCBvZiB0aGlzIGNvbXBvbmVudCwgZGVmaW5lZCB0byBiZSB0aGUgZmxhdHRlbmVkIGFycmF5IG9mXG4gICAgICogY2hpbGRyZW4gZGlzdHJpYnV0ZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudFtdfVxuICAgICAqL1xuICAgIGdldCBjb250ZW50KCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGlzdHJpYnV0ZWRDaGlsZHJlbjtcbiAgICB9XG4gICAgc2V0IGNvbnRlbnQodmFsdWUpIHtcbiAgICAgIGlmICgnY29udGVudCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuY29udGVudCA9IHZhbHVlOyB9XG4gICAgICAvLyBUT0RPOiBTZXQgdGhlIGNoaWxkcmVuIHRvIHRoZSBnaXZlbiB2YWx1ZSAod2hpY2ggc2hvdWxkIGJlIGFuIGFycmF5IG9mXG4gICAgICAvLyBlbGVtZW50cyk/XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBldmVudCBpcyByYWlzZWQgd2hlbiB0aGUgY29tcG9uZW50J3MgY29udGVudHMgKGluY2x1ZGluZyBkaXN0cmlidXRlZFxuICAgICAqIGNoaWxkcmVuKSBoYXZlIGNoYW5nZWQuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudFxuICAgICAqIEBldmVudCBjb250ZW50LWNoYW5nZWRcbiAgICAgKi9cbiAgfVxuXG4gIHJldHVybiBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50O1xufTtcbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi9jcmVhdGVTeW1ib2wnO1xuaW1wb3J0IHNhZmVBdHRyaWJ1dGVzIGZyb20gJy4vc2FmZUF0dHJpYnV0ZXMnO1xuaW1wb3J0IHN5bWJvbHMgZnJvbSAnLi9zeW1ib2xzJztcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3QgZ2VuZXJpY1N5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnZ2VuZXJpYycpO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggR2VuZXJpYy4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIGFsbG93cyBhIGNvbXBvbmVudCB0byBzdXBwb3J0IGEgXCJnZW5lcmljXCIgc3R5bGU6IGEgbWluaW1hbGlzdFxuICAgKiBzdHlsZSB0aGF0IGNhbiBlYXNpbHkgYmUgcmVtb3ZlZCB0byByZXNldCBpdHMgdmlzdWFsIGFwcGVhcmFuY2UgdG8gYVxuICAgKiBiYXNlbGluZSBzdGF0ZS5cbiAgICpcbiAgICogQnkgZGVmYXVsdCwgYSBjb21wb25lbnQgc2hvdWxkIHByb3ZpZGUgYSBtaW5pbWFsIHZpc3VhbCBwcmVzZW50YXRpb24gdGhhdFxuICAgKiBhbGxvd3MgdGhlIGNvbXBvbmVudCB0byBmdW5jdGlvbi4gSG93ZXZlciwgdGhlIG1vcmUgc3R5bGluZyB0aGUgY29tcG9uZW50XG4gICAqIHByb3ZpZGVzIGJ5IGRlZmF1bHQsIHRoZSBoYXJkZXIgaXQgYmVjb21lcyB0byBnZXQgdGhlIGNvbXBvbmVudCB0byBmaXQgaW5cbiAgICogaW4gb3RoZXIgc2V0dGluZ3MuIEVhY2ggQ1NTIHJ1bGUgaGFzIHRvIGJlIG92ZXJyaWRkZW4uIFdvcnNlLCBuZXcgQ1NTIHJ1bGVzXG4gICAqIGFkZGVkIHRvIHRoZSBkZWZhdWx0IHN0eWxlIHdvbid0IGJlIG92ZXJyaWRkZW4gYnkgZGVmYXVsdCwgbWFraW5nIGl0IGhhcmRcbiAgICogdG8ga25vdyB3aGV0aGVyIGEgbmV3IHZlcnNpb24gb2YgYSBjb21wb25lbnQgd2lsbCBzdGlsbCBsb29rIG9rYXkuXG4gICAqXG4gICAqIEFzIGEgY29tcHJvbWlzZSwgdGhlIG1peGluIGRlZmluZXMgYSBgZ2VuZXJpY2AgYXR0cmlidXRlLiBUaGlzIGF0dHJpYnV0ZSBpc1xuICAgKiBub3JtYWxseSBzZXQgYnkgZGVmYXVsdCwgYW5kIHN0eWxlcyBjYW4gYmUgd3JpdHRlbiB0aGF0IGFwcGx5IG9ubHkgd2hlbiB0aGVcbiAgICogZ2VuZXJpYyBhdHRyaWJ1dGUgaXMgc2V0LiBUaGlzIGFsbG93cyB0aGUgY29uc3RydWN0aW9uIG9mIENTUyBydWxlcyB0aGF0XG4gICAqIHdpbGwgb25seSBhcHBseSB0byBnZW5lcmljIGNvbXBvbmVudHMgbGlrZTpcbiAgICpcbiAgICogICAgIDpob3N0KFtnZW5lcmljPVwiXCJdKSB7XG4gICAqICAgICAgIC4uLiBHZW5lcmljIGFwcGVhcmFuY2UgZGVmaW5lZCBoZXJlIC4uLlxuICAgKiAgICAgfVxuICAgKlxuICAgKiBUaGlzIG1ha2VzIGl0IGVhc3kgdG8gcmVtb3ZlIGFsbCBkZWZhdWx0IHN0eWxpbmcg4oCUIHNldCB0aGUgYGdlbmVyaWNgXG4gICAqIGF0dHJpYnV0ZSB0byBmYWxzZSwgYW5kIGFsbCBkZWZhdWx0IHN0eWxpbmcgd2lsbCBiZSByZW1vdmVkLlxuICAgKi9cbiAgY2xhc3MgR2VuZXJpYyBleHRlbmRzIGJhc2Uge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgLy8gU2V0IGRlZmF1bHRzLlxuICAgICAgaWYgKHR5cGVvZiB0aGlzLmdlbmVyaWMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuZ2VuZXJpYyA9IHRoaXNbc3ltYm9scy5kZWZhdWx0c10uZ2VuZXJpYztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUaGlzIG1peGluIGRvZXNuJ3QgYWN0dWFsbHkgcmVzcG9uZCB0byBhdHRyaWJ1dGUgY2hhbmdlcywgYnV0IHJlbGllc1xuICAgIC8vIG9uIHNlcGFyYXRlbHktZGVmaW5lZCBiZWhhdmlvciAoZS5nLiwgaW4gQXR0cmlidXRlTWFyc2hhbGxpbmcpIGZvciB0aGF0LlxuICAgIC8vIFN0aWxsLCB3ZSBuZWVkIGRlZmluZSBhIGJhc2VsaW5lIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayB0aGF0IGRvZXNcbiAgICAvLyBub3RoaW5nLCBpbiBjYXNlIHRoaXMgbWl4aW4gZ2V0cyB1c2VkIG9uIGl0cyBvd24uXG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xuICAgICAgaWYgKHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjaykgeyBzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKTsgfVxuICAgIH1cblxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKSB7IHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7IH1cbiAgICAgIHNhZmVBdHRyaWJ1dGVzLmNvbm5lY3RlZCh0aGlzKTtcbiAgICB9XG5cbiAgICBnZXQgW3N5bWJvbHMuZGVmYXVsdHNdKCkge1xuICAgICAgY29uc3QgZGVmYXVsdHMgPSBzdXBlcltzeW1ib2xzLmRlZmF1bHRzXSB8fCB7fTtcbiAgICAgIGRlZmF1bHRzLmdlbmVyaWMgPSB0cnVlO1xuICAgICAgcmV0dXJuIGRlZmF1bHRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRydWUgaWYgdGhlIGNvbXBvbmVudCB3b3VsZCBsaWtlIHRvIHJlY2VpdmUgZ2VuZXJpYyBzdHlsaW5nLlxuICAgICAqXG4gICAgICogVGhpcyBwcm9wZXJ0eSBpcyB0cnVlIGJ5IGRlZmF1bHQg4oCUwqBzZXQgaXQgdG8gZmFsc2UgdG8gdHVybiBvZmYgYWxsXG4gICAgICogZ2VuZXJpYyBzdHlsZXMuIFRoaXMgbWFrZXMgaXQgZWFzaWVyIHRvIGFwcGx5IGN1c3RvbSBzdHlsaW5nOyB5b3Ugd29uJ3RcbiAgICAgKiBoYXZlIHRvIGV4cGxpY2l0bHkgb3ZlcnJpZGUgc3R5bGluZyB5b3UgZG9uJ3Qgd2FudC5cbiAgICAgKlxuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgICovXG4gICAgZ2V0IGdlbmVyaWMoKSB7XG4gICAgICByZXR1cm4gdGhpc1tnZW5lcmljU3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IGdlbmVyaWModmFsdWUpIHtcbiAgICAgIGNvbnN0IHBhcnNlZCA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgP1xuICAgICAgICBTdHJpbmcodmFsdWUpICE9PSAnZmFsc2UnIDpcbiAgICAgICAgdmFsdWU7XG4gICAgICB0aGlzW2dlbmVyaWNTeW1ib2xdID0gcGFyc2VkO1xuXG4gICAgICBpZiAoJ2dlbmVyaWMnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLmdlbmVyaWMgPSB2YWx1ZTsgfVxuXG4gICAgICAvLyBXZSByb2xsIG91ciBvd24gYXR0cmlidXRlIHNldHRpbmcgc28gdGhhdCBhbiBleHBsaWNpdGx5IGZhbHNlIHZhbHVlXG4gICAgICAvLyBzaG93cyB1cCBhcyBnZW5lcmljPVwiZmFsc2VcIi5cbiAgICAgIGlmIChwYXJzZWQgPT09IGZhbHNlKSB7XG4gICAgICAgIC8vIEV4cGxpY2l0bHkgdXNlIGZhbHNlIHN0cmluZy5cbiAgICAgICAgc2FmZUF0dHJpYnV0ZXMuc2V0QXR0cmlidXRlKHRoaXMsICdnZW5lcmljJywgJ2ZhbHNlJyk7XG4gICAgICB9IGVsc2UgaWYgKHBhcnNlZCA9PSBudWxsKSB7XG4gICAgICAgIC8vIEV4cGxpY2l0bHkgcmVtb3ZlIGF0dHJpYnV0ZS4gKEFsd2F5cyBzYWZlIHRvIGRvIHRoaXMuKVxuICAgICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnZ2VuZXJpYycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVXNlIHRoZSBlbXB0eSBzdHJpbmcgdG8gZ2V0IGF0dHJpYnV0ZSB0byBhcHBlYXIgd2l0aCBubyB2YWx1ZS5cbiAgICAgICAgc2FmZUF0dHJpYnV0ZXMuc2V0QXR0cmlidXRlKHRoaXMsICdnZW5lcmljJywgJycpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIEdlbmVyaWM7XG59O1xuXG5cbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi9jcmVhdGVTeW1ib2wnO1xuaW1wb3J0IHNhZmVBdHRyaWJ1dGVzIGZyb20gJy4vc2FmZUF0dHJpYnV0ZXMnO1xuaW1wb3J0IHN5bWJvbHMgZnJvbSAnLi9zeW1ib2xzJztcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3Qga2V5ZG93bkxpc3RlbmVyU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdrZXlkb3duTGlzdGVuZXInKTtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIEtleWJvYXJkLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggbWFuYWdlcyB0aGUga2V5ZG93biBoYW5kbGluZyBmb3IgYSBjb21wb25lbnQuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gaGFuZGxlcyBzZXZlcmFsIGtleWJvYXJkLXJlbGF0ZWQgZmVhdHVyZXMuXG4gICAqXG4gICAqIEZpcnN0LCBpdCB3aXJlcyB1cCBhIHNpbmdsZSBrZXlkb3duIGV2ZW50IGhhbmRsZXIgdGhhdCBjYW4gYmUgc2hhcmVkIGJ5XG4gICAqIG11bHRpcGxlIG1peGlucyBvbiBhIGNvbXBvbmVudC4gVGhlIGV2ZW50IGhhbmRsZXIgd2lsbCBpbnZva2UgYSBga2V5ZG93bmBcbiAgICogbWV0aG9kIHdpdGggdGhlIGV2ZW50IG9iamVjdCwgYW5kIGFueSBtaXhpbiBhbG9uZyB0aGUgcHJvdG90eXBlIGNoYWluIHRoYXRcbiAgICogd2FudHMgdG8gaGFuZGxlIHRoYXQgbWV0aG9kIGNhbiBkbyBzby5cbiAgICpcbiAgICogSWYgYSBtaXhpbiB3YW50cyB0byBpbmRpY2F0ZSB0aGF0IGtleWJvYXJkIGV2ZW50IGhhcyBiZWVuIGhhbmRsZWQsIGFuZCB0aGF0XG4gICAqIG90aGVyIG1peGlucyBzaG91bGQgKm5vdCogaGFuZGxlIGl0LCB0aGUgbWl4aW4ncyBga2V5ZG93bmAgaGFuZGxlciBzaG91bGRcbiAgICogcmV0dXJuIGEgdmFsdWUgb2YgdHJ1ZS4gVGhlIGNvbnZlbnRpb24gdGhhdCBzZWVtcyB0byB3b3JrIHdlbGwgaXMgdGhhdCBhXG4gICAqIG1peGluIHNob3VsZCBzZWUgaWYgaXQgd2FudHMgdG8gaGFuZGxlIHRoZSBldmVudCBhbmQsIGlmIG5vdCwgdGhlbiBhc2sgdGhlXG4gICAqIHN1cGVyY2xhc3MgdG8gc2VlIGlmIGl0IHdhbnRzIHRvIGhhbmRsZSB0aGUgZXZlbnQuIFRoaXMgaGFzIHRoZSBlZmZlY3Qgb2ZcbiAgICogZ2l2aW5nIHRoZSBtaXhpbiB0aGF0IHdhcyBhcHBsaWVkIGxhc3QgdGhlIGZpcnN0IGNoYW5jZSBhdCBoYW5kbGluZyBhXG4gICAqIGtleWJvYXJkIGV2ZW50LlxuICAgKlxuICAgKiBFeGFtcGxlOlxuICAgKlxuICAgKiAgICAgW3N5bWJvbHMua2V5ZG93bl0oZXZlbnQpIHtcbiAgICogICAgICAgbGV0IGhhbmRsZWQ7XG4gICAqICAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgKiAgICAgICAgIC8vIEhhbmRsZSB0aGUga2V5cyB5b3Ugd2FudCwgc2V0dGluZyBoYW5kbGVkID0gdHJ1ZSBpZiBhcHByb3ByaWF0ZS5cbiAgICogICAgICAgfVxuICAgKiAgICAgICAvLyBQcmVmZXIgbWl4aW4gcmVzdWx0IGlmIGl0J3MgZGVmaW5lZCwgb3RoZXJ3aXNlIHVzZSBiYXNlIHJlc3VsdC5cbiAgICogICAgICAgcmV0dXJuIGhhbmRsZWQgfHwgKHN1cGVyW3N5bWJvbHMua2V5ZG93bl0gJiYgc3VwZXJbc3ltYm9scy5rZXlkb3duXShldmVudCkpO1xuICAgKiAgICAgfVxuICAgKlxuICAgKiBBIHNlY29uZCBmZWF0dXJlIHByb3ZpZGVkIGJ5IHRoaXMgbWl4aW4gaXMgdGhhdCBpdCBpbXBsaWNpdGx5IG1ha2VzIHRoZVxuICAgKiBjb21wb25lbnQgYSB0YWIgc3RvcCBpZiBpdCBpc24ndCBhbHJlYWR5LCBieSBzZXR0aW5nIGB0YWJJbmRleGAgdG8gMC4gVGhpc1xuICAgKiBoYXMgdGhlIGVmZmVjdCBvZiBhZGRpbmcgdGhlIGNvbXBvbmVudCB0byB0aGUgdGFiIG9yZGVyIGluIGRvY3VtZW50IG9yZGVyLlxuICAgKlxuICAgKiBGaW5hbGx5LCB0aGlzIG1peGluIGlzIGRlc2lnbmVkIHRvIHdvcmsgd2l0aCB0aGUgb3B0aW9uYWxcbiAgICogW0NvbGxlY3RpdmVdKENvbGxlY3RpdmUubWQpIGNsYXNzIHZpYSBhIG1peGluIGxpa2VcbiAgICogW1RhcmdldEluQ29sbGVjdGl2ZV0oVGFyZ2V0SW5Db2xsZWN0aXZlLm1kKS4gVGhpcyBhbGxvd3MgYSBzZXQgb2YgcmVsYXRlZFxuICAgKiBjb21wb25lbnQgaW5zdGFuY2VzIHRvIGNvb3BlcmF0aXZlbHkgaGFuZGxlIHRoZSBrZXlib2FyZC4gU2VlIHRoZVxuICAgKiBDb2xsZWN0aXZlIGNsYXNzIGZvciBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3MgS2V5Ym9hcmQgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIC8vIEFzc3VtZSB0aGlzIGNvbXBvbmVudCBpcyBnb2luZyB0byBoYW5kbGUgdGhlIGtleWJvYXJkIG9uIGl0cyBvd24uXG4gICAgICAvLyBSRVZJRVc6IE1vdmUgdG8gY29ubmVjdGVkQ2FsbGJhY2s/XG4gICAgICBzdGFydExpc3RlbmluZ1RvS2V5ZG93bih0aGlzKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIElmIHdlJ3JlIG5vdyB0aGUgb3V0ZXJtb3N0IGVsZW1lbnQgb2YgdGhlIGNvbGxlY3RpdmUsIHNldCB1cCB0byByZWNlaXZlXG4gICAgICoga2V5Ym9hcmQgZXZlbnRzLiBJZiB3ZSdyZSBubyBsb25nZXIgdGhlIG91dGVybW9zdCBlbGVtZW50LCBzdG9wXG4gICAgICogbGlzdGVuaW5nLlxuICAgICAqL1xuICAgIGNvbGxlY3RpdmVDaGFuZ2VkKCkge1xuICAgICAgaWYgKHN1cGVyLmNvbGxlY3RpdmVDaGFuZ2VkKSB7IHN1cGVyLmNvbGxlY3RpdmVDaGFuZ2VkKCk7IH1cblxuICAgICAgaWYgKHRoaXMuY29sbGVjdGl2ZS5vdXRlcm1vc3RFbGVtZW50ICE9PSB0aGlzKSB7XG4gICAgICAgIC8vIFdlJ3JlIG5vIGxvbmdlciB0aGUgb3V0ZXJtb3N0IGVsZW1lbnQ7IHN0b3AgbGlzdGVuaW5nLlxuICAgICAgICBpZiAoaXNMaXN0ZW5pbmdUb0tleWRvd24odGhpcykpIHtcbiAgICAgICAgICBzdG9wTGlzdGVuaW5nVG9LZXlkb3duKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgIC8vIFNpbmNlIHdlJ3JlIGdvaW5nIHRvIGhhbmRsZSB0aGUga2V5Ym9hcmQsIHNlZSBpZiB3ZSBjYW4gYWRvcHQgYW4gQVJJQVxuICAgICAgICAvLyBsYWJlbCBmcm9tIGFuIGlubmVyIGVsZW1lbnQgb2YgdGhlIGNvbGxlY3RpdmUuXG4gICAgICAgIGNvbnN0IGxhYmVsID0gZ2V0Q29sbGVjdGl2ZUFyaWFMYWJlbCh0aGlzLmNvbGxlY3RpdmUpO1xuICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICBzYWZlQXR0cmlidXRlcy5zZXRBdHRyaWJ1dGUodGhpcywgJ2FyaWEtbGFiZWwnLCBsYWJlbCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFpc0xpc3RlbmluZ1RvS2V5ZG93bih0aGlzKSkge1xuICAgICAgICBzdGFydExpc3RlbmluZ1RvS2V5ZG93bih0aGlzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jb25uZWN0ZWRDYWxsYmFjaykgeyBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpOyB9XG4gICAgICBzYWZlQXR0cmlidXRlcy5jb25uZWN0ZWQodGhpcyk7XG4gICAgICAvLyBTZXQgYSBkZWZhdWx0IHRhYiBpbmRleCBvZiAwIChkb2N1bWVudCBvcmRlcikgaWYgbm8gdGFiIGluZGV4IGV4aXN0cy5cbiAgICAgIC8vIE1TIEVkZ2UgcmVxdWlyZXMgd2UgZXhwbGljaXRseSBjaGVjayBmb3IgcHJlc2VuY2Ugb2YgdGFiaW5kZXggYXR0cmlidXRlLlxuICAgICAgaWYgKHRoaXMuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpID09IG51bGwgfHwgdGhpcy50YWJJbmRleCA8IDApIHtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgdGhlIGluZGljYXRlZCBrZXlib2FyZCBldmVudC5cbiAgICAgKlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy4gVGhpcyB3aWxsXG4gICAgICogdHlwaWNhbGx5IGJlIGhhbmRsZWQgYnkgb3RoZXIgbWl4aW5zLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBldmVudCAtIHRoZSBrZXlib2FyZCBldmVudFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhlIGV2ZW50IHdhcyBoYW5kbGVkXG4gICAgICovXG4gICAgW3N5bWJvbHMua2V5ZG93bl0oZXZlbnQpIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLmtleWRvd25dKSB7IHJldHVybiBzdXBlcltzeW1ib2xzLmtleWRvd25dKGV2ZW50KTsgfVxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIEtleWJvYXJkO1xufTtcblxuXG4vLyBGaXJlIHRoZSBrZXlkb3duKCkgbWV0aG9kIG9uIHRoZSBlbGVtZW50IG9yIChpZiBpdCBiZWxvbmdzIHRvIGEgY29sbGVjdGl2ZSlcbi8vIGFsbCBlbGVtZW50cyBpbiB0aGUgY29sbGVjdGl2ZS5cbi8vXG4vLyBOb3RlOiB0aGUgdmFsdWUgb2YgJ3RoaXMnIGlzIGJvdW5kIHRvIHRoZSBlbGVtZW50IHdoaWNoIHJlY2VpdmVkIHRoZSBldmVudC5cbmZ1bmN0aW9uIGtleWRvd24oZXZlbnQpIHtcblxuICBsZXQgaGFuZGxlZCA9IGZhbHNlO1xuXG4gIGlmICh0aGlzLmNvbGxlY3RpdmUpIHtcbiAgICAvLyBHaXZlIGNvbGxlY3RpdmUgZWxlbWVudHMgYSBzaG90IGF0IHRoZSBldmVudCwgd29ya2luZyBmcm9tIGlubmVybW9zdCB0b1xuICAgIC8vIG91dGVybW9zdCAodGhpcyBlbGVtZW50KS5cbiAgICBjb25zdCBlbGVtZW50cyA9IHRoaXMuY29sbGVjdGl2ZS5lbGVtZW50cztcbiAgICBmb3IgKGxldCBpID0gZWxlbWVudHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50c1tpXTtcbiAgICAgIGhhbmRsZWQgPSBlbGVtZW50W3N5bWJvbHMua2V5ZG93bl0gJiYgZWxlbWVudFtzeW1ib2xzLmtleWRvd25dKGV2ZW50KTtcbiAgICAgIGlmIChoYW5kbGVkKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBDb21wb25lbnQgaXMgaGFuZGxpbmcgdGhlIGtleWJvYXJkIG9uIGl0cyBvd24uXG4gICAgaGFuZGxlZCA9IHRoaXNbc3ltYm9scy5rZXlkb3duXShldmVudCk7XG4gIH1cblxuICBpZiAoaGFuZGxlZCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbn1cblxuXG4vLyBSZXR1cm4gdGhlIGZpcnN0IEFSSUEgbGFiZWwgZGVmaW5lZCBieSB0aGUgY29sbGVjdGl2ZS5cbmZ1bmN0aW9uIGdldENvbGxlY3RpdmVBcmlhTGFiZWwoY29sbGVjdGl2ZSkge1xuICBjb25zdCBsYWJlbHMgPSBjb2xsZWN0aXZlLmVsZW1lbnRzLm1hcChlbGVtZW50ID0+IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJykpO1xuICAvLyBXb3VsZCBwcmVmZXIgdG8gdXNlIEFycmF5LnByb3RvdHlwZS5maW5kIGhlcmUsIGJ1dCBJRSAxMSBkb2Vzbid0IGhhdmUgaXQuXG4gIGNvbnN0IG5vbk51bGxMYWJlbHMgPSBsYWJlbHMuZmlsdGVyKGxhYmVsID0+IGxhYmVsICE9IG51bGwpO1xuICByZXR1cm4gbm9uTnVsbExhYmVsc1swXTtcbn1cblxuXG5mdW5jdGlvbiBpc0xpc3RlbmluZ1RvS2V5ZG93bihlbGVtZW50KSB7XG4gIHJldHVybiBlbGVtZW50W2tleWRvd25MaXN0ZW5lclN5bWJvbF0gIT0gbnVsbDtcbn1cblxuXG5mdW5jdGlvbiBzdGFydExpc3RlbmluZ1RvS2V5ZG93bihlbGVtZW50KSB7XG4gIGVsZW1lbnRba2V5ZG93bkxpc3RlbmVyU3ltYm9sXSA9IGtleWRvd24uYmluZChlbGVtZW50KTtcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZWxlbWVudFtrZXlkb3duTGlzdGVuZXJTeW1ib2xdKTtcbn1cblxuXG5mdW5jdGlvbiBzdG9wTGlzdGVuaW5nVG9LZXlkb3duKGVsZW1lbnQpIHtcbiAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZWxlbWVudFtrZXlkb3duTGlzdGVuZXJTeW1ib2xdKTtcbiAgZWxlbWVudFtrZXlkb3duTGlzdGVuZXJTeW1ib2xdID0gbnVsbDtcbiAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG59XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4vY3JlYXRlU3ltYm9sJztcbmltcG9ydCBzeW1ib2xzIGZyb20gJy4vc3ltYm9scyc7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IG5hdmlnYXRpb25BeGlzU3ltYm9sID0gY3JlYXRlU3ltYm9sKCduYXZpZ2F0aW9uQXhpcycpO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggS2V5Ym9hcmREaXJlY3Rpb24uICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBtYXBzIGRpcmVjdGlvbiBrZXlzIChMZWZ0LCBSaWdodCwgZXRjLikgdG8gZGlyZWN0aW9uIHNlbWFudGljc1xuICAgKiAoZ28gbGVmdCwgZ28gcmlnaHQsIGV0Yy4pLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGV4cGVjdHMgdGhlIGNvbXBvbmVudCB0byBpbnZva2UgYSBga2V5ZG93bmAgbWV0aG9kIHdoZW4gYSBrZXkgaXNcbiAgICogcHJlc3NlZC4gWW91IGNhbiB1c2UgdGhlIFtLZXlib2FyZF0oS2V5Ym9hcmQubWQpIG1peGluIGZvciB0aGF0IHB1cnBvc2UsIG9yXG4gICAqIHdpcmUgdXAgeW91ciBvd24ga2V5Ym9hcmQgaGFuZGxpbmcgYW5kIGNhbGwgYGtleWRvd25gIHlvdXJzZWxmLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGNhbGxzIG1ldGhvZHMgc3VjaCBhcyBgZ29MZWZ0YCBhbmQgYGdvUmlnaHRgLiBZb3UgY2FuIGRlZmluZVxuICAgKiB3aGF0IHRoYXQgbWVhbnMgYnkgaW1wbGVtZW50aW5nIHRob3NlIG1ldGhvZHMgeW91cnNlbGYuIElmIHlvdSB3YW50IHRvIHVzZVxuICAgKiBkaXJlY3Rpb24ga2V5cyB0byBuYXZpZ2F0ZSBhIHNlbGVjdGlvbiwgdXNlIHRoaXMgbWl4aW4gd2l0aCB0aGVcbiAgICogW0RpcmVjdGlvblNlbGVjdGlvbl0oRGlyZWN0aW9uU2VsZWN0aW9uLm1kKSBtaXhpbi5cbiAgICovXG4gIGNsYXNzIEtleWJvYXJkRGlyZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICAvLyBTZXQgZGVmYXVsdHMuXG4gICAgICBpZiAodHlwZW9mIHRoaXMubmF2aWdhdGlvbkF4aXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMubmF2aWdhdGlvbkF4aXMgPSB0aGlzW3N5bWJvbHMuZGVmYXVsdHNdLm5hdmlnYXRpb25BeGlzO1xuICAgICAgfVxuICAgIH1cblxuICAgIGdldCBbc3ltYm9scy5kZWZhdWx0c10oKSB7XG4gICAgICBjb25zdCBkZWZhdWx0cyA9IHN1cGVyW3N5bWJvbHMuZGVmYXVsdHNdIHx8IHt9O1xuICAgICAgZGVmYXVsdHMubmF2aWdhdGlvbkF4aXMgPSAnYm90aCc7XG4gICAgICByZXR1cm4gZGVmYXVsdHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIGRvd24uXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLlxuICAgICAqL1xuICAgIFtzeW1ib2xzLmdvRG93bl0oKSB7XG4gICAgICBpZiAoc3VwZXJbc3ltYm9scy5nb0Rvd25dKSB7IHJldHVybiBzdXBlcltzeW1ib2xzLmdvRG93bl0oKTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSB0byB0aGUgZW5kIChlLmcuLCBvZiBhIGxpc3QpLlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy5cbiAgICAgKi9cbiAgICBbc3ltYm9scy5nb0VuZF0oKSB7XG4gICAgICBpZiAoc3VwZXJbc3ltYm9scy5nb0VuZF0pIHsgcmV0dXJuIHN1cGVyW3N5bWJvbHMuZ29FbmRdKCk7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgbGVmdC5cbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuXG4gICAgICovXG4gICAgW3N5bWJvbHMuZ29MZWZ0XSgpIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLmdvTGVmdF0pIHsgcmV0dXJuIHN1cGVyW3N5bWJvbHMuZ29MZWZ0XSgpOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIHJpZ2h0LlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy5cbiAgICAgKi9cbiAgICBbc3ltYm9scy5nb1JpZ2h0XSgpIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLmdvUmlnaHRdKSB7IHJldHVybiBzdXBlcltzeW1ib2xzLmdvUmlnaHRdKCk7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgdG8gdGhlIHN0YXJ0IChlLmcuLCBvZiBhXG4gICAgICogbGlzdCkuIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy5cbiAgICAgKi9cbiAgICBbc3ltYm9scy5nb1N0YXJ0XSgpIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLmdvU3RhcnRdKSB7IHJldHVybiBzdXBlcltzeW1ib2xzLmdvU3RhcnRdKCk7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgdXAuXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLlxuICAgICAqL1xuICAgIFtzeW1ib2xzLmdvVXBdKCkge1xuICAgICAgaWYgKHN1cGVyW3N5bWJvbHMuZ29VcF0pIHsgcmV0dXJuIHN1cGVyW3N5bWJvbHMuZ29VcF0oKTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB0aGUgZGlyZWN0aW9uIG9mIHBlcm1pdHRlZCBuYXZpZ2F0aW9uIHdpdGggdGhlIGtleWJvYXJkLlxuICAgICAqXG4gICAgICogQWNjZXB0ZWQgdmFsdWVzIGFyZSBcImhvcml6b250YWxcIiwgXCJ2ZXJ0aWNhbFwiLCBvciBcImJvdGhcIiAodGhlIGRlZmF1bHQpLlxuICAgICAqIElmIHRoaXMgcHJvcGVydHkgaXMgXCJob3Jpem9udGFsXCIsIHRoZSBVcCBBcnJvdyBhbmQgRG93biBBcnJvdyBrZXlzIHdpbGxcbiAgICAgKiBiZSBpZ25vcmVkLiBDb252ZXJzZWx5LCBpZiB0aGlzIGlzIFwidmVydGljYWxcIiwgdGhlIExlZnQgQXJyb3cgYW5kIFJpZ2h0XG4gICAgICogQXJyb3cga2V5cyB3aWxsIGJlIGlnbm9yZWQuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldCBuYXZpZ2F0aW9uQXhpcygpIHtcbiAgICAgIHJldHVybiB0aGlzW25hdmlnYXRpb25BeGlzU3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IG5hdmlnYXRpb25BeGlzKHZhbHVlKSB7XG4gICAgICB0aGlzW25hdmlnYXRpb25BeGlzU3ltYm9sXSA9IHZhbHVlO1xuICAgICAgaWYgKCduYXZpZ2F0aW9uQXhpcycgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIubmF2aWdhdGlvbkF4aXMgPSB2YWx1ZTsgfVxuICAgIH1cblxuICAgIFtzeW1ib2xzLmtleWRvd25dKGV2ZW50KSB7XG4gICAgICBsZXQgaGFuZGxlZDtcblxuICAgICAgY29uc3QgYXhpcyA9IHRoaXMubmF2aWdhdGlvbkF4aXM7XG4gICAgICBjb25zdCBob3Jpem9udGFsID0gKGF4aXMgPT09ICdob3Jpem9udGFsJyB8fCBheGlzID09PSAnYm90aCcpO1xuICAgICAgY29uc3QgdmVydGljYWwgPSAoYXhpcyA9PT0gJ3ZlcnRpY2FsJyB8fCBheGlzID09PSAnYm90aCcpO1xuXG4gICAgICAvLyBJZ25vcmUgTGVmdC9SaWdodCBrZXlzIHdoZW4gbWV0YUtleSBvciBhbHRLZXkgbW9kaWZpZXIgaXMgYWxzbyBwcmVzc2VkLFxuICAgICAgLy8gYXMgdGhlIHVzZXIgbWF5IGJlIHRyeWluZyB0byBuYXZpZ2F0ZSBiYWNrIG9yIGZvcndhcmQgaW4gdGhlIGJyb3dzZXIuXG4gICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgY2FzZSAzNTogLy8gRW5kXG4gICAgICAgICAgaGFuZGxlZCA9IHRoaXNbc3ltYm9scy5nb0VuZF0oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzNjogLy8gSG9tZVxuICAgICAgICAgIGhhbmRsZWQgPSB0aGlzW3N5bWJvbHMuZ29TdGFydF0oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzNzogLy8gTGVmdFxuICAgICAgICAgIGlmIChob3Jpem9udGFsICYmICFldmVudC5tZXRhS2V5ICYmICFldmVudC5hbHRLZXkpIHtcbiAgICAgICAgICAgIGhhbmRsZWQgPSB0aGlzW3N5bWJvbHMuZ29MZWZ0XSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzODogLy8gVXBcbiAgICAgICAgICBpZiAodmVydGljYWwpIHtcbiAgICAgICAgICAgIGhhbmRsZWQgPSBldmVudC5hbHRLZXkgPyB0aGlzW3N5bWJvbHMuZ29TdGFydF0oKSA6IHRoaXNbc3ltYm9scy5nb1VwXSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOTogLy8gUmlnaHRcbiAgICAgICAgICBpZiAoaG9yaXpvbnRhbCAmJiAhZXZlbnQubWV0YUtleSAmJiAhZXZlbnQuYWx0S2V5KSB7XG4gICAgICAgICAgICBoYW5kbGVkID0gdGhpc1tzeW1ib2xzLmdvUmlnaHRdKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQwOiAvLyBEb3duXG4gICAgICAgICAgaWYgKHZlcnRpY2FsKSB7XG4gICAgICAgICAgICBoYW5kbGVkID0gZXZlbnQuYWx0S2V5ID8gdGhpc1tzeW1ib2xzLmdvRW5kXSgpIDogdGhpc1tzeW1ib2xzLmdvRG93bl0oKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICAvLyBQcmVmZXIgbWl4aW4gcmVzdWx0IGlmIGl0J3MgZGVmaW5lZCwgb3RoZXJ3aXNlIHVzZSBiYXNlIHJlc3VsdC5cbiAgICAgIHJldHVybiBoYW5kbGVkIHx8IChzdXBlcltzeW1ib2xzLmtleWRvd25dICYmIHN1cGVyW3N5bWJvbHMua2V5ZG93bl0oZXZlbnQpKTtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBLZXlib2FyZERpcmVjdGlvbjtcbn07XG4iLCJpbXBvcnQgc3ltYm9scyBmcm9tICcuL3N5bWJvbHMnO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggS2V5Ym9hcmRQYWdlZFNlbGVjdGlvbi4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIG1hcHMgcGFnZSBrZXlzIChQYWdlIFVwLCBQYWdlIERvd24pIGludG8gb3BlcmF0aW9ucyB0aGF0IG1vdmVcbiAgICogdGhlIHNlbGVjdGlvbiBieSBvbmUgcGFnZS5cbiAgICpcbiAgICogVGhlIGtleWJvYXJkIGludGVyYWN0aW9uIG1vZGVsIGdlbmVyYWxseSBmb2xsb3dzIHRoYXQgb2YgTWljcm9zb2Z0IFdpbmRvd3MnXG4gICAqIGxpc3QgYm94ZXMgaW5zdGVhZCBvZiB0aG9zZSBpbiBPUyBYOlxuICAgKlxuICAgKiAqIFRoZSBQYWdlIFVwL0Rvd24gYW5kIEhvbWUvRW5kIGtleXMgYWN0dWFsbHkgY2hhbmdlIHRoZSBzZWxlY3Rpb24sIHJhdGhlclxuICAgKiAgIHRoYW4ganVzdCBzY3JvbGxpbmcuIFRoZSBmb3JtZXIgYmVoYXZpb3Igc2VlbXMgbW9yZSBnZW5lcmFsbHkgdXNlZnVsIGZvclxuICAgKiAgIGtleWJvYXJkIHVzZXJzLlxuICAgKlxuICAgKiAqIFByZXNzaW5nIFBhZ2UgVXAvRG93biB3aWxsIGNoYW5nZSB0aGUgc2VsZWN0aW9uIHRvIHRoZSB0b3Btb3N0L2JvdHRvbW1vc3RcbiAgICogICB2aXNpYmxlIGl0ZW0gaWYgdGhlIHNlbGVjdGlvbiBpcyBub3QgYWxyZWFkeSB0aGVyZS4gVGhlcmVhZnRlciwgdGhlIGtleVxuICAgKiAgIHdpbGwgbW92ZSB0aGUgc2VsZWN0aW9uIHVwL2Rvd24gYnkgYSBwYWdlLCBhbmQgKHBlciB0aGUgYWJvdmUgcG9pbnQpIG1ha2VcbiAgICogICB0aGUgc2VsZWN0ZWQgaXRlbSB2aXNpYmxlLlxuICAgKlxuICAgKiBUbyBlbnN1cmUgdGhlIHNlbGVjdGVkIGl0ZW0gaXMgaW4gdmlldyBmb2xsb3dpbmcgdXNlIG9mIFBhZ2UgVXAvRG93biwgdXNlXG4gICAqIHRoZSByZWxhdGVkIFtTZWxlY3Rpb25JblZpZXddKFNlbGVjdGlvbkluVmlldy5tZCkgbWl4aW4uXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyB0aGUgY29tcG9uZW50IHRvIGludm9rZSBhIGBrZXlkb3duYCBtZXRob2Qgd2hlbiBhIGtleSBpc1xuICAgKiBwcmVzc2VkLiBZb3UgY2FuIHVzZSB0aGUgW0tleWJvYXJkXShLZXlib2FyZC5tZCkgbWl4aW4gZm9yIHRoYXQgcHVycG9zZSwgb3JcbiAgICogd2lyZSB1cCB5b3VyIG93biBrZXlib2FyZCBoYW5kbGluZyBhbmQgY2FsbCBga2V5ZG93bmAgeW91cnNlbGYuXG4gICAqL1xuICBjbGFzcyBLZXlib2FyZFBhZ2VkU2VsZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBbc3ltYm9scy5rZXlkb3duXShldmVudCkge1xuICAgICAgbGV0IGhhbmRsZWQ7XG4gICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgY2FzZSAzMzogLy8gUGFnZSBVcFxuICAgICAgICAgIGhhbmRsZWQgPSB0aGlzLnBhZ2VVcCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM0OiAvLyBQYWdlIERvd25cbiAgICAgICAgICBoYW5kbGVkID0gdGhpcy5wYWdlRG93bigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgLy8gUHJlZmVyIG1peGluIHJlc3VsdCBpZiBpdCdzIGRlZmluZWQsIG90aGVyd2lzZSB1c2UgYmFzZSByZXN1bHQuXG4gICAgICByZXR1cm4gaGFuZGxlZCB8fCAoc3VwZXJbc3ltYm9scy5rZXlkb3duXSAmJiBzdXBlcltzeW1ib2xzLmtleWRvd25dKGV2ZW50KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2Nyb2xsIGRvd24gb25lIHBhZ2UuXG4gICAgICovXG4gICAgcGFnZURvd24oKSB7XG4gICAgICBpZiAoc3VwZXIucGFnZURvd24pIHsgc3VwZXIucGFnZURvd24oKTsgfVxuICAgICAgcmV0dXJuIHNjcm9sbE9uZVBhZ2UodGhpcywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2Nyb2xsIHVwIG9uZSBwYWdlLlxuICAgICAqL1xuICAgIHBhZ2VVcCgpIHtcbiAgICAgIGlmIChzdXBlci5wYWdlVXApIHsgc3VwZXIucGFnZVVwKCk7IH1cbiAgICAgIHJldHVybiBzY3JvbGxPbmVQYWdlKHRoaXMsIGZhbHNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZWxlbWVudCB0aGF0IHNob3VsZCBiZSBzY3JvbGxlZCB3aXRoIHRoZSBQYWdlIFVwL0Rvd24ga2V5cy5cbiAgICAgKiBEZWZhdWx0IGlzIHRoZSBjdXJyZW50IGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgZ2V0IHNjcm9sbFRhcmdldCgpIHtcbiAgICAgIC8vIFByZWZlciBiYXNlIHJlc3VsdC5cbiAgICAgIHJldHVybiAnc2Nyb2xsVGFyZ2V0JyBpbiBiYXNlLnByb3RvdHlwZSA/IHN1cGVyLnNjcm9sbFRhcmdldCA6IHRoaXM7XG4gICAgfVxuICAgIHNldCBzY3JvbGxUYXJnZXQoZWxlbWVudCkge1xuICAgICAgaWYgKCdzY3JvbGxUYXJnZXQnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNjcm9sbFRhcmdldCA9IGVsZW1lbnQ7IH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gS2V5Ym9hcmRQYWdlZFNlbGVjdGlvbjtcbn07XG5cblxuLy8gUmV0dXJuIHRoZSBpdGVtIHdob3NlIGNvbnRlbnQgc3BhbnMgdGhlIGdpdmVuIHkgcG9zaXRpb24gKHJlbGF0aXZlIHRvIHRoZVxuLy8gdG9wIG9mIHRoZSBsaXN0J3Mgc2Nyb2xsaW5nIGNsaWVudCBhcmVhKSwgb3IgbnVsbCBpZiBub3QgZm91bmQuXG4vL1xuLy8gSWYgZG93bndhcmQgaXMgdHJ1ZSwgbW92ZSBkb3duIHRoZSBsaXN0IG9mIGl0ZW1zIHRvIGZpbmQgdGhlIGZpcnN0IGl0ZW1cbi8vIGZvdW5kIGF0IHRoZSBnaXZlbiB5IHBvc2l0aW9uOyBpZiBkb3dud2FyZCBpcyBmYWxzZSwgbW92ZSB1cCB0aGUgbGlzdCBvZlxuLy8gaXRlbXMgdG8gZmluZCB0aGUgbGFzdCBpdGVtIGF0IHRoYXQgcG9zaXRpb24uXG5mdW5jdGlvbiBnZXRJbmRleE9mSXRlbUF0WShlbGVtZW50LCB5LCBkb3dud2FyZCkge1xuICBjb25zdCBpdGVtcyA9IGVsZW1lbnQuaXRlbXM7XG4gIGNvbnN0IHN0YXJ0ID0gZG93bndhcmQgPyAwIDogaXRlbXMubGVuZ3RoIC0gMTtcbiAgY29uc3QgZW5kID0gZG93bndhcmQgPyBpdGVtcy5sZW5ndGggOiAwO1xuICBjb25zdCBzdGVwID0gZG93bndhcmQgPyAxIDogLTE7XG4gIGNvbnN0IHNjcm9sbFRhcmdldCA9IGVsZW1lbnQuc2Nyb2xsVGFyZ2V0O1xuICBjb25zdCB0b3BPZkNsaWVudEFyZWEgPSBzY3JvbGxUYXJnZXQub2Zmc2V0VG9wICsgc2Nyb2xsVGFyZ2V0LmNsaWVudFRvcDtcblxuICAvLyBGaW5kIHRoZSBpdGVtIHNwYW5uaW5nIHRoZSBpbmRpY2F0ZWQgeSBjb29yZGluYXRlLlxuICBsZXQgaXRlbTtcbiAgbGV0IGl0ZW1JbmRleCA9IHN0YXJ0O1xuICBsZXQgaXRlbVRvcDtcbiAgbGV0IGZvdW5kID0gZmFsc2U7XG4gIHdoaWxlIChpdGVtSW5kZXggIT09IGVuZCkge1xuICAgIGl0ZW0gPSBpdGVtc1tpdGVtSW5kZXhdO1xuICAgIGl0ZW1Ub3AgPSBpdGVtLm9mZnNldFRvcCAtIHRvcE9mQ2xpZW50QXJlYTtcbiAgICBjb25zdCBpdGVtQm90dG9tID0gaXRlbVRvcCArIGl0ZW0ub2Zmc2V0SGVpZ2h0O1xuICAgIGlmIChpdGVtVG9wIDw9IHkgJiYgaXRlbUJvdHRvbSA+PSB5KSB7XG4gICAgICAvLyBJdGVtIHNwYW5zIHRoZSBpbmRpY2F0ZWQgeSBjb29yZGluYXRlLlxuICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGl0ZW1JbmRleCArPSBzdGVwO1xuICB9XG5cbiAgaWYgKCFmb3VuZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLy8gV2UgbWF5IGhhdmUgZm91bmQgYW4gaXRlbSB3aG9zZSBwYWRkaW5nIHNwYW5zIHRoZSBnaXZlbiB5IGNvb3JkaW5hdGUsXG4gIC8vIGJ1dCB3aG9zZSBjb250ZW50IGlzIGFjdHVhbGx5IGFib3ZlL2JlbG93IHRoYXQgcG9pbnQuXG4gIC8vIFRPRE86IElmIHRoZSBpdGVtIGhhcyBhIGJvcmRlciwgdGhlbiBwYWRkaW5nIHNob3VsZCBiZSBpbmNsdWRlZCBpblxuICAvLyBjb25zaWRlcmluZyBhIGhpdC5cbiAgY29uc3QgaXRlbVN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShpdGVtKTtcbiAgY29uc3QgaXRlbVBhZGRpbmdUb3AgPSBwYXJzZUZsb2F0KGl0ZW1TdHlsZS5wYWRkaW5nVG9wKTtcbiAgY29uc3QgaXRlbVBhZGRpbmdCb3R0b20gPSBwYXJzZUZsb2F0KGl0ZW1TdHlsZS5wYWRkaW5nQm90dG9tKTtcbiAgY29uc3QgY29udGVudFRvcCA9IGl0ZW1Ub3AgKyBpdGVtLmNsaWVudFRvcCArIGl0ZW1QYWRkaW5nVG9wO1xuICBjb25zdCBjb250ZW50Qm90dG9tID0gY29udGVudFRvcCArIGl0ZW0uY2xpZW50SGVpZ2h0IC0gaXRlbVBhZGRpbmdUb3AgLSBpdGVtUGFkZGluZ0JvdHRvbTtcbiAgaWYgKGRvd253YXJkICYmIGNvbnRlbnRUb3AgPD0geSB8fCAhZG93bndhcmQgJiYgY29udGVudEJvdHRvbSA+PSB5KSB7XG4gICAgLy8gVGhlIGluZGljYXRlZCBjb29yZGluYXRlIGhpdHMgdGhlIGFjdHVhbCBpdGVtIGNvbnRlbnQuXG4gICAgcmV0dXJuIGl0ZW1JbmRleDtcbiAgfVxuICBlbHNlIHtcbiAgICAvLyBUaGUgaW5kaWNhdGVkIGNvb3JkaW5hdGUgZmFsbHMgd2l0aGluIHRoZSBpdGVtJ3MgcGFkZGluZy4gQmFjayB1cCB0b1xuICAgIC8vIHRoZSBpdGVtIGJlbG93L2Fib3ZlIHRoZSBpdGVtIHdlIGZvdW5kIGFuZCByZXR1cm4gdGhhdC5cbiAgICByZXR1cm4gaXRlbUluZGV4IC0gc3RlcDtcbiAgfVxufVxuXG4vLyBNb3ZlIGJ5IG9uZSBwYWdlIGRvd253YXJkIChpZiBkb3dud2FyZCBpcyB0cnVlKSwgb3IgdXB3YXJkIChpZiBmYWxzZSkuXG4vLyBSZXR1cm4gdHJ1ZSBpZiB3ZSBlbmRlZCB1cCBjaGFuZ2luZyB0aGUgc2VsZWN0aW9uLCBmYWxzZSBpZiBub3QuXG4vLyBUT0RPOiBCZXR0ZXIgc3VwcG9ydCBmb3IgaG9yaXpvbnRhbCBsaXN0cy5cbmZ1bmN0aW9uIHNjcm9sbE9uZVBhZ2UoZWxlbWVudCwgZG93bndhcmQpIHtcblxuICAvLyBEZXRlcm1pbmUgdGhlIGl0ZW0gdmlzaWJsZSBqdXN0IGF0IHRoZSBlZGdlIG9mIGRpcmVjdGlvbiB3ZSdyZSBoZWFkaW5nLlxuICAvLyBXZSdsbCBzZWxlY3QgdGhhdCBpdGVtIGlmIGl0J3Mgbm90IGFscmVhZHkgc2VsZWN0ZWQuXG4gIGNvbnN0IHNjcm9sbFRhcmdldCA9IGVsZW1lbnQuc2Nyb2xsVGFyZ2V0O1xuICBjb25zdCBlZGdlID0gc2Nyb2xsVGFyZ2V0LnNjcm9sbFRvcCArIChkb3dud2FyZCA/IHNjcm9sbFRhcmdldC5jbGllbnRIZWlnaHQgOiAwKTtcbiAgY29uc3QgaW5kZXhPZkl0ZW1BdEVkZ2UgPSBnZXRJbmRleE9mSXRlbUF0WShlbGVtZW50LCBlZGdlLCBkb3dud2FyZCk7XG5cbiAgY29uc3Qgc2VsZWN0ZWRJbmRleCA9IGVsZW1lbnQuc2VsZWN0ZWRJbmRleDtcbiAgbGV0IG5ld0luZGV4O1xuICBpZiAoaW5kZXhPZkl0ZW1BdEVkZ2UgJiYgc2VsZWN0ZWRJbmRleCA9PT0gaW5kZXhPZkl0ZW1BdEVkZ2UpIHtcbiAgICAvLyBUaGUgaXRlbSBhdCB0aGUgZWRnZSB3YXMgYWxyZWFkeSBzZWxlY3RlZCwgc28gc2Nyb2xsIGluIHRoZSBpbmRpY2F0ZWRcbiAgICAvLyBkaXJlY3Rpb24gYnkgb25lIHBhZ2UuIExlYXZlIHRoZSBuZXcgaXRlbSBhdCB0aGF0IGVkZ2Ugc2VsZWN0ZWQuXG4gICAgY29uc3QgZGVsdGEgPSAoZG93bndhcmQgPyAxIDogLTEpICogc2Nyb2xsVGFyZ2V0LmNsaWVudEhlaWdodDtcbiAgICBuZXdJbmRleCA9IGdldEluZGV4T2ZJdGVtQXRZKGVsZW1lbnQsIGVkZ2UgKyBkZWx0YSwgZG93bndhcmQpO1xuICB9XG4gIGVsc2Uge1xuICAgIC8vIFRoZSBpdGVtIGF0IHRoZSBlZGdlIHdhc24ndCBzZWxlY3RlZCB5ZXQuIEluc3RlYWQgb2Ygc2Nyb2xsaW5nLCB3ZSdsbFxuICAgIC8vIGp1c3Qgc2VsZWN0IHRoYXQgaXRlbS4gVGhhdCBpcywgdGhlIGZpcnN0IGF0dGVtcHQgdG8gcGFnZSB1cC9kb3duXG4gICAgLy8gdXN1YWxseSBqdXN0IG1vdmVzIHRoZSBzZWxlY3Rpb24gdG8gdGhlIGVkZ2UgaW4gdGhhdCBkaXJlY3Rpb24uXG4gICAgbmV3SW5kZXggPSBpbmRleE9mSXRlbUF0RWRnZTtcbiAgfVxuXG4gIGlmICghbmV3SW5kZXgpIHtcbiAgICAvLyBXZSBjYW4ndCBmaW5kIGFuIGl0ZW0gaW4gdGhlIGRpcmVjdGlvbiB3ZSB3YW50IHRvIHRyYXZlbC4gU2VsZWN0IHRoZVxuICAgIC8vIGxhc3QgaXRlbSAoaWYgbW92aW5nIGRvd253YXJkKSBvciBmaXJzdCBpdGVtIChpZiBtb3ZpbmcgdXB3YXJkKS5cbiAgICBuZXdJbmRleCA9IChkb3dud2FyZCA/IGVsZW1lbnQuaXRlbXMubGVuZ3RoIC0gMSA6IDApO1xuICB9XG5cbiAgaWYgKG5ld0luZGV4ICE9PSBzZWxlY3RlZEluZGV4KSB7XG4gICAgZWxlbWVudC5zZWxlY3RlZEluZGV4ID0gbmV3SW5kZXg7XG4gICAgcmV0dXJuIHRydWU7IC8vIFdlIGhhbmRsZWQgdGhlIHBhZ2UgdXAvZG93biBvdXJzZWx2ZXMuXG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlOyAvLyBXZSBkaWRuJ3QgZG8gYW55dGhpbmcuXG4gIH1cbn1cbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi9jcmVhdGVTeW1ib2wnO1xuaW1wb3J0IHN5bWJvbHMgZnJvbSAnLi9zeW1ib2xzJztcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3QgaXRlbVRleHRDb250ZW50c1N5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnaXRlbVRleHRDb250ZW50cycpO1xuY29uc3QgdHlwZWRQcmVmaXhTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3R5cGVkUHJlZml4Jyk7XG5jb25zdCBwcmVmaXhUaW1lb3V0U3ltYm9sID0gY3JlYXRlU3ltYm9sKCdwcmVmaXhUaW1lb3V0Jyk7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBLZXlib2FyZFByZWZpeFNlbGVjdGlvbi4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHRoYXQgaGFuZGxlcyBsaXN0IGJveC1zdHlsZSBwcmVmaXggdHlwaW5nLCBpbiB3aGljaCB0aGUgdXNlciBjYW4gdHlwZVxuICAgKiBhIHN0cmluZyB0byBzZWxlY3QgdGhlIGZpcnN0IGl0ZW0gdGhhdCBiZWdpbnMgd2l0aCB0aGF0IHN0cmluZy5cbiAgICpcbiAgICogRXhhbXBsZTogc3VwcG9zZSBhIGNvbXBvbmVudCB1c2luZyB0aGlzIG1peGluIGhhcyB0aGUgZm9sbG93aW5nIGl0ZW1zOlxuICAgKlxuICAgKiAgICAgPHNhbXBsZS1saXN0LWNvbXBvbmVudD5cbiAgICogICAgICAgPGRpdj5BcHBsZTwvZGl2PlxuICAgKiAgICAgICA8ZGl2PkFwcmljb3Q8L2Rpdj5cbiAgICogICAgICAgPGRpdj5CYW5hbmE8L2Rpdj5cbiAgICogICAgICAgPGRpdj5CbGFja2JlcnJ5PC9kaXY+XG4gICAqICAgICAgIDxkaXY+Qmx1ZWJlcnJ5PC9kaXY+XG4gICAqICAgICAgIDxkaXY+Q2FudGFsb3VwZTwvZGl2PlxuICAgKiAgICAgICA8ZGl2PkNoZXJyeTwvZGl2PlxuICAgKiAgICAgICA8ZGl2PkxlbW9uPC9kaXY+XG4gICAqICAgICAgIDxkaXY+TGltZTwvZGl2PlxuICAgKiAgICAgPC9zYW1wbGUtbGlzdC1jb21wb25lbnQ+XG4gICAqXG4gICAqIElmIHRoaXMgY29tcG9uZW50IHJlY2VpdmVzIHRoZSBmb2N1cywgYW5kIHRoZSB1c2VyIHByZXNzZXMgdGhlIFwiYlwiIG9yIFwiQlwiXG4gICAqIGtleSwgdGhlIFwiQmFuYW5hXCIgaXRlbSB3aWxsIGJlIHNlbGVjdGVkLCBiZWNhdXNlIGl0J3MgdGhlIGZpcnN0IGl0ZW0gdGhhdFxuICAgKiBtYXRjaGVzIHRoZSBwcmVmaXggXCJiXCIuIChNYXRjaGluZyBpcyBjYXNlLWluc2Vuc2l0aXZlLikgSWYgdGhlIHVzZXIgbm93XG4gICAqIHByZXNzZXMgdGhlIFwibFwiIG9yIFwiTFwiIGtleSBxdWlja2x5LCB0aGUgcHJlZml4IHRvIG1hdGNoIGJlY29tZXMgXCJibFwiLCBzb1xuICAgKiBcIkJsYWNrYmVycnlcIiB3aWxsIGJlIHNlbGVjdGVkLlxuICAgKlxuICAgKiBUaGUgcHJlZml4IHR5cGluZyBmZWF0dXJlIGhhcyBhIG9uZSBzZWNvbmQgdGltZW91dCDigJTCoHRoZSBwcmVmaXggdG8gbWF0Y2hcbiAgICogd2lsbCBiZSByZXNldCBhZnRlciBhIHNlY29uZCBoYXMgcGFzc2VkIHNpbmNlIHRoZSB1c2VyIGxhc3QgdHlwZWQgYSBrZXkuXG4gICAqIElmLCBpbiB0aGUgYWJvdmUgZXhhbXBsZSwgdGhlIHVzZXIgd2FpdHMgYSBzZWNvbmQgYmV0d2VlbiB0eXBpbmcgXCJiXCIgYW5kXG4gICAqIFwibFwiLCB0aGUgcHJlZml4IHdpbGwgYmVjb21lIFwibFwiLCBzbyBcIkxlbW9uXCIgd291bGQgYmUgc2VsZWN0ZWQuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyB0aGUgY29tcG9uZW50IHRvIGludm9rZSBhIGBrZXlkb3duYCBtZXRob2Qgd2hlbiBhIGtleSBpc1xuICAgKiBwcmVzc2VkLiBZb3UgY2FuIHVzZSB0aGUgW0tleWJvYXJkXShLZXlib2FyZC5tZCkgbWl4aW4gZm9yIHRoYXQgcHVycG9zZSwgb3JcbiAgICogd2lyZSB1cCB5b3VyIG93biBrZXlib2FyZCBoYW5kbGluZyBhbmQgY2FsbCBga2V5ZG93bmAgeW91cnNlbGYuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gYWxzbyBleHBlY3RzIHRoZSBjb21wb25lbnQgdG8gcHJvdmlkZSBhbiBgaXRlbXNgIHByb3BlcnR5LiBUaGVcbiAgICogYHRleHRDb250ZW50YCBvZiB0aG9zZSBpdGVtcyB3aWxsIGJlIHVzZWQgZm9yIHB1cnBvc2VzIG9mIHByZWZpeCBtYXRjaGluZy5cbiAgICovXG4gIGNsYXNzIEtleWJvYXJkUHJlZml4U2VsZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgICAvLyBUT0RPOiBJZiB0aGUgc2V0IG9mIGl0ZW1zIGlzIGNoYW5nZWQsIHJlc2V0IHRoZSBwcmVmaXguXG4gICAgLy8gaXRlbXNDaGFuZ2VkKCkge1xuICAgIC8vICAgdGhpc1tpdGVtVGV4dENvbnRlbnRzU3ltYm9sXSA9IG51bGw7XG4gICAgLy8gICByZXNldFR5cGVkUHJlZml4KHRoaXMpO1xuICAgIC8vIH1cblxuICAgIC8vIFRPRE86IElmIHRoZSBzZWxlY3Rpb24gaXMgY2hhbmdlZCBieSBzb21lIG90aGVyIG1lYW5zIChlLmcuLCBhcnJvdyBrZXlzKVxuICAgIC8vIG90aGVyIHRoYW4gcHJlZml4IHR5cGluZywgdGhlbiB0aGF0IGFjdCBzaG91bGQgcmVzZXQgdGhlIHByZWZpeC5cblxuICAgIFtzeW1ib2xzLmtleWRvd25dKGV2ZW50KSB7XG4gICAgICBsZXQgaGFuZGxlZDtcbiAgICAgIGxldCByZXNldFByZWZpeCA9IHRydWU7XG5cbiAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgICBjYXNlIDg6IC8vIEJhY2tzcGFjZVxuICAgICAgICAgIGhhbmRsZUJhY2tzcGFjZSh0aGlzKTtcbiAgICAgICAgICBoYW5kbGVkID0gdHJ1ZTtcbiAgICAgICAgICByZXNldFByZWZpeCA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI3OiAvLyBFc2NhcGVcbiAgICAgICAgICBoYW5kbGVkID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBpZiAoIWV2ZW50LmN0cmxLZXkgJiYgIWV2ZW50Lm1ldGFLZXkgJiYgIWV2ZW50LmFsdEtleSAmJlxuICAgICAgICAgICAgICBldmVudC53aGljaCAhPT0gMzIgLyogU3BhY2UgKi8pIHtcbiAgICAgICAgICAgIGhhbmRsZVBsYWluQ2hhcmFjdGVyKHRoaXMsIFN0cmluZy5mcm9tQ2hhckNvZGUoZXZlbnQud2hpY2gpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzZXRQcmVmaXggPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlc2V0UHJlZml4KSB7XG4gICAgICAgIHJlc2V0VHlwZWRQcmVmaXgodGhpcyk7XG4gICAgICB9XG5cbiAgICAgIC8vIFByZWZlciBtaXhpbiByZXN1bHQgaWYgaXQncyBkZWZpbmVkLCBvdGhlcndpc2UgdXNlIGJhc2UgcmVzdWx0LlxuICAgICAgcmV0dXJuIGhhbmRsZWQgfHwgKHN1cGVyW3N5bWJvbHMua2V5ZG93bl0gJiYgc3VwZXJbc3ltYm9scy5rZXlkb3duXShldmVudCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCB0aGUgZmlyc3QgaXRlbSB3aG9zZSB0ZXh0IGNvbnRlbnQgYmVnaW5zIHdpdGggdGhlIGdpdmVuIHByZWZpeC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBwcmVmaXggW1N0cmluZ10gVGhlIHByZWZpeCBzdHJpbmcgdG8gc2VhcmNoIGZvclxuICAgICAqL1xuICAgIHNlbGVjdEl0ZW1XaXRoVGV4dFByZWZpeChwcmVmaXgpIHtcbiAgICAgIGlmIChzdXBlci5zZWxlY3RJdGVtV2l0aFRleHRQcmVmaXgpIHsgc3VwZXIuc2VsZWN0SXRlbVdpdGhUZXh0UHJlZml4KHByZWZpeCk7IH1cbiAgICAgIGlmIChwcmVmaXggPT0gbnVsbCB8fCBwcmVmaXgubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGluZGV4ID0gZ2V0SW5kZXhPZkl0ZW1XaXRoVGV4dFByZWZpeCh0aGlzLCBwcmVmaXgpO1xuICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gS2V5Ym9hcmRQcmVmaXhTZWxlY3Rpb247XG59O1xuXG5cbi8vIFRpbWUgaW4gbWlsbGlzZWNvbmRzIGFmdGVyIHdoaWNoIHRoZSB1c2VyIGlzIGNvbnNpZGVyZWQgdG8gaGF2ZSBzdG9wcGVkXG4vLyB0eXBpbmcuXG5jb25zdCBQUkVGSVhfVElNRU9VVF9EVVJBVElPTiA9IDEwMDA7XG5cblxuLy8gUmV0dXJuIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgaXRlbSB3aXRoIHRoZSBnaXZlbiBwcmVmaXgsIGVsc2UgLTEuXG5mdW5jdGlvbiBnZXRJbmRleE9mSXRlbVdpdGhUZXh0UHJlZml4KGVsZW1lbnQsIHByZWZpeCkge1xuICBjb25zdCBpdGVtVGV4dENvbnRlbnRzID0gZ2V0SXRlbVRleHRDb250ZW50cyhlbGVtZW50KTtcbiAgY29uc3QgcHJlZml4TGVuZ3RoID0gcHJlZml4Lmxlbmd0aDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtVGV4dENvbnRlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgaXRlbVRleHRDb250ZW50ID0gaXRlbVRleHRDb250ZW50c1tpXTtcbiAgICBpZiAoaXRlbVRleHRDb250ZW50LnN1YnN0cigwLCBwcmVmaXhMZW5ndGgpID09PSBwcmVmaXgpIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbi8vIFJldHVybiBhbiBhcnJheSBvZiB0aGUgdGV4dCBjb250ZW50IChpbiBsb3dlcmNhc2UpIG9mIGFsbCBpdGVtcy5cbi8vIENhY2hlIHRoZXNlIHJlc3VsdHMuXG5mdW5jdGlvbiBnZXRJdGVtVGV4dENvbnRlbnRzKGVsZW1lbnQpIHtcbiAgaWYgKCFlbGVtZW50W2l0ZW1UZXh0Q29udGVudHNTeW1ib2xdKSB7XG4gICAgY29uc3QgaXRlbXMgPSBlbGVtZW50Lml0ZW1zO1xuICAgIGVsZW1lbnRbaXRlbVRleHRDb250ZW50c1N5bWJvbF0gPSBpdGVtcy5tYXAoY2hpbGQgPT4ge1xuICAgICAgY29uc3QgdGV4dCA9IGNoaWxkLnRleHRDb250ZW50IHx8IGNoaWxkLmFsdDtcbiAgICAgIHJldHVybiB0ZXh0LnRvTG93ZXJDYXNlKCk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGVsZW1lbnRbaXRlbVRleHRDb250ZW50c1N5bWJvbF07XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUJhY2tzcGFjZShlbGVtZW50KSB7XG4gIGNvbnN0IGxlbmd0aCA9IGVsZW1lbnRbdHlwZWRQcmVmaXhTeW1ib2xdID8gZWxlbWVudFt0eXBlZFByZWZpeFN5bWJvbF0ubGVuZ3RoIDogMDtcbiAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICBlbGVtZW50W3R5cGVkUHJlZml4U3ltYm9sXSA9IGVsZW1lbnRbdHlwZWRQcmVmaXhTeW1ib2xdLnN1YnN0cigwLCBsZW5ndGggLSAxKTtcbiAgfVxuICBlbGVtZW50LnNlbGVjdEl0ZW1XaXRoVGV4dFByZWZpeChlbGVtZW50W3R5cGVkUHJlZml4U3ltYm9sXSk7XG4gIHNldFByZWZpeFRpbWVvdXQoZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVBsYWluQ2hhcmFjdGVyKGVsZW1lbnQsIGNoYXIpIHtcbiAgY29uc3QgcHJlZml4ID0gZWxlbWVudFt0eXBlZFByZWZpeFN5bWJvbF0gfHwgJyc7XG4gIGVsZW1lbnRbdHlwZWRQcmVmaXhTeW1ib2xdID0gcHJlZml4ICsgY2hhci50b0xvd2VyQ2FzZSgpO1xuICBlbGVtZW50LnNlbGVjdEl0ZW1XaXRoVGV4dFByZWZpeChlbGVtZW50W3R5cGVkUHJlZml4U3ltYm9sXSk7XG4gIHNldFByZWZpeFRpbWVvdXQoZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0UHJlZml4VGltZW91dChlbGVtZW50KSB7XG4gIGlmIChlbGVtZW50W3ByZWZpeFRpbWVvdXRTeW1ib2xdKSB7XG4gICAgY2xlYXJUaW1lb3V0KGVsZW1lbnRbcHJlZml4VGltZW91dFN5bWJvbF0pO1xuICAgIGVsZW1lbnRbcHJlZml4VGltZW91dFN5bWJvbF0gPSBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNldFR5cGVkUHJlZml4KGVsZW1lbnQpIHtcbiAgZWxlbWVudFt0eXBlZFByZWZpeFN5bWJvbF0gPSAnJztcbiAgcmVzZXRQcmVmaXhUaW1lb3V0KGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBzZXRQcmVmaXhUaW1lb3V0KGVsZW1lbnQpIHtcbiAgcmVzZXRQcmVmaXhUaW1lb3V0KGVsZW1lbnQpO1xuICBlbGVtZW50W3ByZWZpeFRpbWVvdXRTeW1ib2xdID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgcmVzZXRUeXBlZFByZWZpeChlbGVtZW50KTtcbiAgfSwgUFJFRklYX1RJTUVPVVRfRFVSQVRJT04pO1xufVxuIiwiaW1wb3J0IHN5bWJvbHMgZnJvbSAnLi9zeW1ib2xzJztcblxuXG4vLyBVc2VkIHRvIGFzc2lnbiB1bmlxdWUgSURzIHRvIGl0ZW0gZWxlbWVudHMgd2l0aG91dCBJRHMuXG5sZXQgaWRDb3VudCA9IDA7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBTZWxlY3Rpb25BcmlhQWN0aXZlLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggdHJlYXRzIHRoZSBzZWxlY3RlZCBpdGVtIGluIGEgbGlzdCBhcyB0aGUgYWN0aXZlIGl0ZW0gaW4gQVJJQVxuICAgKiBhY2Nlc3NpYmlsaXR5IHRlcm1zLlxuICAgKlxuICAgKiBIYW5kbGluZyBBUklBIHNlbGVjdGlvbiBzdGF0ZSBwcm9wZXJseSBpcyBhY3R1YWxseSBxdWl0ZSBjb21wbGV4OlxuICAgKlxuICAgKiAqIFRoZSBpdGVtcyBpbiB0aGUgbGlzdCBuZWVkIHRvIGJlIGluZGljYXRlZCBhcyBwb3NzaWJsZSBpdGVtcyB2aWEgYW4gQVJJQVxuICAgKiAgIGByb2xlYCBhdHRyaWJ1dGUgdmFsdWUgc3VjaCBhcyBcIm9wdGlvblwiLlxuICAgKiAqIFRoZSBzZWxlY3RlZCBpdGVtIG5lZWQgdG8gYmUgbWFya2VkIGFzIHNlbGVjdGVkIGJ5IHNldHRpbmcgdGhlIGl0ZW0nc1xuICAgKiAgIGBhcmlhLXNlbGVjdGVkYCBhdHRyaWJ1dGUgdG8gdHJ1ZSAqYW5kKiB0aGUgb3RoZXIgaXRlbXMgbmVlZCBiZSBtYXJrZWQgYXNcbiAgICogICAqbm90KiBzZWxlY3RlZCBieSBzZXR0aW5nIGBhcmlhLXNlbGVjdGVkYCB0byBmYWxzZS5cbiAgICogKiBUaGUgb3V0ZXJtb3N0IGVsZW1lbnQgd2l0aCB0aGUga2V5Ym9hcmQgZm9jdXMgbmVlZHMgdG8gaGF2ZSBhdHRyaWJ1dGVzXG4gICAqICAgc2V0IG9uIGl0IHNvIHRoYXQgdGhlIHNlbGVjdGlvbiBpcyBrbm93YWJsZSBhdCB0aGUgbGlzdCBsZXZlbCB2aWEgdGhlXG4gICAqICAgYGFyaWEtYWN0aXZlZGVzY2VuZGFudGAgYXR0cmlidXRlLlxuICAgKiAqIFVzZSBvZiBgYXJpYS1hY3RpdmVkZXNjZW5kYW50YCBpbiB0dXJuIHJlcXVpcmVzIHRoYXQgYWxsIGl0ZW1zIGluIHRoZVxuICAgKiAgIGxpc3QgaGF2ZSBJRCBhdHRyaWJ1dGVzIGFzc2lnbmVkIHRvIHRoZW0uXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gdHJpZXMgdG8gYWRkcmVzcyBhbGwgb2YgdGhlIGFib3ZlIHJlcXVpcmVtZW50cy4gVG8gdGhhdCBlbmQsXG4gICAqIHRoaXMgbWl4aW4gd2lsbCBhc3NpZ24gZ2VuZXJhdGVkIElEcyB0byBhbnkgaXRlbSB0aGF0IGRvZXNuJ3QgYWxyZWFkeSBoYXZlXG4gICAqIGFuIElELlxuICAgKlxuICAgKiBBUklBIHJlbGllcyBvbiBlbGVtZW50cyB0byBwcm92aWRlIGByb2xlYCBhdHRyaWJ1dGVzLiBUaGlzIG1peGluIHdpbGwgYXBwbHlcbiAgICogYSBkZWZhdWx0IHJvbGUgb2YgXCJsaXN0Ym94XCIgb24gdGhlIG91dGVyIGxpc3QgaWYgaXQgZG9lc24ndCBhbHJlYWR5IGhhdmUgYW5cbiAgICogZXhwbGljaXQgcm9sZS4gU2ltaWxhcmx5LCB0aGlzIG1peGluIHdpbGwgYXBwbHkgYSBkZWZhdWx0IHJvbGUgb2YgXCJvcHRpb25cIlxuICAgKiB0byBhbnkgbGlzdCBpdGVtIHRoYXQgZG9lcyBub3QgYWxyZWFkeSBoYXZlIGEgcm9sZSBzcGVjaWZpZWQuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyBhIHNldCBvZiBtZW1iZXJzIHRoYXQgbWFuYWdlIHRoZSBzdGF0ZSBvZiB0aGUgc2VsZWN0aW9uOlxuICAgKiBgW3N5bWJvbHMuYXBwbHlTZWxlY3Rpb25dYCwgYGl0ZW1BZGRlZGAsIGFuZCBgc2VsZWN0ZWRJbmRleGAuIFlvdSBjYW4gc3VwcGx5IHRoZXNlXG4gICAqIHlvdXJzZWxmLCBvciBkbyBzbyB2aWEgdGhlIFtTaW5nbGVTZWxlY3Rpb25dKFNpbmdsZVNlbGVjdGlvbi5tZCkgbWl4aW4uXG4gICAqL1xuICBjbGFzcyBTZWxlY3Rpb25BcmlhQWN0aXZlIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBbc3ltYm9scy5hcHBseVNlbGVjdGlvbl0oaXRlbSwgc2VsZWN0ZWQpIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLmFwcGx5U2VsZWN0aW9uXSkgeyBzdXBlcltzeW1ib2xzLmFwcGx5U2VsZWN0aW9uXShpdGVtLCBzZWxlY3RlZCk7IH1cbiAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgc2VsZWN0ZWQpO1xuICAgICAgY29uc3QgaXRlbUlkID0gaXRlbS5pZDtcbiAgICAgIGlmIChpdGVtSWQpIHtcbiAgICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgICAgb3V0ZXJtb3N0RWxlbWVudCh0aGlzKS5zZXRBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcsIGl0ZW1JZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb2xsZWN0aXZlQ2hhbmdlZCgpIHtcbiAgICAgIGlmIChzdXBlci5jb2xsZWN0aXZlQ2hhbmdlZCkgeyBzdXBlci5jb2xsZWN0aXZlQ2hhbmdlZCgpOyB9XG4gICAgICBzZXRBcmlhQXR0cmlidXRlcyh0aGlzKTtcbiAgICB9XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jb25uZWN0ZWRDYWxsYmFjaykgeyBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpOyB9XG4gICAgICBzZXRBcmlhQXR0cmlidXRlcyh0aGlzKTtcbiAgICB9XG5cbiAgICBbc3ltYm9scy5pdGVtQWRkZWRdKGl0ZW0pIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLml0ZW1BZGRlZF0pIHsgc3VwZXJbc3ltYm9scy5pdGVtQWRkZWRdKGl0ZW0pOyB9XG5cbiAgICAgIGlmICghaXRlbS5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSkge1xuICAgICAgICAvLyBBc3NpZ24gYSBkZWZhdWx0IEFSSUEgcm9sZS5cbiAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnb3B0aW9uJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIEVuc3VyZSBlYWNoIGl0ZW0gaGFzIGFuIElEIHNvIHdlIGNhbiBzZXQgYXJpYS1hY3RpdmVkZXNjZW5kYW50IG9uIHRoZVxuICAgICAgLy8gb3ZlcmFsbCBsaXN0IHdoZW5ldmVyIHRoZSBzZWxlY3Rpb24gY2hhbmdlcy5cbiAgICAgIC8vXG4gICAgICAvLyBUaGUgSUQgd2lsbCB0YWtlIHRoZSBmb3JtIG9mIGEgYmFzZSBJRCBwbHVzIGEgdW5pcXVlIGludGVnZXIuIFRoZSBiYXNlXG4gICAgICAvLyBJRCB3aWxsIGJlIGluY29ycG9yYXRlIHRoZSBjb21wb25lbnQncyBvd24gSUQuIEUuZy4sIGlmIGEgY29tcG9uZW50IGhhc1xuICAgICAgLy8gSUQgXCJmb29cIiwgdGhlbiBpdHMgaXRlbXMgd2lsbCBoYXZlIElEcyB0aGF0IGxvb2sgbGlrZSBcIl9mb29PcHRpb24xXCIuIElmXG4gICAgICAvLyB0aGUgY29tcG5lbnQgaGFzIG5vIElEIGl0c2VsZiwgaXRzIGl0ZW1zIHdpbGwgZ2V0IElEcyB0aGF0IGxvb2sgbGlrZVxuICAgICAgLy8gXCJfb3B0aW9uMVwiLiBJdGVtIElEcyBhcmUgcHJlZml4ZWQgd2l0aCBhbiB1bmRlcnNjb3JlIHRvIGRpZmZlcmVudGlhdGVcbiAgICAgIC8vIHRoZW0gZnJvbSBtYW51YWxseS1hc3NpZ25lZCBJRHMsIGFuZCB0byBtaW5pbWl6ZSB0aGUgcG90ZW50aWFsIGZvciBJRFxuICAgICAgLy8gY29uZmxpY3RzLlxuICAgICAgaWYgKCFpdGVtLmlkKSB7XG4gICAgICAgIGNvbnN0IGJhc2VJZCA9IHRoaXMuaWQgP1xuICAgICAgICAgICAgXCJfXCIgKyB0aGlzLmlkICsgXCJPcHRpb25cIiA6XG4gICAgICAgICAgICBcIl9vcHRpb25cIjtcbiAgICAgICAgaXRlbS5pZCA9IGJhc2VJZCArIGlkQ291bnQrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgc2VsZWN0ZWRJdGVtKCkge1xuICAgICAgcmV0dXJuIHN1cGVyLnNlbGVjdGVkSXRlbTtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGVkSXRlbShpdGVtKSB7XG4gICAgICBpZiAoJ3NlbGVjdGVkSXRlbScgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJdGVtID0gaXRlbTsgfVxuICAgICAgLy8gQ2F0Y2ggdGhlIGNhc2Ugd2hlcmUgdGhlIHNlbGVjdGlvbiBpcyByZW1vdmVkLlxuICAgICAgaWYgKGl0ZW0gPT0gbnVsbCkge1xuICAgICAgICBvdXRlcm1vc3RFbGVtZW50KHRoaXMpLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1hY3RpdmVkZXNjZW5kYW50Jyk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gU2VsZWN0aW9uQXJpYUFjdGl2ZTtcbn07XG5cblxuLy8gUmV0dXJuIHRoZSBmaXJzdCBBUklBIGFjdGl2ZWRlc2NlbmRhbnQgZGVmaW5lZCBieSB0aGUgY29sbGVjdGl2ZS5cbmZ1bmN0aW9uIGdldENvbGxlY3RpdmVBcmlhQWN0aXZlRGVzY2VuZGFudChjb2xsZWN0aXZlKSB7XG4gIGNvbnN0IGRlc2NlbmRhbnRzID0gY29sbGVjdGl2ZS5lbGVtZW50cy5tYXAoZWxlbWVudCA9PiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1hY3RpdmVkZXNjZW5kYW50JykpO1xuICBjb25zdCBub25OdWxsRGVzY2VuZGFudHMgPSBkZXNjZW5kYW50cy5maWx0ZXIoZGVzY2VuZGFudCA9PiBkZXNjZW5kYW50ICE9PSBudWxsKTtcbiAgcmV0dXJuIG5vbk51bGxEZXNjZW5kYW50c1swXTtcbn1cblxuXG4vLyBSZXR1cm4gdGhlIGZpcnN0IEFSSUEgbGFiZWwgZGVmaW5lZCBieSB0aGUgY29sbGVjdGl2ZS5cbmZ1bmN0aW9uIGdldENvbGxlY3RpdmVBcmlhUm9sZShjb2xsZWN0aXZlKSB7XG4gIGNvbnN0IHJvbGVzID0gY29sbGVjdGl2ZS5lbGVtZW50cy5tYXAoZWxlbWVudCA9PiBlbGVtZW50LmdldEF0dHJpYnV0ZSgncm9sZScpKTtcbiAgY29uc3Qgbm9uTnVsbFJvbGVzID0gcm9sZXMuZmlsdGVyKHJvbGUgPT4gcm9sZSAhPT0gbnVsbCk7XG4gIHJldHVybiBub25OdWxsUm9sZXNbMF07XG59XG5cbmZ1bmN0aW9uIG91dGVybW9zdEVsZW1lbnQoZWxlbWVudCkge1xuICByZXR1cm4gZWxlbWVudC5jb2xsZWN0aXZlID9cbiAgICBlbGVtZW50LmNvbGxlY3RpdmUub3V0ZXJtb3N0RWxlbWVudCA6XG4gICAgZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gc2V0QXJpYUF0dHJpYnV0ZXMoZWxlbWVudCkge1xuXG4gIGlmICghZWxlbWVudC5pc0Nvbm5lY3RlZCkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoZWxlbWVudC5jb2xsZWN0aXZlICYmIGVsZW1lbnQgIT09IGVsZW1lbnQuY29sbGVjdGl2ZS5vdXRlcm1vc3RFbGVtZW50KSB7XG4gICAgLy8gTm90IHRoZSBvdXRlcm1vc3QgZWxlbWVudCwgZG8gbm90aGluZyBhbmQgbGV0IHRoZSBvdXRlcm1vc3QgZWxlbWVudFxuICAgIC8vIGhhbmRsZSB0aGluZ3MuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRW5zdXJlIHRoZSBlbGVtZW50IGhhcyBhbiBBUklBIHJvbGUuXG4gIGlmICghZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSkge1xuICAgIC8vIFRyeSB0byBwcm9tb3RlIGFuIEFSSUEgcm9sZSBmcm9tIGFuIGlubmVyIGVsZW1lbnQuIElmIG5vbmUgaXMgZm91bmQsXG4gICAgLy8gdXNlIGEgZGVmYXVsdCByb2xlLlxuICAgIGxldCByb2xlID0gZWxlbWVudC5jb2xsZWN0aXZlICYmIGdldENvbGxlY3RpdmVBcmlhUm9sZShlbGVtZW50LmNvbGxlY3RpdmUpO1xuICAgIHJvbGUgPSByb2xlIHx8ICdsaXN0Ym94JztcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgncm9sZScsIHJvbGUpO1xuICB9XG5cbiAgaWYgKCFlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1hY3RpdmVkZXNjZW5kYW50JykgJiYgZWxlbWVudC5jb2xsZWN0aXZlKSB7XG4gICAgLy8gVHJ5IHRvIHByb21vdGUgYW4gQVJJQSBhY3RpdmVkZXNjZW5kYW50IHZhbHVlIGZyb20gYW4gaW5uZXIgZWxlbWVudC5cbiAgICBjb25zdCBkZXNjZW5kYW50ID0gZ2V0Q29sbGVjdGl2ZUFyaWFBY3RpdmVEZXNjZW5kYW50KGVsZW1lbnQuY29sbGVjdGl2ZSk7XG4gICAgaWYgKGRlc2NlbmRhbnQpIHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnLCBkZXNjZW5kYW50KTtcbiAgICB9XG4gIH1cblxuICBpZiAoZWxlbWVudC5jb2xsZWN0aXZlKSB7XG4gICAgLy8gUmVtb3ZlIHRoZSBBUklBIHJvbGUgYW5kIGFjdGl2ZWRlc2NlbmRhbnQgdmFsdWVzIGZyb20gdGhlIGNvbGxlY3RpdmUnc1xuICAgIC8vIGlubmVyIGVsZW1lbnRzLlxuICAgIGVsZW1lbnQuY29sbGVjdGl2ZS5lbGVtZW50cy5mb3JFYWNoKG1lbWJlciA9PiB7XG4gICAgICBpZiAobWVtYmVyICE9PSBlbGVtZW50KSB7XG4gICAgICAgIG1lbWJlci5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcpO1xuICAgICAgICBtZW1iZXIuc2V0QXR0cmlidXRlKCdyb2xlJywgJ25vbmUnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG59XG4iLCIvKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFNlbGVjdGlvbkhpZ2hsaWdodC4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIGFwcGxpZXMgc3RhbmRhcmQgaGlnaGxpZ2h0IGNvbG9ycyB0byBhIHNlbGVjdGVkIGl0ZW0uXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gaGlnaGxpZ2h0cyB0ZXh0dWFsIGl0ZW1zIChlLmcuLCBpbiBhIGxpc3QpIGluIGEgc3RhbmRhcmQgd2F5IGJ5XG4gICAqIHVzaW5nIHRoZSBDU1MgYGhpZ2hsaWdodGAgYW5kIGBoaWdobGlnaHR0ZXh0YCBjb2xvciB2YWx1ZXMuIFRoZXNlIHZhbHVlc1xuICAgKiByZXNwZWN0IG9wZXJhdGluZyBzeXN0ZW0gZGVmYXVsdHMgYW5kIHVzZXIgcHJlZmVyZW5jZXMsIGFuZCBoZW5jZSBhcmUgZ29vZFxuICAgKiBkZWZhdWx0IHZhbHVlcyBmb3IgaGlnaGxpZ2h0IGNvbG9ycy5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIGEgYHNlbGVjdGVkYCBjbGFzcyB0byBiZSBhcHBsaWVkIHRvIHNlbGVjdGVkIGl0ZW1zLiBZb3VcbiAgICogY2FuIHVzZSB0aGUgW0NvbnRlbnRBc0l0ZW1zXShDb250ZW50QXNJdGVtcy5tZCkgbWl4aW4gZm9yIHRoYXQgcHVycG9zZS5cbiAgICovXG4gIGNsYXNzIFNlbGVjdGlvbkhpZ2hsaWdodCBleHRlbmRzIGJhc2Uge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgaWYgKHRoaXMuc2hhZG93Um9vdCkge1xuICAgICAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgIHN0eWxlLmlubmVySFRNTCA9IGBcbiAgICAgICAgICA6OnNsb3R0ZWQoLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoaWdobGlnaHQ7XG4gICAgICAgICAgICBjb2xvcjogaGlnaGxpZ2h0dGV4dDtcbiAgICAgICAgICB9XG4gICAgICAgIGA7XG4gICAgICAgIHRoaXMuc2hhZG93Um9vdC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gU2VsZWN0aW9uSGlnaGxpZ2h0O1xufTtcbiIsIi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggU2VsZWN0aW9uSW5WaWV3LiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggc2Nyb2xscyBhIGNvbnRhaW5lciB0byBlbnN1cmUgdGhhdCBhIG5ld2x5LXNlbGVjdGVkIGl0ZW0gaXNcbiAgICogdmlzaWJsZSB0byB0aGUgdXNlci5cbiAgICpcbiAgICogV2hlbiB0aGUgc2VsZWN0ZWQgaXRlbSBpbiBhIGxpc3QtbGlrZSBjb21wb25lbnQgY2hhbmdlcywgaXQncyBlYXNpZXIgZm9yXG4gICAqIHRoZSB0byBjb25maXJtIHRoYXQgdGhlIHNlbGVjdGlvbiBoYXMgY2hhbmdlZCB0byBhbiBhcHByb3ByaWF0ZSBpdGVtIGlmIHRoZVxuICAgKiB1c2VyIGNhbiBhY3R1YWxseSBzZWUgdGhhdCBpdGVtLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGV4cGVjdHMgYSBgc2VsZWN0ZWRJdGVtYCBwcm9wZXJ0eSB0byBiZSBzZXQgd2hlbiB0aGUgc2VsZWN0aW9uXG4gICAqIGNoYW5nZXMuIFlvdSBjYW4gc3VwcGx5IHRoYXQgeW91cnNlbGYsIG9yIHVzZSB0aGVcbiAgICogW1NpbmdsZVNlbGVjdGlvbl0oU2luZ2xlU2VsZWN0aW9uLm1kKSBtaXhpbi5cbiAgICovXG4gIGNsYXNzIFNlbGVjdGlvbkluVmlldyBleHRlbmRzIGJhc2Uge1xuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2spIHsgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTsgfVxuICAgICAgY29uc3Qgc2VsZWN0ZWRJdGVtID0gdGhpcy5zZWxlY3RlZEl0ZW07XG4gICAgICBpZiAoc2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsSXRlbUludG9WaWV3KHNlbGVjdGVkSXRlbSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdGVkSXRlbSgpIHtcbiAgICAgIHJldHVybiBzdXBlci5zZWxlY3RlZEl0ZW07XG4gICAgfVxuICAgIHNldCBzZWxlY3RlZEl0ZW0oaXRlbSkge1xuICAgICAgaWYgKCdzZWxlY3RlZEl0ZW0nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkSXRlbSA9IGl0ZW07IH1cbiAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgIC8vIEtlZXAgdGhlIHNlbGVjdGVkIGl0ZW0gaW4gdmlldy5cbiAgICAgICAgdGhpcy5zY3JvbGxJdGVtSW50b1ZpZXcoaXRlbSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2Nyb2xsIHRoZSBnaXZlbiBlbGVtZW50IGNvbXBsZXRlbHkgaW50byB2aWV3LCBtaW5pbWl6aW5nIHRoZSBkZWdyZWUgb2ZcbiAgICAgKiBzY3JvbGxpbmcgcGVyZm9ybWVkLlxuICAgICAqXG4gICAgICogQmxpbmsgaGFzIGEgYHNjcm9sbEludG9WaWV3SWZOZWVkZWQoKWAgZnVuY3Rpb24gdGhhdCBkb2VzIHNvbWV0aGluZ1xuICAgICAqIHNpbWlsYXIsIGJ1dCB1bmZvcnR1bmF0ZWx5IGl0J3Mgbm9uLXN0YW5kYXJkLCBhbmQgaW4gYW55IGV2ZW50IG9mdGVuIGVuZHNcbiAgICAgKiB1cCBzY3JvbGxpbmcgbW9yZSB0aGFuIGlzIGFic29sdXRlbHkgbmVjZXNzYXJ5LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaXRlbSAtIHRoZSBpdGVtIHRvIHNjcm9sbCBpbnRvIHZpZXcuXG4gICAgICovXG4gICAgc2Nyb2xsSXRlbUludG9WaWV3KGl0ZW0pIHtcbiAgICAgIGlmIChzdXBlci5zY3JvbGxJdGVtSW50b1ZpZXcpIHsgc3VwZXIuc2Nyb2xsSXRlbUludG9WaWV3KCk7IH1cbiAgICAgIC8vIEdldCB0aGUgcmVsYXRpdmUgcG9zaXRpb24gb2YgdGhlIGl0ZW0gd2l0aCByZXNwZWN0IHRvIHRoZSB0b3Agb2YgdGhlXG4gICAgICAvLyBsaXN0J3Mgc2Nyb2xsYWJsZSBjYW52YXMuIEFuIGl0ZW0gYXQgdGhlIHRvcCBvZiB0aGUgbGlzdCB3aWxsIGhhdmUgYVxuICAgICAgLy8gZWxlbWVudFRvcCBvZiAwLlxuXG4gICAgICBjb25zdCBzY3JvbGxUYXJnZXQgPSB0aGlzLnNjcm9sbFRhcmdldDtcbiAgICAgIGNvbnN0IGVsZW1lbnRUb3AgPSBpdGVtLm9mZnNldFRvcCAtIHNjcm9sbFRhcmdldC5vZmZzZXRUb3AgLSBzY3JvbGxUYXJnZXQuY2xpZW50VG9wO1xuICAgICAgY29uc3QgZWxlbWVudEJvdHRvbSA9IGVsZW1lbnRUb3AgKyBpdGVtLm9mZnNldEhlaWdodDtcbiAgICAgIC8vIERldGVybWluZSB0aGUgYm90dG9tIG9mIHRoZSBzY3JvbGxhYmxlIGNhbnZhcy5cbiAgICAgIGNvbnN0IHNjcm9sbEJvdHRvbSA9IHNjcm9sbFRhcmdldC5zY3JvbGxUb3AgKyBzY3JvbGxUYXJnZXQuY2xpZW50SGVpZ2h0O1xuICAgICAgaWYgKGVsZW1lbnRCb3R0b20gPiBzY3JvbGxCb3R0b20pIHtcbiAgICAgICAgLy8gU2Nyb2xsIHVwIHVudGlsIGl0ZW0gaXMgZW50aXJlbHkgdmlzaWJsZS5cbiAgICAgICAgc2Nyb2xsVGFyZ2V0LnNjcm9sbFRvcCArPSBlbGVtZW50Qm90dG9tIC0gc2Nyb2xsQm90dG9tO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZWxlbWVudFRvcCA8IHNjcm9sbFRhcmdldC5zY3JvbGxUb3ApIHtcbiAgICAgICAgLy8gU2Nyb2xsIGRvd24gdW50aWwgaXRlbSBpcyBlbnRpcmVseSB2aXNpYmxlLlxuICAgICAgICBzY3JvbGxUYXJnZXQuc2Nyb2xsVG9wID0gZWxlbWVudFRvcDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZWxlbWVudCB0aGF0IHNob3VsZCBiZSBzY3JvbGxlZCB0byBicmluZyBhbiBpdGVtIGludG8gdmlldy5cbiAgICAgKlxuICAgICAqIFRoZSBkZWZhdWx0IHZhbHVlIG9mIHRoaXMgcHJvcGVydHkgaXMgdGhlIGVsZW1lbnQgaXRzZWxmLlxuICAgICAqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIGdldCBzY3JvbGxUYXJnZXQoKSB7XG4gICAgICAvLyBQcmVmZXIgYmFzZSByZXN1bHQuXG4gICAgICByZXR1cm4gJ3Njcm9sbFRhcmdldCcgaW4gYmFzZS5wcm90b3R5cGUgPyBzdXBlci5zY3JvbGxUYXJnZXQgOiB0aGlzO1xuICAgIH1cbiAgICBzZXQgc2Nyb2xsVGFyZ2V0KGVsZW1lbnQpIHtcbiAgICAgIGlmICgnc2Nyb2xsVGFyZ2V0JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zY3JvbGxUYXJnZXQgPSBlbGVtZW50OyB9XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gU2VsZWN0aW9uSW5WaWV3O1xufTtcbiIsIi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggU2hhZG93RWxlbWVudFJlZmVyZW5jZXMuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB0byBjcmVhdGUgcmVmZXJlbmNlcyB0byBlbGVtZW50cyBpbiBhIGNvbXBvbmVudCdzIFNoYWRvdyBET00gc3VidHJlZS5cbiAgICpcbiAgICogVGhpcyBhZGRzIGEgbWVtYmVyIG9uIHRoZSBjb21wb25lbnQgY2FsbGVkIGB0aGlzLiRgIHRoYXQgY2FuIGJlIHVzZWQgdG9cbiAgICogcmVmZXJlbmNlIHNoYWRvdyBlbGVtZW50cyB3aXRoIElEcy4gRS5nLiwgaWYgY29tcG9uZW50J3Mgc2hhZG93IGNvbnRhaW5zIGFuXG4gICAqIGVsZW1lbnQgYDxidXR0b24gaWQ9XCJmb29cIj5gLCB0aGVuIHRoaXMgbWl4aW4gd2lsbCBjcmVhdGUgYSBtZW1iZXJcbiAgICogYHRoaXMuJC5mb29gIHRoYXQgcG9pbnRzIHRvIHRoYXQgYnV0dG9uLlxuICAgKlxuICAgKiBTdWNoIHJlZmVyZW5jZXMgc2ltcGxpZnkgYSBjb21wb25lbnQncyBhY2Nlc3MgdG8gaXRzIG93biBlbGVtZW50cy4gSW5cbiAgICogZXhjaGFuZ2UsIHRoaXMgbWl4aW4gdHJhZGVzIG9mZiBhIG9uZS10aW1lIGNvc3Qgb2YgcXVlcnlpbmcgYWxsIGVsZW1lbnRzIGluXG4gICAqIHRoZSBzaGFkb3cgdHJlZSBpbnN0ZWFkIG9mIHBheWluZyBhbiBvbmdvaW5nIGNvc3QgdG8gcXVlcnkgZm9yIGFuIGVsZW1lbnRcbiAgICogZWFjaCB0aW1lIHRoZSBjb21wb25lbnQgd2FudHMgdG8gaW5zcGVjdCBvciBtYW5pcHVsYXRlIGl0LlxuICAgKlxuICAgKiBUaGlzIG1peGluIGV4cGVjdHMgdGhlIGNvbXBvbmVudCB0byBkZWZpbmUgYSBTaGFkb3cgRE9NIHN1YnRyZWUuIFlvdSBjYW5cbiAgICogY3JlYXRlIHRoYXQgdHJlZSB5b3Vyc2VsZiwgb3IgbWFrZSB1c2Ugb2YgdGhlXG4gICAqIFtTaGFkb3dUZW1wbGF0ZV0oU2hhZG93VGVtcGxhdGUubWQpIG1peGluLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGlzIGluc3BpcmVkIGJ5IFBvbHltZXIncyBbYXV0b21hdGljXG4gICAqIG5vZGUgZmluZGluZ10oaHR0cHM6Ly93d3cucG9seW1lci1wcm9qZWN0Lm9yZy8xLjAvZG9jcy9kZXZndWlkZS9sb2NhbC1kb20uaHRtbCNub2RlLWZpbmRpbmcpXG4gICAqIGZlYXR1cmUuXG4gICAqL1xuICBjbGFzcyBTaGFkb3dFbGVtZW50UmVmZXJlbmNlcyBleHRlbmRzIGJhc2Uge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgaWYgKHRoaXMuc2hhZG93Um9vdCkge1xuICAgICAgICAvLyBMb29rIGZvciBlbGVtZW50cyBpbiB0aGUgc2hhZG93IHN1YnRyZWUgdGhhdCBoYXZlIGlkIGF0dHJpYnV0ZXMuXG4gICAgICAgIC8vIEFuIGFsdGVybmF0aXZlbHkgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtaXhpbiB3b3VsZCBiZSB0byBqdXN0IGRlZmluZVxuICAgICAgICAvLyBhIHRoaXMuJCBnZXR0ZXIgdGhhdCBsYXppbHkgZG9lcyB0aGlzIHNlYXJjaCB0aGUgZmlyc3QgdGltZSBzb21lb25lXG4gICAgICAgIC8vIHRyaWVzIHRvIGFjY2VzcyB0aGlzLiQuIFRoYXQgbWlnaHQgaW50cm9kdWNlIHNvbWUgY29tcGxleGl0eSDigJMgaWYgdGhlXG4gICAgICAgIC8vIHRoZSB0cmVlIGNoYW5nZWQgYWZ0ZXIgaXQgd2FzIGZpcnN0IHBvcHVsYXRlZCwgdGhlIHJlc3VsdCBvZlxuICAgICAgICAvLyBzZWFyY2hpbmcgZm9yIGEgbm9kZSBtaWdodCBiZSBzb21ld2hhdCB1bnByZWRpY3RhYmxlLlxuICAgICAgICB0aGlzLiQgPSB7fTtcbiAgICAgICAgY29uc3Qgbm9kZXNXaXRoSWRzID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpZF0nKTtcbiAgICAgICAgW10uZm9yRWFjaC5jYWxsKG5vZGVzV2l0aElkcywgbm9kZSA9PiB7XG4gICAgICAgICAgY29uc3QgaWQgPSBub2RlLmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgICB0aGlzLiRbaWRdID0gbm9kZTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbGxlY3Rpb24gb2YgcmVmZXJlbmNlcyB0byB0aGUgZWxlbWVudHMgd2l0aCBJRHMgaW4gYSBjb21wb25lbnQnc1xuICAgICAqIFNoYWRvdyBET00gc3VidHJlZS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICogQG1lbWJlciAkXG4gICAgICovXG4gIH1cblxuICByZXR1cm4gU2hhZG93RWxlbWVudFJlZmVyZW5jZXM7XG59O1xuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBTaGFkb3dUZW1wbGF0ZS4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIGZvciBzdGFtcGluZyBhIHRlbXBsYXRlIGludG8gYSBTaGFkb3cgRE9NIHN1YnRyZWUgdXBvbiBjb21wb25lbnRcbiAgICogaW5zdGFudGlhdGlvbi5cbiAgICpcbiAgICogVG8gdXNlIHRoaXMgbWl4aW4sIGRlZmluZSBhIGB0ZW1wbGF0ZWAgcHJvcGVydHkgYXMgYSBzdHJpbmcgb3IgSFRNTFxuICAgKiBgPHRlbXBsYXRlPmAgZWxlbWVudDpcbiAgICpcbiAgICogICAgIGNsYXNzIE15RWxlbWVudCBleHRlbmRzIFNoYWRvd1RlbXBsYXRlKEhUTUxFbGVtZW50KSB7XG4gICAqICAgICAgIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICogICAgICAgICByZXR1cm4gYEhlbGxvLCA8ZW0+d29ybGQ8L2VtPi5gO1xuICAgKiAgICAgICB9XG4gICAqICAgICB9XG4gICAqXG4gICAqIFdoZW4geW91ciBjb21wb25lbnQgY2xhc3MgaXMgaW5zdGFudGlhdGVkLCBhIHNoYWRvdyByb290IHdpbGwgYmUgY3JlYXRlZCBvblxuICAgKiB0aGUgaW5zdGFuY2UsIGFuZCB0aGUgY29udGVudHMgb2YgdGhlIHRlbXBsYXRlIHdpbGwgYmUgY2xvbmVkIGludG8gdGhlXG4gICAqIHNoYWRvdyByb290LiBJZiB5b3VyIGNvbXBvbmVudCBkb2VzIG5vdCBkZWZpbmUgYSBgdGVtcGxhdGVgIHByb3BlcnR5LCB0aGlzXG4gICAqIG1peGluIGhhcyBubyBlZmZlY3QuXG4gICAqXG4gICAqIEZvciB0aGUgdGltZSBiZWluZywgdGhpcyBleHRlbnNpb24gcmV0YWlucyBzdXBwb3J0IGZvciBTaGFkb3cgRE9NIHYwLiBUaGF0XG4gICAqIHdpbGwgZXZlbnR1YWxseSBiZSBkZXByZWNhdGVkIGFzIGJyb3dzZXJzIChhbmQgdGhlIFNoYWRvdyBET00gcG9seWZpbGwpXG4gICAqIGltcGxlbWVudCBTaGFkb3cgRE9NIHYxLlxuICAgKi9cbiAgY2xhc3MgU2hhZG93VGVtcGxhdGUgZXh0ZW5kcyBiYXNlIHtcblxuICAgIC8qXG4gICAgICogSWYgdGhlIGNvbXBvbmVudCBkZWZpbmVzIGEgdGVtcGxhdGUsIGEgc2hhZG93IHJvb3Qgd2lsbCBiZSBjcmVhdGVkIG9uIHRoZVxuICAgICAqIGNvbXBvbmVudCBpbnN0YW5jZSwgYW5kIHRoZSB0ZW1wbGF0ZSBzdGFtcGVkIGludG8gaXQuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgbGV0IHRlbXBsYXRlID0gdGhpcy50ZW1wbGF0ZTtcbiAgICAgIC8vIFRPRE86IFNhdmUgdGhlIHByb2Nlc3NlZCB0ZW1wbGF0ZSB3aXRoIHRoZSBjb21wb25lbnQncyBjbGFzcyBwcm90b3R5cGVcbiAgICAgIC8vIHNvIGl0IGRvZXNuJ3QgbmVlZCB0byBiZSBwcm9jZXNzZWQgd2l0aCBldmVyeSBpbnN0YW50aWF0aW9uLlxuICAgICAgaWYgKHRlbXBsYXRlKSB7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0ZW1wbGF0ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAvLyBVcGdyYWRlIHBsYWluIHN0cmluZyB0byByZWFsIHRlbXBsYXRlLlxuICAgICAgICAgIHRlbXBsYXRlID0gY3JlYXRlVGVtcGxhdGVXaXRoSW5uZXJIVE1MKHRlbXBsYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh3aW5kb3cuU2hhZG93RE9NUG9seWZpbGwpIHtcbiAgICAgICAgICBzaGltVGVtcGxhdGVTdHlsZXModGVtcGxhdGUsIHRoaXMubG9jYWxOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJvb3QgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcbiAgICAgICAgY29uc3QgY2xvbmUgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRlbXBsYXRlLmNvbnRlbnQsIHRydWUpO1xuICAgICAgICByb290LmFwcGVuZENoaWxkKGNsb25lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBTaGFkb3dUZW1wbGF0ZTtcbn07XG5cblxuLy8gQ29udmVydCBhIHBsYWluIHN0cmluZyBvZiBIVE1MIGludG8gYSByZWFsIHRlbXBsYXRlIGVsZW1lbnQuXG5mdW5jdGlvbiBjcmVhdGVUZW1wbGF0ZVdpdGhJbm5lckhUTUwoaW5uZXJIVE1MKSB7XG4gIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgLy8gUkVWSUVXOiBJcyB0aGVyZSBhbiBlYXNpZXIgd2F5IHRvIGRvIHRoaXM/XG4gIC8vIFdlJ2QgbGlrZSB0byBqdXN0IHNldCBpbm5lckhUTUwgb24gdGhlIHRlbXBsYXRlIGNvbnRlbnQsIGJ1dCBzaW5jZSBpdCdzXG4gIC8vIGEgRG9jdW1lbnRGcmFnbWVudCwgdGhhdCBkb2Vzbid0IHdvcmsuXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuaW5uZXJIVE1MID0gaW5uZXJIVE1MO1xuICB3aGlsZSAoZGl2LmNoaWxkTm9kZXMubGVuZ3RoID4gMCkge1xuICAgIHRlbXBsYXRlLmNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2LmNoaWxkTm9kZXNbMF0pO1xuICB9XG4gIHJldHVybiB0ZW1wbGF0ZTtcbn1cblxuLy8gSW52b2tlIGJhc2ljIHN0eWxlIHNoaW1taW5nIHdpdGggU2hhZG93Q1NTLlxuZnVuY3Rpb24gc2hpbVRlbXBsYXRlU3R5bGVzKHRlbXBsYXRlLCB0YWcpIHtcbiAgd2luZG93LldlYkNvbXBvbmVudHMuU2hhZG93Q1NTLnNoaW1TdHlsaW5nKHRlbXBsYXRlLmNvbnRlbnQsIHRhZyk7XG59XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4vY3JlYXRlU3ltYm9sJztcbmltcG9ydCBtaWNyb3Rhc2sgZnJvbSAnLi9taWNyb3Rhc2snO1xuaW1wb3J0IHN5bWJvbHMgZnJvbSAnLi9zeW1ib2xzJztcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3QgY2FuU2VsZWN0TmV4dFN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnY2FuU2VsZWN0TmV4dCcpO1xuY29uc3QgY2FuU2VsZWN0UHJldmlvdXNTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2NhblNlbGVjdFByZXZpb3VzJyk7XG5jb25zdCBzZWxlY3RlZEl0ZW1TeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3NlbGVjdGVkSXRlbScpO1xuY29uc3Qgc2VsZWN0aW9uUmVxdWlyZWRTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3NlbGVjdGlvblJlcXVpcmVkJyk7XG5jb25zdCBzZWxlY3Rpb25XcmFwc1N5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnc2VsZWN0aW9uV3JhcHMnKTtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFNpbmdsZVNlbGVjdGlvbi4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIG1hbmFnZXMgc2luZ2xlLXNlbGVjdGlvbiBzZW1hbnRpY3MgZm9yIGl0ZW1zIGluIGEgbGlzdC5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIGEgY29tcG9uZW50IHRvIHByb3ZpZGUgYW4gYGl0ZW1zYCBhcnJheSBvZiBhbGwgZWxlbWVudHNcbiAgICogaW4gdGhlIGxpc3QuIEEgc3RhbmRhcmQgd2F5IHRvIGRvIHRoYXQgd2l0aCBpcyB0aGVcbiAgICogW0NvbnRlbnRBc0l0ZW1zXShDb250ZW50QXNJdGVtcy5tZCkgbWl4aW4sIHdoaWNoIHRha2VzIGEgY29tcG9uZW50J3NcbiAgICogY29udGVudCAodHlwaWNhbGx5IGl0cyBkaXN0cmlidXRlZCBjaGlsZHJlbikgYXMgdGhlIHNldCBvZiBsaXN0IGl0ZW1zOyBzZWVcbiAgICogdGhhdCBtaXhpbiBmb3IgZGV0YWlscy5cbiAgICpcbiAgICogVGhpcyBtaXhpbiB0cmFja3MgYSBzaW5nbGUgc2VsZWN0ZWQgaXRlbSBpbiB0aGUgbGlzdCwgYW5kIHByb3ZpZGVzIG1lYW5zIHRvXG4gICAqIGdldCBhbmQgc2V0IHRoYXQgc3RhdGUgYnkgaXRlbSBwb3NpdGlvbiAoYHNlbGVjdGVkSW5kZXhgKSBvciBpdGVtIGlkZW50aXR5XG4gICAqIChgc2VsZWN0ZWRJdGVtYCkuIFRoZSBzZWxlY3Rpb24gY2FuIGJlIG1vdmVkIGluIHRoZSBsaXN0IHZpYSB0aGUgbWV0aG9kc1xuICAgKiBgc2VsZWN0Rmlyc3RgLCBgc2VsZWN0TGFzdGAsIGBzZWxlY3ROZXh0YCwgYW5kIGBzZWxlY3RQcmV2aW91c2AuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZG9lcyBub3QgcHJvZHVjZSBhbnkgdXNlci12aXNpYmxlIGVmZmVjdHMgdG8gcmVwcmVzZW50XG4gICAqIHNlbGVjdGlvbi4gT3RoZXIgbWl4aW5zLCBzdWNoIGFzXG4gICAqIFtTZWxlY3Rpb25BcmlhQWN0aXZlXShTZWxlY3Rpb25BcmlhQWN0aXZlLm1kKSxcbiAgICogW1NlbGVjdGlvbkhpZ2hsaWdodF0oU2VsZWN0aW9uSGlnaGxpZ2h0Lm1kKSBhbmRcbiAgICogW1NlbGVjdGlvbkluVmlld10oU2VsZWN0aW9uSW5WaWV3Lm1kKSwgbW9kaWZ5IHRoZSBzZWxlY3RlZCBpdGVtIGluIGNvbW1vblxuICAgKiB3YXlzIHRvIGxldCB0aGUgdXNlciBrbm93IGEgZ2l2ZW4gaXRlbSBpcyBzZWxlY3RlZCBvciBub3Qgc2VsZWN0ZWQuXG4gICAqL1xuICBjbGFzcyBTaW5nbGVTZWxlY3Rpb24gZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIC8vIFNldCBkZWZhdWx0cy5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5zZWxlY3Rpb25SZXF1aXJlZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25SZXF1aXJlZCA9IHRoaXNbc3ltYm9scy5kZWZhdWx0c10uc2VsZWN0aW9uUmVxdWlyZWQ7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHRoaXMuc2VsZWN0aW9uV3JhcHMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uV3JhcHMgPSB0aGlzW3N5bWJvbHMuZGVmYXVsdHNdLnNlbGVjdGlvbldyYXBzO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFwcGx5IHRoZSBpbmRpY2F0ZSBzZWxlY3Rpb24gc3RhdGUgdG8gdGhlIGl0ZW0uXG4gICAgICpcbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuIFVzZXItdmlzaWJsZVxuICAgICAqIGVmZmVjdHMgd2lsbCB0eXBpY2FsbHkgYmUgaGFuZGxlZCBieSBvdGhlciBtaXhpbnMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpdGVtIC0gdGhlIGl0ZW0gYmVpbmcgc2VsZWN0ZWQvZGVzZWxlY3RlZFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gc2VsZWN0ZWQgLSB0cnVlIGlmIHRoZSBpdGVtIGlzIHNlbGVjdGVkLCBmYWxzZSBpZiBub3RcbiAgICAgKi9cbiAgICBbc3ltYm9scy5hcHBseVNlbGVjdGlvbl0oaXRlbSwgc2VsZWN0ZWQpIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLmFwcGx5U2VsZWN0aW9uXSkgeyBzdXBlcltzeW1ib2xzLmFwcGx5U2VsZWN0aW9uXShpdGVtLCBzZWxlY3RlZCk7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHRoZSBzZWxlY3Rpb24gY2FuIGJlIG1vdmVkIHRvIHRoZSBuZXh0IGl0ZW0sIGZhbHNlIGlmIG5vdCAodGhlXG4gICAgICogc2VsZWN0ZWQgaXRlbSBpcyB0aGUgbGFzdCBpdGVtIGluIHRoZSBsaXN0KS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIGdldCBjYW5TZWxlY3ROZXh0KCkge1xuICAgICAgcmV0dXJuIHRoaXNbY2FuU2VsZWN0TmV4dFN5bWJvbF07XG4gICAgfVxuICAgIHNldCBjYW5TZWxlY3ROZXh0KGNhblNlbGVjdE5leHQpIHtcbiAgICAgIHRoaXNbY2FuU2VsZWN0TmV4dFN5bWJvbF0gPSBjYW5TZWxlY3ROZXh0O1xuICAgICAgaWYgKCdjYW5TZWxlY3ROZXh0JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5jYW5TZWxlY3ROZXh0ID0gY2FuU2VsZWN0TmV4dDsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRydWUgaWYgdGhlIHNlbGVjdGlvbiBjYW4gYmUgbW92ZWQgdG8gdGhlIHByZXZpb3VzIGl0ZW0sIGZhbHNlIGlmIG5vdFxuICAgICAqICh0aGUgc2VsZWN0ZWQgaXRlbSBpcyB0aGUgZmlyc3Qgb25lIGluIHRoZSBsaXN0KS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIGdldCBjYW5TZWxlY3RQcmV2aW91cygpIHtcbiAgICAgIHJldHVybiB0aGlzW2NhblNlbGVjdFByZXZpb3VzU3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IGNhblNlbGVjdFByZXZpb3VzKGNhblNlbGVjdFByZXZpb3VzKSB7XG4gICAgICB0aGlzW2NhblNlbGVjdFByZXZpb3VzU3ltYm9sXSA9IGNhblNlbGVjdFByZXZpb3VzO1xuICAgICAgaWYgKCdjYW5TZWxlY3RQcmV2aW91cycgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuY2FuU2VsZWN0UHJldmlvdXMgPSBjYW5TZWxlY3RQcmV2aW91czsgfVxuICAgIH1cblxuICAgIGdldCBbc3ltYm9scy5kZWZhdWx0c10oKSB7XG4gICAgICBjb25zdCBkZWZhdWx0cyA9IHN1cGVyW3N5bWJvbHMuZGVmYXVsdHNdIHx8IHt9O1xuICAgICAgZGVmYXVsdHMuc2VsZWN0aW9uUmVxdWlyZWQgPSBmYWxzZTtcbiAgICAgIGRlZmF1bHRzLnNlbGVjdGlvbldyYXBzID0gZmFsc2U7XG4gICAgICByZXR1cm4gZGVmYXVsdHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIGEgbmV3IGl0ZW0gYmVpbmcgYWRkZWQgdG8gdGhlIGxpc3QuXG4gICAgICpcbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBzaW1wbHkgc2V0cyB0aGUgaXRlbSdzXG4gICAgICogc2VsZWN0aW9uIHN0YXRlIHRvIGZhbHNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaXRlbSAtIHRoZSBpdGVtIGJlaW5nIGFkZGVkXG4gICAgICovXG4gICAgW3N5bWJvbHMuaXRlbUFkZGVkXShpdGVtKSB7XG4gICAgICBpZiAoc3VwZXJbc3ltYm9scy5pdGVtQWRkZWRdKSB7IHN1cGVyW3N5bWJvbHMuaXRlbUFkZGVkXShpdGVtKTsgfVxuICAgICAgdGhpc1tzeW1ib2xzLmFwcGx5U2VsZWN0aW9uXShpdGVtLCBpdGVtID09PSB0aGlzLnNlbGVjdGVkSXRlbSk7XG4gICAgfVxuXG4gICAgaXRlbXNDaGFuZ2VkKCkge1xuICAgICAgaWYgKHN1cGVyLml0ZW1zQ2hhbmdlZCkgeyBzdXBlci5pdGVtc0NoYW5nZWQoKTsgfVxuXG4gICAgICBpZiAodGhpcy5zZWxlY3Rpb25SZXF1aXJlZCkge1xuICAgICAgICAvLyBFbnN1cmUgc2VsZWN0aW9uLCBidXQgZG8gdGhpcyBpbiB0aGUgbmV4dCB0aWNrIHRvIGdpdmUgb3RoZXIgbWl4aW5zIGFcbiAgICAgICAgLy8gY2hhbmNlIHRvIGRvIHRoZWlyIG93biBpdGVtc0NoYW5nZWQgd29yay5cbiAgICAgICAgbWljcm90YXNrKCgpID0+IHtcbiAgICAgICAgICBlbnN1cmVTZWxlY3Rpb24odGhpcyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY2hhbmdlIGluIGl0ZW1zIG1heSBoYXZlIGFmZmVjdGVkIHdoaWNoIG5hdmlnYXRpb25zIGFyZSBwb3NzaWJsZS5cbiAgICAgIHVwZGF0ZVBvc3NpYmxlTmF2aWdhdGlvbnModGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGluZGV4IG9mIHRoZSBpdGVtIHdoaWNoIGlzIGN1cnJlbnRseSBzZWxlY3RlZC5cbiAgICAgKlxuICAgICAqIElmIGBzZWxlY3Rpb25XcmFwc2AgaXMgZmFsc2UsIHRoZSBpbmRleCBpcyAtMSBpZiB0aGVyZSBpcyBubyBzZWxlY3Rpb24uXG4gICAgICogSW4gdGhhdCBjYXNlLCBzZXR0aW5nIHRoZSBpbmRleCB0byAtMSB3aWxsIGRlc2VsZWN0IGFueVxuICAgICAqIGN1cnJlbnRseS1zZWxlY3RlZCBpdGVtLlxuICAgICAqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0ZWRJbmRleCgpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkSXRlbSA9IHRoaXMuc2VsZWN0ZWRJdGVtO1xuXG4gICAgICAvLyBUT0RPOiBJZiBzZWxlY3Rpb24gd2Fzbid0IGZvdW5kLCBtb3N0IGxpa2VseSBjYXVzZSBpcyB0aGF0IHRoZSBET00gd2FzXG4gICAgICAvLyBtYW5pcHVsYXRlZCBmcm9tIHVuZGVybmVhdGggdXMuIE9uY2Ugd2UgdHJhY2sgY29udGVudCBjaGFuZ2VzLCB0dXJuXG4gICAgICAvLyB0aGlzIGludG8gYSB3YXJuaW5nLlxuICAgICAgLy8gVE9ETzogTWVtb2l6ZVxuICAgICAgcmV0dXJuIHNlbGVjdGVkSXRlbSA/XG4gICAgICAgIHRoaXMuaXRlbXMuaW5kZXhPZihzZWxlY3RlZEl0ZW0pIDpcbiAgICAgICAgLTE7XG4gICAgfVxuICAgIHNldCBzZWxlY3RlZEluZGV4KGluZGV4KSB7XG4gICAgICAvLyBUT0RPOiBQdWxsIHNldHRpbmcgb2Ygc2VsZWN0ZWRJdGVtIGFib3ZlIHN1cGVyKCkgY2FsbC4gKi9cbiAgICAgIGlmICgnc2VsZWN0ZWRJbmRleCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJbmRleCA9IGluZGV4OyB9XG4gICAgICBjb25zdCBpdGVtcyA9IHRoaXMuaXRlbXM7XG4gICAgICBjb25zdCBpdGVtID0gKGluZGV4IDwgMCB8fCBpdGVtcy5sZW5ndGggPT09IDApID9cbiAgICAgICAgbnVsbCA6XG4gICAgICAgIGl0ZW1zW2luZGV4XTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gaXRlbTtcblxuICAgICAgY29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3NlbGVjdGVkLWluZGV4LWNoYW5nZWQnLCB7XG4gICAgICAgIGRldGFpbDoge1xuICAgICAgICAgIHNlbGVjdGVkSW5kZXg6IGluZGV4LFxuICAgICAgICAgIHZhbHVlOiBpbmRleCAvLyBmb3IgUG9seW1lciBiaW5kaW5nXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudGx5IHNlbGVjdGVkIGl0ZW0sIG9yIG51bGwgaWYgdGhlcmUgaXMgbm8gc2VsZWN0aW9uLlxuICAgICAqXG4gICAgICogU2V0dGluZyB0aGlzIHByb3BlcnR5IHRvIG51bGwgZGVzZWxlY3RzIGFueSBjdXJyZW50bHktc2VsZWN0ZWQgaXRlbS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGVkSXRlbSgpIHtcbiAgICAgIHJldHVybiB0aGlzW3NlbGVjdGVkSXRlbVN5bWJvbF0gfHwgbnVsbDtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGVkSXRlbShpdGVtKSB7XG4gICAgICBjb25zdCBwcmV2aW91c0l0ZW0gPSB0aGlzW3NlbGVjdGVkSXRlbVN5bWJvbF07XG4gICAgICAvLyBUT0RPOiBDb25maXJtIGl0ZW0gaXMgYWN0dWFsbHkgaW4gdGhlIGxpc3QgYmVmb3JlIHNlbGVjdGluZy5cbiAgICAgIHRoaXNbc2VsZWN0ZWRJdGVtU3ltYm9sXSA9IGl0ZW07XG5cbiAgICAgIGlmICgnc2VsZWN0ZWRJdGVtJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEl0ZW0gPSBpdGVtOyB9XG4gICAgICBpZiAocHJldmlvdXNJdGVtKSB7XG4gICAgICAgIGlmIChpdGVtID09PSBwcmV2aW91c0l0ZW0pIHtcbiAgICAgICAgICAvLyBUaGUgaW5kaWNhdGVkIGl0ZW0gaXMgYWxyZWFkeSB0aGUgc2VsZWN0ZWQgaXRlbS5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVtb3ZlIHByZXZpb3VzIHNlbGVjdGlvbi5cbiAgICAgICAgdGhpc1tzeW1ib2xzLmFwcGx5U2VsZWN0aW9uXShwcmV2aW91c0l0ZW0sIGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgdGhpc1tzeW1ib2xzLmFwcGx5U2VsZWN0aW9uXShpdGVtLCB0cnVlKTtcbiAgICAgIH1cblxuICAgICAgLy8gVE9ETzogUmF0aW9uYWxpemUgd2l0aCBzZWxlY3RlZEluZGV4IHNvIHdlJ3JlIG5vdCByZWNhbGN1bGF0aW5nIGl0ZW1cbiAgICAgIC8vIG9yIGluZGV4IGluIGVhY2ggc2V0dGVyLlxuICAgICAgdXBkYXRlUG9zc2libGVOYXZpZ2F0aW9ucyh0aGlzKTtcblxuICAgICAgY29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3NlbGVjdGVkLWl0ZW0tY2hhbmdlZCcsIHtcbiAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgc2VsZWN0ZWRJdGVtOiBpdGVtLFxuICAgICAgICAgIHByZXZpb3VzSXRlbTogcHJldmlvdXNJdGVtLFxuICAgICAgICAgIHZhbHVlOiBpdGVtIC8vIGZvciBQb2x5bWVyIGJpbmRpbmdcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCB0aGUgZmlyc3QgaXRlbSBpbiB0aGUgbGlzdC5cbiAgICAgKi9cbiAgICBzZWxlY3RGaXJzdCgpIHtcbiAgICAgIGlmIChzdXBlci5zZWxlY3RGaXJzdCkgeyBzdXBlci5zZWxlY3RGaXJzdCgpOyB9XG4gICAgICByZXR1cm4gc2VsZWN0SW5kZXgodGhpcywgMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiB0aGUgbGlzdCBzaG91bGQgYWx3YXlzIGhhdmUgYSBzZWxlY3Rpb24gKGlmIGl0IGhhcyBpdGVtcykuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuICAgIGdldCBzZWxlY3Rpb25SZXF1aXJlZCgpIHtcbiAgICAgIHJldHVybiB0aGlzW3NlbGVjdGlvblJlcXVpcmVkU3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGlvblJlcXVpcmVkKHNlbGVjdGlvblJlcXVpcmVkKSB7XG4gICAgICB0aGlzW3NlbGVjdGlvblJlcXVpcmVkU3ltYm9sXSA9IHNlbGVjdGlvblJlcXVpcmVkO1xuICAgICAgaWYgKCdzZWxlY3Rpb25SZXF1aXJlZCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0aW9uUmVxdWlyZWQgPSBzZWxlY3Rpb25SZXF1aXJlZDsgfVxuICAgICAgaWYgKHNlbGVjdGlvblJlcXVpcmVkKSB7XG4gICAgICAgIGVuc3VyZVNlbGVjdGlvbih0aGlzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgdGhlIGxhc3QgaXRlbSBpbiB0aGUgbGlzdC5cbiAgICAgKi9cbiAgICBzZWxlY3RMYXN0KCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdExhc3QpIHsgc3VwZXIuc2VsZWN0TGFzdCgpOyB9XG4gICAgICByZXR1cm4gc2VsZWN0SW5kZXgodGhpcywgdGhpcy5pdGVtcy5sZW5ndGggLSAxKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgdGhlIG5leHQgaXRlbSBpbiB0aGUgbGlzdC5cbiAgICAgKi9cbiAgICBzZWxlY3ROZXh0KCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdE5leHQpIHsgc3VwZXIuc2VsZWN0TmV4dCgpOyB9XG4gICAgICByZXR1cm4gc2VsZWN0SW5kZXgodGhpcywgdGhpcy5zZWxlY3RlZEluZGV4ICsgMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IHRoZSBwcmV2aW91cyBpdGVtIGluIHRoZSBsaXN0LlxuICAgICAqXG4gICAgICogSWYgdGhlIGxpc3QgaGFzIG5vIHNlbGVjdGlvbiwgdGhlIGxhc3QgaXRlbSB3aWxsIGJlIHNlbGVjdGVkLlxuICAgICAqL1xuICAgIHNlbGVjdFByZXZpb3VzKCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdFByZXZpb3VzKSB7IHN1cGVyLnNlbGVjdFByZXZpb3VzKCk7IH1cbiAgICAgIGNvbnN0IG5ld0luZGV4ID0gdGhpcy5zZWxlY3RlZEluZGV4IDwgMCA/XG4gICAgICAgIHRoaXMuaXRlbXMubGVuZ3RoIC0gMSA6ICAgICAvLyBObyBzZWxlY3Rpb24geWV0OyBzZWxlY3QgbGFzdCBpdGVtLlxuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggLSAxO1xuICAgICAgcmV0dXJuIHNlbGVjdEluZGV4KHRoaXMsIG5ld0luZGV4KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHNlbGVjdGlvbiBuYXZpZ2F0aW9ucyB3cmFwIGZyb20gbGFzdCB0byBmaXJzdCwgYW5kIHZpY2UgdmVyc2EuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuICAgIGdldCBzZWxlY3Rpb25XcmFwcygpIHtcbiAgICAgIHJldHVybiB0aGlzW3NlbGVjdGlvbldyYXBzU3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGlvbldyYXBzKHZhbHVlKSB7XG4gICAgICB0aGlzW3NlbGVjdGlvbldyYXBzU3ltYm9sXSA9IFN0cmluZyh2YWx1ZSkgPT09ICd0cnVlJztcbiAgICAgIGlmICgnc2VsZWN0aW9uV3JhcHMnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGlvbldyYXBzID0gdmFsdWU7IH1cbiAgICAgIHVwZGF0ZVBvc3NpYmxlTmF2aWdhdGlvbnModGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmlyZXMgd2hlbiB0aGUgc2VsZWN0ZWRJdGVtIHByb3BlcnR5IGNoYW5nZXMuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgU2luZ2xlU2VsZWN0aW9uXG4gICAgICogQGV2ZW50IHNlbGVjdGVkLWl0ZW0tY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGRldGFpbC5zZWxlY3RlZEl0ZW0gVGhlIG5ldyBzZWxlY3RlZCBpdGVtLlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGRldGFpbC5wcmV2aW91c0l0ZW0gVGhlIHByZXZpb3VzbHkgc2VsZWN0ZWQgaXRlbS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEZpcmVzIHdoZW4gdGhlIHNlbGVjdGVkSW5kZXggcHJvcGVydHkgY2hhbmdlcy5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBTaW5nbGVTZWxlY3Rpb25cbiAgICAgKiBAZXZlbnQgc2VsZWN0ZWQtaW5kZXgtY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkZXRhaWwuc2VsZWN0ZWRJbmRleCBUaGUgbmV3IHNlbGVjdGVkIGluZGV4LlxuICAgICAqL1xuXG4gIH1cblxuICByZXR1cm4gU2luZ2xlU2VsZWN0aW9uO1xufTtcblxuXG4vLyBJZiBubyBpdGVtIGlzIHNlbGVjdGVkLCBzZWxlY3QgYSBkZWZhdWx0IGl0ZW0uXG5mdW5jdGlvbiBlbnN1cmVTZWxlY3Rpb24oZWxlbWVudCkge1xuICBjb25zdCBpbmRleCA9IGVsZW1lbnQuc2VsZWN0ZWRJbmRleDtcbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIC8vIFNlbGVjdGVkIGl0ZW0gaXMgbm8gbG9uZ2VyIGluIHRoZSBjdXJyZW50IHNldCBvZiBpdGVtcy5cbiAgICBpZiAoZWxlbWVudC5pdGVtcyAmJiBlbGVtZW50Lml0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIFNlbGVjdCB0aGUgZmlyc3QgaXRlbS5cbiAgICAgIC8vIFRPRE86IElmIHRoZSBwcmV2aW91c2x5LXNlbGVjdGVkIGl0ZW0gaGFzIGJlZW4gZGVsZXRlZCwgdHJ5IHRvIHNlbGVjdFxuICAgICAgLy8gYW4gaXRlbSBhZGphY2VudCB0byB0aGUgcG9zaXRpb24gaXQgaGVsZC5cbiAgICAgIGVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE5vIGl0ZW1zIGZvciB1cyB0byBzZWxlY3QsIGJ1dCB3ZSBjYW4gYXQgbGVhc3Qgc2lnbmFsIHRoYXQgdGhlcmUncyBub1xuICAgICAgLy8gbG9uZ2VyIGEgc2VsZWN0aW9uLlxuICAgICAgZWxlbWVudC5zZWxlY3RlZEl0ZW0gPSBudWxsO1xuICAgIH1cbiAgfVxufVxuXG4vLyBFbnN1cmUgdGhlIGdpdmVuIGluZGV4IGlzIHdpdGhpbiBib3VuZHMsIGFuZCBzZWxlY3QgaXQgaWYgaXQncyBub3QgYWxyZWFkeVxuLy8gc2VsZWN0ZWQuXG5mdW5jdGlvbiBzZWxlY3RJbmRleChlbGVtZW50LCBpbmRleCkge1xuICBjb25zdCBjb3VudCA9IGVsZW1lbnQuaXRlbXMubGVuZ3RoO1xuXG4gIGNvbnN0IGJvdW5kZWRJbmRleCA9IChlbGVtZW50LnNlbGVjdGlvbldyYXBzKSA/XG4gICAgLy8gSmF2YVNjcmlwdCBtb2QgZG9lc24ndCBoYW5kbGUgbmVnYXRpdmUgbnVtYmVycyB0aGUgd2F5IHdlIHdhbnQgdG8gd3JhcC5cbiAgICAvLyBTZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTg2MTgyNTAvNzY0NzJcbiAgICAoKGluZGV4ICUgY291bnQpICsgY291bnQpICUgY291bnQgOlxuXG4gICAgLy8gS2VlcCBpbmRleCB3aXRoaW4gYm91bmRzIG9mIGFycmF5LlxuICAgIE1hdGgubWF4KE1hdGgubWluKGluZGV4LCBjb3VudCAtIDEpLCAwKTtcblxuICBjb25zdCBwcmV2aW91c0luZGV4ID0gZWxlbWVudC5zZWxlY3RlZEluZGV4O1xuICBpZiAocHJldmlvdXNJbmRleCAhPT0gYm91bmRlZEluZGV4KSB7XG4gICAgZWxlbWVudC5zZWxlY3RlZEluZGV4ID0gYm91bmRlZEluZGV4O1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG4vLyBGb2xsb3dpbmcgYSBjaGFuZ2UgaW4gc2VsZWN0aW9uLCByZXBvcnQgd2hldGhlciBpdCdzIG5vdyBwb3NzaWJsZSB0b1xuLy8gZ28gbmV4dC9wcmV2aW91cyBmcm9tIHRoZSBnaXZlbiBpbmRleC5cbmZ1bmN0aW9uIHVwZGF0ZVBvc3NpYmxlTmF2aWdhdGlvbnMoZWxlbWVudCkge1xuICBsZXQgY2FuU2VsZWN0TmV4dDtcbiAgbGV0IGNhblNlbGVjdFByZXZpb3VzO1xuICBjb25zdCBpdGVtcyA9IGVsZW1lbnQuaXRlbXM7XG4gIGlmIChpdGVtcyA9PSBudWxsIHx8IGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgIC8vIE5vIGl0ZW1zIHRvIHNlbGVjdC5cbiAgICBjYW5TZWxlY3ROZXh0ID0gZmFsc2U7XG4gICAgY2FuU2VsZWN0UHJldmlvdXMgPSBmYWxzZTtcbiAgfSBpZiAoZWxlbWVudC5zZWxlY3Rpb25XcmFwcykge1xuICAgIC8vIFNpbmNlIHRoZXJlIGFyZSBpdGVtcywgY2FuIGFsd2F5cyBnbyBuZXh0L3ByZXZpb3VzLlxuICAgIGNhblNlbGVjdE5leHQgPSB0cnVlO1xuICAgIGNhblNlbGVjdFByZXZpb3VzID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBpbmRleCA9IGVsZW1lbnQuc2VsZWN0ZWRJbmRleDtcbiAgICBpZiAoaW5kZXggPCAwICYmIGl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIFNwZWNpYWwgY2FzZS4gSWYgdGhlcmUgYXJlIGl0ZW1zIGJ1dCBubyBzZWxlY3Rpb24sIGRlY2xhcmUgdGhhdCBpdCdzXG4gICAgICAvLyBhbHdheXMgcG9zc2libGUgdG8gZ28gbmV4dC9wcmV2aW91cyB0byBjcmVhdGUgYSBzZWxlY3Rpb24uXG4gICAgICBjYW5TZWxlY3ROZXh0ID0gdHJ1ZTtcbiAgICAgIGNhblNlbGVjdFByZXZpb3VzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTm9ybWFsIGNhc2U6IHdlIGhhdmUgYW4gaW5kZXggaW4gYSBsaXN0IHRoYXQgaGFzIGl0ZW1zLlxuICAgICAgY2FuU2VsZWN0UHJldmlvdXMgPSAoaW5kZXggPiAwKTtcbiAgICAgIGNhblNlbGVjdE5leHQgPSAoaW5kZXggPCBpdGVtcy5sZW5ndGggLSAxKTtcbiAgICB9XG4gIH1cbiAgZWxlbWVudC5jYW5TZWxlY3ROZXh0ID0gY2FuU2VsZWN0TmV4dDtcbiAgZWxlbWVudC5jYW5TZWxlY3RQcmV2aW91cyA9IGNhblNlbGVjdFByZXZpb3VzO1xufVxuIiwiLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gY3JlYXRlIGEgc3ltYm9sIHRoYXQgY2FuIGJlIHVzZWQgZm9yIGFzc29jaWF0aW5nIHByaXZhdGVcbiAqIGRhdGEgd2l0aCBhbiBlbGVtZW50LlxuICpcbiAqIE1peGlucyBhbmQgY29tcG9uZW50IGNsYXNzZXMgb2Z0ZW4gd2FudCB0byBhc3NvY2lhdGUgcHJpdmF0ZSBkYXRhIHdpdGggYW5cbiAqIGVsZW1lbnQgaW5zdGFuY2UsIGJ1dCBKYXZhU2NyaXB0IGRvZXMgbm90IGhhdmUgZGlyZWN0IHN1cHBvcnQgZm9yIHRydWVcbiAqIHByaXZhdGUgcHJvcGVydGllcy4gT25lIGFwcHJvYWNoIGlzIHRvIHVzZSB0aGVcbiAqIFtTeW1ib2xdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL1N5bWJvbClcbiAqIGRhdGEgdHlwZSB0byBzZXQgYW5kIHJldHJpZXZlIGRhdGEgb24gYW4gZWxlbWVudC5cbiAqXG4gKiBVbmZvcnR1bmF0ZWx5LCB0aGUgU3ltYm9sIHR5cGUgaXMgbm90IGF2YWlsYWJsZSBpbiBJbnRlcm5ldCBFeHBsb3JlciAxMS4gVGhlXG4gKiBgY3JlYXRlU3ltYm9sYCBoZWxwZXIgZnVuY3Rpb24gZXhpc3RzIGFzIGEgd29ya2Fyb3VuZCBmb3IgSUUgMTEuIFJhdGhlciB0aGFuXG4gKiByZXR1cm5pbmcgYSB0cnVlIFN5bWJvbCwgaXQgc2ltcGx5IHJldHVybnMgYW4gdW5kZXJzY29yZS1wcmVmaXhlZCBzdHJpbmcuXG4gKlxuICogVXNhZ2U6XG4gKlxuICogICAgIGNvbnN0IGZvb1N5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnZm9vJyk7XG4gKlxuICogICAgIGNsYXNzIE15RWxlbWVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAqICAgICAgIGdldCBmb28oKSB7XG4gKiAgICAgICAgIHJldHVybiB0aGlzW2Zvb1N5bWJvbF07XG4gKiAgICAgICB9XG4gKiAgICAgICBzZXQgZm9vKHZhbHVlKSB7XG4gKiAgICAgICAgIHRoaXNbZm9vU3ltYm9sXSA9IHZhbHVlO1xuICogICAgICAgfVxuICogICAgIH1cbiAqXG4gKiBJbiBJRSAxMSwgdGhpcyBzYW1wbGUgd2lsbCBcImhpZGVcIiBkYXRhIGJlaGluZCBhbiBpbnN0YW5jZSBwcm9wZXJ0eSB0aGlzLl9mb28uXG4gKiBUaGUgdXNlIG9mIHRoZSB1bmRlcnNjb3JlIGlzIG1lYW50IHRvIHJlZHVjZSAobm90IGVsaW1pbmF0ZSkgdGhlIHBvdGVudGlhbFxuICogZm9yIG5hbWUgY29uZmxpY3RzLCBhbmQgZGlzY291cmFnZSAobm90IHByZXZlbnQpIGV4dGVybmFsIGFjY2VzcyB0byB0aGlzXG4gKiBkYXRhLiBJbiBtb2Rlcm4gYnJvd3NlcnMsIHRoZSBhYm92ZSBjb2RlIHdpbGwgZWxpbWluYXRlIHRoZSBwb3RlbnRpYWwgb2ZcbiAqIG5hbWluZyBjb25mbGljdHMsIGFuZCBiZXR0ZXIgaGlkZSB0aGUgZGF0YSBiZWhpbmQgYSByZWFsIFN5bWJvbC5cbiAqXG4gKiBAZnVuY3Rpb24gY3JlYXRlU3ltYm9sXG4gKiBAcGFyYW0ge3N0cmluZ30gZGVzY3JpcHRpb24gLSBBIHN0cmluZyB0byBpZGVudGlmeSB0aGUgc3ltYm9sIHdoZW4gZGVidWdnaW5nXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVN5bWJvbChkZXNjcmlwdGlvbikge1xuICByZXR1cm4gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyA/XG4gICAgU3ltYm9sKGRlc2NyaXB0aW9uKSA6XG4gICAgYF8ke2Rlc2NyaXB0aW9ufWA7XG59XG4iLCIvKlxuICogTWljcm90YXNrIGhlbHBlciBmb3IgSUUgMTEuXG4gKlxuICogRXhlY3V0aW5nIGEgZnVuY3Rpb24gYXMgYSBtaWNyb3Rhc2sgaXMgdHJpdmlhbCBpbiBicm93c2VycyB0aGF0IHN1cHBvcnRcbiAqIHByb21pc2VzLCB3aG9zZSB0aGVuKCkgY2xhdXNlcyB1c2UgbWljcm90YXNrIHRpbWluZy4gSUUgMTEgZG9lc24ndCBzdXBwb3J0XG4gKiBwcm9taXNlcywgYnV0IGRvZXMgc3VwcG9ydCBNdXRhdGlvbk9ic2VydmVycywgd2hpY2ggYXJlIGFsc28gZXhlY3V0ZWQgYXNcbiAqIG1pY3JvdGFza3MuIFNvIHRoaXMgaGVscGVyIHVzZXMgYW4gTXV0YXRpb25PYnNlcnZlciB0byBhY2hpZXZlIG1pY3JvdGFza1xuICogdGltaW5nLlxuICpcbiAqIFNlZSBodHRwczovL2pha2VhcmNoaWJhbGQuY29tLzIwMTUvdGFza3MtbWljcm90YXNrcy1xdWV1ZXMtYW5kLXNjaGVkdWxlcy9cbiAqXG4gKiBJbnNwaXJlZCBieSBQb2x5bWVyJ3MgYXN5bmMoKSBmdW5jdGlvbi5cbiAqL1xuXG5cbi8vIFRoZSBxdWV1ZSBvZiBwZW5kaW5nIGNhbGxiYWNrcyB0byBiZSBleGVjdXRlZCBhcyBtaWNyb3Rhc2tzLlxuY29uc3QgY2FsbGJhY2tzID0gW107XG5cbi8vIENyZWF0ZSBhbiBlbGVtZW50IHRoYXQgd2Ugd2lsbCBtb2RpZnkgdG8gZm9yY2Ugb2JzZXJ2YWJsZSBtdXRhdGlvbnMuXG5jb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuXG4vLyBBIG1vbm90b25pY2FsbHktaW5jcmVhc2luZyB2YWx1ZS5cbmxldCBjb3VudGVyID0gMDtcblxuXG4vKipcbiAqIEFkZCBhIGNhbGxiYWNrIHRvIHRoZSBtaWNyb3Rhc2sgcXVldWUuXG4gKlxuICogVGhpcyB1c2VzIGEgTXV0YXRpb25PYnNlcnZlciBzbyB0aGF0IGl0IHdvcmtzIG9uIElFIDExLlxuICpcbiAqIE5PVEU6IElFIDExIG1heSBhY3R1YWxseSB1c2UgdGltZW91dCB0aW1pbmcgd2l0aCBNdXRhdGlvbk9ic2VydmVycy4gVGhpc1xuICogbmVlZHMgbW9yZSBpbnZlc3RpZ2F0aW9uLlxuICpcbiAqIEBmdW5jdGlvbiBtaWNyb3Rhc2tcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pY3JvdGFzayhjYWxsYmFjaykge1xuICBjYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gIC8vIEZvcmNlIGEgbXV0YXRpb24uXG4gIGVsZW1lbnQudGV4dENvbnRlbnQgPSArK2NvdW50ZXI7XG59XG5cblxuLy8gRXhlY3V0ZSBhbnkgcGVuZGluZyBjYWxsYmFja3MuXG5mdW5jdGlvbiBleGVjdXRlQ2FsbGJhY2tzKCkge1xuICB3aGlsZSAoY2FsbGJhY2tzLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBjYWxsYmFjayA9IGNhbGxiYWNrcy5zaGlmdCgpO1xuICAgIGNhbGxiYWNrKCk7XG4gIH1cbn1cblxuXG4vLyBDcmVhdGUgdGhlIG9ic2VydmVyLlxuY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihleGVjdXRlQ2FsbGJhY2tzKTtcbm9ic2VydmVyLm9ic2VydmUoZWxlbWVudCwge1xuICBjaGFyYWN0ZXJEYXRhOiB0cnVlXG59KTtcbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi9jcmVhdGVTeW1ib2wnO1xuaW1wb3J0IHRvZ2dsZUNsYXNzIGZyb20gJy4vdG9nZ2xlQ2xhc3MnO1xuXG5cbi8vIFN5bWJvbHMgZm9yIHByaXZhdGUgZGF0YSBtZW1iZXJzIG9uIGFuIGVsZW1lbnQuXG5jb25zdCBzYWZlVG9TZXRBdHRyaWJ1dGVzU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdzYWZlVG9TZXRBdHRyaWJ1dGVzJyk7XG5jb25zdCBwZW5kaW5nQXR0cmlidXRlc1N5bWJvbCA9IGNyZWF0ZVN5bWJvbCgncGVuZGluZ0F0dHJpYnV0ZXMnKTtcbmNvbnN0IHBlbmRpbmdDbGFzc2VzU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdwZW5kaW5nQ2xhc3NlcycpO1xuXG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9ucyBmb3IgdXBkYXRpbmcgYXR0cmlidXRlcywgaW5jbHVkaW5nIHRoZSBgY2xhc3NgIGF0dHJpYnV0ZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuXG4gIC8qKlxuICAgKiBQZXJmb3JtIGFueSBwZW5kaW5nIHVwZGF0ZXMgdG8gYXR0cmlidXRlcyBhbmQgY2xhc3Nlcy5cbiAgICpcbiAgICogVGhpcyB3cml0ZXMgYW55IGBzZXRBdHRyaWJ1dGVgIG9yIGB0b2dnbGVDbGFzc2AgdmFsdWVzIHRoYXQgd2VyZSBwZXJmb3JtZWRcbiAgICogYmVmb3JlIGFuIGVsZW1lbnQgd2FzIGF0dGFjaGVkIHRvIHRoZSBkb2N1bWVudCBmb3IgdGhlIGZpcnN0IHRpbWUuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIHNob3VsZCBiZSBjYWxsZWQgYnkgbWl4aW5zL2NvbXBvbmVudHMgaW4gdGhlaXJcbiAgICogYGNvbm5lY3RlZENhbGxiYWNrYC4gSWYgbXVsaXRwbGUgbWl4aW5zL2NvbXBvbmVudHMgaW52b2tlIHRoaXMgZHVyaW5nIHRoZVxuICAgKiBzYW1lIGBjb25uZWN0ZWRDYWxsYmFja2AsIG9ubHkgdGhlIGZpcnN0IGNhbGwgd2lsbCBoYXZlIGFueSBlZmZlY3QuIFRoZVxuICAgKiBzdWJzZXF1ZW50IGNhbGxzIHdpbGwgYmUgaGFybWxlc3MuXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBUaGUgZWxlbWVudCBiZWluZyBhZGRlZCB0byB0aGUgZG9jdW1lbnQuXG4gICAqL1xuICBjb25uZWN0ZWQoZWxlbWVudCkge1xuICAgIGVsZW1lbnRbc2FmZVRvU2V0QXR0cmlidXRlc1N5bWJvbF0gPSB0cnVlO1xuXG4gICAgLy8gU2V0IGFueSBwZW5kaW5nIGF0dHJpYnV0ZXMuXG4gICAgaWYgKGVsZW1lbnRbcGVuZGluZ0F0dHJpYnV0ZXNTeW1ib2xdKSB7XG4gICAgICBmb3IgKGxldCBhdHRyaWJ1dGUgaW4gZWxlbWVudFtwZW5kaW5nQXR0cmlidXRlc1N5bWJvbF0pIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBlbGVtZW50W3BlbmRpbmdBdHRyaWJ1dGVzU3ltYm9sXVthdHRyaWJ1dGVdO1xuICAgICAgICBzZXRBdHRyaWJ1dGVUb0VsZW1lbnQoZWxlbWVudCwgYXR0cmlidXRlLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgICBlbGVtZW50W3BlbmRpbmdBdHRyaWJ1dGVzU3ltYm9sXSA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gU2V0IGFueSBwZW5kaW5nIGNsYXNzZXMuXG4gICAgaWYgKGVsZW1lbnRbcGVuZGluZ0NsYXNzZXNTeW1ib2xdKSB7XG4gICAgICBmb3IgKGxldCBjbGFzc05hbWUgaW4gZWxlbWVudFtwZW5kaW5nQ2xhc3Nlc1N5bWJvbF0pIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBlbGVtZW50W3BlbmRpbmdDbGFzc2VzU3ltYm9sXVtjbGFzc05hbWVdO1xuICAgICAgICB0b2dnbGVDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUsIHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGVsZW1lbnRbcGVuZGluZ0NsYXNzZXNTeW1ib2xdID0gbnVsbDtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNldC91bnNldCB0aGUgYXR0cmlidXRlIHdpdGggdGhlIGluZGljYXRlZCBuYW1lLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBleGlzdHMgcHJpbWFyaWx5IHRvIGhhbmRsZSB0aGUgY2FzZSB3aGVyZSBhbiBlbGVtZW50IHdhbnRzIHRvXG4gICAqIHNldCBhIGRlZmF1bHQgcHJvcGVydHkgdmFsdWUgdGhhdCBzaG91bGQgYmUgcmVmbGVjdGVkIGFzIGFuIGF0dHJpYnV0ZS4gQW5cbiAgICogaW1wb3J0YW50IGxpbWl0YXRpb24gb2YgY3VzdG9tIGVsZW1lbnQgY29uc3R1cmN0b3JzIGlzIHRoYXQgdGhleSBjYW5ub3RcbiAgICogc2V0IGF0dHJpYnV0ZXMuIEEgY2FsbCB0byBgc2V0QXR0cmlidXRlYCBkdXJpbmcgdGhlIGNvbnN0cnVjdG9yIHdpbGxcbiAgICogYmUgZGVmZXJyZWQgdW50aWwgdGhlIGVsZW1lbnQgaXMgY29ubmVjdGVkIHRvIHRoZSBkb2N1bWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZSAtIFRoZSBuYW1lIG9mIHRoZSAqYXR0cmlidXRlKiAobm90IHByb3BlcnR5KSB0byBzZXQuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBzZXQuIElmIG51bGwsIHRoZSBhdHRyaWJ1dGUgd2lsbCBiZSByZW1vdmVkLlxuICAgKi9cbiAgc2V0QXR0cmlidXRlKGVsZW1lbnQsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgICBpZiAoZWxlbWVudFtzYWZlVG9TZXRBdHRyaWJ1dGVzU3ltYm9sXSkge1xuICAgICAgLy8gU2FmZSB0byBzZXQgYXR0cmlidXRlcyBpbW1lZGlhdGVseS5cbiAgICAgIHNldEF0dHJpYnV0ZVRvRWxlbWVudChlbGVtZW50LCBhdHRyaWJ1dGUsIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRGVmZXIgc2V0dGluZyBhdHRyaWJ1dGVzIHVudGlsIHRoZSBmaXJzdCB0aW1lIHdlJ3JlIGNvbm5lY3RlZC5cbiAgICAgIGlmICghZWxlbWVudFtwZW5kaW5nQXR0cmlidXRlc1N5bWJvbF0pIHtcbiAgICAgICAgZWxlbWVudFtwZW5kaW5nQXR0cmlidXRlc1N5bWJvbF0gPSB7fTtcbiAgICAgIH1cbiAgICAgIGVsZW1lbnRbcGVuZGluZ0F0dHJpYnV0ZXNTeW1ib2xdW2F0dHJpYnV0ZV0gPSB2YWx1ZTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNldC91bnNldCB0aGUgY2xhc3Mgd2l0aCB0aGUgaW5kaWNhdGVkIG5hbWUuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGV4aXN0cyBwcmltYXJpbHkgdG8gaGFuZGxlIHRoZSBjYXNlIHdoZXJlIGFuIGVsZW1lbnQgd2FudHMgdG9cbiAgICogc2V0IGEgZGVmYXVsdCBwcm9wZXJ0eSB2YWx1ZSB0aGF0IHNob3VsZCBiZSByZWZsZWN0ZWQgYXMgYXMgY2xhc3MuIEFuXG4gICAqIGltcG9ydGFudCBsaW1pdGF0aW9uIG9mIGN1c3RvbSBlbGVtZW50IGNvbnN0dXJjdG9ycyBpcyB0aGF0IHRoZXkgY2Fubm90XG4gICAqIHNldCBhdHRyaWJ1dGVzLCBpbmNsdWRpbmcgdGhlIGBjbGFzc2AgYXR0cmlidXRlLiBBIGNhbGwgdG9cbiAgICogYHRvZ2dsZUNsYXNzYCBkdXJpbmcgdGhlIGNvbnN0cnVjdG9yIHdpbGwgYmUgZGVmZXJyZWQgdW50aWwgdGhlIGVsZW1lbnRcbiAgICogaXMgY29ubmVjdGVkIHRvIHRoZSBkb2N1bWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBjbGFzcyB0byBzZXQuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZSAtIFRydWUgdG8gc2V0IHRoZSBjbGFzcywgZmFsc2UgdG8gcmVtb3ZlIGl0LlxuICAgKi9cbiAgdG9nZ2xlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lLCB2YWx1ZSkge1xuICAgIGlmIChlbGVtZW50W3NhZmVUb1NldEF0dHJpYnV0ZXNTeW1ib2xdKSB7XG4gICAgICAvLyBTYWZlIHRvIHNldCBjbGFzcyBpbW1lZGlhdGVseS5cbiAgICAgIHRvZ2dsZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBEZWZlciBzZXR0aW5nIGNsYXNzIHVudGlsIHRoZSBmaXJzdCB0aW1lIHdlJ3JlIGNvbm5lY3RlZC5cbiAgICAgIGlmICghZWxlbWVudFtwZW5kaW5nQ2xhc3Nlc1N5bWJvbF0pIHtcbiAgICAgICAgZWxlbWVudFtwZW5kaW5nQ2xhc3Nlc1N5bWJvbF0gPSB7fTtcbiAgICAgIH1cbiAgICAgIGVsZW1lbnRbcGVuZGluZ0NsYXNzZXNTeW1ib2xdW2NsYXNzTmFtZV0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxufTtcblxuXG4vLyBSZWZsZWN0IHRoZSBhdHRyaWJ1dGUgdG8gdGhlIGdpdmVuIGVsZW1lbnQuXG4vLyBJZiB0aGUgdmFsdWUgaXMgbnVsbCwgcmVtb3ZlIHRoZSBhdHRyaWJ1dGUuXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVUb0VsZW1lbnQoZWxlbWVudCwgYXR0cmlidXRlTmFtZSwgdmFsdWUpIHtcbiAgaWYgKHZhbHVlID09PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKTtcbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCB2YWx1ZSk7XG4gIH1cbn1cbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi9jcmVhdGVTeW1ib2wnO1xuXG4vKipcbiAqIEEgY29sbGVjdGlvbiBvZiBTeW1ib2wgb2JqZWN0cyBmb3Igc3RhbmRhcmQgY29tcG9uZW50IHByb3BlcnRpZXMgYW5kIG1ldGhvZHMuXG4gKlxuICogVGhlc2UgU3ltYm9sIG9iamVjdHMgYXJlIHVzZWQgdG8gYWxsb3cgbWl4aW5zIGFuZCBhIGNvbXBvbmVudCB0byBpbnRlcm5hbGx5XG4gKiBjb21tdW5pY2F0ZSwgd2l0aG91dCBleHBvc2luZyB0aGVzZSBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIGluIHRoZSBjb21wb25lbnQnc1xuICogcHVibGljIEFQSS5cbiAqXG4gKiBUbyB1c2UgdGhlc2UgU3ltYm9sIG9iamVjdHMgaW4geW91ciBvd24gY29tcG9uZW50LCBpbmNsdWRlIHRoaXMgbW9kdWxlIGFuZFxuICogdGhlbiBjcmVhdGUgYSBwcm9wZXJ0eSBvciBtZXRob2Qgd2hvc2Uga2V5IGlzIHRoZSBkZXNpcmVkIFN5bWJvbC5cbiAqXG4gKiAgICAgaW1wb3J0ICdTaW5nbGVTZWxlY3Rpb24nIGZyb20gJ2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NpbmdsZVNlbGVjdGlvbic7XG4gKiAgICAgaW1wb3J0ICdzeW1ib2xzJyBmcm9tICdiYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9zeW1ib2xzJztcbiAqXG4gKiAgICAgY2xhc3MgTXlFbGVtZW50IGV4dGVuZHMgU2luZ2xlU2VsZWN0aW9uKEhUTUxFbGVtZW50KSB7XG4gKiAgICAgICBbc3ltYm9scy5hcHBseVNlbGVjdGlvbl0oaXRlbSwgc2VsZWN0ZWQpIHtcbiAqICAgICAgICAgLy8gVGhpcyB3aWxsIGJlIGludm9rZWQgd2hlbmV2ZXIgYW4gaXRlbSBpcyBzZWxlY3RlZC9kZXNlbGVjdGVkLlxuICogICAgICAgfVxuICogICAgIH1cbiAqXG4gKiBAbW9kdWxlIHN5bWJvbHNcbiAqL1xuY29uc3Qgc3ltYm9scyA9IHtcblxuICAvKipcbiAgICogU3ltYm9sIGZvciB0aGUgYGFwcGx5U2VsZWN0aW9uYCBtZXRob2QuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGFwcGxpZXMgdGhlIGluZGljYXRlZCBzZWxlY3Rpb24gc3RhdGUgdG8gYW4gaXRlbS5cbiAgICpcbiAgICogQGZ1bmN0aW9uIGFwcGx5U2VsZWN0aW9uXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGl0ZW0gLSB0aGUgaXRlbSBiZWluZyBzZWxlY3RlZC9kZXNlbGVjdGVkXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gc2VsZWN0ZWQgLSB0cnVlIGlmIHRoZSBpdGVtIGlzIHNlbGVjdGVkLCBmYWxzZSBpZiBub3RcbiAgICovXG4gIGFwcGx5U2VsZWN0aW9uOiBjcmVhdGVTeW1ib2woJ1tzeW1ib2xzLmFwcGx5U2VsZWN0aW9uXScpLFxuXG4gIC8qKlxuICAgKiBTeW1ib2wgZm9yIHRoZSBgZGVmYXVsdHNgIHByb3BlcnR5LlxuICAgKlxuICAgKiBUaGlzIHByb3BlcnR5IGNhbiBiZSB1c2VkIHRvIHNldCBvciBvdmVycmlkZSBkZWZhdWx0cyB0aGF0IHdpbGwgYmUgYXBwbGllZFxuICAgKiB0byBhIG5ldyBjb21wb25lbnQgaW5zdGFuY2UuIFdoZW4gaW1wbGVtZW50aW5nIHRoaXMgcHJvcGVydHksIHRha2UgY2FyZSB0b1xuICAgKiBmaXJzdCBhY3F1aXJlIGFueSBkZWZhdWx0cyBkZWZpbmVkIGJ5IHRoZSBzdXBlcmNsYXNzLiBUaGUgc3RhbmRhcmQgaWRpb20gaXNcbiAgICogYXMgZm9sbG93czpcbiAgICpcbiAgICogICAgIGdldCBbc3ltYm9scy5kZWZhdWx0c10oKSB7XG4gICAqICAgICAgIGNvbnN0IGRlZmF1bHRzID0gc3VwZXJbc3ltYm9scy5kZWZhdWx0c10gfHwge307XG4gICAqICAgICAgIC8vIFNldCBvciBvdmVycmlkZSBkZWZhdWx0IHZhbHVlcyBoZXJlXG4gICAqICAgICAgIGRlZmF1bHRzLmN1c3RvbVByb3BlcnR5ID0gZmFsc2U7XG4gICAqICAgICAgIHJldHVybiBkZWZhdWx0cztcbiAgICogICAgIH1cbiAgICpcbiAgICogQHZhciB7b2JqZWN0fSBkZWZhdWx0c1xuICAgKi9cbiAgZGVmYXVsdHM6IGNyZWF0ZVN5bWJvbCgnZGVmYXVsdHMnKSxcblxuICAvKipcbiAgICogU3ltYm9sIGZvciB0aGUgYGRyYWdnaW5nYCBwcm9wZXJ0eS5cbiAgICpcbiAgICogQ29tcG9uZW50cyBsaWtlIGNhcm91c2VscyBvZnRlbiBkZWZpbmUgYW5pbWF0ZWQgQ1NTIHRyYW5zaXRpb25zIGZvclxuICAgKiBzbGlkaW5nIGVmZmVjdHMuIFN1Y2ggYSB0cmFuc2l0aW9uIHNob3VsZCB1c3VhbGx5ICpub3QqIGJlIGFwcGxpZWQgd2hpbGVcbiAgICogdGhlIHVzZXIgaXMgZHJhZ2dpbmcsIGJlY2F1c2UgYSBDU1MgYW5pbWF0aW9uIHdpbGwgaW50cm9kdWNlIGEgbGFnIHRoYXRcbiAgICogbWFrZXMgdGhlIHN3aXBlIGZlZWwgc2x1Z2dpc2guIEluc3RlYWQsIGFzIGxvbmcgYXMgdGhlIHVzZXIgaXMgZHJhZ2dpbmdcbiAgICogd2l0aCB0aGVpciBmaW5nZXIgZG93biwgdGhlIHRyYW5zaXRpb24gc2hvdWxkIGJlIHN1cHByZXNzZWQuIFdoZW4gdGhlXG4gICAqIHVzZXIgcmVsZWFzZXMgdGhlaXIgZmluZ2VyLCB0aGUgdHJhbnNpdGlvbiBjYW4gYmUgcmVzdG9yZWQsIGFsbG93aW5nIHRoZVxuICAgKiBhbmltYXRpb24gdG8gc2hvdyB0aGUgY2Fyb3VzZWwgc2xpZGluZyBpbnRvIGl0cyBmaW5hbCBwb3NpdGlvbi5cbiAgICpcbiAgICogQHR5cGUge2Jvb2xlYW59IHRydWUgaWYgYSBkcmFnIGlzIGluIHByb2dyZXNzLCBmYWxzZSBpZiBub3QuXG4gICAqL1xuICBkcmFnZ2luZzogY3JlYXRlU3ltYm9sKCdkcmFnZ2luZycpLFxuXG4gIC8qKlxuICAgKiBTeW1ib2wgZm9yIHRoZSBgZ29Eb3duYCBtZXRob2QuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSBkb3duLlxuICAgKlxuICAgKiBAZnVuY3Rpb24gZ29Eb3duXG4gICAqL1xuICBnb0Rvd246IGNyZWF0ZVN5bWJvbCgnZ29Eb3duJyksXG5cbiAgLyoqXG4gICAqIFN5bWJvbCBmb3IgdGhlIGBnb0VuZGAgbWV0aG9kLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgdG8gdGhlIGVuZCAoZS5nLixcbiAgICogb2YgYSBsaXN0KS5cbiAgICpcbiAgICogQGZ1bmN0aW9uIGdvRW5kXG4gICAqL1xuICBnb0VuZDogY3JlYXRlU3ltYm9sKCdnb0VuZCcpLFxuXG4gIC8qKlxuICAgKiBTeW1ib2wgZm9yIHRoZSBgZ29MZWZ0YCBtZXRob2QuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSBsZWZ0LlxuICAgKlxuICAgKiBAZnVuY3Rpb24gZ29MZWZ0XG4gICAqL1xuICBnb0xlZnQ6IGNyZWF0ZVN5bWJvbCgnZ29MZWZ0JyksXG5cbiAgLyoqXG4gICAqIFN5bWJvbCBmb3IgdGhlIGBnb1JpZ2h0YCBtZXRob2QuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSByaWdodC5cbiAgICpcbiAgICogQGZ1bmN0aW9uIGdvUmlnaHRcbiAgICovXG4gIGdvUmlnaHQ6IGNyZWF0ZVN5bWJvbCgnZ29SaWdodCcpLFxuXG4gIC8qKlxuICAgKiBTeW1ib2wgZm9yIHRoZSBgZ29TdGFydGAgbWV0aG9kLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgdG8gdGhlIHN0YXJ0XG4gICAqIChlLmcuLCBvZiBhIGxpc3QpLlxuICAgKlxuICAgKiBAZnVuY3Rpb24gZ29TdGFydFxuICAgKi9cbiAgZ29TdGFydDogY3JlYXRlU3ltYm9sKCdnb1N0YXJ0JyksXG5cbiAgLyoqXG4gICAqIFN5bWJvbCBmb3IgdGhlIGBnb1VwYCBtZXRob2QuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSB1cC5cbiAgICpcbiAgICogQGZ1bmN0aW9uIGdvVXBcbiAgICovXG4gIGdvVXA6IGNyZWF0ZVN5bWJvbCgnZ29VcCcpLFxuXG4gIC8qKlxuICAgKiBTeW1ib2wgZm9yIHRoZSBgaXRlbUFkZGVkYCBtZXRob2QuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbiBhIG5ldyBpdGVtIGlzIGFkZGVkIHRvIGEgbGlzdC5cbiAgICpcbiAgICogQGZ1bmN0aW9uIGl0ZW1BZGRlZFxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpdGVtIC0gdGhlIGl0ZW0gYmVpbmcgc2VsZWN0ZWQvZGVzZWxlY3RlZFxuICAgKi9cbiAgaXRlbUFkZGVkOiBjcmVhdGVTeW1ib2woJ2l0ZW1BZGRlZCcpLFxuXG4gIC8qKlxuICAgKiBTeW1ib2wgZm9yIHRoZSBga2V5ZG93bmAgbWV0aG9kLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIHdoZW4gYW4gZWxlbWVudCByZWNlaXZlcyBhIGBrZXlkb3duYCBldmVudC5cbiAgICpcbiAgICogQGZ1bmN0aW9uIGtleWRvd25cbiAgICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBldmVudCAtIHRoZSBldmVudCBiZWluZyBwcm9jZXNzZWRcbiAgICovXG4gIGtleWRvd246IGNyZWF0ZVN5bWJvbCgna2V5ZG93bicpXG59O1xuXG5leHBvcnQgZGVmYXVsdCBzeW1ib2xzO1xuIiwiLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gZm9yIHN0YW5kYXJkIGNsYXNzTGlzdC50b2dnbGUoKSBiZWhhdmlvciBvbiBvbGQgYnJvd3NlcnMsXG4gKiBuYW1lbHkgSUUgMTEuXG4gKlxuICogVGhlIHN0YW5kYXJkXG4gKiBbY2xhc3NsaXN0XShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRWxlbWVudC9jbGFzc0xpc3QpXG4gKiBvYmplY3QgaGFzIGEgYHRvZ2dsZSgpYCBmdW5jdGlvbiB0aGF0IHN1cHBvcnRzIGEgc2Vjb25kIEJvb2xlYW4gcGFyYW1ldGVyXG4gKiB0aGF0IGNhbiBiZSB1c2VkIHRvIHN1Y2NpbmN0bHkgdHVybiBhIGNsYXNzIG9uIG9yIG9mZi4gVGhpcyBmZWF0dXJlIGlzIG9mdGVuXG4gKiB1c2VmdWwgaW4gZGVzaWduaW5nIGN1c3RvbSBlbGVtZW50cywgd2hpY2ggbWF5IHdhbnQgdG8gZXh0ZXJuYWxseSByZWZsZWN0XG4gKiBjb21wb25lbnQgc3RhdGUgaW4gYSBDU1MgY2xhc3MgdGhhdCBjYW4gYmUgdXNlZCBmb3Igc3R5bGluZyBwdXJwb3Nlcy5cbiAqXG4gKiBVbmZvcnR1bmF0ZWx5LCBJRSAxMSBkb2VzIG5vdCBzdXBwb3J0IHRoZSBCb29sZWFuIHBhcmFtZXRlciB0b1xuICogYGNsYXNzTGlzdC50b2dnbGUoKWAuIFRoaXMgaGVscGVyIGZ1bmN0aW9uIGJlaGF2ZXMgbGlrZSB0aGUgc3RhbmRhcmRcbiAqIGB0b2dnbGUoKWAsIGluY2x1ZGluZyBzdXBwb3J0IGZvciB0aGUgQm9vbGVhbiBwYXJhbWV0ZXIsIHNvIHRoYXQgaXQgY2FuIGJlXG4gKiB1c2VkIGV2ZW4gb24gSUUgMTEuXG4gKlxuICogQGZ1bmN0aW9uIHRvZ2dsZUNsYXNzXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gVGhlIGVsZW1lbnQgdG8gbW9kaWZ5XG4gKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIC0gVGhlIGNsYXNzIHRvIGFkZC9yZW1vdmVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZvcmNlXSAtIEZvcmNlIHRoZSBjbGFzcyB0byBiZSBhZGRlZCAoaWYgdHJ1ZSkgb3IgcmVtb3ZlZFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgKGlmIGZhbHNlKVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b2dnbGVDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUsIGZvcmNlKSB7XG4gIGNvbnN0IGNsYXNzTGlzdCA9IGVsZW1lbnQuY2xhc3NMaXN0O1xuICBjb25zdCBhZGRDbGFzcyA9ICh0eXBlb2YgZm9yY2UgPT09ICd1bmRlZmluZWQnKSA/XG4gICAgIWNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpIDpcbiAgICBmb3JjZTtcbiAgaWYgKGFkZENsYXNzKSB7XG4gICAgY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICB9IGVsc2Uge1xuICAgIGNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgfVxuICByZXR1cm4gYWRkQ2xhc3M7XG59XG4iLCJpbXBvcnQgQ29tcG9zYWJsZSBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Db21wb3NhYmxlJztcbmltcG9ydCBTaGFkb3dUZW1wbGF0ZSBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TaGFkb3dUZW1wbGF0ZSc7XG5pbXBvcnQgU2hhZG93RWxlbWVudFJlZmVyZW5jZXMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2hhZG93RWxlbWVudFJlZmVyZW5jZXMnO1xuaW1wb3J0IEF0dHJpYnV0ZU1hcnNoYWxsaW5nIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0F0dHJpYnV0ZU1hcnNoYWxsaW5nJztcbmltcG9ydCBEaXN0cmlidXRlZENoaWxkcmVuIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW4nO1xuXG5cbi8qKlxuICogQSBzYW1wbGUgZ2VuZXJhbC1wdXJwb3NlIGJhc2UgY2xhc3MgZm9yIGRlZmluaW5nIGN1c3RvbSBlbGVtZW50cyB0aGF0IG1peGVzXG4gKiBpbiBzb21lIGNvbW1vbiBmZWF0dXJlczogdGVtcGxhdGUgc3RhbXBpbmcgaW50byBhIHNoYWRvdyByb290LCBzaGFkb3cgZWxlbWVudFxuICogcmVmZXJlbmNlcywgbWFyc2hhbGxpbmcgYXR0cmlidXRlcyB0byBwcm9wZXJ0aWVzLCBhbmQgcmV0cmlldmluZyB0aGUgY2hpbGRyZW5cbiAqIGRpc3RyaWJ1dGVkIHRvIGEgY29tcG9uZW50LlxuICpcbiAqIFRoaXMgYmFzZSBjbGFzcyBpcyBub3Qgc3BlY2lhbCBpbiBhbnkgd2F5LCBhbmQgaXMgZGVmaW5lZCBvbmx5IGFzIGFcbiAqIGNvbnZlbmllbnQgc2hvcnRoYW5kIGZvciBhcHBseWluZyB0aGUgbWl4aW5zIGxpc3RlZCBhYm92ZS4gWW91IGNhbiB1c2UgdGhpc1xuICogY2xhc3MgYXMgYSBiYXNlIGNsYXNzIGZvciB5b3VyIG93biBlbGVtZW50cywgb3IgZWFzaWx5IGNyZWF0ZSB5b3VyIG93biBiYXNlXG4gKiBjbGFzcyBieSBhcHBseWluZyB0aGUgc2FtZSBzZXQgb2YgbWl4aW5zLlxuICpcbiAqIFRoZSBFbGVtZW50QmFzZSBiYXNlIGNsYXNzIGRvZXMgbm90IHJlZ2lzdGVyIGl0c2VsZiBhcyBhIGN1c3RvbSBlbGVtZW50IHdpdGhcbiAqIHRoZSBicm93c2VyLCBhbmQgaGVuY2UgY2Fubm90IGJlIGluZGVwZW5kZW50bHkgaW5zdGFudGlhdGVkLlxuICpcbiAqIEBtaXhlcyBBdHRyaWJ1dGVNYXJzaGFsbGluZyBcbiAqIEBtaXhlcyBDb21wb3NhYmxlXG4gKiBAbWl4ZXMgRGlzdHJpYnV0ZWRDaGlsZHJlblxuICogQG1peGVzIFNoYWRvd0VsZW1lbnRSZWZlcmVuY2VzXG4gKiBAbWl4ZXMgU2hhZG93VGVtcGxhdGVcbiAqL1xuY2xhc3MgRWxlbWVudEJhc2UgZXh0ZW5kcyBDb21wb3NhYmxlKEhUTUxFbGVtZW50KS5jb21wb3NlKFxuICBTaGFkb3dUZW1wbGF0ZSwgICAgICAgICAgLy8gYmVmb3JlIG5vZGUgZmluZGluZywgc28gc2hhZG93IHJvb3QgaXMgcG9wdWxhdGVkXG4gIFNoYWRvd0VsZW1lbnRSZWZlcmVuY2VzLCAvLyBiZWZvcmUgbWFyc2hhbGxpbmcsIHNvIHByb3BlcnRpZXMgY2FuIHVzZSByZWZzXG4gIEF0dHJpYnV0ZU1hcnNoYWxsaW5nLFxuICBEaXN0cmlidXRlZENoaWxkcmVuXG4pIHtcblxuICAvKlxuICAgKiBEZWJ1Z2dpbmcgdXRpbGl0eTogbG9ncyBhIG1lc3NhZ2UsIHByZWZpeGVkIGJ5IHRoZSBjb21wb25lbnQncyB0YWcuXG4gICAqL1xuICBsb2codGV4dCkge1xuICAgIGlmIChzdXBlci5sb2cpIHsgc3VwZXIubG9nKHRleHQpOyB9XG4gICAgY29uc29sZS5sb2coYCR7dGhpcy5sb2NhbE5hbWV9OiAke3RleHR9YCk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBFbGVtZW50QmFzZTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgdHJhbnNwaWxlZCB0byBjcmVhdGUgYW4gRVM1LWNvbXBhdGlibGUgZGlzdHJpYnV0aW9uIGluIHdoaWNoXG4gKiB0aGUgcGFja2FnZSdzIG1haW4gZmVhdHVyZShzKSBhcmUgYXZhaWxhYmxlIHZpYSB0aGUgd2luZG93LkJhc2ljIGdsb2JhbC5cbiAqIElmIHlvdSdyZSBhbHJlYWR5IHVzaW5nIEVTNiB5b3Vyc2VsZiwgaWdub3JlIHRoaXMgZmlsZSwgYW5kIGluc3RlYWQgaW1wb3J0XG4gKiB0aGUgc291cmNlIGZpbGUocykgeW91IHdhbnQgZnJvbSB0aGUgc3JjIGZvbGRlci5cbiAqL1xuXG5pbXBvcnQgTGlzdEJveCBmcm9tICcuL3NyYy9MaXN0Qm94Jztcblxud2luZG93LkJhc2ljID0gd2luZG93LkJhc2ljIHx8IHt9O1xud2luZG93LkJhc2ljLkxpc3RCb3ggPSBMaXN0Qm94O1xuIiwiaW1wb3J0IEVsZW1lbnRCYXNlIGZyb20gJy4uLy4uL2Jhc2ljLWVsZW1lbnQtYmFzZS9zcmMvRWxlbWVudEJhc2UnO1xuaW1wb3J0IERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCc7XG5pbXBvcnQgQ2xpY2tTZWxlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ2xpY2tTZWxlY3Rpb24nO1xuaW1wb3J0IENvbnRlbnRBc0l0ZW1zIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NvbnRlbnRBc0l0ZW1zJztcbmltcG9ydCBEaXJlY3Rpb25TZWxlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlyZWN0aW9uU2VsZWN0aW9uJztcbmltcG9ydCBHZW5lcmljIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0dlbmVyaWMnO1xuaW1wb3J0IEtleWJvYXJkIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0tleWJvYXJkJztcbmltcG9ydCBLZXlib2FyZERpcmVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9LZXlib2FyZERpcmVjdGlvbic7XG5pbXBvcnQgS2V5Ym9hcmRQYWdlZFNlbGVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9LZXlib2FyZFBhZ2VkU2VsZWN0aW9uJztcbmltcG9ydCBLZXlib2FyZFByZWZpeFNlbGVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9LZXlib2FyZFByZWZpeFNlbGVjdGlvbic7XG5pbXBvcnQgU2VsZWN0aW9uQXJpYUFjdGl2ZSBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TZWxlY3Rpb25BcmlhQWN0aXZlJztcbmltcG9ydCBTZWxlY3Rpb25IaWdobGlnaHQgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2VsZWN0aW9uSGlnaGxpZ2h0JztcbmltcG9ydCBTZWxlY3Rpb25JblZpZXcgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2VsZWN0aW9uSW5WaWV3JztcbmltcG9ydCBTaW5nbGVTZWxlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2luZ2xlU2VsZWN0aW9uJztcbmltcG9ydCBzeW1ib2xzIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL3N5bWJvbHMnO1xuXG5cbi8qKlxuICogQSBzaW5nbGUtc2VsZWN0aW9uIGxpc3QgYm94IHRoYXQgc3VwcG9ydHMgc2VsZWN0aW9uIGhpZ2hsaWdodGluZyAodXNpbmcgdGhlXG4gKiBzeXN0ZW0gaGlnaGxpZ2h0IGNvbG9yKSBhbmQga2V5Ym9hcmQgbmF2aWdhdGlvbi5cbiAqXG4gKiBbTGl2ZSBkZW1vXShodHRwOi8vYmFzaWN3ZWJjb21wb25lbnRzLm9yZy9iYXNpYy13ZWItY29tcG9uZW50cy9wYWNrYWdlcy9iYXNpYy1saXN0LWJveC8pXG4gKlxuICogVGhlIHVzZXIgY2FuIHNlbGVjdCBhbiBpdGVtIHdpdGggdGhlIG1vdXNlL3RvdWNoIG9yIGtleWJvYXJkOiBVcC9Eb3duLCBQYWdlXG4gKiBVcC9Eb3duLCBIb21lL0VuZC5cbiAqXG4gKiBMaWtlIG90aGVyIEJhc2ljIFdlYiBDb21wb25lbnRzLCB0aGlzIGNhbiBoYW5kbGUgZGlzdHJpYnV0ZWQgY29udGVudDogeW91IGNhblxuICogaW5jbHVkZSBhIGNvbnRlbnQgZWxlbWVudCBpbnNpZGUgYSBiYXNpYy1saXN0LWJveCwgYW5kIHRoZSBsaXN0IHdpbGwgbmF2aWdhdGVcbiAqIHRocm91Z2ggdGhlIGRpc3RyaWJ1dGVkIGNvbnRlbnQuXG4gKlxuICogVGhpcyBjb21wb25lbnQgaW5jbHVkZXMgYmFzaWMgQVJJQSBzdXBwb3J0IHRvIHByb3ZpZGUgYSByZWFzb25hYmxlIGRlZmF1bHRcbiAqIGV4cGVyaWVuY2UsIGUuZy4sIGZvciBzY3JlZW4gcmVhZGVycy4gVGhlIGxpc3QgY29tcG9uZW50IGl0c2VsZiB3aWxsIGJlXG4gKiBhc3NpZ25lZCBhbiBhcHByb3ByaWF0ZSBBUklBIHJvbGUgKGRlZmF1bHQgaXMgXCJsaXN0Ym94XCIpLiBUaGUgSUQgb2YgdGhlXG4gKiBzZWxlY3RlZCBpdGVtIHdpbGwgYmUgcmVmbGVjdGVkIGluIGFuIFwiYXJpYS1hY3RpdmVkZXNjZW5kYW50XCIgYXR0cmlidXRlXG4gKiBhcHBsaWVkIHRvIHRoZSBsaXN0LiBUbyBzdXBwb3J0IHRoaXMgZmVhdHVyZSwgYWxsIGl0ZW1zIGluIHRoZSBsaXN0IG5lZWRcbiAqIHVuaXF1ZSBJRHMuIElmIGFuIGl0ZW0gZG9lcyBub3QgaGF2ZSBhbiBJRCwgYmFzaWMtbGlzdC1ib3ggd2lsbCBhdXRvbWF0aWNhbGx5XG4gKiBhc3NpZ24gYSBkZWZhdWx0IElELlxuICpcbiAqIFRoZSBrZXlib2FyZCBpbnRlcmFjdGlvbiBtb2RlbCBnZW5lcmFsbHkgZm9sbG93cyB0aGF0IG9mIE1pY3Jvc29mdCBXaW5kb3dzJ1xuICogbGlzdCBib3hlcyBpbnN0ZWFkIG9mIHRob3NlIGluIE9TIFg6XG4gKlxuICogKiBUaGUgUGFnZSBVcC9Eb3duIGFuZCBIb21lL0VuZCBrZXlzIGFjdHVhbGx5IG1vdmUgdGhlIHNlbGVjdGlvbiwgcmF0aGVyIHRoYW5cbiAqICAganVzdCBzY3JvbGxpbmcgdGhlIGxpc3QuIFRoZSBmb3JtZXIgYmVoYXZpb3Igc2VlbXMgbW9yZSBnZW5lcmFsbHkgdXNlZnVsXG4gKiAgIGZvciBrZXlib2FyZCB1c2Vycy5cbiAqXG4gKiAqIFByZXNzaW5nIFBhZ2UgVXAvRG93biB3aWxsIG1vdmUgdGhlIHNlbGVjdGlvbiB0byB0aGUgdG9wbW9zdC9ib3R0b21tb3N0XG4gKiAgIHZpc2libGUgaXRlbSBpZiB0aGUgc2VsZWN0aW9uIGlzIG5vdCBhbHJlYWR5IHRoZXJlLiBUaGVyZWFmdGVyLCB0aGUga2V5XG4gKiAgIHdpbGwgbW92ZSB0aGUgc2VsZWN0aW9uIHVwL2Rvd24gYnkgYSBwYWdlLCBhbmQgKHBlciB0aGUgYWJvdmUgcG9pbnQpIG1ha2VcbiAqICAgdGhlIHNlbGVjdGVkIGl0ZW0gdmlzaWJsZS5cbiAqXG4gKiBQcm9ncmFtbWF0aWNhbGx5IHNlbGVjdGluZyBhbiBpdGVtIChieSBzZXR0aW5nIHRoZSBzZWxlY3RlZCBwcm9wZXJ0eSkgc2Nyb2xsc1xuICogdGhlIGl0ZW0gaW50byB2aWV3LlxuICpcbiAqIFRoZSB1c2VyIGNhbiBhbHNvIHNlbGVjdCBhbiBpdGVtIGJ5IHR5cGluZyB0aGUgYmVnaW5uaW5nIG9mIGFuIGl0ZW0ncyB0ZXh0LlxuICpcbiAqIEBleHRlbmRzIEVsZW1lbnRCYXNlXG4gKiBAbWl4ZXMgQ2xpY2tTZWxlY3Rpb25cbiAqIEBtaXhlcyBDb250ZW50QXNJdGVtc1xuICogQG1peGVzIERpcmVjdGlvblNlbGVjdGlvblxuICogQG1peGVzIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnRcbiAqIEBtaXhlcyBHZW5lcmljXG4gKiBAbWl4ZXMgS2V5Ym9hcmRcbiAqIEBtaXhlcyBLZXlib2FyZERpcmVjdGlvblxuICogQG1peGVzIEtleWJvYXJkUGFnZWRTZWxlY3Rpb25cbiAqIEBtaXhlcyBLZXlib2FyZFByZWZpeFNlbGVjdGlvblxuICogQG1peGVzIFNlbGVjdGlvbkFyaWFBY3RpdmVcbiAqIEBtaXhlcyBTZWxlY3Rpb25IaWdobGlnaHRcbiAqIEBtaXhlcyBTZWxlY3Rpb25JblZpZXdcbiAqIEBtaXhlcyBTaW5nbGVTZWxlY3Rpb25cbiAqL1xuY2xhc3MgTGlzdEJveCBleHRlbmRzIEVsZW1lbnRCYXNlLmNvbXBvc2UoXG4gIENsaWNrU2VsZWN0aW9uLFxuICBDb250ZW50QXNJdGVtcyxcbiAgRGlyZWN0aW9uU2VsZWN0aW9uLFxuICBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50LFxuICBHZW5lcmljLFxuICBLZXlib2FyZCxcbiAgS2V5Ym9hcmREaXJlY3Rpb24sXG4gIEtleWJvYXJkUGFnZWRTZWxlY3Rpb24sXG4gIEtleWJvYXJkUHJlZml4U2VsZWN0aW9uLFxuICBTZWxlY3Rpb25BcmlhQWN0aXZlLFxuICBTZWxlY3Rpb25IaWdobGlnaHQsXG4gIFNlbGVjdGlvbkluVmlldyxcbiAgU2luZ2xlU2VsZWN0aW9uXG4pIHtcblxuICBnZXQgW3N5bWJvbHMuZGVmYXVsdHNdKCkge1xuICAgIGNvbnN0IGRlZmF1bHRzID0gc3VwZXJbc3ltYm9scy5kZWZhdWx0c10gfHwge307XG4gICAgZGVmYXVsdHMubmF2aWdhdGlvbkF4aXMgPSAndmVydGljYWwnO1xuICAgIHJldHVybiBkZWZhdWx0cztcbiAgfVxuXG4gIGdldCBzY3JvbGxUYXJnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuJC5pdGVtc0NvbnRhaW5lcjtcbiAgfVxuXG4gIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gYFxuICAgICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgICAgIH1cblxuICAgICAgW3RhcmdldD1cImNoaWxkXCJdIHtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAtd2Via2l0LWZsZXg6IDE7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICB9XG5cbiAgICAgICNpdGVtc0NvbnRhaW5lciB7XG4gICAgICAgIC13ZWJraXQtZmxleDogMTtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7IC8qIGZvciBtb21lbnR1bSBzY3JvbGxpbmcgKi9cbiAgICAgIH1cblxuICAgICAgLyogR2VuZXJpYyBhcHBlYXJhbmNlICovXG4gICAgICA6aG9zdChbZ2VuZXJpYz1cIlwiXSkge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtnZW5lcmljPVwiXCJdKSAjaXRlbXNDb250YWluZXIgOjpzbG90dGVkKCopIHtcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICBwYWRkaW5nOiAwLjI1ZW07XG4gICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGlkPVwiaXRlbXNDb250YWluZXJcIiByb2xlPVwibm9uZVwiPlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZXh0IGNvbnRlbnQgb2YgdGhlIHNlbGVjdGVkIGl0ZW0uXG4gICAqXG4gICAqIFNldHRpbmcgdGhpcyB2YWx1ZSB0byBhIHN0cmluZyB3aWxsIGF0dGVtcHQgdG8gc2VsZWN0IHRoZSBmaXJzdCBsaXN0IGl0ZW1cbiAgICogd2hvc2UgdGV4dCBjb250ZW50IG1hdGNoIHRoYXQgc3RyaW5nLiBTZXR0aW5nIHRoaXMgdG8gYSBzdHJpbmcgbm90IG1hdGNoaW5nXG4gICAqIGFueSBsaXN0IGl0ZW0gd2lsbCByZXN1bHQgaW4gbm8gc2VsZWN0aW9uLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkSXRlbSA9PSBudWxsIHx8IHRoaXMuc2VsZWN0ZWRJdGVtLnRleHRDb250ZW50ID09IG51bGwgP1xuICAgICAgJycgOlxuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0udGV4dENvbnRlbnQ7XG4gIH1cbiAgc2V0IHZhbHVlKHRleHQpIHtcblxuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHRoaXMuc2VsZWN0ZWRJbmRleDtcbiAgICBsZXQgbmV3SW5kZXggPSAtMTsgLy8gQXNzdW1lIHdlIHdvbid0IGZpbmQgdGhlIHRleHQuXG5cbiAgICAvLyBGaW5kIHRoZSBpdGVtIHdpdGggdGhlIGluZGljYXRlZCB0ZXh0LlxuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5pdGVtcztcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuZ3RoID0gaXRlbXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChpdGVtc1tpXS50ZXh0Q29udGVudCA9PT0gdGV4dCkge1xuICAgICAgICBuZXdJbmRleCA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuZXdJbmRleCAhPT0gY3VycmVudEluZGV4KSB7XG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBuZXdJbmRleDtcbiAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCd2YWx1ZS1jaGFuZ2VkJyk7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gdGhlIGxpc3QncyB2YWx1ZSBwcm9wZXJ0eSBjaGFuZ2VzLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgTGlzdEJveFxuICAgKiBAZXZlbnQgdmFsdWUtY2hhbmdlZFxuICAgKi9cbn1cblxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2Jhc2ljLWxpc3QtYm94JywgTGlzdEJveCk7XG5leHBvcnQgZGVmYXVsdCBMaXN0Qm94O1xuIl19
