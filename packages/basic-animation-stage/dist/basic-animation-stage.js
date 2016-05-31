(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _ElementBase = require('../../basic-element-base/src/ElementBase');

var _ElementBase2 = _interopRequireDefault(_ElementBase);

var _ContentAsItems = require('../../basic-component-mixins/src/ContentAsItems');

var _ContentAsItems2 = _interopRequireDefault(_ContentAsItems);

var _DistributedChildrenAsContent = require('../../basic-component-mixins/src/DistributedChildrenAsContent');

var _DistributedChildrenAsContent2 = _interopRequireDefault(_DistributedChildrenAsContent);

var _FractionalSelection = require('../../basic-component-mixins/src/FractionalSelection');

var _FractionalSelection2 = _interopRequireDefault(_FractionalSelection);

var _ItemsSelection = require('../../basic-component-mixins/src/ItemsSelection');

var _ItemsSelection2 = _interopRequireDefault(_ItemsSelection);

var _ObserveContentChanges = require('../../basic-component-mixins/src/ObserveContentChanges');

var _ObserveContentChanges2 = _interopRequireDefault(_ObserveContentChanges);

var _SelectionAnimation = require('../../basic-component-mixins/src/SelectionAnimation');

var _SelectionAnimation2 = _interopRequireDefault(_SelectionAnimation);

var _SelectionAriaActive = require('../../basic-component-mixins/src/SelectionAriaActive');

var _SelectionAriaActive2 = _interopRequireDefault(_SelectionAriaActive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var base = _ElementBase2.default.compose(_ContentAsItems2.default, _DistributedChildrenAsContent2.default, _FractionalSelection2.default, _ItemsSelection2.default, _ObserveContentChanges2.default, _SelectionAnimation2.default, _SelectionAriaActive2.default);

/**
 * Presents a single item as selected, providing animated transitions when the
 * selection changes. The same animation can be shown at an arbitrary point,
 * generally used to reflet a user-controlled touch or trackpad drag operation
 * in progress.
 *
 * [Live demo](http://basicwebcomponents.org/basic-web-components/packages/basic-animation-stage/)
 *
 * This component is intended to be used as a programmatic rendering surface for
 * components which want to show transitional effects.
 *
 * The component uses the [SelectionAnimation](../basic-component-mixins/docs/SelectionAnimation.md)
 * mixin, which in turn uses the Web Animations API. For use on browsers which
 * do not support that API natively, you will need to load the
 * [Web Animations polyfill](https://github.com/web-animations/web-animations-js).
 *
 * For a simpler component that exhibits only a sliding effect, but does not
 * require the Web Animations API, see [basic-sliding-viewport](../basic-sliding-viewport).
 *
 * @extends ElementBase
 * @mixes ContentAsItems
 * @mixes DistributedChildrenAsContent
 * @mixes ItemsSelection
 * @mixes ObserveContentChanges
 * @mixes SelectionAnimation
 * @mixes SelectionAriaActive
 */

var AnimationStage = function (_base) {
  _inherits(AnimationStage, _base);

  function AnimationStage() {
    _classCallCheck(this, AnimationStage);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AnimationStage).apply(this, arguments));
  }

  _createClass(AnimationStage, [{
    key: 'attachedCallback',
    value: function attachedCallback() {
      if (_get(Object.getPrototypeOf(AnimationStage.prototype), 'attachedCallback', this)) {
        _get(Object.getPrototypeOf(AnimationStage.prototype), 'attachedCallback', this).call(this);
      }
      this.selectionRequired = true;
    }
  }, {
    key: 'template',
    get: function get() {
      return '\n      <style>\n      :host {\n        overflow: hidden;\n        position: relative;\n      }\n\n      ::content > * {\n        height: 100%;\n        object-fit: contain;\n        position: absolute;\n        width: 100%;\n        will-change: transform;\n      }\n      </style>\n      <slot></slot>\n    ';
    }
  }]);

  return AnimationStage;
}(base);

document.registerElement('basic-animation-stage', AnimationStage);

},{"../../basic-component-mixins/src/ContentAsItems":4,"../../basic-component-mixins/src/DistributedChildrenAsContent":6,"../../basic-component-mixins/src/FractionalSelection":7,"../../basic-component-mixins/src/ItemsSelection":8,"../../basic-component-mixins/src/ObserveContentChanges":9,"../../basic-component-mixins/src/SelectionAnimation":10,"../../basic-component-mixins/src/SelectionAriaActive":11,"../../basic-element-base/src/ElementBase":17}],2:[function(require,module,exports){
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
        var attributes = [].slice.call(this.attributes); // To array for IE
        attributes.forEach(function (attribute) {
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
   * [ObserveContentChanges](ObserveContentChanges.md) mixin, the
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

},{"./createSymbol":14,"./toggleClass":16}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
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
      key: 'attachedCallback',
      value: function attachedCallback() {
        if (_get(Object.getPrototypeOf(FractionalSelection.prototype), 'attachedCallback', this)) {
          _get(Object.getPrototypeOf(FractionalSelection.prototype), 'attachedCallback', this).call(this);
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
        if ('selectedFraction' in base.prototype) {
          _set(Object.getPrototypeOf(FractionalSelection.prototype), 'selectedFraction', value, this);
        }
        this[selectedFractionSymbol] = value;
        var event = new CustomEvent('selection-fraction-changed');
        this.dispatchEvent(event);
      }
    }]);

    return FractionalSelection;
  }(base);

  return FractionalSelection;
}

mixin.helpers = {

  /**
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

  /**
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

  /**
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

  /**
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

  /**
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

},{"./createSymbol":14}],8:[function(require,module,exports){
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

/* Exported function extends a base class with ItemsSelection. */

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

  var ItemsSelection = function (_base) {
    _inherits(ItemsSelection, _base);

    function ItemsSelection() {
      _classCallCheck(this, ItemsSelection);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(ItemsSelection).apply(this, arguments));
    }

    _createClass(ItemsSelection, [{
      key: 'applySelection',

      /**
       * Apply the indicate selection state to the item.
       *
       * The default implementation of this method does nothing. User-visible
       * effects will typically be handled by other mixins.
       *
       * @param {HTMLElement} item - the item being selected/deselected
       * @param {boolean} selected - true if the item is selected, false if not
       */
      value: function applySelection(item, selected) {
        if (_get(Object.getPrototypeOf(ItemsSelection.prototype), 'applySelection', this)) {
          _get(Object.getPrototypeOf(ItemsSelection.prototype), 'applySelection', this).call(this, item, selected);
        }
      }

      /**
       * True if the selection can be moved to the next item, false if not (the
       * selected item is the last item in the list).
       *
       * @type {boolean}
       */

    }, {
      key: 'createdCallback',
      value: function createdCallback() {
        if (_get(Object.getPrototypeOf(ItemsSelection.prototype), 'createdCallback', this)) {
          _get(Object.getPrototypeOf(ItemsSelection.prototype), 'createdCallback', this).call(this);
        }

        // Set defaults.
        if (typeof this.selectionRequired === 'undefined') {
          this.selectionRequired = this.defaults.selectionRequired;
        }
        if (typeof this.selectionWraps === 'undefined') {
          this.selectionWraps = this.defaults.selectionWraps;
        }
      }
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
        if (_get(Object.getPrototypeOf(ItemsSelection.prototype), 'itemAdded', this)) {
          _get(Object.getPrototypeOf(ItemsSelection.prototype), 'itemAdded', this).call(this, item);
        }
        this.applySelection(item, item === this.selectedItem);
      }
    }, {
      key: 'itemsChanged',
      value: function itemsChanged() {
        var _this2 = this;

        if (_get(Object.getPrototypeOf(ItemsSelection.prototype), 'itemsChanged', this)) {
          _get(Object.getPrototypeOf(ItemsSelection.prototype), 'itemsChanged', this).call(this);
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
        if (_get(Object.getPrototypeOf(ItemsSelection.prototype), 'selectFirst', this)) {
          _get(Object.getPrototypeOf(ItemsSelection.prototype), 'selectFirst', this).call(this);
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
        if (_get(Object.getPrototypeOf(ItemsSelection.prototype), 'selectLast', this)) {
          _get(Object.getPrototypeOf(ItemsSelection.prototype), 'selectLast', this).call(this);
        }
        return selectIndex(this, this.items.length - 1);
      }

      /**
       * Select the next item in the list.
       */

    }, {
      key: 'selectNext',
      value: function selectNext() {
        if (_get(Object.getPrototypeOf(ItemsSelection.prototype), 'selectNext', this)) {
          _get(Object.getPrototypeOf(ItemsSelection.prototype), 'selectNext', this).call(this);
        }
        return selectIndex(this, this.selectedIndex + 1);
      }

      /**
       * Select the previous item in the list.
       */

    }, {
      key: 'selectPrevious',
      value: function selectPrevious() {
        if (_get(Object.getPrototypeOf(ItemsSelection.prototype), 'selectPrevious', this)) {
          _get(Object.getPrototypeOf(ItemsSelection.prototype), 'selectPrevious', this).call(this);
        }
        return selectIndex(this, this.selectedIndex - 1);
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
        if ('canSelectNext' in base.prototype) {
          _set(Object.getPrototypeOf(ItemsSelection.prototype), 'canSelectNext', canSelectNext, this);
        }
        this[canSelectNextSymbol] = canSelectNext;
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
        if ('canSelectPrevious' in base.prototype) {
          _set(Object.getPrototypeOf(ItemsSelection.prototype), 'canSelectPrevious', canSelectPrevious, this);
        }
        this[canSelectPreviousSymbol] = canSelectPrevious;
      }
    }, {
      key: 'defaults',
      get: function get() {
        var defaults = _get(Object.getPrototypeOf(ItemsSelection.prototype), 'defaults', this) || {};
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
        if ('selectedIndex' in base.prototype) {
          _set(Object.getPrototypeOf(ItemsSelection.prototype), 'selectedIndex', index, this);
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
        if ('selectedItem' in base.prototype) {
          _set(Object.getPrototypeOf(ItemsSelection.prototype), 'selectedItem', item, this);
        }
        var previousItem = this[selectedItemSymbol];
        if (previousItem) {
          if (item === previousItem) {
            // The indicated item is already the selected item.
            return;
          }
          // Remove previous selection.
          this.applySelection(previousItem, false);
        }

        // TODO: Confirm item is actually in the list before selecting.
        this[selectedItemSymbol] = item;
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
        if ('selectionRequired' in base.prototype) {
          _set(Object.getPrototypeOf(ItemsSelection.prototype), 'selectionRequired', selectionRequired, this);
        }
        this[selectionRequiredSymbol] = selectionRequired;
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
        if ('selectionWraps' in base.prototype) {
          _set(Object.getPrototypeOf(ItemsSelection.prototype), 'selectionWraps', value, this);
        }
        this[selectionWrapsSymbol] = String(value) === 'true';
        updatePossibleNavigations(this);
      }

      /**
       * Fires when the selectedItem property changes.
       *
       * @memberof ItemsSelection
       * @event selected-item-changed
       * @param {HTMLElement} detail.selectedItem The new selected item.
       * @param {HTMLElement} detail.previousItem The previously selected item.
       */

      /**
       * Fires when the selectedIndex property changes.
       *
       * @memberof ItemsSelection
       * @event selected-index-changed
       * @param {number} detail.selectedIndex The new selected index.
       */

    }]);

    return ItemsSelection;
  }(base);

  return ItemsSelection;
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

},{"./createSymbol":14,"./microtask":15}],9:[function(require,module,exports){
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

},{"./createSymbol":14,"./microtask":15}],10:[function(require,module,exports){
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

var _FractionalSelection = require('./FractionalSelection');

var _FractionalSelection2 = _interopRequireDefault(_FractionalSelection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Symbols for private data members on an element.
var animationSymbol = (0, _createSymbol2.default)('animations');
var lastAnimationSymbol = (0, _createSymbol2.default)('lastAnimation');
var playingAnimationSymbol = (0, _createSymbol2.default)('animatingSelection');
var previousSelectionSymbol = (0, _createSymbol2.default)('previousSelection');
var selectionAnimationDurationSymbol = (0, _createSymbol2.default)('selectionAnimationDuration');
var selectionAnimationEffectSymbol = (0, _createSymbol2.default)('selectionAnimationEffect');
var selectionAnimationKeyframesSymbol = (0, _createSymbol2.default)('selectionAnimationKeyframes');
var showTransitionSymbol = (0, _createSymbol2.default)('showTransition');

/* Exported function extends a base class with SelectionAnimation. */
function mixin(base) {

  /**
   * Mixin which uses animation to show transitions between selection states.
   *
   * This mixin can be used by components that want to provide visible
   * animations when changing the selection. For example, a carousel component
   * may want to define a sliding animation effect shown when moving between
   * items.
   *
   * The animation is defined by a `selectionAnimationKeyframes` property; see
   * that property for details on how to define these keyframes. This animation
   * will be used in two ways. First, when moving strictly between items, the
   * animation will play smoothly to show the selection changing. Second, the
   * animation can be used to render the selection at a fixed point in the
   * transition between states. E.g., if the user pauses halfway through
   * dragging an element using the [SwipeDirection](SwipeDirection.md) or
   * [TrackpadDirection](TrackpadDirection.md) mixins, then the selection
   * animation will be shown at the point exactly halfway through.
   *
   * This mixin expects a component to provide an `items` array of all elements
   * in the list, which can be provided via the
   * [ContentAsItems](ContentAsItems.md) mixin. This mixin also expects
   * `selectedIndex` and `selectedItem` properties, which can be provided via
   * the [ItemsSelection](ItemsSelection.md) mixin.
   *
   * This mixin supports a `selectionWraps` property. When true, the user can
   * navigate forward from the last item in the list and wrap around to the
   * first item, or navigate backward from the first item and wrap around to the
   * last item.
   *
   * This mixin uses the Web Animations API. For use on browsers which
   * do not support that API natively, you will need to load the
   * [Web Animations polyfill](https://github.com/web-animations/web-animations-js).
   */

  var SelectionAnimation = function (_base) {
    _inherits(SelectionAnimation, _base);

    function SelectionAnimation() {
      _classCallCheck(this, SelectionAnimation);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(SelectionAnimation).apply(this, arguments));
    }

    _createClass(SelectionAnimation, [{
      key: 'createdCallback',
      value: function createdCallback() {
        if (_get(Object.getPrototypeOf(SelectionAnimation.prototype), 'createdCallback', this)) {
          _get(Object.getPrototypeOf(SelectionAnimation.prototype), 'createdCallback', this).call(this);
        }

        // Set defaults.
        if (typeof this.selectionAnimationDuration === 'undefined') {
          this.selectionAnimationDuration = this.defaults.selectionAnimationDuration;
        }
        if (typeof this.selectionAnimationEffect === 'undefined' && this.selectionAnimationKeyframes == null) {
          this.selectionAnimationEffect = this.defaults.selectionAnimationEffect;
        }

        this.showTransition = true;
      }
    }, {
      key: 'itemAdded',
      value: function itemAdded(item) {
        // We mark new items in the list as explicitly visible to ARIA. Otherwise,
        // when an item isn't visible on the screen, ARIA will assume the item is
        // of no interest to the user, and leave it out of the accessibility tree.
        // If the list contains 10 items, but only 3 are visible, a screen reader
        // might then announce the list only has 3 items. To ensure that screen
        // readers and other assistive technologies announce the correct total
        // number of items, we explicitly mark all items as not hidden. This will
        // expose them all in the accessibility tree, even the items which are
        // currently not rendered.
        //
        // TODO: Generally speaking, this entire mixin assumes that the user can
        // navigate through all items in a list. But an app could style an item as
        // display:none or visibility:hidden because the user is not allowed to
        // interact with that item at the moment. Support for this scenario should
        // be added. This would entail changing all locations where a mixin
        // function is counting items, iterating over the (visible) items, and
        // showing or hiding items. Among other things, the code below to make
        // items visible to ARIA would need to discriminate between items which
        // are invisible because of animation state, or invisible because the user
        // shouldn't interact with them.
        item.setAttribute('aria-hidden', false);
      }
    }, {
      key: 'itemsChanged',
      value: function itemsChanged() {
        if (_get(Object.getPrototypeOf(SelectionAnimation.prototype), 'itemsChanged', this)) {
          _get(Object.getPrototypeOf(SelectionAnimation.prototype), 'itemsChanged', this).call(this);
        }
        resetAnimations(this);
        renderSelection(this);
      }

      /**
       * A fractional value indicating how far the user has currently advanced to
       * the next/previous item. E.g., a `selectedFraction` of 3.5 indicates the
       * user is halfway between items 3 and 4.
       *
       * For more details, see the [FractionalSelection](FractionalSelection.md)
       * mixin.
       *
       * @type {number}
       */

    }, {
      key: 'defaults',
      get: function get() {
        var defaults = _get(Object.getPrototypeOf(SelectionAnimation.prototype), 'defaults', this) || {};
        defaults.selectionAnimationDuration = 250;
        defaults.selectionAnimationEffect = 'slide';
        return defaults;
      }
    }, {
      key: 'selectedFraction',
      get: function get() {
        return _get(Object.getPrototypeOf(SelectionAnimation.prototype), 'selectedFraction', this) || 0;
      },
      set: function set(value) {
        if ('selectedFraction' in base.prototype) {
          _set(Object.getPrototypeOf(SelectionAnimation.prototype), 'selectedFraction', value, this);
        }
        renderSelection(this, this.selectedIndex, value);
      }
    }, {
      key: 'selectedItem',
      get: function get() {
        return _get(Object.getPrototypeOf(SelectionAnimation.prototype), 'selectedItem', this);
      },
      set: function set(item) {
        if ('selectedItem' in base.prototype) {
          _set(Object.getPrototypeOf(SelectionAnimation.prototype), 'selectedItem', item, this);
        }
        renderSelection(this, this.selectedIndex, 0);
      }

      /**
       * The duration of a selection animation in milliseconds.
       *
       * This measures the amount of time required for a selection animation to
       * complete. This number remains constant, even if the number of items being
       * animated increases.
       *
       * The default value is 250 milliseconds (a quarter a second).
       *
       * @type {number}
       * @default 250
       */

    }, {
      key: 'selectionAnimationDuration',
      get: function get() {
        return this[selectionAnimationDurationSymbol];
      },
      set: function set(value) {
        if ('selectionAnimationDuration' in base.prototype) {
          _set(Object.getPrototypeOf(SelectionAnimation.prototype), 'selectionAnimationDuration', value, this);
        }
        this[selectionAnimationDurationSymbol] = value;
      }

      /**
       * The name of a standard selection animation effect.
       *
       * This is a shorthand for setting the `selectionAnimationKeyframes`
       * property to standard keyframes. Supported string values:
       *
       * * "crossfade"
       * * "reveal"
       * * "revealWithFade"
       * * "showAdjacent"
       * * "slide"
       * * "slideWithGap"
       *
       * @type {string}
       * @default "slide"
       */

    }, {
      key: 'selectionAnimationEffect',
      get: function get() {
        return this[selectionAnimationEffectSymbol];
      },
      set: function set(value) {
        if ('selectionAnimationEffect' in base.prototype) {
          _set(Object.getPrototypeOf(SelectionAnimation.prototype), 'selectionAnimationEffect', value, this);
        }
        this[selectionAnimationEffectSymbol] = value;
        this.selectionAnimationKeyframes = mixin.standardEffectKeyframes[value];
      }

      /**
       * The keyframes that define an animation that plays for an item when moving
       * forward in the sequence.
       *
       * This is an array of CSS rules that will be applied. These are used as
       * [keyframes](http://w3c.github.io/web-animations/#keyframes-section)
       * to animate the item with the
       * [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/animation).
       *
       * The animation represents the state of the next item as it moves from
       * completely unselected (offstage, usually right), to selected (center
       * stage), to completely unselected (offstage, usually left). The center time
       * of the animation should correspond to the item's quiscent selected state,
       * typically in the center of the stage and at the item's largest size.
       *
       * The default forward animation is a smooth slide at full size from right to
       * left.
       *
       * When moving the selection backward, this animation is played in reverse.
       *
       * @type {cssRules[]}
       */

    }, {
      key: 'selectionAnimationKeyframes',
      get: function get() {
        // Standard animation slides left/right, keeps adjacent items out of view.
        return this[selectionAnimationKeyframesSymbol];
      },
      set: function set(value) {
        if ('selectionAnimationKeyframes' in base.prototype) {
          _set(Object.getPrototypeOf(SelectionAnimation.prototype), 'selectionAnimationKeyframes', value, this);
        }
        this[selectionAnimationKeyframesSymbol] = value;
        resetAnimations(this);
        renderSelection(this);
      }
    }, {
      key: 'selectionWraps',
      get: function get() {
        return _get(Object.getPrototypeOf(SelectionAnimation.prototype), 'selectionWraps', this);
      },
      set: function set(value) {
        if ('selectionWraps' in base.prototype) {
          _set(Object.getPrototypeOf(SelectionAnimation.prototype), 'selectionWraps', value, this);
        }
        resetAnimations(this);
        renderSelection(this);
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
      // TODO: Rename (and flip meaning) to something like dragging()?

    }, {
      key: 'showTransition',
      get: function get() {
        return _get(Object.getPrototypeOf(SelectionAnimation.prototype), 'showTransition', this) || this[showTransitionSymbol];
      },
      set: function set(value) {
        if ('showTransition' in base.prototype) {
          _set(Object.getPrototypeOf(SelectionAnimation.prototype), 'showTransition', value, this);
        }
        this[showTransitionSymbol] = value;
      }
    }]);

    return SelectionAnimation;
  }(base);

  return SelectionAnimation;
}

// We expose helpers on the mixin function that we want to be able to unit test.
// Since these are on the function, not on the class emitted by the function,
// they don't end up getting exposed on actual element instances.
mixin.helpers = {

  /*
   * Calculate the animation fractions for an element's items at the given
   * selection point. This is used when rendering the element's selection state
   * instantaneously.
   *
   * This function considers the selectedIndex parameter, which can be a whole
   * or fractional number, and determines which items will be visible at that
   * index. This function then calculates a corresponding animation fraction: a
   * number between 0 and 1 indicating how far through the selection animation
   * an item should be shown, or null if the item should not be visible at that
   * selection index. These fractions are returned as an array, where the
   * animation fraction at position N corresponds to how item N should be shown.
   */

  animationFractionsForSelection: function animationFractionsForSelection(element, selection) {

    var items = element.items;
    if (!items) {
      return;
    }

    var itemCount = items.length;
    var selectionWraps = element.selectionWraps;

    return items.map(function (item, itemIndex) {
      // How many steps from the selection point to this item?
      var steps = stepsToIndex(itemCount, selectionWraps, selection, itemIndex);
      // To convert steps to animation fraction:
      // steps      animation fraction
      //  1         0     (stage right)
      //  0         0.5   (center stage)
      // -1         1     (stage left)
      var animationFraction = (1 - steps) / 2;
      return animationFraction >= 0 && animationFraction <= 1 ? animationFraction : null; // Outside animation range
    });
  },

  /*
   * Calculate the animation timings that should be used to smoothly animate the
   * element's items from one selection state to another.
   *
   * This returns an array of timings, where the timing at position N should be
   * used to animate item N. If an item's timing is null, then that item should
   * not take place in the animation, and should be hidden instead.
   */
  effectTimingsForSelectionAnimation: function effectTimingsForSelectionAnimation(element, fromSelection, toSelection) {

    var items = element.items;
    if (!items) {
      return;
    }
    var itemCount = items.length;
    var selectionWraps = element.selectionWraps;
    var toIndex = _FractionalSelection2.default.helpers.wrappedSelectionParts(toSelection, itemCount, selectionWraps).index;
    var totalSteps = stepsToIndex(itemCount, selectionWraps, fromSelection, toSelection);
    var direction = totalSteps >= 0 ? 'normal' : 'reverse';
    var fill = 'both';
    var totalDuration = element.selectionAnimationDuration;
    var stepDuration = totalSteps !== 0 ? totalDuration * 2 / Math.ceil(Math.abs(totalSteps)) : 0; // No steps required, animation will be instantenous.

    var timings = items.map(function (item, itemIndex) {
      var steps = stepsToIndex(itemCount, selectionWraps, itemIndex, toSelection);
      // If we include this item in the staggered sequence of animations we're
      // creating, where would the item appear in the sequence?
      var positionInSequence = totalSteps - steps;
      if (totalSteps < 0) {
        positionInSequence = -positionInSequence;
      }
      // So, is this item really included in the sequence?
      if (Math.ceil(positionInSequence) >= 0 && positionInSequence <= Math.abs(totalSteps)) {
        // Note that delay for first item will be negative. That will cause
        // the animation to start halfway through, which is what we want.
        var delay = stepDuration * (positionInSequence - 1) / 2;
        var endDelay = itemIndex === toIndex ? -stepDuration / 2 : // Stop halfway through.
        0; // Play animation until end.
        return { duration: stepDuration, direction: direction, fill: fill, delay: delay, endDelay: endDelay };
      } else {
        return null;
      }
    });

    return timings;
  }
};

// Keyframes for standard selection animation effects.
mixin.standardEffectKeyframes = {

  // Simple crossfade
  crossfade: [{ opacity: 0 }, { opacity: 1 }, { opacity: 0 }],

  // Reveal, as if sliding the top card off a deck of cards
  reveal: [{ transform: 'translateX(0%)', zIndex: 0 }, { transform: 'translateX(0%)', zIndex: 1 }, { transform: 'translateX(-100%)', zIndex: 2 }],

  // Google Photos-style reveal-with-fade animation
  revealWithFade: [{ transform: 'translateX(0%) scale(0.75)', opacity: 0, zIndex: 0 }, { transform: 'translateX(0%) scale(1.0)', opacity: 1, zIndex: 1 }, { transform: 'translateX(-100%) scale(1.0)', opacity: 1, zIndex: 2 }],

  // Carousel variant with a bit of off-stage elements showing
  showAdjacent: [{ transform: 'translateX(78%) scale(0.7)', zIndex: 0 }, { transform: 'translateX(0%) scale(0.82)', zIndex: 1 }, { transform: 'translateX(-78%) scale(0.7)', zIndex: 0 }],

  // Simple slide
  slide: [{ transform: 'translateX(100%)' }, { transform: 'translateX(-100%)' }],

  // Slide, with a gap between
  slideWithGap: [{ transform: 'translateX(110%)' }, { transform: 'translateX(-110%)' }]

};

/*
 * Smoothly animate the selection between the indicated "from" and "to"
 * indices. The former can be a fraction, e.g., when the user releases a finger
 * to complete a touch drag, and the selection will snap to the closest whole
 * index.
 */
function animateSelection(element, fromSelection, toSelection) {

  resetAnimations(element);

  if (element[lastAnimationSymbol]) {
    // Cancel the effects of the last selection animation in progress.
    element[lastAnimationSymbol].onfinish = null;
    element[lastAnimationSymbol] = null;
  }

  // Calculate the animation timings.
  var items = element.items;
  var keyframes = element.selectionAnimationKeyframes;
  element[playingAnimationSymbol] = true;
  var timings = mixin.helpers.effectTimingsForSelectionAnimation(element, fromSelection, toSelection);
  // let lastAnimationDetails;

  // Figure out which item will be the one *after* the one we're selecting.
  var itemCount = items.length;
  var selectionWraps = element.selectionWraps;
  var selectionIndex = _FractionalSelection2.default.helpers.selectionParts(toSelection, itemCount, selectionWraps).index;
  var totalSteps = stepsToIndex(itemCount, selectionWraps, fromSelection, toSelection);
  var forward = totalSteps >= 0;
  var nextUpIndex = selectionIndex + (forward ? 1 : -1);
  if (selectionWraps) {
    nextUpIndex = _FractionalSelection2.default.helpers.wrappedSelection(nextUpIndex, itemCount);
  } else if (!isItemIndexInBounds(element, nextUpIndex)) {
    nextUpIndex = null; // At start/end of list; don't have a next item to show.
  }

  // Play the animations using those timings.
  var lastAnimationDetails = undefined;
  timings.forEach(function (timing, index) {
    var item = items[index];
    if (timing) {
      showItem(item, true);
      var animation = item.animate(keyframes, timing);
      if (index === nextUpIndex) {
        // This item will be animated, so will already be in the desired state
        // after the animation completes.
        nextUpIndex = null;
      }
      if (timing.endDelay !== 0) {
        // This is the animation for the item that will be left selected.
        // We want to clean up when this animation completes.
        lastAnimationDetails = { animation: animation, index: index, timing: timing, forward: forward };
      }
    } else {
      // This item doesn't participate in the animation.
      showItem(item, false);
    }
  });

  if (lastAnimationDetails != null) {
    // Arrange for clean-up work to be performed.
    lastAnimationDetails.nextUpIndex = nextUpIndex;
    lastAnimationDetails.animation.onfinish = function (event) {
      return selectionAnimationFinished(element, lastAnimationDetails);
    };
    element[lastAnimationSymbol] = lastAnimationDetails.animation;
  } else {
    // Shouldn't happen -- we should always have at least one animation.
    element[playingAnimationSymbol] = false;
  }
}

function getAnimationForItemIndex(element, index) {
  if (element[animationSymbol] == null) {
    // Not ready yet;
    return null;
  }
  var animation = element[animationSymbol][index];
  if (!animation) {
    var item = element.items[index];
    animation = item.animate(element.selectionAnimationKeyframes, {
      duration: element.selectionAnimationDuration,
      fill: 'both'
    });
    animation.pause();
    element[animationSymbol][index] = animation;
  }
  return animation;
}

function isItemIndexInBounds(element, index) {
  return index >= 0 && element.items && index < element.items.length;
}

/*
 * Render the selection state of the element.
 *
 * This can be used to re-render a previous selection state (if the
 * selectedIndex param is omitted), render the selection instantly at a given
 * whole or fractional selection index, or animate to a given selection index.
 *
 * There are several distinct scenarios we need to cover:
 *
 * 1. Initial positioning, or repositioning after changing a property like
 *    selectionAnimationKeyframes that affects rendering.
 * 2. Animate on selectedIndex change. This should override any animation/swipe
 *    already in progress.
 * 3. Instantly render the current position of a drag operation in progress.
 * 4. Complete a drag operation. If the drag wasn't far enough to affect
 *    selection, we'll just be restoring the selectedFraction to 0.
 *
 * If the list does not wrap, any selection position outside the list's bounds
 * will be damped to produce a visual effect of tension.
 */
function renderSelection(element) {
  var selectedIndex = arguments.length <= 1 || arguments[1] === undefined ? element.selectedIndex : arguments[1];
  var selectedFraction = arguments.length <= 2 || arguments[2] === undefined ? element.selectedFraction : arguments[2];

  var itemCount = element.items ? element.items.length : 0;
  if (itemCount === 0) {
    // Nothing to render.
    return;
  }
  if (selectedIndex < 0) {
    // TODO: Handle no selection.
    return;
  }
  var selection = selectedIndex + selectedFraction;
  if (element.selectionWraps) {
    // Apply wrapping to ensure consistent representation of selection.
    selection = _FractionalSelection2.default.helpers.wrappedSelection(selection, itemCount);
  } else {
    // Apply damping if necessary.
    selection = _FractionalSelection2.default.helpers.dampedSelection(selection, itemCount);
  }
  var previousSelection = element[previousSelectionSymbol];
  if (element[showTransitionSymbol] && previousSelection != null && previousSelection !== selection) {
    // Animate selection from previous state to new state.
    animateSelection(element, previousSelection, selection);
  } else if (selectedFraction === 0 && element[playingAnimationSymbol]) {
    // Already in process of animating to fraction 0. During that process,
    // ignore subsequent attempts to renderSelection to fraction 0.
    return;
  } else {
    // Render current selection state instantly.
    renderSelectionInstantly(element, selection);
  }
  element[previousSelectionSymbol] = selection;
}

/*
 * Instantly render (don't animate) the element's items at the given whole or
 * fractional selection index.
 */
function renderSelectionInstantly(element, toSelection) {
  var animationFractions = mixin.helpers.animationFractionsForSelection(element, toSelection);
  animationFractions.map(function (animationFraction, index) {
    var item = element.items[index];
    if (animationFraction != null) {
      showItem(item, true);
      setAnimationFraction(element, index, animationFraction);
    } else {
      showItem(item, false);
    }
  });
}

function resetAnimations(element) {
  var itemCount = element.items ? element.items.length : 0;
  element[animationSymbol] = new Array(itemCount);
}

/*
 * The last animation in our selection animation has completed. Clean up.
 */
function selectionAnimationFinished(element, details) {

  // Force the animation to the midpoint. We used to just depend on setting
  // a negative endDelay and fill: 'both', but a change in Chrome
  // (https://bugs.chromium.org/p/chromium/issues/detail?id=600248) causes
  // an animation to jump to its final value after the endDelay is hit. Since we
  // want to leave the animation paused halfway through, we force that.
  details.animation.pause();
  setAnimationFraction(element, details.index, 0.5);

  // When the last animation completes, show the next item in the direction
  // we're going. This waiting is a hack to avoid having static items higher in
  // the natural z-order obscure items during animation.
  if (details.nextUpIndex != null) {
    var nextUpItem = element.items[details.nextUpIndex];
    var animationFraction = details.forward ? 0 : 1;
    setAnimationFraction(element, details.nextUpIndex, animationFraction);
    showItem(nextUpItem, true);
  }

  element[playingAnimationSymbol] = false;
  element[lastAnimationSymbol] = null;
}

/*
 * Pause the indicated animation and have it show the animation at the given
 * fraction (between 0 and 1) of the way through the animation.
 */
function setAnimationFraction(element, itemIndex, fraction) {
  var animation = getAnimationForItemIndex(element, itemIndex);
  if (animation) {
    var duration = element.selectionAnimationDuration;
    if (duration) {
      animation.currentTime = fraction * duration;
    }
  }
}

function showItem(item, flag) {
  item.style.visibility = flag ? 'visible' : 'hidden';
}

/*
 * Figure out how many steps it will take to go from fromSelection to
 * toSelection. To go from item 3 to item 4 is one step.
 *
 * If wrapping is allowed, then going from the last item to the first will take
 * one step (forward), and going from the first item to the last will take one
 * step (backward).
 */
function stepsToIndex(length, allowWrap, fromSelection, toSelection) {
  var steps = toSelection - fromSelection;
  // Wrapping only kicks in when list has more than 1 item.
  if (allowWrap && length > 1) {
    var wrapSteps = length - Math.abs(steps);
    if (wrapSteps <= 1) {
      // Special case
      steps = steps < 0 ? wrapSteps : // Wrap forward from last item to first.
      -wrapSteps; // Wrap backward from first item to last.
    }
  }
  return steps;
}

},{"./FractionalSelection":7,"./createSymbol":14}],11:[function(require,module,exports){
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
   * yourself, or do so via the [ItemsSelection](ItemsSelection.md) mixin.
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
          var outermost = this.collective ? this.collective.outermostElement : this;
          outermost.setAttribute('aria-activedescendant', itemId);
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
      key: 'createdCallback',
      value: function createdCallback() {
        if (_get(Object.getPrototypeOf(SelectionAriaActive.prototype), 'createdCallback', this)) {
          _get(Object.getPrototypeOf(SelectionAriaActive.prototype), 'createdCallback', this).call(this);
        }
        if (!this.getAttribute('role')) {
          this.setAttribute('role', 'listbox');
        }
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

},{}],13:[function(require,module,exports){
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

},{}],14:[function(require,module,exports){
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

},{}],15:[function(require,module,exports){
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

},{}],16:[function(require,module,exports){
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

},{}],17:[function(require,module,exports){
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

},{"../../basic-component-mixins/src/AttributeMarshalling":2,"../../basic-component-mixins/src/Composable":3,"../../basic-component-mixins/src/DistributedChildren":5,"../../basic-component-mixins/src/ShadowElementReferences":12,"../../basic-component-mixins/src/ShadowTemplate":13}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwYWNrYWdlcy9iYXNpYy1hbmltYXRpb24tc3RhZ2Uvc3JjL0FuaW1hdGlvblN0YWdlLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQXR0cmlidXRlTWFyc2hhbGxpbmcuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Db21wb3NhYmxlLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ29udGVudEFzSXRlbXMuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXN0cmlidXRlZENoaWxkcmVuLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudC5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0ZyYWN0aW9uYWxTZWxlY3Rpb24uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9JdGVtc1NlbGVjdGlvbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL09ic2VydmVDb250ZW50Q2hhbmdlcy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NlbGVjdGlvbkFuaW1hdGlvbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NlbGVjdGlvbkFyaWFBY3RpdmUuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TaGFkb3dFbGVtZW50UmVmZXJlbmNlcy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NoYWRvd1RlbXBsYXRlLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvY3JlYXRlU3ltYm9sLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvbWljcm90YXNrLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvdG9nZ2xlQ2xhc3MuanMiLCJwYWNrYWdlcy9iYXNpYy1lbGVtZW50LWJhc2Uvc3JjL0VsZW1lbnRCYXNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1VBLElBQUksSUFBSSxHQUFHLHNCQUFZLE9BQU8seU5BUTdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFDO0lBNkJJLGNBQWM7WUFBZCxjQUFjOztXQUFkLGNBQWM7MEJBQWQsY0FBYzs7a0VBQWQsY0FBYzs7O2VBQWQsY0FBYzs7dUNBRUM7QUFDakIscUNBSEUsY0FBYyx3Q0FHWTtBQUFFLG1DQUg1QixjQUFjLGtEQUd1QztPQUFFO0FBQ3pELFVBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7S0FDL0I7Ozt3QkFFYztBQUNiLHFVQWdCRTtLQUNIOzs7U0F6QkcsY0FBYztFQUFTLElBQUk7O0FBOEJqQyxRQUFRLENBQUMsZUFBZSxDQUFDLHVCQUF1QixFQUFFLGNBQWMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDNUVuRCxVQUFDLElBQUksRUFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFxQ2pCLG9CQUFvQjtjQUFwQixvQkFBb0I7O2FBQXBCLG9CQUFvQjs0QkFBcEIsb0JBQW9COztvRUFBcEIsb0JBQW9COzs7aUJBQXBCLG9CQUFvQjs7Ozs7OytDQUtDLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFO0FBQ2pELHVDQU5FLG9CQUFvQixnREFNYztBQUFFLHFDQU5wQyxvQkFBb0IsMERBTWlEO1NBQUU7OztBQUFBLEFBR3pFLFlBQUksWUFBWSxHQUFHLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2pELFlBQUksWUFB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SUFBSSxFQUFFO0FBQ1IscUNBWEUsV0FBVywyQkFXRTtBQUFFLG1DQVhmLFdBQVcscUNBV2MsSUFBSSxFQUFFO09BQUU7QUFDbkMsYUFBTyxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsU0FBUyxVQUFLLElBQUksQ0FBRyxDQUFDO0tBQzNDOzs7U0FiRyxXQUFXO0VBQVMsMEJBQVcsV0FBVyxDQUFDLENBQUMsT0FBTzs7OERBS3hEOztrQkFZYyxXQUFXIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBFbGVtZW50QmFzZSBmcm9tICcuLi8uLi9iYXNpYy1lbGVtZW50LWJhc2Uvc3JjL0VsZW1lbnRCYXNlJztcbmltcG9ydCBDb250ZW50QXNJdGVtcyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Db250ZW50QXNJdGVtcyc7XG5pbXBvcnQgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50JztcbmltcG9ydCBGcmFjdGlvbmFsU2VsZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0ZyYWN0aW9uYWxTZWxlY3Rpb24nO1xuaW1wb3J0IEl0ZW1zU2VsZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0l0ZW1zU2VsZWN0aW9uJztcbmltcG9ydCBPYnNlcnZlQ29udGVudENoYW5nZXMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvT2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzJztcbmltcG9ydCBTZWxlY3Rpb25BbmltYXRpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2VsZWN0aW9uQW5pbWF0aW9uJztcbmltcG9ydCBTZWxlY3Rpb25BcmlhQWN0aXZlIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NlbGVjdGlvbkFyaWFBY3RpdmUnO1xuXG5cbmxldCBiYXNlID0gRWxlbWVudEJhc2UuY29tcG9zZShcbiAgQ29udGVudEFzSXRlbXMsXG4gIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQsXG4gIEZyYWN0aW9uYWxTZWxlY3Rpb24sXG4gIEl0ZW1zU2VsZWN0aW9uLFxuICBPYnNlcnZlQ29udGVudENoYW5nZXMsXG4gIFNlbGVjdGlvbkFuaW1hdGlvbixcbiAgU2VsZWN0aW9uQXJpYUFjdGl2ZVxuKTtcblxuLyoqXG4gKiBQcmVzZW50cyBhIHNpbmdsZSBpdGVtIGFzIHNlbGVjdGVkLCBwcm92aWRpbmcgYW5pbWF0ZWQgdHJhbnNpdGlvbnMgd2hlbiB0aGVcbiAqIHNlbGVjdGlvbiBjaGFuZ2VzLiBUaGUgc2FtZSBhbmltYXRpb24gY2FuIGJlIHNob3duIGF0IGFuIGFyYml0cmFyeSBwb2ludCxcbiAqIGdlbmVyYWxseSB1c2VkIHRvIHJlZmxldCBhIHVzZXItY29udHJvbGxlZCB0b3VjaCBvciB0cmFja3BhZCBkcmFnIG9wZXJhdGlvblxuICogaW4gcHJvZ3Jlc3MuXG4gKlxuICogW0xpdmUgZGVtb10oaHR0cDovL2Jhc2ljd2ViY29tcG9uZW50cy5vcmcvYmFzaWMtd2ViLWNvbXBvbmVudHMvcGFja2FnZXMvYmFzaWMtYW5pbWF0aW9uLXN0YWdlLylcbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBpcyBpbnRlbmRlZCB0byBiZSB1c2VkIGFzIGEgcHJvZ3JhbW1hdGljIHJlbmRlcmluZyBzdXJmYWNlIGZvclxuICogY29tcG9uZW50cyB3aGljaCB3YW50IHRvIHNob3cgdHJhbnNpdGlvbmFsIGVmZmVjdHMuXG4gKlxuICogVGhlIGNvbXBvbmVudCB1c2VzIHRoZSBbU2VsZWN0aW9uQW5pbWF0aW9uXSguLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL2RvY3MvU2VsZWN0aW9uQW5pbWF0aW9uLm1kKVxuICogbWl4aW4sIHdoaWNoIGluIHR1cm4gdXNlcyB0aGUgV2ViIEFuaW1hdGlvbnMgQVBJLiBGb3IgdXNlIG9uIGJyb3dzZXJzIHdoaWNoXG4gKiBkbyBub3Qgc3VwcG9ydCB0aGF0IEFQSSBuYXRpdmVseSwgeW91IHdpbGwgbmVlZCB0byBsb2FkIHRoZVxuICogW1dlYiBBbmltYXRpb25zIHBvbHlmaWxsXShodHRwczovL2dpdGh1Yi5jb20vd2ViLWFuaW1hdGlvbnMvd2ViLWFuaW1hdGlvbnMtanMpLlxuICpcbiAqIEZvciBhIHNpbXBsZXIgY29tcG9uZW50IHRoYXQgZXhoaWJpdHMgb25seSBhIHNsaWRpbmcgZWZmZWN0LCBidXQgZG9lcyBub3RcbiAqIHJlcXVpcmUgdGhlIFdlYiBBbmltYXRpb25zIEFQSSwgc2VlIFtiYXNpYy1zbGlkaW5nLXZpZXdwb3J0XSguLi9iYXNpYy1zbGlkaW5nLXZpZXdwb3J0KS5cbiAqXG4gKiBAZXh0ZW5kcyBFbGVtZW50QmFzZVxuICogQG1peGVzIENvbnRlbnRBc0l0ZW1zXG4gKiBAbWl4ZXMgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudFxuICogQG1peGVzIEl0ZW1zU2VsZWN0aW9uXG4gKiBAbWl4ZXMgT2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzXG4gKiBAbWl4ZXMgU2VsZWN0aW9uQW5pbWF0aW9uXG4gKiBAbWl4ZXMgU2VsZWN0aW9uQXJpYUFjdGl2ZVxuICovXG5jbGFzcyBBbmltYXRpb25TdGFnZSBleHRlbmRzIGJhc2Uge1xuXG4gIGF0dGFjaGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHN1cGVyLmF0dGFjaGVkQ2FsbGJhY2spIHsgc3VwZXIuYXR0YWNoZWRDYWxsYmFjaygpOyB9XG4gICAgdGhpcy5zZWxlY3Rpb25SZXF1aXJlZCA9IHRydWU7XG4gIH1cblxuICBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICA6OmNvbnRlbnQgPiAqIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICBgO1xuICB9XG5cbn1cblxuXG5kb2N1bWVudC5yZWdpc3RlckVsZW1lbnQoJ2Jhc2ljLWFuaW1hdGlvbi1zdGFnZScsIEFuaW1hdGlvblN0YWdlKTtcbiIsIi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggQXR0cmlidXRlTWFyc2hhbGxpbmcuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBtYXJzaGFsbHMgYXR0cmlidXRlcyB0byBwcm9wZXJ0aWVzIChhbmQgZXZlbnR1YWxseSB2aWNlIHZlcnNhKS5cbiAgICpcbiAgICogSWYgeW91ciBjb21wb25lbnQgZXhwb3NlcyBhIHNldHRlciBmb3IgYSBwcm9wZXJ0eSwgaXQncyBnZW5lcmFsbHkgYSBnb29kXG4gICAqIGlkZWEgdG8gbGV0IGRldnMgdXNpbmcgeW91ciBjb21wb25lbnQgYmUgYWJsZSB0byBzZXQgdGhhdCBwcm9wZXJ0eSBpbiBIVE1MXG4gICAqIHZpYSBhbiBlbGVtZW50IGF0dHJpYnV0ZS4gWW91IGNhbiBjb2RlIHRoYXQgeW91cnNlbGYgYnkgd3JpdGluZyBhblxuICAgKiBgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrYCwgb3IgeW91IGNhbiB1c2UgdGhpcyBtaXhpbiB0byBnZXQgYSBkZWdyZWUgb2ZcbiAgICogYXV0b21hdGljIHN1cHBvcnQuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gaW1wbGVtZW50cyBhbiBgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrYCB0aGF0IHdpbGwgYXR0ZW1wdCB0b1xuICAgKiBjb252ZXJ0IGEgY2hhbmdlIGluIGFuIGVsZW1lbnQgYXR0cmlidXRlIGludG8gYSBjYWxsIHRvIHRoZSBjb3JyZXNwb25kaW5nXG4gICAqIHByb3BlcnR5IHNldHRlci4gQXR0cmlidXRlcyB0eXBpY2FsbHkgZm9sbG93IGh5cGhlbmF0ZWQgbmFtZXMgKFwiZm9vLWJhclwiKSxcbiAgICogd2hlcmVhcyBwcm9wZXJ0aWVzIHR5cGljYWxseSB1c2UgY2FtZWxDYXNlIG5hbWVzIChcImZvb0JhclwiKS4gVGhpcyBtaXhpblxuICAgKiByZXNwZWN0cyB0aGF0IGNvbnZlbnRpb24sIGF1dG9tYXRpY2FsbHkgbWFwcGluZyB0aGUgaHlwaGVuYXRlZCBhdHRyaWJ1dGVcbiAgICogbmFtZSB0byB0aGUgY29ycmVzcG9uZGluZyBjYW1lbENhc2UgcHJvcGVydHkgbmFtZS5cbiAgICpcbiAgICogRXhhbXBsZTogWW91IGRlZmluZSBhIGNvbXBvbmVudCB1c2luZyB0aGlzIG1peGluOlxuICAgKlxuICAgKiAgICAgY2xhc3MgTXlFbGVtZW50IGV4dGVuZHMgQXR0cmlidXRlTWFyc2hhbGxpbmcoSFRNTEVsZW1lbnQpIHtcbiAgICogICAgICAgZ2V0IGZvb0JhcigpIHsgcmV0dXJuIHRoaXMuX2Zvb0JhcjsgfVxuICAgKiAgICAgICBzZXQgZm9vQmFyKHZhbHVlKSB7IHRoaXMuX2Zvb0JhciA9IHZhbHVlOyB9XG4gICAqICAgICB9XG4gICAqICAgICBkb2N1bWVudC5yZWdpc3RlckVsZW1lbnQoJ215LWVsZW1lbnQnLCBNeUVsZW1lbnQpO1xuICAgKlxuICAgKiBJZiBzb21lb25lIHRoZW4gaW5zdGFudGlhdGVzIHlvdXIgY29tcG9uZW50IGluIEhUTUw6XG4gICAqXG4gICAqICAgICA8bXktZWxlbWVudCBmb28tYmFyPVwiSGVsbG9cIj48L215LWVsZW1lbnQ+XG4gICAqXG4gICAqIFRoZW4sIGFmdGVyIHRoZSBlbGVtZW50IGhhcyBiZWVuIHVwZ3JhZGVkLCB0aGUgYGZvb0JhcmAgc2V0dGVyIHdpbGxcbiAgICogYXV0b21hdGljYWxseSBiZSBpbnZva2VkIHdpdGggdGhlIGluaXRpYWwgdmFsdWUgXCJIZWxsb1wiLlxuICAgKlxuICAgKiBGb3IgdGhlIHRpbWUgYmVpbmcsIHRoaXMgbWl4aW4gb25seSBzdXBwb3J0cyBzdHJpbmctdmFsdWVkIHByb3BlcnRpZXMuXG4gICAqIElmIHlvdSdkIGxpa2UgdG8gY29udmVydCBzdHJpbmcgYXR0cmlidXRlcyB0byBvdGhlciB0eXBlcyAobnVtYmVycyxcbiAgICogYm9vbGVhbnMpLCB5b3UgbmVlZCB0byBpbXBsZW1lbnQgYGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja2AgeW91cnNlbGYuXG4gICAqL1xuICBjbGFzcyBBdHRyaWJ1dGVNYXJzaGFsbGluZyBleHRlbmRzIGJhc2Uge1xuXG4gICAgLypcbiAgICAgKiBIYW5kbGUgYSBjaGFuZ2UgdG8gdGhlIGF0dHJpYnV0ZSB3aXRoIHRoZSBnaXZlbiBuYW1lLlxuICAgICAqL1xuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcbiAgICAgIGlmIChzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2spIHsgc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKCk7IH1cbiAgICAgIC8vIElmIHRoZSBhdHRyaWJ1dGUgbmFtZSBjb3JyZXNwb25kcyB0byBhIHByb3BlcnR5IG5hbWUsIHRoZW4gc2V0IHRoYXRcbiAgICAgIC8vIHByb3BlcnR5LiBJZ25vcmUgY2hhbmdlcyBpbiBzdGFuZGFyZCBIVE1MRWxlbWVudCBwcm9wZXJ0aWVzLlxuICAgICAgbGV0IHByb3BlcnR5TmFtZSA9IGF0dHJpYnV0ZVRvUHJvcGVydHlOYW1lKG5hbWUpO1xuICAgICAgaWYgKHByb3BlcnR5TmFtZSBpbiB0aGlzICYmICEocHJvcGVydHlOYW1lIGluIEhUTUxFbGVtZW50LnByb3RvdHlwZSkpIHtcbiAgICAgICAgdGhpc1twcm9wZXJ0eU5hbWVdID0gbmV3VmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBHZW5lcmF0ZSBhbiBpbml0aWFsIGNhbGwgdG8gYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrIGZvciBlYWNoIGF0dHJpYnV0ZVxuICAgICAqIG9uIHRoZSBlbGVtZW50LlxuICAgICAqXG4gICAgICogVE9ETzogVGhlIHBsYW4gZm9yIEN1c3RvbSBFbGVtZW50cyB2MSBpcyBmb3IgdGhlIGJyb3dzZXIgdG8gaGFuZGxlIHRoaXMuXG4gICAgICogT25jZSB0aGF0J3MgaGFuZGxlZCAoaW5jbHVkaW5nIGluIHBvbHlmaWxscyksIHRoaXMgY2FsbCBjYW4gZ28gYXdheS5cbiAgICAgKi9cbiAgICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG4gICAgICBsZXQgYXR0cmlidXRlcyA9IFtdLnNsaWNlLmNhbGwodGhpcy5hdHRyaWJ1dGVzKTsgLy8gVG8gYXJyYXkgZm9yIElFXG4gICAgICBhdHRyaWJ1dGVzLmZvckVhY2goYXR0cmlidXRlID0+IHtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soYXR0cmlidXRlLm5hbWUsIHVuZGVmaW5lZCwgYXR0cmlidXRlLnZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIEF0dHJpYnV0ZU1hcnNoYWxsaW5nO1xufTtcblxuXG4vLyBDb252ZXJ0IGNhbWVsIGNhc2UgZm9vQmFyIG5hbWUgdG8gaHlwaGVuYXRlZCBmb28tYmFyLlxuZnVuY3Rpb24gYXR0cmlidXRlVG9Qcm9wZXJ0eU5hbWUoYXR0cmlidXRlTmFtZSkge1xuICBsZXQgcHJvcGVydHlOYW1lID0gYXR0cmlidXRlTmFtZS5yZXBsYWNlKC8tKFthLXpdKS9nLCBtID0+IG1bMV0udG9VcHBlckNhc2UoKSk7XG4gIHJldHVybiBwcm9wZXJ0eU5hbWU7XG59XG5cbi8vIENvbnZlcnQgaHlwaGVuYXRlZCBmb28tYmFyIG5hbWUgdG8gY2FtZWwgY2FzZSBmb29CYXIuXG4vLyBUT0RPOiBVc2UgdGhpcyB3aGVuIHdlIHN1cHBvcnQgcmVmbGVjdGlvbiBvZiBwcm9wZXJ0aWVzIHRvIGF0dHJpYnV0ZXMuXG4vLyBmdW5jdGlvbiBwcm9wZXJ0eVRvQXR0cmlidXRlTmFtZShwcm9wZXJ0eU5hbWUpIHtcbi8vICAgbGV0IGF0dHJpYnV0ZU5hbWUgPSBwcm9wZXJ0eU5hbWUucmVwbGFjZSgvKFthLXpdW0EtWl0pL2csIGcgPT4gZ1swXSArICctJyArIGdbMV0udG9Mb3dlckNhc2UoKSk7XG4vLyAgIHJldHVybiBhdHRyaWJ1dGVOYW1lO1xuLy8gfVxuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBDb21wb3NhYmxlLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gdG8gbWFrZSBhIGNsYXNzIG1vcmUgZWFzaWx5IGNvbXBvc2FibGUgd2l0aCBvdGhlciBtaXhpbnMuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gY29udHJpYnV0ZXMgYSBgY29tcG9zZWAgbWV0aG9kIHRoYXQgYXBwbGllcyBhIHNldCBvZiBtaXhpblxuICAgKiBmdW5jdGlvbnMgYW5kIHJldHVybnMgdGhlIHJlc3VsdGluZyBuZXcgY2xhc3MuIFRoaXMgc3VnYXIgY2FuIG1ha2UgdGhlXG4gICAqIGFwcGxpY2F0aW9uIG9mIG1hbnkgbWl4aW5zIGF0IG9uY2UgZWFzaWVyIHRvIHJlYWQuXG4gICAqL1xuICBjbGFzcyBDb21wb3NhYmxlIGV4dGVuZHMgYmFzZSB7XG5cbiAgICAvKipcbiAgICAgKiBBcHBseSBhIHNldCBvZiBtaXhpbiBmdW5jdGlvbnMgb3IgbWl4aW4gb2JqZWN0cyB0byB0aGUgcHJlc2VudCBjbGFzcyBhbmRcbiAgICAgKiByZXR1cm4gdGhlIG5ldyBjbGFzcy5cbiAgICAgKlxuICAgICAqIEluc3RlYWQgb2Ygd3JpdGluZzpcbiAgICAgKlxuICAgICAqICAgICBsZXQgTXlDbGFzcyA9IE1peGluMShNaXhpbjIoTWl4aW4zKE1peGluNChNaXhpbjUoQmFzZUNsYXNzKSkpKSk7XG4gICAgICpcbiAgICAgKiBZb3UgY2FuIHdyaXRlOlxuICAgICAqXG4gICAgICogICAgIGxldCBNeUNsYXNzID0gQ29tcG9zYWJsZShCYXNlQ2xhc3MpLmNvbXBvc2UoXG4gICAgICogICAgICAgTWl4aW4xLFxuICAgICAqICAgICAgIE1peGluMixcbiAgICAgKiAgICAgICBNaXhpbjMsXG4gICAgICogICAgICAgTWl4aW40LFxuICAgICAqICAgICAgIE1peGluNVxuICAgICAqICAgICApO1xuICAgICAqXG4gICAgICogVGhpcyBmdW5jdGlvbiBjYW4gYWxzbyB0YWtlIG1peGluIG9iamVjdHMuIEEgbWl4aW4gb2JqZWN0IGlzIGp1c3QgYVxuICAgICAqIHNob3J0aGFuZCBmb3IgYSBtaXhpbiBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYSBuZXcgc3ViY2xhc3Mgd2l0aCB0aGUgZ2l2ZW5cbiAgICAgKiBtZW1iZXJzLiBUaGUgbWl4aW4gb2JqZWN0J3MgbWVtYmVycyBhcmUgKm5vdCogY29waWVkIGRpcmVjdGx5IG9udG8gdGhlXG4gICAgICogcHJvdG90eXBlIG9mIHRoZSBiYXNlIGNsYXNzLCBhcyB3aXRoIHRyYWRpdGlvbmFsIG1peGlucy5cbiAgICAgKlxuICAgICAqIEluIGFkZGl0aW9uIHRvIHByb3ZpZGluZyBzeW50YWN0aWMgc3VnYXIsIHRoaXMgbWl4aW4gY2FuIGJlIHVzZWQgdG9cbiAgICAgKiBkZWZpbmUgYSBjbGFzcyBpbiBFUzUsIHdoaWNoIGxhY2tzIEVTNidzIGBjbGFzc2Aga2V5d29yZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Li4ubWl4aW5zfSBtaXhpbnMgLSBBIHNldCBvZiBtaXhpbiBmdW5jdGlvbnMgb3Igb2JqZWN0cyB0byBhcHBseS5cbiAgICAgKi9cbiAgICBzdGF0aWMgY29tcG9zZSguLi5taXhpbnMpIHtcbiAgICAgIC8vIFdlIGNyZWF0ZSBhIG5ldyBzdWJjbGFzcyBmb3IgZWFjaCBtaXhpbiBpbiB0dXJuLiBUaGUgcmVzdWx0IGJlY29tZXNcbiAgICAgIC8vIHRoZSBiYXNlIGNsYXNzIGV4dGVuZGVkIGJ5IGFueSBzdWJzZXF1ZW50IG1peGlucy4gSXQgdHVybnMgb3V0IHRoYXRcbiAgICAgIC8vIHdlIGNhbiB1c2UgQXJyYXkucmVkdWNlKCkgdG8gY29uY2lzZWx5IGV4cHJlc3MgdGhpcywgdXNpbmcgdGhlIGN1cnJlbnRcbiAgICAgIC8vIG9iamVjdCBhcyB0aGUgc2VlZCBmb3IgcmVkdWNlKCkuXG4gICAgICByZXR1cm4gbWl4aW5zLnJlZHVjZShjb21wb3NlQ2xhc3MsIHRoaXMpO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIENvbXBvc2FibGU7XG59O1xuXG5cbi8vIFByb3BlcnRpZXMgZGVmaW5lZCBieSBPYmplY3QgdGhhdCB3ZSBkb24ndCB3YW50IHRvIG1peGluLlxuY29uc3QgTk9OX01JWEFCTEVfT0JKRUNUX1BST1BFUlRJRVMgPSBbXG4gICdjb25zdHJ1Y3Rvcidcbl07XG5cbi8qXG4gKiBBcHBseSB0aGUgbWl4aW4gdG8gdGhlIGdpdmVuIGJhc2UgY2xhc3MgdG8gcmV0dXJuIGEgbmV3IGNsYXNzLlxuICogVGhlIG1peGluIGNhbiBlaXRoZXIgYmUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIG1vZGlmaWVkIGNsYXNzLCBvciBhXG4gKiBwbGFpbiBvYmplY3Qgd2hvc2UgbWVtYmVycyB3aWxsIGJlIGNvcGllZCB0byB0aGUgbmV3IGNsYXNzJyBwcm90b3R5cGUuXG4gKi9cbmZ1bmN0aW9uIGNvbXBvc2VDbGFzcyhiYXNlLCBtaXhpbikge1xuICBpZiAodHlwZW9mIG1peGluID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gTWl4aW4gZnVuY3Rpb25cbiAgICByZXR1cm4gbWl4aW4oYmFzZSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gTWl4aW4gb2JqZWN0XG4gICAgY2xhc3MgU3ViY2xhc3MgZXh0ZW5kcyBiYXNlIHt9XG4gICAgY29weU93blByb3BlcnRpZXMobWl4aW4sIFN1YmNsYXNzLnByb3RvdHlwZSwgTk9OX01JWEFCTEVfT0JKRUNUX1BST1BFUlRJRVMpO1xuICAgIHJldHVybiBTdWJjbGFzcztcbiAgfVxufVxuXG5cbi8qXG4gKiBDb3B5IHRoZSBnaXZlbiBwcm9wZXJ0aWVzL21ldGhvZHMgdG8gdGhlIHRhcmdldC5cbiAqIFJldHVybiB0aGUgdXBkYXRlZCB0YXJnZXQuXG4gKi9cbmZ1bmN0aW9uIGNvcHlPd25Qcm9wZXJ0aWVzKHNvdXJjZSwgdGFyZ2V0LCBpZ25vcmVQcm9wZXJ0eU5hbWVzID0gW10pIHtcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoc291cmNlKS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgIGlmIChpZ25vcmVQcm9wZXJ0eU5hbWVzLmluZGV4T2YobmFtZSkgPCAwKSB7XG4gICAgICBsZXQgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBuYW1lKTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB0YXJnZXQ7XG59XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4vY3JlYXRlU3ltYm9sJztcbmltcG9ydCB0b2dnbGVDbGFzcyBmcm9tICcuL3RvZ2dsZUNsYXNzJztcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3QgaXRlbXNTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2l0ZW1zJyk7XG5jb25zdCBpdGVtSW5pdGlhbGl6ZWRTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2l0ZW1Jbml0aWFsaXplZCcpO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggQ29udGVudEFzSXRlbXMuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBtYXBzIGNvbnRlbnQgc2VtYW50aWNzIChlbGVtZW50cykgdG8gbGlzdCBpdGVtIHNlbWFudGljcy5cbiAgICpcbiAgICogSXRlbXMgZGlmZmVyIGZyb20gZWxlbWVudCBjb250ZW50cyBpbiBzZXZlcmFsIHdheXM6XG4gICAqXG4gICAqICogVGhleSBhcmUgb2Z0ZW4gcmVmZXJlbmNlZCB2aWEgaW5kZXguXG4gICAqICogVGhleSBtYXkgaGF2ZSBhIHNlbGVjdGlvbiBzdGF0ZS5cbiAgICogKiBJdCdzIGNvbW1vbiB0byBkbyB3b3JrIHRvIGluaXRpYWxpemUgdGhlIGFwcGVhcmFuY2Ugb3Igc3RhdGUgb2YgYSBuZXdcbiAgICogICBpdGVtLlxuICAgKiAqIEF1eGlsaWFyeSBpbnZpc2libGUgY2hpbGQgZWxlbWVudHMgYXJlIGZpbHRlcmVkIG91dCBhbmQgbm90IGNvdW50ZWQgYXNcbiAgICogICBpdGVtcy4gQXV4aWxpYXJ5IGVsZW1lbnRzIGluY2x1ZGUgbGluaywgc2NyaXB0LCBzdHlsZSwgYW5kIHRlbXBsYXRlXG4gICAqICAgZWxlbWVudHMuIFRoaXMgZmlsdGVyaW5nIGVuc3VyZXMgdGhhdCB0aG9zZSBhdXhpbGlhcnkgZWxlbWVudHMgY2FuIGJlXG4gICAqICAgdXNlZCBpbiBtYXJrdXAgaW5zaWRlIG9mIGEgbGlzdCB3aXRob3V0IGJlaW5nIHRyZWF0ZWQgYXMgbGlzdCBpdGVtcy5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIGEgY29tcG9uZW50IHRvIHByb3ZpZGUgYSBgY29udGVudGAgcHJvcGVydHkgcmV0dXJuaW5nIGFcbiAgICogcmF3IHNldCBvZiBlbGVtZW50cy4gWW91IGNhbiBwcm92aWRlIHRoYXQgeW91cnNlbGYsIG9yIHVzZSB0aGVcbiAgICogW0Rpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnRdKERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQubWQpIG1peGluLlxuICAgKlxuICAgKiBUaGUgbW9zdCBjb21tb25seSByZWZlcmVuY2VkIHByb3BlcnR5IGRlZmluZWQgYnkgdGhpcyBtaXhpbiBpcyB0aGUgYGl0ZW1zYFxuICAgKiBwcm9wZXJ0eS4gVG8gYXZvaWQgaGF2aW5nIHRvIGRvIHdvcmsgZWFjaCB0aW1lIHRoYXQgcHJvcGVydHkgaXMgcmVxdWVzdGVkLFxuICAgKiB0aGlzIG1peGluIHN1cHBvcnRzIGFuIG9wdGltaXplZCBtb2RlLiBJZiB5b3UgaW52b2tlIHRoZSBgY29udGVudENoYW5nZWRgXG4gICAqIG1ldGhvZCB3aGVuIHRoZSBzZXQgb2YgaXRlbXMgY2hhbmdlcywgdGhlIG1peGluIGNvbmNsdWRlcyB0aGF0IHlvdSdsbCB0YWtlXG4gICAqIGNhcmUgb2Ygbm90aWZ5aW5nIGl0IG9mIGZ1dHVyZSBjaGFuZ2VzLCBhbmQgdHVybnMgb24gdGhlIG9wdGltaXphdGlvbi4gV2l0aFxuICAgKiB0aGF0IG9uLCB0aGUgbWl4aW4gc2F2ZXMgYSByZWZlcmVuY2UgdG8gdGhlIGNvbXB1dGVkIHNldCBvZiBpdGVtcywgYW5kIHdpbGxcbiAgICogcmV0dXJuIHRoYXQgaW1tZWRpYXRlbHkgb24gc3Vic2VxdWVudCBjYWxscyB0byB0aGUgYGl0ZW1zYCBwcm9wZXJ0eS4gSWYgeW91XG4gICAqIHVzZSB0aGlzIG1peGluIGluIGNvbmp1bmN0aW9uIHdpdGggdGhlXG4gICAqIFtPYnNlcnZlQ29udGVudENoYW5nZXNdKE9ic2VydmVDb250ZW50Q2hhbmdlcy5tZCkgbWl4aW4sIHRoZVxuICAgKiBgY29udGVudENoYW5nZWRgIG1ldGhvZCB3aWxsIGJlIGludm9rZWQgZm9yIHlvdSB3aGVuIHRoZSBlbGVtZW50J3MgY2hpbGRyZW5cbiAgICogY2hhbmdlLCB0dXJuaW5nIG9uIHRoZSBvcHRpbWl6YXRpb24gYXV0b21hdGljYWxseS5cbiAgICovXG4gIGNsYXNzIENvbnRlbnRBc0l0ZW1zIGV4dGVuZHMgYmFzZSB7XG5cbiAgICAvKipcbiAgICAgKiBBcHBseSB0aGUgc2VsZWN0aW9uIHN0YXRlIHRvIGEgc2luZ2xlIGl0ZW0uXG4gICAgICpcbiAgICAgKiBJbnZva2UgdGhpcyBtZXRob2QgdG8gc2lnbmFsIHRoYXQgdGhlIHNlbGVjdGVkIHN0YXRlIG9mIHRoZSBpbmRpY2F0ZWQgaXRlbVxuICAgICAqIGhhcyBjaGFuZ2VkLiBCeSBkZWZhdWx0LCB0aGlzIGFwcGxpZXMgYSBgc2VsZWN0ZWRgIENTUyBjbGFzcyBpZiB0aGUgaXRlbVxuICAgICAqIGlzIHNlbGVjdGVkLCBhbmQgcmVtb3ZlZCBpdCBpZiBub3Qgc2VsZWN0ZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpdGVtIC0gVGhlIGl0ZW0gd2hvc2Ugc2VsZWN0aW9uIHN0YXRlIGhhcyBjaGFuZ2VkLlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gc2VsZWN0ZWQgLSBUcnVlIGlmIHRoZSBpdGVtIGlzIHNlbGVjdGVkLCBmYWxzZSBpZiBub3QuXG4gICAgICovXG4gICAgYXBwbHlTZWxlY3Rpb24oaXRlbSwgc2VsZWN0ZWQpIHtcbiAgICAgIGlmIChzdXBlci5hcHBseVNlbGVjdGlvbikgeyBzdXBlci5hcHBseVNlbGVjdGlvbihpdGVtLCBzZWxlY3RlZCk7IH1cbiAgICAgIHRvZ2dsZUNsYXNzKGl0ZW0sICdzZWxlY3RlZCcsIHNlbGVjdGVkKTtcbiAgICB9XG5cbiAgICBjb250ZW50Q2hhbmdlZCgpIHtcbiAgICAgIGlmIChzdXBlci5jb250ZW50Q2hhbmdlZCkgeyBzdXBlci5jb250ZW50Q2hhbmdlZCgpOyB9XG5cbiAgICAgIC8vIFNpbmNlIHdlIGdvdCB0aGUgY29udGVudENoYW5nZWQgY2FsbCwgd2UnbGwgYXNzdW1lIHdlJ2xsIGJlIG5vdGlmaWVkIGlmXG4gICAgICAvLyB0aGUgc2V0IG9mIGl0ZW1zIGNoYW5nZXMgbGF0ZXIuIFdlIHR1cm4gb24gbWVtb2l6YXRpb24gb2YgdGhlIGl0ZW1zXG4gICAgICAvLyBwcm9wZXJ0eSBieSBzZXR0aW5nIG91ciBpbnRlcm5hbCBwcm9wZXJ0eSB0byBudWxsIChpbnN0ZWFkIG9mXG4gICAgICAvLyB1bmRlZmluZWQpLlxuICAgICAgdGhpc1tpdGVtc1N5bWJvbF0gPSBudWxsO1xuXG4gICAgICB0aGlzLml0ZW1zQ2hhbmdlZCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbmV2ZXIgYSBuZXcgaXRlbSBpcyBhZGRlZCB0byB0aGUgbGlzdC5cbiAgICAgKlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy4gWW91IGNhbiBvdmVycmlkZVxuICAgICAqIHRoaXMgdG8gcGVyZm9ybSBwZXItaXRlbSBpbml0aWFsaXphdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGl0ZW0gLSBUaGUgaXRlbSB0aGF0IHdhcyBhZGRlZC5cbiAgICAgKi9cbiAgICBpdGVtQWRkZWQoaXRlbSkge1xuICAgICAgaWYgKHN1cGVyLml0ZW1BZGRlZCkgeyBzdXBlci5pdGVtQWRkZWQoaXRlbSk7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCBzZXQgb2YgaXRlbXMgaW4gdGhlIGxpc3QuIFNlZSB0aGUgdG9wLWxldmVsIGRvY3VtZW50YXRpb24gZm9yXG4gICAgICogbWl4aW4gZm9yIGEgZGVzY3JpcHRpb24gb2YgaG93IGl0ZW1zIGRpZmZlciBmcm9tIHBsYWluIGNvbnRlbnQuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnRbXX1cbiAgICAgKi9cbiAgICBnZXQgaXRlbXMoKSB7XG4gICAgICBsZXQgaXRlbXM7XG4gICAgICBpZiAodGhpc1tpdGVtc1N5bWJvbF0gPT0gbnVsbCkge1xuICAgICAgICBpdGVtcyA9IGZpbHRlckF1eGlsaWFyeUVsZW1lbnRzKHRoaXMuY29udGVudCk7XG4gICAgICAgIC8vIE5vdGU6IHRlc3QgZm9yICplcXVhbGl0eSogd2l0aCBudWxsOyBkb24ndCB0cmVhdCB1bmRlZmluZWQgYXMgYSBtYXRjaC5cbiAgICAgICAgaWYgKHRoaXNbaXRlbXNTeW1ib2xdID09PSBudWxsKSB7XG4gICAgICAgICAgLy8gTWVtb2l6ZSB0aGUgc2V0IG9mIGl0ZW1zLlxuICAgICAgICAgIHRoaXNbaXRlbXNTeW1ib2xdID0gaXRlbXM7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFJldHVybiB0aGUgbWVtb2l6ZWQgaXRlbXMuXG4gICAgICAgIGl0ZW1zID0gdGhpc1tpdGVtc1N5bWJvbF07XG4gICAgICB9XG4gICAgICByZXR1cm4gaXRlbXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgaXMgaW52b2tlZCB3aGVuIHRoZSB1bmRlcmx5aW5nIGNvbnRlbnRzIGNoYW5nZS4gSXQgaXMgYWxzb1xuICAgICAqIGludm9rZWQgb24gY29tcG9uZW50IGluaXRpYWxpemF0aW9uIOKAkyBzaW5jZSB0aGUgaXRlbXMgaGF2ZSBcImNoYW5nZWRcIiBmcm9tXG4gICAgICogYmVpbmcgbm90aGluZy5cbiAgICAgKi9cbiAgICBpdGVtc0NoYW5nZWQoKSB7XG4gICAgICBpZiAoc3VwZXIuaXRlbXNDaGFuZ2VkKSB7IHN1cGVyLml0ZW1zQ2hhbmdlZCgpOyB9XG5cbiAgICAgIC8vIFBlcmZvcm0gcGVyLWl0ZW0gaW5pdGlhbGl6YXRpb24uXG4gICAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGlmICghaXRlbVtpdGVtSW5pdGlhbGl6ZWRTeW1ib2xdKSB7XG4gICAgICAgICAgdGhpcy5pdGVtQWRkZWQoaXRlbSk7XG4gICAgICAgICAgaXRlbVtpdGVtSW5pdGlhbGl6ZWRTeW1ib2xdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2l0ZW1zLWNoYW5nZWQnKSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBAZXZlbnQgaXRlbXMtY2hhbmdlZFxuICAgICAqXG4gICAgICogVGhpcyBldmVudCBpcyByYWlzZWQgd2hlbiB0aGUgc2V0IG9mIGl0ZW1zIGNoYW5nZXMuXG4gICAgICovXG4gIH1cblxuICByZXR1cm4gQ29udGVudEFzSXRlbXM7XG59O1xuXG5cbi8vIFJldHVybiB0aGUgZ2l2ZW4gZWxlbWVudHMsIGZpbHRlcmluZyBvdXQgYXV4aWxpYXJ5IGVsZW1lbnRzIHRoYXQgYXJlbid0XG4vLyB0eXBpY2FsbHkgdmlzaWJsZS4gSXRlbXMgd2hpY2ggYXJlIG5vdCBlbGVtZW50cyBhcmUgcmV0dXJuZWQgYXMgaXMuXG5mdW5jdGlvbiBmaWx0ZXJBdXhpbGlhcnlFbGVtZW50cyhpdGVtcykge1xuICBsZXQgYXV4aWxpYXJ5VGFncyA9IFtcbiAgICAnbGluaycsXG4gICAgJ3NjcmlwdCcsXG4gICAgJ3N0eWxlJyxcbiAgICAndGVtcGxhdGUnXG4gIF07XG4gIHJldHVybiBbXS5maWx0ZXIuY2FsbChpdGVtcywgZnVuY3Rpb24oaXRlbSkge1xuICAgIHJldHVybiAhaXRlbS5sb2NhbE5hbWUgfHwgYXV4aWxpYXJ5VGFncy5pbmRleE9mKGl0ZW0ubG9jYWxOYW1lKSA8IDA7XG4gIH0pO1xufVxuXG5cbi8qKlxuICogRmlyZXMgd2hlbiB0aGUgaXRlbXMgaW4gdGhlIGxpc3QgY2hhbmdlLlxuICpcbiAqIEBtZW1iZXJvZiBDb250ZW50QXNJdGVtc1xuICogQGV2ZW50IGl0ZW1zLWNoYW5nZWRcbiAqL1xuIiwiLy8gVE9ETzogUmF0aW9uYWxpemUgd2l0aCBuZXcgQ3VzdG9tIEVsZW1lbnRzIEFQSS5cbi8vIFRPRE86IENvbnNpZGVyIHJlbmFtaW5nIHRvIG1hdGNoIEN1c3RvbSBFbGVtZW50cyBBUEkuXG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBEaXN0cmlidXRlZENoaWxkcmVuLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggZGVmaW5lcyBoZWxwZXJzIGZvciBhY2Nlc3NpbmcgYSBjb21wb25lbnQncyBkaXN0cmlidXRlZFxuICAgKiBjaGlsZHJlbiBhcyBhIGZsYXR0ZW5lZCBhcnJheSBvciBzdHJpbmcuXG4gICAqXG4gICAqIFRoZSBzdGFuZGFyZCBET00gQVBJIHByb3ZpZGVzIHNldmVyYWwgd2F5cyBvZiBhY2Nlc3NpbmcgY2hpbGQgY29udGVudDpcbiAgICogYGNoaWxkcmVuYCwgYGNoaWxkTm9kZXNgLCBhbmQgYHRleHRDb250ZW50YC4gTm9uZSBvZiB0aGVzZSBmdW5jdGlvbnMgYXJlXG4gICAqIFNoYWRvdyBET00gYXdhcmUuIFRoaXMgbWl4aW4gZGVmaW5lcyB2YXJpYXRpb25zIG9mIHRob3NlIGZ1bmN0aW9ucyB0aGF0XG4gICAqICphcmUqIFNoYWRvdyBET00gYXdhcmUuXG4gICAqXG4gICAqIEV4YW1wbGU6IHlvdSBjcmVhdGUgYSBjb21wb25lbnQgYDxjb3VudC1jaGlsZHJlbj5gIHRoYXQgZGlzcGxheXMgYSBudW1iZXJcbiAgICogZXF1YWwgdG8gdGhlIG51bWJlciBvZiBjaGlsZHJlbiBwbGFjZWQgaW5zaWRlIHRoYXQgY29tcG9uZW50LiBJZiBzb21lb25lXG4gICAqIGluc3RhbnRpYXRlcyB5b3VyIGNvbXBvbmVudCBsaWtlOlxuICAgKlxuICAgKiAgICAgPGNvdW50LWNoaWxkcmVuPlxuICAgKiAgICAgICA8ZGl2PjwvZGl2PlxuICAgKiAgICAgICA8ZGl2PjwvZGl2PlxuICAgKiAgICAgICA8ZGl2PjwvZGl2PlxuICAgKiAgICAgPC9jb3VudC1jaGlsZHJlbj5cbiAgICpcbiAgICogVGhlbiB0aGUgY29tcG9uZW50IHNob3VsZCBzaG93IFwiM1wiLCBiZWNhdXNlIHRoZXJlIGFyZSB0aHJlZSBjaGlsZHJlbi4gVG9cbiAgICogY2FsY3VsYXRlIHRoZSBudW1iZXIgb2YgY2hpbGRyZW4sIHRoZSBjb21wb25lbnQgY2FuIGp1c3QgY2FsY3VsYXRlXG4gICAqIGB0aGlzLmNoaWxkcmVuLmxlbmd0aGAuIEhvd2V2ZXIsIHN1cHBvc2Ugc29tZW9uZSBpbnN0YW50aWF0ZXMgeW91clxuICAgKiBjb21wb25lbnQgaW5zaWRlIG9uZSBvZiB0aGVpciBvd24gY29tcG9uZW50cywgYW5kIHB1dHMgYSBgPHNsb3Q+YCBlbGVtZW50XG4gICAqIGluc2lkZSB5b3VyIGNvbXBvbmVudDpcbiAgICpcbiAgICogICAgIDxjb3VudC1jaGlsZHJlbj5cbiAgICogICAgICAgPHNsb3Q+PC9zbG90PlxuICAgKiAgICAgPC9jb3VudC1jaGlsZHJlbj5cbiAgICpcbiAgICogSWYgeW91ciBjb21wb25lbnQgb25seSBsb29rcyBhdCBgdGhpcy5jaGlsZHJlbmAsIGl0IHdpbGwgYWx3YXlzIHNlZSBleGFjdGx5XG4gICAqIG9uZSBjaGlsZCDigJTCoHRoZSBgPHNsb3Q+YCBlbGVtZW50LiBCdXQgdGhlIHVzZXIgbG9va2luZyBhdCB0aGUgcGFnZSB3aWxsXG4gICAqICpzZWUqIGFueSBub2RlcyBkaXN0cmlidXRlZCB0byB0aGF0IHNsb3QuIFRvIG1hdGNoIHdoYXQgdGhlIHVzZXIgc2VlcywgeW91clxuICAgKiBjb21wb25lbnQgc2hvdWxkIGV4cGFuZCBhbnkgYDxzbG90PmAgZWxlbWVudHMgaXQgY29udGFpbnMuXG4gICAqXG4gICAqIFRoYXQgaXMgdGhlIHByb2JsZW0gdGhpcyBtaXhpbiBzb2x2ZXMuIEFmdGVyIGFwcGx5aW5nIHRoaXMgbWl4aW4sIHlvdXJcbiAgICogY29tcG9uZW50IGNvZGUgaGFzIGFjY2VzcyB0byBgdGhpcy5kaXN0cmlidXRlZENoaWxkcmVuYCwgd2hvc2UgYGxlbmd0aGBcbiAgICogd2lsbCByZXR1cm4gdGhlIHRvdGFsIG51bWJlciBvZiBhbGwgY2hpbGRyZW4gZGlzdHJpYnV0ZWQgdG8geW91ciBjb21wb25lbnRcbiAgICogaW4gdGhlIGNvbXBvc2VkIHRyZWUuXG4gICAqXG4gICAqIE5vdGU6IFRoZSBsYXRlc3QgQ3VzdG9tIEVsZW1lbnRzIEFQSSBkZXNpZ24gY2FsbHMgZm9yIGEgbmV3IGZ1bmN0aW9uLFxuICAgKiBgZ2V0QXNzaWduZWROb2Rlc2AgdGhhdCB0YWtlcyBhbiBvcHRpb25hbCBgZGVlcGAgcGFyYW1ldGVyLCB0aGF0IHdpbGwgc29sdmVcbiAgICogdGhpcyBwcm9ibGVtIGF0IHRoZSBBUEkgbGV2ZWwuXG4gICAqL1xuICBjbGFzcyBEaXN0cmlidXRlZENoaWxkcmVuIGV4dGVuZHMgYmFzZSB7XG5cbiAgICAvKipcbiAgICAgKiBBbiBpbi1vcmRlciBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuLCBleHBhbmRpbmcgYW55IHNsb3QgZWxlbWVudHMuIExpa2UgdGhlXG4gICAgICogc3RhbmRhcmQgY2hpbGRyZW4gcHJvcGVydHksIHRoaXMgc2tpcHMgdGV4dCBub2Rlcy5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudFtdfVxuICAgICAqL1xuICAgIGdldCBkaXN0cmlidXRlZENoaWxkcmVuKCkge1xuICAgICAgcmV0dXJuIGV4cGFuZENvbnRlbnRFbGVtZW50cyh0aGlzLmNoaWxkcmVuLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQW4gaW4tb3JkZXIgY29sbGVjdGlvbiBvZiBjaGlsZCBub2RlcywgZXhwYW5kaW5nIGFueSBzbG90IGVsZW1lbnRzLiBMaWtlXG4gICAgICogdGhlIHN0YW5kYXJkIGNoaWxkTm9kZXMgcHJvcGVydHksIHRoaXMgaW5jbHVkZXMgdGV4dCBub2Rlcy5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtOb2RlW119XG4gICAgICovXG4gICAgZ2V0IGRpc3RyaWJ1dGVkQ2hpbGROb2RlcygpIHtcbiAgICAgIHJldHVybiBleHBhbmRDb250ZW50RWxlbWVudHModGhpcy5jaGlsZE5vZGVzLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29uY2F0ZW5hdGVkIHRleHQgY29udGVudCBvZiBhbGwgY2hpbGQgbm9kZXMsIGV4cGFuZGluZyBhbnkgc2xvdFxuICAgICAqIGVsZW1lbnRzLlxuICAgICAqXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXQgZGlzdHJpYnV0ZWRUZXh0Q29udGVudCgpIHtcbiAgICAgIGxldCBzdHJpbmdzID0gdGhpcy5kaXN0cmlidXRlZENoaWxkTm9kZXMubWFwKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICAgIHJldHVybiBjaGlsZC50ZXh0Q29udGVudDtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHN0cmluZ3Muam9pbignJyk7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gRGlzdHJpYnV0ZWRDaGlsZHJlbjtcbn07XG5cblxuLypcbiAqIEdpdmVuIGEgYXJyYXkgb2Ygbm9kZXMsIHJldHVybiBhIG5ldyBhcnJheSB3aXRoIGFueSBjb250ZW50IGVsZW1lbnRzIGV4cGFuZGVkXG4gKiB0byB0aGUgbm9kZXMgZGlzdHJpYnV0ZWQgdG8gdGhhdCBjb250ZW50IGVsZW1lbnQuIFRoaXMgcnVsZSBpcyBhcHBsaWVkXG4gKiByZWN1cnNpdmVseS5cbiAqXG4gKiBJZiBpbmNsdWRlVGV4dE5vZGVzIGlzIHRydWUsIHRleHQgbm9kZXMgd2lsbCBiZSBpbmNsdWRlZCwgYXMgaW4gdGhlXG4gKiBzdGFuZGFyZCBjaGlsZE5vZGVzIHByb3BlcnR5OyBieSBkZWZhdWx0LCB0aGlzIHNraXBzIHRleHQgbm9kZXMsIGxpa2UgdGhlXG4gKiBzdGFuZGFyZCBjaGlsZHJlbiBwcm9wZXJ0eS5cbiAqL1xuZnVuY3Rpb24gZXhwYW5kQ29udGVudEVsZW1lbnRzKG5vZGVzLCBpbmNsdWRlVGV4dE5vZGVzKSB7XG4gIGxldCBleHBhbmRlZCA9IEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChub2Rlcywgbm9kZSA9PiB7XG4gICAgLy8gV2Ugd2FudCB0byBzZWUgaWYgdGhlIG5vZGUgaXMgYW4gaW5zdGFuY2VvZiBIVE1MU2xvdEVMZW1lbnQsIGJ1dFxuICAgIC8vIHRoYXQgY2xhc3Mgd29uJ3QgZXhpc3QgaWYgdGhlIGJyb3dzZXIgdGhhdCBkb2Vzbid0IHN1cHBvcnQgbmF0aXZlXG4gICAgLy8gU2hhZG93IERPTSBhbmQgaWYgdGhlIFNoYWRvdyBET00gcG9seWZpbGwgaGFzbid0IGJlZW4gbG9hZGVkLiBJbnN0ZWFkLFxuICAgIC8vIHdlIGRvIGEgc2ltcGxpc3RpYyBjaGVjayB0byBzZWUgaWYgdGhlIHRhZyBuYW1lIGlzIFwic2xvdFwiIG9yIFwiY29udGVudFwiLlxuICAgIGlmIChub2RlLmxvY2FsTmFtZSA9PT0gXCJzbG90XCIgfHwgbm9kZS5sb2NhbE5hbWUgPT09IFwiY29udGVudFwiKSB7XG4gICAgICAvLyBVc2UgdGhlIG5vZGVzIGFzc2lnbmVkIHRvIHRoaXMgbm9kZSBpbnN0ZWFkLlxuICAgICAgbGV0IGFzc2lnbmVkTm9kZXM7XG4gICAgICBpZiAobm9kZS5hc3NpZ25lZE5vZGVzKSB7XG4gICAgICAgIC8vIHNsb3QgZWxlbWVudFxuICAgICAgICBhc3NpZ25lZE5vZGVzID0gbm9kZS5hc3NpZ25lZE5vZGVzKHsgZmxhdHRlbjogdHJ1ZSB9KTtcbiAgICAgIH0gZWxzZSBpZiAobm9kZS5nZXREaXN0cmlidXRlZE5vZGVzKSB7XG4gICAgICAgIC8vIGNvbnRlbnQgZWxlbWVudFxuICAgICAgICBhc3NpZ25lZE5vZGVzID0gbm9kZS5nZXREaXN0cmlidXRlZE5vZGVzKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYXNzaWduZWROb2RlcyA/XG4gICAgICAgIGV4cGFuZENvbnRlbnRFbGVtZW50cyhhc3NpZ25lZE5vZGVzLCBpbmNsdWRlVGV4dE5vZGVzKSA6XG4gICAgICAgIFtdO1xuICAgIH0gZWxzZSBpZiAobm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAvLyBQbGFpbiBlbGVtZW50OyB1c2UgYXMgaXMuXG4gICAgICByZXR1cm4gW25vZGVdO1xuICAgIH0gZWxzZSBpZiAobm9kZSBpbnN0YW5jZW9mIFRleHQgJiYgaW5jbHVkZVRleHROb2Rlcykge1xuICAgICAgLy8gVGV4dCBub2RlLlxuICAgICAgcmV0dXJuIFtub2RlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ29tbWVudCwgcHJvY2Vzc2luZyBpbnN0cnVjdGlvbiwgZXRjLjsgc2tpcC5cbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH0pO1xuICBsZXQgZmxhdHRlbmVkID0gW10uY29uY2F0KC4uLmV4cGFuZGVkKTtcbiAgcmV0dXJuIGZsYXR0ZW5lZDtcbn1cbiIsIi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudC4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIGRlZmluZXMgYSBjb21wb25lbnQncyBjb250ZW50IGFzIGl0cyBjaGlsZHJlbiwgZXhwYW5kaW5nIGFueVxuICAgKiBub2RlcyBkaXN0cmlidXRlZCB0byB0aGUgY29tcG9uZW50J3Mgc2xvdHMuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gaXMgaW50ZW5kZWQgZm9yIHVzZSB3aXRoIHRoZVxuICAgKiBbRGlzdHJpYnV0ZWRDaGlsZHJlbl0oRGlzdHJpYnV0ZWRDaGlsZHJlbi5tZCkgbWl4aW4uIFNlZSB0aGF0IG1peGluIGZvciBhXG4gICAqIGRpc2N1c3Npb24gb2YgaG93IHRoYXQgd29ya3MuIFRoaXMgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCBtaXhpblxuICAgKiBwcm92aWRlcyBhbiBlYXN5IHdheSBvZiBkZWZpbmluZyB0aGUgXCJjb250ZW50XCIgb2YgYSBjb21wb25lbnQgYXMgdGhlXG4gICAqIGNvbXBvbmVudCdzIGRpc3RyaWJ1dGVkIGNoaWxkcmVuLiBUaGF0IGluIHR1cm4gbGV0cyBtaXhpbnMgbGlrZVxuICAgKiBbQ29udGVudEFzSXRlbXNdKENvbnRlbnRBc0l0ZW1zLm1kKSBtYW5pcHVsYXRlIHRoZSBjaGlsZHJlbiBhcyBsaXN0IGl0ZW1zLlxuICAgKi9cbiAgY2xhc3MgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCBleHRlbmRzIGJhc2Uge1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbnRlbnQgb2YgdGhpcyBjb21wb25lbnQsIGRlZmluZWQgdG8gYmUgdGhlIGZsYXR0ZW5lZCBhcnJheSBvZlxuICAgICAqIGNoaWxkcmVuIGRpc3RyaWJ1dGVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnRbXX1cbiAgICAgKi9cbiAgICBnZXQgY29udGVudCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmRpc3RyaWJ1dGVkQ2hpbGRyZW47XG4gICAgfVxuICAgIHNldCBjb250ZW50KHZhbHVlKSB7XG4gICAgICBpZiAoJ2NvbnRlbnQnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLmNvbnRlbnQgPSB2YWx1ZTsgfVxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQ7XG59O1xuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuL2NyZWF0ZVN5bWJvbCc7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IHNlbGVjdGVkRnJhY3Rpb25TeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3NlbGVjdGVkRnJhY3Rpb24nKTtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIEZyYWN0aW9uYWxTZWxlY3Rpb24uICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXhpbihiYXNlKSB7XG5cbiAgLyoqXG4gICAqIEFkZHMgc3VwcG9ydCBmb3IgZnJhY3Rpb25hbCBzZWxlY3Rpb246IHRyZWF0aW5nIGEgc2VsZWN0aW9uIGFzIGEgcmVhbFxuICAgKiBudW1iZXIgdGhhdCBjb21iaW5lcyBhbiBpbnRlZ2VyIHBvcnRpb24gKGFuIGluZGV4IGludG8gYSBsaXN0KSwgYW5kIGFcbiAgICogZnJhY3Rpb24gKGluZGljYXRpbmcgaG93IGZhciBvZiB0aGUgd2F5IHdlIGFyZSB0byB0aGUgbmV4dCBvciBwcmV2aW91c1xuICAgKiBpdGVtKS5cbiAgICpcbiAgICogVGhpcyBpcyB1c2VmdWwgaW4gY29tcG9uZW50cyB0aGF0IHN1cHBvcnQgaW5jcmVtZW50YWwgb3BlcmF0aW9ucyBkdXJpbmdcbiAgICogZHJhZ2dpbmcgYW5kIHN3aXBpbmcuIEV4YW1wbGU6IGEgY2Fyb3VzZWwgY29tcG9uZW50IGhhcyBzZXZlcmFsIGl0ZW1zLCBhbmQgdGhlXG4gICAqIGN1cnJlbnRseSBzZWxlY3RlZCBpdGVtIGlzIGl0ZW0gMy4gVGhlIHVzZXIgYmVnaW5zIHN3aXBpbmcgdG8gdGhlIGxlZnQsXG4gICAqIG1vdmluZyB0b3dhcmRzIHNlbGVjdGluZyBpdGVtIDQuIEhhbGZ3YXkgdGhyb3VnaCB0aGlzIG9wZXJhdGlvbiwgdGhlXG4gICAqIGZyYWN0aW9uYWwgc2VsZWN0aW9uIHZhbHVlIGlzIDMuNS5cbiAgICpcbiAgICogVGhpcyB2YWx1ZSBwZXJtaXRzIGNvbW11bmljYXRpb24gYmV0d2VlbiBtaXhpbnMgbGlrZVxuICAgKiBbU3dpcGVEaXJlY3Rpb25dKC4vU3dpcGVEaXJlY3Rpb24ubWQpIGFuZFxuICAgKiBbVHJhY2twYWREaXJlY3Rpb25dKC4vVHJhY2twYWREaXJlY3Rpb24ubWQpLCB3aGljaCBnZW5lcmF0ZSBmcmFjdGlvbmFsXG4gICAqIHNlbGVjdGlvbiB2YWx1ZXMsIGFuZCBtaXhpbnMgbGlrZVxuICAgKiBbU2VsZWN0aW9uQW5pbWF0aW9uXSguL1NlbGVjdGlvbkFuaW1hdGlvbi5tZCksIHdoaWNoIGNhbiByZW5kZXIgc2VsZWN0aW9uXG4gICAqIGF0IGEgZnJhY3Rpb25hbCB2YWx1ZS5cbiAgICovXG4gIGNsYXNzIEZyYWN0aW9uYWxTZWxlY3Rpb24gZXh0ZW5kcyBiYXNlIHtcblxuICAgIGF0dGFjaGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuYXR0YWNoZWRDYWxsYmFjaykgeyBzdXBlci5hdHRhY2hlZENhbGxiYWNrKCk7IH1cbiAgICAgIHRoaXMuc2VsZWN0ZWRGcmFjdGlvbiA9IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSBmcmFjdGlvbmFsIHZhbHVlIGluZGljYXRpbmcgaG93IGZhciB0aGUgdXNlciBoYXMgY3VycmVudGx5IGFkdmFuY2VkIHRvXG4gICAgICogdGhlIG5leHQvcHJldmlvdXMgaXRlbS4gRS5nLiwgYSBgc2VsZWN0ZWRGcmFjdGlvbmAgb2YgMy41IGluZGljYXRlcyB0aGVcbiAgICAgKiB1c2VyIGlzIGhhbGZ3YXkgYmV0d2VlbiBpdGVtcyAzIGFuZCA0LlxuICAgICAqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0ZWRGcmFjdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzW3NlbGVjdGVkRnJhY3Rpb25TeW1ib2xdO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0ZWRGcmFjdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKCdzZWxlY3RlZEZyYWN0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEZyYWN0aW9uID0gdmFsdWU7IH1cbiAgICAgIHRoaXNbc2VsZWN0ZWRGcmFjdGlvblN5bWJvbF0gPSB2YWx1ZTtcbiAgICAgIGxldCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnc2VsZWN0aW9uLWZyYWN0aW9uLWNoYW5nZWQnKTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gRnJhY3Rpb25hbFNlbGVjdGlvbjtcbn1cblxuXG5taXhpbi5oZWxwZXJzID0ge1xuXG4gIC8qKlxuICAgKiBEYW1wZW4gYSBzZWxlY3Rpb24gdGhhdCBnb2VzIHBhc3QgdGhlIGJlZ2lubmluZyBvciBlbmQgb2YgYSBsaXN0LiBUaGlzIGlzXG4gICAqIGdlbmVyYWxseSB1c2VkIHRvIHByb2R1Y2UgYSB2aXN1YWwgZWZmZWN0IG9mIHRlbnNpb24gYXMgdGhlIHVzZXIgdHJpZXMgdG9cbiAgICogZ28gZnVydGhlciBpbiBhIGRpcmVjdGlvbiB0aGF0IGhhcyBubyBtb3JlIGl0ZW1zLlxuICAgKlxuICAgKiBFeGFtcGxlOiBzdXBwb3NlIGBpdGVtQ291bnRgIGlzIDUsIGluZGljYXRpbmcgYSBsaXN0IG9mIDUgaXRlbXMuIFRoZSBpbmRleCBvZlxuICAgKiB0aGUgbGFzdCBpdGVtIGlzIDQuIElmIHRoZSBgc2VsZWN0aW9uYCBwYXJhbWV0ZXIgaXMgNC41LCB0aGUgdXNlciBpcyB0cnlpbmdcbiAgICogdG8gZ28gcGFzdCB0aGlzIGxhc3QgaXRlbS4gV2hlbiBhIGRhbXBpbmcgZnVuY3Rpb24gaXMgYXBwbGllZCwgdGhlIHJlc3VsdGluZ1xuICAgKiB2YWx1ZSB3aWxsIGJlIGxlc3MgdGhhbiA0LjUgKHRoZSBhY3R1YWwgdmFsdWUgd2lsbCBiZSA0LjI1KS4gV2hlbiB0aGlzXG4gICAqIHNlbGVjdGlvbiBzdGF0ZSBpcyByZW5kZXJlZCwgdGhlIHVzZXIgd2lsbCBzZWUgdGhhdCwgZWFjaCB1bml0IGRpc3RhbmNlIHRoZVxuICAgKiBkcmFnIHRyYXZlbHMgaGFzIGxlc3MgYW5kIGxlc3MgdmlzaWJsZSBlZmZlY3QuIFRoaXMgaXMgcGVyY2VpdmVkIGFzIHRlbnNpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzZWxlY3Rpb24gLSBBIHJlYWwgbnVtYmVyIGluZGljYXRpbmcgYSBzZWxlY3Rpb24gcG9zaXRpb25cbiAgICogQHBhcmFtIHtudW1iZXJ9IGl0ZW1Db3VudCAtIEFuIGludGVnZXIgZm9yIHRoZSBudW1iZXIgb2YgaXRlbXMgaW4gdGhlIGxpc3RcbiAgICogQHJldHVybnMge251bWJlcn0gQSByZWFsIG51bWJlciByZXByZXNlbnRpbmcgdGhlIGRhbXBlZCBzZWxlY3Rpb24gdmFsdWUuXG4gICAqL1xuICBkYW1wZWRTZWxlY3Rpb24oc2VsZWN0aW9uLCBpdGVtQ291bnQpIHtcbiAgICBsZXQgZGFtcGVkO1xuICAgIGxldCBib3VuZCA9IGl0ZW1Db3VudCAtIDE7XG4gICAgaWYgKHNlbGVjdGlvbiA8IDApIHtcbiAgICAgIC8vIFRyeWluZyB0byBnbyBwYXN0IGJlZ2lubmluZyBvZiBsaXN0LiBBcHBseSB0ZW5zaW9uIGZyb20gdGhlIGxlZnQgZWRnZS5cbiAgICAgIGRhbXBlZCA9IC1taXhpbi5oZWxwZXJzLmRhbXBpbmcoLXNlbGVjdGlvbik7XG4gICAgfSBlbHNlIGlmIChzZWxlY3Rpb24gPj0gYm91bmQpIHtcbiAgICAgIC8vIFRyeWluZyB0byBnbyBwYXN0IGVuZCBvZiBsaXN0LiBBcHBseSB0ZW5zaW9uIGZyb20gdGhlIHJpZ2h0IGVkZ2UuXG4gICAgICBkYW1wZWQgPSBib3VuZCArIG1peGluLmhlbHBlcnMuZGFtcGluZyhzZWxlY3Rpb24gLSBib3VuZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE5vIGRhbXBpbmcgcmVxdWlyZWQuXG4gICAgICBkYW1wZWQgPSBzZWxlY3Rpb247XG4gICAgfVxuICAgIHJldHVybiBkYW1wZWQ7XG4gIH0sXG5cbiAgLypcbiAgICogQ2FsY3VsYXRlIGRhbXBpbmcgYXMgYSBmdW5jdGlvbiBvZiB0aGUgZGlzdGFuY2UgcGFzdCB0aGUgbWluaW11bS9tYXhpbXVtXG4gICAqIHZhbHVlcy5cbiAgICpcbiAgICogV2Ugd2FudCB0byBhc3ltcHRvdGljYWxseSBhcHByb2FjaCBhbiBhYnNvbHV0ZSBtaW5pbXVtIG9mIDEgdW5pdFxuICAgKiBiZWxvdy9hYm92ZSB0aGUgYWN0dWFsIG1pbmltdW0vbWF4aW11bS4gVGhpcyByZXF1aXJlcyBjYWxjdWxhdGluZyBhXG4gICAqIGh5cGVyYm9saWMgZnVuY3Rpb24uXG4gICAqXG4gICAqIFNlZSBodHRwOi8vd3d3LndvbGZyYW1hbHBoYS5jb20vaW5wdXQvP2k9eSslM0QrLTElMkYlMjh4JTJCMSUyOSslMkIrMVxuICAgKiBmb3IgdGhlIG9uZSB3ZSB1c2UuIFRoZSBvbmx5IHBvcnRpb24gb2YgdGhhdCBmdW5jdGlvbiB3ZSBjYXJlIGFib3V0IGlzIHdoZW5cbiAgICogeCBpcyB6ZXJvIG9yIGdyZWF0ZXIuIEFuIGltcG9ydGFudCBjb25zaWRlcmF0aW9uIGlzIHRoYXQgdGhlIGN1cnZlIGJlXG4gICAqIHRhbmdlbnQgdG8gdGhlIGRpYWdvbmFsIGxpbmUgeD15IGF0ICgwLCAwKS4gVGhpcyBlbnN1cmVzIHNtb290aCBjb250aW51aXR5XG4gICAqIHdpdGggdGhlIG5vcm1hbCBkcmFnIGJlaGF2aW9yLCBpbiB3aGljaCB0aGUgdmlzaWJsZSBzbGlkaW5nIGlzIGxpbmVhciB3aXRoXG4gICAqIHRoZSBkaXN0YW5jZSB0aGUgdG91Y2hwb2ludCBoYXMgYmVlbiBkcmFnZ2VkLlxuICAgKi9cbiAgZGFtcGluZyh4KSB7XG4gICAgbGV0IHkgPSAoLTEgLyAoeCArIDEpKSArIDE7XG4gICAgcmV0dXJuIHk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgY3VycmVudCBmcmFjdGlvbmFsIHNlbGVjdGlvbiB2YWx1ZSBmb3IgdGhlIGdpdmVuIGVsZW1lbnQuXG4gICAqXG4gICAqIFRoaXMgc2ltcGx5IGFkZHMgdGhlIGVsZW1lbnQncyBgc2VsZWN0ZWRJbmRleGAgYW5kIGBzZWxlY3RlZEZyYWN0aW9uYFxuICAgKiBwcm9wZXJ0aWVzLlxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gQW4gZWxlbWVudCB0aGF0IHN1cHBvcnRzIHNlbGVjdGlvblxuICAgKi9cbiAgZWxlbWVudFNlbGVjdGlvbihlbGVtZW50KSB7XG4gICAgbGV0IHNlbGVjdGVkSW5kZXggPSBlbGVtZW50LnNlbGVjdGVkSW5kZXg7XG4gICAgaWYgKHNlbGVjdGVkSW5kZXggPCAwKSB7XG4gICAgICAvLyBObyBzZWxlY3Rpb25cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHNlbGVjdGVkRnJhY3Rpb24gPSBlbGVtZW50LnNlbGVjdGVkRnJhY3Rpb24gfHwgMDtcbiAgICByZXR1cm4gc2VsZWN0ZWRJbmRleCArIHNlbGVjdGVkRnJhY3Rpb247XG4gIH0sXG5cbiAgLyoqXG4gICAqIEJyZWFrcyBhIGZyYWN0aW9uYWwgc2VsZWN0aW9uIGludG8gaXRzIGludGVnZXIgYW5kIGZyYWN0aW9uYWwgcGFydHMuXG4gICAqXG4gICAqIEV4YW1wbGU6IGlmIHBhc3NlZCAzLjUsIHRoaXMgcmV0dXJucyB7IGluZGV4OiAzLCBmcmFjdGlvbjogNSB9LlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2VsZWN0aW9uIOKAk8KgQSByZWFsIG51bWJlciByZXByZXNlbnRpbmcgYSBzZWxlY3Rpb24gcG9pbnRcbiAgICogQHJldHVybnMge29iamVjdH0gLSBBbiBvYmplY3Qgd2l0aCBhbiBgaW5kZXhgIHByb3BlcnR5IGhvbGRpbmcgdGhlXG4gICAqIHNlbGVjdGlvbidzIGludGVnZXIgY29tcG9uZW50LCBhbmQgYSBgZnJhY3Rpb25gIHByb3BlcnR5IGhvbGRpbmcgdGhlXG4gICAqIHNlbGVjdGlvbidzIGZyYWN0aW9uYWwgY29tcG9uZW50LlxuICAgKi9cbiAgc2VsZWN0aW9uUGFydHMoc2VsZWN0aW9uKSB7XG4gICAgLy8gU3R1cGlkIElFIGRvZXNuJ3QgaGF2ZSBNYXRoLnRydW5jLlxuICAgIC8vIGxldCBpbmRleCA9IE1hdGgudHJ1bmMoc2VsZWN0aW9uKTtcbiAgICBsZXQgaW5kZXggPSBzZWxlY3Rpb24gPCAwID8gTWF0aC5jZWlsKHNlbGVjdGlvbikgOiBNYXRoLmZsb29yKHNlbGVjdGlvbik7XG4gICAgbGV0IGZyYWN0aW9uID0gc2VsZWN0aW9uIC0gaW5kZXg7XG4gICAgcmV0dXJuIHsgaW5kZXgsIGZyYWN0aW9uIH07XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBmcmFjdGlvbmFsIHNlbGVjdGlvbiBwb2ludCBhZnRlciBhY2NvdW50aW5nIGZvciB3cmFwcGluZywgZW5zdXJpbmdcbiAgICogdGhhdCB0aGUgaW50ZWdlciBwb3J0aW9uIG9mIHRoZSBzZWxlY3Rpb24gc3RheXMgYmV0d2VlbiAwIGFuZCBgaXRlbUNvdW50YC0xLlxuICAgKiBUaGF0IGlzLCB0aGUgaW50ZWdlciBwb3J0aW9uIHdpbGwgYWx3YXlzIGJlIGEgdmFsaWQgaW5kZXggaW50byB0aGUgbGlzdC5cbiAgICpcbiAgICogRXhhbXBsZSBvZiB3cmFwcGluZyBwYXN0IHRoZSBlbmQgb2YgdGhlIGxpc3Q6IGlmIGBzZWxlY3Rpb25gIGlzIDUuNSBhbmRcbiAgICogYGl0ZW1Db3VudGAgaXMgNSwgdGhpcyByZXR1cm5zIDAuNS4gRXhhbXBsZSBvZiB3cmFwcGluZyBwYXN0IHRoZSBiZWdpbm5pbmcgb2ZcbiAgICogdGhlIGxpc3Q6IGlmIGBzZWxlY3Rpb25gIGlzIDAuNSBhbmQgYGl0ZW1Db3VudGAgaXMgNSwgdGhpcyByZXR1cm5zIDQuNS5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNlbGVjdGlvbiAtIEEgcmVhbCBudW1iZXIgcmVwcmVzZW50aW5nIGEgc2VsZWN0aW9uIHBvaW50XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpdGVtQ291bnQgLSBUaGUgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZSBsaXN0XG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IC0gVGhlIHJlc3VsdCBvZiB3cmFwcGluZyB0aGUgc2VsZWN0aW9uIHBvaW50XG4gICAqL1xuICB3cmFwcGVkU2VsZWN0aW9uKHNlbGVjdGlvbiwgaXRlbUNvdW50KSB7XG4gICAgLy8gSGFuZGxlcyBwb3NzaWJpbGl0eSBvZiBuZWdhdGl2ZSBtb2QuXG4gICAgLy8gU2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE4NjE4MjUwLzc2NDcyXG4gICAgcmV0dXJuICgoc2VsZWN0aW9uICUgaXRlbUNvdW50KSArIGl0ZW1Db3VudCkgJSBpdGVtQ291bnQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgcGFydHMgb2YgYSBzZWxlY3Rpb24sIGZpcnN0IHdyYXBwaW5nIGlmIG5lY2Vzc2FyeS5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNlbGVjdGlvbiDigJMgQSByZWFsIG51bWJlciByZXByZXNlbnRpbmcgYSBzZWxlY3Rpb24gcG9pbnRcbiAgICogQHBhcmFtIHtudW1iZXJ9IGl0ZW1Db3VudCAtIFRoZSBudW1iZXIgb2YgaXRlbXMgaW4gdGhlIGxpc3RcbiAgICogQHBhcmFtIHtib29sZWFufSB3cmFwIOKAkyBUcnVlIGlmIHRoZSBzZWxlY3Rpb24gc2hvdWxkIHdyYXAgdG8gc3RheSB3aXRoaW4gdGhlXG4gICAqIGxpc3RcbiAgICogQHJldHVybnMge29iamVjdH0g4oCTIFRoZSBwYXJ0cyBvZiB0aGUgc2VsZWN0aW9uLCB1c2luZyB0aGUgc2FtZSBmb3JtYXQgYXNcbiAgICogYHNlbGVjdGlvblBhcnRzYC5cbiAgICovXG4gIHdyYXBwZWRTZWxlY3Rpb25QYXJ0cyhzZWxlY3Rpb24sIGl0ZW1Db3VudCwgd3JhcCkge1xuICAgIGlmICh3cmFwKSB7XG4gICAgICBzZWxlY3Rpb24gPSBtaXhpbi5oZWxwZXJzLndyYXBwZWRTZWxlY3Rpb24oc2VsZWN0aW9uLCBpdGVtQ291bnQpO1xuICAgIH1cbiAgICByZXR1cm4gbWl4aW4uaGVscGVycy5zZWxlY3Rpb25QYXJ0cyhzZWxlY3Rpb24pO1xuICB9XG5cbn07XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4vY3JlYXRlU3ltYm9sJztcbmltcG9ydCBtaWNyb3Rhc2sgZnJvbSAnLi9taWNyb3Rhc2snO1xuXG5cbi8vIFN5bWJvbHMgZm9yIHByaXZhdGUgZGF0YSBtZW1iZXJzIG9uIGFuIGVsZW1lbnQuXG5jb25zdCBjYW5TZWxlY3ROZXh0U3ltYm9sID0gY3JlYXRlU3ltYm9sKCdjYW5TZWxlY3ROZXh0Jyk7XG5jb25zdCBjYW5TZWxlY3RQcmV2aW91c1N5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnY2FuU2VsZWN0UHJldmlvdXMnKTtcbmNvbnN0IHNlbGVjdGVkSXRlbVN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnc2VsZWN0ZWRJdGVtJyk7XG5jb25zdCBzZWxlY3Rpb25SZXF1aXJlZFN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnc2VsZWN0aW9uUmVxdWlyZWQnKTtcbmNvbnN0IHNlbGVjdGlvbldyYXBzU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdzZWxlY3Rpb25XcmFwcycpO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggSXRlbXNTZWxlY3Rpb24uICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBtYW5hZ2VzIHNpbmdsZS1zZWxlY3Rpb24gc2VtYW50aWNzIGZvciBpdGVtcyBpbiBhIGxpc3QuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyBhIGNvbXBvbmVudCB0byBwcm92aWRlIGFuIGBpdGVtc2AgYXJyYXkgb2YgYWxsIGVsZW1lbnRzXG4gICAqIGluIHRoZSBsaXN0LiBBIHN0YW5kYXJkIHdheSB0byBkbyB0aGF0IHdpdGggaXMgdGhlXG4gICAqIFtDb250ZW50QXNJdGVtc10oQ29udGVudEFzSXRlbXMubWQpIG1peGluLCB3aGljaCB0YWtlcyBhIGNvbXBvbmVudCdzXG4gICAqIGNvbnRlbnQgKHR5cGljYWxseSBpdHMgZGlzdHJpYnV0ZWQgY2hpbGRyZW4pIGFzIHRoZSBzZXQgb2YgbGlzdCBpdGVtczsgc2VlXG4gICAqIHRoYXQgbWl4aW4gZm9yIGRldGFpbHMuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gdHJhY2tzIGEgc2luZ2xlIHNlbGVjdGVkIGl0ZW0gaW4gdGhlIGxpc3QsIGFuZCBwcm92aWRlcyBtZWFucyB0b1xuICAgKiBnZXQgYW5kIHNldCB0aGF0IHN0YXRlIGJ5IGl0ZW0gcG9zaXRpb24gKGBzZWxlY3RlZEluZGV4YCkgb3IgaXRlbSBpZGVudGl0eVxuICAgKiAoYHNlbGVjdGVkSXRlbWApLiBUaGUgc2VsZWN0aW9uIGNhbiBiZSBtb3ZlZCBpbiB0aGUgbGlzdCB2aWEgdGhlIG1ldGhvZHNcbiAgICogYHNlbGVjdEZpcnN0YCwgYHNlbGVjdExhc3RgLCBgc2VsZWN0TmV4dGAsIGFuZCBgc2VsZWN0UHJldmlvdXNgLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGRvZXMgbm90IHByb2R1Y2UgYW55IHVzZXItdmlzaWJsZSBlZmZlY3RzIHRvIHJlcHJlc2VudFxuICAgKiBzZWxlY3Rpb24uIE90aGVyIG1peGlucywgc3VjaCBhc1xuICAgKiBbU2VsZWN0aW9uQXJpYUFjdGl2ZV0oU2VsZWN0aW9uQXJpYUFjdGl2ZS5tZCksXG4gICAqIFtTZWxlY3Rpb25IaWdobGlnaHRdKFNlbGVjdGlvbkhpZ2hsaWdodC5tZCkgYW5kXG4gICAqIFtTZWxlY3Rpb25JblZpZXddKFNlbGVjdGlvbkluVmlldy5tZCksIG1vZGlmeSB0aGUgc2VsZWN0ZWQgaXRlbSBpbiBjb21tb25cbiAgICogd2F5cyB0byBsZXQgdGhlIHVzZXIga25vdyBhIGdpdmVuIGl0ZW0gaXMgc2VsZWN0ZWQgb3Igbm90IHNlbGVjdGVkLlxuICAgKi9cbiAgY2xhc3MgSXRlbXNTZWxlY3Rpb24gZXh0ZW5kcyBiYXNlIHtcblxuICAgIC8qKlxuICAgICAqIEFwcGx5IHRoZSBpbmRpY2F0ZSBzZWxlY3Rpb24gc3RhdGUgdG8gdGhlIGl0ZW0uXG4gICAgICpcbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuIFVzZXItdmlzaWJsZVxuICAgICAqIGVmZmVjdHMgd2lsbCB0eXBpY2FsbHkgYmUgaGFuZGxlZCBieSBvdGhlciBtaXhpbnMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpdGVtIC0gdGhlIGl0ZW0gYmVpbmcgc2VsZWN0ZWQvZGVzZWxlY3RlZFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gc2VsZWN0ZWQgLSB0cnVlIGlmIHRoZSBpdGVtIGlzIHNlbGVjdGVkLCBmYWxzZSBpZiBub3RcbiAgICAgKi9cbiAgICBhcHBseVNlbGVjdGlvbihpdGVtLCBzZWxlY3RlZCkge1xuICAgICAgaWYgKHN1cGVyLmFwcGx5U2VsZWN0aW9uKSB7IHN1cGVyLmFwcGx5U2VsZWN0aW9uKGl0ZW0sIHNlbGVjdGVkKTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRydWUgaWYgdGhlIHNlbGVjdGlvbiBjYW4gYmUgbW92ZWQgdG8gdGhlIG5leHQgaXRlbSwgZmFsc2UgaWYgbm90ICh0aGVcbiAgICAgKiBzZWxlY3RlZCBpdGVtIGlzIHRoZSBsYXN0IGl0ZW0gaW4gdGhlIGxpc3QpLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgZ2V0IGNhblNlbGVjdE5leHQoKSB7XG4gICAgICByZXR1cm4gdGhpc1tjYW5TZWxlY3ROZXh0U3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IGNhblNlbGVjdE5leHQoY2FuU2VsZWN0TmV4dCkge1xuICAgICAgaWYgKCdjYW5TZWxlY3ROZXh0JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5jYW5TZWxlY3ROZXh0ID0gY2FuU2VsZWN0TmV4dDsgfVxuICAgICAgdGhpc1tjYW5TZWxlY3ROZXh0U3ltYm9sXSA9IGNhblNlbGVjdE5leHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiB0aGUgc2VsZWN0aW9uIGNhbiBiZSBtb3ZlZCB0byB0aGUgcHJldmlvdXMgaXRlbSwgZmFsc2UgaWYgbm90XG4gICAgICogKHRoZSBzZWxlY3RlZCBpdGVtIGlzIHRoZSBmaXJzdCBvbmUgaW4gdGhlIGxpc3QpLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgZ2V0IGNhblNlbGVjdFByZXZpb3VzKCkge1xuICAgICAgcmV0dXJuIHRoaXNbY2FuU2VsZWN0UHJldmlvdXNTeW1ib2xdO1xuICAgIH1cbiAgICBzZXQgY2FuU2VsZWN0UHJldmlvdXMoY2FuU2VsZWN0UHJldmlvdXMpIHtcbiAgICAgIGlmICgnY2FuU2VsZWN0UHJldmlvdXMnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLmNhblNlbGVjdFByZXZpb3VzID0gY2FuU2VsZWN0UHJldmlvdXM7IH1cbiAgICAgIHRoaXNbY2FuU2VsZWN0UHJldmlvdXNTeW1ib2xdID0gY2FuU2VsZWN0UHJldmlvdXM7XG4gICAgfVxuXG4gICAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuXG4gICAgICAvLyBTZXQgZGVmYXVsdHMuXG4gICAgICBpZiAodHlwZW9mIHRoaXMuc2VsZWN0aW9uUmVxdWlyZWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uUmVxdWlyZWQgPSB0aGlzLmRlZmF1bHRzLnNlbGVjdGlvblJlcXVpcmVkO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiB0aGlzLnNlbGVjdGlvbldyYXBzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbldyYXBzID0gdGhpcy5kZWZhdWx0cy5zZWxlY3Rpb25XcmFwcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgZGVmYXVsdHMoKSB7XG4gICAgICBsZXQgZGVmYXVsdHMgPSBzdXBlci5kZWZhdWx0cyB8fCB7fTtcbiAgICAgIGRlZmF1bHRzLnNlbGVjdGlvblJlcXVpcmVkID0gZmFsc2U7XG4gICAgICBkZWZhdWx0cy5zZWxlY3Rpb25XcmFwcyA9IGZhbHNlO1xuICAgICAgcmV0dXJuIGRlZmF1bHRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBhIG5ldyBpdGVtIGJlaW5nIGFkZGVkIHRvIHRoZSBsaXN0LlxuICAgICAqXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2Qgc2ltcGx5IHNldHMgdGhlIGl0ZW0nc1xuICAgICAqIHNlbGVjdGlvbiBzdGF0ZSB0byBmYWxzZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGl0ZW0gLSB0aGUgaXRlbSBiZWluZyBhZGRlZFxuICAgICAqL1xuICAgIGl0ZW1BZGRlZChpdGVtKSB7XG4gICAgICBpZiAoc3VwZXIuaXRlbUFkZGVkKSB7IHN1cGVyLml0ZW1BZGRlZChpdGVtKTsgfVxuICAgICAgdGhpcy5hcHBseVNlbGVjdGlvbihpdGVtLCBpdGVtID09PSB0aGlzLnNlbGVjdGVkSXRlbSk7XG4gICAgfVxuXG4gICAgaXRlbXNDaGFuZ2VkKCkge1xuICAgICAgaWYgKHN1cGVyLml0ZW1zQ2hhbmdlZCkgeyBzdXBlci5pdGVtc0NoYW5nZWQoKTsgfVxuXG4gICAgICBpZiAodGhpcy5zZWxlY3Rpb25SZXF1aXJlZCkge1xuICAgICAgICAvLyBFbnN1cmUgc2VsZWN0aW9uLCBidXQgZG8gdGhpcyBpbiB0aGUgbmV4dCB0aWNrIHRvIGdpdmUgb3RoZXIgbWl4aW5zIGFcbiAgICAgICAgLy8gY2hhbmNlIHRvIGRvIHRoZWlyIG93biBpdGVtc0NoYW5nZWQgd29yay5cbiAgICAgICAgbWljcm90YXNrKCgpID0+IHtcbiAgICAgICAgICBlbnN1cmVTZWxlY3Rpb24odGhpcyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY2hhbmdlIGluIGl0ZW1zIG1heSBoYXZlIGFmZmVjdGVkIHdoaWNoIG5hdmlnYXRpb25zIGFyZSBwb3NzaWJsZS5cbiAgICAgIHVwZGF0ZVBvc3NpYmxlTmF2aWdhdGlvbnModGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGluZGV4IG9mIHRoZSBpdGVtIHdoaWNoIGlzIGN1cnJlbnRseSBzZWxlY3RlZC5cbiAgICAgKlxuICAgICAqIElmIGBzZWxlY3Rpb25XcmFwc2AgaXMgZmFsc2UsIHRoZSBpbmRleCBpcyAtMSBpZiB0aGVyZSBpcyBubyBzZWxlY3Rpb24uXG4gICAgICogSW4gdGhhdCBjYXNlLCBzZXR0aW5nIHRoZSBpbmRleCB0byAtMSB3aWxsIGRlc2VsZWN0IGFueVxuICAgICAqIGN1cnJlbnRseS1zZWxlY3RlZCBpdGVtLlxuICAgICAqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0ZWRJbmRleCgpIHtcbiAgICAgIGxldCBzZWxlY3RlZEl0ZW0gPSB0aGlzLnNlbGVjdGVkSXRlbTtcblxuICAgICAgLy8gVE9ETzogSWYgc2VsZWN0aW9uIHdhc24ndCBmb3VuZCwgbW9zdCBsaWtlbHkgY2F1c2UgaXMgdGhhdCB0aGUgRE9NIHdhc1xuICAgICAgLy8gbWFuaXB1bGF0ZWQgZnJvbSB1bmRlcm5lYXRoIHVzLiBPbmNlIHdlIHRyYWNrIGNvbnRlbnQgY2hhbmdlcywgdHVyblxuICAgICAgLy8gdGhpcyBpbnRvIGEgd2FybmluZy5cbiAgICAgIC8vIFRPRE86IE1lbW9pemVcbiAgICAgIHJldHVybiBzZWxlY3RlZEl0ZW0gP1xuICAgICAgICB0aGlzLml0ZW1zLmluZGV4T2Yoc2VsZWN0ZWRJdGVtKSA6XG4gICAgICAgIC0xO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0ZWRJbmRleChpbmRleCkge1xuICAgICAgaWYgKCdzZWxlY3RlZEluZGV4JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEluZGV4ID0gaW5kZXg7IH1cbiAgICAgIGxldCBpdGVtcyA9IHRoaXMuaXRlbXM7XG4gICAgICBsZXQgaXRlbTtcbiAgICAgIGlmIChpbmRleCA8IDAgfHwgaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGl0ZW0gPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbSA9IGl0ZW1zW2luZGV4XTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gaXRlbTtcblxuICAgICAgbGV0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdzZWxlY3RlZC1pbmRleC1jaGFuZ2VkJywge1xuICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICBzZWxlY3RlZEluZGV4OiBpbmRleCxcbiAgICAgICAgICB2YWx1ZTogaW5kZXggLy8gZm9yIFBvbHltZXIgYmluZGluZ1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnRseSBzZWxlY3RlZCBpdGVtLCBvciBudWxsIGlmIHRoZXJlIGlzIG5vIHNlbGVjdGlvbi5cbiAgICAgKlxuICAgICAqIFNldHRpbmcgdGhpcyBwcm9wZXJ0eSB0byBudWxsIGRlc2VsZWN0cyBhbnkgY3VycmVudGx5LXNlbGVjdGVkIGl0ZW0uXG4gICAgICpcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqL1xuICAgIGdldCBzZWxlY3RlZEl0ZW0oKSB7XG4gICAgICByZXR1cm4gdGhpc1tzZWxlY3RlZEl0ZW1TeW1ib2xdIHx8IG51bGw7XG4gICAgfVxuICAgIHNldCBzZWxlY3RlZEl0ZW0oaXRlbSkge1xuICAgICAgaWYgKCdzZWxlY3RlZEl0ZW0nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkSXRlbSA9IGl0ZW07IH1cbiAgICAgIGxldCBwcmV2aW91c0l0ZW0gPSB0aGlzW3NlbGVjdGVkSXRlbVN5bWJvbF07XG4gICAgICBpZiAocHJldmlvdXNJdGVtKSB7XG4gICAgICAgIGlmIChpdGVtID09PSBwcmV2aW91c0l0ZW0pIHtcbiAgICAgICAgICAvLyBUaGUgaW5kaWNhdGVkIGl0ZW0gaXMgYWxyZWFkeSB0aGUgc2VsZWN0ZWQgaXRlbS5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVtb3ZlIHByZXZpb3VzIHNlbGVjdGlvbi5cbiAgICAgICAgdGhpcy5hcHBseVNlbGVjdGlvbihwcmV2aW91c0l0ZW0sIGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgLy8gVE9ETzogQ29uZmlybSBpdGVtIGlzIGFjdHVhbGx5IGluIHRoZSBsaXN0IGJlZm9yZSBzZWxlY3RpbmcuXG4gICAgICB0aGlzW3NlbGVjdGVkSXRlbVN5bWJvbF0gPSBpdGVtO1xuICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgdGhpcy5hcHBseVNlbGVjdGlvbihpdGVtLCB0cnVlKTtcbiAgICAgIH1cblxuICAgICAgLy8gVE9ETzogUmF0aW9uYWxpemUgd2l0aCBzZWxlY3RlZEluZGV4IHNvIHdlJ3JlIG5vdCByZWNhbGN1bGF0aW5nIGl0ZW1cbiAgICAgIC8vIG9yIGluZGV4IGluIGVhY2ggc2V0dGVyLlxuICAgICAgdXBkYXRlUG9zc2libGVOYXZpZ2F0aW9ucyh0aGlzKTtcblxuICAgICAgbGV0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdzZWxlY3RlZC1pdGVtLWNoYW5nZWQnLCB7XG4gICAgICAgIGRldGFpbDoge1xuICAgICAgICAgIHNlbGVjdGVkSXRlbTogaXRlbSxcbiAgICAgICAgICBwcmV2aW91c0l0ZW06IHByZXZpb3VzSXRlbSxcbiAgICAgICAgICB2YWx1ZTogaXRlbSAvLyBmb3IgUG9seW1lciBiaW5kaW5nXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgdGhlIGZpcnN0IGl0ZW0gaW4gdGhlIGxpc3QuXG4gICAgICovXG4gICAgc2VsZWN0Rmlyc3QoKSB7XG4gICAgICBpZiAoc3VwZXIuc2VsZWN0Rmlyc3QpIHsgc3VwZXIuc2VsZWN0Rmlyc3QoKTsgfVxuICAgICAgcmV0dXJuIHNlbGVjdEluZGV4KHRoaXMsIDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRydWUgaWYgdGhlIGxpc3Qgc2hvdWxkIGFsd2F5cyBoYXZlIGEgc2VsZWN0aW9uIChpZiBpdCBoYXMgaXRlbXMpLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0aW9uUmVxdWlyZWQoKSB7XG4gICAgICByZXR1cm4gdGhpc1tzZWxlY3Rpb25SZXF1aXJlZFN5bWJvbF07XG4gICAgfVxuICAgIHNldCBzZWxlY3Rpb25SZXF1aXJlZChzZWxlY3Rpb25SZXF1aXJlZCkge1xuICAgICAgaWYgKCdzZWxlY3Rpb25SZXF1aXJlZCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0aW9uUmVxdWlyZWQgPSBzZWxlY3Rpb25SZXF1aXJlZDsgfVxuICAgICAgdGhpc1tzZWxlY3Rpb25SZXF1aXJlZFN5bWJvbF0gPSBzZWxlY3Rpb25SZXF1aXJlZDtcbiAgICAgIGlmIChzZWxlY3Rpb25SZXF1aXJlZCkge1xuICAgICAgICBlbnN1cmVTZWxlY3Rpb24odGhpcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IHRoZSBsYXN0IGl0ZW0gaW4gdGhlIGxpc3QuXG4gICAgICovXG4gICAgc2VsZWN0TGFzdCgpIHtcbiAgICAgIGlmIChzdXBlci5zZWxlY3RMYXN0KSB7IHN1cGVyLnNlbGVjdExhc3QoKTsgfVxuICAgICAgcmV0dXJuIHNlbGVjdEluZGV4KHRoaXMsIHRoaXMuaXRlbXMubGVuZ3RoIC0gMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IHRoZSBuZXh0IGl0ZW0gaW4gdGhlIGxpc3QuXG4gICAgICovXG4gICAgc2VsZWN0TmV4dCgpIHtcbiAgICAgIGlmIChzdXBlci5zZWxlY3ROZXh0KSB7IHN1cGVyLnNlbGVjdE5leHQoKTsgfVxuICAgICAgcmV0dXJuIHNlbGVjdEluZGV4KHRoaXMsIHRoaXMuc2VsZWN0ZWRJbmRleCArIDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCB0aGUgcHJldmlvdXMgaXRlbSBpbiB0aGUgbGlzdC5cbiAgICAgKi9cbiAgICBzZWxlY3RQcmV2aW91cygpIHtcbiAgICAgIGlmIChzdXBlci5zZWxlY3RQcmV2aW91cykgeyBzdXBlci5zZWxlY3RQcmV2aW91cygpOyB9XG4gICAgICByZXR1cm4gc2VsZWN0SW5kZXgodGhpcywgdGhpcy5zZWxlY3RlZEluZGV4IC0gMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiBzZWxlY3Rpb24gbmF2aWdhdGlvbnMgd3JhcCBmcm9tIGxhc3QgdG8gZmlyc3QsIGFuZCB2aWNlIHZlcnNhLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0aW9uV3JhcHMoKSB7XG4gICAgICByZXR1cm4gdGhpc1tzZWxlY3Rpb25XcmFwc1N5bWJvbF07XG4gICAgfVxuICAgIHNldCBzZWxlY3Rpb25XcmFwcyh2YWx1ZSkge1xuICAgICAgaWYgKCdzZWxlY3Rpb25XcmFwcycgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0aW9uV3JhcHMgPSB2YWx1ZTsgfVxuICAgICAgdGhpc1tzZWxlY3Rpb25XcmFwc1N5bWJvbF0gPSBTdHJpbmcodmFsdWUpID09PSAndHJ1ZSc7XG4gICAgICB1cGRhdGVQb3NzaWJsZU5hdmlnYXRpb25zKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpcmVzIHdoZW4gdGhlIHNlbGVjdGVkSXRlbSBwcm9wZXJ0eSBjaGFuZ2VzLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIEl0ZW1zU2VsZWN0aW9uXG4gICAgICogQGV2ZW50IHNlbGVjdGVkLWl0ZW0tY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGRldGFpbC5zZWxlY3RlZEl0ZW0gVGhlIG5ldyBzZWxlY3RlZCBpdGVtLlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGRldGFpbC5wcmV2aW91c0l0ZW0gVGhlIHByZXZpb3VzbHkgc2VsZWN0ZWQgaXRlbS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEZpcmVzIHdoZW4gdGhlIHNlbGVjdGVkSW5kZXggcHJvcGVydHkgY2hhbmdlcy5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBJdGVtc1NlbGVjdGlvblxuICAgICAqIEBldmVudCBzZWxlY3RlZC1pbmRleC1jaGFuZ2VkXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGRldGFpbC5zZWxlY3RlZEluZGV4IFRoZSBuZXcgc2VsZWN0ZWQgaW5kZXguXG4gICAgICovXG5cbiAgfVxuXG4gIHJldHVybiBJdGVtc1NlbGVjdGlvbjtcbn07XG5cblxuLy8gSWYgbm8gaXRlbSBpcyBzZWxlY3RlZCwgc2VsZWN0IGEgZGVmYXVsdCBpdGVtLlxuZnVuY3Rpb24gZW5zdXJlU2VsZWN0aW9uKGVsZW1lbnQpIHtcbiAgbGV0IGluZGV4ID0gZWxlbWVudC5zZWxlY3RlZEluZGV4O1xuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgLy8gU2VsZWN0ZWQgaXRlbSBpcyBubyBsb25nZXIgaW4gdGhlIGN1cnJlbnQgc2V0IG9mIGl0ZW1zLlxuICAgIGlmIChlbGVtZW50Lml0ZW1zICYmIGVsZW1lbnQuaXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgLy8gU2VsZWN0IHRoZSBmaXJzdCBpdGVtLlxuICAgICAgLy8gVE9ETzogSWYgdGhlIHByZXZpb3VzbHktc2VsZWN0ZWQgaXRlbSBoYXMgYmVlbiBkZWxldGVkLCB0cnkgdG8gc2VsZWN0XG4gICAgICAvLyBhbiBpdGVtIGFkamFjZW50IHRvIHRoZSBwb3NpdGlvbiBpdCBoZWxkLlxuICAgICAgZWxlbWVudC5zZWxlY3RlZEluZGV4ID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTm8gaXRlbXMgZm9yIHVzIHRvIHNlbGVjdCwgYnV0IHdlIGNhbiBhdCBsZWFzdCBzaWduYWwgdGhhdCB0aGVyZSdzIG5vXG4gICAgICAvLyBsb25nZXIgYSBzZWxlY3Rpb24uXG4gICAgICBlbGVtZW50LnNlbGVjdGVkSXRlbSA9IG51bGw7XG4gICAgfVxuICB9XG59XG5cbi8vIEVuc3VyZSB0aGUgZ2l2ZW4gaW5kZXggaXMgd2l0aGluIGJvdW5kcywgYW5kIHNlbGVjdCBpdCBpZiBpdCdzIG5vdCBhbHJlYWR5XG4vLyBzZWxlY3RlZC5cbmZ1bmN0aW9uIHNlbGVjdEluZGV4KGVsZW1lbnQsIGluZGV4KSB7XG4gIGxldCBjb3VudCA9IGVsZW1lbnQuaXRlbXMubGVuZ3RoO1xuICBsZXQgYm91bmRlZEluZGV4O1xuICBpZiAoZWxlbWVudC5zZWxlY3Rpb25XcmFwcykge1xuICAgIC8vIEphdmFTY3JpcHQgbW9kIGRvZXNuJ3QgaGFuZGxlIG5lZ2F0aXZlIG51bWJlcnMgdGhlIHdheSB3ZSB3YW50IHRvIHdyYXAuXG4gICAgLy8gU2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE4NjE4MjUwLzc2NDcyXG4gICAgYm91bmRlZEluZGV4ID0gKChpbmRleCAlIGNvdW50KSArIGNvdW50KSAlIGNvdW50O1xuICB9IGVsc2Uge1xuICAgIC8vIEtlZXAgaW5kZXggd2l0aGluIGJvdW5kcyBvZiBhcnJheS5cbiAgICBib3VuZGVkSW5kZXggPSBNYXRoLm1heChNYXRoLm1pbihpbmRleCwgY291bnQgLSAxKSwgMCk7XG4gIH1cbiAgbGV0IHByZXZpb3VzSW5kZXggPSBlbGVtZW50LnNlbGVjdGVkSW5kZXg7XG4gIGlmIChwcmV2aW91c0luZGV4ICE9PSBib3VuZGVkSW5kZXgpIHtcbiAgICBlbGVtZW50LnNlbGVjdGVkSW5kZXggPSBib3VuZGVkSW5kZXg7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8vIEZvbGxvd2luZyBhIGNoYW5nZSBpbiBzZWxlY3Rpb24sIHJlcG9ydCB3aGV0aGVyIGl0J3Mgbm93IHBvc3NpYmxlIHRvXG4vLyBnbyBuZXh0L3ByZXZpb3VzIGZyb20gdGhlIGdpdmVuIGluZGV4LlxuZnVuY3Rpb24gdXBkYXRlUG9zc2libGVOYXZpZ2F0aW9ucyhlbGVtZW50KSB7XG4gIGxldCBjYW5TZWxlY3ROZXh0O1xuICBsZXQgY2FuU2VsZWN0UHJldmlvdXM7XG4gIGxldCBpdGVtcyA9IGVsZW1lbnQuaXRlbXM7XG4gIGlmIChpdGVtcyA9PSBudWxsIHx8IGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgIC8vIE5vIGl0ZW1zIHRvIHNlbGVjdC5cbiAgICBjYW5TZWxlY3ROZXh0ID0gZmFsc2U7XG4gICAgY2FuU2VsZWN0UHJldmlvdXMgPSBmYWxzZTtcbiAgfSBpZiAoZWxlbWVudC5zZWxlY3Rpb25XcmFwcykge1xuICAgIC8vIFNpbmNlIHRoZXJlIGFyZSBpdGVtcywgY2FuIGFsd2F5cyBnbyBuZXh0L3ByZXZpb3VzLlxuICAgIGNhblNlbGVjdE5leHQgPSB0cnVlO1xuICAgIGNhblNlbGVjdFByZXZpb3VzID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgaW5kZXggPSBlbGVtZW50LnNlbGVjdGVkSW5kZXg7XG4gICAgaWYgKGluZGV4IDwgMCAmJiBpdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAvLyBTcGVjaWFsIGNhc2UuIElmIHRoZXJlIGFyZSBpdGVtcyBidXQgbm8gc2VsZWN0aW9uLCBkZWNsYXJlIHRoYXQgaXQnc1xuICAgICAgLy8gYWx3YXlzIHBvc3NpYmxlIHRvIGdvIG5leHQvcHJldmlvdXMgdG8gY3JlYXRlIGEgc2VsZWN0aW9uLlxuICAgICAgY2FuU2VsZWN0TmV4dCA9IHRydWU7XG4gICAgICBjYW5TZWxlY3RQcmV2aW91cyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE5vcm1hbCBjYXNlOiB3ZSBoYXZlIGFuIGluZGV4IGluIGEgbGlzdCB0aGF0IGhhcyBpdGVtcy5cbiAgICAgIGNhblNlbGVjdFByZXZpb3VzID0gKGluZGV4ID4gMCk7XG4gICAgICBjYW5TZWxlY3ROZXh0ID0gKGluZGV4IDwgaXRlbXMubGVuZ3RoIC0gMSk7XG4gICAgfVxuICB9XG4gIGVsZW1lbnQuY2FuU2VsZWN0TmV4dCA9IGNhblNlbGVjdE5leHQ7XG4gIGVsZW1lbnQuY2FuU2VsZWN0UHJldmlvdXMgPSBjYW5TZWxlY3RQcmV2aW91cztcbn1cbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi9jcmVhdGVTeW1ib2wnO1xuaW1wb3J0IG1pY3JvdGFzayBmcm9tICcuL21pY3JvdGFzayc7XG5cbi8vIFN5bWJvbHMgZm9yIHByaXZhdGUgZGF0YSBtZW1iZXJzIG9uIGFuIGVsZW1lbnQuXG5jb25zdCBjb250ZW50Q2hhbmdlT2JzZXJ2ZXJTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2NvbnRlbnRDaGFuZ2VPYnNlcnZlcicpO1xuXG5cbi8vIFRPRE86IFNob3VsZCB0aGlzIGJlIHJlbmFtZWQgdG8gc29tZXRoaW5nIGxpa2UgRGlzdHJpYnV0ZWRDaGlsZHJlbkNoYW5nZWQ/XG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggT2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggd2lyZXMgdXAgbXV0YXRpb24gb2JzZXJ2ZXJzIHRvIHJlcG9ydCBhbnkgY2hhbmdlcyBpbiBhXG4gICAqIGNvbXBvbmVudCdzIGNvbnRlbnQgKGRpcmVjdCBjaGlsZHJlbiwgb3Igbm9kZXMgZGlzdHJpYnV0ZWQgdG8gc2xvdHMpLlxuICAgKlxuICAgKiBGb3IgdGhlIHRpbWUgYmVpbmcsIHRoaXMgY2FuIG9ubHkgc3VwcG9ydCBhIHNpbmdsZSBsZXZlbCBvZiBkaXN0cmlidXRlZFxuICAgKiBjb250ZW50LiBUaGF0IGlzLCBpZiBhIGNvbXBvbmVudCBjb250YWlucyBhIHNsb3QsIGFuZCB0aGUgc2V0IG9mIG5vZGVzXG4gICAqIGRpcmVjdGx5IGFzc2lnbmVkIHRvIHRoYXQgc2xvdCBjaGFuZ2VzLCB0aGVuIHRoaXMgbWl4aW4gd2lsbCBkZXRlY3QgdGhlXG4gICAqIGNoYW5nZS4gSG93ZXZlciwgdGhpcyBtaXhpbiBkb2VzIG5vdCB5ZXQgZGV0ZWN0IGNoYW5nZXMgaW4gcmVwcm9qZWN0ZWRcbiAgICogbm9kZXMuIElmIGEgY29tcG9uZW50J3MgaG9zdCBwbGFjZXMgYSBzbG90IGFzIGEgY2hpbGQgb2YgdGhlIGNvbXBvbmVudFxuICAgKiBpbnN0YW5jZSwgbm9kZXMgYXNzaWduZWQgdG8gdGhlIG91dGVyIGhvc3Qgd2lsbCBiZSBhc3NpZ25lZCB0byB0aGUgaG9zdCdzXG4gICAqIHNsb3QsIHRoZW4gcmVhc3NpZ25lZCB0byB0aGUgc2xvdCBlbGVtZW50IGluc2lkZSB0aGUgY29tcG9uZW50LiBDaGFuZ2VzIGluXG4gICAqIHN1Y2ggcmVwcm9qZWN0ZWQgbm9kZXMgd2lsbCBub3QgKHlldCkgYmUgZGV0ZWN0ZWQgYnkgdGhpcyBtaXhpbi5cbiAgICpcbiAgICogRm9yIGNvbXBhcmlzb24sIHNlZSBQb2x5bWVyJ3Mgb2JzZXJ2ZU5vZGVzIEFQSSwgd2hpY2ggZG9lcyBzb2x2ZSB0aGVcbiAgICogcHJvYmxlbSBvZiB0cmFja2luZyBjaGFuZ2VzIGluIHJlcHJvamVjdGVkIGNvbnRlbnQuXG4gICAqXG4gICAqIE5vdGU6IFRoZSB3ZWIgcGxhdGZvcm0gdGVhbSBjcmVhdGluZyB0aGUgc3BlY2lmaWNhdGlvbnMgZm9yIHdlYiBjb21wb25lbnRzXG4gICAqIHBsYW4gdG8gcmVxdWVzdCB0aGF0IGEgbmV3IHR5cGUgb2YgTXV0YXRpb25PYnNlcnZlciBvcHRpb24gYmUgZGVmaW5lZCB0aGF0XG4gICAqIGxldHMgYSBjb21wb25lbnQgbW9uaXRvciBjaGFuZ2VzIGluIGRpc3RyaWJ1dGVkIGNoaWxkcmVuLiBUaGlzIG1peGluIHdpbGxcbiAgICogYmUgdXBkYXRlZCB0byB0YWtlIGFkdmFudGFnZSBvZiB0aGF0IE11dGF0aW9uT2JzZXJ2ZXIgb3B0aW9uIHdoZW4gdGhhdFxuICAgKiBiZWNvbWVzIGF2YWlsYWJsZS5cbiAgICovXG4gIGNsYXNzIE9ic2VydmVDb250ZW50Q2hhbmdlcyBleHRlbmRzIGJhc2Uge1xuXG4gICAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuICAgICAgb2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzKHRoaXMpO1xuXG4gICAgICAvLyBNYWtlIGFuIGluaXRpYWwgY2FsbCB0byBjb250ZW50Q2hhbmdlZCgpIHNvIHRoYXQgdGhlIGNvbXBvbmVudCBjYW4gZG9cbiAgICAgIC8vIGluaXRpYWxpemF0aW9uIHRoYXQgaXQgbm9ybWFsbHkgZG9lcyB3aGVuIGNvbnRlbnQgY2hhbmdlcy5cbiAgICAgIC8vXG4gICAgICAvLyBUaGlzIHdpbGwgaW52b2tlIGNvbnRlbnRDaGFuZ2VkKCkgaGFuZGxlcnMgaW4gb3RoZXIgbWl4aW5zLiBJbiBvcmRlclxuICAgICAgLy8gdGhhdCB0aG9zZSBtaXhpbnMgaGF2ZSBhIGNoYW5jZSB0byBjb21wbGV0ZSB0aGVpciBvd24gaW5pdGlhbGl6YXRpb24sXG4gICAgICAvLyB3ZSBhZGQgdGhlIGNvbnRlbnRDaGFuZ2VkKCkgY2FsbCB0byB0aGUgbWljcm90YXNrIHF1ZXVlLlxuICAgICAgbWljcm90YXNrKCgpID0+IHRoaXMuY29udGVudENoYW5nZWQoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSBjb250ZW50cyBvZiB0aGUgY29tcG9uZW50IChpbmNsdWRpbmcgZGlzdHJpYnV0ZWRcbiAgICAgKiBjaGlsZHJlbikgaGF2ZSBjaGFuZ2VkLlxuICAgICAqXG4gICAgICogVGhpcyBtZXRob2QgaXMgYWxzbyBpbnZva2VkIHdoZW4gYSBjb21wb25lbnQgaXMgZmlyc3QgaW5zdGFudGlhdGVkOyB0aGVcbiAgICAgKiBjb250ZW50cyBoYXZlIGVzc2VudGlhbGx5IFwiY2hhbmdlZFwiIGZyb20gYmVpbmcgbm90aGluZy4gVGhpcyBhbGxvd3MgdGhlXG4gICAgICogY29tcG9uZW50IHRvIHBlcmZvcm0gaW5pdGlhbCBwcm9jZXNzaW5nIG9mIGl0cyBjaGlsZHJlbi5cbiAgICAgKi9cbiAgICBjb250ZW50Q2hhbmdlZCgpIHtcbiAgICAgIGlmIChzdXBlci5jb250ZW50Q2hhbmdlZCkgeyBzdXBlci5jb250ZW50Q2hhbmdlZCgpOyB9XG4gICAgICBsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2NvbnRlbnQtY2hhbmdlZCcpO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGV2ZW50IGlzIHJhaXNlZCB3aGVuIHRoZSBjb21wb25lbnQncyBjb250ZW50cyAoaW5jbHVkaW5nIGRpc3RyaWJ1dGVkXG4gICAgICogY2hpbGRyZW4pIGhhdmUgY2hhbmdlZC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBPYnNlcnZlQ29udGVudENoYW5nZXNcbiAgICAgKiBAZXZlbnQgY29udGVudC1jaGFuZ2VkXG4gICAgICovXG4gIH1cblxuICByZXR1cm4gT2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzO1xufTtcblxuXG4vLyBUT0RPOiBEZWNpZGUgd2hldGhlciB3ZSB3YW50IGFuIG9wdGlvbiB0byB0cmFjayBjaGFuZ2VzIHRvIGNoaWxkcmVuXG4vLyBhdHRyaWJ1dGVzLlxuZnVuY3Rpb24gb2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzKGVsZW1lbnQpIHtcbiAgZWxlbWVudFtjb250ZW50Q2hhbmdlT2JzZXJ2ZXJTeW1ib2xdID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT5cbiAgICBlbGVtZW50LmNvbnRlbnRDaGFuZ2VkKClcbiAgKTtcbiAgZWxlbWVudFtjb250ZW50Q2hhbmdlT2JzZXJ2ZXJTeW1ib2xdLm9ic2VydmUoZWxlbWVudCwge1xuICAgIC8vIGF0dHJpYnV0ZXM6IHRydWUsXG4gICAgY2hhcmFjdGVyRGF0YTogdHJ1ZSxcbiAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgc3VidHJlZTogdHJ1ZVxuICB9KTtcbn1cbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi9jcmVhdGVTeW1ib2wnO1xuaW1wb3J0IEZyYWN0aW9uYWxTZWxlY3Rpb24gZnJvbSAnLi9GcmFjdGlvbmFsU2VsZWN0aW9uJztcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3QgYW5pbWF0aW9uU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdhbmltYXRpb25zJyk7XG5jb25zdCBsYXN0QW5pbWF0aW9uU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdsYXN0QW5pbWF0aW9uJyk7XG5jb25zdCBwbGF5aW5nQW5pbWF0aW9uU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdhbmltYXRpbmdTZWxlY3Rpb24nKTtcbmNvbnN0IHByZXZpb3VzU2VsZWN0aW9uU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdwcmV2aW91c1NlbGVjdGlvbicpO1xuY29uc3Qgc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb25TeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3NlbGVjdGlvbkFuaW1hdGlvbkR1cmF0aW9uJyk7XG5jb25zdCBzZWxlY3Rpb25BbmltYXRpb25FZmZlY3RTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3NlbGVjdGlvbkFuaW1hdGlvbkVmZmVjdCcpO1xuY29uc3Qgc2VsZWN0aW9uQW5pbWF0aW9uS2V5ZnJhbWVzU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdzZWxlY3Rpb25BbmltYXRpb25LZXlmcmFtZXMnKTtcbmNvbnN0IHNob3dUcmFuc2l0aW9uU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdzaG93VHJhbnNpdGlvbicpO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggU2VsZWN0aW9uQW5pbWF0aW9uLiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl4aW4oYmFzZSkge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCB1c2VzIGFuaW1hdGlvbiB0byBzaG93IHRyYW5zaXRpb25zIGJldHdlZW4gc2VsZWN0aW9uIHN0YXRlcy5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBjYW4gYmUgdXNlZCBieSBjb21wb25lbnRzIHRoYXQgd2FudCB0byBwcm92aWRlIHZpc2libGVcbiAgICogYW5pbWF0aW9ucyB3aGVuIGNoYW5naW5nIHRoZSBzZWxlY3Rpb24uIEZvciBleGFtcGxlLCBhIGNhcm91c2VsIGNvbXBvbmVudFxuICAgKiBtYXkgd2FudCB0byBkZWZpbmUgYSBzbGlkaW5nIGFuaW1hdGlvbiBlZmZlY3Qgc2hvd24gd2hlbiBtb3ZpbmcgYmV0d2VlblxuICAgKiBpdGVtcy5cbiAgICpcbiAgICogVGhlIGFuaW1hdGlvbiBpcyBkZWZpbmVkIGJ5IGEgYHNlbGVjdGlvbkFuaW1hdGlvbktleWZyYW1lc2AgcHJvcGVydHk7IHNlZVxuICAgKiB0aGF0IHByb3BlcnR5IGZvciBkZXRhaWxzIG9uIGhvdyB0byBkZWZpbmUgdGhlc2Uga2V5ZnJhbWVzLiBUaGlzIGFuaW1hdGlvblxuICAgKiB3aWxsIGJlIHVzZWQgaW4gdHdvIHdheXMuIEZpcnN0LCB3aGVuIG1vdmluZyBzdHJpY3RseSBiZXR3ZWVuIGl0ZW1zLCB0aGVcbiAgICogYW5pbWF0aW9uIHdpbGwgcGxheSBzbW9vdGhseSB0byBzaG93IHRoZSBzZWxlY3Rpb24gY2hhbmdpbmcuIFNlY29uZCwgdGhlXG4gICAqIGFuaW1hdGlvbiBjYW4gYmUgdXNlZCB0byByZW5kZXIgdGhlIHNlbGVjdGlvbiBhdCBhIGZpeGVkIHBvaW50IGluIHRoZVxuICAgKiB0cmFuc2l0aW9uIGJldHdlZW4gc3RhdGVzLiBFLmcuLCBpZiB0aGUgdXNlciBwYXVzZXMgaGFsZndheSB0aHJvdWdoXG4gICAqIGRyYWdnaW5nIGFuIGVsZW1lbnQgdXNpbmcgdGhlIFtTd2lwZURpcmVjdGlvbl0oU3dpcGVEaXJlY3Rpb24ubWQpIG9yXG4gICAqIFtUcmFja3BhZERpcmVjdGlvbl0oVHJhY2twYWREaXJlY3Rpb24ubWQpIG1peGlucywgdGhlbiB0aGUgc2VsZWN0aW9uXG4gICAqIGFuaW1hdGlvbiB3aWxsIGJlIHNob3duIGF0IHRoZSBwb2ludCBleGFjdGx5IGhhbGZ3YXkgdGhyb3VnaC5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIGEgY29tcG9uZW50IHRvIHByb3ZpZGUgYW4gYGl0ZW1zYCBhcnJheSBvZiBhbGwgZWxlbWVudHNcbiAgICogaW4gdGhlIGxpc3QsIHdoaWNoIGNhbiBiZSBwcm92aWRlZCB2aWEgdGhlXG4gICAqIFtDb250ZW50QXNJdGVtc10oQ29udGVudEFzSXRlbXMubWQpIG1peGluLiBUaGlzIG1peGluIGFsc28gZXhwZWN0c1xuICAgKiBgc2VsZWN0ZWRJbmRleGAgYW5kIGBzZWxlY3RlZEl0ZW1gIHByb3BlcnRpZXMsIHdoaWNoIGNhbiBiZSBwcm92aWRlZCB2aWFcbiAgICogdGhlIFtJdGVtc1NlbGVjdGlvbl0oSXRlbXNTZWxlY3Rpb24ubWQpIG1peGluLlxuICAgKlxuICAgKiBUaGlzIG1peGluIHN1cHBvcnRzIGEgYHNlbGVjdGlvbldyYXBzYCBwcm9wZXJ0eS4gV2hlbiB0cnVlLCB0aGUgdXNlciBjYW5cbiAgICogbmF2aWdhdGUgZm9yd2FyZCBmcm9tIHRoZSBsYXN0IGl0ZW0gaW4gdGhlIGxpc3QgYW5kIHdyYXAgYXJvdW5kIHRvIHRoZVxuICAgKiBmaXJzdCBpdGVtLCBvciBuYXZpZ2F0ZSBiYWNrd2FyZCBmcm9tIHRoZSBmaXJzdCBpdGVtIGFuZCB3cmFwIGFyb3VuZCB0byB0aGVcbiAgICogbGFzdCBpdGVtLlxuICAgKlxuICAgKiBUaGlzIG1peGluIHVzZXMgdGhlIFdlYiBBbmltYXRpb25zIEFQSS4gRm9yIHVzZSBvbiBicm93c2VycyB3aGljaFxuICAgKiBkbyBub3Qgc3VwcG9ydCB0aGF0IEFQSSBuYXRpdmVseSwgeW91IHdpbGwgbmVlZCB0byBsb2FkIHRoZVxuICAgKiBbV2ViIEFuaW1hdGlvbnMgcG9seWZpbGxdKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWItYW5pbWF0aW9ucy93ZWItYW5pbWF0aW9ucy1qcykuXG4gICAqL1xuICBjbGFzcyBTZWxlY3Rpb25BbmltYXRpb24gZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cblxuICAgICAgLy8gU2V0IGRlZmF1bHRzLlxuICAgICAgaWYgKHR5cGVvZiB0aGlzLnNlbGVjdGlvbkFuaW1hdGlvbkR1cmF0aW9uID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbkFuaW1hdGlvbkR1cmF0aW9uID0gdGhpcy5kZWZhdWx0cy5zZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvbjtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5zZWxlY3Rpb25BbmltYXRpb25FZmZlY3QgPT09ICd1bmRlZmluZWQnICYmIHRoaXMuc2VsZWN0aW9uQW5pbWF0aW9uS2V5ZnJhbWVzID09IG51bGwpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25BbmltYXRpb25FZmZlY3QgPSB0aGlzLmRlZmF1bHRzLnNlbGVjdGlvbkFuaW1hdGlvbkVmZmVjdDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zaG93VHJhbnNpdGlvbiA9IHRydWU7XG4gICAgfVxuXG4gICAgZ2V0IGRlZmF1bHRzKCkge1xuICAgICAgbGV0IGRlZmF1bHRzID0gc3VwZXIuZGVmYXVsdHMgfHwge307XG4gICAgICBkZWZhdWx0cy5zZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvbiA9IDI1MDtcbiAgICAgIGRlZmF1bHRzLnNlbGVjdGlvbkFuaW1hdGlvbkVmZmVjdCA9ICdzbGlkZSc7XG4gICAgICByZXR1cm4gZGVmYXVsdHM7XG4gICAgfVxuXG4gICAgaXRlbUFkZGVkKGl0ZW0pIHtcbiAgICAgIC8vIFdlIG1hcmsgbmV3IGl0ZW1zIGluIHRoZSBsaXN0IGFzIGV4cGxpY2l0bHkgdmlzaWJsZSB0byBBUklBLiBPdGhlcndpc2UsXG4gICAgICAvLyB3aGVuIGFuIGl0ZW0gaXNuJ3QgdmlzaWJsZSBvbiB0aGUgc2NyZWVuLCBBUklBIHdpbGwgYXNzdW1lIHRoZSBpdGVtIGlzXG4gICAgICAvLyBvZiBubyBpbnRlcmVzdCB0byB0aGUgdXNlciwgYW5kIGxlYXZlIGl0IG91dCBvZiB0aGUgYWNjZXNzaWJpbGl0eSB0cmVlLlxuICAgICAgLy8gSWYgdGhlIGxpc3QgY29udGFpbnMgMTAgaXRlbXMsIGJ1dCBvbmx5IDMgYXJlIHZpc2libGUsIGEgc2NyZWVuIHJlYWRlclxuICAgICAgLy8gbWlnaHQgdGhlbiBhbm5vdW5jZSB0aGUgbGlzdCBvbmx5IGhhcyAzIGl0ZW1zLiBUbyBlbnN1cmUgdGhhdCBzY3JlZW5cbiAgICAgIC8vIHJlYWRlcnMgYW5kIG90aGVyIGFzc2lzdGl2ZSB0ZWNobm9sb2dpZXMgYW5ub3VuY2UgdGhlIGNvcnJlY3QgdG90YWxcbiAgICAgIC8vIG51bWJlciBvZiBpdGVtcywgd2UgZXhwbGljaXRseSBtYXJrIGFsbCBpdGVtcyBhcyBub3QgaGlkZGVuLiBUaGlzIHdpbGxcbiAgICAgIC8vIGV4cG9zZSB0aGVtIGFsbCBpbiB0aGUgYWNjZXNzaWJpbGl0eSB0cmVlLCBldmVuIHRoZSBpdGVtcyB3aGljaCBhcmVcbiAgICAgIC8vIGN1cnJlbnRseSBub3QgcmVuZGVyZWQuXG4gICAgICAvL1xuICAgICAgLy8gVE9ETzogR2VuZXJhbGx5IHNwZWFraW5nLCB0aGlzIGVudGlyZSBtaXhpbiBhc3N1bWVzIHRoYXQgdGhlIHVzZXIgY2FuXG4gICAgICAvLyBuYXZpZ2F0ZSB0aHJvdWdoIGFsbCBpdGVtcyBpbiBhIGxpc3QuIEJ1dCBhbiBhcHAgY291bGQgc3R5bGUgYW4gaXRlbSBhc1xuICAgICAgLy8gZGlzcGxheTpub25lIG9yIHZpc2liaWxpdHk6aGlkZGVuIGJlY2F1c2UgdGhlIHVzZXIgaXMgbm90IGFsbG93ZWQgdG9cbiAgICAgIC8vIGludGVyYWN0IHdpdGggdGhhdCBpdGVtIGF0IHRoZSBtb21lbnQuIFN1cHBvcnQgZm9yIHRoaXMgc2NlbmFyaW8gc2hvdWxkXG4gICAgICAvLyBiZSBhZGRlZC4gVGhpcyB3b3VsZCBlbnRhaWwgY2hhbmdpbmcgYWxsIGxvY2F0aW9ucyB3aGVyZSBhIG1peGluXG4gICAgICAvLyBmdW5jdGlvbiBpcyBjb3VudGluZyBpdGVtcywgaXRlcmF0aW5nIG92ZXIgdGhlICh2aXNpYmxlKSBpdGVtcywgYW5kXG4gICAgICAvLyBzaG93aW5nIG9yIGhpZGluZyBpdGVtcy4gQW1vbmcgb3RoZXIgdGhpbmdzLCB0aGUgY29kZSBiZWxvdyB0byBtYWtlXG4gICAgICAvLyBpdGVtcyB2aXNpYmxlIHRvIEFSSUEgd291bGQgbmVlZCB0byBkaXNjcmltaW5hdGUgYmV0d2VlbiBpdGVtcyB3aGljaFxuICAgICAgLy8gYXJlIGludmlzaWJsZSBiZWNhdXNlIG9mIGFuaW1hdGlvbiBzdGF0ZSwgb3IgaW52aXNpYmxlIGJlY2F1c2UgdGhlIHVzZXJcbiAgICAgIC8vIHNob3VsZG4ndCBpbnRlcmFjdCB3aXRoIHRoZW0uXG4gICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgaXRlbXNDaGFuZ2VkKCkge1xuICAgICAgaWYgKHN1cGVyLml0ZW1zQ2hhbmdlZCkgeyBzdXBlci5pdGVtc0NoYW5nZWQoKTsgfVxuICAgICAgcmVzZXRBbmltYXRpb25zKHRoaXMpO1xuICAgICAgcmVuZGVyU2VsZWN0aW9uKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgZnJhY3Rpb25hbCB2YWx1ZSBpbmRpY2F0aW5nIGhvdyBmYXIgdGhlIHVzZXIgaGFzIGN1cnJlbnRseSBhZHZhbmNlZCB0b1xuICAgICAqIHRoZSBuZXh0L3ByZXZpb3VzIGl0ZW0uIEUuZy4sIGEgYHNlbGVjdGVkRnJhY3Rpb25gIG9mIDMuNSBpbmRpY2F0ZXMgdGhlXG4gICAgICogdXNlciBpcyBoYWxmd2F5IGJldHdlZW4gaXRlbXMgMyBhbmQgNC5cbiAgICAgKlxuICAgICAqIEZvciBtb3JlIGRldGFpbHMsIHNlZSB0aGUgW0ZyYWN0aW9uYWxTZWxlY3Rpb25dKEZyYWN0aW9uYWxTZWxlY3Rpb24ubWQpXG4gICAgICogbWl4aW4uXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldCBzZWxlY3RlZEZyYWN0aW9uKCkge1xuICAgICAgcmV0dXJuIHN1cGVyLnNlbGVjdGVkRnJhY3Rpb24gfHwgMDtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGVkRnJhY3Rpb24odmFsdWUpIHtcbiAgICAgIGlmICgnc2VsZWN0ZWRGcmFjdGlvbicgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRGcmFjdGlvbiA9IHZhbHVlOyB9XG4gICAgICByZW5kZXJTZWxlY3Rpb24odGhpcywgdGhpcy5zZWxlY3RlZEluZGV4LCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdGVkSXRlbSgpIHtcbiAgICAgIHJldHVybiBzdXBlci5zZWxlY3RlZEl0ZW07XG4gICAgfVxuICAgIHNldCBzZWxlY3RlZEl0ZW0oaXRlbSkge1xuICAgICAgaWYgKCdzZWxlY3RlZEl0ZW0nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkSXRlbSA9IGl0ZW07IH1cbiAgICAgIHJlbmRlclNlbGVjdGlvbih0aGlzLCB0aGlzLnNlbGVjdGVkSW5kZXgsIDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBkdXJhdGlvbiBvZiBhIHNlbGVjdGlvbiBhbmltYXRpb24gaW4gbWlsbGlzZWNvbmRzLlxuICAgICAqXG4gICAgICogVGhpcyBtZWFzdXJlcyB0aGUgYW1vdW50IG9mIHRpbWUgcmVxdWlyZWQgZm9yIGEgc2VsZWN0aW9uIGFuaW1hdGlvbiB0b1xuICAgICAqIGNvbXBsZXRlLiBUaGlzIG51bWJlciByZW1haW5zIGNvbnN0YW50LCBldmVuIGlmIHRoZSBudW1iZXIgb2YgaXRlbXMgYmVpbmdcbiAgICAgKiBhbmltYXRlZCBpbmNyZWFzZXMuXG4gICAgICpcbiAgICAgKiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAyNTAgbWlsbGlzZWNvbmRzIChhIHF1YXJ0ZXIgYSBzZWNvbmQpLlxuICAgICAqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAZGVmYXVsdCAyNTBcbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb24oKSB7XG4gICAgICByZXR1cm4gdGhpc1tzZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvblN5bWJvbF07XG4gICAgfVxuICAgIHNldCBzZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKCdzZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvbicgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb24gPSB2YWx1ZTsgfVxuICAgICAgdGhpc1tzZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvblN5bWJvbF0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBvZiBhIHN0YW5kYXJkIHNlbGVjdGlvbiBhbmltYXRpb24gZWZmZWN0LlxuICAgICAqXG4gICAgICogVGhpcyBpcyBhIHNob3J0aGFuZCBmb3Igc2V0dGluZyB0aGUgYHNlbGVjdGlvbkFuaW1hdGlvbktleWZyYW1lc2BcbiAgICAgKiBwcm9wZXJ0eSB0byBzdGFuZGFyZCBrZXlmcmFtZXMuIFN1cHBvcnRlZCBzdHJpbmcgdmFsdWVzOlxuICAgICAqXG4gICAgICogKiBcImNyb3NzZmFkZVwiXG4gICAgICogKiBcInJldmVhbFwiXG4gICAgICogKiBcInJldmVhbFdpdGhGYWRlXCJcbiAgICAgKiAqIFwic2hvd0FkamFjZW50XCJcbiAgICAgKiAqIFwic2xpZGVcIlxuICAgICAqICogXCJzbGlkZVdpdGhHYXBcIlxuICAgICAqXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAZGVmYXVsdCBcInNsaWRlXCJcbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0aW9uQW5pbWF0aW9uRWZmZWN0KCkge1xuICAgICAgcmV0dXJuIHRoaXNbc2VsZWN0aW9uQW5pbWF0aW9uRWZmZWN0U3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGlvbkFuaW1hdGlvbkVmZmVjdCh2YWx1ZSkge1xuICAgICAgaWYgKCdzZWxlY3Rpb25BbmltYXRpb25FZmZlY3QnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGlvbkFuaW1hdGlvbkVmZmVjdCA9IHZhbHVlOyB9XG4gICAgICB0aGlzW3NlbGVjdGlvbkFuaW1hdGlvbkVmZmVjdFN5bWJvbF0gPSB2YWx1ZTtcbiAgICAgIHRoaXMuc2VsZWN0aW9uQW5pbWF0aW9uS2V5ZnJhbWVzID0gbWl4aW4uc3RhbmRhcmRFZmZlY3RLZXlmcmFtZXNbdmFsdWVdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBrZXlmcmFtZXMgdGhhdCBkZWZpbmUgYW4gYW5pbWF0aW9uIHRoYXQgcGxheXMgZm9yIGFuIGl0ZW0gd2hlbiBtb3ZpbmdcbiAgICAgKiBmb3J3YXJkIGluIHRoZSBzZXF1ZW5jZS5cbiAgICAgKlxuICAgICAqIFRoaXMgaXMgYW4gYXJyYXkgb2YgQ1NTIHJ1bGVzIHRoYXQgd2lsbCBiZSBhcHBsaWVkLiBUaGVzZSBhcmUgdXNlZCBhc1xuICAgICAqIFtrZXlmcmFtZXNdKGh0dHA6Ly93M2MuZ2l0aHViLmlvL3dlYi1hbmltYXRpb25zLyNrZXlmcmFtZXMtc2VjdGlvbilcbiAgICAgKiB0byBhbmltYXRlIHRoZSBpdGVtIHdpdGggdGhlXG4gICAgICogW1dlYiBBbmltYXRpb25zIEFQSV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL2FuaW1hdGlvbikuXG4gICAgICpcbiAgICAgKiBUaGUgYW5pbWF0aW9uIHJlcHJlc2VudHMgdGhlIHN0YXRlIG9mIHRoZSBuZXh0IGl0ZW0gYXMgaXQgbW92ZXMgZnJvbVxuICAgICAqIGNvbXBsZXRlbHkgdW5zZWxlY3RlZCAob2Zmc3RhZ2UsIHVzdWFsbHkgcmlnaHQpLCB0byBzZWxlY3RlZCAoY2VudGVyXG4gICAgICogc3RhZ2UpLCB0byBjb21wbGV0ZWx5IHVuc2VsZWN0ZWQgKG9mZnN0YWdlLCB1c3VhbGx5IGxlZnQpLiBUaGUgY2VudGVyIHRpbWVcbiAgICAgKiBvZiB0aGUgYW5pbWF0aW9uIHNob3VsZCBjb3JyZXNwb25kIHRvIHRoZSBpdGVtJ3MgcXVpc2NlbnQgc2VsZWN0ZWQgc3RhdGUsXG4gICAgICogdHlwaWNhbGx5IGluIHRoZSBjZW50ZXIgb2YgdGhlIHN0YWdlIGFuZCBhdCB0aGUgaXRlbSdzIGxhcmdlc3Qgc2l6ZS5cbiAgICAgKlxuICAgICAqIFRoZSBkZWZhdWx0IGZvcndhcmQgYW5pbWF0aW9uIGlzIGEgc21vb3RoIHNsaWRlIGF0IGZ1bGwgc2l6ZSBmcm9tIHJpZ2h0IHRvXG4gICAgICogbGVmdC5cbiAgICAgKlxuICAgICAqIFdoZW4gbW92aW5nIHRoZSBzZWxlY3Rpb24gYmFja3dhcmQsIHRoaXMgYW5pbWF0aW9uIGlzIHBsYXllZCBpbiByZXZlcnNlLlxuICAgICAqXG4gICAgICogQHR5cGUge2Nzc1J1bGVzW119XG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGlvbkFuaW1hdGlvbktleWZyYW1lcygpIHtcbiAgICAgIC8vIFN0YW5kYXJkIGFuaW1hdGlvbiBzbGlkZXMgbGVmdC9yaWdodCwga2VlcHMgYWRqYWNlbnQgaXRlbXMgb3V0IG9mIHZpZXcuXG4gICAgICByZXR1cm4gdGhpc1tzZWxlY3Rpb25BbmltYXRpb25LZXlmcmFtZXNTeW1ib2xdO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0aW9uQW5pbWF0aW9uS2V5ZnJhbWVzKHZhbHVlKSB7XG4gICAgICBpZiAoJ3NlbGVjdGlvbkFuaW1hdGlvbktleWZyYW1lcycgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0aW9uQW5pbWF0aW9uS2V5ZnJhbWVzID0gdmFsdWU7IH1cbiAgICAgIHRoaXNbc2VsZWN0aW9uQW5pbWF0aW9uS2V5ZnJhbWVzU3ltYm9sXSA9IHZhbHVlO1xuICAgICAgcmVzZXRBbmltYXRpb25zKHRoaXMpO1xuICAgICAgcmVuZGVyU2VsZWN0aW9uKHRoaXMpO1xuICAgIH1cblxuICAgIGdldCBzZWxlY3Rpb25XcmFwcygpIHtcbiAgICAgIHJldHVybiBzdXBlci5zZWxlY3Rpb25XcmFwcztcbiAgICB9XG4gICAgc2V0IHNlbGVjdGlvbldyYXBzKHZhbHVlKSB7XG4gICAgICBpZiAoJ3NlbGVjdGlvbldyYXBzJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3Rpb25XcmFwcyA9IHZhbHVlOyB9XG4gICAgICByZXNldEFuaW1hdGlvbnModGhpcyk7XG4gICAgICByZW5kZXJTZWxlY3Rpb24odGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lIHdoZXRoZXIgYSB0cmFuc2l0aW9uIHNob3VsZCBiZSBzaG93biBkdXJpbmcgc2VsZWN0aW9uLlxuICAgICAqXG4gICAgICogQ29tcG9uZW50cyBsaWtlIGNhcm91c2VscyBvZnRlbiBkZWZpbmUgYW5pbWF0ZWQgQ1NTIHRyYW5zaXRpb25zIGZvclxuICAgICAqIHNsaWRpbmcgZWZmZWN0cy4gU3VjaCBhIHRyYW5zaXRpb24gc2hvdWxkIHVzdWFsbHkgKm5vdCogYmUgYXBwbGllZCB3aGlsZVxuICAgICAqIHRoZSB1c2VyIGlzIGRyYWdnaW5nLCBiZWNhdXNlIGEgQ1NTIGFuaW1hdGlvbiB3aWxsIGludHJvZHVjZSBhIGxhZyB0aGF0XG4gICAgICogbWFrZXMgdGhlIHN3aXBlIGZlZWwgc2x1Z2dpc2guIEluc3RlYWQsIGFzIGxvbmcgYXMgdGhlIHVzZXIgaXMgZHJhZ2dpbmdcbiAgICAgKiB3aXRoIHRoZWlyIGZpbmdlciBkb3duLCB0aGUgdHJhbnNpdGlvbiBzaG91bGQgYmUgc3VwcHJlc3NlZC4gV2hlbiB0aGVcbiAgICAgKiB1c2VyIHJlbGVhc2VzIHRoZWlyIGZpbmdlciwgdGhlIHRyYW5zaXRpb24gY2FuIGJlIHJlc3RvcmVkLCBhbGxvd2luZyB0aGVcbiAgICAgKiBhbmltYXRpb24gdG8gc2hvdyB0aGUgY2Fyb3VzZWwgc2xpZGluZyBpbnRvIGl0cyBmaW5hbCBwb3NpdGlvbi5cbiAgICAgKlxuICAgICAqIE5vdGU6IFRoaXMgcHJvcGVydHkgaXMgb25seSBpbnRlbmRlZCB0byBsZXQgYSBjb21wb25lbnQgY29vcGVyYXRlIHdpdGhcbiAgICAgKiBtaXhpbnMgdGhhdCBtYXkgYmUgYXBwbGllZCB0byBpdCwgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBsZXQgc29tZW9uZVxuICAgICAqIHVzaW5nIGNvbXBvbmVudCBwZXJtYW5lbnRseSBlbmFibGUgb3IgZGlzYWJsZSB0cmFuc2l0aW9uIGVmZmVjdHMuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn0gdHJ1ZSBpZiBhIGNvbXBvbmVudC1wcm92aWRlZCB0cmFuc2l0aW9uIHNob3VsZCBiZSBzaG93bixcbiAgICAgKiBmYWxzZSBpZiBub3QuXG4gICAgICovXG4gICAgLy8gVE9ETzogUmVuYW1lIChhbmQgZmxpcCBtZWFuaW5nKSB0byBzb21ldGhpbmcgbGlrZSBkcmFnZ2luZygpP1xuICAgIGdldCBzaG93VHJhbnNpdGlvbigpIHtcbiAgICAgIHJldHVybiBzdXBlci5zaG93VHJhbnNpdGlvbiB8fCB0aGlzW3Nob3dUcmFuc2l0aW9uU3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IHNob3dUcmFuc2l0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoJ3Nob3dUcmFuc2l0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zaG93VHJhbnNpdGlvbiA9IHZhbHVlOyB9XG4gICAgICB0aGlzW3Nob3dUcmFuc2l0aW9uU3ltYm9sXSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBTZWxlY3Rpb25BbmltYXRpb247XG59XG5cblxuLy8gV2UgZXhwb3NlIGhlbHBlcnMgb24gdGhlIG1peGluIGZ1bmN0aW9uIHRoYXQgd2Ugd2FudCB0byBiZSBhYmxlIHRvIHVuaXQgdGVzdC5cbi8vIFNpbmNlIHRoZXNlIGFyZSBvbiB0aGUgZnVuY3Rpb24sIG5vdCBvbiB0aGUgY2xhc3MgZW1pdHRlZCBieSB0aGUgZnVuY3Rpb24sXG4vLyB0aGV5IGRvbid0IGVuZCB1cCBnZXR0aW5nIGV4cG9zZWQgb24gYWN0dWFsIGVsZW1lbnQgaW5zdGFuY2VzLlxubWl4aW4uaGVscGVycyA9IHtcblxuICAvKlxuICAgKiBDYWxjdWxhdGUgdGhlIGFuaW1hdGlvbiBmcmFjdGlvbnMgZm9yIGFuIGVsZW1lbnQncyBpdGVtcyBhdCB0aGUgZ2l2ZW5cbiAgICogc2VsZWN0aW9uIHBvaW50LiBUaGlzIGlzIHVzZWQgd2hlbiByZW5kZXJpbmcgdGhlIGVsZW1lbnQncyBzZWxlY3Rpb24gc3RhdGVcbiAgICogaW5zdGFudGFuZW91c2x5LlxuICAgKlxuICAgKiBUaGlzIGZ1bmN0aW9uIGNvbnNpZGVycyB0aGUgc2VsZWN0ZWRJbmRleCBwYXJhbWV0ZXIsIHdoaWNoIGNhbiBiZSBhIHdob2xlXG4gICAqIG9yIGZyYWN0aW9uYWwgbnVtYmVyLCBhbmQgZGV0ZXJtaW5lcyB3aGljaCBpdGVtcyB3aWxsIGJlIHZpc2libGUgYXQgdGhhdFxuICAgKiBpbmRleC4gVGhpcyBmdW5jdGlvbiB0aGVuIGNhbGN1bGF0ZXMgYSBjb3JyZXNwb25kaW5nIGFuaW1hdGlvbiBmcmFjdGlvbjogYVxuICAgKiBudW1iZXIgYmV0d2VlbiAwIGFuZCAxIGluZGljYXRpbmcgaG93IGZhciB0aHJvdWdoIHRoZSBzZWxlY3Rpb24gYW5pbWF0aW9uXG4gICAqIGFuIGl0ZW0gc2hvdWxkIGJlIHNob3duLCBvciBudWxsIGlmIHRoZSBpdGVtIHNob3VsZCBub3QgYmUgdmlzaWJsZSBhdCB0aGF0XG4gICAqIHNlbGVjdGlvbiBpbmRleC4gVGhlc2UgZnJhY3Rpb25zIGFyZSByZXR1cm5lZCBhcyBhbiBhcnJheSwgd2hlcmUgdGhlXG4gICAqIGFuaW1hdGlvbiBmcmFjdGlvbiBhdCBwb3NpdGlvbiBOIGNvcnJlc3BvbmRzIHRvIGhvdyBpdGVtIE4gc2hvdWxkIGJlIHNob3duLlxuICAgKi9cbiAgYW5pbWF0aW9uRnJhY3Rpb25zRm9yU2VsZWN0aW9uKGVsZW1lbnQsIHNlbGVjdGlvbikge1xuXG4gICAgbGV0IGl0ZW1zID0gZWxlbWVudC5pdGVtcztcbiAgICBpZiAoIWl0ZW1zKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGl0ZW1Db3VudCA9IGl0ZW1zLmxlbmd0aDtcbiAgICBsZXQgc2VsZWN0aW9uV3JhcHMgPSBlbGVtZW50LnNlbGVjdGlvbldyYXBzO1xuXG4gICAgcmV0dXJuIGl0ZW1zLm1hcCgoaXRlbSwgaXRlbUluZGV4KSA9PiB7XG4gICAgICAvLyBIb3cgbWFueSBzdGVwcyBmcm9tIHRoZSBzZWxlY3Rpb24gcG9pbnQgdG8gdGhpcyBpdGVtP1xuICAgICAgbGV0IHN0ZXBzID0gc3RlcHNUb0luZGV4KGl0ZW1Db3VudCwgc2VsZWN0aW9uV3JhcHMsIHNlbGVjdGlvbiwgaXRlbUluZGV4KTtcbiAgICAgIC8vIFRvIGNvbnZlcnQgc3RlcHMgdG8gYW5pbWF0aW9uIGZyYWN0aW9uOlxuICAgICAgLy8gc3RlcHMgICAgICBhbmltYXRpb24gZnJhY3Rpb25cbiAgICAgIC8vICAxICAgICAgICAgMCAgICAgKHN0YWdlIHJpZ2h0KVxuICAgICAgLy8gIDAgICAgICAgICAwLjUgICAoY2VudGVyIHN0YWdlKVxuICAgICAgLy8gLTEgICAgICAgICAxICAgICAoc3RhZ2UgbGVmdClcbiAgICAgIGxldCBhbmltYXRpb25GcmFjdGlvbiA9ICgxIC0gc3RlcHMpIC8gMjtcbiAgICAgIHJldHVybiAoYW5pbWF0aW9uRnJhY3Rpb24gPj0gMCAmJiBhbmltYXRpb25GcmFjdGlvbiA8PSAxKSA/XG4gICAgICAgIGFuaW1hdGlvbkZyYWN0aW9uIDpcbiAgICAgICAgbnVsbDsgLy8gT3V0c2lkZSBhbmltYXRpb24gcmFuZ2VcbiAgICB9KTtcbiAgfSxcblxuICAvKlxuICAgKiBDYWxjdWxhdGUgdGhlIGFuaW1hdGlvbiB0aW1pbmdzIHRoYXQgc2hvdWxkIGJlIHVzZWQgdG8gc21vb3RobHkgYW5pbWF0ZSB0aGVcbiAgICogZWxlbWVudCdzIGl0ZW1zIGZyb20gb25lIHNlbGVjdGlvbiBzdGF0ZSB0byBhbm90aGVyLlxuICAgKlxuICAgKiBUaGlzIHJldHVybnMgYW4gYXJyYXkgb2YgdGltaW5ncywgd2hlcmUgdGhlIHRpbWluZyBhdCBwb3NpdGlvbiBOIHNob3VsZCBiZVxuICAgKiB1c2VkIHRvIGFuaW1hdGUgaXRlbSBOLiBJZiBhbiBpdGVtJ3MgdGltaW5nIGlzIG51bGwsIHRoZW4gdGhhdCBpdGVtIHNob3VsZFxuICAgKiBub3QgdGFrZSBwbGFjZSBpbiB0aGUgYW5pbWF0aW9uLCBhbmQgc2hvdWxkIGJlIGhpZGRlbiBpbnN0ZWFkLlxuICAgKi9cbiAgZWZmZWN0VGltaW5nc0ZvclNlbGVjdGlvbkFuaW1hdGlvbihlbGVtZW50LCBmcm9tU2VsZWN0aW9uLCB0b1NlbGVjdGlvbikge1xuXG4gICAgbGV0IGl0ZW1zID0gZWxlbWVudC5pdGVtcztcbiAgICBpZiAoIWl0ZW1zKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBpdGVtQ291bnQgPSBpdGVtcy5sZW5ndGg7XG4gICAgbGV0IHNlbGVjdGlvbldyYXBzID0gZWxlbWVudC5zZWxlY3Rpb25XcmFwcztcbiAgICBsZXQgdG9JbmRleCA9IEZyYWN0aW9uYWxTZWxlY3Rpb24uaGVscGVycy53cmFwcGVkU2VsZWN0aW9uUGFydHModG9TZWxlY3Rpb24sIGl0ZW1Db3VudCwgc2VsZWN0aW9uV3JhcHMpLmluZGV4O1xuICAgIGxldCB0b3RhbFN0ZXBzID0gc3RlcHNUb0luZGV4KGl0ZW1Db3VudCwgc2VsZWN0aW9uV3JhcHMsIGZyb21TZWxlY3Rpb24sIHRvU2VsZWN0aW9uKTtcbiAgICBsZXQgZGlyZWN0aW9uID0gdG90YWxTdGVwcyA+PSAwID8gJ25vcm1hbCc6ICdyZXZlcnNlJztcbiAgICBsZXQgZmlsbCA9ICdib3RoJztcbiAgICBsZXQgdG90YWxEdXJhdGlvbiA9IGVsZW1lbnQuc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb247XG4gICAgbGV0IHN0ZXBEdXJhdGlvbiA9IHRvdGFsU3RlcHMgIT09IDAgP1xuICAgICAgdG90YWxEdXJhdGlvbiAqIDIgLyBNYXRoLmNlaWwoTWF0aC5hYnModG90YWxTdGVwcykpIDpcbiAgICAgIDA7ICAvLyBObyBzdGVwcyByZXF1aXJlZCwgYW5pbWF0aW9uIHdpbGwgYmUgaW5zdGFudGVub3VzLlxuXG4gICAgbGV0IHRpbWluZ3MgPSBpdGVtcy5tYXAoKGl0ZW0sIGl0ZW1JbmRleCkgPT4ge1xuICAgICAgbGV0IHN0ZXBzID0gc3RlcHNUb0luZGV4KGl0ZW1Db3VudCwgc2VsZWN0aW9uV3JhcHMsIGl0ZW1JbmRleCwgdG9TZWxlY3Rpb24pO1xuICAgICAgLy8gSWYgd2UgaW5jbHVkZSB0aGlzIGl0ZW0gaW4gdGhlIHN0YWdnZXJlZCBzZXF1ZW5jZSBvZiBhbmltYXRpb25zIHdlJ3JlXG4gICAgICAvLyBjcmVhdGluZywgd2hlcmUgd291bGQgdGhlIGl0ZW0gYXBwZWFyIGluIHRoZSBzZXF1ZW5jZT9cbiAgICAgIGxldCBwb3NpdGlvbkluU2VxdWVuY2UgPSB0b3RhbFN0ZXBzIC0gc3RlcHM7XG4gICAgICBpZiAodG90YWxTdGVwcyA8IDApIHtcbiAgICAgICAgcG9zaXRpb25JblNlcXVlbmNlID0gLXBvc2l0aW9uSW5TZXF1ZW5jZTtcbiAgICAgIH1cbiAgICAgIC8vIFNvLCBpcyB0aGlzIGl0ZW0gcmVhbGx5IGluY2x1ZGVkIGluIHRoZSBzZXF1ZW5jZT9cbiAgICAgIGlmIChNYXRoLmNlaWwocG9zaXRpb25JblNlcXVlbmNlKSA+PSAwICYmIHBvc2l0aW9uSW5TZXF1ZW5jZSA8PSBNYXRoLmFicyh0b3RhbFN0ZXBzKSkge1xuICAgICAgICAvLyBOb3RlIHRoYXQgZGVsYXkgZm9yIGZpcnN0IGl0ZW0gd2lsbCBiZSBuZWdhdGl2ZS4gVGhhdCB3aWxsIGNhdXNlXG4gICAgICAgIC8vIHRoZSBhbmltYXRpb24gdG8gc3RhcnQgaGFsZndheSB0aHJvdWdoLCB3aGljaCBpcyB3aGF0IHdlIHdhbnQuXG4gICAgICAgIGxldCBkZWxheSA9IHN0ZXBEdXJhdGlvbiAqIChwb3NpdGlvbkluU2VxdWVuY2UgLSAxKS8yO1xuICAgICAgICBsZXQgZW5kRGVsYXkgPSBpdGVtSW5kZXggPT09IHRvSW5kZXggP1xuICAgICAgICAgIC1zdGVwRHVyYXRpb24vMiA6ICAgLy8gU3RvcCBoYWxmd2F5IHRocm91Z2guXG4gICAgICAgICAgMDsgICAgICAgICAgICAgIC8vIFBsYXkgYW5pbWF0aW9uIHVudGlsIGVuZC5cbiAgICAgICAgcmV0dXJuIHsgZHVyYXRpb246IHN0ZXBEdXJhdGlvbiwgZGlyZWN0aW9uLCBmaWxsLCBkZWxheSwgZW5kRGVsYXkgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRpbWluZ3M7XG4gIH1cblxufTtcblxuXG4vLyBLZXlmcmFtZXMgZm9yIHN0YW5kYXJkIHNlbGVjdGlvbiBhbmltYXRpb24gZWZmZWN0cy5cbm1peGluLnN0YW5kYXJkRWZmZWN0S2V5ZnJhbWVzID0ge1xuXG4gIC8vIFNpbXBsZSBjcm9zc2ZhZGVcbiAgY3Jvc3NmYWRlOiBbXG4gICAgeyBvcGFjaXR5OiAwIH0sXG4gICAgeyBvcGFjaXR5OiAxIH0sXG4gICAgeyBvcGFjaXR5OiAwIH1cbiAgXSxcblxuICAvLyBSZXZlYWwsIGFzIGlmIHNsaWRpbmcgdGhlIHRvcCBjYXJkIG9mZiBhIGRlY2sgb2YgY2FyZHNcbiAgcmV2ZWFsOiBbXG4gICAgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDAlKScsIHpJbmRleDogMCB9LFxuICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwJSknLCB6SW5kZXg6IDEgfSxcbiAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTEwMCUpJywgekluZGV4OiAyIH1cbiAgXSxcblxuICAvLyBHb29nbGUgUGhvdG9zLXN0eWxlIHJldmVhbC13aXRoLWZhZGUgYW5pbWF0aW9uXG4gIHJldmVhbFdpdGhGYWRlOiBbXG4gICAgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDAlKSBzY2FsZSgwLjc1KScsIG9wYWNpdHk6IDAsIHpJbmRleDogMCB9LFxuICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwJSkgc2NhbGUoMS4wKScsIG9wYWNpdHk6IDEsIHpJbmRleDogMSB9LFxuICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtMTAwJSkgc2NhbGUoMS4wKScsIG9wYWNpdHk6IDEsIHpJbmRleDogMiB9XG4gIF0sXG5cbiAgLy8gQ2Fyb3VzZWwgdmFyaWFudCB3aXRoIGEgYml0IG9mIG9mZi1zdGFnZSBlbGVtZW50cyBzaG93aW5nXG4gIHNob3dBZGphY2VudDogW1xuICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCg3OCUpIHNjYWxlKDAuNyknLCB6SW5kZXg6IDAgfSxcbiAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCUpIHNjYWxlKDAuODIpJywgekluZGV4OiAxIH0sXG4gICAgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC03OCUpIHNjYWxlKDAuNyknLCB6SW5kZXg6IDAgfVxuICBdLFxuXG4gIC8vIFNpbXBsZSBzbGlkZVxuICBzbGlkZTogW1xuICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgxMDAlKScgfSxcbiAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTEwMCUpJyB9XG4gIF0sXG5cbiAgLy8gU2xpZGUsIHdpdGggYSBnYXAgYmV0d2VlblxuICBzbGlkZVdpdGhHYXA6IFtcbiAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMTEwJSknIH0sXG4gICAgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC0xMTAlKScgfVxuICBdXG5cbn07XG5cblxuLypcbiAqIFNtb290aGx5IGFuaW1hdGUgdGhlIHNlbGVjdGlvbiBiZXR3ZWVuIHRoZSBpbmRpY2F0ZWQgXCJmcm9tXCIgYW5kIFwidG9cIlxuICogaW5kaWNlcy4gVGhlIGZvcm1lciBjYW4gYmUgYSBmcmFjdGlvbiwgZS5nLiwgd2hlbiB0aGUgdXNlciByZWxlYXNlcyBhIGZpbmdlclxuICogdG8gY29tcGxldGUgYSB0b3VjaCBkcmFnLCBhbmQgdGhlIHNlbGVjdGlvbiB3aWxsIHNuYXAgdG8gdGhlIGNsb3Nlc3Qgd2hvbGVcbiAqIGluZGV4LlxuICovXG5mdW5jdGlvbiBhbmltYXRlU2VsZWN0aW9uKGVsZW1lbnQsIGZyb21TZWxlY3Rpb24sIHRvU2VsZWN0aW9uKSB7XG5cbiAgcmVzZXRBbmltYXRpb25zKGVsZW1lbnQpO1xuXG4gIGlmIChlbGVtZW50W2xhc3RBbmltYXRpb25TeW1ib2xdKSB7XG4gICAgLy8gQ2FuY2VsIHRoZSBlZmZlY3RzIG9mIHRoZSBsYXN0IHNlbGVjdGlvbiBhbmltYXRpb24gaW4gcHJvZ3Jlc3MuXG4gICAgZWxlbWVudFtsYXN0QW5pbWF0aW9uU3ltYm9sXS5vbmZpbmlzaCA9IG51bGw7XG4gICAgZWxlbWVudFtsYXN0QW5pbWF0aW9uU3ltYm9sXSA9IG51bGw7XG4gIH1cblxuICAvLyBDYWxjdWxhdGUgdGhlIGFuaW1hdGlvbiB0aW1pbmdzLlxuICBsZXQgaXRlbXMgPSBlbGVtZW50Lml0ZW1zO1xuICBsZXQga2V5ZnJhbWVzID0gZWxlbWVudC5zZWxlY3Rpb25BbmltYXRpb25LZXlmcmFtZXM7XG4gIGVsZW1lbnRbcGxheWluZ0FuaW1hdGlvblN5bWJvbF0gPSB0cnVlO1xuICBsZXQgdGltaW5ncyA9IG1peGluLmhlbHBlcnMuZWZmZWN0VGltaW5nc0ZvclNlbGVjdGlvbkFuaW1hdGlvbihlbGVtZW50LCBmcm9tU2VsZWN0aW9uLCB0b1NlbGVjdGlvbik7XG4gIC8vIGxldCBsYXN0QW5pbWF0aW9uRGV0YWlscztcblxuICAvLyBGaWd1cmUgb3V0IHdoaWNoIGl0ZW0gd2lsbCBiZSB0aGUgb25lICphZnRlciogdGhlIG9uZSB3ZSdyZSBzZWxlY3RpbmcuXG4gIGxldCBpdGVtQ291bnQgPSBpdGVtcy5sZW5ndGg7XG4gIGxldCBzZWxlY3Rpb25XcmFwcyA9IGVsZW1lbnQuc2VsZWN0aW9uV3JhcHM7XG4gIGxldCBzZWxlY3Rpb25JbmRleCA9IEZyYWN0aW9uYWxTZWxlY3Rpb24uaGVscGVycy5zZWxlY3Rpb25QYXJ0cyh0b1NlbGVjdGlvbiwgaXRlbUNvdW50LCBzZWxlY3Rpb25XcmFwcykuaW5kZXg7XG4gIGxldCB0b3RhbFN0ZXBzID0gc3RlcHNUb0luZGV4KGl0ZW1Db3VudCwgc2VsZWN0aW9uV3JhcHMsIGZyb21TZWxlY3Rpb24sIHRvU2VsZWN0aW9uKTtcbiAgbGV0IGZvcndhcmQgPSB0b3RhbFN0ZXBzID49IDA7XG4gIGxldCBuZXh0VXBJbmRleCA9IHNlbGVjdGlvbkluZGV4ICsgKGZvcndhcmQgPyAxIDogLSAxKTtcbiAgaWYgKHNlbGVjdGlvbldyYXBzKSB7XG4gICAgbmV4dFVwSW5kZXggPSBGcmFjdGlvbmFsU2VsZWN0aW9uLmhlbHBlcnMud3JhcHBlZFNlbGVjdGlvbihuZXh0VXBJbmRleCwgaXRlbUNvdW50KTtcbiAgfSBlbHNlIGlmICghaXNJdGVtSW5kZXhJbkJvdW5kcyhlbGVtZW50LCBuZXh0VXBJbmRleCkpIHtcbiAgICBuZXh0VXBJbmRleCA9IG51bGw7IC8vIEF0IHN0YXJ0L2VuZCBvZiBsaXN0OyBkb24ndCBoYXZlIGEgbmV4dCBpdGVtIHRvIHNob3cuXG4gIH1cblxuICAvLyBQbGF5IHRoZSBhbmltYXRpb25zIHVzaW5nIHRob3NlIHRpbWluZ3MuXG4gIGxldCBsYXN0QW5pbWF0aW9uRGV0YWlscztcbiAgdGltaW5ncy5mb3JFYWNoKCh0aW1pbmcsIGluZGV4KSA9PiB7XG4gICAgbGV0IGl0ZW0gPSBpdGVtc1tpbmRleF07XG4gICAgaWYgKHRpbWluZykge1xuICAgICAgc2hvd0l0ZW0oaXRlbSwgdHJ1ZSk7XG4gICAgICBsZXQgYW5pbWF0aW9uID0gaXRlbS5hbmltYXRlKGtleWZyYW1lcywgdGltaW5nKTtcbiAgICAgIGlmIChpbmRleCA9PT0gbmV4dFVwSW5kZXgpIHtcbiAgICAgICAgLy8gVGhpcyBpdGVtIHdpbGwgYmUgYW5pbWF0ZWQsIHNvIHdpbGwgYWxyZWFkeSBiZSBpbiB0aGUgZGVzaXJlZCBzdGF0ZVxuICAgICAgICAvLyBhZnRlciB0aGUgYW5pbWF0aW9uIGNvbXBsZXRlcy5cbiAgICAgICAgbmV4dFVwSW5kZXggPSBudWxsO1xuICAgICAgfVxuICAgICAgaWYgKHRpbWluZy5lbmREZWxheSAhPT0gMCkge1xuICAgICAgICAvLyBUaGlzIGlzIHRoZSBhbmltYXRpb24gZm9yIHRoZSBpdGVtIHRoYXQgd2lsbCBiZSBsZWZ0IHNlbGVjdGVkLlxuICAgICAgICAvLyBXZSB3YW50IHRvIGNsZWFuIHVwIHdoZW4gdGhpcyBhbmltYXRpb24gY29tcGxldGVzLlxuICAgICAgICBsYXN0QW5pbWF0aW9uRGV0YWlscyA9IHsgYW5pbWF0aW9uLCBpbmRleCwgdGltaW5nLCBmb3J3YXJkIH07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRoaXMgaXRlbSBkb2Vzbid0IHBhcnRpY2lwYXRlIGluIHRoZSBhbmltYXRpb24uXG4gICAgICBzaG93SXRlbShpdGVtLCBmYWxzZSk7XG4gICAgfVxuICB9KTtcblxuICBpZiAobGFzdEFuaW1hdGlvbkRldGFpbHMgIT0gbnVsbCkge1xuICAgIC8vIEFycmFuZ2UgZm9yIGNsZWFuLXVwIHdvcmsgdG8gYmUgcGVyZm9ybWVkLlxuICAgIGxhc3RBbmltYXRpb25EZXRhaWxzLm5leHRVcEluZGV4ID0gbmV4dFVwSW5kZXg7XG4gICAgbGFzdEFuaW1hdGlvbkRldGFpbHMuYW5pbWF0aW9uLm9uZmluaXNoID0gZXZlbnQgPT4gc2VsZWN0aW9uQW5pbWF0aW9uRmluaXNoZWQoZWxlbWVudCwgbGFzdEFuaW1hdGlvbkRldGFpbHMpO1xuICAgIGVsZW1lbnRbbGFzdEFuaW1hdGlvblN5bWJvbF0gPSBsYXN0QW5pbWF0aW9uRGV0YWlscy5hbmltYXRpb247XG4gIH0gZWxzZSB7XG4gICAgLy8gU2hvdWxkbid0IGhhcHBlbiAtLSB3ZSBzaG91bGQgYWx3YXlzIGhhdmUgYXQgbGVhc3Qgb25lIGFuaW1hdGlvbi5cbiAgICBlbGVtZW50W3BsYXlpbmdBbmltYXRpb25TeW1ib2xdID0gZmFsc2U7XG4gIH1cbn1cblxuXG5mdW5jdGlvbiBnZXRBbmltYXRpb25Gb3JJdGVtSW5kZXgoZWxlbWVudCwgaW5kZXgpIHtcbiAgaWYgKGVsZW1lbnRbYW5pbWF0aW9uU3ltYm9sXSA9PSBudWxsKSB7XG4gICAgLy8gTm90IHJlYWR5IHlldDtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBsZXQgYW5pbWF0aW9uID0gZWxlbWVudFthbmltYXRpb25TeW1ib2xdW2luZGV4XTtcbiAgaWYgKCFhbmltYXRpb24pIHtcbiAgICBsZXQgaXRlbSA9IGVsZW1lbnQuaXRlbXNbaW5kZXhdO1xuICAgIGFuaW1hdGlvbiA9IGl0ZW0uYW5pbWF0ZShlbGVtZW50LnNlbGVjdGlvbkFuaW1hdGlvbktleWZyYW1lcywge1xuICAgICAgZHVyYXRpb246IGVsZW1lbnQuc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb24sXG4gICAgICBmaWxsOiAnYm90aCdcbiAgICB9KTtcbiAgICBhbmltYXRpb24ucGF1c2UoKTtcbiAgICBlbGVtZW50W2FuaW1hdGlvblN5bWJvbF1baW5kZXhdID0gYW5pbWF0aW9uO1xuICB9XG4gIHJldHVybiBhbmltYXRpb247XG59XG5cbmZ1bmN0aW9uIGlzSXRlbUluZGV4SW5Cb3VuZHMoZWxlbWVudCwgaW5kZXgpIHtcbiAgcmV0dXJuIGluZGV4ID49IDAgJiYgZWxlbWVudC5pdGVtcyAmJiBpbmRleCA8IGVsZW1lbnQuaXRlbXMubGVuZ3RoO1xufVxuXG4vKlxuICogUmVuZGVyIHRoZSBzZWxlY3Rpb24gc3RhdGUgb2YgdGhlIGVsZW1lbnQuXG4gKlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byByZS1yZW5kZXIgYSBwcmV2aW91cyBzZWxlY3Rpb24gc3RhdGUgKGlmIHRoZVxuICogc2VsZWN0ZWRJbmRleCBwYXJhbSBpcyBvbWl0dGVkKSwgcmVuZGVyIHRoZSBzZWxlY3Rpb24gaW5zdGFudGx5IGF0IGEgZ2l2ZW5cbiAqIHdob2xlIG9yIGZyYWN0aW9uYWwgc2VsZWN0aW9uIGluZGV4LCBvciBhbmltYXRlIHRvIGEgZ2l2ZW4gc2VsZWN0aW9uIGluZGV4LlxuICpcbiAqIFRoZXJlIGFyZSBzZXZlcmFsIGRpc3RpbmN0IHNjZW5hcmlvcyB3ZSBuZWVkIHRvIGNvdmVyOlxuICpcbiAqIDEuIEluaXRpYWwgcG9zaXRpb25pbmcsIG9yIHJlcG9zaXRpb25pbmcgYWZ0ZXIgY2hhbmdpbmcgYSBwcm9wZXJ0eSBsaWtlXG4gKiAgICBzZWxlY3Rpb25BbmltYXRpb25LZXlmcmFtZXMgdGhhdCBhZmZlY3RzIHJlbmRlcmluZy5cbiAqIDIuIEFuaW1hdGUgb24gc2VsZWN0ZWRJbmRleCBjaGFuZ2UuIFRoaXMgc2hvdWxkIG92ZXJyaWRlIGFueSBhbmltYXRpb24vc3dpcGVcbiAqICAgIGFscmVhZHkgaW4gcHJvZ3Jlc3MuXG4gKiAzLiBJbnN0YW50bHkgcmVuZGVyIHRoZSBjdXJyZW50IHBvc2l0aW9uIG9mIGEgZHJhZyBvcGVyYXRpb24gaW4gcHJvZ3Jlc3MuXG4gKiA0LiBDb21wbGV0ZSBhIGRyYWcgb3BlcmF0aW9uLiBJZiB0aGUgZHJhZyB3YXNuJ3QgZmFyIGVub3VnaCB0byBhZmZlY3RcbiAqICAgIHNlbGVjdGlvbiwgd2UnbGwganVzdCBiZSByZXN0b3JpbmcgdGhlIHNlbGVjdGVkRnJhY3Rpb24gdG8gMC5cbiAqXG4gKiBJZiB0aGUgbGlzdCBkb2VzIG5vdCB3cmFwLCBhbnkgc2VsZWN0aW9uIHBvc2l0aW9uIG91dHNpZGUgdGhlIGxpc3QncyBib3VuZHNcbiAqIHdpbGwgYmUgZGFtcGVkIHRvIHByb2R1Y2UgYSB2aXN1YWwgZWZmZWN0IG9mIHRlbnNpb24uXG4gKi9cbmZ1bmN0aW9uIHJlbmRlclNlbGVjdGlvbihlbGVtZW50LCBzZWxlY3RlZEluZGV4PWVsZW1lbnQuc2VsZWN0ZWRJbmRleCwgc2VsZWN0ZWRGcmFjdGlvbj1lbGVtZW50LnNlbGVjdGVkRnJhY3Rpb24pIHtcbiAgbGV0IGl0ZW1Db3VudCA9IGVsZW1lbnQuaXRlbXMgPyBlbGVtZW50Lml0ZW1zLmxlbmd0aCA6IDA7XG4gIGlmIChpdGVtQ291bnQgPT09IDApIHtcbiAgICAvLyBOb3RoaW5nIHRvIHJlbmRlci5cbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHNlbGVjdGVkSW5kZXggPCAwKSB7XG4gICAgLy8gVE9ETzogSGFuZGxlIG5vIHNlbGVjdGlvbi5cbiAgICByZXR1cm47XG4gIH1cbiAgbGV0IHNlbGVjdGlvbiA9IHNlbGVjdGVkSW5kZXggKyBzZWxlY3RlZEZyYWN0aW9uO1xuICBpZiAoZWxlbWVudC5zZWxlY3Rpb25XcmFwcykge1xuICAgIC8vIEFwcGx5IHdyYXBwaW5nIHRvIGVuc3VyZSBjb25zaXN0ZW50IHJlcHJlc2VudGF0aW9uIG9mIHNlbGVjdGlvbi5cbiAgICBzZWxlY3Rpb24gPSBGcmFjdGlvbmFsU2VsZWN0aW9uLmhlbHBlcnMud3JhcHBlZFNlbGVjdGlvbihzZWxlY3Rpb24sIGl0ZW1Db3VudCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gQXBwbHkgZGFtcGluZyBpZiBuZWNlc3NhcnkuXG4gICAgc2VsZWN0aW9uID0gRnJhY3Rpb25hbFNlbGVjdGlvbi5oZWxwZXJzLmRhbXBlZFNlbGVjdGlvbihzZWxlY3Rpb24sIGl0ZW1Db3VudCk7XG4gIH1cbiAgbGV0IHByZXZpb3VzU2VsZWN0aW9uID0gZWxlbWVudFtwcmV2aW91c1NlbGVjdGlvblN5bWJvbF07XG4gIGlmIChlbGVtZW50W3Nob3dUcmFuc2l0aW9uU3ltYm9sXSAmJiBwcmV2aW91c1NlbGVjdGlvbiAhPSBudWxsICYmXG4gICAgICBwcmV2aW91c1NlbGVjdGlvbiAhPT0gc2VsZWN0aW9uKSB7XG4gICAgLy8gQW5pbWF0ZSBzZWxlY3Rpb24gZnJvbSBwcmV2aW91cyBzdGF0ZSB0byBuZXcgc3RhdGUuXG4gICAgYW5pbWF0ZVNlbGVjdGlvbihlbGVtZW50LCBwcmV2aW91c1NlbGVjdGlvbiwgc2VsZWN0aW9uKTtcbiAgfSBlbHNlIGlmIChzZWxlY3RlZEZyYWN0aW9uID09PSAwICYmIGVsZW1lbnRbcGxheWluZ0FuaW1hdGlvblN5bWJvbF0pIHtcbiAgICAvLyBBbHJlYWR5IGluIHByb2Nlc3Mgb2YgYW5pbWF0aW5nIHRvIGZyYWN0aW9uIDAuIER1cmluZyB0aGF0IHByb2Nlc3MsXG4gICAgLy8gaWdub3JlIHN1YnNlcXVlbnQgYXR0ZW1wdHMgdG8gcmVuZGVyU2VsZWN0aW9uIHRvIGZyYWN0aW9uIDAuXG4gICAgcmV0dXJuO1xuICB9IGVsc2Uge1xuICAgIC8vIFJlbmRlciBjdXJyZW50IHNlbGVjdGlvbiBzdGF0ZSBpbnN0YW50bHkuXG4gICAgcmVuZGVyU2VsZWN0aW9uSW5zdGFudGx5KGVsZW1lbnQsIHNlbGVjdGlvbik7XG4gIH1cbiAgZWxlbWVudFtwcmV2aW91c1NlbGVjdGlvblN5bWJvbF0gPSBzZWxlY3Rpb247XG59XG5cbi8qXG4gKiBJbnN0YW50bHkgcmVuZGVyIChkb24ndCBhbmltYXRlKSB0aGUgZWxlbWVudCdzIGl0ZW1zIGF0IHRoZSBnaXZlbiB3aG9sZSBvclxuICogZnJhY3Rpb25hbCBzZWxlY3Rpb24gaW5kZXguXG4gKi9cbmZ1bmN0aW9uIHJlbmRlclNlbGVjdGlvbkluc3RhbnRseShlbGVtZW50LCB0b1NlbGVjdGlvbikge1xuICBsZXQgYW5pbWF0aW9uRnJhY3Rpb25zID0gbWl4aW4uaGVscGVycy5hbmltYXRpb25GcmFjdGlvbnNGb3JTZWxlY3Rpb24oZWxlbWVudCwgdG9TZWxlY3Rpb24pO1xuICBhbmltYXRpb25GcmFjdGlvbnMubWFwKChhbmltYXRpb25GcmFjdGlvbiwgaW5kZXgpID0+IHtcbiAgICBsZXQgaXRlbSA9IGVsZW1lbnQuaXRlbXNbaW5kZXhdO1xuICAgIGlmIChhbmltYXRpb25GcmFjdGlvbiAhPSBudWxsKSB7XG4gICAgICBzaG93SXRlbShpdGVtLCB0cnVlKTtcbiAgICAgIHNldEFuaW1hdGlvbkZyYWN0aW9uKGVsZW1lbnQsIGluZGV4LCBhbmltYXRpb25GcmFjdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNob3dJdGVtKGl0ZW0sIGZhbHNlKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXNldEFuaW1hdGlvbnMoZWxlbWVudCkge1xuICBsZXQgaXRlbUNvdW50ID0gZWxlbWVudC5pdGVtcyA/IGVsZW1lbnQuaXRlbXMubGVuZ3RoIDogMDtcbiAgZWxlbWVudFthbmltYXRpb25TeW1ib2xdID0gbmV3IEFycmF5KGl0ZW1Db3VudCk7XG59XG5cbi8qXG4gKiBUaGUgbGFzdCBhbmltYXRpb24gaW4gb3VyIHNlbGVjdGlvbiBhbmltYXRpb24gaGFzIGNvbXBsZXRlZC4gQ2xlYW4gdXAuXG4gKi9cbmZ1bmN0aW9uIHNlbGVjdGlvbkFuaW1hdGlvbkZpbmlzaGVkKGVsZW1lbnQsIGRldGFpbHMpIHtcblxuICAvLyBGb3JjZSB0aGUgYW5pbWF0aW9uIHRvIHRoZSBtaWRwb2ludC4gV2UgdXNlZCB0byBqdXN0IGRlcGVuZCBvbiBzZXR0aW5nXG4gIC8vIGEgbmVnYXRpdmUgZW5kRGVsYXkgYW5kIGZpbGw6ICdib3RoJywgYnV0IGEgY2hhbmdlIGluIENocm9tZVxuICAvLyAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NjAwMjQ4KSBjYXVzZXNcbiAgLy8gYW4gYW5pbWF0aW9uIHRvIGp1bXAgdG8gaXRzIGZpbmFsIHZhbHVlIGFmdGVyIHRoZSBlbmREZWxheSBpcyBoaXQuIFNpbmNlIHdlXG4gIC8vIHdhbnQgdG8gbGVhdmUgdGhlIGFuaW1hdGlvbiBwYXVzZWQgaGFsZndheSB0aHJvdWdoLCB3ZSBmb3JjZSB0aGF0LlxuICBkZXRhaWxzLmFuaW1hdGlvbi5wYXVzZSgpO1xuICBzZXRBbmltYXRpb25GcmFjdGlvbihlbGVtZW50LCBkZXRhaWxzLmluZGV4LCAwLjUpO1xuXG4gIC8vIFdoZW4gdGhlIGxhc3QgYW5pbWF0aW9uIGNvbXBsZXRlcywgc2hvdyB0aGUgbmV4dCBpdGVtIGluIHRoZSBkaXJlY3Rpb25cbiAgLy8gd2UncmUgZ29pbmcuIFRoaXMgd2FpdGluZyBpcyBhIGhhY2sgdG8gYXZvaWQgaGF2aW5nIHN0YXRpYyBpdGVtcyBoaWdoZXIgaW5cbiAgLy8gdGhlIG5hdHVyYWwgei1vcmRlciBvYnNjdXJlIGl0ZW1zIGR1cmluZyBhbmltYXRpb24uXG4gIGlmIChkZXRhaWxzLm5leHRVcEluZGV4ICE9IG51bGwpIHtcbiAgICBsZXQgbmV4dFVwSXRlbSA9IGVsZW1lbnQuaXRlbXNbZGV0YWlscy5uZXh0VXBJbmRleF07XG4gICAgbGV0IGFuaW1hdGlvbkZyYWN0aW9uID0gZGV0YWlscy5mb3J3YXJkID8gMCA6IDE7XG4gICAgc2V0QW5pbWF0aW9uRnJhY3Rpb24oZWxlbWVudCwgZGV0YWlscy5uZXh0VXBJbmRleCwgYW5pbWF0aW9uRnJhY3Rpb24pO1xuICAgIHNob3dJdGVtKG5leHRVcEl0ZW0sIHRydWUpO1xuICB9XG5cbiAgZWxlbWVudFtwbGF5aW5nQW5pbWF0aW9uU3ltYm9sXSA9IGZhbHNlO1xuICBlbGVtZW50W2xhc3RBbmltYXRpb25TeW1ib2xdID0gbnVsbDtcbn1cblxuLypcbiAqIFBhdXNlIHRoZSBpbmRpY2F0ZWQgYW5pbWF0aW9uIGFuZCBoYXZlIGl0IHNob3cgdGhlIGFuaW1hdGlvbiBhdCB0aGUgZ2l2ZW5cbiAqIGZyYWN0aW9uIChiZXR3ZWVuIDAgYW5kIDEpIG9mIHRoZSB3YXkgdGhyb3VnaCB0aGUgYW5pbWF0aW9uLlxuICovXG5mdW5jdGlvbiBzZXRBbmltYXRpb25GcmFjdGlvbihlbGVtZW50LCBpdGVtSW5kZXgsIGZyYWN0aW9uKSB7XG4gIGxldCBhbmltYXRpb24gPSBnZXRBbmltYXRpb25Gb3JJdGVtSW5kZXgoZWxlbWVudCwgaXRlbUluZGV4KTtcbiAgaWYgKGFuaW1hdGlvbikge1xuICAgIGxldCBkdXJhdGlvbiA9IGVsZW1lbnQuc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb247XG4gICAgaWYgKGR1cmF0aW9uKSB7XG4gICAgICBhbmltYXRpb24uY3VycmVudFRpbWUgPSBmcmFjdGlvbiAqIGR1cmF0aW9uO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzaG93SXRlbShpdGVtLCBmbGFnKSB7XG4gIGl0ZW0uc3R5bGUudmlzaWJpbGl0eSA9IGZsYWcgPyAndmlzaWJsZScgOiAnaGlkZGVuJztcbn1cblxuLypcbiAqIEZpZ3VyZSBvdXQgaG93IG1hbnkgc3RlcHMgaXQgd2lsbCB0YWtlIHRvIGdvIGZyb20gZnJvbVNlbGVjdGlvbiB0b1xuICogdG9TZWxlY3Rpb24uIFRvIGdvIGZyb20gaXRlbSAzIHRvIGl0ZW0gNCBpcyBvbmUgc3RlcC5cbiAqXG4gKiBJZiB3cmFwcGluZyBpcyBhbGxvd2VkLCB0aGVuIGdvaW5nIGZyb20gdGhlIGxhc3QgaXRlbSB0byB0aGUgZmlyc3Qgd2lsbCB0YWtlXG4gKiBvbmUgc3RlcCAoZm9yd2FyZCksIGFuZCBnb2luZyBmcm9tIHRoZSBmaXJzdCBpdGVtIHRvIHRoZSBsYXN0IHdpbGwgdGFrZSBvbmVcbiAqIHN0ZXAgKGJhY2t3YXJkKS5cbiAqL1xuZnVuY3Rpb24gc3RlcHNUb0luZGV4KGxlbmd0aCwgYWxsb3dXcmFwLCBmcm9tU2VsZWN0aW9uLCB0b1NlbGVjdGlvbikge1xuICBsZXQgc3RlcHMgPSB0b1NlbGVjdGlvbiAtIGZyb21TZWxlY3Rpb247XG4gIC8vIFdyYXBwaW5nIG9ubHkga2lja3MgaW4gd2hlbiBsaXN0IGhhcyBtb3JlIHRoYW4gMSBpdGVtLlxuICBpZiAoYWxsb3dXcmFwICYmIGxlbmd0aCA+IDEpIHtcbiAgICBsZXQgd3JhcFN0ZXBzID0gbGVuZ3RoIC0gTWF0aC5hYnMoc3RlcHMpO1xuICAgIGlmICh3cmFwU3RlcHMgPD0gMSkge1xuICAgICAgLy8gU3BlY2lhbCBjYXNlXG4gICAgICBzdGVwcyA9IHN0ZXBzIDwgMCA/XG4gICAgICAgIHdyYXBTdGVwcyA6ICAgLy8gV3JhcCBmb3J3YXJkIGZyb20gbGFzdCBpdGVtIHRvIGZpcnN0LlxuICAgICAgICAtd3JhcFN0ZXBzOyAgIC8vIFdyYXAgYmFja3dhcmQgZnJvbSBmaXJzdCBpdGVtIHRvIGxhc3QuXG4gICAgfVxuICB9XG4gIHJldHVybiBzdGVwcztcbn1cbiIsIi8vIFVzZWQgdG8gYXNzaWduIHVuaXF1ZSBJRHMgdG8gaXRlbSBlbGVtZW50cyB3aXRob3V0IElEcy5cbmxldCBpZENvdW50ID0gMDtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFNlbGVjdGlvbkFyaWFBY3RpdmUuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCB0cmVhdHMgdGhlIHNlbGVjdGVkIGl0ZW0gaW4gYSBsaXN0IGFzIHRoZSBhY3RpdmUgaXRlbSBpbiBBUklBXG4gICAqIGFjY2Vzc2liaWxpdHkgdGVybXMuXG4gICAqXG4gICAqIEhhbmRsaW5nIEFSSUEgc2VsZWN0aW9uIHN0YXRlIHByb3Blcmx5IGlzIGFjdHVhbGx5IHF1aXRlIGNvbXBsZXg6XG4gICAqXG4gICAqICogVGhlIGl0ZW1zIGluIHRoZSBsaXN0IG5lZWQgdG8gYmUgaW5kaWNhdGVkIGFzIHBvc3NpYmxlIGl0ZW1zIHZpYSBhbiBBUklBXG4gICAqICAgYHJvbGVgIGF0dHJpYnV0ZSB2YWx1ZSBzdWNoIGFzIFwib3B0aW9uXCIuXG4gICAqICogVGhlIHNlbGVjdGVkIGl0ZW0gbmVlZCB0byBiZSBtYXJrZWQgYXMgc2VsZWN0ZWQgYnkgc2V0dGluZyB0aGUgaXRlbSdzXG4gICAqICAgYGFyaWEtc2VsZWN0ZWRgIGF0dHJpYnV0ZSB0byB0cnVlICphbmQqIHRoZSBvdGhlciBpdGVtcyBuZWVkIGJlIG1hcmtlZCBhc1xuICAgKiAgICpub3QqIHNlbGVjdGVkIGJ5IHNldHRpbmcgYGFyaWEtc2VsZWN0ZWRgIHRvIGZhbHNlLlxuICAgKiAqIFRoZSBvdXRlcm1vc3QgZWxlbWVudCB3aXRoIHRoZSBrZXlib2FyZCBmb2N1cyBuZWVkcyB0byBoYXZlIGF0dHJpYnV0ZXNcbiAgICogICBzZXQgb24gaXQgc28gdGhhdCB0aGUgc2VsZWN0aW9uIGlzIGtub3dhYmxlIGF0IHRoZSBsaXN0IGxldmVsIHZpYSB0aGVcbiAgICogICBgYXJpYS1hY3RpdmVkZXNjZW5kYW50YCBhdHRyaWJ1dGUuXG4gICAqICogVXNlIG9mIGBhcmlhLWFjdGl2ZWRlc2NlbmRhbnRgIGluIHR1cm4gcmVxdWlyZXMgdGhhdCBhbGwgaXRlbXMgaW4gdGhlXG4gICAqICAgbGlzdCBoYXZlIElEIGF0dHJpYnV0ZXMgYXNzaWduZWQgdG8gdGhlbS5cbiAgICpcbiAgICogVGhpcyBtaXhpbiB0cmllcyB0byBhZGRyZXNzIGFsbCBvZiB0aGUgYWJvdmUgcmVxdWlyZW1lbnRzLiBUbyB0aGF0IGVuZCxcbiAgICogdGhpcyBtaXhpbiB3aWxsIGFzc2lnbiBnZW5lcmF0ZWQgSURzIHRvIGFueSBpdGVtIHRoYXQgZG9lc24ndCBhbHJlYWR5IGhhdmVcbiAgICogYW4gSUQuXG4gICAqXG4gICAqIEFSSUEgcmVsaWVzIG9uIGVsZW1lbnRzIHRvIHByb3ZpZGUgYHJvbGVgIGF0dHJpYnV0ZXMuIFRoaXMgbWl4aW4gd2lsbCBhcHBseVxuICAgKiBhIGRlZmF1bHQgcm9sZSBvZiBcImxpc3Rib3hcIiBvbiB0aGUgb3V0ZXIgbGlzdCBpZiBpdCBkb2Vzbid0IGFscmVhZHkgaGF2ZSBhblxuICAgKiBleHBsaWNpdCByb2xlLiBTaW1pbGFybHksIHRoaXMgbWl4aW4gd2lsbCBhcHBseSBhIGRlZmF1bHQgcm9sZSBvZiBcIm9wdGlvblwiXG4gICAqIHRvIGFueSBsaXN0IGl0ZW0gdGhhdCBkb2VzIG5vdCBhbHJlYWR5IGhhdmUgYSByb2xlIHNwZWNpZmllZC5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIGEgc2V0IG9mIG1lbWJlcnMgdGhhdCBtYW5hZ2UgdGhlIHN0YXRlIG9mIHRoZSBzZWxlY3Rpb246XG4gICAqIGBhcHBseVNlbGVjdGlvbmAsIGBpdGVtQWRkZWRgLCBhbmQgYHNlbGVjdGVkSW5kZXhgLiBZb3UgY2FuIHN1cHBseSB0aGVzZVxuICAgKiB5b3Vyc2VsZiwgb3IgZG8gc28gdmlhIHRoZSBbSXRlbXNTZWxlY3Rpb25dKEl0ZW1zU2VsZWN0aW9uLm1kKSBtaXhpbi5cbiAgICovXG4gIGNsYXNzIFNlbGVjdGlvbkFyaWFBY3RpdmUgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGFwcGx5U2VsZWN0aW9uKGl0ZW0sIHNlbGVjdGVkKSB7XG4gICAgICBpZiAoc3VwZXIuYXBwbHlTZWxlY3Rpb24pIHsgc3VwZXIuYXBwbHlTZWxlY3Rpb24oaXRlbSwgc2VsZWN0ZWQpOyB9XG4gICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsIHNlbGVjdGVkKTtcbiAgICAgIGxldCBpdGVtSWQgPSBpdGVtLmlkO1xuICAgICAgaWYgKGl0ZW1JZCkge1xuICAgICAgICBsZXQgb3V0ZXJtb3N0ID0gdGhpcy5jb2xsZWN0aXZlID9cbiAgICAgICAgICB0aGlzLmNvbGxlY3RpdmUub3V0ZXJtb3N0RWxlbWVudCA6XG4gICAgICAgICAgdGhpcztcbiAgICAgICAgb3V0ZXJtb3N0LnNldEF0dHJpYnV0ZSgnYXJpYS1hY3RpdmVkZXNjZW5kYW50JywgaXRlbUlkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb2xsZWN0aXZlQ2hhbmdlZCgpIHtcbiAgICAgIGlmIChzdXBlci5jb2xsZWN0aXZlQ2hhbmdlZCkgeyBzdXBlci5jb2xsZWN0aXZlQ2hhbmdlZCgpOyB9XG5cbiAgICAgIC8vIEVuc3VyZSB0aGUgb3V0ZXJtb3N0IGFzcGVjdCBoYXMgYW4gQVJJQSByb2xlLlxuICAgICAgbGV0IG91dGVybW9zdEVsZW1lbnQgPSB0aGlzLmNvbGxlY3RpdmUub3V0ZXJtb3N0RWxlbWVudDtcbiAgICAgIGlmICghb3V0ZXJtb3N0RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSkge1xuICAgICAgICAvLyBUcnkgdG8gcHJvbW90ZSBhbiBBUklBIHJvbGUgZnJvbSBhbiBpbm5lciBlbGVtZW50LiBJZiBub25lIGlzIGZvdW5kLFxuICAgICAgICAvLyB1c2UgYSBkZWZhdWx0IHJvbGUuXG4gICAgICAgIGxldCByb2xlID0gZ2V0Q29sbGVjdGl2ZUFyaWFSb2xlKHRoaXMuY29sbGVjdGl2ZSkgfHwgJ2xpc3Rib3gnO1xuICAgICAgICBvdXRlcm1vc3RFbGVtZW50LnNldEF0dHJpYnV0ZSgncm9sZScsIHJvbGUpO1xuICAgICAgfVxuICAgICAgaWYgKCFvdXRlcm1vc3RFbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1hY3RpdmVkZXNjZW5kYW50JykpIHtcbiAgICAgICAgLy8gVHJ5IHRvIHByb21vdGUgYW4gQVJJQSBhY3RpdmVkZXNjZW5kYW50IHZhbHVlIGZyb20gYW4gaW5uZXIgZWxlbWVudC5cbiAgICAgICAgbGV0IGRlc2NlbmRhbnQgPSBnZXRDb2xsZWN0aXZlQXJpYUFjdGl2ZURlc2NlbmRhbnQodGhpcy5jb2xsZWN0aXZlKTtcbiAgICAgICAgaWYgKGRlc2NlbmRhbnQpIHtcbiAgICAgICAgICBvdXRlcm1vc3RFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1hY3RpdmVkZXNjZW5kYW50JywgZGVzY2VuZGFudCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gUmVtb3ZlIHRoZSBBUklBIHJvbGUgYW5kIGFjdGl2ZWRlc2NlbmRhbnQgdmFsdWVzIGZyb20gdGhlIGNvbGxlY3RpdmUnc1xuICAgICAgLy8gaW5uZXIgZWxlbWVudHMuXG4gICAgICB0aGlzLmNvbGxlY3RpdmUuZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnQgIT09IG91dGVybW9zdEVsZW1lbnQpIHtcbiAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1hY3RpdmVkZXNjZW5kYW50Jyk7XG4gICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnbm9uZScpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG4gICAgICBpZiAoIXRoaXMuZ2V0QXR0cmlidXRlKCdyb2xlJykpIHtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnbGlzdGJveCcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGl0ZW1BZGRlZChpdGVtKSB7XG4gICAgICBpZiAoc3VwZXIuaXRlbUFkZGVkKSB7IHN1cGVyLml0ZW1BZGRlZChpdGVtKTsgfVxuXG4gICAgICBpZiAoIWl0ZW0uZ2V0QXR0cmlidXRlKCdyb2xlJykpIHtcbiAgICAgICAgLy8gQXNzaWduIGEgZGVmYXVsdCBBUklBIHJvbGUuXG4gICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdyb2xlJywgJ29wdGlvbicpO1xuICAgICAgfVxuXG4gICAgICAvLyBFbnN1cmUgZWFjaCBpdGVtIGhhcyBhbiBJRCBzbyB3ZSBjYW4gc2V0IGFyaWEtYWN0aXZlZGVzY2VuZGFudCBvbiB0aGVcbiAgICAgIC8vIG92ZXJhbGwgbGlzdCB3aGVuZXZlciB0aGUgc2VsZWN0aW9uIGNoYW5nZXMuXG4gICAgICAvL1xuICAgICAgLy8gVGhlIElEIHdpbGwgdGFrZSB0aGUgZm9ybSBvZiBhIGJhc2UgSUQgcGx1cyBhIHVuaXF1ZSBpbnRlZ2VyLiBUaGUgYmFzZVxuICAgICAgLy8gSUQgd2lsbCBiZSBpbmNvcnBvcmF0ZSB0aGUgY29tcG9uZW50J3Mgb3duIElELiBFLmcuLCBpZiBhIGNvbXBvbmVudCBoYXNcbiAgICAgIC8vIElEIFwiZm9vXCIsIHRoZW4gaXRzIGl0ZW1zIHdpbGwgaGF2ZSBJRHMgdGhhdCBsb29rIGxpa2UgXCJfZm9vT3B0aW9uMVwiLiBJZlxuICAgICAgLy8gdGhlIGNvbXBuZW50IGhhcyBubyBJRCBpdHNlbGYsIGl0cyBpdGVtcyB3aWxsIGdldCBJRHMgdGhhdCBsb29rIGxpa2VcbiAgICAgIC8vIFwiX29wdGlvbjFcIi4gSXRlbSBJRHMgYXJlIHByZWZpeGVkIHdpdGggYW4gdW5kZXJzY29yZSB0byBkaWZmZXJlbnRpYXRlXG4gICAgICAvLyB0aGVtIGZyb20gbWFudWFsbHktYXNzaWduZWQgSURzLCBhbmQgdG8gbWluaW1pemUgdGhlIHBvdGVudGlhbCBmb3IgSURcbiAgICAgIC8vIGNvbmZsaWN0cy5cbiAgICAgIGlmICghaXRlbS5pZCkge1xuICAgICAgICBsZXQgYmFzZUlkID0gdGhpcy5pZCA/XG4gICAgICAgICAgICBcIl9cIiArIHRoaXMuaWQgKyBcIk9wdGlvblwiIDpcbiAgICAgICAgICAgIFwiX29wdGlvblwiO1xuICAgICAgICBpdGVtLmlkID0gYmFzZUlkICsgaWRDb3VudCsrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGdldCBzZWxlY3RlZEl0ZW0oKSB7XG4gICAgICByZXR1cm4gc3VwZXIuc2VsZWN0ZWRJdGVtO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0ZWRJdGVtKGl0ZW0pIHtcbiAgICAgIGlmICgnc2VsZWN0ZWRJdGVtJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEl0ZW0gPSBpdGVtOyB9XG4gICAgICAvLyBDYXRjaCB0aGUgY2FzZSB3aGVyZSB0aGUgc2VsZWN0aW9uIGlzIHJlbW92ZWQuXG4gICAgICBpZiAoaXRlbSA9PSBudWxsKSB7XG4gICAgICAgIGxldCBvdXRlcm1vc3QgPSB0aGlzLmNvbGxlY3RpdmUgP1xuICAgICAgICAgIHRoaXMuY29sbGVjdGl2ZS5vdXRlcm1vc3RFbGVtZW50IDpcbiAgICAgICAgICB0aGlzO1xuICAgICAgICBvdXRlcm1vc3QucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBTZWxlY3Rpb25BcmlhQWN0aXZlO1xufTtcblxuXG4vLyBSZXR1cm4gdGhlIGZpcnN0IEFSSUEgYWN0aXZlZGVzY2VuZGFudCBkZWZpbmVkIGJ5IHRoZSBjb2xsZWN0aXZlLlxuZnVuY3Rpb24gZ2V0Q29sbGVjdGl2ZUFyaWFBY3RpdmVEZXNjZW5kYW50KGNvbGxlY3RpdmUpIHtcbiAgbGV0IGRlc2NlbmRhbnRzID0gY29sbGVjdGl2ZS5lbGVtZW50cy5tYXAoZWxlbWVudCA9PiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1hY3RpdmVkZXNjZW5kYW50JykpO1xuICBsZXQgbm9uTnVsbERlc2NlbmRhbnRzID0gZGVzY2VuZGFudHMuZmlsdGVyKGRlc2NlbmRhbnQgPT4gZGVzY2VuZGFudCAhPT0gbnVsbCk7XG4gIHJldHVybiBub25OdWxsRGVzY2VuZGFudHNbMF07XG59XG5cblxuLy8gUmV0dXJuIHRoZSBmaXJzdCBBUklBIGxhYmVsIGRlZmluZWQgYnkgdGhlIGNvbGxlY3RpdmUuXG5mdW5jdGlvbiBnZXRDb2xsZWN0aXZlQXJpYVJvbGUoY29sbGVjdGl2ZSkge1xuICBsZXQgcm9sZXMgPSBjb2xsZWN0aXZlLmVsZW1lbnRzLm1hcChlbGVtZW50ID0+IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdyb2xlJykpO1xuICBsZXQgbm9uTnVsbFJvbGVzID0gcm9sZXMuZmlsdGVyKHJvbGUgPT4gcm9sZSAhPT0gbnVsbCk7XG4gIHJldHVybiBub25OdWxsUm9sZXNbMF07XG59XG4iLCIvKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFNoYWRvd0VsZW1lbnRSZWZlcmVuY2VzLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gdG8gY3JlYXRlIHJlZmVyZW5jZXMgdG8gZWxlbWVudHMgaW4gYSBjb21wb25lbnQncyBTaGFkb3cgRE9NIHN1YnRyZWUuXG4gICAqXG4gICAqIFRoaXMgYWRkcyBhIG1lbWJlciBvbiB0aGUgY29tcG9uZW50IGNhbGxlZCBgdGhpcy4kYCB0aGF0IGNhbiBiZSB1c2VkIHRvXG4gICAqIHJlZmVyZW5jZSBzaGFkb3cgZWxlbWVudHMgd2l0aCBJRHMuIEUuZy4sIGlmIGNvbXBvbmVudCdzIHNoYWRvdyBjb250YWlucyBhblxuICAgKiBlbGVtZW50IGA8YnV0dG9uIGlkPVwiZm9vXCI+YCwgdGhlbiB0aGlzIG1peGluIHdpbGwgY3JlYXRlIGEgbWVtYmVyXG4gICAqIGB0aGlzLiQuZm9vYCB0aGF0IHBvaW50cyB0byB0aGF0IGJ1dHRvbi5cbiAgICpcbiAgICogU3VjaCByZWZlcmVuY2VzIHNpbXBsaWZ5IGEgY29tcG9uZW50J3MgYWNjZXNzIHRvIGl0cyBvd24gZWxlbWVudHMuIEluXG4gICAqIGV4Y2hhbmdlLCB0aGlzIG1peGluIHRyYWRlcyBvZmYgYSBvbmUtdGltZSBjb3N0IG9mIHF1ZXJ5aW5nIGFsbCBlbGVtZW50cyBpblxuICAgKiB0aGUgc2hhZG93IHRyZWUgaW5zdGVhZCBvZiBwYXlpbmcgYW4gb25nb2luZyBjb3N0IHRvIHF1ZXJ5IGZvciBhbiBlbGVtZW50XG4gICAqIGVhY2ggdGltZSB0aGUgY29tcG9uZW50IHdhbnRzIHRvIGluc3BlY3Qgb3IgbWFuaXB1bGF0ZSBpdC5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIHRoZSBjb21wb25lbnQgdG8gZGVmaW5lIGEgU2hhZG93IERPTSBzdWJ0cmVlLiBZb3UgY2FuXG4gICAqIGNyZWF0ZSB0aGF0IHRyZWUgeW91cnNlbGYsIG9yIG1ha2UgdXNlIG9mIHRoZVxuICAgKiBbU2hhZG93VGVtcGxhdGVdKFNoYWRvd1RlbXBsYXRlLm1kKSBtaXhpbi5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBpcyBpbnNwaXJlZCBieSBQb2x5bWVyJ3MgW2F1dG9tYXRpY1xuICAgKiBub2RlIGZpbmRpbmddKGh0dHBzOi8vd3d3LnBvbHltZXItcHJvamVjdC5vcmcvMS4wL2RvY3MvZGV2Z3VpZGUvbG9jYWwtZG9tLmh0bWwjbm9kZS1maW5kaW5nKVxuICAgKiBmZWF0dXJlLlxuICAgKi9cbiAgY2xhc3MgU2hhZG93RWxlbWVudFJlZmVyZW5jZXMgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cbiAgICAgIGlmICh0aGlzLnNoYWRvd1Jvb3QpIHtcbiAgICAgICAgLy8gTG9vayBmb3IgZWxlbWVudHMgaW4gdGhlIHNoYWRvdyBzdWJ0cmVlIHRoYXQgaGF2ZSBpZCBhdHRyaWJ1dGVzLlxuICAgICAgICAvLyBBbiBhbHRlcm5hdGl2ZWx5IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWl4aW4gd291bGQgYmUgdG8ganVzdCBkZWZpbmVcbiAgICAgICAgLy8gYSB0aGlzLiQgZ2V0dGVyIHRoYXQgbGF6aWx5IGRvZXMgdGhpcyBzZWFyY2ggdGhlIGZpcnN0IHRpbWUgc29tZW9uZVxuICAgICAgICAvLyB0cmllcyB0byBhY2Nlc3MgdGhpcy4kLiBUaGF0IG1pZ2h0IGludHJvZHVjZSBzb21lIGNvbXBsZXhpdHkg4oCTIGlmIHRoZVxuICAgICAgICAvLyB0aGUgdHJlZSBjaGFuZ2VkIGFmdGVyIGl0IHdhcyBmaXJzdCBwb3B1bGF0ZWQsIHRoZSByZXN1bHQgb2ZcbiAgICAgICAgLy8gc2VhcmNoaW5nIGZvciBhIG5vZGUgbWlnaHQgYmUgc29tZXdoYXQgdW5wcmVkaWN0YWJsZS5cbiAgICAgICAgdGhpcy4kID0ge307XG4gICAgICAgIGxldCBub2Rlc1dpdGhJZHMgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvckFsbCgnW2lkXScpO1xuICAgICAgICBbXS5mb3JFYWNoLmNhbGwobm9kZXNXaXRoSWRzLCBub2RlID0+IHtcbiAgICAgICAgICBsZXQgaWQgPSBub2RlLmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgICB0aGlzLiRbaWRdID0gbm9kZTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbGxlY3Rpb24gb2YgcmVmZXJlbmNlcyB0byB0aGUgZWxlbWVudHMgd2l0aCBJRHMgaW4gYSBjb21wb25lbnQnc1xuICAgICAqIFNoYWRvdyBET00gc3VidHJlZS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICogQG1lbWJlciAkXG4gICAgICovXG4gIH1cblxuICByZXR1cm4gU2hhZG93RWxlbWVudFJlZmVyZW5jZXM7XG59O1xuIiwiLy8gRmVhdHVyZSBkZXRlY3Rpb24gZm9yIG9sZCBTaGFkb3cgRE9NIHYwLlxuY29uc3QgVVNJTkdfU0hBRE9XX0RPTV9WMCA9ICh0eXBlb2YgSFRNTEVsZW1lbnQucHJvdG90eXBlLmNyZWF0ZVNoYWRvd1Jvb3QgIT09ICd1bmRlZmluZWQnKTtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFNoYWRvd1RlbXBsYXRlLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gZm9yIHN0YW1waW5nIGEgdGVtcGxhdGUgaW50byBhIFNoYWRvdyBET00gc3VidHJlZSB1cG9uIGNvbXBvbmVudFxuICAgKiBpbnN0YW50aWF0aW9uLlxuICAgKlxuICAgKiBUbyB1c2UgdGhpcyBtaXhpbiwgZGVmaW5lIGEgYHRlbXBsYXRlYCBwcm9wZXJ0eSBhcyBhIHN0cmluZyBvciBIVE1MXG4gICAqIGA8dGVtcGxhdGU+YCBlbGVtZW50OlxuICAgKlxuICAgKiAgICAgY2xhc3MgTXlFbGVtZW50IGV4dGVuZHMgU2hhZG93VGVtcGxhdGUoSFRNTEVsZW1lbnQpIHtcbiAgICogICAgICAgZ2V0IHRlbXBsYXRlKCkge1xuICAgKiAgICAgICAgIHJldHVybiBgSGVsbG8sIDxlbT53b3JsZDwvZW0+LmA7XG4gICAqICAgICAgIH1cbiAgICogICAgIH1cbiAgICpcbiAgICogV2hlbiB5b3VyIGNvbXBvbmVudCBjbGFzcyBpcyBpbnN0YW50aWF0ZWQsIGEgc2hhZG93IHJvb3Qgd2lsbCBiZSBjcmVhdGVkIG9uXG4gICAqIHRoZSBpbnN0YW5jZSwgYW5kIHRoZSBjb250ZW50cyBvZiB0aGUgdGVtcGxhdGUgd2lsbCBiZSBjbG9uZWQgaW50byB0aGVcbiAgICogc2hhZG93IHJvb3QuIElmIHlvdXIgY29tcG9uZW50IGRvZXMgbm90IGRlZmluZSBhIGB0ZW1wbGF0ZWAgcHJvcGVydHksIHRoaXNcbiAgICogbWl4aW4gaGFzIG5vIGVmZmVjdC5cbiAgICpcbiAgICogRm9yIHRoZSB0aW1lIGJlaW5nLCB0aGlzIGV4dGVuc2lvbiByZXRhaW5zIHN1cHBvcnQgZm9yIFNoYWRvdyBET00gdjAuIFRoYXRcbiAgICogd2lsbCBldmVudHVhbGx5IGJlIGRlcHJlY2F0ZWQgYXMgYnJvd3NlcnMgKGFuZCB0aGUgU2hhZG93IERPTSBwb2x5ZmlsbClcbiAgICogaW1wbGVtZW50IFNoYWRvdyBET00gdjEuXG4gICAqL1xuICBjbGFzcyBTaGFkb3dUZW1wbGF0ZSBleHRlbmRzIGJhc2Uge1xuXG4gICAgLypcbiAgICAgKiBJZiB0aGUgY29tcG9uZW50IGRlZmluZXMgYSB0ZW1wbGF0ZSwgYSBzaGFkb3cgcm9vdCB3aWxsIGJlIGNyZWF0ZWQgb24gdGhlXG4gICAgICogY29tcG9uZW50IGluc3RhbmNlLCBhbmQgdGhlIHRlbXBsYXRlIHN0YW1wZWQgaW50byBpdC5cbiAgICAgKi9cbiAgICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG4gICAgICBsZXQgdGVtcGxhdGUgPSB0aGlzLnRlbXBsYXRlO1xuICAgICAgLy8gVE9ETzogU2F2ZSB0aGUgcHJvY2Vzc2VkIHRlbXBsYXRlIHdpdGggdGhlIGNvbXBvbmVudCdzIGNsYXNzIHByb3RvdHlwZVxuICAgICAgLy8gc28gaXQgZG9lc24ndCBuZWVkIHRvIGJlIHByb2Nlc3NlZCB3aXRoIGV2ZXJ5IGluc3RhbnRpYXRpb24uXG4gICAgICBpZiAodGVtcGxhdGUpIHtcblxuICAgICAgICBpZiAodHlwZW9mIHRlbXBsYXRlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIC8vIFVwZ3JhZGUgcGxhaW4gc3RyaW5nIHRvIHJlYWwgdGVtcGxhdGUuXG4gICAgICAgICAgdGVtcGxhdGUgPSBjcmVhdGVUZW1wbGF0ZVdpdGhJbm5lckhUTUwodGVtcGxhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFVTSU5HX1NIQURPV19ET01fVjApIHtcbiAgICAgICAgICBwb2x5ZmlsbFNsb3RXaXRoQ29udGVudCh0ZW1wbGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAod2luZG93LlNoYWRvd0RPTVBvbHlmaWxsKSB7XG4gICAgICAgICAgc2hpbVRlbXBsYXRlU3R5bGVzKHRlbXBsYXRlLCB0aGlzLmxvY2FsTmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0aGlzLmxvZyhcImNsb25pbmcgdGVtcGxhdGUgaW50byBzaGFkb3cgcm9vdFwiKTtcbiAgICAgICAgbGV0IHJvb3QgPSBVU0lOR19TSEFET1dfRE9NX1YwID9cbiAgICAgICAgICB0aGlzLmNyZWF0ZVNoYWRvd1Jvb3QoKSA6ICAgICAgICAgICAgIC8vIFNoYWRvdyBET00gdjBcbiAgICAgICAgICB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTsgIC8vIFNoYWRvdyBET00gdjFcbiAgICAgICAgbGV0IGNsb25lID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0ZW1wbGF0ZS5jb250ZW50LCB0cnVlKTtcbiAgICAgICAgcm9vdC5hcHBlbmRDaGlsZChjbG9uZSk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gU2hhZG93VGVtcGxhdGU7XG59O1xuXG5cbi8vIENvbnZlcnQgYSBwbGFpbiBzdHJpbmcgb2YgSFRNTCBpbnRvIGEgcmVhbCB0ZW1wbGF0ZSBlbGVtZW50LlxuZnVuY3Rpb24gY3JlYXRlVGVtcGxhdGVXaXRoSW5uZXJIVE1MKGlubmVySFRNTCkge1xuICBsZXQgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAvLyBSRVZJRVc6IElzIHRoZXJlIGFuIGVhc2llciB3YXkgdG8gZG8gdGhpcz9cbiAgLy8gV2UnZCBsaWtlIHRvIGp1c3Qgc2V0IGlubmVySFRNTCBvbiB0aGUgdGVtcGxhdGUgY29udGVudCwgYnV0IHNpbmNlIGl0J3NcbiAgLy8gYSBEb2N1bWVudEZyYWdtZW50LCB0aGF0IGRvZXNuJ3Qgd29yay5cbiAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuaW5uZXJIVE1MID0gaW5uZXJIVE1MO1xuICB3aGlsZSAoZGl2LmNoaWxkTm9kZXMubGVuZ3RoID4gMCkge1xuICAgIHRlbXBsYXRlLmNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2LmNoaWxkTm9kZXNbMF0pO1xuICB9XG4gIHJldHVybiB0ZW1wbGF0ZTtcbn1cblxuLy8gUmVwbGFjZSBvY2N1cmVuY2VzIG9mIHYxIHNsb3QgZWxlbWVudHMgd2l0aCB2MCBjb250ZW50IGVsZW1lbnRzLlxuLy8gVGhpcyBkb2VzIG5vdCB5ZXQgbWFwIG5hbWVkIHNsb3RzIHRvIGNvbnRlbnQgc2VsZWN0IGNsYXVzZXMuXG5mdW5jdGlvbiBwb2x5ZmlsbFNsb3RXaXRoQ29udGVudCh0ZW1wbGF0ZSkge1xuICBbXS5mb3JFYWNoLmNhbGwodGVtcGxhdGUuY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCdzbG90JyksIHNsb3RFbGVtZW50ID0+IHtcbiAgICBsZXQgY29udGVudEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjb250ZW50Jyk7XG4gICAgc2xvdEVsZW1lbnQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoY29udGVudEVsZW1lbnQsIHNsb3RFbGVtZW50KTtcbiAgfSk7XG59XG5cbi8vIEludm9rZSBiYXNpYyBzdHlsZSBzaGltbWluZyB3aXRoIFNoYWRvd0NTUy5cbmZ1bmN0aW9uIHNoaW1UZW1wbGF0ZVN0eWxlcyh0ZW1wbGF0ZSwgdGFnKSB7XG4gIHdpbmRvdy5XZWJDb21wb25lbnRzLlNoYWRvd0NTUy5zaGltU3R5bGluZyh0ZW1wbGF0ZS5jb250ZW50LCB0YWcpO1xufVxuIiwiLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gY3JlYXRlIGEgc3ltYm9sIHRoYXQgY2FuIGJlIHVzZWQgZm9yIGFzc29jaWF0aW5nIHByaXZhdGVcbiAqIGRhdGEgd2l0aCBhbiBlbGVtZW50LlxuICpcbiAqIE1peGlucyBhbmQgY29tcG9uZW50IGNsYXNzZXMgb2Z0ZW4gd2FudCB0byBhc3NvY2lhdGUgcHJpdmF0ZSBkYXRhIHdpdGggYW5cbiAqIGVsZW1lbnQgaW5zdGFuY2UsIGJ1dCBKYXZhU2NyaXB0IGRvZXMgbm90IGhhdmUgZGlyZWN0IHN1cHBvcnQgZm9yIHRydWVcbiAqIHByaXZhdGUgcHJvcGVydGllcy4gT25lIGFwcHJvYWNoIGlzIHRvIHVzZSB0aGVcbiAqIFtTeW1ib2xdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL1N5bWJvbClcbiAqIGRhdGEgdHlwZSB0byBzZXQgYW5kIHJldHJpZXZlIGRhdGEgb24gYW4gZWxlbWVudC5cbiAqXG4gKiBVbmZvcnR1bmF0ZWx5LCB0aGUgU3ltYm9sIHR5cGUgaXMgbm90IGF2YWlsYWJsZSBpbiBJbnRlcm5ldCBFeHBsb3JlciAxMS4gVGhlXG4gKiBgY3JlYXRlU3ltYm9sYCBoZWxwZXIgZnVuY3Rpb24gZXhpc3RzIGFzIGEgd29ya2Fyb3VuZCBmb3IgSUUgMTEuIFJhdGhlciB0aGFuXG4gKiByZXR1cm5pbmcgYSB0cnVlIFN5bWJvbCwgaXQgc2ltcGx5IHJldHVybnMgYW4gdW5kZXJzY29yZS1wcmVmaXhlZCBzdHJpbmcuXG4gKlxuICogVXNhZ2U6XG4gKlxuICogICAgIGNvbnN0IGZvb1N5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnZm9vJyk7XG4gKlxuICogICAgIGNsYXNzIE15RWxlbWVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAqICAgICAgIGdldCBmb28oKSB7XG4gKiAgICAgICAgIHJldHVybiB0aGlzW2Zvb1N5bWJvbF07XG4gKiAgICAgICB9XG4gKiAgICAgICBzZXQgZm9vKHZhbHVlKSB7XG4gKiAgICAgICAgIHRoaXNbZm9vU3ltYm9sXSA9IHZhbHVlO1xuICogICAgICAgfVxuICogICAgIH1cbiAqXG4gKiBJbiBJRSAxMSwgdGhpcyBzYW1wbGUgd2lsbCBcImhpZGVcIiBkYXRhIGJlaGluZCBhbiBpbnN0YW5jZSBwcm9wZXJ0eSB0aGlzLl9mb28uXG4gKiBUaGUgdXNlIG9mIHRoZSB1bmRlcnNjb3JlIGlzIG1lYW50IHRvIHJlZHVjZSAobm90IGVsaW1pbmF0ZSkgdGhlIHBvdGVudGlhbFxuICogZm9yIG5hbWUgY29uZmxpY3RzLCBhbmQgZGlzY291cmFnZSAobm90IHByZXZlbnQpIGV4dGVybmFsIGFjY2VzcyB0byB0aGlzXG4gKiBkYXRhLiBJbiBtb2Rlcm4gYnJvd3NlcnMsIHRoZSBhYm92ZSBjb2RlIHdpbGwgZWxpbWluYXRlIHRoZSBwb3RlbnRpYWwgb2ZcbiAqIG5hbWluZyBjb25mbGljdHMsIGFuZCBiZXR0ZXIgaGlkZSB0aGUgZGF0YSBiZWhpbmQgYSByZWFsIFN5bWJvbC5cbiAqXG4gKiBAZnVuY3Rpb24gY3JlYXRlU3ltYm9sXG4gKiBAcGFyYW0ge3N0cmluZ30gZGVzY3JpcHRpb24gLSBBIHN0cmluZyB0byBpZGVudGlmeSB0aGUgc3ltYm9sIHdoZW4gZGVidWdnaW5nXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVN5bWJvbChkZXNjcmlwdGlvbikge1xuICByZXR1cm4gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyA/XG4gICAgU3ltYm9sKGRlc2NyaXB0aW9uKSA6XG4gICAgYF8ke2Rlc2NyaXB0aW9ufWA7XG59XG4iLCIvKlxuICogTWljcm90YXNrIGhlbHBlciBmb3IgSUUgMTEuXG4gKlxuICogRXhlY3V0aW5nIGEgZnVuY3Rpb24gYXMgYSBtaWNyb3Rhc2sgaXMgdHJpdmlhbCBpbiBicm93c2VycyB0aGF0IHN1cHBvcnRcbiAqIHByb21pc2VzLCB3aG9zZSB0aGVuKCkgY2xhdXNlcyB1c2UgbWljcm90YXNrIHRpbWluZy4gSUUgMTEgZG9lc24ndCBzdXBwb3J0XG4gKiBwcm9taXNlcywgYnV0IGRvZXMgc3VwcG9ydCBNdXRhdGlvbk9ic2VydmVycywgd2hpY2ggYXJlIGFsc28gZXhlY3V0ZWQgYXNcbiAqIG1pY3JvdGFza3MuIFNvIHRoaXMgaGVscGVyIHVzZXMgYW4gTXV0YXRpb25PYnNlcnZlciB0byBhY2hpZXZlIG1pY3JvdGFza1xuICogdGltaW5nLlxuICpcbiAqIFNlZSBodHRwczovL2pha2VhcmNoaWJhbGQuY29tLzIwMTUvdGFza3MtbWljcm90YXNrcy1xdWV1ZXMtYW5kLXNjaGVkdWxlcy9cbiAqXG4gKiBJbnNwaXJlZCBieSBQb2x5bWVyJ3MgYXN5bmMoKSBmdW5jdGlvbi5cbiAqL1xuXG5cbi8vIFRoZSBxdWV1ZSBvZiBwZW5kaW5nIGNhbGxiYWNrcyB0byBiZSBleGVjdXRlZCBhcyBtaWNyb3Rhc2tzLlxubGV0IGNhbGxiYWNrcyA9IFtdO1xuXG4vLyBDcmVhdGUgYW4gZWxlbWVudCB0aGF0IHdlIHdpbGwgbW9kaWZ5IHRvIGZvcmNlIG9ic2VydmFibGUgbXV0YXRpb25zLlxubGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG5cbi8vIEEgbW9ub3RvbmljYWxseS1pbmNyZWFzaW5nIHZhbHVlLlxubGV0IGNvdW50ZXIgPSAwO1xuXG5cbi8qKlxuICogQWRkIGEgY2FsbGJhY2sgdG8gdGhlIG1pY3JvdGFzayBxdWV1ZS5cbiAqXG4gKiBUaGlzIHVzZXMgYSBNdXRhdGlvbk9ic2VydmVyIHNvIHRoYXQgaXQgd29ya3Mgb24gSUUgMTEuXG4gKlxuICogTk9URTogSUUgMTEgbWF5IGFjdHVhbGx5IHVzZSB0aW1lb3V0IHRpbWluZyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXJzLiBUaGlzXG4gKiBuZWVkcyBtb3JlIGludmVzdGlnYXRpb24uXG4gKlxuICogQGZ1bmN0aW9uIG1pY3JvdGFza1xuICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWljcm90YXNrKGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgLy8gRm9yY2UgYSBtdXRhdGlvbi5cbiAgZWxlbWVudC50ZXh0Q29udGVudCA9ICsrY291bnRlcjtcbn1cblxuXG4vLyBFeGVjdXRlIGFueSBwZW5kaW5nIGNhbGxiYWNrcy5cbmZ1bmN0aW9uIGV4ZWN1dGVDYWxsYmFja3MoKSB7XG4gIHdoaWxlIChjYWxsYmFja3MubGVuZ3RoID4gMCkge1xuICAgIGxldCBjYWxsYmFjayA9IGNhbGxiYWNrcy5zaGlmdCgpO1xuICAgIGNhbGxiYWNrKCk7XG4gIH1cbn1cblxuXG4vLyBDcmVhdGUgdGhlIG9ic2VydmVyLlxubGV0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZXhlY3V0ZUNhbGxiYWNrcyk7XG5vYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQsIHtcbiAgY2hhcmFjdGVyRGF0YTogdHJ1ZVxufSk7XG4iLCIvKipcbiAqIEhlbHBlciBmdW5jdGlvbiBmb3Igc3RhbmRhcmQgY2xhc3NMaXN0LnRvZ2dsZSgpIGJlaGF2aW9yIG9uIG9sZCBicm93c2VycyxcbiAqIG5hbWVseSBJRSAxMS5cbiAqXG4gKiBUaGUgc3RhbmRhcmRcbiAqIFtjbGFzc2xpc3RdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9FbGVtZW50L2NsYXNzTGlzdClcbiAqIG9iamVjdCBoYXMgYSBgdG9nZ2xlKClgIGZ1bmN0aW9uIHRoYXQgc3VwcG9ydHMgYSBzZWNvbmQgQm9vbGVhbiBwYXJhbWV0ZXJcbiAqIHRoYXQgY2FuIGJlIHVzZWQgdG8gc3VjY2luY3RseSB0dXJuIGEgY2xhc3Mgb24gb3Igb2ZmLiBUaGlzIGZlYXR1cmUgaXMgb2Z0ZW5cbiAqIHVzZWZ1bCBpbiBkZXNpZ25pbmcgY3VzdG9tIGVsZW1lbnRzLCB3aGljaCBtYXkgd2FudCB0byBleHRlcm5hbGx5IHJlZmxlY3RcbiAqIGNvbXBvbmVudCBzdGF0ZSBpbiBhIENTUyBjbGFzcyB0aGF0IGNhbiBiZSB1c2VkIGZvciBzdHlsaW5nIHB1cnBvc2VzLlxuICpcbiAqIFVuZm9ydHVuYXRlbHksIElFIDExIGRvZXMgbm90IHN1cHBvcnQgdGhlIEJvb2xlYW4gcGFyYW1ldGVyIHRvXG4gKiBgY2xhc3NMaXN0LnRvZ2dsZSgpYC4gVGhpcyBoZWxwZXIgZnVuY3Rpb24gYmVoYXZlcyBsaWtlIHRoZSBzdGFuZGFyZFxuICogYHRvZ2dsZSgpYCwgaW5jbHVkaW5nIHN1cHBvcnQgZm9yIHRoZSBCb29sZWFuIHBhcmFtZXRlciwgc28gdGhhdCBpdCBjYW4gYmVcbiAqIHVzZWQgZXZlbiBvbiBJRSAxMS5cbiAqXG4gKiBAZnVuY3Rpb24gdG9nZ2xlQ2xhc3NcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBUaGUgZWxlbWVudCB0byBtb2RpZnlcbiAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgLSBUaGUgY2xhc3MgdG8gYWRkL3JlbW92ZVxuICogQHBhcmFtIHtib29sZWFufSBbZm9yY2VdIC0gRm9yY2UgdGhlIGNsYXNzIHRvIGJlIGFkZGVkIChpZiB0cnVlKSBvciByZW1vdmVkXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaWYgZmFsc2UpXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvZ2dsZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSwgZm9yY2UpIHtcbiAgbGV0IGNsYXNzTGlzdCA9IGVsZW1lbnQuY2xhc3NMaXN0O1xuICBsZXQgYWRkQ2xhc3MgPSAodHlwZW9mIGZvcmNlID09PSAndW5kZWZpbmVkJykgP1xuICAgICFjbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSA6XG4gICAgZm9yY2U7XG4gIGlmIChhZGRDbGFzcykge1xuICAgIGNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgfSBlbHNlIHtcbiAgICBjbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gIH1cbiAgcmV0dXJuIGFkZENsYXNzO1xufVxuIiwiaW1wb3J0IENvbXBvc2FibGUgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ29tcG9zYWJsZSc7XG5pbXBvcnQgU2hhZG93VGVtcGxhdGUgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2hhZG93VGVtcGxhdGUnO1xuaW1wb3J0IFNoYWRvd0VsZW1lbnRSZWZlcmVuY2VzIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NoYWRvd0VsZW1lbnRSZWZlcmVuY2VzJztcbmltcG9ydCBBdHRyaWJ1dGVNYXJzaGFsbGluZyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9BdHRyaWJ1dGVNYXJzaGFsbGluZyc7XG5pbXBvcnQgRGlzdHJpYnV0ZWRDaGlsZHJlbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXN0cmlidXRlZENoaWxkcmVuJztcblxuXG4vKipcbiAqIEEgc2FtcGxlIGdlbmVyYWwtcHVycG9zZSBiYXNlIGNsYXNzIGZvciBkZWZpbmluZyBjdXN0b20gZWxlbWVudHMgdGhhdCBtaXhlc1xuICogaW4gc29tZSBjb21tb24gZmVhdHVyZXM6IHRlbXBsYXRlIHN0YW1waW5nIGludG8gYSBzaGFkb3cgcm9vdCwgc2hhZG93IGVsZW1lbnRcbiAqIHJlZmVyZW5jZXMsIG1hcnNoYWxsaW5nIGF0dHJpYnV0ZXMgdG8gcHJvcGVydGllcywgYW5kIHJldHJpZXZpbmcgdGhlIGNoaWxkcmVuXG4gKiBkaXN0cmlidXRlZCB0byBhIGNvbXBvbmVudC5cbiAqXG4gKiBUaGlzIGJhc2UgY2xhc3MgaXMgbm90IHNwZWNpYWwgaW4gYW55IHdheSwgYW5kIGlzIGRlZmluZWQgb25seSBhcyBhXG4gKiBjb252ZW5pZW50IHNob3J0aGFuZCBmb3IgYXBwbHlpbmcgdGhlIG1peGlucyBsaXN0ZWQgYWJvdmUuIFlvdSBjYW4gdXNlIHRoaXNcbiAqIGNsYXNzIGFzIGEgYmFzZSBjbGFzcyBmb3IgeW91ciBvd24gZWxlbWVudHMsIG9yIGVhc2lseSBjcmVhdGUgeW91ciBvd24gYmFzZVxuICogY2xhc3MgYnkgYXBwbHlpbmcgdGhlIHNhbWUgc2V0IG9mIG1peGlucy5cbiAqXG4gKiBUaGUgRWxlbWVudEJhc2UgYmFzZSBjbGFzcyBkb2VzIG5vdCByZWdpc3RlciBpdHNlbGYgYXMgYSBjdXN0b20gZWxlbWVudCB3aXRoXG4gKiB0aGUgYnJvd3NlciwgYW5kIGhlbmNlIGNhbm5vdCBiZSBpbmRlcGVuZGVudGx5IGluc3RhbnRpYXRlZC5cbiAqXG4gKiBAbWl4ZXMgQXR0cmlidXRlTWFyc2hhbGxpbmcgXG4gKiBAbWl4ZXMgQ29tcG9zYWJsZVxuICogQG1peGVzIERpc3RyaWJ1dGVkQ2hpbGRyZW5cbiAqIEBtaXhlcyBTaGFkb3dFbGVtZW50UmVmZXJlbmNlc1xuICogQG1peGVzIFNoYWRvd1RlbXBsYXRlXG4gKi9cbmNsYXNzIEVsZW1lbnRCYXNlIGV4dGVuZHMgQ29tcG9zYWJsZShIVE1MRWxlbWVudCkuY29tcG9zZShcbiAgU2hhZG93VGVtcGxhdGUsICAgICAgICAgIC8vIGJlZm9yZSBub2RlIGZpbmRpbmcsIHNvIHNoYWRvdyByb290IGlzIHBvcHVsYXRlZFxuICBTaGFkb3dFbGVtZW50UmVmZXJlbmNlcywgLy8gYmVmb3JlIG1hcnNoYWxsaW5nLCBzbyBwcm9wZXJ0aWVzIGNhbiB1c2UgcmVmc1xuICBBdHRyaWJ1dGVNYXJzaGFsbGluZyxcbiAgRGlzdHJpYnV0ZWRDaGlsZHJlblxuKSB7XG5cbiAgLypcbiAgICogRGVidWdnaW5nIHV0aWxpdHk6IGxvZ3MgYSBtZXNzYWdlLCBwcmVmaXhlZCBieSB0aGUgY29tcG9uZW50J3MgdGFnLlxuICAgKi9cbiAgbG9nKHRleHQpIHtcbiAgICBpZiAoc3VwZXIubG9nKSB7IHN1cGVyLmxvZyh0ZXh0KTsgfVxuICAgIGNvbnNvbGUubG9nKGAke3RoaXMubG9jYWxOYW1lfTogJHt0ZXh0fWApO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWxlbWVudEJhc2U7XG4iXX0=
