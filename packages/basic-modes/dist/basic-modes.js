(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createSymbol = require('./createSymbol');

var _createSymbol2 = _interopRequireDefault(_createSymbol);

var _microtask = require('../src/microtask');

var _microtask2 = _interopRequireDefault(_microtask);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Memoized maps of attribute to property names and vice versa.
var attributeToPropertyNames = {};
var propertyNamesToAttributes = {};

// Symbols for private data members on an element.
var safeToSetAttributesSymbol = (0, _createSymbol2.default)('constructed');

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

      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AttributeMarshalling).call(this));

      (0, _microtask2.default)(function () {
        _this[safeToSetAttributesSymbol] = true;
      });
      return _this;
    }

    /*
     * Handle a change to the attribute with the given name.
     */

    _createClass(AttributeMarshalling, [{
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(attributeName, oldValue, newValue) {
        if (_get(Object.getPrototypeOf(AttributeMarshalling.prototype), 'attributeChangedCallback', this)) {
          _get(Object.getPrototypeOf(AttributeMarshalling.prototype), 'attributeChangedCallback', this).call(this);
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
        if (_get(Object.getPrototypeOf(AttributeMarshalling.prototype), 'connectedCallback', this)) {
          _get(Object.getPrototypeOf(AttributeMarshalling.prototype), 'connectedCallback', this).call(this);
        }
        this[safeToSetAttributesSymbol] = true;
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
       * be safely deferred until after the constructor has completed.
       *
       * @param {string} attributeName - The name of the *attribute* (not property) to set.
       * @param {object} value - The value to set. If null, the attribute will be removed.
       */
      value: function reflectAttribute(attributeName, value) {
        var _this2 = this;

        if (this[safeToSetAttributesSymbol]) {
          // Safe to set attributes immediately.
          reflectAttributeToElement(this, attributeName, value);
        } else {
          // Defer setting attributes.
          (0, _microtask2.default)(function () {
            return reflectAttributeToElement(_this2, attributeName, value);
          });
        }
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

// Reflect the attribute with the given element.
// If the attribute is null, remove the attribute.
function reflectAttributeToElement(element, attributeName, value) {
  if (value === null || typeof value === 'undefined') {
    element.removeAttribute(attributeName);
  } else {
    element.setAttribute(attributeName, value);
  }
}

},{"../src/microtask":13,"./createSymbol":12}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * A group of elements that have been associated for the purpose of
 * accomplishing some collective behavior, e.g., keyboard handling.
 *
 * There are certain components that want to cooperatively handle the keyboard.
 * For example, the basic-arrow-selection and basic-page-dots components are
 * optional components that can augment the appearance and behavior of an inner
 * basic-carousel, adding arrow buttons and dot buttons, respectively. When
 * these components are nested together, they form an implicit unit called a
 * *collective*:
 *
 *     <basic-arrow-selection>
 *       <basic-page-dots>
 *         <basic-carousel>
 *           ... images, etc. ...
 *         </basic-carousel>
 *       </basic-page-dots>
 *     </basic-arrow-selection>
 *
 * In this configuration, the three components will all have a `this.collective`
 * reference that refers to a shared instance of the `Collective` class.
 *
 * The [Keyboard](Keyboard.md) mixin they use is sensitive to the presence of
 * the collective. Among other things, it will ensure that only the outermost
 * element above — the basic-arrow-selection — will be a tab stop that can
 * receive the keyboard focus. This lets the user perceive the component
 * arrangement above as a single unit. The Keyboard mixin will also give each
 * element in the collective a chance to process any keyboard events. So, even
 * though the basic-arrow-selection element will have the focus, the standard
 * keyboard navigation provided by basic-carousel will continue to work.
 *
 * The [SelectionAriaActive](SelectionAriaActive.md) mixin also respects
 * collectives when using the `aria-activedescendant` and `role` attributes.
 * Those will be applied to the outermost element (basic-arrow-selection, above)
 * so that ARIA can correctly understand the arrangement of the elements.
 *
 * You can put elements into collectives yourself, or you can use the
 * [TargetInCollective](TargetInCollective.md) mixin.
 */

var Collective = function () {

  /**
   * Create a collective.
   *
   * @param {HTMLELement[]} [elements] - Initial elements to add.
   */

  function Collective() {
    var _this = this;

    _classCallCheck(this, Collective);

    /**
     * The elements in the collective.
     *
     * @type {HTMLElement[]}
     */
    this.elements = [];

    for (var _len = arguments.length, elements = Array(_len), _key = 0; _key < _len; _key++) {
      elements[_key] = arguments[_key];
    }

    elements.forEach(function (element) {
      return _this.assimilate(element);
    });
  }

  /**
   * Add the indicated target to the collective.
   *
   * By convention, if two elements wants to participate in a collective, and
   * one element is an ancestor of the other in the DOM, the ancestor should
   * assimilate the descendant instead of the other way around.
   *
   * After assimilation, any element in the collective that defines a
   * `collectiveChanged` method will have that method invoked. This allows
   * the collective's elements to respond to changes in the collective.
   *
   * @param {(HTMLElement|Collective)} target - The element or collective to add.
   */

  _createClass(Collective, [{
    key: 'assimilate',
    value: function assimilate(target) {
      var collectiveChanged = undefined;
      if (target instanceof Collective) {
        collectiveChanged = assimilateCollective(this, target);
      } else if (target.collective) {
        // Target is already part of a collective, assimilate it.
        collectiveChanged = assimilateCollective(this, target.collective);
      } else {
        // Assimilate an individual element.
        collectiveChanged = assimilateElement(this, target);
      }

      if (collectiveChanged) {
        this.invokeMethod('collectiveChanged');
      }
    }

    /**
     * Invoke a method on all elements in the collective.
     *
     * @param {string} method - The name of the method to invoke on all elements.
     * @param {object[]} [args] - The arguments to the method
     */

  }, {
    key: 'invokeMethod',
    value: function invokeMethod(method) {
      // Invoke from innermost to outermost.
      var elements = this.elements;

      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      for (var i = elements.length - 1; i >= 0; i--) {
        var element = elements[i];
        if (element[method]) {
          element[method].apply(element, args);
        }
      }
    }

    /**
     * The outermost element in the collective.
     * By convention, this is the first element in the `elements` array.
     */

  }, {
    key: 'outermostElement',
    get: function get() {
      return this.elements[0];
    }
  }]);

  return Collective;
}();

// The first collective assimilates the second.

function assimilateCollective(collective1, collective2) {
  if (collective1 === collective2) {
    // Collectives are same; ignore.
    return false;
  }

  var elements = collective2.elements;

  // Old collective will no longer have any elements of its own.
  collective2.elements = [];

  elements.forEach(function (element) {
    assimilateElement(collective1, element);
  });

  return true;
}

// Assimilate the indicated element.
function assimilateElement(collective, element) {
  if (element.collective === collective) {
    // Already part of this collective.
    return false;
  }
  element.collective = collective;
  collective.elements.push(element);
  return true;
}

exports.default = Collective;

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
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createSymbol = require('./createSymbol');

var _createSymbol2 = _interopRequireDefault(_createSymbol);

var _toggleClass = require('./toggleClass');

var _toggleClass2 = _interopRequireDefault(_toggleClass);

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

      return _possibleConstructorReturn(this, Object.getPrototypeOf(ContentAsItems).apply(this, arguments));
    }

    _createClass(ContentAsItems, [{
      key: 'applySelection',

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
      value: function applySelection(item, selected) {
        if (_get(Object.getPrototypeOf(ContentAsItems.prototype), 'applySelection', this)) {
          _get(Object.getPrototypeOf(ContentAsItems.prototype), 'applySelection', this).call(this, item, selected);
        }
        (0, _toggleClass2.default)(item, 'selected', selected);
      }
    }, {
      key: 'contentChanged',
      value: function contentChanged() {
        if (_get(Object.getPrototypeOf(ContentAsItems.prototype), 'contentChanged', this)) {
          _get(Object.getPrototypeOf(ContentAsItems.prototype), 'contentChanged', this).call(this);
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
      key: 'itemAdded',
      value: function itemAdded(item) {
        if (_get(Object.getPrototypeOf(ContentAsItems.prototype), 'itemAdded', this)) {
          _get(Object.getPrototypeOf(ContentAsItems.prototype), 'itemAdded', this).call(this, item);
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

        if (_get(Object.getPrototypeOf(ContentAsItems.prototype), 'itemsChanged', this)) {
          _get(Object.getPrototypeOf(ContentAsItems.prototype), 'itemsChanged', this).call(this);
        }

        // Perform per-item initialization.
        this.items.forEach(function (item) {
          if (!item[itemInitializedSymbol]) {
            _this2.itemAdded(item);
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
        var items = undefined;
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

},{"./createSymbol":12,"./toggleClass":14}],5:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

      return _possibleConstructorReturn(this, Object.getPrototypeOf(DistributedChildren).apply(this, arguments));
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

},{}],6:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DistributedChildrenAsContent).call(this));

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
        if (_get(Object.getPrototypeOf(DistributedChildrenAsContent.prototype), 'contentChanged', this)) {
          _get(Object.getPrototypeOf(DistributedChildrenAsContent.prototype), 'contentChanged', this).call(this);
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
          _set(Object.getPrototypeOf(DistributedChildrenAsContent.prototype), 'content', value, this);
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

},{"./microtask":13}],7:[function(require,module,exports){
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
   * `applySelection`, `itemAdded`, and `selectedIndex`. You can supply these
   * yourself, or do so via the [SingleSelection](SingleSelection.md) mixin.
   */

  var SelectionAriaActive = function (_base) {
    _inherits(SelectionAriaActive, _base);

    function SelectionAriaActive() {
      _classCallCheck(this, SelectionAriaActive);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(SelectionAriaActive).apply(this, arguments));
    }

    _createClass(SelectionAriaActive, [{
      key: 'applySelection',
      value: function applySelection(item, selected) {
        if (_get(Object.getPrototypeOf(SelectionAriaActive.prototype), 'applySelection', this)) {
          _get(Object.getPrototypeOf(SelectionAriaActive.prototype), 'applySelection', this).call(this, item, selected);
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
        if (_get(Object.getPrototypeOf(SelectionAriaActive.prototype), 'collectiveChanged', this)) {
          _get(Object.getPrototypeOf(SelectionAriaActive.prototype), 'collectiveChanged', this).call(this);
        }
        setAriaAttributes(this);
      }
    }, {
      key: 'connectedCallback',
      value: function connectedCallback() {
        if (_get(Object.getPrototypeOf(SelectionAriaActive.prototype), 'connectedCallback', this)) {
          _get(Object.getPrototypeOf(SelectionAriaActive.prototype), 'connectedCallback', this).call(this);
        }
        setAriaAttributes(this);
      }
    }, {
      key: 'itemAdded',
      value: function itemAdded(item) {
        if (_get(Object.getPrototypeOf(SelectionAriaActive.prototype), 'itemAdded', this)) {
          _get(Object.getPrototypeOf(SelectionAriaActive.prototype), 'itemAdded', this).call(this, item);
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
        return _get(Object.getPrototypeOf(SelectionAriaActive.prototype), 'selectedItem', this);
      },
      set: function set(item) {
        if ('selectedItem' in base.prototype) {
          _set(Object.getPrototypeOf(SelectionAriaActive.prototype), 'selectedItem', item, this);
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

  if (!element.parentNode) {
    return; // Not in document yet
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

},{}],8:[function(require,module,exports){
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

      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ShadowElementReferences).call(this));

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

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

      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SingleSelection).call(this));

      if (typeof _this.selectionRequired === 'undefined') {
        _this.selectionRequired = _this.defaults.selectionRequired;
      }
      if (typeof _this.selectionWraps === 'undefined') {
        _this.selectionWraps = _this.defaults.selectionWraps;
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
      key: 'applySelection',
      value: function applySelection(item, selected) {
        if (_get(Object.getPrototypeOf(SingleSelection.prototype), 'applySelection', this)) {
          _get(Object.getPrototypeOf(SingleSelection.prototype), 'applySelection', this).call(this, item, selected);
        }
      }

      /**
       * True if the selection can be moved to the next item, false if not (the
       * selected item is the last item in the list).
       *
       * @type {boolean}
       */

    }, {
      key: 'itemAdded',

      /**
       * Handle a new item being added to the list.
       *
       * The default implementation of this method simply sets the item's
       * selection state to false.
       *
       * @param {HTMLElement} item - the item being added
       */
      value: function itemAdded(item) {
        if (_get(Object.getPrototypeOf(SingleSelection.prototype), 'itemAdded', this)) {
          _get(Object.getPrototypeOf(SingleSelection.prototype), 'itemAdded', this).call(this, item);
        }
        this.applySelection(item, item === this.selectedItem);
      }
    }, {
      key: 'itemsChanged',
      value: function itemsChanged() {
        var _this2 = this;

        if (_get(Object.getPrototypeOf(SingleSelection.prototype), 'itemsChanged', this)) {
          _get(Object.getPrototypeOf(SingleSelection.prototype), 'itemsChanged', this).call(this);
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
        if (_get(Object.getPrototypeOf(SingleSelection.prototype), 'selectFirst', this)) {
          _get(Object.getPrototypeOf(SingleSelection.prototype), 'selectFirst', this).call(this);
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
        if (_get(Object.getPrototypeOf(SingleSelection.prototype), 'selectLast', this)) {
          _get(Object.getPrototypeOf(SingleSelection.prototype), 'selectLast', this).call(this);
        }
        return selectIndex(this, this.items.length - 1);
      }

      /**
       * Select the next item in the list.
       */

    }, {
      key: 'selectNext',
      value: function selectNext() {
        if (_get(Object.getPrototypeOf(SingleSelection.prototype), 'selectNext', this)) {
          _get(Object.getPrototypeOf(SingleSelection.prototype), 'selectNext', this).call(this);
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
        if (_get(Object.getPrototypeOf(SingleSelection.prototype), 'selectPrevious', this)) {
          _get(Object.getPrototypeOf(SingleSelection.prototype), 'selectPrevious', this).call(this);
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
          _set(Object.getPrototypeOf(SingleSelection.prototype), 'canSelectNext', canSelectNext, this);
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
          _set(Object.getPrototypeOf(SingleSelection.prototype), 'canSelectPrevious', canSelectPrevious, this);
        }
      }
    }, {
      key: 'defaults',
      get: function get() {
        var defaults = _get(Object.getPrototypeOf(SingleSelection.prototype), 'defaults', this) || {};
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
          _set(Object.getPrototypeOf(SingleSelection.prototype), 'selectedIndex', index, this);
        }
        var items = this.items;
        var item = undefined;
        if (index < 0 || items.length === 0) {
          item = null;
        } else {
          item = items[index];
        }
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
          _set(Object.getPrototypeOf(SingleSelection.prototype), 'selectedItem', item, this);
        }
        if (previousItem) {
          if (item === previousItem) {
            // The indicated item is already the selected item.
            return;
          }
          // Remove previous selection.
          this.applySelection(previousItem, false);
        }

        if (item) {
          this.applySelection(item, true);
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
          _set(Object.getPrototypeOf(SingleSelection.prototype), 'selectionRequired', selectionRequired, this);
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
          _set(Object.getPrototypeOf(SingleSelection.prototype), 'selectionWraps', value, this);
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
  var boundedIndex = undefined;
  if (element.selectionWraps) {
    // JavaScript mod doesn't handle negative numbers the way we want to wrap.
    // See http://stackoverflow.com/a/18618250/76472
    boundedIndex = (index % count + count) % count;
  } else {
    // Keep index within bounds of array.
    boundedIndex = Math.max(Math.min(index, count - 1), 0);
  }
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
  var canSelectNext = undefined;
  var canSelectPrevious = undefined;
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

},{"./createSymbol":12,"./microtask":13}],11:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Collective = require('./Collective');

var _Collective2 = _interopRequireDefault(_Collective);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Exported function extends a base class with TargetInCollective. */

exports.default = function (base) {

  /**
   * Mixin which allows a component to provide aggregate behavior with other
   * elements, e.g., for keyboard handling.
   *
   * This mixin implicitly creates a collective for a component so that it can
   * participate in collective keyboard handling. See the
   * [Collective](Collective.md) class for details.
   *
   * You can use this mixin in conjunction with
   * [ContentFirstChildTarget](ContentFirstChildTarget.md) to automatically have
   * the component's collective extended to its first child.
   */

  var TargetInCollective = function (_base) {
    _inherits(TargetInCollective, _base);

    function TargetInCollective() {
      _classCallCheck(this, TargetInCollective);

      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TargetInCollective).call(this));

      _this.collective = new _Collective2.default(_this);
      return _this;
    }

    /**
     * Gets/sets the current target of the component.
     *
     * Set this to point to another element. That target element will be
     * implicitly added to the component's collective. That is, the component
     * and its target will share responsibility for handling keyboard events.
     *
     * You can set this property yourself, or you can use the
     * ContentFirstChildTarget mixin to automatically set the target to the
     * component's first child.
     *
     * @type {HTMLElement}
     */

    _createClass(TargetInCollective, [{
      key: 'target',
      get: function get() {
        return _get(Object.getPrototypeOf(TargetInCollective.prototype), 'target', this);
      },
      set: function set(element) {
        if ('target' in base.prototype) {
          _set(Object.getPrototypeOf(TargetInCollective.prototype), 'target', element, this);
        }
        this.collective.assimilate(element);
      }
    }]);

    return TargetInCollective;
  }(base);

  return TargetInCollective;
};

},{"./Collective":2}],12:[function(require,module,exports){
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

},{}],13:[function(require,module,exports){
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

},{}],14:[function(require,module,exports){
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

},{}],15:[function(require,module,exports){
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

},{"../../basic-component-mixins/src/AttributeMarshalling":1,"../../basic-component-mixins/src/Composable":3,"../../basic-component-mixins/src/DistributedChildren":5,"../../basic-component-mixins/src/ShadowElementReferences":8,"../../basic-component-mixins/src/ShadowTemplate":9}],16:[function(require,module,exports){
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

var _ContentAsItems = require('../../basic-component-mixins/src/ContentAsItems');

var _ContentAsItems2 = _interopRequireDefault(_ContentAsItems);

var _SelectionAriaActive = require('../../basic-component-mixins/src/SelectionAriaActive');

var _SelectionAriaActive2 = _interopRequireDefault(_SelectionAriaActive);

var _SingleSelection = require('../../basic-component-mixins/src/SingleSelection');

var _SingleSelection2 = _interopRequireDefault(_SingleSelection);

var _TargetInCollective = require('../../basic-component-mixins/src/TargetInCollective');

var _TargetInCollective2 = _interopRequireDefault(_TargetInCollective);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var base = _ElementBase2.default.compose(_ContentAsItems2.default, _DistributedChildrenAsContent2.default, _SelectionAriaActive2.default, _SingleSelection2.default, _TargetInCollective2.default);

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
 * @mixes ContentAsItems
 * @mixes DistributedChildrenAsContent
 * @mixes SelectionAriaActive
 * @mixes SingleSelection
 * @mixes TargetInCollective
 */

var Modes = function (_base) {
  _inherits(Modes, _base);

  function Modes() {
    _classCallCheck(this, Modes);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Modes).apply(this, arguments));
  }

  _createClass(Modes, [{
    key: 'applySelection',
    value: function applySelection(item, selected) {
      if (_get(Object.getPrototypeOf(Modes.prototype), 'applySelection', this)) {
        _get(Object.getPrototypeOf(Modes.prototype), 'applySelection', this).call(this, item, selected);
      }
      item.style.display = selected ? '' : 'none';
      item.setAttribute('aria-hidden', !selected);
    }
  }, {
    key: 'defaults',
    get: function get() {
      var defaults = _get(Object.getPrototypeOf(Modes.prototype), 'defaults', this) || {};
      defaults.selectionRequired = true;
      return defaults;
    }
  }]);

  return Modes;
}(base);

customElements.define('basic-modes', Modes);
exports.default = Modes;

},{"../../basic-component-mixins/src/ContentAsItems":4,"../../basic-component-mixins/src/DistributedChildrenAsContent":6,"../../basic-component-mixins/src/SelectionAriaActive":7,"../../basic-component-mixins/src/SingleSelection":10,"../../basic-component-mixins/src/TargetInCollective":11,"../../basic-element-base/src/ElementBase":15}]},{},[16])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9BdHRyaWJ1dGVNYXJzaGFsbGluZy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NvbGxlY3RpdmUuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Db21wb3NhYmxlLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ29udGVudEFzSXRlbXMuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXN0cmlidXRlZENoaWxkcmVuLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudC5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NlbGVjdGlvbkFyaWFBY3RpdmUuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TaGFkb3dFbGVtZW50UmVmZXJlbmNlcy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NoYWRvd1RlbXBsYXRlLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2luZ2xlU2VsZWN0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvVGFyZ2V0SW5Db2xsZWN0aXZlLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvY3JlYXRlU3ltYm9sLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvbWljcm90YXNrLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvdG9nZ2xlQ2xhc3MuanMiLCJwYWNrYWdlcy9iYXNpYy1lbGVtZW50LWJhc2Uvc3JjL0VsZW1lbnRCYXNlLmpzIiwicGFja2FnZXMvYmFzaWMtbW9kZXMvc3JjL01vZGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDS0EsSUFBTSx3QkFBd0IsR0FBRyxFQUFFLENBQUM7QUFDcEMsSUFBTSx5QkFBeUIsR0FBRyxFQUFFOzs7QUFBQyxBQUlyQyxJQUFNLHlCQUF5QixHQUFHLDRCQUFhLGFBQWEsQ0FBQzs7O0FBQUM7a0JBSS9DLFVBQUMsSUFBSSxFQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQXFDakIsb0JBQW9CO2NBQXBCLG9CQUFvQjs7QUFFeEIsYUFGSSxvQkFBb0IsR0FFVjs0QkFGVixvQkFBb0I7O3lFQUFwQixvQkFBb0I7O0FBSXRCLCtCQUFVLFlBQU07QUFDZCxjQUFLLHlCQUF5QixDQUFDLEdBQUcsSUFBSSxDQUFDO09BQ3hDLENBQUMsQ0FBQzs7S0FDSjs7Ozs7QUFBQTtpQkFQRyxvQkFBb0I7OytDQVlDLGFBQWEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFO0FBQzFELHVDQWJFLG9CQUFvQixnREFhYztBQUFFLHFDQWJwQyxvQkFBb0IsMERBYWlEO1NBQUU7QUFDekUsWUFBSSxZQUFZLEdBQUcsdUJBQXVCLENBQUMsYUFBYSxDQUFDOzs7QUFBQyxBQUcxRCxZQUFJLFlBQVksSUFBSSxJQUFJLElBQUksRUFBRSxZQUFZLElBQUksV0FBVyxDQUFDLFNBQVMsQ0FBQSxBQUFDLEVBQUU7QUFDcEUsY0FBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLFFBQVEsQ0FBQztTQUMvQjtPQUNGOzs7MENBRW1CO0FBQ2xCLHVDQXZCRSxvQkFBb0IseUNBdUJPO0FBQUUscUNBdkI3QixvQkFBb0IsbURBdUJtQztTQUFFO0FBQzNELFlBQUksQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLElBQUksQ0FBQztPQUN4Qzs7Ozs7Ozs7Ozs7Ozs7Ozt1Q0FrQmdCLGFBQWEsRUFBRSxLQUFLLEVBQUU7OztB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Q0FBQyxPQUFPOzs4REFLeEQ7O2tCQVljLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDMUIsSUFBSSxJQUFJLEdBQUcsc0JBQVksT0FBTywwSkFNN0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUM7SUFxQkksS0FBSztZQUFMLEtBQUs7O1dBQUwsS0FBSzswQkFBTCxLQUFLOztrRUFBTCxLQUFLOzs7ZUFBTCxLQUFLOzttQ0FFTSxJQUFJLEVBQUUsUUFBUSxFQUFFO0FBQzdCLHFDQUhFLEtBQUssc0NBR21CO0FBQUUsbUNBSDFCLEtBQUssZ0RBRzBDLElBQUksRUFBRSxRQUFRLEVBQUU7T0FBRTtBQUNuRSxVQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxRQUFRLEdBQUcsRUFBRSxHQUFHLE1BQU0sQ0FBQztBQUM1QyxVQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQzdDOzs7d0JBRWM7QUFDYixVQUFJLFFBQVEsR0FBRywyQkFUYixLQUFLLGtDQVMwQixFQUFFLENBQUM7QUFDcEMsY0FBUSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztBQUNsQyxhQUFPLFFBQVEsQ0FBQztLQUNqQjs7O1NBWkcsS0FBSztFQUFTLElBQUk7O0FBaUJ4QixjQUFjLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztrQkFDN0IsS0FBSyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4vY3JlYXRlU3ltYm9sJztcbmltcG9ydCBtaWNyb3Rhc2sgZnJvbSAnLi4vc3JjL21pY3JvdGFzayc7XG5cblxuLy8gTWVtb2l6ZWQgbWFwcyBvZiBhdHRyaWJ1dGUgdG8gcHJvcGVydHkgbmFtZXMgYW5kIHZpY2UgdmVyc2EuXG5jb25zdCBhdHRyaWJ1dGVUb1Byb3BlcnR5TmFtZXMgPSB7fTtcbmNvbnN0IHByb3BlcnR5TmFtZXNUb0F0dHJpYnV0ZXMgPSB7fTtcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3Qgc2FmZVRvU2V0QXR0cmlidXRlc1N5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnY29uc3RydWN0ZWQnKTtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIEF0dHJpYnV0ZU1hcnNoYWxsaW5nLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggbWFyc2hhbGxzIGF0dHJpYnV0ZXMgdG8gcHJvcGVydGllcyBhbmQgdmljZSB2ZXJzYS5cbiAgICpcbiAgICogSWYgeW91ciBjb21wb25lbnQgZXhwb3NlcyBhIHNldHRlciBmb3IgYSBwcm9wZXJ0eSwgaXQncyBnZW5lcmFsbHkgYSBnb29kXG4gICAqIGlkZWEgdG8gbGV0IGRldnMgdXNpbmcgeW91ciBjb21wb25lbnQgYmUgYWJsZSB0byBzZXQgdGhhdCBwcm9wZXJ0eSBpbiBIVE1MXG4gICAqIHZpYSBhbiBlbGVtZW50IGF0dHJpYnV0ZS4gWW91IGNhbiBjb2RlIHRoYXQgeW91cnNlbGYgYnkgd3JpdGluZyBhblxuICAgKiBgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrYCwgb3IgeW91IGNhbiB1c2UgdGhpcyBtaXhpbiB0byBnZXQgYSBkZWdyZWUgb2ZcbiAgICogYXV0b21hdGljIHN1cHBvcnQuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gaW1wbGVtZW50cyBhbiBgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrYCB0aGF0IHdpbGwgYXR0ZW1wdCB0b1xuICAgKiBjb252ZXJ0IGEgY2hhbmdlIGluIGFuIGVsZW1lbnQgYXR0cmlidXRlIGludG8gYSBjYWxsIHRvIHRoZSBjb3JyZXNwb25kaW5nXG4gICAqIHByb3BlcnR5IHNldHRlci4gQXR0cmlidXRlcyB0eXBpY2FsbHkgZm9sbG93IGh5cGhlbmF0ZWQgbmFtZXMgKFwiZm9vLWJhclwiKSxcbiAgICogd2hlcmVhcyBwcm9wZXJ0aWVzIHR5cGljYWxseSB1c2UgY2FtZWxDYXNlIG5hbWVzIChcImZvb0JhclwiKS4gVGhpcyBtaXhpblxuICAgKiByZXNwZWN0cyB0aGF0IGNvbnZlbnRpb24sIGF1dG9tYXRpY2FsbHkgbWFwcGluZyB0aGUgaHlwaGVuYXRlZCBhdHRyaWJ1dGVcbiAgICogbmFtZSB0byB0aGUgY29ycmVzcG9uZGluZyBjYW1lbENhc2UgcHJvcGVydHkgbmFtZS5cbiAgICpcbiAgICogRXhhbXBsZTogWW91IGRlZmluZSBhIGNvbXBvbmVudCB1c2luZyB0aGlzIG1peGluOlxuICAgKlxuICAgKiAgICAgY2xhc3MgTXlFbGVtZW50IGV4dGVuZHMgQXR0cmlidXRlTWFyc2hhbGxpbmcoSFRNTEVsZW1lbnQpIHtcbiAgICogICAgICAgZ2V0IGZvb0JhcigpIHsgcmV0dXJuIHRoaXMuX2Zvb0JhcjsgfVxuICAgKiAgICAgICBzZXQgZm9vQmFyKHZhbHVlKSB7IHRoaXMuX2Zvb0JhciA9IHZhbHVlOyB9XG4gICAqICAgICB9XG4gICAqICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ215LWVsZW1lbnQnLCBNeUVsZW1lbnQpO1xuICAgKlxuICAgKiBJZiBzb21lb25lIHRoZW4gaW5zdGFudGlhdGVzIHlvdXIgY29tcG9uZW50IGluIEhUTUw6XG4gICAqXG4gICAqICAgICA8bXktZWxlbWVudCBmb28tYmFyPVwiSGVsbG9cIj48L215LWVsZW1lbnQ+XG4gICAqXG4gICAqIFRoZW4sIGFmdGVyIHRoZSBlbGVtZW50IGhhcyBiZWVuIHVwZ3JhZGVkLCB0aGUgYGZvb0JhcmAgc2V0dGVyIHdpbGxcbiAgICogYXV0b21hdGljYWxseSBiZSBpbnZva2VkIHdpdGggdGhlIGluaXRpYWwgdmFsdWUgXCJIZWxsb1wiLlxuICAgKlxuICAgKiBGb3IgdGhlIHRpbWUgYmVpbmcsIHRoaXMgbWl4aW4gb25seSBzdXBwb3J0cyBzdHJpbmctdmFsdWVkIHByb3BlcnRpZXMuXG4gICAqIElmIHlvdSdkIGxpa2UgdG8gY29udmVydCBzdHJpbmcgYXR0cmlidXRlcyB0byBvdGhlciB0eXBlcyAobnVtYmVycyxcbiAgICogYm9vbGVhbnMpLCB5b3UgbmVlZCB0byBpbXBsZW1lbnQgYGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja2AgeW91cnNlbGYuXG4gICAqL1xuICBjbGFzcyBBdHRyaWJ1dGVNYXJzaGFsbGluZyBleHRlbmRzIGJhc2Uge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgbWljcm90YXNrKCgpID0+IHtcbiAgICAgICAgdGhpc1tzYWZlVG9TZXRBdHRyaWJ1dGVzU3ltYm9sXSA9IHRydWU7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEhhbmRsZSBhIGNoYW5nZSB0byB0aGUgYXR0cmlidXRlIHdpdGggdGhlIGdpdmVuIG5hbWUuXG4gICAgICovXG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKGF0dHJpYnV0ZU5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xuICAgICAgaWYgKHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjaykgeyBzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soKTsgfVxuICAgICAgbGV0IHByb3BlcnR5TmFtZSA9IGF0dHJpYnV0ZVRvUHJvcGVydHlOYW1lKGF0dHJpYnV0ZU5hbWUpO1xuICAgICAgLy8gSWYgdGhlIGF0dHJpYnV0ZSBuYW1lIGNvcnJlc3BvbmRzIHRvIGEgcHJvcGVydHkgbmFtZSwgc2V0IHRoZSBwcm9wZXJ0eS5cbiAgICAgIC8vIElnbm9yZSBzdGFuZGFyZCBIVE1MRWxlbWVudCBwcm9wZXJ0aWVzIGhhbmRsZWQgYnkgdGhlIERPTS5cbiAgICAgIGlmIChwcm9wZXJ0eU5hbWUgaW4gdGhpcyAmJiAhKHByb3BlcnR5TmFtZSBpbiBIVE1MRWxlbWVudC5wcm90b3R5cGUpKSB7XG4gICAgICAgIHRoaXNbcHJvcGVydHlOYW1lXSA9IG5ld1ZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKSB7IHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7IH1cbiAgICAgIHRoaXNbc2FmZVRvU2V0QXR0cmlidXRlc1N5bWJvbF0gPSB0cnVlO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xuICAgICAgcmV0dXJuIGF0dHJpYnV0ZXNGb3JDbGFzcyh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQvdW5zZXQgdGhlIGF0dHJpYnV0ZSB3aXRoIHRoZSBpbmRpY2F0ZWQgbmFtZS5cbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIGV4aXN0cyBwcmltYXJpbHkgdG8gaGFuZGxlIHRoZSBjYXNlIHdoZXJlIGFuIGVsZW1lbnQgd2FudHMgdG9cbiAgICAgKiBzZXQgYSBkZWZhdWx0IHByb3BlcnR5IHZhbHVlIHRoYXQgc2hvdWxkIGJlIHJlZmxlY3RlZCBhcyBhbiBhdHRyaWJ1dGUuIEFuXG4gICAgICogaW1wb3J0YW50IGxpbWl0YXRpb24gb2YgY3VzdG9tIGVsZW1lbnQgY29uc3R1cmN0b3JzIGlzIHRoYXQgdGhleSBjYW5ub3RcbiAgICAgKiBzZXQgYXR0cmlidXRlcy4gQSBjYWxsIHRvIGByZWZsZWN0QXR0cmlidXRlYCBkdXJpbmcgdGhlIGNvbnN0cnVjdG9yIHdpbGxcbiAgICAgKiBiZSBzYWZlbHkgZGVmZXJyZWQgdW50aWwgYWZ0ZXIgdGhlIGNvbnN0cnVjdG9yIGhhcyBjb21wbGV0ZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYXR0cmlidXRlTmFtZSAtIFRoZSBuYW1lIG9mIHRoZSAqYXR0cmlidXRlKiAobm90IHByb3BlcnR5KSB0byBzZXQuXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIHNldC4gSWYgbnVsbCwgdGhlIGF0dHJpYnV0ZSB3aWxsIGJlIHJlbW92ZWQuXG4gICAgICovXG4gICAgcmVmbGVjdEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCB2YWx1ZSkge1xuICAgICAgaWYgKHRoaXNbc2FmZVRvU2V0QXR0cmlidXRlc1N5bWJvbF0pIHtcbiAgICAgICAgLy8gU2FmZSB0byBzZXQgYXR0cmlidXRlcyBpbW1lZGlhdGVseS5cbiAgICAgICAgcmVmbGVjdEF0dHJpYnV0ZVRvRWxlbWVudCh0aGlzLCBhdHRyaWJ1dGVOYW1lLCB2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBEZWZlciBzZXR0aW5nIGF0dHJpYnV0ZXMuXG4gICAgICAgIG1pY3JvdGFzaygoKSA9PiByZWZsZWN0QXR0cmlidXRlVG9FbGVtZW50KHRoaXMsIGF0dHJpYnV0ZU5hbWUsIHZhbHVlKSk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gQXR0cmlidXRlTWFyc2hhbGxpbmc7XG59O1xuXG5cbi8vIENvbnZlcnQgaHlwaGVuYXRlZCBmb28tYmFyIGF0dHJpYnV0ZSBuYW1lIHRvIGNhbWVsIGNhc2UgZm9vQmFyIHByb3BlcnR5IG5hbWUuXG5mdW5jdGlvbiBhdHRyaWJ1dGVUb1Byb3BlcnR5TmFtZShhdHRyaWJ1dGVOYW1lKSB7XG4gIGxldCBwcm9wZXJ0eU5hbWUgPSBhdHRyaWJ1dGVUb1Byb3BlcnR5TmFtZXNbYXR0cmlidXRlTmFtZV07XG4gIGlmICghcHJvcGVydHlOYW1lKSB7XG4gICAgLy8gQ29udmVydCBhbmQgbWVtb2l6ZS5cbiAgICBsZXQgaHlwZW5SZWdFeCA9IC8tKFthLXpdKS9nO1xuICAgIHByb3BlcnR5TmFtZSA9IGF0dHJpYnV0ZU5hbWUucmVwbGFjZShoeXBlblJlZ0V4LFxuICAgICAgICBtYXRjaCA9PiBtYXRjaFsxXS50b1VwcGVyQ2FzZSgpKTtcbiAgICBhdHRyaWJ1dGVUb1Byb3BlcnR5TmFtZXNbYXR0cmlidXRlTmFtZV0gPSBwcm9wZXJ0eU5hbWU7XG4gIH1cbiAgcmV0dXJuIHByb3BlcnR5TmFtZTtcbn1cblxuZnVuY3Rpb24gYXR0cmlidXRlc0ZvckNsYXNzKGNsYXNzRm4pIHtcblxuICAvLyBXZSB0cmVhdCB0aGUgZWxlbWVudCBiYXNlIGNsYXNzZXMgYXMgaWYgdGhleSBoYXZlIG5vIGF0dHJpYnV0ZXMsIHNpbmNlIHdlXG4gIC8vIGRvbid0IHdhbnQgdG8gcmVjZWl2ZSBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sgZm9yIHRoZW0uXG4gIGlmIChjbGFzc0ZuID09PSBIVE1MRWxlbWVudCB8fCBjbGFzc0ZuID09PSBPYmplY3QpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICAvLyBHZXQgYXR0cmlidXRlcyBmb3IgcGFyZW50IGNsYXNzLlxuICBsZXQgYmFzZUNsYXNzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGNsYXNzRm4ucHJvdG90eXBlKS5jb25zdHJ1Y3RvcjtcbiAgbGV0IGJhc2VBdHRyaWJ1dGVzID0gYXR0cmlidXRlc0ZvckNsYXNzKGJhc2VDbGFzcyk7XG5cbiAgLy8gR2V0IGF0dHJpYnV0ZXMgZm9yIHRoaXMgY2xhc3MuXG4gIGxldCBwcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoY2xhc3NGbi5wcm90b3R5cGUpO1xuICBsZXQgc2V0dGVyTmFtZXMgPSBwcm9wZXJ0eU5hbWVzLmZpbHRlcihwcm9wZXJ0eU5hbWUgPT5cbiAgICB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihcbiAgICAgICAgY2xhc3NGbi5wcm90b3R5cGUsIHByb3BlcnR5TmFtZSkuc2V0ID09PSAnZnVuY3Rpb24nKTtcbiAgbGV0IGF0dHJpYnV0ZXMgPSBzZXR0ZXJOYW1lcy5tYXAoc2V0dGVyTmFtZSA9PlxuICAgICAgcHJvcGVydHlOYW1lVG9BdHRyaWJ1dGUoc2V0dGVyTmFtZSkpO1xuXG4gIC8vIE1lcmdlLlxuICBsZXQgZGlmZiA9IGF0dHJpYnV0ZXMuZmlsdGVyKGF0dHJpYnV0ZSA9PlxuICAgICAgYmFzZUF0dHJpYnV0ZXMuaW5kZXhPZihhdHRyaWJ1dGUpIDwgMCk7XG4gIHJldHVybiBiYXNlQXR0cmlidXRlcy5jb25jYXQoZGlmZik7XG59XG5cbi8vIENvbnZlcnQgYSBjYW1lbCBjYXNlIGZvb0JhciBwcm9wZXJ0eSBuYW1lIHRvIGEgaHlwaGVuYXRlZCBmb28tYmFyIGF0dHJpYnV0ZS5cbmZ1bmN0aW9uIHByb3BlcnR5TmFtZVRvQXR0cmlidXRlKHByb3BlcnR5TmFtZSkge1xuICBsZXQgYXR0cmlidXRlID0gcHJvcGVydHlOYW1lc1RvQXR0cmlidXRlc1twcm9wZXJ0eU5hbWVdO1xuICBpZiAoIWF0dHJpYnV0ZSkge1xuICAgIC8vIENvbnZlcnQgYW5kIG1lbW9pemUuXG4gICAgbGV0IHVwcGVyY2FzZVJlZ0V4ID0gLyhbQS1aXSkvZztcbiAgICBhdHRyaWJ1dGUgPSBwcm9wZXJ0eU5hbWUucmVwbGFjZSh1cHBlcmNhc2VSZWdFeCwgJy0kMScpLnRvTG93ZXJDYXNlKCk7XG4gIH1cbiAgcmV0dXJuIGF0dHJpYnV0ZTtcbn1cblxuLy8gUmVmbGVjdCB0aGUgYXR0cmlidXRlIHdpdGggdGhlIGdpdmVuIGVsZW1lbnQuXG4vLyBJZiB0aGUgYXR0cmlidXRlIGlzIG51bGwsIHJlbW92ZSB0aGUgYXR0cmlidXRlLlxuZnVuY3Rpb24gcmVmbGVjdEF0dHJpYnV0ZVRvRWxlbWVudChlbGVtZW50LCBhdHRyaWJ1dGVOYW1lLCB2YWx1ZSkge1xuICBpZiAodmFsdWUgPT09IG51bGwgfHwgdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xuICB9IGVsc2Uge1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIHZhbHVlKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBBIGdyb3VwIG9mIGVsZW1lbnRzIHRoYXQgaGF2ZSBiZWVuIGFzc29jaWF0ZWQgZm9yIHRoZSBwdXJwb3NlIG9mXG4gKiBhY2NvbXBsaXNoaW5nIHNvbWUgY29sbGVjdGl2ZSBiZWhhdmlvciwgZS5nLiwga2V5Ym9hcmQgaGFuZGxpbmcuXG4gKlxuICogVGhlcmUgYXJlIGNlcnRhaW4gY29tcG9uZW50cyB0aGF0IHdhbnQgdG8gY29vcGVyYXRpdmVseSBoYW5kbGUgdGhlIGtleWJvYXJkLlxuICogRm9yIGV4YW1wbGUsIHRoZSBiYXNpYy1hcnJvdy1zZWxlY3Rpb24gYW5kIGJhc2ljLXBhZ2UtZG90cyBjb21wb25lbnRzIGFyZVxuICogb3B0aW9uYWwgY29tcG9uZW50cyB0aGF0IGNhbiBhdWdtZW50IHRoZSBhcHBlYXJhbmNlIGFuZCBiZWhhdmlvciBvZiBhbiBpbm5lclxuICogYmFzaWMtY2Fyb3VzZWwsIGFkZGluZyBhcnJvdyBidXR0b25zIGFuZCBkb3QgYnV0dG9ucywgcmVzcGVjdGl2ZWx5LiBXaGVuXG4gKiB0aGVzZSBjb21wb25lbnRzIGFyZSBuZXN0ZWQgdG9nZXRoZXIsIHRoZXkgZm9ybSBhbiBpbXBsaWNpdCB1bml0IGNhbGxlZCBhXG4gKiAqY29sbGVjdGl2ZSo6XG4gKlxuICogICAgIDxiYXNpYy1hcnJvdy1zZWxlY3Rpb24+XG4gKiAgICAgICA8YmFzaWMtcGFnZS1kb3RzPlxuICogICAgICAgICA8YmFzaWMtY2Fyb3VzZWw+XG4gKiAgICAgICAgICAgLi4uIGltYWdlcywgZXRjLiAuLi5cbiAqICAgICAgICAgPC9iYXNpYy1jYXJvdXNlbD5cbiAqICAgICAgIDwvYmFzaWMtcGFnZS1kb3RzPlxuICogICAgIDwvYmFzaWMtYXJyb3ctc2VsZWN0aW9uPlxuICpcbiAqIEluIHRoaXMgY29uZmlndXJhdGlvbiwgdGhlIHRocmVlIGNvbXBvbmVudHMgd2lsbCBhbGwgaGF2ZSBhIGB0aGlzLmNvbGxlY3RpdmVgXG4gKiByZWZlcmVuY2UgdGhhdCByZWZlcnMgdG8gYSBzaGFyZWQgaW5zdGFuY2Ugb2YgdGhlIGBDb2xsZWN0aXZlYCBjbGFzcy5cbiAqXG4gKiBUaGUgW0tleWJvYXJkXShLZXlib2FyZC5tZCkgbWl4aW4gdGhleSB1c2UgaXMgc2Vuc2l0aXZlIHRvIHRoZSBwcmVzZW5jZSBvZlxuICogdGhlIGNvbGxlY3RpdmUuIEFtb25nIG90aGVyIHRoaW5ncywgaXQgd2lsbCBlbnN1cmUgdGhhdCBvbmx5IHRoZSBvdXRlcm1vc3RcbiAqIGVsZW1lbnQgYWJvdmUg4oCUwqB0aGUgYmFzaWMtYXJyb3ctc2VsZWN0aW9uIOKAlMKgd2lsbCBiZSBhIHRhYiBzdG9wIHRoYXQgY2FuXG4gKiByZWNlaXZlIHRoZSBrZXlib2FyZCBmb2N1cy4gVGhpcyBsZXRzIHRoZSB1c2VyIHBlcmNlaXZlIHRoZSBjb21wb25lbnRcbiAqIGFycmFuZ2VtZW50IGFib3ZlIGFzIGEgc2luZ2xlIHVuaXQuIFRoZSBLZXlib2FyZCBtaXhpbiB3aWxsIGFsc28gZ2l2ZSBlYWNoXG4gKiBlbGVtZW50IGluIHRoZSBjb2xsZWN0aXZlIGEgY2hhbmNlIHRvIHByb2Nlc3MgYW55IGtleWJvYXJkIGV2ZW50cy4gU28sIGV2ZW5cbiAqIHRob3VnaCB0aGUgYmFzaWMtYXJyb3ctc2VsZWN0aW9uIGVsZW1lbnQgd2lsbCBoYXZlIHRoZSBmb2N1cywgdGhlIHN0YW5kYXJkXG4gKiBrZXlib2FyZCBuYXZpZ2F0aW9uIHByb3ZpZGVkIGJ5IGJhc2ljLWNhcm91c2VsIHdpbGwgY29udGludWUgdG8gd29yay5cbiAqXG4gKiBUaGUgW1NlbGVjdGlvbkFyaWFBY3RpdmVdKFNlbGVjdGlvbkFyaWFBY3RpdmUubWQpIG1peGluIGFsc28gcmVzcGVjdHNcbiAqIGNvbGxlY3RpdmVzIHdoZW4gdXNpbmcgdGhlIGBhcmlhLWFjdGl2ZWRlc2NlbmRhbnRgIGFuZCBgcm9sZWAgYXR0cmlidXRlcy5cbiAqIFRob3NlIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgb3V0ZXJtb3N0IGVsZW1lbnQgKGJhc2ljLWFycm93LXNlbGVjdGlvbiwgYWJvdmUpXG4gKiBzbyB0aGF0IEFSSUEgY2FuIGNvcnJlY3RseSB1bmRlcnN0YW5kIHRoZSBhcnJhbmdlbWVudCBvZiB0aGUgZWxlbWVudHMuXG4gKlxuICogWW91IGNhbiBwdXQgZWxlbWVudHMgaW50byBjb2xsZWN0aXZlcyB5b3Vyc2VsZiwgb3IgeW91IGNhbiB1c2UgdGhlXG4gKiBbVGFyZ2V0SW5Db2xsZWN0aXZlXShUYXJnZXRJbkNvbGxlY3RpdmUubWQpIG1peGluLlxuICovXG5jbGFzcyBDb2xsZWN0aXZlIHtcblxuICAvKipcbiAgICogQ3JlYXRlIGEgY29sbGVjdGl2ZS5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRUxlbWVudFtdfSBbZWxlbWVudHNdIC0gSW5pdGlhbCBlbGVtZW50cyB0byBhZGQuXG4gICAqL1xuICBjb25zdHJ1Y3RvciguLi5lbGVtZW50cykge1xuICAgIC8qKlxuICAgICAqIFRoZSBlbGVtZW50cyBpbiB0aGUgY29sbGVjdGl2ZS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudFtdfVxuICAgICAqL1xuICAgIHRoaXMuZWxlbWVudHMgPSBbXTtcbiAgICBlbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4gdGhpcy5hc3NpbWlsYXRlKGVsZW1lbnQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgdGhlIGluZGljYXRlZCB0YXJnZXQgdG8gdGhlIGNvbGxlY3RpdmUuXG4gICAqXG4gICAqIEJ5IGNvbnZlbnRpb24sIGlmIHR3byBlbGVtZW50cyB3YW50cyB0byBwYXJ0aWNpcGF0ZSBpbiBhIGNvbGxlY3RpdmUsIGFuZFxuICAgKiBvbmUgZWxlbWVudCBpcyBhbiBhbmNlc3RvciBvZiB0aGUgb3RoZXIgaW4gdGhlIERPTSwgdGhlIGFuY2VzdG9yIHNob3VsZFxuICAgKiBhc3NpbWlsYXRlIHRoZSBkZXNjZW5kYW50IGluc3RlYWQgb2YgdGhlIG90aGVyIHdheSBhcm91bmQuXG4gICAqXG4gICAqIEFmdGVyIGFzc2ltaWxhdGlvbiwgYW55IGVsZW1lbnQgaW4gdGhlIGNvbGxlY3RpdmUgdGhhdCBkZWZpbmVzIGFcbiAgICogYGNvbGxlY3RpdmVDaGFuZ2VkYCBtZXRob2Qgd2lsbCBoYXZlIHRoYXQgbWV0aG9kIGludm9rZWQuIFRoaXMgYWxsb3dzXG4gICAqIHRoZSBjb2xsZWN0aXZlJ3MgZWxlbWVudHMgdG8gcmVzcG9uZCB0byBjaGFuZ2VzIGluIHRoZSBjb2xsZWN0aXZlLlxuICAgKlxuICAgKiBAcGFyYW0geyhIVE1MRWxlbWVudHxDb2xsZWN0aXZlKX0gdGFyZ2V0IC0gVGhlIGVsZW1lbnQgb3IgY29sbGVjdGl2ZSB0byBhZGQuXG4gICAqL1xuICBhc3NpbWlsYXRlKHRhcmdldCkge1xuICAgIGxldCBjb2xsZWN0aXZlQ2hhbmdlZDtcbiAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgQ29sbGVjdGl2ZSkge1xuICAgICAgY29sbGVjdGl2ZUNoYW5nZWQgPSBhc3NpbWlsYXRlQ29sbGVjdGl2ZSh0aGlzLCB0YXJnZXQpO1xuICAgIH0gZWxzZSBpZiAodGFyZ2V0LmNvbGxlY3RpdmUpIHtcbiAgICAgIC8vIFRhcmdldCBpcyBhbHJlYWR5IHBhcnQgb2YgYSBjb2xsZWN0aXZlLCBhc3NpbWlsYXRlIGl0LlxuICAgICAgY29sbGVjdGl2ZUNoYW5nZWQgPSBhc3NpbWlsYXRlQ29sbGVjdGl2ZSh0aGlzLCB0YXJnZXQuY29sbGVjdGl2ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEFzc2ltaWxhdGUgYW4gaW5kaXZpZHVhbCBlbGVtZW50LlxuICAgICAgY29sbGVjdGl2ZUNoYW5nZWQgPSBhc3NpbWlsYXRlRWxlbWVudCh0aGlzLCB0YXJnZXQpO1xuICAgIH1cblxuICAgIGlmIChjb2xsZWN0aXZlQ2hhbmdlZCkge1xuICAgICAgdGhpcy5pbnZva2VNZXRob2QoJ2NvbGxlY3RpdmVDaGFuZ2VkJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEludm9rZSBhIG1ldGhvZCBvbiBhbGwgZWxlbWVudHMgaW4gdGhlIGNvbGxlY3RpdmUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2QgLSBUaGUgbmFtZSBvZiB0aGUgbWV0aG9kIHRvIGludm9rZSBvbiBhbGwgZWxlbWVudHMuXG4gICAqIEBwYXJhbSB7b2JqZWN0W119IFthcmdzXSAtIFRoZSBhcmd1bWVudHMgdG8gdGhlIG1ldGhvZFxuICAgKi9cbiAgaW52b2tlTWV0aG9kKG1ldGhvZCwgLi4uYXJncykge1xuICAgIC8vIEludm9rZSBmcm9tIGlubmVybW9zdCB0byBvdXRlcm1vc3QuXG4gICAgbGV0IGVsZW1lbnRzID0gdGhpcy5lbGVtZW50cztcbiAgICBmb3IgKGxldCBpID0gZWxlbWVudHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCBlbGVtZW50ID0gZWxlbWVudHNbaV07XG4gICAgICBpZiAoZWxlbWVudFttZXRob2RdKSB7XG4gICAgICAgIGVsZW1lbnRbbWV0aG9kXS5hcHBseShlbGVtZW50LCBhcmdzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhlIG91dGVybW9zdCBlbGVtZW50IGluIHRoZSBjb2xsZWN0aXZlLlxuICAgKiBCeSBjb252ZW50aW9uLCB0aGlzIGlzIHRoZSBmaXJzdCBlbGVtZW50IGluIHRoZSBgZWxlbWVudHNgIGFycmF5LlxuICAgKi9cbiAgZ2V0IG91dGVybW9zdEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudHNbMF07XG4gIH1cblxufVxuXG5cbi8vIFRoZSBmaXJzdCBjb2xsZWN0aXZlIGFzc2ltaWxhdGVzIHRoZSBzZWNvbmQuXG5mdW5jdGlvbiBhc3NpbWlsYXRlQ29sbGVjdGl2ZShjb2xsZWN0aXZlMSwgY29sbGVjdGl2ZTIpIHtcbiAgaWYgKGNvbGxlY3RpdmUxID09PSBjb2xsZWN0aXZlMikge1xuICAgIC8vIENvbGxlY3RpdmVzIGFyZSBzYW1lOyBpZ25vcmUuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgbGV0IGVsZW1lbnRzID0gY29sbGVjdGl2ZTIuZWxlbWVudHM7XG5cbiAgLy8gT2xkIGNvbGxlY3RpdmUgd2lsbCBubyBsb25nZXIgaGF2ZSBhbnkgZWxlbWVudHMgb2YgaXRzIG93bi5cbiAgY29sbGVjdGl2ZTIuZWxlbWVudHMgPSBbXTtcblxuICBlbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIGFzc2ltaWxhdGVFbGVtZW50KGNvbGxlY3RpdmUxLCBlbGVtZW50KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cblxuLy8gQXNzaW1pbGF0ZSB0aGUgaW5kaWNhdGVkIGVsZW1lbnQuXG5mdW5jdGlvbiBhc3NpbWlsYXRlRWxlbWVudChjb2xsZWN0aXZlLCBlbGVtZW50KSB7XG4gIGlmIChlbGVtZW50LmNvbGxlY3RpdmUgPT09IGNvbGxlY3RpdmUpIHtcbiAgICAvLyBBbHJlYWR5IHBhcnQgb2YgdGhpcyBjb2xsZWN0aXZlLlxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBlbGVtZW50LmNvbGxlY3RpdmUgPSBjb2xsZWN0aXZlO1xuICBjb2xsZWN0aXZlLmVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gIHJldHVybiB0cnVlO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IENvbGxlY3RpdmU7XG4iLCIvKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIENvbXBvc2FibGUuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB0byBtYWtlIGEgY2xhc3MgbW9yZSBlYXNpbHkgY29tcG9zYWJsZSB3aXRoIG90aGVyIG1peGlucy5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBjb250cmlidXRlcyBhIGBjb21wb3NlYCBtZXRob2QgdGhhdCBhcHBsaWVzIGEgc2V0IG9mIG1peGluXG4gICAqIGZ1bmN0aW9ucyBhbmQgcmV0dXJucyB0aGUgcmVzdWx0aW5nIG5ldyBjbGFzcy4gVGhpcyBzdWdhciBjYW4gbWFrZSB0aGVcbiAgICogYXBwbGljYXRpb24gb2YgbWFueSBtaXhpbnMgYXQgb25jZSBlYXNpZXIgdG8gcmVhZC5cbiAgICovXG4gIGNsYXNzIENvbXBvc2FibGUgZXh0ZW5kcyBiYXNlIHtcblxuICAgIC8qKlxuICAgICAqIEFwcGx5IGEgc2V0IG9mIG1peGluIGZ1bmN0aW9ucyBvciBtaXhpbiBvYmplY3RzIHRvIHRoZSBwcmVzZW50IGNsYXNzIGFuZFxuICAgICAqIHJldHVybiB0aGUgbmV3IGNsYXNzLlxuICAgICAqXG4gICAgICogSW5zdGVhZCBvZiB3cml0aW5nOlxuICAgICAqXG4gICAgICogICAgIGxldCBNeUNsYXNzID0gTWl4aW4xKE1peGluMihNaXhpbjMoTWl4aW40KE1peGluNShCYXNlQ2xhc3MpKSkpKTtcbiAgICAgKlxuICAgICAqIFlvdSBjYW4gd3JpdGU6XG4gICAgICpcbiAgICAgKiAgICAgbGV0IE15Q2xhc3MgPSBDb21wb3NhYmxlKEJhc2VDbGFzcykuY29tcG9zZShcbiAgICAgKiAgICAgICBNaXhpbjEsXG4gICAgICogICAgICAgTWl4aW4yLFxuICAgICAqICAgICAgIE1peGluMyxcbiAgICAgKiAgICAgICBNaXhpbjQsXG4gICAgICogICAgICAgTWl4aW41XG4gICAgICogICAgICk7XG4gICAgICpcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGNhbiBhbHNvIHRha2UgbWl4aW4gb2JqZWN0cy4gQSBtaXhpbiBvYmplY3QgaXMganVzdCBhXG4gICAgICogc2hvcnRoYW5kIGZvciBhIG1peGluIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBhIG5ldyBzdWJjbGFzcyB3aXRoIHRoZSBnaXZlblxuICAgICAqIG1lbWJlcnMuIFRoZSBtaXhpbiBvYmplY3QncyBtZW1iZXJzIGFyZSAqbm90KiBjb3BpZWQgZGlyZWN0bHkgb250byB0aGVcbiAgICAgKiBwcm90b3R5cGUgb2YgdGhlIGJhc2UgY2xhc3MsIGFzIHdpdGggdHJhZGl0aW9uYWwgbWl4aW5zLlxuICAgICAqXG4gICAgICogSW4gYWRkaXRpb24gdG8gcHJvdmlkaW5nIHN5bnRhY3RpYyBzdWdhciwgdGhpcyBtaXhpbiBjYW4gYmUgdXNlZCB0b1xuICAgICAqIGRlZmluZSBhIGNsYXNzIGluIEVTNSwgd2hpY2ggbGFja3MgRVM2J3MgYGNsYXNzYCBrZXl3b3JkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHsuLi5taXhpbnN9IG1peGlucyAtIEEgc2V0IG9mIG1peGluIGZ1bmN0aW9ucyBvciBvYmplY3RzIHRvIGFwcGx5LlxuICAgICAqL1xuICAgIHN0YXRpYyBjb21wb3NlKC4uLm1peGlucykge1xuICAgICAgLy8gV2UgY3JlYXRlIGEgbmV3IHN1YmNsYXNzIGZvciBlYWNoIG1peGluIGluIHR1cm4uIFRoZSByZXN1bHQgYmVjb21lc1xuICAgICAgLy8gdGhlIGJhc2UgY2xhc3MgZXh0ZW5kZWQgYnkgYW55IHN1YnNlcXVlbnQgbWl4aW5zLiBJdCB0dXJucyBvdXQgdGhhdFxuICAgICAgLy8gd2UgY2FuIHVzZSBBcnJheS5yZWR1Y2UoKSB0byBjb25jaXNlbHkgZXhwcmVzcyB0aGlzLCB1c2luZyB0aGUgY3VycmVudFxuICAgICAgLy8gb2JqZWN0IGFzIHRoZSBzZWVkIGZvciByZWR1Y2UoKS5cbiAgICAgIHJldHVybiBtaXhpbnMucmVkdWNlKGNvbXBvc2VDbGFzcywgdGhpcyk7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gQ29tcG9zYWJsZTtcbn07XG5cblxuLy8gUHJvcGVydGllcyBkZWZpbmVkIGJ5IE9iamVjdCB0aGF0IHdlIGRvbid0IHdhbnQgdG8gbWl4aW4uXG5jb25zdCBOT05fTUlYQUJMRV9PQkpFQ1RfUFJPUEVSVElFUyA9IFtcbiAgJ2NvbnN0cnVjdG9yJ1xuXTtcblxuLypcbiAqIEFwcGx5IHRoZSBtaXhpbiB0byB0aGUgZ2l2ZW4gYmFzZSBjbGFzcyB0byByZXR1cm4gYSBuZXcgY2xhc3MuXG4gKiBUaGUgbWl4aW4gY2FuIGVpdGhlciBiZSBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgbW9kaWZpZWQgY2xhc3MsIG9yIGFcbiAqIHBsYWluIG9iamVjdCB3aG9zZSBtZW1iZXJzIHdpbGwgYmUgY29waWVkIHRvIHRoZSBuZXcgY2xhc3MnIHByb3RvdHlwZS5cbiAqL1xuZnVuY3Rpb24gY29tcG9zZUNsYXNzKGJhc2UsIG1peGluKSB7XG4gIGlmICh0eXBlb2YgbWl4aW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBNaXhpbiBmdW5jdGlvblxuICAgIHJldHVybiBtaXhpbihiYXNlKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBNaXhpbiBvYmplY3RcbiAgICBjbGFzcyBTdWJjbGFzcyBleHRlbmRzIGJhc2Uge31cbiAgICBjb3B5T3duUHJvcGVydGllcyhtaXhpbiwgU3ViY2xhc3MucHJvdG90eXBlLCBOT05fTUlYQUJMRV9PQkpFQ1RfUFJPUEVSVElFUyk7XG4gICAgcmV0dXJuIFN1YmNsYXNzO1xuICB9XG59XG5cblxuLypcbiAqIENvcHkgdGhlIGdpdmVuIHByb3BlcnRpZXMvbWV0aG9kcyB0byB0aGUgdGFyZ2V0LlxuICogUmV0dXJuIHRoZSB1cGRhdGVkIHRhcmdldC5cbiAqL1xuZnVuY3Rpb24gY29weU93blByb3BlcnRpZXMoc291cmNlLCB0YXJnZXQsIGlnbm9yZVByb3BlcnR5TmFtZXMgPSBbXSkge1xuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2UpLmZvckVhY2gobmFtZSA9PiB7XG4gICAgaWYgKGlnbm9yZVByb3BlcnR5TmFtZXMuaW5kZXhPZihuYW1lKSA8IDApIHtcbiAgICAgIGxldCBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIG5hbWUpO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHRhcmdldDtcbn1cbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi9jcmVhdGVTeW1ib2wnO1xuaW1wb3J0IHRvZ2dsZUNsYXNzIGZyb20gJy4vdG9nZ2xlQ2xhc3MnO1xuXG5cbi8vIFN5bWJvbHMgZm9yIHByaXZhdGUgZGF0YSBtZW1iZXJzIG9uIGFuIGVsZW1lbnQuXG5jb25zdCBpdGVtc1N5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnaXRlbXMnKTtcbmNvbnN0IGl0ZW1Jbml0aWFsaXplZFN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnaXRlbUluaXRpYWxpemVkJyk7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBDb250ZW50QXNJdGVtcy4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIG1hcHMgY29udGVudCBzZW1hbnRpY3MgKGVsZW1lbnRzKSB0byBsaXN0IGl0ZW0gc2VtYW50aWNzLlxuICAgKlxuICAgKiBJdGVtcyBkaWZmZXIgZnJvbSBlbGVtZW50IGNvbnRlbnRzIGluIHNldmVyYWwgd2F5czpcbiAgICpcbiAgICogKiBUaGV5IGFyZSBvZnRlbiByZWZlcmVuY2VkIHZpYSBpbmRleC5cbiAgICogKiBUaGV5IG1heSBoYXZlIGEgc2VsZWN0aW9uIHN0YXRlLlxuICAgKiAqIEl0J3MgY29tbW9uIHRvIGRvIHdvcmsgdG8gaW5pdGlhbGl6ZSB0aGUgYXBwZWFyYW5jZSBvciBzdGF0ZSBvZiBhIG5ld1xuICAgKiAgIGl0ZW0uXG4gICAqICogQXV4aWxpYXJ5IGludmlzaWJsZSBjaGlsZCBlbGVtZW50cyBhcmUgZmlsdGVyZWQgb3V0IGFuZCBub3QgY291bnRlZCBhc1xuICAgKiAgIGl0ZW1zLiBBdXhpbGlhcnkgZWxlbWVudHMgaW5jbHVkZSBsaW5rLCBzY3JpcHQsIHN0eWxlLCBhbmQgdGVtcGxhdGVcbiAgICogICBlbGVtZW50cy4gVGhpcyBmaWx0ZXJpbmcgZW5zdXJlcyB0aGF0IHRob3NlIGF1eGlsaWFyeSBlbGVtZW50cyBjYW4gYmVcbiAgICogICB1c2VkIGluIG1hcmt1cCBpbnNpZGUgb2YgYSBsaXN0IHdpdGhvdXQgYmVpbmcgdHJlYXRlZCBhcyBsaXN0IGl0ZW1zLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGV4cGVjdHMgYSBjb21wb25lbnQgdG8gcHJvdmlkZSBhIGBjb250ZW50YCBwcm9wZXJ0eSByZXR1cm5pbmcgYVxuICAgKiByYXcgc2V0IG9mIGVsZW1lbnRzLiBZb3UgY2FuIHByb3ZpZGUgdGhhdCB5b3Vyc2VsZiwgb3IgdXNlIHRoZVxuICAgKiBbRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudF0oRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudC5tZCkgbWl4aW4uXG4gICAqXG4gICAqIFRoZSBtb3N0IGNvbW1vbmx5IHJlZmVyZW5jZWQgcHJvcGVydHkgZGVmaW5lZCBieSB0aGlzIG1peGluIGlzIHRoZSBgaXRlbXNgXG4gICAqIHByb3BlcnR5LiBUbyBhdm9pZCBoYXZpbmcgdG8gZG8gd29yayBlYWNoIHRpbWUgdGhhdCBwcm9wZXJ0eSBpcyByZXF1ZXN0ZWQsXG4gICAqIHRoaXMgbWl4aW4gc3VwcG9ydHMgYW4gb3B0aW1pemVkIG1vZGUuIElmIHlvdSBpbnZva2UgdGhlIGBjb250ZW50Q2hhbmdlZGBcbiAgICogbWV0aG9kIHdoZW4gdGhlIHNldCBvZiBpdGVtcyBjaGFuZ2VzLCB0aGUgbWl4aW4gY29uY2x1ZGVzIHRoYXQgeW91J2xsIHRha2VcbiAgICogY2FyZSBvZiBub3RpZnlpbmcgaXQgb2YgZnV0dXJlIGNoYW5nZXMsIGFuZCB0dXJucyBvbiB0aGUgb3B0aW1pemF0aW9uLiBXaXRoXG4gICAqIHRoYXQgb24sIHRoZSBtaXhpbiBzYXZlcyBhIHJlZmVyZW5jZSB0byB0aGUgY29tcHV0ZWQgc2V0IG9mIGl0ZW1zLCBhbmQgd2lsbFxuICAgKiByZXR1cm4gdGhhdCBpbW1lZGlhdGVseSBvbiBzdWJzZXF1ZW50IGNhbGxzIHRvIHRoZSBgaXRlbXNgIHByb3BlcnR5LiBJZiB5b3VcbiAgICogdXNlIHRoaXMgbWl4aW4gaW4gY29uanVuY3Rpb24gd2l0aCB0aGVcbiAgICogW0Rpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnRdKERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQubWQpIG1peGluLCB0aGVcbiAgICogYGNvbnRlbnRDaGFuZ2VkYCBtZXRob2Qgd2lsbCBiZSBpbnZva2VkIGZvciB5b3Ugd2hlbiB0aGUgZWxlbWVudCdzIGNoaWxkcmVuXG4gICAqIGNoYW5nZSwgdHVybmluZyBvbiB0aGUgb3B0aW1pemF0aW9uIGF1dG9tYXRpY2FsbHkuXG4gICAqL1xuICBjbGFzcyBDb250ZW50QXNJdGVtcyBleHRlbmRzIGJhc2Uge1xuXG4gICAgLyoqXG4gICAgICogQXBwbHkgdGhlIHNlbGVjdGlvbiBzdGF0ZSB0byBhIHNpbmdsZSBpdGVtLlxuICAgICAqXG4gICAgICogSW52b2tlIHRoaXMgbWV0aG9kIHRvIHNpZ25hbCB0aGF0IHRoZSBzZWxlY3RlZCBzdGF0ZSBvZiB0aGUgaW5kaWNhdGVkIGl0ZW1cbiAgICAgKiBoYXMgY2hhbmdlZC4gQnkgZGVmYXVsdCwgdGhpcyBhcHBsaWVzIGEgYHNlbGVjdGVkYCBDU1MgY2xhc3MgaWYgdGhlIGl0ZW1cbiAgICAgKiBpcyBzZWxlY3RlZCwgYW5kIHJlbW92ZWQgaXQgaWYgbm90IHNlbGVjdGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaXRlbSAtIFRoZSBpdGVtIHdob3NlIHNlbGVjdGlvbiBzdGF0ZSBoYXMgY2hhbmdlZC5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNlbGVjdGVkIC0gVHJ1ZSBpZiB0aGUgaXRlbSBpcyBzZWxlY3RlZCwgZmFsc2UgaWYgbm90LlxuICAgICAqL1xuICAgIGFwcGx5U2VsZWN0aW9uKGl0ZW0sIHNlbGVjdGVkKSB7XG4gICAgICBpZiAoc3VwZXIuYXBwbHlTZWxlY3Rpb24pIHsgc3VwZXIuYXBwbHlTZWxlY3Rpb24oaXRlbSwgc2VsZWN0ZWQpOyB9XG4gICAgICB0b2dnbGVDbGFzcyhpdGVtLCAnc2VsZWN0ZWQnLCBzZWxlY3RlZCk7XG4gICAgfVxuXG4gICAgY29udGVudENoYW5nZWQoKSB7XG4gICAgICBpZiAoc3VwZXIuY29udGVudENoYW5nZWQpIHsgc3VwZXIuY29udGVudENoYW5nZWQoKTsgfVxuXG4gICAgICAvLyBTaW5jZSB3ZSBnb3QgdGhlIGNvbnRlbnRDaGFuZ2VkIGNhbGwsIHdlJ2xsIGFzc3VtZSB3ZSdsbCBiZSBub3RpZmllZCBpZlxuICAgICAgLy8gdGhlIHNldCBvZiBpdGVtcyBjaGFuZ2VzIGxhdGVyLiBXZSB0dXJuIG9uIG1lbW9pemF0aW9uIG9mIHRoZSBpdGVtc1xuICAgICAgLy8gcHJvcGVydHkgYnkgc2V0dGluZyBvdXIgaW50ZXJuYWwgcHJvcGVydHkgdG8gbnVsbCAoaW5zdGVhZCBvZlxuICAgICAgLy8gdW5kZWZpbmVkKS5cbiAgICAgIHRoaXNbaXRlbXNTeW1ib2xdID0gbnVsbDtcblxuICAgICAgdGhpcy5pdGVtc0NoYW5nZWQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIHdoZW5ldmVyIGEgbmV3IGl0ZW0gaXMgYWRkZWQgdG8gdGhlIGxpc3QuXG4gICAgICpcbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuIFlvdSBjYW4gb3ZlcnJpZGVcbiAgICAgKiB0aGlzIHRvIHBlcmZvcm0gcGVyLWl0ZW0gaW5pdGlhbGl6YXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpdGVtIC0gVGhlIGl0ZW0gdGhhdCB3YXMgYWRkZWQuXG4gICAgICovXG4gICAgaXRlbUFkZGVkKGl0ZW0pIHtcbiAgICAgIGlmIChzdXBlci5pdGVtQWRkZWQpIHsgc3VwZXIuaXRlbUFkZGVkKGl0ZW0pOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgc2V0IG9mIGl0ZW1zIGluIHRoZSBsaXN0LiBTZWUgdGhlIHRvcC1sZXZlbCBkb2N1bWVudGF0aW9uIGZvclxuICAgICAqIG1peGluIGZvciBhIGRlc2NyaXB0aW9uIG9mIGhvdyBpdGVtcyBkaWZmZXIgZnJvbSBwbGFpbiBjb250ZW50LlxuICAgICAqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50W119XG4gICAgICovXG4gICAgZ2V0IGl0ZW1zKCkge1xuICAgICAgbGV0IGl0ZW1zO1xuICAgICAgaWYgKHRoaXNbaXRlbXNTeW1ib2xdID09IG51bGwpIHtcbiAgICAgICAgaXRlbXMgPSBmaWx0ZXJBdXhpbGlhcnlFbGVtZW50cyh0aGlzLmNvbnRlbnQpO1xuICAgICAgICAvLyBOb3RlOiB0ZXN0IGZvciAqZXF1YWxpdHkqIHdpdGggbnVsbDsgZG9uJ3QgdHJlYXQgdW5kZWZpbmVkIGFzIGEgbWF0Y2guXG4gICAgICAgIGlmICh0aGlzW2l0ZW1zU3ltYm9sXSA9PT0gbnVsbCkge1xuICAgICAgICAgIC8vIE1lbW9pemUgdGhlIHNldCBvZiBpdGVtcy5cbiAgICAgICAgICB0aGlzW2l0ZW1zU3ltYm9sXSA9IGl0ZW1zO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBSZXR1cm4gdGhlIG1lbW9pemVkIGl0ZW1zLlxuICAgICAgICBpdGVtcyA9IHRoaXNbaXRlbXNTeW1ib2xdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbiB0aGUgdW5kZXJseWluZyBjb250ZW50cyBjaGFuZ2UuIEl0IGlzIGFsc29cbiAgICAgKiBpbnZva2VkIG9uIGNvbXBvbmVudCBpbml0aWFsaXphdGlvbiDigJMgc2luY2UgdGhlIGl0ZW1zIGhhdmUgXCJjaGFuZ2VkXCIgZnJvbVxuICAgICAqIGJlaW5nIG5vdGhpbmcuXG4gICAgICovXG4gICAgaXRlbXNDaGFuZ2VkKCkge1xuICAgICAgaWYgKHN1cGVyLml0ZW1zQ2hhbmdlZCkgeyBzdXBlci5pdGVtc0NoYW5nZWQoKTsgfVxuXG4gICAgICAvLyBQZXJmb3JtIHBlci1pdGVtIGluaXRpYWxpemF0aW9uLlxuICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoIWl0ZW1baXRlbUluaXRpYWxpemVkU3ltYm9sXSkge1xuICAgICAgICAgIHRoaXMuaXRlbUFkZGVkKGl0ZW0pO1xuICAgICAgICAgIGl0ZW1baXRlbUluaXRpYWxpemVkU3ltYm9sXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdpdGVtcy1jaGFuZ2VkJykpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogQGV2ZW50IGl0ZW1zLWNoYW5nZWRcbiAgICAgKlxuICAgICAqIFRoaXMgZXZlbnQgaXMgcmFpc2VkIHdoZW4gdGhlIHNldCBvZiBpdGVtcyBjaGFuZ2VzLlxuICAgICAqL1xuICB9XG5cbiAgcmV0dXJuIENvbnRlbnRBc0l0ZW1zO1xufTtcblxuXG4vLyBSZXR1cm4gdGhlIGdpdmVuIGVsZW1lbnRzLCBmaWx0ZXJpbmcgb3V0IGF1eGlsaWFyeSBlbGVtZW50cyB0aGF0IGFyZW4ndFxuLy8gdHlwaWNhbGx5IHZpc2libGUuIEl0ZW1zIHdoaWNoIGFyZSBub3QgZWxlbWVudHMgYXJlIHJldHVybmVkIGFzIGlzLlxuZnVuY3Rpb24gZmlsdGVyQXV4aWxpYXJ5RWxlbWVudHMoaXRlbXMpIHtcbiAgbGV0IGF1eGlsaWFyeVRhZ3MgPSBbXG4gICAgJ2xpbmsnLFxuICAgICdzY3JpcHQnLFxuICAgICdzdHlsZScsXG4gICAgJ3RlbXBsYXRlJ1xuICBdO1xuICByZXR1cm4gW10uZmlsdGVyLmNhbGwoaXRlbXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICByZXR1cm4gIWl0ZW0ubG9jYWxOYW1lIHx8IGF1eGlsaWFyeVRhZ3MuaW5kZXhPZihpdGVtLmxvY2FsTmFtZSkgPCAwO1xuICB9KTtcbn1cblxuXG4vKipcbiAqIEZpcmVzIHdoZW4gdGhlIGl0ZW1zIGluIHRoZSBsaXN0IGNoYW5nZS5cbiAqXG4gKiBAbWVtYmVyb2YgQ29udGVudEFzSXRlbXNcbiAqIEBldmVudCBpdGVtcy1jaGFuZ2VkXG4gKi9cbiIsIi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggRGlzdHJpYnV0ZWRDaGlsZHJlbi4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIGRlZmluZXMgaGVscGVycyBmb3IgYWNjZXNzaW5nIGEgY29tcG9uZW50J3MgZGlzdHJpYnV0ZWRcbiAgICogY2hpbGRyZW4gYXMgYSBmbGF0dGVuZWQgYXJyYXkgb3Igc3RyaW5nLlxuICAgKlxuICAgKiBUaGUgc3RhbmRhcmQgRE9NIEFQSSBwcm92aWRlcyBzZXZlcmFsIHdheXMgb2YgYWNjZXNzaW5nIGNoaWxkIGNvbnRlbnQ6XG4gICAqIGBjaGlsZHJlbmAsIGBjaGlsZE5vZGVzYCwgYW5kIGB0ZXh0Q29udGVudGAuIE5vbmUgb2YgdGhlc2UgZnVuY3Rpb25zIGFyZVxuICAgKiBTaGFkb3cgRE9NIGF3YXJlLiBUaGlzIG1peGluIGRlZmluZXMgdmFyaWF0aW9ucyBvZiB0aG9zZSBmdW5jdGlvbnMgdGhhdFxuICAgKiAqYXJlKiBTaGFkb3cgRE9NIGF3YXJlLlxuICAgKlxuICAgKiBFeGFtcGxlOiB5b3UgY3JlYXRlIGEgY29tcG9uZW50IGA8Y291bnQtY2hpbGRyZW4+YCB0aGF0IGRpc3BsYXlzIGEgbnVtYmVyXG4gICAqIGVxdWFsIHRvIHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gcGxhY2VkIGluc2lkZSB0aGF0IGNvbXBvbmVudC4gSWYgc29tZW9uZVxuICAgKiBpbnN0YW50aWF0ZXMgeW91ciBjb21wb25lbnQgbGlrZTpcbiAgICpcbiAgICogICAgIDxjb3VudC1jaGlsZHJlbj5cbiAgICogICAgICAgPGRpdj48L2Rpdj5cbiAgICogICAgICAgPGRpdj48L2Rpdj5cbiAgICogICAgICAgPGRpdj48L2Rpdj5cbiAgICogICAgIDwvY291bnQtY2hpbGRyZW4+XG4gICAqXG4gICAqIFRoZW4gdGhlIGNvbXBvbmVudCBzaG91bGQgc2hvdyBcIjNcIiwgYmVjYXVzZSB0aGVyZSBhcmUgdGhyZWUgY2hpbGRyZW4uIFRvXG4gICAqIGNhbGN1bGF0ZSB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuLCB0aGUgY29tcG9uZW50IGNhbiBqdXN0IGNhbGN1bGF0ZVxuICAgKiBgdGhpcy5jaGlsZHJlbi5sZW5ndGhgLiBIb3dldmVyLCBzdXBwb3NlIHNvbWVvbmUgaW5zdGFudGlhdGVzIHlvdXJcbiAgICogY29tcG9uZW50IGluc2lkZSBvbmUgb2YgdGhlaXIgb3duIGNvbXBvbmVudHMsIGFuZCBwdXRzIGEgYDxzbG90PmAgZWxlbWVudFxuICAgKiBpbnNpZGUgeW91ciBjb21wb25lbnQ6XG4gICAqXG4gICAqICAgICA8Y291bnQtY2hpbGRyZW4+XG4gICAqICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICogICAgIDwvY291bnQtY2hpbGRyZW4+XG4gICAqXG4gICAqIElmIHlvdXIgY29tcG9uZW50IG9ubHkgbG9va3MgYXQgYHRoaXMuY2hpbGRyZW5gLCBpdCB3aWxsIGFsd2F5cyBzZWUgZXhhY3RseVxuICAgKiBvbmUgY2hpbGQg4oCUwqB0aGUgYDxzbG90PmAgZWxlbWVudC4gQnV0IHRoZSB1c2VyIGxvb2tpbmcgYXQgdGhlIHBhZ2Ugd2lsbFxuICAgKiAqc2VlKiBhbnkgbm9kZXMgZGlzdHJpYnV0ZWQgdG8gdGhhdCBzbG90LiBUbyBtYXRjaCB3aGF0IHRoZSB1c2VyIHNlZXMsIHlvdXJcbiAgICogY29tcG9uZW50IHNob3VsZCBleHBhbmQgYW55IGA8c2xvdD5gIGVsZW1lbnRzIGl0IGNvbnRhaW5zLlxuICAgKlxuICAgKiBUaGF0IGlzIHRoZSBwcm9ibGVtIHRoaXMgbWl4aW4gc29sdmVzLiBBZnRlciBhcHBseWluZyB0aGlzIG1peGluLCB5b3VyXG4gICAqIGNvbXBvbmVudCBjb2RlIGhhcyBhY2Nlc3MgdG8gYHRoaXMuZGlzdHJpYnV0ZWRDaGlsZHJlbmAsIHdob3NlIGBsZW5ndGhgXG4gICAqIHdpbGwgcmV0dXJuIHRoZSB0b3RhbCBudW1iZXIgb2YgYWxsIGNoaWxkcmVuIGRpc3RyaWJ1dGVkIHRvIHlvdXIgY29tcG9uZW50XG4gICAqIGluIHRoZSBjb21wb3NlZCB0cmVlLlxuICAgKlxuICAgKiBOb3RlOiBUaGUgbGF0ZXN0IEN1c3RvbSBFbGVtZW50cyBBUEkgZGVzaWduIGNhbGxzIGZvciBhIG5ldyBmdW5jdGlvbixcbiAgICogYGdldEFzc2lnbmVkTm9kZXNgIHRoYXQgdGFrZXMgYW4gb3B0aW9uYWwgYGRlZXBgIHBhcmFtZXRlciwgdGhhdCB3aWxsIHNvbHZlXG4gICAqIHRoaXMgcHJvYmxlbSBhdCB0aGUgQVBJIGxldmVsLlxuICAgKi9cbiAgY2xhc3MgRGlzdHJpYnV0ZWRDaGlsZHJlbiBleHRlbmRzIGJhc2Uge1xuXG4gICAgLyoqXG4gICAgICogQW4gaW4tb3JkZXIgY29sbGVjdGlvbiBvZiBkaXN0cmlidXRlZCBjaGlsZHJlbiwgZXhwYW5kaW5nIGFueSBzbG90XG4gICAgICogZWxlbWVudHMuIExpa2UgdGhlIHN0YW5kYXJkIGNoaWxkcmVuIHByb3BlcnR5LCB0aGlzIHNraXBzIHRleHQgbm9kZXMuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnRbXX1cbiAgICAgKi9cbiAgICBnZXQgZGlzdHJpYnV0ZWRDaGlsZHJlbigpIHtcbiAgICAgIHJldHVybiBleHBhbmRDb250ZW50RWxlbWVudHModGhpcy5jaGlsZHJlbiwgZmFsc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFuIGluLW9yZGVyIGNvbGxlY3Rpb24gb2YgZGlzdHJpYnV0ZWQgY2hpbGQgbm9kZXMsIGV4cGFuZGluZyBhbnkgc2xvdFxuICAgICAqIGVsZW1lbnRzLiBMaWtlIHRoZSBzdGFuZGFyZCBjaGlsZE5vZGVzIHByb3BlcnR5LCB0aGlzIGluY2x1ZGVzIHRleHRcbiAgICAgKiBub2Rlcy5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtOb2RlW119XG4gICAgICovXG4gICAgZ2V0IGRpc3RyaWJ1dGVkQ2hpbGROb2RlcygpIHtcbiAgICAgIHJldHVybiBleHBhbmRDb250ZW50RWxlbWVudHModGhpcy5jaGlsZE5vZGVzLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29uY2F0ZW5hdGVkIHRleHQgY29udGVudCBvZiBhbGwgZGlzdHJpYnV0ZWQgY2hpbGQgbm9kZXMsIGV4cGFuZGluZ1xuICAgICAqIGFueSBzbG90IGVsZW1lbnRzLlxuICAgICAqXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXQgZGlzdHJpYnV0ZWRUZXh0Q29udGVudCgpIHtcbiAgICAgIGxldCBzdHJpbmdzID0gdGhpcy5kaXN0cmlidXRlZENoaWxkTm9kZXMubWFwKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICAgIHJldHVybiBjaGlsZC50ZXh0Q29udGVudDtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHN0cmluZ3Muam9pbignJyk7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gRGlzdHJpYnV0ZWRDaGlsZHJlbjtcbn07XG5cblxuLypcbiAqIEdpdmVuIGEgYXJyYXkgb2Ygbm9kZXMsIHJldHVybiBhIG5ldyBhcnJheSB3aXRoIGFueSBjb250ZW50IGVsZW1lbnRzIGV4cGFuZGVkXG4gKiB0byB0aGUgbm9kZXMgZGlzdHJpYnV0ZWQgdG8gdGhhdCBjb250ZW50IGVsZW1lbnQuIFRoaXMgcnVsZSBpcyBhcHBsaWVkXG4gKiByZWN1cnNpdmVseS5cbiAqXG4gKiBJZiBpbmNsdWRlVGV4dE5vZGVzIGlzIHRydWUsIHRleHQgbm9kZXMgd2lsbCBiZSBpbmNsdWRlZCwgYXMgaW4gdGhlXG4gKiBzdGFuZGFyZCBjaGlsZE5vZGVzIHByb3BlcnR5OyBieSBkZWZhdWx0LCB0aGlzIHNraXBzIHRleHQgbm9kZXMsIGxpa2UgdGhlXG4gKiBzdGFuZGFyZCBjaGlsZHJlbiBwcm9wZXJ0eS5cbiAqL1xuZnVuY3Rpb24gZXhwYW5kQ29udGVudEVsZW1lbnRzKG5vZGVzLCBpbmNsdWRlVGV4dE5vZGVzKSB7XG4gIGxldCBleHBhbmRlZCA9IEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChub2Rlcywgbm9kZSA9PiB7XG4gICAgLy8gV2Ugd2FudCB0byBzZWUgaWYgdGhlIG5vZGUgaXMgYW4gaW5zdGFuY2VvZiBIVE1MU2xvdEVMZW1lbnQsIGJ1dFxuICAgIC8vIHRoYXQgY2xhc3Mgd29uJ3QgZXhpc3QgaWYgdGhlIGJyb3dzZXIgdGhhdCBkb2Vzbid0IHN1cHBvcnQgbmF0aXZlXG4gICAgLy8gU2hhZG93IERPTSBhbmQgaWYgdGhlIFNoYWRvdyBET00gcG9seWZpbGwgaGFzbid0IGJlZW4gbG9hZGVkLiBJbnN0ZWFkLFxuICAgIC8vIHdlIGRvIGEgc2ltcGxpc3RpYyBjaGVjayB0byBzZWUgaWYgdGhlIHRhZyBuYW1lIGlzIFwic2xvdFwiLlxuICAgIGxldCBpc1Nsb3QgPSB0eXBlb2YgSFRNTFNsb3RFbGVtZW50ICE9PSAndW5kZWZpbmVkJyA/XG4gICAgICBub2RlIGluc3RhbmNlb2YgSFRNTFNsb3RFbGVtZW50IDpcbiAgICAgIG5vZGUubG9jYWxOYW1lID09PSAnc2xvdCc7XG4gICAgaWYgKGlzU2xvdCkge1xuICAgICAgLy8gVXNlIHRoZSBub2RlcyBhc3NpZ25lZCB0byB0aGlzIG5vZGUgaW5zdGVhZC5cbiAgICAgIGxldCBhc3NpZ25lZE5vZGVzID0gbm9kZS5hc3NpZ25lZE5vZGVzKHsgZmxhdHRlbjogdHJ1ZSB9KTtcbiAgICAgIHJldHVybiBhc3NpZ25lZE5vZGVzID9cbiAgICAgICAgZXhwYW5kQ29udGVudEVsZW1lbnRzKGFzc2lnbmVkTm9kZXMsIGluY2x1ZGVUZXh0Tm9kZXMpIDpcbiAgICAgICAgW107XG4gICAgfSBlbHNlIGlmIChub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIC8vIFBsYWluIGVsZW1lbnQ7IHVzZSBhcyBpcy5cbiAgICAgIHJldHVybiBbbm9kZV07XG4gICAgfSBlbHNlIGlmIChub2RlIGluc3RhbmNlb2YgVGV4dCAmJiBpbmNsdWRlVGV4dE5vZGVzKSB7XG4gICAgICAvLyBUZXh0IG5vZGUuXG4gICAgICByZXR1cm4gW25vZGVdO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDb21tZW50LCBwcm9jZXNzaW5nIGluc3RydWN0aW9uLCBldGMuOyBza2lwLlxuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfSk7XG4gIGxldCBmbGF0dGVuZWQgPSBbXS5jb25jYXQoLi4uZXhwYW5kZWQpO1xuICByZXR1cm4gZmxhdHRlbmVkO1xufVxuIiwiaW1wb3J0IG1pY3JvdGFzayBmcm9tICcuL21pY3JvdGFzayc7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50LiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggZGVmaW5lcyBhIGNvbXBvbmVudCdzIGNvbnRlbnQgYXMgaXRzIGNoaWxkcmVuLCBleHBhbmRpbmcgYW55XG4gICAqIG5vZGVzIGRpc3RyaWJ1dGVkIHRvIHRoZSBjb21wb25lbnQncyBzbG90cy5cbiAgICpcbiAgICogVGhpcyBhbHNvIHByb3ZpZGVzIG5vdGlmaWNhdGlvbiBvZiBjaGFuZ2VzIHRvIGEgY29tcG9uZW50J3MgY29udGVudC4gSXRcbiAgICogd2lsbCBpbnZva2UgYSBgY29udGVudENoYW5nZWRgIG1ldGhvZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgZmlyc3RcbiAgICogaW5zdGFudGlhdGVkLCBhbmQgd2hlbmV2ZXIgaXRzIGRpc3RyaWJ1dGVkIGNoaWxkcmVuIGNoYW5nZS4gVGhpcyBpcyBhblxuICAgKiBlYXN5IHdheSB0byBzYXRpc2Z5IHRoZSBHb2xkIFN0YW5kYXJkIGNoZWNrbGlzdCBpdGVtIGZvciBtb25pdG9yaW5nXG4gICAqIFtDb250ZW50IENoYW5nZXNdKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJjb21wb25lbnRzL2dvbGQtc3RhbmRhcmQvd2lraS9Db250ZW50LUNoYW5nZXMpLlxuICAgKlxuICAgKiBFeGFtcGxlOlxuICAgKlxuICAgKiBgYGBcbiAgICogbGV0IGJhc2UgPSBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50KERpc3RyaWJ1dGVkQ2hpbGRyZW4oSFRNTEVsZW1lbnQpKTtcbiAgICogY2xhc3MgQ291bnRpbmdFbGVtZW50IGV4dGVuZHMgYmFzZSB7XG4gICAqXG4gICAqICAgY29uc3RydWN0b3IoKSB7XG4gICAqICAgICBzdXBlcigpO1xuICAgKiAgICAgbGV0IHJvb3QgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcbiAgICogICAgIHJvb3QuaW5uZXJIVE1MID0gYDxzbG90Pjwvc2xvdD5gO1xuICAgKiAgIH1cbiAgICpcbiAgICogICBjb250ZW50Q2hhbmdlZCgpIHtcbiAgICogICAgIC8vIENvdW50IHRoZSBjb21wb25lbnQncyBjaGlsZHJlbiwgYm90aCBpbml0aWFsbHkgYW5kIHdoZW4gY2hhbmdlZC5cbiAgICogICAgIHRoaXMuY291bnQgPSB0aGlzLmRpc3RyaWJ1dGVkQ2hpbGRyZW4ubGVuZ3RoO1xuICAgKiAgIH1cbiAgICpcbiAgICogfVxuICAgKiBgYGBcbiAgICpcbiAgICogVGhpcyBtaXhpbiBpcyBpbnRlbmRlZCBmb3IgdXNlIHdpdGggdGhlXG4gICAqIFtEaXN0cmlidXRlZENoaWxkcmVuXShEaXN0cmlidXRlZENoaWxkcmVuLm1kKSBtaXhpbi4gU2VlIHRoYXQgbWl4aW4gZm9yIGFcbiAgICogZGlzY3Vzc2lvbiBvZiBob3cgdGhhdCB3b3Jrcy4gVGhpcyBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50IG1peGluXG4gICAqIHByb3ZpZGVzIGFuIGVhc3kgd2F5IG9mIGRlZmluaW5nIHRoZSBcImNvbnRlbnRcIiBvZiBhIGNvbXBvbmVudCBhcyB0aGVcbiAgICogY29tcG9uZW50J3MgZGlzdHJpYnV0ZWQgY2hpbGRyZW4uIFRoYXQgaW4gdHVybiBsZXRzIG1peGlucyBsaWtlXG4gICAqIFtDb250ZW50QXNJdGVtc10oQ29udGVudEFzSXRlbXMubWQpIG1hbmlwdWxhdGUgdGhlIGNoaWxkcmVuIGFzIGxpc3QgaXRlbXMuXG4gICAqL1xuICBjbGFzcyBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50IGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG5cbiAgICAgIGlmICh0aGlzLnNoYWRvd1Jvb3QpIHtcbiAgICAgICAgLy8gTGlzdGVuIHRvIGNoYW5nZXMgb24gYWxsIHNsb3RzLlxuICAgICAgICBsZXQgc2xvdHMgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvckFsbCgnc2xvdCcpO1xuICAgICAgICBzbG90cy5mb3JFYWNoKHNsb3QgPT4gc2xvdC5hZGRFdmVudExpc3RlbmVyKCdzbG90Y2hhbmdlJywgZXZlbnQgPT4ge1xuICAgICAgICAgIHRoaXMuY29udGVudENoYW5nZWQoKTtcbiAgICAgICAgfSkpO1xuICAgICAgfVxuXG4gICAgICAvLyBNYWtlIGFuIGluaXRpYWwgY2FsbCB0byBjb250ZW50Q2hhbmdlZCgpIHNvIHRoYXQgdGhlIGNvbXBvbmVudCBjYW4gZG9cbiAgICAgIC8vIGluaXRpYWxpemF0aW9uIHRoYXQgaXQgbm9ybWFsbHkgZG9lcyB3aGVuIGNvbnRlbnQgY2hhbmdlcy5cbiAgICAgIC8vXG4gICAgICAvLyBUaGlzIHdpbGwgaW52b2tlIGNvbnRlbnRDaGFuZ2VkKCkgaGFuZGxlcnMgaW4gb3RoZXIgbWl4aW5zLiBJbiBvcmRlclxuICAgICAgLy8gdGhhdCB0aG9zZSBtaXhpbnMgaGF2ZSBhIGNoYW5jZSB0byBjb21wbGV0ZSB0aGVpciBvd24gaW5pdGlhbGl6YXRpb24sXG4gICAgICAvLyB3ZSBhZGQgdGhlIGNvbnRlbnRDaGFuZ2VkKCkgY2FsbCB0byB0aGUgbWljcm90YXNrIHF1ZXVlLlxuICAgICAgbWljcm90YXNrKCgpID0+IHRoaXMuY29udGVudENoYW5nZWQoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSBjb250ZW50cyBvZiB0aGUgY29tcG9uZW50IChpbmNsdWRpbmcgZGlzdHJpYnV0ZWRcbiAgICAgKiBjaGlsZHJlbikgaGF2ZSBjaGFuZ2VkLlxuICAgICAqXG4gICAgICogVGhpcyBtZXRob2QgaXMgYWxzbyBpbnZva2VkIHdoZW4gYSBjb21wb25lbnQgaXMgZmlyc3QgaW5zdGFudGlhdGVkOyB0aGVcbiAgICAgKiBjb250ZW50cyBoYXZlIGVzc2VudGlhbGx5IFwiY2hhbmdlZFwiIGZyb20gYmVpbmcgbm90aGluZy4gVGhpcyBhbGxvd3MgdGhlXG4gICAgICogY29tcG9uZW50IHRvIHBlcmZvcm0gaW5pdGlhbCBwcm9jZXNzaW5nIG9mIGl0cyBjaGlsZHJlbi5cbiAgICAgKi9cbiAgICBjb250ZW50Q2hhbmdlZCgpIHtcbiAgICAgIGlmIChzdXBlci5jb250ZW50Q2hhbmdlZCkgeyBzdXBlci5jb250ZW50Q2hhbmdlZCgpOyB9XG4gICAgICBsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2NvbnRlbnQtY2hhbmdlZCcpO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29udGVudCBvZiB0aGlzIGNvbXBvbmVudCwgZGVmaW5lZCB0byBiZSB0aGUgZmxhdHRlbmVkIGFycmF5IG9mXG4gICAgICogY2hpbGRyZW4gZGlzdHJpYnV0ZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudFtdfVxuICAgICAqL1xuICAgIGdldCBjb250ZW50KCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGlzdHJpYnV0ZWRDaGlsZHJlbjtcbiAgICB9XG4gICAgc2V0IGNvbnRlbnQodmFsdWUpIHtcbiAgICAgIGlmICgnY29udGVudCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuY29udGVudCA9IHZhbHVlOyB9XG4gICAgICAvLyBUT0RPOiBTZXQgdGhlIGNoaWxkcmVuIHRvIHRoZSBnaXZlbiB2YWx1ZSAod2hpY2ggc2hvdWxkIGJlIGFuIGFycmF5IG9mXG4gICAgICAvLyBlbGVtZW50cyk/XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBldmVudCBpcyByYWlzZWQgd2hlbiB0aGUgY29tcG9uZW50J3MgY29udGVudHMgKGluY2x1ZGluZyBkaXN0cmlidXRlZFxuICAgICAqIGNoaWxkcmVuKSBoYXZlIGNoYW5nZWQuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudFxuICAgICAqIEBldmVudCBjb250ZW50LWNoYW5nZWRcbiAgICAgKi9cbiAgfVxuXG4gIHJldHVybiBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50O1xufTtcbiIsIi8vIFVzZWQgdG8gYXNzaWduIHVuaXF1ZSBJRHMgdG8gaXRlbSBlbGVtZW50cyB3aXRob3V0IElEcy5cbmxldCBpZENvdW50ID0gMDtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFNlbGVjdGlvbkFyaWFBY3RpdmUuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCB0cmVhdHMgdGhlIHNlbGVjdGVkIGl0ZW0gaW4gYSBsaXN0IGFzIHRoZSBhY3RpdmUgaXRlbSBpbiBBUklBXG4gICAqIGFjY2Vzc2liaWxpdHkgdGVybXMuXG4gICAqXG4gICAqIEhhbmRsaW5nIEFSSUEgc2VsZWN0aW9uIHN0YXRlIHByb3Blcmx5IGlzIGFjdHVhbGx5IHF1aXRlIGNvbXBsZXg6XG4gICAqXG4gICAqICogVGhlIGl0ZW1zIGluIHRoZSBsaXN0IG5lZWQgdG8gYmUgaW5kaWNhdGVkIGFzIHBvc3NpYmxlIGl0ZW1zIHZpYSBhbiBBUklBXG4gICAqICAgYHJvbGVgIGF0dHJpYnV0ZSB2YWx1ZSBzdWNoIGFzIFwib3B0aW9uXCIuXG4gICAqICogVGhlIHNlbGVjdGVkIGl0ZW0gbmVlZCB0byBiZSBtYXJrZWQgYXMgc2VsZWN0ZWQgYnkgc2V0dGluZyB0aGUgaXRlbSdzXG4gICAqICAgYGFyaWEtc2VsZWN0ZWRgIGF0dHJpYnV0ZSB0byB0cnVlICphbmQqIHRoZSBvdGhlciBpdGVtcyBuZWVkIGJlIG1hcmtlZCBhc1xuICAgKiAgICpub3QqIHNlbGVjdGVkIGJ5IHNldHRpbmcgYGFyaWEtc2VsZWN0ZWRgIHRvIGZhbHNlLlxuICAgKiAqIFRoZSBvdXRlcm1vc3QgZWxlbWVudCB3aXRoIHRoZSBrZXlib2FyZCBmb2N1cyBuZWVkcyB0byBoYXZlIGF0dHJpYnV0ZXNcbiAgICogICBzZXQgb24gaXQgc28gdGhhdCB0aGUgc2VsZWN0aW9uIGlzIGtub3dhYmxlIGF0IHRoZSBsaXN0IGxldmVsIHZpYSB0aGVcbiAgICogICBgYXJpYS1hY3RpdmVkZXNjZW5kYW50YCBhdHRyaWJ1dGUuXG4gICAqICogVXNlIG9mIGBhcmlhLWFjdGl2ZWRlc2NlbmRhbnRgIGluIHR1cm4gcmVxdWlyZXMgdGhhdCBhbGwgaXRlbXMgaW4gdGhlXG4gICAqICAgbGlzdCBoYXZlIElEIGF0dHJpYnV0ZXMgYXNzaWduZWQgdG8gdGhlbS5cbiAgICpcbiAgICogVGhpcyBtaXhpbiB0cmllcyB0byBhZGRyZXNzIGFsbCBvZiB0aGUgYWJvdmUgcmVxdWlyZW1lbnRzLiBUbyB0aGF0IGVuZCxcbiAgICogdGhpcyBtaXhpbiB3aWxsIGFzc2lnbiBnZW5lcmF0ZWQgSURzIHRvIGFueSBpdGVtIHRoYXQgZG9lc24ndCBhbHJlYWR5IGhhdmVcbiAgICogYW4gSUQuXG4gICAqXG4gICAqIEFSSUEgcmVsaWVzIG9uIGVsZW1lbnRzIHRvIHByb3ZpZGUgYHJvbGVgIGF0dHJpYnV0ZXMuIFRoaXMgbWl4aW4gd2lsbCBhcHBseVxuICAgKiBhIGRlZmF1bHQgcm9sZSBvZiBcImxpc3Rib3hcIiBvbiB0aGUgb3V0ZXIgbGlzdCBpZiBpdCBkb2Vzbid0IGFscmVhZHkgaGF2ZSBhblxuICAgKiBleHBsaWNpdCByb2xlLiBTaW1pbGFybHksIHRoaXMgbWl4aW4gd2lsbCBhcHBseSBhIGRlZmF1bHQgcm9sZSBvZiBcIm9wdGlvblwiXG4gICAqIHRvIGFueSBsaXN0IGl0ZW0gdGhhdCBkb2VzIG5vdCBhbHJlYWR5IGhhdmUgYSByb2xlIHNwZWNpZmllZC5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIGEgc2V0IG9mIG1lbWJlcnMgdGhhdCBtYW5hZ2UgdGhlIHN0YXRlIG9mIHRoZSBzZWxlY3Rpb246XG4gICAqIGBhcHBseVNlbGVjdGlvbmAsIGBpdGVtQWRkZWRgLCBhbmQgYHNlbGVjdGVkSW5kZXhgLiBZb3UgY2FuIHN1cHBseSB0aGVzZVxuICAgKiB5b3Vyc2VsZiwgb3IgZG8gc28gdmlhIHRoZSBbU2luZ2xlU2VsZWN0aW9uXShTaW5nbGVTZWxlY3Rpb24ubWQpIG1peGluLlxuICAgKi9cbiAgY2xhc3MgU2VsZWN0aW9uQXJpYUFjdGl2ZSBleHRlbmRzIGJhc2Uge1xuXG4gICAgYXBwbHlTZWxlY3Rpb24oaXRlbSwgc2VsZWN0ZWQpIHtcbiAgICAgIGlmIChzdXBlci5hcHBseVNlbGVjdGlvbikgeyBzdXBlci5hcHBseVNlbGVjdGlvbihpdGVtLCBzZWxlY3RlZCk7IH1cbiAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgc2VsZWN0ZWQpO1xuICAgICAgbGV0IGl0ZW1JZCA9IGl0ZW0uaWQ7XG4gICAgICBpZiAoaXRlbUlkKSB7XG4gICAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICAgIG91dGVybW9zdEVsZW1lbnQodGhpcykuc2V0QXR0cmlidXRlKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnLCBpdGVtSWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29sbGVjdGl2ZUNoYW5nZWQoKSB7XG4gICAgICBpZiAoc3VwZXIuY29sbGVjdGl2ZUNoYW5nZWQpIHsgc3VwZXIuY29sbGVjdGl2ZUNoYW5nZWQoKTsgfVxuICAgICAgc2V0QXJpYUF0dHJpYnV0ZXModGhpcyk7XG4gICAgfVxuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2spIHsgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTsgfVxuICAgICAgc2V0QXJpYUF0dHJpYnV0ZXModGhpcyk7XG4gICAgfVxuXG4gICAgaXRlbUFkZGVkKGl0ZW0pIHtcbiAgICAgIGlmIChzdXBlci5pdGVtQWRkZWQpIHsgc3VwZXIuaXRlbUFkZGVkKGl0ZW0pOyB9XG5cbiAgICAgIGlmICghaXRlbS5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSkge1xuICAgICAgICAvLyBBc3NpZ24gYSBkZWZhdWx0IEFSSUEgcm9sZS5cbiAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnb3B0aW9uJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIEVuc3VyZSBlYWNoIGl0ZW0gaGFzIGFuIElEIHNvIHdlIGNhbiBzZXQgYXJpYS1hY3RpdmVkZXNjZW5kYW50IG9uIHRoZVxuICAgICAgLy8gb3ZlcmFsbCBsaXN0IHdoZW5ldmVyIHRoZSBzZWxlY3Rpb24gY2hhbmdlcy5cbiAgICAgIC8vXG4gICAgICAvLyBUaGUgSUQgd2lsbCB0YWtlIHRoZSBmb3JtIG9mIGEgYmFzZSBJRCBwbHVzIGEgdW5pcXVlIGludGVnZXIuIFRoZSBiYXNlXG4gICAgICAvLyBJRCB3aWxsIGJlIGluY29ycG9yYXRlIHRoZSBjb21wb25lbnQncyBvd24gSUQuIEUuZy4sIGlmIGEgY29tcG9uZW50IGhhc1xuICAgICAgLy8gSUQgXCJmb29cIiwgdGhlbiBpdHMgaXRlbXMgd2lsbCBoYXZlIElEcyB0aGF0IGxvb2sgbGlrZSBcIl9mb29PcHRpb24xXCIuIElmXG4gICAgICAvLyB0aGUgY29tcG5lbnQgaGFzIG5vIElEIGl0c2VsZiwgaXRzIGl0ZW1zIHdpbGwgZ2V0IElEcyB0aGF0IGxvb2sgbGlrZVxuICAgICAgLy8gXCJfb3B0aW9uMVwiLiBJdGVtIElEcyBhcmUgcHJlZml4ZWQgd2l0aCBhbiB1bmRlcnNjb3JlIHRvIGRpZmZlcmVudGlhdGVcbiAgICAgIC8vIHRoZW0gZnJvbSBtYW51YWxseS1hc3NpZ25lZCBJRHMsIGFuZCB0byBtaW5pbWl6ZSB0aGUgcG90ZW50aWFsIGZvciBJRFxuICAgICAgLy8gY29uZmxpY3RzLlxuICAgICAgaWYgKCFpdGVtLmlkKSB7XG4gICAgICAgIGxldCBiYXNlSWQgPSB0aGlzLmlkID9cbiAgICAgICAgICAgIFwiX1wiICsgdGhpcy5pZCArIFwiT3B0aW9uXCIgOlxuICAgICAgICAgICAgXCJfb3B0aW9uXCI7XG4gICAgICAgIGl0ZW0uaWQgPSBiYXNlSWQgKyBpZENvdW50Kys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdGVkSXRlbSgpIHtcbiAgICAgIHJldHVybiBzdXBlci5zZWxlY3RlZEl0ZW07XG4gICAgfVxuICAgIHNldCBzZWxlY3RlZEl0ZW0oaXRlbSkge1xuICAgICAgaWYgKCdzZWxlY3RlZEl0ZW0nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkSXRlbSA9IGl0ZW07IH1cbiAgICAgIC8vIENhdGNoIHRoZSBjYXNlIHdoZXJlIHRoZSBzZWxlY3Rpb24gaXMgcmVtb3ZlZC5cbiAgICAgIGlmIChpdGVtID09IG51bGwpIHtcbiAgICAgICAgb3V0ZXJtb3N0RWxlbWVudCh0aGlzKS5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIFNlbGVjdGlvbkFyaWFBY3RpdmU7XG59O1xuXG5cbi8vIFJldHVybiB0aGUgZmlyc3QgQVJJQSBhY3RpdmVkZXNjZW5kYW50IGRlZmluZWQgYnkgdGhlIGNvbGxlY3RpdmUuXG5mdW5jdGlvbiBnZXRDb2xsZWN0aXZlQXJpYUFjdGl2ZURlc2NlbmRhbnQoY29sbGVjdGl2ZSkge1xuICBsZXQgZGVzY2VuZGFudHMgPSBjb2xsZWN0aXZlLmVsZW1lbnRzLm1hcChlbGVtZW50ID0+IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnKSk7XG4gIGxldCBub25OdWxsRGVzY2VuZGFudHMgPSBkZXNjZW5kYW50cy5maWx0ZXIoZGVzY2VuZGFudCA9PiBkZXNjZW5kYW50ICE9PSBudWxsKTtcbiAgcmV0dXJuIG5vbk51bGxEZXNjZW5kYW50c1swXTtcbn1cblxuXG4vLyBSZXR1cm4gdGhlIGZpcnN0IEFSSUEgbGFiZWwgZGVmaW5lZCBieSB0aGUgY29sbGVjdGl2ZS5cbmZ1bmN0aW9uIGdldENvbGxlY3RpdmVBcmlhUm9sZShjb2xsZWN0aXZlKSB7XG4gIGxldCByb2xlcyA9IGNvbGxlY3RpdmUuZWxlbWVudHMubWFwKGVsZW1lbnQgPT4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSk7XG4gIGxldCBub25OdWxsUm9sZXMgPSByb2xlcy5maWx0ZXIocm9sZSA9PiByb2xlICE9PSBudWxsKTtcbiAgcmV0dXJuIG5vbk51bGxSb2xlc1swXTtcbn1cblxuZnVuY3Rpb24gb3V0ZXJtb3N0RWxlbWVudChlbGVtZW50KSB7XG4gIHJldHVybiBlbGVtZW50LmNvbGxlY3RpdmUgP1xuICAgIGVsZW1lbnQuY29sbGVjdGl2ZS5vdXRlcm1vc3RFbGVtZW50IDpcbiAgICBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBzZXRBcmlhQXR0cmlidXRlcyhlbGVtZW50KSB7XG5cbiAgaWYgKCFlbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICByZXR1cm47IC8vIE5vdCBpbiBkb2N1bWVudCB5ZXRcbiAgfVxuICBpZiAoZWxlbWVudC5jb2xsZWN0aXZlICYmIGVsZW1lbnQgIT09IGVsZW1lbnQuY29sbGVjdGl2ZS5vdXRlcm1vc3RFbGVtZW50KSB7XG4gICAgLy8gTm90IHRoZSBvdXRlcm1vc3QgZWxlbWVudCwgZG8gbm90aGluZyBhbmQgbGV0IHRoZSBvdXRlcm1vc3QgZWxlbWVudFxuICAgIC8vIGhhbmRsZSB0aGluZ3MuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRW5zdXJlIHRoZSBlbGVtZW50IGhhcyBhbiBBUklBIHJvbGUuXG4gIGlmICghZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSkge1xuICAgIC8vIFRyeSB0byBwcm9tb3RlIGFuIEFSSUEgcm9sZSBmcm9tIGFuIGlubmVyIGVsZW1lbnQuIElmIG5vbmUgaXMgZm91bmQsXG4gICAgLy8gdXNlIGEgZGVmYXVsdCByb2xlLlxuICAgIGxldCByb2xlID0gZWxlbWVudC5jb2xsZWN0aXZlICYmIGdldENvbGxlY3RpdmVBcmlhUm9sZShlbGVtZW50LmNvbGxlY3RpdmUpO1xuICAgIHJvbGUgPSByb2xlIHx8ICdsaXN0Ym94JztcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgncm9sZScsIHJvbGUpO1xuICB9XG5cbiAgaWYgKCFlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1hY3RpdmVkZXNjZW5kYW50JykgJiYgZWxlbWVudC5jb2xsZWN0aXZlKSB7XG4gICAgLy8gVHJ5IHRvIHByb21vdGUgYW4gQVJJQSBhY3RpdmVkZXNjZW5kYW50IHZhbHVlIGZyb20gYW4gaW5uZXIgZWxlbWVudC5cbiAgICBsZXQgZGVzY2VuZGFudCA9IGdldENvbGxlY3RpdmVBcmlhQWN0aXZlRGVzY2VuZGFudChlbGVtZW50LmNvbGxlY3RpdmUpO1xuICAgIGlmIChkZXNjZW5kYW50KSB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1hY3RpdmVkZXNjZW5kYW50JywgZGVzY2VuZGFudCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVsZW1lbnQuY29sbGVjdGl2ZSkge1xuICAgIC8vIFJlbW92ZSB0aGUgQVJJQSByb2xlIGFuZCBhY3RpdmVkZXNjZW5kYW50IHZhbHVlcyBmcm9tIHRoZSBjb2xsZWN0aXZlJ3NcbiAgICAvLyBpbm5lciBlbGVtZW50cy5cbiAgICBlbGVtZW50LmNvbGxlY3RpdmUuZWxlbWVudHMuZm9yRWFjaChtZW1iZXIgPT4ge1xuICAgICAgaWYgKG1lbWJlciAhPT0gZWxlbWVudCkge1xuICAgICAgICBtZW1iZXIucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnKTtcbiAgICAgICAgbWVtYmVyLnNldEF0dHJpYnV0ZSgncm9sZScsICdub25lJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxufVxuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBTaGFkb3dFbGVtZW50UmVmZXJlbmNlcy4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHRvIGNyZWF0ZSByZWZlcmVuY2VzIHRvIGVsZW1lbnRzIGluIGEgY29tcG9uZW50J3MgU2hhZG93IERPTSBzdWJ0cmVlLlxuICAgKlxuICAgKiBUaGlzIGFkZHMgYSBtZW1iZXIgb24gdGhlIGNvbXBvbmVudCBjYWxsZWQgYHRoaXMuJGAgdGhhdCBjYW4gYmUgdXNlZCB0b1xuICAgKiByZWZlcmVuY2Ugc2hhZG93IGVsZW1lbnRzIHdpdGggSURzLiBFLmcuLCBpZiBjb21wb25lbnQncyBzaGFkb3cgY29udGFpbnMgYW5cbiAgICogZWxlbWVudCBgPGJ1dHRvbiBpZD1cImZvb1wiPmAsIHRoZW4gdGhpcyBtaXhpbiB3aWxsIGNyZWF0ZSBhIG1lbWJlclxuICAgKiBgdGhpcy4kLmZvb2AgdGhhdCBwb2ludHMgdG8gdGhhdCBidXR0b24uXG4gICAqXG4gICAqIFN1Y2ggcmVmZXJlbmNlcyBzaW1wbGlmeSBhIGNvbXBvbmVudCdzIGFjY2VzcyB0byBpdHMgb3duIGVsZW1lbnRzLiBJblxuICAgKiBleGNoYW5nZSwgdGhpcyBtaXhpbiB0cmFkZXMgb2ZmIGEgb25lLXRpbWUgY29zdCBvZiBxdWVyeWluZyBhbGwgZWxlbWVudHMgaW5cbiAgICogdGhlIHNoYWRvdyB0cmVlIGluc3RlYWQgb2YgcGF5aW5nIGFuIG9uZ29pbmcgY29zdCB0byBxdWVyeSBmb3IgYW4gZWxlbWVudFxuICAgKiBlYWNoIHRpbWUgdGhlIGNvbXBvbmVudCB3YW50cyB0byBpbnNwZWN0IG9yIG1hbmlwdWxhdGUgaXQuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyB0aGUgY29tcG9uZW50IHRvIGRlZmluZSBhIFNoYWRvdyBET00gc3VidHJlZS4gWW91IGNhblxuICAgKiBjcmVhdGUgdGhhdCB0cmVlIHlvdXJzZWxmLCBvciBtYWtlIHVzZSBvZiB0aGVcbiAgICogW1NoYWRvd1RlbXBsYXRlXShTaGFkb3dUZW1wbGF0ZS5tZCkgbWl4aW4uXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gaXMgaW5zcGlyZWQgYnkgUG9seW1lcidzIFthdXRvbWF0aWNcbiAgICogbm9kZSBmaW5kaW5nXShodHRwczovL3d3dy5wb2x5bWVyLXByb2plY3Qub3JnLzEuMC9kb2NzL2Rldmd1aWRlL2xvY2FsLWRvbS5odG1sI25vZGUtZmluZGluZylcbiAgICogZmVhdHVyZS5cbiAgICovXG4gIGNsYXNzIFNoYWRvd0VsZW1lbnRSZWZlcmVuY2VzIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICBpZiAodGhpcy5zaGFkb3dSb290KSB7XG4gICAgICAgIC8vIExvb2sgZm9yIGVsZW1lbnRzIGluIHRoZSBzaGFkb3cgc3VidHJlZSB0aGF0IGhhdmUgaWQgYXR0cmlidXRlcy5cbiAgICAgICAgLy8gQW4gYWx0ZXJuYXRpdmVseSBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1peGluIHdvdWxkIGJlIHRvIGp1c3QgZGVmaW5lXG4gICAgICAgIC8vIGEgdGhpcy4kIGdldHRlciB0aGF0IGxhemlseSBkb2VzIHRoaXMgc2VhcmNoIHRoZSBmaXJzdCB0aW1lIHNvbWVvbmVcbiAgICAgICAgLy8gdHJpZXMgdG8gYWNjZXNzIHRoaXMuJC4gVGhhdCBtaWdodCBpbnRyb2R1Y2Ugc29tZSBjb21wbGV4aXR5IOKAkyBpZiB0aGVcbiAgICAgICAgLy8gdGhlIHRyZWUgY2hhbmdlZCBhZnRlciBpdCB3YXMgZmlyc3QgcG9wdWxhdGVkLCB0aGUgcmVzdWx0IG9mXG4gICAgICAgIC8vIHNlYXJjaGluZyBmb3IgYSBub2RlIG1pZ2h0IGJlIHNvbWV3aGF0IHVucHJlZGljdGFibGUuXG4gICAgICAgIHRoaXMuJCA9IHt9O1xuICAgICAgICBsZXQgbm9kZXNXaXRoSWRzID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpZF0nKTtcbiAgICAgICAgW10uZm9yRWFjaC5jYWxsKG5vZGVzV2l0aElkcywgbm9kZSA9PiB7XG4gICAgICAgICAgbGV0IGlkID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICAgICAgdGhpcy4kW2lkXSA9IG5vZGU7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBjb2xsZWN0aW9uIG9mIHJlZmVyZW5jZXMgdG8gdGhlIGVsZW1lbnRzIHdpdGggSURzIGluIGEgY29tcG9uZW50J3NcbiAgICAgKiBTaGFkb3cgRE9NIHN1YnRyZWUuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqIEBtZW1iZXIgJFxuICAgICAqL1xuICB9XG5cbiAgcmV0dXJuIFNoYWRvd0VsZW1lbnRSZWZlcmVuY2VzO1xufTtcbiIsIi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggU2hhZG93VGVtcGxhdGUuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiBmb3Igc3RhbXBpbmcgYSB0ZW1wbGF0ZSBpbnRvIGEgU2hhZG93IERPTSBzdWJ0cmVlIHVwb24gY29tcG9uZW50XG4gICAqIGluc3RhbnRpYXRpb24uXG4gICAqXG4gICAqIFRvIHVzZSB0aGlzIG1peGluLCBkZWZpbmUgYSBgdGVtcGxhdGVgIHByb3BlcnR5IGFzIGEgc3RyaW5nIG9yIEhUTUxcbiAgICogYDx0ZW1wbGF0ZT5gIGVsZW1lbnQ6XG4gICAqXG4gICAqICAgICBjbGFzcyBNeUVsZW1lbnQgZXh0ZW5kcyBTaGFkb3dUZW1wbGF0ZShIVE1MRWxlbWVudCkge1xuICAgKiAgICAgICBnZXQgdGVtcGxhdGUoKSB7XG4gICAqICAgICAgICAgcmV0dXJuIGBIZWxsbywgPGVtPndvcmxkPC9lbT4uYDtcbiAgICogICAgICAgfVxuICAgKiAgICAgfVxuICAgKlxuICAgKiBXaGVuIHlvdXIgY29tcG9uZW50IGNsYXNzIGlzIGluc3RhbnRpYXRlZCwgYSBzaGFkb3cgcm9vdCB3aWxsIGJlIGNyZWF0ZWQgb25cbiAgICogdGhlIGluc3RhbmNlLCBhbmQgdGhlIGNvbnRlbnRzIG9mIHRoZSB0ZW1wbGF0ZSB3aWxsIGJlIGNsb25lZCBpbnRvIHRoZVxuICAgKiBzaGFkb3cgcm9vdC4gSWYgeW91ciBjb21wb25lbnQgZG9lcyBub3QgZGVmaW5lIGEgYHRlbXBsYXRlYCBwcm9wZXJ0eSwgdGhpc1xuICAgKiBtaXhpbiBoYXMgbm8gZWZmZWN0LlxuICAgKlxuICAgKiBGb3IgdGhlIHRpbWUgYmVpbmcsIHRoaXMgZXh0ZW5zaW9uIHJldGFpbnMgc3VwcG9ydCBmb3IgU2hhZG93IERPTSB2MC4gVGhhdFxuICAgKiB3aWxsIGV2ZW50dWFsbHkgYmUgZGVwcmVjYXRlZCBhcyBicm93c2VycyAoYW5kIHRoZSBTaGFkb3cgRE9NIHBvbHlmaWxsKVxuICAgKiBpbXBsZW1lbnQgU2hhZG93IERPTSB2MS5cbiAgICovXG4gIGNsYXNzIFNoYWRvd1RlbXBsYXRlIGV4dGVuZHMgYmFzZSB7XG5cbiAgICAvKlxuICAgICAqIElmIHRoZSBjb21wb25lbnQgZGVmaW5lcyBhIHRlbXBsYXRlLCBhIHNoYWRvdyByb290IHdpbGwgYmUgY3JlYXRlZCBvbiB0aGVcbiAgICAgKiBjb21wb25lbnQgaW5zdGFuY2UsIGFuZCB0aGUgdGVtcGxhdGUgc3RhbXBlZCBpbnRvIGl0LlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIGxldCB0ZW1wbGF0ZSA9IHRoaXMudGVtcGxhdGU7XG4gICAgICAvLyBUT0RPOiBTYXZlIHRoZSBwcm9jZXNzZWQgdGVtcGxhdGUgd2l0aCB0aGUgY29tcG9uZW50J3MgY2xhc3MgcHJvdG90eXBlXG4gICAgICAvLyBzbyBpdCBkb2Vzbid0IG5lZWQgdG8gYmUgcHJvY2Vzc2VkIHdpdGggZXZlcnkgaW5zdGFudGlhdGlvbi5cbiAgICAgIGlmICh0ZW1wbGF0ZSkge1xuXG4gICAgICAgIGlmICh0eXBlb2YgdGVtcGxhdGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgLy8gVXBncmFkZSBwbGFpbiBzdHJpbmcgdG8gcmVhbCB0ZW1wbGF0ZS5cbiAgICAgICAgICB0ZW1wbGF0ZSA9IGNyZWF0ZVRlbXBsYXRlV2l0aElubmVySFRNTCh0ZW1wbGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAod2luZG93LlNoYWRvd0RPTVBvbHlmaWxsKSB7XG4gICAgICAgICAgc2hpbVRlbXBsYXRlU3R5bGVzKHRlbXBsYXRlLCB0aGlzLmxvY2FsTmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcm9vdCA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICAgICAgICBsZXQgY2xvbmUgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRlbXBsYXRlLmNvbnRlbnQsIHRydWUpO1xuICAgICAgICByb290LmFwcGVuZENoaWxkKGNsb25lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBTaGFkb3dUZW1wbGF0ZTtcbn07XG5cblxuLy8gQ29udmVydCBhIHBsYWluIHN0cmluZyBvZiBIVE1MIGludG8gYSByZWFsIHRlbXBsYXRlIGVsZW1lbnQuXG5mdW5jdGlvbiBjcmVhdGVUZW1wbGF0ZVdpdGhJbm5lckhUTUwoaW5uZXJIVE1MKSB7XG4gIGxldCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gIC8vIFJFVklFVzogSXMgdGhlcmUgYW4gZWFzaWVyIHdheSB0byBkbyB0aGlzP1xuICAvLyBXZSdkIGxpa2UgdG8ganVzdCBzZXQgaW5uZXJIVE1MIG9uIHRoZSB0ZW1wbGF0ZSBjb250ZW50LCBidXQgc2luY2UgaXQnc1xuICAvLyBhIERvY3VtZW50RnJhZ21lbnQsIHRoYXQgZG9lc24ndCB3b3JrLlxuICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gIHdoaWxlIChkaXYuY2hpbGROb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgdGVtcGxhdGUuY29udGVudC5hcHBlbmRDaGlsZChkaXYuY2hpbGROb2Rlc1swXSk7XG4gIH1cbiAgcmV0dXJuIHRlbXBsYXRlO1xufVxuXG4vLyBJbnZva2UgYmFzaWMgc3R5bGUgc2hpbW1pbmcgd2l0aCBTaGFkb3dDU1MuXG5mdW5jdGlvbiBzaGltVGVtcGxhdGVTdHlsZXModGVtcGxhdGUsIHRhZykge1xuICB3aW5kb3cuV2ViQ29tcG9uZW50cy5TaGFkb3dDU1Muc2hpbVN0eWxpbmcodGVtcGxhdGUuY29udGVudCwgdGFnKTtcbn1cbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi9jcmVhdGVTeW1ib2wnO1xuaW1wb3J0IG1pY3JvdGFzayBmcm9tICcuL21pY3JvdGFzayc7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IGNhblNlbGVjdE5leHRTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2NhblNlbGVjdE5leHQnKTtcbmNvbnN0IGNhblNlbGVjdFByZXZpb3VzU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdjYW5TZWxlY3RQcmV2aW91cycpO1xuY29uc3Qgc2VsZWN0ZWRJdGVtU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdzZWxlY3RlZEl0ZW0nKTtcbmNvbnN0IHNlbGVjdGlvblJlcXVpcmVkU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdzZWxlY3Rpb25SZXF1aXJlZCcpO1xuY29uc3Qgc2VsZWN0aW9uV3JhcHNTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3NlbGVjdGlvbldyYXBzJyk7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBTaW5nbGVTZWxlY3Rpb24uICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBtYW5hZ2VzIHNpbmdsZS1zZWxlY3Rpb24gc2VtYW50aWNzIGZvciBpdGVtcyBpbiBhIGxpc3QuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyBhIGNvbXBvbmVudCB0byBwcm92aWRlIGFuIGBpdGVtc2AgYXJyYXkgb2YgYWxsIGVsZW1lbnRzXG4gICAqIGluIHRoZSBsaXN0LiBBIHN0YW5kYXJkIHdheSB0byBkbyB0aGF0IHdpdGggaXMgdGhlXG4gICAqIFtDb250ZW50QXNJdGVtc10oQ29udGVudEFzSXRlbXMubWQpIG1peGluLCB3aGljaCB0YWtlcyBhIGNvbXBvbmVudCdzXG4gICAqIGNvbnRlbnQgKHR5cGljYWxseSBpdHMgZGlzdHJpYnV0ZWQgY2hpbGRyZW4pIGFzIHRoZSBzZXQgb2YgbGlzdCBpdGVtczsgc2VlXG4gICAqIHRoYXQgbWl4aW4gZm9yIGRldGFpbHMuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gdHJhY2tzIGEgc2luZ2xlIHNlbGVjdGVkIGl0ZW0gaW4gdGhlIGxpc3QsIGFuZCBwcm92aWRlcyBtZWFucyB0b1xuICAgKiBnZXQgYW5kIHNldCB0aGF0IHN0YXRlIGJ5IGl0ZW0gcG9zaXRpb24gKGBzZWxlY3RlZEluZGV4YCkgb3IgaXRlbSBpZGVudGl0eVxuICAgKiAoYHNlbGVjdGVkSXRlbWApLiBUaGUgc2VsZWN0aW9uIGNhbiBiZSBtb3ZlZCBpbiB0aGUgbGlzdCB2aWEgdGhlIG1ldGhvZHNcbiAgICogYHNlbGVjdEZpcnN0YCwgYHNlbGVjdExhc3RgLCBgc2VsZWN0TmV4dGAsIGFuZCBgc2VsZWN0UHJldmlvdXNgLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGRvZXMgbm90IHByb2R1Y2UgYW55IHVzZXItdmlzaWJsZSBlZmZlY3RzIHRvIHJlcHJlc2VudFxuICAgKiBzZWxlY3Rpb24uIE90aGVyIG1peGlucywgc3VjaCBhc1xuICAgKiBbU2VsZWN0aW9uQXJpYUFjdGl2ZV0oU2VsZWN0aW9uQXJpYUFjdGl2ZS5tZCksXG4gICAqIFtTZWxlY3Rpb25IaWdobGlnaHRdKFNlbGVjdGlvbkhpZ2hsaWdodC5tZCkgYW5kXG4gICAqIFtTZWxlY3Rpb25JblZpZXddKFNlbGVjdGlvbkluVmlldy5tZCksIG1vZGlmeSB0aGUgc2VsZWN0ZWQgaXRlbSBpbiBjb21tb25cbiAgICogd2F5cyB0byBsZXQgdGhlIHVzZXIga25vdyBhIGdpdmVuIGl0ZW0gaXMgc2VsZWN0ZWQgb3Igbm90IHNlbGVjdGVkLlxuICAgKi9cbiAgY2xhc3MgU2luZ2xlU2VsZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICAvLyBTZXQgZGVmYXVsdHMuXG4gICAgICBpZiAodHlwZW9mIHRoaXMuc2VsZWN0aW9uUmVxdWlyZWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uUmVxdWlyZWQgPSB0aGlzLmRlZmF1bHRzLnNlbGVjdGlvblJlcXVpcmVkO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiB0aGlzLnNlbGVjdGlvbldyYXBzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbldyYXBzID0gdGhpcy5kZWZhdWx0cy5zZWxlY3Rpb25XcmFwcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBcHBseSB0aGUgaW5kaWNhdGUgc2VsZWN0aW9uIHN0YXRlIHRvIHRoZSBpdGVtLlxuICAgICAqXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLiBVc2VyLXZpc2libGVcbiAgICAgKiBlZmZlY3RzIHdpbGwgdHlwaWNhbGx5IGJlIGhhbmRsZWQgYnkgb3RoZXIgbWl4aW5zLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaXRlbSAtIHRoZSBpdGVtIGJlaW5nIHNlbGVjdGVkL2Rlc2VsZWN0ZWRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNlbGVjdGVkIC0gdHJ1ZSBpZiB0aGUgaXRlbSBpcyBzZWxlY3RlZCwgZmFsc2UgaWYgbm90XG4gICAgICovXG4gICAgYXBwbHlTZWxlY3Rpb24oaXRlbSwgc2VsZWN0ZWQpIHtcbiAgICAgIGlmIChzdXBlci5hcHBseVNlbGVjdGlvbikgeyBzdXBlci5hcHBseVNlbGVjdGlvbihpdGVtLCBzZWxlY3RlZCk7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHRoZSBzZWxlY3Rpb24gY2FuIGJlIG1vdmVkIHRvIHRoZSBuZXh0IGl0ZW0sIGZhbHNlIGlmIG5vdCAodGhlXG4gICAgICogc2VsZWN0ZWQgaXRlbSBpcyB0aGUgbGFzdCBpdGVtIGluIHRoZSBsaXN0KS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIGdldCBjYW5TZWxlY3ROZXh0KCkge1xuICAgICAgcmV0dXJuIHRoaXNbY2FuU2VsZWN0TmV4dFN5bWJvbF07XG4gICAgfVxuICAgIHNldCBjYW5TZWxlY3ROZXh0KGNhblNlbGVjdE5leHQpIHtcbiAgICAgIHRoaXNbY2FuU2VsZWN0TmV4dFN5bWJvbF0gPSBjYW5TZWxlY3ROZXh0O1xuICAgICAgaWYgKCdjYW5TZWxlY3ROZXh0JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5jYW5TZWxlY3ROZXh0ID0gY2FuU2VsZWN0TmV4dDsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRydWUgaWYgdGhlIHNlbGVjdGlvbiBjYW4gYmUgbW92ZWQgdG8gdGhlIHByZXZpb3VzIGl0ZW0sIGZhbHNlIGlmIG5vdFxuICAgICAqICh0aGUgc2VsZWN0ZWQgaXRlbSBpcyB0aGUgZmlyc3Qgb25lIGluIHRoZSBsaXN0KS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIGdldCBjYW5TZWxlY3RQcmV2aW91cygpIHtcbiAgICAgIHJldHVybiB0aGlzW2NhblNlbGVjdFByZXZpb3VzU3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IGNhblNlbGVjdFByZXZpb3VzKGNhblNlbGVjdFByZXZpb3VzKSB7XG4gICAgICB0aGlzW2NhblNlbGVjdFByZXZpb3VzU3ltYm9sXSA9IGNhblNlbGVjdFByZXZpb3VzO1xuICAgICAgaWYgKCdjYW5TZWxlY3RQcmV2aW91cycgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuY2FuU2VsZWN0UHJldmlvdXMgPSBjYW5TZWxlY3RQcmV2aW91czsgfVxuICAgIH1cblxuICAgIGdldCBkZWZhdWx0cygpIHtcbiAgICAgIGxldCBkZWZhdWx0cyA9IHN1cGVyLmRlZmF1bHRzIHx8IHt9O1xuICAgICAgZGVmYXVsdHMuc2VsZWN0aW9uUmVxdWlyZWQgPSBmYWxzZTtcbiAgICAgIGRlZmF1bHRzLnNlbGVjdGlvbldyYXBzID0gZmFsc2U7XG4gICAgICByZXR1cm4gZGVmYXVsdHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIGEgbmV3IGl0ZW0gYmVpbmcgYWRkZWQgdG8gdGhlIGxpc3QuXG4gICAgICpcbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBzaW1wbHkgc2V0cyB0aGUgaXRlbSdzXG4gICAgICogc2VsZWN0aW9uIHN0YXRlIHRvIGZhbHNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaXRlbSAtIHRoZSBpdGVtIGJlaW5nIGFkZGVkXG4gICAgICovXG4gICAgaXRlbUFkZGVkKGl0ZW0pIHtcbiAgICAgIGlmIChzdXBlci5pdGVtQWRkZWQpIHsgc3VwZXIuaXRlbUFkZGVkKGl0ZW0pOyB9XG4gICAgICB0aGlzLmFwcGx5U2VsZWN0aW9uKGl0ZW0sIGl0ZW0gPT09IHRoaXMuc2VsZWN0ZWRJdGVtKTtcbiAgICB9XG5cbiAgICBpdGVtc0NoYW5nZWQoKSB7XG4gICAgICBpZiAoc3VwZXIuaXRlbXNDaGFuZ2VkKSB7IHN1cGVyLml0ZW1zQ2hhbmdlZCgpOyB9XG5cbiAgICAgIGlmICh0aGlzLnNlbGVjdGlvblJlcXVpcmVkKSB7XG4gICAgICAgIC8vIEVuc3VyZSBzZWxlY3Rpb24sIGJ1dCBkbyB0aGlzIGluIHRoZSBuZXh0IHRpY2sgdG8gZ2l2ZSBvdGhlciBtaXhpbnMgYVxuICAgICAgICAvLyBjaGFuY2UgdG8gZG8gdGhlaXIgb3duIGl0ZW1zQ2hhbmdlZCB3b3JrLlxuICAgICAgICBtaWNyb3Rhc2soKCkgPT4ge1xuICAgICAgICAgIGVuc3VyZVNlbGVjdGlvbih0aGlzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjaGFuZ2UgaW4gaXRlbXMgbWF5IGhhdmUgYWZmZWN0ZWQgd2hpY2ggbmF2aWdhdGlvbnMgYXJlIHBvc3NpYmxlLlxuICAgICAgdXBkYXRlUG9zc2libGVOYXZpZ2F0aW9ucyh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW5kZXggb2YgdGhlIGl0ZW0gd2hpY2ggaXMgY3VycmVudGx5IHNlbGVjdGVkLlxuICAgICAqXG4gICAgICogSWYgYHNlbGVjdGlvbldyYXBzYCBpcyBmYWxzZSwgdGhlIGluZGV4IGlzIC0xIGlmIHRoZXJlIGlzIG5vIHNlbGVjdGlvbi5cbiAgICAgKiBJbiB0aGF0IGNhc2UsIHNldHRpbmcgdGhlIGluZGV4IHRvIC0xIHdpbGwgZGVzZWxlY3QgYW55XG4gICAgICogY3VycmVudGx5LXNlbGVjdGVkIGl0ZW0uXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldCBzZWxlY3RlZEluZGV4KCkge1xuICAgICAgbGV0IHNlbGVjdGVkSXRlbSA9IHRoaXMuc2VsZWN0ZWRJdGVtO1xuXG4gICAgICAvLyBUT0RPOiBJZiBzZWxlY3Rpb24gd2Fzbid0IGZvdW5kLCBtb3N0IGxpa2VseSBjYXVzZSBpcyB0aGF0IHRoZSBET00gd2FzXG4gICAgICAvLyBtYW5pcHVsYXRlZCBmcm9tIHVuZGVybmVhdGggdXMuIE9uY2Ugd2UgdHJhY2sgY29udGVudCBjaGFuZ2VzLCB0dXJuXG4gICAgICAvLyB0aGlzIGludG8gYSB3YXJuaW5nLlxuICAgICAgLy8gVE9ETzogTWVtb2l6ZVxuICAgICAgcmV0dXJuIHNlbGVjdGVkSXRlbSA/XG4gICAgICAgIHRoaXMuaXRlbXMuaW5kZXhPZihzZWxlY3RlZEl0ZW0pIDpcbiAgICAgICAgLTE7XG4gICAgfVxuICAgIHNldCBzZWxlY3RlZEluZGV4KGluZGV4KSB7XG4gICAgICAvLyBUT0RPOiBQdWxsIHNldHRpbmcgb2Ygc2VsZWN0ZWRJdGVtIGFib3ZlIHN1cGVyKCkgY2FsbC4gKi9cbiAgICAgIGlmICgnc2VsZWN0ZWRJbmRleCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJbmRleCA9IGluZGV4OyB9XG4gICAgICBsZXQgaXRlbXMgPSB0aGlzLml0ZW1zO1xuICAgICAgbGV0IGl0ZW07XG4gICAgICBpZiAoaW5kZXggPCAwIHx8IGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpdGVtID0gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGl0ZW0gPSBpdGVtc1tpbmRleF07XG4gICAgICB9XG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IGl0ZW07XG5cbiAgICAgIGxldCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnc2VsZWN0ZWQtaW5kZXgtY2hhbmdlZCcsIHtcbiAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgc2VsZWN0ZWRJbmRleDogaW5kZXgsXG4gICAgICAgICAgdmFsdWU6IGluZGV4IC8vIGZvciBQb2x5bWVyIGJpbmRpbmdcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgaXRlbSwgb3IgbnVsbCBpZiB0aGVyZSBpcyBubyBzZWxlY3Rpb24uXG4gICAgICpcbiAgICAgKiBTZXR0aW5nIHRoaXMgcHJvcGVydHkgdG8gbnVsbCBkZXNlbGVjdHMgYW55IGN1cnJlbnRseS1zZWxlY3RlZCBpdGVtLlxuICAgICAqXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0ZWRJdGVtKCkge1xuICAgICAgcmV0dXJuIHRoaXNbc2VsZWN0ZWRJdGVtU3ltYm9sXSB8fCBudWxsO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0ZWRJdGVtKGl0ZW0pIHtcbiAgICAgIGxldCBwcmV2aW91c0l0ZW0gPSB0aGlzW3NlbGVjdGVkSXRlbVN5bWJvbF07XG4gICAgICAvLyBUT0RPOiBDb25maXJtIGl0ZW0gaXMgYWN0dWFsbHkgaW4gdGhlIGxpc3QgYmVmb3JlIHNlbGVjdGluZy5cbiAgICAgIHRoaXNbc2VsZWN0ZWRJdGVtU3ltYm9sXSA9IGl0ZW07XG5cbiAgICAgIGlmICgnc2VsZWN0ZWRJdGVtJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEl0ZW0gPSBpdGVtOyB9XG4gICAgICBpZiAocHJldmlvdXNJdGVtKSB7XG4gICAgICAgIGlmIChpdGVtID09PSBwcmV2aW91c0l0ZW0pIHtcbiAgICAgICAgICAvLyBUaGUgaW5kaWNhdGVkIGl0ZW0gaXMgYWxyZWFkeSB0aGUgc2VsZWN0ZWQgaXRlbS5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVtb3ZlIHByZXZpb3VzIHNlbGVjdGlvbi5cbiAgICAgICAgdGhpcy5hcHBseVNlbGVjdGlvbihwcmV2aW91c0l0ZW0sIGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgdGhpcy5hcHBseVNlbGVjdGlvbihpdGVtLCB0cnVlKTtcbiAgICAgIH1cblxuICAgICAgLy8gVE9ETzogUmF0aW9uYWxpemUgd2l0aCBzZWxlY3RlZEluZGV4IHNvIHdlJ3JlIG5vdCByZWNhbGN1bGF0aW5nIGl0ZW1cbiAgICAgIC8vIG9yIGluZGV4IGluIGVhY2ggc2V0dGVyLlxuICAgICAgdXBkYXRlUG9zc2libGVOYXZpZ2F0aW9ucyh0aGlzKTtcblxuICAgICAgbGV0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdzZWxlY3RlZC1pdGVtLWNoYW5nZWQnLCB7XG4gICAgICAgIGRldGFpbDoge1xuICAgICAgICAgIHNlbGVjdGVkSXRlbTogaXRlbSxcbiAgICAgICAgICBwcmV2aW91c0l0ZW06IHByZXZpb3VzSXRlbSxcbiAgICAgICAgICB2YWx1ZTogaXRlbSAvLyBmb3IgUG9seW1lciBiaW5kaW5nXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgdGhlIGZpcnN0IGl0ZW0gaW4gdGhlIGxpc3QuXG4gICAgICovXG4gICAgc2VsZWN0Rmlyc3QoKSB7XG4gICAgICBpZiAoc3VwZXIuc2VsZWN0Rmlyc3QpIHsgc3VwZXIuc2VsZWN0Rmlyc3QoKTsgfVxuICAgICAgcmV0dXJuIHNlbGVjdEluZGV4KHRoaXMsIDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRydWUgaWYgdGhlIGxpc3Qgc2hvdWxkIGFsd2F5cyBoYXZlIGEgc2VsZWN0aW9uIChpZiBpdCBoYXMgaXRlbXMpLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0aW9uUmVxdWlyZWQoKSB7XG4gICAgICByZXR1cm4gdGhpc1tzZWxlY3Rpb25SZXF1aXJlZFN5bWJvbF07XG4gICAgfVxuICAgIHNldCBzZWxlY3Rpb25SZXF1aXJlZChzZWxlY3Rpb25SZXF1aXJlZCkge1xuICAgICAgdGhpc1tzZWxlY3Rpb25SZXF1aXJlZFN5bWJvbF0gPSBzZWxlY3Rpb25SZXF1aXJlZDtcbiAgICAgIGlmICgnc2VsZWN0aW9uUmVxdWlyZWQnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGlvblJlcXVpcmVkID0gc2VsZWN0aW9uUmVxdWlyZWQ7IH1cbiAgICAgIGlmIChzZWxlY3Rpb25SZXF1aXJlZCkge1xuICAgICAgICBlbnN1cmVTZWxlY3Rpb24odGhpcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IHRoZSBsYXN0IGl0ZW0gaW4gdGhlIGxpc3QuXG4gICAgICovXG4gICAgc2VsZWN0TGFzdCgpIHtcbiAgICAgIGlmIChzdXBlci5zZWxlY3RMYXN0KSB7IHN1cGVyLnNlbGVjdExhc3QoKTsgfVxuICAgICAgcmV0dXJuIHNlbGVjdEluZGV4KHRoaXMsIHRoaXMuaXRlbXMubGVuZ3RoIC0gMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IHRoZSBuZXh0IGl0ZW0gaW4gdGhlIGxpc3QuXG4gICAgICovXG4gICAgc2VsZWN0TmV4dCgpIHtcbiAgICAgIGlmIChzdXBlci5zZWxlY3ROZXh0KSB7IHN1cGVyLnNlbGVjdE5leHQoKTsgfVxuICAgICAgcmV0dXJuIHNlbGVjdEluZGV4KHRoaXMsIHRoaXMuc2VsZWN0ZWRJbmRleCArIDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCB0aGUgcHJldmlvdXMgaXRlbSBpbiB0aGUgbGlzdC5cbiAgICAgKlxuICAgICAqIElmIHRoZSBsaXN0IGhhcyBubyBzZWxlY3Rpb24sIHRoZSBsYXN0IGl0ZW0gd2lsbCBiZSBzZWxlY3RlZC5cbiAgICAgKi9cbiAgICBzZWxlY3RQcmV2aW91cygpIHtcbiAgICAgIGlmIChzdXBlci5zZWxlY3RQcmV2aW91cykgeyBzdXBlci5zZWxlY3RQcmV2aW91cygpOyB9XG4gICAgICBsZXQgbmV3SW5kZXggPSB0aGlzLnNlbGVjdGVkSW5kZXggPCAwID9cbiAgICAgICAgdGhpcy5pdGVtcy5sZW5ndGggLSAxIDogICAgIC8vIE5vIHNlbGVjdGlvbiB5ZXQ7IHNlbGVjdCBsYXN0IGl0ZW0uXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCAtIDE7XG4gICAgICByZXR1cm4gc2VsZWN0SW5kZXgodGhpcywgbmV3SW5kZXgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRydWUgaWYgc2VsZWN0aW9uIG5hdmlnYXRpb25zIHdyYXAgZnJvbSBsYXN0IHRvIGZpcnN0LCBhbmQgdmljZSB2ZXJzYS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGlvbldyYXBzKCkge1xuICAgICAgcmV0dXJuIHRoaXNbc2VsZWN0aW9uV3JhcHNTeW1ib2xdO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0aW9uV3JhcHModmFsdWUpIHtcbiAgICAgIHRoaXNbc2VsZWN0aW9uV3JhcHNTeW1ib2xdID0gU3RyaW5nKHZhbHVlKSA9PT0gJ3RydWUnO1xuICAgICAgaWYgKCdzZWxlY3Rpb25XcmFwcycgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0aW9uV3JhcHMgPSB2YWx1ZTsgfVxuICAgICAgdXBkYXRlUG9zc2libGVOYXZpZ2F0aW9ucyh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaXJlcyB3aGVuIHRoZSBzZWxlY3RlZEl0ZW0gcHJvcGVydHkgY2hhbmdlcy5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBTaW5nbGVTZWxlY3Rpb25cbiAgICAgKiBAZXZlbnQgc2VsZWN0ZWQtaXRlbS1jaGFuZ2VkXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZGV0YWlsLnNlbGVjdGVkSXRlbSBUaGUgbmV3IHNlbGVjdGVkIGl0ZW0uXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZGV0YWlsLnByZXZpb3VzSXRlbSBUaGUgcHJldmlvdXNseSBzZWxlY3RlZCBpdGVtLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogRmlyZXMgd2hlbiB0aGUgc2VsZWN0ZWRJbmRleCBwcm9wZXJ0eSBjaGFuZ2VzLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIFNpbmdsZVNlbGVjdGlvblxuICAgICAqIEBldmVudCBzZWxlY3RlZC1pbmRleC1jaGFuZ2VkXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGRldGFpbC5zZWxlY3RlZEluZGV4IFRoZSBuZXcgc2VsZWN0ZWQgaW5kZXguXG4gICAgICovXG5cbiAgfVxuXG4gIHJldHVybiBTaW5nbGVTZWxlY3Rpb247XG59O1xuXG5cbi8vIElmIG5vIGl0ZW0gaXMgc2VsZWN0ZWQsIHNlbGVjdCBhIGRlZmF1bHQgaXRlbS5cbmZ1bmN0aW9uIGVuc3VyZVNlbGVjdGlvbihlbGVtZW50KSB7XG4gIGxldCBpbmRleCA9IGVsZW1lbnQuc2VsZWN0ZWRJbmRleDtcbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIC8vIFNlbGVjdGVkIGl0ZW0gaXMgbm8gbG9uZ2VyIGluIHRoZSBjdXJyZW50IHNldCBvZiBpdGVtcy5cbiAgICBpZiAoZWxlbWVudC5pdGVtcyAmJiBlbGVtZW50Lml0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIFNlbGVjdCB0aGUgZmlyc3QgaXRlbS5cbiAgICAgIC8vIFRPRE86IElmIHRoZSBwcmV2aW91c2x5LXNlbGVjdGVkIGl0ZW0gaGFzIGJlZW4gZGVsZXRlZCwgdHJ5IHRvIHNlbGVjdFxuICAgICAgLy8gYW4gaXRlbSBhZGphY2VudCB0byB0aGUgcG9zaXRpb24gaXQgaGVsZC5cbiAgICAgIGVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE5vIGl0ZW1zIGZvciB1cyB0byBzZWxlY3QsIGJ1dCB3ZSBjYW4gYXQgbGVhc3Qgc2lnbmFsIHRoYXQgdGhlcmUncyBub1xuICAgICAgLy8gbG9uZ2VyIGEgc2VsZWN0aW9uLlxuICAgICAgZWxlbWVudC5zZWxlY3RlZEl0ZW0gPSBudWxsO1xuICAgIH1cbiAgfVxufVxuXG4vLyBFbnN1cmUgdGhlIGdpdmVuIGluZGV4IGlzIHdpdGhpbiBib3VuZHMsIGFuZCBzZWxlY3QgaXQgaWYgaXQncyBub3QgYWxyZWFkeVxuLy8gc2VsZWN0ZWQuXG5mdW5jdGlvbiBzZWxlY3RJbmRleChlbGVtZW50LCBpbmRleCkge1xuICBsZXQgY291bnQgPSBlbGVtZW50Lml0ZW1zLmxlbmd0aDtcbiAgbGV0IGJvdW5kZWRJbmRleDtcbiAgaWYgKGVsZW1lbnQuc2VsZWN0aW9uV3JhcHMpIHtcbiAgICAvLyBKYXZhU2NyaXB0IG1vZCBkb2Vzbid0IGhhbmRsZSBuZWdhdGl2ZSBudW1iZXJzIHRoZSB3YXkgd2Ugd2FudCB0byB3cmFwLlxuICAgIC8vIFNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xODYxODI1MC83NjQ3MlxuICAgIGJvdW5kZWRJbmRleCA9ICgoaW5kZXggJSBjb3VudCkgKyBjb3VudCkgJSBjb3VudDtcbiAgfSBlbHNlIHtcbiAgICAvLyBLZWVwIGluZGV4IHdpdGhpbiBib3VuZHMgb2YgYXJyYXkuXG4gICAgYm91bmRlZEluZGV4ID0gTWF0aC5tYXgoTWF0aC5taW4oaW5kZXgsIGNvdW50IC0gMSksIDApO1xuICB9XG4gIGxldCBwcmV2aW91c0luZGV4ID0gZWxlbWVudC5zZWxlY3RlZEluZGV4O1xuICBpZiAocHJldmlvdXNJbmRleCAhPT0gYm91bmRlZEluZGV4KSB7XG4gICAgZWxlbWVudC5zZWxlY3RlZEluZGV4ID0gYm91bmRlZEluZGV4O1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG4vLyBGb2xsb3dpbmcgYSBjaGFuZ2UgaW4gc2VsZWN0aW9uLCByZXBvcnQgd2hldGhlciBpdCdzIG5vdyBwb3NzaWJsZSB0b1xuLy8gZ28gbmV4dC9wcmV2aW91cyBmcm9tIHRoZSBnaXZlbiBpbmRleC5cbmZ1bmN0aW9uIHVwZGF0ZVBvc3NpYmxlTmF2aWdhdGlvbnMoZWxlbWVudCkge1xuICBsZXQgY2FuU2VsZWN0TmV4dDtcbiAgbGV0IGNhblNlbGVjdFByZXZpb3VzO1xuICBsZXQgaXRlbXMgPSBlbGVtZW50Lml0ZW1zO1xuICBpZiAoaXRlbXMgPT0gbnVsbCB8fCBpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAvLyBObyBpdGVtcyB0byBzZWxlY3QuXG4gICAgY2FuU2VsZWN0TmV4dCA9IGZhbHNlO1xuICAgIGNhblNlbGVjdFByZXZpb3VzID0gZmFsc2U7XG4gIH0gaWYgKGVsZW1lbnQuc2VsZWN0aW9uV3JhcHMpIHtcbiAgICAvLyBTaW5jZSB0aGVyZSBhcmUgaXRlbXMsIGNhbiBhbHdheXMgZ28gbmV4dC9wcmV2aW91cy5cbiAgICBjYW5TZWxlY3ROZXh0ID0gdHJ1ZTtcbiAgICBjYW5TZWxlY3RQcmV2aW91cyA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgbGV0IGluZGV4ID0gZWxlbWVudC5zZWxlY3RlZEluZGV4O1xuICAgIGlmIChpbmRleCA8IDAgJiYgaXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgLy8gU3BlY2lhbCBjYXNlLiBJZiB0aGVyZSBhcmUgaXRlbXMgYnV0IG5vIHNlbGVjdGlvbiwgZGVjbGFyZSB0aGF0IGl0J3NcbiAgICAgIC8vIGFsd2F5cyBwb3NzaWJsZSB0byBnbyBuZXh0L3ByZXZpb3VzIHRvIGNyZWF0ZSBhIHNlbGVjdGlvbi5cbiAgICAgIGNhblNlbGVjdE5leHQgPSB0cnVlO1xuICAgICAgY2FuU2VsZWN0UHJldmlvdXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBOb3JtYWwgY2FzZTogd2UgaGF2ZSBhbiBpbmRleCBpbiBhIGxpc3QgdGhhdCBoYXMgaXRlbXMuXG4gICAgICBjYW5TZWxlY3RQcmV2aW91cyA9IChpbmRleCA+IDApO1xuICAgICAgY2FuU2VsZWN0TmV4dCA9IChpbmRleCA8IGl0ZW1zLmxlbmd0aCAtIDEpO1xuICAgIH1cbiAgfVxuICBlbGVtZW50LmNhblNlbGVjdE5leHQgPSBjYW5TZWxlY3ROZXh0O1xuICBlbGVtZW50LmNhblNlbGVjdFByZXZpb3VzID0gY2FuU2VsZWN0UHJldmlvdXM7XG59XG4iLCJpbXBvcnQgQ29sbGVjdGl2ZSBmcm9tICcuL0NvbGxlY3RpdmUnO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggVGFyZ2V0SW5Db2xsZWN0aXZlLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggYWxsb3dzIGEgY29tcG9uZW50IHRvIHByb3ZpZGUgYWdncmVnYXRlIGJlaGF2aW9yIHdpdGggb3RoZXJcbiAgICogZWxlbWVudHMsIGUuZy4sIGZvciBrZXlib2FyZCBoYW5kbGluZy5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBpbXBsaWNpdGx5IGNyZWF0ZXMgYSBjb2xsZWN0aXZlIGZvciBhIGNvbXBvbmVudCBzbyB0aGF0IGl0IGNhblxuICAgKiBwYXJ0aWNpcGF0ZSBpbiBjb2xsZWN0aXZlIGtleWJvYXJkIGhhbmRsaW5nLiBTZWUgdGhlXG4gICAqIFtDb2xsZWN0aXZlXShDb2xsZWN0aXZlLm1kKSBjbGFzcyBmb3IgZGV0YWlscy5cbiAgICpcbiAgICogWW91IGNhbiB1c2UgdGhpcyBtaXhpbiBpbiBjb25qdW5jdGlvbiB3aXRoXG4gICAqIFtDb250ZW50Rmlyc3RDaGlsZFRhcmdldF0oQ29udGVudEZpcnN0Q2hpbGRUYXJnZXQubWQpIHRvIGF1dG9tYXRpY2FsbHkgaGF2ZVxuICAgKiB0aGUgY29tcG9uZW50J3MgY29sbGVjdGl2ZSBleHRlbmRlZCB0byBpdHMgZmlyc3QgY2hpbGQuXG4gICAqL1xuICBjbGFzcyBUYXJnZXRJbkNvbGxlY3RpdmUgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMuY29sbGVjdGl2ZSA9IG5ldyBDb2xsZWN0aXZlKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMvc2V0cyB0aGUgY3VycmVudCB0YXJnZXQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIFNldCB0aGlzIHRvIHBvaW50IHRvIGFub3RoZXIgZWxlbWVudC4gVGhhdCB0YXJnZXQgZWxlbWVudCB3aWxsIGJlXG4gICAgICogaW1wbGljaXRseSBhZGRlZCB0byB0aGUgY29tcG9uZW50J3MgY29sbGVjdGl2ZS4gVGhhdCBpcywgdGhlIGNvbXBvbmVudFxuICAgICAqIGFuZCBpdHMgdGFyZ2V0IHdpbGwgc2hhcmUgcmVzcG9uc2liaWxpdHkgZm9yIGhhbmRsaW5nIGtleWJvYXJkIGV2ZW50cy5cbiAgICAgKlxuICAgICAqIFlvdSBjYW4gc2V0IHRoaXMgcHJvcGVydHkgeW91cnNlbGYsIG9yIHlvdSBjYW4gdXNlIHRoZVxuICAgICAqIENvbnRlbnRGaXJzdENoaWxkVGFyZ2V0IG1peGluIHRvIGF1dG9tYXRpY2FsbHkgc2V0IHRoZSB0YXJnZXQgdG8gdGhlXG4gICAgICogY29tcG9uZW50J3MgZmlyc3QgY2hpbGQuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgZ2V0IHRhcmdldCgpIHtcbiAgICAgIHJldHVybiBzdXBlci50YXJnZXQ7XG4gICAgfVxuICAgIHNldCB0YXJnZXQoZWxlbWVudCkge1xuICAgICAgaWYgKCd0YXJnZXQnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnRhcmdldCA9IGVsZW1lbnQ7IH1cbiAgICAgIHRoaXMuY29sbGVjdGl2ZS5hc3NpbWlsYXRlKGVsZW1lbnQpO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIFRhcmdldEluQ29sbGVjdGl2ZTtcbn07XG4iLCIvKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBjcmVhdGUgYSBzeW1ib2wgdGhhdCBjYW4gYmUgdXNlZCBmb3IgYXNzb2NpYXRpbmcgcHJpdmF0ZVxuICogZGF0YSB3aXRoIGFuIGVsZW1lbnQuXG4gKlxuICogTWl4aW5zIGFuZCBjb21wb25lbnQgY2xhc3NlcyBvZnRlbiB3YW50IHRvIGFzc29jaWF0ZSBwcml2YXRlIGRhdGEgd2l0aCBhblxuICogZWxlbWVudCBpbnN0YW5jZSwgYnV0IEphdmFTY3JpcHQgZG9lcyBub3QgaGF2ZSBkaXJlY3Qgc3VwcG9ydCBmb3IgdHJ1ZVxuICogcHJpdmF0ZSBwcm9wZXJ0aWVzLiBPbmUgYXBwcm9hY2ggaXMgdG8gdXNlIHRoZVxuICogW1N5bWJvbF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvU3ltYm9sKVxuICogZGF0YSB0eXBlIHRvIHNldCBhbmQgcmV0cmlldmUgZGF0YSBvbiBhbiBlbGVtZW50LlxuICpcbiAqIFVuZm9ydHVuYXRlbHksIHRoZSBTeW1ib2wgdHlwZSBpcyBub3QgYXZhaWxhYmxlIGluIEludGVybmV0IEV4cGxvcmVyIDExLiBUaGVcbiAqIGBjcmVhdGVTeW1ib2xgIGhlbHBlciBmdW5jdGlvbiBleGlzdHMgYXMgYSB3b3JrYXJvdW5kIGZvciBJRSAxMS4gUmF0aGVyIHRoYW5cbiAqIHJldHVybmluZyBhIHRydWUgU3ltYm9sLCBpdCBzaW1wbHkgcmV0dXJucyBhbiB1bmRlcnNjb3JlLXByZWZpeGVkIHN0cmluZy5cbiAqXG4gKiBVc2FnZTpcbiAqXG4gKiAgICAgY29uc3QgZm9vU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdmb28nKTtcbiAqXG4gKiAgICAgY2xhc3MgTXlFbGVtZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICogICAgICAgZ2V0IGZvbygpIHtcbiAqICAgICAgICAgcmV0dXJuIHRoaXNbZm9vU3ltYm9sXTtcbiAqICAgICAgIH1cbiAqICAgICAgIHNldCBmb28odmFsdWUpIHtcbiAqICAgICAgICAgdGhpc1tmb29TeW1ib2xdID0gdmFsdWU7XG4gKiAgICAgICB9XG4gKiAgICAgfVxuICpcbiAqIEluIElFIDExLCB0aGlzIHNhbXBsZSB3aWxsIFwiaGlkZVwiIGRhdGEgYmVoaW5kIGFuIGluc3RhbmNlIHByb3BlcnR5IHRoaXMuX2Zvby5cbiAqIFRoZSB1c2Ugb2YgdGhlIHVuZGVyc2NvcmUgaXMgbWVhbnQgdG8gcmVkdWNlIChub3QgZWxpbWluYXRlKSB0aGUgcG90ZW50aWFsXG4gKiBmb3IgbmFtZSBjb25mbGljdHMsIGFuZCBkaXNjb3VyYWdlIChub3QgcHJldmVudCkgZXh0ZXJuYWwgYWNjZXNzIHRvIHRoaXNcbiAqIGRhdGEuIEluIG1vZGVybiBicm93c2VycywgdGhlIGFib3ZlIGNvZGUgd2lsbCBlbGltaW5hdGUgdGhlIHBvdGVudGlhbCBvZlxuICogbmFtaW5nIGNvbmZsaWN0cywgYW5kIGJldHRlciBoaWRlIHRoZSBkYXRhIGJlaGluZCBhIHJlYWwgU3ltYm9sLlxuICpcbiAqIEBmdW5jdGlvbiBjcmVhdGVTeW1ib2xcbiAqIEBwYXJhbSB7c3RyaW5nfSBkZXNjcmlwdGlvbiAtIEEgc3RyaW5nIHRvIGlkZW50aWZ5IHRoZSBzeW1ib2wgd2hlbiBkZWJ1Z2dpbmdcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU3ltYm9sKGRlc2NyaXB0aW9uKSB7XG4gIHJldHVybiB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nID9cbiAgICBTeW1ib2woZGVzY3JpcHRpb24pIDpcbiAgICBgXyR7ZGVzY3JpcHRpb259YDtcbn1cbiIsIi8qXG4gKiBNaWNyb3Rhc2sgaGVscGVyIGZvciBJRSAxMS5cbiAqXG4gKiBFeGVjdXRpbmcgYSBmdW5jdGlvbiBhcyBhIG1pY3JvdGFzayBpcyB0cml2aWFsIGluIGJyb3dzZXJzIHRoYXQgc3VwcG9ydFxuICogcHJvbWlzZXMsIHdob3NlIHRoZW4oKSBjbGF1c2VzIHVzZSBtaWNyb3Rhc2sgdGltaW5nLiBJRSAxMSBkb2Vzbid0IHN1cHBvcnRcbiAqIHByb21pc2VzLCBidXQgZG9lcyBzdXBwb3J0IE11dGF0aW9uT2JzZXJ2ZXJzLCB3aGljaCBhcmUgYWxzbyBleGVjdXRlZCBhc1xuICogbWljcm90YXNrcy4gU28gdGhpcyBoZWxwZXIgdXNlcyBhbiBNdXRhdGlvbk9ic2VydmVyIHRvIGFjaGlldmUgbWljcm90YXNrXG4gKiB0aW1pbmcuXG4gKlxuICogU2VlIGh0dHBzOi8vamFrZWFyY2hpYmFsZC5jb20vMjAxNS90YXNrcy1taWNyb3Rhc2tzLXF1ZXVlcy1hbmQtc2NoZWR1bGVzL1xuICpcbiAqIEluc3BpcmVkIGJ5IFBvbHltZXIncyBhc3luYygpIGZ1bmN0aW9uLlxuICovXG5cblxuLy8gVGhlIHF1ZXVlIG9mIHBlbmRpbmcgY2FsbGJhY2tzIHRvIGJlIGV4ZWN1dGVkIGFzIG1pY3JvdGFza3MuXG5sZXQgY2FsbGJhY2tzID0gW107XG5cbi8vIENyZWF0ZSBhbiBlbGVtZW50IHRoYXQgd2Ugd2lsbCBtb2RpZnkgdG8gZm9yY2Ugb2JzZXJ2YWJsZSBtdXRhdGlvbnMuXG5sZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcblxuLy8gQSBtb25vdG9uaWNhbGx5LWluY3JlYXNpbmcgdmFsdWUuXG5sZXQgY291bnRlciA9IDA7XG5cblxuLyoqXG4gKiBBZGQgYSBjYWxsYmFjayB0byB0aGUgbWljcm90YXNrIHF1ZXVlLlxuICpcbiAqIFRoaXMgdXNlcyBhIE11dGF0aW9uT2JzZXJ2ZXIgc28gdGhhdCBpdCB3b3JrcyBvbiBJRSAxMS5cbiAqXG4gKiBOT1RFOiBJRSAxMSBtYXkgYWN0dWFsbHkgdXNlIHRpbWVvdXQgdGltaW5nIHdpdGggTXV0YXRpb25PYnNlcnZlcnMuIFRoaXNcbiAqIG5lZWRzIG1vcmUgaW52ZXN0aWdhdGlvbi5cbiAqXG4gKiBAZnVuY3Rpb24gbWljcm90YXNrXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaWNyb3Rhc2soY2FsbGJhY2spIHtcbiAgY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICAvLyBGb3JjZSBhIG11dGF0aW9uLlxuICBlbGVtZW50LnRleHRDb250ZW50ID0gKytjb3VudGVyO1xufVxuXG5cbi8vIEV4ZWN1dGUgYW55IHBlbmRpbmcgY2FsbGJhY2tzLlxuZnVuY3Rpb24gZXhlY3V0ZUNhbGxiYWNrcygpIHtcbiAgd2hpbGUgKGNhbGxiYWNrcy5sZW5ndGggPiAwKSB7XG4gICAgbGV0IGNhbGxiYWNrID0gY2FsbGJhY2tzLnNoaWZ0KCk7XG4gICAgY2FsbGJhY2soKTtcbiAgfVxufVxuXG5cbi8vIENyZWF0ZSB0aGUgb2JzZXJ2ZXIuXG5sZXQgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihleGVjdXRlQ2FsbGJhY2tzKTtcbm9ic2VydmVyLm9ic2VydmUoZWxlbWVudCwge1xuICBjaGFyYWN0ZXJEYXRhOiB0cnVlXG59KTtcbiIsIi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIGZvciBzdGFuZGFyZCBjbGFzc0xpc3QudG9nZ2xlKCkgYmVoYXZpb3Igb24gb2xkIGJyb3dzZXJzLFxuICogbmFtZWx5IElFIDExLlxuICpcbiAqIFRoZSBzdGFuZGFyZFxuICogW2NsYXNzbGlzdF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0VsZW1lbnQvY2xhc3NMaXN0KVxuICogb2JqZWN0IGhhcyBhIGB0b2dnbGUoKWAgZnVuY3Rpb24gdGhhdCBzdXBwb3J0cyBhIHNlY29uZCBCb29sZWFuIHBhcmFtZXRlclxuICogdGhhdCBjYW4gYmUgdXNlZCB0byBzdWNjaW5jdGx5IHR1cm4gYSBjbGFzcyBvbiBvciBvZmYuIFRoaXMgZmVhdHVyZSBpcyBvZnRlblxuICogdXNlZnVsIGluIGRlc2lnbmluZyBjdXN0b20gZWxlbWVudHMsIHdoaWNoIG1heSB3YW50IHRvIGV4dGVybmFsbHkgcmVmbGVjdFxuICogY29tcG9uZW50IHN0YXRlIGluIGEgQ1NTIGNsYXNzIHRoYXQgY2FuIGJlIHVzZWQgZm9yIHN0eWxpbmcgcHVycG9zZXMuXG4gKlxuICogVW5mb3J0dW5hdGVseSwgSUUgMTEgZG9lcyBub3Qgc3VwcG9ydCB0aGUgQm9vbGVhbiBwYXJhbWV0ZXIgdG9cbiAqIGBjbGFzc0xpc3QudG9nZ2xlKClgLiBUaGlzIGhlbHBlciBmdW5jdGlvbiBiZWhhdmVzIGxpa2UgdGhlIHN0YW5kYXJkXG4gKiBgdG9nZ2xlKClgLCBpbmNsdWRpbmcgc3VwcG9ydCBmb3IgdGhlIEJvb2xlYW4gcGFyYW1ldGVyLCBzbyB0aGF0IGl0IGNhbiBiZVxuICogdXNlZCBldmVuIG9uIElFIDExLlxuICpcbiAqIEBmdW5jdGlvbiB0b2dnbGVDbGFzc1xuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIFRoZSBlbGVtZW50IHRvIG1vZGlmeVxuICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSAtIFRoZSBjbGFzcyB0byBhZGQvcmVtb3ZlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtmb3JjZV0gLSBGb3JjZSB0aGUgY2xhc3MgdG8gYmUgYWRkZWQgKGlmIHRydWUpIG9yIHJlbW92ZWRcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpZiBmYWxzZSlcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9nZ2xlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lLCBmb3JjZSkge1xuICBsZXQgY2xhc3NMaXN0ID0gZWxlbWVudC5jbGFzc0xpc3Q7XG4gIGxldCBhZGRDbGFzcyA9ICh0eXBlb2YgZm9yY2UgPT09ICd1bmRlZmluZWQnKSA/XG4gICAgIWNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpIDpcbiAgICBmb3JjZTtcbiAgaWYgKGFkZENsYXNzKSB7XG4gICAgY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICB9IGVsc2Uge1xuICAgIGNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgfVxuICByZXR1cm4gYWRkQ2xhc3M7XG59XG4iLCJpbXBvcnQgQ29tcG9zYWJsZSBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Db21wb3NhYmxlJztcbmltcG9ydCBTaGFkb3dUZW1wbGF0ZSBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TaGFkb3dUZW1wbGF0ZSc7XG5pbXBvcnQgU2hhZG93RWxlbWVudFJlZmVyZW5jZXMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2hhZG93RWxlbWVudFJlZmVyZW5jZXMnO1xuaW1wb3J0IEF0dHJpYnV0ZU1hcnNoYWxsaW5nIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0F0dHJpYnV0ZU1hcnNoYWxsaW5nJztcbmltcG9ydCBEaXN0cmlidXRlZENoaWxkcmVuIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW4nO1xuXG5cbi8qKlxuICogQSBzYW1wbGUgZ2VuZXJhbC1wdXJwb3NlIGJhc2UgY2xhc3MgZm9yIGRlZmluaW5nIGN1c3RvbSBlbGVtZW50cyB0aGF0IG1peGVzXG4gKiBpbiBzb21lIGNvbW1vbiBmZWF0dXJlczogdGVtcGxhdGUgc3RhbXBpbmcgaW50byBhIHNoYWRvdyByb290LCBzaGFkb3cgZWxlbWVudFxuICogcmVmZXJlbmNlcywgbWFyc2hhbGxpbmcgYXR0cmlidXRlcyB0byBwcm9wZXJ0aWVzLCBhbmQgcmV0cmlldmluZyB0aGUgY2hpbGRyZW5cbiAqIGRpc3RyaWJ1dGVkIHRvIGEgY29tcG9uZW50LlxuICpcbiAqIFRoaXMgYmFzZSBjbGFzcyBpcyBub3Qgc3BlY2lhbCBpbiBhbnkgd2F5LCBhbmQgaXMgZGVmaW5lZCBvbmx5IGFzIGFcbiAqIGNvbnZlbmllbnQgc2hvcnRoYW5kIGZvciBhcHBseWluZyB0aGUgbWl4aW5zIGxpc3RlZCBhYm92ZS4gWW91IGNhbiB1c2UgdGhpc1xuICogY2xhc3MgYXMgYSBiYXNlIGNsYXNzIGZvciB5b3VyIG93biBlbGVtZW50cywgb3IgZWFzaWx5IGNyZWF0ZSB5b3VyIG93biBiYXNlXG4gKiBjbGFzcyBieSBhcHBseWluZyB0aGUgc2FtZSBzZXQgb2YgbWl4aW5zLlxuICpcbiAqIFRoZSBFbGVtZW50QmFzZSBiYXNlIGNsYXNzIGRvZXMgbm90IHJlZ2lzdGVyIGl0c2VsZiBhcyBhIGN1c3RvbSBlbGVtZW50IHdpdGhcbiAqIHRoZSBicm93c2VyLCBhbmQgaGVuY2UgY2Fubm90IGJlIGluZGVwZW5kZW50bHkgaW5zdGFudGlhdGVkLlxuICpcbiAqIEBtaXhlcyBBdHRyaWJ1dGVNYXJzaGFsbGluZyBcbiAqIEBtaXhlcyBDb21wb3NhYmxlXG4gKiBAbWl4ZXMgRGlzdHJpYnV0ZWRDaGlsZHJlblxuICogQG1peGVzIFNoYWRvd0VsZW1lbnRSZWZlcmVuY2VzXG4gKiBAbWl4ZXMgU2hhZG93VGVtcGxhdGVcbiAqL1xuY2xhc3MgRWxlbWVudEJhc2UgZXh0ZW5kcyBDb21wb3NhYmxlKEhUTUxFbGVtZW50KS5jb21wb3NlKFxuICBTaGFkb3dUZW1wbGF0ZSwgICAgICAgICAgLy8gYmVmb3JlIG5vZGUgZmluZGluZywgc28gc2hhZG93IHJvb3QgaXMgcG9wdWxhdGVkXG4gIFNoYWRvd0VsZW1lbnRSZWZlcmVuY2VzLCAvLyBiZWZvcmUgbWFyc2hhbGxpbmcsIHNvIHByb3BlcnRpZXMgY2FuIHVzZSByZWZzXG4gIEF0dHJpYnV0ZU1hcnNoYWxsaW5nLFxuICBEaXN0cmlidXRlZENoaWxkcmVuXG4pIHtcblxuICAvKlxuICAgKiBEZWJ1Z2dpbmcgdXRpbGl0eTogbG9ncyBhIG1lc3NhZ2UsIHByZWZpeGVkIGJ5IHRoZSBjb21wb25lbnQncyB0YWcuXG4gICAqL1xuICBsb2codGV4dCkge1xuICAgIGlmIChzdXBlci5sb2cpIHsgc3VwZXIubG9nKHRleHQpOyB9XG4gICAgY29uc29sZS5sb2coYCR7dGhpcy5sb2NhbE5hbWV9OiAke3RleHR9YCk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBFbGVtZW50QmFzZTtcbiIsImltcG9ydCBFbGVtZW50QmFzZSBmcm9tICcuLi8uLi9iYXNpYy1lbGVtZW50LWJhc2Uvc3JjL0VsZW1lbnRCYXNlJztcbmltcG9ydCBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50IGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQnO1xuaW1wb3J0IENvbnRlbnRBc0l0ZW1zIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NvbnRlbnRBc0l0ZW1zJztcbmltcG9ydCBTZWxlY3Rpb25BcmlhQWN0aXZlIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NlbGVjdGlvbkFyaWFBY3RpdmUnO1xuaW1wb3J0IFNpbmdsZVNlbGVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TaW5nbGVTZWxlY3Rpb24nO1xuaW1wb3J0IFRhcmdldEluQ29sbGVjdGl2ZSBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9UYXJnZXRJbkNvbGxlY3RpdmUnO1xuXG5sZXQgYmFzZSA9IEVsZW1lbnRCYXNlLmNvbXBvc2UoXG4gIENvbnRlbnRBc0l0ZW1zLFxuICBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50LFxuICBTZWxlY3Rpb25BcmlhQWN0aXZlLFxuICBTaW5nbGVTZWxlY3Rpb24sXG4gIFRhcmdldEluQ29sbGVjdGl2ZVxuKTtcblxuXG4vKipcbiAqIFNob3dzIGV4YWN0bHkgb25lIGNoaWxkIGVsZW1lbnQgYXQgYSB0aW1lLiBUaGlzIGNhbiBiZSB1c2VmdWwsIGZvciBleGFtcGxlLFxuICogaWYgYSBnaXZlbiBVSSBlbGVtZW50IGhhcyBtdWx0aXBsZSBtb2RlcyB0aGF0IHByZXNlbnQgc3Vic3RhbnRpYWxseSBkaWZmZXJlbnRcbiAqIGVsZW1lbnRzLlxuICpcbiAqIFRoZSB0cmFuc2l0aW9uIGJldHdlZW4gY2hpbGQgZWxlbWVudHMgaXMgaW5zdGFudGVub3VzLiBJZiB5b3UnZCBsaWtlIHRoZVxuICogdHJhbnNpdGlvbiB0byBiZSBhY2NvbXBhbmllZCBieSB2aXNpYmxlIGFuaW1hdGVkIGVmZmVjdHMsIHNlZVxuICogW2Jhc2ljLWFuaW1hdGlvbi1zdGFnZV0oLi4vYmFzaWMtYW5pbWF0aW9uLXN0YWdlKS5cbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBkb2Vzbid0IHByb3ZpZGUgYW55IFVJIGZvciBjaGFuZ2luZyB3aGljaCBtb2RlIGlzIHNob3duLlxuICpcbiAqIEBleHRlbmRzIEVsZW1lbnRCYXNlXG4gKiBAbWl4ZXMgQ29udGVudEFzSXRlbXNcbiAqIEBtaXhlcyBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50XG4gKiBAbWl4ZXMgU2VsZWN0aW9uQXJpYUFjdGl2ZVxuICogQG1peGVzIFNpbmdsZVNlbGVjdGlvblxuICogQG1peGVzIFRhcmdldEluQ29sbGVjdGl2ZVxuICovXG5jbGFzcyBNb2RlcyBleHRlbmRzIGJhc2Uge1xuXG4gIGFwcGx5U2VsZWN0aW9uKGl0ZW0sIHNlbGVjdGVkKSB7XG4gICAgaWYgKHN1cGVyLmFwcGx5U2VsZWN0aW9uKSB7IHN1cGVyLmFwcGx5U2VsZWN0aW9uKGl0ZW0sIHNlbGVjdGVkKTsgfVxuICAgIGl0ZW0uc3R5bGUuZGlzcGxheSA9IHNlbGVjdGVkID8gJycgOiAnbm9uZSc7XG4gICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgIXNlbGVjdGVkKTtcbiAgfVxuXG4gIGdldCBkZWZhdWx0cygpIHtcbiAgICBsZXQgZGVmYXVsdHMgPSBzdXBlci5kZWZhdWx0cyB8fCB7fTtcbiAgICBkZWZhdWx0cy5zZWxlY3Rpb25SZXF1aXJlZCA9IHRydWU7XG4gICAgcmV0dXJuIGRlZmF1bHRzO1xuICB9XG5cbn1cblxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2Jhc2ljLW1vZGVzJywgTW9kZXMpO1xuZXhwb3J0IGRlZmF1bHQgTW9kZXM7XG4iXX0=
