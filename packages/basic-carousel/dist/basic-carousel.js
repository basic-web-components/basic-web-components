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

var _ChildrenContent = require('../../basic-component-mixins/src/ChildrenContent');

var _ChildrenContent2 = _interopRequireDefault(_ChildrenContent);

var _CollectiveMember = require('../../basic-component-mixins/src/CollectiveMember');

var _CollectiveMember2 = _interopRequireDefault(_CollectiveMember);

var _ContentItems = require('../../basic-component-mixins/src/ContentItems');

var _ContentItems2 = _interopRequireDefault(_ContentItems);

var _DirectionSelection = require('../../basic-component-mixins/src/DirectionSelection');

var _DirectionSelection2 = _interopRequireDefault(_DirectionSelection);

var _Generic = require('../../basic-component-mixins/src/Generic');

var _Generic2 = _interopRequireDefault(_Generic);

var _ItemsAccessible = require('../../basic-component-mixins/src/ItemsAccessible');

var _ItemsAccessible2 = _interopRequireDefault(_ItemsAccessible);

var _ItemsSelection = require('../../basic-component-mixins/src/ItemsSelection');

var _ItemsSelection2 = _interopRequireDefault(_ItemsSelection);

var _Keyboard = require('../../basic-component-mixins/src/Keyboard');

var _Keyboard2 = _interopRequireDefault(_Keyboard);

var _KeyboardDirection = require('../../basic-component-mixins/src/KeyboardDirection');

var _KeyboardDirection2 = _interopRequireDefault(_KeyboardDirection);

var _SlidingViewport = require('../../basic-sliding-viewport/src/SlidingViewport');

var _SlidingViewport2 = _interopRequireDefault(_SlidingViewport);

var _SwipeDirection = require('../../basic-component-mixins/src/SwipeDirection');

var _SwipeDirection2 = _interopRequireDefault(_SwipeDirection);

var _TrackpadDirection = require('../../basic-component-mixins/src/TrackpadDirection');

var _TrackpadDirection2 = _interopRequireDefault(_TrackpadDirection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Lets the user navigate laterally through a sequence of child elements.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * basic-carousel is an implementation of the carousel user interface pattern,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * commonly used for navigating between images, pages, and other elements.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This pattern presents the user with a linear sequence of elements, only one of
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * which is shown at a time. The user can navigate to the next/previous element
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * with a variety of input methods.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * basic-carousel uses its children as the elements the user will navigate through.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * In a typical use, a basic-carousel can be used to navigate between a sequence of
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * images:
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * "Content Changes" criteria: the carousel will adapt to new child elements added
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * or removed at runtime.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Currently, this component does not meet the Gold Standard criteria "Size to
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Content". As a result, for the time being, **you must manually set a size on
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * this component**. Two approaches are to: 1) stretch the component across
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * whatever surface it is contained within, or 2) set it to be larger than the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * largest child element you want to display. The former approach is more common,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * and can be achieved with CSS styling such as:
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Alternatively, you can use a separate component,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * [basic-carousel-fit](http://github.com/basic-web-components/basic-carousel-fit),
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * which is designed to automatically size itself to its largest child elements.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The standard basic-carousel component supports navigation via the following
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * input methods:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * * Keyboard. When the carousel has focus, the user can press Left, Right, Home,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * or End. These navigate to the expected element.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * * Touch. On mobile and other touch-enabled devices, the user can drag left or
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * right.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * * Trackpad. The user can swipe left or right on a trackpad to navigate.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * basic-carousel supports a variety of optional user interface accessories:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * * [basic-arrow-direction](http://github.com/basic-web-components/basic-arrow-direction).
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   This adds prominent left and right arrow buttons on the side of the carousel.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * * [basic-page-dots](http://github.com/basic-web-components/basic-page-dots).
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   This adds a series of small dots below the carousel to indicate the user's
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   current position in the sequence.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See those components for more details, but in general you can construct a common
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * carousel with both arrow buttons and dots like so:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     <basic-arrow-direction target="child">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *       <basic-page-dots target="child">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *         <basic-carousel>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *           <img src="image1.jpg">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *           <img src="image2.jpg">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *           <img src="image3.jpg">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *           <img src="image4.jpg">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *           <img src="image5.jpg">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *         </basic-carousel>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *       </basic-page-dots>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     </basic-arrow-direction>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * For universal access, basic-carousel automatically adds a variety of
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * [ARIA](http://www.w3.org/WAI/intro/aria) properties to itself and to child
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * elements. This helps users navigate the sequence of elements in the carousel
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * using assistive technologies.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class Carousel
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

// jshint ignore:line

var base = _ElementBase2.default.compose(_ChildrenContent2.default, _CollectiveMember2.default, _ContentItems2.default, _DirectionSelection2.default, _Generic2.default, _ItemsSelection2.default, _ItemsAccessible2.default, _Keyboard2.default, _KeyboardDirection2.default, _SwipeDirection2.default, _TrackpadDirection2.default);

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
    key: 'showTransition',
    value: function showTransition(show) {
      if (_get(Object.getPrototypeOf(Carousel.prototype), 'showTransition', this)) {
        _get(Object.getPrototypeOf(Carousel.prototype), 'showTransition', this).call(this);
      }
      return this.$.viewport.showTransition(show);
    }
  }, {
    key: 'position',
    get: function get() {
      return this.$.viewport.position;
    },
    set: function set(value) {
      if ('position' in base.prototype) {
        _set(Object.getPrototypeOf(Carousel.prototype), 'position', value, this);
      }
      this.$.viewport.position = value;
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

exports.default = Carousel;

document.registerElement('basic-carousel', Carousel);

},{"../../basic-component-mixins/src/ChildrenContent":4,"../../basic-component-mixins/src/CollectiveMember":6,"../../basic-component-mixins/src/ContentItems":8,"../../basic-component-mixins/src/DirectionSelection":9,"../../basic-component-mixins/src/Generic":10,"../../basic-component-mixins/src/ItemsAccessible":11,"../../basic-component-mixins/src/ItemsSelection":12,"../../basic-component-mixins/src/Keyboard":13,"../../basic-component-mixins/src/KeyboardDirection":14,"../../basic-component-mixins/src/SwipeDirection":15,"../../basic-component-mixins/src/TrackpadDirection":17,"../../basic-element-base/src/ElementBase":18,"../../basic-sliding-viewport/src/SlidingViewport":19}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
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
        var _this2 = this;

        if (_get(Object.getPrototypeOf(ChildrenContent.prototype), 'createdCallback', this)) {
          _get(Object.getPrototypeOf(ChildrenContent.prototype), 'createdCallback', this).call(this);
        }
        observeContentChanges(this);

        // Make an initial call to contentChanged() so that the component can do
        // initialization that it normally does when content changes.
        //
        // This will invoke contentChanged() handlers in other mixins. In order that
        // those mixins have a chance to complete their own initialization, we add
        // the contentChanged() call to the microtask queue via a promise.
        // See https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/
        Promise.resolve().then(function () {
          return _this2.contentChanged();
        });
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
    }, {
      key: 'initialized',
      value: function initialized() {
        // Make an initial call to contentChanged() so that the component can do
        // initialization that it normally does when content changes.
        this.contentChanged();
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

},{}],5:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * A group of elements that have been joined together for the purpose of
 * accomplishing some collective behavior, e.g., keyboard handling.
 *
 * This isn't a mixin, but a class used by the CollectiveMember mixin.
 *
 * @class Collective
 */

var Collective = function () {
  function Collective() {
    var _this = this;

    _classCallCheck(this, Collective);

    this.elements = [];

    for (var _len = arguments.length, elements = Array(_len), _key = 0; _key < _len; _key++) {
      elements[_key] = arguments[_key];
    }

    elements.forEach(function (element) {
      return _this.assimilate(element);
    });
  }

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
  }, {
    key: 'outermostElement',
    get: function get() {
      return this.elements[0];
    }
  }]);

  return Collective;
}();

// The first collective assimilates the second.

exports.default = Collective;
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

},{}],6:[function(require,module,exports){
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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Mixin which allows a component to provide aggregate behavior with other
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * elements, e.g., for keyboard handling.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @mixin CollectiveMember
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

exports.default = function (base) {
  return function (_base) {
    _inherits(CollectiveMember, _base);

    function CollectiveMember() {
      _classCallCheck(this, CollectiveMember);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(CollectiveMember).apply(this, arguments));
    }

    _createClass(CollectiveMember, [{
      key: 'createdCallback',
      value: function createdCallback() {
        if (_get(Object.getPrototypeOf(CollectiveMember.prototype), 'createdCallback', this)) {
          _get(Object.getPrototypeOf(CollectiveMember.prototype), 'createdCallback', this).call(this);
        }
        this.collective = new _Collective2.default(this);
      }
    }, {
      key: 'target',
      get: function get() {
        return _get(Object.getPrototypeOf(CollectiveMember.prototype), 'target', this);
      },
      set: function set(element) {
        if ('target' in base.prototype) {
          _set(Object.getPrototypeOf(CollectiveMember.prototype), 'target', element, this);
        }
        this.collective.assimilate(element);
      }
    }]);

    return CollectiveMember;
  }(base);
};

},{"./Collective":5}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
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
 * Mixin that maps content semantics (children) to list item semantics.
 *
 * Items differ from children in several ways:
 *
 * * They can be referenced via index.
 * * They can have a selection state.
 * * Auxiliary invisible child elements are filtered out and not counted as
 *   items. Auxiliary elements include link, script, style, and template
 *   elements.
 *
 * @mixin ContentItems
 */

exports.default = function (base) {
  return function (_base) {
    _inherits(ContentItems, _base);

    function ContentItems() {
      _classCallCheck(this, ContentItems);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(ContentItems).apply(this, arguments));
    }

    _createClass(ContentItems, [{
      key: 'applySelection',
      value: function applySelection(item, selected) {
        if (_get(Object.getPrototypeOf(ContentItems.prototype), 'applySelection', this)) {
          _get(Object.getPrototypeOf(ContentItems.prototype), 'applySelection', this).call(this, item, selected);
        }
        item.classList.toggle('selected', selected);
      }
    }, {
      key: 'contentChanged',
      value: function contentChanged() {
        if (_get(Object.getPrototypeOf(ContentItems.prototype), 'contentChanged', this)) {
          _get(Object.getPrototypeOf(ContentItems.prototype), 'contentChanged', this).call(this);
        }
        this._items = null;
        this.itemsChanged();
      }

      /**
       * Returns the positional index for the indicated item.
       *
       * Because this acts like a getter, this does not invoke a base implementation.
       *
       * @method indexOfItem
       * @param {Object} item The item whose index is requested.
       * @returns {Number} The index of the item, or -1 if not found.
       */

    }, {
      key: 'indexOfItem',
      value: function indexOfItem(item) {
        return this.items.indexOf(item);
      }

      // Default implementation does nothing.

    }, {
      key: 'itemAdded',
      value: function itemAdded(item) {
        if (_get(Object.getPrototypeOf(ContentItems.prototype), 'itemAdded', this)) {
          _get(Object.getPrototypeOf(ContentItems.prototype), 'itemAdded', this).call(this, item);
        }
      }
    }, {
      key: 'itemsChanged',
      value: function itemsChanged() {
        var _this2 = this;

        if (_get(Object.getPrototypeOf(ContentItems.prototype), 'itemsChanged', this)) {
          _get(Object.getPrototypeOf(ContentItems.prototype), 'itemsChanged', this).call(this);
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

      /**
       * The current set of items in the list.
       *
       * @property items
       * @type [Object]
       */
      // TODO: property notifications so elements can bind to this property

    }, {
      key: 'items',
      get: function get() {
        if (this._items == null) {
          this._items = filterAuxiliaryElements(this.content);
        }
        return this._items;
      }
    }]);

    return ContentItems;
  }(base);
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
 * @event items-changed
 */

},{}],9:[function(require,module,exports){
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
 * Mixin which maps direction semantics (goLeft, goRight, etc.) to selection
 * semantics (selectPrevious, selectNext, etc.).
 *
 * @mixin DirectionSelection
 */

exports.default = function (base) {
  return function (_base) {
    _inherits(DirectionSelection, _base);

    function DirectionSelection() {
      _classCallCheck(this, DirectionSelection);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(DirectionSelection).apply(this, arguments));
    }

    _createClass(DirectionSelection, [{
      key: "goDown",
      value: function goDown() {
        if (_get(Object.getPrototypeOf(DirectionSelection.prototype), "goDown", this)) {
          _get(Object.getPrototypeOf(DirectionSelection.prototype), "goDown", this).call(this);
        }
        return this.selectNext();
      }
    }, {
      key: "goEnd",
      value: function goEnd() {
        if (_get(Object.getPrototypeOf(DirectionSelection.prototype), "goEnd", this)) {
          _get(Object.getPrototypeOf(DirectionSelection.prototype), "goEnd", this).call(this);
        }
        return this.selectLast();
      }
    }, {
      key: "goLeft",
      value: function goLeft() {
        if (_get(Object.getPrototypeOf(DirectionSelection.prototype), "goLeft", this)) {
          _get(Object.getPrototypeOf(DirectionSelection.prototype), "goLeft", this).call(this);
        }
        return this.selectPrevious();
      }
    }, {
      key: "goRight",
      value: function goRight() {
        if (_get(Object.getPrototypeOf(DirectionSelection.prototype), "goRight", this)) {
          _get(Object.getPrototypeOf(DirectionSelection.prototype), "goRight", this).call(this);
        }
        return this.selectNext();
      }
    }, {
      key: "goStart",
      value: function goStart() {
        if (_get(Object.getPrototypeOf(DirectionSelection.prototype), "goStart", this)) {
          _get(Object.getPrototypeOf(DirectionSelection.prototype), "goStart", this).call(this);
        }
        return this.selectFirst();
      }
    }, {
      key: "goUp",
      value: function goUp() {
        if (_get(Object.getPrototypeOf(DirectionSelection.prototype), "goUp", this)) {
          _get(Object.getPrototypeOf(DirectionSelection.prototype), "goUp", this).call(this);
        }
        return this.selectPrevious();
      }

      // Default implementations. These will typically be handled by other mixins.

    }, {
      key: "selectFirst",
      value: function selectFirst() {
        if (_get(Object.getPrototypeOf(DirectionSelection.prototype), "selectFirst", this)) {
          return _get(Object.getPrototypeOf(DirectionSelection.prototype), "selectFirst", this).call(this);
        }
      }
    }, {
      key: "selectLast",
      value: function selectLast() {
        if (_get(Object.getPrototypeOf(DirectionSelection.prototype), "selectLast", this)) {
          return _get(Object.getPrototypeOf(DirectionSelection.prototype), "selectLast", this).call(this);
        }
      }
    }, {
      key: "selectNext",
      value: function selectNext() {
        if (_get(Object.getPrototypeOf(DirectionSelection.prototype), "selectNext", this)) {
          return _get(Object.getPrototypeOf(DirectionSelection.prototype), "selectNext", this).call(this);
        }
      }
    }, {
      key: "selectPrevious",
      value: function selectPrevious() {
        if (_get(Object.getPrototypeOf(DirectionSelection.prototype), "selectPrevious", this)) {
          return _get(Object.getPrototypeOf(DirectionSelection.prototype), "selectPrevious", this).call(this);
        }
      }
    }]);

    return DirectionSelection;
  }(base);
};

},{}],10:[function(require,module,exports){
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
 * Mixin that allows a component to support a "generic" style: a minimalist
 * style that can easily be removed to reset its visual appearance to a baseline
 * state.
 *
 * By default, a component should provide a minimal visual presentation that
 * allows the component to function. However, the more styling the component
 * provides by default, the harder it becomes to get the component to fit in
 * in other settings. Each CSS rule has to be overridden. Worse, new CSS rules
 * added to the default style won't be overridden by default, making it hard to
 * know whether a new version of a component will still look okay.
 *
 * As a compromise, the simple Polymer behavior here defines a "generic"
 * attribute. This attribute is normally set by default, and styles can be
 * written that apply only when the generic attribute is set. This allows the
 * construction of CSS rules that will only apply to generic components like
 *
 *     :host([generic=""]) {
 *       ...
 *     }
 *
 * This makes it easy to remove all default styling -- set the generic attribute
 * to false, and all default styling will be removed.
 */

exports.default = function (base) {
  return function (_base) {
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
       * @property generic
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
        // We roll our own attribute setting so that an explicitly false value shows
        // up as generic="false".
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
};

},{}],11:[function(require,module,exports){
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
 * Mixin which manages ARIA roles for a component that wants to act as a list.
 *
 * @mixin ItemsAccessible
 */

// Used to assign unique IDs to item elements without IDs.
var idCount = 0;

exports.default = function (base) {
  return function (_base) {
    _inherits(ItemsAccessible, _base);

    function ItemsAccessible() {
      _classCallCheck(this, ItemsAccessible);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(ItemsAccessible).apply(this, arguments));
    }

    _createClass(ItemsAccessible, [{
      key: 'applySelection',
      value: function applySelection(item, selected) {
        if (_get(Object.getPrototypeOf(ItemsAccessible.prototype), 'applySelection', this)) {
          _get(Object.getPrototypeOf(ItemsAccessible.prototype), 'applySelection', this).call(this, item, selected);
        }
        item.setAttribute('aria-selected', selected);
        var itemId = item.getAttribute('id');
        if (itemId) {
          this.collective.outermostElement.setAttribute('aria-activedescendant', itemId);
        }
      }
    }, {
      key: 'collectiveChanged',
      value: function collectiveChanged() {
        if (_get(Object.getPrototypeOf(ItemsAccessible.prototype), 'collectiveChanged', this)) {
          _get(Object.getPrototypeOf(ItemsAccessible.prototype), 'collectiveChanged', this).call(this);
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
            element.removeAttribute('role');
          }
        });
      }
    }, {
      key: 'createdCallback',
      value: function createdCallback() {
        if (_get(Object.getPrototypeOf(ItemsAccessible.prototype), 'createdCallback', this)) {
          _get(Object.getPrototypeOf(ItemsAccessible.prototype), 'createdCallback', this).call(this);
        }

        // Determine a base item ID based on this component's host's own ID. This
        // will be combined with a unique integer to assign IDs to items that don't
        // have an explicit ID. If the basic-list-box has ID "foo", then its items
        // will have IDs that look like "_fooOption1". If the list has no ID itself,
        // its items will get IDs that look like "_option1". Item IDs are prefixed
        // with an underscore to differentiate them from manually-assigned IDs, and
        // to minimize the potential for ID conflicts.
        var elementId = this.getAttribute("id");
        this.itemBaseId = elementId ? "_" + elementId + "Option" : "_option";
      }
    }, {
      key: 'itemAdded',
      value: function itemAdded(item) {
        if (_get(Object.getPrototypeOf(ItemsAccessible.prototype), 'itemAdded', this)) {
          _get(Object.getPrototypeOf(ItemsAccessible.prototype), 'itemAdded', this).call(this, item);
        }

        item.setAttribute('role', 'option');

        // Ensure each item has an ID so we can set aria-activedescendant on the
        // overall list whenever the selection changes.
        if (!item.getAttribute('id')) {
          item.setAttribute('id', this.itemBaseId + idCount++);
        }
      }
    }, {
      key: 'selectedItem',
      get: function get() {
        return _get(Object.getPrototypeOf(ItemsAccessible.prototype), 'selectedItem', this);
      },
      set: function set(item) {
        if ('selectedItem' in base.prototype) {
          _set(Object.getPrototypeOf(ItemsAccessible.prototype), 'selectedItem', item, this);
        }
        // Catch the case where the selection is removed.
        if (item == null && this.collective) {
          this.collective.outermostElement.removeAttribute('aria-activedescendant');
        }
      }
    }]);

    return ItemsAccessible;
  }(base);
};

// Return the first ARIA activedescendant defined by the collective.

function getCollectiveAriaActiveDescendant(collective) {
  var descendants = collective.elements.map(function (element) {
    return element.getAttribute('aria-activedescendant');
  });
  return descendants.find(function (descendant) {
    return descendant !== null;
  });
}

// Return the first ARIA label defined by the collective.
function getCollectiveAriaRole(collective) {
  var roles = collective.elements.map(function (element) {
    return element.getAttribute('role');
  });
  return roles.find(function (role) {
    return role !== null;
  });
}

},{}],12:[function(require,module,exports){
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
 * Mixin which manages selection semantics for items in a list.
 *
 * @mixin ItemsSelection
 */

/**
 * Fires when the selectedItem property changes.
 *
 * @event selected-item-changed
 * @param detail.selectedItem The new selected item.
 * @param detail.previousItem The previously selected item.
 */

/**
 * Fires when the selectedIndex property changes.
 *
 * @event selected-item-changed
 * @param detail.selectedIndex The new selected index.
 */

exports.default = function (base) {
  return function (_base) {
    _inherits(ItemsSelection, _base);

    function ItemsSelection() {
      _classCallCheck(this, ItemsSelection);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(ItemsSelection).apply(this, arguments));
    }

    _createClass(ItemsSelection, [{
      key: 'applySelection',

      // Default implementation. This will typically be handled by other mixins.
      value: function applySelection(item, selected) {
        if (_get(Object.getPrototypeOf(ItemsSelection.prototype), 'applySelection', this)) {
          _get(Object.getPrototypeOf(ItemsSelection.prototype), 'applySelection', this).call(this, item, selected);
        }
      }
    }, {
      key: 'itemAdded',
      value: function itemAdded(item) {
        if (_get(Object.getPrototypeOf(ItemsSelection.prototype), 'itemAdded', this)) {
          _get(Object.getPrototypeOf(ItemsSelection.prototype), 'itemAdded', this).call(this, item);
        }
        this.applySelection(item, item === this.selectedItem);
      }
    }, {
      key: 'itemsChanged',
      value: function itemsChanged() {
        if (_get(Object.getPrototypeOf(ItemsSelection.prototype), 'itemsChanged', this)) {
          _get(Object.getPrototypeOf(ItemsSelection.prototype), 'itemsChanged', this).call(this);
        }
        var index = this.items.indexOf(this.selectedItem);
        if (index < 0) {
          // Selected item is no longer in the current set of items.
          this.selectedItem = null;
          if (this.selectionRequired) {
            // Ensure selection, but do this in the next tick to give other
            // mixins a chance to do their own itemsChanged work.
            setTimeout(function () {
              ensureSelection(this);
            }.bind(this));
          }
        }

        // The change in items may have affected which navigations are possible.
        updatePossibleNavigations(this, index);
      }

      /**
       * The index of the item which is currently selected, or -1 if there is no
       * selection.
       *
       * @property selectedIndex
       * @type Number
       */

    }, {
      key: 'selectFirst',

      /**
       * Select the first item in the list.
       *
       * @method selectFirst
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
       * @property selectionRequired
       * @type Boolean
       */

    }, {
      key: 'selectLast',

      /**
       * Select the last item in the list.
       *
       * @method selectLast
       */
      value: function selectLast() {
        if (_get(Object.getPrototypeOf(ItemsSelection.prototype), 'selectLast', this)) {
          _get(Object.getPrototypeOf(ItemsSelection.prototype), 'selectLast', this).call(this);
        }
        return selectIndex(this, this.items.length - 1);
      }

      /**
       * Select the next item in the list.
       *
       * @method selectNext
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
       *
       * @method selectPrevious
       */

    }, {
      key: 'selectPrevious',
      value: function selectPrevious() {
        if (_get(Object.getPrototypeOf(ItemsSelection.prototype), 'selectPrevious', this)) {
          _get(Object.getPrototypeOf(ItemsSelection.prototype), 'selectPrevious', this).call(this);
        }
        return selectIndex(this, this.selectedIndex - 1);
      }
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

        if (selectedItem == null) {
          return -1;
        }

        // TODO: Memoize
        var index = this.indexOfItem(selectedItem);

        // If index = -1, selection wasn't found. Most likely cause is that the
        // DOM was manipulated from underneath us.
        // TODO: Once we track content changes, turn this into an exception.
        return index;
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
       * @property selectedItem
       * @type Object
       */
      // TODO: Confirm item is in items before selecting.

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
          // Remove previous selection.
          this.applySelection(previousItem, false);
        }
        this._selectedItem = item;
        if (item) {
          this.applySelection(item, true);
        }

        // TODO: Rationalize with selectedIndex so we're not recalculating item
        // or index in each setter.
        var index = this.indexOfItem(item);
        updatePossibleNavigations(this, index);

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
        ensureSelection(this);
      }
    }]);

    return ItemsSelection;
  }(base);
};

// If no item is selected, select a default item.
// TODO: If the previously-selected item has been deleted, try to select an
// item adjacent to the position it held.

function ensureSelection(element) {
  if (!element.selectedItem && element.items && element.items.length > 0) {
    element.selectedIndex = 0;
  }
}

// Ensure the given index is within bounds, and select it if it's not already
// selected.
function selectIndex(element, index) {
  var boundedIndex = Math.max(Math.min(index, element.items.length - 1), 0);
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
function updatePossibleNavigations(element, index) {
  var canSelectNext = undefined;
  var canSelectPrevious = undefined;
  var items = element.items;
  if (items == null || items.length === 0) {
    canSelectNext = false;
    canSelectPrevious = false;
  } else if (items.length === 1) {
    // Special case. If there's no selection, we declare that it's always
    // possible to go next/previous to create a selection.
    canSelectNext = true;
    canSelectPrevious = true;
  } else {
    // Normal case: we have an index in a list that has items.
    canSelectPrevious = index > 0;
    canSelectNext = index < items.length - 1;
  }
  element.canSelectNext = canSelectNext;
  element.canSelectPrevious = canSelectPrevious;
}

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

},{}],14:[function(require,module,exports){
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
 * Mixin which maps direction keys (Left, Right, etc.) to direction semantics
 * (goLeft, goRight, etc.).
 *
 * @mixin KeyboardDirection
 */

exports.default = function (base) {
  return function (_base) {
    _inherits(KeyboardDirection, _base);

    function KeyboardDirection() {
      _classCallCheck(this, KeyboardDirection);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(KeyboardDirection).apply(this, arguments));
    }

    _createClass(KeyboardDirection, [{
      key: "goDown",

      // Default implementations. These will typically be handled by other mixins.
      value: function goDown() {
        if (_get(Object.getPrototypeOf(KeyboardDirection.prototype), "goDown", this)) {
          return _get(Object.getPrototypeOf(KeyboardDirection.prototype), "goDown", this).call(this);
        }
      }
    }, {
      key: "goEnd",
      value: function goEnd() {
        if (_get(Object.getPrototypeOf(KeyboardDirection.prototype), "goEnd", this)) {
          return _get(Object.getPrototypeOf(KeyboardDirection.prototype), "goEnd", this).call(this);
        }
      }
    }, {
      key: "goLeft",
      value: function goLeft() {
        if (_get(Object.getPrototypeOf(KeyboardDirection.prototype), "goLeft", this)) {
          return _get(Object.getPrototypeOf(KeyboardDirection.prototype), "goLeft", this).call(this);
        }
      }
    }, {
      key: "goRight",
      value: function goRight() {
        if (_get(Object.getPrototypeOf(KeyboardDirection.prototype), "goRight", this)) {
          return _get(Object.getPrototypeOf(KeyboardDirection.prototype), "goRight", this).call(this);
        }
      }
    }, {
      key: "goStart",
      value: function goStart() {
        if (_get(Object.getPrototypeOf(KeyboardDirection.prototype), "goStart", this)) {
          return _get(Object.getPrototypeOf(KeyboardDirection.prototype), "goStart", this).call(this);
        }
      }
    }, {
      key: "goUp",
      value: function goUp() {
        if (_get(Object.getPrototypeOf(KeyboardDirection.prototype), "goUp", this)) {
          return _get(Object.getPrototypeOf(KeyboardDirection.prototype), "goUp", this).call(this);
        }
      }
    }, {
      key: "keydown",
      value: function keydown(event) {
        var handled = undefined;
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
            if (!event.metaKey && !event.altKey) {
              handled = this.goLeft();
            }
            break;
          case 38:
            // Up
            handled = event.altKey ? this.goStart() : this.goUp();
            break;
          case 39:
            // Right
            if (!event.metaKey && !event.altKey) {
              handled = this.goRight();
            }
            break;
          case 40:
            // Down
            handled = event.altKey ? this.goEnd() : this.goDown();
            break;
        }
        // Prefer mixin result if it's defined, otherwise use base result.
        return handled || _get(Object.getPrototypeOf(KeyboardDirection.prototype), "keydown", this) && _get(Object.getPrototypeOf(KeyboardDirection.prototype), "keydown", this).call(this, event);
      }
    }]);

    return KeyboardDirection;
  }(base);
};

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

/**
 * Mixin which maps touch gestures (swipe left, swipe right) to direction
 * semantics (goRight, goLeft).
 *
 * @mixin SwipeDirection
 */

exports.default = function (base) {
  return function (_base) {
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

        this.position = 0;

        // TODO: Touch events could be factored out into its own mixin.

        // In all touch events, only handle single touches. We don't want to
        // inadvertently do work when the user's trying to pinch-zoom for example.
        // TODO: Even better approach than below would be to ignore touches after
        // the first if the user has already begun a swipe.
        this.addEventListener('touchstart', function (event) {
          if (_this2._multiTouch) {
            return;
          } else if (event.touches.length === 1) {
            touchStart(_this2, event);
          } else {
            _this2._multiTouch = true;
          }
        });
        this.addEventListener('touchmove', function (event) {
          if (!_this2._multiTouch && event.touches.length === 1) {
            var handled = touchMove(_this2, event);
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
              touchEnd(_this2, event);
            }
            _this2._multiTouch = false;
          }
        });
      }

      // Default implementations

    }, {
      key: 'goLeft',
      value: function goLeft() {
        if (_get(Object.getPrototypeOf(SwipeDirection.prototype), 'goLeft', this)) {
          return _get(Object.getPrototypeOf(SwipeDirection.prototype), 'goLeft', this).call(this);
        }
      }
    }, {
      key: 'goRight',
      value: function goRight() {
        if (_get(Object.getPrototypeOf(SwipeDirection.prototype), 'goRight', this)) {
          return _get(Object.getPrototypeOf(SwipeDirection.prototype), 'goRight', this).call(this);
        }
      }

      /**
       * The distance the user has moved the first touchpoint since the beginning
       * of a drag, expressed as a fraction of the element's width.
       *
       * @property position
       * @type Number
       */

    }, {
      key: 'showTransition',

      // Default implementation
      value: function showTransition(value) {
        if (_get(Object.getPrototypeOf(SwipeDirection.prototype), 'showTransition', this)) {
          _get(Object.getPrototypeOf(SwipeDirection.prototype), 'showTransition', this).call(this, value);
        }
      }
    }, {
      key: 'position',
      get: function get() {
        return this._position;
      },
      set: function set(position) {
        if ('position' in base.prototype) {
          _set(Object.getPrototypeOf(SwipeDirection.prototype), 'position', position, this);
        }
        this._position = position;
      }
    }]);

    return SwipeDirection;
  }(base);
};

function touchStart(element, event) {
  element.showTransition(false);
  var x = event.changedTouches[0].clientX;
  var y = event.changedTouches[0].clientY;
  element._startX = x;
  element._previousX = x;
  element._previousY = y;
  element._deltaX = 0;
  element._deltaY = 0;
}

function touchMove(element, event) {
  var x = event.changedTouches[0].clientX;
  var y = event.changedTouches[0].clientY;
  element._deltaX = x - element._previousX;
  element._deltaY = y - element._previousY;
  element._previousX = x;
  element._previousY = y;
  if (Math.abs(element._deltaX) > Math.abs(element._deltaY)) {
    // Move was mostly horizontal.
    trackTo(element, x);
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

function touchEnd(element, event) {
  element.showTransition(true);
  var x = event.changedTouches[0].clientX;
  if (element._deltaX >= 20) {
    // Finished going right at high speed.
    // console.log("flick right " + element._deltaX);
    element.goLeft();
  } else if (element._deltaX <= -20) {
    // Finished going left at high speed.
    // console.log("flick left " + element._deltaX);
    element.goRight();
  } else {
    // Finished at low speed.
    // console.log("slow drag " + element._deltaX);
    trackTo(element, x);
    var position = element.position;
    if (position >= 0.5) {
      element.goRight();
    } else if (position <= -0.5) {
      element.goLeft();
    }
  }
  element.position = 0;
  element._deltaX = null;
  element._deltaY = null;
}

function trackTo(element, x) {
  var width = element.offsetWidth;
  var dragDistance = element._startX - x;
  var fraction = width > 0 ? dragDistance / width : 0;
  element.position = fraction;
}

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

/**
 * Mixin which maps a horizontal trackpad swipe gestures (or horizontal mouse
 * wheel actions) to direction semantics.
 *
 * To respond to the trackpad, we can listen to the DOM's "wheel" events. These
 * events are fired as the user drags their fingers across a trackpad.
 * Unfortunately, this scheme is missing a critical event — there is no event
 * when the user *stops* a gestured on the trackpad.
 *
 * To complicate matters, the mainstream browsers continue to generate wheel
 * events even after the user has stopped dragging their fingers. These fake
 * events simulate the user gradually slowing down the drag until they come to a
 * smooth stop. In some contexts, these fake wheel events might be helpful, but
 * in trying to supply typical trackpad swipe navigation, these fake events get
 * in the way.
 *
 * This component uses some heuristics to work around these problems, but the
 * complex nature of the problem make it extremely difficult to achieve the same
 * degree of trackpad responsiveness possible with native applications.
 *
 * @mixin TrackpadDirection
 */

exports.default = function (base) {
  return function (_base) {
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

      // Default implementations

    }, {
      key: 'goLeft',
      value: function goLeft() {
        if (_get(Object.getPrototypeOf(TrackpadDirection.prototype), 'goLeft', this)) {
          return _get(Object.getPrototypeOf(TrackpadDirection.prototype), 'goLeft', this).call(this);
        }
      }
    }, {
      key: 'goRight',
      value: function goRight() {
        if (_get(Object.getPrototypeOf(TrackpadDirection.prototype), 'goRight', this)) {
          return _get(Object.getPrototypeOf(TrackpadDirection.prototype), 'goRight', this).call(this);
        }
      }
    }, {
      key: 'showTransition',

      // Default implementation
      value: function showTransition(value) {
        if (_get(Object.getPrototypeOf(TrackpadDirection.prototype), 'showTransition', this)) {
          _get(Object.getPrototypeOf(TrackpadDirection.prototype), 'showTransition', this).call(this, value);
        }
      }
    }, {
      key: 'position',
      get: function get() {
        return _get(Object.getPrototypeOf(TrackpadDirection.prototype), 'position', this);
      },
      set: function set(position) {
        if ('position' in base.prototype) {
          _set(Object.getPrototypeOf(TrackpadDirection.prototype), 'position', position, this);
        }
      }
    }]);

    return TrackpadDirection;
  }(base);
};

// Time we wait following a navigation before paying attention to wheel
// events again.

var POST_NAVIGATE_TIME = 250;

// Time we wait after the last wheel event before we reset things.
var WHEEL_TIME = 100;

// Following a navigation, partially reset our wheel tracking.
function postNavigate(element) {
  element.position = 0;
  element._wheelDistance = 0;
  element._postNavigateDelayComplete = true;
  element._absorbDeceleration = true;
  setTimeout(function () {
    element._postNavigateDelayComplete = false;
  }, POST_NAVIGATE_TIME);
}

// Reset all state related to the tracking of the wheel.
function resetWheelTracking(element) {
  element.position = 0;
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

  // Update the position of the items being navigated.
  var width = element.offsetWidth;
  var position = width > 0 ? element._wheelDistance / width : 0;
  element.showTransition(false);
  position = sign(position) * Math.min(Math.abs(position), 1);
  element.position = position;

  // If the user has dragged enough to reach the previous/next item, then
  // complete a navigation to that item.
  if (position === 1) {
    // console.log("goRight");
    element.showTransition(true);
    element.goRight();
    postNavigate(element);
  } else if (position === -1) {
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
  var position = element.position;
  if (position >= 0.5) {
    // console.log("snap right");
    element.goRight();
  } else if (position <= -0.5) {
    // console.log("snap left");
    element.goLeft();
  }

  // TODO: Listen for the transition to complete, and then restore
  // showTransition to false (or the previous value).

  resetWheelTracking(element);
}

},{}],18:[function(require,module,exports){
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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * A sample general-purpose base class for defining custom elements that mixes
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * in some common features: template stamping into a shadow root, automatic node
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * finding, and marshalling between attributes and properties.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This base class is not special in any way, and is defined only as a
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * convenient shorthand for applying the mixins listed above. You can use this
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * class as a base class for your own elements, or easily create your own base
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * class by applying the same set of mixins.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class ElementBase
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

},{"../../basic-component-mixins/src/AttributeMarshalling":2,"../../basic-component-mixins/src/AutomaticNodeFinding":3,"../../basic-component-mixins/src/Composable":7,"../../basic-component-mixins/src/TemplateStamping":16}],19:[function(require,module,exports){
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Presents list items in a viewport such that only a single item is visible at a
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * time. Navigating between items will be represented with a horizontal visual
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * sliding effect.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This component currently requires that you explicitly apply a size to it. For a
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * variant which automatically sizes to its content, see the related component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * basic-sliding-viewport-fit.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class basic-sliding-viewport
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

},{"../../basic-element-base/src/ElementBase":18,"../../basic-spread-items/src/SpreadItems":20}],20:[function(require,module,exports){
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Spreads out a set of items horizontally so they take equal space.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This component currently requires an explicit size by applied to it. For a
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * variant that automatically sizes to fit the list items, see the related
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * component basic-spread-fit.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class basic-spread-items
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
}(_ElementBase2.default.compose(_ChildrenContent2.default));

exports.default = SpreadItems;

document.registerElement('basic-spread-items', SpreadItems);

},{"../../basic-component-mixins/src/ChildrenContent":4,"../../basic-element-base/src/ElementBase":18}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwYWNrYWdlcy9iYXNpYy1jYXJvdXNlbC9zcmMvQ2Fyb3VzZWwuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9BdHRyaWJ1dGVNYXJzaGFsbGluZy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0F1dG9tYXRpY05vZGVGaW5kaW5nLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ2hpbGRyZW5Db250ZW50LmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ29sbGVjdGl2ZS5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NvbGxlY3RpdmVNZW1iZXIuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Db21wb3NhYmxlLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ29udGVudEl0ZW1zLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlyZWN0aW9uU2VsZWN0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvR2VuZXJpYy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0l0ZW1zQWNjZXNzaWJsZS5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0l0ZW1zU2VsZWN0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvS2V5Ym9hcmQuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9LZXlib2FyZERpcmVjdGlvbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1N3aXBlRGlyZWN0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvVGVtcGxhdGVTdGFtcGluZy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1RyYWNrcGFkRGlyZWN0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtZWxlbWVudC1iYXNlL3NyYy9FbGVtZW50QmFzZS5qcyIsInBhY2thZ2VzL2Jhc2ljLXNsaWRpbmctdmlld3BvcnQvc3JjL1NsaWRpbmdWaWV3cG9ydC5qcyIsInBhY2thZ2VzL2Jhc2ljLXNwcmVhZC1pdGVtcy9zcmMvU3ByZWFkSXRlbXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM0R0EsSUFBSSxJQUFJLEdBQUcsc0JBQVksT0FBTyw2UkFZN0IsQ0FBQzs7SUFFbUIsUUFBUTtZQUFSLFFBQVE7O1dBQVIsUUFBUTswQkFBUixRQUFROztrRUFBUixRQUFROzs7ZUFBUixRQUFROzt1Q0FFUjtBQUNqQixxQ0FIaUIsUUFBUSx3Q0FHRztBQUFFLG1DQUhiLFFBQVEsa0RBRzhCO09BQUU7O0FBQUEsQUFFekQsVUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0FBQ3BCLFVBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7S0FDL0I7OzttQ0FrQmMsSUFBSSxFQUFFO0FBQ25CLHFDQTFCaUIsUUFBUSxzQ0EwQkM7QUFBRSxtQ0ExQlgsUUFBUSxnREEwQjBCO09BQUU7QUFDckQsYUFBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDN0M7Ozt3QkFuQmM7QUFDYixhQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxD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QUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDdkIsVUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztBQUN6QixVQUFJLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEFBQUMsS0FBSyxHQUFHLEdBQUcsR0FBSSxHQUFHLENBQUM7QUFDekQsVUFBSSxTQUFTLEdBQUcsQUFBQyxHQUFHLEdBQUcsS0FBSyxHQUFJLEdBQUcsQ0FBQztBQUNwQyxRQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsVUFBQSxJQUFJLEVBQUk7QUFDN0IsWUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO09BQzlCLENBQUMsQ0FBQztLQUNKOzs7d0JBYlc7QUFDVixhQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7S0FDckI7Ozt3QkFhYztBQUNiLGdtQkEyQkU7S0FDSDs7O1NBcERrQixXQUFXO0VBQVMsc0JBQVksT0FBTywyQkFBaUI7O2tCQUF4RCxXQUFXOztBQXlEaEMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxvQkFBb0IsRUFBRSxXQUFXLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKlxuICogTGV0cyB0aGUgdXNlciBuYXZpZ2F0ZSBsYXRlcmFsbHkgdGhyb3VnaCBhIHNlcXVlbmNlIG9mIGNoaWxkIGVsZW1lbnRzLlxuICpcbiAqIGJhc2ljLWNhcm91c2VsIGlzIGFuIGltcGxlbWVudGF0aW9uIG9mIHRoZSBjYXJvdXNlbCB1c2VyIGludGVyZmFjZSBwYXR0ZXJuLFxuICogY29tbW9ubHkgdXNlZCBmb3IgbmF2aWdhdGluZyBiZXR3ZWVuIGltYWdlcywgcGFnZXMsIGFuZCBvdGhlciBlbGVtZW50cy5cbiAqIFRoaXMgcGF0dGVybiBwcmVzZW50cyB0aGUgdXNlciB3aXRoIGEgbGluZWFyIHNlcXVlbmNlIG9mIGVsZW1lbnRzLCBvbmx5IG9uZSBvZlxuICogd2hpY2ggaXMgc2hvd24gYXQgYSB0aW1lLiBUaGUgdXNlciBjYW4gbmF2aWdhdGUgdG8gdGhlIG5leHQvcHJldmlvdXMgZWxlbWVudFxuICogd2l0aCBhIHZhcmlldHkgb2YgaW5wdXQgbWV0aG9kcy5cbiAqXG4gKiBiYXNpYy1jYXJvdXNlbCB1c2VzIGl0cyBjaGlsZHJlbiBhcyB0aGUgZWxlbWVudHMgdGhlIHVzZXIgd2lsbCBuYXZpZ2F0ZSB0aHJvdWdoLlxuICogSW4gYSB0eXBpY2FsIHVzZSwgYSBiYXNpYy1jYXJvdXNlbCBjYW4gYmUgdXNlZCB0byBuYXZpZ2F0ZSBiZXR3ZWVuIGEgc2VxdWVuY2Ugb2ZcbiAqIGltYWdlczpcbiAqXG4gKiAgICAgPGJhc2ljLWNhcm91c2VsPlxuICogICAgICAgPGltZyBzcmM9XCJpbWFnZTEuanBnXCI+XG4gKiAgICAgICA8aW1nIHNyYz1cImltYWdlMi5qcGdcIj5cbiAqICAgICAgIDxpbWcgc3JjPVwiaW1hZ2UzLmpwZ1wiPlxuICogICAgIDwvYmFzaWMtY2Fyb3VzZWw+XG4gKlxuICogVGhlIGNoaWxkIGVsZW1lbnRzIGNhbiBiZSBvZiBhbnkgdHlwZSDigJTCoHRoZXkgYXJlIG5vdCByZXN0cmljdGVkIHRvIGltYWdlcy5cbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBhdHRlbXB0cyB0byBtZWV0IHRoZSBbR29sZCBTdGFuZGFyZCBmb3Igd2ViIGNvbXBvbmVudHNdXG4gKiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYmNvbXBvbmVudHMvZ29sZC1zdGFuZGFyZC93aWtpKSBzbyB0aGF0IGl0IGlzIGdlbmVyYWxseVxuICogYXMgZmxleGlibGUgYW5kIHJvYnVzdCBhcyBzdGFuZGFyZCBIVE1MIGVsZW1lbnRzLiBGb3IgZXhhbXBsZSwgaXQgbWVldHMgdGhlXG4gKiBcIkNvbnRlbnQgQ2hhbmdlc1wiIGNyaXRlcmlhOiB0aGUgY2Fyb3VzZWwgd2lsbCBhZGFwdCB0byBuZXcgY2hpbGQgZWxlbWVudHMgYWRkZWRcbiAqIG9yIHJlbW92ZWQgYXQgcnVudGltZS5cbiAqXG4gKiBDdXJyZW50bHksIHRoaXMgY29tcG9uZW50IGRvZXMgbm90IG1lZXQgdGhlIEdvbGQgU3RhbmRhcmQgY3JpdGVyaWEgXCJTaXplIHRvXG4gKiBDb250ZW50XCIuIEFzIGEgcmVzdWx0LCBmb3IgdGhlIHRpbWUgYmVpbmcsICoqeW91IG11c3QgbWFudWFsbHkgc2V0IGEgc2l6ZSBvblxuICogdGhpcyBjb21wb25lbnQqKi4gVHdvIGFwcHJvYWNoZXMgYXJlIHRvOiAxKSBzdHJldGNoIHRoZSBjb21wb25lbnQgYWNyb3NzXG4gKiB3aGF0ZXZlciBzdXJmYWNlIGl0IGlzIGNvbnRhaW5lZCB3aXRoaW4sIG9yIDIpIHNldCBpdCB0byBiZSBsYXJnZXIgdGhhbiB0aGVcbiAqIGxhcmdlc3QgY2hpbGQgZWxlbWVudCB5b3Ugd2FudCB0byBkaXNwbGF5LiBUaGUgZm9ybWVyIGFwcHJvYWNoIGlzIG1vcmUgY29tbW9uLFxuICogYW5kIGNhbiBiZSBhY2hpZXZlZCB3aXRoIENTUyBzdHlsaW5nIHN1Y2ggYXM6XG4gKlxuICogICAgIGh0bWwge1xuICogICAgICAgaGVpZ2h0OiAxMDAlO1xuICogICAgIH1cbiAqXG4gKiAgICAgYm9keSB7XG4gKiAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gKiAgICAgICBkaXNwbGF5OiBmbGV4O1xuICogICAgICAgaGVpZ2h0OiAxMDAlO1xuICogICAgICAgbWFyZ2luOiAwO1xuICogICAgIH1cbiAqXG4gKiAgICAgYmFzaWMtY2Fyb3VzZWwge1xuICogICAgICAgLXdlYmtpdC1mbGV4OiAxO1xuICogICAgICAgZmxleDogMTtcbiAqICAgICB9XG4gKlxuICogQWx0ZXJuYXRpdmVseSwgeW91IGNhbiB1c2UgYSBzZXBhcmF0ZSBjb21wb25lbnQsXG4gKiBbYmFzaWMtY2Fyb3VzZWwtZml0XShodHRwOi8vZ2l0aHViLmNvbS9iYXNpYy13ZWItY29tcG9uZW50cy9iYXNpYy1jYXJvdXNlbC1maXQpLFxuICogd2hpY2ggaXMgZGVzaWduZWQgdG8gYXV0b21hdGljYWxseSBzaXplIGl0c2VsZiB0byBpdHMgbGFyZ2VzdCBjaGlsZCBlbGVtZW50cy5cbiAqXG4gKiBUaGUgc3RhbmRhcmQgYmFzaWMtY2Fyb3VzZWwgY29tcG9uZW50IHN1cHBvcnRzIG5hdmlnYXRpb24gdmlhIHRoZSBmb2xsb3dpbmdcbiAqIGlucHV0IG1ldGhvZHM6XG4gKlxuICogKiBLZXlib2FyZC4gV2hlbiB0aGUgY2Fyb3VzZWwgaGFzIGZvY3VzLCB0aGUgdXNlciBjYW4gcHJlc3MgTGVmdCwgUmlnaHQsIEhvbWUsXG4gKiBvciBFbmQuIFRoZXNlIG5hdmlnYXRlIHRvIHRoZSBleHBlY3RlZCBlbGVtZW50LlxuICogKiBUb3VjaC4gT24gbW9iaWxlIGFuZCBvdGhlciB0b3VjaC1lbmFibGVkIGRldmljZXMsIHRoZSB1c2VyIGNhbiBkcmFnIGxlZnQgb3JcbiAqIHJpZ2h0LlxuICogKiBUcmFja3BhZC4gVGhlIHVzZXIgY2FuIHN3aXBlIGxlZnQgb3IgcmlnaHQgb24gYSB0cmFja3BhZCB0byBuYXZpZ2F0ZS5cbiAqXG4gKiBiYXNpYy1jYXJvdXNlbCBzdXBwb3J0cyBhIHZhcmlldHkgb2Ygb3B0aW9uYWwgdXNlciBpbnRlcmZhY2UgYWNjZXNzb3JpZXM6XG4gKiAqIFtiYXNpYy1hcnJvdy1kaXJlY3Rpb25dKGh0dHA6Ly9naXRodWIuY29tL2Jhc2ljLXdlYi1jb21wb25lbnRzL2Jhc2ljLWFycm93LWRpcmVjdGlvbikuXG4gKiAgIFRoaXMgYWRkcyBwcm9taW5lbnQgbGVmdCBhbmQgcmlnaHQgYXJyb3cgYnV0dG9ucyBvbiB0aGUgc2lkZSBvZiB0aGUgY2Fyb3VzZWwuXG4gKiAqIFtiYXNpYy1wYWdlLWRvdHNdKGh0dHA6Ly9naXRodWIuY29tL2Jhc2ljLXdlYi1jb21wb25lbnRzL2Jhc2ljLXBhZ2UtZG90cykuXG4gKiAgIFRoaXMgYWRkcyBhIHNlcmllcyBvZiBzbWFsbCBkb3RzIGJlbG93IHRoZSBjYXJvdXNlbCB0byBpbmRpY2F0ZSB0aGUgdXNlcidzXG4gKiAgIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIHNlcXVlbmNlLlxuICpcbiAqIFNlZSB0aG9zZSBjb21wb25lbnRzIGZvciBtb3JlIGRldGFpbHMsIGJ1dCBpbiBnZW5lcmFsIHlvdSBjYW4gY29uc3RydWN0IGEgY29tbW9uXG4gKiBjYXJvdXNlbCB3aXRoIGJvdGggYXJyb3cgYnV0dG9ucyBhbmQgZG90cyBsaWtlIHNvOlxuICpcbiAqICAgICA8YmFzaWMtYXJyb3ctZGlyZWN0aW9uIHRhcmdldD1cImNoaWxkXCI+XG4gKiAgICAgICA8YmFzaWMtcGFnZS1kb3RzIHRhcmdldD1cImNoaWxkXCI+XG4gKiAgICAgICAgIDxiYXNpYy1jYXJvdXNlbD5cbiAqICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlMS5qcGdcIj5cbiAqICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlMi5qcGdcIj5cbiAqICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlMy5qcGdcIj5cbiAqICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlNC5qcGdcIj5cbiAqICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlNS5qcGdcIj5cbiAqICAgICAgICAgPC9iYXNpYy1jYXJvdXNlbD5cbiAqICAgICAgIDwvYmFzaWMtcGFnZS1kb3RzPlxuICogICAgIDwvYmFzaWMtYXJyb3ctZGlyZWN0aW9uPlxuICpcbiAqIEZvciB1bml2ZXJzYWwgYWNjZXNzLCBiYXNpYy1jYXJvdXNlbCBhdXRvbWF0aWNhbGx5IGFkZHMgYSB2YXJpZXR5IG9mXG4gKiBbQVJJQV0oaHR0cDovL3d3dy53My5vcmcvV0FJL2ludHJvL2FyaWEpIHByb3BlcnRpZXMgdG8gaXRzZWxmIGFuZCB0byBjaGlsZFxuICogZWxlbWVudHMuIFRoaXMgaGVscHMgdXNlcnMgbmF2aWdhdGUgdGhlIHNlcXVlbmNlIG9mIGVsZW1lbnRzIGluIHRoZSBjYXJvdXNlbFxuICogdXNpbmcgYXNzaXN0aXZlIHRlY2hub2xvZ2llcy5cbiAqXG4gKiBAY2xhc3MgQ2Fyb3VzZWxcbiAqL1xuXG5cbmltcG9ydCBFbGVtZW50QmFzZSBmcm9tICcuLi8uLi9iYXNpYy1lbGVtZW50LWJhc2Uvc3JjL0VsZW1lbnRCYXNlJztcbmltcG9ydCBDaGlsZHJlbkNvbnRlbnQgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ2hpbGRyZW5Db250ZW50JztcbmltcG9ydCBDb2xsZWN0aXZlTWVtYmVyIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NvbGxlY3RpdmVNZW1iZXInO1xuaW1wb3J0IENvbnRlbnRJdGVtcyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Db250ZW50SXRlbXMnO1xuaW1wb3J0IERpcmVjdGlvblNlbGVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXJlY3Rpb25TZWxlY3Rpb24nO1xuaW1wb3J0IEdlbmVyaWMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvR2VuZXJpYyc7XG5pbXBvcnQgSXRlbXNBY2Nlc3NpYmxlIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0l0ZW1zQWNjZXNzaWJsZSc7XG5pbXBvcnQgSXRlbXNTZWxlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvSXRlbXNTZWxlY3Rpb24nO1xuaW1wb3J0IEtleWJvYXJkIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0tleWJvYXJkJztcbmltcG9ydCBLZXlib2FyZERpcmVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9LZXlib2FyZERpcmVjdGlvbic7XG5pbXBvcnQgU2xpZGluZ1ZpZXdwb3J0IGZyb20gJy4uLy4uL2Jhc2ljLXNsaWRpbmctdmlld3BvcnQvc3JjL1NsaWRpbmdWaWV3cG9ydCc7IC8vIGpzaGludCBpZ25vcmU6bGluZVxuaW1wb3J0IFN3aXBlRGlyZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1N3aXBlRGlyZWN0aW9uJztcbmltcG9ydCBUcmFja3BhZERpcmVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9UcmFja3BhZERpcmVjdGlvbic7XG5cbmxldCBiYXNlID0gRWxlbWVudEJhc2UuY29tcG9zZShcbiAgQ2hpbGRyZW5Db250ZW50LFxuICBDb2xsZWN0aXZlTWVtYmVyLFxuICBDb250ZW50SXRlbXMsXG4gIERpcmVjdGlvblNlbGVjdGlvbixcbiAgR2VuZXJpYyxcbiAgSXRlbXNTZWxlY3Rpb24sXG4gIEl0ZW1zQWNjZXNzaWJsZSxcbiAgS2V5Ym9hcmQsXG4gIEtleWJvYXJkRGlyZWN0aW9uLFxuICBTd2lwZURpcmVjdGlvbixcbiAgVHJhY2twYWREaXJlY3Rpb25cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcm91c2VsIGV4dGVuZHMgYmFzZSB7XG5cbiAgYXR0YWNoZWRDYWxsYmFjaygpIHtcbiAgICBpZiAoc3VwZXIuYXR0YWNoZWRDYWxsYmFjaykgeyBzdXBlci5hdHRhY2hlZENhbGxiYWNrKCk7IH1cbiAgICAvLyBIQUNLXG4gICAgdGhpcy5pdGVtc0NoYW5nZWQoKTtcbiAgICB0aGlzLnNlbGVjdGlvblJlcXVpcmVkID0gdHJ1ZTtcbiAgfVxuXG4gIGdldCBwb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kLnZpZXdwb3J0LnBvc2l0aW9uO1xuICB9XG4gIHNldCBwb3NpdGlvbih2YWx1ZSkge1xuICAgIGlmICgncG9zaXRpb24nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnBvc2l0aW9uID0gdmFsdWU7IH1cbiAgICB0aGlzLiQudmlld3BvcnQucG9zaXRpb24gPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBzZWxlY3RlZEl0ZW0oKSB7XG4gICAgcmV0dXJuIHN1cGVyLnNlbGVjdGVkSXRlbTtcbiAgfVxuICBzZXQgc2VsZWN0ZWRJdGVtKGl0ZW0pIHtcbiAgICBpZiAoJ3NlbGVjdGVkSXRlbScgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJdGVtID0gaXRlbTsgfVxuICAgIHRoaXMuJC52aWV3cG9ydC5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xuICB9XG5cbiAgc2hvd1RyYW5zaXRpb24oc2hvdykge1xuICAgIGlmIChzdXBlci5zaG93VHJhbnNpdGlvbikgeyBzdXBlci5zaG93VHJhbnNpdGlvbigpOyB9XG4gICAgcmV0dXJuIHRoaXMuJC52aWV3cG9ydC5zaG93VHJhbnNpdGlvbihzaG93KTtcbiAgfVxuXG4gIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gYFxuICAgICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB9XG5cbiAgICAgIGJhc2ljLXNsaWRpbmctdmlld3BvcnQge1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC13ZWJraXQtZmxleDogMTtcbiAgICAgICAgZmxleDogMTtcbiAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxiYXNpYy1zbGlkaW5nLXZpZXdwb3J0IGlkPVwidmlld3BvcnRcIj5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgPC9iYXNpYy1zbGlkaW5nLXZpZXdwb3J0PlxuICAgIGA7XG4gIH1cblxufVxuXG5cbmRvY3VtZW50LnJlZ2lzdGVyRWxlbWVudCgnYmFzaWMtY2Fyb3VzZWwnLCBDYXJvdXNlbCk7XG4iLCIvKipcbiAqIE1hcnNoYWxsIGF0dHJpYnV0ZXMgdG8gcHJvcGVydGllcyAoYW5kIGV2ZW50dWFsbHkgdmljZSB2ZXJzYSkuXG4gKiBPbmx5IHN1cHBvcnRzIHN0cmluZyBwcm9wZXJ0aWVzIGZvciBub3cuXG4gKlxuICogQG1peGluIEF0dHJpYnV0ZU1hcnNoYWxsaW5nXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IGNsYXNzIEF0dHJpYnV0ZU1hcnNoYWxsaW5nIGV4dGVuZHMgYmFzZSB7XG5cbiAgLypcbiAgICogSGFuZGxlIGEgY2hhbmdlIHRvIHRoZSBhdHRyaWJ1dGUgd2l0aCB0aGUgZ2l2ZW4gbmFtZS5cbiAgICovXG4gIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcbiAgICBpZiAoc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKSB7IHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjaygpOyB9XG4gICAgLy8gSWYgdGhlIGF0dHJpYnV0ZSBuYW1lIGNvcnJlc3BvbmRzIHRvIGEgcHJvcGVydHkgbmFtZSwgdGhlbiBzZXQgdGhhdFxuICAgIC8vIHByb3BlcnR5LiBJZ25vcmUgY2hhbmdlcyBpbiBzdGFuZGFyZCBIVE1MRWxlbWVudCBwcm9wZXJ0aWVzLlxuICAgIGxldCBwcm9wZXJ0eU5hbWUgPSBhdHRyaWJ1dGVUb1Byb3BlcnR5TmFtZShuYW1lKTtcbiAgICBpZiAocHJvcGVydHlOYW1lIGluIHRoaXMgJiYgIShwcm9wZXJ0eU5hbWUgaW4gSFRNTEVsZW1lbnQucHJvdG90eXBlKSkge1xuICAgICAgdGhpc1twcm9wZXJ0eU5hbWVdID0gbmV3VmFsdWU7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cbiAgICBbXS5mb3JFYWNoLmNhbGwodGhpcy5hdHRyaWJ1dGVzLCBhdHRyaWJ1dGUgPT4ge1xuICAgICAgdGhpcy5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soYXR0cmlidXRlLm5hbWUsIHVuZGVmaW5lZCwgYXR0cmlidXRlLnZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG59O1xuXG5cbi8vIENvbnZlcnQgY2FtZWwgY2FzZSBmb29CYXIgbmFtZSB0byBoeXBoZW5hdGVkIGZvby1iYXIuXG5mdW5jdGlvbiBhdHRyaWJ1dGVUb1Byb3BlcnR5TmFtZShhdHRyaWJ1dGVOYW1lKSB7XG4gIGxldCBwcm9wZXJ0eU5hbWUgPSBhdHRyaWJ1dGVOYW1lLnJlcGxhY2UoLy0oW2Etel0pL2csIG0gPT4gbVsxXS50b1VwcGVyQ2FzZSgpKTtcbiAgcmV0dXJuIHByb3BlcnR5TmFtZTtcbn1cblxuLy8gQ29udmVydCBoeXBoZW5hdGVkIGZvby1iYXIgbmFtZSB0byBjYW1lbCBjYXNlIGZvb0Jhci5cbi8vIFRPRE86IFVzZSB0aGlzIHdoZW4gd2Ugc3VwcG9ydCByZWZsZWN0aW9uIG9mIHByb3BlcnRpZXMgdG8gYXR0cmlidXRlcy5cbi8vIGZ1bmN0aW9uIHByb3BlcnR5VG9BdHRyaWJ1dGVOYW1lKHByb3BlcnR5TmFtZSkge1xuLy8gICBsZXQgYXR0cmlidXRlTmFtZSA9IHByb3BlcnR5TmFtZS5yZXBsYWNlKC8oW2Etel1bQS1aXSkvZywgZyA9PiBnWzBdICsgJy0nICsgZ1sxXS50b0xvd2VyQ2FzZSgpKTtcbi8vICAgcmV0dXJuIGF0dHJpYnV0ZU5hbWU7XG4vLyB9XG4iLCIvKipcbiAqIE1peGluIHRvIHN1cHBvcnQgUG9seW1lci1zdHlsZSBhdXRvbWF0aWMgbm9kZSBmaW5kaW5nLlxuICpcbiAqIFRoaXMgYWRkcyBhIG1lbWJlciBvbiB0aGUgY29tcG9uZW50IGNhbGxlZCBgJGAgdGhhdCBjYW4gYmUgdXNlZCB0byByZWZlcmVuY2VcbiAqIGVsZW1lbnRzIHdpdGggSURzLiBFLmcuLCBpZiBjb21wb25lbnQncyBzaGFkb3cgY29udGFpbnMgYW4gZWxlbWVudFxuICogYDxidXR0b24gaWQ9XCJmb29cIj5gLCB0aGVuIHRoaXMgbWl4aW4gd2lsbCBjcmVhdGUgYSBtZW1iZXIgYHRoaXMuJC5mb29gIHRoYXRcbiAqIHBvaW50cyB0byB0aGF0IGJ1dHRvbi4gU3VjaCByZWZlcmVuY2VzIHNpbXBsaWZ5IGEgY29tcG9uZW50J3MgYWNjZXNzIHRvIGl0c1xuICogb3duIGVsZW1lbnRzLlxuICpcbiAqIFRoaXMgdHJhZGVzIG9mZiBhIG9uZS10aW1lIGNvc3Qgb2YgcXVlcnlpbmcgYWxsIGVsZW1lbnRzIGluIHRoZSBzaGFkb3cgdHJlZVxuICogYWdhaW5zdCBoYXZpbmcgdG8gcXVlcnkgZm9yIGFuIGVsZW1lbnQgZWFjaCB0aW1lIHRoZSBjb21wb25lbnQgd2FudHMgdG9cbiAqIGluc3BlY3Qgb3IgbWFuaXB1bGF0ZSBpdC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly93d3cucG9seW1lci1wcm9qZWN0Lm9yZy8xLjAvZG9jcy9kZXZndWlkZS9sb2NhbC1kb20uaHRtbCNub2RlLWZpbmRpbmcuXG4gKlxuICogQG1peGluIEF1dG9tYXRpY05vZGVGaW5kaW5nXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IGNsYXNzIEF1dG9tYXRpY05vZGVGaW5kaW5nIGV4dGVuZHMgYmFzZSB7XG5cbiAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cbiAgICBpZiAodGhpcy5zaGFkb3dSb290KSB7XG4gICAgICB0aGlzLiQgPSB7fTtcbiAgICAgIGxldCBub2Rlc1dpdGhJZHMgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvckFsbCgnW2lkXScpO1xuICAgICAgW10uZm9yRWFjaC5jYWxsKG5vZGVzV2l0aElkcywgbm9kZSA9PiB7XG4gICAgICAgIGxldCBpZCA9IG5vZGUuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgICAgICB0aGlzLiRbaWRdID0gbm9kZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG59O1xuIiwiLyoqXG4gKiBNaXhpbiB0aGF0IGRlZmluZXMgYSBjb21wb25lbnQncyBjb250ZW50IGFzIGl0cyBjaGlsZHJlbi4gQ2hhbmdlcyBpbiB0aGVcbiAqIGNvbnRlbnQgd2lsbCBiZSB0cmFja2VkLCBhbmQgYSBjb250ZW50Q2hhbmdlZCBtZXRob2Qgd2lsbCBiZSBpbnZva2VkIG9uIHRoZVxuICogY29tcG9uZW50IHdoZW4gaXRzIGNoaWxkcmVuIGNoYW5nZS5cbiAqXG4gKiBAbWl4aW4gQ2hpbGRyZW5Db250ZW50XG4gKi9cblxuLy8gVE9ETzogRG9uJ3QgcmVzcG9uZCB0byBjaGFuZ2VzIGluIGF0dHJpYnV0ZXMsIG9yIGF0IGxlYXN0IG9mZmVyIHRoYXQgYXMgYW5cbi8vIG9wdGlvbi5cblxuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IGNsYXNzIENoaWxkcmVuQ29udGVudCBleHRlbmRzIGJhc2Uge1xuXG4gIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG4gICAgb2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzKHRoaXMpO1xuXG4gICAgLy8gTWFrZSBhbiBpbml0aWFsIGNhbGwgdG8gY29udGVudENoYW5nZWQoKSBzbyB0aGF0IHRoZSBjb21wb25lbnQgY2FuIGRvXG4gICAgLy8gaW5pdGlhbGl6YXRpb24gdGhhdCBpdCBub3JtYWxseSBkb2VzIHdoZW4gY29udGVudCBjaGFuZ2VzLlxuICAgIC8vXG4gICAgLy8gVGhpcyB3aWxsIGludm9rZSBjb250ZW50Q2hhbmdlZCgpIGhhbmRsZXJzIGluIG90aGVyIG1peGlucy4gSW4gb3JkZXIgdGhhdFxuICAgIC8vIHRob3NlIG1peGlucyBoYXZlIGEgY2hhbmNlIHRvIGNvbXBsZXRlIHRoZWlyIG93biBpbml0aWFsaXphdGlvbiwgd2UgYWRkXG4gICAgLy8gdGhlIGNvbnRlbnRDaGFuZ2VkKCkgY2FsbCB0byB0aGUgbWljcm90YXNrIHF1ZXVlIHZpYSBhIHByb21pc2UuXG4gICAgLy8gU2VlIGh0dHBzOi8vamFrZWFyY2hpYmFsZC5jb20vMjAxNS90YXNrcy1taWNyb3Rhc2tzLXF1ZXVlcy1hbmQtc2NoZWR1bGVzL1xuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy5jb250ZW50Q2hhbmdlZCgpKTtcbiAgfVxuXG4gIGNvbnRlbnRDaGFuZ2VkKCkge1xuICAgIGlmIChzdXBlci5jb250ZW50Q2hhbmdlZCkgeyBzdXBlci5jb250ZW50Q2hhbmdlZCgpOyB9XG4gICAgbGV0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdjb250ZW50LWNoYW5nZWQnKTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZWQoKSB7XG4gICAgLy8gTWFrZSBhbiBpbml0aWFsIGNhbGwgdG8gY29udGVudENoYW5nZWQoKSBzbyB0aGF0IHRoZSBjb21wb25lbnQgY2FuIGRvXG4gICAgLy8gaW5pdGlhbGl6YXRpb24gdGhhdCBpdCBub3JtYWxseSBkb2VzIHdoZW4gY29udGVudCBjaGFuZ2VzLlxuICAgIHRoaXMuY29udGVudENoYW5nZWQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgZmxhdHRlbmVkIGNvbnRlbnQgb2YgdGhpcyBjb21wb25lbnQuXG4gICAqXG4gICAqIEBwcm9wZXJ0eSBjb250ZW50XG4gICAqIEB0eXBlIFtPYmplY3RdXG4gICAqL1xuICBnZXQgY29udGVudCgpIHtcbiAgICByZXR1cm4gZXhwYW5kQ29udGVudEVsZW1lbnRzKHRoaXMuY2hpbGRyZW4pO1xuICB9XG4gIHNldCBjb250ZW50KHZhbHVlKSB7XG4gICAgaWYgKCdjb250ZW50JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5jb250ZW50ID0gdmFsdWU7IH1cbiAgfVxuXG4gIC8qXG4gICAqIFJldHVybnMgYW4gaW4tb3JkZXIgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiwgZXhwYW5kaW5nIGFueSBjb250ZW50IG5vZGVzLlxuICAgKiBMaWtlIHRoZSBzdGFuZGFyZCBjaGlsZHJlbiBwcm9wZXJ0eSwgdGhpcyBza2lwcyB0ZXh0IG5vZGVzLlxuICAgKlxuICAgKiBUT0RPOiBUaGlzIHdhbGtzIHRoZSB3aG9sZSBjb250ZW50IHRyZWUgZXZlcnkgdGltZSB0aGUgbGlzdCBpcyByZXF1ZXN0ZWQuXG4gICAqIEl0J2QgYmUgbmljZSB0byBjYWNoZSB0aGUgYW5zd2VyIGFuZCBpbnZhbGlkYXRlIGl0IG9ubHkgd2hlbiBjb250ZW50XG4gICAqIGFjdHVhbGx5IGNoYW5nZXMuXG4gICAqL1xuICBnZXQgZGlzdHJpYnV0ZWRDaGlsZHJlbigpIHtcbiAgICByZXR1cm4gZXhwYW5kQ29udGVudEVsZW1lbnRzKHRoaXMuY2hpbGRyZW4sIGZhbHNlKTtcbiAgfVxuXG4gIC8qXG4gICAqIFJldHVybnMgYW4gaW4tb3JkZXIgY29sbGVjdGlvbiBvZiBjaGlsZCBub2RlcywgZXhwYW5kaW5nIGFueSBjb250ZW50IG5vZGVzLlxuICAgKiBMaWtlIHRoZSBzdGFuZGFyZCBjaGlsZE5vZGVzIHByb3BlcnR5LCB0aGlzIGluY2x1ZGVzIHRleHQgbm9kZXMuXG4gICAqL1xuICBnZXQgZGlzdHJpYnV0ZWRDaGlsZE5vZGVzKCkge1xuICAgIHJldHVybiBleHBhbmRDb250ZW50RWxlbWVudHModGhpcy5jaGlsZE5vZGVzLCB0cnVlKTtcbiAgfVxuXG4gIC8qXG4gICAqIFJldHVybnMgdGhlIGNvbmNhdGVuYXRlZCB0ZXh0IGNvbnRlbnQgb2YgYWxsIGNoaWxkIG5vZGVzLCBleHBhbmRpbmcgYW55XG4gICAqIGNvbnRlbnQgbm9kZXMuXG4gICAqL1xuICBnZXQgZGlzdHJpYnV0ZWRUZXh0Q29udGVudCgpIHtcbiAgICBsZXQgc3RyaW5ncyA9IHRoaXMuZGlzdHJpYnV0ZWRDaGlsZE5vZGVzLm1hcChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgcmV0dXJuIGNoaWxkLnRleHRDb250ZW50O1xuICAgIH0pO1xuICAgIHJldHVybiBzdHJpbmdzLmpvaW4oJycpO1xuICB9XG5cbn07XG5cblxuLypcbiAqIEdpdmVuIGEgYXJyYXkgb2Ygbm9kZXMsIHJldHVybiBhIG5ldyBhcnJheSB3aXRoIGFueSBjb250ZW50IGVsZW1lbnRzIGV4cGFuZGVkXG4gKiB0byB0aGUgbm9kZXMgZGlzdHJpYnV0ZWQgdG8gdGhhdCBjb250ZW50IGVsZW1lbnQuIFRoaXMgcnVsZSBpcyBhcHBsaWVkXG4gKiByZWN1cnNpdmVseS5cbiAqXG4gKiBJZiBpbmNsdWRlVGV4dE5vZGVzIGlzIHRydWUsIHRleHQgbm9kZXMgd2lsbCBiZSBpbmNsdWRlZCwgYXMgaW4gdGhlXG4gKiBzdGFuZGFyZCBjaGlsZE5vZGVzIHByb3BlcnR5OyBieSBkZWZhdWx0LCB0aGlzIHNraXBzIHRleHQgbm9kZXMsIGxpa2UgdGhlXG4gKiBzdGFuZGFyZCBjaGlsZHJlbiBwcm9wZXJ0eS5cbiAqL1xuZnVuY3Rpb24gZXhwYW5kQ29udGVudEVsZW1lbnRzKG5vZGVzLCBpbmNsdWRlVGV4dE5vZGVzKSB7XG4gIGxldCBleHBhbmRlZCA9IEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChub2Rlcywgbm9kZSA9PiB7XG4gICAgLy8gV2Ugd2FudCB0byBzZWUgaWYgdGhlIG5vZGUgaXMgYW4gaW5zdGFuY2VvZiBIVE1MU2xvdEVMZW1lbnQsIGJ1dFxuICAgIC8vIHRoYXQgY2xhc3Mgd29uJ3QgZXhpc3QgaWYgdGhlIGJyb3dzZXIgdGhhdCBkb2Vzbid0IHN1cHBvcnQgbmF0aXZlXG4gICAgLy8gU2hhZG93IERPTSBhbmQgaWYgdGhlIFNoYWRvdyBET00gcG9seWZpbGwgaGFzbid0IGJlZW4gbG9hZGVkLiBJbnN0ZWFkLFxuICAgIC8vIHdlIGRvIGEgc2ltcGxpc3RpYyBjaGVjayB0byBzZWUgaWYgdGhlIHRhZyBuYW1lIGlzIFwic2xvdFwiIG9yIFwiY29udGVudFwiLlxuICAgIGlmIChub2RlLmxvY2FsTmFtZSAmJiAobm9kZS5sb2NhbE5hbWUgPT09IFwic2xvdFwiIHx8IG5vZGUubG9jYWxOYW1lID09PSBcImNvbnRlbnRcIikpIHtcbiAgICAgIC8vIGNvbnRlbnQgZWxlbWVudDsgdXNlIGl0cyBkaXN0cmlidXRlZCBub2RlcyBpbnN0ZWFkLlxuICAgICAgbGV0IGRpc3RyaWJ1dGVkTm9kZXMgPSBub2RlLmdldERpc3RyaWJ1dGVkTm9kZXMoKTtcbiAgICAgIHJldHVybiBkaXN0cmlidXRlZE5vZGVzID9cbiAgICAgICAgZXhwYW5kQ29udGVudEVsZW1lbnRzKGRpc3RyaWJ1dGVkTm9kZXMsIGluY2x1ZGVUZXh0Tm9kZXMpIDpcbiAgICAgICAgW107XG4gICAgfSBlbHNlIGlmIChub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIC8vIFBsYWluIGVsZW1lbnQ7IHVzZSBhcyBpcy5cbiAgICAgIHJldHVybiBbbm9kZV07XG4gICAgfSBlbHNlIGlmIChub2RlIGluc3RhbmNlb2YgVGV4dCAmJiBpbmNsdWRlVGV4dE5vZGVzKSB7XG4gICAgICAvLyBUZXh0IG5vZGUuXG4gICAgICByZXR1cm4gW25vZGVdO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDb21tZW50LCBwcm9jZXNzaW5nIGluc3RydWN0aW9uLCBldGMuOyBza2lwLlxuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfSk7XG4gIGxldCBmbGF0dGVuZWQgPSBbXS5jb25jYXQoLi4uZXhwYW5kZWQpO1xuICByZXR1cm4gZmxhdHRlbmVkO1xufVxuXG5cbmZ1bmN0aW9uIG9ic2VydmVDb250ZW50Q2hhbmdlcyhlbGVtZW50KSB7XG4gIGVsZW1lbnQuX2NvbnRlbnRDaGFuZ2VPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+XG4gICAgZWxlbWVudC5jb250ZW50Q2hhbmdlZCgpXG4gICk7XG4gIGVsZW1lbnQuX2NvbnRlbnRDaGFuZ2VPYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQsIHtcbiAgICAvLyBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgIGNoYXJhY3RlckRhdGE6IHRydWUsXG4gICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgIHN1YnRyZWU6IHRydWVcbiAgfSk7XG59XG4iLCIvKipcbiAqIEEgZ3JvdXAgb2YgZWxlbWVudHMgdGhhdCBoYXZlIGJlZW4gam9pbmVkIHRvZ2V0aGVyIGZvciB0aGUgcHVycG9zZSBvZlxuICogYWNjb21wbGlzaGluZyBzb21lIGNvbGxlY3RpdmUgYmVoYXZpb3IsIGUuZy4sIGtleWJvYXJkIGhhbmRsaW5nLlxuICpcbiAqIFRoaXMgaXNuJ3QgYSBtaXhpbiwgYnV0IGEgY2xhc3MgdXNlZCBieSB0aGUgQ29sbGVjdGl2ZU1lbWJlciBtaXhpbi5cbiAqXG4gKiBAY2xhc3MgQ29sbGVjdGl2ZVxuICovXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sbGVjdGl2ZSB7XG5cbiAgY29uc3RydWN0b3IoLi4uZWxlbWVudHMpIHtcbiAgICB0aGlzLmVsZW1lbnRzID0gW107XG4gICAgZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHRoaXMuYXNzaW1pbGF0ZShlbGVtZW50KSk7XG4gIH1cblxuICBhc3NpbWlsYXRlKHRhcmdldCkge1xuICAgIGxldCBjb2xsZWN0aXZlQ2hhbmdlZDtcbiAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgQ29sbGVjdGl2ZSkge1xuICAgICAgY29sbGVjdGl2ZUNoYW5nZWQgPSBhc3NpbWlsYXRlQ29sbGVjdGl2ZSh0aGlzLCB0YXJnZXQpO1xuICAgIH0gZWxzZSBpZiAodGFyZ2V0LmNvbGxlY3RpdmUpIHtcbiAgICAgIC8vIFRhcmdldCBpcyBhbHJlYWR5IHBhcnQgb2YgYSBjb2xsZWN0aXZlLCBhc3NpbWlsYXRlIGl0LlxuICAgICAgY29sbGVjdGl2ZUNoYW5nZWQgPSBhc3NpbWlsYXRlQ29sbGVjdGl2ZSh0aGlzLCB0YXJnZXQuY29sbGVjdGl2ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEFzc2ltaWxhdGUgYW4gaW5kaXZpZHVhbCBlbGVtZW50LlxuICAgICAgY29sbGVjdGl2ZUNoYW5nZWQgPSBhc3NpbWlsYXRlRWxlbWVudCh0aGlzLCB0YXJnZXQpO1xuICAgIH1cbiAgICBcbiAgICBpZiAoY29sbGVjdGl2ZUNoYW5nZWQpIHtcbiAgICAgIHRoaXMuaW52b2tlTWV0aG9kKCdjb2xsZWN0aXZlQ2hhbmdlZCcpO1xuICAgIH1cbiAgfVxuXG4gIGludm9rZU1ldGhvZChtZXRob2QsIC4uLmFyZ3MpIHtcbiAgICAvLyBJbnZva2UgZnJvbSBpbm5lcm1vc3QgdG8gb3V0ZXJtb3N0LlxuICAgIGxldCBlbGVtZW50cyA9IHRoaXMuZWxlbWVudHM7XG4gICAgZm9yIChsZXQgaSA9IGVsZW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xuICAgICAgaWYgKGVsZW1lbnRbbWV0aG9kXSkge1xuICAgICAgICBlbGVtZW50W21ldGhvZF0uYXBwbHkoZWxlbWVudCwgYXJncyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0IG91dGVybW9zdEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudHNbMF07XG4gIH1cblxufVxuXG5cbi8vIFRoZSBmaXJzdCBjb2xsZWN0aXZlIGFzc2ltaWxhdGVzIHRoZSBzZWNvbmQuXG5mdW5jdGlvbiBhc3NpbWlsYXRlQ29sbGVjdGl2ZShjb2xsZWN0aXZlMSwgY29sbGVjdGl2ZTIpIHtcbiAgaWYgKGNvbGxlY3RpdmUxID09PSBjb2xsZWN0aXZlMikge1xuICAgIC8vIENvbGxlY3RpdmVzIGFyZSBzYW1lOyBpZ25vcmUuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgbGV0IGVsZW1lbnRzID0gY29sbGVjdGl2ZTIuZWxlbWVudHM7XG5cbiAgLy8gT2xkIGNvbGxlY3RpdmUgd2lsbCBubyBsb25nZXIgaGF2ZSBhbnkgZWxlbWVudHMgb2YgaXRzIG93bi5cbiAgY29sbGVjdGl2ZTIuZWxlbWVudHMgPSBbXTtcblxuICBlbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIGFzc2ltaWxhdGVFbGVtZW50KGNvbGxlY3RpdmUxLCBlbGVtZW50KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cblxuLy8gQXNzaW1pbGF0ZSB0aGUgaW5kaWNhdGVkIGVsZW1lbnQuXG5mdW5jdGlvbiBhc3NpbWlsYXRlRWxlbWVudChjb2xsZWN0aXZlLCBlbGVtZW50KSB7XG4gIGlmIChlbGVtZW50LmNvbGxlY3RpdmUgPT09IGNvbGxlY3RpdmUpIHtcbiAgICAvLyBBbHJlYWR5IHBhcnQgb2YgdGhpcyBjb2xsZWN0aXZlLlxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBlbGVtZW50LmNvbGxlY3RpdmUgPSBjb2xsZWN0aXZlO1xuICBjb2xsZWN0aXZlLmVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gIHJldHVybiB0cnVlO1xufVxuIiwiLyoqXG4gKiBNaXhpbiB3aGljaCBhbGxvd3MgYSBjb21wb25lbnQgdG8gcHJvdmlkZSBhZ2dyZWdhdGUgYmVoYXZpb3Igd2l0aCBvdGhlclxuICogZWxlbWVudHMsIGUuZy4sIGZvciBrZXlib2FyZCBoYW5kbGluZy5cbiAqXG4gKiBAbWl4aW4gQ29sbGVjdGl2ZU1lbWJlclxuICovXG5cblxuaW1wb3J0IENvbGxlY3RpdmUgZnJvbSAnLi9Db2xsZWN0aXZlJztcblxuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IGNsYXNzIENvbGxlY3RpdmVNZW1iZXIgZXh0ZW5kcyBiYXNlIHtcblxuICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuICAgIHRoaXMuY29sbGVjdGl2ZSA9IG5ldyBDb2xsZWN0aXZlKHRoaXMpO1xuICB9XG5cbiAgZ2V0IHRhcmdldCgpIHtcbiAgICByZXR1cm4gc3VwZXIudGFyZ2V0O1xuICB9XG4gIHNldCB0YXJnZXQoZWxlbWVudCkge1xuICAgIGlmICgndGFyZ2V0JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci50YXJnZXQgPSBlbGVtZW50OyB9XG4gICAgdGhpcy5jb2xsZWN0aXZlLmFzc2ltaWxhdGUoZWxlbWVudCk7XG4gIH1cblxufTtcbiIsIi8qKlxuICogTWl4aW4gdG8gbWFrZSBhIGNsYXNzIG1vcmUgZWFzaWx5IGNvbXBvc2FibGUgd2l0aCBvdGhlciBtaXhpbnMuXG4gKlxuICogVGhlIG1haW4gY29udHJpYnV0aW9uIGlzIHRoZSBpbnRyb2R1Y3Rpb24gb2YgYSBgY29tcG9zZWAgbWV0aG9kIHRoYXQgYXBwbGllc1xuICogYSBzZXQgb2YgbWl4aW4gZnVuY3Rpb25zIGFuZCByZXR1cm5zIHRoZSByZXN1bHRpbmcgbmV3IGNsYXNzLiBUaGlzIHN1Z2FyXG4gKiBjYW4gbWFrZSB0aGUgYXBwbGljYXRpb24gb2YgbWFueSBtaXhpbnMgYXQgb25jZSBlYXNpZXIgdG8gcmVhZC5cbiAqXG4gKiBAbWl4aW4gQ29tcG9zYWJsZVxuICovXG5cblxuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IGNsYXNzIENvbXBvc2FibGUgZXh0ZW5kcyBiYXNlIHtcblxuICAvKipcbiAgICogQXBwbHkgYSBzZXQgb2YgbWl4aW4gZnVuY3Rpb25zIG9yIG1peGluIG9iamVjdHMgdG8gdGhlIHByZXNlbnQgY2xhc3MgYW5kXG4gICAqIHJldHVybiB0aGUgbmV3IGNsYXNzLlxuICAgKlxuICAgKiBBIGNhbGwgbGlrZVxuICAgKlxuICAgKiAgICAgbGV0IE15Q2xhc3MgPSBNaXhpbjEoTWl4aW4yKE1peGluMyhNaXhpbjQoTWl4aW41KEJhc2VDbGFzcykpKSkpO1xuICAgKlxuICAgKiBDYW4gYmUgY29udmVydGVkIHRvOlxuICAgKlxuICAgKiAgICAgbGV0IE15Q2xhc3MgPSBDb21wb3NhYmxlKEJhc2VDbGFzcykuY29tcG9zZShcbiAgICogICAgICAgTWl4aW4xLFxuICAgKiAgICAgICBNaXhpbjIsXG4gICAqICAgICAgIE1peGluMyxcbiAgICogICAgICAgTWl4aW40LFxuICAgKiAgICAgICBNaXhpbjVcbiAgICogICAgICk7XG4gICAqXG4gICAqIFRoaXMgZnVuY3Rpb24gY2FuIGFsc28gdGFrZSBtaXhpbiBvYmplY3RzLiBBIG1peGluIG9iamVjdCBpcyBqdXN0IGFcbiAgICogc2hvcnRoYW5kIGZvciBhIG1peGluIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBhIG5ldyBzdWJjbGFzcyB3aXRoIHRoZSBnaXZlblxuICAgKiBtZW1iZXJzLiBUaGUgbWl4aW4gb2JqZWN0J3MgbWVtYmVycyBhcmUgKm5vdCogY29waWVkIGRpcmVjdGx5IG9udG8gdGhlXG4gICAqIHByb3RvdHlwZSBvZiB0aGUgYmFzZSBjbGFzcywgYXMgd2l0aCB0cmFkaXRpb25hbCBtaXhpbnMuXG4gICAqL1xuICBzdGF0aWMgY29tcG9zZSguLi5taXhpbnMpIHtcbiAgICAvLyBXZSBjcmVhdGUgYSBuZXcgc3ViY2xhc3MgZm9yIGVhY2ggbWl4aW4gaW4gdHVybi4gVGhlIHJlc3VsdCBiZWNvbWVzXG4gICAgLy8gdGhlIGJhc2UgY2xhc3MgZXh0ZW5kZWQgYnkgYW55IHN1YnNlcXVlbnQgbWl4aW5zLiBJdCB0dXJucyBvdXQgdGhhdFxuICAgIC8vIHdlIGNhbiB1c2UgQXJyYXkucmVkdWNlKCkgdG8gY29uY2lzZWx5IGV4cHJlc3MgdGhpcywgdXNpbmcgdGhlIGN1cnJlbnRcbiAgICAvLyBvYmplY3QgYXMgdGhlIHNlZWQgZm9yIHJlZHVjZSgpLlxuICAgIHJldHVybiBtaXhpbnMucmVkdWNlKGNvbXBvc2VDbGFzcywgdGhpcyk7XG4gIH1cblxufTtcblxuXG4vLyBQcm9wZXJ0aWVzIGRlZmluZWQgYnkgT2JqZWN0IHRoYXQgd2UgZG9uJ3Qgd2FudCB0byBtaXhpbi5cbmNvbnN0IE5PTl9NSVhBQkxFX09CSkVDVF9QUk9QRVJUSUVTID0gW1xuICAnY29uc3RydWN0b3InXG5dO1xuXG4vKlxuICogQXBwbHkgdGhlIG1peGluIHRvIHRoZSBnaXZlbiBiYXNlIGNsYXNzIHRvIHJldHVybiBhIG5ldyBjbGFzcy5cbiAqIFRoZSBtaXhpbiBjYW4gZWl0aGVyIGJlIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBtb2RpZmllZCBjbGFzcywgb3IgYVxuICogcGxhaW4gb2JqZWN0IHdob3NlIG1lbWJlcnMgd2lsbCBiZSBjb3BpZWQgdG8gdGhlIG5ldyBjbGFzcycgcHJvdG90eXBlLlxuICovXG5mdW5jdGlvbiBjb21wb3NlQ2xhc3MoYmFzZSwgbWl4aW4pIHtcbiAgaWYgKHR5cGVvZiBtaXhpbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIE1peGluIGZ1bmN0aW9uXG4gICAgcmV0dXJuIG1peGluKGJhc2UpO1xuICB9IGVsc2Uge1xuICAgIC8vIE1peGluIG9iamVjdFxuICAgIGNsYXNzIFN1YmNsYXNzIGV4dGVuZHMgYmFzZSB7fVxuICAgIGNvcHlPd25Qcm9wZXJ0aWVzKG1peGluLCBTdWJjbGFzcy5wcm90b3R5cGUsIE5PTl9NSVhBQkxFX09CSkVDVF9QUk9QRVJUSUVTKTtcbiAgICByZXR1cm4gU3ViY2xhc3M7XG4gIH1cbn1cblxuXG4vKlxuICogQ29weSB0aGUgZ2l2ZW4gcHJvcGVydGllcy9tZXRob2RzIHRvIHRoZSB0YXJnZXQuXG4gKiBSZXR1cm4gdGhlIHVwZGF0ZWQgdGFyZ2V0LlxuICovXG5mdW5jdGlvbiBjb3B5T3duUHJvcGVydGllcyhzb3VyY2UsIHRhcmdldCwgaWdub3JlUHJvcGVydHlOYW1lcyA9IFtdKSB7XG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZSkuZm9yRWFjaChuYW1lID0+IHtcbiAgICBpZiAoaWdub3JlUHJvcGVydHlOYW1lcy5pbmRleE9mKG5hbWUpIDwgMCkge1xuICAgICAgbGV0IGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgbmFtZSk7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gdGFyZ2V0O1xufVxuIiwiLyoqXG4gKiBNaXhpbiB0aGF0IG1hcHMgY29udGVudCBzZW1hbnRpY3MgKGNoaWxkcmVuKSB0byBsaXN0IGl0ZW0gc2VtYW50aWNzLlxuICpcbiAqIEl0ZW1zIGRpZmZlciBmcm9tIGNoaWxkcmVuIGluIHNldmVyYWwgd2F5czpcbiAqXG4gKiAqIFRoZXkgY2FuIGJlIHJlZmVyZW5jZWQgdmlhIGluZGV4LlxuICogKiBUaGV5IGNhbiBoYXZlIGEgc2VsZWN0aW9uIHN0YXRlLlxuICogKiBBdXhpbGlhcnkgaW52aXNpYmxlIGNoaWxkIGVsZW1lbnRzIGFyZSBmaWx0ZXJlZCBvdXQgYW5kIG5vdCBjb3VudGVkIGFzXG4gKiAgIGl0ZW1zLiBBdXhpbGlhcnkgZWxlbWVudHMgaW5jbHVkZSBsaW5rLCBzY3JpcHQsIHN0eWxlLCBhbmQgdGVtcGxhdGVcbiAqICAgZWxlbWVudHMuXG4gKlxuICogQG1peGluIENvbnRlbnRJdGVtc1xuICovXG5cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiBjbGFzcyBDb250ZW50SXRlbXMgZXh0ZW5kcyBiYXNlIHtcblxuICBhcHBseVNlbGVjdGlvbihpdGVtLCBzZWxlY3RlZCkge1xuICAgIGlmIChzdXBlci5hcHBseVNlbGVjdGlvbikgeyBzdXBlci5hcHBseVNlbGVjdGlvbihpdGVtLCBzZWxlY3RlZCk7IH1cbiAgICBpdGVtLmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdGVkJywgc2VsZWN0ZWQpO1xuICB9XG5cbiAgY29udGVudENoYW5nZWQoKSB7XG4gICAgaWYgKHN1cGVyLmNvbnRlbnRDaGFuZ2VkKSB7IHN1cGVyLmNvbnRlbnRDaGFuZ2VkKCk7IH1cbiAgICB0aGlzLl9pdGVtcyA9IG51bGw7XG4gICAgdGhpcy5pdGVtc0NoYW5nZWQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBwb3NpdGlvbmFsIGluZGV4IGZvciB0aGUgaW5kaWNhdGVkIGl0ZW0uXG4gICAqXG4gICAqIEJlY2F1c2UgdGhpcyBhY3RzIGxpa2UgYSBnZXR0ZXIsIHRoaXMgZG9lcyBub3QgaW52b2tlIGEgYmFzZSBpbXBsZW1lbnRhdGlvbi5cbiAgICpcbiAgICogQG1ldGhvZCBpbmRleE9mSXRlbVxuICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbSBUaGUgaXRlbSB3aG9zZSBpbmRleCBpcyByZXF1ZXN0ZWQuXG4gICAqIEByZXR1cm5zIHtOdW1iZXJ9IFRoZSBpbmRleCBvZiB0aGUgaXRlbSwgb3IgLTEgaWYgbm90IGZvdW5kLlxuICAgKi9cbiAgaW5kZXhPZkl0ZW0oaXRlbSkge1xuICAgIHJldHVybiB0aGlzLml0ZW1zLmluZGV4T2YoaXRlbSk7XG4gIH1cblxuICAvLyBEZWZhdWx0IGltcGxlbWVudGF0aW9uIGRvZXMgbm90aGluZy5cbiAgaXRlbUFkZGVkKGl0ZW0pIHtcbiAgICBpZiAoc3VwZXIuaXRlbUFkZGVkKSB7IHN1cGVyLml0ZW1BZGRlZChpdGVtKTsgfVxuICB9XG5cbiAgaXRlbXNDaGFuZ2VkKCkge1xuICAgIGlmIChzdXBlci5pdGVtc0NoYW5nZWQpIHsgc3VwZXIuaXRlbXNDaGFuZ2VkKCk7IH1cblxuICAgIC8vIFBlcmZvcm0gcGVyLWl0ZW0gaW5pdGlhbGl6YXRpb24uXG4gICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaWYgKCFpdGVtLl9pdGVtSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgdGhpcy5pdGVtQWRkZWQoaXRlbSk7XG4gICAgICAgIGl0ZW0uX2l0ZW1Jbml0aWFsaXplZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdpdGVtcy1jaGFuZ2VkJykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50IHNldCBvZiBpdGVtcyBpbiB0aGUgbGlzdC5cbiAgICpcbiAgICogQHByb3BlcnR5IGl0ZW1zXG4gICAqIEB0eXBlIFtPYmplY3RdXG4gICAqL1xuICAvLyBUT0RPOiBwcm9wZXJ0eSBub3RpZmljYXRpb25zIHNvIGVsZW1lbnRzIGNhbiBiaW5kIHRvIHRoaXMgcHJvcGVydHlcbiAgZ2V0IGl0ZW1zKCkge1xuICAgIGlmICh0aGlzLl9pdGVtcyA9PSBudWxsKSB7XG4gICAgICB0aGlzLl9pdGVtcyA9IGZpbHRlckF1eGlsaWFyeUVsZW1lbnRzKHRoaXMuY29udGVudCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9pdGVtcztcbiAgfVxuXG59O1xuXG5cbi8vIFJldHVybiB0aGUgZ2l2ZW4gZWxlbWVudHMsIGZpbHRlcmluZyBvdXQgYXV4aWxpYXJ5IGVsZW1lbnRzIHRoYXQgYXJlbid0XG4vLyB0eXBpY2FsbHkgdmlzaWJsZS4gSXRlbXMgd2hpY2ggYXJlIG5vdCBlbGVtZW50cyBhcmUgcmV0dXJuZWQgYXMgaXMuXG5mdW5jdGlvbiBmaWx0ZXJBdXhpbGlhcnlFbGVtZW50cyhpdGVtcykge1xuICBsZXQgYXV4aWxpYXJ5VGFncyA9IFtcbiAgICAnbGluaycsXG4gICAgJ3NjcmlwdCcsXG4gICAgJ3N0eWxlJyxcbiAgICAndGVtcGxhdGUnXG4gIF07XG4gIHJldHVybiBbXS5maWx0ZXIuY2FsbChpdGVtcywgZnVuY3Rpb24oaXRlbSkge1xuICAgIHJldHVybiAhaXRlbS5sb2NhbE5hbWUgfHwgYXV4aWxpYXJ5VGFncy5pbmRleE9mKGl0ZW0ubG9jYWxOYW1lKSA8IDA7XG4gIH0pO1xufVxuXG5cbi8qKlxuICogRmlyZXMgd2hlbiB0aGUgaXRlbXMgaW4gdGhlIGxpc3QgY2hhbmdlLlxuICpcbiAqIEBldmVudCBpdGVtcy1jaGFuZ2VkXG4gKi9cbiIsIi8qKlxuICogTWl4aW4gd2hpY2ggbWFwcyBkaXJlY3Rpb24gc2VtYW50aWNzIChnb0xlZnQsIGdvUmlnaHQsIGV0Yy4pIHRvIHNlbGVjdGlvblxuICogc2VtYW50aWNzIChzZWxlY3RQcmV2aW91cywgc2VsZWN0TmV4dCwgZXRjLikuXG4gKlxuICogQG1peGluIERpcmVjdGlvblNlbGVjdGlvblxuICovXG5cblxuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IGNsYXNzIERpcmVjdGlvblNlbGVjdGlvbiBleHRlbmRzIGJhc2Uge1xuXG4gIGdvRG93bigpIHtcbiAgICBpZiAoc3VwZXIuZ29Eb3duKSB7IHN1cGVyLmdvRG93bigpOyB9XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0TmV4dCgpO1xuICB9XG5cbiAgZ29FbmQoKSB7XG4gICAgaWYgKHN1cGVyLmdvRW5kKSB7IHN1cGVyLmdvRW5kKCk7IH1cbiAgICByZXR1cm4gdGhpcy5zZWxlY3RMYXN0KCk7XG4gIH1cblxuICBnb0xlZnQoKSB7XG4gICAgaWYgKHN1cGVyLmdvTGVmdCkgeyBzdXBlci5nb0xlZnQoKTsgfVxuICAgIHJldHVybiB0aGlzLnNlbGVjdFByZXZpb3VzKCk7XG4gIH1cblxuICBnb1JpZ2h0KCkge1xuICAgIGlmIChzdXBlci5nb1JpZ2h0KSB7IHN1cGVyLmdvUmlnaHQoKTsgfVxuICAgIHJldHVybiB0aGlzLnNlbGVjdE5leHQoKTtcbiAgfVxuXG4gIGdvU3RhcnQoKSB7XG4gICAgaWYgKHN1cGVyLmdvU3RhcnQpIHsgc3VwZXIuZ29TdGFydCgpOyB9XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0Rmlyc3QoKTtcbiAgfVxuXG4gIGdvVXAoKSB7XG4gICAgaWYgKHN1cGVyLmdvVXApIHsgc3VwZXIuZ29VcCgpOyB9XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0UHJldmlvdXMoKTtcbiAgfVxuXG4gIC8vIERlZmF1bHQgaW1wbGVtZW50YXRpb25zLiBUaGVzZSB3aWxsIHR5cGljYWxseSBiZSBoYW5kbGVkIGJ5IG90aGVyIG1peGlucy5cbiAgc2VsZWN0Rmlyc3QoKSB7XG4gICAgaWYgKHN1cGVyLnNlbGVjdEZpcnN0KSB7IHJldHVybiBzdXBlci5zZWxlY3RGaXJzdCgpOyB9XG4gIH1cbiAgc2VsZWN0TGFzdCgpIHtcbiAgICBpZiAoc3VwZXIuc2VsZWN0TGFzdCkgeyByZXR1cm4gc3VwZXIuc2VsZWN0TGFzdCgpOyB9XG4gIH1cbiAgc2VsZWN0TmV4dCgpIHtcbiAgICBpZiAoc3VwZXIuc2VsZWN0TmV4dCkgeyByZXR1cm4gc3VwZXIuc2VsZWN0TmV4dCgpOyB9XG4gIH1cbiAgc2VsZWN0UHJldmlvdXMoKSB7XG4gICAgaWYgKHN1cGVyLnNlbGVjdFByZXZpb3VzKSB7IHJldHVybiBzdXBlci5zZWxlY3RQcmV2aW91cygpOyB9XG4gIH1cblxuXG59O1xuIiwiLyoqXG4gKiBNaXhpbiB0aGF0IGFsbG93cyBhIGNvbXBvbmVudCB0byBzdXBwb3J0IGEgXCJnZW5lcmljXCIgc3R5bGU6IGEgbWluaW1hbGlzdFxuICogc3R5bGUgdGhhdCBjYW4gZWFzaWx5IGJlIHJlbW92ZWQgdG8gcmVzZXQgaXRzIHZpc3VhbCBhcHBlYXJhbmNlIHRvIGEgYmFzZWxpbmVcbiAqIHN0YXRlLlxuICpcbiAqIEJ5IGRlZmF1bHQsIGEgY29tcG9uZW50IHNob3VsZCBwcm92aWRlIGEgbWluaW1hbCB2aXN1YWwgcHJlc2VudGF0aW9uIHRoYXRcbiAqIGFsbG93cyB0aGUgY29tcG9uZW50IHRvIGZ1bmN0aW9uLiBIb3dldmVyLCB0aGUgbW9yZSBzdHlsaW5nIHRoZSBjb21wb25lbnRcbiAqIHByb3ZpZGVzIGJ5IGRlZmF1bHQsIHRoZSBoYXJkZXIgaXQgYmVjb21lcyB0byBnZXQgdGhlIGNvbXBvbmVudCB0byBmaXQgaW5cbiAqIGluIG90aGVyIHNldHRpbmdzLiBFYWNoIENTUyBydWxlIGhhcyB0byBiZSBvdmVycmlkZGVuLiBXb3JzZSwgbmV3IENTUyBydWxlc1xuICogYWRkZWQgdG8gdGhlIGRlZmF1bHQgc3R5bGUgd29uJ3QgYmUgb3ZlcnJpZGRlbiBieSBkZWZhdWx0LCBtYWtpbmcgaXQgaGFyZCB0b1xuICoga25vdyB3aGV0aGVyIGEgbmV3IHZlcnNpb24gb2YgYSBjb21wb25lbnQgd2lsbCBzdGlsbCBsb29rIG9rYXkuXG4gKlxuICogQXMgYSBjb21wcm9taXNlLCB0aGUgc2ltcGxlIFBvbHltZXIgYmVoYXZpb3IgaGVyZSBkZWZpbmVzIGEgXCJnZW5lcmljXCJcbiAqIGF0dHJpYnV0ZS4gVGhpcyBhdHRyaWJ1dGUgaXMgbm9ybWFsbHkgc2V0IGJ5IGRlZmF1bHQsIGFuZCBzdHlsZXMgY2FuIGJlXG4gKiB3cml0dGVuIHRoYXQgYXBwbHkgb25seSB3aGVuIHRoZSBnZW5lcmljIGF0dHJpYnV0ZSBpcyBzZXQuIFRoaXMgYWxsb3dzIHRoZVxuICogY29uc3RydWN0aW9uIG9mIENTUyBydWxlcyB0aGF0IHdpbGwgb25seSBhcHBseSB0byBnZW5lcmljIGNvbXBvbmVudHMgbGlrZVxuICpcbiAqICAgICA6aG9zdChbZ2VuZXJpYz1cIlwiXSkge1xuICogICAgICAgLi4uXG4gKiAgICAgfVxuICpcbiAqIFRoaXMgbWFrZXMgaXQgZWFzeSB0byByZW1vdmUgYWxsIGRlZmF1bHQgc3R5bGluZyAtLSBzZXQgdGhlIGdlbmVyaWMgYXR0cmlidXRlXG4gKiB0byBmYWxzZSwgYW5kIGFsbCBkZWZhdWx0IHN0eWxpbmcgd2lsbCBiZSByZW1vdmVkLlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiBjbGFzcyBHZW5lcmljIGV4dGVuZHMgYmFzZSB7XG5cbiAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cbiAgICB0aGlzLmdlbmVyaWMgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZ2VuZXJpYycpIHx8IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogVHJ1ZSBpZiB0aGUgY29tcG9uZW50IHdvdWxkIGxpa2UgdG8gcmVjZWl2ZSBnZW5lcmljIHN0eWxpbmcuXG4gICAqXG4gICAqIFRoaXMgcHJvcGVydHkgaXMgdHJ1ZSBieSBkZWZhdWx0IOKAlMKgc2V0IGl0IHRvIGZhbHNlIHRvIHR1cm4gb2ZmIGFsbFxuICAgKiBnZW5lcmljIHN0eWxlcy4gVGhpcyBtYWtlcyBpdCBlYXNpZXIgdG8gYXBwbHkgY3VzdG9tIHN0eWxpbmc7IHlvdSB3b24ndFxuICAgKiBoYXZlIHRvIGV4cGxpY2l0bHkgb3ZlcnJpZGUgc3R5bGluZyB5b3UgZG9uJ3Qgd2FudC5cbiAgICpcbiAgICogQHByb3BlcnR5IGdlbmVyaWNcbiAgICogQHR5cGUgQm9vbGVhblxuICAgKiBAZGVmYXVsdCB0cnVlXG4gICAqL1xuICBnZXQgZ2VuZXJpYygpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2VuZXJpYztcbiAgfVxuICBzZXQgZ2VuZXJpYyh2YWx1ZSkge1xuICAgIGlmICgnZ2VuZXJpYycgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuZ2VuZXJpYyA9IHZhbHVlOyB9XG4gICAgLy8gV2Ugcm9sbCBvdXIgb3duIGF0dHJpYnV0ZSBzZXR0aW5nIHNvIHRoYXQgYW4gZXhwbGljaXRseSBmYWxzZSB2YWx1ZSBzaG93c1xuICAgIC8vIHVwIGFzIGdlbmVyaWM9XCJmYWxzZVwiLlxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YWx1ZSA9ICh2YWx1ZSAhPT0gJ2ZhbHNlJyk7XG4gICAgfVxuICAgIHRoaXMuX2dlbmVyaWMgPSB2YWx1ZTtcbiAgICBpZiAodmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAvLyBFeHBsaWNpdGx5IHVzZSBmYWxzZSBzdHJpbmcuXG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnZ2VuZXJpYycsICdmYWxzZScpO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgLy8gRXhwbGljaXRseSByZW1vdmUgYXR0cmlidXRlLlxuICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ2dlbmVyaWMnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVXNlIHRoZSBlbXB0eSBzdHJpbmcgdG8gZ2V0IGF0dHJpYnV0ZSB0byBhcHBlYXIgd2l0aCBubyB2YWx1ZS5cbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdnZW5lcmljJywgJycpO1xuICAgIH1cbiAgfVxuXG59O1xuIiwiLyoqXG4gKiBNaXhpbiB3aGljaCBtYW5hZ2VzIEFSSUEgcm9sZXMgZm9yIGEgY29tcG9uZW50IHRoYXQgd2FudHMgdG8gYWN0IGFzIGEgbGlzdC5cbiAqXG4gKiBAbWl4aW4gSXRlbXNBY2Nlc3NpYmxlXG4gKi9cblxuXG4vLyBVc2VkIHRvIGFzc2lnbiB1bmlxdWUgSURzIHRvIGl0ZW0gZWxlbWVudHMgd2l0aG91dCBJRHMuXG5sZXQgaWRDb3VudCA9IDA7XG5cblxuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IGNsYXNzIEl0ZW1zQWNjZXNzaWJsZSBleHRlbmRzIGJhc2Uge1xuXG4gIGFwcGx5U2VsZWN0aW9uKGl0ZW0sIHNlbGVjdGVkKSB7XG4gICAgaWYgKHN1cGVyLmFwcGx5U2VsZWN0aW9uKSB7IHN1cGVyLmFwcGx5U2VsZWN0aW9uKGl0ZW0sIHNlbGVjdGVkKTsgfVxuICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgc2VsZWN0ZWQpO1xuICAgIGxldCBpdGVtSWQgPSBpdGVtLmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICBpZiAoaXRlbUlkKSB7XG4gICAgICB0aGlzLmNvbGxlY3RpdmUub3V0ZXJtb3N0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcsIGl0ZW1JZCk7XG4gICAgfVxuICB9XG5cbiAgY29sbGVjdGl2ZUNoYW5nZWQoKSB7XG4gICAgaWYgKHN1cGVyLmNvbGxlY3RpdmVDaGFuZ2VkKSB7IHN1cGVyLmNvbGxlY3RpdmVDaGFuZ2VkKCk7IH1cblxuICAgIC8vIEVuc3VyZSB0aGUgb3V0ZXJtb3N0IGFzcGVjdCBoYXMgYW4gQVJJQSByb2xlLlxuICAgIGxldCBvdXRlcm1vc3RFbGVtZW50ID0gdGhpcy5jb2xsZWN0aXZlLm91dGVybW9zdEVsZW1lbnQ7XG4gICAgaWYgKCFvdXRlcm1vc3RFbGVtZW50LmdldEF0dHJpYnV0ZSgncm9sZScpKSB7XG4gICAgICAvLyBUcnkgdG8gcHJvbW90ZSBhbiBBUklBIHJvbGUgZnJvbSBhbiBpbm5lciBlbGVtZW50LiBJZiBub25lIGlzIGZvdW5kLFxuICAgICAgLy8gdXNlIGEgZGVmYXVsdCByb2xlLlxuICAgICAgbGV0IHJvbGUgPSBnZXRDb2xsZWN0aXZlQXJpYVJvbGUodGhpcy5jb2xsZWN0aXZlKSB8fCAnbGlzdGJveCc7XG4gICAgICBvdXRlcm1vc3RFbGVtZW50LnNldEF0dHJpYnV0ZSgncm9sZScsIHJvbGUpO1xuICAgIH1cbiAgICBpZiAoIW91dGVybW9zdEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnKSkge1xuICAgICAgLy8gVHJ5IHRvIHByb21vdGUgYW4gQVJJQSBhY3RpdmVkZXNjZW5kYW50IHZhbHVlIGZyb20gYW4gaW5uZXIgZWxlbWVudC5cbiAgICAgIGxldCBkZXNjZW5kYW50ID0gZ2V0Q29sbGVjdGl2ZUFyaWFBY3RpdmVEZXNjZW5kYW50KHRoaXMuY29sbGVjdGl2ZSk7XG4gICAgICBpZiAoZGVzY2VuZGFudCkge1xuICAgICAgICBvdXRlcm1vc3RFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1hY3RpdmVkZXNjZW5kYW50JywgZGVzY2VuZGFudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIHRoZSBBUklBIHJvbGUgYW5kIGFjdGl2ZWRlc2NlbmRhbnQgdmFsdWVzIGZyb20gdGhlIGNvbGxlY3RpdmUnc1xuICAgIC8vIGlubmVyIGVsZW1lbnRzLlxuICAgIHRoaXMuY29sbGVjdGl2ZS5lbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQgIT09IG91dGVybW9zdEVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcpO1xuICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgncm9sZScpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cblxuICAgIC8vIERldGVybWluZSBhIGJhc2UgaXRlbSBJRCBiYXNlZCBvbiB0aGlzIGNvbXBvbmVudCdzIGhvc3QncyBvd24gSUQuIFRoaXNcbiAgICAvLyB3aWxsIGJlIGNvbWJpbmVkIHdpdGggYSB1bmlxdWUgaW50ZWdlciB0byBhc3NpZ24gSURzIHRvIGl0ZW1zIHRoYXQgZG9uJ3RcbiAgICAvLyBoYXZlIGFuIGV4cGxpY2l0IElELiBJZiB0aGUgYmFzaWMtbGlzdC1ib3ggaGFzIElEIFwiZm9vXCIsIHRoZW4gaXRzIGl0ZW1zXG4gICAgLy8gd2lsbCBoYXZlIElEcyB0aGF0IGxvb2sgbGlrZSBcIl9mb29PcHRpb24xXCIuIElmIHRoZSBsaXN0IGhhcyBubyBJRCBpdHNlbGYsXG4gICAgLy8gaXRzIGl0ZW1zIHdpbGwgZ2V0IElEcyB0aGF0IGxvb2sgbGlrZSBcIl9vcHRpb24xXCIuIEl0ZW0gSURzIGFyZSBwcmVmaXhlZFxuICAgIC8vIHdpdGggYW4gdW5kZXJzY29yZSB0byBkaWZmZXJlbnRpYXRlIHRoZW0gZnJvbSBtYW51YWxseS1hc3NpZ25lZCBJRHMsIGFuZFxuICAgIC8vIHRvIG1pbmltaXplIHRoZSBwb3RlbnRpYWwgZm9yIElEIGNvbmZsaWN0cy5cbiAgICBsZXQgZWxlbWVudElkID0gdGhpcy5nZXRBdHRyaWJ1dGUoIFwiaWRcIiApO1xuICAgIHRoaXMuaXRlbUJhc2VJZCA9IGVsZW1lbnRJZCA/XG4gICAgICAgIFwiX1wiICsgZWxlbWVudElkICsgXCJPcHRpb25cIiA6XG4gICAgICAgIFwiX29wdGlvblwiO1xuICB9XG5cbiAgaXRlbUFkZGVkKGl0ZW0pIHtcbiAgICBpZiAoc3VwZXIuaXRlbUFkZGVkKSB7IHN1cGVyLml0ZW1BZGRlZChpdGVtKTsgfVxuXG4gICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnb3B0aW9uJyk7XG5cbiAgICAvLyBFbnN1cmUgZWFjaCBpdGVtIGhhcyBhbiBJRCBzbyB3ZSBjYW4gc2V0IGFyaWEtYWN0aXZlZGVzY2VuZGFudCBvbiB0aGVcbiAgICAvLyBvdmVyYWxsIGxpc3Qgd2hlbmV2ZXIgdGhlIHNlbGVjdGlvbiBjaGFuZ2VzLlxuICAgIGlmICghaXRlbS5nZXRBdHRyaWJ1dGUoJ2lkJykpIHtcbiAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdpZCcsIHRoaXMuaXRlbUJhc2VJZCArIGlkQ291bnQrKyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHNlbGVjdGVkSXRlbSgpIHtcbiAgICByZXR1cm4gc3VwZXIuc2VsZWN0ZWRJdGVtO1xuICB9XG4gIHNldCBzZWxlY3RlZEl0ZW0oaXRlbSkge1xuICAgIGlmICgnc2VsZWN0ZWRJdGVtJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEl0ZW0gPSBpdGVtOyB9XG4gICAgLy8gQ2F0Y2ggdGhlIGNhc2Ugd2hlcmUgdGhlIHNlbGVjdGlvbiBpcyByZW1vdmVkLlxuICAgIGlmIChpdGVtID09IG51bGwgJiYgdGhpcy5jb2xsZWN0aXZlKSB7XG4gICAgICB0aGlzLmNvbGxlY3RpdmUub3V0ZXJtb3N0RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcpO1xuICAgIH1cbiAgfVxuXG59O1xuXG5cbi8vIFJldHVybiB0aGUgZmlyc3QgQVJJQSBhY3RpdmVkZXNjZW5kYW50IGRlZmluZWQgYnkgdGhlIGNvbGxlY3RpdmUuXG5mdW5jdGlvbiBnZXRDb2xsZWN0aXZlQXJpYUFjdGl2ZURlc2NlbmRhbnQoY29sbGVjdGl2ZSkge1xuICBsZXQgZGVzY2VuZGFudHMgPSBjb2xsZWN0aXZlLmVsZW1lbnRzLm1hcChlbGVtZW50ID0+IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnKSk7XG4gIHJldHVybiBkZXNjZW5kYW50cy5maW5kKGRlc2NlbmRhbnQgPT4gZGVzY2VuZGFudCAhPT0gbnVsbCk7XG59XG5cblxuLy8gUmV0dXJuIHRoZSBmaXJzdCBBUklBIGxhYmVsIGRlZmluZWQgYnkgdGhlIGNvbGxlY3RpdmUuXG5mdW5jdGlvbiBnZXRDb2xsZWN0aXZlQXJpYVJvbGUoY29sbGVjdGl2ZSkge1xuICBsZXQgcm9sZXMgPSBjb2xsZWN0aXZlLmVsZW1lbnRzLm1hcChlbGVtZW50ID0+IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdyb2xlJykpO1xuICByZXR1cm4gcm9sZXMuZmluZChyb2xlID0+IHJvbGUgIT09IG51bGwpO1xufVxuIiwiLyoqXG4gKiBNaXhpbiB3aGljaCBtYW5hZ2VzIHNlbGVjdGlvbiBzZW1hbnRpY3MgZm9yIGl0ZW1zIGluIGEgbGlzdC5cbiAqXG4gKiBAbWl4aW4gSXRlbXNTZWxlY3Rpb25cbiAqL1xuXG5cbi8qKlxuICogRmlyZXMgd2hlbiB0aGUgc2VsZWN0ZWRJdGVtIHByb3BlcnR5IGNoYW5nZXMuXG4gKlxuICogQGV2ZW50IHNlbGVjdGVkLWl0ZW0tY2hhbmdlZFxuICogQHBhcmFtIGRldGFpbC5zZWxlY3RlZEl0ZW0gVGhlIG5ldyBzZWxlY3RlZCBpdGVtLlxuICogQHBhcmFtIGRldGFpbC5wcmV2aW91c0l0ZW0gVGhlIHByZXZpb3VzbHkgc2VsZWN0ZWQgaXRlbS5cbiAqL1xuXG4vKipcbiAqIEZpcmVzIHdoZW4gdGhlIHNlbGVjdGVkSW5kZXggcHJvcGVydHkgY2hhbmdlcy5cbiAqXG4gKiBAZXZlbnQgc2VsZWN0ZWQtaXRlbS1jaGFuZ2VkXG4gKiBAcGFyYW0gZGV0YWlsLnNlbGVjdGVkSW5kZXggVGhlIG5ldyBzZWxlY3RlZCBpbmRleC5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4gY2xhc3MgSXRlbXNTZWxlY3Rpb24gZXh0ZW5kcyBiYXNlIHtcblxuICAvLyBEZWZhdWx0IGltcGxlbWVudGF0aW9uLiBUaGlzIHdpbGwgdHlwaWNhbGx5IGJlIGhhbmRsZWQgYnkgb3RoZXIgbWl4aW5zLlxuICBhcHBseVNlbGVjdGlvbihpdGVtLCBzZWxlY3RlZCkge1xuICAgIGlmIChzdXBlci5hcHBseVNlbGVjdGlvbikgeyBzdXBlci5hcHBseVNlbGVjdGlvbihpdGVtLCBzZWxlY3RlZCk7IH1cbiAgfVxuXG4gIGdldCBjYW5TZWxlY3ROZXh0KCkge1xuICAgIHJldHVybiB0aGlzLl9jYW5TZWxlY3ROZXh0O1xuICB9XG4gIHNldCBjYW5TZWxlY3ROZXh0KGNhblNlbGVjdE5leHQpIHtcbiAgICBpZiAoJ2NhblNlbGVjdE5leHQnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLmNhblNlbGVjdE5leHQgPSBjYW5TZWxlY3ROZXh0OyB9XG4gICAgdGhpcy5fY2FuU2VsZWN0TmV4dCA9IGNhblNlbGVjdE5leHQ7XG4gIH1cblxuICBnZXQgY2FuU2VsZWN0UHJldmlvdXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhblNlbGVjdFByZXZpb3VzO1xuICB9XG4gIHNldCBjYW5TZWxlY3RQcmV2aW91cyhjYW5TZWxlY3RQcmV2aW91cykge1xuICAgIGlmICgnY2FuU2VsZWN0UHJldmlvdXMnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLmNhblNlbGVjdFByZXZpb3VzID0gY2FuU2VsZWN0UHJldmlvdXM7IH1cbiAgICB0aGlzLl9jYW5TZWxlY3RQcmV2aW91cyA9IGNhblNlbGVjdFByZXZpb3VzO1xuICB9XG5cbiAgaXRlbUFkZGVkKGl0ZW0pIHtcbiAgICBpZiAoc3VwZXIuaXRlbUFkZGVkKSB7IHN1cGVyLml0ZW1BZGRlZChpdGVtKTsgfVxuICAgIHRoaXMuYXBwbHlTZWxlY3Rpb24oaXRlbSwgaXRlbSA9PT0gdGhpcy5zZWxlY3RlZEl0ZW0pO1xuICB9XG5cbiAgaXRlbXNDaGFuZ2VkKCkge1xuICAgIGlmIChzdXBlci5pdGVtc0NoYW5nZWQpIHsgc3VwZXIuaXRlbXNDaGFuZ2VkKCk7IH1cbiAgICBsZXQgaW5kZXggPSB0aGlzLml0ZW1zLmluZGV4T2YodGhpcy5zZWxlY3RlZEl0ZW0pO1xuICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgIC8vIFNlbGVjdGVkIGl0ZW0gaXMgbm8gbG9uZ2VyIGluIHRoZSBjdXJyZW50IHNldCBvZiBpdGVtcy5cbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gbnVsbDtcbiAgICAgIGlmICh0aGlzLnNlbGVjdGlvblJlcXVpcmVkKSB7XG4gICAgICAgIC8vIEVuc3VyZSBzZWxlY3Rpb24sIGJ1dCBkbyB0aGlzIGluIHRoZSBuZXh0IHRpY2sgdG8gZ2l2ZSBvdGhlclxuICAgICAgICAvLyBtaXhpbnMgYSBjaGFuY2UgdG8gZG8gdGhlaXIgb3duIGl0ZW1zQ2hhbmdlZCB3b3JrLlxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGVuc3VyZVNlbGVjdGlvbih0aGlzKTtcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUaGUgY2hhbmdlIGluIGl0ZW1zIG1heSBoYXZlIGFmZmVjdGVkIHdoaWNoIG5hdmlnYXRpb25zIGFyZSBwb3NzaWJsZS5cbiAgICB1cGRhdGVQb3NzaWJsZU5hdmlnYXRpb25zKHRoaXMsIGluZGV4KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgaW5kZXggb2YgdGhlIGl0ZW0gd2hpY2ggaXMgY3VycmVudGx5IHNlbGVjdGVkLCBvciAtMSBpZiB0aGVyZSBpcyBub1xuICAgKiBzZWxlY3Rpb24uXG4gICAqXG4gICAqIEBwcm9wZXJ0eSBzZWxlY3RlZEluZGV4XG4gICAqIEB0eXBlIE51bWJlclxuICAgKi9cbiAgZ2V0IHNlbGVjdGVkSW5kZXgoKSB7XG4gICAgbGV0IHNlbGVjdGVkSXRlbSA9IHRoaXMuc2VsZWN0ZWRJdGVtO1xuXG4gICAgaWYgKHNlbGVjdGVkSXRlbSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgLy8gVE9ETzogTWVtb2l6ZVxuICAgIGxldCBpbmRleCA9IHRoaXMuaW5kZXhPZkl0ZW0oc2VsZWN0ZWRJdGVtKTtcblxuICAgIC8vIElmIGluZGV4ID0gLTEsIHNlbGVjdGlvbiB3YXNuJ3QgZm91bmQuIE1vc3QgbGlrZWx5IGNhdXNlIGlzIHRoYXQgdGhlXG4gICAgLy8gRE9NIHdhcyBtYW5pcHVsYXRlZCBmcm9tIHVuZGVybmVhdGggdXMuXG4gICAgLy8gVE9ETzogT25jZSB3ZSB0cmFjayBjb250ZW50IGNoYW5nZXMsIHR1cm4gdGhpcyBpbnRvIGFuIGV4Y2VwdGlvbi5cbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cbiAgc2V0IHNlbGVjdGVkSW5kZXgoaW5kZXgpIHtcbiAgICBpZiAoJ3NlbGVjdGVkSW5kZXgnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkSW5kZXggPSBpbmRleDsgfVxuICAgIGxldCBpdGVtcyA9IHRoaXMuaXRlbXM7XG4gICAgbGV0IGl0ZW07XG4gICAgaWYgKGluZGV4IDwgMCB8fCBpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgIGl0ZW0gPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICBpdGVtID0gaXRlbXNbaW5kZXhdO1xuICAgIH1cbiAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IGl0ZW07XG5cbiAgICBsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3NlbGVjdGVkLWluZGV4LWNoYW5nZWQnLCB7XG4gICAgICBkZXRhaWw6IHtcbiAgICAgICAgc2VsZWN0ZWRJbmRleDogaW5kZXgsXG4gICAgICAgIHZhbHVlOiBpbmRleCAvLyBmb3IgUG9seW1lciBiaW5kaW5nXG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgY3VycmVudGx5IHNlbGVjdGVkIGl0ZW0sIG9yIG51bGwgaWYgdGhlcmUgaXMgbm8gc2VsZWN0aW9uLlxuICAgKlxuICAgKiBAcHJvcGVydHkgc2VsZWN0ZWRJdGVtXG4gICAqIEB0eXBlIE9iamVjdFxuICAgKi9cbiAgLy8gVE9ETzogQ29uZmlybSBpdGVtIGlzIGluIGl0ZW1zIGJlZm9yZSBzZWxlY3RpbmcuXG4gIGdldCBzZWxlY3RlZEl0ZW0oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSXRlbSB8fCBudWxsO1xuICB9XG4gIHNldCBzZWxlY3RlZEl0ZW0oaXRlbSkge1xuICAgIGlmICgnc2VsZWN0ZWRJdGVtJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEl0ZW0gPSBpdGVtOyB9XG4gICAgbGV0IHByZXZpb3VzSXRlbSA9IHRoaXMuX3NlbGVjdGVkSXRlbTtcbiAgICBpZiAocHJldmlvdXNJdGVtKSB7XG4gICAgICAvLyBSZW1vdmUgcHJldmlvdXMgc2VsZWN0aW9uLlxuICAgICAgdGhpcy5hcHBseVNlbGVjdGlvbihwcmV2aW91c0l0ZW0sIGZhbHNlKTtcbiAgICB9XG4gICAgdGhpcy5fc2VsZWN0ZWRJdGVtID0gaXRlbTtcbiAgICBpZiAoaXRlbSkge1xuICAgICAgdGhpcy5hcHBseVNlbGVjdGlvbihpdGVtLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvLyBUT0RPOiBSYXRpb25hbGl6ZSB3aXRoIHNlbGVjdGVkSW5kZXggc28gd2UncmUgbm90IHJlY2FsY3VsYXRpbmcgaXRlbVxuICAgIC8vIG9yIGluZGV4IGluIGVhY2ggc2V0dGVyLlxuICAgIGxldCBpbmRleCA9IHRoaXMuaW5kZXhPZkl0ZW0oaXRlbSk7XG4gICAgdXBkYXRlUG9zc2libGVOYXZpZ2F0aW9ucyh0aGlzLCBpbmRleCk7XG5cbiAgICBsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3NlbGVjdGVkLWl0ZW0tY2hhbmdlZCcsIHtcbiAgICAgIGRldGFpbDoge1xuICAgICAgICBzZWxlY3RlZEl0ZW06IGl0ZW0sXG4gICAgICAgIHByZXZpb3VzSXRlbTogcHJldmlvdXNJdGVtLFxuICAgICAgICB2YWx1ZTogaXRlbSAvLyBmb3IgUG9seW1lciBiaW5kaW5nXG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWxlY3QgdGhlIGZpcnN0IGl0ZW0gaW4gdGhlIGxpc3QuXG4gICAqXG4gICAqIEBtZXRob2Qgc2VsZWN0Rmlyc3RcbiAgICovXG4gIHNlbGVjdEZpcnN0KCkge1xuICAgIGlmIChzdXBlci5zZWxlY3RGaXJzdCkgeyBzdXBlci5zZWxlY3RGaXJzdCgpOyB9XG4gICAgcmV0dXJuIHNlbGVjdEluZGV4KHRoaXMsIDApO1xuICB9XG5cbiAgLyoqXG4gICAqIFRydWUgaWYgdGhlIGxpc3Qgc2hvdWxkIGFsd2F5cyBoYXZlIGEgc2VsZWN0aW9uIChpZiBpdCBoYXMgaXRlbXMpLlxuICAgKlxuICAgKiBAcHJvcGVydHkgc2VsZWN0aW9uUmVxdWlyZWRcbiAgICogQHR5cGUgQm9vbGVhblxuICAgKi9cbiAgZ2V0IHNlbGVjdGlvblJlcXVpcmVkKCkge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3Rpb25SZXF1aXJlZDtcbiAgfVxuICBzZXQgc2VsZWN0aW9uUmVxdWlyZWQoc2VsZWN0aW9uUmVxdWlyZWQpIHtcbiAgICBpZiAoJ3NlbGVjdGlvblJlcXVpcmVkJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3Rpb25SZXF1aXJlZCA9IHNlbGVjdGlvblJlcXVpcmVkOyB9XG4gICAgdGhpcy5fc2VsZWN0aW9uUmVxdWlyZWQgPSBzZWxlY3Rpb25SZXF1aXJlZDtcbiAgICBlbnN1cmVTZWxlY3Rpb24odGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogU2VsZWN0IHRoZSBsYXN0IGl0ZW0gaW4gdGhlIGxpc3QuXG4gICAqXG4gICAqIEBtZXRob2Qgc2VsZWN0TGFzdFxuICAgKi9cbiAgc2VsZWN0TGFzdCgpIHtcbiAgICBpZiAoc3VwZXIuc2VsZWN0TGFzdCkgeyBzdXBlci5zZWxlY3RMYXN0KCk7IH1cbiAgICByZXR1cm4gc2VsZWN0SW5kZXgodGhpcywgdGhpcy5pdGVtcy5sZW5ndGggLSAxKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWxlY3QgdGhlIG5leHQgaXRlbSBpbiB0aGUgbGlzdC5cbiAgICpcbiAgICogQG1ldGhvZCBzZWxlY3ROZXh0XG4gICAqL1xuICBzZWxlY3ROZXh0KCkge1xuICAgIGlmIChzdXBlci5zZWxlY3ROZXh0KSB7IHN1cGVyLnNlbGVjdE5leHQoKTsgfVxuICAgIHJldHVybiBzZWxlY3RJbmRleCh0aGlzLCB0aGlzLnNlbGVjdGVkSW5kZXggKyAxKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWxlY3QgdGhlIHByZXZpb3VzIGl0ZW0gaW4gdGhlIGxpc3QuXG4gICAqXG4gICAqIEBtZXRob2Qgc2VsZWN0UHJldmlvdXNcbiAgICovXG4gIHNlbGVjdFByZXZpb3VzKCkge1xuICAgIGlmIChzdXBlci5zZWxlY3RQcmV2aW91cykgeyBzdXBlci5zZWxlY3RQcmV2aW91cygpOyB9XG4gICAgcmV0dXJuIHNlbGVjdEluZGV4KHRoaXMsIHRoaXMuc2VsZWN0ZWRJbmRleCAtIDEpO1xuICB9XG5cbn07XG5cblxuLy8gSWYgbm8gaXRlbSBpcyBzZWxlY3RlZCwgc2VsZWN0IGEgZGVmYXVsdCBpdGVtLlxuLy8gVE9ETzogSWYgdGhlIHByZXZpb3VzbHktc2VsZWN0ZWQgaXRlbSBoYXMgYmVlbiBkZWxldGVkLCB0cnkgdG8gc2VsZWN0IGFuXG4vLyBpdGVtIGFkamFjZW50IHRvIHRoZSBwb3NpdGlvbiBpdCBoZWxkLlxuZnVuY3Rpb24gZW5zdXJlU2VsZWN0aW9uKGVsZW1lbnQpIHtcbiAgaWYgKCFlbGVtZW50LnNlbGVjdGVkSXRlbSAmJiBlbGVtZW50Lml0ZW1zICYmIGVsZW1lbnQuaXRlbXMubGVuZ3RoID4gMCkge1xuICAgIGVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9IDA7XG4gIH1cbn1cblxuLy8gRW5zdXJlIHRoZSBnaXZlbiBpbmRleCBpcyB3aXRoaW4gYm91bmRzLCBhbmQgc2VsZWN0IGl0IGlmIGl0J3Mgbm90IGFscmVhZHlcbi8vIHNlbGVjdGVkLlxuZnVuY3Rpb24gc2VsZWN0SW5kZXgoZWxlbWVudCwgaW5kZXgpIHtcbiAgbGV0IGJvdW5kZWRJbmRleCA9IE1hdGgubWF4KE1hdGgubWluKGluZGV4LCBlbGVtZW50Lml0ZW1zLmxlbmd0aCAtIDEpLCAwKTtcbiAgbGV0IHByZXZpb3VzSW5kZXggPSBlbGVtZW50LnNlbGVjdGVkSW5kZXg7XG4gIGlmIChwcmV2aW91c0luZGV4ICE9PSBib3VuZGVkSW5kZXgpIHtcbiAgICBlbGVtZW50LnNlbGVjdGVkSW5kZXggPSBib3VuZGVkSW5kZXg7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8vIEZvbGxvd2luZyBhIGNoYW5nZSBpbiBzZWxlY3Rpb24sIHJlcG9ydCB3aGV0aGVyIGl0J3Mgbm93IHBvc3NpYmxlIHRvXG4vLyBnbyBuZXh0L3ByZXZpb3VzIGZyb20gdGhlIGdpdmVuIGluZGV4LlxuZnVuY3Rpb24gdXBkYXRlUG9zc2libGVOYXZpZ2F0aW9ucyhlbGVtZW50LCBpbmRleCkge1xuICBsZXQgY2FuU2VsZWN0TmV4dDtcbiAgbGV0IGNhblNlbGVjdFByZXZpb3VzO1xuICBsZXQgaXRlbXMgPSBlbGVtZW50Lml0ZW1zO1xuICBpZiAoaXRlbXMgPT0gbnVsbCB8fCBpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICBjYW5TZWxlY3ROZXh0ID0gZmFsc2U7XG4gICAgY2FuU2VsZWN0UHJldmlvdXMgPSBmYWxzZTtcbiAgfSBlbHNlIGlmIChpdGVtcy5sZW5ndGggPT09IDEpIHtcbiAgICAvLyBTcGVjaWFsIGNhc2UuIElmIHRoZXJlJ3Mgbm8gc2VsZWN0aW9uLCB3ZSBkZWNsYXJlIHRoYXQgaXQncyBhbHdheXNcbiAgICAvLyBwb3NzaWJsZSB0byBnbyBuZXh0L3ByZXZpb3VzIHRvIGNyZWF0ZSBhIHNlbGVjdGlvbi5cbiAgICBjYW5TZWxlY3ROZXh0ID0gdHJ1ZTtcbiAgICBjYW5TZWxlY3RQcmV2aW91cyA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgLy8gTm9ybWFsIGNhc2U6IHdlIGhhdmUgYW4gaW5kZXggaW4gYSBsaXN0IHRoYXQgaGFzIGl0ZW1zLlxuICAgIGNhblNlbGVjdFByZXZpb3VzID0gKGluZGV4ID4gMCk7XG4gICAgY2FuU2VsZWN0TmV4dCA9IChpbmRleCA8IGl0ZW1zLmxlbmd0aCAtIDEpO1xuICB9XG4gIGVsZW1lbnQuY2FuU2VsZWN0TmV4dCA9IGNhblNlbGVjdE5leHQ7XG4gIGVsZW1lbnQuY2FuU2VsZWN0UHJldmlvdXMgPSBjYW5TZWxlY3RQcmV2aW91cztcbn1cbiIsIi8qKlxuICogTWl4aW4gd2hpY2ggbWFuYWdlcyB0aGUga2V5ZG93biBoYW5kbGluZyBmb3IgYSBjb21wb25lbnQuXG4gKlxuICogVE9ETzogRG9jdW1lbnQgY29sbGVjdGl2ZSBiZWhhdmlvci5cbiAqIFRPRE86IFByb3ZpZGUgYmFzZWxpbmUgYmVoYXZpb3Igb3V0c2lkZSBvZiBhIGNvbGxlY3RpdmUuXG4gKlxuICogQG1peGluIEtleWJvYXJkXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IGNsYXNzIEtleWJvYXJkIGV4dGVuZHMgYmFzZSB7XG5cbiAgLy8gRGVmYXVsdCBrZXlkb3duIGhhbmRsZXIuIFRoaXMgd2lsbCB0eXBpY2FsbHkgYmUgaGFuZGxlZCBieSBvdGhlciBtaXhpbnMuXG4gIGtleWRvd24oZXZlbnQpIHtcbiAgICBpZiAoc3VwZXIua2V5ZG93bikgeyByZXR1cm4gc3VwZXIua2V5ZG93bihldmVudCk7IH1cbiAgfVxuXG4gIC8qXG4gICAqIElmIHdlJ3JlIG5vdyB0aGUgb3V0ZXJtb3N0IGVsZW1lbnQgb2YgdGhlIGNvbGxlY3RpdmUsIHNldCB1cCB0byByZWNlaXZlXG4gICAqIGtleWJvYXJkIGV2ZW50cy4gSWYgd2UncmUgbm8gbG9uZ2VyIHRoZSBvdXRlcm1vc3QgZWxlbWVudCwgc3RvcCBsaXN0ZW5pbmcuXG4gICAqL1xuICBjb2xsZWN0aXZlQ2hhbmdlZCgpIHtcbiAgICBpZiAoc3VwZXIuY29sbGVjdGl2ZUNoYW5nZWQpIHsgc3VwZXIuY29sbGVjdGl2ZUNoYW5nZWQoKTsgfVxuXG4gICAgbGV0IG91dGVybW9zdEVsZW1lbnQgPSB0aGlzLmNvbGxlY3RpdmUub3V0ZXJtb3N0RWxlbWVudDtcbiAgICBpZiAob3V0ZXJtb3N0RWxlbWVudCA9PT0gdGhpcyAmJiAhdGhpcy5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgLy8gU2luY2Ugd2UncmUgaGFuZGxpbmcgdGhlIGtleWJvYXJkLCBzZWUgaWYgd2UgY2FuIGFkb3B0IGFuIEFSSUEgbGFiZWxcbiAgICAgIC8vIGZyb20gYW4gaW5uZXIgZWxlbWVudCBvZiB0aGUgY29sbGVjdGl2ZS5cbiAgICAgIGxldCBsYWJlbCA9IGdldENvbGxlY3RpdmVBcmlhTGFiZWwodGhpcy5jb2xsZWN0aXZlKTtcbiAgICAgIGlmIChsYWJlbCkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIGxhYmVsKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBNYWtlIHN1cmUgb25seSB0aGUgb3V0ZXJtb3N0IGVsZW1lbnQgaW4gdGhlIGNvbGxlY3RpdmUgaXMgbGlzdGVuaW5nIHRvXG4gICAgLy8gdGhlIGtleWJvYXJkLlxuICAgIHRoaXMuY29sbGVjdGl2ZS5lbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuXG4gICAgICBsZXQgc2hvdWxkTGlzdGVuID0gKGVsZW1lbnQgPT09IG91dGVybW9zdEVsZW1lbnQpO1xuICAgICAgbGV0IGlzTGlzdGVuaW5nID0gaXNMaXN0ZW5pbmdUb0tleWRvd24oZWxlbWVudCk7XG4gICAgICBpZiAoaXNMaXN0ZW5pbmcgIT09IHNob3VsZExpc3Rlbikge1xuICAgICAgICBpZiAoc2hvdWxkTGlzdGVuKSB7XG4gICAgICAgICAgc3RhcnRMaXN0ZW5pbmdUb0tleWRvd24oZWxlbWVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RvcExpc3RlbmluZ1RvS2V5ZG93bihlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFzaG91bGRMaXN0ZW4gJiYgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAvLyBSZW1vdmUgdGhlIEFSSUEgbGFiZWwgZnJvbSBpbm5lciBlbGVtZW50J3Mgbm90IGhhbmRsaW5nIHRoZSBrZXlib2FyZC5cbiAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKTtcbiAgICAgIH1cblxuICAgIH0pO1xuICB9XG5cbn07XG5cblxuZnVuY3Rpb24ga2V5ZG93bihldmVudCkge1xuXG4gIC8vIEdpdmUgY29sbGVjdGl2ZSBlbGVtZW50cyBhIHNob3QgYXQgdGhlIGV2ZW50LCB3b3JraW5nIGZyb20gaW5uZXJtb3N0IHRvXG4gIC8vIG91dGVybW9zdCAodGhpcyBlbGVtZW50KS5cbiAgbGV0IGhhbmRsZWQ7XG4gIGxldCBlbGVtZW50cyA9IHRoaXMuY29sbGVjdGl2ZS5lbGVtZW50cztcbiAgZm9yIChsZXQgaSA9IGVsZW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgbGV0IGVsZW1lbnQgPSBlbGVtZW50c1tpXTtcbiAgICBoYW5kbGVkID0gZWxlbWVudC5rZXlkb3duICYmIGVsZW1lbnQua2V5ZG93bihldmVudCk7XG4gICAgaWYgKGhhbmRsZWQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChoYW5kbGVkKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxufVxuXG5cbi8vIFJldHVybiB0aGUgZmlyc3QgQVJJQSBsYWJlbCBkZWZpbmVkIGJ5IHRoZSBjb2xsZWN0aXZlLlxuZnVuY3Rpb24gZ2V0Q29sbGVjdGl2ZUFyaWFMYWJlbChjb2xsZWN0aXZlKSB7XG4gIGxldCBsYWJlbHMgPSBjb2xsZWN0aXZlLmVsZW1lbnRzLm1hcChlbGVtZW50ID0+IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJykpO1xuICByZXR1cm4gbGFiZWxzLmZpbmQobGFiZWwgPT4gbGFiZWwgIT09IG51bGwpO1xufVxuXG5cbmZ1bmN0aW9uIGlzTGlzdGVuaW5nVG9LZXlkb3duKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQuX2tleWRvd25MaXN0ZW5lciAhPSBudWxsO1xufVxuXG5cbmZ1bmN0aW9uIHN0YXJ0TGlzdGVuaW5nVG9LZXlkb3duKGVsZW1lbnQpIHtcbiAgZWxlbWVudC5fa2V5ZG93bkxpc3RlbmVyID0ga2V5ZG93bi5iaW5kKGVsZW1lbnQpO1xuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlbGVtZW50Ll9rZXlkb3duTGlzdGVuZXIpO1xuICBpZiAoZWxlbWVudC50YWJJbmRleCA8IDApIHtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiSW5kZXgnLCAwKTtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIHN0b3BMaXN0ZW5pbmdUb0tleWRvd24oZWxlbWVudCkge1xuICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlbGVtZW50Ll9rZXlkb3duTGlzdGVuZXIpO1xuICBlbGVtZW50Ll9rZXlkb3duTGlzdGVuZXIgPSBudWxsO1xuICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgndGFiSW5kZXgnKTtcbn1cbiIsIi8qKlxuICogTWl4aW4gd2hpY2ggbWFwcyBkaXJlY3Rpb24ga2V5cyAoTGVmdCwgUmlnaHQsIGV0Yy4pIHRvIGRpcmVjdGlvbiBzZW1hbnRpY3NcbiAqIChnb0xlZnQsIGdvUmlnaHQsIGV0Yy4pLlxuICpcbiAqIEBtaXhpbiBLZXlib2FyZERpcmVjdGlvblxuICovXG5cblxuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IGNsYXNzIEtleWJvYXJkRGlyZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgLy8gRGVmYXVsdCBpbXBsZW1lbnRhdGlvbnMuIFRoZXNlIHdpbGwgdHlwaWNhbGx5IGJlIGhhbmRsZWQgYnkgb3RoZXIgbWl4aW5zLlxuICBnb0Rvd24oKSB7XG4gICAgaWYgKHN1cGVyLmdvRG93bikgeyByZXR1cm4gc3VwZXIuZ29Eb3duKCk7IH1cbiAgfVxuICBnb0VuZCgpIHtcbiAgICBpZiAoc3VwZXIuZ29FbmQpIHsgcmV0dXJuIHN1cGVyLmdvRW5kKCk7IH1cbiAgfVxuICBnb0xlZnQoKSB7XG4gICAgaWYgKHN1cGVyLmdvTGVmdCkgeyByZXR1cm4gc3VwZXIuZ29MZWZ0KCk7IH1cbiAgfVxuICBnb1JpZ2h0KCkge1xuICAgIGlmIChzdXBlci5nb1JpZ2h0KSB7IHJldHVybiBzdXBlci5nb1JpZ2h0KCk7IH1cbiAgfVxuICBnb1N0YXJ0KCkge1xuICAgIGlmIChzdXBlci5nb1N0YXJ0KSB7IHJldHVybiBzdXBlci5nb1N0YXJ0KCk7IH1cbiAgfVxuICBnb1VwKCkge1xuICAgIGlmIChzdXBlci5nb1VwKSB7IHJldHVybiBzdXBlci5nb1VwKCk7IH1cbiAgfVxuXG4gIGtleWRvd24oZXZlbnQpIHtcbiAgICBsZXQgaGFuZGxlZDtcbiAgICAvLyBJZ25vcmUgTGVmdC9SaWdodCBrZXlzIHdoZW4gbWV0YUtleSBvciBhbHRLZXkgbW9kaWZpZXIgaXMgYWxzbyBwcmVzc2VkLFxuICAgIC8vIGFzIHRoZSB1c2VyIG1heSBiZSB0cnlpbmcgdG8gbmF2aWdhdGUgYmFjayBvciBmb3J3YXJkIGluIHRoZSBicm93c2VyLlxuICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgY2FzZSAzNTogLy8gRW5kXG4gICAgICAgIGhhbmRsZWQgPSB0aGlzLmdvRW5kKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzNjogLy8gSG9tZVxuICAgICAgICBoYW5kbGVkID0gdGhpcy5nb1N0YXJ0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzNzogLy8gTGVmdFxuICAgICAgICBpZiAoIWV2ZW50Lm1ldGFLZXkgJiYgIWV2ZW50LmFsdEtleSkge1xuICAgICAgICAgIGhhbmRsZWQgPSB0aGlzLmdvTGVmdCgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzODogLy8gVXBcbiAgICAgICAgaGFuZGxlZCA9IGV2ZW50LmFsdEtleSA/IHRoaXMuZ29TdGFydCgpIDogdGhpcy5nb1VwKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOTogLy8gUmlnaHRcbiAgICAgICAgaWYgKCFldmVudC5tZXRhS2V5ICYmICFldmVudC5hbHRLZXkpIHtcbiAgICAgICAgICBoYW5kbGVkID0gdGhpcy5nb1JpZ2h0KCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDQwOiAvLyBEb3duXG4gICAgICAgIGhhbmRsZWQgPSBldmVudC5hbHRLZXkgPyB0aGlzLmdvRW5kKCkgOiB0aGlzLmdvRG93bigpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgLy8gUHJlZmVyIG1peGluIHJlc3VsdCBpZiBpdCdzIGRlZmluZWQsIG90aGVyd2lzZSB1c2UgYmFzZSByZXN1bHQuXG4gICAgcmV0dXJuIGhhbmRsZWQgfHwgKHN1cGVyLmtleWRvd24gJiYgc3VwZXIua2V5ZG93bihldmVudCkpO1xuICB9XG5cbn07XG4iLCIvKipcbiAqIE1peGluIHdoaWNoIG1hcHMgdG91Y2ggZ2VzdHVyZXMgKHN3aXBlIGxlZnQsIHN3aXBlIHJpZ2h0KSB0byBkaXJlY3Rpb25cbiAqIHNlbWFudGljcyAoZ29SaWdodCwgZ29MZWZ0KS5cbiAqXG4gKiBAbWl4aW4gU3dpcGVEaXJlY3Rpb25cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4gY2xhc3MgU3dpcGVEaXJlY3Rpb24gZXh0ZW5kcyBiYXNlIHtcblxuICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuXG4gICAgdGhpcy5wb3NpdGlvbiA9IDA7XG5cbiAgICAvLyBUT0RPOiBUb3VjaCBldmVudHMgY291bGQgYmUgZmFjdG9yZWQgb3V0IGludG8gaXRzIG93biBtaXhpbi5cblxuICAgIC8vIEluIGFsbCB0b3VjaCBldmVudHMsIG9ubHkgaGFuZGxlIHNpbmdsZSB0b3VjaGVzLiBXZSBkb24ndCB3YW50IHRvXG4gICAgLy8gaW5hZHZlcnRlbnRseSBkbyB3b3JrIHdoZW4gdGhlIHVzZXIncyB0cnlpbmcgdG8gcGluY2gtem9vbSBmb3IgZXhhbXBsZS5cbiAgICAvLyBUT0RPOiBFdmVuIGJldHRlciBhcHByb2FjaCB0aGFuIGJlbG93IHdvdWxkIGJlIHRvIGlnbm9yZSB0b3VjaGVzIGFmdGVyXG4gICAgLy8gdGhlIGZpcnN0IGlmIHRoZSB1c2VyIGhhcyBhbHJlYWR5IGJlZ3VuIGEgc3dpcGUuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZXZlbnQgPT4ge1xuICAgICAgaWYgKHRoaXMuX211bHRpVG91Y2gpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIGlmIChldmVudC50b3VjaGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICB0b3VjaFN0YXJ0KHRoaXMsIGV2ZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX211bHRpVG91Y2ggPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZXZlbnQgPT4ge1xuICAgICAgaWYgKCF0aGlzLl9tdWx0aVRvdWNoICYmIGV2ZW50LnRvdWNoZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGxldCBoYW5kbGVkID0gdG91Y2hNb3ZlKHRoaXMsIGV2ZW50KTtcbiAgICAgICAgaWYgKGhhbmRsZWQpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGV2ZW50ID0+IHtcbiAgICAgIGlmIChldmVudC50b3VjaGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAvLyBBbGwgdG91Y2hlcyByZW1vdmVkOyBnZXN0dXJlIGlzIGNvbXBsZXRlLlxuICAgICAgICBpZiAoIXRoaXMuX211bHRpVG91Y2gpIHtcbiAgICAgICAgICAvLyBTaW5nbGUtdG91Y2ggc3dpcGUgaGFzIGZpbmlzaGVkLlxuICAgICAgICAgIHRvdWNoRW5kKHRoaXMsIGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9tdWx0aVRvdWNoID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyBEZWZhdWx0IGltcGxlbWVudGF0aW9uc1xuICBnb0xlZnQoKSB7XG4gICAgaWYgKHN1cGVyLmdvTGVmdCkgeyByZXR1cm4gc3VwZXIuZ29MZWZ0KCk7IH1cbiAgfVxuICBnb1JpZ2h0KCkge1xuICAgIGlmIChzdXBlci5nb1JpZ2h0KSB7IHJldHVybiBzdXBlci5nb1JpZ2h0KCk7IH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgZGlzdGFuY2UgdGhlIHVzZXIgaGFzIG1vdmVkIHRoZSBmaXJzdCB0b3VjaHBvaW50IHNpbmNlIHRoZSBiZWdpbm5pbmdcbiAgICogb2YgYSBkcmFnLCBleHByZXNzZWQgYXMgYSBmcmFjdGlvbiBvZiB0aGUgZWxlbWVudCdzIHdpZHRoLlxuICAgKlxuICAgKiBAcHJvcGVydHkgcG9zaXRpb25cbiAgICogQHR5cGUgTnVtYmVyXG4gICAqL1xuICBnZXQgcG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Bvc2l0aW9uO1xuICB9XG4gIHNldCBwb3NpdGlvbihwb3NpdGlvbikge1xuICAgIGlmICgncG9zaXRpb24nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnBvc2l0aW9uID0gcG9zaXRpb247IH1cbiAgICB0aGlzLl9wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICB9XG5cbiAgLy8gRGVmYXVsdCBpbXBsZW1lbnRhdGlvblxuICBzaG93VHJhbnNpdGlvbih2YWx1ZSkge1xuICAgIGlmIChzdXBlci5zaG93VHJhbnNpdGlvbikgeyBzdXBlci5zaG93VHJhbnNpdGlvbih2YWx1ZSk7IH1cbiAgfVxuXG59O1xuXG5cbmZ1bmN0aW9uIHRvdWNoU3RhcnQoZWxlbWVudCwgZXZlbnQpIHtcbiAgZWxlbWVudC5zaG93VHJhbnNpdGlvbihmYWxzZSk7XG4gIGxldCB4ID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WDtcbiAgbGV0IHkgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZO1xuICBlbGVtZW50Ll9zdGFydFggPSB4O1xuICBlbGVtZW50Ll9wcmV2aW91c1ggPSB4O1xuICBlbGVtZW50Ll9wcmV2aW91c1kgPSB5O1xuICBlbGVtZW50Ll9kZWx0YVggPSAwO1xuICBlbGVtZW50Ll9kZWx0YVkgPSAwO1xufVxuXG5mdW5jdGlvbiB0b3VjaE1vdmUoZWxlbWVudCwgZXZlbnQpIHtcbiAgbGV0IHggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYO1xuICBsZXQgeSA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFk7XG4gIGVsZW1lbnQuX2RlbHRhWCA9IHggLSBlbGVtZW50Ll9wcmV2aW91c1g7XG4gIGVsZW1lbnQuX2RlbHRhWSA9IHkgLSBlbGVtZW50Ll9wcmV2aW91c1k7XG4gIGVsZW1lbnQuX3ByZXZpb3VzWCA9IHg7XG4gIGVsZW1lbnQuX3ByZXZpb3VzWSA9IHk7XG4gIGlmIChNYXRoLmFicyhlbGVtZW50Ll9kZWx0YVgpID4gTWF0aC5hYnMoZWxlbWVudC5fZGVsdGFZKSkge1xuICAgIC8vIE1vdmUgd2FzIG1vc3RseSBob3Jpem9udGFsLlxuICAgIHRyYWNrVG8oZWxlbWVudCwgeCk7XG4gICAgLy8gSW5kaWNhdGUgdGhhdCB0aGUgZXZlbnQgd2FzIGhhbmRsZWQuIEl0J2QgYmUgbmljZXIgaWYgd2UgZGlkbid0IGhhdmVcbiAgICAvLyB0byBkbyB0aGlzIHNvIHRoYXQsIGUuZy4sIGEgdXNlciBjb3VsZCBiZSBzd2lwaW5nIGxlZnQgYW5kIHJpZ2h0XG4gICAgLy8gd2hpbGUgc2ltdWx0YW5lb3VzbHkgc2Nyb2xsaW5nIHVwIGFuZCBkb3duLiAoTmF0aXZlIHRvdWNoIGFwcHMgY2FuIGRvXG4gICAgLy8gdGhhdC4pIEhvd2V2ZXIsIE1vYmlsZSBTYWZhcmkgd2FudHMgdG8gaGFuZGxlIHN3aXBlIGV2ZW50cyBuZWFyIHRoZVxuICAgIC8vIHBhZ2UgYW5kIGludGVycHJldCB0aGVtIGFzIG5hdmlnYXRpb25zLiBUbyBhdm9pZCBoYXZpbmcgYSBob3JpemlvbnRhbFxuICAgIC8vIHN3aXBlIG1pc2ludGVwcmV0ZWQgYXMgYSBuYXZpZ2F0aW9uLCB3ZSBpbmRpY2F0ZSB0aGF0IHdlJ3ZlIGhhbmRsZWRcbiAgICAvLyB0aGUgZXZlbnQsIGFuZCBwcmV2ZW50IGRlZmF1bHQgYmVoYXZpb3IuXG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgLy8gTW92ZSB3YXMgbW9zdGx5IHZlcnRpY2FsLlxuICAgIHJldHVybiBmYWxzZTsgLy8gTm90IGhhbmRsZWRcbiAgfVxufVxuXG5mdW5jdGlvbiB0b3VjaEVuZChlbGVtZW50LCBldmVudCkge1xuICBlbGVtZW50LnNob3dUcmFuc2l0aW9uKHRydWUpO1xuICBsZXQgeCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFg7XG4gIGlmIChlbGVtZW50Ll9kZWx0YVggPj0gMjApIHtcbiAgICAvLyBGaW5pc2hlZCBnb2luZyByaWdodCBhdCBoaWdoIHNwZWVkLlxuICAgIC8vIGNvbnNvbGUubG9nKFwiZmxpY2sgcmlnaHQgXCIgKyBlbGVtZW50Ll9kZWx0YVgpO1xuICAgIGVsZW1lbnQuZ29MZWZ0KCk7XG4gIH0gZWxzZSBpZiAoZWxlbWVudC5fZGVsdGFYIDw9IC0yMCkge1xuICAgIC8vIEZpbmlzaGVkIGdvaW5nIGxlZnQgYXQgaGlnaCBzcGVlZC5cbiAgICAvLyBjb25zb2xlLmxvZyhcImZsaWNrIGxlZnQgXCIgKyBlbGVtZW50Ll9kZWx0YVgpO1xuICAgIGVsZW1lbnQuZ29SaWdodCgpO1xuICB9IGVsc2Uge1xuICAgIC8vIEZpbmlzaGVkIGF0IGxvdyBzcGVlZC5cbiAgICAvLyBjb25zb2xlLmxvZyhcInNsb3cgZHJhZyBcIiArIGVsZW1lbnQuX2RlbHRhWCk7XG4gICAgdHJhY2tUbyhlbGVtZW50LCB4KTtcbiAgICBsZXQgcG9zaXRpb24gPSBlbGVtZW50LnBvc2l0aW9uO1xuICAgIGlmIChwb3NpdGlvbiA+PSAwLjUpIHtcbiAgICAgIGVsZW1lbnQuZ29SaWdodCgpO1xuICAgIH0gZWxzZSBpZiAocG9zaXRpb24gPD0gLTAuNSkge1xuICAgICAgZWxlbWVudC5nb0xlZnQoKTtcbiAgICB9XG4gIH1cbiAgZWxlbWVudC5wb3NpdGlvbiA9IDA7XG4gIGVsZW1lbnQuX2RlbHRhWCA9IG51bGw7XG4gIGVsZW1lbnQuX2RlbHRhWSA9IG51bGw7XG59XG5cbmZ1bmN0aW9uIHRyYWNrVG8oZWxlbWVudCwgeCkge1xuICBsZXQgd2lkdGggPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xuICBsZXQgZHJhZ0Rpc3RhbmNlID0gZWxlbWVudC5fc3RhcnRYIC0geDtcbiAgbGV0IGZyYWN0aW9uID0gd2lkdGggPiAwID9cbiAgICBkcmFnRGlzdGFuY2UgLyB3aWR0aCA6XG4gICAgMDtcbiAgZWxlbWVudC5wb3NpdGlvbiA9IGZyYWN0aW9uO1xufVxuIiwiLyoqXG4gKiBNaXhpbiBmb3IgdGVtcGxhdGUgc3RhbXBpbmcuIElmIGEgY29tcG9uZW50IGRlZmluZXMgYSB0ZW1wbGF0ZSBwcm9wZXJ0eSAoYXMgYVxuICogc3RyaW5nIG9yIHJlZmVyZW5jaW5nIGEgSFRNTCB0ZW1wbGF0ZSksIHdoZW4gdGhlIGNvbXBvbmVudCBjbGFzcyBpc1xuICogaW5zdGFudGlhdGVkLCBhIHNoYWRvdyByb290IHdpbGwgYmUgY3JlYXRlZCBvbiB0aGUgaW5zdGFuY2UsIGFuZCB0aGUgY29udGVudHNcbiAqIG9mIHRoZSB0ZW1wbGF0ZSB3aWxsIGJlIGNsb25lZCBpbnRvIHRoZSBzaGFkb3cgcm9vdC5cbiAqXG4gKiBGb3IgdGhlIHRpbWUgYmVpbmcsIHRoaXMgZXh0ZW5zaW9uIHJldGFpbnMgc3VwcG9ydCBmb3IgU2hhZG93IERPTSB2MC5cbiAqIFRoYXQgd2lsbCBldmVudHVhbGx5IGJlIGRlcHJlY2F0ZWQgYXMgYnJvd3NlcnMgaW1wbGVtZW50IFNoYWRvdyBET00gdjEuXG4gKlxuICogQG1peGluIFRlbXBsYXRlU3RhbXBpbmdcbiAqL1xuXG5cbi8vIEZlYXR1cmUgZGV0ZWN0aW9uIGZvciBvbGQgU2hhZG93IERPTSB2MC5cbmNvbnN0IFVTSU5HX1NIQURPV19ET01fVjAgPSAodHlwZW9mIEhUTUxFbGVtZW50LnByb3RvdHlwZS5jcmVhdGVTaGFkb3dSb290ICE9PSAndW5kZWZpbmVkJyk7XG5cblxuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IGNsYXNzIFRlbXBsYXRlU3RhbXBpbmcgZXh0ZW5kcyBiYXNlIHtcblxuICAvKlxuICAgKiBJZiB0aGUgY29tcG9uZW50IGRlZmluZXMgYSB0ZW1wbGF0ZSwgYSBzaGFkb3cgcm9vdCB3aWxsIGJlIGNyZWF0ZWQgb24gdGhlXG4gICAqIGNvbXBvbmVudCBpbnN0YW5jZSwgYW5kIHRoZSB0ZW1wbGF0ZSBzdGFtcGVkIGludG8gaXQuXG4gICAqL1xuICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuICAgIGxldCB0ZW1wbGF0ZSA9IHRoaXMudGVtcGxhdGU7XG4gICAgLy8gVE9ETzogU2F2ZSB0aGUgcHJvY2Vzc2VkIHRlbXBsYXRlIHdpdGggdGhlIGNvbXBvbmVudCdzIGNsYXNzIHByb3RvdHlwZVxuICAgIC8vIHNvIGl0IGRvZXNuJ3QgbmVlZCB0byBiZSBwcm9jZXNzZWQgd2l0aCBldmVyeSBpbnN0YW50aWF0aW9uLlxuICAgIGlmICh0ZW1wbGF0ZSkge1xuXG4gICAgICBpZiAodHlwZW9mIHRlbXBsYXRlID09PSAnc3RyaW5nJykge1xuICAgICAgICAvLyBVcGdyYWRlIHBsYWluIHN0cmluZyB0byByZWFsIHRlbXBsYXRlLlxuICAgICAgICB0ZW1wbGF0ZSA9IGNyZWF0ZVRlbXBsYXRlV2l0aElubmVySFRNTCh0ZW1wbGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChVU0lOR19TSEFET1dfRE9NX1YwKSB7XG4gICAgICAgIHBvbHlmaWxsU2xvdFdpdGhDb250ZW50KHRlbXBsYXRlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHdpbmRvdy5TaGFkb3dET01Qb2x5ZmlsbCkge1xuICAgICAgICBzaGltVGVtcGxhdGVTdHlsZXModGVtcGxhdGUsIHRoaXMubG9jYWxOYW1lKTtcbiAgICAgIH1cblxuICAgICAgLy8gdGhpcy5sb2coXCJjbG9uaW5nIHRlbXBsYXRlIGludG8gc2hhZG93IHJvb3RcIik7XG4gICAgICBsZXQgcm9vdCA9IFVTSU5HX1NIQURPV19ET01fVjAgP1xuICAgICAgICB0aGlzLmNyZWF0ZVNoYWRvd1Jvb3QoKSA6ICAgICAgICAgICAgIC8vIFNoYWRvdyBET00gdjBcbiAgICAgICAgdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7ICAvLyBTaGFkb3cgRE9NIHYxXG4gICAgICBsZXQgY2xvbmUgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRlbXBsYXRlLmNvbnRlbnQsIHRydWUpO1xuICAgICAgcm9vdC5hcHBlbmRDaGlsZChjbG9uZSk7XG4gICAgfVxuICB9XG5cbn07XG5cblxuLy8gQ29udmVydCBhIHBsYWluIHN0cmluZyBvZiBIVE1MIGludG8gYSByZWFsIHRlbXBsYXRlIGVsZW1lbnQuXG5mdW5jdGlvbiBjcmVhdGVUZW1wbGF0ZVdpdGhJbm5lckhUTUwoaW5uZXJIVE1MKSB7XG4gIGxldCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gIC8vIFJFVklFVzogSXMgdGhlcmUgYW4gZWFzaWVyIHdheSB0byBkbyB0aGlzP1xuICAvLyBXZSdkIGxpa2UgdG8ganVzdCBzZXQgaW5uZXJIVE1MIG9uIHRoZSB0ZW1wbGF0ZSBjb250ZW50LCBidXQgc2luY2UgaXQnc1xuICAvLyBhIERvY3VtZW50RnJhZ21lbnQsIHRoYXQgZG9lc24ndCB3b3JrLlxuICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gIHdoaWxlIChkaXYuY2hpbGROb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgdGVtcGxhdGUuY29udGVudC5hcHBlbmRDaGlsZChkaXYuY2hpbGROb2Rlc1swXSk7XG4gIH1cbiAgcmV0dXJuIHRlbXBsYXRlO1xufVxuXG4vLyBSZXBsYWNlIG9jY3VyZW5jZXMgb2YgdjEgc2xvdCBlbGVtZW50cyB3aXRoIHYwIGNvbnRlbnQgZWxlbWVudHMuXG4vLyBUaGlzIGRvZXMgbm90IHlldCBtYXAgbmFtZWQgc2xvdHMgdG8gY29udGVudCBzZWxlY3QgY2xhdXNlcy5cbmZ1bmN0aW9uIHBvbHlmaWxsU2xvdFdpdGhDb250ZW50KHRlbXBsYXRlKSB7XG4gIFtdLmZvckVhY2guY2FsbCh0ZW1wbGF0ZS5jb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3Nsb3QnKSwgc2xvdEVsZW1lbnQgPT4ge1xuICAgIGxldCBjb250ZW50RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NvbnRlbnQnKTtcbiAgICBzbG90RWxlbWVudC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChjb250ZW50RWxlbWVudCwgc2xvdEVsZW1lbnQpO1xuICB9KTtcbn1cblxuLy8gSW52b2tlIGJhc2ljIHN0eWxlIHNoaW1taW5nIHdpdGggU2hhZG93Q1NTLlxuZnVuY3Rpb24gc2hpbVRlbXBsYXRlU3R5bGVzKHRlbXBsYXRlLCB0YWcpIHtcbiAgd2luZG93LldlYkNvbXBvbmVudHMuU2hhZG93Q1NTLnNoaW1TdHlsaW5nKHRlbXBsYXRlLmNvbnRlbnQsIHRhZyk7XG59XG4iLCIvKipcbiAqIE1peGluIHdoaWNoIG1hcHMgYSBob3Jpem9udGFsIHRyYWNrcGFkIHN3aXBlIGdlc3R1cmVzIChvciBob3Jpem9udGFsIG1vdXNlXG4gKiB3aGVlbCBhY3Rpb25zKSB0byBkaXJlY3Rpb24gc2VtYW50aWNzLlxuICpcbiAqIFRvIHJlc3BvbmQgdG8gdGhlIHRyYWNrcGFkLCB3ZSBjYW4gbGlzdGVuIHRvIHRoZSBET00ncyBcIndoZWVsXCIgZXZlbnRzLiBUaGVzZVxuICogZXZlbnRzIGFyZSBmaXJlZCBhcyB0aGUgdXNlciBkcmFncyB0aGVpciBmaW5nZXJzIGFjcm9zcyBhIHRyYWNrcGFkLlxuICogVW5mb3J0dW5hdGVseSwgdGhpcyBzY2hlbWUgaXMgbWlzc2luZyBhIGNyaXRpY2FsIGV2ZW50IOKAlMKgdGhlcmUgaXMgbm8gZXZlbnRcbiAqIHdoZW4gdGhlIHVzZXIgKnN0b3BzKiBhIGdlc3R1cmVkIG9uIHRoZSB0cmFja3BhZC5cbiAqXG4gKiBUbyBjb21wbGljYXRlIG1hdHRlcnMsIHRoZSBtYWluc3RyZWFtIGJyb3dzZXJzIGNvbnRpbnVlIHRvIGdlbmVyYXRlIHdoZWVsXG4gKiBldmVudHMgZXZlbiBhZnRlciB0aGUgdXNlciBoYXMgc3RvcHBlZCBkcmFnZ2luZyB0aGVpciBmaW5nZXJzLiBUaGVzZSBmYWtlXG4gKiBldmVudHMgc2ltdWxhdGUgdGhlIHVzZXIgZ3JhZHVhbGx5IHNsb3dpbmcgZG93biB0aGUgZHJhZyB1bnRpbCB0aGV5IGNvbWUgdG8gYVxuICogc21vb3RoIHN0b3AuIEluIHNvbWUgY29udGV4dHMsIHRoZXNlIGZha2Ugd2hlZWwgZXZlbnRzIG1pZ2h0IGJlIGhlbHBmdWwsIGJ1dFxuICogaW4gdHJ5aW5nIHRvIHN1cHBseSB0eXBpY2FsIHRyYWNrcGFkIHN3aXBlIG5hdmlnYXRpb24sIHRoZXNlIGZha2UgZXZlbnRzIGdldFxuICogaW4gdGhlIHdheS5cbiAqXG4gKiBUaGlzIGNvbXBvbmVudCB1c2VzIHNvbWUgaGV1cmlzdGljcyB0byB3b3JrIGFyb3VuZCB0aGVzZSBwcm9ibGVtcywgYnV0IHRoZVxuICogY29tcGxleCBuYXR1cmUgb2YgdGhlIHByb2JsZW0gbWFrZSBpdCBleHRyZW1lbHkgZGlmZmljdWx0IHRvIGFjaGlldmUgdGhlIHNhbWVcbiAqIGRlZ3JlZSBvZiB0cmFja3BhZCByZXNwb25zaXZlbmVzcyBwb3NzaWJsZSB3aXRoIG5hdGl2ZSBhcHBsaWNhdGlvbnMuXG4gKlxuICogQG1peGluIFRyYWNrcGFkRGlyZWN0aW9uXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IGNsYXNzIFRyYWNrcGFkRGlyZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgZXZlbnQgPT4ge1xuICAgICAgbGV0IGhhbmRsZWQgPSB3aGVlbCh0aGlzLCBldmVudCk7XG4gICAgICBpZiAoaGFuZGxlZCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJlc2V0V2hlZWxUcmFja2luZyh0aGlzKTtcbiAgfVxuXG4gIC8vIERlZmF1bHQgaW1wbGVtZW50YXRpb25zXG4gIGdvTGVmdCgpIHtcbiAgICBpZiAoc3VwZXIuZ29MZWZ0KSB7IHJldHVybiBzdXBlci5nb0xlZnQoKTsgfVxuICB9XG4gIGdvUmlnaHQoKSB7XG4gICAgaWYgKHN1cGVyLmdvUmlnaHQpIHsgcmV0dXJuIHN1cGVyLmdvUmlnaHQoKTsgfVxuICB9XG5cbiAgZ2V0IHBvc2l0aW9uKCkge1xuICAgIHJldHVybiBzdXBlci5wb3NpdGlvbjtcbiAgfVxuICBzZXQgcG9zaXRpb24ocG9zaXRpb24pIHtcbiAgICBpZiAoJ3Bvc2l0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5wb3NpdGlvbiA9IHBvc2l0aW9uOyB9XG4gIH1cblxuICAvLyBEZWZhdWx0IGltcGxlbWVudGF0aW9uXG4gIHNob3dUcmFuc2l0aW9uKHZhbHVlKSB7XG4gICAgaWYgKHN1cGVyLnNob3dUcmFuc2l0aW9uKSB7IHN1cGVyLnNob3dUcmFuc2l0aW9uKHZhbHVlKTsgfVxuICB9XG5cbn07XG5cblxuLy8gVGltZSB3ZSB3YWl0IGZvbGxvd2luZyBhIG5hdmlnYXRpb24gYmVmb3JlIHBheWluZyBhdHRlbnRpb24gdG8gd2hlZWxcbi8vIGV2ZW50cyBhZ2Fpbi5cbmNvbnN0IFBPU1RfTkFWSUdBVEVfVElNRSA9IDI1MDtcblxuLy8gVGltZSB3ZSB3YWl0IGFmdGVyIHRoZSBsYXN0IHdoZWVsIGV2ZW50IGJlZm9yZSB3ZSByZXNldCB0aGluZ3MuXG5jb25zdCBXSEVFTF9USU1FID0gMTAwO1xuXG5cbi8vIEZvbGxvd2luZyBhIG5hdmlnYXRpb24sIHBhcnRpYWxseSByZXNldCBvdXIgd2hlZWwgdHJhY2tpbmcuXG5mdW5jdGlvbiBwb3N0TmF2aWdhdGUoZWxlbWVudCkge1xuICBlbGVtZW50LnBvc2l0aW9uID0gMDtcbiAgZWxlbWVudC5fd2hlZWxEaXN0YW5jZSA9IDA7XG4gIGVsZW1lbnQuX3Bvc3ROYXZpZ2F0ZURlbGF5Q29tcGxldGUgPSB0cnVlO1xuICBlbGVtZW50Ll9hYnNvcmJEZWNlbGVyYXRpb24gPSB0cnVlO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBlbGVtZW50Ll9wb3N0TmF2aWdhdGVEZWxheUNvbXBsZXRlID0gZmFsc2U7XG4gIH0sIFBPU1RfTkFWSUdBVEVfVElNRSk7XG59XG5cbi8vIFJlc2V0IGFsbCBzdGF0ZSByZWxhdGVkIHRvIHRoZSB0cmFja2luZyBvZiB0aGUgd2hlZWwuXG5mdW5jdGlvbiByZXNldFdoZWVsVHJhY2tpbmcoZWxlbWVudCkge1xuICBlbGVtZW50LnBvc2l0aW9uID0gMDtcbiAgZWxlbWVudC5fd2hlZWxEaXN0YW5jZSA9IDA7XG4gIGVsZW1lbnQuX2xhc3REZWx0YVggPSAwO1xuICBlbGVtZW50Ll9hYnNvcmJEZWNlbGVyYXRpb24gPSBmYWxzZTtcbiAgZWxlbWVudC5fcG9zdE5hdmlnYXRlRGVsYXlDb21wbGV0ZSA9IGZhbHNlO1xuICBpZiAoZWxlbWVudC5fbGFzdFdoZWVsVGltZW91dCkge1xuICAgIGNsZWFyVGltZW91dChlbGVtZW50Ll9sYXN0V2hlZWxUaW1lb3V0KTtcbiAgICBlbGVtZW50Ll9sYXN0V2hlZWxUaW1lb3V0ID0gbnVsbDtcbiAgfVxufVxuXG4vLyBEZWZpbmUgb3VyIG93biBzaWduIGZ1bmN0aW9uLCBzaW5jZSAoYXMgb2YgTWF5IDIwMTUpLCBTYWZhcmkgYW5kIElFIGRvbid0XG4vLyBzdXBwbHkgTWF0aC5zaWduKCkuXG5mdW5jdGlvbiBzaWduKHgpIHtcbiAgcmV0dXJuICh4ID09PSAwKSA/XG4gICAgMCA6XG4gICAgKHggPiAwKSA/XG4gICAgICAxIDpcbiAgICAgIC0xO1xufVxuXG4vLyBUT0RPOiBEYW1waW5nLCBvciBzb21lIG90aGVyIHRyZWF0bWVudCBmb3IgZ29pbmcgcGFzdCB0aGUgZW5kcy5cblxuLypcbiAqIEEgd2hlZWwgZXZlbnQgaGFzIGJlZW4gZ2VuZXJhdGVkLiBUaGlzIGNvdWxkIGJlIGEgcmVhbCB3aGVlbCBldmVudCwgb3IgaXRcbiAqIGNvdWxkIGJlIGZha2UgKHNlZSBub3RlcyBpbiB0aGUgaGVhZGVyKS5cbiAqXG4gKiBUaGlzIGhhbmRsZXIgdXNlcyBzZXZlcmFsIHN0cmF0ZWdpZXMgdG8gdHJ5IHRvIGFwcHJveGltYXRlIG5hdGl2ZSB0cmFja3BhZFxuICogc3dpcGUgbmF2aWdhdGlvbi5cbiAqXG4gKiBJZiB0aGUgdXNlciBoYXMgZHJhZ2dlZCBlbm91Z2ggdG8gY2F1c2UgYSBuYXZpZ2F0aW9uLCB0aGVuIGZvciBhIHNob3J0XG4gKiBkZWxheSBmb2xsb3dpbmcgdGhhdCBuYXZpZ2F0aW9uLCBzdWJzZXF1ZW50IHdoZWVsIGV2ZW50cyB3aWxsIGJlIGlnbm9yZWQuXG4gKlxuICogRnVydGhlcm1vcmUsIGZvbGx3b3dpbmcgYSBuYXZpZ2F0aW9uLCB3ZSBpZ25vcmUgYWxsIHdoZWVsIGV2ZW50cyB1bnRpbCB3ZVxuICogcmVjZWl2ZSBhdCBsZWFzdCBvbmUgZXZlbnQgd2hlcmUgdGhlIGV2ZW50J3MgZGVsdGFYIChkaXN0YW5jZSB0cmF2ZWxlZCkgaXNcbiAqICpncmVhdGVyKiB0aGFuIHRoZSBwcmV2aW91cyBldmVudCdzIGRlbHRhWC4gVGhpcyBoZWxwcyB1cyBmaWx0ZXIgb3V0IHRoZVxuICogZmFrZSB3aGVlbCBldmVudHMgZ2VuZXJhdGVkIGJ5IHRoZSBicm93c2VyIHRvIHNpbXVsYXRlIGRlY2VsZXJhdGlvbi5cbiAqXG4gKi9cbmZ1bmN0aW9uIHdoZWVsKGVsZW1lbnQsIGV2ZW50KSB7XG5cbiAgLy8gU2luY2Ugd2UgaGF2ZSBhIG5ldyB3aGVlbCBldmVudCwgcmVzZXQgb3VyIHRpbWVyIHdhaXRpbmcgZm9yIHRoZSBsYXN0XG4gIC8vIHdoZWVsIGV2ZW50IHRvIHBhc3MuXG4gIGlmIChlbGVtZW50Ll9sYXN0V2hlZWxUaW1lb3V0KSB7XG4gICAgY2xlYXJUaW1lb3V0KGVsZW1lbnQuX2xhc3RXaGVlbFRpbWVvdXQpO1xuICB9XG4gIGVsZW1lbnQuX2xhc3RXaGVlbFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICB3aGVlbFRpbWVkT3V0KGVsZW1lbnQpO1xuICB9LCBXSEVFTF9USU1FKTtcblxuICBsZXQgZGVsdGFYID0gZXZlbnQuZGVsdGFYO1xuICBsZXQgZGVsdGFZID0gZXZlbnQuZGVsdGFZO1xuXG4gIC8vIFNlZSBpZiBlbGVtZW50IGV2ZW50IHJlcHJlc2VudHMgYWNjZWxlcmF0aW9uIG9yIGRlY2VsZXJhdGlvbi5cbiAgbGV0IGFjY2VsZXJhdGlvbiA9IHNpZ24oZGVsdGFYKSAqIChkZWx0YVggLSBlbGVtZW50Ll9sYXN0RGVsdGFYKTtcbiAgZWxlbWVudC5fbGFzdERlbHRhWCA9IGRlbHRhWDtcbiAgLy8gY29uc29sZS5sb2coZGVsdGFYICsgXCIgXCIgKyBhY2NlbGVyYXRpb24gKyBcIiBcIiArIGVsZW1lbnQuX2Fic29yYkRlY2VsZXJhdGlvbiArIFwiIFwiICsgZWxlbWVudC5fcG9zdE5hdmlnYXRlRGVsYXlDb21wbGV0ZSk7XG5cbiAgaWYgKE1hdGguYWJzKGRlbHRhWCkgPCBNYXRoLmFicyhkZWx0YVkpKSB7XG4gICAgLy8gTW92ZSB3YXMgbW9zdGx5IHZlcnRpY2FsLiBUaGUgdXNlciBtYXkgYmUgdHJ5aW5nIHNjcm9sbCB3aXRoIHRoZVxuICAgIC8vIHRyYWNrcGFkL3doZWVsLiBUbyBiZSBvbiB0aGUgc2FmZSwgd2UgaWdub3JlIHN1Y2ggZXZlbnRzLlxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChlbGVtZW50Ll9wb3N0TmF2aWdhdGVEZWxheUNvbXBsZXRlKSB7XG4gICAgLy8gSXQncyB0b28gc29vbiBhZnRlciBhIG5hdmlnYXRpb247IGlnbm9yZSB0aGUgZXZlbnQuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuXG4gIGlmIChhY2NlbGVyYXRpb24gPiAwKSB7XG4gICAgLy8gVGhlIGV2ZW50cyBhcmUgbm90IChvciBhcmUgbm8gbG9uZ2VyKSBkZWNlbGVyYXRpbmcsIHNvIHdlIGNhbiBzdGFydFxuICAgIC8vIHBheWluZyBhdHRlbnRpb24gdG8gdGhlbSBhZ2Fpbi5cbiAgICBlbGVtZW50Ll9hYnNvcmJEZWNlbGVyYXRpb24gPSBmYWxzZTtcbiAgfSBlbHNlIGlmIChlbGVtZW50Ll9hYnNvcmJEZWNlbGVyYXRpb24pIHtcbiAgICAvLyBUaGUgd2hlZWwgZXZlbnQgd2FzIGxpa2VseSBmYWtlZCB0byBzaW11bGF0ZSBkZWNlbGVyYXRpb247IGlnbm9yZSBpdC5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGVsZW1lbnQuX3doZWVsRGlzdGFuY2UgKz0gZGVsdGFYO1xuXG4gIC8vIFVwZGF0ZSB0aGUgcG9zaXRpb24gb2YgdGhlIGl0ZW1zIGJlaW5nIG5hdmlnYXRlZC5cbiAgbGV0IHdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgbGV0IHBvc2l0aW9uID0gd2lkdGggPiAwID9cbiAgICBlbGVtZW50Ll93aGVlbERpc3RhbmNlIC8gd2lkdGggOlxuICAgIDA7XG4gIGVsZW1lbnQuc2hvd1RyYW5zaXRpb24oZmFsc2UpO1xuICBwb3NpdGlvbiA9IHNpZ24ocG9zaXRpb24pICogTWF0aC5taW4oTWF0aC5hYnMocG9zaXRpb24pLCAxKTtcbiAgZWxlbWVudC5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuXG4gIC8vIElmIHRoZSB1c2VyIGhhcyBkcmFnZ2VkIGVub3VnaCB0byByZWFjaCB0aGUgcHJldmlvdXMvbmV4dCBpdGVtLCB0aGVuXG4gIC8vIGNvbXBsZXRlIGEgbmF2aWdhdGlvbiB0byB0aGF0IGl0ZW0uXG4gIGlmIChwb3NpdGlvbiA9PT0gMSkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiZ29SaWdodFwiKTtcbiAgICBlbGVtZW50LnNob3dUcmFuc2l0aW9uKHRydWUpO1xuICAgIGVsZW1lbnQuZ29SaWdodCgpO1xuICAgIHBvc3ROYXZpZ2F0ZShlbGVtZW50KTtcbiAgfSBlbHNlIGlmIChwb3NpdGlvbiA9PT0gLTEpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcImdvTGVmdFwiKTtcbiAgICBlbGVtZW50LnNob3dUcmFuc2l0aW9uKHRydWUpO1xuICAgIGVsZW1lbnQuZ29MZWZ0KCk7XG4gICAgcG9zdE5hdmlnYXRlKGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8vIEEgc3VmZmljaWVudGx5IGxvbmcgcGVyaW9kIG9mIHRpbWUgaGFzIHBhc3NlZCBzaW5jZSB0aGUgbGFzdCB3aGVlbCBldmVudC5cbi8vIFdlIHNuYXAgdGhlIHNlbGVjdGlvbiB0byB0aGUgY2xvc2VzdCBpdGVtLCB0aGVuIHJlc2V0IG91ciBzdGF0ZS5cbmZ1bmN0aW9uIHdoZWVsVGltZWRPdXQoZWxlbWVudCkge1xuICAvLyBjb25zb2xlLmxvZyhcInRpbWVvdXRcIik7XG5cbiAgLy8gU25hcCB0byB0aGUgY2xvc2VzdCBpdGVtLlxuICBlbGVtZW50LnNob3dUcmFuc2l0aW9uKHRydWUpO1xuICBsZXQgcG9zaXRpb24gPSBlbGVtZW50LnBvc2l0aW9uO1xuICBpZiAocG9zaXRpb24gPj0gMC41KSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJzbmFwIHJpZ2h0XCIpO1xuICAgIGVsZW1lbnQuZ29SaWdodCgpO1xuICB9IGVsc2UgaWYgKHBvc2l0aW9uIDw9IC0wLjUpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcInNuYXAgbGVmdFwiKTtcbiAgICBlbGVtZW50LmdvTGVmdCgpO1xuICB9XG5cbiAgLy8gVE9ETzogTGlzdGVuIGZvciB0aGUgdHJhbnNpdGlvbiB0byBjb21wbGV0ZSwgYW5kIHRoZW4gcmVzdG9yZVxuICAvLyBzaG93VHJhbnNpdGlvbiB0byBmYWxzZSAob3IgdGhlIHByZXZpb3VzIHZhbHVlKS5cblxuICByZXNldFdoZWVsVHJhY2tpbmcoZWxlbWVudCk7XG59XG4iLCIvKipcbiAqIEEgc2FtcGxlIGdlbmVyYWwtcHVycG9zZSBiYXNlIGNsYXNzIGZvciBkZWZpbmluZyBjdXN0b20gZWxlbWVudHMgdGhhdCBtaXhlc1xuICogaW4gc29tZSBjb21tb24gZmVhdHVyZXM6IHRlbXBsYXRlIHN0YW1waW5nIGludG8gYSBzaGFkb3cgcm9vdCwgYXV0b21hdGljIG5vZGVcbiAqIGZpbmRpbmcsIGFuZCBtYXJzaGFsbGluZyBiZXR3ZWVuIGF0dHJpYnV0ZXMgYW5kIHByb3BlcnRpZXMuXG4gKlxuICogVGhpcyBiYXNlIGNsYXNzIGlzIG5vdCBzcGVjaWFsIGluIGFueSB3YXksIGFuZCBpcyBkZWZpbmVkIG9ubHkgYXMgYVxuICogY29udmVuaWVudCBzaG9ydGhhbmQgZm9yIGFwcGx5aW5nIHRoZSBtaXhpbnMgbGlzdGVkIGFib3ZlLiBZb3UgY2FuIHVzZSB0aGlzXG4gKiBjbGFzcyBhcyBhIGJhc2UgY2xhc3MgZm9yIHlvdXIgb3duIGVsZW1lbnRzLCBvciBlYXNpbHkgY3JlYXRlIHlvdXIgb3duIGJhc2VcbiAqIGNsYXNzIGJ5IGFwcGx5aW5nIHRoZSBzYW1lIHNldCBvZiBtaXhpbnMuXG4gKlxuICogQGNsYXNzIEVsZW1lbnRCYXNlXG4gKi9cblxuXG5pbXBvcnQgQ29tcG9zYWJsZSBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Db21wb3NhYmxlJztcbmltcG9ydCBUZW1wbGF0ZVN0YW1waW5nIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1RlbXBsYXRlU3RhbXBpbmcnO1xuaW1wb3J0IEF1dG9tYXRpY05vZGVGaW5kaW5nIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0F1dG9tYXRpY05vZGVGaW5kaW5nJztcbmltcG9ydCBBdHRyaWJ1dGVNYXJzaGFsbGluZyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9BdHRyaWJ1dGVNYXJzaGFsbGluZyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWxlbWVudEJhc2UgZXh0ZW5kcyBDb21wb3NhYmxlKEhUTUxFbGVtZW50KS5jb21wb3NlKFxuICBUZW1wbGF0ZVN0YW1waW5nLCAgICAgLy8gYmVmb3JlIG5vZGUgZmluZGluZywgc28gc2hhZG93IHJvb3QgaXMgcG9wdWxhdGVkXG4gIEF1dG9tYXRpY05vZGVGaW5kaW5nLCAvLyBiZWZvcmUgbWFyc2hhbGxpbmcsIHNvIG1hcnNoYWxsZWQgcHJvcGVydGllcyBjYW4gdXNlIGl0XG4gIEF0dHJpYnV0ZU1hcnNoYWxsaW5nXG4pIHtcblxuICAvKlxuICAgKiBEZWJ1Z2dpbmcgdXRpbGl0eTogbG9ncyBhIG1lc3NhZ2UsIHByZWZpeGVkIGJ5IHRoZSBjb21wb25lbnQncyB0YWcuXG4gICAqL1xuICBsb2codGV4dCkge1xuICAgIGlmIChzdXBlci5sb2cpIHsgc3VwZXIubG9nKHRleHQpOyB9XG4gICAgY29uc29sZS5sb2coYCR7dGhpcy5sb2NhbE5hbWV9OiAke3RleHR9YCk7XG4gIH1cblxufVxuIiwiLyoqXG4gKiBQcmVzZW50cyBsaXN0IGl0ZW1zIGluIGEgdmlld3BvcnQgc3VjaCB0aGF0IG9ubHkgYSBzaW5nbGUgaXRlbSBpcyB2aXNpYmxlIGF0IGFcbiAqIHRpbWUuIE5hdmlnYXRpbmcgYmV0d2VlbiBpdGVtcyB3aWxsIGJlIHJlcHJlc2VudGVkIHdpdGggYSBob3Jpem9udGFsIHZpc3VhbFxuICogc2xpZGluZyBlZmZlY3QuXG4gKlxuICogVGhpcyBjb21wb25lbnQgY3VycmVudGx5IHJlcXVpcmVzIHRoYXQgeW91IGV4cGxpY2l0bHkgYXBwbHkgYSBzaXplIHRvIGl0LiBGb3IgYVxuICogdmFyaWFudCB3aGljaCBhdXRvbWF0aWNhbGx5IHNpemVzIHRvIGl0cyBjb250ZW50LCBzZWUgdGhlIHJlbGF0ZWQgY29tcG9uZW50XG4gKiBiYXNpYy1zbGlkaW5nLXZpZXdwb3J0LWZpdC5cbiAqXG4gKiBAY2xhc3MgYmFzaWMtc2xpZGluZy12aWV3cG9ydFxuICovXG5cblxuaW1wb3J0IEVsZW1lbnRCYXNlIGZyb20gJy4uLy4uL2Jhc2ljLWVsZW1lbnQtYmFzZS9zcmMvRWxlbWVudEJhc2UnO1xuaW1wb3J0IFNwcmVhZEl0ZW1zIGZyb20gJy4uLy4uL2Jhc2ljLXNwcmVhZC1pdGVtcy9zcmMvU3ByZWFkSXRlbXMnOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcblxubGV0IGJhc2UgPSBFbGVtZW50QmFzZTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xpZGluZ1ZpZXdwb3J0IGV4dGVuZHMgYmFzZSB7XG5cbiAgYXR0YWNoZWRDYWxsYmFjaygpIHtcbiAgICBpZiAoc3VwZXIuYXR0YWNoZWRDYWxsYmFjaykgeyBzdXBlci5hdHRhY2hlZENhbGxiYWNrKCk7IH1cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ3Nob3dUcmFuc2l0aW9uJyk7XG4gICAgdGhpcy5wb3NpdGlvbiA9IDA7XG4gIH1cblxuICBnZXQgY29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy4kLnNsaWRpbmdDb250YWluZXIuY29udGVudDtcbiAgfVxuXG4gIGdldCBpdGVtcygpIHtcbiAgICByZXR1cm4gdGhpcy4kLnNsaWRpbmdDb250YWluZXIuaXRlbXM7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHN1cGVyLnJlbmRlcikgeyBzdXBlci5yZW5kZXIoKTsgfVxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXJTZWxlY3Rpb24uYmluZCh0aGlzKSk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGZyYWN0aW9uYWwgcG9zaXRpb24gb2YgdGhlIGVsZW1lbnQncyBtb3Zpbmcgc3VyZmFjZSB3aGlsZSBpdCBpcyBiZWluZ1xuICAgKiBtb3ZlZCAoZHJhZ2dlZC9zY3JvbGxlZC9ldGMuKS5cbiAgICpcbiAgICogVGhpcyBpcyBleHByZXNzZWQgYXMgYSBmcmFjdGlvbiBvZiB0aGUgZWxlbWVudCdzIHdpZHRoLiBJZiB0aGUgdmFsdWUgaXNcbiAgICogcG9zaXRpdmUsIHRoZSBzdXJmYWNlIGlzIGJlaW5nIG1vdmVkIHRvIHRoZSBsZWZ0OyBpZiBuZWdhdGl2ZSwgdGhlIHN1cmZhY2VcbiAgICogaXMgYmVpbmcgbW92ZWQgdG8gdGhlIHJpZ2h0LiBFLmcuLCBhIHZhbHVlIG9mIDAuNSBpbmRpY2F0ZXMgdGhlIHN1cmZhY2UgaGFzXG4gICAqIG1vdmVkIGhhbGYgdGhlIGVsZW1lbnQncyB3aWR0aCB0byB0aGUgbGVmdC5cbiAgICpcbiAgICogQHByb3BlcnR5IHBvc2l0aW9uXG4gICAqIEB0eXBlIE51bWJlclxuICAgKi9cbiAgZ2V0IHBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9wb3NpdGlvbjtcbiAgfVxuICBzZXQgcG9zaXRpb24ocG9zaXRpb24pIHtcbiAgICBpZiAoJ3Bvc2l0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5wb3NpdGlvbiA9IHBvc2l0aW9uOyB9XG4gICAgdGhpcy5fcG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgZ2V0IHNlbGVjdGVkSW5kZXgoKSB7XG4gICAgbGV0IGl0ZW1zID0gdGhpcy5pdGVtcztcbiAgICBsZXQgaW5kZXggPSBpdGVtcyAmJiBpdGVtcy5pbmRleE9mKHRoaXMuc2VsZWN0ZWRJdGVtKTtcbiAgICByZXR1cm4gaW5kZXggfHwgLTE7XG4gIH1cbiAgc2V0IHNlbGVjdGVkSW5kZXgoaW5kZXgpIHtcbiAgICBpZiAoJ3NlbGVjdGVkSW5kZXgnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkSW5kZXggPSBpbmRleDsgfVxuICAgIGxldCBpdGVtID0gdGhpcy5pdGVtcyAmJiB0aGlzLml0ZW1zW2luZGV4XTtcbiAgICBpZiAoaXRlbSkge1xuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xuICAgIH1cbiAgfVxuXG4gIGdldCBzZWxlY3RlZEl0ZW0oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSXRlbTtcbiAgfVxuICBzZXQgc2VsZWN0ZWRJdGVtKGl0ZW0pIHtcbiAgICBpZiAoJ3NlbGVjdGVkSXRlbScgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJdGVtID0gaXRlbTsgfVxuICAgIHRoaXMuX3NlbGVjdGVkSXRlbSA9IGl0ZW07XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHNob3dUcmFuc2l0aW9uKHNob3cpIHtcbiAgICBpZiAoc3VwZXIuc2hvd1RyYW5zaXRpb24pIHsgc3VwZXIuc2hvd1RyYW5zaXRpb24oc2hvdyk7IH1cbiAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3dUcmFuc2l0aW9uJywgc2hvdyk7XG4gIH1cblxuICBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgI3NsaWRpbmdDb250YWluZXIge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgLypcbiAgICAgICAgIFNldCB3aWR0aCBmb3IgSUUvRWRnZS4gSXQncyBub3QgY2xlYXIgd2h5IHRoZXkgbmVlZCB0aGlzLCBhbmQgdGhlIG90aGVyXG4gICAgICAgICBicm93c2VycyBkb24ndC5cbiAgICAgICAgICovXG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCguc2hvd1RyYW5zaXRpb24pICNzbGlkaW5nQ29udGFpbmVyIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjJzIGVhc2Utb3V0O1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLW91dDtcbiAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxiYXNpYy1zcHJlYWQtaXRlbXMgaWQ9XCJzbGlkaW5nQ29udGFpbmVyXCI+XG4gICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgIDwvYmFzaWMtc3ByZWFkLWl0ZW1zPlxuICAgIGA7XG4gIH1cblxufVxuXG5cbmZ1bmN0aW9uIHJlbmRlclNlbGVjdGlvbigpIHtcblxuICBsZXQgY291bnQgPSB0aGlzLml0ZW1zICYmIHRoaXMuaXRlbXMubGVuZ3RoO1xuICBpZiAoIWNvdW50KSB7XG4gICAgLy8gTnVsbCBvciB6ZXJvIG1lYW5zIHdlIGRvbid0IGhhdmUgaXRlbXMgdG8gcmVuZGVyIHlldC5cbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgaW5kZXggPSB0aGlzLnNlbGVjdGVkSW5kZXg7XG4gIGlmIChpbmRleCA8IDApIHtcbiAgICAvLyBObyBzZWxlY3Rpb25cbiAgICAvLyByZXR1cm47XG4gICAgaW5kZXggPSAwO1xuICB9XG5cbiAgbGV0IHBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbiB8fCAwO1xuICBsZXQgZGFtcGVuZWRQb3NpdGlvbjtcbiAgaWYgKGluZGV4ID09PSAwICYmIHBvc2l0aW9uIDwgMCkge1xuICAgIC8vIEFwcGx5IHRlbnNpb24gZnJvbSB0aGUgbGVmdCBlZGdlLlxuICAgIGRhbXBlbmVkUG9zaXRpb24gPSAtZGFtcGluZygtcG9zaXRpb24pO1xuICB9IGVsc2UgaWYgKGluZGV4ID09PSBjb3VudCAtIDEgJiYgcG9zaXRpb24gPiAwKSB7XG4gICAgLy8gQXBwbHkgdGVuc2lvbiBmcm9tIHRoZSByaWdodCBlZGdlLlxuICAgIGRhbXBlbmVkUG9zaXRpb24gPSBkYW1waW5nKHBvc2l0aW9uKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBObyBkYW1waW5nIHJlcXVpcmVkLlxuICAgIGRhbXBlbmVkUG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgfVxuICBsZXQgZnJhY3Rpb25hbEluZGV4ID0gaW5kZXggKyBkYW1wZW5lZFBvc2l0aW9uO1xuICAvLyBVc2UgYSBwZXJjZW50YWdlIHNvIHRoZSB0cmFuc2Zvcm0gd2lsbCBzdGlsbCB3b3JrIGlmIHNjcmVlbiBzaXplIGNoYW5nZXNcbiAgLy8gKGUuZy4sIGlmIGRldmljZSBvcmllbnRhdGlvbiBjaGFuZ2VzKS5cbiAgbGV0IGxlZnQgPSAtZnJhY3Rpb25hbEluZGV4ICogMTAwO1xuICAvLyBsZXQgbGVmdCA9IC0oZnJhY3Rpb25hbEluZGV4IC8gY291bnQpICogMTAwO1xuICBsZXQgdHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoJyArIGxlZnQgKyAnJSknO1xuICB0aGlzLiQuc2xpZGluZ0NvbnRhaW5lci5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gIHRoaXMuJC5zbGlkaW5nQ29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbn1cblxuXG4vKlxuICogQ2FsY3VsYXRlIGRhbXBpbmcgYXMgYSBmdW5jdGlvbiBvZiB0aGUgZGlzdGFuY2UgcGFzdCB0aGUgbWluaW11bS9tYXhpbXVtXG4gKiB2YWx1ZXMuXG4gKlxuICogV2Ugd2FudCB0byBhc3ltcHRvdGljYWxseSBhcHByb2FjaCBhbiBhYnNvbHV0ZSBtaW5pbXVtIG9mIDEgdW5pdFxuICogYmVsb3cvYWJvdmUgdGhlIGFjdHVhbCBtaW5pbXVtL21heGltdW0uIFRoaXMgcmVxdWlyZXMgY2FsY3VsYXRpbmcgYVxuICogaHlwZXJib2xpYyBmdW5jdGlvbi5cbiAqXG4gKiBTZWUgaHR0cDovL3d3dy53b2xmcmFtYWxwaGEuY29tL2lucHV0Lz9pPXkrJTNEKy0xJTJGJTI4eCUyQjElMjkrJTJCKzFcbiAqIGZvciB0aGUgb25lIHdlIHVzZS4gVGhlIG9ubHkgcG9ydGlvbiBvZiB0aGF0IGZ1bmN0aW9uIHdlIGNhcmUgYWJvdXQgaXMgd2hlblxuICogeCBpcyB6ZXJvIG9yIGdyZWF0ZXIuIEFuIGltcG9ydGFudCBjb25zaWRlcmF0aW9uIGlzIHRoYXQgdGhlIGN1cnZlIGJlXG4gKiB0YW5nZW50IHRvIHRoZSBkaWFnb25hbCBsaW5lIHg9eSBhdCAoMCwgMCkuIFRoaXMgZW5zdXJlcyBzbW9vdGggY29udGludWl0eVxuICogd2l0aCB0aGUgbm9ybWFsIGRyYWcgYmVoYXZpb3IsIGluIHdoaWNoIHRoZSB2aXNpYmxlIHNsaWRpbmcgaXMgbGluZWFyIHdpdGhcbiAqIHRoZSBkaXN0YW5jZSB0aGUgdG91Y2hwb2ludCBoYXMgYmVlbiBkcmFnZ2VkLlxuICovXG5mdW5jdGlvbiBkYW1waW5nKHgpIHtcbiAgbGV0IHkgPSAoLTEgLyAoeCArIDEpKSArIDE7XG4gIHJldHVybiB5O1xufVxuXG5cbmRvY3VtZW50LnJlZ2lzdGVyRWxlbWVudCgnYmFzaWMtc2xpZGluZy12aWV3cG9ydCcsIFNsaWRpbmdWaWV3cG9ydCk7XG4iLCIvKipcbiAqIFNwcmVhZHMgb3V0IGEgc2V0IG9mIGl0ZW1zIGhvcml6b250YWxseSBzbyB0aGV5IHRha2UgZXF1YWwgc3BhY2UuXG4gKlxuICogVGhpcyBjb21wb25lbnQgY3VycmVudGx5IHJlcXVpcmVzIGFuIGV4cGxpY2l0IHNpemUgYnkgYXBwbGllZCB0byBpdC4gRm9yIGFcbiAqIHZhcmlhbnQgdGhhdCBhdXRvbWF0aWNhbGx5IHNpemVzIHRvIGZpdCB0aGUgbGlzdCBpdGVtcywgc2VlIHRoZSByZWxhdGVkXG4gKiBjb21wb25lbnQgYmFzaWMtc3ByZWFkLWZpdC5cbiAqXG4gKiBAY2xhc3MgYmFzaWMtc3ByZWFkLWl0ZW1zXG4gKi9cblxuaW1wb3J0IEVsZW1lbnRCYXNlIGZyb20gJy4uLy4uL2Jhc2ljLWVsZW1lbnQtYmFzZS9zcmMvRWxlbWVudEJhc2UnO1xuaW1wb3J0IENoaWxkcmVuQ29udGVudCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9DaGlsZHJlbkNvbnRlbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcHJlYWRJdGVtcyBleHRlbmRzIEVsZW1lbnRCYXNlLmNvbXBvc2UoQ2hpbGRyZW5Db250ZW50KSB7XG5cbiAgYXR0YWNoZWRDYWxsYmFjaygpIHtcbiAgICBpZiAoc3VwZXIuYXR0YWNoZWRDYWxsYmFjaykgeyBzdXBlci5hdHRhY2hlZENhbGxiYWNrKCk7IH1cbiAgICAvLyBIQUNLXG4gICAgdGhpcy5pdGVtc0NoYW5nZWQoKTtcbiAgfVxuXG4gIGdldCBpdGVtcygpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG5cbiAgaXRlbXNDaGFuZ2VkKCkge1xuICAgIGlmIChzdXBlci5pdGVtc0NoYW5nZWQpIHsgc3VwZXIuaXRlbXNDaGFuZ2VkKCk7IH1cbiAgICBsZXQgaXRlbXMgPSB0aGlzLml0ZW1zO1xuICAgIGxldCBjb3VudCA9IGl0ZW1zLmxlbmd0aDtcbiAgICB0aGlzLiQuc3ByZWFkQ29udGFpbmVyLnN0eWxlLndpZHRoID0gKGNvdW50ICogMTAwKSArICclJztcbiAgICBsZXQgaXRlbVdpZHRoID0gKDEwMCAvIGNvdW50KSArIFwiJVwiO1xuICAgIFtdLmZvckVhY2guY2FsbChpdGVtcywgaXRlbSA9PiB7XG4gICAgICBpdGVtLnN0eWxlLndpZHRoID0gaXRlbVdpZHRoO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBgXG4gICAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuXG4gICAgICAjc3ByZWFkQ29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgI3NwcmVhZENvbnRhaW5lciA6OmNvbnRlbnQgPiAqIHtcbiAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgICAgb2JqZWN0LWZpdDogdmFyKC0tYmFzaWMtaXRlbS1vYmplY3QtZml0LCBjb250YWluKTtcbiAgICAgICAgdG91Y2gtYWN0aW9uOiBub25lO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgaWQ9XCJzcHJlYWRDb250YWluZXJcIj5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG59XG5cblxuZG9jdW1lbnQucmVnaXN0ZXJFbGVtZW50KCdiYXNpYy1zcHJlYWQtaXRlbXMnLCBTcHJlYWRJdGVtcyk7XG4iXX0=
