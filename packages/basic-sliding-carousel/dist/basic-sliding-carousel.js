(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Memoized maps of attribute to property names and vice versa.
var attributeToPropertyNames = {};
var propertyNamesToAttributes = {};

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
      key: 'attributeChangedCallback',

      /*
       * Handle a change to the attribute with the given name.
       */
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

},{}],2:[function(require,module,exports){
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

},{"./createSymbol":18,"./toggleClass":20}],5:[function(require,module,exports){
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

      return _possibleConstructorReturn(this, Object.getPrototypeOf(DirectionSelection).apply(this, arguments));
    }

    _createClass(DirectionSelection, [{
      key: 'goDown',
      value: function goDown() {
        if (_get(Object.getPrototypeOf(DirectionSelection.prototype), 'goDown', this)) {
          _get(Object.getPrototypeOf(DirectionSelection.prototype), 'goDown', this).call(this);
        }
        return this.selectNext();
      }
    }, {
      key: 'goEnd',
      value: function goEnd() {
        if (_get(Object.getPrototypeOf(DirectionSelection.prototype), 'goEnd', this)) {
          _get(Object.getPrototypeOf(DirectionSelection.prototype), 'goEnd', this).call(this);
        }
        return this.selectLast();
      }
    }, {
      key: 'goLeft',
      value: function goLeft() {
        if (_get(Object.getPrototypeOf(DirectionSelection.prototype), 'goLeft', this)) {
          _get(Object.getPrototypeOf(DirectionSelection.prototype), 'goLeft', this).call(this);
        }
        return this.selectPrevious();
      }
    }, {
      key: 'goRight',
      value: function goRight() {
        if (_get(Object.getPrototypeOf(DirectionSelection.prototype), 'goRight', this)) {
          _get(Object.getPrototypeOf(DirectionSelection.prototype), 'goRight', this).call(this);
        }
        return this.selectNext();
      }
    }, {
      key: 'goStart',
      value: function goStart() {
        if (_get(Object.getPrototypeOf(DirectionSelection.prototype), 'goStart', this)) {
          _get(Object.getPrototypeOf(DirectionSelection.prototype), 'goStart', this).call(this);
        }
        return this.selectFirst();
      }
    }, {
      key: 'goUp',
      value: function goUp() {
        if (_get(Object.getPrototypeOf(DirectionSelection.prototype), 'goUp', this)) {
          _get(Object.getPrototypeOf(DirectionSelection.prototype), 'goUp', this).call(this);
        }
        return this.selectPrevious();
      }

      // Default implementation. This will typically be handled by other mixins.

    }, {
      key: 'selectFirst',

      // Default implementation. This will typically be handled by other mixins.
      value: function selectFirst() {
        if (_get(Object.getPrototypeOf(DirectionSelection.prototype), 'selectFirst', this)) {
          return _get(Object.getPrototypeOf(DirectionSelection.prototype), 'selectFirst', this).call(this);
        }
      }

      // Default implementation. This will typically be handled by other mixins.

    }, {
      key: 'selectLast',
      value: function selectLast() {
        if (_get(Object.getPrototypeOf(DirectionSelection.prototype), 'selectLast', this)) {
          return _get(Object.getPrototypeOf(DirectionSelection.prototype), 'selectLast', this).call(this);
        }
      }

      // Default implementation. This will typically be handled by other mixins.

    }, {
      key: 'selectNext',
      value: function selectNext() {
        if (_get(Object.getPrototypeOf(DirectionSelection.prototype), 'selectNext', this)) {
          return _get(Object.getPrototypeOf(DirectionSelection.prototype), 'selectNext', this).call(this);
        }
      }

      // Default implementation. This will typically be handled by other mixins.

    }, {
      key: 'selectPrevious',
      value: function selectPrevious() {
        if (_get(Object.getPrototypeOf(DirectionSelection.prototype), 'selectPrevious', this)) {
          return _get(Object.getPrototypeOf(DirectionSelection.prototype), 'selectPrevious', this).call(this);
        }
      }

      // Map drag travel fraction to selection fraction.

    }, {
      key: 'selectedFraction',
      get: function get() {
        return _get(Object.getPrototypeOf(DirectionSelection.prototype), 'selectedFraction', this);
      },
      set: function set(value) {
        if ('selectedFraction' in base.prototype) {
          _set(Object.getPrototypeOf(DirectionSelection.prototype), 'selectedFraction', value, this);
        }
      }
    }, {
      key: 'travelFraction',
      get: function get() {
        return _get(Object.getPrototypeOf(DirectionSelection.prototype), 'travelFraction', this);
      },
      set: function set(value) {
        if ('travelFraction' in base.prototype) {
          _set(Object.getPrototypeOf(DirectionSelection.prototype), 'travelFraction', value, this);
        }
        this.selectedFraction = value;
      }
    }]);

    return DirectionSelection;
  }(base);

  return DirectionSelection;
};

},{}],6:[function(require,module,exports){
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
      key: 'distributedChildNodes',
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
    if (node instanceof HTMLSlotElement) {
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

},{"./microtask":19}],8:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});
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
   * [SwipeDirection](./SwipeDirection.md) and
   * [TrackpadDirection](./TrackpadDirection.md), which generate fractional
   * selection values, and mixins like
   * [SelectionAnimation](./SelectionAnimation.md), which can render selection
   * at a fractional value.
   */

  var FractionalSelection = function (_base) {
    _inherits(FractionalSelection, _base);

    function FractionalSelection() {
      _classCallCheck(this, FractionalSelection);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(FractionalSelection).apply(this, arguments));
    }

    _createClass(FractionalSelection, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        if (_get(Object.getPrototypeOf(FractionalSelection.prototype), 'connectedCallback', this)) {
          _get(Object.getPrototypeOf(FractionalSelection.prototype), 'connectedCallback', this).call(this);
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
          _set(Object.getPrototypeOf(FractionalSelection.prototype), 'selectedFraction', value, this);
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
    var damped = undefined;
    var bound = itemCount - 1;
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
    // let index = Math.trunc(selection);
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

},{"./createSymbol":18}],9:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
   *     keydown(event) {
   *       let handled;
   *       switch (event.keyCode) {
   *         // Handle the keys you want, setting handled = true if appropriate.
   *       }
   *       // Prefer mixin result if it's defined, otherwise use base result.
   *       return handled || (super.keydown && super.keydown(event));
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

      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Keyboard).call(this));

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
        if (_get(Object.getPrototypeOf(Keyboard.prototype), 'collectiveChanged', this)) {
          _get(Object.getPrototypeOf(Keyboard.prototype), 'collectiveChanged', this).call(this);
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
            this.setAttribute('aria-label', label);
          }
        }

        if (!isListeningToKeydown(this)) {
          startListeningToKeydown(this);
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
      key: 'keydown',
      value: function keydown(event) {
        if (_get(Object.getPrototypeOf(Keyboard.prototype), 'keydown', this)) {
          return _get(Object.getPrototypeOf(Keyboard.prototype), 'keydown', this).call(this, event);
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
      handled = element.keydown && element.keydown(event);
      if (handled) {
        break;
      }
    }
  } else {
    // Component is handling the keyboard on its own.
    handled = this.keydown(event);
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
  // Set a default tab index of 0 (document order) if no tab index exists.
  // MS Edge requires we explicitly check for presence of tabindex attribute.
  if (element.getAttribute('tabindex') == null || element.tabIndex < 0) {
    element.setAttribute('tabindex', '0');
  }
}

function stopListeningToKeydown(element) {
  element.removeEventListener('keydown', element[keydownListenerSymbol]);
  element[keydownListenerSymbol] = null;
  element.removeAttribute('tabindex');
}

},{"./createSymbol":18}],10:[function(require,module,exports){
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

      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(KeyboardDirection).call(this));

      if (typeof _this.navigationAxis === 'undefined') {
        _this.navigationAxis = _this.defaults.navigationAxis;
      }
      return _this;
    }

    _createClass(KeyboardDirection, [{
      key: 'goDown',

      /**
       * Invoked when the user wants to go/navigate down.
       * The default implementation of this method does nothing.
       */
      value: function goDown() {
        if (_get(Object.getPrototypeOf(KeyboardDirection.prototype), 'goDown', this)) {
          return _get(Object.getPrototypeOf(KeyboardDirection.prototype), 'goDown', this).call(this);
        }
      }

      /**
       * Invoked when the user wants to go/navigate to the end (e.g., of a list).
       * The default implementation of this method does nothing.
       */

    }, {
      key: 'goEnd',
      value: function goEnd() {
        if (_get(Object.getPrototypeOf(KeyboardDirection.prototype), 'goEnd', this)) {
          return _get(Object.getPrototypeOf(KeyboardDirection.prototype), 'goEnd', this).call(this);
        }
      }

      /**
       * Invoked when the user wants to go/navigate left.
       * The default implementation of this method does nothing.
       */

    }, {
      key: 'goLeft',
      value: function goLeft() {
        if (_get(Object.getPrototypeOf(KeyboardDirection.prototype), 'goLeft', this)) {
          return _get(Object.getPrototypeOf(KeyboardDirection.prototype), 'goLeft', this).call(this);
        }
      }

      /**
       * Invoked when the user wants to go/navigate right.
       * The default implementation of this method does nothing.
       */

    }, {
      key: 'goRight',
      value: function goRight() {
        if (_get(Object.getPrototypeOf(KeyboardDirection.prototype), 'goRight', this)) {
          return _get(Object.getPrototypeOf(KeyboardDirection.prototype), 'goRight', this).call(this);
        }
      }

      /**
       * Invoked when the user wants to go/navigate to the start (e.g., of a
       * list). The default implementation of this method does nothing.
       */

    }, {
      key: 'goStart',
      value: function goStart() {
        if (_get(Object.getPrototypeOf(KeyboardDirection.prototype), 'goStart', this)) {
          return _get(Object.getPrototypeOf(KeyboardDirection.prototype), 'goStart', this).call(this);
        }
      }

      /**
       * Invoked when the user wants to go/navigate up.
       * The default implementation of this method does nothing.
       */

    }, {
      key: 'goUp',
      value: function goUp() {
        if (_get(Object.getPrototypeOf(KeyboardDirection.prototype), 'goUp', this)) {
          return _get(Object.getPrototypeOf(KeyboardDirection.prototype), 'goUp', this).call(this);
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
      key: 'keydown',
      value: function keydown(event) {
        var handled = undefined;

        var axis = this.navigationAxis;
        var horizontal = axis === 'horizontal' || axis === 'both';
        var vertical = axis === 'vertical' || axis === 'both';

        // Ignore Left/Right keys when metaKey or altKey modifier is also pressed,
        // as the user may be trying to navigate back or forward in the browser.
        switch (event.keyCode) {
          case 35:
            // End
            handled = this.goEnd();
            break;
          case 36:
            // Home
            handled = this.goStart();
            break;
          case 37:
            // Left
            if (horizontal && !event.metaKey && !event.altKey) {
              handled = this.goLeft();
            }
            break;
          case 38:
            // Up
            if (vertical) {
              handled = event.altKey ? this.goStart() : this.goUp();
            }
            break;
          case 39:
            // Right
            if (horizontal && !event.metaKey && !event.altKey) {
              handled = this.goRight();
            }
            break;
          case 40:
            // Down
            if (vertical) {
              handled = event.altKey ? this.goEnd() : this.goDown();
            }
            break;
        }
        // Prefer mixin result if it's defined, otherwise use base result.
        return handled || _get(Object.getPrototypeOf(KeyboardDirection.prototype), 'keydown', this) && _get(Object.getPrototypeOf(KeyboardDirection.prototype), 'keydown', this).call(this, event);
      }
    }, {
      key: 'defaults',
      get: function get() {
        var defaults = _get(Object.getPrototypeOf(KeyboardDirection.prototype), 'defaults', this) || {};
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
          _set(Object.getPrototypeOf(KeyboardDirection.prototype), 'navigationAxis', value, this);
        }
      }
    }]);

    return KeyboardDirection;
  }(base);

  return KeyboardDirection;
};

},{"./createSymbol":18}],11:[function(require,module,exports){
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

      // Set defaults.

      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SelectionAriaActive).call(this));

      if (!_this.getAttribute('role')) {
        _this.setAttribute('role', 'listbox');
      }
      return _this;
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
          var outermost = this.collective ? this.collective.outermostElement : this;
          if (selected) {
            outermost.setAttribute('aria-activedescendant', itemId);
          }
        }
      }
    }, {
      key: 'collectiveChanged',
      value: function collectiveChanged() {
        if (_get(Object.getPrototypeOf(SelectionAriaActive.prototype), 'collectiveChanged', this)) {
          _get(Object.getPrototypeOf(SelectionAriaActive.prototype), 'collectiveChanged', this).call(this);
        }

        // Ensure the outermost aspect has an ARIA role.
        var outermostElement = this.collective.outermostElement;
        if (!outermostElement.getAttribute('role')) {
          // Try to promote an ARIA role from an inner element. If none is found,
          // use a default role.
          var role = getCollectiveAriaRole(this.collective) || 'listbox';
          outermostElement.setAttribute('role', role);
        }
        if (!outermostElement.getAttribute('aria-activedescendant')) {
          // Try to promote an ARIA activedescendant value from an inner element.
          var descendant = getCollectiveAriaActiveDescendant(this.collective);
          if (descendant) {
            outermostElement.setAttribute('aria-activedescendant', descendant);
          }
        }

        // Remove the ARIA role and activedescendant values from the collective's
        // inner elements.
        this.collective.elements.forEach(function (element) {
          if (element !== outermostElement) {
            element.removeAttribute('aria-activedescendant');
            element.setAttribute('role', 'none');
          }
        });
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
          var outermost = this.collective ? this.collective.outermostElement : this;
          outermost.removeAttribute('aria-activedescendant');
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

},{}],12:[function(require,module,exports){
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

},{}],13:[function(require,module,exports){
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

},{}],14:[function(require,module,exports){
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

},{"./createSymbol":18,"./microtask":19}],15:[function(require,module,exports){
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
   * By default, this mixin presents no user-visible effects; it just indicates a
   * direction in which the user is currently swiping or has finished swiping. To
   * map the direction to a change in selection, use the
   * [DirectionSelection](DirectionSelection.md) mixin.
   */

  var SwipeDirection = function (_base) {
    _inherits(SwipeDirection, _base);

    function SwipeDirection() {
      _classCallCheck(this, SwipeDirection);

      // For the component to receive PointerEvents in IE/Edge, we need to set
      // touch-action: none. Only make this change if touch-action is currently
      // the default value ("auto"), in case the developer knows better than we
      // do what they want in their particular context.

      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SwipeDirection).call(this));

      if (getComputedStyle(_this).touchAction === 'auto') {
        _this.style.touchAction = 'none';
      }

      _this.travelFraction = 0;

      // TODO: Touch events could be factored out into its own mixin.

      // In all touch events, only handle single touches. We don't want to
      // inadvertently do work when the user's trying to pinch-zoom for example.
      // TODO: Even better approach than below would be to ignore touches after
      // the first if the user has already begun a swipe.
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

    /**
     * Invoked when the user wants to go/navigate left.
     * The default implementation of this method does nothing.
     */

    _createClass(SwipeDirection, [{
      key: 'goLeft',
      value: function goLeft() {
        if (_get(Object.getPrototypeOf(SwipeDirection.prototype), 'goLeft', this)) {
          return _get(Object.getPrototypeOf(SwipeDirection.prototype), 'goLeft', this).call(this);
        }
      }

      /**
       * Invoked when the user wants to go/navigate right.
       * The default implementation of this method does nothing.
       */

    }, {
      key: 'goRight',
      value: function goRight() {
        if (_get(Object.getPrototypeOf(SwipeDirection.prototype), 'goRight', this)) {
          return _get(Object.getPrototypeOf(SwipeDirection.prototype), 'goRight', this).call(this);
        }
      }

      // Default implementation.

    }, {
      key: 'showTransition',
      get: function get() {
        return _get(Object.getPrototypeOf(SwipeDirection.prototype), 'showTransition', this);
      },
      set: function set(value) {
        if ('showTransition' in base.prototype) {
          _set(Object.getPrototypeOf(SwipeDirection.prototype), 'showTransition', value, this);
        }
      }

      /**
       * The distance the first touchpoint has traveled since the beginning of a
       * drag, expressed as a fraction of the element's width.
       *
       * @type number
       */

    }, {
      key: 'travelFraction',
      get: function get() {
        return this[travelFractionSymbol];
      },
      set: function set(value) {
        this[travelFractionSymbol] = value;
        if ('travelFraction' in base.prototype) {
          _set(Object.getPrototypeOf(SwipeDirection.prototype), 'travelFraction', value, this);
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

function touchStart(element, clientX, clientY) {
  element.showTransition = false;
  element[startXSymbol] = clientX;
  element[previousXSymbol] = clientX;
  element[previousYSymbol] = clientY;
  element[deltaXSymbol] = 0;
  element[deltaYSymbol] = 0;
}

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

function touchEnd(element, clientX, clientY) {
  element.showTransition = true;
  if (element[deltaXSymbol] >= 20) {
    // Finished going right at high speed.
    element.goLeft();
  } else if (element[deltaXSymbol] <= -20) {
    // Finished going left at high speed.
    element.goRight();
  } else {
    // Finished at low speed.
    trackTo(element, clientX);
    var travelFraction = element.travelFraction;
    if (travelFraction >= 0.5) {
      element.goRight();
    } else if (travelFraction <= -0.5) {
      element.goLeft();
    }
  }
  element.travelFraction = 0;
  element[deltaXSymbol] = null;
  element[deltaYSymbol] = null;
}

function trackTo(element, x) {
  var width = element.offsetWidth;
  var dragDistance = element[startXSymbol] - x;
  var fraction = width > 0 ? dragDistance / width : 0;
  element.travelFraction = fraction;
}

},{"./createSymbol":18}],16:[function(require,module,exports){
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

},{"./Collective":2}],17:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createSymbol = require('../../basic-component-mixins/src/createSymbol');

var _createSymbol2 = _interopRequireDefault(_createSymbol);

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
   * [DirectionSelection](DirectionSelection.md) to let the user change the
   * selection with the trackpad or mouse wheel.
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

      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TrackpadDirection).call(this));

      _this.addEventListener('wheel', function (event) {
        var handled = wheel(_this, event);
        if (handled) {
          event.preventDefault();
        }
      });
      resetWheelTracking(_this);
      return _this;
    }

    /**
     * Invoked when the user wants to go/navigate left.
     * The default implementation of this method does nothing.
     */

    _createClass(TrackpadDirection, [{
      key: 'goLeft',
      value: function goLeft() {
        if (_get(Object.getPrototypeOf(TrackpadDirection.prototype), 'goLeft', this)) {
          return _get(Object.getPrototypeOf(TrackpadDirection.prototype), 'goLeft', this).call(this);
        }
      }

      /**
       * Invoked when the user wants to go/navigate right.
       * The default implementation of this method does nothing.
       */

    }, {
      key: 'goRight',
      value: function goRight() {
        if (_get(Object.getPrototypeOf(TrackpadDirection.prototype), 'goRight', this)) {
          return _get(Object.getPrototypeOf(TrackpadDirection.prototype), 'goRight', this).call(this);
        }
      }

      // Default implementation.

    }, {
      key: 'showTransition',
      get: function get() {
        return _get(Object.getPrototypeOf(TrackpadDirection.prototype), 'showTransition', this);
      },
      set: function set(value) {
        if ('showTransition' in base.prototype) {
          _set(Object.getPrototypeOf(TrackpadDirection.prototype), 'showTransition', value, this);
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
      key: 'travelFraction',
      get: function get() {
        return _get(Object.getPrototypeOf(TrackpadDirection.prototype), 'travelFraction', this);
      },
      set: function set(value) {
        if ('travelFraction' in base.prototype) {
          _set(Object.getPrototypeOf(TrackpadDirection.prototype), 'travelFraction', value, this);
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
  // console.log(deltaX + " " + acceleration + " " + element[absorbDecelerationSymbol] + " " + element[postNavigateDelayCompleteSymbol]);

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
  element.showTransition = false;
  travelFraction = sign(travelFraction) * Math.min(Math.abs(travelFraction), 1);
  element.travelFraction = travelFraction;

  // If the user has dragged enough to reach the previous/next item, then
  // complete a navigation to that item.
  if (travelFraction === 1) {
    // console.log("goRight");
    element.showTransition = true;
    element.goRight();
    postNavigate(element);
  } else if (travelFraction === -1) {
    // console.log("goLeft");
    element.showTransition = true;
    element.goLeft();
    postNavigate(element);
  }

  return true;
}

// A sufficiently long period of time has passed since the last wheel event.
// We snap the selection to the closest item, then reset our state.
function wheelTimedOut(element) {
  // console.log("timeout");

  // Snap to the closest item.
  element.showTransition = true;
  var travelFraction = element.travelFraction;
  if (travelFraction >= 0.5) {
    // console.log("snap right");
    element.goRight();
  } else if (travelFraction <= -0.5) {
    // console.log("snap left");
    element.goLeft();
  }

  // TODO: Listen for the transition to complete, and then restore
  // showTransition to false (or the previous value).

  resetWheelTracking(element);
}

},{"../../basic-component-mixins/src/createSymbol":18}],18:[function(require,module,exports){
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

},{}],19:[function(require,module,exports){
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

},{}],20:[function(require,module,exports){
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

},{}],21:[function(require,module,exports){
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

},{"../../basic-component-mixins/src/AttributeMarshalling":1,"../../basic-component-mixins/src/Composable":3,"../../basic-component-mixins/src/DistributedChildren":6,"../../basic-component-mixins/src/ShadowElementReferences":12,"../../basic-component-mixins/src/ShadowTemplate":13}],22:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ElementBase = require('../../basic-element-base/src/ElementBase');

var _ElementBase2 = _interopRequireDefault(_ElementBase);

var _ContentAsItems = require('../../basic-component-mixins/src/ContentAsItems');

var _ContentAsItems2 = _interopRequireDefault(_ContentAsItems);

var _DirectionSelection = require('../../basic-component-mixins/src/DirectionSelection');

var _DirectionSelection2 = _interopRequireDefault(_DirectionSelection);

var _DistributedChildrenAsContent = require('../../basic-component-mixins/src/DistributedChildrenAsContent');

var _DistributedChildrenAsContent2 = _interopRequireDefault(_DistributedChildrenAsContent);

var _FractionalSelection = require('../../basic-component-mixins/src/FractionalSelection');

var _FractionalSelection2 = _interopRequireDefault(_FractionalSelection);

var _Keyboard = require('../../basic-component-mixins/src/Keyboard');

var _Keyboard2 = _interopRequireDefault(_Keyboard);

var _KeyboardDirection = require('../../basic-component-mixins/src/KeyboardDirection');

var _KeyboardDirection2 = _interopRequireDefault(_KeyboardDirection);

var _SelectionAriaActive = require('../../basic-component-mixins/src/SelectionAriaActive');

var _SelectionAriaActive2 = _interopRequireDefault(_SelectionAriaActive);

var _SingleSelection = require('../../basic-component-mixins/src/SingleSelection');

var _SingleSelection2 = _interopRequireDefault(_SingleSelection);

var _SlidingViewport = require('../../basic-sliding-viewport/src/SlidingViewport');

var _SlidingViewport2 = _interopRequireDefault(_SlidingViewport);

var _SwipeDirection = require('../../basic-component-mixins/src/SwipeDirection');

var _SwipeDirection2 = _interopRequireDefault(_SwipeDirection);

var _TargetInCollective = require('../../basic-component-mixins/src/TargetInCollective');

var _TargetInCollective2 = _interopRequireDefault(_TargetInCollective);

var _TrackpadDirection = require('../../basic-component-mixins/src/TrackpadDirection');

var _TrackpadDirection2 = _interopRequireDefault(_TrackpadDirection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // jshint ignore:line

var base = _ElementBase2.default.compose(_ContentAsItems2.default, _DirectionSelection2.default, _DistributedChildrenAsContent2.default, _FractionalSelection2.default, _Keyboard2.default, _KeyboardDirection2.default, _SelectionAriaActive2.default, _SingleSelection2.default, _SwipeDirection2.default, _TargetInCollective2.default, _TrackpadDirection2.default);

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
 * @mixes ContentAsItems
 * @mixes DirectionSelection
 * @mixes DistributedChildrenAsContent
 * @mixes Generic
 * @mixes Keyboard
 * @mixes KeyboardDirection
 * @mixes SelectionAriaActive
 * @mixes SingleSelection
 * @mixes SwipeDirection
 * @mixes TargetInCollective
 * @mixes TrackpadDirection
 */

var SlidingCarousel = function (_base) {
  _inherits(SlidingCarousel, _base);

  function SlidingCarousel() {
    _classCallCheck(this, SlidingCarousel);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(SlidingCarousel).apply(this, arguments));
  }

  _createClass(SlidingCarousel, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      if (_get(Object.getPrototypeOf(SlidingCarousel.prototype), 'connectedCallback', this)) {
        _get(Object.getPrototypeOf(SlidingCarousel.prototype), 'connectedCallback', this).call(this);
      }
      // HACK
      this.itemsChanged();
    }
  }, {
    key: 'defaults',
    get: function get() {
      var defaults = _get(Object.getPrototypeOf(SlidingCarousel.prototype), 'defaults', this) || {};
      defaults.navigationAxis = 'horizontal';
      defaults.selectionRequired = true;
      return defaults;
    }
  }, {
    key: 'selectedFraction',
    get: function get() {
      return this.$.viewport.selectedFraction;
    },
    set: function set(value) {
      if ('selectedFraction' in base.prototype) {
        _set(Object.getPrototypeOf(SlidingCarousel.prototype), 'selectedFraction', value, this);
      }
      this.$.viewport.selectedFraction = value;
      var event = new CustomEvent('selected-fraction-changed');
      this.dispatchEvent(event);
    }
  }, {
    key: 'selectedIndex',
    get: function get() {
      return _get(Object.getPrototypeOf(SlidingCarousel.prototype), 'selectedIndex', this);
    },
    set: function set(value) {
      if ('selectedIndex' in base.prototype) {
        _set(Object.getPrototypeOf(SlidingCarousel.prototype), 'selectedIndex', value, this);
      }
      this.$.viewport.selectedIndex = value;
    }
  }, {
    key: 'selectedItem',
    get: function get() {
      return _get(Object.getPrototypeOf(SlidingCarousel.prototype), 'selectedItem', this);
    },
    set: function set(item) {
      if ('selectedItem' in base.prototype) {
        _set(Object.getPrototypeOf(SlidingCarousel.prototype), 'selectedItem', item, this);
      }
      this.$.viewport.selectedItem = item;
    }

    /**
     * Determine whether a transition should be shown during selection.
     *
     * Components like carousels often define animated CSS transitions for
     * sliding effects. Such a transition should usually *not* be applied while
     * the user is dragging, because a CSS animation will introduce a lag that
     * makes the swipe feel sluggish. Instead, as long as the user is dragging
     * with their finger down, the transition should be suppressed. When the
     * user releases their finger, the transition can be restored, allowing the
     * animation to show the carousel sliding into its final position.
     *
     * Note: This property is only intended to let a component cooperate with
     * mixins that may be applied to it, and is not intended to let someone
     * using component permanently enable or disable transition effects.
     *
     * @type {boolean} true if a component-provided transition should be shown,
     * false if not.
     */

  }, {
    key: 'showTransition',
    get: function get() {
      return _get(Object.getPrototypeOf(SlidingCarousel.prototype), 'showTransition', this) || this.$.viewport.showTransition;
    },
    set: function set(value) {
      if ('showTransition' in base.prototype) {
        _set(Object.getPrototypeOf(SlidingCarousel.prototype), 'showTransition', value, this);
      }
      this.$.viewport.showTransition = value;
    }
  }, {
    key: 'template',
    get: function get() {
      return '\n      <style>\n      :host {\n        display: -webkit-flex;\n        display: flex;\n      }\n\n      basic-sliding-viewport {\n        display: -webkit-flex;\n        display: flex;\n        -webkit-flex: 1;\n        flex: 1;\n      }\n      </style>\n\n      <basic-sliding-viewport id="viewport" role="none">\n        <slot></slot>\n      </basic-sliding-viewport>\n    ';
    }
  }]);

  return SlidingCarousel;
}(base);

customElements.define('basic-sliding-carousel', SlidingCarousel);
exports.default = SlidingCarousel;

},{"../../basic-component-mixins/src/ContentAsItems":4,"../../basic-component-mixins/src/DirectionSelection":5,"../../basic-component-mixins/src/DistributedChildrenAsContent":7,"../../basic-component-mixins/src/FractionalSelection":8,"../../basic-component-mixins/src/Keyboard":9,"../../basic-component-mixins/src/KeyboardDirection":10,"../../basic-component-mixins/src/SelectionAriaActive":11,"../../basic-component-mixins/src/SingleSelection":14,"../../basic-component-mixins/src/SwipeDirection":15,"../../basic-component-mixins/src/TargetInCollective":16,"../../basic-component-mixins/src/TrackpadDirection":17,"../../basic-element-base/src/ElementBase":21,"../../basic-sliding-viewport/src/SlidingViewport":23}],23:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createSymbol = require('../../basic-component-mixins/src/createSymbol');

var _createSymbol2 = _interopRequireDefault(_createSymbol);

var _ElementBase = require('../../basic-element-base/src/ElementBase');

var _ElementBase2 = _interopRequireDefault(_ElementBase);

var _FractionalSelection = require('../../basic-component-mixins/src/FractionalSelection');

var _FractionalSelection2 = _interopRequireDefault(_FractionalSelection);

var _SpreadItems = require('../../basic-spread-items/src/SpreadItems');

var _SpreadItems2 = _interopRequireDefault(_SpreadItems);

var _toggleClass = require('../../basic-component-mixins/src/toggleClass');

var _toggleClass2 = _interopRequireDefault(_toggleClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // jshint ignore:line

// Symbols for private data members on an element.
var selectedItemSymbol = (0, _createSymbol2.default)('selectedItem');

var base = _ElementBase2.default.compose(_FractionalSelection2.default);

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

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SlidingViewport).call(this));

    _this.selectedFraction = 0;
    _this.showTransition = true;
    return _this;
  }

  _createClass(SlidingViewport, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      if (_get(Object.getPrototypeOf(SlidingViewport.prototype), 'connectedCallback', this)) {
        _get(Object.getPrototypeOf(SlidingViewport.prototype), 'connectedCallback', this).call(this);
      }
      this.render();
    }
  }, {
    key: 'render',
    value: function render() {
      if (_get(Object.getPrototypeOf(SlidingViewport.prototype), 'render', this)) {
        _get(Object.getPrototypeOf(SlidingViewport.prototype), 'render', this).call(this);
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
      return _get(Object.getPrototypeOf(SlidingViewport.prototype), 'selectedFraction', this);
    },
    set: function set(value) {
      if ('selectedFraction' in base.prototype) {
        _set(Object.getPrototypeOf(SlidingViewport.prototype), 'selectedFraction', value, this);
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
      return this[selectedItemSymbol];
    },
    set: function set(item) {
      if ('selectedItem' in base.prototype) {
        _set(Object.getPrototypeOf(SlidingViewport.prototype), 'selectedItem', item, this);
      }
      this[selectedItemSymbol] = item;
      this.render();
    }
  }, {
    key: 'showTransition',
    get: function get() {
      return _get(Object.getPrototypeOf(SlidingViewport.prototype), 'showTransition', this) || this.classList.contains('showTransition');
    },
    set: function set(value) {
      if ('showTransition' in base.prototype) {
        _set(Object.getPrototypeOf(SlidingViewport.prototype), 'showTransition', value, this);
      }
      (0, _toggleClass2.default)(this, 'showTransition', value);
    }
  }, {
    key: 'template',
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
  var selection = _FractionalSelection2.default.helpers.elementSelection(this);
  var itemCount = this.items ? this.items.length : 0;
  var damped = _FractionalSelection2.default.helpers.dampedSelection(selection, itemCount);
  // Use a percentage so the transform will still work if screen size changes
  // (e.g., if device orientation changes).
  var left = -damped * 100;
  var transform = 'translateX(' + left + '%)';
  this.$.slidingContainer.style.webkitTransform = transform;
  this.$.slidingContainer.style.transform = transform;
}

customElements.define('basic-sliding-viewport', SlidingViewport);
exports.default = SlidingViewport;

},{"../../basic-component-mixins/src/FractionalSelection":8,"../../basic-component-mixins/src/createSymbol":18,"../../basic-component-mixins/src/toggleClass":20,"../../basic-element-base/src/ElementBase":21,"../../basic-spread-items/src/SpreadItems":24}],24:[function(require,module,exports){
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
 * @mixes DistributedChildrenAsContent
 */

var SpreadItems = function (_ElementBase$compose) {
  _inherits(SpreadItems, _ElementBase$compose);

  function SpreadItems() {
    _classCallCheck(this, SpreadItems);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(SpreadItems).apply(this, arguments));
  }

  _createClass(SpreadItems, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      if (_get(Object.getPrototypeOf(SpreadItems.prototype), 'connectedCallback', this)) {
        _get(Object.getPrototypeOf(SpreadItems.prototype), 'connectedCallback', this).call(this);
      }
      // HACK
      this.itemsChanged();
    }
  }, {
    key: 'itemsChanged',

    // TODO: Should also handle contentChanged(), but need to rationalize with
    // invocation of itemsChanged in connectedCallback.
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
      return '\n      <style>\n      :host {\n        display: block;\n      }\n\n      #spreadContainer {\n        display: -webkit-flex;\n        display: flex;\n        height: 100%;\n        position: relative;\n      }\n\n      #spreadContainer ::slotted(*) {\n        object-fit: contain;\n        object-fit: var(--basic-item-object-fit, contain);\n        height: 100%;\n        -webkit-user-drag: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n      }\n      </style>\n\n      <div id="spreadContainer">\n        <slot></slot>\n      </div>\n    ';
    }
  }]);

  return SpreadItems;
}(_ElementBase2.default.compose(_DistributedChildrenAsContent2.default));

customElements.define('basic-spread-items', SpreadItems);
exports.default = SpreadItems;

},{"../../basic-component-mixins/src/DistributedChildrenAsContent":7,"../../basic-element-base/src/ElementBase":21}]},{},[22])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9BdHRyaWJ1dGVNYXJzaGFsbGluZy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NvbGxlY3RpdmUuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Db21wb3NhYmxlLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ29udGVudEFzSXRlbXMuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXJlY3Rpb25TZWxlY3Rpb24uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXN0cmlidXRlZENoaWxkcmVuLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudC5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0ZyYWN0aW9uYWxTZWxlY3Rpb24uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9LZXlib2FyZC5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0tleWJvYXJkRGlyZWN0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2VsZWN0aW9uQXJpYUFjdGl2ZS5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NoYWRvd0VsZW1lbnRSZWZlcmVuY2VzLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2hhZG93VGVtcGxhdGUuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TaW5nbGVTZWxlY3Rpb24uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Td2lwZURpcmVjdGlvbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1RhcmdldEluQ29sbGVjdGl2ZS5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1RyYWNrcGFkRGlyZWN0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvY3JlYXRlU3ltYm9sLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvbWljcm90YXNrLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvdG9nZ2xlQ2xhc3MuanMiLCJwYWNrYWdlcy9iYXNpYy1lbGVtZW50LWJhc2Uvc3JjL0VsZW1lbnRCYXNlLmpzIiwicGFja2FnZXMvYmFzaWMtc2xpZGluZy1jYXJvdXNlbC9zcmMvU2xpZGluZ0Nhcm91c2VsLmpzIiwicGFja2FnZXMvYmFzaWMtc2xpZGluZy12aWV3cG9ydC9zcmMvU2xpZGluZ1ZpZXdwb3J0LmpzIiwicGFja2FnZXMvYmFzaWMtc3ByZWFkLWl0ZW1zL3NyYy9TcHJlYWRJdGVtcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQ0EsSUFBTSx3QkFBd0IsR0FBRyxFQUFFLENBQUM7QUFDcEMsSUFBTSx5QkFBeUIsR0FBRyxFQUFFOzs7QUFBQztrQkFJdEIsVUFBQyxJQUFJLEVBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BcUNqQixvQkFBb0I7Y0FBcEIsb0JBQW9COzthQUFwQixvQkFBb0I7NEJBQXBCLG9CQUFvQjs7b0VBQXBCLG9CQUFvQjs7O2lCQUFwQixvQkFBb0I7Ozs7OzsrQ0FLQyxhQUFhLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRTtBQUMxRCx1Q0FORSxvQkFBb0IsZ0RBTWM7QUFBRSxxQ0FOcEMsb0JBQW9CLDBEQU1pRDtTQUFFO0FBQ3pFLFlBQUksWUFB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QUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsVUFBQSxJQUFJLEVBQUk7QUFDN0IsWUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO09BQzlCLENBQUMsQ0FBQztLQUNKOzs7d0JBZlc7QUFDVixhQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7S0FDckI7Ozt3QkFlYztBQUNiLHNvQkE0QkU7S0FDSDs7O1NBekRHLFdBQVc7RUFBUyxzQkFBWSxPQUFPLHdDQUU1Qzs7QUE0REQsY0FBYyxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsRUFBRSxXQUFXLENBQUMsQ0FBQztrQkFDMUMsV0FBVyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBNZW1vaXplZCBtYXBzIG9mIGF0dHJpYnV0ZSB0byBwcm9wZXJ0eSBuYW1lcyBhbmQgdmljZSB2ZXJzYS5cbmNvbnN0IGF0dHJpYnV0ZVRvUHJvcGVydHlOYW1lcyA9IHt9O1xuY29uc3QgcHJvcGVydHlOYW1lc1RvQXR0cmlidXRlcyA9IHt9O1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggQXR0cmlidXRlTWFyc2hhbGxpbmcuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBtYXJzaGFsbHMgYXR0cmlidXRlcyB0byBwcm9wZXJ0aWVzIChhbmQgZXZlbnR1YWxseSB2aWNlIHZlcnNhKS5cbiAgICpcbiAgICogSWYgeW91ciBjb21wb25lbnQgZXhwb3NlcyBhIHNldHRlciBmb3IgYSBwcm9wZXJ0eSwgaXQncyBnZW5lcmFsbHkgYSBnb29kXG4gICAqIGlkZWEgdG8gbGV0IGRldnMgdXNpbmcgeW91ciBjb21wb25lbnQgYmUgYWJsZSB0byBzZXQgdGhhdCBwcm9wZXJ0eSBpbiBIVE1MXG4gICAqIHZpYSBhbiBlbGVtZW50IGF0dHJpYnV0ZS4gWW91IGNhbiBjb2RlIHRoYXQgeW91cnNlbGYgYnkgd3JpdGluZyBhblxuICAgKiBgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrYCwgb3IgeW91IGNhbiB1c2UgdGhpcyBtaXhpbiB0byBnZXQgYSBkZWdyZWUgb2ZcbiAgICogYXV0b21hdGljIHN1cHBvcnQuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gaW1wbGVtZW50cyBhbiBgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrYCB0aGF0IHdpbGwgYXR0ZW1wdCB0b1xuICAgKiBjb252ZXJ0IGEgY2hhbmdlIGluIGFuIGVsZW1lbnQgYXR0cmlidXRlIGludG8gYSBjYWxsIHRvIHRoZSBjb3JyZXNwb25kaW5nXG4gICAqIHByb3BlcnR5IHNldHRlci4gQXR0cmlidXRlcyB0eXBpY2FsbHkgZm9sbG93IGh5cGhlbmF0ZWQgbmFtZXMgKFwiZm9vLWJhclwiKSxcbiAgICogd2hlcmVhcyBwcm9wZXJ0aWVzIHR5cGljYWxseSB1c2UgY2FtZWxDYXNlIG5hbWVzIChcImZvb0JhclwiKS4gVGhpcyBtaXhpblxuICAgKiByZXNwZWN0cyB0aGF0IGNvbnZlbnRpb24sIGF1dG9tYXRpY2FsbHkgbWFwcGluZyB0aGUgaHlwaGVuYXRlZCBhdHRyaWJ1dGVcbiAgICogbmFtZSB0byB0aGUgY29ycmVzcG9uZGluZyBjYW1lbENhc2UgcHJvcGVydHkgbmFtZS5cbiAgICpcbiAgICogRXhhbXBsZTogWW91IGRlZmluZSBhIGNvbXBvbmVudCB1c2luZyB0aGlzIG1peGluOlxuICAgKlxuICAgKiAgICAgY2xhc3MgTXlFbGVtZW50IGV4dGVuZHMgQXR0cmlidXRlTWFyc2hhbGxpbmcoSFRNTEVsZW1lbnQpIHtcbiAgICogICAgICAgZ2V0IGZvb0JhcigpIHsgcmV0dXJuIHRoaXMuX2Zvb0JhcjsgfVxuICAgKiAgICAgICBzZXQgZm9vQmFyKHZhbHVlKSB7IHRoaXMuX2Zvb0JhciA9IHZhbHVlOyB9XG4gICAqICAgICB9XG4gICAqICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ215LWVsZW1lbnQnLCBNeUVsZW1lbnQpO1xuICAgKlxuICAgKiBJZiBzb21lb25lIHRoZW4gaW5zdGFudGlhdGVzIHlvdXIgY29tcG9uZW50IGluIEhUTUw6XG4gICAqXG4gICAqICAgICA8bXktZWxlbWVudCBmb28tYmFyPVwiSGVsbG9cIj48L215LWVsZW1lbnQ+XG4gICAqXG4gICAqIFRoZW4sIGFmdGVyIHRoZSBlbGVtZW50IGhhcyBiZWVuIHVwZ3JhZGVkLCB0aGUgYGZvb0JhcmAgc2V0dGVyIHdpbGxcbiAgICogYXV0b21hdGljYWxseSBiZSBpbnZva2VkIHdpdGggdGhlIGluaXRpYWwgdmFsdWUgXCJIZWxsb1wiLlxuICAgKlxuICAgKiBGb3IgdGhlIHRpbWUgYmVpbmcsIHRoaXMgbWl4aW4gb25seSBzdXBwb3J0cyBzdHJpbmctdmFsdWVkIHByb3BlcnRpZXMuXG4gICAqIElmIHlvdSdkIGxpa2UgdG8gY29udmVydCBzdHJpbmcgYXR0cmlidXRlcyB0byBvdGhlciB0eXBlcyAobnVtYmVycyxcbiAgICogYm9vbGVhbnMpLCB5b3UgbmVlZCB0byBpbXBsZW1lbnQgYGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja2AgeW91cnNlbGYuXG4gICAqL1xuICBjbGFzcyBBdHRyaWJ1dGVNYXJzaGFsbGluZyBleHRlbmRzIGJhc2Uge1xuXG4gICAgLypcbiAgICAgKiBIYW5kbGUgYSBjaGFuZ2UgdG8gdGhlIGF0dHJpYnV0ZSB3aXRoIHRoZSBnaXZlbiBuYW1lLlxuICAgICAqL1xuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhhdHRyaWJ1dGVOYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcbiAgICAgIGlmIChzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2spIHsgc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKCk7IH1cbiAgICAgIGxldCBwcm9wZXJ0eU5hbWUgPSBhdHRyaWJ1dGVUb1Byb3BlcnR5TmFtZShhdHRyaWJ1dGVOYW1lKTtcbiAgICAgIC8vIElmIHRoZSBhdHRyaWJ1dGUgbmFtZSBjb3JyZXNwb25kcyB0byBhIHByb3BlcnR5IG5hbWUsIHNldCB0aGUgcHJvcGVydHkuXG4gICAgICAvLyBJZ25vcmUgc3RhbmRhcmQgSFRNTEVsZW1lbnQgcHJvcGVydGllcyBoYW5kbGVkIGJ5IHRoZSBET00uXG4gICAgICBpZiAocHJvcGVydHlOYW1lIGluIHRoaXMgJiYgIShwcm9wZXJ0eU5hbWUgaW4gSFRNTEVsZW1lbnQucHJvdG90eXBlKSkge1xuICAgICAgICB0aGlzW3Byb3BlcnR5TmFtZV0gPSBuZXdWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcbiAgICAgIHJldHVybiBhdHRyaWJ1dGVzRm9yQ2xhc3ModGhpcyk7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gQXR0cmlidXRlTWFyc2hhbGxpbmc7XG59O1xuXG5cbi8vIENvbnZlcnQgaHlwaGVuYXRlZCBmb28tYmFyIGF0dHJpYnV0ZSBuYW1lIHRvIGNhbWVsIGNhc2UgZm9vQmFyIHByb3BlcnR5IG5hbWUuXG5mdW5jdGlvbiBhdHRyaWJ1dGVUb1Byb3BlcnR5TmFtZShhdHRyaWJ1dGVOYW1lKSB7XG4gIGxldCBwcm9wZXJ0eU5hbWUgPSBhdHRyaWJ1dGVUb1Byb3BlcnR5TmFtZXNbYXR0cmlidXRlTmFtZV07XG4gIGlmICghcHJvcGVydHlOYW1lKSB7XG4gICAgLy8gQ29udmVydCBhbmQgbWVtb2l6ZS5cbiAgICBsZXQgaHlwZW5SZWdFeCA9IC8tKFthLXpdKS9nO1xuICAgIHByb3BlcnR5TmFtZSA9IGF0dHJpYnV0ZU5hbWUucmVwbGFjZShoeXBlblJlZ0V4LFxuICAgICAgICBtYXRjaCA9PiBtYXRjaFsxXS50b1VwcGVyQ2FzZSgpKTtcbiAgICBhdHRyaWJ1dGVUb1Byb3BlcnR5TmFtZXNbYXR0cmlidXRlTmFtZV0gPSBwcm9wZXJ0eU5hbWU7XG4gIH1cbiAgcmV0dXJuIHByb3BlcnR5TmFtZTtcbn1cblxuZnVuY3Rpb24gYXR0cmlidXRlc0ZvckNsYXNzKGNsYXNzRm4pIHtcblxuICAvLyBXZSB0cmVhdCB0aGUgZWxlbWVudCBiYXNlIGNsYXNzZXMgYXMgaWYgdGhleSBoYXZlIG5vIGF0dHJpYnV0ZXMsIHNpbmNlIHdlXG4gIC8vIGRvbid0IHdhbnQgdG8gcmVjZWl2ZSBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sgZm9yIHRoZW0uXG4gIGlmIChjbGFzc0ZuID09PSBIVE1MRWxlbWVudCB8fCBjbGFzc0ZuID09PSBPYmplY3QpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICAvLyBHZXQgYXR0cmlidXRlcyBmb3IgcGFyZW50IGNsYXNzLlxuICBsZXQgYmFzZUNsYXNzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGNsYXNzRm4ucHJvdG90eXBlKS5jb25zdHJ1Y3RvcjtcbiAgbGV0IGJhc2VBdHRyaWJ1dGVzID0gYXR0cmlidXRlc0ZvckNsYXNzKGJhc2VDbGFzcyk7XG5cbiAgLy8gR2V0IGF0dHJpYnV0ZXMgZm9yIHRoaXMgY2xhc3MuXG4gIGxldCBwcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoY2xhc3NGbi5wcm90b3R5cGUpO1xuICBsZXQgc2V0dGVyTmFtZXMgPSBwcm9wZXJ0eU5hbWVzLmZpbHRlcihwcm9wZXJ0eU5hbWUgPT5cbiAgICB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihcbiAgICAgICAgY2xhc3NGbi5wcm90b3R5cGUsIHByb3BlcnR5TmFtZSkuc2V0ID09PSAnZnVuY3Rpb24nKTtcbiAgbGV0IGF0dHJpYnV0ZXMgPSBzZXR0ZXJOYW1lcy5tYXAoc2V0dGVyTmFtZSA9PlxuICAgICAgcHJvcGVydHlOYW1lVG9BdHRyaWJ1dGUoc2V0dGVyTmFtZSkpO1xuXG4gIC8vIE1lcmdlLlxuICBsZXQgZGlmZiA9IGF0dHJpYnV0ZXMuZmlsdGVyKGF0dHJpYnV0ZSA9PlxuICAgICAgYmFzZUF0dHJpYnV0ZXMuaW5kZXhPZihhdHRyaWJ1dGUpIDwgMCk7XG4gIHJldHVybiBiYXNlQXR0cmlidXRlcy5jb25jYXQoZGlmZik7XG59XG5cbi8vIENvbnZlcnQgYSBjYW1lbCBjYXNlIGZvb0JhciBwcm9wZXJ0eSBuYW1lIHRvIGEgaHlwaGVuYXRlZCBmb28tYmFyIGF0dHJpYnV0ZS5cbmZ1bmN0aW9uIHByb3BlcnR5TmFtZVRvQXR0cmlidXRlKHByb3BlcnR5TmFtZSkge1xuICBsZXQgYXR0cmlidXRlID0gcHJvcGVydHlOYW1lc1RvQXR0cmlidXRlc1twcm9wZXJ0eU5hbWVdO1xuICBpZiAoIWF0dHJpYnV0ZSkge1xuICAgIC8vIENvbnZlcnQgYW5kIG1lbW9pemUuXG4gICAgbGV0IHVwcGVyY2FzZVJlZ0V4ID0gLyhbQS1aXSkvZztcbiAgICBhdHRyaWJ1dGUgPSBwcm9wZXJ0eU5hbWUucmVwbGFjZSh1cHBlcmNhc2VSZWdFeCwgJy0kMScpLnRvTG93ZXJDYXNlKCk7XG4gIH1cbiAgcmV0dXJuIGF0dHJpYnV0ZTtcbn1cbiIsIi8qKlxuICogQSBncm91cCBvZiBlbGVtZW50cyB0aGF0IGhhdmUgYmVlbiBhc3NvY2lhdGVkIGZvciB0aGUgcHVycG9zZSBvZlxuICogYWNjb21wbGlzaGluZyBzb21lIGNvbGxlY3RpdmUgYmVoYXZpb3IsIGUuZy4sIGtleWJvYXJkIGhhbmRsaW5nLlxuICpcbiAqIFRoZXJlIGFyZSBjZXJ0YWluIGNvbXBvbmVudHMgdGhhdCB3YW50IHRvIGNvb3BlcmF0aXZlbHkgaGFuZGxlIHRoZSBrZXlib2FyZC5cbiAqIEZvciBleGFtcGxlLCB0aGUgYmFzaWMtYXJyb3ctc2VsZWN0aW9uIGFuZCBiYXNpYy1wYWdlLWRvdHMgY29tcG9uZW50cyBhcmVcbiAqIG9wdGlvbmFsIGNvbXBvbmVudHMgdGhhdCBjYW4gYXVnbWVudCB0aGUgYXBwZWFyYW5jZSBhbmQgYmVoYXZpb3Igb2YgYW4gaW5uZXJcbiAqIGJhc2ljLWNhcm91c2VsLCBhZGRpbmcgYXJyb3cgYnV0dG9ucyBhbmQgZG90IGJ1dHRvbnMsIHJlc3BlY3RpdmVseS4gV2hlblxuICogdGhlc2UgY29tcG9uZW50cyBhcmUgbmVzdGVkIHRvZ2V0aGVyLCB0aGV5IGZvcm0gYW4gaW1wbGljaXQgdW5pdCBjYWxsZWQgYVxuICogKmNvbGxlY3RpdmUqOlxuICpcbiAqICAgICA8YmFzaWMtYXJyb3ctc2VsZWN0aW9uPlxuICogICAgICAgPGJhc2ljLXBhZ2UtZG90cz5cbiAqICAgICAgICAgPGJhc2ljLWNhcm91c2VsPlxuICogICAgICAgICAgIC4uLiBpbWFnZXMsIGV0Yy4gLi4uXG4gKiAgICAgICAgIDwvYmFzaWMtY2Fyb3VzZWw+XG4gKiAgICAgICA8L2Jhc2ljLXBhZ2UtZG90cz5cbiAqICAgICA8L2Jhc2ljLWFycm93LXNlbGVjdGlvbj5cbiAqXG4gKiBJbiB0aGlzIGNvbmZpZ3VyYXRpb24sIHRoZSB0aHJlZSBjb21wb25lbnRzIHdpbGwgYWxsIGhhdmUgYSBgdGhpcy5jb2xsZWN0aXZlYFxuICogcmVmZXJlbmNlIHRoYXQgcmVmZXJzIHRvIGEgc2hhcmVkIGluc3RhbmNlIG9mIHRoZSBgQ29sbGVjdGl2ZWAgY2xhc3MuXG4gKlxuICogVGhlIFtLZXlib2FyZF0oS2V5Ym9hcmQubWQpIG1peGluIHRoZXkgdXNlIGlzIHNlbnNpdGl2ZSB0byB0aGUgcHJlc2VuY2Ugb2ZcbiAqIHRoZSBjb2xsZWN0aXZlLiBBbW9uZyBvdGhlciB0aGluZ3MsIGl0IHdpbGwgZW5zdXJlIHRoYXQgb25seSB0aGUgb3V0ZXJtb3N0XG4gKiBlbGVtZW50IGFib3ZlIOKAlMKgdGhlIGJhc2ljLWFycm93LXNlbGVjdGlvbiDigJTCoHdpbGwgYmUgYSB0YWIgc3RvcCB0aGF0IGNhblxuICogcmVjZWl2ZSB0aGUga2V5Ym9hcmQgZm9jdXMuIFRoaXMgbGV0cyB0aGUgdXNlciBwZXJjZWl2ZSB0aGUgY29tcG9uZW50XG4gKiBhcnJhbmdlbWVudCBhYm92ZSBhcyBhIHNpbmdsZSB1bml0LiBUaGUgS2V5Ym9hcmQgbWl4aW4gd2lsbCBhbHNvIGdpdmUgZWFjaFxuICogZWxlbWVudCBpbiB0aGUgY29sbGVjdGl2ZSBhIGNoYW5jZSB0byBwcm9jZXNzIGFueSBrZXlib2FyZCBldmVudHMuIFNvLCBldmVuXG4gKiB0aG91Z2ggdGhlIGJhc2ljLWFycm93LXNlbGVjdGlvbiBlbGVtZW50IHdpbGwgaGF2ZSB0aGUgZm9jdXMsIHRoZSBzdGFuZGFyZFxuICoga2V5Ym9hcmQgbmF2aWdhdGlvbiBwcm92aWRlZCBieSBiYXNpYy1jYXJvdXNlbCB3aWxsIGNvbnRpbnVlIHRvIHdvcmsuXG4gKlxuICogVGhlIFtTZWxlY3Rpb25BcmlhQWN0aXZlXShTZWxlY3Rpb25BcmlhQWN0aXZlLm1kKSBtaXhpbiBhbHNvIHJlc3BlY3RzXG4gKiBjb2xsZWN0aXZlcyB3aGVuIHVzaW5nIHRoZSBgYXJpYS1hY3RpdmVkZXNjZW5kYW50YCBhbmQgYHJvbGVgIGF0dHJpYnV0ZXMuXG4gKiBUaG9zZSB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIG91dGVybW9zdCBlbGVtZW50IChiYXNpYy1hcnJvdy1zZWxlY3Rpb24sIGFib3ZlKVxuICogc28gdGhhdCBBUklBIGNhbiBjb3JyZWN0bHkgdW5kZXJzdGFuZCB0aGUgYXJyYW5nZW1lbnQgb2YgdGhlIGVsZW1lbnRzLlxuICpcbiAqIFlvdSBjYW4gcHV0IGVsZW1lbnRzIGludG8gY29sbGVjdGl2ZXMgeW91cnNlbGYsIG9yIHlvdSBjYW4gdXNlIHRoZVxuICogW1RhcmdldEluQ29sbGVjdGl2ZV0oVGFyZ2V0SW5Db2xsZWN0aXZlLm1kKSBtaXhpbi5cbiAqL1xuY2xhc3MgQ29sbGVjdGl2ZSB7XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGNvbGxlY3RpdmUuXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVMZW1lbnRbXX0gW2VsZW1lbnRzXSAtIEluaXRpYWwgZWxlbWVudHMgdG8gYWRkLlxuICAgKi9cbiAgY29uc3RydWN0b3IoLi4uZWxlbWVudHMpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgZWxlbWVudHMgaW4gdGhlIGNvbGxlY3RpdmUuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnRbXX1cbiAgICAgKi9cbiAgICB0aGlzLmVsZW1lbnRzID0gW107XG4gICAgZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHRoaXMuYXNzaW1pbGF0ZShlbGVtZW50KSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIHRoZSBpbmRpY2F0ZWQgdGFyZ2V0IHRvIHRoZSBjb2xsZWN0aXZlLlxuICAgKlxuICAgKiBCeSBjb252ZW50aW9uLCBpZiB0d28gZWxlbWVudHMgd2FudHMgdG8gcGFydGljaXBhdGUgaW4gYSBjb2xsZWN0aXZlLCBhbmRcbiAgICogb25lIGVsZW1lbnQgaXMgYW4gYW5jZXN0b3Igb2YgdGhlIG90aGVyIGluIHRoZSBET00sIHRoZSBhbmNlc3RvciBzaG91bGRcbiAgICogYXNzaW1pbGF0ZSB0aGUgZGVzY2VuZGFudCBpbnN0ZWFkIG9mIHRoZSBvdGhlciB3YXkgYXJvdW5kLlxuICAgKlxuICAgKiBBZnRlciBhc3NpbWlsYXRpb24sIGFueSBlbGVtZW50IGluIHRoZSBjb2xsZWN0aXZlIHRoYXQgZGVmaW5lcyBhXG4gICAqIGBjb2xsZWN0aXZlQ2hhbmdlZGAgbWV0aG9kIHdpbGwgaGF2ZSB0aGF0IG1ldGhvZCBpbnZva2VkLiBUaGlzIGFsbG93c1xuICAgKiB0aGUgY29sbGVjdGl2ZSdzIGVsZW1lbnRzIHRvIHJlc3BvbmQgdG8gY2hhbmdlcyBpbiB0aGUgY29sbGVjdGl2ZS5cbiAgICpcbiAgICogQHBhcmFtIHsoSFRNTEVsZW1lbnR8Q29sbGVjdGl2ZSl9IHRhcmdldCAtIFRoZSBlbGVtZW50IG9yIGNvbGxlY3RpdmUgdG8gYWRkLlxuICAgKi9cbiAgYXNzaW1pbGF0ZSh0YXJnZXQpIHtcbiAgICBsZXQgY29sbGVjdGl2ZUNoYW5nZWQ7XG4gICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIENvbGxlY3RpdmUpIHtcbiAgICAgIGNvbGxlY3RpdmVDaGFuZ2VkID0gYXNzaW1pbGF0ZUNvbGxlY3RpdmUodGhpcywgdGFyZ2V0KTtcbiAgICB9IGVsc2UgaWYgKHRhcmdldC5jb2xsZWN0aXZlKSB7XG4gICAgICAvLyBUYXJnZXQgaXMgYWxyZWFkeSBwYXJ0IG9mIGEgY29sbGVjdGl2ZSwgYXNzaW1pbGF0ZSBpdC5cbiAgICAgIGNvbGxlY3RpdmVDaGFuZ2VkID0gYXNzaW1pbGF0ZUNvbGxlY3RpdmUodGhpcywgdGFyZ2V0LmNvbGxlY3RpdmUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBBc3NpbWlsYXRlIGFuIGluZGl2aWR1YWwgZWxlbWVudC5cbiAgICAgIGNvbGxlY3RpdmVDaGFuZ2VkID0gYXNzaW1pbGF0ZUVsZW1lbnQodGhpcywgdGFyZ2V0KTtcbiAgICB9XG5cbiAgICBpZiAoY29sbGVjdGl2ZUNoYW5nZWQpIHtcbiAgICAgIHRoaXMuaW52b2tlTWV0aG9kKCdjb2xsZWN0aXZlQ2hhbmdlZCcpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJbnZva2UgYSBtZXRob2Qgb24gYWxsIGVsZW1lbnRzIGluIHRoZSBjb2xsZWN0aXZlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kIC0gVGhlIG5hbWUgb2YgdGhlIG1ldGhvZCB0byBpbnZva2Ugb24gYWxsIGVsZW1lbnRzLlxuICAgKiBAcGFyYW0ge29iamVjdFtdfSBbYXJnc10gLSBUaGUgYXJndW1lbnRzIHRvIHRoZSBtZXRob2RcbiAgICovXG4gIGludm9rZU1ldGhvZChtZXRob2QsIC4uLmFyZ3MpIHtcbiAgICAvLyBJbnZva2UgZnJvbSBpbm5lcm1vc3QgdG8gb3V0ZXJtb3N0LlxuICAgIGxldCBlbGVtZW50cyA9IHRoaXMuZWxlbWVudHM7XG4gICAgZm9yIChsZXQgaSA9IGVsZW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xuICAgICAgaWYgKGVsZW1lbnRbbWV0aG9kXSkge1xuICAgICAgICBlbGVtZW50W21ldGhvZF0uYXBwbHkoZWxlbWVudCwgYXJncyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBvdXRlcm1vc3QgZWxlbWVudCBpbiB0aGUgY29sbGVjdGl2ZS5cbiAgICogQnkgY29udmVudGlvbiwgdGhpcyBpcyB0aGUgZmlyc3QgZWxlbWVudCBpbiB0aGUgYGVsZW1lbnRzYCBhcnJheS5cbiAgICovXG4gIGdldCBvdXRlcm1vc3RFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRzWzBdO1xuICB9XG5cbn1cblxuXG4vLyBUaGUgZmlyc3QgY29sbGVjdGl2ZSBhc3NpbWlsYXRlcyB0aGUgc2Vjb25kLlxuZnVuY3Rpb24gYXNzaW1pbGF0ZUNvbGxlY3RpdmUoY29sbGVjdGl2ZTEsIGNvbGxlY3RpdmUyKSB7XG4gIGlmIChjb2xsZWN0aXZlMSA9PT0gY29sbGVjdGl2ZTIpIHtcbiAgICAvLyBDb2xsZWN0aXZlcyBhcmUgc2FtZTsgaWdub3JlLlxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGxldCBlbGVtZW50cyA9IGNvbGxlY3RpdmUyLmVsZW1lbnRzO1xuXG4gIC8vIE9sZCBjb2xsZWN0aXZlIHdpbGwgbm8gbG9uZ2VyIGhhdmUgYW55IGVsZW1lbnRzIG9mIGl0cyBvd24uXG4gIGNvbGxlY3RpdmUyLmVsZW1lbnRzID0gW107XG5cbiAgZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICBhc3NpbWlsYXRlRWxlbWVudChjb2xsZWN0aXZlMSwgZWxlbWVudCk7XG4gIH0pO1xuXG4gIHJldHVybiB0cnVlO1xufVxuXG5cbi8vIEFzc2ltaWxhdGUgdGhlIGluZGljYXRlZCBlbGVtZW50LlxuZnVuY3Rpb24gYXNzaW1pbGF0ZUVsZW1lbnQoY29sbGVjdGl2ZSwgZWxlbWVudCkge1xuICBpZiAoZWxlbWVudC5jb2xsZWN0aXZlID09PSBjb2xsZWN0aXZlKSB7XG4gICAgLy8gQWxyZWFkeSBwYXJ0IG9mIHRoaXMgY29sbGVjdGl2ZS5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgZWxlbWVudC5jb2xsZWN0aXZlID0gY29sbGVjdGl2ZTtcbiAgY29sbGVjdGl2ZS5lbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBDb2xsZWN0aXZlO1xuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBDb21wb3NhYmxlLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gdG8gbWFrZSBhIGNsYXNzIG1vcmUgZWFzaWx5IGNvbXBvc2FibGUgd2l0aCBvdGhlciBtaXhpbnMuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gY29udHJpYnV0ZXMgYSBgY29tcG9zZWAgbWV0aG9kIHRoYXQgYXBwbGllcyBhIHNldCBvZiBtaXhpblxuICAgKiBmdW5jdGlvbnMgYW5kIHJldHVybnMgdGhlIHJlc3VsdGluZyBuZXcgY2xhc3MuIFRoaXMgc3VnYXIgY2FuIG1ha2UgdGhlXG4gICAqIGFwcGxpY2F0aW9uIG9mIG1hbnkgbWl4aW5zIGF0IG9uY2UgZWFzaWVyIHRvIHJlYWQuXG4gICAqL1xuICBjbGFzcyBDb21wb3NhYmxlIGV4dGVuZHMgYmFzZSB7XG5cbiAgICAvKipcbiAgICAgKiBBcHBseSBhIHNldCBvZiBtaXhpbiBmdW5jdGlvbnMgb3IgbWl4aW4gb2JqZWN0cyB0byB0aGUgcHJlc2VudCBjbGFzcyBhbmRcbiAgICAgKiByZXR1cm4gdGhlIG5ldyBjbGFzcy5cbiAgICAgKlxuICAgICAqIEluc3RlYWQgb2Ygd3JpdGluZzpcbiAgICAgKlxuICAgICAqICAgICBsZXQgTXlDbGFzcyA9IE1peGluMShNaXhpbjIoTWl4aW4zKE1peGluNChNaXhpbjUoQmFzZUNsYXNzKSkpKSk7XG4gICAgICpcbiAgICAgKiBZb3UgY2FuIHdyaXRlOlxuICAgICAqXG4gICAgICogICAgIGxldCBNeUNsYXNzID0gQ29tcG9zYWJsZShCYXNlQ2xhc3MpLmNvbXBvc2UoXG4gICAgICogICAgICAgTWl4aW4xLFxuICAgICAqICAgICAgIE1peGluMixcbiAgICAgKiAgICAgICBNaXhpbjMsXG4gICAgICogICAgICAgTWl4aW40LFxuICAgICAqICAgICAgIE1peGluNVxuICAgICAqICAgICApO1xuICAgICAqXG4gICAgICogVGhpcyBmdW5jdGlvbiBjYW4gYWxzbyB0YWtlIG1peGluIG9iamVjdHMuIEEgbWl4aW4gb2JqZWN0IGlzIGp1c3QgYVxuICAgICAqIHNob3J0aGFuZCBmb3IgYSBtaXhpbiBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYSBuZXcgc3ViY2xhc3Mgd2l0aCB0aGUgZ2l2ZW5cbiAgICAgKiBtZW1iZXJzLiBUaGUgbWl4aW4gb2JqZWN0J3MgbWVtYmVycyBhcmUgKm5vdCogY29waWVkIGRpcmVjdGx5IG9udG8gdGhlXG4gICAgICogcHJvdG90eXBlIG9mIHRoZSBiYXNlIGNsYXNzLCBhcyB3aXRoIHRyYWRpdGlvbmFsIG1peGlucy5cbiAgICAgKlxuICAgICAqIEluIGFkZGl0aW9uIHRvIHByb3ZpZGluZyBzeW50YWN0aWMgc3VnYXIsIHRoaXMgbWl4aW4gY2FuIGJlIHVzZWQgdG9cbiAgICAgKiBkZWZpbmUgYSBjbGFzcyBpbiBFUzUsIHdoaWNoIGxhY2tzIEVTNidzIGBjbGFzc2Aga2V5d29yZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Li4ubWl4aW5zfSBtaXhpbnMgLSBBIHNldCBvZiBtaXhpbiBmdW5jdGlvbnMgb3Igb2JqZWN0cyB0byBhcHBseS5cbiAgICAgKi9cbiAgICBzdGF0aWMgY29tcG9zZSguLi5taXhpbnMpIHtcbiAgICAgIC8vIFdlIGNyZWF0ZSBhIG5ldyBzdWJjbGFzcyBmb3IgZWFjaCBtaXhpbiBpbiB0dXJuLiBUaGUgcmVzdWx0IGJlY29tZXNcbiAgICAgIC8vIHRoZSBiYXNlIGNsYXNzIGV4dGVuZGVkIGJ5IGFueSBzdWJzZXF1ZW50IG1peGlucy4gSXQgdHVybnMgb3V0IHRoYXRcbiAgICAgIC8vIHdlIGNhbiB1c2UgQXJyYXkucmVkdWNlKCkgdG8gY29uY2lzZWx5IGV4cHJlc3MgdGhpcywgdXNpbmcgdGhlIGN1cnJlbnRcbiAgICAgIC8vIG9iamVjdCBhcyB0aGUgc2VlZCBmb3IgcmVkdWNlKCkuXG4gICAgICByZXR1cm4gbWl4aW5zLnJlZHVjZShjb21wb3NlQ2xhc3MsIHRoaXMpO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIENvbXBvc2FibGU7XG59O1xuXG5cbi8vIFByb3BlcnRpZXMgZGVmaW5lZCBieSBPYmplY3QgdGhhdCB3ZSBkb24ndCB3YW50IHRvIG1peGluLlxuY29uc3QgTk9OX01JWEFCTEVfT0JKRUNUX1BST1BFUlRJRVMgPSBbXG4gICdjb25zdHJ1Y3Rvcidcbl07XG5cbi8qXG4gKiBBcHBseSB0aGUgbWl4aW4gdG8gdGhlIGdpdmVuIGJhc2UgY2xhc3MgdG8gcmV0dXJuIGEgbmV3IGNsYXNzLlxuICogVGhlIG1peGluIGNhbiBlaXRoZXIgYmUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIG1vZGlmaWVkIGNsYXNzLCBvciBhXG4gKiBwbGFpbiBvYmplY3Qgd2hvc2UgbWVtYmVycyB3aWxsIGJlIGNvcGllZCB0byB0aGUgbmV3IGNsYXNzJyBwcm90b3R5cGUuXG4gKi9cbmZ1bmN0aW9uIGNvbXBvc2VDbGFzcyhiYXNlLCBtaXhpbikge1xuICBpZiAodHlwZW9mIG1peGluID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gTWl4aW4gZnVuY3Rpb25cbiAgICByZXR1cm4gbWl4aW4oYmFzZSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gTWl4aW4gb2JqZWN0XG4gICAgY2xhc3MgU3ViY2xhc3MgZXh0ZW5kcyBiYXNlIHt9XG4gICAgY29weU93blByb3BlcnRpZXMobWl4aW4sIFN1YmNsYXNzLnByb3RvdHlwZSwgTk9OX01JWEFCTEVfT0JKRUNUX1BST1BFUlRJRVMpO1xuICAgIHJldHVybiBTdWJjbGFzcztcbiAgfVxufVxuXG5cbi8qXG4gKiBDb3B5IHRoZSBnaXZlbiBwcm9wZXJ0aWVzL21ldGhvZHMgdG8gdGhlIHRhcmdldC5cbiAqIFJldHVybiB0aGUgdXBkYXRlZCB0YXJnZXQuXG4gKi9cbmZ1bmN0aW9uIGNvcHlPd25Qcm9wZXJ0aWVzKHNvdXJjZSwgdGFyZ2V0LCBpZ25vcmVQcm9wZXJ0eU5hbWVzID0gW10pIHtcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoc291cmNlKS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgIGlmIChpZ25vcmVQcm9wZXJ0eU5hbWVzLmluZGV4T2YobmFtZSkgPCAwKSB7XG4gICAgICBsZXQgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBuYW1lKTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB0YXJnZXQ7XG59XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4vY3JlYXRlU3ltYm9sJztcbmltcG9ydCB0b2dnbGVDbGFzcyBmcm9tICcuL3RvZ2dsZUNsYXNzJztcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3QgaXRlbXNTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2l0ZW1zJyk7XG5jb25zdCBpdGVtSW5pdGlhbGl6ZWRTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2l0ZW1Jbml0aWFsaXplZCcpO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggQ29udGVudEFzSXRlbXMuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBtYXBzIGNvbnRlbnQgc2VtYW50aWNzIChlbGVtZW50cykgdG8gbGlzdCBpdGVtIHNlbWFudGljcy5cbiAgICpcbiAgICogSXRlbXMgZGlmZmVyIGZyb20gZWxlbWVudCBjb250ZW50cyBpbiBzZXZlcmFsIHdheXM6XG4gICAqXG4gICAqICogVGhleSBhcmUgb2Z0ZW4gcmVmZXJlbmNlZCB2aWEgaW5kZXguXG4gICAqICogVGhleSBtYXkgaGF2ZSBhIHNlbGVjdGlvbiBzdGF0ZS5cbiAgICogKiBJdCdzIGNvbW1vbiB0byBkbyB3b3JrIHRvIGluaXRpYWxpemUgdGhlIGFwcGVhcmFuY2Ugb3Igc3RhdGUgb2YgYSBuZXdcbiAgICogICBpdGVtLlxuICAgKiAqIEF1eGlsaWFyeSBpbnZpc2libGUgY2hpbGQgZWxlbWVudHMgYXJlIGZpbHRlcmVkIG91dCBhbmQgbm90IGNvdW50ZWQgYXNcbiAgICogICBpdGVtcy4gQXV4aWxpYXJ5IGVsZW1lbnRzIGluY2x1ZGUgbGluaywgc2NyaXB0LCBzdHlsZSwgYW5kIHRlbXBsYXRlXG4gICAqICAgZWxlbWVudHMuIFRoaXMgZmlsdGVyaW5nIGVuc3VyZXMgdGhhdCB0aG9zZSBhdXhpbGlhcnkgZWxlbWVudHMgY2FuIGJlXG4gICAqICAgdXNlZCBpbiBtYXJrdXAgaW5zaWRlIG9mIGEgbGlzdCB3aXRob3V0IGJlaW5nIHRyZWF0ZWQgYXMgbGlzdCBpdGVtcy5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIGEgY29tcG9uZW50IHRvIHByb3ZpZGUgYSBgY29udGVudGAgcHJvcGVydHkgcmV0dXJuaW5nIGFcbiAgICogcmF3IHNldCBvZiBlbGVtZW50cy4gWW91IGNhbiBwcm92aWRlIHRoYXQgeW91cnNlbGYsIG9yIHVzZSB0aGVcbiAgICogW0Rpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnRdKERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQubWQpIG1peGluLlxuICAgKlxuICAgKiBUaGUgbW9zdCBjb21tb25seSByZWZlcmVuY2VkIHByb3BlcnR5IGRlZmluZWQgYnkgdGhpcyBtaXhpbiBpcyB0aGUgYGl0ZW1zYFxuICAgKiBwcm9wZXJ0eS4gVG8gYXZvaWQgaGF2aW5nIHRvIGRvIHdvcmsgZWFjaCB0aW1lIHRoYXQgcHJvcGVydHkgaXMgcmVxdWVzdGVkLFxuICAgKiB0aGlzIG1peGluIHN1cHBvcnRzIGFuIG9wdGltaXplZCBtb2RlLiBJZiB5b3UgaW52b2tlIHRoZSBgY29udGVudENoYW5nZWRgXG4gICAqIG1ldGhvZCB3aGVuIHRoZSBzZXQgb2YgaXRlbXMgY2hhbmdlcywgdGhlIG1peGluIGNvbmNsdWRlcyB0aGF0IHlvdSdsbCB0YWtlXG4gICAqIGNhcmUgb2Ygbm90aWZ5aW5nIGl0IG9mIGZ1dHVyZSBjaGFuZ2VzLCBhbmQgdHVybnMgb24gdGhlIG9wdGltaXphdGlvbi4gV2l0aFxuICAgKiB0aGF0IG9uLCB0aGUgbWl4aW4gc2F2ZXMgYSByZWZlcmVuY2UgdG8gdGhlIGNvbXB1dGVkIHNldCBvZiBpdGVtcywgYW5kIHdpbGxcbiAgICogcmV0dXJuIHRoYXQgaW1tZWRpYXRlbHkgb24gc3Vic2VxdWVudCBjYWxscyB0byB0aGUgYGl0ZW1zYCBwcm9wZXJ0eS4gSWYgeW91XG4gICAqIHVzZSB0aGlzIG1peGluIGluIGNvbmp1bmN0aW9uIHdpdGggdGhlXG4gICAqIFtEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50XShEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50Lm1kKSBtaXhpbiwgdGhlXG4gICAqIGBjb250ZW50Q2hhbmdlZGAgbWV0aG9kIHdpbGwgYmUgaW52b2tlZCBmb3IgeW91IHdoZW4gdGhlIGVsZW1lbnQncyBjaGlsZHJlblxuICAgKiBjaGFuZ2UsIHR1cm5pbmcgb24gdGhlIG9wdGltaXphdGlvbiBhdXRvbWF0aWNhbGx5LlxuICAgKi9cbiAgY2xhc3MgQ29udGVudEFzSXRlbXMgZXh0ZW5kcyBiYXNlIHtcblxuICAgIC8qKlxuICAgICAqIEFwcGx5IHRoZSBzZWxlY3Rpb24gc3RhdGUgdG8gYSBzaW5nbGUgaXRlbS5cbiAgICAgKlxuICAgICAqIEludm9rZSB0aGlzIG1ldGhvZCB0byBzaWduYWwgdGhhdCB0aGUgc2VsZWN0ZWQgc3RhdGUgb2YgdGhlIGluZGljYXRlZCBpdGVtXG4gICAgICogaGFzIGNoYW5nZWQuIEJ5IGRlZmF1bHQsIHRoaXMgYXBwbGllcyBhIGBzZWxlY3RlZGAgQ1NTIGNsYXNzIGlmIHRoZSBpdGVtXG4gICAgICogaXMgc2VsZWN0ZWQsIGFuZCByZW1vdmVkIGl0IGlmIG5vdCBzZWxlY3RlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGl0ZW0gLSBUaGUgaXRlbSB3aG9zZSBzZWxlY3Rpb24gc3RhdGUgaGFzIGNoYW5nZWQuXG4gICAgICogQHBhcmFtIHtib29sZWFufSBzZWxlY3RlZCAtIFRydWUgaWYgdGhlIGl0ZW0gaXMgc2VsZWN0ZWQsIGZhbHNlIGlmIG5vdC5cbiAgICAgKi9cbiAgICBhcHBseVNlbGVjdGlvbihpdGVtLCBzZWxlY3RlZCkge1xuICAgICAgaWYgKHN1cGVyLmFwcGx5U2VsZWN0aW9uKSB7IHN1cGVyLmFwcGx5U2VsZWN0aW9uKGl0ZW0sIHNlbGVjdGVkKTsgfVxuICAgICAgdG9nZ2xlQ2xhc3MoaXRlbSwgJ3NlbGVjdGVkJywgc2VsZWN0ZWQpO1xuICAgIH1cblxuICAgIGNvbnRlbnRDaGFuZ2VkKCkge1xuICAgICAgaWYgKHN1cGVyLmNvbnRlbnRDaGFuZ2VkKSB7IHN1cGVyLmNvbnRlbnRDaGFuZ2VkKCk7IH1cblxuICAgICAgLy8gU2luY2Ugd2UgZ290IHRoZSBjb250ZW50Q2hhbmdlZCBjYWxsLCB3ZSdsbCBhc3N1bWUgd2UnbGwgYmUgbm90aWZpZWQgaWZcbiAgICAgIC8vIHRoZSBzZXQgb2YgaXRlbXMgY2hhbmdlcyBsYXRlci4gV2UgdHVybiBvbiBtZW1vaXphdGlvbiBvZiB0aGUgaXRlbXNcbiAgICAgIC8vIHByb3BlcnR5IGJ5IHNldHRpbmcgb3VyIGludGVybmFsIHByb3BlcnR5IHRvIG51bGwgKGluc3RlYWQgb2ZcbiAgICAgIC8vIHVuZGVmaW5lZCkuXG4gICAgICB0aGlzW2l0ZW1zU3ltYm9sXSA9IG51bGw7XG5cbiAgICAgIHRoaXMuaXRlbXNDaGFuZ2VkKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgaXMgaW52b2tlZCB3aGVuZXZlciBhIG5ldyBpdGVtIGlzIGFkZGVkIHRvIHRoZSBsaXN0LlxuICAgICAqXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLiBZb3UgY2FuIG92ZXJyaWRlXG4gICAgICogdGhpcyB0byBwZXJmb3JtIHBlci1pdGVtIGluaXRpYWxpemF0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaXRlbSAtIFRoZSBpdGVtIHRoYXQgd2FzIGFkZGVkLlxuICAgICAqL1xuICAgIGl0ZW1BZGRlZChpdGVtKSB7XG4gICAgICBpZiAoc3VwZXIuaXRlbUFkZGVkKSB7IHN1cGVyLml0ZW1BZGRlZChpdGVtKTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IHNldCBvZiBpdGVtcyBpbiB0aGUgbGlzdC4gU2VlIHRoZSB0b3AtbGV2ZWwgZG9jdW1lbnRhdGlvbiBmb3JcbiAgICAgKiBtaXhpbiBmb3IgYSBkZXNjcmlwdGlvbiBvZiBob3cgaXRlbXMgZGlmZmVyIGZyb20gcGxhaW4gY29udGVudC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudFtdfVxuICAgICAqL1xuICAgIGdldCBpdGVtcygpIHtcbiAgICAgIGxldCBpdGVtcztcbiAgICAgIGlmICh0aGlzW2l0ZW1zU3ltYm9sXSA9PSBudWxsKSB7XG4gICAgICAgIGl0ZW1zID0gZmlsdGVyQXV4aWxpYXJ5RWxlbWVudHModGhpcy5jb250ZW50KTtcbiAgICAgICAgLy8gTm90ZTogdGVzdCBmb3IgKmVxdWFsaXR5KiB3aXRoIG51bGw7IGRvbid0IHRyZWF0IHVuZGVmaW5lZCBhcyBhIG1hdGNoLlxuICAgICAgICBpZiAodGhpc1tpdGVtc1N5bWJvbF0gPT09IG51bGwpIHtcbiAgICAgICAgICAvLyBNZW1vaXplIHRoZSBzZXQgb2YgaXRlbXMuXG4gICAgICAgICAgdGhpc1tpdGVtc1N5bWJvbF0gPSBpdGVtcztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUmV0dXJuIHRoZSBtZW1vaXplZCBpdGVtcy5cbiAgICAgICAgaXRlbXMgPSB0aGlzW2l0ZW1zU3ltYm9sXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpdGVtcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIHdoZW4gdGhlIHVuZGVybHlpbmcgY29udGVudHMgY2hhbmdlLiBJdCBpcyBhbHNvXG4gICAgICogaW52b2tlZCBvbiBjb21wb25lbnQgaW5pdGlhbGl6YXRpb24g4oCTIHNpbmNlIHRoZSBpdGVtcyBoYXZlIFwiY2hhbmdlZFwiIGZyb21cbiAgICAgKiBiZWluZyBub3RoaW5nLlxuICAgICAqL1xuICAgIGl0ZW1zQ2hhbmdlZCgpIHtcbiAgICAgIGlmIChzdXBlci5pdGVtc0NoYW5nZWQpIHsgc3VwZXIuaXRlbXNDaGFuZ2VkKCk7IH1cblxuICAgICAgLy8gUGVyZm9ybSBwZXItaXRlbSBpbml0aWFsaXphdGlvbi5cbiAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaWYgKCFpdGVtW2l0ZW1Jbml0aWFsaXplZFN5bWJvbF0pIHtcbiAgICAgICAgICB0aGlzLml0ZW1BZGRlZChpdGVtKTtcbiAgICAgICAgICBpdGVtW2l0ZW1Jbml0aWFsaXplZFN5bWJvbF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnaXRlbXMtY2hhbmdlZCcpKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEBldmVudCBpdGVtcy1jaGFuZ2VkXG4gICAgICpcbiAgICAgKiBUaGlzIGV2ZW50IGlzIHJhaXNlZCB3aGVuIHRoZSBzZXQgb2YgaXRlbXMgY2hhbmdlcy5cbiAgICAgKi9cbiAgfVxuXG4gIHJldHVybiBDb250ZW50QXNJdGVtcztcbn07XG5cblxuLy8gUmV0dXJuIHRoZSBnaXZlbiBlbGVtZW50cywgZmlsdGVyaW5nIG91dCBhdXhpbGlhcnkgZWxlbWVudHMgdGhhdCBhcmVuJ3Rcbi8vIHR5cGljYWxseSB2aXNpYmxlLiBJdGVtcyB3aGljaCBhcmUgbm90IGVsZW1lbnRzIGFyZSByZXR1cm5lZCBhcyBpcy5cbmZ1bmN0aW9uIGZpbHRlckF1eGlsaWFyeUVsZW1lbnRzKGl0ZW1zKSB7XG4gIGxldCBhdXhpbGlhcnlUYWdzID0gW1xuICAgICdsaW5rJyxcbiAgICAnc2NyaXB0JyxcbiAgICAnc3R5bGUnLFxuICAgICd0ZW1wbGF0ZSdcbiAgXTtcbiAgcmV0dXJuIFtdLmZpbHRlci5jYWxsKGl0ZW1zLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgcmV0dXJuICFpdGVtLmxvY2FsTmFtZSB8fCBhdXhpbGlhcnlUYWdzLmluZGV4T2YoaXRlbS5sb2NhbE5hbWUpIDwgMDtcbiAgfSk7XG59XG5cblxuLyoqXG4gKiBGaXJlcyB3aGVuIHRoZSBpdGVtcyBpbiB0aGUgbGlzdCBjaGFuZ2UuXG4gKlxuICogQG1lbWJlcm9mIENvbnRlbnRBc0l0ZW1zXG4gKiBAZXZlbnQgaXRlbXMtY2hhbmdlZFxuICovXG4iLCIvKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIERpcmVjdGlvblNlbGVjdGlvbi4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIG1hcHMgZGlyZWN0aW9uIHNlbWFudGljcyAoZ29MZWZ0LCBnb1JpZ2h0LCBldGMuKSB0byBzZWxlY3Rpb25cbiAgICogc2VtYW50aWNzIChzZWxlY3RQcmV2aW91cywgc2VsZWN0TmV4dCwgZXRjLikuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gY2FuIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGVcbiAgICogW0tleWJvYXJkRGlyZWN0aW9uXShLZXlib2FyZERpcmVjdGlvbi5tZCkgbWl4aW4gKHdoaWNoIG1hcHMga2V5Ym9hcmQgZXZlbnRzXG4gICAqIHRvIGRpcmVjdGlvbnMpIGFuZCBhIG1peGluIHRoYXQgaGFuZGxlcyBzZWxlY3Rpb24gbGlrZVxuICAgKiBbU2luZ2xlU2VsZWN0aW9uXShTaW5nbGVTZWxlY3Rpb24ubWQpLlxuICAgKi9cbiAgY2xhc3MgRGlyZWN0aW9uU2VsZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBnb0Rvd24oKSB7XG4gICAgICBpZiAoc3VwZXIuZ29Eb3duKSB7IHN1cGVyLmdvRG93bigpOyB9XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3ROZXh0KCk7XG4gICAgfVxuXG4gICAgZ29FbmQoKSB7XG4gICAgICBpZiAoc3VwZXIuZ29FbmQpIHsgc3VwZXIuZ29FbmQoKTsgfVxuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0TGFzdCgpO1xuICAgIH1cblxuICAgIGdvTGVmdCgpIHtcbiAgICAgIGlmIChzdXBlci5nb0xlZnQpIHsgc3VwZXIuZ29MZWZ0KCk7IH1cbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdFByZXZpb3VzKCk7XG4gICAgfVxuXG4gICAgZ29SaWdodCgpIHtcbiAgICAgIGlmIChzdXBlci5nb1JpZ2h0KSB7IHN1cGVyLmdvUmlnaHQoKTsgfVxuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0TmV4dCgpO1xuICAgIH1cblxuICAgIGdvU3RhcnQoKSB7XG4gICAgICBpZiAoc3VwZXIuZ29TdGFydCkgeyBzdXBlci5nb1N0YXJ0KCk7IH1cbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdEZpcnN0KCk7XG4gICAgfVxuXG4gICAgZ29VcCgpIHtcbiAgICAgIGlmIChzdXBlci5nb1VwKSB7IHN1cGVyLmdvVXAoKTsgfVxuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0UHJldmlvdXMoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IGltcGxlbWVudGF0aW9uLiBUaGlzIHdpbGwgdHlwaWNhbGx5IGJlIGhhbmRsZWQgYnkgb3RoZXIgbWl4aW5zLlxuICAgIGdldCBzZWxlY3RlZEZyYWN0aW9uKCkge1xuICAgICAgcmV0dXJuIHN1cGVyLnNlbGVjdGVkRnJhY3Rpb247XG4gICAgfVxuICAgIHNldCBzZWxlY3RlZEZyYWN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoJ3NlbGVjdGVkRnJhY3Rpb24nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkRnJhY3Rpb24gPSB2YWx1ZTsgfVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgaW1wbGVtZW50YXRpb24uIFRoaXMgd2lsbCB0eXBpY2FsbHkgYmUgaGFuZGxlZCBieSBvdGhlciBtaXhpbnMuXG4gICAgc2VsZWN0Rmlyc3QoKSB7XG4gICAgICBpZiAoc3VwZXIuc2VsZWN0Rmlyc3QpIHsgcmV0dXJuIHN1cGVyLnNlbGVjdEZpcnN0KCk7IH1cbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IGltcGxlbWVudGF0aW9uLiBUaGlzIHdpbGwgdHlwaWNhbGx5IGJlIGhhbmRsZWQgYnkgb3RoZXIgbWl4aW5zLlxuICAgIHNlbGVjdExhc3QoKSB7XG4gICAgICBpZiAoc3VwZXIuc2VsZWN0TGFzdCkgeyByZXR1cm4gc3VwZXIuc2VsZWN0TGFzdCgpOyB9XG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCBpbXBsZW1lbnRhdGlvbi4gVGhpcyB3aWxsIHR5cGljYWxseSBiZSBoYW5kbGVkIGJ5IG90aGVyIG1peGlucy5cbiAgICBzZWxlY3ROZXh0KCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdE5leHQpIHsgcmV0dXJuIHN1cGVyLnNlbGVjdE5leHQoKTsgfVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgaW1wbGVtZW50YXRpb24uIFRoaXMgd2lsbCB0eXBpY2FsbHkgYmUgaGFuZGxlZCBieSBvdGhlciBtaXhpbnMuXG4gICAgc2VsZWN0UHJldmlvdXMoKSB7XG4gICAgICBpZiAoc3VwZXIuc2VsZWN0UHJldmlvdXMpIHsgcmV0dXJuIHN1cGVyLnNlbGVjdFByZXZpb3VzKCk7IH1cbiAgICB9XG5cbiAgICAvLyBNYXAgZHJhZyB0cmF2ZWwgZnJhY3Rpb24gdG8gc2VsZWN0aW9uIGZyYWN0aW9uLlxuICAgIGdldCB0cmF2ZWxGcmFjdGlvbigpIHtcbiAgICAgIHJldHVybiBzdXBlci50cmF2ZWxGcmFjdGlvbjtcbiAgICB9XG4gICAgc2V0IHRyYXZlbEZyYWN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoJ3RyYXZlbEZyYWN0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci50cmF2ZWxGcmFjdGlvbiA9IHZhbHVlOyB9XG4gICAgICB0aGlzLnNlbGVjdGVkRnJhY3Rpb24gPSB2YWx1ZTtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBEaXJlY3Rpb25TZWxlY3Rpb247XG59O1xuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBEaXN0cmlidXRlZENoaWxkcmVuLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggZGVmaW5lcyBoZWxwZXJzIGZvciBhY2Nlc3NpbmcgYSBjb21wb25lbnQncyBkaXN0cmlidXRlZFxuICAgKiBjaGlsZHJlbiBhcyBhIGZsYXR0ZW5lZCBhcnJheSBvciBzdHJpbmcuXG4gICAqXG4gICAqIFRoZSBzdGFuZGFyZCBET00gQVBJIHByb3ZpZGVzIHNldmVyYWwgd2F5cyBvZiBhY2Nlc3NpbmcgY2hpbGQgY29udGVudDpcbiAgICogYGNoaWxkcmVuYCwgYGNoaWxkTm9kZXNgLCBhbmQgYHRleHRDb250ZW50YC4gTm9uZSBvZiB0aGVzZSBmdW5jdGlvbnMgYXJlXG4gICAqIFNoYWRvdyBET00gYXdhcmUuIFRoaXMgbWl4aW4gZGVmaW5lcyB2YXJpYXRpb25zIG9mIHRob3NlIGZ1bmN0aW9ucyB0aGF0XG4gICAqICphcmUqIFNoYWRvdyBET00gYXdhcmUuXG4gICAqXG4gICAqIEV4YW1wbGU6IHlvdSBjcmVhdGUgYSBjb21wb25lbnQgYDxjb3VudC1jaGlsZHJlbj5gIHRoYXQgZGlzcGxheXMgYSBudW1iZXJcbiAgICogZXF1YWwgdG8gdGhlIG51bWJlciBvZiBjaGlsZHJlbiBwbGFjZWQgaW5zaWRlIHRoYXQgY29tcG9uZW50LiBJZiBzb21lb25lXG4gICAqIGluc3RhbnRpYXRlcyB5b3VyIGNvbXBvbmVudCBsaWtlOlxuICAgKlxuICAgKiAgICAgPGNvdW50LWNoaWxkcmVuPlxuICAgKiAgICAgICA8ZGl2PjwvZGl2PlxuICAgKiAgICAgICA8ZGl2PjwvZGl2PlxuICAgKiAgICAgICA8ZGl2PjwvZGl2PlxuICAgKiAgICAgPC9jb3VudC1jaGlsZHJlbj5cbiAgICpcbiAgICogVGhlbiB0aGUgY29tcG9uZW50IHNob3VsZCBzaG93IFwiM1wiLCBiZWNhdXNlIHRoZXJlIGFyZSB0aHJlZSBjaGlsZHJlbi4gVG9cbiAgICogY2FsY3VsYXRlIHRoZSBudW1iZXIgb2YgY2hpbGRyZW4sIHRoZSBjb21wb25lbnQgY2FuIGp1c3QgY2FsY3VsYXRlXG4gICAqIGB0aGlzLmNoaWxkcmVuLmxlbmd0aGAuIEhvd2V2ZXIsIHN1cHBvc2Ugc29tZW9uZSBpbnN0YW50aWF0ZXMgeW91clxuICAgKiBjb21wb25lbnQgaW5zaWRlIG9uZSBvZiB0aGVpciBvd24gY29tcG9uZW50cywgYW5kIHB1dHMgYSBgPHNsb3Q+YCBlbGVtZW50XG4gICAqIGluc2lkZSB5b3VyIGNvbXBvbmVudDpcbiAgICpcbiAgICogICAgIDxjb3VudC1jaGlsZHJlbj5cbiAgICogICAgICAgPHNsb3Q+PC9zbG90PlxuICAgKiAgICAgPC9jb3VudC1jaGlsZHJlbj5cbiAgICpcbiAgICogSWYgeW91ciBjb21wb25lbnQgb25seSBsb29rcyBhdCBgdGhpcy5jaGlsZHJlbmAsIGl0IHdpbGwgYWx3YXlzIHNlZSBleGFjdGx5XG4gICAqIG9uZSBjaGlsZCDigJTCoHRoZSBgPHNsb3Q+YCBlbGVtZW50LiBCdXQgdGhlIHVzZXIgbG9va2luZyBhdCB0aGUgcGFnZSB3aWxsXG4gICAqICpzZWUqIGFueSBub2RlcyBkaXN0cmlidXRlZCB0byB0aGF0IHNsb3QuIFRvIG1hdGNoIHdoYXQgdGhlIHVzZXIgc2VlcywgeW91clxuICAgKiBjb21wb25lbnQgc2hvdWxkIGV4cGFuZCBhbnkgYDxzbG90PmAgZWxlbWVudHMgaXQgY29udGFpbnMuXG4gICAqXG4gICAqIFRoYXQgaXMgdGhlIHByb2JsZW0gdGhpcyBtaXhpbiBzb2x2ZXMuIEFmdGVyIGFwcGx5aW5nIHRoaXMgbWl4aW4sIHlvdXJcbiAgICogY29tcG9uZW50IGNvZGUgaGFzIGFjY2VzcyB0byBgdGhpcy5kaXN0cmlidXRlZENoaWxkcmVuYCwgd2hvc2UgYGxlbmd0aGBcbiAgICogd2lsbCByZXR1cm4gdGhlIHRvdGFsIG51bWJlciBvZiBhbGwgY2hpbGRyZW4gZGlzdHJpYnV0ZWQgdG8geW91ciBjb21wb25lbnRcbiAgICogaW4gdGhlIGNvbXBvc2VkIHRyZWUuXG4gICAqXG4gICAqIE5vdGU6IFRoZSBsYXRlc3QgQ3VzdG9tIEVsZW1lbnRzIEFQSSBkZXNpZ24gY2FsbHMgZm9yIGEgbmV3IGZ1bmN0aW9uLFxuICAgKiBgZ2V0QXNzaWduZWROb2Rlc2AgdGhhdCB0YWtlcyBhbiBvcHRpb25hbCBgZGVlcGAgcGFyYW1ldGVyLCB0aGF0IHdpbGwgc29sdmVcbiAgICogdGhpcyBwcm9ibGVtIGF0IHRoZSBBUEkgbGV2ZWwuXG4gICAqL1xuICBjbGFzcyBEaXN0cmlidXRlZENoaWxkcmVuIGV4dGVuZHMgYmFzZSB7XG5cbiAgICAvKipcbiAgICAgKiBBbiBpbi1vcmRlciBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuLCBleHBhbmRpbmcgYW55IHNsb3QgZWxlbWVudHMuIExpa2UgdGhlXG4gICAgICogc3RhbmRhcmQgY2hpbGRyZW4gcHJvcGVydHksIHRoaXMgc2tpcHMgdGV4dCBub2Rlcy5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudFtdfVxuICAgICAqL1xuICAgIGdldCBkaXN0cmlidXRlZENoaWxkcmVuKCkge1xuICAgICAgcmV0dXJuIGV4cGFuZENvbnRlbnRFbGVtZW50cyh0aGlzLmNoaWxkcmVuLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQW4gaW4tb3JkZXIgY29sbGVjdGlvbiBvZiBjaGlsZCBub2RlcywgZXhwYW5kaW5nIGFueSBzbG90IGVsZW1lbnRzLiBMaWtlXG4gICAgICogdGhlIHN0YW5kYXJkIGNoaWxkTm9kZXMgcHJvcGVydHksIHRoaXMgaW5jbHVkZXMgdGV4dCBub2Rlcy5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtOb2RlW119XG4gICAgICovXG4gICAgZ2V0IGRpc3RyaWJ1dGVkQ2hpbGROb2RlcygpIHtcbiAgICAgIHJldHVybiBleHBhbmRDb250ZW50RWxlbWVudHModGhpcy5jaGlsZE5vZGVzLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29uY2F0ZW5hdGVkIHRleHQgY29udGVudCBvZiBhbGwgY2hpbGQgbm9kZXMsIGV4cGFuZGluZyBhbnkgc2xvdFxuICAgICAqIGVsZW1lbnRzLlxuICAgICAqXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXQgZGlzdHJpYnV0ZWRUZXh0Q29udGVudCgpIHtcbiAgICAgIGxldCBzdHJpbmdzID0gdGhpcy5kaXN0cmlidXRlZENoaWxkTm9kZXMubWFwKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICAgIHJldHVybiBjaGlsZC50ZXh0Q29udGVudDtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHN0cmluZ3Muam9pbignJyk7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gRGlzdHJpYnV0ZWRDaGlsZHJlbjtcbn07XG5cblxuLypcbiAqIEdpdmVuIGEgYXJyYXkgb2Ygbm9kZXMsIHJldHVybiBhIG5ldyBhcnJheSB3aXRoIGFueSBjb250ZW50IGVsZW1lbnRzIGV4cGFuZGVkXG4gKiB0byB0aGUgbm9kZXMgZGlzdHJpYnV0ZWQgdG8gdGhhdCBjb250ZW50IGVsZW1lbnQuIFRoaXMgcnVsZSBpcyBhcHBsaWVkXG4gKiByZWN1cnNpdmVseS5cbiAqXG4gKiBJZiBpbmNsdWRlVGV4dE5vZGVzIGlzIHRydWUsIHRleHQgbm9kZXMgd2lsbCBiZSBpbmNsdWRlZCwgYXMgaW4gdGhlXG4gKiBzdGFuZGFyZCBjaGlsZE5vZGVzIHByb3BlcnR5OyBieSBkZWZhdWx0LCB0aGlzIHNraXBzIHRleHQgbm9kZXMsIGxpa2UgdGhlXG4gKiBzdGFuZGFyZCBjaGlsZHJlbiBwcm9wZXJ0eS5cbiAqL1xuZnVuY3Rpb24gZXhwYW5kQ29udGVudEVsZW1lbnRzKG5vZGVzLCBpbmNsdWRlVGV4dE5vZGVzKSB7XG4gIGxldCBleHBhbmRlZCA9IEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChub2Rlcywgbm9kZSA9PiB7XG4gICAgLy8gV2Ugd2FudCB0byBzZWUgaWYgdGhlIG5vZGUgaXMgYW4gaW5zdGFuY2VvZiBIVE1MU2xvdEVMZW1lbnQsIGJ1dFxuICAgIC8vIHRoYXQgY2xhc3Mgd29uJ3QgZXhpc3QgaWYgdGhlIGJyb3dzZXIgdGhhdCBkb2Vzbid0IHN1cHBvcnQgbmF0aXZlXG4gICAgLy8gU2hhZG93IERPTSBhbmQgaWYgdGhlIFNoYWRvdyBET00gcG9seWZpbGwgaGFzbid0IGJlZW4gbG9hZGVkLiBJbnN0ZWFkLFxuICAgIC8vIHdlIGRvIGEgc2ltcGxpc3RpYyBjaGVjayB0byBzZWUgaWYgdGhlIHRhZyBuYW1lIGlzIFwic2xvdFwiLlxuICAgIGlmIChub2RlIGluc3RhbmNlb2YgSFRNTFNsb3RFbGVtZW50KSB7XG4gICAgICAvLyBVc2UgdGhlIG5vZGVzIGFzc2lnbmVkIHRvIHRoaXMgbm9kZSBpbnN0ZWFkLlxuICAgICAgbGV0IGFzc2lnbmVkTm9kZXMgPSBub2RlLmFzc2lnbmVkTm9kZXMoeyBmbGF0dGVuOiB0cnVlIH0pO1xuICAgICAgcmV0dXJuIGFzc2lnbmVkTm9kZXMgP1xuICAgICAgICBleHBhbmRDb250ZW50RWxlbWVudHMoYXNzaWduZWROb2RlcywgaW5jbHVkZVRleHROb2RlcykgOlxuICAgICAgICBbXTtcbiAgICB9IGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgLy8gUGxhaW4gZWxlbWVudDsgdXNlIGFzIGlzLlxuICAgICAgcmV0dXJuIFtub2RlXTtcbiAgICB9IGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBUZXh0ICYmIGluY2x1ZGVUZXh0Tm9kZXMpIHtcbiAgICAgIC8vIFRleHQgbm9kZS5cbiAgICAgIHJldHVybiBbbm9kZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIENvbW1lbnQsIHByb2Nlc3NpbmcgaW5zdHJ1Y3Rpb24sIGV0Yy47IHNraXAuXG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9KTtcbiAgbGV0IGZsYXR0ZW5lZCA9IFtdLmNvbmNhdCguLi5leHBhbmRlZCk7XG4gIHJldHVybiBmbGF0dGVuZWQ7XG59XG4iLCJpbXBvcnQgbWljcm90YXNrIGZyb20gJy4vbWljcm90YXNrJztcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBkZWZpbmVzIGEgY29tcG9uZW50J3MgY29udGVudCBhcyBpdHMgY2hpbGRyZW4sIGV4cGFuZGluZyBhbnlcbiAgICogbm9kZXMgZGlzdHJpYnV0ZWQgdG8gdGhlIGNvbXBvbmVudCdzIHNsb3RzLlxuICAgKlxuICAgKiBUaGlzIGFsc28gcHJvdmlkZXMgbm90aWZpY2F0aW9uIG9mIGNoYW5nZXMgdG8gYSBjb21wb25lbnQncyBjb250ZW50LiBJdFxuICAgKiB3aWxsIGludm9rZSBhIGBjb250ZW50Q2hhbmdlZGAgbWV0aG9kIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBmaXJzdFxuICAgKiBpbnN0YW50aWF0ZWQsIGFuZCB3aGVuZXZlciBpdHMgZGlzdHJpYnV0ZWQgY2hpbGRyZW4gY2hhbmdlLiBUaGlzIGlzIGFuXG4gICAqIGVhc3kgd2F5IHRvIHNhdGlzZnkgdGhlIEdvbGQgU3RhbmRhcmQgY2hlY2tsaXN0IGl0ZW0gZm9yIG1vbml0b3JpbmdcbiAgICogW0NvbnRlbnQgQ2hhbmdlc10oaHR0cHM6Ly9naXRodWIuY29tL3dlYmNvbXBvbmVudHMvZ29sZC1zdGFuZGFyZC93aWtpL0NvbnRlbnQtQ2hhbmdlcykuXG4gICAqXG4gICAqIEV4YW1wbGU6XG4gICAqXG4gICAqIGBgYFxuICAgKiBsZXQgYmFzZSA9IERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQoRGlzdHJpYnV0ZWRDaGlsZHJlbihIVE1MRWxlbWVudCkpO1xuICAgKiBjbGFzcyBDb3VudGluZ0VsZW1lbnQgZXh0ZW5kcyBiYXNlIHtcbiAgICpcbiAgICogICBjb25zdHJ1Y3RvcigpIHtcbiAgICogICAgIHN1cGVyKCk7XG4gICAqICAgICBsZXQgcm9vdCA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICAgKiAgICAgcm9vdC5pbm5lckhUTUwgPSBgPHNsb3Q+PC9zbG90PmA7XG4gICAqICAgfVxuICAgKlxuICAgKiAgIGNvbnRlbnRDaGFuZ2VkKCkge1xuICAgKiAgICAgLy8gQ291bnQgdGhlIGNvbXBvbmVudCdzIGNoaWxkcmVuLCBib3RoIGluaXRpYWxseSBhbmQgd2hlbiBjaGFuZ2VkLlxuICAgKiAgICAgdGhpcy5jb3VudCA9IHRoaXMuZGlzdHJpYnV0ZWRDaGlsZHJlbi5sZW5ndGg7XG4gICAqICAgfVxuICAgKlxuICAgKiB9XG4gICAqIGBgYFxuICAgKlxuICAgKiBUaGlzIG1peGluIGlzIGludGVuZGVkIGZvciB1c2Ugd2l0aCB0aGVcbiAgICogW0Rpc3RyaWJ1dGVkQ2hpbGRyZW5dKERpc3RyaWJ1dGVkQ2hpbGRyZW4ubWQpIG1peGluLiBTZWUgdGhhdCBtaXhpbiBmb3IgYVxuICAgKiBkaXNjdXNzaW9uIG9mIGhvdyB0aGF0IHdvcmtzLiBUaGlzIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQgbWl4aW5cbiAgICogcHJvdmlkZXMgYW4gZWFzeSB3YXkgb2YgZGVmaW5pbmcgdGhlIFwiY29udGVudFwiIG9mIGEgY29tcG9uZW50IGFzIHRoZVxuICAgKiBjb21wb25lbnQncyBkaXN0cmlidXRlZCBjaGlsZHJlbi4gVGhhdCBpbiB0dXJuIGxldHMgbWl4aW5zIGxpa2VcbiAgICogW0NvbnRlbnRBc0l0ZW1zXShDb250ZW50QXNJdGVtcy5tZCkgbWFuaXB1bGF0ZSB0aGUgY2hpbGRyZW4gYXMgbGlzdCBpdGVtcy5cbiAgICovXG4gIGNsYXNzIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcblxuICAgICAgaWYgKHRoaXMuc2hhZG93Um9vdCkge1xuICAgICAgICAvLyBMaXN0ZW4gdG8gY2hhbmdlcyBvbiBhbGwgc2xvdHMuXG4gICAgICAgIGxldCBzbG90cyA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yQWxsKCdzbG90Jyk7XG4gICAgICAgIHNsb3RzLmZvckVhY2goc2xvdCA9PiBzbG90LmFkZEV2ZW50TGlzdGVuZXIoJ3Nsb3RjaGFuZ2UnLCBldmVudCA9PiB7XG4gICAgICAgICAgdGhpcy5jb250ZW50Q2hhbmdlZCgpO1xuICAgICAgICB9KSk7XG4gICAgICB9XG5cbiAgICAgIC8vIE1ha2UgYW4gaW5pdGlhbCBjYWxsIHRvIGNvbnRlbnRDaGFuZ2VkKCkgc28gdGhhdCB0aGUgY29tcG9uZW50IGNhbiBkb1xuICAgICAgLy8gaW5pdGlhbGl6YXRpb24gdGhhdCBpdCBub3JtYWxseSBkb2VzIHdoZW4gY29udGVudCBjaGFuZ2VzLlxuICAgICAgLy9cbiAgICAgIC8vIFRoaXMgd2lsbCBpbnZva2UgY29udGVudENoYW5nZWQoKSBoYW5kbGVycyBpbiBvdGhlciBtaXhpbnMuIEluIG9yZGVyXG4gICAgICAvLyB0aGF0IHRob3NlIG1peGlucyBoYXZlIGEgY2hhbmNlIHRvIGNvbXBsZXRlIHRoZWlyIG93biBpbml0aWFsaXphdGlvbixcbiAgICAgIC8vIHdlIGFkZCB0aGUgY29udGVudENoYW5nZWQoKSBjYWxsIHRvIHRoZSBtaWNyb3Rhc2sgcXVldWUuXG4gICAgICBtaWNyb3Rhc2soKCkgPT4gdGhpcy5jb250ZW50Q2hhbmdlZCgpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIGNvbnRlbnRzIG9mIHRoZSBjb21wb25lbnQgKGluY2x1ZGluZyBkaXN0cmlidXRlZFxuICAgICAqIGNoaWxkcmVuKSBoYXZlIGNoYW5nZWQuXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBhbHNvIGludm9rZWQgd2hlbiBhIGNvbXBvbmVudCBpcyBmaXJzdCBpbnN0YW50aWF0ZWQ7IHRoZVxuICAgICAqIGNvbnRlbnRzIGhhdmUgZXNzZW50aWFsbHkgXCJjaGFuZ2VkXCIgZnJvbSBiZWluZyBub3RoaW5nLiBUaGlzIGFsbG93cyB0aGVcbiAgICAgKiBjb21wb25lbnQgdG8gcGVyZm9ybSBpbml0aWFsIHByb2Nlc3Npbmcgb2YgaXRzIGNoaWxkcmVuLlxuICAgICAqL1xuICAgIGNvbnRlbnRDaGFuZ2VkKCkge1xuICAgICAgaWYgKHN1cGVyLmNvbnRlbnRDaGFuZ2VkKSB7IHN1cGVyLmNvbnRlbnRDaGFuZ2VkKCk7IH1cbiAgICAgIGxldCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnY29udGVudC1jaGFuZ2VkJyk7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBjb250ZW50IG9mIHRoaXMgY29tcG9uZW50LCBkZWZpbmVkIHRvIGJlIHRoZSBmbGF0dGVuZWQgYXJyYXkgb2ZcbiAgICAgKiBjaGlsZHJlbiBkaXN0cmlidXRlZCB0byB0aGUgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50W119XG4gICAgICovXG4gICAgZ2V0IGNvbnRlbnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5kaXN0cmlidXRlZENoaWxkcmVuO1xuICAgIH1cbiAgICBzZXQgY29udGVudCh2YWx1ZSkge1xuICAgICAgaWYgKCdjb250ZW50JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5jb250ZW50ID0gdmFsdWU7IH1cbiAgICAgIC8vIFRPRE86IFNldCB0aGUgY2hpbGRyZW4gdG8gdGhlIGdpdmVuIHZhbHVlICh3aGljaCBzaG91bGQgYmUgYW4gYXJyYXkgb2ZcbiAgICAgIC8vIGVsZW1lbnRzKT9cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGV2ZW50IGlzIHJhaXNlZCB3aGVuIHRoZSBjb21wb25lbnQncyBjb250ZW50cyAoaW5jbHVkaW5nIGRpc3RyaWJ1dGVkXG4gICAgICogY2hpbGRyZW4pIGhhdmUgY2hhbmdlZC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50XG4gICAgICogQGV2ZW50IGNvbnRlbnQtY2hhbmdlZFxuICAgICAqL1xuICB9XG5cbiAgcmV0dXJuIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQ7XG59O1xuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuL2NyZWF0ZVN5bWJvbCc7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IHNlbGVjdGVkRnJhY3Rpb25TeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3NlbGVjdGVkRnJhY3Rpb24nKTtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIEZyYWN0aW9uYWxTZWxlY3Rpb24uICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXhpbihiYXNlKSB7XG5cbiAgLyoqXG4gICAqIEFkZHMgc3VwcG9ydCBmb3IgZnJhY3Rpb25hbCBzZWxlY3Rpb246IHRyZWF0aW5nIGEgc2VsZWN0aW9uIGFzIGEgcmVhbFxuICAgKiBudW1iZXIgdGhhdCBjb21iaW5lcyBhbiBpbnRlZ2VyIHBvcnRpb24gKGFuIGluZGV4IGludG8gYSBsaXN0KSwgYW5kIGFcbiAgICogZnJhY3Rpb24gKGluZGljYXRpbmcgaG93IGZhciBvZiB0aGUgd2F5IHdlIGFyZSB0byB0aGUgbmV4dCBvciBwcmV2aW91c1xuICAgKiBpdGVtKS5cbiAgICpcbiAgICogVGhpcyBpcyB1c2VmdWwgaW4gY29tcG9uZW50cyB0aGF0IHN1cHBvcnQgaW5jcmVtZW50YWwgb3BlcmF0aW9ucyBkdXJpbmdcbiAgICogZHJhZ2dpbmcgYW5kIHN3aXBpbmcuIEV4YW1wbGU6IGEgY2Fyb3VzZWwgY29tcG9uZW50IGhhcyBzZXZlcmFsIGl0ZW1zLCBhbmQgdGhlXG4gICAqIGN1cnJlbnRseSBzZWxlY3RlZCBpdGVtIGlzIGl0ZW0gMy4gVGhlIHVzZXIgYmVnaW5zIHN3aXBpbmcgdG8gdGhlIGxlZnQsXG4gICAqIG1vdmluZyB0b3dhcmRzIHNlbGVjdGluZyBpdGVtIDQuIEhhbGZ3YXkgdGhyb3VnaCB0aGlzIG9wZXJhdGlvbiwgdGhlXG4gICAqIGZyYWN0aW9uYWwgc2VsZWN0aW9uIHZhbHVlIGlzIDMuNS5cbiAgICpcbiAgICogVGhpcyB2YWx1ZSBwZXJtaXRzIGNvbW11bmljYXRpb24gYmV0d2VlbiBtaXhpbnMgbGlrZVxuICAgKiBbU3dpcGVEaXJlY3Rpb25dKC4vU3dpcGVEaXJlY3Rpb24ubWQpIGFuZFxuICAgKiBbVHJhY2twYWREaXJlY3Rpb25dKC4vVHJhY2twYWREaXJlY3Rpb24ubWQpLCB3aGljaCBnZW5lcmF0ZSBmcmFjdGlvbmFsXG4gICAqIHNlbGVjdGlvbiB2YWx1ZXMsIGFuZCBtaXhpbnMgbGlrZVxuICAgKiBbU2VsZWN0aW9uQW5pbWF0aW9uXSguL1NlbGVjdGlvbkFuaW1hdGlvbi5tZCksIHdoaWNoIGNhbiByZW5kZXIgc2VsZWN0aW9uXG4gICAqIGF0IGEgZnJhY3Rpb25hbCB2YWx1ZS5cbiAgICovXG4gIGNsYXNzIEZyYWN0aW9uYWxTZWxlY3Rpb24gZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKSB7IHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7IH1cbiAgICAgIHRoaXMuc2VsZWN0ZWRGcmFjdGlvbiA9IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSBmcmFjdGlvbmFsIHZhbHVlIGluZGljYXRpbmcgaG93IGZhciB0aGUgdXNlciBoYXMgY3VycmVudGx5IGFkdmFuY2VkIHRvXG4gICAgICogdGhlIG5leHQvcHJldmlvdXMgaXRlbS4gRS5nLiwgYSBgc2VsZWN0ZWRGcmFjdGlvbmAgb2YgMy41IGluZGljYXRlcyB0aGVcbiAgICAgKiB1c2VyIGlzIGhhbGZ3YXkgYmV0d2VlbiBpdGVtcyAzIGFuZCA0LlxuICAgICAqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0ZWRGcmFjdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzW3NlbGVjdGVkRnJhY3Rpb25TeW1ib2xdO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0ZWRGcmFjdGlvbih2YWx1ZSkge1xuICAgICAgdGhpc1tzZWxlY3RlZEZyYWN0aW9uU3ltYm9sXSA9IHZhbHVlO1xuICAgICAgaWYgKCdzZWxlY3RlZEZyYWN0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEZyYWN0aW9uID0gdmFsdWU7IH1cbiAgICAgIGxldCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnc2VsZWN0ZWQtZnJhY3Rpb24tY2hhbmdlZCcpO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBGcmFjdGlvbmFsU2VsZWN0aW9uO1xufVxuXG5cbm1peGluLmhlbHBlcnMgPSB7XG5cbiAgLypcbiAgICogRGFtcGVuIGEgc2VsZWN0aW9uIHRoYXQgZ29lcyBwYXN0IHRoZSBiZWdpbm5pbmcgb3IgZW5kIG9mIGEgbGlzdC4gVGhpcyBpc1xuICAgKiBnZW5lcmFsbHkgdXNlZCB0byBwcm9kdWNlIGEgdmlzdWFsIGVmZmVjdCBvZiB0ZW5zaW9uIGFzIHRoZSB1c2VyIHRyaWVzIHRvXG4gICAqIGdvIGZ1cnRoZXIgaW4gYSBkaXJlY3Rpb24gdGhhdCBoYXMgbm8gbW9yZSBpdGVtcy5cbiAgICpcbiAgICogRXhhbXBsZTogc3VwcG9zZSBgaXRlbUNvdW50YCBpcyA1LCBpbmRpY2F0aW5nIGEgbGlzdCBvZiA1IGl0ZW1zLiBUaGUgaW5kZXggb2ZcbiAgICogdGhlIGxhc3QgaXRlbSBpcyA0LiBJZiB0aGUgYHNlbGVjdGlvbmAgcGFyYW1ldGVyIGlzIDQuNSwgdGhlIHVzZXIgaXMgdHJ5aW5nXG4gICAqIHRvIGdvIHBhc3QgdGhpcyBsYXN0IGl0ZW0uIFdoZW4gYSBkYW1waW5nIGZ1bmN0aW9uIGlzIGFwcGxpZWQsIHRoZSByZXN1bHRpbmdcbiAgICogdmFsdWUgd2lsbCBiZSBsZXNzIHRoYW4gNC41ICh0aGUgYWN0dWFsIHZhbHVlIHdpbGwgYmUgNC4yNSkuIFdoZW4gdGhpc1xuICAgKiBzZWxlY3Rpb24gc3RhdGUgaXMgcmVuZGVyZWQsIHRoZSB1c2VyIHdpbGwgc2VlIHRoYXQsIGVhY2ggdW5pdCBkaXN0YW5jZSB0aGVcbiAgICogZHJhZyB0cmF2ZWxzIGhhcyBsZXNzIGFuZCBsZXNzIHZpc2libGUgZWZmZWN0LiBUaGlzIGlzIHBlcmNlaXZlZCBhcyB0ZW5zaW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2VsZWN0aW9uIC0gQSByZWFsIG51bWJlciBpbmRpY2F0aW5nIGEgc2VsZWN0aW9uIHBvc2l0aW9uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpdGVtQ291bnQgLSBBbiBpbnRlZ2VyIGZvciB0aGUgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZSBsaXN0XG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IEEgcmVhbCBudW1iZXIgcmVwcmVzZW50aW5nIHRoZSBkYW1wZWQgc2VsZWN0aW9uIHZhbHVlLlxuICAgKi9cbiAgZGFtcGVkU2VsZWN0aW9uKHNlbGVjdGlvbiwgaXRlbUNvdW50KSB7XG4gICAgbGV0IGRhbXBlZDtcbiAgICBsZXQgYm91bmQgPSBpdGVtQ291bnQgLSAxO1xuICAgIGlmIChzZWxlY3Rpb24gPCAwKSB7XG4gICAgICAvLyBUcnlpbmcgdG8gZ28gcGFzdCBiZWdpbm5pbmcgb2YgbGlzdC4gQXBwbHkgdGVuc2lvbiBmcm9tIHRoZSBsZWZ0IGVkZ2UuXG4gICAgICBkYW1wZWQgPSAtbWl4aW4uaGVscGVycy5kYW1waW5nKC1zZWxlY3Rpb24pO1xuICAgIH0gZWxzZSBpZiAoc2VsZWN0aW9uID49IGJvdW5kKSB7XG4gICAgICAvLyBUcnlpbmcgdG8gZ28gcGFzdCBlbmQgb2YgbGlzdC4gQXBwbHkgdGVuc2lvbiBmcm9tIHRoZSByaWdodCBlZGdlLlxuICAgICAgZGFtcGVkID0gYm91bmQgKyBtaXhpbi5oZWxwZXJzLmRhbXBpbmcoc2VsZWN0aW9uIC0gYm91bmQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBObyBkYW1waW5nIHJlcXVpcmVkLlxuICAgICAgZGFtcGVkID0gc2VsZWN0aW9uO1xuICAgIH1cbiAgICByZXR1cm4gZGFtcGVkO1xuICB9LFxuXG4gIC8qXG4gICAqIENhbGN1bGF0ZSBkYW1waW5nIGFzIGEgZnVuY3Rpb24gb2YgdGhlIGRpc3RhbmNlIHBhc3QgdGhlIG1pbmltdW0vbWF4aW11bVxuICAgKiB2YWx1ZXMuXG4gICAqXG4gICAqIFdlIHdhbnQgdG8gYXN5bXB0b3RpY2FsbHkgYXBwcm9hY2ggYW4gYWJzb2x1dGUgbWluaW11bSBvZiAxIHVuaXRcbiAgICogYmVsb3cvYWJvdmUgdGhlIGFjdHVhbCBtaW5pbXVtL21heGltdW0uIFRoaXMgcmVxdWlyZXMgY2FsY3VsYXRpbmcgYVxuICAgKiBoeXBlcmJvbGljIGZ1bmN0aW9uLlxuICAgKlxuICAgKiBTZWUgaHR0cDovL3d3dy53b2xmcmFtYWxwaGEuY29tL2lucHV0Lz9pPXkrJTNEKy0xJTJGJTI4eCUyQjElMjkrJTJCKzFcbiAgICogZm9yIHRoZSBvbmUgd2UgdXNlLiBUaGUgb25seSBwb3J0aW9uIG9mIHRoYXQgZnVuY3Rpb24gd2UgY2FyZSBhYm91dCBpcyB3aGVuXG4gICAqIHggaXMgemVybyBvciBncmVhdGVyLiBBbiBpbXBvcnRhbnQgY29uc2lkZXJhdGlvbiBpcyB0aGF0IHRoZSBjdXJ2ZSBiZVxuICAgKiB0YW5nZW50IHRvIHRoZSBkaWFnb25hbCBsaW5lIHg9eSBhdCAoMCwgMCkuIFRoaXMgZW5zdXJlcyBzbW9vdGggY29udGludWl0eVxuICAgKiB3aXRoIHRoZSBub3JtYWwgZHJhZyBiZWhhdmlvciwgaW4gd2hpY2ggdGhlIHZpc2libGUgc2xpZGluZyBpcyBsaW5lYXIgd2l0aFxuICAgKiB0aGUgZGlzdGFuY2UgdGhlIHRvdWNocG9pbnQgaGFzIGJlZW4gZHJhZ2dlZC5cbiAgICovXG4gIGRhbXBpbmcoeCkge1xuICAgIGxldCB5ID0gKC0xIC8gKHggKyAxKSkgKyAxO1xuICAgIHJldHVybiB5O1xuICB9LFxuXG4gIC8qXG4gICAqIFJldHVybiB0aGUgY3VycmVudCBmcmFjdGlvbmFsIHNlbGVjdGlvbiB2YWx1ZSBmb3IgdGhlIGdpdmVuIGVsZW1lbnQuXG4gICAqXG4gICAqIFRoaXMgc2ltcGx5IGFkZHMgdGhlIGVsZW1lbnQncyBgc2VsZWN0ZWRJbmRleGAgYW5kIGBzZWxlY3RlZEZyYWN0aW9uYFxuICAgKiBwcm9wZXJ0aWVzLlxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gQW4gZWxlbWVudCB0aGF0IHN1cHBvcnRzIHNlbGVjdGlvblxuICAgKi9cbiAgZWxlbWVudFNlbGVjdGlvbihlbGVtZW50KSB7XG4gICAgbGV0IHNlbGVjdGVkSW5kZXggPSBlbGVtZW50LnNlbGVjdGVkSW5kZXg7XG4gICAgaWYgKHNlbGVjdGVkSW5kZXggPCAwKSB7XG4gICAgICAvLyBObyBzZWxlY3Rpb25cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHNlbGVjdGVkRnJhY3Rpb24gPSBlbGVtZW50LnNlbGVjdGVkRnJhY3Rpb24gfHwgMDtcbiAgICByZXR1cm4gc2VsZWN0ZWRJbmRleCArIHNlbGVjdGVkRnJhY3Rpb247XG4gIH0sXG5cbiAgLypcbiAgICogQnJlYWtzIGEgZnJhY3Rpb25hbCBzZWxlY3Rpb24gaW50byBpdHMgaW50ZWdlciBhbmQgZnJhY3Rpb25hbCBwYXJ0cy5cbiAgICpcbiAgICogRXhhbXBsZTogaWYgcGFzc2VkIDMuNSwgdGhpcyByZXR1cm5zIHsgaW5kZXg6IDMsIGZyYWN0aW9uOiA1IH0uXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzZWxlY3Rpb24g4oCTwqBBIHJlYWwgbnVtYmVyIHJlcHJlc2VudGluZyBhIHNlbGVjdGlvbiBwb2ludFxuICAgKiBAcmV0dXJucyB7b2JqZWN0fSAtIEFuIG9iamVjdCB3aXRoIGFuIGBpbmRleGAgcHJvcGVydHkgaG9sZGluZyB0aGVcbiAgICogc2VsZWN0aW9uJ3MgaW50ZWdlciBjb21wb25lbnQsIGFuZCBhIGBmcmFjdGlvbmAgcHJvcGVydHkgaG9sZGluZyB0aGVcbiAgICogc2VsZWN0aW9uJ3MgZnJhY3Rpb25hbCBjb21wb25lbnQuXG4gICAqL1xuICBzZWxlY3Rpb25QYXJ0cyhzZWxlY3Rpb24pIHtcbiAgICAvLyBTdHVwaWQgSUUgZG9lc24ndCBoYXZlIE1hdGgudHJ1bmMuXG4gICAgLy8gbGV0IGluZGV4ID0gTWF0aC50cnVuYyhzZWxlY3Rpb24pO1xuICAgIGxldCBpbmRleCA9IHNlbGVjdGlvbiA8IDAgPyBNYXRoLmNlaWwoc2VsZWN0aW9uKSA6IE1hdGguZmxvb3Ioc2VsZWN0aW9uKTtcbiAgICBsZXQgZnJhY3Rpb24gPSBzZWxlY3Rpb24gLSBpbmRleDtcbiAgICByZXR1cm4geyBpbmRleCwgZnJhY3Rpb24gfTtcbiAgfSxcblxuICAvKlxuICAgKiBSZXR1cm5zIGEgZnJhY3Rpb25hbCBzZWxlY3Rpb24gcG9pbnQgYWZ0ZXIgYWNjb3VudGluZyBmb3Igd3JhcHBpbmcsIGVuc3VyaW5nXG4gICAqIHRoYXQgdGhlIGludGVnZXIgcG9ydGlvbiBvZiB0aGUgc2VsZWN0aW9uIHN0YXlzIGJldHdlZW4gMCBhbmQgYGl0ZW1Db3VudGAtMS5cbiAgICogVGhhdCBpcywgdGhlIGludGVnZXIgcG9ydGlvbiB3aWxsIGFsd2F5cyBiZSBhIHZhbGlkIGluZGV4IGludG8gdGhlIGxpc3QuXG4gICAqXG4gICAqIEV4YW1wbGUgb2Ygd3JhcHBpbmcgcGFzdCB0aGUgZW5kIG9mIHRoZSBsaXN0OiBpZiBgc2VsZWN0aW9uYCBpcyA1LjUgYW5kXG4gICAqIGBpdGVtQ291bnRgIGlzIDUsIHRoaXMgcmV0dXJucyAwLjUuIEV4YW1wbGUgb2Ygd3JhcHBpbmcgcGFzdCB0aGUgYmVnaW5uaW5nIG9mXG4gICAqIHRoZSBsaXN0OiBpZiBgc2VsZWN0aW9uYCBpcyAwLjUgYW5kIGBpdGVtQ291bnRgIGlzIDUsIHRoaXMgcmV0dXJucyA0LjUuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzZWxlY3Rpb24gLSBBIHJlYWwgbnVtYmVyIHJlcHJlc2VudGluZyBhIHNlbGVjdGlvbiBwb2ludFxuICAgKiBAcGFyYW0ge251bWJlcn0gaXRlbUNvdW50IC0gVGhlIG51bWJlciBvZiBpdGVtcyBpbiB0aGUgbGlzdFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSAtIFRoZSByZXN1bHQgb2Ygd3JhcHBpbmcgdGhlIHNlbGVjdGlvbiBwb2ludFxuICAgKi9cbiAgd3JhcHBlZFNlbGVjdGlvbihzZWxlY3Rpb24sIGl0ZW1Db3VudCkge1xuICAgIC8vIEhhbmRsZXMgcG9zc2liaWxpdHkgb2YgbmVnYXRpdmUgbW9kLlxuICAgIC8vIFNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xODYxODI1MC83NjQ3MlxuICAgIHJldHVybiAoKHNlbGVjdGlvbiAlIGl0ZW1Db3VudCkgKyBpdGVtQ291bnQpICUgaXRlbUNvdW50O1xuICB9LFxuXG4gIC8qXG4gICAqIFJldHVybiB0aGUgcGFydHMgb2YgYSBzZWxlY3Rpb24sIGZpcnN0IHdyYXBwaW5nIGlmIG5lY2Vzc2FyeS5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNlbGVjdGlvbiDigJMgQSByZWFsIG51bWJlciByZXByZXNlbnRpbmcgYSBzZWxlY3Rpb24gcG9pbnRcbiAgICogQHBhcmFtIHtudW1iZXJ9IGl0ZW1Db3VudCAtIFRoZSBudW1iZXIgb2YgaXRlbXMgaW4gdGhlIGxpc3RcbiAgICogQHBhcmFtIHtib29sZWFufSB3cmFwIOKAkyBUcnVlIGlmIHRoZSBzZWxlY3Rpb24gc2hvdWxkIHdyYXAgdG8gc3RheSB3aXRoaW4gdGhlXG4gICAqIGxpc3RcbiAgICogQHJldHVybnMge29iamVjdH0g4oCTIFRoZSBwYXJ0cyBvZiB0aGUgc2VsZWN0aW9uLCB1c2luZyB0aGUgc2FtZSBmb3JtYXQgYXNcbiAgICogYHNlbGVjdGlvblBhcnRzYC5cbiAgICovXG4gIHdyYXBwZWRTZWxlY3Rpb25QYXJ0cyhzZWxlY3Rpb24sIGl0ZW1Db3VudCwgd3JhcCkge1xuICAgIGlmICh3cmFwKSB7XG4gICAgICBzZWxlY3Rpb24gPSBtaXhpbi5oZWxwZXJzLndyYXBwZWRTZWxlY3Rpb24oc2VsZWN0aW9uLCBpdGVtQ291bnQpO1xuICAgIH1cbiAgICByZXR1cm4gbWl4aW4uaGVscGVycy5zZWxlY3Rpb25QYXJ0cyhzZWxlY3Rpb24pO1xuICB9XG5cbn07XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4vY3JlYXRlU3ltYm9sJztcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3Qga2V5ZG93bkxpc3RlbmVyU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdrZXlkb3duTGlzdGVuZXInKTtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIEtleWJvYXJkLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggbWFuYWdlcyB0aGUga2V5ZG93biBoYW5kbGluZyBmb3IgYSBjb21wb25lbnQuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gaGFuZGxlcyBzZXZlcmFsIGtleWJvYXJkLXJlbGF0ZWQgZmVhdHVyZXMuXG4gICAqXG4gICAqIEZpcnN0LCBpdCB3aXJlcyB1cCBhIHNpbmdsZSBrZXlkb3duIGV2ZW50IGhhbmRsZXIgdGhhdCBjYW4gYmUgc2hhcmVkIGJ5XG4gICAqIG11bHRpcGxlIG1peGlucyBvbiBhIGNvbXBvbmVudC4gVGhlIGV2ZW50IGhhbmRsZXIgd2lsbCBpbnZva2UgYSBga2V5ZG93bmBcbiAgICogbWV0aG9kIHdpdGggdGhlIGV2ZW50IG9iamVjdCwgYW5kIGFueSBtaXhpbiBhbG9uZyB0aGUgcHJvdG90eXBlIGNoYWluIHRoYXRcbiAgICogd2FudHMgdG8gaGFuZGxlIHRoYXQgbWV0aG9kIGNhbiBkbyBzby5cbiAgICpcbiAgICogSWYgYSBtaXhpbiB3YW50cyB0byBpbmRpY2F0ZSB0aGF0IGtleWJvYXJkIGV2ZW50IGhhcyBiZWVuIGhhbmRsZWQsIGFuZCB0aGF0XG4gICAqIG90aGVyIG1peGlucyBzaG91bGQgKm5vdCogaGFuZGxlIGl0LCB0aGUgbWl4aW4ncyBga2V5ZG93bmAgaGFuZGxlciBzaG91bGRcbiAgICogcmV0dXJuIGEgdmFsdWUgb2YgdHJ1ZS4gVGhlIGNvbnZlbnRpb24gdGhhdCBzZWVtcyB0byB3b3JrIHdlbGwgaXMgdGhhdCBhXG4gICAqIG1peGluIHNob3VsZCBzZWUgaWYgaXQgd2FudHMgdG8gaGFuZGxlIHRoZSBldmVudCBhbmQsIGlmIG5vdCwgdGhlbiBhc2sgdGhlXG4gICAqIHN1cGVyY2xhc3MgdG8gc2VlIGlmIGl0IHdhbnRzIHRvIGhhbmRsZSB0aGUgZXZlbnQuIFRoaXMgaGFzIHRoZSBlZmZlY3Qgb2ZcbiAgICogZ2l2aW5nIHRoZSBtaXhpbiB0aGF0IHdhcyBhcHBsaWVkIGxhc3QgdGhlIGZpcnN0IGNoYW5jZSBhdCBoYW5kbGluZyBhXG4gICAqIGtleWJvYXJkIGV2ZW50LlxuICAgKlxuICAgKiBFeGFtcGxlOlxuICAgKlxuICAgKiAgICAga2V5ZG93bihldmVudCkge1xuICAgKiAgICAgICBsZXQgaGFuZGxlZDtcbiAgICogICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAqICAgICAgICAgLy8gSGFuZGxlIHRoZSBrZXlzIHlvdSB3YW50LCBzZXR0aW5nIGhhbmRsZWQgPSB0cnVlIGlmIGFwcHJvcHJpYXRlLlxuICAgKiAgICAgICB9XG4gICAqICAgICAgIC8vIFByZWZlciBtaXhpbiByZXN1bHQgaWYgaXQncyBkZWZpbmVkLCBvdGhlcndpc2UgdXNlIGJhc2UgcmVzdWx0LlxuICAgKiAgICAgICByZXR1cm4gaGFuZGxlZCB8fCAoc3VwZXIua2V5ZG93biAmJiBzdXBlci5rZXlkb3duKGV2ZW50KSk7XG4gICAqICAgICB9XG4gICAqXG4gICAqIEEgc2Vjb25kIGZlYXR1cmUgcHJvdmlkZWQgYnkgdGhpcyBtaXhpbiBpcyB0aGF0IGl0IGltcGxpY2l0bHkgbWFrZXMgdGhlXG4gICAqIGNvbXBvbmVudCBhIHRhYiBzdG9wIGlmIGl0IGlzbid0IGFscmVhZHksIGJ5IHNldHRpbmcgYHRhYkluZGV4YCB0byAwLiBUaGlzXG4gICAqIGhhcyB0aGUgZWZmZWN0IG9mIGFkZGluZyB0aGUgY29tcG9uZW50IHRvIHRoZSB0YWIgb3JkZXIgaW4gZG9jdW1lbnQgb3JkZXIuXG4gICAqXG4gICAqIEZpbmFsbHksIHRoaXMgbWl4aW4gaXMgZGVzaWduZWQgdG8gd29yayB3aXRoIHRoZSBvcHRpb25hbFxuICAgKiBbQ29sbGVjdGl2ZV0oQ29sbGVjdGl2ZS5tZCkgY2xhc3MgdmlhIGEgbWl4aW4gbGlrZVxuICAgKiBbVGFyZ2V0SW5Db2xsZWN0aXZlXShUYXJnZXRJbkNvbGxlY3RpdmUubWQpLiBUaGlzIGFsbG93cyBhIHNldCBvZiByZWxhdGVkXG4gICAqIGNvbXBvbmVudCBpbnN0YW5jZXMgdG8gY29vcGVyYXRpdmVseSBoYW5kbGUgdGhlIGtleWJvYXJkLiBTZWUgdGhlXG4gICAqIENvbGxlY3RpdmUgY2xhc3MgZm9yIGRldGFpbHMuXG4gICAqL1xuICBjbGFzcyBLZXlib2FyZCBleHRlbmRzIGJhc2Uge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgLy8gQXNzdW1lIHRoaXMgY29tcG9uZW50IGlzIGdvaW5nIHRvIGhhbmRsZSB0aGUga2V5Ym9hcmQgb24gaXRzIG93bi5cbiAgICAgIC8vIFJFVklFVzogTW92ZSB0byBjb25uZWN0ZWRDYWxsYmFjaz9cbiAgICAgIHN0YXJ0TGlzdGVuaW5nVG9LZXlkb3duKHRoaXMpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogSWYgd2UncmUgbm93IHRoZSBvdXRlcm1vc3QgZWxlbWVudCBvZiB0aGUgY29sbGVjdGl2ZSwgc2V0IHVwIHRvIHJlY2VpdmVcbiAgICAgKiBrZXlib2FyZCBldmVudHMuIElmIHdlJ3JlIG5vIGxvbmdlciB0aGUgb3V0ZXJtb3N0IGVsZW1lbnQsIHN0b3BcbiAgICAgKiBsaXN0ZW5pbmcuXG4gICAgICovXG4gICAgY29sbGVjdGl2ZUNoYW5nZWQoKSB7XG4gICAgICBpZiAoc3VwZXIuY29sbGVjdGl2ZUNoYW5nZWQpIHsgc3VwZXIuY29sbGVjdGl2ZUNoYW5nZWQoKTsgfVxuXG4gICAgICBpZiAodGhpcy5jb2xsZWN0aXZlLm91dGVybW9zdEVsZW1lbnQgIT09IHRoaXMpIHtcbiAgICAgICAgLy8gV2UncmUgbm8gbG9uZ2VyIHRoZSBvdXRlcm1vc3QgZWxlbWVudDsgc3RvcCBsaXN0ZW5pbmcuXG4gICAgICAgIGlmIChpc0xpc3RlbmluZ1RvS2V5ZG93bih0aGlzKSkge1xuICAgICAgICAgIHN0b3BMaXN0ZW5pbmdUb0tleWRvd24odGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgLy8gU2luY2Ugd2UncmUgZ29pbmcgdG8gaGFuZGxlIHRoZSBrZXlib2FyZCwgc2VlIGlmIHdlIGNhbiBhZG9wdCBhbiBBUklBXG4gICAgICAgIC8vIGxhYmVsIGZyb20gYW4gaW5uZXIgZWxlbWVudCBvZiB0aGUgY29sbGVjdGl2ZS5cbiAgICAgICAgbGV0IGxhYmVsID0gZ2V0Q29sbGVjdGl2ZUFyaWFMYWJlbCh0aGlzLmNvbGxlY3RpdmUpO1xuICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIGxhYmVsKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTGlzdGVuaW5nVG9LZXlkb3duKHRoaXMpKSB7XG4gICAgICAgIHN0YXJ0TGlzdGVuaW5nVG9LZXlkb3duKHRoaXMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSB0aGUgaW5kaWNhdGVkIGtleWJvYXJkIGV2ZW50LlxuICAgICAqXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLiBUaGlzIHdpbGxcbiAgICAgKiB0eXBpY2FsbHkgYmUgaGFuZGxlZCBieSBvdGhlciBtaXhpbnMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGV2ZW50IC0gdGhlIGtleWJvYXJkIGV2ZW50XG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgZXZlbnQgd2FzIGhhbmRsZWRcbiAgICAgKi9cbiAgICBrZXlkb3duKGV2ZW50KSB7XG4gICAgICBpZiAoc3VwZXIua2V5ZG93bikgeyByZXR1cm4gc3VwZXIua2V5ZG93bihldmVudCk7IH1cbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBLZXlib2FyZDtcbn07XG5cblxuLy8gRmlyZSB0aGUga2V5ZG93bigpIG1ldGhvZCBvbiB0aGUgZWxlbWVudCBvciAoaWYgaXQgYmVsb25ncyB0byBhIGNvbGxlY3RpdmUpXG4vLyBhbGwgZWxlbWVudHMgaW4gdGhlIGNvbGxlY3RpdmUuXG4vL1xuLy8gTm90ZTogdGhlIHZhbHVlIG9mICd0aGlzJyBpcyBib3VuZCB0byB0aGUgZWxlbWVudCB3aGljaCByZWNlaXZlZCB0aGUgZXZlbnQuXG5mdW5jdGlvbiBrZXlkb3duKGV2ZW50KSB7XG5cbiAgbGV0IGhhbmRsZWQgPSBmYWxzZTtcblxuICBpZiAodGhpcy5jb2xsZWN0aXZlKSB7XG4gICAgLy8gR2l2ZSBjb2xsZWN0aXZlIGVsZW1lbnRzIGEgc2hvdCBhdCB0aGUgZXZlbnQsIHdvcmtpbmcgZnJvbSBpbm5lcm1vc3QgdG9cbiAgICAvLyBvdXRlcm1vc3QgKHRoaXMgZWxlbWVudCkuXG4gICAgbGV0IGVsZW1lbnRzID0gdGhpcy5jb2xsZWN0aXZlLmVsZW1lbnRzO1xuICAgIGZvciAobGV0IGkgPSBlbGVtZW50cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IGVsZW1lbnQgPSBlbGVtZW50c1tpXTtcbiAgICAgIGhhbmRsZWQgPSBlbGVtZW50LmtleWRvd24gJiYgZWxlbWVudC5rZXlkb3duKGV2ZW50KTtcbiAgICAgIGlmIChoYW5kbGVkKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBDb21wb25lbnQgaXMgaGFuZGxpbmcgdGhlIGtleWJvYXJkIG9uIGl0cyBvd24uXG4gICAgaGFuZGxlZCA9IHRoaXMua2V5ZG93bihldmVudCk7XG4gIH1cblxuICBpZiAoaGFuZGxlZCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbn1cblxuXG4vLyBSZXR1cm4gdGhlIGZpcnN0IEFSSUEgbGFiZWwgZGVmaW5lZCBieSB0aGUgY29sbGVjdGl2ZS5cbmZ1bmN0aW9uIGdldENvbGxlY3RpdmVBcmlhTGFiZWwoY29sbGVjdGl2ZSkge1xuICBsZXQgbGFiZWxzID0gY29sbGVjdGl2ZS5lbGVtZW50cy5tYXAoZWxlbWVudCA9PiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKTtcbiAgLy8gV291bGQgcHJlZmVyIHRvIHVzZSBBcnJheS5wcm90b3R5cGUuZmluZCBoZXJlLCBidXQgSUUgMTEgZG9lc24ndCBoYXZlIGl0LlxuICBsZXQgbm9uTnVsbExhYmVscyA9IGxhYmVscy5maWx0ZXIobGFiZWwgPT4gbGFiZWwgIT0gbnVsbCk7XG4gIHJldHVybiBub25OdWxsTGFiZWxzWzBdO1xufVxuXG5cbmZ1bmN0aW9uIGlzTGlzdGVuaW5nVG9LZXlkb3duKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnRba2V5ZG93bkxpc3RlbmVyU3ltYm9sXSAhPSBudWxsO1xufVxuXG5cbmZ1bmN0aW9uIHN0YXJ0TGlzdGVuaW5nVG9LZXlkb3duKGVsZW1lbnQpIHtcbiAgZWxlbWVudFtrZXlkb3duTGlzdGVuZXJTeW1ib2xdID0ga2V5ZG93bi5iaW5kKGVsZW1lbnQpO1xuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlbGVtZW50W2tleWRvd25MaXN0ZW5lclN5bWJvbF0pO1xuICAvLyBTZXQgYSBkZWZhdWx0IHRhYiBpbmRleCBvZiAwIChkb2N1bWVudCBvcmRlcikgaWYgbm8gdGFiIGluZGV4IGV4aXN0cy5cbiAgLy8gTVMgRWRnZSByZXF1aXJlcyB3ZSBleHBsaWNpdGx5IGNoZWNrIGZvciBwcmVzZW5jZSBvZiB0YWJpbmRleCBhdHRyaWJ1dGUuXG4gIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSA9PSBudWxsIHx8IGVsZW1lbnQudGFiSW5kZXggPCAwKSB7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIHN0b3BMaXN0ZW5pbmdUb0tleWRvd24oZWxlbWVudCkge1xuICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlbGVtZW50W2tleWRvd25MaXN0ZW5lclN5bWJvbF0pO1xuICBlbGVtZW50W2tleWRvd25MaXN0ZW5lclN5bWJvbF0gPSBudWxsO1xuICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbn1cbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi9jcmVhdGVTeW1ib2wnO1xuXG5cbi8vIFN5bWJvbHMgZm9yIHByaXZhdGUgZGF0YSBtZW1iZXJzIG9uIGFuIGVsZW1lbnQuXG5jb25zdCBuYXZpZ2F0aW9uQXhpc1N5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnbmF2aWdhdGlvbkF4aXMnKTtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIEtleWJvYXJkRGlyZWN0aW9uLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggbWFwcyBkaXJlY3Rpb24ga2V5cyAoTGVmdCwgUmlnaHQsIGV0Yy4pIHRvIGRpcmVjdGlvbiBzZW1hbnRpY3NcbiAgICogKGdvIGxlZnQsIGdvIHJpZ2h0LCBldGMuKS5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIHRoZSBjb21wb25lbnQgdG8gaW52b2tlIGEgYGtleWRvd25gIG1ldGhvZCB3aGVuIGEga2V5IGlzXG4gICAqIHByZXNzZWQuIFlvdSBjYW4gdXNlIHRoZSBbS2V5Ym9hcmRdKEtleWJvYXJkLm1kKSBtaXhpbiBmb3IgdGhhdCBwdXJwb3NlLCBvclxuICAgKiB3aXJlIHVwIHlvdXIgb3duIGtleWJvYXJkIGhhbmRsaW5nIGFuZCBjYWxsIGBrZXlkb3duYCB5b3Vyc2VsZi5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBjYWxscyBtZXRob2RzIHN1Y2ggYXMgYGdvTGVmdGAgYW5kIGBnb1JpZ2h0YC4gWW91IGNhbiBkZWZpbmVcbiAgICogd2hhdCB0aGF0IG1lYW5zIGJ5IGltcGxlbWVudGluZyB0aG9zZSBtZXRob2RzIHlvdXJzZWxmLiBJZiB5b3Ugd2FudCB0byB1c2VcbiAgICogZGlyZWN0aW9uIGtleXMgdG8gbmF2aWdhdGUgYSBzZWxlY3Rpb24sIHVzZSB0aGlzIG1peGluIHdpdGggdGhlXG4gICAqIFtEaXJlY3Rpb25TZWxlY3Rpb25dKERpcmVjdGlvblNlbGVjdGlvbi5tZCkgbWl4aW4uXG4gICAqL1xuICBjbGFzcyBLZXlib2FyZERpcmVjdGlvbiBleHRlbmRzIGJhc2Uge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgLy8gU2V0IGRlZmF1bHRzLlxuICAgICAgaWYgKHR5cGVvZiB0aGlzLm5hdmlnYXRpb25BeGlzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLm5hdmlnYXRpb25BeGlzID0gdGhpcy5kZWZhdWx0cy5uYXZpZ2F0aW9uQXhpcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgZGVmYXVsdHMoKSB7XG4gICAgICBsZXQgZGVmYXVsdHMgPSBzdXBlci5kZWZhdWx0cyB8fCB7fTtcbiAgICAgIGRlZmF1bHRzLm5hdmlnYXRpb25BeGlzID0gJ2JvdGgnO1xuICAgICAgcmV0dXJuIGRlZmF1bHRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSBkb3duLlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy5cbiAgICAgKi9cbiAgICBnb0Rvd24oKSB7XG4gICAgICBpZiAoc3VwZXIuZ29Eb3duKSB7IHJldHVybiBzdXBlci5nb0Rvd24oKTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSB0byB0aGUgZW5kIChlLmcuLCBvZiBhIGxpc3QpLlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy5cbiAgICAgKi9cbiAgICBnb0VuZCgpIHtcbiAgICAgIGlmIChzdXBlci5nb0VuZCkgeyByZXR1cm4gc3VwZXIuZ29FbmQoKTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSBsZWZ0LlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy5cbiAgICAgKi9cbiAgICBnb0xlZnQoKSB7XG4gICAgICBpZiAoc3VwZXIuZ29MZWZ0KSB7IHJldHVybiBzdXBlci5nb0xlZnQoKTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSByaWdodC5cbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuXG4gICAgICovXG4gICAgZ29SaWdodCgpIHtcbiAgICAgIGlmIChzdXBlci5nb1JpZ2h0KSB7IHJldHVybiBzdXBlci5nb1JpZ2h0KCk7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgdG8gdGhlIHN0YXJ0IChlLmcuLCBvZiBhXG4gICAgICogbGlzdCkuIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy5cbiAgICAgKi9cbiAgICBnb1N0YXJ0KCkge1xuICAgICAgaWYgKHN1cGVyLmdvU3RhcnQpIHsgcmV0dXJuIHN1cGVyLmdvU3RhcnQoKTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSB1cC5cbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuXG4gICAgICovXG4gICAgZ29VcCgpIHtcbiAgICAgIGlmIChzdXBlci5nb1VwKSB7IHJldHVybiBzdXBlci5nb1VwKCk7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgdGhlIGRpcmVjdGlvbiBvZiBwZXJtaXR0ZWQgbmF2aWdhdGlvbiB3aXRoIHRoZSBrZXlib2FyZC5cbiAgICAgKlxuICAgICAqIEFjY2VwdGVkIHZhbHVlcyBhcmUgXCJob3Jpem9udGFsXCIsIFwidmVydGljYWxcIiwgb3IgXCJib3RoXCIgKHRoZSBkZWZhdWx0KS5cbiAgICAgKiBJZiB0aGlzIHByb3BlcnR5IGlzIFwiaG9yaXpvbnRhbFwiLCB0aGUgVXAgQXJyb3cgYW5kIERvd24gQXJyb3cga2V5cyB3aWxsXG4gICAgICogYmUgaWdub3JlZC4gQ29udmVyc2VseSwgaWYgdGhpcyBpcyBcInZlcnRpY2FsXCIsIHRoZSBMZWZ0IEFycm93IGFuZCBSaWdodFxuICAgICAqIEFycm93IGtleXMgd2lsbCBiZSBpZ25vcmVkLlxuICAgICAqXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXQgbmF2aWdhdGlvbkF4aXMoKSB7XG4gICAgICByZXR1cm4gdGhpc1tuYXZpZ2F0aW9uQXhpc1N5bWJvbF07XG4gICAgfVxuICAgIHNldCBuYXZpZ2F0aW9uQXhpcyh2YWx1ZSkge1xuICAgICAgdGhpc1tuYXZpZ2F0aW9uQXhpc1N5bWJvbF0gPSB2YWx1ZTtcbiAgICAgIGlmICgnbmF2aWdhdGlvbkF4aXMnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLm5hdmlnYXRpb25BeGlzID0gdmFsdWU7IH1cbiAgICB9XG5cbiAgICBrZXlkb3duKGV2ZW50KSB7XG4gICAgICBsZXQgaGFuZGxlZDtcblxuICAgICAgbGV0IGF4aXMgPSB0aGlzLm5hdmlnYXRpb25BeGlzO1xuICAgICAgbGV0IGhvcml6b250YWwgPSAoYXhpcyA9PT0gJ2hvcml6b250YWwnIHx8IGF4aXMgPT09ICdib3RoJyk7XG4gICAgICBsZXQgdmVydGljYWwgPSAoYXhpcyA9PT0gJ3ZlcnRpY2FsJyB8fCBheGlzID09PSAnYm90aCcpO1xuXG4gICAgICAvLyBJZ25vcmUgTGVmdC9SaWdodCBrZXlzIHdoZW4gbWV0YUtleSBvciBhbHRLZXkgbW9kaWZpZXIgaXMgYWxzbyBwcmVzc2VkLFxuICAgICAgLy8gYXMgdGhlIHVzZXIgbWF5IGJlIHRyeWluZyB0byBuYXZpZ2F0ZSBiYWNrIG9yIGZvcndhcmQgaW4gdGhlIGJyb3dzZXIuXG4gICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgY2FzZSAzNTogLy8gRW5kXG4gICAgICAgICAgaGFuZGxlZCA9IHRoaXMuZ29FbmQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzNjogLy8gSG9tZVxuICAgICAgICAgIGhhbmRsZWQgPSB0aGlzLmdvU3RhcnQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzNzogLy8gTGVmdFxuICAgICAgICAgIGlmIChob3Jpem9udGFsICYmICFldmVudC5tZXRhS2V5ICYmICFldmVudC5hbHRLZXkpIHtcbiAgICAgICAgICAgIGhhbmRsZWQgPSB0aGlzLmdvTGVmdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzODogLy8gVXBcbiAgICAgICAgICBpZiAodmVydGljYWwpIHtcbiAgICAgICAgICAgIGhhbmRsZWQgPSBldmVudC5hbHRLZXkgPyB0aGlzLmdvU3RhcnQoKSA6IHRoaXMuZ29VcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOTogLy8gUmlnaHRcbiAgICAgICAgICBpZiAoaG9yaXpvbnRhbCAmJiAhZXZlbnQubWV0YUtleSAmJiAhZXZlbnQuYWx0S2V5KSB7XG4gICAgICAgICAgICBoYW5kbGVkID0gdGhpcy5nb1JpZ2h0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQwOiAvLyBEb3duXG4gICAgICAgICAgaWYgKHZlcnRpY2FsKSB7XG4gICAgICAgICAgICBoYW5kbGVkID0gZXZlbnQuYWx0S2V5ID8gdGhpcy5nb0VuZCgpIDogdGhpcy5nb0Rvd24oKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICAvLyBQcmVmZXIgbWl4aW4gcmVzdWx0IGlmIGl0J3MgZGVmaW5lZCwgb3RoZXJ3aXNlIHVzZSBiYXNlIHJlc3VsdC5cbiAgICAgIHJldHVybiBoYW5kbGVkIHx8IChzdXBlci5rZXlkb3duICYmIHN1cGVyLmtleWRvd24oZXZlbnQpKTtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBLZXlib2FyZERpcmVjdGlvbjtcbn07XG4iLCIvLyBVc2VkIHRvIGFzc2lnbiB1bmlxdWUgSURzIHRvIGl0ZW0gZWxlbWVudHMgd2l0aG91dCBJRHMuXG5sZXQgaWRDb3VudCA9IDA7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBTZWxlY3Rpb25BcmlhQWN0aXZlLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggdHJlYXRzIHRoZSBzZWxlY3RlZCBpdGVtIGluIGEgbGlzdCBhcyB0aGUgYWN0aXZlIGl0ZW0gaW4gQVJJQVxuICAgKiBhY2Nlc3NpYmlsaXR5IHRlcm1zLlxuICAgKlxuICAgKiBIYW5kbGluZyBBUklBIHNlbGVjdGlvbiBzdGF0ZSBwcm9wZXJseSBpcyBhY3R1YWxseSBxdWl0ZSBjb21wbGV4OlxuICAgKlxuICAgKiAqIFRoZSBpdGVtcyBpbiB0aGUgbGlzdCBuZWVkIHRvIGJlIGluZGljYXRlZCBhcyBwb3NzaWJsZSBpdGVtcyB2aWEgYW4gQVJJQVxuICAgKiAgIGByb2xlYCBhdHRyaWJ1dGUgdmFsdWUgc3VjaCBhcyBcIm9wdGlvblwiLlxuICAgKiAqIFRoZSBzZWxlY3RlZCBpdGVtIG5lZWQgdG8gYmUgbWFya2VkIGFzIHNlbGVjdGVkIGJ5IHNldHRpbmcgdGhlIGl0ZW0nc1xuICAgKiAgIGBhcmlhLXNlbGVjdGVkYCBhdHRyaWJ1dGUgdG8gdHJ1ZSAqYW5kKiB0aGUgb3RoZXIgaXRlbXMgbmVlZCBiZSBtYXJrZWQgYXNcbiAgICogICAqbm90KiBzZWxlY3RlZCBieSBzZXR0aW5nIGBhcmlhLXNlbGVjdGVkYCB0byBmYWxzZS5cbiAgICogKiBUaGUgb3V0ZXJtb3N0IGVsZW1lbnQgd2l0aCB0aGUga2V5Ym9hcmQgZm9jdXMgbmVlZHMgdG8gaGF2ZSBhdHRyaWJ1dGVzXG4gICAqICAgc2V0IG9uIGl0IHNvIHRoYXQgdGhlIHNlbGVjdGlvbiBpcyBrbm93YWJsZSBhdCB0aGUgbGlzdCBsZXZlbCB2aWEgdGhlXG4gICAqICAgYGFyaWEtYWN0aXZlZGVzY2VuZGFudGAgYXR0cmlidXRlLlxuICAgKiAqIFVzZSBvZiBgYXJpYS1hY3RpdmVkZXNjZW5kYW50YCBpbiB0dXJuIHJlcXVpcmVzIHRoYXQgYWxsIGl0ZW1zIGluIHRoZVxuICAgKiAgIGxpc3QgaGF2ZSBJRCBhdHRyaWJ1dGVzIGFzc2lnbmVkIHRvIHRoZW0uXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gdHJpZXMgdG8gYWRkcmVzcyBhbGwgb2YgdGhlIGFib3ZlIHJlcXVpcmVtZW50cy4gVG8gdGhhdCBlbmQsXG4gICAqIHRoaXMgbWl4aW4gd2lsbCBhc3NpZ24gZ2VuZXJhdGVkIElEcyB0byBhbnkgaXRlbSB0aGF0IGRvZXNuJ3QgYWxyZWFkeSBoYXZlXG4gICAqIGFuIElELlxuICAgKlxuICAgKiBBUklBIHJlbGllcyBvbiBlbGVtZW50cyB0byBwcm92aWRlIGByb2xlYCBhdHRyaWJ1dGVzLiBUaGlzIG1peGluIHdpbGwgYXBwbHlcbiAgICogYSBkZWZhdWx0IHJvbGUgb2YgXCJsaXN0Ym94XCIgb24gdGhlIG91dGVyIGxpc3QgaWYgaXQgZG9lc24ndCBhbHJlYWR5IGhhdmUgYW5cbiAgICogZXhwbGljaXQgcm9sZS4gU2ltaWxhcmx5LCB0aGlzIG1peGluIHdpbGwgYXBwbHkgYSBkZWZhdWx0IHJvbGUgb2YgXCJvcHRpb25cIlxuICAgKiB0byBhbnkgbGlzdCBpdGVtIHRoYXQgZG9lcyBub3QgYWxyZWFkeSBoYXZlIGEgcm9sZSBzcGVjaWZpZWQuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyBhIHNldCBvZiBtZW1iZXJzIHRoYXQgbWFuYWdlIHRoZSBzdGF0ZSBvZiB0aGUgc2VsZWN0aW9uOlxuICAgKiBgYXBwbHlTZWxlY3Rpb25gLCBgaXRlbUFkZGVkYCwgYW5kIGBzZWxlY3RlZEluZGV4YC4gWW91IGNhbiBzdXBwbHkgdGhlc2VcbiAgICogeW91cnNlbGYsIG9yIGRvIHNvIHZpYSB0aGUgW1NpbmdsZVNlbGVjdGlvbl0oU2luZ2xlU2VsZWN0aW9uLm1kKSBtaXhpbi5cbiAgICovXG4gIGNsYXNzIFNlbGVjdGlvbkFyaWFBY3RpdmUgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIC8vIFNldCBkZWZhdWx0cy5cbiAgICAgIGlmICghdGhpcy5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgncm9sZScsICdsaXN0Ym94Jyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgYXBwbHlTZWxlY3Rpb24oaXRlbSwgc2VsZWN0ZWQpIHtcbiAgICAgIGlmIChzdXBlci5hcHBseVNlbGVjdGlvbikgeyBzdXBlci5hcHBseVNlbGVjdGlvbihpdGVtLCBzZWxlY3RlZCk7IH1cbiAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgc2VsZWN0ZWQpO1xuICAgICAgbGV0IGl0ZW1JZCA9IGl0ZW0uaWQ7XG4gICAgICBpZiAoaXRlbUlkKSB7XG4gICAgICAgIGxldCBvdXRlcm1vc3QgPSB0aGlzLmNvbGxlY3RpdmUgP1xuICAgICAgICAgIHRoaXMuY29sbGVjdGl2ZS5vdXRlcm1vc3RFbGVtZW50IDpcbiAgICAgICAgICB0aGlzO1xuICAgICAgICBpZiAoc2VsZWN0ZWQpIHsgIFxuICAgICAgICAgIG91dGVybW9zdC5zZXRBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcsIGl0ZW1JZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb2xsZWN0aXZlQ2hhbmdlZCgpIHtcbiAgICAgIGlmIChzdXBlci5jb2xsZWN0aXZlQ2hhbmdlZCkgeyBzdXBlci5jb2xsZWN0aXZlQ2hhbmdlZCgpOyB9XG5cbiAgICAgIC8vIEVuc3VyZSB0aGUgb3V0ZXJtb3N0IGFzcGVjdCBoYXMgYW4gQVJJQSByb2xlLlxuICAgICAgbGV0IG91dGVybW9zdEVsZW1lbnQgPSB0aGlzLmNvbGxlY3RpdmUub3V0ZXJtb3N0RWxlbWVudDtcbiAgICAgIGlmICghb3V0ZXJtb3N0RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSkge1xuICAgICAgICAvLyBUcnkgdG8gcHJvbW90ZSBhbiBBUklBIHJvbGUgZnJvbSBhbiBpbm5lciBlbGVtZW50LiBJZiBub25lIGlzIGZvdW5kLFxuICAgICAgICAvLyB1c2UgYSBkZWZhdWx0IHJvbGUuXG4gICAgICAgIGxldCByb2xlID0gZ2V0Q29sbGVjdGl2ZUFyaWFSb2xlKHRoaXMuY29sbGVjdGl2ZSkgfHwgJ2xpc3Rib3gnO1xuICAgICAgICBvdXRlcm1vc3RFbGVtZW50LnNldEF0dHJpYnV0ZSgncm9sZScsIHJvbGUpO1xuICAgICAgfVxuICAgICAgaWYgKCFvdXRlcm1vc3RFbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1hY3RpdmVkZXNjZW5kYW50JykpIHtcbiAgICAgICAgLy8gVHJ5IHRvIHByb21vdGUgYW4gQVJJQSBhY3RpdmVkZXNjZW5kYW50IHZhbHVlIGZyb20gYW4gaW5uZXIgZWxlbWVudC5cbiAgICAgICAgbGV0IGRlc2NlbmRhbnQgPSBnZXRDb2xsZWN0aXZlQXJpYUFjdGl2ZURlc2NlbmRhbnQodGhpcy5jb2xsZWN0aXZlKTtcbiAgICAgICAgaWYgKGRlc2NlbmRhbnQpIHtcbiAgICAgICAgICBvdXRlcm1vc3RFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1hY3RpdmVkZXNjZW5kYW50JywgZGVzY2VuZGFudCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gUmVtb3ZlIHRoZSBBUklBIHJvbGUgYW5kIGFjdGl2ZWRlc2NlbmRhbnQgdmFsdWVzIGZyb20gdGhlIGNvbGxlY3RpdmUnc1xuICAgICAgLy8gaW5uZXIgZWxlbWVudHMuXG4gICAgICB0aGlzLmNvbGxlY3RpdmUuZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnQgIT09IG91dGVybW9zdEVsZW1lbnQpIHtcbiAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1hY3RpdmVkZXNjZW5kYW50Jyk7XG4gICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnbm9uZScpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpdGVtQWRkZWQoaXRlbSkge1xuICAgICAgaWYgKHN1cGVyLml0ZW1BZGRlZCkgeyBzdXBlci5pdGVtQWRkZWQoaXRlbSk7IH1cblxuICAgICAgaWYgKCFpdGVtLmdldEF0dHJpYnV0ZSgncm9sZScpKSB7XG4gICAgICAgIC8vIEFzc2lnbiBhIGRlZmF1bHQgQVJJQSByb2xlLlxuICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgncm9sZScsICdvcHRpb24nKTtcbiAgICAgIH1cblxuICAgICAgLy8gRW5zdXJlIGVhY2ggaXRlbSBoYXMgYW4gSUQgc28gd2UgY2FuIHNldCBhcmlhLWFjdGl2ZWRlc2NlbmRhbnQgb24gdGhlXG4gICAgICAvLyBvdmVyYWxsIGxpc3Qgd2hlbmV2ZXIgdGhlIHNlbGVjdGlvbiBjaGFuZ2VzLlxuICAgICAgLy9cbiAgICAgIC8vIFRoZSBJRCB3aWxsIHRha2UgdGhlIGZvcm0gb2YgYSBiYXNlIElEIHBsdXMgYSB1bmlxdWUgaW50ZWdlci4gVGhlIGJhc2VcbiAgICAgIC8vIElEIHdpbGwgYmUgaW5jb3Jwb3JhdGUgdGhlIGNvbXBvbmVudCdzIG93biBJRC4gRS5nLiwgaWYgYSBjb21wb25lbnQgaGFzXG4gICAgICAvLyBJRCBcImZvb1wiLCB0aGVuIGl0cyBpdGVtcyB3aWxsIGhhdmUgSURzIHRoYXQgbG9vayBsaWtlIFwiX2Zvb09wdGlvbjFcIi4gSWZcbiAgICAgIC8vIHRoZSBjb21wbmVudCBoYXMgbm8gSUQgaXRzZWxmLCBpdHMgaXRlbXMgd2lsbCBnZXQgSURzIHRoYXQgbG9vayBsaWtlXG4gICAgICAvLyBcIl9vcHRpb24xXCIuIEl0ZW0gSURzIGFyZSBwcmVmaXhlZCB3aXRoIGFuIHVuZGVyc2NvcmUgdG8gZGlmZmVyZW50aWF0ZVxuICAgICAgLy8gdGhlbSBmcm9tIG1hbnVhbGx5LWFzc2lnbmVkIElEcywgYW5kIHRvIG1pbmltaXplIHRoZSBwb3RlbnRpYWwgZm9yIElEXG4gICAgICAvLyBjb25mbGljdHMuXG4gICAgICBpZiAoIWl0ZW0uaWQpIHtcbiAgICAgICAgbGV0IGJhc2VJZCA9IHRoaXMuaWQgP1xuICAgICAgICAgICAgXCJfXCIgKyB0aGlzLmlkICsgXCJPcHRpb25cIiA6XG4gICAgICAgICAgICBcIl9vcHRpb25cIjtcbiAgICAgICAgaXRlbS5pZCA9IGJhc2VJZCArIGlkQ291bnQrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgc2VsZWN0ZWRJdGVtKCkge1xuICAgICAgcmV0dXJuIHN1cGVyLnNlbGVjdGVkSXRlbTtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGVkSXRlbShpdGVtKSB7XG4gICAgICBpZiAoJ3NlbGVjdGVkSXRlbScgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJdGVtID0gaXRlbTsgfVxuICAgICAgLy8gQ2F0Y2ggdGhlIGNhc2Ugd2hlcmUgdGhlIHNlbGVjdGlvbiBpcyByZW1vdmVkLlxuICAgICAgaWYgKGl0ZW0gPT0gbnVsbCkge1xuICAgICAgICBsZXQgb3V0ZXJtb3N0ID0gdGhpcy5jb2xsZWN0aXZlID9cbiAgICAgICAgICB0aGlzLmNvbGxlY3RpdmUub3V0ZXJtb3N0RWxlbWVudCA6XG4gICAgICAgICAgdGhpcztcbiAgICAgICAgb3V0ZXJtb3N0LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1hY3RpdmVkZXNjZW5kYW50Jyk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gU2VsZWN0aW9uQXJpYUFjdGl2ZTtcbn07XG5cblxuLy8gUmV0dXJuIHRoZSBmaXJzdCBBUklBIGFjdGl2ZWRlc2NlbmRhbnQgZGVmaW5lZCBieSB0aGUgY29sbGVjdGl2ZS5cbmZ1bmN0aW9uIGdldENvbGxlY3RpdmVBcmlhQWN0aXZlRGVzY2VuZGFudChjb2xsZWN0aXZlKSB7XG4gIGxldCBkZXNjZW5kYW50cyA9IGNvbGxlY3RpdmUuZWxlbWVudHMubWFwKGVsZW1lbnQgPT4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcpKTtcbiAgbGV0IG5vbk51bGxEZXNjZW5kYW50cyA9IGRlc2NlbmRhbnRzLmZpbHRlcihkZXNjZW5kYW50ID0+IGRlc2NlbmRhbnQgIT09IG51bGwpO1xuICByZXR1cm4gbm9uTnVsbERlc2NlbmRhbnRzWzBdO1xufVxuXG5cbi8vIFJldHVybiB0aGUgZmlyc3QgQVJJQSBsYWJlbCBkZWZpbmVkIGJ5IHRoZSBjb2xsZWN0aXZlLlxuZnVuY3Rpb24gZ2V0Q29sbGVjdGl2ZUFyaWFSb2xlKGNvbGxlY3RpdmUpIHtcbiAgbGV0IHJvbGVzID0gY29sbGVjdGl2ZS5lbGVtZW50cy5tYXAoZWxlbWVudCA9PiBlbGVtZW50LmdldEF0dHJpYnV0ZSgncm9sZScpKTtcbiAgbGV0IG5vbk51bGxSb2xlcyA9IHJvbGVzLmZpbHRlcihyb2xlID0+IHJvbGUgIT09IG51bGwpO1xuICByZXR1cm4gbm9uTnVsbFJvbGVzWzBdO1xufVxuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBTaGFkb3dFbGVtZW50UmVmZXJlbmNlcy4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHRvIGNyZWF0ZSByZWZlcmVuY2VzIHRvIGVsZW1lbnRzIGluIGEgY29tcG9uZW50J3MgU2hhZG93IERPTSBzdWJ0cmVlLlxuICAgKlxuICAgKiBUaGlzIGFkZHMgYSBtZW1iZXIgb24gdGhlIGNvbXBvbmVudCBjYWxsZWQgYHRoaXMuJGAgdGhhdCBjYW4gYmUgdXNlZCB0b1xuICAgKiByZWZlcmVuY2Ugc2hhZG93IGVsZW1lbnRzIHdpdGggSURzLiBFLmcuLCBpZiBjb21wb25lbnQncyBzaGFkb3cgY29udGFpbnMgYW5cbiAgICogZWxlbWVudCBgPGJ1dHRvbiBpZD1cImZvb1wiPmAsIHRoZW4gdGhpcyBtaXhpbiB3aWxsIGNyZWF0ZSBhIG1lbWJlclxuICAgKiBgdGhpcy4kLmZvb2AgdGhhdCBwb2ludHMgdG8gdGhhdCBidXR0b24uXG4gICAqXG4gICAqIFN1Y2ggcmVmZXJlbmNlcyBzaW1wbGlmeSBhIGNvbXBvbmVudCdzIGFjY2VzcyB0byBpdHMgb3duIGVsZW1lbnRzLiBJblxuICAgKiBleGNoYW5nZSwgdGhpcyBtaXhpbiB0cmFkZXMgb2ZmIGEgb25lLXRpbWUgY29zdCBvZiBxdWVyeWluZyBhbGwgZWxlbWVudHMgaW5cbiAgICogdGhlIHNoYWRvdyB0cmVlIGluc3RlYWQgb2YgcGF5aW5nIGFuIG9uZ29pbmcgY29zdCB0byBxdWVyeSBmb3IgYW4gZWxlbWVudFxuICAgKiBlYWNoIHRpbWUgdGhlIGNvbXBvbmVudCB3YW50cyB0byBpbnNwZWN0IG9yIG1hbmlwdWxhdGUgaXQuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyB0aGUgY29tcG9uZW50IHRvIGRlZmluZSBhIFNoYWRvdyBET00gc3VidHJlZS4gWW91IGNhblxuICAgKiBjcmVhdGUgdGhhdCB0cmVlIHlvdXJzZWxmLCBvciBtYWtlIHVzZSBvZiB0aGVcbiAgICogW1NoYWRvd1RlbXBsYXRlXShTaGFkb3dUZW1wbGF0ZS5tZCkgbWl4aW4uXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gaXMgaW5zcGlyZWQgYnkgUG9seW1lcidzIFthdXRvbWF0aWNcbiAgICogbm9kZSBmaW5kaW5nXShodHRwczovL3d3dy5wb2x5bWVyLXByb2plY3Qub3JnLzEuMC9kb2NzL2Rldmd1aWRlL2xvY2FsLWRvbS5odG1sI25vZGUtZmluZGluZylcbiAgICogZmVhdHVyZS5cbiAgICovXG4gIGNsYXNzIFNoYWRvd0VsZW1lbnRSZWZlcmVuY2VzIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICBpZiAodGhpcy5zaGFkb3dSb290KSB7XG4gICAgICAgIC8vIExvb2sgZm9yIGVsZW1lbnRzIGluIHRoZSBzaGFkb3cgc3VidHJlZSB0aGF0IGhhdmUgaWQgYXR0cmlidXRlcy5cbiAgICAgICAgLy8gQW4gYWx0ZXJuYXRpdmVseSBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1peGluIHdvdWxkIGJlIHRvIGp1c3QgZGVmaW5lXG4gICAgICAgIC8vIGEgdGhpcy4kIGdldHRlciB0aGF0IGxhemlseSBkb2VzIHRoaXMgc2VhcmNoIHRoZSBmaXJzdCB0aW1lIHNvbWVvbmVcbiAgICAgICAgLy8gdHJpZXMgdG8gYWNjZXNzIHRoaXMuJC4gVGhhdCBtaWdodCBpbnRyb2R1Y2Ugc29tZSBjb21wbGV4aXR5IOKAkyBpZiB0aGVcbiAgICAgICAgLy8gdGhlIHRyZWUgY2hhbmdlZCBhZnRlciBpdCB3YXMgZmlyc3QgcG9wdWxhdGVkLCB0aGUgcmVzdWx0IG9mXG4gICAgICAgIC8vIHNlYXJjaGluZyBmb3IgYSBub2RlIG1pZ2h0IGJlIHNvbWV3aGF0IHVucHJlZGljdGFibGUuXG4gICAgICAgIHRoaXMuJCA9IHt9O1xuICAgICAgICBsZXQgbm9kZXNXaXRoSWRzID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpZF0nKTtcbiAgICAgICAgW10uZm9yRWFjaC5jYWxsKG5vZGVzV2l0aElkcywgbm9kZSA9PiB7XG4gICAgICAgICAgbGV0IGlkID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICAgICAgdGhpcy4kW2lkXSA9IG5vZGU7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBjb2xsZWN0aW9uIG9mIHJlZmVyZW5jZXMgdG8gdGhlIGVsZW1lbnRzIHdpdGggSURzIGluIGEgY29tcG9uZW50J3NcbiAgICAgKiBTaGFkb3cgRE9NIHN1YnRyZWUuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqIEBtZW1iZXIgJFxuICAgICAqL1xuICB9XG5cbiAgcmV0dXJuIFNoYWRvd0VsZW1lbnRSZWZlcmVuY2VzO1xufTtcbiIsIi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggU2hhZG93VGVtcGxhdGUuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiBmb3Igc3RhbXBpbmcgYSB0ZW1wbGF0ZSBpbnRvIGEgU2hhZG93IERPTSBzdWJ0cmVlIHVwb24gY29tcG9uZW50XG4gICAqIGluc3RhbnRpYXRpb24uXG4gICAqXG4gICAqIFRvIHVzZSB0aGlzIG1peGluLCBkZWZpbmUgYSBgdGVtcGxhdGVgIHByb3BlcnR5IGFzIGEgc3RyaW5nIG9yIEhUTUxcbiAgICogYDx0ZW1wbGF0ZT5gIGVsZW1lbnQ6XG4gICAqXG4gICAqICAgICBjbGFzcyBNeUVsZW1lbnQgZXh0ZW5kcyBTaGFkb3dUZW1wbGF0ZShIVE1MRWxlbWVudCkge1xuICAgKiAgICAgICBnZXQgdGVtcGxhdGUoKSB7XG4gICAqICAgICAgICAgcmV0dXJuIGBIZWxsbywgPGVtPndvcmxkPC9lbT4uYDtcbiAgICogICAgICAgfVxuICAgKiAgICAgfVxuICAgKlxuICAgKiBXaGVuIHlvdXIgY29tcG9uZW50IGNsYXNzIGlzIGluc3RhbnRpYXRlZCwgYSBzaGFkb3cgcm9vdCB3aWxsIGJlIGNyZWF0ZWQgb25cbiAgICogdGhlIGluc3RhbmNlLCBhbmQgdGhlIGNvbnRlbnRzIG9mIHRoZSB0ZW1wbGF0ZSB3aWxsIGJlIGNsb25lZCBpbnRvIHRoZVxuICAgKiBzaGFkb3cgcm9vdC4gSWYgeW91ciBjb21wb25lbnQgZG9lcyBub3QgZGVmaW5lIGEgYHRlbXBsYXRlYCBwcm9wZXJ0eSwgdGhpc1xuICAgKiBtaXhpbiBoYXMgbm8gZWZmZWN0LlxuICAgKlxuICAgKiBGb3IgdGhlIHRpbWUgYmVpbmcsIHRoaXMgZXh0ZW5zaW9uIHJldGFpbnMgc3VwcG9ydCBmb3IgU2hhZG93IERPTSB2MC4gVGhhdFxuICAgKiB3aWxsIGV2ZW50dWFsbHkgYmUgZGVwcmVjYXRlZCBhcyBicm93c2VycyAoYW5kIHRoZSBTaGFkb3cgRE9NIHBvbHlmaWxsKVxuICAgKiBpbXBsZW1lbnQgU2hhZG93IERPTSB2MS5cbiAgICovXG4gIGNsYXNzIFNoYWRvd1RlbXBsYXRlIGV4dGVuZHMgYmFzZSB7XG5cbiAgICAvKlxuICAgICAqIElmIHRoZSBjb21wb25lbnQgZGVmaW5lcyBhIHRlbXBsYXRlLCBhIHNoYWRvdyByb290IHdpbGwgYmUgY3JlYXRlZCBvbiB0aGVcbiAgICAgKiBjb21wb25lbnQgaW5zdGFuY2UsIGFuZCB0aGUgdGVtcGxhdGUgc3RhbXBlZCBpbnRvIGl0LlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIGxldCB0ZW1wbGF0ZSA9IHRoaXMudGVtcGxhdGU7XG4gICAgICAvLyBUT0RPOiBTYXZlIHRoZSBwcm9jZXNzZWQgdGVtcGxhdGUgd2l0aCB0aGUgY29tcG9uZW50J3MgY2xhc3MgcHJvdG90eXBlXG4gICAgICAvLyBzbyBpdCBkb2Vzbid0IG5lZWQgdG8gYmUgcHJvY2Vzc2VkIHdpdGggZXZlcnkgaW5zdGFudGlhdGlvbi5cbiAgICAgIGlmICh0ZW1wbGF0ZSkge1xuXG4gICAgICAgIGlmICh0eXBlb2YgdGVtcGxhdGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgLy8gVXBncmFkZSBwbGFpbiBzdHJpbmcgdG8gcmVhbCB0ZW1wbGF0ZS5cbiAgICAgICAgICB0ZW1wbGF0ZSA9IGNyZWF0ZVRlbXBsYXRlV2l0aElubmVySFRNTCh0ZW1wbGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAod2luZG93LlNoYWRvd0RPTVBvbHlmaWxsKSB7XG4gICAgICAgICAgc2hpbVRlbXBsYXRlU3R5bGVzKHRlbXBsYXRlLCB0aGlzLmxvY2FsTmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcm9vdCA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICAgICAgICBsZXQgY2xvbmUgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRlbXBsYXRlLmNvbnRlbnQsIHRydWUpO1xuICAgICAgICByb290LmFwcGVuZENoaWxkKGNsb25lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBTaGFkb3dUZW1wbGF0ZTtcbn07XG5cblxuLy8gQ29udmVydCBhIHBsYWluIHN0cmluZyBvZiBIVE1MIGludG8gYSByZWFsIHRlbXBsYXRlIGVsZW1lbnQuXG5mdW5jdGlvbiBjcmVhdGVUZW1wbGF0ZVdpdGhJbm5lckhUTUwoaW5uZXJIVE1MKSB7XG4gIGxldCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gIC8vIFJFVklFVzogSXMgdGhlcmUgYW4gZWFzaWVyIHdheSB0byBkbyB0aGlzP1xuICAvLyBXZSdkIGxpa2UgdG8ganVzdCBzZXQgaW5uZXJIVE1MIG9uIHRoZSB0ZW1wbGF0ZSBjb250ZW50LCBidXQgc2luY2UgaXQnc1xuICAvLyBhIERvY3VtZW50RnJhZ21lbnQsIHRoYXQgZG9lc24ndCB3b3JrLlxuICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gIHdoaWxlIChkaXYuY2hpbGROb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgdGVtcGxhdGUuY29udGVudC5hcHBlbmRDaGlsZChkaXYuY2hpbGROb2Rlc1swXSk7XG4gIH1cbiAgcmV0dXJuIHRlbXBsYXRlO1xufVxuXG4vLyBJbnZva2UgYmFzaWMgc3R5bGUgc2hpbW1pbmcgd2l0aCBTaGFkb3dDU1MuXG5mdW5jdGlvbiBzaGltVGVtcGxhdGVTdHlsZXModGVtcGxhdGUsIHRhZykge1xuICB3aW5kb3cuV2ViQ29tcG9uZW50cy5TaGFkb3dDU1Muc2hpbVN0eWxpbmcodGVtcGxhdGUuY29udGVudCwgdGFnKTtcbn1cbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi9jcmVhdGVTeW1ib2wnO1xuaW1wb3J0IG1pY3JvdGFzayBmcm9tICcuL21pY3JvdGFzayc7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IGNhblNlbGVjdE5leHRTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2NhblNlbGVjdE5leHQnKTtcbmNvbnN0IGNhblNlbGVjdFByZXZpb3VzU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdjYW5TZWxlY3RQcmV2aW91cycpO1xuY29uc3Qgc2VsZWN0ZWRJdGVtU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdzZWxlY3RlZEl0ZW0nKTtcbmNvbnN0IHNlbGVjdGlvblJlcXVpcmVkU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdzZWxlY3Rpb25SZXF1aXJlZCcpO1xuY29uc3Qgc2VsZWN0aW9uV3JhcHNTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3NlbGVjdGlvbldyYXBzJyk7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBTaW5nbGVTZWxlY3Rpb24uICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBtYW5hZ2VzIHNpbmdsZS1zZWxlY3Rpb24gc2VtYW50aWNzIGZvciBpdGVtcyBpbiBhIGxpc3QuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyBhIGNvbXBvbmVudCB0byBwcm92aWRlIGFuIGBpdGVtc2AgYXJyYXkgb2YgYWxsIGVsZW1lbnRzXG4gICAqIGluIHRoZSBsaXN0LiBBIHN0YW5kYXJkIHdheSB0byBkbyB0aGF0IHdpdGggaXMgdGhlXG4gICAqIFtDb250ZW50QXNJdGVtc10oQ29udGVudEFzSXRlbXMubWQpIG1peGluLCB3aGljaCB0YWtlcyBhIGNvbXBvbmVudCdzXG4gICAqIGNvbnRlbnQgKHR5cGljYWxseSBpdHMgZGlzdHJpYnV0ZWQgY2hpbGRyZW4pIGFzIHRoZSBzZXQgb2YgbGlzdCBpdGVtczsgc2VlXG4gICAqIHRoYXQgbWl4aW4gZm9yIGRldGFpbHMuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gdHJhY2tzIGEgc2luZ2xlIHNlbGVjdGVkIGl0ZW0gaW4gdGhlIGxpc3QsIGFuZCBwcm92aWRlcyBtZWFucyB0b1xuICAgKiBnZXQgYW5kIHNldCB0aGF0IHN0YXRlIGJ5IGl0ZW0gcG9zaXRpb24gKGBzZWxlY3RlZEluZGV4YCkgb3IgaXRlbSBpZGVudGl0eVxuICAgKiAoYHNlbGVjdGVkSXRlbWApLiBUaGUgc2VsZWN0aW9uIGNhbiBiZSBtb3ZlZCBpbiB0aGUgbGlzdCB2aWEgdGhlIG1ldGhvZHNcbiAgICogYHNlbGVjdEZpcnN0YCwgYHNlbGVjdExhc3RgLCBgc2VsZWN0TmV4dGAsIGFuZCBgc2VsZWN0UHJldmlvdXNgLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGRvZXMgbm90IHByb2R1Y2UgYW55IHVzZXItdmlzaWJsZSBlZmZlY3RzIHRvIHJlcHJlc2VudFxuICAgKiBzZWxlY3Rpb24uIE90aGVyIG1peGlucywgc3VjaCBhc1xuICAgKiBbU2VsZWN0aW9uQXJpYUFjdGl2ZV0oU2VsZWN0aW9uQXJpYUFjdGl2ZS5tZCksXG4gICAqIFtTZWxlY3Rpb25IaWdobGlnaHRdKFNlbGVjdGlvbkhpZ2hsaWdodC5tZCkgYW5kXG4gICAqIFtTZWxlY3Rpb25JblZpZXddKFNlbGVjdGlvbkluVmlldy5tZCksIG1vZGlmeSB0aGUgc2VsZWN0ZWQgaXRlbSBpbiBjb21tb25cbiAgICogd2F5cyB0byBsZXQgdGhlIHVzZXIga25vdyBhIGdpdmVuIGl0ZW0gaXMgc2VsZWN0ZWQgb3Igbm90IHNlbGVjdGVkLlxuICAgKi9cbiAgY2xhc3MgU2luZ2xlU2VsZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICAvLyBTZXQgZGVmYXVsdHMuXG4gICAgICBpZiAodHlwZW9mIHRoaXMuc2VsZWN0aW9uUmVxdWlyZWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uUmVxdWlyZWQgPSB0aGlzLmRlZmF1bHRzLnNlbGVjdGlvblJlcXVpcmVkO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiB0aGlzLnNlbGVjdGlvbldyYXBzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbldyYXBzID0gdGhpcy5kZWZhdWx0cy5zZWxlY3Rpb25XcmFwcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBcHBseSB0aGUgaW5kaWNhdGUgc2VsZWN0aW9uIHN0YXRlIHRvIHRoZSBpdGVtLlxuICAgICAqXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLiBVc2VyLXZpc2libGVcbiAgICAgKiBlZmZlY3RzIHdpbGwgdHlwaWNhbGx5IGJlIGhhbmRsZWQgYnkgb3RoZXIgbWl4aW5zLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaXRlbSAtIHRoZSBpdGVtIGJlaW5nIHNlbGVjdGVkL2Rlc2VsZWN0ZWRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNlbGVjdGVkIC0gdHJ1ZSBpZiB0aGUgaXRlbSBpcyBzZWxlY3RlZCwgZmFsc2UgaWYgbm90XG4gICAgICovXG4gICAgYXBwbHlTZWxlY3Rpb24oaXRlbSwgc2VsZWN0ZWQpIHtcbiAgICAgIGlmIChzdXBlci5hcHBseVNlbGVjdGlvbikgeyBzdXBlci5hcHBseVNlbGVjdGlvbihpdGVtLCBzZWxlY3RlZCk7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHRoZSBzZWxlY3Rpb24gY2FuIGJlIG1vdmVkIHRvIHRoZSBuZXh0IGl0ZW0sIGZhbHNlIGlmIG5vdCAodGhlXG4gICAgICogc2VsZWN0ZWQgaXRlbSBpcyB0aGUgbGFzdCBpdGVtIGluIHRoZSBsaXN0KS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIGdldCBjYW5TZWxlY3ROZXh0KCkge1xuICAgICAgcmV0dXJuIHRoaXNbY2FuU2VsZWN0TmV4dFN5bWJvbF07XG4gICAgfVxuICAgIHNldCBjYW5TZWxlY3ROZXh0KGNhblNlbGVjdE5leHQpIHtcbiAgICAgIHRoaXNbY2FuU2VsZWN0TmV4dFN5bWJvbF0gPSBjYW5TZWxlY3ROZXh0O1xuICAgICAgaWYgKCdjYW5TZWxlY3ROZXh0JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5jYW5TZWxlY3ROZXh0ID0gY2FuU2VsZWN0TmV4dDsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRydWUgaWYgdGhlIHNlbGVjdGlvbiBjYW4gYmUgbW92ZWQgdG8gdGhlIHByZXZpb3VzIGl0ZW0sIGZhbHNlIGlmIG5vdFxuICAgICAqICh0aGUgc2VsZWN0ZWQgaXRlbSBpcyB0aGUgZmlyc3Qgb25lIGluIHRoZSBsaXN0KS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIGdldCBjYW5TZWxlY3RQcmV2aW91cygpIHtcbiAgICAgIHJldHVybiB0aGlzW2NhblNlbGVjdFByZXZpb3VzU3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IGNhblNlbGVjdFByZXZpb3VzKGNhblNlbGVjdFByZXZpb3VzKSB7XG4gICAgICB0aGlzW2NhblNlbGVjdFByZXZpb3VzU3ltYm9sXSA9IGNhblNlbGVjdFByZXZpb3VzO1xuICAgICAgaWYgKCdjYW5TZWxlY3RQcmV2aW91cycgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuY2FuU2VsZWN0UHJldmlvdXMgPSBjYW5TZWxlY3RQcmV2aW91czsgfVxuICAgIH1cblxuICAgIGdldCBkZWZhdWx0cygpIHtcbiAgICAgIGxldCBkZWZhdWx0cyA9IHN1cGVyLmRlZmF1bHRzIHx8IHt9O1xuICAgICAgZGVmYXVsdHMuc2VsZWN0aW9uUmVxdWlyZWQgPSBmYWxzZTtcbiAgICAgIGRlZmF1bHRzLnNlbGVjdGlvbldyYXBzID0gZmFsc2U7XG4gICAgICByZXR1cm4gZGVmYXVsdHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIGEgbmV3IGl0ZW0gYmVpbmcgYWRkZWQgdG8gdGhlIGxpc3QuXG4gICAgICpcbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBzaW1wbHkgc2V0cyB0aGUgaXRlbSdzXG4gICAgICogc2VsZWN0aW9uIHN0YXRlIHRvIGZhbHNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaXRlbSAtIHRoZSBpdGVtIGJlaW5nIGFkZGVkXG4gICAgICovXG4gICAgaXRlbUFkZGVkKGl0ZW0pIHtcbiAgICAgIGlmIChzdXBlci5pdGVtQWRkZWQpIHsgc3VwZXIuaXRlbUFkZGVkKGl0ZW0pOyB9XG4gICAgICB0aGlzLmFwcGx5U2VsZWN0aW9uKGl0ZW0sIGl0ZW0gPT09IHRoaXMuc2VsZWN0ZWRJdGVtKTtcbiAgICB9XG5cbiAgICBpdGVtc0NoYW5nZWQoKSB7XG4gICAgICBpZiAoc3VwZXIuaXRlbXNDaGFuZ2VkKSB7IHN1cGVyLml0ZW1zQ2hhbmdlZCgpOyB9XG5cbiAgICAgIGlmICh0aGlzLnNlbGVjdGlvblJlcXVpcmVkKSB7XG4gICAgICAgIC8vIEVuc3VyZSBzZWxlY3Rpb24sIGJ1dCBkbyB0aGlzIGluIHRoZSBuZXh0IHRpY2sgdG8gZ2l2ZSBvdGhlciBtaXhpbnMgYVxuICAgICAgICAvLyBjaGFuY2UgdG8gZG8gdGhlaXIgb3duIGl0ZW1zQ2hhbmdlZCB3b3JrLlxuICAgICAgICBtaWNyb3Rhc2soKCkgPT4ge1xuICAgICAgICAgIGVuc3VyZVNlbGVjdGlvbih0aGlzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjaGFuZ2UgaW4gaXRlbXMgbWF5IGhhdmUgYWZmZWN0ZWQgd2hpY2ggbmF2aWdhdGlvbnMgYXJlIHBvc3NpYmxlLlxuICAgICAgdXBkYXRlUG9zc2libGVOYXZpZ2F0aW9ucyh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW5kZXggb2YgdGhlIGl0ZW0gd2hpY2ggaXMgY3VycmVudGx5IHNlbGVjdGVkLlxuICAgICAqXG4gICAgICogSWYgYHNlbGVjdGlvbldyYXBzYCBpcyBmYWxzZSwgdGhlIGluZGV4IGlzIC0xIGlmIHRoZXJlIGlzIG5vIHNlbGVjdGlvbi5cbiAgICAgKiBJbiB0aGF0IGNhc2UsIHNldHRpbmcgdGhlIGluZGV4IHRvIC0xIHdpbGwgZGVzZWxlY3QgYW55XG4gICAgICogY3VycmVudGx5LXNlbGVjdGVkIGl0ZW0uXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldCBzZWxlY3RlZEluZGV4KCkge1xuICAgICAgbGV0IHNlbGVjdGVkSXRlbSA9IHRoaXMuc2VsZWN0ZWRJdGVtO1xuXG4gICAgICAvLyBUT0RPOiBJZiBzZWxlY3Rpb24gd2Fzbid0IGZvdW5kLCBtb3N0IGxpa2VseSBjYXVzZSBpcyB0aGF0IHRoZSBET00gd2FzXG4gICAgICAvLyBtYW5pcHVsYXRlZCBmcm9tIHVuZGVybmVhdGggdXMuIE9uY2Ugd2UgdHJhY2sgY29udGVudCBjaGFuZ2VzLCB0dXJuXG4gICAgICAvLyB0aGlzIGludG8gYSB3YXJuaW5nLlxuICAgICAgLy8gVE9ETzogTWVtb2l6ZVxuICAgICAgcmV0dXJuIHNlbGVjdGVkSXRlbSA/XG4gICAgICAgIHRoaXMuaXRlbXMuaW5kZXhPZihzZWxlY3RlZEl0ZW0pIDpcbiAgICAgICAgLTE7XG4gICAgfVxuICAgIHNldCBzZWxlY3RlZEluZGV4KGluZGV4KSB7XG4gICAgICAvLyBUT0RPOiBQdWxsIHNldHRpbmcgb2Ygc2VsZWN0ZWRJdGVtIGFib3ZlIHN1cGVyKCkgY2FsbC4gKi9cbiAgICAgIGlmICgnc2VsZWN0ZWRJbmRleCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJbmRleCA9IGluZGV4OyB9XG4gICAgICBsZXQgaXRlbXMgPSB0aGlzLml0ZW1zO1xuICAgICAgbGV0IGl0ZW07XG4gICAgICBpZiAoaW5kZXggPCAwIHx8IGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpdGVtID0gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGl0ZW0gPSBpdGVtc1tpbmRleF07XG4gICAgICB9XG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IGl0ZW07XG5cbiAgICAgIGxldCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnc2VsZWN0ZWQtaW5kZXgtY2hhbmdlZCcsIHtcbiAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgc2VsZWN0ZWRJbmRleDogaW5kZXgsXG4gICAgICAgICAgdmFsdWU6IGluZGV4IC8vIGZvciBQb2x5bWVyIGJpbmRpbmdcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgaXRlbSwgb3IgbnVsbCBpZiB0aGVyZSBpcyBubyBzZWxlY3Rpb24uXG4gICAgICpcbiAgICAgKiBTZXR0aW5nIHRoaXMgcHJvcGVydHkgdG8gbnVsbCBkZXNlbGVjdHMgYW55IGN1cnJlbnRseS1zZWxlY3RlZCBpdGVtLlxuICAgICAqXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0ZWRJdGVtKCkge1xuICAgICAgcmV0dXJuIHRoaXNbc2VsZWN0ZWRJdGVtU3ltYm9sXSB8fCBudWxsO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0ZWRJdGVtKGl0ZW0pIHtcbiAgICAgIGxldCBwcmV2aW91c0l0ZW0gPSB0aGlzW3NlbGVjdGVkSXRlbVN5bWJvbF07XG4gICAgICAvLyBUT0RPOiBDb25maXJtIGl0ZW0gaXMgYWN0dWFsbHkgaW4gdGhlIGxpc3QgYmVmb3JlIHNlbGVjdGluZy5cbiAgICAgIHRoaXNbc2VsZWN0ZWRJdGVtU3ltYm9sXSA9IGl0ZW07XG5cbiAgICAgIGlmICgnc2VsZWN0ZWRJdGVtJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEl0ZW0gPSBpdGVtOyB9XG4gICAgICBpZiAocHJldmlvdXNJdGVtKSB7XG4gICAgICAgIGlmIChpdGVtID09PSBwcmV2aW91c0l0ZW0pIHtcbiAgICAgICAgICAvLyBUaGUgaW5kaWNhdGVkIGl0ZW0gaXMgYWxyZWFkeSB0aGUgc2VsZWN0ZWQgaXRlbS5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVtb3ZlIHByZXZpb3VzIHNlbGVjdGlvbi5cbiAgICAgICAgdGhpcy5hcHBseVNlbGVjdGlvbihwcmV2aW91c0l0ZW0sIGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgdGhpcy5hcHBseVNlbGVjdGlvbihpdGVtLCB0cnVlKTtcbiAgICAgIH1cblxuICAgICAgLy8gVE9ETzogUmF0aW9uYWxpemUgd2l0aCBzZWxlY3RlZEluZGV4IHNvIHdlJ3JlIG5vdCByZWNhbGN1bGF0aW5nIGl0ZW1cbiAgICAgIC8vIG9yIGluZGV4IGluIGVhY2ggc2V0dGVyLlxuICAgICAgdXBkYXRlUG9zc2libGVOYXZpZ2F0aW9ucyh0aGlzKTtcblxuICAgICAgbGV0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdzZWxlY3RlZC1pdGVtLWNoYW5nZWQnLCB7XG4gICAgICAgIGRldGFpbDoge1xuICAgICAgICAgIHNlbGVjdGVkSXRlbTogaXRlbSxcbiAgICAgICAgICBwcmV2aW91c0l0ZW06IHByZXZpb3VzSXRlbSxcbiAgICAgICAgICB2YWx1ZTogaXRlbSAvLyBmb3IgUG9seW1lciBiaW5kaW5nXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgdGhlIGZpcnN0IGl0ZW0gaW4gdGhlIGxpc3QuXG4gICAgICovXG4gICAgc2VsZWN0Rmlyc3QoKSB7XG4gICAgICBpZiAoc3VwZXIuc2VsZWN0Rmlyc3QpIHsgc3VwZXIuc2VsZWN0Rmlyc3QoKTsgfVxuICAgICAgcmV0dXJuIHNlbGVjdEluZGV4KHRoaXMsIDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRydWUgaWYgdGhlIGxpc3Qgc2hvdWxkIGFsd2F5cyBoYXZlIGEgc2VsZWN0aW9uIChpZiBpdCBoYXMgaXRlbXMpLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0aW9uUmVxdWlyZWQoKSB7XG4gICAgICByZXR1cm4gdGhpc1tzZWxlY3Rpb25SZXF1aXJlZFN5bWJvbF07XG4gICAgfVxuICAgIHNldCBzZWxlY3Rpb25SZXF1aXJlZChzZWxlY3Rpb25SZXF1aXJlZCkge1xuICAgICAgdGhpc1tzZWxlY3Rpb25SZXF1aXJlZFN5bWJvbF0gPSBzZWxlY3Rpb25SZXF1aXJlZDtcbiAgICAgIGlmICgnc2VsZWN0aW9uUmVxdWlyZWQnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGlvblJlcXVpcmVkID0gc2VsZWN0aW9uUmVxdWlyZWQ7IH1cbiAgICAgIGlmIChzZWxlY3Rpb25SZXF1aXJlZCkge1xuICAgICAgICBlbnN1cmVTZWxlY3Rpb24odGhpcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IHRoZSBsYXN0IGl0ZW0gaW4gdGhlIGxpc3QuXG4gICAgICovXG4gICAgc2VsZWN0TGFzdCgpIHtcbiAgICAgIGlmIChzdXBlci5zZWxlY3RMYXN0KSB7IHN1cGVyLnNlbGVjdExhc3QoKTsgfVxuICAgICAgcmV0dXJuIHNlbGVjdEluZGV4KHRoaXMsIHRoaXMuaXRlbXMubGVuZ3RoIC0gMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IHRoZSBuZXh0IGl0ZW0gaW4gdGhlIGxpc3QuXG4gICAgICovXG4gICAgc2VsZWN0TmV4dCgpIHtcbiAgICAgIGlmIChzdXBlci5zZWxlY3ROZXh0KSB7IHN1cGVyLnNlbGVjdE5leHQoKTsgfVxuICAgICAgcmV0dXJuIHNlbGVjdEluZGV4KHRoaXMsIHRoaXMuc2VsZWN0ZWRJbmRleCArIDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCB0aGUgcHJldmlvdXMgaXRlbSBpbiB0aGUgbGlzdC5cbiAgICAgKlxuICAgICAqIElmIHRoZSBsaXN0IGhhcyBubyBzZWxlY3Rpb24sIHRoZSBsYXN0IGl0ZW0gd2lsbCBiZSBzZWxlY3RlZC5cbiAgICAgKi9cbiAgICBzZWxlY3RQcmV2aW91cygpIHtcbiAgICAgIGlmIChzdXBlci5zZWxlY3RQcmV2aW91cykgeyBzdXBlci5zZWxlY3RQcmV2aW91cygpOyB9XG4gICAgICBsZXQgbmV3SW5kZXggPSB0aGlzLnNlbGVjdGVkSW5kZXggPCAwID9cbiAgICAgICAgdGhpcy5pdGVtcy5sZW5ndGggLSAxIDogICAgIC8vIE5vIHNlbGVjdGlvbiB5ZXQ7IHNlbGVjdCBsYXN0IGl0ZW0uXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCAtIDE7XG4gICAgICByZXR1cm4gc2VsZWN0SW5kZXgodGhpcywgbmV3SW5kZXgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRydWUgaWYgc2VsZWN0aW9uIG5hdmlnYXRpb25zIHdyYXAgZnJvbSBsYXN0IHRvIGZpcnN0LCBhbmQgdmljZSB2ZXJzYS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGlvbldyYXBzKCkge1xuICAgICAgcmV0dXJuIHRoaXNbc2VsZWN0aW9uV3JhcHNTeW1ib2xdO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0aW9uV3JhcHModmFsdWUpIHtcbiAgICAgIHRoaXNbc2VsZWN0aW9uV3JhcHNTeW1ib2xdID0gU3RyaW5nKHZhbHVlKSA9PT0gJ3RydWUnO1xuICAgICAgaWYgKCdzZWxlY3Rpb25XcmFwcycgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0aW9uV3JhcHMgPSB2YWx1ZTsgfVxuICAgICAgdXBkYXRlUG9zc2libGVOYXZpZ2F0aW9ucyh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaXJlcyB3aGVuIHRoZSBzZWxlY3RlZEl0ZW0gcHJvcGVydHkgY2hhbmdlcy5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBTaW5nbGVTZWxlY3Rpb25cbiAgICAgKiBAZXZlbnQgc2VsZWN0ZWQtaXRlbS1jaGFuZ2VkXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZGV0YWlsLnNlbGVjdGVkSXRlbSBUaGUgbmV3IHNlbGVjdGVkIGl0ZW0uXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZGV0YWlsLnByZXZpb3VzSXRlbSBUaGUgcHJldmlvdXNseSBzZWxlY3RlZCBpdGVtLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogRmlyZXMgd2hlbiB0aGUgc2VsZWN0ZWRJbmRleCBwcm9wZXJ0eSBjaGFuZ2VzLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIFNpbmdsZVNlbGVjdGlvblxuICAgICAqIEBldmVudCBzZWxlY3RlZC1pbmRleC1jaGFuZ2VkXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGRldGFpbC5zZWxlY3RlZEluZGV4IFRoZSBuZXcgc2VsZWN0ZWQgaW5kZXguXG4gICAgICovXG5cbiAgfVxuXG4gIHJldHVybiBTaW5nbGVTZWxlY3Rpb247XG59O1xuXG5cbi8vIElmIG5vIGl0ZW0gaXMgc2VsZWN0ZWQsIHNlbGVjdCBhIGRlZmF1bHQgaXRlbS5cbmZ1bmN0aW9uIGVuc3VyZVNlbGVjdGlvbihlbGVtZW50KSB7XG4gIGxldCBpbmRleCA9IGVsZW1lbnQuc2VsZWN0ZWRJbmRleDtcbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIC8vIFNlbGVjdGVkIGl0ZW0gaXMgbm8gbG9uZ2VyIGluIHRoZSBjdXJyZW50IHNldCBvZiBpdGVtcy5cbiAgICBpZiAoZWxlbWVudC5pdGVtcyAmJiBlbGVtZW50Lml0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIFNlbGVjdCB0aGUgZmlyc3QgaXRlbS5cbiAgICAgIC8vIFRPRE86IElmIHRoZSBwcmV2aW91c2x5LXNlbGVjdGVkIGl0ZW0gaGFzIGJlZW4gZGVsZXRlZCwgdHJ5IHRvIHNlbGVjdFxuICAgICAgLy8gYW4gaXRlbSBhZGphY2VudCB0byB0aGUgcG9zaXRpb24gaXQgaGVsZC5cbiAgICAgIGVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE5vIGl0ZW1zIGZvciB1cyB0byBzZWxlY3QsIGJ1dCB3ZSBjYW4gYXQgbGVhc3Qgc2lnbmFsIHRoYXQgdGhlcmUncyBub1xuICAgICAgLy8gbG9uZ2VyIGEgc2VsZWN0aW9uLlxuICAgICAgZWxlbWVudC5zZWxlY3RlZEl0ZW0gPSBudWxsO1xuICAgIH1cbiAgfVxufVxuXG4vLyBFbnN1cmUgdGhlIGdpdmVuIGluZGV4IGlzIHdpdGhpbiBib3VuZHMsIGFuZCBzZWxlY3QgaXQgaWYgaXQncyBub3QgYWxyZWFkeVxuLy8gc2VsZWN0ZWQuXG5mdW5jdGlvbiBzZWxlY3RJbmRleChlbGVtZW50LCBpbmRleCkge1xuICBsZXQgY291bnQgPSBlbGVtZW50Lml0ZW1zLmxlbmd0aDtcbiAgbGV0IGJvdW5kZWRJbmRleDtcbiAgaWYgKGVsZW1lbnQuc2VsZWN0aW9uV3JhcHMpIHtcbiAgICAvLyBKYXZhU2NyaXB0IG1vZCBkb2Vzbid0IGhhbmRsZSBuZWdhdGl2ZSBudW1iZXJzIHRoZSB3YXkgd2Ugd2FudCB0byB3cmFwLlxuICAgIC8vIFNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xODYxODI1MC83NjQ3MlxuICAgIGJvdW5kZWRJbmRleCA9ICgoaW5kZXggJSBjb3VudCkgKyBjb3VudCkgJSBjb3VudDtcbiAgfSBlbHNlIHtcbiAgICAvLyBLZWVwIGluZGV4IHdpdGhpbiBib3VuZHMgb2YgYXJyYXkuXG4gICAgYm91bmRlZEluZGV4ID0gTWF0aC5tYXgoTWF0aC5taW4oaW5kZXgsIGNvdW50IC0gMSksIDApO1xuICB9XG4gIGxldCBwcmV2aW91c0luZGV4ID0gZWxlbWVudC5zZWxlY3RlZEluZGV4O1xuICBpZiAocHJldmlvdXNJbmRleCAhPT0gYm91bmRlZEluZGV4KSB7XG4gICAgZWxlbWVudC5zZWxlY3RlZEluZGV4ID0gYm91bmRlZEluZGV4O1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG4vLyBGb2xsb3dpbmcgYSBjaGFuZ2UgaW4gc2VsZWN0aW9uLCByZXBvcnQgd2hldGhlciBpdCdzIG5vdyBwb3NzaWJsZSB0b1xuLy8gZ28gbmV4dC9wcmV2aW91cyBmcm9tIHRoZSBnaXZlbiBpbmRleC5cbmZ1bmN0aW9uIHVwZGF0ZVBvc3NpYmxlTmF2aWdhdGlvbnMoZWxlbWVudCkge1xuICBsZXQgY2FuU2VsZWN0TmV4dDtcbiAgbGV0IGNhblNlbGVjdFByZXZpb3VzO1xuICBsZXQgaXRlbXMgPSBlbGVtZW50Lml0ZW1zO1xuICBpZiAoaXRlbXMgPT0gbnVsbCB8fCBpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAvLyBObyBpdGVtcyB0byBzZWxlY3QuXG4gICAgY2FuU2VsZWN0TmV4dCA9IGZhbHNlO1xuICAgIGNhblNlbGVjdFByZXZpb3VzID0gZmFsc2U7XG4gIH0gaWYgKGVsZW1lbnQuc2VsZWN0aW9uV3JhcHMpIHtcbiAgICAvLyBTaW5jZSB0aGVyZSBhcmUgaXRlbXMsIGNhbiBhbHdheXMgZ28gbmV4dC9wcmV2aW91cy5cbiAgICBjYW5TZWxlY3ROZXh0ID0gdHJ1ZTtcbiAgICBjYW5TZWxlY3RQcmV2aW91cyA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgbGV0IGluZGV4ID0gZWxlbWVudC5zZWxlY3RlZEluZGV4O1xuICAgIGlmIChpbmRleCA8IDAgJiYgaXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgLy8gU3BlY2lhbCBjYXNlLiBJZiB0aGVyZSBhcmUgaXRlbXMgYnV0IG5vIHNlbGVjdGlvbiwgZGVjbGFyZSB0aGF0IGl0J3NcbiAgICAgIC8vIGFsd2F5cyBwb3NzaWJsZSB0byBnbyBuZXh0L3ByZXZpb3VzIHRvIGNyZWF0ZSBhIHNlbGVjdGlvbi5cbiAgICAgIGNhblNlbGVjdE5leHQgPSB0cnVlO1xuICAgICAgY2FuU2VsZWN0UHJldmlvdXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBOb3JtYWwgY2FzZTogd2UgaGF2ZSBhbiBpbmRleCBpbiBhIGxpc3QgdGhhdCBoYXMgaXRlbXMuXG4gICAgICBjYW5TZWxlY3RQcmV2aW91cyA9IChpbmRleCA+IDApO1xuICAgICAgY2FuU2VsZWN0TmV4dCA9IChpbmRleCA8IGl0ZW1zLmxlbmd0aCAtIDEpO1xuICAgIH1cbiAgfVxuICBlbGVtZW50LmNhblNlbGVjdE5leHQgPSBjYW5TZWxlY3ROZXh0O1xuICBlbGVtZW50LmNhblNlbGVjdFByZXZpb3VzID0gY2FuU2VsZWN0UHJldmlvdXM7XG59XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4vY3JlYXRlU3ltYm9sJztcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3QgZGVsdGFYU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdkZWx0YVgnKTtcbmNvbnN0IGRlbHRhWVN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnZGVsdGFZJyk7XG5jb25zdCBtdWx0aVRvdWNoU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdtdWx0aVRvdWNoJyk7XG5jb25zdCBwcmV2aW91c1hTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3ByZXZpb3VzWCcpO1xuY29uc3QgcHJldmlvdXNZU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdwcmV2aW91c1knKTtcbmNvbnN0IHN0YXJ0WFN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnc3RhcnRYJyk7XG5jb25zdCB0cmF2ZWxGcmFjdGlvblN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgndHJhdmVsRnJhY3Rpb24nKTtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFN3aXBlRGlyZWN0aW9uLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggbWFwcyB0b3VjaCBnZXN0dXJlcyAoc3dpcGUgbGVmdCwgc3dpcGUgcmlnaHQpIHRvIGRpcmVjdGlvblxuICAgKiBzZW1hbnRpY3MgKGdvIHJpZ2h0LCBnbyBsZWZ0KS5cbiAgICpcbiAgICogQnkgZGVmYXVsdCwgdGhpcyBtaXhpbiBwcmVzZW50cyBubyB1c2VyLXZpc2libGUgZWZmZWN0czsgaXQganVzdCBpbmRpY2F0ZXMgYVxuICAgKiBkaXJlY3Rpb24gaW4gd2hpY2ggdGhlIHVzZXIgaXMgY3VycmVudGx5IHN3aXBpbmcgb3IgaGFzIGZpbmlzaGVkIHN3aXBpbmcuIFRvXG4gICAqIG1hcCB0aGUgZGlyZWN0aW9uIHRvIGEgY2hhbmdlIGluIHNlbGVjdGlvbiwgdXNlIHRoZVxuICAgKiBbRGlyZWN0aW9uU2VsZWN0aW9uXShEaXJlY3Rpb25TZWxlY3Rpb24ubWQpIG1peGluLlxuICAgKi9cbiAgY2xhc3MgU3dpcGVEaXJlY3Rpb24gZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcblxuICAgICAgLy8gRm9yIHRoZSBjb21wb25lbnQgdG8gcmVjZWl2ZSBQb2ludGVyRXZlbnRzIGluIElFL0VkZ2UsIHdlIG5lZWQgdG8gc2V0XG4gICAgICAvLyB0b3VjaC1hY3Rpb246IG5vbmUuIE9ubHkgbWFrZSB0aGlzIGNoYW5nZSBpZiB0b3VjaC1hY3Rpb24gaXMgY3VycmVudGx5XG4gICAgICAvLyB0aGUgZGVmYXVsdCB2YWx1ZSAoXCJhdXRvXCIpLCBpbiBjYXNlIHRoZSBkZXZlbG9wZXIga25vd3MgYmV0dGVyIHRoYW4gd2VcbiAgICAgIC8vIGRvIHdoYXQgdGhleSB3YW50IGluIHRoZWlyIHBhcnRpY3VsYXIgY29udGV4dC5cbiAgICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKHRoaXMpLnRvdWNoQWN0aW9uID09PSAnYXV0bycpIHtcbiAgICAgICAgdGhpcy5zdHlsZS50b3VjaEFjdGlvbiA9ICdub25lJztcbiAgICAgIH1cblxuICAgICAgdGhpcy50cmF2ZWxGcmFjdGlvbiA9IDA7XG5cbiAgICAgIC8vIFRPRE86IFRvdWNoIGV2ZW50cyBjb3VsZCBiZSBmYWN0b3JlZCBvdXQgaW50byBpdHMgb3duIG1peGluLlxuXG4gICAgICAvLyBJbiBhbGwgdG91Y2ggZXZlbnRzLCBvbmx5IGhhbmRsZSBzaW5nbGUgdG91Y2hlcy4gV2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgLy8gaW5hZHZlcnRlbnRseSBkbyB3b3JrIHdoZW4gdGhlIHVzZXIncyB0cnlpbmcgdG8gcGluY2gtem9vbSBmb3IgZXhhbXBsZS5cbiAgICAgIC8vIFRPRE86IEV2ZW4gYmV0dGVyIGFwcHJvYWNoIHRoYW4gYmVsb3cgd291bGQgYmUgdG8gaWdub3JlIHRvdWNoZXMgYWZ0ZXJcbiAgICAgIC8vIHRoZSBmaXJzdCBpZiB0aGUgdXNlciBoYXMgYWxyZWFkeSBiZWd1biBhIHN3aXBlLlxuICAgICAgaWYgKHdpbmRvdy5Qb2ludGVyRXZlbnQpIHtcbiAgICAgICAgLy8gUHJlZmVyIGxpc3RlbmluZyB0byBzdGFuZGFyZCBwb2ludGVyIGV2ZW50cy5cbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIGV2ZW50ID0+IHtcbiAgICAgICAgICBpZiAoaXNFdmVudEZvclBlbk9yUHJpbWFyeVRvdWNoKGV2ZW50KSkge1xuICAgICAgICAgICAgdG91Y2hTdGFydCh0aGlzLCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJtb3ZlJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGlmIChpc0V2ZW50Rm9yUGVuT3JQcmltYXJ5VG91Y2goZXZlbnQpKSB7XG4gICAgICAgICAgICBsZXQgaGFuZGxlZCA9IHRvdWNoTW92ZSh0aGlzLCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcbiAgICAgICAgICAgIGlmIChoYW5kbGVkKSB7XG4gICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVydXAnLCBldmVudCA9PiB7XG4gICAgICAgICAgaWYgKGlzRXZlbnRGb3JQZW5PclByaW1hcnlUb3VjaChldmVudCkpIHtcbiAgICAgICAgICAgIHRvdWNoRW5kKHRoaXMsIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBQb2ludGVyIGV2ZW50cyBub3Qgc3VwcG9ydGVkIC0tIGxpc3RlbiB0byBvbGRlciB0b3VjaCBldmVudHMuXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICBpZiAodGhpc1ttdWx0aVRvdWNoU3ltYm9sXSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQudG91Y2hlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIGxldCBjbGllbnRYID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgICAgIGxldCBjbGllbnRZID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WTtcbiAgICAgICAgICAgIHRvdWNoU3RhcnQodGhpcywgY2xpZW50WCwgY2xpZW50WSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXNbbXVsdGlUb3VjaFN5bWJvbF0gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGlmICghdGhpc1ttdWx0aVRvdWNoU3ltYm9sXSAmJiBldmVudC50b3VjaGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgbGV0IGNsaWVudFggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICAgICAgbGV0IGNsaWVudFkgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZO1xuICAgICAgICAgICAgbGV0IGhhbmRsZWQgPSB0b3VjaE1vdmUodGhpcywgY2xpZW50WCwgY2xpZW50WSk7XG4gICAgICAgICAgICBpZiAoaGFuZGxlZCkge1xuICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBldmVudCA9PiB7XG4gICAgICAgICAgaWYgKGV2ZW50LnRvdWNoZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAvLyBBbGwgdG91Y2hlcyByZW1vdmVkOyBnZXN0dXJlIGlzIGNvbXBsZXRlLlxuICAgICAgICAgICAgaWYgKCF0aGlzW211bHRpVG91Y2hTeW1ib2xdKSB7XG4gICAgICAgICAgICAgIC8vIFNpbmdsZS10b3VjaCBzd2lwZSBoYXMgZmluaXNoZWQuXG4gICAgICAgICAgICAgIGxldCBjbGllbnRYID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgICAgICAgbGV0IGNsaWVudFkgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZO1xuICAgICAgICAgICAgICB0b3VjaEVuZCh0aGlzLCBjbGllbnRYLCBjbGllbnRZKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXNbbXVsdGlUb3VjaFN5bWJvbF0gPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSBsZWZ0LlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy5cbiAgICAgKi9cbiAgICBnb0xlZnQoKSB7XG4gICAgICBpZiAoc3VwZXIuZ29MZWZ0KSB7IHJldHVybiBzdXBlci5nb0xlZnQoKTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSByaWdodC5cbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuXG4gICAgICovXG4gICAgZ29SaWdodCgpIHtcbiAgICAgIGlmIChzdXBlci5nb1JpZ2h0KSB7IHJldHVybiBzdXBlci5nb1JpZ2h0KCk7IH1cbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IGltcGxlbWVudGF0aW9uLlxuICAgIGdldCBzaG93VHJhbnNpdGlvbigpIHtcbiAgICAgIHJldHVybiBzdXBlci5zaG93VHJhbnNpdGlvbjtcbiAgICB9XG4gICAgc2V0IHNob3dUcmFuc2l0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoJ3Nob3dUcmFuc2l0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zaG93VHJhbnNpdGlvbiA9IHZhbHVlOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGRpc3RhbmNlIHRoZSBmaXJzdCB0b3VjaHBvaW50IGhhcyB0cmF2ZWxlZCBzaW5jZSB0aGUgYmVnaW5uaW5nIG9mIGFcbiAgICAgKiBkcmFnLCBleHByZXNzZWQgYXMgYSBmcmFjdGlvbiBvZiB0aGUgZWxlbWVudCdzIHdpZHRoLlxuICAgICAqXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICovXG4gICAgZ2V0IHRyYXZlbEZyYWN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXNbdHJhdmVsRnJhY3Rpb25TeW1ib2xdO1xuICAgIH1cbiAgICBzZXQgdHJhdmVsRnJhY3Rpb24odmFsdWUpIHtcbiAgICAgIHRoaXNbdHJhdmVsRnJhY3Rpb25TeW1ib2xdID0gdmFsdWU7XG4gICAgICBpZiAoJ3RyYXZlbEZyYWN0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci50cmF2ZWxGcmFjdGlvbiA9IHZhbHVlOyB9XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gU3dpcGVEaXJlY3Rpb247XG59O1xuXG5cbi8vIFJldHVybiB0cnVlIGlmIHRoZSBwb2ludGVyIGV2ZW50IGlzIGZvciB0aGUgcGVuLCBvciB0aGUgcHJpbWFyeSB0b3VjaCBwb2ludC5cbmZ1bmN0aW9uIGlzRXZlbnRGb3JQZW5PclByaW1hcnlUb3VjaChldmVudCkge1xuICByZXR1cm4gZXZlbnQucG9pbnRlclR5cGUgPT09ICdwZW4nIHx8XG4gICAgICAoZXZlbnQucG9pbnRlclR5cGUgPT09ICd0b3VjaCcgJiYgZXZlbnQuaXNQcmltYXJ5KTtcbn1cblxuXG5mdW5jdGlvbiB0b3VjaFN0YXJ0KGVsZW1lbnQsIGNsaWVudFgsIGNsaWVudFkpIHtcbiAgZWxlbWVudC5zaG93VHJhbnNpdGlvbiA9IGZhbHNlO1xuICBlbGVtZW50W3N0YXJ0WFN5bWJvbF0gPSBjbGllbnRYO1xuICBlbGVtZW50W3ByZXZpb3VzWFN5bWJvbF0gPSBjbGllbnRYO1xuICBlbGVtZW50W3ByZXZpb3VzWVN5bWJvbF0gPSBjbGllbnRZO1xuICBlbGVtZW50W2RlbHRhWFN5bWJvbF0gPSAwO1xuICBlbGVtZW50W2RlbHRhWVN5bWJvbF0gPSAwO1xufVxuXG5mdW5jdGlvbiB0b3VjaE1vdmUoZWxlbWVudCwgY2xpZW50WCwgY2xpZW50WSkge1xuICBlbGVtZW50W2RlbHRhWFN5bWJvbF0gPSBjbGllbnRYIC0gZWxlbWVudFtwcmV2aW91c1hTeW1ib2xdO1xuICBlbGVtZW50W2RlbHRhWVN5bWJvbF0gPSBjbGllbnRZIC0gZWxlbWVudFtwcmV2aW91c1lTeW1ib2xdO1xuICBlbGVtZW50W3ByZXZpb3VzWFN5bWJvbF0gPSBjbGllbnRYO1xuICBlbGVtZW50W3ByZXZpb3VzWVN5bWJvbF0gPSBjbGllbnRZO1xuICBpZiAoTWF0aC5hYnMoZWxlbWVudFtkZWx0YVhTeW1ib2xdKSA+IE1hdGguYWJzKGVsZW1lbnRbZGVsdGFZU3ltYm9sXSkpIHtcbiAgICAvLyBNb3ZlIHdhcyBtb3N0bHkgaG9yaXpvbnRhbC5cbiAgICB0cmFja1RvKGVsZW1lbnQsIGNsaWVudFgpO1xuICAgIC8vIEluZGljYXRlIHRoYXQgdGhlIGV2ZW50IHdhcyBoYW5kbGVkLiBJdCdkIGJlIG5pY2VyIGlmIHdlIGRpZG4ndCBoYXZlXG4gICAgLy8gdG8gZG8gdGhpcyBzbyB0aGF0LCBlLmcuLCBhIHVzZXIgY291bGQgYmUgc3dpcGluZyBsZWZ0IGFuZCByaWdodFxuICAgIC8vIHdoaWxlIHNpbXVsdGFuZW91c2x5IHNjcm9sbGluZyB1cCBhbmQgZG93bi4gKE5hdGl2ZSB0b3VjaCBhcHBzIGNhbiBkb1xuICAgIC8vIHRoYXQuKSBIb3dldmVyLCBNb2JpbGUgU2FmYXJpIHdhbnRzIHRvIGhhbmRsZSBzd2lwZSBldmVudHMgbmVhciB0aGVcbiAgICAvLyBwYWdlIGFuZCBpbnRlcnByZXQgdGhlbSBhcyBuYXZpZ2F0aW9ucy4gVG8gYXZvaWQgaGF2aW5nIGEgaG9yaXppb250YWxcbiAgICAvLyBzd2lwZSBtaXNpbnRlcHJldGVkIGFzIGEgbmF2aWdhdGlvbiwgd2UgaW5kaWNhdGUgdGhhdCB3ZSd2ZSBoYW5kbGVkXG4gICAgLy8gdGhlIGV2ZW50LCBhbmQgcHJldmVudCBkZWZhdWx0IGJlaGF2aW9yLlxuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIC8vIE1vdmUgd2FzIG1vc3RseSB2ZXJ0aWNhbC5cbiAgICByZXR1cm4gZmFsc2U7IC8vIE5vdCBoYW5kbGVkXG4gIH1cbn1cblxuZnVuY3Rpb24gdG91Y2hFbmQoZWxlbWVudCwgY2xpZW50WCwgY2xpZW50WSkge1xuICBlbGVtZW50LnNob3dUcmFuc2l0aW9uID0gdHJ1ZTtcbiAgaWYgKGVsZW1lbnRbZGVsdGFYU3ltYm9sXSA+PSAyMCkge1xuICAgIC8vIEZpbmlzaGVkIGdvaW5nIHJpZ2h0IGF0IGhpZ2ggc3BlZWQuXG4gICAgZWxlbWVudC5nb0xlZnQoKTtcbiAgfSBlbHNlIGlmIChlbGVtZW50W2RlbHRhWFN5bWJvbF0gPD0gLTIwKSB7XG4gICAgLy8gRmluaXNoZWQgZ29pbmcgbGVmdCBhdCBoaWdoIHNwZWVkLlxuICAgIGVsZW1lbnQuZ29SaWdodCgpO1xuICB9IGVsc2Uge1xuICAgIC8vIEZpbmlzaGVkIGF0IGxvdyBzcGVlZC5cbiAgICB0cmFja1RvKGVsZW1lbnQsIGNsaWVudFgpO1xuICAgIGxldCB0cmF2ZWxGcmFjdGlvbiA9IGVsZW1lbnQudHJhdmVsRnJhY3Rpb247XG4gICAgaWYgKHRyYXZlbEZyYWN0aW9uID49IDAuNSkge1xuICAgICAgZWxlbWVudC5nb1JpZ2h0KCk7XG4gICAgfSBlbHNlIGlmICh0cmF2ZWxGcmFjdGlvbiA8PSAtMC41KSB7XG4gICAgICBlbGVtZW50LmdvTGVmdCgpO1xuICAgIH1cbiAgfVxuICBlbGVtZW50LnRyYXZlbEZyYWN0aW9uID0gMDtcbiAgZWxlbWVudFtkZWx0YVhTeW1ib2xdID0gbnVsbDtcbiAgZWxlbWVudFtkZWx0YVlTeW1ib2xdID0gbnVsbDtcbn1cblxuZnVuY3Rpb24gdHJhY2tUbyhlbGVtZW50LCB4KSB7XG4gIGxldCB3aWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gIGxldCBkcmFnRGlzdGFuY2UgPSBlbGVtZW50W3N0YXJ0WFN5bWJvbF0gLSB4O1xuICBsZXQgZnJhY3Rpb24gPSB3aWR0aCA+IDAgP1xuICAgIGRyYWdEaXN0YW5jZSAvIHdpZHRoIDpcbiAgICAwO1xuICBlbGVtZW50LnRyYXZlbEZyYWN0aW9uID0gZnJhY3Rpb247XG59XG4iLCJpbXBvcnQgQ29sbGVjdGl2ZSBmcm9tICcuL0NvbGxlY3RpdmUnO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggVGFyZ2V0SW5Db2xsZWN0aXZlLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggYWxsb3dzIGEgY29tcG9uZW50IHRvIHByb3ZpZGUgYWdncmVnYXRlIGJlaGF2aW9yIHdpdGggb3RoZXJcbiAgICogZWxlbWVudHMsIGUuZy4sIGZvciBrZXlib2FyZCBoYW5kbGluZy5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBpbXBsaWNpdGx5IGNyZWF0ZXMgYSBjb2xsZWN0aXZlIGZvciBhIGNvbXBvbmVudCBzbyB0aGF0IGl0IGNhblxuICAgKiBwYXJ0aWNpcGF0ZSBpbiBjb2xsZWN0aXZlIGtleWJvYXJkIGhhbmRsaW5nLiBTZWUgdGhlXG4gICAqIFtDb2xsZWN0aXZlXShDb2xsZWN0aXZlLm1kKSBjbGFzcyBmb3IgZGV0YWlscy5cbiAgICpcbiAgICogWW91IGNhbiB1c2UgdGhpcyBtaXhpbiBpbiBjb25qdW5jdGlvbiB3aXRoXG4gICAqIFtDb250ZW50Rmlyc3RDaGlsZFRhcmdldF0oQ29udGVudEZpcnN0Q2hpbGRUYXJnZXQubWQpIHRvIGF1dG9tYXRpY2FsbHkgaGF2ZVxuICAgKiB0aGUgY29tcG9uZW50J3MgY29sbGVjdGl2ZSBleHRlbmRlZCB0byBpdHMgZmlyc3QgY2hpbGQuXG4gICAqL1xuICBjbGFzcyBUYXJnZXRJbkNvbGxlY3RpdmUgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMuY29sbGVjdGl2ZSA9IG5ldyBDb2xsZWN0aXZlKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMvc2V0cyB0aGUgY3VycmVudCB0YXJnZXQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIFNldCB0aGlzIHRvIHBvaW50IHRvIGFub3RoZXIgZWxlbWVudC4gVGhhdCB0YXJnZXQgZWxlbWVudCB3aWxsIGJlXG4gICAgICogaW1wbGljaXRseSBhZGRlZCB0byB0aGUgY29tcG9uZW50J3MgY29sbGVjdGl2ZS4gVGhhdCBpcywgdGhlIGNvbXBvbmVudFxuICAgICAqIGFuZCBpdHMgdGFyZ2V0IHdpbGwgc2hhcmUgcmVzcG9uc2liaWxpdHkgZm9yIGhhbmRsaW5nIGtleWJvYXJkIGV2ZW50cy5cbiAgICAgKlxuICAgICAqIFlvdSBjYW4gc2V0IHRoaXMgcHJvcGVydHkgeW91cnNlbGYsIG9yIHlvdSBjYW4gdXNlIHRoZVxuICAgICAqIENvbnRlbnRGaXJzdENoaWxkVGFyZ2V0IG1peGluIHRvIGF1dG9tYXRpY2FsbHkgc2V0IHRoZSB0YXJnZXQgdG8gdGhlXG4gICAgICogY29tcG9uZW50J3MgZmlyc3QgY2hpbGQuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgZ2V0IHRhcmdldCgpIHtcbiAgICAgIHJldHVybiBzdXBlci50YXJnZXQ7XG4gICAgfVxuICAgIHNldCB0YXJnZXQoZWxlbWVudCkge1xuICAgICAgaWYgKCd0YXJnZXQnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnRhcmdldCA9IGVsZW1lbnQ7IH1cbiAgICAgIHRoaXMuY29sbGVjdGl2ZS5hc3NpbWlsYXRlKGVsZW1lbnQpO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIFRhcmdldEluQ29sbGVjdGl2ZTtcbn07XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL2NyZWF0ZVN5bWJvbCc7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IGFic29yYkRlY2VsZXJhdGlvblN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnYWJzb3JiRGVjZWxlcmF0aW9uJyk7XG5jb25zdCBsYXN0RGVsdGFYU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdsYXN0RGVsdGFYJyk7XG5jb25zdCBsYXN0V2hlZWxUaW1lb3V0U3ltYm9sID0gY3JlYXRlU3ltYm9sKCdsYXN0V2hlZWxUaW1lb3V0Jyk7XG5jb25zdCBwb3N0TmF2aWdhdGVEZWxheUNvbXBsZXRlU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdwb3N0TmF2aWdhdGVEZWxheUNvbXBsZXRlJyk7XG5jb25zdCB3aGVlbERpc3RhbmNlU3ltYm9sID0gY3JlYXRlU3ltYm9sKCd3aGVlbERpc3RhbmNlJyk7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBUcmFja3BhZERpcmVjdGlvbi4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIG1hcHMgYSBob3Jpem9udGFsIHRyYWNrcGFkIHN3aXBlIGdlc3R1cmVzIChvciBob3Jpem9udGFsIG1vdXNlXG4gICAqIHdoZWVsIGFjdGlvbnMpIHRvIGRpcmVjdGlvbiBzZW1hbnRpY3MuXG4gICAqXG4gICAqIFlvdSBjYW4gdXNlIHRoaXMgbWl4aW4gd2l0aCBhIG1peGluIGxpa2VcbiAgICogW0RpcmVjdGlvblNlbGVjdGlvbl0oRGlyZWN0aW9uU2VsZWN0aW9uLm1kKSB0byBsZXQgdGhlIHVzZXIgY2hhbmdlIHRoZVxuICAgKiBzZWxlY3Rpb24gd2l0aCB0aGUgdHJhY2twYWQgb3IgbW91c2Ugd2hlZWwuXG4gICAqXG4gICAqIFRvIHJlc3BvbmQgdG8gdGhlIHRyYWNrcGFkLCB3ZSBjYW4gbGlzdGVuIHRvIHRoZSBET00ncyBcIndoZWVsXCIgZXZlbnRzLlxuICAgKiBUaGVzZSBldmVudHMgYXJlIGZpcmVkIGFzIHRoZSB1c2VyIGRyYWdzIHRoZWlyIGZpbmdlcnMgYWNyb3NzIGEgdHJhY2twYWQuXG4gICAqIFVuZm9ydHVuYXRlbHksIGJyb3dzZXJzIGFyZSBtaXNzaW5nIGEgY3JpdGljYWwgZXZlbnQg4oCUwqB0aGVyZSBpcyBubyBldmVudFxuICAgKiB3aGVuIHRoZSB1c2VyICpzdG9wcyogYSBnZXN0dXJlZCBvbiB0aGUgdHJhY2twYWQgb3IgbW91c2Ugd2hlZWwuXG4gICAqXG4gICAqIFRvIG1ha2UgdGhpbmdzIHdvcnNlLCB0aGUgbWFpbnN0cmVhbSBicm93c2VycyBjb250aW51ZSB0byBnZW5lcmF0ZSBmYWtlXG4gICAqIHdoZWVsIGV2ZW50cyBldmVuIGFmdGVyIHRoZSB1c2VyIGhhcyBzdG9wcGVkIGRyYWdnaW5nIHRoZWlyIGZpbmdlcnMuIFRoZXNlXG4gICAqIGZha2UgZXZlbnRzIHNpbXVsYXRlIHRoZSB1c2VyIGdyYWR1YWxseSBzbG93aW5nIGRvd24gdGhlIGRyYWcgdW50aWwgdGhleVxuICAgKiBjb21lIHRvIGEgc21vb3RoIHN0b3AuIEluIHNvbWUgY29udGV4dHMsIHRoZXNlIGZha2Ugd2hlZWwgZXZlbnRzIG1pZ2h0IGJlXG4gICAqIGhlbHBmdWwsIGJ1dCBpbiB0cnlpbmcgdG8gc3VwcGx5IHR5cGljYWwgdHJhY2twYWQgc3dpcGUgbmF2aWdhdGlvbiwgdGhlc2VcbiAgICogZmFrZSBldmVudHMgZ2V0IGluIHRoZSB3YXkuXG4gICAqXG4gICAqIFRoaXMgY29tcG9uZW50IHVzZXMgaGV1cmlzdGljcyB0byB3b3JrIGFyb3VuZCB0aGVzZSBwcm9ibGVtcywgYnV0IHRoZVxuICAgKiBjb21wbGV4IG5hdHVyZSBvZiB0aGUgcHJvYmxlbSBtYWtlIGl0IGV4dHJlbWVseSBkaWZmaWN1bHQgdG8gYWNoaWV2ZSB0aGVcbiAgICogc2FtZSBkZWdyZWUgb2YgdHJhY2twYWQgcmVzcG9uc2l2ZW5lc3MgcG9zc2libGUgd2l0aCBuYXRpdmUgYXBwbGljYXRpb25zLlxuICAgKi9cbiAgY2xhc3MgVHJhY2twYWREaXJlY3Rpb24gZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBldmVudCA9PiB7XG4gICAgICAgIGxldCBoYW5kbGVkID0gd2hlZWwodGhpcywgZXZlbnQpO1xuICAgICAgICBpZiAoaGFuZGxlZCkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmVzZXRXaGVlbFRyYWNraW5nKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSBsZWZ0LlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy5cbiAgICAgKi9cbiAgICBnb0xlZnQoKSB7XG4gICAgICBpZiAoc3VwZXIuZ29MZWZ0KSB7IHJldHVybiBzdXBlci5nb0xlZnQoKTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSByaWdodC5cbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuXG4gICAgICovXG4gICAgZ29SaWdodCgpIHtcbiAgICAgIGlmIChzdXBlci5nb1JpZ2h0KSB7IHJldHVybiBzdXBlci5nb1JpZ2h0KCk7IH1cbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IGltcGxlbWVudGF0aW9uLlxuICAgIGdldCBzaG93VHJhbnNpdGlvbigpIHtcbiAgICAgIHJldHVybiBzdXBlci5zaG93VHJhbnNpdGlvbjtcbiAgICB9XG4gICAgc2V0IHNob3dUcmFuc2l0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoJ3Nob3dUcmFuc2l0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zaG93VHJhbnNpdGlvbiA9IHZhbHVlOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGRpc3RhbmNlIHRoZSB1c2VyIGhhcyBtb3ZlZCB0aGUgZmlyc3QgdG91Y2hwb2ludCBzaW5jZSB0aGUgYmVnaW5uaW5nXG4gICAgICogb2YgYSB0cmFja3BhZC93aGVlbCBvcGVyYXRpb24sIGV4cHJlc3NlZCBhcyBhIGZyYWN0aW9uIG9mIHRoZSBlbGVtZW50J3NcbiAgICAgKiB3aWR0aC5cbiAgICAgKlxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqL1xuICAgIGdldCB0cmF2ZWxGcmFjdGlvbigpIHtcbiAgICAgIHJldHVybiBzdXBlci50cmF2ZWxGcmFjdGlvbjtcbiAgICB9XG4gICAgc2V0IHRyYXZlbEZyYWN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoJ3RyYXZlbEZyYWN0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci50cmF2ZWxGcmFjdGlvbiA9IHZhbHVlOyB9XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gVHJhY2twYWREaXJlY3Rpb247XG59O1xuXG5cbi8vIFRpbWUgd2Ugd2FpdCBmb2xsb3dpbmcgYSBuYXZpZ2F0aW9uIGJlZm9yZSBwYXlpbmcgYXR0ZW50aW9uIHRvIHdoZWVsXG4vLyBldmVudHMgYWdhaW4uXG5jb25zdCBQT1NUX05BVklHQVRFX1RJTUUgPSAyNTA7XG5cbi8vIFRpbWUgd2Ugd2FpdCBhZnRlciB0aGUgbGFzdCB3aGVlbCBldmVudCBiZWZvcmUgd2UgcmVzZXQgdGhpbmdzLlxuY29uc3QgV0hFRUxfVElNRSA9IDEwMDtcblxuXG4vLyBGb2xsb3dpbmcgYSBuYXZpZ2F0aW9uLCBwYXJ0aWFsbHkgcmVzZXQgb3VyIHdoZWVsIHRyYWNraW5nLlxuZnVuY3Rpb24gcG9zdE5hdmlnYXRlKGVsZW1lbnQpIHtcbiAgZWxlbWVudC50cmF2ZWxGcmFjdGlvbiA9IDA7XG4gIGVsZW1lbnRbd2hlZWxEaXN0YW5jZVN5bWJvbF0gPSAwO1xuICBlbGVtZW50W3Bvc3ROYXZpZ2F0ZURlbGF5Q29tcGxldGVTeW1ib2xdID0gdHJ1ZTtcbiAgZWxlbWVudFthYnNvcmJEZWNlbGVyYXRpb25TeW1ib2xdID0gdHJ1ZTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZWxlbWVudFtwb3N0TmF2aWdhdGVEZWxheUNvbXBsZXRlU3ltYm9sXSA9IGZhbHNlO1xuICB9LCBQT1NUX05BVklHQVRFX1RJTUUpO1xufVxuXG4vLyBSZXNldCBhbGwgc3RhdGUgcmVsYXRlZCB0byB0aGUgdHJhY2tpbmcgb2YgdGhlIHdoZWVsLlxuZnVuY3Rpb24gcmVzZXRXaGVlbFRyYWNraW5nKGVsZW1lbnQpIHtcbiAgZWxlbWVudC50cmF2ZWxGcmFjdGlvbiA9IDA7XG4gIGVsZW1lbnRbd2hlZWxEaXN0YW5jZVN5bWJvbF0gPSAwO1xuICBlbGVtZW50W2xhc3REZWx0YVhTeW1ib2xdID0gMDtcbiAgZWxlbWVudFthYnNvcmJEZWNlbGVyYXRpb25TeW1ib2xdID0gZmFsc2U7XG4gIGVsZW1lbnRbcG9zdE5hdmlnYXRlRGVsYXlDb21wbGV0ZVN5bWJvbF0gPSBmYWxzZTtcbiAgaWYgKGVsZW1lbnRbbGFzdFdoZWVsVGltZW91dFN5bWJvbF0pIHtcbiAgICBjbGVhclRpbWVvdXQoZWxlbWVudFtsYXN0V2hlZWxUaW1lb3V0U3ltYm9sXSk7XG4gICAgZWxlbWVudFtsYXN0V2hlZWxUaW1lb3V0U3ltYm9sXSA9IG51bGw7XG4gIH1cbn1cblxuLy8gRGVmaW5lIG91ciBvd24gc2lnbiBmdW5jdGlvbiwgc2luY2UgKGFzIG9mIE1heSAyMDE1KSwgU2FmYXJpIGFuZCBJRSBkb24ndFxuLy8gc3VwcGx5IE1hdGguc2lnbigpLlxuZnVuY3Rpb24gc2lnbih4KSB7XG4gIHJldHVybiAoeCA9PT0gMCkgP1xuICAgIDAgOlxuICAgICh4ID4gMCkgP1xuICAgICAgMSA6XG4gICAgICAtMTtcbn1cblxuLy8gVE9ETzogRGFtcGluZywgb3Igc29tZSBvdGhlciB0cmVhdG1lbnQgZm9yIGdvaW5nIHBhc3QgdGhlIGVuZHMuXG5cbi8qXG4gKiBBIHdoZWVsIGV2ZW50IGhhcyBiZWVuIGdlbmVyYXRlZC4gVGhpcyBjb3VsZCBiZSBhIHJlYWwgd2hlZWwgZXZlbnQsIG9yIGl0XG4gKiBjb3VsZCBiZSBmYWtlIChzZWUgbm90ZXMgaW4gdGhlIGhlYWRlcikuXG4gKlxuICogVGhpcyBoYW5kbGVyIHVzZXMgc2V2ZXJhbCBzdHJhdGVnaWVzIHRvIHRyeSB0byBhcHByb3hpbWF0ZSBuYXRpdmUgdHJhY2twYWRcbiAqIHN3aXBlIG5hdmlnYXRpb24uXG4gKlxuICogSWYgdGhlIHVzZXIgaGFzIGRyYWdnZWQgZW5vdWdoIHRvIGNhdXNlIGEgbmF2aWdhdGlvbiwgdGhlbiBmb3IgYSBzaG9ydFxuICogZGVsYXkgZm9sbG93aW5nIHRoYXQgbmF2aWdhdGlvbiwgc3Vic2VxdWVudCB3aGVlbCBldmVudHMgd2lsbCBiZSBpZ25vcmVkLlxuICpcbiAqIEZ1cnRoZXJtb3JlLCBmb2xsd293aW5nIGEgbmF2aWdhdGlvbiwgd2UgaWdub3JlIGFsbCB3aGVlbCBldmVudHMgdW50aWwgd2VcbiAqIHJlY2VpdmUgYXQgbGVhc3Qgb25lIGV2ZW50IHdoZXJlIHRoZSBldmVudCdzIGRlbHRhWCAoZGlzdGFuY2UgdHJhdmVsZWQpIGlzXG4gKiAqZ3JlYXRlciogdGhhbiB0aGUgcHJldmlvdXMgZXZlbnQncyBkZWx0YVguIFRoaXMgaGVscHMgdXMgZmlsdGVyIG91dCB0aGVcbiAqIGZha2Ugd2hlZWwgZXZlbnRzIGdlbmVyYXRlZCBieSB0aGUgYnJvd3NlciB0byBzaW11bGF0ZSBkZWNlbGVyYXRpb24uXG4gKlxuICovXG5mdW5jdGlvbiB3aGVlbChlbGVtZW50LCBldmVudCkge1xuXG4gIC8vIFNpbmNlIHdlIGhhdmUgYSBuZXcgd2hlZWwgZXZlbnQsIHJlc2V0IG91ciB0aW1lciB3YWl0aW5nIGZvciB0aGUgbGFzdFxuICAvLyB3aGVlbCBldmVudCB0byBwYXNzLlxuICBpZiAoZWxlbWVudFtsYXN0V2hlZWxUaW1lb3V0U3ltYm9sXSkge1xuICAgIGNsZWFyVGltZW91dChlbGVtZW50W2xhc3RXaGVlbFRpbWVvdXRTeW1ib2xdKTtcbiAgfVxuICBlbGVtZW50W2xhc3RXaGVlbFRpbWVvdXRTeW1ib2xdID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgd2hlZWxUaW1lZE91dChlbGVtZW50KTtcbiAgfSwgV0hFRUxfVElNRSk7XG5cbiAgbGV0IGRlbHRhWCA9IGV2ZW50LmRlbHRhWDtcbiAgbGV0IGRlbHRhWSA9IGV2ZW50LmRlbHRhWTtcblxuICAvLyBTZWUgaWYgZWxlbWVudCBldmVudCByZXByZXNlbnRzIGFjY2VsZXJhdGlvbiBvciBkZWNlbGVyYXRpb24uXG4gIGxldCBhY2NlbGVyYXRpb24gPSBzaWduKGRlbHRhWCkgKiAoZGVsdGFYIC0gZWxlbWVudFtsYXN0RGVsdGFYU3ltYm9sXSk7XG4gIGVsZW1lbnRbbGFzdERlbHRhWFN5bWJvbF0gPSBkZWx0YVg7XG4gIC8vIGNvbnNvbGUubG9nKGRlbHRhWCArIFwiIFwiICsgYWNjZWxlcmF0aW9uICsgXCIgXCIgKyBlbGVtZW50W2Fic29yYkRlY2VsZXJhdGlvblN5bWJvbF0gKyBcIiBcIiArIGVsZW1lbnRbcG9zdE5hdmlnYXRlRGVsYXlDb21wbGV0ZVN5bWJvbF0pO1xuXG4gIGlmIChNYXRoLmFicyhkZWx0YVgpIDwgTWF0aC5hYnMoZGVsdGFZKSkge1xuICAgIC8vIE1vdmUgd2FzIG1vc3RseSB2ZXJ0aWNhbC4gVGhlIHVzZXIgbWF5IGJlIHRyeWluZyBzY3JvbGwgd2l0aCB0aGVcbiAgICAvLyB0cmFja3BhZC93aGVlbC4gVG8gYmUgb24gdGhlIHNhZmUsIHdlIGlnbm9yZSBzdWNoIGV2ZW50cy5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoZWxlbWVudFtwb3N0TmF2aWdhdGVEZWxheUNvbXBsZXRlU3ltYm9sXSkge1xuICAgIC8vIEl0J3MgdG9vIHNvb24gYWZ0ZXIgYSBuYXZpZ2F0aW9uOyBpZ25vcmUgdGhlIGV2ZW50LlxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cblxuICBpZiAoYWNjZWxlcmF0aW9uID4gMCkge1xuICAgIC8vIFRoZSBldmVudHMgYXJlIG5vdCAob3IgYXJlIG5vIGxvbmdlcikgZGVjZWxlcmF0aW5nLCBzbyB3ZSBjYW4gc3RhcnRcbiAgICAvLyBwYXlpbmcgYXR0ZW50aW9uIHRvIHRoZW0gYWdhaW4uXG4gICAgZWxlbWVudFthYnNvcmJEZWNlbGVyYXRpb25TeW1ib2xdID0gZmFsc2U7XG4gIH0gZWxzZSBpZiAoZWxlbWVudFthYnNvcmJEZWNlbGVyYXRpb25TeW1ib2xdKSB7XG4gICAgLy8gVGhlIHdoZWVsIGV2ZW50IHdhcyBsaWtlbHkgZmFrZWQgdG8gc2ltdWxhdGUgZGVjZWxlcmF0aW9uOyBpZ25vcmUgaXQuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBlbGVtZW50W3doZWVsRGlzdGFuY2VTeW1ib2xdICs9IGRlbHRhWDtcblxuICAvLyBVcGRhdGUgdGhlIHRyYXZlbCBmcmFjdGlvbiBvZiB0aGUgZWxlbWVudCBiZWluZyBuYXZpZ2F0ZWQuXG4gIGxldCB3aWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gIGxldCB0cmF2ZWxGcmFjdGlvbiA9IHdpZHRoID4gMCA/XG4gICAgZWxlbWVudFt3aGVlbERpc3RhbmNlU3ltYm9sXSAvIHdpZHRoIDpcbiAgICAwO1xuICBlbGVtZW50LnNob3dUcmFuc2l0aW9uID0gZmFsc2U7XG4gIHRyYXZlbEZyYWN0aW9uID0gc2lnbih0cmF2ZWxGcmFjdGlvbikgKiBNYXRoLm1pbihNYXRoLmFicyh0cmF2ZWxGcmFjdGlvbiksIDEpO1xuICBlbGVtZW50LnRyYXZlbEZyYWN0aW9uID0gdHJhdmVsRnJhY3Rpb247XG5cbiAgLy8gSWYgdGhlIHVzZXIgaGFzIGRyYWdnZWQgZW5vdWdoIHRvIHJlYWNoIHRoZSBwcmV2aW91cy9uZXh0IGl0ZW0sIHRoZW5cbiAgLy8gY29tcGxldGUgYSBuYXZpZ2F0aW9uIHRvIHRoYXQgaXRlbS5cbiAgaWYgKHRyYXZlbEZyYWN0aW9uID09PSAxKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJnb1JpZ2h0XCIpO1xuICAgIGVsZW1lbnQuc2hvd1RyYW5zaXRpb24gPSB0cnVlO1xuICAgIGVsZW1lbnQuZ29SaWdodCgpO1xuICAgIHBvc3ROYXZpZ2F0ZShlbGVtZW50KTtcbiAgfSBlbHNlIGlmICh0cmF2ZWxGcmFjdGlvbiA9PT0gLTEpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcImdvTGVmdFwiKTtcbiAgICBlbGVtZW50LnNob3dUcmFuc2l0aW9uID0gdHJ1ZTtcbiAgICBlbGVtZW50LmdvTGVmdCgpO1xuICAgIHBvc3ROYXZpZ2F0ZShlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG4vLyBBIHN1ZmZpY2llbnRseSBsb25nIHBlcmlvZCBvZiB0aW1lIGhhcyBwYXNzZWQgc2luY2UgdGhlIGxhc3Qgd2hlZWwgZXZlbnQuXG4vLyBXZSBzbmFwIHRoZSBzZWxlY3Rpb24gdG8gdGhlIGNsb3Nlc3QgaXRlbSwgdGhlbiByZXNldCBvdXIgc3RhdGUuXG5mdW5jdGlvbiB3aGVlbFRpbWVkT3V0KGVsZW1lbnQpIHtcbiAgLy8gY29uc29sZS5sb2coXCJ0aW1lb3V0XCIpO1xuXG4gIC8vIFNuYXAgdG8gdGhlIGNsb3Nlc3QgaXRlbS5cbiAgZWxlbWVudC5zaG93VHJhbnNpdGlvbiA9IHRydWU7XG4gIGxldCB0cmF2ZWxGcmFjdGlvbiA9IGVsZW1lbnQudHJhdmVsRnJhY3Rpb247XG4gIGlmICh0cmF2ZWxGcmFjdGlvbiA+PSAwLjUpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcInNuYXAgcmlnaHRcIik7XG4gICAgZWxlbWVudC5nb1JpZ2h0KCk7XG4gIH0gZWxzZSBpZiAodHJhdmVsRnJhY3Rpb24gPD0gLTAuNSkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwic25hcCBsZWZ0XCIpO1xuICAgIGVsZW1lbnQuZ29MZWZ0KCk7XG4gIH1cblxuICAvLyBUT0RPOiBMaXN0ZW4gZm9yIHRoZSB0cmFuc2l0aW9uIHRvIGNvbXBsZXRlLCBhbmQgdGhlbiByZXN0b3JlXG4gIC8vIHNob3dUcmFuc2l0aW9uIHRvIGZhbHNlIChvciB0aGUgcHJldmlvdXMgdmFsdWUpLlxuXG4gIHJlc2V0V2hlZWxUcmFja2luZyhlbGVtZW50KTtcbn1cbiIsIi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIGNyZWF0ZSBhIHN5bWJvbCB0aGF0IGNhbiBiZSB1c2VkIGZvciBhc3NvY2lhdGluZyBwcml2YXRlXG4gKiBkYXRhIHdpdGggYW4gZWxlbWVudC5cbiAqXG4gKiBNaXhpbnMgYW5kIGNvbXBvbmVudCBjbGFzc2VzIG9mdGVuIHdhbnQgdG8gYXNzb2NpYXRlIHByaXZhdGUgZGF0YSB3aXRoIGFuXG4gKiBlbGVtZW50IGluc3RhbmNlLCBidXQgSmF2YVNjcmlwdCBkb2VzIG5vdCBoYXZlIGRpcmVjdCBzdXBwb3J0IGZvciB0cnVlXG4gKiBwcml2YXRlIHByb3BlcnRpZXMuIE9uZSBhcHByb2FjaCBpcyB0byB1c2UgdGhlXG4gKiBbU3ltYm9sXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9TeW1ib2wpXG4gKiBkYXRhIHR5cGUgdG8gc2V0IGFuZCByZXRyaWV2ZSBkYXRhIG9uIGFuIGVsZW1lbnQuXG4gKlxuICogVW5mb3J0dW5hdGVseSwgdGhlIFN5bWJvbCB0eXBlIGlzIG5vdCBhdmFpbGFibGUgaW4gSW50ZXJuZXQgRXhwbG9yZXIgMTEuIFRoZVxuICogYGNyZWF0ZVN5bWJvbGAgaGVscGVyIGZ1bmN0aW9uIGV4aXN0cyBhcyBhIHdvcmthcm91bmQgZm9yIElFIDExLiBSYXRoZXIgdGhhblxuICogcmV0dXJuaW5nIGEgdHJ1ZSBTeW1ib2wsIGl0IHNpbXBseSByZXR1cm5zIGFuIHVuZGVyc2NvcmUtcHJlZml4ZWQgc3RyaW5nLlxuICpcbiAqIFVzYWdlOlxuICpcbiAqICAgICBjb25zdCBmb29TeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2ZvbycpO1xuICpcbiAqICAgICBjbGFzcyBNeUVsZW1lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gKiAgICAgICBnZXQgZm9vKCkge1xuICogICAgICAgICByZXR1cm4gdGhpc1tmb29TeW1ib2xdO1xuICogICAgICAgfVxuICogICAgICAgc2V0IGZvbyh2YWx1ZSkge1xuICogICAgICAgICB0aGlzW2Zvb1N5bWJvbF0gPSB2YWx1ZTtcbiAqICAgICAgIH1cbiAqICAgICB9XG4gKlxuICogSW4gSUUgMTEsIHRoaXMgc2FtcGxlIHdpbGwgXCJoaWRlXCIgZGF0YSBiZWhpbmQgYW4gaW5zdGFuY2UgcHJvcGVydHkgdGhpcy5fZm9vLlxuICogVGhlIHVzZSBvZiB0aGUgdW5kZXJzY29yZSBpcyBtZWFudCB0byByZWR1Y2UgKG5vdCBlbGltaW5hdGUpIHRoZSBwb3RlbnRpYWxcbiAqIGZvciBuYW1lIGNvbmZsaWN0cywgYW5kIGRpc2NvdXJhZ2UgKG5vdCBwcmV2ZW50KSBleHRlcm5hbCBhY2Nlc3MgdG8gdGhpc1xuICogZGF0YS4gSW4gbW9kZXJuIGJyb3dzZXJzLCB0aGUgYWJvdmUgY29kZSB3aWxsIGVsaW1pbmF0ZSB0aGUgcG90ZW50aWFsIG9mXG4gKiBuYW1pbmcgY29uZmxpY3RzLCBhbmQgYmV0dGVyIGhpZGUgdGhlIGRhdGEgYmVoaW5kIGEgcmVhbCBTeW1ib2wuXG4gKlxuICogQGZ1bmN0aW9uIGNyZWF0ZVN5bWJvbFxuICogQHBhcmFtIHtzdHJpbmd9IGRlc2NyaXB0aW9uIC0gQSBzdHJpbmcgdG8gaWRlbnRpZnkgdGhlIHN5bWJvbCB3aGVuIGRlYnVnZ2luZ1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTeW1ib2woZGVzY3JpcHRpb24pIHtcbiAgcmV0dXJuIHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgP1xuICAgIFN5bWJvbChkZXNjcmlwdGlvbikgOlxuICAgIGBfJHtkZXNjcmlwdGlvbn1gO1xufVxuIiwiLypcbiAqIE1pY3JvdGFzayBoZWxwZXIgZm9yIElFIDExLlxuICpcbiAqIEV4ZWN1dGluZyBhIGZ1bmN0aW9uIGFzIGEgbWljcm90YXNrIGlzIHRyaXZpYWwgaW4gYnJvd3NlcnMgdGhhdCBzdXBwb3J0XG4gKiBwcm9taXNlcywgd2hvc2UgdGhlbigpIGNsYXVzZXMgdXNlIG1pY3JvdGFzayB0aW1pbmcuIElFIDExIGRvZXNuJ3Qgc3VwcG9ydFxuICogcHJvbWlzZXMsIGJ1dCBkb2VzIHN1cHBvcnQgTXV0YXRpb25PYnNlcnZlcnMsIHdoaWNoIGFyZSBhbHNvIGV4ZWN1dGVkIGFzXG4gKiBtaWNyb3Rhc2tzLiBTbyB0aGlzIGhlbHBlciB1c2VzIGFuIE11dGF0aW9uT2JzZXJ2ZXIgdG8gYWNoaWV2ZSBtaWNyb3Rhc2tcbiAqIHRpbWluZy5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9qYWtlYXJjaGliYWxkLmNvbS8yMDE1L3Rhc2tzLW1pY3JvdGFza3MtcXVldWVzLWFuZC1zY2hlZHVsZXMvXG4gKlxuICogSW5zcGlyZWQgYnkgUG9seW1lcidzIGFzeW5jKCkgZnVuY3Rpb24uXG4gKi9cblxuXG4vLyBUaGUgcXVldWUgb2YgcGVuZGluZyBjYWxsYmFja3MgdG8gYmUgZXhlY3V0ZWQgYXMgbWljcm90YXNrcy5cbmxldCBjYWxsYmFja3MgPSBbXTtcblxuLy8gQ3JlYXRlIGFuIGVsZW1lbnQgdGhhdCB3ZSB3aWxsIG1vZGlmeSB0byBmb3JjZSBvYnNlcnZhYmxlIG11dGF0aW9ucy5cbmxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuXG4vLyBBIG1vbm90b25pY2FsbHktaW5jcmVhc2luZyB2YWx1ZS5cbmxldCBjb3VudGVyID0gMDtcblxuXG4vKipcbiAqIEFkZCBhIGNhbGxiYWNrIHRvIHRoZSBtaWNyb3Rhc2sgcXVldWUuXG4gKlxuICogVGhpcyB1c2VzIGEgTXV0YXRpb25PYnNlcnZlciBzbyB0aGF0IGl0IHdvcmtzIG9uIElFIDExLlxuICpcbiAqIE5PVEU6IElFIDExIG1heSBhY3R1YWxseSB1c2UgdGltZW91dCB0aW1pbmcgd2l0aCBNdXRhdGlvbk9ic2VydmVycy4gVGhpc1xuICogbmVlZHMgbW9yZSBpbnZlc3RpZ2F0aW9uLlxuICpcbiAqIEBmdW5jdGlvbiBtaWNyb3Rhc2tcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pY3JvdGFzayhjYWxsYmFjaykge1xuICBjYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gIC8vIEZvcmNlIGEgbXV0YXRpb24uXG4gIGVsZW1lbnQudGV4dENvbnRlbnQgPSArK2NvdW50ZXI7XG59XG5cblxuLy8gRXhlY3V0ZSBhbnkgcGVuZGluZyBjYWxsYmFja3MuXG5mdW5jdGlvbiBleGVjdXRlQ2FsbGJhY2tzKCkge1xuICB3aGlsZSAoY2FsbGJhY2tzLmxlbmd0aCA+IDApIHtcbiAgICBsZXQgY2FsbGJhY2sgPSBjYWxsYmFja3Muc2hpZnQoKTtcbiAgICBjYWxsYmFjaygpO1xuICB9XG59XG5cblxuLy8gQ3JlYXRlIHRoZSBvYnNlcnZlci5cbmxldCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGV4ZWN1dGVDYWxsYmFja3MpO1xub2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50LCB7XG4gIGNoYXJhY3RlckRhdGE6IHRydWVcbn0pO1xuIiwiLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gZm9yIHN0YW5kYXJkIGNsYXNzTGlzdC50b2dnbGUoKSBiZWhhdmlvciBvbiBvbGQgYnJvd3NlcnMsXG4gKiBuYW1lbHkgSUUgMTEuXG4gKlxuICogVGhlIHN0YW5kYXJkXG4gKiBbY2xhc3NsaXN0XShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRWxlbWVudC9jbGFzc0xpc3QpXG4gKiBvYmplY3QgaGFzIGEgYHRvZ2dsZSgpYCBmdW5jdGlvbiB0aGF0IHN1cHBvcnRzIGEgc2Vjb25kIEJvb2xlYW4gcGFyYW1ldGVyXG4gKiB0aGF0IGNhbiBiZSB1c2VkIHRvIHN1Y2NpbmN0bHkgdHVybiBhIGNsYXNzIG9uIG9yIG9mZi4gVGhpcyBmZWF0dXJlIGlzIG9mdGVuXG4gKiB1c2VmdWwgaW4gZGVzaWduaW5nIGN1c3RvbSBlbGVtZW50cywgd2hpY2ggbWF5IHdhbnQgdG8gZXh0ZXJuYWxseSByZWZsZWN0XG4gKiBjb21wb25lbnQgc3RhdGUgaW4gYSBDU1MgY2xhc3MgdGhhdCBjYW4gYmUgdXNlZCBmb3Igc3R5bGluZyBwdXJwb3Nlcy5cbiAqXG4gKiBVbmZvcnR1bmF0ZWx5LCBJRSAxMSBkb2VzIG5vdCBzdXBwb3J0IHRoZSBCb29sZWFuIHBhcmFtZXRlciB0b1xuICogYGNsYXNzTGlzdC50b2dnbGUoKWAuIFRoaXMgaGVscGVyIGZ1bmN0aW9uIGJlaGF2ZXMgbGlrZSB0aGUgc3RhbmRhcmRcbiAqIGB0b2dnbGUoKWAsIGluY2x1ZGluZyBzdXBwb3J0IGZvciB0aGUgQm9vbGVhbiBwYXJhbWV0ZXIsIHNvIHRoYXQgaXQgY2FuIGJlXG4gKiB1c2VkIGV2ZW4gb24gSUUgMTEuXG4gKlxuICogQGZ1bmN0aW9uIHRvZ2dsZUNsYXNzXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gVGhlIGVsZW1lbnQgdG8gbW9kaWZ5XG4gKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIC0gVGhlIGNsYXNzIHRvIGFkZC9yZW1vdmVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZvcmNlXSAtIEZvcmNlIHRoZSBjbGFzcyB0byBiZSBhZGRlZCAoaWYgdHJ1ZSkgb3IgcmVtb3ZlZFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgKGlmIGZhbHNlKVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b2dnbGVDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUsIGZvcmNlKSB7XG4gIGxldCBjbGFzc0xpc3QgPSBlbGVtZW50LmNsYXNzTGlzdDtcbiAgbGV0IGFkZENsYXNzID0gKHR5cGVvZiBmb3JjZSA9PT0gJ3VuZGVmaW5lZCcpID9cbiAgICAhY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkgOlxuICAgIGZvcmNlO1xuICBpZiAoYWRkQ2xhc3MpIHtcbiAgICBjbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICB9XG4gIHJldHVybiBhZGRDbGFzcztcbn1cbiIsImltcG9ydCBDb21wb3NhYmxlIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NvbXBvc2FibGUnO1xuaW1wb3J0IFNoYWRvd1RlbXBsYXRlIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NoYWRvd1RlbXBsYXRlJztcbmltcG9ydCBTaGFkb3dFbGVtZW50UmVmZXJlbmNlcyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TaGFkb3dFbGVtZW50UmVmZXJlbmNlcyc7XG5pbXBvcnQgQXR0cmlidXRlTWFyc2hhbGxpbmcgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQXR0cmlidXRlTWFyc2hhbGxpbmcnO1xuaW1wb3J0IERpc3RyaWJ1dGVkQ2hpbGRyZW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlzdHJpYnV0ZWRDaGlsZHJlbic7XG5cblxuLyoqXG4gKiBBIHNhbXBsZSBnZW5lcmFsLXB1cnBvc2UgYmFzZSBjbGFzcyBmb3IgZGVmaW5pbmcgY3VzdG9tIGVsZW1lbnRzIHRoYXQgbWl4ZXNcbiAqIGluIHNvbWUgY29tbW9uIGZlYXR1cmVzOiB0ZW1wbGF0ZSBzdGFtcGluZyBpbnRvIGEgc2hhZG93IHJvb3QsIHNoYWRvdyBlbGVtZW50XG4gKiByZWZlcmVuY2VzLCBtYXJzaGFsbGluZyBhdHRyaWJ1dGVzIHRvIHByb3BlcnRpZXMsIGFuZCByZXRyaWV2aW5nIHRoZSBjaGlsZHJlblxuICogZGlzdHJpYnV0ZWQgdG8gYSBjb21wb25lbnQuXG4gKlxuICogVGhpcyBiYXNlIGNsYXNzIGlzIG5vdCBzcGVjaWFsIGluIGFueSB3YXksIGFuZCBpcyBkZWZpbmVkIG9ubHkgYXMgYVxuICogY29udmVuaWVudCBzaG9ydGhhbmQgZm9yIGFwcGx5aW5nIHRoZSBtaXhpbnMgbGlzdGVkIGFib3ZlLiBZb3UgY2FuIHVzZSB0aGlzXG4gKiBjbGFzcyBhcyBhIGJhc2UgY2xhc3MgZm9yIHlvdXIgb3duIGVsZW1lbnRzLCBvciBlYXNpbHkgY3JlYXRlIHlvdXIgb3duIGJhc2VcbiAqIGNsYXNzIGJ5IGFwcGx5aW5nIHRoZSBzYW1lIHNldCBvZiBtaXhpbnMuXG4gKlxuICogVGhlIEVsZW1lbnRCYXNlIGJhc2UgY2xhc3MgZG9lcyBub3QgcmVnaXN0ZXIgaXRzZWxmIGFzIGEgY3VzdG9tIGVsZW1lbnQgd2l0aFxuICogdGhlIGJyb3dzZXIsIGFuZCBoZW5jZSBjYW5ub3QgYmUgaW5kZXBlbmRlbnRseSBpbnN0YW50aWF0ZWQuXG4gKlxuICogQG1peGVzIEF0dHJpYnV0ZU1hcnNoYWxsaW5nIFxuICogQG1peGVzIENvbXBvc2FibGVcbiAqIEBtaXhlcyBEaXN0cmlidXRlZENoaWxkcmVuXG4gKiBAbWl4ZXMgU2hhZG93RWxlbWVudFJlZmVyZW5jZXNcbiAqIEBtaXhlcyBTaGFkb3dUZW1wbGF0ZVxuICovXG5jbGFzcyBFbGVtZW50QmFzZSBleHRlbmRzIENvbXBvc2FibGUoSFRNTEVsZW1lbnQpLmNvbXBvc2UoXG4gIFNoYWRvd1RlbXBsYXRlLCAgICAgICAgICAvLyBiZWZvcmUgbm9kZSBmaW5kaW5nLCBzbyBzaGFkb3cgcm9vdCBpcyBwb3B1bGF0ZWRcbiAgU2hhZG93RWxlbWVudFJlZmVyZW5jZXMsIC8vIGJlZm9yZSBtYXJzaGFsbGluZywgc28gcHJvcGVydGllcyBjYW4gdXNlIHJlZnNcbiAgQXR0cmlidXRlTWFyc2hhbGxpbmcsXG4gIERpc3RyaWJ1dGVkQ2hpbGRyZW5cbikge1xuXG4gIC8qXG4gICAqIERlYnVnZ2luZyB1dGlsaXR5OiBsb2dzIGEgbWVzc2FnZSwgcHJlZml4ZWQgYnkgdGhlIGNvbXBvbmVudCdzIHRhZy5cbiAgICovXG4gIGxvZyh0ZXh0KSB7XG4gICAgaWYgKHN1cGVyLmxvZykgeyBzdXBlci5sb2codGV4dCk7IH1cbiAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmxvY2FsTmFtZX06ICR7dGV4dH1gKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVsZW1lbnRCYXNlO1xuIiwiaW1wb3J0IEVsZW1lbnRCYXNlIGZyb20gJy4uLy4uL2Jhc2ljLWVsZW1lbnQtYmFzZS9zcmMvRWxlbWVudEJhc2UnO1xuaW1wb3J0IENvbnRlbnRBc0l0ZW1zIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NvbnRlbnRBc0l0ZW1zJztcbmltcG9ydCBEaXJlY3Rpb25TZWxlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlyZWN0aW9uU2VsZWN0aW9uJztcbmltcG9ydCBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50IGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQnO1xuaW1wb3J0IEZyYWN0aW9uYWxTZWxlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRnJhY3Rpb25hbFNlbGVjdGlvbic7XG5pbXBvcnQgS2V5Ym9hcmQgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvS2V5Ym9hcmQnO1xuaW1wb3J0IEtleWJvYXJkRGlyZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0tleWJvYXJkRGlyZWN0aW9uJztcbmltcG9ydCBTZWxlY3Rpb25BcmlhQWN0aXZlIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NlbGVjdGlvbkFyaWFBY3RpdmUnO1xuaW1wb3J0IFNpbmdsZVNlbGVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TaW5nbGVTZWxlY3Rpb24nO1xuaW1wb3J0IFNsaWRpbmdWaWV3cG9ydCBmcm9tICcuLi8uLi9iYXNpYy1zbGlkaW5nLXZpZXdwb3J0L3NyYy9TbGlkaW5nVmlld3BvcnQnOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcbmltcG9ydCBTd2lwZURpcmVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Td2lwZURpcmVjdGlvbic7XG5pbXBvcnQgVGFyZ2V0SW5Db2xsZWN0aXZlIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1RhcmdldEluQ29sbGVjdGl2ZSc7XG5pbXBvcnQgVHJhY2twYWREaXJlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvVHJhY2twYWREaXJlY3Rpb24nO1xuXG5sZXQgYmFzZSA9IEVsZW1lbnRCYXNlLmNvbXBvc2UoXG4gIENvbnRlbnRBc0l0ZW1zLFxuICBEaXJlY3Rpb25TZWxlY3Rpb24sXG4gIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQsXG4gIEZyYWN0aW9uYWxTZWxlY3Rpb24sXG4gIEtleWJvYXJkLFxuICBLZXlib2FyZERpcmVjdGlvbixcbiAgU2VsZWN0aW9uQXJpYUFjdGl2ZSxcbiAgU2luZ2xlU2VsZWN0aW9uLFxuICBTd2lwZURpcmVjdGlvbixcbiAgVGFyZ2V0SW5Db2xsZWN0aXZlLFxuICBUcmFja3BhZERpcmVjdGlvblxuKTtcblxuXG4vKipcbiAqIExldHMgdGhlIHVzZXIgbmF2aWdhdGUgbGF0ZXJhbGx5IHRocm91Z2ggYSBzZXF1ZW5jZSBvZiBjaGlsZCBlbGVtZW50cy5cbiAqXG4gKiBbTGl2ZSBkZW1vXShodHRwOi8vYmFzaWN3ZWJjb21wb25lbnRzLm9yZy9iYXNpYy13ZWItY29tcG9uZW50cy9wYWNrYWdlcy9iYXNpYy1jYXJvdXNlbC8pXG4gKlxuICogYmFzaWMtc2xpZGluZy1jYXJvdXNlbCBpcyBhbiBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgY2Fyb3VzZWwgdXNlciBpbnRlcmZhY2UgcGF0dGVybixcbiAqIGNvbW1vbmx5IHVzZWQgZm9yIG5hdmlnYXRpbmcgYmV0d2VlbiBpbWFnZXMsIHBhZ2VzLCBhbmQgb3RoZXIgZWxlbWVudHMuIFRoaXNcbiAqIHBhdHRlcm4gcHJlc2VudHMgdGhlIHVzZXIgd2l0aCBhIGxpbmVhciBzZXF1ZW5jZSBvZiBlbGVtZW50cywgb25seSBvbmUgb2ZcbiAqIHdoaWNoIGlzIHNob3duIGF0IGEgdGltZS4gVGhlIHVzZXIgY2FuIG5hdmlnYXRlIHRvIHRoZSBuZXh0L3ByZXZpb3VzIGVsZW1lbnRcbiAqIHdpdGggYSB2YXJpZXR5IG9mIGlucHV0IG1ldGhvZHMuXG4gKlxuICogYmFzaWMtc2xpZGluZy1jYXJvdXNlbCBpcyBhIHNpbXBsZXIgdmFyaWF0aW9uIG9mIHRoZSBtb3JlIHNvcGhpc3RpY2F0ZWRcbiAqIFtiYXNpYy1jYXJvdXNlbF0oLi4vYmFzaWMtY2Fyb3VzZWwpIGNvbXBvbmVudC4gVGhlIGxhdHRlciBpbmNsdWRlcyBzdXBwb3J0XG4gKiBmb3IgX3dyYXBwaW5nXyAoZ29pbmcgZm9yd2FyZCBmcm9tIHRoZSBsYXN0IGl0ZW0gdG8gdGhlIGZpcnN0LCBhbmQgdmljZSB2ZXJzYSksXG4gKiBhbmQgbW9yZSBjb21wbGV4IHZpc3VhbCB0cmFuc2l0aW9ucy4gVGhvc2UgdHJhbnNpdGlvbnMgZW50YWlsIHVzZSBvZiB0aGVcbiAqIFdlYiBBbmltYXRpb24gQVBJLCB3aGljaCByZXF1aXJlcyBhIHBvbHlmaWxsIGluIG9sZGVyIGJyb3dzZXJzLiBIZW5jZSwgdGhlXG4gKiBzaW1wbGVyIGJhc2ljLXNsaWRpbmctY2Fyb3VzZWwgbWF5IGJlIGEgbW9yZSBhcHByb3ByaWF0ZSBjaG9pY2UgaWYgZmFjdG9yc1xuICogc3VjaCBhcyBkb3dubG9hZCBzaXplIGFyZSBjcml0aWNhbC5cbiAqXG4gKiBCZXlvbmQgdGhvc2UgZGlmZmVyZW5jZXMsIGJhc2ljLXNsaWRpbmctY2Fyb3VzZWwgb2ZmZXJzIHRoZSBzYW1lIEFQSSwgdXNhZ2VcbiAqIHJlY29tbWVuZGF0aW9ucywgYW5kIHN1cHBvcnQgZm9yIGtleWJvYXJkL3RvdWNoL21vdXNlIGFuZCBhc3Npc3RpdmUgZGV2aWNlcy5cbiAqIFNlZSB0aGF0IGNvbXBvbmVudCBmb3IgbW9yZSBkZXRhaWxzIG9uIHVzZS5cbiAqXG4gKiBAZXh0ZW5kcyBFbGVtZW50QmFzZVxuICogQG1peGVzIENvbnRlbnRBc0l0ZW1zXG4gKiBAbWl4ZXMgRGlyZWN0aW9uU2VsZWN0aW9uXG4gKiBAbWl4ZXMgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudFxuICogQG1peGVzIEdlbmVyaWNcbiAqIEBtaXhlcyBLZXlib2FyZFxuICogQG1peGVzIEtleWJvYXJkRGlyZWN0aW9uXG4gKiBAbWl4ZXMgU2VsZWN0aW9uQXJpYUFjdGl2ZVxuICogQG1peGVzIFNpbmdsZVNlbGVjdGlvblxuICogQG1peGVzIFN3aXBlRGlyZWN0aW9uXG4gKiBAbWl4ZXMgVGFyZ2V0SW5Db2xsZWN0aXZlXG4gKiBAbWl4ZXMgVHJhY2twYWREaXJlY3Rpb25cbiAqL1xuY2xhc3MgU2xpZGluZ0Nhcm91c2VsIGV4dGVuZHMgYmFzZSB7XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKSB7IHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7IH1cbiAgICAvLyBIQUNLXG4gICAgdGhpcy5pdGVtc0NoYW5nZWQoKTtcbiAgfVxuXG4gIGdldCBkZWZhdWx0cygpIHtcbiAgICBsZXQgZGVmYXVsdHMgPSBzdXBlci5kZWZhdWx0cyB8fCB7fTtcbiAgICBkZWZhdWx0cy5uYXZpZ2F0aW9uQXhpcyA9ICdob3Jpem9udGFsJztcbiAgICBkZWZhdWx0cy5zZWxlY3Rpb25SZXF1aXJlZCA9IHRydWU7XG4gICAgcmV0dXJuIGRlZmF1bHRzO1xuICB9XG5cbiAgZ2V0IHNlbGVjdGVkRnJhY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJC52aWV3cG9ydC5zZWxlY3RlZEZyYWN0aW9uO1xuICB9XG4gIHNldCBzZWxlY3RlZEZyYWN0aW9uKHZhbHVlKSB7XG4gICAgaWYgKCdzZWxlY3RlZEZyYWN0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEZyYWN0aW9uID0gdmFsdWU7IH1cbiAgICB0aGlzLiQudmlld3BvcnQuc2VsZWN0ZWRGcmFjdGlvbiA9IHZhbHVlO1xuICAgIGxldCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnc2VsZWN0ZWQtZnJhY3Rpb24tY2hhbmdlZCcpO1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gIH1cblxuICBnZXQgc2VsZWN0ZWRJbmRleCgpIHtcbiAgICByZXR1cm4gc3VwZXIuc2VsZWN0ZWRJbmRleDtcbiAgfVxuICBzZXQgc2VsZWN0ZWRJbmRleCh2YWx1ZSkge1xuICAgIGlmICgnc2VsZWN0ZWRJbmRleCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJbmRleCA9IHZhbHVlOyB9XG4gICAgdGhpcy4kLnZpZXdwb3J0LnNlbGVjdGVkSW5kZXggPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBzZWxlY3RlZEl0ZW0oKSB7XG4gICAgcmV0dXJuIHN1cGVyLnNlbGVjdGVkSXRlbTtcbiAgfVxuICBzZXQgc2VsZWN0ZWRJdGVtKGl0ZW0pIHtcbiAgICBpZiAoJ3NlbGVjdGVkSXRlbScgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJdGVtID0gaXRlbTsgfVxuICAgIHRoaXMuJC52aWV3cG9ydC5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSB3aGV0aGVyIGEgdHJhbnNpdGlvbiBzaG91bGQgYmUgc2hvd24gZHVyaW5nIHNlbGVjdGlvbi5cbiAgICpcbiAgICogQ29tcG9uZW50cyBsaWtlIGNhcm91c2VscyBvZnRlbiBkZWZpbmUgYW5pbWF0ZWQgQ1NTIHRyYW5zaXRpb25zIGZvclxuICAgKiBzbGlkaW5nIGVmZmVjdHMuIFN1Y2ggYSB0cmFuc2l0aW9uIHNob3VsZCB1c3VhbGx5ICpub3QqIGJlIGFwcGxpZWQgd2hpbGVcbiAgICogdGhlIHVzZXIgaXMgZHJhZ2dpbmcsIGJlY2F1c2UgYSBDU1MgYW5pbWF0aW9uIHdpbGwgaW50cm9kdWNlIGEgbGFnIHRoYXRcbiAgICogbWFrZXMgdGhlIHN3aXBlIGZlZWwgc2x1Z2dpc2guIEluc3RlYWQsIGFzIGxvbmcgYXMgdGhlIHVzZXIgaXMgZHJhZ2dpbmdcbiAgICogd2l0aCB0aGVpciBmaW5nZXIgZG93biwgdGhlIHRyYW5zaXRpb24gc2hvdWxkIGJlIHN1cHByZXNzZWQuIFdoZW4gdGhlXG4gICAqIHVzZXIgcmVsZWFzZXMgdGhlaXIgZmluZ2VyLCB0aGUgdHJhbnNpdGlvbiBjYW4gYmUgcmVzdG9yZWQsIGFsbG93aW5nIHRoZVxuICAgKiBhbmltYXRpb24gdG8gc2hvdyB0aGUgY2Fyb3VzZWwgc2xpZGluZyBpbnRvIGl0cyBmaW5hbCBwb3NpdGlvbi5cbiAgICpcbiAgICogTm90ZTogVGhpcyBwcm9wZXJ0eSBpcyBvbmx5IGludGVuZGVkIHRvIGxldCBhIGNvbXBvbmVudCBjb29wZXJhdGUgd2l0aFxuICAgKiBtaXhpbnMgdGhhdCBtYXkgYmUgYXBwbGllZCB0byBpdCwgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBsZXQgc29tZW9uZVxuICAgKiB1c2luZyBjb21wb25lbnQgcGVybWFuZW50bHkgZW5hYmxlIG9yIGRpc2FibGUgdHJhbnNpdGlvbiBlZmZlY3RzLlxuICAgKlxuICAgKiBAdHlwZSB7Ym9vbGVhbn0gdHJ1ZSBpZiBhIGNvbXBvbmVudC1wcm92aWRlZCB0cmFuc2l0aW9uIHNob3VsZCBiZSBzaG93bixcbiAgICogZmFsc2UgaWYgbm90LlxuICAgKi9cbiAgZ2V0IHNob3dUcmFuc2l0aW9uKCkge1xuICAgIHJldHVybiBzdXBlci5zaG93VHJhbnNpdGlvbiB8fCB0aGlzLiQudmlld3BvcnQuc2hvd1RyYW5zaXRpb247XG4gIH1cbiAgc2V0IHNob3dUcmFuc2l0aW9uKHZhbHVlKSB7XG4gICAgaWYgKCdzaG93VHJhbnNpdGlvbicgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2hvd1RyYW5zaXRpb24gPSB2YWx1ZTsgfVxuICAgIHRoaXMuJC52aWV3cG9ydC5zaG93VHJhbnNpdGlvbiA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBgXG4gICAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIH1cblxuICAgICAgYmFzaWMtc2xpZGluZy12aWV3cG9ydCB7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLXdlYmtpdC1mbGV4OiAxO1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGJhc2ljLXNsaWRpbmctdmlld3BvcnQgaWQ9XCJ2aWV3cG9ydFwiIHJvbGU9XCJub25lXCI+XG4gICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgIDwvYmFzaWMtc2xpZGluZy12aWV3cG9ydD5cbiAgICBgO1xuICB9XG59XG5cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdiYXNpYy1zbGlkaW5nLWNhcm91c2VsJywgU2xpZGluZ0Nhcm91c2VsKTtcbmV4cG9ydCBkZWZhdWx0IFNsaWRpbmdDYXJvdXNlbDtcbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvY3JlYXRlU3ltYm9sJztcbmltcG9ydCBFbGVtZW50QmFzZSBmcm9tICcuLi8uLi9iYXNpYy1lbGVtZW50LWJhc2Uvc3JjL0VsZW1lbnRCYXNlJztcbmltcG9ydCBGcmFjdGlvbmFsU2VsZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0ZyYWN0aW9uYWxTZWxlY3Rpb24nO1xuaW1wb3J0IFNwcmVhZEl0ZW1zIGZyb20gJy4uLy4uL2Jhc2ljLXNwcmVhZC1pdGVtcy9zcmMvU3ByZWFkSXRlbXMnOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcbmltcG9ydCB0b2dnbGVDbGFzcyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy90b2dnbGVDbGFzcyc7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IHNlbGVjdGVkSXRlbVN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnc2VsZWN0ZWRJdGVtJyk7XG5cblxubGV0IGJhc2UgPSBFbGVtZW50QmFzZS5jb21wb3NlKFxuICBGcmFjdGlvbmFsU2VsZWN0aW9uXG4pO1xuXG5cbi8qKlxuICogUHJlc2VudHMgbGlzdCBpdGVtcyBpbiBhIHZpZXdwb3J0IHN1Y2ggdGhhdCBvbmx5IGEgc2luZ2xlIGl0ZW0gaXMgdmlzaWJsZSBhdFxuICogYSB0aW1lLlxuICpcbiAqIE5hdmlnYXRpbmcgYmV0d2VlbiBpdGVtcyB3aWxsIGJlIHJlcHJlc2VudGVkIHdpdGggYSBob3Jpem9udGFsIHZpc3VhbFxuICogc2xpZGluZyBlZmZlY3QuIEZvciBtb3JlIGNvbXBsZXggdmlzdWFsIGVmZmVjdHMsIHNlZVxuICogW2Jhc2ljLWFuaW1hdGlvbi1zdGFnZV0oLi4vYmFzaWMtYW5pbWF0aW9uLXN0YWdlKSwgd2hpY2ggdGFrZXMgYWR2YW50YWdlIG9mXG4gKiB0aGUgV2ViIEFuaW1hdGlvbnMgQVBJLlxuICpcbiAqIFRoaXMgY29tcG9uZW50IGhhbmRsZXMgdGhlIHJlbmRlcmluZyByZXNwb25zaWJpbGl0aWVzIGZvciB0aGUgYmFzaWMtY2Fyb3VzZWxcbiAqIGNvbXBvbmVudC5cbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBjdXJyZW50bHkgcmVxdWlyZXMgdGhhdCB5b3UgZXhwbGljaXRseSBhcHBseSBhIHNpemUgdG8gaXQuXG4gKlxuICogQGV4dGVuZHMgRWxlbWVudEJhc2VcbiAqL1xuY2xhc3MgU2xpZGluZ1ZpZXdwb3J0IGV4dGVuZHMgYmFzZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnNlbGVjdGVkRnJhY3Rpb24gPSAwO1xuICAgIHRoaXMuc2hvd1RyYW5zaXRpb24gPSB0cnVlO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKSB7IHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7IH1cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgZ2V0IGNvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuJC5zbGlkaW5nQ29udGFpbmVyLmNvbnRlbnQ7XG4gIH1cblxuICBnZXQgaXRlbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuJC5zbGlkaW5nQ29udGFpbmVyLml0ZW1zO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmIChzdXBlci5yZW5kZXIpIHsgc3VwZXIucmVuZGVyKCk7IH1cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyU2VsZWN0aW9uLmJpbmQodGhpcykpO1xuICB9XG5cbiAgZ2V0IHNlbGVjdGVkRnJhY3Rpb24oKSB7XG4gICAgcmV0dXJuIHN1cGVyLnNlbGVjdGVkRnJhY3Rpb247XG4gIH1cbiAgc2V0IHNlbGVjdGVkRnJhY3Rpb24odmFsdWUpIHtcbiAgICBpZiAoJ3NlbGVjdGVkRnJhY3Rpb24nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkRnJhY3Rpb24gPSB2YWx1ZTsgfVxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBnZXQgc2VsZWN0ZWRJbmRleCgpIHtcbiAgICBsZXQgaXRlbXMgPSB0aGlzLml0ZW1zO1xuICAgIGxldCBzZWxlY3RlZEl0ZW0gPSB0aGlzLnNlbGVjdGVkSXRlbTtcbiAgICByZXR1cm4gaXRlbXMgJiYgc2VsZWN0ZWRJdGVtID9cbiAgICAgIGl0ZW1zLmluZGV4T2Yoc2VsZWN0ZWRJdGVtKSA6XG4gICAgICAtMTtcbiAgfVxuICBzZXQgc2VsZWN0ZWRJbmRleChpbmRleCkge1xuICAgIGlmICgnc2VsZWN0ZWRJbmRleCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJbmRleCA9IGluZGV4OyB9XG4gICAgbGV0IGl0ZW0gPSB0aGlzLml0ZW1zICYmIHRoaXMuaXRlbXNbaW5kZXhdO1xuICAgIGlmIChpdGVtKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IGl0ZW07XG4gICAgfVxuICB9XG5cbiAgZ2V0IHNlbGVjdGVkSXRlbSgpIHtcbiAgICByZXR1cm4gdGhpc1tzZWxlY3RlZEl0ZW1TeW1ib2xdO1xuICB9XG4gIHNldCBzZWxlY3RlZEl0ZW0oaXRlbSkge1xuICAgIGlmICgnc2VsZWN0ZWRJdGVtJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEl0ZW0gPSBpdGVtOyB9XG4gICAgdGhpc1tzZWxlY3RlZEl0ZW1TeW1ib2xdID0gaXRlbTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgZ2V0IHNob3dUcmFuc2l0aW9uKCkge1xuICAgIHJldHVybiBzdXBlci5zaG93VHJhbnNpdGlvbiB8fCB0aGlzLmNsYXNzTGlzdC5jb250YWlucygnc2hvd1RyYW5zaXRpb24nKTtcbiAgfVxuICBzZXQgc2hvd1RyYW5zaXRpb24odmFsdWUpIHtcbiAgICBpZiAoJ3Nob3dUcmFuc2l0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zaG93VHJhbnNpdGlvbiA9IHZhbHVlOyB9XG4gICAgdG9nZ2xlQ2xhc3ModGhpcywgJ3Nob3dUcmFuc2l0aW9uJywgdmFsdWUpO1xuICB9XG5cbiAgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBgXG4gICAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgICNzbGlkaW5nQ29udGFpbmVyIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIC8qXG4gICAgICAgICBTZXQgd2lkdGggZm9yIElFL0VkZ2UuIEl0J3Mgbm90IGNsZWFyIHdoeSB0aGV5IG5lZWQgdGhpcywgYW5kIHRoZSBvdGhlclxuICAgICAgICAgYnJvd3NlcnMgZG9uJ3QuXG4gICAgICAgICAqL1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoLnNob3dUcmFuc2l0aW9uKSAjc2xpZGluZ0NvbnRhaW5lciB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4ycyBlYXNlLW91dDtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1vdXQ7XG4gICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8YmFzaWMtc3ByZWFkLWl0ZW1zIGlkPVwic2xpZGluZ0NvbnRhaW5lclwiIHJvbGU9XCJub25lXCI+XG4gICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgIDwvYmFzaWMtc3ByZWFkLWl0ZW1zPlxuICAgIGA7XG4gIH1cblxufVxuXG5cbi8vIE5vdGU6IEluIHRoaXMgcm91dGluZSwgXCJ0aGlzXCIgaXMgYm91bmQgdG8gYW4gZWxlbWVudCBpbnN0YW5jZS5cbmZ1bmN0aW9uIHJlbmRlclNlbGVjdGlvbigpIHtcbiAgaWYgKCF0aGlzLnNlbGVjdGVkSXRlbSkge1xuICAgIHJldHVybjtcbiAgfVxuICBsZXQgc2VsZWN0aW9uID0gRnJhY3Rpb25hbFNlbGVjdGlvbi5oZWxwZXJzLmVsZW1lbnRTZWxlY3Rpb24odGhpcyk7XG4gIGxldCBpdGVtQ291bnQgPSB0aGlzLml0ZW1zID8gdGhpcy5pdGVtcy5sZW5ndGggOiAwO1xuICBsZXQgZGFtcGVkID0gRnJhY3Rpb25hbFNlbGVjdGlvbi5oZWxwZXJzLmRhbXBlZFNlbGVjdGlvbihzZWxlY3Rpb24sIGl0ZW1Db3VudCk7XG4gIC8vIFVzZSBhIHBlcmNlbnRhZ2Ugc28gdGhlIHRyYW5zZm9ybSB3aWxsIHN0aWxsIHdvcmsgaWYgc2NyZWVuIHNpemUgY2hhbmdlc1xuICAvLyAoZS5nLiwgaWYgZGV2aWNlIG9yaWVudGF0aW9uIGNoYW5nZXMpLlxuICBsZXQgbGVmdCA9IC1kYW1wZWQgKiAxMDA7XG4gIGxldCB0cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgnICsgbGVmdCArICclKSc7XG4gIHRoaXMuJC5zbGlkaW5nQ29udGFpbmVyLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgdGhpcy4kLnNsaWRpbmdDb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xufVxuXG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYmFzaWMtc2xpZGluZy12aWV3cG9ydCcsIFNsaWRpbmdWaWV3cG9ydCk7XG5leHBvcnQgZGVmYXVsdCBTbGlkaW5nVmlld3BvcnQ7XG4iLCJpbXBvcnQgRWxlbWVudEJhc2UgZnJvbSAnLi4vLi4vYmFzaWMtZWxlbWVudC1iYXNlL3NyYy9FbGVtZW50QmFzZSc7XG5pbXBvcnQgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50JztcblxuXG4vKipcbiAqIFNwcmVhZHMgb3V0IGEgc2V0IG9mIGl0ZW1zIGhvcml6b250YWxseSBzbyB0aGV5IHRha2UgZXF1YWwgc3BhY2UuXG4gKlxuICogW0xpdmUgZGVtb10oaHR0cDovL2Jhc2ljd2ViY29tcG9uZW50cy5vcmcvYmFzaWMtd2ViLWNvbXBvbmVudHMvcGFja2FnZXMvYmFzaWMtc3ByZWFkLWl0ZW1zLylcbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBpcyB1c2VkLCBmb3IgZXhhbXBsZSwgYnkgdGhlIGJhc2ljLXNsaWRpbmctdmlld3BvcnQgY29tcG9uZW50XG4gKiB0byBlbnN1cmUgdGhhdCBjaGlsZHJlbiBvZiBkaWZmZXJlbnQgc2l6ZSB3aWxsIHRha2UgdXAgdGhlIHNhbWUgYW1vdW50IG9mXG4gKiBob3Jpem9udGFsIHNwYWNlLlxuICpcbiAqIFRoaXMgY29tcG9uZW50IGN1cnJlbnRseSByZXF1aXJlcyBhbiBleHBsaWNpdCBzaXplIGJ5IGFwcGxpZWQgdG8gaXQuXG4gKlxuICogQGV4dGVuZHMgRWxlbWVudEJhc2VcbiAqIEBtaXhlcyBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50XG4gKi9cbmNsYXNzIFNwcmVhZEl0ZW1zIGV4dGVuZHMgRWxlbWVudEJhc2UuY29tcG9zZShcbiAgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudFxuKSB7XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKSB7IHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7IH1cbiAgICAvLyBIQUNLXG4gICAgdGhpcy5pdGVtc0NoYW5nZWQoKTtcbiAgfVxuXG4gIGdldCBpdGVtcygpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG5cbiAgLy8gVE9ETzogU2hvdWxkIGFsc28gaGFuZGxlIGNvbnRlbnRDaGFuZ2VkKCksIGJ1dCBuZWVkIHRvIHJhdGlvbmFsaXplIHdpdGhcbiAgLy8gaW52b2NhdGlvbiBvZiBpdGVtc0NoYW5nZWQgaW4gY29ubmVjdGVkQ2FsbGJhY2suXG4gIGl0ZW1zQ2hhbmdlZCgpIHtcbiAgICBpZiAoc3VwZXIuaXRlbXNDaGFuZ2VkKSB7IHN1cGVyLml0ZW1zQ2hhbmdlZCgpOyB9XG4gICAgbGV0IGl0ZW1zID0gdGhpcy5pdGVtcztcbiAgICBsZXQgY291bnQgPSBpdGVtcy5sZW5ndGg7XG4gICAgdGhpcy4kLnNwcmVhZENvbnRhaW5lci5zdHlsZS53aWR0aCA9IChjb3VudCAqIDEwMCkgKyAnJSc7XG4gICAgbGV0IGl0ZW1XaWR0aCA9ICgxMDAgLyBjb3VudCkgKyBcIiVcIjtcbiAgICBbXS5mb3JFYWNoLmNhbGwoaXRlbXMsIGl0ZW0gPT4ge1xuICAgICAgaXRlbS5zdHlsZS53aWR0aCA9IGl0ZW1XaWR0aDtcbiAgICB9KTtcbiAgfVxuXG4gIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gYFxuICAgICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgI3NwcmVhZENvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgICNzcHJlYWRDb250YWluZXIgOjpzbG90dGVkKCopIHtcbiAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgICAgb2JqZWN0LWZpdDogdmFyKC0tYmFzaWMtaXRlbS1vYmplY3QtZml0LCBjb250YWluKTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcbiAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgaWQ9XCJzcHJlYWRDb250YWluZXJcIj5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG59XG5cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdiYXNpYy1zcHJlYWQtaXRlbXMnLCBTcHJlYWRJdGVtcyk7XG5leHBvcnQgZGVmYXVsdCBTcHJlYWRJdGVtcztcbiJdfQ==
