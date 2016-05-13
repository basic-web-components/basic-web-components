(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _ElementBase = require('../../basic-element-base/src/ElementBase');

var _ElementBase2 = _interopRequireDefault(_ElementBase);

var _ContentAsItems = require('../../basic-component-mixins/src/ContentAsItems');

var _ContentAsItems2 = _interopRequireDefault(_ContentAsItems);

var _DirectionSelection = require('../../basic-component-mixins/src/DirectionSelection');

var _DirectionSelection2 = _interopRequireDefault(_DirectionSelection);

var _DistributedChildrenAsContent = require('../../basic-component-mixins/src/DistributedChildrenAsContent');

var _DistributedChildrenAsContent2 = _interopRequireDefault(_DistributedChildrenAsContent);

var _ItemsSelection = require('../../basic-component-mixins/src/ItemsSelection');

var _ItemsSelection2 = _interopRequireDefault(_ItemsSelection);

var _ObserveContentChanges = require('../../basic-component-mixins/src/ObserveContentChanges');

var _ObserveContentChanges2 = _interopRequireDefault(_ObserveContentChanges);

var _SelectionAnimation = require('../../basic-component-mixins/src/SelectionAnimation');

var _SelectionAnimation2 = _interopRequireDefault(_SelectionAnimation);

var _SelectionAriaActive = require('../../basic-component-mixins/src/SelectionAriaActive');

var _SelectionAriaActive2 = _interopRequireDefault(_SelectionAriaActive);

var _SwipeDirection = require('../../basic-component-mixins/src/SwipeDirection');

var _SwipeDirection2 = _interopRequireDefault(_SwipeDirection);

var _TrackpadDirection = require('../../basic-component-mixins/src/TrackpadDirection');

var _TrackpadDirection2 = _interopRequireDefault(_TrackpadDirection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var base = _ElementBase2.default.compose(_ContentAsItems2.default, _DirectionSelection2.default, _DistributedChildrenAsContent2.default, _ItemsSelection2.default, _ObserveContentChanges2.default, _SelectionAnimation2.default, _SelectionAriaActive2.default, _SwipeDirection2.default, _TrackpadDirection2.default);

/**
 * Shows animated transitions entering and leaving the viewport.
 *
 * @extends ElementBase
 * @mixes ContentAsItems
 * @mixes DirectionSelection
 * @mixes DistributedChildrenAsContent
 * @mixes ItemsSelection
 * @mixes ObserveContentChanges
 * @mixes SelectionAnimation
 * @mixes SelectionAriaActive
 * @mixes SwipeDirection
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
    key: 'selectedFraction',
    get: function get() {
      return this._selectedFraction;
    },
    set: function set(value) {
      if ('selectedFraction' in base.prototype) {
        _set(Object.getPrototypeOf(AnimationStage.prototype), 'selectedFraction', value, this);
      }
      this._selectedFraction = value;
      var event = new CustomEvent('selection-fraction-changed');
      this.dispatchEvent(event);
    }
  }]);

  return AnimationStage;
}(base);

document.registerElement('basic-animation-stage', AnimationStage);

},{"../../basic-component-mixins/src/ContentAsItems":4,"../../basic-component-mixins/src/DirectionSelection":5,"../../basic-component-mixins/src/DistributedChildrenAsContent":7,"../../basic-component-mixins/src/ItemsSelection":8,"../../basic-component-mixins/src/ObserveContentChanges":9,"../../basic-component-mixins/src/SelectionAnimation":10,"../../basic-component-mixins/src/SelectionAriaActive":11,"../../basic-component-mixins/src/SwipeDirection":14,"../../basic-component-mixins/src/TrackpadDirection":15,"../../basic-element-base/src/ElementBase":20}],2:[function(require,module,exports){
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

var _toggleClass = require('../../basic-component-mixins/src/toggleClass');

var _toggleClass2 = _interopRequireDefault(_toggleClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Exported function extends a base class with ContentAsItems. */

exports.default = function (base) {

  /**
   * Mixin which maps content semantics (elements) to list item semantics.
   *
   * This mixin expects a component to provide a `content` property returning a
   * raw set of elements. You can provide that yourself, or use the
   * [DistributedChildrenAsContent](DistributedChildrenAsContent.md) mixin.
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
        this._items = null;
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
          if (!item._itemInitialized) {
            _this2.itemAdded(item);
            item._itemInitialized = true;
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
        if (this._items == null) {
          this._items = filterAuxiliaryElements(this.content);
        }
        return this._items;
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

},{"../../basic-component-mixins/src/toggleClass":19}],5:[function(require,module,exports){
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
   * [ItemsSelection](ItemsSelection.md).
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

},{}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
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
       * @default {false}
       */

    }, {
      key: 'canSelectNext',
      get: function get() {
        return this._canSelectNext;
      },
      set: function set(canSelectNext) {
        if ('canSelectNext' in base.prototype) {
          _set(Object.getPrototypeOf(ItemsSelection.prototype), 'canSelectNext', canSelectNext, this);
        }
        this._canSelectNext = canSelectNext;
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
        return this._canSelectPrevious;
      },
      set: function set(canSelectPrevious) {
        if ('canSelectPrevious' in base.prototype) {
          _set(Object.getPrototypeOf(ItemsSelection.prototype), 'canSelectPrevious', canSelectPrevious, this);
        }
        this._canSelectPrevious = canSelectPrevious;
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
        return this._selectedItem || null;
      },
      set: function set(item) {
        if ('selectedItem' in base.prototype) {
          _set(Object.getPrototypeOf(ItemsSelection.prototype), 'selectedItem', item, this);
        }
        var previousItem = this._selectedItem;
        if (previousItem) {
          if (item === previousItem) {
            // The indicated item is already the selected item.
            return;
          }
          // Remove previous selection.
          this.applySelection(previousItem, false);
        }

        // TODO: Confirm item is actually in the list before selecting.
        this._selectedItem = item;
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
        return this._selectionRequired;
      },
      set: function set(selectionRequired) {
        if ('selectionRequired' in base.prototype) {
          _set(Object.getPrototypeOf(ItemsSelection.prototype), 'selectionRequired', selectionRequired, this);
        }
        this._selectionRequired = selectionRequired;
        if (selectionRequired) {
          ensureSelection(this);
        }
      }
    }, {
      key: 'selectionWraps',
      get: function get() {
        return this._selectionWraps || false;
      },
      set: function set(value) {
        if ('selectionWraps' in base.prototype) {
          _set(Object.getPrototypeOf(ItemsSelection.prototype), 'selectionWraps', value, this);
        }
        this._selectionWraps = String(value) === 'true';
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

},{"./microtask":18}],9:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

},{"./microtask":18}],10:[function(require,module,exports){
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

var _fractionalSelection = require('./fractionalSelection');

var fractionalSelection = _interopRequireWildcard(_fractionalSelection);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Symbols for hanging data off an element.
var animatingSelectionSymbol = (0, _createSymbol2.default)('animatingSelection');
var animationSymbol = (0, _createSymbol2.default)('animations');
var lastAnimationSymbol = (0, _createSymbol2.default)('lastAnimation');
var previousSelectionSymbol = (0, _createSymbol2.default)('previousSelection');
var showTransitionSymbol = (0, _createSymbol2.default)('showTransition');
var selectionAnimationDurationSymbol = (0, _createSymbol2.default)('selectionAnimationDuration');
var selectionAnimationKeyframesSymbol = (0, _createSymbol2.default)('selectionAnimationKeyframes');

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
        this[showTransitionSymbol] = true;
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
       * For more details, see the [fractionalSelection](fractionalSelection.md)
       * helper functions.
       *
       * @type {number}
       */

    }, {
      key: 'showTransition',

      // TODO: Make this a getter/setter property.
      value: function showTransition(show) {
        if (_get(Object.getPrototypeOf(SelectionAnimation.prototype), 'showTransition', this)) {
          _get(Object.getPrototypeOf(SelectionAnimation.prototype), 'showTransition', this).call(this, show);
        }
        this[showTransitionSymbol] = show;
      }
    }, {
      key: 'selectedFraction',
      get: function get() {
        return _get(Object.getPrototypeOf(SelectionAnimation.prototype), 'selectedFraction', this);
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
       * @type {integer}
       * @default 250
       */

    }, {
      key: 'selectionAnimationDuration',
      get: function get() {
        return this[selectionAnimationDurationSymbol] || 250;
      },
      set: function set(value) {
        if ('selectionAnimationDuration' in base.prototype) {
          _set(Object.getPrototypeOf(SelectionAnimation.prototype), 'selectionAnimationDuration', value, this);
        }
        this[selectionAnimationDurationSymbol] = value;
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
        return this[selectionAnimationKeyframesSymbol] || mixin.standardEffectKeyframes.slide;
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
    var toIndex = fractionalSelection.wrappedSelectionParts(toSelection, itemCount, selectionWraps).index;
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
  fade: [{ opacity: 0 }, { opacity: 1 }, { opacity: 0 }],

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
    // Cancel the effects of the last selection animation.
    element[lastAnimationSymbol].onfinish = null;
    element[lastAnimationSymbol] = null;
  }

  // Calculate the animation timings.
  var items = element.items;
  var keyframes = element.selectionAnimationKeyframes;
  element[animatingSelectionSymbol] = true;
  var timings = mixin.helpers.effectTimingsForSelectionAnimation(element, fromSelection, toSelection);
  var lastAnimationDetails = undefined;

  // Figure out which item will be the one *after* the one we're selecting.
  var itemCount = items.length;
  var selectionWraps = element.selectionWraps;
  var selectionIndex = fractionalSelection.selectionParts(toSelection, itemCount, selectionWraps).index;
  var totalSteps = stepsToIndex(itemCount, selectionWraps, fromSelection, toSelection);
  var forward = totalSteps >= 0;
  var nextUpIndex = selectionIndex + (forward ? 1 : -1);
  if (selectionWraps) {
    nextUpIndex = fractionalSelection.wrappedSelection(nextUpIndex, itemCount);
  } else if (!isItemIndexInBounds(element, nextUpIndex)) {
    nextUpIndex = null; // At start/end of list; don't have a next item to show.
  }

  // Play the animations using those timings.
  timings.forEach(function (timing, index) {
    var item = items[index];
    if (timing) {
      showItem(item, true);
      var animation = item.animate(keyframes, timing);

      // Figure out whether this animation will be the last one to end
      // (possibly concurrent with another animation).
      var endTime = timing.delay + timing.duration + timing.endDelay;
      if (lastAnimationDetails == null || endTime > lastAnimationDetails.endTime) {
        lastAnimationDetails = { animation: animation, endTime: endTime, timing: timing };
      }

      if (index === nextUpIndex) {
        // This item will be animated, so will already be in the desired state
        // after the animation completes.
        nextUpIndex = null;
      }
    } else {
      // This item doesn't participate in the animation.
      showItem(item, false);
    }
  });

  if (lastAnimationDetails && nextUpIndex != null) {
    displayNextItemWhenAnimationCompletes(element, lastAnimationDetails.animation, nextUpIndex, forward);
  } else {
    // Shouldn't happen -- we should always have at least one animation.
    element[animatingSelectionSymbol] = false;
  }
}

/*
 * When the last animation completes, show the next item in the direction we're
 * going. This waiting is a hack to avoid having static items higher in the
 * natural z-order obscure items during animation.
 */
function displayNextItemWhenAnimationCompletes(element, animation, nextUpIndex, forward) {
  animation.onfinish = function (event) {
    var nextUpItem = element.items[nextUpIndex];
    var animationFraction = forward ? 0 : 1;
    setAnimationFraction(element, nextUpIndex, animationFraction);
    showItem(nextUpItem, true);
    element[animatingSelectionSymbol] = false;
    element[lastAnimationSymbol] = null;
  };
  element[lastAnimationSymbol] = animation;
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

  if (selectedIndex < 0) {
    // TODO: Handle no selection.
    return;
  }
  var selection = selectedIndex + selectedFraction;
  if (!element.selectionWraps) {
    // Apply damping if necessary.
    var itemCount = element.items ? element.items.length : 0;
    selection = fractionalSelection.dampedSelection(selection, itemCount);
  }
  var previousSelection = element[previousSelectionSymbol];
  if (element[showTransitionSymbol] && previousSelection != null && previousSelection !== selection) {
    // Animate selection from previous state to new state.
    animateSelection(element, previousSelection, selection);
  } else if (selectedFraction === 0 && element[animatingSelectionSymbol]) {
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
  element[animationSymbol] = new Array(element.items.length);
}

/*
 * Pause the indicated animation and have it show the animation at the given
 * fraction (between 0 and 1) of the way through the animation.
 */
function setAnimationFraction(element, itemIndex, fraction) {
  var animation = getAnimationForItemIndex(element, itemIndex);
  if (animation) {
    var duration = element.selectionAnimationDuration;
    animation.currentTime = fraction * duration;
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

},{"./createSymbol":16,"./fractionalSelection":17}],11:[function(require,module,exports){
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

      return _possibleConstructorReturn(this, Object.getPrototypeOf(SwipeDirection).apply(this, arguments));
    }

    _createClass(SwipeDirection, [{
      key: 'createdCallback',
      value: function createdCallback() {
        var _this2 = this;

        if (_get(Object.getPrototypeOf(SwipeDirection.prototype), 'createdCallback', this)) {
          _get(Object.getPrototypeOf(SwipeDirection.prototype), 'createdCallback', this).call(this);
        }

        // For the component to receive PointerEvents in IE/Edge, we need to set
        // touch-action: none. Only make this change if touch-action is currently
        // the default value ("auto"), in case the developer knows better than we
        // do what they want in their particular context.
        if (getComputedStyle(this).touchAction === 'auto') {
          this.style.touchAction = 'none';
        }

        this.travelFraction = 0;

        // TODO: Touch events could be factored out into its own mixin.

        // In all touch events, only handle single touches. We don't want to
        // inadvertently do work when the user's trying to pinch-zoom for example.
        // TODO: Even better approach than below would be to ignore touches after
        // the first if the user has already begun a swipe.
        if (window.PointerEvent) {
          // Prefer listening to standard pointer events.
          this.addEventListener('pointerdown', function (event) {
            if (isEventForPenOrPrimaryTouch(event)) {
              touchStart(_this2, event.clientX, event.clientY);
            }
          });
          this.addEventListener('pointermove', function (event) {
            if (isEventForPenOrPrimaryTouch(event)) {
              var handled = touchMove(_this2, event.clientX, event.clientY);
              if (handled) {
                event.preventDefault();
              }
            }
          });
          this.addEventListener('pointerup', function (event) {
            if (isEventForPenOrPrimaryTouch(event)) {
              touchEnd(_this2, event.clientX, event.clientY);
            }
          });
        } else {
          // Pointer events not supported -- listen to older touch events.
          this.addEventListener('touchstart', function (event) {
            if (_this2._multiTouch) {
              return;
            } else if (event.touches.length === 1) {
              var clientX = event.changedTouches[0].clientX;
              var clientY = event.changedTouches[0].clientY;
              touchStart(_this2, clientX, clientY);
            } else {
              _this2._multiTouch = true;
            }
          });
          this.addEventListener('touchmove', function (event) {
            if (!_this2._multiTouch && event.touches.length === 1) {
              var clientX = event.changedTouches[0].clientX;
              var clientY = event.changedTouches[0].clientY;
              var handled = touchMove(_this2, clientX, clientY);
              if (handled) {
                event.preventDefault();
              }
            }
          });
          this.addEventListener('touchend', function (event) {
            if (event.touches.length === 0) {
              // All touches removed; gesture is complete.
              if (!_this2._multiTouch) {
                // Single-touch swipe has finished.
                var clientX = event.changedTouches[0].clientX;
                var clientY = event.changedTouches[0].clientY;
                touchEnd(_this2, clientX, clientY);
              }
              _this2._multiTouch = false;
            }
          });
        }
      }

      /**
       * Invoked when the user wants to go/navigate left.
       * The default implementation of this method does nothing.
       */

    }, {
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

      /**
       * Determine whether a transition should be shown during a swipe.
       *
       * Components like carousels often define animated CSS transitions for
       * sliding effects. Such a transition should usually *not* be applied while
       * the user is dragging, because a CSS animation will introduce a lag that
       * makes the swipe feel sluggish. Instead, as long as the user is dragging
       * with their finger down, the transition should be suppressed. When the
       * user releases their finger, the transition can be restored, allowing the
       * animation to show the carousel sliding into its final position.
       *
       * @param {boolean} value - true if a component-provided transition should
       * be shown, false if not.
       */
      // TODO: Rename (and flip meaning) to something like dragging()?

    }, {
      key: 'showTransition',
      value: function showTransition(value) {
        if (_get(Object.getPrototypeOf(SwipeDirection.prototype), 'showTransition', this)) {
          _get(Object.getPrototypeOf(SwipeDirection.prototype), 'showTransition', this).call(this, value);
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
        return this._travelFraction;
      },
      set: function set(value) {
        if ('travelFraction' in base.prototype) {
          _set(Object.getPrototypeOf(SwipeDirection.prototype), 'travelFraction', value, this);
        }
        this._travelFraction = value;
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
  element.showTransition(false);
  element._startX = clientX;
  element._previousX = clientX;
  element._previousY = clientY;
  element._deltaX = 0;
  element._deltaY = 0;
}

function touchMove(element, clientX, clientY) {
  element._deltaX = clientX - element._previousX;
  element._deltaY = clientY - element._previousY;
  element._previousX = clientX;
  element._previousY = clientY;
  if (Math.abs(element._deltaX) > Math.abs(element._deltaY)) {
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
  element.showTransition(true);
  if (element._deltaX >= 20) {
    // Finished going right at high speed.
    element.goLeft();
  } else if (element._deltaX <= -20) {
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
  element._deltaX = null;
  element._deltaY = null;
}

function trackTo(element, x) {
  var width = element.offsetWidth;
  var dragDistance = element._startX - x;
  var fraction = width > 0 ? dragDistance / width : 0;
  element.travelFraction = fraction;
}

},{}],15:[function(require,module,exports){
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

      return _possibleConstructorReturn(this, Object.getPrototypeOf(TrackpadDirection).apply(this, arguments));
    }

    _createClass(TrackpadDirection, [{
      key: 'createdCallback',
      value: function createdCallback() {
        var _this2 = this;

        if (_get(Object.getPrototypeOf(TrackpadDirection.prototype), 'createdCallback', this)) {
          _get(Object.getPrototypeOf(TrackpadDirection.prototype), 'createdCallback', this).call(this);
        }
        this.addEventListener('wheel', function (event) {
          var handled = wheel(_this2, event);
          if (handled) {
            event.preventDefault();
          }
        });
        resetWheelTracking(this);
      }

      /**
       * Invoked when the user wants to go/navigate left.
       * The default implementation of this method does nothing.
       */

    }, {
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

      // Default implementation

    }, {
      key: 'showTransition',
      value: function showTransition(value) {
        if (_get(Object.getPrototypeOf(TrackpadDirection.prototype), 'showTransition', this)) {
          _get(Object.getPrototypeOf(TrackpadDirection.prototype), 'showTransition', this).call(this, value);
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
  element._wheelDistance = 0;
  element._postNavigateDelayComplete = true;
  element._absorbDeceleration = true;
  setTimeout(function () {
    element._postNavigateDelayComplete = false;
  }, POST_NAVIGATE_TIME);
}

// Reset all state related to the tracking of the wheel.
function resetWheelTracking(element) {
  element.travelFraction = 0;
  element._wheelDistance = 0;
  element._lastDeltaX = 0;
  element._absorbDeceleration = false;
  element._postNavigateDelayComplete = false;
  if (element._lastWheelTimeout) {
    clearTimeout(element._lastWheelTimeout);
    element._lastWheelTimeout = null;
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
  if (element._lastWheelTimeout) {
    clearTimeout(element._lastWheelTimeout);
  }
  element._lastWheelTimeout = setTimeout(function () {
    wheelTimedOut(element);
  }, WHEEL_TIME);

  var deltaX = event.deltaX;
  var deltaY = event.deltaY;

  // See if element event represents acceleration or deceleration.
  var acceleration = sign(deltaX) * (deltaX - element._lastDeltaX);
  element._lastDeltaX = deltaX;
  // console.log(deltaX + " " + acceleration + " " + element._absorbDeceleration + " " + element._postNavigateDelayComplete);

  if (Math.abs(deltaX) < Math.abs(deltaY)) {
    // Move was mostly vertical. The user may be trying scroll with the
    // trackpad/wheel. To be on the safe, we ignore such events.
    return false;
  }

  if (element._postNavigateDelayComplete) {
    // It's too soon after a navigation; ignore the event.
    return true;
  }

  if (acceleration > 0) {
    // The events are not (or are no longer) decelerating, so we can start
    // paying attention to them again.
    element._absorbDeceleration = false;
  } else if (element._absorbDeceleration) {
    // The wheel event was likely faked to simulate deceleration; ignore it.
    return true;
  }

  element._wheelDistance += deltaX;

  // Update the travel fraction of the element being navigated.
  var width = element.offsetWidth;
  var travelFraction = width > 0 ? element._wheelDistance / width : 0;
  element.showTransition(false);
  travelFraction = sign(travelFraction) * Math.min(Math.abs(travelFraction), 1);
  element.travelFraction = travelFraction;

  // If the user has dragged enough to reach the previous/next item, then
  // complete a navigation to that item.
  if (travelFraction === 1) {
    // console.log("goRight");
    element.showTransition(true);
    element.goRight();
    postNavigate(element);
  } else if (travelFraction === -1) {
    // console.log("goLeft");
    element.showTransition(true);
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
  element.showTransition(true);
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

},{}],16:[function(require,module,exports){
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

},{}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dampedSelection = dampedSelection;
exports.elementSelection = elementSelection;
exports.selectionParts = selectionParts;
exports.wrappedSelection = wrappedSelection;
exports.wrappedSelectionParts = wrappedSelectionParts;
/*
 * Helper functions for working with a selection as a real number that combines
 * an integer index into a list, and a fraction indicating how far of the way we
 * are to the next or previous item.
 */

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
function dampedSelection(selection, itemCount) {
  var damped = undefined;
  var bound = itemCount - 1;
  if (selection < 0) {
    // Trying to go past beginning of list. Apply tension from the left edge.
    damped = -damping(-selection);
  } else if (selection >= bound) {
    // Trying to go past end of list. Apply tension from the right edge.
    damped = bound + damping(selection - bound);
  } else {
    // No damping required.
    damped = selection;
  }
  return damped;
}

/**
 * Return the current fractional selection value for the given element.
 *
 * This simply adds the element's `selectedIndex` and `selectedFraction`
 * properties.
 */
function elementSelection(element) {
  var selectedIndex = element.selectedIndex;
  if (selectedIndex < 0) {
    // No selection
    return;
  }
  var selectedFraction = element.selectedFraction || 0;
  return selectedIndex + selectedFraction;
}

/**
 * Breaks a fractional selection into its integer and fractional parts.
 *
 * @param {number} selection – A real number representing a selection point
 * @returns {object} - An object with an `index` property holding the
 * selection's integer component, and a `fraction` property holding the
 * selection's fractional component.
 */
function selectionParts(selection) {
  // Stupid IE doesn't have Math.trunc.
  // let index = Math.trunc(selection);
  var index = selection < 0 ? Math.ceil(selection) : Math.floor(selection);
  var fraction = selection - index;
  return { index: index, fraction: fraction };
}

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
function wrappedSelection(selection, itemCount) {
  // Handles possibility of negative mod.
  // See http://stackoverflow.com/a/18618250/76472
  return (selection % itemCount + itemCount) % itemCount;
}

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
function wrappedSelectionParts(selection, itemCount, wrap) {
  if (wrap) {
    selection = wrappedSelection(selection, itemCount);
  }
  return selectionParts(selection);
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

},{}],18:[function(require,module,exports){
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

},{}],19:[function(require,module,exports){
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

},{}],20:[function(require,module,exports){
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

},{"../../basic-component-mixins/src/AttributeMarshalling":2,"../../basic-component-mixins/src/Composable":3,"../../basic-component-mixins/src/DistributedChildren":6,"../../basic-component-mixins/src/ShadowElementReferences":12,"../../basic-component-mixins/src/ShadowTemplate":13}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwYWNrYWdlcy9iYXNpYy1hbmltYXRpb24tc3RhZ2Uvc3JjL0FuaW1hdGlvblN0YWdlLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQXR0cmlidXRlTWFyc2hhbGxpbmcuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Db21wb3NhYmxlLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ29udGVudEFzSXRlbXMuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXJlY3Rpb25TZWxlY3Rpb24uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXN0cmlidXRlZENoaWxkcmVuLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudC5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0l0ZW1zU2VsZWN0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvT2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2VsZWN0aW9uQW5pbWF0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2VsZWN0aW9uQXJpYUFjdGl2ZS5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NoYWRvd0VsZW1lbnRSZWZlcmVuY2VzLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2hhZG93VGVtcGxhdGUuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Td2lwZURpcmVjdGlvbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1RyYWNrcGFkRGlyZWN0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvY3JlYXRlU3ltYm9sLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvZnJhY3Rpb25hbFNlbGVjdGlvbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL21pY3JvdGFzay5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL3RvZ2dsZUNsYXNzLmpzIiwicGFja2FnZXMvYmFzaWMtZWxlbWVudC1iYXNlL3NyYy9FbGVtZW50QmFzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWUEsSUFBSSxJQUFJLEdBQUcsc0JBQVksT0FBTywrUUFVN0I7Ozs7Ozs7Ozs7Ozs7OztBQUFDO0lBZUksY0FBYztZQUFkLGNBQWM7O1dBQWQsY0FBYzswQkFBZCxjQUFjOztrRUFBZCxjQUFjOzs7ZUFBZCxjQUFjOzt1Q0FFQztBQUNqQixxQ0FIRSxjQUFjLHdDQUdZO0FBQUUsbUNBSDVCLGNBQWMsa0RBR3VDO09BQUU7QUFDekQsVUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztLQUMvQjs7O3dCQUVzQjtBQUNyQixhQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztLQUMvQjtzQkFDb0IsS0FBSyxFQUFFO0FBQzFCLFVBQUksa0JBQWtCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtBQUFFLG1DQVgxQyxjQUFjLGlDQVdxRCxLQUFLLFFBQUM7T0FBRTtBQUM3RSxVQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0FBQy9CLFVBQUksS0FBSyxHQUFHLElBQUksV0FBVyxDQUFDLDRCQUE0QixDQUFDLENBQUM7QUFDMUQsVUFBSSxDQUFDLGFBQWEsQ0FBQyxL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RUFBRTtBQUM3RCxNQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO0FBQ2xDLE1BQUksUUFBUSxHQUFHLEFBQUMsT0FBTyxLQUFLLEtBQUssV0FBVyxHQUMxQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQzlCLEtBQUssQ0FBQztBQUNSLE1BQUksUUFBUSxFQUFFO0FBQ1osYUFBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztHQUMxQixNQUFNO0FBQ0wsYUFBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztHQUM3QjtBQUNELFNBQU8sUUFBUSxDQUFDO0NBQ2pCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ05LLFdBQVc7WUFBWCxXQUFXOztXQUFYLFdBQVc7MEJBQVgsV0FBVzs7a0VBQVgsV0FBVzs7O2VBQVgsV0FBVzs7Ozs7O3dCQVVYLElBQUksRUFBRTtBQUNSLHFDQVhFLFdBQVcsMkJBV0U7QUFBRSxtQ0FYZixXQUFXLHFDQVdjLElBQUksRUFBRTtPQUFFO0FBQ25DLGFBQU8sQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLFNBQVMsVUFBSyxJQUFJLENBQUcsQ0FBQztLQUMzQzs7O1NBYkcsV0FBVztFQUFTLDBCQUFXLFdBQVcsQ0FBQyxDQUFDLE9BQU87OzhEQUt4RDs7a0JBWWMsV0FBVyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgRWxlbWVudEJhc2UgZnJvbSAnLi4vLi4vYmFzaWMtZWxlbWVudC1iYXNlL3NyYy9FbGVtZW50QmFzZSc7XG5pbXBvcnQgQ29udGVudEFzSXRlbXMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ29udGVudEFzSXRlbXMnO1xuaW1wb3J0IERpcmVjdGlvblNlbGVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXJlY3Rpb25TZWxlY3Rpb24nO1xuaW1wb3J0IERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCc7XG5pbXBvcnQgSXRlbXNTZWxlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvSXRlbXNTZWxlY3Rpb24nO1xuaW1wb3J0IE9ic2VydmVDb250ZW50Q2hhbmdlcyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9PYnNlcnZlQ29udGVudENoYW5nZXMnO1xuaW1wb3J0IFNlbGVjdGlvbkFuaW1hdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TZWxlY3Rpb25BbmltYXRpb24nO1xuaW1wb3J0IFNlbGVjdGlvbkFyaWFBY3RpdmUgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2VsZWN0aW9uQXJpYUFjdGl2ZSc7XG5pbXBvcnQgU3dpcGVEaXJlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU3dpcGVEaXJlY3Rpb24nO1xuaW1wb3J0IFRyYWNrcGFkRGlyZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1RyYWNrcGFkRGlyZWN0aW9uJztcblxuXG5sZXQgYmFzZSA9IEVsZW1lbnRCYXNlLmNvbXBvc2UoXG4gIENvbnRlbnRBc0l0ZW1zLFxuICBEaXJlY3Rpb25TZWxlY3Rpb24sXG4gIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQsXG4gIEl0ZW1zU2VsZWN0aW9uLFxuICBPYnNlcnZlQ29udGVudENoYW5nZXMsXG4gIFNlbGVjdGlvbkFuaW1hdGlvbixcbiAgU2VsZWN0aW9uQXJpYUFjdGl2ZSxcbiAgU3dpcGVEaXJlY3Rpb24sXG4gIFRyYWNrcGFkRGlyZWN0aW9uXG4pO1xuXG4vKipcbiAqIFNob3dzIGFuaW1hdGVkIHRyYW5zaXRpb25zIGVudGVyaW5nIGFuZCBsZWF2aW5nIHRoZSB2aWV3cG9ydC5cbiAqXG4gKiBAZXh0ZW5kcyBFbGVtZW50QmFzZVxuICogQG1peGVzIENvbnRlbnRBc0l0ZW1zXG4gKiBAbWl4ZXMgRGlyZWN0aW9uU2VsZWN0aW9uXG4gKiBAbWl4ZXMgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudFxuICogQG1peGVzIEl0ZW1zU2VsZWN0aW9uXG4gKiBAbWl4ZXMgT2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzXG4gKiBAbWl4ZXMgU2VsZWN0aW9uQW5pbWF0aW9uXG4gKiBAbWl4ZXMgU2VsZWN0aW9uQXJpYUFjdGl2ZVxuICogQG1peGVzIFN3aXBlRGlyZWN0aW9uXG4gKi9cbmNsYXNzIEFuaW1hdGlvblN0YWdlIGV4dGVuZHMgYmFzZSB7XG5cbiAgYXR0YWNoZWRDYWxsYmFjaygpIHtcbiAgICBpZiAoc3VwZXIuYXR0YWNoZWRDYWxsYmFjaykgeyBzdXBlci5hdHRhY2hlZENhbGxiYWNrKCk7IH1cbiAgICB0aGlzLnNlbGVjdGlvblJlcXVpcmVkID0gdHJ1ZTtcbiAgfVxuXG4gIGdldCBzZWxlY3RlZEZyYWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZEZyYWN0aW9uO1xuICB9XG4gIHNldCBzZWxlY3RlZEZyYWN0aW9uKHZhbHVlKSB7XG4gICAgaWYgKCdzZWxlY3RlZEZyYWN0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEZyYWN0aW9uID0gdmFsdWU7IH1cbiAgICB0aGlzLl9zZWxlY3RlZEZyYWN0aW9uID0gdmFsdWU7XG4gICAgbGV0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdzZWxlY3Rpb24tZnJhY3Rpb24tY2hhbmdlZCcpO1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gIH1cblxufVxuXG5cbmRvY3VtZW50LnJlZ2lzdGVyRWxlbWVudCgnYmFzaWMtYW5pbWF0aW9uLXN0YWdlJywgQW5pbWF0aW9uU3RhZ2UpO1xuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBBdHRyaWJ1dGVNYXJzaGFsbGluZy4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIG1hcnNoYWxscyBhdHRyaWJ1dGVzIHRvIHByb3BlcnRpZXMgKGFuZCBldmVudHVhbGx5IHZpY2UgdmVyc2EpLlxuICAgKlxuICAgKiBJZiB5b3VyIGNvbXBvbmVudCBleHBvc2VzIGEgc2V0dGVyIGZvciBhIHByb3BlcnR5LCBpdCdzIGdlbmVyYWxseSBhIGdvb2RcbiAgICogaWRlYSB0byBsZXQgZGV2cyB1c2luZyB5b3VyIGNvbXBvbmVudCBiZSBhYmxlIHRvIHNldCB0aGF0IHByb3BlcnR5IGluIEhUTUxcbiAgICogdmlhIGFuIGVsZW1lbnQgYXR0cmlidXRlLiBZb3UgY2FuIGNvZGUgdGhhdCB5b3Vyc2VsZiBieSB3cml0aW5nIGFuXG4gICAqIGBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tgLCBvciB5b3UgY2FuIHVzZSB0aGlzIG1peGluIHRvIGdldCBhIGRlZ3JlZSBvZlxuICAgKiBhdXRvbWF0aWMgc3VwcG9ydC5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBpbXBsZW1lbnRzIGFuIGBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tgIHRoYXQgd2lsbCBhdHRlbXB0IHRvXG4gICAqIGNvbnZlcnQgYSBjaGFuZ2UgaW4gYW4gZWxlbWVudCBhdHRyaWJ1dGUgaW50byBhIGNhbGwgdG8gdGhlIGNvcnJlc3BvbmRpbmdcbiAgICogcHJvcGVydHkgc2V0dGVyLiBBdHRyaWJ1dGVzIHR5cGljYWxseSBmb2xsb3cgaHlwaGVuYXRlZCBuYW1lcyAoXCJmb28tYmFyXCIpLFxuICAgKiB3aGVyZWFzIHByb3BlcnRpZXMgdHlwaWNhbGx5IHVzZSBjYW1lbENhc2UgbmFtZXMgKFwiZm9vQmFyXCIpLiBUaGlzIG1peGluXG4gICAqIHJlc3BlY3RzIHRoYXQgY29udmVudGlvbiwgYXV0b21hdGljYWxseSBtYXBwaW5nIHRoZSBoeXBoZW5hdGVkIGF0dHJpYnV0ZVxuICAgKiBuYW1lIHRvIHRoZSBjb3JyZXNwb25kaW5nIGNhbWVsQ2FzZSBwcm9wZXJ0eSBuYW1lLlxuICAgKlxuICAgKiBFeGFtcGxlOiBZb3UgZGVmaW5lIGEgY29tcG9uZW50IHVzaW5nIHRoaXMgbWl4aW46XG4gICAqXG4gICAqICAgICBjbGFzcyBNeUVsZW1lbnQgZXh0ZW5kcyBBdHRyaWJ1dGVNYXJzaGFsbGluZyhIVE1MRWxlbWVudCkge1xuICAgKiAgICAgICBnZXQgZm9vQmFyKCkgeyByZXR1cm4gdGhpcy5fZm9vQmFyOyB9XG4gICAqICAgICAgIHNldCBmb29CYXIodmFsdWUpIHsgdGhpcy5fZm9vQmFyID0gdmFsdWU7IH1cbiAgICogICAgIH1cbiAgICogICAgIGRvY3VtZW50LnJlZ2lzdGVyRWxlbWVudCgnbXktZWxlbWVudCcsIE15RWxlbWVudCk7XG4gICAqXG4gICAqIElmIHNvbWVvbmUgdGhlbiBpbnN0YW50aWF0ZXMgeW91ciBjb21wb25lbnQgaW4gSFRNTDpcbiAgICpcbiAgICogICAgIDxteS1lbGVtZW50IGZvby1iYXI9XCJIZWxsb1wiPjwvbXktZWxlbWVudD5cbiAgICpcbiAgICogVGhlbiwgYWZ0ZXIgdGhlIGVsZW1lbnQgaGFzIGJlZW4gdXBncmFkZWQsIHRoZSBgZm9vQmFyYCBzZXR0ZXIgd2lsbFxuICAgKiBhdXRvbWF0aWNhbGx5IGJlIGludm9rZWQgd2l0aCB0aGUgaW5pdGlhbCB2YWx1ZSBcIkhlbGxvXCIuXG4gICAqXG4gICAqIEZvciB0aGUgdGltZSBiZWluZywgdGhpcyBtaXhpbiBvbmx5IHN1cHBvcnRzIHN0cmluZy12YWx1ZWQgcHJvcGVydGllcy5cbiAgICogSWYgeW91J2QgbGlrZSB0byBjb252ZXJ0IHN0cmluZyBhdHRyaWJ1dGVzIHRvIG90aGVyIHR5cGVzIChudW1iZXJzLFxuICAgKiBib29sZWFucyksIHlvdSBuZWVkIHRvIGltcGxlbWVudCBgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrYCB5b3Vyc2VsZi5cbiAgICovXG4gIGNsYXNzIEF0dHJpYnV0ZU1hcnNoYWxsaW5nIGV4dGVuZHMgYmFzZSB7XG5cbiAgICAvKlxuICAgICAqIEhhbmRsZSBhIGNoYW5nZSB0byB0aGUgYXR0cmlidXRlIHdpdGggdGhlIGdpdmVuIG5hbWUuXG4gICAgICovXG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xuICAgICAgaWYgKHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjaykgeyBzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soKTsgfVxuICAgICAgLy8gSWYgdGhlIGF0dHJpYnV0ZSBuYW1lIGNvcnJlc3BvbmRzIHRvIGEgcHJvcGVydHkgbmFtZSwgdGhlbiBzZXQgdGhhdFxuICAgICAgLy8gcHJvcGVydHkuIElnbm9yZSBjaGFuZ2VzIGluIHN0YW5kYXJkIEhUTUxFbGVtZW50IHByb3BlcnRpZXMuXG4gICAgICBsZXQgcHJvcGVydHlOYW1lID0gYXR0cmlidXRlVG9Qcm9wZXJ0eU5hbWUobmFtZSk7XG4gICAgICBpZiAocHJvcGVydHlOYW1lIGluIHRoaXMgJiYgIShwcm9wZXJ0eU5hbWUgaW4gSFRNTEVsZW1lbnQucHJvdG90eXBlKSkge1xuICAgICAgICB0aGlzW3Byb3BlcnR5TmFtZV0gPSBuZXdWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEdlbmVyYXRlIGFuIGluaXRpYWwgY2FsbCB0byBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sgZm9yIGVhY2ggYXR0cmlidXRlXG4gICAgICogb24gdGhlIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBUT0RPOiBUaGUgcGxhbiBmb3IgQ3VzdG9tIEVsZW1lbnRzIHYxIGlzIGZvciB0aGUgYnJvd3NlciB0byBoYW5kbGUgdGhpcy5cbiAgICAgKiBPbmNlIHRoYXQncyBoYW5kbGVkIChpbmNsdWRpbmcgaW4gcG9seWZpbGxzKSwgdGhpcyBjYWxsIGNhbiBnbyBhd2F5LlxuICAgICAqL1xuICAgIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cbiAgICAgIGxldCBhdHRyaWJ1dGVzID0gW10uc2xpY2UuY2FsbCh0aGlzLmF0dHJpYnV0ZXMpOyAvLyBUbyBhcnJheSBmb3IgSUVcbiAgICAgIGF0dHJpYnV0ZXMuZm9yRWFjaChhdHRyaWJ1dGUgPT4ge1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhhdHRyaWJ1dGUubmFtZSwgdW5kZWZpbmVkLCBhdHRyaWJ1dGUudmFsdWUpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gQXR0cmlidXRlTWFyc2hhbGxpbmc7XG59O1xuXG5cbi8vIENvbnZlcnQgY2FtZWwgY2FzZSBmb29CYXIgbmFtZSB0byBoeXBoZW5hdGVkIGZvby1iYXIuXG5mdW5jdGlvbiBhdHRyaWJ1dGVUb1Byb3BlcnR5TmFtZShhdHRyaWJ1dGVOYW1lKSB7XG4gIGxldCBwcm9wZXJ0eU5hbWUgPSBhdHRyaWJ1dGVOYW1lLnJlcGxhY2UoLy0oW2Etel0pL2csIG0gPT4gbVsxXS50b1VwcGVyQ2FzZSgpKTtcbiAgcmV0dXJuIHByb3BlcnR5TmFtZTtcbn1cblxuLy8gQ29udmVydCBoeXBoZW5hdGVkIGZvby1iYXIgbmFtZSB0byBjYW1lbCBjYXNlIGZvb0Jhci5cbi8vIFRPRE86IFVzZSB0aGlzIHdoZW4gd2Ugc3VwcG9ydCByZWZsZWN0aW9uIG9mIHByb3BlcnRpZXMgdG8gYXR0cmlidXRlcy5cbi8vIGZ1bmN0aW9uIHByb3BlcnR5VG9BdHRyaWJ1dGVOYW1lKHByb3BlcnR5TmFtZSkge1xuLy8gICBsZXQgYXR0cmlidXRlTmFtZSA9IHByb3BlcnR5TmFtZS5yZXBsYWNlKC8oW2Etel1bQS1aXSkvZywgZyA9PiBnWzBdICsgJy0nICsgZ1sxXS50b0xvd2VyQ2FzZSgpKTtcbi8vICAgcmV0dXJuIGF0dHJpYnV0ZU5hbWU7XG4vLyB9XG4iLCIvKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIENvbXBvc2FibGUuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB0byBtYWtlIGEgY2xhc3MgbW9yZSBlYXNpbHkgY29tcG9zYWJsZSB3aXRoIG90aGVyIG1peGlucy5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBjb250cmlidXRlcyBhIGBjb21wb3NlYCBtZXRob2QgdGhhdCBhcHBsaWVzIGEgc2V0IG9mIG1peGluXG4gICAqIGZ1bmN0aW9ucyBhbmQgcmV0dXJucyB0aGUgcmVzdWx0aW5nIG5ldyBjbGFzcy4gVGhpcyBzdWdhciBjYW4gbWFrZSB0aGVcbiAgICogYXBwbGljYXRpb24gb2YgbWFueSBtaXhpbnMgYXQgb25jZSBlYXNpZXIgdG8gcmVhZC5cbiAgICovXG4gIGNsYXNzIENvbXBvc2FibGUgZXh0ZW5kcyBiYXNlIHtcblxuICAgIC8qKlxuICAgICAqIEFwcGx5IGEgc2V0IG9mIG1peGluIGZ1bmN0aW9ucyBvciBtaXhpbiBvYmplY3RzIHRvIHRoZSBwcmVzZW50IGNsYXNzIGFuZFxuICAgICAqIHJldHVybiB0aGUgbmV3IGNsYXNzLlxuICAgICAqXG4gICAgICogSW5zdGVhZCBvZiB3cml0aW5nOlxuICAgICAqXG4gICAgICogICAgIGxldCBNeUNsYXNzID0gTWl4aW4xKE1peGluMihNaXhpbjMoTWl4aW40KE1peGluNShCYXNlQ2xhc3MpKSkpKTtcbiAgICAgKlxuICAgICAqIFlvdSBjYW4gd3JpdGU6XG4gICAgICpcbiAgICAgKiAgICAgbGV0IE15Q2xhc3MgPSBDb21wb3NhYmxlKEJhc2VDbGFzcykuY29tcG9zZShcbiAgICAgKiAgICAgICBNaXhpbjEsXG4gICAgICogICAgICAgTWl4aW4yLFxuICAgICAqICAgICAgIE1peGluMyxcbiAgICAgKiAgICAgICBNaXhpbjQsXG4gICAgICogICAgICAgTWl4aW41XG4gICAgICogICAgICk7XG4gICAgICpcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGNhbiBhbHNvIHRha2UgbWl4aW4gb2JqZWN0cy4gQSBtaXhpbiBvYmplY3QgaXMganVzdCBhXG4gICAgICogc2hvcnRoYW5kIGZvciBhIG1peGluIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBhIG5ldyBzdWJjbGFzcyB3aXRoIHRoZSBnaXZlblxuICAgICAqIG1lbWJlcnMuIFRoZSBtaXhpbiBvYmplY3QncyBtZW1iZXJzIGFyZSAqbm90KiBjb3BpZWQgZGlyZWN0bHkgb250byB0aGVcbiAgICAgKiBwcm90b3R5cGUgb2YgdGhlIGJhc2UgY2xhc3MsIGFzIHdpdGggdHJhZGl0aW9uYWwgbWl4aW5zLlxuICAgICAqXG4gICAgICogSW4gYWRkaXRpb24gdG8gcHJvdmlkaW5nIHN5bnRhY3RpYyBzdWdhciwgdGhpcyBtaXhpbiBjYW4gYmUgdXNlZCB0b1xuICAgICAqIGRlZmluZSBhIGNsYXNzIGluIEVTNSwgd2hpY2ggbGFja3MgRVM2J3MgYGNsYXNzYCBrZXl3b3JkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHsuLi5taXhpbnN9IG1peGlucyAtIEEgc2V0IG9mIG1peGluIGZ1bmN0aW9ucyBvciBvYmplY3RzIHRvIGFwcGx5LlxuICAgICAqL1xuICAgIHN0YXRpYyBjb21wb3NlKC4uLm1peGlucykge1xuICAgICAgLy8gV2UgY3JlYXRlIGEgbmV3IHN1YmNsYXNzIGZvciBlYWNoIG1peGluIGluIHR1cm4uIFRoZSByZXN1bHQgYmVjb21lc1xuICAgICAgLy8gdGhlIGJhc2UgY2xhc3MgZXh0ZW5kZWQgYnkgYW55IHN1YnNlcXVlbnQgbWl4aW5zLiBJdCB0dXJucyBvdXQgdGhhdFxuICAgICAgLy8gd2UgY2FuIHVzZSBBcnJheS5yZWR1Y2UoKSB0byBjb25jaXNlbHkgZXhwcmVzcyB0aGlzLCB1c2luZyB0aGUgY3VycmVudFxuICAgICAgLy8gb2JqZWN0IGFzIHRoZSBzZWVkIGZvciByZWR1Y2UoKS5cbiAgICAgIHJldHVybiBtaXhpbnMucmVkdWNlKGNvbXBvc2VDbGFzcywgdGhpcyk7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gQ29tcG9zYWJsZTtcbn07XG5cblxuLy8gUHJvcGVydGllcyBkZWZpbmVkIGJ5IE9iamVjdCB0aGF0IHdlIGRvbid0IHdhbnQgdG8gbWl4aW4uXG5jb25zdCBOT05fTUlYQUJMRV9PQkpFQ1RfUFJPUEVSVElFUyA9IFtcbiAgJ2NvbnN0cnVjdG9yJ1xuXTtcblxuLypcbiAqIEFwcGx5IHRoZSBtaXhpbiB0byB0aGUgZ2l2ZW4gYmFzZSBjbGFzcyB0byByZXR1cm4gYSBuZXcgY2xhc3MuXG4gKiBUaGUgbWl4aW4gY2FuIGVpdGhlciBiZSBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgbW9kaWZpZWQgY2xhc3MsIG9yIGFcbiAqIHBsYWluIG9iamVjdCB3aG9zZSBtZW1iZXJzIHdpbGwgYmUgY29waWVkIHRvIHRoZSBuZXcgY2xhc3MnIHByb3RvdHlwZS5cbiAqL1xuZnVuY3Rpb24gY29tcG9zZUNsYXNzKGJhc2UsIG1peGluKSB7XG4gIGlmICh0eXBlb2YgbWl4aW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBNaXhpbiBmdW5jdGlvblxuICAgIHJldHVybiBtaXhpbihiYXNlKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBNaXhpbiBvYmplY3RcbiAgICBjbGFzcyBTdWJjbGFzcyBleHRlbmRzIGJhc2Uge31cbiAgICBjb3B5T3duUHJvcGVydGllcyhtaXhpbiwgU3ViY2xhc3MucHJvdG90eXBlLCBOT05fTUlYQUJMRV9PQkpFQ1RfUFJPUEVSVElFUyk7XG4gICAgcmV0dXJuIFN1YmNsYXNzO1xuICB9XG59XG5cblxuLypcbiAqIENvcHkgdGhlIGdpdmVuIHByb3BlcnRpZXMvbWV0aG9kcyB0byB0aGUgdGFyZ2V0LlxuICogUmV0dXJuIHRoZSB1cGRhdGVkIHRhcmdldC5cbiAqL1xuZnVuY3Rpb24gY29weU93blByb3BlcnRpZXMoc291cmNlLCB0YXJnZXQsIGlnbm9yZVByb3BlcnR5TmFtZXMgPSBbXSkge1xuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2UpLmZvckVhY2gobmFtZSA9PiB7XG4gICAgaWYgKGlnbm9yZVByb3BlcnR5TmFtZXMuaW5kZXhPZihuYW1lKSA8IDApIHtcbiAgICAgIGxldCBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIG5hbWUpO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHRhcmdldDtcbn1cbiIsImltcG9ydCB0b2dnbGVDbGFzcyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy90b2dnbGVDbGFzcyc7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBDb250ZW50QXNJdGVtcy4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIG1hcHMgY29udGVudCBzZW1hbnRpY3MgKGVsZW1lbnRzKSB0byBsaXN0IGl0ZW0gc2VtYW50aWNzLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGV4cGVjdHMgYSBjb21wb25lbnQgdG8gcHJvdmlkZSBhIGBjb250ZW50YCBwcm9wZXJ0eSByZXR1cm5pbmcgYVxuICAgKiByYXcgc2V0IG9mIGVsZW1lbnRzLiBZb3UgY2FuIHByb3ZpZGUgdGhhdCB5b3Vyc2VsZiwgb3IgdXNlIHRoZVxuICAgKiBbRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudF0oRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudC5tZCkgbWl4aW4uXG4gICAqXG4gICAqIEl0ZW1zIGRpZmZlciBmcm9tIGVsZW1lbnQgY29udGVudHMgaW4gc2V2ZXJhbCB3YXlzOlxuICAgKlxuICAgKiAqIFRoZXkgYXJlIG9mdGVuIHJlZmVyZW5jZWQgdmlhIGluZGV4LlxuICAgKiAqIFRoZXkgbWF5IGhhdmUgYSBzZWxlY3Rpb24gc3RhdGUuXG4gICAqICogSXQncyBjb21tb24gdG8gZG8gd29yayB0byBpbml0aWFsaXplIHRoZSBhcHBlYXJhbmNlIG9yIHN0YXRlIG9mIGEgbmV3XG4gICAqICAgaXRlbS5cbiAgICogKiBBdXhpbGlhcnkgaW52aXNpYmxlIGNoaWxkIGVsZW1lbnRzIGFyZSBmaWx0ZXJlZCBvdXQgYW5kIG5vdCBjb3VudGVkIGFzXG4gICAqICAgaXRlbXMuIEF1eGlsaWFyeSBlbGVtZW50cyBpbmNsdWRlIGxpbmssIHNjcmlwdCwgc3R5bGUsIGFuZCB0ZW1wbGF0ZVxuICAgKiAgIGVsZW1lbnRzLiBUaGlzIGZpbHRlcmluZyBlbnN1cmVzIHRoYXQgdGhvc2UgYXV4aWxpYXJ5IGVsZW1lbnRzIGNhbiBiZVxuICAgKiAgIHVzZWQgaW4gbWFya3VwIGluc2lkZSBvZiBhIGxpc3Qgd2l0aG91dCBiZWluZyB0cmVhdGVkIGFzIGxpc3QgaXRlbXMuXG4gICAqL1xuICBjbGFzcyBDb250ZW50QXNJdGVtcyBleHRlbmRzIGJhc2Uge1xuXG4gICAgLyoqXG4gICAgICogQXBwbHkgdGhlIHNlbGVjdGlvbiBzdGF0ZSB0byBhIHNpbmdsZSBpdGVtLlxuICAgICAqXG4gICAgICogSW52b2tlIHRoaXMgbWV0aG9kIHRvIHNpZ25hbCB0aGF0IHRoZSBzZWxlY3RlZCBzdGF0ZSBvZiB0aGUgaW5kaWNhdGVkIGl0ZW1cbiAgICAgKiBoYXMgY2hhbmdlZC4gQnkgZGVmYXVsdCwgdGhpcyBhcHBsaWVzIGEgYHNlbGVjdGVkYCBDU1MgY2xhc3MgaWYgdGhlIGl0ZW1cbiAgICAgKiBpcyBzZWxlY3RlZCwgYW5kIHJlbW92ZWQgaXQgaWYgbm90IHNlbGVjdGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaXRlbSAtIFRoZSBpdGVtIHdob3NlIHNlbGVjdGlvbiBzdGF0ZSBoYXMgY2hhbmdlZC5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNlbGVjdGVkIC0gVHJ1ZSBpZiB0aGUgaXRlbSBpcyBzZWxlY3RlZCwgZmFsc2UgaWYgbm90LlxuICAgICAqL1xuICAgIGFwcGx5U2VsZWN0aW9uKGl0ZW0sIHNlbGVjdGVkKSB7XG4gICAgICBpZiAoc3VwZXIuYXBwbHlTZWxlY3Rpb24pIHsgc3VwZXIuYXBwbHlTZWxlY3Rpb24oaXRlbSwgc2VsZWN0ZWQpOyB9XG4gICAgICB0b2dnbGVDbGFzcyhpdGVtLCAnc2VsZWN0ZWQnLCBzZWxlY3RlZCk7XG4gICAgfVxuXG4gICAgY29udGVudENoYW5nZWQoKSB7XG4gICAgICBpZiAoc3VwZXIuY29udGVudENoYW5nZWQpIHsgc3VwZXIuY29udGVudENoYW5nZWQoKTsgfVxuICAgICAgdGhpcy5faXRlbXMgPSBudWxsO1xuICAgICAgdGhpcy5pdGVtc0NoYW5nZWQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIHdoZW5ldmVyIGEgbmV3IGl0ZW0gaXMgYWRkZWQgdG8gdGhlIGxpc3QuXG4gICAgICpcbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuIFlvdSBjYW4gb3ZlcnJpZGVcbiAgICAgKiB0aGlzIHRvIHBlcmZvcm0gcGVyLWl0ZW0gaW5pdGlhbGl6YXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpdGVtIC0gVGhlIGl0ZW0gdGhhdCB3YXMgYWRkZWQuXG4gICAgICovXG4gICAgaXRlbUFkZGVkKGl0ZW0pIHtcbiAgICAgIGlmIChzdXBlci5pdGVtQWRkZWQpIHsgc3VwZXIuaXRlbUFkZGVkKGl0ZW0pOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgc2V0IG9mIGl0ZW1zIGluIHRoZSBsaXN0LiBTZWUgdGhlIHRvcC1sZXZlbCBkb2N1bWVudGF0aW9uIGZvclxuICAgICAqIG1peGluIGZvciBhIGRlc2NyaXB0aW9uIG9mIGhvdyBpdGVtcyBkaWZmZXIgZnJvbSBwbGFpbiBjb250ZW50LlxuICAgICAqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50W119XG4gICAgICovXG4gICAgZ2V0IGl0ZW1zKCkge1xuICAgICAgaWYgKHRoaXMuX2l0ZW1zID09IG51bGwpIHtcbiAgICAgICAgdGhpcy5faXRlbXMgPSBmaWx0ZXJBdXhpbGlhcnlFbGVtZW50cyh0aGlzLmNvbnRlbnQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbiB0aGUgdW5kZXJseWluZyBjb250ZW50cyBjaGFuZ2UuIEl0IGlzIGFsc29cbiAgICAgKiBpbnZva2VkIG9uIGNvbXBvbmVudCBpbml0aWFsaXphdGlvbiDigJMgc2luY2UgdGhlIGl0ZW1zIGhhdmUgXCJjaGFuZ2VkXCIgZnJvbVxuICAgICAqIGJlaW5nIG5vdGhpbmcuXG4gICAgICovXG4gICAgaXRlbXNDaGFuZ2VkKCkge1xuICAgICAgaWYgKHN1cGVyLml0ZW1zQ2hhbmdlZCkgeyBzdXBlci5pdGVtc0NoYW5nZWQoKTsgfVxuXG4gICAgICAvLyBQZXJmb3JtIHBlci1pdGVtIGluaXRpYWxpemF0aW9uLlxuICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoIWl0ZW0uX2l0ZW1Jbml0aWFsaXplZCkge1xuICAgICAgICAgIHRoaXMuaXRlbUFkZGVkKGl0ZW0pO1xuICAgICAgICAgIGl0ZW0uX2l0ZW1Jbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdpdGVtcy1jaGFuZ2VkJykpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogQGV2ZW50IGl0ZW1zLWNoYW5nZWRcbiAgICAgKlxuICAgICAqIFRoaXMgZXZlbnQgaXMgcmFpc2VkIHdoZW4gdGhlIHNldCBvZiBpdGVtcyBjaGFuZ2VzLlxuICAgICAqL1xuICB9XG5cbiAgcmV0dXJuIENvbnRlbnRBc0l0ZW1zO1xufTtcblxuXG4vLyBSZXR1cm4gdGhlIGdpdmVuIGVsZW1lbnRzLCBmaWx0ZXJpbmcgb3V0IGF1eGlsaWFyeSBlbGVtZW50cyB0aGF0IGFyZW4ndFxuLy8gdHlwaWNhbGx5IHZpc2libGUuIEl0ZW1zIHdoaWNoIGFyZSBub3QgZWxlbWVudHMgYXJlIHJldHVybmVkIGFzIGlzLlxuZnVuY3Rpb24gZmlsdGVyQXV4aWxpYXJ5RWxlbWVudHMoaXRlbXMpIHtcbiAgbGV0IGF1eGlsaWFyeVRhZ3MgPSBbXG4gICAgJ2xpbmsnLFxuICAgICdzY3JpcHQnLFxuICAgICdzdHlsZScsXG4gICAgJ3RlbXBsYXRlJ1xuICBdO1xuICByZXR1cm4gW10uZmlsdGVyLmNhbGwoaXRlbXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICByZXR1cm4gIWl0ZW0ubG9jYWxOYW1lIHx8IGF1eGlsaWFyeVRhZ3MuaW5kZXhPZihpdGVtLmxvY2FsTmFtZSkgPCAwO1xuICB9KTtcbn1cblxuXG4vKipcbiAqIEZpcmVzIHdoZW4gdGhlIGl0ZW1zIGluIHRoZSBsaXN0IGNoYW5nZS5cbiAqXG4gKiBAbWVtYmVyb2YgQ29udGVudEFzSXRlbXNcbiAqIEBldmVudCBpdGVtcy1jaGFuZ2VkXG4gKi9cbiIsIi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggRGlyZWN0aW9uU2VsZWN0aW9uLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggbWFwcyBkaXJlY3Rpb24gc2VtYW50aWNzIChnb0xlZnQsIGdvUmlnaHQsIGV0Yy4pIHRvIHNlbGVjdGlvblxuICAgKiBzZW1hbnRpY3MgKHNlbGVjdFByZXZpb3VzLCBzZWxlY3ROZXh0LCBldGMuKS5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBjYW4gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZVxuICAgKiBbS2V5Ym9hcmREaXJlY3Rpb25dKEtleWJvYXJkRGlyZWN0aW9uLm1kKSBtaXhpbiAod2hpY2ggbWFwcyBrZXlib2FyZCBldmVudHNcbiAgICogdG8gZGlyZWN0aW9ucykgYW5kIGEgbWl4aW4gdGhhdCBoYW5kbGVzIHNlbGVjdGlvbiBsaWtlXG4gICAqIFtJdGVtc1NlbGVjdGlvbl0oSXRlbXNTZWxlY3Rpb24ubWQpLlxuICAgKi9cbiAgY2xhc3MgRGlyZWN0aW9uU2VsZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBnb0Rvd24oKSB7XG4gICAgICBpZiAoc3VwZXIuZ29Eb3duKSB7IHN1cGVyLmdvRG93bigpOyB9XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3ROZXh0KCk7XG4gICAgfVxuXG4gICAgZ29FbmQoKSB7XG4gICAgICBpZiAoc3VwZXIuZ29FbmQpIHsgc3VwZXIuZ29FbmQoKTsgfVxuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0TGFzdCgpO1xuICAgIH1cblxuICAgIGdvTGVmdCgpIHtcbiAgICAgIGlmIChzdXBlci5nb0xlZnQpIHsgc3VwZXIuZ29MZWZ0KCk7IH1cbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdFByZXZpb3VzKCk7XG4gICAgfVxuXG4gICAgZ29SaWdodCgpIHtcbiAgICAgIGlmIChzdXBlci5nb1JpZ2h0KSB7IHN1cGVyLmdvUmlnaHQoKTsgfVxuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0TmV4dCgpO1xuICAgIH1cblxuICAgIGdvU3RhcnQoKSB7XG4gICAgICBpZiAoc3VwZXIuZ29TdGFydCkgeyBzdXBlci5nb1N0YXJ0KCk7IH1cbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdEZpcnN0KCk7XG4gICAgfVxuXG4gICAgZ29VcCgpIHtcbiAgICAgIGlmIChzdXBlci5nb1VwKSB7IHN1cGVyLmdvVXAoKTsgfVxuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0UHJldmlvdXMoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IGltcGxlbWVudGF0aW9uLiBUaGlzIHdpbGwgdHlwaWNhbGx5IGJlIGhhbmRsZWQgYnkgb3RoZXIgbWl4aW5zLlxuICAgIGdldCBzZWxlY3RlZEZyYWN0aW9uKCkge1xuICAgICAgcmV0dXJuIHN1cGVyLnNlbGVjdGVkRnJhY3Rpb247XG4gICAgfVxuICAgIHNldCBzZWxlY3RlZEZyYWN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoJ3NlbGVjdGVkRnJhY3Rpb24nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkRnJhY3Rpb24gPSB2YWx1ZTsgfVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgaW1wbGVtZW50YXRpb24uIFRoaXMgd2lsbCB0eXBpY2FsbHkgYmUgaGFuZGxlZCBieSBvdGhlciBtaXhpbnMuXG4gICAgc2VsZWN0Rmlyc3QoKSB7XG4gICAgICBpZiAoc3VwZXIuc2VsZWN0Rmlyc3QpIHsgcmV0dXJuIHN1cGVyLnNlbGVjdEZpcnN0KCk7IH1cbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IGltcGxlbWVudGF0aW9uLiBUaGlzIHdpbGwgdHlwaWNhbGx5IGJlIGhhbmRsZWQgYnkgb3RoZXIgbWl4aW5zLlxuICAgIHNlbGVjdExhc3QoKSB7XG4gICAgICBpZiAoc3VwZXIuc2VsZWN0TGFzdCkgeyByZXR1cm4gc3VwZXIuc2VsZWN0TGFzdCgpOyB9XG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCBpbXBsZW1lbnRhdGlvbi4gVGhpcyB3aWxsIHR5cGljYWxseSBiZSBoYW5kbGVkIGJ5IG90aGVyIG1peGlucy5cbiAgICBzZWxlY3ROZXh0KCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdE5leHQpIHsgcmV0dXJuIHN1cGVyLnNlbGVjdE5leHQoKTsgfVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgaW1wbGVtZW50YXRpb24uIFRoaXMgd2lsbCB0eXBpY2FsbHkgYmUgaGFuZGxlZCBieSBvdGhlciBtaXhpbnMuXG4gICAgc2VsZWN0UHJldmlvdXMoKSB7XG4gICAgICBpZiAoc3VwZXIuc2VsZWN0UHJldmlvdXMpIHsgcmV0dXJuIHN1cGVyLnNlbGVjdFByZXZpb3VzKCk7IH1cbiAgICB9XG5cbiAgICAvLyBNYXAgZHJhZyB0cmF2ZWwgZnJhY3Rpb24gdG8gc2VsZWN0aW9uIGZyYWN0aW9uLlxuICAgIGdldCB0cmF2ZWxGcmFjdGlvbigpIHtcbiAgICAgIHJldHVybiBzdXBlci50cmF2ZWxGcmFjdGlvbjtcbiAgICB9XG4gICAgc2V0IHRyYXZlbEZyYWN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoJ3RyYXZlbEZyYWN0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci50cmF2ZWxGcmFjdGlvbiA9IHZhbHVlOyB9XG4gICAgICB0aGlzLnNlbGVjdGVkRnJhY3Rpb24gPSB2YWx1ZTtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBEaXJlY3Rpb25TZWxlY3Rpb247XG59O1xuIiwiLy8gVE9ETzogUmF0aW9uYWxpemUgd2l0aCBuZXcgQ3VzdG9tIEVsZW1lbnRzIEFQSS5cbi8vIFRPRE86IENvbnNpZGVyIHJlbmFtaW5nIHRvIG1hdGNoIEN1c3RvbSBFbGVtZW50cyBBUEkuXG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBEaXN0cmlidXRlZENoaWxkcmVuLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggZGVmaW5lcyBoZWxwZXJzIGZvciBhY2Nlc3NpbmcgYSBjb21wb25lbnQncyBkaXN0cmlidXRlZFxuICAgKiBjaGlsZHJlbiBhcyBhIGZsYXR0ZW5lZCBhcnJheSBvciBzdHJpbmcuXG4gICAqXG4gICAqIFRoZSBzdGFuZGFyZCBET00gQVBJIHByb3ZpZGVzIHNldmVyYWwgd2F5cyBvZiBhY2Nlc3NpbmcgY2hpbGQgY29udGVudDpcbiAgICogYGNoaWxkcmVuYCwgYGNoaWxkTm9kZXNgLCBhbmQgYHRleHRDb250ZW50YC4gTm9uZSBvZiB0aGVzZSBmdW5jdGlvbnMgYXJlXG4gICAqIFNoYWRvdyBET00gYXdhcmUuIFRoaXMgbWl4aW4gZGVmaW5lcyB2YXJpYXRpb25zIG9mIHRob3NlIGZ1bmN0aW9ucyB0aGF0XG4gICAqICphcmUqIFNoYWRvdyBET00gYXdhcmUuXG4gICAqXG4gICAqIEV4YW1wbGU6IHlvdSBjcmVhdGUgYSBjb21wb25lbnQgYDxjb3VudC1jaGlsZHJlbj5gIHRoYXQgZGlzcGxheXMgYSBudW1iZXJcbiAgICogZXF1YWwgdG8gdGhlIG51bWJlciBvZiBjaGlsZHJlbiBwbGFjZWQgaW5zaWRlIHRoYXQgY29tcG9uZW50LiBJZiBzb21lb25lXG4gICAqIGluc3RhbnRpYXRlcyB5b3VyIGNvbXBvbmVudCBsaWtlOlxuICAgKlxuICAgKiAgICAgPGNvdW50LWNoaWxkcmVuPlxuICAgKiAgICAgICA8ZGl2PjwvZGl2PlxuICAgKiAgICAgICA8ZGl2PjwvZGl2PlxuICAgKiAgICAgICA8ZGl2PjwvZGl2PlxuICAgKiAgICAgPC9jb3VudC1jaGlsZHJlbj5cbiAgICpcbiAgICogVGhlbiB0aGUgY29tcG9uZW50IHNob3VsZCBzaG93IFwiM1wiLCBiZWNhdXNlIHRoZXJlIGFyZSB0aHJlZSBjaGlsZHJlbi4gVG9cbiAgICogY2FsY3VsYXRlIHRoZSBudW1iZXIgb2YgY2hpbGRyZW4sIHRoZSBjb21wb25lbnQgY2FuIGp1c3QgY2FsY3VsYXRlXG4gICAqIGB0aGlzLmNoaWxkcmVuLmxlbmd0aGAuIEhvd2V2ZXIsIHN1cHBvc2Ugc29tZW9uZSBpbnN0YW50aWF0ZXMgeW91clxuICAgKiBjb21wb25lbnQgaW5zaWRlIG9uZSBvZiB0aGVpciBvd24gY29tcG9uZW50cywgYW5kIHB1dHMgYSBgPHNsb3Q+YCBlbGVtZW50XG4gICAqIGluc2lkZSB5b3VyIGNvbXBvbmVudDpcbiAgICpcbiAgICogICAgIDxjb3VudC1jaGlsZHJlbj5cbiAgICogICAgICAgPHNsb3Q+PC9zbG90PlxuICAgKiAgICAgPC9jb3VudC1jaGlsZHJlbj5cbiAgICpcbiAgICogSWYgeW91ciBjb21wb25lbnQgb25seSBsb29rcyBhdCBgdGhpcy5jaGlsZHJlbmAsIGl0IHdpbGwgYWx3YXlzIHNlZSBleGFjdGx5XG4gICAqIG9uZSBjaGlsZCDigJTCoHRoZSBgPHNsb3Q+YCBlbGVtZW50LiBCdXQgdGhlIHVzZXIgbG9va2luZyBhdCB0aGUgcGFnZSB3aWxsXG4gICAqICpzZWUqIGFueSBub2RlcyBkaXN0cmlidXRlZCB0byB0aGF0IHNsb3QuIFRvIG1hdGNoIHdoYXQgdGhlIHVzZXIgc2VlcywgeW91clxuICAgKiBjb21wb25lbnQgc2hvdWxkIGV4cGFuZCBhbnkgYDxzbG90PmAgZWxlbWVudHMgaXQgY29udGFpbnMuXG4gICAqXG4gICAqIFRoYXQgaXMgdGhlIHByb2JsZW0gdGhpcyBtaXhpbiBzb2x2ZXMuIEFmdGVyIGFwcGx5aW5nIHRoaXMgbWl4aW4sIHlvdXJcbiAgICogY29tcG9uZW50IGNvZGUgaGFzIGFjY2VzcyB0byBgdGhpcy5kaXN0cmlidXRlZENoaWxkcmVuYCwgd2hvc2UgYGxlbmd0aGBcbiAgICogd2lsbCByZXR1cm4gdGhlIHRvdGFsIG51bWJlciBvZiBhbGwgY2hpbGRyZW4gZGlzdHJpYnV0ZWQgdG8geW91ciBjb21wb25lbnRcbiAgICogaW4gdGhlIGNvbXBvc2VkIHRyZWUuXG4gICAqXG4gICAqIE5vdGU6IFRoZSBsYXRlc3QgQ3VzdG9tIEVsZW1lbnRzIEFQSSBkZXNpZ24gY2FsbHMgZm9yIGEgbmV3IGZ1bmN0aW9uLFxuICAgKiBgZ2V0QXNzaWduZWROb2Rlc2AgdGhhdCB0YWtlcyBhbiBvcHRpb25hbCBgZGVlcGAgcGFyYW1ldGVyLCB0aGF0IHdpbGwgc29sdmVcbiAgICogdGhpcyBwcm9ibGVtIGF0IHRoZSBBUEkgbGV2ZWwuXG4gICAqL1xuICBjbGFzcyBEaXN0cmlidXRlZENoaWxkcmVuIGV4dGVuZHMgYmFzZSB7XG5cbiAgICAvKipcbiAgICAgKiBBbiBpbi1vcmRlciBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuLCBleHBhbmRpbmcgYW55IHNsb3QgZWxlbWVudHMuIExpa2UgdGhlXG4gICAgICogc3RhbmRhcmQgY2hpbGRyZW4gcHJvcGVydHksIHRoaXMgc2tpcHMgdGV4dCBub2Rlcy5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudFtdfVxuICAgICAqL1xuICAgIGdldCBkaXN0cmlidXRlZENoaWxkcmVuKCkge1xuICAgICAgcmV0dXJuIGV4cGFuZENvbnRlbnRFbGVtZW50cyh0aGlzLmNoaWxkcmVuLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQW4gaW4tb3JkZXIgY29sbGVjdGlvbiBvZiBjaGlsZCBub2RlcywgZXhwYW5kaW5nIGFueSBzbG90IGVsZW1lbnRzLiBMaWtlXG4gICAgICogdGhlIHN0YW5kYXJkIGNoaWxkTm9kZXMgcHJvcGVydHksIHRoaXMgaW5jbHVkZXMgdGV4dCBub2Rlcy5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtOb2RlW119XG4gICAgICovXG4gICAgZ2V0IGRpc3RyaWJ1dGVkQ2hpbGROb2RlcygpIHtcbiAgICAgIHJldHVybiBleHBhbmRDb250ZW50RWxlbWVudHModGhpcy5jaGlsZE5vZGVzLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29uY2F0ZW5hdGVkIHRleHQgY29udGVudCBvZiBhbGwgY2hpbGQgbm9kZXMsIGV4cGFuZGluZyBhbnkgc2xvdFxuICAgICAqIGVsZW1lbnRzLlxuICAgICAqXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXQgZGlzdHJpYnV0ZWRUZXh0Q29udGVudCgpIHtcbiAgICAgIGxldCBzdHJpbmdzID0gdGhpcy5kaXN0cmlidXRlZENoaWxkTm9kZXMubWFwKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICAgIHJldHVybiBjaGlsZC50ZXh0Q29udGVudDtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHN0cmluZ3Muam9pbignJyk7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gRGlzdHJpYnV0ZWRDaGlsZHJlbjtcbn07XG5cblxuLypcbiAqIEdpdmVuIGEgYXJyYXkgb2Ygbm9kZXMsIHJldHVybiBhIG5ldyBhcnJheSB3aXRoIGFueSBjb250ZW50IGVsZW1lbnRzIGV4cGFuZGVkXG4gKiB0byB0aGUgbm9kZXMgZGlzdHJpYnV0ZWQgdG8gdGhhdCBjb250ZW50IGVsZW1lbnQuIFRoaXMgcnVsZSBpcyBhcHBsaWVkXG4gKiByZWN1cnNpdmVseS5cbiAqXG4gKiBJZiBpbmNsdWRlVGV4dE5vZGVzIGlzIHRydWUsIHRleHQgbm9kZXMgd2lsbCBiZSBpbmNsdWRlZCwgYXMgaW4gdGhlXG4gKiBzdGFuZGFyZCBjaGlsZE5vZGVzIHByb3BlcnR5OyBieSBkZWZhdWx0LCB0aGlzIHNraXBzIHRleHQgbm9kZXMsIGxpa2UgdGhlXG4gKiBzdGFuZGFyZCBjaGlsZHJlbiBwcm9wZXJ0eS5cbiAqL1xuZnVuY3Rpb24gZXhwYW5kQ29udGVudEVsZW1lbnRzKG5vZGVzLCBpbmNsdWRlVGV4dE5vZGVzKSB7XG4gIGxldCBleHBhbmRlZCA9IEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChub2Rlcywgbm9kZSA9PiB7XG4gICAgLy8gV2Ugd2FudCB0byBzZWUgaWYgdGhlIG5vZGUgaXMgYW4gaW5zdGFuY2VvZiBIVE1MU2xvdEVMZW1lbnQsIGJ1dFxuICAgIC8vIHRoYXQgY2xhc3Mgd29uJ3QgZXhpc3QgaWYgdGhlIGJyb3dzZXIgdGhhdCBkb2Vzbid0IHN1cHBvcnQgbmF0aXZlXG4gICAgLy8gU2hhZG93IERPTSBhbmQgaWYgdGhlIFNoYWRvdyBET00gcG9seWZpbGwgaGFzbid0IGJlZW4gbG9hZGVkLiBJbnN0ZWFkLFxuICAgIC8vIHdlIGRvIGEgc2ltcGxpc3RpYyBjaGVjayB0byBzZWUgaWYgdGhlIHRhZyBuYW1lIGlzIFwic2xvdFwiIG9yIFwiY29udGVudFwiLlxuICAgIGlmIChub2RlLmxvY2FsTmFtZSAmJiAobm9kZS5sb2NhbE5hbWUgPT09IFwic2xvdFwiIHx8IG5vZGUubG9jYWxOYW1lID09PSBcImNvbnRlbnRcIikpIHtcbiAgICAgIC8vIGNvbnRlbnQgZWxlbWVudDsgdXNlIGl0cyBkaXN0cmlidXRlZCBub2RlcyBpbnN0ZWFkLlxuICAgICAgbGV0IGRpc3RyaWJ1dGVkTm9kZXMgPSBub2RlLmdldERpc3RyaWJ1dGVkTm9kZXMoKTtcbiAgICAgIHJldHVybiBkaXN0cmlidXRlZE5vZGVzID9cbiAgICAgICAgZXhwYW5kQ29udGVudEVsZW1lbnRzKGRpc3RyaWJ1dGVkTm9kZXMsIGluY2x1ZGVUZXh0Tm9kZXMpIDpcbiAgICAgICAgW107XG4gICAgfSBlbHNlIGlmIChub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIC8vIFBsYWluIGVsZW1lbnQ7IHVzZSBhcyBpcy5cbiAgICAgIHJldHVybiBbbm9kZV07XG4gICAgfSBlbHNlIGlmIChub2RlIGluc3RhbmNlb2YgVGV4dCAmJiBpbmNsdWRlVGV4dE5vZGVzKSB7XG4gICAgICAvLyBUZXh0IG5vZGUuXG4gICAgICByZXR1cm4gW25vZGVdO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDb21tZW50LCBwcm9jZXNzaW5nIGluc3RydWN0aW9uLCBldGMuOyBza2lwLlxuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfSk7XG4gIGxldCBmbGF0dGVuZWQgPSBbXS5jb25jYXQoLi4uZXhwYW5kZWQpO1xuICByZXR1cm4gZmxhdHRlbmVkO1xufVxuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50LiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggZGVmaW5lcyBhIGNvbXBvbmVudCdzIGNvbnRlbnQgYXMgaXRzIGNoaWxkcmVuLCBleHBhbmRpbmcgYW55XG4gICAqIG5vZGVzIGRpc3RyaWJ1dGVkIHRvIHRoZSBjb21wb25lbnQncyBzbG90cy5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBpcyBpbnRlbmRlZCBmb3IgdXNlIHdpdGggdGhlXG4gICAqIFtEaXN0cmlidXRlZENoaWxkcmVuXShEaXN0cmlidXRlZENoaWxkcmVuLm1kKSBtaXhpbi4gU2VlIHRoYXQgbWl4aW4gZm9yIGFcbiAgICogZGlzY3Vzc2lvbiBvZiBob3cgdGhhdCB3b3Jrcy4gVGhpcyBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50IG1peGluXG4gICAqIHByb3ZpZGVzIGFuIGVhc3kgd2F5IG9mIGRlZmluaW5nIHRoZSBcImNvbnRlbnRcIiBvZiBhIGNvbXBvbmVudCBhcyB0aGVcbiAgICogY29tcG9uZW50J3MgZGlzdHJpYnV0ZWQgY2hpbGRyZW4uIFRoYXQgaW4gdHVybiBsZXRzIG1peGlucyBsaWtlXG4gICAqIFtDb250ZW50QXNJdGVtc10oQ29udGVudEFzSXRlbXMubWQpIG1hbmlwdWxhdGUgdGhlIGNoaWxkcmVuIGFzIGxpc3QgaXRlbXMuXG4gICAqL1xuICBjbGFzcyBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50IGV4dGVuZHMgYmFzZSB7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29udGVudCBvZiB0aGlzIGNvbXBvbmVudCwgZGVmaW5lZCB0byBiZSB0aGUgZmxhdHRlbmVkIGFycmF5IG9mXG4gICAgICogY2hpbGRyZW4gZGlzdHJpYnV0ZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudFtdfVxuICAgICAqL1xuICAgIGdldCBjb250ZW50KCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGlzdHJpYnV0ZWRDaGlsZHJlbjtcbiAgICB9XG4gICAgc2V0IGNvbnRlbnQodmFsdWUpIHtcbiAgICAgIGlmICgnY29udGVudCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuY29udGVudCA9IHZhbHVlOyB9XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudDtcbn07XG4iLCJpbXBvcnQgbWljcm90YXNrIGZyb20gJy4vbWljcm90YXNrJztcblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBJdGVtc1NlbGVjdGlvbi4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIG1hbmFnZXMgc2luZ2xlLXNlbGVjdGlvbiBzZW1hbnRpY3MgZm9yIGl0ZW1zIGluIGEgbGlzdC5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIGEgY29tcG9uZW50IHRvIHByb3ZpZGUgYW4gYGl0ZW1zYCBhcnJheSBvZiBhbGwgZWxlbWVudHNcbiAgICogaW4gdGhlIGxpc3QuIEEgc3RhbmRhcmQgd2F5IHRvIGRvIHRoYXQgd2l0aCBpcyB0aGVcbiAgICogW0NvbnRlbnRBc0l0ZW1zXShDb250ZW50QXNJdGVtcy5tZCkgbWl4aW4sIHdoaWNoIHRha2VzIGEgY29tcG9uZW50J3NcbiAgICogY29udGVudCAodHlwaWNhbGx5IGl0cyBkaXN0cmlidXRlZCBjaGlsZHJlbikgYXMgdGhlIHNldCBvZiBsaXN0IGl0ZW1zOyBzZWVcbiAgICogdGhhdCBtaXhpbiBmb3IgZGV0YWlscy5cbiAgICpcbiAgICogVGhpcyBtaXhpbiB0cmFja3MgYSBzaW5nbGUgc2VsZWN0ZWQgaXRlbSBpbiB0aGUgbGlzdCwgYW5kIHByb3ZpZGVzIG1lYW5zIHRvXG4gICAqIGdldCBhbmQgc2V0IHRoYXQgc3RhdGUgYnkgaXRlbSBwb3NpdGlvbiAoYHNlbGVjdGVkSW5kZXhgKSBvciBpdGVtIGlkZW50aXR5XG4gICAqIChgc2VsZWN0ZWRJdGVtYCkuIFRoZSBzZWxlY3Rpb24gY2FuIGJlIG1vdmVkIGluIHRoZSBsaXN0IHZpYSB0aGUgbWV0aG9kc1xuICAgKiBgc2VsZWN0Rmlyc3RgLCBgc2VsZWN0TGFzdGAsIGBzZWxlY3ROZXh0YCwgYW5kIGBzZWxlY3RQcmV2aW91c2AuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZG9lcyBub3QgcHJvZHVjZSBhbnkgdXNlci12aXNpYmxlIGVmZmVjdHMgdG8gcmVwcmVzZW50XG4gICAqIHNlbGVjdGlvbi4gT3RoZXIgbWl4aW5zLCBzdWNoIGFzXG4gICAqIFtTZWxlY3Rpb25BcmlhQWN0aXZlXShTZWxlY3Rpb25BcmlhQWN0aXZlLm1kKSxcbiAgICogW1NlbGVjdGlvbkhpZ2hsaWdodF0oU2VsZWN0aW9uSGlnaGxpZ2h0Lm1kKSBhbmRcbiAgICogW1NlbGVjdGlvbkluVmlld10oU2VsZWN0aW9uSW5WaWV3Lm1kKSwgbW9kaWZ5IHRoZSBzZWxlY3RlZCBpdGVtIGluIGNvbW1vblxuICAgKiB3YXlzIHRvIGxldCB0aGUgdXNlciBrbm93IGEgZ2l2ZW4gaXRlbSBpcyBzZWxlY3RlZCBvciBub3Qgc2VsZWN0ZWQuXG4gICAqL1xuICBjbGFzcyBJdGVtc1NlbGVjdGlvbiBleHRlbmRzIGJhc2Uge1xuXG4gICAgLyoqXG4gICAgICogQXBwbHkgdGhlIGluZGljYXRlIHNlbGVjdGlvbiBzdGF0ZSB0byB0aGUgaXRlbS5cbiAgICAgKlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy4gVXNlci12aXNpYmxlXG4gICAgICogZWZmZWN0cyB3aWxsIHR5cGljYWxseSBiZSBoYW5kbGVkIGJ5IG90aGVyIG1peGlucy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGl0ZW0gLSB0aGUgaXRlbSBiZWluZyBzZWxlY3RlZC9kZXNlbGVjdGVkXG4gICAgICogQHBhcmFtIHtib29sZWFufSBzZWxlY3RlZCAtIHRydWUgaWYgdGhlIGl0ZW0gaXMgc2VsZWN0ZWQsIGZhbHNlIGlmIG5vdFxuICAgICAqL1xuICAgIGFwcGx5U2VsZWN0aW9uKGl0ZW0sIHNlbGVjdGVkKSB7XG4gICAgICBpZiAoc3VwZXIuYXBwbHlTZWxlY3Rpb24pIHsgc3VwZXIuYXBwbHlTZWxlY3Rpb24oaXRlbSwgc2VsZWN0ZWQpOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiB0aGUgc2VsZWN0aW9uIGNhbiBiZSBtb3ZlZCB0byB0aGUgbmV4dCBpdGVtLCBmYWxzZSBpZiBub3QgKHRoZVxuICAgICAqIHNlbGVjdGVkIGl0ZW0gaXMgdGhlIGxhc3QgaXRlbSBpbiB0aGUgbGlzdCkuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBnZXQgY2FuU2VsZWN0TmV4dCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jYW5TZWxlY3ROZXh0O1xuICAgIH1cbiAgICBzZXQgY2FuU2VsZWN0TmV4dChjYW5TZWxlY3ROZXh0KSB7XG4gICAgICBpZiAoJ2NhblNlbGVjdE5leHQnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLmNhblNlbGVjdE5leHQgPSBjYW5TZWxlY3ROZXh0OyB9XG4gICAgICB0aGlzLl9jYW5TZWxlY3ROZXh0ID0gY2FuU2VsZWN0TmV4dDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHRoZSBzZWxlY3Rpb24gY2FuIGJlIG1vdmVkIHRvIHRoZSBwcmV2aW91cyBpdGVtLCBmYWxzZSBpZiBub3RcbiAgICAgKiAodGhlIHNlbGVjdGVkIGl0ZW0gaXMgdGhlIGZpcnN0IG9uZSBpbiB0aGUgbGlzdCkuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBnZXQgY2FuU2VsZWN0UHJldmlvdXMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY2FuU2VsZWN0UHJldmlvdXM7XG4gICAgfVxuICAgIHNldCBjYW5TZWxlY3RQcmV2aW91cyhjYW5TZWxlY3RQcmV2aW91cykge1xuICAgICAgaWYgKCdjYW5TZWxlY3RQcmV2aW91cycgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuY2FuU2VsZWN0UHJldmlvdXMgPSBjYW5TZWxlY3RQcmV2aW91czsgfVxuICAgICAgdGhpcy5fY2FuU2VsZWN0UHJldmlvdXMgPSBjYW5TZWxlY3RQcmV2aW91cztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgYSBuZXcgaXRlbSBiZWluZyBhZGRlZCB0byB0aGUgbGlzdC5cbiAgICAgKlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIHNpbXBseSBzZXRzIHRoZSBpdGVtJ3NcbiAgICAgKiBzZWxlY3Rpb24gc3RhdGUgdG8gZmFsc2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpdGVtIC0gdGhlIGl0ZW0gYmVpbmcgYWRkZWRcbiAgICAgKi9cbiAgICBpdGVtQWRkZWQoaXRlbSkge1xuICAgICAgaWYgKHN1cGVyLml0ZW1BZGRlZCkgeyBzdXBlci5pdGVtQWRkZWQoaXRlbSk7IH1cbiAgICAgIHRoaXMuYXBwbHlTZWxlY3Rpb24oaXRlbSwgaXRlbSA9PT0gdGhpcy5zZWxlY3RlZEl0ZW0pO1xuICAgIH1cblxuICAgIGl0ZW1zQ2hhbmdlZCgpIHtcbiAgICAgIGlmIChzdXBlci5pdGVtc0NoYW5nZWQpIHsgc3VwZXIuaXRlbXNDaGFuZ2VkKCk7IH1cblxuICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uUmVxdWlyZWQpIHtcbiAgICAgICAgLy8gRW5zdXJlIHNlbGVjdGlvbiwgYnV0IGRvIHRoaXMgaW4gdGhlIG5leHQgdGljayB0byBnaXZlIG90aGVyIG1peGlucyBhXG4gICAgICAgIC8vIGNoYW5jZSB0byBkbyB0aGVpciBvd24gaXRlbXNDaGFuZ2VkIHdvcmsuXG4gICAgICAgIG1pY3JvdGFzaygoKSA9PiB7XG4gICAgICAgICAgZW5zdXJlU2VsZWN0aW9uKHRoaXMpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNoYW5nZSBpbiBpdGVtcyBtYXkgaGF2ZSBhZmZlY3RlZCB3aGljaCBuYXZpZ2F0aW9ucyBhcmUgcG9zc2libGUuXG4gICAgICB1cGRhdGVQb3NzaWJsZU5hdmlnYXRpb25zKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBpbmRleCBvZiB0aGUgaXRlbSB3aGljaCBpcyBjdXJyZW50bHkgc2VsZWN0ZWQuXG4gICAgICpcbiAgICAgKiBJZiBgc2VsZWN0aW9uV3JhcHNgIGlzIGZhbHNlLCB0aGUgaW5kZXggaXMgLTEgaWYgdGhlcmUgaXMgbm8gc2VsZWN0aW9uLlxuICAgICAqIEluIHRoYXQgY2FzZSwgc2V0dGluZyB0aGUgaW5kZXggdG8gLTEgd2lsbCBkZXNlbGVjdCBhbnlcbiAgICAgKiBjdXJyZW50bHktc2VsZWN0ZWQgaXRlbS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGVkSW5kZXgoKSB7XG4gICAgICBsZXQgc2VsZWN0ZWRJdGVtID0gdGhpcy5zZWxlY3RlZEl0ZW07XG5cbiAgICAgIC8vIFRPRE86IElmIHNlbGVjdGlvbiB3YXNuJ3QgZm91bmQsIG1vc3QgbGlrZWx5IGNhdXNlIGlzIHRoYXQgdGhlIERPTSB3YXNcbiAgICAgIC8vIG1hbmlwdWxhdGVkIGZyb20gdW5kZXJuZWF0aCB1cy4gT25jZSB3ZSB0cmFjayBjb250ZW50IGNoYW5nZXMsIHR1cm5cbiAgICAgIC8vIHRoaXMgaW50byBhIHdhcm5pbmcuXG4gICAgICAvLyBUT0RPOiBNZW1vaXplXG4gICAgICByZXR1cm4gc2VsZWN0ZWRJdGVtID9cbiAgICAgICAgdGhpcy5pdGVtcy5pbmRleE9mKHNlbGVjdGVkSXRlbSkgOlxuICAgICAgICAtMTtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGVkSW5kZXgoaW5kZXgpIHtcbiAgICAgIGlmICgnc2VsZWN0ZWRJbmRleCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJbmRleCA9IGluZGV4OyB9XG4gICAgICBsZXQgaXRlbXMgPSB0aGlzLml0ZW1zO1xuICAgICAgbGV0IGl0ZW07XG4gICAgICBpZiAoaW5kZXggPCAwIHx8IGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpdGVtID0gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGl0ZW0gPSBpdGVtc1tpbmRleF07XG4gICAgICB9XG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IGl0ZW07XG5cbiAgICAgIGxldCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnc2VsZWN0ZWQtaW5kZXgtY2hhbmdlZCcsIHtcbiAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgc2VsZWN0ZWRJbmRleDogaW5kZXgsXG4gICAgICAgICAgdmFsdWU6IGluZGV4IC8vIGZvciBQb2x5bWVyIGJpbmRpbmdcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgaXRlbSwgb3IgbnVsbCBpZiB0aGVyZSBpcyBubyBzZWxlY3Rpb24uXG4gICAgICpcbiAgICAgKiBTZXR0aW5nIHRoaXMgcHJvcGVydHkgdG8gbnVsbCBkZXNlbGVjdHMgYW55IGN1cnJlbnRseS1zZWxlY3RlZCBpdGVtLlxuICAgICAqXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0ZWRJdGVtKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSXRlbSB8fCBudWxsO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0ZWRJdGVtKGl0ZW0pIHtcbiAgICAgIGlmICgnc2VsZWN0ZWRJdGVtJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEl0ZW0gPSBpdGVtOyB9XG4gICAgICBsZXQgcHJldmlvdXNJdGVtID0gdGhpcy5fc2VsZWN0ZWRJdGVtO1xuICAgICAgaWYgKHByZXZpb3VzSXRlbSkge1xuICAgICAgICBpZiAoaXRlbSA9PT0gcHJldmlvdXNJdGVtKSB7XG4gICAgICAgICAgLy8gVGhlIGluZGljYXRlZCBpdGVtIGlzIGFscmVhZHkgdGhlIHNlbGVjdGVkIGl0ZW0uXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJlbW92ZSBwcmV2aW91cyBzZWxlY3Rpb24uXG4gICAgICAgIHRoaXMuYXBwbHlTZWxlY3Rpb24ocHJldmlvdXNJdGVtLCBmYWxzZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFRPRE86IENvbmZpcm0gaXRlbSBpcyBhY3R1YWxseSBpbiB0aGUgbGlzdCBiZWZvcmUgc2VsZWN0aW5nLlxuICAgICAgdGhpcy5fc2VsZWN0ZWRJdGVtID0gaXRlbTtcbiAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgIHRoaXMuYXBwbHlTZWxlY3Rpb24oaXRlbSwgdHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFRPRE86IFJhdGlvbmFsaXplIHdpdGggc2VsZWN0ZWRJbmRleCBzbyB3ZSdyZSBub3QgcmVjYWxjdWxhdGluZyBpdGVtXG4gICAgICAvLyBvciBpbmRleCBpbiBlYWNoIHNldHRlci5cbiAgICAgIHVwZGF0ZVBvc3NpYmxlTmF2aWdhdGlvbnModGhpcyk7XG5cbiAgICAgIGxldCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnc2VsZWN0ZWQtaXRlbS1jaGFuZ2VkJywge1xuICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICBzZWxlY3RlZEl0ZW06IGl0ZW0sXG4gICAgICAgICAgcHJldmlvdXNJdGVtOiBwcmV2aW91c0l0ZW0sXG4gICAgICAgICAgdmFsdWU6IGl0ZW0gLy8gZm9yIFBvbHltZXIgYmluZGluZ1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IHRoZSBmaXJzdCBpdGVtIGluIHRoZSBsaXN0LlxuICAgICAqL1xuICAgIHNlbGVjdEZpcnN0KCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdEZpcnN0KSB7IHN1cGVyLnNlbGVjdEZpcnN0KCk7IH1cbiAgICAgIHJldHVybiBzZWxlY3RJbmRleCh0aGlzLCAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHRoZSBsaXN0IHNob3VsZCBhbHdheXMgaGF2ZSBhIHNlbGVjdGlvbiAoaWYgaXQgaGFzIGl0ZW1zKS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIGdldCBzZWxlY3Rpb25SZXF1aXJlZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zZWxlY3Rpb25SZXF1aXJlZDtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGlvblJlcXVpcmVkKHNlbGVjdGlvblJlcXVpcmVkKSB7XG4gICAgICBpZiAoJ3NlbGVjdGlvblJlcXVpcmVkJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3Rpb25SZXF1aXJlZCA9IHNlbGVjdGlvblJlcXVpcmVkOyB9XG4gICAgICB0aGlzLl9zZWxlY3Rpb25SZXF1aXJlZCA9IHNlbGVjdGlvblJlcXVpcmVkO1xuICAgICAgaWYgKHNlbGVjdGlvblJlcXVpcmVkKSB7XG4gICAgICAgIGVuc3VyZVNlbGVjdGlvbih0aGlzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgdGhlIGxhc3QgaXRlbSBpbiB0aGUgbGlzdC5cbiAgICAgKi9cbiAgICBzZWxlY3RMYXN0KCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdExhc3QpIHsgc3VwZXIuc2VsZWN0TGFzdCgpOyB9XG4gICAgICByZXR1cm4gc2VsZWN0SW5kZXgodGhpcywgdGhpcy5pdGVtcy5sZW5ndGggLSAxKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgdGhlIG5leHQgaXRlbSBpbiB0aGUgbGlzdC5cbiAgICAgKi9cbiAgICBzZWxlY3ROZXh0KCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdE5leHQpIHsgc3VwZXIuc2VsZWN0TmV4dCgpOyB9XG4gICAgICByZXR1cm4gc2VsZWN0SW5kZXgodGhpcywgdGhpcy5zZWxlY3RlZEluZGV4ICsgMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IHRoZSBwcmV2aW91cyBpdGVtIGluIHRoZSBsaXN0LlxuICAgICAqL1xuICAgIHNlbGVjdFByZXZpb3VzKCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdFByZXZpb3VzKSB7IHN1cGVyLnNlbGVjdFByZXZpb3VzKCk7IH1cbiAgICAgIHJldHVybiBzZWxlY3RJbmRleCh0aGlzLCB0aGlzLnNlbGVjdGVkSW5kZXggLSAxKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHNlbGVjdGlvbiBuYXZpZ2F0aW9ucyB3cmFwIGZyb20gbGFzdCB0byBmaXJzdCwgYW5kIHZpY2UgdmVyc2EuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAZGVmYXVsdCB7ZmFsc2V9XG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGlvbldyYXBzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGlvbldyYXBzIHx8IGZhbHNlO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0aW9uV3JhcHModmFsdWUpIHtcbiAgICAgIGlmICgnc2VsZWN0aW9uV3JhcHMnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGlvbldyYXBzID0gdmFsdWU7IH1cbiAgICAgIHRoaXMuX3NlbGVjdGlvbldyYXBzID0gU3RyaW5nKHZhbHVlKSA9PT0gJ3RydWUnO1xuICAgICAgdXBkYXRlUG9zc2libGVOYXZpZ2F0aW9ucyh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaXJlcyB3aGVuIHRoZSBzZWxlY3RlZEl0ZW0gcHJvcGVydHkgY2hhbmdlcy5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBJdGVtc1NlbGVjdGlvblxuICAgICAqIEBldmVudCBzZWxlY3RlZC1pdGVtLWNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBkZXRhaWwuc2VsZWN0ZWRJdGVtIFRoZSBuZXcgc2VsZWN0ZWQgaXRlbS5cbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBkZXRhaWwucHJldmlvdXNJdGVtIFRoZSBwcmV2aW91c2x5IHNlbGVjdGVkIGl0ZW0uXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBGaXJlcyB3aGVuIHRoZSBzZWxlY3RlZEluZGV4IHByb3BlcnR5IGNoYW5nZXMuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgSXRlbXNTZWxlY3Rpb25cbiAgICAgKiBAZXZlbnQgc2VsZWN0ZWQtaW5kZXgtY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkZXRhaWwuc2VsZWN0ZWRJbmRleCBUaGUgbmV3IHNlbGVjdGVkIGluZGV4LlxuICAgICAqL1xuXG4gIH1cblxuICByZXR1cm4gSXRlbXNTZWxlY3Rpb247XG59O1xuXG5cbi8vIElmIG5vIGl0ZW0gaXMgc2VsZWN0ZWQsIHNlbGVjdCBhIGRlZmF1bHQgaXRlbS5cbmZ1bmN0aW9uIGVuc3VyZVNlbGVjdGlvbihlbGVtZW50KSB7XG4gIGxldCBpbmRleCA9IGVsZW1lbnQuc2VsZWN0ZWRJbmRleDtcbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIC8vIFNlbGVjdGVkIGl0ZW0gaXMgbm8gbG9uZ2VyIGluIHRoZSBjdXJyZW50IHNldCBvZiBpdGVtcy5cbiAgICBpZiAoZWxlbWVudC5pdGVtcyAmJiBlbGVtZW50Lml0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIFNlbGVjdCB0aGUgZmlyc3QgaXRlbS5cbiAgICAgIC8vIFRPRE86IElmIHRoZSBwcmV2aW91c2x5LXNlbGVjdGVkIGl0ZW0gaGFzIGJlZW4gZGVsZXRlZCwgdHJ5IHRvIHNlbGVjdFxuICAgICAgLy8gYW4gaXRlbSBhZGphY2VudCB0byB0aGUgcG9zaXRpb24gaXQgaGVsZC5cbiAgICAgIGVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE5vIGl0ZW1zIGZvciB1cyB0byBzZWxlY3QsIGJ1dCB3ZSBjYW4gYXQgbGVhc3Qgc2lnbmFsIHRoYXQgdGhlcmUncyBub1xuICAgICAgLy8gbG9uZ2VyIGEgc2VsZWN0aW9uLlxuICAgICAgZWxlbWVudC5zZWxlY3RlZEl0ZW0gPSBudWxsO1xuICAgIH1cbiAgfVxufVxuXG4vLyBFbnN1cmUgdGhlIGdpdmVuIGluZGV4IGlzIHdpdGhpbiBib3VuZHMsIGFuZCBzZWxlY3QgaXQgaWYgaXQncyBub3QgYWxyZWFkeVxuLy8gc2VsZWN0ZWQuXG5mdW5jdGlvbiBzZWxlY3RJbmRleChlbGVtZW50LCBpbmRleCkge1xuICBsZXQgY291bnQgPSBlbGVtZW50Lml0ZW1zLmxlbmd0aDtcbiAgbGV0IGJvdW5kZWRJbmRleDtcbiAgaWYgKGVsZW1lbnQuc2VsZWN0aW9uV3JhcHMpIHtcbiAgICAvLyBKYXZhU2NyaXB0IG1vZCBkb2Vzbid0IGhhbmRsZSBuZWdhdGl2ZSBudW1iZXJzIHRoZSB3YXkgd2Ugd2FudCB0byB3cmFwLlxuICAgIC8vIFNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xODYxODI1MC83NjQ3MlxuICAgIGJvdW5kZWRJbmRleCA9ICgoaW5kZXggJSBjb3VudCkgKyBjb3VudCkgJSBjb3VudDtcbiAgfSBlbHNlIHtcbiAgICAvLyBLZWVwIGluZGV4IHdpdGhpbiBib3VuZHMgb2YgYXJyYXkuXG4gICAgYm91bmRlZEluZGV4ID0gTWF0aC5tYXgoTWF0aC5taW4oaW5kZXgsIGNvdW50IC0gMSksIDApO1xuICB9XG4gIGxldCBwcmV2aW91c0luZGV4ID0gZWxlbWVudC5zZWxlY3RlZEluZGV4O1xuICBpZiAocHJldmlvdXNJbmRleCAhPT0gYm91bmRlZEluZGV4KSB7XG4gICAgZWxlbWVudC5zZWxlY3RlZEluZGV4ID0gYm91bmRlZEluZGV4O1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG4vLyBGb2xsb3dpbmcgYSBjaGFuZ2UgaW4gc2VsZWN0aW9uLCByZXBvcnQgd2hldGhlciBpdCdzIG5vdyBwb3NzaWJsZSB0b1xuLy8gZ28gbmV4dC9wcmV2aW91cyBmcm9tIHRoZSBnaXZlbiBpbmRleC5cbmZ1bmN0aW9uIHVwZGF0ZVBvc3NpYmxlTmF2aWdhdGlvbnMoZWxlbWVudCkge1xuICBsZXQgY2FuU2VsZWN0TmV4dDtcbiAgbGV0IGNhblNlbGVjdFByZXZpb3VzO1xuICBsZXQgaXRlbXMgPSBlbGVtZW50Lml0ZW1zO1xuICBpZiAoaXRlbXMgPT0gbnVsbCB8fCBpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAvLyBObyBpdGVtcyB0byBzZWxlY3QuXG4gICAgY2FuU2VsZWN0TmV4dCA9IGZhbHNlO1xuICAgIGNhblNlbGVjdFByZXZpb3VzID0gZmFsc2U7XG4gIH0gaWYgKGVsZW1lbnQuc2VsZWN0aW9uV3JhcHMpIHtcbiAgICAvLyBTaW5jZSB0aGVyZSBhcmUgaXRlbXMsIGNhbiBhbHdheXMgZ28gbmV4dC9wcmV2aW91cy5cbiAgICBjYW5TZWxlY3ROZXh0ID0gdHJ1ZTtcbiAgICBjYW5TZWxlY3RQcmV2aW91cyA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgbGV0IGluZGV4ID0gZWxlbWVudC5zZWxlY3RlZEluZGV4O1xuICAgIGlmIChpbmRleCA8IDAgJiYgaXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgLy8gU3BlY2lhbCBjYXNlLiBJZiB0aGVyZSBhcmUgaXRlbXMgYnV0IG5vIHNlbGVjdGlvbiwgZGVjbGFyZSB0aGF0IGl0J3NcbiAgICAgIC8vIGFsd2F5cyBwb3NzaWJsZSB0byBnbyBuZXh0L3ByZXZpb3VzIHRvIGNyZWF0ZSBhIHNlbGVjdGlvbi5cbiAgICAgIGNhblNlbGVjdE5leHQgPSB0cnVlO1xuICAgICAgY2FuU2VsZWN0UHJldmlvdXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBOb3JtYWwgY2FzZTogd2UgaGF2ZSBhbiBpbmRleCBpbiBhIGxpc3QgdGhhdCBoYXMgaXRlbXMuXG4gICAgICBjYW5TZWxlY3RQcmV2aW91cyA9IChpbmRleCA+IDApO1xuICAgICAgY2FuU2VsZWN0TmV4dCA9IChpbmRleCA8IGl0ZW1zLmxlbmd0aCAtIDEpO1xuICAgIH1cbiAgfVxuICBlbGVtZW50LmNhblNlbGVjdE5leHQgPSBjYW5TZWxlY3ROZXh0O1xuICBlbGVtZW50LmNhblNlbGVjdFByZXZpb3VzID0gY2FuU2VsZWN0UHJldmlvdXM7XG59XG4iLCJpbXBvcnQgbWljcm90YXNrIGZyb20gJy4vbWljcm90YXNrJztcblxuLy8gVE9ETzogU2hvdWxkIHRoaXMgYmUgcmVuYW1lZCB0byBzb21ldGhpbmcgbGlrZSBEaXN0cmlidXRlZENoaWxkcmVuQ2hhbmdlZD9cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBPYnNlcnZlQ29udGVudENoYW5nZXMuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCB3aXJlcyB1cCBtdXRhdGlvbiBvYnNlcnZlcnMgdG8gcmVwb3J0IGFueSBjaGFuZ2VzIGluIGFcbiAgICogY29tcG9uZW50J3MgY29udGVudCAoZGlyZWN0IGNoaWxkcmVuLCBvciBub2RlcyBkaXN0cmlidXRlZCB0byBzbG90cykuXG4gICAqXG4gICAqIEZvciB0aGUgdGltZSBiZWluZywgdGhpcyBjYW4gb25seSBzdXBwb3J0IGEgc2luZ2xlIGxldmVsIG9mIGRpc3RyaWJ1dGVkXG4gICAqIGNvbnRlbnQuIFRoYXQgaXMsIGlmIGEgY29tcG9uZW50IGNvbnRhaW5zIGEgc2xvdCwgYW5kIHRoZSBzZXQgb2Ygbm9kZXNcbiAgICogZGlyZWN0bHkgYXNzaWduZWQgdG8gdGhhdCBzbG90IGNoYW5nZXMsIHRoZW4gdGhpcyBtaXhpbiB3aWxsIGRldGVjdCB0aGVcbiAgICogY2hhbmdlLiBIb3dldmVyLCB0aGlzIG1peGluIGRvZXMgbm90IHlldCBkZXRlY3QgY2hhbmdlcyBpbiByZXByb2plY3RlZFxuICAgKiBub2Rlcy4gSWYgYSBjb21wb25lbnQncyBob3N0IHBsYWNlcyBhIHNsb3QgYXMgYSBjaGlsZCBvZiB0aGUgY29tcG9uZW50XG4gICAqIGluc3RhbmNlLCBub2RlcyBhc3NpZ25lZCB0byB0aGUgb3V0ZXIgaG9zdCB3aWxsIGJlIGFzc2lnbmVkIHRvIHRoZSBob3N0J3NcbiAgICogc2xvdCwgdGhlbiByZWFzc2lnbmVkIHRvIHRoZSBzbG90IGVsZW1lbnQgaW5zaWRlIHRoZSBjb21wb25lbnQuIENoYW5nZXMgaW5cbiAgICogc3VjaCByZXByb2plY3RlZCBub2RlcyB3aWxsIG5vdCAoeWV0KSBiZSBkZXRlY3RlZCBieSB0aGlzIG1peGluLlxuICAgKlxuICAgKiBGb3IgY29tcGFyaXNvbiwgc2VlIFBvbHltZXIncyBvYnNlcnZlTm9kZXMgQVBJLCB3aGljaCBkb2VzIHNvbHZlIHRoZVxuICAgKiBwcm9ibGVtIG9mIHRyYWNraW5nIGNoYW5nZXMgaW4gcmVwcm9qZWN0ZWQgY29udGVudC5cbiAgICpcbiAgICogTm90ZTogVGhlIHdlYiBwbGF0Zm9ybSB0ZWFtIGNyZWF0aW5nIHRoZSBzcGVjaWZpY2F0aW9ucyBmb3Igd2ViIGNvbXBvbmVudHNcbiAgICogcGxhbiB0byByZXF1ZXN0IHRoYXQgYSBuZXcgdHlwZSBvZiBNdXRhdGlvbk9ic2VydmVyIG9wdGlvbiBiZSBkZWZpbmVkIHRoYXRcbiAgICogbGV0cyBhIGNvbXBvbmVudCBtb25pdG9yIGNoYW5nZXMgaW4gZGlzdHJpYnV0ZWQgY2hpbGRyZW4uIFRoaXMgbWl4aW4gd2lsbFxuICAgKiBiZSB1cGRhdGVkIHRvIHRha2UgYWR2YW50YWdlIG9mIHRoYXQgTXV0YXRpb25PYnNlcnZlciBvcHRpb24gd2hlbiB0aGF0XG4gICAqIGJlY29tZXMgYXZhaWxhYmxlLlxuICAgKi9cbiAgY2xhc3MgT2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG4gICAgICBvYnNlcnZlQ29udGVudENoYW5nZXModGhpcyk7XG5cbiAgICAgIC8vIE1ha2UgYW4gaW5pdGlhbCBjYWxsIHRvIGNvbnRlbnRDaGFuZ2VkKCkgc28gdGhhdCB0aGUgY29tcG9uZW50IGNhbiBkb1xuICAgICAgLy8gaW5pdGlhbGl6YXRpb24gdGhhdCBpdCBub3JtYWxseSBkb2VzIHdoZW4gY29udGVudCBjaGFuZ2VzLlxuICAgICAgLy9cbiAgICAgIC8vIFRoaXMgd2lsbCBpbnZva2UgY29udGVudENoYW5nZWQoKSBoYW5kbGVycyBpbiBvdGhlciBtaXhpbnMuIEluIG9yZGVyXG4gICAgICAvLyB0aGF0IHRob3NlIG1peGlucyBoYXZlIGEgY2hhbmNlIHRvIGNvbXBsZXRlIHRoZWlyIG93biBpbml0aWFsaXphdGlvbixcbiAgICAgIC8vIHdlIGFkZCB0aGUgY29udGVudENoYW5nZWQoKSBjYWxsIHRvIHRoZSBtaWNyb3Rhc2sgcXVldWUuXG4gICAgICBtaWNyb3Rhc2soKCkgPT4gdGhpcy5jb250ZW50Q2hhbmdlZCgpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIGNvbnRlbnRzIG9mIHRoZSBjb21wb25lbnQgKGluY2x1ZGluZyBkaXN0cmlidXRlZFxuICAgICAqIGNoaWxkcmVuKSBoYXZlIGNoYW5nZWQuXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBhbHNvIGludm9rZWQgd2hlbiBhIGNvbXBvbmVudCBpcyBmaXJzdCBpbnN0YW50aWF0ZWQ7IHRoZVxuICAgICAqIGNvbnRlbnRzIGhhdmUgZXNzZW50aWFsbHkgXCJjaGFuZ2VkXCIgZnJvbSBiZWluZyBub3RoaW5nLiBUaGlzIGFsbG93cyB0aGVcbiAgICAgKiBjb21wb25lbnQgdG8gcGVyZm9ybSBpbml0aWFsIHByb2Nlc3Npbmcgb2YgaXRzIGNoaWxkcmVuLlxuICAgICAqL1xuICAgIGNvbnRlbnRDaGFuZ2VkKCkge1xuICAgICAgaWYgKHN1cGVyLmNvbnRlbnRDaGFuZ2VkKSB7IHN1cGVyLmNvbnRlbnRDaGFuZ2VkKCk7IH1cbiAgICAgIGxldCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnY29udGVudC1jaGFuZ2VkJyk7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgZXZlbnQgaXMgcmFpc2VkIHdoZW4gdGhlIGNvbXBvbmVudCdzIGNvbnRlbnRzIChpbmNsdWRpbmcgZGlzdHJpYnV0ZWRcbiAgICAgKiBjaGlsZHJlbikgaGF2ZSBjaGFuZ2VkLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIE9ic2VydmVDb250ZW50Q2hhbmdlc1xuICAgICAqIEBldmVudCBjb250ZW50LWNoYW5nZWRcbiAgICAgKi9cbiAgfVxuXG4gIHJldHVybiBPYnNlcnZlQ29udGVudENoYW5nZXM7XG59O1xuXG5cbi8vIFRPRE86IERlY2lkZSB3aGV0aGVyIHdlIHdhbnQgYW4gb3B0aW9uIHRvIHRyYWNrIGNoYW5nZXMgdG8gY2hpbGRyZW5cbi8vIGF0dHJpYnV0ZXMuXG5mdW5jdGlvbiBvYnNlcnZlQ29udGVudENoYW5nZXMoZWxlbWVudCkge1xuICBlbGVtZW50Ll9jb250ZW50Q2hhbmdlT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PlxuICAgIGVsZW1lbnQuY29udGVudENoYW5nZWQoKVxuICApO1xuICBlbGVtZW50Ll9jb250ZW50Q2hhbmdlT2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50LCB7XG4gICAgLy8gYXR0cmlidXRlczogdHJ1ZSxcbiAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlLFxuICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICBzdWJ0cmVlOiB0cnVlXG4gIH0pO1xufVxuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuL2NyZWF0ZVN5bWJvbCc7XG5pbXBvcnQgKiBhcyBmcmFjdGlvbmFsU2VsZWN0aW9uIGZyb20gJy4vZnJhY3Rpb25hbFNlbGVjdGlvbic7XG5cblxuLy8gU3ltYm9scyBmb3IgaGFuZ2luZyBkYXRhIG9mZiBhbiBlbGVtZW50LlxuY29uc3QgYW5pbWF0aW5nU2VsZWN0aW9uU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdhbmltYXRpbmdTZWxlY3Rpb24nKTtcbmNvbnN0IGFuaW1hdGlvblN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnYW5pbWF0aW9ucycpO1xuY29uc3QgbGFzdEFuaW1hdGlvblN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnbGFzdEFuaW1hdGlvbicpO1xuY29uc3QgcHJldmlvdXNTZWxlY3Rpb25TeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3ByZXZpb3VzU2VsZWN0aW9uJyk7XG5jb25zdCBzaG93VHJhbnNpdGlvblN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnc2hvd1RyYW5zaXRpb24nKTtcbmNvbnN0IHNlbGVjdGlvbkFuaW1hdGlvbkR1cmF0aW9uU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdzZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvbicpO1xuY29uc3Qgc2VsZWN0aW9uQW5pbWF0aW9uS2V5ZnJhbWVzU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdzZWxlY3Rpb25BbmltYXRpb25LZXlmcmFtZXMnKTtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFNlbGVjdGlvbkFuaW1hdGlvbi4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1peGluKGJhc2UpIHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggdXNlcyBhbmltYXRpb24gdG8gc2hvdyB0cmFuc2l0aW9ucyBiZXR3ZWVuIHNlbGVjdGlvbiBzdGF0ZXMuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gY2FuIGJlIHVzZWQgYnkgY29tcG9uZW50cyB0aGF0IHdhbnQgdG8gcHJvdmlkZSB2aXNpYmxlXG4gICAqIGFuaW1hdGlvbnMgd2hlbiBjaGFuZ2luZyB0aGUgc2VsZWN0aW9uLiBGb3IgZXhhbXBsZSwgYSBjYXJvdXNlbCBjb21wb25lbnRcbiAgICogbWF5IHdhbnQgdG8gZGVmaW5lIGEgc2xpZGluZyBhbmltYXRpb24gZWZmZWN0IHNob3duIHdoZW4gbW92aW5nIGJldHdlZW5cbiAgICogaXRlbXMuXG4gICAqXG4gICAqIFRoZSBhbmltYXRpb24gaXMgZGVmaW5lZCBieSBhIGBzZWxlY3Rpb25BbmltYXRpb25LZXlmcmFtZXNgIHByb3BlcnR5OyBzZWVcbiAgICogdGhhdCBwcm9wZXJ0eSBmb3IgZGV0YWlscyBvbiBob3cgdG8gZGVmaW5lIHRoZXNlIGtleWZyYW1lcy4gVGhpcyBhbmltYXRpb25cbiAgICogd2lsbCBiZSB1c2VkIGluIHR3byB3YXlzLiBGaXJzdCwgd2hlbiBtb3Zpbmcgc3RyaWN0bHkgYmV0d2VlbiBpdGVtcywgdGhlXG4gICAqIGFuaW1hdGlvbiB3aWxsIHBsYXkgc21vb3RobHkgdG8gc2hvdyB0aGUgc2VsZWN0aW9uIGNoYW5naW5nLiBTZWNvbmQsIHRoZVxuICAgKiBhbmltYXRpb24gY2FuIGJlIHVzZWQgdG8gcmVuZGVyIHRoZSBzZWxlY3Rpb24gYXQgYSBmaXhlZCBwb2ludCBpbiB0aGVcbiAgICogdHJhbnNpdGlvbiBiZXR3ZWVuIHN0YXRlcy4gRS5nLiwgaWYgdGhlIHVzZXIgcGF1c2VzIGhhbGZ3YXkgdGhyb3VnaFxuICAgKiBkcmFnZ2luZyBhbiBlbGVtZW50IHVzaW5nIHRoZSBbU3dpcGVEaXJlY3Rpb25dKFN3aXBlRGlyZWN0aW9uLm1kKSBvclxuICAgKiBbVHJhY2twYWREaXJlY3Rpb25dKFRyYWNrcGFkRGlyZWN0aW9uLm1kKSBtaXhpbnMsIHRoZW4gdGhlIHNlbGVjdGlvblxuICAgKiBhbmltYXRpb24gd2lsbCBiZSBzaG93biBhdCB0aGUgcG9pbnQgZXhhY3RseSBoYWxmd2F5IHRocm91Z2guXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyBhIGNvbXBvbmVudCB0byBwcm92aWRlIGFuIGBpdGVtc2AgYXJyYXkgb2YgYWxsIGVsZW1lbnRzXG4gICAqIGluIHRoZSBsaXN0LCB3aGljaCBjYW4gYmUgcHJvdmlkZWQgdmlhIHRoZVxuICAgKiBbQ29udGVudEFzSXRlbXNdKENvbnRlbnRBc0l0ZW1zLm1kKSBtaXhpbi4gVGhpcyBtaXhpbiBhbHNvIGV4cGVjdHNcbiAgICogYHNlbGVjdGVkSW5kZXhgIGFuZCBgc2VsZWN0ZWRJdGVtYCBwcm9wZXJ0aWVzLCB3aGljaCBjYW4gYmUgcHJvdmlkZWQgdmlhXG4gICAqIHRoZSBbSXRlbXNTZWxlY3Rpb25dKEl0ZW1zU2VsZWN0aW9uLm1kKSBtaXhpbi5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBzdXBwb3J0cyBhIGBzZWxlY3Rpb25XcmFwc2AgcHJvcGVydHkuIFdoZW4gdHJ1ZSwgdGhlIHVzZXIgY2FuXG4gICAqIG5hdmlnYXRlIGZvcndhcmQgZnJvbSB0aGUgbGFzdCBpdGVtIGluIHRoZSBsaXN0IGFuZCB3cmFwIGFyb3VuZCB0byB0aGVcbiAgICogZmlyc3QgaXRlbSwgb3IgbmF2aWdhdGUgYmFja3dhcmQgZnJvbSB0aGUgZmlyc3QgaXRlbSBhbmQgd3JhcCBhcm91bmQgdG8gdGhlXG4gICAqIGxhc3QgaXRlbS5cbiAgICovXG4gIGNsYXNzIFNlbGVjdGlvbkFuaW1hdGlvbiBleHRlbmRzIGJhc2Uge1xuXG4gICAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuICAgICAgdGhpc1tzaG93VHJhbnNpdGlvblN5bWJvbF0gPSB0cnVlO1xuICAgIH1cblxuICAgIGl0ZW1BZGRlZChpdGVtKSB7XG4gICAgICAvLyBXZSBtYXJrIG5ldyBpdGVtcyBpbiB0aGUgbGlzdCBhcyBleHBsaWNpdGx5IHZpc2libGUgdG8gQVJJQS4gT3RoZXJ3aXNlLFxuICAgICAgLy8gd2hlbiBhbiBpdGVtIGlzbid0IHZpc2libGUgb24gdGhlIHNjcmVlbiwgQVJJQSB3aWxsIGFzc3VtZSB0aGUgaXRlbSBpc1xuICAgICAgLy8gb2Ygbm8gaW50ZXJlc3QgdG8gdGhlIHVzZXIsIGFuZCBsZWF2ZSBpdCBvdXQgb2YgdGhlIGFjY2Vzc2liaWxpdHkgdHJlZS5cbiAgICAgIC8vIElmIHRoZSBsaXN0IGNvbnRhaW5zIDEwIGl0ZW1zLCBidXQgb25seSAzIGFyZSB2aXNpYmxlLCBhIHNjcmVlbiByZWFkZXJcbiAgICAgIC8vIG1pZ2h0IHRoZW4gYW5ub3VuY2UgdGhlIGxpc3Qgb25seSBoYXMgMyBpdGVtcy4gVG8gZW5zdXJlIHRoYXQgc2NyZWVuXG4gICAgICAvLyByZWFkZXJzIGFuZCBvdGhlciBhc3Npc3RpdmUgdGVjaG5vbG9naWVzIGFubm91bmNlIHRoZSBjb3JyZWN0IHRvdGFsXG4gICAgICAvLyBudW1iZXIgb2YgaXRlbXMsIHdlIGV4cGxpY2l0bHkgbWFyayBhbGwgaXRlbXMgYXMgbm90IGhpZGRlbi4gVGhpcyB3aWxsXG4gICAgICAvLyBleHBvc2UgdGhlbSBhbGwgaW4gdGhlIGFjY2Vzc2liaWxpdHkgdHJlZSwgZXZlbiB0aGUgaXRlbXMgd2hpY2ggYXJlXG4gICAgICAvLyBjdXJyZW50bHkgbm90IHJlbmRlcmVkLlxuICAgICAgLy9cbiAgICAgIC8vIFRPRE86IEdlbmVyYWxseSBzcGVha2luZywgdGhpcyBlbnRpcmUgbWl4aW4gYXNzdW1lcyB0aGF0IHRoZSB1c2VyIGNhblxuICAgICAgLy8gbmF2aWdhdGUgdGhyb3VnaCBhbGwgaXRlbXMgaW4gYSBsaXN0LiBCdXQgYW4gYXBwIGNvdWxkIHN0eWxlIGFuIGl0ZW0gYXNcbiAgICAgIC8vIGRpc3BsYXk6bm9uZSBvciB2aXNpYmlsaXR5OmhpZGRlbiBiZWNhdXNlIHRoZSB1c2VyIGlzIG5vdCBhbGxvd2VkIHRvXG4gICAgICAvLyBpbnRlcmFjdCB3aXRoIHRoYXQgaXRlbSBhdCB0aGUgbW9tZW50LiBTdXBwb3J0IGZvciB0aGlzIHNjZW5hcmlvIHNob3VsZFxuICAgICAgLy8gYmUgYWRkZWQuIFRoaXMgd291bGQgZW50YWlsIGNoYW5naW5nIGFsbCBsb2NhdGlvbnMgd2hlcmUgYSBtaXhpblxuICAgICAgLy8gZnVuY3Rpb24gaXMgY291bnRpbmcgaXRlbXMsIGl0ZXJhdGluZyBvdmVyIHRoZSAodmlzaWJsZSkgaXRlbXMsIGFuZFxuICAgICAgLy8gc2hvd2luZyBvciBoaWRpbmcgaXRlbXMuIEFtb25nIG90aGVyIHRoaW5ncywgdGhlIGNvZGUgYmVsb3cgdG8gbWFrZVxuICAgICAgLy8gaXRlbXMgdmlzaWJsZSB0byBBUklBIHdvdWxkIG5lZWQgdG8gZGlzY3JpbWluYXRlIGJldHdlZW4gaXRlbXMgd2hpY2hcbiAgICAgIC8vIGFyZSBpbnZpc2libGUgYmVjYXVzZSBvZiBhbmltYXRpb24gc3RhdGUsIG9yIGludmlzaWJsZSBiZWNhdXNlIHRoZSB1c2VyXG4gICAgICAvLyBzaG91bGRuJ3QgaW50ZXJhY3Qgd2l0aCB0aGVtLlxuICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgZmFsc2UpO1xuICAgIH1cblxuICAgIGl0ZW1zQ2hhbmdlZCgpIHtcbiAgICAgIGlmIChzdXBlci5pdGVtc0NoYW5nZWQpIHsgc3VwZXIuaXRlbXNDaGFuZ2VkKCk7IH1cbiAgICAgIHJlc2V0QW5pbWF0aW9ucyh0aGlzKTtcbiAgICAgIHJlbmRlclNlbGVjdGlvbih0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIGZyYWN0aW9uYWwgdmFsdWUgaW5kaWNhdGluZyBob3cgZmFyIHRoZSB1c2VyIGhhcyBjdXJyZW50bHkgYWR2YW5jZWQgdG9cbiAgICAgKiB0aGUgbmV4dC9wcmV2aW91cyBpdGVtLiBFLmcuLCBhIGBzZWxlY3RlZEZyYWN0aW9uYCBvZiAzLjUgaW5kaWNhdGVzIHRoZVxuICAgICAqIHVzZXIgaXMgaGFsZndheSBiZXR3ZWVuIGl0ZW1zIDMgYW5kIDQuXG4gICAgICpcbiAgICAgKiBGb3IgbW9yZSBkZXRhaWxzLCBzZWUgdGhlIFtmcmFjdGlvbmFsU2VsZWN0aW9uXShmcmFjdGlvbmFsU2VsZWN0aW9uLm1kKVxuICAgICAqIGhlbHBlciBmdW5jdGlvbnMuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldCBzZWxlY3RlZEZyYWN0aW9uKCkge1xuICAgICAgcmV0dXJuIHN1cGVyLnNlbGVjdGVkRnJhY3Rpb247XG4gICAgfVxuICAgIHNldCBzZWxlY3RlZEZyYWN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoJ3NlbGVjdGVkRnJhY3Rpb24nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkRnJhY3Rpb24gPSB2YWx1ZTsgfVxuICAgICAgcmVuZGVyU2VsZWN0aW9uKHRoaXMsIHRoaXMuc2VsZWN0ZWRJbmRleCwgdmFsdWUpO1xuICAgIH1cblxuICAgIGdldCBzZWxlY3RlZEl0ZW0oKSB7XG4gICAgICByZXR1cm4gc3VwZXIuc2VsZWN0ZWRJdGVtO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0ZWRJdGVtKGl0ZW0pIHtcbiAgICAgIGlmICgnc2VsZWN0ZWRJdGVtJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEl0ZW0gPSBpdGVtOyB9XG4gICAgICByZW5kZXJTZWxlY3Rpb24odGhpcywgdGhpcy5zZWxlY3RlZEluZGV4LCAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZHVyYXRpb24gb2YgYSBzZWxlY3Rpb24gYW5pbWF0aW9uIGluIG1pbGxpc2Vjb25kcy5cbiAgICAgKlxuICAgICAqIFRoaXMgbWVhc3VyZXMgdGhlIGFtb3VudCBvZiB0aW1lIHJlcXVpcmVkIGZvciBhIHNlbGVjdGlvbiBhbmltYXRpb24gdG9cbiAgICAgKiBjb21wbGV0ZS4gVGhpcyBudW1iZXIgcmVtYWlucyBjb25zdGFudCwgZXZlbiBpZiB0aGUgbnVtYmVyIG9mIGl0ZW1zIGJlaW5nXG4gICAgICogYW5pbWF0ZWQgaW5jcmVhc2VzLlxuICAgICAqXG4gICAgICogVGhlIGRlZmF1bHQgdmFsdWUgaXMgMjUwIG1pbGxpc2Vjb25kcyAoYSBxdWFydGVyIGEgc2Vjb25kKS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtpbnRlZ2VyfVxuICAgICAqIEBkZWZhdWx0IDI1MFxuICAgICAqL1xuICAgIGdldCBzZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzW3NlbGVjdGlvbkFuaW1hdGlvbkR1cmF0aW9uU3ltYm9sXSB8fCAyNTA7XG4gICAgfVxuICAgIHNldCBzZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKCdzZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvbicgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb24gPSB2YWx1ZTsgfVxuICAgICAgdGhpc1tzZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvblN5bWJvbF0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUga2V5ZnJhbWVzIHRoYXQgZGVmaW5lIGFuIGFuaW1hdGlvbiB0aGF0IHBsYXlzIGZvciBhbiBpdGVtIHdoZW4gbW92aW5nXG4gICAgICogZm9yd2FyZCBpbiB0aGUgc2VxdWVuY2UuXG4gICAgICpcbiAgICAgKiBUaGlzIGlzIGFuIGFycmF5IG9mIENTUyBydWxlcyB0aGF0IHdpbGwgYmUgYXBwbGllZC4gVGhlc2UgYXJlIHVzZWQgYXNcbiAgICAgKiBba2V5ZnJhbWVzXShodHRwOi8vdzNjLmdpdGh1Yi5pby93ZWItYW5pbWF0aW9ucy8ja2V5ZnJhbWVzLXNlY3Rpb24pXG4gICAgICogdG8gYW5pbWF0ZSB0aGUgaXRlbSB3aXRoIHRoZVxuICAgICAqIFtXZWIgQW5pbWF0aW9ucyBBUEldKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9hbmltYXRpb24pLlxuICAgICAqXG4gICAgICogVGhlIGFuaW1hdGlvbiByZXByZXNlbnRzIHRoZSBzdGF0ZSBvZiB0aGUgbmV4dCBpdGVtIGFzIGl0IG1vdmVzIGZyb21cbiAgICAgKiBjb21wbGV0ZWx5IHVuc2VsZWN0ZWQgKG9mZnN0YWdlLCB1c3VhbGx5IHJpZ2h0KSwgdG8gc2VsZWN0ZWQgKGNlbnRlclxuICAgICAqIHN0YWdlKSwgdG8gY29tcGxldGVseSB1bnNlbGVjdGVkIChvZmZzdGFnZSwgdXN1YWxseSBsZWZ0KS4gVGhlIGNlbnRlciB0aW1lXG4gICAgICogb2YgdGhlIGFuaW1hdGlvbiBzaG91bGQgY29ycmVzcG9uZCB0byB0aGUgaXRlbSdzIHF1aXNjZW50IHNlbGVjdGVkIHN0YXRlLFxuICAgICAqIHR5cGljYWxseSBpbiB0aGUgY2VudGVyIG9mIHRoZSBzdGFnZSBhbmQgYXQgdGhlIGl0ZW0ncyBsYXJnZXN0IHNpemUuXG4gICAgICpcbiAgICAgKiBUaGUgZGVmYXVsdCBmb3J3YXJkIGFuaW1hdGlvbiBpcyBhIHNtb290aCBzbGlkZSBhdCBmdWxsIHNpemUgZnJvbSByaWdodCB0b1xuICAgICAqIGxlZnQuXG4gICAgICpcbiAgICAgKiBXaGVuIG1vdmluZyB0aGUgc2VsZWN0aW9uIGJhY2t3YXJkLCB0aGlzIGFuaW1hdGlvbiBpcyBwbGF5ZWQgaW4gcmV2ZXJzZS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtjc3NSdWxlc1tdfVxuICAgICAqL1xuICAgIGdldCBzZWxlY3Rpb25BbmltYXRpb25LZXlmcmFtZXMoKSB7XG4gICAgICAvLyBTdGFuZGFyZCBhbmltYXRpb24gc2xpZGVzIGxlZnQvcmlnaHQsIGtlZXBzIGFkamFjZW50IGl0ZW1zIG91dCBvZiB2aWV3LlxuICAgICAgcmV0dXJuIHRoaXNbc2VsZWN0aW9uQW5pbWF0aW9uS2V5ZnJhbWVzU3ltYm9sXSB8fCBtaXhpbi5zdGFuZGFyZEVmZmVjdEtleWZyYW1lcy5zbGlkZTtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGlvbkFuaW1hdGlvbktleWZyYW1lcyh2YWx1ZSkge1xuICAgICAgaWYgKCdzZWxlY3Rpb25BbmltYXRpb25LZXlmcmFtZXMnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGlvbkFuaW1hdGlvbktleWZyYW1lcyA9IHZhbHVlOyB9XG4gICAgICB0aGlzW3NlbGVjdGlvbkFuaW1hdGlvbktleWZyYW1lc1N5bWJvbF0gPSB2YWx1ZTtcbiAgICAgIHJlc2V0QW5pbWF0aW9ucyh0aGlzKTtcbiAgICAgIHJlbmRlclNlbGVjdGlvbih0aGlzKTtcbiAgICB9XG5cbiAgICBnZXQgc2VsZWN0aW9uV3JhcHMoKSB7XG4gICAgICByZXR1cm4gc3VwZXIuc2VsZWN0aW9uV3JhcHM7XG4gICAgfVxuICAgIHNldCBzZWxlY3Rpb25XcmFwcyh2YWx1ZSkge1xuICAgICAgaWYgKCdzZWxlY3Rpb25XcmFwcycgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0aW9uV3JhcHMgPSB2YWx1ZTsgfVxuICAgICAgcmVzZXRBbmltYXRpb25zKHRoaXMpO1xuICAgICAgcmVuZGVyU2VsZWN0aW9uKHRoaXMpO1xuICAgIH1cblxuICAgIC8vIFRPRE86IE1ha2UgdGhpcyBhIGdldHRlci9zZXR0ZXIgcHJvcGVydHkuXG4gICAgc2hvd1RyYW5zaXRpb24oc2hvdykge1xuICAgICAgaWYgKHN1cGVyLnNob3dUcmFuc2l0aW9uKSB7IHN1cGVyLnNob3dUcmFuc2l0aW9uKHNob3cpOyB9XG4gICAgICB0aGlzW3Nob3dUcmFuc2l0aW9uU3ltYm9sXSA9IHNob3c7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFNlbGVjdGlvbkFuaW1hdGlvbjtcbn1cblxuXG4vLyBXZSBleHBvc2UgaGVscGVycyBvbiB0aGUgbWl4aW4gZnVuY3Rpb24gdGhhdCB3ZSB3YW50IHRvIGJlIGFibGUgdG8gdW5pdCB0ZXN0LlxuLy8gU2luY2UgdGhlc2UgYXJlIG9uIHRoZSBmdW5jdGlvbiwgbm90IG9uIHRoZSBjbGFzcyBlbWl0dGVkIGJ5IHRoZSBmdW5jdGlvbixcbi8vIHRoZXkgZG9uJ3QgZW5kIHVwIGdldHRpbmcgZXhwb3NlZCBvbiBhY3R1YWwgZWxlbWVudCBpbnN0YW5jZXMuXG5taXhpbi5oZWxwZXJzID0ge1xuXG4gIC8qXG4gICAqIENhbGN1bGF0ZSB0aGUgYW5pbWF0aW9uIGZyYWN0aW9ucyBmb3IgYW4gZWxlbWVudCdzIGl0ZW1zIGF0IHRoZSBnaXZlblxuICAgKiBzZWxlY3Rpb24gcG9pbnQuIFRoaXMgaXMgdXNlZCB3aGVuIHJlbmRlcmluZyB0aGUgZWxlbWVudCdzIHNlbGVjdGlvbiBzdGF0ZVxuICAgKiBpbnN0YW50YW5lb3VzbHkuXG4gICAqXG4gICAqIFRoaXMgZnVuY3Rpb24gY29uc2lkZXJzIHRoZSBzZWxlY3RlZEluZGV4IHBhcmFtZXRlciwgd2hpY2ggY2FuIGJlIGEgd2hvbGVcbiAgICogb3IgZnJhY3Rpb25hbCBudW1iZXIsIGFuZCBkZXRlcm1pbmVzIHdoaWNoIGl0ZW1zIHdpbGwgYmUgdmlzaWJsZSBhdCB0aGF0XG4gICAqIGluZGV4LiBUaGlzIGZ1bmN0aW9uIHRoZW4gY2FsY3VsYXRlcyBhIGNvcnJlc3BvbmRpbmcgYW5pbWF0aW9uIGZyYWN0aW9uOiBhXG4gICAqIG51bWJlciBiZXR3ZWVuIDAgYW5kIDEgaW5kaWNhdGluZyBob3cgZmFyIHRocm91Z2ggdGhlIHNlbGVjdGlvbiBhbmltYXRpb25cbiAgICogYW4gaXRlbSBzaG91bGQgYmUgc2hvd24sIG9yIG51bGwgaWYgdGhlIGl0ZW0gc2hvdWxkIG5vdCBiZSB2aXNpYmxlIGF0IHRoYXRcbiAgICogc2VsZWN0aW9uIGluZGV4LiBUaGVzZSBmcmFjdGlvbnMgYXJlIHJldHVybmVkIGFzIGFuIGFycmF5LCB3aGVyZSB0aGVcbiAgICogYW5pbWF0aW9uIGZyYWN0aW9uIGF0IHBvc2l0aW9uIE4gY29ycmVzcG9uZHMgdG8gaG93IGl0ZW0gTiBzaG91bGQgYmUgc2hvd24uXG4gICAqL1xuICBhbmltYXRpb25GcmFjdGlvbnNGb3JTZWxlY3Rpb24oZWxlbWVudCwgc2VsZWN0aW9uKSB7XG5cbiAgICBsZXQgaXRlbXMgPSBlbGVtZW50Lml0ZW1zO1xuICAgIGlmICghaXRlbXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgaXRlbUNvdW50ID0gaXRlbXMubGVuZ3RoO1xuICAgIGxldCBzZWxlY3Rpb25XcmFwcyA9IGVsZW1lbnQuc2VsZWN0aW9uV3JhcHM7XG5cbiAgICByZXR1cm4gaXRlbXMubWFwKChpdGVtLCBpdGVtSW5kZXgpID0+IHtcbiAgICAgIC8vIEhvdyBtYW55IHN0ZXBzIGZyb20gdGhlIHNlbGVjdGlvbiBwb2ludCB0byB0aGlzIGl0ZW0/XG4gICAgICBsZXQgc3RlcHMgPSBzdGVwc1RvSW5kZXgoaXRlbUNvdW50LCBzZWxlY3Rpb25XcmFwcywgc2VsZWN0aW9uLCBpdGVtSW5kZXgpO1xuICAgICAgLy8gVG8gY29udmVydCBzdGVwcyB0byBhbmltYXRpb24gZnJhY3Rpb246XG4gICAgICAvLyBzdGVwcyAgICAgIGFuaW1hdGlvbiBmcmFjdGlvblxuICAgICAgLy8gIDEgICAgICAgICAwICAgICAoc3RhZ2UgcmlnaHQpXG4gICAgICAvLyAgMCAgICAgICAgIDAuNSAgIChjZW50ZXIgc3RhZ2UpXG4gICAgICAvLyAtMSAgICAgICAgIDEgICAgIChzdGFnZSBsZWZ0KVxuICAgICAgbGV0IGFuaW1hdGlvbkZyYWN0aW9uID0gKDEgLSBzdGVwcykgLyAyO1xuICAgICAgcmV0dXJuIChhbmltYXRpb25GcmFjdGlvbiA+PSAwICYmIGFuaW1hdGlvbkZyYWN0aW9uIDw9IDEpID9cbiAgICAgICAgYW5pbWF0aW9uRnJhY3Rpb24gOlxuICAgICAgICBudWxsOyAvLyBPdXRzaWRlIGFuaW1hdGlvbiByYW5nZVxuICAgIH0pO1xuICB9LFxuXG4gIC8qXG4gICAqIENhbGN1bGF0ZSB0aGUgYW5pbWF0aW9uIHRpbWluZ3MgdGhhdCBzaG91bGQgYmUgdXNlZCB0byBzbW9vdGhseSBhbmltYXRlIHRoZVxuICAgKiBlbGVtZW50J3MgaXRlbXMgZnJvbSBvbmUgc2VsZWN0aW9uIHN0YXRlIHRvIGFub3RoZXIuXG4gICAqXG4gICAqIFRoaXMgcmV0dXJucyBhbiBhcnJheSBvZiB0aW1pbmdzLCB3aGVyZSB0aGUgdGltaW5nIGF0IHBvc2l0aW9uIE4gc2hvdWxkIGJlXG4gICAqIHVzZWQgdG8gYW5pbWF0ZSBpdGVtIE4uIElmIGFuIGl0ZW0ncyB0aW1pbmcgaXMgbnVsbCwgdGhlbiB0aGF0IGl0ZW0gc2hvdWxkXG4gICAqIG5vdCB0YWtlIHBsYWNlIGluIHRoZSBhbmltYXRpb24sIGFuZCBzaG91bGQgYmUgaGlkZGVuIGluc3RlYWQuXG4gICAqL1xuICBlZmZlY3RUaW1pbmdzRm9yU2VsZWN0aW9uQW5pbWF0aW9uKGVsZW1lbnQsIGZyb21TZWxlY3Rpb24sIHRvU2VsZWN0aW9uKSB7XG5cbiAgICBsZXQgaXRlbXMgPSBlbGVtZW50Lml0ZW1zO1xuICAgIGlmICghaXRlbXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGl0ZW1Db3VudCA9IGl0ZW1zLmxlbmd0aDtcbiAgICBsZXQgc2VsZWN0aW9uV3JhcHMgPSBlbGVtZW50LnNlbGVjdGlvbldyYXBzO1xuICAgIGxldCB0b0luZGV4ID0gZnJhY3Rpb25hbFNlbGVjdGlvbi53cmFwcGVkU2VsZWN0aW9uUGFydHModG9TZWxlY3Rpb24sIGl0ZW1Db3VudCwgc2VsZWN0aW9uV3JhcHMpLmluZGV4O1xuICAgIGxldCB0b3RhbFN0ZXBzID0gc3RlcHNUb0luZGV4KGl0ZW1Db3VudCwgc2VsZWN0aW9uV3JhcHMsIGZyb21TZWxlY3Rpb24sIHRvU2VsZWN0aW9uKTtcbiAgICBsZXQgZGlyZWN0aW9uID0gdG90YWxTdGVwcyA+PSAwID8gJ25vcm1hbCc6ICdyZXZlcnNlJztcbiAgICBsZXQgZmlsbCA9ICdib3RoJztcbiAgICBsZXQgdG90YWxEdXJhdGlvbiA9IGVsZW1lbnQuc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb247XG4gICAgbGV0IHN0ZXBEdXJhdGlvbiA9IHRvdGFsU3RlcHMgIT09IDAgP1xuICAgICAgdG90YWxEdXJhdGlvbiAqIDIgLyBNYXRoLmNlaWwoTWF0aC5hYnModG90YWxTdGVwcykpIDpcbiAgICAgIDA7ICAvLyBObyBzdGVwcyByZXF1aXJlZCwgYW5pbWF0aW9uIHdpbGwgYmUgaW5zdGFudGVub3VzLlxuXG4gICAgbGV0IHRpbWluZ3MgPSBpdGVtcy5tYXAoKGl0ZW0sIGl0ZW1JbmRleCkgPT4ge1xuICAgICAgbGV0IHN0ZXBzID0gc3RlcHNUb0luZGV4KGl0ZW1Db3VudCwgc2VsZWN0aW9uV3JhcHMsIGl0ZW1JbmRleCwgdG9TZWxlY3Rpb24pO1xuICAgICAgLy8gSWYgd2UgaW5jbHVkZSB0aGlzIGl0ZW0gaW4gdGhlIHN0YWdnZXJlZCBzZXF1ZW5jZSBvZiBhbmltYXRpb25zIHdlJ3JlXG4gICAgICAvLyBjcmVhdGluZywgd2hlcmUgd291bGQgdGhlIGl0ZW0gYXBwZWFyIGluIHRoZSBzZXF1ZW5jZT9cbiAgICAgIGxldCBwb3NpdGlvbkluU2VxdWVuY2UgPSB0b3RhbFN0ZXBzIC0gc3RlcHM7XG4gICAgICBpZiAodG90YWxTdGVwcyA8IDApIHtcbiAgICAgICAgcG9zaXRpb25JblNlcXVlbmNlID0gLXBvc2l0aW9uSW5TZXF1ZW5jZTtcbiAgICAgIH1cbiAgICAgIC8vIFNvLCBpcyB0aGlzIGl0ZW0gcmVhbGx5IGluY2x1ZGVkIGluIHRoZSBzZXF1ZW5jZT9cbiAgICAgIGlmIChNYXRoLmNlaWwocG9zaXRpb25JblNlcXVlbmNlKSA+PSAwICYmIHBvc2l0aW9uSW5TZXF1ZW5jZSA8PSBNYXRoLmFicyh0b3RhbFN0ZXBzKSkge1xuICAgICAgICAvLyBOb3RlIHRoYXQgZGVsYXkgZm9yIGZpcnN0IGl0ZW0gd2lsbCBiZSBuZWdhdGl2ZS4gVGhhdCB3aWxsIGNhdXNlXG4gICAgICAgIC8vIHRoZSBhbmltYXRpb24gdG8gc3RhcnQgaGFsZndheSB0aHJvdWdoLCB3aGljaCBpcyB3aGF0IHdlIHdhbnQuXG4gICAgICAgIGxldCBkZWxheSA9IHN0ZXBEdXJhdGlvbiAqIChwb3NpdGlvbkluU2VxdWVuY2UgLSAxKS8yO1xuICAgICAgICBsZXQgZW5kRGVsYXkgPSBpdGVtSW5kZXggPT09IHRvSW5kZXggP1xuICAgICAgICAgIC1zdGVwRHVyYXRpb24vMiA6ICAgLy8gU3RvcCBoYWxmd2F5IHRocm91Z2guXG4gICAgICAgICAgMDsgICAgICAgICAgICAgIC8vIFBsYXkgYW5pbWF0aW9uIHVudGlsIGVuZC5cbiAgICAgICAgcmV0dXJuIHsgZHVyYXRpb246IHN0ZXBEdXJhdGlvbiwgZGlyZWN0aW9uLCBmaWxsLCBkZWxheSwgZW5kRGVsYXkgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRpbWluZ3M7XG4gIH1cblxufTtcblxuXG4vLyBLZXlmcmFtZXMgZm9yIHN0YW5kYXJkIHNlbGVjdGlvbiBhbmltYXRpb24gZWZmZWN0cy5cbm1peGluLnN0YW5kYXJkRWZmZWN0S2V5ZnJhbWVzID0ge1xuXG4gIC8vIFNpbXBsZSBjcm9zc2ZhZGVcbiAgZmFkZTogW1xuICAgIHsgb3BhY2l0eTogMCB9LFxuICAgIHsgb3BhY2l0eTogMSB9LFxuICAgIHsgb3BhY2l0eTogMCB9XG4gIF0sXG5cbiAgLy8gUmV2ZWFsLCBhcyBpZiBzbGlkaW5nIHRoZSB0b3AgY2FyZCBvZmYgYSBkZWNrIG9mIGNhcmRzXG4gIHJldmVhbDogW1xuICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwJSknLCB6SW5kZXg6IDAgfSxcbiAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCUpJywgekluZGV4OiAxIH0sXG4gICAgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC0xMDAlKScsIHpJbmRleDogMiB9XG4gIF0sXG5cbiAgLy8gR29vZ2xlIFBob3Rvcy1zdHlsZSByZXZlYWwtd2l0aC1mYWRlIGFuaW1hdGlvblxuICByZXZlYWxXaXRoRmFkZTogW1xuICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwJSkgc2NhbGUoMC43NSknLCBvcGFjaXR5OiAwLCB6SW5kZXg6IDAgfSxcbiAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCUpIHNjYWxlKDEuMCknLCBvcGFjaXR5OiAxLCB6SW5kZXg6IDEgfSxcbiAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTEwMCUpIHNjYWxlKDEuMCknLCBvcGFjaXR5OiAxLCB6SW5kZXg6IDIgfVxuICBdLFxuXG4gIC8vIENhcm91c2VsIHZhcmlhbnQgd2l0aCBhIGJpdCBvZiBvZmYtc3RhZ2UgZWxlbWVudHMgc2hvd2luZ1xuICBzaG93QWRqYWNlbnQ6IFtcbiAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoNzglKSBzY2FsZSgwLjcpJywgekluZGV4OiAwIH0sXG4gICAgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDAlKSBzY2FsZSgwLjgyKScsIHpJbmRleDogMSB9LFxuICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNzglKSBzY2FsZSgwLjcpJywgekluZGV4OiAwIH1cbiAgXSxcblxuICAvLyBTaW1wbGUgc2xpZGVcbiAgc2xpZGU6IFtcbiAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMTAwJSknIH0sXG4gICAgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC0xMDAlKScgfVxuICBdLFxuXG4gIC8vIFNsaWRlLCB3aXRoIGEgZ2FwIGJldHdlZW5cbiAgc2xpZGVXaXRoR2FwOiBbXG4gICAgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDExMCUpJyB9LFxuICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtMTEwJSknIH1cbiAgXVxuXG59O1xuXG5cbi8qXG4gKiBTbW9vdGhseSBhbmltYXRlIHRoZSBzZWxlY3Rpb24gYmV0d2VlbiB0aGUgaW5kaWNhdGVkIFwiZnJvbVwiIGFuZCBcInRvXCJcbiAqIGluZGljZXMuIFRoZSBmb3JtZXIgY2FuIGJlIGEgZnJhY3Rpb24sIGUuZy4sIHdoZW4gdGhlIHVzZXIgcmVsZWFzZXMgYSBmaW5nZXJcbiAqIHRvIGNvbXBsZXRlIGEgdG91Y2ggZHJhZywgYW5kIHRoZSBzZWxlY3Rpb24gd2lsbCBzbmFwIHRvIHRoZSBjbG9zZXN0IHdob2xlXG4gKiBpbmRleC5cbiAqL1xuZnVuY3Rpb24gYW5pbWF0ZVNlbGVjdGlvbihlbGVtZW50LCBmcm9tU2VsZWN0aW9uLCB0b1NlbGVjdGlvbikge1xuXG4gIHJlc2V0QW5pbWF0aW9ucyhlbGVtZW50KTtcblxuICBpZiAoZWxlbWVudFtsYXN0QW5pbWF0aW9uU3ltYm9sXSkge1xuICAgIC8vIENhbmNlbCB0aGUgZWZmZWN0cyBvZiB0aGUgbGFzdCBzZWxlY3Rpb24gYW5pbWF0aW9uLlxuICAgIGVsZW1lbnRbbGFzdEFuaW1hdGlvblN5bWJvbF0ub25maW5pc2ggPSBudWxsO1xuICAgIGVsZW1lbnRbbGFzdEFuaW1hdGlvblN5bWJvbF0gPSBudWxsO1xuICB9XG5cbiAgLy8gQ2FsY3VsYXRlIHRoZSBhbmltYXRpb24gdGltaW5ncy5cbiAgbGV0IGl0ZW1zID0gZWxlbWVudC5pdGVtcztcbiAgbGV0IGtleWZyYW1lcyA9IGVsZW1lbnQuc2VsZWN0aW9uQW5pbWF0aW9uS2V5ZnJhbWVzO1xuICBlbGVtZW50W2FuaW1hdGluZ1NlbGVjdGlvblN5bWJvbF0gPSB0cnVlO1xuICBsZXQgdGltaW5ncyA9IG1peGluLmhlbHBlcnMuZWZmZWN0VGltaW5nc0ZvclNlbGVjdGlvbkFuaW1hdGlvbihlbGVtZW50LCBmcm9tU2VsZWN0aW9uLCB0b1NlbGVjdGlvbik7XG4gIGxldCBsYXN0QW5pbWF0aW9uRGV0YWlscztcblxuICAvLyBGaWd1cmUgb3V0IHdoaWNoIGl0ZW0gd2lsbCBiZSB0aGUgb25lICphZnRlciogdGhlIG9uZSB3ZSdyZSBzZWxlY3RpbmcuXG4gIGxldCBpdGVtQ291bnQgPSBpdGVtcy5sZW5ndGg7XG4gIGxldCBzZWxlY3Rpb25XcmFwcyA9IGVsZW1lbnQuc2VsZWN0aW9uV3JhcHM7XG4gIGxldCBzZWxlY3Rpb25JbmRleCA9IGZyYWN0aW9uYWxTZWxlY3Rpb24uc2VsZWN0aW9uUGFydHModG9TZWxlY3Rpb24sIGl0ZW1Db3VudCwgc2VsZWN0aW9uV3JhcHMpLmluZGV4O1xuICBsZXQgdG90YWxTdGVwcyA9IHN0ZXBzVG9JbmRleChpdGVtQ291bnQsIHNlbGVjdGlvbldyYXBzLCBmcm9tU2VsZWN0aW9uLCB0b1NlbGVjdGlvbik7XG4gIGxldCBmb3J3YXJkID0gdG90YWxTdGVwcyA+PSAwO1xuICBsZXQgbmV4dFVwSW5kZXggPSBzZWxlY3Rpb25JbmRleCArIChmb3J3YXJkID8gMSA6IC0gMSk7XG4gIGlmIChzZWxlY3Rpb25XcmFwcykge1xuICAgIG5leHRVcEluZGV4ID0gZnJhY3Rpb25hbFNlbGVjdGlvbi53cmFwcGVkU2VsZWN0aW9uKG5leHRVcEluZGV4LCBpdGVtQ291bnQpO1xuICB9IGVsc2UgaWYgKCFpc0l0ZW1JbmRleEluQm91bmRzKGVsZW1lbnQsIG5leHRVcEluZGV4KSkge1xuICAgIG5leHRVcEluZGV4ID0gbnVsbDsgLy8gQXQgc3RhcnQvZW5kIG9mIGxpc3Q7IGRvbid0IGhhdmUgYSBuZXh0IGl0ZW0gdG8gc2hvdy5cbiAgfVxuXG4gIC8vIFBsYXkgdGhlIGFuaW1hdGlvbnMgdXNpbmcgdGhvc2UgdGltaW5ncy5cbiAgdGltaW5ncy5mb3JFYWNoKCh0aW1pbmcsIGluZGV4KSA9PiB7XG4gICAgbGV0IGl0ZW0gPSBpdGVtc1tpbmRleF07XG4gICAgaWYgKHRpbWluZykge1xuICAgICAgc2hvd0l0ZW0oaXRlbSwgdHJ1ZSk7XG4gICAgICBsZXQgYW5pbWF0aW9uID0gaXRlbS5hbmltYXRlKGtleWZyYW1lcywgdGltaW5nKTtcblxuICAgICAgLy8gRmlndXJlIG91dCB3aGV0aGVyIHRoaXMgYW5pbWF0aW9uIHdpbGwgYmUgdGhlIGxhc3Qgb25lIHRvIGVuZFxuICAgICAgLy8gKHBvc3NpYmx5IGNvbmN1cnJlbnQgd2l0aCBhbm90aGVyIGFuaW1hdGlvbikuXG4gICAgICBsZXQgZW5kVGltZSA9IHRpbWluZy5kZWxheSArIHRpbWluZy5kdXJhdGlvbiArIHRpbWluZy5lbmREZWxheTtcbiAgICAgIGlmIChsYXN0QW5pbWF0aW9uRGV0YWlscyA9PSBudWxsIHx8IGVuZFRpbWUgPiBsYXN0QW5pbWF0aW9uRGV0YWlscy5lbmRUaW1lKSB7XG4gICAgICAgIGxhc3RBbmltYXRpb25EZXRhaWxzID0geyBhbmltYXRpb24sIGVuZFRpbWUsIHRpbWluZyB9O1xuICAgICAgfVxuXG4gICAgICBpZiAoaW5kZXggPT09IG5leHRVcEluZGV4KSB7XG4gICAgICAgIC8vIFRoaXMgaXRlbSB3aWxsIGJlIGFuaW1hdGVkLCBzbyB3aWxsIGFscmVhZHkgYmUgaW4gdGhlIGRlc2lyZWQgc3RhdGVcbiAgICAgICAgLy8gYWZ0ZXIgdGhlIGFuaW1hdGlvbiBjb21wbGV0ZXMuXG4gICAgICAgIG5leHRVcEluZGV4ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVGhpcyBpdGVtIGRvZXNuJ3QgcGFydGljaXBhdGUgaW4gdGhlIGFuaW1hdGlvbi5cbiAgICAgIHNob3dJdGVtKGl0ZW0sIGZhbHNlKTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChsYXN0QW5pbWF0aW9uRGV0YWlscyAmJiBuZXh0VXBJbmRleCAhPSBudWxsKSB7XG4gICAgZGlzcGxheU5leHRJdGVtV2hlbkFuaW1hdGlvbkNvbXBsZXRlcyhlbGVtZW50LCBsYXN0QW5pbWF0aW9uRGV0YWlscy5hbmltYXRpb24sIG5leHRVcEluZGV4LCBmb3J3YXJkKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBTaG91bGRuJ3QgaGFwcGVuIC0tIHdlIHNob3VsZCBhbHdheXMgaGF2ZSBhdCBsZWFzdCBvbmUgYW5pbWF0aW9uLlxuICAgIGVsZW1lbnRbYW5pbWF0aW5nU2VsZWN0aW9uU3ltYm9sXSA9IGZhbHNlO1xuICB9XG59XG5cbi8qXG4gKiBXaGVuIHRoZSBsYXN0IGFuaW1hdGlvbiBjb21wbGV0ZXMsIHNob3cgdGhlIG5leHQgaXRlbSBpbiB0aGUgZGlyZWN0aW9uIHdlJ3JlXG4gKiBnb2luZy4gVGhpcyB3YWl0aW5nIGlzIGEgaGFjayB0byBhdm9pZCBoYXZpbmcgc3RhdGljIGl0ZW1zIGhpZ2hlciBpbiB0aGVcbiAqIG5hdHVyYWwgei1vcmRlciBvYnNjdXJlIGl0ZW1zIGR1cmluZyBhbmltYXRpb24uXG4gKi9cbmZ1bmN0aW9uIGRpc3BsYXlOZXh0SXRlbVdoZW5BbmltYXRpb25Db21wbGV0ZXMoZWxlbWVudCwgYW5pbWF0aW9uLCBuZXh0VXBJbmRleCwgZm9yd2FyZCkge1xuICBhbmltYXRpb24ub25maW5pc2ggPSBldmVudCA9PiB7XG4gICAgbGV0IG5leHRVcEl0ZW0gPSBlbGVtZW50Lml0ZW1zW25leHRVcEluZGV4XTtcbiAgICBsZXQgYW5pbWF0aW9uRnJhY3Rpb24gPSBmb3J3YXJkID8gMCA6IDE7XG4gICAgc2V0QW5pbWF0aW9uRnJhY3Rpb24oZWxlbWVudCwgbmV4dFVwSW5kZXgsIGFuaW1hdGlvbkZyYWN0aW9uKTtcbiAgICBzaG93SXRlbShuZXh0VXBJdGVtLCB0cnVlKTtcbiAgICBlbGVtZW50W2FuaW1hdGluZ1NlbGVjdGlvblN5bWJvbF0gPSBmYWxzZTtcbiAgICBlbGVtZW50W2xhc3RBbmltYXRpb25TeW1ib2xdID0gbnVsbDtcbiAgfTtcbiAgZWxlbWVudFtsYXN0QW5pbWF0aW9uU3ltYm9sXSA9IGFuaW1hdGlvbjtcbn1cblxuZnVuY3Rpb24gZ2V0QW5pbWF0aW9uRm9ySXRlbUluZGV4KGVsZW1lbnQsIGluZGV4KSB7XG4gIGlmIChlbGVtZW50W2FuaW1hdGlvblN5bWJvbF0gPT0gbnVsbCkge1xuICAgIC8vIE5vdCByZWFkeSB5ZXQ7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgbGV0IGFuaW1hdGlvbiA9IGVsZW1lbnRbYW5pbWF0aW9uU3ltYm9sXVtpbmRleF07XG4gIGlmICghYW5pbWF0aW9uKSB7XG4gICAgbGV0IGl0ZW0gPSBlbGVtZW50Lml0ZW1zW2luZGV4XTtcbiAgICBhbmltYXRpb24gPSBpdGVtLmFuaW1hdGUoZWxlbWVudC5zZWxlY3Rpb25BbmltYXRpb25LZXlmcmFtZXMsIHtcbiAgICAgIGR1cmF0aW9uOiBlbGVtZW50LnNlbGVjdGlvbkFuaW1hdGlvbkR1cmF0aW9uLFxuICAgICAgZmlsbDogJ2JvdGgnXG4gICAgfSk7XG4gICAgYW5pbWF0aW9uLnBhdXNlKCk7XG4gICAgZWxlbWVudFthbmltYXRpb25TeW1ib2xdW2luZGV4XSA9IGFuaW1hdGlvbjtcbiAgfVxuICByZXR1cm4gYW5pbWF0aW9uO1xufVxuXG5mdW5jdGlvbiBpc0l0ZW1JbmRleEluQm91bmRzKGVsZW1lbnQsIGluZGV4KSB7XG4gIHJldHVybiBpbmRleCA+PSAwICYmIGVsZW1lbnQuaXRlbXMgJiYgaW5kZXggPCBlbGVtZW50Lml0ZW1zLmxlbmd0aDtcbn1cblxuLypcbiAqIFJlbmRlciB0aGUgc2VsZWN0aW9uIHN0YXRlIG9mIHRoZSBlbGVtZW50LlxuICpcbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gcmUtcmVuZGVyIGEgcHJldmlvdXMgc2VsZWN0aW9uIHN0YXRlIChpZiB0aGVcbiAqIHNlbGVjdGVkSW5kZXggcGFyYW0gaXMgb21pdHRlZCksIHJlbmRlciB0aGUgc2VsZWN0aW9uIGluc3RhbnRseSBhdCBhIGdpdmVuXG4gKiB3aG9sZSBvciBmcmFjdGlvbmFsIHNlbGVjdGlvbiBpbmRleCwgb3IgYW5pbWF0ZSB0byBhIGdpdmVuIHNlbGVjdGlvbiBpbmRleC5cbiAqXG4gKiBUaGVyZSBhcmUgc2V2ZXJhbCBkaXN0aW5jdCBzY2VuYXJpb3Mgd2UgbmVlZCB0byBjb3ZlcjpcbiAqXG4gKiAxLiBJbml0aWFsIHBvc2l0aW9uaW5nLCBvciByZXBvc2l0aW9uaW5nIGFmdGVyIGNoYW5naW5nIGEgcHJvcGVydHkgbGlrZVxuICogICAgc2VsZWN0aW9uQW5pbWF0aW9uS2V5ZnJhbWVzIHRoYXQgYWZmZWN0cyByZW5kZXJpbmcuXG4gKiAyLiBBbmltYXRlIG9uIHNlbGVjdGVkSW5kZXggY2hhbmdlLiBUaGlzIHNob3VsZCBvdmVycmlkZSBhbnkgYW5pbWF0aW9uL3N3aXBlXG4gKiAgICBhbHJlYWR5IGluIHByb2dyZXNzLlxuICogMy4gSW5zdGFudGx5IHJlbmRlciB0aGUgY3VycmVudCBwb3NpdGlvbiBvZiBhIGRyYWcgb3BlcmF0aW9uIGluIHByb2dyZXNzLlxuICogNC4gQ29tcGxldGUgYSBkcmFnIG9wZXJhdGlvbi4gSWYgdGhlIGRyYWcgd2Fzbid0IGZhciBlbm91Z2ggdG8gYWZmZWN0XG4gKiAgICBzZWxlY3Rpb24sIHdlJ2xsIGp1c3QgYmUgcmVzdG9yaW5nIHRoZSBzZWxlY3RlZEZyYWN0aW9uIHRvIDAuXG4gKlxuICogSWYgdGhlIGxpc3QgZG9lcyBub3Qgd3JhcCwgYW55IHNlbGVjdGlvbiBwb3NpdGlvbiBvdXRzaWRlIHRoZSBsaXN0J3MgYm91bmRzXG4gKiB3aWxsIGJlIGRhbXBlZCB0byBwcm9kdWNlIGEgdmlzdWFsIGVmZmVjdCBvZiB0ZW5zaW9uLlxuICovXG5mdW5jdGlvbiByZW5kZXJTZWxlY3Rpb24oZWxlbWVudCwgc2VsZWN0ZWRJbmRleD1lbGVtZW50LnNlbGVjdGVkSW5kZXgsIHNlbGVjdGVkRnJhY3Rpb249ZWxlbWVudC5zZWxlY3RlZEZyYWN0aW9uKSB7XG4gIGlmIChzZWxlY3RlZEluZGV4IDwgMCkge1xuICAgIC8vIFRPRE86IEhhbmRsZSBubyBzZWxlY3Rpb24uXG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCBzZWxlY3Rpb24gPSBzZWxlY3RlZEluZGV4ICsgc2VsZWN0ZWRGcmFjdGlvbjtcbiAgaWYgKCFlbGVtZW50LnNlbGVjdGlvbldyYXBzKSB7XG4gICAgLy8gQXBwbHkgZGFtcGluZyBpZiBuZWNlc3NhcnkuXG4gICAgbGV0IGl0ZW1Db3VudCA9IGVsZW1lbnQuaXRlbXMgPyBlbGVtZW50Lml0ZW1zLmxlbmd0aCA6IDA7XG4gICAgc2VsZWN0aW9uID0gZnJhY3Rpb25hbFNlbGVjdGlvbi5kYW1wZWRTZWxlY3Rpb24oc2VsZWN0aW9uLCBpdGVtQ291bnQpO1xuICB9XG4gIGxldCBwcmV2aW91c1NlbGVjdGlvbiA9IGVsZW1lbnRbcHJldmlvdXNTZWxlY3Rpb25TeW1ib2xdO1xuICBpZiAoZWxlbWVudFtzaG93VHJhbnNpdGlvblN5bWJvbF0gJiYgcHJldmlvdXNTZWxlY3Rpb24gIT0gbnVsbCAmJlxuICAgICAgcHJldmlvdXNTZWxlY3Rpb24gIT09IHNlbGVjdGlvbikge1xuICAgIC8vIEFuaW1hdGUgc2VsZWN0aW9uIGZyb20gcHJldmlvdXMgc3RhdGUgdG8gbmV3IHN0YXRlLlxuICAgIGFuaW1hdGVTZWxlY3Rpb24oZWxlbWVudCwgcHJldmlvdXNTZWxlY3Rpb24sIHNlbGVjdGlvbik7XG4gIH0gZWxzZSBpZiAoc2VsZWN0ZWRGcmFjdGlvbiA9PT0gMCAmJiBlbGVtZW50W2FuaW1hdGluZ1NlbGVjdGlvblN5bWJvbF0pIHtcbiAgICAvLyBBbHJlYWR5IGluIHByb2Nlc3Mgb2YgYW5pbWF0aW5nIHRvIGZyYWN0aW9uIDAuIER1cmluZyB0aGF0IHByb2Nlc3MsXG4gICAgLy8gaWdub3JlIHN1YnNlcXVlbnQgYXR0ZW1wdHMgdG8gcmVuZGVyU2VsZWN0aW9uIHRvIGZyYWN0aW9uIDAuXG4gICAgcmV0dXJuO1xuICB9IGVsc2Uge1xuICAgIC8vIFJlbmRlciBjdXJyZW50IHNlbGVjdGlvbiBzdGF0ZSBpbnN0YW50bHkuXG4gICAgcmVuZGVyU2VsZWN0aW9uSW5zdGFudGx5KGVsZW1lbnQsIHNlbGVjdGlvbik7XG4gIH1cbiAgZWxlbWVudFtwcmV2aW91c1NlbGVjdGlvblN5bWJvbF0gPSBzZWxlY3Rpb247XG59XG5cbi8qXG4gKiBJbnN0YW50bHkgcmVuZGVyIChkb24ndCBhbmltYXRlKSB0aGUgZWxlbWVudCdzIGl0ZW1zIGF0IHRoZSBnaXZlbiB3aG9sZSBvclxuICogZnJhY3Rpb25hbCBzZWxlY3Rpb24gaW5kZXguXG4gKi9cbmZ1bmN0aW9uIHJlbmRlclNlbGVjdGlvbkluc3RhbnRseShlbGVtZW50LCB0b1NlbGVjdGlvbikge1xuICBsZXQgYW5pbWF0aW9uRnJhY3Rpb25zID0gbWl4aW4uaGVscGVycy5hbmltYXRpb25GcmFjdGlvbnNGb3JTZWxlY3Rpb24oZWxlbWVudCwgdG9TZWxlY3Rpb24pO1xuICBhbmltYXRpb25GcmFjdGlvbnMubWFwKChhbmltYXRpb25GcmFjdGlvbiwgaW5kZXgpID0+IHtcbiAgICBsZXQgaXRlbSA9IGVsZW1lbnQuaXRlbXNbaW5kZXhdO1xuICAgIGlmIChhbmltYXRpb25GcmFjdGlvbiAhPSBudWxsKSB7XG4gICAgICBzaG93SXRlbShpdGVtLCB0cnVlKTtcbiAgICAgIHNldEFuaW1hdGlvbkZyYWN0aW9uKGVsZW1lbnQsIGluZGV4LCBhbmltYXRpb25GcmFjdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNob3dJdGVtKGl0ZW0sIGZhbHNlKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXNldEFuaW1hdGlvbnMoZWxlbWVudCkge1xuICBlbGVtZW50W2FuaW1hdGlvblN5bWJvbF0gPSBuZXcgQXJyYXkoZWxlbWVudC5pdGVtcy5sZW5ndGgpO1xufVxuXG4vKlxuICogUGF1c2UgdGhlIGluZGljYXRlZCBhbmltYXRpb24gYW5kIGhhdmUgaXQgc2hvdyB0aGUgYW5pbWF0aW9uIGF0IHRoZSBnaXZlblxuICogZnJhY3Rpb24gKGJldHdlZW4gMCBhbmQgMSkgb2YgdGhlIHdheSB0aHJvdWdoIHRoZSBhbmltYXRpb24uXG4gKi9cbmZ1bmN0aW9uIHNldEFuaW1hdGlvbkZyYWN0aW9uKGVsZW1lbnQsIGl0ZW1JbmRleCwgZnJhY3Rpb24pIHtcbiAgbGV0IGFuaW1hdGlvbiA9IGdldEFuaW1hdGlvbkZvckl0ZW1JbmRleChlbGVtZW50LCBpdGVtSW5kZXgpO1xuICBpZiAoYW5pbWF0aW9uKSB7XG4gICAgbGV0IGR1cmF0aW9uID0gZWxlbWVudC5zZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvbjtcbiAgICBhbmltYXRpb24uY3VycmVudFRpbWUgPSBmcmFjdGlvbiAqIGR1cmF0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3dJdGVtKGl0ZW0sIGZsYWcpIHtcbiAgaXRlbS5zdHlsZS52aXNpYmlsaXR5ID0gZmxhZyA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nO1xufVxuXG4vKlxuICogRmlndXJlIG91dCBob3cgbWFueSBzdGVwcyBpdCB3aWxsIHRha2UgdG8gZ28gZnJvbSBmcm9tU2VsZWN0aW9uIHRvXG4gKiB0b1NlbGVjdGlvbi4gVG8gZ28gZnJvbSBpdGVtIDMgdG8gaXRlbSA0IGlzIG9uZSBzdGVwLlxuICpcbiAqIElmIHdyYXBwaW5nIGlzIGFsbG93ZWQsIHRoZW4gZ29pbmcgZnJvbSB0aGUgbGFzdCBpdGVtIHRvIHRoZSBmaXJzdCB3aWxsIHRha2VcbiAqIG9uZSBzdGVwIChmb3J3YXJkKSwgYW5kIGdvaW5nIGZyb20gdGhlIGZpcnN0IGl0ZW0gdG8gdGhlIGxhc3Qgd2lsbCB0YWtlIG9uZVxuICogc3RlcCAoYmFja3dhcmQpLlxuICovXG5mdW5jdGlvbiBzdGVwc1RvSW5kZXgobGVuZ3RoLCBhbGxvd1dyYXAsIGZyb21TZWxlY3Rpb24sIHRvU2VsZWN0aW9uKSB7XG4gIGxldCBzdGVwcyA9IHRvU2VsZWN0aW9uIC0gZnJvbVNlbGVjdGlvbjtcbiAgLy8gV3JhcHBpbmcgb25seSBraWNrcyBpbiB3aGVuIGxpc3QgaGFzIG1vcmUgdGhhbiAxIGl0ZW0uXG4gIGlmIChhbGxvd1dyYXAgJiYgbGVuZ3RoID4gMSkge1xuICAgIGxldCB3cmFwU3RlcHMgPSBsZW5ndGggLSBNYXRoLmFicyhzdGVwcyk7XG4gICAgaWYgKHdyYXBTdGVwcyA8PSAxKSB7XG4gICAgICAvLyBTcGVjaWFsIGNhc2VcbiAgICAgIHN0ZXBzID0gc3RlcHMgPCAwID9cbiAgICAgICAgd3JhcFN0ZXBzIDogICAvLyBXcmFwIGZvcndhcmQgZnJvbSBsYXN0IGl0ZW0gdG8gZmlyc3QuXG4gICAgICAgIC13cmFwU3RlcHM7ICAgLy8gV3JhcCBiYWNrd2FyZCBmcm9tIGZpcnN0IGl0ZW0gdG8gbGFzdC5cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0ZXBzO1xufVxuIiwiLy8gVXNlZCB0byBhc3NpZ24gdW5pcXVlIElEcyB0byBpdGVtIGVsZW1lbnRzIHdpdGhvdXQgSURzLlxubGV0IGlkQ291bnQgPSAwO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggU2VsZWN0aW9uQXJpYUFjdGl2ZS4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIHRyZWF0cyB0aGUgc2VsZWN0ZWQgaXRlbSBpbiBhIGxpc3QgYXMgdGhlIGFjdGl2ZSBpdGVtIGluIEFSSUFcbiAgICogYWNjZXNzaWJpbGl0eSB0ZXJtcy5cbiAgICpcbiAgICogSGFuZGxpbmcgQVJJQSBzZWxlY3Rpb24gc3RhdGUgcHJvcGVybHkgaXMgYWN0dWFsbHkgcXVpdGUgY29tcGxleDpcbiAgICpcbiAgICogKiBUaGUgaXRlbXMgaW4gdGhlIGxpc3QgbmVlZCB0byBiZSBpbmRpY2F0ZWQgYXMgcG9zc2libGUgaXRlbXMgdmlhIGFuIEFSSUFcbiAgICogICBgcm9sZWAgYXR0cmlidXRlIHZhbHVlIHN1Y2ggYXMgXCJvcHRpb25cIi5cbiAgICogKiBUaGUgc2VsZWN0ZWQgaXRlbSBuZWVkIHRvIGJlIG1hcmtlZCBhcyBzZWxlY3RlZCBieSBzZXR0aW5nIHRoZSBpdGVtJ3NcbiAgICogICBgYXJpYS1zZWxlY3RlZGAgYXR0cmlidXRlIHRvIHRydWUgKmFuZCogdGhlIG90aGVyIGl0ZW1zIG5lZWQgYmUgbWFya2VkIGFzXG4gICAqICAgKm5vdCogc2VsZWN0ZWQgYnkgc2V0dGluZyBgYXJpYS1zZWxlY3RlZGAgdG8gZmFsc2UuXG4gICAqICogVGhlIG91dGVybW9zdCBlbGVtZW50IHdpdGggdGhlIGtleWJvYXJkIGZvY3VzIG5lZWRzIHRvIGhhdmUgYXR0cmlidXRlc1xuICAgKiAgIHNldCBvbiBpdCBzbyB0aGF0IHRoZSBzZWxlY3Rpb24gaXMga25vd2FibGUgYXQgdGhlIGxpc3QgbGV2ZWwgdmlhIHRoZVxuICAgKiAgIGBhcmlhLWFjdGl2ZWRlc2NlbmRhbnRgIGF0dHJpYnV0ZS5cbiAgICogKiBVc2Ugb2YgYGFyaWEtYWN0aXZlZGVzY2VuZGFudGAgaW4gdHVybiByZXF1aXJlcyB0aGF0IGFsbCBpdGVtcyBpbiB0aGVcbiAgICogICBsaXN0IGhhdmUgSUQgYXR0cmlidXRlcyBhc3NpZ25lZCB0byB0aGVtLlxuICAgKlxuICAgKiBUaGlzIG1peGluIHRyaWVzIHRvIGFkZHJlc3MgYWxsIG9mIHRoZSBhYm92ZSByZXF1aXJlbWVudHMuIFRvIHRoYXQgZW5kLFxuICAgKiB0aGlzIG1peGluIHdpbGwgYXNzaWduIGdlbmVyYXRlZCBJRHMgdG8gYW55IGl0ZW0gdGhhdCBkb2Vzbid0IGFscmVhZHkgaGF2ZVxuICAgKiBhbiBJRC5cbiAgICpcbiAgICogQVJJQSByZWxpZXMgb24gZWxlbWVudHMgdG8gcHJvdmlkZSBgcm9sZWAgYXR0cmlidXRlcy4gVGhpcyBtaXhpbiB3aWxsIGFwcGx5XG4gICAqIGEgZGVmYXVsdCByb2xlIG9mIFwibGlzdGJveFwiIG9uIHRoZSBvdXRlciBsaXN0IGlmIGl0IGRvZXNuJ3QgYWxyZWFkeSBoYXZlIGFuXG4gICAqIGV4cGxpY2l0IHJvbGUuIFNpbWlsYXJseSwgdGhpcyBtaXhpbiB3aWxsIGFwcGx5IGEgZGVmYXVsdCByb2xlIG9mIFwib3B0aW9uXCJcbiAgICogdG8gYW55IGxpc3QgaXRlbSB0aGF0IGRvZXMgbm90IGFscmVhZHkgaGF2ZSBhIHJvbGUgc3BlY2lmaWVkLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGV4cGVjdHMgYSBzZXQgb2YgbWVtYmVycyB0aGF0IG1hbmFnZSB0aGUgc3RhdGUgb2YgdGhlIHNlbGVjdGlvbjpcbiAgICogYGFwcGx5U2VsZWN0aW9uYCwgYGl0ZW1BZGRlZGAsIGFuZCBgc2VsZWN0ZWRJbmRleGAuIFlvdSBjYW4gc3VwcGx5IHRoZXNlXG4gICAqIHlvdXJzZWxmLCBvciBkbyBzbyB2aWEgdGhlIFtJdGVtc1NlbGVjdGlvbl0oSXRlbXNTZWxlY3Rpb24ubWQpIG1peGluLlxuICAgKi9cbiAgY2xhc3MgU2VsZWN0aW9uQXJpYUFjdGl2ZSBleHRlbmRzIGJhc2Uge1xuXG4gICAgYXBwbHlTZWxlY3Rpb24oaXRlbSwgc2VsZWN0ZWQpIHtcbiAgICAgIGlmIChzdXBlci5hcHBseVNlbGVjdGlvbikgeyBzdXBlci5hcHBseVNlbGVjdGlvbihpdGVtLCBzZWxlY3RlZCk7IH1cbiAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgc2VsZWN0ZWQpO1xuICAgICAgbGV0IGl0ZW1JZCA9IGl0ZW0uaWQ7XG4gICAgICBpZiAoaXRlbUlkKSB7XG4gICAgICAgIGxldCBvdXRlcm1vc3QgPSB0aGlzLmNvbGxlY3RpdmUgP1xuICAgICAgICAgIHRoaXMuY29sbGVjdGl2ZS5vdXRlcm1vc3RFbGVtZW50IDpcbiAgICAgICAgICB0aGlzO1xuICAgICAgICBvdXRlcm1vc3Quc2V0QXR0cmlidXRlKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnLCBpdGVtSWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbGxlY3RpdmVDaGFuZ2VkKCkge1xuICAgICAgaWYgKHN1cGVyLmNvbGxlY3RpdmVDaGFuZ2VkKSB7IHN1cGVyLmNvbGxlY3RpdmVDaGFuZ2VkKCk7IH1cblxuICAgICAgLy8gRW5zdXJlIHRoZSBvdXRlcm1vc3QgYXNwZWN0IGhhcyBhbiBBUklBIHJvbGUuXG4gICAgICBsZXQgb3V0ZXJtb3N0RWxlbWVudCA9IHRoaXMuY29sbGVjdGl2ZS5vdXRlcm1vc3RFbGVtZW50O1xuICAgICAgaWYgKCFvdXRlcm1vc3RFbGVtZW50LmdldEF0dHJpYnV0ZSgncm9sZScpKSB7XG4gICAgICAgIC8vIFRyeSB0byBwcm9tb3RlIGFuIEFSSUEgcm9sZSBmcm9tIGFuIGlubmVyIGVsZW1lbnQuIElmIG5vbmUgaXMgZm91bmQsXG4gICAgICAgIC8vIHVzZSBhIGRlZmF1bHQgcm9sZS5cbiAgICAgICAgbGV0IHJvbGUgPSBnZXRDb2xsZWN0aXZlQXJpYVJvbGUodGhpcy5jb2xsZWN0aXZlKSB8fCAnbGlzdGJveCc7XG4gICAgICAgIG91dGVybW9zdEVsZW1lbnQuc2V0QXR0cmlidXRlKCdyb2xlJywgcm9sZSk7XG4gICAgICB9XG4gICAgICBpZiAoIW91dGVybW9zdEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnKSkge1xuICAgICAgICAvLyBUcnkgdG8gcHJvbW90ZSBhbiBBUklBIGFjdGl2ZWRlc2NlbmRhbnQgdmFsdWUgZnJvbSBhbiBpbm5lciBlbGVtZW50LlxuICAgICAgICBsZXQgZGVzY2VuZGFudCA9IGdldENvbGxlY3RpdmVBcmlhQWN0aXZlRGVzY2VuZGFudCh0aGlzLmNvbGxlY3RpdmUpO1xuICAgICAgICBpZiAoZGVzY2VuZGFudCkge1xuICAgICAgICAgIG91dGVybW9zdEVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnLCBkZXNjZW5kYW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBSZW1vdmUgdGhlIEFSSUEgcm9sZSBhbmQgYWN0aXZlZGVzY2VuZGFudCB2YWx1ZXMgZnJvbSB0aGUgY29sbGVjdGl2ZSdzXG4gICAgICAvLyBpbm5lciBlbGVtZW50cy5cbiAgICAgIHRoaXMuY29sbGVjdGl2ZS5lbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBpZiAoZWxlbWVudCAhPT0gb3V0ZXJtb3N0RWxlbWVudCkge1xuICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnKTtcbiAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgncm9sZScsICdub25lJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cbiAgICAgIGlmICghdGhpcy5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgncm9sZScsICdsaXN0Ym94Jyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaXRlbUFkZGVkKGl0ZW0pIHtcbiAgICAgIGlmIChzdXBlci5pdGVtQWRkZWQpIHsgc3VwZXIuaXRlbUFkZGVkKGl0ZW0pOyB9XG5cbiAgICAgIGlmICghaXRlbS5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSkge1xuICAgICAgICAvLyBBc3NpZ24gYSBkZWZhdWx0IEFSSUEgcm9sZS5cbiAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnb3B0aW9uJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIEVuc3VyZSBlYWNoIGl0ZW0gaGFzIGFuIElEIHNvIHdlIGNhbiBzZXQgYXJpYS1hY3RpdmVkZXNjZW5kYW50IG9uIHRoZVxuICAgICAgLy8gb3ZlcmFsbCBsaXN0IHdoZW5ldmVyIHRoZSBzZWxlY3Rpb24gY2hhbmdlcy5cbiAgICAgIC8vXG4gICAgICAvLyBUaGUgSUQgd2lsbCB0YWtlIHRoZSBmb3JtIG9mIGEgYmFzZSBJRCBwbHVzIGEgdW5pcXVlIGludGVnZXIuIFRoZSBiYXNlXG4gICAgICAvLyBJRCB3aWxsIGJlIGluY29ycG9yYXRlIHRoZSBjb21wb25lbnQncyBvd24gSUQuIEUuZy4sIGlmIGEgY29tcG9uZW50IGhhc1xuICAgICAgLy8gSUQgXCJmb29cIiwgdGhlbiBpdHMgaXRlbXMgd2lsbCBoYXZlIElEcyB0aGF0IGxvb2sgbGlrZSBcIl9mb29PcHRpb24xXCIuIElmXG4gICAgICAvLyB0aGUgY29tcG5lbnQgaGFzIG5vIElEIGl0c2VsZiwgaXRzIGl0ZW1zIHdpbGwgZ2V0IElEcyB0aGF0IGxvb2sgbGlrZVxuICAgICAgLy8gXCJfb3B0aW9uMVwiLiBJdGVtIElEcyBhcmUgcHJlZml4ZWQgd2l0aCBhbiB1bmRlcnNjb3JlIHRvIGRpZmZlcmVudGlhdGVcbiAgICAgIC8vIHRoZW0gZnJvbSBtYW51YWxseS1hc3NpZ25lZCBJRHMsIGFuZCB0byBtaW5pbWl6ZSB0aGUgcG90ZW50aWFsIGZvciBJRFxuICAgICAgLy8gY29uZmxpY3RzLlxuICAgICAgaWYgKCFpdGVtLmlkKSB7XG4gICAgICAgIGxldCBiYXNlSWQgPSB0aGlzLmlkID9cbiAgICAgICAgICAgIFwiX1wiICsgdGhpcy5pZCArIFwiT3B0aW9uXCIgOlxuICAgICAgICAgICAgXCJfb3B0aW9uXCI7XG4gICAgICAgIGl0ZW0uaWQgPSBiYXNlSWQgKyBpZENvdW50Kys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdGVkSXRlbSgpIHtcbiAgICAgIHJldHVybiBzdXBlci5zZWxlY3RlZEl0ZW07XG4gICAgfVxuICAgIHNldCBzZWxlY3RlZEl0ZW0oaXRlbSkge1xuICAgICAgaWYgKCdzZWxlY3RlZEl0ZW0nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkSXRlbSA9IGl0ZW07IH1cbiAgICAgIC8vIENhdGNoIHRoZSBjYXNlIHdoZXJlIHRoZSBzZWxlY3Rpb24gaXMgcmVtb3ZlZC5cbiAgICAgIGlmIChpdGVtID09IG51bGwpIHtcbiAgICAgICAgbGV0IG91dGVybW9zdCA9IHRoaXMuY29sbGVjdGl2ZSA/XG4gICAgICAgICAgdGhpcy5jb2xsZWN0aXZlLm91dGVybW9zdEVsZW1lbnQgOlxuICAgICAgICAgIHRoaXM7XG4gICAgICAgIG91dGVybW9zdC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIFNlbGVjdGlvbkFyaWFBY3RpdmU7XG59O1xuXG5cbi8vIFJldHVybiB0aGUgZmlyc3QgQVJJQSBhY3RpdmVkZXNjZW5kYW50IGRlZmluZWQgYnkgdGhlIGNvbGxlY3RpdmUuXG5mdW5jdGlvbiBnZXRDb2xsZWN0aXZlQXJpYUFjdGl2ZURlc2NlbmRhbnQoY29sbGVjdGl2ZSkge1xuICBsZXQgZGVzY2VuZGFudHMgPSBjb2xsZWN0aXZlLmVsZW1lbnRzLm1hcChlbGVtZW50ID0+IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnKSk7XG4gIGxldCBub25OdWxsRGVzY2VuZGFudHMgPSBkZXNjZW5kYW50cy5maWx0ZXIoZGVzY2VuZGFudCA9PiBkZXNjZW5kYW50ICE9PSBudWxsKTtcbiAgcmV0dXJuIG5vbk51bGxEZXNjZW5kYW50c1swXTtcbn1cblxuXG4vLyBSZXR1cm4gdGhlIGZpcnN0IEFSSUEgbGFiZWwgZGVmaW5lZCBieSB0aGUgY29sbGVjdGl2ZS5cbmZ1bmN0aW9uIGdldENvbGxlY3RpdmVBcmlhUm9sZShjb2xsZWN0aXZlKSB7XG4gIGxldCByb2xlcyA9IGNvbGxlY3RpdmUuZWxlbWVudHMubWFwKGVsZW1lbnQgPT4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSk7XG4gIGxldCBub25OdWxsUm9sZXMgPSByb2xlcy5maWx0ZXIocm9sZSA9PiByb2xlICE9PSBudWxsKTtcbiAgcmV0dXJuIG5vbk51bGxSb2xlc1swXTtcbn1cbiIsIi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggU2hhZG93RWxlbWVudFJlZmVyZW5jZXMuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB0byBjcmVhdGUgcmVmZXJlbmNlcyB0byBlbGVtZW50cyBpbiBhIGNvbXBvbmVudCdzIFNoYWRvdyBET00gc3VidHJlZS5cbiAgICpcbiAgICogVGhpcyBhZGRzIGEgbWVtYmVyIG9uIHRoZSBjb21wb25lbnQgY2FsbGVkIGB0aGlzLiRgIHRoYXQgY2FuIGJlIHVzZWQgdG9cbiAgICogcmVmZXJlbmNlIHNoYWRvdyBlbGVtZW50cyB3aXRoIElEcy4gRS5nLiwgaWYgY29tcG9uZW50J3Mgc2hhZG93IGNvbnRhaW5zIGFuXG4gICAqIGVsZW1lbnQgYDxidXR0b24gaWQ9XCJmb29cIj5gLCB0aGVuIHRoaXMgbWl4aW4gd2lsbCBjcmVhdGUgYSBtZW1iZXJcbiAgICogYHRoaXMuJC5mb29gIHRoYXQgcG9pbnRzIHRvIHRoYXQgYnV0dG9uLlxuICAgKlxuICAgKiBTdWNoIHJlZmVyZW5jZXMgc2ltcGxpZnkgYSBjb21wb25lbnQncyBhY2Nlc3MgdG8gaXRzIG93biBlbGVtZW50cy4gSW5cbiAgICogZXhjaGFuZ2UsIHRoaXMgbWl4aW4gdHJhZGVzIG9mZiBhIG9uZS10aW1lIGNvc3Qgb2YgcXVlcnlpbmcgYWxsIGVsZW1lbnRzIGluXG4gICAqIHRoZSBzaGFkb3cgdHJlZSBpbnN0ZWFkIG9mIHBheWluZyBhbiBvbmdvaW5nIGNvc3QgdG8gcXVlcnkgZm9yIGFuIGVsZW1lbnRcbiAgICogZWFjaCB0aW1lIHRoZSBjb21wb25lbnQgd2FudHMgdG8gaW5zcGVjdCBvciBtYW5pcHVsYXRlIGl0LlxuICAgKlxuICAgKiBUaGlzIG1peGluIGV4cGVjdHMgdGhlIGNvbXBvbmVudCB0byBkZWZpbmUgYSBTaGFkb3cgRE9NIHN1YnRyZWUuIFlvdSBjYW5cbiAgICogY3JlYXRlIHRoYXQgdHJlZSB5b3Vyc2VsZiwgb3IgbWFrZSB1c2Ugb2YgdGhlXG4gICAqIFtTaGFkb3dUZW1wbGF0ZV0oU2hhZG93VGVtcGxhdGUubWQpIG1peGluLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGlzIGluc3BpcmVkIGJ5IFBvbHltZXIncyBbYXV0b21hdGljXG4gICAqIG5vZGUgZmluZGluZ10oaHR0cHM6Ly93d3cucG9seW1lci1wcm9qZWN0Lm9yZy8xLjAvZG9jcy9kZXZndWlkZS9sb2NhbC1kb20uaHRtbCNub2RlLWZpbmRpbmcpXG4gICAqIGZlYXR1cmUuXG4gICAqL1xuICBjbGFzcyBTaGFkb3dFbGVtZW50UmVmZXJlbmNlcyBleHRlbmRzIGJhc2Uge1xuXG4gICAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuICAgICAgaWYgKHRoaXMuc2hhZG93Um9vdCkge1xuICAgICAgICAvLyBMb29rIGZvciBlbGVtZW50cyBpbiB0aGUgc2hhZG93IHN1YnRyZWUgdGhhdCBoYXZlIGlkIGF0dHJpYnV0ZXMuXG4gICAgICAgIC8vIEFuIGFsdGVybmF0aXZlbHkgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtaXhpbiB3b3VsZCBiZSB0byBqdXN0IGRlZmluZVxuICAgICAgICAvLyBhIHRoaXMuJCBnZXR0ZXIgdGhhdCBsYXppbHkgZG9lcyB0aGlzIHNlYXJjaCB0aGUgZmlyc3QgdGltZSBzb21lb25lXG4gICAgICAgIC8vIHRyaWVzIHRvIGFjY2VzcyB0aGlzLiQuIFRoYXQgbWlnaHQgaW50cm9kdWNlIHNvbWUgY29tcGxleGl0eSDigJMgaWYgdGhlXG4gICAgICAgIC8vIHRoZSB0cmVlIGNoYW5nZWQgYWZ0ZXIgaXQgd2FzIGZpcnN0IHBvcHVsYXRlZCwgdGhlIHJlc3VsdCBvZlxuICAgICAgICAvLyBzZWFyY2hpbmcgZm9yIGEgbm9kZSBtaWdodCBiZSBzb21ld2hhdCB1bnByZWRpY3RhYmxlLlxuICAgICAgICB0aGlzLiQgPSB7fTtcbiAgICAgICAgbGV0IG5vZGVzV2l0aElkcyA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yQWxsKCdbaWRdJyk7XG4gICAgICAgIFtdLmZvckVhY2guY2FsbChub2Rlc1dpdGhJZHMsIG5vZGUgPT4ge1xuICAgICAgICAgIGxldCBpZCA9IG5vZGUuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgICAgICAgIHRoaXMuJFtpZF0gPSBub2RlO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29sbGVjdGlvbiBvZiByZWZlcmVuY2VzIHRvIHRoZSBlbGVtZW50cyB3aXRoIElEcyBpbiBhIGNvbXBvbmVudCdzXG4gICAgICogU2hhZG93IERPTSBzdWJ0cmVlLlxuICAgICAqXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKiBAbWVtYmVyICRcbiAgICAgKi9cbiAgfVxuXG4gIHJldHVybiBTaGFkb3dFbGVtZW50UmVmZXJlbmNlcztcbn07XG4iLCIvLyBGZWF0dXJlIGRldGVjdGlvbiBmb3Igb2xkIFNoYWRvdyBET00gdjAuXG5jb25zdCBVU0lOR19TSEFET1dfRE9NX1YwID0gKHR5cGVvZiBIVE1MRWxlbWVudC5wcm90b3R5cGUuY3JlYXRlU2hhZG93Um9vdCAhPT0gJ3VuZGVmaW5lZCcpO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggU2hhZG93VGVtcGxhdGUuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiBmb3Igc3RhbXBpbmcgYSB0ZW1wbGF0ZSBpbnRvIGEgU2hhZG93IERPTSBzdWJ0cmVlIHVwb24gY29tcG9uZW50XG4gICAqIGluc3RhbnRpYXRpb24uXG4gICAqXG4gICAqIFRvIHVzZSB0aGlzIG1peGluLCBkZWZpbmUgYSBgdGVtcGxhdGVgIHByb3BlcnR5IGFzIGEgc3RyaW5nIG9yIEhUTUxcbiAgICogYDx0ZW1wbGF0ZT5gIGVsZW1lbnQ6XG4gICAqXG4gICAqICAgICBjbGFzcyBNeUVsZW1lbnQgZXh0ZW5kcyBTaGFkb3dUZW1wbGF0ZShIVE1MRWxlbWVudCkge1xuICAgKiAgICAgICBnZXQgdGVtcGxhdGUoKSB7XG4gICAqICAgICAgICAgcmV0dXJuIGBIZWxsbywgPGVtPndvcmxkPC9lbT4uYDtcbiAgICogICAgICAgfVxuICAgKiAgICAgfVxuICAgKlxuICAgKiBXaGVuIHlvdXIgY29tcG9uZW50IGNsYXNzIGlzIGluc3RhbnRpYXRlZCwgYSBzaGFkb3cgcm9vdCB3aWxsIGJlIGNyZWF0ZWQgb25cbiAgICogdGhlIGluc3RhbmNlLCBhbmQgdGhlIGNvbnRlbnRzIG9mIHRoZSB0ZW1wbGF0ZSB3aWxsIGJlIGNsb25lZCBpbnRvIHRoZVxuICAgKiBzaGFkb3cgcm9vdC4gSWYgeW91ciBjb21wb25lbnQgZG9lcyBub3QgZGVmaW5lIGEgYHRlbXBsYXRlYCBwcm9wZXJ0eSwgdGhpc1xuICAgKiBtaXhpbiBoYXMgbm8gZWZmZWN0LlxuICAgKlxuICAgKiBGb3IgdGhlIHRpbWUgYmVpbmcsIHRoaXMgZXh0ZW5zaW9uIHJldGFpbnMgc3VwcG9ydCBmb3IgU2hhZG93IERPTSB2MC4gVGhhdFxuICAgKiB3aWxsIGV2ZW50dWFsbHkgYmUgZGVwcmVjYXRlZCBhcyBicm93c2VycyAoYW5kIHRoZSBTaGFkb3cgRE9NIHBvbHlmaWxsKVxuICAgKiBpbXBsZW1lbnQgU2hhZG93IERPTSB2MS5cbiAgICovXG4gIGNsYXNzIFNoYWRvd1RlbXBsYXRlIGV4dGVuZHMgYmFzZSB7XG5cbiAgICAvKlxuICAgICAqIElmIHRoZSBjb21wb25lbnQgZGVmaW5lcyBhIHRlbXBsYXRlLCBhIHNoYWRvdyByb290IHdpbGwgYmUgY3JlYXRlZCBvbiB0aGVcbiAgICAgKiBjb21wb25lbnQgaW5zdGFuY2UsIGFuZCB0aGUgdGVtcGxhdGUgc3RhbXBlZCBpbnRvIGl0LlxuICAgICAqL1xuICAgIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cbiAgICAgIGxldCB0ZW1wbGF0ZSA9IHRoaXMudGVtcGxhdGU7XG4gICAgICAvLyBUT0RPOiBTYXZlIHRoZSBwcm9jZXNzZWQgdGVtcGxhdGUgd2l0aCB0aGUgY29tcG9uZW50J3MgY2xhc3MgcHJvdG90eXBlXG4gICAgICAvLyBzbyBpdCBkb2Vzbid0IG5lZWQgdG8gYmUgcHJvY2Vzc2VkIHdpdGggZXZlcnkgaW5zdGFudGlhdGlvbi5cbiAgICAgIGlmICh0ZW1wbGF0ZSkge1xuXG4gICAgICAgIGlmICh0eXBlb2YgdGVtcGxhdGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgLy8gVXBncmFkZSBwbGFpbiBzdHJpbmcgdG8gcmVhbCB0ZW1wbGF0ZS5cbiAgICAgICAgICB0ZW1wbGF0ZSA9IGNyZWF0ZVRlbXBsYXRlV2l0aElubmVySFRNTCh0ZW1wbGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoVVNJTkdfU0hBRE9XX0RPTV9WMCkge1xuICAgICAgICAgIHBvbHlmaWxsU2xvdFdpdGhDb250ZW50KHRlbXBsYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh3aW5kb3cuU2hhZG93RE9NUG9seWZpbGwpIHtcbiAgICAgICAgICBzaGltVGVtcGxhdGVTdHlsZXModGVtcGxhdGUsIHRoaXMubG9jYWxOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRoaXMubG9nKFwiY2xvbmluZyB0ZW1wbGF0ZSBpbnRvIHNoYWRvdyByb290XCIpO1xuICAgICAgICBsZXQgcm9vdCA9IFVTSU5HX1NIQURPV19ET01fVjAgP1xuICAgICAgICAgIHRoaXMuY3JlYXRlU2hhZG93Um9vdCgpIDogICAgICAgICAgICAgLy8gU2hhZG93IERPTSB2MFxuICAgICAgICAgIHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pOyAgLy8gU2hhZG93IERPTSB2MVxuICAgICAgICBsZXQgY2xvbmUgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRlbXBsYXRlLmNvbnRlbnQsIHRydWUpO1xuICAgICAgICByb290LmFwcGVuZENoaWxkKGNsb25lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBTaGFkb3dUZW1wbGF0ZTtcbn07XG5cblxuLy8gQ29udmVydCBhIHBsYWluIHN0cmluZyBvZiBIVE1MIGludG8gYSByZWFsIHRlbXBsYXRlIGVsZW1lbnQuXG5mdW5jdGlvbiBjcmVhdGVUZW1wbGF0ZVdpdGhJbm5lckhUTUwoaW5uZXJIVE1MKSB7XG4gIGxldCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gIC8vIFJFVklFVzogSXMgdGhlcmUgYW4gZWFzaWVyIHdheSB0byBkbyB0aGlzP1xuICAvLyBXZSdkIGxpa2UgdG8ganVzdCBzZXQgaW5uZXJIVE1MIG9uIHRoZSB0ZW1wbGF0ZSBjb250ZW50LCBidXQgc2luY2UgaXQnc1xuICAvLyBhIERvY3VtZW50RnJhZ21lbnQsIHRoYXQgZG9lc24ndCB3b3JrLlxuICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gIHdoaWxlIChkaXYuY2hpbGROb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgdGVtcGxhdGUuY29udGVudC5hcHBlbmRDaGlsZChkaXYuY2hpbGROb2Rlc1swXSk7XG4gIH1cbiAgcmV0dXJuIHRlbXBsYXRlO1xufVxuXG4vLyBSZXBsYWNlIG9jY3VyZW5jZXMgb2YgdjEgc2xvdCBlbGVtZW50cyB3aXRoIHYwIGNvbnRlbnQgZWxlbWVudHMuXG4vLyBUaGlzIGRvZXMgbm90IHlldCBtYXAgbmFtZWQgc2xvdHMgdG8gY29udGVudCBzZWxlY3QgY2xhdXNlcy5cbmZ1bmN0aW9uIHBvbHlmaWxsU2xvdFdpdGhDb250ZW50KHRlbXBsYXRlKSB7XG4gIFtdLmZvckVhY2guY2FsbCh0ZW1wbGF0ZS5jb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3Nsb3QnKSwgc2xvdEVsZW1lbnQgPT4ge1xuICAgIGxldCBjb250ZW50RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NvbnRlbnQnKTtcbiAgICBzbG90RWxlbWVudC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChjb250ZW50RWxlbWVudCwgc2xvdEVsZW1lbnQpO1xuICB9KTtcbn1cblxuLy8gSW52b2tlIGJhc2ljIHN0eWxlIHNoaW1taW5nIHdpdGggU2hhZG93Q1NTLlxuZnVuY3Rpb24gc2hpbVRlbXBsYXRlU3R5bGVzKHRlbXBsYXRlLCB0YWcpIHtcbiAgd2luZG93LldlYkNvbXBvbmVudHMuU2hhZG93Q1NTLnNoaW1TdHlsaW5nKHRlbXBsYXRlLmNvbnRlbnQsIHRhZyk7XG59XG4iLCIvKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFN3aXBlRGlyZWN0aW9uLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggbWFwcyB0b3VjaCBnZXN0dXJlcyAoc3dpcGUgbGVmdCwgc3dpcGUgcmlnaHQpIHRvIGRpcmVjdGlvblxuICAgKiBzZW1hbnRpY3MgKGdvIHJpZ2h0LCBnbyBsZWZ0KS5cbiAgICpcbiAgICogQnkgZGVmYXVsdCwgdGhpcyBtaXhpbiBwcmVzZW50cyBubyB1c2VyLXZpc2libGUgZWZmZWN0czsgaXQganVzdCBpbmRpY2F0ZXMgYVxuICAgKiBkaXJlY3Rpb24gaW4gd2hpY2ggdGhlIHVzZXIgaXMgY3VycmVudGx5IHN3aXBpbmcgb3IgaGFzIGZpbmlzaGVkIHN3aXBpbmcuIFRvXG4gICAqIG1hcCB0aGUgZGlyZWN0aW9uIHRvIGEgY2hhbmdlIGluIHNlbGVjdGlvbiwgdXNlIHRoZVxuICAgKiBbRGlyZWN0aW9uU2VsZWN0aW9uXShEaXJlY3Rpb25TZWxlY3Rpb24ubWQpIG1peGluLlxuICAgKi9cbiAgY2xhc3MgU3dpcGVEaXJlY3Rpb24gZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cblxuICAgICAgLy8gRm9yIHRoZSBjb21wb25lbnQgdG8gcmVjZWl2ZSBQb2ludGVyRXZlbnRzIGluIElFL0VkZ2UsIHdlIG5lZWQgdG8gc2V0XG4gICAgICAvLyB0b3VjaC1hY3Rpb246IG5vbmUuIE9ubHkgbWFrZSB0aGlzIGNoYW5nZSBpZiB0b3VjaC1hY3Rpb24gaXMgY3VycmVudGx5XG4gICAgICAvLyB0aGUgZGVmYXVsdCB2YWx1ZSAoXCJhdXRvXCIpLCBpbiBjYXNlIHRoZSBkZXZlbG9wZXIga25vd3MgYmV0dGVyIHRoYW4gd2VcbiAgICAgIC8vIGRvIHdoYXQgdGhleSB3YW50IGluIHRoZWlyIHBhcnRpY3VsYXIgY29udGV4dC5cbiAgICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKHRoaXMpLnRvdWNoQWN0aW9uID09PSAnYXV0bycpIHtcbiAgICAgICAgdGhpcy5zdHlsZS50b3VjaEFjdGlvbiA9ICdub25lJztcbiAgICAgIH1cblxuICAgICAgdGhpcy50cmF2ZWxGcmFjdGlvbiA9IDA7XG5cbiAgICAgIC8vIFRPRE86IFRvdWNoIGV2ZW50cyBjb3VsZCBiZSBmYWN0b3JlZCBvdXQgaW50byBpdHMgb3duIG1peGluLlxuXG4gICAgICAvLyBJbiBhbGwgdG91Y2ggZXZlbnRzLCBvbmx5IGhhbmRsZSBzaW5nbGUgdG91Y2hlcy4gV2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgLy8gaW5hZHZlcnRlbnRseSBkbyB3b3JrIHdoZW4gdGhlIHVzZXIncyB0cnlpbmcgdG8gcGluY2gtem9vbSBmb3IgZXhhbXBsZS5cbiAgICAgIC8vIFRPRE86IEV2ZW4gYmV0dGVyIGFwcHJvYWNoIHRoYW4gYmVsb3cgd291bGQgYmUgdG8gaWdub3JlIHRvdWNoZXMgYWZ0ZXJcbiAgICAgIC8vIHRoZSBmaXJzdCBpZiB0aGUgdXNlciBoYXMgYWxyZWFkeSBiZWd1biBhIHN3aXBlLlxuICAgICAgaWYgKHdpbmRvdy5Qb2ludGVyRXZlbnQpIHtcbiAgICAgICAgLy8gUHJlZmVyIGxpc3RlbmluZyB0byBzdGFuZGFyZCBwb2ludGVyIGV2ZW50cy5cbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIGV2ZW50ID0+IHtcbiAgICAgICAgICBpZiAoaXNFdmVudEZvclBlbk9yUHJpbWFyeVRvdWNoKGV2ZW50KSkge1xuICAgICAgICAgICAgdG91Y2hTdGFydCh0aGlzLCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJtb3ZlJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGlmIChpc0V2ZW50Rm9yUGVuT3JQcmltYXJ5VG91Y2goZXZlbnQpKSB7XG4gICAgICAgICAgICBsZXQgaGFuZGxlZCA9IHRvdWNoTW92ZSh0aGlzLCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcbiAgICAgICAgICAgIGlmIChoYW5kbGVkKSB7XG4gICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVydXAnLCBldmVudCA9PiB7XG4gICAgICAgICAgaWYgKGlzRXZlbnRGb3JQZW5PclByaW1hcnlUb3VjaChldmVudCkpIHtcbiAgICAgICAgICAgIHRvdWNoRW5kKHRoaXMsIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBQb2ludGVyIGV2ZW50cyBub3Qgc3VwcG9ydGVkIC0tIGxpc3RlbiB0byBvbGRlciB0b3VjaCBldmVudHMuXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5fbXVsdGlUb3VjaCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQudG91Y2hlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIGxldCBjbGllbnRYID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgICAgIGxldCBjbGllbnRZID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WTtcbiAgICAgICAgICAgIHRvdWNoU3RhcnQodGhpcywgY2xpZW50WCwgY2xpZW50WSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX211bHRpVG91Y2ggPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGlmICghdGhpcy5fbXVsdGlUb3VjaCAmJiBldmVudC50b3VjaGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgbGV0IGNsaWVudFggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICAgICAgbGV0IGNsaWVudFkgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZO1xuICAgICAgICAgICAgbGV0IGhhbmRsZWQgPSB0b3VjaE1vdmUodGhpcywgY2xpZW50WCwgY2xpZW50WSk7XG4gICAgICAgICAgICBpZiAoaGFuZGxlZCkge1xuICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBldmVudCA9PiB7XG4gICAgICAgICAgaWYgKGV2ZW50LnRvdWNoZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAvLyBBbGwgdG91Y2hlcyByZW1vdmVkOyBnZXN0dXJlIGlzIGNvbXBsZXRlLlxuICAgICAgICAgICAgaWYgKCF0aGlzLl9tdWx0aVRvdWNoKSB7XG4gICAgICAgICAgICAgIC8vIFNpbmdsZS10b3VjaCBzd2lwZSBoYXMgZmluaXNoZWQuXG4gICAgICAgICAgICAgIGxldCBjbGllbnRYID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgICAgICAgbGV0IGNsaWVudFkgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZO1xuICAgICAgICAgICAgICB0b3VjaEVuZCh0aGlzLCBjbGllbnRYLCBjbGllbnRZKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX211bHRpVG91Y2ggPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSBsZWZ0LlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy5cbiAgICAgKi9cbiAgICBnb0xlZnQoKSB7XG4gICAgICBpZiAoc3VwZXIuZ29MZWZ0KSB7IHJldHVybiBzdXBlci5nb0xlZnQoKTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSByaWdodC5cbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuXG4gICAgICovXG4gICAgZ29SaWdodCgpIHtcbiAgICAgIGlmIChzdXBlci5nb1JpZ2h0KSB7IHJldHVybiBzdXBlci5nb1JpZ2h0KCk7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmUgd2hldGhlciBhIHRyYW5zaXRpb24gc2hvdWxkIGJlIHNob3duIGR1cmluZyBhIHN3aXBlLlxuICAgICAqXG4gICAgICogQ29tcG9uZW50cyBsaWtlIGNhcm91c2VscyBvZnRlbiBkZWZpbmUgYW5pbWF0ZWQgQ1NTIHRyYW5zaXRpb25zIGZvclxuICAgICAqIHNsaWRpbmcgZWZmZWN0cy4gU3VjaCBhIHRyYW5zaXRpb24gc2hvdWxkIHVzdWFsbHkgKm5vdCogYmUgYXBwbGllZCB3aGlsZVxuICAgICAqIHRoZSB1c2VyIGlzIGRyYWdnaW5nLCBiZWNhdXNlIGEgQ1NTIGFuaW1hdGlvbiB3aWxsIGludHJvZHVjZSBhIGxhZyB0aGF0XG4gICAgICogbWFrZXMgdGhlIHN3aXBlIGZlZWwgc2x1Z2dpc2guIEluc3RlYWQsIGFzIGxvbmcgYXMgdGhlIHVzZXIgaXMgZHJhZ2dpbmdcbiAgICAgKiB3aXRoIHRoZWlyIGZpbmdlciBkb3duLCB0aGUgdHJhbnNpdGlvbiBzaG91bGQgYmUgc3VwcHJlc3NlZC4gV2hlbiB0aGVcbiAgICAgKiB1c2VyIHJlbGVhc2VzIHRoZWlyIGZpbmdlciwgdGhlIHRyYW5zaXRpb24gY2FuIGJlIHJlc3RvcmVkLCBhbGxvd2luZyB0aGVcbiAgICAgKiBhbmltYXRpb24gdG8gc2hvdyB0aGUgY2Fyb3VzZWwgc2xpZGluZyBpbnRvIGl0cyBmaW5hbCBwb3NpdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsdWUgLSB0cnVlIGlmIGEgY29tcG9uZW50LXByb3ZpZGVkIHRyYW5zaXRpb24gc2hvdWxkXG4gICAgICogYmUgc2hvd24sIGZhbHNlIGlmIG5vdC5cbiAgICAgKi9cbiAgICAvLyBUT0RPOiBSZW5hbWUgKGFuZCBmbGlwIG1lYW5pbmcpIHRvIHNvbWV0aGluZyBsaWtlIGRyYWdnaW5nKCk/XG4gICAgc2hvd1RyYW5zaXRpb24odmFsdWUpIHtcbiAgICAgIGlmIChzdXBlci5zaG93VHJhbnNpdGlvbikgeyBzdXBlci5zaG93VHJhbnNpdGlvbih2YWx1ZSk7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGlzdGFuY2UgdGhlIGZpcnN0IHRvdWNocG9pbnQgaGFzIHRyYXZlbGVkIHNpbmNlIHRoZSBiZWdpbm5pbmcgb2YgYVxuICAgICAqIGRyYWcsIGV4cHJlc3NlZCBhcyBhIGZyYWN0aW9uIG9mIHRoZSBlbGVtZW50J3Mgd2lkdGguXG4gICAgICpcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKi9cbiAgICBnZXQgdHJhdmVsRnJhY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdHJhdmVsRnJhY3Rpb247XG4gICAgfVxuICAgIHNldCB0cmF2ZWxGcmFjdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKCd0cmF2ZWxGcmFjdGlvbicgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIudHJhdmVsRnJhY3Rpb24gPSB2YWx1ZTsgfVxuICAgICAgdGhpcy5fdHJhdmVsRnJhY3Rpb24gPSB2YWx1ZTtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBTd2lwZURpcmVjdGlvbjtcbn07XG5cblxuLy8gUmV0dXJuIHRydWUgaWYgdGhlIHBvaW50ZXIgZXZlbnQgaXMgZm9yIHRoZSBwZW4sIG9yIHRoZSBwcmltYXJ5IHRvdWNoIHBvaW50LlxuZnVuY3Rpb24gaXNFdmVudEZvclBlbk9yUHJpbWFyeVRvdWNoKGV2ZW50KSB7XG4gIHJldHVybiBldmVudC5wb2ludGVyVHlwZSA9PT0gJ3BlbicgfHxcbiAgICAgIChldmVudC5wb2ludGVyVHlwZSA9PT0gJ3RvdWNoJyAmJiBldmVudC5pc1ByaW1hcnkpO1xufVxuXG5cbmZ1bmN0aW9uIHRvdWNoU3RhcnQoZWxlbWVudCwgY2xpZW50WCwgY2xpZW50WSkge1xuICBlbGVtZW50LnNob3dUcmFuc2l0aW9uKGZhbHNlKTtcbiAgZWxlbWVudC5fc3RhcnRYID0gY2xpZW50WDtcbiAgZWxlbWVudC5fcHJldmlvdXNYID0gY2xpZW50WDtcbiAgZWxlbWVudC5fcHJldmlvdXNZID0gY2xpZW50WTtcbiAgZWxlbWVudC5fZGVsdGFYID0gMDtcbiAgZWxlbWVudC5fZGVsdGFZID0gMDtcbn1cblxuZnVuY3Rpb24gdG91Y2hNb3ZlKGVsZW1lbnQsIGNsaWVudFgsIGNsaWVudFkpIHtcbiAgZWxlbWVudC5fZGVsdGFYID0gY2xpZW50WCAtIGVsZW1lbnQuX3ByZXZpb3VzWDtcbiAgZWxlbWVudC5fZGVsdGFZID0gY2xpZW50WSAtIGVsZW1lbnQuX3ByZXZpb3VzWTtcbiAgZWxlbWVudC5fcHJldmlvdXNYID0gY2xpZW50WDtcbiAgZWxlbWVudC5fcHJldmlvdXNZID0gY2xpZW50WTtcbiAgaWYgKE1hdGguYWJzKGVsZW1lbnQuX2RlbHRhWCkgPiBNYXRoLmFicyhlbGVtZW50Ll9kZWx0YVkpKSB7XG4gICAgLy8gTW92ZSB3YXMgbW9zdGx5IGhvcml6b250YWwuXG4gICAgdHJhY2tUbyhlbGVtZW50LCBjbGllbnRYKTtcbiAgICAvLyBJbmRpY2F0ZSB0aGF0IHRoZSBldmVudCB3YXMgaGFuZGxlZC4gSXQnZCBiZSBuaWNlciBpZiB3ZSBkaWRuJ3QgaGF2ZVxuICAgIC8vIHRvIGRvIHRoaXMgc28gdGhhdCwgZS5nLiwgYSB1c2VyIGNvdWxkIGJlIHN3aXBpbmcgbGVmdCBhbmQgcmlnaHRcbiAgICAvLyB3aGlsZSBzaW11bHRhbmVvdXNseSBzY3JvbGxpbmcgdXAgYW5kIGRvd24uIChOYXRpdmUgdG91Y2ggYXBwcyBjYW4gZG9cbiAgICAvLyB0aGF0LikgSG93ZXZlciwgTW9iaWxlIFNhZmFyaSB3YW50cyB0byBoYW5kbGUgc3dpcGUgZXZlbnRzIG5lYXIgdGhlXG4gICAgLy8gcGFnZSBhbmQgaW50ZXJwcmV0IHRoZW0gYXMgbmF2aWdhdGlvbnMuIFRvIGF2b2lkIGhhdmluZyBhIGhvcml6aW9udGFsXG4gICAgLy8gc3dpcGUgbWlzaW50ZXByZXRlZCBhcyBhIG5hdmlnYXRpb24sIHdlIGluZGljYXRlIHRoYXQgd2UndmUgaGFuZGxlZFxuICAgIC8vIHRoZSBldmVudCwgYW5kIHByZXZlbnQgZGVmYXVsdCBiZWhhdmlvci5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICAvLyBNb3ZlIHdhcyBtb3N0bHkgdmVydGljYWwuXG4gICAgcmV0dXJuIGZhbHNlOyAvLyBOb3QgaGFuZGxlZFxuICB9XG59XG5cbmZ1bmN0aW9uIHRvdWNoRW5kKGVsZW1lbnQsIGNsaWVudFgsIGNsaWVudFkpIHtcbiAgZWxlbWVudC5zaG93VHJhbnNpdGlvbih0cnVlKTtcbiAgaWYgKGVsZW1lbnQuX2RlbHRhWCA+PSAyMCkge1xuICAgIC8vIEZpbmlzaGVkIGdvaW5nIHJpZ2h0IGF0IGhpZ2ggc3BlZWQuXG4gICAgZWxlbWVudC5nb0xlZnQoKTtcbiAgfSBlbHNlIGlmIChlbGVtZW50Ll9kZWx0YVggPD0gLTIwKSB7XG4gICAgLy8gRmluaXNoZWQgZ29pbmcgbGVmdCBhdCBoaWdoIHNwZWVkLlxuICAgIGVsZW1lbnQuZ29SaWdodCgpO1xuICB9IGVsc2Uge1xuICAgIC8vIEZpbmlzaGVkIGF0IGxvdyBzcGVlZC5cbiAgICB0cmFja1RvKGVsZW1lbnQsIGNsaWVudFgpO1xuICAgIGxldCB0cmF2ZWxGcmFjdGlvbiA9IGVsZW1lbnQudHJhdmVsRnJhY3Rpb247XG4gICAgaWYgKHRyYXZlbEZyYWN0aW9uID49IDAuNSkge1xuICAgICAgZWxlbWVudC5nb1JpZ2h0KCk7XG4gICAgfSBlbHNlIGlmICh0cmF2ZWxGcmFjdGlvbiA8PSAtMC41KSB7XG4gICAgICBlbGVtZW50LmdvTGVmdCgpO1xuICAgIH1cbiAgfVxuICBlbGVtZW50LnRyYXZlbEZyYWN0aW9uID0gMDtcbiAgZWxlbWVudC5fZGVsdGFYID0gbnVsbDtcbiAgZWxlbWVudC5fZGVsdGFZID0gbnVsbDtcbn1cblxuZnVuY3Rpb24gdHJhY2tUbyhlbGVtZW50LCB4KSB7XG4gIGxldCB3aWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gIGxldCBkcmFnRGlzdGFuY2UgPSBlbGVtZW50Ll9zdGFydFggLSB4O1xuICBsZXQgZnJhY3Rpb24gPSB3aWR0aCA+IDAgP1xuICAgIGRyYWdEaXN0YW5jZSAvIHdpZHRoIDpcbiAgICAwO1xuICBlbGVtZW50LnRyYXZlbEZyYWN0aW9uID0gZnJhY3Rpb247XG59XG4iLCIvKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFRyYWNrcGFkRGlyZWN0aW9uLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggbWFwcyBhIGhvcml6b250YWwgdHJhY2twYWQgc3dpcGUgZ2VzdHVyZXMgKG9yIGhvcml6b250YWwgbW91c2VcbiAgICogd2hlZWwgYWN0aW9ucykgdG8gZGlyZWN0aW9uIHNlbWFudGljcy5cbiAgICpcbiAgICogWW91IGNhbiB1c2UgdGhpcyBtaXhpbiB3aXRoIGEgbWl4aW4gbGlrZVxuICAgKiBbRGlyZWN0aW9uU2VsZWN0aW9uXShEaXJlY3Rpb25TZWxlY3Rpb24ubWQpIHRvIGxldCB0aGUgdXNlciBjaGFuZ2UgdGhlXG4gICAqIHNlbGVjdGlvbiB3aXRoIHRoZSB0cmFja3BhZCBvciBtb3VzZSB3aGVlbC5cbiAgICpcbiAgICogVG8gcmVzcG9uZCB0byB0aGUgdHJhY2twYWQsIHdlIGNhbiBsaXN0ZW4gdG8gdGhlIERPTSdzIFwid2hlZWxcIiBldmVudHMuXG4gICAqIFRoZXNlIGV2ZW50cyBhcmUgZmlyZWQgYXMgdGhlIHVzZXIgZHJhZ3MgdGhlaXIgZmluZ2VycyBhY3Jvc3MgYSB0cmFja3BhZC5cbiAgICogVW5mb3J0dW5hdGVseSwgYnJvd3NlcnMgYXJlIG1pc3NpbmcgYSBjcml0aWNhbCBldmVudCDigJTCoHRoZXJlIGlzIG5vIGV2ZW50XG4gICAqIHdoZW4gdGhlIHVzZXIgKnN0b3BzKiBhIGdlc3R1cmVkIG9uIHRoZSB0cmFja3BhZCBvciBtb3VzZSB3aGVlbC5cbiAgICpcbiAgICogVG8gbWFrZSB0aGluZ3Mgd29yc2UsIHRoZSBtYWluc3RyZWFtIGJyb3dzZXJzIGNvbnRpbnVlIHRvIGdlbmVyYXRlIGZha2VcbiAgICogd2hlZWwgZXZlbnRzIGV2ZW4gYWZ0ZXIgdGhlIHVzZXIgaGFzIHN0b3BwZWQgZHJhZ2dpbmcgdGhlaXIgZmluZ2Vycy4gVGhlc2VcbiAgICogZmFrZSBldmVudHMgc2ltdWxhdGUgdGhlIHVzZXIgZ3JhZHVhbGx5IHNsb3dpbmcgZG93biB0aGUgZHJhZyB1bnRpbCB0aGV5XG4gICAqIGNvbWUgdG8gYSBzbW9vdGggc3RvcC4gSW4gc29tZSBjb250ZXh0cywgdGhlc2UgZmFrZSB3aGVlbCBldmVudHMgbWlnaHQgYmVcbiAgICogaGVscGZ1bCwgYnV0IGluIHRyeWluZyB0byBzdXBwbHkgdHlwaWNhbCB0cmFja3BhZCBzd2lwZSBuYXZpZ2F0aW9uLCB0aGVzZVxuICAgKiBmYWtlIGV2ZW50cyBnZXQgaW4gdGhlIHdheS5cbiAgICpcbiAgICogVGhpcyBjb21wb25lbnQgdXNlcyBoZXVyaXN0aWNzIHRvIHdvcmsgYXJvdW5kIHRoZXNlIHByb2JsZW1zLCBidXQgdGhlXG4gICAqIGNvbXBsZXggbmF0dXJlIG9mIHRoZSBwcm9ibGVtIG1ha2UgaXQgZXh0cmVtZWx5IGRpZmZpY3VsdCB0byBhY2hpZXZlIHRoZVxuICAgKiBzYW1lIGRlZ3JlZSBvZiB0cmFja3BhZCByZXNwb25zaXZlbmVzcyBwb3NzaWJsZSB3aXRoIG5hdGl2ZSBhcHBsaWNhdGlvbnMuXG4gICAqL1xuICBjbGFzcyBUcmFja3BhZERpcmVjdGlvbiBleHRlbmRzIGJhc2Uge1xuXG4gICAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIGV2ZW50ID0+IHtcbiAgICAgICAgbGV0IGhhbmRsZWQgPSB3aGVlbCh0aGlzLCBldmVudCk7XG4gICAgICAgIGlmIChoYW5kbGVkKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXNldFdoZWVsVHJhY2tpbmcodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIGxlZnQuXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLlxuICAgICAqL1xuICAgIGdvTGVmdCgpIHtcbiAgICAgIGlmIChzdXBlci5nb0xlZnQpIHsgcmV0dXJuIHN1cGVyLmdvTGVmdCgpOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIHJpZ2h0LlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy5cbiAgICAgKi9cbiAgICBnb1JpZ2h0KCkge1xuICAgICAgaWYgKHN1cGVyLmdvUmlnaHQpIHsgcmV0dXJuIHN1cGVyLmdvUmlnaHQoKTsgfVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgaW1wbGVtZW50YXRpb25cbiAgICBzaG93VHJhbnNpdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKHN1cGVyLnNob3dUcmFuc2l0aW9uKSB7IHN1cGVyLnNob3dUcmFuc2l0aW9uKHZhbHVlKTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBkaXN0YW5jZSB0aGUgdXNlciBoYXMgbW92ZWQgdGhlIGZpcnN0IHRvdWNocG9pbnQgc2luY2UgdGhlIGJlZ2lubmluZ1xuICAgICAqIG9mIGEgdHJhY2twYWQvd2hlZWwgb3BlcmF0aW9uLCBleHByZXNzZWQgYXMgYSBmcmFjdGlvbiBvZiB0aGUgZWxlbWVudCdzXG4gICAgICogd2lkdGguXG4gICAgICpcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKi9cbiAgICBnZXQgdHJhdmVsRnJhY3Rpb24oKSB7XG4gICAgICByZXR1cm4gc3VwZXIudHJhdmVsRnJhY3Rpb247XG4gICAgfVxuICAgIHNldCB0cmF2ZWxGcmFjdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKCd0cmF2ZWxGcmFjdGlvbicgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIudHJhdmVsRnJhY3Rpb24gPSB2YWx1ZTsgfVxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIFRyYWNrcGFkRGlyZWN0aW9uO1xufTtcblxuXG4vLyBUaW1lIHdlIHdhaXQgZm9sbG93aW5nIGEgbmF2aWdhdGlvbiBiZWZvcmUgcGF5aW5nIGF0dGVudGlvbiB0byB3aGVlbFxuLy8gZXZlbnRzIGFnYWluLlxuY29uc3QgUE9TVF9OQVZJR0FURV9USU1FID0gMjUwO1xuXG4vLyBUaW1lIHdlIHdhaXQgYWZ0ZXIgdGhlIGxhc3Qgd2hlZWwgZXZlbnQgYmVmb3JlIHdlIHJlc2V0IHRoaW5ncy5cbmNvbnN0IFdIRUVMX1RJTUUgPSAxMDA7XG5cblxuLy8gRm9sbG93aW5nIGEgbmF2aWdhdGlvbiwgcGFydGlhbGx5IHJlc2V0IG91ciB3aGVlbCB0cmFja2luZy5cbmZ1bmN0aW9uIHBvc3ROYXZpZ2F0ZShlbGVtZW50KSB7XG4gIGVsZW1lbnQudHJhdmVsRnJhY3Rpb24gPSAwO1xuICBlbGVtZW50Ll93aGVlbERpc3RhbmNlID0gMDtcbiAgZWxlbWVudC5fcG9zdE5hdmlnYXRlRGVsYXlDb21wbGV0ZSA9IHRydWU7XG4gIGVsZW1lbnQuX2Fic29yYkRlY2VsZXJhdGlvbiA9IHRydWU7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGVsZW1lbnQuX3Bvc3ROYXZpZ2F0ZURlbGF5Q29tcGxldGUgPSBmYWxzZTtcbiAgfSwgUE9TVF9OQVZJR0FURV9USU1FKTtcbn1cblxuLy8gUmVzZXQgYWxsIHN0YXRlIHJlbGF0ZWQgdG8gdGhlIHRyYWNraW5nIG9mIHRoZSB3aGVlbC5cbmZ1bmN0aW9uIHJlc2V0V2hlZWxUcmFja2luZyhlbGVtZW50KSB7XG4gIGVsZW1lbnQudHJhdmVsRnJhY3Rpb24gPSAwO1xuICBlbGVtZW50Ll93aGVlbERpc3RhbmNlID0gMDtcbiAgZWxlbWVudC5fbGFzdERlbHRhWCA9IDA7XG4gIGVsZW1lbnQuX2Fic29yYkRlY2VsZXJhdGlvbiA9IGZhbHNlO1xuICBlbGVtZW50Ll9wb3N0TmF2aWdhdGVEZWxheUNvbXBsZXRlID0gZmFsc2U7XG4gIGlmIChlbGVtZW50Ll9sYXN0V2hlZWxUaW1lb3V0KSB7XG4gICAgY2xlYXJUaW1lb3V0KGVsZW1lbnQuX2xhc3RXaGVlbFRpbWVvdXQpO1xuICAgIGVsZW1lbnQuX2xhc3RXaGVlbFRpbWVvdXQgPSBudWxsO1xuICB9XG59XG5cbi8vIERlZmluZSBvdXIgb3duIHNpZ24gZnVuY3Rpb24sIHNpbmNlIChhcyBvZiBNYXkgMjAxNSksIFNhZmFyaSBhbmQgSUUgZG9uJ3Rcbi8vIHN1cHBseSBNYXRoLnNpZ24oKS5cbmZ1bmN0aW9uIHNpZ24oeCkge1xuICByZXR1cm4gKHggPT09IDApID9cbiAgICAwIDpcbiAgICAoeCA+IDApID9cbiAgICAgIDEgOlxuICAgICAgLTE7XG59XG5cbi8vIFRPRE86IERhbXBpbmcsIG9yIHNvbWUgb3RoZXIgdHJlYXRtZW50IGZvciBnb2luZyBwYXN0IHRoZSBlbmRzLlxuXG4vKlxuICogQSB3aGVlbCBldmVudCBoYXMgYmVlbiBnZW5lcmF0ZWQuIFRoaXMgY291bGQgYmUgYSByZWFsIHdoZWVsIGV2ZW50LCBvciBpdFxuICogY291bGQgYmUgZmFrZSAoc2VlIG5vdGVzIGluIHRoZSBoZWFkZXIpLlxuICpcbiAqIFRoaXMgaGFuZGxlciB1c2VzIHNldmVyYWwgc3RyYXRlZ2llcyB0byB0cnkgdG8gYXBwcm94aW1hdGUgbmF0aXZlIHRyYWNrcGFkXG4gKiBzd2lwZSBuYXZpZ2F0aW9uLlxuICpcbiAqIElmIHRoZSB1c2VyIGhhcyBkcmFnZ2VkIGVub3VnaCB0byBjYXVzZSBhIG5hdmlnYXRpb24sIHRoZW4gZm9yIGEgc2hvcnRcbiAqIGRlbGF5IGZvbGxvd2luZyB0aGF0IG5hdmlnYXRpb24sIHN1YnNlcXVlbnQgd2hlZWwgZXZlbnRzIHdpbGwgYmUgaWdub3JlZC5cbiAqXG4gKiBGdXJ0aGVybW9yZSwgZm9sbHdvd2luZyBhIG5hdmlnYXRpb24sIHdlIGlnbm9yZSBhbGwgd2hlZWwgZXZlbnRzIHVudGlsIHdlXG4gKiByZWNlaXZlIGF0IGxlYXN0IG9uZSBldmVudCB3aGVyZSB0aGUgZXZlbnQncyBkZWx0YVggKGRpc3RhbmNlIHRyYXZlbGVkKSBpc1xuICogKmdyZWF0ZXIqIHRoYW4gdGhlIHByZXZpb3VzIGV2ZW50J3MgZGVsdGFYLiBUaGlzIGhlbHBzIHVzIGZpbHRlciBvdXQgdGhlXG4gKiBmYWtlIHdoZWVsIGV2ZW50cyBnZW5lcmF0ZWQgYnkgdGhlIGJyb3dzZXIgdG8gc2ltdWxhdGUgZGVjZWxlcmF0aW9uLlxuICpcbiAqL1xuZnVuY3Rpb24gd2hlZWwoZWxlbWVudCwgZXZlbnQpIHtcblxuICAvLyBTaW5jZSB3ZSBoYXZlIGEgbmV3IHdoZWVsIGV2ZW50LCByZXNldCBvdXIgdGltZXIgd2FpdGluZyBmb3IgdGhlIGxhc3RcbiAgLy8gd2hlZWwgZXZlbnQgdG8gcGFzcy5cbiAgaWYgKGVsZW1lbnQuX2xhc3RXaGVlbFRpbWVvdXQpIHtcbiAgICBjbGVhclRpbWVvdXQoZWxlbWVudC5fbGFzdFdoZWVsVGltZW91dCk7XG4gIH1cbiAgZWxlbWVudC5fbGFzdFdoZWVsVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHdoZWVsVGltZWRPdXQoZWxlbWVudCk7XG4gIH0sIFdIRUVMX1RJTUUpO1xuXG4gIGxldCBkZWx0YVggPSBldmVudC5kZWx0YVg7XG4gIGxldCBkZWx0YVkgPSBldmVudC5kZWx0YVk7XG5cbiAgLy8gU2VlIGlmIGVsZW1lbnQgZXZlbnQgcmVwcmVzZW50cyBhY2NlbGVyYXRpb24gb3IgZGVjZWxlcmF0aW9uLlxuICBsZXQgYWNjZWxlcmF0aW9uID0gc2lnbihkZWx0YVgpICogKGRlbHRhWCAtIGVsZW1lbnQuX2xhc3REZWx0YVgpO1xuICBlbGVtZW50Ll9sYXN0RGVsdGFYID0gZGVsdGFYO1xuICAvLyBjb25zb2xlLmxvZyhkZWx0YVggKyBcIiBcIiArIGFjY2VsZXJhdGlvbiArIFwiIFwiICsgZWxlbWVudC5fYWJzb3JiRGVjZWxlcmF0aW9uICsgXCIgXCIgKyBlbGVtZW50Ll9wb3N0TmF2aWdhdGVEZWxheUNvbXBsZXRlKTtcblxuICBpZiAoTWF0aC5hYnMoZGVsdGFYKSA8IE1hdGguYWJzKGRlbHRhWSkpIHtcbiAgICAvLyBNb3ZlIHdhcyBtb3N0bHkgdmVydGljYWwuIFRoZSB1c2VyIG1heSBiZSB0cnlpbmcgc2Nyb2xsIHdpdGggdGhlXG4gICAgLy8gdHJhY2twYWQvd2hlZWwuIFRvIGJlIG9uIHRoZSBzYWZlLCB3ZSBpZ25vcmUgc3VjaCBldmVudHMuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGVsZW1lbnQuX3Bvc3ROYXZpZ2F0ZURlbGF5Q29tcGxldGUpIHtcbiAgICAvLyBJdCdzIHRvbyBzb29uIGFmdGVyIGEgbmF2aWdhdGlvbjsgaWdub3JlIHRoZSBldmVudC5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG5cbiAgaWYgKGFjY2VsZXJhdGlvbiA+IDApIHtcbiAgICAvLyBUaGUgZXZlbnRzIGFyZSBub3QgKG9yIGFyZSBubyBsb25nZXIpIGRlY2VsZXJhdGluZywgc28gd2UgY2FuIHN0YXJ0XG4gICAgLy8gcGF5aW5nIGF0dGVudGlvbiB0byB0aGVtIGFnYWluLlxuICAgIGVsZW1lbnQuX2Fic29yYkRlY2VsZXJhdGlvbiA9IGZhbHNlO1xuICB9IGVsc2UgaWYgKGVsZW1lbnQuX2Fic29yYkRlY2VsZXJhdGlvbikge1xuICAgIC8vIFRoZSB3aGVlbCBldmVudCB3YXMgbGlrZWx5IGZha2VkIHRvIHNpbXVsYXRlIGRlY2VsZXJhdGlvbjsgaWdub3JlIGl0LlxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZWxlbWVudC5fd2hlZWxEaXN0YW5jZSArPSBkZWx0YVg7XG5cbiAgLy8gVXBkYXRlIHRoZSB0cmF2ZWwgZnJhY3Rpb24gb2YgdGhlIGVsZW1lbnQgYmVpbmcgbmF2aWdhdGVkLlxuICBsZXQgd2lkdGggPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xuICBsZXQgdHJhdmVsRnJhY3Rpb24gPSB3aWR0aCA+IDAgP1xuICAgIGVsZW1lbnQuX3doZWVsRGlzdGFuY2UgLyB3aWR0aCA6XG4gICAgMDtcbiAgZWxlbWVudC5zaG93VHJhbnNpdGlvbihmYWxzZSk7XG4gIHRyYXZlbEZyYWN0aW9uID0gc2lnbih0cmF2ZWxGcmFjdGlvbikgKiBNYXRoLm1pbihNYXRoLmFicyh0cmF2ZWxGcmFjdGlvbiksIDEpO1xuICBlbGVtZW50LnRyYXZlbEZyYWN0aW9uID0gdHJhdmVsRnJhY3Rpb247XG5cbiAgLy8gSWYgdGhlIHVzZXIgaGFzIGRyYWdnZWQgZW5vdWdoIHRvIHJlYWNoIHRoZSBwcmV2aW91cy9uZXh0IGl0ZW0sIHRoZW5cbiAgLy8gY29tcGxldGUgYSBuYXZpZ2F0aW9uIHRvIHRoYXQgaXRlbS5cbiAgaWYgKHRyYXZlbEZyYWN0aW9uID09PSAxKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJnb1JpZ2h0XCIpO1xuICAgIGVsZW1lbnQuc2hvd1RyYW5zaXRpb24odHJ1ZSk7XG4gICAgZWxlbWVudC5nb1JpZ2h0KCk7XG4gICAgcG9zdE5hdmlnYXRlKGVsZW1lbnQpO1xuICB9IGVsc2UgaWYgKHRyYXZlbEZyYWN0aW9uID09PSAtMSkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiZ29MZWZ0XCIpO1xuICAgIGVsZW1lbnQuc2hvd1RyYW5zaXRpb24odHJ1ZSk7XG4gICAgZWxlbWVudC5nb0xlZnQoKTtcbiAgICBwb3N0TmF2aWdhdGUoZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLy8gQSBzdWZmaWNpZW50bHkgbG9uZyBwZXJpb2Qgb2YgdGltZSBoYXMgcGFzc2VkIHNpbmNlIHRoZSBsYXN0IHdoZWVsIGV2ZW50LlxuLy8gV2Ugc25hcCB0aGUgc2VsZWN0aW9uIHRvIHRoZSBjbG9zZXN0IGl0ZW0sIHRoZW4gcmVzZXQgb3VyIHN0YXRlLlxuZnVuY3Rpb24gd2hlZWxUaW1lZE91dChlbGVtZW50KSB7XG4gIC8vIGNvbnNvbGUubG9nKFwidGltZW91dFwiKTtcblxuICAvLyBTbmFwIHRvIHRoZSBjbG9zZXN0IGl0ZW0uXG4gIGVsZW1lbnQuc2hvd1RyYW5zaXRpb24odHJ1ZSk7XG4gIGxldCB0cmF2ZWxGcmFjdGlvbiA9IGVsZW1lbnQudHJhdmVsRnJhY3Rpb247XG4gIGlmICh0cmF2ZWxGcmFjdGlvbiA+PSAwLjUpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcInNuYXAgcmlnaHRcIik7XG4gICAgZWxlbWVudC5nb1JpZ2h0KCk7XG4gIH0gZWxzZSBpZiAodHJhdmVsRnJhY3Rpb24gPD0gLTAuNSkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwic25hcCBsZWZ0XCIpO1xuICAgIGVsZW1lbnQuZ29MZWZ0KCk7XG4gIH1cblxuICAvLyBUT0RPOiBMaXN0ZW4gZm9yIHRoZSB0cmFuc2l0aW9uIHRvIGNvbXBsZXRlLCBhbmQgdGhlbiByZXN0b3JlXG4gIC8vIHNob3dUcmFuc2l0aW9uIHRvIGZhbHNlIChvciB0aGUgcHJldmlvdXMgdmFsdWUpLlxuXG4gIHJlc2V0V2hlZWxUcmFja2luZyhlbGVtZW50KTtcbn1cbiIsIi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIGNyZWF0ZSBhIHN5bWJvbCB0aGF0IGNhbiBiZSB1c2VkIGZvciBhc3NvY2lhdGluZyBwcml2YXRlXG4gKiBkYXRhIHdpdGggYW4gZWxlbWVudC5cbiAqXG4gKiBNaXhpbnMgYW5kIGNvbXBvbmVudCBjbGFzc2VzIG9mdGVuIHdhbnQgdG8gYXNzb2NpYXRlIHByaXZhdGUgZGF0YSB3aXRoIGFuXG4gKiBlbGVtZW50IGluc3RhbmNlLCBidXQgSmF2YVNjcmlwdCBkb2VzIG5vdCBoYXZlIGRpcmVjdCBzdXBwb3J0IGZvciB0cnVlXG4gKiBwcml2YXRlIHByb3BlcnRpZXMuIE9uZSBhcHByb2FjaCBpcyB0byB1c2UgdGhlXG4gKiBbU3ltYm9sXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9TeW1ib2wpXG4gKiBkYXRhIHR5cGUgdG8gc2V0IGFuZCByZXRyaWV2ZSBkYXRhIG9uIGFuIGVsZW1lbnQuXG4gKlxuICogVW5mb3J0dW5hdGVseSwgdGhlIFN5bWJvbCB0eXBlIGlzIG5vdCBhdmFpbGFibGUgaW4gSW50ZXJuZXQgRXhwbG9yZXIgMTEuIFRoZVxuICogYGNyZWF0ZVN5bWJvbGAgaGVscGVyIGZ1bmN0aW9uIGV4aXN0cyBhcyBhIHdvcmthcm91bmQgZm9yIElFIDExLiBSYXRoZXIgdGhhblxuICogcmV0dXJuaW5nIGEgdHJ1ZSBTeW1ib2wsIGl0IHNpbXBseSByZXR1cm5zIGFuIHVuZGVyc2NvcmUtcHJlZml4ZWQgc3RyaW5nLlxuICpcbiAqIFVzYWdlOlxuICpcbiAqICAgICBjb25zdCBmb29TeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2ZvbycpO1xuICpcbiAqICAgICBjbGFzcyBNeUVsZW1lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gKiAgICAgICBnZXQgZm9vKCkge1xuICogICAgICAgICByZXR1cm4gdGhpc1tmb29TeW1ib2xdO1xuICogICAgICAgfVxuICogICAgICAgc2V0IGZvbyh2YWx1ZSkge1xuICogICAgICAgICB0aGlzW2Zvb1N5bWJvbF0gPSB2YWx1ZTtcbiAqICAgICAgIH1cbiAqICAgICB9XG4gKlxuICogSW4gSUUgMTEsIHRoaXMgc2FtcGxlIHdpbGwgXCJoaWRlXCIgZGF0YSBiZWhpbmQgYW4gaW5zdGFuY2UgcHJvcGVydHkgdGhpcy5fZm9vLlxuICogVGhlIHVzZSBvZiB0aGUgdW5kZXJzY29yZSBpcyBtZWFudCB0byByZWR1Y2UgKG5vdCBlbGltaW5hdGUpIHRoZSBwb3RlbnRpYWxcbiAqIGZvciBuYW1lIGNvbmZsaWN0cywgYW5kIGRpc2NvdXJhZ2UgKG5vdCBwcmV2ZW50KSBleHRlcm5hbCBhY2Nlc3MgdG8gdGhpc1xuICogZGF0YS4gSW4gbW9kZXJuIGJyb3dzZXJzLCB0aGUgYWJvdmUgY29kZSB3aWxsIGVsaW1pbmF0ZSB0aGUgcG90ZW50aWFsIG9mXG4gKiBuYW1pbmcgY29uZmxpY3RzLCBhbmQgYmV0dGVyIGhpZGUgdGhlIGRhdGEgYmVoaW5kIGEgcmVhbCBTeW1ib2wuXG4gKlxuICogQGZ1bmN0aW9uIGNyZWF0ZVN5bWJvbFxuICogQHBhcmFtIHtzdHJpbmd9IGRlc2NyaXB0aW9uIC0gQSBzdHJpbmcgdG8gaWRlbnRpZnkgdGhlIHN5bWJvbCB3aGVuIGRlYnVnZ2luZ1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTeW1ib2woZGVzY3JpcHRpb24pIHtcbiAgcmV0dXJuIHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgP1xuICAgIFN5bWJvbChkZXNjcmlwdGlvbikgOlxuICAgIGBfJHtkZXNjcmlwdGlvbn1gO1xufVxuIiwiLypcbiAqIEhlbHBlciBmdW5jdGlvbnMgZm9yIHdvcmtpbmcgd2l0aCBhIHNlbGVjdGlvbiBhcyBhIHJlYWwgbnVtYmVyIHRoYXQgY29tYmluZXNcbiAqIGFuIGludGVnZXIgaW5kZXggaW50byBhIGxpc3QsIGFuZCBhIGZyYWN0aW9uIGluZGljYXRpbmcgaG93IGZhciBvZiB0aGUgd2F5IHdlXG4gKiBhcmUgdG8gdGhlIG5leHQgb3IgcHJldmlvdXMgaXRlbS5cbiAqL1xuXG5cbi8qKlxuICogRGFtcGVuIGEgc2VsZWN0aW9uIHRoYXQgZ29lcyBwYXN0IHRoZSBiZWdpbm5pbmcgb3IgZW5kIG9mIGEgbGlzdC4gVGhpcyBpc1xuICogZ2VuZXJhbGx5IHVzZWQgdG8gcHJvZHVjZSBhIHZpc3VhbCBlZmZlY3Qgb2YgdGVuc2lvbiBhcyB0aGUgdXNlciB0cmllcyB0b1xuICogZ28gZnVydGhlciBpbiBhIGRpcmVjdGlvbiB0aGF0IGhhcyBubyBtb3JlIGl0ZW1zLlxuICpcbiAqIEV4YW1wbGU6IHN1cHBvc2UgYGl0ZW1Db3VudGAgaXMgNSwgaW5kaWNhdGluZyBhIGxpc3Qgb2YgNSBpdGVtcy4gVGhlIGluZGV4IG9mXG4gKiB0aGUgbGFzdCBpdGVtIGlzIDQuIElmIHRoZSBgc2VsZWN0aW9uYCBwYXJhbWV0ZXIgaXMgNC41LCB0aGUgdXNlciBpcyB0cnlpbmdcbiAqIHRvIGdvIHBhc3QgdGhpcyBsYXN0IGl0ZW0uIFdoZW4gYSBkYW1waW5nIGZ1bmN0aW9uIGlzIGFwcGxpZWQsIHRoZSByZXN1bHRpbmdcbiAqIHZhbHVlIHdpbGwgYmUgbGVzcyB0aGFuIDQuNSAodGhlIGFjdHVhbCB2YWx1ZSB3aWxsIGJlIDQuMjUpLiBXaGVuIHRoaXNcbiAqIHNlbGVjdGlvbiBzdGF0ZSBpcyByZW5kZXJlZCwgdGhlIHVzZXIgd2lsbCBzZWUgdGhhdCwgZWFjaCB1bml0IGRpc3RhbmNlIHRoZVxuICogZHJhZyB0cmF2ZWxzIGhhcyBsZXNzIGFuZCBsZXNzIHZpc2libGUgZWZmZWN0LiBUaGlzIGlzIHBlcmNlaXZlZCBhcyB0ZW5zaW9uLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBzZWxlY3Rpb24gLSBBIHJlYWwgbnVtYmVyIGluZGljYXRpbmcgYSBzZWxlY3Rpb24gcG9zaXRpb25cbiAqIEBwYXJhbSB7bnVtYmVyfSBpdGVtQ291bnQgLSBBbiBpbnRlZ2VyIGZvciB0aGUgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZSBsaXN0XG4gKiBAcmV0dXJucyB7bnVtYmVyfSBBIHJlYWwgbnVtYmVyIHJlcHJlc2VudGluZyB0aGUgZGFtcGVkIHNlbGVjdGlvbiB2YWx1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRhbXBlZFNlbGVjdGlvbihzZWxlY3Rpb24sIGl0ZW1Db3VudCkge1xuICBsZXQgZGFtcGVkO1xuICBsZXQgYm91bmQgPSBpdGVtQ291bnQgLSAxO1xuICBpZiAoc2VsZWN0aW9uIDwgMCkge1xuICAgIC8vIFRyeWluZyB0byBnbyBwYXN0IGJlZ2lubmluZyBvZiBsaXN0LiBBcHBseSB0ZW5zaW9uIGZyb20gdGhlIGxlZnQgZWRnZS5cbiAgICBkYW1wZWQgPSAtZGFtcGluZygtc2VsZWN0aW9uKTtcbiAgfSBlbHNlIGlmIChzZWxlY3Rpb24gPj0gYm91bmQpIHtcbiAgICAvLyBUcnlpbmcgdG8gZ28gcGFzdCBlbmQgb2YgbGlzdC4gQXBwbHkgdGVuc2lvbiBmcm9tIHRoZSByaWdodCBlZGdlLlxuICAgIGRhbXBlZCA9IGJvdW5kICsgZGFtcGluZyhzZWxlY3Rpb24gLSBib3VuZCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gTm8gZGFtcGluZyByZXF1aXJlZC5cbiAgICBkYW1wZWQgPSBzZWxlY3Rpb247XG4gIH1cbiAgcmV0dXJuIGRhbXBlZDtcbn1cblxuXG4vKipcbiAqIFJldHVybiB0aGUgY3VycmVudCBmcmFjdGlvbmFsIHNlbGVjdGlvbiB2YWx1ZSBmb3IgdGhlIGdpdmVuIGVsZW1lbnQuXG4gKlxuICogVGhpcyBzaW1wbHkgYWRkcyB0aGUgZWxlbWVudCdzIGBzZWxlY3RlZEluZGV4YCBhbmQgYHNlbGVjdGVkRnJhY3Rpb25gXG4gKiBwcm9wZXJ0aWVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZWxlbWVudFNlbGVjdGlvbihlbGVtZW50KSB7XG4gIGxldCBzZWxlY3RlZEluZGV4ID0gZWxlbWVudC5zZWxlY3RlZEluZGV4O1xuICBpZiAoc2VsZWN0ZWRJbmRleCA8IDApIHtcbiAgICAvLyBObyBzZWxlY3Rpb25cbiAgICByZXR1cm47XG4gIH1cbiAgbGV0IHNlbGVjdGVkRnJhY3Rpb24gPSBlbGVtZW50LnNlbGVjdGVkRnJhY3Rpb24gfHwgMDtcbiAgcmV0dXJuIHNlbGVjdGVkSW5kZXggKyBzZWxlY3RlZEZyYWN0aW9uO1xufVxuXG5cbi8qKlxuICogQnJlYWtzIGEgZnJhY3Rpb25hbCBzZWxlY3Rpb24gaW50byBpdHMgaW50ZWdlciBhbmQgZnJhY3Rpb25hbCBwYXJ0cy5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gc2VsZWN0aW9uIOKAk8KgQSByZWFsIG51bWJlciByZXByZXNlbnRpbmcgYSBzZWxlY3Rpb24gcG9pbnRcbiAqIEByZXR1cm5zIHtvYmplY3R9IC0gQW4gb2JqZWN0IHdpdGggYW4gYGluZGV4YCBwcm9wZXJ0eSBob2xkaW5nIHRoZVxuICogc2VsZWN0aW9uJ3MgaW50ZWdlciBjb21wb25lbnQsIGFuZCBhIGBmcmFjdGlvbmAgcHJvcGVydHkgaG9sZGluZyB0aGVcbiAqIHNlbGVjdGlvbidzIGZyYWN0aW9uYWwgY29tcG9uZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0aW9uUGFydHMoc2VsZWN0aW9uKSB7XG4gIC8vIFN0dXBpZCBJRSBkb2Vzbid0IGhhdmUgTWF0aC50cnVuYy5cbiAgLy8gbGV0IGluZGV4ID0gTWF0aC50cnVuYyhzZWxlY3Rpb24pO1xuICBsZXQgaW5kZXggPSBzZWxlY3Rpb24gPCAwID8gTWF0aC5jZWlsKHNlbGVjdGlvbikgOiBNYXRoLmZsb29yKHNlbGVjdGlvbik7XG4gIGxldCBmcmFjdGlvbiA9IHNlbGVjdGlvbiAtIGluZGV4O1xuICByZXR1cm4geyBpbmRleCwgZnJhY3Rpb24gfTtcbn1cblxuXG4vKipcbiAqIFJldHVybnMgYSBmcmFjdGlvbmFsIHNlbGVjdGlvbiBwb2ludCBhZnRlciBhY2NvdW50aW5nIGZvciB3cmFwcGluZywgZW5zdXJpbmdcbiAqIHRoYXQgdGhlIGludGVnZXIgcG9ydGlvbiBvZiB0aGUgc2VsZWN0aW9uIHN0YXlzIGJldHdlZW4gMCBhbmQgYGl0ZW1Db3VudGAtMS5cbiAqIFRoYXQgaXMsIHRoZSBpbnRlZ2VyIHBvcnRpb24gd2lsbCBhbHdheXMgYmUgYSB2YWxpZCBpbmRleCBpbnRvIHRoZSBsaXN0LlxuICpcbiAqIEV4YW1wbGUgb2Ygd3JhcHBpbmcgcGFzdCB0aGUgZW5kIG9mIHRoZSBsaXN0OiBpZiBgc2VsZWN0aW9uYCBpcyA1LjUgYW5kXG4gKiBgaXRlbUNvdW50YCBpcyA1LCB0aGlzIHJldHVybnMgMC41LiBFeGFtcGxlIG9mIHdyYXBwaW5nIHBhc3QgdGhlIGJlZ2lubmluZyBvZlxuICogdGhlIGxpc3Q6IGlmIGBzZWxlY3Rpb25gIGlzIDAuNSBhbmQgYGl0ZW1Db3VudGAgaXMgNSwgdGhpcyByZXR1cm5zIDQuNS5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gc2VsZWN0aW9uIC0gQSByZWFsIG51bWJlciByZXByZXNlbnRpbmcgYSBzZWxlY3Rpb24gcG9pbnRcbiAqIEBwYXJhbSB7bnVtYmVyfSBpdGVtQ291bnQgLSBUaGUgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZSBsaXN0XG4gKiBAcmV0dXJucyB7bnVtYmVyfSAtIFRoZSByZXN1bHQgb2Ygd3JhcHBpbmcgdGhlIHNlbGVjdGlvbiBwb2ludFxuICovXG5leHBvcnQgZnVuY3Rpb24gd3JhcHBlZFNlbGVjdGlvbihzZWxlY3Rpb24sIGl0ZW1Db3VudCkge1xuICAvLyBIYW5kbGVzIHBvc3NpYmlsaXR5IG9mIG5lZ2F0aXZlIG1vZC5cbiAgLy8gU2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE4NjE4MjUwLzc2NDcyXG4gIHJldHVybiAoKHNlbGVjdGlvbiAlIGl0ZW1Db3VudCkgKyBpdGVtQ291bnQpICUgaXRlbUNvdW50O1xufVxuXG5cbi8qKlxuICogUmV0dXJuIHRoZSBwYXJ0cyBvZiBhIHNlbGVjdGlvbiwgZmlyc3Qgd3JhcHBpbmcgaWYgbmVjZXNzYXJ5LlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBzZWxlY3Rpb24g4oCTIEEgcmVhbCBudW1iZXIgcmVwcmVzZW50aW5nIGEgc2VsZWN0aW9uIHBvaW50XG4gKiBAcGFyYW0ge251bWJlcn0gaXRlbUNvdW50IC0gVGhlIG51bWJlciBvZiBpdGVtcyBpbiB0aGUgbGlzdFxuICogQHBhcmFtIHtib29sZWFufSB3cmFwIOKAkyBUcnVlIGlmIHRoZSBzZWxlY3Rpb24gc2hvdWxkIHdyYXAgdG8gc3RheSB3aXRoaW4gdGhlXG4gKiBsaXN0XG4gKiBAcmV0dXJucyB7b2JqZWN0fSDigJMgVGhlIHBhcnRzIG9mIHRoZSBzZWxlY3Rpb24sIHVzaW5nIHRoZSBzYW1lIGZvcm1hdCBhc1xuICogYHNlbGVjdGlvblBhcnRzYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdyYXBwZWRTZWxlY3Rpb25QYXJ0cyhzZWxlY3Rpb24sIGl0ZW1Db3VudCwgd3JhcCkge1xuICBpZiAod3JhcCkge1xuICAgIHNlbGVjdGlvbiA9IHdyYXBwZWRTZWxlY3Rpb24oc2VsZWN0aW9uLCBpdGVtQ291bnQpO1xuICB9XG4gIHJldHVybiBzZWxlY3Rpb25QYXJ0cyhzZWxlY3Rpb24pO1xufVxuXG5cbi8qXG4gKiBDYWxjdWxhdGUgZGFtcGluZyBhcyBhIGZ1bmN0aW9uIG9mIHRoZSBkaXN0YW5jZSBwYXN0IHRoZSBtaW5pbXVtL21heGltdW1cbiAqIHZhbHVlcy5cbiAqXG4gKiBXZSB3YW50IHRvIGFzeW1wdG90aWNhbGx5IGFwcHJvYWNoIGFuIGFic29sdXRlIG1pbmltdW0gb2YgMSB1bml0XG4gKiBiZWxvdy9hYm92ZSB0aGUgYWN0dWFsIG1pbmltdW0vbWF4aW11bS4gVGhpcyByZXF1aXJlcyBjYWxjdWxhdGluZyBhXG4gKiBoeXBlcmJvbGljIGZ1bmN0aW9uLlxuICpcbiAqIFNlZSBodHRwOi8vd3d3LndvbGZyYW1hbHBoYS5jb20vaW5wdXQvP2k9eSslM0QrLTElMkYlMjh4JTJCMSUyOSslMkIrMVxuICogZm9yIHRoZSBvbmUgd2UgdXNlLiBUaGUgb25seSBwb3J0aW9uIG9mIHRoYXQgZnVuY3Rpb24gd2UgY2FyZSBhYm91dCBpcyB3aGVuXG4gKiB4IGlzIHplcm8gb3IgZ3JlYXRlci4gQW4gaW1wb3J0YW50IGNvbnNpZGVyYXRpb24gaXMgdGhhdCB0aGUgY3VydmUgYmVcbiAqIHRhbmdlbnQgdG8gdGhlIGRpYWdvbmFsIGxpbmUgeD15IGF0ICgwLCAwKS4gVGhpcyBlbnN1cmVzIHNtb290aCBjb250aW51aXR5XG4gKiB3aXRoIHRoZSBub3JtYWwgZHJhZyBiZWhhdmlvciwgaW4gd2hpY2ggdGhlIHZpc2libGUgc2xpZGluZyBpcyBsaW5lYXIgd2l0aFxuICogdGhlIGRpc3RhbmNlIHRoZSB0b3VjaHBvaW50IGhhcyBiZWVuIGRyYWdnZWQuXG4gKi9cbmZ1bmN0aW9uIGRhbXBpbmcoeCkge1xuICBsZXQgeSA9ICgtMSAvICh4ICsgMSkpICsgMTtcbiAgcmV0dXJuIHk7XG59XG4iLCIvKlxuICogTWljcm90YXNrIGhlbHBlciBmb3IgSUUgMTEuXG4gKlxuICogRXhlY3V0aW5nIGEgZnVuY3Rpb24gYXMgYSBtaWNyb3Rhc2sgaXMgdHJpdmlhbCBpbiBicm93c2VycyB0aGF0IHN1cHBvcnRcbiAqIHByb21pc2VzLCB3aG9zZSB0aGVuKCkgY2xhdXNlcyB1c2UgbWljcm90YXNrIHRpbWluZy4gSUUgMTEgZG9lc24ndCBzdXBwb3J0XG4gKiBwcm9taXNlcywgYnV0IGRvZXMgc3VwcG9ydCBNdXRhdGlvbk9ic2VydmVycywgd2hpY2ggYXJlIGFsc28gZXhlY3V0ZWQgYXNcbiAqIG1pY3JvdGFza3MuIFNvIHRoaXMgaGVscGVyIHVzZXMgYW4gTXV0YXRpb25PYnNlcnZlciB0byBhY2hpZXZlIG1pY3JvdGFza1xuICogdGltaW5nLlxuICpcbiAqIFNlZSBodHRwczovL2pha2VhcmNoaWJhbGQuY29tLzIwMTUvdGFza3MtbWljcm90YXNrcy1xdWV1ZXMtYW5kLXNjaGVkdWxlcy9cbiAqXG4gKiBJbnNwaXJlZCBieSBQb2x5bWVyJ3MgYXN5bmMoKSBmdW5jdGlvbi5cbiAqL1xuXG5cbi8vIFRoZSBxdWV1ZSBvZiBwZW5kaW5nIGNhbGxiYWNrcyB0byBiZSBleGVjdXRlZCBhcyBtaWNyb3Rhc2tzLlxubGV0IGNhbGxiYWNrcyA9IFtdO1xuXG4vLyBDcmVhdGUgYW4gZWxlbWVudCB0aGF0IHdlIHdpbGwgbW9kaWZ5IHRvIGZvcmNlIG9ic2VydmFibGUgbXV0YXRpb25zLlxubGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG5cbi8vIEEgbW9ub3RvbmljYWxseS1pbmNyZWFzaW5nIHZhbHVlLlxubGV0IGNvdW50ZXIgPSAwO1xuXG5cbi8qKlxuICogQWRkIGEgY2FsbGJhY2sgdG8gdGhlIG1pY3JvdGFzayBxdWV1ZS5cbiAqXG4gKiBUaGlzIHVzZXMgYSBNdXRhdGlvbk9ic2VydmVyIHNvIHRoYXQgaXQgd29ya3Mgb24gSUUgMTEuXG4gKlxuICogTk9URTogSUUgMTEgbWF5IGFjdHVhbGx5IHVzZSB0aW1lb3V0IHRpbWluZyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXJzLiBUaGlzXG4gKiBuZWVkcyBtb3JlIGludmVzdGlnYXRpb24uXG4gKlxuICogQGZ1bmN0aW9uIG1pY3JvdGFza1xuICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWljcm90YXNrKGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgLy8gRm9yY2UgYSBtdXRhdGlvbi5cbiAgZWxlbWVudC50ZXh0Q29udGVudCA9ICsrY291bnRlcjtcbn1cblxuXG4vLyBFeGVjdXRlIGFueSBwZW5kaW5nIGNhbGxiYWNrcy5cbmZ1bmN0aW9uIGV4ZWN1dGVDYWxsYmFja3MoKSB7XG4gIHdoaWxlIChjYWxsYmFja3MubGVuZ3RoID4gMCkge1xuICAgIGxldCBjYWxsYmFjayA9IGNhbGxiYWNrcy5zaGlmdCgpO1xuICAgIGNhbGxiYWNrKCk7XG4gIH1cbn1cblxuXG4vLyBDcmVhdGUgdGhlIG9ic2VydmVyLlxubGV0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZXhlY3V0ZUNhbGxiYWNrcyk7XG5vYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQsIHtcbiAgY2hhcmFjdGVyRGF0YTogdHJ1ZVxufSk7XG4iLCIvKipcbiAqIEhlbHBlciBmdW5jdGlvbiBmb3Igc3RhbmRhcmQgY2xhc3NMaXN0LnRvZ2dsZSgpIGJlaGF2aW9yIG9uIG9sZCBicm93c2VycyxcbiAqIG5hbWVseSBJRSAxMS5cbiAqXG4gKiBUaGUgc3RhbmRhcmRcbiAqIFtjbGFzc2xpc3RdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9FbGVtZW50L2NsYXNzTGlzdClcbiAqIG9iamVjdCBoYXMgYSBgdG9nZ2xlKClgIGZ1bmN0aW9uIHRoYXQgc3VwcG9ydHMgYSBzZWNvbmQgQm9vbGVhbiBwYXJhbWV0ZXJcbiAqIHRoYXQgY2FuIGJlIHVzZWQgdG8gc3VjY2luY3RseSB0dXJuIGEgY2xhc3Mgb24gb3Igb2ZmLiBUaGlzIGZlYXR1cmUgaXMgb2Z0ZW5cbiAqIHVzZWZ1bCBpbiBkZXNpZ25pbmcgY3VzdG9tIGVsZW1lbnRzLCB3aGljaCBtYXkgd2FudCB0byBleHRlcm5hbGx5IHJlZmxlY3RcbiAqIGNvbXBvbmVudCBzdGF0ZSBpbiBhIENTUyBjbGFzcyB0aGF0IGNhbiBiZSB1c2VkIGZvciBzdHlsaW5nIHB1cnBvc2VzLlxuICpcbiAqIFVuZm9ydHVuYXRlbHksIElFIDExIGRvZXMgbm90IHN1cHBvcnQgdGhlIEJvb2xlYW4gcGFyYW1ldGVyIHRvXG4gKiBgY2xhc3NMaXN0LnRvZ2dsZSgpYC4gVGhpcyBoZWxwZXIgZnVuY3Rpb24gYmVoYXZlcyBsaWtlIHRoZSBzdGFuZGFyZFxuICogYHRvZ2dsZSgpYCwgaW5jbHVkaW5nIHN1cHBvcnQgZm9yIHRoZSBCb29sZWFuIHBhcmFtZXRlciwgc28gdGhhdCBpdCBjYW4gYmVcbiAqIHVzZWQgZXZlbiBvbiBJRSAxMS5cbiAqXG4gKiBAZnVuY3Rpb24gdG9nZ2xlQ2xhc3NcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBUaGUgZWxlbWVudCB0byBtb2RpZnlcbiAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgLSBUaGUgY2xhc3MgdG8gYWRkL3JlbW92ZVxuICogQHBhcmFtIHtib29sZWFufSBbZm9yY2VdIC0gRm9yY2UgdGhlIGNsYXNzIHRvIGJlIGFkZGVkIChpZiB0cnVlKSBvciByZW1vdmVkXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaWYgZmFsc2UpXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvZ2dsZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSwgZm9yY2UpIHtcbiAgbGV0IGNsYXNzTGlzdCA9IGVsZW1lbnQuY2xhc3NMaXN0O1xuICBsZXQgYWRkQ2xhc3MgPSAodHlwZW9mIGZvcmNlID09PSAndW5kZWZpbmVkJykgP1xuICAgICFjbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSA6XG4gICAgZm9yY2U7XG4gIGlmIChhZGRDbGFzcykge1xuICAgIGNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgfSBlbHNlIHtcbiAgICBjbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gIH1cbiAgcmV0dXJuIGFkZENsYXNzO1xufVxuIiwiaW1wb3J0IENvbXBvc2FibGUgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ29tcG9zYWJsZSc7XG5pbXBvcnQgU2hhZG93VGVtcGxhdGUgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2hhZG93VGVtcGxhdGUnO1xuaW1wb3J0IFNoYWRvd0VsZW1lbnRSZWZlcmVuY2VzIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NoYWRvd0VsZW1lbnRSZWZlcmVuY2VzJztcbmltcG9ydCBBdHRyaWJ1dGVNYXJzaGFsbGluZyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9BdHRyaWJ1dGVNYXJzaGFsbGluZyc7XG5pbXBvcnQgRGlzdHJpYnV0ZWRDaGlsZHJlbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXN0cmlidXRlZENoaWxkcmVuJztcblxuXG4vKipcbiAqIEEgc2FtcGxlIGdlbmVyYWwtcHVycG9zZSBiYXNlIGNsYXNzIGZvciBkZWZpbmluZyBjdXN0b20gZWxlbWVudHMgdGhhdCBtaXhlc1xuICogaW4gc29tZSBjb21tb24gZmVhdHVyZXM6IHRlbXBsYXRlIHN0YW1waW5nIGludG8gYSBzaGFkb3cgcm9vdCwgc2hhZG93IGVsZW1lbnRcbiAqIHJlZmVyZW5jZXMsIG1hcnNoYWxsaW5nIGF0dHJpYnV0ZXMgdG8gcHJvcGVydGllcywgYW5kIHJldHJpZXZpbmcgdGhlIGNoaWxkcmVuXG4gKiBkaXN0cmlidXRlZCB0byBhIGNvbXBvbmVudC5cbiAqXG4gKiBUaGlzIGJhc2UgY2xhc3MgaXMgbm90IHNwZWNpYWwgaW4gYW55IHdheSwgYW5kIGlzIGRlZmluZWQgb25seSBhcyBhXG4gKiBjb252ZW5pZW50IHNob3J0aGFuZCBmb3IgYXBwbHlpbmcgdGhlIG1peGlucyBsaXN0ZWQgYWJvdmUuIFlvdSBjYW4gdXNlIHRoaXNcbiAqIGNsYXNzIGFzIGEgYmFzZSBjbGFzcyBmb3IgeW91ciBvd24gZWxlbWVudHMsIG9yIGVhc2lseSBjcmVhdGUgeW91ciBvd24gYmFzZVxuICogY2xhc3MgYnkgYXBwbHlpbmcgdGhlIHNhbWUgc2V0IG9mIG1peGlucy5cbiAqXG4gKiBUaGUgRWxlbWVudEJhc2UgYmFzZSBjbGFzcyBkb2VzIG5vdCByZWdpc3RlciBpdHNlbGYgYXMgYSBjdXN0b20gZWxlbWVudCB3aXRoXG4gKiB0aGUgYnJvd3NlciwgYW5kIGhlbmNlIGNhbm5vdCBiZSBpbmRlcGVuZGVudGx5IGluc3RhbnRpYXRlZC5cbiAqXG4gKiBAbWl4ZXMgQXR0cmlidXRlTWFyc2hhbGxpbmcgXG4gKiBAbWl4ZXMgQ29tcG9zYWJsZVxuICogQG1peGVzIERpc3RyaWJ1dGVkQ2hpbGRyZW5cbiAqIEBtaXhlcyBTaGFkb3dFbGVtZW50UmVmZXJlbmNlc1xuICogQG1peGVzIFNoYWRvd1RlbXBsYXRlXG4gKi9cbmNsYXNzIEVsZW1lbnRCYXNlIGV4dGVuZHMgQ29tcG9zYWJsZShIVE1MRWxlbWVudCkuY29tcG9zZShcbiAgU2hhZG93VGVtcGxhdGUsICAgICAgICAgIC8vIGJlZm9yZSBub2RlIGZpbmRpbmcsIHNvIHNoYWRvdyByb290IGlzIHBvcHVsYXRlZFxuICBTaGFkb3dFbGVtZW50UmVmZXJlbmNlcywgLy8gYmVmb3JlIG1hcnNoYWxsaW5nLCBzbyBwcm9wZXJ0aWVzIGNhbiB1c2UgcmVmc1xuICBBdHRyaWJ1dGVNYXJzaGFsbGluZyxcbiAgRGlzdHJpYnV0ZWRDaGlsZHJlblxuKSB7XG5cbiAgLypcbiAgICogRGVidWdnaW5nIHV0aWxpdHk6IGxvZ3MgYSBtZXNzYWdlLCBwcmVmaXhlZCBieSB0aGUgY29tcG9uZW50J3MgdGFnLlxuICAgKi9cbiAgbG9nKHRleHQpIHtcbiAgICBpZiAoc3VwZXIubG9nKSB7IHN1cGVyLmxvZyh0ZXh0KTsgfVxuICAgIGNvbnNvbGUubG9nKGAke3RoaXMubG9jYWxOYW1lfTogJHt0ZXh0fWApO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWxlbWVudEJhc2U7XG4iXX0=
