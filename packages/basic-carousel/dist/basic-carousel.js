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
 * @mixes DistributedChildrenAsContent
 * @mixes TargetInCollective
 * @mixes ContentAsItems
 * @mixes DirectionSelection
 * @mixes Generic
 * @mixes ItemsSelection
 * @mixes SelectionAriaActive
 * @mixes Keyboard
 * @mixes KeyboardDirection
 * @mixes SwipeDirection
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

document.registerElement('basic-carousel', Carousel);
exports.default = Carousel;

},{"../../basic-component-mixins/src/ContentAsItems":5,"../../basic-component-mixins/src/DirectionSelection":6,"../../basic-component-mixins/src/DistributedChildrenAsContent":8,"../../basic-component-mixins/src/Generic":9,"../../basic-component-mixins/src/ItemsSelection":10,"../../basic-component-mixins/src/Keyboard":11,"../../basic-component-mixins/src/KeyboardDirection":12,"../../basic-component-mixins/src/ObserveContentChanges":13,"../../basic-component-mixins/src/SelectionAriaActive":14,"../../basic-component-mixins/src/SwipeDirection":17,"../../basic-component-mixins/src/TargetInCollective":18,"../../basic-component-mixins/src/TrackpadDirection":19,"../../basic-element-base/src/ElementBase":21,"../../basic-sliding-viewport/src/SlidingViewport":22}],2:[function(require,module,exports){
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
        [].forEach.call(this.attributes, function (attribute) {
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
 * The Keyboard mixin they use is sensitive to the presence of
 * the collective. Among other things, it will ensure that only the outermost
 * element above — the basic-arrow-selection — will be a tab stop that can
 * receive the keyboard focus. This lets the user perceive the component
 * arrangement above as a single unit. The Keyboard mixin will also give each
 * element in the collective a chance to process any keyboard events. So, even
 * though the basic-arrow-selection element will have the focus, the standard
 * keyboard navigation provided by basic-carousel will continue to work.
 *
 * The SelectionAriaActive component also respects collectives when using the
 * `aria-activedescendant` and `role` attributes. Those will be applied to the
 * outermost element (basic-arrow-selection, above) so that ARIA can correctly
 * understand the arrangement of the elements.
 *
 * You can put elements into collectives yourself, or you can use the
 * TargetInCollective mixin.
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
   * `DistributedChildrenAsContent` mixin.
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
        // Would like to use classList.toggle() here, but IE 11 doesn't have it.
        if (selected) {
          item.classList.add('selected');
        } else {
          item.classList.remove('selected');
        }
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
       * Return the positional index for the indicated item.
       *
       * Because this acts like a getter, this does not invoke a base implementation.
       *
       * @param {HTMLElement} item The item whose index is requested.
       * @returns {number} The index of the item, or -1 if not found.
       */

    }, {
      key: 'indexOfItem',
      value: function indexOfItem(item) {
        return this.items.indexOf(item);
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
 * @event items-changed
 */

},{}],6:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
   * This mixin can be used in conjunction with the KeyboardDirection mixin
   * (which maps keyboard events to directions) and a mixin that handles
   * selection like ItemsSelection.
   */

  var DirectionSelection = function (_base) {
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
   * This mixin is intended for use with the DistributedChildren mixin. See that
   * mixin for a discussion of how that works. This DistributedChildrenAsContent
   * mixin provides an easy way of defining the "content" of a component as the
   * component's distributed children. That in turn lets mixins like
   * ContentAsItems manipulate the children as list items.
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Exported function extends a base class with ItemsSelection. */

exports.default = function (base) {

  /**
   * Mixin which manages single-selection semantics for items in a list.
   *
   * This mixin expects a component to provide an `items` array of all elements
   * in the list. A standard way to do that with is the ContentAsItems mixin,
   * which takes a component's content (typically its distributed children) as
   * the set of list items; see that mixin for details.
   *
   * This mixin tracks a single selected item in the list, and provides means to
   * get and set that state by item position (`selectedIndex`) or item identity
   * (`selectedItem`). The selection can be moved in the list via the methods
   * `selectFirst`, `selectLast`, `selectNext`, and `selectPrevious`.
   *
   * This mixin does not produce any user-visible effects to represent
   * selection. Other mixins, such as SelectionAriaActive, SelectionHighlight
   * and SelectionInView, modify the selected item in common ways to let the
   * user know a given item is selected or not selected.
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
       * Setting the index to -1 deselects any current-selected item.
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
       * Fires when the selectedItem property changes.
       *
       * @event selected-item-changed
       * @param {HTMLElement} detail.selectedItem The new selected item.
       * @param {HTMLElement} detail.previousItem The previously selected item.
       */

      /**
       * Fires when the selectedIndex property changes.
       *
       * @event selected-item-changed
       * @param {number} detail.selectedIndex The new selected index.
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

  return ItemsSelection;
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

},{}],11:[function(require,module,exports){
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
   * Finally, this mixin is designed to work with the optional Collective class
   * via a mixin like TargetInCollective. This allows a set of related component
   * instances to cooperatively handle the keyboard. See the Collective class
   * for details.
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
"use strict";

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
   * pressed. You can use the Keyboard mixin for that purpose, or wire up your
   * own keyboard handling and call `keydown` yourself.
   *
   * This mixin calls methods such as `goLeft` and `goRight`. You can define
   * what that means by implementing those methods yourself. If you want to use
   * direction keys to navigate a selection, use this mixin with the
   * DirectionSelection mixin.
   */

  var KeyboardDirection = function (_base) {
    _inherits(KeyboardDirection, _base);

    function KeyboardDirection() {
      _classCallCheck(this, KeyboardDirection);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(KeyboardDirection).apply(this, arguments));
    }

    _createClass(KeyboardDirection, [{
      key: "goDown",

      /**
       * Invoked when the user wants to go/navigate down.
       * The default implementation of this method does nothing.
       */
      value: function goDown() {
        if (_get(Object.getPrototypeOf(KeyboardDirection.prototype), "goDown", this)) {
          return _get(Object.getPrototypeOf(KeyboardDirection.prototype), "goDown", this).call(this);
        }
      }

      /**
       * Invoked when the user wants to go/navigate to the end (e.g., of a list).
       * The default implementation of this method does nothing.
       */

    }, {
      key: "goEnd",
      value: function goEnd() {
        if (_get(Object.getPrototypeOf(KeyboardDirection.prototype), "goEnd", this)) {
          return _get(Object.getPrototypeOf(KeyboardDirection.prototype), "goEnd", this).call(this);
        }
      }

      /**
       * Invoked when the user wants to go/navigate left.
       * The default implementation of this method does nothing.
       */

    }, {
      key: "goLeft",
      value: function goLeft() {
        if (_get(Object.getPrototypeOf(KeyboardDirection.prototype), "goLeft", this)) {
          return _get(Object.getPrototypeOf(KeyboardDirection.prototype), "goLeft", this).call(this);
        }
      }

      /**
       * Invoked when the user wants to go/navigate right.
       * The default implementation of this method does nothing.
       */

    }, {
      key: "goRight",
      value: function goRight() {
        if (_get(Object.getPrototypeOf(KeyboardDirection.prototype), "goRight", this)) {
          return _get(Object.getPrototypeOf(KeyboardDirection.prototype), "goRight", this).call(this);
        }
      }

      /**
       * Invoked when the user wants to go/navigate to the start (e.g., of a
       * list). The default implementation of this method does nothing.
       */

    }, {
      key: "goStart",
      value: function goStart() {
        if (_get(Object.getPrototypeOf(KeyboardDirection.prototype), "goStart", this)) {
          return _get(Object.getPrototypeOf(KeyboardDirection.prototype), "goStart", this).call(this);
        }
      }

      /**
       * Invoked when the user wants to go/navigate up.
       * The default implementation of this method does nothing.
       */

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

},{"./microtask":20}],14:[function(require,module,exports){
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
   * yourself, or do so via the ItemsSelection mixin.
   *
   * NOTE: For the time being, this mixin should be used with the
   * TargetInCollective mixin. The intention is to eventually allow this mixin
   * to be used without requiring collective keyboard support, so that this
   * mixin can be used on its own.
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
        var itemId = item.getAttribute('id');
        if (itemId) {
          this.collective.outermostElement.setAttribute('aria-activedescendant', itemId);
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
            element.removeAttribute('role');
          }
        });
      }
    }, {
      key: 'createdCallback',
      value: function createdCallback() {
        if (_get(Object.getPrototypeOf(SelectionAriaActive.prototype), 'createdCallback', this)) {
          _get(Object.getPrototypeOf(SelectionAriaActive.prototype), 'createdCallback', this).call(this);
        }

        // Determine a base item ID based on this component's host's own ID. This
        // will be combined with a unique integer to assign IDs to items that
        // don't have an explicit ID. If the basic-list-box has ID "foo", then its
        // items will have IDs that look like "_fooOption1". If the list has no ID
        // itself, its items will get IDs that look like "_option1". Item IDs are
        // prefixed with an underscore to differentiate them from
        // manually-assigned IDs, and to minimize the potential for ID conflicts.
        var elementId = this.getAttribute("id");
        this.itemBaseId = elementId ? "_" + elementId + "Option" : "_option";
      }
    }, {
      key: 'itemAdded',
      value: function itemAdded(item) {
        if (_get(Object.getPrototypeOf(SelectionAriaActive.prototype), 'itemAdded', this)) {
          _get(Object.getPrototypeOf(SelectionAriaActive.prototype), 'itemAdded', this).call(this, item);
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
        return _get(Object.getPrototypeOf(SelectionAriaActive.prototype), 'selectedItem', this);
      },
      set: function set(item) {
        if ('selectedItem' in base.prototype) {
          _set(Object.getPrototypeOf(SelectionAriaActive.prototype), 'selectedItem', item, this);
        }
        // Catch the case where the selection is removed.
        if (item == null && this.collective) {
          this.collective.outermostElement.removeAttribute('aria-activedescendant');
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
   * create that tree yourself, or make use of the ShadowTemplate mixin.
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
   * map the direction to a change in selection, use the DirectionSelection mixin.
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

        this.position = 0;

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
       * The distance the user has moved the first touchpoint since the beginning
       * of a drag, expressed as a fraction of the element's width.
       *
       * @type number
       */

    }, {
      key: 'showTransition',

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
    // console.log("flick right " + element._deltaX);
    element.goLeft();
  } else if (element._deltaX <= -20) {
    // Finished going left at high speed.
    // console.log("flick left " + element._deltaX);
    element.goRight();
  } else {
    // Finished at low speed.
    // console.log("slow drag " + element._deltaX);
    trackTo(element, clientX);
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
   * participate in collective keyboard handling. See the Collective class for
   * details.
   *
   * You can use this mixin in conjunction with ContentFirstChildTarget to
   * automatically have the component's collective extended to its first child.
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
   * You can use this mixin with a mixin like DirectionSelection to let the user
   * change the selection with the trackpad or mouse wheel.
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

      /**
       * The distance the user has moved the first touchpoint since the beginning
       * of a trackpad/wheel operation, expressed as a fraction of the element's
       * width.
       *
       * @type number
       */

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

  return TrackpadDirection;
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

},{"../../basic-component-mixins/src/AttributeMarshalling":2,"../../basic-component-mixins/src/Composable":4,"../../basic-component-mixins/src/DistributedChildren":7,"../../basic-component-mixins/src/ShadowElementReferences":15,"../../basic-component-mixins/src/ShadowTemplate":16}],22:[function(require,module,exports){
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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// jshint ignore:line

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
     * @type {number}
     */

  }, {
    key: 'showTransition',
    value: function showTransition(show) {
      if (_get(Object.getPrototypeOf(SlidingViewport.prototype), 'showTransition', this)) {
        _get(Object.getPrototypeOf(SlidingViewport.prototype), 'showTransition', this).call(this, show);
      }
      // Would like to use classList.toggle() here, but IE 11 doesn't have it.
      if (show) {
        this.classList.add('showTransition');
      } else {
        this.classList.remove('showTransition');
      }
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
exports.default = SlidingViewport;

},{"../../basic-element-base/src/ElementBase":21,"../../basic-spread-items/src/SpreadItems":23}],23:[function(require,module,exports){
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

document.registerElement('basic-spread-items', SpreadItems);
exports.default = SpreadItems;

},{"../../basic-component-mixins/src/DistributedChildrenAsContent":8,"../../basic-component-mixins/src/ObserveContentChanges":13,"../../basic-element-base/src/ElementBase":21}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwYWNrYWdlc1xcYmFzaWMtY2Fyb3VzZWxcXHNyY1xcQ2Fyb3VzZWwuanMiLCJwYWNrYWdlc1xcYmFzaWMtY29tcG9uZW50LW1peGluc1xcc3JjXFxBdHRyaWJ1dGVNYXJzaGFsbGluZy5qcyIsInBhY2thZ2VzXFxiYXNpYy1jb21wb25lbnQtbWl4aW5zXFxzcmNcXENvbGxlY3RpdmUuanMiLCJwYWNrYWdlc1xcYmFzaWMtY29tcG9uZW50LW1peGluc1xcc3JjXFxDb21wb3NhYmxlLmpzIiwicGFja2FnZXNcXGJhc2ljLWNvbXBvbmVudC1taXhpbnNcXHNyY1xcQ29udGVudEFzSXRlbXMuanMiLCJwYWNrYWdlc1xcYmFzaWMtY29tcG9uZW50LW1peGluc1xcc3JjXFxEaXJlY3Rpb25TZWxlY3Rpb24uanMiLCJwYWNrYWdlc1xcYmFzaWMtY29tcG9uZW50LW1peGluc1xcc3JjXFxEaXN0cmlidXRlZENoaWxkcmVuLmpzIiwicGFja2FnZXNcXGJhc2ljLWNvbXBvbmVudC1taXhpbnNcXHNyY1xcRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudC5qcyIsInBhY2thZ2VzXFxiYXNpYy1jb21wb25lbnQtbWl4aW5zXFxzcmNcXEdlbmVyaWMuanMiLCJwYWNrYWdlc1xcYmFzaWMtY29tcG9uZW50LW1peGluc1xcc3JjXFxJdGVtc1NlbGVjdGlvbi5qcyIsInBhY2thZ2VzXFxiYXNpYy1jb21wb25lbnQtbWl4aW5zXFxzcmNcXEtleWJvYXJkLmpzIiwicGFja2FnZXNcXGJhc2ljLWNvbXBvbmVudC1taXhpbnNcXHNyY1xcS2V5Ym9hcmREaXJlY3Rpb24uanMiLCJwYWNrYWdlc1xcYmFzaWMtY29tcG9uZW50LW1peGluc1xcc3JjXFxPYnNlcnZlQ29udGVudENoYW5nZXMuanMiLCJwYWNrYWdlc1xcYmFzaWMtY29tcG9uZW50LW1peGluc1xcc3JjXFxTZWxlY3Rpb25BcmlhQWN0aXZlLmpzIiwicGFja2FnZXNcXGJhc2ljLWNvbXBvbmVudC1taXhpbnNcXHNyY1xcU2hhZG93RWxlbWVudFJlZmVyZW5jZXMuanMiLCJwYWNrYWdlc1xcYmFzaWMtY29tcG9uZW50LW1peGluc1xcc3JjXFxTaGFkb3dUZW1wbGF0ZS5qcyIsInBhY2thZ2VzXFxiYXNpYy1jb21wb25lbnQtbWl4aW5zXFxzcmNcXFN3aXBlRGlyZWN0aW9uLmpzIiwicGFja2FnZXNcXGJhc2ljLWNvbXBvbmVudC1taXhpbnNcXHNyY1xcVGFyZ2V0SW5Db2xsZWN0aXZlLmpzIiwicGFja2FnZXNcXGJhc2ljLWNvbXBvbmVudC1taXhpbnNcXHNyY1xcVHJhY2twYWREaXJlY3Rpb24uanMiLCJwYWNrYWdlc1xcYmFzaWMtY29tcG9uZW50LW1peGluc1xcc3JjXFxtaWNyb3Rhc2suanMiLCJwYWNrYWdlc1xcYmFzaWMtZWxlbWVudC1iYXNlXFxzcmNcXEVsZW1lbnRCYXNlLmpzIiwicGFja2FnZXNcXGJhc2ljLXNsaWRpbmctdmlld3BvcnRcXHNyY1xcU2xpZGluZ1ZpZXdwb3J0LmpzIiwicGFja2FnZXNcXGJhc2ljLXNwcmVhZC1pdGVtc1xcc3JjXFxTcHJlYWRJdGVtcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNlQSxJQUFJLElBQUksR0FBRyxzQkFBWSxPQUFPLG1WQWE3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQztJQTRHSSxRQUFRO1lBQVIsUUFBUTs7V0FBUixRQUFROzBCQUFSLFFBQVE7O2tFQUFSLFFBQVE7OztlQUFSLFFBQVE7O3VDQUVPO0FBQ2pCLHFDQUhFLFFBQVEsd0NBR2tCO0FBQUUsbUNBSDVCLFFBQVEsa0RB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QUksS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7QUFDekIsVUFBSSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxBQUFDLEtBQUssR0FBRyxHQUFHLEdBQUksR0FBRyxDQUFDO0FBQ3pELFVBQUksU0FBUyxHQUFHLEFBQUMsR0FBRyxHQUFHLEtBQUssR0FBSSxHQUFHLENBQUM7QUFDcEMsUUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFVBQUEsSUFBSSxFQUFJO0FBQzdCLFlBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztPQUM5QixDQUFDLENBQUM7S0FDSjs7O3dCQWZXO0FBQ1YsYUFBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0tBQ3JCOzs7d0JBZWM7QUFDYixnbUJBMkJFO0tBQ0g7OztTQXpERyxXQUFXO0VBQVMsc0JBQVksT0FBTyx5RUFHNUM7O0FBMkRELFFBQVEsQ0FBQyxlQUFlLENBQUMsb0JBQW9CLEVBQUUsV0FBVyxDQUFDLENBQUM7a0JBQzdDLFdBQVciLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IEVsZW1lbnRCYXNlIGZyb20gJy4uLy4uL2Jhc2ljLWVsZW1lbnQtYmFzZS9zcmMvRWxlbWVudEJhc2UnO1xyXG5pbXBvcnQgQ29udGVudEFzSXRlbXMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ29udGVudEFzSXRlbXMnO1xyXG5pbXBvcnQgRGlyZWN0aW9uU2VsZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0RpcmVjdGlvblNlbGVjdGlvbic7XHJcbmltcG9ydCBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50IGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQnO1xyXG5pbXBvcnQgR2VuZXJpYyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9HZW5lcmljJztcclxuaW1wb3J0IEl0ZW1zU2VsZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0l0ZW1zU2VsZWN0aW9uJztcclxuaW1wb3J0IEtleWJvYXJkIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0tleWJvYXJkJztcclxuaW1wb3J0IEtleWJvYXJkRGlyZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0tleWJvYXJkRGlyZWN0aW9uJztcclxuaW1wb3J0IE9ic2VydmVDb250ZW50Q2hhbmdlcyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9PYnNlcnZlQ29udGVudENoYW5nZXMnO1xyXG5pbXBvcnQgU2VsZWN0aW9uQXJpYUFjdGl2ZSBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TZWxlY3Rpb25BcmlhQWN0aXZlJztcclxuaW1wb3J0IFNsaWRpbmdWaWV3cG9ydCBmcm9tICcuLi8uLi9iYXNpYy1zbGlkaW5nLXZpZXdwb3J0L3NyYy9TbGlkaW5nVmlld3BvcnQnOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcclxuaW1wb3J0IFN3aXBlRGlyZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1N3aXBlRGlyZWN0aW9uJztcclxuaW1wb3J0IFRhcmdldEluQ29sbGVjdGl2ZSBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9UYXJnZXRJbkNvbGxlY3RpdmUnO1xyXG5pbXBvcnQgVHJhY2twYWREaXJlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvVHJhY2twYWREaXJlY3Rpb24nO1xyXG5cclxubGV0IGJhc2UgPSBFbGVtZW50QmFzZS5jb21wb3NlKFxyXG4gIENvbnRlbnRBc0l0ZW1zLFxyXG4gIERpcmVjdGlvblNlbGVjdGlvbixcclxuICBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50LFxyXG4gIEdlbmVyaWMsXHJcbiAgSXRlbXNTZWxlY3Rpb24sXHJcbiAgS2V5Ym9hcmQsXHJcbiAgS2V5Ym9hcmREaXJlY3Rpb24sXHJcbiAgT2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzLFxyXG4gIFNlbGVjdGlvbkFyaWFBY3RpdmUsXHJcbiAgU3dpcGVEaXJlY3Rpb24sXHJcbiAgVGFyZ2V0SW5Db2xsZWN0aXZlLFxyXG4gIFRyYWNrcGFkRGlyZWN0aW9uXHJcbik7XHJcblxyXG5cclxuLyoqXHJcbiAqIExldHMgdGhlIHVzZXIgbmF2aWdhdGUgbGF0ZXJhbGx5IHRocm91Z2ggYSBzZXF1ZW5jZSBvZiBjaGlsZCBlbGVtZW50cy5cclxuICpcclxuICogYmFzaWMtY2Fyb3VzZWwgaXMgYW4gaW1wbGVtZW50YXRpb24gb2YgdGhlIGNhcm91c2VsIHVzZXIgaW50ZXJmYWNlIHBhdHRlcm4sXHJcbiAqIGNvbW1vbmx5IHVzZWQgZm9yIG5hdmlnYXRpbmcgYmV0d2VlbiBpbWFnZXMsIHBhZ2VzLCBhbmQgb3RoZXIgZWxlbWVudHMuIFRoaXNcclxuICogcGF0dGVybiBwcmVzZW50cyB0aGUgdXNlciB3aXRoIGEgbGluZWFyIHNlcXVlbmNlIG9mIGVsZW1lbnRzLCBvbmx5IG9uZSBvZlxyXG4gKiB3aGljaCBpcyBzaG93biBhdCBhIHRpbWUuIFRoZSB1c2VyIGNhbiBuYXZpZ2F0ZSB0byB0aGUgbmV4dC9wcmV2aW91cyBlbGVtZW50XHJcbiAqIHdpdGggYSB2YXJpZXR5IG9mIGlucHV0IG1ldGhvZHMuXHJcbiAqXHJcbiAqIFtMaXZlIGRlbW9dKGh0dHA6Ly9iYXNpY3dlYmNvbXBvbmVudHMub3JnL2Jhc2ljLXdlYi1jb21wb25lbnRzL3BhY2thZ2VzL2Jhc2ljLWNhcm91c2VsLylcclxuICpcclxuICogWW91IGNhbiBhbHNvIHZpZXcgZGVtb3Mgd2l0aCBvcHRpb25hbFxyXG4gKiBbYXJyb3dzXShodHRwOi8vYmFzaWN3ZWJjb21wb25lbnRzLm9yZy9iYXNpYy13ZWItY29tcG9uZW50cy9wYWNrYWdlcy9iYXNpYy1jYXJvdXNlbC9jYXJvdXNlbFdpdGhBcnJvd3MuaHRtbCksXHJcbiAqIFtkb3RzXShodHRwOi8vYmFzaWN3ZWJjb21wb25lbnRzLm9yZy9iYXNpYy13ZWItY29tcG9uZW50cy9wYWNrYWdlcy9iYXNpYy1jYXJvdXNlbC9jYXJvdXNlbFdpdGhEb3RzLmh0bWwpLFxyXG4gKiBvciBib3RoIFthcnJvd3MgYW5kIGRvdHNdKGh0dHA6Ly9iYXNpY3dlYmNvbXBvbmVudHMub3JnL2Jhc2ljLXdlYi1jb21wb25lbnRzL3BhY2thZ2VzL2Jhc2ljLWNhcm91c2VsL2Nhcm91c2VsV2l0aEFycm93c0FuZERvdHMuaHRtbCkuXHJcbiAqXHJcbiAqIGJhc2ljLWNhcm91c2VsIHVzZXMgaXRzIGNoaWxkcmVuIGFzIHRoZSBlbGVtZW50cyB0aGUgdXNlciB3aWxsIG5hdmlnYXRlXHJcbiAqIHRocm91Z2guIEluIGEgdHlwaWNhbCB1c2UsIGEgYmFzaWMtY2Fyb3VzZWwgY2FuIGJlIHVzZWQgdG8gbmF2aWdhdGUgYmV0d2VlbiBhXHJcbiAqIHNlcXVlbmNlIG9mIGltYWdlczpcclxuICpcclxuICogICAgIDxiYXNpYy1jYXJvdXNlbD5cclxuICogICAgICAgPGltZyBzcmM9XCJpbWFnZTEuanBnXCI+XHJcbiAqICAgICAgIDxpbWcgc3JjPVwiaW1hZ2UyLmpwZ1wiPlxyXG4gKiAgICAgICA8aW1nIHNyYz1cImltYWdlMy5qcGdcIj5cclxuICogICAgIDwvYmFzaWMtY2Fyb3VzZWw+XHJcbiAqXHJcbiAqIFRoZSBjaGlsZCBlbGVtZW50cyBjYW4gYmUgb2YgYW55IHR5cGUg4oCUwqB0aGV5IGFyZSBub3QgcmVzdHJpY3RlZCB0byBpbWFnZXMuXHJcbiAqXHJcbiAqIFRoaXMgY29tcG9uZW50IGF0dGVtcHRzIHRvIG1lZXQgdGhlIFtHb2xkIFN0YW5kYXJkIGZvciB3ZWIgY29tcG9uZW50c11cclxuICogKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJjb21wb25lbnRzL2dvbGQtc3RhbmRhcmQvd2lraSkgc28gdGhhdCBpdCBpcyBnZW5lcmFsbHlcclxuICogYXMgZmxleGlibGUgYW5kIHJvYnVzdCBhcyBzdGFuZGFyZCBIVE1MIGVsZW1lbnRzLiBGb3IgZXhhbXBsZSwgaXQgbWVldHMgdGhlXHJcbiAqIFwiQ29udGVudCBDaGFuZ2VzXCIgY3JpdGVyaWE6IHRoZSBjYXJvdXNlbCB3aWxsIGFkYXB0IHRvIG5ldyBjaGlsZCBlbGVtZW50c1xyXG4gKiBhZGRlZCBvciByZW1vdmVkIGF0IHJ1bnRpbWUuXHJcbiAqXHJcbiAqIEN1cnJlbnRseSwgdGhpcyBjb21wb25lbnQgZG9lcyBub3QgbWVldCB0aGUgR29sZCBTdGFuZGFyZCBjcml0ZXJpYSBcIlNpemUgdG9cclxuICogQ29udGVudFwiLiBBcyBhIHJlc3VsdCwgZm9yIHRoZSB0aW1lIGJlaW5nLCAqKnlvdSBtdXN0IG1hbnVhbGx5IHNldCBhIHNpemUgb25cclxuICogdGhpcyBjb21wb25lbnQqKi4gVHdvIGFwcHJvYWNoZXMgYXJlIHRvOiAxKSBzdHJldGNoIHRoZSBjb21wb25lbnQgYWNyb3NzXHJcbiAqIHdoYXRldmVyIHN1cmZhY2UgaXQgaXMgY29udGFpbmVkIHdpdGhpbiwgb3IgMikgc2V0IGl0IHRvIGJlIGxhcmdlciB0aGFuIHRoZVxyXG4gKiBsYXJnZXN0IGNoaWxkIGVsZW1lbnQgeW91IHdhbnQgdG8gZGlzcGxheS4gVGhlIGZvcm1lciBhcHByb2FjaCBpcyBtb3JlXHJcbiAqIGNvbW1vbiwgYW5kIGNhbiBiZSBhY2hpZXZlZCB3aXRoIENTUyBzdHlsaW5nIHN1Y2ggYXM6XHJcbiAqXHJcbiAqICAgICBodG1sIHtcclxuICogICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gKiAgICAgfVxyXG4gKlxyXG4gKiAgICAgYm9keSB7XHJcbiAqICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICogICAgICAgZGlzcGxheTogZmxleDtcclxuICogICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gKiAgICAgICBtYXJnaW46IDA7XHJcbiAqICAgICB9XHJcbiAqXHJcbiAqICAgICBiYXNpYy1jYXJvdXNlbCB7XHJcbiAqICAgICAgIC13ZWJraXQtZmxleDogMTtcclxuICogICAgICAgZmxleDogMTtcclxuICogICAgIH1cclxuICpcclxuICogVGhlIHN0YW5kYXJkIGJhc2ljLWNhcm91c2VsIGNvbXBvbmVudCBzdXBwb3J0cyBuYXZpZ2F0aW9uIHZpYSB0aGUgZm9sbG93aW5nXHJcbiAqIGlucHV0IG1ldGhvZHM6XHJcbiAqXHJcbiAqICogS2V5Ym9hcmQuIFdoZW4gdGhlIGNhcm91c2VsIGhhcyBmb2N1cywgdGhlIHVzZXIgY2FuIHByZXNzIExlZnQsIFJpZ2h0LFxyXG4gKiAgIEhvbWUsIG9yIEVuZC4gVGhlc2UgbmF2aWdhdGUgdG8gdGhlIGV4cGVjdGVkIGVsZW1lbnQuXHJcbiAqICogVG91Y2guIE9uIG1vYmlsZSBhbmQgb3RoZXIgdG91Y2gtZW5hYmxlZCBkZXZpY2VzLCB0aGUgdXNlciBjYW4gZHJhZyBsZWZ0IG9yXHJcbiAqICAgcmlnaHQuXHJcbiAqICogVHJhY2twYWQuIFRoZSB1c2VyIGNhbiBzd2lwZSBsZWZ0IG9yIHJpZ2h0IG9uIGEgdHJhY2twYWQgdG8gbmF2aWdhdGUuXHJcbiAqXHJcbiAqIEJlY2F1c2UgY2Fyb3VzZWxzIGFyZSB1c2VkIGluIGEgd2lkZSB2YXJpZXR5IG9mIGNpcmN1bXN0YW5jZXMsIGJ5IGRlZmF1bHRcclxuICogYmFzaWMtY2Fyb3VzZWwgcHJvdmlkZXMgYSBtaW5pbWFsIGFwcGVhcmFuY2UgYW5kIG5vIHNlcGFyYXRlbHkgaW50ZXJhY3RpdmVcclxuICogZWxlbWVudHMgc3VjaCBhcyBhcnJvdyBidXR0b25zIG9uIHRoZSBzaWRlIG9yIGRvdHMgYWxvbmcgdGhlIGJvdHRvbS4gVGhvc2VcclxuICogZWxlbWVudHMgY2FuIGJlIGFkZGVkIGJ5IHdyYXBwaW5nIGEgYmFzaWMtY2Fyb3VzZWwgaW4gb3B0aW9uYWwgYWNjZXNzb3JpZXM6XHJcbiAqXHJcbiAqICogW2Jhc2ljLWFycm93LXNlbGVjdGlvbl0oaHR0cDovL2dpdGh1Yi5jb20vYmFzaWMtd2ViLWNvbXBvbmVudHMvYmFzaWMtd2ViLWNvbXBvbmVudHMvcGFja2FnZXMvYmFzaWMtYXJyb3ctc2VsZWN0aW9uKS5cclxuICogICBUaGlzIGFkZHMgcHJvbWluZW50IGxlZnQgYW5kIHJpZ2h0IGFycm93IGJ1dHRvbnMgb24gdGhlIHNpZGUgb2YgdGhlIGNhcm91c2VsLlxyXG4gKiAqIFtiYXNpYy1wYWdlLWRvdHNdKGh0dHA6Ly9naXRodWIuY29tL2Jhc2ljLXdlYi1jb21wb25lbnRzL2Jhc2ljLXdlYi1jb21wb25lbnRzL3BhY2thZ2VzL2Jhc2ljLXBhZ2UtZG90cykuXHJcbiAqICAgVGhpcyBhZGRzIGEgc2VyaWVzIG9mIHNtYWxsIGRvdHMgYmVsb3cgdGhlIGNhcm91c2VsIHRvIGluZGljYXRlIHRoZSB1c2VyJ3NcclxuICogICBjdXJyZW50IHBvc2l0aW9uIGluIHRoZSBzZXF1ZW5jZS5cclxuICpcclxuICogU2VlIHRob3NlIGNvbXBvbmVudHMgZm9yIG1vcmUgZGV0YWlscywgYnV0IGluIGdlbmVyYWwgeW91IGNhbiBjb25zdHJ1Y3QgYVxyXG4gKiBjb21tb24gY2Fyb3VzZWwgd2l0aCBib3RoIGFycm93IGJ1dHRvbnMgYW5kIGRvdHMgbGlrZSBzbzpcclxuICpcclxuICogICAgIDxiYXNpYy1hcnJvdy1zZWxlY3Rpb24+XHJcbiAqICAgICAgIDxiYXNpYy1wYWdlLWRvdHM+XHJcbiAqICAgICAgICAgPGJhc2ljLWNhcm91c2VsPlxyXG4gKiAgICAgICAgICAgLi4uIGltYWdlcywgZXRjLiAuLi5cclxuICogICAgICAgICA8L2Jhc2ljLWNhcm91c2VsPlxyXG4gKiAgICAgICA8L2Jhc2ljLXBhZ2UtZG90cz5cclxuICogICAgIDwvYmFzaWMtYXJyb3ctc2VsZWN0aW9uPlxyXG4gKlxyXG4gKiBGb3IgdW5pdmVyc2FsIGFjY2VzcywgYmFzaWMtY2Fyb3VzZWwgYXV0b21hdGljYWxseSBhZGRzIGEgdmFyaWV0eSBvZlxyXG4gKiBbQVJJQV0oaHR0cDovL3d3dy53My5vcmcvV0FJL2ludHJvL2FyaWEpIHByb3BlcnRpZXMgdG8gaXRzZWxmIGFuZCB0byBjaGlsZFxyXG4gKiBlbGVtZW50cy4gVGhpcyBoZWxwcyB1c2VycyBuYXZpZ2F0ZSB0aGUgc2VxdWVuY2Ugb2YgZWxlbWVudHMgaW4gdGhlIGNhcm91c2VsXHJcbiAqIHVzaW5nIGFzc2lzdGl2ZSB0ZWNobm9sb2dpZXMuXHJcbiAqXHJcbiAqIEBtaXhlcyBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50XHJcbiAqIEBtaXhlcyBUYXJnZXRJbkNvbGxlY3RpdmVcclxuICogQG1peGVzIENvbnRlbnRBc0l0ZW1zXHJcbiAqIEBtaXhlcyBEaXJlY3Rpb25TZWxlY3Rpb25cclxuICogQG1peGVzIEdlbmVyaWNcclxuICogQG1peGVzIEl0ZW1zU2VsZWN0aW9uXHJcbiAqIEBtaXhlcyBTZWxlY3Rpb25BcmlhQWN0aXZlXHJcbiAqIEBtaXhlcyBLZXlib2FyZFxyXG4gKiBAbWl4ZXMgS2V5Ym9hcmREaXJlY3Rpb25cclxuICogQG1peGVzIFN3aXBlRGlyZWN0aW9uXHJcbiAqIEBtaXhlcyBUcmFja3BhZERpcmVjdGlvblxyXG4gKi9cclxuY2xhc3MgQ2Fyb3VzZWwgZXh0ZW5kcyBiYXNlIHtcclxuXHJcbiAgYXR0YWNoZWRDYWxsYmFjaygpIHtcclxuICAgIGlmIChzdXBlci5hdHRhY2hlZENhbGxiYWNrKSB7IHN1cGVyLmF0dGFjaGVkQ2FsbGJhY2soKTsgfVxyXG4gICAgLy8gSEFDS1xyXG4gICAgdGhpcy5pdGVtc0NoYW5nZWQoKTtcclxuICAgIHRoaXMuc2VsZWN0aW9uUmVxdWlyZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHBvc2l0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuJC52aWV3cG9ydC5wb3NpdGlvbjtcclxuICB9XHJcbiAgc2V0IHBvc2l0aW9uKHZhbHVlKSB7XHJcbiAgICBpZiAoJ3Bvc2l0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5wb3NpdGlvbiA9IHZhbHVlOyB9XHJcbiAgICB0aGlzLiQudmlld3BvcnQucG9zaXRpb24gPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGdldCBzZWxlY3RlZEl0ZW0oKSB7XHJcbiAgICByZXR1cm4gc3VwZXIuc2VsZWN0ZWRJdGVtO1xyXG4gIH1cclxuICBzZXQgc2VsZWN0ZWRJdGVtKGl0ZW0pIHtcclxuICAgIGlmICgnc2VsZWN0ZWRJdGVtJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEl0ZW0gPSBpdGVtOyB9XHJcbiAgICB0aGlzLiQudmlld3BvcnQuc2VsZWN0ZWRJdGVtID0gaXRlbTtcclxuICB9XHJcblxyXG4gIHNob3dUcmFuc2l0aW9uKHNob3cpIHtcclxuICAgIGlmIChzdXBlci5zaG93VHJhbnNpdGlvbikgeyBzdXBlci5zaG93VHJhbnNpdGlvbigpOyB9XHJcbiAgICByZXR1cm4gdGhpcy4kLnZpZXdwb3J0LnNob3dUcmFuc2l0aW9uKHNob3cpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRlbXBsYXRlKCkge1xyXG4gICAgcmV0dXJuIGBcclxuICAgICAgPHN0eWxlPlxyXG4gICAgICA6aG9zdCB7XHJcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJhc2ljLXNsaWRpbmctdmlld3BvcnQge1xyXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIC13ZWJraXQtZmxleDogMTtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICB9XHJcbiAgICAgIDwvc3R5bGU+XHJcblxyXG4gICAgICA8YmFzaWMtc2xpZGluZy12aWV3cG9ydCBpZD1cInZpZXdwb3J0XCI+XHJcbiAgICAgICAgPHNsb3Q+PC9zbG90PlxyXG4gICAgICA8L2Jhc2ljLXNsaWRpbmctdmlld3BvcnQ+XHJcbiAgICBgO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmRvY3VtZW50LnJlZ2lzdGVyRWxlbWVudCgnYmFzaWMtY2Fyb3VzZWwnLCBDYXJvdXNlbCk7XHJcbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsO1xyXG4iLCIvKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIEF0dHJpYnV0ZU1hcnNoYWxsaW5nLiAqL1xyXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xyXG5cclxuICAvKipcclxuICAgKiBNaXhpbiB3aGljaCBtYXJzaGFsbHMgYXR0cmlidXRlcyB0byBwcm9wZXJ0aWVzIChhbmQgZXZlbnR1YWxseSB2aWNlIHZlcnNhKS5cclxuICAgKlxyXG4gICAqIElmIHlvdXIgY29tcG9uZW50IGV4cG9zZXMgYSBzZXR0ZXIgZm9yIGEgcHJvcGVydHksIGl0J3MgZ2VuZXJhbGx5IGEgZ29vZFxyXG4gICAqIGlkZWEgdG8gbGV0IGRldnMgdXNpbmcgeW91ciBjb21wb25lbnQgYmUgYWJsZSB0byBzZXQgdGhhdCBwcm9wZXJ0eSBpbiBIVE1MXHJcbiAgICogdmlhIGFuIGVsZW1lbnQgYXR0cmlidXRlLiBZb3UgY2FuIGNvZGUgdGhhdCB5b3Vyc2VsZiBieSB3cml0aW5nIGFuXHJcbiAgICogYGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja2AsIG9yIHlvdSBjYW4gdXNlIHRoaXMgbWl4aW4gdG8gZ2V0IGEgZGVncmVlIG9mXHJcbiAgICogYXV0b21hdGljIHN1cHBvcnQuXHJcbiAgICpcclxuICAgKiBUaGlzIG1peGluIGltcGxlbWVudHMgYW4gYGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja2AgdGhhdCB3aWxsIGF0dGVtcHQgdG9cclxuICAgKiBjb252ZXJ0IGEgY2hhbmdlIGluIGFuIGVsZW1lbnQgYXR0cmlidXRlIGludG8gYSBjYWxsIHRvIHRoZSBjb3JyZXNwb25kaW5nXHJcbiAgICogcHJvcGVydHkgc2V0dGVyLiBBdHRyaWJ1dGVzIHR5cGljYWxseSBmb2xsb3cgaHlwaGVuYXRlZCBuYW1lcyAoXCJmb28tYmFyXCIpLFxyXG4gICAqIHdoZXJlYXMgcHJvcGVydGllcyB0eXBpY2FsbHkgdXNlIGNhbWVsQ2FzZSBuYW1lcyAoXCJmb29CYXJcIikuIFRoaXMgbWl4aW5cclxuICAgKiByZXNwZWN0cyB0aGF0IGNvbnZlbnRpb24sIGF1dG9tYXRpY2FsbHkgbWFwcGluZyB0aGUgaHlwaGVuYXRlZCBhdHRyaWJ1dGVcclxuICAgKiBuYW1lIHRvIHRoZSBjb3JyZXNwb25kaW5nIGNhbWVsQ2FzZSBwcm9wZXJ0eSBuYW1lLlxyXG4gICAqXHJcbiAgICogRXhhbXBsZTogWW91IGRlZmluZSBhIGNvbXBvbmVudCB1c2luZyB0aGlzIG1peGluOlxyXG4gICAqXHJcbiAgICogICAgIGNsYXNzIE15RWxlbWVudCBleHRlbmRzIEF0dHJpYnV0ZU1hcnNoYWxsaW5nKEhUTUxFbGVtZW50KSB7XHJcbiAgICogICAgICAgZ2V0IGZvb0JhcigpIHsgcmV0dXJuIHRoaXMuX2Zvb0JhcjsgfVxyXG4gICAqICAgICAgIHNldCBmb29CYXIodmFsdWUpIHsgdGhpcy5fZm9vQmFyID0gdmFsdWU7IH1cclxuICAgKiAgICAgfVxyXG4gICAqICAgICBkb2N1bWVudC5yZWdpc3RlckVsZW1lbnQoJ215LWVsZW1lbnQnLCBNeUVsZW1lbnQpO1xyXG4gICAqXHJcbiAgICogSWYgc29tZW9uZSB0aGVuIGluc3RhbnRpYXRlcyB5b3VyIGNvbXBvbmVudCBpbiBIVE1MOlxyXG4gICAqXHJcbiAgICogICAgIDxteS1lbGVtZW50IGZvby1iYXI9XCJIZWxsb1wiPjwvbXktZWxlbWVudD5cclxuICAgKlxyXG4gICAqIFRoZW4sIGFmdGVyIHRoZSBlbGVtZW50IGhhcyBiZWVuIHVwZ3JhZGVkLCB0aGUgYGZvb0JhcmAgc2V0dGVyIHdpbGxcclxuICAgKiBhdXRvbWF0aWNhbGx5IGJlIGludm9rZWQgd2l0aCB0aGUgaW5pdGlhbCB2YWx1ZSBcIkhlbGxvXCIuXHJcbiAgICpcclxuICAgKiBGb3IgdGhlIHRpbWUgYmVpbmcsIHRoaXMgbWl4aW4gb25seSBzdXBwb3J0cyBzdHJpbmctdmFsdWVkIHByb3BlcnRpZXMuXHJcbiAgICogSWYgeW91J2QgbGlrZSB0byBjb252ZXJ0IHN0cmluZyBhdHRyaWJ1dGVzIHRvIG90aGVyIHR5cGVzIChudW1iZXJzLFxyXG4gICAqIGJvb2xlYW5zKSwgeW91IG5lZWQgdG8gaW1wbGVtZW50IGBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tgIHlvdXJzZWxmLlxyXG4gICAqL1xyXG4gIGNsYXNzIEF0dHJpYnV0ZU1hcnNoYWxsaW5nIGV4dGVuZHMgYmFzZSB7XHJcblxyXG4gICAgLypcclxuICAgICAqIEhhbmRsZSBhIGNoYW5nZSB0byB0aGUgYXR0cmlidXRlIHdpdGggdGhlIGdpdmVuIG5hbWUuXHJcbiAgICAgKi9cclxuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcclxuICAgICAgaWYgKHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjaykgeyBzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soKTsgfVxyXG4gICAgICAvLyBJZiB0aGUgYXR0cmlidXRlIG5hbWUgY29ycmVzcG9uZHMgdG8gYSBwcm9wZXJ0eSBuYW1lLCB0aGVuIHNldCB0aGF0XHJcbiAgICAgIC8vIHByb3BlcnR5LiBJZ25vcmUgY2hhbmdlcyBpbiBzdGFuZGFyZCBIVE1MRWxlbWVudCBwcm9wZXJ0aWVzLlxyXG4gICAgICBsZXQgcHJvcGVydHlOYW1lID0gYXR0cmlidXRlVG9Qcm9wZXJ0eU5hbWUobmFtZSk7XHJcbiAgICAgIGlmIChwcm9wZXJ0eU5hbWUgaW4gdGhpcyAmJiAhKHByb3BlcnR5TmFtZSBpbiBIVE1MRWxlbWVudC5wcm90b3R5cGUpKSB7XHJcbiAgICAgICAgdGhpc1twcm9wZXJ0eU5hbWVdID0gbmV3VmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogR2VuZXJhdGUgYW4gaW5pdGlhbCBjYWxsIHRvIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayBmb3IgZWFjaCBhdHRyaWJ1dGVcclxuICAgICAqIG9uIHRoZSBlbGVtZW50LlxyXG4gICAgICpcclxuICAgICAqIFRPRE86IFRoZSBwbGFuIGZvciBDdXN0b20gRWxlbWVudHMgdjEgaXMgZm9yIHRoZSBicm93c2VyIHRvIGhhbmRsZSB0aGlzLlxyXG4gICAgICogT25jZSB0aGF0J3MgaGFuZGxlZCAoaW5jbHVkaW5nIGluIHBvbHlmaWxscyksIHRoaXMgY2FsbCBjYW4gZ28gYXdheS5cclxuICAgICAqL1xyXG4gICAgY3JlYXRlZENhbGxiYWNrKCkge1xyXG4gICAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XHJcbiAgICAgIFtdLmZvckVhY2guY2FsbCh0aGlzLmF0dHJpYnV0ZXMsIGF0dHJpYnV0ZSA9PiB7XHJcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soYXR0cmlidXRlLm5hbWUsIHVuZGVmaW5lZCwgYXR0cmlidXRlLnZhbHVlKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIEF0dHJpYnV0ZU1hcnNoYWxsaW5nO1xyXG59O1xyXG5cclxuXHJcbi8vIENvbnZlcnQgY2FtZWwgY2FzZSBmb29CYXIgbmFtZSB0byBoeXBoZW5hdGVkIGZvby1iYXIuXHJcbmZ1bmN0aW9uIGF0dHJpYnV0ZVRvUHJvcGVydHlOYW1lKGF0dHJpYnV0ZU5hbWUpIHtcclxuICBsZXQgcHJvcGVydHlOYW1lID0gYXR0cmlidXRlTmFtZS5yZXBsYWNlKC8tKFthLXpdKS9nLCBtID0+IG1bMV0udG9VcHBlckNhc2UoKSk7XHJcbiAgcmV0dXJuIHByb3BlcnR5TmFtZTtcclxufVxyXG5cclxuLy8gQ29udmVydCBoeXBoZW5hdGVkIGZvby1iYXIgbmFtZSB0byBjYW1lbCBjYXNlIGZvb0Jhci5cclxuLy8gVE9ETzogVXNlIHRoaXMgd2hlbiB3ZSBzdXBwb3J0IHJlZmxlY3Rpb24gb2YgcHJvcGVydGllcyB0byBhdHRyaWJ1dGVzLlxyXG4vLyBmdW5jdGlvbiBwcm9wZXJ0eVRvQXR0cmlidXRlTmFtZShwcm9wZXJ0eU5hbWUpIHtcclxuLy8gICBsZXQgYXR0cmlidXRlTmFtZSA9IHByb3BlcnR5TmFtZS5yZXBsYWNlKC8oW2Etel1bQS1aXSkvZywgZyA9PiBnWzBdICsgJy0nICsgZ1sxXS50b0xvd2VyQ2FzZSgpKTtcclxuLy8gICByZXR1cm4gYXR0cmlidXRlTmFtZTtcclxuLy8gfVxyXG4iLCIvKipcclxuICogQSBncm91cCBvZiBlbGVtZW50cyB0aGF0IGhhdmUgYmVlbiBhc3NvY2lhdGVkIGZvciB0aGUgcHVycG9zZSBvZlxyXG4gKiBhY2NvbXBsaXNoaW5nIHNvbWUgY29sbGVjdGl2ZSBiZWhhdmlvciwgZS5nLiwga2V5Ym9hcmQgaGFuZGxpbmcuXHJcbiAqXHJcbiAqIFRoZXJlIGFyZSBjZXJ0YWluIGNvbXBvbmVudHMgdGhhdCB3YW50IHRvIGNvb3BlcmF0aXZlbHkgaGFuZGxlIHRoZSBrZXlib2FyZC5cclxuICogRm9yIGV4YW1wbGUsIHRoZSBiYXNpYy1hcnJvdy1zZWxlY3Rpb24gYW5kIGJhc2ljLXBhZ2UtZG90cyBjb21wb25lbnRzIGFyZVxyXG4gKiBvcHRpb25hbCBjb21wb25lbnRzIHRoYXQgY2FuIGF1Z21lbnQgdGhlIGFwcGVhcmFuY2UgYW5kIGJlaGF2aW9yIG9mIGFuIGlubmVyXHJcbiAqIGJhc2ljLWNhcm91c2VsLCBhZGRpbmcgYXJyb3cgYnV0dG9ucyBhbmQgZG90IGJ1dHRvbnMsIHJlc3BlY3RpdmVseS4gV2hlblxyXG4gKiB0aGVzZSBjb21wb25lbnRzIGFyZSBuZXN0ZWQgdG9nZXRoZXIsIHRoZXkgZm9ybSBhbiBpbXBsaWNpdCB1bml0IGNhbGxlZCBhXHJcbiAqICpjb2xsZWN0aXZlKjpcclxuICpcclxuICogICAgIDxiYXNpYy1hcnJvdy1zZWxlY3Rpb24+XHJcbiAqICAgICAgIDxiYXNpYy1wYWdlLWRvdHM+XHJcbiAqICAgICAgICAgPGJhc2ljLWNhcm91c2VsPlxyXG4gKiAgICAgICAgICAgLi4uIGltYWdlcywgZXRjLiAuLi5cclxuICogICAgICAgICA8L2Jhc2ljLWNhcm91c2VsPlxyXG4gKiAgICAgICA8L2Jhc2ljLXBhZ2UtZG90cz5cclxuICogICAgIDwvYmFzaWMtYXJyb3ctc2VsZWN0aW9uPlxyXG4gKlxyXG4gKiBJbiB0aGlzIGNvbmZpZ3VyYXRpb24sIHRoZSB0aHJlZSBjb21wb25lbnRzIHdpbGwgYWxsIGhhdmUgYSBgdGhpcy5jb2xsZWN0aXZlYFxyXG4gKiByZWZlcmVuY2UgdGhhdCByZWZlcnMgdG8gYSBzaGFyZWQgaW5zdGFuY2Ugb2YgdGhlIGBDb2xsZWN0aXZlYCBjbGFzcy5cclxuICpcclxuICogVGhlIEtleWJvYXJkIG1peGluIHRoZXkgdXNlIGlzIHNlbnNpdGl2ZSB0byB0aGUgcHJlc2VuY2Ugb2ZcclxuICogdGhlIGNvbGxlY3RpdmUuIEFtb25nIG90aGVyIHRoaW5ncywgaXQgd2lsbCBlbnN1cmUgdGhhdCBvbmx5IHRoZSBvdXRlcm1vc3RcclxuICogZWxlbWVudCBhYm92ZSDigJTCoHRoZSBiYXNpYy1hcnJvdy1zZWxlY3Rpb24g4oCUwqB3aWxsIGJlIGEgdGFiIHN0b3AgdGhhdCBjYW5cclxuICogcmVjZWl2ZSB0aGUga2V5Ym9hcmQgZm9jdXMuIFRoaXMgbGV0cyB0aGUgdXNlciBwZXJjZWl2ZSB0aGUgY29tcG9uZW50XHJcbiAqIGFycmFuZ2VtZW50IGFib3ZlIGFzIGEgc2luZ2xlIHVuaXQuIFRoZSBLZXlib2FyZCBtaXhpbiB3aWxsIGFsc28gZ2l2ZSBlYWNoXHJcbiAqIGVsZW1lbnQgaW4gdGhlIGNvbGxlY3RpdmUgYSBjaGFuY2UgdG8gcHJvY2VzcyBhbnkga2V5Ym9hcmQgZXZlbnRzLiBTbywgZXZlblxyXG4gKiB0aG91Z2ggdGhlIGJhc2ljLWFycm93LXNlbGVjdGlvbiBlbGVtZW50IHdpbGwgaGF2ZSB0aGUgZm9jdXMsIHRoZSBzdGFuZGFyZFxyXG4gKiBrZXlib2FyZCBuYXZpZ2F0aW9uIHByb3ZpZGVkIGJ5IGJhc2ljLWNhcm91c2VsIHdpbGwgY29udGludWUgdG8gd29yay5cclxuICpcclxuICogVGhlIFNlbGVjdGlvbkFyaWFBY3RpdmUgY29tcG9uZW50IGFsc28gcmVzcGVjdHMgY29sbGVjdGl2ZXMgd2hlbiB1c2luZyB0aGVcclxuICogYGFyaWEtYWN0aXZlZGVzY2VuZGFudGAgYW5kIGByb2xlYCBhdHRyaWJ1dGVzLiBUaG9zZSB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlXHJcbiAqIG91dGVybW9zdCBlbGVtZW50IChiYXNpYy1hcnJvdy1zZWxlY3Rpb24sIGFib3ZlKSBzbyB0aGF0IEFSSUEgY2FuIGNvcnJlY3RseVxyXG4gKiB1bmRlcnN0YW5kIHRoZSBhcnJhbmdlbWVudCBvZiB0aGUgZWxlbWVudHMuXHJcbiAqXHJcbiAqIFlvdSBjYW4gcHV0IGVsZW1lbnRzIGludG8gY29sbGVjdGl2ZXMgeW91cnNlbGYsIG9yIHlvdSBjYW4gdXNlIHRoZVxyXG4gKiBUYXJnZXRJbkNvbGxlY3RpdmUgbWl4aW4uXHJcbiAqL1xyXG5jbGFzcyBDb2xsZWN0aXZlIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgY29sbGVjdGl2ZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7SFRNTEVMZW1lbnRbXX0gW2VsZW1lbnRzXSAtIEluaXRpYWwgZWxlbWVudHMgdG8gYWRkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKC4uLmVsZW1lbnRzKSB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBlbGVtZW50cyBpbiB0aGUgY29sbGVjdGl2ZS5cclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnRbXX1cclxuICAgICAqL1xyXG4gICAgdGhpcy5lbGVtZW50cyA9IFtdO1xyXG4gICAgZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHRoaXMuYXNzaW1pbGF0ZShlbGVtZW50KSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGQgdGhlIGluZGljYXRlZCB0YXJnZXQgdG8gdGhlIGNvbGxlY3RpdmUuXHJcbiAgICpcclxuICAgKiBCeSBjb252ZW50aW9uLCBpZiB0d28gZWxlbWVudHMgd2FudHMgdG8gcGFydGljaXBhdGUgaW4gYSBjb2xsZWN0aXZlLCBhbmRcclxuICAgKiBvbmUgZWxlbWVudCBpcyBhbiBhbmNlc3RvciBvZiB0aGUgb3RoZXIgaW4gdGhlIERPTSwgdGhlIGFuY2VzdG9yIHNob3VsZFxyXG4gICAqIGFzc2ltaWxhdGUgdGhlIGRlc2NlbmRhbnQgaW5zdGVhZCBvZiB0aGUgb3RoZXIgd2F5IGFyb3VuZC5cclxuICAgKlxyXG4gICAqIEFmdGVyIGFzc2ltaWxhdGlvbiwgYW55IGVsZW1lbnQgaW4gdGhlIGNvbGxlY3RpdmUgdGhhdCBkZWZpbmVzIGFcclxuICAgKiBgY29sbGVjdGl2ZUNoYW5nZWRgIG1ldGhvZCB3aWxsIGhhdmUgdGhhdCBtZXRob2QgaW52b2tlZC4gVGhpcyBhbGxvd3NcclxuICAgKiB0aGUgY29sbGVjdGl2ZSdzIGVsZW1lbnRzIHRvIHJlc3BvbmQgdG8gY2hhbmdlcyBpbiB0aGUgY29sbGVjdGl2ZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7KEhUTUxFbGVtZW50fENvbGxlY3RpdmUpfSB0YXJnZXQgLSBUaGUgZWxlbWVudCBvciBjb2xsZWN0aXZlIHRvIGFkZC5cclxuICAgKi9cclxuICBhc3NpbWlsYXRlKHRhcmdldCkge1xyXG4gICAgbGV0IGNvbGxlY3RpdmVDaGFuZ2VkO1xyXG4gICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIENvbGxlY3RpdmUpIHtcclxuICAgICAgY29sbGVjdGl2ZUNoYW5nZWQgPSBhc3NpbWlsYXRlQ29sbGVjdGl2ZSh0aGlzLCB0YXJnZXQpO1xyXG4gICAgfSBlbHNlIGlmICh0YXJnZXQuY29sbGVjdGl2ZSkge1xyXG4gICAgICAvLyBUYXJnZXQgaXMgYWxyZWFkeSBwYXJ0IG9mIGEgY29sbGVjdGl2ZSwgYXNzaW1pbGF0ZSBpdC5cclxuICAgICAgY29sbGVjdGl2ZUNoYW5nZWQgPSBhc3NpbWlsYXRlQ29sbGVjdGl2ZSh0aGlzLCB0YXJnZXQuY29sbGVjdGl2ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBBc3NpbWlsYXRlIGFuIGluZGl2aWR1YWwgZWxlbWVudC5cclxuICAgICAgY29sbGVjdGl2ZUNoYW5nZWQgPSBhc3NpbWlsYXRlRWxlbWVudCh0aGlzLCB0YXJnZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb2xsZWN0aXZlQ2hhbmdlZCkge1xyXG4gICAgICB0aGlzLmludm9rZU1ldGhvZCgnY29sbGVjdGl2ZUNoYW5nZWQnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEludm9rZSBhIG1ldGhvZCBvbiBhbGwgZWxlbWVudHMgaW4gdGhlIGNvbGxlY3RpdmUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kIC0gVGhlIG5hbWUgb2YgdGhlIG1ldGhvZCB0byBpbnZva2Ugb24gYWxsIGVsZW1lbnRzLlxyXG4gICAqIEBwYXJhbSB7b2JqZWN0W119IFthcmdzXSAtIFRoZSBhcmd1bWVudHMgdG8gdGhlIG1ldGhvZFxyXG4gICAqL1xyXG4gIGludm9rZU1ldGhvZChtZXRob2QsIC4uLmFyZ3MpIHtcclxuICAgIC8vIEludm9rZSBmcm9tIGlubmVybW9zdCB0byBvdXRlcm1vc3QuXHJcbiAgICBsZXQgZWxlbWVudHMgPSB0aGlzLmVsZW1lbnRzO1xyXG4gICAgZm9yIChsZXQgaSA9IGVsZW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgIGxldCBlbGVtZW50ID0gZWxlbWVudHNbaV07XHJcbiAgICAgIGlmIChlbGVtZW50W21ldGhvZF0pIHtcclxuICAgICAgICBlbGVtZW50W21ldGhvZF0uYXBwbHkoZWxlbWVudCwgYXJncyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBvdXRlcm1vc3QgZWxlbWVudCBpbiB0aGUgY29sbGVjdGl2ZS5cclxuICAgKiBCeSBjb252ZW50aW9uLCB0aGlzIGlzIHRoZSBmaXJzdCBlbGVtZW50IGluIHRoZSBgZWxlbWVudHNgIGFycmF5LlxyXG4gICAqL1xyXG4gIGdldCBvdXRlcm1vc3RFbGVtZW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudHNbMF07XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbi8vIFRoZSBmaXJzdCBjb2xsZWN0aXZlIGFzc2ltaWxhdGVzIHRoZSBzZWNvbmQuXHJcbmZ1bmN0aW9uIGFzc2ltaWxhdGVDb2xsZWN0aXZlKGNvbGxlY3RpdmUxLCBjb2xsZWN0aXZlMikge1xyXG4gIGlmIChjb2xsZWN0aXZlMSA9PT0gY29sbGVjdGl2ZTIpIHtcclxuICAgIC8vIENvbGxlY3RpdmVzIGFyZSBzYW1lOyBpZ25vcmUuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBsZXQgZWxlbWVudHMgPSBjb2xsZWN0aXZlMi5lbGVtZW50cztcclxuXHJcbiAgLy8gT2xkIGNvbGxlY3RpdmUgd2lsbCBubyBsb25nZXIgaGF2ZSBhbnkgZWxlbWVudHMgb2YgaXRzIG93bi5cclxuICBjb2xsZWN0aXZlMi5lbGVtZW50cyA9IFtdO1xyXG5cclxuICBlbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgYXNzaW1pbGF0ZUVsZW1lbnQoY29sbGVjdGl2ZTEsIGVsZW1lbnQpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuXHJcbi8vIEFzc2ltaWxhdGUgdGhlIGluZGljYXRlZCBlbGVtZW50LlxyXG5mdW5jdGlvbiBhc3NpbWlsYXRlRWxlbWVudChjb2xsZWN0aXZlLCBlbGVtZW50KSB7XHJcbiAgaWYgKGVsZW1lbnQuY29sbGVjdGl2ZSA9PT0gY29sbGVjdGl2ZSkge1xyXG4gICAgLy8gQWxyZWFkeSBwYXJ0IG9mIHRoaXMgY29sbGVjdGl2ZS5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgZWxlbWVudC5jb2xsZWN0aXZlID0gY29sbGVjdGl2ZTtcclxuICBjb2xsZWN0aXZlLmVsZW1lbnRzLnB1c2goZWxlbWVudCk7XHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb2xsZWN0aXZlO1xyXG4iLCIvKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIENvbXBvc2FibGUuICovXHJcbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XHJcblxyXG4gIC8qKlxyXG4gICAqIE1peGluIHRvIG1ha2UgYSBjbGFzcyBtb3JlIGVhc2lseSBjb21wb3NhYmxlIHdpdGggb3RoZXIgbWl4aW5zLlxyXG4gICAqXHJcbiAgICogVGhpcyBtaXhpbiBjb250cmlidXRlcyBhIGBjb21wb3NlYCBtZXRob2QgdGhhdCBhcHBsaWVzIGEgc2V0IG9mIG1peGluXHJcbiAgICogZnVuY3Rpb25zIGFuZCByZXR1cm5zIHRoZSByZXN1bHRpbmcgbmV3IGNsYXNzLiBUaGlzIHN1Z2FyIGNhbiBtYWtlIHRoZVxyXG4gICAqIGFwcGxpY2F0aW9uIG9mIG1hbnkgbWl4aW5zIGF0IG9uY2UgZWFzaWVyIHRvIHJlYWQuXHJcbiAgICovXHJcbiAgY2xhc3MgQ29tcG9zYWJsZSBleHRlbmRzIGJhc2Uge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQXBwbHkgYSBzZXQgb2YgbWl4aW4gZnVuY3Rpb25zIG9yIG1peGluIG9iamVjdHMgdG8gdGhlIHByZXNlbnQgY2xhc3MgYW5kXHJcbiAgICAgKiByZXR1cm4gdGhlIG5ldyBjbGFzcy5cclxuICAgICAqXHJcbiAgICAgKiBJbnN0ZWFkIG9mIHdyaXRpbmc6XHJcbiAgICAgKlxyXG4gICAgICogICAgIGxldCBNeUNsYXNzID0gTWl4aW4xKE1peGluMihNaXhpbjMoTWl4aW40KE1peGluNShCYXNlQ2xhc3MpKSkpKTtcclxuICAgICAqXHJcbiAgICAgKiBZb3UgY2FuIHdyaXRlOlxyXG4gICAgICpcclxuICAgICAqICAgICBsZXQgTXlDbGFzcyA9IENvbXBvc2FibGUoQmFzZUNsYXNzKS5jb21wb3NlKFxyXG4gICAgICogICAgICAgTWl4aW4xLFxyXG4gICAgICogICAgICAgTWl4aW4yLFxyXG4gICAgICogICAgICAgTWl4aW4zLFxyXG4gICAgICogICAgICAgTWl4aW40LFxyXG4gICAgICogICAgICAgTWl4aW41XHJcbiAgICAgKiAgICAgKTtcclxuICAgICAqXHJcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGNhbiBhbHNvIHRha2UgbWl4aW4gb2JqZWN0cy4gQSBtaXhpbiBvYmplY3QgaXMganVzdCBhXHJcbiAgICAgKiBzaG9ydGhhbmQgZm9yIGEgbWl4aW4gZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGEgbmV3IHN1YmNsYXNzIHdpdGggdGhlIGdpdmVuXHJcbiAgICAgKiBtZW1iZXJzLiBUaGUgbWl4aW4gb2JqZWN0J3MgbWVtYmVycyBhcmUgKm5vdCogY29waWVkIGRpcmVjdGx5IG9udG8gdGhlXHJcbiAgICAgKiBwcm90b3R5cGUgb2YgdGhlIGJhc2UgY2xhc3MsIGFzIHdpdGggdHJhZGl0aW9uYWwgbWl4aW5zLlxyXG4gICAgICpcclxuICAgICAqIEluIGFkZGl0aW9uIHRvIHByb3ZpZGluZyBzeW50YWN0aWMgc3VnYXIsIHRoaXMgbWl4aW4gY2FuIGJlIHVzZWQgdG9cclxuICAgICAqIGRlZmluZSBhIGNsYXNzIGluIEVTNSwgd2hpY2ggbGFja3MgRVM2J3MgYGNsYXNzYCBrZXl3b3JkLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7Li4ubWl4aW5zfSBtaXhpbnMgLSBBIHNldCBvZiBtaXhpbiBmdW5jdGlvbnMgb3Igb2JqZWN0cyB0byBhcHBseS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNvbXBvc2UoLi4ubWl4aW5zKSB7XHJcbiAgICAgIC8vIFdlIGNyZWF0ZSBhIG5ldyBzdWJjbGFzcyBmb3IgZWFjaCBtaXhpbiBpbiB0dXJuLiBUaGUgcmVzdWx0IGJlY29tZXNcclxuICAgICAgLy8gdGhlIGJhc2UgY2xhc3MgZXh0ZW5kZWQgYnkgYW55IHN1YnNlcXVlbnQgbWl4aW5zLiBJdCB0dXJucyBvdXQgdGhhdFxyXG4gICAgICAvLyB3ZSBjYW4gdXNlIEFycmF5LnJlZHVjZSgpIHRvIGNvbmNpc2VseSBleHByZXNzIHRoaXMsIHVzaW5nIHRoZSBjdXJyZW50XHJcbiAgICAgIC8vIG9iamVjdCBhcyB0aGUgc2VlZCBmb3IgcmVkdWNlKCkuXHJcbiAgICAgIHJldHVybiBtaXhpbnMucmVkdWNlKGNvbXBvc2VDbGFzcywgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIENvbXBvc2FibGU7XHJcbn07XHJcblxyXG5cclxuLy8gUHJvcGVydGllcyBkZWZpbmVkIGJ5IE9iamVjdCB0aGF0IHdlIGRvbid0IHdhbnQgdG8gbWl4aW4uXHJcbmNvbnN0IE5PTl9NSVhBQkxFX09CSkVDVF9QUk9QRVJUSUVTID0gW1xyXG4gICdjb25zdHJ1Y3RvcidcclxuXTtcclxuXHJcbi8qXHJcbiAqIEFwcGx5IHRoZSBtaXhpbiB0byB0aGUgZ2l2ZW4gYmFzZSBjbGFzcyB0byByZXR1cm4gYSBuZXcgY2xhc3MuXHJcbiAqIFRoZSBtaXhpbiBjYW4gZWl0aGVyIGJlIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBtb2RpZmllZCBjbGFzcywgb3IgYVxyXG4gKiBwbGFpbiBvYmplY3Qgd2hvc2UgbWVtYmVycyB3aWxsIGJlIGNvcGllZCB0byB0aGUgbmV3IGNsYXNzJyBwcm90b3R5cGUuXHJcbiAqL1xyXG5mdW5jdGlvbiBjb21wb3NlQ2xhc3MoYmFzZSwgbWl4aW4pIHtcclxuICBpZiAodHlwZW9mIG1peGluID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAvLyBNaXhpbiBmdW5jdGlvblxyXG4gICAgcmV0dXJuIG1peGluKGJhc2UpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBNaXhpbiBvYmplY3RcclxuICAgIGNsYXNzIFN1YmNsYXNzIGV4dGVuZHMgYmFzZSB7fVxyXG4gICAgY29weU93blByb3BlcnRpZXMobWl4aW4sIFN1YmNsYXNzLnByb3RvdHlwZSwgTk9OX01JWEFCTEVfT0JKRUNUX1BST1BFUlRJRVMpO1xyXG4gICAgcmV0dXJuIFN1YmNsYXNzO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8qXHJcbiAqIENvcHkgdGhlIGdpdmVuIHByb3BlcnRpZXMvbWV0aG9kcyB0byB0aGUgdGFyZ2V0LlxyXG4gKiBSZXR1cm4gdGhlIHVwZGF0ZWQgdGFyZ2V0LlxyXG4gKi9cclxuZnVuY3Rpb24gY29weU93blByb3BlcnRpZXMoc291cmNlLCB0YXJnZXQsIGlnbm9yZVByb3BlcnR5TmFtZXMgPSBbXSkge1xyXG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZSkuZm9yRWFjaChuYW1lID0+IHtcclxuICAgIGlmIChpZ25vcmVQcm9wZXJ0eU5hbWVzLmluZGV4T2YobmFtZSkgPCAwKSB7XHJcbiAgICAgIGxldCBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIG5hbWUpO1xyXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yKTtcclxuICAgIH1cclxuICB9KTtcclxuICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcbiIsIi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggQ29udGVudEFzSXRlbXMuICovXHJcbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XHJcblxyXG4gIC8qKlxyXG4gICAqIE1peGluIHdoaWNoIG1hcHMgY29udGVudCBzZW1hbnRpY3MgKGVsZW1lbnRzKSB0byBsaXN0IGl0ZW0gc2VtYW50aWNzLlxyXG4gICAqXHJcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIGEgY29tcG9uZW50IHRvIHByb3ZpZGUgYSBgY29udGVudGAgcHJvcGVydHkgcmV0dXJuaW5nIGFcclxuICAgKiByYXcgc2V0IG9mIGVsZW1lbnRzLiBZb3UgY2FuIHByb3ZpZGUgdGhhdCB5b3Vyc2VsZiwgb3IgdXNlIHRoZVxyXG4gICAqIGBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50YCBtaXhpbi5cclxuICAgKlxyXG4gICAqIEl0ZW1zIGRpZmZlciBmcm9tIGVsZW1lbnQgY29udGVudHMgaW4gc2V2ZXJhbCB3YXlzOlxyXG4gICAqXHJcbiAgICogKiBUaGV5IGFyZSBvZnRlbiByZWZlcmVuY2VkIHZpYSBpbmRleC5cclxuICAgKiAqIFRoZXkgbWF5IGhhdmUgYSBzZWxlY3Rpb24gc3RhdGUuXHJcbiAgICogKiBJdCdzIGNvbW1vbiB0byBkbyB3b3JrIHRvIGluaXRpYWxpemUgdGhlIGFwcGVhcmFuY2Ugb3Igc3RhdGUgb2YgYSBuZXdcclxuICAgKiAgIGl0ZW0uXHJcbiAgICogKiBBdXhpbGlhcnkgaW52aXNpYmxlIGNoaWxkIGVsZW1lbnRzIGFyZSBmaWx0ZXJlZCBvdXQgYW5kIG5vdCBjb3VudGVkIGFzXHJcbiAgICogICBpdGVtcy4gQXV4aWxpYXJ5IGVsZW1lbnRzIGluY2x1ZGUgbGluaywgc2NyaXB0LCBzdHlsZSwgYW5kIHRlbXBsYXRlXHJcbiAgICogICBlbGVtZW50cy4gVGhpcyBmaWx0ZXJpbmcgZW5zdXJlcyB0aGF0IHRob3NlIGF1eGlsaWFyeSBlbGVtZW50cyBjYW4gYmVcclxuICAgKiAgIHVzZWQgaW4gbWFya3VwIGluc2lkZSBvZiBhIGxpc3Qgd2l0aG91dCBiZWluZyB0cmVhdGVkIGFzIGxpc3QgaXRlbXMuXHJcbiAgICovXHJcbiAgY2xhc3MgQ29udGVudEFzSXRlbXMgZXh0ZW5kcyBiYXNlIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFwcGx5IHRoZSBzZWxlY3Rpb24gc3RhdGUgdG8gYSBzaW5nbGUgaXRlbS5cclxuICAgICAqXHJcbiAgICAgKiBJbnZva2UgdGhpcyBtZXRob2QgdG8gc2lnbmFsIHRoYXQgdGhlIHNlbGVjdGVkIHN0YXRlIG9mIHRoZSBpbmRpY2F0ZWQgaXRlbVxyXG4gICAgICogaGFzIGNoYW5nZWQuIEJ5IGRlZmF1bHQsIHRoaXMgYXBwbGllcyBhIGBzZWxlY3RlZGAgQ1NTIGNsYXNzIGlmIHRoZSBpdGVtXHJcbiAgICAgKiBpcyBzZWxlY3RlZCwgYW5kIHJlbW92ZWQgaXQgaWYgbm90IHNlbGVjdGVkLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGl0ZW0gLSBUaGUgaXRlbSB3aG9zZSBzZWxlY3Rpb24gc3RhdGUgaGFzIGNoYW5nZWQuXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNlbGVjdGVkIC0gVHJ1ZSBpZiB0aGUgaXRlbSBpcyBzZWxlY3RlZCwgZmFsc2UgaWYgbm90LlxyXG4gICAgICovXHJcbiAgICBhcHBseVNlbGVjdGlvbihpdGVtLCBzZWxlY3RlZCkge1xyXG4gICAgICBpZiAoc3VwZXIuYXBwbHlTZWxlY3Rpb24pIHsgc3VwZXIuYXBwbHlTZWxlY3Rpb24oaXRlbSwgc2VsZWN0ZWQpOyB9XHJcbiAgICAgIC8vIFdvdWxkIGxpa2UgdG8gdXNlIGNsYXNzTGlzdC50b2dnbGUoKSBoZXJlLCBidXQgSUUgMTEgZG9lc24ndCBoYXZlIGl0LlxyXG4gICAgICBpZiAoc2VsZWN0ZWQpIHtcclxuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29udGVudENoYW5nZWQoKSB7XHJcbiAgICAgIGlmIChzdXBlci5jb250ZW50Q2hhbmdlZCkgeyBzdXBlci5jb250ZW50Q2hhbmdlZCgpOyB9XHJcbiAgICAgIHRoaXMuX2l0ZW1zID0gbnVsbDtcclxuICAgICAgdGhpcy5pdGVtc0NoYW5nZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybiB0aGUgcG9zaXRpb25hbCBpbmRleCBmb3IgdGhlIGluZGljYXRlZCBpdGVtLlxyXG4gICAgICpcclxuICAgICAqIEJlY2F1c2UgdGhpcyBhY3RzIGxpa2UgYSBnZXR0ZXIsIHRoaXMgZG9lcyBub3QgaW52b2tlIGEgYmFzZSBpbXBsZW1lbnRhdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpdGVtIFRoZSBpdGVtIHdob3NlIGluZGV4IGlzIHJlcXVlc3RlZC5cclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSBpbmRleCBvZiB0aGUgaXRlbSwgb3IgLTEgaWYgbm90IGZvdW5kLlxyXG4gICAgICovXHJcbiAgICBpbmRleE9mSXRlbShpdGVtKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLml0ZW1zLmluZGV4T2YoaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIHdoZW5ldmVyIGEgbmV3IGl0ZW0gaXMgYWRkZWQgdG8gdGhlIGxpc3QuXHJcbiAgICAgKlxyXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLiBZb3UgY2FuIG92ZXJyaWRlXHJcbiAgICAgKiB0aGlzIHRvIHBlcmZvcm0gcGVyLWl0ZW0gaW5pdGlhbGl6YXRpb24uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaXRlbSAtIFRoZSBpdGVtIHRoYXQgd2FzIGFkZGVkLlxyXG4gICAgICovXHJcbiAgICBpdGVtQWRkZWQoaXRlbSkge1xyXG4gICAgICBpZiAoc3VwZXIuaXRlbUFkZGVkKSB7IHN1cGVyLml0ZW1BZGRlZChpdGVtKTsgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGN1cnJlbnQgc2V0IG9mIGl0ZW1zIGluIHRoZSBsaXN0LiBTZWUgdGhlIHRvcC1sZXZlbCBkb2N1bWVudGF0aW9uIGZvclxyXG4gICAgICogbWl4aW4gZm9yIGEgZGVzY3JpcHRpb24gb2YgaG93IGl0ZW1zIGRpZmZlciBmcm9tIHBsYWluIGNvbnRlbnQuXHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50W119XHJcbiAgICAgKi9cclxuICAgIGdldCBpdGVtcygpIHtcclxuICAgICAgaWYgKHRoaXMuX2l0ZW1zID09IG51bGwpIHtcclxuICAgICAgICB0aGlzLl9pdGVtcyA9IGZpbHRlckF1eGlsaWFyeUVsZW1lbnRzKHRoaXMuY29udGVudCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgaXMgaW52b2tlZCB3aGVuIHRoZSB1bmRlcmx5aW5nIGNvbnRlbnRzIGNoYW5nZS4gSXQgaXMgYWxzb1xyXG4gICAgICogaW52b2tlZCBvbiBjb21wb25lbnQgaW5pdGlhbGl6YXRpb24g4oCTIHNpbmNlIHRoZSBpdGVtcyBoYXZlIFwiY2hhbmdlZFwiIGZyb21cclxuICAgICAqIGJlaW5nIG5vdGhpbmcuXHJcbiAgICAgKi9cclxuICAgIGl0ZW1zQ2hhbmdlZCgpIHtcclxuICAgICAgaWYgKHN1cGVyLml0ZW1zQ2hhbmdlZCkgeyBzdXBlci5pdGVtc0NoYW5nZWQoKTsgfVxyXG5cclxuICAgICAgLy8gUGVyZm9ybSBwZXItaXRlbSBpbml0aWFsaXphdGlvbi5cclxuICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGlmICghaXRlbS5faXRlbUluaXRpYWxpemVkKSB7XHJcbiAgICAgICAgICB0aGlzLml0ZW1BZGRlZChpdGVtKTtcclxuICAgICAgICAgIGl0ZW0uX2l0ZW1Jbml0aWFsaXplZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2l0ZW1zLWNoYW5nZWQnKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIEBldmVudCBpdGVtcy1jaGFuZ2VkXHJcbiAgICAgKlxyXG4gICAgICogVGhpcyBldmVudCBpcyByYWlzZWQgd2hlbiB0aGUgc2V0IG9mIGl0ZW1zIGNoYW5nZXMuXHJcbiAgICAgKi9cclxuICB9XHJcblxyXG4gIHJldHVybiBDb250ZW50QXNJdGVtcztcclxufTtcclxuXHJcblxyXG4vLyBSZXR1cm4gdGhlIGdpdmVuIGVsZW1lbnRzLCBmaWx0ZXJpbmcgb3V0IGF1eGlsaWFyeSBlbGVtZW50cyB0aGF0IGFyZW4ndFxyXG4vLyB0eXBpY2FsbHkgdmlzaWJsZS4gSXRlbXMgd2hpY2ggYXJlIG5vdCBlbGVtZW50cyBhcmUgcmV0dXJuZWQgYXMgaXMuXHJcbmZ1bmN0aW9uIGZpbHRlckF1eGlsaWFyeUVsZW1lbnRzKGl0ZW1zKSB7XHJcbiAgbGV0IGF1eGlsaWFyeVRhZ3MgPSBbXHJcbiAgICAnbGluaycsXHJcbiAgICAnc2NyaXB0JyxcclxuICAgICdzdHlsZScsXHJcbiAgICAndGVtcGxhdGUnXHJcbiAgXTtcclxuICByZXR1cm4gW10uZmlsdGVyLmNhbGwoaXRlbXMsIGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgIHJldHVybiAhaXRlbS5sb2NhbE5hbWUgfHwgYXV4aWxpYXJ5VGFncy5pbmRleE9mKGl0ZW0ubG9jYWxOYW1lKSA8IDA7XHJcbiAgfSk7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogRmlyZXMgd2hlbiB0aGUgaXRlbXMgaW4gdGhlIGxpc3QgY2hhbmdlLlxyXG4gKlxyXG4gKiBAZXZlbnQgaXRlbXMtY2hhbmdlZFxyXG4gKi9cclxuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBEaXJlY3Rpb25TZWxlY3Rpb24uICovXHJcbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XHJcblxyXG4gIC8qKlxyXG4gICAqIE1peGluIHdoaWNoIG1hcHMgZGlyZWN0aW9uIHNlbWFudGljcyAoZ29MZWZ0LCBnb1JpZ2h0LCBldGMuKSB0byBzZWxlY3Rpb25cclxuICAgKiBzZW1hbnRpY3MgKHNlbGVjdFByZXZpb3VzLCBzZWxlY3ROZXh0LCBldGMuKS5cclxuICAgKlxyXG4gICAqIFRoaXMgbWl4aW4gY2FuIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgS2V5Ym9hcmREaXJlY3Rpb24gbWl4aW5cclxuICAgKiAod2hpY2ggbWFwcyBrZXlib2FyZCBldmVudHMgdG8gZGlyZWN0aW9ucykgYW5kIGEgbWl4aW4gdGhhdCBoYW5kbGVzXHJcbiAgICogc2VsZWN0aW9uIGxpa2UgSXRlbXNTZWxlY3Rpb24uXHJcbiAgICovXHJcbiAgY2xhc3MgRGlyZWN0aW9uU2VsZWN0aW9uIGV4dGVuZHMgYmFzZSB7XHJcblxyXG4gICAgZ29Eb3duKCkge1xyXG4gICAgICBpZiAoc3VwZXIuZ29Eb3duKSB7IHN1cGVyLmdvRG93bigpOyB9XHJcbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdE5leHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBnb0VuZCgpIHtcclxuICAgICAgaWYgKHN1cGVyLmdvRW5kKSB7IHN1cGVyLmdvRW5kKCk7IH1cclxuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0TGFzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdvTGVmdCgpIHtcclxuICAgICAgaWYgKHN1cGVyLmdvTGVmdCkgeyBzdXBlci5nb0xlZnQoKTsgfVxyXG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RQcmV2aW91cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdvUmlnaHQoKSB7XHJcbiAgICAgIGlmIChzdXBlci5nb1JpZ2h0KSB7IHN1cGVyLmdvUmlnaHQoKTsgfVxyXG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3ROZXh0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ29TdGFydCgpIHtcclxuICAgICAgaWYgKHN1cGVyLmdvU3RhcnQpIHsgc3VwZXIuZ29TdGFydCgpOyB9XHJcbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdEZpcnN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ29VcCgpIHtcclxuICAgICAgaWYgKHN1cGVyLmdvVXApIHsgc3VwZXIuZ29VcCgpOyB9XHJcbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdFByZXZpb3VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGVmYXVsdCBpbXBsZW1lbnRhdGlvbnMuIFRoZXNlIHdpbGwgdHlwaWNhbGx5IGJlIGhhbmRsZWQgYnkgb3RoZXIgbWl4aW5zLlxyXG4gICAgc2VsZWN0Rmlyc3QoKSB7XHJcbiAgICAgIGlmIChzdXBlci5zZWxlY3RGaXJzdCkgeyByZXR1cm4gc3VwZXIuc2VsZWN0Rmlyc3QoKTsgfVxyXG4gICAgfVxyXG4gICAgc2VsZWN0TGFzdCgpIHtcclxuICAgICAgaWYgKHN1cGVyLnNlbGVjdExhc3QpIHsgcmV0dXJuIHN1cGVyLnNlbGVjdExhc3QoKTsgfVxyXG4gICAgfVxyXG4gICAgc2VsZWN0TmV4dCgpIHtcclxuICAgICAgaWYgKHN1cGVyLnNlbGVjdE5leHQpIHsgcmV0dXJuIHN1cGVyLnNlbGVjdE5leHQoKTsgfVxyXG4gICAgfVxyXG4gICAgc2VsZWN0UHJldmlvdXMoKSB7XHJcbiAgICAgIGlmIChzdXBlci5zZWxlY3RQcmV2aW91cykgeyByZXR1cm4gc3VwZXIuc2VsZWN0UHJldmlvdXMoKTsgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIHJldHVybiBEaXJlY3Rpb25TZWxlY3Rpb247XHJcbn07XHJcbiIsIi8vIFRPRE86IFJhdGlvbmFsaXplIHdpdGggbmV3IEN1c3RvbSBFbGVtZW50cyBBUEkuXHJcbi8vIFRPRE86IENvbnNpZGVyIHJlbmFtaW5nIHRvIG1hdGNoIEN1c3RvbSBFbGVtZW50cyBBUEkuXHJcblxyXG5cclxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBEaXN0cmlidXRlZENoaWxkcmVuLiAqL1xyXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xyXG5cclxuICAvKipcclxuICAgKiBNaXhpbiB3aGljaCBkZWZpbmVzIGhlbHBlcnMgZm9yIGFjY2Vzc2luZyBhIGNvbXBvbmVudCdzIGRpc3RyaWJ1dGVkXHJcbiAgICogY2hpbGRyZW4gYXMgYSBmbGF0dGVuZWQgYXJyYXkgb3Igc3RyaW5nLlxyXG4gICAqXHJcbiAgICogVGhlIHN0YW5kYXJkIERPTSBBUEkgcHJvdmlkZXMgc2V2ZXJhbCB3YXlzIG9mIGFjY2Vzc2luZyBjaGlsZCBjb250ZW50OlxyXG4gICAqIGBjaGlsZHJlbmAsIGBjaGlsZE5vZGVzYCwgYW5kIGB0ZXh0Q29udGVudGAuIE5vbmUgb2YgdGhlc2UgZnVuY3Rpb25zIGFyZVxyXG4gICAqIFNoYWRvdyBET00gYXdhcmUuIFRoaXMgbWl4aW4gZGVmaW5lcyB2YXJpYXRpb25zIG9mIHRob3NlIGZ1bmN0aW9ucyB0aGF0XHJcbiAgICogKmFyZSogU2hhZG93IERPTSBhd2FyZS5cclxuICAgKlxyXG4gICAqIEV4YW1wbGU6IHlvdSBjcmVhdGUgYSBjb21wb25lbnQgYDxjb3VudC1jaGlsZHJlbj5gIHRoYXQgZGlzcGxheXMgYSBudW1iZXJcclxuICAgKiBlcXVhbCB0byB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIHBsYWNlZCBpbnNpZGUgdGhhdCBjb21wb25lbnQuIElmIHNvbWVvbmVcclxuICAgKiBpbnN0YW50aWF0ZXMgeW91ciBjb21wb25lbnQgbGlrZTpcclxuICAgKlxyXG4gICAqICAgICA8Y291bnQtY2hpbGRyZW4+XHJcbiAgICogICAgICAgPGRpdj48L2Rpdj5cclxuICAgKiAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAqICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICogICAgIDwvY291bnQtY2hpbGRyZW4+XHJcbiAgICpcclxuICAgKiBUaGVuIHRoZSBjb21wb25lbnQgc2hvdWxkIHNob3cgXCIzXCIsIGJlY2F1c2UgdGhlcmUgYXJlIHRocmVlIGNoaWxkcmVuLiBUb1xyXG4gICAqIGNhbGN1bGF0ZSB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuLCB0aGUgY29tcG9uZW50IGNhbiBqdXN0IGNhbGN1bGF0ZVxyXG4gICAqIGB0aGlzLmNoaWxkcmVuLmxlbmd0aGAuIEhvd2V2ZXIsIHN1cHBvc2Ugc29tZW9uZSBpbnN0YW50aWF0ZXMgeW91clxyXG4gICAqIGNvbXBvbmVudCBpbnNpZGUgb25lIG9mIHRoZWlyIG93biBjb21wb25lbnRzLCBhbmQgcHV0cyBhIGA8c2xvdD5gIGVsZW1lbnRcclxuICAgKiBpbnNpZGUgeW91ciBjb21wb25lbnQ6XHJcbiAgICpcclxuICAgKiAgICAgPGNvdW50LWNoaWxkcmVuPlxyXG4gICAqICAgICAgIDxzbG90Pjwvc2xvdD5cclxuICAgKiAgICAgPC9jb3VudC1jaGlsZHJlbj5cclxuICAgKlxyXG4gICAqIElmIHlvdXIgY29tcG9uZW50IG9ubHkgbG9va3MgYXQgYHRoaXMuY2hpbGRyZW5gLCBpdCB3aWxsIGFsd2F5cyBzZWUgZXhhY3RseVxyXG4gICAqIG9uZSBjaGlsZCDigJTCoHRoZSBgPHNsb3Q+YCBlbGVtZW50LiBCdXQgdGhlIHVzZXIgbG9va2luZyBhdCB0aGUgcGFnZSB3aWxsXHJcbiAgICogKnNlZSogYW55IG5vZGVzIGRpc3RyaWJ1dGVkIHRvIHRoYXQgc2xvdC4gVG8gbWF0Y2ggd2hhdCB0aGUgdXNlciBzZWVzLCB5b3VyXHJcbiAgICogY29tcG9uZW50IHNob3VsZCBleHBhbmQgYW55IGA8c2xvdD5gIGVsZW1lbnRzIGl0IGNvbnRhaW5zLlxyXG4gICAqXHJcbiAgICogVGhhdCBpcyB0aGUgcHJvYmxlbSB0aGlzIG1peGluIHNvbHZlcy4gQWZ0ZXIgYXBwbHlpbmcgdGhpcyBtaXhpbiwgeW91clxyXG4gICAqIGNvbXBvbmVudCBjb2RlIGhhcyBhY2Nlc3MgdG8gYHRoaXMuZGlzdHJpYnV0ZWRDaGlsZHJlbmAsIHdob3NlIGBsZW5ndGhgXHJcbiAgICogd2lsbCByZXR1cm4gdGhlIHRvdGFsIG51bWJlciBvZiBhbGwgY2hpbGRyZW4gZGlzdHJpYnV0ZWQgdG8geW91ciBjb21wb25lbnRcclxuICAgKiBpbiB0aGUgY29tcG9zZWQgdHJlZS5cclxuICAgKlxyXG4gICAqIE5vdGU6IFRoZSBsYXRlc3QgQ3VzdG9tIEVsZW1lbnRzIEFQSSBkZXNpZ24gY2FsbHMgZm9yIGEgbmV3IGZ1bmN0aW9uLFxyXG4gICAqIGBnZXRBc3NpZ25lZE5vZGVzYCB0aGF0IHRha2VzIGFuIG9wdGlvbmFsIGBkZWVwYCBwYXJhbWV0ZXIsIHRoYXQgd2lsbCBzb2x2ZVxyXG4gICAqIHRoaXMgcHJvYmxlbSBhdCB0aGUgQVBJIGxldmVsLlxyXG4gICAqL1xyXG4gIGNsYXNzIERpc3RyaWJ1dGVkQ2hpbGRyZW4gZXh0ZW5kcyBiYXNlIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFuIGluLW9yZGVyIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4sIGV4cGFuZGluZyBhbnkgc2xvdCBlbGVtZW50cy4gTGlrZSB0aGVcclxuICAgICAqIHN0YW5kYXJkIGNoaWxkcmVuIHByb3BlcnR5LCB0aGlzIHNraXBzIHRleHQgbm9kZXMuXHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50W119XHJcbiAgICAgKi9cclxuICAgIGdldCBkaXN0cmlidXRlZENoaWxkcmVuKCkge1xyXG4gICAgICByZXR1cm4gZXhwYW5kQ29udGVudEVsZW1lbnRzKHRoaXMuY2hpbGRyZW4sIGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFuIGluLW9yZGVyIGNvbGxlY3Rpb24gb2YgY2hpbGQgbm9kZXMsIGV4cGFuZGluZyBhbnkgc2xvdCBlbGVtZW50cy4gTGlrZVxyXG4gICAgICogdGhlIHN0YW5kYXJkIGNoaWxkTm9kZXMgcHJvcGVydHksIHRoaXMgaW5jbHVkZXMgdGV4dCBub2Rlcy5cclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7Tm9kZVtdfVxyXG4gICAgICovXHJcbiAgICBnZXQgZGlzdHJpYnV0ZWRDaGlsZE5vZGVzKCkge1xyXG4gICAgICByZXR1cm4gZXhwYW5kQ29udGVudEVsZW1lbnRzKHRoaXMuY2hpbGROb2RlcywgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY29uY2F0ZW5hdGVkIHRleHQgY29udGVudCBvZiBhbGwgY2hpbGQgbm9kZXMsIGV4cGFuZGluZyBhbnkgc2xvdFxyXG4gICAgICogZWxlbWVudHMuXHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUge3N0cmluZ31cclxuICAgICAqL1xyXG4gICAgZ2V0IGRpc3RyaWJ1dGVkVGV4dENvbnRlbnQoKSB7XHJcbiAgICAgIGxldCBzdHJpbmdzID0gdGhpcy5kaXN0cmlidXRlZENoaWxkTm9kZXMubWFwKGZ1bmN0aW9uKGNoaWxkKSB7XHJcbiAgICAgICAgcmV0dXJuIGNoaWxkLnRleHRDb250ZW50O1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHN0cmluZ3Muam9pbignJyk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIERpc3RyaWJ1dGVkQ2hpbGRyZW47XHJcbn07XHJcblxyXG5cclxuLypcclxuICogR2l2ZW4gYSBhcnJheSBvZiBub2RlcywgcmV0dXJuIGEgbmV3IGFycmF5IHdpdGggYW55IGNvbnRlbnQgZWxlbWVudHMgZXhwYW5kZWRcclxuICogdG8gdGhlIG5vZGVzIGRpc3RyaWJ1dGVkIHRvIHRoYXQgY29udGVudCBlbGVtZW50LiBUaGlzIHJ1bGUgaXMgYXBwbGllZFxyXG4gKiByZWN1cnNpdmVseS5cclxuICpcclxuICogSWYgaW5jbHVkZVRleHROb2RlcyBpcyB0cnVlLCB0ZXh0IG5vZGVzIHdpbGwgYmUgaW5jbHVkZWQsIGFzIGluIHRoZVxyXG4gKiBzdGFuZGFyZCBjaGlsZE5vZGVzIHByb3BlcnR5OyBieSBkZWZhdWx0LCB0aGlzIHNraXBzIHRleHQgbm9kZXMsIGxpa2UgdGhlXHJcbiAqIHN0YW5kYXJkIGNoaWxkcmVuIHByb3BlcnR5LlxyXG4gKi9cclxuZnVuY3Rpb24gZXhwYW5kQ29udGVudEVsZW1lbnRzKG5vZGVzLCBpbmNsdWRlVGV4dE5vZGVzKSB7XHJcbiAgbGV0IGV4cGFuZGVkID0gQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKG5vZGVzLCBub2RlID0+IHtcclxuICAgIC8vIFdlIHdhbnQgdG8gc2VlIGlmIHRoZSBub2RlIGlzIGFuIGluc3RhbmNlb2YgSFRNTFNsb3RFTGVtZW50LCBidXRcclxuICAgIC8vIHRoYXQgY2xhc3Mgd29uJ3QgZXhpc3QgaWYgdGhlIGJyb3dzZXIgdGhhdCBkb2Vzbid0IHN1cHBvcnQgbmF0aXZlXHJcbiAgICAvLyBTaGFkb3cgRE9NIGFuZCBpZiB0aGUgU2hhZG93IERPTSBwb2x5ZmlsbCBoYXNuJ3QgYmVlbiBsb2FkZWQuIEluc3RlYWQsXHJcbiAgICAvLyB3ZSBkbyBhIHNpbXBsaXN0aWMgY2hlY2sgdG8gc2VlIGlmIHRoZSB0YWcgbmFtZSBpcyBcInNsb3RcIiBvciBcImNvbnRlbnRcIi5cclxuICAgIGlmIChub2RlLmxvY2FsTmFtZSAmJiAobm9kZS5sb2NhbE5hbWUgPT09IFwic2xvdFwiIHx8IG5vZGUubG9jYWxOYW1lID09PSBcImNvbnRlbnRcIikpIHtcclxuICAgICAgLy8gY29udGVudCBlbGVtZW50OyB1c2UgaXRzIGRpc3RyaWJ1dGVkIG5vZGVzIGluc3RlYWQuXHJcbiAgICAgIGxldCBkaXN0cmlidXRlZE5vZGVzID0gbm9kZS5nZXREaXN0cmlidXRlZE5vZGVzKCk7XHJcbiAgICAgIHJldHVybiBkaXN0cmlidXRlZE5vZGVzID9cclxuICAgICAgICBleHBhbmRDb250ZW50RWxlbWVudHMoZGlzdHJpYnV0ZWROb2RlcywgaW5jbHVkZVRleHROb2RlcykgOlxyXG4gICAgICAgIFtdO1xyXG4gICAgfSBlbHNlIGlmIChub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcclxuICAgICAgLy8gUGxhaW4gZWxlbWVudDsgdXNlIGFzIGlzLlxyXG4gICAgICByZXR1cm4gW25vZGVdO1xyXG4gICAgfSBlbHNlIGlmIChub2RlIGluc3RhbmNlb2YgVGV4dCAmJiBpbmNsdWRlVGV4dE5vZGVzKSB7XHJcbiAgICAgIC8vIFRleHQgbm9kZS5cclxuICAgICAgcmV0dXJuIFtub2RlXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIENvbW1lbnQsIHByb2Nlc3NpbmcgaW5zdHJ1Y3Rpb24sIGV0Yy47IHNraXAuXHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuICB9KTtcclxuICBsZXQgZmxhdHRlbmVkID0gW10uY29uY2F0KC4uLmV4cGFuZGVkKTtcclxuICByZXR1cm4gZmxhdHRlbmVkO1xyXG59XHJcbiIsIi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudC4gKi9cclxuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcclxuXHJcbiAgLyoqXHJcbiAgICogTWl4aW4gd2hpY2ggZGVmaW5lcyBhIGNvbXBvbmVudCdzIGNvbnRlbnQgYXMgaXRzIGNoaWxkcmVuLCBleHBhbmRpbmcgYW55XHJcbiAgICogbm9kZXMgZGlzdHJpYnV0ZWQgdG8gdGhlIGNvbXBvbmVudCdzIHNsb3RzLlxyXG4gICAqXHJcbiAgICogVGhpcyBtaXhpbiBpcyBpbnRlbmRlZCBmb3IgdXNlIHdpdGggdGhlIERpc3RyaWJ1dGVkQ2hpbGRyZW4gbWl4aW4uIFNlZSB0aGF0XHJcbiAgICogbWl4aW4gZm9yIGEgZGlzY3Vzc2lvbiBvZiBob3cgdGhhdCB3b3Jrcy4gVGhpcyBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50XHJcbiAgICogbWl4aW4gcHJvdmlkZXMgYW4gZWFzeSB3YXkgb2YgZGVmaW5pbmcgdGhlIFwiY29udGVudFwiIG9mIGEgY29tcG9uZW50IGFzIHRoZVxyXG4gICAqIGNvbXBvbmVudCdzIGRpc3RyaWJ1dGVkIGNoaWxkcmVuLiBUaGF0IGluIHR1cm4gbGV0cyBtaXhpbnMgbGlrZVxyXG4gICAqIENvbnRlbnRBc0l0ZW1zIG1hbmlwdWxhdGUgdGhlIGNoaWxkcmVuIGFzIGxpc3QgaXRlbXMuXHJcbiAgICovXHJcbiAgY2xhc3MgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCBleHRlbmRzIGJhc2Uge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGNvbnRlbnQgb2YgdGhpcyBjb21wb25lbnQsIGRlZmluZWQgdG8gYmUgdGhlIGZsYXR0ZW5lZCBhcnJheSBvZlxyXG4gICAgICogY2hpbGRyZW4gZGlzdHJpYnV0ZWQgdG8gdGhlIGNvbXBvbmVudC5cclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnRbXX1cclxuICAgICAqL1xyXG4gICAgZ2V0IGNvbnRlbnQoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmRpc3RyaWJ1dGVkQ2hpbGRyZW47XHJcbiAgICB9XHJcbiAgICBzZXQgY29udGVudCh2YWx1ZSkge1xyXG4gICAgICBpZiAoJ2NvbnRlbnQnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLmNvbnRlbnQgPSB2YWx1ZTsgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIHJldHVybiBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50O1xyXG59O1xyXG4iLCIvKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIEdlbmVyaWMuICovXHJcbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XHJcblxyXG4gIC8qKlxyXG4gICAqIE1peGluIHdoaWNoIGFsbG93cyBhIGNvbXBvbmVudCB0byBzdXBwb3J0IGEgXCJnZW5lcmljXCIgc3R5bGU6IGEgbWluaW1hbGlzdFxyXG4gICAqIHN0eWxlIHRoYXQgY2FuIGVhc2lseSBiZSByZW1vdmVkIHRvIHJlc2V0IGl0cyB2aXN1YWwgYXBwZWFyYW5jZSB0byBhXHJcbiAgICogYmFzZWxpbmUgc3RhdGUuXHJcbiAgICpcclxuICAgKiBCeSBkZWZhdWx0LCBhIGNvbXBvbmVudCBzaG91bGQgcHJvdmlkZSBhIG1pbmltYWwgdmlzdWFsIHByZXNlbnRhdGlvbiB0aGF0XHJcbiAgICogYWxsb3dzIHRoZSBjb21wb25lbnQgdG8gZnVuY3Rpb24uIEhvd2V2ZXIsIHRoZSBtb3JlIHN0eWxpbmcgdGhlIGNvbXBvbmVudFxyXG4gICAqIHByb3ZpZGVzIGJ5IGRlZmF1bHQsIHRoZSBoYXJkZXIgaXQgYmVjb21lcyB0byBnZXQgdGhlIGNvbXBvbmVudCB0byBmaXQgaW5cclxuICAgKiBpbiBvdGhlciBzZXR0aW5ncy4gRWFjaCBDU1MgcnVsZSBoYXMgdG8gYmUgb3ZlcnJpZGRlbi4gV29yc2UsIG5ldyBDU1MgcnVsZXNcclxuICAgKiBhZGRlZCB0byB0aGUgZGVmYXVsdCBzdHlsZSB3b24ndCBiZSBvdmVycmlkZGVuIGJ5IGRlZmF1bHQsIG1ha2luZyBpdCBoYXJkXHJcbiAgICogdG8ga25vdyB3aGV0aGVyIGEgbmV3IHZlcnNpb24gb2YgYSBjb21wb25lbnQgd2lsbCBzdGlsbCBsb29rIG9rYXkuXHJcbiAgICpcclxuICAgKiBBcyBhIGNvbXByb21pc2UsIHRoZSBtaXhpbiBkZWZpbmVzIGEgYGdlbmVyaWNgIGF0dHJpYnV0ZS4gVGhpcyBhdHRyaWJ1dGUgaXNcclxuICAgKiBub3JtYWxseSBzZXQgYnkgZGVmYXVsdCwgYW5kIHN0eWxlcyBjYW4gYmUgd3JpdHRlbiB0aGF0IGFwcGx5IG9ubHkgd2hlbiB0aGVcclxuICAgKiBnZW5lcmljIGF0dHJpYnV0ZSBpcyBzZXQuIFRoaXMgYWxsb3dzIHRoZSBjb25zdHJ1Y3Rpb24gb2YgQ1NTIHJ1bGVzIHRoYXRcclxuICAgKiB3aWxsIG9ubHkgYXBwbHkgdG8gZ2VuZXJpYyBjb21wb25lbnRzIGxpa2U6XHJcbiAgICpcclxuICAgKiAgICAgOmhvc3QoW2dlbmVyaWM9XCJcIl0pIHtcclxuICAgKiAgICAgICAuLi4gR2VuZXJpYyBhcHBlYXJhbmNlIGRlZmluZWQgaGVyZSAuLi5cclxuICAgKiAgICAgfVxyXG4gICAqXHJcbiAgICogVGhpcyBtYWtlcyBpdCBlYXN5IHRvIHJlbW92ZSBhbGwgZGVmYXVsdCBzdHlsaW5nIOKAlCBzZXQgdGhlIGBnZW5lcmljYFxyXG4gICAqIGF0dHJpYnV0ZSB0byBmYWxzZSwgYW5kIGFsbCBkZWZhdWx0IHN0eWxpbmcgd2lsbCBiZSByZW1vdmVkLlxyXG4gICAqL1xyXG4gIGNsYXNzIEdlbmVyaWMgZXh0ZW5kcyBiYXNlIHtcclxuXHJcbiAgICBjcmVhdGVkQ2FsbGJhY2soKSB7XHJcbiAgICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cclxuICAgICAgdGhpcy5nZW5lcmljID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2dlbmVyaWMnKSB8fCB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHJ1ZSBpZiB0aGUgY29tcG9uZW50IHdvdWxkIGxpa2UgdG8gcmVjZWl2ZSBnZW5lcmljIHN0eWxpbmcuXHJcbiAgICAgKlxyXG4gICAgICogVGhpcyBwcm9wZXJ0eSBpcyB0cnVlIGJ5IGRlZmF1bHQg4oCUwqBzZXQgaXQgdG8gZmFsc2UgdG8gdHVybiBvZmYgYWxsXHJcbiAgICAgKiBnZW5lcmljIHN0eWxlcy4gVGhpcyBtYWtlcyBpdCBlYXNpZXIgdG8gYXBwbHkgY3VzdG9tIHN0eWxpbmc7IHlvdSB3b24ndFxyXG4gICAgICogaGF2ZSB0byBleHBsaWNpdGx5IG92ZXJyaWRlIHN0eWxpbmcgeW91IGRvbid0IHdhbnQuXHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUgQm9vbGVhblxyXG4gICAgICogQGRlZmF1bHQgdHJ1ZVxyXG4gICAgICovXHJcbiAgICBnZXQgZ2VuZXJpYygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2dlbmVyaWM7XHJcbiAgICB9XHJcbiAgICBzZXQgZ2VuZXJpYyh2YWx1ZSkge1xyXG4gICAgICBpZiAoJ2dlbmVyaWMnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLmdlbmVyaWMgPSB2YWx1ZTsgfVxyXG4gICAgICAvLyBXZSByb2xsIG91ciBvd24gYXR0cmlidXRlIHNldHRpbmcgc28gdGhhdCBhbiBleHBsaWNpdGx5IGZhbHNlIHZhbHVlXHJcbiAgICAgIC8vIHNob3dzIHVwIGFzIGdlbmVyaWM9XCJmYWxzZVwiLlxyXG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHZhbHVlID0gKHZhbHVlICE9PSAnZmFsc2UnKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9nZW5lcmljID0gdmFsdWU7XHJcbiAgICAgIGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAvLyBFeHBsaWNpdGx5IHVzZSBmYWxzZSBzdHJpbmcuXHJcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2dlbmVyaWMnLCAnZmFsc2UnKTtcclxuICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PSBudWxsKSB7XHJcbiAgICAgICAgLy8gRXhwbGljaXRseSByZW1vdmUgYXR0cmlidXRlLlxyXG4gICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCdnZW5lcmljJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gVXNlIHRoZSBlbXB0eSBzdHJpbmcgdG8gZ2V0IGF0dHJpYnV0ZSB0byBhcHBlYXIgd2l0aCBubyB2YWx1ZS5cclxuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnZ2VuZXJpYycsICcnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIHJldHVybiBHZW5lcmljO1xyXG59O1xyXG4iLCIvKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIEl0ZW1zU2VsZWN0aW9uLiAqL1xyXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xyXG5cclxuICAvKipcclxuICAgKiBNaXhpbiB3aGljaCBtYW5hZ2VzIHNpbmdsZS1zZWxlY3Rpb24gc2VtYW50aWNzIGZvciBpdGVtcyBpbiBhIGxpc3QuXHJcbiAgICpcclxuICAgKiBUaGlzIG1peGluIGV4cGVjdHMgYSBjb21wb25lbnQgdG8gcHJvdmlkZSBhbiBgaXRlbXNgIGFycmF5IG9mIGFsbCBlbGVtZW50c1xyXG4gICAqIGluIHRoZSBsaXN0LiBBIHN0YW5kYXJkIHdheSB0byBkbyB0aGF0IHdpdGggaXMgdGhlIENvbnRlbnRBc0l0ZW1zIG1peGluLFxyXG4gICAqIHdoaWNoIHRha2VzIGEgY29tcG9uZW50J3MgY29udGVudCAodHlwaWNhbGx5IGl0cyBkaXN0cmlidXRlZCBjaGlsZHJlbikgYXNcclxuICAgKiB0aGUgc2V0IG9mIGxpc3QgaXRlbXM7IHNlZSB0aGF0IG1peGluIGZvciBkZXRhaWxzLlxyXG4gICAqXHJcbiAgICogVGhpcyBtaXhpbiB0cmFja3MgYSBzaW5nbGUgc2VsZWN0ZWQgaXRlbSBpbiB0aGUgbGlzdCwgYW5kIHByb3ZpZGVzIG1lYW5zIHRvXHJcbiAgICogZ2V0IGFuZCBzZXQgdGhhdCBzdGF0ZSBieSBpdGVtIHBvc2l0aW9uIChgc2VsZWN0ZWRJbmRleGApIG9yIGl0ZW0gaWRlbnRpdHlcclxuICAgKiAoYHNlbGVjdGVkSXRlbWApLiBUaGUgc2VsZWN0aW9uIGNhbiBiZSBtb3ZlZCBpbiB0aGUgbGlzdCB2aWEgdGhlIG1ldGhvZHNcclxuICAgKiBgc2VsZWN0Rmlyc3RgLCBgc2VsZWN0TGFzdGAsIGBzZWxlY3ROZXh0YCwgYW5kIGBzZWxlY3RQcmV2aW91c2AuXHJcbiAgICpcclxuICAgKiBUaGlzIG1peGluIGRvZXMgbm90IHByb2R1Y2UgYW55IHVzZXItdmlzaWJsZSBlZmZlY3RzIHRvIHJlcHJlc2VudFxyXG4gICAqIHNlbGVjdGlvbi4gT3RoZXIgbWl4aW5zLCBzdWNoIGFzIFNlbGVjdGlvbkFyaWFBY3RpdmUsIFNlbGVjdGlvbkhpZ2hsaWdodFxyXG4gICAqIGFuZCBTZWxlY3Rpb25JblZpZXcsIG1vZGlmeSB0aGUgc2VsZWN0ZWQgaXRlbSBpbiBjb21tb24gd2F5cyB0byBsZXQgdGhlXHJcbiAgICogdXNlciBrbm93IGEgZ2l2ZW4gaXRlbSBpcyBzZWxlY3RlZCBvciBub3Qgc2VsZWN0ZWQuXHJcbiAgICovXHJcbiAgY2xhc3MgSXRlbXNTZWxlY3Rpb24gZXh0ZW5kcyBiYXNlIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFwcGx5IHRoZSBpbmRpY2F0ZSBzZWxlY3Rpb24gc3RhdGUgdG8gdGhlIGl0ZW0uXHJcbiAgICAgKlxyXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLiBVc2VyLXZpc2libGVcclxuICAgICAqIGVmZmVjdHMgd2lsbCB0eXBpY2FsbHkgYmUgaGFuZGxlZCBieSBvdGhlciBtaXhpbnMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaXRlbSAtIHRoZSBpdGVtIGJlaW5nIHNlbGVjdGVkL2Rlc2VsZWN0ZWRcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gc2VsZWN0ZWQgLSB0cnVlIGlmIHRoZSBpdGVtIGlzIHNlbGVjdGVkLCBmYWxzZSBpZiBub3RcclxuICAgICAqL1xyXG4gICAgYXBwbHlTZWxlY3Rpb24oaXRlbSwgc2VsZWN0ZWQpIHtcclxuICAgICAgaWYgKHN1cGVyLmFwcGx5U2VsZWN0aW9uKSB7IHN1cGVyLmFwcGx5U2VsZWN0aW9uKGl0ZW0sIHNlbGVjdGVkKTsgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHJ1ZSBpZiB0aGUgc2VsZWN0aW9uIGNhbiBiZSBtb3ZlZCB0byB0aGUgbmV4dCBpdGVtLCBmYWxzZSBpZiBub3QgKHRoZVxyXG4gICAgICogc2VsZWN0ZWQgaXRlbSBpcyB0aGUgbGFzdCBpdGVtIGluIHRoZSBsaXN0KS5cclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgZ2V0IGNhblNlbGVjdE5leHQoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9jYW5TZWxlY3ROZXh0O1xyXG4gICAgfVxyXG4gICAgc2V0IGNhblNlbGVjdE5leHQoY2FuU2VsZWN0TmV4dCkge1xyXG4gICAgICBpZiAoJ2NhblNlbGVjdE5leHQnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLmNhblNlbGVjdE5leHQgPSBjYW5TZWxlY3ROZXh0OyB9XHJcbiAgICAgIHRoaXMuX2NhblNlbGVjdE5leHQgPSBjYW5TZWxlY3ROZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHJ1ZSBpZiB0aGUgc2VsZWN0aW9uIGNhbiBiZSBtb3ZlZCB0byB0aGUgcHJldmlvdXMgaXRlbSwgZmFsc2UgaWYgbm90XHJcbiAgICAgKiAodGhlIHNlbGVjdGVkIGl0ZW0gaXMgdGhlIGZpcnN0IG9uZSBpbiB0aGUgbGlzdCkuXHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIGdldCBjYW5TZWxlY3RQcmV2aW91cygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2NhblNlbGVjdFByZXZpb3VzO1xyXG4gICAgfVxyXG4gICAgc2V0IGNhblNlbGVjdFByZXZpb3VzKGNhblNlbGVjdFByZXZpb3VzKSB7XHJcbiAgICAgIGlmICgnY2FuU2VsZWN0UHJldmlvdXMnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLmNhblNlbGVjdFByZXZpb3VzID0gY2FuU2VsZWN0UHJldmlvdXM7IH1cclxuICAgICAgdGhpcy5fY2FuU2VsZWN0UHJldmlvdXMgPSBjYW5TZWxlY3RQcmV2aW91cztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZSBhIG5ldyBpdGVtIGJlaW5nIGFkZGVkIHRvIHRoZSBsaXN0LlxyXG4gICAgICpcclxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIHNpbXBseSBzZXRzIHRoZSBpdGVtJ3NcclxuICAgICAqIHNlbGVjdGlvbiBzdGF0ZSB0byBmYWxzZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpdGVtIC0gdGhlIGl0ZW0gYmVpbmcgYWRkZWRcclxuICAgICAqL1xyXG4gICAgaXRlbUFkZGVkKGl0ZW0pIHtcclxuICAgICAgaWYgKHN1cGVyLml0ZW1BZGRlZCkgeyBzdXBlci5pdGVtQWRkZWQoaXRlbSk7IH1cclxuICAgICAgdGhpcy5hcHBseVNlbGVjdGlvbihpdGVtLCBpdGVtID09PSB0aGlzLnNlbGVjdGVkSXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgaXRlbXNDaGFuZ2VkKCkge1xyXG4gICAgICBpZiAoc3VwZXIuaXRlbXNDaGFuZ2VkKSB7IHN1cGVyLml0ZW1zQ2hhbmdlZCgpOyB9XHJcbiAgICAgIGxldCBpbmRleCA9IHRoaXMuaXRlbXMuaW5kZXhPZih0aGlzLnNlbGVjdGVkSXRlbSk7XHJcbiAgICAgIGlmIChpbmRleCA8IDApIHtcclxuICAgICAgICAvLyBTZWxlY3RlZCBpdGVtIGlzIG5vIGxvbmdlciBpbiB0aGUgY3VycmVudCBzZXQgb2YgaXRlbXMuXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBudWxsO1xyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGlvblJlcXVpcmVkKSB7XHJcbiAgICAgICAgICAvLyBFbnN1cmUgc2VsZWN0aW9uLCBidXQgZG8gdGhpcyBpbiB0aGUgbmV4dCB0aWNrIHRvIGdpdmUgb3RoZXJcclxuICAgICAgICAgIC8vIG1peGlucyBhIGNoYW5jZSB0byBkbyB0aGVpciBvd24gaXRlbXNDaGFuZ2VkIHdvcmsuXHJcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBlbnN1cmVTZWxlY3Rpb24odGhpcyk7XHJcbiAgICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gVGhlIGNoYW5nZSBpbiBpdGVtcyBtYXkgaGF2ZSBhZmZlY3RlZCB3aGljaCBuYXZpZ2F0aW9ucyBhcmUgcG9zc2libGUuXHJcbiAgICAgIHVwZGF0ZVBvc3NpYmxlTmF2aWdhdGlvbnModGhpcywgaW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGluZGV4IG9mIHRoZSBpdGVtIHdoaWNoIGlzIGN1cnJlbnRseSBzZWxlY3RlZCwgb3IgLTEgaWYgdGhlcmUgaXMgbm9cclxuICAgICAqIHNlbGVjdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBTZXR0aW5nIHRoZSBpbmRleCB0byAtMSBkZXNlbGVjdHMgYW55IGN1cnJlbnQtc2VsZWN0ZWQgaXRlbS5cclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICBnZXQgc2VsZWN0ZWRJbmRleCgpIHtcclxuICAgICAgbGV0IHNlbGVjdGVkSXRlbSA9IHRoaXMuc2VsZWN0ZWRJdGVtO1xyXG5cclxuICAgICAgaWYgKHNlbGVjdGVkSXRlbSA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBUT0RPOiBNZW1vaXplXHJcbiAgICAgIGxldCBpbmRleCA9IHRoaXMuaW5kZXhPZkl0ZW0oc2VsZWN0ZWRJdGVtKTtcclxuXHJcbiAgICAgIC8vIElmIGluZGV4ID0gLTEsIHNlbGVjdGlvbiB3YXNuJ3QgZm91bmQuIE1vc3QgbGlrZWx5IGNhdXNlIGlzIHRoYXQgdGhlXHJcbiAgICAgIC8vIERPTSB3YXMgbWFuaXB1bGF0ZWQgZnJvbSB1bmRlcm5lYXRoIHVzLlxyXG4gICAgICAvLyBUT0RPOiBPbmNlIHdlIHRyYWNrIGNvbnRlbnQgY2hhbmdlcywgdHVybiB0aGlzIGludG8gYW4gZXhjZXB0aW9uLlxyXG4gICAgICByZXR1cm4gaW5kZXg7XHJcbiAgICB9XHJcbiAgICBzZXQgc2VsZWN0ZWRJbmRleChpbmRleCkge1xyXG4gICAgICBpZiAoJ3NlbGVjdGVkSW5kZXgnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkSW5kZXggPSBpbmRleDsgfVxyXG4gICAgICBsZXQgaXRlbXMgPSB0aGlzLml0ZW1zO1xyXG4gICAgICBsZXQgaXRlbTtcclxuICAgICAgaWYgKGluZGV4IDwgMCB8fCBpdGVtcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBpdGVtID0gbnVsbDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpdGVtID0gaXRlbXNbaW5kZXhdO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gaXRlbTtcclxuXHJcbiAgICAgIGxldCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnc2VsZWN0ZWQtaW5kZXgtY2hhbmdlZCcsIHtcclxuICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgIHNlbGVjdGVkSW5kZXg6IGluZGV4LFxyXG4gICAgICAgICAgdmFsdWU6IGluZGV4IC8vIGZvciBQb2x5bWVyIGJpbmRpbmdcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGN1cnJlbnRseSBzZWxlY3RlZCBpdGVtLCBvciBudWxsIGlmIHRoZXJlIGlzIG5vIHNlbGVjdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBTZXR0aW5nIHRoaXMgcHJvcGVydHkgdG8gbnVsbCBkZXNlbGVjdHMgYW55IGN1cnJlbnRseS1zZWxlY3RlZCBpdGVtLlxyXG4gICAgICpcclxuICAgICAqIEB0eXBlIHtvYmplY3R9XHJcbiAgICAgKi9cclxuICAgIGdldCBzZWxlY3RlZEl0ZW0oKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZEl0ZW0gfHwgbnVsbDtcclxuICAgIH1cclxuICAgIHNldCBzZWxlY3RlZEl0ZW0oaXRlbSkge1xyXG4gICAgICBpZiAoJ3NlbGVjdGVkSXRlbScgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJdGVtID0gaXRlbTsgfVxyXG4gICAgICBsZXQgcHJldmlvdXNJdGVtID0gdGhpcy5fc2VsZWN0ZWRJdGVtO1xyXG4gICAgICBpZiAocHJldmlvdXNJdGVtKSB7XHJcbiAgICAgICAgLy8gUmVtb3ZlIHByZXZpb3VzIHNlbGVjdGlvbi5cclxuICAgICAgICB0aGlzLmFwcGx5U2VsZWN0aW9uKHByZXZpb3VzSXRlbSwgZmFsc2UpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBUT0RPOiBDb25maXJtIGl0ZW0gaXMgYWN0dWFsbHkgaW4gdGhlIGxpc3QgYmVmb3JlIHNlbGVjdGluZy5cclxuICAgICAgdGhpcy5fc2VsZWN0ZWRJdGVtID0gaXRlbTtcclxuICAgICAgaWYgKGl0ZW0pIHtcclxuICAgICAgICB0aGlzLmFwcGx5U2VsZWN0aW9uKGl0ZW0sIHRydWUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBUT0RPOiBSYXRpb25hbGl6ZSB3aXRoIHNlbGVjdGVkSW5kZXggc28gd2UncmUgbm90IHJlY2FsY3VsYXRpbmcgaXRlbVxyXG4gICAgICAvLyBvciBpbmRleCBpbiBlYWNoIHNldHRlci5cclxuICAgICAgbGV0IGluZGV4ID0gdGhpcy5pbmRleE9mSXRlbShpdGVtKTtcclxuICAgICAgdXBkYXRlUG9zc2libGVOYXZpZ2F0aW9ucyh0aGlzLCBpbmRleCk7XHJcblxyXG4gICAgICBsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3NlbGVjdGVkLWl0ZW0tY2hhbmdlZCcsIHtcclxuICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgIHNlbGVjdGVkSXRlbTogaXRlbSxcclxuICAgICAgICAgIHByZXZpb3VzSXRlbTogcHJldmlvdXNJdGVtLFxyXG4gICAgICAgICAgdmFsdWU6IGl0ZW0gLy8gZm9yIFBvbHltZXIgYmluZGluZ1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZWxlY3QgdGhlIGZpcnN0IGl0ZW0gaW4gdGhlIGxpc3QuXHJcbiAgICAgKi9cclxuICAgIHNlbGVjdEZpcnN0KCkge1xyXG4gICAgICBpZiAoc3VwZXIuc2VsZWN0Rmlyc3QpIHsgc3VwZXIuc2VsZWN0Rmlyc3QoKTsgfVxyXG4gICAgICByZXR1cm4gc2VsZWN0SW5kZXgodGhpcywgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUcnVlIGlmIHRoZSBsaXN0IHNob3VsZCBhbHdheXMgaGF2ZSBhIHNlbGVjdGlvbiAoaWYgaXQgaGFzIGl0ZW1zKS5cclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgZ2V0IHNlbGVjdGlvblJlcXVpcmVkKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fc2VsZWN0aW9uUmVxdWlyZWQ7XHJcbiAgICB9XHJcbiAgICBzZXQgc2VsZWN0aW9uUmVxdWlyZWQoc2VsZWN0aW9uUmVxdWlyZWQpIHtcclxuICAgICAgaWYgKCdzZWxlY3Rpb25SZXF1aXJlZCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0aW9uUmVxdWlyZWQgPSBzZWxlY3Rpb25SZXF1aXJlZDsgfVxyXG4gICAgICB0aGlzLl9zZWxlY3Rpb25SZXF1aXJlZCA9IHNlbGVjdGlvblJlcXVpcmVkO1xyXG4gICAgICBlbnN1cmVTZWxlY3Rpb24odGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZWxlY3QgdGhlIGxhc3QgaXRlbSBpbiB0aGUgbGlzdC5cclxuICAgICAqL1xyXG4gICAgc2VsZWN0TGFzdCgpIHtcclxuICAgICAgaWYgKHN1cGVyLnNlbGVjdExhc3QpIHsgc3VwZXIuc2VsZWN0TGFzdCgpOyB9XHJcbiAgICAgIHJldHVybiBzZWxlY3RJbmRleCh0aGlzLCB0aGlzLml0ZW1zLmxlbmd0aCAtIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2VsZWN0IHRoZSBuZXh0IGl0ZW0gaW4gdGhlIGxpc3QuXHJcbiAgICAgKi9cclxuICAgIHNlbGVjdE5leHQoKSB7XHJcbiAgICAgIGlmIChzdXBlci5zZWxlY3ROZXh0KSB7IHN1cGVyLnNlbGVjdE5leHQoKTsgfVxyXG4gICAgICByZXR1cm4gc2VsZWN0SW5kZXgodGhpcywgdGhpcy5zZWxlY3RlZEluZGV4ICsgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZWxlY3QgdGhlIHByZXZpb3VzIGl0ZW0gaW4gdGhlIGxpc3QuXHJcbiAgICAgKi9cclxuICAgIHNlbGVjdFByZXZpb3VzKCkge1xyXG4gICAgICBpZiAoc3VwZXIuc2VsZWN0UHJldmlvdXMpIHsgc3VwZXIuc2VsZWN0UHJldmlvdXMoKTsgfVxyXG4gICAgICByZXR1cm4gc2VsZWN0SW5kZXgodGhpcywgdGhpcy5zZWxlY3RlZEluZGV4IC0gMSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGaXJlcyB3aGVuIHRoZSBzZWxlY3RlZEl0ZW0gcHJvcGVydHkgY2hhbmdlcy5cclxuICAgICAqXHJcbiAgICAgKiBAZXZlbnQgc2VsZWN0ZWQtaXRlbS1jaGFuZ2VkXHJcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBkZXRhaWwuc2VsZWN0ZWRJdGVtIFRoZSBuZXcgc2VsZWN0ZWQgaXRlbS5cclxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGRldGFpbC5wcmV2aW91c0l0ZW0gVGhlIHByZXZpb3VzbHkgc2VsZWN0ZWQgaXRlbS5cclxuICAgICAqL1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRmlyZXMgd2hlbiB0aGUgc2VsZWN0ZWRJbmRleCBwcm9wZXJ0eSBjaGFuZ2VzLlxyXG4gICAgICpcclxuICAgICAqIEBldmVudCBzZWxlY3RlZC1pdGVtLWNoYW5nZWRcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkZXRhaWwuc2VsZWN0ZWRJbmRleCBUaGUgbmV3IHNlbGVjdGVkIGluZGV4LlxyXG4gICAgICovXHJcblxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIEl0ZW1zU2VsZWN0aW9uO1xyXG59O1xyXG5cclxuXHJcbi8vIElmIG5vIGl0ZW0gaXMgc2VsZWN0ZWQsIHNlbGVjdCBhIGRlZmF1bHQgaXRlbS5cclxuLy8gVE9ETzogSWYgdGhlIHByZXZpb3VzbHktc2VsZWN0ZWQgaXRlbSBoYXMgYmVlbiBkZWxldGVkLCB0cnkgdG8gc2VsZWN0IGFuXHJcbi8vIGl0ZW0gYWRqYWNlbnQgdG8gdGhlIHBvc2l0aW9uIGl0IGhlbGQuXHJcbmZ1bmN0aW9uIGVuc3VyZVNlbGVjdGlvbihlbGVtZW50KSB7XHJcbiAgaWYgKCFlbGVtZW50LnNlbGVjdGVkSXRlbSAmJiBlbGVtZW50Lml0ZW1zICYmIGVsZW1lbnQuaXRlbXMubGVuZ3RoID4gMCkge1xyXG4gICAgZWxlbWVudC5zZWxlY3RlZEluZGV4ID0gMDtcclxuICB9XHJcbn1cclxuXHJcbi8vIEVuc3VyZSB0aGUgZ2l2ZW4gaW5kZXggaXMgd2l0aGluIGJvdW5kcywgYW5kIHNlbGVjdCBpdCBpZiBpdCdzIG5vdCBhbHJlYWR5XHJcbi8vIHNlbGVjdGVkLlxyXG5mdW5jdGlvbiBzZWxlY3RJbmRleChlbGVtZW50LCBpbmRleCkge1xyXG4gIGxldCBib3VuZGVkSW5kZXggPSBNYXRoLm1heChNYXRoLm1pbihpbmRleCwgZWxlbWVudC5pdGVtcy5sZW5ndGggLSAxKSwgMCk7XHJcbiAgbGV0IHByZXZpb3VzSW5kZXggPSBlbGVtZW50LnNlbGVjdGVkSW5kZXg7XHJcbiAgaWYgKHByZXZpb3VzSW5kZXggIT09IGJvdW5kZWRJbmRleCkge1xyXG4gICAgZWxlbWVudC5zZWxlY3RlZEluZGV4ID0gYm91bmRlZEluZGV4O1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbi8vIEZvbGxvd2luZyBhIGNoYW5nZSBpbiBzZWxlY3Rpb24sIHJlcG9ydCB3aGV0aGVyIGl0J3Mgbm93IHBvc3NpYmxlIHRvXHJcbi8vIGdvIG5leHQvcHJldmlvdXMgZnJvbSB0aGUgZ2l2ZW4gaW5kZXguXHJcbmZ1bmN0aW9uIHVwZGF0ZVBvc3NpYmxlTmF2aWdhdGlvbnMoZWxlbWVudCwgaW5kZXgpIHtcclxuICBsZXQgY2FuU2VsZWN0TmV4dDtcclxuICBsZXQgY2FuU2VsZWN0UHJldmlvdXM7XHJcbiAgbGV0IGl0ZW1zID0gZWxlbWVudC5pdGVtcztcclxuICBpZiAoaXRlbXMgPT0gbnVsbCB8fCBpdGVtcy5sZW5ndGggPT09IDApIHtcclxuICAgIGNhblNlbGVjdE5leHQgPSBmYWxzZTtcclxuICAgIGNhblNlbGVjdFByZXZpb3VzID0gZmFsc2U7XHJcbiAgfSBlbHNlIGlmIChpdGVtcy5sZW5ndGggPT09IDEpIHtcclxuICAgIC8vIFNwZWNpYWwgY2FzZS4gSWYgdGhlcmUncyBubyBzZWxlY3Rpb24sIHdlIGRlY2xhcmUgdGhhdCBpdCdzIGFsd2F5c1xyXG4gICAgLy8gcG9zc2libGUgdG8gZ28gbmV4dC9wcmV2aW91cyB0byBjcmVhdGUgYSBzZWxlY3Rpb24uXHJcbiAgICBjYW5TZWxlY3ROZXh0ID0gdHJ1ZTtcclxuICAgIGNhblNlbGVjdFByZXZpb3VzID0gdHJ1ZTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gTm9ybWFsIGNhc2U6IHdlIGhhdmUgYW4gaW5kZXggaW4gYSBsaXN0IHRoYXQgaGFzIGl0ZW1zLlxyXG4gICAgY2FuU2VsZWN0UHJldmlvdXMgPSAoaW5kZXggPiAwKTtcclxuICAgIGNhblNlbGVjdE5leHQgPSAoaW5kZXggPCBpdGVtcy5sZW5ndGggLSAxKTtcclxuICB9XHJcbiAgZWxlbWVudC5jYW5TZWxlY3ROZXh0ID0gY2FuU2VsZWN0TmV4dDtcclxuICBlbGVtZW50LmNhblNlbGVjdFByZXZpb3VzID0gY2FuU2VsZWN0UHJldmlvdXM7XHJcbn1cclxuIiwiLy8gVE9ETzogUHJvdmlkZSBiYXNlbGluZSBiZWhhdmlvciBmb3IgdGhpcyBtaXhpbiB3aGVuIHVzZWQgb3V0c2lkZSBvZiBhXHJcbi8vIGNvbGxlY3RpdmUuXHJcblxyXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIEtleWJvYXJkLiAqL1xyXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xyXG5cclxuICAvKipcclxuICAgKiBNaXhpbiB3aGljaCBtYW5hZ2VzIHRoZSBrZXlkb3duIGhhbmRsaW5nIGZvciBhIGNvbXBvbmVudC5cclxuICAgKlxyXG4gICAqIFRoaXMgbWl4aW4gaGFuZGxlcyBzZXZlcmFsIGtleWJvYXJkLXJlbGF0ZWQgZmVhdHVyZXMuXHJcbiAgICpcclxuICAgKiBGaXJzdCwgaXQgd2lyZXMgdXAgYSBzaW5nbGUga2V5ZG93biBldmVudCBoYW5kbGVyIHRoYXQgY2FuIGJlIHNoYXJlZCBieVxyXG4gICAqIG11bHRpcGxlIG1peGlucyBvbiBhIGNvbXBvbmVudC4gVGhlIGV2ZW50IGhhbmRsZXIgd2lsbCBpbnZva2UgYSBga2V5ZG93bmBcclxuICAgKiBtZXRob2Qgd2l0aCB0aGUgZXZlbnQgb2JqZWN0LCBhbmQgYW55IG1peGluIGFsb25nIHRoZSBwcm90b3R5cGUgY2hhaW4gdGhhdFxyXG4gICAqIHdhbnRzIHRvIGhhbmRsZSB0aGF0IG1ldGhvZCBjYW4gZG8gc28uXHJcbiAgICpcclxuICAgKiBJZiBhIG1peGluIHdhbnRzIHRvIGluZGljYXRlIHRoYXQga2V5Ym9hcmQgZXZlbnQgaGFzIGJlZW4gaGFuZGxlZCwgYW5kIHRoYXRcclxuICAgKiBvdGhlciBtaXhpbnMgc2hvdWxkICpub3QqIGhhbmRsZSBpdCwgdGhlIG1peGluJ3MgYGtleWRvd25gIGhhbmRsZXIgc2hvdWxkXHJcbiAgICogcmV0dXJuIGEgdmFsdWUgb2YgdHJ1ZS4gVGhlIGNvbnZlbnRpb24gdGhhdCBzZWVtcyB0byB3b3JrIHdlbGwgaXMgdGhhdCBhXHJcbiAgICogbWl4aW4gc2hvdWxkIHNlZSBpZiBpdCB3YW50cyB0byBoYW5kbGUgdGhlIGV2ZW50IGFuZCwgaWYgbm90LCB0aGVuIGFzayB0aGVcclxuICAgKiBzdXBlcmNsYXNzIHRvIHNlZSBpZiBpdCB3YW50cyB0byBoYW5kbGUgdGhlIGV2ZW50LiBUaGlzIGhhcyB0aGUgZWZmZWN0IG9mXHJcbiAgICogZ2l2aW5nIHRoZSBtaXhpbiB0aGF0IHdhcyBhcHBsaWVkIGxhc3QgdGhlIGZpcnN0IGNoYW5jZSBhdCBoYW5kbGluZyBhXHJcbiAgICoga2V5Ym9hcmQgZXZlbnQuXHJcbiAgICpcclxuICAgKiBFeGFtcGxlOlxyXG4gICAqXHJcbiAgICogICAgIGtleWRvd24oZXZlbnQpIHtcclxuICAgKiAgICAgICBsZXQgaGFuZGxlZDtcclxuICAgKiAgICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcclxuICAgKiAgICAgICAgIC8vIEhhbmRsZSB0aGUga2V5cyB5b3Ugd2FudCwgc2V0dGluZyBoYW5kbGVkID0gdHJ1ZSBpZiBhcHByb3ByaWF0ZS5cclxuICAgKiAgICAgICB9XHJcbiAgICogICAgICAgLy8gUHJlZmVyIG1peGluIHJlc3VsdCBpZiBpdCdzIGRlZmluZWQsIG90aGVyd2lzZSB1c2UgYmFzZSByZXN1bHQuXHJcbiAgICogICAgICAgcmV0dXJuIGhhbmRsZWQgfHwgKHN1cGVyLmtleWRvd24gJiYgc3VwZXIua2V5ZG93bihldmVudCkpO1xyXG4gICAqICAgICB9XHJcbiAgICpcclxuICAgKiBBIHNlY29uZCBmZWF0dXJlIHByb3ZpZGVkIGJ5IHRoaXMgbWl4aW4gaXMgdGhhdCBpdCBpbXBsaWNpdGx5IG1ha2VzIHRoZVxyXG4gICAqIGNvbXBvbmVudCBhIHRhYiBzdG9wIGlmIGl0IGlzbid0IGFscmVhZHksIGJ5IHNldHRpbmcgYHRhYkluZGV4YCB0byAwLiBUaGlzXHJcbiAgICogaGFzIHRoZSBlZmZlY3Qgb2YgYWRkaW5nIHRoZSBjb21wb25lbnQgdG8gdGhlIHRhYiBvcmRlciBpbiBkb2N1bWVudCBvcmRlci5cclxuICAgKlxyXG4gICAqIEZpbmFsbHksIHRoaXMgbWl4aW4gaXMgZGVzaWduZWQgdG8gd29yayB3aXRoIHRoZSBvcHRpb25hbCBDb2xsZWN0aXZlIGNsYXNzXHJcbiAgICogdmlhIGEgbWl4aW4gbGlrZSBUYXJnZXRJbkNvbGxlY3RpdmUuIFRoaXMgYWxsb3dzIGEgc2V0IG9mIHJlbGF0ZWQgY29tcG9uZW50XHJcbiAgICogaW5zdGFuY2VzIHRvIGNvb3BlcmF0aXZlbHkgaGFuZGxlIHRoZSBrZXlib2FyZC4gU2VlIHRoZSBDb2xsZWN0aXZlIGNsYXNzXHJcbiAgICogZm9yIGRldGFpbHMuXHJcbiAgICovXHJcbiAgY2xhc3MgS2V5Ym9hcmQgZXh0ZW5kcyBiYXNlIHtcclxuXHJcbiAgICBjcmVhdGVkQ2FsbGJhY2soKSB7XHJcbiAgICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cclxuXHJcbiAgICAgIC8vIEFzc3VtZSB0aGlzIGNvbXBvbmVudCBpcyBnb2luZyB0byBoYW5kbGUgdGhlIGtleWJvYXJkIG9uIGl0cyBvd24uXHJcbiAgICAgIHN0YXJ0TGlzdGVuaW5nVG9LZXlkb3duKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGFuZGxlIHRoZSBpbmRpY2F0ZWQga2V5Ym9hcmQgZXZlbnQuXHJcbiAgICAgKlxyXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLiBUaGlzIHdpbGxcclxuICAgICAqIHR5cGljYWxseSBiZSBoYW5kbGVkIGJ5IG90aGVyIG1peGlucy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGV2ZW50IC0gdGhlIGtleWJvYXJkIGV2ZW50XHJcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZSBldmVudCB3YXMgaGFuZGxlZFxyXG4gICAgICovXHJcbiAgICBrZXlkb3duKGV2ZW50KSB7XHJcbiAgICAgIGlmIChzdXBlci5rZXlkb3duKSB7IHJldHVybiBzdXBlci5rZXlkb3duKGV2ZW50KTsgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBJZiB3ZSdyZSBub3cgdGhlIG91dGVybW9zdCBlbGVtZW50IG9mIHRoZSBjb2xsZWN0aXZlLCBzZXQgdXAgdG8gcmVjZWl2ZVxyXG4gICAgICoga2V5Ym9hcmQgZXZlbnRzLiBJZiB3ZSdyZSBubyBsb25nZXIgdGhlIG91dGVybW9zdCBlbGVtZW50LCBzdG9wXHJcbiAgICAgKiBsaXN0ZW5pbmcuXHJcbiAgICAgKi9cclxuICAgIGNvbGxlY3RpdmVDaGFuZ2VkKCkge1xyXG4gICAgICBpZiAoc3VwZXIuY29sbGVjdGl2ZUNoYW5nZWQpIHsgc3VwZXIuY29sbGVjdGl2ZUNoYW5nZWQoKTsgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuY29sbGVjdGl2ZS5vdXRlcm1vc3RFbGVtZW50ICE9PSB0aGlzKSB7XHJcbiAgICAgICAgLy8gV2UncmUgbm8gbG9uZ2VyIHRoZSBvdXRlcm1vc3QgZWxlbWVudDsgc3RvcCBsaXN0ZW5pbmcuXHJcbiAgICAgICAgaWYgKGlzTGlzdGVuaW5nVG9LZXlkb3duKHRoaXMpKSB7XHJcbiAgICAgICAgICBzdG9wTGlzdGVuaW5nVG9LZXlkb3duKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghdGhpcy5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xyXG4gICAgICAgIC8vIFNpbmNlIHdlJ3JlIGdvaW5nIHRvIGhhbmRsZSB0aGUga2V5Ym9hcmQsIHNlZSBpZiB3ZSBjYW4gYWRvcHQgYW4gQVJJQVxyXG4gICAgICAgIC8vIGxhYmVsIGZyb20gYW4gaW5uZXIgZWxlbWVudCBvZiB0aGUgY29sbGVjdGl2ZS5cclxuICAgICAgICBsZXQgbGFiZWwgPSBnZXRDb2xsZWN0aXZlQXJpYUxhYmVsKHRoaXMuY29sbGVjdGl2ZSk7XHJcbiAgICAgICAgaWYgKGxhYmVsKSB7XHJcbiAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIGxhYmVsKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghaXNMaXN0ZW5pbmdUb0tleWRvd24odGhpcykpIHtcclxuICAgICAgICBzdGFydExpc3RlbmluZ1RvS2V5ZG93bih0aGlzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIHJldHVybiBLZXlib2FyZDtcclxufTtcclxuXHJcblxyXG4vLyBGaXJlIHRoZSBrZXlkb3duKCkgbWV0aG9kIG9uIHRoZSBlbGVtZW50IG9yIChpZiBpdCBiZWxvbmdzIHRvIGEgY29sbGVjdGl2ZSlcclxuLy8gYWxsIGVsZW1lbnRzIGluIHRoZSBjb2xsZWN0aXZlLlxyXG4vL1xyXG4vLyBOb3RlOiB0aGUgdmFsdWUgb2YgJ3RoaXMnIGlzIGJvdW5kIHRvIHRoZSBlbGVtZW50IHdoaWNoIHJlY2VpdmVkIHRoZSBldmVudC5cclxuZnVuY3Rpb24ga2V5ZG93bihldmVudCkge1xyXG5cclxuICBsZXQgaGFuZGxlZCA9IGZhbHNlO1xyXG5cclxuICBpZiAodGhpcy5jb2xsZWN0aXZlKSB7XHJcbiAgICAvLyBHaXZlIGNvbGxlY3RpdmUgZWxlbWVudHMgYSBzaG90IGF0IHRoZSBldmVudCwgd29ya2luZyBmcm9tIGlubmVybW9zdCB0b1xyXG4gICAgLy8gb3V0ZXJtb3N0ICh0aGlzIGVsZW1lbnQpLlxyXG4gICAgbGV0IGVsZW1lbnRzID0gdGhpcy5jb2xsZWN0aXZlLmVsZW1lbnRzO1xyXG4gICAgZm9yIChsZXQgaSA9IGVsZW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgIGxldCBlbGVtZW50ID0gZWxlbWVudHNbaV07XHJcbiAgICAgIGhhbmRsZWQgPSBlbGVtZW50LmtleWRvd24gJiYgZWxlbWVudC5rZXlkb3duKGV2ZW50KTtcclxuICAgICAgaWYgKGhhbmRsZWQpIHtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBDb21wb25lbnQgaXMgaGFuZGxpbmcgdGhlIGtleWJvYXJkIG9uIGl0cyBvd24uXHJcbiAgICBoYW5kbGVkID0gdGhpcy5rZXlkb3duKGV2ZW50KTtcclxuICB9XHJcblxyXG4gIGlmIChoYW5kbGVkKSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLy8gUmV0dXJuIHRoZSBmaXJzdCBBUklBIGxhYmVsIGRlZmluZWQgYnkgdGhlIGNvbGxlY3RpdmUuXHJcbmZ1bmN0aW9uIGdldENvbGxlY3RpdmVBcmlhTGFiZWwoY29sbGVjdGl2ZSkge1xyXG4gIGxldCBsYWJlbHMgPSBjb2xsZWN0aXZlLmVsZW1lbnRzLm1hcChlbGVtZW50ID0+IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJykpO1xyXG4gIC8vIFdvdWxkIHByZWZlciB0byB1c2UgQXJyYXkucHJvdG90eXBlLmZpbmQgaGVyZSwgYnV0IElFIDExIGRvZXNuJ3QgaGF2ZSBpdC5cclxuICBsZXQgbm9uTnVsbExhYmVscyA9IGxhYmVscy5maWx0ZXIobGFiZWwgPT4gbGFiZWwgIT0gbnVsbCk7XHJcbiAgcmV0dXJuIG5vbk51bGxMYWJlbHNbMF07XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBpc0xpc3RlbmluZ1RvS2V5ZG93bihlbGVtZW50KSB7XHJcbiAgcmV0dXJuIGVsZW1lbnQuX2tleWRvd25MaXN0ZW5lciAhPSBudWxsO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc3RhcnRMaXN0ZW5pbmdUb0tleWRvd24oZWxlbWVudCkge1xyXG4gIGVsZW1lbnQuX2tleWRvd25MaXN0ZW5lciA9IGtleWRvd24uYmluZChlbGVtZW50KTtcclxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlbGVtZW50Ll9rZXlkb3duTGlzdGVuZXIpO1xyXG4gIC8vIFNldCBhIGRlZmF1bHQgdGFiIGluZGV4IG9mIDAgKGRvY3VtZW50IG9yZGVyKSBpZiBubyB0YWIgaW5kZXggZXhpc3RzLlxyXG4gIC8vIE1TIEVkZ2UgcmVxdWlyZXMgd2UgZXhwbGljaXRseSBjaGVjayBmb3IgcHJlc2VuY2Ugb2YgdGFiaW5kZXggYXR0cmlidXRlLlxyXG4gIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSA9PSBudWxsIHx8IGVsZW1lbnQudGFiSW5kZXggPCAwKSB7XHJcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHN0b3BMaXN0ZW5pbmdUb0tleWRvd24oZWxlbWVudCkge1xyXG4gIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGVsZW1lbnQuX2tleWRvd25MaXN0ZW5lcik7XHJcbiAgZWxlbWVudC5fa2V5ZG93bkxpc3RlbmVyID0gbnVsbDtcclxuICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcclxufVxyXG4iLCIvKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIEtleWJvYXJkRGlyZWN0aW9uLiAqL1xyXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xyXG5cclxuICAvKipcclxuICAgKiBNaXhpbiB3aGljaCBtYXBzIGRpcmVjdGlvbiBrZXlzIChMZWZ0LCBSaWdodCwgZXRjLikgdG8gZGlyZWN0aW9uIHNlbWFudGljc1xyXG4gICAqIChnbyBsZWZ0LCBnbyByaWdodCwgZXRjLikuXHJcbiAgICpcclxuICAgKiBUaGlzIG1peGluIGV4cGVjdHMgdGhlIGNvbXBvbmVudCB0byBpbnZva2UgYSBga2V5ZG93bmAgbWV0aG9kIHdoZW4gYSBrZXkgaXNcclxuICAgKiBwcmVzc2VkLiBZb3UgY2FuIHVzZSB0aGUgS2V5Ym9hcmQgbWl4aW4gZm9yIHRoYXQgcHVycG9zZSwgb3Igd2lyZSB1cCB5b3VyXHJcbiAgICogb3duIGtleWJvYXJkIGhhbmRsaW5nIGFuZCBjYWxsIGBrZXlkb3duYCB5b3Vyc2VsZi5cclxuICAgKlxyXG4gICAqIFRoaXMgbWl4aW4gY2FsbHMgbWV0aG9kcyBzdWNoIGFzIGBnb0xlZnRgIGFuZCBgZ29SaWdodGAuIFlvdSBjYW4gZGVmaW5lXHJcbiAgICogd2hhdCB0aGF0IG1lYW5zIGJ5IGltcGxlbWVudGluZyB0aG9zZSBtZXRob2RzIHlvdXJzZWxmLiBJZiB5b3Ugd2FudCB0byB1c2VcclxuICAgKiBkaXJlY3Rpb24ga2V5cyB0byBuYXZpZ2F0ZSBhIHNlbGVjdGlvbiwgdXNlIHRoaXMgbWl4aW4gd2l0aCB0aGVcclxuICAgKiBEaXJlY3Rpb25TZWxlY3Rpb24gbWl4aW4uXHJcbiAgICovXHJcbiAgY2xhc3MgS2V5Ym9hcmREaXJlY3Rpb24gZXh0ZW5kcyBiYXNlIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSBkb3duLlxyXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLlxyXG4gICAgICovXHJcbiAgICBnb0Rvd24oKSB7XHJcbiAgICAgIGlmIChzdXBlci5nb0Rvd24pIHsgcmV0dXJuIHN1cGVyLmdvRG93bigpOyB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgdG8gdGhlIGVuZCAoZS5nLiwgb2YgYSBsaXN0KS5cclxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy5cclxuICAgICAqL1xyXG4gICAgZ29FbmQoKSB7XHJcbiAgICAgIGlmIChzdXBlci5nb0VuZCkgeyByZXR1cm4gc3VwZXIuZ29FbmQoKTsgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIGxlZnQuXHJcbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuXHJcbiAgICAgKi9cclxuICAgIGdvTGVmdCgpIHtcclxuICAgICAgaWYgKHN1cGVyLmdvTGVmdCkgeyByZXR1cm4gc3VwZXIuZ29MZWZ0KCk7IH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSByaWdodC5cclxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy5cclxuICAgICAqL1xyXG4gICAgZ29SaWdodCgpIHtcclxuICAgICAgaWYgKHN1cGVyLmdvUmlnaHQpIHsgcmV0dXJuIHN1cGVyLmdvUmlnaHQoKTsgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIHRvIHRoZSBzdGFydCAoZS5nLiwgb2YgYVxyXG4gICAgICogbGlzdCkuIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy5cclxuICAgICAqL1xyXG4gICAgZ29TdGFydCgpIHtcclxuICAgICAgaWYgKHN1cGVyLmdvU3RhcnQpIHsgcmV0dXJuIHN1cGVyLmdvU3RhcnQoKTsgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIHVwLlxyXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLlxyXG4gICAgICovXHJcbiAgICBnb1VwKCkge1xyXG4gICAgICBpZiAoc3VwZXIuZ29VcCkgeyByZXR1cm4gc3VwZXIuZ29VcCgpOyB9XHJcbiAgICB9XHJcblxyXG4gICAga2V5ZG93bihldmVudCkge1xyXG4gICAgICBsZXQgaGFuZGxlZDtcclxuICAgICAgLy8gSWdub3JlIExlZnQvUmlnaHQga2V5cyB3aGVuIG1ldGFLZXkgb3IgYWx0S2V5IG1vZGlmaWVyIGlzIGFsc28gcHJlc3NlZCxcclxuICAgICAgLy8gYXMgdGhlIHVzZXIgbWF5IGJlIHRyeWluZyB0byBuYXZpZ2F0ZSBiYWNrIG9yIGZvcndhcmQgaW4gdGhlIGJyb3dzZXIuXHJcbiAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICAgIGNhc2UgMzU6IC8vIEVuZFxyXG4gICAgICAgICAgaGFuZGxlZCA9IHRoaXMuZ29FbmQoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMzY6IC8vIEhvbWVcclxuICAgICAgICAgIGhhbmRsZWQgPSB0aGlzLmdvU3RhcnQoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMzc6IC8vIExlZnRcclxuICAgICAgICAgIGlmICghZXZlbnQubWV0YUtleSAmJiAhZXZlbnQuYWx0S2V5KSB7XHJcbiAgICAgICAgICAgIGhhbmRsZWQgPSB0aGlzLmdvTGVmdCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAzODogLy8gVXBcclxuICAgICAgICAgIGhhbmRsZWQgPSBldmVudC5hbHRLZXkgPyB0aGlzLmdvU3RhcnQoKSA6IHRoaXMuZ29VcCgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAzOTogLy8gUmlnaHRcclxuICAgICAgICAgIGlmICghZXZlbnQubWV0YUtleSAmJiAhZXZlbnQuYWx0S2V5KSB7XHJcbiAgICAgICAgICAgIGhhbmRsZWQgPSB0aGlzLmdvUmlnaHQoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgNDA6IC8vIERvd25cclxuICAgICAgICAgIGhhbmRsZWQgPSBldmVudC5hbHRLZXkgPyB0aGlzLmdvRW5kKCkgOiB0aGlzLmdvRG93bigpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgLy8gUHJlZmVyIG1peGluIHJlc3VsdCBpZiBpdCdzIGRlZmluZWQsIG90aGVyd2lzZSB1c2UgYmFzZSByZXN1bHQuXHJcbiAgICAgIHJldHVybiBoYW5kbGVkIHx8IChzdXBlci5rZXlkb3duICYmIHN1cGVyLmtleWRvd24oZXZlbnQpKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICByZXR1cm4gS2V5Ym9hcmREaXJlY3Rpb247XHJcbn07XHJcbiIsImltcG9ydCBtaWNyb3Rhc2sgZnJvbSAnLi9taWNyb3Rhc2snO1xyXG5cclxuLy8gVE9ETzogU2hvdWxkIHRoaXMgYmUgcmVuYW1lZCB0byBzb21ldGhpbmcgbGlrZSBEaXN0cmlidXRlZENoaWxkcmVuQ2hhbmdlZD9cclxuXHJcbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggT2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzLiAqL1xyXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xyXG5cclxuICAvKipcclxuICAgKiBNaXhpbiB3aGljaCB3aXJlcyB1cCBtdXRhdGlvbiBvYnNlcnZlcnMgdG8gcmVwb3J0IGFueSBjaGFuZ2VzIGluIGFcclxuICAgKiBjb21wb25lbnQncyBjb250ZW50IChkaXJlY3QgY2hpbGRyZW4sIG9yIG5vZGVzIGRpc3RyaWJ1dGVkIHRvIHNsb3RzKS5cclxuICAgKlxyXG4gICAqIEZvciB0aGUgdGltZSBiZWluZywgdGhpcyBjYW4gb25seSBzdXBwb3J0IGEgc2luZ2xlIGxldmVsIG9mIGRpc3RyaWJ1dGVkXHJcbiAgICogY29udGVudC4gVGhhdCBpcywgaWYgYSBjb21wb25lbnQgY29udGFpbnMgYSBzbG90LCBhbmQgdGhlIHNldCBvZiBub2Rlc1xyXG4gICAqIGRpcmVjdGx5IGFzc2lnbmVkIHRvIHRoYXQgc2xvdCBjaGFuZ2VzLCB0aGVuIHRoaXMgbWl4aW4gd2lsbCBkZXRlY3QgdGhlXHJcbiAgICogY2hhbmdlLiBIb3dldmVyLCB0aGlzIG1peGluIGRvZXMgbm90IHlldCBkZXRlY3QgY2hhbmdlcyBpbiByZXByb2plY3RlZFxyXG4gICAqIG5vZGVzLiBJZiBhIGNvbXBvbmVudCdzIGhvc3QgcGxhY2VzIGEgc2xvdCBhcyBhIGNoaWxkIG9mIHRoZSBjb21wb25lbnRcclxuICAgKiBpbnN0YW5jZSwgbm9kZXMgYXNzaWduZWQgdG8gdGhlIG91dGVyIGhvc3Qgd2lsbCBiZSBhc3NpZ25lZCB0byB0aGUgaG9zdCdzXHJcbiAgICogc2xvdCwgdGhlbiByZWFzc2lnbmVkIHRvIHRoZSBzbG90IGVsZW1lbnQgaW5zaWRlIHRoZSBjb21wb25lbnQuIENoYW5nZXMgaW5cclxuICAgKiBzdWNoIHJlcHJvamVjdGVkIG5vZGVzIHdpbGwgbm90ICh5ZXQpIGJlIGRldGVjdGVkIGJ5IHRoaXMgbWl4aW4uXHJcbiAgICpcclxuICAgKiBGb3IgY29tcGFyaXNvbiwgc2VlIFBvbHltZXIncyBvYnNlcnZlTm9kZXMgQVBJLCB3aGljaCBkb2VzIHNvbHZlIHRoZVxyXG4gICAqIHByb2JsZW0gb2YgdHJhY2tpbmcgY2hhbmdlcyBpbiByZXByb2plY3RlZCBjb250ZW50LlxyXG4gICAqXHJcbiAgICogTm90ZTogVGhlIHdlYiBwbGF0Zm9ybSB0ZWFtIGNyZWF0aW5nIHRoZSBzcGVjaWZpY2F0aW9ucyBmb3Igd2ViIGNvbXBvbmVudHNcclxuICAgKiBwbGFuIHRvIHJlcXVlc3QgdGhhdCBhIG5ldyB0eXBlIG9mIE11dGF0aW9uT2JzZXJ2ZXIgb3B0aW9uIGJlIGRlZmluZWQgdGhhdFxyXG4gICAqIGxldHMgYSBjb21wb25lbnQgbW9uaXRvciBjaGFuZ2VzIGluIGRpc3RyaWJ1dGVkIGNoaWxkcmVuLiBUaGlzIG1peGluIHdpbGxcclxuICAgKiBiZSB1cGRhdGVkIHRvIHRha2UgYWR2YW50YWdlIG9mIHRoYXQgTXV0YXRpb25PYnNlcnZlciBvcHRpb24gd2hlbiB0aGF0XHJcbiAgICogYmVjb21lcyBhdmFpbGFibGUuXHJcbiAgICovXHJcbiAgY2xhc3MgT2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzIGV4dGVuZHMgYmFzZSB7XHJcblxyXG4gICAgY3JlYXRlZENhbGxiYWNrKCkge1xyXG4gICAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XHJcbiAgICAgIG9ic2VydmVDb250ZW50Q2hhbmdlcyh0aGlzKTtcclxuXHJcbiAgICAgIC8vIE1ha2UgYW4gaW5pdGlhbCBjYWxsIHRvIGNvbnRlbnRDaGFuZ2VkKCkgc28gdGhhdCB0aGUgY29tcG9uZW50IGNhbiBkb1xyXG4gICAgICAvLyBpbml0aWFsaXphdGlvbiB0aGF0IGl0IG5vcm1hbGx5IGRvZXMgd2hlbiBjb250ZW50IGNoYW5nZXMuXHJcbiAgICAgIC8vXHJcbiAgICAgIC8vIFRoaXMgd2lsbCBpbnZva2UgY29udGVudENoYW5nZWQoKSBoYW5kbGVycyBpbiBvdGhlciBtaXhpbnMuIEluIG9yZGVyXHJcbiAgICAgIC8vIHRoYXQgdGhvc2UgbWl4aW5zIGhhdmUgYSBjaGFuY2UgdG8gY29tcGxldGUgdGhlaXIgb3duIGluaXRpYWxpemF0aW9uLFxyXG4gICAgICAvLyB3ZSBhZGQgdGhlIGNvbnRlbnRDaGFuZ2VkKCkgY2FsbCB0byB0aGUgbWljcm90YXNrIHF1ZXVlLlxyXG4gICAgICBtaWNyb3Rhc2soKCkgPT4gdGhpcy5jb250ZW50Q2hhbmdlZCgpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgY29udGVudHMgb2YgdGhlIGNvbXBvbmVudCAoaW5jbHVkaW5nIGRpc3RyaWJ1dGVkXHJcbiAgICAgKiBjaGlsZHJlbikgaGF2ZSBjaGFuZ2VkLlxyXG4gICAgICpcclxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGFsc28gaW52b2tlZCB3aGVuIGEgY29tcG9uZW50IGlzIGZpcnN0IGluc3RhbnRpYXRlZDsgdGhlXHJcbiAgICAgKiBjb250ZW50cyBoYXZlIGVzc2VudGlhbGx5IFwiY2hhbmdlZFwiIGZyb20gYmVpbmcgbm90aGluZy4gVGhpcyBhbGxvd3MgdGhlXHJcbiAgICAgKiBjb21wb25lbnQgdG8gcGVyZm9ybSBpbml0aWFsIHByb2Nlc3Npbmcgb2YgaXRzIGNoaWxkcmVuLlxyXG4gICAgICovXHJcbiAgICBjb250ZW50Q2hhbmdlZCgpIHtcclxuICAgICAgaWYgKHN1cGVyLmNvbnRlbnRDaGFuZ2VkKSB7IHN1cGVyLmNvbnRlbnRDaGFuZ2VkKCk7IH1cclxuICAgICAgbGV0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdjb250ZW50LWNoYW5nZWQnKTtcclxuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgZXZlbnQgaXMgcmFpc2VkIHdoZW4gdGhlIGNvbXBvbmVudCdzIGNvbnRlbnRzIChpbmNsdWRpbmcgZGlzdHJpYnV0ZWRcclxuICAgICAqIGNoaWxkcmVuKSBoYXZlIGNoYW5nZWQuXHJcbiAgICAgKlxyXG4gICAgICogQGV2ZW50IGNvbnRlbnQtY2hhbmdlZFxyXG4gICAgICovXHJcbiAgfVxyXG5cclxuICByZXR1cm4gT2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzO1xyXG59O1xyXG5cclxuXHJcbi8vIFRPRE86IERlY2lkZSB3aGV0aGVyIHdlIHdhbnQgYW4gb3B0aW9uIHRvIHRyYWNrIGNoYW5nZXMgdG8gY2hpbGRyZW5cclxuLy8gYXR0cmlidXRlcy5cclxuZnVuY3Rpb24gb2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzKGVsZW1lbnQpIHtcclxuICBlbGVtZW50Ll9jb250ZW50Q2hhbmdlT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PlxyXG4gICAgZWxlbWVudC5jb250ZW50Q2hhbmdlZCgpXHJcbiAgKTtcclxuICBlbGVtZW50Ll9jb250ZW50Q2hhbmdlT2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50LCB7XHJcbiAgICAvLyBhdHRyaWJ1dGVzOiB0cnVlLFxyXG4gICAgY2hhcmFjdGVyRGF0YTogdHJ1ZSxcclxuICAgIGNoaWxkTGlzdDogdHJ1ZSxcclxuICAgIHN1YnRyZWU6IHRydWVcclxuICB9KTtcclxufVxyXG4iLCIvLyBVc2VkIHRvIGFzc2lnbiB1bmlxdWUgSURzIHRvIGl0ZW0gZWxlbWVudHMgd2l0aG91dCBJRHMuXHJcbmxldCBpZENvdW50ID0gMDtcclxuXHJcblxyXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFNlbGVjdGlvbkFyaWFBY3RpdmUuICovXHJcbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XHJcblxyXG4gIC8qKlxyXG4gICAqIE1peGluIHdoaWNoIHRyZWF0cyB0aGUgc2VsZWN0ZWQgaXRlbSBpbiBhIGxpc3QgYXMgdGhlIGFjdGl2ZSBpdGVtIGluIEFSSUFcclxuICAgKiBhY2Nlc3NpYmlsaXR5IHRlcm1zLlxyXG4gICAqXHJcbiAgICogSGFuZGxpbmcgQVJJQSBzZWxlY3Rpb24gc3RhdGUgcHJvcGVybHkgaXMgYWN0dWFsbHkgcXVpdGUgY29tcGxleDpcclxuICAgKlxyXG4gICAqICogVGhlIGl0ZW1zIGluIHRoZSBsaXN0IG5lZWQgdG8gYmUgaW5kaWNhdGVkIGFzIHBvc3NpYmxlIGl0ZW1zIHZpYSBhbiBBUklBXHJcbiAgICogICBgcm9sZWAgYXR0cmlidXRlIHZhbHVlIHN1Y2ggYXMgXCJvcHRpb25cIi5cclxuICAgKiAqIFRoZSBzZWxlY3RlZCBpdGVtIG5lZWQgdG8gYmUgbWFya2VkIGFzIHNlbGVjdGVkIGJ5IHNldHRpbmcgdGhlIGl0ZW0nc1xyXG4gICAqICAgYGFyaWEtc2VsZWN0ZWRgIGF0dHJpYnV0ZSB0byB0cnVlICphbmQqIHRoZSBvdGhlciBpdGVtcyBuZWVkIGJlIG1hcmtlZCBhc1xyXG4gICAqICAgKm5vdCogc2VsZWN0ZWQgYnkgc2V0dGluZyBgYXJpYS1zZWxlY3RlZGAgdG8gZmFsc2UuXHJcbiAgICogKiBUaGUgb3V0ZXJtb3N0IGVsZW1lbnQgd2l0aCB0aGUga2V5Ym9hcmQgZm9jdXMgbmVlZHMgdG8gaGF2ZSBhdHRyaWJ1dGVzXHJcbiAgICogICBzZXQgb24gaXQgc28gdGhhdCB0aGUgc2VsZWN0aW9uIGlzIGtub3dhYmxlIGF0IHRoZSBsaXN0IGxldmVsIHZpYSB0aGVcclxuICAgKiAgIGBhcmlhLWFjdGl2ZWRlc2NlbmRhbnRgIGF0dHJpYnV0ZS5cclxuICAgKiAqIFVzZSBvZiBgYXJpYS1hY3RpdmVkZXNjZW5kYW50YCBpbiB0dXJuIHJlcXVpcmVzIHRoYXQgYWxsIGl0ZW1zIGluIHRoZVxyXG4gICAqICAgbGlzdCBoYXZlIElEIGF0dHJpYnV0ZXMgYXNzaWduZWQgdG8gdGhlbS5cclxuICAgKlxyXG4gICAqIFRoaXMgbWl4aW4gdHJpZXMgdG8gYWRkcmVzcyBhbGwgb2YgdGhlIGFib3ZlIHJlcXVpcmVtZW50cy4gVG8gdGhhdCBlbmQsXHJcbiAgICogdGhpcyBtaXhpbiB3aWxsIGFzc2lnbiBnZW5lcmF0ZWQgSURzIHRvIGFueSBpdGVtIHRoYXQgZG9lc24ndCBhbHJlYWR5IGhhdmVcclxuICAgKiBhbiBJRC5cclxuICAgKlxyXG4gICAqIEFSSUEgcmVsaWVzIG9uIGVsZW1lbnRzIHRvIHByb3ZpZGUgYHJvbGVgIGF0dHJpYnV0ZXMuIFRoaXMgbWl4aW4gd2lsbCBhcHBseVxyXG4gICAqIGEgZGVmYXVsdCByb2xlIG9mIFwibGlzdGJveFwiIG9uIHRoZSBvdXRlciBsaXN0IGlmIGl0IGRvZXNuJ3QgYWxyZWFkeSBoYXZlIGFuXHJcbiAgICogZXhwbGljaXQgcm9sZS4gU2ltaWxhcmx5LCB0aGlzIG1peGluIHdpbGwgYXBwbHkgYSBkZWZhdWx0IHJvbGUgb2YgXCJvcHRpb25cIlxyXG4gICAqIHRvIGFueSBsaXN0IGl0ZW0gdGhhdCBkb2VzIG5vdCBhbHJlYWR5IGhhdmUgYSByb2xlIHNwZWNpZmllZC5cclxuICAgKlxyXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyBhIHNldCBvZiBtZW1iZXJzIHRoYXQgbWFuYWdlIHRoZSBzdGF0ZSBvZiB0aGUgc2VsZWN0aW9uOlxyXG4gICAqIGBhcHBseVNlbGVjdGlvbmAsIGBpdGVtQWRkZWRgLCBhbmQgYHNlbGVjdGVkSW5kZXhgLiBZb3UgY2FuIHN1cHBseSB0aGVzZVxyXG4gICAqIHlvdXJzZWxmLCBvciBkbyBzbyB2aWEgdGhlIEl0ZW1zU2VsZWN0aW9uIG1peGluLlxyXG4gICAqXHJcbiAgICogTk9URTogRm9yIHRoZSB0aW1lIGJlaW5nLCB0aGlzIG1peGluIHNob3VsZCBiZSB1c2VkIHdpdGggdGhlXHJcbiAgICogVGFyZ2V0SW5Db2xsZWN0aXZlIG1peGluLiBUaGUgaW50ZW50aW9uIGlzIHRvIGV2ZW50dWFsbHkgYWxsb3cgdGhpcyBtaXhpblxyXG4gICAqIHRvIGJlIHVzZWQgd2l0aG91dCByZXF1aXJpbmcgY29sbGVjdGl2ZSBrZXlib2FyZCBzdXBwb3J0LCBzbyB0aGF0IHRoaXNcclxuICAgKiBtaXhpbiBjYW4gYmUgdXNlZCBvbiBpdHMgb3duLlxyXG4gICAqL1xyXG4gIGNsYXNzIFNlbGVjdGlvbkFyaWFBY3RpdmUgZXh0ZW5kcyBiYXNlIHtcclxuXHJcbiAgICBhcHBseVNlbGVjdGlvbihpdGVtLCBzZWxlY3RlZCkge1xyXG4gICAgICBpZiAoc3VwZXIuYXBwbHlTZWxlY3Rpb24pIHsgc3VwZXIuYXBwbHlTZWxlY3Rpb24oaXRlbSwgc2VsZWN0ZWQpOyB9XHJcbiAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgc2VsZWN0ZWQpO1xyXG4gICAgICBsZXQgaXRlbUlkID0gaXRlbS5nZXRBdHRyaWJ1dGUoJ2lkJyk7XHJcbiAgICAgIGlmIChpdGVtSWQpIHtcclxuICAgICAgICB0aGlzLmNvbGxlY3RpdmUub3V0ZXJtb3N0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcsIGl0ZW1JZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb2xsZWN0aXZlQ2hhbmdlZCgpIHtcclxuICAgICAgaWYgKHN1cGVyLmNvbGxlY3RpdmVDaGFuZ2VkKSB7IHN1cGVyLmNvbGxlY3RpdmVDaGFuZ2VkKCk7IH1cclxuXHJcbiAgICAgIC8vIEVuc3VyZSB0aGUgb3V0ZXJtb3N0IGFzcGVjdCBoYXMgYW4gQVJJQSByb2xlLlxyXG4gICAgICBsZXQgb3V0ZXJtb3N0RWxlbWVudCA9IHRoaXMuY29sbGVjdGl2ZS5vdXRlcm1vc3RFbGVtZW50O1xyXG4gICAgICBpZiAoIW91dGVybW9zdEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdyb2xlJykpIHtcclxuICAgICAgICAvLyBUcnkgdG8gcHJvbW90ZSBhbiBBUklBIHJvbGUgZnJvbSBhbiBpbm5lciBlbGVtZW50LiBJZiBub25lIGlzIGZvdW5kLFxyXG4gICAgICAgIC8vIHVzZSBhIGRlZmF1bHQgcm9sZS5cclxuICAgICAgICBsZXQgcm9sZSA9IGdldENvbGxlY3RpdmVBcmlhUm9sZSh0aGlzLmNvbGxlY3RpdmUpIHx8ICdsaXN0Ym94JztcclxuICAgICAgICBvdXRlcm1vc3RFbGVtZW50LnNldEF0dHJpYnV0ZSgncm9sZScsIHJvbGUpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghb3V0ZXJtb3N0RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcpKSB7XHJcbiAgICAgICAgLy8gVHJ5IHRvIHByb21vdGUgYW4gQVJJQSBhY3RpdmVkZXNjZW5kYW50IHZhbHVlIGZyb20gYW4gaW5uZXIgZWxlbWVudC5cclxuICAgICAgICBsZXQgZGVzY2VuZGFudCA9IGdldENvbGxlY3RpdmVBcmlhQWN0aXZlRGVzY2VuZGFudCh0aGlzLmNvbGxlY3RpdmUpO1xyXG4gICAgICAgIGlmIChkZXNjZW5kYW50KSB7XHJcbiAgICAgICAgICBvdXRlcm1vc3RFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1hY3RpdmVkZXNjZW5kYW50JywgZGVzY2VuZGFudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBSZW1vdmUgdGhlIEFSSUEgcm9sZSBhbmQgYWN0aXZlZGVzY2VuZGFudCB2YWx1ZXMgZnJvbSB0aGUgY29sbGVjdGl2ZSdzXHJcbiAgICAgIC8vIGlubmVyIGVsZW1lbnRzLlxyXG4gICAgICB0aGlzLmNvbGxlY3RpdmUuZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICBpZiAoZWxlbWVudCAhPT0gb3V0ZXJtb3N0RWxlbWVudCkge1xyXG4gICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcpO1xyXG4gICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3JvbGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZWRDYWxsYmFjaygpIHtcclxuICAgICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxyXG5cclxuICAgICAgLy8gRGV0ZXJtaW5lIGEgYmFzZSBpdGVtIElEIGJhc2VkIG9uIHRoaXMgY29tcG9uZW50J3MgaG9zdCdzIG93biBJRC4gVGhpc1xyXG4gICAgICAvLyB3aWxsIGJlIGNvbWJpbmVkIHdpdGggYSB1bmlxdWUgaW50ZWdlciB0byBhc3NpZ24gSURzIHRvIGl0ZW1zIHRoYXRcclxuICAgICAgLy8gZG9uJ3QgaGF2ZSBhbiBleHBsaWNpdCBJRC4gSWYgdGhlIGJhc2ljLWxpc3QtYm94IGhhcyBJRCBcImZvb1wiLCB0aGVuIGl0c1xyXG4gICAgICAvLyBpdGVtcyB3aWxsIGhhdmUgSURzIHRoYXQgbG9vayBsaWtlIFwiX2Zvb09wdGlvbjFcIi4gSWYgdGhlIGxpc3QgaGFzIG5vIElEXHJcbiAgICAgIC8vIGl0c2VsZiwgaXRzIGl0ZW1zIHdpbGwgZ2V0IElEcyB0aGF0IGxvb2sgbGlrZSBcIl9vcHRpb24xXCIuIEl0ZW0gSURzIGFyZVxyXG4gICAgICAvLyBwcmVmaXhlZCB3aXRoIGFuIHVuZGVyc2NvcmUgdG8gZGlmZmVyZW50aWF0ZSB0aGVtIGZyb21cclxuICAgICAgLy8gbWFudWFsbHktYXNzaWduZWQgSURzLCBhbmQgdG8gbWluaW1pemUgdGhlIHBvdGVudGlhbCBmb3IgSUQgY29uZmxpY3RzLlxyXG4gICAgICBsZXQgZWxlbWVudElkID0gdGhpcy5nZXRBdHRyaWJ1dGUoIFwiaWRcIiApO1xyXG4gICAgICB0aGlzLml0ZW1CYXNlSWQgPSBlbGVtZW50SWQgP1xyXG4gICAgICAgICAgXCJfXCIgKyBlbGVtZW50SWQgKyBcIk9wdGlvblwiIDpcclxuICAgICAgICAgIFwiX29wdGlvblwiO1xyXG4gICAgfVxyXG5cclxuICAgIGl0ZW1BZGRlZChpdGVtKSB7XHJcbiAgICAgIGlmIChzdXBlci5pdGVtQWRkZWQpIHsgc3VwZXIuaXRlbUFkZGVkKGl0ZW0pOyB9XHJcblxyXG4gICAgICBpdGVtLnNldEF0dHJpYnV0ZSgncm9sZScsICdvcHRpb24nKTtcclxuXHJcbiAgICAgIC8vIEVuc3VyZSBlYWNoIGl0ZW0gaGFzIGFuIElEIHNvIHdlIGNhbiBzZXQgYXJpYS1hY3RpdmVkZXNjZW5kYW50IG9uIHRoZVxyXG4gICAgICAvLyBvdmVyYWxsIGxpc3Qgd2hlbmV2ZXIgdGhlIHNlbGVjdGlvbiBjaGFuZ2VzLlxyXG4gICAgICBpZiAoIWl0ZW0uZ2V0QXR0cmlidXRlKCdpZCcpKSB7XHJcbiAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2lkJywgdGhpcy5pdGVtQmFzZUlkICsgaWRDb3VudCsrKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBzZWxlY3RlZEl0ZW0oKSB7XHJcbiAgICAgIHJldHVybiBzdXBlci5zZWxlY3RlZEl0ZW07XHJcbiAgICB9XHJcbiAgICBzZXQgc2VsZWN0ZWRJdGVtKGl0ZW0pIHtcclxuICAgICAgaWYgKCdzZWxlY3RlZEl0ZW0nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkSXRlbSA9IGl0ZW07IH1cclxuICAgICAgLy8gQ2F0Y2ggdGhlIGNhc2Ugd2hlcmUgdGhlIHNlbGVjdGlvbiBpcyByZW1vdmVkLlxyXG4gICAgICBpZiAoaXRlbSA9PSBudWxsICYmIHRoaXMuY29sbGVjdGl2ZSkge1xyXG4gICAgICAgIHRoaXMuY29sbGVjdGl2ZS5vdXRlcm1vc3RFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1hY3RpdmVkZXNjZW5kYW50Jyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICByZXR1cm4gU2VsZWN0aW9uQXJpYUFjdGl2ZTtcclxufTtcclxuXHJcblxyXG4vLyBSZXR1cm4gdGhlIGZpcnN0IEFSSUEgYWN0aXZlZGVzY2VuZGFudCBkZWZpbmVkIGJ5IHRoZSBjb2xsZWN0aXZlLlxyXG5mdW5jdGlvbiBnZXRDb2xsZWN0aXZlQXJpYUFjdGl2ZURlc2NlbmRhbnQoY29sbGVjdGl2ZSkge1xyXG4gIGxldCBkZXNjZW5kYW50cyA9IGNvbGxlY3RpdmUuZWxlbWVudHMubWFwKGVsZW1lbnQgPT4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcpKTtcclxuICBsZXQgbm9uTnVsbERlc2NlbmRhbnRzID0gZGVzY2VuZGFudHMuZmlsdGVyKGRlc2NlbmRhbnQgPT4gZGVzY2VuZGFudCAhPT0gbnVsbCk7XHJcbiAgcmV0dXJuIG5vbk51bGxEZXNjZW5kYW50c1swXTtcclxufVxyXG5cclxuXHJcbi8vIFJldHVybiB0aGUgZmlyc3QgQVJJQSBsYWJlbCBkZWZpbmVkIGJ5IHRoZSBjb2xsZWN0aXZlLlxyXG5mdW5jdGlvbiBnZXRDb2xsZWN0aXZlQXJpYVJvbGUoY29sbGVjdGl2ZSkge1xyXG4gIGxldCByb2xlcyA9IGNvbGxlY3RpdmUuZWxlbWVudHMubWFwKGVsZW1lbnQgPT4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSk7XHJcbiAgbGV0IG5vbk51bGxSb2xlcyA9IHJvbGVzLmZpbHRlcihyb2xlID0+IHJvbGUgIT09IG51bGwpO1xyXG4gIHJldHVybiBub25OdWxsUm9sZXNbMF07XHJcbn1cclxuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBTaGFkb3dFbGVtZW50UmVmZXJlbmNlcy4gKi9cclxuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcclxuXHJcbiAgLyoqXHJcbiAgICogTWl4aW4gdG8gY3JlYXRlIHJlZmVyZW5jZXMgdG8gZWxlbWVudHMgaW4gYSBjb21wb25lbnQncyBTaGFkb3cgRE9NIHN1YnRyZWUuXHJcbiAgICpcclxuICAgKiBUaGlzIGFkZHMgYSBtZW1iZXIgb24gdGhlIGNvbXBvbmVudCBjYWxsZWQgYHRoaXMuJGAgdGhhdCBjYW4gYmUgdXNlZCB0b1xyXG4gICAqIHJlZmVyZW5jZSBzaGFkb3cgZWxlbWVudHMgd2l0aCBJRHMuIEUuZy4sIGlmIGNvbXBvbmVudCdzIHNoYWRvdyBjb250YWlucyBhblxyXG4gICAqIGVsZW1lbnQgYDxidXR0b24gaWQ9XCJmb29cIj5gLCB0aGVuIHRoaXMgbWl4aW4gd2lsbCBjcmVhdGUgYSBtZW1iZXJcclxuICAgKiBgdGhpcy4kLmZvb2AgdGhhdCBwb2ludHMgdG8gdGhhdCBidXR0b24uXHJcbiAgICpcclxuICAgKiBTdWNoIHJlZmVyZW5jZXMgc2ltcGxpZnkgYSBjb21wb25lbnQncyBhY2Nlc3MgdG8gaXRzIG93biBlbGVtZW50cy4gSW5cclxuICAgKiBleGNoYW5nZSwgdGhpcyBtaXhpbiB0cmFkZXMgb2ZmIGEgb25lLXRpbWUgY29zdCBvZiBxdWVyeWluZyBhbGwgZWxlbWVudHMgaW5cclxuICAgKiB0aGUgc2hhZG93IHRyZWUgaW5zdGVhZCBvZiBwYXlpbmcgYW4gb25nb2luZyBjb3N0IHRvIHF1ZXJ5IGZvciBhbiBlbGVtZW50XHJcbiAgICogZWFjaCB0aW1lIHRoZSBjb21wb25lbnQgd2FudHMgdG8gaW5zcGVjdCBvciBtYW5pcHVsYXRlIGl0LlxyXG4gICAqXHJcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIHRoZSBjb21wb25lbnQgdG8gZGVmaW5lIGEgU2hhZG93IERPTSBzdWJ0cmVlLiBZb3UgY2FuXHJcbiAgICogY3JlYXRlIHRoYXQgdHJlZSB5b3Vyc2VsZiwgb3IgbWFrZSB1c2Ugb2YgdGhlIFNoYWRvd1RlbXBsYXRlIG1peGluLlxyXG4gICAqXHJcbiAgICogVGhpcyBtaXhpbiBpcyBpbnNwaXJlZCBieSBQb2x5bWVyJ3MgW2F1dG9tYXRpY1xyXG4gICAqIG5vZGUgZmluZGluZ10oaHR0cHM6Ly93d3cucG9seW1lci1wcm9qZWN0Lm9yZy8xLjAvZG9jcy9kZXZndWlkZS9sb2NhbC1kb20uaHRtbCNub2RlLWZpbmRpbmcpXHJcbiAgICogZmVhdHVyZS5cclxuICAgKi9cclxuICBjbGFzcyBTaGFkb3dFbGVtZW50UmVmZXJlbmNlcyBleHRlbmRzIGJhc2Uge1xyXG5cclxuICAgIGNyZWF0ZWRDYWxsYmFjaygpIHtcclxuICAgICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxyXG4gICAgICBpZiAodGhpcy5zaGFkb3dSb290KSB7XHJcbiAgICAgICAgLy8gTG9vayBmb3IgZWxlbWVudHMgaW4gdGhlIHNoYWRvdyBzdWJ0cmVlIHRoYXQgaGF2ZSBpZCBhdHRyaWJ1dGVzLlxyXG4gICAgICAgIC8vIEFuIGFsdGVybmF0aXZlbHkgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtaXhpbiB3b3VsZCBiZSB0byBqdXN0IGRlZmluZVxyXG4gICAgICAgIC8vIGEgdGhpcy4kIGdldHRlciB0aGF0IGxhemlseSBkb2VzIHRoaXMgc2VhcmNoIHRoZSBmaXJzdCB0aW1lIHNvbWVvbmVcclxuICAgICAgICAvLyB0cmllcyB0byBhY2Nlc3MgdGhpcy4kLiBUaGF0IG1pZ2h0IGludHJvZHVjZSBzb21lIGNvbXBsZXhpdHkg4oCTIGlmIHRoZVxyXG4gICAgICAgIC8vIHRoZSB0cmVlIGNoYW5nZWQgYWZ0ZXIgaXQgd2FzIGZpcnN0IHBvcHVsYXRlZCwgdGhlIHJlc3VsdCBvZlxyXG4gICAgICAgIC8vIHNlYXJjaGluZyBmb3IgYSBub2RlIG1pZ2h0IGJlIHNvbWV3aGF0IHVucHJlZGljdGFibGUuXHJcbiAgICAgICAgdGhpcy4kID0ge307XHJcbiAgICAgICAgbGV0IG5vZGVzV2l0aElkcyA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yQWxsKCdbaWRdJyk7XHJcbiAgICAgICAgW10uZm9yRWFjaC5jYWxsKG5vZGVzV2l0aElkcywgbm9kZSA9PiB7XHJcbiAgICAgICAgICBsZXQgaWQgPSBub2RlLmdldEF0dHJpYnV0ZSgnaWQnKTtcclxuICAgICAgICAgIHRoaXMuJFtpZF0gPSBub2RlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIFNoYWRvd0VsZW1lbnRSZWZlcmVuY2VzO1xyXG59O1xyXG4iLCIvLyBGZWF0dXJlIGRldGVjdGlvbiBmb3Igb2xkIFNoYWRvdyBET00gdjAuXHJcbmNvbnN0IFVTSU5HX1NIQURPV19ET01fVjAgPSAodHlwZW9mIEhUTUxFbGVtZW50LnByb3RvdHlwZS5jcmVhdGVTaGFkb3dSb290ICE9PSAndW5kZWZpbmVkJyk7XHJcblxyXG5cclxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBTaGFkb3dUZW1wbGF0ZS4gKi9cclxuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcclxuXHJcbiAgLyoqXHJcbiAgICogTWl4aW4gZm9yIHN0YW1waW5nIGEgdGVtcGxhdGUgaW50byBhIFNoYWRvdyBET00gc3VidHJlZSB1cG9uIGNvbXBvbmVudFxyXG4gICAqIGluc3RhbnRpYXRpb24uXHJcbiAgICpcclxuICAgKiBUbyB1c2UgdGhpcyBtaXhpbiwgZGVmaW5lIGEgYHRlbXBsYXRlYCBwcm9wZXJ0eSBhcyBhIHN0cmluZyBvciBIVE1MXHJcbiAgICogYDx0ZW1wbGF0ZT5gIGVsZW1lbnQ6XHJcbiAgICpcclxuICAgKiAgICAgY2xhc3MgTXlFbGVtZW50IGV4dGVuZHMgU2hhZG93VGVtcGxhdGUoSFRNTEVsZW1lbnQpIHtcclxuICAgKiAgICAgICBnZXQgdGVtcGxhdGUoKSB7XHJcbiAgICogICAgICAgICByZXR1cm4gYEhlbGxvLCA8ZW0+d29ybGQ8L2VtPi5gO1xyXG4gICAqICAgICAgIH1cclxuICAgKiAgICAgfVxyXG4gICAqXHJcbiAgICogV2hlbiB5b3VyIGNvbXBvbmVudCBjbGFzcyBpcyBpbnN0YW50aWF0ZWQsIGEgc2hhZG93IHJvb3Qgd2lsbCBiZSBjcmVhdGVkIG9uXHJcbiAgICogdGhlIGluc3RhbmNlLCBhbmQgdGhlIGNvbnRlbnRzIG9mIHRoZSB0ZW1wbGF0ZSB3aWxsIGJlIGNsb25lZCBpbnRvIHRoZVxyXG4gICAqIHNoYWRvdyByb290LiBJZiB5b3VyIGNvbXBvbmVudCBkb2VzIG5vdCBkZWZpbmUgYSBgdGVtcGxhdGVgIHByb3BlcnR5LCB0aGlzXHJcbiAgICogbWl4aW4gaGFzIG5vIGVmZmVjdC5cclxuICAgKlxyXG4gICAqIEZvciB0aGUgdGltZSBiZWluZywgdGhpcyBleHRlbnNpb24gcmV0YWlucyBzdXBwb3J0IGZvciBTaGFkb3cgRE9NIHYwLiBUaGF0XHJcbiAgICogd2lsbCBldmVudHVhbGx5IGJlIGRlcHJlY2F0ZWQgYXMgYnJvd3NlcnMgKGFuZCB0aGUgU2hhZG93IERPTSBwb2x5ZmlsbClcclxuICAgKiBpbXBsZW1lbnQgU2hhZG93IERPTSB2MS5cclxuICAgKi9cclxuICBjbGFzcyBTaGFkb3dUZW1wbGF0ZSBleHRlbmRzIGJhc2Uge1xyXG5cclxuICAgIC8qXHJcbiAgICAgKiBJZiB0aGUgY29tcG9uZW50IGRlZmluZXMgYSB0ZW1wbGF0ZSwgYSBzaGFkb3cgcm9vdCB3aWxsIGJlIGNyZWF0ZWQgb24gdGhlXHJcbiAgICAgKiBjb21wb25lbnQgaW5zdGFuY2UsIGFuZCB0aGUgdGVtcGxhdGUgc3RhbXBlZCBpbnRvIGl0LlxyXG4gICAgICovXHJcbiAgICBjcmVhdGVkQ2FsbGJhY2soKSB7XHJcbiAgICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cclxuICAgICAgbGV0IHRlbXBsYXRlID0gdGhpcy50ZW1wbGF0ZTtcclxuICAgICAgLy8gVE9ETzogU2F2ZSB0aGUgcHJvY2Vzc2VkIHRlbXBsYXRlIHdpdGggdGhlIGNvbXBvbmVudCdzIGNsYXNzIHByb3RvdHlwZVxyXG4gICAgICAvLyBzbyBpdCBkb2Vzbid0IG5lZWQgdG8gYmUgcHJvY2Vzc2VkIHdpdGggZXZlcnkgaW5zdGFudGlhdGlvbi5cclxuICAgICAgaWYgKHRlbXBsYXRlKSB7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgdGVtcGxhdGUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAvLyBVcGdyYWRlIHBsYWluIHN0cmluZyB0byByZWFsIHRlbXBsYXRlLlxyXG4gICAgICAgICAgdGVtcGxhdGUgPSBjcmVhdGVUZW1wbGF0ZVdpdGhJbm5lckhUTUwodGVtcGxhdGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKFVTSU5HX1NIQURPV19ET01fVjApIHtcclxuICAgICAgICAgIHBvbHlmaWxsU2xvdFdpdGhDb250ZW50KHRlbXBsYXRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh3aW5kb3cuU2hhZG93RE9NUG9seWZpbGwpIHtcclxuICAgICAgICAgIHNoaW1UZW1wbGF0ZVN0eWxlcyh0ZW1wbGF0ZSwgdGhpcy5sb2NhbE5hbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdGhpcy5sb2coXCJjbG9uaW5nIHRlbXBsYXRlIGludG8gc2hhZG93IHJvb3RcIik7XHJcbiAgICAgICAgbGV0IHJvb3QgPSBVU0lOR19TSEFET1dfRE9NX1YwID9cclxuICAgICAgICAgIHRoaXMuY3JlYXRlU2hhZG93Um9vdCgpIDogICAgICAgICAgICAgLy8gU2hhZG93IERPTSB2MFxyXG4gICAgICAgICAgdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7ICAvLyBTaGFkb3cgRE9NIHYxXHJcbiAgICAgICAgbGV0IGNsb25lID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0ZW1wbGF0ZS5jb250ZW50LCB0cnVlKTtcclxuICAgICAgICByb290LmFwcGVuZENoaWxkKGNsb25lKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIHJldHVybiBTaGFkb3dUZW1wbGF0ZTtcclxufTtcclxuXHJcblxyXG4vLyBDb252ZXJ0IGEgcGxhaW4gc3RyaW5nIG9mIEhUTUwgaW50byBhIHJlYWwgdGVtcGxhdGUgZWxlbWVudC5cclxuZnVuY3Rpb24gY3JlYXRlVGVtcGxhdGVXaXRoSW5uZXJIVE1MKGlubmVySFRNTCkge1xyXG4gIGxldCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XHJcbiAgLy8gUkVWSUVXOiBJcyB0aGVyZSBhbiBlYXNpZXIgd2F5IHRvIGRvIHRoaXM/XHJcbiAgLy8gV2UnZCBsaWtlIHRvIGp1c3Qgc2V0IGlubmVySFRNTCBvbiB0aGUgdGVtcGxhdGUgY29udGVudCwgYnV0IHNpbmNlIGl0J3NcclxuICAvLyBhIERvY3VtZW50RnJhZ21lbnQsIHRoYXQgZG9lc24ndCB3b3JrLlxyXG4gIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBkaXYuaW5uZXJIVE1MID0gaW5uZXJIVE1MO1xyXG4gIHdoaWxlIChkaXYuY2hpbGROb2Rlcy5sZW5ndGggPiAwKSB7XHJcbiAgICB0ZW1wbGF0ZS5jb250ZW50LmFwcGVuZENoaWxkKGRpdi5jaGlsZE5vZGVzWzBdKTtcclxuICB9XHJcbiAgcmV0dXJuIHRlbXBsYXRlO1xyXG59XHJcblxyXG4vLyBSZXBsYWNlIG9jY3VyZW5jZXMgb2YgdjEgc2xvdCBlbGVtZW50cyB3aXRoIHYwIGNvbnRlbnQgZWxlbWVudHMuXHJcbi8vIFRoaXMgZG9lcyBub3QgeWV0IG1hcCBuYW1lZCBzbG90cyB0byBjb250ZW50IHNlbGVjdCBjbGF1c2VzLlxyXG5mdW5jdGlvbiBwb2x5ZmlsbFNsb3RXaXRoQ29udGVudCh0ZW1wbGF0ZSkge1xyXG4gIFtdLmZvckVhY2guY2FsbCh0ZW1wbGF0ZS5jb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3Nsb3QnKSwgc2xvdEVsZW1lbnQgPT4ge1xyXG4gICAgbGV0IGNvbnRlbnRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY29udGVudCcpO1xyXG4gICAgc2xvdEVsZW1lbnQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoY29udGVudEVsZW1lbnQsIHNsb3RFbGVtZW50KTtcclxuICB9KTtcclxufVxyXG5cclxuLy8gSW52b2tlIGJhc2ljIHN0eWxlIHNoaW1taW5nIHdpdGggU2hhZG93Q1NTLlxyXG5mdW5jdGlvbiBzaGltVGVtcGxhdGVTdHlsZXModGVtcGxhdGUsIHRhZykge1xyXG4gIHdpbmRvdy5XZWJDb21wb25lbnRzLlNoYWRvd0NTUy5zaGltU3R5bGluZyh0ZW1wbGF0ZS5jb250ZW50LCB0YWcpO1xyXG59XHJcbiIsIi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggU3dpcGVEaXJlY3Rpb24uICovXHJcbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XHJcblxyXG4gIC8qKlxyXG4gICAqIE1peGluIHdoaWNoIG1hcHMgdG91Y2ggZ2VzdHVyZXMgKHN3aXBlIGxlZnQsIHN3aXBlIHJpZ2h0KSB0byBkaXJlY3Rpb25cclxuICAgKiBzZW1hbnRpY3MgKGdvIHJpZ2h0LCBnbyBsZWZ0KS5cclxuICAgKlxyXG4gICAqIEJ5IGRlZmF1bHQsIHRoaXMgbWl4aW4gcHJlc2VudHMgbm8gdXNlci12aXNpYmxlIGVmZmVjdHM7IGl0IGp1c3QgaW5kaWNhdGVzIGFcclxuICAgKiBkaXJlY3Rpb24gaW4gd2hpY2ggdGhlIHVzZXIgaXMgY3VycmVudGx5IHN3aXBpbmcgb3IgaGFzIGZpbmlzaGVkIHN3aXBpbmcuIFRvXHJcbiAgICogbWFwIHRoZSBkaXJlY3Rpb24gdG8gYSBjaGFuZ2UgaW4gc2VsZWN0aW9uLCB1c2UgdGhlIERpcmVjdGlvblNlbGVjdGlvbiBtaXhpbi5cclxuICAgKi9cclxuICBjbGFzcyBTd2lwZURpcmVjdGlvbiBleHRlbmRzIGJhc2Uge1xyXG5cclxuICAgIGNyZWF0ZWRDYWxsYmFjaygpIHtcclxuICAgICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxyXG5cclxuICAgICAgdGhpcy5wb3NpdGlvbiA9IDA7XHJcblxyXG4gICAgICAvLyBUT0RPOiBUb3VjaCBldmVudHMgY291bGQgYmUgZmFjdG9yZWQgb3V0IGludG8gaXRzIG93biBtaXhpbi5cclxuXHJcbiAgICAgIC8vIEluIGFsbCB0b3VjaCBldmVudHMsIG9ubHkgaGFuZGxlIHNpbmdsZSB0b3VjaGVzLiBXZSBkb24ndCB3YW50IHRvXHJcbiAgICAgIC8vIGluYWR2ZXJ0ZW50bHkgZG8gd29yayB3aGVuIHRoZSB1c2VyJ3MgdHJ5aW5nIHRvIHBpbmNoLXpvb20gZm9yIGV4YW1wbGUuXHJcbiAgICAgIC8vIFRPRE86IEV2ZW4gYmV0dGVyIGFwcHJvYWNoIHRoYW4gYmVsb3cgd291bGQgYmUgdG8gaWdub3JlIHRvdWNoZXMgYWZ0ZXJcclxuICAgICAgLy8gdGhlIGZpcnN0IGlmIHRoZSB1c2VyIGhhcyBhbHJlYWR5IGJlZ3VuIGEgc3dpcGUuXHJcbiAgICAgIGlmICh3aW5kb3cuUG9pbnRlckV2ZW50KSB7XHJcbiAgICAgICAgLy8gUHJlZmVyIGxpc3RlbmluZyB0byBzdGFuZGFyZCBwb2ludGVyIGV2ZW50cy5cclxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgaWYgKGlzRXZlbnRGb3JQZW5PclByaW1hcnlUb3VjaChldmVudCkpIHtcclxuICAgICAgICAgICAgdG91Y2hTdGFydCh0aGlzLCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJtb3ZlJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgaWYgKGlzRXZlbnRGb3JQZW5PclByaW1hcnlUb3VjaChldmVudCkpIHtcclxuICAgICAgICAgICAgbGV0IGhhbmRsZWQgPSB0b3VjaE1vdmUodGhpcywgZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGVkKSB7XHJcbiAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgaWYgKGlzRXZlbnRGb3JQZW5PclByaW1hcnlUb3VjaChldmVudCkpIHtcclxuICAgICAgICAgICAgdG91Y2hFbmQodGhpcywgZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gUG9pbnRlciBldmVudHMgbm90IHN1cHBvcnRlZCAtLSBsaXN0ZW4gdG8gb2xkZXIgdG91Y2ggZXZlbnRzLlxyXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGV2ZW50ID0+IHtcclxuICAgICAgICAgIGlmICh0aGlzLl9tdWx0aVRvdWNoKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQudG91Y2hlcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgbGV0IGNsaWVudFggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYO1xyXG4gICAgICAgICAgICBsZXQgY2xpZW50WSA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFk7XHJcbiAgICAgICAgICAgIHRvdWNoU3RhcnQodGhpcywgY2xpZW50WCwgY2xpZW50WSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9tdWx0aVRvdWNoID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGV2ZW50ID0+IHtcclxuICAgICAgICAgIGlmICghdGhpcy5fbXVsdGlUb3VjaCAmJiBldmVudC50b3VjaGVzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICBsZXQgY2xpZW50WCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFg7XHJcbiAgICAgICAgICAgIGxldCBjbGllbnRZID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WTtcclxuICAgICAgICAgICAgbGV0IGhhbmRsZWQgPSB0b3VjaE1vdmUodGhpcywgY2xpZW50WCwgY2xpZW50WSk7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGVkKSB7XHJcbiAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICBpZiAoZXZlbnQudG91Y2hlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgLy8gQWxsIHRvdWNoZXMgcmVtb3ZlZDsgZ2VzdHVyZSBpcyBjb21wbGV0ZS5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9tdWx0aVRvdWNoKSB7XHJcbiAgICAgICAgICAgICAgLy8gU2luZ2xlLXRvdWNoIHN3aXBlIGhhcyBmaW5pc2hlZC5cclxuICAgICAgICAgICAgICBsZXQgY2xpZW50WCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFg7XHJcbiAgICAgICAgICAgICAgbGV0IGNsaWVudFkgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZO1xyXG4gICAgICAgICAgICAgIHRvdWNoRW5kKHRoaXMsIGNsaWVudFgsIGNsaWVudFkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX211bHRpVG91Y2ggPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIGxlZnQuXHJcbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuXHJcbiAgICAgKi9cclxuICAgIGdvTGVmdCgpIHtcclxuICAgICAgaWYgKHN1cGVyLmdvTGVmdCkgeyByZXR1cm4gc3VwZXIuZ29MZWZ0KCk7IH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSByaWdodC5cclxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy5cclxuICAgICAqL1xyXG4gICAgZ29SaWdodCgpIHtcclxuICAgICAgaWYgKHN1cGVyLmdvUmlnaHQpIHsgcmV0dXJuIHN1cGVyLmdvUmlnaHQoKTsgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGRpc3RhbmNlIHRoZSB1c2VyIGhhcyBtb3ZlZCB0aGUgZmlyc3QgdG91Y2hwb2ludCBzaW5jZSB0aGUgYmVnaW5uaW5nXHJcbiAgICAgKiBvZiBhIGRyYWcsIGV4cHJlc3NlZCBhcyBhIGZyYWN0aW9uIG9mIHRoZSBlbGVtZW50J3Mgd2lkdGguXHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUgbnVtYmVyXHJcbiAgICAgKi9cclxuICAgIGdldCBwb3NpdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX3Bvc2l0aW9uO1xyXG4gICAgfVxyXG4gICAgc2V0IHBvc2l0aW9uKHBvc2l0aW9uKSB7XHJcbiAgICAgIGlmICgncG9zaXRpb24nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnBvc2l0aW9uID0gcG9zaXRpb247IH1cclxuICAgICAgdGhpcy5fcG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERldGVybWluZSB3aGV0aGVyIGEgdHJhbnNpdGlvbiBzaG91bGQgYmUgc2hvd24gZHVyaW5nIGEgc3dpcGUuXHJcbiAgICAgKlxyXG4gICAgICogQ29tcG9uZW50cyBsaWtlIGNhcm91c2VscyBvZnRlbiBkZWZpbmUgYW5pbWF0ZWQgQ1NTIHRyYW5zaXRpb25zIGZvclxyXG4gICAgICogc2xpZGluZyBlZmZlY3RzLiBTdWNoIGEgdHJhbnNpdGlvbiBzaG91bGQgdXN1YWxseSAqbm90KiBiZSBhcHBsaWVkIHdoaWxlXHJcbiAgICAgKiB0aGUgdXNlciBpcyBkcmFnZ2luZywgYmVjYXVzZSBhIENTUyBhbmltYXRpb24gd2lsbCBpbnRyb2R1Y2UgYSBsYWcgdGhhdFxyXG4gICAgICogbWFrZXMgdGhlIHN3aXBlIGZlZWwgc2x1Z2dpc2guIEluc3RlYWQsIGFzIGxvbmcgYXMgdGhlIHVzZXIgaXMgZHJhZ2dpbmdcclxuICAgICAqIHdpdGggdGhlaXIgZmluZ2VyIGRvd24sIHRoZSB0cmFuc2l0aW9uIHNob3VsZCBiZSBzdXBwcmVzc2VkLiBXaGVuIHRoZVxyXG4gICAgICogdXNlciByZWxlYXNlcyB0aGVpciBmaW5nZXIsIHRoZSB0cmFuc2l0aW9uIGNhbiBiZSByZXN0b3JlZCwgYWxsb3dpbmcgdGhlXHJcbiAgICAgKiBhbmltYXRpb24gdG8gc2hvdyB0aGUgY2Fyb3VzZWwgc2xpZGluZyBpbnRvIGl0cyBmaW5hbCBwb3NpdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHZhbHVlIC0gdHJ1ZSBpZiBhIGNvbXBvbmVudC1wcm92aWRlZCB0cmFuc2l0aW9uIHNob3VsZFxyXG4gICAgICogYmUgc2hvd24sIGZhbHNlIGlmIG5vdC5cclxuICAgICAqL1xyXG4gICAgLy8gVE9ETzogUmVuYW1lIChhbmQgZmxpcCBtZWFuaW5nKSB0byBzb21ldGhpbmcgbGlrZSBkcmFnZ2luZygpP1xyXG4gICAgc2hvd1RyYW5zaXRpb24odmFsdWUpIHtcclxuICAgICAgaWYgKHN1cGVyLnNob3dUcmFuc2l0aW9uKSB7IHN1cGVyLnNob3dUcmFuc2l0aW9uKHZhbHVlKTsgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIHJldHVybiBTd2lwZURpcmVjdGlvbjtcclxufTtcclxuXHJcblxyXG4vLyBSZXR1cm4gdHJ1ZSBpZiB0aGUgcG9pbnRlciBldmVudCBpcyBmb3IgdGhlIHBlbiwgb3IgdGhlIHByaW1hcnkgdG91Y2ggcG9pbnQuXHJcbmZ1bmN0aW9uIGlzRXZlbnRGb3JQZW5PclByaW1hcnlUb3VjaChldmVudCkge1xyXG4gIHJldHVybiBldmVudC5wb2ludGVyVHlwZSA9PT0gJ3BlbidcclxuICAgICAgfHwgKGV2ZW50LnBvaW50ZXJUeXBlID09PSAndG91Y2gnICYmIGV2ZW50LmlzUHJpbWFyeSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiB0b3VjaFN0YXJ0KGVsZW1lbnQsIGNsaWVudFgsIGNsaWVudFkpIHtcclxuICBlbGVtZW50LnNob3dUcmFuc2l0aW9uKGZhbHNlKTtcclxuICBlbGVtZW50Ll9zdGFydFggPSBjbGllbnRYO1xyXG4gIGVsZW1lbnQuX3ByZXZpb3VzWCA9IGNsaWVudFg7XHJcbiAgZWxlbWVudC5fcHJldmlvdXNZID0gY2xpZW50WTtcclxuICBlbGVtZW50Ll9kZWx0YVggPSAwO1xyXG4gIGVsZW1lbnQuX2RlbHRhWSA9IDA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvdWNoTW92ZShlbGVtZW50LCBjbGllbnRYLCBjbGllbnRZKSB7XHJcbiAgZWxlbWVudC5fZGVsdGFYID0gY2xpZW50WCAtIGVsZW1lbnQuX3ByZXZpb3VzWDtcclxuICBlbGVtZW50Ll9kZWx0YVkgPSBjbGllbnRZIC0gZWxlbWVudC5fcHJldmlvdXNZO1xyXG4gIGVsZW1lbnQuX3ByZXZpb3VzWCA9IGNsaWVudFg7XHJcbiAgZWxlbWVudC5fcHJldmlvdXNZID0gY2xpZW50WTtcclxuICBpZiAoTWF0aC5hYnMoZWxlbWVudC5fZGVsdGFYKSA+IE1hdGguYWJzKGVsZW1lbnQuX2RlbHRhWSkpIHtcclxuICAgIC8vIE1vdmUgd2FzIG1vc3RseSBob3Jpem9udGFsLlxyXG4gICAgdHJhY2tUbyhlbGVtZW50LCBjbGllbnRYKTtcclxuICAgIC8vIEluZGljYXRlIHRoYXQgdGhlIGV2ZW50IHdhcyBoYW5kbGVkLiBJdCdkIGJlIG5pY2VyIGlmIHdlIGRpZG4ndCBoYXZlXHJcbiAgICAvLyB0byBkbyB0aGlzIHNvIHRoYXQsIGUuZy4sIGEgdXNlciBjb3VsZCBiZSBzd2lwaW5nIGxlZnQgYW5kIHJpZ2h0XHJcbiAgICAvLyB3aGlsZSBzaW11bHRhbmVvdXNseSBzY3JvbGxpbmcgdXAgYW5kIGRvd24uIChOYXRpdmUgdG91Y2ggYXBwcyBjYW4gZG9cclxuICAgIC8vIHRoYXQuKSBIb3dldmVyLCBNb2JpbGUgU2FmYXJpIHdhbnRzIHRvIGhhbmRsZSBzd2lwZSBldmVudHMgbmVhciB0aGVcclxuICAgIC8vIHBhZ2UgYW5kIGludGVycHJldCB0aGVtIGFzIG5hdmlnYXRpb25zLiBUbyBhdm9pZCBoYXZpbmcgYSBob3JpemlvbnRhbFxyXG4gICAgLy8gc3dpcGUgbWlzaW50ZXByZXRlZCBhcyBhIG5hdmlnYXRpb24sIHdlIGluZGljYXRlIHRoYXQgd2UndmUgaGFuZGxlZFxyXG4gICAgLy8gdGhlIGV2ZW50LCBhbmQgcHJldmVudCBkZWZhdWx0IGJlaGF2aW9yLlxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIE1vdmUgd2FzIG1vc3RseSB2ZXJ0aWNhbC5cclxuICAgIHJldHVybiBmYWxzZTsgLy8gTm90IGhhbmRsZWRcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvdWNoRW5kKGVsZW1lbnQsIGNsaWVudFgsIGNsaWVudFkpIHtcclxuICBlbGVtZW50LnNob3dUcmFuc2l0aW9uKHRydWUpO1xyXG4gIGlmIChlbGVtZW50Ll9kZWx0YVggPj0gMjApIHtcclxuICAgIC8vIEZpbmlzaGVkIGdvaW5nIHJpZ2h0IGF0IGhpZ2ggc3BlZWQuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhcImZsaWNrIHJpZ2h0IFwiICsgZWxlbWVudC5fZGVsdGFYKTtcclxuICAgIGVsZW1lbnQuZ29MZWZ0KCk7XHJcbiAgfSBlbHNlIGlmIChlbGVtZW50Ll9kZWx0YVggPD0gLTIwKSB7XHJcbiAgICAvLyBGaW5pc2hlZCBnb2luZyBsZWZ0IGF0IGhpZ2ggc3BlZWQuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhcImZsaWNrIGxlZnQgXCIgKyBlbGVtZW50Ll9kZWx0YVgpO1xyXG4gICAgZWxlbWVudC5nb1JpZ2h0KCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIEZpbmlzaGVkIGF0IGxvdyBzcGVlZC5cclxuICAgIC8vIGNvbnNvbGUubG9nKFwic2xvdyBkcmFnIFwiICsgZWxlbWVudC5fZGVsdGFYKTtcclxuICAgIHRyYWNrVG8oZWxlbWVudCwgY2xpZW50WCk7XHJcbiAgICBsZXQgcG9zaXRpb24gPSBlbGVtZW50LnBvc2l0aW9uO1xyXG4gICAgaWYgKHBvc2l0aW9uID49IDAuNSkge1xyXG4gICAgICBlbGVtZW50LmdvUmlnaHQoKTtcclxuICAgIH0gZWxzZSBpZiAocG9zaXRpb24gPD0gLTAuNSkge1xyXG4gICAgICBlbGVtZW50LmdvTGVmdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBlbGVtZW50LnBvc2l0aW9uID0gMDtcclxuICBlbGVtZW50Ll9kZWx0YVggPSBudWxsO1xyXG4gIGVsZW1lbnQuX2RlbHRhWSA9IG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRyYWNrVG8oZWxlbWVudCwgeCkge1xyXG4gIGxldCB3aWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XHJcbiAgbGV0IGRyYWdEaXN0YW5jZSA9IGVsZW1lbnQuX3N0YXJ0WCAtIHg7XHJcbiAgbGV0IGZyYWN0aW9uID0gd2lkdGggPiAwID9cclxuICAgIGRyYWdEaXN0YW5jZSAvIHdpZHRoIDpcclxuICAgIDA7XHJcbiAgZWxlbWVudC5wb3NpdGlvbiA9IGZyYWN0aW9uO1xyXG59XHJcbiIsImltcG9ydCBDb2xsZWN0aXZlIGZyb20gJy4vQ29sbGVjdGl2ZSc7XHJcblxyXG5cclxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBUYXJnZXRJbkNvbGxlY3RpdmUuICovXHJcbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XHJcblxyXG4gIC8qKlxyXG4gICAqIE1peGluIHdoaWNoIGFsbG93cyBhIGNvbXBvbmVudCB0byBwcm92aWRlIGFnZ3JlZ2F0ZSBiZWhhdmlvciB3aXRoIG90aGVyXHJcbiAgICogZWxlbWVudHMsIGUuZy4sIGZvciBrZXlib2FyZCBoYW5kbGluZy5cclxuICAgKlxyXG4gICAqIFRoaXMgbWl4aW4gaW1wbGljaXRseSBjcmVhdGVzIGEgY29sbGVjdGl2ZSBmb3IgYSBjb21wb25lbnQgc28gdGhhdCBpdCBjYW5cclxuICAgKiBwYXJ0aWNpcGF0ZSBpbiBjb2xsZWN0aXZlIGtleWJvYXJkIGhhbmRsaW5nLiBTZWUgdGhlIENvbGxlY3RpdmUgY2xhc3MgZm9yXHJcbiAgICogZGV0YWlscy5cclxuICAgKlxyXG4gICAqIFlvdSBjYW4gdXNlIHRoaXMgbWl4aW4gaW4gY29uanVuY3Rpb24gd2l0aCBDb250ZW50Rmlyc3RDaGlsZFRhcmdldCB0b1xyXG4gICAqIGF1dG9tYXRpY2FsbHkgaGF2ZSB0aGUgY29tcG9uZW50J3MgY29sbGVjdGl2ZSBleHRlbmRlZCB0byBpdHMgZmlyc3QgY2hpbGQuXHJcbiAgICovXHJcbiAgY2xhc3MgVGFyZ2V0SW5Db2xsZWN0aXZlIGV4dGVuZHMgYmFzZSB7XHJcblxyXG4gICAgY3JlYXRlZENhbGxiYWNrKCkge1xyXG4gICAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XHJcbiAgICAgIHRoaXMuY29sbGVjdGl2ZSA9IG5ldyBDb2xsZWN0aXZlKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cy9zZXRzIHRoZSBjdXJyZW50IHRhcmdldCBvZiB0aGUgY29tcG9uZW50LlxyXG4gICAgICpcclxuICAgICAqIFNldCB0aGlzIHRvIHBvaW50IHRvIGFub3RoZXIgZWxlbWVudC4gVGhhdCB0YXJnZXQgZWxlbWVudCB3aWxsIGJlXHJcbiAgICAgKiBpbXBsaWNpdGx5IGFkZGVkIHRvIHRoZSBjb21wb25lbnQncyBjb2xsZWN0aXZlLiBUaGF0IGlzLCB0aGUgY29tcG9uZW50XHJcbiAgICAgKiBhbmQgaXRzIHRhcmdldCB3aWxsIHNoYXJlIHJlc3BvbnNpYmlsaXR5IGZvciBoYW5kbGluZyBrZXlib2FyZCBldmVudHMuXHJcbiAgICAgKlxyXG4gICAgICogWW91IGNhbiBzZXQgdGhpcyBwcm9wZXJ0eSB5b3Vyc2VsZiwgb3IgeW91IGNhbiB1c2UgdGhlXHJcbiAgICAgKiBDb250ZW50Rmlyc3RDaGlsZFRhcmdldCBtaXhpbiB0byBhdXRvbWF0aWNhbGx5IHNldCB0aGUgdGFyZ2V0IHRvIHRoZVxyXG4gICAgICogY29tcG9uZW50J3MgZmlyc3QgY2hpbGQuXHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxyXG4gICAgICovXHJcbiAgICBnZXQgdGFyZ2V0KCkge1xyXG4gICAgICByZXR1cm4gc3VwZXIudGFyZ2V0O1xyXG4gICAgfVxyXG4gICAgc2V0IHRhcmdldChlbGVtZW50KSB7XHJcbiAgICAgIGlmICgndGFyZ2V0JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci50YXJnZXQgPSBlbGVtZW50OyB9XHJcbiAgICAgIHRoaXMuY29sbGVjdGl2ZS5hc3NpbWlsYXRlKGVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIHJldHVybiBUYXJnZXRJbkNvbGxlY3RpdmU7XHJcbn07XHJcbiIsIi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggVHJhY2twYWREaXJlY3Rpb24uICovXHJcbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XHJcblxyXG4gIC8qKlxyXG4gICAqIE1peGluIHdoaWNoIG1hcHMgYSBob3Jpem9udGFsIHRyYWNrcGFkIHN3aXBlIGdlc3R1cmVzIChvciBob3Jpem9udGFsIG1vdXNlXHJcbiAgICogd2hlZWwgYWN0aW9ucykgdG8gZGlyZWN0aW9uIHNlbWFudGljcy5cclxuICAgKlxyXG4gICAqIFlvdSBjYW4gdXNlIHRoaXMgbWl4aW4gd2l0aCBhIG1peGluIGxpa2UgRGlyZWN0aW9uU2VsZWN0aW9uIHRvIGxldCB0aGUgdXNlclxyXG4gICAqIGNoYW5nZSB0aGUgc2VsZWN0aW9uIHdpdGggdGhlIHRyYWNrcGFkIG9yIG1vdXNlIHdoZWVsLlxyXG4gICAqXHJcbiAgICogVG8gcmVzcG9uZCB0byB0aGUgdHJhY2twYWQsIHdlIGNhbiBsaXN0ZW4gdG8gdGhlIERPTSdzIFwid2hlZWxcIiBldmVudHMuXHJcbiAgICogVGhlc2UgZXZlbnRzIGFyZSBmaXJlZCBhcyB0aGUgdXNlciBkcmFncyB0aGVpciBmaW5nZXJzIGFjcm9zcyBhIHRyYWNrcGFkLlxyXG4gICAqIFVuZm9ydHVuYXRlbHksIGJyb3dzZXJzIGFyZSBtaXNzaW5nIGEgY3JpdGljYWwgZXZlbnQg4oCUwqB0aGVyZSBpcyBubyBldmVudFxyXG4gICAqIHdoZW4gdGhlIHVzZXIgKnN0b3BzKiBhIGdlc3R1cmVkIG9uIHRoZSB0cmFja3BhZCBvciBtb3VzZSB3aGVlbC5cclxuICAgKlxyXG4gICAqIFRvIG1ha2UgdGhpbmdzIHdvcnNlLCB0aGUgbWFpbnN0cmVhbSBicm93c2VycyBjb250aW51ZSB0byBnZW5lcmF0ZSBmYWtlXHJcbiAgICogd2hlZWwgZXZlbnRzIGV2ZW4gYWZ0ZXIgdGhlIHVzZXIgaGFzIHN0b3BwZWQgZHJhZ2dpbmcgdGhlaXIgZmluZ2Vycy4gVGhlc2VcclxuICAgKiBmYWtlIGV2ZW50cyBzaW11bGF0ZSB0aGUgdXNlciBncmFkdWFsbHkgc2xvd2luZyBkb3duIHRoZSBkcmFnIHVudGlsIHRoZXlcclxuICAgKiBjb21lIHRvIGEgc21vb3RoIHN0b3AuIEluIHNvbWUgY29udGV4dHMsIHRoZXNlIGZha2Ugd2hlZWwgZXZlbnRzIG1pZ2h0IGJlXHJcbiAgICogaGVscGZ1bCwgYnV0IGluIHRyeWluZyB0byBzdXBwbHkgdHlwaWNhbCB0cmFja3BhZCBzd2lwZSBuYXZpZ2F0aW9uLCB0aGVzZVxyXG4gICAqIGZha2UgZXZlbnRzIGdldCBpbiB0aGUgd2F5LlxyXG4gICAqXHJcbiAgICogVGhpcyBjb21wb25lbnQgdXNlcyBoZXVyaXN0aWNzIHRvIHdvcmsgYXJvdW5kIHRoZXNlIHByb2JsZW1zLCBidXQgdGhlXHJcbiAgICogY29tcGxleCBuYXR1cmUgb2YgdGhlIHByb2JsZW0gbWFrZSBpdCBleHRyZW1lbHkgZGlmZmljdWx0IHRvIGFjaGlldmUgdGhlXHJcbiAgICogc2FtZSBkZWdyZWUgb2YgdHJhY2twYWQgcmVzcG9uc2l2ZW5lc3MgcG9zc2libGUgd2l0aCBuYXRpdmUgYXBwbGljYXRpb25zLlxyXG4gICAqL1xyXG4gIGNsYXNzIFRyYWNrcGFkRGlyZWN0aW9uIGV4dGVuZHMgYmFzZSB7XHJcblxyXG4gICAgY3JlYXRlZENhbGxiYWNrKCkge1xyXG4gICAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XHJcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBldmVudCA9PiB7XHJcbiAgICAgICAgbGV0IGhhbmRsZWQgPSB3aGVlbCh0aGlzLCBldmVudCk7XHJcbiAgICAgICAgaWYgKGhhbmRsZWQpIHtcclxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgcmVzZXRXaGVlbFRyYWNraW5nKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIGxlZnQuXHJcbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuXHJcbiAgICAgKi9cclxuICAgIGdvTGVmdCgpIHtcclxuICAgICAgaWYgKHN1cGVyLmdvTGVmdCkgeyByZXR1cm4gc3VwZXIuZ29MZWZ0KCk7IH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSByaWdodC5cclxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy5cclxuICAgICAqL1xyXG4gICAgZ29SaWdodCgpIHtcclxuICAgICAgaWYgKHN1cGVyLmdvUmlnaHQpIHsgcmV0dXJuIHN1cGVyLmdvUmlnaHQoKTsgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGRpc3RhbmNlIHRoZSB1c2VyIGhhcyBtb3ZlZCB0aGUgZmlyc3QgdG91Y2hwb2ludCBzaW5jZSB0aGUgYmVnaW5uaW5nXHJcbiAgICAgKiBvZiBhIHRyYWNrcGFkL3doZWVsIG9wZXJhdGlvbiwgZXhwcmVzc2VkIGFzIGEgZnJhY3Rpb24gb2YgdGhlIGVsZW1lbnQnc1xyXG4gICAgICogd2lkdGguXHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUgbnVtYmVyXHJcbiAgICAgKi9cclxuICAgIGdldCBwb3NpdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHN1cGVyLnBvc2l0aW9uO1xyXG4gICAgfVxyXG4gICAgc2V0IHBvc2l0aW9uKHBvc2l0aW9uKSB7XHJcbiAgICAgIGlmICgncG9zaXRpb24nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnBvc2l0aW9uID0gcG9zaXRpb247IH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBEZWZhdWx0IGltcGxlbWVudGF0aW9uXHJcbiAgICBzaG93VHJhbnNpdGlvbih2YWx1ZSkge1xyXG4gICAgICBpZiAoc3VwZXIuc2hvd1RyYW5zaXRpb24pIHsgc3VwZXIuc2hvd1RyYW5zaXRpb24odmFsdWUpOyB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIFRyYWNrcGFkRGlyZWN0aW9uO1xyXG59O1xyXG5cclxuXHJcbi8vIFRpbWUgd2Ugd2FpdCBmb2xsb3dpbmcgYSBuYXZpZ2F0aW9uIGJlZm9yZSBwYXlpbmcgYXR0ZW50aW9uIHRvIHdoZWVsXHJcbi8vIGV2ZW50cyBhZ2Fpbi5cclxuY29uc3QgUE9TVF9OQVZJR0FURV9USU1FID0gMjUwO1xyXG5cclxuLy8gVGltZSB3ZSB3YWl0IGFmdGVyIHRoZSBsYXN0IHdoZWVsIGV2ZW50IGJlZm9yZSB3ZSByZXNldCB0aGluZ3MuXHJcbmNvbnN0IFdIRUVMX1RJTUUgPSAxMDA7XHJcblxyXG5cclxuLy8gRm9sbG93aW5nIGEgbmF2aWdhdGlvbiwgcGFydGlhbGx5IHJlc2V0IG91ciB3aGVlbCB0cmFja2luZy5cclxuZnVuY3Rpb24gcG9zdE5hdmlnYXRlKGVsZW1lbnQpIHtcclxuICBlbGVtZW50LnBvc2l0aW9uID0gMDtcclxuICBlbGVtZW50Ll93aGVlbERpc3RhbmNlID0gMDtcclxuICBlbGVtZW50Ll9wb3N0TmF2aWdhdGVEZWxheUNvbXBsZXRlID0gdHJ1ZTtcclxuICBlbGVtZW50Ll9hYnNvcmJEZWNlbGVyYXRpb24gPSB0cnVlO1xyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgZWxlbWVudC5fcG9zdE5hdmlnYXRlRGVsYXlDb21wbGV0ZSA9IGZhbHNlO1xyXG4gIH0sIFBPU1RfTkFWSUdBVEVfVElNRSk7XHJcbn1cclxuXHJcbi8vIFJlc2V0IGFsbCBzdGF0ZSByZWxhdGVkIHRvIHRoZSB0cmFja2luZyBvZiB0aGUgd2hlZWwuXHJcbmZ1bmN0aW9uIHJlc2V0V2hlZWxUcmFja2luZyhlbGVtZW50KSB7XHJcbiAgZWxlbWVudC5wb3NpdGlvbiA9IDA7XHJcbiAgZWxlbWVudC5fd2hlZWxEaXN0YW5jZSA9IDA7XHJcbiAgZWxlbWVudC5fbGFzdERlbHRhWCA9IDA7XHJcbiAgZWxlbWVudC5fYWJzb3JiRGVjZWxlcmF0aW9uID0gZmFsc2U7XHJcbiAgZWxlbWVudC5fcG9zdE5hdmlnYXRlRGVsYXlDb21wbGV0ZSA9IGZhbHNlO1xyXG4gIGlmIChlbGVtZW50Ll9sYXN0V2hlZWxUaW1lb3V0KSB7XHJcbiAgICBjbGVhclRpbWVvdXQoZWxlbWVudC5fbGFzdFdoZWVsVGltZW91dCk7XHJcbiAgICBlbGVtZW50Ll9sYXN0V2hlZWxUaW1lb3V0ID0gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbi8vIERlZmluZSBvdXIgb3duIHNpZ24gZnVuY3Rpb24sIHNpbmNlIChhcyBvZiBNYXkgMjAxNSksIFNhZmFyaSBhbmQgSUUgZG9uJ3RcclxuLy8gc3VwcGx5IE1hdGguc2lnbigpLlxyXG5mdW5jdGlvbiBzaWduKHgpIHtcclxuICByZXR1cm4gKHggPT09IDApID9cclxuICAgIDAgOlxyXG4gICAgKHggPiAwKSA/XHJcbiAgICAgIDEgOlxyXG4gICAgICAtMTtcclxufVxyXG5cclxuLy8gVE9ETzogRGFtcGluZywgb3Igc29tZSBvdGhlciB0cmVhdG1lbnQgZm9yIGdvaW5nIHBhc3QgdGhlIGVuZHMuXHJcblxyXG4vKlxyXG4gKiBBIHdoZWVsIGV2ZW50IGhhcyBiZWVuIGdlbmVyYXRlZC4gVGhpcyBjb3VsZCBiZSBhIHJlYWwgd2hlZWwgZXZlbnQsIG9yIGl0XHJcbiAqIGNvdWxkIGJlIGZha2UgKHNlZSBub3RlcyBpbiB0aGUgaGVhZGVyKS5cclxuICpcclxuICogVGhpcyBoYW5kbGVyIHVzZXMgc2V2ZXJhbCBzdHJhdGVnaWVzIHRvIHRyeSB0byBhcHByb3hpbWF0ZSBuYXRpdmUgdHJhY2twYWRcclxuICogc3dpcGUgbmF2aWdhdGlvbi5cclxuICpcclxuICogSWYgdGhlIHVzZXIgaGFzIGRyYWdnZWQgZW5vdWdoIHRvIGNhdXNlIGEgbmF2aWdhdGlvbiwgdGhlbiBmb3IgYSBzaG9ydFxyXG4gKiBkZWxheSBmb2xsb3dpbmcgdGhhdCBuYXZpZ2F0aW9uLCBzdWJzZXF1ZW50IHdoZWVsIGV2ZW50cyB3aWxsIGJlIGlnbm9yZWQuXHJcbiAqXHJcbiAqIEZ1cnRoZXJtb3JlLCBmb2xsd293aW5nIGEgbmF2aWdhdGlvbiwgd2UgaWdub3JlIGFsbCB3aGVlbCBldmVudHMgdW50aWwgd2VcclxuICogcmVjZWl2ZSBhdCBsZWFzdCBvbmUgZXZlbnQgd2hlcmUgdGhlIGV2ZW50J3MgZGVsdGFYIChkaXN0YW5jZSB0cmF2ZWxlZCkgaXNcclxuICogKmdyZWF0ZXIqIHRoYW4gdGhlIHByZXZpb3VzIGV2ZW50J3MgZGVsdGFYLiBUaGlzIGhlbHBzIHVzIGZpbHRlciBvdXQgdGhlXHJcbiAqIGZha2Ugd2hlZWwgZXZlbnRzIGdlbmVyYXRlZCBieSB0aGUgYnJvd3NlciB0byBzaW11bGF0ZSBkZWNlbGVyYXRpb24uXHJcbiAqXHJcbiAqL1xyXG5mdW5jdGlvbiB3aGVlbChlbGVtZW50LCBldmVudCkge1xyXG5cclxuICAvLyBTaW5jZSB3ZSBoYXZlIGEgbmV3IHdoZWVsIGV2ZW50LCByZXNldCBvdXIgdGltZXIgd2FpdGluZyBmb3IgdGhlIGxhc3RcclxuICAvLyB3aGVlbCBldmVudCB0byBwYXNzLlxyXG4gIGlmIChlbGVtZW50Ll9sYXN0V2hlZWxUaW1lb3V0KSB7XHJcbiAgICBjbGVhclRpbWVvdXQoZWxlbWVudC5fbGFzdFdoZWVsVGltZW91dCk7XHJcbiAgfVxyXG4gIGVsZW1lbnQuX2xhc3RXaGVlbFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIHdoZWVsVGltZWRPdXQoZWxlbWVudCk7XHJcbiAgfSwgV0hFRUxfVElNRSk7XHJcblxyXG4gIGxldCBkZWx0YVggPSBldmVudC5kZWx0YVg7XHJcbiAgbGV0IGRlbHRhWSA9IGV2ZW50LmRlbHRhWTtcclxuXHJcbiAgLy8gU2VlIGlmIGVsZW1lbnQgZXZlbnQgcmVwcmVzZW50cyBhY2NlbGVyYXRpb24gb3IgZGVjZWxlcmF0aW9uLlxyXG4gIGxldCBhY2NlbGVyYXRpb24gPSBzaWduKGRlbHRhWCkgKiAoZGVsdGFYIC0gZWxlbWVudC5fbGFzdERlbHRhWCk7XHJcbiAgZWxlbWVudC5fbGFzdERlbHRhWCA9IGRlbHRhWDtcclxuICAvLyBjb25zb2xlLmxvZyhkZWx0YVggKyBcIiBcIiArIGFjY2VsZXJhdGlvbiArIFwiIFwiICsgZWxlbWVudC5fYWJzb3JiRGVjZWxlcmF0aW9uICsgXCIgXCIgKyBlbGVtZW50Ll9wb3N0TmF2aWdhdGVEZWxheUNvbXBsZXRlKTtcclxuXHJcbiAgaWYgKE1hdGguYWJzKGRlbHRhWCkgPCBNYXRoLmFicyhkZWx0YVkpKSB7XHJcbiAgICAvLyBNb3ZlIHdhcyBtb3N0bHkgdmVydGljYWwuIFRoZSB1c2VyIG1heSBiZSB0cnlpbmcgc2Nyb2xsIHdpdGggdGhlXHJcbiAgICAvLyB0cmFja3BhZC93aGVlbC4gVG8gYmUgb24gdGhlIHNhZmUsIHdlIGlnbm9yZSBzdWNoIGV2ZW50cy5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGlmIChlbGVtZW50Ll9wb3N0TmF2aWdhdGVEZWxheUNvbXBsZXRlKSB7XHJcbiAgICAvLyBJdCdzIHRvbyBzb29uIGFmdGVyIGEgbmF2aWdhdGlvbjsgaWdub3JlIHRoZSBldmVudC5cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcblxyXG4gIGlmIChhY2NlbGVyYXRpb24gPiAwKSB7XHJcbiAgICAvLyBUaGUgZXZlbnRzIGFyZSBub3QgKG9yIGFyZSBubyBsb25nZXIpIGRlY2VsZXJhdGluZywgc28gd2UgY2FuIHN0YXJ0XHJcbiAgICAvLyBwYXlpbmcgYXR0ZW50aW9uIHRvIHRoZW0gYWdhaW4uXHJcbiAgICBlbGVtZW50Ll9hYnNvcmJEZWNlbGVyYXRpb24gPSBmYWxzZTtcclxuICB9IGVsc2UgaWYgKGVsZW1lbnQuX2Fic29yYkRlY2VsZXJhdGlvbikge1xyXG4gICAgLy8gVGhlIHdoZWVsIGV2ZW50IHdhcyBsaWtlbHkgZmFrZWQgdG8gc2ltdWxhdGUgZGVjZWxlcmF0aW9uOyBpZ25vcmUgaXQuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGVsZW1lbnQuX3doZWVsRGlzdGFuY2UgKz0gZGVsdGFYO1xyXG5cclxuICAvLyBVcGRhdGUgdGhlIHBvc2l0aW9uIG9mIHRoZSBpdGVtcyBiZWluZyBuYXZpZ2F0ZWQuXHJcbiAgbGV0IHdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcclxuICBsZXQgcG9zaXRpb24gPSB3aWR0aCA+IDAgP1xyXG4gICAgZWxlbWVudC5fd2hlZWxEaXN0YW5jZSAvIHdpZHRoIDpcclxuICAgIDA7XHJcbiAgZWxlbWVudC5zaG93VHJhbnNpdGlvbihmYWxzZSk7XHJcbiAgcG9zaXRpb24gPSBzaWduKHBvc2l0aW9uKSAqIE1hdGgubWluKE1hdGguYWJzKHBvc2l0aW9uKSwgMSk7XHJcbiAgZWxlbWVudC5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG5cclxuICAvLyBJZiB0aGUgdXNlciBoYXMgZHJhZ2dlZCBlbm91Z2ggdG8gcmVhY2ggdGhlIHByZXZpb3VzL25leHQgaXRlbSwgdGhlblxyXG4gIC8vIGNvbXBsZXRlIGEgbmF2aWdhdGlvbiB0byB0aGF0IGl0ZW0uXHJcbiAgaWYgKHBvc2l0aW9uID09PSAxKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcImdvUmlnaHRcIik7XHJcbiAgICBlbGVtZW50LnNob3dUcmFuc2l0aW9uKHRydWUpO1xyXG4gICAgZWxlbWVudC5nb1JpZ2h0KCk7XHJcbiAgICBwb3N0TmF2aWdhdGUoZWxlbWVudCk7XHJcbiAgfSBlbHNlIGlmIChwb3NpdGlvbiA9PT0gLTEpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiZ29MZWZ0XCIpO1xyXG4gICAgZWxlbWVudC5zaG93VHJhbnNpdGlvbih0cnVlKTtcclxuICAgIGVsZW1lbnQuZ29MZWZ0KCk7XHJcbiAgICBwb3N0TmF2aWdhdGUoZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuLy8gQSBzdWZmaWNpZW50bHkgbG9uZyBwZXJpb2Qgb2YgdGltZSBoYXMgcGFzc2VkIHNpbmNlIHRoZSBsYXN0IHdoZWVsIGV2ZW50LlxyXG4vLyBXZSBzbmFwIHRoZSBzZWxlY3Rpb24gdG8gdGhlIGNsb3Nlc3QgaXRlbSwgdGhlbiByZXNldCBvdXIgc3RhdGUuXHJcbmZ1bmN0aW9uIHdoZWVsVGltZWRPdXQoZWxlbWVudCkge1xyXG4gIC8vIGNvbnNvbGUubG9nKFwidGltZW91dFwiKTtcclxuXHJcbiAgLy8gU25hcCB0byB0aGUgY2xvc2VzdCBpdGVtLlxyXG4gIGVsZW1lbnQuc2hvd1RyYW5zaXRpb24odHJ1ZSk7XHJcbiAgbGV0IHBvc2l0aW9uID0gZWxlbWVudC5wb3NpdGlvbjtcclxuICBpZiAocG9zaXRpb24gPj0gMC41KSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcInNuYXAgcmlnaHRcIik7XHJcbiAgICBlbGVtZW50LmdvUmlnaHQoKTtcclxuICB9IGVsc2UgaWYgKHBvc2l0aW9uIDw9IC0wLjUpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwic25hcCBsZWZ0XCIpO1xyXG4gICAgZWxlbWVudC5nb0xlZnQoKTtcclxuICB9XHJcblxyXG4gIC8vIFRPRE86IExpc3RlbiBmb3IgdGhlIHRyYW5zaXRpb24gdG8gY29tcGxldGUsIGFuZCB0aGVuIHJlc3RvcmVcclxuICAvLyBzaG93VHJhbnNpdGlvbiB0byBmYWxzZSAob3IgdGhlIHByZXZpb3VzIHZhbHVlKS5cclxuXHJcbiAgcmVzZXRXaGVlbFRyYWNraW5nKGVsZW1lbnQpO1xyXG59XHJcbiIsIi8qXHJcbiAqIE1pY3JvdGFzayBoZWxwZXIgZm9yIElFIDExLlxyXG4gKlxyXG4gKiBFeGVjdXRpbmcgYSBmdW5jdGlvbiBhcyBhIG1pY3JvdGFzayBpcyB0cml2aWFsIGluIGJyb3dzZXJzIHRoYXQgc3VwcG9ydFxyXG4gKiBwcm9taXNlcywgd2hvc2UgdGhlbigpIGNsYXVzZXMgdXNlIG1pY3JvdGFzayB0aW1pbmcuIElFIDExIGRvZXNuJ3Qgc3VwcG9ydFxyXG4gKiBwcm9taXNlcywgYnV0IGRvZXMgc3VwcG9ydCBNdXRhdGlvbk9ic2VydmVycywgd2hpY2ggYXJlIGFsc28gZXhlY3V0ZWQgYXNcclxuICogbWljcm90YXNrcy4gU28gdGhpcyBoZWxwZXIgdXNlcyBhbiBNdXRhdGlvbk9ic2VydmVyIHRvIGFjaGlldmUgbWljcm90YXNrXHJcbiAqIHRpbWluZy5cclxuICpcclxuICogU2VlIGh0dHBzOi8vamFrZWFyY2hpYmFsZC5jb20vMjAxNS90YXNrcy1taWNyb3Rhc2tzLXF1ZXVlcy1hbmQtc2NoZWR1bGVzL1xyXG4gKlxyXG4gKiBJbnNwaXJlZCBieSBQb2x5bWVyJ3MgYXN5bmMoKSBmdW5jdGlvbi5cclxuICovXHJcblxyXG5cclxuLy8gVGhlIHF1ZXVlIG9mIHBlbmRpbmcgY2FsbGJhY2tzIHRvIGJlIGV4ZWN1dGVkIGFzIG1pY3JvdGFza3MuXHJcbmxldCBjYWxsYmFja3MgPSBbXTtcclxuXHJcbi8vIENyZWF0ZSBhbiBlbGVtZW50IHRoYXQgd2Ugd2lsbCBtb2RpZnkgdG8gZm9yY2Ugb2JzZXJ2YWJsZSBtdXRhdGlvbnMuXHJcbmxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xyXG5cclxuLy8gQSBtb25vdG9uaWNhbGx5LWluY3JlYXNpbmcgdmFsdWUuXHJcbmxldCBjb3VudGVyID0gMDtcclxuXHJcblxyXG4vKipcclxuICogQWRkIGEgY2FsbGJhY2sgdG8gdGhlIG1pY3JvdGFzayBxdWV1ZS5cclxuICpcclxuICogVGhpcyB1c2VzIGEgTXV0YXRpb25PYnNlcnZlciBzbyB0aGF0IGl0IHdvcmtzIG9uIElFIDExLlxyXG4gKlxyXG4gKiBOT1RFOiBJRSAxMSBtYXkgYWN0dWFsbHkgdXNlIHRpbWVvdXQgdGltaW5nIHdpdGggTXV0YXRpb25PYnNlcnZlcnMuIFRoaXNcclxuICogbmVlZHMgbW9yZSBpbnZlc3RpZ2F0aW9uLlxyXG4gKlxyXG4gKiBAZnVuY3Rpb24gbWljcm90YXNrXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaWNyb3Rhc2soY2FsbGJhY2spIHtcclxuICBjYWxsYmFja3MucHVzaChjYWxsYmFjayk7XHJcbiAgLy8gRm9yY2UgYSBtdXRhdGlvbi5cclxuICBlbGVtZW50LnRleHRDb250ZW50ID0gKytjb3VudGVyO1xyXG59XHJcblxyXG5cclxuLy8gRXhlY3V0ZSBhbnkgcGVuZGluZyBjYWxsYmFja3MuXHJcbmZ1bmN0aW9uIGV4ZWN1dGVDYWxsYmFja3MoKSB7XHJcbiAgd2hpbGUgKGNhbGxiYWNrcy5sZW5ndGggPiAwKSB7XHJcbiAgICBsZXQgY2FsbGJhY2sgPSBjYWxsYmFja3Muc2hpZnQoKTtcclxuICAgIGNhbGxiYWNrKCk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLy8gQ3JlYXRlIHRoZSBvYnNlcnZlci5cclxubGV0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZXhlY3V0ZUNhbGxiYWNrcyk7XHJcbm9ic2VydmVyLm9ic2VydmUoZWxlbWVudCwge1xyXG4gIGNoYXJhY3RlckRhdGE6IHRydWVcclxufSk7XHJcbiIsImltcG9ydCBDb21wb3NhYmxlIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NvbXBvc2FibGUnO1xyXG5pbXBvcnQgU2hhZG93VGVtcGxhdGUgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2hhZG93VGVtcGxhdGUnO1xyXG5pbXBvcnQgU2hhZG93RWxlbWVudFJlZmVyZW5jZXMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2hhZG93RWxlbWVudFJlZmVyZW5jZXMnO1xyXG5pbXBvcnQgQXR0cmlidXRlTWFyc2hhbGxpbmcgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQXR0cmlidXRlTWFyc2hhbGxpbmcnO1xyXG5pbXBvcnQgRGlzdHJpYnV0ZWRDaGlsZHJlbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXN0cmlidXRlZENoaWxkcmVuJztcclxuXHJcblxyXG4vKipcclxuICogQSBzYW1wbGUgZ2VuZXJhbC1wdXJwb3NlIGJhc2UgY2xhc3MgZm9yIGRlZmluaW5nIGN1c3RvbSBlbGVtZW50cyB0aGF0IG1peGVzXHJcbiAqIGluIHNvbWUgY29tbW9uIGZlYXR1cmVzOiB0ZW1wbGF0ZSBzdGFtcGluZyBpbnRvIGEgc2hhZG93IHJvb3QsIHNoYWRvdyBlbGVtZW50XHJcbiAqIHJlZmVyZW5jZXMsIG1hcnNoYWxsaW5nIGF0dHJpYnV0ZXMgdG8gcHJvcGVydGllcywgYW5kIHJldHJpZXZpbmcgdGhlIGNoaWxkcmVuXHJcbiAqIGRpc3RyaWJ1dGVkIHRvIGEgY29tcG9uZW50LlxyXG4gKlxyXG4gKiBUaGlzIGJhc2UgY2xhc3MgaXMgbm90IHNwZWNpYWwgaW4gYW55IHdheSwgYW5kIGlzIGRlZmluZWQgb25seSBhcyBhXHJcbiAqIGNvbnZlbmllbnQgc2hvcnRoYW5kIGZvciBhcHBseWluZyB0aGUgbWl4aW5zIGxpc3RlZCBhYm92ZS4gWW91IGNhbiB1c2UgdGhpc1xyXG4gKiBjbGFzcyBhcyBhIGJhc2UgY2xhc3MgZm9yIHlvdXIgb3duIGVsZW1lbnRzLCBvciBlYXNpbHkgY3JlYXRlIHlvdXIgb3duIGJhc2VcclxuICogY2xhc3MgYnkgYXBwbHlpbmcgdGhlIHNhbWUgc2V0IG9mIG1peGlucy5cclxuICpcclxuICogVGhlIEVsZW1lbnRCYXNlIGJhc2UgY2xhc3MgZG9lcyBub3QgcmVnaXN0ZXIgaXRzZWxmIGFzIGEgY3VzdG9tIGVsZW1lbnQgd2l0aFxyXG4gKiB0aGUgYnJvd3NlciwgYW5kIGhlbmNlIGNhbm5vdCBiZSBpbmRlcGVuZGVudGx5IGluc3RhbnRpYXRlZC5cclxuICovXHJcbmNsYXNzIEVsZW1lbnRCYXNlIGV4dGVuZHMgQ29tcG9zYWJsZShIVE1MRWxlbWVudCkuY29tcG9zZShcclxuICBTaGFkb3dUZW1wbGF0ZSwgICAgICAgICAgLy8gYmVmb3JlIG5vZGUgZmluZGluZywgc28gc2hhZG93IHJvb3QgaXMgcG9wdWxhdGVkXHJcbiAgU2hhZG93RWxlbWVudFJlZmVyZW5jZXMsIC8vIGJlZm9yZSBtYXJzaGFsbGluZywgc28gcHJvcGVydGllcyBjYW4gdXNlIHJlZnNcclxuICBBdHRyaWJ1dGVNYXJzaGFsbGluZyxcclxuICBEaXN0cmlidXRlZENoaWxkcmVuXHJcbikge1xyXG5cclxuICAvKlxyXG4gICAqIERlYnVnZ2luZyB1dGlsaXR5OiBsb2dzIGEgbWVzc2FnZSwgcHJlZml4ZWQgYnkgdGhlIGNvbXBvbmVudCdzIHRhZy5cclxuICAgKi9cclxuICBsb2codGV4dCkge1xyXG4gICAgaWYgKHN1cGVyLmxvZykgeyBzdXBlci5sb2codGV4dCk7IH1cclxuICAgIGNvbnNvbGUubG9nKGAke3RoaXMubG9jYWxOYW1lfTogJHt0ZXh0fWApO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVsZW1lbnRCYXNlO1xyXG4iLCJpbXBvcnQgRWxlbWVudEJhc2UgZnJvbSAnLi4vLi4vYmFzaWMtZWxlbWVudC1iYXNlL3NyYy9FbGVtZW50QmFzZSc7XHJcbmltcG9ydCBTcHJlYWRJdGVtcyBmcm9tICcuLi8uLi9iYXNpYy1zcHJlYWQtaXRlbXMvc3JjL1NwcmVhZEl0ZW1zJzsgLy8ganNoaW50IGlnbm9yZTpsaW5lXHJcblxyXG5sZXQgYmFzZSA9IEVsZW1lbnRCYXNlO1xyXG5cclxuLyoqXHJcbiAqIFByZXNlbnRzIGxpc3QgaXRlbXMgaW4gYSB2aWV3cG9ydCBzdWNoIHRoYXQgb25seSBhIHNpbmdsZSBpdGVtIGlzIHZpc2libGUgYXRcclxuICogYSB0aW1lLlxyXG4gKlxyXG4gKiBOYXZpZ2F0aW5nIGJldHdlZW4gaXRlbXMgd2lsbCBiZSByZXByZXNlbnRlZCB3aXRoIGEgaG9yaXpvbnRhbCB2aXN1YWxcclxuICogc2xpZGluZyBlZmZlY3QuXHJcbiAqXHJcbiAqIFRoaXMgY29tcG9uZW50IGhhbmRsZXMgdGhlIHJlbmRlcmluZyByZXNwb25zaWJpbGl0aWVzIGZvciB0aGUgYmFzaWMtY2Fyb3VzZWxcclxuICogY29tcG9uZW50LlxyXG4gKlxyXG4gKiBUaGlzIGNvbXBvbmVudCBjdXJyZW50bHkgcmVxdWlyZXMgdGhhdCB5b3UgZXhwbGljaXRseSBhcHBseSBhIHNpemUgdG8gaXQuXHJcbiAqL1xyXG5jbGFzcyBTbGlkaW5nVmlld3BvcnQgZXh0ZW5kcyBiYXNlIHtcclxuXHJcbiAgYXR0YWNoZWRDYWxsYmFjaygpIHtcclxuICAgIGlmIChzdXBlci5hdHRhY2hlZENhbGxiYWNrKSB7IHN1cGVyLmF0dGFjaGVkQ2FsbGJhY2soKTsgfVxyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZWRDYWxsYmFjaygpIHtcclxuICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cclxuICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnc2hvd1RyYW5zaXRpb24nKTtcclxuICAgIHRoaXMucG9zaXRpb24gPSAwO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbnRlbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy4kLnNsaWRpbmdDb250YWluZXIuY29udGVudDtcclxuICB9XHJcblxyXG4gIGdldCBpdGVtcygpIHtcclxuICAgIHJldHVybiB0aGlzLiQuc2xpZGluZ0NvbnRhaW5lci5pdGVtcztcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGlmIChzdXBlci5yZW5kZXIpIHsgc3VwZXIucmVuZGVyKCk7IH1cclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXJTZWxlY3Rpb24uYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGUgZnJhY3Rpb25hbCBwb3NpdGlvbiBvZiB0aGUgZWxlbWVudCdzIG1vdmluZyBzdXJmYWNlIHdoaWxlIGl0IGlzIGJlaW5nXHJcbiAgICogbW92ZWQgKGRyYWdnZWQvc2Nyb2xsZWQvZXRjLikuXHJcbiAgICpcclxuICAgKiBUaGlzIGlzIGV4cHJlc3NlZCBhcyBhIGZyYWN0aW9uIG9mIHRoZSBlbGVtZW50J3Mgd2lkdGguIElmIHRoZSB2YWx1ZSBpc1xyXG4gICAqIHBvc2l0aXZlLCB0aGUgc3VyZmFjZSBpcyBiZWluZyBtb3ZlZCB0byB0aGUgbGVmdDsgaWYgbmVnYXRpdmUsIHRoZSBzdXJmYWNlXHJcbiAgICogaXMgYmVpbmcgbW92ZWQgdG8gdGhlIHJpZ2h0LiBFLmcuLCBhIHZhbHVlIG9mIDAuNSBpbmRpY2F0ZXMgdGhlIHN1cmZhY2UgaGFzXHJcbiAgICogbW92ZWQgaGFsZiB0aGUgZWxlbWVudCdzIHdpZHRoIHRvIHRoZSBsZWZ0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cclxuICBnZXQgcG9zaXRpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcG9zaXRpb247XHJcbiAgfVxyXG4gIHNldCBwb3NpdGlvbihwb3NpdGlvbikge1xyXG4gICAgaWYgKCdwb3NpdGlvbicgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIucG9zaXRpb24gPSBwb3NpdGlvbjsgfVxyXG4gICAgdGhpcy5fcG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgc2VsZWN0ZWRJbmRleCgpIHtcclxuICAgIGxldCBpdGVtcyA9IHRoaXMuaXRlbXM7XHJcbiAgICBsZXQgaW5kZXggPSBpdGVtcyAmJiBpdGVtcy5pbmRleE9mKHRoaXMuc2VsZWN0ZWRJdGVtKTtcclxuICAgIHJldHVybiBpbmRleCB8fCAtMTtcclxuICB9XHJcbiAgc2V0IHNlbGVjdGVkSW5kZXgoaW5kZXgpIHtcclxuICAgIGlmICgnc2VsZWN0ZWRJbmRleCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJbmRleCA9IGluZGV4OyB9XHJcbiAgICBsZXQgaXRlbSA9IHRoaXMuaXRlbXMgJiYgdGhpcy5pdGVtc1tpbmRleF07XHJcbiAgICBpZiAoaXRlbSkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IGl0ZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgc2VsZWN0ZWRJdGVtKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSXRlbTtcclxuICB9XHJcbiAgc2V0IHNlbGVjdGVkSXRlbShpdGVtKSB7XHJcbiAgICBpZiAoJ3NlbGVjdGVkSXRlbScgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJdGVtID0gaXRlbTsgfVxyXG4gICAgdGhpcy5fc2VsZWN0ZWRJdGVtID0gaXRlbTtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICBzaG93VHJhbnNpdGlvbihzaG93KSB7XHJcbiAgICBpZiAoc3VwZXIuc2hvd1RyYW5zaXRpb24pIHsgc3VwZXIuc2hvd1RyYW5zaXRpb24oc2hvdyk7IH1cclxuICAgIC8vIFdvdWxkIGxpa2UgdG8gdXNlIGNsYXNzTGlzdC50b2dnbGUoKSBoZXJlLCBidXQgSUUgMTEgZG9lc24ndCBoYXZlIGl0LlxyXG4gICAgaWYgKHNob3cpIHtcclxuICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdzaG93VHJhbnNpdGlvbicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdzaG93VHJhbnNpdGlvbicpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IHRlbXBsYXRlKCkge1xyXG4gICAgcmV0dXJuIGBcclxuICAgICAgPHN0eWxlPlxyXG4gICAgICA6aG9zdCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICNzbGlkaW5nQ29udGFpbmVyIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgIFNldCB3aWR0aCBmb3IgSUUvRWRnZS4gSXQncyBub3QgY2xlYXIgd2h5IHRoZXkgbmVlZCB0aGlzLCBhbmQgdGhlIG90aGVyXHJcbiAgICAgICAgIGJyb3dzZXJzIGRvbid0LlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIDpob3N0KC5zaG93VHJhbnNpdGlvbikgI3NsaWRpbmdDb250YWluZXIge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4ycyBlYXNlLW91dDtcclxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLW91dDtcclxuICAgICAgfVxyXG4gICAgICA8L3N0eWxlPlxyXG5cclxuICAgICAgPGJhc2ljLXNwcmVhZC1pdGVtcyBpZD1cInNsaWRpbmdDb250YWluZXJcIj5cclxuICAgICAgICA8c2xvdD48L3Nsb3Q+XHJcbiAgICAgIDwvYmFzaWMtc3ByZWFkLWl0ZW1zPlxyXG4gICAgYDtcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gcmVuZGVyU2VsZWN0aW9uKCkge1xyXG5cclxuICBsZXQgY291bnQgPSB0aGlzLml0ZW1zICYmIHRoaXMuaXRlbXMubGVuZ3RoO1xyXG4gIGlmICghY291bnQpIHtcclxuICAgIC8vIE51bGwgb3IgemVybyBtZWFucyB3ZSBkb24ndCBoYXZlIGl0ZW1zIHRvIHJlbmRlciB5ZXQuXHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBsZXQgaW5kZXggPSB0aGlzLnNlbGVjdGVkSW5kZXg7XHJcbiAgaWYgKGluZGV4IDwgMCkge1xyXG4gICAgLy8gTm8gc2VsZWN0aW9uXHJcbiAgICAvLyByZXR1cm47XHJcbiAgICBpbmRleCA9IDA7XHJcbiAgfVxyXG5cclxuICBsZXQgcG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uIHx8IDA7XHJcbiAgbGV0IGRhbXBlbmVkUG9zaXRpb247XHJcbiAgaWYgKGluZGV4ID09PSAwICYmIHBvc2l0aW9uIDwgMCkge1xyXG4gICAgLy8gQXBwbHkgdGVuc2lvbiBmcm9tIHRoZSBsZWZ0IGVkZ2UuXHJcbiAgICBkYW1wZW5lZFBvc2l0aW9uID0gLWRhbXBpbmcoLXBvc2l0aW9uKTtcclxuICB9IGVsc2UgaWYgKGluZGV4ID09PSBjb3VudCAtIDEgJiYgcG9zaXRpb24gPiAwKSB7XHJcbiAgICAvLyBBcHBseSB0ZW5zaW9uIGZyb20gdGhlIHJpZ2h0IGVkZ2UuXHJcbiAgICBkYW1wZW5lZFBvc2l0aW9uID0gZGFtcGluZyhwb3NpdGlvbik7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIE5vIGRhbXBpbmcgcmVxdWlyZWQuXHJcbiAgICBkYW1wZW5lZFBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgfVxyXG4gIGxldCBmcmFjdGlvbmFsSW5kZXggPSBpbmRleCArIGRhbXBlbmVkUG9zaXRpb247XHJcbiAgLy8gVXNlIGEgcGVyY2VudGFnZSBzbyB0aGUgdHJhbnNmb3JtIHdpbGwgc3RpbGwgd29yayBpZiBzY3JlZW4gc2l6ZSBjaGFuZ2VzXHJcbiAgLy8gKGUuZy4sIGlmIGRldmljZSBvcmllbnRhdGlvbiBjaGFuZ2VzKS5cclxuICBsZXQgbGVmdCA9IC1mcmFjdGlvbmFsSW5kZXggKiAxMDA7XHJcbiAgLy8gbGV0IGxlZnQgPSAtKGZyYWN0aW9uYWxJbmRleCAvIGNvdW50KSAqIDEwMDtcclxuICBsZXQgdHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoJyArIGxlZnQgKyAnJSknO1xyXG4gIHRoaXMuJC5zbGlkaW5nQ29udGFpbmVyLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcclxuICB0aGlzLiQuc2xpZGluZ0NvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XHJcbn1cclxuXHJcblxyXG4vKlxyXG4gKiBDYWxjdWxhdGUgZGFtcGluZyBhcyBhIGZ1bmN0aW9uIG9mIHRoZSBkaXN0YW5jZSBwYXN0IHRoZSBtaW5pbXVtL21heGltdW1cclxuICogdmFsdWVzLlxyXG4gKlxyXG4gKiBXZSB3YW50IHRvIGFzeW1wdG90aWNhbGx5IGFwcHJvYWNoIGFuIGFic29sdXRlIG1pbmltdW0gb2YgMSB1bml0XHJcbiAqIGJlbG93L2Fib3ZlIHRoZSBhY3R1YWwgbWluaW11bS9tYXhpbXVtLiBUaGlzIHJlcXVpcmVzIGNhbGN1bGF0aW5nIGFcclxuICogaHlwZXJib2xpYyBmdW5jdGlvbi5cclxuICpcclxuICogU2VlIGh0dHA6Ly93d3cud29sZnJhbWFscGhhLmNvbS9pbnB1dC8/aT15KyUzRCstMSUyRiUyOHglMkIxJTI5KyUyQisxXHJcbiAqIGZvciB0aGUgb25lIHdlIHVzZS4gVGhlIG9ubHkgcG9ydGlvbiBvZiB0aGF0IGZ1bmN0aW9uIHdlIGNhcmUgYWJvdXQgaXMgd2hlblxyXG4gKiB4IGlzIHplcm8gb3IgZ3JlYXRlci4gQW4gaW1wb3J0YW50IGNvbnNpZGVyYXRpb24gaXMgdGhhdCB0aGUgY3VydmUgYmVcclxuICogdGFuZ2VudCB0byB0aGUgZGlhZ29uYWwgbGluZSB4PXkgYXQgKDAsIDApLiBUaGlzIGVuc3VyZXMgc21vb3RoIGNvbnRpbnVpdHlcclxuICogd2l0aCB0aGUgbm9ybWFsIGRyYWcgYmVoYXZpb3IsIGluIHdoaWNoIHRoZSB2aXNpYmxlIHNsaWRpbmcgaXMgbGluZWFyIHdpdGhcclxuICogdGhlIGRpc3RhbmNlIHRoZSB0b3VjaHBvaW50IGhhcyBiZWVuIGRyYWdnZWQuXHJcbiAqL1xyXG5mdW5jdGlvbiBkYW1waW5nKHgpIHtcclxuICBsZXQgeSA9ICgtMSAvICh4ICsgMSkpICsgMTtcclxuICByZXR1cm4geTtcclxufVxyXG5cclxuXHJcbmRvY3VtZW50LnJlZ2lzdGVyRWxlbWVudCgnYmFzaWMtc2xpZGluZy12aWV3cG9ydCcsIFNsaWRpbmdWaWV3cG9ydCk7XHJcbmV4cG9ydCBkZWZhdWx0IFNsaWRpbmdWaWV3cG9ydDtcclxuIiwiaW1wb3J0IEVsZW1lbnRCYXNlIGZyb20gJy4uLy4uL2Jhc2ljLWVsZW1lbnQtYmFzZS9zcmMvRWxlbWVudEJhc2UnO1xyXG5pbXBvcnQgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50JztcclxuaW1wb3J0IE9ic2VydmVDb250ZW50Q2hhbmdlcyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9PYnNlcnZlQ29udGVudENoYW5nZXMnO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBTcHJlYWRzIG91dCBhIHNldCBvZiBpdGVtcyBob3Jpem9udGFsbHkgc28gdGhleSB0YWtlIGVxdWFsIHNwYWNlLlxyXG4gKlxyXG4gKiBbTGl2ZSBkZW1vXShodHRwOi8vYmFzaWN3ZWJjb21wb25lbnRzLm9yZy9iYXNpYy13ZWItY29tcG9uZW50cy9wYWNrYWdlcy9iYXNpYy1zcHJlYWQtaXRlbXMvKVxyXG4gKlxyXG4gKiBUaGlzIGNvbXBvbmVudCBpcyB1c2VkLCBmb3IgZXhhbXBsZSwgYnkgdGhlIGJhc2ljLXNsaWRpbmctdmlld3BvcnQgY29tcG9uZW50XHJcbiAqIHRvIGVuc3VyZSB0aGF0IGNoaWxkcmVuIG9mIGRpZmZlcmVudCBzaXplIHdpbGwgdGFrZSB1cCB0aGUgc2FtZSBhbW91bnQgb2ZcclxuICogaG9yaXpvbnRhbCBzcGFjZS5cclxuICpcclxuICogVGhpcyBjb21wb25lbnQgY3VycmVudGx5IHJlcXVpcmVzIGFuIGV4cGxpY2l0IHNpemUgYnkgYXBwbGllZCB0byBpdC5cclxuICpcclxuICogQG1peGVzIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnRcclxuICovXHJcbmNsYXNzIFNwcmVhZEl0ZW1zIGV4dGVuZHMgRWxlbWVudEJhc2UuY29tcG9zZShcclxuICBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50LFxyXG4gIE9ic2VydmVDb250ZW50Q2hhbmdlc1xyXG4pIHtcclxuXHJcbiAgYXR0YWNoZWRDYWxsYmFjaygpIHtcclxuICAgIGlmIChzdXBlci5hdHRhY2hlZENhbGxiYWNrKSB7IHN1cGVyLmF0dGFjaGVkQ2FsbGJhY2soKTsgfVxyXG4gICAgLy8gSEFDS1xyXG4gICAgdGhpcy5pdGVtc0NoYW5nZWQoKTtcclxuICB9XHJcblxyXG4gIGdldCBpdGVtcygpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICAvLyBUT0RPOiBTaG91bGQgYWxzbyBoYW5kbGUgY29udGVudENoYW5nZWQoKSwgYnV0IG5lZWQgdG8gcmF0aW9uYWxpemUgd2l0aFxyXG4gIC8vIGludm9jYXRpb24gb2YgaXRlbXNDaGFuZ2VkIGluIGF0dGFjaGVkQ2FsbGJhY2suXHJcbiAgaXRlbXNDaGFuZ2VkKCkge1xyXG4gICAgaWYgKHN1cGVyLml0ZW1zQ2hhbmdlZCkgeyBzdXBlci5pdGVtc0NoYW5nZWQoKTsgfVxyXG4gICAgbGV0IGl0ZW1zID0gdGhpcy5pdGVtcztcclxuICAgIGxldCBjb3VudCA9IGl0ZW1zLmxlbmd0aDtcclxuICAgIHRoaXMuJC5zcHJlYWRDb250YWluZXIuc3R5bGUud2lkdGggPSAoY291bnQgKiAxMDApICsgJyUnO1xyXG4gICAgbGV0IGl0ZW1XaWR0aCA9ICgxMDAgLyBjb3VudCkgKyBcIiVcIjtcclxuICAgIFtdLmZvckVhY2guY2FsbChpdGVtcywgaXRlbSA9PiB7XHJcbiAgICAgIGl0ZW0uc3R5bGUud2lkdGggPSBpdGVtV2lkdGg7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldCB0ZW1wbGF0ZSgpIHtcclxuICAgIHJldHVybiBgXHJcbiAgICAgIDxzdHlsZT5cclxuICAgICAgOmhvc3Qge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAjc3ByZWFkQ29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAjc3ByZWFkQ29udGFpbmVyIDo6Y29udGVudCA+ICoge1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICAgICAgb2JqZWN0LWZpdDogdmFyKC0tYmFzaWMtaXRlbS1vYmplY3QtZml0LCBjb250YWluKTtcclxuICAgICAgICB0b3VjaC1hY3Rpb246IG5vbmU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xyXG4gICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgPC9zdHlsZT5cclxuXHJcbiAgICAgIDxkaXYgaWQ9XCJzcHJlYWRDb250YWluZXJcIj5cclxuICAgICAgICA8c2xvdD48L3Nsb3Q+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuZG9jdW1lbnQucmVnaXN0ZXJFbGVtZW50KCdiYXNpYy1zcHJlYWQtaXRlbXMnLCBTcHJlYWRJdGVtcyk7XHJcbmV4cG9ydCBkZWZhdWx0IFNwcmVhZEl0ZW1zO1xyXG4iXX0=
