(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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
      return _get(Object.getPrototypeOf(Carousel.prototype), 'showTransition', this) || this.$.viewport.showTransition;
    },
    set: function set(value) {
      if ('showTransition' in base.prototype) {
        _set(Object.getPrototypeOf(Carousel.prototype), 'showTransition', value, this);
      }
      this.$.viewport.showTransition = value;
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

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

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

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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
  element.showTransition = false;
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
  element.showTransition = true;
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

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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
      this.selectedFraction = 0;
      this.showTransition = true;
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

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwYWNrYWdlcy9iYXNpYy1jYXJvdXNlbC9zcmMvQ2Fyb3VzZWwuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9BdHRyaWJ1dGVNYXJzaGFsbGluZy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NvbGxlY3RpdmUuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Db21wb3NhYmxlLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ29udGVudEFzSXRlbXMuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXJlY3Rpb25TZWxlY3Rpb24uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXN0cmlidXRlZENoaWxkcmVuLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudC5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0dlbmVyaWMuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9JdGVtc1NlbGVjdGlvbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0tleWJvYXJkLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvS2V5Ym9hcmREaXJlY3Rpb24uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9PYnNlcnZlQ29udGVudENoYW5nZXMuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TZWxlY3Rpb25BcmlhQWN0aXZlLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2hhZG93RWxlbWVudFJlZmVyZW5jZXMuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TaGFkb3dUZW1wbGF0ZS5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1N3aXBlRGlyZWN0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvVGFyZ2V0SW5Db2xsZWN0aXZlLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvVHJhY2twYWREaXJlY3Rpb24uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9mcmFjdGlvbmFsU2VsZWN0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvbWljcm90YXNrLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvdG9nZ2xlQ2xhc3MuanMiLCJwYWNrYWdlcy9iYXNpYy1lbGVtZW50LWJhc2Uvc3JjL0VsZW1lbnRCYXNlLmpzIiwicGFja2FnZXMvYmFzaWMtc2xpZGluZy12aWV3cG9ydC9zcmMvU2xpZGluZ1ZpZXdwb3J0LmpzIiwicGFja2FnZXMvYmFzaWMtc3ByZWFkLWl0ZW1zL3NyYy9TcHJlYWRJdGVtcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBLHVFQUFtRTs7OztBQUNuRSxpRkFBNkU7Ozs7QUFDN0UseUZBQXFGOzs7O0FBQ3JGLDZHQUF5Rzs7OztBQUN6RyxtRUFBK0Q7Ozs7QUFDL0QsaUZBQTZFOzs7O0FBQzdFLHFFQUFpRTs7OztBQUNqRSx1RkFBbUY7Ozs7QUFDbkYsK0ZBQTJGOzs7O0FBQzNGLDJGQUF1Rjs7OztBQUN2RixtRkFBK0U7Ozs7QUFDL0UsaUZBQTZFOzs7O0FBQzdFLHlGQUFxRjs7OztBQUNyRix1RkFBbUY7Ozs7Ozs7Ozs7OztBQUVuRixJQUFJLElBQUksR0FBRyxzQkFBWSxPQUFPLG1WQWE3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFDO0lBOEdJLFFBQVE7Ozs7Ozs7Ozs7O3VDQUVPO0FBQ2pCLHFGQUE0QjtBQUFFLDZGQUF5QjtPQUFFOztBQUFBLEFBRXpELFVBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUNwQixVQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO0tBQy9COzs7c0NBRWlCO0FBQ2hCLG9GQUEyQjtBQUFFLDRGQUF3QjtPQUFFO0FBQ3ZELFVBQUksQ0FBQyxjQUFjLEdBQUcsWUFBWSxDQUFDO0tBQ3BDOzs7d0JBRXNCO0FBQ3JCLGFBQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUM7S0FDekM7c0JBQ29CLEtBQUssRUFBRTtBQUMxQixVQUFJLGtCQUFrQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7QUFBRSw0RUFBeUIsS0FBSyxRQUFDO09BQUU7QUFDN0UsVUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0FBQ3pDLFVBQUksS0FBSyxHQUFHLElBQUksV0FBVyxDQUFDLDRCQUE0QixDQUFDLENBQUM7QUFDMUQsVUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUMzQjs7O3dCQUVtQjtBQUNsQixvRkFBMkI7S0FDNUI7c0JBQ2lCLEtBQUssRUFBRTtBQUN2QixVQUFJLGVBQWUsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO0FBQUUseUVBQXNCLEtBQUssUUFBQztPQUFFO0FBQ3ZFLFVBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7S0FDdkM7Ozt3QkFFa0I7QUFDakIsbUZBQTBCO0tBQzNCO3NCQUNnQixJQUFJLEVBQUU7QUFDckIsVUFBSSxjQUFjLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtBQUFFLHdFQUFxQixJQUFJLFFBQUM7T0FBRTtBQUNwRSxVQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0tBQ3JDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFvQm9CO0FBQ25CLGFBQU8sMkVBQXdCLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQztLQUMvRDtzQkFDa0IsS0FBSyxFQUFFO0FBQ3hCLFVBQUksZ0JBQWdCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtBQUFFLDBFQUF1QixLQUFLLFFBQUM7T0FBRTtBQUN6RSxVQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0tBQ3hDOzs7d0JBRWM7QUFDYiw0WEFrQkU7S0FDSDs7OztFQXRGb0IsSUFBSTs7QUEwRjNCLFFBQVEsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLENBQUM7a0JBQ3RDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkNwT1IsVUFBQyxJQUFJLEVBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BcUNqQixvQkFBb0I7Ozs7Ozs7Ozs7Ozs7OzsrQ0FLQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRTtBQUNqRCwyR0FBb0M7QUFBRSxtSEFBaUM7U0FBRTs7O0FBQUEsQUFHekUsWUFBSSxZQUFZLEdBQUcsdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDakQsWUFBSSxZQUFZLElBQUksSUFBSSxJQUFJLEVBQUUsWUFBWSxJQUFJLFdBQVcsQ0FBQyxTQUFTLENBQUEsQUFBQyxFQUFFO0FBQ3BFLGNBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxRQUFRLENBQUM7U0FDL0I7T0FDRjs7Ozs7Ozs7Ozs7O3dDQVNpQjs7O0FBQ2hCLGtHQUEyQjtBQUFFLDBHQUF3QjtTQUFFO0FBQ3ZELFlBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7QUFBQyxBQUNoRCxrQkFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFBLFNBQVMsRUFBSTtBQUM5QixpQkFBSyx3QkFBd0IsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDM0UsQ0FBQyxDQUFDO09BQ0o7Ozs7SUE1QmdDLElBQUk7O0FBZ0N2QyxTQUFPLG9CQUFvQixDQUFDO0NBQzdCOzs7O0FBSUQsU0FBUyx1QkFBdUIsQ0FBQyxhQUFhLEVBQUU7QUFDOUMsTUFBSSxZQUFZLEdBQUcsYUFBYSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsVUFBQSxDQUFDO1dBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRTtHQUFBLENBQUMsQ0FBQztBQUMvRSxTQUFPLFlBQVksQ0FBQztDQUNyQjs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ3ZDSyxVQUFVOzs7Ozs7OztBQU9kLHdCQUF5Qjs7Ozs7Ozs7OztBQU12QixRQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQzs7c0NBTk4sUUFBUTtBQUFSLGNBQVE7OztBQU9yQixZQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTzthQUFJLE1BQUssVUFBVSxDQUFDLE9BQU8sQ0FBQztLQUFBLENBQUMsQ0FBQztHQUN2RDs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OzsrQkFlVSxNQUFNLEVBQUU7QUFDakIsVUFBSSxpQkFBaUIsWUFBQSxDQUFDO0FBQ3RCLFVBQUksTUFBTSxZQUFZLFVBQVUsRUFBRTtBQUNoQyx5QkFBaUIsR0FBRyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7T0FDeEQsTUFBTSxJQUFJLE1BQU0sQ0FBQyxVQUFVLEVBQUU7O0FBRTVCLHlCQUFpQixHQUFHLG9CQUFvQixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7T0FDbkUsTUFBTTs7QUFFTCx5QkFBaUIsR0FBRyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7T0FDckQ7O0FBRUQsVUFBSSxpQkFBaUIsRUFBRTtBQUNyQixZQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixDQUFDLENBQUM7T0FDeEM7S0FDRjs7Ozs7Ozs7Ozs7aUNBUVksTUFBTSxFQUFXOztBQUU1QixVQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDOzt5Q0FGUCxJQUFJO0FBQUosWUFBSTs7O0FBRzFCLFdBQUssSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUM3QyxZQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDMUIsWUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7QUFDbkIsaUJBQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3RDO09BQ0Y7S0FDRjs7Ozs7Ozs7O3dCQU1zQjtBQUNyQixhQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDekI7Ozs7Ozs7O0FBTUgsU0FBUyxvQkFBb0IsQ0FBQyxXQUFXLEVBQUUsV0FBVyxFQUFFO0FBQ3RELE1BQUksV0FBVyxLQUFLLFdBQVcsRUFBRTs7QUFFL0IsV0FBTyxLQUFLLENBQUM7R0FDZDs7QUFFRCxNQUFJLFFBQVEsR0FBRyxXQUFXLENBQUMsUUFBUTs7O0FBQUMsQUFHcEMsYUFBVyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7O0FBRTFCLFVBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxPQUFPLEVBQUk7QUFDMUIscUJBQWlCLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0dBQ3pDLENBQUMsQ0FBQzs7QUFFSCxTQUFPLElBQUksQ0FBQztDQUNiOzs7QUFBQSxBQUlELFNBQVMsaUJBQWlCLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRTtBQUM5QyxNQUFJLE9BQU8sQ0FBQyxVQUFVLEtBQUssVUFBVSxFQUFFOztBQUVyQyxXQUFPLEtBQUssQ0FBQztHQUNkO0FBQ0QsU0FBTyxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7QUFDaEMsWUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDbEMsU0FBTyxJQUFJLENBQUM7Q0FDYjs7a0JBR2MsVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkNqSlYsVUFBQyxJQUFJLEVBQUs7Ozs7Ozs7Ozs7TUFTakIsVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQ0E4Qlk7MENBQVIsTUFBTTtBQUFOLGdCQUFNOzs7Ozs7O0FBS3RCLGVBQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7T0FDMUM7Ozs7SUFwQ3NCLElBQUk7O0FBd0M3QixTQUFPLFVBQVUsQ0FBQztDQUNuQjs7OztBQUlELElBQU0sNkJBQTZCLEdBQUcsQ0FDcEMsYUFBYSxDQUNkOzs7Ozs7O0FBQUMsQUFPRixTQUFTLFlBQVksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFO0FBQ2pDLE1BQUksT0FBTyxLQUFLLEtBQUssVUFBVSxFQUFFOztBQUUvQixXQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztHQUNwQixNQUFNOzs7UUFFQyxRQUFROzs7Ozs7Ozs7O01BQVMsSUFBSTs7QUFDM0IscUJBQWlCLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxTQUFTLEVBQUUsNkJBQTZCLENBQUMsQ0FBQztBQUM1RSxXQUFPLFFBQVEsQ0FBQztHQUNqQjtDQUNGOzs7Ozs7QUFBQSxBQU9ELFNBQVMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBNEI7TUFBMUIsbUJBQW1CLHlEQUFHLEVBQUU7O0FBQ2pFLFFBQU0sQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJLEVBQUk7QUFDakQsUUFBSSxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQ3pDLFVBQUksVUFBVSxHQUFHLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDL0QsWUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0tBQ2pEO0dBQ0YsQ0FBQyxDQUFDO0FBQ0gsU0FBTyxNQUFNLENBQUM7Q0FDZjs7Ozs7Ozs7Ozs7OztBQ3pGRCwyRUFBdUU7Ozs7Ozs7Ozs7Ozs7O2tCQUl4RCxVQUFDLElBQUksRUFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01Bb0JqQixjQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FDQVlILElBQUksRUFBRSxRQUFRLEVBQUU7QUFDN0IsMkZBQTBCO0FBQUUsbUdBQXFCLElBQUksRUFBRSxRQUFRLEVBQUU7U0FBRTtBQUNuRSxtQ0FBWSxJQUFJLEVBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO09BQ3pDOzs7dUNBRWdCO0FBQ2YsMkZBQTBCO0FBQUUsbUdBQXVCO1NBQUU7QUFDckQsWUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFDbkIsWUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO09BQ3JCOzs7Ozs7Ozs7Ozs7O2dDQVVTLElBQUksRUFBRTtBQUNkLHNGQUFxQjtBQUFFLDhGQUFnQixJQUFJLEVBQUU7U0FBRTtPQUNoRDs7Ozs7Ozs7Ozs7Ozs7Ozs7cUNBb0JjOzs7QUFDYix5RkFBd0I7QUFBRSxpR0FBcUI7U0FBRTs7O0FBQUEsQUFHakQsWUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJLEVBQUk7QUFDekIsY0FBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtBQUMxQixtQkFBSyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckIsZ0JBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7V0FDOUI7U0FDRixDQUFDLENBQUM7O0FBRUgsWUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO09BQ3REOzs7Ozs7Ozs7OzBCQXhCVztBQUNWLFlBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQUU7QUFDdkIsY0FBSSxDQUFDLE1BQU0sR0FBRyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDckQ7QUFDRCxlQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7T0FDcEI7Ozs7SUE5QzBCLElBQUk7O0FBMEVqQyxTQUFPLGNBQWMsQ0FBQztDQUN2Qjs7Ozs7QUFLRCxTQUFTLHVCQUF1QixDQUFDLEtBQUssRUFBRTtBQUN0QyxNQUFJLGFBQWEsR0FBRyxDQUNsQixNQUFNLEVBQ04sUUFBUSxFQUNSLE9BQU8sRUFDUCxVQUFVLENBQ1gsQ0FBQztBQUNGLFNBQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFVBQVMsSUFBSSxFQUFFO0FBQzFDLFdBQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztHQUNyRSxDQUFDLENBQUM7Q0FDSjs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkNqSGMsVUFBQyxJQUFJLEVBQUs7Ozs7Ozs7Ozs7OztNQVdqQixrQkFBa0I7Ozs7Ozs7Ozs7OytCQUViO0FBQ1AsdUZBQWtCO0FBQUUsK0ZBQWU7U0FBRTtBQUNyQyxlQUFPLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztPQUMxQjs7OzhCQUVPO0FBQ04sc0ZBQWlCO0FBQUUsOEZBQWM7U0FBRTtBQUNuQyxlQUFPLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztPQUMxQjs7OytCQUVRO0FBQ1AsdUZBQWtCO0FBQUUsK0ZBQWU7U0FBRTtBQUNyQyxlQUFPLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztPQUM5Qjs7O2dDQUVTO0FBQ1Isd0ZBQW1CO0FBQUUsZ0dBQWdCO1NBQUU7QUFDdkMsZUFBTyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7T0FDMUI7OztnQ0FFUztBQUNSLHdGQUFtQjtBQUFFLGdHQUFnQjtTQUFFO0FBQ3ZDLGVBQU8sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO09BQzNCOzs7NkJBRU07QUFDTCxxRkFBZ0I7QUFBRSw2RkFBYTtTQUFFO0FBQ2pDLGVBQU8sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO09BQzlCOzs7Ozs7OztvQ0FXYTtBQUNaLDRGQUF1QjtBQUFFLDJHQUEyQjtTQUFFO09BQ3ZEOzs7Ozs7bUNBR1k7QUFDWCwyRkFBc0I7QUFBRSwwR0FBMEI7U0FBRTtPQUNyRDs7Ozs7O21DQUdZO0FBQ1gsMkZBQXNCO0FBQUUsMEdBQTBCO1NBQUU7T0FDckQ7Ozs7Ozt1Q0FHZ0I7QUFDZiwrRkFBMEI7QUFBRSw4R0FBOEI7U0FBRTtPQUM3RDs7Ozs7OzBCQXpCc0I7QUFDckIsbUdBQThCO09BQy9CO3dCQUNvQixLQUFLLEVBQUU7QUFDMUIsWUFBSSxrQkFBa0IsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO0FBQUUsd0ZBQXlCLEtBQUssUUFBQztTQUFFO09BQzlFOzs7MEJBdUJvQjtBQUNuQixpR0FBNEI7T0FDN0I7d0JBQ2tCLEtBQUssRUFBRTtBQUN4QixZQUFJLGdCQUFnQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7QUFBRSxzRkFBdUIsS0FBSyxRQUFDO1NBQUU7QUFDekUsWUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztPQUMvQjs7OztJQW5FOEIsSUFBSTs7QUF1RXJDLFNBQU8sa0JBQWtCLENBQUM7Q0FDM0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkMvRWMsVUFBQyxJQUFJLEVBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUE2Q2pCLG1CQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQVFHO0FBQ3hCLGVBQU8scUJBQXFCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztPQUNwRDs7Ozs7Ozs7Ozs7MEJBUTJCO0FBQzFCLGVBQU8scUJBQXFCLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztPQUNyRDs7Ozs7Ozs7Ozs7MEJBUTRCO0FBQzNCLFlBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsVUFBUyxLQUFLLEVBQUU7QUFDM0QsaUJBQU8sS0FBSyxDQUFDLFdBQVcsQ0FBQztTQUMxQixDQUFDLENBQUM7QUFDSCxlQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7T0FDekI7Ozs7SUFqQytCLElBQUk7O0FBcUN0QyxTQUFPLG1CQUFtQixDQUFDO0NBQzVCOzs7Ozs7Ozs7Ozs7QUFZRCxTQUFTLHFCQUFxQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsRUFBRTs7O0FBQ3RELE1BQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsVUFBQSxJQUFJLEVBQUk7Ozs7O0FBS3JELFFBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsU0FBUyxLQUFLLE1BQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQSxBQUFDLEVBQUU7O0FBRWpGLFVBQUksZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7QUFDbEQsYUFBTyxnQkFBZ0IsR0FDckIscUJBQXFCLENBQUMsZ0JBQWdCLEVBQUUsZ0JBQWdCLENBQUMsR0FDekQsRUFBRSxDQUFDO0tBQ04sTUFBTSxJQUFJLElBQUksWUFBWSxXQUFXLEVBQUU7O0FBRXRDLGFBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmLE1BQU0sSUFBSSxJQUFJLFlBQVksSUFBSSxJQUFJLGdCQUFnQixFQUFFOztBQUVuRCxhQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZixNQUFNOztBQUVMLGFBQU8sRUFBRSxDQUFDO0tBQ1g7R0FDRixDQUFDLENBQUM7QUFDSCxNQUFJLFNBQVMsR0FBRyxRQUFBLEVBQUUsRUFBQyxNQUFNLE1BQUEsMEJBQUksUUFBUSxFQUFDLENBQUM7QUFDdkMsU0FBTyxTQUFTLENBQUM7Q0FDbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkM1SGMsVUFBQyxJQUFJLEVBQUs7Ozs7Ozs7Ozs7Ozs7O01BYWpCLDRCQUE0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQVFsQjtBQUNaLGVBQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDO09BQ2pDO3dCQUNXLEtBQUssRUFBRTtBQUNqQixZQUFJLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO0FBQUUseUZBQWdCLEtBQUssUUFBQztTQUFFO09BQzVEOzs7O0lBYndDLElBQUk7O0FBaUIvQyxTQUFPLDRCQUE0QixDQUFDO0NBQ3JDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkMvQmMsVUFBQyxJQUFJLEVBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQTBCakIsT0FBTzs7Ozs7Ozs7Ozs7d0NBRU87QUFDaEIscUZBQTJCO0FBQUUsNkZBQXdCO1NBQUU7QUFDdkQsWUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksQ0FBQztPQUNyRDs7Ozs7Ozs7Ozs7Ozs7OzBCQVlhO0FBQ1osZUFBTyxJQUFJLENBQUMsUUFBUSxDQUFDO09BQ3RCO3dCQUNXLEtBQUssRUFBRTtBQUNqQixZQUFJLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO0FBQUUsb0VBQWdCLEtBQUssUUFBQztTQUFFOzs7QUFBQSxBQUczRCxZQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtBQUM3QixlQUFLLEdBQUksS0FBSyxLQUFLLE9BQU8sQUFBQyxDQUFDO1NBQzdCO0FBQ0QsWUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7QUFDdEIsWUFBSSxLQUFLLEtBQUssS0FBSyxFQUFFOztBQUVuQixjQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUN2QyxNQUFNLElBQUksS0FBSyxJQUFJLElBQUksRUFBRTs7QUFFeEIsY0FBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNqQyxNQUFNOztBQUVMLGNBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ2xDO09BQ0Y7Ozs7SUF0Q21CLElBQUk7O0FBMEMxQixTQUFPLE9BQU8sQ0FBQztDQUNoQjs7Ozs7Ozs7Ozs7Ozs7O0FDdEVELHdDQUFvQzs7Ozs7Ozs7Ozs7Ozs7a0JBR3JCLFVBQUMsSUFBSSxFQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUF1QmpCLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQ0FXSCxJQUFJLEVBQUUsUUFBUSxFQUFFO0FBQzdCLDJGQUEwQjtBQUFFLG1HQUFxQixJQUFJLEVBQUUsUUFBUSxFQUFFO1NBQUU7T0FDcEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dDQXNDUyxJQUFJLEVBQUU7QUFDZCxzRkFBcUI7QUFBRSw4RkFBZ0IsSUFBSSxFQUFFO1NBQUU7QUFDL0MsWUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxLQUFLLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztPQUN2RDs7O3FDQUVjOzs7QUFDYix5RkFBd0I7QUFBRSxpR0FBcUI7U0FBRTs7QUFFakQsWUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7OztBQUcxQixtQ0FBVSxZQUFNO0FBQ2QsMkJBQWUsUUFBTSxDQUFDO1dBQ3ZCLENBQUMsQ0FBQztTQUNKOzs7QUFBQSxBQUdELGlDQUF5QixDQUFDLElBQUksQ0FBQyxDQUFDO09BQ2pDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBdUZhO0FBQ1osd0ZBQXVCO0FBQUUsZ0dBQW9CO1NBQUU7QUFDL0MsZUFBTyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO09BQzdCOzs7Ozs7Ozs7Ozs7OzttQ0FxQlk7QUFDWCx1RkFBc0I7QUFBRSwrRkFBbUI7U0FBRTtBQUM3QyxlQUFPLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7T0FDakQ7Ozs7Ozs7O21DQUtZO0FBQ1gsdUZBQXNCO0FBQUUsK0ZBQW1CO1NBQUU7QUFDN0MsZUFBTyxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUM7T0FDbEQ7Ozs7Ozs7O3VDQUtnQjtBQUNmLDJGQUEwQjtBQUFFLG1HQUF1QjtTQUFFO0FBQ3JELGVBQU8sV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxDQUFDO09BQ2xEOzs7Ozs7Ozs7OzswQkFsTG1CO0FBQ2xCLGVBQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztPQUM1Qjt3QkFDaUIsYUFBYSxFQUFFO0FBQy9CLFlBQUksZUFBZSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7QUFBRSxpRkFBc0IsYUFBYSxRQUFDO1NBQUU7QUFDL0UsWUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUM7T0FDckM7Ozs7Ozs7Ozs7OzBCQVF1QjtBQUN0QixlQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztPQUNoQzt3QkFDcUIsaUJBQWlCLEVBQUU7QUFDdkMsWUFBSSxtQkFBbUIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO0FBQUUscUZBQTBCLGlCQUFpQixRQUFDO1NBQUU7QUFDM0YsWUFBSSxDQUFDLGtCQUFrQixHQUFHLGlCQUFpQixDQUFDO09BQzdDOzs7MEJBdUNtQjtBQUNsQixZQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWTs7Ozs7O0FBQUMsQUFNckMsZUFBTyxZQUFZLEdBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUNoQyxDQUFDLENBQUMsQ0FBQztPQUNOO3dCQUNpQixLQUFLLEVBQUU7QUFDdkIsWUFBSSxlQUFlLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtBQUFFLGlGQUFzQixLQUFLLFFBQUM7U0FBRTtBQUN2RSxZQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQ3ZCLFlBQUksSUFBSSxZQUFBLENBQUM7QUFDVCxZQUFJLEtBQUssR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7QUFDbkMsY0FBSSxHQUFHLElBQUksQ0FBQztTQUNiLE1BQU07QUFDTCxjQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3JCO0FBQ0QsWUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7O0FBRXpCLFlBQUksS0FBSyxHQUFHLElBQUksV0FBVyxDQUFDLHdCQUF3QixFQUFFO0FBQ3BELGdCQUFNLEVBQUU7QUFDTix5QkFBYSxFQUFFLEtBQUs7QUFDcEIsaUJBQUssRUFBRSxLQUFLO0FBQUEsV0FDYjtTQUNGLENBQUMsQ0FBQztBQUNILFlBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7T0FDM0I7Ozs7Ozs7Ozs7OzswQkFTa0I7QUFDakIsZUFBTyxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQztPQUNuQzt3QkFDZ0IsSUFBSSxFQUFFO0FBQ3JCLFlBQUksY0FBYyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7QUFBRSxnRkFBcUIsSUFBSSxRQUFDO1NBQUU7QUFDcEUsWUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztBQUN0QyxZQUFJLFlBQVksRUFBRTtBQUNoQixjQUFJLElBQUksS0FBSyxZQUFZLEVBQUU7O0FBRXpCLG1CQUFPO1dBQ1I7O0FBQUEsQUFFRCxjQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztTQUMxQzs7O0FBQUEsQUFHRCxZQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztBQUMxQixZQUFJLElBQUksRUFBRTtBQUNSLGNBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ2pDOzs7O0FBQUEsQUFJRCxpQ0FBeUIsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7QUFFaEMsWUFBSSxLQUFLLEdBQUcsSUFBSSxXQUFXLENBQUMsdUJBQXVCLEVBQUU7QUFDbkQsZ0JBQU0sRUFBRTtBQUNOLHdCQUFZLEVBQUUsSUFBSTtBQUNsQix3QkFBWSxFQUFFLFlBQVk7QUFDMUIsaUJBQUssRUFBRSxJQUFJO0FBQUEsV0FDWjtTQUNGLENBQUMsQ0FBQztBQUNILFlBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7T0FDM0I7OzswQkFldUI7QUFDdEIsZUFBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7T0FDaEM7d0JBQ3FCLGlCQUFpQixFQUFFO0FBQ3ZDLFlBQUksbUJBQW1CLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtBQUFFLHFGQUEwQixpQkFBaUIsUUFBQztTQUFFO0FBQzNGLFlBQUksQ0FBQyxrQkFBa0IsR0FBRyxpQkFBaUIsQ0FBQztBQUM1QyxZQUFJLGlCQUFpQixFQUFFO0FBQ3JCLHlCQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkI7T0FDRjs7OzBCQWdDb0I7QUFDbkIsZUFBTyxJQUFJLENBQUMsZUFBZSxJQUFJLEtBQUssQ0FBQztPQUN0Qzt3QkFDa0IsS0FBSyxFQUFFO0FBQ3hCLFlBQUksZ0JBQWdCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtBQUFFLGtGQUF1QixLQUFLLFFBQUM7U0FBRTtBQUN6RSxZQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxNQUFNLENBQUM7QUFDaEQsaUNBQXlCLENBQUMsSUFBSSxDQUFDLENBQUM7T0FDakM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF0TjBCLElBQUk7O0FBMk9qQyxTQUFPLGNBQWMsQ0FBQztDQUN2Qjs7OztBQUlELFNBQVMsZUFBZSxDQUFDLE9BQU8sRUFBRTtBQUNoQyxNQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO0FBQ2xDLE1BQUksS0FBSyxHQUFHLENBQUMsRUFBRTs7QUFFYixRQUFJLE9BQU8sQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFOzs7O0FBSTdDLGFBQU8sQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO0tBQzNCLE1BQU07OztBQUdMLGFBQU8sQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0tBQzdCO0dBQ0Y7Q0FDRjs7OztBQUFBLEFBSUQsU0FBUyxXQUFXLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRTtBQUNuQyxNQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztBQUNqQyxNQUFJLFlBQVksWUFBQSxDQUFDO0FBQ2pCLE1BQUksT0FBTyxDQUFDLGNBQWMsRUFBRTs7O0FBRzFCLGdCQUFZLEdBQUcsQ0FBQyxBQUFDLEtBQUssR0FBRyxLQUFLLEdBQUksS0FBSyxDQUFBLEdBQUksS0FBSyxDQUFDO0dBQ2xELE1BQU07O0FBRUwsZ0JBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztHQUN4RDtBQUNELE1BQUksYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7QUFDMUMsTUFBSSxhQUFhLEtBQUssWUFBWSxFQUFFO0FBQ2xDLFdBQU8sQ0FBQyxhQUFhLEdBQUcsWUFBWSxDQUFDO0FBQ3JDLFdBQU8sSUFBSSxDQUFDO0dBQ2IsTUFBTTtBQUNMLFdBQU8sS0FBSyxDQUFDO0dBQ2Q7Q0FDRjs7OztBQUFBLEFBSUQsU0FBUyx5QkFBeUIsQ0FBQyxPQUFPLEVBQUU7QUFDMUMsTUFBSSxhQUFhLFlBQUEsQ0FBQztBQUNsQixNQUFJLGlCQUFpQixZQUFBLENBQUM7QUFDdEIsTUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztBQUMxQixNQUFJLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7O0FBRXZDLGlCQUFhLEdBQUcsS0FBSyxDQUFDO0FBQ3RCLHFCQUFpQixHQUFHLEtBQUssQ0FBQztHQUMzQixBQUFDLElBQUksT0FBTyxDQUFDLGNBQWMsRUFBRTs7QUFFNUIsaUJBQWEsR0FBRyxJQUFJLENBQUM7QUFDckIscUJBQWlCLEdBQUcsSUFBSSxDQUFDO0dBQzFCLE1BQU07QUFDTCxRQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO0FBQ2xDLFFBQUksS0FBSyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTs7O0FBR2pDLG1CQUFhLEdBQUcsSUFBSSxDQUFDO0FBQ3JCLHVCQUFpQixHQUFHLElBQUksQ0FBQztLQUMxQixNQUFNOztBQUVMLHVCQUFpQixHQUFJLEtBQUssR0FBRyxDQUFDLEFBQUMsQ0FBQztBQUNoQyxtQkFBYSxHQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQUFBQyxDQUFDO0tBQzVDO0dBQ0Y7QUFDRCxTQUFPLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztBQUN0QyxTQUFPLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUM7Q0FDL0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkMxVWMsVUFBQyxJQUFJLEVBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQXlDakIsUUFBUTs7Ozs7Ozs7Ozs7d0NBRU07QUFDaEIsc0ZBQTJCO0FBQUUsOEZBQXdCO1NBQUU7OztBQUFBLEFBR3ZELCtCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDO09BQy9COzs7Ozs7Ozs7Ozs7Ozs4QkFXTyxLQUFLLEVBQUU7QUFDYiw4RUFBbUI7QUFBRSw2RkFBcUIsS0FBSyxFQUFFO1NBQUU7T0FDcEQ7Ozs7Ozs7Ozs7MENBT21CO0FBQ2xCLHdGQUE2QjtBQUFFLGdHQUEwQjtTQUFFOztBQUUzRCxZQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEtBQUssSUFBSSxFQUFFOztBQUU3QyxjQUFJLG9CQUFvQixDQUFDLElBQUksQ0FBQyxFQUFFO0FBQzlCLGtDQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO1dBQzlCO0FBQ0QsaUJBQU87U0FDUjs7QUFFRCxZQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsRUFBRTs7O0FBR3BDLGNBQUksS0FBSyxHQUFHLHNCQUFzQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNwRCxjQUFJLEtBQUssRUFBRTtBQUNULGdCQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztXQUN4QztTQUNGOztBQUVELFlBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUMvQixpQ0FBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMvQjtPQUNGOzs7O0lBbERvQixJQUFJOztBQXNEM0IsU0FBTyxRQUFRLENBQUM7Q0FDakI7Ozs7Ozs7QUFPRCxTQUFTLE9BQU8sQ0FBQyxLQUFLLEVBQUU7O0FBRXRCLE1BQUksT0FBTyxHQUFHLEtBQUssQ0FBQzs7QUFFcEIsTUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFOzs7QUFHbkIsUUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7QUFDeEMsU0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQzdDLFVBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMxQixhQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3BELFVBQUksT0FBTyxFQUFFO0FBQ1gsY0FBTTtPQUNQO0tBQ0Y7R0FDRixNQUFNOztBQUVMLFdBQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0dBQy9COztBQUVELE1BQUksT0FBTyxFQUFFO0FBQ1gsU0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQ3ZCLFNBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztHQUN6QjtDQUNGOzs7QUFBQSxBQUlELFNBQVMsc0JBQXNCLENBQUMsVUFBVSxFQUFFO0FBQzFDLE1BQUksTUFBTSxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQUEsT0FBTztXQUFJLE9BQU8sQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDO0dBQUEsQ0FBQzs7QUFBQyxBQUVwRixNQUFJLGFBQWEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUEsS0FBSztXQUFJLEtBQUssSUFBSSxJQUFJO0dBQUEsQ0FBQyxDQUFDO0FBQzFELFNBQU8sYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQ3pCOztBQUdELFNBQVMsb0JBQW9CLENBQUMsT0FBTyxFQUFFO0FBQ3JDLFNBQU8sT0FBTyxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQztDQUN6Qzs7QUFHRCxTQUFTLHVCQUF1QixDQUFDLE9BQU8sRUFBRTtBQUN4QyxTQUFPLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNqRCxTQUFPLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQzs7O0FBQUMsQUFHOUQsTUFBSSxPQUFPLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksSUFBSSxPQUFPLENBQUMsUUFBUSxHQUFHLENBQUMsRUFBRTtBQUNwRSxXQUFPLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQztHQUN2QztDQUNGOztBQUdELFNBQVMsc0JBQXNCLENBQUMsT0FBTyxFQUFFO0FBQ3ZDLFNBQU8sQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDakUsU0FBTyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztBQUNoQyxTQUFPLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0NBQ3JDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDbEtjLFVBQUMsSUFBSSxFQUFLOzs7Ozs7Ozs7Ozs7Ozs7O01BZWpCLGlCQUFpQjs7Ozs7Ozs7Ozs7Ozs7OzsrQkFNWjtBQUNQLHNGQUFrQjtBQUFFLHFHQUFzQjtTQUFFO09BQzdDOzs7Ozs7Ozs7OEJBTU87QUFDTixxRkFBaUI7QUFBRSxvR0FBcUI7U0FBRTtPQUMzQzs7Ozs7Ozs7OytCQU1RO0FBQ1Asc0ZBQWtCO0FBQUUscUdBQXNCO1NBQUU7T0FDN0M7Ozs7Ozs7OztnQ0FNUztBQUNSLHVGQUFtQjtBQUFFLHNHQUF1QjtTQUFFO09BQy9DOzs7Ozs7Ozs7Z0NBTVM7QUFDUix1RkFBbUI7QUFBRSxzR0FBdUI7U0FBRTtPQUMvQzs7Ozs7Ozs7OzZCQU1NO0FBQ0wsb0ZBQWdCO0FBQUUsbUdBQW9CO1NBQUU7T0FDekM7Ozs7Ozs7Ozs7Ozs7Ozs4QkFtQk8sS0FBSyxFQUFFO0FBQ2IsWUFBSSxPQUFPLFlBQUEsQ0FBQzs7QUFFWixZQUFJLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO0FBQy9CLFlBQUksVUFBVSxHQUFJLElBQUksS0FBSyxZQUFZLElBQUksSUFBSSxLQUFLLE1BQU0sQUFBQyxDQUFDO0FBQzVELFlBQUksUUFBUSxHQUFJLElBQUksS0FBSyxVQUFVLElBQUksSUFBSSxLQUFLLE1BQU0sQUFBQzs7OztBQUFDLEFBSXhELGdCQUFRLEtBQUssQ0FBQyxPQUFPO0FBQ25CLGVBQUssRUFBRTs7QUFDTCxtQkFBTyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUN2QixrQkFBTTtBQUFBLEFBQ1IsZUFBSyxFQUFFOztBQUNMLG1CQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ3pCLGtCQUFNO0FBQUEsQUFDUixlQUFLLEVBQUU7O0FBQ0wsZ0JBQUksVUFBVSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7QUFDakQscUJBQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDekI7QUFDRCxrQkFBTTtBQUFBLEFBQ1IsZUFBSyxFQUFFOztBQUNMLGdCQUFJLFFBQVEsRUFBRTtBQUNaLHFCQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3ZEO0FBQ0Qsa0JBQU07QUFBQSxBQUNSLGVBQUssRUFBRTs7QUFDTCxnQkFBSSxVQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtBQUNqRCxxQkFBTyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUMxQjtBQUNELGtCQUFNO0FBQUEsQUFDUixlQUFLLEVBQUU7O0FBQ0wsZ0JBQUksUUFBUSxFQUFFO0FBQ1oscUJBQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDdkQ7QUFDRCxrQkFBTTtBQUFBOztBQUNULEFBRUQsZUFBTyxPQUFPLElBQUssa0tBQStCLEtBQUssQ0FBQyxBQUFDLENBQUM7T0FDM0Q7OzswQkE5Q29CO0FBQ25CLGVBQU8sSUFBSSxDQUFDLGVBQWUsSUFBSSxNQUFNLENBQUM7T0FDdkM7d0JBQ2tCLEtBQUssRUFBRTtBQUN4QixZQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztPQUM5Qjs7OztJQWpFNkIsSUFBSTs7QUE4R3BDLFNBQU8saUJBQWlCLENBQUM7Q0FDMUI7Ozs7Ozs7Ozs7Ozs7QUMvSEQsd0NBQW9DOzs7Ozs7Ozs7Ozs7Ozs7O2tCQUtyQixVQUFDLElBQUksRUFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQXdCakIscUJBQXFCOzs7Ozs7Ozs7Ozt3Q0FFUDs7O0FBQ2hCLG1HQUEyQjtBQUFFLDJHQUF3QjtTQUFFO0FBQ3ZELDZCQUFxQixDQUFDLElBQUksQ0FBQzs7Ozs7Ozs7QUFBQyxBQVE1QixpQ0FBVTtpQkFBTSxPQUFLLGNBQWMsRUFBRTtTQUFBLENBQUMsQ0FBQztPQUN4Qzs7Ozs7Ozs7Ozs7Ozt1Q0FVZ0I7QUFDZixrR0FBMEI7QUFBRSwwR0FBdUI7U0FBRTtBQUNyRCxZQUFJLEtBQUssR0FBRyxJQUFJLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQy9DLFlBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7T0FDM0I7Ozs7Ozs7Ozs7Ozs7SUEzQmlDLElBQUk7O0FBc0N4QyxTQUFPLHFCQUFxQixDQUFDO0NBQzlCOzs7OztBQUtELFNBQVMscUJBQXFCLENBQUMsT0FBTyxFQUFFO0FBQ3RDLFNBQU8sQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLGdCQUFnQixDQUFDO1dBQ3BELE9BQU8sQ0FBQyxjQUFjLEVBQUU7R0FBQSxDQUN6QixDQUFDO0FBQ0YsU0FBTyxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUU7O0FBRTlDLGlCQUFhLEVBQUUsSUFBSTtBQUNuQixhQUFTLEVBQUUsSUFBSTtBQUNmLFdBQU8sRUFBRSxJQUFJO0dBQ2QsQ0FBQyxDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkQsSUFBSSxPQUFPLEdBQUcsQ0FBQzs7O0FBQUM7a0JBSUQsVUFBQyxJQUFJLEVBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQWdDakIsbUJBQW1COzs7Ozs7Ozs7OztxQ0FFUixJQUFJLEVBQUUsUUFBUSxFQUFFO0FBQzdCLGdHQUEwQjtBQUFFLHdHQUFxQixJQUFJLEVBQUUsUUFBUSxFQUFFO1NBQUU7QUFDbkUsWUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDN0MsWUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUNyQixZQUFJLE1BQU0sRUFBRTtBQUNWLGNBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQzdCLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEdBQ2hDLElBQUksQ0FBQztBQUNQLG1CQUFTLENBQUMsWUFBWSxDQUFDLHVCQUF1QixFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ3pEO09BQ0Y7OzswQ0FFbUI7QUFDbEIsbUdBQTZCO0FBQUUsMkdBQTBCO1NBQUU7OztBQUFBLEFBRzNELFlBQUksZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQztBQUN4RCxZQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFOzs7QUFHMUMsY0FBSSxJQUFJLEdBQUcscUJBQXFCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLFNBQVMsQ0FBQztBQUMvRCwwQkFBZ0IsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzdDO0FBQ0QsWUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFOztBQUUzRCxjQUFJLFVBQVUsR0FBRyxpQ0FBaUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDcEUsY0FBSSxVQUFVLEVBQUU7QUFDZCw0QkFBZ0IsQ0FBQyxZQUFZLENBQUMsdUJBQXVCLEVBQUUsVUFBVSxDQUFDLENBQUM7V0FDcEU7U0FDRjs7OztBQUFBLEFBSUQsWUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTyxFQUFJO0FBQzFDLGNBQUksT0FBTyxLQUFLLGdCQUFnQixFQUFFO0FBQ2hDLG1CQUFPLENBQUMsZUFBZSxDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFDakQsbUJBQU8sQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1dBQ3RDO1NBQ0YsQ0FBQyxDQUFDO09BQ0o7Ozt3Q0FFaUI7QUFDaEIsaUdBQTJCO0FBQUUseUdBQXdCO1NBQUU7QUFDdkQsWUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUU7QUFDOUIsY0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDdEM7T0FDRjs7O2dDQUVTLElBQUksRUFBRTtBQUNkLDJGQUFxQjtBQUFFLG1HQUFnQixJQUFJLEVBQUU7U0FBRTs7QUFFL0MsWUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUU7O0FBRTlCLGNBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ3JDOzs7Ozs7Ozs7Ozs7QUFBQSxBQVlELFlBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFO0FBQ1osY0FBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FDaEIsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsUUFBUSxHQUN4QixTQUFTLENBQUM7QUFDZCxjQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sR0FBRyxPQUFPLEVBQUUsQ0FBQztTQUM5QjtPQUNGOzs7MEJBRWtCO0FBQ2pCLGdHQUEwQjtPQUMzQjt3QkFDZ0IsSUFBSSxFQUFFO0FBQ3JCLFlBQUksY0FBYyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7QUFBRSxxRkFBcUIsSUFBSSxRQUFDO1NBQUU7O0FBQUEsQUFFcEUsWUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO0FBQ2hCLGNBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQzdCLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEdBQ2hDLElBQUksQ0FBQztBQUNQLG1CQUFTLENBQUMsZUFBZSxDQUFDLHVCQUF1QixDQUFDLENBQUM7U0FDcEQ7T0FDRjs7OztJQXhGK0IsSUFBSTs7QUE0RnRDLFNBQU8sbUJBQW1CLENBQUM7Q0FDNUI7Ozs7QUFJRCxTQUFTLGlDQUFpQyxDQUFDLFVBQVUsRUFBRTtBQUNyRCxNQUFJLFdBQVcsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFBLE9BQU87V0FBSSxPQUFPLENBQUMsWUFBWSxDQUFDLHVCQUF1QixDQUFDO0dBQUEsQ0FBQyxDQUFDO0FBQ3BHLE1BQUksa0JBQWtCLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxVQUFBLFVBQVU7V0FBSSxVQUFVLEtBQUssSUFBSTtHQUFBLENBQUMsQ0FBQztBQUMvRSxTQUFPLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQzlCOzs7QUFBQSxBQUlELFNBQVMscUJBQXFCLENBQUMsVUFBVSxFQUFFO0FBQ3pDLE1BQUksS0FBSyxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQUEsT0FBTztXQUFJLE9BQU8sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDO0dBQUEsQ0FBQyxDQUFDO0FBQzdFLE1BQUksWUFBWSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQSxJQUFJO1dBQUksSUFBSSxLQUFLLElBQUk7R0FBQSxDQUFDLENBQUM7QUFDdkQsU0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDeEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkNqSmMsVUFBQyxJQUFJLEVBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQXVCakIsdUJBQXVCOzs7Ozs7Ozs7Ozt3Q0FFVDs7O0FBQ2hCLHFHQUEyQjtBQUFFLDZHQUF3QjtTQUFFO0FBQ3ZELFlBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTs7Ozs7OztBQU9uQixjQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUNaLGNBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDNUQsWUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFVBQUEsSUFBSSxFQUFJO0FBQ3BDLGdCQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2pDLG1CQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUM7V0FDbkIsQ0FBQyxDQUFDO1NBQ0o7T0FDRjs7Ozs7Ozs7Ozs7OztJQWxCbUMsSUFBSTs7QUE2QjFDLFNBQU8sdUJBQXVCLENBQUM7Q0FDaEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckRELElBQU0sbUJBQW1CLEdBQUksT0FBTyxXQUFXLENBQUMsU0FBUyxDQUFDLGdCQUFnQixLQUFLLFdBQVcsQUFBQzs7O0FBQUM7a0JBSTdFLFVBQUMsSUFBSSxFQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01Bd0JqQixjQUFjOzs7Ozs7Ozs7Ozs7Ozs7O3dDQU1BO0FBQ2hCLDRGQUEyQjtBQUFFLG9HQUF3QjtTQUFFO0FBQ3ZELFlBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFROzs7QUFBQyxBQUc3QixZQUFJLFFBQVEsRUFBRTs7QUFFWixjQUFJLE9BQU8sUUFBUSxLQUFLLFFBQVEsRUFBRTs7QUFFaEMsb0JBQVEsR0FBRywyQkFBMkIsQ0FBQyxRQUFRLENBQUMsQ0FBQztXQUNsRDs7QUFFRCxjQUFJLG1CQUFtQixFQUFFO0FBQ3ZCLG1DQUF1QixDQUFDLFFBQVEsQ0FBQyxDQUFDO1dBQ25DOztBQUVELGNBQUksTUFBTSxDQUFDLGlCQUFpQixFQUFFO0FBQzVCLDhCQUFrQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7V0FDOUM7OztBQUFBLEFBR0QsY0FBSSxJQUFJLEdBQUcsbUJBQW1CLEdBQzVCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtBQUN2QixjQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDO0FBQUMsQUFDdEMsY0FBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3hELGNBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDekI7T0FDRjs7OztJQWpDMEIsSUFBSTs7QUFxQ2pDLFNBQU8sY0FBYyxDQUFDO0NBQ3ZCOzs7O0FBSUQsU0FBUywyQkFBMkIsQ0FBQyxTQUFTLEVBQUU7QUFDOUMsTUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUM7Ozs7QUFBQyxBQUlsRCxNQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3hDLEtBQUcsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0FBQzFCLFNBQU8sR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQ2hDLFlBQVEsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztHQUNqRDtBQUNELFNBQU8sUUFBUSxDQUFDO0NBQ2pCOzs7O0FBQUEsQUFJRCxTQUFTLHVCQUF1QixDQUFDLFFBQVEsRUFBRTtBQUN6QyxJQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLFVBQUEsV0FBVyxFQUFJO0FBQ3hFLFFBQUksY0FBYyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDdkQsZUFBVyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0dBQ2xFLENBQUMsQ0FBQztDQUNKOzs7QUFBQSxBQUdELFNBQVMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxRQUFNLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztDQUNuRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDL0ZjLFVBQUMsSUFBSSxFQUFLOzs7Ozs7Ozs7Ozs7TUFXakIsY0FBYzs7Ozs7Ozs7Ozs7d0NBRUE7OztBQUNoQiw0RkFBMkI7QUFBRSxvR0FBd0I7U0FBRTs7Ozs7O0FBQUEsQUFNdkQsWUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEtBQUssTUFBTSxFQUFFO0FBQ2pELGNBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztTQUNqQzs7QUFFRCxZQUFJLENBQUMsY0FBYyxHQUFHLENBQUM7Ozs7Ozs7O0FBQUMsQUFReEIsWUFBSSxNQUFNLENBQUMsWUFBWSxFQUFFOztBQUV2QixjQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLFVBQUEsS0FBSyxFQUFJO0FBQzVDLGdCQUFJLDJCQUEyQixDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQ3RDLHdCQUFVLFNBQU8sS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDaEQ7V0FDRixDQUFDLENBQUM7QUFDSCxjQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLFVBQUEsS0FBSyxFQUFJO0FBQzVDLGdCQUFJLDJCQUEyQixDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQ3RDLGtCQUFJLE9BQU8sR0FBRyxTQUFTLFNBQU8sS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDNUQsa0JBQUksT0FBTyxFQUFFO0FBQ1gscUJBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztlQUN4QjthQUNGO1dBQ0YsQ0FBQyxDQUFDO0FBQ0gsY0FBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxVQUFBLEtBQUssRUFBSTtBQUMxQyxnQkFBSSwyQkFBMkIsQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUN0QyxzQkFBUSxTQUFPLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzlDO1dBQ0YsQ0FBQyxDQUFDO1NBQ0osTUFBTTs7QUFFTCxjQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLFVBQUEsS0FBSyxFQUFJO0FBQzNDLGdCQUFJLE9BQUssV0FBVyxFQUFFO0FBQ3BCLHFCQUFPO2FBQ1IsTUFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtBQUNyQyxrQkFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDOUMsa0JBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO0FBQzlDLHdCQUFVLFNBQU8sT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQ3BDLE1BQU07QUFDTCxxQkFBSyxXQUFXLEdBQUcsSUFBSSxDQUFDO2FBQ3pCO1dBQ0YsQ0FBQyxDQUFDO0FBQ0gsY0FBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxVQUFBLEtBQUssRUFBSTtBQUMxQyxnQkFBSSxDQUFDLE9BQUssV0FBVyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtBQUNuRCxrQkFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDOUMsa0JBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO0FBQzlDLGtCQUFJLE9BQU8sR0FBRyxTQUFTLFNBQU8sT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ2hELGtCQUFJLE9BQU8sRUFBRTtBQUNYLHFCQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7ZUFDeEI7YUFDRjtXQUNGLENBQUMsQ0FBQztBQUNILGNBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsVUFBQSxLQUFLLEVBQUk7QUFDekMsZ0JBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFOztBQUU5QixrQkFBSSxDQUFDLE9BQUssV0FBVyxFQUFFOztBQUVyQixvQkFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDOUMsb0JBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO0FBQzlDLHdCQUFRLFNBQU8sT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2VBQ2xDO0FBQ0QscUJBQUssV0FBVyxHQUFHLEtBQUssQ0FBQzthQUMxQjtXQUNGLENBQUMsQ0FBQztTQUNKO09BQ0Y7Ozs7Ozs7OzsrQkFNUTtBQUNQLG1GQUFrQjtBQUFFLGtHQUFzQjtTQUFFO09BQzdDOzs7Ozs7Ozs7Z0NBTVM7QUFDUixvRkFBbUI7QUFBRSxtR0FBdUI7U0FBRTtPQUMvQzs7Ozs7OzBCQUdvQjtBQUNuQiw2RkFBNEI7T0FDN0I7d0JBQ2tCLEtBQUssRUFBRTtBQUN4QixZQUFJLGdCQUFnQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7QUFBRSxrRkFBdUIsS0FBSyxRQUFDO1NBQUU7T0FDMUU7Ozs7Ozs7Ozs7OzBCQVFvQjtBQUNuQixlQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7T0FDN0I7d0JBQ2tCLEtBQUssRUFBRTtBQUN4QixZQUFJLGdCQUFnQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7QUFBRSxrRkFBdUIsS0FBSyxRQUFDO1NBQUU7QUFDekUsWUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7T0FDOUI7Ozs7SUFuSDBCLElBQUk7O0FBdUhqQyxTQUFPLGNBQWMsQ0FBQztDQUN2Qjs7OztBQUlELFNBQVMsMkJBQTJCLENBQUMsS0FBSyxFQUFFO0FBQzFDLFNBQU8sS0FBSyxDQUFDLFdBQVcsS0FBSyxLQUFLLElBQzdCLEtBQUssQ0FBQyxXQUFXLEtBQUssT0FBTyxJQUFJLEtBQUssQ0FBQyxTQUFTLEFBQUMsQ0FBQztDQUN4RDs7QUFHRCxTQUFTLFVBQVUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRTtBQUM3QyxTQUFPLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztBQUMvQixTQUFPLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUMxQixTQUFPLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztBQUM3QixTQUFPLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztBQUM3QixTQUFPLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztBQUNwQixTQUFPLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztDQUNyQjs7QUFFRCxTQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRTtBQUM1QyxTQUFPLENBQUMsT0FBTyxHQUFHLE9BQU8sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBQy9DLFNBQU8sQ0FBQyxPQUFPLEdBQUcsT0FBTyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFDL0MsU0FBTyxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUM7QUFDN0IsU0FBTyxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUM7QUFDN0IsTUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTs7QUFFekQsV0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUM7Ozs7Ozs7O0FBQUMsQUFRMUIsV0FBTyxJQUFJLENBQUM7R0FDYixNQUFNOztBQUVMLFdBQU8sS0FBSztBQUFDLEdBQ2Q7Q0FDRjs7QUFFRCxTQUFTLFFBQVEsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRTtBQUMzQyxTQUFPLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztBQUM5QixNQUFJLE9BQU8sQ0FBQyxPQUFPLElBQUksRUFBRSxFQUFFOztBQUV6QixXQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7R0FDbEIsTUFBTSxJQUFJLE9BQU8sQ0FBQyxPQUFPLElBQUksQ0FBQyxFQUFFLEVBQUU7O0FBRWpDLFdBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztHQUNuQixNQUFNOztBQUVMLFdBQU8sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDMUIsUUFBSSxjQUFjLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQztBQUM1QyxRQUFJLGNBQWMsSUFBSSxHQUFHLEVBQUU7QUFDekIsYUFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQ25CLE1BQU0sSUFBSSxjQUFjLElBQUksQ0FBQyxHQUFHLEVBQUU7QUFDakMsYUFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQ2xCO0dBQ0Y7QUFDRCxTQUFPLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztBQUMzQixTQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztBQUN2QixTQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztDQUN4Qjs7QUFFRCxTQUFTLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFO0FBQzNCLE1BQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUM7QUFDaEMsTUFBSSxZQUFZLEdBQUcsT0FBTyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7QUFDdkMsTUFBSSxRQUFRLEdBQUcsS0FBSyxHQUFHLENBQUMsR0FDdEIsWUFBWSxHQUFHLEtBQUssR0FDcEIsQ0FBQyxDQUFDO0FBQ0osU0FBTyxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUM7Q0FDbkM7Ozs7Ozs7Ozs7Ozs7OztBQzNNRCwwQ0FBc0M7Ozs7Ozs7Ozs7Ozs7O2tCQUl2QixVQUFDLElBQUksRUFBSzs7Ozs7Ozs7Ozs7Ozs7O01BY2pCLGtCQUFrQjs7Ozs7Ozs7Ozs7d0NBRUo7QUFDaEIsZ0dBQTJCO0FBQUUsd0dBQXdCO1NBQUU7QUFDdkQsWUFBSSxDQUFDLFVBQVUsR0FBRyx5QkFBZSxJQUFJLENBQUMsQ0FBQztPQUN4Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQWVZO0FBQ1gseUZBQW9CO09BQ3JCO3dCQUNVLE9BQU8sRUFBRTtBQUNsQixZQUFJLFFBQVEsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO0FBQUUsOEVBQWUsT0FBTyxRQUFDO1NBQUU7QUFDM0QsWUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7T0FDckM7Ozs7SUExQjhCLElBQUk7O0FBOEJyQyxTQUFPLGtCQUFrQixDQUFDO0NBQzNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkNoRGMsVUFBQyxJQUFJLEVBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQTBCakIsaUJBQWlCOzs7Ozs7Ozs7Ozt3Q0FFSDs7O0FBQ2hCLCtGQUEyQjtBQUFFLHVHQUF3QjtTQUFFO0FBQ3ZELFlBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQSxLQUFLLEVBQUk7QUFDdEMsY0FBSSxPQUFPLEdBQUcsS0FBSyxTQUFPLEtBQUssQ0FBQyxDQUFDO0FBQ2pDLGNBQUksT0FBTyxFQUFFO0FBQ1gsaUJBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztXQUN4QjtTQUNGLENBQUMsQ0FBQztBQUNILDBCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO09BQzFCOzs7Ozs7Ozs7K0JBTVE7QUFDUCxzRkFBa0I7QUFBRSxxR0FBc0I7U0FBRTtPQUM3Qzs7Ozs7Ozs7O2dDQU1TO0FBQ1IsdUZBQW1CO0FBQUUsc0dBQXVCO1NBQUU7T0FDL0M7Ozs7OzswQkFHb0I7QUFDbkIsZ0dBQTRCO09BQzdCO3dCQUNrQixLQUFLLEVBQUU7QUFDeEIsWUFBSSxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO0FBQUUscUZBQXVCLEtBQUssUUFBQztTQUFFO09BQzFFOzs7Ozs7Ozs7Ozs7MEJBU29CO0FBQ25CLGdHQUE0QjtPQUM3Qjt3QkFDa0IsS0FBSyxFQUFFO0FBQ3hCLFlBQUksZ0JBQWdCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtBQUFFLHFGQUF1QixLQUFLLFFBQUM7U0FBRTtPQUMxRTs7OztJQWpENkIsSUFBSTs7QUFxRHBDLFNBQU8saUJBQWlCLENBQUM7Q0FDMUI7Ozs7O0FBS0QsSUFBTSxrQkFBa0IsR0FBRyxHQUFHOzs7QUFBQyxBQUcvQixJQUFNLFVBQVUsR0FBRyxHQUFHOzs7QUFBQyxBQUl2QixTQUFTLFlBQVksQ0FBQyxPQUFPLEVBQUU7QUFDN0IsU0FBTyxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7QUFDM0IsU0FBTyxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7QUFDM0IsU0FBTyxDQUFDLDBCQUEwQixHQUFHLElBQUksQ0FBQztBQUMxQyxTQUFPLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDO0FBQ25DLFlBQVUsQ0FBQyxZQUFNO0FBQ2YsV0FBTyxDQUFDLDBCQUEwQixHQUFHLEtBQUssQ0FBQztHQUM1QyxFQUFFLGtCQUFrQixDQUFDLENBQUM7Q0FDeEI7OztBQUFBLEFBR0QsU0FBUyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUU7QUFDbkMsU0FBTyxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7QUFDM0IsU0FBTyxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7QUFDM0IsU0FBTyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7QUFDeEIsU0FBTyxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQztBQUNwQyxTQUFPLENBQUMsMEJBQTBCLEdBQUcsS0FBSyxDQUFDO0FBQzNDLE1BQUksT0FBTyxDQUFDLGlCQUFpQixFQUFFO0FBQzdCLGdCQUFZLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDeEMsV0FBTyxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztHQUNsQztDQUNGOzs7O0FBQUEsQUFJRCxTQUFTLElBQUksQ0FBQyxDQUFDLEVBQUU7QUFDZixTQUFPLEFBQUMsQ0FBQyxLQUFLLENBQUMsR0FDYixDQUFDLEdBQ0QsQUFBQyxDQUFDLEdBQUcsQ0FBQyxHQUNKLENBQUMsR0FDRCxDQUFDLENBQUMsQ0FBQztDQUNSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBb0JELFNBQVMsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUU7Ozs7QUFJN0IsTUFBSSxPQUFPLENBQUMsaUJBQWlCLEVBQUU7QUFDN0IsZ0JBQVksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztHQUN6QztBQUNELFNBQU8sQ0FBQyxpQkFBaUIsR0FBRyxVQUFVLENBQUMsWUFBTTtBQUMzQyxpQkFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0dBQ3hCLEVBQUUsVUFBVSxDQUFDLENBQUM7O0FBRWYsTUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztBQUMxQixNQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTTs7O0FBQUMsQUFHMUIsTUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFBLEFBQUMsQ0FBQztBQUNqRSxTQUFPLENBQUMsV0FBVyxHQUFHLE1BQU07OztBQUFDLEFBRzdCLE1BQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFOzs7QUFHdkMsV0FBTyxLQUFLLENBQUM7R0FDZDs7QUFFRCxNQUFJLE9BQU8sQ0FBQywwQkFBMEIsRUFBRTs7QUFFdEMsV0FBTyxJQUFJLENBQUM7R0FDYjs7QUFHRCxNQUFJLFlBQVksR0FBRyxDQUFDLEVBQUU7OztBQUdwQixXQUFPLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO0dBQ3JDLE1BQU0sSUFBSSxPQUFPLENBQUMsbUJBQW1CLEVBQUU7O0FBRXRDLFdBQU8sSUFBSSxDQUFDO0dBQ2I7O0FBRUQsU0FBTyxDQUFDLGNBQWMsSUFBSSxNQUFNOzs7QUFBQyxBQUdqQyxNQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDO0FBQ2hDLE1BQUksY0FBYyxHQUFHLEtBQUssR0FBRyxDQUFDLEdBQzVCLE9BQU8sQ0FBQyxjQUFjLEdBQUcsS0FBSyxHQUM5QixDQUFDLENBQUM7QUFDSixTQUFPLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztBQUMvQixnQkFBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDOUUsU0FBTyxDQUFDLGNBQWMsR0FBRyxjQUFjOzs7O0FBQUMsQUFJeEMsTUFBSSxjQUFjLEtBQUssQ0FBQyxFQUFFOztBQUV4QixXQUFPLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztBQUM5QixXQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDbEIsZ0JBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztHQUN2QixNQUFNLElBQUksY0FBYyxLQUFLLENBQUMsQ0FBQyxFQUFFOztBQUVoQyxXQUFPLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztBQUM5QixXQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDakIsZ0JBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztHQUN2Qjs7QUFFRCxTQUFPLElBQUksQ0FBQztDQUNiOzs7O0FBQUEsQUFJRCxTQUFTLGFBQWEsQ0FBQyxPQUFPLEVBQUU7Ozs7QUFJOUIsU0FBTyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7QUFDOUIsTUFBSSxjQUFjLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQztBQUM1QyxNQUFJLGNBQWMsSUFBSSxHQUFHLEVBQUU7O0FBRXpCLFdBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztHQUNuQixNQUFNLElBQUksY0FBYyxJQUFJLENBQUMsR0FBRyxFQUFFOztBQUVqQyxXQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7R0FDbEI7Ozs7O0FBQUEsQUFLRCxvQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztDQUM3Qjs7Ozs7Ozs7UUNqTmUsZUFBZSxHQUFmLGVBQWU7UUF1QmYsZ0JBQWdCLEdBQWhCLGdCQUFnQjtRQW1CaEIsY0FBYyxHQUFkLGNBQWM7UUFzQmQsZ0JBQWdCLEdBQWhCLGdCQUFnQjtRQWlCaEIscUJBQXFCLEdBQXJCLHFCQUFxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFqRjlCLFNBQVMsZUFBZSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUU7QUFDcEQsTUFBSSxNQUFNLFlBQUEsQ0FBQztBQUNYLE1BQUksS0FBSyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7QUFDMUIsTUFBSSxTQUFTLEdBQUcsQ0FBQyxFQUFFOztBQUVqQixVQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztHQUMvQixNQUFNLElBQUksU0FBUyxJQUFJLEtBQUssRUFBRTs7QUFFN0IsVUFBTSxHQUFHLEtBQUssR0FBRyxPQUFPLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDO0dBQzdDLE1BQU07O0FBRUwsVUFBTSxHQUFHLFNBQVMsQ0FBQztHQUNwQjtBQUNELFNBQU8sTUFBTSxDQUFDO0NBQ2Y7Ozs7Ozs7O0FBQUEsQUFTTSxTQUFTLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtBQUN4QyxNQUFJLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO0FBQzFDLE1BQUksYUFBYSxHQUFHLENBQUMsRUFBRTs7QUFFckIsV0FBTztHQUNSO0FBQ0QsTUFBSSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxDQUFDO0FBQ3JELFNBQU8sYUFBYSxHQUFHLGdCQUFnQixDQUFDO0NBQ3pDOzs7Ozs7Ozs7O0FBQUEsQUFXTSxTQUFTLGNBQWMsQ0FBQyxTQUFTLEVBQUU7OztBQUd4QyxNQUFJLEtBQUssR0FBRyxTQUFTLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN6RSxNQUFJLFFBQVEsR0FBRyxTQUFTLEdBQUcsS0FBSyxDQUFDO0FBQ2pDLFNBQU8sRUFBRSxLQUFLLEVBQUwsS0FBSyxFQUFFLFFBQVEsRUFBUixRQUFRLEVBQUUsQ0FBQztDQUM1Qjs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFnQk0sU0FBUyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFOzs7QUFHckQsU0FBTyxDQUFDLEFBQUMsU0FBUyxHQUFHLFNBQVMsR0FBSSxTQUFTLENBQUEsR0FBSSxTQUFTLENBQUM7Q0FDMUQ7Ozs7Ozs7Ozs7OztBQUFBLEFBYU0sU0FBUyxxQkFBcUIsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRTtBQUNoRSxNQUFJLElBQUksRUFBRTtBQUNSLGFBQVMsR0FBRyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7R0FDcEQ7QUFDRCxTQUFPLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztDQUNsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQWtCRCxTQUFTLE9BQU8sQ0FBQyxDQUFDLEVBQUU7QUFDbEIsTUFBSSxDQUFDLEdBQUcsQUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBLEFBQUMsR0FBSSxDQUFDLENBQUM7QUFDM0IsU0FBTyxDQUFDLENBQUM7Q0FDVjs7Ozs7Ozs7a0JDOUZ1QixTQUFTOzs7Ozs7Ozs7Ozs7Ozs7O0FBcEJqQyxJQUFJLFNBQVMsR0FBRyxFQUFFOzs7QUFBQyxBQUduQixJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQzs7O0FBQUMsQUFHMUMsSUFBSSxPQUFPLEdBQUcsQ0FBQzs7Ozs7Ozs7Ozs7OztBQUFDLEFBY0QsU0FBUyxTQUFTLENBQUMsUUFBUSxFQUFFO0FBQzFDLFdBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDOztBQUFDLEFBRXpCLFNBQU8sQ0FBQyxXQUFXLEdBQUcsRUFBRSxPQUFPLENBQUM7Q0FDakM7OztBQUFBLEFBSUQsU0FBUyxnQkFBZ0IsR0FBRztBQUMxQixTQUFPLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQzNCLFFBQUksUUFBUSxHQUFHLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNqQyxZQUFRLEVBQUUsQ0FBQztHQUNaO0NBQ0Y7OztBQUFBLEFBSUQsSUFBSSxRQUFRLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ3RELFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFO0FBQ3hCLGVBQWEsRUFBRSxJQUFJO0NBQ3BCLENBQUMsQ0FBQzs7Ozs7Ozs7a0JDbENxQixXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFwQixTQUFTLFdBQVcsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRTtBQUM3RCxNQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO0FBQ2xDLE1BQUksUUFBUSxHQUFHLEFBQUMsT0FBTyxLQUFLLEtBQUssV0FBVyxHQUMxQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQzlCLEtBQUssQ0FBQztBQUNSLE1BQUksUUFBUSxFQUFFO0FBQ1osYUFBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztHQUMxQixNQUFNO0FBQ0wsYUFBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztHQUM3QjtBQUNELFNBQU8sUUFBUSxDQUFDO0NBQ2pCOzs7Ozs7Ozs7Ozs7O0FDakNELHlFQUFxRTs7OztBQUNyRSxpRkFBNkU7Ozs7QUFDN0UsbUdBQStGOzs7O0FBQy9GLDZGQUF5Rjs7OztBQUN6RiwyRkFBdUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXVCakYsV0FBVzs7Ozs7Ozs7Ozs7Ozs7O3dCQVVYLElBQUksRUFBRTtBQUNSLDJFQUFlO0FBQUUsbUZBQVUsSUFBSSxFQUFFO09BQUU7QUFDbkMsYUFBTyxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsU0FBUyxVQUFLLElBQUksQ0FBRyxDQUFDO0tBQzNDOzs7O0VBYnVCLDBCQUFXLFdBQVcsQ0FBQyxDQUFDLE9BQU87OzhEQUt4RDs7a0JBWWMsV0FBVzs7Ozs7Ozs7Ozs7Ozs7O0FDNUMxQix1RUFBbUU7Ozs7QUFDbkUsdUVBQW1FOzs7O0FBQ25FLDJFQUF1RTs7OztBQUN2RSwyRkFBNEY7O0lBQWhGLG1CQUFtQjs7Ozs7Ozs7Ozs7O0FBRy9CLElBQUksSUFBSSx3QkFBYzs7Ozs7Ozs7Ozs7Ozs7OztBQUFDO0lBZ0JqQixlQUFlOzs7Ozs7Ozs7Ozt1Q0FFQTtBQUNqQiw0RkFBNEI7QUFBRSxvR0FBeUI7T0FBRTtBQUN6RCxVQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7S0FDZjs7O3NDQUVpQjtBQUNoQiwyRkFBMkI7QUFBRSxtR0FBd0I7T0FBRTtBQUN2RCxVQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO0FBQzFCLFVBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO0tBQzVCOzs7NkJBVVE7QUFDUCxrRkFBa0I7QUFBRSwwRkFBZTtPQUFFO0FBQ3JDLDJCQUFxQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztLQUNuRDs7Ozs7Ozs7Ozs7Ozs7O3dCQVhhO0FBQ1osYUFBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQztLQUN4Qzs7O3dCQUVXO0FBQ1YsYUFBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQztLQUN0Qzs7O3dCQWlCc0I7QUFDckIsYUFBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7S0FDL0I7c0JBQ29CLEtBQUssRUFBRTtBQUMxQixVQUFJLGtCQUFrQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7QUFBRSxtRkFBeUIsS0FBSyxRQUFDO09BQUU7QUFDN0UsVUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztBQUMvQixVQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7S0FDZjs7O3dCQUVtQjtBQUNsQixVQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQ3ZCLFVBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7QUFDckMsYUFBTyxLQUFLLElBQUksWUFBWSxHQUMxQixLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUMzQixDQUFDLENBQUMsQ0FBQztLQUNOO3NCQUNpQixLQUFLLEVBQUU7QUFDdkIsVUFBSSxlQUFlLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtBQUFFLGdGQUFzQixLQUFLLFFBQUM7T0FBRTtBQUN2RSxVQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDM0MsVUFBSSxJQUFJLEVBQUU7QUFDUixZQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztPQUMxQjtLQUNGOzs7d0JBRWtCO0FBQ2pCLGFBQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztLQUMzQjtzQkFDZ0IsSUFBSSxFQUFFO0FBQ3JCLFVBQUksY0FBYyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7QUFBRSwrRUFBcUIsSUFBSSxRQUFDO09BQUU7QUFDcEUsVUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7QUFDMUIsVUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQ2Y7Ozt3QkFFb0I7QUFDbkIsYUFBTyxrRkFBd0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztLQUMxRTtzQkFDa0IsS0FBSyxFQUFFO0FBQ3hCLFVBQUksZ0JBQWdCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtBQUFFLGlGQUF1QixLQUFLLFFBQUM7T0FBRTtBQUN6RSxpQ0FBWSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDNUM7Ozt3QkFFYztBQUNiLHVzQkE0QkU7S0FDSDs7OztFQTNHMkIsSUFBSTs7OztBQWlIbEMsU0FBUyxlQUFlLEdBQUc7QUFDekIsTUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7QUFDdEIsV0FBTztHQUNSO0FBQ0QsTUFBSSxTQUFTLEdBQUcsbUJBQW1CLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDM0QsTUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDbkQsTUFBSSxNQUFNLEdBQUcsbUJBQW1CLENBQUMsZUFBZSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUM7OztBQUFDLEFBR3ZFLE1BQUksSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztBQUN6QixNQUFJLFNBQVMsR0FBRyxhQUFhLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQztBQUM1QyxNQUFJLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO0FBQzFELE1BQUksQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7Q0FDckQ7O0FBR0QsUUFBUSxDQUFDLGVBQWUsQ0FBQyx3QkFBd0IsRUFBRSxlQUFlLENBQUMsQ0FBQztrQkFDckQsZUFBZTs7Ozs7Ozs7Ozs7OztBQ3hKOUIsdUVBQW1FOzs7O0FBQ25FLDZHQUF5Rzs7OztBQUN6RywrRkFBMkY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFrQnJGLFdBQVc7Ozs7Ozs7Ozs7O3VDQUtJO0FBQ2pCLHdGQUE0QjtBQUFFLGdHQUF5QjtPQUFFOztBQUFBLEFBRXpELFVBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUNyQjs7Ozs7O21DQVFjO0FBQ2Isb0ZBQXdCO0FBQUUsNEZBQXFCO09BQUU7QUFDakQsVUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztBQUN2QixVQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO0FBQ3pCLFVBQUksQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQUFBQyxLQUFLLEdBQUcsR0FBRyxHQUFJLEdBQUcsQ0FBQztBQUN6RCxVQUFJLFNBQVMsR0FBRyxBQUFDLEdBQUcsR0FBRyxLQUFLLEdBQUksR0FBRyxDQUFDO0FBQ3BDLFFBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxVQUFBLElBQUksRUFBSTtBQUM3QixZQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7T0FDOUIsQ0FBQyxDQUFDO0tBQ0o7Ozt3QkFmVztBQUNWLGFBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztLQUNyQjs7O3dCQWVjO0FBQ2IsdW9CQTRCRTtLQUNIOzs7O0VBMUR1QixzQkFBWSxPQUFPLHlFQUc1Qzs7QUE0REQsUUFBUSxDQUFDLGVBQWUsQ0FBQyxvQkFBb0IsRUFBRSxXQUFXLENBQUMsQ0FBQztrQkFDN0MsV0FBVyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgRWxlbWVudEJhc2UgZnJvbSAnLi4vLi4vYmFzaWMtZWxlbWVudC1iYXNlL3NyYy9FbGVtZW50QmFzZSc7XG5pbXBvcnQgQ29udGVudEFzSXRlbXMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ29udGVudEFzSXRlbXMnO1xuaW1wb3J0IERpcmVjdGlvblNlbGVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXJlY3Rpb25TZWxlY3Rpb24nO1xuaW1wb3J0IERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCc7XG5pbXBvcnQgR2VuZXJpYyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9HZW5lcmljJztcbmltcG9ydCBJdGVtc1NlbGVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9JdGVtc1NlbGVjdGlvbic7XG5pbXBvcnQgS2V5Ym9hcmQgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvS2V5Ym9hcmQnO1xuaW1wb3J0IEtleWJvYXJkRGlyZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0tleWJvYXJkRGlyZWN0aW9uJztcbmltcG9ydCBPYnNlcnZlQ29udGVudENoYW5nZXMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvT2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzJztcbmltcG9ydCBTZWxlY3Rpb25BcmlhQWN0aXZlIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NlbGVjdGlvbkFyaWFBY3RpdmUnO1xuaW1wb3J0IFNsaWRpbmdWaWV3cG9ydCBmcm9tICcuLi8uLi9iYXNpYy1zbGlkaW5nLXZpZXdwb3J0L3NyYy9TbGlkaW5nVmlld3BvcnQnOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcbmltcG9ydCBTd2lwZURpcmVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Td2lwZURpcmVjdGlvbic7XG5pbXBvcnQgVGFyZ2V0SW5Db2xsZWN0aXZlIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1RhcmdldEluQ29sbGVjdGl2ZSc7XG5pbXBvcnQgVHJhY2twYWREaXJlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvVHJhY2twYWREaXJlY3Rpb24nO1xuXG5sZXQgYmFzZSA9IEVsZW1lbnRCYXNlLmNvbXBvc2UoXG4gIENvbnRlbnRBc0l0ZW1zLFxuICBEaXJlY3Rpb25TZWxlY3Rpb24sXG4gIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQsXG4gIEdlbmVyaWMsXG4gIEl0ZW1zU2VsZWN0aW9uLFxuICBLZXlib2FyZCxcbiAgS2V5Ym9hcmREaXJlY3Rpb24sXG4gIE9ic2VydmVDb250ZW50Q2hhbmdlcyxcbiAgU2VsZWN0aW9uQXJpYUFjdGl2ZSxcbiAgU3dpcGVEaXJlY3Rpb24sXG4gIFRhcmdldEluQ29sbGVjdGl2ZSxcbiAgVHJhY2twYWREaXJlY3Rpb25cbik7XG5cblxuLyoqXG4gKiBMZXRzIHRoZSB1c2VyIG5hdmlnYXRlIGxhdGVyYWxseSB0aHJvdWdoIGEgc2VxdWVuY2Ugb2YgY2hpbGQgZWxlbWVudHMuXG4gKlxuICogYmFzaWMtY2Fyb3VzZWwgaXMgYW4gaW1wbGVtZW50YXRpb24gb2YgdGhlIGNhcm91c2VsIHVzZXIgaW50ZXJmYWNlIHBhdHRlcm4sXG4gKiBjb21tb25seSB1c2VkIGZvciBuYXZpZ2F0aW5nIGJldHdlZW4gaW1hZ2VzLCBwYWdlcywgYW5kIG90aGVyIGVsZW1lbnRzLiBUaGlzXG4gKiBwYXR0ZXJuIHByZXNlbnRzIHRoZSB1c2VyIHdpdGggYSBsaW5lYXIgc2VxdWVuY2Ugb2YgZWxlbWVudHMsIG9ubHkgb25lIG9mXG4gKiB3aGljaCBpcyBzaG93biBhdCBhIHRpbWUuIFRoZSB1c2VyIGNhbiBuYXZpZ2F0ZSB0byB0aGUgbmV4dC9wcmV2aW91cyBlbGVtZW50XG4gKiB3aXRoIGEgdmFyaWV0eSBvZiBpbnB1dCBtZXRob2RzLlxuICpcbiAqIFtMaXZlIGRlbW9dKGh0dHA6Ly9iYXNpY3dlYmNvbXBvbmVudHMub3JnL2Jhc2ljLXdlYi1jb21wb25lbnRzL3BhY2thZ2VzL2Jhc2ljLWNhcm91c2VsLylcbiAqXG4gKiBZb3UgY2FuIGFsc28gdmlldyBkZW1vcyB3aXRoIG9wdGlvbmFsXG4gKiBbYXJyb3dzXShodHRwOi8vYmFzaWN3ZWJjb21wb25lbnRzLm9yZy9iYXNpYy13ZWItY29tcG9uZW50cy9wYWNrYWdlcy9iYXNpYy1jYXJvdXNlbC9jYXJvdXNlbFdpdGhBcnJvd3MuaHRtbCksXG4gKiBbZG90c10oaHR0cDovL2Jhc2ljd2ViY29tcG9uZW50cy5vcmcvYmFzaWMtd2ViLWNvbXBvbmVudHMvcGFja2FnZXMvYmFzaWMtY2Fyb3VzZWwvY2Fyb3VzZWxXaXRoRG90cy5odG1sKSxcbiAqIG9yIGJvdGggW2Fycm93cyBhbmQgZG90c10oaHR0cDovL2Jhc2ljd2ViY29tcG9uZW50cy5vcmcvYmFzaWMtd2ViLWNvbXBvbmVudHMvcGFja2FnZXMvYmFzaWMtY2Fyb3VzZWwvY2Fyb3VzZWxXaXRoQXJyb3dzQW5kRG90cy5odG1sKS5cbiAqXG4gKiBiYXNpYy1jYXJvdXNlbCB1c2VzIGl0cyBjaGlsZHJlbiBhcyB0aGUgZWxlbWVudHMgdGhlIHVzZXIgd2lsbCBuYXZpZ2F0ZVxuICogdGhyb3VnaC4gSW4gYSB0eXBpY2FsIHVzZSwgYSBiYXNpYy1jYXJvdXNlbCBjYW4gYmUgdXNlZCB0byBuYXZpZ2F0ZSBiZXR3ZWVuIGFcbiAqIHNlcXVlbmNlIG9mIGltYWdlczpcbiAqXG4gKiAgICAgPGJhc2ljLWNhcm91c2VsPlxuICogICAgICAgPGltZyBzcmM9XCJpbWFnZTEuanBnXCI+XG4gKiAgICAgICA8aW1nIHNyYz1cImltYWdlMi5qcGdcIj5cbiAqICAgICAgIDxpbWcgc3JjPVwiaW1hZ2UzLmpwZ1wiPlxuICogICAgIDwvYmFzaWMtY2Fyb3VzZWw+XG4gKlxuICogVGhlIGNoaWxkIGVsZW1lbnRzIGNhbiBiZSBvZiBhbnkgdHlwZSDigJTCoHRoZXkgYXJlIG5vdCByZXN0cmljdGVkIHRvIGltYWdlcy5cbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBhdHRlbXB0cyB0byBtZWV0IHRoZSBbR29sZCBTdGFuZGFyZCBmb3Igd2ViIGNvbXBvbmVudHNdXG4gKiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYmNvbXBvbmVudHMvZ29sZC1zdGFuZGFyZC93aWtpKSBzbyB0aGF0IGl0IGlzIGdlbmVyYWxseVxuICogYXMgZmxleGlibGUgYW5kIHJvYnVzdCBhcyBzdGFuZGFyZCBIVE1MIGVsZW1lbnRzLiBGb3IgZXhhbXBsZSwgaXQgbWVldHMgdGhlXG4gKiBcIkNvbnRlbnQgQ2hhbmdlc1wiIGNyaXRlcmlhOiB0aGUgY2Fyb3VzZWwgd2lsbCBhZGFwdCB0byBuZXcgY2hpbGQgZWxlbWVudHNcbiAqIGFkZGVkIG9yIHJlbW92ZWQgYXQgcnVudGltZS5cbiAqXG4gKiBDdXJyZW50bHksIHRoaXMgY29tcG9uZW50IGRvZXMgbm90IG1lZXQgdGhlIEdvbGQgU3RhbmRhcmQgY3JpdGVyaWEgXCJTaXplIHRvXG4gKiBDb250ZW50XCIuIEFzIGEgcmVzdWx0LCBmb3IgdGhlIHRpbWUgYmVpbmcsICoqeW91IG11c3QgbWFudWFsbHkgc2V0IGEgc2l6ZSBvblxuICogdGhpcyBjb21wb25lbnQqKi4gVHdvIGFwcHJvYWNoZXMgYXJlIHRvOiAxKSBzdHJldGNoIHRoZSBjb21wb25lbnQgYWNyb3NzXG4gKiB3aGF0ZXZlciBzdXJmYWNlIGl0IGlzIGNvbnRhaW5lZCB3aXRoaW4sIG9yIDIpIHNldCBpdCB0byBiZSBsYXJnZXIgdGhhbiB0aGVcbiAqIGxhcmdlc3QgY2hpbGQgZWxlbWVudCB5b3Ugd2FudCB0byBkaXNwbGF5LiBUaGUgZm9ybWVyIGFwcHJvYWNoIGlzIG1vcmVcbiAqIGNvbW1vbiwgYW5kIGNhbiBiZSBhY2hpZXZlZCB3aXRoIENTUyBzdHlsaW5nIHN1Y2ggYXM6XG4gKlxuICogICAgIGh0bWwge1xuICogICAgICAgaGVpZ2h0OiAxMDAlO1xuICogICAgIH1cbiAqXG4gKiAgICAgYm9keSB7XG4gKiAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gKiAgICAgICBkaXNwbGF5OiBmbGV4O1xuICogICAgICAgaGVpZ2h0OiAxMDAlO1xuICogICAgICAgbWFyZ2luOiAwO1xuICogICAgIH1cbiAqXG4gKiAgICAgYmFzaWMtY2Fyb3VzZWwge1xuICogICAgICAgLXdlYmtpdC1mbGV4OiAxO1xuICogICAgICAgZmxleDogMTtcbiAqICAgICB9XG4gKlxuICogVGhlIHN0YW5kYXJkIGJhc2ljLWNhcm91c2VsIGNvbXBvbmVudCBzdXBwb3J0cyBuYXZpZ2F0aW9uIHZpYSB0aGUgZm9sbG93aW5nXG4gKiBpbnB1dCBtZXRob2RzOlxuICpcbiAqICogS2V5Ym9hcmQuIFdoZW4gdGhlIGNhcm91c2VsIGhhcyBmb2N1cywgdGhlIHVzZXIgY2FuIHByZXNzIExlZnQsIFJpZ2h0LFxuICogICBIb21lLCBvciBFbmQuIFRoZXNlIG5hdmlnYXRlIHRvIHRoZSBleHBlY3RlZCBlbGVtZW50LlxuICogKiBUb3VjaC4gT24gbW9iaWxlIGFuZCBvdGhlciB0b3VjaC1lbmFibGVkIGRldmljZXMsIHRoZSB1c2VyIGNhbiBkcmFnIGxlZnQgb3JcbiAqICAgcmlnaHQuXG4gKiAqIFRyYWNrcGFkLiBUaGUgdXNlciBjYW4gc3dpcGUgbGVmdCBvciByaWdodCBvbiBhIHRyYWNrcGFkIHRvIG5hdmlnYXRlLlxuICpcbiAqIEJlY2F1c2UgY2Fyb3VzZWxzIGFyZSB1c2VkIGluIGEgd2lkZSB2YXJpZXR5IG9mIGNpcmN1bXN0YW5jZXMsIGJ5IGRlZmF1bHRcbiAqIGJhc2ljLWNhcm91c2VsIHByb3ZpZGVzIGEgbWluaW1hbCBhcHBlYXJhbmNlIGFuZCBubyBzZXBhcmF0ZWx5IGludGVyYWN0aXZlXG4gKiBlbGVtZW50cyBzdWNoIGFzIGFycm93IGJ1dHRvbnMgb24gdGhlIHNpZGUgb3IgZG90cyBhbG9uZyB0aGUgYm90dG9tLiBUaG9zZVxuICogZWxlbWVudHMgY2FuIGJlIGFkZGVkIGJ5IHdyYXBwaW5nIGEgYmFzaWMtY2Fyb3VzZWwgaW4gb3B0aW9uYWwgYWNjZXNzb3JpZXM6XG4gKlxuICogKiBbYmFzaWMtYXJyb3ctc2VsZWN0aW9uXShodHRwOi8vZ2l0aHViLmNvbS9iYXNpYy13ZWItY29tcG9uZW50cy9iYXNpYy13ZWItY29tcG9uZW50cy9wYWNrYWdlcy9iYXNpYy1hcnJvdy1zZWxlY3Rpb24pLlxuICogICBUaGlzIGFkZHMgcHJvbWluZW50IGxlZnQgYW5kIHJpZ2h0IGFycm93IGJ1dHRvbnMgb24gdGhlIHNpZGUgb2YgdGhlIGNhcm91c2VsLlxuICogKiBbYmFzaWMtcGFnZS1kb3RzXShodHRwOi8vZ2l0aHViLmNvbS9iYXNpYy13ZWItY29tcG9uZW50cy9iYXNpYy13ZWItY29tcG9uZW50cy9wYWNrYWdlcy9iYXNpYy1wYWdlLWRvdHMpLlxuICogICBUaGlzIGFkZHMgYSBzZXJpZXMgb2Ygc21hbGwgZG90cyBiZWxvdyB0aGUgY2Fyb3VzZWwgdG8gaW5kaWNhdGUgdGhlIHVzZXInc1xuICogICBjdXJyZW50IHBvc2l0aW9uIGluIHRoZSBzZXF1ZW5jZS5cbiAqXG4gKiBTZWUgdGhvc2UgY29tcG9uZW50cyBmb3IgbW9yZSBkZXRhaWxzLCBidXQgaW4gZ2VuZXJhbCB5b3UgY2FuIGNvbnN0cnVjdCBhXG4gKiBjb21tb24gY2Fyb3VzZWwgd2l0aCBib3RoIGFycm93IGJ1dHRvbnMgYW5kIGRvdHMgbGlrZSBzbzpcbiAqXG4gKiAgICAgPGJhc2ljLWFycm93LXNlbGVjdGlvbj5cbiAqICAgICAgIDxiYXNpYy1wYWdlLWRvdHM+XG4gKiAgICAgICAgIDxiYXNpYy1jYXJvdXNlbD5cbiAqICAgICAgICAgICAuLi4gaW1hZ2VzLCBldGMuIC4uLlxuICogICAgICAgICA8L2Jhc2ljLWNhcm91c2VsPlxuICogICAgICAgPC9iYXNpYy1wYWdlLWRvdHM+XG4gKiAgICAgPC9iYXNpYy1hcnJvdy1zZWxlY3Rpb24+XG4gKlxuICogRm9yIHVuaXZlcnNhbCBhY2Nlc3MsIGJhc2ljLWNhcm91c2VsIGF1dG9tYXRpY2FsbHkgYWRkcyBhIHZhcmlldHkgb2ZcbiAqIFtBUklBXShodHRwOi8vd3d3LnczLm9yZy9XQUkvaW50cm8vYXJpYSkgcHJvcGVydGllcyB0byBpdHNlbGYgYW5kIHRvIGNoaWxkXG4gKiBlbGVtZW50cy4gVGhpcyBoZWxwcyB1c2VycyBuYXZpZ2F0ZSB0aGUgc2VxdWVuY2Ugb2YgZWxlbWVudHMgaW4gdGhlIGNhcm91c2VsXG4gKiB1c2luZyBhc3Npc3RpdmUgdGVjaG5vbG9naWVzLlxuICpcbiAqIEBleHRlbmRzIEVsZW1lbnRCYXNlXG4gKiBAbWl4ZXMgQ29udGVudEFzSXRlbXNcbiAqIEBtaXhlcyBEaXJlY3Rpb25TZWxlY3Rpb25cbiAqIEBtaXhlcyBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50XG4gKiBAbWl4ZXMgR2VuZXJpY1xuICogQG1peGVzIEl0ZW1zU2VsZWN0aW9uXG4gKiBAbWl4ZXMgS2V5Ym9hcmRcbiAqIEBtaXhlcyBLZXlib2FyZERpcmVjdGlvblxuICogQG1peGVzIE9ic2VydmVDb250ZW50Q2hhbmdlc1xuICogQG1peGVzIFNlbGVjdGlvbkFyaWFBY3RpdmVcbiAqIEBtaXhlcyBTd2lwZURpcmVjdGlvblxuICogQG1peGVzIFRhcmdldEluQ29sbGVjdGl2ZVxuICogQG1peGVzIFRyYWNrcGFkRGlyZWN0aW9uXG4gKi9cbmNsYXNzIENhcm91c2VsIGV4dGVuZHMgYmFzZSB7XG5cbiAgYXR0YWNoZWRDYWxsYmFjaygpIHtcbiAgICBpZiAoc3VwZXIuYXR0YWNoZWRDYWxsYmFjaykgeyBzdXBlci5hdHRhY2hlZENhbGxiYWNrKCk7IH1cbiAgICAvLyBIQUNLXG4gICAgdGhpcy5pdGVtc0NoYW5nZWQoKTtcbiAgICB0aGlzLnNlbGVjdGlvblJlcXVpcmVkID0gdHJ1ZTtcbiAgfVxuXG4gIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG4gICAgdGhpcy5uYXZpZ2F0aW9uQXhpcyA9ICdob3Jpem9udGFsJztcbiAgfVxuXG4gIGdldCBzZWxlY3RlZEZyYWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiQudmlld3BvcnQuc2VsZWN0ZWRGcmFjdGlvbjtcbiAgfVxuICBzZXQgc2VsZWN0ZWRGcmFjdGlvbih2YWx1ZSkge1xuICAgIGlmICgnc2VsZWN0ZWRGcmFjdGlvbicgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRGcmFjdGlvbiA9IHZhbHVlOyB9XG4gICAgdGhpcy4kLnZpZXdwb3J0LnNlbGVjdGVkRnJhY3Rpb24gPSB2YWx1ZTtcbiAgICBsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3NlbGVjdGlvbi1mcmFjdGlvbi1jaGFuZ2VkJyk7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgfVxuXG4gIGdldCBzZWxlY3RlZEluZGV4KCkge1xuICAgIHJldHVybiBzdXBlci5zZWxlY3RlZEluZGV4O1xuICB9XG4gIHNldCBzZWxlY3RlZEluZGV4KHZhbHVlKSB7XG4gICAgaWYgKCdzZWxlY3RlZEluZGV4JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEluZGV4ID0gdmFsdWU7IH1cbiAgICB0aGlzLiQudmlld3BvcnQuc2VsZWN0ZWRJbmRleCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHNlbGVjdGVkSXRlbSgpIHtcbiAgICByZXR1cm4gc3VwZXIuc2VsZWN0ZWRJdGVtO1xuICB9XG4gIHNldCBzZWxlY3RlZEl0ZW0oaXRlbSkge1xuICAgIGlmICgnc2VsZWN0ZWRJdGVtJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEl0ZW0gPSBpdGVtOyB9XG4gICAgdGhpcy4kLnZpZXdwb3J0LnNlbGVjdGVkSXRlbSA9IGl0ZW07XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIHdoZXRoZXIgYSB0cmFuc2l0aW9uIHNob3VsZCBiZSBzaG93biBkdXJpbmcgc2VsZWN0aW9uLlxuICAgKlxuICAgKiBDb21wb25lbnRzIGxpa2UgY2Fyb3VzZWxzIG9mdGVuIGRlZmluZSBhbmltYXRlZCBDU1MgdHJhbnNpdGlvbnMgZm9yXG4gICAqIHNsaWRpbmcgZWZmZWN0cy4gU3VjaCBhIHRyYW5zaXRpb24gc2hvdWxkIHVzdWFsbHkgKm5vdCogYmUgYXBwbGllZCB3aGlsZVxuICAgKiB0aGUgdXNlciBpcyBkcmFnZ2luZywgYmVjYXVzZSBhIENTUyBhbmltYXRpb24gd2lsbCBpbnRyb2R1Y2UgYSBsYWcgdGhhdFxuICAgKiBtYWtlcyB0aGUgc3dpcGUgZmVlbCBzbHVnZ2lzaC4gSW5zdGVhZCwgYXMgbG9uZyBhcyB0aGUgdXNlciBpcyBkcmFnZ2luZ1xuICAgKiB3aXRoIHRoZWlyIGZpbmdlciBkb3duLCB0aGUgdHJhbnNpdGlvbiBzaG91bGQgYmUgc3VwcHJlc3NlZC4gV2hlbiB0aGVcbiAgICogdXNlciByZWxlYXNlcyB0aGVpciBmaW5nZXIsIHRoZSB0cmFuc2l0aW9uIGNhbiBiZSByZXN0b3JlZCwgYWxsb3dpbmcgdGhlXG4gICAqIGFuaW1hdGlvbiB0byBzaG93IHRoZSBjYXJvdXNlbCBzbGlkaW5nIGludG8gaXRzIGZpbmFsIHBvc2l0aW9uLlxuICAgKlxuICAgKiBOb3RlOiBUaGlzIHByb3BlcnR5IGlzIG9ubHkgaW50ZW5kZWQgdG8gbGV0IGEgY29tcG9uZW50IGNvb3BlcmF0ZSB3aXRoXG4gICAqIG1peGlucyB0aGF0IG1heSBiZSBhcHBsaWVkIHRvIGl0LCBhbmQgaXMgbm90IGludGVuZGVkIHRvIGxldCBzb21lb25lXG4gICAqIHVzaW5nIGNvbXBvbmVudCBwZXJtYW5lbnRseSBlbmFibGUgb3IgZGlzYWJsZSB0cmFuc2l0aW9uIGVmZmVjdHMuXG4gICAqXG4gICAqIEB0eXBlIHtib29sZWFufSB0cnVlIGlmIGEgY29tcG9uZW50LXByb3ZpZGVkIHRyYW5zaXRpb24gc2hvdWxkIGJlIHNob3duLFxuICAgKiBmYWxzZSBpZiBub3QuXG4gICAqL1xuICBnZXQgc2hvd1RyYW5zaXRpb24oKSB7XG4gICAgcmV0dXJuIHN1cGVyLnNob3dUcmFuc2l0aW9uIHx8IHRoaXMuJC52aWV3cG9ydC5zaG93VHJhbnNpdGlvbjtcbiAgfVxuICBzZXQgc2hvd1RyYW5zaXRpb24odmFsdWUpIHtcbiAgICBpZiAoJ3Nob3dUcmFuc2l0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zaG93VHJhbnNpdGlvbiA9IHZhbHVlOyB9XG4gICAgdGhpcy4kLnZpZXdwb3J0LnNob3dUcmFuc2l0aW9uID0gdmFsdWU7XG4gIH1cblxuICBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgfVxuXG4gICAgICBiYXNpYy1zbGlkaW5nLXZpZXdwb3J0IHtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAtd2Via2l0LWZsZXg6IDE7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8YmFzaWMtc2xpZGluZy12aWV3cG9ydCBpZD1cInZpZXdwb3J0XCI+XG4gICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgIDwvYmFzaWMtc2xpZGluZy12aWV3cG9ydD5cbiAgICBgO1xuICB9XG59XG5cblxuZG9jdW1lbnQucmVnaXN0ZXJFbGVtZW50KCdiYXNpYy1jYXJvdXNlbCcsIENhcm91c2VsKTtcbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsO1xuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBBdHRyaWJ1dGVNYXJzaGFsbGluZy4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIG1hcnNoYWxscyBhdHRyaWJ1dGVzIHRvIHByb3BlcnRpZXMgKGFuZCBldmVudHVhbGx5IHZpY2UgdmVyc2EpLlxuICAgKlxuICAgKiBJZiB5b3VyIGNvbXBvbmVudCBleHBvc2VzIGEgc2V0dGVyIGZvciBhIHByb3BlcnR5LCBpdCdzIGdlbmVyYWxseSBhIGdvb2RcbiAgICogaWRlYSB0byBsZXQgZGV2cyB1c2luZyB5b3VyIGNvbXBvbmVudCBiZSBhYmxlIHRvIHNldCB0aGF0IHByb3BlcnR5IGluIEhUTUxcbiAgICogdmlhIGFuIGVsZW1lbnQgYXR0cmlidXRlLiBZb3UgY2FuIGNvZGUgdGhhdCB5b3Vyc2VsZiBieSB3cml0aW5nIGFuXG4gICAqIGBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tgLCBvciB5b3UgY2FuIHVzZSB0aGlzIG1peGluIHRvIGdldCBhIGRlZ3JlZSBvZlxuICAgKiBhdXRvbWF0aWMgc3VwcG9ydC5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBpbXBsZW1lbnRzIGFuIGBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tgIHRoYXQgd2lsbCBhdHRlbXB0IHRvXG4gICAqIGNvbnZlcnQgYSBjaGFuZ2UgaW4gYW4gZWxlbWVudCBhdHRyaWJ1dGUgaW50byBhIGNhbGwgdG8gdGhlIGNvcnJlc3BvbmRpbmdcbiAgICogcHJvcGVydHkgc2V0dGVyLiBBdHRyaWJ1dGVzIHR5cGljYWxseSBmb2xsb3cgaHlwaGVuYXRlZCBuYW1lcyAoXCJmb28tYmFyXCIpLFxuICAgKiB3aGVyZWFzIHByb3BlcnRpZXMgdHlwaWNhbGx5IHVzZSBjYW1lbENhc2UgbmFtZXMgKFwiZm9vQmFyXCIpLiBUaGlzIG1peGluXG4gICAqIHJlc3BlY3RzIHRoYXQgY29udmVudGlvbiwgYXV0b21hdGljYWxseSBtYXBwaW5nIHRoZSBoeXBoZW5hdGVkIGF0dHJpYnV0ZVxuICAgKiBuYW1lIHRvIHRoZSBjb3JyZXNwb25kaW5nIGNhbWVsQ2FzZSBwcm9wZXJ0eSBuYW1lLlxuICAgKlxuICAgKiBFeGFtcGxlOiBZb3UgZGVmaW5lIGEgY29tcG9uZW50IHVzaW5nIHRoaXMgbWl4aW46XG4gICAqXG4gICAqICAgICBjbGFzcyBNeUVsZW1lbnQgZXh0ZW5kcyBBdHRyaWJ1dGVNYXJzaGFsbGluZyhIVE1MRWxlbWVudCkge1xuICAgKiAgICAgICBnZXQgZm9vQmFyKCkgeyByZXR1cm4gdGhpcy5fZm9vQmFyOyB9XG4gICAqICAgICAgIHNldCBmb29CYXIodmFsdWUpIHsgdGhpcy5fZm9vQmFyID0gdmFsdWU7IH1cbiAgICogICAgIH1cbiAgICogICAgIGRvY3VtZW50LnJlZ2lzdGVyRWxlbWVudCgnbXktZWxlbWVudCcsIE15RWxlbWVudCk7XG4gICAqXG4gICAqIElmIHNvbWVvbmUgdGhlbiBpbnN0YW50aWF0ZXMgeW91ciBjb21wb25lbnQgaW4gSFRNTDpcbiAgICpcbiAgICogICAgIDxteS1lbGVtZW50IGZvby1iYXI9XCJIZWxsb1wiPjwvbXktZWxlbWVudD5cbiAgICpcbiAgICogVGhlbiwgYWZ0ZXIgdGhlIGVsZW1lbnQgaGFzIGJlZW4gdXBncmFkZWQsIHRoZSBgZm9vQmFyYCBzZXR0ZXIgd2lsbFxuICAgKiBhdXRvbWF0aWNhbGx5IGJlIGludm9rZWQgd2l0aCB0aGUgaW5pdGlhbCB2YWx1ZSBcIkhlbGxvXCIuXG4gICAqXG4gICAqIEZvciB0aGUgdGltZSBiZWluZywgdGhpcyBtaXhpbiBvbmx5IHN1cHBvcnRzIHN0cmluZy12YWx1ZWQgcHJvcGVydGllcy5cbiAgICogSWYgeW91J2QgbGlrZSB0byBjb252ZXJ0IHN0cmluZyBhdHRyaWJ1dGVzIHRvIG90aGVyIHR5cGVzIChudW1iZXJzLFxuICAgKiBib29sZWFucyksIHlvdSBuZWVkIHRvIGltcGxlbWVudCBgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrYCB5b3Vyc2VsZi5cbiAgICovXG4gIGNsYXNzIEF0dHJpYnV0ZU1hcnNoYWxsaW5nIGV4dGVuZHMgYmFzZSB7XG5cbiAgICAvKlxuICAgICAqIEhhbmRsZSBhIGNoYW5nZSB0byB0aGUgYXR0cmlidXRlIHdpdGggdGhlIGdpdmVuIG5hbWUuXG4gICAgICovXG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xuICAgICAgaWYgKHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjaykgeyBzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soKTsgfVxuICAgICAgLy8gSWYgdGhlIGF0dHJpYnV0ZSBuYW1lIGNvcnJlc3BvbmRzIHRvIGEgcHJvcGVydHkgbmFtZSwgdGhlbiBzZXQgdGhhdFxuICAgICAgLy8gcHJvcGVydHkuIElnbm9yZSBjaGFuZ2VzIGluIHN0YW5kYXJkIEhUTUxFbGVtZW50IHByb3BlcnRpZXMuXG4gICAgICBsZXQgcHJvcGVydHlOYW1lID0gYXR0cmlidXRlVG9Qcm9wZXJ0eU5hbWUobmFtZSk7XG4gICAgICBpZiAocHJvcGVydHlOYW1lIGluIHRoaXMgJiYgIShwcm9wZXJ0eU5hbWUgaW4gSFRNTEVsZW1lbnQucHJvdG90eXBlKSkge1xuICAgICAgICB0aGlzW3Byb3BlcnR5TmFtZV0gPSBuZXdWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEdlbmVyYXRlIGFuIGluaXRpYWwgY2FsbCB0byBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sgZm9yIGVhY2ggYXR0cmlidXRlXG4gICAgICogb24gdGhlIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBUT0RPOiBUaGUgcGxhbiBmb3IgQ3VzdG9tIEVsZW1lbnRzIHYxIGlzIGZvciB0aGUgYnJvd3NlciB0byBoYW5kbGUgdGhpcy5cbiAgICAgKiBPbmNlIHRoYXQncyBoYW5kbGVkIChpbmNsdWRpbmcgaW4gcG9seWZpbGxzKSwgdGhpcyBjYWxsIGNhbiBnbyBhd2F5LlxuICAgICAqL1xuICAgIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cbiAgICAgIGxldCBhdHRyaWJ1dGVzID0gW10uc2xpY2UuY2FsbCh0aGlzLmF0dHJpYnV0ZXMpOyAvLyBUbyBhcnJheSBmb3IgSUVcbiAgICAgIGF0dHJpYnV0ZXMuZm9yRWFjaChhdHRyaWJ1dGUgPT4ge1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhhdHRyaWJ1dGUubmFtZSwgdW5kZWZpbmVkLCBhdHRyaWJ1dGUudmFsdWUpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gQXR0cmlidXRlTWFyc2hhbGxpbmc7XG59O1xuXG5cbi8vIENvbnZlcnQgY2FtZWwgY2FzZSBmb29CYXIgbmFtZSB0byBoeXBoZW5hdGVkIGZvby1iYXIuXG5mdW5jdGlvbiBhdHRyaWJ1dGVUb1Byb3BlcnR5TmFtZShhdHRyaWJ1dGVOYW1lKSB7XG4gIGxldCBwcm9wZXJ0eU5hbWUgPSBhdHRyaWJ1dGVOYW1lLnJlcGxhY2UoLy0oW2Etel0pL2csIG0gPT4gbVsxXS50b1VwcGVyQ2FzZSgpKTtcbiAgcmV0dXJuIHByb3BlcnR5TmFtZTtcbn1cblxuLy8gQ29udmVydCBoeXBoZW5hdGVkIGZvby1iYXIgbmFtZSB0byBjYW1lbCBjYXNlIGZvb0Jhci5cbi8vIFRPRE86IFVzZSB0aGlzIHdoZW4gd2Ugc3VwcG9ydCByZWZsZWN0aW9uIG9mIHByb3BlcnRpZXMgdG8gYXR0cmlidXRlcy5cbi8vIGZ1bmN0aW9uIHByb3BlcnR5VG9BdHRyaWJ1dGVOYW1lKHByb3BlcnR5TmFtZSkge1xuLy8gICBsZXQgYXR0cmlidXRlTmFtZSA9IHByb3BlcnR5TmFtZS5yZXBsYWNlKC8oW2Etel1bQS1aXSkvZywgZyA9PiBnWzBdICsgJy0nICsgZ1sxXS50b0xvd2VyQ2FzZSgpKTtcbi8vICAgcmV0dXJuIGF0dHJpYnV0ZU5hbWU7XG4vLyB9XG4iLCIvKipcbiAqIEEgZ3JvdXAgb2YgZWxlbWVudHMgdGhhdCBoYXZlIGJlZW4gYXNzb2NpYXRlZCBmb3IgdGhlIHB1cnBvc2Ugb2ZcbiAqIGFjY29tcGxpc2hpbmcgc29tZSBjb2xsZWN0aXZlIGJlaGF2aW9yLCBlLmcuLCBrZXlib2FyZCBoYW5kbGluZy5cbiAqXG4gKiBUaGVyZSBhcmUgY2VydGFpbiBjb21wb25lbnRzIHRoYXQgd2FudCB0byBjb29wZXJhdGl2ZWx5IGhhbmRsZSB0aGUga2V5Ym9hcmQuXG4gKiBGb3IgZXhhbXBsZSwgdGhlIGJhc2ljLWFycm93LXNlbGVjdGlvbiBhbmQgYmFzaWMtcGFnZS1kb3RzIGNvbXBvbmVudHMgYXJlXG4gKiBvcHRpb25hbCBjb21wb25lbnRzIHRoYXQgY2FuIGF1Z21lbnQgdGhlIGFwcGVhcmFuY2UgYW5kIGJlaGF2aW9yIG9mIGFuIGlubmVyXG4gKiBiYXNpYy1jYXJvdXNlbCwgYWRkaW5nIGFycm93IGJ1dHRvbnMgYW5kIGRvdCBidXR0b25zLCByZXNwZWN0aXZlbHkuIFdoZW5cbiAqIHRoZXNlIGNvbXBvbmVudHMgYXJlIG5lc3RlZCB0b2dldGhlciwgdGhleSBmb3JtIGFuIGltcGxpY2l0IHVuaXQgY2FsbGVkIGFcbiAqICpjb2xsZWN0aXZlKjpcbiAqXG4gKiAgICAgPGJhc2ljLWFycm93LXNlbGVjdGlvbj5cbiAqICAgICAgIDxiYXNpYy1wYWdlLWRvdHM+XG4gKiAgICAgICAgIDxiYXNpYy1jYXJvdXNlbD5cbiAqICAgICAgICAgICAuLi4gaW1hZ2VzLCBldGMuIC4uLlxuICogICAgICAgICA8L2Jhc2ljLWNhcm91c2VsPlxuICogICAgICAgPC9iYXNpYy1wYWdlLWRvdHM+XG4gKiAgICAgPC9iYXNpYy1hcnJvdy1zZWxlY3Rpb24+XG4gKlxuICogSW4gdGhpcyBjb25maWd1cmF0aW9uLCB0aGUgdGhyZWUgY29tcG9uZW50cyB3aWxsIGFsbCBoYXZlIGEgYHRoaXMuY29sbGVjdGl2ZWBcbiAqIHJlZmVyZW5jZSB0aGF0IHJlZmVycyB0byBhIHNoYXJlZCBpbnN0YW5jZSBvZiB0aGUgYENvbGxlY3RpdmVgIGNsYXNzLlxuICpcbiAqIFRoZSBbS2V5Ym9hcmRdKEtleWJvYXJkLm1kKSBtaXhpbiB0aGV5IHVzZSBpcyBzZW5zaXRpdmUgdG8gdGhlIHByZXNlbmNlIG9mXG4gKiB0aGUgY29sbGVjdGl2ZS4gQW1vbmcgb3RoZXIgdGhpbmdzLCBpdCB3aWxsIGVuc3VyZSB0aGF0IG9ubHkgdGhlIG91dGVybW9zdFxuICogZWxlbWVudCBhYm92ZSDigJTCoHRoZSBiYXNpYy1hcnJvdy1zZWxlY3Rpb24g4oCUwqB3aWxsIGJlIGEgdGFiIHN0b3AgdGhhdCBjYW5cbiAqIHJlY2VpdmUgdGhlIGtleWJvYXJkIGZvY3VzLiBUaGlzIGxldHMgdGhlIHVzZXIgcGVyY2VpdmUgdGhlIGNvbXBvbmVudFxuICogYXJyYW5nZW1lbnQgYWJvdmUgYXMgYSBzaW5nbGUgdW5pdC4gVGhlIEtleWJvYXJkIG1peGluIHdpbGwgYWxzbyBnaXZlIGVhY2hcbiAqIGVsZW1lbnQgaW4gdGhlIGNvbGxlY3RpdmUgYSBjaGFuY2UgdG8gcHJvY2VzcyBhbnkga2V5Ym9hcmQgZXZlbnRzLiBTbywgZXZlblxuICogdGhvdWdoIHRoZSBiYXNpYy1hcnJvdy1zZWxlY3Rpb24gZWxlbWVudCB3aWxsIGhhdmUgdGhlIGZvY3VzLCB0aGUgc3RhbmRhcmRcbiAqIGtleWJvYXJkIG5hdmlnYXRpb24gcHJvdmlkZWQgYnkgYmFzaWMtY2Fyb3VzZWwgd2lsbCBjb250aW51ZSB0byB3b3JrLlxuICpcbiAqIFRoZSBbU2VsZWN0aW9uQXJpYUFjdGl2ZV0oU2VsZWN0aW9uQXJpYUFjdGl2ZS5tZCkgbWl4aW4gYWxzbyByZXNwZWN0c1xuICogY29sbGVjdGl2ZXMgd2hlbiB1c2luZyB0aGUgYGFyaWEtYWN0aXZlZGVzY2VuZGFudGAgYW5kIGByb2xlYCBhdHRyaWJ1dGVzLlxuICogVGhvc2Ugd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBvdXRlcm1vc3QgZWxlbWVudCAoYmFzaWMtYXJyb3ctc2VsZWN0aW9uLCBhYm92ZSlcbiAqIHNvIHRoYXQgQVJJQSBjYW4gY29ycmVjdGx5IHVuZGVyc3RhbmQgdGhlIGFycmFuZ2VtZW50IG9mIHRoZSBlbGVtZW50cy5cbiAqXG4gKiBZb3UgY2FuIHB1dCBlbGVtZW50cyBpbnRvIGNvbGxlY3RpdmVzIHlvdXJzZWxmLCBvciB5b3UgY2FuIHVzZSB0aGVcbiAqIFtUYXJnZXRJbkNvbGxlY3RpdmVdKFRhcmdldEluQ29sbGVjdGl2ZS5tZCkgbWl4aW4uXG4gKi9cbmNsYXNzIENvbGxlY3RpdmUge1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBjb2xsZWN0aXZlLlxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFTGVtZW50W119IFtlbGVtZW50c10gLSBJbml0aWFsIGVsZW1lbnRzIHRvIGFkZC5cbiAgICovXG4gIGNvbnN0cnVjdG9yKC4uLmVsZW1lbnRzKSB7XG4gICAgLyoqXG4gICAgICogVGhlIGVsZW1lbnRzIGluIHRoZSBjb2xsZWN0aXZlLlxuICAgICAqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50W119XG4gICAgICovXG4gICAgdGhpcy5lbGVtZW50cyA9IFtdO1xuICAgIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB0aGlzLmFzc2ltaWxhdGUoZWxlbWVudCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCB0aGUgaW5kaWNhdGVkIHRhcmdldCB0byB0aGUgY29sbGVjdGl2ZS5cbiAgICpcbiAgICogQnkgY29udmVudGlvbiwgaWYgdHdvIGVsZW1lbnRzIHdhbnRzIHRvIHBhcnRpY2lwYXRlIGluIGEgY29sbGVjdGl2ZSwgYW5kXG4gICAqIG9uZSBlbGVtZW50IGlzIGFuIGFuY2VzdG9yIG9mIHRoZSBvdGhlciBpbiB0aGUgRE9NLCB0aGUgYW5jZXN0b3Igc2hvdWxkXG4gICAqIGFzc2ltaWxhdGUgdGhlIGRlc2NlbmRhbnQgaW5zdGVhZCBvZiB0aGUgb3RoZXIgd2F5IGFyb3VuZC5cbiAgICpcbiAgICogQWZ0ZXIgYXNzaW1pbGF0aW9uLCBhbnkgZWxlbWVudCBpbiB0aGUgY29sbGVjdGl2ZSB0aGF0IGRlZmluZXMgYVxuICAgKiBgY29sbGVjdGl2ZUNoYW5nZWRgIG1ldGhvZCB3aWxsIGhhdmUgdGhhdCBtZXRob2QgaW52b2tlZC4gVGhpcyBhbGxvd3NcbiAgICogdGhlIGNvbGxlY3RpdmUncyBlbGVtZW50cyB0byByZXNwb25kIHRvIGNoYW5nZXMgaW4gdGhlIGNvbGxlY3RpdmUuXG4gICAqXG4gICAqIEBwYXJhbSB7KEhUTUxFbGVtZW50fENvbGxlY3RpdmUpfSB0YXJnZXQgLSBUaGUgZWxlbWVudCBvciBjb2xsZWN0aXZlIHRvIGFkZC5cbiAgICovXG4gIGFzc2ltaWxhdGUodGFyZ2V0KSB7XG4gICAgbGV0IGNvbGxlY3RpdmVDaGFuZ2VkO1xuICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBDb2xsZWN0aXZlKSB7XG4gICAgICBjb2xsZWN0aXZlQ2hhbmdlZCA9IGFzc2ltaWxhdGVDb2xsZWN0aXZlKHRoaXMsIHRhcmdldCk7XG4gICAgfSBlbHNlIGlmICh0YXJnZXQuY29sbGVjdGl2ZSkge1xuICAgICAgLy8gVGFyZ2V0IGlzIGFscmVhZHkgcGFydCBvZiBhIGNvbGxlY3RpdmUsIGFzc2ltaWxhdGUgaXQuXG4gICAgICBjb2xsZWN0aXZlQ2hhbmdlZCA9IGFzc2ltaWxhdGVDb2xsZWN0aXZlKHRoaXMsIHRhcmdldC5jb2xsZWN0aXZlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQXNzaW1pbGF0ZSBhbiBpbmRpdmlkdWFsIGVsZW1lbnQuXG4gICAgICBjb2xsZWN0aXZlQ2hhbmdlZCA9IGFzc2ltaWxhdGVFbGVtZW50KHRoaXMsIHRhcmdldCk7XG4gICAgfVxuXG4gICAgaWYgKGNvbGxlY3RpdmVDaGFuZ2VkKSB7XG4gICAgICB0aGlzLmludm9rZU1ldGhvZCgnY29sbGVjdGl2ZUNoYW5nZWQnKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSW52b2tlIGEgbWV0aG9kIG9uIGFsbCBlbGVtZW50cyBpbiB0aGUgY29sbGVjdGl2ZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZCAtIFRoZSBuYW1lIG9mIHRoZSBtZXRob2QgdG8gaW52b2tlIG9uIGFsbCBlbGVtZW50cy5cbiAgICogQHBhcmFtIHtvYmplY3RbXX0gW2FyZ3NdIC0gVGhlIGFyZ3VtZW50cyB0byB0aGUgbWV0aG9kXG4gICAqL1xuICBpbnZva2VNZXRob2QobWV0aG9kLCAuLi5hcmdzKSB7XG4gICAgLy8gSW52b2tlIGZyb20gaW5uZXJtb3N0IHRvIG91dGVybW9zdC5cbiAgICBsZXQgZWxlbWVudHMgPSB0aGlzLmVsZW1lbnRzO1xuICAgIGZvciAobGV0IGkgPSBlbGVtZW50cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IGVsZW1lbnQgPSBlbGVtZW50c1tpXTtcbiAgICAgIGlmIChlbGVtZW50W21ldGhvZF0pIHtcbiAgICAgICAgZWxlbWVudFttZXRob2RdLmFwcGx5KGVsZW1lbnQsIGFyZ3MpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgb3V0ZXJtb3N0IGVsZW1lbnQgaW4gdGhlIGNvbGxlY3RpdmUuXG4gICAqIEJ5IGNvbnZlbnRpb24sIHRoaXMgaXMgdGhlIGZpcnN0IGVsZW1lbnQgaW4gdGhlIGBlbGVtZW50c2AgYXJyYXkuXG4gICAqL1xuICBnZXQgb3V0ZXJtb3N0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50c1swXTtcbiAgfVxuXG59XG5cblxuLy8gVGhlIGZpcnN0IGNvbGxlY3RpdmUgYXNzaW1pbGF0ZXMgdGhlIHNlY29uZC5cbmZ1bmN0aW9uIGFzc2ltaWxhdGVDb2xsZWN0aXZlKGNvbGxlY3RpdmUxLCBjb2xsZWN0aXZlMikge1xuICBpZiAoY29sbGVjdGl2ZTEgPT09IGNvbGxlY3RpdmUyKSB7XG4gICAgLy8gQ29sbGVjdGl2ZXMgYXJlIHNhbWU7IGlnbm9yZS5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBsZXQgZWxlbWVudHMgPSBjb2xsZWN0aXZlMi5lbGVtZW50cztcblxuICAvLyBPbGQgY29sbGVjdGl2ZSB3aWxsIG5vIGxvbmdlciBoYXZlIGFueSBlbGVtZW50cyBvZiBpdHMgb3duLlxuICBjb2xsZWN0aXZlMi5lbGVtZW50cyA9IFtdO1xuXG4gIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgYXNzaW1pbGF0ZUVsZW1lbnQoY29sbGVjdGl2ZTEsIGVsZW1lbnQpO1xuICB9KTtcblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuXG4vLyBBc3NpbWlsYXRlIHRoZSBpbmRpY2F0ZWQgZWxlbWVudC5cbmZ1bmN0aW9uIGFzc2ltaWxhdGVFbGVtZW50KGNvbGxlY3RpdmUsIGVsZW1lbnQpIHtcbiAgaWYgKGVsZW1lbnQuY29sbGVjdGl2ZSA9PT0gY29sbGVjdGl2ZSkge1xuICAgIC8vIEFscmVhZHkgcGFydCBvZiB0aGlzIGNvbGxlY3RpdmUuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGVsZW1lbnQuY29sbGVjdGl2ZSA9IGNvbGxlY3RpdmU7XG4gIGNvbGxlY3RpdmUuZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgcmV0dXJuIHRydWU7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgQ29sbGVjdGl2ZTtcbiIsIi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggQ29tcG9zYWJsZS4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHRvIG1ha2UgYSBjbGFzcyBtb3JlIGVhc2lseSBjb21wb3NhYmxlIHdpdGggb3RoZXIgbWl4aW5zLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGNvbnRyaWJ1dGVzIGEgYGNvbXBvc2VgIG1ldGhvZCB0aGF0IGFwcGxpZXMgYSBzZXQgb2YgbWl4aW5cbiAgICogZnVuY3Rpb25zIGFuZCByZXR1cm5zIHRoZSByZXN1bHRpbmcgbmV3IGNsYXNzLiBUaGlzIHN1Z2FyIGNhbiBtYWtlIHRoZVxuICAgKiBhcHBsaWNhdGlvbiBvZiBtYW55IG1peGlucyBhdCBvbmNlIGVhc2llciB0byByZWFkLlxuICAgKi9cbiAgY2xhc3MgQ29tcG9zYWJsZSBleHRlbmRzIGJhc2Uge1xuXG4gICAgLyoqXG4gICAgICogQXBwbHkgYSBzZXQgb2YgbWl4aW4gZnVuY3Rpb25zIG9yIG1peGluIG9iamVjdHMgdG8gdGhlIHByZXNlbnQgY2xhc3MgYW5kXG4gICAgICogcmV0dXJuIHRoZSBuZXcgY2xhc3MuXG4gICAgICpcbiAgICAgKiBJbnN0ZWFkIG9mIHdyaXRpbmc6XG4gICAgICpcbiAgICAgKiAgICAgbGV0IE15Q2xhc3MgPSBNaXhpbjEoTWl4aW4yKE1peGluMyhNaXhpbjQoTWl4aW41KEJhc2VDbGFzcykpKSkpO1xuICAgICAqXG4gICAgICogWW91IGNhbiB3cml0ZTpcbiAgICAgKlxuICAgICAqICAgICBsZXQgTXlDbGFzcyA9IENvbXBvc2FibGUoQmFzZUNsYXNzKS5jb21wb3NlKFxuICAgICAqICAgICAgIE1peGluMSxcbiAgICAgKiAgICAgICBNaXhpbjIsXG4gICAgICogICAgICAgTWl4aW4zLFxuICAgICAqICAgICAgIE1peGluNCxcbiAgICAgKiAgICAgICBNaXhpbjVcbiAgICAgKiAgICAgKTtcbiAgICAgKlxuICAgICAqIFRoaXMgZnVuY3Rpb24gY2FuIGFsc28gdGFrZSBtaXhpbiBvYmplY3RzLiBBIG1peGluIG9iamVjdCBpcyBqdXN0IGFcbiAgICAgKiBzaG9ydGhhbmQgZm9yIGEgbWl4aW4gZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGEgbmV3IHN1YmNsYXNzIHdpdGggdGhlIGdpdmVuXG4gICAgICogbWVtYmVycy4gVGhlIG1peGluIG9iamVjdCdzIG1lbWJlcnMgYXJlICpub3QqIGNvcGllZCBkaXJlY3RseSBvbnRvIHRoZVxuICAgICAqIHByb3RvdHlwZSBvZiB0aGUgYmFzZSBjbGFzcywgYXMgd2l0aCB0cmFkaXRpb25hbCBtaXhpbnMuXG4gICAgICpcbiAgICAgKiBJbiBhZGRpdGlvbiB0byBwcm92aWRpbmcgc3ludGFjdGljIHN1Z2FyLCB0aGlzIG1peGluIGNhbiBiZSB1c2VkIHRvXG4gICAgICogZGVmaW5lIGEgY2xhc3MgaW4gRVM1LCB3aGljaCBsYWNrcyBFUzYncyBgY2xhc3NgIGtleXdvcmQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gey4uLm1peGluc30gbWl4aW5zIC0gQSBzZXQgb2YgbWl4aW4gZnVuY3Rpb25zIG9yIG9iamVjdHMgdG8gYXBwbHkuXG4gICAgICovXG4gICAgc3RhdGljIGNvbXBvc2UoLi4ubWl4aW5zKSB7XG4gICAgICAvLyBXZSBjcmVhdGUgYSBuZXcgc3ViY2xhc3MgZm9yIGVhY2ggbWl4aW4gaW4gdHVybi4gVGhlIHJlc3VsdCBiZWNvbWVzXG4gICAgICAvLyB0aGUgYmFzZSBjbGFzcyBleHRlbmRlZCBieSBhbnkgc3Vic2VxdWVudCBtaXhpbnMuIEl0IHR1cm5zIG91dCB0aGF0XG4gICAgICAvLyB3ZSBjYW4gdXNlIEFycmF5LnJlZHVjZSgpIHRvIGNvbmNpc2VseSBleHByZXNzIHRoaXMsIHVzaW5nIHRoZSBjdXJyZW50XG4gICAgICAvLyBvYmplY3QgYXMgdGhlIHNlZWQgZm9yIHJlZHVjZSgpLlxuICAgICAgcmV0dXJuIG1peGlucy5yZWR1Y2UoY29tcG9zZUNsYXNzLCB0aGlzKTtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBDb21wb3NhYmxlO1xufTtcblxuXG4vLyBQcm9wZXJ0aWVzIGRlZmluZWQgYnkgT2JqZWN0IHRoYXQgd2UgZG9uJ3Qgd2FudCB0byBtaXhpbi5cbmNvbnN0IE5PTl9NSVhBQkxFX09CSkVDVF9QUk9QRVJUSUVTID0gW1xuICAnY29uc3RydWN0b3InXG5dO1xuXG4vKlxuICogQXBwbHkgdGhlIG1peGluIHRvIHRoZSBnaXZlbiBiYXNlIGNsYXNzIHRvIHJldHVybiBhIG5ldyBjbGFzcy5cbiAqIFRoZSBtaXhpbiBjYW4gZWl0aGVyIGJlIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBtb2RpZmllZCBjbGFzcywgb3IgYVxuICogcGxhaW4gb2JqZWN0IHdob3NlIG1lbWJlcnMgd2lsbCBiZSBjb3BpZWQgdG8gdGhlIG5ldyBjbGFzcycgcHJvdG90eXBlLlxuICovXG5mdW5jdGlvbiBjb21wb3NlQ2xhc3MoYmFzZSwgbWl4aW4pIHtcbiAgaWYgKHR5cGVvZiBtaXhpbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIE1peGluIGZ1bmN0aW9uXG4gICAgcmV0dXJuIG1peGluKGJhc2UpO1xuICB9IGVsc2Uge1xuICAgIC8vIE1peGluIG9iamVjdFxuICAgIGNsYXNzIFN1YmNsYXNzIGV4dGVuZHMgYmFzZSB7fVxuICAgIGNvcHlPd25Qcm9wZXJ0aWVzKG1peGluLCBTdWJjbGFzcy5wcm90b3R5cGUsIE5PTl9NSVhBQkxFX09CSkVDVF9QUk9QRVJUSUVTKTtcbiAgICByZXR1cm4gU3ViY2xhc3M7XG4gIH1cbn1cblxuXG4vKlxuICogQ29weSB0aGUgZ2l2ZW4gcHJvcGVydGllcy9tZXRob2RzIHRvIHRoZSB0YXJnZXQuXG4gKiBSZXR1cm4gdGhlIHVwZGF0ZWQgdGFyZ2V0LlxuICovXG5mdW5jdGlvbiBjb3B5T3duUHJvcGVydGllcyhzb3VyY2UsIHRhcmdldCwgaWdub3JlUHJvcGVydHlOYW1lcyA9IFtdKSB7XG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZSkuZm9yRWFjaChuYW1lID0+IHtcbiAgICBpZiAoaWdub3JlUHJvcGVydHlOYW1lcy5pbmRleE9mKG5hbWUpIDwgMCkge1xuICAgICAgbGV0IGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgbmFtZSk7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gdGFyZ2V0O1xufVxuIiwiaW1wb3J0IHRvZ2dsZUNsYXNzIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL3RvZ2dsZUNsYXNzJztcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIENvbnRlbnRBc0l0ZW1zLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggbWFwcyBjb250ZW50IHNlbWFudGljcyAoZWxlbWVudHMpIHRvIGxpc3QgaXRlbSBzZW1hbnRpY3MuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyBhIGNvbXBvbmVudCB0byBwcm92aWRlIGEgYGNvbnRlbnRgIHByb3BlcnR5IHJldHVybmluZyBhXG4gICAqIHJhdyBzZXQgb2YgZWxlbWVudHMuIFlvdSBjYW4gcHJvdmlkZSB0aGF0IHlvdXJzZWxmLCBvciB1c2UgdGhlXG4gICAqIFtEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50XShEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50Lm1kKSBtaXhpbi5cbiAgICpcbiAgICogSXRlbXMgZGlmZmVyIGZyb20gZWxlbWVudCBjb250ZW50cyBpbiBzZXZlcmFsIHdheXM6XG4gICAqXG4gICAqICogVGhleSBhcmUgb2Z0ZW4gcmVmZXJlbmNlZCB2aWEgaW5kZXguXG4gICAqICogVGhleSBtYXkgaGF2ZSBhIHNlbGVjdGlvbiBzdGF0ZS5cbiAgICogKiBJdCdzIGNvbW1vbiB0byBkbyB3b3JrIHRvIGluaXRpYWxpemUgdGhlIGFwcGVhcmFuY2Ugb3Igc3RhdGUgb2YgYSBuZXdcbiAgICogICBpdGVtLlxuICAgKiAqIEF1eGlsaWFyeSBpbnZpc2libGUgY2hpbGQgZWxlbWVudHMgYXJlIGZpbHRlcmVkIG91dCBhbmQgbm90IGNvdW50ZWQgYXNcbiAgICogICBpdGVtcy4gQXV4aWxpYXJ5IGVsZW1lbnRzIGluY2x1ZGUgbGluaywgc2NyaXB0LCBzdHlsZSwgYW5kIHRlbXBsYXRlXG4gICAqICAgZWxlbWVudHMuIFRoaXMgZmlsdGVyaW5nIGVuc3VyZXMgdGhhdCB0aG9zZSBhdXhpbGlhcnkgZWxlbWVudHMgY2FuIGJlXG4gICAqICAgdXNlZCBpbiBtYXJrdXAgaW5zaWRlIG9mIGEgbGlzdCB3aXRob3V0IGJlaW5nIHRyZWF0ZWQgYXMgbGlzdCBpdGVtcy5cbiAgICovXG4gIGNsYXNzIENvbnRlbnRBc0l0ZW1zIGV4dGVuZHMgYmFzZSB7XG5cbiAgICAvKipcbiAgICAgKiBBcHBseSB0aGUgc2VsZWN0aW9uIHN0YXRlIHRvIGEgc2luZ2xlIGl0ZW0uXG4gICAgICpcbiAgICAgKiBJbnZva2UgdGhpcyBtZXRob2QgdG8gc2lnbmFsIHRoYXQgdGhlIHNlbGVjdGVkIHN0YXRlIG9mIHRoZSBpbmRpY2F0ZWQgaXRlbVxuICAgICAqIGhhcyBjaGFuZ2VkLiBCeSBkZWZhdWx0LCB0aGlzIGFwcGxpZXMgYSBgc2VsZWN0ZWRgIENTUyBjbGFzcyBpZiB0aGUgaXRlbVxuICAgICAqIGlzIHNlbGVjdGVkLCBhbmQgcmVtb3ZlZCBpdCBpZiBub3Qgc2VsZWN0ZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpdGVtIC0gVGhlIGl0ZW0gd2hvc2Ugc2VsZWN0aW9uIHN0YXRlIGhhcyBjaGFuZ2VkLlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gc2VsZWN0ZWQgLSBUcnVlIGlmIHRoZSBpdGVtIGlzIHNlbGVjdGVkLCBmYWxzZSBpZiBub3QuXG4gICAgICovXG4gICAgYXBwbHlTZWxlY3Rpb24oaXRlbSwgc2VsZWN0ZWQpIHtcbiAgICAgIGlmIChzdXBlci5hcHBseVNlbGVjdGlvbikgeyBzdXBlci5hcHBseVNlbGVjdGlvbihpdGVtLCBzZWxlY3RlZCk7IH1cbiAgICAgIHRvZ2dsZUNsYXNzKGl0ZW0sICdzZWxlY3RlZCcsIHNlbGVjdGVkKTtcbiAgICB9XG5cbiAgICBjb250ZW50Q2hhbmdlZCgpIHtcbiAgICAgIGlmIChzdXBlci5jb250ZW50Q2hhbmdlZCkgeyBzdXBlci5jb250ZW50Q2hhbmdlZCgpOyB9XG4gICAgICB0aGlzLl9pdGVtcyA9IG51bGw7XG4gICAgICB0aGlzLml0ZW1zQ2hhbmdlZCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbmV2ZXIgYSBuZXcgaXRlbSBpcyBhZGRlZCB0byB0aGUgbGlzdC5cbiAgICAgKlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy4gWW91IGNhbiBvdmVycmlkZVxuICAgICAqIHRoaXMgdG8gcGVyZm9ybSBwZXItaXRlbSBpbml0aWFsaXphdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGl0ZW0gLSBUaGUgaXRlbSB0aGF0IHdhcyBhZGRlZC5cbiAgICAgKi9cbiAgICBpdGVtQWRkZWQoaXRlbSkge1xuICAgICAgaWYgKHN1cGVyLml0ZW1BZGRlZCkgeyBzdXBlci5pdGVtQWRkZWQoaXRlbSk7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCBzZXQgb2YgaXRlbXMgaW4gdGhlIGxpc3QuIFNlZSB0aGUgdG9wLWxldmVsIGRvY3VtZW50YXRpb24gZm9yXG4gICAgICogbWl4aW4gZm9yIGEgZGVzY3JpcHRpb24gb2YgaG93IGl0ZW1zIGRpZmZlciBmcm9tIHBsYWluIGNvbnRlbnQuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnRbXX1cbiAgICAgKi9cbiAgICBnZXQgaXRlbXMoKSB7XG4gICAgICBpZiAodGhpcy5faXRlbXMgPT0gbnVsbCkge1xuICAgICAgICB0aGlzLl9pdGVtcyA9IGZpbHRlckF1eGlsaWFyeUVsZW1lbnRzKHRoaXMuY29udGVudCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5faXRlbXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgaXMgaW52b2tlZCB3aGVuIHRoZSB1bmRlcmx5aW5nIGNvbnRlbnRzIGNoYW5nZS4gSXQgaXMgYWxzb1xuICAgICAqIGludm9rZWQgb24gY29tcG9uZW50IGluaXRpYWxpemF0aW9uIOKAkyBzaW5jZSB0aGUgaXRlbXMgaGF2ZSBcImNoYW5nZWRcIiBmcm9tXG4gICAgICogYmVpbmcgbm90aGluZy5cbiAgICAgKi9cbiAgICBpdGVtc0NoYW5nZWQoKSB7XG4gICAgICBpZiAoc3VwZXIuaXRlbXNDaGFuZ2VkKSB7IHN1cGVyLml0ZW1zQ2hhbmdlZCgpOyB9XG5cbiAgICAgIC8vIFBlcmZvcm0gcGVyLWl0ZW0gaW5pdGlhbGl6YXRpb24uXG4gICAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGlmICghaXRlbS5faXRlbUluaXRpYWxpemVkKSB7XG4gICAgICAgICAgdGhpcy5pdGVtQWRkZWQoaXRlbSk7XG4gICAgICAgICAgaXRlbS5faXRlbUluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2l0ZW1zLWNoYW5nZWQnKSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBAZXZlbnQgaXRlbXMtY2hhbmdlZFxuICAgICAqXG4gICAgICogVGhpcyBldmVudCBpcyByYWlzZWQgd2hlbiB0aGUgc2V0IG9mIGl0ZW1zIGNoYW5nZXMuXG4gICAgICovXG4gIH1cblxuICByZXR1cm4gQ29udGVudEFzSXRlbXM7XG59O1xuXG5cbi8vIFJldHVybiB0aGUgZ2l2ZW4gZWxlbWVudHMsIGZpbHRlcmluZyBvdXQgYXV4aWxpYXJ5IGVsZW1lbnRzIHRoYXQgYXJlbid0XG4vLyB0eXBpY2FsbHkgdmlzaWJsZS4gSXRlbXMgd2hpY2ggYXJlIG5vdCBlbGVtZW50cyBhcmUgcmV0dXJuZWQgYXMgaXMuXG5mdW5jdGlvbiBmaWx0ZXJBdXhpbGlhcnlFbGVtZW50cyhpdGVtcykge1xuICBsZXQgYXV4aWxpYXJ5VGFncyA9IFtcbiAgICAnbGluaycsXG4gICAgJ3NjcmlwdCcsXG4gICAgJ3N0eWxlJyxcbiAgICAndGVtcGxhdGUnXG4gIF07XG4gIHJldHVybiBbXS5maWx0ZXIuY2FsbChpdGVtcywgZnVuY3Rpb24oaXRlbSkge1xuICAgIHJldHVybiAhaXRlbS5sb2NhbE5hbWUgfHwgYXV4aWxpYXJ5VGFncy5pbmRleE9mKGl0ZW0ubG9jYWxOYW1lKSA8IDA7XG4gIH0pO1xufVxuXG5cbi8qKlxuICogRmlyZXMgd2hlbiB0aGUgaXRlbXMgaW4gdGhlIGxpc3QgY2hhbmdlLlxuICpcbiAqIEBtZW1iZXJvZiBDb250ZW50QXNJdGVtc1xuICogQGV2ZW50IGl0ZW1zLWNoYW5nZWRcbiAqL1xuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBEaXJlY3Rpb25TZWxlY3Rpb24uICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBtYXBzIGRpcmVjdGlvbiBzZW1hbnRpY3MgKGdvTGVmdCwgZ29SaWdodCwgZXRjLikgdG8gc2VsZWN0aW9uXG4gICAqIHNlbWFudGljcyAoc2VsZWN0UHJldmlvdXMsIHNlbGVjdE5leHQsIGV0Yy4pLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGNhbiBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggdGhlXG4gICAqIFtLZXlib2FyZERpcmVjdGlvbl0oS2V5Ym9hcmREaXJlY3Rpb24ubWQpIG1peGluICh3aGljaCBtYXBzIGtleWJvYXJkIGV2ZW50c1xuICAgKiB0byBkaXJlY3Rpb25zKSBhbmQgYSBtaXhpbiB0aGF0IGhhbmRsZXMgc2VsZWN0aW9uIGxpa2VcbiAgICogW0l0ZW1zU2VsZWN0aW9uXShJdGVtc1NlbGVjdGlvbi5tZCkuXG4gICAqL1xuICBjbGFzcyBEaXJlY3Rpb25TZWxlY3Rpb24gZXh0ZW5kcyBiYXNlIHtcblxuICAgIGdvRG93bigpIHtcbiAgICAgIGlmIChzdXBlci5nb0Rvd24pIHsgc3VwZXIuZ29Eb3duKCk7IH1cbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdE5leHQoKTtcbiAgICB9XG5cbiAgICBnb0VuZCgpIHtcbiAgICAgIGlmIChzdXBlci5nb0VuZCkgeyBzdXBlci5nb0VuZCgpOyB9XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RMYXN0KCk7XG4gICAgfVxuXG4gICAgZ29MZWZ0KCkge1xuICAgICAgaWYgKHN1cGVyLmdvTGVmdCkgeyBzdXBlci5nb0xlZnQoKTsgfVxuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0UHJldmlvdXMoKTtcbiAgICB9XG5cbiAgICBnb1JpZ2h0KCkge1xuICAgICAgaWYgKHN1cGVyLmdvUmlnaHQpIHsgc3VwZXIuZ29SaWdodCgpOyB9XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3ROZXh0KCk7XG4gICAgfVxuXG4gICAgZ29TdGFydCgpIHtcbiAgICAgIGlmIChzdXBlci5nb1N0YXJ0KSB7IHN1cGVyLmdvU3RhcnQoKTsgfVxuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0Rmlyc3QoKTtcbiAgICB9XG5cbiAgICBnb1VwKCkge1xuICAgICAgaWYgKHN1cGVyLmdvVXApIHsgc3VwZXIuZ29VcCgpOyB9XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RQcmV2aW91cygpO1xuICAgIH1cblxuICAgIC8vIERlZmF1bHQgaW1wbGVtZW50YXRpb24uIFRoaXMgd2lsbCB0eXBpY2FsbHkgYmUgaGFuZGxlZCBieSBvdGhlciBtaXhpbnMuXG4gICAgZ2V0IHNlbGVjdGVkRnJhY3Rpb24oKSB7XG4gICAgICByZXR1cm4gc3VwZXIuc2VsZWN0ZWRGcmFjdGlvbjtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGVkRnJhY3Rpb24odmFsdWUpIHtcbiAgICAgIGlmICgnc2VsZWN0ZWRGcmFjdGlvbicgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRGcmFjdGlvbiA9IHZhbHVlOyB9XG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCBpbXBsZW1lbnRhdGlvbi4gVGhpcyB3aWxsIHR5cGljYWxseSBiZSBoYW5kbGVkIGJ5IG90aGVyIG1peGlucy5cbiAgICBzZWxlY3RGaXJzdCgpIHtcbiAgICAgIGlmIChzdXBlci5zZWxlY3RGaXJzdCkgeyByZXR1cm4gc3VwZXIuc2VsZWN0Rmlyc3QoKTsgfVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgaW1wbGVtZW50YXRpb24uIFRoaXMgd2lsbCB0eXBpY2FsbHkgYmUgaGFuZGxlZCBieSBvdGhlciBtaXhpbnMuXG4gICAgc2VsZWN0TGFzdCgpIHtcbiAgICAgIGlmIChzdXBlci5zZWxlY3RMYXN0KSB7IHJldHVybiBzdXBlci5zZWxlY3RMYXN0KCk7IH1cbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IGltcGxlbWVudGF0aW9uLiBUaGlzIHdpbGwgdHlwaWNhbGx5IGJlIGhhbmRsZWQgYnkgb3RoZXIgbWl4aW5zLlxuICAgIHNlbGVjdE5leHQoKSB7XG4gICAgICBpZiAoc3VwZXIuc2VsZWN0TmV4dCkgeyByZXR1cm4gc3VwZXIuc2VsZWN0TmV4dCgpOyB9XG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCBpbXBsZW1lbnRhdGlvbi4gVGhpcyB3aWxsIHR5cGljYWxseSBiZSBoYW5kbGVkIGJ5IG90aGVyIG1peGlucy5cbiAgICBzZWxlY3RQcmV2aW91cygpIHtcbiAgICAgIGlmIChzdXBlci5zZWxlY3RQcmV2aW91cykgeyByZXR1cm4gc3VwZXIuc2VsZWN0UHJldmlvdXMoKTsgfVxuICAgIH1cblxuICAgIC8vIE1hcCBkcmFnIHRyYXZlbCBmcmFjdGlvbiB0byBzZWxlY3Rpb24gZnJhY3Rpb24uXG4gICAgZ2V0IHRyYXZlbEZyYWN0aW9uKCkge1xuICAgICAgcmV0dXJuIHN1cGVyLnRyYXZlbEZyYWN0aW9uO1xuICAgIH1cbiAgICBzZXQgdHJhdmVsRnJhY3Rpb24odmFsdWUpIHtcbiAgICAgIGlmICgndHJhdmVsRnJhY3Rpb24nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnRyYXZlbEZyYWN0aW9uID0gdmFsdWU7IH1cbiAgICAgIHRoaXMuc2VsZWN0ZWRGcmFjdGlvbiA9IHZhbHVlO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIERpcmVjdGlvblNlbGVjdGlvbjtcbn07XG4iLCIvLyBUT0RPOiBSYXRpb25hbGl6ZSB3aXRoIG5ldyBDdXN0b20gRWxlbWVudHMgQVBJLlxuLy8gVE9ETzogQ29uc2lkZXIgcmVuYW1pbmcgdG8gbWF0Y2ggQ3VzdG9tIEVsZW1lbnRzIEFQSS5cblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIERpc3RyaWJ1dGVkQ2hpbGRyZW4uICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBkZWZpbmVzIGhlbHBlcnMgZm9yIGFjY2Vzc2luZyBhIGNvbXBvbmVudCdzIGRpc3RyaWJ1dGVkXG4gICAqIGNoaWxkcmVuIGFzIGEgZmxhdHRlbmVkIGFycmF5IG9yIHN0cmluZy5cbiAgICpcbiAgICogVGhlIHN0YW5kYXJkIERPTSBBUEkgcHJvdmlkZXMgc2V2ZXJhbCB3YXlzIG9mIGFjY2Vzc2luZyBjaGlsZCBjb250ZW50OlxuICAgKiBgY2hpbGRyZW5gLCBgY2hpbGROb2Rlc2AsIGFuZCBgdGV4dENvbnRlbnRgLiBOb25lIG9mIHRoZXNlIGZ1bmN0aW9ucyBhcmVcbiAgICogU2hhZG93IERPTSBhd2FyZS4gVGhpcyBtaXhpbiBkZWZpbmVzIHZhcmlhdGlvbnMgb2YgdGhvc2UgZnVuY3Rpb25zIHRoYXRcbiAgICogKmFyZSogU2hhZG93IERPTSBhd2FyZS5cbiAgICpcbiAgICogRXhhbXBsZTogeW91IGNyZWF0ZSBhIGNvbXBvbmVudCBgPGNvdW50LWNoaWxkcmVuPmAgdGhhdCBkaXNwbGF5cyBhIG51bWJlclxuICAgKiBlcXVhbCB0byB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIHBsYWNlZCBpbnNpZGUgdGhhdCBjb21wb25lbnQuIElmIHNvbWVvbmVcbiAgICogaW5zdGFudGlhdGVzIHlvdXIgY29tcG9uZW50IGxpa2U6XG4gICAqXG4gICAqICAgICA8Y291bnQtY2hpbGRyZW4+XG4gICAqICAgICAgIDxkaXY+PC9kaXY+XG4gICAqICAgICAgIDxkaXY+PC9kaXY+XG4gICAqICAgICAgIDxkaXY+PC9kaXY+XG4gICAqICAgICA8L2NvdW50LWNoaWxkcmVuPlxuICAgKlxuICAgKiBUaGVuIHRoZSBjb21wb25lbnQgc2hvdWxkIHNob3cgXCIzXCIsIGJlY2F1c2UgdGhlcmUgYXJlIHRocmVlIGNoaWxkcmVuLiBUb1xuICAgKiBjYWxjdWxhdGUgdGhlIG51bWJlciBvZiBjaGlsZHJlbiwgdGhlIGNvbXBvbmVudCBjYW4ganVzdCBjYWxjdWxhdGVcbiAgICogYHRoaXMuY2hpbGRyZW4ubGVuZ3RoYC4gSG93ZXZlciwgc3VwcG9zZSBzb21lb25lIGluc3RhbnRpYXRlcyB5b3VyXG4gICAqIGNvbXBvbmVudCBpbnNpZGUgb25lIG9mIHRoZWlyIG93biBjb21wb25lbnRzLCBhbmQgcHV0cyBhIGA8c2xvdD5gIGVsZW1lbnRcbiAgICogaW5zaWRlIHlvdXIgY29tcG9uZW50OlxuICAgKlxuICAgKiAgICAgPGNvdW50LWNoaWxkcmVuPlxuICAgKiAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAqICAgICA8L2NvdW50LWNoaWxkcmVuPlxuICAgKlxuICAgKiBJZiB5b3VyIGNvbXBvbmVudCBvbmx5IGxvb2tzIGF0IGB0aGlzLmNoaWxkcmVuYCwgaXQgd2lsbCBhbHdheXMgc2VlIGV4YWN0bHlcbiAgICogb25lIGNoaWxkIOKAlMKgdGhlIGA8c2xvdD5gIGVsZW1lbnQuIEJ1dCB0aGUgdXNlciBsb29raW5nIGF0IHRoZSBwYWdlIHdpbGxcbiAgICogKnNlZSogYW55IG5vZGVzIGRpc3RyaWJ1dGVkIHRvIHRoYXQgc2xvdC4gVG8gbWF0Y2ggd2hhdCB0aGUgdXNlciBzZWVzLCB5b3VyXG4gICAqIGNvbXBvbmVudCBzaG91bGQgZXhwYW5kIGFueSBgPHNsb3Q+YCBlbGVtZW50cyBpdCBjb250YWlucy5cbiAgICpcbiAgICogVGhhdCBpcyB0aGUgcHJvYmxlbSB0aGlzIG1peGluIHNvbHZlcy4gQWZ0ZXIgYXBwbHlpbmcgdGhpcyBtaXhpbiwgeW91clxuICAgKiBjb21wb25lbnQgY29kZSBoYXMgYWNjZXNzIHRvIGB0aGlzLmRpc3RyaWJ1dGVkQ2hpbGRyZW5gLCB3aG9zZSBgbGVuZ3RoYFxuICAgKiB3aWxsIHJldHVybiB0aGUgdG90YWwgbnVtYmVyIG9mIGFsbCBjaGlsZHJlbiBkaXN0cmlidXRlZCB0byB5b3VyIGNvbXBvbmVudFxuICAgKiBpbiB0aGUgY29tcG9zZWQgdHJlZS5cbiAgICpcbiAgICogTm90ZTogVGhlIGxhdGVzdCBDdXN0b20gRWxlbWVudHMgQVBJIGRlc2lnbiBjYWxscyBmb3IgYSBuZXcgZnVuY3Rpb24sXG4gICAqIGBnZXRBc3NpZ25lZE5vZGVzYCB0aGF0IHRha2VzIGFuIG9wdGlvbmFsIGBkZWVwYCBwYXJhbWV0ZXIsIHRoYXQgd2lsbCBzb2x2ZVxuICAgKiB0aGlzIHByb2JsZW0gYXQgdGhlIEFQSSBsZXZlbC5cbiAgICovXG4gIGNsYXNzIERpc3RyaWJ1dGVkQ2hpbGRyZW4gZXh0ZW5kcyBiYXNlIHtcblxuICAgIC8qKlxuICAgICAqIEFuIGluLW9yZGVyIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4sIGV4cGFuZGluZyBhbnkgc2xvdCBlbGVtZW50cy4gTGlrZSB0aGVcbiAgICAgKiBzdGFuZGFyZCBjaGlsZHJlbiBwcm9wZXJ0eSwgdGhpcyBza2lwcyB0ZXh0IG5vZGVzLlxuICAgICAqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50W119XG4gICAgICovXG4gICAgZ2V0IGRpc3RyaWJ1dGVkQ2hpbGRyZW4oKSB7XG4gICAgICByZXR1cm4gZXhwYW5kQ29udGVudEVsZW1lbnRzKHRoaXMuY2hpbGRyZW4sIGZhbHNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbiBpbi1vcmRlciBjb2xsZWN0aW9uIG9mIGNoaWxkIG5vZGVzLCBleHBhbmRpbmcgYW55IHNsb3QgZWxlbWVudHMuIExpa2VcbiAgICAgKiB0aGUgc3RhbmRhcmQgY2hpbGROb2RlcyBwcm9wZXJ0eSwgdGhpcyBpbmNsdWRlcyB0ZXh0IG5vZGVzLlxuICAgICAqXG4gICAgICogQHR5cGUge05vZGVbXX1cbiAgICAgKi9cbiAgICBnZXQgZGlzdHJpYnV0ZWRDaGlsZE5vZGVzKCkge1xuICAgICAgcmV0dXJuIGV4cGFuZENvbnRlbnRFbGVtZW50cyh0aGlzLmNoaWxkTm9kZXMsIHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBjb25jYXRlbmF0ZWQgdGV4dCBjb250ZW50IG9mIGFsbCBjaGlsZCBub2RlcywgZXhwYW5kaW5nIGFueSBzbG90XG4gICAgICogZWxlbWVudHMuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldCBkaXN0cmlidXRlZFRleHRDb250ZW50KCkge1xuICAgICAgbGV0IHN0cmluZ3MgPSB0aGlzLmRpc3RyaWJ1dGVkQ2hpbGROb2Rlcy5tYXAoZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkLnRleHRDb250ZW50O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gc3RyaW5ncy5qb2luKCcnKTtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBEaXN0cmlidXRlZENoaWxkcmVuO1xufTtcblxuXG4vKlxuICogR2l2ZW4gYSBhcnJheSBvZiBub2RlcywgcmV0dXJuIGEgbmV3IGFycmF5IHdpdGggYW55IGNvbnRlbnQgZWxlbWVudHMgZXhwYW5kZWRcbiAqIHRvIHRoZSBub2RlcyBkaXN0cmlidXRlZCB0byB0aGF0IGNvbnRlbnQgZWxlbWVudC4gVGhpcyBydWxlIGlzIGFwcGxpZWRcbiAqIHJlY3Vyc2l2ZWx5LlxuICpcbiAqIElmIGluY2x1ZGVUZXh0Tm9kZXMgaXMgdHJ1ZSwgdGV4dCBub2RlcyB3aWxsIGJlIGluY2x1ZGVkLCBhcyBpbiB0aGVcbiAqIHN0YW5kYXJkIGNoaWxkTm9kZXMgcHJvcGVydHk7IGJ5IGRlZmF1bHQsIHRoaXMgc2tpcHMgdGV4dCBub2RlcywgbGlrZSB0aGVcbiAqIHN0YW5kYXJkIGNoaWxkcmVuIHByb3BlcnR5LlxuICovXG5mdW5jdGlvbiBleHBhbmRDb250ZW50RWxlbWVudHMobm9kZXMsIGluY2x1ZGVUZXh0Tm9kZXMpIHtcbiAgbGV0IGV4cGFuZGVkID0gQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKG5vZGVzLCBub2RlID0+IHtcbiAgICAvLyBXZSB3YW50IHRvIHNlZSBpZiB0aGUgbm9kZSBpcyBhbiBpbnN0YW5jZW9mIEhUTUxTbG90RUxlbWVudCwgYnV0XG4gICAgLy8gdGhhdCBjbGFzcyB3b24ndCBleGlzdCBpZiB0aGUgYnJvd3NlciB0aGF0IGRvZXNuJ3Qgc3VwcG9ydCBuYXRpdmVcbiAgICAvLyBTaGFkb3cgRE9NIGFuZCBpZiB0aGUgU2hhZG93IERPTSBwb2x5ZmlsbCBoYXNuJ3QgYmVlbiBsb2FkZWQuIEluc3RlYWQsXG4gICAgLy8gd2UgZG8gYSBzaW1wbGlzdGljIGNoZWNrIHRvIHNlZSBpZiB0aGUgdGFnIG5hbWUgaXMgXCJzbG90XCIgb3IgXCJjb250ZW50XCIuXG4gICAgaWYgKG5vZGUubG9jYWxOYW1lICYmIChub2RlLmxvY2FsTmFtZSA9PT0gXCJzbG90XCIgfHwgbm9kZS5sb2NhbE5hbWUgPT09IFwiY29udGVudFwiKSkge1xuICAgICAgLy8gY29udGVudCBlbGVtZW50OyB1c2UgaXRzIGRpc3RyaWJ1dGVkIG5vZGVzIGluc3RlYWQuXG4gICAgICBsZXQgZGlzdHJpYnV0ZWROb2RlcyA9IG5vZGUuZ2V0RGlzdHJpYnV0ZWROb2RlcygpO1xuICAgICAgcmV0dXJuIGRpc3RyaWJ1dGVkTm9kZXMgP1xuICAgICAgICBleHBhbmRDb250ZW50RWxlbWVudHMoZGlzdHJpYnV0ZWROb2RlcywgaW5jbHVkZVRleHROb2RlcykgOlxuICAgICAgICBbXTtcbiAgICB9IGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgLy8gUGxhaW4gZWxlbWVudDsgdXNlIGFzIGlzLlxuICAgICAgcmV0dXJuIFtub2RlXTtcbiAgICB9IGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBUZXh0ICYmIGluY2x1ZGVUZXh0Tm9kZXMpIHtcbiAgICAgIC8vIFRleHQgbm9kZS5cbiAgICAgIHJldHVybiBbbm9kZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIENvbW1lbnQsIHByb2Nlc3NpbmcgaW5zdHJ1Y3Rpb24sIGV0Yy47IHNraXAuXG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9KTtcbiAgbGV0IGZsYXR0ZW5lZCA9IFtdLmNvbmNhdCguLi5leHBhbmRlZCk7XG4gIHJldHVybiBmbGF0dGVuZWQ7XG59XG4iLCIvKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBkZWZpbmVzIGEgY29tcG9uZW50J3MgY29udGVudCBhcyBpdHMgY2hpbGRyZW4sIGV4cGFuZGluZyBhbnlcbiAgICogbm9kZXMgZGlzdHJpYnV0ZWQgdG8gdGhlIGNvbXBvbmVudCdzIHNsb3RzLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGlzIGludGVuZGVkIGZvciB1c2Ugd2l0aCB0aGVcbiAgICogW0Rpc3RyaWJ1dGVkQ2hpbGRyZW5dKERpc3RyaWJ1dGVkQ2hpbGRyZW4ubWQpIG1peGluLiBTZWUgdGhhdCBtaXhpbiBmb3IgYVxuICAgKiBkaXNjdXNzaW9uIG9mIGhvdyB0aGF0IHdvcmtzLiBUaGlzIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQgbWl4aW5cbiAgICogcHJvdmlkZXMgYW4gZWFzeSB3YXkgb2YgZGVmaW5pbmcgdGhlIFwiY29udGVudFwiIG9mIGEgY29tcG9uZW50IGFzIHRoZVxuICAgKiBjb21wb25lbnQncyBkaXN0cmlidXRlZCBjaGlsZHJlbi4gVGhhdCBpbiB0dXJuIGxldHMgbWl4aW5zIGxpa2VcbiAgICogW0NvbnRlbnRBc0l0ZW1zXShDb250ZW50QXNJdGVtcy5tZCkgbWFuaXB1bGF0ZSB0aGUgY2hpbGRyZW4gYXMgbGlzdCBpdGVtcy5cbiAgICovXG4gIGNsYXNzIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQgZXh0ZW5kcyBiYXNlIHtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjb250ZW50IG9mIHRoaXMgY29tcG9uZW50LCBkZWZpbmVkIHRvIGJlIHRoZSBmbGF0dGVuZWQgYXJyYXkgb2ZcbiAgICAgKiBjaGlsZHJlbiBkaXN0cmlidXRlZCB0byB0aGUgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50W119XG4gICAgICovXG4gICAgZ2V0IGNvbnRlbnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5kaXN0cmlidXRlZENoaWxkcmVuO1xuICAgIH1cbiAgICBzZXQgY29udGVudCh2YWx1ZSkge1xuICAgICAgaWYgKCdjb250ZW50JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5jb250ZW50ID0gdmFsdWU7IH1cbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50O1xufTtcbiIsIi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggR2VuZXJpYy4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIGFsbG93cyBhIGNvbXBvbmVudCB0byBzdXBwb3J0IGEgXCJnZW5lcmljXCIgc3R5bGU6IGEgbWluaW1hbGlzdFxuICAgKiBzdHlsZSB0aGF0IGNhbiBlYXNpbHkgYmUgcmVtb3ZlZCB0byByZXNldCBpdHMgdmlzdWFsIGFwcGVhcmFuY2UgdG8gYVxuICAgKiBiYXNlbGluZSBzdGF0ZS5cbiAgICpcbiAgICogQnkgZGVmYXVsdCwgYSBjb21wb25lbnQgc2hvdWxkIHByb3ZpZGUgYSBtaW5pbWFsIHZpc3VhbCBwcmVzZW50YXRpb24gdGhhdFxuICAgKiBhbGxvd3MgdGhlIGNvbXBvbmVudCB0byBmdW5jdGlvbi4gSG93ZXZlciwgdGhlIG1vcmUgc3R5bGluZyB0aGUgY29tcG9uZW50XG4gICAqIHByb3ZpZGVzIGJ5IGRlZmF1bHQsIHRoZSBoYXJkZXIgaXQgYmVjb21lcyB0byBnZXQgdGhlIGNvbXBvbmVudCB0byBmaXQgaW5cbiAgICogaW4gb3RoZXIgc2V0dGluZ3MuIEVhY2ggQ1NTIHJ1bGUgaGFzIHRvIGJlIG92ZXJyaWRkZW4uIFdvcnNlLCBuZXcgQ1NTIHJ1bGVzXG4gICAqIGFkZGVkIHRvIHRoZSBkZWZhdWx0IHN0eWxlIHdvbid0IGJlIG92ZXJyaWRkZW4gYnkgZGVmYXVsdCwgbWFraW5nIGl0IGhhcmRcbiAgICogdG8ga25vdyB3aGV0aGVyIGEgbmV3IHZlcnNpb24gb2YgYSBjb21wb25lbnQgd2lsbCBzdGlsbCBsb29rIG9rYXkuXG4gICAqXG4gICAqIEFzIGEgY29tcHJvbWlzZSwgdGhlIG1peGluIGRlZmluZXMgYSBgZ2VuZXJpY2AgYXR0cmlidXRlLiBUaGlzIGF0dHJpYnV0ZSBpc1xuICAgKiBub3JtYWxseSBzZXQgYnkgZGVmYXVsdCwgYW5kIHN0eWxlcyBjYW4gYmUgd3JpdHRlbiB0aGF0IGFwcGx5IG9ubHkgd2hlbiB0aGVcbiAgICogZ2VuZXJpYyBhdHRyaWJ1dGUgaXMgc2V0LiBUaGlzIGFsbG93cyB0aGUgY29uc3RydWN0aW9uIG9mIENTUyBydWxlcyB0aGF0XG4gICAqIHdpbGwgb25seSBhcHBseSB0byBnZW5lcmljIGNvbXBvbmVudHMgbGlrZTpcbiAgICpcbiAgICogICAgIDpob3N0KFtnZW5lcmljPVwiXCJdKSB7XG4gICAqICAgICAgIC4uLiBHZW5lcmljIGFwcGVhcmFuY2UgZGVmaW5lZCBoZXJlIC4uLlxuICAgKiAgICAgfVxuICAgKlxuICAgKiBUaGlzIG1ha2VzIGl0IGVhc3kgdG8gcmVtb3ZlIGFsbCBkZWZhdWx0IHN0eWxpbmcg4oCUIHNldCB0aGUgYGdlbmVyaWNgXG4gICAqIGF0dHJpYnV0ZSB0byBmYWxzZSwgYW5kIGFsbCBkZWZhdWx0IHN0eWxpbmcgd2lsbCBiZSByZW1vdmVkLlxuICAgKi9cbiAgY2xhc3MgR2VuZXJpYyBleHRlbmRzIGJhc2Uge1xuXG4gICAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuICAgICAgdGhpcy5nZW5lcmljID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2dlbmVyaWMnKSB8fCB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRydWUgaWYgdGhlIGNvbXBvbmVudCB3b3VsZCBsaWtlIHRvIHJlY2VpdmUgZ2VuZXJpYyBzdHlsaW5nLlxuICAgICAqXG4gICAgICogVGhpcyBwcm9wZXJ0eSBpcyB0cnVlIGJ5IGRlZmF1bHQg4oCUwqBzZXQgaXQgdG8gZmFsc2UgdG8gdHVybiBvZmYgYWxsXG4gICAgICogZ2VuZXJpYyBzdHlsZXMuIFRoaXMgbWFrZXMgaXQgZWFzaWVyIHRvIGFwcGx5IGN1c3RvbSBzdHlsaW5nOyB5b3Ugd29uJ3RcbiAgICAgKiBoYXZlIHRvIGV4cGxpY2l0bHkgb3ZlcnJpZGUgc3R5bGluZyB5b3UgZG9uJ3Qgd2FudC5cbiAgICAgKlxuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgICovXG4gICAgZ2V0IGdlbmVyaWMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZ2VuZXJpYztcbiAgICB9XG4gICAgc2V0IGdlbmVyaWModmFsdWUpIHtcbiAgICAgIGlmICgnZ2VuZXJpYycgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuZ2VuZXJpYyA9IHZhbHVlOyB9XG4gICAgICAvLyBXZSByb2xsIG91ciBvd24gYXR0cmlidXRlIHNldHRpbmcgc28gdGhhdCBhbiBleHBsaWNpdGx5IGZhbHNlIHZhbHVlXG4gICAgICAvLyBzaG93cyB1cCBhcyBnZW5lcmljPVwiZmFsc2VcIi5cbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhbHVlID0gKHZhbHVlICE9PSAnZmFsc2UnKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2dlbmVyaWMgPSB2YWx1ZTtcbiAgICAgIGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgLy8gRXhwbGljaXRseSB1c2UgZmFsc2Ugc3RyaW5nLlxuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnZ2VuZXJpYycsICdmYWxzZScpO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgIC8vIEV4cGxpY2l0bHkgcmVtb3ZlIGF0dHJpYnV0ZS5cbiAgICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ2dlbmVyaWMnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFVzZSB0aGUgZW1wdHkgc3RyaW5nIHRvIGdldCBhdHRyaWJ1dGUgdG8gYXBwZWFyIHdpdGggbm8gdmFsdWUuXG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdnZW5lcmljJywgJycpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIEdlbmVyaWM7XG59O1xuIiwiaW1wb3J0IG1pY3JvdGFzayBmcm9tICcuL21pY3JvdGFzayc7XG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggSXRlbXNTZWxlY3Rpb24uICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBtYW5hZ2VzIHNpbmdsZS1zZWxlY3Rpb24gc2VtYW50aWNzIGZvciBpdGVtcyBpbiBhIGxpc3QuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyBhIGNvbXBvbmVudCB0byBwcm92aWRlIGFuIGBpdGVtc2AgYXJyYXkgb2YgYWxsIGVsZW1lbnRzXG4gICAqIGluIHRoZSBsaXN0LiBBIHN0YW5kYXJkIHdheSB0byBkbyB0aGF0IHdpdGggaXMgdGhlXG4gICAqIFtDb250ZW50QXNJdGVtc10oQ29udGVudEFzSXRlbXMubWQpIG1peGluLCB3aGljaCB0YWtlcyBhIGNvbXBvbmVudCdzXG4gICAqIGNvbnRlbnQgKHR5cGljYWxseSBpdHMgZGlzdHJpYnV0ZWQgY2hpbGRyZW4pIGFzIHRoZSBzZXQgb2YgbGlzdCBpdGVtczsgc2VlXG4gICAqIHRoYXQgbWl4aW4gZm9yIGRldGFpbHMuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gdHJhY2tzIGEgc2luZ2xlIHNlbGVjdGVkIGl0ZW0gaW4gdGhlIGxpc3QsIGFuZCBwcm92aWRlcyBtZWFucyB0b1xuICAgKiBnZXQgYW5kIHNldCB0aGF0IHN0YXRlIGJ5IGl0ZW0gcG9zaXRpb24gKGBzZWxlY3RlZEluZGV4YCkgb3IgaXRlbSBpZGVudGl0eVxuICAgKiAoYHNlbGVjdGVkSXRlbWApLiBUaGUgc2VsZWN0aW9uIGNhbiBiZSBtb3ZlZCBpbiB0aGUgbGlzdCB2aWEgdGhlIG1ldGhvZHNcbiAgICogYHNlbGVjdEZpcnN0YCwgYHNlbGVjdExhc3RgLCBgc2VsZWN0TmV4dGAsIGFuZCBgc2VsZWN0UHJldmlvdXNgLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGRvZXMgbm90IHByb2R1Y2UgYW55IHVzZXItdmlzaWJsZSBlZmZlY3RzIHRvIHJlcHJlc2VudFxuICAgKiBzZWxlY3Rpb24uIE90aGVyIG1peGlucywgc3VjaCBhc1xuICAgKiBbU2VsZWN0aW9uQXJpYUFjdGl2ZV0oU2VsZWN0aW9uQXJpYUFjdGl2ZS5tZCksXG4gICAqIFtTZWxlY3Rpb25IaWdobGlnaHRdKFNlbGVjdGlvbkhpZ2hsaWdodC5tZCkgYW5kXG4gICAqIFtTZWxlY3Rpb25JblZpZXddKFNlbGVjdGlvbkluVmlldy5tZCksIG1vZGlmeSB0aGUgc2VsZWN0ZWQgaXRlbSBpbiBjb21tb25cbiAgICogd2F5cyB0byBsZXQgdGhlIHVzZXIga25vdyBhIGdpdmVuIGl0ZW0gaXMgc2VsZWN0ZWQgb3Igbm90IHNlbGVjdGVkLlxuICAgKi9cbiAgY2xhc3MgSXRlbXNTZWxlY3Rpb24gZXh0ZW5kcyBiYXNlIHtcblxuICAgIC8qKlxuICAgICAqIEFwcGx5IHRoZSBpbmRpY2F0ZSBzZWxlY3Rpb24gc3RhdGUgdG8gdGhlIGl0ZW0uXG4gICAgICpcbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuIFVzZXItdmlzaWJsZVxuICAgICAqIGVmZmVjdHMgd2lsbCB0eXBpY2FsbHkgYmUgaGFuZGxlZCBieSBvdGhlciBtaXhpbnMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpdGVtIC0gdGhlIGl0ZW0gYmVpbmcgc2VsZWN0ZWQvZGVzZWxlY3RlZFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gc2VsZWN0ZWQgLSB0cnVlIGlmIHRoZSBpdGVtIGlzIHNlbGVjdGVkLCBmYWxzZSBpZiBub3RcbiAgICAgKi9cbiAgICBhcHBseVNlbGVjdGlvbihpdGVtLCBzZWxlY3RlZCkge1xuICAgICAgaWYgKHN1cGVyLmFwcGx5U2VsZWN0aW9uKSB7IHN1cGVyLmFwcGx5U2VsZWN0aW9uKGl0ZW0sIHNlbGVjdGVkKTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRydWUgaWYgdGhlIHNlbGVjdGlvbiBjYW4gYmUgbW92ZWQgdG8gdGhlIG5leHQgaXRlbSwgZmFsc2UgaWYgbm90ICh0aGVcbiAgICAgKiBzZWxlY3RlZCBpdGVtIGlzIHRoZSBsYXN0IGl0ZW0gaW4gdGhlIGxpc3QpLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgZ2V0IGNhblNlbGVjdE5leHQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY2FuU2VsZWN0TmV4dDtcbiAgICB9XG4gICAgc2V0IGNhblNlbGVjdE5leHQoY2FuU2VsZWN0TmV4dCkge1xuICAgICAgaWYgKCdjYW5TZWxlY3ROZXh0JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5jYW5TZWxlY3ROZXh0ID0gY2FuU2VsZWN0TmV4dDsgfVxuICAgICAgdGhpcy5fY2FuU2VsZWN0TmV4dCA9IGNhblNlbGVjdE5leHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiB0aGUgc2VsZWN0aW9uIGNhbiBiZSBtb3ZlZCB0byB0aGUgcHJldmlvdXMgaXRlbSwgZmFsc2UgaWYgbm90XG4gICAgICogKHRoZSBzZWxlY3RlZCBpdGVtIGlzIHRoZSBmaXJzdCBvbmUgaW4gdGhlIGxpc3QpLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgZ2V0IGNhblNlbGVjdFByZXZpb3VzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2NhblNlbGVjdFByZXZpb3VzO1xuICAgIH1cbiAgICBzZXQgY2FuU2VsZWN0UHJldmlvdXMoY2FuU2VsZWN0UHJldmlvdXMpIHtcbiAgICAgIGlmICgnY2FuU2VsZWN0UHJldmlvdXMnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLmNhblNlbGVjdFByZXZpb3VzID0gY2FuU2VsZWN0UHJldmlvdXM7IH1cbiAgICAgIHRoaXMuX2NhblNlbGVjdFByZXZpb3VzID0gY2FuU2VsZWN0UHJldmlvdXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIGEgbmV3IGl0ZW0gYmVpbmcgYWRkZWQgdG8gdGhlIGxpc3QuXG4gICAgICpcbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBzaW1wbHkgc2V0cyB0aGUgaXRlbSdzXG4gICAgICogc2VsZWN0aW9uIHN0YXRlIHRvIGZhbHNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaXRlbSAtIHRoZSBpdGVtIGJlaW5nIGFkZGVkXG4gICAgICovXG4gICAgaXRlbUFkZGVkKGl0ZW0pIHtcbiAgICAgIGlmIChzdXBlci5pdGVtQWRkZWQpIHsgc3VwZXIuaXRlbUFkZGVkKGl0ZW0pOyB9XG4gICAgICB0aGlzLmFwcGx5U2VsZWN0aW9uKGl0ZW0sIGl0ZW0gPT09IHRoaXMuc2VsZWN0ZWRJdGVtKTtcbiAgICB9XG5cbiAgICBpdGVtc0NoYW5nZWQoKSB7XG4gICAgICBpZiAoc3VwZXIuaXRlbXNDaGFuZ2VkKSB7IHN1cGVyLml0ZW1zQ2hhbmdlZCgpOyB9XG5cbiAgICAgIGlmICh0aGlzLnNlbGVjdGlvblJlcXVpcmVkKSB7XG4gICAgICAgIC8vIEVuc3VyZSBzZWxlY3Rpb24sIGJ1dCBkbyB0aGlzIGluIHRoZSBuZXh0IHRpY2sgdG8gZ2l2ZSBvdGhlciBtaXhpbnMgYVxuICAgICAgICAvLyBjaGFuY2UgdG8gZG8gdGhlaXIgb3duIGl0ZW1zQ2hhbmdlZCB3b3JrLlxuICAgICAgICBtaWNyb3Rhc2soKCkgPT4ge1xuICAgICAgICAgIGVuc3VyZVNlbGVjdGlvbih0aGlzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjaGFuZ2UgaW4gaXRlbXMgbWF5IGhhdmUgYWZmZWN0ZWQgd2hpY2ggbmF2aWdhdGlvbnMgYXJlIHBvc3NpYmxlLlxuICAgICAgdXBkYXRlUG9zc2libGVOYXZpZ2F0aW9ucyh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW5kZXggb2YgdGhlIGl0ZW0gd2hpY2ggaXMgY3VycmVudGx5IHNlbGVjdGVkLlxuICAgICAqXG4gICAgICogSWYgYHNlbGVjdGlvbldyYXBzYCBpcyBmYWxzZSwgdGhlIGluZGV4IGlzIC0xIGlmIHRoZXJlIGlzIG5vIHNlbGVjdGlvbi5cbiAgICAgKiBJbiB0aGF0IGNhc2UsIHNldHRpbmcgdGhlIGluZGV4IHRvIC0xIHdpbGwgZGVzZWxlY3QgYW55XG4gICAgICogY3VycmVudGx5LXNlbGVjdGVkIGl0ZW0uXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldCBzZWxlY3RlZEluZGV4KCkge1xuICAgICAgbGV0IHNlbGVjdGVkSXRlbSA9IHRoaXMuc2VsZWN0ZWRJdGVtO1xuXG4gICAgICAvLyBUT0RPOiBJZiBzZWxlY3Rpb24gd2Fzbid0IGZvdW5kLCBtb3N0IGxpa2VseSBjYXVzZSBpcyB0aGF0IHRoZSBET00gd2FzXG4gICAgICAvLyBtYW5pcHVsYXRlZCBmcm9tIHVuZGVybmVhdGggdXMuIE9uY2Ugd2UgdHJhY2sgY29udGVudCBjaGFuZ2VzLCB0dXJuXG4gICAgICAvLyB0aGlzIGludG8gYSB3YXJuaW5nLlxuICAgICAgLy8gVE9ETzogTWVtb2l6ZVxuICAgICAgcmV0dXJuIHNlbGVjdGVkSXRlbSA/XG4gICAgICAgIHRoaXMuaXRlbXMuaW5kZXhPZihzZWxlY3RlZEl0ZW0pIDpcbiAgICAgICAgLTE7XG4gICAgfVxuICAgIHNldCBzZWxlY3RlZEluZGV4KGluZGV4KSB7XG4gICAgICBpZiAoJ3NlbGVjdGVkSW5kZXgnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkSW5kZXggPSBpbmRleDsgfVxuICAgICAgbGV0IGl0ZW1zID0gdGhpcy5pdGVtcztcbiAgICAgIGxldCBpdGVtO1xuICAgICAgaWYgKGluZGV4IDwgMCB8fCBpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaXRlbSA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpdGVtID0gaXRlbXNbaW5kZXhdO1xuICAgICAgfVxuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xuXG4gICAgICBsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3NlbGVjdGVkLWluZGV4LWNoYW5nZWQnLCB7XG4gICAgICAgIGRldGFpbDoge1xuICAgICAgICAgIHNlbGVjdGVkSW5kZXg6IGluZGV4LFxuICAgICAgICAgIHZhbHVlOiBpbmRleCAvLyBmb3IgUG9seW1lciBiaW5kaW5nXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudGx5IHNlbGVjdGVkIGl0ZW0sIG9yIG51bGwgaWYgdGhlcmUgaXMgbm8gc2VsZWN0aW9uLlxuICAgICAqXG4gICAgICogU2V0dGluZyB0aGlzIHByb3BlcnR5IHRvIG51bGwgZGVzZWxlY3RzIGFueSBjdXJyZW50bHktc2VsZWN0ZWQgaXRlbS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGVkSXRlbSgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZEl0ZW0gfHwgbnVsbDtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGVkSXRlbShpdGVtKSB7XG4gICAgICBpZiAoJ3NlbGVjdGVkSXRlbScgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJdGVtID0gaXRlbTsgfVxuICAgICAgbGV0IHByZXZpb3VzSXRlbSA9IHRoaXMuX3NlbGVjdGVkSXRlbTtcbiAgICAgIGlmIChwcmV2aW91c0l0ZW0pIHtcbiAgICAgICAgaWYgKGl0ZW0gPT09IHByZXZpb3VzSXRlbSkge1xuICAgICAgICAgIC8vIFRoZSBpbmRpY2F0ZWQgaXRlbSBpcyBhbHJlYWR5IHRoZSBzZWxlY3RlZCBpdGVtLlxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBSZW1vdmUgcHJldmlvdXMgc2VsZWN0aW9uLlxuICAgICAgICB0aGlzLmFwcGx5U2VsZWN0aW9uKHByZXZpb3VzSXRlbSwgZmFsc2UpO1xuICAgICAgfVxuXG4gICAgICAvLyBUT0RPOiBDb25maXJtIGl0ZW0gaXMgYWN0dWFsbHkgaW4gdGhlIGxpc3QgYmVmb3JlIHNlbGVjdGluZy5cbiAgICAgIHRoaXMuX3NlbGVjdGVkSXRlbSA9IGl0ZW07XG4gICAgICBpZiAoaXRlbSkge1xuICAgICAgICB0aGlzLmFwcGx5U2VsZWN0aW9uKGl0ZW0sIHRydWUpO1xuICAgICAgfVxuXG4gICAgICAvLyBUT0RPOiBSYXRpb25hbGl6ZSB3aXRoIHNlbGVjdGVkSW5kZXggc28gd2UncmUgbm90IHJlY2FsY3VsYXRpbmcgaXRlbVxuICAgICAgLy8gb3IgaW5kZXggaW4gZWFjaCBzZXR0ZXIuXG4gICAgICB1cGRhdGVQb3NzaWJsZU5hdmlnYXRpb25zKHRoaXMpO1xuXG4gICAgICBsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3NlbGVjdGVkLWl0ZW0tY2hhbmdlZCcsIHtcbiAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgc2VsZWN0ZWRJdGVtOiBpdGVtLFxuICAgICAgICAgIHByZXZpb3VzSXRlbTogcHJldmlvdXNJdGVtLFxuICAgICAgICAgIHZhbHVlOiBpdGVtIC8vIGZvciBQb2x5bWVyIGJpbmRpbmdcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCB0aGUgZmlyc3QgaXRlbSBpbiB0aGUgbGlzdC5cbiAgICAgKi9cbiAgICBzZWxlY3RGaXJzdCgpIHtcbiAgICAgIGlmIChzdXBlci5zZWxlY3RGaXJzdCkgeyBzdXBlci5zZWxlY3RGaXJzdCgpOyB9XG4gICAgICByZXR1cm4gc2VsZWN0SW5kZXgodGhpcywgMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiB0aGUgbGlzdCBzaG91bGQgYWx3YXlzIGhhdmUgYSBzZWxlY3Rpb24gKGlmIGl0IGhhcyBpdGVtcykuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0aW9uUmVxdWlyZWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2VsZWN0aW9uUmVxdWlyZWQ7XG4gICAgfVxuICAgIHNldCBzZWxlY3Rpb25SZXF1aXJlZChzZWxlY3Rpb25SZXF1aXJlZCkge1xuICAgICAgaWYgKCdzZWxlY3Rpb25SZXF1aXJlZCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0aW9uUmVxdWlyZWQgPSBzZWxlY3Rpb25SZXF1aXJlZDsgfVxuICAgICAgdGhpcy5fc2VsZWN0aW9uUmVxdWlyZWQgPSBzZWxlY3Rpb25SZXF1aXJlZDtcbiAgICAgIGlmIChzZWxlY3Rpb25SZXF1aXJlZCkge1xuICAgICAgICBlbnN1cmVTZWxlY3Rpb24odGhpcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IHRoZSBsYXN0IGl0ZW0gaW4gdGhlIGxpc3QuXG4gICAgICovXG4gICAgc2VsZWN0TGFzdCgpIHtcbiAgICAgIGlmIChzdXBlci5zZWxlY3RMYXN0KSB7IHN1cGVyLnNlbGVjdExhc3QoKTsgfVxuICAgICAgcmV0dXJuIHNlbGVjdEluZGV4KHRoaXMsIHRoaXMuaXRlbXMubGVuZ3RoIC0gMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IHRoZSBuZXh0IGl0ZW0gaW4gdGhlIGxpc3QuXG4gICAgICovXG4gICAgc2VsZWN0TmV4dCgpIHtcbiAgICAgIGlmIChzdXBlci5zZWxlY3ROZXh0KSB7IHN1cGVyLnNlbGVjdE5leHQoKTsgfVxuICAgICAgcmV0dXJuIHNlbGVjdEluZGV4KHRoaXMsIHRoaXMuc2VsZWN0ZWRJbmRleCArIDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCB0aGUgcHJldmlvdXMgaXRlbSBpbiB0aGUgbGlzdC5cbiAgICAgKi9cbiAgICBzZWxlY3RQcmV2aW91cygpIHtcbiAgICAgIGlmIChzdXBlci5zZWxlY3RQcmV2aW91cykgeyBzdXBlci5zZWxlY3RQcmV2aW91cygpOyB9XG4gICAgICByZXR1cm4gc2VsZWN0SW5kZXgodGhpcywgdGhpcy5zZWxlY3RlZEluZGV4IC0gMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiBzZWxlY3Rpb24gbmF2aWdhdGlvbnMgd3JhcCBmcm9tIGxhc3QgdG8gZmlyc3QsIGFuZCB2aWNlIHZlcnNhLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQGRlZmF1bHQge2ZhbHNlfVxuICAgICAqL1xuICAgIGdldCBzZWxlY3Rpb25XcmFwcygpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zZWxlY3Rpb25XcmFwcyB8fCBmYWxzZTtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGlvbldyYXBzKHZhbHVlKSB7XG4gICAgICBpZiAoJ3NlbGVjdGlvbldyYXBzJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3Rpb25XcmFwcyA9IHZhbHVlOyB9XG4gICAgICB0aGlzLl9zZWxlY3Rpb25XcmFwcyA9IFN0cmluZyh2YWx1ZSkgPT09ICd0cnVlJztcbiAgICAgIHVwZGF0ZVBvc3NpYmxlTmF2aWdhdGlvbnModGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmlyZXMgd2hlbiB0aGUgc2VsZWN0ZWRJdGVtIHByb3BlcnR5IGNoYW5nZXMuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgSXRlbXNTZWxlY3Rpb25cbiAgICAgKiBAZXZlbnQgc2VsZWN0ZWQtaXRlbS1jaGFuZ2VkXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZGV0YWlsLnNlbGVjdGVkSXRlbSBUaGUgbmV3IHNlbGVjdGVkIGl0ZW0uXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZGV0YWlsLnByZXZpb3VzSXRlbSBUaGUgcHJldmlvdXNseSBzZWxlY3RlZCBpdGVtLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogRmlyZXMgd2hlbiB0aGUgc2VsZWN0ZWRJbmRleCBwcm9wZXJ0eSBjaGFuZ2VzLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIEl0ZW1zU2VsZWN0aW9uXG4gICAgICogQGV2ZW50IHNlbGVjdGVkLWluZGV4LWNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGV0YWlsLnNlbGVjdGVkSW5kZXggVGhlIG5ldyBzZWxlY3RlZCBpbmRleC5cbiAgICAgKi9cblxuICB9XG5cbiAgcmV0dXJuIEl0ZW1zU2VsZWN0aW9uO1xufTtcblxuXG4vLyBJZiBubyBpdGVtIGlzIHNlbGVjdGVkLCBzZWxlY3QgYSBkZWZhdWx0IGl0ZW0uXG5mdW5jdGlvbiBlbnN1cmVTZWxlY3Rpb24oZWxlbWVudCkge1xuICBsZXQgaW5kZXggPSBlbGVtZW50LnNlbGVjdGVkSW5kZXg7XG4gIGlmIChpbmRleCA8IDApIHtcbiAgICAvLyBTZWxlY3RlZCBpdGVtIGlzIG5vIGxvbmdlciBpbiB0aGUgY3VycmVudCBzZXQgb2YgaXRlbXMuXG4gICAgaWYgKGVsZW1lbnQuaXRlbXMgJiYgZWxlbWVudC5pdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAvLyBTZWxlY3QgdGhlIGZpcnN0IGl0ZW0uXG4gICAgICAvLyBUT0RPOiBJZiB0aGUgcHJldmlvdXNseS1zZWxlY3RlZCBpdGVtIGhhcyBiZWVuIGRlbGV0ZWQsIHRyeSB0byBzZWxlY3RcbiAgICAgIC8vIGFuIGl0ZW0gYWRqYWNlbnQgdG8gdGhlIHBvc2l0aW9uIGl0IGhlbGQuXG4gICAgICBlbGVtZW50LnNlbGVjdGVkSW5kZXggPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBObyBpdGVtcyBmb3IgdXMgdG8gc2VsZWN0LCBidXQgd2UgY2FuIGF0IGxlYXN0IHNpZ25hbCB0aGF0IHRoZXJlJ3Mgbm9cbiAgICAgIC8vIGxvbmdlciBhIHNlbGVjdGlvbi5cbiAgICAgIGVsZW1lbnQuc2VsZWN0ZWRJdGVtID0gbnVsbDtcbiAgICB9XG4gIH1cbn1cblxuLy8gRW5zdXJlIHRoZSBnaXZlbiBpbmRleCBpcyB3aXRoaW4gYm91bmRzLCBhbmQgc2VsZWN0IGl0IGlmIGl0J3Mgbm90IGFscmVhZHlcbi8vIHNlbGVjdGVkLlxuZnVuY3Rpb24gc2VsZWN0SW5kZXgoZWxlbWVudCwgaW5kZXgpIHtcbiAgbGV0IGNvdW50ID0gZWxlbWVudC5pdGVtcy5sZW5ndGg7XG4gIGxldCBib3VuZGVkSW5kZXg7XG4gIGlmIChlbGVtZW50LnNlbGVjdGlvbldyYXBzKSB7XG4gICAgLy8gSmF2YVNjcmlwdCBtb2QgZG9lc24ndCBoYW5kbGUgbmVnYXRpdmUgbnVtYmVycyB0aGUgd2F5IHdlIHdhbnQgdG8gd3JhcC5cbiAgICAvLyBTZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTg2MTgyNTAvNzY0NzJcbiAgICBib3VuZGVkSW5kZXggPSAoKGluZGV4ICUgY291bnQpICsgY291bnQpICUgY291bnQ7XG4gIH0gZWxzZSB7XG4gICAgLy8gS2VlcCBpbmRleCB3aXRoaW4gYm91bmRzIG9mIGFycmF5LlxuICAgIGJvdW5kZWRJbmRleCA9IE1hdGgubWF4KE1hdGgubWluKGluZGV4LCBjb3VudCAtIDEpLCAwKTtcbiAgfVxuICBsZXQgcHJldmlvdXNJbmRleCA9IGVsZW1lbnQuc2VsZWN0ZWRJbmRleDtcbiAgaWYgKHByZXZpb3VzSW5kZXggIT09IGJvdW5kZWRJbmRleCkge1xuICAgIGVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9IGJvdW5kZWRJbmRleDtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuLy8gRm9sbG93aW5nIGEgY2hhbmdlIGluIHNlbGVjdGlvbiwgcmVwb3J0IHdoZXRoZXIgaXQncyBub3cgcG9zc2libGUgdG9cbi8vIGdvIG5leHQvcHJldmlvdXMgZnJvbSB0aGUgZ2l2ZW4gaW5kZXguXG5mdW5jdGlvbiB1cGRhdGVQb3NzaWJsZU5hdmlnYXRpb25zKGVsZW1lbnQpIHtcbiAgbGV0IGNhblNlbGVjdE5leHQ7XG4gIGxldCBjYW5TZWxlY3RQcmV2aW91cztcbiAgbGV0IGl0ZW1zID0gZWxlbWVudC5pdGVtcztcbiAgaWYgKGl0ZW1zID09IG51bGwgfHwgaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgLy8gTm8gaXRlbXMgdG8gc2VsZWN0LlxuICAgIGNhblNlbGVjdE5leHQgPSBmYWxzZTtcbiAgICBjYW5TZWxlY3RQcmV2aW91cyA9IGZhbHNlO1xuICB9IGlmIChlbGVtZW50LnNlbGVjdGlvbldyYXBzKSB7XG4gICAgLy8gU2luY2UgdGhlcmUgYXJlIGl0ZW1zLCBjYW4gYWx3YXlzIGdvIG5leHQvcHJldmlvdXMuXG4gICAgY2FuU2VsZWN0TmV4dCA9IHRydWU7XG4gICAgY2FuU2VsZWN0UHJldmlvdXMgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGxldCBpbmRleCA9IGVsZW1lbnQuc2VsZWN0ZWRJbmRleDtcbiAgICBpZiAoaW5kZXggPCAwICYmIGl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIFNwZWNpYWwgY2FzZS4gSWYgdGhlcmUgYXJlIGl0ZW1zIGJ1dCBubyBzZWxlY3Rpb24sIGRlY2xhcmUgdGhhdCBpdCdzXG4gICAgICAvLyBhbHdheXMgcG9zc2libGUgdG8gZ28gbmV4dC9wcmV2aW91cyB0byBjcmVhdGUgYSBzZWxlY3Rpb24uXG4gICAgICBjYW5TZWxlY3ROZXh0ID0gdHJ1ZTtcbiAgICAgIGNhblNlbGVjdFByZXZpb3VzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTm9ybWFsIGNhc2U6IHdlIGhhdmUgYW4gaW5kZXggaW4gYSBsaXN0IHRoYXQgaGFzIGl0ZW1zLlxuICAgICAgY2FuU2VsZWN0UHJldmlvdXMgPSAoaW5kZXggPiAwKTtcbiAgICAgIGNhblNlbGVjdE5leHQgPSAoaW5kZXggPCBpdGVtcy5sZW5ndGggLSAxKTtcbiAgICB9XG4gIH1cbiAgZWxlbWVudC5jYW5TZWxlY3ROZXh0ID0gY2FuU2VsZWN0TmV4dDtcbiAgZWxlbWVudC5jYW5TZWxlY3RQcmV2aW91cyA9IGNhblNlbGVjdFByZXZpb3VzO1xufVxuIiwiLy8gVE9ETzogUHJvdmlkZSBiYXNlbGluZSBiZWhhdmlvciBmb3IgdGhpcyBtaXhpbiB3aGVuIHVzZWQgb3V0c2lkZSBvZiBhXG4vLyBjb2xsZWN0aXZlLlxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIEtleWJvYXJkLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggbWFuYWdlcyB0aGUga2V5ZG93biBoYW5kbGluZyBmb3IgYSBjb21wb25lbnQuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gaGFuZGxlcyBzZXZlcmFsIGtleWJvYXJkLXJlbGF0ZWQgZmVhdHVyZXMuXG4gICAqXG4gICAqIEZpcnN0LCBpdCB3aXJlcyB1cCBhIHNpbmdsZSBrZXlkb3duIGV2ZW50IGhhbmRsZXIgdGhhdCBjYW4gYmUgc2hhcmVkIGJ5XG4gICAqIG11bHRpcGxlIG1peGlucyBvbiBhIGNvbXBvbmVudC4gVGhlIGV2ZW50IGhhbmRsZXIgd2lsbCBpbnZva2UgYSBga2V5ZG93bmBcbiAgICogbWV0aG9kIHdpdGggdGhlIGV2ZW50IG9iamVjdCwgYW5kIGFueSBtaXhpbiBhbG9uZyB0aGUgcHJvdG90eXBlIGNoYWluIHRoYXRcbiAgICogd2FudHMgdG8gaGFuZGxlIHRoYXQgbWV0aG9kIGNhbiBkbyBzby5cbiAgICpcbiAgICogSWYgYSBtaXhpbiB3YW50cyB0byBpbmRpY2F0ZSB0aGF0IGtleWJvYXJkIGV2ZW50IGhhcyBiZWVuIGhhbmRsZWQsIGFuZCB0aGF0XG4gICAqIG90aGVyIG1peGlucyBzaG91bGQgKm5vdCogaGFuZGxlIGl0LCB0aGUgbWl4aW4ncyBga2V5ZG93bmAgaGFuZGxlciBzaG91bGRcbiAgICogcmV0dXJuIGEgdmFsdWUgb2YgdHJ1ZS4gVGhlIGNvbnZlbnRpb24gdGhhdCBzZWVtcyB0byB3b3JrIHdlbGwgaXMgdGhhdCBhXG4gICAqIG1peGluIHNob3VsZCBzZWUgaWYgaXQgd2FudHMgdG8gaGFuZGxlIHRoZSBldmVudCBhbmQsIGlmIG5vdCwgdGhlbiBhc2sgdGhlXG4gICAqIHN1cGVyY2xhc3MgdG8gc2VlIGlmIGl0IHdhbnRzIHRvIGhhbmRsZSB0aGUgZXZlbnQuIFRoaXMgaGFzIHRoZSBlZmZlY3Qgb2ZcbiAgICogZ2l2aW5nIHRoZSBtaXhpbiB0aGF0IHdhcyBhcHBsaWVkIGxhc3QgdGhlIGZpcnN0IGNoYW5jZSBhdCBoYW5kbGluZyBhXG4gICAqIGtleWJvYXJkIGV2ZW50LlxuICAgKlxuICAgKiBFeGFtcGxlOlxuICAgKlxuICAgKiAgICAga2V5ZG93bihldmVudCkge1xuICAgKiAgICAgICBsZXQgaGFuZGxlZDtcbiAgICogICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAqICAgICAgICAgLy8gSGFuZGxlIHRoZSBrZXlzIHlvdSB3YW50LCBzZXR0aW5nIGhhbmRsZWQgPSB0cnVlIGlmIGFwcHJvcHJpYXRlLlxuICAgKiAgICAgICB9XG4gICAqICAgICAgIC8vIFByZWZlciBtaXhpbiByZXN1bHQgaWYgaXQncyBkZWZpbmVkLCBvdGhlcndpc2UgdXNlIGJhc2UgcmVzdWx0LlxuICAgKiAgICAgICByZXR1cm4gaGFuZGxlZCB8fCAoc3VwZXIua2V5ZG93biAmJiBzdXBlci5rZXlkb3duKGV2ZW50KSk7XG4gICAqICAgICB9XG4gICAqXG4gICAqIEEgc2Vjb25kIGZlYXR1cmUgcHJvdmlkZWQgYnkgdGhpcyBtaXhpbiBpcyB0aGF0IGl0IGltcGxpY2l0bHkgbWFrZXMgdGhlXG4gICAqIGNvbXBvbmVudCBhIHRhYiBzdG9wIGlmIGl0IGlzbid0IGFscmVhZHksIGJ5IHNldHRpbmcgYHRhYkluZGV4YCB0byAwLiBUaGlzXG4gICAqIGhhcyB0aGUgZWZmZWN0IG9mIGFkZGluZyB0aGUgY29tcG9uZW50IHRvIHRoZSB0YWIgb3JkZXIgaW4gZG9jdW1lbnQgb3JkZXIuXG4gICAqXG4gICAqIEZpbmFsbHksIHRoaXMgbWl4aW4gaXMgZGVzaWduZWQgdG8gd29yayB3aXRoIHRoZSBvcHRpb25hbFxuICAgKiBbQ29sbGVjdGl2ZV0oQ29sbGVjdGl2ZS5tZCkgY2xhc3MgdmlhIGEgbWl4aW4gbGlrZVxuICAgKiBbVGFyZ2V0SW5Db2xsZWN0aXZlXShUYXJnZXRJbkNvbGxlY3RpdmUubWQpLiBUaGlzIGFsbG93cyBhIHNldCBvZiByZWxhdGVkXG4gICAqIGNvbXBvbmVudCBpbnN0YW5jZXMgdG8gY29vcGVyYXRpdmVseSBoYW5kbGUgdGhlIGtleWJvYXJkLiBTZWUgdGhlXG4gICAqIENvbGxlY3RpdmUgY2xhc3MgZm9yIGRldGFpbHMuXG4gICAqL1xuICBjbGFzcyBLZXlib2FyZCBleHRlbmRzIGJhc2Uge1xuXG4gICAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuXG4gICAgICAvLyBBc3N1bWUgdGhpcyBjb21wb25lbnQgaXMgZ29pbmcgdG8gaGFuZGxlIHRoZSBrZXlib2FyZCBvbiBpdHMgb3duLlxuICAgICAgc3RhcnRMaXN0ZW5pbmdUb0tleWRvd24odGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIHRoZSBpbmRpY2F0ZWQga2V5Ym9hcmQgZXZlbnQuXG4gICAgICpcbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuIFRoaXMgd2lsbFxuICAgICAqIHR5cGljYWxseSBiZSBoYW5kbGVkIGJ5IG90aGVyIG1peGlucy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7S2V5Ym9hcmRFdmVudH0gZXZlbnQgLSB0aGUga2V5Ym9hcmQgZXZlbnRcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZSBldmVudCB3YXMgaGFuZGxlZFxuICAgICAqL1xuICAgIGtleWRvd24oZXZlbnQpIHtcbiAgICAgIGlmIChzdXBlci5rZXlkb3duKSB7IHJldHVybiBzdXBlci5rZXlkb3duKGV2ZW50KTsgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICogSWYgd2UncmUgbm93IHRoZSBvdXRlcm1vc3QgZWxlbWVudCBvZiB0aGUgY29sbGVjdGl2ZSwgc2V0IHVwIHRvIHJlY2VpdmVcbiAgICAgKiBrZXlib2FyZCBldmVudHMuIElmIHdlJ3JlIG5vIGxvbmdlciB0aGUgb3V0ZXJtb3N0IGVsZW1lbnQsIHN0b3BcbiAgICAgKiBsaXN0ZW5pbmcuXG4gICAgICovXG4gICAgY29sbGVjdGl2ZUNoYW5nZWQoKSB7XG4gICAgICBpZiAoc3VwZXIuY29sbGVjdGl2ZUNoYW5nZWQpIHsgc3VwZXIuY29sbGVjdGl2ZUNoYW5nZWQoKTsgfVxuXG4gICAgICBpZiAodGhpcy5jb2xsZWN0aXZlLm91dGVybW9zdEVsZW1lbnQgIT09IHRoaXMpIHtcbiAgICAgICAgLy8gV2UncmUgbm8gbG9uZ2VyIHRoZSBvdXRlcm1vc3QgZWxlbWVudDsgc3RvcCBsaXN0ZW5pbmcuXG4gICAgICAgIGlmIChpc0xpc3RlbmluZ1RvS2V5ZG93bih0aGlzKSkge1xuICAgICAgICAgIHN0b3BMaXN0ZW5pbmdUb0tleWRvd24odGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgLy8gU2luY2Ugd2UncmUgZ29pbmcgdG8gaGFuZGxlIHRoZSBrZXlib2FyZCwgc2VlIGlmIHdlIGNhbiBhZG9wdCBhbiBBUklBXG4gICAgICAgIC8vIGxhYmVsIGZyb20gYW4gaW5uZXIgZWxlbWVudCBvZiB0aGUgY29sbGVjdGl2ZS5cbiAgICAgICAgbGV0IGxhYmVsID0gZ2V0Q29sbGVjdGl2ZUFyaWFMYWJlbCh0aGlzLmNvbGxlY3RpdmUpO1xuICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIGxhYmVsKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTGlzdGVuaW5nVG9LZXlkb3duKHRoaXMpKSB7XG4gICAgICAgIHN0YXJ0TGlzdGVuaW5nVG9LZXlkb3duKHRoaXMpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIEtleWJvYXJkO1xufTtcblxuXG4vLyBGaXJlIHRoZSBrZXlkb3duKCkgbWV0aG9kIG9uIHRoZSBlbGVtZW50IG9yIChpZiBpdCBiZWxvbmdzIHRvIGEgY29sbGVjdGl2ZSlcbi8vIGFsbCBlbGVtZW50cyBpbiB0aGUgY29sbGVjdGl2ZS5cbi8vXG4vLyBOb3RlOiB0aGUgdmFsdWUgb2YgJ3RoaXMnIGlzIGJvdW5kIHRvIHRoZSBlbGVtZW50IHdoaWNoIHJlY2VpdmVkIHRoZSBldmVudC5cbmZ1bmN0aW9uIGtleWRvd24oZXZlbnQpIHtcblxuICBsZXQgaGFuZGxlZCA9IGZhbHNlO1xuXG4gIGlmICh0aGlzLmNvbGxlY3RpdmUpIHtcbiAgICAvLyBHaXZlIGNvbGxlY3RpdmUgZWxlbWVudHMgYSBzaG90IGF0IHRoZSBldmVudCwgd29ya2luZyBmcm9tIGlubmVybW9zdCB0b1xuICAgIC8vIG91dGVybW9zdCAodGhpcyBlbGVtZW50KS5cbiAgICBsZXQgZWxlbWVudHMgPSB0aGlzLmNvbGxlY3RpdmUuZWxlbWVudHM7XG4gICAgZm9yIChsZXQgaSA9IGVsZW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xuICAgICAgaGFuZGxlZCA9IGVsZW1lbnQua2V5ZG93biAmJiBlbGVtZW50LmtleWRvd24oZXZlbnQpO1xuICAgICAgaWYgKGhhbmRsZWQpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIENvbXBvbmVudCBpcyBoYW5kbGluZyB0aGUga2V5Ym9hcmQgb24gaXRzIG93bi5cbiAgICBoYW5kbGVkID0gdGhpcy5rZXlkb3duKGV2ZW50KTtcbiAgfVxuXG4gIGlmIChoYW5kbGVkKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxufVxuXG5cbi8vIFJldHVybiB0aGUgZmlyc3QgQVJJQSBsYWJlbCBkZWZpbmVkIGJ5IHRoZSBjb2xsZWN0aXZlLlxuZnVuY3Rpb24gZ2V0Q29sbGVjdGl2ZUFyaWFMYWJlbChjb2xsZWN0aXZlKSB7XG4gIGxldCBsYWJlbHMgPSBjb2xsZWN0aXZlLmVsZW1lbnRzLm1hcChlbGVtZW50ID0+IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJykpO1xuICAvLyBXb3VsZCBwcmVmZXIgdG8gdXNlIEFycmF5LnByb3RvdHlwZS5maW5kIGhlcmUsIGJ1dCBJRSAxMSBkb2Vzbid0IGhhdmUgaXQuXG4gIGxldCBub25OdWxsTGFiZWxzID0gbGFiZWxzLmZpbHRlcihsYWJlbCA9PiBsYWJlbCAhPSBudWxsKTtcbiAgcmV0dXJuIG5vbk51bGxMYWJlbHNbMF07XG59XG5cblxuZnVuY3Rpb24gaXNMaXN0ZW5pbmdUb0tleWRvd24oZWxlbWVudCkge1xuICByZXR1cm4gZWxlbWVudC5fa2V5ZG93bkxpc3RlbmVyICE9IG51bGw7XG59XG5cblxuZnVuY3Rpb24gc3RhcnRMaXN0ZW5pbmdUb0tleWRvd24oZWxlbWVudCkge1xuICBlbGVtZW50Ll9rZXlkb3duTGlzdGVuZXIgPSBrZXlkb3duLmJpbmQoZWxlbWVudCk7XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGVsZW1lbnQuX2tleWRvd25MaXN0ZW5lcik7XG4gIC8vIFNldCBhIGRlZmF1bHQgdGFiIGluZGV4IG9mIDAgKGRvY3VtZW50IG9yZGVyKSBpZiBubyB0YWIgaW5kZXggZXhpc3RzLlxuICAvLyBNUyBFZGdlIHJlcXVpcmVzIHdlIGV4cGxpY2l0bHkgY2hlY2sgZm9yIHByZXNlbmNlIG9mIHRhYmluZGV4IGF0dHJpYnV0ZS5cbiAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpID09IG51bGwgfHwgZWxlbWVudC50YWJJbmRleCA8IDApIHtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuICB9XG59XG5cblxuZnVuY3Rpb24gc3RvcExpc3RlbmluZ1RvS2V5ZG93bihlbGVtZW50KSB7XG4gIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGVsZW1lbnQuX2tleWRvd25MaXN0ZW5lcik7XG4gIGVsZW1lbnQuX2tleWRvd25MaXN0ZW5lciA9IG51bGw7XG4gIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xufVxuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBLZXlib2FyZERpcmVjdGlvbi4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIG1hcHMgZGlyZWN0aW9uIGtleXMgKExlZnQsIFJpZ2h0LCBldGMuKSB0byBkaXJlY3Rpb24gc2VtYW50aWNzXG4gICAqIChnbyBsZWZ0LCBnbyByaWdodCwgZXRjLikuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyB0aGUgY29tcG9uZW50IHRvIGludm9rZSBhIGBrZXlkb3duYCBtZXRob2Qgd2hlbiBhIGtleSBpc1xuICAgKiBwcmVzc2VkLiBZb3UgY2FuIHVzZSB0aGUgW0tleWJvYXJkXShLZXlib2FyZC5tZCkgbWl4aW4gZm9yIHRoYXQgcHVycG9zZSwgb3JcbiAgICogd2lyZSB1cCB5b3VyIG93biBrZXlib2FyZCBoYW5kbGluZyBhbmQgY2FsbCBga2V5ZG93bmAgeW91cnNlbGYuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gY2FsbHMgbWV0aG9kcyBzdWNoIGFzIGBnb0xlZnRgIGFuZCBgZ29SaWdodGAuIFlvdSBjYW4gZGVmaW5lXG4gICAqIHdoYXQgdGhhdCBtZWFucyBieSBpbXBsZW1lbnRpbmcgdGhvc2UgbWV0aG9kcyB5b3Vyc2VsZi4gSWYgeW91IHdhbnQgdG8gdXNlXG4gICAqIGRpcmVjdGlvbiBrZXlzIHRvIG5hdmlnYXRlIGEgc2VsZWN0aW9uLCB1c2UgdGhpcyBtaXhpbiB3aXRoIHRoZVxuICAgKiBbRGlyZWN0aW9uU2VsZWN0aW9uXShEaXJlY3Rpb25TZWxlY3Rpb24ubWQpIG1peGluLlxuICAgKi9cbiAgY2xhc3MgS2V5Ym9hcmREaXJlY3Rpb24gZXh0ZW5kcyBiYXNlIHtcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSBkb3duLlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy5cbiAgICAgKi9cbiAgICBnb0Rvd24oKSB7XG4gICAgICBpZiAoc3VwZXIuZ29Eb3duKSB7IHJldHVybiBzdXBlci5nb0Rvd24oKTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSB0byB0aGUgZW5kIChlLmcuLCBvZiBhIGxpc3QpLlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy5cbiAgICAgKi9cbiAgICBnb0VuZCgpIHtcbiAgICAgIGlmIChzdXBlci5nb0VuZCkgeyByZXR1cm4gc3VwZXIuZ29FbmQoKTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSBsZWZ0LlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy5cbiAgICAgKi9cbiAgICBnb0xlZnQoKSB7XG4gICAgICBpZiAoc3VwZXIuZ29MZWZ0KSB7IHJldHVybiBzdXBlci5nb0xlZnQoKTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSByaWdodC5cbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuXG4gICAgICovXG4gICAgZ29SaWdodCgpIHtcbiAgICAgIGlmIChzdXBlci5nb1JpZ2h0KSB7IHJldHVybiBzdXBlci5nb1JpZ2h0KCk7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgdG8gdGhlIHN0YXJ0IChlLmcuLCBvZiBhXG4gICAgICogbGlzdCkuIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy5cbiAgICAgKi9cbiAgICBnb1N0YXJ0KCkge1xuICAgICAgaWYgKHN1cGVyLmdvU3RhcnQpIHsgcmV0dXJuIHN1cGVyLmdvU3RhcnQoKTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSB1cC5cbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuXG4gICAgICovXG4gICAgZ29VcCgpIHtcbiAgICAgIGlmIChzdXBlci5nb1VwKSB7IHJldHVybiBzdXBlci5nb1VwKCk7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgdGhlIGRpcmVjdGlvbiBvZiBwZXJtaXR0ZWQgbmF2aWdhdGlvbiB3aXRoIHRoZSBrZXlib2FyZC5cbiAgICAgKlxuICAgICAqIEFjY2VwdGVkIHZhbHVlcyBhcmUgXCJob3Jpem9udGFsXCIsIFwidmVydGljYWxcIiwgb3IgXCJib3RoXCIgKHRoZSBkZWZhdWx0KS5cbiAgICAgKiBJZiB0aGlzIHByb3BlcnR5IGlzIFwiaG9yaXpvbnRhbFwiLCB0aGUgVXAgQXJyb3cgYW5kIERvd24gQXJyb3cga2V5cyB3aWxsXG4gICAgICogYmUgaWdub3JlZC4gQ29udmVyc2VseSwgaWYgdGhpcyBpcyBcInZlcnRpY2FsXCIsIHRoZSBMZWZ0IEFycm93IGFuZCBSaWdodFxuICAgICAqIEFycm93IGtleXMgd2lsbCBiZSBpZ25vcmVkLlxuICAgICAqXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXQgbmF2aWdhdGlvbkF4aXMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbmF2aWdhdGlvbkF4aXMgfHwgJ2JvdGgnO1xuICAgIH1cbiAgICBzZXQgbmF2aWdhdGlvbkF4aXModmFsdWUpIHtcbiAgICAgIHRoaXMuX25hdmlnYXRpb25BeGlzID0gdmFsdWU7XG4gICAgfVxuXG4gICAga2V5ZG93bihldmVudCkge1xuICAgICAgbGV0IGhhbmRsZWQ7XG5cbiAgICAgIGxldCBheGlzID0gdGhpcy5uYXZpZ2F0aW9uQXhpcztcbiAgICAgIGxldCBob3Jpem9udGFsID0gKGF4aXMgPT09ICdob3Jpem9udGFsJyB8fCBheGlzID09PSAnYm90aCcpO1xuICAgICAgbGV0IHZlcnRpY2FsID0gKGF4aXMgPT09ICd2ZXJ0aWNhbCcgfHwgYXhpcyA9PT0gJ2JvdGgnKTtcblxuICAgICAgLy8gSWdub3JlIExlZnQvUmlnaHQga2V5cyB3aGVuIG1ldGFLZXkgb3IgYWx0S2V5IG1vZGlmaWVyIGlzIGFsc28gcHJlc3NlZCxcbiAgICAgIC8vIGFzIHRoZSB1c2VyIG1heSBiZSB0cnlpbmcgdG8gbmF2aWdhdGUgYmFjayBvciBmb3J3YXJkIGluIHRoZSBicm93c2VyLlxuICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgIGNhc2UgMzU6IC8vIEVuZFxuICAgICAgICAgIGhhbmRsZWQgPSB0aGlzLmdvRW5kKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzY6IC8vIEhvbWVcbiAgICAgICAgICBoYW5kbGVkID0gdGhpcy5nb1N0YXJ0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzc6IC8vIExlZnRcbiAgICAgICAgICBpZiAoaG9yaXpvbnRhbCAmJiAhZXZlbnQubWV0YUtleSAmJiAhZXZlbnQuYWx0S2V5KSB7XG4gICAgICAgICAgICBoYW5kbGVkID0gdGhpcy5nb0xlZnQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzg6IC8vIFVwXG4gICAgICAgICAgaWYgKHZlcnRpY2FsKSB7XG4gICAgICAgICAgICBoYW5kbGVkID0gZXZlbnQuYWx0S2V5ID8gdGhpcy5nb1N0YXJ0KCkgOiB0aGlzLmdvVXAoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzk6IC8vIFJpZ2h0XG4gICAgICAgICAgaWYgKGhvcml6b250YWwgJiYgIWV2ZW50Lm1ldGFLZXkgJiYgIWV2ZW50LmFsdEtleSkge1xuICAgICAgICAgICAgaGFuZGxlZCA9IHRoaXMuZ29SaWdodCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0MDogLy8gRG93blxuICAgICAgICAgIGlmICh2ZXJ0aWNhbCkge1xuICAgICAgICAgICAgaGFuZGxlZCA9IGV2ZW50LmFsdEtleSA/IHRoaXMuZ29FbmQoKSA6IHRoaXMuZ29Eb3duKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgLy8gUHJlZmVyIG1peGluIHJlc3VsdCBpZiBpdCdzIGRlZmluZWQsIG90aGVyd2lzZSB1c2UgYmFzZSByZXN1bHQuXG4gICAgICByZXR1cm4gaGFuZGxlZCB8fCAoc3VwZXIua2V5ZG93biAmJiBzdXBlci5rZXlkb3duKGV2ZW50KSk7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gS2V5Ym9hcmREaXJlY3Rpb247XG59O1xuIiwiaW1wb3J0IG1pY3JvdGFzayBmcm9tICcuL21pY3JvdGFzayc7XG5cbi8vIFRPRE86IFNob3VsZCB0aGlzIGJlIHJlbmFtZWQgdG8gc29tZXRoaW5nIGxpa2UgRGlzdHJpYnV0ZWRDaGlsZHJlbkNoYW5nZWQ/XG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggT2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggd2lyZXMgdXAgbXV0YXRpb24gb2JzZXJ2ZXJzIHRvIHJlcG9ydCBhbnkgY2hhbmdlcyBpbiBhXG4gICAqIGNvbXBvbmVudCdzIGNvbnRlbnQgKGRpcmVjdCBjaGlsZHJlbiwgb3Igbm9kZXMgZGlzdHJpYnV0ZWQgdG8gc2xvdHMpLlxuICAgKlxuICAgKiBGb3IgdGhlIHRpbWUgYmVpbmcsIHRoaXMgY2FuIG9ubHkgc3VwcG9ydCBhIHNpbmdsZSBsZXZlbCBvZiBkaXN0cmlidXRlZFxuICAgKiBjb250ZW50LiBUaGF0IGlzLCBpZiBhIGNvbXBvbmVudCBjb250YWlucyBhIHNsb3QsIGFuZCB0aGUgc2V0IG9mIG5vZGVzXG4gICAqIGRpcmVjdGx5IGFzc2lnbmVkIHRvIHRoYXQgc2xvdCBjaGFuZ2VzLCB0aGVuIHRoaXMgbWl4aW4gd2lsbCBkZXRlY3QgdGhlXG4gICAqIGNoYW5nZS4gSG93ZXZlciwgdGhpcyBtaXhpbiBkb2VzIG5vdCB5ZXQgZGV0ZWN0IGNoYW5nZXMgaW4gcmVwcm9qZWN0ZWRcbiAgICogbm9kZXMuIElmIGEgY29tcG9uZW50J3MgaG9zdCBwbGFjZXMgYSBzbG90IGFzIGEgY2hpbGQgb2YgdGhlIGNvbXBvbmVudFxuICAgKiBpbnN0YW5jZSwgbm9kZXMgYXNzaWduZWQgdG8gdGhlIG91dGVyIGhvc3Qgd2lsbCBiZSBhc3NpZ25lZCB0byB0aGUgaG9zdCdzXG4gICAqIHNsb3QsIHRoZW4gcmVhc3NpZ25lZCB0byB0aGUgc2xvdCBlbGVtZW50IGluc2lkZSB0aGUgY29tcG9uZW50LiBDaGFuZ2VzIGluXG4gICAqIHN1Y2ggcmVwcm9qZWN0ZWQgbm9kZXMgd2lsbCBub3QgKHlldCkgYmUgZGV0ZWN0ZWQgYnkgdGhpcyBtaXhpbi5cbiAgICpcbiAgICogRm9yIGNvbXBhcmlzb24sIHNlZSBQb2x5bWVyJ3Mgb2JzZXJ2ZU5vZGVzIEFQSSwgd2hpY2ggZG9lcyBzb2x2ZSB0aGVcbiAgICogcHJvYmxlbSBvZiB0cmFja2luZyBjaGFuZ2VzIGluIHJlcHJvamVjdGVkIGNvbnRlbnQuXG4gICAqXG4gICAqIE5vdGU6IFRoZSB3ZWIgcGxhdGZvcm0gdGVhbSBjcmVhdGluZyB0aGUgc3BlY2lmaWNhdGlvbnMgZm9yIHdlYiBjb21wb25lbnRzXG4gICAqIHBsYW4gdG8gcmVxdWVzdCB0aGF0IGEgbmV3IHR5cGUgb2YgTXV0YXRpb25PYnNlcnZlciBvcHRpb24gYmUgZGVmaW5lZCB0aGF0XG4gICAqIGxldHMgYSBjb21wb25lbnQgbW9uaXRvciBjaGFuZ2VzIGluIGRpc3RyaWJ1dGVkIGNoaWxkcmVuLiBUaGlzIG1peGluIHdpbGxcbiAgICogYmUgdXBkYXRlZCB0byB0YWtlIGFkdmFudGFnZSBvZiB0aGF0IE11dGF0aW9uT2JzZXJ2ZXIgb3B0aW9uIHdoZW4gdGhhdFxuICAgKiBiZWNvbWVzIGF2YWlsYWJsZS5cbiAgICovXG4gIGNsYXNzIE9ic2VydmVDb250ZW50Q2hhbmdlcyBleHRlbmRzIGJhc2Uge1xuXG4gICAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuICAgICAgb2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzKHRoaXMpO1xuXG4gICAgICAvLyBNYWtlIGFuIGluaXRpYWwgY2FsbCB0byBjb250ZW50Q2hhbmdlZCgpIHNvIHRoYXQgdGhlIGNvbXBvbmVudCBjYW4gZG9cbiAgICAgIC8vIGluaXRpYWxpemF0aW9uIHRoYXQgaXQgbm9ybWFsbHkgZG9lcyB3aGVuIGNvbnRlbnQgY2hhbmdlcy5cbiAgICAgIC8vXG4gICAgICAvLyBUaGlzIHdpbGwgaW52b2tlIGNvbnRlbnRDaGFuZ2VkKCkgaGFuZGxlcnMgaW4gb3RoZXIgbWl4aW5zLiBJbiBvcmRlclxuICAgICAgLy8gdGhhdCB0aG9zZSBtaXhpbnMgaGF2ZSBhIGNoYW5jZSB0byBjb21wbGV0ZSB0aGVpciBvd24gaW5pdGlhbGl6YXRpb24sXG4gICAgICAvLyB3ZSBhZGQgdGhlIGNvbnRlbnRDaGFuZ2VkKCkgY2FsbCB0byB0aGUgbWljcm90YXNrIHF1ZXVlLlxuICAgICAgbWljcm90YXNrKCgpID0+IHRoaXMuY29udGVudENoYW5nZWQoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSBjb250ZW50cyBvZiB0aGUgY29tcG9uZW50IChpbmNsdWRpbmcgZGlzdHJpYnV0ZWRcbiAgICAgKiBjaGlsZHJlbikgaGF2ZSBjaGFuZ2VkLlxuICAgICAqXG4gICAgICogVGhpcyBtZXRob2QgaXMgYWxzbyBpbnZva2VkIHdoZW4gYSBjb21wb25lbnQgaXMgZmlyc3QgaW5zdGFudGlhdGVkOyB0aGVcbiAgICAgKiBjb250ZW50cyBoYXZlIGVzc2VudGlhbGx5IFwiY2hhbmdlZFwiIGZyb20gYmVpbmcgbm90aGluZy4gVGhpcyBhbGxvd3MgdGhlXG4gICAgICogY29tcG9uZW50IHRvIHBlcmZvcm0gaW5pdGlhbCBwcm9jZXNzaW5nIG9mIGl0cyBjaGlsZHJlbi5cbiAgICAgKi9cbiAgICBjb250ZW50Q2hhbmdlZCgpIHtcbiAgICAgIGlmIChzdXBlci5jb250ZW50Q2hhbmdlZCkgeyBzdXBlci5jb250ZW50Q2hhbmdlZCgpOyB9XG4gICAgICBsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2NvbnRlbnQtY2hhbmdlZCcpO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGV2ZW50IGlzIHJhaXNlZCB3aGVuIHRoZSBjb21wb25lbnQncyBjb250ZW50cyAoaW5jbHVkaW5nIGRpc3RyaWJ1dGVkXG4gICAgICogY2hpbGRyZW4pIGhhdmUgY2hhbmdlZC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBPYnNlcnZlQ29udGVudENoYW5nZXNcbiAgICAgKiBAZXZlbnQgY29udGVudC1jaGFuZ2VkXG4gICAgICovXG4gIH1cblxuICByZXR1cm4gT2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzO1xufTtcblxuXG4vLyBUT0RPOiBEZWNpZGUgd2hldGhlciB3ZSB3YW50IGFuIG9wdGlvbiB0byB0cmFjayBjaGFuZ2VzIHRvIGNoaWxkcmVuXG4vLyBhdHRyaWJ1dGVzLlxuZnVuY3Rpb24gb2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzKGVsZW1lbnQpIHtcbiAgZWxlbWVudC5fY29udGVudENoYW5nZU9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT5cbiAgICBlbGVtZW50LmNvbnRlbnRDaGFuZ2VkKClcbiAgKTtcbiAgZWxlbWVudC5fY29udGVudENoYW5nZU9ic2VydmVyLm9ic2VydmUoZWxlbWVudCwge1xuICAgIC8vIGF0dHJpYnV0ZXM6IHRydWUsXG4gICAgY2hhcmFjdGVyRGF0YTogdHJ1ZSxcbiAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgc3VidHJlZTogdHJ1ZVxuICB9KTtcbn1cbiIsIi8vIFVzZWQgdG8gYXNzaWduIHVuaXF1ZSBJRHMgdG8gaXRlbSBlbGVtZW50cyB3aXRob3V0IElEcy5cbmxldCBpZENvdW50ID0gMDtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFNlbGVjdGlvbkFyaWFBY3RpdmUuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCB0cmVhdHMgdGhlIHNlbGVjdGVkIGl0ZW0gaW4gYSBsaXN0IGFzIHRoZSBhY3RpdmUgaXRlbSBpbiBBUklBXG4gICAqIGFjY2Vzc2liaWxpdHkgdGVybXMuXG4gICAqXG4gICAqIEhhbmRsaW5nIEFSSUEgc2VsZWN0aW9uIHN0YXRlIHByb3Blcmx5IGlzIGFjdHVhbGx5IHF1aXRlIGNvbXBsZXg6XG4gICAqXG4gICAqICogVGhlIGl0ZW1zIGluIHRoZSBsaXN0IG5lZWQgdG8gYmUgaW5kaWNhdGVkIGFzIHBvc3NpYmxlIGl0ZW1zIHZpYSBhbiBBUklBXG4gICAqICAgYHJvbGVgIGF0dHJpYnV0ZSB2YWx1ZSBzdWNoIGFzIFwib3B0aW9uXCIuXG4gICAqICogVGhlIHNlbGVjdGVkIGl0ZW0gbmVlZCB0byBiZSBtYXJrZWQgYXMgc2VsZWN0ZWQgYnkgc2V0dGluZyB0aGUgaXRlbSdzXG4gICAqICAgYGFyaWEtc2VsZWN0ZWRgIGF0dHJpYnV0ZSB0byB0cnVlICphbmQqIHRoZSBvdGhlciBpdGVtcyBuZWVkIGJlIG1hcmtlZCBhc1xuICAgKiAgICpub3QqIHNlbGVjdGVkIGJ5IHNldHRpbmcgYGFyaWEtc2VsZWN0ZWRgIHRvIGZhbHNlLlxuICAgKiAqIFRoZSBvdXRlcm1vc3QgZWxlbWVudCB3aXRoIHRoZSBrZXlib2FyZCBmb2N1cyBuZWVkcyB0byBoYXZlIGF0dHJpYnV0ZXNcbiAgICogICBzZXQgb24gaXQgc28gdGhhdCB0aGUgc2VsZWN0aW9uIGlzIGtub3dhYmxlIGF0IHRoZSBsaXN0IGxldmVsIHZpYSB0aGVcbiAgICogICBgYXJpYS1hY3RpdmVkZXNjZW5kYW50YCBhdHRyaWJ1dGUuXG4gICAqICogVXNlIG9mIGBhcmlhLWFjdGl2ZWRlc2NlbmRhbnRgIGluIHR1cm4gcmVxdWlyZXMgdGhhdCBhbGwgaXRlbXMgaW4gdGhlXG4gICAqICAgbGlzdCBoYXZlIElEIGF0dHJpYnV0ZXMgYXNzaWduZWQgdG8gdGhlbS5cbiAgICpcbiAgICogVGhpcyBtaXhpbiB0cmllcyB0byBhZGRyZXNzIGFsbCBvZiB0aGUgYWJvdmUgcmVxdWlyZW1lbnRzLiBUbyB0aGF0IGVuZCxcbiAgICogdGhpcyBtaXhpbiB3aWxsIGFzc2lnbiBnZW5lcmF0ZWQgSURzIHRvIGFueSBpdGVtIHRoYXQgZG9lc24ndCBhbHJlYWR5IGhhdmVcbiAgICogYW4gSUQuXG4gICAqXG4gICAqIEFSSUEgcmVsaWVzIG9uIGVsZW1lbnRzIHRvIHByb3ZpZGUgYHJvbGVgIGF0dHJpYnV0ZXMuIFRoaXMgbWl4aW4gd2lsbCBhcHBseVxuICAgKiBhIGRlZmF1bHQgcm9sZSBvZiBcImxpc3Rib3hcIiBvbiB0aGUgb3V0ZXIgbGlzdCBpZiBpdCBkb2Vzbid0IGFscmVhZHkgaGF2ZSBhblxuICAgKiBleHBsaWNpdCByb2xlLiBTaW1pbGFybHksIHRoaXMgbWl4aW4gd2lsbCBhcHBseSBhIGRlZmF1bHQgcm9sZSBvZiBcIm9wdGlvblwiXG4gICAqIHRvIGFueSBsaXN0IGl0ZW0gdGhhdCBkb2VzIG5vdCBhbHJlYWR5IGhhdmUgYSByb2xlIHNwZWNpZmllZC5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIGEgc2V0IG9mIG1lbWJlcnMgdGhhdCBtYW5hZ2UgdGhlIHN0YXRlIG9mIHRoZSBzZWxlY3Rpb246XG4gICAqIGBhcHBseVNlbGVjdGlvbmAsIGBpdGVtQWRkZWRgLCBhbmQgYHNlbGVjdGVkSW5kZXhgLiBZb3UgY2FuIHN1cHBseSB0aGVzZVxuICAgKiB5b3Vyc2VsZiwgb3IgZG8gc28gdmlhIHRoZSBbSXRlbXNTZWxlY3Rpb25dKEl0ZW1zU2VsZWN0aW9uLm1kKSBtaXhpbi5cbiAgICovXG4gIGNsYXNzIFNlbGVjdGlvbkFyaWFBY3RpdmUgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGFwcGx5U2VsZWN0aW9uKGl0ZW0sIHNlbGVjdGVkKSB7XG4gICAgICBpZiAoc3VwZXIuYXBwbHlTZWxlY3Rpb24pIHsgc3VwZXIuYXBwbHlTZWxlY3Rpb24oaXRlbSwgc2VsZWN0ZWQpOyB9XG4gICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsIHNlbGVjdGVkKTtcbiAgICAgIGxldCBpdGVtSWQgPSBpdGVtLmlkO1xuICAgICAgaWYgKGl0ZW1JZCkge1xuICAgICAgICBsZXQgb3V0ZXJtb3N0ID0gdGhpcy5jb2xsZWN0aXZlID9cbiAgICAgICAgICB0aGlzLmNvbGxlY3RpdmUub3V0ZXJtb3N0RWxlbWVudCA6XG4gICAgICAgICAgdGhpcztcbiAgICAgICAgb3V0ZXJtb3N0LnNldEF0dHJpYnV0ZSgnYXJpYS1hY3RpdmVkZXNjZW5kYW50JywgaXRlbUlkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb2xsZWN0aXZlQ2hhbmdlZCgpIHtcbiAgICAgIGlmIChzdXBlci5jb2xsZWN0aXZlQ2hhbmdlZCkgeyBzdXBlci5jb2xsZWN0aXZlQ2hhbmdlZCgpOyB9XG5cbiAgICAgIC8vIEVuc3VyZSB0aGUgb3V0ZXJtb3N0IGFzcGVjdCBoYXMgYW4gQVJJQSByb2xlLlxuICAgICAgbGV0IG91dGVybW9zdEVsZW1lbnQgPSB0aGlzLmNvbGxlY3RpdmUub3V0ZXJtb3N0RWxlbWVudDtcbiAgICAgIGlmICghb3V0ZXJtb3N0RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSkge1xuICAgICAgICAvLyBUcnkgdG8gcHJvbW90ZSBhbiBBUklBIHJvbGUgZnJvbSBhbiBpbm5lciBlbGVtZW50LiBJZiBub25lIGlzIGZvdW5kLFxuICAgICAgICAvLyB1c2UgYSBkZWZhdWx0IHJvbGUuXG4gICAgICAgIGxldCByb2xlID0gZ2V0Q29sbGVjdGl2ZUFyaWFSb2xlKHRoaXMuY29sbGVjdGl2ZSkgfHwgJ2xpc3Rib3gnO1xuICAgICAgICBvdXRlcm1vc3RFbGVtZW50LnNldEF0dHJpYnV0ZSgncm9sZScsIHJvbGUpO1xuICAgICAgfVxuICAgICAgaWYgKCFvdXRlcm1vc3RFbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1hY3RpdmVkZXNjZW5kYW50JykpIHtcbiAgICAgICAgLy8gVHJ5IHRvIHByb21vdGUgYW4gQVJJQSBhY3RpdmVkZXNjZW5kYW50IHZhbHVlIGZyb20gYW4gaW5uZXIgZWxlbWVudC5cbiAgICAgICAgbGV0IGRlc2NlbmRhbnQgPSBnZXRDb2xsZWN0aXZlQXJpYUFjdGl2ZURlc2NlbmRhbnQodGhpcy5jb2xsZWN0aXZlKTtcbiAgICAgICAgaWYgKGRlc2NlbmRhbnQpIHtcbiAgICAgICAgICBvdXRlcm1vc3RFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1hY3RpdmVkZXNjZW5kYW50JywgZGVzY2VuZGFudCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gUmVtb3ZlIHRoZSBBUklBIHJvbGUgYW5kIGFjdGl2ZWRlc2NlbmRhbnQgdmFsdWVzIGZyb20gdGhlIGNvbGxlY3RpdmUnc1xuICAgICAgLy8gaW5uZXIgZWxlbWVudHMuXG4gICAgICB0aGlzLmNvbGxlY3RpdmUuZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnQgIT09IG91dGVybW9zdEVsZW1lbnQpIHtcbiAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1hY3RpdmVkZXNjZW5kYW50Jyk7XG4gICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnbm9uZScpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG4gICAgICBpZiAoIXRoaXMuZ2V0QXR0cmlidXRlKCdyb2xlJykpIHtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnbGlzdGJveCcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGl0ZW1BZGRlZChpdGVtKSB7XG4gICAgICBpZiAoc3VwZXIuaXRlbUFkZGVkKSB7IHN1cGVyLml0ZW1BZGRlZChpdGVtKTsgfVxuXG4gICAgICBpZiAoIWl0ZW0uZ2V0QXR0cmlidXRlKCdyb2xlJykpIHtcbiAgICAgICAgLy8gQXNzaWduIGEgZGVmYXVsdCBBUklBIHJvbGUuXG4gICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdyb2xlJywgJ29wdGlvbicpO1xuICAgICAgfVxuXG4gICAgICAvLyBFbnN1cmUgZWFjaCBpdGVtIGhhcyBhbiBJRCBzbyB3ZSBjYW4gc2V0IGFyaWEtYWN0aXZlZGVzY2VuZGFudCBvbiB0aGVcbiAgICAgIC8vIG92ZXJhbGwgbGlzdCB3aGVuZXZlciB0aGUgc2VsZWN0aW9uIGNoYW5nZXMuXG4gICAgICAvL1xuICAgICAgLy8gVGhlIElEIHdpbGwgdGFrZSB0aGUgZm9ybSBvZiBhIGJhc2UgSUQgcGx1cyBhIHVuaXF1ZSBpbnRlZ2VyLiBUaGUgYmFzZVxuICAgICAgLy8gSUQgd2lsbCBiZSBpbmNvcnBvcmF0ZSB0aGUgY29tcG9uZW50J3Mgb3duIElELiBFLmcuLCBpZiBhIGNvbXBvbmVudCBoYXNcbiAgICAgIC8vIElEIFwiZm9vXCIsIHRoZW4gaXRzIGl0ZW1zIHdpbGwgaGF2ZSBJRHMgdGhhdCBsb29rIGxpa2UgXCJfZm9vT3B0aW9uMVwiLiBJZlxuICAgICAgLy8gdGhlIGNvbXBuZW50IGhhcyBubyBJRCBpdHNlbGYsIGl0cyBpdGVtcyB3aWxsIGdldCBJRHMgdGhhdCBsb29rIGxpa2VcbiAgICAgIC8vIFwiX29wdGlvbjFcIi4gSXRlbSBJRHMgYXJlIHByZWZpeGVkIHdpdGggYW4gdW5kZXJzY29yZSB0byBkaWZmZXJlbnRpYXRlXG4gICAgICAvLyB0aGVtIGZyb20gbWFudWFsbHktYXNzaWduZWQgSURzLCBhbmQgdG8gbWluaW1pemUgdGhlIHBvdGVudGlhbCBmb3IgSURcbiAgICAgIC8vIGNvbmZsaWN0cy5cbiAgICAgIGlmICghaXRlbS5pZCkge1xuICAgICAgICBsZXQgYmFzZUlkID0gdGhpcy5pZCA/XG4gICAgICAgICAgICBcIl9cIiArIHRoaXMuaWQgKyBcIk9wdGlvblwiIDpcbiAgICAgICAgICAgIFwiX29wdGlvblwiO1xuICAgICAgICBpdGVtLmlkID0gYmFzZUlkICsgaWRDb3VudCsrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGdldCBzZWxlY3RlZEl0ZW0oKSB7XG4gICAgICByZXR1cm4gc3VwZXIuc2VsZWN0ZWRJdGVtO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0ZWRJdGVtKGl0ZW0pIHtcbiAgICAgIGlmICgnc2VsZWN0ZWRJdGVtJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEl0ZW0gPSBpdGVtOyB9XG4gICAgICAvLyBDYXRjaCB0aGUgY2FzZSB3aGVyZSB0aGUgc2VsZWN0aW9uIGlzIHJlbW92ZWQuXG4gICAgICBpZiAoaXRlbSA9PSBudWxsKSB7XG4gICAgICAgIGxldCBvdXRlcm1vc3QgPSB0aGlzLmNvbGxlY3RpdmUgP1xuICAgICAgICAgIHRoaXMuY29sbGVjdGl2ZS5vdXRlcm1vc3RFbGVtZW50IDpcbiAgICAgICAgICB0aGlzO1xuICAgICAgICBvdXRlcm1vc3QucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBTZWxlY3Rpb25BcmlhQWN0aXZlO1xufTtcblxuXG4vLyBSZXR1cm4gdGhlIGZpcnN0IEFSSUEgYWN0aXZlZGVzY2VuZGFudCBkZWZpbmVkIGJ5IHRoZSBjb2xsZWN0aXZlLlxuZnVuY3Rpb24gZ2V0Q29sbGVjdGl2ZUFyaWFBY3RpdmVEZXNjZW5kYW50KGNvbGxlY3RpdmUpIHtcbiAgbGV0IGRlc2NlbmRhbnRzID0gY29sbGVjdGl2ZS5lbGVtZW50cy5tYXAoZWxlbWVudCA9PiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1hY3RpdmVkZXNjZW5kYW50JykpO1xuICBsZXQgbm9uTnVsbERlc2NlbmRhbnRzID0gZGVzY2VuZGFudHMuZmlsdGVyKGRlc2NlbmRhbnQgPT4gZGVzY2VuZGFudCAhPT0gbnVsbCk7XG4gIHJldHVybiBub25OdWxsRGVzY2VuZGFudHNbMF07XG59XG5cblxuLy8gUmV0dXJuIHRoZSBmaXJzdCBBUklBIGxhYmVsIGRlZmluZWQgYnkgdGhlIGNvbGxlY3RpdmUuXG5mdW5jdGlvbiBnZXRDb2xsZWN0aXZlQXJpYVJvbGUoY29sbGVjdGl2ZSkge1xuICBsZXQgcm9sZXMgPSBjb2xsZWN0aXZlLmVsZW1lbnRzLm1hcChlbGVtZW50ID0+IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdyb2xlJykpO1xuICBsZXQgbm9uTnVsbFJvbGVzID0gcm9sZXMuZmlsdGVyKHJvbGUgPT4gcm9sZSAhPT0gbnVsbCk7XG4gIHJldHVybiBub25OdWxsUm9sZXNbMF07XG59XG4iLCIvKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFNoYWRvd0VsZW1lbnRSZWZlcmVuY2VzLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gdG8gY3JlYXRlIHJlZmVyZW5jZXMgdG8gZWxlbWVudHMgaW4gYSBjb21wb25lbnQncyBTaGFkb3cgRE9NIHN1YnRyZWUuXG4gICAqXG4gICAqIFRoaXMgYWRkcyBhIG1lbWJlciBvbiB0aGUgY29tcG9uZW50IGNhbGxlZCBgdGhpcy4kYCB0aGF0IGNhbiBiZSB1c2VkIHRvXG4gICAqIHJlZmVyZW5jZSBzaGFkb3cgZWxlbWVudHMgd2l0aCBJRHMuIEUuZy4sIGlmIGNvbXBvbmVudCdzIHNoYWRvdyBjb250YWlucyBhblxuICAgKiBlbGVtZW50IGA8YnV0dG9uIGlkPVwiZm9vXCI+YCwgdGhlbiB0aGlzIG1peGluIHdpbGwgY3JlYXRlIGEgbWVtYmVyXG4gICAqIGB0aGlzLiQuZm9vYCB0aGF0IHBvaW50cyB0byB0aGF0IGJ1dHRvbi5cbiAgICpcbiAgICogU3VjaCByZWZlcmVuY2VzIHNpbXBsaWZ5IGEgY29tcG9uZW50J3MgYWNjZXNzIHRvIGl0cyBvd24gZWxlbWVudHMuIEluXG4gICAqIGV4Y2hhbmdlLCB0aGlzIG1peGluIHRyYWRlcyBvZmYgYSBvbmUtdGltZSBjb3N0IG9mIHF1ZXJ5aW5nIGFsbCBlbGVtZW50cyBpblxuICAgKiB0aGUgc2hhZG93IHRyZWUgaW5zdGVhZCBvZiBwYXlpbmcgYW4gb25nb2luZyBjb3N0IHRvIHF1ZXJ5IGZvciBhbiBlbGVtZW50XG4gICAqIGVhY2ggdGltZSB0aGUgY29tcG9uZW50IHdhbnRzIHRvIGluc3BlY3Qgb3IgbWFuaXB1bGF0ZSBpdC5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIHRoZSBjb21wb25lbnQgdG8gZGVmaW5lIGEgU2hhZG93IERPTSBzdWJ0cmVlLiBZb3UgY2FuXG4gICAqIGNyZWF0ZSB0aGF0IHRyZWUgeW91cnNlbGYsIG9yIG1ha2UgdXNlIG9mIHRoZVxuICAgKiBbU2hhZG93VGVtcGxhdGVdKFNoYWRvd1RlbXBsYXRlLm1kKSBtaXhpbi5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBpcyBpbnNwaXJlZCBieSBQb2x5bWVyJ3MgW2F1dG9tYXRpY1xuICAgKiBub2RlIGZpbmRpbmddKGh0dHBzOi8vd3d3LnBvbHltZXItcHJvamVjdC5vcmcvMS4wL2RvY3MvZGV2Z3VpZGUvbG9jYWwtZG9tLmh0bWwjbm9kZS1maW5kaW5nKVxuICAgKiBmZWF0dXJlLlxuICAgKi9cbiAgY2xhc3MgU2hhZG93RWxlbWVudFJlZmVyZW5jZXMgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cbiAgICAgIGlmICh0aGlzLnNoYWRvd1Jvb3QpIHtcbiAgICAgICAgLy8gTG9vayBmb3IgZWxlbWVudHMgaW4gdGhlIHNoYWRvdyBzdWJ0cmVlIHRoYXQgaGF2ZSBpZCBhdHRyaWJ1dGVzLlxuICAgICAgICAvLyBBbiBhbHRlcm5hdGl2ZWx5IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWl4aW4gd291bGQgYmUgdG8ganVzdCBkZWZpbmVcbiAgICAgICAgLy8gYSB0aGlzLiQgZ2V0dGVyIHRoYXQgbGF6aWx5IGRvZXMgdGhpcyBzZWFyY2ggdGhlIGZpcnN0IHRpbWUgc29tZW9uZVxuICAgICAgICAvLyB0cmllcyB0byBhY2Nlc3MgdGhpcy4kLiBUaGF0IG1pZ2h0IGludHJvZHVjZSBzb21lIGNvbXBsZXhpdHkg4oCTIGlmIHRoZVxuICAgICAgICAvLyB0aGUgdHJlZSBjaGFuZ2VkIGFmdGVyIGl0IHdhcyBmaXJzdCBwb3B1bGF0ZWQsIHRoZSByZXN1bHQgb2ZcbiAgICAgICAgLy8gc2VhcmNoaW5nIGZvciBhIG5vZGUgbWlnaHQgYmUgc29tZXdoYXQgdW5wcmVkaWN0YWJsZS5cbiAgICAgICAgdGhpcy4kID0ge307XG4gICAgICAgIGxldCBub2Rlc1dpdGhJZHMgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvckFsbCgnW2lkXScpO1xuICAgICAgICBbXS5mb3JFYWNoLmNhbGwobm9kZXNXaXRoSWRzLCBub2RlID0+IHtcbiAgICAgICAgICBsZXQgaWQgPSBub2RlLmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgICB0aGlzLiRbaWRdID0gbm9kZTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbGxlY3Rpb24gb2YgcmVmZXJlbmNlcyB0byB0aGUgZWxlbWVudHMgd2l0aCBJRHMgaW4gYSBjb21wb25lbnQnc1xuICAgICAqIFNoYWRvdyBET00gc3VidHJlZS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICogQG1lbWJlciAkXG4gICAgICovXG4gIH1cblxuICByZXR1cm4gU2hhZG93RWxlbWVudFJlZmVyZW5jZXM7XG59O1xuIiwiLy8gRmVhdHVyZSBkZXRlY3Rpb24gZm9yIG9sZCBTaGFkb3cgRE9NIHYwLlxuY29uc3QgVVNJTkdfU0hBRE9XX0RPTV9WMCA9ICh0eXBlb2YgSFRNTEVsZW1lbnQucHJvdG90eXBlLmNyZWF0ZVNoYWRvd1Jvb3QgIT09ICd1bmRlZmluZWQnKTtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFNoYWRvd1RlbXBsYXRlLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gZm9yIHN0YW1waW5nIGEgdGVtcGxhdGUgaW50byBhIFNoYWRvdyBET00gc3VidHJlZSB1cG9uIGNvbXBvbmVudFxuICAgKiBpbnN0YW50aWF0aW9uLlxuICAgKlxuICAgKiBUbyB1c2UgdGhpcyBtaXhpbiwgZGVmaW5lIGEgYHRlbXBsYXRlYCBwcm9wZXJ0eSBhcyBhIHN0cmluZyBvciBIVE1MXG4gICAqIGA8dGVtcGxhdGU+YCBlbGVtZW50OlxuICAgKlxuICAgKiAgICAgY2xhc3MgTXlFbGVtZW50IGV4dGVuZHMgU2hhZG93VGVtcGxhdGUoSFRNTEVsZW1lbnQpIHtcbiAgICogICAgICAgZ2V0IHRlbXBsYXRlKCkge1xuICAgKiAgICAgICAgIHJldHVybiBgSGVsbG8sIDxlbT53b3JsZDwvZW0+LmA7XG4gICAqICAgICAgIH1cbiAgICogICAgIH1cbiAgICpcbiAgICogV2hlbiB5b3VyIGNvbXBvbmVudCBjbGFzcyBpcyBpbnN0YW50aWF0ZWQsIGEgc2hhZG93IHJvb3Qgd2lsbCBiZSBjcmVhdGVkIG9uXG4gICAqIHRoZSBpbnN0YW5jZSwgYW5kIHRoZSBjb250ZW50cyBvZiB0aGUgdGVtcGxhdGUgd2lsbCBiZSBjbG9uZWQgaW50byB0aGVcbiAgICogc2hhZG93IHJvb3QuIElmIHlvdXIgY29tcG9uZW50IGRvZXMgbm90IGRlZmluZSBhIGB0ZW1wbGF0ZWAgcHJvcGVydHksIHRoaXNcbiAgICogbWl4aW4gaGFzIG5vIGVmZmVjdC5cbiAgICpcbiAgICogRm9yIHRoZSB0aW1lIGJlaW5nLCB0aGlzIGV4dGVuc2lvbiByZXRhaW5zIHN1cHBvcnQgZm9yIFNoYWRvdyBET00gdjAuIFRoYXRcbiAgICogd2lsbCBldmVudHVhbGx5IGJlIGRlcHJlY2F0ZWQgYXMgYnJvd3NlcnMgKGFuZCB0aGUgU2hhZG93IERPTSBwb2x5ZmlsbClcbiAgICogaW1wbGVtZW50IFNoYWRvdyBET00gdjEuXG4gICAqL1xuICBjbGFzcyBTaGFkb3dUZW1wbGF0ZSBleHRlbmRzIGJhc2Uge1xuXG4gICAgLypcbiAgICAgKiBJZiB0aGUgY29tcG9uZW50IGRlZmluZXMgYSB0ZW1wbGF0ZSwgYSBzaGFkb3cgcm9vdCB3aWxsIGJlIGNyZWF0ZWQgb24gdGhlXG4gICAgICogY29tcG9uZW50IGluc3RhbmNlLCBhbmQgdGhlIHRlbXBsYXRlIHN0YW1wZWQgaW50byBpdC5cbiAgICAgKi9cbiAgICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG4gICAgICBsZXQgdGVtcGxhdGUgPSB0aGlzLnRlbXBsYXRlO1xuICAgICAgLy8gVE9ETzogU2F2ZSB0aGUgcHJvY2Vzc2VkIHRlbXBsYXRlIHdpdGggdGhlIGNvbXBvbmVudCdzIGNsYXNzIHByb3RvdHlwZVxuICAgICAgLy8gc28gaXQgZG9lc24ndCBuZWVkIHRvIGJlIHByb2Nlc3NlZCB3aXRoIGV2ZXJ5IGluc3RhbnRpYXRpb24uXG4gICAgICBpZiAodGVtcGxhdGUpIHtcblxuICAgICAgICBpZiAodHlwZW9mIHRlbXBsYXRlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIC8vIFVwZ3JhZGUgcGxhaW4gc3RyaW5nIHRvIHJlYWwgdGVtcGxhdGUuXG4gICAgICAgICAgdGVtcGxhdGUgPSBjcmVhdGVUZW1wbGF0ZVdpdGhJbm5lckhUTUwodGVtcGxhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFVTSU5HX1NIQURPV19ET01fVjApIHtcbiAgICAgICAgICBwb2x5ZmlsbFNsb3RXaXRoQ29udGVudCh0ZW1wbGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAod2luZG93LlNoYWRvd0RPTVBvbHlmaWxsKSB7XG4gICAgICAgICAgc2hpbVRlbXBsYXRlU3R5bGVzKHRlbXBsYXRlLCB0aGlzLmxvY2FsTmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0aGlzLmxvZyhcImNsb25pbmcgdGVtcGxhdGUgaW50byBzaGFkb3cgcm9vdFwiKTtcbiAgICAgICAgbGV0IHJvb3QgPSBVU0lOR19TSEFET1dfRE9NX1YwID9cbiAgICAgICAgICB0aGlzLmNyZWF0ZVNoYWRvd1Jvb3QoKSA6ICAgICAgICAgICAgIC8vIFNoYWRvdyBET00gdjBcbiAgICAgICAgICB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTsgIC8vIFNoYWRvdyBET00gdjFcbiAgICAgICAgbGV0IGNsb25lID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0ZW1wbGF0ZS5jb250ZW50LCB0cnVlKTtcbiAgICAgICAgcm9vdC5hcHBlbmRDaGlsZChjbG9uZSk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gU2hhZG93VGVtcGxhdGU7XG59O1xuXG5cbi8vIENvbnZlcnQgYSBwbGFpbiBzdHJpbmcgb2YgSFRNTCBpbnRvIGEgcmVhbCB0ZW1wbGF0ZSBlbGVtZW50LlxuZnVuY3Rpb24gY3JlYXRlVGVtcGxhdGVXaXRoSW5uZXJIVE1MKGlubmVySFRNTCkge1xuICBsZXQgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAvLyBSRVZJRVc6IElzIHRoZXJlIGFuIGVhc2llciB3YXkgdG8gZG8gdGhpcz9cbiAgLy8gV2UnZCBsaWtlIHRvIGp1c3Qgc2V0IGlubmVySFRNTCBvbiB0aGUgdGVtcGxhdGUgY29udGVudCwgYnV0IHNpbmNlIGl0J3NcbiAgLy8gYSBEb2N1bWVudEZyYWdtZW50LCB0aGF0IGRvZXNuJ3Qgd29yay5cbiAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuaW5uZXJIVE1MID0gaW5uZXJIVE1MO1xuICB3aGlsZSAoZGl2LmNoaWxkTm9kZXMubGVuZ3RoID4gMCkge1xuICAgIHRlbXBsYXRlLmNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2LmNoaWxkTm9kZXNbMF0pO1xuICB9XG4gIHJldHVybiB0ZW1wbGF0ZTtcbn1cblxuLy8gUmVwbGFjZSBvY2N1cmVuY2VzIG9mIHYxIHNsb3QgZWxlbWVudHMgd2l0aCB2MCBjb250ZW50IGVsZW1lbnRzLlxuLy8gVGhpcyBkb2VzIG5vdCB5ZXQgbWFwIG5hbWVkIHNsb3RzIHRvIGNvbnRlbnQgc2VsZWN0IGNsYXVzZXMuXG5mdW5jdGlvbiBwb2x5ZmlsbFNsb3RXaXRoQ29udGVudCh0ZW1wbGF0ZSkge1xuICBbXS5mb3JFYWNoLmNhbGwodGVtcGxhdGUuY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCdzbG90JyksIHNsb3RFbGVtZW50ID0+IHtcbiAgICBsZXQgY29udGVudEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjb250ZW50Jyk7XG4gICAgc2xvdEVsZW1lbnQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoY29udGVudEVsZW1lbnQsIHNsb3RFbGVtZW50KTtcbiAgfSk7XG59XG5cbi8vIEludm9rZSBiYXNpYyBzdHlsZSBzaGltbWluZyB3aXRoIFNoYWRvd0NTUy5cbmZ1bmN0aW9uIHNoaW1UZW1wbGF0ZVN0eWxlcyh0ZW1wbGF0ZSwgdGFnKSB7XG4gIHdpbmRvdy5XZWJDb21wb25lbnRzLlNoYWRvd0NTUy5zaGltU3R5bGluZyh0ZW1wbGF0ZS5jb250ZW50LCB0YWcpO1xufVxuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBTd2lwZURpcmVjdGlvbi4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIG1hcHMgdG91Y2ggZ2VzdHVyZXMgKHN3aXBlIGxlZnQsIHN3aXBlIHJpZ2h0KSB0byBkaXJlY3Rpb25cbiAgICogc2VtYW50aWNzIChnbyByaWdodCwgZ28gbGVmdCkuXG4gICAqXG4gICAqIEJ5IGRlZmF1bHQsIHRoaXMgbWl4aW4gcHJlc2VudHMgbm8gdXNlci12aXNpYmxlIGVmZmVjdHM7IGl0IGp1c3QgaW5kaWNhdGVzIGFcbiAgICogZGlyZWN0aW9uIGluIHdoaWNoIHRoZSB1c2VyIGlzIGN1cnJlbnRseSBzd2lwaW5nIG9yIGhhcyBmaW5pc2hlZCBzd2lwaW5nLiBUb1xuICAgKiBtYXAgdGhlIGRpcmVjdGlvbiB0byBhIGNoYW5nZSBpbiBzZWxlY3Rpb24sIHVzZSB0aGVcbiAgICogW0RpcmVjdGlvblNlbGVjdGlvbl0oRGlyZWN0aW9uU2VsZWN0aW9uLm1kKSBtaXhpbi5cbiAgICovXG4gIGNsYXNzIFN3aXBlRGlyZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG5cbiAgICAgIC8vIEZvciB0aGUgY29tcG9uZW50IHRvIHJlY2VpdmUgUG9pbnRlckV2ZW50cyBpbiBJRS9FZGdlLCB3ZSBuZWVkIHRvIHNldFxuICAgICAgLy8gdG91Y2gtYWN0aW9uOiBub25lLiBPbmx5IG1ha2UgdGhpcyBjaGFuZ2UgaWYgdG91Y2gtYWN0aW9uIGlzIGN1cnJlbnRseVxuICAgICAgLy8gdGhlIGRlZmF1bHQgdmFsdWUgKFwiYXV0b1wiKSwgaW4gY2FzZSB0aGUgZGV2ZWxvcGVyIGtub3dzIGJldHRlciB0aGFuIHdlXG4gICAgICAvLyBkbyB3aGF0IHRoZXkgd2FudCBpbiB0aGVpciBwYXJ0aWN1bGFyIGNvbnRleHQuXG4gICAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzKS50b3VjaEFjdGlvbiA9PT0gJ2F1dG8nKSB7XG4gICAgICAgIHRoaXMuc3R5bGUudG91Y2hBY3Rpb24gPSAnbm9uZSc7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudHJhdmVsRnJhY3Rpb24gPSAwO1xuXG4gICAgICAvLyBUT0RPOiBUb3VjaCBldmVudHMgY291bGQgYmUgZmFjdG9yZWQgb3V0IGludG8gaXRzIG93biBtaXhpbi5cblxuICAgICAgLy8gSW4gYWxsIHRvdWNoIGV2ZW50cywgb25seSBoYW5kbGUgc2luZ2xlIHRvdWNoZXMuIFdlIGRvbid0IHdhbnQgdG9cbiAgICAgIC8vIGluYWR2ZXJ0ZW50bHkgZG8gd29yayB3aGVuIHRoZSB1c2VyJ3MgdHJ5aW5nIHRvIHBpbmNoLXpvb20gZm9yIGV4YW1wbGUuXG4gICAgICAvLyBUT0RPOiBFdmVuIGJldHRlciBhcHByb2FjaCB0aGFuIGJlbG93IHdvdWxkIGJlIHRvIGlnbm9yZSB0b3VjaGVzIGFmdGVyXG4gICAgICAvLyB0aGUgZmlyc3QgaWYgdGhlIHVzZXIgaGFzIGFscmVhZHkgYmVndW4gYSBzd2lwZS5cbiAgICAgIGlmICh3aW5kb3cuUG9pbnRlckV2ZW50KSB7XG4gICAgICAgIC8vIFByZWZlciBsaXN0ZW5pbmcgdG8gc3RhbmRhcmQgcG9pbnRlciBldmVudHMuXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCBldmVudCA9PiB7XG4gICAgICAgICAgaWYgKGlzRXZlbnRGb3JQZW5PclByaW1hcnlUb3VjaChldmVudCkpIHtcbiAgICAgICAgICAgIHRvdWNoU3RhcnQodGhpcywgZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVybW92ZScsIGV2ZW50ID0+IHtcbiAgICAgICAgICBpZiAoaXNFdmVudEZvclBlbk9yUHJpbWFyeVRvdWNoKGV2ZW50KSkge1xuICAgICAgICAgICAgbGV0IGhhbmRsZWQgPSB0b3VjaE1vdmUodGhpcywgZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XG4gICAgICAgICAgICBpZiAoaGFuZGxlZCkge1xuICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGlmIChpc0V2ZW50Rm9yUGVuT3JQcmltYXJ5VG91Y2goZXZlbnQpKSB7XG4gICAgICAgICAgICB0b3VjaEVuZCh0aGlzLCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUG9pbnRlciBldmVudHMgbm90IHN1cHBvcnRlZCAtLSBsaXN0ZW4gdG8gb2xkZXIgdG91Y2ggZXZlbnRzLlxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBldmVudCA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuX211bHRpVG91Y2gpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnRvdWNoZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBsZXQgY2xpZW50WCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgICAgICBsZXQgY2xpZW50WSA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFk7XG4gICAgICAgICAgICB0b3VjaFN0YXJ0KHRoaXMsIGNsaWVudFgsIGNsaWVudFkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9tdWx0aVRvdWNoID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGV2ZW50ID0+IHtcbiAgICAgICAgICBpZiAoIXRoaXMuX211bHRpVG91Y2ggJiYgZXZlbnQudG91Y2hlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIGxldCBjbGllbnRYID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgICAgIGxldCBjbGllbnRZID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WTtcbiAgICAgICAgICAgIGxldCBoYW5kbGVkID0gdG91Y2hNb3ZlKHRoaXMsIGNsaWVudFgsIGNsaWVudFkpO1xuICAgICAgICAgICAgaWYgKGhhbmRsZWQpIHtcbiAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGlmIChldmVudC50b3VjaGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgLy8gQWxsIHRvdWNoZXMgcmVtb3ZlZDsgZ2VzdHVyZSBpcyBjb21wbGV0ZS5cbiAgICAgICAgICAgIGlmICghdGhpcy5fbXVsdGlUb3VjaCkge1xuICAgICAgICAgICAgICAvLyBTaW5nbGUtdG91Y2ggc3dpcGUgaGFzIGZpbmlzaGVkLlxuICAgICAgICAgICAgICBsZXQgY2xpZW50WCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgICAgICAgIGxldCBjbGllbnRZID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WTtcbiAgICAgICAgICAgICAgdG91Y2hFbmQodGhpcywgY2xpZW50WCwgY2xpZW50WSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9tdWx0aVRvdWNoID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgbGVmdC5cbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuXG4gICAgICovXG4gICAgZ29MZWZ0KCkge1xuICAgICAgaWYgKHN1cGVyLmdvTGVmdCkgeyByZXR1cm4gc3VwZXIuZ29MZWZ0KCk7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgcmlnaHQuXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLlxuICAgICAqL1xuICAgIGdvUmlnaHQoKSB7XG4gICAgICBpZiAoc3VwZXIuZ29SaWdodCkgeyByZXR1cm4gc3VwZXIuZ29SaWdodCgpOyB9XG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCBpbXBsZW1lbnRhdGlvbi5cbiAgICBnZXQgc2hvd1RyYW5zaXRpb24oKSB7XG4gICAgICByZXR1cm4gc3VwZXIuc2hvd1RyYW5zaXRpb247XG4gICAgfVxuICAgIHNldCBzaG93VHJhbnNpdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKCdzaG93VHJhbnNpdGlvbicgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2hvd1RyYW5zaXRpb24gPSB2YWx1ZTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBkaXN0YW5jZSB0aGUgZmlyc3QgdG91Y2hwb2ludCBoYXMgdHJhdmVsZWQgc2luY2UgdGhlIGJlZ2lubmluZyBvZiBhXG4gICAgICogZHJhZywgZXhwcmVzc2VkIGFzIGEgZnJhY3Rpb24gb2YgdGhlIGVsZW1lbnQncyB3aWR0aC5cbiAgICAgKlxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqL1xuICAgIGdldCB0cmF2ZWxGcmFjdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl90cmF2ZWxGcmFjdGlvbjtcbiAgICB9XG4gICAgc2V0IHRyYXZlbEZyYWN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoJ3RyYXZlbEZyYWN0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci50cmF2ZWxGcmFjdGlvbiA9IHZhbHVlOyB9XG4gICAgICB0aGlzLl90cmF2ZWxGcmFjdGlvbiA9IHZhbHVlO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIFN3aXBlRGlyZWN0aW9uO1xufTtcblxuXG4vLyBSZXR1cm4gdHJ1ZSBpZiB0aGUgcG9pbnRlciBldmVudCBpcyBmb3IgdGhlIHBlbiwgb3IgdGhlIHByaW1hcnkgdG91Y2ggcG9pbnQuXG5mdW5jdGlvbiBpc0V2ZW50Rm9yUGVuT3JQcmltYXJ5VG91Y2goZXZlbnQpIHtcbiAgcmV0dXJuIGV2ZW50LnBvaW50ZXJUeXBlID09PSAncGVuJyB8fFxuICAgICAgKGV2ZW50LnBvaW50ZXJUeXBlID09PSAndG91Y2gnICYmIGV2ZW50LmlzUHJpbWFyeSk7XG59XG5cblxuZnVuY3Rpb24gdG91Y2hTdGFydChlbGVtZW50LCBjbGllbnRYLCBjbGllbnRZKSB7XG4gIGVsZW1lbnQuc2hvd1RyYW5zaXRpb24gPSBmYWxzZTtcbiAgZWxlbWVudC5fc3RhcnRYID0gY2xpZW50WDtcbiAgZWxlbWVudC5fcHJldmlvdXNYID0gY2xpZW50WDtcbiAgZWxlbWVudC5fcHJldmlvdXNZID0gY2xpZW50WTtcbiAgZWxlbWVudC5fZGVsdGFYID0gMDtcbiAgZWxlbWVudC5fZGVsdGFZID0gMDtcbn1cblxuZnVuY3Rpb24gdG91Y2hNb3ZlKGVsZW1lbnQsIGNsaWVudFgsIGNsaWVudFkpIHtcbiAgZWxlbWVudC5fZGVsdGFYID0gY2xpZW50WCAtIGVsZW1lbnQuX3ByZXZpb3VzWDtcbiAgZWxlbWVudC5fZGVsdGFZID0gY2xpZW50WSAtIGVsZW1lbnQuX3ByZXZpb3VzWTtcbiAgZWxlbWVudC5fcHJldmlvdXNYID0gY2xpZW50WDtcbiAgZWxlbWVudC5fcHJldmlvdXNZID0gY2xpZW50WTtcbiAgaWYgKE1hdGguYWJzKGVsZW1lbnQuX2RlbHRhWCkgPiBNYXRoLmFicyhlbGVtZW50Ll9kZWx0YVkpKSB7XG4gICAgLy8gTW92ZSB3YXMgbW9zdGx5IGhvcml6b250YWwuXG4gICAgdHJhY2tUbyhlbGVtZW50LCBjbGllbnRYKTtcbiAgICAvLyBJbmRpY2F0ZSB0aGF0IHRoZSBldmVudCB3YXMgaGFuZGxlZC4gSXQnZCBiZSBuaWNlciBpZiB3ZSBkaWRuJ3QgaGF2ZVxuICAgIC8vIHRvIGRvIHRoaXMgc28gdGhhdCwgZS5nLiwgYSB1c2VyIGNvdWxkIGJlIHN3aXBpbmcgbGVmdCBhbmQgcmlnaHRcbiAgICAvLyB3aGlsZSBzaW11bHRhbmVvdXNseSBzY3JvbGxpbmcgdXAgYW5kIGRvd24uIChOYXRpdmUgdG91Y2ggYXBwcyBjYW4gZG9cbiAgICAvLyB0aGF0LikgSG93ZXZlciwgTW9iaWxlIFNhZmFyaSB3YW50cyB0byBoYW5kbGUgc3dpcGUgZXZlbnRzIG5lYXIgdGhlXG4gICAgLy8gcGFnZSBhbmQgaW50ZXJwcmV0IHRoZW0gYXMgbmF2aWdhdGlvbnMuIFRvIGF2b2lkIGhhdmluZyBhIGhvcml6aW9udGFsXG4gICAgLy8gc3dpcGUgbWlzaW50ZXByZXRlZCBhcyBhIG5hdmlnYXRpb24sIHdlIGluZGljYXRlIHRoYXQgd2UndmUgaGFuZGxlZFxuICAgIC8vIHRoZSBldmVudCwgYW5kIHByZXZlbnQgZGVmYXVsdCBiZWhhdmlvci5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICAvLyBNb3ZlIHdhcyBtb3N0bHkgdmVydGljYWwuXG4gICAgcmV0dXJuIGZhbHNlOyAvLyBOb3QgaGFuZGxlZFxuICB9XG59XG5cbmZ1bmN0aW9uIHRvdWNoRW5kKGVsZW1lbnQsIGNsaWVudFgsIGNsaWVudFkpIHtcbiAgZWxlbWVudC5zaG93VHJhbnNpdGlvbiA9IHRydWU7XG4gIGlmIChlbGVtZW50Ll9kZWx0YVggPj0gMjApIHtcbiAgICAvLyBGaW5pc2hlZCBnb2luZyByaWdodCBhdCBoaWdoIHNwZWVkLlxuICAgIGVsZW1lbnQuZ29MZWZ0KCk7XG4gIH0gZWxzZSBpZiAoZWxlbWVudC5fZGVsdGFYIDw9IC0yMCkge1xuICAgIC8vIEZpbmlzaGVkIGdvaW5nIGxlZnQgYXQgaGlnaCBzcGVlZC5cbiAgICBlbGVtZW50LmdvUmlnaHQoKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBGaW5pc2hlZCBhdCBsb3cgc3BlZWQuXG4gICAgdHJhY2tUbyhlbGVtZW50LCBjbGllbnRYKTtcbiAgICBsZXQgdHJhdmVsRnJhY3Rpb24gPSBlbGVtZW50LnRyYXZlbEZyYWN0aW9uO1xuICAgIGlmICh0cmF2ZWxGcmFjdGlvbiA+PSAwLjUpIHtcbiAgICAgIGVsZW1lbnQuZ29SaWdodCgpO1xuICAgIH0gZWxzZSBpZiAodHJhdmVsRnJhY3Rpb24gPD0gLTAuNSkge1xuICAgICAgZWxlbWVudC5nb0xlZnQoKTtcbiAgICB9XG4gIH1cbiAgZWxlbWVudC50cmF2ZWxGcmFjdGlvbiA9IDA7XG4gIGVsZW1lbnQuX2RlbHRhWCA9IG51bGw7XG4gIGVsZW1lbnQuX2RlbHRhWSA9IG51bGw7XG59XG5cbmZ1bmN0aW9uIHRyYWNrVG8oZWxlbWVudCwgeCkge1xuICBsZXQgd2lkdGggPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xuICBsZXQgZHJhZ0Rpc3RhbmNlID0gZWxlbWVudC5fc3RhcnRYIC0geDtcbiAgbGV0IGZyYWN0aW9uID0gd2lkdGggPiAwID9cbiAgICBkcmFnRGlzdGFuY2UgLyB3aWR0aCA6XG4gICAgMDtcbiAgZWxlbWVudC50cmF2ZWxGcmFjdGlvbiA9IGZyYWN0aW9uO1xufVxuIiwiaW1wb3J0IENvbGxlY3RpdmUgZnJvbSAnLi9Db2xsZWN0aXZlJztcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFRhcmdldEluQ29sbGVjdGl2ZS4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIGFsbG93cyBhIGNvbXBvbmVudCB0byBwcm92aWRlIGFnZ3JlZ2F0ZSBiZWhhdmlvciB3aXRoIG90aGVyXG4gICAqIGVsZW1lbnRzLCBlLmcuLCBmb3Iga2V5Ym9hcmQgaGFuZGxpbmcuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gaW1wbGljaXRseSBjcmVhdGVzIGEgY29sbGVjdGl2ZSBmb3IgYSBjb21wb25lbnQgc28gdGhhdCBpdCBjYW5cbiAgICogcGFydGljaXBhdGUgaW4gY29sbGVjdGl2ZSBrZXlib2FyZCBoYW5kbGluZy4gU2VlIHRoZVxuICAgKiBbQ29sbGVjdGl2ZV0oQ29sbGVjdGl2ZS5tZCkgY2xhc3MgZm9yIGRldGFpbHMuXG4gICAqXG4gICAqIFlvdSBjYW4gdXNlIHRoaXMgbWl4aW4gaW4gY29uanVuY3Rpb24gd2l0aFxuICAgKiBbQ29udGVudEZpcnN0Q2hpbGRUYXJnZXRdKENvbnRlbnRGaXJzdENoaWxkVGFyZ2V0Lm1kKSB0byBhdXRvbWF0aWNhbGx5IGhhdmVcbiAgICogdGhlIGNvbXBvbmVudCdzIGNvbGxlY3RpdmUgZXh0ZW5kZWQgdG8gaXRzIGZpcnN0IGNoaWxkLlxuICAgKi9cbiAgY2xhc3MgVGFyZ2V0SW5Db2xsZWN0aXZlIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG4gICAgICB0aGlzLmNvbGxlY3RpdmUgPSBuZXcgQ29sbGVjdGl2ZSh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzL3NldHMgdGhlIGN1cnJlbnQgdGFyZ2V0IG9mIHRoZSBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBTZXQgdGhpcyB0byBwb2ludCB0byBhbm90aGVyIGVsZW1lbnQuIFRoYXQgdGFyZ2V0IGVsZW1lbnQgd2lsbCBiZVxuICAgICAqIGltcGxpY2l0bHkgYWRkZWQgdG8gdGhlIGNvbXBvbmVudCdzIGNvbGxlY3RpdmUuIFRoYXQgaXMsIHRoZSBjb21wb25lbnRcbiAgICAgKiBhbmQgaXRzIHRhcmdldCB3aWxsIHNoYXJlIHJlc3BvbnNpYmlsaXR5IGZvciBoYW5kbGluZyBrZXlib2FyZCBldmVudHMuXG4gICAgICpcbiAgICAgKiBZb3UgY2FuIHNldCB0aGlzIHByb3BlcnR5IHlvdXJzZWxmLCBvciB5b3UgY2FuIHVzZSB0aGVcbiAgICAgKiBDb250ZW50Rmlyc3RDaGlsZFRhcmdldCBtaXhpbiB0byBhdXRvbWF0aWNhbGx5IHNldCB0aGUgdGFyZ2V0IHRvIHRoZVxuICAgICAqIGNvbXBvbmVudCdzIGZpcnN0IGNoaWxkLlxuICAgICAqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIGdldCB0YXJnZXQoKSB7XG4gICAgICByZXR1cm4gc3VwZXIudGFyZ2V0O1xuICAgIH1cbiAgICBzZXQgdGFyZ2V0KGVsZW1lbnQpIHtcbiAgICAgIGlmICgndGFyZ2V0JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci50YXJnZXQgPSBlbGVtZW50OyB9XG4gICAgICB0aGlzLmNvbGxlY3RpdmUuYXNzaW1pbGF0ZShlbGVtZW50KTtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBUYXJnZXRJbkNvbGxlY3RpdmU7XG59O1xuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBUcmFja3BhZERpcmVjdGlvbi4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIG1hcHMgYSBob3Jpem9udGFsIHRyYWNrcGFkIHN3aXBlIGdlc3R1cmVzIChvciBob3Jpem9udGFsIG1vdXNlXG4gICAqIHdoZWVsIGFjdGlvbnMpIHRvIGRpcmVjdGlvbiBzZW1hbnRpY3MuXG4gICAqXG4gICAqIFlvdSBjYW4gdXNlIHRoaXMgbWl4aW4gd2l0aCBhIG1peGluIGxpa2VcbiAgICogW0RpcmVjdGlvblNlbGVjdGlvbl0oRGlyZWN0aW9uU2VsZWN0aW9uLm1kKSB0byBsZXQgdGhlIHVzZXIgY2hhbmdlIHRoZVxuICAgKiBzZWxlY3Rpb24gd2l0aCB0aGUgdHJhY2twYWQgb3IgbW91c2Ugd2hlZWwuXG4gICAqXG4gICAqIFRvIHJlc3BvbmQgdG8gdGhlIHRyYWNrcGFkLCB3ZSBjYW4gbGlzdGVuIHRvIHRoZSBET00ncyBcIndoZWVsXCIgZXZlbnRzLlxuICAgKiBUaGVzZSBldmVudHMgYXJlIGZpcmVkIGFzIHRoZSB1c2VyIGRyYWdzIHRoZWlyIGZpbmdlcnMgYWNyb3NzIGEgdHJhY2twYWQuXG4gICAqIFVuZm9ydHVuYXRlbHksIGJyb3dzZXJzIGFyZSBtaXNzaW5nIGEgY3JpdGljYWwgZXZlbnQg4oCUwqB0aGVyZSBpcyBubyBldmVudFxuICAgKiB3aGVuIHRoZSB1c2VyICpzdG9wcyogYSBnZXN0dXJlZCBvbiB0aGUgdHJhY2twYWQgb3IgbW91c2Ugd2hlZWwuXG4gICAqXG4gICAqIFRvIG1ha2UgdGhpbmdzIHdvcnNlLCB0aGUgbWFpbnN0cmVhbSBicm93c2VycyBjb250aW51ZSB0byBnZW5lcmF0ZSBmYWtlXG4gICAqIHdoZWVsIGV2ZW50cyBldmVuIGFmdGVyIHRoZSB1c2VyIGhhcyBzdG9wcGVkIGRyYWdnaW5nIHRoZWlyIGZpbmdlcnMuIFRoZXNlXG4gICAqIGZha2UgZXZlbnRzIHNpbXVsYXRlIHRoZSB1c2VyIGdyYWR1YWxseSBzbG93aW5nIGRvd24gdGhlIGRyYWcgdW50aWwgdGhleVxuICAgKiBjb21lIHRvIGEgc21vb3RoIHN0b3AuIEluIHNvbWUgY29udGV4dHMsIHRoZXNlIGZha2Ugd2hlZWwgZXZlbnRzIG1pZ2h0IGJlXG4gICAqIGhlbHBmdWwsIGJ1dCBpbiB0cnlpbmcgdG8gc3VwcGx5IHR5cGljYWwgdHJhY2twYWQgc3dpcGUgbmF2aWdhdGlvbiwgdGhlc2VcbiAgICogZmFrZSBldmVudHMgZ2V0IGluIHRoZSB3YXkuXG4gICAqXG4gICAqIFRoaXMgY29tcG9uZW50IHVzZXMgaGV1cmlzdGljcyB0byB3b3JrIGFyb3VuZCB0aGVzZSBwcm9ibGVtcywgYnV0IHRoZVxuICAgKiBjb21wbGV4IG5hdHVyZSBvZiB0aGUgcHJvYmxlbSBtYWtlIGl0IGV4dHJlbWVseSBkaWZmaWN1bHQgdG8gYWNoaWV2ZSB0aGVcbiAgICogc2FtZSBkZWdyZWUgb2YgdHJhY2twYWQgcmVzcG9uc2l2ZW5lc3MgcG9zc2libGUgd2l0aCBuYXRpdmUgYXBwbGljYXRpb25zLlxuICAgKi9cbiAgY2xhc3MgVHJhY2twYWREaXJlY3Rpb24gZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBldmVudCA9PiB7XG4gICAgICAgIGxldCBoYW5kbGVkID0gd2hlZWwodGhpcywgZXZlbnQpO1xuICAgICAgICBpZiAoaGFuZGxlZCkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmVzZXRXaGVlbFRyYWNraW5nKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSBsZWZ0LlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy5cbiAgICAgKi9cbiAgICBnb0xlZnQoKSB7XG4gICAgICBpZiAoc3VwZXIuZ29MZWZ0KSB7IHJldHVybiBzdXBlci5nb0xlZnQoKTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSByaWdodC5cbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuXG4gICAgICovXG4gICAgZ29SaWdodCgpIHtcbiAgICAgIGlmIChzdXBlci5nb1JpZ2h0KSB7IHJldHVybiBzdXBlci5nb1JpZ2h0KCk7IH1cbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IGltcGxlbWVudGF0aW9uLlxuICAgIGdldCBzaG93VHJhbnNpdGlvbigpIHtcbiAgICAgIHJldHVybiBzdXBlci5zaG93VHJhbnNpdGlvbjtcbiAgICB9XG4gICAgc2V0IHNob3dUcmFuc2l0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoJ3Nob3dUcmFuc2l0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zaG93VHJhbnNpdGlvbiA9IHZhbHVlOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGRpc3RhbmNlIHRoZSB1c2VyIGhhcyBtb3ZlZCB0aGUgZmlyc3QgdG91Y2hwb2ludCBzaW5jZSB0aGUgYmVnaW5uaW5nXG4gICAgICogb2YgYSB0cmFja3BhZC93aGVlbCBvcGVyYXRpb24sIGV4cHJlc3NlZCBhcyBhIGZyYWN0aW9uIG9mIHRoZSBlbGVtZW50J3NcbiAgICAgKiB3aWR0aC5cbiAgICAgKlxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqL1xuICAgIGdldCB0cmF2ZWxGcmFjdGlvbigpIHtcbiAgICAgIHJldHVybiBzdXBlci50cmF2ZWxGcmFjdGlvbjtcbiAgICB9XG4gICAgc2V0IHRyYXZlbEZyYWN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoJ3RyYXZlbEZyYWN0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci50cmF2ZWxGcmFjdGlvbiA9IHZhbHVlOyB9XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gVHJhY2twYWREaXJlY3Rpb247XG59O1xuXG5cbi8vIFRpbWUgd2Ugd2FpdCBmb2xsb3dpbmcgYSBuYXZpZ2F0aW9uIGJlZm9yZSBwYXlpbmcgYXR0ZW50aW9uIHRvIHdoZWVsXG4vLyBldmVudHMgYWdhaW4uXG5jb25zdCBQT1NUX05BVklHQVRFX1RJTUUgPSAyNTA7XG5cbi8vIFRpbWUgd2Ugd2FpdCBhZnRlciB0aGUgbGFzdCB3aGVlbCBldmVudCBiZWZvcmUgd2UgcmVzZXQgdGhpbmdzLlxuY29uc3QgV0hFRUxfVElNRSA9IDEwMDtcblxuXG4vLyBGb2xsb3dpbmcgYSBuYXZpZ2F0aW9uLCBwYXJ0aWFsbHkgcmVzZXQgb3VyIHdoZWVsIHRyYWNraW5nLlxuZnVuY3Rpb24gcG9zdE5hdmlnYXRlKGVsZW1lbnQpIHtcbiAgZWxlbWVudC50cmF2ZWxGcmFjdGlvbiA9IDA7XG4gIGVsZW1lbnQuX3doZWVsRGlzdGFuY2UgPSAwO1xuICBlbGVtZW50Ll9wb3N0TmF2aWdhdGVEZWxheUNvbXBsZXRlID0gdHJ1ZTtcbiAgZWxlbWVudC5fYWJzb3JiRGVjZWxlcmF0aW9uID0gdHJ1ZTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZWxlbWVudC5fcG9zdE5hdmlnYXRlRGVsYXlDb21wbGV0ZSA9IGZhbHNlO1xuICB9LCBQT1NUX05BVklHQVRFX1RJTUUpO1xufVxuXG4vLyBSZXNldCBhbGwgc3RhdGUgcmVsYXRlZCB0byB0aGUgdHJhY2tpbmcgb2YgdGhlIHdoZWVsLlxuZnVuY3Rpb24gcmVzZXRXaGVlbFRyYWNraW5nKGVsZW1lbnQpIHtcbiAgZWxlbWVudC50cmF2ZWxGcmFjdGlvbiA9IDA7XG4gIGVsZW1lbnQuX3doZWVsRGlzdGFuY2UgPSAwO1xuICBlbGVtZW50Ll9sYXN0RGVsdGFYID0gMDtcbiAgZWxlbWVudC5fYWJzb3JiRGVjZWxlcmF0aW9uID0gZmFsc2U7XG4gIGVsZW1lbnQuX3Bvc3ROYXZpZ2F0ZURlbGF5Q29tcGxldGUgPSBmYWxzZTtcbiAgaWYgKGVsZW1lbnQuX2xhc3RXaGVlbFRpbWVvdXQpIHtcbiAgICBjbGVhclRpbWVvdXQoZWxlbWVudC5fbGFzdFdoZWVsVGltZW91dCk7XG4gICAgZWxlbWVudC5fbGFzdFdoZWVsVGltZW91dCA9IG51bGw7XG4gIH1cbn1cblxuLy8gRGVmaW5lIG91ciBvd24gc2lnbiBmdW5jdGlvbiwgc2luY2UgKGFzIG9mIE1heSAyMDE1KSwgU2FmYXJpIGFuZCBJRSBkb24ndFxuLy8gc3VwcGx5IE1hdGguc2lnbigpLlxuZnVuY3Rpb24gc2lnbih4KSB7XG4gIHJldHVybiAoeCA9PT0gMCkgP1xuICAgIDAgOlxuICAgICh4ID4gMCkgP1xuICAgICAgMSA6XG4gICAgICAtMTtcbn1cblxuLy8gVE9ETzogRGFtcGluZywgb3Igc29tZSBvdGhlciB0cmVhdG1lbnQgZm9yIGdvaW5nIHBhc3QgdGhlIGVuZHMuXG5cbi8qXG4gKiBBIHdoZWVsIGV2ZW50IGhhcyBiZWVuIGdlbmVyYXRlZC4gVGhpcyBjb3VsZCBiZSBhIHJlYWwgd2hlZWwgZXZlbnQsIG9yIGl0XG4gKiBjb3VsZCBiZSBmYWtlIChzZWUgbm90ZXMgaW4gdGhlIGhlYWRlcikuXG4gKlxuICogVGhpcyBoYW5kbGVyIHVzZXMgc2V2ZXJhbCBzdHJhdGVnaWVzIHRvIHRyeSB0byBhcHByb3hpbWF0ZSBuYXRpdmUgdHJhY2twYWRcbiAqIHN3aXBlIG5hdmlnYXRpb24uXG4gKlxuICogSWYgdGhlIHVzZXIgaGFzIGRyYWdnZWQgZW5vdWdoIHRvIGNhdXNlIGEgbmF2aWdhdGlvbiwgdGhlbiBmb3IgYSBzaG9ydFxuICogZGVsYXkgZm9sbG93aW5nIHRoYXQgbmF2aWdhdGlvbiwgc3Vic2VxdWVudCB3aGVlbCBldmVudHMgd2lsbCBiZSBpZ25vcmVkLlxuICpcbiAqIEZ1cnRoZXJtb3JlLCBmb2xsd293aW5nIGEgbmF2aWdhdGlvbiwgd2UgaWdub3JlIGFsbCB3aGVlbCBldmVudHMgdW50aWwgd2VcbiAqIHJlY2VpdmUgYXQgbGVhc3Qgb25lIGV2ZW50IHdoZXJlIHRoZSBldmVudCdzIGRlbHRhWCAoZGlzdGFuY2UgdHJhdmVsZWQpIGlzXG4gKiAqZ3JlYXRlciogdGhhbiB0aGUgcHJldmlvdXMgZXZlbnQncyBkZWx0YVguIFRoaXMgaGVscHMgdXMgZmlsdGVyIG91dCB0aGVcbiAqIGZha2Ugd2hlZWwgZXZlbnRzIGdlbmVyYXRlZCBieSB0aGUgYnJvd3NlciB0byBzaW11bGF0ZSBkZWNlbGVyYXRpb24uXG4gKlxuICovXG5mdW5jdGlvbiB3aGVlbChlbGVtZW50LCBldmVudCkge1xuXG4gIC8vIFNpbmNlIHdlIGhhdmUgYSBuZXcgd2hlZWwgZXZlbnQsIHJlc2V0IG91ciB0aW1lciB3YWl0aW5nIGZvciB0aGUgbGFzdFxuICAvLyB3aGVlbCBldmVudCB0byBwYXNzLlxuICBpZiAoZWxlbWVudC5fbGFzdFdoZWVsVGltZW91dCkge1xuICAgIGNsZWFyVGltZW91dChlbGVtZW50Ll9sYXN0V2hlZWxUaW1lb3V0KTtcbiAgfVxuICBlbGVtZW50Ll9sYXN0V2hlZWxUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgd2hlZWxUaW1lZE91dChlbGVtZW50KTtcbiAgfSwgV0hFRUxfVElNRSk7XG5cbiAgbGV0IGRlbHRhWCA9IGV2ZW50LmRlbHRhWDtcbiAgbGV0IGRlbHRhWSA9IGV2ZW50LmRlbHRhWTtcblxuICAvLyBTZWUgaWYgZWxlbWVudCBldmVudCByZXByZXNlbnRzIGFjY2VsZXJhdGlvbiBvciBkZWNlbGVyYXRpb24uXG4gIGxldCBhY2NlbGVyYXRpb24gPSBzaWduKGRlbHRhWCkgKiAoZGVsdGFYIC0gZWxlbWVudC5fbGFzdERlbHRhWCk7XG4gIGVsZW1lbnQuX2xhc3REZWx0YVggPSBkZWx0YVg7XG4gIC8vIGNvbnNvbGUubG9nKGRlbHRhWCArIFwiIFwiICsgYWNjZWxlcmF0aW9uICsgXCIgXCIgKyBlbGVtZW50Ll9hYnNvcmJEZWNlbGVyYXRpb24gKyBcIiBcIiArIGVsZW1lbnQuX3Bvc3ROYXZpZ2F0ZURlbGF5Q29tcGxldGUpO1xuXG4gIGlmIChNYXRoLmFicyhkZWx0YVgpIDwgTWF0aC5hYnMoZGVsdGFZKSkge1xuICAgIC8vIE1vdmUgd2FzIG1vc3RseSB2ZXJ0aWNhbC4gVGhlIHVzZXIgbWF5IGJlIHRyeWluZyBzY3JvbGwgd2l0aCB0aGVcbiAgICAvLyB0cmFja3BhZC93aGVlbC4gVG8gYmUgb24gdGhlIHNhZmUsIHdlIGlnbm9yZSBzdWNoIGV2ZW50cy5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoZWxlbWVudC5fcG9zdE5hdmlnYXRlRGVsYXlDb21wbGV0ZSkge1xuICAgIC8vIEl0J3MgdG9vIHNvb24gYWZ0ZXIgYSBuYXZpZ2F0aW9uOyBpZ25vcmUgdGhlIGV2ZW50LlxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cblxuICBpZiAoYWNjZWxlcmF0aW9uID4gMCkge1xuICAgIC8vIFRoZSBldmVudHMgYXJlIG5vdCAob3IgYXJlIG5vIGxvbmdlcikgZGVjZWxlcmF0aW5nLCBzbyB3ZSBjYW4gc3RhcnRcbiAgICAvLyBwYXlpbmcgYXR0ZW50aW9uIHRvIHRoZW0gYWdhaW4uXG4gICAgZWxlbWVudC5fYWJzb3JiRGVjZWxlcmF0aW9uID0gZmFsc2U7XG4gIH0gZWxzZSBpZiAoZWxlbWVudC5fYWJzb3JiRGVjZWxlcmF0aW9uKSB7XG4gICAgLy8gVGhlIHdoZWVsIGV2ZW50IHdhcyBsaWtlbHkgZmFrZWQgdG8gc2ltdWxhdGUgZGVjZWxlcmF0aW9uOyBpZ25vcmUgaXQuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBlbGVtZW50Ll93aGVlbERpc3RhbmNlICs9IGRlbHRhWDtcblxuICAvLyBVcGRhdGUgdGhlIHRyYXZlbCBmcmFjdGlvbiBvZiB0aGUgZWxlbWVudCBiZWluZyBuYXZpZ2F0ZWQuXG4gIGxldCB3aWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gIGxldCB0cmF2ZWxGcmFjdGlvbiA9IHdpZHRoID4gMCA/XG4gICAgZWxlbWVudC5fd2hlZWxEaXN0YW5jZSAvIHdpZHRoIDpcbiAgICAwO1xuICBlbGVtZW50LnNob3dUcmFuc2l0aW9uID0gZmFsc2U7XG4gIHRyYXZlbEZyYWN0aW9uID0gc2lnbih0cmF2ZWxGcmFjdGlvbikgKiBNYXRoLm1pbihNYXRoLmFicyh0cmF2ZWxGcmFjdGlvbiksIDEpO1xuICBlbGVtZW50LnRyYXZlbEZyYWN0aW9uID0gdHJhdmVsRnJhY3Rpb247XG5cbiAgLy8gSWYgdGhlIHVzZXIgaGFzIGRyYWdnZWQgZW5vdWdoIHRvIHJlYWNoIHRoZSBwcmV2aW91cy9uZXh0IGl0ZW0sIHRoZW5cbiAgLy8gY29tcGxldGUgYSBuYXZpZ2F0aW9uIHRvIHRoYXQgaXRlbS5cbiAgaWYgKHRyYXZlbEZyYWN0aW9uID09PSAxKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJnb1JpZ2h0XCIpO1xuICAgIGVsZW1lbnQuc2hvd1RyYW5zaXRpb24gPSB0cnVlO1xuICAgIGVsZW1lbnQuZ29SaWdodCgpO1xuICAgIHBvc3ROYXZpZ2F0ZShlbGVtZW50KTtcbiAgfSBlbHNlIGlmICh0cmF2ZWxGcmFjdGlvbiA9PT0gLTEpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcImdvTGVmdFwiKTtcbiAgICBlbGVtZW50LnNob3dUcmFuc2l0aW9uID0gdHJ1ZTtcbiAgICBlbGVtZW50LmdvTGVmdCgpO1xuICAgIHBvc3ROYXZpZ2F0ZShlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG4vLyBBIHN1ZmZpY2llbnRseSBsb25nIHBlcmlvZCBvZiB0aW1lIGhhcyBwYXNzZWQgc2luY2UgdGhlIGxhc3Qgd2hlZWwgZXZlbnQuXG4vLyBXZSBzbmFwIHRoZSBzZWxlY3Rpb24gdG8gdGhlIGNsb3Nlc3QgaXRlbSwgdGhlbiByZXNldCBvdXIgc3RhdGUuXG5mdW5jdGlvbiB3aGVlbFRpbWVkT3V0KGVsZW1lbnQpIHtcbiAgLy8gY29uc29sZS5sb2coXCJ0aW1lb3V0XCIpO1xuXG4gIC8vIFNuYXAgdG8gdGhlIGNsb3Nlc3QgaXRlbS5cbiAgZWxlbWVudC5zaG93VHJhbnNpdGlvbiA9IHRydWU7XG4gIGxldCB0cmF2ZWxGcmFjdGlvbiA9IGVsZW1lbnQudHJhdmVsRnJhY3Rpb247XG4gIGlmICh0cmF2ZWxGcmFjdGlvbiA+PSAwLjUpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcInNuYXAgcmlnaHRcIik7XG4gICAgZWxlbWVudC5nb1JpZ2h0KCk7XG4gIH0gZWxzZSBpZiAodHJhdmVsRnJhY3Rpb24gPD0gLTAuNSkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwic25hcCBsZWZ0XCIpO1xuICAgIGVsZW1lbnQuZ29MZWZ0KCk7XG4gIH1cblxuICAvLyBUT0RPOiBMaXN0ZW4gZm9yIHRoZSB0cmFuc2l0aW9uIHRvIGNvbXBsZXRlLCBhbmQgdGhlbiByZXN0b3JlXG4gIC8vIHNob3dUcmFuc2l0aW9uIHRvIGZhbHNlIChvciB0aGUgcHJldmlvdXMgdmFsdWUpLlxuXG4gIHJlc2V0V2hlZWxUcmFja2luZyhlbGVtZW50KTtcbn1cbiIsIi8qXG4gKiBIZWxwZXIgZnVuY3Rpb25zIGZvciB3b3JraW5nIHdpdGggYSBzZWxlY3Rpb24gYXMgYSByZWFsIG51bWJlciB0aGF0IGNvbWJpbmVzXG4gKiBhbiBpbnRlZ2VyIGluZGV4IGludG8gYSBsaXN0LCBhbmQgYSBmcmFjdGlvbiBpbmRpY2F0aW5nIGhvdyBmYXIgb2YgdGhlIHdheSB3ZVxuICogYXJlIHRvIHRoZSBuZXh0IG9yIHByZXZpb3VzIGl0ZW0uXG4gKi9cblxuXG4vKipcbiAqIERhbXBlbiBhIHNlbGVjdGlvbiB0aGF0IGdvZXMgcGFzdCB0aGUgYmVnaW5uaW5nIG9yIGVuZCBvZiBhIGxpc3QuIFRoaXMgaXNcbiAqIGdlbmVyYWxseSB1c2VkIHRvIHByb2R1Y2UgYSB2aXN1YWwgZWZmZWN0IG9mIHRlbnNpb24gYXMgdGhlIHVzZXIgdHJpZXMgdG9cbiAqIGdvIGZ1cnRoZXIgaW4gYSBkaXJlY3Rpb24gdGhhdCBoYXMgbm8gbW9yZSBpdGVtcy5cbiAqXG4gKiBFeGFtcGxlOiBzdXBwb3NlIGBpdGVtQ291bnRgIGlzIDUsIGluZGljYXRpbmcgYSBsaXN0IG9mIDUgaXRlbXMuIFRoZSBpbmRleCBvZlxuICogdGhlIGxhc3QgaXRlbSBpcyA0LiBJZiB0aGUgYHNlbGVjdGlvbmAgcGFyYW1ldGVyIGlzIDQuNSwgdGhlIHVzZXIgaXMgdHJ5aW5nXG4gKiB0byBnbyBwYXN0IHRoaXMgbGFzdCBpdGVtLiBXaGVuIGEgZGFtcGluZyBmdW5jdGlvbiBpcyBhcHBsaWVkLCB0aGUgcmVzdWx0aW5nXG4gKiB2YWx1ZSB3aWxsIGJlIGxlc3MgdGhhbiA0LjUgKHRoZSBhY3R1YWwgdmFsdWUgd2lsbCBiZSA0LjI1KS4gV2hlbiB0aGlzXG4gKiBzZWxlY3Rpb24gc3RhdGUgaXMgcmVuZGVyZWQsIHRoZSB1c2VyIHdpbGwgc2VlIHRoYXQsIGVhY2ggdW5pdCBkaXN0YW5jZSB0aGVcbiAqIGRyYWcgdHJhdmVscyBoYXMgbGVzcyBhbmQgbGVzcyB2aXNpYmxlIGVmZmVjdC4gVGhpcyBpcyBwZXJjZWl2ZWQgYXMgdGVuc2lvbi5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gc2VsZWN0aW9uIC0gQSByZWFsIG51bWJlciBpbmRpY2F0aW5nIGEgc2VsZWN0aW9uIHBvc2l0aW9uXG4gKiBAcGFyYW0ge251bWJlcn0gaXRlbUNvdW50IC0gQW4gaW50ZWdlciBmb3IgdGhlIG51bWJlciBvZiBpdGVtcyBpbiB0aGUgbGlzdFxuICogQHJldHVybnMge251bWJlcn0gQSByZWFsIG51bWJlciByZXByZXNlbnRpbmcgdGhlIGRhbXBlZCBzZWxlY3Rpb24gdmFsdWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkYW1wZWRTZWxlY3Rpb24oc2VsZWN0aW9uLCBpdGVtQ291bnQpIHtcbiAgbGV0IGRhbXBlZDtcbiAgbGV0IGJvdW5kID0gaXRlbUNvdW50IC0gMTtcbiAgaWYgKHNlbGVjdGlvbiA8IDApIHtcbiAgICAvLyBUcnlpbmcgdG8gZ28gcGFzdCBiZWdpbm5pbmcgb2YgbGlzdC4gQXBwbHkgdGVuc2lvbiBmcm9tIHRoZSBsZWZ0IGVkZ2UuXG4gICAgZGFtcGVkID0gLWRhbXBpbmcoLXNlbGVjdGlvbik7XG4gIH0gZWxzZSBpZiAoc2VsZWN0aW9uID49IGJvdW5kKSB7XG4gICAgLy8gVHJ5aW5nIHRvIGdvIHBhc3QgZW5kIG9mIGxpc3QuIEFwcGx5IHRlbnNpb24gZnJvbSB0aGUgcmlnaHQgZWRnZS5cbiAgICBkYW1wZWQgPSBib3VuZCArIGRhbXBpbmcoc2VsZWN0aW9uIC0gYm91bmQpO1xuICB9IGVsc2Uge1xuICAgIC8vIE5vIGRhbXBpbmcgcmVxdWlyZWQuXG4gICAgZGFtcGVkID0gc2VsZWN0aW9uO1xuICB9XG4gIHJldHVybiBkYW1wZWQ7XG59XG5cblxuLyoqXG4gKiBSZXR1cm4gdGhlIGN1cnJlbnQgZnJhY3Rpb25hbCBzZWxlY3Rpb24gdmFsdWUgZm9yIHRoZSBnaXZlbiBlbGVtZW50LlxuICpcbiAqIFRoaXMgc2ltcGx5IGFkZHMgdGhlIGVsZW1lbnQncyBgc2VsZWN0ZWRJbmRleGAgYW5kIGBzZWxlY3RlZEZyYWN0aW9uYFxuICogcHJvcGVydGllcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVsZW1lbnRTZWxlY3Rpb24oZWxlbWVudCkge1xuICBsZXQgc2VsZWN0ZWRJbmRleCA9IGVsZW1lbnQuc2VsZWN0ZWRJbmRleDtcbiAgaWYgKHNlbGVjdGVkSW5kZXggPCAwKSB7XG4gICAgLy8gTm8gc2VsZWN0aW9uXG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCBzZWxlY3RlZEZyYWN0aW9uID0gZWxlbWVudC5zZWxlY3RlZEZyYWN0aW9uIHx8IDA7XG4gIHJldHVybiBzZWxlY3RlZEluZGV4ICsgc2VsZWN0ZWRGcmFjdGlvbjtcbn1cblxuXG4vKipcbiAqIEJyZWFrcyBhIGZyYWN0aW9uYWwgc2VsZWN0aW9uIGludG8gaXRzIGludGVnZXIgYW5kIGZyYWN0aW9uYWwgcGFydHMuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHNlbGVjdGlvbiDigJPCoEEgcmVhbCBudW1iZXIgcmVwcmVzZW50aW5nIGEgc2VsZWN0aW9uIHBvaW50XG4gKiBAcmV0dXJucyB7b2JqZWN0fSAtIEFuIG9iamVjdCB3aXRoIGFuIGBpbmRleGAgcHJvcGVydHkgaG9sZGluZyB0aGVcbiAqIHNlbGVjdGlvbidzIGludGVnZXIgY29tcG9uZW50LCBhbmQgYSBgZnJhY3Rpb25gIHByb3BlcnR5IGhvbGRpbmcgdGhlXG4gKiBzZWxlY3Rpb24ncyBmcmFjdGlvbmFsIGNvbXBvbmVudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdGlvblBhcnRzKHNlbGVjdGlvbikge1xuICAvLyBTdHVwaWQgSUUgZG9lc24ndCBoYXZlIE1hdGgudHJ1bmMuXG4gIC8vIGxldCBpbmRleCA9IE1hdGgudHJ1bmMoc2VsZWN0aW9uKTtcbiAgbGV0IGluZGV4ID0gc2VsZWN0aW9uIDwgMCA/IE1hdGguY2VpbChzZWxlY3Rpb24pIDogTWF0aC5mbG9vcihzZWxlY3Rpb24pO1xuICBsZXQgZnJhY3Rpb24gPSBzZWxlY3Rpb24gLSBpbmRleDtcbiAgcmV0dXJuIHsgaW5kZXgsIGZyYWN0aW9uIH07XG59XG5cblxuLyoqXG4gKiBSZXR1cm5zIGEgZnJhY3Rpb25hbCBzZWxlY3Rpb24gcG9pbnQgYWZ0ZXIgYWNjb3VudGluZyBmb3Igd3JhcHBpbmcsIGVuc3VyaW5nXG4gKiB0aGF0IHRoZSBpbnRlZ2VyIHBvcnRpb24gb2YgdGhlIHNlbGVjdGlvbiBzdGF5cyBiZXR3ZWVuIDAgYW5kIGBpdGVtQ291bnRgLTEuXG4gKiBUaGF0IGlzLCB0aGUgaW50ZWdlciBwb3J0aW9uIHdpbGwgYWx3YXlzIGJlIGEgdmFsaWQgaW5kZXggaW50byB0aGUgbGlzdC5cbiAqXG4gKiBFeGFtcGxlIG9mIHdyYXBwaW5nIHBhc3QgdGhlIGVuZCBvZiB0aGUgbGlzdDogaWYgYHNlbGVjdGlvbmAgaXMgNS41IGFuZFxuICogYGl0ZW1Db3VudGAgaXMgNSwgdGhpcyByZXR1cm5zIDAuNS4gRXhhbXBsZSBvZiB3cmFwcGluZyBwYXN0IHRoZSBiZWdpbm5pbmcgb2ZcbiAqIHRoZSBsaXN0OiBpZiBgc2VsZWN0aW9uYCBpcyAwLjUgYW5kIGBpdGVtQ291bnRgIGlzIDUsIHRoaXMgcmV0dXJucyA0LjUuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHNlbGVjdGlvbiAtIEEgcmVhbCBudW1iZXIgcmVwcmVzZW50aW5nIGEgc2VsZWN0aW9uIHBvaW50XG4gKiBAcGFyYW0ge251bWJlcn0gaXRlbUNvdW50IC0gVGhlIG51bWJlciBvZiBpdGVtcyBpbiB0aGUgbGlzdFxuICogQHJldHVybnMge251bWJlcn0gLSBUaGUgcmVzdWx0IG9mIHdyYXBwaW5nIHRoZSBzZWxlY3Rpb24gcG9pbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdyYXBwZWRTZWxlY3Rpb24oc2VsZWN0aW9uLCBpdGVtQ291bnQpIHtcbiAgLy8gSGFuZGxlcyBwb3NzaWJpbGl0eSBvZiBuZWdhdGl2ZSBtb2QuXG4gIC8vIFNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xODYxODI1MC83NjQ3MlxuICByZXR1cm4gKChzZWxlY3Rpb24gJSBpdGVtQ291bnQpICsgaXRlbUNvdW50KSAlIGl0ZW1Db3VudDtcbn1cblxuXG4vKipcbiAqIFJldHVybiB0aGUgcGFydHMgb2YgYSBzZWxlY3Rpb24sIGZpcnN0IHdyYXBwaW5nIGlmIG5lY2Vzc2FyeS5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gc2VsZWN0aW9uIOKAkyBBIHJlYWwgbnVtYmVyIHJlcHJlc2VudGluZyBhIHNlbGVjdGlvbiBwb2ludFxuICogQHBhcmFtIHtudW1iZXJ9IGl0ZW1Db3VudCAtIFRoZSBudW1iZXIgb2YgaXRlbXMgaW4gdGhlIGxpc3RcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gd3JhcCDigJMgVHJ1ZSBpZiB0aGUgc2VsZWN0aW9uIHNob3VsZCB3cmFwIHRvIHN0YXkgd2l0aGluIHRoZVxuICogbGlzdFxuICogQHJldHVybnMge29iamVjdH0g4oCTIFRoZSBwYXJ0cyBvZiB0aGUgc2VsZWN0aW9uLCB1c2luZyB0aGUgc2FtZSBmb3JtYXQgYXNcbiAqIGBzZWxlY3Rpb25QYXJ0c2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3cmFwcGVkU2VsZWN0aW9uUGFydHMoc2VsZWN0aW9uLCBpdGVtQ291bnQsIHdyYXApIHtcbiAgaWYgKHdyYXApIHtcbiAgICBzZWxlY3Rpb24gPSB3cmFwcGVkU2VsZWN0aW9uKHNlbGVjdGlvbiwgaXRlbUNvdW50KTtcbiAgfVxuICByZXR1cm4gc2VsZWN0aW9uUGFydHMoc2VsZWN0aW9uKTtcbn1cblxuXG4vKlxuICogQ2FsY3VsYXRlIGRhbXBpbmcgYXMgYSBmdW5jdGlvbiBvZiB0aGUgZGlzdGFuY2UgcGFzdCB0aGUgbWluaW11bS9tYXhpbXVtXG4gKiB2YWx1ZXMuXG4gKlxuICogV2Ugd2FudCB0byBhc3ltcHRvdGljYWxseSBhcHByb2FjaCBhbiBhYnNvbHV0ZSBtaW5pbXVtIG9mIDEgdW5pdFxuICogYmVsb3cvYWJvdmUgdGhlIGFjdHVhbCBtaW5pbXVtL21heGltdW0uIFRoaXMgcmVxdWlyZXMgY2FsY3VsYXRpbmcgYVxuICogaHlwZXJib2xpYyBmdW5jdGlvbi5cbiAqXG4gKiBTZWUgaHR0cDovL3d3dy53b2xmcmFtYWxwaGEuY29tL2lucHV0Lz9pPXkrJTNEKy0xJTJGJTI4eCUyQjElMjkrJTJCKzFcbiAqIGZvciB0aGUgb25lIHdlIHVzZS4gVGhlIG9ubHkgcG9ydGlvbiBvZiB0aGF0IGZ1bmN0aW9uIHdlIGNhcmUgYWJvdXQgaXMgd2hlblxuICogeCBpcyB6ZXJvIG9yIGdyZWF0ZXIuIEFuIGltcG9ydGFudCBjb25zaWRlcmF0aW9uIGlzIHRoYXQgdGhlIGN1cnZlIGJlXG4gKiB0YW5nZW50IHRvIHRoZSBkaWFnb25hbCBsaW5lIHg9eSBhdCAoMCwgMCkuIFRoaXMgZW5zdXJlcyBzbW9vdGggY29udGludWl0eVxuICogd2l0aCB0aGUgbm9ybWFsIGRyYWcgYmVoYXZpb3IsIGluIHdoaWNoIHRoZSB2aXNpYmxlIHNsaWRpbmcgaXMgbGluZWFyIHdpdGhcbiAqIHRoZSBkaXN0YW5jZSB0aGUgdG91Y2hwb2ludCBoYXMgYmVlbiBkcmFnZ2VkLlxuICovXG5mdW5jdGlvbiBkYW1waW5nKHgpIHtcbiAgbGV0IHkgPSAoLTEgLyAoeCArIDEpKSArIDE7XG4gIHJldHVybiB5O1xufVxuIiwiLypcbiAqIE1pY3JvdGFzayBoZWxwZXIgZm9yIElFIDExLlxuICpcbiAqIEV4ZWN1dGluZyBhIGZ1bmN0aW9uIGFzIGEgbWljcm90YXNrIGlzIHRyaXZpYWwgaW4gYnJvd3NlcnMgdGhhdCBzdXBwb3J0XG4gKiBwcm9taXNlcywgd2hvc2UgdGhlbigpIGNsYXVzZXMgdXNlIG1pY3JvdGFzayB0aW1pbmcuIElFIDExIGRvZXNuJ3Qgc3VwcG9ydFxuICogcHJvbWlzZXMsIGJ1dCBkb2VzIHN1cHBvcnQgTXV0YXRpb25PYnNlcnZlcnMsIHdoaWNoIGFyZSBhbHNvIGV4ZWN1dGVkIGFzXG4gKiBtaWNyb3Rhc2tzLiBTbyB0aGlzIGhlbHBlciB1c2VzIGFuIE11dGF0aW9uT2JzZXJ2ZXIgdG8gYWNoaWV2ZSBtaWNyb3Rhc2tcbiAqIHRpbWluZy5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9qYWtlYXJjaGliYWxkLmNvbS8yMDE1L3Rhc2tzLW1pY3JvdGFza3MtcXVldWVzLWFuZC1zY2hlZHVsZXMvXG4gKlxuICogSW5zcGlyZWQgYnkgUG9seW1lcidzIGFzeW5jKCkgZnVuY3Rpb24uXG4gKi9cblxuXG4vLyBUaGUgcXVldWUgb2YgcGVuZGluZyBjYWxsYmFja3MgdG8gYmUgZXhlY3V0ZWQgYXMgbWljcm90YXNrcy5cbmxldCBjYWxsYmFja3MgPSBbXTtcblxuLy8gQ3JlYXRlIGFuIGVsZW1lbnQgdGhhdCB3ZSB3aWxsIG1vZGlmeSB0byBmb3JjZSBvYnNlcnZhYmxlIG11dGF0aW9ucy5cbmxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuXG4vLyBBIG1vbm90b25pY2FsbHktaW5jcmVhc2luZyB2YWx1ZS5cbmxldCBjb3VudGVyID0gMDtcblxuXG4vKipcbiAqIEFkZCBhIGNhbGxiYWNrIHRvIHRoZSBtaWNyb3Rhc2sgcXVldWUuXG4gKlxuICogVGhpcyB1c2VzIGEgTXV0YXRpb25PYnNlcnZlciBzbyB0aGF0IGl0IHdvcmtzIG9uIElFIDExLlxuICpcbiAqIE5PVEU6IElFIDExIG1heSBhY3R1YWxseSB1c2UgdGltZW91dCB0aW1pbmcgd2l0aCBNdXRhdGlvbk9ic2VydmVycy4gVGhpc1xuICogbmVlZHMgbW9yZSBpbnZlc3RpZ2F0aW9uLlxuICpcbiAqIEBmdW5jdGlvbiBtaWNyb3Rhc2tcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pY3JvdGFzayhjYWxsYmFjaykge1xuICBjYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gIC8vIEZvcmNlIGEgbXV0YXRpb24uXG4gIGVsZW1lbnQudGV4dENvbnRlbnQgPSArK2NvdW50ZXI7XG59XG5cblxuLy8gRXhlY3V0ZSBhbnkgcGVuZGluZyBjYWxsYmFja3MuXG5mdW5jdGlvbiBleGVjdXRlQ2FsbGJhY2tzKCkge1xuICB3aGlsZSAoY2FsbGJhY2tzLmxlbmd0aCA+IDApIHtcbiAgICBsZXQgY2FsbGJhY2sgPSBjYWxsYmFja3Muc2hpZnQoKTtcbiAgICBjYWxsYmFjaygpO1xuICB9XG59XG5cblxuLy8gQ3JlYXRlIHRoZSBvYnNlcnZlci5cbmxldCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGV4ZWN1dGVDYWxsYmFja3MpO1xub2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50LCB7XG4gIGNoYXJhY3RlckRhdGE6IHRydWVcbn0pO1xuIiwiLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gZm9yIHN0YW5kYXJkIGNsYXNzTGlzdC50b2dnbGUoKSBiZWhhdmlvciBvbiBvbGQgYnJvd3NlcnMsXG4gKiBuYW1lbHkgSUUgMTEuXG4gKlxuICogVGhlIHN0YW5kYXJkXG4gKiBbY2xhc3NsaXN0XShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRWxlbWVudC9jbGFzc0xpc3QpXG4gKiBvYmplY3QgaGFzIGEgYHRvZ2dsZSgpYCBmdW5jdGlvbiB0aGF0IHN1cHBvcnRzIGEgc2Vjb25kIEJvb2xlYW4gcGFyYW1ldGVyXG4gKiB0aGF0IGNhbiBiZSB1c2VkIHRvIHN1Y2NpbmN0bHkgdHVybiBhIGNsYXNzIG9uIG9yIG9mZi4gVGhpcyBmZWF0dXJlIGlzIG9mdGVuXG4gKiB1c2VmdWwgaW4gZGVzaWduaW5nIGN1c3RvbSBlbGVtZW50cywgd2hpY2ggbWF5IHdhbnQgdG8gZXh0ZXJuYWxseSByZWZsZWN0XG4gKiBjb21wb25lbnQgc3RhdGUgaW4gYSBDU1MgY2xhc3MgdGhhdCBjYW4gYmUgdXNlZCBmb3Igc3R5bGluZyBwdXJwb3Nlcy5cbiAqXG4gKiBVbmZvcnR1bmF0ZWx5LCBJRSAxMSBkb2VzIG5vdCBzdXBwb3J0IHRoZSBCb29sZWFuIHBhcmFtZXRlciB0b1xuICogYGNsYXNzTGlzdC50b2dnbGUoKWAuIFRoaXMgaGVscGVyIGZ1bmN0aW9uIGJlaGF2ZXMgbGlrZSB0aGUgc3RhbmRhcmRcbiAqIGB0b2dnbGUoKWAsIGluY2x1ZGluZyBzdXBwb3J0IGZvciB0aGUgQm9vbGVhbiBwYXJhbWV0ZXIsIHNvIHRoYXQgaXQgY2FuIGJlXG4gKiB1c2VkIGV2ZW4gb24gSUUgMTEuXG4gKlxuICogQGZ1bmN0aW9uIHRvZ2dsZUNsYXNzXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gVGhlIGVsZW1lbnQgdG8gbW9kaWZ5XG4gKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIC0gVGhlIGNsYXNzIHRvIGFkZC9yZW1vdmVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZvcmNlXSAtIEZvcmNlIHRoZSBjbGFzcyB0byBiZSBhZGRlZCAoaWYgdHJ1ZSkgb3IgcmVtb3ZlZFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgKGlmIGZhbHNlKVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b2dnbGVDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUsIGZvcmNlKSB7XG4gIGxldCBjbGFzc0xpc3QgPSBlbGVtZW50LmNsYXNzTGlzdDtcbiAgbGV0IGFkZENsYXNzID0gKHR5cGVvZiBmb3JjZSA9PT0gJ3VuZGVmaW5lZCcpID9cbiAgICAhY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkgOlxuICAgIGZvcmNlO1xuICBpZiAoYWRkQ2xhc3MpIHtcbiAgICBjbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICB9XG4gIHJldHVybiBhZGRDbGFzcztcbn1cbiIsImltcG9ydCBDb21wb3NhYmxlIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NvbXBvc2FibGUnO1xuaW1wb3J0IFNoYWRvd1RlbXBsYXRlIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NoYWRvd1RlbXBsYXRlJztcbmltcG9ydCBTaGFkb3dFbGVtZW50UmVmZXJlbmNlcyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TaGFkb3dFbGVtZW50UmVmZXJlbmNlcyc7XG5pbXBvcnQgQXR0cmlidXRlTWFyc2hhbGxpbmcgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQXR0cmlidXRlTWFyc2hhbGxpbmcnO1xuaW1wb3J0IERpc3RyaWJ1dGVkQ2hpbGRyZW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlzdHJpYnV0ZWRDaGlsZHJlbic7XG5cblxuLyoqXG4gKiBBIHNhbXBsZSBnZW5lcmFsLXB1cnBvc2UgYmFzZSBjbGFzcyBmb3IgZGVmaW5pbmcgY3VzdG9tIGVsZW1lbnRzIHRoYXQgbWl4ZXNcbiAqIGluIHNvbWUgY29tbW9uIGZlYXR1cmVzOiB0ZW1wbGF0ZSBzdGFtcGluZyBpbnRvIGEgc2hhZG93IHJvb3QsIHNoYWRvdyBlbGVtZW50XG4gKiByZWZlcmVuY2VzLCBtYXJzaGFsbGluZyBhdHRyaWJ1dGVzIHRvIHByb3BlcnRpZXMsIGFuZCByZXRyaWV2aW5nIHRoZSBjaGlsZHJlblxuICogZGlzdHJpYnV0ZWQgdG8gYSBjb21wb25lbnQuXG4gKlxuICogVGhpcyBiYXNlIGNsYXNzIGlzIG5vdCBzcGVjaWFsIGluIGFueSB3YXksIGFuZCBpcyBkZWZpbmVkIG9ubHkgYXMgYVxuICogY29udmVuaWVudCBzaG9ydGhhbmQgZm9yIGFwcGx5aW5nIHRoZSBtaXhpbnMgbGlzdGVkIGFib3ZlLiBZb3UgY2FuIHVzZSB0aGlzXG4gKiBjbGFzcyBhcyBhIGJhc2UgY2xhc3MgZm9yIHlvdXIgb3duIGVsZW1lbnRzLCBvciBlYXNpbHkgY3JlYXRlIHlvdXIgb3duIGJhc2VcbiAqIGNsYXNzIGJ5IGFwcGx5aW5nIHRoZSBzYW1lIHNldCBvZiBtaXhpbnMuXG4gKlxuICogVGhlIEVsZW1lbnRCYXNlIGJhc2UgY2xhc3MgZG9lcyBub3QgcmVnaXN0ZXIgaXRzZWxmIGFzIGEgY3VzdG9tIGVsZW1lbnQgd2l0aFxuICogdGhlIGJyb3dzZXIsIGFuZCBoZW5jZSBjYW5ub3QgYmUgaW5kZXBlbmRlbnRseSBpbnN0YW50aWF0ZWQuXG4gKlxuICogQG1peGVzIEF0dHJpYnV0ZU1hcnNoYWxsaW5nIFxuICogQG1peGVzIENvbXBvc2FibGVcbiAqIEBtaXhlcyBEaXN0cmlidXRlZENoaWxkcmVuXG4gKiBAbWl4ZXMgU2hhZG93RWxlbWVudFJlZmVyZW5jZXNcbiAqIEBtaXhlcyBTaGFkb3dUZW1wbGF0ZVxuICovXG5jbGFzcyBFbGVtZW50QmFzZSBleHRlbmRzIENvbXBvc2FibGUoSFRNTEVsZW1lbnQpLmNvbXBvc2UoXG4gIFNoYWRvd1RlbXBsYXRlLCAgICAgICAgICAvLyBiZWZvcmUgbm9kZSBmaW5kaW5nLCBzbyBzaGFkb3cgcm9vdCBpcyBwb3B1bGF0ZWRcbiAgU2hhZG93RWxlbWVudFJlZmVyZW5jZXMsIC8vIGJlZm9yZSBtYXJzaGFsbGluZywgc28gcHJvcGVydGllcyBjYW4gdXNlIHJlZnNcbiAgQXR0cmlidXRlTWFyc2hhbGxpbmcsXG4gIERpc3RyaWJ1dGVkQ2hpbGRyZW5cbikge1xuXG4gIC8qXG4gICAqIERlYnVnZ2luZyB1dGlsaXR5OiBsb2dzIGEgbWVzc2FnZSwgcHJlZml4ZWQgYnkgdGhlIGNvbXBvbmVudCdzIHRhZy5cbiAgICovXG4gIGxvZyh0ZXh0KSB7XG4gICAgaWYgKHN1cGVyLmxvZykgeyBzdXBlci5sb2codGV4dCk7IH1cbiAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmxvY2FsTmFtZX06ICR7dGV4dH1gKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVsZW1lbnRCYXNlO1xuIiwiaW1wb3J0IEVsZW1lbnRCYXNlIGZyb20gJy4uLy4uL2Jhc2ljLWVsZW1lbnQtYmFzZS9zcmMvRWxlbWVudEJhc2UnO1xuaW1wb3J0IFNwcmVhZEl0ZW1zIGZyb20gJy4uLy4uL2Jhc2ljLXNwcmVhZC1pdGVtcy9zcmMvU3ByZWFkSXRlbXMnOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcbmltcG9ydCB0b2dnbGVDbGFzcyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy90b2dnbGVDbGFzcyc7XG5pbXBvcnQgKiBhcyBmcmFjdGlvbmFsU2VsZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL2ZyYWN0aW9uYWxTZWxlY3Rpb24nO1xuXG5cbmxldCBiYXNlID0gRWxlbWVudEJhc2U7XG5cbi8qKlxuICogUHJlc2VudHMgbGlzdCBpdGVtcyBpbiBhIHZpZXdwb3J0IHN1Y2ggdGhhdCBvbmx5IGEgc2luZ2xlIGl0ZW0gaXMgdmlzaWJsZSBhdFxuICogYSB0aW1lLlxuICpcbiAqIE5hdmlnYXRpbmcgYmV0d2VlbiBpdGVtcyB3aWxsIGJlIHJlcHJlc2VudGVkIHdpdGggYSBob3Jpem9udGFsIHZpc3VhbFxuICogc2xpZGluZyBlZmZlY3QuXG4gKlxuICogVGhpcyBjb21wb25lbnQgaGFuZGxlcyB0aGUgcmVuZGVyaW5nIHJlc3BvbnNpYmlsaXRpZXMgZm9yIHRoZSBiYXNpYy1jYXJvdXNlbFxuICogY29tcG9uZW50LlxuICpcbiAqIFRoaXMgY29tcG9uZW50IGN1cnJlbnRseSByZXF1aXJlcyB0aGF0IHlvdSBleHBsaWNpdGx5IGFwcGx5IGEgc2l6ZSB0byBpdC5cbiAqXG4gKiBAZXh0ZW5kcyBFbGVtZW50QmFzZVxuICovXG5jbGFzcyBTbGlkaW5nVmlld3BvcnQgZXh0ZW5kcyBiYXNlIHtcblxuICBhdHRhY2hlZENhbGxiYWNrKCkge1xuICAgIGlmIChzdXBlci5hdHRhY2hlZENhbGxiYWNrKSB7IHN1cGVyLmF0dGFjaGVkQ2FsbGJhY2soKTsgfVxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuICAgIHRoaXMuc2VsZWN0ZWRGcmFjdGlvbiA9IDA7XG4gICAgdGhpcy5zaG93VHJhbnNpdGlvbiA9IHRydWU7XG4gIH1cblxuICBnZXQgY29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy4kLnNsaWRpbmdDb250YWluZXIuY29udGVudDtcbiAgfVxuXG4gIGdldCBpdGVtcygpIHtcbiAgICByZXR1cm4gdGhpcy4kLnNsaWRpbmdDb250YWluZXIuaXRlbXM7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHN1cGVyLnJlbmRlcikgeyBzdXBlci5yZW5kZXIoKTsgfVxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXJTZWxlY3Rpb24uYmluZCh0aGlzKSk7XG4gIH1cblxuICAvKipcbiAgICogQSBmcmFjdGlvbmFsIHZhbHVlIGluZGljYXRpbmcgaG93IGZhciB0aGUgdXNlciBoYXMgY3VycmVudGx5IGFkdmFuY2VkIHRvXG4gICAqIHRoZSBuZXh0L3ByZXZpb3VzIGl0ZW0uIEUuZy4sIGEgYHNlbGVjdGVkRnJhY3Rpb25gIG9mIDMuNSBpbmRpY2F0ZXMgdGhlXG4gICAqIHVzZXIgaXMgaGFsZndheSBiZXR3ZWVuIGl0ZW1zIDMgYW5kIDQuXG4gICAqXG4gICAqIEZvciBtb3JlIGRldGFpbHMsIHNlZSB0aGUgW2ZyYWN0aW9uYWxTZWxlY3Rpb25dKGZyYWN0aW9uYWxTZWxlY3Rpb24ubWQpXG4gICAqIGhlbHBlciBmdW5jdGlvbnMuXG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgc2VsZWN0ZWRGcmFjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRGcmFjdGlvbjtcbiAgfVxuICBzZXQgc2VsZWN0ZWRGcmFjdGlvbih2YWx1ZSkge1xuICAgIGlmICgnc2VsZWN0ZWRGcmFjdGlvbicgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRGcmFjdGlvbiA9IHZhbHVlOyB9XG4gICAgdGhpcy5fc2VsZWN0ZWRGcmFjdGlvbiA9IHZhbHVlO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBnZXQgc2VsZWN0ZWRJbmRleCgpIHtcbiAgICBsZXQgaXRlbXMgPSB0aGlzLml0ZW1zO1xuICAgIGxldCBzZWxlY3RlZEl0ZW0gPSB0aGlzLnNlbGVjdGVkSXRlbTtcbiAgICByZXR1cm4gaXRlbXMgJiYgc2VsZWN0ZWRJdGVtID9cbiAgICAgIGl0ZW1zLmluZGV4T2Yoc2VsZWN0ZWRJdGVtKSA6XG4gICAgICAtMTtcbiAgfVxuICBzZXQgc2VsZWN0ZWRJbmRleChpbmRleCkge1xuICAgIGlmICgnc2VsZWN0ZWRJbmRleCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJbmRleCA9IGluZGV4OyB9XG4gICAgbGV0IGl0ZW0gPSB0aGlzLml0ZW1zICYmIHRoaXMuaXRlbXNbaW5kZXhdO1xuICAgIGlmIChpdGVtKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IGl0ZW07XG4gICAgfVxuICB9XG5cbiAgZ2V0IHNlbGVjdGVkSXRlbSgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRJdGVtO1xuICB9XG4gIHNldCBzZWxlY3RlZEl0ZW0oaXRlbSkge1xuICAgIGlmICgnc2VsZWN0ZWRJdGVtJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEl0ZW0gPSBpdGVtOyB9XG4gICAgdGhpcy5fc2VsZWN0ZWRJdGVtID0gaXRlbTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgZ2V0IHNob3dUcmFuc2l0aW9uKCkge1xuICAgIHJldHVybiBzdXBlci5zaG93VHJhbnNpdGlvbiB8fCB0aGlzLmNsYXNzTGlzdC5jb250YWlucygnc2hvd1RyYW5zaXRpb24nKTtcbiAgfVxuICBzZXQgc2hvd1RyYW5zaXRpb24odmFsdWUpIHtcbiAgICBpZiAoJ3Nob3dUcmFuc2l0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zaG93VHJhbnNpdGlvbiA9IHZhbHVlOyB9XG4gICAgdG9nZ2xlQ2xhc3ModGhpcywgJ3Nob3dUcmFuc2l0aW9uJywgdmFsdWUpO1xuICB9XG5cbiAgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBgXG4gICAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgICNzbGlkaW5nQ29udGFpbmVyIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIC8qXG4gICAgICAgICBTZXQgd2lkdGggZm9yIElFL0VkZ2UuIEl0J3Mgbm90IGNsZWFyIHdoeSB0aGV5IG5lZWQgdGhpcywgYW5kIHRoZSBvdGhlclxuICAgICAgICAgYnJvd3NlcnMgZG9uJ3QuXG4gICAgICAgICAqL1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoLnNob3dUcmFuc2l0aW9uKSAjc2xpZGluZ0NvbnRhaW5lciB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4ycyBlYXNlLW91dDtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1vdXQ7XG4gICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8YmFzaWMtc3ByZWFkLWl0ZW1zIGlkPVwic2xpZGluZ0NvbnRhaW5lclwiPlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICA8L2Jhc2ljLXNwcmVhZC1pdGVtcz5cbiAgICBgO1xuICB9XG5cbn1cblxuXG4vLyBOb3RlOiBJbiB0aGlzIHJvdXRpbmUsIFwidGhpc1wiIGlzIGJvdW5kIHRvIGFuIGVsZW1lbnQgaW5zdGFuY2UuXG5mdW5jdGlvbiByZW5kZXJTZWxlY3Rpb24oKSB7XG4gIGlmICghdGhpcy5zZWxlY3RlZEl0ZW0pIHtcbiAgICByZXR1cm47XG4gIH1cbiAgbGV0IHNlbGVjdGlvbiA9IGZyYWN0aW9uYWxTZWxlY3Rpb24uZWxlbWVudFNlbGVjdGlvbih0aGlzKTtcbiAgbGV0IGl0ZW1Db3VudCA9IHRoaXMuaXRlbXMgPyB0aGlzLml0ZW1zLmxlbmd0aCA6IDA7XG4gIGxldCBkYW1wZWQgPSBmcmFjdGlvbmFsU2VsZWN0aW9uLmRhbXBlZFNlbGVjdGlvbihzZWxlY3Rpb24sIGl0ZW1Db3VudCk7XG4gIC8vIFVzZSBhIHBlcmNlbnRhZ2Ugc28gdGhlIHRyYW5zZm9ybSB3aWxsIHN0aWxsIHdvcmsgaWYgc2NyZWVuIHNpemUgY2hhbmdlc1xuICAvLyAoZS5nLiwgaWYgZGV2aWNlIG9yaWVudGF0aW9uIGNoYW5nZXMpLlxuICBsZXQgbGVmdCA9IC1kYW1wZWQgKiAxMDA7XG4gIGxldCB0cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgnICsgbGVmdCArICclKSc7XG4gIHRoaXMuJC5zbGlkaW5nQ29udGFpbmVyLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgdGhpcy4kLnNsaWRpbmdDb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xufVxuXG5cbmRvY3VtZW50LnJlZ2lzdGVyRWxlbWVudCgnYmFzaWMtc2xpZGluZy12aWV3cG9ydCcsIFNsaWRpbmdWaWV3cG9ydCk7XG5leHBvcnQgZGVmYXVsdCBTbGlkaW5nVmlld3BvcnQ7XG4iLCJpbXBvcnQgRWxlbWVudEJhc2UgZnJvbSAnLi4vLi4vYmFzaWMtZWxlbWVudC1iYXNlL3NyYy9FbGVtZW50QmFzZSc7XG5pbXBvcnQgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50JztcbmltcG9ydCBPYnNlcnZlQ29udGVudENoYW5nZXMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvT2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzJztcblxuXG4vKipcbiAqIFNwcmVhZHMgb3V0IGEgc2V0IG9mIGl0ZW1zIGhvcml6b250YWxseSBzbyB0aGV5IHRha2UgZXF1YWwgc3BhY2UuXG4gKlxuICogW0xpdmUgZGVtb10oaHR0cDovL2Jhc2ljd2ViY29tcG9uZW50cy5vcmcvYmFzaWMtd2ViLWNvbXBvbmVudHMvcGFja2FnZXMvYmFzaWMtc3ByZWFkLWl0ZW1zLylcbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBpcyB1c2VkLCBmb3IgZXhhbXBsZSwgYnkgdGhlIGJhc2ljLXNsaWRpbmctdmlld3BvcnQgY29tcG9uZW50XG4gKiB0byBlbnN1cmUgdGhhdCBjaGlsZHJlbiBvZiBkaWZmZXJlbnQgc2l6ZSB3aWxsIHRha2UgdXAgdGhlIHNhbWUgYW1vdW50IG9mXG4gKiBob3Jpem9udGFsIHNwYWNlLlxuICpcbiAqIFRoaXMgY29tcG9uZW50IGN1cnJlbnRseSByZXF1aXJlcyBhbiBleHBsaWNpdCBzaXplIGJ5IGFwcGxpZWQgdG8gaXQuXG4gKlxuICogQGV4dGVuZHMgRWxlbWVudEJhc2VcbiAqIEBtaXhlcyBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50XG4gKiBAbWl4ZXMgT2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzXG4gKi9cbmNsYXNzIFNwcmVhZEl0ZW1zIGV4dGVuZHMgRWxlbWVudEJhc2UuY29tcG9zZShcbiAgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCxcbiAgT2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzXG4pIHtcblxuICBhdHRhY2hlZENhbGxiYWNrKCkge1xuICAgIGlmIChzdXBlci5hdHRhY2hlZENhbGxiYWNrKSB7IHN1cGVyLmF0dGFjaGVkQ2FsbGJhY2soKTsgfVxuICAgIC8vIEhBQ0tcbiAgICB0aGlzLml0ZW1zQ2hhbmdlZCgpO1xuICB9XG5cbiAgZ2V0IGl0ZW1zKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XG4gIH1cblxuICAvLyBUT0RPOiBTaG91bGQgYWxzbyBoYW5kbGUgY29udGVudENoYW5nZWQoKSwgYnV0IG5lZWQgdG8gcmF0aW9uYWxpemUgd2l0aFxuICAvLyBpbnZvY2F0aW9uIG9mIGl0ZW1zQ2hhbmdlZCBpbiBhdHRhY2hlZENhbGxiYWNrLlxuICBpdGVtc0NoYW5nZWQoKSB7XG4gICAgaWYgKHN1cGVyLml0ZW1zQ2hhbmdlZCkgeyBzdXBlci5pdGVtc0NoYW5nZWQoKTsgfVxuICAgIGxldCBpdGVtcyA9IHRoaXMuaXRlbXM7XG4gICAgbGV0IGNvdW50ID0gaXRlbXMubGVuZ3RoO1xuICAgIHRoaXMuJC5zcHJlYWRDb250YWluZXIuc3R5bGUud2lkdGggPSAoY291bnQgKiAxMDApICsgJyUnO1xuICAgIGxldCBpdGVtV2lkdGggPSAoMTAwIC8gY291bnQpICsgXCIlXCI7XG4gICAgW10uZm9yRWFjaC5jYWxsKGl0ZW1zLCBpdGVtID0+IHtcbiAgICAgIGl0ZW0uc3R5bGUud2lkdGggPSBpdGVtV2lkdGg7XG4gICAgfSk7XG4gIH1cblxuICBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgICNzcHJlYWRDb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICAjc3ByZWFkQ29udGFpbmVyIDo6Y29udGVudCA+ICoge1xuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICBvYmplY3QtZml0OiB2YXIoLS1iYXNpYy1pdGVtLW9iamVjdC1maXQsIGNvbnRhaW4pO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xuICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBpZD1cInNwcmVhZENvbnRhaW5lclwiPlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbn1cblxuXG5kb2N1bWVudC5yZWdpc3RlckVsZW1lbnQoJ2Jhc2ljLXNwcmVhZC1pdGVtcycsIFNwcmVhZEl0ZW1zKTtcbmV4cG9ydCBkZWZhdWx0IFNwcmVhZEl0ZW1zO1xuIl19
