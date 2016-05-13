(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

var _Generic = require('../../basic-component-mixins/src/Generic');

var _Generic2 = _interopRequireDefault(_Generic);

var _ItemsSelection = require('../../basic-component-mixins/src/ItemsSelection');

var _ItemsSelection2 = _interopRequireDefault(_ItemsSelection);

var _Keyboard = require('../../basic-component-mixins/src/Keyboard');

var _Keyboard2 = _interopRequireDefault(_Keyboard);

var _KeyboardDirection = require('../../basic-component-mixins/src/KeyboardDirection');

var _KeyboardDirection2 = _interopRequireDefault(_KeyboardDirection);

var _ObserveContentChanges = require('../../basic-component-mixins/src/ObserveContentChanges');

var _ObserveContentChanges2 = _interopRequireDefault(_ObserveContentChanges);

var _SelectionAriaActive = require('../../basic-component-mixins/src/SelectionAriaActive');

var _SelectionAriaActive2 = _interopRequireDefault(_SelectionAriaActive);

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

var base = _ElementBase2.default.compose(_ContentAsItems2.default, _DirectionSelection2.default, _DistributedChildrenAsContent2.default, _Generic2.default, _ItemsSelection2.default, _Keyboard2.default, _KeyboardDirection2.default, _ObserveContentChanges2.default, _SelectionAriaActive2.default, _SwipeDirection2.default, _TargetInCollective2.default, _TrackpadDirection2.default);

/**
 * Lets the user navigate laterally through a sequence of child elements.
 *
 * basic-carousel is an implementation of the carousel user interface pattern,
 * commonly used for navigating between images, pages, and other elements. This
 * pattern presents the user with a linear sequence of elements, only one of
 * which is shown at a time. The user can navigate to the next/previous element
 * with a variety of input methods.
 *
 * [Live demo](http://basicwebcomponents.org/basic-web-components/packages/basic-carousel/)
 *
 * You can also view demos with optional
 * [arrows](http://basicwebcomponents.org/basic-web-components/packages/basic-carousel/carouselWithArrows.html),
 * [dots](http://basicwebcomponents.org/basic-web-components/packages/basic-carousel/carouselWithDots.html),
 * or both [arrows and dots](http://basicwebcomponents.org/basic-web-components/packages/basic-carousel/carouselWithArrowsAndDots.html).
 *
 * basic-carousel uses its children as the elements the user will navigate
 * through. In a typical use, a basic-carousel can be used to navigate between a
 * sequence of images:
 *
 *     <basic-carousel>
 *       <img src="image1.jpg">
 *       <img src="image2.jpg">
 *       <img src="image3.jpg">
 *     </basic-carousel>
 *
 * The child elements can be of any type — they are not restricted to images.
 *
 * This component attempts to meet the [Gold Standard for web components]
 * (https://github.com/webcomponents/gold-standard/wiki) so that it is generally
 * as flexible and robust as standard HTML elements. For example, it meets the
 * "Content Changes" criteria: the carousel will adapt to new child elements
 * added or removed at runtime.
 *
 * Currently, this component does not meet the Gold Standard criteria "Size to
 * Content". As a result, for the time being, **you must manually set a size on
 * this component**. Two approaches are to: 1) stretch the component across
 * whatever surface it is contained within, or 2) set it to be larger than the
 * largest child element you want to display. The former approach is more
 * common, and can be achieved with CSS styling such as:
 *
 *     html {
 *       height: 100%;
 *     }
 *
 *     body {
 *       display: -webkit-flex;
 *       display: flex;
 *       height: 100%;
 *       margin: 0;
 *     }
 *
 *     basic-carousel {
 *       -webkit-flex: 1;
 *       flex: 1;
 *     }
 *
 * The standard basic-carousel component supports navigation via the following
 * input methods:
 *
 * * Keyboard. When the carousel has focus, the user can press Left, Right,
 *   Home, or End. These navigate to the expected element.
 * * Touch. On mobile and other touch-enabled devices, the user can drag left or
 *   right.
 * * Trackpad. The user can swipe left or right on a trackpad to navigate.
 *
 * Because carousels are used in a wide variety of circumstances, by default
 * basic-carousel provides a minimal appearance and no separately interactive
 * elements such as arrow buttons on the side or dots along the bottom. Those
 * elements can be added by wrapping a basic-carousel in optional accessories:
 *
 * * [basic-arrow-selection](http://github.com/basic-web-components/basic-web-components/packages/basic-arrow-selection).
 *   This adds prominent left and right arrow buttons on the side of the carousel.
 * * [basic-page-dots](http://github.com/basic-web-components/basic-web-components/packages/basic-page-dots).
 *   This adds a series of small dots below the carousel to indicate the user's
 *   current position in the sequence.
 *
 * See those components for more details, but in general you can construct a
 * common carousel with both arrow buttons and dots like so:
 *
 *     <basic-arrow-selection>
 *       <basic-page-dots>
 *         <basic-carousel>
 *           ... images, etc. ...
 *         </basic-carousel>
 *       </basic-page-dots>
 *     </basic-arrow-selection>
 *
 * For universal access, basic-carousel automatically adds a variety of
 * [ARIA](http://www.w3.org/WAI/intro/aria) properties to itself and to child
 * elements. This helps users navigate the sequence of elements in the carousel
 * using assistive technologies.
 *
 * @extends ElementBase
 * @mixes ContentAsItems
 * @mixes DirectionSelection
 * @mixes DistributedChildrenAsContent
 * @mixes Generic
 * @mixes ItemsSelection
 * @mixes Keyboard
 * @mixes KeyboardDirection
 * @mixes ObserveContentChanges
 * @mixes SelectionAriaActive
 * @mixes SwipeDirection
 * @mixes TargetInCollective
 * @mixes TrackpadDirection
 */

var Carousel = function (_base) {
  _inherits(Carousel, _base);

  function Carousel() {
    _classCallCheck(this, Carousel);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Carousel).apply(this, arguments));
  }

  _createClass(Carousel, [{
    key: 'attachedCallback',
    value: function attachedCallback() {
      if (_get(Object.getPrototypeOf(Carousel.prototype), 'attachedCallback', this)) {
        _get(Object.getPrototypeOf(Carousel.prototype), 'attachedCallback', this).call(this);
      }
      // HACK
      this.itemsChanged();
      this.selectionRequired = true;
    }
  }, {
    key: 'createdCallback',
    value: function createdCallback() {
      if (_get(Object.getPrototypeOf(Carousel.prototype), 'createdCallback', this)) {
        _get(Object.getPrototypeOf(Carousel.prototype), 'createdCallback', this).call(this);
      }
      this.navigationAxis = 'horizontal';
    }
  }, {
    key: 'showTransition',
    value: function showTransition(show) {
      if (_get(Object.getPrototypeOf(Carousel.prototype), 'showTransition', this)) {
        _get(Object.getPrototypeOf(Carousel.prototype), 'showTransition', this).call(this);
      }
      return this.$.viewport.showTransition(show);
    }
  }, {
    key: 'selectedFraction',
    get: function get() {
      return this.$.viewport.selectedFraction;
    },
    set: function set(value) {
      if ('selectedFraction' in base.prototype) {
        _set(Object.getPrototypeOf(Carousel.prototype), 'selectedFraction', value, this);
      }
      this.$.viewport.selectedFraction = value;
      var event = new CustomEvent('selection-fraction-changed');
      this.dispatchEvent(event);
    }
  }, {
    key: 'selectedIndex',
    get: function get() {
      return _get(Object.getPrototypeOf(Carousel.prototype), 'selectedIndex', this);
    },
    set: function set(value) {
      if ('selectedIndex' in base.prototype) {
        _set(Object.getPrototypeOf(Carousel.prototype), 'selectedIndex', value, this);
      }
      this.$.viewport.selectedIndex = value;
    }
  }, {
    key: 'selectedItem',
    get: function get() {
      return _get(Object.getPrototypeOf(Carousel.prototype), 'selectedItem', this);
    },
    set: function set(item) {
      if ('selectedItem' in base.prototype) {
        _set(Object.getPrototypeOf(Carousel.prototype), 'selectedItem', item, this);
      }
      this.$.viewport.selectedItem = item;
    }
  }, {
    key: 'template',
    get: function get() {
      return '\n      <style>\n      :host {\n        display: -webkit-flex;\n        display: flex;\n      }\n\n      basic-sliding-viewport {\n        display: -webkit-flex;\n        display: flex;\n        -webkit-flex: 1;\n        flex: 1;\n      }\n      </style>\n\n      <basic-sliding-viewport id="viewport">\n        <slot></slot>\n      </basic-sliding-viewport>\n    ';
    }
  }]);

  return Carousel;
}(base);

document.registerElement('basic-carousel', Carousel);
exports.default = Carousel;

},{"../../basic-component-mixins/src/ContentAsItems":5,"../../basic-component-mixins/src/DirectionSelection":6,"../../basic-component-mixins/src/DistributedChildrenAsContent":8,"../../basic-component-mixins/src/Generic":9,"../../basic-component-mixins/src/ItemsSelection":10,"../../basic-component-mixins/src/Keyboard":11,"../../basic-component-mixins/src/KeyboardDirection":12,"../../basic-component-mixins/src/ObserveContentChanges":13,"../../basic-component-mixins/src/SelectionAriaActive":14,"../../basic-component-mixins/src/SwipeDirection":17,"../../basic-component-mixins/src/TargetInCollective":18,"../../basic-component-mixins/src/TrackpadDirection":19,"../../basic-element-base/src/ElementBase":23,"../../basic-sliding-viewport/src/SlidingViewport":24}],2:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
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

},{"../../basic-component-mixins/src/toggleClass":22}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
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

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Generic).apply(this, arguments));
    }

    _createClass(Generic, [{
      key: 'createdCallback',
      value: function createdCallback() {
        if (_get(Object.getPrototypeOf(Generic.prototype), 'createdCallback', this)) {
          _get(Object.getPrototypeOf(Generic.prototype), 'createdCallback', this).call(this);
        }
        this.generic = this.getAttribute('generic') || true;
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
        return this._generic;
      },
      set: function set(value) {
        if ('generic' in base.prototype) {
          _set(Object.getPrototypeOf(Generic.prototype), 'generic', value, this);
        }
        // We roll our own attribute setting so that an explicitly false value
        // shows up as generic="false".
        if (typeof value === 'string') {
          value = value !== 'false';
        }
        this._generic = value;
        if (value === false) {
          // Explicitly use false string.
          this.setAttribute('generic', 'false');
        } else if (value == null) {
          // Explicitly remove attribute.
          this.removeAttribute('generic');
        } else {
          // Use the empty string to get attribute to appear with no value.
          this.setAttribute('generic', '');
        }
      }
    }]);

    return Generic;
  }(base);

  return Generic;
};

},{}],10:[function(require,module,exports){
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

},{"./microtask":21}],11:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// TODO: Provide baseline behavior for this mixin when used outside of a
// collective.

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

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Keyboard).apply(this, arguments));
    }

    _createClass(Keyboard, [{
      key: 'createdCallback',
      value: function createdCallback() {
        if (_get(Object.getPrototypeOf(Keyboard.prototype), 'createdCallback', this)) {
          _get(Object.getPrototypeOf(Keyboard.prototype), 'createdCallback', this).call(this);
        }

        // Assume this component is going to handle the keyboard on its own.
        startListeningToKeydown(this);
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

      /*
       * If we're now the outermost element of the collective, set up to receive
       * keyboard events. If we're no longer the outermost element, stop
       * listening.
       */

    }, {
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
  return element._keydownListener != null;
}

function startListeningToKeydown(element) {
  element._keydownListener = keydown.bind(element);
  element.addEventListener('keydown', element._keydownListener);
  // Set a default tab index of 0 (document order) if no tab index exists.
  // MS Edge requires we explicitly check for presence of tabindex attribute.
  if (element.getAttribute('tabindex') == null || element.tabIndex < 0) {
    element.setAttribute('tabindex', '0');
  }
}

function stopListeningToKeydown(element) {
  element.removeEventListener('keydown', element._keydownListener);
  element._keydownListener = null;
  element.removeAttribute('tabindex');
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

      return _possibleConstructorReturn(this, Object.getPrototypeOf(KeyboardDirection).apply(this, arguments));
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
      key: 'navigationAxis',
      get: function get() {
        return this._navigationAxis || 'both';
      },
      set: function set(value) {
        this._navigationAxis = value;
      }
    }]);

    return KeyboardDirection;
  }(base);

  return KeyboardDirection;
};

},{}],13:[function(require,module,exports){
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

},{"./microtask":21}],14:[function(require,module,exports){
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

},{}],15:[function(require,module,exports){
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

},{}],16:[function(require,module,exports){
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

},{}],17:[function(require,module,exports){
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

},{}],18:[function(require,module,exports){
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

      return _possibleConstructorReturn(this, Object.getPrototypeOf(TargetInCollective).apply(this, arguments));
    }

    _createClass(TargetInCollective, [{
      key: 'createdCallback',
      value: function createdCallback() {
        if (_get(Object.getPrototypeOf(TargetInCollective.prototype), 'createdCallback', this)) {
          _get(Object.getPrototypeOf(TargetInCollective.prototype), 'createdCallback', this).call(this);
        }
        this.collective = new _Collective2.default(this);
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

    }, {
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

},{"./Collective":3}],19:[function(require,module,exports){
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

},{}],20:[function(require,module,exports){
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

},{}],21:[function(require,module,exports){
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

},{}],22:[function(require,module,exports){
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

},{}],23:[function(require,module,exports){
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

},{"../../basic-component-mixins/src/AttributeMarshalling":2,"../../basic-component-mixins/src/Composable":4,"../../basic-component-mixins/src/DistributedChildren":7,"../../basic-component-mixins/src/ShadowElementReferences":15,"../../basic-component-mixins/src/ShadowTemplate":16}],24:[function(require,module,exports){
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

var _toggleClass = require('../../basic-component-mixins/src/toggleClass');

var _toggleClass2 = _interopRequireDefault(_toggleClass);

var _fractionalSelection = require('../../basic-component-mixins/src/fractionalSelection');

var fractionalSelection = _interopRequireWildcard(_fractionalSelection);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // jshint ignore:line

var base = _ElementBase2.default;

/**
 * Presents list items in a viewport such that only a single item is visible at
 * a time.
 *
 * Navigating between items will be represented with a horizontal visual
 * sliding effect.
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
      this.selectedFraction = 0;
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
    value: function showTransition(show) {
      if (_get(Object.getPrototypeOf(SlidingViewport.prototype), 'showTransition', this)) {
        _get(Object.getPrototypeOf(SlidingViewport.prototype), 'showTransition', this).call(this, show);
      }
      (0, _toggleClass2.default)(this, 'showTransition', show);
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
      return this._selectedFraction;
    },
    set: function set(value) {
      if ('selectedFraction' in base.prototype) {
        _set(Object.getPrototypeOf(SlidingViewport.prototype), 'selectedFraction', value, this);
      }
      this._selectedFraction = value;
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

// Note: In this routine, "this" is bound to an element instance.

function renderSelection() {
  if (!this.selectedItem) {
    return;
  }
  var selection = fractionalSelection.elementSelection(this);
  var itemCount = this.items ? this.items.length : 0;
  var damped = fractionalSelection.dampedSelection(selection, itemCount);
  // Use a percentage so the transform will still work if screen size changes
  // (e.g., if device orientation changes).
  var left = -damped * 100;
  var transform = 'translateX(' + left + '%)';
  this.$.slidingContainer.style.webkitTransform = transform;
  this.$.slidingContainer.style.transform = transform;
}

document.registerElement('basic-sliding-viewport', SlidingViewport);
exports.default = SlidingViewport;

},{"../../basic-component-mixins/src/fractionalSelection":20,"../../basic-component-mixins/src/toggleClass":22,"../../basic-element-base/src/ElementBase":23,"../../basic-spread-items/src/SpreadItems":25}],25:[function(require,module,exports){
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
 * @mixes ObserveContentChanges
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
      return '\n      <style>\n      :host {\n        display: block;\n      }\n\n      #spreadContainer {\n        display: -webkit-flex;\n        display: flex;\n        height: 100%;\n        position: relative;\n      }\n\n      #spreadContainer ::content > * {\n        object-fit: contain;\n        object-fit: var(--basic-item-object-fit, contain);\n        height: 100%;\n        -webkit-user-drag: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n      }\n      </style>\n\n      <div id="spreadContainer">\n        <slot></slot>\n      </div>\n    ';
    }
  }]);

  return SpreadItems;
}(_ElementBase2.default.compose(_DistributedChildrenAsContent2.default, _ObserveContentChanges2.default));

document.registerElement('basic-spread-items', SpreadItems);
exports.default = SpreadItems;

},{"../../basic-component-mixins/src/DistributedChildrenAsContent":8,"../../basic-component-mixins/src/ObserveContentChanges":13,"../../basic-element-base/src/ElementBase":23}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwYWNrYWdlcy9iYXNpYy1jYXJvdXNlbC9zcmMvQ2Fyb3VzZWwuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9BdHRyaWJ1dGVNYXJzaGFsbGluZy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NvbGxlY3RpdmUuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Db21wb3NhYmxlLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ29udGVudEFzSXRlbXMuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXJlY3Rpb25TZWxlY3Rpb24uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXN0cmlidXRlZENoaWxkcmVuLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudC5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0dlbmVyaWMuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9JdGVtc1NlbGVjdGlvbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0tleWJvYXJkLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvS2V5Ym9hcmREaXJlY3Rpb24uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9PYnNlcnZlQ29udGVudENoYW5nZXMuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TZWxlY3Rpb25BcmlhQWN0aXZlLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2hhZG93RWxlbWVudFJlZmVyZW5jZXMuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TaGFkb3dUZW1wbGF0ZS5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1N3aXBlRGlyZWN0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvVGFyZ2V0SW5Db2xsZWN0aXZlLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvVHJhY2twYWREaXJlY3Rpb24uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9mcmFjdGlvbmFsU2VsZWN0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvbWljcm90YXNrLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvdG9nZ2xlQ2xhc3MuanMiLCJwYWNrYWdlcy9iYXNpYy1lbGVtZW50LWJhc2Uvc3JjL0VsZW1lbnRCYXNlLmpzIiwicGFja2FnZXMvYmFzaWMtc2xpZGluZy12aWV3cG9ydC9zcmMvU2xpZGluZ1ZpZXdwb3J0LmpzIiwicGFja2FnZXMvYmFzaWMtc3ByZWFkLWl0ZW1zL3NyYy9TcHJlYWRJdGVtcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNlQSxJQUFJLElBQUksR0FBRyxzQkFBWSxPQUFPLG1WQWE3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFDO0lBOEdJLFFBQVE7WUFBUixRQUFROztXQUFSLFFBQVE7MEJBQVIsUUFBUTs7a0VBQVIsUUFBUTs7O2VBQVIsUUFBUTs7dUNB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QUMsb0JBQW9CLEVBQUUsV0FBVyxDQUFDLENBQUM7a0JBQzdDLFdBQVciLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IEVsZW1lbnRCYXNlIGZyb20gJy4uLy4uL2Jhc2ljLWVsZW1lbnQtYmFzZS9zcmMvRWxlbWVudEJhc2UnO1xuaW1wb3J0IENvbnRlbnRBc0l0ZW1zIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NvbnRlbnRBc0l0ZW1zJztcbmltcG9ydCBEaXJlY3Rpb25TZWxlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlyZWN0aW9uU2VsZWN0aW9uJztcbmltcG9ydCBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50IGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQnO1xuaW1wb3J0IEdlbmVyaWMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvR2VuZXJpYyc7XG5pbXBvcnQgSXRlbXNTZWxlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvSXRlbXNTZWxlY3Rpb24nO1xuaW1wb3J0IEtleWJvYXJkIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0tleWJvYXJkJztcbmltcG9ydCBLZXlib2FyZERpcmVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9LZXlib2FyZERpcmVjdGlvbic7XG5pbXBvcnQgT2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL09ic2VydmVDb250ZW50Q2hhbmdlcyc7XG5pbXBvcnQgU2VsZWN0aW9uQXJpYUFjdGl2ZSBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TZWxlY3Rpb25BcmlhQWN0aXZlJztcbmltcG9ydCBTbGlkaW5nVmlld3BvcnQgZnJvbSAnLi4vLi4vYmFzaWMtc2xpZGluZy12aWV3cG9ydC9zcmMvU2xpZGluZ1ZpZXdwb3J0JzsgLy8ganNoaW50IGlnbm9yZTpsaW5lXG5pbXBvcnQgU3dpcGVEaXJlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU3dpcGVEaXJlY3Rpb24nO1xuaW1wb3J0IFRhcmdldEluQ29sbGVjdGl2ZSBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9UYXJnZXRJbkNvbGxlY3RpdmUnO1xuaW1wb3J0IFRyYWNrcGFkRGlyZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1RyYWNrcGFkRGlyZWN0aW9uJztcblxubGV0IGJhc2UgPSBFbGVtZW50QmFzZS5jb21wb3NlKFxuICBDb250ZW50QXNJdGVtcyxcbiAgRGlyZWN0aW9uU2VsZWN0aW9uLFxuICBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50LFxuICBHZW5lcmljLFxuICBJdGVtc1NlbGVjdGlvbixcbiAgS2V5Ym9hcmQsXG4gIEtleWJvYXJkRGlyZWN0aW9uLFxuICBPYnNlcnZlQ29udGVudENoYW5nZXMsXG4gIFNlbGVjdGlvbkFyaWFBY3RpdmUsXG4gIFN3aXBlRGlyZWN0aW9uLFxuICBUYXJnZXRJbkNvbGxlY3RpdmUsXG4gIFRyYWNrcGFkRGlyZWN0aW9uXG4pO1xuXG5cbi8qKlxuICogTGV0cyB0aGUgdXNlciBuYXZpZ2F0ZSBsYXRlcmFsbHkgdGhyb3VnaCBhIHNlcXVlbmNlIG9mIGNoaWxkIGVsZW1lbnRzLlxuICpcbiAqIGJhc2ljLWNhcm91c2VsIGlzIGFuIGltcGxlbWVudGF0aW9uIG9mIHRoZSBjYXJvdXNlbCB1c2VyIGludGVyZmFjZSBwYXR0ZXJuLFxuICogY29tbW9ubHkgdXNlZCBmb3IgbmF2aWdhdGluZyBiZXR3ZWVuIGltYWdlcywgcGFnZXMsIGFuZCBvdGhlciBlbGVtZW50cy4gVGhpc1xuICogcGF0dGVybiBwcmVzZW50cyB0aGUgdXNlciB3aXRoIGEgbGluZWFyIHNlcXVlbmNlIG9mIGVsZW1lbnRzLCBvbmx5IG9uZSBvZlxuICogd2hpY2ggaXMgc2hvd24gYXQgYSB0aW1lLiBUaGUgdXNlciBjYW4gbmF2aWdhdGUgdG8gdGhlIG5leHQvcHJldmlvdXMgZWxlbWVudFxuICogd2l0aCBhIHZhcmlldHkgb2YgaW5wdXQgbWV0aG9kcy5cbiAqXG4gKiBbTGl2ZSBkZW1vXShodHRwOi8vYmFzaWN3ZWJjb21wb25lbnRzLm9yZy9iYXNpYy13ZWItY29tcG9uZW50cy9wYWNrYWdlcy9iYXNpYy1jYXJvdXNlbC8pXG4gKlxuICogWW91IGNhbiBhbHNvIHZpZXcgZGVtb3Mgd2l0aCBvcHRpb25hbFxuICogW2Fycm93c10oaHR0cDovL2Jhc2ljd2ViY29tcG9uZW50cy5vcmcvYmFzaWMtd2ViLWNvbXBvbmVudHMvcGFja2FnZXMvYmFzaWMtY2Fyb3VzZWwvY2Fyb3VzZWxXaXRoQXJyb3dzLmh0bWwpLFxuICogW2RvdHNdKGh0dHA6Ly9iYXNpY3dlYmNvbXBvbmVudHMub3JnL2Jhc2ljLXdlYi1jb21wb25lbnRzL3BhY2thZ2VzL2Jhc2ljLWNhcm91c2VsL2Nhcm91c2VsV2l0aERvdHMuaHRtbCksXG4gKiBvciBib3RoIFthcnJvd3MgYW5kIGRvdHNdKGh0dHA6Ly9iYXNpY3dlYmNvbXBvbmVudHMub3JnL2Jhc2ljLXdlYi1jb21wb25lbnRzL3BhY2thZ2VzL2Jhc2ljLWNhcm91c2VsL2Nhcm91c2VsV2l0aEFycm93c0FuZERvdHMuaHRtbCkuXG4gKlxuICogYmFzaWMtY2Fyb3VzZWwgdXNlcyBpdHMgY2hpbGRyZW4gYXMgdGhlIGVsZW1lbnRzIHRoZSB1c2VyIHdpbGwgbmF2aWdhdGVcbiAqIHRocm91Z2guIEluIGEgdHlwaWNhbCB1c2UsIGEgYmFzaWMtY2Fyb3VzZWwgY2FuIGJlIHVzZWQgdG8gbmF2aWdhdGUgYmV0d2VlbiBhXG4gKiBzZXF1ZW5jZSBvZiBpbWFnZXM6XG4gKlxuICogICAgIDxiYXNpYy1jYXJvdXNlbD5cbiAqICAgICAgIDxpbWcgc3JjPVwiaW1hZ2UxLmpwZ1wiPlxuICogICAgICAgPGltZyBzcmM9XCJpbWFnZTIuanBnXCI+XG4gKiAgICAgICA8aW1nIHNyYz1cImltYWdlMy5qcGdcIj5cbiAqICAgICA8L2Jhc2ljLWNhcm91c2VsPlxuICpcbiAqIFRoZSBjaGlsZCBlbGVtZW50cyBjYW4gYmUgb2YgYW55IHR5cGUg4oCUwqB0aGV5IGFyZSBub3QgcmVzdHJpY3RlZCB0byBpbWFnZXMuXG4gKlxuICogVGhpcyBjb21wb25lbnQgYXR0ZW1wdHMgdG8gbWVldCB0aGUgW0dvbGQgU3RhbmRhcmQgZm9yIHdlYiBjb21wb25lbnRzXVxuICogKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJjb21wb25lbnRzL2dvbGQtc3RhbmRhcmQvd2lraSkgc28gdGhhdCBpdCBpcyBnZW5lcmFsbHlcbiAqIGFzIGZsZXhpYmxlIGFuZCByb2J1c3QgYXMgc3RhbmRhcmQgSFRNTCBlbGVtZW50cy4gRm9yIGV4YW1wbGUsIGl0IG1lZXRzIHRoZVxuICogXCJDb250ZW50IENoYW5nZXNcIiBjcml0ZXJpYTogdGhlIGNhcm91c2VsIHdpbGwgYWRhcHQgdG8gbmV3IGNoaWxkIGVsZW1lbnRzXG4gKiBhZGRlZCBvciByZW1vdmVkIGF0IHJ1bnRpbWUuXG4gKlxuICogQ3VycmVudGx5LCB0aGlzIGNvbXBvbmVudCBkb2VzIG5vdCBtZWV0IHRoZSBHb2xkIFN0YW5kYXJkIGNyaXRlcmlhIFwiU2l6ZSB0b1xuICogQ29udGVudFwiLiBBcyBhIHJlc3VsdCwgZm9yIHRoZSB0aW1lIGJlaW5nLCAqKnlvdSBtdXN0IG1hbnVhbGx5IHNldCBhIHNpemUgb25cbiAqIHRoaXMgY29tcG9uZW50KiouIFR3byBhcHByb2FjaGVzIGFyZSB0bzogMSkgc3RyZXRjaCB0aGUgY29tcG9uZW50IGFjcm9zc1xuICogd2hhdGV2ZXIgc3VyZmFjZSBpdCBpcyBjb250YWluZWQgd2l0aGluLCBvciAyKSBzZXQgaXQgdG8gYmUgbGFyZ2VyIHRoYW4gdGhlXG4gKiBsYXJnZXN0IGNoaWxkIGVsZW1lbnQgeW91IHdhbnQgdG8gZGlzcGxheS4gVGhlIGZvcm1lciBhcHByb2FjaCBpcyBtb3JlXG4gKiBjb21tb24sIGFuZCBjYW4gYmUgYWNoaWV2ZWQgd2l0aCBDU1Mgc3R5bGluZyBzdWNoIGFzOlxuICpcbiAqICAgICBodG1sIHtcbiAqICAgICAgIGhlaWdodDogMTAwJTtcbiAqICAgICB9XG4gKlxuICogICAgIGJvZHkge1xuICogICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICogICAgICAgZGlzcGxheTogZmxleDtcbiAqICAgICAgIGhlaWdodDogMTAwJTtcbiAqICAgICAgIG1hcmdpbjogMDtcbiAqICAgICB9XG4gKlxuICogICAgIGJhc2ljLWNhcm91c2VsIHtcbiAqICAgICAgIC13ZWJraXQtZmxleDogMTtcbiAqICAgICAgIGZsZXg6IDE7XG4gKiAgICAgfVxuICpcbiAqIFRoZSBzdGFuZGFyZCBiYXNpYy1jYXJvdXNlbCBjb21wb25lbnQgc3VwcG9ydHMgbmF2aWdhdGlvbiB2aWEgdGhlIGZvbGxvd2luZ1xuICogaW5wdXQgbWV0aG9kczpcbiAqXG4gKiAqIEtleWJvYXJkLiBXaGVuIHRoZSBjYXJvdXNlbCBoYXMgZm9jdXMsIHRoZSB1c2VyIGNhbiBwcmVzcyBMZWZ0LCBSaWdodCxcbiAqICAgSG9tZSwgb3IgRW5kLiBUaGVzZSBuYXZpZ2F0ZSB0byB0aGUgZXhwZWN0ZWQgZWxlbWVudC5cbiAqICogVG91Y2guIE9uIG1vYmlsZSBhbmQgb3RoZXIgdG91Y2gtZW5hYmxlZCBkZXZpY2VzLCB0aGUgdXNlciBjYW4gZHJhZyBsZWZ0IG9yXG4gKiAgIHJpZ2h0LlxuICogKiBUcmFja3BhZC4gVGhlIHVzZXIgY2FuIHN3aXBlIGxlZnQgb3IgcmlnaHQgb24gYSB0cmFja3BhZCB0byBuYXZpZ2F0ZS5cbiAqXG4gKiBCZWNhdXNlIGNhcm91c2VscyBhcmUgdXNlZCBpbiBhIHdpZGUgdmFyaWV0eSBvZiBjaXJjdW1zdGFuY2VzLCBieSBkZWZhdWx0XG4gKiBiYXNpYy1jYXJvdXNlbCBwcm92aWRlcyBhIG1pbmltYWwgYXBwZWFyYW5jZSBhbmQgbm8gc2VwYXJhdGVseSBpbnRlcmFjdGl2ZVxuICogZWxlbWVudHMgc3VjaCBhcyBhcnJvdyBidXR0b25zIG9uIHRoZSBzaWRlIG9yIGRvdHMgYWxvbmcgdGhlIGJvdHRvbS4gVGhvc2VcbiAqIGVsZW1lbnRzIGNhbiBiZSBhZGRlZCBieSB3cmFwcGluZyBhIGJhc2ljLWNhcm91c2VsIGluIG9wdGlvbmFsIGFjY2Vzc29yaWVzOlxuICpcbiAqICogW2Jhc2ljLWFycm93LXNlbGVjdGlvbl0oaHR0cDovL2dpdGh1Yi5jb20vYmFzaWMtd2ViLWNvbXBvbmVudHMvYmFzaWMtd2ViLWNvbXBvbmVudHMvcGFja2FnZXMvYmFzaWMtYXJyb3ctc2VsZWN0aW9uKS5cbiAqICAgVGhpcyBhZGRzIHByb21pbmVudCBsZWZ0IGFuZCByaWdodCBhcnJvdyBidXR0b25zIG9uIHRoZSBzaWRlIG9mIHRoZSBjYXJvdXNlbC5cbiAqICogW2Jhc2ljLXBhZ2UtZG90c10oaHR0cDovL2dpdGh1Yi5jb20vYmFzaWMtd2ViLWNvbXBvbmVudHMvYmFzaWMtd2ViLWNvbXBvbmVudHMvcGFja2FnZXMvYmFzaWMtcGFnZS1kb3RzKS5cbiAqICAgVGhpcyBhZGRzIGEgc2VyaWVzIG9mIHNtYWxsIGRvdHMgYmVsb3cgdGhlIGNhcm91c2VsIHRvIGluZGljYXRlIHRoZSB1c2VyJ3NcbiAqICAgY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgc2VxdWVuY2UuXG4gKlxuICogU2VlIHRob3NlIGNvbXBvbmVudHMgZm9yIG1vcmUgZGV0YWlscywgYnV0IGluIGdlbmVyYWwgeW91IGNhbiBjb25zdHJ1Y3QgYVxuICogY29tbW9uIGNhcm91c2VsIHdpdGggYm90aCBhcnJvdyBidXR0b25zIGFuZCBkb3RzIGxpa2Ugc286XG4gKlxuICogICAgIDxiYXNpYy1hcnJvdy1zZWxlY3Rpb24+XG4gKiAgICAgICA8YmFzaWMtcGFnZS1kb3RzPlxuICogICAgICAgICA8YmFzaWMtY2Fyb3VzZWw+XG4gKiAgICAgICAgICAgLi4uIGltYWdlcywgZXRjLiAuLi5cbiAqICAgICAgICAgPC9iYXNpYy1jYXJvdXNlbD5cbiAqICAgICAgIDwvYmFzaWMtcGFnZS1kb3RzPlxuICogICAgIDwvYmFzaWMtYXJyb3ctc2VsZWN0aW9uPlxuICpcbiAqIEZvciB1bml2ZXJzYWwgYWNjZXNzLCBiYXNpYy1jYXJvdXNlbCBhdXRvbWF0aWNhbGx5IGFkZHMgYSB2YXJpZXR5IG9mXG4gKiBbQVJJQV0oaHR0cDovL3d3dy53My5vcmcvV0FJL2ludHJvL2FyaWEpIHByb3BlcnRpZXMgdG8gaXRzZWxmIGFuZCB0byBjaGlsZFxuICogZWxlbWVudHMuIFRoaXMgaGVscHMgdXNlcnMgbmF2aWdhdGUgdGhlIHNlcXVlbmNlIG9mIGVsZW1lbnRzIGluIHRoZSBjYXJvdXNlbFxuICogdXNpbmcgYXNzaXN0aXZlIHRlY2hub2xvZ2llcy5cbiAqXG4gKiBAZXh0ZW5kcyBFbGVtZW50QmFzZVxuICogQG1peGVzIENvbnRlbnRBc0l0ZW1zXG4gKiBAbWl4ZXMgRGlyZWN0aW9uU2VsZWN0aW9uXG4gKiBAbWl4ZXMgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudFxuICogQG1peGVzIEdlbmVyaWNcbiAqIEBtaXhlcyBJdGVtc1NlbGVjdGlvblxuICogQG1peGVzIEtleWJvYXJkXG4gKiBAbWl4ZXMgS2V5Ym9hcmREaXJlY3Rpb25cbiAqIEBtaXhlcyBPYnNlcnZlQ29udGVudENoYW5nZXNcbiAqIEBtaXhlcyBTZWxlY3Rpb25BcmlhQWN0aXZlXG4gKiBAbWl4ZXMgU3dpcGVEaXJlY3Rpb25cbiAqIEBtaXhlcyBUYXJnZXRJbkNvbGxlY3RpdmVcbiAqIEBtaXhlcyBUcmFja3BhZERpcmVjdGlvblxuICovXG5jbGFzcyBDYXJvdXNlbCBleHRlbmRzIGJhc2Uge1xuXG4gIGF0dGFjaGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHN1cGVyLmF0dGFjaGVkQ2FsbGJhY2spIHsgc3VwZXIuYXR0YWNoZWRDYWxsYmFjaygpOyB9XG4gICAgLy8gSEFDS1xuICAgIHRoaXMuaXRlbXNDaGFuZ2VkKCk7XG4gICAgdGhpcy5zZWxlY3Rpb25SZXF1aXJlZCA9IHRydWU7XG4gIH1cblxuICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuICAgIHRoaXMubmF2aWdhdGlvbkF4aXMgPSAnaG9yaXpvbnRhbCc7XG4gIH1cblxuICBnZXQgc2VsZWN0ZWRGcmFjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kLnZpZXdwb3J0LnNlbGVjdGVkRnJhY3Rpb247XG4gIH1cbiAgc2V0IHNlbGVjdGVkRnJhY3Rpb24odmFsdWUpIHtcbiAgICBpZiAoJ3NlbGVjdGVkRnJhY3Rpb24nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkRnJhY3Rpb24gPSB2YWx1ZTsgfVxuICAgIHRoaXMuJC52aWV3cG9ydC5zZWxlY3RlZEZyYWN0aW9uID0gdmFsdWU7XG4gICAgbGV0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdzZWxlY3Rpb24tZnJhY3Rpb24tY2hhbmdlZCcpO1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gIH1cblxuICBnZXQgc2VsZWN0ZWRJbmRleCgpIHtcbiAgICByZXR1cm4gc3VwZXIuc2VsZWN0ZWRJbmRleDtcbiAgfVxuICBzZXQgc2VsZWN0ZWRJbmRleCh2YWx1ZSkge1xuICAgIGlmICgnc2VsZWN0ZWRJbmRleCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJbmRleCA9IHZhbHVlOyB9XG4gICAgdGhpcy4kLnZpZXdwb3J0LnNlbGVjdGVkSW5kZXggPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBzZWxlY3RlZEl0ZW0oKSB7XG4gICAgcmV0dXJuIHN1cGVyLnNlbGVjdGVkSXRlbTtcbiAgfVxuICBzZXQgc2VsZWN0ZWRJdGVtKGl0ZW0pIHtcbiAgICBpZiAoJ3NlbGVjdGVkSXRlbScgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJdGVtID0gaXRlbTsgfVxuICAgIHRoaXMuJC52aWV3cG9ydC5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xuICB9XG5cbiAgc2hvd1RyYW5zaXRpb24oc2hvdykge1xuICAgIGlmIChzdXBlci5zaG93VHJhbnNpdGlvbikgeyBzdXBlci5zaG93VHJhbnNpdGlvbigpOyB9XG4gICAgcmV0dXJuIHRoaXMuJC52aWV3cG9ydC5zaG93VHJhbnNpdGlvbihzaG93KTtcbiAgfVxuXG4gIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gYFxuICAgICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB9XG5cbiAgICAgIGJhc2ljLXNsaWRpbmctdmlld3BvcnQge1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC13ZWJraXQtZmxleDogMTtcbiAgICAgICAgZmxleDogMTtcbiAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxiYXNpYy1zbGlkaW5nLXZpZXdwb3J0IGlkPVwidmlld3BvcnRcIj5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgPC9iYXNpYy1zbGlkaW5nLXZpZXdwb3J0PlxuICAgIGA7XG4gIH1cbn1cblxuXG5kb2N1bWVudC5yZWdpc3RlckVsZW1lbnQoJ2Jhc2ljLWNhcm91c2VsJywgQ2Fyb3VzZWwpO1xuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWw7XG4iLCIvKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIEF0dHJpYnV0ZU1hcnNoYWxsaW5nLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggbWFyc2hhbGxzIGF0dHJpYnV0ZXMgdG8gcHJvcGVydGllcyAoYW5kIGV2ZW50dWFsbHkgdmljZSB2ZXJzYSkuXG4gICAqXG4gICAqIElmIHlvdXIgY29tcG9uZW50IGV4cG9zZXMgYSBzZXR0ZXIgZm9yIGEgcHJvcGVydHksIGl0J3MgZ2VuZXJhbGx5IGEgZ29vZFxuICAgKiBpZGVhIHRvIGxldCBkZXZzIHVzaW5nIHlvdXIgY29tcG9uZW50IGJlIGFibGUgdG8gc2V0IHRoYXQgcHJvcGVydHkgaW4gSFRNTFxuICAgKiB2aWEgYW4gZWxlbWVudCBhdHRyaWJ1dGUuIFlvdSBjYW4gY29kZSB0aGF0IHlvdXJzZWxmIGJ5IHdyaXRpbmcgYW5cbiAgICogYGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja2AsIG9yIHlvdSBjYW4gdXNlIHRoaXMgbWl4aW4gdG8gZ2V0IGEgZGVncmVlIG9mXG4gICAqIGF1dG9tYXRpYyBzdXBwb3J0LlxuICAgKlxuICAgKiBUaGlzIG1peGluIGltcGxlbWVudHMgYW4gYGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja2AgdGhhdCB3aWxsIGF0dGVtcHQgdG9cbiAgICogY29udmVydCBhIGNoYW5nZSBpbiBhbiBlbGVtZW50IGF0dHJpYnV0ZSBpbnRvIGEgY2FsbCB0byB0aGUgY29ycmVzcG9uZGluZ1xuICAgKiBwcm9wZXJ0eSBzZXR0ZXIuIEF0dHJpYnV0ZXMgdHlwaWNhbGx5IGZvbGxvdyBoeXBoZW5hdGVkIG5hbWVzIChcImZvby1iYXJcIiksXG4gICAqIHdoZXJlYXMgcHJvcGVydGllcyB0eXBpY2FsbHkgdXNlIGNhbWVsQ2FzZSBuYW1lcyAoXCJmb29CYXJcIikuIFRoaXMgbWl4aW5cbiAgICogcmVzcGVjdHMgdGhhdCBjb252ZW50aW9uLCBhdXRvbWF0aWNhbGx5IG1hcHBpbmcgdGhlIGh5cGhlbmF0ZWQgYXR0cmlidXRlXG4gICAqIG5hbWUgdG8gdGhlIGNvcnJlc3BvbmRpbmcgY2FtZWxDYXNlIHByb3BlcnR5IG5hbWUuXG4gICAqXG4gICAqIEV4YW1wbGU6IFlvdSBkZWZpbmUgYSBjb21wb25lbnQgdXNpbmcgdGhpcyBtaXhpbjpcbiAgICpcbiAgICogICAgIGNsYXNzIE15RWxlbWVudCBleHRlbmRzIEF0dHJpYnV0ZU1hcnNoYWxsaW5nKEhUTUxFbGVtZW50KSB7XG4gICAqICAgICAgIGdldCBmb29CYXIoKSB7IHJldHVybiB0aGlzLl9mb29CYXI7IH1cbiAgICogICAgICAgc2V0IGZvb0Jhcih2YWx1ZSkgeyB0aGlzLl9mb29CYXIgPSB2YWx1ZTsgfVxuICAgKiAgICAgfVxuICAgKiAgICAgZG9jdW1lbnQucmVnaXN0ZXJFbGVtZW50KCdteS1lbGVtZW50JywgTXlFbGVtZW50KTtcbiAgICpcbiAgICogSWYgc29tZW9uZSB0aGVuIGluc3RhbnRpYXRlcyB5b3VyIGNvbXBvbmVudCBpbiBIVE1MOlxuICAgKlxuICAgKiAgICAgPG15LWVsZW1lbnQgZm9vLWJhcj1cIkhlbGxvXCI+PC9teS1lbGVtZW50PlxuICAgKlxuICAgKiBUaGVuLCBhZnRlciB0aGUgZWxlbWVudCBoYXMgYmVlbiB1cGdyYWRlZCwgdGhlIGBmb29CYXJgIHNldHRlciB3aWxsXG4gICAqIGF1dG9tYXRpY2FsbHkgYmUgaW52b2tlZCB3aXRoIHRoZSBpbml0aWFsIHZhbHVlIFwiSGVsbG9cIi5cbiAgICpcbiAgICogRm9yIHRoZSB0aW1lIGJlaW5nLCB0aGlzIG1peGluIG9ubHkgc3VwcG9ydHMgc3RyaW5nLXZhbHVlZCBwcm9wZXJ0aWVzLlxuICAgKiBJZiB5b3UnZCBsaWtlIHRvIGNvbnZlcnQgc3RyaW5nIGF0dHJpYnV0ZXMgdG8gb3RoZXIgdHlwZXMgKG51bWJlcnMsXG4gICAqIGJvb2xlYW5zKSwgeW91IG5lZWQgdG8gaW1wbGVtZW50IGBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tgIHlvdXJzZWxmLlxuICAgKi9cbiAgY2xhc3MgQXR0cmlidXRlTWFyc2hhbGxpbmcgZXh0ZW5kcyBiYXNlIHtcblxuICAgIC8qXG4gICAgICogSGFuZGxlIGEgY2hhbmdlIHRvIHRoZSBhdHRyaWJ1dGUgd2l0aCB0aGUgZ2l2ZW4gbmFtZS5cbiAgICAgKi9cbiAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG4gICAgICBpZiAoc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKSB7IHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjaygpOyB9XG4gICAgICAvLyBJZiB0aGUgYXR0cmlidXRlIG5hbWUgY29ycmVzcG9uZHMgdG8gYSBwcm9wZXJ0eSBuYW1lLCB0aGVuIHNldCB0aGF0XG4gICAgICAvLyBwcm9wZXJ0eS4gSWdub3JlIGNoYW5nZXMgaW4gc3RhbmRhcmQgSFRNTEVsZW1lbnQgcHJvcGVydGllcy5cbiAgICAgIGxldCBwcm9wZXJ0eU5hbWUgPSBhdHRyaWJ1dGVUb1Byb3BlcnR5TmFtZShuYW1lKTtcbiAgICAgIGlmIChwcm9wZXJ0eU5hbWUgaW4gdGhpcyAmJiAhKHByb3BlcnR5TmFtZSBpbiBIVE1MRWxlbWVudC5wcm90b3R5cGUpKSB7XG4gICAgICAgIHRoaXNbcHJvcGVydHlOYW1lXSA9IG5ld1ZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICogR2VuZXJhdGUgYW4gaW5pdGlhbCBjYWxsIHRvIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayBmb3IgZWFjaCBhdHRyaWJ1dGVcbiAgICAgKiBvbiB0aGUgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIFRPRE86IFRoZSBwbGFuIGZvciBDdXN0b20gRWxlbWVudHMgdjEgaXMgZm9yIHRoZSBicm93c2VyIHRvIGhhbmRsZSB0aGlzLlxuICAgICAqIE9uY2UgdGhhdCdzIGhhbmRsZWQgKGluY2x1ZGluZyBpbiBwb2x5ZmlsbHMpLCB0aGlzIGNhbGwgY2FuIGdvIGF3YXkuXG4gICAgICovXG4gICAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuICAgICAgbGV0IGF0dHJpYnV0ZXMgPSBbXS5zbGljZS5jYWxsKHRoaXMuYXR0cmlidXRlcyk7IC8vIFRvIGFycmF5IGZvciBJRVxuICAgICAgYXR0cmlidXRlcy5mb3JFYWNoKGF0dHJpYnV0ZSA9PiB7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKGF0dHJpYnV0ZS5uYW1lLCB1bmRlZmluZWQsIGF0dHJpYnV0ZS52YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBBdHRyaWJ1dGVNYXJzaGFsbGluZztcbn07XG5cblxuLy8gQ29udmVydCBjYW1lbCBjYXNlIGZvb0JhciBuYW1lIHRvIGh5cGhlbmF0ZWQgZm9vLWJhci5cbmZ1bmN0aW9uIGF0dHJpYnV0ZVRvUHJvcGVydHlOYW1lKGF0dHJpYnV0ZU5hbWUpIHtcbiAgbGV0IHByb3BlcnR5TmFtZSA9IGF0dHJpYnV0ZU5hbWUucmVwbGFjZSgvLShbYS16XSkvZywgbSA9PiBtWzFdLnRvVXBwZXJDYXNlKCkpO1xuICByZXR1cm4gcHJvcGVydHlOYW1lO1xufVxuXG4vLyBDb252ZXJ0IGh5cGhlbmF0ZWQgZm9vLWJhciBuYW1lIHRvIGNhbWVsIGNhc2UgZm9vQmFyLlxuLy8gVE9ETzogVXNlIHRoaXMgd2hlbiB3ZSBzdXBwb3J0IHJlZmxlY3Rpb24gb2YgcHJvcGVydGllcyB0byBhdHRyaWJ1dGVzLlxuLy8gZnVuY3Rpb24gcHJvcGVydHlUb0F0dHJpYnV0ZU5hbWUocHJvcGVydHlOYW1lKSB7XG4vLyAgIGxldCBhdHRyaWJ1dGVOYW1lID0gcHJvcGVydHlOYW1lLnJlcGxhY2UoLyhbYS16XVtBLVpdKS9nLCBnID0+IGdbMF0gKyAnLScgKyBnWzFdLnRvTG93ZXJDYXNlKCkpO1xuLy8gICByZXR1cm4gYXR0cmlidXRlTmFtZTtcbi8vIH1cbiIsIi8qKlxuICogQSBncm91cCBvZiBlbGVtZW50cyB0aGF0IGhhdmUgYmVlbiBhc3NvY2lhdGVkIGZvciB0aGUgcHVycG9zZSBvZlxuICogYWNjb21wbGlzaGluZyBzb21lIGNvbGxlY3RpdmUgYmVoYXZpb3IsIGUuZy4sIGtleWJvYXJkIGhhbmRsaW5nLlxuICpcbiAqIFRoZXJlIGFyZSBjZXJ0YWluIGNvbXBvbmVudHMgdGhhdCB3YW50IHRvIGNvb3BlcmF0aXZlbHkgaGFuZGxlIHRoZSBrZXlib2FyZC5cbiAqIEZvciBleGFtcGxlLCB0aGUgYmFzaWMtYXJyb3ctc2VsZWN0aW9uIGFuZCBiYXNpYy1wYWdlLWRvdHMgY29tcG9uZW50cyBhcmVcbiAqIG9wdGlvbmFsIGNvbXBvbmVudHMgdGhhdCBjYW4gYXVnbWVudCB0aGUgYXBwZWFyYW5jZSBhbmQgYmVoYXZpb3Igb2YgYW4gaW5uZXJcbiAqIGJhc2ljLWNhcm91c2VsLCBhZGRpbmcgYXJyb3cgYnV0dG9ucyBhbmQgZG90IGJ1dHRvbnMsIHJlc3BlY3RpdmVseS4gV2hlblxuICogdGhlc2UgY29tcG9uZW50cyBhcmUgbmVzdGVkIHRvZ2V0aGVyLCB0aGV5IGZvcm0gYW4gaW1wbGljaXQgdW5pdCBjYWxsZWQgYVxuICogKmNvbGxlY3RpdmUqOlxuICpcbiAqICAgICA8YmFzaWMtYXJyb3ctc2VsZWN0aW9uPlxuICogICAgICAgPGJhc2ljLXBhZ2UtZG90cz5cbiAqICAgICAgICAgPGJhc2ljLWNhcm91c2VsPlxuICogICAgICAgICAgIC4uLiBpbWFnZXMsIGV0Yy4gLi4uXG4gKiAgICAgICAgIDwvYmFzaWMtY2Fyb3VzZWw+XG4gKiAgICAgICA8L2Jhc2ljLXBhZ2UtZG90cz5cbiAqICAgICA8L2Jhc2ljLWFycm93LXNlbGVjdGlvbj5cbiAqXG4gKiBJbiB0aGlzIGNvbmZpZ3VyYXRpb24sIHRoZSB0aHJlZSBjb21wb25lbnRzIHdpbGwgYWxsIGhhdmUgYSBgdGhpcy5jb2xsZWN0aXZlYFxuICogcmVmZXJlbmNlIHRoYXQgcmVmZXJzIHRvIGEgc2hhcmVkIGluc3RhbmNlIG9mIHRoZSBgQ29sbGVjdGl2ZWAgY2xhc3MuXG4gKlxuICogVGhlIFtLZXlib2FyZF0oS2V5Ym9hcmQubWQpIG1peGluIHRoZXkgdXNlIGlzIHNlbnNpdGl2ZSB0byB0aGUgcHJlc2VuY2Ugb2ZcbiAqIHRoZSBjb2xsZWN0aXZlLiBBbW9uZyBvdGhlciB0aGluZ3MsIGl0IHdpbGwgZW5zdXJlIHRoYXQgb25seSB0aGUgb3V0ZXJtb3N0XG4gKiBlbGVtZW50IGFib3ZlIOKAlMKgdGhlIGJhc2ljLWFycm93LXNlbGVjdGlvbiDigJTCoHdpbGwgYmUgYSB0YWIgc3RvcCB0aGF0IGNhblxuICogcmVjZWl2ZSB0aGUga2V5Ym9hcmQgZm9jdXMuIFRoaXMgbGV0cyB0aGUgdXNlciBwZXJjZWl2ZSB0aGUgY29tcG9uZW50XG4gKiBhcnJhbmdlbWVudCBhYm92ZSBhcyBhIHNpbmdsZSB1bml0LiBUaGUgS2V5Ym9hcmQgbWl4aW4gd2lsbCBhbHNvIGdpdmUgZWFjaFxuICogZWxlbWVudCBpbiB0aGUgY29sbGVjdGl2ZSBhIGNoYW5jZSB0byBwcm9jZXNzIGFueSBrZXlib2FyZCBldmVudHMuIFNvLCBldmVuXG4gKiB0aG91Z2ggdGhlIGJhc2ljLWFycm93LXNlbGVjdGlvbiBlbGVtZW50IHdpbGwgaGF2ZSB0aGUgZm9jdXMsIHRoZSBzdGFuZGFyZFxuICoga2V5Ym9hcmQgbmF2aWdhdGlvbiBwcm92aWRlZCBieSBiYXNpYy1jYXJvdXNlbCB3aWxsIGNvbnRpbnVlIHRvIHdvcmsuXG4gKlxuICogVGhlIFtTZWxlY3Rpb25BcmlhQWN0aXZlXShTZWxlY3Rpb25BcmlhQWN0aXZlLm1kKSBtaXhpbiBhbHNvIHJlc3BlY3RzXG4gKiBjb2xsZWN0aXZlcyB3aGVuIHVzaW5nIHRoZSBgYXJpYS1hY3RpdmVkZXNjZW5kYW50YCBhbmQgYHJvbGVgIGF0dHJpYnV0ZXMuXG4gKiBUaG9zZSB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIG91dGVybW9zdCBlbGVtZW50IChiYXNpYy1hcnJvdy1zZWxlY3Rpb24sIGFib3ZlKVxuICogc28gdGhhdCBBUklBIGNhbiBjb3JyZWN0bHkgdW5kZXJzdGFuZCB0aGUgYXJyYW5nZW1lbnQgb2YgdGhlIGVsZW1lbnRzLlxuICpcbiAqIFlvdSBjYW4gcHV0IGVsZW1lbnRzIGludG8gY29sbGVjdGl2ZXMgeW91cnNlbGYsIG9yIHlvdSBjYW4gdXNlIHRoZVxuICogW1RhcmdldEluQ29sbGVjdGl2ZV0oVGFyZ2V0SW5Db2xsZWN0aXZlLm1kKSBtaXhpbi5cbiAqL1xuY2xhc3MgQ29sbGVjdGl2ZSB7XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGNvbGxlY3RpdmUuXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVMZW1lbnRbXX0gW2VsZW1lbnRzXSAtIEluaXRpYWwgZWxlbWVudHMgdG8gYWRkLlxuICAgKi9cbiAgY29uc3RydWN0b3IoLi4uZWxlbWVudHMpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgZWxlbWVudHMgaW4gdGhlIGNvbGxlY3RpdmUuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnRbXX1cbiAgICAgKi9cbiAgICB0aGlzLmVsZW1lbnRzID0gW107XG4gICAgZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHRoaXMuYXNzaW1pbGF0ZShlbGVtZW50KSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIHRoZSBpbmRpY2F0ZWQgdGFyZ2V0IHRvIHRoZSBjb2xsZWN0aXZlLlxuICAgKlxuICAgKiBCeSBjb252ZW50aW9uLCBpZiB0d28gZWxlbWVudHMgd2FudHMgdG8gcGFydGljaXBhdGUgaW4gYSBjb2xsZWN0aXZlLCBhbmRcbiAgICogb25lIGVsZW1lbnQgaXMgYW4gYW5jZXN0b3Igb2YgdGhlIG90aGVyIGluIHRoZSBET00sIHRoZSBhbmNlc3RvciBzaG91bGRcbiAgICogYXNzaW1pbGF0ZSB0aGUgZGVzY2VuZGFudCBpbnN0ZWFkIG9mIHRoZSBvdGhlciB3YXkgYXJvdW5kLlxuICAgKlxuICAgKiBBZnRlciBhc3NpbWlsYXRpb24sIGFueSBlbGVtZW50IGluIHRoZSBjb2xsZWN0aXZlIHRoYXQgZGVmaW5lcyBhXG4gICAqIGBjb2xsZWN0aXZlQ2hhbmdlZGAgbWV0aG9kIHdpbGwgaGF2ZSB0aGF0IG1ldGhvZCBpbnZva2VkLiBUaGlzIGFsbG93c1xuICAgKiB0aGUgY29sbGVjdGl2ZSdzIGVsZW1lbnRzIHRvIHJlc3BvbmQgdG8gY2hhbmdlcyBpbiB0aGUgY29sbGVjdGl2ZS5cbiAgICpcbiAgICogQHBhcmFtIHsoSFRNTEVsZW1lbnR8Q29sbGVjdGl2ZSl9IHRhcmdldCAtIFRoZSBlbGVtZW50IG9yIGNvbGxlY3RpdmUgdG8gYWRkLlxuICAgKi9cbiAgYXNzaW1pbGF0ZSh0YXJnZXQpIHtcbiAgICBsZXQgY29sbGVjdGl2ZUNoYW5nZWQ7XG4gICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIENvbGxlY3RpdmUpIHtcbiAgICAgIGNvbGxlY3RpdmVDaGFuZ2VkID0gYXNzaW1pbGF0ZUNvbGxlY3RpdmUodGhpcywgdGFyZ2V0KTtcbiAgICB9IGVsc2UgaWYgKHRhcmdldC5jb2xsZWN0aXZlKSB7XG4gICAgICAvLyBUYXJnZXQgaXMgYWxyZWFkeSBwYXJ0IG9mIGEgY29sbGVjdGl2ZSwgYXNzaW1pbGF0ZSBpdC5cbiAgICAgIGNvbGxlY3RpdmVDaGFuZ2VkID0gYXNzaW1pbGF0ZUNvbGxlY3RpdmUodGhpcywgdGFyZ2V0LmNvbGxlY3RpdmUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBBc3NpbWlsYXRlIGFuIGluZGl2aWR1YWwgZWxlbWVudC5cbiAgICAgIGNvbGxlY3RpdmVDaGFuZ2VkID0gYXNzaW1pbGF0ZUVsZW1lbnQodGhpcywgdGFyZ2V0KTtcbiAgICB9XG5cbiAgICBpZiAoY29sbGVjdGl2ZUNoYW5nZWQpIHtcbiAgICAgIHRoaXMuaW52b2tlTWV0aG9kKCdjb2xsZWN0aXZlQ2hhbmdlZCcpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJbnZva2UgYSBtZXRob2Qgb24gYWxsIGVsZW1lbnRzIGluIHRoZSBjb2xsZWN0aXZlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kIC0gVGhlIG5hbWUgb2YgdGhlIG1ldGhvZCB0byBpbnZva2Ugb24gYWxsIGVsZW1lbnRzLlxuICAgKiBAcGFyYW0ge29iamVjdFtdfSBbYXJnc10gLSBUaGUgYXJndW1lbnRzIHRvIHRoZSBtZXRob2RcbiAgICovXG4gIGludm9rZU1ldGhvZChtZXRob2QsIC4uLmFyZ3MpIHtcbiAgICAvLyBJbnZva2UgZnJvbSBpbm5lcm1vc3QgdG8gb3V0ZXJtb3N0LlxuICAgIGxldCBlbGVtZW50cyA9IHRoaXMuZWxlbWVudHM7XG4gICAgZm9yIChsZXQgaSA9IGVsZW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xuICAgICAgaWYgKGVsZW1lbnRbbWV0aG9kXSkge1xuICAgICAgICBlbGVtZW50W21ldGhvZF0uYXBwbHkoZWxlbWVudCwgYXJncyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBvdXRlcm1vc3QgZWxlbWVudCBpbiB0aGUgY29sbGVjdGl2ZS5cbiAgICogQnkgY29udmVudGlvbiwgdGhpcyBpcyB0aGUgZmlyc3QgZWxlbWVudCBpbiB0aGUgYGVsZW1lbnRzYCBhcnJheS5cbiAgICovXG4gIGdldCBvdXRlcm1vc3RFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRzWzBdO1xuICB9XG5cbn1cblxuXG4vLyBUaGUgZmlyc3QgY29sbGVjdGl2ZSBhc3NpbWlsYXRlcyB0aGUgc2Vjb25kLlxuZnVuY3Rpb24gYXNzaW1pbGF0ZUNvbGxlY3RpdmUoY29sbGVjdGl2ZTEsIGNvbGxlY3RpdmUyKSB7XG4gIGlmIChjb2xsZWN0aXZlMSA9PT0gY29sbGVjdGl2ZTIpIHtcbiAgICAvLyBDb2xsZWN0aXZlcyBhcmUgc2FtZTsgaWdub3JlLlxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGxldCBlbGVtZW50cyA9IGNvbGxlY3RpdmUyLmVsZW1lbnRzO1xuXG4gIC8vIE9sZCBjb2xsZWN0aXZlIHdpbGwgbm8gbG9uZ2VyIGhhdmUgYW55IGVsZW1lbnRzIG9mIGl0cyBvd24uXG4gIGNvbGxlY3RpdmUyLmVsZW1lbnRzID0gW107XG5cbiAgZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICBhc3NpbWlsYXRlRWxlbWVudChjb2xsZWN0aXZlMSwgZWxlbWVudCk7XG4gIH0pO1xuXG4gIHJldHVybiB0cnVlO1xufVxuXG5cbi8vIEFzc2ltaWxhdGUgdGhlIGluZGljYXRlZCBlbGVtZW50LlxuZnVuY3Rpb24gYXNzaW1pbGF0ZUVsZW1lbnQoY29sbGVjdGl2ZSwgZWxlbWVudCkge1xuICBpZiAoZWxlbWVudC5jb2xsZWN0aXZlID09PSBjb2xsZWN0aXZlKSB7XG4gICAgLy8gQWxyZWFkeSBwYXJ0IG9mIHRoaXMgY29sbGVjdGl2ZS5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgZWxlbWVudC5jb2xsZWN0aXZlID0gY29sbGVjdGl2ZTtcbiAgY29sbGVjdGl2ZS5lbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBDb2xsZWN0aXZlO1xuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBDb21wb3NhYmxlLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gdG8gbWFrZSBhIGNsYXNzIG1vcmUgZWFzaWx5IGNvbXBvc2FibGUgd2l0aCBvdGhlciBtaXhpbnMuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gY29udHJpYnV0ZXMgYSBgY29tcG9zZWAgbWV0aG9kIHRoYXQgYXBwbGllcyBhIHNldCBvZiBtaXhpblxuICAgKiBmdW5jdGlvbnMgYW5kIHJldHVybnMgdGhlIHJlc3VsdGluZyBuZXcgY2xhc3MuIFRoaXMgc3VnYXIgY2FuIG1ha2UgdGhlXG4gICAqIGFwcGxpY2F0aW9uIG9mIG1hbnkgbWl4aW5zIGF0IG9uY2UgZWFzaWVyIHRvIHJlYWQuXG4gICAqL1xuICBjbGFzcyBDb21wb3NhYmxlIGV4dGVuZHMgYmFzZSB7XG5cbiAgICAvKipcbiAgICAgKiBBcHBseSBhIHNldCBvZiBtaXhpbiBmdW5jdGlvbnMgb3IgbWl4aW4gb2JqZWN0cyB0byB0aGUgcHJlc2VudCBjbGFzcyBhbmRcbiAgICAgKiByZXR1cm4gdGhlIG5ldyBjbGFzcy5cbiAgICAgKlxuICAgICAqIEluc3RlYWQgb2Ygd3JpdGluZzpcbiAgICAgKlxuICAgICAqICAgICBsZXQgTXlDbGFzcyA9IE1peGluMShNaXhpbjIoTWl4aW4zKE1peGluNChNaXhpbjUoQmFzZUNsYXNzKSkpKSk7XG4gICAgICpcbiAgICAgKiBZb3UgY2FuIHdyaXRlOlxuICAgICAqXG4gICAgICogICAgIGxldCBNeUNsYXNzID0gQ29tcG9zYWJsZShCYXNlQ2xhc3MpLmNvbXBvc2UoXG4gICAgICogICAgICAgTWl4aW4xLFxuICAgICAqICAgICAgIE1peGluMixcbiAgICAgKiAgICAgICBNaXhpbjMsXG4gICAgICogICAgICAgTWl4aW40LFxuICAgICAqICAgICAgIE1peGluNVxuICAgICAqICAgICApO1xuICAgICAqXG4gICAgICogVGhpcyBmdW5jdGlvbiBjYW4gYWxzbyB0YWtlIG1peGluIG9iamVjdHMuIEEgbWl4aW4gb2JqZWN0IGlzIGp1c3QgYVxuICAgICAqIHNob3J0aGFuZCBmb3IgYSBtaXhpbiBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYSBuZXcgc3ViY2xhc3Mgd2l0aCB0aGUgZ2l2ZW5cbiAgICAgKiBtZW1iZXJzLiBUaGUgbWl4aW4gb2JqZWN0J3MgbWVtYmVycyBhcmUgKm5vdCogY29waWVkIGRpcmVjdGx5IG9udG8gdGhlXG4gICAgICogcHJvdG90eXBlIG9mIHRoZSBiYXNlIGNsYXNzLCBhcyB3aXRoIHRyYWRpdGlvbmFsIG1peGlucy5cbiAgICAgKlxuICAgICAqIEluIGFkZGl0aW9uIHRvIHByb3ZpZGluZyBzeW50YWN0aWMgc3VnYXIsIHRoaXMgbWl4aW4gY2FuIGJlIHVzZWQgdG9cbiAgICAgKiBkZWZpbmUgYSBjbGFzcyBpbiBFUzUsIHdoaWNoIGxhY2tzIEVTNidzIGBjbGFzc2Aga2V5d29yZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Li4ubWl4aW5zfSBtaXhpbnMgLSBBIHNldCBvZiBtaXhpbiBmdW5jdGlvbnMgb3Igb2JqZWN0cyB0byBhcHBseS5cbiAgICAgKi9cbiAgICBzdGF0aWMgY29tcG9zZSguLi5taXhpbnMpIHtcbiAgICAgIC8vIFdlIGNyZWF0ZSBhIG5ldyBzdWJjbGFzcyBmb3IgZWFjaCBtaXhpbiBpbiB0dXJuLiBUaGUgcmVzdWx0IGJlY29tZXNcbiAgICAgIC8vIHRoZSBiYXNlIGNsYXNzIGV4dGVuZGVkIGJ5IGFueSBzdWJzZXF1ZW50IG1peGlucy4gSXQgdHVybnMgb3V0IHRoYXRcbiAgICAgIC8vIHdlIGNhbiB1c2UgQXJyYXkucmVkdWNlKCkgdG8gY29uY2lzZWx5IGV4cHJlc3MgdGhpcywgdXNpbmcgdGhlIGN1cnJlbnRcbiAgICAgIC8vIG9iamVjdCBhcyB0aGUgc2VlZCBmb3IgcmVkdWNlKCkuXG4gICAgICByZXR1cm4gbWl4aW5zLnJlZHVjZShjb21wb3NlQ2xhc3MsIHRoaXMpO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIENvbXBvc2FibGU7XG59O1xuXG5cbi8vIFByb3BlcnRpZXMgZGVmaW5lZCBieSBPYmplY3QgdGhhdCB3ZSBkb24ndCB3YW50IHRvIG1peGluLlxuY29uc3QgTk9OX01JWEFCTEVfT0JKRUNUX1BST1BFUlRJRVMgPSBbXG4gICdjb25zdHJ1Y3Rvcidcbl07XG5cbi8qXG4gKiBBcHBseSB0aGUgbWl4aW4gdG8gdGhlIGdpdmVuIGJhc2UgY2xhc3MgdG8gcmV0dXJuIGEgbmV3IGNsYXNzLlxuICogVGhlIG1peGluIGNhbiBlaXRoZXIgYmUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIG1vZGlmaWVkIGNsYXNzLCBvciBhXG4gKiBwbGFpbiBvYmplY3Qgd2hvc2UgbWVtYmVycyB3aWxsIGJlIGNvcGllZCB0byB0aGUgbmV3IGNsYXNzJyBwcm90b3R5cGUuXG4gKi9cbmZ1bmN0aW9uIGNvbXBvc2VDbGFzcyhiYXNlLCBtaXhpbikge1xuICBpZiAodHlwZW9mIG1peGluID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gTWl4aW4gZnVuY3Rpb25cbiAgICByZXR1cm4gbWl4aW4oYmFzZSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gTWl4aW4gb2JqZWN0XG4gICAgY2xhc3MgU3ViY2xhc3MgZXh0ZW5kcyBiYXNlIHt9XG4gICAgY29weU93blByb3BlcnRpZXMobWl4aW4sIFN1YmNsYXNzLnByb3RvdHlwZSwgTk9OX01JWEFCTEVfT0JKRUNUX1BST1BFUlRJRVMpO1xuICAgIHJldHVybiBTdWJjbGFzcztcbiAgfVxufVxuXG5cbi8qXG4gKiBDb3B5IHRoZSBnaXZlbiBwcm9wZXJ0aWVzL21ldGhvZHMgdG8gdGhlIHRhcmdldC5cbiAqIFJldHVybiB0aGUgdXBkYXRlZCB0YXJnZXQuXG4gKi9cbmZ1bmN0aW9uIGNvcHlPd25Qcm9wZXJ0aWVzKHNvdXJjZSwgdGFyZ2V0LCBpZ25vcmVQcm9wZXJ0eU5hbWVzID0gW10pIHtcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoc291cmNlKS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgIGlmIChpZ25vcmVQcm9wZXJ0eU5hbWVzLmluZGV4T2YobmFtZSkgPCAwKSB7XG4gICAgICBsZXQgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBuYW1lKTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB0YXJnZXQ7XG59XG4iLCJpbXBvcnQgdG9nZ2xlQ2xhc3MgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvdG9nZ2xlQ2xhc3MnO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggQ29udGVudEFzSXRlbXMuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBtYXBzIGNvbnRlbnQgc2VtYW50aWNzIChlbGVtZW50cykgdG8gbGlzdCBpdGVtIHNlbWFudGljcy5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIGEgY29tcG9uZW50IHRvIHByb3ZpZGUgYSBgY29udGVudGAgcHJvcGVydHkgcmV0dXJuaW5nIGFcbiAgICogcmF3IHNldCBvZiBlbGVtZW50cy4gWW91IGNhbiBwcm92aWRlIHRoYXQgeW91cnNlbGYsIG9yIHVzZSB0aGVcbiAgICogW0Rpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnRdKERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQubWQpIG1peGluLlxuICAgKlxuICAgKiBJdGVtcyBkaWZmZXIgZnJvbSBlbGVtZW50IGNvbnRlbnRzIGluIHNldmVyYWwgd2F5czpcbiAgICpcbiAgICogKiBUaGV5IGFyZSBvZnRlbiByZWZlcmVuY2VkIHZpYSBpbmRleC5cbiAgICogKiBUaGV5IG1heSBoYXZlIGEgc2VsZWN0aW9uIHN0YXRlLlxuICAgKiAqIEl0J3MgY29tbW9uIHRvIGRvIHdvcmsgdG8gaW5pdGlhbGl6ZSB0aGUgYXBwZWFyYW5jZSBvciBzdGF0ZSBvZiBhIG5ld1xuICAgKiAgIGl0ZW0uXG4gICAqICogQXV4aWxpYXJ5IGludmlzaWJsZSBjaGlsZCBlbGVtZW50cyBhcmUgZmlsdGVyZWQgb3V0IGFuZCBub3QgY291bnRlZCBhc1xuICAgKiAgIGl0ZW1zLiBBdXhpbGlhcnkgZWxlbWVudHMgaW5jbHVkZSBsaW5rLCBzY3JpcHQsIHN0eWxlLCBhbmQgdGVtcGxhdGVcbiAgICogICBlbGVtZW50cy4gVGhpcyBmaWx0ZXJpbmcgZW5zdXJlcyB0aGF0IHRob3NlIGF1eGlsaWFyeSBlbGVtZW50cyBjYW4gYmVcbiAgICogICB1c2VkIGluIG1hcmt1cCBpbnNpZGUgb2YgYSBsaXN0IHdpdGhvdXQgYmVpbmcgdHJlYXRlZCBhcyBsaXN0IGl0ZW1zLlxuICAgKi9cbiAgY2xhc3MgQ29udGVudEFzSXRlbXMgZXh0ZW5kcyBiYXNlIHtcblxuICAgIC8qKlxuICAgICAqIEFwcGx5IHRoZSBzZWxlY3Rpb24gc3RhdGUgdG8gYSBzaW5nbGUgaXRlbS5cbiAgICAgKlxuICAgICAqIEludm9rZSB0aGlzIG1ldGhvZCB0byBzaWduYWwgdGhhdCB0aGUgc2VsZWN0ZWQgc3RhdGUgb2YgdGhlIGluZGljYXRlZCBpdGVtXG4gICAgICogaGFzIGNoYW5nZWQuIEJ5IGRlZmF1bHQsIHRoaXMgYXBwbGllcyBhIGBzZWxlY3RlZGAgQ1NTIGNsYXNzIGlmIHRoZSBpdGVtXG4gICAgICogaXMgc2VsZWN0ZWQsIGFuZCByZW1vdmVkIGl0IGlmIG5vdCBzZWxlY3RlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGl0ZW0gLSBUaGUgaXRlbSB3aG9zZSBzZWxlY3Rpb24gc3RhdGUgaGFzIGNoYW5nZWQuXG4gICAgICogQHBhcmFtIHtib29sZWFufSBzZWxlY3RlZCAtIFRydWUgaWYgdGhlIGl0ZW0gaXMgc2VsZWN0ZWQsIGZhbHNlIGlmIG5vdC5cbiAgICAgKi9cbiAgICBhcHBseVNlbGVjdGlvbihpdGVtLCBzZWxlY3RlZCkge1xuICAgICAgaWYgKHN1cGVyLmFwcGx5U2VsZWN0aW9uKSB7IHN1cGVyLmFwcGx5U2VsZWN0aW9uKGl0ZW0sIHNlbGVjdGVkKTsgfVxuICAgICAgdG9nZ2xlQ2xhc3MoaXRlbSwgJ3NlbGVjdGVkJywgc2VsZWN0ZWQpO1xuICAgIH1cblxuICAgIGNvbnRlbnRDaGFuZ2VkKCkge1xuICAgICAgaWYgKHN1cGVyLmNvbnRlbnRDaGFuZ2VkKSB7IHN1cGVyLmNvbnRlbnRDaGFuZ2VkKCk7IH1cbiAgICAgIHRoaXMuX2l0ZW1zID0gbnVsbDtcbiAgICAgIHRoaXMuaXRlbXNDaGFuZ2VkKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgaXMgaW52b2tlZCB3aGVuZXZlciBhIG5ldyBpdGVtIGlzIGFkZGVkIHRvIHRoZSBsaXN0LlxuICAgICAqXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLiBZb3UgY2FuIG92ZXJyaWRlXG4gICAgICogdGhpcyB0byBwZXJmb3JtIHBlci1pdGVtIGluaXRpYWxpemF0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaXRlbSAtIFRoZSBpdGVtIHRoYXQgd2FzIGFkZGVkLlxuICAgICAqL1xuICAgIGl0ZW1BZGRlZChpdGVtKSB7XG4gICAgICBpZiAoc3VwZXIuaXRlbUFkZGVkKSB7IHN1cGVyLml0ZW1BZGRlZChpdGVtKTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IHNldCBvZiBpdGVtcyBpbiB0aGUgbGlzdC4gU2VlIHRoZSB0b3AtbGV2ZWwgZG9jdW1lbnRhdGlvbiBmb3JcbiAgICAgKiBtaXhpbiBmb3IgYSBkZXNjcmlwdGlvbiBvZiBob3cgaXRlbXMgZGlmZmVyIGZyb20gcGxhaW4gY29udGVudC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudFtdfVxuICAgICAqL1xuICAgIGdldCBpdGVtcygpIHtcbiAgICAgIGlmICh0aGlzLl9pdGVtcyA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX2l0ZW1zID0gZmlsdGVyQXV4aWxpYXJ5RWxlbWVudHModGhpcy5jb250ZW50KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLl9pdGVtcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIHdoZW4gdGhlIHVuZGVybHlpbmcgY29udGVudHMgY2hhbmdlLiBJdCBpcyBhbHNvXG4gICAgICogaW52b2tlZCBvbiBjb21wb25lbnQgaW5pdGlhbGl6YXRpb24g4oCTIHNpbmNlIHRoZSBpdGVtcyBoYXZlIFwiY2hhbmdlZFwiIGZyb21cbiAgICAgKiBiZWluZyBub3RoaW5nLlxuICAgICAqL1xuICAgIGl0ZW1zQ2hhbmdlZCgpIHtcbiAgICAgIGlmIChzdXBlci5pdGVtc0NoYW5nZWQpIHsgc3VwZXIuaXRlbXNDaGFuZ2VkKCk7IH1cblxuICAgICAgLy8gUGVyZm9ybSBwZXItaXRlbSBpbml0aWFsaXphdGlvbi5cbiAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaWYgKCFpdGVtLl9pdGVtSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICB0aGlzLml0ZW1BZGRlZChpdGVtKTtcbiAgICAgICAgICBpdGVtLl9pdGVtSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnaXRlbXMtY2hhbmdlZCcpKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEBldmVudCBpdGVtcy1jaGFuZ2VkXG4gICAgICpcbiAgICAgKiBUaGlzIGV2ZW50IGlzIHJhaXNlZCB3aGVuIHRoZSBzZXQgb2YgaXRlbXMgY2hhbmdlcy5cbiAgICAgKi9cbiAgfVxuXG4gIHJldHVybiBDb250ZW50QXNJdGVtcztcbn07XG5cblxuLy8gUmV0dXJuIHRoZSBnaXZlbiBlbGVtZW50cywgZmlsdGVyaW5nIG91dCBhdXhpbGlhcnkgZWxlbWVudHMgdGhhdCBhcmVuJ3Rcbi8vIHR5cGljYWxseSB2aXNpYmxlLiBJdGVtcyB3aGljaCBhcmUgbm90IGVsZW1lbnRzIGFyZSByZXR1cm5lZCBhcyBpcy5cbmZ1bmN0aW9uIGZpbHRlckF1eGlsaWFyeUVsZW1lbnRzKGl0ZW1zKSB7XG4gIGxldCBhdXhpbGlhcnlUYWdzID0gW1xuICAgICdsaW5rJyxcbiAgICAnc2NyaXB0JyxcbiAgICAnc3R5bGUnLFxuICAgICd0ZW1wbGF0ZSdcbiAgXTtcbiAgcmV0dXJuIFtdLmZpbHRlci5jYWxsKGl0ZW1zLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgcmV0dXJuICFpdGVtLmxvY2FsTmFtZSB8fCBhdXhpbGlhcnlUYWdzLmluZGV4T2YoaXRlbS5sb2NhbE5hbWUpIDwgMDtcbiAgfSk7XG59XG5cblxuLyoqXG4gKiBGaXJlcyB3aGVuIHRoZSBpdGVtcyBpbiB0aGUgbGlzdCBjaGFuZ2UuXG4gKlxuICogQG1lbWJlcm9mIENvbnRlbnRBc0l0ZW1zXG4gKiBAZXZlbnQgaXRlbXMtY2hhbmdlZFxuICovXG4iLCIvKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIERpcmVjdGlvblNlbGVjdGlvbi4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIG1hcHMgZGlyZWN0aW9uIHNlbWFudGljcyAoZ29MZWZ0LCBnb1JpZ2h0LCBldGMuKSB0byBzZWxlY3Rpb25cbiAgICogc2VtYW50aWNzIChzZWxlY3RQcmV2aW91cywgc2VsZWN0TmV4dCwgZXRjLikuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gY2FuIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGVcbiAgICogW0tleWJvYXJkRGlyZWN0aW9uXShLZXlib2FyZERpcmVjdGlvbi5tZCkgbWl4aW4gKHdoaWNoIG1hcHMga2V5Ym9hcmQgZXZlbnRzXG4gICAqIHRvIGRpcmVjdGlvbnMpIGFuZCBhIG1peGluIHRoYXQgaGFuZGxlcyBzZWxlY3Rpb24gbGlrZVxuICAgKiBbSXRlbXNTZWxlY3Rpb25dKEl0ZW1zU2VsZWN0aW9uLm1kKS5cbiAgICovXG4gIGNsYXNzIERpcmVjdGlvblNlbGVjdGlvbiBleHRlbmRzIGJhc2Uge1xuXG4gICAgZ29Eb3duKCkge1xuICAgICAgaWYgKHN1cGVyLmdvRG93bikgeyBzdXBlci5nb0Rvd24oKTsgfVxuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0TmV4dCgpO1xuICAgIH1cblxuICAgIGdvRW5kKCkge1xuICAgICAgaWYgKHN1cGVyLmdvRW5kKSB7IHN1cGVyLmdvRW5kKCk7IH1cbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdExhc3QoKTtcbiAgICB9XG5cbiAgICBnb0xlZnQoKSB7XG4gICAgICBpZiAoc3VwZXIuZ29MZWZ0KSB7IHN1cGVyLmdvTGVmdCgpOyB9XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RQcmV2aW91cygpO1xuICAgIH1cblxuICAgIGdvUmlnaHQoKSB7XG4gICAgICBpZiAoc3VwZXIuZ29SaWdodCkgeyBzdXBlci5nb1JpZ2h0KCk7IH1cbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdE5leHQoKTtcbiAgICB9XG5cbiAgICBnb1N0YXJ0KCkge1xuICAgICAgaWYgKHN1cGVyLmdvU3RhcnQpIHsgc3VwZXIuZ29TdGFydCgpOyB9XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RGaXJzdCgpO1xuICAgIH1cblxuICAgIGdvVXAoKSB7XG4gICAgICBpZiAoc3VwZXIuZ29VcCkgeyBzdXBlci5nb1VwKCk7IH1cbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdFByZXZpb3VzKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCBpbXBsZW1lbnRhdGlvbi4gVGhpcyB3aWxsIHR5cGljYWxseSBiZSBoYW5kbGVkIGJ5IG90aGVyIG1peGlucy5cbiAgICBnZXQgc2VsZWN0ZWRGcmFjdGlvbigpIHtcbiAgICAgIHJldHVybiBzdXBlci5zZWxlY3RlZEZyYWN0aW9uO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0ZWRGcmFjdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKCdzZWxlY3RlZEZyYWN0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEZyYWN0aW9uID0gdmFsdWU7IH1cbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IGltcGxlbWVudGF0aW9uLiBUaGlzIHdpbGwgdHlwaWNhbGx5IGJlIGhhbmRsZWQgYnkgb3RoZXIgbWl4aW5zLlxuICAgIHNlbGVjdEZpcnN0KCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdEZpcnN0KSB7IHJldHVybiBzdXBlci5zZWxlY3RGaXJzdCgpOyB9XG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCBpbXBsZW1lbnRhdGlvbi4gVGhpcyB3aWxsIHR5cGljYWxseSBiZSBoYW5kbGVkIGJ5IG90aGVyIG1peGlucy5cbiAgICBzZWxlY3RMYXN0KCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdExhc3QpIHsgcmV0dXJuIHN1cGVyLnNlbGVjdExhc3QoKTsgfVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgaW1wbGVtZW50YXRpb24uIFRoaXMgd2lsbCB0eXBpY2FsbHkgYmUgaGFuZGxlZCBieSBvdGhlciBtaXhpbnMuXG4gICAgc2VsZWN0TmV4dCgpIHtcbiAgICAgIGlmIChzdXBlci5zZWxlY3ROZXh0KSB7IHJldHVybiBzdXBlci5zZWxlY3ROZXh0KCk7IH1cbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IGltcGxlbWVudGF0aW9uLiBUaGlzIHdpbGwgdHlwaWNhbGx5IGJlIGhhbmRsZWQgYnkgb3RoZXIgbWl4aW5zLlxuICAgIHNlbGVjdFByZXZpb3VzKCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdFByZXZpb3VzKSB7IHJldHVybiBzdXBlci5zZWxlY3RQcmV2aW91cygpOyB9XG4gICAgfVxuXG4gICAgLy8gTWFwIGRyYWcgdHJhdmVsIGZyYWN0aW9uIHRvIHNlbGVjdGlvbiBmcmFjdGlvbi5cbiAgICBnZXQgdHJhdmVsRnJhY3Rpb24oKSB7XG4gICAgICByZXR1cm4gc3VwZXIudHJhdmVsRnJhY3Rpb247XG4gICAgfVxuICAgIHNldCB0cmF2ZWxGcmFjdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKCd0cmF2ZWxGcmFjdGlvbicgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIudHJhdmVsRnJhY3Rpb24gPSB2YWx1ZTsgfVxuICAgICAgdGhpcy5zZWxlY3RlZEZyYWN0aW9uID0gdmFsdWU7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gRGlyZWN0aW9uU2VsZWN0aW9uO1xufTtcbiIsIi8vIFRPRE86IFJhdGlvbmFsaXplIHdpdGggbmV3IEN1c3RvbSBFbGVtZW50cyBBUEkuXG4vLyBUT0RPOiBDb25zaWRlciByZW5hbWluZyB0byBtYXRjaCBDdXN0b20gRWxlbWVudHMgQVBJLlxuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggRGlzdHJpYnV0ZWRDaGlsZHJlbi4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIGRlZmluZXMgaGVscGVycyBmb3IgYWNjZXNzaW5nIGEgY29tcG9uZW50J3MgZGlzdHJpYnV0ZWRcbiAgICogY2hpbGRyZW4gYXMgYSBmbGF0dGVuZWQgYXJyYXkgb3Igc3RyaW5nLlxuICAgKlxuICAgKiBUaGUgc3RhbmRhcmQgRE9NIEFQSSBwcm92aWRlcyBzZXZlcmFsIHdheXMgb2YgYWNjZXNzaW5nIGNoaWxkIGNvbnRlbnQ6XG4gICAqIGBjaGlsZHJlbmAsIGBjaGlsZE5vZGVzYCwgYW5kIGB0ZXh0Q29udGVudGAuIE5vbmUgb2YgdGhlc2UgZnVuY3Rpb25zIGFyZVxuICAgKiBTaGFkb3cgRE9NIGF3YXJlLiBUaGlzIG1peGluIGRlZmluZXMgdmFyaWF0aW9ucyBvZiB0aG9zZSBmdW5jdGlvbnMgdGhhdFxuICAgKiAqYXJlKiBTaGFkb3cgRE9NIGF3YXJlLlxuICAgKlxuICAgKiBFeGFtcGxlOiB5b3UgY3JlYXRlIGEgY29tcG9uZW50IGA8Y291bnQtY2hpbGRyZW4+YCB0aGF0IGRpc3BsYXlzIGEgbnVtYmVyXG4gICAqIGVxdWFsIHRvIHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gcGxhY2VkIGluc2lkZSB0aGF0IGNvbXBvbmVudC4gSWYgc29tZW9uZVxuICAgKiBpbnN0YW50aWF0ZXMgeW91ciBjb21wb25lbnQgbGlrZTpcbiAgICpcbiAgICogICAgIDxjb3VudC1jaGlsZHJlbj5cbiAgICogICAgICAgPGRpdj48L2Rpdj5cbiAgICogICAgICAgPGRpdj48L2Rpdj5cbiAgICogICAgICAgPGRpdj48L2Rpdj5cbiAgICogICAgIDwvY291bnQtY2hpbGRyZW4+XG4gICAqXG4gICAqIFRoZW4gdGhlIGNvbXBvbmVudCBzaG91bGQgc2hvdyBcIjNcIiwgYmVjYXVzZSB0aGVyZSBhcmUgdGhyZWUgY2hpbGRyZW4uIFRvXG4gICAqIGNhbGN1bGF0ZSB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuLCB0aGUgY29tcG9uZW50IGNhbiBqdXN0IGNhbGN1bGF0ZVxuICAgKiBgdGhpcy5jaGlsZHJlbi5sZW5ndGhgLiBIb3dldmVyLCBzdXBwb3NlIHNvbWVvbmUgaW5zdGFudGlhdGVzIHlvdXJcbiAgICogY29tcG9uZW50IGluc2lkZSBvbmUgb2YgdGhlaXIgb3duIGNvbXBvbmVudHMsIGFuZCBwdXRzIGEgYDxzbG90PmAgZWxlbWVudFxuICAgKiBpbnNpZGUgeW91ciBjb21wb25lbnQ6XG4gICAqXG4gICAqICAgICA8Y291bnQtY2hpbGRyZW4+XG4gICAqICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICogICAgIDwvY291bnQtY2hpbGRyZW4+XG4gICAqXG4gICAqIElmIHlvdXIgY29tcG9uZW50IG9ubHkgbG9va3MgYXQgYHRoaXMuY2hpbGRyZW5gLCBpdCB3aWxsIGFsd2F5cyBzZWUgZXhhY3RseVxuICAgKiBvbmUgY2hpbGQg4oCUwqB0aGUgYDxzbG90PmAgZWxlbWVudC4gQnV0IHRoZSB1c2VyIGxvb2tpbmcgYXQgdGhlIHBhZ2Ugd2lsbFxuICAgKiAqc2VlKiBhbnkgbm9kZXMgZGlzdHJpYnV0ZWQgdG8gdGhhdCBzbG90LiBUbyBtYXRjaCB3aGF0IHRoZSB1c2VyIHNlZXMsIHlvdXJcbiAgICogY29tcG9uZW50IHNob3VsZCBleHBhbmQgYW55IGA8c2xvdD5gIGVsZW1lbnRzIGl0IGNvbnRhaW5zLlxuICAgKlxuICAgKiBUaGF0IGlzIHRoZSBwcm9ibGVtIHRoaXMgbWl4aW4gc29sdmVzLiBBZnRlciBhcHBseWluZyB0aGlzIG1peGluLCB5b3VyXG4gICAqIGNvbXBvbmVudCBjb2RlIGhhcyBhY2Nlc3MgdG8gYHRoaXMuZGlzdHJpYnV0ZWRDaGlsZHJlbmAsIHdob3NlIGBsZW5ndGhgXG4gICAqIHdpbGwgcmV0dXJuIHRoZSB0b3RhbCBudW1iZXIgb2YgYWxsIGNoaWxkcmVuIGRpc3RyaWJ1dGVkIHRvIHlvdXIgY29tcG9uZW50XG4gICAqIGluIHRoZSBjb21wb3NlZCB0cmVlLlxuICAgKlxuICAgKiBOb3RlOiBUaGUgbGF0ZXN0IEN1c3RvbSBFbGVtZW50cyBBUEkgZGVzaWduIGNhbGxzIGZvciBhIG5ldyBmdW5jdGlvbixcbiAgICogYGdldEFzc2lnbmVkTm9kZXNgIHRoYXQgdGFrZXMgYW4gb3B0aW9uYWwgYGRlZXBgIHBhcmFtZXRlciwgdGhhdCB3aWxsIHNvbHZlXG4gICAqIHRoaXMgcHJvYmxlbSBhdCB0aGUgQVBJIGxldmVsLlxuICAgKi9cbiAgY2xhc3MgRGlzdHJpYnV0ZWRDaGlsZHJlbiBleHRlbmRzIGJhc2Uge1xuXG4gICAgLyoqXG4gICAgICogQW4gaW4tb3JkZXIgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiwgZXhwYW5kaW5nIGFueSBzbG90IGVsZW1lbnRzLiBMaWtlIHRoZVxuICAgICAqIHN0YW5kYXJkIGNoaWxkcmVuIHByb3BlcnR5LCB0aGlzIHNraXBzIHRleHQgbm9kZXMuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnRbXX1cbiAgICAgKi9cbiAgICBnZXQgZGlzdHJpYnV0ZWRDaGlsZHJlbigpIHtcbiAgICAgIHJldHVybiBleHBhbmRDb250ZW50RWxlbWVudHModGhpcy5jaGlsZHJlbiwgZmFsc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFuIGluLW9yZGVyIGNvbGxlY3Rpb24gb2YgY2hpbGQgbm9kZXMsIGV4cGFuZGluZyBhbnkgc2xvdCBlbGVtZW50cy4gTGlrZVxuICAgICAqIHRoZSBzdGFuZGFyZCBjaGlsZE5vZGVzIHByb3BlcnR5LCB0aGlzIGluY2x1ZGVzIHRleHQgbm9kZXMuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Tm9kZVtdfVxuICAgICAqL1xuICAgIGdldCBkaXN0cmlidXRlZENoaWxkTm9kZXMoKSB7XG4gICAgICByZXR1cm4gZXhwYW5kQ29udGVudEVsZW1lbnRzKHRoaXMuY2hpbGROb2RlcywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbmNhdGVuYXRlZCB0ZXh0IGNvbnRlbnQgb2YgYWxsIGNoaWxkIG5vZGVzLCBleHBhbmRpbmcgYW55IHNsb3RcbiAgICAgKiBlbGVtZW50cy5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0IGRpc3RyaWJ1dGVkVGV4dENvbnRlbnQoKSB7XG4gICAgICBsZXQgc3RyaW5ncyA9IHRoaXMuZGlzdHJpYnV0ZWRDaGlsZE5vZGVzLm1hcChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgICByZXR1cm4gY2hpbGQudGV4dENvbnRlbnQ7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBzdHJpbmdzLmpvaW4oJycpO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIERpc3RyaWJ1dGVkQ2hpbGRyZW47XG59O1xuXG5cbi8qXG4gKiBHaXZlbiBhIGFycmF5IG9mIG5vZGVzLCByZXR1cm4gYSBuZXcgYXJyYXkgd2l0aCBhbnkgY29udGVudCBlbGVtZW50cyBleHBhbmRlZFxuICogdG8gdGhlIG5vZGVzIGRpc3RyaWJ1dGVkIHRvIHRoYXQgY29udGVudCBlbGVtZW50LiBUaGlzIHJ1bGUgaXMgYXBwbGllZFxuICogcmVjdXJzaXZlbHkuXG4gKlxuICogSWYgaW5jbHVkZVRleHROb2RlcyBpcyB0cnVlLCB0ZXh0IG5vZGVzIHdpbGwgYmUgaW5jbHVkZWQsIGFzIGluIHRoZVxuICogc3RhbmRhcmQgY2hpbGROb2RlcyBwcm9wZXJ0eTsgYnkgZGVmYXVsdCwgdGhpcyBza2lwcyB0ZXh0IG5vZGVzLCBsaWtlIHRoZVxuICogc3RhbmRhcmQgY2hpbGRyZW4gcHJvcGVydHkuXG4gKi9cbmZ1bmN0aW9uIGV4cGFuZENvbnRlbnRFbGVtZW50cyhub2RlcywgaW5jbHVkZVRleHROb2Rlcykge1xuICBsZXQgZXhwYW5kZWQgPSBBcnJheS5wcm90b3R5cGUubWFwLmNhbGwobm9kZXMsIG5vZGUgPT4ge1xuICAgIC8vIFdlIHdhbnQgdG8gc2VlIGlmIHRoZSBub2RlIGlzIGFuIGluc3RhbmNlb2YgSFRNTFNsb3RFTGVtZW50LCBidXRcbiAgICAvLyB0aGF0IGNsYXNzIHdvbid0IGV4aXN0IGlmIHRoZSBicm93c2VyIHRoYXQgZG9lc24ndCBzdXBwb3J0IG5hdGl2ZVxuICAgIC8vIFNoYWRvdyBET00gYW5kIGlmIHRoZSBTaGFkb3cgRE9NIHBvbHlmaWxsIGhhc24ndCBiZWVuIGxvYWRlZC4gSW5zdGVhZCxcbiAgICAvLyB3ZSBkbyBhIHNpbXBsaXN0aWMgY2hlY2sgdG8gc2VlIGlmIHRoZSB0YWcgbmFtZSBpcyBcInNsb3RcIiBvciBcImNvbnRlbnRcIi5cbiAgICBpZiAobm9kZS5sb2NhbE5hbWUgJiYgKG5vZGUubG9jYWxOYW1lID09PSBcInNsb3RcIiB8fCBub2RlLmxvY2FsTmFtZSA9PT0gXCJjb250ZW50XCIpKSB7XG4gICAgICAvLyBjb250ZW50IGVsZW1lbnQ7IHVzZSBpdHMgZGlzdHJpYnV0ZWQgbm9kZXMgaW5zdGVhZC5cbiAgICAgIGxldCBkaXN0cmlidXRlZE5vZGVzID0gbm9kZS5nZXREaXN0cmlidXRlZE5vZGVzKCk7XG4gICAgICByZXR1cm4gZGlzdHJpYnV0ZWROb2RlcyA/XG4gICAgICAgIGV4cGFuZENvbnRlbnRFbGVtZW50cyhkaXN0cmlidXRlZE5vZGVzLCBpbmNsdWRlVGV4dE5vZGVzKSA6XG4gICAgICAgIFtdO1xuICAgIH0gZWxzZSBpZiAobm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAvLyBQbGFpbiBlbGVtZW50OyB1c2UgYXMgaXMuXG4gICAgICByZXR1cm4gW25vZGVdO1xuICAgIH0gZWxzZSBpZiAobm9kZSBpbnN0YW5jZW9mIFRleHQgJiYgaW5jbHVkZVRleHROb2Rlcykge1xuICAgICAgLy8gVGV4dCBub2RlLlxuICAgICAgcmV0dXJuIFtub2RlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ29tbWVudCwgcHJvY2Vzc2luZyBpbnN0cnVjdGlvbiwgZXRjLjsgc2tpcC5cbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH0pO1xuICBsZXQgZmxhdHRlbmVkID0gW10uY29uY2F0KC4uLmV4cGFuZGVkKTtcbiAgcmV0dXJuIGZsYXR0ZW5lZDtcbn1cbiIsIi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudC4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIGRlZmluZXMgYSBjb21wb25lbnQncyBjb250ZW50IGFzIGl0cyBjaGlsZHJlbiwgZXhwYW5kaW5nIGFueVxuICAgKiBub2RlcyBkaXN0cmlidXRlZCB0byB0aGUgY29tcG9uZW50J3Mgc2xvdHMuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gaXMgaW50ZW5kZWQgZm9yIHVzZSB3aXRoIHRoZVxuICAgKiBbRGlzdHJpYnV0ZWRDaGlsZHJlbl0oRGlzdHJpYnV0ZWRDaGlsZHJlbi5tZCkgbWl4aW4uIFNlZSB0aGF0IG1peGluIGZvciBhXG4gICAqIGRpc2N1c3Npb24gb2YgaG93IHRoYXQgd29ya3MuIFRoaXMgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCBtaXhpblxuICAgKiBwcm92aWRlcyBhbiBlYXN5IHdheSBvZiBkZWZpbmluZyB0aGUgXCJjb250ZW50XCIgb2YgYSBjb21wb25lbnQgYXMgdGhlXG4gICAqIGNvbXBvbmVudCdzIGRpc3RyaWJ1dGVkIGNoaWxkcmVuLiBUaGF0IGluIHR1cm4gbGV0cyBtaXhpbnMgbGlrZVxuICAgKiBbQ29udGVudEFzSXRlbXNdKENvbnRlbnRBc0l0ZW1zLm1kKSBtYW5pcHVsYXRlIHRoZSBjaGlsZHJlbiBhcyBsaXN0IGl0ZW1zLlxuICAgKi9cbiAgY2xhc3MgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCBleHRlbmRzIGJhc2Uge1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbnRlbnQgb2YgdGhpcyBjb21wb25lbnQsIGRlZmluZWQgdG8gYmUgdGhlIGZsYXR0ZW5lZCBhcnJheSBvZlxuICAgICAqIGNoaWxkcmVuIGRpc3RyaWJ1dGVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnRbXX1cbiAgICAgKi9cbiAgICBnZXQgY29udGVudCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmRpc3RyaWJ1dGVkQ2hpbGRyZW47XG4gICAgfVxuICAgIHNldCBjb250ZW50KHZhbHVlKSB7XG4gICAgICBpZiAoJ2NvbnRlbnQnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLmNvbnRlbnQgPSB2YWx1ZTsgfVxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQ7XG59O1xuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBHZW5lcmljLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggYWxsb3dzIGEgY29tcG9uZW50IHRvIHN1cHBvcnQgYSBcImdlbmVyaWNcIiBzdHlsZTogYSBtaW5pbWFsaXN0XG4gICAqIHN0eWxlIHRoYXQgY2FuIGVhc2lseSBiZSByZW1vdmVkIHRvIHJlc2V0IGl0cyB2aXN1YWwgYXBwZWFyYW5jZSB0byBhXG4gICAqIGJhc2VsaW5lIHN0YXRlLlxuICAgKlxuICAgKiBCeSBkZWZhdWx0LCBhIGNvbXBvbmVudCBzaG91bGQgcHJvdmlkZSBhIG1pbmltYWwgdmlzdWFsIHByZXNlbnRhdGlvbiB0aGF0XG4gICAqIGFsbG93cyB0aGUgY29tcG9uZW50IHRvIGZ1bmN0aW9uLiBIb3dldmVyLCB0aGUgbW9yZSBzdHlsaW5nIHRoZSBjb21wb25lbnRcbiAgICogcHJvdmlkZXMgYnkgZGVmYXVsdCwgdGhlIGhhcmRlciBpdCBiZWNvbWVzIHRvIGdldCB0aGUgY29tcG9uZW50IHRvIGZpdCBpblxuICAgKiBpbiBvdGhlciBzZXR0aW5ncy4gRWFjaCBDU1MgcnVsZSBoYXMgdG8gYmUgb3ZlcnJpZGRlbi4gV29yc2UsIG5ldyBDU1MgcnVsZXNcbiAgICogYWRkZWQgdG8gdGhlIGRlZmF1bHQgc3R5bGUgd29uJ3QgYmUgb3ZlcnJpZGRlbiBieSBkZWZhdWx0LCBtYWtpbmcgaXQgaGFyZFxuICAgKiB0byBrbm93IHdoZXRoZXIgYSBuZXcgdmVyc2lvbiBvZiBhIGNvbXBvbmVudCB3aWxsIHN0aWxsIGxvb2sgb2theS5cbiAgICpcbiAgICogQXMgYSBjb21wcm9taXNlLCB0aGUgbWl4aW4gZGVmaW5lcyBhIGBnZW5lcmljYCBhdHRyaWJ1dGUuIFRoaXMgYXR0cmlidXRlIGlzXG4gICAqIG5vcm1hbGx5IHNldCBieSBkZWZhdWx0LCBhbmQgc3R5bGVzIGNhbiBiZSB3cml0dGVuIHRoYXQgYXBwbHkgb25seSB3aGVuIHRoZVxuICAgKiBnZW5lcmljIGF0dHJpYnV0ZSBpcyBzZXQuIFRoaXMgYWxsb3dzIHRoZSBjb25zdHJ1Y3Rpb24gb2YgQ1NTIHJ1bGVzIHRoYXRcbiAgICogd2lsbCBvbmx5IGFwcGx5IHRvIGdlbmVyaWMgY29tcG9uZW50cyBsaWtlOlxuICAgKlxuICAgKiAgICAgOmhvc3QoW2dlbmVyaWM9XCJcIl0pIHtcbiAgICogICAgICAgLi4uIEdlbmVyaWMgYXBwZWFyYW5jZSBkZWZpbmVkIGhlcmUgLi4uXG4gICAqICAgICB9XG4gICAqXG4gICAqIFRoaXMgbWFrZXMgaXQgZWFzeSB0byByZW1vdmUgYWxsIGRlZmF1bHQgc3R5bGluZyDigJQgc2V0IHRoZSBgZ2VuZXJpY2BcbiAgICogYXR0cmlidXRlIHRvIGZhbHNlLCBhbmQgYWxsIGRlZmF1bHQgc3R5bGluZyB3aWxsIGJlIHJlbW92ZWQuXG4gICAqL1xuICBjbGFzcyBHZW5lcmljIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG4gICAgICB0aGlzLmdlbmVyaWMgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZ2VuZXJpYycpIHx8IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiB0aGUgY29tcG9uZW50IHdvdWxkIGxpa2UgdG8gcmVjZWl2ZSBnZW5lcmljIHN0eWxpbmcuXG4gICAgICpcbiAgICAgKiBUaGlzIHByb3BlcnR5IGlzIHRydWUgYnkgZGVmYXVsdCDigJTCoHNldCBpdCB0byBmYWxzZSB0byB0dXJuIG9mZiBhbGxcbiAgICAgKiBnZW5lcmljIHN0eWxlcy4gVGhpcyBtYWtlcyBpdCBlYXNpZXIgdG8gYXBwbHkgY3VzdG9tIHN0eWxpbmc7IHlvdSB3b24ndFxuICAgICAqIGhhdmUgdG8gZXhwbGljaXRseSBvdmVycmlkZSBzdHlsaW5nIHlvdSBkb24ndCB3YW50LlxuICAgICAqXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKi9cbiAgICBnZXQgZ2VuZXJpYygpIHtcbiAgICAgIHJldHVybiB0aGlzLl9nZW5lcmljO1xuICAgIH1cbiAgICBzZXQgZ2VuZXJpYyh2YWx1ZSkge1xuICAgICAgaWYgKCdnZW5lcmljJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5nZW5lcmljID0gdmFsdWU7IH1cbiAgICAgIC8vIFdlIHJvbGwgb3VyIG93biBhdHRyaWJ1dGUgc2V0dGluZyBzbyB0aGF0IGFuIGV4cGxpY2l0bHkgZmFsc2UgdmFsdWVcbiAgICAgIC8vIHNob3dzIHVwIGFzIGdlbmVyaWM9XCJmYWxzZVwiLlxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdmFsdWUgPSAodmFsdWUgIT09ICdmYWxzZScpO1xuICAgICAgfVxuICAgICAgdGhpcy5fZ2VuZXJpYyA9IHZhbHVlO1xuICAgICAgaWYgKHZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICAvLyBFeHBsaWNpdGx5IHVzZSBmYWxzZSBzdHJpbmcuXG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdnZW5lcmljJywgJ2ZhbHNlJyk7XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgLy8gRXhwbGljaXRseSByZW1vdmUgYXR0cmlidXRlLlxuICAgICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnZ2VuZXJpYycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVXNlIHRoZSBlbXB0eSBzdHJpbmcgdG8gZ2V0IGF0dHJpYnV0ZSB0byBhcHBlYXIgd2l0aCBubyB2YWx1ZS5cbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2dlbmVyaWMnLCAnJyk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gR2VuZXJpYztcbn07XG4iLCJpbXBvcnQgbWljcm90YXNrIGZyb20gJy4vbWljcm90YXNrJztcblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBJdGVtc1NlbGVjdGlvbi4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIG1hbmFnZXMgc2luZ2xlLXNlbGVjdGlvbiBzZW1hbnRpY3MgZm9yIGl0ZW1zIGluIGEgbGlzdC5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIGEgY29tcG9uZW50IHRvIHByb3ZpZGUgYW4gYGl0ZW1zYCBhcnJheSBvZiBhbGwgZWxlbWVudHNcbiAgICogaW4gdGhlIGxpc3QuIEEgc3RhbmRhcmQgd2F5IHRvIGRvIHRoYXQgd2l0aCBpcyB0aGVcbiAgICogW0NvbnRlbnRBc0l0ZW1zXShDb250ZW50QXNJdGVtcy5tZCkgbWl4aW4sIHdoaWNoIHRha2VzIGEgY29tcG9uZW50J3NcbiAgICogY29udGVudCAodHlwaWNhbGx5IGl0cyBkaXN0cmlidXRlZCBjaGlsZHJlbikgYXMgdGhlIHNldCBvZiBsaXN0IGl0ZW1zOyBzZWVcbiAgICogdGhhdCBtaXhpbiBmb3IgZGV0YWlscy5cbiAgICpcbiAgICogVGhpcyBtaXhpbiB0cmFja3MgYSBzaW5nbGUgc2VsZWN0ZWQgaXRlbSBpbiB0aGUgbGlzdCwgYW5kIHByb3ZpZGVzIG1lYW5zIHRvXG4gICAqIGdldCBhbmQgc2V0IHRoYXQgc3RhdGUgYnkgaXRlbSBwb3NpdGlvbiAoYHNlbGVjdGVkSW5kZXhgKSBvciBpdGVtIGlkZW50aXR5XG4gICAqIChgc2VsZWN0ZWRJdGVtYCkuIFRoZSBzZWxlY3Rpb24gY2FuIGJlIG1vdmVkIGluIHRoZSBsaXN0IHZpYSB0aGUgbWV0aG9kc1xuICAgKiBgc2VsZWN0Rmlyc3RgLCBgc2VsZWN0TGFzdGAsIGBzZWxlY3ROZXh0YCwgYW5kIGBzZWxlY3RQcmV2aW91c2AuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZG9lcyBub3QgcHJvZHVjZSBhbnkgdXNlci12aXNpYmxlIGVmZmVjdHMgdG8gcmVwcmVzZW50XG4gICAqIHNlbGVjdGlvbi4gT3RoZXIgbWl4aW5zLCBzdWNoIGFzXG4gICAqIFtTZWxlY3Rpb25BcmlhQWN0aXZlXShTZWxlY3Rpb25BcmlhQWN0aXZlLm1kKSxcbiAgICogW1NlbGVjdGlvbkhpZ2hsaWdodF0oU2VsZWN0aW9uSGlnaGxpZ2h0Lm1kKSBhbmRcbiAgICogW1NlbGVjdGlvbkluVmlld10oU2VsZWN0aW9uSW5WaWV3Lm1kKSwgbW9kaWZ5IHRoZSBzZWxlY3RlZCBpdGVtIGluIGNvbW1vblxuICAgKiB3YXlzIHRvIGxldCB0aGUgdXNlciBrbm93IGEgZ2l2ZW4gaXRlbSBpcyBzZWxlY3RlZCBvciBub3Qgc2VsZWN0ZWQuXG4gICAqL1xuICBjbGFzcyBJdGVtc1NlbGVjdGlvbiBleHRlbmRzIGJhc2Uge1xuXG4gICAgLyoqXG4gICAgICogQXBwbHkgdGhlIGluZGljYXRlIHNlbGVjdGlvbiBzdGF0ZSB0byB0aGUgaXRlbS5cbiAgICAgKlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy4gVXNlci12aXNpYmxlXG4gICAgICogZWZmZWN0cyB3aWxsIHR5cGljYWxseSBiZSBoYW5kbGVkIGJ5IG90aGVyIG1peGlucy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGl0ZW0gLSB0aGUgaXRlbSBiZWluZyBzZWxlY3RlZC9kZXNlbGVjdGVkXG4gICAgICogQHBhcmFtIHtib29sZWFufSBzZWxlY3RlZCAtIHRydWUgaWYgdGhlIGl0ZW0gaXMgc2VsZWN0ZWQsIGZhbHNlIGlmIG5vdFxuICAgICAqL1xuICAgIGFwcGx5U2VsZWN0aW9uKGl0ZW0sIHNlbGVjdGVkKSB7XG4gICAgICBpZiAoc3VwZXIuYXBwbHlTZWxlY3Rpb24pIHsgc3VwZXIuYXBwbHlTZWxlY3Rpb24oaXRlbSwgc2VsZWN0ZWQpOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiB0aGUgc2VsZWN0aW9uIGNhbiBiZSBtb3ZlZCB0byB0aGUgbmV4dCBpdGVtLCBmYWxzZSBpZiBub3QgKHRoZVxuICAgICAqIHNlbGVjdGVkIGl0ZW0gaXMgdGhlIGxhc3QgaXRlbSBpbiB0aGUgbGlzdCkuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBnZXQgY2FuU2VsZWN0TmV4dCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jYW5TZWxlY3ROZXh0O1xuICAgIH1cbiAgICBzZXQgY2FuU2VsZWN0TmV4dChjYW5TZWxlY3ROZXh0KSB7XG4gICAgICBpZiAoJ2NhblNlbGVjdE5leHQnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLmNhblNlbGVjdE5leHQgPSBjYW5TZWxlY3ROZXh0OyB9XG4gICAgICB0aGlzLl9jYW5TZWxlY3ROZXh0ID0gY2FuU2VsZWN0TmV4dDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHRoZSBzZWxlY3Rpb24gY2FuIGJlIG1vdmVkIHRvIHRoZSBwcmV2aW91cyBpdGVtLCBmYWxzZSBpZiBub3RcbiAgICAgKiAodGhlIHNlbGVjdGVkIGl0ZW0gaXMgdGhlIGZpcnN0IG9uZSBpbiB0aGUgbGlzdCkuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBnZXQgY2FuU2VsZWN0UHJldmlvdXMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY2FuU2VsZWN0UHJldmlvdXM7XG4gICAgfVxuICAgIHNldCBjYW5TZWxlY3RQcmV2aW91cyhjYW5TZWxlY3RQcmV2aW91cykge1xuICAgICAgaWYgKCdjYW5TZWxlY3RQcmV2aW91cycgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuY2FuU2VsZWN0UHJldmlvdXMgPSBjYW5TZWxlY3RQcmV2aW91czsgfVxuICAgICAgdGhpcy5fY2FuU2VsZWN0UHJldmlvdXMgPSBjYW5TZWxlY3RQcmV2aW91cztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgYSBuZXcgaXRlbSBiZWluZyBhZGRlZCB0byB0aGUgbGlzdC5cbiAgICAgKlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIHNpbXBseSBzZXRzIHRoZSBpdGVtJ3NcbiAgICAgKiBzZWxlY3Rpb24gc3RhdGUgdG8gZmFsc2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpdGVtIC0gdGhlIGl0ZW0gYmVpbmcgYWRkZWRcbiAgICAgKi9cbiAgICBpdGVtQWRkZWQoaXRlbSkge1xuICAgICAgaWYgKHN1cGVyLml0ZW1BZGRlZCkgeyBzdXBlci5pdGVtQWRkZWQoaXRlbSk7IH1cbiAgICAgIHRoaXMuYXBwbHlTZWxlY3Rpb24oaXRlbSwgaXRlbSA9PT0gdGhpcy5zZWxlY3RlZEl0ZW0pO1xuICAgIH1cblxuICAgIGl0ZW1zQ2hhbmdlZCgpIHtcbiAgICAgIGlmIChzdXBlci5pdGVtc0NoYW5nZWQpIHsgc3VwZXIuaXRlbXNDaGFuZ2VkKCk7IH1cblxuICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uUmVxdWlyZWQpIHtcbiAgICAgICAgLy8gRW5zdXJlIHNlbGVjdGlvbiwgYnV0IGRvIHRoaXMgaW4gdGhlIG5leHQgdGljayB0byBnaXZlIG90aGVyIG1peGlucyBhXG4gICAgICAgIC8vIGNoYW5jZSB0byBkbyB0aGVpciBvd24gaXRlbXNDaGFuZ2VkIHdvcmsuXG4gICAgICAgIG1pY3JvdGFzaygoKSA9PiB7XG4gICAgICAgICAgZW5zdXJlU2VsZWN0aW9uKHRoaXMpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNoYW5nZSBpbiBpdGVtcyBtYXkgaGF2ZSBhZmZlY3RlZCB3aGljaCBuYXZpZ2F0aW9ucyBhcmUgcG9zc2libGUuXG4gICAgICB1cGRhdGVQb3NzaWJsZU5hdmlnYXRpb25zKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBpbmRleCBvZiB0aGUgaXRlbSB3aGljaCBpcyBjdXJyZW50bHkgc2VsZWN0ZWQuXG4gICAgICpcbiAgICAgKiBJZiBgc2VsZWN0aW9uV3JhcHNgIGlzIGZhbHNlLCB0aGUgaW5kZXggaXMgLTEgaWYgdGhlcmUgaXMgbm8gc2VsZWN0aW9uLlxuICAgICAqIEluIHRoYXQgY2FzZSwgc2V0dGluZyB0aGUgaW5kZXggdG8gLTEgd2lsbCBkZXNlbGVjdCBhbnlcbiAgICAgKiBjdXJyZW50bHktc2VsZWN0ZWQgaXRlbS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGVkSW5kZXgoKSB7XG4gICAgICBsZXQgc2VsZWN0ZWRJdGVtID0gdGhpcy5zZWxlY3RlZEl0ZW07XG5cbiAgICAgIC8vIFRPRE86IElmIHNlbGVjdGlvbiB3YXNuJ3QgZm91bmQsIG1vc3QgbGlrZWx5IGNhdXNlIGlzIHRoYXQgdGhlIERPTSB3YXNcbiAgICAgIC8vIG1hbmlwdWxhdGVkIGZyb20gdW5kZXJuZWF0aCB1cy4gT25jZSB3ZSB0cmFjayBjb250ZW50IGNoYW5nZXMsIHR1cm5cbiAgICAgIC8vIHRoaXMgaW50byBhIHdhcm5pbmcuXG4gICAgICAvLyBUT0RPOiBNZW1vaXplXG4gICAgICByZXR1cm4gc2VsZWN0ZWRJdGVtID9cbiAgICAgICAgdGhpcy5pdGVtcy5pbmRleE9mKHNlbGVjdGVkSXRlbSkgOlxuICAgICAgICAtMTtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGVkSW5kZXgoaW5kZXgpIHtcbiAgICAgIGlmICgnc2VsZWN0ZWRJbmRleCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJbmRleCA9IGluZGV4OyB9XG4gICAgICBsZXQgaXRlbXMgPSB0aGlzLml0ZW1zO1xuICAgICAgbGV0IGl0ZW07XG4gICAgICBpZiAoaW5kZXggPCAwIHx8IGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpdGVtID0gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGl0ZW0gPSBpdGVtc1tpbmRleF07XG4gICAgICB9XG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IGl0ZW07XG5cbiAgICAgIGxldCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnc2VsZWN0ZWQtaW5kZXgtY2hhbmdlZCcsIHtcbiAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgc2VsZWN0ZWRJbmRleDogaW5kZXgsXG4gICAgICAgICAgdmFsdWU6IGluZGV4IC8vIGZvciBQb2x5bWVyIGJpbmRpbmdcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgaXRlbSwgb3IgbnVsbCBpZiB0aGVyZSBpcyBubyBzZWxlY3Rpb24uXG4gICAgICpcbiAgICAgKiBTZXR0aW5nIHRoaXMgcHJvcGVydHkgdG8gbnVsbCBkZXNlbGVjdHMgYW55IGN1cnJlbnRseS1zZWxlY3RlZCBpdGVtLlxuICAgICAqXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0ZWRJdGVtKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSXRlbSB8fCBudWxsO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0ZWRJdGVtKGl0ZW0pIHtcbiAgICAgIGlmICgnc2VsZWN0ZWRJdGVtJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEl0ZW0gPSBpdGVtOyB9XG4gICAgICBsZXQgcHJldmlvdXNJdGVtID0gdGhpcy5fc2VsZWN0ZWRJdGVtO1xuICAgICAgaWYgKHByZXZpb3VzSXRlbSkge1xuICAgICAgICBpZiAoaXRlbSA9PT0gcHJldmlvdXNJdGVtKSB7XG4gICAgICAgICAgLy8gVGhlIGluZGljYXRlZCBpdGVtIGlzIGFscmVhZHkgdGhlIHNlbGVjdGVkIGl0ZW0uXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJlbW92ZSBwcmV2aW91cyBzZWxlY3Rpb24uXG4gICAgICAgIHRoaXMuYXBwbHlTZWxlY3Rpb24ocHJldmlvdXNJdGVtLCBmYWxzZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFRPRE86IENvbmZpcm0gaXRlbSBpcyBhY3R1YWxseSBpbiB0aGUgbGlzdCBiZWZvcmUgc2VsZWN0aW5nLlxuICAgICAgdGhpcy5fc2VsZWN0ZWRJdGVtID0gaXRlbTtcbiAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgIHRoaXMuYXBwbHlTZWxlY3Rpb24oaXRlbSwgdHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFRPRE86IFJhdGlvbmFsaXplIHdpdGggc2VsZWN0ZWRJbmRleCBzbyB3ZSdyZSBub3QgcmVjYWxjdWxhdGluZyBpdGVtXG4gICAgICAvLyBvciBpbmRleCBpbiBlYWNoIHNldHRlci5cbiAgICAgIHVwZGF0ZVBvc3NpYmxlTmF2aWdhdGlvbnModGhpcyk7XG5cbiAgICAgIGxldCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnc2VsZWN0ZWQtaXRlbS1jaGFuZ2VkJywge1xuICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICBzZWxlY3RlZEl0ZW06IGl0ZW0sXG4gICAgICAgICAgcHJldmlvdXNJdGVtOiBwcmV2aW91c0l0ZW0sXG4gICAgICAgICAgdmFsdWU6IGl0ZW0gLy8gZm9yIFBvbHltZXIgYmluZGluZ1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IHRoZSBmaXJzdCBpdGVtIGluIHRoZSBsaXN0LlxuICAgICAqL1xuICAgIHNlbGVjdEZpcnN0KCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdEZpcnN0KSB7IHN1cGVyLnNlbGVjdEZpcnN0KCk7IH1cbiAgICAgIHJldHVybiBzZWxlY3RJbmRleCh0aGlzLCAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHRoZSBsaXN0IHNob3VsZCBhbHdheXMgaGF2ZSBhIHNlbGVjdGlvbiAoaWYgaXQgaGFzIGl0ZW1zKS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIGdldCBzZWxlY3Rpb25SZXF1aXJlZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zZWxlY3Rpb25SZXF1aXJlZDtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGlvblJlcXVpcmVkKHNlbGVjdGlvblJlcXVpcmVkKSB7XG4gICAgICBpZiAoJ3NlbGVjdGlvblJlcXVpcmVkJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3Rpb25SZXF1aXJlZCA9IHNlbGVjdGlvblJlcXVpcmVkOyB9XG4gICAgICB0aGlzLl9zZWxlY3Rpb25SZXF1aXJlZCA9IHNlbGVjdGlvblJlcXVpcmVkO1xuICAgICAgaWYgKHNlbGVjdGlvblJlcXVpcmVkKSB7XG4gICAgICAgIGVuc3VyZVNlbGVjdGlvbih0aGlzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgdGhlIGxhc3QgaXRlbSBpbiB0aGUgbGlzdC5cbiAgICAgKi9cbiAgICBzZWxlY3RMYXN0KCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdExhc3QpIHsgc3VwZXIuc2VsZWN0TGFzdCgpOyB9XG4gICAgICByZXR1cm4gc2VsZWN0SW5kZXgodGhpcywgdGhpcy5pdGVtcy5sZW5ndGggLSAxKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgdGhlIG5leHQgaXRlbSBpbiB0aGUgbGlzdC5cbiAgICAgKi9cbiAgICBzZWxlY3ROZXh0KCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdE5leHQpIHsgc3VwZXIuc2VsZWN0TmV4dCgpOyB9XG4gICAgICByZXR1cm4gc2VsZWN0SW5kZXgodGhpcywgdGhpcy5zZWxlY3RlZEluZGV4ICsgMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IHRoZSBwcmV2aW91cyBpdGVtIGluIHRoZSBsaXN0LlxuICAgICAqL1xuICAgIHNlbGVjdFByZXZpb3VzKCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdFByZXZpb3VzKSB7IHN1cGVyLnNlbGVjdFByZXZpb3VzKCk7IH1cbiAgICAgIHJldHVybiBzZWxlY3RJbmRleCh0aGlzLCB0aGlzLnNlbGVjdGVkSW5kZXggLSAxKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHNlbGVjdGlvbiBuYXZpZ2F0aW9ucyB3cmFwIGZyb20gbGFzdCB0byBmaXJzdCwgYW5kIHZpY2UgdmVyc2EuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAZGVmYXVsdCB7ZmFsc2V9XG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGlvbldyYXBzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGlvbldyYXBzIHx8IGZhbHNlO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0aW9uV3JhcHModmFsdWUpIHtcbiAgICAgIGlmICgnc2VsZWN0aW9uV3JhcHMnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGlvbldyYXBzID0gdmFsdWU7IH1cbiAgICAgIHRoaXMuX3NlbGVjdGlvbldyYXBzID0gU3RyaW5nKHZhbHVlKSA9PT0gJ3RydWUnO1xuICAgICAgdXBkYXRlUG9zc2libGVOYXZpZ2F0aW9ucyh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaXJlcyB3aGVuIHRoZSBzZWxlY3RlZEl0ZW0gcHJvcGVydHkgY2hhbmdlcy5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBJdGVtc1NlbGVjdGlvblxuICAgICAqIEBldmVudCBzZWxlY3RlZC1pdGVtLWNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBkZXRhaWwuc2VsZWN0ZWRJdGVtIFRoZSBuZXcgc2VsZWN0ZWQgaXRlbS5cbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBkZXRhaWwucHJldmlvdXNJdGVtIFRoZSBwcmV2aW91c2x5IHNlbGVjdGVkIGl0ZW0uXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBGaXJlcyB3aGVuIHRoZSBzZWxlY3RlZEluZGV4IHByb3BlcnR5IGNoYW5nZXMuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgSXRlbXNTZWxlY3Rpb25cbiAgICAgKiBAZXZlbnQgc2VsZWN0ZWQtaW5kZXgtY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkZXRhaWwuc2VsZWN0ZWRJbmRleCBUaGUgbmV3IHNlbGVjdGVkIGluZGV4LlxuICAgICAqL1xuXG4gIH1cblxuICByZXR1cm4gSXRlbXNTZWxlY3Rpb247XG59O1xuXG5cbi8vIElmIG5vIGl0ZW0gaXMgc2VsZWN0ZWQsIHNlbGVjdCBhIGRlZmF1bHQgaXRlbS5cbmZ1bmN0aW9uIGVuc3VyZVNlbGVjdGlvbihlbGVtZW50KSB7XG4gIGxldCBpbmRleCA9IGVsZW1lbnQuc2VsZWN0ZWRJbmRleDtcbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIC8vIFNlbGVjdGVkIGl0ZW0gaXMgbm8gbG9uZ2VyIGluIHRoZSBjdXJyZW50IHNldCBvZiBpdGVtcy5cbiAgICBpZiAoZWxlbWVudC5pdGVtcyAmJiBlbGVtZW50Lml0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIFNlbGVjdCB0aGUgZmlyc3QgaXRlbS5cbiAgICAgIC8vIFRPRE86IElmIHRoZSBwcmV2aW91c2x5LXNlbGVjdGVkIGl0ZW0gaGFzIGJlZW4gZGVsZXRlZCwgdHJ5IHRvIHNlbGVjdFxuICAgICAgLy8gYW4gaXRlbSBhZGphY2VudCB0byB0aGUgcG9zaXRpb24gaXQgaGVsZC5cbiAgICAgIGVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE5vIGl0ZW1zIGZvciB1cyB0byBzZWxlY3QsIGJ1dCB3ZSBjYW4gYXQgbGVhc3Qgc2lnbmFsIHRoYXQgdGhlcmUncyBub1xuICAgICAgLy8gbG9uZ2VyIGEgc2VsZWN0aW9uLlxuICAgICAgZWxlbWVudC5zZWxlY3RlZEl0ZW0gPSBudWxsO1xuICAgIH1cbiAgfVxufVxuXG4vLyBFbnN1cmUgdGhlIGdpdmVuIGluZGV4IGlzIHdpdGhpbiBib3VuZHMsIGFuZCBzZWxlY3QgaXQgaWYgaXQncyBub3QgYWxyZWFkeVxuLy8gc2VsZWN0ZWQuXG5mdW5jdGlvbiBzZWxlY3RJbmRleChlbGVtZW50LCBpbmRleCkge1xuICBsZXQgY291bnQgPSBlbGVtZW50Lml0ZW1zLmxlbmd0aDtcbiAgbGV0IGJvdW5kZWRJbmRleDtcbiAgaWYgKGVsZW1lbnQuc2VsZWN0aW9uV3JhcHMpIHtcbiAgICAvLyBKYXZhU2NyaXB0IG1vZCBkb2Vzbid0IGhhbmRsZSBuZWdhdGl2ZSBudW1iZXJzIHRoZSB3YXkgd2Ugd2FudCB0byB3cmFwLlxuICAgIC8vIFNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xODYxODI1MC83NjQ3MlxuICAgIGJvdW5kZWRJbmRleCA9ICgoaW5kZXggJSBjb3VudCkgKyBjb3VudCkgJSBjb3VudDtcbiAgfSBlbHNlIHtcbiAgICAvLyBLZWVwIGluZGV4IHdpdGhpbiBib3VuZHMgb2YgYXJyYXkuXG4gICAgYm91bmRlZEluZGV4ID0gTWF0aC5tYXgoTWF0aC5taW4oaW5kZXgsIGNvdW50IC0gMSksIDApO1xuICB9XG4gIGxldCBwcmV2aW91c0luZGV4ID0gZWxlbWVudC5zZWxlY3RlZEluZGV4O1xuICBpZiAocHJldmlvdXNJbmRleCAhPT0gYm91bmRlZEluZGV4KSB7XG4gICAgZWxlbWVudC5zZWxlY3RlZEluZGV4ID0gYm91bmRlZEluZGV4O1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG4vLyBGb2xsb3dpbmcgYSBjaGFuZ2UgaW4gc2VsZWN0aW9uLCByZXBvcnQgd2hldGhlciBpdCdzIG5vdyBwb3NzaWJsZSB0b1xuLy8gZ28gbmV4dC9wcmV2aW91cyBmcm9tIHRoZSBnaXZlbiBpbmRleC5cbmZ1bmN0aW9uIHVwZGF0ZVBvc3NpYmxlTmF2aWdhdGlvbnMoZWxlbWVudCkge1xuICBsZXQgY2FuU2VsZWN0TmV4dDtcbiAgbGV0IGNhblNlbGVjdFByZXZpb3VzO1xuICBsZXQgaXRlbXMgPSBlbGVtZW50Lml0ZW1zO1xuICBpZiAoaXRlbXMgPT0gbnVsbCB8fCBpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAvLyBObyBpdGVtcyB0byBzZWxlY3QuXG4gICAgY2FuU2VsZWN0TmV4dCA9IGZhbHNlO1xuICAgIGNhblNlbGVjdFByZXZpb3VzID0gZmFsc2U7XG4gIH0gaWYgKGVsZW1lbnQuc2VsZWN0aW9uV3JhcHMpIHtcbiAgICAvLyBTaW5jZSB0aGVyZSBhcmUgaXRlbXMsIGNhbiBhbHdheXMgZ28gbmV4dC9wcmV2aW91cy5cbiAgICBjYW5TZWxlY3ROZXh0ID0gdHJ1ZTtcbiAgICBjYW5TZWxlY3RQcmV2aW91cyA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgbGV0IGluZGV4ID0gZWxlbWVudC5zZWxlY3RlZEluZGV4O1xuICAgIGlmIChpbmRleCA8IDAgJiYgaXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgLy8gU3BlY2lhbCBjYXNlLiBJZiB0aGVyZSBhcmUgaXRlbXMgYnV0IG5vIHNlbGVjdGlvbiwgZGVjbGFyZSB0aGF0IGl0J3NcbiAgICAgIC8vIGFsd2F5cyBwb3NzaWJsZSB0byBnbyBuZXh0L3ByZXZpb3VzIHRvIGNyZWF0ZSBhIHNlbGVjdGlvbi5cbiAgICAgIGNhblNlbGVjdE5leHQgPSB0cnVlO1xuICAgICAgY2FuU2VsZWN0UHJldmlvdXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBOb3JtYWwgY2FzZTogd2UgaGF2ZSBhbiBpbmRleCBpbiBhIGxpc3QgdGhhdCBoYXMgaXRlbXMuXG4gICAgICBjYW5TZWxlY3RQcmV2aW91cyA9IChpbmRleCA+IDApO1xuICAgICAgY2FuU2VsZWN0TmV4dCA9IChpbmRleCA8IGl0ZW1zLmxlbmd0aCAtIDEpO1xuICAgIH1cbiAgfVxuICBlbGVtZW50LmNhblNlbGVjdE5leHQgPSBjYW5TZWxlY3ROZXh0O1xuICBlbGVtZW50LmNhblNlbGVjdFByZXZpb3VzID0gY2FuU2VsZWN0UHJldmlvdXM7XG59XG4iLCIvLyBUT0RPOiBQcm92aWRlIGJhc2VsaW5lIGJlaGF2aW9yIGZvciB0aGlzIG1peGluIHdoZW4gdXNlZCBvdXRzaWRlIG9mIGFcbi8vIGNvbGxlY3RpdmUuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggS2V5Ym9hcmQuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBtYW5hZ2VzIHRoZSBrZXlkb3duIGhhbmRsaW5nIGZvciBhIGNvbXBvbmVudC5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBoYW5kbGVzIHNldmVyYWwga2V5Ym9hcmQtcmVsYXRlZCBmZWF0dXJlcy5cbiAgICpcbiAgICogRmlyc3QsIGl0IHdpcmVzIHVwIGEgc2luZ2xlIGtleWRvd24gZXZlbnQgaGFuZGxlciB0aGF0IGNhbiBiZSBzaGFyZWQgYnlcbiAgICogbXVsdGlwbGUgbWl4aW5zIG9uIGEgY29tcG9uZW50LiBUaGUgZXZlbnQgaGFuZGxlciB3aWxsIGludm9rZSBhIGBrZXlkb3duYFxuICAgKiBtZXRob2Qgd2l0aCB0aGUgZXZlbnQgb2JqZWN0LCBhbmQgYW55IG1peGluIGFsb25nIHRoZSBwcm90b3R5cGUgY2hhaW4gdGhhdFxuICAgKiB3YW50cyB0byBoYW5kbGUgdGhhdCBtZXRob2QgY2FuIGRvIHNvLlxuICAgKlxuICAgKiBJZiBhIG1peGluIHdhbnRzIHRvIGluZGljYXRlIHRoYXQga2V5Ym9hcmQgZXZlbnQgaGFzIGJlZW4gaGFuZGxlZCwgYW5kIHRoYXRcbiAgICogb3RoZXIgbWl4aW5zIHNob3VsZCAqbm90KiBoYW5kbGUgaXQsIHRoZSBtaXhpbidzIGBrZXlkb3duYCBoYW5kbGVyIHNob3VsZFxuICAgKiByZXR1cm4gYSB2YWx1ZSBvZiB0cnVlLiBUaGUgY29udmVudGlvbiB0aGF0IHNlZW1zIHRvIHdvcmsgd2VsbCBpcyB0aGF0IGFcbiAgICogbWl4aW4gc2hvdWxkIHNlZSBpZiBpdCB3YW50cyB0byBoYW5kbGUgdGhlIGV2ZW50IGFuZCwgaWYgbm90LCB0aGVuIGFzayB0aGVcbiAgICogc3VwZXJjbGFzcyB0byBzZWUgaWYgaXQgd2FudHMgdG8gaGFuZGxlIHRoZSBldmVudC4gVGhpcyBoYXMgdGhlIGVmZmVjdCBvZlxuICAgKiBnaXZpbmcgdGhlIG1peGluIHRoYXQgd2FzIGFwcGxpZWQgbGFzdCB0aGUgZmlyc3QgY2hhbmNlIGF0IGhhbmRsaW5nIGFcbiAgICoga2V5Ym9hcmQgZXZlbnQuXG4gICAqXG4gICAqIEV4YW1wbGU6XG4gICAqXG4gICAqICAgICBrZXlkb3duKGV2ZW50KSB7XG4gICAqICAgICAgIGxldCBoYW5kbGVkO1xuICAgKiAgICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICogICAgICAgICAvLyBIYW5kbGUgdGhlIGtleXMgeW91IHdhbnQsIHNldHRpbmcgaGFuZGxlZCA9IHRydWUgaWYgYXBwcm9wcmlhdGUuXG4gICAqICAgICAgIH1cbiAgICogICAgICAgLy8gUHJlZmVyIG1peGluIHJlc3VsdCBpZiBpdCdzIGRlZmluZWQsIG90aGVyd2lzZSB1c2UgYmFzZSByZXN1bHQuXG4gICAqICAgICAgIHJldHVybiBoYW5kbGVkIHx8IChzdXBlci5rZXlkb3duICYmIHN1cGVyLmtleWRvd24oZXZlbnQpKTtcbiAgICogICAgIH1cbiAgICpcbiAgICogQSBzZWNvbmQgZmVhdHVyZSBwcm92aWRlZCBieSB0aGlzIG1peGluIGlzIHRoYXQgaXQgaW1wbGljaXRseSBtYWtlcyB0aGVcbiAgICogY29tcG9uZW50IGEgdGFiIHN0b3AgaWYgaXQgaXNuJ3QgYWxyZWFkeSwgYnkgc2V0dGluZyBgdGFiSW5kZXhgIHRvIDAuIFRoaXNcbiAgICogaGFzIHRoZSBlZmZlY3Qgb2YgYWRkaW5nIHRoZSBjb21wb25lbnQgdG8gdGhlIHRhYiBvcmRlciBpbiBkb2N1bWVudCBvcmRlci5cbiAgICpcbiAgICogRmluYWxseSwgdGhpcyBtaXhpbiBpcyBkZXNpZ25lZCB0byB3b3JrIHdpdGggdGhlIG9wdGlvbmFsXG4gICAqIFtDb2xsZWN0aXZlXShDb2xsZWN0aXZlLm1kKSBjbGFzcyB2aWEgYSBtaXhpbiBsaWtlXG4gICAqIFtUYXJnZXRJbkNvbGxlY3RpdmVdKFRhcmdldEluQ29sbGVjdGl2ZS5tZCkuIFRoaXMgYWxsb3dzIGEgc2V0IG9mIHJlbGF0ZWRcbiAgICogY29tcG9uZW50IGluc3RhbmNlcyB0byBjb29wZXJhdGl2ZWx5IGhhbmRsZSB0aGUga2V5Ym9hcmQuIFNlZSB0aGVcbiAgICogQ29sbGVjdGl2ZSBjbGFzcyBmb3IgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzIEtleWJvYXJkIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG5cbiAgICAgIC8vIEFzc3VtZSB0aGlzIGNvbXBvbmVudCBpcyBnb2luZyB0byBoYW5kbGUgdGhlIGtleWJvYXJkIG9uIGl0cyBvd24uXG4gICAgICBzdGFydExpc3RlbmluZ1RvS2V5ZG93bih0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgdGhlIGluZGljYXRlZCBrZXlib2FyZCBldmVudC5cbiAgICAgKlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy4gVGhpcyB3aWxsXG4gICAgICogdHlwaWNhbGx5IGJlIGhhbmRsZWQgYnkgb3RoZXIgbWl4aW5zLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBldmVudCAtIHRoZSBrZXlib2FyZCBldmVudFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhlIGV2ZW50IHdhcyBoYW5kbGVkXG4gICAgICovXG4gICAga2V5ZG93bihldmVudCkge1xuICAgICAgaWYgKHN1cGVyLmtleWRvd24pIHsgcmV0dXJuIHN1cGVyLmtleWRvd24oZXZlbnQpOyB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBJZiB3ZSdyZSBub3cgdGhlIG91dGVybW9zdCBlbGVtZW50IG9mIHRoZSBjb2xsZWN0aXZlLCBzZXQgdXAgdG8gcmVjZWl2ZVxuICAgICAqIGtleWJvYXJkIGV2ZW50cy4gSWYgd2UncmUgbm8gbG9uZ2VyIHRoZSBvdXRlcm1vc3QgZWxlbWVudCwgc3RvcFxuICAgICAqIGxpc3RlbmluZy5cbiAgICAgKi9cbiAgICBjb2xsZWN0aXZlQ2hhbmdlZCgpIHtcbiAgICAgIGlmIChzdXBlci5jb2xsZWN0aXZlQ2hhbmdlZCkgeyBzdXBlci5jb2xsZWN0aXZlQ2hhbmdlZCgpOyB9XG5cbiAgICAgIGlmICh0aGlzLmNvbGxlY3RpdmUub3V0ZXJtb3N0RWxlbWVudCAhPT0gdGhpcykge1xuICAgICAgICAvLyBXZSdyZSBubyBsb25nZXIgdGhlIG91dGVybW9zdCBlbGVtZW50OyBzdG9wIGxpc3RlbmluZy5cbiAgICAgICAgaWYgKGlzTGlzdGVuaW5nVG9LZXlkb3duKHRoaXMpKSB7XG4gICAgICAgICAgc3RvcExpc3RlbmluZ1RvS2V5ZG93bih0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAvLyBTaW5jZSB3ZSdyZSBnb2luZyB0byBoYW5kbGUgdGhlIGtleWJvYXJkLCBzZWUgaWYgd2UgY2FuIGFkb3B0IGFuIEFSSUFcbiAgICAgICAgLy8gbGFiZWwgZnJvbSBhbiBpbm5lciBlbGVtZW50IG9mIHRoZSBjb2xsZWN0aXZlLlxuICAgICAgICBsZXQgbGFiZWwgPSBnZXRDb2xsZWN0aXZlQXJpYUxhYmVsKHRoaXMuY29sbGVjdGl2ZSk7XG4gICAgICAgIGlmIChsYWJlbCkge1xuICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgbGFiZWwpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNMaXN0ZW5pbmdUb0tleWRvd24odGhpcykpIHtcbiAgICAgICAgc3RhcnRMaXN0ZW5pbmdUb0tleWRvd24odGhpcyk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gS2V5Ym9hcmQ7XG59O1xuXG5cbi8vIEZpcmUgdGhlIGtleWRvd24oKSBtZXRob2Qgb24gdGhlIGVsZW1lbnQgb3IgKGlmIGl0IGJlbG9uZ3MgdG8gYSBjb2xsZWN0aXZlKVxuLy8gYWxsIGVsZW1lbnRzIGluIHRoZSBjb2xsZWN0aXZlLlxuLy9cbi8vIE5vdGU6IHRoZSB2YWx1ZSBvZiAndGhpcycgaXMgYm91bmQgdG8gdGhlIGVsZW1lbnQgd2hpY2ggcmVjZWl2ZWQgdGhlIGV2ZW50LlxuZnVuY3Rpb24ga2V5ZG93bihldmVudCkge1xuXG4gIGxldCBoYW5kbGVkID0gZmFsc2U7XG5cbiAgaWYgKHRoaXMuY29sbGVjdGl2ZSkge1xuICAgIC8vIEdpdmUgY29sbGVjdGl2ZSBlbGVtZW50cyBhIHNob3QgYXQgdGhlIGV2ZW50LCB3b3JraW5nIGZyb20gaW5uZXJtb3N0IHRvXG4gICAgLy8gb3V0ZXJtb3N0ICh0aGlzIGVsZW1lbnQpLlxuICAgIGxldCBlbGVtZW50cyA9IHRoaXMuY29sbGVjdGl2ZS5lbGVtZW50cztcbiAgICBmb3IgKGxldCBpID0gZWxlbWVudHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCBlbGVtZW50ID0gZWxlbWVudHNbaV07XG4gICAgICBoYW5kbGVkID0gZWxlbWVudC5rZXlkb3duICYmIGVsZW1lbnQua2V5ZG93bihldmVudCk7XG4gICAgICBpZiAoaGFuZGxlZCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gQ29tcG9uZW50IGlzIGhhbmRsaW5nIHRoZSBrZXlib2FyZCBvbiBpdHMgb3duLlxuICAgIGhhbmRsZWQgPSB0aGlzLmtleWRvd24oZXZlbnQpO1xuICB9XG5cbiAgaWYgKGhhbmRsZWQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG59XG5cblxuLy8gUmV0dXJuIHRoZSBmaXJzdCBBUklBIGxhYmVsIGRlZmluZWQgYnkgdGhlIGNvbGxlY3RpdmUuXG5mdW5jdGlvbiBnZXRDb2xsZWN0aXZlQXJpYUxhYmVsKGNvbGxlY3RpdmUpIHtcbiAgbGV0IGxhYmVscyA9IGNvbGxlY3RpdmUuZWxlbWVudHMubWFwKGVsZW1lbnQgPT4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSk7XG4gIC8vIFdvdWxkIHByZWZlciB0byB1c2UgQXJyYXkucHJvdG90eXBlLmZpbmQgaGVyZSwgYnV0IElFIDExIGRvZXNuJ3QgaGF2ZSBpdC5cbiAgbGV0IG5vbk51bGxMYWJlbHMgPSBsYWJlbHMuZmlsdGVyKGxhYmVsID0+IGxhYmVsICE9IG51bGwpO1xuICByZXR1cm4gbm9uTnVsbExhYmVsc1swXTtcbn1cblxuXG5mdW5jdGlvbiBpc0xpc3RlbmluZ1RvS2V5ZG93bihlbGVtZW50KSB7XG4gIHJldHVybiBlbGVtZW50Ll9rZXlkb3duTGlzdGVuZXIgIT0gbnVsbDtcbn1cblxuXG5mdW5jdGlvbiBzdGFydExpc3RlbmluZ1RvS2V5ZG93bihlbGVtZW50KSB7XG4gIGVsZW1lbnQuX2tleWRvd25MaXN0ZW5lciA9IGtleWRvd24uYmluZChlbGVtZW50KTtcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZWxlbWVudC5fa2V5ZG93bkxpc3RlbmVyKTtcbiAgLy8gU2V0IGEgZGVmYXVsdCB0YWIgaW5kZXggb2YgMCAoZG9jdW1lbnQgb3JkZXIpIGlmIG5vIHRhYiBpbmRleCBleGlzdHMuXG4gIC8vIE1TIEVkZ2UgcmVxdWlyZXMgd2UgZXhwbGljaXRseSBjaGVjayBmb3IgcHJlc2VuY2Ugb2YgdGFiaW5kZXggYXR0cmlidXRlLlxuICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JykgPT0gbnVsbCB8fCBlbGVtZW50LnRhYkluZGV4IDwgMCkge1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XG4gIH1cbn1cblxuXG5mdW5jdGlvbiBzdG9wTGlzdGVuaW5nVG9LZXlkb3duKGVsZW1lbnQpIHtcbiAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZWxlbWVudC5fa2V5ZG93bkxpc3RlbmVyKTtcbiAgZWxlbWVudC5fa2V5ZG93bkxpc3RlbmVyID0gbnVsbDtcbiAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG59XG4iLCIvKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIEtleWJvYXJkRGlyZWN0aW9uLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggbWFwcyBkaXJlY3Rpb24ga2V5cyAoTGVmdCwgUmlnaHQsIGV0Yy4pIHRvIGRpcmVjdGlvbiBzZW1hbnRpY3NcbiAgICogKGdvIGxlZnQsIGdvIHJpZ2h0LCBldGMuKS5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIHRoZSBjb21wb25lbnQgdG8gaW52b2tlIGEgYGtleWRvd25gIG1ldGhvZCB3aGVuIGEga2V5IGlzXG4gICAqIHByZXNzZWQuIFlvdSBjYW4gdXNlIHRoZSBbS2V5Ym9hcmRdKEtleWJvYXJkLm1kKSBtaXhpbiBmb3IgdGhhdCBwdXJwb3NlLCBvclxuICAgKiB3aXJlIHVwIHlvdXIgb3duIGtleWJvYXJkIGhhbmRsaW5nIGFuZCBjYWxsIGBrZXlkb3duYCB5b3Vyc2VsZi5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBjYWxscyBtZXRob2RzIHN1Y2ggYXMgYGdvTGVmdGAgYW5kIGBnb1JpZ2h0YC4gWW91IGNhbiBkZWZpbmVcbiAgICogd2hhdCB0aGF0IG1lYW5zIGJ5IGltcGxlbWVudGluZyB0aG9zZSBtZXRob2RzIHlvdXJzZWxmLiBJZiB5b3Ugd2FudCB0byB1c2VcbiAgICogZGlyZWN0aW9uIGtleXMgdG8gbmF2aWdhdGUgYSBzZWxlY3Rpb24sIHVzZSB0aGlzIG1peGluIHdpdGggdGhlXG4gICAqIFtEaXJlY3Rpb25TZWxlY3Rpb25dKERpcmVjdGlvblNlbGVjdGlvbi5tZCkgbWl4aW4uXG4gICAqL1xuICBjbGFzcyBLZXlib2FyZERpcmVjdGlvbiBleHRlbmRzIGJhc2Uge1xuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIGRvd24uXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLlxuICAgICAqL1xuICAgIGdvRG93bigpIHtcbiAgICAgIGlmIChzdXBlci5nb0Rvd24pIHsgcmV0dXJuIHN1cGVyLmdvRG93bigpOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIHRvIHRoZSBlbmQgKGUuZy4sIG9mIGEgbGlzdCkuXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLlxuICAgICAqL1xuICAgIGdvRW5kKCkge1xuICAgICAgaWYgKHN1cGVyLmdvRW5kKSB7IHJldHVybiBzdXBlci5nb0VuZCgpOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIGxlZnQuXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLlxuICAgICAqL1xuICAgIGdvTGVmdCgpIHtcbiAgICAgIGlmIChzdXBlci5nb0xlZnQpIHsgcmV0dXJuIHN1cGVyLmdvTGVmdCgpOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIHJpZ2h0LlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy5cbiAgICAgKi9cbiAgICBnb1JpZ2h0KCkge1xuICAgICAgaWYgKHN1cGVyLmdvUmlnaHQpIHsgcmV0dXJuIHN1cGVyLmdvUmlnaHQoKTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSB0byB0aGUgc3RhcnQgKGUuZy4sIG9mIGFcbiAgICAgKiBsaXN0KS4gVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLlxuICAgICAqL1xuICAgIGdvU3RhcnQoKSB7XG4gICAgICBpZiAoc3VwZXIuZ29TdGFydCkgeyByZXR1cm4gc3VwZXIuZ29TdGFydCgpOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIHVwLlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy5cbiAgICAgKi9cbiAgICBnb1VwKCkge1xuICAgICAgaWYgKHN1cGVyLmdvVXApIHsgcmV0dXJuIHN1cGVyLmdvVXAoKTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB0aGUgZGlyZWN0aW9uIG9mIHBlcm1pdHRlZCBuYXZpZ2F0aW9uIHdpdGggdGhlIGtleWJvYXJkLlxuICAgICAqXG4gICAgICogQWNjZXB0ZWQgdmFsdWVzIGFyZSBcImhvcml6b250YWxcIiwgXCJ2ZXJ0aWNhbFwiLCBvciBcImJvdGhcIiAodGhlIGRlZmF1bHQpLlxuICAgICAqIElmIHRoaXMgcHJvcGVydHkgaXMgXCJob3Jpem9udGFsXCIsIHRoZSBVcCBBcnJvdyBhbmQgRG93biBBcnJvdyBrZXlzIHdpbGxcbiAgICAgKiBiZSBpZ25vcmVkLiBDb252ZXJzZWx5LCBpZiB0aGlzIGlzIFwidmVydGljYWxcIiwgdGhlIExlZnQgQXJyb3cgYW5kIFJpZ2h0XG4gICAgICogQXJyb3cga2V5cyB3aWxsIGJlIGlnbm9yZWQuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldCBuYXZpZ2F0aW9uQXhpcygpIHtcbiAgICAgIHJldHVybiB0aGlzLl9uYXZpZ2F0aW9uQXhpcyB8fCAnYm90aCc7XG4gICAgfVxuICAgIHNldCBuYXZpZ2F0aW9uQXhpcyh2YWx1ZSkge1xuICAgICAgdGhpcy5fbmF2aWdhdGlvbkF4aXMgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBrZXlkb3duKGV2ZW50KSB7XG4gICAgICBsZXQgaGFuZGxlZDtcblxuICAgICAgbGV0IGF4aXMgPSB0aGlzLm5hdmlnYXRpb25BeGlzO1xuICAgICAgbGV0IGhvcml6b250YWwgPSAoYXhpcyA9PT0gJ2hvcml6b250YWwnIHx8IGF4aXMgPT09ICdib3RoJyk7XG4gICAgICBsZXQgdmVydGljYWwgPSAoYXhpcyA9PT0gJ3ZlcnRpY2FsJyB8fCBheGlzID09PSAnYm90aCcpO1xuXG4gICAgICAvLyBJZ25vcmUgTGVmdC9SaWdodCBrZXlzIHdoZW4gbWV0YUtleSBvciBhbHRLZXkgbW9kaWZpZXIgaXMgYWxzbyBwcmVzc2VkLFxuICAgICAgLy8gYXMgdGhlIHVzZXIgbWF5IGJlIHRyeWluZyB0byBuYXZpZ2F0ZSBiYWNrIG9yIGZvcndhcmQgaW4gdGhlIGJyb3dzZXIuXG4gICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgY2FzZSAzNTogLy8gRW5kXG4gICAgICAgICAgaGFuZGxlZCA9IHRoaXMuZ29FbmQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzNjogLy8gSG9tZVxuICAgICAgICAgIGhhbmRsZWQgPSB0aGlzLmdvU3RhcnQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzNzogLy8gTGVmdFxuICAgICAgICAgIGlmIChob3Jpem9udGFsICYmICFldmVudC5tZXRhS2V5ICYmICFldmVudC5hbHRLZXkpIHtcbiAgICAgICAgICAgIGhhbmRsZWQgPSB0aGlzLmdvTGVmdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzODogLy8gVXBcbiAgICAgICAgICBpZiAodmVydGljYWwpIHtcbiAgICAgICAgICAgIGhhbmRsZWQgPSBldmVudC5hbHRLZXkgPyB0aGlzLmdvU3RhcnQoKSA6IHRoaXMuZ29VcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOTogLy8gUmlnaHRcbiAgICAgICAgICBpZiAoaG9yaXpvbnRhbCAmJiAhZXZlbnQubWV0YUtleSAmJiAhZXZlbnQuYWx0S2V5KSB7XG4gICAgICAgICAgICBoYW5kbGVkID0gdGhpcy5nb1JpZ2h0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQwOiAvLyBEb3duXG4gICAgICAgICAgaWYgKHZlcnRpY2FsKSB7XG4gICAgICAgICAgICBoYW5kbGVkID0gZXZlbnQuYWx0S2V5ID8gdGhpcy5nb0VuZCgpIDogdGhpcy5nb0Rvd24oKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICAvLyBQcmVmZXIgbWl4aW4gcmVzdWx0IGlmIGl0J3MgZGVmaW5lZCwgb3RoZXJ3aXNlIHVzZSBiYXNlIHJlc3VsdC5cbiAgICAgIHJldHVybiBoYW5kbGVkIHx8IChzdXBlci5rZXlkb3duICYmIHN1cGVyLmtleWRvd24oZXZlbnQpKTtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBLZXlib2FyZERpcmVjdGlvbjtcbn07XG4iLCJpbXBvcnQgbWljcm90YXNrIGZyb20gJy4vbWljcm90YXNrJztcblxuLy8gVE9ETzogU2hvdWxkIHRoaXMgYmUgcmVuYW1lZCB0byBzb21ldGhpbmcgbGlrZSBEaXN0cmlidXRlZENoaWxkcmVuQ2hhbmdlZD9cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBPYnNlcnZlQ29udGVudENoYW5nZXMuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCB3aXJlcyB1cCBtdXRhdGlvbiBvYnNlcnZlcnMgdG8gcmVwb3J0IGFueSBjaGFuZ2VzIGluIGFcbiAgICogY29tcG9uZW50J3MgY29udGVudCAoZGlyZWN0IGNoaWxkcmVuLCBvciBub2RlcyBkaXN0cmlidXRlZCB0byBzbG90cykuXG4gICAqXG4gICAqIEZvciB0aGUgdGltZSBiZWluZywgdGhpcyBjYW4gb25seSBzdXBwb3J0IGEgc2luZ2xlIGxldmVsIG9mIGRpc3RyaWJ1dGVkXG4gICAqIGNvbnRlbnQuIFRoYXQgaXMsIGlmIGEgY29tcG9uZW50IGNvbnRhaW5zIGEgc2xvdCwgYW5kIHRoZSBzZXQgb2Ygbm9kZXNcbiAgICogZGlyZWN0bHkgYXNzaWduZWQgdG8gdGhhdCBzbG90IGNoYW5nZXMsIHRoZW4gdGhpcyBtaXhpbiB3aWxsIGRldGVjdCB0aGVcbiAgICogY2hhbmdlLiBIb3dldmVyLCB0aGlzIG1peGluIGRvZXMgbm90IHlldCBkZXRlY3QgY2hhbmdlcyBpbiByZXByb2plY3RlZFxuICAgKiBub2Rlcy4gSWYgYSBjb21wb25lbnQncyBob3N0IHBsYWNlcyBhIHNsb3QgYXMgYSBjaGlsZCBvZiB0aGUgY29tcG9uZW50XG4gICAqIGluc3RhbmNlLCBub2RlcyBhc3NpZ25lZCB0byB0aGUgb3V0ZXIgaG9zdCB3aWxsIGJlIGFzc2lnbmVkIHRvIHRoZSBob3N0J3NcbiAgICogc2xvdCwgdGhlbiByZWFzc2lnbmVkIHRvIHRoZSBzbG90IGVsZW1lbnQgaW5zaWRlIHRoZSBjb21wb25lbnQuIENoYW5nZXMgaW5cbiAgICogc3VjaCByZXByb2plY3RlZCBub2RlcyB3aWxsIG5vdCAoeWV0KSBiZSBkZXRlY3RlZCBieSB0aGlzIG1peGluLlxuICAgKlxuICAgKiBGb3IgY29tcGFyaXNvbiwgc2VlIFBvbHltZXIncyBvYnNlcnZlTm9kZXMgQVBJLCB3aGljaCBkb2VzIHNvbHZlIHRoZVxuICAgKiBwcm9ibGVtIG9mIHRyYWNraW5nIGNoYW5nZXMgaW4gcmVwcm9qZWN0ZWQgY29udGVudC5cbiAgICpcbiAgICogTm90ZTogVGhlIHdlYiBwbGF0Zm9ybSB0ZWFtIGNyZWF0aW5nIHRoZSBzcGVjaWZpY2F0aW9ucyBmb3Igd2ViIGNvbXBvbmVudHNcbiAgICogcGxhbiB0byByZXF1ZXN0IHRoYXQgYSBuZXcgdHlwZSBvZiBNdXRhdGlvbk9ic2VydmVyIG9wdGlvbiBiZSBkZWZpbmVkIHRoYXRcbiAgICogbGV0cyBhIGNvbXBvbmVudCBtb25pdG9yIGNoYW5nZXMgaW4gZGlzdHJpYnV0ZWQgY2hpbGRyZW4uIFRoaXMgbWl4aW4gd2lsbFxuICAgKiBiZSB1cGRhdGVkIHRvIHRha2UgYWR2YW50YWdlIG9mIHRoYXQgTXV0YXRpb25PYnNlcnZlciBvcHRpb24gd2hlbiB0aGF0XG4gICAqIGJlY29tZXMgYXZhaWxhYmxlLlxuICAgKi9cbiAgY2xhc3MgT2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG4gICAgICBvYnNlcnZlQ29udGVudENoYW5nZXModGhpcyk7XG5cbiAgICAgIC8vIE1ha2UgYW4gaW5pdGlhbCBjYWxsIHRvIGNvbnRlbnRDaGFuZ2VkKCkgc28gdGhhdCB0aGUgY29tcG9uZW50IGNhbiBkb1xuICAgICAgLy8gaW5pdGlhbGl6YXRpb24gdGhhdCBpdCBub3JtYWxseSBkb2VzIHdoZW4gY29udGVudCBjaGFuZ2VzLlxuICAgICAgLy9cbiAgICAgIC8vIFRoaXMgd2lsbCBpbnZva2UgY29udGVudENoYW5nZWQoKSBoYW5kbGVycyBpbiBvdGhlciBtaXhpbnMuIEluIG9yZGVyXG4gICAgICAvLyB0aGF0IHRob3NlIG1peGlucyBoYXZlIGEgY2hhbmNlIHRvIGNvbXBsZXRlIHRoZWlyIG93biBpbml0aWFsaXphdGlvbixcbiAgICAgIC8vIHdlIGFkZCB0aGUgY29udGVudENoYW5nZWQoKSBjYWxsIHRvIHRoZSBtaWNyb3Rhc2sgcXVldWUuXG4gICAgICBtaWNyb3Rhc2soKCkgPT4gdGhpcy5jb250ZW50Q2hhbmdlZCgpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIGNvbnRlbnRzIG9mIHRoZSBjb21wb25lbnQgKGluY2x1ZGluZyBkaXN0cmlidXRlZFxuICAgICAqIGNoaWxkcmVuKSBoYXZlIGNoYW5nZWQuXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBhbHNvIGludm9rZWQgd2hlbiBhIGNvbXBvbmVudCBpcyBmaXJzdCBpbnN0YW50aWF0ZWQ7IHRoZVxuICAgICAqIGNvbnRlbnRzIGhhdmUgZXNzZW50aWFsbHkgXCJjaGFuZ2VkXCIgZnJvbSBiZWluZyBub3RoaW5nLiBUaGlzIGFsbG93cyB0aGVcbiAgICAgKiBjb21wb25lbnQgdG8gcGVyZm9ybSBpbml0aWFsIHByb2Nlc3Npbmcgb2YgaXRzIGNoaWxkcmVuLlxuICAgICAqL1xuICAgIGNvbnRlbnRDaGFuZ2VkKCkge1xuICAgICAgaWYgKHN1cGVyLmNvbnRlbnRDaGFuZ2VkKSB7IHN1cGVyLmNvbnRlbnRDaGFuZ2VkKCk7IH1cbiAgICAgIGxldCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnY29udGVudC1jaGFuZ2VkJyk7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgZXZlbnQgaXMgcmFpc2VkIHdoZW4gdGhlIGNvbXBvbmVudCdzIGNvbnRlbnRzIChpbmNsdWRpbmcgZGlzdHJpYnV0ZWRcbiAgICAgKiBjaGlsZHJlbikgaGF2ZSBjaGFuZ2VkLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIE9ic2VydmVDb250ZW50Q2hhbmdlc1xuICAgICAqIEBldmVudCBjb250ZW50LWNoYW5nZWRcbiAgICAgKi9cbiAgfVxuXG4gIHJldHVybiBPYnNlcnZlQ29udGVudENoYW5nZXM7XG59O1xuXG5cbi8vIFRPRE86IERlY2lkZSB3aGV0aGVyIHdlIHdhbnQgYW4gb3B0aW9uIHRvIHRyYWNrIGNoYW5nZXMgdG8gY2hpbGRyZW5cbi8vIGF0dHJpYnV0ZXMuXG5mdW5jdGlvbiBvYnNlcnZlQ29udGVudENoYW5nZXMoZWxlbWVudCkge1xuICBlbGVtZW50Ll9jb250ZW50Q2hhbmdlT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PlxuICAgIGVsZW1lbnQuY29udGVudENoYW5nZWQoKVxuICApO1xuICBlbGVtZW50Ll9jb250ZW50Q2hhbmdlT2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50LCB7XG4gICAgLy8gYXR0cmlidXRlczogdHJ1ZSxcbiAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlLFxuICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICBzdWJ0cmVlOiB0cnVlXG4gIH0pO1xufVxuIiwiLy8gVXNlZCB0byBhc3NpZ24gdW5pcXVlIElEcyB0byBpdGVtIGVsZW1lbnRzIHdpdGhvdXQgSURzLlxubGV0IGlkQ291bnQgPSAwO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggU2VsZWN0aW9uQXJpYUFjdGl2ZS4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIHRyZWF0cyB0aGUgc2VsZWN0ZWQgaXRlbSBpbiBhIGxpc3QgYXMgdGhlIGFjdGl2ZSBpdGVtIGluIEFSSUFcbiAgICogYWNjZXNzaWJpbGl0eSB0ZXJtcy5cbiAgICpcbiAgICogSGFuZGxpbmcgQVJJQSBzZWxlY3Rpb24gc3RhdGUgcHJvcGVybHkgaXMgYWN0dWFsbHkgcXVpdGUgY29tcGxleDpcbiAgICpcbiAgICogKiBUaGUgaXRlbXMgaW4gdGhlIGxpc3QgbmVlZCB0byBiZSBpbmRpY2F0ZWQgYXMgcG9zc2libGUgaXRlbXMgdmlhIGFuIEFSSUFcbiAgICogICBgcm9sZWAgYXR0cmlidXRlIHZhbHVlIHN1Y2ggYXMgXCJvcHRpb25cIi5cbiAgICogKiBUaGUgc2VsZWN0ZWQgaXRlbSBuZWVkIHRvIGJlIG1hcmtlZCBhcyBzZWxlY3RlZCBieSBzZXR0aW5nIHRoZSBpdGVtJ3NcbiAgICogICBgYXJpYS1zZWxlY3RlZGAgYXR0cmlidXRlIHRvIHRydWUgKmFuZCogdGhlIG90aGVyIGl0ZW1zIG5lZWQgYmUgbWFya2VkIGFzXG4gICAqICAgKm5vdCogc2VsZWN0ZWQgYnkgc2V0dGluZyBgYXJpYS1zZWxlY3RlZGAgdG8gZmFsc2UuXG4gICAqICogVGhlIG91dGVybW9zdCBlbGVtZW50IHdpdGggdGhlIGtleWJvYXJkIGZvY3VzIG5lZWRzIHRvIGhhdmUgYXR0cmlidXRlc1xuICAgKiAgIHNldCBvbiBpdCBzbyB0aGF0IHRoZSBzZWxlY3Rpb24gaXMga25vd2FibGUgYXQgdGhlIGxpc3QgbGV2ZWwgdmlhIHRoZVxuICAgKiAgIGBhcmlhLWFjdGl2ZWRlc2NlbmRhbnRgIGF0dHJpYnV0ZS5cbiAgICogKiBVc2Ugb2YgYGFyaWEtYWN0aXZlZGVzY2VuZGFudGAgaW4gdHVybiByZXF1aXJlcyB0aGF0IGFsbCBpdGVtcyBpbiB0aGVcbiAgICogICBsaXN0IGhhdmUgSUQgYXR0cmlidXRlcyBhc3NpZ25lZCB0byB0aGVtLlxuICAgKlxuICAgKiBUaGlzIG1peGluIHRyaWVzIHRvIGFkZHJlc3MgYWxsIG9mIHRoZSBhYm92ZSByZXF1aXJlbWVudHMuIFRvIHRoYXQgZW5kLFxuICAgKiB0aGlzIG1peGluIHdpbGwgYXNzaWduIGdlbmVyYXRlZCBJRHMgdG8gYW55IGl0ZW0gdGhhdCBkb2Vzbid0IGFscmVhZHkgaGF2ZVxuICAgKiBhbiBJRC5cbiAgICpcbiAgICogQVJJQSByZWxpZXMgb24gZWxlbWVudHMgdG8gcHJvdmlkZSBgcm9sZWAgYXR0cmlidXRlcy4gVGhpcyBtaXhpbiB3aWxsIGFwcGx5XG4gICAqIGEgZGVmYXVsdCByb2xlIG9mIFwibGlzdGJveFwiIG9uIHRoZSBvdXRlciBsaXN0IGlmIGl0IGRvZXNuJ3QgYWxyZWFkeSBoYXZlIGFuXG4gICAqIGV4cGxpY2l0IHJvbGUuIFNpbWlsYXJseSwgdGhpcyBtaXhpbiB3aWxsIGFwcGx5IGEgZGVmYXVsdCByb2xlIG9mIFwib3B0aW9uXCJcbiAgICogdG8gYW55IGxpc3QgaXRlbSB0aGF0IGRvZXMgbm90IGFscmVhZHkgaGF2ZSBhIHJvbGUgc3BlY2lmaWVkLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGV4cGVjdHMgYSBzZXQgb2YgbWVtYmVycyB0aGF0IG1hbmFnZSB0aGUgc3RhdGUgb2YgdGhlIHNlbGVjdGlvbjpcbiAgICogYGFwcGx5U2VsZWN0aW9uYCwgYGl0ZW1BZGRlZGAsIGFuZCBgc2VsZWN0ZWRJbmRleGAuIFlvdSBjYW4gc3VwcGx5IHRoZXNlXG4gICAqIHlvdXJzZWxmLCBvciBkbyBzbyB2aWEgdGhlIFtJdGVtc1NlbGVjdGlvbl0oSXRlbXNTZWxlY3Rpb24ubWQpIG1peGluLlxuICAgKi9cbiAgY2xhc3MgU2VsZWN0aW9uQXJpYUFjdGl2ZSBleHRlbmRzIGJhc2Uge1xuXG4gICAgYXBwbHlTZWxlY3Rpb24oaXRlbSwgc2VsZWN0ZWQpIHtcbiAgICAgIGlmIChzdXBlci5hcHBseVNlbGVjdGlvbikgeyBzdXBlci5hcHBseVNlbGVjdGlvbihpdGVtLCBzZWxlY3RlZCk7IH1cbiAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgc2VsZWN0ZWQpO1xuICAgICAgbGV0IGl0ZW1JZCA9IGl0ZW0uaWQ7XG4gICAgICBpZiAoaXRlbUlkKSB7XG4gICAgICAgIGxldCBvdXRlcm1vc3QgPSB0aGlzLmNvbGxlY3RpdmUgP1xuICAgICAgICAgIHRoaXMuY29sbGVjdGl2ZS5vdXRlcm1vc3RFbGVtZW50IDpcbiAgICAgICAgICB0aGlzO1xuICAgICAgICBvdXRlcm1vc3Quc2V0QXR0cmlidXRlKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnLCBpdGVtSWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbGxlY3RpdmVDaGFuZ2VkKCkge1xuICAgICAgaWYgKHN1cGVyLmNvbGxlY3RpdmVDaGFuZ2VkKSB7IHN1cGVyLmNvbGxlY3RpdmVDaGFuZ2VkKCk7IH1cblxuICAgICAgLy8gRW5zdXJlIHRoZSBvdXRlcm1vc3QgYXNwZWN0IGhhcyBhbiBBUklBIHJvbGUuXG4gICAgICBsZXQgb3V0ZXJtb3N0RWxlbWVudCA9IHRoaXMuY29sbGVjdGl2ZS5vdXRlcm1vc3RFbGVtZW50O1xuICAgICAgaWYgKCFvdXRlcm1vc3RFbGVtZW50LmdldEF0dHJpYnV0ZSgncm9sZScpKSB7XG4gICAgICAgIC8vIFRyeSB0byBwcm9tb3RlIGFuIEFSSUEgcm9sZSBmcm9tIGFuIGlubmVyIGVsZW1lbnQuIElmIG5vbmUgaXMgZm91bmQsXG4gICAgICAgIC8vIHVzZSBhIGRlZmF1bHQgcm9sZS5cbiAgICAgICAgbGV0IHJvbGUgPSBnZXRDb2xsZWN0aXZlQXJpYVJvbGUodGhpcy5jb2xsZWN0aXZlKSB8fCAnbGlzdGJveCc7XG4gICAgICAgIG91dGVybW9zdEVsZW1lbnQuc2V0QXR0cmlidXRlKCdyb2xlJywgcm9sZSk7XG4gICAgICB9XG4gICAgICBpZiAoIW91dGVybW9zdEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnKSkge1xuICAgICAgICAvLyBUcnkgdG8gcHJvbW90ZSBhbiBBUklBIGFjdGl2ZWRlc2NlbmRhbnQgdmFsdWUgZnJvbSBhbiBpbm5lciBlbGVtZW50LlxuICAgICAgICBsZXQgZGVzY2VuZGFudCA9IGdldENvbGxlY3RpdmVBcmlhQWN0aXZlRGVzY2VuZGFudCh0aGlzLmNvbGxlY3RpdmUpO1xuICAgICAgICBpZiAoZGVzY2VuZGFudCkge1xuICAgICAgICAgIG91dGVybW9zdEVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnLCBkZXNjZW5kYW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBSZW1vdmUgdGhlIEFSSUEgcm9sZSBhbmQgYWN0aXZlZGVzY2VuZGFudCB2YWx1ZXMgZnJvbSB0aGUgY29sbGVjdGl2ZSdzXG4gICAgICAvLyBpbm5lciBlbGVtZW50cy5cbiAgICAgIHRoaXMuY29sbGVjdGl2ZS5lbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBpZiAoZWxlbWVudCAhPT0gb3V0ZXJtb3N0RWxlbWVudCkge1xuICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnKTtcbiAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgncm9sZScsICdub25lJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cbiAgICAgIGlmICghdGhpcy5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgncm9sZScsICdsaXN0Ym94Jyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaXRlbUFkZGVkKGl0ZW0pIHtcbiAgICAgIGlmIChzdXBlci5pdGVtQWRkZWQpIHsgc3VwZXIuaXRlbUFkZGVkKGl0ZW0pOyB9XG5cbiAgICAgIGlmICghaXRlbS5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSkge1xuICAgICAgICAvLyBBc3NpZ24gYSBkZWZhdWx0IEFSSUEgcm9sZS5cbiAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnb3B0aW9uJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIEVuc3VyZSBlYWNoIGl0ZW0gaGFzIGFuIElEIHNvIHdlIGNhbiBzZXQgYXJpYS1hY3RpdmVkZXNjZW5kYW50IG9uIHRoZVxuICAgICAgLy8gb3ZlcmFsbCBsaXN0IHdoZW5ldmVyIHRoZSBzZWxlY3Rpb24gY2hhbmdlcy5cbiAgICAgIC8vXG4gICAgICAvLyBUaGUgSUQgd2lsbCB0YWtlIHRoZSBmb3JtIG9mIGEgYmFzZSBJRCBwbHVzIGEgdW5pcXVlIGludGVnZXIuIFRoZSBiYXNlXG4gICAgICAvLyBJRCB3aWxsIGJlIGluY29ycG9yYXRlIHRoZSBjb21wb25lbnQncyBvd24gSUQuIEUuZy4sIGlmIGEgY29tcG9uZW50IGhhc1xuICAgICAgLy8gSUQgXCJmb29cIiwgdGhlbiBpdHMgaXRlbXMgd2lsbCBoYXZlIElEcyB0aGF0IGxvb2sgbGlrZSBcIl9mb29PcHRpb24xXCIuIElmXG4gICAgICAvLyB0aGUgY29tcG5lbnQgaGFzIG5vIElEIGl0c2VsZiwgaXRzIGl0ZW1zIHdpbGwgZ2V0IElEcyB0aGF0IGxvb2sgbGlrZVxuICAgICAgLy8gXCJfb3B0aW9uMVwiLiBJdGVtIElEcyBhcmUgcHJlZml4ZWQgd2l0aCBhbiB1bmRlcnNjb3JlIHRvIGRpZmZlcmVudGlhdGVcbiAgICAgIC8vIHRoZW0gZnJvbSBtYW51YWxseS1hc3NpZ25lZCBJRHMsIGFuZCB0byBtaW5pbWl6ZSB0aGUgcG90ZW50aWFsIGZvciBJRFxuICAgICAgLy8gY29uZmxpY3RzLlxuICAgICAgaWYgKCFpdGVtLmlkKSB7XG4gICAgICAgIGxldCBiYXNlSWQgPSB0aGlzLmlkID9cbiAgICAgICAgICAgIFwiX1wiICsgdGhpcy5pZCArIFwiT3B0aW9uXCIgOlxuICAgICAgICAgICAgXCJfb3B0aW9uXCI7XG4gICAgICAgIGl0ZW0uaWQgPSBiYXNlSWQgKyBpZENvdW50Kys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdGVkSXRlbSgpIHtcbiAgICAgIHJldHVybiBzdXBlci5zZWxlY3RlZEl0ZW07XG4gICAgfVxuICAgIHNldCBzZWxlY3RlZEl0ZW0oaXRlbSkge1xuICAgICAgaWYgKCdzZWxlY3RlZEl0ZW0nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkSXRlbSA9IGl0ZW07IH1cbiAgICAgIC8vIENhdGNoIHRoZSBjYXNlIHdoZXJlIHRoZSBzZWxlY3Rpb24gaXMgcmVtb3ZlZC5cbiAgICAgIGlmIChpdGVtID09IG51bGwpIHtcbiAgICAgICAgbGV0IG91dGVybW9zdCA9IHRoaXMuY29sbGVjdGl2ZSA/XG4gICAgICAgICAgdGhpcy5jb2xsZWN0aXZlLm91dGVybW9zdEVsZW1lbnQgOlxuICAgICAgICAgIHRoaXM7XG4gICAgICAgIG91dGVybW9zdC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIFNlbGVjdGlvbkFyaWFBY3RpdmU7XG59O1xuXG5cbi8vIFJldHVybiB0aGUgZmlyc3QgQVJJQSBhY3RpdmVkZXNjZW5kYW50IGRlZmluZWQgYnkgdGhlIGNvbGxlY3RpdmUuXG5mdW5jdGlvbiBnZXRDb2xsZWN0aXZlQXJpYUFjdGl2ZURlc2NlbmRhbnQoY29sbGVjdGl2ZSkge1xuICBsZXQgZGVzY2VuZGFudHMgPSBjb2xsZWN0aXZlLmVsZW1lbnRzLm1hcChlbGVtZW50ID0+IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnKSk7XG4gIGxldCBub25OdWxsRGVzY2VuZGFudHMgPSBkZXNjZW5kYW50cy5maWx0ZXIoZGVzY2VuZGFudCA9PiBkZXNjZW5kYW50ICE9PSBudWxsKTtcbiAgcmV0dXJuIG5vbk51bGxEZXNjZW5kYW50c1swXTtcbn1cblxuXG4vLyBSZXR1cm4gdGhlIGZpcnN0IEFSSUEgbGFiZWwgZGVmaW5lZCBieSB0aGUgY29sbGVjdGl2ZS5cbmZ1bmN0aW9uIGdldENvbGxlY3RpdmVBcmlhUm9sZShjb2xsZWN0aXZlKSB7XG4gIGxldCByb2xlcyA9IGNvbGxlY3RpdmUuZWxlbWVudHMubWFwKGVsZW1lbnQgPT4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSk7XG4gIGxldCBub25OdWxsUm9sZXMgPSByb2xlcy5maWx0ZXIocm9sZSA9PiByb2xlICE9PSBudWxsKTtcbiAgcmV0dXJuIG5vbk51bGxSb2xlc1swXTtcbn1cbiIsIi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggU2hhZG93RWxlbWVudFJlZmVyZW5jZXMuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB0byBjcmVhdGUgcmVmZXJlbmNlcyB0byBlbGVtZW50cyBpbiBhIGNvbXBvbmVudCdzIFNoYWRvdyBET00gc3VidHJlZS5cbiAgICpcbiAgICogVGhpcyBhZGRzIGEgbWVtYmVyIG9uIHRoZSBjb21wb25lbnQgY2FsbGVkIGB0aGlzLiRgIHRoYXQgY2FuIGJlIHVzZWQgdG9cbiAgICogcmVmZXJlbmNlIHNoYWRvdyBlbGVtZW50cyB3aXRoIElEcy4gRS5nLiwgaWYgY29tcG9uZW50J3Mgc2hhZG93IGNvbnRhaW5zIGFuXG4gICAqIGVsZW1lbnQgYDxidXR0b24gaWQ9XCJmb29cIj5gLCB0aGVuIHRoaXMgbWl4aW4gd2lsbCBjcmVhdGUgYSBtZW1iZXJcbiAgICogYHRoaXMuJC5mb29gIHRoYXQgcG9pbnRzIHRvIHRoYXQgYnV0dG9uLlxuICAgKlxuICAgKiBTdWNoIHJlZmVyZW5jZXMgc2ltcGxpZnkgYSBjb21wb25lbnQncyBhY2Nlc3MgdG8gaXRzIG93biBlbGVtZW50cy4gSW5cbiAgICogZXhjaGFuZ2UsIHRoaXMgbWl4aW4gdHJhZGVzIG9mZiBhIG9uZS10aW1lIGNvc3Qgb2YgcXVlcnlpbmcgYWxsIGVsZW1lbnRzIGluXG4gICAqIHRoZSBzaGFkb3cgdHJlZSBpbnN0ZWFkIG9mIHBheWluZyBhbiBvbmdvaW5nIGNvc3QgdG8gcXVlcnkgZm9yIGFuIGVsZW1lbnRcbiAgICogZWFjaCB0aW1lIHRoZSBjb21wb25lbnQgd2FudHMgdG8gaW5zcGVjdCBvciBtYW5pcHVsYXRlIGl0LlxuICAgKlxuICAgKiBUaGlzIG1peGluIGV4cGVjdHMgdGhlIGNvbXBvbmVudCB0byBkZWZpbmUgYSBTaGFkb3cgRE9NIHN1YnRyZWUuIFlvdSBjYW5cbiAgICogY3JlYXRlIHRoYXQgdHJlZSB5b3Vyc2VsZiwgb3IgbWFrZSB1c2Ugb2YgdGhlXG4gICAqIFtTaGFkb3dUZW1wbGF0ZV0oU2hhZG93VGVtcGxhdGUubWQpIG1peGluLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGlzIGluc3BpcmVkIGJ5IFBvbHltZXIncyBbYXV0b21hdGljXG4gICAqIG5vZGUgZmluZGluZ10oaHR0cHM6Ly93d3cucG9seW1lci1wcm9qZWN0Lm9yZy8xLjAvZG9jcy9kZXZndWlkZS9sb2NhbC1kb20uaHRtbCNub2RlLWZpbmRpbmcpXG4gICAqIGZlYXR1cmUuXG4gICAqL1xuICBjbGFzcyBTaGFkb3dFbGVtZW50UmVmZXJlbmNlcyBleHRlbmRzIGJhc2Uge1xuXG4gICAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuICAgICAgaWYgKHRoaXMuc2hhZG93Um9vdCkge1xuICAgICAgICAvLyBMb29rIGZvciBlbGVtZW50cyBpbiB0aGUgc2hhZG93IHN1YnRyZWUgdGhhdCBoYXZlIGlkIGF0dHJpYnV0ZXMuXG4gICAgICAgIC8vIEFuIGFsdGVybmF0aXZlbHkgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtaXhpbiB3b3VsZCBiZSB0byBqdXN0IGRlZmluZVxuICAgICAgICAvLyBhIHRoaXMuJCBnZXR0ZXIgdGhhdCBsYXppbHkgZG9lcyB0aGlzIHNlYXJjaCB0aGUgZmlyc3QgdGltZSBzb21lb25lXG4gICAgICAgIC8vIHRyaWVzIHRvIGFjY2VzcyB0aGlzLiQuIFRoYXQgbWlnaHQgaW50cm9kdWNlIHNvbWUgY29tcGxleGl0eSDigJMgaWYgdGhlXG4gICAgICAgIC8vIHRoZSB0cmVlIGNoYW5nZWQgYWZ0ZXIgaXQgd2FzIGZpcnN0IHBvcHVsYXRlZCwgdGhlIHJlc3VsdCBvZlxuICAgICAgICAvLyBzZWFyY2hpbmcgZm9yIGEgbm9kZSBtaWdodCBiZSBzb21ld2hhdCB1bnByZWRpY3RhYmxlLlxuICAgICAgICB0aGlzLiQgPSB7fTtcbiAgICAgICAgbGV0IG5vZGVzV2l0aElkcyA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yQWxsKCdbaWRdJyk7XG4gICAgICAgIFtdLmZvckVhY2guY2FsbChub2Rlc1dpdGhJZHMsIG5vZGUgPT4ge1xuICAgICAgICAgIGxldCBpZCA9IG5vZGUuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgICAgICAgIHRoaXMuJFtpZF0gPSBub2RlO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29sbGVjdGlvbiBvZiByZWZlcmVuY2VzIHRvIHRoZSBlbGVtZW50cyB3aXRoIElEcyBpbiBhIGNvbXBvbmVudCdzXG4gICAgICogU2hhZG93IERPTSBzdWJ0cmVlLlxuICAgICAqXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKiBAbWVtYmVyICRcbiAgICAgKi9cbiAgfVxuXG4gIHJldHVybiBTaGFkb3dFbGVtZW50UmVmZXJlbmNlcztcbn07XG4iLCIvLyBGZWF0dXJlIGRldGVjdGlvbiBmb3Igb2xkIFNoYWRvdyBET00gdjAuXG5jb25zdCBVU0lOR19TSEFET1dfRE9NX1YwID0gKHR5cGVvZiBIVE1MRWxlbWVudC5wcm90b3R5cGUuY3JlYXRlU2hhZG93Um9vdCAhPT0gJ3VuZGVmaW5lZCcpO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggU2hhZG93VGVtcGxhdGUuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiBmb3Igc3RhbXBpbmcgYSB0ZW1wbGF0ZSBpbnRvIGEgU2hhZG93IERPTSBzdWJ0cmVlIHVwb24gY29tcG9uZW50XG4gICAqIGluc3RhbnRpYXRpb24uXG4gICAqXG4gICAqIFRvIHVzZSB0aGlzIG1peGluLCBkZWZpbmUgYSBgdGVtcGxhdGVgIHByb3BlcnR5IGFzIGEgc3RyaW5nIG9yIEhUTUxcbiAgICogYDx0ZW1wbGF0ZT5gIGVsZW1lbnQ6XG4gICAqXG4gICAqICAgICBjbGFzcyBNeUVsZW1lbnQgZXh0ZW5kcyBTaGFkb3dUZW1wbGF0ZShIVE1MRWxlbWVudCkge1xuICAgKiAgICAgICBnZXQgdGVtcGxhdGUoKSB7XG4gICAqICAgICAgICAgcmV0dXJuIGBIZWxsbywgPGVtPndvcmxkPC9lbT4uYDtcbiAgICogICAgICAgfVxuICAgKiAgICAgfVxuICAgKlxuICAgKiBXaGVuIHlvdXIgY29tcG9uZW50IGNsYXNzIGlzIGluc3RhbnRpYXRlZCwgYSBzaGFkb3cgcm9vdCB3aWxsIGJlIGNyZWF0ZWQgb25cbiAgICogdGhlIGluc3RhbmNlLCBhbmQgdGhlIGNvbnRlbnRzIG9mIHRoZSB0ZW1wbGF0ZSB3aWxsIGJlIGNsb25lZCBpbnRvIHRoZVxuICAgKiBzaGFkb3cgcm9vdC4gSWYgeW91ciBjb21wb25lbnQgZG9lcyBub3QgZGVmaW5lIGEgYHRlbXBsYXRlYCBwcm9wZXJ0eSwgdGhpc1xuICAgKiBtaXhpbiBoYXMgbm8gZWZmZWN0LlxuICAgKlxuICAgKiBGb3IgdGhlIHRpbWUgYmVpbmcsIHRoaXMgZXh0ZW5zaW9uIHJldGFpbnMgc3VwcG9ydCBmb3IgU2hhZG93IERPTSB2MC4gVGhhdFxuICAgKiB3aWxsIGV2ZW50dWFsbHkgYmUgZGVwcmVjYXRlZCBhcyBicm93c2VycyAoYW5kIHRoZSBTaGFkb3cgRE9NIHBvbHlmaWxsKVxuICAgKiBpbXBsZW1lbnQgU2hhZG93IERPTSB2MS5cbiAgICovXG4gIGNsYXNzIFNoYWRvd1RlbXBsYXRlIGV4dGVuZHMgYmFzZSB7XG5cbiAgICAvKlxuICAgICAqIElmIHRoZSBjb21wb25lbnQgZGVmaW5lcyBhIHRlbXBsYXRlLCBhIHNoYWRvdyByb290IHdpbGwgYmUgY3JlYXRlZCBvbiB0aGVcbiAgICAgKiBjb21wb25lbnQgaW5zdGFuY2UsIGFuZCB0aGUgdGVtcGxhdGUgc3RhbXBlZCBpbnRvIGl0LlxuICAgICAqL1xuICAgIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cbiAgICAgIGxldCB0ZW1wbGF0ZSA9IHRoaXMudGVtcGxhdGU7XG4gICAgICAvLyBUT0RPOiBTYXZlIHRoZSBwcm9jZXNzZWQgdGVtcGxhdGUgd2l0aCB0aGUgY29tcG9uZW50J3MgY2xhc3MgcHJvdG90eXBlXG4gICAgICAvLyBzbyBpdCBkb2Vzbid0IG5lZWQgdG8gYmUgcHJvY2Vzc2VkIHdpdGggZXZlcnkgaW5zdGFudGlhdGlvbi5cbiAgICAgIGlmICh0ZW1wbGF0ZSkge1xuXG4gICAgICAgIGlmICh0eXBlb2YgdGVtcGxhdGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgLy8gVXBncmFkZSBwbGFpbiBzdHJpbmcgdG8gcmVhbCB0ZW1wbGF0ZS5cbiAgICAgICAgICB0ZW1wbGF0ZSA9IGNyZWF0ZVRlbXBsYXRlV2l0aElubmVySFRNTCh0ZW1wbGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoVVNJTkdfU0hBRE9XX0RPTV9WMCkge1xuICAgICAgICAgIHBvbHlmaWxsU2xvdFdpdGhDb250ZW50KHRlbXBsYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh3aW5kb3cuU2hhZG93RE9NUG9seWZpbGwpIHtcbiAgICAgICAgICBzaGltVGVtcGxhdGVTdHlsZXModGVtcGxhdGUsIHRoaXMubG9jYWxOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRoaXMubG9nKFwiY2xvbmluZyB0ZW1wbGF0ZSBpbnRvIHNoYWRvdyByb290XCIpO1xuICAgICAgICBsZXQgcm9vdCA9IFVTSU5HX1NIQURPV19ET01fVjAgP1xuICAgICAgICAgIHRoaXMuY3JlYXRlU2hhZG93Um9vdCgpIDogICAgICAgICAgICAgLy8gU2hhZG93IERPTSB2MFxuICAgICAgICAgIHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pOyAgLy8gU2hhZG93IERPTSB2MVxuICAgICAgICBsZXQgY2xvbmUgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRlbXBsYXRlLmNvbnRlbnQsIHRydWUpO1xuICAgICAgICByb290LmFwcGVuZENoaWxkKGNsb25lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBTaGFkb3dUZW1wbGF0ZTtcbn07XG5cblxuLy8gQ29udmVydCBhIHBsYWluIHN0cmluZyBvZiBIVE1MIGludG8gYSByZWFsIHRlbXBsYXRlIGVsZW1lbnQuXG5mdW5jdGlvbiBjcmVhdGVUZW1wbGF0ZVdpdGhJbm5lckhUTUwoaW5uZXJIVE1MKSB7XG4gIGxldCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gIC8vIFJFVklFVzogSXMgdGhlcmUgYW4gZWFzaWVyIHdheSB0byBkbyB0aGlzP1xuICAvLyBXZSdkIGxpa2UgdG8ganVzdCBzZXQgaW5uZXJIVE1MIG9uIHRoZSB0ZW1wbGF0ZSBjb250ZW50LCBidXQgc2luY2UgaXQnc1xuICAvLyBhIERvY3VtZW50RnJhZ21lbnQsIHRoYXQgZG9lc24ndCB3b3JrLlxuICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gIHdoaWxlIChkaXYuY2hpbGROb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgdGVtcGxhdGUuY29udGVudC5hcHBlbmRDaGlsZChkaXYuY2hpbGROb2Rlc1swXSk7XG4gIH1cbiAgcmV0dXJuIHRlbXBsYXRlO1xufVxuXG4vLyBSZXBsYWNlIG9jY3VyZW5jZXMgb2YgdjEgc2xvdCBlbGVtZW50cyB3aXRoIHYwIGNvbnRlbnQgZWxlbWVudHMuXG4vLyBUaGlzIGRvZXMgbm90IHlldCBtYXAgbmFtZWQgc2xvdHMgdG8gY29udGVudCBzZWxlY3QgY2xhdXNlcy5cbmZ1bmN0aW9uIHBvbHlmaWxsU2xvdFdpdGhDb250ZW50KHRlbXBsYXRlKSB7XG4gIFtdLmZvckVhY2guY2FsbCh0ZW1wbGF0ZS5jb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3Nsb3QnKSwgc2xvdEVsZW1lbnQgPT4ge1xuICAgIGxldCBjb250ZW50RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NvbnRlbnQnKTtcbiAgICBzbG90RWxlbWVudC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChjb250ZW50RWxlbWVudCwgc2xvdEVsZW1lbnQpO1xuICB9KTtcbn1cblxuLy8gSW52b2tlIGJhc2ljIHN0eWxlIHNoaW1taW5nIHdpdGggU2hhZG93Q1NTLlxuZnVuY3Rpb24gc2hpbVRlbXBsYXRlU3R5bGVzKHRlbXBsYXRlLCB0YWcpIHtcbiAgd2luZG93LldlYkNvbXBvbmVudHMuU2hhZG93Q1NTLnNoaW1TdHlsaW5nKHRlbXBsYXRlLmNvbnRlbnQsIHRhZyk7XG59XG4iLCIvKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFN3aXBlRGlyZWN0aW9uLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggbWFwcyB0b3VjaCBnZXN0dXJlcyAoc3dpcGUgbGVmdCwgc3dpcGUgcmlnaHQpIHRvIGRpcmVjdGlvblxuICAgKiBzZW1hbnRpY3MgKGdvIHJpZ2h0LCBnbyBsZWZ0KS5cbiAgICpcbiAgICogQnkgZGVmYXVsdCwgdGhpcyBtaXhpbiBwcmVzZW50cyBubyB1c2VyLXZpc2libGUgZWZmZWN0czsgaXQganVzdCBpbmRpY2F0ZXMgYVxuICAgKiBkaXJlY3Rpb24gaW4gd2hpY2ggdGhlIHVzZXIgaXMgY3VycmVudGx5IHN3aXBpbmcgb3IgaGFzIGZpbmlzaGVkIHN3aXBpbmcuIFRvXG4gICAqIG1hcCB0aGUgZGlyZWN0aW9uIHRvIGEgY2hhbmdlIGluIHNlbGVjdGlvbiwgdXNlIHRoZVxuICAgKiBbRGlyZWN0aW9uU2VsZWN0aW9uXShEaXJlY3Rpb25TZWxlY3Rpb24ubWQpIG1peGluLlxuICAgKi9cbiAgY2xhc3MgU3dpcGVEaXJlY3Rpb24gZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cblxuICAgICAgLy8gRm9yIHRoZSBjb21wb25lbnQgdG8gcmVjZWl2ZSBQb2ludGVyRXZlbnRzIGluIElFL0VkZ2UsIHdlIG5lZWQgdG8gc2V0XG4gICAgICAvLyB0b3VjaC1hY3Rpb246IG5vbmUuIE9ubHkgbWFrZSB0aGlzIGNoYW5nZSBpZiB0b3VjaC1hY3Rpb24gaXMgY3VycmVudGx5XG4gICAgICAvLyB0aGUgZGVmYXVsdCB2YWx1ZSAoXCJhdXRvXCIpLCBpbiBjYXNlIHRoZSBkZXZlbG9wZXIga25vd3MgYmV0dGVyIHRoYW4gd2VcbiAgICAgIC8vIGRvIHdoYXQgdGhleSB3YW50IGluIHRoZWlyIHBhcnRpY3VsYXIgY29udGV4dC5cbiAgICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKHRoaXMpLnRvdWNoQWN0aW9uID09PSAnYXV0bycpIHtcbiAgICAgICAgdGhpcy5zdHlsZS50b3VjaEFjdGlvbiA9ICdub25lJztcbiAgICAgIH1cblxuICAgICAgdGhpcy50cmF2ZWxGcmFjdGlvbiA9IDA7XG5cbiAgICAgIC8vIFRPRE86IFRvdWNoIGV2ZW50cyBjb3VsZCBiZSBmYWN0b3JlZCBvdXQgaW50byBpdHMgb3duIG1peGluLlxuXG4gICAgICAvLyBJbiBhbGwgdG91Y2ggZXZlbnRzLCBvbmx5IGhhbmRsZSBzaW5nbGUgdG91Y2hlcy4gV2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgLy8gaW5hZHZlcnRlbnRseSBkbyB3b3JrIHdoZW4gdGhlIHVzZXIncyB0cnlpbmcgdG8gcGluY2gtem9vbSBmb3IgZXhhbXBsZS5cbiAgICAgIC8vIFRPRE86IEV2ZW4gYmV0dGVyIGFwcHJvYWNoIHRoYW4gYmVsb3cgd291bGQgYmUgdG8gaWdub3JlIHRvdWNoZXMgYWZ0ZXJcbiAgICAgIC8vIHRoZSBmaXJzdCBpZiB0aGUgdXNlciBoYXMgYWxyZWFkeSBiZWd1biBhIHN3aXBlLlxuICAgICAgaWYgKHdpbmRvdy5Qb2ludGVyRXZlbnQpIHtcbiAgICAgICAgLy8gUHJlZmVyIGxpc3RlbmluZyB0byBzdGFuZGFyZCBwb2ludGVyIGV2ZW50cy5cbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIGV2ZW50ID0+IHtcbiAgICAgICAgICBpZiAoaXNFdmVudEZvclBlbk9yUHJpbWFyeVRvdWNoKGV2ZW50KSkge1xuICAgICAgICAgICAgdG91Y2hTdGFydCh0aGlzLCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJtb3ZlJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGlmIChpc0V2ZW50Rm9yUGVuT3JQcmltYXJ5VG91Y2goZXZlbnQpKSB7XG4gICAgICAgICAgICBsZXQgaGFuZGxlZCA9IHRvdWNoTW92ZSh0aGlzLCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcbiAgICAgICAgICAgIGlmIChoYW5kbGVkKSB7XG4gICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVydXAnLCBldmVudCA9PiB7XG4gICAgICAgICAgaWYgKGlzRXZlbnRGb3JQZW5PclByaW1hcnlUb3VjaChldmVudCkpIHtcbiAgICAgICAgICAgIHRvdWNoRW5kKHRoaXMsIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBQb2ludGVyIGV2ZW50cyBub3Qgc3VwcG9ydGVkIC0tIGxpc3RlbiB0byBvbGRlciB0b3VjaCBldmVudHMuXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5fbXVsdGlUb3VjaCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQudG91Y2hlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIGxldCBjbGllbnRYID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgICAgIGxldCBjbGllbnRZID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WTtcbiAgICAgICAgICAgIHRvdWNoU3RhcnQodGhpcywgY2xpZW50WCwgY2xpZW50WSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX211bHRpVG91Y2ggPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGlmICghdGhpcy5fbXVsdGlUb3VjaCAmJiBldmVudC50b3VjaGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgbGV0IGNsaWVudFggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICAgICAgbGV0IGNsaWVudFkgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZO1xuICAgICAgICAgICAgbGV0IGhhbmRsZWQgPSB0b3VjaE1vdmUodGhpcywgY2xpZW50WCwgY2xpZW50WSk7XG4gICAgICAgICAgICBpZiAoaGFuZGxlZCkge1xuICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBldmVudCA9PiB7XG4gICAgICAgICAgaWYgKGV2ZW50LnRvdWNoZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAvLyBBbGwgdG91Y2hlcyByZW1vdmVkOyBnZXN0dXJlIGlzIGNvbXBsZXRlLlxuICAgICAgICAgICAgaWYgKCF0aGlzLl9tdWx0aVRvdWNoKSB7XG4gICAgICAgICAgICAgIC8vIFNpbmdsZS10b3VjaCBzd2lwZSBoYXMgZmluaXNoZWQuXG4gICAgICAgICAgICAgIGxldCBjbGllbnRYID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgICAgICAgbGV0IGNsaWVudFkgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZO1xuICAgICAgICAgICAgICB0b3VjaEVuZCh0aGlzLCBjbGllbnRYLCBjbGllbnRZKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX211bHRpVG91Y2ggPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSBsZWZ0LlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy5cbiAgICAgKi9cbiAgICBnb0xlZnQoKSB7XG4gICAgICBpZiAoc3VwZXIuZ29MZWZ0KSB7IHJldHVybiBzdXBlci5nb0xlZnQoKTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSByaWdodC5cbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuXG4gICAgICovXG4gICAgZ29SaWdodCgpIHtcbiAgICAgIGlmIChzdXBlci5nb1JpZ2h0KSB7IHJldHVybiBzdXBlci5nb1JpZ2h0KCk7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmUgd2hldGhlciBhIHRyYW5zaXRpb24gc2hvdWxkIGJlIHNob3duIGR1cmluZyBhIHN3aXBlLlxuICAgICAqXG4gICAgICogQ29tcG9uZW50cyBsaWtlIGNhcm91c2VscyBvZnRlbiBkZWZpbmUgYW5pbWF0ZWQgQ1NTIHRyYW5zaXRpb25zIGZvclxuICAgICAqIHNsaWRpbmcgZWZmZWN0cy4gU3VjaCBhIHRyYW5zaXRpb24gc2hvdWxkIHVzdWFsbHkgKm5vdCogYmUgYXBwbGllZCB3aGlsZVxuICAgICAqIHRoZSB1c2VyIGlzIGRyYWdnaW5nLCBiZWNhdXNlIGEgQ1NTIGFuaW1hdGlvbiB3aWxsIGludHJvZHVjZSBhIGxhZyB0aGF0XG4gICAgICogbWFrZXMgdGhlIHN3aXBlIGZlZWwgc2x1Z2dpc2guIEluc3RlYWQsIGFzIGxvbmcgYXMgdGhlIHVzZXIgaXMgZHJhZ2dpbmdcbiAgICAgKiB3aXRoIHRoZWlyIGZpbmdlciBkb3duLCB0aGUgdHJhbnNpdGlvbiBzaG91bGQgYmUgc3VwcHJlc3NlZC4gV2hlbiB0aGVcbiAgICAgKiB1c2VyIHJlbGVhc2VzIHRoZWlyIGZpbmdlciwgdGhlIHRyYW5zaXRpb24gY2FuIGJlIHJlc3RvcmVkLCBhbGxvd2luZyB0aGVcbiAgICAgKiBhbmltYXRpb24gdG8gc2hvdyB0aGUgY2Fyb3VzZWwgc2xpZGluZyBpbnRvIGl0cyBmaW5hbCBwb3NpdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsdWUgLSB0cnVlIGlmIGEgY29tcG9uZW50LXByb3ZpZGVkIHRyYW5zaXRpb24gc2hvdWxkXG4gICAgICogYmUgc2hvd24sIGZhbHNlIGlmIG5vdC5cbiAgICAgKi9cbiAgICAvLyBUT0RPOiBSZW5hbWUgKGFuZCBmbGlwIG1lYW5pbmcpIHRvIHNvbWV0aGluZyBsaWtlIGRyYWdnaW5nKCk/XG4gICAgc2hvd1RyYW5zaXRpb24odmFsdWUpIHtcbiAgICAgIGlmIChzdXBlci5zaG93VHJhbnNpdGlvbikgeyBzdXBlci5zaG93VHJhbnNpdGlvbih2YWx1ZSk7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGlzdGFuY2UgdGhlIGZpcnN0IHRvdWNocG9pbnQgaGFzIHRyYXZlbGVkIHNpbmNlIHRoZSBiZWdpbm5pbmcgb2YgYVxuICAgICAqIGRyYWcsIGV4cHJlc3NlZCBhcyBhIGZyYWN0aW9uIG9mIHRoZSBlbGVtZW50J3Mgd2lkdGguXG4gICAgICpcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKi9cbiAgICBnZXQgdHJhdmVsRnJhY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdHJhdmVsRnJhY3Rpb247XG4gICAgfVxuICAgIHNldCB0cmF2ZWxGcmFjdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKCd0cmF2ZWxGcmFjdGlvbicgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIudHJhdmVsRnJhY3Rpb24gPSB2YWx1ZTsgfVxuICAgICAgdGhpcy5fdHJhdmVsRnJhY3Rpb24gPSB2YWx1ZTtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBTd2lwZURpcmVjdGlvbjtcbn07XG5cblxuLy8gUmV0dXJuIHRydWUgaWYgdGhlIHBvaW50ZXIgZXZlbnQgaXMgZm9yIHRoZSBwZW4sIG9yIHRoZSBwcmltYXJ5IHRvdWNoIHBvaW50LlxuZnVuY3Rpb24gaXNFdmVudEZvclBlbk9yUHJpbWFyeVRvdWNoKGV2ZW50KSB7XG4gIHJldHVybiBldmVudC5wb2ludGVyVHlwZSA9PT0gJ3BlbicgfHxcbiAgICAgIChldmVudC5wb2ludGVyVHlwZSA9PT0gJ3RvdWNoJyAmJiBldmVudC5pc1ByaW1hcnkpO1xufVxuXG5cbmZ1bmN0aW9uIHRvdWNoU3RhcnQoZWxlbWVudCwgY2xpZW50WCwgY2xpZW50WSkge1xuICBlbGVtZW50LnNob3dUcmFuc2l0aW9uKGZhbHNlKTtcbiAgZWxlbWVudC5fc3RhcnRYID0gY2xpZW50WDtcbiAgZWxlbWVudC5fcHJldmlvdXNYID0gY2xpZW50WDtcbiAgZWxlbWVudC5fcHJldmlvdXNZID0gY2xpZW50WTtcbiAgZWxlbWVudC5fZGVsdGFYID0gMDtcbiAgZWxlbWVudC5fZGVsdGFZID0gMDtcbn1cblxuZnVuY3Rpb24gdG91Y2hNb3ZlKGVsZW1lbnQsIGNsaWVudFgsIGNsaWVudFkpIHtcbiAgZWxlbWVudC5fZGVsdGFYID0gY2xpZW50WCAtIGVsZW1lbnQuX3ByZXZpb3VzWDtcbiAgZWxlbWVudC5fZGVsdGFZID0gY2xpZW50WSAtIGVsZW1lbnQuX3ByZXZpb3VzWTtcbiAgZWxlbWVudC5fcHJldmlvdXNYID0gY2xpZW50WDtcbiAgZWxlbWVudC5fcHJldmlvdXNZID0gY2xpZW50WTtcbiAgaWYgKE1hdGguYWJzKGVsZW1lbnQuX2RlbHRhWCkgPiBNYXRoLmFicyhlbGVtZW50Ll9kZWx0YVkpKSB7XG4gICAgLy8gTW92ZSB3YXMgbW9zdGx5IGhvcml6b250YWwuXG4gICAgdHJhY2tUbyhlbGVtZW50LCBjbGllbnRYKTtcbiAgICAvLyBJbmRpY2F0ZSB0aGF0IHRoZSBldmVudCB3YXMgaGFuZGxlZC4gSXQnZCBiZSBuaWNlciBpZiB3ZSBkaWRuJ3QgaGF2ZVxuICAgIC8vIHRvIGRvIHRoaXMgc28gdGhhdCwgZS5nLiwgYSB1c2VyIGNvdWxkIGJlIHN3aXBpbmcgbGVmdCBhbmQgcmlnaHRcbiAgICAvLyB3aGlsZSBzaW11bHRhbmVvdXNseSBzY3JvbGxpbmcgdXAgYW5kIGRvd24uIChOYXRpdmUgdG91Y2ggYXBwcyBjYW4gZG9cbiAgICAvLyB0aGF0LikgSG93ZXZlciwgTW9iaWxlIFNhZmFyaSB3YW50cyB0byBoYW5kbGUgc3dpcGUgZXZlbnRzIG5lYXIgdGhlXG4gICAgLy8gcGFnZSBhbmQgaW50ZXJwcmV0IHRoZW0gYXMgbmF2aWdhdGlvbnMuIFRvIGF2b2lkIGhhdmluZyBhIGhvcml6aW9udGFsXG4gICAgLy8gc3dpcGUgbWlzaW50ZXByZXRlZCBhcyBhIG5hdmlnYXRpb24sIHdlIGluZGljYXRlIHRoYXQgd2UndmUgaGFuZGxlZFxuICAgIC8vIHRoZSBldmVudCwgYW5kIHByZXZlbnQgZGVmYXVsdCBiZWhhdmlvci5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICAvLyBNb3ZlIHdhcyBtb3N0bHkgdmVydGljYWwuXG4gICAgcmV0dXJuIGZhbHNlOyAvLyBOb3QgaGFuZGxlZFxuICB9XG59XG5cbmZ1bmN0aW9uIHRvdWNoRW5kKGVsZW1lbnQsIGNsaWVudFgsIGNsaWVudFkpIHtcbiAgZWxlbWVudC5zaG93VHJhbnNpdGlvbih0cnVlKTtcbiAgaWYgKGVsZW1lbnQuX2RlbHRhWCA+PSAyMCkge1xuICAgIC8vIEZpbmlzaGVkIGdvaW5nIHJpZ2h0IGF0IGhpZ2ggc3BlZWQuXG4gICAgZWxlbWVudC5nb0xlZnQoKTtcbiAgfSBlbHNlIGlmIChlbGVtZW50Ll9kZWx0YVggPD0gLTIwKSB7XG4gICAgLy8gRmluaXNoZWQgZ29pbmcgbGVmdCBhdCBoaWdoIHNwZWVkLlxuICAgIGVsZW1lbnQuZ29SaWdodCgpO1xuICB9IGVsc2Uge1xuICAgIC8vIEZpbmlzaGVkIGF0IGxvdyBzcGVlZC5cbiAgICB0cmFja1RvKGVsZW1lbnQsIGNsaWVudFgpO1xuICAgIGxldCB0cmF2ZWxGcmFjdGlvbiA9IGVsZW1lbnQudHJhdmVsRnJhY3Rpb247XG4gICAgaWYgKHRyYXZlbEZyYWN0aW9uID49IDAuNSkge1xuICAgICAgZWxlbWVudC5nb1JpZ2h0KCk7XG4gICAgfSBlbHNlIGlmICh0cmF2ZWxGcmFjdGlvbiA8PSAtMC41KSB7XG4gICAgICBlbGVtZW50LmdvTGVmdCgpO1xuICAgIH1cbiAgfVxuICBlbGVtZW50LnRyYXZlbEZyYWN0aW9uID0gMDtcbiAgZWxlbWVudC5fZGVsdGFYID0gbnVsbDtcbiAgZWxlbWVudC5fZGVsdGFZID0gbnVsbDtcbn1cblxuZnVuY3Rpb24gdHJhY2tUbyhlbGVtZW50LCB4KSB7XG4gIGxldCB3aWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gIGxldCBkcmFnRGlzdGFuY2UgPSBlbGVtZW50Ll9zdGFydFggLSB4O1xuICBsZXQgZnJhY3Rpb24gPSB3aWR0aCA+IDAgP1xuICAgIGRyYWdEaXN0YW5jZSAvIHdpZHRoIDpcbiAgICAwO1xuICBlbGVtZW50LnRyYXZlbEZyYWN0aW9uID0gZnJhY3Rpb247XG59XG4iLCJpbXBvcnQgQ29sbGVjdGl2ZSBmcm9tICcuL0NvbGxlY3RpdmUnO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggVGFyZ2V0SW5Db2xsZWN0aXZlLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggYWxsb3dzIGEgY29tcG9uZW50IHRvIHByb3ZpZGUgYWdncmVnYXRlIGJlaGF2aW9yIHdpdGggb3RoZXJcbiAgICogZWxlbWVudHMsIGUuZy4sIGZvciBrZXlib2FyZCBoYW5kbGluZy5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBpbXBsaWNpdGx5IGNyZWF0ZXMgYSBjb2xsZWN0aXZlIGZvciBhIGNvbXBvbmVudCBzbyB0aGF0IGl0IGNhblxuICAgKiBwYXJ0aWNpcGF0ZSBpbiBjb2xsZWN0aXZlIGtleWJvYXJkIGhhbmRsaW5nLiBTZWUgdGhlXG4gICAqIFtDb2xsZWN0aXZlXShDb2xsZWN0aXZlLm1kKSBjbGFzcyBmb3IgZGV0YWlscy5cbiAgICpcbiAgICogWW91IGNhbiB1c2UgdGhpcyBtaXhpbiBpbiBjb25qdW5jdGlvbiB3aXRoXG4gICAqIFtDb250ZW50Rmlyc3RDaGlsZFRhcmdldF0oQ29udGVudEZpcnN0Q2hpbGRUYXJnZXQubWQpIHRvIGF1dG9tYXRpY2FsbHkgaGF2ZVxuICAgKiB0aGUgY29tcG9uZW50J3MgY29sbGVjdGl2ZSBleHRlbmRlZCB0byBpdHMgZmlyc3QgY2hpbGQuXG4gICAqL1xuICBjbGFzcyBUYXJnZXRJbkNvbGxlY3RpdmUgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cbiAgICAgIHRoaXMuY29sbGVjdGl2ZSA9IG5ldyBDb2xsZWN0aXZlKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMvc2V0cyB0aGUgY3VycmVudCB0YXJnZXQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIFNldCB0aGlzIHRvIHBvaW50IHRvIGFub3RoZXIgZWxlbWVudC4gVGhhdCB0YXJnZXQgZWxlbWVudCB3aWxsIGJlXG4gICAgICogaW1wbGljaXRseSBhZGRlZCB0byB0aGUgY29tcG9uZW50J3MgY29sbGVjdGl2ZS4gVGhhdCBpcywgdGhlIGNvbXBvbmVudFxuICAgICAqIGFuZCBpdHMgdGFyZ2V0IHdpbGwgc2hhcmUgcmVzcG9uc2liaWxpdHkgZm9yIGhhbmRsaW5nIGtleWJvYXJkIGV2ZW50cy5cbiAgICAgKlxuICAgICAqIFlvdSBjYW4gc2V0IHRoaXMgcHJvcGVydHkgeW91cnNlbGYsIG9yIHlvdSBjYW4gdXNlIHRoZVxuICAgICAqIENvbnRlbnRGaXJzdENoaWxkVGFyZ2V0IG1peGluIHRvIGF1dG9tYXRpY2FsbHkgc2V0IHRoZSB0YXJnZXQgdG8gdGhlXG4gICAgICogY29tcG9uZW50J3MgZmlyc3QgY2hpbGQuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgZ2V0IHRhcmdldCgpIHtcbiAgICAgIHJldHVybiBzdXBlci50YXJnZXQ7XG4gICAgfVxuICAgIHNldCB0YXJnZXQoZWxlbWVudCkge1xuICAgICAgaWYgKCd0YXJnZXQnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnRhcmdldCA9IGVsZW1lbnQ7IH1cbiAgICAgIHRoaXMuY29sbGVjdGl2ZS5hc3NpbWlsYXRlKGVsZW1lbnQpO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIFRhcmdldEluQ29sbGVjdGl2ZTtcbn07XG4iLCIvKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFRyYWNrcGFkRGlyZWN0aW9uLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggbWFwcyBhIGhvcml6b250YWwgdHJhY2twYWQgc3dpcGUgZ2VzdHVyZXMgKG9yIGhvcml6b250YWwgbW91c2VcbiAgICogd2hlZWwgYWN0aW9ucykgdG8gZGlyZWN0aW9uIHNlbWFudGljcy5cbiAgICpcbiAgICogWW91IGNhbiB1c2UgdGhpcyBtaXhpbiB3aXRoIGEgbWl4aW4gbGlrZVxuICAgKiBbRGlyZWN0aW9uU2VsZWN0aW9uXShEaXJlY3Rpb25TZWxlY3Rpb24ubWQpIHRvIGxldCB0aGUgdXNlciBjaGFuZ2UgdGhlXG4gICAqIHNlbGVjdGlvbiB3aXRoIHRoZSB0cmFja3BhZCBvciBtb3VzZSB3aGVlbC5cbiAgICpcbiAgICogVG8gcmVzcG9uZCB0byB0aGUgdHJhY2twYWQsIHdlIGNhbiBsaXN0ZW4gdG8gdGhlIERPTSdzIFwid2hlZWxcIiBldmVudHMuXG4gICAqIFRoZXNlIGV2ZW50cyBhcmUgZmlyZWQgYXMgdGhlIHVzZXIgZHJhZ3MgdGhlaXIgZmluZ2VycyBhY3Jvc3MgYSB0cmFja3BhZC5cbiAgICogVW5mb3J0dW5hdGVseSwgYnJvd3NlcnMgYXJlIG1pc3NpbmcgYSBjcml0aWNhbCBldmVudCDigJTCoHRoZXJlIGlzIG5vIGV2ZW50XG4gICAqIHdoZW4gdGhlIHVzZXIgKnN0b3BzKiBhIGdlc3R1cmVkIG9uIHRoZSB0cmFja3BhZCBvciBtb3VzZSB3aGVlbC5cbiAgICpcbiAgICogVG8gbWFrZSB0aGluZ3Mgd29yc2UsIHRoZSBtYWluc3RyZWFtIGJyb3dzZXJzIGNvbnRpbnVlIHRvIGdlbmVyYXRlIGZha2VcbiAgICogd2hlZWwgZXZlbnRzIGV2ZW4gYWZ0ZXIgdGhlIHVzZXIgaGFzIHN0b3BwZWQgZHJhZ2dpbmcgdGhlaXIgZmluZ2Vycy4gVGhlc2VcbiAgICogZmFrZSBldmVudHMgc2ltdWxhdGUgdGhlIHVzZXIgZ3JhZHVhbGx5IHNsb3dpbmcgZG93biB0aGUgZHJhZyB1bnRpbCB0aGV5XG4gICAqIGNvbWUgdG8gYSBzbW9vdGggc3RvcC4gSW4gc29tZSBjb250ZXh0cywgdGhlc2UgZmFrZSB3aGVlbCBldmVudHMgbWlnaHQgYmVcbiAgICogaGVscGZ1bCwgYnV0IGluIHRyeWluZyB0byBzdXBwbHkgdHlwaWNhbCB0cmFja3BhZCBzd2lwZSBuYXZpZ2F0aW9uLCB0aGVzZVxuICAgKiBmYWtlIGV2ZW50cyBnZXQgaW4gdGhlIHdheS5cbiAgICpcbiAgICogVGhpcyBjb21wb25lbnQgdXNlcyBoZXVyaXN0aWNzIHRvIHdvcmsgYXJvdW5kIHRoZXNlIHByb2JsZW1zLCBidXQgdGhlXG4gICAqIGNvbXBsZXggbmF0dXJlIG9mIHRoZSBwcm9ibGVtIG1ha2UgaXQgZXh0cmVtZWx5IGRpZmZpY3VsdCB0byBhY2hpZXZlIHRoZVxuICAgKiBzYW1lIGRlZ3JlZSBvZiB0cmFja3BhZCByZXNwb25zaXZlbmVzcyBwb3NzaWJsZSB3aXRoIG5hdGl2ZSBhcHBsaWNhdGlvbnMuXG4gICAqL1xuICBjbGFzcyBUcmFja3BhZERpcmVjdGlvbiBleHRlbmRzIGJhc2Uge1xuXG4gICAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIGV2ZW50ID0+IHtcbiAgICAgICAgbGV0IGhhbmRsZWQgPSB3aGVlbCh0aGlzLCBldmVudCk7XG4gICAgICAgIGlmIChoYW5kbGVkKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXNldFdoZWVsVHJhY2tpbmcodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIGxlZnQuXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLlxuICAgICAqL1xuICAgIGdvTGVmdCgpIHtcbiAgICAgIGlmIChzdXBlci5nb0xlZnQpIHsgcmV0dXJuIHN1cGVyLmdvTGVmdCgpOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIHJpZ2h0LlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy5cbiAgICAgKi9cbiAgICBnb1JpZ2h0KCkge1xuICAgICAgaWYgKHN1cGVyLmdvUmlnaHQpIHsgcmV0dXJuIHN1cGVyLmdvUmlnaHQoKTsgfVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgaW1wbGVtZW50YXRpb25cbiAgICBzaG93VHJhbnNpdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKHN1cGVyLnNob3dUcmFuc2l0aW9uKSB7IHN1cGVyLnNob3dUcmFuc2l0aW9uKHZhbHVlKTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBkaXN0YW5jZSB0aGUgdXNlciBoYXMgbW92ZWQgdGhlIGZpcnN0IHRvdWNocG9pbnQgc2luY2UgdGhlIGJlZ2lubmluZ1xuICAgICAqIG9mIGEgdHJhY2twYWQvd2hlZWwgb3BlcmF0aW9uLCBleHByZXNzZWQgYXMgYSBmcmFjdGlvbiBvZiB0aGUgZWxlbWVudCdzXG4gICAgICogd2lkdGguXG4gICAgICpcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKi9cbiAgICBnZXQgdHJhdmVsRnJhY3Rpb24oKSB7XG4gICAgICByZXR1cm4gc3VwZXIudHJhdmVsRnJhY3Rpb247XG4gICAgfVxuICAgIHNldCB0cmF2ZWxGcmFjdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKCd0cmF2ZWxGcmFjdGlvbicgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIudHJhdmVsRnJhY3Rpb24gPSB2YWx1ZTsgfVxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIFRyYWNrcGFkRGlyZWN0aW9uO1xufTtcblxuXG4vLyBUaW1lIHdlIHdhaXQgZm9sbG93aW5nIGEgbmF2aWdhdGlvbiBiZWZvcmUgcGF5aW5nIGF0dGVudGlvbiB0byB3aGVlbFxuLy8gZXZlbnRzIGFnYWluLlxuY29uc3QgUE9TVF9OQVZJR0FURV9USU1FID0gMjUwO1xuXG4vLyBUaW1lIHdlIHdhaXQgYWZ0ZXIgdGhlIGxhc3Qgd2hlZWwgZXZlbnQgYmVmb3JlIHdlIHJlc2V0IHRoaW5ncy5cbmNvbnN0IFdIRUVMX1RJTUUgPSAxMDA7XG5cblxuLy8gRm9sbG93aW5nIGEgbmF2aWdhdGlvbiwgcGFydGlhbGx5IHJlc2V0IG91ciB3aGVlbCB0cmFja2luZy5cbmZ1bmN0aW9uIHBvc3ROYXZpZ2F0ZShlbGVtZW50KSB7XG4gIGVsZW1lbnQudHJhdmVsRnJhY3Rpb24gPSAwO1xuICBlbGVtZW50Ll93aGVlbERpc3RhbmNlID0gMDtcbiAgZWxlbWVudC5fcG9zdE5hdmlnYXRlRGVsYXlDb21wbGV0ZSA9IHRydWU7XG4gIGVsZW1lbnQuX2Fic29yYkRlY2VsZXJhdGlvbiA9IHRydWU7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGVsZW1lbnQuX3Bvc3ROYXZpZ2F0ZURlbGF5Q29tcGxldGUgPSBmYWxzZTtcbiAgfSwgUE9TVF9OQVZJR0FURV9USU1FKTtcbn1cblxuLy8gUmVzZXQgYWxsIHN0YXRlIHJlbGF0ZWQgdG8gdGhlIHRyYWNraW5nIG9mIHRoZSB3aGVlbC5cbmZ1bmN0aW9uIHJlc2V0V2hlZWxUcmFja2luZyhlbGVtZW50KSB7XG4gIGVsZW1lbnQudHJhdmVsRnJhY3Rpb24gPSAwO1xuICBlbGVtZW50Ll93aGVlbERpc3RhbmNlID0gMDtcbiAgZWxlbWVudC5fbGFzdERlbHRhWCA9IDA7XG4gIGVsZW1lbnQuX2Fic29yYkRlY2VsZXJhdGlvbiA9IGZhbHNlO1xuICBlbGVtZW50Ll9wb3N0TmF2aWdhdGVEZWxheUNvbXBsZXRlID0gZmFsc2U7XG4gIGlmIChlbGVtZW50Ll9sYXN0V2hlZWxUaW1lb3V0KSB7XG4gICAgY2xlYXJUaW1lb3V0KGVsZW1lbnQuX2xhc3RXaGVlbFRpbWVvdXQpO1xuICAgIGVsZW1lbnQuX2xhc3RXaGVlbFRpbWVvdXQgPSBudWxsO1xuICB9XG59XG5cbi8vIERlZmluZSBvdXIgb3duIHNpZ24gZnVuY3Rpb24sIHNpbmNlIChhcyBvZiBNYXkgMjAxNSksIFNhZmFyaSBhbmQgSUUgZG9uJ3Rcbi8vIHN1cHBseSBNYXRoLnNpZ24oKS5cbmZ1bmN0aW9uIHNpZ24oeCkge1xuICByZXR1cm4gKHggPT09IDApID9cbiAgICAwIDpcbiAgICAoeCA+IDApID9cbiAgICAgIDEgOlxuICAgICAgLTE7XG59XG5cbi8vIFRPRE86IERhbXBpbmcsIG9yIHNvbWUgb3RoZXIgdHJlYXRtZW50IGZvciBnb2luZyBwYXN0IHRoZSBlbmRzLlxuXG4vKlxuICogQSB3aGVlbCBldmVudCBoYXMgYmVlbiBnZW5lcmF0ZWQuIFRoaXMgY291bGQgYmUgYSByZWFsIHdoZWVsIGV2ZW50LCBvciBpdFxuICogY291bGQgYmUgZmFrZSAoc2VlIG5vdGVzIGluIHRoZSBoZWFkZXIpLlxuICpcbiAqIFRoaXMgaGFuZGxlciB1c2VzIHNldmVyYWwgc3RyYXRlZ2llcyB0byB0cnkgdG8gYXBwcm94aW1hdGUgbmF0aXZlIHRyYWNrcGFkXG4gKiBzd2lwZSBuYXZpZ2F0aW9uLlxuICpcbiAqIElmIHRoZSB1c2VyIGhhcyBkcmFnZ2VkIGVub3VnaCB0byBjYXVzZSBhIG5hdmlnYXRpb24sIHRoZW4gZm9yIGEgc2hvcnRcbiAqIGRlbGF5IGZvbGxvd2luZyB0aGF0IG5hdmlnYXRpb24sIHN1YnNlcXVlbnQgd2hlZWwgZXZlbnRzIHdpbGwgYmUgaWdub3JlZC5cbiAqXG4gKiBGdXJ0aGVybW9yZSwgZm9sbHdvd2luZyBhIG5hdmlnYXRpb24sIHdlIGlnbm9yZSBhbGwgd2hlZWwgZXZlbnRzIHVudGlsIHdlXG4gKiByZWNlaXZlIGF0IGxlYXN0IG9uZSBldmVudCB3aGVyZSB0aGUgZXZlbnQncyBkZWx0YVggKGRpc3RhbmNlIHRyYXZlbGVkKSBpc1xuICogKmdyZWF0ZXIqIHRoYW4gdGhlIHByZXZpb3VzIGV2ZW50J3MgZGVsdGFYLiBUaGlzIGhlbHBzIHVzIGZpbHRlciBvdXQgdGhlXG4gKiBmYWtlIHdoZWVsIGV2ZW50cyBnZW5lcmF0ZWQgYnkgdGhlIGJyb3dzZXIgdG8gc2ltdWxhdGUgZGVjZWxlcmF0aW9uLlxuICpcbiAqL1xuZnVuY3Rpb24gd2hlZWwoZWxlbWVudCwgZXZlbnQpIHtcblxuICAvLyBTaW5jZSB3ZSBoYXZlIGEgbmV3IHdoZWVsIGV2ZW50LCByZXNldCBvdXIgdGltZXIgd2FpdGluZyBmb3IgdGhlIGxhc3RcbiAgLy8gd2hlZWwgZXZlbnQgdG8gcGFzcy5cbiAgaWYgKGVsZW1lbnQuX2xhc3RXaGVlbFRpbWVvdXQpIHtcbiAgICBjbGVhclRpbWVvdXQoZWxlbWVudC5fbGFzdFdoZWVsVGltZW91dCk7XG4gIH1cbiAgZWxlbWVudC5fbGFzdFdoZWVsVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHdoZWVsVGltZWRPdXQoZWxlbWVudCk7XG4gIH0sIFdIRUVMX1RJTUUpO1xuXG4gIGxldCBkZWx0YVggPSBldmVudC5kZWx0YVg7XG4gIGxldCBkZWx0YVkgPSBldmVudC5kZWx0YVk7XG5cbiAgLy8gU2VlIGlmIGVsZW1lbnQgZXZlbnQgcmVwcmVzZW50cyBhY2NlbGVyYXRpb24gb3IgZGVjZWxlcmF0aW9uLlxuICBsZXQgYWNjZWxlcmF0aW9uID0gc2lnbihkZWx0YVgpICogKGRlbHRhWCAtIGVsZW1lbnQuX2xhc3REZWx0YVgpO1xuICBlbGVtZW50Ll9sYXN0RGVsdGFYID0gZGVsdGFYO1xuICAvLyBjb25zb2xlLmxvZyhkZWx0YVggKyBcIiBcIiArIGFjY2VsZXJhdGlvbiArIFwiIFwiICsgZWxlbWVudC5fYWJzb3JiRGVjZWxlcmF0aW9uICsgXCIgXCIgKyBlbGVtZW50Ll9wb3N0TmF2aWdhdGVEZWxheUNvbXBsZXRlKTtcblxuICBpZiAoTWF0aC5hYnMoZGVsdGFYKSA8IE1hdGguYWJzKGRlbHRhWSkpIHtcbiAgICAvLyBNb3ZlIHdhcyBtb3N0bHkgdmVydGljYWwuIFRoZSB1c2VyIG1heSBiZSB0cnlpbmcgc2Nyb2xsIHdpdGggdGhlXG4gICAgLy8gdHJhY2twYWQvd2hlZWwuIFRvIGJlIG9uIHRoZSBzYWZlLCB3ZSBpZ25vcmUgc3VjaCBldmVudHMuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGVsZW1lbnQuX3Bvc3ROYXZpZ2F0ZURlbGF5Q29tcGxldGUpIHtcbiAgICAvLyBJdCdzIHRvbyBzb29uIGFmdGVyIGEgbmF2aWdhdGlvbjsgaWdub3JlIHRoZSBldmVudC5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG5cbiAgaWYgKGFjY2VsZXJhdGlvbiA+IDApIHtcbiAgICAvLyBUaGUgZXZlbnRzIGFyZSBub3QgKG9yIGFyZSBubyBsb25nZXIpIGRlY2VsZXJhdGluZywgc28gd2UgY2FuIHN0YXJ0XG4gICAgLy8gcGF5aW5nIGF0dGVudGlvbiB0byB0aGVtIGFnYWluLlxuICAgIGVsZW1lbnQuX2Fic29yYkRlY2VsZXJhdGlvbiA9IGZhbHNlO1xuICB9IGVsc2UgaWYgKGVsZW1lbnQuX2Fic29yYkRlY2VsZXJhdGlvbikge1xuICAgIC8vIFRoZSB3aGVlbCBldmVudCB3YXMgbGlrZWx5IGZha2VkIHRvIHNpbXVsYXRlIGRlY2VsZXJhdGlvbjsgaWdub3JlIGl0LlxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZWxlbWVudC5fd2hlZWxEaXN0YW5jZSArPSBkZWx0YVg7XG5cbiAgLy8gVXBkYXRlIHRoZSB0cmF2ZWwgZnJhY3Rpb24gb2YgdGhlIGVsZW1lbnQgYmVpbmcgbmF2aWdhdGVkLlxuICBsZXQgd2lkdGggPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xuICBsZXQgdHJhdmVsRnJhY3Rpb24gPSB3aWR0aCA+IDAgP1xuICAgIGVsZW1lbnQuX3doZWVsRGlzdGFuY2UgLyB3aWR0aCA6XG4gICAgMDtcbiAgZWxlbWVudC5zaG93VHJhbnNpdGlvbihmYWxzZSk7XG4gIHRyYXZlbEZyYWN0aW9uID0gc2lnbih0cmF2ZWxGcmFjdGlvbikgKiBNYXRoLm1pbihNYXRoLmFicyh0cmF2ZWxGcmFjdGlvbiksIDEpO1xuICBlbGVtZW50LnRyYXZlbEZyYWN0aW9uID0gdHJhdmVsRnJhY3Rpb247XG5cbiAgLy8gSWYgdGhlIHVzZXIgaGFzIGRyYWdnZWQgZW5vdWdoIHRvIHJlYWNoIHRoZSBwcmV2aW91cy9uZXh0IGl0ZW0sIHRoZW5cbiAgLy8gY29tcGxldGUgYSBuYXZpZ2F0aW9uIHRvIHRoYXQgaXRlbS5cbiAgaWYgKHRyYXZlbEZyYWN0aW9uID09PSAxKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJnb1JpZ2h0XCIpO1xuICAgIGVsZW1lbnQuc2hvd1RyYW5zaXRpb24odHJ1ZSk7XG4gICAgZWxlbWVudC5nb1JpZ2h0KCk7XG4gICAgcG9zdE5hdmlnYXRlKGVsZW1lbnQpO1xuICB9IGVsc2UgaWYgKHRyYXZlbEZyYWN0aW9uID09PSAtMSkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiZ29MZWZ0XCIpO1xuICAgIGVsZW1lbnQuc2hvd1RyYW5zaXRpb24odHJ1ZSk7XG4gICAgZWxlbWVudC5nb0xlZnQoKTtcbiAgICBwb3N0TmF2aWdhdGUoZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLy8gQSBzdWZmaWNpZW50bHkgbG9uZyBwZXJpb2Qgb2YgdGltZSBoYXMgcGFzc2VkIHNpbmNlIHRoZSBsYXN0IHdoZWVsIGV2ZW50LlxuLy8gV2Ugc25hcCB0aGUgc2VsZWN0aW9uIHRvIHRoZSBjbG9zZXN0IGl0ZW0sIHRoZW4gcmVzZXQgb3VyIHN0YXRlLlxuZnVuY3Rpb24gd2hlZWxUaW1lZE91dChlbGVtZW50KSB7XG4gIC8vIGNvbnNvbGUubG9nKFwidGltZW91dFwiKTtcblxuICAvLyBTbmFwIHRvIHRoZSBjbG9zZXN0IGl0ZW0uXG4gIGVsZW1lbnQuc2hvd1RyYW5zaXRpb24odHJ1ZSk7XG4gIGxldCB0cmF2ZWxGcmFjdGlvbiA9IGVsZW1lbnQudHJhdmVsRnJhY3Rpb247XG4gIGlmICh0cmF2ZWxGcmFjdGlvbiA+PSAwLjUpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcInNuYXAgcmlnaHRcIik7XG4gICAgZWxlbWVudC5nb1JpZ2h0KCk7XG4gIH0gZWxzZSBpZiAodHJhdmVsRnJhY3Rpb24gPD0gLTAuNSkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwic25hcCBsZWZ0XCIpO1xuICAgIGVsZW1lbnQuZ29MZWZ0KCk7XG4gIH1cblxuICAvLyBUT0RPOiBMaXN0ZW4gZm9yIHRoZSB0cmFuc2l0aW9uIHRvIGNvbXBsZXRlLCBhbmQgdGhlbiByZXN0b3JlXG4gIC8vIHNob3dUcmFuc2l0aW9uIHRvIGZhbHNlIChvciB0aGUgcHJldmlvdXMgdmFsdWUpLlxuXG4gIHJlc2V0V2hlZWxUcmFja2luZyhlbGVtZW50KTtcbn1cbiIsIi8qXG4gKiBIZWxwZXIgZnVuY3Rpb25zIGZvciB3b3JraW5nIHdpdGggYSBzZWxlY3Rpb24gYXMgYSByZWFsIG51bWJlciB0aGF0IGNvbWJpbmVzXG4gKiBhbiBpbnRlZ2VyIGluZGV4IGludG8gYSBsaXN0LCBhbmQgYSBmcmFjdGlvbiBpbmRpY2F0aW5nIGhvdyBmYXIgb2YgdGhlIHdheSB3ZVxuICogYXJlIHRvIHRoZSBuZXh0IG9yIHByZXZpb3VzIGl0ZW0uXG4gKi9cblxuXG4vKipcbiAqIERhbXBlbiBhIHNlbGVjdGlvbiB0aGF0IGdvZXMgcGFzdCB0aGUgYmVnaW5uaW5nIG9yIGVuZCBvZiBhIGxpc3QuIFRoaXMgaXNcbiAqIGdlbmVyYWxseSB1c2VkIHRvIHByb2R1Y2UgYSB2aXN1YWwgZWZmZWN0IG9mIHRlbnNpb24gYXMgdGhlIHVzZXIgdHJpZXMgdG9cbiAqIGdvIGZ1cnRoZXIgaW4gYSBkaXJlY3Rpb24gdGhhdCBoYXMgbm8gbW9yZSBpdGVtcy5cbiAqXG4gKiBFeGFtcGxlOiBzdXBwb3NlIGBpdGVtQ291bnRgIGlzIDUsIGluZGljYXRpbmcgYSBsaXN0IG9mIDUgaXRlbXMuIFRoZSBpbmRleCBvZlxuICogdGhlIGxhc3QgaXRlbSBpcyA0LiBJZiB0aGUgYHNlbGVjdGlvbmAgcGFyYW1ldGVyIGlzIDQuNSwgdGhlIHVzZXIgaXMgdHJ5aW5nXG4gKiB0byBnbyBwYXN0IHRoaXMgbGFzdCBpdGVtLiBXaGVuIGEgZGFtcGluZyBmdW5jdGlvbiBpcyBhcHBsaWVkLCB0aGUgcmVzdWx0aW5nXG4gKiB2YWx1ZSB3aWxsIGJlIGxlc3MgdGhhbiA0LjUgKHRoZSBhY3R1YWwgdmFsdWUgd2lsbCBiZSA0LjI1KS4gV2hlbiB0aGlzXG4gKiBzZWxlY3Rpb24gc3RhdGUgaXMgcmVuZGVyZWQsIHRoZSB1c2VyIHdpbGwgc2VlIHRoYXQsIGVhY2ggdW5pdCBkaXN0YW5jZSB0aGVcbiAqIGRyYWcgdHJhdmVscyBoYXMgbGVzcyBhbmQgbGVzcyB2aXNpYmxlIGVmZmVjdC4gVGhpcyBpcyBwZXJjZWl2ZWQgYXMgdGVuc2lvbi5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gc2VsZWN0aW9uIC0gQSByZWFsIG51bWJlciBpbmRpY2F0aW5nIGEgc2VsZWN0aW9uIHBvc2l0aW9uXG4gKiBAcGFyYW0ge251bWJlcn0gaXRlbUNvdW50IC0gQW4gaW50ZWdlciBmb3IgdGhlIG51bWJlciBvZiBpdGVtcyBpbiB0aGUgbGlzdFxuICogQHJldHVybnMge251bWJlcn0gQSByZWFsIG51bWJlciByZXByZXNlbnRpbmcgdGhlIGRhbXBlZCBzZWxlY3Rpb24gdmFsdWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkYW1wZWRTZWxlY3Rpb24oc2VsZWN0aW9uLCBpdGVtQ291bnQpIHtcbiAgbGV0IGRhbXBlZDtcbiAgbGV0IGJvdW5kID0gaXRlbUNvdW50IC0gMTtcbiAgaWYgKHNlbGVjdGlvbiA8IDApIHtcbiAgICAvLyBUcnlpbmcgdG8gZ28gcGFzdCBiZWdpbm5pbmcgb2YgbGlzdC4gQXBwbHkgdGVuc2lvbiBmcm9tIHRoZSBsZWZ0IGVkZ2UuXG4gICAgZGFtcGVkID0gLWRhbXBpbmcoLXNlbGVjdGlvbik7XG4gIH0gZWxzZSBpZiAoc2VsZWN0aW9uID49IGJvdW5kKSB7XG4gICAgLy8gVHJ5aW5nIHRvIGdvIHBhc3QgZW5kIG9mIGxpc3QuIEFwcGx5IHRlbnNpb24gZnJvbSB0aGUgcmlnaHQgZWRnZS5cbiAgICBkYW1wZWQgPSBib3VuZCArIGRhbXBpbmcoc2VsZWN0aW9uIC0gYm91bmQpO1xuICB9IGVsc2Uge1xuICAgIC8vIE5vIGRhbXBpbmcgcmVxdWlyZWQuXG4gICAgZGFtcGVkID0gc2VsZWN0aW9uO1xuICB9XG4gIHJldHVybiBkYW1wZWQ7XG59XG5cblxuLyoqXG4gKiBSZXR1cm4gdGhlIGN1cnJlbnQgZnJhY3Rpb25hbCBzZWxlY3Rpb24gdmFsdWUgZm9yIHRoZSBnaXZlbiBlbGVtZW50LlxuICpcbiAqIFRoaXMgc2ltcGx5IGFkZHMgdGhlIGVsZW1lbnQncyBgc2VsZWN0ZWRJbmRleGAgYW5kIGBzZWxlY3RlZEZyYWN0aW9uYFxuICogcHJvcGVydGllcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVsZW1lbnRTZWxlY3Rpb24oZWxlbWVudCkge1xuICBsZXQgc2VsZWN0ZWRJbmRleCA9IGVsZW1lbnQuc2VsZWN0ZWRJbmRleDtcbiAgaWYgKHNlbGVjdGVkSW5kZXggPCAwKSB7XG4gICAgLy8gTm8gc2VsZWN0aW9uXG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCBzZWxlY3RlZEZyYWN0aW9uID0gZWxlbWVudC5zZWxlY3RlZEZyYWN0aW9uIHx8IDA7XG4gIHJldHVybiBzZWxlY3RlZEluZGV4ICsgc2VsZWN0ZWRGcmFjdGlvbjtcbn1cblxuXG4vKipcbiAqIEJyZWFrcyBhIGZyYWN0aW9uYWwgc2VsZWN0aW9uIGludG8gaXRzIGludGVnZXIgYW5kIGZyYWN0aW9uYWwgcGFydHMuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHNlbGVjdGlvbiDigJPCoEEgcmVhbCBudW1iZXIgcmVwcmVzZW50aW5nIGEgc2VsZWN0aW9uIHBvaW50XG4gKiBAcmV0dXJucyB7b2JqZWN0fSAtIEFuIG9iamVjdCB3aXRoIGFuIGBpbmRleGAgcHJvcGVydHkgaG9sZGluZyB0aGVcbiAqIHNlbGVjdGlvbidzIGludGVnZXIgY29tcG9uZW50LCBhbmQgYSBgZnJhY3Rpb25gIHByb3BlcnR5IGhvbGRpbmcgdGhlXG4gKiBzZWxlY3Rpb24ncyBmcmFjdGlvbmFsIGNvbXBvbmVudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdGlvblBhcnRzKHNlbGVjdGlvbikge1xuICAvLyBTdHVwaWQgSUUgZG9lc24ndCBoYXZlIE1hdGgudHJ1bmMuXG4gIC8vIGxldCBpbmRleCA9IE1hdGgudHJ1bmMoc2VsZWN0aW9uKTtcbiAgbGV0IGluZGV4ID0gc2VsZWN0aW9uIDwgMCA/IE1hdGguY2VpbChzZWxlY3Rpb24pIDogTWF0aC5mbG9vcihzZWxlY3Rpb24pO1xuICBsZXQgZnJhY3Rpb24gPSBzZWxlY3Rpb24gLSBpbmRleDtcbiAgcmV0dXJuIHsgaW5kZXgsIGZyYWN0aW9uIH07XG59XG5cblxuLyoqXG4gKiBSZXR1cm5zIGEgZnJhY3Rpb25hbCBzZWxlY3Rpb24gcG9pbnQgYWZ0ZXIgYWNjb3VudGluZyBmb3Igd3JhcHBpbmcsIGVuc3VyaW5nXG4gKiB0aGF0IHRoZSBpbnRlZ2VyIHBvcnRpb24gb2YgdGhlIHNlbGVjdGlvbiBzdGF5cyBiZXR3ZWVuIDAgYW5kIGBpdGVtQ291bnRgLTEuXG4gKiBUaGF0IGlzLCB0aGUgaW50ZWdlciBwb3J0aW9uIHdpbGwgYWx3YXlzIGJlIGEgdmFsaWQgaW5kZXggaW50byB0aGUgbGlzdC5cbiAqXG4gKiBFeGFtcGxlIG9mIHdyYXBwaW5nIHBhc3QgdGhlIGVuZCBvZiB0aGUgbGlzdDogaWYgYHNlbGVjdGlvbmAgaXMgNS41IGFuZFxuICogYGl0ZW1Db3VudGAgaXMgNSwgdGhpcyByZXR1cm5zIDAuNS4gRXhhbXBsZSBvZiB3cmFwcGluZyBwYXN0IHRoZSBiZWdpbm5pbmcgb2ZcbiAqIHRoZSBsaXN0OiBpZiBgc2VsZWN0aW9uYCBpcyAwLjUgYW5kIGBpdGVtQ291bnRgIGlzIDUsIHRoaXMgcmV0dXJucyA0LjUuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHNlbGVjdGlvbiAtIEEgcmVhbCBudW1iZXIgcmVwcmVzZW50aW5nIGEgc2VsZWN0aW9uIHBvaW50XG4gKiBAcGFyYW0ge251bWJlcn0gaXRlbUNvdW50IC0gVGhlIG51bWJlciBvZiBpdGVtcyBpbiB0aGUgbGlzdFxuICogQHJldHVybnMge251bWJlcn0gLSBUaGUgcmVzdWx0IG9mIHdyYXBwaW5nIHRoZSBzZWxlY3Rpb24gcG9pbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdyYXBwZWRTZWxlY3Rpb24oc2VsZWN0aW9uLCBpdGVtQ291bnQpIHtcbiAgLy8gSGFuZGxlcyBwb3NzaWJpbGl0eSBvZiBuZWdhdGl2ZSBtb2QuXG4gIC8vIFNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xODYxODI1MC83NjQ3MlxuICByZXR1cm4gKChzZWxlY3Rpb24gJSBpdGVtQ291bnQpICsgaXRlbUNvdW50KSAlIGl0ZW1Db3VudDtcbn1cblxuXG4vKipcbiAqIFJldHVybiB0aGUgcGFydHMgb2YgYSBzZWxlY3Rpb24sIGZpcnN0IHdyYXBwaW5nIGlmIG5lY2Vzc2FyeS5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gc2VsZWN0aW9uIOKAkyBBIHJlYWwgbnVtYmVyIHJlcHJlc2VudGluZyBhIHNlbGVjdGlvbiBwb2ludFxuICogQHBhcmFtIHtudW1iZXJ9IGl0ZW1Db3VudCAtIFRoZSBudW1iZXIgb2YgaXRlbXMgaW4gdGhlIGxpc3RcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gd3JhcCDigJMgVHJ1ZSBpZiB0aGUgc2VsZWN0aW9uIHNob3VsZCB3cmFwIHRvIHN0YXkgd2l0aGluIHRoZVxuICogbGlzdFxuICogQHJldHVybnMge29iamVjdH0g4oCTIFRoZSBwYXJ0cyBvZiB0aGUgc2VsZWN0aW9uLCB1c2luZyB0aGUgc2FtZSBmb3JtYXQgYXNcbiAqIGBzZWxlY3Rpb25QYXJ0c2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3cmFwcGVkU2VsZWN0aW9uUGFydHMoc2VsZWN0aW9uLCBpdGVtQ291bnQsIHdyYXApIHtcbiAgaWYgKHdyYXApIHtcbiAgICBzZWxlY3Rpb24gPSB3cmFwcGVkU2VsZWN0aW9uKHNlbGVjdGlvbiwgaXRlbUNvdW50KTtcbiAgfVxuICByZXR1cm4gc2VsZWN0aW9uUGFydHMoc2VsZWN0aW9uKTtcbn1cblxuXG4vKlxuICogQ2FsY3VsYXRlIGRhbXBpbmcgYXMgYSBmdW5jdGlvbiBvZiB0aGUgZGlzdGFuY2UgcGFzdCB0aGUgbWluaW11bS9tYXhpbXVtXG4gKiB2YWx1ZXMuXG4gKlxuICogV2Ugd2FudCB0byBhc3ltcHRvdGljYWxseSBhcHByb2FjaCBhbiBhYnNvbHV0ZSBtaW5pbXVtIG9mIDEgdW5pdFxuICogYmVsb3cvYWJvdmUgdGhlIGFjdHVhbCBtaW5pbXVtL21heGltdW0uIFRoaXMgcmVxdWlyZXMgY2FsY3VsYXRpbmcgYVxuICogaHlwZXJib2xpYyBmdW5jdGlvbi5cbiAqXG4gKiBTZWUgaHR0cDovL3d3dy53b2xmcmFtYWxwaGEuY29tL2lucHV0Lz9pPXkrJTNEKy0xJTJGJTI4eCUyQjElMjkrJTJCKzFcbiAqIGZvciB0aGUgb25lIHdlIHVzZS4gVGhlIG9ubHkgcG9ydGlvbiBvZiB0aGF0IGZ1bmN0aW9uIHdlIGNhcmUgYWJvdXQgaXMgd2hlblxuICogeCBpcyB6ZXJvIG9yIGdyZWF0ZXIuIEFuIGltcG9ydGFudCBjb25zaWRlcmF0aW9uIGlzIHRoYXQgdGhlIGN1cnZlIGJlXG4gKiB0YW5nZW50IHRvIHRoZSBkaWFnb25hbCBsaW5lIHg9eSBhdCAoMCwgMCkuIFRoaXMgZW5zdXJlcyBzbW9vdGggY29udGludWl0eVxuICogd2l0aCB0aGUgbm9ybWFsIGRyYWcgYmVoYXZpb3IsIGluIHdoaWNoIHRoZSB2aXNpYmxlIHNsaWRpbmcgaXMgbGluZWFyIHdpdGhcbiAqIHRoZSBkaXN0YW5jZSB0aGUgdG91Y2hwb2ludCBoYXMgYmVlbiBkcmFnZ2VkLlxuICovXG5mdW5jdGlvbiBkYW1waW5nKHgpIHtcbiAgbGV0IHkgPSAoLTEgLyAoeCArIDEpKSArIDE7XG4gIHJldHVybiB5O1xufVxuIiwiLypcbiAqIE1pY3JvdGFzayBoZWxwZXIgZm9yIElFIDExLlxuICpcbiAqIEV4ZWN1dGluZyBhIGZ1bmN0aW9uIGFzIGEgbWljcm90YXNrIGlzIHRyaXZpYWwgaW4gYnJvd3NlcnMgdGhhdCBzdXBwb3J0XG4gKiBwcm9taXNlcywgd2hvc2UgdGhlbigpIGNsYXVzZXMgdXNlIG1pY3JvdGFzayB0aW1pbmcuIElFIDExIGRvZXNuJ3Qgc3VwcG9ydFxuICogcHJvbWlzZXMsIGJ1dCBkb2VzIHN1cHBvcnQgTXV0YXRpb25PYnNlcnZlcnMsIHdoaWNoIGFyZSBhbHNvIGV4ZWN1dGVkIGFzXG4gKiBtaWNyb3Rhc2tzLiBTbyB0aGlzIGhlbHBlciB1c2VzIGFuIE11dGF0aW9uT2JzZXJ2ZXIgdG8gYWNoaWV2ZSBtaWNyb3Rhc2tcbiAqIHRpbWluZy5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9qYWtlYXJjaGliYWxkLmNvbS8yMDE1L3Rhc2tzLW1pY3JvdGFza3MtcXVldWVzLWFuZC1zY2hlZHVsZXMvXG4gKlxuICogSW5zcGlyZWQgYnkgUG9seW1lcidzIGFzeW5jKCkgZnVuY3Rpb24uXG4gKi9cblxuXG4vLyBUaGUgcXVldWUgb2YgcGVuZGluZyBjYWxsYmFja3MgdG8gYmUgZXhlY3V0ZWQgYXMgbWljcm90YXNrcy5cbmxldCBjYWxsYmFja3MgPSBbXTtcblxuLy8gQ3JlYXRlIGFuIGVsZW1lbnQgdGhhdCB3ZSB3aWxsIG1vZGlmeSB0byBmb3JjZSBvYnNlcnZhYmxlIG11dGF0aW9ucy5cbmxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuXG4vLyBBIG1vbm90b25pY2FsbHktaW5jcmVhc2luZyB2YWx1ZS5cbmxldCBjb3VudGVyID0gMDtcblxuXG4vKipcbiAqIEFkZCBhIGNhbGxiYWNrIHRvIHRoZSBtaWNyb3Rhc2sgcXVldWUuXG4gKlxuICogVGhpcyB1c2VzIGEgTXV0YXRpb25PYnNlcnZlciBzbyB0aGF0IGl0IHdvcmtzIG9uIElFIDExLlxuICpcbiAqIE5PVEU6IElFIDExIG1heSBhY3R1YWxseSB1c2UgdGltZW91dCB0aW1pbmcgd2l0aCBNdXRhdGlvbk9ic2VydmVycy4gVGhpc1xuICogbmVlZHMgbW9yZSBpbnZlc3RpZ2F0aW9uLlxuICpcbiAqIEBmdW5jdGlvbiBtaWNyb3Rhc2tcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pY3JvdGFzayhjYWxsYmFjaykge1xuICBjYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gIC8vIEZvcmNlIGEgbXV0YXRpb24uXG4gIGVsZW1lbnQudGV4dENvbnRlbnQgPSArK2NvdW50ZXI7XG59XG5cblxuLy8gRXhlY3V0ZSBhbnkgcGVuZGluZyBjYWxsYmFja3MuXG5mdW5jdGlvbiBleGVjdXRlQ2FsbGJhY2tzKCkge1xuICB3aGlsZSAoY2FsbGJhY2tzLmxlbmd0aCA+IDApIHtcbiAgICBsZXQgY2FsbGJhY2sgPSBjYWxsYmFja3Muc2hpZnQoKTtcbiAgICBjYWxsYmFjaygpO1xuICB9XG59XG5cblxuLy8gQ3JlYXRlIHRoZSBvYnNlcnZlci5cbmxldCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGV4ZWN1dGVDYWxsYmFja3MpO1xub2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50LCB7XG4gIGNoYXJhY3RlckRhdGE6IHRydWVcbn0pO1xuIiwiLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gZm9yIHN0YW5kYXJkIGNsYXNzTGlzdC50b2dnbGUoKSBiZWhhdmlvciBvbiBvbGQgYnJvd3NlcnMsXG4gKiBuYW1lbHkgSUUgMTEuXG4gKlxuICogVGhlIHN0YW5kYXJkXG4gKiBbY2xhc3NsaXN0XShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRWxlbWVudC9jbGFzc0xpc3QpXG4gKiBvYmplY3QgaGFzIGEgYHRvZ2dsZSgpYCBmdW5jdGlvbiB0aGF0IHN1cHBvcnRzIGEgc2Vjb25kIEJvb2xlYW4gcGFyYW1ldGVyXG4gKiB0aGF0IGNhbiBiZSB1c2VkIHRvIHN1Y2NpbmN0bHkgdHVybiBhIGNsYXNzIG9uIG9yIG9mZi4gVGhpcyBmZWF0dXJlIGlzIG9mdGVuXG4gKiB1c2VmdWwgaW4gZGVzaWduaW5nIGN1c3RvbSBlbGVtZW50cywgd2hpY2ggbWF5IHdhbnQgdG8gZXh0ZXJuYWxseSByZWZsZWN0XG4gKiBjb21wb25lbnQgc3RhdGUgaW4gYSBDU1MgY2xhc3MgdGhhdCBjYW4gYmUgdXNlZCBmb3Igc3R5bGluZyBwdXJwb3Nlcy5cbiAqXG4gKiBVbmZvcnR1bmF0ZWx5LCBJRSAxMSBkb2VzIG5vdCBzdXBwb3J0IHRoZSBCb29sZWFuIHBhcmFtZXRlciB0b1xuICogYGNsYXNzTGlzdC50b2dnbGUoKWAuIFRoaXMgaGVscGVyIGZ1bmN0aW9uIGJlaGF2ZXMgbGlrZSB0aGUgc3RhbmRhcmRcbiAqIGB0b2dnbGUoKWAsIGluY2x1ZGluZyBzdXBwb3J0IGZvciB0aGUgQm9vbGVhbiBwYXJhbWV0ZXIsIHNvIHRoYXQgaXQgY2FuIGJlXG4gKiB1c2VkIGV2ZW4gb24gSUUgMTEuXG4gKlxuICogQGZ1bmN0aW9uIHRvZ2dsZUNsYXNzXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gVGhlIGVsZW1lbnQgdG8gbW9kaWZ5XG4gKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIC0gVGhlIGNsYXNzIHRvIGFkZC9yZW1vdmVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZvcmNlXSAtIEZvcmNlIHRoZSBjbGFzcyB0byBiZSBhZGRlZCAoaWYgdHJ1ZSkgb3IgcmVtb3ZlZFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgKGlmIGZhbHNlKVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b2dnbGVDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUsIGZvcmNlKSB7XG4gIGxldCBjbGFzc0xpc3QgPSBlbGVtZW50LmNsYXNzTGlzdDtcbiAgbGV0IGFkZENsYXNzID0gKHR5cGVvZiBmb3JjZSA9PT0gJ3VuZGVmaW5lZCcpID9cbiAgICAhY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkgOlxuICAgIGZvcmNlO1xuICBpZiAoYWRkQ2xhc3MpIHtcbiAgICBjbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICB9XG4gIHJldHVybiBhZGRDbGFzcztcbn1cbiIsImltcG9ydCBDb21wb3NhYmxlIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NvbXBvc2FibGUnO1xuaW1wb3J0IFNoYWRvd1RlbXBsYXRlIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NoYWRvd1RlbXBsYXRlJztcbmltcG9ydCBTaGFkb3dFbGVtZW50UmVmZXJlbmNlcyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TaGFkb3dFbGVtZW50UmVmZXJlbmNlcyc7XG5pbXBvcnQgQXR0cmlidXRlTWFyc2hhbGxpbmcgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQXR0cmlidXRlTWFyc2hhbGxpbmcnO1xuaW1wb3J0IERpc3RyaWJ1dGVkQ2hpbGRyZW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlzdHJpYnV0ZWRDaGlsZHJlbic7XG5cblxuLyoqXG4gKiBBIHNhbXBsZSBnZW5lcmFsLXB1cnBvc2UgYmFzZSBjbGFzcyBmb3IgZGVmaW5pbmcgY3VzdG9tIGVsZW1lbnRzIHRoYXQgbWl4ZXNcbiAqIGluIHNvbWUgY29tbW9uIGZlYXR1cmVzOiB0ZW1wbGF0ZSBzdGFtcGluZyBpbnRvIGEgc2hhZG93IHJvb3QsIHNoYWRvdyBlbGVtZW50XG4gKiByZWZlcmVuY2VzLCBtYXJzaGFsbGluZyBhdHRyaWJ1dGVzIHRvIHByb3BlcnRpZXMsIGFuZCByZXRyaWV2aW5nIHRoZSBjaGlsZHJlblxuICogZGlzdHJpYnV0ZWQgdG8gYSBjb21wb25lbnQuXG4gKlxuICogVGhpcyBiYXNlIGNsYXNzIGlzIG5vdCBzcGVjaWFsIGluIGFueSB3YXksIGFuZCBpcyBkZWZpbmVkIG9ubHkgYXMgYVxuICogY29udmVuaWVudCBzaG9ydGhhbmQgZm9yIGFwcGx5aW5nIHRoZSBtaXhpbnMgbGlzdGVkIGFib3ZlLiBZb3UgY2FuIHVzZSB0aGlzXG4gKiBjbGFzcyBhcyBhIGJhc2UgY2xhc3MgZm9yIHlvdXIgb3duIGVsZW1lbnRzLCBvciBlYXNpbHkgY3JlYXRlIHlvdXIgb3duIGJhc2VcbiAqIGNsYXNzIGJ5IGFwcGx5aW5nIHRoZSBzYW1lIHNldCBvZiBtaXhpbnMuXG4gKlxuICogVGhlIEVsZW1lbnRCYXNlIGJhc2UgY2xhc3MgZG9lcyBub3QgcmVnaXN0ZXIgaXRzZWxmIGFzIGEgY3VzdG9tIGVsZW1lbnQgd2l0aFxuICogdGhlIGJyb3dzZXIsIGFuZCBoZW5jZSBjYW5ub3QgYmUgaW5kZXBlbmRlbnRseSBpbnN0YW50aWF0ZWQuXG4gKlxuICogQG1peGVzIEF0dHJpYnV0ZU1hcnNoYWxsaW5nIFxuICogQG1peGVzIENvbXBvc2FibGVcbiAqIEBtaXhlcyBEaXN0cmlidXRlZENoaWxkcmVuXG4gKiBAbWl4ZXMgU2hhZG93RWxlbWVudFJlZmVyZW5jZXNcbiAqIEBtaXhlcyBTaGFkb3dUZW1wbGF0ZVxuICovXG5jbGFzcyBFbGVtZW50QmFzZSBleHRlbmRzIENvbXBvc2FibGUoSFRNTEVsZW1lbnQpLmNvbXBvc2UoXG4gIFNoYWRvd1RlbXBsYXRlLCAgICAgICAgICAvLyBiZWZvcmUgbm9kZSBmaW5kaW5nLCBzbyBzaGFkb3cgcm9vdCBpcyBwb3B1bGF0ZWRcbiAgU2hhZG93RWxlbWVudFJlZmVyZW5jZXMsIC8vIGJlZm9yZSBtYXJzaGFsbGluZywgc28gcHJvcGVydGllcyBjYW4gdXNlIHJlZnNcbiAgQXR0cmlidXRlTWFyc2hhbGxpbmcsXG4gIERpc3RyaWJ1dGVkQ2hpbGRyZW5cbikge1xuXG4gIC8qXG4gICAqIERlYnVnZ2luZyB1dGlsaXR5OiBsb2dzIGEgbWVzc2FnZSwgcHJlZml4ZWQgYnkgdGhlIGNvbXBvbmVudCdzIHRhZy5cbiAgICovXG4gIGxvZyh0ZXh0KSB7XG4gICAgaWYgKHN1cGVyLmxvZykgeyBzdXBlci5sb2codGV4dCk7IH1cbiAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmxvY2FsTmFtZX06ICR7dGV4dH1gKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVsZW1lbnRCYXNlO1xuIiwiaW1wb3J0IEVsZW1lbnRCYXNlIGZyb20gJy4uLy4uL2Jhc2ljLWVsZW1lbnQtYmFzZS9zcmMvRWxlbWVudEJhc2UnO1xuaW1wb3J0IFNwcmVhZEl0ZW1zIGZyb20gJy4uLy4uL2Jhc2ljLXNwcmVhZC1pdGVtcy9zcmMvU3ByZWFkSXRlbXMnOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcbmltcG9ydCB0b2dnbGVDbGFzcyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy90b2dnbGVDbGFzcyc7XG5pbXBvcnQgKiBhcyBmcmFjdGlvbmFsU2VsZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL2ZyYWN0aW9uYWxTZWxlY3Rpb24nO1xuXG5cbmxldCBiYXNlID0gRWxlbWVudEJhc2U7XG5cbi8qKlxuICogUHJlc2VudHMgbGlzdCBpdGVtcyBpbiBhIHZpZXdwb3J0IHN1Y2ggdGhhdCBvbmx5IGEgc2luZ2xlIGl0ZW0gaXMgdmlzaWJsZSBhdFxuICogYSB0aW1lLlxuICpcbiAqIE5hdmlnYXRpbmcgYmV0d2VlbiBpdGVtcyB3aWxsIGJlIHJlcHJlc2VudGVkIHdpdGggYSBob3Jpem9udGFsIHZpc3VhbFxuICogc2xpZGluZyBlZmZlY3QuXG4gKlxuICogVGhpcyBjb21wb25lbnQgaGFuZGxlcyB0aGUgcmVuZGVyaW5nIHJlc3BvbnNpYmlsaXRpZXMgZm9yIHRoZSBiYXNpYy1jYXJvdXNlbFxuICogY29tcG9uZW50LlxuICpcbiAqIFRoaXMgY29tcG9uZW50IGN1cnJlbnRseSByZXF1aXJlcyB0aGF0IHlvdSBleHBsaWNpdGx5IGFwcGx5IGEgc2l6ZSB0byBpdC5cbiAqXG4gKiBAZXh0ZW5kcyBFbGVtZW50QmFzZVxuICovXG5jbGFzcyBTbGlkaW5nVmlld3BvcnQgZXh0ZW5kcyBiYXNlIHtcblxuICBhdHRhY2hlZENhbGxiYWNrKCkge1xuICAgIGlmIChzdXBlci5hdHRhY2hlZENhbGxiYWNrKSB7IHN1cGVyLmF0dGFjaGVkQ2FsbGJhY2soKTsgfVxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnc2hvd1RyYW5zaXRpb24nKTtcbiAgICB0aGlzLnNlbGVjdGVkRnJhY3Rpb24gPSAwO1xuICB9XG5cbiAgZ2V0IGNvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuJC5zbGlkaW5nQ29udGFpbmVyLmNvbnRlbnQ7XG4gIH1cblxuICBnZXQgaXRlbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuJC5zbGlkaW5nQ29udGFpbmVyLml0ZW1zO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmIChzdXBlci5yZW5kZXIpIHsgc3VwZXIucmVuZGVyKCk7IH1cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyU2VsZWN0aW9uLmJpbmQodGhpcykpO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgZnJhY3Rpb25hbCB2YWx1ZSBpbmRpY2F0aW5nIGhvdyBmYXIgdGhlIHVzZXIgaGFzIGN1cnJlbnRseSBhZHZhbmNlZCB0b1xuICAgKiB0aGUgbmV4dC9wcmV2aW91cyBpdGVtLiBFLmcuLCBhIGBzZWxlY3RlZEZyYWN0aW9uYCBvZiAzLjUgaW5kaWNhdGVzIHRoZVxuICAgKiB1c2VyIGlzIGhhbGZ3YXkgYmV0d2VlbiBpdGVtcyAzIGFuZCA0LlxuICAgKlxuICAgKiBGb3IgbW9yZSBkZXRhaWxzLCBzZWUgdGhlIFtmcmFjdGlvbmFsU2VsZWN0aW9uXShmcmFjdGlvbmFsU2VsZWN0aW9uLm1kKVxuICAgKiBoZWxwZXIgZnVuY3Rpb25zLlxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IHNlbGVjdGVkRnJhY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkRnJhY3Rpb247XG4gIH1cbiAgc2V0IHNlbGVjdGVkRnJhY3Rpb24odmFsdWUpIHtcbiAgICBpZiAoJ3NlbGVjdGVkRnJhY3Rpb24nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkRnJhY3Rpb24gPSB2YWx1ZTsgfVxuICAgIHRoaXMuX3NlbGVjdGVkRnJhY3Rpb24gPSB2YWx1ZTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgZ2V0IHNlbGVjdGVkSW5kZXgoKSB7XG4gICAgbGV0IGl0ZW1zID0gdGhpcy5pdGVtcztcbiAgICBsZXQgc2VsZWN0ZWRJdGVtID0gdGhpcy5zZWxlY3RlZEl0ZW07XG4gICAgcmV0dXJuIGl0ZW1zICYmIHNlbGVjdGVkSXRlbSA/XG4gICAgICBpdGVtcy5pbmRleE9mKHNlbGVjdGVkSXRlbSkgOlxuICAgICAgLTE7XG4gIH1cbiAgc2V0IHNlbGVjdGVkSW5kZXgoaW5kZXgpIHtcbiAgICBpZiAoJ3NlbGVjdGVkSW5kZXgnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkSW5kZXggPSBpbmRleDsgfVxuICAgIGxldCBpdGVtID0gdGhpcy5pdGVtcyAmJiB0aGlzLml0ZW1zW2luZGV4XTtcbiAgICBpZiAoaXRlbSkge1xuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xuICAgIH1cbiAgfVxuXG4gIGdldCBzZWxlY3RlZEl0ZW0oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSXRlbTtcbiAgfVxuICBzZXQgc2VsZWN0ZWRJdGVtKGl0ZW0pIHtcbiAgICBpZiAoJ3NlbGVjdGVkSXRlbScgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJdGVtID0gaXRlbTsgfVxuICAgIHRoaXMuX3NlbGVjdGVkSXRlbSA9IGl0ZW07XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHNob3dUcmFuc2l0aW9uKHNob3cpIHtcbiAgICBpZiAoc3VwZXIuc2hvd1RyYW5zaXRpb24pIHsgc3VwZXIuc2hvd1RyYW5zaXRpb24oc2hvdyk7IH1cbiAgICB0b2dnbGVDbGFzcyh0aGlzLCAnc2hvd1RyYW5zaXRpb24nLCBzaG93KTtcbiAgfVxuXG4gIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gYFxuICAgICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICAjc2xpZGluZ0NvbnRhaW5lciB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAvKlxuICAgICAgICAgU2V0IHdpZHRoIGZvciBJRS9FZGdlLiBJdCdzIG5vdCBjbGVhciB3aHkgdGhleSBuZWVkIHRoaXMsIGFuZCB0aGUgb3RoZXJcbiAgICAgICAgIGJyb3dzZXJzIGRvbid0LlxuICAgICAgICAgKi9cbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gICAgICB9XG5cbiAgICAgIDpob3N0KC5zaG93VHJhbnNpdGlvbikgI3NsaWRpbmdDb250YWluZXIge1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMnMgZWFzZS1vdXQ7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2Utb3V0O1xuICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGJhc2ljLXNwcmVhZC1pdGVtcyBpZD1cInNsaWRpbmdDb250YWluZXJcIj5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgPC9iYXNpYy1zcHJlYWQtaXRlbXM+XG4gICAgYDtcbiAgfVxuXG59XG5cblxuLy8gTm90ZTogSW4gdGhpcyByb3V0aW5lLCBcInRoaXNcIiBpcyBib3VuZCB0byBhbiBlbGVtZW50IGluc3RhbmNlLlxuZnVuY3Rpb24gcmVuZGVyU2VsZWN0aW9uKCkge1xuICBpZiAoIXRoaXMuc2VsZWN0ZWRJdGVtKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCBzZWxlY3Rpb24gPSBmcmFjdGlvbmFsU2VsZWN0aW9uLmVsZW1lbnRTZWxlY3Rpb24odGhpcyk7XG4gIGxldCBpdGVtQ291bnQgPSB0aGlzLml0ZW1zID8gdGhpcy5pdGVtcy5sZW5ndGggOiAwO1xuICBsZXQgZGFtcGVkID0gZnJhY3Rpb25hbFNlbGVjdGlvbi5kYW1wZWRTZWxlY3Rpb24oc2VsZWN0aW9uLCBpdGVtQ291bnQpO1xuICAvLyBVc2UgYSBwZXJjZW50YWdlIHNvIHRoZSB0cmFuc2Zvcm0gd2lsbCBzdGlsbCB3b3JrIGlmIHNjcmVlbiBzaXplIGNoYW5nZXNcbiAgLy8gKGUuZy4sIGlmIGRldmljZSBvcmllbnRhdGlvbiBjaGFuZ2VzKS5cbiAgbGV0IGxlZnQgPSAtZGFtcGVkICogMTAwO1xuICBsZXQgdHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoJyArIGxlZnQgKyAnJSknO1xuICB0aGlzLiQuc2xpZGluZ0NvbnRhaW5lci5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gIHRoaXMuJC5zbGlkaW5nQ29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbn1cblxuXG5kb2N1bWVudC5yZWdpc3RlckVsZW1lbnQoJ2Jhc2ljLXNsaWRpbmctdmlld3BvcnQnLCBTbGlkaW5nVmlld3BvcnQpO1xuZXhwb3J0IGRlZmF1bHQgU2xpZGluZ1ZpZXdwb3J0O1xuIiwiaW1wb3J0IEVsZW1lbnRCYXNlIGZyb20gJy4uLy4uL2Jhc2ljLWVsZW1lbnQtYmFzZS9zcmMvRWxlbWVudEJhc2UnO1xuaW1wb3J0IERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCc7XG5pbXBvcnQgT2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL09ic2VydmVDb250ZW50Q2hhbmdlcyc7XG5cblxuLyoqXG4gKiBTcHJlYWRzIG91dCBhIHNldCBvZiBpdGVtcyBob3Jpem9udGFsbHkgc28gdGhleSB0YWtlIGVxdWFsIHNwYWNlLlxuICpcbiAqIFtMaXZlIGRlbW9dKGh0dHA6Ly9iYXNpY3dlYmNvbXBvbmVudHMub3JnL2Jhc2ljLXdlYi1jb21wb25lbnRzL3BhY2thZ2VzL2Jhc2ljLXNwcmVhZC1pdGVtcy8pXG4gKlxuICogVGhpcyBjb21wb25lbnQgaXMgdXNlZCwgZm9yIGV4YW1wbGUsIGJ5IHRoZSBiYXNpYy1zbGlkaW5nLXZpZXdwb3J0IGNvbXBvbmVudFxuICogdG8gZW5zdXJlIHRoYXQgY2hpbGRyZW4gb2YgZGlmZmVyZW50IHNpemUgd2lsbCB0YWtlIHVwIHRoZSBzYW1lIGFtb3VudCBvZlxuICogaG9yaXpvbnRhbCBzcGFjZS5cbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBjdXJyZW50bHkgcmVxdWlyZXMgYW4gZXhwbGljaXQgc2l6ZSBieSBhcHBsaWVkIHRvIGl0LlxuICpcbiAqIEBleHRlbmRzIEVsZW1lbnRCYXNlXG4gKiBAbWl4ZXMgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudFxuICogQG1peGVzIE9ic2VydmVDb250ZW50Q2hhbmdlc1xuICovXG5jbGFzcyBTcHJlYWRJdGVtcyBleHRlbmRzIEVsZW1lbnRCYXNlLmNvbXBvc2UoXG4gIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQsXG4gIE9ic2VydmVDb250ZW50Q2hhbmdlc1xuKSB7XG5cbiAgYXR0YWNoZWRDYWxsYmFjaygpIHtcbiAgICBpZiAoc3VwZXIuYXR0YWNoZWRDYWxsYmFjaykgeyBzdXBlci5hdHRhY2hlZENhbGxiYWNrKCk7IH1cbiAgICAvLyBIQUNLXG4gICAgdGhpcy5pdGVtc0NoYW5nZWQoKTtcbiAgfVxuXG4gIGdldCBpdGVtcygpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG5cbiAgLy8gVE9ETzogU2hvdWxkIGFsc28gaGFuZGxlIGNvbnRlbnRDaGFuZ2VkKCksIGJ1dCBuZWVkIHRvIHJhdGlvbmFsaXplIHdpdGhcbiAgLy8gaW52b2NhdGlvbiBvZiBpdGVtc0NoYW5nZWQgaW4gYXR0YWNoZWRDYWxsYmFjay5cbiAgaXRlbXNDaGFuZ2VkKCkge1xuICAgIGlmIChzdXBlci5pdGVtc0NoYW5nZWQpIHsgc3VwZXIuaXRlbXNDaGFuZ2VkKCk7IH1cbiAgICBsZXQgaXRlbXMgPSB0aGlzLml0ZW1zO1xuICAgIGxldCBjb3VudCA9IGl0ZW1zLmxlbmd0aDtcbiAgICB0aGlzLiQuc3ByZWFkQ29udGFpbmVyLnN0eWxlLndpZHRoID0gKGNvdW50ICogMTAwKSArICclJztcbiAgICBsZXQgaXRlbVdpZHRoID0gKDEwMCAvIGNvdW50KSArIFwiJVwiO1xuICAgIFtdLmZvckVhY2guY2FsbChpdGVtcywgaXRlbSA9PiB7XG4gICAgICBpdGVtLnN0eWxlLndpZHRoID0gaXRlbVdpZHRoO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBgXG4gICAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuXG4gICAgICAjc3ByZWFkQ29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgI3NwcmVhZENvbnRhaW5lciA6OmNvbnRlbnQgPiAqIHtcbiAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgICAgb2JqZWN0LWZpdDogdmFyKC0tYmFzaWMtaXRlbS1vYmplY3QtZml0LCBjb250YWluKTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcbiAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgaWQ9XCJzcHJlYWRDb250YWluZXJcIj5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG59XG5cblxuZG9jdW1lbnQucmVnaXN0ZXJFbGVtZW50KCdiYXNpYy1zcHJlYWQtaXRlbXMnLCBTcHJlYWRJdGVtcyk7XG5leHBvcnQgZGVmYXVsdCBTcHJlYWRJdGVtcztcbiJdfQ==
