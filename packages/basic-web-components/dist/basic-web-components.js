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
 * generally used to reflect a user-controlled touch or trackpad drag operation
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

customElements.define('basic-animation-stage', AnimationStage);

},{"../../basic-component-mixins/src/ContentAsItems":10,"../../basic-component-mixins/src/DistributedChildrenAsContent":14,"../../basic-component-mixins/src/FractionalSelection":15,"../../basic-component-mixins/src/ItemsSelection":17,"../../basic-component-mixins/src/ObserveContentChanges":22,"../../basic-component-mixins/src/SelectionAnimation":24,"../../basic-component-mixins/src/SelectionAriaActive":25,"../../basic-element-base/src/ElementBase":40}],2:[function(require,module,exports){
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

var _ContentFirstChildTarget = require('../../basic-component-mixins/src/ContentFirstChildTarget');

var _ContentFirstChildTarget2 = _interopRequireDefault(_ContentFirstChildTarget);

var _DistributedChildrenAsContent = require('../../basic-component-mixins/src/DistributedChildrenAsContent');

var _DistributedChildrenAsContent2 = _interopRequireDefault(_DistributedChildrenAsContent);

var _DirectionSelection = require('../../basic-component-mixins/src/DirectionSelection');

var _DirectionSelection2 = _interopRequireDefault(_DirectionSelection);

var _ItemsSelection = require('../../basic-component-mixins/src/ItemsSelection');

var _ItemsSelection2 = _interopRequireDefault(_ItemsSelection);

var _Keyboard = require('../../basic-component-mixins/src/Keyboard');

var _Keyboard2 = _interopRequireDefault(_Keyboard);

var _KeyboardDirection = require('../../basic-component-mixins/src/KeyboardDirection');

var _KeyboardDirection2 = _interopRequireDefault(_KeyboardDirection);

var _ObserveContentChanges = require('../../basic-component-mixins/src/ObserveContentChanges');

var _ObserveContentChanges2 = _interopRequireDefault(_ObserveContentChanges);

var _TargetInCollective = require('../../basic-component-mixins/src/TargetInCollective');

var _TargetInCollective2 = _interopRequireDefault(_TargetInCollective);

var _TargetSelection = require('../../basic-component-mixins/src/TargetSelection');

var _TargetSelection2 = _interopRequireDefault(_TargetSelection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Symbols for private data members on an element.
var mousedownListenerSymbol = (0, _createSymbol2.default)('mousedownListener');
var mousemoveListenerSymbol = (0, _createSymbol2.default)('mousemoveListener');
var lastMouseXSymbol = (0, _createSymbol2.default)('lastMouseX');
var lastMouseYSymbol = (0, _createSymbol2.default)('lastMouseY');
var mouseTimeoutSymbol = (0, _createSymbol2.default)('mouseTimeout');

var base = _ElementBase2.default.compose(_ContentFirstChildTarget2.default, _DirectionSelection2.default, _DistributedChildrenAsContent2.default, _ItemsSelection2.default, _Keyboard2.default, _KeyboardDirection2.default, _ObserveContentChanges2.default, _TargetInCollective2.default, _TargetSelection2.default);

/**
 * Component which adds prominent left and right arrow buttons to a wrapped
 * child such as a carousel.
 *
 * You can see a [live demo](http://basicwebcomponents.org/basic-web-components/packages/basic-carousel/carouselWithArrows.html)
 * of this component applied to a carousel.
 *
 * Clicking the left/right buttons selects the previous/next item.
 *
 * Typical usage:
 *
 *     <basic-arrow-selection>
 *       <basic-carousel>
 *         ... images, etc. ...
 *       </basic-carousel>
 *     </basic-arrow-selection>
 *
 * By default, the arrow buttons are shown on devices with a mouse or mouse-like
 * pointing device. They are not shown on a touch-capable device unless mouse
 * movement is detected. To cause the buttons to always appear, apply the
 * 'showArrows' CSS class.
 *
 * @extends ElementBase
 * @mixes ContentFirstChildTarget
 * @mixes DirectionSelection
 * @mixes DistributedChildrenAsContent
 * @mixes ItemsSelection
 * @mixes Keyboard
 * @mixes KeyboardDirection
 * @mixes TargetInCollective
 * @mixes TargetSelection
 */

var ArrowSelection = function (_base) {
  _inherits(ArrowSelection, _base);

  function ArrowSelection() {
    _classCallCheck(this, ArrowSelection);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ArrowSelection).apply(this, arguments));
  }

  _createClass(ArrowSelection, [{
    key: 'createdCallback',
    value: function createdCallback() {
      var _this2 = this;

      if (_get(Object.getPrototypeOf(ArrowSelection.prototype), 'createdCallback', this)) {
        _get(Object.getPrototypeOf(ArrowSelection.prototype), 'createdCallback', this).call(this);
      }

      this.$.buttonLeft.addEventListener('click', function (event) {
        _this2.selectPrevious();
        event.stopPropagation();
      });
      this.$.buttonRight.addEventListener('click', function (event) {
        _this2.selectNext();
        event.stopPropagation();
      });
      assumeButtonFocus(this, this.$.buttonLeft);
      assumeButtonFocus(this, this.$.buttonRight);

      if (!this.classList.contains('showArrows')) {
        // Determine whether we should show arrow buttons or not.
        if (deviceSupportsTouch()) {
          // A touch device might also support a mouse, but we can't know whether
          // there's actually a mouse until we hear from it.
          listenForMouse(this);
        } else {
          // The device doesn't support touch, so assume it has a mouse.
          showArrows(this);
        }
      }
    }
  }, {
    key: 'selectedItemChanged',
    value: function selectedItemChanged() {
      if (_get(Object.getPrototypeOf(ArrowSelection.prototype), 'selectedItemChanged', this)) {
        _get(Object.getPrototypeOf(ArrowSelection.prototype), 'selectedItemChanged', this).call(this);
      }
      // HACK: Force an update of the set of possible navigations.
      this.itemsChanged();
    }

    /*
     * The template uses the chevron-left and chevron-right SVG icons from
     * https://github.com/PolymerElements/iron-icons/blob/master/iron-icons.html.
     */

  }, {
    key: 'canSelectNext',
    get: function get() {
      return _get(Object.getPrototypeOf(ArrowSelection.prototype), 'canSelectNext', this);
    },
    set: function set(canSelectNext) {
      if ('canSelectNext' in base.prototype) {
        _set(Object.getPrototypeOf(ArrowSelection.prototype), 'canSelectNext', canSelectNext, this);
      }
      if (this.$) {
        this.$.buttonRight.disabled = !canSelectNext;
      }
    }
  }, {
    key: 'canSelectPrevious',
    get: function get() {
      return _get(Object.getPrototypeOf(ArrowSelection.prototype), 'canSelectPrevious', this);
    },
    set: function set(canSelectPrevious) {
      if ('canSelectPrevious' in base.prototype) {
        _set(Object.getPrototypeOf(ArrowSelection.prototype), 'canSelectPrevious', canSelectPrevious, this);
      }
      if (this.$) {
        this.$.buttonLeft.disabled = !canSelectPrevious;
      }
    }
  }, {
    key: 'defaults',
    get: function get() {
      var defaults = _get(Object.getPrototypeOf(ArrowSelection.prototype), 'defaults', this) || {};
      defaults.navigationAxis = 'horizontal';
      return defaults;
    }
  }, {
    key: 'template',
    get: function get() {
      return '\n      <style>\n      :host {\n        display: -webkit-flex;\n        display: flex;\n      }\n\n      #container {\n        display: -webkit-flex;\n        display: flex;\n        -webkit-flex: 1;\n        flex: 1;\n      }\n\n      #container ::content > * {\n        -webkit-flex: 1;\n        flex: 1;\n      }\n\n      .navigationButton {\n        background: transparent;\n        border: 1px solid transparent;\n        box-sizing: border-box;\n        color: rgba(0, 0, 0, 0.7);\n        fill: currentColor;\n        margin: 0;\n        opacity: 1;\n        outline: none; /* REVIEW: Accessibility should be provided by other elements. */\n        padding: 0;\n        transition: opacity 1s;\n        z-index: 1;\n      }\n\n      .navigationButton:hover:not(:disabled) {\n        background: rgba(0, 0, 0, 0.5);\n        color: rgba(0, 0, 0, 0.8);\n        cursor: pointer;\n      }\n      .navigationButton:active:not(:disabled) {\n        background: rgba(0, 0, 0, 0.7);\n        color: rgba(0, 0, 0, 0.9);\n      }\n      .navigationButton:disabled {\n        color: rgba(0, 0, 0, 0.2);\n      }\n\n      :host(:not(.showArrows)) .navigationButton {\n        opacity: 0;\n        visibility: hidden;\n      }\n\n      .navigationButton .icon {\n        height: 48px;\n        width: 48px;\n      }\n\n      /* Overlay variant */\n      :host(.overlay) {\n        position: relative;\n      }\n      :host(.overlay) .navigationButton {\n        bottom: 0;\n        color: rgba(255, 255, 255, 0.7);\n        position: absolute;\n        top: 0;\n      }\n      :host(.overlay) #buttonLeft {\n        left: 0;\n      }\n      :host(.overlay) #buttonRight {\n        right: 0;\n      }\n      :host(.overlay) .navigationButton:hover:not(:disabled) {\n        background: rgba(255, 255, 255, 0.2);\n        color: rgba(255, 255, 255, 0.8);\n      }\n      :host(.overlay) .navigationButton:active:not(:disabled) {\n        background: rgba(255, 255, 255, 0.4);\n        color: rgba(255, 255, 255, 0.9);\n      }\n      :host(.overlay) .navigationButton:disabled {\n        color: rgba(255, 255, 255, 0.3);\n      }\n      </style>\n\n      <!--\n      Accessibility note: since the navigation offered by the arrow buttons should\n      be redundant (that is, there should be other ways of navigating the list),\n      we mark the button as aria-hidden so that assistive devices ignore them.\n      -->\n      <button id="buttonLeft" class="navigationButton" disabled tabindex="-1" aria-hidden="true">\n        <svg class="icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">\n          <g id="chevron-left">\n            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>\n          </g>\n        </svg>\n      </button>\n      <div id="container" role="none">\n        <slot></slot>\n      </div>\n      <button id="buttonRight" class="navigationButton" disabled tabindex="-1" aria-hidden="true">\n        <svg class="icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">\n          <g id="chevron-right">\n            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>\n          </g>\n        </svg>\n      </button>\n    ';
    }
  }]);

  return ArrowSelection;
}(base);

/*
 * By default, a button will always take focus on mousedown. For this component,
 * we want to override that behavior, such that a mousedown on a button keeps
 * the focus on the outer component.
 */

function assumeButtonFocus(element, button) {
  button.addEventListener('mousedown', function (event) {
    // Given the outer element focus if it doesn't already have it.
    var outermost = element.collective.outermostElement;
    if (outermost) {
      outermost.focus();
    }
    // Prevent the default focus-on-mousedown behavior.
    event.preventDefault();
  });
}

function deviceSupportsTouch() {
  return 'ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch;
}

// We try to detect the presence of a mouse by listening for mousemove events
// which are *not* the result of a mousedown. On a touch device, a tap on the
// page will generate a fake mousemove, followed by a mousedown. We don't want
// to respond to those fake mousemove events. To discriminate between fake and
// real mousemove events, when we get a mousemove event, we wait for a bit to
// see if the same location is reported as the location of a subsequent
// mousedown.
function listenForMouse(element) {

  element[mousedownListenerSymbol] = function (event) {
    // console.log(`mousedown ${event.pageX}, ${event.pageY}`);
    if (element[mouseTimeoutSymbol]) {
      clearTimeout(element[mouseTimeoutSymbol]);
    }
    element[lastMouseXSymbol] = event.pageX;
    element[lastMouseYSymbol] = event.pageY;
  };
  window.addEventListener('mousedown', element[mousedownListenerSymbol]);

  element[mousemoveListenerSymbol] = function (event) {
    // console.log(`setting timeout`);
    // Postpone checking the mousemove location to give the mousedown event a
    // chance to fire. The 250 ms delay is just guesswork; a shorter delay
    // doesn't seem to work.
    element[mouseTimeoutSymbol] = setTimeout(function () {
      // console.log(`postponed mousemove ${event.pageX}, ${event.pageY}`);
      if (element[lastMouseXSymbol] != null && event.pageX !== element[lastMouseXSymbol] || element[lastMouseYSymbol] != null && event.pageY !== element[lastMouseYSymbol]) {
        // mousemove event was at a location other than the last mousedown,
        // and hence most likely a real mousemove event.
        mouseDetected(element);
      } else {
        element[lastMouseXSymbol] = event.pageX;
        element[lastMouseYSymbol] = event.pageY;
      }
    }, 250);
  };
  window.addEventListener('mousemove', element[mousemoveListenerSymbol]);
}

function mouseDetected(element) {
  // console.log(`mouse detected`);
  showArrows(element);

  // We can stop listening for mouse events now.
  if (element[mouseTimeoutSymbol]) {
    clearTimeout(element[mouseTimeoutSymbol]);
  }
  window.removeEventListener('mousedown', element[mousedownListenerSymbol]);
  window.removeEventListener('mousemove', element[mousemoveListenerSymbol]);
  element[mousedownListenerSymbol] = null;
  element[mousemoveListenerSymbol] = null;
}

function showArrows(element) {
  element.classList.add('showArrows');
}

customElements.define('basic-arrow-selection', ArrowSelection);
exports.default = ArrowSelection;

},{"../../basic-component-mixins/src/ContentFirstChildTarget":11,"../../basic-component-mixins/src/DirectionSelection":12,"../../basic-component-mixins/src/DistributedChildrenAsContent":14,"../../basic-component-mixins/src/ItemsSelection":17,"../../basic-component-mixins/src/Keyboard":18,"../../basic-component-mixins/src/KeyboardDirection":19,"../../basic-component-mixins/src/ObserveContentChanges":22,"../../basic-component-mixins/src/TargetInCollective":31,"../../basic-component-mixins/src/TargetSelection":32,"../../basic-component-mixins/src/createSymbol":35,"../../basic-element-base/src/ElementBase":40}],3:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createSymbol = require('../../basic-component-mixins/src/createSymbol');

var _createSymbol2 = _interopRequireDefault(_createSymbol);

var _WrappedStandardElement = require('../../basic-wrapped-standard-element/src/WrappedStandardElement');

var _WrappedStandardElement2 = _interopRequireDefault(_WrappedStandardElement);

var _DistributedChildrenAsContent = require('../../basic-component-mixins/src/DistributedChildrenAsContent');

var _DistributedChildrenAsContent2 = _interopRequireDefault(_DistributedChildrenAsContent);

var _Generic = require('../../basic-component-mixins/src/Generic');

var _Generic2 = _interopRequireDefault(_Generic);

var _ObserveContentChanges = require('../../basic-component-mixins/src/ObserveContentChanges');

var _ObserveContentChanges2 = _interopRequireDefault(_ObserveContentChanges);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Symbols for private data members on an element.
var lineHeightSymbol = (0, _createSymbol2.default)('lineHeight');
var minimumRowsSymbol = (0, _createSymbol2.default)('minimumRows');
var valueTracksContentSymbol = (0, _createSymbol2.default)('valueTracksContent');

/**
 * A text area that makes itself big enough to show its content.
 *
 * [Live demo](http://basicwebcomponents.org/basic-web-components/packages/basic-autosize-textarea/)
 *
 * This text input component is useful in situations where you want to ask the
 * user to enter as much text as they want, but don't want to take up a lot of
 * room on the page.
 *
 * The component works by copying the text to an invisible element which will
 * automatically grow in size; the expanding copy will expand the container,
 * which in turn will vertically stretch the text area to match.
 *
 * This component generally exposes all the same attributes/properties as a
 * standard HTML `<textarea>`.
 *
 * @mixes Generic
 * @mixes DistributedChildrenAsContent
 * @mixes ObserveContentChanges
 */

var AutosizeTextarea = function (_WrappedStandardEleme) {
  _inherits(AutosizeTextarea, _WrappedStandardEleme);

  function AutosizeTextarea() {
    _classCallCheck(this, AutosizeTextarea);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AutosizeTextarea).apply(this, arguments));
  }

  _createClass(AutosizeTextarea, [{
    key: 'attachedCallback',

    // Normally the value of the element is set and read through its value
    // attribute. As a convenience, and to mirror standard textarea behavior, it
    // is possible to set the content of the textarea by including text between
    // the opening and closing tag. This works only in one direction: setting the
    // tag content updates the textarea, but user edits in the textarea are not
    // reflected in the tag content. We capture the value of the initial text
    // content in order to set the value property during the create event.
    // TODO: Normalize indentation in the text content. Users will often want to
    // indent the markup so that it looks pretty. We should detect the indentation
    // level and remove any indentation whitespace
    // TODO: Consider using content innerHTML rather than plain text. The native
    // textarea element will include HTML, not just the stripped text, as initial
    // value property text.
    value: function attachedCallback() {
      if (_get(Object.getPrototypeOf(AutosizeTextarea.prototype), 'attachedCallback', this)) {
        _get(Object.getPrototypeOf(AutosizeTextarea.prototype), 'attachedCallback', this).call(this);
      }
      initializeWhenRendered(this);
    }

    /**
     * Resize the element such that the textarea can exactly contain its content.
     * By default, this method is invoked whenever the text content changes.
     */

  }, {
    key: 'autoSize',
    value: function autoSize() {
      // If we had speculatively added an extra line because of an Enter keypress,
      // we can now hide the extra line.
      this.$.extraLine.style.display = 'none';

      // We resize by copying the textarea contents to the element itself; the
      // text will then appear (via <content>) inside the invisible div. If
      // we've set things up correctly, this new content should take up the same
      // amount of room as the same text in the textarea. Updating the element's
      // content adjusts the element's size, which in turn will make the textarea
      // the correct height.
      this.$.textCopy.textContent = this.value;
    }
  }, {
    key: 'contentChanged',
    value: function contentChanged() {
      if (_get(Object.getPrototypeOf(AutosizeTextarea.prototype), 'contentChanged', this)) {
        _get(Object.getPrototypeOf(AutosizeTextarea.prototype), 'contentChanged', this).call(this);
      }
      if (this[valueTracksContentSymbol]) {
        var text = getTextContent(this);
        this.inner.value = unescapeHtml(text);
        valueChanged(this);
      }
    }
  }, {
    key: 'createdCallback',
    value: function createdCallback() {
      var _this2 = this;

      if (_get(Object.getPrototypeOf(AutosizeTextarea.prototype), 'createdCallback', this)) {
        _get(Object.getPrototypeOf(AutosizeTextarea.prototype), 'createdCallback', this).call(this);
      }

      this.inner.addEventListener('input', function (event) {
        valueChanged(_this2);
      });
      this.inner.addEventListener('keypress', function (event) {
        keypress(_this2, event);
      });

      // Set defaults.
      if (typeof this.minimumRows === 'undefined') {
        this.minimumRows = this.defaults.minimumRows;
      }

      // A standard textarea has its value track its textContent by default.
      // That is, changes to textContent update the value. However, if an attempt
      // is made to change the value directly, this breaks the automatic tracking.
      // From that point on, changes to textContent do *not* update the value.
      this[valueTracksContentSymbol] = true;
    }
  }, {
    key: 'defaults',
    get: function get() {
      var defaults = _get(Object.getPrototypeOf(AutosizeTextarea.prototype), 'defaults', this) || {};
      defaults.minimumRows = 1;
      return defaults;
    }

    /**
     * Determines the minimum number of rows shown. This is similar to the rows
     * attribute on a standard textarea, but because this element can grow, is
     * expressed as a minimum rather than a fixed number.
     *
     * By default, this property is 1, so when empty, the text area will be a
     * single line tall. That's efficient in terms of the space it consumes, but
     * until the user interacts with the element, they may not realize they can
     * enter multiple lines of text. Setting the property to a value higher than 1
     * will signal to the user that they can enter multiple lines of a text.
     *
     * By setting this property, you can also communicate to the user some sense
     * of how much text you're expecting them to provide. For example, on a
     * feedback form, asking the user to enter their feedback in a single-line
     * text box implies you don't really want them to enter much text — even if
     * the text box will grow when they type. By setting this to a value like,
     * say, 10 rows, you can signal that you're fully expecting them to enter more
     * text.
     *
     * @type {number}
     * @default 1
     */

  }, {
    key: 'minimumRows',
    get: function get() {
      return this[minimumRowsSymbol];
    },
    set: function set(value) {
      this[minimumRowsSymbol] = parseInt(value);
      if (this[lineHeightSymbol]) {
        setMinimumHeight(this);
      }
    }
  }, {
    key: 'template',
    get: function get() {
      return '\n      <style>\n      :host {\n        display: block;\n      }\n\n      #autoSizeContainer {\n        position: relative;\n      }\n\n      /*\n       * Ensure both the text area and copy end up with the element\'s own font\n       * metrics, so that text will lay out the same in both of them.\n       */\n      #inner,\n      #copyContainer {\n        -moz-box-sizing: border-box;\n        box-sizing: border-box;\n        font-family: inherit;\n        font-size: inherit;\n        font-style: inherit;\n        font-weight: inherit;\n        line-height: inherit;\n        margin: 0;\n      }\n\n      #inner {\n        height: 100%;\n        overflow: hidden;\n        position: absolute;\n        resize: none;\n        top: 0;\n        width: 100%;\n        @apply(--textarea);\n      }\n\n      #copyContainer {\n        visibility: hidden;\n        white-space: pre-wrap; /* So lines wrap */\n        word-wrap: break-word; /* So we break at word boundaries when possible */\n      }\n\n      #contentContainer {\n        display: none;\n      }\n      </style>\n\n      <!--\n      The invisible copyContainer contains an extraSpace element that ensures that,\n      even if the last line of the textarea is blank, there will be something in the\n      line that forces the text copy to grow by a line. This extra space is a thin\n      space, to reduce the amount by which the text copy will prematurely grow.\n\n      The copyContainer also contains an extraLine element exists to deal with the\n      fact that, if the user presses the Enter key down, the textarea\'s content will\n      move before the complete text is available. See notes at _keypress.\n\n      Lastly, we put the HTML content element into a separate container so we can\n      hide it. We need to have a content element somewhere in the template to\n      convince Polymer that we care about the content in the Shady DOM case --\n      without that content element, Shady DOM will conclude the element doesn\'t\n      need its light DOM content, and will throw it away.\n      -->\n      <div id="autoSizeContainer">\n        <textarea id="inner"></textarea>\n        <div id="copyContainer"><span id="textCopy"></span><span id="extraSpace">&thinsp;</span><div id="extraLine">&nbsp;</div></div>\n      </div>\n      <div id="contentContainer">\n        <slot></slot>\n      </div>\n    ';
    }

    /**
     * The text currently shown in the textarea.
     *
     * Note that the text shown in the textarea can also be updated by changing
     * the element's innerHTML/textContent. However, if the value property is
     * explicitly set, that will override the innerHTML/textContent.
     *
     * @type {string}
     */

  }, {
    key: 'value',
    get: function get() {
      return this.inner.value;
    },
    set: function set(text) {
      // Explicitly setting value breaks automatic update of value from content.
      this[valueTracksContentSymbol] = false;
      this.inner.value = text;
      valueChanged(this);
    }

    /**
     * Fires when the user types in the textarea.
     *
     * @memberof AutosizeTextarea
     * @event change
     */

  }]);

  return AutosizeTextarea;
}(_WrappedStandardElement2.default.wrap('textarea').compose(_DistributedChildrenAsContent2.default, _Generic2.default, _ObserveContentChanges2.default));

function getTextContent(element) {
  var text = element.distributedTextContent;

  // Trim the text.
  // This is non-standard textarea behavior. A standard textarea will trim the
  // first character if it's a newline, but that's it. However, authors will
  // want to be able to place the opening and closing tags on their own lines.
  // So it seems more helpful to trim whitespace on either side.
  text = text.trim();

  return text;
}

// Set up once this component has been rendered.
//
// On Chrome (as of 10/23/14) at least, if an instance if this component is
// added dynamically, its attached handler may trigger before its been
// rendered. That would cause our layout calculations to be incorrect.
//
function initializeWhenRendered(element) {

  // If the component has been rendered, our height should be nonzero.
  if (element.clientHeight === 0) {
    // Not rendered yet: wait a bit before trying again.
    setTimeout(function () {
      return initializeWhenRendered(element);
    }, 10);
    return;
  }

  // If we reach this point, the component's elements should by styled.

  // For auto-sizing to work, we need the text copy to have the same border,
  // padding, and other relevant characteristics as the original text area.
  // Since those aspects are affected by CSS, we have to wait until the
  // element is in the document before we can update the text copy.
  var textBoxStyle = getComputedStyle(element.inner);
  var copyContainerStyle = element.$.copyContainer.style;
  copyContainerStyle.borderBottomStyle = textBoxStyle.borderBottomStyle;
  copyContainerStyle.borderBottomWidth = textBoxStyle.borderBottomWidth;
  copyContainerStyle.borderLeftStyle = textBoxStyle.borderLeftStyle;
  copyContainerStyle.borderLeftWidth = textBoxStyle.borderLeftWidth;
  copyContainerStyle.borderRightStyle = textBoxStyle.borderRightStyle;
  copyContainerStyle.borderRightWidth = textBoxStyle.borderRightWidth;
  copyContainerStyle.borderTopStyle = textBoxStyle.borderTopStyle;
  copyContainerStyle.borderTopWidth = textBoxStyle.borderTopWidth;
  copyContainerStyle.paddingBottom = textBoxStyle.paddingBottom;
  copyContainerStyle.paddingLeft = textBoxStyle.paddingLeft;
  copyContainerStyle.paddingRight = textBoxStyle.paddingRight;
  copyContainerStyle.paddingTop = textBoxStyle.paddingTop;

  // Use the extraLine member to gauge the expected height of a single line of
  // text. We can't use lineHeight, because that can be reported as "normal",
  // and we want to know the actual pixel height.
  element.$.extraLine.style.display = 'inherit';
  element[lineHeightSymbol] = element.$.extraLine.clientHeight;

  // Now that we know the line height, we can hide the extra line.
  element.$.extraLine.style.display = 'none';

  // Use the line height in conjunction with minimumRows to establish the
  // overall minimum height of the component.
  setMinimumHeight(element);
}

// Speculatively add a line to our copy of the text. We're not sure what the
// exact effect of typing this character will be, and at this point it's not
// reflected yet in the textarea's content. We speculate that it will add a
// line to the text and size accordingly. (One other possibility is that the
// user's replacing a selected chunk of text with a newline.) In any event,
// once we get the keyup or change event, we'll make any final adjustments.
//
// TODO: If the user holds down the Enter key, we can get a bunch of keypress
// events before we get keyup. This causes flicker. Instead of supporting only
// a single extra speculative line, we should grow the speculative element to
// contain the number of Enter keypresses we've received.
function keypress(element, event) {
  if (event.keyCode === 13 /* Enter */) {
      element.$.extraLine.style.display = 'inherit';
    }
}

// Setting the minimumRows attribute translates into setting the minimum
// height on the text copy container.
function setMinimumHeight(element) {
  var copyContainer = element.$.copyContainer;
  var outerHeight = copyContainer.getBoundingClientRect().height;
  var style = getComputedStyle(copyContainer);
  var paddingTop = parseFloat(style.paddingTop);
  var paddingBottom = parseFloat(style.paddingBottom);
  var innerHeight = copyContainer.clientHeight - paddingTop - paddingBottom;
  var bordersPlusPadding = outerHeight - innerHeight;
  var minHeight = element.minimumRows * element[lineHeightSymbol] + bordersPlusPadding;
  minHeight = Math.ceil(minHeight);
  copyContainer.style.minHeight = minHeight + 'px';
}

function unescapeHtml(html) {
  return html.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, ">").replace(/&quot;/g, '\"').replace(/&#039;/g, '\'');
}

/*
 * Handle a change in the element's value property.
 */
function valueChanged(element) {
  element.autoSize();
  element.dispatchEvent(new CustomEvent('value-changed'));
}

customElements.define('basic-autosize-textarea', AutosizeTextarea);
exports.default = AutosizeTextarea;

},{"../../basic-component-mixins/src/DistributedChildrenAsContent":14,"../../basic-component-mixins/src/Generic":16,"../../basic-component-mixins/src/ObserveContentChanges":22,"../../basic-component-mixins/src/createSymbol":35,"../../basic-wrapped-standard-element/src/WrappedStandardElement":54}],4:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

var _SelectionAnimation = require('../../basic-component-mixins/src/SelectionAnimation');

var _SelectionAnimation2 = _interopRequireDefault(_SelectionAnimation);

var _SwipeDirection = require('../../basic-component-mixins/src/SwipeDirection');

var _SwipeDirection2 = _interopRequireDefault(_SwipeDirection);

var _TargetInCollective = require('../../basic-component-mixins/src/TargetInCollective');

var _TargetInCollective2 = _interopRequireDefault(_TargetInCollective);

var _TrackpadDirection = require('../../basic-component-mixins/src/TrackpadDirection');

var _TrackpadDirection2 = _interopRequireDefault(_TrackpadDirection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var base = _ElementBase2.default.compose(_ContentAsItems2.default, _DirectionSelection2.default, _DistributedChildrenAsContent2.default, _FractionalSelection2.default, _ItemsSelection2.default, _Keyboard2.default, _KeyboardDirection2.default, _ObserveContentChanges2.default, _SelectionAnimation2.default, _SelectionAriaActive2.default, _SwipeDirection2.default, _TargetInCollective2.default, _TrackpadDirection2.default);

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
 * The above demo adds the optional
 * [basic-arrow-selection](../basic-arrow-selection) and
 * [basic-page-dots](../basic-page-dots) components. You can also view a
 * [plain demo](http://basicwebcomponents.org/basic-web-components/packages/basic-carousel/plain.html)
 * demo.
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
 * * [basic-arrow-selection](../basic-arrow-selection).
 *   This adds prominent left and right arrow buttons on the side of the carousel.
 * * [basic-page-dots](../basic-page-dots).
 *   This adds a series of small dots below the carousel to indicate the user's
 *   current position in the sequence.
 * * [basic-slideshow-timer](../basic-slideshow-timer).
 *   Advances to the next item on a timer.
 * * [basic-tab-strip](../basic-tab-strip).
 *   Adds a strip of traditional tab buttons.
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
 * @mixes FractionalSelection
 * @mixes Generic
 * @mixes ItemsSelection
 * @mixes Keyboard
 * @mixes KeyboardDirection
 * @mixes ObserveContentChanges
 * @mixes SelectionAnimation
 * @mixes SelectionAriaActive
 * @mixes SwipeDirection
 * @mixes TargetInCollective
 * @mixes TargetSelection
 * @mixes TrackpadDirection
 */

var Carousel = function (_base) {
  _inherits(Carousel, _base);

  function Carousel() {
    _classCallCheck(this, Carousel);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Carousel).apply(this, arguments));
  }

  _createClass(Carousel, [{
    key: 'defaults',
    get: function get() {
      var defaults = _get(Object.getPrototypeOf(Carousel.prototype), 'defaults', this) || {};
      defaults.navigationAxis = 'horizontal';
      defaults.selectionAnimationEffect = 'slideWithGap';
      defaults.selectionRequired = true;
      return defaults;
    }
  }, {
    key: 'template',
    get: function get() {
      return '\n      <style>\n      :host {\n        display: -webkit-flex;\n        display: flex;\n        overflow: hidden;\n        position: relative;\n      }\n\n      #container ::content > * {\n        height: 100%;\n        object-fit: contain;\n        position: absolute;\n        width: 100%;\n        will-change: transform;\n      }\n      </style>\n\n      <div id="container" role="none">\n        <slot></slot>\n      </div>\n    ';
    }
  }]);

  return Carousel;
}(base);

customElements.define('basic-carousel', Carousel);
exports.default = Carousel;

},{"../../basic-component-mixins/src/ContentAsItems":10,"../../basic-component-mixins/src/DirectionSelection":12,"../../basic-component-mixins/src/DistributedChildrenAsContent":14,"../../basic-component-mixins/src/FractionalSelection":15,"../../basic-component-mixins/src/ItemsSelection":17,"../../basic-component-mixins/src/Keyboard":18,"../../basic-component-mixins/src/KeyboardDirection":19,"../../basic-component-mixins/src/ObserveContentChanges":22,"../../basic-component-mixins/src/SelectionAnimation":24,"../../basic-component-mixins/src/SelectionAriaActive":25,"../../basic-component-mixins/src/SwipeDirection":30,"../../basic-component-mixins/src/TargetInCollective":31,"../../basic-component-mixins/src/TrackpadDirection":34,"../../basic-element-base/src/ElementBase":40}],5:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ElementBase = require('../../basic-element-base/src/ElementBase');

var _ElementBase2 = _interopRequireDefault(_ElementBase);

var _OpenClose2 = require('../../basic-component-mixins/src/OpenClose');

var _OpenClose3 = _interopRequireDefault(_OpenClose2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A panel which can be expanded/collapsed with an animated transition.
 *
 * This component combines the OpenClose mixin and a simple CSS height
 * animation.
 *
 * This component handles only the duties of collapsing and expanding. It does
 * not provide a user interface for the user to trigger the change in state;
 * you must provide that user interface yourself.
 *
 * @extends ElementBase
 * @mixes OpenClose
 */

var CollapsiblePanel = function (_OpenClose) {
  _inherits(CollapsiblePanel, _OpenClose);

  function CollapsiblePanel() {
    _classCallCheck(this, CollapsiblePanel);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(CollapsiblePanel).apply(this, arguments));
  }

  _createClass(CollapsiblePanel, [{
    key: 'createdCallback',
    value: function createdCallback() {
      var _this2 = this;

      if (_get(Object.getPrototypeOf(CollapsiblePanel.prototype), 'createdCallback', this)) {
        _get(Object.getPrototypeOf(CollapsiblePanel.prototype), 'createdCallback', this).call(this);
      }
      this.$.overflow.addEventListener('transitionend', function () {
        if (!_this2.closed) {
          // Remove the hard-coded height we applied for the transition so that
          // the element will reflow correctly, e.g., on window resize.
          _this2.$.overflow.style.height = '';
        }
        // Ensure the animation only plays once. For some reason, Safari will show
        // the animation twice without this line, even though the render function
        // explicitly removes this class when it sets the old height. Neither
        // Chrome nor Firefox seem to need this line.
        _this2.classList.remove('showTransition');
      });
    }
  }, {
    key: 'render',
    value: function render(closing) {
      _get(Object.getPrototypeOf(CollapsiblePanel.prototype), 'render', this).call(this, closing);

      var naturalHeight = this.$.container.getBoundingClientRect().height;
      if (naturalHeight === 0) {
        // Most likely haven't had a chance to render yet.
        this.$.overflow.style.height = closing ? 0 : '';
        return;
      }

      // Without animating, set starting height of transition.
      this.classList.remove('showTransition');
      var oldHeight = closing ? naturalHeight : 0;
      this.$.overflow.style.height = oldHeight + 'px';

      // Force a relayout so that the starting height is applied.
      // This can be achieved by reading a property like offsetHeight.
      this.$.overflow.offsetHeight; // jshint ignore:line

      // Turn animation on, and ending height of transition.
      this.classList.add('showTransition');
      var newHeight = closing ? 0 : naturalHeight;
      this.$.overflow.style.height = newHeight + 'px';
    }
  }, {
    key: 'template',
    get: function get() {
      return '\n      <style>\n      :host {\n        display: block;\n        overflow: hidden;\n      }\n\n      :host(.showTransition) #overflow {\n        transition: height 0.2s;\n      }\n      </style>\n\n      <div id="overflow" role="none">\n        <div id="container" role="none">\n          <slot></slot>\n        </div>\n      </div>\n    ';
    }
  }]);

  return CollapsiblePanel;
}((0, _OpenClose3.default)(_ElementBase2.default));

customElements.define('basic-collapsible-panel', CollapsiblePanel);
exports.default = CollapsiblePanel;

},{"../../basic-component-mixins/src/OpenClose":23,"../../basic-element-base/src/ElementBase":40}],6:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Memoized map of attribute to property names.
var attributeToPropertyNames = {};

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
      key: "attributeChangedCallback",

      /*
       * Handle a change to the attribute with the given name.
       */
      value: function attributeChangedCallback(attributeName, oldValue, newValue) {
        if (_get(Object.getPrototypeOf(AttributeMarshalling.prototype), "attributeChangedCallback", this)) {
          _get(Object.getPrototypeOf(AttributeMarshalling.prototype), "attributeChangedCallback", this).call(this);
        }
        var propertyName = attributeToPropertyNames[attributeName];
        if (!propertyName) {
          // Convert and memoize.
          propertyName = attributeToPropertyName(attributeName);
          attributeToPropertyNames[attributeName] = propertyName;
        }
        // If the attribute name corresponds to a property name, set the property.
        // Ignore standard HTMLElement properties handled by the DOM.
        if (propertyName in this && !(propertyName in HTMLElement.prototype)) {
          this[propertyName] = newValue;
        }
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

},{}],7:[function(require,module,exports){
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
   * yourself, or use the [ItemsSelection](ItemsSelection.md) mixin.
   */

  var ClickSelection = function (_base) {
    _inherits(ClickSelection, _base);

    function ClickSelection() {
      _classCallCheck(this, ClickSelection);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(ClickSelection).apply(this, arguments));
    }

    _createClass(ClickSelection, [{
      key: 'createdCallback',
      value: function createdCallback() {
        var _this2 = this;

        if (_get(Object.getPrototypeOf(ClickSelection.prototype), 'createdCallback', this)) {
          _get(Object.getPrototypeOf(ClickSelection.prototype), 'createdCallback', this).call(this);
        }
        /*
         * REVIEW: Which event should we listen to here?
         *
         * The standard use for this mixin is in list boxes. List boxes don't
         * appear to be consistent with regard to whether they select on mousedown
         * or click/mouseup.
         */
        this.addEventListener('mousedown', function (event) {
          selectTarget(_this2, event.target);
          // Note: We don't call preventDefault here. The default behavior for
          // mousedown includes setting keyboard focus if the element doesn't
          // already have the focus, and we want to preserve that behavior.
          event.stopPropagation();
        });
      }

      // Default implementation. This will typically be handled by other mixins.

    }, {
      key: 'selectedIndex',
      get: function get() {
        return _get(Object.getPrototypeOf(ClickSelection.prototype), 'selectedIndex', this);
      },
      set: function set(index) {
        if ('selectedIndex' in base.prototype) {
          _set(Object.getPrototypeOf(ClickSelection.prototype), 'selectedIndex', index, this);
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

},{}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
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

},{"./createSymbol":35,"./toggleClass":38}],11:[function(require,module,exports){
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
var targetSymbol = (0, _createSymbol2.default)('target');

/* Exported function extends a base class with ContentFirstChildTarget. */

exports.default = function (base) {

  /**
   * Mixin that defines the target of a component — the element the component is
   * managing or somehow responsible for — as its first child.
   *
   * Some components serve to decorate or modify other elements. A common
   * pattern is to have one component wrap another, and have the outer, parent
   * component implicitly modify the child. This mixin facilitates this by
   * implicitly taking an element's first child as its "target".
   *
   * Example:
   *
   *     <outer-element>
   *       <inner-element></inner-element>
   *     </outer-element>
   *
   * If `outer-element` uses this mixin, then its `target` property will be
   * set to point to the `inner-element`, because that is its first child.
   *
   * This mixin expects a `content` property that returns the element's content.
   * You can implement that yourself, or use the
   * [DistributedChildrenAsContent](DistributedChildrenAsContent.md) mixin.
   *
   * This mixin can be combined with the
   * [TargetInCollective](TargetInCollective.md) mixin to have a component
   * participate in collective keyboard handling.
   */

  var ContentFirstChildTarget = function (_base) {
    _inherits(ContentFirstChildTarget, _base);

    function ContentFirstChildTarget() {
      _classCallCheck(this, ContentFirstChildTarget);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(ContentFirstChildTarget).apply(this, arguments));
    }

    _createClass(ContentFirstChildTarget, [{
      key: 'contentChanged',
      value: function contentChanged() {
        if (_get(Object.getPrototypeOf(ContentFirstChildTarget.prototype), 'contentChanged', this)) {
          _get(Object.getPrototypeOf(ContentFirstChildTarget.prototype), 'contentChanged', this).call(this);
        }
        var content = this.content;
        var target = content && content[0];
        // A component using a target will likely do a bunch of work when the
        // target changes, so only set the target if it's actually changed.
        if (target && target !== this.target) {
          this.target = target;
        }
      }

      /**
       * Gets/sets the current target of the component.
       *
       * @type {HTMLElement}
       */

    }, {
      key: 'target',
      get: function get() {
        return this[targetSymbol];
      },
      set: function set(element) {
        if ('target' in base.prototype) {
          _set(Object.getPrototypeOf(ContentFirstChildTarget.prototype), 'target', element, this);
        }
        this[targetSymbol] = element;
      }
    }]);

    return ContentFirstChildTarget;
  }(base);

  return ContentFirstChildTarget;
};

},{"./createSymbol":35}],12:[function(require,module,exports){
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

},{}],13:[function(require,module,exports){
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

},{}],14:[function(require,module,exports){
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

},{}],15:[function(require,module,exports){
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

},{"./createSymbol":35}],16:[function(require,module,exports){
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

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Generic).apply(this, arguments));
    }

    _createClass(Generic, [{
      key: 'createdCallback',
      value: function createdCallback() {
        if (_get(Object.getPrototypeOf(Generic.prototype), 'createdCallback', this)) {
          _get(Object.getPrototypeOf(Generic.prototype), 'createdCallback', this).call(this);
        }

        // Set defaults.
        if (typeof this.generic === 'undefined') {
          this.generic = this.defaults.generic;
        }
      }
    }, {
      key: 'defaults',
      get: function get() {
        var defaults = _get(Object.getPrototypeOf(Generic.prototype), 'defaults', this) || {};
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
        if ('generic' in base.prototype) {
          _set(Object.getPrototypeOf(Generic.prototype), 'generic', value, this);
        }
        // We roll our own attribute setting so that an explicitly false value
        // shows up as generic="false".
        if (typeof value === 'string') {
          value = value !== 'false';
        }
        this[genericSymbol] = value;
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

},{"./createSymbol":35}],17:[function(require,module,exports){
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

},{"./createSymbol":35,"./microtask":36}],18:[function(require,module,exports){
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

},{"./createSymbol":35}],19:[function(require,module,exports){
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

      return _possibleConstructorReturn(this, Object.getPrototypeOf(KeyboardDirection).apply(this, arguments));
    }

    _createClass(KeyboardDirection, [{
      key: 'createdCallback',
      value: function createdCallback() {
        if (_get(Object.getPrototypeOf(KeyboardDirection.prototype), 'createdCallback', this)) {
          _get(Object.getPrototypeOf(KeyboardDirection.prototype), 'createdCallback', this).call(this);
        }

        // Set defaults.
        if (typeof this.navigationAxis === 'undefined') {
          this.navigationAxis = this.defaults.navigationAxis;
        }
      }
    }, {
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
      }
    }]);

    return KeyboardDirection;
  }(base);

  return KeyboardDirection;
};

},{"./createSymbol":35}],20:[function(require,module,exports){
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

      return _possibleConstructorReturn(this, Object.getPrototypeOf(KeyboardPagedSelection).apply(this, arguments));
    }

    _createClass(KeyboardPagedSelection, [{
      key: 'keydown',
      value: function keydown(event) {
        var handled = undefined;
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
        return handled || _get(Object.getPrototypeOf(KeyboardPagedSelection.prototype), 'keydown', this) && _get(Object.getPrototypeOf(KeyboardPagedSelection.prototype), 'keydown', this).call(this, event);
      }

      /**
       * Scroll down one page.
       */

    }, {
      key: 'pageDown',
      value: function pageDown() {
        if (_get(Object.getPrototypeOf(KeyboardPagedSelection.prototype), 'pageDown', this)) {
          _get(Object.getPrototypeOf(KeyboardPagedSelection.prototype), 'pageDown', this).call(this);
        }
        return scrollOnePage(this, true);
      }

      /**
       * Scroll up one page.
       */

    }, {
      key: 'pageUp',
      value: function pageUp() {
        if (_get(Object.getPrototypeOf(KeyboardPagedSelection.prototype), 'pageUp', this)) {
          _get(Object.getPrototypeOf(KeyboardPagedSelection.prototype), 'pageUp', this).call(this);
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
        return 'scrollTarget' in base.prototype ? _get(Object.getPrototypeOf(KeyboardPagedSelection.prototype), 'scrollTarget', this) : this;
      },
      set: function set(element) {
        if ('scrollTarget' in base.prototype) {
          _set(Object.getPrototypeOf(KeyboardPagedSelection.prototype), 'scrollTarget', element, this);
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
  var item = undefined;
  var itemIndex = start;
  var itemTop = undefined;
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
  var newIndex = undefined;
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

},{}],21:[function(require,module,exports){
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

      return _possibleConstructorReturn(this, Object.getPrototypeOf(KeyboardPrefixSelection).apply(this, arguments));
    }

    _createClass(KeyboardPrefixSelection, [{
      key: 'keydown',

      // TODO: If the set of items is changed, reset the prefix.
      // itemsChanged() {
      //   this[itemTextContentsSymbol] = null;
      //   resetTypedPrefix(this);
      // }

      // TODO: If the selection is changed by some other means (e.g., arrow keys)
      // other than prefix typing, then that act should reset the prefix.

      value: function keydown(event) {
        var handled = undefined;
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
        return handled || _get(Object.getPrototypeOf(KeyboardPrefixSelection.prototype), 'keydown', this) && _get(Object.getPrototypeOf(KeyboardPrefixSelection.prototype), 'keydown', this).call(this, event);
      }

      /**
       * Select the first item whose text content begins with the given prefix.
       *
       * @param prefix [String] The prefix string to search for
       */

    }, {
      key: 'selectItemWithTextPrefix',
      value: function selectItemWithTextPrefix(prefix) {
        if (_get(Object.getPrototypeOf(KeyboardPrefixSelection.prototype), 'selectItemWithTextPrefix', this)) {
          _get(Object.getPrototypeOf(KeyboardPrefixSelection.prototype), 'selectItemWithTextPrefix', this).call(this, prefix);
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

},{"./createSymbol":35}],22:[function(require,module,exports){
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

},{"./createSymbol":35,"./microtask":36}],23:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

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
var closedSymbol = (0, _createSymbol2.default)('closed');

/* Exported function extends a base class with OpenClose. */

exports.default = function (base) {

  /**
   * Mixin which adds close/open semantics.
   *
   * This mixin does not produce any user-visible effects. Instead it applies
   * a `basic-closed` CSS class to the component host if the host is
   * closed, and a `basic-opened` class if opened. It also invokes a `render`
   * function that can be overridden to apply custom effects.
   */

  var OpenClose = function (_base) {
    _inherits(OpenClose, _base);

    function OpenClose() {
      _classCallCheck(this, OpenClose);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(OpenClose).apply(this, arguments));
    }

    _createClass(OpenClose, [{
      key: 'attachedCallback',
      value: function attachedCallback() {
        if (_get(Object.getPrototypeOf(OpenClose.prototype), 'attachedCallback', this)) {
          _get(Object.getPrototypeOf(OpenClose.prototype), 'attachedCallback', this).call(this);
        }
        this.render(this.closed);
      }
    }, {
      key: 'createdCallback',
      value: function createdCallback() {
        if (_get(Object.getPrototypeOf(OpenClose.prototype), 'createdCallback', this)) {
          _get(Object.getPrototypeOf(OpenClose.prototype), 'createdCallback', this).call(this);
        }

        // Set defaults.
        if (typeof this.closed === 'undefined') {
          this.closed = this.defaults.closed;
        }
      }

      /**
       * Close the component.
       *
       * This is equivalent to setting the `closed` property to true.
       */

    }, {
      key: 'close',
      value: function close() {
        this.closed = true;
      }

      /**
       * True if the component is curently closed.
       *
       * @type {boolean}
       * @default false
       */

    }, {
      key: 'open',

      /**
       * Open the component.
       *
       * This is equivalent to setting the `closed` property to false.
       */
      value: function open() {
        this.closed = false;
      }

      /**
       * Perform custom rendering of the close/open transition.
       *
       * You can override this method to perform custom effects. If you do so,
       * be sure to invoke `super()` in your implementation to get the baseline
       * behavior.
       *
       * @param {boolean} closing - True if the component is being closed,
       *        false if it's being opened.
       */

    }, {
      key: 'render',
      value: function render(closing) {
        (0, _toggleClass2.default)(this, 'basic-closed', closing);
        (0, _toggleClass2.default)(this, 'basic-opened', !closing);
        this.setAttribute('aria-expanded', !closing);
      }

      /**
       * Toggle the component's open/closed state.
       */

    }, {
      key: 'toggle',
      value: function toggle() {
        this.closed = !this.closed;
      }
    }, {
      key: 'closed',
      get: function get() {
        return this[closedSymbol];
      },
      set: function set(value) {
        if ('closed' in base.prototype) {
          _set(Object.getPrototypeOf(OpenClose.prototype), 'closed', value, this);
        }
        if (this[closedSymbol] !== value) {
          this[closedSymbol] = value;
          this.render(value);

          var event = new CustomEvent('closed-changed');
          this.dispatchEvent(event);
        }
      }
    }, {
      key: 'defaults',
      get: function get() {
        var defaults = _get(Object.getPrototypeOf(OpenClose.prototype), 'defaults', this) || {};
        defaults.closed = false;
        return defaults;
      }
    }]);

    return OpenClose;
  }(base);

  return OpenClose;
};

},{"./createSymbol":35,"./toggleClass":38}],24:[function(require,module,exports){
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
var animationSymbol = (0, _createSymbol2.default)('animation');
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

},{"./FractionalSelection":15,"./createSymbol":35}],25:[function(require,module,exports){
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

},{}],26:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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
   * This mixin expects an `applySelection` method to be called on an item when
   * its selected state changes. You can use the
   * [ItemsSelection](ItemsSelection.md) mixin for that purpose.
   */

  var SelectionHighlight = function (_base) {
    _inherits(SelectionHighlight, _base);

    function SelectionHighlight() {
      _classCallCheck(this, SelectionHighlight);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(SelectionHighlight).apply(this, arguments));
    }

    _createClass(SelectionHighlight, [{
      key: 'applySelection',
      value: function applySelection(item, selected) {
        if (_get(Object.getPrototypeOf(SelectionHighlight.prototype), 'applySelection', this)) {
          _get(Object.getPrototypeOf(SelectionHighlight.prototype), 'applySelection', this).call(this, item, selected);
        }
        item.style.backgroundColor = selected ? 'highlight' : '';
        item.style.color = selected ? 'highlighttext' : '';
      }
    }]);

    return SelectionHighlight;
  }(base);

  return SelectionHighlight;
};

},{}],27:[function(require,module,exports){
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
   * [ItemsSelection](ItemsSelection.md) mixin.
   */

  var SelectionInView = function (_base) {
    _inherits(SelectionInView, _base);

    function SelectionInView() {
      _classCallCheck(this, SelectionInView);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(SelectionInView).apply(this, arguments));
    }

    _createClass(SelectionInView, [{
      key: 'attachedCallback',
      value: function attachedCallback() {
        if (_get(Object.getPrototypeOf(SelectionInView.prototype), 'attachedCallback', this)) {
          _get(Object.getPrototypeOf(SelectionInView.prototype), 'attachedCallback', this).call(this);
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
        if (_get(Object.getPrototypeOf(SelectionInView.prototype), 'scrollItemIntoView', this)) {
          _get(Object.getPrototypeOf(SelectionInView.prototype), 'scrollItemIntoView', this).call(this);
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
        return _get(Object.getPrototypeOf(SelectionInView.prototype), 'selectedItem', this);
      },
      set: function set(item) {
        if ('selectedItem' in base.prototype) {
          _set(Object.getPrototypeOf(SelectionInView.prototype), 'selectedItem', item, this);
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
        return 'scrollTarget' in base.prototype ? _get(Object.getPrototypeOf(SelectionInView.prototype), 'scrollTarget', this) : this;
      },
      set: function set(element) {
        if ('scrollTarget' in base.prototype) {
          _set(Object.getPrototypeOf(SelectionInView.prototype), 'scrollTarget', element, this);
        }
      }
    }]);

    return SelectionInView;
  }(base);

  return SelectionInView;
};

},{}],28:[function(require,module,exports){
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

},{}],29:[function(require,module,exports){
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

},{}],30:[function(require,module,exports){
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
            if (_this2[multiTouchSymbol]) {
              return;
            } else if (event.touches.length === 1) {
              var clientX = event.changedTouches[0].clientX;
              var clientY = event.changedTouches[0].clientY;
              touchStart(_this2, clientX, clientY);
            } else {
              _this2[multiTouchSymbol] = true;
            }
          });
          this.addEventListener('touchmove', function (event) {
            if (!_this2[multiTouchSymbol] && event.touches.length === 1) {
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
              if (!_this2[multiTouchSymbol]) {
                // Single-touch swipe has finished.
                var clientX = event.changedTouches[0].clientX;
                var clientY = event.changedTouches[0].clientY;
                touchEnd(_this2, clientX, clientY);
              }
              _this2[multiTouchSymbol] = false;
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
        return this[travelFractionSymbol];
      },
      set: function set(value) {
        if ('travelFraction' in base.prototype) {
          _set(Object.getPrototypeOf(SwipeDirection.prototype), 'travelFraction', value, this);
        }
        this[travelFractionSymbol] = value;
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

},{"./createSymbol":35}],31:[function(require,module,exports){
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

},{"./Collective":8}],32:[function(require,module,exports){
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
var itemsChangedListenerSymbol = (0, _createSymbol2.default)('itemsChangedListener');
var selectedItemChangedListenerSymbol = (0, _createSymbol2.default)('selectedItemChangedListener');

/* Exported function extends a base class with TargetSelection. */

exports.default = function (base) {

  /**
   * Mixin which allows a component to delegate its own selection semantics to a
   * target element.
   *
   * This is useful when defining components that act as optional features for a
   * component that acts like a list. See basic-arrow-selection and
   * basic-page-dots for examples of components used as optional features for
   * components like basic-carousel. A typical usage might be:
   *
   *     <basic-arrow-selection>
   *       <basic-carousel>
   *         ... images, etc. ...
   *       </basic-carousel>
   *     </basic-arrow-selection>
   *
   * Because basic-arrow-selection uses the
   * [TargetSelection](TargetSelection.md) mixin, it exposes members to access a
   * selection: `selectNext`, `selectPrevious`, `selectedIndex`, etc. These are
   * all delegated to the child component (here, a basic-carousel).
   *
   * This mixin expects a `target` property to be set to the element actually
   * managing the selection. You can set that property yourself, or you can use
   * the [ContentFirstChildTarget](ContentFirstChildTarget.md) mixin to
   * implicitly take the component's first child as the target. This is what
   * basic-arrow-selection (above) does.
   */

  var TargetSelection = function (_base) {
    _inherits(TargetSelection, _base);

    function TargetSelection() {
      _classCallCheck(this, TargetSelection);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(TargetSelection).apply(this, arguments));
    }

    _createClass(TargetSelection, [{
      key: 'itemsChanged',

      /**
       * This method is invoked when the underlying contents change. It is also
       * invoked on component initialization – since the items have "changed" from
       * being nothing.
       */
      value: function itemsChanged() {
        if (_get(Object.getPrototypeOf(TargetSelection.prototype), 'itemsChanged', this)) {
          _get(Object.getPrototypeOf(TargetSelection.prototype), 'itemsChanged', this).call(this);
        }
        this.dispatchEvent(new CustomEvent('items-changed'));
      }
    }, {
      key: 'selectedItemChanged',

      // This method exists so wrapping components can handle a change in the
      // selection without potentially re-invoking the selectedItem setter. This
      // is kind of unsatisfying, though. It'd be nicer to let such components
      // just implement the getter/setter for selectedItem, but have a way to
      // know whether they need to also that property getter/setter for the target
      // component.
      value: function selectedItemChanged() {
        if (_get(Object.getPrototypeOf(TargetSelection.prototype), 'selectedItemChanged', this)) {
          _get(Object.getPrototypeOf(TargetSelection.prototype), 'selectedItemChanged', this).call(this);
        }
        this.dispatchEvent(new CustomEvent('selected-item-changed'));
      }

      /**
       * True if selection navigations wrap from last to first, and vice versa.
       *
       * @type {boolean}
       * @default {false}
       */

    }, {
      key: 'items',

      /**
       * The current set of items in the list.
       *
       * @type {HTMLElement[]}
       */
      get: function get() {
        var target = this.target;
        var items = target && target.items;
        return items || [];
      }
    }, {
      key: 'selectedFraction',
      get: function get() {
        var target = this.target;
        return target && target.selectedFraction;
      },
      set: function set(fraction) {
        if ('selectedFraction' in base.prototype) {
          _set(Object.getPrototypeOf(TargetSelection.prototype), 'selectedFraction', fraction, this);
        }
        var target = this.target;
        if (target && target.selectedFraction !== fraction) {
          target.selectedFraction = fraction;
        }
      }

      /**
       * The currently selected item, or null if there is no selection.
       *
       * @type {HTMLElement}
       */

    }, {
      key: 'selectedItem',
      get: function get() {
        var target = this.target;
        return target && target.selectedItem;
      },
      set: function set(item) {
        if ('selectedItem' in base.prototype) {
          _set(Object.getPrototypeOf(TargetSelection.prototype), 'selectedItem', item, this);
        }
        var target = this.target;
        if (target) {
          target.selectedItem = item;
        }
      }
    }, {
      key: 'selectionWraps',
      get: function get() {
        var target = this.target;
        return target && target.selectionWraps;
      },
      set: function set(value) {
        if ('selectionWraps' in base.prototype) {
          _set(Object.getPrototypeOf(TargetSelection.prototype), 'selectionWraps', value, this);
        }
        var target = this.target;
        if (target) {
          target.selectionWraps = value;
        }
      }

      /**
       * Gets/sets the target element to which this component will delegate
       * selection actions.
       *
       * @type {HTMLElement}
       */

    }, {
      key: 'target',
      get: function get() {
        return _get(Object.getPrototypeOf(TargetSelection.prototype), 'target', this);
      },
      set: function set(element) {
        var _this2 = this;

        if ('target' in base.prototype) {
          _set(Object.getPrototypeOf(TargetSelection.prototype), 'target', element, this);
        }
        if (this[itemsChangedListenerSymbol]) {
          this.removeEventListener('items-changed', this[itemsChangedListenerSymbol]);
        }
        if (this[selectedItemChangedListenerSymbol]) {
          this.removeEventListener('selected-item-changed', this[selectedItemChangedListenerSymbol]);
        }
        this[itemsChangedListenerSymbol] = element.addEventListener('items-changed', function (event) {
          _this2.itemsChanged();
        });
        this[selectedItemChangedListenerSymbol] = element.addEventListener('selected-item-changed', function (event) {
          // REVIEW: Components applying TargetSelection both listen to this
          // event (on the target), and raise it themselves. In theory, they're
          // expected to *not* catch the events they raise themselves, but Chrome
          // (at least) appears to violate that expectation. That is, it's
          // possible to have event.target === this. More confusingly, the guard
          // below, which is intended to avoid recursive calls to
          // selectedItemChanged, doesn't work as expected. Even if the debugger
          // shows event.target === this, the contents of the "if" statement will
          // be executed.
          if (event.target !== _this2) {
            // Let the component know the target's selection changed, but without
            // re-invoking the selectIndex/selectedItem setter.
            _this2.selectedItemChanged();
          }
        });
        // Force initial refresh.
        this.itemsChanged();
      }
    }]);

    return TargetSelection;
  }(base);

  return TargetSelection;
};

},{"./createSymbol":35}],33:[function(require,module,exports){
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

var playingSymbol = (0, _createSymbol2.default)('playing');
var selectionTimerDurationSymbol = (0, _createSymbol2.default)('selectionTimerDuration');
var timerTimeoutSymbol = (0, _createSymbol2.default)('timerTimeout');

/* Exported function extends a base class with TimerSelection. */

exports.default = function (base) {

  /**
   * Mixin which provides for automatic timed changes in selection.
   *
   * This mixin is useful for creating slideshow-like elements.
   *
   * This mixin expects the component to define an `items` property, as well as
   * `selectFirst` and `selectNext` methods. You can implement those yourself,
   * or use the [ContentAsItems](ContentAsItems.md) and
   * [ItemsSelection](ItemsSelection.md) mixins.
   */

  var TimerSelection = function (_base) {
    _inherits(TimerSelection, _base);

    function TimerSelection() {
      _classCallCheck(this, TimerSelection);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(TimerSelection).apply(this, arguments));
    }

    _createClass(TimerSelection, [{
      key: 'contentChanged',
      value: function contentChanged() {
        if (_get(Object.getPrototypeOf(TimerSelection.prototype), 'contentChanged', this)) {
          _get(Object.getPrototypeOf(TimerSelection.prototype), 'contentChanged', this).call(this);
        }
        restartTimer(this);
      }
    }, {
      key: 'createdCallback',
      value: function createdCallback() {
        if (_get(Object.getPrototypeOf(TimerSelection.prototype), 'createdCallback', this)) {
          _get(Object.getPrototypeOf(TimerSelection.prototype), 'createdCallback', this).call(this);
        }

        // Set defaults.
        if (typeof this.playing === 'undefined') {
          this.playing = this.defaults.playing;
        }
        if (typeof this.selectionTimerDuration === 'undefined') {
          this.selectionTimerDuration = this.defaults.selectionTimerDuration;
        }
      }
    }, {
      key: 'play',

      /**
       * Begin automatic progression of the selection.
       */
      value: function play() {
        if (_get(Object.getPrototypeOf(TimerSelection.prototype), 'play', this)) {
          _get(Object.getPrototypeOf(TimerSelection.prototype), 'play', this).call(this);
        }
        startTimer(this);
        this[playingSymbol] = true;
      }

      /**
       * Pause automatic progression of the selection.
       */

    }, {
      key: 'pause',
      value: function pause() {
        if (_get(Object.getPrototypeOf(TimerSelection.prototype), 'pause', this)) {
          _get(Object.getPrototypeOf(TimerSelection.prototype), 'pause', this).call(this);
        }
        clearTimer(this);
        this[playingSymbol] = false;
      }

      /**
       * True if the selection is being automatically advanced.
       *
       * @type {boolean}
       * @default false
       */

    }, {
      key: 'selectedItemChanged',

      // In case this mixin is being used with TargetSelection.
      value: function selectedItemChanged() {
        if (_get(Object.getPrototypeOf(TimerSelection.prototype), 'selectedItemChanged', this)) {
          _get(Object.getPrototypeOf(TimerSelection.prototype), 'selectedItemChanged', this).call(this);
        }
        restartTimer(this);
      }

      /**
       * The time in milliseconds that will elapse after the selection changes
       * before the selection will be advanced to the next item in the list.
       *
       * @type {number} - Time in milliseconds
       * @default 1000 (1 second)
       */

    }, {
      key: 'defaults',
      get: function get() {
        var defaults = _get(Object.getPrototypeOf(TimerSelection.prototype), 'defaults', this) || {};
        defaults.playing = false;
        defaults.selectionTimerDuration = 1000;
        return defaults;
      }
    }, {
      key: 'playing',
      get: function get() {
        return this[playingSymbol];
      },
      set: function set(playing) {
        if ('playing' in base.prototype) {
          _set(Object.getPrototypeOf(TimerSelection.prototype), 'playing', playing, this);
        }
        playing = String(playing) === 'true'; // Cast to boolean
        if (playing !== this[playingSymbol]) {
          if (playing) {
            this.play();
          } else {
            this.pause();
          }
        }
      }

      /*
       * When the selected item changes (because of something this mixin did, or
       * was changed by an outside agent like the user), we wait before advancing
       * to the next item. By triggering the next item this way, we implicitly get
       * a desirable behavior: if the user changes the selection (e.g., in a
       * carousel), we let them see that selection state for a while before
       * advancing the selection ourselves.
       */

    }, {
      key: 'selectedItem',
      get: function get() {
        return _get(Object.getPrototypeOf(TimerSelection.prototype), 'selectedItem', this);
      },
      set: function set(item) {
        if ('selectedItem' in base.prototype) {
          _set(Object.getPrototypeOf(TimerSelection.prototype), 'selectedItem', item, this);
        }
        restartTimer(this);
      }
    }, {
      key: 'selectionTimerDuration',
      get: function get() {
        return this[selectionTimerDurationSymbol];
      },
      set: function set(value) {
        if ('selectionTimerDuration' in base.prototype) {
          _set(Object.getPrototypeOf(TimerSelection.prototype), 'selectionTimerDuration', value, this);
        }
        this[selectionTimerDurationSymbol] = parseInt(value);
      }
    }]);

    return TimerSelection;
  }(base);

  return TimerSelection;
};

function clearTimer(element) {
  if (element[timerTimeoutSymbol]) {
    clearTimeout(element[timerTimeoutSymbol]);
    element[timerTimeoutSymbol] = null;
  }
}

function restartTimer(element) {
  clearTimer(element);
  if (element.playing && element.items && element.items.length > 0) {
    startTimer(element);
  }
}

function startTimer(element) {
  // If play() is called more than once, cancel any existing timer.
  clearTimer(element);
  element[timerTimeoutSymbol] = setTimeout(function () {
    selectNextWithWrap(element);
  }, element.selectionTimerDuration);
}

// Select the next item, wrapping to first item if necessary.
function selectNextWithWrap(element) {
  var items = element.items;
  if (items && items.length > 0) {
    if (element.selectedIndex == null || element.selectedIndex === items.length - 1) {
      element.selectFirst();
    } else {
      element.selectNext();
    }
  }
}

},{"./createSymbol":35}],34:[function(require,module,exports){
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

},{"../../basic-component-mixins/src/createSymbol":35}],35:[function(require,module,exports){
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

},{}],36:[function(require,module,exports){
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

},{}],37:[function(require,module,exports){
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

},{}],38:[function(require,module,exports){
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

},{}],39:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createSymbol = require('../../basic-component-mixins/src/createSymbol');

var _createSymbol2 = _interopRequireDefault(_createSymbol);

var _WrappedStandardElement = require('../../basic-wrapped-standard-element/src/WrappedStandardElement');

var _WrappedStandardElement2 = _interopRequireDefault(_WrappedStandardElement);

var _toggleClass = require('../../basic-component-mixins/src/toggleClass');

var _toggleClass2 = _interopRequireDefault(_toggleClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Symbols for private data members on an element.
var areaLinkSymbol = (0, _createSymbol2.default)('areaLink');

/**
 * An anchor (link) that highlights itself when its destination matches the
 * current location.
 *
 * [Live demo](http://basicwebcomponents.org/basic-web-components/packages/basic-current-anchor/)
 *
 * Such a link commonly appears in toolbars, side bars, and other navigation
 * elements. In these situations, you generally want the user to understand what
 * page or area the user is already on.
 *
 * When the link is current — when it points to the current location — the
 * link will have the CSS `current` class applied to it, and its `current`
 * property will be true.
 *
 * Note: one limitation of this component is that, by default, the link does
 * *not* show the standard link color (usually blue) and text decoration
 * (underline). However, in navigation elements like toolbars, you often will
 * want to explicitly specific link colors anyway, e.g., to reflect your
 * application's visual style and brand.
 */

var CurrentAnchor = function (_WrappedStandardEleme) {
  _inherits(CurrentAnchor, _WrappedStandardEleme);

  function CurrentAnchor() {
    _classCallCheck(this, CurrentAnchor);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(CurrentAnchor).apply(this, arguments));
  }

  _createClass(CurrentAnchor, [{
    key: 'attachedCallback',
    value: function attachedCallback() {
      if (_get(Object.getPrototypeOf(CurrentAnchor.prototype), 'attachedCallback', this)) {
        _get(Object.getPrototypeOf(CurrentAnchor.prototype), 'attachedCallback', this).call(this);
      }
      refresh(this);
    }
  }, {
    key: 'createdCallback',
    value: function createdCallback() {
      var _this2 = this;

      if (_get(Object.getPrototypeOf(CurrentAnchor.prototype), 'createdCallback', this)) {
        _get(Object.getPrototypeOf(CurrentAnchor.prototype), 'createdCallback', this).call(this);
      }

      window.addEventListener('popstate', function (event) {
        refresh(_this2);
      });

      // Stupid Edge/IE "support" popstate, but don't fire it on hashchange.
      // So we have to listen for hashchange as well, with the result that a
      // standards-compliant browser may end up refreshing the link twice.
      window.addEventListener('hashchange', function (event) {
        refresh(_this2);
      });

      // Set defaults.
      if (typeof this.areaLink === 'undefined') {
        this.areaLink = this.defaults.areaLink;
      }
    }

    /**
     * True if the link's destination matches the current page location.
     *
     * If this is true, the element will have an `current` CSS class applied to it.
     *
     * @type {boolean}
     */

  }, {
    key: 'areaLink',

    /**
     * True if the link points to an area within a site, not just a single page.
     *
     * If true, the matching rule to determine whether the link is current changes:
     * an area link is considered to be current if the link's destination forms a
     * prefix of the current location (instead of matching the complete URL).
     *
     * @type {boolean}
     */
    get: function get() {
      return this[areaLinkSymbol];
    },
    set: function set(value) {
      // Cast boolean or string values to boolean.
      this[areaLinkSymbol] = String(value) === 'true';
      refresh(this);
    }
  }, {
    key: 'current',
    get: function get() {
      return this.classList.contains('current');
    },
    set: function set(value) {
      (0, _toggleClass2.default)(this, 'current', value);
      this.dispatchEvent(new CustomEvent('current-changed'));
    }
  }, {
    key: 'defaults',
    get: function get() {
      var defaults = _get(Object.getPrototypeOf(CurrentAnchor.prototype), 'defaults', this) || {};
      defaults.areaLink = false;
      return defaults;
    }

    // Augment href implementation so that changing href checks the active status.

  }, {
    key: 'href',
    get: function get() {
      return _get(Object.getPrototypeOf(CurrentAnchor.prototype), 'href', this);
    },
    set: function set(value) {
      _set(Object.getPrototypeOf(CurrentAnchor.prototype), 'href', value, this);
      refresh(this);
    }
  }, {
    key: 'template',
    get: function get() {
      // Reset styles so that color can be specified from the outside without
      // having to define a CSS variable.
      return '\n      <style>\n      :host {\n        display: inline-block;\n      }\n\n      #inner {\n        color: inherit;\n        display: inline-block;\n        text-decoration: inherit;\n      }\n      </style>\n      <a id="inner"><slot></slot></a>';
    }
  }]);

  return CurrentAnchor;
}(_WrappedStandardElement2.default.wrap('a'));

// Update the current status of the element based on the current location.

function refresh(element) {
  var url = window.location.href;
  var match = undefined;
  if (element.areaLink) {
    // Match prefix
    var prefix = element.href;
    // If prefix doesn't end in slash, add a slash.
    // We want to avoid matching in the middle of a folder name.
    if (prefix.length < url.length && prefix.substr(-1) !== '/') {
      prefix += '/';
    }
    match = url.substr(0, prefix.length) === prefix;
  } else {
    // Match whole path
    match = url === element.href;
  }
  element.current = match;
}

customElements.define('basic-current-anchor', CurrentAnchor);

},{"../../basic-component-mixins/src/createSymbol":35,"../../basic-component-mixins/src/toggleClass":38,"../../basic-wrapped-standard-element/src/WrappedStandardElement":54}],40:[function(require,module,exports){
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

},{"../../basic-component-mixins/src/AttributeMarshalling":6,"../../basic-component-mixins/src/Composable":9,"../../basic-component-mixins/src/DistributedChildren":13,"../../basic-component-mixins/src/ShadowElementReferences":28,"../../basic-component-mixins/src/ShadowTemplate":29}],41:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createSymbol = require('../../basic-component-mixins/src/createSymbol');

var _createSymbol2 = _interopRequireDefault(_createSymbol);

var _ElementBase2 = require('../../basic-element-base/src/ElementBase');

var _ElementBase3 = _interopRequireDefault(_ElementBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Symbols for private data members on an element.
var fadeColorSymbol = (0, _createSymbol2.default)('fadeColor');

/**
 * Fades out content that overflows so the user knows there's more.
 *
 * This component doesn't handle interactivity.
 *
 * The component needs to know the color it should fade to, which it tries to
 * infer from the background color. In some situations, this may not work, in
 * which case you can explicitly set the fadeColor attribute.
 *
 * The component currently always displays the fade, even if the component's
 * content is short enough to fit completely in view.
 *
 * @extends ElementBase
 */

var FadeOverflow = function (_ElementBase) {
  _inherits(FadeOverflow, _ElementBase);

  function FadeOverflow() {
    _classCallCheck(this, FadeOverflow);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(FadeOverflow).apply(this, arguments));
  }

  _createClass(FadeOverflow, [{
    key: 'attachedCallback',
    value: function attachedCallback() {
      if (_get(Object.getPrototypeOf(FadeOverflow.prototype), 'attachedCallback', this)) {
        _get(Object.getPrototypeOf(FadeOverflow.prototype), 'attachedCallback', this).call(this);
      }
      if (this.fadeColor == null) {
        this.refresh();
      }
    }
  }, {
    key: 'createdCallback',
    value: function createdCallback() {
      if (_get(Object.getPrototypeOf(FadeOverflow.prototype), 'createdCallback', this)) {
        _get(Object.getPrototypeOf(FadeOverflow.prototype), 'createdCallback', this).call(this);
      }
    }

    /**
     * The color of the fade.
     *
     * The fade color should match the background color. The component does its
     * best to infer the background color, but in some situations, that may not
     * work. In those cases, you can manually identify the background color.
     * This should be a solid color.
     *
     * @attribute fadeColor
     * @default white
     */

  }, {
    key: 'refresh',

    /**
     * Infer the fade color from background color. If you have programmatically
     * changed the color behind the component, you can invoke this method to have
     * the component try to pick up the new background color.
     */
    value: function refresh() {
      // TODO: Automatically hide the fade if all the content can be seen.
      this.fadeColor = findBackgroundColor(this);
    }

    /**
     * True if the component should show the fade to the background color.
     *
     * @type {boolean}
     * @default true
     */

  }, {
    key: 'fadeColor',
    get: function get() {
      return this[fadeColorSymbol];
    },
    set: function set(value) {
      this[fadeColorSymbol] = value;
      if (value) {
        var rgb = extractRgbValues(value);
        if (rgb) {
          var fadeColorTransparent = 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',0)';
          var gradient = 'linear-gradient(' + fadeColorTransparent + ' 0%, ' + value + ' 100%)';
          this.$.fade.style.backgroundImage = gradient;
        }
      }
    }
  }, {
    key: 'showFade',
    get: function get() {
      return this.$.fade.style.display !== 'none';
    },
    set: function set(value) {
      this.$.fade.style.display = value ? '' : 'none';
    }
  }, {
    key: 'template',
    get: function get() {
      return '\n      <style>\n      :host {\n        display: block;\n        position: relative;\n        overflow: hidden;\n      }\n\n      #fade {\n        bottom: 0;\n        height: 3em;\n        max-height: 50%;\n        pointer-events: none; /* Lets user interact with content through the fade. */\n        position: absolute;\n        width: 100%;\n      }\n      </style>\n\n      <div id="fade"></div>\n      <slot></slot>\n    ';
    }
  }]);

  return FadeOverflow;
}(_ElementBase3.default);

// Return the background color of the given element. If the color is
// "transparent" (the default in Mozilla and IE) or "rgba(0, 0, 0, 0)" (the
// default transparent value in Blink and Webkit), walk up the parent chain
// until a non-transparent color is found.

function findBackgroundColor(element) {
  if (element == null || typeof element.style === 'undefined') {
    // This element has no background, assume white.
    return 'rgb(255,255,255)';
  }
  var backgroundColor = getComputedStyle(element).backgroundColor;
  if (backgroundColor === 'transparent' || backgroundColor === 'rgba(0, 0, 0, 0)') {
    return findBackgroundColor(element.parentNode);
  } else {
    return backgroundColor;
  }
}

// Return the individual RGB values from a CSS color string.
function extractRgbValues(rgbString) {
  var rgbRegex = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*[\d\.]+\s*)?\)/;
  var match = rgbRegex.exec(rgbString);
  if (match) {
    return {
      r: parseInt(match[1]),
      g: parseInt(match[2]),
      b: parseInt(match[3])
    };
  } else {
    return null;
  }
}

customElements.define('basic-fade-overflow', FadeOverflow);
exports.default = FadeOverflow;

},{"../../basic-component-mixins/src/createSymbol":35,"../../basic-element-base/src/ElementBase":40}],42:[function(require,module,exports){
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

var _ClickSelection = require('../../basic-component-mixins/src/ClickSelection');

var _ClickSelection2 = _interopRequireDefault(_ClickSelection);

var _ContentAsItems = require('../../basic-component-mixins/src/ContentAsItems');

var _ContentAsItems2 = _interopRequireDefault(_ContentAsItems);

var _DirectionSelection = require('../../basic-component-mixins/src/DirectionSelection');

var _DirectionSelection2 = _interopRequireDefault(_DirectionSelection);

var _Generic = require('../../basic-component-mixins/src/Generic');

var _Generic2 = _interopRequireDefault(_Generic);

var _ItemsSelection = require('../../basic-component-mixins/src/ItemsSelection');

var _ItemsSelection2 = _interopRequireDefault(_ItemsSelection);

var _Keyboard = require('../../basic-component-mixins/src/Keyboard');

var _Keyboard2 = _interopRequireDefault(_Keyboard);

var _KeyboardDirection = require('../../basic-component-mixins/src/KeyboardDirection');

var _KeyboardDirection2 = _interopRequireDefault(_KeyboardDirection);

var _KeyboardPagedSelection = require('../../basic-component-mixins/src/KeyboardPagedSelection');

var _KeyboardPagedSelection2 = _interopRequireDefault(_KeyboardPagedSelection);

var _KeyboardPrefixSelection = require('../../basic-component-mixins/src/KeyboardPrefixSelection');

var _KeyboardPrefixSelection2 = _interopRequireDefault(_KeyboardPrefixSelection);

var _ObserveContentChanges = require('../../basic-component-mixins/src/ObserveContentChanges');

var _ObserveContentChanges2 = _interopRequireDefault(_ObserveContentChanges);

var _SelectionAriaActive = require('../../basic-component-mixins/src/SelectionAriaActive');

var _SelectionAriaActive2 = _interopRequireDefault(_SelectionAriaActive);

var _SelectionHighlight = require('../../basic-component-mixins/src/SelectionHighlight');

var _SelectionHighlight2 = _interopRequireDefault(_SelectionHighlight);

var _SelectionInView = require('../../basic-component-mixins/src/SelectionInView');

var _SelectionInView2 = _interopRequireDefault(_SelectionInView);

var _TargetInCollective = require('../../basic-component-mixins/src/TargetInCollective');

var _TargetInCollective2 = _interopRequireDefault(_TargetInCollective);

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
 * @mixes ItemsSelection
 * @mixes Keyboard
 * @mixes KeyboardDirection
 * @mixes KeyboardPagedSelection
 * @mixes KeyboardPrefixSelection
 * @mixes ObserveContentChanges
 * @mixes SelectionAriaActive
 * @mixes SelectionHighlight
 * @mixes SelectionInView
 * @mixes TargetInCollective
 */

var ListBox = function (_ElementBase$compose) {
  _inherits(ListBox, _ElementBase$compose);

  function ListBox() {
    _classCallCheck(this, ListBox);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ListBox).apply(this, arguments));
  }

  _createClass(ListBox, [{
    key: 'defaults',
    get: function get() {
      var defaults = _get(Object.getPrototypeOf(ListBox.prototype), 'defaults', this) || {};
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
      return '\n      <style>\n      :host {\n        display: -webkit-flex;\n        display: flex;\n        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n      }\n\n      [target="child"] {\n        display: -webkit-flex;\n        display: flex;\n        -webkit-flex: 1;\n        flex: 1;\n      }\n\n      #itemsContainer {\n        -webkit-flex: 1;\n        flex: 1;\n        -webkit-overflow-scrolling: touch;\n        overflow-y: scroll; /* for momentum scrolling */\n      }\n\n      /* Generic appearance */\n      :host([generic=""]) {\n        border: 1px solid gray;\n        box-sizing: border-box;\n        cursor: default;\n      }\n\n      :host([generic=""]) #itemsContainer ::content > * {\n        cursor: default;\n        padding: 0.25em;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n      }\n      </style>\n\n      <div id="itemsContainer" role="none">\n        <slot></slot>\n      </div>\n    ';
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
}(_ElementBase2.default.compose(_ClickSelection2.default, _ContentAsItems2.default, _DirectionSelection2.default, _DistributedChildrenAsContent2.default, _Generic2.default, _ItemsSelection2.default, _Keyboard2.default, _KeyboardDirection2.default, _KeyboardPagedSelection2.default, _KeyboardPrefixSelection2.default, _ObserveContentChanges2.default, _SelectionAriaActive2.default, _SelectionHighlight2.default, _SelectionInView2.default, _TargetInCollective2.default));

customElements.define('basic-list-box', ListBox);
exports.default = ListBox;

},{"../../basic-component-mixins/src/ClickSelection":7,"../../basic-component-mixins/src/ContentAsItems":10,"../../basic-component-mixins/src/DirectionSelection":12,"../../basic-component-mixins/src/DistributedChildrenAsContent":14,"../../basic-component-mixins/src/Generic":16,"../../basic-component-mixins/src/ItemsSelection":17,"../../basic-component-mixins/src/Keyboard":18,"../../basic-component-mixins/src/KeyboardDirection":19,"../../basic-component-mixins/src/KeyboardPagedSelection":20,"../../basic-component-mixins/src/KeyboardPrefixSelection":21,"../../basic-component-mixins/src/ObserveContentChanges":22,"../../basic-component-mixins/src/SelectionAriaActive":25,"../../basic-component-mixins/src/SelectionHighlight":26,"../../basic-component-mixins/src/SelectionInView":27,"../../basic-component-mixins/src/TargetInCollective":31,"../../basic-element-base/src/ElementBase":40}],43:[function(require,module,exports){
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

var _ItemsSelection = require('../../basic-component-mixins/src/ItemsSelection');

var _ItemsSelection2 = _interopRequireDefault(_ItemsSelection);

var _ObserveContentChanges = require('../../basic-component-mixins/src/ObserveContentChanges');

var _ObserveContentChanges2 = _interopRequireDefault(_ObserveContentChanges);

var _SelectionAriaActive = require('../../basic-component-mixins/src/SelectionAriaActive');

var _SelectionAriaActive2 = _interopRequireDefault(_SelectionAriaActive);

var _TargetInCollective = require('../../basic-component-mixins/src/TargetInCollective');

var _TargetInCollective2 = _interopRequireDefault(_TargetInCollective);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var base = _ElementBase2.default.compose(_ContentAsItems2.default, _DistributedChildrenAsContent2.default, _ItemsSelection2.default, _ObserveContentChanges2.default, _SelectionAriaActive2.default, _TargetInCollective2.default);

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
 * @mixes ItemsSelection
 * @mixes ObserveContentChanges
 * @mixes SelectionAriaActive
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

},{"../../basic-component-mixins/src/ContentAsItems":10,"../../basic-component-mixins/src/DistributedChildrenAsContent":14,"../../basic-component-mixins/src/ItemsSelection":17,"../../basic-component-mixins/src/ObserveContentChanges":22,"../../basic-component-mixins/src/SelectionAriaActive":25,"../../basic-component-mixins/src/TargetInCollective":31,"../../basic-element-base/src/ElementBase":40}],44:[function(require,module,exports){
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

var _ContentFirstChildTarget = require('../../basic-component-mixins/src/ContentFirstChildTarget');

var _ContentFirstChildTarget2 = _interopRequireDefault(_ContentFirstChildTarget);

var _DirectionSelection = require('../../basic-component-mixins/src/DirectionSelection');

var _DirectionSelection2 = _interopRequireDefault(_DirectionSelection);

var _DistributedChildrenAsContent = require('../../basic-component-mixins/src/DistributedChildrenAsContent');

var _DistributedChildrenAsContent2 = _interopRequireDefault(_DistributedChildrenAsContent);

var _ItemsSelection = require('../../basic-component-mixins/src/ItemsSelection');

var _ItemsSelection2 = _interopRequireDefault(_ItemsSelection);

var _Keyboard = require('../../basic-component-mixins/src/Keyboard');

var _Keyboard2 = _interopRequireDefault(_Keyboard);

var _KeyboardDirection = require('../../basic-component-mixins/src/KeyboardDirection');

var _KeyboardDirection2 = _interopRequireDefault(_KeyboardDirection);

var _ObserveContentChanges = require('../../basic-component-mixins/src/ObserveContentChanges');

var _ObserveContentChanges2 = _interopRequireDefault(_ObserveContentChanges);

var _renderArrayAsElements = require('../../basic-component-mixins/src/renderArrayAsElements');

var _renderArrayAsElements2 = _interopRequireDefault(_renderArrayAsElements);

var _TargetInCollective = require('../../basic-component-mixins/src/TargetInCollective');

var _TargetInCollective2 = _interopRequireDefault(_TargetInCollective);

var _TargetSelection = require('../../basic-component-mixins/src/TargetSelection');

var _TargetSelection2 = _interopRequireDefault(_TargetSelection);

var _toggleClass = require('../../basic-component-mixins/src/toggleClass');

var _toggleClass2 = _interopRequireDefault(_toggleClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Symbols for private data members on an element.
var selectedFractionChangedListenerSymbol = (0, _createSymbol2.default)('selectedFractionChangedListener');

var base = _ElementBase2.default.compose(_ContentFirstChildTarget2.default, _DirectionSelection2.default, _DistributedChildrenAsContent2.default, _ItemsSelection2.default, _Keyboard2.default, _KeyboardDirection2.default, _ObserveContentChanges2.default, _TargetInCollective2.default, _TargetSelection2.default);

/**
 * Presents a set of small dots to show list item count and select list items.
 *
 * You can see a [live demo](http://basicwebcomponents.org/basic-web-components/packages/basic-carousel/carouselWithDots.html)
 * of this component applied to a carousel.
 *
 * There will be one dot for each item, and the dot for the currently selected
 * item will be shown selected.
 *
 * Typical usage:
 *
 *     <basic-page-dots>
 *       <basic-carousel>
 *         ... images, etc. ...
 *       </basic-carousel>
 *     </basic-page-dots>
 *
 * Although the dots are quite small by default, clicking/tapping a dot will
 * will select the corresponding list item.
 *
 * @extends ElementBase
 * @mixes ContentFirstChildTarget
 * @mixes DirectionSelection
 * @mixes DistributedChildrenAsContent
 * @mixes ItemsSelection
 * @mixes Keyboard
 * @mixes KeyboardDirection
 * @mixes ObserveContentChanges
 * @mixes TargetInCollective
 * @mixes TargetSelection
 */

var PageDots = function (_base) {
  _inherits(PageDots, _base);

  function PageDots() {
    _classCallCheck(this, PageDots);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(PageDots).apply(this, arguments));
  }

  _createClass(PageDots, [{
    key: 'applySelection',
    value: function applySelection(item, selected) {
      if (_get(Object.getPrototypeOf(PageDots.prototype), 'applySelection', this)) {
        _get(Object.getPrototypeOf(PageDots.prototype), 'applySelection', this).call(this, item, selected);
      }
      var index = this.items.indexOf(item);
      // See if the corresponding dot has already been created.
      // If not, the correct dot will be selected when it gets created.
      var dots = this.dots;
      if (dots && dots.length > index) {
        var dot = this.dots[index];
        if (dot) {
          (0, _toggleClass2.default)(dot, 'selected', selected);
        }
      }
    }
  }, {
    key: 'createdCallback',
    value: function createdCallback() {
      var _this2 = this;

      _get(Object.getPrototypeOf(PageDots.prototype), 'createdCallback', this).call(this);

      this.$.dots.addEventListener('click', function (event) {
        var dot = event.target;
        var dotIndex = _this2.dots.indexOf(dot);
        if (dotIndex >= 0) {
          _this2.selectedIndex = dotIndex;
        }
      });
    }
  }, {
    key: 'itemsChanged',
    value: function itemsChanged() {
      if (_get(Object.getPrototypeOf(PageDots.prototype), 'itemsChanged', this)) {
        _get(Object.getPrototypeOf(PageDots.prototype), 'itemsChanged', this).call(this);
      }
      (0, _renderArrayAsElements2.default)(this.items, this.$.dots, function (item, element) {
        // We don't use the item parameter, because any item will produce an
        // identical corresponding dot.
        if (!element) {
          element = document.createElement('div');
          element.classList.add('dot');
          element.classList.add('style-scope');
          element.classList.add('basic-page-dots');
          element.setAttribute('role', 'none');
          return element;
        }
      });
      this.selectedItemChanged(); // In case position of selected item moved.
    }

    /**
     * The distance the user has moved the first touchpoint since the beginning
     * of a drag, expressed as a fraction of the element's width.
     *
     * @type number
     */

  }, {
    key: 'selectedItemChanged',
    value: function selectedItemChanged() {
      if (_get(Object.getPrototypeOf(PageDots.prototype), 'selectedItemChanged', this)) {
        _get(Object.getPrototypeOf(PageDots.prototype), 'selectedItemChanged', this).call(this);
      }
      var selectedIndex = this.selectedIndex;
      this.dots.forEach(function (dot, i) {
        (0, _toggleClass2.default)(dot, 'selected', i === selectedIndex);
      });
    }
  }, {
    key: 'defaults',
    get: function get() {
      var defaults = _get(Object.getPrototypeOf(PageDots.prototype), 'defaults', this) || {};
      defaults.navigationAxis = 'horizontal';
      return defaults;
    }
  }, {
    key: 'dots',
    get: function get() {
      return [].slice.call(this.$.dots.querySelectorAll('.dot'));
    }
  }, {
    key: 'selectedFraction',
    get: function get() {
      return this.target && this.target.selectedFraction;
    },
    set: function set(value) {
      if ('selectedFraction' in base.prototype) {
        _set(Object.getPrototypeOf(PageDots.prototype), 'selectedFraction', value, this);
      }
      if (this.target && this.target.selectedFraction !== value) {
        this.target.selectedFraction = value;
      } else {
        renderTransition(this, this.selectedIndex, value);
      }
      this.dispatchEvent(new CustomEvent('selection-fraction-changed'));
    }
  }, {
    key: 'target',
    get: function get() {
      return _get(Object.getPrototypeOf(PageDots.prototype), 'target', this);
    },
    set: function set(element) {
      var _this3 = this;

      if ('target' in base.prototype) {
        _set(Object.getPrototypeOf(PageDots.prototype), 'target', element, this);
      }
      if (this[selectedFractionChangedListenerSymbol]) {
        this.removeEventListener('selection-fraction-changed', this[selectedFractionChangedListenerSymbol]);
      }
      this[selectedFractionChangedListenerSymbol] = element.addEventListener('selection-fraction-changed', function (event) {
        _this3.selectedFraction = element.selectedFraction;
      });
    }
  }, {
    key: 'template',
    get: function get() {
      return '\n      <style>\n      :host {\n        display: -webkit-flex;\n        display: flex;\n        position: relative;\n      }\n\n      #dots {\n        bottom: 0;\n        display: -webkit-flex;\n        display: flex;\n        -webkit-justify-content: center;\n        justify-content: center;\n        position: absolute;\n        width: 100%;\n        z-index: 1;\n      }\n\n      #container {\n        display: -webkit-flex;\n        display: flex;\n        -webkit-flex: 1;\n        flex: 1;\n        position: relative;\n        z-index: 0;\n      }\n\n      #container ::content > * {\n        -webkit-flex: 1;\n        flex: 1;\n      }\n\n      .dot {\n        background: rgb(255, 255, 255);\n        border-radius: 7px;\n        box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.5);\n        box-sizing: border-box;\n        cursor: pointer;\n        height: 8px;\n        margin: 7px 5px;\n        opacity: 0.4;\n        padding: 0;\n        transition: background 0.2s box-shadow 0.2s;\n        width: 8px;\n      }\n\n      .dot:hover {\n        background: rgba(0, 0, 0, 0.75);\n        box-shadow: 0 0 1px 3px rgba(255, 255, 255, 0.5);\n      }\n\n      .dot.selected {\n        opacity: 0.95;\n      }\n\n      @media (min-width: 768px) {\n        .dot {\n          height: 12px;\n          width: 12px;\n        }\n      }\n      </style>\n\n      <div id="dots"></div>\n      <div id="container" role="none">\n        <slot></slot>\n      </div>\n    ';
    }
  }]);

  return PageDots;
}(base);

// Return the index, ensuring it stays between 0 and the given length.

function keepIndexWithinBounds(length, index) {
  // Handle possibility of negative mod.
  // See http://stackoverflow.com/a/18618250/76472
  return (index % length + length) % length;
}

function renderTransition(element, selectedIndex, selectedFraction) {
  var dots = element.dots;
  if (!dots || dots.length === 0) {
    return;
  }
  var dotCount = dots.length;
  var opacityMinimum = 0.4;
  var opacityMaximum = 0.95;
  var opacityRange = opacityMaximum - opacityMinimum;
  var fractionalIndex = selectedIndex + selectedFraction;
  var leftIndex = Math.floor(fractionalIndex);
  var rightIndex = Math.ceil(fractionalIndex);
  var selectionWraps = element.selectionWraps;
  var awayIndex = selectedFraction >= 0 ? leftIndex : rightIndex;
  var towardIndex = selectedFraction >= 0 ? rightIndex : leftIndex;
  if (selectionWraps) {
    awayIndex = keepIndexWithinBounds(dotCount, awayIndex);
    towardIndex = keepIndexWithinBounds(dotCount, towardIndex);
  }
  // Stupid IE doesn't have Math.trunc.
  // let truncatedSelectedFraction = Math.trunc(selectedFraction);
  var truncatedSelectedFraction = selectedFraction < 0 ? Math.ceil(selectedFraction) : Math.floor(selectedFraction);
  var progress = selectedFraction - truncatedSelectedFraction;
  var opacityProgressThroughRange = Math.abs(progress) * opacityRange;
  dots.forEach(function (dot, index) {
    var dotOpacity = undefined;
    if (selectedFraction === 0) {
      // Remove explicit opacity and rely on styling.
      dotOpacity = '';
    } else if (index === awayIndex) {
      dotOpacity = opacityMaximum - opacityProgressThroughRange;
    } else if (index === towardIndex) {
      dotOpacity = opacityMinimum + opacityProgressThroughRange;
    } else {
      dotOpacity = opacityMinimum;
    }
    dot.style.opacity = dotOpacity;
  });
}

customElements.define('basic-page-dots', PageDots);
exports.default = PageDots;

},{"../../basic-component-mixins/src/ContentFirstChildTarget":11,"../../basic-component-mixins/src/DirectionSelection":12,"../../basic-component-mixins/src/DistributedChildrenAsContent":14,"../../basic-component-mixins/src/ItemsSelection":17,"../../basic-component-mixins/src/Keyboard":18,"../../basic-component-mixins/src/KeyboardDirection":19,"../../basic-component-mixins/src/ObserveContentChanges":22,"../../basic-component-mixins/src/TargetInCollective":31,"../../basic-component-mixins/src/TargetSelection":32,"../../basic-component-mixins/src/createSymbol":35,"../../basic-component-mixins/src/renderArrayAsElements":37,"../../basic-component-mixins/src/toggleClass":38,"../../basic-element-base/src/ElementBase":40}],45:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _ElementBase = require('../../basic-element-base/src/ElementBase');

var _ElementBase2 = _interopRequireDefault(_ElementBase);

var _ContentFirstChildTarget = require('../../basic-component-mixins/src/ContentFirstChildTarget');

var _ContentFirstChildTarget2 = _interopRequireDefault(_ContentFirstChildTarget);

var _DirectionSelection = require('../../basic-component-mixins/src/DirectionSelection');

var _DirectionSelection2 = _interopRequireDefault(_DirectionSelection);

var _DistributedChildrenAsContent = require('../../basic-component-mixins/src/DistributedChildrenAsContent');

var _DistributedChildrenAsContent2 = _interopRequireDefault(_DistributedChildrenAsContent);

var _ItemsSelection = require('../../basic-component-mixins/src/ItemsSelection');

var _ItemsSelection2 = _interopRequireDefault(_ItemsSelection);

var _Keyboard = require('../../basic-component-mixins/src/Keyboard');

var _Keyboard2 = _interopRequireDefault(_Keyboard);

var _KeyboardDirection = require('../../basic-component-mixins/src/KeyboardDirection');

var _KeyboardDirection2 = _interopRequireDefault(_KeyboardDirection);

var _ObserveContentChanges = require('../../basic-component-mixins/src/ObserveContentChanges');

var _ObserveContentChanges2 = _interopRequireDefault(_ObserveContentChanges);

var _TargetInCollective = require('../../basic-component-mixins/src/TargetInCollective');

var _TargetInCollective2 = _interopRequireDefault(_TargetInCollective);

var _TargetSelection = require('../../basic-component-mixins/src/TargetSelection');

var _TargetSelection2 = _interopRequireDefault(_TargetSelection);

var _toggleClass = require('../../basic-component-mixins/src/toggleClass');

var _toggleClass2 = _interopRequireDefault(_toggleClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var base = _ElementBase2.default.compose(_ContentFirstChildTarget2.default, _DirectionSelection2.default, _DistributedChildrenAsContent2.default, _ItemsSelection2.default, _Keyboard2.default, _KeyboardDirection2.default, _ObserveContentChanges2.default, _TargetInCollective2.default, _TargetSelection2.default);

/**
 * Auxiliary component for managing playback of a slideshow, audio playlist, etc.
 *
 * This component can be used to wrap a component like
 * [basic-slideshow](../basic-slideshow). Example:
 *
 *     <basic-play-controls>
 *       <basic-slideshow>
 *         ... images, etc. ...
 *       </basic-slideshow>
 *     </basic-play-controls>
 *
 * @extends ElementBase
 * @mixes ContentFirstChildTarget
 * @mixes DirectionSelection
 * @mixes DistributedChildrenAsContent
 * @mixes ItemsSelection
 * @mixes Keyboard
 * @mixes KeyboardDirection
 * @mixes ObserveContentChanges
 * @mixes TargetInCollective
 * @mixes TargetSelection
 */

var PlayControls = function (_base) {
  _inherits(PlayControls, _base);

  function PlayControls() {
    _classCallCheck(this, PlayControls);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(PlayControls).apply(this, arguments));
  }

  _createClass(PlayControls, [{
    key: 'createdCallback',
    value: function createdCallback() {
      var _this2 = this;

      _get(Object.getPrototypeOf(PlayControls.prototype), 'createdCallback', this).call(this);
      this.$.previousButton.addEventListener('click', function (event) {
        _this2.selectPrevious();
      });
      this.$.playButton.addEventListener('click', function (event) {
        _this2.playing = !_this2.playing;
      });
      this.$.nextButton.addEventListener('click', function (event) {
        _this2.selectNext();
      });
      (0, _toggleClass2.default)(this, 'playing', this.playing);
    }
  }, {
    key: 'keydown',
    value: function keydown(event) {
      var handled = undefined;

      switch (event.keyCode) {
        case 32:
          /* Space */
          this.playing = !this.playing;
          handled = true;
          break;
      }

      // Prefer mixin result if it's defined, otherwise use base result.
      return handled || _get(Object.getPrototypeOf(PlayControls.prototype), 'keydown', this) && _get(Object.getPrototypeOf(PlayControls.prototype), 'keydown', this).call(this, event);
    }
  }, {
    key: 'pause',
    value: function pause() {
      if (this.target) {
        this.target.pause();
      }
    }
  }, {
    key: 'play',
    value: function play() {
      if (this.target) {
        this.target.play();
      }
    }
  }, {
    key: 'playing',
    get: function get() {
      return this.target && this.target.playing;
    },
    set: function set(value) {
      if ('playing' in base.prototype) {
        _set(Object.getPrototypeOf(PlayControls.prototype), 'playing', value, this);
      }
      if (this.target) {
        this.target.playing = value;
      }
      (0, _toggleClass2.default)(this, 'playing', value);
    }
  }, {
    key: 'template',
    get: function get() {
      return '\n      <style>\n      :host {\n        display: -webkit-flex;\n        display: flex;\n        position: relative;\n      }\n\n      #buttons {\n        bottom: 0;\n        box-sizing: border-box;\n        padding: 0.5em;\n        position: absolute;\n        text-align: center;\n        width: 100%;\n        z-index: 1;\n      }\n\n      button {\n        background: transparent;\n        border: none;\n        fill: rgba(255, 255, 255, 0.5);\n        padding: 0;\n        vertical-align: middle;\n      }\n      :host(:hover) button {\n        fill: rgba(255, 255, 255, 0.7);\n      }\n      button:hover {\n        fill: rgba(255, 255, 255, 0.85);\n      }\n      button:active {\n        fill: white;\n      }\n\n      .icon {\n        height: 30px;\n        width: 30px;\n      }\n      #playButton .icon {\n        height: 40px;\n        width: 40px;\n      }\n\n      :host(.playing) .pausedControl {\n        display: none;\n      }\n      :host(:not(.playing)) .playingControl {\n        display: none;\n      }\n\n      #container {\n        display: -webkit-flex;\n        display: flex;\n        -webkit-flex: 1;\n        flex: 1;\n      }\n\n      #container ::content > * {\n        -webkit-flex: 1;\n        flex: 1;\n      }\n      </style>\n\n      <div id="buttons">\n        <button id="previousButton">\n          <svg class="icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">\n            <g id="skip-previous">\n              <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>\n            </g>\n          </svg>\n        </button>\n        <button id="playButton">\n          <svg class="icon playingControl" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">\n            <g id="pause-circle-outline">\n              <path d="M9 16h2V8H9v8zm3-14C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-4h2V8h-2v8z"></path>\n            </g>\n          </svg>\n          <svg class="icon pausedControl" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">\n            <g id="play-circle-outline">\n              <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>\n            </g>\n          </svg>\n        </button>\n        <button id="nextButton">\n          <svg class="icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">\n            <g id="skip-next">\n              <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>\n            </g>\n          </svg>\n        </button>\n      </div>\n\n      <div id="container" role="none">\n        <slot></slot>\n      </div>\n    ';
    }
  }]);

  return PlayControls;
}(base);

customElements.define('basic-play-controls', PlayControls);

},{"../../basic-component-mixins/src/ContentFirstChildTarget":11,"../../basic-component-mixins/src/DirectionSelection":12,"../../basic-component-mixins/src/DistributedChildrenAsContent":14,"../../basic-component-mixins/src/ItemsSelection":17,"../../basic-component-mixins/src/Keyboard":18,"../../basic-component-mixins/src/KeyboardDirection":19,"../../basic-component-mixins/src/ObserveContentChanges":22,"../../basic-component-mixins/src/TargetInCollective":31,"../../basic-component-mixins/src/TargetSelection":32,"../../basic-component-mixins/src/toggleClass":38,"../../basic-element-base/src/ElementBase":40}],46:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _ElementBase = require('../../basic-element-base/src/ElementBase');

var _ElementBase2 = _interopRequireDefault(_ElementBase);

var _ContentFirstChildTarget = require('../../basic-component-mixins/src/ContentFirstChildTarget');

var _ContentFirstChildTarget2 = _interopRequireDefault(_ContentFirstChildTarget);

var _DistributedChildrenAsContent = require('../../basic-component-mixins/src/DistributedChildrenAsContent');

var _DistributedChildrenAsContent2 = _interopRequireDefault(_DistributedChildrenAsContent);

var _ItemsSelection = require('../../basic-component-mixins/src/ItemsSelection');

var _ItemsSelection2 = _interopRequireDefault(_ItemsSelection);

var _Keyboard = require('../../basic-component-mixins/src/Keyboard');

var _Keyboard2 = _interopRequireDefault(_Keyboard);

var _KeyboardDirection = require('../../basic-component-mixins/src/KeyboardDirection');

var _KeyboardDirection2 = _interopRequireDefault(_KeyboardDirection);

var _ObserveContentChanges = require('../../basic-component-mixins/src/ObserveContentChanges');

var _ObserveContentChanges2 = _interopRequireDefault(_ObserveContentChanges);

var _TargetInCollective = require('../../basic-component-mixins/src/TargetInCollective');

var _TargetInCollective2 = _interopRequireDefault(_TargetInCollective);

var _TargetSelection = require('../../basic-component-mixins/src/TargetSelection');

var _TargetSelection2 = _interopRequireDefault(_TargetSelection);

var _TimerSelection = require('../../basic-component-mixins/src/TimerSelection');

var _TimerSelection2 = _interopRequireDefault(_TimerSelection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var base = _ElementBase2.default.compose(_ContentFirstChildTarget2.default, _DistributedChildrenAsContent2.default, _ItemsSelection2.default, _Keyboard2.default, _KeyboardDirection2.default, _ObserveContentChanges2.default, _TargetInCollective2.default, _TargetSelection2.default, _TimerSelection2.default);

/**
 * Auxiliary component to advance a selection with a timer.
 *
 * This component is generally used to wrap a component like
 * [basic-carousel](../basic-carousel) or the simpler
 * [basic-sliding-carousel](../basic-sliding-carousel) to add slideshow
 * behavior. For a standalone slideshow component, see
 * [basic-slideshow](../basic-slideshow).
 *
 * Example:
 *
 *     <basic-slideshow-timer>
 *       <basic-carousel>
 *         ... images or other elements ...
 *       </basic-carousel>
 *     </basic-slideshow-timer>
 *
 * The basic-slideshow-timer component provides no visible user interface
 * elements, and exists chiefly as a convenience for use in scenarios like the
 * one above. If you're developing a component that will always want to provide
 * slideshow semantics, consider directly applying the
 * [TimerSelection](../basic-component-mixins/docs/TimerSelection.md) mixin
 * to your component.
 *
 * @extends ElementBase
 */

var SlideshowTimer = function (_base) {
  _inherits(SlideshowTimer, _base);

  function SlideshowTimer() {
    _classCallCheck(this, SlideshowTimer);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(SlideshowTimer).apply(this, arguments));
  }

  _createClass(SlideshowTimer, [{
    key: 'defaults',
    get: function get() {
      var defaults = _get(Object.getPrototypeOf(SlideshowTimer.prototype), 'defaults', this) || {};
      defaults.playing = true;
      defaults.selectionAnimationDuration = 500;
      defaults.selectionRequired = true;
      defaults.selectionTimerDuration = 3000;
      return defaults;
    }
  }, {
    key: 'template',
    get: function get() {
      return '\n      <style>\n      :host {\n        position: relative;\n      }\n      </style>\n      <slot></slot>\n    ';
    }
  }]);

  return SlideshowTimer;
}(base);

customElements.define('basic-slideshow-timer', SlideshowTimer);

},{"../../basic-component-mixins/src/ContentFirstChildTarget":11,"../../basic-component-mixins/src/DistributedChildrenAsContent":14,"../../basic-component-mixins/src/ItemsSelection":17,"../../basic-component-mixins/src/Keyboard":18,"../../basic-component-mixins/src/KeyboardDirection":19,"../../basic-component-mixins/src/ObserveContentChanges":22,"../../basic-component-mixins/src/TargetInCollective":31,"../../basic-component-mixins/src/TargetSelection":32,"../../basic-component-mixins/src/TimerSelection":33,"../../basic-element-base/src/ElementBase":40}],47:[function(require,module,exports){
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

var _TimerSelection = require('../../basic-component-mixins/src/TimerSelection');

var _TimerSelection2 = _interopRequireDefault(_TimerSelection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var base = _ElementBase2.default.compose(_ContentAsItems2.default, _DistributedChildrenAsContent2.default, _FractionalSelection2.default, _ItemsSelection2.default, _ObserveContentChanges2.default, _SelectionAnimation2.default, _SelectionAriaActive2.default, _TimerSelection2.default);

/**
 * Slideshow with animated transitions.
 *
 * By default the slideshow will immediately begin playing when it is connected
 * to the document, advance every 3000 ms (3 seconds), and use a simple
 * crossfade effect.
 *
 * This component can be used on its own. To incorporate slideshow behavior into
 * a component of your own, apply the
 * [TimerSelection](../basic-component-mixins/docs/TimerSelection.md) mixin. To
 * add slideshow functionality to a component such as a carousel, wrap it with
 * the auxiliary [basic-slideshow-timer](../basic-slideshow-timer) component.
 *
 * @extends ElementBase
 * @mixes ContentAsItems
 * @mixes DistributedChildrenAsContent
 * @mixes FractionalSelection
 * @mixes ItemsSelection
 * @mixes ObserveContentChanges
 * @mixes SelectionAnimation
 * @mixes SelectionAriaActive
 * @mixes TimerSelection
 */

var Slideshow = function (_base) {
  _inherits(Slideshow, _base);

  function Slideshow() {
    _classCallCheck(this, Slideshow);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Slideshow).apply(this, arguments));
  }

  _createClass(Slideshow, [{
    key: 'defaults',
    get: function get() {
      var defaults = _get(Object.getPrototypeOf(Slideshow.prototype), 'defaults', this) || {};
      defaults.playing = true;
      defaults.selectionAnimationDuration = 500;
      defaults.selectionAnimationEffect = 'crossfade';
      defaults.selectionRequired = true;
      defaults.selectionTimerDuration = 3000;
      defaults.selectionWraps = true;
      return defaults;
    }
  }, {
    key: 'template',
    get: function get() {
      return '\n      <style>\n      :host {\n        display: -webkit-flex;\n        display: flex;\n        overflow: hidden;\n        position: relative;\n      }\n\n      #container ::content > * {\n        height: 100%;\n        object-fit: contain;\n        position: absolute;\n        width: 100%;\n        will-change: transform;\n      }\n      </style>\n\n      <div id="container" role="none">\n        <slot></slot>\n      </div>\n    ';
    }
  }]);

  return Slideshow;
}(base);

customElements.define('basic-slideshow', Slideshow);

},{"../../basic-component-mixins/src/ContentAsItems":10,"../../basic-component-mixins/src/DistributedChildrenAsContent":14,"../../basic-component-mixins/src/FractionalSelection":15,"../../basic-component-mixins/src/ItemsSelection":17,"../../basic-component-mixins/src/ObserveContentChanges":22,"../../basic-component-mixins/src/SelectionAnimation":24,"../../basic-component-mixins/src/SelectionAriaActive":25,"../../basic-component-mixins/src/TimerSelection":33,"../../basic-element-base/src/ElementBase":40}],48:[function(require,module,exports){
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

var base = _ElementBase2.default.compose(_ContentAsItems2.default, _DirectionSelection2.default, _DistributedChildrenAsContent2.default, _FractionalSelection2.default, _ItemsSelection2.default, _Keyboard2.default, _KeyboardDirection2.default, _ObserveContentChanges2.default, _SelectionAriaActive2.default, _SwipeDirection2.default, _TargetInCollective2.default, _TrackpadDirection2.default);

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
 * @mixes ItemsSelection
 * @mixes Keyboard
 * @mixes KeyboardDirection
 * @mixes ObserveContentChanges
 * @mixes SelectionAriaActive
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
    key: 'attachedCallback',
    value: function attachedCallback() {
      if (_get(Object.getPrototypeOf(SlidingCarousel.prototype), 'attachedCallback', this)) {
        _get(Object.getPrototypeOf(SlidingCarousel.prototype), 'attachedCallback', this).call(this);
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
      var event = new CustomEvent('selection-fraction-changed');
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

},{"../../basic-component-mixins/src/ContentAsItems":10,"../../basic-component-mixins/src/DirectionSelection":12,"../../basic-component-mixins/src/DistributedChildrenAsContent":14,"../../basic-component-mixins/src/FractionalSelection":15,"../../basic-component-mixins/src/ItemsSelection":17,"../../basic-component-mixins/src/Keyboard":18,"../../basic-component-mixins/src/KeyboardDirection":19,"../../basic-component-mixins/src/ObserveContentChanges":22,"../../basic-component-mixins/src/SelectionAriaActive":25,"../../basic-component-mixins/src/SwipeDirection":30,"../../basic-component-mixins/src/TargetInCollective":31,"../../basic-component-mixins/src/TrackpadDirection":34,"../../basic-element-base/src/ElementBase":40,"../../basic-sliding-viewport/src/SlidingViewport":49}],49:[function(require,module,exports){
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

},{"../../basic-component-mixins/src/FractionalSelection":15,"../../basic-component-mixins/src/createSymbol":35,"../../basic-component-mixins/src/toggleClass":38,"../../basic-element-base/src/ElementBase":40,"../../basic-spread-items/src/SpreadItems":50}],50:[function(require,module,exports){
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

customElements.define('basic-spread-items', SpreadItems);
exports.default = SpreadItems;

},{"../../basic-component-mixins/src/DistributedChildrenAsContent":14,"../../basic-component-mixins/src/ObserveContentChanges":22,"../../basic-element-base/src/ElementBase":40}],51:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createSymbol = require('../../basic-component-mixins/src/createSymbol');

var _createSymbol2 = _interopRequireDefault(_createSymbol);

var _ElementBase = require('../../basic-element-base/src/ElementBase');

var _ElementBase2 = _interopRequireDefault(_ElementBase);

var _ContentFirstChildTarget = require('../../basic-component-mixins/src/ContentFirstChildTarget');

var _ContentFirstChildTarget2 = _interopRequireDefault(_ContentFirstChildTarget);

var _DirectionSelection = require('../../basic-component-mixins/src/DirectionSelection');

var _DirectionSelection2 = _interopRequireDefault(_DirectionSelection);

var _DistributedChildrenAsContent = require('../../basic-component-mixins/src/DistributedChildrenAsContent');

var _DistributedChildrenAsContent2 = _interopRequireDefault(_DistributedChildrenAsContent);

var _Generic = require('../../basic-component-mixins/src/Generic');

var _Generic2 = _interopRequireDefault(_Generic);

var _ItemsSelection = require('../../basic-component-mixins/src/ItemsSelection');

var _ItemsSelection2 = _interopRequireDefault(_ItemsSelection);

var _KeyboardDirection = require('../../basic-component-mixins/src/KeyboardDirection');

var _KeyboardDirection2 = _interopRequireDefault(_KeyboardDirection);

var _ObserveContentChanges = require('../../basic-component-mixins/src/ObserveContentChanges');

var _ObserveContentChanges2 = _interopRequireDefault(_ObserveContentChanges);

var _renderArrayAsElements = require('../../basic-component-mixins/src/renderArrayAsElements');

var _renderArrayAsElements2 = _interopRequireDefault(_renderArrayAsElements);

var _TargetSelection = require('../../basic-component-mixins/src/TargetSelection');

var _TargetSelection2 = _interopRequireDefault(_TargetSelection);

var _toggleClass = require('../../basic-component-mixins/src/toggleClass');

var _toggleClass2 = _interopRequireDefault(_toggleClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Symbols for private data members on an element.
var tabPositionSymbol = (0, _createSymbol2.default)('tabPosition');

// Used to assign unique IDs to tabs for ARIA purposes.
var idCount = 0;

var base = _ElementBase2.default.compose(_ContentFirstChildTarget2.default, _DirectionSelection2.default, _DistributedChildrenAsContent2.default, _Generic2.default, _ItemsSelection2.default, _KeyboardDirection2.default, _ObserveContentChanges2.default, _TargetSelection2.default);

/**
 * A strip of tabs for selecting one of the component's children.
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
 * The generic default styling of the tab strip will present the classic
 * skeumorphic look of rounded tabs attached to a surface. You can remove this
 * styling by setting the `generic` property/attribute to false.
 *
 * @extends ElementBase
 * @mixes ContentFirstChildTarget
 * @mixes DirectionSelection
 * @mixes DistributedChildrenAsContent
 * @mixes Generic
 * @mixes ItemsSelection
 * @mixes KeyboardDirection
 * @mixes ObserveContentChanges
 * @mixes TargetSelection
 */

var TabStrip = function (_base) {
  _inherits(TabStrip, _base);

  function TabStrip() {
    _classCallCheck(this, TabStrip);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(TabStrip).apply(this, arguments));
  }

  _createClass(TabStrip, [{
    key: 'applySelection',
    value: function applySelection(item, selected) {
      if (_get(Object.getPrototypeOf(TabStrip.prototype), 'applySelection', this)) {
        _get(Object.getPrototypeOf(TabStrip.prototype), 'applySelection', this).call(this, item, selected);
      }
      var index = this.items.indexOf(item);
      // See if the corresponding tab has already been created.
      // If not, the correct tab will be selected when it gets created.
      var tabs = this.tabs;
      if (tabs && tabs.length > index) {
        var tab = this.tabs[index];
        if (tab) {
          applySelectionToTab(tab, selected);
        }
      }
    }
  }, {
    key: 'createdCallback',
    value: function createdCallback() {
      var _this2 = this;

      _get(Object.getPrototypeOf(TabStrip.prototype), 'createdCallback', this).call(this);

      this.$.tabs.addEventListener('click', function (event) {
        var tab = event.target;
        var tabIndex = _this2.tabs.indexOf(tab);
        if (tabIndex >= 0) {
          _this2.selectedIndex = tabIndex;
        }
      });

      // Listen to keydown events on the tabs, not on pages.
      this.$.tabs.addEventListener('keydown', function (event) {
        var handled = _this2.keydown(event);
        if (handled) {
          event.preventDefault();
          event.stopPropagation();
        }
      });

      if (!this.getAttribute('role')) {
        // Assign a default ARIA role.
        this.setAttribute('role', 'tablist');
      }

      // Set defaults.
      if (typeof this.tabPosition === 'undefined') {
        this.tabPosition = this.defaults.tabPosition;
      }
    }
  }, {
    key: 'itemsChanged',
    value: function itemsChanged() {
      if (_get(Object.getPrototypeOf(TabStrip.prototype), 'itemsChanged', this)) {
        _get(Object.getPrototypeOf(TabStrip.prototype), 'itemsChanged', this).call(this);
      }

      var baseId = this.id ? "_" + this.id + "Panel" : "_panel";

      // Confirm that items have at least a default role and ID for ARIA purposes.
      this.items.forEach(function (item) {
        if (!item.getAttribute('role')) {
          item.setAttribute('role', 'tabpanel');
        }
        if (!item.id) {
          item.id = baseId + idCount++;
        }
      });

      // Create tabs.
      (0, _renderArrayAsElements2.default)(this.items, this.$.tabs, function (item, element) {
        if (!element) {
          element = document.createElement('button');
          element.classList.add('tab');
          element.classList.add('style-scope');
          element.classList.add('basic-tab-strip');
          element.setAttribute('role', 'tab');
          return element;
        }
        element.id = item.id + '_tab';
        element.textContent = item.getAttribute('aria-label');

        // Point tab and panel at each other.
        element.setAttribute('aria-controls', item.id);
        item.setAttribute('aria-labelledby', element.id);
      });

      this.selectedItemChanged(); // In case position of selected item moved.
    }
  }, {
    key: 'keydown',
    value: function keydown(event) {
      var handled = _get(Object.getPrototypeOf(TabStrip.prototype), 'keydown', this).call(this, event);
      if (handled) {
        // If the event resulted in a change of selection, move the focus to the
        // newly-selected tab.
        this.tabs[this.selectedIndex].focus();
      }
      return handled;
    }
  }, {
    key: 'selectedItemChanged',
    value: function selectedItemChanged() {
      if (_get(Object.getPrototypeOf(TabStrip.prototype), 'selectedItemChanged', this)) {
        _get(Object.getPrototypeOf(TabStrip.prototype), 'selectedItemChanged', this).call(this);
      }
      var selectedIndex = this.selectedIndex;
      this.tabs.forEach(function (tab, i) {
        applySelectionToTab(tab, i === selectedIndex);
      });
    }

    /**
     * The position of the tab strip relative to the element's children. Valid
     * values are "top", "left", "right", and "bottom".
     *
     * @default "top"
     * @type {string}
     */

  }, {
    key: 'defaults',
    get: function get() {
      var defaults = _get(Object.getPrototypeOf(TabStrip.prototype), 'defaults', this) || {};
      defaults.tabPosition = 'top';
      return defaults;
    }
  }, {
    key: 'tabs',
    get: function get() {
      return [].slice.call(this.$.tabs.querySelectorAll('.tab'));
    }
  }, {
    key: 'tabPosition',
    get: function get() {
      return this[tabPositionSymbol];
    },
    set: function set(position) {
      this[tabPositionSymbol] = position;

      if (this.getAttribute('tab-position') !== position) {
        this.setAttribute('tab-position', position);
        return;
      }

      // Physically reorder the tabs and pages to reflect the desired arrangement.
      // We could change the visual appearance by reversing the order of the flex
      // box, but then the visual order wouldn't reflect the document order, which
      // determines focus order. That would surprise a user trying to tab through
      // the controls.
      var firstElement = position === 'top' || position === 'left' ? this.$.tabs : this.$.pages;
      var lastElement = position === 'top' || position === 'left' ? this.$.pages : this.$.tabs;
      if (firstElement.nextSibling !== lastElement) {
        this.shadowRoot.insertBefore(firstElement, lastElement);
      }

      this.navigationAxis = position === 'top' || position === 'bottom' ? 'horizontal' : 'vertical';
    }
  }, {
    key: 'template',
    get: function get() {
      return '\n      <style>\n      :host {\n        display: -webkit-flex;\n        display: flex;\n        -webkit-flex-direction: column;\n        flex-direction: column;\n        position: relative;\n      }\n\n      /*\n       * Avoid having tab container stretch across. User won\'t be able to see\n       * it, but since it handles the keyboard, in Mobile Safari a tap on the\n       * container background will cause the region to flash. Aligning the\n       * region collapses it down to hold its contents.\n       */\n      #tabs {\n        /* For IE bug (clicking tab produces gap between tab and page). */\n        display: -webkit-flex;\n        display: flex;\n        /*\n         * Try to obtain fast-tap behavior on all tabs.\n         * See https://webkit.org/blog/5610/more-responsive-tapping-on-ios/.\n         */\n        touch-action: manipulation;\n      }\n      :host(:not(.spread)) #tabs {\n        -webkit-align-self: flex-start;\n        align-self: flex-start;\n      }\n\n      #pages {\n        display: -webkit-flex;\n        display: flex;\n        -webkit-flex: 1;\n        flex: 1;\n        -webkit-flex-direction: column;\n        flex-direction: column;\n      }\n\n      #pages ::content > * {\n        display: -webkit-flex;\n        display: flex;\n        -webkit-flex: 1;\n        flex: 1;\n      }\n\n      .tab {\n        cursor: pointer;\n        display: inline-block;\n        font-family: inherit;\n        font-size: inherit;\n        position: relative;\n      }\n\n      /* Left/right positions */\n      :host([tab-position="left"]),\n      :host([tab-position="right"]) {\n        -webkit-flex-direction: row;\n        flex-direction: row;\n      }\n      :host([tab-position="left"]) #tabs,\n      :host([tab-position="right"]) #tabs {\n        -webkit-flex-direction: column;\n        flex-direction: column;\n      }\n\n      /* Spread variant */\n      :host(.spread) #tabs {\n        -webkit-align-items: stretch;\n        align-items: stretch;\n      }\n      :host(.spread) .tab {\n        flex: 1;\n      }\n\n      /* Generic style */\n      :host([generic=""]) #pages {\n        background: white;\n        border: 1px solid #ccc;\n        box-sizing: border-box;\n      }\n\n      :host([generic=""]) .tab {\n        background: white;\n        border: 1px solid #ccc;\n        margin: 0;\n        padding: 0.5em 0.75em;\n        transition: border-color 0.25s;\n      }\n\n      :host([generic=""]) .tab.selected {\n        border-color: #ccc;\n        opacity: 1;\n      }\n\n      :host([generic=""]) .tab:hover {\n        background-color: #eee;\n      }\n\n      /* Generic, top/bottom positions */\n      :host([generic=""][tab-position="top"]) .tab:not(:last-child),\n      :host([generic=""][tab-position="bottom"]) .tab:not(:last-child) {\n        margin-right: 0.2em;\n      }\n\n      /* Generic, top position */\n      :host([generic=""][tab-position="top"]) .tab {\n        border-radius: 0.25em 0.25em 0 0;\n        margin-bottom: -1px;\n      }\n      :host([generic=""][tab-position="top"]) .tab.selected {\n        border-bottom-color: transparent;\n      }\n\n      /* Generic, bottom position */\n      :host([generic=""][tab-position="bottom"]) .tab {\n        border-radius: 0 0 0.25em 0.25em;\n        margin-top: -1px;\n      }\n      :host([generic=""][tab-position="bottom"]) .tab.selected {\n        border-top-color: transparent;\n      }\n\n      /* Generic, left/right positions */\n      :host([generic=""][tab-position="left"]) .tab:not(:last-child),\n      :host([generic=""][tab-position="right"]) .tab:not(:last-child) {\n        margin-bottom: 0.2em;\n      }\n\n      /* Generic, left position */\n      :host([generic=""][tab-position="left"]) .tab {\n        border-radius: 0.25em 0 0 0.25em;\n        margin-right: -1px;\n      }\n      :host([generic=""][tab-position="left"]) .tab.selected {\n        border-right-color: transparent;\n      }\n\n      /* Generic, right position */\n      :host([generic=""][tab-position="right"]) .tab {\n        border-radius: 0 0.25em 0.25em 0;\n        margin-left: -1px;\n      }\n      :host([generic=""][tab-position="right"]) .tab.selected {\n        border-left-color: transparent;\n      }\n      </style>\n\n      <div id="tabs"></div>\n      <div id="pages">\n        <slot></slot>\n      </div>\n    ';
    }
  }]);

  return TabStrip;
}(base);

function applySelectionToTab(tab, selected) {
  (0, _toggleClass2.default)(tab, 'selected', selected);
  tab.setAttribute('aria-selected', selected);
}

customElements.define('basic-tab-strip', TabStrip);
exports.default = TabStrip;

},{"../../basic-component-mixins/src/ContentFirstChildTarget":11,"../../basic-component-mixins/src/DirectionSelection":12,"../../basic-component-mixins/src/DistributedChildrenAsContent":14,"../../basic-component-mixins/src/Generic":16,"../../basic-component-mixins/src/ItemsSelection":17,"../../basic-component-mixins/src/KeyboardDirection":19,"../../basic-component-mixins/src/ObserveContentChanges":22,"../../basic-component-mixins/src/TargetSelection":32,"../../basic-component-mixins/src/createSymbol":35,"../../basic-component-mixins/src/renderArrayAsElements":37,"../../basic-component-mixins/src/toggleClass":38,"../../basic-element-base/src/ElementBase":40}],52:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _ElementBase = require('../../basic-element-base/src/ElementBase');

var _ElementBase2 = _interopRequireDefault(_ElementBase);

var _Generic = require('../../basic-component-mixins/src/Generic');

var _Generic2 = _interopRequireDefault(_Generic);

var _ItemsSelection = require('../../basic-component-mixins/src/ItemsSelection');

var _ItemsSelection2 = _interopRequireDefault(_ItemsSelection);

var _Modes = require('../../basic-modes/src/Modes');

var _Modes2 = _interopRequireDefault(_Modes);

var _TabStrip = require('../../basic-tab-strip/src/TabStrip');

var _TabStrip2 = _interopRequireDefault(_TabStrip);

var _TargetSelection = require('../../basic-component-mixins/src/TargetSelection');

var _TargetSelection2 = _interopRequireDefault(_TargetSelection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // jshint ignore:line
// jshint ignore:line

/**
 * A set of pages with a tab strip governing which page is shown.
 *
 * This stock combination puts together a [basic-tab-strip](../basic-tab-strip/)
 * and a [basic-modes](../basic-modes/) element. If you'd like to create
 * something more complex than this arrangement, you can use either of those
 * elements on its own.
 *
 * Since this component uses basic-tab-strip internally, it obtains the names of
 * the individual tabs the same way: from a child's `aria-label` property.
 * Example:
 *
 *     <basic-tabs>
 *       <div aria-label="One">Page one</div>
 *       <div aria-label="Two">Page two</div>
 *       <div aria-label="Three">Page three</div>
 *     </basic-tabs>
 *
 * @extends ElementBase
 * @mixes ItemsSelection
 * @mixes TargetSelection
 */

var Tabs = function (_ElementBase$compose) {
  _inherits(Tabs, _ElementBase$compose);

  function Tabs() {
    _classCallCheck(this, Tabs);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Tabs).apply(this, arguments));
  }

  _createClass(Tabs, [{
    key: 'generic',
    get: function get() {
      return _get(Object.getPrototypeOf(Tabs.prototype), 'generic', this);
    },
    set: function set(value) {
      _set(Object.getPrototypeOf(Tabs.prototype), 'generic', value, this);
      // Forward the generic value to the tab strip.
      this.$.tabStrip.generic = value;
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
      return this.$ && this.$.tabStrip.tabPosition;
    },
    set: function set(position) {
      this.$.tabStrip.tabPosition = position;
    }
  }, {
    key: 'target',
    get: function get() {
      return this.$ && this.$.modes;
    }
  }, {
    key: 'template',
    get: function get() {
      return '\n      <style>\n      :host {\n        display: -webkit-flex;\n        display: flex;\n        -webkit-flex-direction: column;\n        flex-direction: column;\n      }\n\n      #tabStrip {\n        -webkit-flex: 1;\n        flex: 1;\n      }\n\n      #modes ::content > * {\n        -webkit-flex: 1;\n        flex: 1;\n      }\n      </style>\n\n      <basic-tab-strip id="tabStrip">\n        <basic-modes id="modes">\n          <slot></slot>\n        </basic-modes>\n      </basic-tab-strip>\n    ';
    }
  }]);

  return Tabs;
}(_ElementBase2.default.compose(_Generic2.default, _ItemsSelection2.default, _TargetSelection2.default));

customElements.define('basic-tabs', Tabs);

},{"../../basic-component-mixins/src/Generic":16,"../../basic-component-mixins/src/ItemsSelection":17,"../../basic-component-mixins/src/TargetSelection":32,"../../basic-element-base/src/ElementBase":40,"../../basic-modes/src/Modes":43,"../../basic-tab-strip/src/TabStrip":51}],53:[function(require,module,exports){
'use strict';

var _AnimationStage = require('../../basic-animation-stage/src/AnimationStage');

var _AnimationStage2 = _interopRequireDefault(_AnimationStage);

var _ArrowSelection = require('../../basic-arrow-selection/src/ArrowSelection');

var _ArrowSelection2 = _interopRequireDefault(_ArrowSelection);

var _AutosizeTextarea = require('../../basic-autosize-textarea/src/AutosizeTextarea');

var _AutosizeTextarea2 = _interopRequireDefault(_AutosizeTextarea);

var _Carousel = require('../../basic-carousel/src/Carousel');

var _Carousel2 = _interopRequireDefault(_Carousel);

var _CollapsiblePanel = require('../../basic-collapsible-panel/src/CollapsiblePanel');

var _CollapsiblePanel2 = _interopRequireDefault(_CollapsiblePanel);

var _CurrentAnchor = require('../../basic-current-anchor/src/CurrentAnchor');

var _CurrentAnchor2 = _interopRequireDefault(_CurrentAnchor);

var _FadeOverflow = require('../../basic-fade-overflow/src/FadeOverflow');

var _FadeOverflow2 = _interopRequireDefault(_FadeOverflow);

var _ListBox = require('../../basic-list-box/src/ListBox');

var _ListBox2 = _interopRequireDefault(_ListBox);

var _Modes = require('../../basic-modes/src/Modes');

var _Modes2 = _interopRequireDefault(_Modes);

var _PageDots = require('../../basic-page-dots/src/PageDots');

var _PageDots2 = _interopRequireDefault(_PageDots);

var _PlayControls = require('../../basic-play-controls/src/PlayControls');

var _PlayControls2 = _interopRequireDefault(_PlayControls);

var _Slideshow = require('../../basic-slideshow/src/Slideshow');

var _Slideshow2 = _interopRequireDefault(_Slideshow);

var _SlideshowTimer = require('../../basic-slideshow-timer/src/SlideshowTimer');

var _SlideshowTimer2 = _interopRequireDefault(_SlideshowTimer);

var _SlidingCarousel = require('../../basic-sliding-carousel/src/SlidingCarousel');

var _SlidingCarousel2 = _interopRequireDefault(_SlidingCarousel);

var _SlidingViewport = require('../../basic-sliding-viewport/src/SlidingViewport');

var _SlidingViewport2 = _interopRequireDefault(_SlidingViewport);

var _SpreadItems = require('../../basic-spread-items/src/SpreadItems');

var _SpreadItems2 = _interopRequireDefault(_SpreadItems);

var _Tabs = require('../../basic-tabs/src/Tabs');

var _Tabs2 = _interopRequireDefault(_Tabs);

var _TabStrip = require('../../basic-tab-strip/src/TabStrip');

var _TabStrip2 = _interopRequireDefault(_TabStrip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"../../basic-animation-stage/src/AnimationStage":1,"../../basic-arrow-selection/src/ArrowSelection":2,"../../basic-autosize-textarea/src/AutosizeTextarea":3,"../../basic-carousel/src/Carousel":4,"../../basic-collapsible-panel/src/CollapsiblePanel":5,"../../basic-current-anchor/src/CurrentAnchor":39,"../../basic-fade-overflow/src/FadeOverflow":41,"../../basic-list-box/src/ListBox":42,"../../basic-modes/src/Modes":43,"../../basic-page-dots/src/PageDots":44,"../../basic-play-controls/src/PlayControls":45,"../../basic-slideshow-timer/src/SlideshowTimer":46,"../../basic-slideshow/src/Slideshow":47,"../../basic-sliding-carousel/src/SlidingCarousel":48,"../../basic-sliding-viewport/src/SlidingViewport":49,"../../basic-spread-items/src/SpreadItems":50,"../../basic-tab-strip/src/TabStrip":51,"../../basic-tabs/src/Tabs":52}],54:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ElementBase2 = require('../../basic-element-base/src/ElementBase');

var _ElementBase3 = _interopRequireDefault(_ElementBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * A set of events which, if fired by the inner standard element, should be
 * re-raised by the custom element. (We only need to do that under native
 * Shadow DOM, not the polyfill.)
 *
 * These are events which are spec'ed to NOT get retargetted across a Shadow DOM
 * boundary, organized by which element(s) raise the events. To properly
 * simulate these, we will need to listen for the real events, then re-raise a
 * simulation of the original event. For more information, see
 * https://www.w3.org/TR/shadow-dom/#h-events-that-are-not-leaked-into-ancestor-trees.
 *
 * It appears that we do *not* need to re-raise the non-bubbling "focus" and
 * "blur" events. These appear to be automatically re-raised as expected -- but
 * it's not clear why that happens.
 *
 * The list below is reasonably complete. It omits elements that cannot be
 * wrapped (see class notes above). Also, we haven't actually tried wrapping
 * every element in this list; some of the more obscure ones might not actually
 * work as expected, but it was easier to include them for completeness than
 * to actually verify whether or not the element can be wrapped.
 */
var reraiseEvents = {
  address: ['scroll'],
  blockquote: ['scroll'],
  caption: ['scroll'],
  center: ['scroll'],
  dd: ['scroll'],
  dir: ['scroll'],
  div: ['scroll'],
  dl: ['scroll'],
  dt: ['scroll'],
  fieldset: ['scroll'],
  form: ['reset', 'scroll'],
  frame: ['load'],
  h1: ['scroll'],
  h2: ['scroll'],
  h3: ['scroll'],
  h4: ['scroll'],
  h5: ['scroll'],
  h6: ['scroll'],
  iframe: ['load'],
  img: ['abort', 'error', 'load'],
  input: ['abort', 'change', 'error', 'select', 'load'],
  keygen: ['reset', 'select'],
  li: ['scroll'],
  link: ['load'],
  menu: ['scroll'],
  object: ['error', 'scroll'],
  ol: ['scroll'],
  p: ['scroll'],
  script: ['error', 'load'],
  select: ['change', 'scroll'],
  tbody: ['scroll'],
  tfoot: ['scroll'],
  thead: ['scroll'],
  textarea: ['change', 'select', 'scroll']
};

// Keep track of which re-raised events should bubble.
var eventBubbles = {
  abort: true,
  change: true,
  reset: true
};

// Elements which are display: block by default.
// Source: https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements
var blockElements = ['address', 'article', 'aside', 'blockquote', 'canvas', 'dd', 'div', 'dl', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'hgroup', 'hr', 'li', 'main', 'nav', 'noscript', 'ol', 'output', 'p', 'pre', 'section', 'table', 'tfoot', 'ul', 'video'];

/**
 * Wraps a standard HTML element so that the standard behavior can then be
 * extended.
 *
 * [Live demo](http://basicwebcomponents.org/basic-web-components/packages/basic-wrapped-standard-element/)
 *
 * See also [basic-autosize-textarea](../basic-autosize-textarea) and
 * [basic-current-anchor](../basic-current-anchor). The former uses
 * WrappedStandardElement to wrap a standard `<textarea>` and `<a>`,
 * respectively.
 *
 * The Custom Elements spec does not currently (as of March 2016) allow you to
 * extend the behavior of a standard HTML element like `<a>` or `<button>`.
 * As a partial workaround, the WrappedStandardElement class can create a class
 * for you that wraps an instance of a standard HTML element. For example, the
 * code below creates a class that will wrap an instance of a standard `<a>`
 * element:
 *
 *     class WrappedA extends WrappedStandardElement.wrap('a') {
 *       customMethod() { ... }
 *     }
 *     customElements.define('wrapped-a', WrappedA);
 *
 * An instance of the resulting class will look to the user like an instance of
 * the standard element class it wraps. The resulting class will *not* be an
 * `instanceof` the standard class (here, HTMLAnchorElement). Another limitation
 * is that the resulting `<wrapped-a>` will not automatically pick up CSS styles
 * for standard `<a>` elements. However, the resulting class *can* be extended.
 * E.g., instances of the above class have a `customMethod()` available to them.
 *
 * Any properties defined by the original standard element will be exposed on
 * the resulting wrapper class, and calls to get or set those properties will be
 * delegated to the wrapped element instance. Continuing the above example:
 *
 *     let wrapped = document.createElement('wrapped-a');
 *     wrapped.href = 'http://example.com/';
 *     wrapped.textContent = 'Click here';
 *
 * Here, the created custom `<wrapped-a>` element will contain inside its
 * shadow tree an instance of a standard `<a>` element. The call to set the
 * wrapper's `href` property will ultimately set the `href` on the inner link.
 * Moreover, the text content of the `<wrapped-a>` element will appear inside
 * the inner link. The result of all this is that the user will see what *looks*
 * like a normal link, just as if you had written
 * `<a href="http://example.com/">Click here</a>`. However, the actual element
 * will be an instance of your custom class, with whatever behavior you've
 * defined for it.
 *
 * Wrapped elements should raise the same events as the original standard
 * elements. E.g., if you wrap an `<img>` element, the wrapped result will raise
 * the standard `load` event as expected.
 *
 * Some elements, such as `<body>`, `<html>`, and `<style>` cannot be wrapped
 * and still achieve their standard behavior.
 *
 * @extends ElementBase
 */

var WrappedStandardElement = function (_ElementBase) {
  _inherits(WrappedStandardElement, _ElementBase);

  function WrappedStandardElement() {
    _classCallCheck(this, WrappedStandardElement);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(WrappedStandardElement).apply(this, arguments));
  }

  _createClass(WrappedStandardElement, [{
    key: 'createdCallback',
    value: function createdCallback() {
      var _this2 = this;

      if (_get(Object.getPrototypeOf(WrappedStandardElement.prototype), 'createdCallback', this)) {
        _get(Object.getPrototypeOf(WrappedStandardElement.prototype), 'createdCallback', this).call(this);
      }

      // Listen for any events raised by the inner element which will not
      // automatically be retargetted across the Shadow DOM boundary, and re-raise
      // those events when they happen.
      //
      // Note: It's unclear why we need to do this in the Shadow DOM polyfill.
      // In theory, events in the light DOM should bubble as normal. But this
      // code appears to be required in the polyfill case as well.
      var eventNames = reraiseEvents[this.extends] || [];
      eventNames.forEach(function (eventName) {
        _this2.inner.addEventListener(eventName, function (realEvent) {
          var event = new Event(eventName, {
            bubbles: eventBubbles[eventName] || false
          });
          _this2.dispatchEvent(event);
        });
      });
    }

    /**
     * Returns a reference to the inner standard HTML element.
     *
     * @type {HTMLElement}
     */

  }, {
    key: 'ariaLabel',

    /**
     * A description for the user of the element's purpose on the page. Setting
     * this applies the label to the inner element, ensuring that screen readers
     * and other assistive technologies will provide a meaningful description to
     * the user.
     *
     * @type {string}
     */
    get: function get() {
      return this.inner.getAttribute('aria-label');
    },
    set: function set(label) {
      // Propagate the ARIA label to the inner textarea.
      this.inner.setAttribute('aria-label', label);
    }
  }, {
    key: 'inner',
    get: function get() {
      return this.$.inner;
    }

    /**
     * The template copied into the shadow tree of new instances of this element.
     *
     * The default value of this property is a template that includes an instance
     * the standard element being wrapped, with a `<slot>` element inside that
     * to pick up the element's light DOM content. For example, if you wrap an
     * `<a>` element, then the default template will look like:
     *
     *     <template>
     *       <style>
     *       :host {
     *         display: inline-block;
     *       }
     *       </style>
     *       <a id="inner">
     *         <slot></slot>
     *       </a>
     *     </template>
     *
     * The `display` styling applied to the host will be `block` for elements that
     * are block elements by default, and `inline-block` (not `inline`) for other
     * elements.
     *
     * If you'd like the template to include other elements, then override this
     * property and return a template of your own. The template should include an
     * instance of the standard HTML element you are wrapping, and the ID of that
     * element should be "inner".
     *
     * @type {(string|HTMLTemplateElement)}
     */

  }, {
    key: 'template',
    get: function get() {
      var display = blockElements.indexOf(this.extends) >= 0 ? 'block' : 'inline-block';
      // TODO: Use slot instead of content.
      return '<style>:host { display: ' + display + '}</style><' + this.extends + ' id="inner"><content></content></' + this.extends;
    }

    /**
     * Creates a class that wraps a standard HTML element.
     *
     * Note that the resulting class is a subclass of WrappedStandardElement, not
     * the standard class being wrapped. E.g., if you call
     * `WrappedStandardElement.wrap('a')`, you will get a class whose shadow tree
     * will include an anchor element, but the class will *not* inherit from
     * HTMLAnchorElement.
     *
     * @param {string} extendsTag - the standard HTML element tag to extend
     */

  }], [{
    key: 'wrap',
    value: function wrap(extendsTag) {

      // Create the new class.

      var Wrapped = function (_WrappedStandardEleme) {
        _inherits(Wrapped, _WrappedStandardEleme);

        function Wrapped() {
          _classCallCheck(this, Wrapped);

          return _possibleConstructorReturn(this, Object.getPrototypeOf(Wrapped).apply(this, arguments));
        }

        return Wrapped;
      }(WrappedStandardElement);

      // Indicate which tag it wraps.

      Wrapped.prototype.extends = extendsTag;

      // Create getter/setters that delegate to the wrapped element.
      var element = document.createElement(extendsTag);
      var extendsPrototype = element.constructor.prototype;
      var names = Object.getOwnPropertyNames(extendsPrototype);
      names.forEach(function (name) {
        var descriptor = Object.getOwnPropertyDescriptor(extendsPrototype, name);
        var delegate = createPropertyDelegate(name, descriptor);
        Object.defineProperty(Wrapped.prototype, name, delegate);
      });

      return Wrapped;
    }
  }]);

  return WrappedStandardElement;
}(_ElementBase3.default);

function createPropertyDelegate(name, descriptor) {
  var delegate = {
    configurable: descriptor.configurable,
    enumerable: descriptor.enumerable
  };
  if (descriptor.get) {
    delegate.get = function () {
      return this.inner[name];
    };
  }
  if (descriptor.set) {
    delegate.set = function (value) {
      this.inner[name] = value;
    };
  }
  if (descriptor.writable) {
    delegate.writable = descriptor.writable;
  }
  return delegate;
}

exports.default = WrappedStandardElement;

},{"../../basic-element-base/src/ElementBase":40}]},{},[53])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwYWNrYWdlcy9iYXNpYy1hbmltYXRpb24tc3RhZ2Uvc3JjL0FuaW1hdGlvblN0YWdlLmpzIiwicGFja2FnZXMvYmFzaWMtYXJyb3ctc2VsZWN0aW9uL3NyYy9BcnJvd1NlbGVjdGlvbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWF1dG9zaXplLXRleHRhcmVhL3NyYy9BdXRvc2l6ZVRleHRhcmVhLmpzIiwicGFja2FnZXMvYmFzaWMtY2Fyb3VzZWwvc3JjL0Nhcm91c2VsLmpzIiwicGFja2FnZXMvYmFzaWMtY29sbGFwc2libGUtcGFuZWwvc3JjL0NvbGxhcHNpYmxlUGFuZWwuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9BdHRyaWJ1dGVNYXJzaGFsbGluZy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NsaWNrU2VsZWN0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ29sbGVjdGl2ZS5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NvbXBvc2FibGUuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Db250ZW50QXNJdGVtcy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NvbnRlbnRGaXJzdENoaWxkVGFyZ2V0LmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlyZWN0aW9uU2VsZWN0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlzdHJpYnV0ZWRDaGlsZHJlbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9GcmFjdGlvbmFsU2VsZWN0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvR2VuZXJpYy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0l0ZW1zU2VsZWN0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvS2V5Ym9hcmQuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9LZXlib2FyZERpcmVjdGlvbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0tleWJvYXJkUGFnZWRTZWxlY3Rpb24uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9LZXlib2FyZFByZWZpeFNlbGVjdGlvbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL09ic2VydmVDb250ZW50Q2hhbmdlcy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL09wZW5DbG9zZS5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NlbGVjdGlvbkFuaW1hdGlvbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NlbGVjdGlvbkFyaWFBY3RpdmUuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TZWxlY3Rpb25IaWdobGlnaHQuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TZWxlY3Rpb25JblZpZXcuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TaGFkb3dFbGVtZW50UmVmZXJlbmNlcy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NoYWRvd1RlbXBsYXRlLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU3dpcGVEaXJlY3Rpb24uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9UYXJnZXRJbkNvbGxlY3RpdmUuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9UYXJnZXRTZWxlY3Rpb24uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9UaW1lclNlbGVjdGlvbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1RyYWNrcGFkRGlyZWN0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvY3JlYXRlU3ltYm9sLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvbWljcm90YXNrLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvcmVuZGVyQXJyYXlBc0VsZW1lbnRzLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvdG9nZ2xlQ2xhc3MuanMiLCJwYWNrYWdlcy9iYXNpYy1jdXJyZW50LWFuY2hvci9zcmMvQ3VycmVudEFuY2hvci5qcyIsInBhY2thZ2VzL2Jhc2ljLWVsZW1lbnQtYmFzZS9zcmMvRWxlbWVudEJhc2UuanMiLCJwYWNrYWdlcy9iYXNpYy1mYWRlLW92ZXJmbG93L3NyYy9GYWRlT3ZlcmZsb3cuanMiLCJwYWNrYWdlcy9iYXNpYy1saXN0LWJveC9zcmMvTGlzdEJveC5qcyIsInBhY2thZ2VzL2Jhc2ljLW1vZGVzL3NyYy9Nb2Rlcy5qcyIsInBhY2thZ2VzL2Jhc2ljLXBhZ2UtZG90cy9zcmMvUGFnZURvdHMuanMiLCJwYWNrYWdlcy9iYXNpYy1wbGF5LWNvbnRyb2xzL3NyYy9QbGF5Q29udHJvbHMuanMiLCJwYWNrYWdlcy9iYXNpYy1zbGlkZXNob3ctdGltZXIvc3JjL1NsaWRlc2hvd1RpbWVyLmpzIiwicGFja2FnZXMvYmFzaWMtc2xpZGVzaG93L3NyYy9TbGlkZXNob3cuanMiLCJwYWNrYWdlcy9iYXNpYy1zbGlkaW5nLWNhcm91c2VsL3NyYy9TbGlkaW5nQ2Fyb3VzZWwuanMiLCJwYWNrYWdlcy9iYXNpYy1zbGlkaW5nLXZpZXdwb3J0L3NyYy9TbGlkaW5nVmlld3BvcnQuanMiLCJwYWNrYWdlcy9iYXNpYy1zcHJlYWQtaXRlbXMvc3JjL1NwcmVhZEl0ZW1zLmpzIiwicGFja2FnZXMvYmFzaWMtdGFiLXN0cmlwL3NyYy9UYWJTdHJpcC5qcyIsInBhY2thZ2VzL2Jhc2ljLXRhYnMvc3JjL1RhYnMuanMiLCJwYWNrYWdlcy9iYXNpYy13ZWItY29tcG9uZW50cy9zcmMvYWxsLmpzIiwicGFja2FnZXMvYmFzaWMtd3JhcHBlZC1zdGFuZGFyZC1lbGVtZW50L3NyYy9XcmFwcGVkU3RhbmRhcmRFbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1VBLElBQUksSUFBSSxHQUFHLHNCQUFZLE9BQU8seU5BUTdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFDO0lBNkJJLGNBQWM7WUFBZCxjQUFjOztXQUFkLGNBQWM7MEJBQWQsY0FBYzs7a0VBQWQsY0FBYzs7O2VBQWQsY0FBYzs7dUNBRUM7QUFDakIscUNBSEUsY0FBYyx3Q0FHWTtBQUFFLG1DQUg1QixjQUFjLGtEQUd1QztPQUFFO0FBQ3pELFVBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7S0FDL0I7Ozt3QkFFYztBQUNiLHFVQWdCRTtLQUNIOzs7U0F6QkcsY0FBYztFQUFTLElBQUk7O0FBOEJqQyxjQUFjLENBQUMsTUFBTSxDQUFDLHVCQUF1QixFQUFFLGNBQWMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9EL0QsSUFBTSx1QkFBdUIsR0FBRyw0QkFBYSxtQkFBbUIsQ0FBQyxDQUFDO0FBQ2xFLElBQU0sdUJBQXVCLEdBQUcsNEJBQWEsbUJBQW1C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QyxHQUFHLEdBQUcsVUFBUyxLQUFLLEVBQUU7QUFDN0IsVUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7S0FDMUIsQ0FBQztHQUNIO0FBQ0QsTUFBSSxVQUFVLENBQUMsUUFBUSxFQUFFO0FBQ3ZCLFlBQVEsQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQztHQUN6QztBQUNELFNBQU8sUUFBUSxDQUFDO0NBQ2pCOztrQkFHYyxzQkFBc0IiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IEVsZW1lbnRCYXNlIGZyb20gJy4uLy4uL2Jhc2ljLWVsZW1lbnQtYmFzZS9zcmMvRWxlbWVudEJhc2UnO1xuaW1wb3J0IENvbnRlbnRBc0l0ZW1zIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NvbnRlbnRBc0l0ZW1zJztcbmltcG9ydCBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50IGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQnO1xuaW1wb3J0IEZyYWN0aW9uYWxTZWxlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRnJhY3Rpb25hbFNlbGVjdGlvbic7XG5pbXBvcnQgSXRlbXNTZWxlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvSXRlbXNTZWxlY3Rpb24nO1xuaW1wb3J0IE9ic2VydmVDb250ZW50Q2hhbmdlcyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9PYnNlcnZlQ29udGVudENoYW5nZXMnO1xuaW1wb3J0IFNlbGVjdGlvbkFuaW1hdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TZWxlY3Rpb25BbmltYXRpb24nO1xuaW1wb3J0IFNlbGVjdGlvbkFyaWFBY3RpdmUgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2VsZWN0aW9uQXJpYUFjdGl2ZSc7XG5cblxubGV0IGJhc2UgPSBFbGVtZW50QmFzZS5jb21wb3NlKFxuICBDb250ZW50QXNJdGVtcyxcbiAgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCxcbiAgRnJhY3Rpb25hbFNlbGVjdGlvbixcbiAgSXRlbXNTZWxlY3Rpb24sXG4gIE9ic2VydmVDb250ZW50Q2hhbmdlcyxcbiAgU2VsZWN0aW9uQW5pbWF0aW9uLFxuICBTZWxlY3Rpb25BcmlhQWN0aXZlXG4pO1xuXG4vKipcbiAqIFByZXNlbnRzIGEgc2luZ2xlIGl0ZW0gYXMgc2VsZWN0ZWQsIHByb3ZpZGluZyBhbmltYXRlZCB0cmFuc2l0aW9ucyB3aGVuIHRoZVxuICogc2VsZWN0aW9uIGNoYW5nZXMuIFRoZSBzYW1lIGFuaW1hdGlvbiBjYW4gYmUgc2hvd24gYXQgYW4gYXJiaXRyYXJ5IHBvaW50LFxuICogZ2VuZXJhbGx5IHVzZWQgdG8gcmVmbGVjdCBhIHVzZXItY29udHJvbGxlZCB0b3VjaCBvciB0cmFja3BhZCBkcmFnIG9wZXJhdGlvblxuICogaW4gcHJvZ3Jlc3MuXG4gKlxuICogW0xpdmUgZGVtb10oaHR0cDovL2Jhc2ljd2ViY29tcG9uZW50cy5vcmcvYmFzaWMtd2ViLWNvbXBvbmVudHMvcGFja2FnZXMvYmFzaWMtYW5pbWF0aW9uLXN0YWdlLylcbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBpcyBpbnRlbmRlZCB0byBiZSB1c2VkIGFzIGEgcHJvZ3JhbW1hdGljIHJlbmRlcmluZyBzdXJmYWNlIGZvclxuICogY29tcG9uZW50cyB3aGljaCB3YW50IHRvIHNob3cgdHJhbnNpdGlvbmFsIGVmZmVjdHMuXG4gKlxuICogVGhlIGNvbXBvbmVudCB1c2VzIHRoZSBbU2VsZWN0aW9uQW5pbWF0aW9uXSguLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL2RvY3MvU2VsZWN0aW9uQW5pbWF0aW9uLm1kKVxuICogbWl4aW4sIHdoaWNoIGluIHR1cm4gdXNlcyB0aGUgV2ViIEFuaW1hdGlvbnMgQVBJLiBGb3IgdXNlIG9uIGJyb3dzZXJzIHdoaWNoXG4gKiBkbyBub3Qgc3VwcG9ydCB0aGF0IEFQSSBuYXRpdmVseSwgeW91IHdpbGwgbmVlZCB0byBsb2FkIHRoZVxuICogW1dlYiBBbmltYXRpb25zIHBvbHlmaWxsXShodHRwczovL2dpdGh1Yi5jb20vd2ViLWFuaW1hdGlvbnMvd2ViLWFuaW1hdGlvbnMtanMpLlxuICpcbiAqIEZvciBhIHNpbXBsZXIgY29tcG9uZW50IHRoYXQgZXhoaWJpdHMgb25seSBhIHNsaWRpbmcgZWZmZWN0LCBidXQgZG9lcyBub3RcbiAqIHJlcXVpcmUgdGhlIFdlYiBBbmltYXRpb25zIEFQSSwgc2VlIFtiYXNpYy1zbGlkaW5nLXZpZXdwb3J0XSguLi9iYXNpYy1zbGlkaW5nLXZpZXdwb3J0KS5cbiAqXG4gKiBAZXh0ZW5kcyBFbGVtZW50QmFzZVxuICogQG1peGVzIENvbnRlbnRBc0l0ZW1zXG4gKiBAbWl4ZXMgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudFxuICogQG1peGVzIEl0ZW1zU2VsZWN0aW9uXG4gKiBAbWl4ZXMgT2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzXG4gKiBAbWl4ZXMgU2VsZWN0aW9uQW5pbWF0aW9uXG4gKiBAbWl4ZXMgU2VsZWN0aW9uQXJpYUFjdGl2ZVxuICovXG5jbGFzcyBBbmltYXRpb25TdGFnZSBleHRlbmRzIGJhc2Uge1xuXG4gIGF0dGFjaGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHN1cGVyLmF0dGFjaGVkQ2FsbGJhY2spIHsgc3VwZXIuYXR0YWNoZWRDYWxsYmFjaygpOyB9XG4gICAgdGhpcy5zZWxlY3Rpb25SZXF1aXJlZCA9IHRydWU7XG4gIH1cblxuICBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICA6OmNvbnRlbnQgPiAqIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICBgO1xuICB9XG5cbn1cblxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2Jhc2ljLWFuaW1hdGlvbi1zdGFnZScsIEFuaW1hdGlvblN0YWdlKTtcbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvY3JlYXRlU3ltYm9sJztcbmltcG9ydCBFbGVtZW50QmFzZSBmcm9tICcuLi8uLi9iYXNpYy1lbGVtZW50LWJhc2Uvc3JjL0VsZW1lbnRCYXNlJztcbmltcG9ydCBDb250ZW50Rmlyc3RDaGlsZFRhcmdldCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Db250ZW50Rmlyc3RDaGlsZFRhcmdldCc7XG5pbXBvcnQgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50JztcbmltcG9ydCBEaXJlY3Rpb25TZWxlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlyZWN0aW9uU2VsZWN0aW9uJztcbmltcG9ydCBJdGVtc1NlbGVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9JdGVtc1NlbGVjdGlvbic7XG5pbXBvcnQgS2V5Ym9hcmQgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvS2V5Ym9hcmQnO1xuaW1wb3J0IEtleWJvYXJkRGlyZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0tleWJvYXJkRGlyZWN0aW9uJztcbmltcG9ydCBPYnNlcnZlQ29udGVudENoYW5nZXMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvT2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzJztcbmltcG9ydCBUYXJnZXRJbkNvbGxlY3RpdmUgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvVGFyZ2V0SW5Db2xsZWN0aXZlJztcbmltcG9ydCBUYXJnZXRTZWxlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvVGFyZ2V0U2VsZWN0aW9uJztcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3QgbW91c2Vkb3duTGlzdGVuZXJTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ21vdXNlZG93bkxpc3RlbmVyJyk7XG5jb25zdCBtb3VzZW1vdmVMaXN0ZW5lclN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnbW91c2Vtb3ZlTGlzdGVuZXInKTtcbmNvbnN0IGxhc3RNb3VzZVhTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2xhc3RNb3VzZVgnKTtcbmNvbnN0IGxhc3RNb3VzZVlTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2xhc3RNb3VzZVknKTtcbmNvbnN0IG1vdXNlVGltZW91dFN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnbW91c2VUaW1lb3V0Jyk7XG5cblxubGV0IGJhc2UgPSBFbGVtZW50QmFzZS5jb21wb3NlKFxuICBDb250ZW50Rmlyc3RDaGlsZFRhcmdldCxcbiAgRGlyZWN0aW9uU2VsZWN0aW9uLFxuICBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50LFxuICBJdGVtc1NlbGVjdGlvbixcbiAgS2V5Ym9hcmQsXG4gIEtleWJvYXJkRGlyZWN0aW9uLFxuICBPYnNlcnZlQ29udGVudENoYW5nZXMsXG4gIFRhcmdldEluQ29sbGVjdGl2ZSxcbiAgVGFyZ2V0U2VsZWN0aW9uXG4pO1xuXG4vKipcbiAqIENvbXBvbmVudCB3aGljaCBhZGRzIHByb21pbmVudCBsZWZ0IGFuZCByaWdodCBhcnJvdyBidXR0b25zIHRvIGEgd3JhcHBlZFxuICogY2hpbGQgc3VjaCBhcyBhIGNhcm91c2VsLlxuICpcbiAqIFlvdSBjYW4gc2VlIGEgW2xpdmUgZGVtb10oaHR0cDovL2Jhc2ljd2ViY29tcG9uZW50cy5vcmcvYmFzaWMtd2ViLWNvbXBvbmVudHMvcGFja2FnZXMvYmFzaWMtY2Fyb3VzZWwvY2Fyb3VzZWxXaXRoQXJyb3dzLmh0bWwpXG4gKiBvZiB0aGlzIGNvbXBvbmVudCBhcHBsaWVkIHRvIGEgY2Fyb3VzZWwuXG4gKlxuICogQ2xpY2tpbmcgdGhlIGxlZnQvcmlnaHQgYnV0dG9ucyBzZWxlY3RzIHRoZSBwcmV2aW91cy9uZXh0IGl0ZW0uXG4gKlxuICogVHlwaWNhbCB1c2FnZTpcbiAqXG4gKiAgICAgPGJhc2ljLWFycm93LXNlbGVjdGlvbj5cbiAqICAgICAgIDxiYXNpYy1jYXJvdXNlbD5cbiAqICAgICAgICAgLi4uIGltYWdlcywgZXRjLiAuLi5cbiAqICAgICAgIDwvYmFzaWMtY2Fyb3VzZWw+XG4gKiAgICAgPC9iYXNpYy1hcnJvdy1zZWxlY3Rpb24+XG4gKlxuICogQnkgZGVmYXVsdCwgdGhlIGFycm93IGJ1dHRvbnMgYXJlIHNob3duIG9uIGRldmljZXMgd2l0aCBhIG1vdXNlIG9yIG1vdXNlLWxpa2VcbiAqIHBvaW50aW5nIGRldmljZS4gVGhleSBhcmUgbm90IHNob3duIG9uIGEgdG91Y2gtY2FwYWJsZSBkZXZpY2UgdW5sZXNzIG1vdXNlXG4gKiBtb3ZlbWVudCBpcyBkZXRlY3RlZC4gVG8gY2F1c2UgdGhlIGJ1dHRvbnMgdG8gYWx3YXlzIGFwcGVhciwgYXBwbHkgdGhlXG4gKiAnc2hvd0Fycm93cycgQ1NTIGNsYXNzLlxuICpcbiAqIEBleHRlbmRzIEVsZW1lbnRCYXNlXG4gKiBAbWl4ZXMgQ29udGVudEZpcnN0Q2hpbGRUYXJnZXRcbiAqIEBtaXhlcyBEaXJlY3Rpb25TZWxlY3Rpb25cbiAqIEBtaXhlcyBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50XG4gKiBAbWl4ZXMgSXRlbXNTZWxlY3Rpb25cbiAqIEBtaXhlcyBLZXlib2FyZFxuICogQG1peGVzIEtleWJvYXJkRGlyZWN0aW9uXG4gKiBAbWl4ZXMgVGFyZ2V0SW5Db2xsZWN0aXZlXG4gKiBAbWl4ZXMgVGFyZ2V0U2VsZWN0aW9uXG4gKi9cbmNsYXNzIEFycm93U2VsZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgZ2V0IGNhblNlbGVjdE5leHQoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmNhblNlbGVjdE5leHQ7XG4gIH1cbiAgc2V0IGNhblNlbGVjdE5leHQoY2FuU2VsZWN0TmV4dCkge1xuICAgIGlmICgnY2FuU2VsZWN0TmV4dCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuY2FuU2VsZWN0TmV4dCA9IGNhblNlbGVjdE5leHQ7IH1cbiAgICBpZiAodGhpcy4kKSB7XG4gICAgICB0aGlzLiQuYnV0dG9uUmlnaHQuZGlzYWJsZWQgPSAhY2FuU2VsZWN0TmV4dDtcbiAgICB9XG4gIH1cblxuICBnZXQgY2FuU2VsZWN0UHJldmlvdXMoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmNhblNlbGVjdFByZXZpb3VzO1xuICB9XG4gIHNldCBjYW5TZWxlY3RQcmV2aW91cyhjYW5TZWxlY3RQcmV2aW91cykge1xuICAgIGlmICgnY2FuU2VsZWN0UHJldmlvdXMnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLmNhblNlbGVjdFByZXZpb3VzID0gY2FuU2VsZWN0UHJldmlvdXM7IH1cbiAgICBpZiAodGhpcy4kKSB7XG4gICAgICB0aGlzLiQuYnV0dG9uTGVmdC5kaXNhYmxlZCA9ICFjYW5TZWxlY3RQcmV2aW91cztcbiAgICB9XG4gIH1cblxuICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuXG4gICAgdGhpcy4kLmJ1dHRvbkxlZnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICB0aGlzLnNlbGVjdFByZXZpb3VzKCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9KTtcbiAgICB0aGlzLiQuYnV0dG9uUmlnaHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICB0aGlzLnNlbGVjdE5leHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pO1xuICAgIGFzc3VtZUJ1dHRvbkZvY3VzKHRoaXMsIHRoaXMuJC5idXR0b25MZWZ0KTtcbiAgICBhc3N1bWVCdXR0b25Gb2N1cyh0aGlzLCB0aGlzLiQuYnV0dG9uUmlnaHQpO1xuXG4gICAgaWYgKCF0aGlzLmNsYXNzTGlzdC5jb250YWlucygnc2hvd0Fycm93cycpKSB7XG4gICAgICAvLyBEZXRlcm1pbmUgd2hldGhlciB3ZSBzaG91bGQgc2hvdyBhcnJvdyBidXR0b25zIG9yIG5vdC5cbiAgICAgIGlmIChkZXZpY2VTdXBwb3J0c1RvdWNoKCkpIHtcbiAgICAgICAgLy8gQSB0b3VjaCBkZXZpY2UgbWlnaHQgYWxzbyBzdXBwb3J0IGEgbW91c2UsIGJ1dCB3ZSBjYW4ndCBrbm93IHdoZXRoZXJcbiAgICAgICAgLy8gdGhlcmUncyBhY3R1YWxseSBhIG1vdXNlIHVudGlsIHdlIGhlYXIgZnJvbSBpdC5cbiAgICAgICAgbGlzdGVuRm9yTW91c2UodGhpcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUaGUgZGV2aWNlIGRvZXNuJ3Qgc3VwcG9ydCB0b3VjaCwgc28gYXNzdW1lIGl0IGhhcyBhIG1vdXNlLlxuICAgICAgICBzaG93QXJyb3dzKHRoaXMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldCBkZWZhdWx0cygpIHtcbiAgICBsZXQgZGVmYXVsdHMgPSBzdXBlci5kZWZhdWx0cyB8fCB7fTtcbiAgICBkZWZhdWx0cy5uYXZpZ2F0aW9uQXhpcyA9ICdob3Jpem9udGFsJztcbiAgICByZXR1cm4gZGVmYXVsdHM7XG4gIH1cblxuICBzZWxlY3RlZEl0ZW1DaGFuZ2VkKCkge1xuICAgIGlmIChzdXBlci5zZWxlY3RlZEl0ZW1DaGFuZ2VkKSB7IHN1cGVyLnNlbGVjdGVkSXRlbUNoYW5nZWQoKTsgfVxuICAgIC8vIEhBQ0s6IEZvcmNlIGFuIHVwZGF0ZSBvZiB0aGUgc2V0IG9mIHBvc3NpYmxlIG5hdmlnYXRpb25zLlxuICAgIHRoaXMuaXRlbXNDaGFuZ2VkKCk7XG4gIH1cblxuICAvKlxuICAgKiBUaGUgdGVtcGxhdGUgdXNlcyB0aGUgY2hldnJvbi1sZWZ0IGFuZCBjaGV2cm9uLXJpZ2h0IFNWRyBpY29ucyBmcm9tXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9Qb2x5bWVyRWxlbWVudHMvaXJvbi1pY29ucy9ibG9iL21hc3Rlci9pcm9uLWljb25zLmh0bWwuXG4gICAqL1xuICBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgfVxuXG4gICAgICAjY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAtd2Via2l0LWZsZXg6IDE7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICB9XG5cbiAgICAgICNjb250YWluZXIgOjpjb250ZW50ID4gKiB7XG4gICAgICAgIC13ZWJraXQtZmxleDogMTtcbiAgICAgICAgZmxleDogMTtcbiAgICAgIH1cblxuICAgICAgLm5hdmlnYXRpb25CdXR0b24ge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgICAgIGZpbGw6IGN1cnJlbnRDb2xvcjtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBvdXRsaW5lOiBub25lOyAvKiBSRVZJRVc6IEFjY2Vzc2liaWxpdHkgc2hvdWxkIGJlIHByb3ZpZGVkIGJ5IG90aGVyIGVsZW1lbnRzLiAqL1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgfVxuXG4gICAgICAubmF2aWdhdGlvbkJ1dHRvbjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgICAgLm5hdmlnYXRpb25CdXR0b246YWN0aXZlOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xuICAgICAgfVxuICAgICAgLm5hdmlnYXRpb25CdXR0b246ZGlzYWJsZWQge1xuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCg6bm90KC5zaG93QXJyb3dzKSkgLm5hdmlnYXRpb25CdXR0b24ge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICB9XG5cbiAgICAgIC5uYXZpZ2F0aW9uQnV0dG9uIC5pY29uIHtcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICB3aWR0aDogNDhweDtcbiAgICAgIH1cblxuICAgICAgLyogT3ZlcmxheSB2YXJpYW50ICovXG4gICAgICA6aG9zdCgub3ZlcmxheSkge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gICAgICA6aG9zdCgub3ZlcmxheSkgLm5hdmlnYXRpb25CdXR0b24ge1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgfVxuICAgICAgOmhvc3QoLm92ZXJsYXkpICNidXR0b25MZWZ0IHtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgIH1cbiAgICAgIDpob3N0KC5vdmVybGF5KSAjYnV0dG9uUmlnaHQge1xuICAgICAgICByaWdodDogMDtcbiAgICAgIH1cbiAgICAgIDpob3N0KC5vdmVybGF5KSAubmF2aWdhdGlvbkJ1dHRvbjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICAgIH1cbiAgICAgIDpob3N0KC5vdmVybGF5KSAubmF2aWdhdGlvbkJ1dHRvbjphY3RpdmU6bm90KDpkaXNhYmxlZCkge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gICAgICB9XG4gICAgICA6aG9zdCgub3ZlcmxheSkgLm5hdmlnYXRpb25CdXR0b246ZGlzYWJsZWQge1xuICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPCEtLVxuICAgICAgQWNjZXNzaWJpbGl0eSBub3RlOiBzaW5jZSB0aGUgbmF2aWdhdGlvbiBvZmZlcmVkIGJ5IHRoZSBhcnJvdyBidXR0b25zIHNob3VsZFxuICAgICAgYmUgcmVkdW5kYW50ICh0aGF0IGlzLCB0aGVyZSBzaG91bGQgYmUgb3RoZXIgd2F5cyBvZiBuYXZpZ2F0aW5nIHRoZSBsaXN0KSxcbiAgICAgIHdlIG1hcmsgdGhlIGJ1dHRvbiBhcyBhcmlhLWhpZGRlbiBzbyB0aGF0IGFzc2lzdGl2ZSBkZXZpY2VzIGlnbm9yZSB0aGVtLlxuICAgICAgLS0+XG4gICAgICA8YnV0dG9uIGlkPVwiYnV0dG9uTGVmdFwiIGNsYXNzPVwibmF2aWdhdGlvbkJ1dHRvblwiIGRpc2FibGVkIHRhYmluZGV4PVwiLTFcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgPHN2ZyBjbGFzcz1cImljb25cIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkIG1lZXRcIj5cbiAgICAgICAgICA8ZyBpZD1cImNoZXZyb24tbGVmdFwiPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0xNS40MSA3LjQxTDE0IDZsLTYgNiA2IDYgMS40MS0xLjQxTDEwLjgzIDEyelwiLz5cbiAgICAgICAgICA8L2c+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8ZGl2IGlkPVwiY29udGFpbmVyXCIgcm9sZT1cIm5vbmVcIj5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIGlkPVwiYnV0dG9uUmlnaHRcIiBjbGFzcz1cIm5hdmlnYXRpb25CdXR0b25cIiBkaXNhYmxlZCB0YWJpbmRleD1cIi0xXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgIDxzdmcgY2xhc3M9XCJpY29uXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBtZWV0XCI+XG4gICAgICAgICAgPGcgaWQ9XCJjaGV2cm9uLXJpZ2h0XCI+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTEwIDZMOC41OSA3LjQxIDEzLjE3IDEybC00LjU4IDQuNTlMMTAgMThsNi02elwiLz5cbiAgICAgICAgICA8L2c+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9idXR0b24+XG4gICAgYDtcbiAgfVxuXG59XG5cblxuLypcbiAqIEJ5IGRlZmF1bHQsIGEgYnV0dG9uIHdpbGwgYWx3YXlzIHRha2UgZm9jdXMgb24gbW91c2Vkb3duLiBGb3IgdGhpcyBjb21wb25lbnQsXG4gKiB3ZSB3YW50IHRvIG92ZXJyaWRlIHRoYXQgYmVoYXZpb3IsIHN1Y2ggdGhhdCBhIG1vdXNlZG93biBvbiBhIGJ1dHRvbiBrZWVwc1xuICogdGhlIGZvY3VzIG9uIHRoZSBvdXRlciBjb21wb25lbnQuXG4gKi9cbmZ1bmN0aW9uIGFzc3VtZUJ1dHRvbkZvY3VzKGVsZW1lbnQsIGJ1dHRvbikge1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZXZlbnQgPT4ge1xuICAgIC8vIEdpdmVuIHRoZSBvdXRlciBlbGVtZW50IGZvY3VzIGlmIGl0IGRvZXNuJ3QgYWxyZWFkeSBoYXZlIGl0LlxuICAgIGxldCBvdXRlcm1vc3QgPSBlbGVtZW50LmNvbGxlY3RpdmUub3V0ZXJtb3N0RWxlbWVudDtcbiAgICBpZiAob3V0ZXJtb3N0KSB7XG4gICAgICBvdXRlcm1vc3QuZm9jdXMoKTtcbiAgICB9XG4gICAgLy8gUHJldmVudCB0aGUgZGVmYXVsdCBmb2N1cy1vbi1tb3VzZWRvd24gYmVoYXZpb3IuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfSk7XG59XG5cblxuZnVuY3Rpb24gZGV2aWNlU3VwcG9ydHNUb3VjaCgpIHtcbiAgcmV0dXJuICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fFxuICAgICAgKHdpbmRvdy5Eb2N1bWVudFRvdWNoICYmIGRvY3VtZW50IGluc3RhbmNlb2Ygd2luZG93LkRvY3VtZW50VG91Y2gpO1xufVxuXG5cbi8vIFdlIHRyeSB0byBkZXRlY3QgdGhlIHByZXNlbmNlIG9mIGEgbW91c2UgYnkgbGlzdGVuaW5nIGZvciBtb3VzZW1vdmUgZXZlbnRzXG4vLyB3aGljaCBhcmUgKm5vdCogdGhlIHJlc3VsdCBvZiBhIG1vdXNlZG93bi4gT24gYSB0b3VjaCBkZXZpY2UsIGEgdGFwIG9uIHRoZVxuLy8gcGFnZSB3aWxsIGdlbmVyYXRlIGEgZmFrZSBtb3VzZW1vdmUsIGZvbGxvd2VkIGJ5IGEgbW91c2Vkb3duLiBXZSBkb24ndCB3YW50XG4vLyB0byByZXNwb25kIHRvIHRob3NlIGZha2UgbW91c2Vtb3ZlIGV2ZW50cy4gVG8gZGlzY3JpbWluYXRlIGJldHdlZW4gZmFrZSBhbmRcbi8vIHJlYWwgbW91c2Vtb3ZlIGV2ZW50cywgd2hlbiB3ZSBnZXQgYSBtb3VzZW1vdmUgZXZlbnQsIHdlIHdhaXQgZm9yIGEgYml0IHRvXG4vLyBzZWUgaWYgdGhlIHNhbWUgbG9jYXRpb24gaXMgcmVwb3J0ZWQgYXMgdGhlIGxvY2F0aW9uIG9mIGEgc3Vic2VxdWVudFxuLy8gbW91c2Vkb3duLlxuZnVuY3Rpb24gbGlzdGVuRm9yTW91c2UoZWxlbWVudCkge1xuXG4gIGVsZW1lbnRbbW91c2Vkb3duTGlzdGVuZXJTeW1ib2xdID0gZXZlbnQgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGBtb3VzZWRvd24gJHtldmVudC5wYWdlWH0sICR7ZXZlbnQucGFnZVl9YCk7XG4gICAgaWYgKGVsZW1lbnRbbW91c2VUaW1lb3V0U3ltYm9sXSkge1xuICAgICAgY2xlYXJUaW1lb3V0KGVsZW1lbnRbbW91c2VUaW1lb3V0U3ltYm9sXSk7XG4gICAgfVxuICAgIGVsZW1lbnRbbGFzdE1vdXNlWFN5bWJvbF0gPSBldmVudC5wYWdlWDtcbiAgICBlbGVtZW50W2xhc3RNb3VzZVlTeW1ib2xdID0gZXZlbnQucGFnZVk7XG4gIH07XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlbGVtZW50W21vdXNlZG93bkxpc3RlbmVyU3ltYm9sXSk7XG5cbiAgZWxlbWVudFttb3VzZW1vdmVMaXN0ZW5lclN5bWJvbF0gPSBldmVudCA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coYHNldHRpbmcgdGltZW91dGApO1xuICAgIC8vIFBvc3Rwb25lIGNoZWNraW5nIHRoZSBtb3VzZW1vdmUgbG9jYXRpb24gdG8gZ2l2ZSB0aGUgbW91c2Vkb3duIGV2ZW50IGFcbiAgICAvLyBjaGFuY2UgdG8gZmlyZS4gVGhlIDI1MCBtcyBkZWxheSBpcyBqdXN0IGd1ZXNzd29yazsgYSBzaG9ydGVyIGRlbGF5XG4gICAgLy8gZG9lc24ndCBzZWVtIHRvIHdvcmsuXG4gICAgZWxlbWVudFttb3VzZVRpbWVvdXRTeW1ib2xdID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhgcG9zdHBvbmVkIG1vdXNlbW92ZSAke2V2ZW50LnBhZ2VYfSwgJHtldmVudC5wYWdlWX1gKTtcbiAgICAgIGlmIChlbGVtZW50W2xhc3RNb3VzZVhTeW1ib2xdICE9IG51bGwgJiYgZXZlbnQucGFnZVggIT09IGVsZW1lbnRbbGFzdE1vdXNlWFN5bWJvbF0gfHxcbiAgICAgICAgICBlbGVtZW50W2xhc3RNb3VzZVlTeW1ib2xdICE9IG51bGwgJiYgZXZlbnQucGFnZVkgIT09IGVsZW1lbnRbbGFzdE1vdXNlWVN5bWJvbF0pIHtcbiAgICAgICAgLy8gbW91c2Vtb3ZlIGV2ZW50IHdhcyBhdCBhIGxvY2F0aW9uIG90aGVyIHRoYW4gdGhlIGxhc3QgbW91c2Vkb3duLFxuICAgICAgICAvLyBhbmQgaGVuY2UgbW9zdCBsaWtlbHkgYSByZWFsIG1vdXNlbW92ZSBldmVudC5cbiAgICAgICAgbW91c2VEZXRlY3RlZChlbGVtZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnRbbGFzdE1vdXNlWFN5bWJvbF0gPSBldmVudC5wYWdlWDtcbiAgICAgICAgZWxlbWVudFtsYXN0TW91c2VZU3ltYm9sXSA9IGV2ZW50LnBhZ2VZO1xuICAgICAgfVxuICAgIH0sIDI1MCk7XG4gIH07XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBlbGVtZW50W21vdXNlbW92ZUxpc3RlbmVyU3ltYm9sXSk7XG59XG5cblxuZnVuY3Rpb24gbW91c2VEZXRlY3RlZChlbGVtZW50KSB7XG4gIC8vIGNvbnNvbGUubG9nKGBtb3VzZSBkZXRlY3RlZGApO1xuICBzaG93QXJyb3dzKGVsZW1lbnQpO1xuXG4gIC8vIFdlIGNhbiBzdG9wIGxpc3RlbmluZyBmb3IgbW91c2UgZXZlbnRzIG5vdy5cbiAgaWYgKGVsZW1lbnRbbW91c2VUaW1lb3V0U3ltYm9sXSkge1xuICAgIGNsZWFyVGltZW91dChlbGVtZW50W21vdXNlVGltZW91dFN5bWJvbF0pO1xuICB9XG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlbGVtZW50W21vdXNlZG93bkxpc3RlbmVyU3ltYm9sXSk7XG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBlbGVtZW50W21vdXNlbW92ZUxpc3RlbmVyU3ltYm9sXSk7XG4gIGVsZW1lbnRbbW91c2Vkb3duTGlzdGVuZXJTeW1ib2xdID0gbnVsbDtcbiAgZWxlbWVudFttb3VzZW1vdmVMaXN0ZW5lclN5bWJvbF0gPSBudWxsO1xufVxuXG5cbmZ1bmN0aW9uIHNob3dBcnJvd3MoZWxlbWVudCkge1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Nob3dBcnJvd3MnKTtcbn1cblxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2Jhc2ljLWFycm93LXNlbGVjdGlvbicsIEFycm93U2VsZWN0aW9uKTtcbmV4cG9ydCBkZWZhdWx0IEFycm93U2VsZWN0aW9uO1xuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9jcmVhdGVTeW1ib2wnO1xuaW1wb3J0IFdyYXBwZWRTdGFuZGFyZEVsZW1lbnQgZnJvbSAnLi4vLi4vYmFzaWMtd3JhcHBlZC1zdGFuZGFyZC1lbGVtZW50L3NyYy9XcmFwcGVkU3RhbmRhcmRFbGVtZW50JztcbmltcG9ydCBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50IGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQnO1xuaW1wb3J0IEdlbmVyaWMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvR2VuZXJpYyc7XG5pbXBvcnQgT2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL09ic2VydmVDb250ZW50Q2hhbmdlcyc7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IGxpbmVIZWlnaHRTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2xpbmVIZWlnaHQnKTtcbmNvbnN0IG1pbmltdW1Sb3dzU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdtaW5pbXVtUm93cycpO1xuY29uc3QgdmFsdWVUcmFja3NDb250ZW50U3ltYm9sID0gY3JlYXRlU3ltYm9sKCd2YWx1ZVRyYWNrc0NvbnRlbnQnKTtcblxuXG5cbi8qKlxuICogQSB0ZXh0IGFyZWEgdGhhdCBtYWtlcyBpdHNlbGYgYmlnIGVub3VnaCB0byBzaG93IGl0cyBjb250ZW50LlxuICpcbiAqIFtMaXZlIGRlbW9dKGh0dHA6Ly9iYXNpY3dlYmNvbXBvbmVudHMub3JnL2Jhc2ljLXdlYi1jb21wb25lbnRzL3BhY2thZ2VzL2Jhc2ljLWF1dG9zaXplLXRleHRhcmVhLylcbiAqXG4gKiBUaGlzIHRleHQgaW5wdXQgY29tcG9uZW50IGlzIHVzZWZ1bCBpbiBzaXR1YXRpb25zIHdoZXJlIHlvdSB3YW50IHRvIGFzayB0aGVcbiAqIHVzZXIgdG8gZW50ZXIgYXMgbXVjaCB0ZXh0IGFzIHRoZXkgd2FudCwgYnV0IGRvbid0IHdhbnQgdG8gdGFrZSB1cCBhIGxvdCBvZlxuICogcm9vbSBvbiB0aGUgcGFnZS5cbiAqXG4gKiBUaGUgY29tcG9uZW50IHdvcmtzIGJ5IGNvcHlpbmcgdGhlIHRleHQgdG8gYW4gaW52aXNpYmxlIGVsZW1lbnQgd2hpY2ggd2lsbFxuICogYXV0b21hdGljYWxseSBncm93IGluIHNpemU7IHRoZSBleHBhbmRpbmcgY29weSB3aWxsIGV4cGFuZCB0aGUgY29udGFpbmVyLFxuICogd2hpY2ggaW4gdHVybiB3aWxsIHZlcnRpY2FsbHkgc3RyZXRjaCB0aGUgdGV4dCBhcmVhIHRvIG1hdGNoLlxuICpcbiAqIFRoaXMgY29tcG9uZW50IGdlbmVyYWxseSBleHBvc2VzIGFsbCB0aGUgc2FtZSBhdHRyaWJ1dGVzL3Byb3BlcnRpZXMgYXMgYVxuICogc3RhbmRhcmQgSFRNTCBgPHRleHRhcmVhPmAuXG4gKlxuICogQG1peGVzIEdlbmVyaWNcbiAqIEBtaXhlcyBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50XG4gKiBAbWl4ZXMgT2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzXG4gKi9cbmNsYXNzIEF1dG9zaXplVGV4dGFyZWEgZXh0ZW5kcyBXcmFwcGVkU3RhbmRhcmRFbGVtZW50LndyYXAoJ3RleHRhcmVhJykuY29tcG9zZShcbiAgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCxcbiAgR2VuZXJpYyxcbiAgT2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzXG4pIHtcblxuICAvLyBOb3JtYWxseSB0aGUgdmFsdWUgb2YgdGhlIGVsZW1lbnQgaXMgc2V0IGFuZCByZWFkIHRocm91Z2ggaXRzIHZhbHVlXG4gIC8vIGF0dHJpYnV0ZS4gQXMgYSBjb252ZW5pZW5jZSwgYW5kIHRvIG1pcnJvciBzdGFuZGFyZCB0ZXh0YXJlYSBiZWhhdmlvciwgaXRcbiAgLy8gaXMgcG9zc2libGUgdG8gc2V0IHRoZSBjb250ZW50IG9mIHRoZSB0ZXh0YXJlYSBieSBpbmNsdWRpbmcgdGV4dCBiZXR3ZWVuXG4gIC8vIHRoZSBvcGVuaW5nIGFuZCBjbG9zaW5nIHRhZy4gVGhpcyB3b3JrcyBvbmx5IGluIG9uZSBkaXJlY3Rpb246IHNldHRpbmcgdGhlXG4gIC8vIHRhZyBjb250ZW50IHVwZGF0ZXMgdGhlIHRleHRhcmVhLCBidXQgdXNlciBlZGl0cyBpbiB0aGUgdGV4dGFyZWEgYXJlIG5vdFxuICAvLyByZWZsZWN0ZWQgaW4gdGhlIHRhZyBjb250ZW50LiBXZSBjYXB0dXJlIHRoZSB2YWx1ZSBvZiB0aGUgaW5pdGlhbCB0ZXh0XG4gIC8vIGNvbnRlbnQgaW4gb3JkZXIgdG8gc2V0IHRoZSB2YWx1ZSBwcm9wZXJ0eSBkdXJpbmcgdGhlIGNyZWF0ZSBldmVudC5cbiAgLy8gVE9ETzogTm9ybWFsaXplIGluZGVudGF0aW9uIGluIHRoZSB0ZXh0IGNvbnRlbnQuIFVzZXJzIHdpbGwgb2Z0ZW4gd2FudCB0b1xuICAvLyBpbmRlbnQgdGhlIG1hcmt1cCBzbyB0aGF0IGl0IGxvb2tzIHByZXR0eS4gV2Ugc2hvdWxkIGRldGVjdCB0aGUgaW5kZW50YXRpb25cbiAgLy8gbGV2ZWwgYW5kIHJlbW92ZSBhbnkgaW5kZW50YXRpb24gd2hpdGVzcGFjZVxuICAvLyBUT0RPOiBDb25zaWRlciB1c2luZyBjb250ZW50IGlubmVySFRNTCByYXRoZXIgdGhhbiBwbGFpbiB0ZXh0LiBUaGUgbmF0aXZlXG4gIC8vIHRleHRhcmVhIGVsZW1lbnQgd2lsbCBpbmNsdWRlIEhUTUwsIG5vdCBqdXN0IHRoZSBzdHJpcHBlZCB0ZXh0LCBhcyBpbml0aWFsXG4gIC8vIHZhbHVlIHByb3BlcnR5IHRleHQuXG4gIGF0dGFjaGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHN1cGVyLmF0dGFjaGVkQ2FsbGJhY2spIHsgc3VwZXIuYXR0YWNoZWRDYWxsYmFjaygpOyB9XG4gICAgaW5pdGlhbGl6ZVdoZW5SZW5kZXJlZCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNpemUgdGhlIGVsZW1lbnQgc3VjaCB0aGF0IHRoZSB0ZXh0YXJlYSBjYW4gZXhhY3RseSBjb250YWluIGl0cyBjb250ZW50LlxuICAgKiBCeSBkZWZhdWx0LCB0aGlzIG1ldGhvZCBpcyBpbnZva2VkIHdoZW5ldmVyIHRoZSB0ZXh0IGNvbnRlbnQgY2hhbmdlcy5cbiAgICovXG4gIGF1dG9TaXplKCkge1xuICAgIC8vIElmIHdlIGhhZCBzcGVjdWxhdGl2ZWx5IGFkZGVkIGFuIGV4dHJhIGxpbmUgYmVjYXVzZSBvZiBhbiBFbnRlciBrZXlwcmVzcyxcbiAgICAvLyB3ZSBjYW4gbm93IGhpZGUgdGhlIGV4dHJhIGxpbmUuXG4gICAgdGhpcy4kLmV4dHJhTGluZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgLy8gV2UgcmVzaXplIGJ5IGNvcHlpbmcgdGhlIHRleHRhcmVhIGNvbnRlbnRzIHRvIHRoZSBlbGVtZW50IGl0c2VsZjsgdGhlXG4gICAgLy8gdGV4dCB3aWxsIHRoZW4gYXBwZWFyICh2aWEgPGNvbnRlbnQ+KSBpbnNpZGUgdGhlIGludmlzaWJsZSBkaXYuIElmXG4gICAgLy8gd2UndmUgc2V0IHRoaW5ncyB1cCBjb3JyZWN0bHksIHRoaXMgbmV3IGNvbnRlbnQgc2hvdWxkIHRha2UgdXAgdGhlIHNhbWVcbiAgICAvLyBhbW91bnQgb2Ygcm9vbSBhcyB0aGUgc2FtZSB0ZXh0IGluIHRoZSB0ZXh0YXJlYS4gVXBkYXRpbmcgdGhlIGVsZW1lbnQnc1xuICAgIC8vIGNvbnRlbnQgYWRqdXN0cyB0aGUgZWxlbWVudCdzIHNpemUsIHdoaWNoIGluIHR1cm4gd2lsbCBtYWtlIHRoZSB0ZXh0YXJlYVxuICAgIC8vIHRoZSBjb3JyZWN0IGhlaWdodC5cbiAgICB0aGlzLiQudGV4dENvcHkudGV4dENvbnRlbnQgPSB0aGlzLnZhbHVlO1xuICB9XG5cbiAgY29udGVudENoYW5nZWQoKSB7XG4gICAgaWYgKHN1cGVyLmNvbnRlbnRDaGFuZ2VkKSB7IHN1cGVyLmNvbnRlbnRDaGFuZ2VkKCk7IH1cbiAgICBpZiAodGhpc1t2YWx1ZVRyYWNrc0NvbnRlbnRTeW1ib2xdKSB7XG4gICAgICBsZXQgdGV4dCA9IGdldFRleHRDb250ZW50KHRoaXMpO1xuICAgICAgdGhpcy5pbm5lci52YWx1ZSA9IHVuZXNjYXBlSHRtbCh0ZXh0KTtcbiAgICAgIHZhbHVlQ2hhbmdlZCh0aGlzKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuXG4gICAgdGhpcy5pbm5lci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGV2ZW50ID0+IHtcbiAgICAgIHZhbHVlQ2hhbmdlZCh0aGlzKTtcbiAgICB9KTtcbiAgICB0aGlzLmlubmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZXZlbnQgPT4ge1xuICAgICAga2V5cHJlc3ModGhpcywgZXZlbnQpO1xuICAgIH0pO1xuXG4gICAgLy8gU2V0IGRlZmF1bHRzLlxuICAgIGlmICh0eXBlb2YgdGhpcy5taW5pbXVtUm93cyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMubWluaW11bVJvd3MgPSB0aGlzLmRlZmF1bHRzLm1pbmltdW1Sb3dzO1xuICAgIH1cblxuICAgIC8vIEEgc3RhbmRhcmQgdGV4dGFyZWEgaGFzIGl0cyB2YWx1ZSB0cmFjayBpdHMgdGV4dENvbnRlbnQgYnkgZGVmYXVsdC5cbiAgICAvLyBUaGF0IGlzLCBjaGFuZ2VzIHRvIHRleHRDb250ZW50IHVwZGF0ZSB0aGUgdmFsdWUuIEhvd2V2ZXIsIGlmIGFuIGF0dGVtcHRcbiAgICAvLyBpcyBtYWRlIHRvIGNoYW5nZSB0aGUgdmFsdWUgZGlyZWN0bHksIHRoaXMgYnJlYWtzIHRoZSBhdXRvbWF0aWMgdHJhY2tpbmcuXG4gICAgLy8gRnJvbSB0aGF0IHBvaW50IG9uLCBjaGFuZ2VzIHRvIHRleHRDb250ZW50IGRvICpub3QqIHVwZGF0ZSB0aGUgdmFsdWUuXG4gICAgdGhpc1t2YWx1ZVRyYWNrc0NvbnRlbnRTeW1ib2xdID0gdHJ1ZTtcbiAgfVxuXG4gIGdldCBkZWZhdWx0cygpIHtcbiAgICBsZXQgZGVmYXVsdHMgPSBzdXBlci5kZWZhdWx0cyB8fCB7fTtcbiAgICBkZWZhdWx0cy5taW5pbXVtUm93cyA9IDE7XG4gICAgcmV0dXJuIGRlZmF1bHRzO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgdGhlIG1pbmltdW0gbnVtYmVyIG9mIHJvd3Mgc2hvd24uIFRoaXMgaXMgc2ltaWxhciB0byB0aGUgcm93c1xuICAgKiBhdHRyaWJ1dGUgb24gYSBzdGFuZGFyZCB0ZXh0YXJlYSwgYnV0IGJlY2F1c2UgdGhpcyBlbGVtZW50IGNhbiBncm93LCBpc1xuICAgKiBleHByZXNzZWQgYXMgYSBtaW5pbXVtIHJhdGhlciB0aGFuIGEgZml4ZWQgbnVtYmVyLlxuICAgKlxuICAgKiBCeSBkZWZhdWx0LCB0aGlzIHByb3BlcnR5IGlzIDEsIHNvIHdoZW4gZW1wdHksIHRoZSB0ZXh0IGFyZWEgd2lsbCBiZSBhXG4gICAqIHNpbmdsZSBsaW5lIHRhbGwuIFRoYXQncyBlZmZpY2llbnQgaW4gdGVybXMgb2YgdGhlIHNwYWNlIGl0IGNvbnN1bWVzLCBidXRcbiAgICogdW50aWwgdGhlIHVzZXIgaW50ZXJhY3RzIHdpdGggdGhlIGVsZW1lbnQsIHRoZXkgbWF5IG5vdCByZWFsaXplIHRoZXkgY2FuXG4gICAqIGVudGVyIG11bHRpcGxlIGxpbmVzIG9mIHRleHQuIFNldHRpbmcgdGhlIHByb3BlcnR5IHRvIGEgdmFsdWUgaGlnaGVyIHRoYW4gMVxuICAgKiB3aWxsIHNpZ25hbCB0byB0aGUgdXNlciB0aGF0IHRoZXkgY2FuIGVudGVyIG11bHRpcGxlIGxpbmVzIG9mIGEgdGV4dC5cbiAgICpcbiAgICogQnkgc2V0dGluZyB0aGlzIHByb3BlcnR5LCB5b3UgY2FuIGFsc28gY29tbXVuaWNhdGUgdG8gdGhlIHVzZXIgc29tZSBzZW5zZVxuICAgKiBvZiBob3cgbXVjaCB0ZXh0IHlvdSdyZSBleHBlY3RpbmcgdGhlbSB0byBwcm92aWRlLiBGb3IgZXhhbXBsZSwgb24gYVxuICAgKiBmZWVkYmFjayBmb3JtLCBhc2tpbmcgdGhlIHVzZXIgdG8gZW50ZXIgdGhlaXIgZmVlZGJhY2sgaW4gYSBzaW5nbGUtbGluZVxuICAgKiB0ZXh0IGJveCBpbXBsaWVzIHlvdSBkb24ndCByZWFsbHkgd2FudCB0aGVtIHRvIGVudGVyIG11Y2ggdGV4dCDigJQgZXZlbiBpZlxuICAgKiB0aGUgdGV4dCBib3ggd2lsbCBncm93IHdoZW4gdGhleSB0eXBlLiBCeSBzZXR0aW5nIHRoaXMgdG8gYSB2YWx1ZSBsaWtlLFxuICAgKiBzYXksIDEwIHJvd3MsIHlvdSBjYW4gc2lnbmFsIHRoYXQgeW91J3JlIGZ1bGx5IGV4cGVjdGluZyB0aGVtIHRvIGVudGVyIG1vcmVcbiAgICogdGV4dC5cbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICogQGRlZmF1bHQgMVxuICAgKi9cbiAgZ2V0IG1pbmltdW1Sb3dzKCkge1xuICAgIHJldHVybiB0aGlzW21pbmltdW1Sb3dzU3ltYm9sXTtcbiAgfVxuICBzZXQgbWluaW11bVJvd3ModmFsdWUpIHtcbiAgICB0aGlzW21pbmltdW1Sb3dzU3ltYm9sXSA9IHBhcnNlSW50KHZhbHVlKTtcbiAgICBpZiAodGhpc1tsaW5lSGVpZ2h0U3ltYm9sXSkge1xuICAgICAgc2V0TWluaW11bUhlaWdodCh0aGlzKTtcbiAgICB9XG4gIH1cblxuICBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgICNhdXRvU2l6ZUNvbnRhaW5lciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgLypcbiAgICAgICAqIEVuc3VyZSBib3RoIHRoZSB0ZXh0IGFyZWEgYW5kIGNvcHkgZW5kIHVwIHdpdGggdGhlIGVsZW1lbnQncyBvd24gZm9udFxuICAgICAgICogbWV0cmljcywgc28gdGhhdCB0ZXh0IHdpbGwgbGF5IG91dCB0aGUgc2FtZSBpbiBib3RoIG9mIHRoZW0uXG4gICAgICAgKi9cbiAgICAgICNpbm5lcixcbiAgICAgICNjb3B5Q29udGFpbmVyIHtcbiAgICAgICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICBmb250LXN0eWxlOiBpbmhlcml0O1xuICAgICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cblxuICAgICAgI2lubmVyIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgQGFwcGx5KC0tdGV4dGFyZWEpO1xuICAgICAgfVxuXG4gICAgICAjY29weUNvbnRhaW5lciB7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwOyAvKiBTbyBsaW5lcyB3cmFwICovXG4gICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDsgLyogU28gd2UgYnJlYWsgYXQgd29yZCBib3VuZGFyaWVzIHdoZW4gcG9zc2libGUgKi9cbiAgICAgIH1cblxuICAgICAgI2NvbnRlbnRDb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPCEtLVxuICAgICAgVGhlIGludmlzaWJsZSBjb3B5Q29udGFpbmVyIGNvbnRhaW5zIGFuIGV4dHJhU3BhY2UgZWxlbWVudCB0aGF0IGVuc3VyZXMgdGhhdCxcbiAgICAgIGV2ZW4gaWYgdGhlIGxhc3QgbGluZSBvZiB0aGUgdGV4dGFyZWEgaXMgYmxhbmssIHRoZXJlIHdpbGwgYmUgc29tZXRoaW5nIGluIHRoZVxuICAgICAgbGluZSB0aGF0IGZvcmNlcyB0aGUgdGV4dCBjb3B5IHRvIGdyb3cgYnkgYSBsaW5lLiBUaGlzIGV4dHJhIHNwYWNlIGlzIGEgdGhpblxuICAgICAgc3BhY2UsIHRvIHJlZHVjZSB0aGUgYW1vdW50IGJ5IHdoaWNoIHRoZSB0ZXh0IGNvcHkgd2lsbCBwcmVtYXR1cmVseSBncm93LlxuXG4gICAgICBUaGUgY29weUNvbnRhaW5lciBhbHNvIGNvbnRhaW5zIGFuIGV4dHJhTGluZSBlbGVtZW50IGV4aXN0cyB0byBkZWFsIHdpdGggdGhlXG4gICAgICBmYWN0IHRoYXQsIGlmIHRoZSB1c2VyIHByZXNzZXMgdGhlIEVudGVyIGtleSBkb3duLCB0aGUgdGV4dGFyZWEncyBjb250ZW50IHdpbGxcbiAgICAgIG1vdmUgYmVmb3JlIHRoZSBjb21wbGV0ZSB0ZXh0IGlzIGF2YWlsYWJsZS4gU2VlIG5vdGVzIGF0IF9rZXlwcmVzcy5cblxuICAgICAgTGFzdGx5LCB3ZSBwdXQgdGhlIEhUTUwgY29udGVudCBlbGVtZW50IGludG8gYSBzZXBhcmF0ZSBjb250YWluZXIgc28gd2UgY2FuXG4gICAgICBoaWRlIGl0LiBXZSBuZWVkIHRvIGhhdmUgYSBjb250ZW50IGVsZW1lbnQgc29tZXdoZXJlIGluIHRoZSB0ZW1wbGF0ZSB0b1xuICAgICAgY29udmluY2UgUG9seW1lciB0aGF0IHdlIGNhcmUgYWJvdXQgdGhlIGNvbnRlbnQgaW4gdGhlIFNoYWR5IERPTSBjYXNlIC0tXG4gICAgICB3aXRob3V0IHRoYXQgY29udGVudCBlbGVtZW50LCBTaGFkeSBET00gd2lsbCBjb25jbHVkZSB0aGUgZWxlbWVudCBkb2Vzbid0XG4gICAgICBuZWVkIGl0cyBsaWdodCBET00gY29udGVudCwgYW5kIHdpbGwgdGhyb3cgaXQgYXdheS5cbiAgICAgIC0tPlxuICAgICAgPGRpdiBpZD1cImF1dG9TaXplQ29udGFpbmVyXCI+XG4gICAgICAgIDx0ZXh0YXJlYSBpZD1cImlubmVyXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgPGRpdiBpZD1cImNvcHlDb250YWluZXJcIj48c3BhbiBpZD1cInRleHRDb3B5XCI+PC9zcGFuPjxzcGFuIGlkPVwiZXh0cmFTcGFjZVwiPiZ0aGluc3A7PC9zcGFuPjxkaXYgaWQ9XCJleHRyYUxpbmVcIj4mbmJzcDs8L2Rpdj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBpZD1cImNvbnRlbnRDb250YWluZXJcIj5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGV4dCBjdXJyZW50bHkgc2hvd24gaW4gdGhlIHRleHRhcmVhLlxuICAgKlxuICAgKiBOb3RlIHRoYXQgdGhlIHRleHQgc2hvd24gaW4gdGhlIHRleHRhcmVhIGNhbiBhbHNvIGJlIHVwZGF0ZWQgYnkgY2hhbmdpbmdcbiAgICogdGhlIGVsZW1lbnQncyBpbm5lckhUTUwvdGV4dENvbnRlbnQuIEhvd2V2ZXIsIGlmIHRoZSB2YWx1ZSBwcm9wZXJ0eSBpc1xuICAgKiBleHBsaWNpdGx5IHNldCwgdGhhdCB3aWxsIG92ZXJyaWRlIHRoZSBpbm5lckhUTUwvdGV4dENvbnRlbnQuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5uZXIudmFsdWU7XG4gIH1cbiAgc2V0IHZhbHVlKHRleHQpIHtcbiAgICAvLyBFeHBsaWNpdGx5IHNldHRpbmcgdmFsdWUgYnJlYWtzIGF1dG9tYXRpYyB1cGRhdGUgb2YgdmFsdWUgZnJvbSBjb250ZW50LlxuICAgIHRoaXNbdmFsdWVUcmFja3NDb250ZW50U3ltYm9sXSA9IGZhbHNlO1xuICAgIHRoaXMuaW5uZXIudmFsdWUgPSB0ZXh0O1xuICAgIHZhbHVlQ2hhbmdlZCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIHRoZSB1c2VyIHR5cGVzIGluIHRoZSB0ZXh0YXJlYS5cbiAgICpcbiAgICogQG1lbWJlcm9mIEF1dG9zaXplVGV4dGFyZWFcbiAgICogQGV2ZW50IGNoYW5nZVxuICAgKi9cbn1cblxuXG5mdW5jdGlvbiBnZXRUZXh0Q29udGVudChlbGVtZW50KSB7XG4gIGxldCB0ZXh0ID0gZWxlbWVudC5kaXN0cmlidXRlZFRleHRDb250ZW50O1xuXG4gIC8vIFRyaW0gdGhlIHRleHQuXG4gIC8vIFRoaXMgaXMgbm9uLXN0YW5kYXJkIHRleHRhcmVhIGJlaGF2aW9yLiBBIHN0YW5kYXJkIHRleHRhcmVhIHdpbGwgdHJpbSB0aGVcbiAgLy8gZmlyc3QgY2hhcmFjdGVyIGlmIGl0J3MgYSBuZXdsaW5lLCBidXQgdGhhdCdzIGl0LiBIb3dldmVyLCBhdXRob3JzIHdpbGxcbiAgLy8gd2FudCB0byBiZSBhYmxlIHRvIHBsYWNlIHRoZSBvcGVuaW5nIGFuZCBjbG9zaW5nIHRhZ3Mgb24gdGhlaXIgb3duIGxpbmVzLlxuICAvLyBTbyBpdCBzZWVtcyBtb3JlIGhlbHBmdWwgdG8gdHJpbSB3aGl0ZXNwYWNlIG9uIGVpdGhlciBzaWRlLlxuICB0ZXh0ID0gdGV4dC50cmltKCk7XG5cbiAgcmV0dXJuIHRleHQ7XG59XG5cblxuLy8gU2V0IHVwIG9uY2UgdGhpcyBjb21wb25lbnQgaGFzIGJlZW4gcmVuZGVyZWQuXG4vL1xuLy8gT24gQ2hyb21lIChhcyBvZiAxMC8yMy8xNCkgYXQgbGVhc3QsIGlmIGFuIGluc3RhbmNlIGlmIHRoaXMgY29tcG9uZW50IGlzXG4vLyBhZGRlZCBkeW5hbWljYWxseSwgaXRzIGF0dGFjaGVkIGhhbmRsZXIgbWF5IHRyaWdnZXIgYmVmb3JlIGl0cyBiZWVuXG4vLyByZW5kZXJlZC4gVGhhdCB3b3VsZCBjYXVzZSBvdXIgbGF5b3V0IGNhbGN1bGF0aW9ucyB0byBiZSBpbmNvcnJlY3QuXG4vL1xuZnVuY3Rpb24gaW5pdGlhbGl6ZVdoZW5SZW5kZXJlZChlbGVtZW50KSB7XG5cbiAgLy8gSWYgdGhlIGNvbXBvbmVudCBoYXMgYmVlbiByZW5kZXJlZCwgb3VyIGhlaWdodCBzaG91bGQgYmUgbm9uemVyby5cbiAgaWYgKGVsZW1lbnQuY2xpZW50SGVpZ2h0ID09PSAwKSB7XG4gICAgLy8gTm90IHJlbmRlcmVkIHlldDogd2FpdCBhIGJpdCBiZWZvcmUgdHJ5aW5nIGFnYWluLlxuICAgIHNldFRpbWVvdXQoKCkgPT4gaW5pdGlhbGl6ZVdoZW5SZW5kZXJlZChlbGVtZW50KSwgMTApO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIElmIHdlIHJlYWNoIHRoaXMgcG9pbnQsIHRoZSBjb21wb25lbnQncyBlbGVtZW50cyBzaG91bGQgYnkgc3R5bGVkLlxuXG4gIC8vIEZvciBhdXRvLXNpemluZyB0byB3b3JrLCB3ZSBuZWVkIHRoZSB0ZXh0IGNvcHkgdG8gaGF2ZSB0aGUgc2FtZSBib3JkZXIsXG4gIC8vIHBhZGRpbmcsIGFuZCBvdGhlciByZWxldmFudCBjaGFyYWN0ZXJpc3RpY3MgYXMgdGhlIG9yaWdpbmFsIHRleHQgYXJlYS5cbiAgLy8gU2luY2UgdGhvc2UgYXNwZWN0cyBhcmUgYWZmZWN0ZWQgYnkgQ1NTLCB3ZSBoYXZlIHRvIHdhaXQgdW50aWwgdGhlXG4gIC8vIGVsZW1lbnQgaXMgaW4gdGhlIGRvY3VtZW50IGJlZm9yZSB3ZSBjYW4gdXBkYXRlIHRoZSB0ZXh0IGNvcHkuXG4gIGxldCB0ZXh0Qm94U3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQuaW5uZXIpO1xuICBsZXQgY29weUNvbnRhaW5lclN0eWxlID0gZWxlbWVudC4kLmNvcHlDb250YWluZXIuc3R5bGU7XG4gIGNvcHlDb250YWluZXJTdHlsZS5ib3JkZXJCb3R0b21TdHlsZSAgPSB0ZXh0Qm94U3R5bGUuYm9yZGVyQm90dG9tU3R5bGU7XG4gIGNvcHlDb250YWluZXJTdHlsZS5ib3JkZXJCb3R0b21XaWR0aCAgPSB0ZXh0Qm94U3R5bGUuYm9yZGVyQm90dG9tV2lkdGg7XG4gIGNvcHlDb250YWluZXJTdHlsZS5ib3JkZXJMZWZ0U3R5bGUgICAgPSB0ZXh0Qm94U3R5bGUuYm9yZGVyTGVmdFN0eWxlO1xuICBjb3B5Q29udGFpbmVyU3R5bGUuYm9yZGVyTGVmdFdpZHRoICAgID0gdGV4dEJveFN0eWxlLmJvcmRlckxlZnRXaWR0aDtcbiAgY29weUNvbnRhaW5lclN0eWxlLmJvcmRlclJpZ2h0U3R5bGUgICA9IHRleHRCb3hTdHlsZS5ib3JkZXJSaWdodFN0eWxlO1xuICBjb3B5Q29udGFpbmVyU3R5bGUuYm9yZGVyUmlnaHRXaWR0aCAgID0gdGV4dEJveFN0eWxlLmJvcmRlclJpZ2h0V2lkdGg7XG4gIGNvcHlDb250YWluZXJTdHlsZS5ib3JkZXJUb3BTdHlsZSAgICAgPSB0ZXh0Qm94U3R5bGUuYm9yZGVyVG9wU3R5bGU7XG4gIGNvcHlDb250YWluZXJTdHlsZS5ib3JkZXJUb3BXaWR0aCAgICAgPSB0ZXh0Qm94U3R5bGUuYm9yZGVyVG9wV2lkdGg7XG4gIGNvcHlDb250YWluZXJTdHlsZS5wYWRkaW5nQm90dG9tICAgICAgPSB0ZXh0Qm94U3R5bGUucGFkZGluZ0JvdHRvbTtcbiAgY29weUNvbnRhaW5lclN0eWxlLnBhZGRpbmdMZWZ0ICAgICAgICA9IHRleHRCb3hTdHlsZS5wYWRkaW5nTGVmdDtcbiAgY29weUNvbnRhaW5lclN0eWxlLnBhZGRpbmdSaWdodCAgICAgICA9IHRleHRCb3hTdHlsZS5wYWRkaW5nUmlnaHQ7XG4gIGNvcHlDb250YWluZXJTdHlsZS5wYWRkaW5nVG9wICAgICAgICAgPSB0ZXh0Qm94U3R5bGUucGFkZGluZ1RvcDtcblxuICAvLyBVc2UgdGhlIGV4dHJhTGluZSBtZW1iZXIgdG8gZ2F1Z2UgdGhlIGV4cGVjdGVkIGhlaWdodCBvZiBhIHNpbmdsZSBsaW5lIG9mXG4gIC8vIHRleHQuIFdlIGNhbid0IHVzZSBsaW5lSGVpZ2h0LCBiZWNhdXNlIHRoYXQgY2FuIGJlIHJlcG9ydGVkIGFzIFwibm9ybWFsXCIsXG4gIC8vIGFuZCB3ZSB3YW50IHRvIGtub3cgdGhlIGFjdHVhbCBwaXhlbCBoZWlnaHQuXG4gIGVsZW1lbnQuJC5leHRyYUxpbmUuc3R5bGUuZGlzcGxheSA9ICdpbmhlcml0JztcbiAgZWxlbWVudFtsaW5lSGVpZ2h0U3ltYm9sXSA9IGVsZW1lbnQuJC5leHRyYUxpbmUuY2xpZW50SGVpZ2h0O1xuXG4gIC8vIE5vdyB0aGF0IHdlIGtub3cgdGhlIGxpbmUgaGVpZ2h0LCB3ZSBjYW4gaGlkZSB0aGUgZXh0cmEgbGluZS5cbiAgZWxlbWVudC4kLmV4dHJhTGluZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gIC8vIFVzZSB0aGUgbGluZSBoZWlnaHQgaW4gY29uanVuY3Rpb24gd2l0aCBtaW5pbXVtUm93cyB0byBlc3RhYmxpc2ggdGhlXG4gIC8vIG92ZXJhbGwgbWluaW11bSBoZWlnaHQgb2YgdGhlIGNvbXBvbmVudC5cbiAgc2V0TWluaW11bUhlaWdodChlbGVtZW50KTtcbn1cblxuXG4vLyBTcGVjdWxhdGl2ZWx5IGFkZCBhIGxpbmUgdG8gb3VyIGNvcHkgb2YgdGhlIHRleHQuIFdlJ3JlIG5vdCBzdXJlIHdoYXQgdGhlXG4vLyBleGFjdCBlZmZlY3Qgb2YgdHlwaW5nIHRoaXMgY2hhcmFjdGVyIHdpbGwgYmUsIGFuZCBhdCB0aGlzIHBvaW50IGl0J3Mgbm90XG4vLyByZWZsZWN0ZWQgeWV0IGluIHRoZSB0ZXh0YXJlYSdzIGNvbnRlbnQuIFdlIHNwZWN1bGF0ZSB0aGF0IGl0IHdpbGwgYWRkIGFcbi8vIGxpbmUgdG8gdGhlIHRleHQgYW5kIHNpemUgYWNjb3JkaW5nbHkuIChPbmUgb3RoZXIgcG9zc2liaWxpdHkgaXMgdGhhdCB0aGVcbi8vIHVzZXIncyByZXBsYWNpbmcgYSBzZWxlY3RlZCBjaHVuayBvZiB0ZXh0IHdpdGggYSBuZXdsaW5lLikgSW4gYW55IGV2ZW50LFxuLy8gb25jZSB3ZSBnZXQgdGhlIGtleXVwIG9yIGNoYW5nZSBldmVudCwgd2UnbGwgbWFrZSBhbnkgZmluYWwgYWRqdXN0bWVudHMuXG4vL1xuLy8gVE9ETzogSWYgdGhlIHVzZXIgaG9sZHMgZG93biB0aGUgRW50ZXIga2V5LCB3ZSBjYW4gZ2V0IGEgYnVuY2ggb2Yga2V5cHJlc3Ncbi8vIGV2ZW50cyBiZWZvcmUgd2UgZ2V0IGtleXVwLiBUaGlzIGNhdXNlcyBmbGlja2VyLiBJbnN0ZWFkIG9mIHN1cHBvcnRpbmcgb25seVxuLy8gYSBzaW5nbGUgZXh0cmEgc3BlY3VsYXRpdmUgbGluZSwgd2Ugc2hvdWxkIGdyb3cgdGhlIHNwZWN1bGF0aXZlIGVsZW1lbnQgdG9cbi8vIGNvbnRhaW4gdGhlIG51bWJlciBvZiBFbnRlciBrZXlwcmVzc2VzIHdlJ3ZlIHJlY2VpdmVkLlxuZnVuY3Rpb24ga2V5cHJlc3MoZWxlbWVudCwgZXZlbnQpIHtcbiAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzIC8qIEVudGVyICovKSB7XG4gICAgZWxlbWVudC4kLmV4dHJhTGluZS5zdHlsZS5kaXNwbGF5ID0gJ2luaGVyaXQnO1xuICB9XG59XG5cblxuLy8gU2V0dGluZyB0aGUgbWluaW11bVJvd3MgYXR0cmlidXRlIHRyYW5zbGF0ZXMgaW50byBzZXR0aW5nIHRoZSBtaW5pbXVtXG4vLyBoZWlnaHQgb24gdGhlIHRleHQgY29weSBjb250YWluZXIuXG5mdW5jdGlvbiBzZXRNaW5pbXVtSGVpZ2h0KGVsZW1lbnQpIHtcbiAgbGV0IGNvcHlDb250YWluZXIgPSBlbGVtZW50LiQuY29weUNvbnRhaW5lcjtcbiAgbGV0IG91dGVySGVpZ2h0ID0gY29weUNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gIGxldCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoY29weUNvbnRhaW5lcik7XG4gIGxldCBwYWRkaW5nVG9wID0gcGFyc2VGbG9hdChzdHlsZS5wYWRkaW5nVG9wKTtcbiAgbGV0IHBhZGRpbmdCb3R0b20gPSBwYXJzZUZsb2F0KHN0eWxlLnBhZGRpbmdCb3R0b20pO1xuICBsZXQgaW5uZXJIZWlnaHQgPSBjb3B5Q29udGFpbmVyLmNsaWVudEhlaWdodCAtIHBhZGRpbmdUb3AgLSBwYWRkaW5nQm90dG9tO1xuICBsZXQgYm9yZGVyc1BsdXNQYWRkaW5nID0gb3V0ZXJIZWlnaHQgLSBpbm5lckhlaWdodDtcbiAgbGV0IG1pbkhlaWdodCA9IChlbGVtZW50Lm1pbmltdW1Sb3dzICogZWxlbWVudFtsaW5lSGVpZ2h0U3ltYm9sXSkgKyBib3JkZXJzUGx1c1BhZGRpbmc7XG4gIG1pbkhlaWdodCA9IE1hdGguY2VpbChtaW5IZWlnaHQpO1xuICBjb3B5Q29udGFpbmVyLnN0eWxlLm1pbkhlaWdodCA9IG1pbkhlaWdodCArICdweCc7XG59XG5cblxuZnVuY3Rpb24gdW5lc2NhcGVIdG1sKGh0bWwpIHtcbiAgcmV0dXJuIGh0bWxcbiAgICAucmVwbGFjZSgvJmFtcDsvZywgJyYnKVxuICAgIC5yZXBsYWNlKC8mbHQ7L2csICc8JylcbiAgICAucmVwbGFjZSgvJmd0Oy9nLCBcIj5cIilcbiAgICAucmVwbGFjZSgvJnF1b3Q7L2csICdcXFwiJylcbiAgICAucmVwbGFjZSgvJiMwMzk7L2csICdcXCcnKTtcbn1cblxuXG4vKlxuICogSGFuZGxlIGEgY2hhbmdlIGluIHRoZSBlbGVtZW50J3MgdmFsdWUgcHJvcGVydHkuXG4gKi9cbmZ1bmN0aW9uIHZhbHVlQ2hhbmdlZChlbGVtZW50KSB7XG4gIGVsZW1lbnQuYXV0b1NpemUoKTtcbiAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgndmFsdWUtY2hhbmdlZCcpKTtcbn1cblxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2Jhc2ljLWF1dG9zaXplLXRleHRhcmVhJywgQXV0b3NpemVUZXh0YXJlYSk7XG5leHBvcnQgZGVmYXVsdCBBdXRvc2l6ZVRleHRhcmVhO1xuIiwiaW1wb3J0IEVsZW1lbnRCYXNlIGZyb20gJy4uLy4uL2Jhc2ljLWVsZW1lbnQtYmFzZS9zcmMvRWxlbWVudEJhc2UnO1xuXG5pbXBvcnQgQ29udGVudEFzSXRlbXMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ29udGVudEFzSXRlbXMnO1xuaW1wb3J0IERpcmVjdGlvblNlbGVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXJlY3Rpb25TZWxlY3Rpb24nO1xuaW1wb3J0IERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCc7XG5pbXBvcnQgRnJhY3Rpb25hbFNlbGVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9GcmFjdGlvbmFsU2VsZWN0aW9uJztcbmltcG9ydCBJdGVtc1NlbGVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9JdGVtc1NlbGVjdGlvbic7XG5pbXBvcnQgS2V5Ym9hcmQgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvS2V5Ym9hcmQnO1xuaW1wb3J0IEtleWJvYXJkRGlyZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0tleWJvYXJkRGlyZWN0aW9uJztcbmltcG9ydCBPYnNlcnZlQ29udGVudENoYW5nZXMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvT2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzJztcbmltcG9ydCBTZWxlY3Rpb25BcmlhQWN0aXZlIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NlbGVjdGlvbkFyaWFBY3RpdmUnO1xuaW1wb3J0IFNlbGVjdGlvbkFuaW1hdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TZWxlY3Rpb25BbmltYXRpb24nO1xuaW1wb3J0IFN3aXBlRGlyZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1N3aXBlRGlyZWN0aW9uJztcbmltcG9ydCBUYXJnZXRJbkNvbGxlY3RpdmUgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvVGFyZ2V0SW5Db2xsZWN0aXZlJztcbmltcG9ydCBUcmFja3BhZERpcmVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9UcmFja3BhZERpcmVjdGlvbic7XG5cblxubGV0IGJhc2UgPSBFbGVtZW50QmFzZS5jb21wb3NlKFxuICBDb250ZW50QXNJdGVtcyxcbiAgRGlyZWN0aW9uU2VsZWN0aW9uLFxuICBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50LFxuICBGcmFjdGlvbmFsU2VsZWN0aW9uLFxuICBJdGVtc1NlbGVjdGlvbixcbiAgS2V5Ym9hcmQsXG4gIEtleWJvYXJkRGlyZWN0aW9uLFxuICBPYnNlcnZlQ29udGVudENoYW5nZXMsXG4gIFNlbGVjdGlvbkFuaW1hdGlvbixcbiAgU2VsZWN0aW9uQXJpYUFjdGl2ZSxcbiAgU3dpcGVEaXJlY3Rpb24sXG4gIFRhcmdldEluQ29sbGVjdGl2ZSxcbiAgVHJhY2twYWREaXJlY3Rpb25cbik7XG5cblxuLyoqXG4gKiBMZXRzIHRoZSB1c2VyIG5hdmlnYXRlIGxhdGVyYWxseSB0aHJvdWdoIGEgc2VxdWVuY2Ugb2YgY2hpbGQgZWxlbWVudHMuXG4gKlxuICogYmFzaWMtY2Fyb3VzZWwgaXMgYW4gaW1wbGVtZW50YXRpb24gb2YgdGhlIGNhcm91c2VsIHVzZXIgaW50ZXJmYWNlIHBhdHRlcm4sXG4gKiBjb21tb25seSB1c2VkIGZvciBuYXZpZ2F0aW5nIGJldHdlZW4gaW1hZ2VzLCBwYWdlcywgYW5kIG90aGVyIGVsZW1lbnRzLiBUaGlzXG4gKiBwYXR0ZXJuIHByZXNlbnRzIHRoZSB1c2VyIHdpdGggYSBsaW5lYXIgc2VxdWVuY2Ugb2YgZWxlbWVudHMsIG9ubHkgb25lIG9mXG4gKiB3aGljaCBpcyBzaG93biBhdCBhIHRpbWUuIFRoZSB1c2VyIGNhbiBuYXZpZ2F0ZSB0byB0aGUgbmV4dC9wcmV2aW91cyBlbGVtZW50XG4gKiB3aXRoIGEgdmFyaWV0eSBvZiBpbnB1dCBtZXRob2RzLlxuICpcbiAqIFtMaXZlIGRlbW9dKGh0dHA6Ly9iYXNpY3dlYmNvbXBvbmVudHMub3JnL2Jhc2ljLXdlYi1jb21wb25lbnRzL3BhY2thZ2VzL2Jhc2ljLWNhcm91c2VsLylcbiAqXG4gKiBUaGUgYWJvdmUgZGVtbyBhZGRzIHRoZSBvcHRpb25hbFxuICogW2Jhc2ljLWFycm93LXNlbGVjdGlvbl0oLi4vYmFzaWMtYXJyb3ctc2VsZWN0aW9uKSBhbmRcbiAqIFtiYXNpYy1wYWdlLWRvdHNdKC4uL2Jhc2ljLXBhZ2UtZG90cykgY29tcG9uZW50cy4gWW91IGNhbiBhbHNvIHZpZXcgYVxuICogW3BsYWluIGRlbW9dKGh0dHA6Ly9iYXNpY3dlYmNvbXBvbmVudHMub3JnL2Jhc2ljLXdlYi1jb21wb25lbnRzL3BhY2thZ2VzL2Jhc2ljLWNhcm91c2VsL3BsYWluLmh0bWwpXG4gKiBkZW1vLlxuICpcbiAqIGJhc2ljLWNhcm91c2VsIHVzZXMgaXRzIGNoaWxkcmVuIGFzIHRoZSBlbGVtZW50cyB0aGUgdXNlciB3aWxsIG5hdmlnYXRlXG4gKiB0aHJvdWdoLiBJbiBhIHR5cGljYWwgdXNlLCBhIGJhc2ljLWNhcm91c2VsIGNhbiBiZSB1c2VkIHRvIG5hdmlnYXRlIGJldHdlZW4gYVxuICogc2VxdWVuY2Ugb2YgaW1hZ2VzOlxuICpcbiAqICAgICA8YmFzaWMtY2Fyb3VzZWw+XG4gKiAgICAgICA8aW1nIHNyYz1cImltYWdlMS5qcGdcIj5cbiAqICAgICAgIDxpbWcgc3JjPVwiaW1hZ2UyLmpwZ1wiPlxuICogICAgICAgPGltZyBzcmM9XCJpbWFnZTMuanBnXCI+XG4gKiAgICAgPC9iYXNpYy1jYXJvdXNlbD5cbiAqXG4gKiBUaGUgY2hpbGQgZWxlbWVudHMgY2FuIGJlIG9mIGFueSB0eXBlIOKAlMKgdGhleSBhcmUgbm90IHJlc3RyaWN0ZWQgdG8gaW1hZ2VzLlxuICpcbiAqIFRoaXMgY29tcG9uZW50IGF0dGVtcHRzIHRvIG1lZXQgdGhlIFtHb2xkIFN0YW5kYXJkIGZvciB3ZWIgY29tcG9uZW50c11cbiAqIChodHRwczovL2dpdGh1Yi5jb20vd2ViY29tcG9uZW50cy9nb2xkLXN0YW5kYXJkL3dpa2kpIHNvIHRoYXQgaXQgaXMgZ2VuZXJhbGx5XG4gKiBhcyBmbGV4aWJsZSBhbmQgcm9idXN0IGFzIHN0YW5kYXJkIEhUTUwgZWxlbWVudHMuIEZvciBleGFtcGxlLCBpdCBtZWV0cyB0aGVcbiAqIFwiQ29udGVudCBDaGFuZ2VzXCIgY3JpdGVyaWE6IHRoZSBjYXJvdXNlbCB3aWxsIGFkYXB0IHRvIG5ldyBjaGlsZCBlbGVtZW50c1xuICogYWRkZWQgb3IgcmVtb3ZlZCBhdCBydW50aW1lLlxuICpcbiAqIEN1cnJlbnRseSwgdGhpcyBjb21wb25lbnQgZG9lcyBub3QgbWVldCB0aGUgR29sZCBTdGFuZGFyZCBjcml0ZXJpYSBcIlNpemUgdG9cbiAqIENvbnRlbnRcIi4gQXMgYSByZXN1bHQsIGZvciB0aGUgdGltZSBiZWluZywgKip5b3UgbXVzdCBtYW51YWxseSBzZXQgYSBzaXplIG9uXG4gKiB0aGlzIGNvbXBvbmVudCoqLiBUd28gYXBwcm9hY2hlcyBhcmUgdG86IDEpIHN0cmV0Y2ggdGhlIGNvbXBvbmVudCBhY3Jvc3NcbiAqIHdoYXRldmVyIHN1cmZhY2UgaXQgaXMgY29udGFpbmVkIHdpdGhpbiwgb3IgMikgc2V0IGl0IHRvIGJlIGxhcmdlciB0aGFuIHRoZVxuICogbGFyZ2VzdCBjaGlsZCBlbGVtZW50IHlvdSB3YW50IHRvIGRpc3BsYXkuIFRoZSBmb3JtZXIgYXBwcm9hY2ggaXMgbW9yZVxuICogY29tbW9uLCBhbmQgY2FuIGJlIGFjaGlldmVkIHdpdGggQ1NTIHN0eWxpbmcgc3VjaCBhczpcbiAqXG4gKiAgICAgaHRtbCB7XG4gKiAgICAgICBoZWlnaHQ6IDEwMCU7XG4gKiAgICAgfVxuICpcbiAqICAgICBib2R5IHtcbiAqICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAqICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gKiAgICAgICBoZWlnaHQ6IDEwMCU7XG4gKiAgICAgICBtYXJnaW46IDA7XG4gKiAgICAgfVxuICpcbiAqICAgICBiYXNpYy1jYXJvdXNlbCB7XG4gKiAgICAgICAtd2Via2l0LWZsZXg6IDE7XG4gKiAgICAgICBmbGV4OiAxO1xuICogICAgIH1cbiAqXG4gKiBUaGUgc3RhbmRhcmQgYmFzaWMtY2Fyb3VzZWwgY29tcG9uZW50IHN1cHBvcnRzIG5hdmlnYXRpb24gdmlhIHRoZSBmb2xsb3dpbmdcbiAqIGlucHV0IG1ldGhvZHM6XG4gKlxuICogKiBLZXlib2FyZC4gV2hlbiB0aGUgY2Fyb3VzZWwgaGFzIGZvY3VzLCB0aGUgdXNlciBjYW4gcHJlc3MgTGVmdCwgUmlnaHQsXG4gKiAgIEhvbWUsIG9yIEVuZC4gVGhlc2UgbmF2aWdhdGUgdG8gdGhlIGV4cGVjdGVkIGVsZW1lbnQuXG4gKiAqIFRvdWNoLiBPbiBtb2JpbGUgYW5kIG90aGVyIHRvdWNoLWVuYWJsZWQgZGV2aWNlcywgdGhlIHVzZXIgY2FuIGRyYWcgbGVmdCBvclxuICogICByaWdodC5cbiAqICogVHJhY2twYWQuIFRoZSB1c2VyIGNhbiBzd2lwZSBsZWZ0IG9yIHJpZ2h0IG9uIGEgdHJhY2twYWQgdG8gbmF2aWdhdGUuXG4gKlxuICogQmVjYXVzZSBjYXJvdXNlbHMgYXJlIHVzZWQgaW4gYSB3aWRlIHZhcmlldHkgb2YgY2lyY3Vtc3RhbmNlcywgYnkgZGVmYXVsdFxuICogYmFzaWMtY2Fyb3VzZWwgcHJvdmlkZXMgYSBtaW5pbWFsIGFwcGVhcmFuY2UgYW5kIG5vIHNlcGFyYXRlbHkgaW50ZXJhY3RpdmVcbiAqIGVsZW1lbnRzIHN1Y2ggYXMgYXJyb3cgYnV0dG9ucyBvbiB0aGUgc2lkZSBvciBkb3RzIGFsb25nIHRoZSBib3R0b20uIFRob3NlXG4gKiBlbGVtZW50cyBjYW4gYmUgYWRkZWQgYnkgd3JhcHBpbmcgYSBiYXNpYy1jYXJvdXNlbCBpbiBvcHRpb25hbCBhY2Nlc3NvcmllczpcbiAqXG4gKiAqIFtiYXNpYy1hcnJvdy1zZWxlY3Rpb25dKC4uL2Jhc2ljLWFycm93LXNlbGVjdGlvbikuXG4gKiAgIFRoaXMgYWRkcyBwcm9taW5lbnQgbGVmdCBhbmQgcmlnaHQgYXJyb3cgYnV0dG9ucyBvbiB0aGUgc2lkZSBvZiB0aGUgY2Fyb3VzZWwuXG4gKiAqIFtiYXNpYy1wYWdlLWRvdHNdKC4uL2Jhc2ljLXBhZ2UtZG90cykuXG4gKiAgIFRoaXMgYWRkcyBhIHNlcmllcyBvZiBzbWFsbCBkb3RzIGJlbG93IHRoZSBjYXJvdXNlbCB0byBpbmRpY2F0ZSB0aGUgdXNlcidzXG4gKiAgIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIHNlcXVlbmNlLlxuICogKiBbYmFzaWMtc2xpZGVzaG93LXRpbWVyXSguLi9iYXNpYy1zbGlkZXNob3ctdGltZXIpLlxuICogICBBZHZhbmNlcyB0byB0aGUgbmV4dCBpdGVtIG9uIGEgdGltZXIuXG4gKiAqIFtiYXNpYy10YWItc3RyaXBdKC4uL2Jhc2ljLXRhYi1zdHJpcCkuXG4gKiAgIEFkZHMgYSBzdHJpcCBvZiB0cmFkaXRpb25hbCB0YWIgYnV0dG9ucy5cbiAqXG4gKiBTZWUgdGhvc2UgY29tcG9uZW50cyBmb3IgbW9yZSBkZXRhaWxzLCBidXQgaW4gZ2VuZXJhbCB5b3UgY2FuIGNvbnN0cnVjdCBhXG4gKiBjb21tb24gY2Fyb3VzZWwgd2l0aCBib3RoIGFycm93IGJ1dHRvbnMgYW5kIGRvdHMgbGlrZSBzbzpcbiAqXG4gKiAgICAgPGJhc2ljLWFycm93LXNlbGVjdGlvbj5cbiAqICAgICAgIDxiYXNpYy1wYWdlLWRvdHM+XG4gKiAgICAgICAgIDxiYXNpYy1jYXJvdXNlbD5cbiAqICAgICAgICAgICAuLi4gaW1hZ2VzLCBldGMuIC4uLlxuICogICAgICAgICA8L2Jhc2ljLWNhcm91c2VsPlxuICogICAgICAgPC9iYXNpYy1wYWdlLWRvdHM+XG4gKiAgICAgPC9iYXNpYy1hcnJvdy1zZWxlY3Rpb24+XG4gKlxuICogRm9yIHVuaXZlcnNhbCBhY2Nlc3MsIGJhc2ljLWNhcm91c2VsIGF1dG9tYXRpY2FsbHkgYWRkcyBhIHZhcmlldHkgb2ZcbiAqIFtBUklBXShodHRwOi8vd3d3LnczLm9yZy9XQUkvaW50cm8vYXJpYSkgcHJvcGVydGllcyB0byBpdHNlbGYgYW5kIHRvIGNoaWxkXG4gKiBlbGVtZW50cy4gVGhpcyBoZWxwcyB1c2VycyBuYXZpZ2F0ZSB0aGUgc2VxdWVuY2Ugb2YgZWxlbWVudHMgaW4gdGhlIGNhcm91c2VsXG4gKiB1c2luZyBhc3Npc3RpdmUgdGVjaG5vbG9naWVzLlxuICpcbiAqIEBleHRlbmRzIEVsZW1lbnRCYXNlXG4gKiBAbWl4ZXMgQ29udGVudEFzSXRlbXNcbiAqIEBtaXhlcyBEaXJlY3Rpb25TZWxlY3Rpb25cbiAqIEBtaXhlcyBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50XG4gKiBAbWl4ZXMgRnJhY3Rpb25hbFNlbGVjdGlvblxuICogQG1peGVzIEdlbmVyaWNcbiAqIEBtaXhlcyBJdGVtc1NlbGVjdGlvblxuICogQG1peGVzIEtleWJvYXJkXG4gKiBAbWl4ZXMgS2V5Ym9hcmREaXJlY3Rpb25cbiAqIEBtaXhlcyBPYnNlcnZlQ29udGVudENoYW5nZXNcbiAqIEBtaXhlcyBTZWxlY3Rpb25BbmltYXRpb25cbiAqIEBtaXhlcyBTZWxlY3Rpb25BcmlhQWN0aXZlXG4gKiBAbWl4ZXMgU3dpcGVEaXJlY3Rpb25cbiAqIEBtaXhlcyBUYXJnZXRJbkNvbGxlY3RpdmVcbiAqIEBtaXhlcyBUYXJnZXRTZWxlY3Rpb25cbiAqIEBtaXhlcyBUcmFja3BhZERpcmVjdGlvblxuICovXG5jbGFzcyBDYXJvdXNlbCBleHRlbmRzIGJhc2Uge1xuXG4gIGdldCBkZWZhdWx0cygpIHtcbiAgICBsZXQgZGVmYXVsdHMgPSBzdXBlci5kZWZhdWx0cyB8fCB7fTtcbiAgICBkZWZhdWx0cy5uYXZpZ2F0aW9uQXhpcyA9ICdob3Jpem9udGFsJztcbiAgICBkZWZhdWx0cy5zZWxlY3Rpb25BbmltYXRpb25FZmZlY3QgPSAnc2xpZGVXaXRoR2FwJztcbiAgICBkZWZhdWx0cy5zZWxlY3Rpb25SZXF1aXJlZCA9IHRydWU7XG4gICAgcmV0dXJuIGRlZmF1bHRzO1xuICB9XG5cbiAgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBgXG4gICAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICAjY29udGFpbmVyIDo6Y29udGVudCA+ICoge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGlkPVwiY29udGFpbmVyXCIgcm9sZT1cIm5vbmVcIj5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG59XG5cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdiYXNpYy1jYXJvdXNlbCcsIENhcm91c2VsKTtcbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsO1xuIiwiaW1wb3J0IEVsZW1lbnRCYXNlIGZyb20gJy4uLy4uL2Jhc2ljLWVsZW1lbnQtYmFzZS9zcmMvRWxlbWVudEJhc2UnO1xuaW1wb3J0IE9wZW5DbG9zZSBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9PcGVuQ2xvc2UnO1xuXG5cbi8qKlxuICogQSBwYW5lbCB3aGljaCBjYW4gYmUgZXhwYW5kZWQvY29sbGFwc2VkIHdpdGggYW4gYW5pbWF0ZWQgdHJhbnNpdGlvbi5cbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBjb21iaW5lcyB0aGUgT3BlbkNsb3NlIG1peGluIGFuZCBhIHNpbXBsZSBDU1MgaGVpZ2h0XG4gKiBhbmltYXRpb24uXG4gKlxuICogVGhpcyBjb21wb25lbnQgaGFuZGxlcyBvbmx5IHRoZSBkdXRpZXMgb2YgY29sbGFwc2luZyBhbmQgZXhwYW5kaW5nLiBJdCBkb2VzXG4gKiBub3QgcHJvdmlkZSBhIHVzZXIgaW50ZXJmYWNlIGZvciB0aGUgdXNlciB0byB0cmlnZ2VyIHRoZSBjaGFuZ2UgaW4gc3RhdGU7XG4gKiB5b3UgbXVzdCBwcm92aWRlIHRoYXQgdXNlciBpbnRlcmZhY2UgeW91cnNlbGYuXG4gKlxuICogQGV4dGVuZHMgRWxlbWVudEJhc2VcbiAqIEBtaXhlcyBPcGVuQ2xvc2VcbiAqL1xuY2xhc3MgQ29sbGFwc2libGVQYW5lbCBleHRlbmRzIE9wZW5DbG9zZShFbGVtZW50QmFzZSkge1xuXG4gIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG4gICAgdGhpcy4kLm92ZXJmbG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuY2xvc2VkKSB7XG4gICAgICAgIC8vIFJlbW92ZSB0aGUgaGFyZC1jb2RlZCBoZWlnaHQgd2UgYXBwbGllZCBmb3IgdGhlIHRyYW5zaXRpb24gc28gdGhhdFxuICAgICAgICAvLyB0aGUgZWxlbWVudCB3aWxsIHJlZmxvdyBjb3JyZWN0bHksIGUuZy4sIG9uIHdpbmRvdyByZXNpemUuXG4gICAgICAgIHRoaXMuJC5vdmVyZmxvdy5zdHlsZS5oZWlnaHQgPSAnJztcbiAgICAgIH1cbiAgICAgIC8vIEVuc3VyZSB0aGUgYW5pbWF0aW9uIG9ubHkgcGxheXMgb25jZS4gRm9yIHNvbWUgcmVhc29uLCBTYWZhcmkgd2lsbCBzaG93XG4gICAgICAvLyB0aGUgYW5pbWF0aW9uIHR3aWNlIHdpdGhvdXQgdGhpcyBsaW5lLCBldmVuIHRob3VnaCB0aGUgcmVuZGVyIGZ1bmN0aW9uXG4gICAgICAvLyBleHBsaWNpdGx5IHJlbW92ZXMgdGhpcyBjbGFzcyB3aGVuIGl0IHNldHMgdGhlIG9sZCBoZWlnaHQuIE5laXRoZXJcbiAgICAgIC8vIENocm9tZSBub3IgRmlyZWZveCBzZWVtIHRvIG5lZWQgdGhpcyBsaW5lLlxuICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdzaG93VHJhbnNpdGlvbicpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKGNsb3NpbmcpIHtcbiAgICBzdXBlci5yZW5kZXIoY2xvc2luZyk7XG5cbiAgICBsZXQgbmF0dXJhbEhlaWdodCA9IHRoaXMuJC5jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgIGlmIChuYXR1cmFsSGVpZ2h0ID09PSAwKSB7XG4gICAgICAvLyBNb3N0IGxpa2VseSBoYXZlbid0IGhhZCBhIGNoYW5jZSB0byByZW5kZXIgeWV0LlxuICAgICAgdGhpcy4kLm92ZXJmbG93LnN0eWxlLmhlaWdodCA9IGNsb3NpbmcgPyAwIDogJyc7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gV2l0aG91dCBhbmltYXRpbmcsIHNldCBzdGFydGluZyBoZWlnaHQgb2YgdHJhbnNpdGlvbi5cbiAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3dUcmFuc2l0aW9uJyk7XG4gICAgbGV0IG9sZEhlaWdodCA9IGNsb3NpbmcgPyBuYXR1cmFsSGVpZ2h0IDogMDtcbiAgICB0aGlzLiQub3ZlcmZsb3cuc3R5bGUuaGVpZ2h0ID0gb2xkSGVpZ2h0ICsgJ3B4JztcblxuICAgIC8vIEZvcmNlIGEgcmVsYXlvdXQgc28gdGhhdCB0aGUgc3RhcnRpbmcgaGVpZ2h0IGlzIGFwcGxpZWQuXG4gICAgLy8gVGhpcyBjYW4gYmUgYWNoaWV2ZWQgYnkgcmVhZGluZyBhIHByb3BlcnR5IGxpa2Ugb2Zmc2V0SGVpZ2h0LlxuICAgIHRoaXMuJC5vdmVyZmxvdy5vZmZzZXRIZWlnaHQ7IC8vIGpzaGludCBpZ25vcmU6bGluZVxuXG4gICAgLy8gVHVybiBhbmltYXRpb24gb24sIGFuZCBlbmRpbmcgaGVpZ2h0IG9mIHRyYW5zaXRpb24uXG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdzaG93VHJhbnNpdGlvbicpO1xuICAgIGxldCBuZXdIZWlnaHQgPSBjbG9zaW5nID8gMCA6IG5hdHVyYWxIZWlnaHQ7XG4gICAgdGhpcy4kLm92ZXJmbG93LnN0eWxlLmhlaWdodCA9IG5ld0hlaWdodCArICdweCc7XG4gIH1cblxuICBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG5cbiAgICAgIDpob3N0KC5zaG93VHJhbnNpdGlvbikgI292ZXJmbG93IHtcbiAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuMnM7XG4gICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGlkPVwib3ZlcmZsb3dcIiByb2xlPVwibm9uZVwiPlxuICAgICAgICA8ZGl2IGlkPVwiY29udGFpbmVyXCIgcm9sZT1cIm5vbmVcIj5cbiAgICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG59XG5cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdiYXNpYy1jb2xsYXBzaWJsZS1wYW5lbCcsIENvbGxhcHNpYmxlUGFuZWwpO1xuZXhwb3J0IGRlZmF1bHQgQ29sbGFwc2libGVQYW5lbDtcbiIsIi8vIE1lbW9pemVkIG1hcCBvZiBhdHRyaWJ1dGUgdG8gcHJvcGVydHkgbmFtZXMuXG5jb25zdCBhdHRyaWJ1dGVUb1Byb3BlcnR5TmFtZXMgPSB7fTtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIEF0dHJpYnV0ZU1hcnNoYWxsaW5nLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggbWFyc2hhbGxzIGF0dHJpYnV0ZXMgdG8gcHJvcGVydGllcyAoYW5kIGV2ZW50dWFsbHkgdmljZSB2ZXJzYSkuXG4gICAqXG4gICAqIElmIHlvdXIgY29tcG9uZW50IGV4cG9zZXMgYSBzZXR0ZXIgZm9yIGEgcHJvcGVydHksIGl0J3MgZ2VuZXJhbGx5IGEgZ29vZFxuICAgKiBpZGVhIHRvIGxldCBkZXZzIHVzaW5nIHlvdXIgY29tcG9uZW50IGJlIGFibGUgdG8gc2V0IHRoYXQgcHJvcGVydHkgaW4gSFRNTFxuICAgKiB2aWEgYW4gZWxlbWVudCBhdHRyaWJ1dGUuIFlvdSBjYW4gY29kZSB0aGF0IHlvdXJzZWxmIGJ5IHdyaXRpbmcgYW5cbiAgICogYGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja2AsIG9yIHlvdSBjYW4gdXNlIHRoaXMgbWl4aW4gdG8gZ2V0IGEgZGVncmVlIG9mXG4gICAqIGF1dG9tYXRpYyBzdXBwb3J0LlxuICAgKlxuICAgKiBUaGlzIG1peGluIGltcGxlbWVudHMgYW4gYGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja2AgdGhhdCB3aWxsIGF0dGVtcHQgdG9cbiAgICogY29udmVydCBhIGNoYW5nZSBpbiBhbiBlbGVtZW50IGF0dHJpYnV0ZSBpbnRvIGEgY2FsbCB0byB0aGUgY29ycmVzcG9uZGluZ1xuICAgKiBwcm9wZXJ0eSBzZXR0ZXIuIEF0dHJpYnV0ZXMgdHlwaWNhbGx5IGZvbGxvdyBoeXBoZW5hdGVkIG5hbWVzIChcImZvby1iYXJcIiksXG4gICAqIHdoZXJlYXMgcHJvcGVydGllcyB0eXBpY2FsbHkgdXNlIGNhbWVsQ2FzZSBuYW1lcyAoXCJmb29CYXJcIikuIFRoaXMgbWl4aW5cbiAgICogcmVzcGVjdHMgdGhhdCBjb252ZW50aW9uLCBhdXRvbWF0aWNhbGx5IG1hcHBpbmcgdGhlIGh5cGhlbmF0ZWQgYXR0cmlidXRlXG4gICAqIG5hbWUgdG8gdGhlIGNvcnJlc3BvbmRpbmcgY2FtZWxDYXNlIHByb3BlcnR5IG5hbWUuXG4gICAqXG4gICAqIEV4YW1wbGU6IFlvdSBkZWZpbmUgYSBjb21wb25lbnQgdXNpbmcgdGhpcyBtaXhpbjpcbiAgICpcbiAgICogICAgIGNsYXNzIE15RWxlbWVudCBleHRlbmRzIEF0dHJpYnV0ZU1hcnNoYWxsaW5nKEhUTUxFbGVtZW50KSB7XG4gICAqICAgICAgIGdldCBmb29CYXIoKSB7IHJldHVybiB0aGlzLl9mb29CYXI7IH1cbiAgICogICAgICAgc2V0IGZvb0Jhcih2YWx1ZSkgeyB0aGlzLl9mb29CYXIgPSB2YWx1ZTsgfVxuICAgKiAgICAgfVxuICAgKiAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdteS1lbGVtZW50JywgTXlFbGVtZW50KTtcbiAgICpcbiAgICogSWYgc29tZW9uZSB0aGVuIGluc3RhbnRpYXRlcyB5b3VyIGNvbXBvbmVudCBpbiBIVE1MOlxuICAgKlxuICAgKiAgICAgPG15LWVsZW1lbnQgZm9vLWJhcj1cIkhlbGxvXCI+PC9teS1lbGVtZW50PlxuICAgKlxuICAgKiBUaGVuLCBhZnRlciB0aGUgZWxlbWVudCBoYXMgYmVlbiB1cGdyYWRlZCwgdGhlIGBmb29CYXJgIHNldHRlciB3aWxsXG4gICAqIGF1dG9tYXRpY2FsbHkgYmUgaW52b2tlZCB3aXRoIHRoZSBpbml0aWFsIHZhbHVlIFwiSGVsbG9cIi5cbiAgICpcbiAgICogRm9yIHRoZSB0aW1lIGJlaW5nLCB0aGlzIG1peGluIG9ubHkgc3VwcG9ydHMgc3RyaW5nLXZhbHVlZCBwcm9wZXJ0aWVzLlxuICAgKiBJZiB5b3UnZCBsaWtlIHRvIGNvbnZlcnQgc3RyaW5nIGF0dHJpYnV0ZXMgdG8gb3RoZXIgdHlwZXMgKG51bWJlcnMsXG4gICAqIGJvb2xlYW5zKSwgeW91IG5lZWQgdG8gaW1wbGVtZW50IGBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tgIHlvdXJzZWxmLlxuICAgKi9cbiAgY2xhc3MgQXR0cmlidXRlTWFyc2hhbGxpbmcgZXh0ZW5kcyBiYXNlIHtcblxuICAgIC8qXG4gICAgICogSGFuZGxlIGEgY2hhbmdlIHRvIHRoZSBhdHRyaWJ1dGUgd2l0aCB0aGUgZ2l2ZW4gbmFtZS5cbiAgICAgKi9cbiAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soYXR0cmlidXRlTmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG4gICAgICBpZiAoc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKSB7IHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjaygpOyB9XG4gICAgICBsZXQgcHJvcGVydHlOYW1lID0gYXR0cmlidXRlVG9Qcm9wZXJ0eU5hbWVzW2F0dHJpYnV0ZU5hbWVdO1xuICAgICAgaWYgKCFwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgLy8gQ29udmVydCBhbmQgbWVtb2l6ZS5cbiAgICAgICAgcHJvcGVydHlOYW1lID0gYXR0cmlidXRlVG9Qcm9wZXJ0eU5hbWUoYXR0cmlidXRlTmFtZSk7XG4gICAgICAgIGF0dHJpYnV0ZVRvUHJvcGVydHlOYW1lc1thdHRyaWJ1dGVOYW1lXSA9IHByb3BlcnR5TmFtZTtcbiAgICAgIH1cbiAgICAgIC8vIElmIHRoZSBhdHRyaWJ1dGUgbmFtZSBjb3JyZXNwb25kcyB0byBhIHByb3BlcnR5IG5hbWUsIHNldCB0aGUgcHJvcGVydHkuXG4gICAgICAvLyBJZ25vcmUgc3RhbmRhcmQgSFRNTEVsZW1lbnQgcHJvcGVydGllcyBoYW5kbGVkIGJ5IHRoZSBET00uXG4gICAgICBpZiAocHJvcGVydHlOYW1lIGluIHRoaXMgJiYgIShwcm9wZXJ0eU5hbWUgaW4gSFRNTEVsZW1lbnQucHJvdG90eXBlKSkge1xuICAgICAgICB0aGlzW3Byb3BlcnR5TmFtZV0gPSBuZXdWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBBdHRyaWJ1dGVNYXJzaGFsbGluZztcbn07XG5cblxuLy8gQ29udmVydCBjYW1lbCBjYXNlIGZvb0JhciBuYW1lIHRvIGh5cGhlbmF0ZWQgZm9vLWJhci5cbmZ1bmN0aW9uIGF0dHJpYnV0ZVRvUHJvcGVydHlOYW1lKGF0dHJpYnV0ZU5hbWUpIHtcbiAgbGV0IHByb3BlcnR5TmFtZSA9IGF0dHJpYnV0ZU5hbWUucmVwbGFjZSgvLShbYS16XSkvZywgbSA9PiBtWzFdLnRvVXBwZXJDYXNlKCkpO1xuICByZXR1cm4gcHJvcGVydHlOYW1lO1xufVxuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBDbGlja1NlbGVjdGlvbi4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIG1hcHMgYSBjbGljayAoYWN0dWFsbHksIGEgbW91c2Vkb3duKSB0byBhIHNlbGVjdGlvbi5cbiAgICpcbiAgICogVGhpcyBzaW1wbGUgbWl4aW4gaXMgdXNlZnVsIGluIGxpc3QgYm94LWxpa2UgZWxlbWVudHMsIHdoZXJlIGEgY2xpY2sgb24gYVxuICAgKiBsaXN0IGl0ZW0gaW1wbGljaXRseSBzZWxlY3RzIGl0LlxuICAgKlxuICAgKiBUaGlzIG1peGluIGV4cGVjdHMgdGhlIGNvbXBvbmVudCB0byBwcm92aWRlIGFuIGBpdGVtc2AgcHJvcGVydHkuIFlvdSBjYW5cbiAgICogcHJvdmlkZSB0aGF0IHByb3BlcnR5IHlvdXJzZWxmLCBvciB1c2UgdGhlXG4gICAqIFtDb250ZW50QXNJdGVtc10oQ29udGVudEFzSXRlbXMubWQpIG1peGluLiBUaGlzIG1peGluIGFsc28gZXhwZWN0cyB0aGVcbiAgICogY29tcG9uZW50IHRvIGRlZmluZSBhIGBzZWxlY3RlZEluZGV4YCBwcm9wZXJ0eS4gWW91IGNhbiBwcm92aWRlIHRoYXRcbiAgICogeW91cnNlbGYsIG9yIHVzZSB0aGUgW0l0ZW1zU2VsZWN0aW9uXShJdGVtc1NlbGVjdGlvbi5tZCkgbWl4aW4uXG4gICAqL1xuICBjbGFzcyBDbGlja1NlbGVjdGlvbiBleHRlbmRzIGJhc2Uge1xuXG4gICAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuICAgICAgLypcbiAgICAgICAqIFJFVklFVzogV2hpY2ggZXZlbnQgc2hvdWxkIHdlIGxpc3RlbiB0byBoZXJlP1xuICAgICAgICpcbiAgICAgICAqIFRoZSBzdGFuZGFyZCB1c2UgZm9yIHRoaXMgbWl4aW4gaXMgaW4gbGlzdCBib3hlcy4gTGlzdCBib3hlcyBkb24ndFxuICAgICAgICogYXBwZWFyIHRvIGJlIGNvbnNpc3RlbnQgd2l0aCByZWdhcmQgdG8gd2hldGhlciB0aGV5IHNlbGVjdCBvbiBtb3VzZWRvd25cbiAgICAgICAqIG9yIGNsaWNrL21vdXNldXAuXG4gICAgICAgKi9cbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZXZlbnQgPT4ge1xuICAgICAgICBzZWxlY3RUYXJnZXQodGhpcywgZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgLy8gTm90ZTogV2UgZG9uJ3QgY2FsbCBwcmV2ZW50RGVmYXVsdCBoZXJlLiBUaGUgZGVmYXVsdCBiZWhhdmlvciBmb3JcbiAgICAgICAgLy8gbW91c2Vkb3duIGluY2x1ZGVzIHNldHRpbmcga2V5Ym9hcmQgZm9jdXMgaWYgdGhlIGVsZW1lbnQgZG9lc24ndFxuICAgICAgICAvLyBhbHJlYWR5IGhhdmUgdGhlIGZvY3VzLCBhbmQgd2Ugd2FudCB0byBwcmVzZXJ2ZSB0aGF0IGJlaGF2aW9yLlxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIERlZmF1bHQgaW1wbGVtZW50YXRpb24uIFRoaXMgd2lsbCB0eXBpY2FsbHkgYmUgaGFuZGxlZCBieSBvdGhlciBtaXhpbnMuXG4gICAgZ2V0IHNlbGVjdGVkSW5kZXgoKSB7XG4gICAgICByZXR1cm4gc3VwZXIuc2VsZWN0ZWRJbmRleDtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGVkSW5kZXgoaW5kZXgpIHtcbiAgICAgIGlmICgnc2VsZWN0ZWRJbmRleCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJbmRleCA9IGluZGV4OyB9XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gQ2xpY2tTZWxlY3Rpb247XG59O1xuXG5cbi8vIFRPRE86IEhhbmRsZSB0aGUgY2FzZSB3aGVyZSBhIGxpc3QgaXRlbSBoYXMgc3ViZWxlbWVudHMuIFdhbGsgdXAgdGhlIERPTVxuLy8gaGllcmFyY2h5IHVudGlsIHdlIGZpbmQgYW4gaXRlbSBpbiB0aGUgbGlzdCwgb3IgY29tZSBiYWNrIHRvIHRoaXMgZWxlbWVudCxcbi8vIGluIHdoaWNoIGNhc2UgdGhlIGVsZW1lbnQgdGhhdCB3YXMgdGFwcGVkIGlzbid0IGFuIGl0ZW0gKGFuZCBzaG91bGQgYmVcbi8vIGlnbm9yZWQpLlxuZnVuY3Rpb24gc2VsZWN0VGFyZ2V0KGVsZW1lbnQsIHRhcmdldCkge1xuICBsZXQgaW5kZXggPSBlbGVtZW50Lml0ZW1zICYmIGVsZW1lbnQuaXRlbXMuaW5kZXhPZih0YXJnZXQpO1xuICBpZiAoaW5kZXggPj0gMCkge1xuICAgIGVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xuICB9XG59XG4iLCIvKipcbiAqIEEgZ3JvdXAgb2YgZWxlbWVudHMgdGhhdCBoYXZlIGJlZW4gYXNzb2NpYXRlZCBmb3IgdGhlIHB1cnBvc2Ugb2ZcbiAqIGFjY29tcGxpc2hpbmcgc29tZSBjb2xsZWN0aXZlIGJlaGF2aW9yLCBlLmcuLCBrZXlib2FyZCBoYW5kbGluZy5cbiAqXG4gKiBUaGVyZSBhcmUgY2VydGFpbiBjb21wb25lbnRzIHRoYXQgd2FudCB0byBjb29wZXJhdGl2ZWx5IGhhbmRsZSB0aGUga2V5Ym9hcmQuXG4gKiBGb3IgZXhhbXBsZSwgdGhlIGJhc2ljLWFycm93LXNlbGVjdGlvbiBhbmQgYmFzaWMtcGFnZS1kb3RzIGNvbXBvbmVudHMgYXJlXG4gKiBvcHRpb25hbCBjb21wb25lbnRzIHRoYXQgY2FuIGF1Z21lbnQgdGhlIGFwcGVhcmFuY2UgYW5kIGJlaGF2aW9yIG9mIGFuIGlubmVyXG4gKiBiYXNpYy1jYXJvdXNlbCwgYWRkaW5nIGFycm93IGJ1dHRvbnMgYW5kIGRvdCBidXR0b25zLCByZXNwZWN0aXZlbHkuIFdoZW5cbiAqIHRoZXNlIGNvbXBvbmVudHMgYXJlIG5lc3RlZCB0b2dldGhlciwgdGhleSBmb3JtIGFuIGltcGxpY2l0IHVuaXQgY2FsbGVkIGFcbiAqICpjb2xsZWN0aXZlKjpcbiAqXG4gKiAgICAgPGJhc2ljLWFycm93LXNlbGVjdGlvbj5cbiAqICAgICAgIDxiYXNpYy1wYWdlLWRvdHM+XG4gKiAgICAgICAgIDxiYXNpYy1jYXJvdXNlbD5cbiAqICAgICAgICAgICAuLi4gaW1hZ2VzLCBldGMuIC4uLlxuICogICAgICAgICA8L2Jhc2ljLWNhcm91c2VsPlxuICogICAgICAgPC9iYXNpYy1wYWdlLWRvdHM+XG4gKiAgICAgPC9iYXNpYy1hcnJvdy1zZWxlY3Rpb24+XG4gKlxuICogSW4gdGhpcyBjb25maWd1cmF0aW9uLCB0aGUgdGhyZWUgY29tcG9uZW50cyB3aWxsIGFsbCBoYXZlIGEgYHRoaXMuY29sbGVjdGl2ZWBcbiAqIHJlZmVyZW5jZSB0aGF0IHJlZmVycyB0byBhIHNoYXJlZCBpbnN0YW5jZSBvZiB0aGUgYENvbGxlY3RpdmVgIGNsYXNzLlxuICpcbiAqIFRoZSBbS2V5Ym9hcmRdKEtleWJvYXJkLm1kKSBtaXhpbiB0aGV5IHVzZSBpcyBzZW5zaXRpdmUgdG8gdGhlIHByZXNlbmNlIG9mXG4gKiB0aGUgY29sbGVjdGl2ZS4gQW1vbmcgb3RoZXIgdGhpbmdzLCBpdCB3aWxsIGVuc3VyZSB0aGF0IG9ubHkgdGhlIG91dGVybW9zdFxuICogZWxlbWVudCBhYm92ZSDigJTCoHRoZSBiYXNpYy1hcnJvdy1zZWxlY3Rpb24g4oCUwqB3aWxsIGJlIGEgdGFiIHN0b3AgdGhhdCBjYW5cbiAqIHJlY2VpdmUgdGhlIGtleWJvYXJkIGZvY3VzLiBUaGlzIGxldHMgdGhlIHVzZXIgcGVyY2VpdmUgdGhlIGNvbXBvbmVudFxuICogYXJyYW5nZW1lbnQgYWJvdmUgYXMgYSBzaW5nbGUgdW5pdC4gVGhlIEtleWJvYXJkIG1peGluIHdpbGwgYWxzbyBnaXZlIGVhY2hcbiAqIGVsZW1lbnQgaW4gdGhlIGNvbGxlY3RpdmUgYSBjaGFuY2UgdG8gcHJvY2VzcyBhbnkga2V5Ym9hcmQgZXZlbnRzLiBTbywgZXZlblxuICogdGhvdWdoIHRoZSBiYXNpYy1hcnJvdy1zZWxlY3Rpb24gZWxlbWVudCB3aWxsIGhhdmUgdGhlIGZvY3VzLCB0aGUgc3RhbmRhcmRcbiAqIGtleWJvYXJkIG5hdmlnYXRpb24gcHJvdmlkZWQgYnkgYmFzaWMtY2Fyb3VzZWwgd2lsbCBjb250aW51ZSB0byB3b3JrLlxuICpcbiAqIFRoZSBbU2VsZWN0aW9uQXJpYUFjdGl2ZV0oU2VsZWN0aW9uQXJpYUFjdGl2ZS5tZCkgbWl4aW4gYWxzbyByZXNwZWN0c1xuICogY29sbGVjdGl2ZXMgd2hlbiB1c2luZyB0aGUgYGFyaWEtYWN0aXZlZGVzY2VuZGFudGAgYW5kIGByb2xlYCBhdHRyaWJ1dGVzLlxuICogVGhvc2Ugd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBvdXRlcm1vc3QgZWxlbWVudCAoYmFzaWMtYXJyb3ctc2VsZWN0aW9uLCBhYm92ZSlcbiAqIHNvIHRoYXQgQVJJQSBjYW4gY29ycmVjdGx5IHVuZGVyc3RhbmQgdGhlIGFycmFuZ2VtZW50IG9mIHRoZSBlbGVtZW50cy5cbiAqXG4gKiBZb3UgY2FuIHB1dCBlbGVtZW50cyBpbnRvIGNvbGxlY3RpdmVzIHlvdXJzZWxmLCBvciB5b3UgY2FuIHVzZSB0aGVcbiAqIFtUYXJnZXRJbkNvbGxlY3RpdmVdKFRhcmdldEluQ29sbGVjdGl2ZS5tZCkgbWl4aW4uXG4gKi9cbmNsYXNzIENvbGxlY3RpdmUge1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBjb2xsZWN0aXZlLlxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFTGVtZW50W119IFtlbGVtZW50c10gLSBJbml0aWFsIGVsZW1lbnRzIHRvIGFkZC5cbiAgICovXG4gIGNvbnN0cnVjdG9yKC4uLmVsZW1lbnRzKSB7XG4gICAgLyoqXG4gICAgICogVGhlIGVsZW1lbnRzIGluIHRoZSBjb2xsZWN0aXZlLlxuICAgICAqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50W119XG4gICAgICovXG4gICAgdGhpcy5lbGVtZW50cyA9IFtdO1xuICAgIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB0aGlzLmFzc2ltaWxhdGUoZWxlbWVudCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCB0aGUgaW5kaWNhdGVkIHRhcmdldCB0byB0aGUgY29sbGVjdGl2ZS5cbiAgICpcbiAgICogQnkgY29udmVudGlvbiwgaWYgdHdvIGVsZW1lbnRzIHdhbnRzIHRvIHBhcnRpY2lwYXRlIGluIGEgY29sbGVjdGl2ZSwgYW5kXG4gICAqIG9uZSBlbGVtZW50IGlzIGFuIGFuY2VzdG9yIG9mIHRoZSBvdGhlciBpbiB0aGUgRE9NLCB0aGUgYW5jZXN0b3Igc2hvdWxkXG4gICAqIGFzc2ltaWxhdGUgdGhlIGRlc2NlbmRhbnQgaW5zdGVhZCBvZiB0aGUgb3RoZXIgd2F5IGFyb3VuZC5cbiAgICpcbiAgICogQWZ0ZXIgYXNzaW1pbGF0aW9uLCBhbnkgZWxlbWVudCBpbiB0aGUgY29sbGVjdGl2ZSB0aGF0IGRlZmluZXMgYVxuICAgKiBgY29sbGVjdGl2ZUNoYW5nZWRgIG1ldGhvZCB3aWxsIGhhdmUgdGhhdCBtZXRob2QgaW52b2tlZC4gVGhpcyBhbGxvd3NcbiAgICogdGhlIGNvbGxlY3RpdmUncyBlbGVtZW50cyB0byByZXNwb25kIHRvIGNoYW5nZXMgaW4gdGhlIGNvbGxlY3RpdmUuXG4gICAqXG4gICAqIEBwYXJhbSB7KEhUTUxFbGVtZW50fENvbGxlY3RpdmUpfSB0YXJnZXQgLSBUaGUgZWxlbWVudCBvciBjb2xsZWN0aXZlIHRvIGFkZC5cbiAgICovXG4gIGFzc2ltaWxhdGUodGFyZ2V0KSB7XG4gICAgbGV0IGNvbGxlY3RpdmVDaGFuZ2VkO1xuICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBDb2xsZWN0aXZlKSB7XG4gICAgICBjb2xsZWN0aXZlQ2hhbmdlZCA9IGFzc2ltaWxhdGVDb2xsZWN0aXZlKHRoaXMsIHRhcmdldCk7XG4gICAgfSBlbHNlIGlmICh0YXJnZXQuY29sbGVjdGl2ZSkge1xuICAgICAgLy8gVGFyZ2V0IGlzIGFscmVhZHkgcGFydCBvZiBhIGNvbGxlY3RpdmUsIGFzc2ltaWxhdGUgaXQuXG4gICAgICBjb2xsZWN0aXZlQ2hhbmdlZCA9IGFzc2ltaWxhdGVDb2xsZWN0aXZlKHRoaXMsIHRhcmdldC5jb2xsZWN0aXZlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQXNzaW1pbGF0ZSBhbiBpbmRpdmlkdWFsIGVsZW1lbnQuXG4gICAgICBjb2xsZWN0aXZlQ2hhbmdlZCA9IGFzc2ltaWxhdGVFbGVtZW50KHRoaXMsIHRhcmdldCk7XG4gICAgfVxuXG4gICAgaWYgKGNvbGxlY3RpdmVDaGFuZ2VkKSB7XG4gICAgICB0aGlzLmludm9rZU1ldGhvZCgnY29sbGVjdGl2ZUNoYW5nZWQnKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSW52b2tlIGEgbWV0aG9kIG9uIGFsbCBlbGVtZW50cyBpbiB0aGUgY29sbGVjdGl2ZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZCAtIFRoZSBuYW1lIG9mIHRoZSBtZXRob2QgdG8gaW52b2tlIG9uIGFsbCBlbGVtZW50cy5cbiAgICogQHBhcmFtIHtvYmplY3RbXX0gW2FyZ3NdIC0gVGhlIGFyZ3VtZW50cyB0byB0aGUgbWV0aG9kXG4gICAqL1xuICBpbnZva2VNZXRob2QobWV0aG9kLCAuLi5hcmdzKSB7XG4gICAgLy8gSW52b2tlIGZyb20gaW5uZXJtb3N0IHRvIG91dGVybW9zdC5cbiAgICBsZXQgZWxlbWVudHMgPSB0aGlzLmVsZW1lbnRzO1xuICAgIGZvciAobGV0IGkgPSBlbGVtZW50cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IGVsZW1lbnQgPSBlbGVtZW50c1tpXTtcbiAgICAgIGlmIChlbGVtZW50W21ldGhvZF0pIHtcbiAgICAgICAgZWxlbWVudFttZXRob2RdLmFwcGx5KGVsZW1lbnQsIGFyZ3MpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgb3V0ZXJtb3N0IGVsZW1lbnQgaW4gdGhlIGNvbGxlY3RpdmUuXG4gICAqIEJ5IGNvbnZlbnRpb24sIHRoaXMgaXMgdGhlIGZpcnN0IGVsZW1lbnQgaW4gdGhlIGBlbGVtZW50c2AgYXJyYXkuXG4gICAqL1xuICBnZXQgb3V0ZXJtb3N0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50c1swXTtcbiAgfVxuXG59XG5cblxuLy8gVGhlIGZpcnN0IGNvbGxlY3RpdmUgYXNzaW1pbGF0ZXMgdGhlIHNlY29uZC5cbmZ1bmN0aW9uIGFzc2ltaWxhdGVDb2xsZWN0aXZlKGNvbGxlY3RpdmUxLCBjb2xsZWN0aXZlMikge1xuICBpZiAoY29sbGVjdGl2ZTEgPT09IGNvbGxlY3RpdmUyKSB7XG4gICAgLy8gQ29sbGVjdGl2ZXMgYXJlIHNhbWU7IGlnbm9yZS5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBsZXQgZWxlbWVudHMgPSBjb2xsZWN0aXZlMi5lbGVtZW50cztcblxuICAvLyBPbGQgY29sbGVjdGl2ZSB3aWxsIG5vIGxvbmdlciBoYXZlIGFueSBlbGVtZW50cyBvZiBpdHMgb3duLlxuICBjb2xsZWN0aXZlMi5lbGVtZW50cyA9IFtdO1xuXG4gIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgYXNzaW1pbGF0ZUVsZW1lbnQoY29sbGVjdGl2ZTEsIGVsZW1lbnQpO1xuICB9KTtcblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuXG4vLyBBc3NpbWlsYXRlIHRoZSBpbmRpY2F0ZWQgZWxlbWVudC5cbmZ1bmN0aW9uIGFzc2ltaWxhdGVFbGVtZW50KGNvbGxlY3RpdmUsIGVsZW1lbnQpIHtcbiAgaWYgKGVsZW1lbnQuY29sbGVjdGl2ZSA9PT0gY29sbGVjdGl2ZSkge1xuICAgIC8vIEFscmVhZHkgcGFydCBvZiB0aGlzIGNvbGxlY3RpdmUuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGVsZW1lbnQuY29sbGVjdGl2ZSA9IGNvbGxlY3RpdmU7XG4gIGNvbGxlY3RpdmUuZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgcmV0dXJuIHRydWU7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgQ29sbGVjdGl2ZTtcbiIsIi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggQ29tcG9zYWJsZS4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHRvIG1ha2UgYSBjbGFzcyBtb3JlIGVhc2lseSBjb21wb3NhYmxlIHdpdGggb3RoZXIgbWl4aW5zLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGNvbnRyaWJ1dGVzIGEgYGNvbXBvc2VgIG1ldGhvZCB0aGF0IGFwcGxpZXMgYSBzZXQgb2YgbWl4aW5cbiAgICogZnVuY3Rpb25zIGFuZCByZXR1cm5zIHRoZSByZXN1bHRpbmcgbmV3IGNsYXNzLiBUaGlzIHN1Z2FyIGNhbiBtYWtlIHRoZVxuICAgKiBhcHBsaWNhdGlvbiBvZiBtYW55IG1peGlucyBhdCBvbmNlIGVhc2llciB0byByZWFkLlxuICAgKi9cbiAgY2xhc3MgQ29tcG9zYWJsZSBleHRlbmRzIGJhc2Uge1xuXG4gICAgLyoqXG4gICAgICogQXBwbHkgYSBzZXQgb2YgbWl4aW4gZnVuY3Rpb25zIG9yIG1peGluIG9iamVjdHMgdG8gdGhlIHByZXNlbnQgY2xhc3MgYW5kXG4gICAgICogcmV0dXJuIHRoZSBuZXcgY2xhc3MuXG4gICAgICpcbiAgICAgKiBJbnN0ZWFkIG9mIHdyaXRpbmc6XG4gICAgICpcbiAgICAgKiAgICAgbGV0IE15Q2xhc3MgPSBNaXhpbjEoTWl4aW4yKE1peGluMyhNaXhpbjQoTWl4aW41KEJhc2VDbGFzcykpKSkpO1xuICAgICAqXG4gICAgICogWW91IGNhbiB3cml0ZTpcbiAgICAgKlxuICAgICAqICAgICBsZXQgTXlDbGFzcyA9IENvbXBvc2FibGUoQmFzZUNsYXNzKS5jb21wb3NlKFxuICAgICAqICAgICAgIE1peGluMSxcbiAgICAgKiAgICAgICBNaXhpbjIsXG4gICAgICogICAgICAgTWl4aW4zLFxuICAgICAqICAgICAgIE1peGluNCxcbiAgICAgKiAgICAgICBNaXhpbjVcbiAgICAgKiAgICAgKTtcbiAgICAgKlxuICAgICAqIFRoaXMgZnVuY3Rpb24gY2FuIGFsc28gdGFrZSBtaXhpbiBvYmplY3RzLiBBIG1peGluIG9iamVjdCBpcyBqdXN0IGFcbiAgICAgKiBzaG9ydGhhbmQgZm9yIGEgbWl4aW4gZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGEgbmV3IHN1YmNsYXNzIHdpdGggdGhlIGdpdmVuXG4gICAgICogbWVtYmVycy4gVGhlIG1peGluIG9iamVjdCdzIG1lbWJlcnMgYXJlICpub3QqIGNvcGllZCBkaXJlY3RseSBvbnRvIHRoZVxuICAgICAqIHByb3RvdHlwZSBvZiB0aGUgYmFzZSBjbGFzcywgYXMgd2l0aCB0cmFkaXRpb25hbCBtaXhpbnMuXG4gICAgICpcbiAgICAgKiBJbiBhZGRpdGlvbiB0byBwcm92aWRpbmcgc3ludGFjdGljIHN1Z2FyLCB0aGlzIG1peGluIGNhbiBiZSB1c2VkIHRvXG4gICAgICogZGVmaW5lIGEgY2xhc3MgaW4gRVM1LCB3aGljaCBsYWNrcyBFUzYncyBgY2xhc3NgIGtleXdvcmQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gey4uLm1peGluc30gbWl4aW5zIC0gQSBzZXQgb2YgbWl4aW4gZnVuY3Rpb25zIG9yIG9iamVjdHMgdG8gYXBwbHkuXG4gICAgICovXG4gICAgc3RhdGljIGNvbXBvc2UoLi4ubWl4aW5zKSB7XG4gICAgICAvLyBXZSBjcmVhdGUgYSBuZXcgc3ViY2xhc3MgZm9yIGVhY2ggbWl4aW4gaW4gdHVybi4gVGhlIHJlc3VsdCBiZWNvbWVzXG4gICAgICAvLyB0aGUgYmFzZSBjbGFzcyBleHRlbmRlZCBieSBhbnkgc3Vic2VxdWVudCBtaXhpbnMuIEl0IHR1cm5zIG91dCB0aGF0XG4gICAgICAvLyB3ZSBjYW4gdXNlIEFycmF5LnJlZHVjZSgpIHRvIGNvbmNpc2VseSBleHByZXNzIHRoaXMsIHVzaW5nIHRoZSBjdXJyZW50XG4gICAgICAvLyBvYmplY3QgYXMgdGhlIHNlZWQgZm9yIHJlZHVjZSgpLlxuICAgICAgcmV0dXJuIG1peGlucy5yZWR1Y2UoY29tcG9zZUNsYXNzLCB0aGlzKTtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBDb21wb3NhYmxlO1xufTtcblxuXG4vLyBQcm9wZXJ0aWVzIGRlZmluZWQgYnkgT2JqZWN0IHRoYXQgd2UgZG9uJ3Qgd2FudCB0byBtaXhpbi5cbmNvbnN0IE5PTl9NSVhBQkxFX09CSkVDVF9QUk9QRVJUSUVTID0gW1xuICAnY29uc3RydWN0b3InXG5dO1xuXG4vKlxuICogQXBwbHkgdGhlIG1peGluIHRvIHRoZSBnaXZlbiBiYXNlIGNsYXNzIHRvIHJldHVybiBhIG5ldyBjbGFzcy5cbiAqIFRoZSBtaXhpbiBjYW4gZWl0aGVyIGJlIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBtb2RpZmllZCBjbGFzcywgb3IgYVxuICogcGxhaW4gb2JqZWN0IHdob3NlIG1lbWJlcnMgd2lsbCBiZSBjb3BpZWQgdG8gdGhlIG5ldyBjbGFzcycgcHJvdG90eXBlLlxuICovXG5mdW5jdGlvbiBjb21wb3NlQ2xhc3MoYmFzZSwgbWl4aW4pIHtcbiAgaWYgKHR5cGVvZiBtaXhpbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIE1peGluIGZ1bmN0aW9uXG4gICAgcmV0dXJuIG1peGluKGJhc2UpO1xuICB9IGVsc2Uge1xuICAgIC8vIE1peGluIG9iamVjdFxuICAgIGNsYXNzIFN1YmNsYXNzIGV4dGVuZHMgYmFzZSB7fVxuICAgIGNvcHlPd25Qcm9wZXJ0aWVzKG1peGluLCBTdWJjbGFzcy5wcm90b3R5cGUsIE5PTl9NSVhBQkxFX09CSkVDVF9QUk9QRVJUSUVTKTtcbiAgICByZXR1cm4gU3ViY2xhc3M7XG4gIH1cbn1cblxuXG4vKlxuICogQ29weSB0aGUgZ2l2ZW4gcHJvcGVydGllcy9tZXRob2RzIHRvIHRoZSB0YXJnZXQuXG4gKiBSZXR1cm4gdGhlIHVwZGF0ZWQgdGFyZ2V0LlxuICovXG5mdW5jdGlvbiBjb3B5T3duUHJvcGVydGllcyhzb3VyY2UsIHRhcmdldCwgaWdub3JlUHJvcGVydHlOYW1lcyA9IFtdKSB7XG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZSkuZm9yRWFjaChuYW1lID0+IHtcbiAgICBpZiAoaWdub3JlUHJvcGVydHlOYW1lcy5pbmRleE9mKG5hbWUpIDwgMCkge1xuICAgICAgbGV0IGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgbmFtZSk7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gdGFyZ2V0O1xufVxuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuL2NyZWF0ZVN5bWJvbCc7XG5pbXBvcnQgdG9nZ2xlQ2xhc3MgZnJvbSAnLi90b2dnbGVDbGFzcyc7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IGl0ZW1zU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdpdGVtcycpO1xuY29uc3QgaXRlbUluaXRpYWxpemVkU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdpdGVtSW5pdGlhbGl6ZWQnKTtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIENvbnRlbnRBc0l0ZW1zLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggbWFwcyBjb250ZW50IHNlbWFudGljcyAoZWxlbWVudHMpIHRvIGxpc3QgaXRlbSBzZW1hbnRpY3MuXG4gICAqXG4gICAqIEl0ZW1zIGRpZmZlciBmcm9tIGVsZW1lbnQgY29udGVudHMgaW4gc2V2ZXJhbCB3YXlzOlxuICAgKlxuICAgKiAqIFRoZXkgYXJlIG9mdGVuIHJlZmVyZW5jZWQgdmlhIGluZGV4LlxuICAgKiAqIFRoZXkgbWF5IGhhdmUgYSBzZWxlY3Rpb24gc3RhdGUuXG4gICAqICogSXQncyBjb21tb24gdG8gZG8gd29yayB0byBpbml0aWFsaXplIHRoZSBhcHBlYXJhbmNlIG9yIHN0YXRlIG9mIGEgbmV3XG4gICAqICAgaXRlbS5cbiAgICogKiBBdXhpbGlhcnkgaW52aXNpYmxlIGNoaWxkIGVsZW1lbnRzIGFyZSBmaWx0ZXJlZCBvdXQgYW5kIG5vdCBjb3VudGVkIGFzXG4gICAqICAgaXRlbXMuIEF1eGlsaWFyeSBlbGVtZW50cyBpbmNsdWRlIGxpbmssIHNjcmlwdCwgc3R5bGUsIGFuZCB0ZW1wbGF0ZVxuICAgKiAgIGVsZW1lbnRzLiBUaGlzIGZpbHRlcmluZyBlbnN1cmVzIHRoYXQgdGhvc2UgYXV4aWxpYXJ5IGVsZW1lbnRzIGNhbiBiZVxuICAgKiAgIHVzZWQgaW4gbWFya3VwIGluc2lkZSBvZiBhIGxpc3Qgd2l0aG91dCBiZWluZyB0cmVhdGVkIGFzIGxpc3QgaXRlbXMuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyBhIGNvbXBvbmVudCB0byBwcm92aWRlIGEgYGNvbnRlbnRgIHByb3BlcnR5IHJldHVybmluZyBhXG4gICAqIHJhdyBzZXQgb2YgZWxlbWVudHMuIFlvdSBjYW4gcHJvdmlkZSB0aGF0IHlvdXJzZWxmLCBvciB1c2UgdGhlXG4gICAqIFtEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50XShEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50Lm1kKSBtaXhpbi5cbiAgICpcbiAgICogVGhlIG1vc3QgY29tbW9ubHkgcmVmZXJlbmNlZCBwcm9wZXJ0eSBkZWZpbmVkIGJ5IHRoaXMgbWl4aW4gaXMgdGhlIGBpdGVtc2BcbiAgICogcHJvcGVydHkuIFRvIGF2b2lkIGhhdmluZyB0byBkbyB3b3JrIGVhY2ggdGltZSB0aGF0IHByb3BlcnR5IGlzIHJlcXVlc3RlZCxcbiAgICogdGhpcyBtaXhpbiBzdXBwb3J0cyBhbiBvcHRpbWl6ZWQgbW9kZS4gSWYgeW91IGludm9rZSB0aGUgYGNvbnRlbnRDaGFuZ2VkYFxuICAgKiBtZXRob2Qgd2hlbiB0aGUgc2V0IG9mIGl0ZW1zIGNoYW5nZXMsIHRoZSBtaXhpbiBjb25jbHVkZXMgdGhhdCB5b3UnbGwgdGFrZVxuICAgKiBjYXJlIG9mIG5vdGlmeWluZyBpdCBvZiBmdXR1cmUgY2hhbmdlcywgYW5kIHR1cm5zIG9uIHRoZSBvcHRpbWl6YXRpb24uIFdpdGhcbiAgICogdGhhdCBvbiwgdGhlIG1peGluIHNhdmVzIGEgcmVmZXJlbmNlIHRvIHRoZSBjb21wdXRlZCBzZXQgb2YgaXRlbXMsIGFuZCB3aWxsXG4gICAqIHJldHVybiB0aGF0IGltbWVkaWF0ZWx5IG9uIHN1YnNlcXVlbnQgY2FsbHMgdG8gdGhlIGBpdGVtc2AgcHJvcGVydHkuIElmIHlvdVxuICAgKiB1c2UgdGhpcyBtaXhpbiBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZVxuICAgKiBbT2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzXShPYnNlcnZlQ29udGVudENoYW5nZXMubWQpIG1peGluLCB0aGVcbiAgICogYGNvbnRlbnRDaGFuZ2VkYCBtZXRob2Qgd2lsbCBiZSBpbnZva2VkIGZvciB5b3Ugd2hlbiB0aGUgZWxlbWVudCdzIGNoaWxkcmVuXG4gICAqIGNoYW5nZSwgdHVybmluZyBvbiB0aGUgb3B0aW1pemF0aW9uIGF1dG9tYXRpY2FsbHkuXG4gICAqL1xuICBjbGFzcyBDb250ZW50QXNJdGVtcyBleHRlbmRzIGJhc2Uge1xuXG4gICAgLyoqXG4gICAgICogQXBwbHkgdGhlIHNlbGVjdGlvbiBzdGF0ZSB0byBhIHNpbmdsZSBpdGVtLlxuICAgICAqXG4gICAgICogSW52b2tlIHRoaXMgbWV0aG9kIHRvIHNpZ25hbCB0aGF0IHRoZSBzZWxlY3RlZCBzdGF0ZSBvZiB0aGUgaW5kaWNhdGVkIGl0ZW1cbiAgICAgKiBoYXMgY2hhbmdlZC4gQnkgZGVmYXVsdCwgdGhpcyBhcHBsaWVzIGEgYHNlbGVjdGVkYCBDU1MgY2xhc3MgaWYgdGhlIGl0ZW1cbiAgICAgKiBpcyBzZWxlY3RlZCwgYW5kIHJlbW92ZWQgaXQgaWYgbm90IHNlbGVjdGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaXRlbSAtIFRoZSBpdGVtIHdob3NlIHNlbGVjdGlvbiBzdGF0ZSBoYXMgY2hhbmdlZC5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNlbGVjdGVkIC0gVHJ1ZSBpZiB0aGUgaXRlbSBpcyBzZWxlY3RlZCwgZmFsc2UgaWYgbm90LlxuICAgICAqL1xuICAgIGFwcGx5U2VsZWN0aW9uKGl0ZW0sIHNlbGVjdGVkKSB7XG4gICAgICBpZiAoc3VwZXIuYXBwbHlTZWxlY3Rpb24pIHsgc3VwZXIuYXBwbHlTZWxlY3Rpb24oaXRlbSwgc2VsZWN0ZWQpOyB9XG4gICAgICB0b2dnbGVDbGFzcyhpdGVtLCAnc2VsZWN0ZWQnLCBzZWxlY3RlZCk7XG4gICAgfVxuXG4gICAgY29udGVudENoYW5nZWQoKSB7XG4gICAgICBpZiAoc3VwZXIuY29udGVudENoYW5nZWQpIHsgc3VwZXIuY29udGVudENoYW5nZWQoKTsgfVxuXG4gICAgICAvLyBTaW5jZSB3ZSBnb3QgdGhlIGNvbnRlbnRDaGFuZ2VkIGNhbGwsIHdlJ2xsIGFzc3VtZSB3ZSdsbCBiZSBub3RpZmllZCBpZlxuICAgICAgLy8gdGhlIHNldCBvZiBpdGVtcyBjaGFuZ2VzIGxhdGVyLiBXZSB0dXJuIG9uIG1lbW9pemF0aW9uIG9mIHRoZSBpdGVtc1xuICAgICAgLy8gcHJvcGVydHkgYnkgc2V0dGluZyBvdXIgaW50ZXJuYWwgcHJvcGVydHkgdG8gbnVsbCAoaW5zdGVhZCBvZlxuICAgICAgLy8gdW5kZWZpbmVkKS5cbiAgICAgIHRoaXNbaXRlbXNTeW1ib2xdID0gbnVsbDtcblxuICAgICAgdGhpcy5pdGVtc0NoYW5nZWQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIHdoZW5ldmVyIGEgbmV3IGl0ZW0gaXMgYWRkZWQgdG8gdGhlIGxpc3QuXG4gICAgICpcbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuIFlvdSBjYW4gb3ZlcnJpZGVcbiAgICAgKiB0aGlzIHRvIHBlcmZvcm0gcGVyLWl0ZW0gaW5pdGlhbGl6YXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpdGVtIC0gVGhlIGl0ZW0gdGhhdCB3YXMgYWRkZWQuXG4gICAgICovXG4gICAgaXRlbUFkZGVkKGl0ZW0pIHtcbiAgICAgIGlmIChzdXBlci5pdGVtQWRkZWQpIHsgc3VwZXIuaXRlbUFkZGVkKGl0ZW0pOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgc2V0IG9mIGl0ZW1zIGluIHRoZSBsaXN0LiBTZWUgdGhlIHRvcC1sZXZlbCBkb2N1bWVudGF0aW9uIGZvclxuICAgICAqIG1peGluIGZvciBhIGRlc2NyaXB0aW9uIG9mIGhvdyBpdGVtcyBkaWZmZXIgZnJvbSBwbGFpbiBjb250ZW50LlxuICAgICAqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50W119XG4gICAgICovXG4gICAgZ2V0IGl0ZW1zKCkge1xuICAgICAgbGV0IGl0ZW1zO1xuICAgICAgaWYgKHRoaXNbaXRlbXNTeW1ib2xdID09IG51bGwpIHtcbiAgICAgICAgaXRlbXMgPSBmaWx0ZXJBdXhpbGlhcnlFbGVtZW50cyh0aGlzLmNvbnRlbnQpO1xuICAgICAgICAvLyBOb3RlOiB0ZXN0IGZvciAqZXF1YWxpdHkqIHdpdGggbnVsbDsgZG9uJ3QgdHJlYXQgdW5kZWZpbmVkIGFzIGEgbWF0Y2guXG4gICAgICAgIGlmICh0aGlzW2l0ZW1zU3ltYm9sXSA9PT0gbnVsbCkge1xuICAgICAgICAgIC8vIE1lbW9pemUgdGhlIHNldCBvZiBpdGVtcy5cbiAgICAgICAgICB0aGlzW2l0ZW1zU3ltYm9sXSA9IGl0ZW1zO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBSZXR1cm4gdGhlIG1lbW9pemVkIGl0ZW1zLlxuICAgICAgICBpdGVtcyA9IHRoaXNbaXRlbXNTeW1ib2xdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbiB0aGUgdW5kZXJseWluZyBjb250ZW50cyBjaGFuZ2UuIEl0IGlzIGFsc29cbiAgICAgKiBpbnZva2VkIG9uIGNvbXBvbmVudCBpbml0aWFsaXphdGlvbiDigJMgc2luY2UgdGhlIGl0ZW1zIGhhdmUgXCJjaGFuZ2VkXCIgZnJvbVxuICAgICAqIGJlaW5nIG5vdGhpbmcuXG4gICAgICovXG4gICAgaXRlbXNDaGFuZ2VkKCkge1xuICAgICAgaWYgKHN1cGVyLml0ZW1zQ2hhbmdlZCkgeyBzdXBlci5pdGVtc0NoYW5nZWQoKTsgfVxuXG4gICAgICAvLyBQZXJmb3JtIHBlci1pdGVtIGluaXRpYWxpemF0aW9uLlxuICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoIWl0ZW1baXRlbUluaXRpYWxpemVkU3ltYm9sXSkge1xuICAgICAgICAgIHRoaXMuaXRlbUFkZGVkKGl0ZW0pO1xuICAgICAgICAgIGl0ZW1baXRlbUluaXRpYWxpemVkU3ltYm9sXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdpdGVtcy1jaGFuZ2VkJykpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogQGV2ZW50IGl0ZW1zLWNoYW5nZWRcbiAgICAgKlxuICAgICAqIFRoaXMgZXZlbnQgaXMgcmFpc2VkIHdoZW4gdGhlIHNldCBvZiBpdGVtcyBjaGFuZ2VzLlxuICAgICAqL1xuICB9XG5cbiAgcmV0dXJuIENvbnRlbnRBc0l0ZW1zO1xufTtcblxuXG4vLyBSZXR1cm4gdGhlIGdpdmVuIGVsZW1lbnRzLCBmaWx0ZXJpbmcgb3V0IGF1eGlsaWFyeSBlbGVtZW50cyB0aGF0IGFyZW4ndFxuLy8gdHlwaWNhbGx5IHZpc2libGUuIEl0ZW1zIHdoaWNoIGFyZSBub3QgZWxlbWVudHMgYXJlIHJldHVybmVkIGFzIGlzLlxuZnVuY3Rpb24gZmlsdGVyQXV4aWxpYXJ5RWxlbWVudHMoaXRlbXMpIHtcbiAgbGV0IGF1eGlsaWFyeVRhZ3MgPSBbXG4gICAgJ2xpbmsnLFxuICAgICdzY3JpcHQnLFxuICAgICdzdHlsZScsXG4gICAgJ3RlbXBsYXRlJ1xuICBdO1xuICByZXR1cm4gW10uZmlsdGVyLmNhbGwoaXRlbXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICByZXR1cm4gIWl0ZW0ubG9jYWxOYW1lIHx8IGF1eGlsaWFyeVRhZ3MuaW5kZXhPZihpdGVtLmxvY2FsTmFtZSkgPCAwO1xuICB9KTtcbn1cblxuXG4vKipcbiAqIEZpcmVzIHdoZW4gdGhlIGl0ZW1zIGluIHRoZSBsaXN0IGNoYW5nZS5cbiAqXG4gKiBAbWVtYmVyb2YgQ29udGVudEFzSXRlbXNcbiAqIEBldmVudCBpdGVtcy1jaGFuZ2VkXG4gKi9cbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi9jcmVhdGVTeW1ib2wnO1xuXG5cbi8vIFN5bWJvbHMgZm9yIHByaXZhdGUgZGF0YSBtZW1iZXJzIG9uIGFuIGVsZW1lbnQuXG5jb25zdCB0YXJnZXRTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3RhcmdldCcpO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggQ29udGVudEZpcnN0Q2hpbGRUYXJnZXQuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB0aGF0IGRlZmluZXMgdGhlIHRhcmdldCBvZiBhIGNvbXBvbmVudCDigJQgdGhlIGVsZW1lbnQgdGhlIGNvbXBvbmVudCBpc1xuICAgKiBtYW5hZ2luZyBvciBzb21laG93IHJlc3BvbnNpYmxlIGZvciDigJQgYXMgaXRzIGZpcnN0IGNoaWxkLlxuICAgKlxuICAgKiBTb21lIGNvbXBvbmVudHMgc2VydmUgdG8gZGVjb3JhdGUgb3IgbW9kaWZ5IG90aGVyIGVsZW1lbnRzLiBBIGNvbW1vblxuICAgKiBwYXR0ZXJuIGlzIHRvIGhhdmUgb25lIGNvbXBvbmVudCB3cmFwIGFub3RoZXIsIGFuZCBoYXZlIHRoZSBvdXRlciwgcGFyZW50XG4gICAqIGNvbXBvbmVudCBpbXBsaWNpdGx5IG1vZGlmeSB0aGUgY2hpbGQuIFRoaXMgbWl4aW4gZmFjaWxpdGF0ZXMgdGhpcyBieVxuICAgKiBpbXBsaWNpdGx5IHRha2luZyBhbiBlbGVtZW50J3MgZmlyc3QgY2hpbGQgYXMgaXRzIFwidGFyZ2V0XCIuXG4gICAqXG4gICAqIEV4YW1wbGU6XG4gICAqXG4gICAqICAgICA8b3V0ZXItZWxlbWVudD5cbiAgICogICAgICAgPGlubmVyLWVsZW1lbnQ+PC9pbm5lci1lbGVtZW50PlxuICAgKiAgICAgPC9vdXRlci1lbGVtZW50PlxuICAgKlxuICAgKiBJZiBgb3V0ZXItZWxlbWVudGAgdXNlcyB0aGlzIG1peGluLCB0aGVuIGl0cyBgdGFyZ2V0YCBwcm9wZXJ0eSB3aWxsIGJlXG4gICAqIHNldCB0byBwb2ludCB0byB0aGUgYGlubmVyLWVsZW1lbnRgLCBiZWNhdXNlIHRoYXQgaXMgaXRzIGZpcnN0IGNoaWxkLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGV4cGVjdHMgYSBgY29udGVudGAgcHJvcGVydHkgdGhhdCByZXR1cm5zIHRoZSBlbGVtZW50J3MgY29udGVudC5cbiAgICogWW91IGNhbiBpbXBsZW1lbnQgdGhhdCB5b3Vyc2VsZiwgb3IgdXNlIHRoZVxuICAgKiBbRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudF0oRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudC5tZCkgbWl4aW4uXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gY2FuIGJlIGNvbWJpbmVkIHdpdGggdGhlXG4gICAqIFtUYXJnZXRJbkNvbGxlY3RpdmVdKFRhcmdldEluQ29sbGVjdGl2ZS5tZCkgbWl4aW4gdG8gaGF2ZSBhIGNvbXBvbmVudFxuICAgKiBwYXJ0aWNpcGF0ZSBpbiBjb2xsZWN0aXZlIGtleWJvYXJkIGhhbmRsaW5nLlxuICAgKi9cbiAgY2xhc3MgQ29udGVudEZpcnN0Q2hpbGRUYXJnZXQgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbnRlbnRDaGFuZ2VkKCkge1xuICAgICAgaWYgKHN1cGVyLmNvbnRlbnRDaGFuZ2VkKSB7IHN1cGVyLmNvbnRlbnRDaGFuZ2VkKCk7IH1cbiAgICAgIGxldCBjb250ZW50ID0gdGhpcy5jb250ZW50O1xuICAgICAgbGV0IHRhcmdldCA9IGNvbnRlbnQgJiYgY29udGVudFswXTtcbiAgICAgIC8vIEEgY29tcG9uZW50IHVzaW5nIGEgdGFyZ2V0IHdpbGwgbGlrZWx5IGRvIGEgYnVuY2ggb2Ygd29yayB3aGVuIHRoZVxuICAgICAgLy8gdGFyZ2V0IGNoYW5nZXMsIHNvIG9ubHkgc2V0IHRoZSB0YXJnZXQgaWYgaXQncyBhY3R1YWxseSBjaGFuZ2VkLlxuICAgICAgaWYgKHRhcmdldCAmJiB0YXJnZXQgIT09IHRoaXMudGFyZ2V0KSB7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMvc2V0cyB0aGUgY3VycmVudCB0YXJnZXQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICBnZXQgdGFyZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXNbdGFyZ2V0U3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IHRhcmdldChlbGVtZW50KSB7XG4gICAgICBpZiAoJ3RhcmdldCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIudGFyZ2V0ID0gZWxlbWVudDsgfVxuICAgICAgdGhpc1t0YXJnZXRTeW1ib2xdID0gZWxlbWVudDtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBDb250ZW50Rmlyc3RDaGlsZFRhcmdldDtcbn07XG4iLCIvKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIERpcmVjdGlvblNlbGVjdGlvbi4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIG1hcHMgZGlyZWN0aW9uIHNlbWFudGljcyAoZ29MZWZ0LCBnb1JpZ2h0LCBldGMuKSB0byBzZWxlY3Rpb25cbiAgICogc2VtYW50aWNzIChzZWxlY3RQcmV2aW91cywgc2VsZWN0TmV4dCwgZXRjLikuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gY2FuIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGVcbiAgICogW0tleWJvYXJkRGlyZWN0aW9uXShLZXlib2FyZERpcmVjdGlvbi5tZCkgbWl4aW4gKHdoaWNoIG1hcHMga2V5Ym9hcmQgZXZlbnRzXG4gICAqIHRvIGRpcmVjdGlvbnMpIGFuZCBhIG1peGluIHRoYXQgaGFuZGxlcyBzZWxlY3Rpb24gbGlrZVxuICAgKiBbSXRlbXNTZWxlY3Rpb25dKEl0ZW1zU2VsZWN0aW9uLm1kKS5cbiAgICovXG4gIGNsYXNzIERpcmVjdGlvblNlbGVjdGlvbiBleHRlbmRzIGJhc2Uge1xuXG4gICAgZ29Eb3duKCkge1xuICAgICAgaWYgKHN1cGVyLmdvRG93bikgeyBzdXBlci5nb0Rvd24oKTsgfVxuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0TmV4dCgpO1xuICAgIH1cblxuICAgIGdvRW5kKCkge1xuICAgICAgaWYgKHN1cGVyLmdvRW5kKSB7IHN1cGVyLmdvRW5kKCk7IH1cbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdExhc3QoKTtcbiAgICB9XG5cbiAgICBnb0xlZnQoKSB7XG4gICAgICBpZiAoc3VwZXIuZ29MZWZ0KSB7IHN1cGVyLmdvTGVmdCgpOyB9XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RQcmV2aW91cygpO1xuICAgIH1cblxuICAgIGdvUmlnaHQoKSB7XG4gICAgICBpZiAoc3VwZXIuZ29SaWdodCkgeyBzdXBlci5nb1JpZ2h0KCk7IH1cbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdE5leHQoKTtcbiAgICB9XG5cbiAgICBnb1N0YXJ0KCkge1xuICAgICAgaWYgKHN1cGVyLmdvU3RhcnQpIHsgc3VwZXIuZ29TdGFydCgpOyB9XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RGaXJzdCgpO1xuICAgIH1cblxuICAgIGdvVXAoKSB7XG4gICAgICBpZiAoc3VwZXIuZ29VcCkgeyBzdXBlci5nb1VwKCk7IH1cbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdFByZXZpb3VzKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCBpbXBsZW1lbnRhdGlvbi4gVGhpcyB3aWxsIHR5cGljYWxseSBiZSBoYW5kbGVkIGJ5IG90aGVyIG1peGlucy5cbiAgICBnZXQgc2VsZWN0ZWRGcmFjdGlvbigpIHtcbiAgICAgIHJldHVybiBzdXBlci5zZWxlY3RlZEZyYWN0aW9uO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0ZWRGcmFjdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKCdzZWxlY3RlZEZyYWN0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEZyYWN0aW9uID0gdmFsdWU7IH1cbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IGltcGxlbWVudGF0aW9uLiBUaGlzIHdpbGwgdHlwaWNhbGx5IGJlIGhhbmRsZWQgYnkgb3RoZXIgbWl4aW5zLlxuICAgIHNlbGVjdEZpcnN0KCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdEZpcnN0KSB7IHJldHVybiBzdXBlci5zZWxlY3RGaXJzdCgpOyB9XG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCBpbXBsZW1lbnRhdGlvbi4gVGhpcyB3aWxsIHR5cGljYWxseSBiZSBoYW5kbGVkIGJ5IG90aGVyIG1peGlucy5cbiAgICBzZWxlY3RMYXN0KCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdExhc3QpIHsgcmV0dXJuIHN1cGVyLnNlbGVjdExhc3QoKTsgfVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgaW1wbGVtZW50YXRpb24uIFRoaXMgd2lsbCB0eXBpY2FsbHkgYmUgaGFuZGxlZCBieSBvdGhlciBtaXhpbnMuXG4gICAgc2VsZWN0TmV4dCgpIHtcbiAgICAgIGlmIChzdXBlci5zZWxlY3ROZXh0KSB7IHJldHVybiBzdXBlci5zZWxlY3ROZXh0KCk7IH1cbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IGltcGxlbWVudGF0aW9uLiBUaGlzIHdpbGwgdHlwaWNhbGx5IGJlIGhhbmRsZWQgYnkgb3RoZXIgbWl4aW5zLlxuICAgIHNlbGVjdFByZXZpb3VzKCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdFByZXZpb3VzKSB7IHJldHVybiBzdXBlci5zZWxlY3RQcmV2aW91cygpOyB9XG4gICAgfVxuXG4gICAgLy8gTWFwIGRyYWcgdHJhdmVsIGZyYWN0aW9uIHRvIHNlbGVjdGlvbiBmcmFjdGlvbi5cbiAgICBnZXQgdHJhdmVsRnJhY3Rpb24oKSB7XG4gICAgICByZXR1cm4gc3VwZXIudHJhdmVsRnJhY3Rpb247XG4gICAgfVxuICAgIHNldCB0cmF2ZWxGcmFjdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKCd0cmF2ZWxGcmFjdGlvbicgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIudHJhdmVsRnJhY3Rpb24gPSB2YWx1ZTsgfVxuICAgICAgdGhpcy5zZWxlY3RlZEZyYWN0aW9uID0gdmFsdWU7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gRGlyZWN0aW9uU2VsZWN0aW9uO1xufTtcbiIsIi8vIFRPRE86IFJhdGlvbmFsaXplIHdpdGggbmV3IEN1c3RvbSBFbGVtZW50cyBBUEkuXG4vLyBUT0RPOiBDb25zaWRlciByZW5hbWluZyB0byBtYXRjaCBDdXN0b20gRWxlbWVudHMgQVBJLlxuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggRGlzdHJpYnV0ZWRDaGlsZHJlbi4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIGRlZmluZXMgaGVscGVycyBmb3IgYWNjZXNzaW5nIGEgY29tcG9uZW50J3MgZGlzdHJpYnV0ZWRcbiAgICogY2hpbGRyZW4gYXMgYSBmbGF0dGVuZWQgYXJyYXkgb3Igc3RyaW5nLlxuICAgKlxuICAgKiBUaGUgc3RhbmRhcmQgRE9NIEFQSSBwcm92aWRlcyBzZXZlcmFsIHdheXMgb2YgYWNjZXNzaW5nIGNoaWxkIGNvbnRlbnQ6XG4gICAqIGBjaGlsZHJlbmAsIGBjaGlsZE5vZGVzYCwgYW5kIGB0ZXh0Q29udGVudGAuIE5vbmUgb2YgdGhlc2UgZnVuY3Rpb25zIGFyZVxuICAgKiBTaGFkb3cgRE9NIGF3YXJlLiBUaGlzIG1peGluIGRlZmluZXMgdmFyaWF0aW9ucyBvZiB0aG9zZSBmdW5jdGlvbnMgdGhhdFxuICAgKiAqYXJlKiBTaGFkb3cgRE9NIGF3YXJlLlxuICAgKlxuICAgKiBFeGFtcGxlOiB5b3UgY3JlYXRlIGEgY29tcG9uZW50IGA8Y291bnQtY2hpbGRyZW4+YCB0aGF0IGRpc3BsYXlzIGEgbnVtYmVyXG4gICAqIGVxdWFsIHRvIHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gcGxhY2VkIGluc2lkZSB0aGF0IGNvbXBvbmVudC4gSWYgc29tZW9uZVxuICAgKiBpbnN0YW50aWF0ZXMgeW91ciBjb21wb25lbnQgbGlrZTpcbiAgICpcbiAgICogICAgIDxjb3VudC1jaGlsZHJlbj5cbiAgICogICAgICAgPGRpdj48L2Rpdj5cbiAgICogICAgICAgPGRpdj48L2Rpdj5cbiAgICogICAgICAgPGRpdj48L2Rpdj5cbiAgICogICAgIDwvY291bnQtY2hpbGRyZW4+XG4gICAqXG4gICAqIFRoZW4gdGhlIGNvbXBvbmVudCBzaG91bGQgc2hvdyBcIjNcIiwgYmVjYXVzZSB0aGVyZSBhcmUgdGhyZWUgY2hpbGRyZW4uIFRvXG4gICAqIGNhbGN1bGF0ZSB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuLCB0aGUgY29tcG9uZW50IGNhbiBqdXN0IGNhbGN1bGF0ZVxuICAgKiBgdGhpcy5jaGlsZHJlbi5sZW5ndGhgLiBIb3dldmVyLCBzdXBwb3NlIHNvbWVvbmUgaW5zdGFudGlhdGVzIHlvdXJcbiAgICogY29tcG9uZW50IGluc2lkZSBvbmUgb2YgdGhlaXIgb3duIGNvbXBvbmVudHMsIGFuZCBwdXRzIGEgYDxzbG90PmAgZWxlbWVudFxuICAgKiBpbnNpZGUgeW91ciBjb21wb25lbnQ6XG4gICAqXG4gICAqICAgICA8Y291bnQtY2hpbGRyZW4+XG4gICAqICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICogICAgIDwvY291bnQtY2hpbGRyZW4+XG4gICAqXG4gICAqIElmIHlvdXIgY29tcG9uZW50IG9ubHkgbG9va3MgYXQgYHRoaXMuY2hpbGRyZW5gLCBpdCB3aWxsIGFsd2F5cyBzZWUgZXhhY3RseVxuICAgKiBvbmUgY2hpbGQg4oCUwqB0aGUgYDxzbG90PmAgZWxlbWVudC4gQnV0IHRoZSB1c2VyIGxvb2tpbmcgYXQgdGhlIHBhZ2Ugd2lsbFxuICAgKiAqc2VlKiBhbnkgbm9kZXMgZGlzdHJpYnV0ZWQgdG8gdGhhdCBzbG90LiBUbyBtYXRjaCB3aGF0IHRoZSB1c2VyIHNlZXMsIHlvdXJcbiAgICogY29tcG9uZW50IHNob3VsZCBleHBhbmQgYW55IGA8c2xvdD5gIGVsZW1lbnRzIGl0IGNvbnRhaW5zLlxuICAgKlxuICAgKiBUaGF0IGlzIHRoZSBwcm9ibGVtIHRoaXMgbWl4aW4gc29sdmVzLiBBZnRlciBhcHBseWluZyB0aGlzIG1peGluLCB5b3VyXG4gICAqIGNvbXBvbmVudCBjb2RlIGhhcyBhY2Nlc3MgdG8gYHRoaXMuZGlzdHJpYnV0ZWRDaGlsZHJlbmAsIHdob3NlIGBsZW5ndGhgXG4gICAqIHdpbGwgcmV0dXJuIHRoZSB0b3RhbCBudW1iZXIgb2YgYWxsIGNoaWxkcmVuIGRpc3RyaWJ1dGVkIHRvIHlvdXIgY29tcG9uZW50XG4gICAqIGluIHRoZSBjb21wb3NlZCB0cmVlLlxuICAgKlxuICAgKiBOb3RlOiBUaGUgbGF0ZXN0IEN1c3RvbSBFbGVtZW50cyBBUEkgZGVzaWduIGNhbGxzIGZvciBhIG5ldyBmdW5jdGlvbixcbiAgICogYGdldEFzc2lnbmVkTm9kZXNgIHRoYXQgdGFrZXMgYW4gb3B0aW9uYWwgYGRlZXBgIHBhcmFtZXRlciwgdGhhdCB3aWxsIHNvbHZlXG4gICAqIHRoaXMgcHJvYmxlbSBhdCB0aGUgQVBJIGxldmVsLlxuICAgKi9cbiAgY2xhc3MgRGlzdHJpYnV0ZWRDaGlsZHJlbiBleHRlbmRzIGJhc2Uge1xuXG4gICAgLyoqXG4gICAgICogQW4gaW4tb3JkZXIgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiwgZXhwYW5kaW5nIGFueSBzbG90IGVsZW1lbnRzLiBMaWtlIHRoZVxuICAgICAqIHN0YW5kYXJkIGNoaWxkcmVuIHByb3BlcnR5LCB0aGlzIHNraXBzIHRleHQgbm9kZXMuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnRbXX1cbiAgICAgKi9cbiAgICBnZXQgZGlzdHJpYnV0ZWRDaGlsZHJlbigpIHtcbiAgICAgIHJldHVybiBleHBhbmRDb250ZW50RWxlbWVudHModGhpcy5jaGlsZHJlbiwgZmFsc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFuIGluLW9yZGVyIGNvbGxlY3Rpb24gb2YgY2hpbGQgbm9kZXMsIGV4cGFuZGluZyBhbnkgc2xvdCBlbGVtZW50cy4gTGlrZVxuICAgICAqIHRoZSBzdGFuZGFyZCBjaGlsZE5vZGVzIHByb3BlcnR5LCB0aGlzIGluY2x1ZGVzIHRleHQgbm9kZXMuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Tm9kZVtdfVxuICAgICAqL1xuICAgIGdldCBkaXN0cmlidXRlZENoaWxkTm9kZXMoKSB7XG4gICAgICByZXR1cm4gZXhwYW5kQ29udGVudEVsZW1lbnRzKHRoaXMuY2hpbGROb2RlcywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbmNhdGVuYXRlZCB0ZXh0IGNvbnRlbnQgb2YgYWxsIGNoaWxkIG5vZGVzLCBleHBhbmRpbmcgYW55IHNsb3RcbiAgICAgKiBlbGVtZW50cy5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0IGRpc3RyaWJ1dGVkVGV4dENvbnRlbnQoKSB7XG4gICAgICBsZXQgc3RyaW5ncyA9IHRoaXMuZGlzdHJpYnV0ZWRDaGlsZE5vZGVzLm1hcChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgICByZXR1cm4gY2hpbGQudGV4dENvbnRlbnQ7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBzdHJpbmdzLmpvaW4oJycpO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIERpc3RyaWJ1dGVkQ2hpbGRyZW47XG59O1xuXG5cbi8qXG4gKiBHaXZlbiBhIGFycmF5IG9mIG5vZGVzLCByZXR1cm4gYSBuZXcgYXJyYXkgd2l0aCBhbnkgY29udGVudCBlbGVtZW50cyBleHBhbmRlZFxuICogdG8gdGhlIG5vZGVzIGRpc3RyaWJ1dGVkIHRvIHRoYXQgY29udGVudCBlbGVtZW50LiBUaGlzIHJ1bGUgaXMgYXBwbGllZFxuICogcmVjdXJzaXZlbHkuXG4gKlxuICogSWYgaW5jbHVkZVRleHROb2RlcyBpcyB0cnVlLCB0ZXh0IG5vZGVzIHdpbGwgYmUgaW5jbHVkZWQsIGFzIGluIHRoZVxuICogc3RhbmRhcmQgY2hpbGROb2RlcyBwcm9wZXJ0eTsgYnkgZGVmYXVsdCwgdGhpcyBza2lwcyB0ZXh0IG5vZGVzLCBsaWtlIHRoZVxuICogc3RhbmRhcmQgY2hpbGRyZW4gcHJvcGVydHkuXG4gKi9cbmZ1bmN0aW9uIGV4cGFuZENvbnRlbnRFbGVtZW50cyhub2RlcywgaW5jbHVkZVRleHROb2Rlcykge1xuICBsZXQgZXhwYW5kZWQgPSBBcnJheS5wcm90b3R5cGUubWFwLmNhbGwobm9kZXMsIG5vZGUgPT4ge1xuICAgIC8vIFdlIHdhbnQgdG8gc2VlIGlmIHRoZSBub2RlIGlzIGFuIGluc3RhbmNlb2YgSFRNTFNsb3RFTGVtZW50LCBidXRcbiAgICAvLyB0aGF0IGNsYXNzIHdvbid0IGV4aXN0IGlmIHRoZSBicm93c2VyIHRoYXQgZG9lc24ndCBzdXBwb3J0IG5hdGl2ZVxuICAgIC8vIFNoYWRvdyBET00gYW5kIGlmIHRoZSBTaGFkb3cgRE9NIHBvbHlmaWxsIGhhc24ndCBiZWVuIGxvYWRlZC4gSW5zdGVhZCxcbiAgICAvLyB3ZSBkbyBhIHNpbXBsaXN0aWMgY2hlY2sgdG8gc2VlIGlmIHRoZSB0YWcgbmFtZSBpcyBcInNsb3RcIiBvciBcImNvbnRlbnRcIi5cbiAgICBpZiAobm9kZS5sb2NhbE5hbWUgPT09IFwic2xvdFwiIHx8IG5vZGUubG9jYWxOYW1lID09PSBcImNvbnRlbnRcIikge1xuICAgICAgLy8gVXNlIHRoZSBub2RlcyBhc3NpZ25lZCB0byB0aGlzIG5vZGUgaW5zdGVhZC5cbiAgICAgIGxldCBhc3NpZ25lZE5vZGVzO1xuICAgICAgaWYgKG5vZGUuYXNzaWduZWROb2Rlcykge1xuICAgICAgICAvLyBzbG90IGVsZW1lbnRcbiAgICAgICAgYXNzaWduZWROb2RlcyA9IG5vZGUuYXNzaWduZWROb2Rlcyh7IGZsYXR0ZW46IHRydWUgfSk7XG4gICAgICB9IGVsc2UgaWYgKG5vZGUuZ2V0RGlzdHJpYnV0ZWROb2Rlcykge1xuICAgICAgICAvLyBjb250ZW50IGVsZW1lbnRcbiAgICAgICAgYXNzaWduZWROb2RlcyA9IG5vZGUuZ2V0RGlzdHJpYnV0ZWROb2RlcygpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFzc2lnbmVkTm9kZXMgP1xuICAgICAgICBleHBhbmRDb250ZW50RWxlbWVudHMoYXNzaWduZWROb2RlcywgaW5jbHVkZVRleHROb2RlcykgOlxuICAgICAgICBbXTtcbiAgICB9IGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgLy8gUGxhaW4gZWxlbWVudDsgdXNlIGFzIGlzLlxuICAgICAgcmV0dXJuIFtub2RlXTtcbiAgICB9IGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBUZXh0ICYmIGluY2x1ZGVUZXh0Tm9kZXMpIHtcbiAgICAgIC8vIFRleHQgbm9kZS5cbiAgICAgIHJldHVybiBbbm9kZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIENvbW1lbnQsIHByb2Nlc3NpbmcgaW5zdHJ1Y3Rpb24sIGV0Yy47IHNraXAuXG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9KTtcbiAgbGV0IGZsYXR0ZW5lZCA9IFtdLmNvbmNhdCguLi5leHBhbmRlZCk7XG4gIHJldHVybiBmbGF0dGVuZWQ7XG59XG4iLCIvKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBkZWZpbmVzIGEgY29tcG9uZW50J3MgY29udGVudCBhcyBpdHMgY2hpbGRyZW4sIGV4cGFuZGluZyBhbnlcbiAgICogbm9kZXMgZGlzdHJpYnV0ZWQgdG8gdGhlIGNvbXBvbmVudCdzIHNsb3RzLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGlzIGludGVuZGVkIGZvciB1c2Ugd2l0aCB0aGVcbiAgICogW0Rpc3RyaWJ1dGVkQ2hpbGRyZW5dKERpc3RyaWJ1dGVkQ2hpbGRyZW4ubWQpIG1peGluLiBTZWUgdGhhdCBtaXhpbiBmb3IgYVxuICAgKiBkaXNjdXNzaW9uIG9mIGhvdyB0aGF0IHdvcmtzLiBUaGlzIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQgbWl4aW5cbiAgICogcHJvdmlkZXMgYW4gZWFzeSB3YXkgb2YgZGVmaW5pbmcgdGhlIFwiY29udGVudFwiIG9mIGEgY29tcG9uZW50IGFzIHRoZVxuICAgKiBjb21wb25lbnQncyBkaXN0cmlidXRlZCBjaGlsZHJlbi4gVGhhdCBpbiB0dXJuIGxldHMgbWl4aW5zIGxpa2VcbiAgICogW0NvbnRlbnRBc0l0ZW1zXShDb250ZW50QXNJdGVtcy5tZCkgbWFuaXB1bGF0ZSB0aGUgY2hpbGRyZW4gYXMgbGlzdCBpdGVtcy5cbiAgICovXG4gIGNsYXNzIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQgZXh0ZW5kcyBiYXNlIHtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjb250ZW50IG9mIHRoaXMgY29tcG9uZW50LCBkZWZpbmVkIHRvIGJlIHRoZSBmbGF0dGVuZWQgYXJyYXkgb2ZcbiAgICAgKiBjaGlsZHJlbiBkaXN0cmlidXRlZCB0byB0aGUgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50W119XG4gICAgICovXG4gICAgZ2V0IGNvbnRlbnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5kaXN0cmlidXRlZENoaWxkcmVuO1xuICAgIH1cbiAgICBzZXQgY29udGVudCh2YWx1ZSkge1xuICAgICAgaWYgKCdjb250ZW50JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5jb250ZW50ID0gdmFsdWU7IH1cbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50O1xufTtcbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi9jcmVhdGVTeW1ib2wnO1xuXG5cbi8vIFN5bWJvbHMgZm9yIHByaXZhdGUgZGF0YSBtZW1iZXJzIG9uIGFuIGVsZW1lbnQuXG5jb25zdCBzZWxlY3RlZEZyYWN0aW9uU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdzZWxlY3RlZEZyYWN0aW9uJyk7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBGcmFjdGlvbmFsU2VsZWN0aW9uLiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl4aW4oYmFzZSkge1xuXG4gIC8qKlxuICAgKiBBZGRzIHN1cHBvcnQgZm9yIGZyYWN0aW9uYWwgc2VsZWN0aW9uOiB0cmVhdGluZyBhIHNlbGVjdGlvbiBhcyBhIHJlYWxcbiAgICogbnVtYmVyIHRoYXQgY29tYmluZXMgYW4gaW50ZWdlciBwb3J0aW9uIChhbiBpbmRleCBpbnRvIGEgbGlzdCksIGFuZCBhXG4gICAqIGZyYWN0aW9uIChpbmRpY2F0aW5nIGhvdyBmYXIgb2YgdGhlIHdheSB3ZSBhcmUgdG8gdGhlIG5leHQgb3IgcHJldmlvdXNcbiAgICogaXRlbSkuXG4gICAqXG4gICAqIFRoaXMgaXMgdXNlZnVsIGluIGNvbXBvbmVudHMgdGhhdCBzdXBwb3J0IGluY3JlbWVudGFsIG9wZXJhdGlvbnMgZHVyaW5nXG4gICAqIGRyYWdnaW5nIGFuZCBzd2lwaW5nLiBFeGFtcGxlOiBhIGNhcm91c2VsIGNvbXBvbmVudCBoYXMgc2V2ZXJhbCBpdGVtcywgYW5kIHRoZVxuICAgKiBjdXJyZW50bHkgc2VsZWN0ZWQgaXRlbSBpcyBpdGVtIDMuIFRoZSB1c2VyIGJlZ2lucyBzd2lwaW5nIHRvIHRoZSBsZWZ0LFxuICAgKiBtb3ZpbmcgdG93YXJkcyBzZWxlY3RpbmcgaXRlbSA0LiBIYWxmd2F5IHRocm91Z2ggdGhpcyBvcGVyYXRpb24sIHRoZVxuICAgKiBmcmFjdGlvbmFsIHNlbGVjdGlvbiB2YWx1ZSBpcyAzLjUuXG4gICAqXG4gICAqIFRoaXMgdmFsdWUgcGVybWl0cyBjb21tdW5pY2F0aW9uIGJldHdlZW4gbWl4aW5zIGxpa2VcbiAgICogW1N3aXBlRGlyZWN0aW9uXSguL1N3aXBlRGlyZWN0aW9uLm1kKSBhbmRcbiAgICogW1RyYWNrcGFkRGlyZWN0aW9uXSguL1RyYWNrcGFkRGlyZWN0aW9uLm1kKSwgd2hpY2ggZ2VuZXJhdGUgZnJhY3Rpb25hbFxuICAgKiBzZWxlY3Rpb24gdmFsdWVzLCBhbmQgbWl4aW5zIGxpa2VcbiAgICogW1NlbGVjdGlvbkFuaW1hdGlvbl0oLi9TZWxlY3Rpb25BbmltYXRpb24ubWQpLCB3aGljaCBjYW4gcmVuZGVyIHNlbGVjdGlvblxuICAgKiBhdCBhIGZyYWN0aW9uYWwgdmFsdWUuXG4gICAqL1xuICBjbGFzcyBGcmFjdGlvbmFsU2VsZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBhdHRhY2hlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmF0dGFjaGVkQ2FsbGJhY2spIHsgc3VwZXIuYXR0YWNoZWRDYWxsYmFjaygpOyB9XG4gICAgICB0aGlzLnNlbGVjdGVkRnJhY3Rpb24gPSAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgZnJhY3Rpb25hbCB2YWx1ZSBpbmRpY2F0aW5nIGhvdyBmYXIgdGhlIHVzZXIgaGFzIGN1cnJlbnRseSBhZHZhbmNlZCB0b1xuICAgICAqIHRoZSBuZXh0L3ByZXZpb3VzIGl0ZW0uIEUuZy4sIGEgYHNlbGVjdGVkRnJhY3Rpb25gIG9mIDMuNSBpbmRpY2F0ZXMgdGhlXG4gICAgICogdXNlciBpcyBoYWxmd2F5IGJldHdlZW4gaXRlbXMgMyBhbmQgNC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGVkRnJhY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpc1tzZWxlY3RlZEZyYWN0aW9uU3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGVkRnJhY3Rpb24odmFsdWUpIHtcbiAgICAgIGlmICgnc2VsZWN0ZWRGcmFjdGlvbicgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRGcmFjdGlvbiA9IHZhbHVlOyB9XG4gICAgICB0aGlzW3NlbGVjdGVkRnJhY3Rpb25TeW1ib2xdID0gdmFsdWU7XG4gICAgICBsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3NlbGVjdGlvbi1mcmFjdGlvbi1jaGFuZ2VkJyk7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIEZyYWN0aW9uYWxTZWxlY3Rpb247XG59XG5cblxubWl4aW4uaGVscGVycyA9IHtcblxuICAvKlxuICAgKiBEYW1wZW4gYSBzZWxlY3Rpb24gdGhhdCBnb2VzIHBhc3QgdGhlIGJlZ2lubmluZyBvciBlbmQgb2YgYSBsaXN0LiBUaGlzIGlzXG4gICAqIGdlbmVyYWxseSB1c2VkIHRvIHByb2R1Y2UgYSB2aXN1YWwgZWZmZWN0IG9mIHRlbnNpb24gYXMgdGhlIHVzZXIgdHJpZXMgdG9cbiAgICogZ28gZnVydGhlciBpbiBhIGRpcmVjdGlvbiB0aGF0IGhhcyBubyBtb3JlIGl0ZW1zLlxuICAgKlxuICAgKiBFeGFtcGxlOiBzdXBwb3NlIGBpdGVtQ291bnRgIGlzIDUsIGluZGljYXRpbmcgYSBsaXN0IG9mIDUgaXRlbXMuIFRoZSBpbmRleCBvZlxuICAgKiB0aGUgbGFzdCBpdGVtIGlzIDQuIElmIHRoZSBgc2VsZWN0aW9uYCBwYXJhbWV0ZXIgaXMgNC41LCB0aGUgdXNlciBpcyB0cnlpbmdcbiAgICogdG8gZ28gcGFzdCB0aGlzIGxhc3QgaXRlbS4gV2hlbiBhIGRhbXBpbmcgZnVuY3Rpb24gaXMgYXBwbGllZCwgdGhlIHJlc3VsdGluZ1xuICAgKiB2YWx1ZSB3aWxsIGJlIGxlc3MgdGhhbiA0LjUgKHRoZSBhY3R1YWwgdmFsdWUgd2lsbCBiZSA0LjI1KS4gV2hlbiB0aGlzXG4gICAqIHNlbGVjdGlvbiBzdGF0ZSBpcyByZW5kZXJlZCwgdGhlIHVzZXIgd2lsbCBzZWUgdGhhdCwgZWFjaCB1bml0IGRpc3RhbmNlIHRoZVxuICAgKiBkcmFnIHRyYXZlbHMgaGFzIGxlc3MgYW5kIGxlc3MgdmlzaWJsZSBlZmZlY3QuIFRoaXMgaXMgcGVyY2VpdmVkIGFzIHRlbnNpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzZWxlY3Rpb24gLSBBIHJlYWwgbnVtYmVyIGluZGljYXRpbmcgYSBzZWxlY3Rpb24gcG9zaXRpb25cbiAgICogQHBhcmFtIHtudW1iZXJ9IGl0ZW1Db3VudCAtIEFuIGludGVnZXIgZm9yIHRoZSBudW1iZXIgb2YgaXRlbXMgaW4gdGhlIGxpc3RcbiAgICogQHJldHVybnMge251bWJlcn0gQSByZWFsIG51bWJlciByZXByZXNlbnRpbmcgdGhlIGRhbXBlZCBzZWxlY3Rpb24gdmFsdWUuXG4gICAqL1xuICBkYW1wZWRTZWxlY3Rpb24oc2VsZWN0aW9uLCBpdGVtQ291bnQpIHtcbiAgICBsZXQgZGFtcGVkO1xuICAgIGxldCBib3VuZCA9IGl0ZW1Db3VudCAtIDE7XG4gICAgaWYgKHNlbGVjdGlvbiA8IDApIHtcbiAgICAgIC8vIFRyeWluZyB0byBnbyBwYXN0IGJlZ2lubmluZyBvZiBsaXN0LiBBcHBseSB0ZW5zaW9uIGZyb20gdGhlIGxlZnQgZWRnZS5cbiAgICAgIGRhbXBlZCA9IC1taXhpbi5oZWxwZXJzLmRhbXBpbmcoLXNlbGVjdGlvbik7XG4gICAgfSBlbHNlIGlmIChzZWxlY3Rpb24gPj0gYm91bmQpIHtcbiAgICAgIC8vIFRyeWluZyB0byBnbyBwYXN0IGVuZCBvZiBsaXN0LiBBcHBseSB0ZW5zaW9uIGZyb20gdGhlIHJpZ2h0IGVkZ2UuXG4gICAgICBkYW1wZWQgPSBib3VuZCArIG1peGluLmhlbHBlcnMuZGFtcGluZyhzZWxlY3Rpb24gLSBib3VuZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE5vIGRhbXBpbmcgcmVxdWlyZWQuXG4gICAgICBkYW1wZWQgPSBzZWxlY3Rpb247XG4gICAgfVxuICAgIHJldHVybiBkYW1wZWQ7XG4gIH0sXG5cbiAgLypcbiAgICogQ2FsY3VsYXRlIGRhbXBpbmcgYXMgYSBmdW5jdGlvbiBvZiB0aGUgZGlzdGFuY2UgcGFzdCB0aGUgbWluaW11bS9tYXhpbXVtXG4gICAqIHZhbHVlcy5cbiAgICpcbiAgICogV2Ugd2FudCB0byBhc3ltcHRvdGljYWxseSBhcHByb2FjaCBhbiBhYnNvbHV0ZSBtaW5pbXVtIG9mIDEgdW5pdFxuICAgKiBiZWxvdy9hYm92ZSB0aGUgYWN0dWFsIG1pbmltdW0vbWF4aW11bS4gVGhpcyByZXF1aXJlcyBjYWxjdWxhdGluZyBhXG4gICAqIGh5cGVyYm9saWMgZnVuY3Rpb24uXG4gICAqXG4gICAqIFNlZSBodHRwOi8vd3d3LndvbGZyYW1hbHBoYS5jb20vaW5wdXQvP2k9eSslM0QrLTElMkYlMjh4JTJCMSUyOSslMkIrMVxuICAgKiBmb3IgdGhlIG9uZSB3ZSB1c2UuIFRoZSBvbmx5IHBvcnRpb24gb2YgdGhhdCBmdW5jdGlvbiB3ZSBjYXJlIGFib3V0IGlzIHdoZW5cbiAgICogeCBpcyB6ZXJvIG9yIGdyZWF0ZXIuIEFuIGltcG9ydGFudCBjb25zaWRlcmF0aW9uIGlzIHRoYXQgdGhlIGN1cnZlIGJlXG4gICAqIHRhbmdlbnQgdG8gdGhlIGRpYWdvbmFsIGxpbmUgeD15IGF0ICgwLCAwKS4gVGhpcyBlbnN1cmVzIHNtb290aCBjb250aW51aXR5XG4gICAqIHdpdGggdGhlIG5vcm1hbCBkcmFnIGJlaGF2aW9yLCBpbiB3aGljaCB0aGUgdmlzaWJsZSBzbGlkaW5nIGlzIGxpbmVhciB3aXRoXG4gICAqIHRoZSBkaXN0YW5jZSB0aGUgdG91Y2hwb2ludCBoYXMgYmVlbiBkcmFnZ2VkLlxuICAgKi9cbiAgZGFtcGluZyh4KSB7XG4gICAgbGV0IHkgPSAoLTEgLyAoeCArIDEpKSArIDE7XG4gICAgcmV0dXJuIHk7XG4gIH0sXG5cbiAgLypcbiAgICogUmV0dXJuIHRoZSBjdXJyZW50IGZyYWN0aW9uYWwgc2VsZWN0aW9uIHZhbHVlIGZvciB0aGUgZ2l2ZW4gZWxlbWVudC5cbiAgICpcbiAgICogVGhpcyBzaW1wbHkgYWRkcyB0aGUgZWxlbWVudCdzIGBzZWxlY3RlZEluZGV4YCBhbmQgYHNlbGVjdGVkRnJhY3Rpb25gXG4gICAqIHByb3BlcnRpZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBBbiBlbGVtZW50IHRoYXQgc3VwcG9ydHMgc2VsZWN0aW9uXG4gICAqL1xuICBlbGVtZW50U2VsZWN0aW9uKGVsZW1lbnQpIHtcbiAgICBsZXQgc2VsZWN0ZWRJbmRleCA9IGVsZW1lbnQuc2VsZWN0ZWRJbmRleDtcbiAgICBpZiAoc2VsZWN0ZWRJbmRleCA8IDApIHtcbiAgICAgIC8vIE5vIHNlbGVjdGlvblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgc2VsZWN0ZWRGcmFjdGlvbiA9IGVsZW1lbnQuc2VsZWN0ZWRGcmFjdGlvbiB8fCAwO1xuICAgIHJldHVybiBzZWxlY3RlZEluZGV4ICsgc2VsZWN0ZWRGcmFjdGlvbjtcbiAgfSxcblxuICAvKlxuICAgKiBCcmVha3MgYSBmcmFjdGlvbmFsIHNlbGVjdGlvbiBpbnRvIGl0cyBpbnRlZ2VyIGFuZCBmcmFjdGlvbmFsIHBhcnRzLlxuICAgKlxuICAgKiBFeGFtcGxlOiBpZiBwYXNzZWQgMy41LCB0aGlzIHJldHVybnMgeyBpbmRleDogMywgZnJhY3Rpb246IDUgfS5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNlbGVjdGlvbiDigJPCoEEgcmVhbCBudW1iZXIgcmVwcmVzZW50aW5nIGEgc2VsZWN0aW9uIHBvaW50XG4gICAqIEByZXR1cm5zIHtvYmplY3R9IC0gQW4gb2JqZWN0IHdpdGggYW4gYGluZGV4YCBwcm9wZXJ0eSBob2xkaW5nIHRoZVxuICAgKiBzZWxlY3Rpb24ncyBpbnRlZ2VyIGNvbXBvbmVudCwgYW5kIGEgYGZyYWN0aW9uYCBwcm9wZXJ0eSBob2xkaW5nIHRoZVxuICAgKiBzZWxlY3Rpb24ncyBmcmFjdGlvbmFsIGNvbXBvbmVudC5cbiAgICovXG4gIHNlbGVjdGlvblBhcnRzKHNlbGVjdGlvbikge1xuICAgIC8vIFN0dXBpZCBJRSBkb2Vzbid0IGhhdmUgTWF0aC50cnVuYy5cbiAgICAvLyBsZXQgaW5kZXggPSBNYXRoLnRydW5jKHNlbGVjdGlvbik7XG4gICAgbGV0IGluZGV4ID0gc2VsZWN0aW9uIDwgMCA/IE1hdGguY2VpbChzZWxlY3Rpb24pIDogTWF0aC5mbG9vcihzZWxlY3Rpb24pO1xuICAgIGxldCBmcmFjdGlvbiA9IHNlbGVjdGlvbiAtIGluZGV4O1xuICAgIHJldHVybiB7IGluZGV4LCBmcmFjdGlvbiB9O1xuICB9LFxuXG4gIC8qXG4gICAqIFJldHVybnMgYSBmcmFjdGlvbmFsIHNlbGVjdGlvbiBwb2ludCBhZnRlciBhY2NvdW50aW5nIGZvciB3cmFwcGluZywgZW5zdXJpbmdcbiAgICogdGhhdCB0aGUgaW50ZWdlciBwb3J0aW9uIG9mIHRoZSBzZWxlY3Rpb24gc3RheXMgYmV0d2VlbiAwIGFuZCBgaXRlbUNvdW50YC0xLlxuICAgKiBUaGF0IGlzLCB0aGUgaW50ZWdlciBwb3J0aW9uIHdpbGwgYWx3YXlzIGJlIGEgdmFsaWQgaW5kZXggaW50byB0aGUgbGlzdC5cbiAgICpcbiAgICogRXhhbXBsZSBvZiB3cmFwcGluZyBwYXN0IHRoZSBlbmQgb2YgdGhlIGxpc3Q6IGlmIGBzZWxlY3Rpb25gIGlzIDUuNSBhbmRcbiAgICogYGl0ZW1Db3VudGAgaXMgNSwgdGhpcyByZXR1cm5zIDAuNS4gRXhhbXBsZSBvZiB3cmFwcGluZyBwYXN0IHRoZSBiZWdpbm5pbmcgb2ZcbiAgICogdGhlIGxpc3Q6IGlmIGBzZWxlY3Rpb25gIGlzIDAuNSBhbmQgYGl0ZW1Db3VudGAgaXMgNSwgdGhpcyByZXR1cm5zIDQuNS5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNlbGVjdGlvbiAtIEEgcmVhbCBudW1iZXIgcmVwcmVzZW50aW5nIGEgc2VsZWN0aW9uIHBvaW50XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpdGVtQ291bnQgLSBUaGUgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZSBsaXN0XG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IC0gVGhlIHJlc3VsdCBvZiB3cmFwcGluZyB0aGUgc2VsZWN0aW9uIHBvaW50XG4gICAqL1xuICB3cmFwcGVkU2VsZWN0aW9uKHNlbGVjdGlvbiwgaXRlbUNvdW50KSB7XG4gICAgLy8gSGFuZGxlcyBwb3NzaWJpbGl0eSBvZiBuZWdhdGl2ZSBtb2QuXG4gICAgLy8gU2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE4NjE4MjUwLzc2NDcyXG4gICAgcmV0dXJuICgoc2VsZWN0aW9uICUgaXRlbUNvdW50KSArIGl0ZW1Db3VudCkgJSBpdGVtQ291bnQ7XG4gIH0sXG5cbiAgLypcbiAgICogUmV0dXJuIHRoZSBwYXJ0cyBvZiBhIHNlbGVjdGlvbiwgZmlyc3Qgd3JhcHBpbmcgaWYgbmVjZXNzYXJ5LlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2VsZWN0aW9uIOKAkyBBIHJlYWwgbnVtYmVyIHJlcHJlc2VudGluZyBhIHNlbGVjdGlvbiBwb2ludFxuICAgKiBAcGFyYW0ge251bWJlcn0gaXRlbUNvdW50IC0gVGhlIG51bWJlciBvZiBpdGVtcyBpbiB0aGUgbGlzdFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHdyYXAg4oCTIFRydWUgaWYgdGhlIHNlbGVjdGlvbiBzaG91bGQgd3JhcCB0byBzdGF5IHdpdGhpbiB0aGVcbiAgICogbGlzdFxuICAgKiBAcmV0dXJucyB7b2JqZWN0fSDigJMgVGhlIHBhcnRzIG9mIHRoZSBzZWxlY3Rpb24sIHVzaW5nIHRoZSBzYW1lIGZvcm1hdCBhc1xuICAgKiBgc2VsZWN0aW9uUGFydHNgLlxuICAgKi9cbiAgd3JhcHBlZFNlbGVjdGlvblBhcnRzKHNlbGVjdGlvbiwgaXRlbUNvdW50LCB3cmFwKSB7XG4gICAgaWYgKHdyYXApIHtcbiAgICAgIHNlbGVjdGlvbiA9IG1peGluLmhlbHBlcnMud3JhcHBlZFNlbGVjdGlvbihzZWxlY3Rpb24sIGl0ZW1Db3VudCk7XG4gICAgfVxuICAgIHJldHVybiBtaXhpbi5oZWxwZXJzLnNlbGVjdGlvblBhcnRzKHNlbGVjdGlvbik7XG4gIH1cblxufTtcbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi9jcmVhdGVTeW1ib2wnO1xuXG5cbi8vIFN5bWJvbHMgZm9yIHByaXZhdGUgZGF0YSBtZW1iZXJzIG9uIGFuIGVsZW1lbnQuXG5jb25zdCBnZW5lcmljU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdnZW5lcmljJyk7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBHZW5lcmljLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggYWxsb3dzIGEgY29tcG9uZW50IHRvIHN1cHBvcnQgYSBcImdlbmVyaWNcIiBzdHlsZTogYSBtaW5pbWFsaXN0XG4gICAqIHN0eWxlIHRoYXQgY2FuIGVhc2lseSBiZSByZW1vdmVkIHRvIHJlc2V0IGl0cyB2aXN1YWwgYXBwZWFyYW5jZSB0byBhXG4gICAqIGJhc2VsaW5lIHN0YXRlLlxuICAgKlxuICAgKiBCeSBkZWZhdWx0LCBhIGNvbXBvbmVudCBzaG91bGQgcHJvdmlkZSBhIG1pbmltYWwgdmlzdWFsIHByZXNlbnRhdGlvbiB0aGF0XG4gICAqIGFsbG93cyB0aGUgY29tcG9uZW50IHRvIGZ1bmN0aW9uLiBIb3dldmVyLCB0aGUgbW9yZSBzdHlsaW5nIHRoZSBjb21wb25lbnRcbiAgICogcHJvdmlkZXMgYnkgZGVmYXVsdCwgdGhlIGhhcmRlciBpdCBiZWNvbWVzIHRvIGdldCB0aGUgY29tcG9uZW50IHRvIGZpdCBpblxuICAgKiBpbiBvdGhlciBzZXR0aW5ncy4gRWFjaCBDU1MgcnVsZSBoYXMgdG8gYmUgb3ZlcnJpZGRlbi4gV29yc2UsIG5ldyBDU1MgcnVsZXNcbiAgICogYWRkZWQgdG8gdGhlIGRlZmF1bHQgc3R5bGUgd29uJ3QgYmUgb3ZlcnJpZGRlbiBieSBkZWZhdWx0LCBtYWtpbmcgaXQgaGFyZFxuICAgKiB0byBrbm93IHdoZXRoZXIgYSBuZXcgdmVyc2lvbiBvZiBhIGNvbXBvbmVudCB3aWxsIHN0aWxsIGxvb2sgb2theS5cbiAgICpcbiAgICogQXMgYSBjb21wcm9taXNlLCB0aGUgbWl4aW4gZGVmaW5lcyBhIGBnZW5lcmljYCBhdHRyaWJ1dGUuIFRoaXMgYXR0cmlidXRlIGlzXG4gICAqIG5vcm1hbGx5IHNldCBieSBkZWZhdWx0LCBhbmQgc3R5bGVzIGNhbiBiZSB3cml0dGVuIHRoYXQgYXBwbHkgb25seSB3aGVuIHRoZVxuICAgKiBnZW5lcmljIGF0dHJpYnV0ZSBpcyBzZXQuIFRoaXMgYWxsb3dzIHRoZSBjb25zdHJ1Y3Rpb24gb2YgQ1NTIHJ1bGVzIHRoYXRcbiAgICogd2lsbCBvbmx5IGFwcGx5IHRvIGdlbmVyaWMgY29tcG9uZW50cyBsaWtlOlxuICAgKlxuICAgKiAgICAgOmhvc3QoW2dlbmVyaWM9XCJcIl0pIHtcbiAgICogICAgICAgLi4uIEdlbmVyaWMgYXBwZWFyYW5jZSBkZWZpbmVkIGhlcmUgLi4uXG4gICAqICAgICB9XG4gICAqXG4gICAqIFRoaXMgbWFrZXMgaXQgZWFzeSB0byByZW1vdmUgYWxsIGRlZmF1bHQgc3R5bGluZyDigJQgc2V0IHRoZSBgZ2VuZXJpY2BcbiAgICogYXR0cmlidXRlIHRvIGZhbHNlLCBhbmQgYWxsIGRlZmF1bHQgc3R5bGluZyB3aWxsIGJlIHJlbW92ZWQuXG4gICAqL1xuICBjbGFzcyBHZW5lcmljIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG5cbiAgICAgIC8vIFNldCBkZWZhdWx0cy5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5nZW5lcmljID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLmdlbmVyaWMgPSB0aGlzLmRlZmF1bHRzLmdlbmVyaWM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IGRlZmF1bHRzKCkge1xuICAgICAgbGV0IGRlZmF1bHRzID0gc3VwZXIuZGVmYXVsdHMgfHwge307XG4gICAgICBkZWZhdWx0cy5nZW5lcmljID0gdHJ1ZTtcbiAgICAgIHJldHVybiBkZWZhdWx0cztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHRoZSBjb21wb25lbnQgd291bGQgbGlrZSB0byByZWNlaXZlIGdlbmVyaWMgc3R5bGluZy5cbiAgICAgKlxuICAgICAqIFRoaXMgcHJvcGVydHkgaXMgdHJ1ZSBieSBkZWZhdWx0IOKAlMKgc2V0IGl0IHRvIGZhbHNlIHRvIHR1cm4gb2ZmIGFsbFxuICAgICAqIGdlbmVyaWMgc3R5bGVzLiBUaGlzIG1ha2VzIGl0IGVhc2llciB0byBhcHBseSBjdXN0b20gc3R5bGluZzsgeW91IHdvbid0XG4gICAgICogaGF2ZSB0byBleHBsaWNpdGx5IG92ZXJyaWRlIHN0eWxpbmcgeW91IGRvbid0IHdhbnQuXG4gICAgICpcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqL1xuICAgIGdldCBnZW5lcmljKCkge1xuICAgICAgcmV0dXJuIHRoaXNbZ2VuZXJpY1N5bWJvbF07XG4gICAgfVxuICAgIHNldCBnZW5lcmljKHZhbHVlKSB7XG4gICAgICBpZiAoJ2dlbmVyaWMnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLmdlbmVyaWMgPSB2YWx1ZTsgfVxuICAgICAgLy8gV2Ugcm9sbCBvdXIgb3duIGF0dHJpYnV0ZSBzZXR0aW5nIHNvIHRoYXQgYW4gZXhwbGljaXRseSBmYWxzZSB2YWx1ZVxuICAgICAgLy8gc2hvd3MgdXAgYXMgZ2VuZXJpYz1cImZhbHNlXCIuXG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICB2YWx1ZSA9ICh2YWx1ZSAhPT0gJ2ZhbHNlJyk7XG4gICAgICB9XG4gICAgICB0aGlzW2dlbmVyaWNTeW1ib2xdID0gdmFsdWU7XG4gICAgICBpZiAodmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgIC8vIEV4cGxpY2l0bHkgdXNlIGZhbHNlIHN0cmluZy5cbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2dlbmVyaWMnLCAnZmFsc2UnKTtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAvLyBFeHBsaWNpdGx5IHJlbW92ZSBhdHRyaWJ1dGUuXG4gICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCdnZW5lcmljJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBVc2UgdGhlIGVtcHR5IHN0cmluZyB0byBnZXQgYXR0cmlidXRlIHRvIGFwcGVhciB3aXRoIG5vIHZhbHVlLlxuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnZ2VuZXJpYycsICcnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBHZW5lcmljO1xufTtcbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi9jcmVhdGVTeW1ib2wnO1xuaW1wb3J0IG1pY3JvdGFzayBmcm9tICcuL21pY3JvdGFzayc7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IGNhblNlbGVjdE5leHRTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2NhblNlbGVjdE5leHQnKTtcbmNvbnN0IGNhblNlbGVjdFByZXZpb3VzU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdjYW5TZWxlY3RQcmV2aW91cycpO1xuY29uc3Qgc2VsZWN0ZWRJdGVtU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdzZWxlY3RlZEl0ZW0nKTtcbmNvbnN0IHNlbGVjdGlvblJlcXVpcmVkU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdzZWxlY3Rpb25SZXF1aXJlZCcpO1xuY29uc3Qgc2VsZWN0aW9uV3JhcHNTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3NlbGVjdGlvbldyYXBzJyk7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBJdGVtc1NlbGVjdGlvbi4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIG1hbmFnZXMgc2luZ2xlLXNlbGVjdGlvbiBzZW1hbnRpY3MgZm9yIGl0ZW1zIGluIGEgbGlzdC5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIGEgY29tcG9uZW50IHRvIHByb3ZpZGUgYW4gYGl0ZW1zYCBhcnJheSBvZiBhbGwgZWxlbWVudHNcbiAgICogaW4gdGhlIGxpc3QuIEEgc3RhbmRhcmQgd2F5IHRvIGRvIHRoYXQgd2l0aCBpcyB0aGVcbiAgICogW0NvbnRlbnRBc0l0ZW1zXShDb250ZW50QXNJdGVtcy5tZCkgbWl4aW4sIHdoaWNoIHRha2VzIGEgY29tcG9uZW50J3NcbiAgICogY29udGVudCAodHlwaWNhbGx5IGl0cyBkaXN0cmlidXRlZCBjaGlsZHJlbikgYXMgdGhlIHNldCBvZiBsaXN0IGl0ZW1zOyBzZWVcbiAgICogdGhhdCBtaXhpbiBmb3IgZGV0YWlscy5cbiAgICpcbiAgICogVGhpcyBtaXhpbiB0cmFja3MgYSBzaW5nbGUgc2VsZWN0ZWQgaXRlbSBpbiB0aGUgbGlzdCwgYW5kIHByb3ZpZGVzIG1lYW5zIHRvXG4gICAqIGdldCBhbmQgc2V0IHRoYXQgc3RhdGUgYnkgaXRlbSBwb3NpdGlvbiAoYHNlbGVjdGVkSW5kZXhgKSBvciBpdGVtIGlkZW50aXR5XG4gICAqIChgc2VsZWN0ZWRJdGVtYCkuIFRoZSBzZWxlY3Rpb24gY2FuIGJlIG1vdmVkIGluIHRoZSBsaXN0IHZpYSB0aGUgbWV0aG9kc1xuICAgKiBgc2VsZWN0Rmlyc3RgLCBgc2VsZWN0TGFzdGAsIGBzZWxlY3ROZXh0YCwgYW5kIGBzZWxlY3RQcmV2aW91c2AuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZG9lcyBub3QgcHJvZHVjZSBhbnkgdXNlci12aXNpYmxlIGVmZmVjdHMgdG8gcmVwcmVzZW50XG4gICAqIHNlbGVjdGlvbi4gT3RoZXIgbWl4aW5zLCBzdWNoIGFzXG4gICAqIFtTZWxlY3Rpb25BcmlhQWN0aXZlXShTZWxlY3Rpb25BcmlhQWN0aXZlLm1kKSxcbiAgICogW1NlbGVjdGlvbkhpZ2hsaWdodF0oU2VsZWN0aW9uSGlnaGxpZ2h0Lm1kKSBhbmRcbiAgICogW1NlbGVjdGlvbkluVmlld10oU2VsZWN0aW9uSW5WaWV3Lm1kKSwgbW9kaWZ5IHRoZSBzZWxlY3RlZCBpdGVtIGluIGNvbW1vblxuICAgKiB3YXlzIHRvIGxldCB0aGUgdXNlciBrbm93IGEgZ2l2ZW4gaXRlbSBpcyBzZWxlY3RlZCBvciBub3Qgc2VsZWN0ZWQuXG4gICAqL1xuICBjbGFzcyBJdGVtc1NlbGVjdGlvbiBleHRlbmRzIGJhc2Uge1xuXG4gICAgLyoqXG4gICAgICogQXBwbHkgdGhlIGluZGljYXRlIHNlbGVjdGlvbiBzdGF0ZSB0byB0aGUgaXRlbS5cbiAgICAgKlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy4gVXNlci12aXNpYmxlXG4gICAgICogZWZmZWN0cyB3aWxsIHR5cGljYWxseSBiZSBoYW5kbGVkIGJ5IG90aGVyIG1peGlucy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGl0ZW0gLSB0aGUgaXRlbSBiZWluZyBzZWxlY3RlZC9kZXNlbGVjdGVkXG4gICAgICogQHBhcmFtIHtib29sZWFufSBzZWxlY3RlZCAtIHRydWUgaWYgdGhlIGl0ZW0gaXMgc2VsZWN0ZWQsIGZhbHNlIGlmIG5vdFxuICAgICAqL1xuICAgIGFwcGx5U2VsZWN0aW9uKGl0ZW0sIHNlbGVjdGVkKSB7XG4gICAgICBpZiAoc3VwZXIuYXBwbHlTZWxlY3Rpb24pIHsgc3VwZXIuYXBwbHlTZWxlY3Rpb24oaXRlbSwgc2VsZWN0ZWQpOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiB0aGUgc2VsZWN0aW9uIGNhbiBiZSBtb3ZlZCB0byB0aGUgbmV4dCBpdGVtLCBmYWxzZSBpZiBub3QgKHRoZVxuICAgICAqIHNlbGVjdGVkIGl0ZW0gaXMgdGhlIGxhc3QgaXRlbSBpbiB0aGUgbGlzdCkuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBnZXQgY2FuU2VsZWN0TmV4dCgpIHtcbiAgICAgIHJldHVybiB0aGlzW2NhblNlbGVjdE5leHRTeW1ib2xdO1xuICAgIH1cbiAgICBzZXQgY2FuU2VsZWN0TmV4dChjYW5TZWxlY3ROZXh0KSB7XG4gICAgICBpZiAoJ2NhblNlbGVjdE5leHQnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLmNhblNlbGVjdE5leHQgPSBjYW5TZWxlY3ROZXh0OyB9XG4gICAgICB0aGlzW2NhblNlbGVjdE5leHRTeW1ib2xdID0gY2FuU2VsZWN0TmV4dDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHRoZSBzZWxlY3Rpb24gY2FuIGJlIG1vdmVkIHRvIHRoZSBwcmV2aW91cyBpdGVtLCBmYWxzZSBpZiBub3RcbiAgICAgKiAodGhlIHNlbGVjdGVkIGl0ZW0gaXMgdGhlIGZpcnN0IG9uZSBpbiB0aGUgbGlzdCkuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBnZXQgY2FuU2VsZWN0UHJldmlvdXMoKSB7XG4gICAgICByZXR1cm4gdGhpc1tjYW5TZWxlY3RQcmV2aW91c1N5bWJvbF07XG4gICAgfVxuICAgIHNldCBjYW5TZWxlY3RQcmV2aW91cyhjYW5TZWxlY3RQcmV2aW91cykge1xuICAgICAgaWYgKCdjYW5TZWxlY3RQcmV2aW91cycgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuY2FuU2VsZWN0UHJldmlvdXMgPSBjYW5TZWxlY3RQcmV2aW91czsgfVxuICAgICAgdGhpc1tjYW5TZWxlY3RQcmV2aW91c1N5bWJvbF0gPSBjYW5TZWxlY3RQcmV2aW91cztcbiAgICB9XG5cbiAgICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG5cbiAgICAgIC8vIFNldCBkZWZhdWx0cy5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5zZWxlY3Rpb25SZXF1aXJlZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25SZXF1aXJlZCA9IHRoaXMuZGVmYXVsdHMuc2VsZWN0aW9uUmVxdWlyZWQ7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHRoaXMuc2VsZWN0aW9uV3JhcHMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uV3JhcHMgPSB0aGlzLmRlZmF1bHRzLnNlbGVjdGlvbldyYXBzO1xuICAgICAgfVxuICAgIH1cblxuICAgIGdldCBkZWZhdWx0cygpIHtcbiAgICAgIGxldCBkZWZhdWx0cyA9IHN1cGVyLmRlZmF1bHRzIHx8IHt9O1xuICAgICAgZGVmYXVsdHMuc2VsZWN0aW9uUmVxdWlyZWQgPSBmYWxzZTtcbiAgICAgIGRlZmF1bHRzLnNlbGVjdGlvbldyYXBzID0gZmFsc2U7XG4gICAgICByZXR1cm4gZGVmYXVsdHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIGEgbmV3IGl0ZW0gYmVpbmcgYWRkZWQgdG8gdGhlIGxpc3QuXG4gICAgICpcbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBzaW1wbHkgc2V0cyB0aGUgaXRlbSdzXG4gICAgICogc2VsZWN0aW9uIHN0YXRlIHRvIGZhbHNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaXRlbSAtIHRoZSBpdGVtIGJlaW5nIGFkZGVkXG4gICAgICovXG4gICAgaXRlbUFkZGVkKGl0ZW0pIHtcbiAgICAgIGlmIChzdXBlci5pdGVtQWRkZWQpIHsgc3VwZXIuaXRlbUFkZGVkKGl0ZW0pOyB9XG4gICAgICB0aGlzLmFwcGx5U2VsZWN0aW9uKGl0ZW0sIGl0ZW0gPT09IHRoaXMuc2VsZWN0ZWRJdGVtKTtcbiAgICB9XG5cbiAgICBpdGVtc0NoYW5nZWQoKSB7XG4gICAgICBpZiAoc3VwZXIuaXRlbXNDaGFuZ2VkKSB7IHN1cGVyLml0ZW1zQ2hhbmdlZCgpOyB9XG5cbiAgICAgIGlmICh0aGlzLnNlbGVjdGlvblJlcXVpcmVkKSB7XG4gICAgICAgIC8vIEVuc3VyZSBzZWxlY3Rpb24sIGJ1dCBkbyB0aGlzIGluIHRoZSBuZXh0IHRpY2sgdG8gZ2l2ZSBvdGhlciBtaXhpbnMgYVxuICAgICAgICAvLyBjaGFuY2UgdG8gZG8gdGhlaXIgb3duIGl0ZW1zQ2hhbmdlZCB3b3JrLlxuICAgICAgICBtaWNyb3Rhc2soKCkgPT4ge1xuICAgICAgICAgIGVuc3VyZVNlbGVjdGlvbih0aGlzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjaGFuZ2UgaW4gaXRlbXMgbWF5IGhhdmUgYWZmZWN0ZWQgd2hpY2ggbmF2aWdhdGlvbnMgYXJlIHBvc3NpYmxlLlxuICAgICAgdXBkYXRlUG9zc2libGVOYXZpZ2F0aW9ucyh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW5kZXggb2YgdGhlIGl0ZW0gd2hpY2ggaXMgY3VycmVudGx5IHNlbGVjdGVkLlxuICAgICAqXG4gICAgICogSWYgYHNlbGVjdGlvbldyYXBzYCBpcyBmYWxzZSwgdGhlIGluZGV4IGlzIC0xIGlmIHRoZXJlIGlzIG5vIHNlbGVjdGlvbi5cbiAgICAgKiBJbiB0aGF0IGNhc2UsIHNldHRpbmcgdGhlIGluZGV4IHRvIC0xIHdpbGwgZGVzZWxlY3QgYW55XG4gICAgICogY3VycmVudGx5LXNlbGVjdGVkIGl0ZW0uXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldCBzZWxlY3RlZEluZGV4KCkge1xuICAgICAgbGV0IHNlbGVjdGVkSXRlbSA9IHRoaXMuc2VsZWN0ZWRJdGVtO1xuXG4gICAgICAvLyBUT0RPOiBJZiBzZWxlY3Rpb24gd2Fzbid0IGZvdW5kLCBtb3N0IGxpa2VseSBjYXVzZSBpcyB0aGF0IHRoZSBET00gd2FzXG4gICAgICAvLyBtYW5pcHVsYXRlZCBmcm9tIHVuZGVybmVhdGggdXMuIE9uY2Ugd2UgdHJhY2sgY29udGVudCBjaGFuZ2VzLCB0dXJuXG4gICAgICAvLyB0aGlzIGludG8gYSB3YXJuaW5nLlxuICAgICAgLy8gVE9ETzogTWVtb2l6ZVxuICAgICAgcmV0dXJuIHNlbGVjdGVkSXRlbSA/XG4gICAgICAgIHRoaXMuaXRlbXMuaW5kZXhPZihzZWxlY3RlZEl0ZW0pIDpcbiAgICAgICAgLTE7XG4gICAgfVxuICAgIHNldCBzZWxlY3RlZEluZGV4KGluZGV4KSB7XG4gICAgICBpZiAoJ3NlbGVjdGVkSW5kZXgnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkSW5kZXggPSBpbmRleDsgfVxuICAgICAgbGV0IGl0ZW1zID0gdGhpcy5pdGVtcztcbiAgICAgIGxldCBpdGVtO1xuICAgICAgaWYgKGluZGV4IDwgMCB8fCBpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaXRlbSA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpdGVtID0gaXRlbXNbaW5kZXhdO1xuICAgICAgfVxuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xuXG4gICAgICBsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3NlbGVjdGVkLWluZGV4LWNoYW5nZWQnLCB7XG4gICAgICAgIGRldGFpbDoge1xuICAgICAgICAgIHNlbGVjdGVkSW5kZXg6IGluZGV4LFxuICAgICAgICAgIHZhbHVlOiBpbmRleCAvLyBmb3IgUG9seW1lciBiaW5kaW5nXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudGx5IHNlbGVjdGVkIGl0ZW0sIG9yIG51bGwgaWYgdGhlcmUgaXMgbm8gc2VsZWN0aW9uLlxuICAgICAqXG4gICAgICogU2V0dGluZyB0aGlzIHByb3BlcnR5IHRvIG51bGwgZGVzZWxlY3RzIGFueSBjdXJyZW50bHktc2VsZWN0ZWQgaXRlbS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGVkSXRlbSgpIHtcbiAgICAgIHJldHVybiB0aGlzW3NlbGVjdGVkSXRlbVN5bWJvbF0gfHwgbnVsbDtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGVkSXRlbShpdGVtKSB7XG4gICAgICBpZiAoJ3NlbGVjdGVkSXRlbScgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJdGVtID0gaXRlbTsgfVxuICAgICAgbGV0IHByZXZpb3VzSXRlbSA9IHRoaXNbc2VsZWN0ZWRJdGVtU3ltYm9sXTtcbiAgICAgIGlmIChwcmV2aW91c0l0ZW0pIHtcbiAgICAgICAgaWYgKGl0ZW0gPT09IHByZXZpb3VzSXRlbSkge1xuICAgICAgICAgIC8vIFRoZSBpbmRpY2F0ZWQgaXRlbSBpcyBhbHJlYWR5IHRoZSBzZWxlY3RlZCBpdGVtLlxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBSZW1vdmUgcHJldmlvdXMgc2VsZWN0aW9uLlxuICAgICAgICB0aGlzLmFwcGx5U2VsZWN0aW9uKHByZXZpb3VzSXRlbSwgZmFsc2UpO1xuICAgICAgfVxuXG4gICAgICAvLyBUT0RPOiBDb25maXJtIGl0ZW0gaXMgYWN0dWFsbHkgaW4gdGhlIGxpc3QgYmVmb3JlIHNlbGVjdGluZy5cbiAgICAgIHRoaXNbc2VsZWN0ZWRJdGVtU3ltYm9sXSA9IGl0ZW07XG4gICAgICBpZiAoaXRlbSkge1xuICAgICAgICB0aGlzLmFwcGx5U2VsZWN0aW9uKGl0ZW0sIHRydWUpO1xuICAgICAgfVxuXG4gICAgICAvLyBUT0RPOiBSYXRpb25hbGl6ZSB3aXRoIHNlbGVjdGVkSW5kZXggc28gd2UncmUgbm90IHJlY2FsY3VsYXRpbmcgaXRlbVxuICAgICAgLy8gb3IgaW5kZXggaW4gZWFjaCBzZXR0ZXIuXG4gICAgICB1cGRhdGVQb3NzaWJsZU5hdmlnYXRpb25zKHRoaXMpO1xuXG4gICAgICBsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3NlbGVjdGVkLWl0ZW0tY2hhbmdlZCcsIHtcbiAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgc2VsZWN0ZWRJdGVtOiBpdGVtLFxuICAgICAgICAgIHByZXZpb3VzSXRlbTogcHJldmlvdXNJdGVtLFxuICAgICAgICAgIHZhbHVlOiBpdGVtIC8vIGZvciBQb2x5bWVyIGJpbmRpbmdcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCB0aGUgZmlyc3QgaXRlbSBpbiB0aGUgbGlzdC5cbiAgICAgKi9cbiAgICBzZWxlY3RGaXJzdCgpIHtcbiAgICAgIGlmIChzdXBlci5zZWxlY3RGaXJzdCkgeyBzdXBlci5zZWxlY3RGaXJzdCgpOyB9XG4gICAgICByZXR1cm4gc2VsZWN0SW5kZXgodGhpcywgMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiB0aGUgbGlzdCBzaG91bGQgYWx3YXlzIGhhdmUgYSBzZWxlY3Rpb24gKGlmIGl0IGhhcyBpdGVtcykuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuICAgIGdldCBzZWxlY3Rpb25SZXF1aXJlZCgpIHtcbiAgICAgIHJldHVybiB0aGlzW3NlbGVjdGlvblJlcXVpcmVkU3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGlvblJlcXVpcmVkKHNlbGVjdGlvblJlcXVpcmVkKSB7XG4gICAgICBpZiAoJ3NlbGVjdGlvblJlcXVpcmVkJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3Rpb25SZXF1aXJlZCA9IHNlbGVjdGlvblJlcXVpcmVkOyB9XG4gICAgICB0aGlzW3NlbGVjdGlvblJlcXVpcmVkU3ltYm9sXSA9IHNlbGVjdGlvblJlcXVpcmVkO1xuICAgICAgaWYgKHNlbGVjdGlvblJlcXVpcmVkKSB7XG4gICAgICAgIGVuc3VyZVNlbGVjdGlvbih0aGlzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgdGhlIGxhc3QgaXRlbSBpbiB0aGUgbGlzdC5cbiAgICAgKi9cbiAgICBzZWxlY3RMYXN0KCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdExhc3QpIHsgc3VwZXIuc2VsZWN0TGFzdCgpOyB9XG4gICAgICByZXR1cm4gc2VsZWN0SW5kZXgodGhpcywgdGhpcy5pdGVtcy5sZW5ndGggLSAxKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgdGhlIG5leHQgaXRlbSBpbiB0aGUgbGlzdC5cbiAgICAgKi9cbiAgICBzZWxlY3ROZXh0KCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdE5leHQpIHsgc3VwZXIuc2VsZWN0TmV4dCgpOyB9XG4gICAgICByZXR1cm4gc2VsZWN0SW5kZXgodGhpcywgdGhpcy5zZWxlY3RlZEluZGV4ICsgMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IHRoZSBwcmV2aW91cyBpdGVtIGluIHRoZSBsaXN0LlxuICAgICAqL1xuICAgIHNlbGVjdFByZXZpb3VzKCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdFByZXZpb3VzKSB7IHN1cGVyLnNlbGVjdFByZXZpb3VzKCk7IH1cbiAgICAgIHJldHVybiBzZWxlY3RJbmRleCh0aGlzLCB0aGlzLnNlbGVjdGVkSW5kZXggLSAxKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHNlbGVjdGlvbiBuYXZpZ2F0aW9ucyB3cmFwIGZyb20gbGFzdCB0byBmaXJzdCwgYW5kIHZpY2UgdmVyc2EuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuICAgIGdldCBzZWxlY3Rpb25XcmFwcygpIHtcbiAgICAgIHJldHVybiB0aGlzW3NlbGVjdGlvbldyYXBzU3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGlvbldyYXBzKHZhbHVlKSB7XG4gICAgICBpZiAoJ3NlbGVjdGlvbldyYXBzJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3Rpb25XcmFwcyA9IHZhbHVlOyB9XG4gICAgICB0aGlzW3NlbGVjdGlvbldyYXBzU3ltYm9sXSA9IFN0cmluZyh2YWx1ZSkgPT09ICd0cnVlJztcbiAgICAgIHVwZGF0ZVBvc3NpYmxlTmF2aWdhdGlvbnModGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmlyZXMgd2hlbiB0aGUgc2VsZWN0ZWRJdGVtIHByb3BlcnR5IGNoYW5nZXMuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgSXRlbXNTZWxlY3Rpb25cbiAgICAgKiBAZXZlbnQgc2VsZWN0ZWQtaXRlbS1jaGFuZ2VkXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZGV0YWlsLnNlbGVjdGVkSXRlbSBUaGUgbmV3IHNlbGVjdGVkIGl0ZW0uXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZGV0YWlsLnByZXZpb3VzSXRlbSBUaGUgcHJldmlvdXNseSBzZWxlY3RlZCBpdGVtLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogRmlyZXMgd2hlbiB0aGUgc2VsZWN0ZWRJbmRleCBwcm9wZXJ0eSBjaGFuZ2VzLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIEl0ZW1zU2VsZWN0aW9uXG4gICAgICogQGV2ZW50IHNlbGVjdGVkLWluZGV4LWNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGV0YWlsLnNlbGVjdGVkSW5kZXggVGhlIG5ldyBzZWxlY3RlZCBpbmRleC5cbiAgICAgKi9cblxuICB9XG5cbiAgcmV0dXJuIEl0ZW1zU2VsZWN0aW9uO1xufTtcblxuXG4vLyBJZiBubyBpdGVtIGlzIHNlbGVjdGVkLCBzZWxlY3QgYSBkZWZhdWx0IGl0ZW0uXG5mdW5jdGlvbiBlbnN1cmVTZWxlY3Rpb24oZWxlbWVudCkge1xuICBsZXQgaW5kZXggPSBlbGVtZW50LnNlbGVjdGVkSW5kZXg7XG4gIGlmIChpbmRleCA8IDApIHtcbiAgICAvLyBTZWxlY3RlZCBpdGVtIGlzIG5vIGxvbmdlciBpbiB0aGUgY3VycmVudCBzZXQgb2YgaXRlbXMuXG4gICAgaWYgKGVsZW1lbnQuaXRlbXMgJiYgZWxlbWVudC5pdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAvLyBTZWxlY3QgdGhlIGZpcnN0IGl0ZW0uXG4gICAgICAvLyBUT0RPOiBJZiB0aGUgcHJldmlvdXNseS1zZWxlY3RlZCBpdGVtIGhhcyBiZWVuIGRlbGV0ZWQsIHRyeSB0byBzZWxlY3RcbiAgICAgIC8vIGFuIGl0ZW0gYWRqYWNlbnQgdG8gdGhlIHBvc2l0aW9uIGl0IGhlbGQuXG4gICAgICBlbGVtZW50LnNlbGVjdGVkSW5kZXggPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBObyBpdGVtcyBmb3IgdXMgdG8gc2VsZWN0LCBidXQgd2UgY2FuIGF0IGxlYXN0IHNpZ25hbCB0aGF0IHRoZXJlJ3Mgbm9cbiAgICAgIC8vIGxvbmdlciBhIHNlbGVjdGlvbi5cbiAgICAgIGVsZW1lbnQuc2VsZWN0ZWRJdGVtID0gbnVsbDtcbiAgICB9XG4gIH1cbn1cblxuLy8gRW5zdXJlIHRoZSBnaXZlbiBpbmRleCBpcyB3aXRoaW4gYm91bmRzLCBhbmQgc2VsZWN0IGl0IGlmIGl0J3Mgbm90IGFscmVhZHlcbi8vIHNlbGVjdGVkLlxuZnVuY3Rpb24gc2VsZWN0SW5kZXgoZWxlbWVudCwgaW5kZXgpIHtcbiAgbGV0IGNvdW50ID0gZWxlbWVudC5pdGVtcy5sZW5ndGg7XG4gIGxldCBib3VuZGVkSW5kZXg7XG4gIGlmIChlbGVtZW50LnNlbGVjdGlvbldyYXBzKSB7XG4gICAgLy8gSmF2YVNjcmlwdCBtb2QgZG9lc24ndCBoYW5kbGUgbmVnYXRpdmUgbnVtYmVycyB0aGUgd2F5IHdlIHdhbnQgdG8gd3JhcC5cbiAgICAvLyBTZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTg2MTgyNTAvNzY0NzJcbiAgICBib3VuZGVkSW5kZXggPSAoKGluZGV4ICUgY291bnQpICsgY291bnQpICUgY291bnQ7XG4gIH0gZWxzZSB7XG4gICAgLy8gS2VlcCBpbmRleCB3aXRoaW4gYm91bmRzIG9mIGFycmF5LlxuICAgIGJvdW5kZWRJbmRleCA9IE1hdGgubWF4KE1hdGgubWluKGluZGV4LCBjb3VudCAtIDEpLCAwKTtcbiAgfVxuICBsZXQgcHJldmlvdXNJbmRleCA9IGVsZW1lbnQuc2VsZWN0ZWRJbmRleDtcbiAgaWYgKHByZXZpb3VzSW5kZXggIT09IGJvdW5kZWRJbmRleCkge1xuICAgIGVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9IGJvdW5kZWRJbmRleDtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuLy8gRm9sbG93aW5nIGEgY2hhbmdlIGluIHNlbGVjdGlvbiwgcmVwb3J0IHdoZXRoZXIgaXQncyBub3cgcG9zc2libGUgdG9cbi8vIGdvIG5leHQvcHJldmlvdXMgZnJvbSB0aGUgZ2l2ZW4gaW5kZXguXG5mdW5jdGlvbiB1cGRhdGVQb3NzaWJsZU5hdmlnYXRpb25zKGVsZW1lbnQpIHtcbiAgbGV0IGNhblNlbGVjdE5leHQ7XG4gIGxldCBjYW5TZWxlY3RQcmV2aW91cztcbiAgbGV0IGl0ZW1zID0gZWxlbWVudC5pdGVtcztcbiAgaWYgKGl0ZW1zID09IG51bGwgfHwgaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgLy8gTm8gaXRlbXMgdG8gc2VsZWN0LlxuICAgIGNhblNlbGVjdE5leHQgPSBmYWxzZTtcbiAgICBjYW5TZWxlY3RQcmV2aW91cyA9IGZhbHNlO1xuICB9IGlmIChlbGVtZW50LnNlbGVjdGlvbldyYXBzKSB7XG4gICAgLy8gU2luY2UgdGhlcmUgYXJlIGl0ZW1zLCBjYW4gYWx3YXlzIGdvIG5leHQvcHJldmlvdXMuXG4gICAgY2FuU2VsZWN0TmV4dCA9IHRydWU7XG4gICAgY2FuU2VsZWN0UHJldmlvdXMgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGxldCBpbmRleCA9IGVsZW1lbnQuc2VsZWN0ZWRJbmRleDtcbiAgICBpZiAoaW5kZXggPCAwICYmIGl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIFNwZWNpYWwgY2FzZS4gSWYgdGhlcmUgYXJlIGl0ZW1zIGJ1dCBubyBzZWxlY3Rpb24sIGRlY2xhcmUgdGhhdCBpdCdzXG4gICAgICAvLyBhbHdheXMgcG9zc2libGUgdG8gZ28gbmV4dC9wcmV2aW91cyB0byBjcmVhdGUgYSBzZWxlY3Rpb24uXG4gICAgICBjYW5TZWxlY3ROZXh0ID0gdHJ1ZTtcbiAgICAgIGNhblNlbGVjdFByZXZpb3VzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTm9ybWFsIGNhc2U6IHdlIGhhdmUgYW4gaW5kZXggaW4gYSBsaXN0IHRoYXQgaGFzIGl0ZW1zLlxuICAgICAgY2FuU2VsZWN0UHJldmlvdXMgPSAoaW5kZXggPiAwKTtcbiAgICAgIGNhblNlbGVjdE5leHQgPSAoaW5kZXggPCBpdGVtcy5sZW5ndGggLSAxKTtcbiAgICB9XG4gIH1cbiAgZWxlbWVudC5jYW5TZWxlY3ROZXh0ID0gY2FuU2VsZWN0TmV4dDtcbiAgZWxlbWVudC5jYW5TZWxlY3RQcmV2aW91cyA9IGNhblNlbGVjdFByZXZpb3VzO1xufVxuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuL2NyZWF0ZVN5bWJvbCc7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IGtleWRvd25MaXN0ZW5lclN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgna2V5ZG93bkxpc3RlbmVyJyk7XG5cblxuLy8gVE9ETzogUHJvdmlkZSBiYXNlbGluZSBiZWhhdmlvciBmb3IgdGhpcyBtaXhpbiB3aGVuIHVzZWQgb3V0c2lkZSBvZiBhXG4vLyBjb2xsZWN0aXZlLlxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIEtleWJvYXJkLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggbWFuYWdlcyB0aGUga2V5ZG93biBoYW5kbGluZyBmb3IgYSBjb21wb25lbnQuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gaGFuZGxlcyBzZXZlcmFsIGtleWJvYXJkLXJlbGF0ZWQgZmVhdHVyZXMuXG4gICAqXG4gICAqIEZpcnN0LCBpdCB3aXJlcyB1cCBhIHNpbmdsZSBrZXlkb3duIGV2ZW50IGhhbmRsZXIgdGhhdCBjYW4gYmUgc2hhcmVkIGJ5XG4gICAqIG11bHRpcGxlIG1peGlucyBvbiBhIGNvbXBvbmVudC4gVGhlIGV2ZW50IGhhbmRsZXIgd2lsbCBpbnZva2UgYSBga2V5ZG93bmBcbiAgICogbWV0aG9kIHdpdGggdGhlIGV2ZW50IG9iamVjdCwgYW5kIGFueSBtaXhpbiBhbG9uZyB0aGUgcHJvdG90eXBlIGNoYWluIHRoYXRcbiAgICogd2FudHMgdG8gaGFuZGxlIHRoYXQgbWV0aG9kIGNhbiBkbyBzby5cbiAgICpcbiAgICogSWYgYSBtaXhpbiB3YW50cyB0byBpbmRpY2F0ZSB0aGF0IGtleWJvYXJkIGV2ZW50IGhhcyBiZWVuIGhhbmRsZWQsIGFuZCB0aGF0XG4gICAqIG90aGVyIG1peGlucyBzaG91bGQgKm5vdCogaGFuZGxlIGl0LCB0aGUgbWl4aW4ncyBga2V5ZG93bmAgaGFuZGxlciBzaG91bGRcbiAgICogcmV0dXJuIGEgdmFsdWUgb2YgdHJ1ZS4gVGhlIGNvbnZlbnRpb24gdGhhdCBzZWVtcyB0byB3b3JrIHdlbGwgaXMgdGhhdCBhXG4gICAqIG1peGluIHNob3VsZCBzZWUgaWYgaXQgd2FudHMgdG8gaGFuZGxlIHRoZSBldmVudCBhbmQsIGlmIG5vdCwgdGhlbiBhc2sgdGhlXG4gICAqIHN1cGVyY2xhc3MgdG8gc2VlIGlmIGl0IHdhbnRzIHRvIGhhbmRsZSB0aGUgZXZlbnQuIFRoaXMgaGFzIHRoZSBlZmZlY3Qgb2ZcbiAgICogZ2l2aW5nIHRoZSBtaXhpbiB0aGF0IHdhcyBhcHBsaWVkIGxhc3QgdGhlIGZpcnN0IGNoYW5jZSBhdCBoYW5kbGluZyBhXG4gICAqIGtleWJvYXJkIGV2ZW50LlxuICAgKlxuICAgKiBFeGFtcGxlOlxuICAgKlxuICAgKiAgICAga2V5ZG93bihldmVudCkge1xuICAgKiAgICAgICBsZXQgaGFuZGxlZDtcbiAgICogICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAqICAgICAgICAgLy8gSGFuZGxlIHRoZSBrZXlzIHlvdSB3YW50LCBzZXR0aW5nIGhhbmRsZWQgPSB0cnVlIGlmIGFwcHJvcHJpYXRlLlxuICAgKiAgICAgICB9XG4gICAqICAgICAgIC8vIFByZWZlciBtaXhpbiByZXN1bHQgaWYgaXQncyBkZWZpbmVkLCBvdGhlcndpc2UgdXNlIGJhc2UgcmVzdWx0LlxuICAgKiAgICAgICByZXR1cm4gaGFuZGxlZCB8fCAoc3VwZXIua2V5ZG93biAmJiBzdXBlci5rZXlkb3duKGV2ZW50KSk7XG4gICAqICAgICB9XG4gICAqXG4gICAqIEEgc2Vjb25kIGZlYXR1cmUgcHJvdmlkZWQgYnkgdGhpcyBtaXhpbiBpcyB0aGF0IGl0IGltcGxpY2l0bHkgbWFrZXMgdGhlXG4gICAqIGNvbXBvbmVudCBhIHRhYiBzdG9wIGlmIGl0IGlzbid0IGFscmVhZHksIGJ5IHNldHRpbmcgYHRhYkluZGV4YCB0byAwLiBUaGlzXG4gICAqIGhhcyB0aGUgZWZmZWN0IG9mIGFkZGluZyB0aGUgY29tcG9uZW50IHRvIHRoZSB0YWIgb3JkZXIgaW4gZG9jdW1lbnQgb3JkZXIuXG4gICAqXG4gICAqIEZpbmFsbHksIHRoaXMgbWl4aW4gaXMgZGVzaWduZWQgdG8gd29yayB3aXRoIHRoZSBvcHRpb25hbFxuICAgKiBbQ29sbGVjdGl2ZV0oQ29sbGVjdGl2ZS5tZCkgY2xhc3MgdmlhIGEgbWl4aW4gbGlrZVxuICAgKiBbVGFyZ2V0SW5Db2xsZWN0aXZlXShUYXJnZXRJbkNvbGxlY3RpdmUubWQpLiBUaGlzIGFsbG93cyBhIHNldCBvZiByZWxhdGVkXG4gICAqIGNvbXBvbmVudCBpbnN0YW5jZXMgdG8gY29vcGVyYXRpdmVseSBoYW5kbGUgdGhlIGtleWJvYXJkLiBTZWUgdGhlXG4gICAqIENvbGxlY3RpdmUgY2xhc3MgZm9yIGRldGFpbHMuXG4gICAqL1xuICBjbGFzcyBLZXlib2FyZCBleHRlbmRzIGJhc2Uge1xuXG4gICAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuXG4gICAgICAvLyBBc3N1bWUgdGhpcyBjb21wb25lbnQgaXMgZ29pbmcgdG8gaGFuZGxlIHRoZSBrZXlib2FyZCBvbiBpdHMgb3duLlxuICAgICAgc3RhcnRMaXN0ZW5pbmdUb0tleWRvd24odGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIHRoZSBpbmRpY2F0ZWQga2V5Ym9hcmQgZXZlbnQuXG4gICAgICpcbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuIFRoaXMgd2lsbFxuICAgICAqIHR5cGljYWxseSBiZSBoYW5kbGVkIGJ5IG90aGVyIG1peGlucy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7S2V5Ym9hcmRFdmVudH0gZXZlbnQgLSB0aGUga2V5Ym9hcmQgZXZlbnRcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZSBldmVudCB3YXMgaGFuZGxlZFxuICAgICAqL1xuICAgIGtleWRvd24oZXZlbnQpIHtcbiAgICAgIGlmIChzdXBlci5rZXlkb3duKSB7IHJldHVybiBzdXBlci5rZXlkb3duKGV2ZW50KTsgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICogSWYgd2UncmUgbm93IHRoZSBvdXRlcm1vc3QgZWxlbWVudCBvZiB0aGUgY29sbGVjdGl2ZSwgc2V0IHVwIHRvIHJlY2VpdmVcbiAgICAgKiBrZXlib2FyZCBldmVudHMuIElmIHdlJ3JlIG5vIGxvbmdlciB0aGUgb3V0ZXJtb3N0IGVsZW1lbnQsIHN0b3BcbiAgICAgKiBsaXN0ZW5pbmcuXG4gICAgICovXG4gICAgY29sbGVjdGl2ZUNoYW5nZWQoKSB7XG4gICAgICBpZiAoc3VwZXIuY29sbGVjdGl2ZUNoYW5nZWQpIHsgc3VwZXIuY29sbGVjdGl2ZUNoYW5nZWQoKTsgfVxuXG4gICAgICBpZiAodGhpcy5jb2xsZWN0aXZlLm91dGVybW9zdEVsZW1lbnQgIT09IHRoaXMpIHtcbiAgICAgICAgLy8gV2UncmUgbm8gbG9uZ2VyIHRoZSBvdXRlcm1vc3QgZWxlbWVudDsgc3RvcCBsaXN0ZW5pbmcuXG4gICAgICAgIGlmIChpc0xpc3RlbmluZ1RvS2V5ZG93bih0aGlzKSkge1xuICAgICAgICAgIHN0b3BMaXN0ZW5pbmdUb0tleWRvd24odGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgLy8gU2luY2Ugd2UncmUgZ29pbmcgdG8gaGFuZGxlIHRoZSBrZXlib2FyZCwgc2VlIGlmIHdlIGNhbiBhZG9wdCBhbiBBUklBXG4gICAgICAgIC8vIGxhYmVsIGZyb20gYW4gaW5uZXIgZWxlbWVudCBvZiB0aGUgY29sbGVjdGl2ZS5cbiAgICAgICAgbGV0IGxhYmVsID0gZ2V0Q29sbGVjdGl2ZUFyaWFMYWJlbCh0aGlzLmNvbGxlY3RpdmUpO1xuICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIGxhYmVsKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTGlzdGVuaW5nVG9LZXlkb3duKHRoaXMpKSB7XG4gICAgICAgIHN0YXJ0TGlzdGVuaW5nVG9LZXlkb3duKHRoaXMpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIEtleWJvYXJkO1xufTtcblxuXG4vLyBGaXJlIHRoZSBrZXlkb3duKCkgbWV0aG9kIG9uIHRoZSBlbGVtZW50IG9yIChpZiBpdCBiZWxvbmdzIHRvIGEgY29sbGVjdGl2ZSlcbi8vIGFsbCBlbGVtZW50cyBpbiB0aGUgY29sbGVjdGl2ZS5cbi8vXG4vLyBOb3RlOiB0aGUgdmFsdWUgb2YgJ3RoaXMnIGlzIGJvdW5kIHRvIHRoZSBlbGVtZW50IHdoaWNoIHJlY2VpdmVkIHRoZSBldmVudC5cbmZ1bmN0aW9uIGtleWRvd24oZXZlbnQpIHtcblxuICBsZXQgaGFuZGxlZCA9IGZhbHNlO1xuXG4gIGlmICh0aGlzLmNvbGxlY3RpdmUpIHtcbiAgICAvLyBHaXZlIGNvbGxlY3RpdmUgZWxlbWVudHMgYSBzaG90IGF0IHRoZSBldmVudCwgd29ya2luZyBmcm9tIGlubmVybW9zdCB0b1xuICAgIC8vIG91dGVybW9zdCAodGhpcyBlbGVtZW50KS5cbiAgICBsZXQgZWxlbWVudHMgPSB0aGlzLmNvbGxlY3RpdmUuZWxlbWVudHM7XG4gICAgZm9yIChsZXQgaSA9IGVsZW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xuICAgICAgaGFuZGxlZCA9IGVsZW1lbnQua2V5ZG93biAmJiBlbGVtZW50LmtleWRvd24oZXZlbnQpO1xuICAgICAgaWYgKGhhbmRsZWQpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIENvbXBvbmVudCBpcyBoYW5kbGluZyB0aGUga2V5Ym9hcmQgb24gaXRzIG93bi5cbiAgICBoYW5kbGVkID0gdGhpcy5rZXlkb3duKGV2ZW50KTtcbiAgfVxuXG4gIGlmIChoYW5kbGVkKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxufVxuXG5cbi8vIFJldHVybiB0aGUgZmlyc3QgQVJJQSBsYWJlbCBkZWZpbmVkIGJ5IHRoZSBjb2xsZWN0aXZlLlxuZnVuY3Rpb24gZ2V0Q29sbGVjdGl2ZUFyaWFMYWJlbChjb2xsZWN0aXZlKSB7XG4gIGxldCBsYWJlbHMgPSBjb2xsZWN0aXZlLmVsZW1lbnRzLm1hcChlbGVtZW50ID0+IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJykpO1xuICAvLyBXb3VsZCBwcmVmZXIgdG8gdXNlIEFycmF5LnByb3RvdHlwZS5maW5kIGhlcmUsIGJ1dCBJRSAxMSBkb2Vzbid0IGhhdmUgaXQuXG4gIGxldCBub25OdWxsTGFiZWxzID0gbGFiZWxzLmZpbHRlcihsYWJlbCA9PiBsYWJlbCAhPSBudWxsKTtcbiAgcmV0dXJuIG5vbk51bGxMYWJlbHNbMF07XG59XG5cblxuZnVuY3Rpb24gaXNMaXN0ZW5pbmdUb0tleWRvd24oZWxlbWVudCkge1xuICByZXR1cm4gZWxlbWVudFtrZXlkb3duTGlzdGVuZXJTeW1ib2xdICE9IG51bGw7XG59XG5cblxuZnVuY3Rpb24gc3RhcnRMaXN0ZW5pbmdUb0tleWRvd24oZWxlbWVudCkge1xuICBlbGVtZW50W2tleWRvd25MaXN0ZW5lclN5bWJvbF0gPSBrZXlkb3duLmJpbmQoZWxlbWVudCk7XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGVsZW1lbnRba2V5ZG93bkxpc3RlbmVyU3ltYm9sXSk7XG4gIC8vIFNldCBhIGRlZmF1bHQgdGFiIGluZGV4IG9mIDAgKGRvY3VtZW50IG9yZGVyKSBpZiBubyB0YWIgaW5kZXggZXhpc3RzLlxuICAvLyBNUyBFZGdlIHJlcXVpcmVzIHdlIGV4cGxpY2l0bHkgY2hlY2sgZm9yIHByZXNlbmNlIG9mIHRhYmluZGV4IGF0dHJpYnV0ZS5cbiAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpID09IG51bGwgfHwgZWxlbWVudC50YWJJbmRleCA8IDApIHtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuICB9XG59XG5cblxuZnVuY3Rpb24gc3RvcExpc3RlbmluZ1RvS2V5ZG93bihlbGVtZW50KSB7XG4gIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGVsZW1lbnRba2V5ZG93bkxpc3RlbmVyU3ltYm9sXSk7XG4gIGVsZW1lbnRba2V5ZG93bkxpc3RlbmVyU3ltYm9sXSA9IG51bGw7XG4gIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xufVxuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuL2NyZWF0ZVN5bWJvbCc7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IG5hdmlnYXRpb25BeGlzU3ltYm9sID0gY3JlYXRlU3ltYm9sKCduYXZpZ2F0aW9uQXhpcycpO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggS2V5Ym9hcmREaXJlY3Rpb24uICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBtYXBzIGRpcmVjdGlvbiBrZXlzIChMZWZ0LCBSaWdodCwgZXRjLikgdG8gZGlyZWN0aW9uIHNlbWFudGljc1xuICAgKiAoZ28gbGVmdCwgZ28gcmlnaHQsIGV0Yy4pLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGV4cGVjdHMgdGhlIGNvbXBvbmVudCB0byBpbnZva2UgYSBga2V5ZG93bmAgbWV0aG9kIHdoZW4gYSBrZXkgaXNcbiAgICogcHJlc3NlZC4gWW91IGNhbiB1c2UgdGhlIFtLZXlib2FyZF0oS2V5Ym9hcmQubWQpIG1peGluIGZvciB0aGF0IHB1cnBvc2UsIG9yXG4gICAqIHdpcmUgdXAgeW91ciBvd24ga2V5Ym9hcmQgaGFuZGxpbmcgYW5kIGNhbGwgYGtleWRvd25gIHlvdXJzZWxmLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGNhbGxzIG1ldGhvZHMgc3VjaCBhcyBgZ29MZWZ0YCBhbmQgYGdvUmlnaHRgLiBZb3UgY2FuIGRlZmluZVxuICAgKiB3aGF0IHRoYXQgbWVhbnMgYnkgaW1wbGVtZW50aW5nIHRob3NlIG1ldGhvZHMgeW91cnNlbGYuIElmIHlvdSB3YW50IHRvIHVzZVxuICAgKiBkaXJlY3Rpb24ga2V5cyB0byBuYXZpZ2F0ZSBhIHNlbGVjdGlvbiwgdXNlIHRoaXMgbWl4aW4gd2l0aCB0aGVcbiAgICogW0RpcmVjdGlvblNlbGVjdGlvbl0oRGlyZWN0aW9uU2VsZWN0aW9uLm1kKSBtaXhpbi5cbiAgICovXG4gIGNsYXNzIEtleWJvYXJkRGlyZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG5cbiAgICAgIC8vIFNldCBkZWZhdWx0cy5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5uYXZpZ2F0aW9uQXhpcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5uYXZpZ2F0aW9uQXhpcyA9IHRoaXMuZGVmYXVsdHMubmF2aWdhdGlvbkF4aXM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IGRlZmF1bHRzKCkge1xuICAgICAgbGV0IGRlZmF1bHRzID0gc3VwZXIuZGVmYXVsdHMgfHwge307XG4gICAgICBkZWZhdWx0cy5uYXZpZ2F0aW9uQXhpcyA9ICdib3RoJztcbiAgICAgIHJldHVybiBkZWZhdWx0cztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgZG93bi5cbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuXG4gICAgICovXG4gICAgZ29Eb3duKCkge1xuICAgICAgaWYgKHN1cGVyLmdvRG93bikgeyByZXR1cm4gc3VwZXIuZ29Eb3duKCk7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgdG8gdGhlIGVuZCAoZS5nLiwgb2YgYSBsaXN0KS5cbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuXG4gICAgICovXG4gICAgZ29FbmQoKSB7XG4gICAgICBpZiAoc3VwZXIuZ29FbmQpIHsgcmV0dXJuIHN1cGVyLmdvRW5kKCk7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgbGVmdC5cbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuXG4gICAgICovXG4gICAgZ29MZWZ0KCkge1xuICAgICAgaWYgKHN1cGVyLmdvTGVmdCkgeyByZXR1cm4gc3VwZXIuZ29MZWZ0KCk7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgcmlnaHQuXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLlxuICAgICAqL1xuICAgIGdvUmlnaHQoKSB7XG4gICAgICBpZiAoc3VwZXIuZ29SaWdodCkgeyByZXR1cm4gc3VwZXIuZ29SaWdodCgpOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIHRvIHRoZSBzdGFydCAoZS5nLiwgb2YgYVxuICAgICAqIGxpc3QpLiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuXG4gICAgICovXG4gICAgZ29TdGFydCgpIHtcbiAgICAgIGlmIChzdXBlci5nb1N0YXJ0KSB7IHJldHVybiBzdXBlci5nb1N0YXJ0KCk7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgdXAuXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLlxuICAgICAqL1xuICAgIGdvVXAoKSB7XG4gICAgICBpZiAoc3VwZXIuZ29VcCkgeyByZXR1cm4gc3VwZXIuZ29VcCgpOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHRoZSBkaXJlY3Rpb24gb2YgcGVybWl0dGVkIG5hdmlnYXRpb24gd2l0aCB0aGUga2V5Ym9hcmQuXG4gICAgICpcbiAgICAgKiBBY2NlcHRlZCB2YWx1ZXMgYXJlIFwiaG9yaXpvbnRhbFwiLCBcInZlcnRpY2FsXCIsIG9yIFwiYm90aFwiICh0aGUgZGVmYXVsdCkuXG4gICAgICogSWYgdGhpcyBwcm9wZXJ0eSBpcyBcImhvcml6b250YWxcIiwgdGhlIFVwIEFycm93IGFuZCBEb3duIEFycm93IGtleXMgd2lsbFxuICAgICAqIGJlIGlnbm9yZWQuIENvbnZlcnNlbHksIGlmIHRoaXMgaXMgXCJ2ZXJ0aWNhbFwiLCB0aGUgTGVmdCBBcnJvdyBhbmQgUmlnaHRcbiAgICAgKiBBcnJvdyBrZXlzIHdpbGwgYmUgaWdub3JlZC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0IG5hdmlnYXRpb25BeGlzKCkge1xuICAgICAgcmV0dXJuIHRoaXNbbmF2aWdhdGlvbkF4aXNTeW1ib2xdO1xuICAgIH1cbiAgICBzZXQgbmF2aWdhdGlvbkF4aXModmFsdWUpIHtcbiAgICAgIHRoaXNbbmF2aWdhdGlvbkF4aXNTeW1ib2xdID0gdmFsdWU7XG4gICAgfVxuXG4gICAga2V5ZG93bihldmVudCkge1xuICAgICAgbGV0IGhhbmRsZWQ7XG5cbiAgICAgIGxldCBheGlzID0gdGhpcy5uYXZpZ2F0aW9uQXhpcztcbiAgICAgIGxldCBob3Jpem9udGFsID0gKGF4aXMgPT09ICdob3Jpem9udGFsJyB8fCBheGlzID09PSAnYm90aCcpO1xuICAgICAgbGV0IHZlcnRpY2FsID0gKGF4aXMgPT09ICd2ZXJ0aWNhbCcgfHwgYXhpcyA9PT0gJ2JvdGgnKTtcblxuICAgICAgLy8gSWdub3JlIExlZnQvUmlnaHQga2V5cyB3aGVuIG1ldGFLZXkgb3IgYWx0S2V5IG1vZGlmaWVyIGlzIGFsc28gcHJlc3NlZCxcbiAgICAgIC8vIGFzIHRoZSB1c2VyIG1heSBiZSB0cnlpbmcgdG8gbmF2aWdhdGUgYmFjayBvciBmb3J3YXJkIGluIHRoZSBicm93c2VyLlxuICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgIGNhc2UgMzU6IC8vIEVuZFxuICAgICAgICAgIGhhbmRsZWQgPSB0aGlzLmdvRW5kKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzY6IC8vIEhvbWVcbiAgICAgICAgICBoYW5kbGVkID0gdGhpcy5nb1N0YXJ0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzc6IC8vIExlZnRcbiAgICAgICAgICBpZiAoaG9yaXpvbnRhbCAmJiAhZXZlbnQubWV0YUtleSAmJiAhZXZlbnQuYWx0S2V5KSB7XG4gICAgICAgICAgICBoYW5kbGVkID0gdGhpcy5nb0xlZnQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzg6IC8vIFVwXG4gICAgICAgICAgaWYgKHZlcnRpY2FsKSB7XG4gICAgICAgICAgICBoYW5kbGVkID0gZXZlbnQuYWx0S2V5ID8gdGhpcy5nb1N0YXJ0KCkgOiB0aGlzLmdvVXAoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzk6IC8vIFJpZ2h0XG4gICAgICAgICAgaWYgKGhvcml6b250YWwgJiYgIWV2ZW50Lm1ldGFLZXkgJiYgIWV2ZW50LmFsdEtleSkge1xuICAgICAgICAgICAgaGFuZGxlZCA9IHRoaXMuZ29SaWdodCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0MDogLy8gRG93blxuICAgICAgICAgIGlmICh2ZXJ0aWNhbCkge1xuICAgICAgICAgICAgaGFuZGxlZCA9IGV2ZW50LmFsdEtleSA/IHRoaXMuZ29FbmQoKSA6IHRoaXMuZ29Eb3duKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgLy8gUHJlZmVyIG1peGluIHJlc3VsdCBpZiBpdCdzIGRlZmluZWQsIG90aGVyd2lzZSB1c2UgYmFzZSByZXN1bHQuXG4gICAgICByZXR1cm4gaGFuZGxlZCB8fCAoc3VwZXIua2V5ZG93biAmJiBzdXBlci5rZXlkb3duKGV2ZW50KSk7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gS2V5Ym9hcmREaXJlY3Rpb247XG59O1xuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBLZXlib2FyZFBhZ2VkU2VsZWN0aW9uLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggbWFwcyBwYWdlIGtleXMgKFBhZ2UgVXAsIFBhZ2UgRG93bikgaW50byBvcGVyYXRpb25zIHRoYXQgbW92ZVxuICAgKiB0aGUgc2VsZWN0aW9uIGJ5IG9uZSBwYWdlLlxuICAgKlxuICAgKiBUaGUga2V5Ym9hcmQgaW50ZXJhY3Rpb24gbW9kZWwgZ2VuZXJhbGx5IGZvbGxvd3MgdGhhdCBvZiBNaWNyb3NvZnQgV2luZG93cydcbiAgICogbGlzdCBib3hlcyBpbnN0ZWFkIG9mIHRob3NlIGluIE9TIFg6XG4gICAqXG4gICAqICogVGhlIFBhZ2UgVXAvRG93biBhbmQgSG9tZS9FbmQga2V5cyBhY3R1YWxseSBjaGFuZ2UgdGhlIHNlbGVjdGlvbiwgcmF0aGVyXG4gICAqICAgdGhhbiBqdXN0IHNjcm9sbGluZy4gVGhlIGZvcm1lciBiZWhhdmlvciBzZWVtcyBtb3JlIGdlbmVyYWxseSB1c2VmdWwgZm9yXG4gICAqICAga2V5Ym9hcmQgdXNlcnMuXG4gICAqXG4gICAqICogUHJlc3NpbmcgUGFnZSBVcC9Eb3duIHdpbGwgY2hhbmdlIHRoZSBzZWxlY3Rpb24gdG8gdGhlIHRvcG1vc3QvYm90dG9tbW9zdFxuICAgKiAgIHZpc2libGUgaXRlbSBpZiB0aGUgc2VsZWN0aW9uIGlzIG5vdCBhbHJlYWR5IHRoZXJlLiBUaGVyZWFmdGVyLCB0aGUga2V5XG4gICAqICAgd2lsbCBtb3ZlIHRoZSBzZWxlY3Rpb24gdXAvZG93biBieSBhIHBhZ2UsIGFuZCAocGVyIHRoZSBhYm92ZSBwb2ludCkgbWFrZVxuICAgKiAgIHRoZSBzZWxlY3RlZCBpdGVtIHZpc2libGUuXG4gICAqXG4gICAqIFRvIGVuc3VyZSB0aGUgc2VsZWN0ZWQgaXRlbSBpcyBpbiB2aWV3IGZvbGxvd2luZyB1c2Ugb2YgUGFnZSBVcC9Eb3duLCB1c2VcbiAgICogdGhlIHJlbGF0ZWQgW1NlbGVjdGlvbkluVmlld10oU2VsZWN0aW9uSW5WaWV3Lm1kKSBtaXhpbi5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIHRoZSBjb21wb25lbnQgdG8gaW52b2tlIGEgYGtleWRvd25gIG1ldGhvZCB3aGVuIGEga2V5IGlzXG4gICAqIHByZXNzZWQuIFlvdSBjYW4gdXNlIHRoZSBbS2V5Ym9hcmRdKEtleWJvYXJkLm1kKSBtaXhpbiBmb3IgdGhhdCBwdXJwb3NlLCBvclxuICAgKiB3aXJlIHVwIHlvdXIgb3duIGtleWJvYXJkIGhhbmRsaW5nIGFuZCBjYWxsIGBrZXlkb3duYCB5b3Vyc2VsZi5cbiAgICovXG4gIGNsYXNzIEtleWJvYXJkUGFnZWRTZWxlY3Rpb24gZXh0ZW5kcyBiYXNlIHtcblxuICAgIGtleWRvd24oZXZlbnQpIHtcbiAgICAgIGxldCBoYW5kbGVkO1xuICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgIGNhc2UgMzM6IC8vIFBhZ2UgVXBcbiAgICAgICAgICBoYW5kbGVkID0gdGhpcy5wYWdlVXAoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzNDogLy8gUGFnZSBEb3duXG4gICAgICAgICAgaGFuZGxlZCA9IHRoaXMucGFnZURvd24oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIC8vIFByZWZlciBtaXhpbiByZXN1bHQgaWYgaXQncyBkZWZpbmVkLCBvdGhlcndpc2UgdXNlIGJhc2UgcmVzdWx0LlxuICAgICAgcmV0dXJuIGhhbmRsZWQgfHwgKHN1cGVyLmtleWRvd24gJiYgc3VwZXIua2V5ZG93bihldmVudCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNjcm9sbCBkb3duIG9uZSBwYWdlLlxuICAgICAqL1xuICAgIHBhZ2VEb3duKCkge1xuICAgICAgaWYgKHN1cGVyLnBhZ2VEb3duKSB7IHN1cGVyLnBhZ2VEb3duKCk7IH1cbiAgICAgIHJldHVybiBzY3JvbGxPbmVQYWdlKHRoaXMsIHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNjcm9sbCB1cCBvbmUgcGFnZS5cbiAgICAgKi9cbiAgICBwYWdlVXAoKSB7XG4gICAgICBpZiAoc3VwZXIucGFnZVVwKSB7IHN1cGVyLnBhZ2VVcCgpOyB9XG4gICAgICByZXR1cm4gc2Nyb2xsT25lUGFnZSh0aGlzLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGVsZW1lbnQgdGhhdCBzaG91bGQgYmUgc2Nyb2xsZWQgd2l0aCB0aGUgUGFnZSBVcC9Eb3duIGtleXMuXG4gICAgICogRGVmYXVsdCBpcyB0aGUgY3VycmVudCBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIGdldCBzY3JvbGxUYXJnZXQoKSB7XG4gICAgICAvLyBQcmVmZXIgYmFzZSByZXN1bHQuXG4gICAgICByZXR1cm4gJ3Njcm9sbFRhcmdldCcgaW4gYmFzZS5wcm90b3R5cGUgPyBzdXBlci5zY3JvbGxUYXJnZXQgOiB0aGlzO1xuICAgIH1cbiAgICBzZXQgc2Nyb2xsVGFyZ2V0KGVsZW1lbnQpIHtcbiAgICAgIGlmICgnc2Nyb2xsVGFyZ2V0JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zY3JvbGxUYXJnZXQgPSBlbGVtZW50OyB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIEtleWJvYXJkUGFnZWRTZWxlY3Rpb247XG59O1xuXG5cbi8vIFJldHVybiB0aGUgaXRlbSB3aG9zZSBjb250ZW50IHNwYW5zIHRoZSBnaXZlbiB5IHBvc2l0aW9uIChyZWxhdGl2ZSB0byB0aGVcbi8vIHRvcCBvZiB0aGUgbGlzdCdzIHNjcm9sbGluZyBjbGllbnQgYXJlYSksIG9yIG51bGwgaWYgbm90IGZvdW5kLlxuLy9cbi8vIElmIGRvd253YXJkIGlzIHRydWUsIG1vdmUgZG93biB0aGUgbGlzdCBvZiBpdGVtcyB0byBmaW5kIHRoZSBmaXJzdCBpdGVtXG4vLyBmb3VuZCBhdCB0aGUgZ2l2ZW4geSBwb3NpdGlvbjsgaWYgZG93bndhcmQgaXMgZmFsc2UsIG1vdmUgdXAgdGhlIGxpc3Qgb2Zcbi8vIGl0ZW1zIHRvIGZpbmQgdGhlIGxhc3QgaXRlbSBhdCB0aGF0IHBvc2l0aW9uLlxuZnVuY3Rpb24gZ2V0SW5kZXhPZkl0ZW1BdFkoZWxlbWVudCwgeSwgZG93bndhcmQpIHtcbiAgbGV0IGl0ZW1zID0gZWxlbWVudC5pdGVtcztcbiAgbGV0IHN0YXJ0ID0gZG93bndhcmQgPyAwIDogaXRlbXMubGVuZ3RoIC0gMTtcbiAgbGV0IGVuZCA9IGRvd253YXJkID8gaXRlbXMubGVuZ3RoIDogMDtcbiAgbGV0IHN0ZXAgPSBkb3dud2FyZCA/IDEgOiAtMTtcbiAgbGV0IHNjcm9sbFRhcmdldCA9IGVsZW1lbnQuc2Nyb2xsVGFyZ2V0O1xuICBsZXQgdG9wT2ZDbGllbnRBcmVhID0gc2Nyb2xsVGFyZ2V0Lm9mZnNldFRvcCArIHNjcm9sbFRhcmdldC5jbGllbnRUb3A7XG5cbiAgLy8gRmluZCB0aGUgaXRlbSBzcGFubmluZyB0aGUgaW5kaWNhdGVkIHkgY29vcmRpbmF0ZS5cbiAgbGV0IGl0ZW07XG4gIGxldCBpdGVtSW5kZXggPSBzdGFydDtcbiAgbGV0IGl0ZW1Ub3A7XG4gIGxldCBmb3VuZCA9IGZhbHNlO1xuICB3aGlsZSAoaXRlbUluZGV4ICE9PSBlbmQpIHtcbiAgICBpdGVtID0gaXRlbXNbaXRlbUluZGV4XTtcbiAgICBpdGVtVG9wID0gaXRlbS5vZmZzZXRUb3AgLSB0b3BPZkNsaWVudEFyZWE7XG4gICAgbGV0IGl0ZW1Cb3R0b20gPSBpdGVtVG9wICsgaXRlbS5vZmZzZXRIZWlnaHQ7XG4gICAgaWYgKGl0ZW1Ub3AgPD0geSAmJiBpdGVtQm90dG9tID49IHkpIHtcbiAgICAgIC8vIEl0ZW0gc3BhbnMgdGhlIGluZGljYXRlZCB5IGNvb3JkaW5hdGUuXG4gICAgICBmb3VuZCA9IHRydWU7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaXRlbUluZGV4ICs9IHN0ZXA7XG4gIH1cblxuICBpZiAoIWZvdW5kKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvLyBXZSBtYXkgaGF2ZSBmb3VuZCBhbiBpdGVtIHdob3NlIHBhZGRpbmcgc3BhbnMgdGhlIGdpdmVuIHkgY29vcmRpbmF0ZSxcbiAgLy8gYnV0IHdob3NlIGNvbnRlbnQgaXMgYWN0dWFsbHkgYWJvdmUvYmVsb3cgdGhhdCBwb2ludC5cbiAgLy8gVE9ETzogSWYgdGhlIGl0ZW0gaGFzIGEgYm9yZGVyLCB0aGVuIHBhZGRpbmcgc2hvdWxkIGJlIGluY2x1ZGVkIGluXG4gIC8vIGNvbnNpZGVyaW5nIGEgaGl0LlxuICBsZXQgaXRlbVN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShpdGVtKTtcbiAgbGV0IGl0ZW1QYWRkaW5nVG9wID0gcGFyc2VGbG9hdChpdGVtU3R5bGUucGFkZGluZ1RvcCk7XG4gIGxldCBpdGVtUGFkZGluZ0JvdHRvbSA9IHBhcnNlRmxvYXQoaXRlbVN0eWxlLnBhZGRpbmdCb3R0b20pO1xuICBsZXQgY29udGVudFRvcCA9IGl0ZW1Ub3AgKyBpdGVtLmNsaWVudFRvcCArIGl0ZW1QYWRkaW5nVG9wO1xuICBsZXQgY29udGVudEJvdHRvbSA9IGNvbnRlbnRUb3AgKyBpdGVtLmNsaWVudEhlaWdodCAtIGl0ZW1QYWRkaW5nVG9wIC0gaXRlbVBhZGRpbmdCb3R0b207XG4gIGlmIChkb3dud2FyZCAmJiBjb250ZW50VG9wIDw9IHkgfHwgIWRvd253YXJkICYmIGNvbnRlbnRCb3R0b20gPj0geSkge1xuICAgIC8vIFRoZSBpbmRpY2F0ZWQgY29vcmRpbmF0ZSBoaXRzIHRoZSBhY3R1YWwgaXRlbSBjb250ZW50LlxuICAgIHJldHVybiBpdGVtSW5kZXg7XG4gIH1cbiAgZWxzZSB7XG4gICAgLy8gVGhlIGluZGljYXRlZCBjb29yZGluYXRlIGZhbGxzIHdpdGhpbiB0aGUgaXRlbSdzIHBhZGRpbmcuIEJhY2sgdXAgdG9cbiAgICAvLyB0aGUgaXRlbSBiZWxvdy9hYm92ZSB0aGUgaXRlbSB3ZSBmb3VuZCBhbmQgcmV0dXJuIHRoYXQuXG4gICAgcmV0dXJuIGl0ZW1JbmRleCAtIHN0ZXA7XG4gIH1cbn1cblxuLy8gTW92ZSBieSBvbmUgcGFnZSBkb3dud2FyZCAoaWYgZG93bndhcmQgaXMgdHJ1ZSksIG9yIHVwd2FyZCAoaWYgZmFsc2UpLlxuLy8gUmV0dXJuIHRydWUgaWYgd2UgZW5kZWQgdXAgY2hhbmdpbmcgdGhlIHNlbGVjdGlvbiwgZmFsc2UgaWYgbm90LlxuLy8gVE9ETzogQmV0dGVyIHN1cHBvcnQgZm9yIGhvcml6b250YWwgbGlzdHMuXG5mdW5jdGlvbiBzY3JvbGxPbmVQYWdlKGVsZW1lbnQsIGRvd253YXJkKSB7XG5cbiAgLy8gRGV0ZXJtaW5lIHRoZSBpdGVtIHZpc2libGUganVzdCBhdCB0aGUgZWRnZSBvZiBkaXJlY3Rpb24gd2UncmUgaGVhZGluZy5cbiAgLy8gV2UnbGwgc2VsZWN0IHRoYXQgaXRlbSBpZiBpdCdzIG5vdCBhbHJlYWR5IHNlbGVjdGVkLlxuICBsZXQgc2Nyb2xsVGFyZ2V0ID0gZWxlbWVudC5zY3JvbGxUYXJnZXQ7XG4gIGxldCBlZGdlID0gc2Nyb2xsVGFyZ2V0LnNjcm9sbFRvcCArIChkb3dud2FyZCA/IHNjcm9sbFRhcmdldC5jbGllbnRIZWlnaHQgOiAwKTtcbiAgbGV0IGluZGV4T2ZJdGVtQXRFZGdlID0gZ2V0SW5kZXhPZkl0ZW1BdFkoZWxlbWVudCwgZWRnZSwgZG93bndhcmQpO1xuXG4gIGxldCBzZWxlY3RlZEluZGV4ID0gZWxlbWVudC5zZWxlY3RlZEluZGV4O1xuICBsZXQgbmV3SW5kZXg7XG4gIGlmIChpbmRleE9mSXRlbUF0RWRnZSAmJiBzZWxlY3RlZEluZGV4ID09PSBpbmRleE9mSXRlbUF0RWRnZSkge1xuICAgIC8vIFRoZSBpdGVtIGF0IHRoZSBlZGdlIHdhcyBhbHJlYWR5IHNlbGVjdGVkLCBzbyBzY3JvbGwgaW4gdGhlIGluZGljYXRlZFxuICAgIC8vIGRpcmVjdGlvbiBieSBvbmUgcGFnZS4gTGVhdmUgdGhlIG5ldyBpdGVtIGF0IHRoYXQgZWRnZSBzZWxlY3RlZC5cbiAgICBsZXQgZGVsdGEgPSAoZG93bndhcmQgPyAxIDogLTEpICogc2Nyb2xsVGFyZ2V0LmNsaWVudEhlaWdodDtcbiAgICBuZXdJbmRleCA9IGdldEluZGV4T2ZJdGVtQXRZKGVsZW1lbnQsIGVkZ2UgKyBkZWx0YSwgZG93bndhcmQpO1xuICB9XG4gIGVsc2Uge1xuICAgIC8vIFRoZSBpdGVtIGF0IHRoZSBlZGdlIHdhc24ndCBzZWxlY3RlZCB5ZXQuIEluc3RlYWQgb2Ygc2Nyb2xsaW5nLCB3ZSdsbFxuICAgIC8vIGp1c3Qgc2VsZWN0IHRoYXQgaXRlbS4gVGhhdCBpcywgdGhlIGZpcnN0IGF0dGVtcHQgdG8gcGFnZSB1cC9kb3duXG4gICAgLy8gdXN1YWxseSBqdXN0IG1vdmVzIHRoZSBzZWxlY3Rpb24gdG8gdGhlIGVkZ2UgaW4gdGhhdCBkaXJlY3Rpb24uXG4gICAgbmV3SW5kZXggPSBpbmRleE9mSXRlbUF0RWRnZTtcbiAgfVxuXG4gIGlmICghbmV3SW5kZXgpIHtcbiAgICAvLyBXZSBjYW4ndCBmaW5kIGFuIGl0ZW0gaW4gdGhlIGRpcmVjdGlvbiB3ZSB3YW50IHRvIHRyYXZlbC4gU2VsZWN0IHRoZVxuICAgIC8vIGxhc3QgaXRlbSAoaWYgbW92aW5nIGRvd253YXJkKSBvciBmaXJzdCBpdGVtIChpZiBtb3ZpbmcgdXB3YXJkKS5cbiAgICBuZXdJbmRleCA9IChkb3dud2FyZCA/IGVsZW1lbnQuaXRlbXMubGVuZ3RoIC0gMSA6IDApO1xuICB9XG5cbiAgaWYgKG5ld0luZGV4ICE9PSBzZWxlY3RlZEluZGV4KSB7XG4gICAgZWxlbWVudC5zZWxlY3RlZEluZGV4ID0gbmV3SW5kZXg7XG4gICAgcmV0dXJuIHRydWU7IC8vIFdlIGhhbmRsZWQgdGhlIHBhZ2UgdXAvZG93biBvdXJzZWx2ZXMuXG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlOyAvLyBXZSBkaWRuJ3QgZG8gYW55dGhpbmcuXG4gIH1cbn1cbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi9jcmVhdGVTeW1ib2wnO1xuXG5cbi8vIFN5bWJvbHMgZm9yIHByaXZhdGUgZGF0YSBtZW1iZXJzIG9uIGFuIGVsZW1lbnQuXG5jb25zdCBpdGVtVGV4dENvbnRlbnRzU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdpdGVtVGV4dENvbnRlbnRzJyk7XG5jb25zdCB0eXBlZFByZWZpeFN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgndHlwZWRQcmVmaXgnKTtcbmNvbnN0IHByZWZpeFRpbWVvdXRTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3ByZWZpeFRpbWVvdXQnKTtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIEtleWJvYXJkUHJlZml4U2VsZWN0aW9uLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gdGhhdCBoYW5kbGVzIGxpc3QgYm94LXN0eWxlIHByZWZpeCB0eXBpbmcsIGluIHdoaWNoIHRoZSB1c2VyIGNhbiB0eXBlXG4gICAqIGEgc3RyaW5nIHRvIHNlbGVjdCB0aGUgZmlyc3QgaXRlbSB0aGF0IGJlZ2lucyB3aXRoIHRoYXQgc3RyaW5nLlxuICAgKlxuICAgKiBFeGFtcGxlOiBzdXBwb3NlIGEgY29tcG9uZW50IHVzaW5nIHRoaXMgbWl4aW4gaGFzIHRoZSBmb2xsb3dpbmcgaXRlbXM6XG4gICAqXG4gICAqICAgICA8c2FtcGxlLWxpc3QtY29tcG9uZW50PlxuICAgKiAgICAgICA8ZGl2PkFwcGxlPC9kaXY+XG4gICAqICAgICAgIDxkaXY+QXByaWNvdDwvZGl2PlxuICAgKiAgICAgICA8ZGl2PkJhbmFuYTwvZGl2PlxuICAgKiAgICAgICA8ZGl2PkJsYWNrYmVycnk8L2Rpdj5cbiAgICogICAgICAgPGRpdj5CbHVlYmVycnk8L2Rpdj5cbiAgICogICAgICAgPGRpdj5DYW50YWxvdXBlPC9kaXY+XG4gICAqICAgICAgIDxkaXY+Q2hlcnJ5PC9kaXY+XG4gICAqICAgICAgIDxkaXY+TGVtb248L2Rpdj5cbiAgICogICAgICAgPGRpdj5MaW1lPC9kaXY+XG4gICAqICAgICA8L3NhbXBsZS1saXN0LWNvbXBvbmVudD5cbiAgICpcbiAgICogSWYgdGhpcyBjb21wb25lbnQgcmVjZWl2ZXMgdGhlIGZvY3VzLCBhbmQgdGhlIHVzZXIgcHJlc3NlcyB0aGUgXCJiXCIgb3IgXCJCXCJcbiAgICoga2V5LCB0aGUgXCJCYW5hbmFcIiBpdGVtIHdpbGwgYmUgc2VsZWN0ZWQsIGJlY2F1c2UgaXQncyB0aGUgZmlyc3QgaXRlbSB0aGF0XG4gICAqIG1hdGNoZXMgdGhlIHByZWZpeCBcImJcIi4gKE1hdGNoaW5nIGlzIGNhc2UtaW5zZW5zaXRpdmUuKSBJZiB0aGUgdXNlciBub3dcbiAgICogcHJlc3NlcyB0aGUgXCJsXCIgb3IgXCJMXCIga2V5IHF1aWNrbHksIHRoZSBwcmVmaXggdG8gbWF0Y2ggYmVjb21lcyBcImJsXCIsIHNvXG4gICAqIFwiQmxhY2tiZXJyeVwiIHdpbGwgYmUgc2VsZWN0ZWQuXG4gICAqXG4gICAqIFRoZSBwcmVmaXggdHlwaW5nIGZlYXR1cmUgaGFzIGEgb25lIHNlY29uZCB0aW1lb3V0IOKAlMKgdGhlIHByZWZpeCB0byBtYXRjaFxuICAgKiB3aWxsIGJlIHJlc2V0IGFmdGVyIGEgc2Vjb25kIGhhcyBwYXNzZWQgc2luY2UgdGhlIHVzZXIgbGFzdCB0eXBlZCBhIGtleS5cbiAgICogSWYsIGluIHRoZSBhYm92ZSBleGFtcGxlLCB0aGUgdXNlciB3YWl0cyBhIHNlY29uZCBiZXR3ZWVuIHR5cGluZyBcImJcIiBhbmRcbiAgICogXCJsXCIsIHRoZSBwcmVmaXggd2lsbCBiZWNvbWUgXCJsXCIsIHNvIFwiTGVtb25cIiB3b3VsZCBiZSBzZWxlY3RlZC5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIHRoZSBjb21wb25lbnQgdG8gaW52b2tlIGEgYGtleWRvd25gIG1ldGhvZCB3aGVuIGEga2V5IGlzXG4gICAqIHByZXNzZWQuIFlvdSBjYW4gdXNlIHRoZSBbS2V5Ym9hcmRdKEtleWJvYXJkLm1kKSBtaXhpbiBmb3IgdGhhdCBwdXJwb3NlLCBvclxuICAgKiB3aXJlIHVwIHlvdXIgb3duIGtleWJvYXJkIGhhbmRsaW5nIGFuZCBjYWxsIGBrZXlkb3duYCB5b3Vyc2VsZi5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBhbHNvIGV4cGVjdHMgdGhlIGNvbXBvbmVudCB0byBwcm92aWRlIGFuIGBpdGVtc2AgcHJvcGVydHkuIFRoZVxuICAgKiBgdGV4dENvbnRlbnRgIG9mIHRob3NlIGl0ZW1zIHdpbGwgYmUgdXNlZCBmb3IgcHVycG9zZXMgb2YgcHJlZml4IG1hdGNoaW5nLlxuICAgKi9cbiAgY2xhc3MgS2V5Ym9hcmRQcmVmaXhTZWxlY3Rpb24gZXh0ZW5kcyBiYXNlIHtcblxuICAgIC8vIFRPRE86IElmIHRoZSBzZXQgb2YgaXRlbXMgaXMgY2hhbmdlZCwgcmVzZXQgdGhlIHByZWZpeC5cbiAgICAvLyBpdGVtc0NoYW5nZWQoKSB7XG4gICAgLy8gICB0aGlzW2l0ZW1UZXh0Q29udGVudHNTeW1ib2xdID0gbnVsbDtcbiAgICAvLyAgIHJlc2V0VHlwZWRQcmVmaXgodGhpcyk7XG4gICAgLy8gfVxuXG4gICAgLy8gVE9ETzogSWYgdGhlIHNlbGVjdGlvbiBpcyBjaGFuZ2VkIGJ5IHNvbWUgb3RoZXIgbWVhbnMgKGUuZy4sIGFycm93IGtleXMpXG4gICAgLy8gb3RoZXIgdGhhbiBwcmVmaXggdHlwaW5nLCB0aGVuIHRoYXQgYWN0IHNob3VsZCByZXNldCB0aGUgcHJlZml4LlxuXG4gICAga2V5ZG93bihldmVudCkge1xuICAgICAgbGV0IGhhbmRsZWQ7XG4gICAgICBsZXQgcmVzZXRQcmVmaXggPSB0cnVlO1xuXG4gICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgY2FzZSA4OiAvLyBCYWNrc3BhY2VcbiAgICAgICAgICBoYW5kbGVCYWNrc3BhY2UodGhpcyk7XG4gICAgICAgICAgaGFuZGxlZCA9IHRydWU7XG4gICAgICAgICAgcmVzZXRQcmVmaXggPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyNzogLy8gRXNjYXBlXG4gICAgICAgICAgaGFuZGxlZCA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgaWYgKCFldmVudC5jdHJsS2V5ICYmICFldmVudC5tZXRhS2V5ICYmICFldmVudC5hbHRLZXkgJiZcbiAgICAgICAgICAgICAgZXZlbnQud2hpY2ggIT09IDMyIC8qIFNwYWNlICovKSB7XG4gICAgICAgICAgICBoYW5kbGVQbGFpbkNoYXJhY3Rlcih0aGlzLCBTdHJpbmcuZnJvbUNoYXJDb2RlKGV2ZW50LndoaWNoKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlc2V0UHJlZml4ID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXNldFByZWZpeCkge1xuICAgICAgICByZXNldFR5cGVkUHJlZml4KHRoaXMpO1xuICAgICAgfVxuXG4gICAgICAvLyBQcmVmZXIgbWl4aW4gcmVzdWx0IGlmIGl0J3MgZGVmaW5lZCwgb3RoZXJ3aXNlIHVzZSBiYXNlIHJlc3VsdC5cbiAgICAgIHJldHVybiBoYW5kbGVkIHx8IChzdXBlci5rZXlkb3duICYmIHN1cGVyLmtleWRvd24oZXZlbnQpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgdGhlIGZpcnN0IGl0ZW0gd2hvc2UgdGV4dCBjb250ZW50IGJlZ2lucyB3aXRoIHRoZSBnaXZlbiBwcmVmaXguXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcHJlZml4IFtTdHJpbmddIFRoZSBwcmVmaXggc3RyaW5nIHRvIHNlYXJjaCBmb3JcbiAgICAgKi9cbiAgICBzZWxlY3RJdGVtV2l0aFRleHRQcmVmaXgocHJlZml4KSB7XG4gICAgICBpZiAoc3VwZXIuc2VsZWN0SXRlbVdpdGhUZXh0UHJlZml4KSB7IHN1cGVyLnNlbGVjdEl0ZW1XaXRoVGV4dFByZWZpeChwcmVmaXgpOyB9XG4gICAgICBpZiAocHJlZml4ID09IG51bGwgfHwgcHJlZml4Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsZXQgaW5kZXggPSBnZXRJbmRleE9mSXRlbVdpdGhUZXh0UHJlZml4KHRoaXMsIHByZWZpeCk7XG4gICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBpbmRleDtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBLZXlib2FyZFByZWZpeFNlbGVjdGlvbjtcbn07XG5cblxuLy8gVGltZSBpbiBtaWxsaXNlY29uZHMgYWZ0ZXIgd2hpY2ggdGhlIHVzZXIgaXMgY29uc2lkZXJlZCB0byBoYXZlIHN0b3BwZWRcbi8vIHR5cGluZy5cbmNvbnN0IFBSRUZJWF9USU1FT1VUX0RVUkFUSU9OID0gMTAwMDtcblxuXG4vLyBSZXR1cm4gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBpdGVtIHdpdGggdGhlIGdpdmVuIHByZWZpeCwgZWxzZSAtMS5cbmZ1bmN0aW9uIGdldEluZGV4T2ZJdGVtV2l0aFRleHRQcmVmaXgoZWxlbWVudCwgcHJlZml4KSB7XG4gIGxldCBpdGVtVGV4dENvbnRlbnRzID0gZ2V0SXRlbVRleHRDb250ZW50cyhlbGVtZW50KTtcbiAgbGV0IHByZWZpeExlbmd0aCA9IHByZWZpeC5sZW5ndGg7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbVRleHRDb250ZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBpdGVtVGV4dENvbnRlbnQgPSBpdGVtVGV4dENvbnRlbnRzW2ldO1xuICAgIGlmIChpdGVtVGV4dENvbnRlbnQuc3Vic3RyKDAsIHByZWZpeExlbmd0aCkgPT09IHByZWZpeCkge1xuICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxuLy8gUmV0dXJuIGFuIGFycmF5IG9mIHRoZSB0ZXh0IGNvbnRlbnQgKGluIGxvd2VyY2FzZSkgb2YgYWxsIGl0ZW1zLlxuLy8gQ2FjaGUgdGhlc2UgcmVzdWx0cy5cbmZ1bmN0aW9uIGdldEl0ZW1UZXh0Q29udGVudHMoZWxlbWVudCkge1xuICBpZiAoIWVsZW1lbnRbaXRlbVRleHRDb250ZW50c1N5bWJvbF0pIHtcbiAgICBsZXQgaXRlbXMgPSBlbGVtZW50Lml0ZW1zO1xuICAgIGVsZW1lbnRbaXRlbVRleHRDb250ZW50c1N5bWJvbF0gPSBpdGVtcy5tYXAoY2hpbGQgPT4ge1xuICAgICAgbGV0IHRleHQgPSBjaGlsZC50ZXh0Q29udGVudCB8fCBjaGlsZC5hbHQ7XG4gICAgICByZXR1cm4gdGV4dC50b0xvd2VyQ2FzZSgpO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBlbGVtZW50W2l0ZW1UZXh0Q29udGVudHNTeW1ib2xdO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVCYWNrc3BhY2UoZWxlbWVudCkge1xuICBsZXQgbGVuZ3RoID0gZWxlbWVudFt0eXBlZFByZWZpeFN5bWJvbF0gPyBlbGVtZW50W3R5cGVkUHJlZml4U3ltYm9sXS5sZW5ndGggOiAwO1xuICBpZiAobGVuZ3RoID4gMCkge1xuICAgIGVsZW1lbnRbdHlwZWRQcmVmaXhTeW1ib2xdID0gZWxlbWVudFt0eXBlZFByZWZpeFN5bWJvbF0uc3Vic3RyKDAsIGxlbmd0aCAtIDEpO1xuICB9XG4gIGVsZW1lbnQuc2VsZWN0SXRlbVdpdGhUZXh0UHJlZml4KGVsZW1lbnRbdHlwZWRQcmVmaXhTeW1ib2xdKTtcbiAgc2V0UHJlZml4VGltZW91dChlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlUGxhaW5DaGFyYWN0ZXIoZWxlbWVudCwgY2hhcikge1xuICBsZXQgcHJlZml4ID0gZWxlbWVudFt0eXBlZFByZWZpeFN5bWJvbF0gfHwgJyc7XG4gIGVsZW1lbnRbdHlwZWRQcmVmaXhTeW1ib2xdID0gcHJlZml4ICsgY2hhci50b0xvd2VyQ2FzZSgpO1xuICBlbGVtZW50LnNlbGVjdEl0ZW1XaXRoVGV4dFByZWZpeChlbGVtZW50W3R5cGVkUHJlZml4U3ltYm9sXSk7XG4gIHNldFByZWZpeFRpbWVvdXQoZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0UHJlZml4VGltZW91dChlbGVtZW50KSB7XG4gIGlmIChlbGVtZW50W3ByZWZpeFRpbWVvdXRTeW1ib2xdKSB7XG4gICAgY2xlYXJUaW1lb3V0KGVsZW1lbnRbcHJlZml4VGltZW91dFN5bWJvbF0pO1xuICAgIGVsZW1lbnRbcHJlZml4VGltZW91dFN5bWJvbF0gPSBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNldFR5cGVkUHJlZml4KGVsZW1lbnQpIHtcbiAgZWxlbWVudFt0eXBlZFByZWZpeFN5bWJvbF0gPSAnJztcbiAgcmVzZXRQcmVmaXhUaW1lb3V0KGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBzZXRQcmVmaXhUaW1lb3V0KGVsZW1lbnQpIHtcbiAgcmVzZXRQcmVmaXhUaW1lb3V0KGVsZW1lbnQpO1xuICBlbGVtZW50W3ByZWZpeFRpbWVvdXRTeW1ib2xdID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgcmVzZXRUeXBlZFByZWZpeChlbGVtZW50KTtcbiAgfSwgUFJFRklYX1RJTUVPVVRfRFVSQVRJT04pO1xufVxuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuL2NyZWF0ZVN5bWJvbCc7XG5pbXBvcnQgbWljcm90YXNrIGZyb20gJy4vbWljcm90YXNrJztcblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IGNvbnRlbnRDaGFuZ2VPYnNlcnZlclN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnY29udGVudENoYW5nZU9ic2VydmVyJyk7XG5cblxuLy8gVE9ETzogU2hvdWxkIHRoaXMgYmUgcmVuYW1lZCB0byBzb21ldGhpbmcgbGlrZSBEaXN0cmlidXRlZENoaWxkcmVuQ2hhbmdlZD9cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBPYnNlcnZlQ29udGVudENoYW5nZXMuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCB3aXJlcyB1cCBtdXRhdGlvbiBvYnNlcnZlcnMgdG8gcmVwb3J0IGFueSBjaGFuZ2VzIGluIGFcbiAgICogY29tcG9uZW50J3MgY29udGVudCAoZGlyZWN0IGNoaWxkcmVuLCBvciBub2RlcyBkaXN0cmlidXRlZCB0byBzbG90cykuXG4gICAqXG4gICAqIEZvciB0aGUgdGltZSBiZWluZywgdGhpcyBjYW4gb25seSBzdXBwb3J0IGEgc2luZ2xlIGxldmVsIG9mIGRpc3RyaWJ1dGVkXG4gICAqIGNvbnRlbnQuIFRoYXQgaXMsIGlmIGEgY29tcG9uZW50IGNvbnRhaW5zIGEgc2xvdCwgYW5kIHRoZSBzZXQgb2Ygbm9kZXNcbiAgICogZGlyZWN0bHkgYXNzaWduZWQgdG8gdGhhdCBzbG90IGNoYW5nZXMsIHRoZW4gdGhpcyBtaXhpbiB3aWxsIGRldGVjdCB0aGVcbiAgICogY2hhbmdlLiBIb3dldmVyLCB0aGlzIG1peGluIGRvZXMgbm90IHlldCBkZXRlY3QgY2hhbmdlcyBpbiByZXByb2plY3RlZFxuICAgKiBub2Rlcy4gSWYgYSBjb21wb25lbnQncyBob3N0IHBsYWNlcyBhIHNsb3QgYXMgYSBjaGlsZCBvZiB0aGUgY29tcG9uZW50XG4gICAqIGluc3RhbmNlLCBub2RlcyBhc3NpZ25lZCB0byB0aGUgb3V0ZXIgaG9zdCB3aWxsIGJlIGFzc2lnbmVkIHRvIHRoZSBob3N0J3NcbiAgICogc2xvdCwgdGhlbiByZWFzc2lnbmVkIHRvIHRoZSBzbG90IGVsZW1lbnQgaW5zaWRlIHRoZSBjb21wb25lbnQuIENoYW5nZXMgaW5cbiAgICogc3VjaCByZXByb2plY3RlZCBub2RlcyB3aWxsIG5vdCAoeWV0KSBiZSBkZXRlY3RlZCBieSB0aGlzIG1peGluLlxuICAgKlxuICAgKiBGb3IgY29tcGFyaXNvbiwgc2VlIFBvbHltZXIncyBvYnNlcnZlTm9kZXMgQVBJLCB3aGljaCBkb2VzIHNvbHZlIHRoZVxuICAgKiBwcm9ibGVtIG9mIHRyYWNraW5nIGNoYW5nZXMgaW4gcmVwcm9qZWN0ZWQgY29udGVudC5cbiAgICpcbiAgICogTm90ZTogVGhlIHdlYiBwbGF0Zm9ybSB0ZWFtIGNyZWF0aW5nIHRoZSBzcGVjaWZpY2F0aW9ucyBmb3Igd2ViIGNvbXBvbmVudHNcbiAgICogcGxhbiB0byByZXF1ZXN0IHRoYXQgYSBuZXcgdHlwZSBvZiBNdXRhdGlvbk9ic2VydmVyIG9wdGlvbiBiZSBkZWZpbmVkIHRoYXRcbiAgICogbGV0cyBhIGNvbXBvbmVudCBtb25pdG9yIGNoYW5nZXMgaW4gZGlzdHJpYnV0ZWQgY2hpbGRyZW4uIFRoaXMgbWl4aW4gd2lsbFxuICAgKiBiZSB1cGRhdGVkIHRvIHRha2UgYWR2YW50YWdlIG9mIHRoYXQgTXV0YXRpb25PYnNlcnZlciBvcHRpb24gd2hlbiB0aGF0XG4gICAqIGJlY29tZXMgYXZhaWxhYmxlLlxuICAgKi9cbiAgY2xhc3MgT2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG4gICAgICBvYnNlcnZlQ29udGVudENoYW5nZXModGhpcyk7XG5cbiAgICAgIC8vIE1ha2UgYW4gaW5pdGlhbCBjYWxsIHRvIGNvbnRlbnRDaGFuZ2VkKCkgc28gdGhhdCB0aGUgY29tcG9uZW50IGNhbiBkb1xuICAgICAgLy8gaW5pdGlhbGl6YXRpb24gdGhhdCBpdCBub3JtYWxseSBkb2VzIHdoZW4gY29udGVudCBjaGFuZ2VzLlxuICAgICAgLy9cbiAgICAgIC8vIFRoaXMgd2lsbCBpbnZva2UgY29udGVudENoYW5nZWQoKSBoYW5kbGVycyBpbiBvdGhlciBtaXhpbnMuIEluIG9yZGVyXG4gICAgICAvLyB0aGF0IHRob3NlIG1peGlucyBoYXZlIGEgY2hhbmNlIHRvIGNvbXBsZXRlIHRoZWlyIG93biBpbml0aWFsaXphdGlvbixcbiAgICAgIC8vIHdlIGFkZCB0aGUgY29udGVudENoYW5nZWQoKSBjYWxsIHRvIHRoZSBtaWNyb3Rhc2sgcXVldWUuXG4gICAgICBtaWNyb3Rhc2soKCkgPT4gdGhpcy5jb250ZW50Q2hhbmdlZCgpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIGNvbnRlbnRzIG9mIHRoZSBjb21wb25lbnQgKGluY2x1ZGluZyBkaXN0cmlidXRlZFxuICAgICAqIGNoaWxkcmVuKSBoYXZlIGNoYW5nZWQuXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBhbHNvIGludm9rZWQgd2hlbiBhIGNvbXBvbmVudCBpcyBmaXJzdCBpbnN0YW50aWF0ZWQ7IHRoZVxuICAgICAqIGNvbnRlbnRzIGhhdmUgZXNzZW50aWFsbHkgXCJjaGFuZ2VkXCIgZnJvbSBiZWluZyBub3RoaW5nLiBUaGlzIGFsbG93cyB0aGVcbiAgICAgKiBjb21wb25lbnQgdG8gcGVyZm9ybSBpbml0aWFsIHByb2Nlc3Npbmcgb2YgaXRzIGNoaWxkcmVuLlxuICAgICAqL1xuICAgIGNvbnRlbnRDaGFuZ2VkKCkge1xuICAgICAgaWYgKHN1cGVyLmNvbnRlbnRDaGFuZ2VkKSB7IHN1cGVyLmNvbnRlbnRDaGFuZ2VkKCk7IH1cbiAgICAgIGxldCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnY29udGVudC1jaGFuZ2VkJyk7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgZXZlbnQgaXMgcmFpc2VkIHdoZW4gdGhlIGNvbXBvbmVudCdzIGNvbnRlbnRzIChpbmNsdWRpbmcgZGlzdHJpYnV0ZWRcbiAgICAgKiBjaGlsZHJlbikgaGF2ZSBjaGFuZ2VkLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIE9ic2VydmVDb250ZW50Q2hhbmdlc1xuICAgICAqIEBldmVudCBjb250ZW50LWNoYW5nZWRcbiAgICAgKi9cbiAgfVxuXG4gIHJldHVybiBPYnNlcnZlQ29udGVudENoYW5nZXM7XG59O1xuXG5cbi8vIFRPRE86IERlY2lkZSB3aGV0aGVyIHdlIHdhbnQgYW4gb3B0aW9uIHRvIHRyYWNrIGNoYW5nZXMgdG8gY2hpbGRyZW5cbi8vIGF0dHJpYnV0ZXMuXG5mdW5jdGlvbiBvYnNlcnZlQ29udGVudENoYW5nZXMoZWxlbWVudCkge1xuICBlbGVtZW50W2NvbnRlbnRDaGFuZ2VPYnNlcnZlclN5bWJvbF0gPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PlxuICAgIGVsZW1lbnQuY29udGVudENoYW5nZWQoKVxuICApO1xuICBlbGVtZW50W2NvbnRlbnRDaGFuZ2VPYnNlcnZlclN5bWJvbF0ub2JzZXJ2ZShlbGVtZW50LCB7XG4gICAgLy8gYXR0cmlidXRlczogdHJ1ZSxcbiAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlLFxuICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICBzdWJ0cmVlOiB0cnVlXG4gIH0pO1xufVxuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuL2NyZWF0ZVN5bWJvbCc7XG5pbXBvcnQgdG9nZ2xlQ2xhc3MgZnJvbSAnLi90b2dnbGVDbGFzcyc7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IGNsb3NlZFN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnY2xvc2VkJyk7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBPcGVuQ2xvc2UuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBhZGRzIGNsb3NlL29wZW4gc2VtYW50aWNzLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGRvZXMgbm90IHByb2R1Y2UgYW55IHVzZXItdmlzaWJsZSBlZmZlY3RzLiBJbnN0ZWFkIGl0IGFwcGxpZXNcbiAgICogYSBgYmFzaWMtY2xvc2VkYCBDU1MgY2xhc3MgdG8gdGhlIGNvbXBvbmVudCBob3N0IGlmIHRoZSBob3N0IGlzXG4gICAqIGNsb3NlZCwgYW5kIGEgYGJhc2ljLW9wZW5lZGAgY2xhc3MgaWYgb3BlbmVkLiBJdCBhbHNvIGludm9rZXMgYSBgcmVuZGVyYFxuICAgKiBmdW5jdGlvbiB0aGF0IGNhbiBiZSBvdmVycmlkZGVuIHRvIGFwcGx5IGN1c3RvbSBlZmZlY3RzLlxuICAgKi9cbiAgY2xhc3MgT3BlbkNsb3NlIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBhdHRhY2hlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmF0dGFjaGVkQ2FsbGJhY2spIHsgc3VwZXIuYXR0YWNoZWRDYWxsYmFjaygpOyB9XG4gICAgICB0aGlzLnJlbmRlcih0aGlzLmNsb3NlZCk7XG4gICAgfVxuXG4gICAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuXG4gICAgICAvLyBTZXQgZGVmYXVsdHMuXG4gICAgICBpZiAodHlwZW9mIHRoaXMuY2xvc2VkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLmNsb3NlZCA9IHRoaXMuZGVmYXVsdHMuY2xvc2VkO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsb3NlIHRoZSBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gc2V0dGluZyB0aGUgYGNsb3NlZGAgcHJvcGVydHkgdG8gdHJ1ZS5cbiAgICAgKi9cbiAgICBjbG9zZSgpIHtcbiAgICAgIHRoaXMuY2xvc2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHRoZSBjb21wb25lbnQgaXMgY3VyZW50bHkgY2xvc2VkLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cbiAgICBnZXQgY2xvc2VkKCkge1xuICAgICAgcmV0dXJuIHRoaXNbY2xvc2VkU3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IGNsb3NlZCh2YWx1ZSkge1xuICAgICAgaWYgKCdjbG9zZWQnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLmNsb3NlZCA9IHZhbHVlOyB9XG4gICAgICBpZiAodGhpc1tjbG9zZWRTeW1ib2xdICE9PSB2YWx1ZSkge1xuICAgICAgICB0aGlzW2Nsb3NlZFN5bWJvbF0gPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5yZW5kZXIodmFsdWUpO1xuXG4gICAgICAgIGxldCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnY2xvc2VkLWNoYW5nZWQnKTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgZGVmYXVsdHMoKSB7XG4gICAgICBsZXQgZGVmYXVsdHMgPSBzdXBlci5kZWZhdWx0cyB8fCB7fTtcbiAgICAgIGRlZmF1bHRzLmNsb3NlZCA9IGZhbHNlO1xuICAgICAgcmV0dXJuIGRlZmF1bHRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9wZW4gdGhlIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byBzZXR0aW5nIHRoZSBgY2xvc2VkYCBwcm9wZXJ0eSB0byBmYWxzZS5cbiAgICAgKi9cbiAgICBvcGVuKCkge1xuICAgICAgdGhpcy5jbG9zZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtIGN1c3RvbSByZW5kZXJpbmcgb2YgdGhlIGNsb3NlL29wZW4gdHJhbnNpdGlvbi5cbiAgICAgKlxuICAgICAqIFlvdSBjYW4gb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcGVyZm9ybSBjdXN0b20gZWZmZWN0cy4gSWYgeW91IGRvIHNvLFxuICAgICAqIGJlIHN1cmUgdG8gaW52b2tlIGBzdXBlcigpYCBpbiB5b3VyIGltcGxlbWVudGF0aW9uIHRvIGdldCB0aGUgYmFzZWxpbmVcbiAgICAgKiBiZWhhdmlvci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gY2xvc2luZyAtIFRydWUgaWYgdGhlIGNvbXBvbmVudCBpcyBiZWluZyBjbG9zZWQsXG4gICAgICogICAgICAgIGZhbHNlIGlmIGl0J3MgYmVpbmcgb3BlbmVkLlxuICAgICAqL1xuICAgIHJlbmRlcihjbG9zaW5nKSB7XG4gICAgICB0b2dnbGVDbGFzcyh0aGlzLCAnYmFzaWMtY2xvc2VkJywgY2xvc2luZyk7XG4gICAgICB0b2dnbGVDbGFzcyh0aGlzLCAnYmFzaWMtb3BlbmVkJywgIWNsb3NpbmcpO1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAhY2xvc2luZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlIHRoZSBjb21wb25lbnQncyBvcGVuL2Nsb3NlZCBzdGF0ZS5cbiAgICAgKi9cbiAgICB0b2dnbGUoKSB7XG4gICAgICB0aGlzLmNsb3NlZCA9ICF0aGlzLmNsb3NlZDtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBPcGVuQ2xvc2U7XG59O1xuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuL2NyZWF0ZVN5bWJvbCc7XG5pbXBvcnQgRnJhY3Rpb25hbFNlbGVjdGlvbiBmcm9tICcuL0ZyYWN0aW9uYWxTZWxlY3Rpb24nO1xuXG5cbi8vIFN5bWJvbHMgZm9yIHByaXZhdGUgZGF0YSBtZW1iZXJzIG9uIGFuIGVsZW1lbnQuXG5jb25zdCBhbmltYXRpb25TeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2FuaW1hdGlvbicpO1xuY29uc3QgbGFzdEFuaW1hdGlvblN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnbGFzdEFuaW1hdGlvbicpO1xuY29uc3QgcGxheWluZ0FuaW1hdGlvblN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnYW5pbWF0aW5nU2VsZWN0aW9uJyk7XG5jb25zdCBwcmV2aW91c1NlbGVjdGlvblN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgncHJldmlvdXNTZWxlY3Rpb24nKTtcbmNvbnN0IHNlbGVjdGlvbkFuaW1hdGlvbkR1cmF0aW9uU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdzZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvbicpO1xuY29uc3Qgc2VsZWN0aW9uQW5pbWF0aW9uRWZmZWN0U3ltYm9sID0gY3JlYXRlU3ltYm9sKCdzZWxlY3Rpb25BbmltYXRpb25FZmZlY3QnKTtcbmNvbnN0IHNlbGVjdGlvbkFuaW1hdGlvbktleWZyYW1lc1N5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnc2VsZWN0aW9uQW5pbWF0aW9uS2V5ZnJhbWVzJyk7XG5jb25zdCBzaG93VHJhbnNpdGlvblN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnc2hvd1RyYW5zaXRpb24nKTtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFNlbGVjdGlvbkFuaW1hdGlvbi4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1peGluKGJhc2UpIHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggdXNlcyBhbmltYXRpb24gdG8gc2hvdyB0cmFuc2l0aW9ucyBiZXR3ZWVuIHNlbGVjdGlvbiBzdGF0ZXMuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gY2FuIGJlIHVzZWQgYnkgY29tcG9uZW50cyB0aGF0IHdhbnQgdG8gcHJvdmlkZSB2aXNpYmxlXG4gICAqIGFuaW1hdGlvbnMgd2hlbiBjaGFuZ2luZyB0aGUgc2VsZWN0aW9uLiBGb3IgZXhhbXBsZSwgYSBjYXJvdXNlbCBjb21wb25lbnRcbiAgICogbWF5IHdhbnQgdG8gZGVmaW5lIGEgc2xpZGluZyBhbmltYXRpb24gZWZmZWN0IHNob3duIHdoZW4gbW92aW5nIGJldHdlZW5cbiAgICogaXRlbXMuXG4gICAqXG4gICAqIFRoZSBhbmltYXRpb24gaXMgZGVmaW5lZCBieSBhIGBzZWxlY3Rpb25BbmltYXRpb25LZXlmcmFtZXNgIHByb3BlcnR5OyBzZWVcbiAgICogdGhhdCBwcm9wZXJ0eSBmb3IgZGV0YWlscyBvbiBob3cgdG8gZGVmaW5lIHRoZXNlIGtleWZyYW1lcy4gVGhpcyBhbmltYXRpb25cbiAgICogd2lsbCBiZSB1c2VkIGluIHR3byB3YXlzLiBGaXJzdCwgd2hlbiBtb3Zpbmcgc3RyaWN0bHkgYmV0d2VlbiBpdGVtcywgdGhlXG4gICAqIGFuaW1hdGlvbiB3aWxsIHBsYXkgc21vb3RobHkgdG8gc2hvdyB0aGUgc2VsZWN0aW9uIGNoYW5naW5nLiBTZWNvbmQsIHRoZVxuICAgKiBhbmltYXRpb24gY2FuIGJlIHVzZWQgdG8gcmVuZGVyIHRoZSBzZWxlY3Rpb24gYXQgYSBmaXhlZCBwb2ludCBpbiB0aGVcbiAgICogdHJhbnNpdGlvbiBiZXR3ZWVuIHN0YXRlcy4gRS5nLiwgaWYgdGhlIHVzZXIgcGF1c2VzIGhhbGZ3YXkgdGhyb3VnaFxuICAgKiBkcmFnZ2luZyBhbiBlbGVtZW50IHVzaW5nIHRoZSBbU3dpcGVEaXJlY3Rpb25dKFN3aXBlRGlyZWN0aW9uLm1kKSBvclxuICAgKiBbVHJhY2twYWREaXJlY3Rpb25dKFRyYWNrcGFkRGlyZWN0aW9uLm1kKSBtaXhpbnMsIHRoZW4gdGhlIHNlbGVjdGlvblxuICAgKiBhbmltYXRpb24gd2lsbCBiZSBzaG93biBhdCB0aGUgcG9pbnQgZXhhY3RseSBoYWxmd2F5IHRocm91Z2guXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyBhIGNvbXBvbmVudCB0byBwcm92aWRlIGFuIGBpdGVtc2AgYXJyYXkgb2YgYWxsIGVsZW1lbnRzXG4gICAqIGluIHRoZSBsaXN0LCB3aGljaCBjYW4gYmUgcHJvdmlkZWQgdmlhIHRoZVxuICAgKiBbQ29udGVudEFzSXRlbXNdKENvbnRlbnRBc0l0ZW1zLm1kKSBtaXhpbi4gVGhpcyBtaXhpbiBhbHNvIGV4cGVjdHNcbiAgICogYHNlbGVjdGVkSW5kZXhgIGFuZCBgc2VsZWN0ZWRJdGVtYCBwcm9wZXJ0aWVzLCB3aGljaCBjYW4gYmUgcHJvdmlkZWQgdmlhXG4gICAqIHRoZSBbSXRlbXNTZWxlY3Rpb25dKEl0ZW1zU2VsZWN0aW9uLm1kKSBtaXhpbi5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBzdXBwb3J0cyBhIGBzZWxlY3Rpb25XcmFwc2AgcHJvcGVydHkuIFdoZW4gdHJ1ZSwgdGhlIHVzZXIgY2FuXG4gICAqIG5hdmlnYXRlIGZvcndhcmQgZnJvbSB0aGUgbGFzdCBpdGVtIGluIHRoZSBsaXN0IGFuZCB3cmFwIGFyb3VuZCB0byB0aGVcbiAgICogZmlyc3QgaXRlbSwgb3IgbmF2aWdhdGUgYmFja3dhcmQgZnJvbSB0aGUgZmlyc3QgaXRlbSBhbmQgd3JhcCBhcm91bmQgdG8gdGhlXG4gICAqIGxhc3QgaXRlbS5cbiAgICpcbiAgICogVGhpcyBtaXhpbiB1c2VzIHRoZSBXZWIgQW5pbWF0aW9ucyBBUEkuIEZvciB1c2Ugb24gYnJvd3NlcnMgd2hpY2hcbiAgICogZG8gbm90IHN1cHBvcnQgdGhhdCBBUEkgbmF0aXZlbHksIHlvdSB3aWxsIG5lZWQgdG8gbG9hZCB0aGVcbiAgICogW1dlYiBBbmltYXRpb25zIHBvbHlmaWxsXShodHRwczovL2dpdGh1Yi5jb20vd2ViLWFuaW1hdGlvbnMvd2ViLWFuaW1hdGlvbnMtanMpLlxuICAgKi9cbiAgY2xhc3MgU2VsZWN0aW9uQW5pbWF0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG5cbiAgICAgIC8vIFNldCBkZWZhdWx0cy5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5zZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvbiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvbiA9IHRoaXMuZGVmYXVsdHMuc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb247XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHRoaXMuc2VsZWN0aW9uQW5pbWF0aW9uRWZmZWN0ID09PSAndW5kZWZpbmVkJyAmJiB0aGlzLnNlbGVjdGlvbkFuaW1hdGlvbktleWZyYW1lcyA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uQW5pbWF0aW9uRWZmZWN0ID0gdGhpcy5kZWZhdWx0cy5zZWxlY3Rpb25BbmltYXRpb25FZmZlY3Q7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2hvd1RyYW5zaXRpb24gPSB0cnVlO1xuICAgIH1cblxuICAgIGdldCBkZWZhdWx0cygpIHtcbiAgICAgIGxldCBkZWZhdWx0cyA9IHN1cGVyLmRlZmF1bHRzIHx8IHt9O1xuICAgICAgZGVmYXVsdHMuc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb24gPSAyNTA7XG4gICAgICBkZWZhdWx0cy5zZWxlY3Rpb25BbmltYXRpb25FZmZlY3QgPSAnc2xpZGUnO1xuICAgICAgcmV0dXJuIGRlZmF1bHRzO1xuICAgIH1cblxuICAgIGl0ZW1BZGRlZChpdGVtKSB7XG4gICAgICAvLyBXZSBtYXJrIG5ldyBpdGVtcyBpbiB0aGUgbGlzdCBhcyBleHBsaWNpdGx5IHZpc2libGUgdG8gQVJJQS4gT3RoZXJ3aXNlLFxuICAgICAgLy8gd2hlbiBhbiBpdGVtIGlzbid0IHZpc2libGUgb24gdGhlIHNjcmVlbiwgQVJJQSB3aWxsIGFzc3VtZSB0aGUgaXRlbSBpc1xuICAgICAgLy8gb2Ygbm8gaW50ZXJlc3QgdG8gdGhlIHVzZXIsIGFuZCBsZWF2ZSBpdCBvdXQgb2YgdGhlIGFjY2Vzc2liaWxpdHkgdHJlZS5cbiAgICAgIC8vIElmIHRoZSBsaXN0IGNvbnRhaW5zIDEwIGl0ZW1zLCBidXQgb25seSAzIGFyZSB2aXNpYmxlLCBhIHNjcmVlbiByZWFkZXJcbiAgICAgIC8vIG1pZ2h0IHRoZW4gYW5ub3VuY2UgdGhlIGxpc3Qgb25seSBoYXMgMyBpdGVtcy4gVG8gZW5zdXJlIHRoYXQgc2NyZWVuXG4gICAgICAvLyByZWFkZXJzIGFuZCBvdGhlciBhc3Npc3RpdmUgdGVjaG5vbG9naWVzIGFubm91bmNlIHRoZSBjb3JyZWN0IHRvdGFsXG4gICAgICAvLyBudW1iZXIgb2YgaXRlbXMsIHdlIGV4cGxpY2l0bHkgbWFyayBhbGwgaXRlbXMgYXMgbm90IGhpZGRlbi4gVGhpcyB3aWxsXG4gICAgICAvLyBleHBvc2UgdGhlbSBhbGwgaW4gdGhlIGFjY2Vzc2liaWxpdHkgdHJlZSwgZXZlbiB0aGUgaXRlbXMgd2hpY2ggYXJlXG4gICAgICAvLyBjdXJyZW50bHkgbm90IHJlbmRlcmVkLlxuICAgICAgLy9cbiAgICAgIC8vIFRPRE86IEdlbmVyYWxseSBzcGVha2luZywgdGhpcyBlbnRpcmUgbWl4aW4gYXNzdW1lcyB0aGF0IHRoZSB1c2VyIGNhblxuICAgICAgLy8gbmF2aWdhdGUgdGhyb3VnaCBhbGwgaXRlbXMgaW4gYSBsaXN0LiBCdXQgYW4gYXBwIGNvdWxkIHN0eWxlIGFuIGl0ZW0gYXNcbiAgICAgIC8vIGRpc3BsYXk6bm9uZSBvciB2aXNpYmlsaXR5OmhpZGRlbiBiZWNhdXNlIHRoZSB1c2VyIGlzIG5vdCBhbGxvd2VkIHRvXG4gICAgICAvLyBpbnRlcmFjdCB3aXRoIHRoYXQgaXRlbSBhdCB0aGUgbW9tZW50LiBTdXBwb3J0IGZvciB0aGlzIHNjZW5hcmlvIHNob3VsZFxuICAgICAgLy8gYmUgYWRkZWQuIFRoaXMgd291bGQgZW50YWlsIGNoYW5naW5nIGFsbCBsb2NhdGlvbnMgd2hlcmUgYSBtaXhpblxuICAgICAgLy8gZnVuY3Rpb24gaXMgY291bnRpbmcgaXRlbXMsIGl0ZXJhdGluZyBvdmVyIHRoZSAodmlzaWJsZSkgaXRlbXMsIGFuZFxuICAgICAgLy8gc2hvd2luZyBvciBoaWRpbmcgaXRlbXMuIEFtb25nIG90aGVyIHRoaW5ncywgdGhlIGNvZGUgYmVsb3cgdG8gbWFrZVxuICAgICAgLy8gaXRlbXMgdmlzaWJsZSB0byBBUklBIHdvdWxkIG5lZWQgdG8gZGlzY3JpbWluYXRlIGJldHdlZW4gaXRlbXMgd2hpY2hcbiAgICAgIC8vIGFyZSBpbnZpc2libGUgYmVjYXVzZSBvZiBhbmltYXRpb24gc3RhdGUsIG9yIGludmlzaWJsZSBiZWNhdXNlIHRoZSB1c2VyXG4gICAgICAvLyBzaG91bGRuJ3QgaW50ZXJhY3Qgd2l0aCB0aGVtLlxuICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgZmFsc2UpO1xuICAgIH1cblxuICAgIGl0ZW1zQ2hhbmdlZCgpIHtcbiAgICAgIGlmIChzdXBlci5pdGVtc0NoYW5nZWQpIHsgc3VwZXIuaXRlbXNDaGFuZ2VkKCk7IH1cbiAgICAgIHJlc2V0QW5pbWF0aW9ucyh0aGlzKTtcbiAgICAgIHJlbmRlclNlbGVjdGlvbih0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIGZyYWN0aW9uYWwgdmFsdWUgaW5kaWNhdGluZyBob3cgZmFyIHRoZSB1c2VyIGhhcyBjdXJyZW50bHkgYWR2YW5jZWQgdG9cbiAgICAgKiB0aGUgbmV4dC9wcmV2aW91cyBpdGVtLiBFLmcuLCBhIGBzZWxlY3RlZEZyYWN0aW9uYCBvZiAzLjUgaW5kaWNhdGVzIHRoZVxuICAgICAqIHVzZXIgaXMgaGFsZndheSBiZXR3ZWVuIGl0ZW1zIDMgYW5kIDQuXG4gICAgICpcbiAgICAgKiBGb3IgbW9yZSBkZXRhaWxzLCBzZWUgdGhlIFtGcmFjdGlvbmFsU2VsZWN0aW9uXShGcmFjdGlvbmFsU2VsZWN0aW9uLm1kKVxuICAgICAqIG1peGluLlxuICAgICAqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0ZWRGcmFjdGlvbigpIHtcbiAgICAgIHJldHVybiBzdXBlci5zZWxlY3RlZEZyYWN0aW9uIHx8IDA7XG4gICAgfVxuICAgIHNldCBzZWxlY3RlZEZyYWN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoJ3NlbGVjdGVkRnJhY3Rpb24nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkRnJhY3Rpb24gPSB2YWx1ZTsgfVxuICAgICAgcmVuZGVyU2VsZWN0aW9uKHRoaXMsIHRoaXMuc2VsZWN0ZWRJbmRleCwgdmFsdWUpO1xuICAgIH1cblxuICAgIGdldCBzZWxlY3RlZEl0ZW0oKSB7XG4gICAgICByZXR1cm4gc3VwZXIuc2VsZWN0ZWRJdGVtO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0ZWRJdGVtKGl0ZW0pIHtcbiAgICAgIGlmICgnc2VsZWN0ZWRJdGVtJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEl0ZW0gPSBpdGVtOyB9XG4gICAgICByZW5kZXJTZWxlY3Rpb24odGhpcywgdGhpcy5zZWxlY3RlZEluZGV4LCAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZHVyYXRpb24gb2YgYSBzZWxlY3Rpb24gYW5pbWF0aW9uIGluIG1pbGxpc2Vjb25kcy5cbiAgICAgKlxuICAgICAqIFRoaXMgbWVhc3VyZXMgdGhlIGFtb3VudCBvZiB0aW1lIHJlcXVpcmVkIGZvciBhIHNlbGVjdGlvbiBhbmltYXRpb24gdG9cbiAgICAgKiBjb21wbGV0ZS4gVGhpcyBudW1iZXIgcmVtYWlucyBjb25zdGFudCwgZXZlbiBpZiB0aGUgbnVtYmVyIG9mIGl0ZW1zIGJlaW5nXG4gICAgICogYW5pbWF0ZWQgaW5jcmVhc2VzLlxuICAgICAqXG4gICAgICogVGhlIGRlZmF1bHQgdmFsdWUgaXMgMjUwIG1pbGxpc2Vjb25kcyAoYSBxdWFydGVyIGEgc2Vjb25kKS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQGRlZmF1bHQgMjUwXG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGlvbkFuaW1hdGlvbkR1cmF0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXNbc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb25TeW1ib2xdO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb24odmFsdWUpIHtcbiAgICAgIGlmICgnc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb24nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGlvbkFuaW1hdGlvbkR1cmF0aW9uID0gdmFsdWU7IH1cbiAgICAgIHRoaXNbc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb25TeW1ib2xdID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIG5hbWUgb2YgYSBzdGFuZGFyZCBzZWxlY3Rpb24gYW5pbWF0aW9uIGVmZmVjdC5cbiAgICAgKlxuICAgICAqIFRoaXMgaXMgYSBzaG9ydGhhbmQgZm9yIHNldHRpbmcgdGhlIGBzZWxlY3Rpb25BbmltYXRpb25LZXlmcmFtZXNgXG4gICAgICogcHJvcGVydHkgdG8gc3RhbmRhcmQga2V5ZnJhbWVzLiBTdXBwb3J0ZWQgc3RyaW5nIHZhbHVlczpcbiAgICAgKlxuICAgICAqICogXCJjcm9zc2ZhZGVcIlxuICAgICAqICogXCJyZXZlYWxcIlxuICAgICAqICogXCJyZXZlYWxXaXRoRmFkZVwiXG4gICAgICogKiBcInNob3dBZGphY2VudFwiXG4gICAgICogKiBcInNsaWRlXCJcbiAgICAgKiAqIFwic2xpZGVXaXRoR2FwXCJcbiAgICAgKlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQGRlZmF1bHQgXCJzbGlkZVwiXG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGlvbkFuaW1hdGlvbkVmZmVjdCgpIHtcbiAgICAgIHJldHVybiB0aGlzW3NlbGVjdGlvbkFuaW1hdGlvbkVmZmVjdFN5bWJvbF07XG4gICAgfVxuICAgIHNldCBzZWxlY3Rpb25BbmltYXRpb25FZmZlY3QodmFsdWUpIHtcbiAgICAgIGlmICgnc2VsZWN0aW9uQW5pbWF0aW9uRWZmZWN0JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3Rpb25BbmltYXRpb25FZmZlY3QgPSB2YWx1ZTsgfVxuICAgICAgdGhpc1tzZWxlY3Rpb25BbmltYXRpb25FZmZlY3RTeW1ib2xdID0gdmFsdWU7XG4gICAgICB0aGlzLnNlbGVjdGlvbkFuaW1hdGlvbktleWZyYW1lcyA9IG1peGluLnN0YW5kYXJkRWZmZWN0S2V5ZnJhbWVzW3ZhbHVlXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUga2V5ZnJhbWVzIHRoYXQgZGVmaW5lIGFuIGFuaW1hdGlvbiB0aGF0IHBsYXlzIGZvciBhbiBpdGVtIHdoZW4gbW92aW5nXG4gICAgICogZm9yd2FyZCBpbiB0aGUgc2VxdWVuY2UuXG4gICAgICpcbiAgICAgKiBUaGlzIGlzIGFuIGFycmF5IG9mIENTUyBydWxlcyB0aGF0IHdpbGwgYmUgYXBwbGllZC4gVGhlc2UgYXJlIHVzZWQgYXNcbiAgICAgKiBba2V5ZnJhbWVzXShodHRwOi8vdzNjLmdpdGh1Yi5pby93ZWItYW5pbWF0aW9ucy8ja2V5ZnJhbWVzLXNlY3Rpb24pXG4gICAgICogdG8gYW5pbWF0ZSB0aGUgaXRlbSB3aXRoIHRoZVxuICAgICAqIFtXZWIgQW5pbWF0aW9ucyBBUEldKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9hbmltYXRpb24pLlxuICAgICAqXG4gICAgICogVGhlIGFuaW1hdGlvbiByZXByZXNlbnRzIHRoZSBzdGF0ZSBvZiB0aGUgbmV4dCBpdGVtIGFzIGl0IG1vdmVzIGZyb21cbiAgICAgKiBjb21wbGV0ZWx5IHVuc2VsZWN0ZWQgKG9mZnN0YWdlLCB1c3VhbGx5IHJpZ2h0KSwgdG8gc2VsZWN0ZWQgKGNlbnRlclxuICAgICAqIHN0YWdlKSwgdG8gY29tcGxldGVseSB1bnNlbGVjdGVkIChvZmZzdGFnZSwgdXN1YWxseSBsZWZ0KS4gVGhlIGNlbnRlciB0aW1lXG4gICAgICogb2YgdGhlIGFuaW1hdGlvbiBzaG91bGQgY29ycmVzcG9uZCB0byB0aGUgaXRlbSdzIHF1aXNjZW50IHNlbGVjdGVkIHN0YXRlLFxuICAgICAqIHR5cGljYWxseSBpbiB0aGUgY2VudGVyIG9mIHRoZSBzdGFnZSBhbmQgYXQgdGhlIGl0ZW0ncyBsYXJnZXN0IHNpemUuXG4gICAgICpcbiAgICAgKiBUaGUgZGVmYXVsdCBmb3J3YXJkIGFuaW1hdGlvbiBpcyBhIHNtb290aCBzbGlkZSBhdCBmdWxsIHNpemUgZnJvbSByaWdodCB0b1xuICAgICAqIGxlZnQuXG4gICAgICpcbiAgICAgKiBXaGVuIG1vdmluZyB0aGUgc2VsZWN0aW9uIGJhY2t3YXJkLCB0aGlzIGFuaW1hdGlvbiBpcyBwbGF5ZWQgaW4gcmV2ZXJzZS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtjc3NSdWxlc1tdfVxuICAgICAqL1xuICAgIGdldCBzZWxlY3Rpb25BbmltYXRpb25LZXlmcmFtZXMoKSB7XG4gICAgICAvLyBTdGFuZGFyZCBhbmltYXRpb24gc2xpZGVzIGxlZnQvcmlnaHQsIGtlZXBzIGFkamFjZW50IGl0ZW1zIG91dCBvZiB2aWV3LlxuICAgICAgcmV0dXJuIHRoaXNbc2VsZWN0aW9uQW5pbWF0aW9uS2V5ZnJhbWVzU3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGlvbkFuaW1hdGlvbktleWZyYW1lcyh2YWx1ZSkge1xuICAgICAgaWYgKCdzZWxlY3Rpb25BbmltYXRpb25LZXlmcmFtZXMnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGlvbkFuaW1hdGlvbktleWZyYW1lcyA9IHZhbHVlOyB9XG4gICAgICB0aGlzW3NlbGVjdGlvbkFuaW1hdGlvbktleWZyYW1lc1N5bWJvbF0gPSB2YWx1ZTtcbiAgICAgIHJlc2V0QW5pbWF0aW9ucyh0aGlzKTtcbiAgICAgIHJlbmRlclNlbGVjdGlvbih0aGlzKTtcbiAgICB9XG5cbiAgICBnZXQgc2VsZWN0aW9uV3JhcHMoKSB7XG4gICAgICByZXR1cm4gc3VwZXIuc2VsZWN0aW9uV3JhcHM7XG4gICAgfVxuICAgIHNldCBzZWxlY3Rpb25XcmFwcyh2YWx1ZSkge1xuICAgICAgaWYgKCdzZWxlY3Rpb25XcmFwcycgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0aW9uV3JhcHMgPSB2YWx1ZTsgfVxuICAgICAgcmVzZXRBbmltYXRpb25zKHRoaXMpO1xuICAgICAgcmVuZGVyU2VsZWN0aW9uKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERldGVybWluZSB3aGV0aGVyIGEgdHJhbnNpdGlvbiBzaG91bGQgYmUgc2hvd24gZHVyaW5nIHNlbGVjdGlvbi5cbiAgICAgKlxuICAgICAqIENvbXBvbmVudHMgbGlrZSBjYXJvdXNlbHMgb2Z0ZW4gZGVmaW5lIGFuaW1hdGVkIENTUyB0cmFuc2l0aW9ucyBmb3JcbiAgICAgKiBzbGlkaW5nIGVmZmVjdHMuIFN1Y2ggYSB0cmFuc2l0aW9uIHNob3VsZCB1c3VhbGx5ICpub3QqIGJlIGFwcGxpZWQgd2hpbGVcbiAgICAgKiB0aGUgdXNlciBpcyBkcmFnZ2luZywgYmVjYXVzZSBhIENTUyBhbmltYXRpb24gd2lsbCBpbnRyb2R1Y2UgYSBsYWcgdGhhdFxuICAgICAqIG1ha2VzIHRoZSBzd2lwZSBmZWVsIHNsdWdnaXNoLiBJbnN0ZWFkLCBhcyBsb25nIGFzIHRoZSB1c2VyIGlzIGRyYWdnaW5nXG4gICAgICogd2l0aCB0aGVpciBmaW5nZXIgZG93biwgdGhlIHRyYW5zaXRpb24gc2hvdWxkIGJlIHN1cHByZXNzZWQuIFdoZW4gdGhlXG4gICAgICogdXNlciByZWxlYXNlcyB0aGVpciBmaW5nZXIsIHRoZSB0cmFuc2l0aW9uIGNhbiBiZSByZXN0b3JlZCwgYWxsb3dpbmcgdGhlXG4gICAgICogYW5pbWF0aW9uIHRvIHNob3cgdGhlIGNhcm91c2VsIHNsaWRpbmcgaW50byBpdHMgZmluYWwgcG9zaXRpb24uXG4gICAgICpcbiAgICAgKiBOb3RlOiBUaGlzIHByb3BlcnR5IGlzIG9ubHkgaW50ZW5kZWQgdG8gbGV0IGEgY29tcG9uZW50IGNvb3BlcmF0ZSB3aXRoXG4gICAgICogbWl4aW5zIHRoYXQgbWF5IGJlIGFwcGxpZWQgdG8gaXQsIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gbGV0IHNvbWVvbmVcbiAgICAgKiB1c2luZyBjb21wb25lbnQgcGVybWFuZW50bHkgZW5hYmxlIG9yIGRpc2FibGUgdHJhbnNpdGlvbiBlZmZlY3RzLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59IHRydWUgaWYgYSBjb21wb25lbnQtcHJvdmlkZWQgdHJhbnNpdGlvbiBzaG91bGQgYmUgc2hvd24sXG4gICAgICogZmFsc2UgaWYgbm90LlxuICAgICAqL1xuICAgIC8vIFRPRE86IFJlbmFtZSAoYW5kIGZsaXAgbWVhbmluZykgdG8gc29tZXRoaW5nIGxpa2UgZHJhZ2dpbmcoKT9cbiAgICBnZXQgc2hvd1RyYW5zaXRpb24oKSB7XG4gICAgICByZXR1cm4gc3VwZXIuc2hvd1RyYW5zaXRpb24gfHwgdGhpc1tzaG93VHJhbnNpdGlvblN5bWJvbF07XG4gICAgfVxuICAgIHNldCBzaG93VHJhbnNpdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKCdzaG93VHJhbnNpdGlvbicgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2hvd1RyYW5zaXRpb24gPSB2YWx1ZTsgfVxuICAgICAgdGhpc1tzaG93VHJhbnNpdGlvblN5bWJvbF0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gU2VsZWN0aW9uQW5pbWF0aW9uO1xufVxuXG5cbi8vIFdlIGV4cG9zZSBoZWxwZXJzIG9uIHRoZSBtaXhpbiBmdW5jdGlvbiB0aGF0IHdlIHdhbnQgdG8gYmUgYWJsZSB0byB1bml0IHRlc3QuXG4vLyBTaW5jZSB0aGVzZSBhcmUgb24gdGhlIGZ1bmN0aW9uLCBub3Qgb24gdGhlIGNsYXNzIGVtaXR0ZWQgYnkgdGhlIGZ1bmN0aW9uLFxuLy8gdGhleSBkb24ndCBlbmQgdXAgZ2V0dGluZyBleHBvc2VkIG9uIGFjdHVhbCBlbGVtZW50IGluc3RhbmNlcy5cbm1peGluLmhlbHBlcnMgPSB7XG5cbiAgLypcbiAgICogQ2FsY3VsYXRlIHRoZSBhbmltYXRpb24gZnJhY3Rpb25zIGZvciBhbiBlbGVtZW50J3MgaXRlbXMgYXQgdGhlIGdpdmVuXG4gICAqIHNlbGVjdGlvbiBwb2ludC4gVGhpcyBpcyB1c2VkIHdoZW4gcmVuZGVyaW5nIHRoZSBlbGVtZW50J3Mgc2VsZWN0aW9uIHN0YXRlXG4gICAqIGluc3RhbnRhbmVvdXNseS5cbiAgICpcbiAgICogVGhpcyBmdW5jdGlvbiBjb25zaWRlcnMgdGhlIHNlbGVjdGVkSW5kZXggcGFyYW1ldGVyLCB3aGljaCBjYW4gYmUgYSB3aG9sZVxuICAgKiBvciBmcmFjdGlvbmFsIG51bWJlciwgYW5kIGRldGVybWluZXMgd2hpY2ggaXRlbXMgd2lsbCBiZSB2aXNpYmxlIGF0IHRoYXRcbiAgICogaW5kZXguIFRoaXMgZnVuY3Rpb24gdGhlbiBjYWxjdWxhdGVzIGEgY29ycmVzcG9uZGluZyBhbmltYXRpb24gZnJhY3Rpb246IGFcbiAgICogbnVtYmVyIGJldHdlZW4gMCBhbmQgMSBpbmRpY2F0aW5nIGhvdyBmYXIgdGhyb3VnaCB0aGUgc2VsZWN0aW9uIGFuaW1hdGlvblxuICAgKiBhbiBpdGVtIHNob3VsZCBiZSBzaG93biwgb3IgbnVsbCBpZiB0aGUgaXRlbSBzaG91bGQgbm90IGJlIHZpc2libGUgYXQgdGhhdFxuICAgKiBzZWxlY3Rpb24gaW5kZXguIFRoZXNlIGZyYWN0aW9ucyBhcmUgcmV0dXJuZWQgYXMgYW4gYXJyYXksIHdoZXJlIHRoZVxuICAgKiBhbmltYXRpb24gZnJhY3Rpb24gYXQgcG9zaXRpb24gTiBjb3JyZXNwb25kcyB0byBob3cgaXRlbSBOIHNob3VsZCBiZSBzaG93bi5cbiAgICovXG4gIGFuaW1hdGlvbkZyYWN0aW9uc0ZvclNlbGVjdGlvbihlbGVtZW50LCBzZWxlY3Rpb24pIHtcblxuICAgIGxldCBpdGVtcyA9IGVsZW1lbnQuaXRlbXM7XG4gICAgaWYgKCFpdGVtcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBpdGVtQ291bnQgPSBpdGVtcy5sZW5ndGg7XG4gICAgbGV0IHNlbGVjdGlvbldyYXBzID0gZWxlbWVudC5zZWxlY3Rpb25XcmFwcztcblxuICAgIHJldHVybiBpdGVtcy5tYXAoKGl0ZW0sIGl0ZW1JbmRleCkgPT4ge1xuICAgICAgLy8gSG93IG1hbnkgc3RlcHMgZnJvbSB0aGUgc2VsZWN0aW9uIHBvaW50IHRvIHRoaXMgaXRlbT9cbiAgICAgIGxldCBzdGVwcyA9IHN0ZXBzVG9JbmRleChpdGVtQ291bnQsIHNlbGVjdGlvbldyYXBzLCBzZWxlY3Rpb24sIGl0ZW1JbmRleCk7XG4gICAgICAvLyBUbyBjb252ZXJ0IHN0ZXBzIHRvIGFuaW1hdGlvbiBmcmFjdGlvbjpcbiAgICAgIC8vIHN0ZXBzICAgICAgYW5pbWF0aW9uIGZyYWN0aW9uXG4gICAgICAvLyAgMSAgICAgICAgIDAgICAgIChzdGFnZSByaWdodClcbiAgICAgIC8vICAwICAgICAgICAgMC41ICAgKGNlbnRlciBzdGFnZSlcbiAgICAgIC8vIC0xICAgICAgICAgMSAgICAgKHN0YWdlIGxlZnQpXG4gICAgICBsZXQgYW5pbWF0aW9uRnJhY3Rpb24gPSAoMSAtIHN0ZXBzKSAvIDI7XG4gICAgICByZXR1cm4gKGFuaW1hdGlvbkZyYWN0aW9uID49IDAgJiYgYW5pbWF0aW9uRnJhY3Rpb24gPD0gMSkgP1xuICAgICAgICBhbmltYXRpb25GcmFjdGlvbiA6XG4gICAgICAgIG51bGw7IC8vIE91dHNpZGUgYW5pbWF0aW9uIHJhbmdlXG4gICAgfSk7XG4gIH0sXG5cbiAgLypcbiAgICogQ2FsY3VsYXRlIHRoZSBhbmltYXRpb24gdGltaW5ncyB0aGF0IHNob3VsZCBiZSB1c2VkIHRvIHNtb290aGx5IGFuaW1hdGUgdGhlXG4gICAqIGVsZW1lbnQncyBpdGVtcyBmcm9tIG9uZSBzZWxlY3Rpb24gc3RhdGUgdG8gYW5vdGhlci5cbiAgICpcbiAgICogVGhpcyByZXR1cm5zIGFuIGFycmF5IG9mIHRpbWluZ3MsIHdoZXJlIHRoZSB0aW1pbmcgYXQgcG9zaXRpb24gTiBzaG91bGQgYmVcbiAgICogdXNlZCB0byBhbmltYXRlIGl0ZW0gTi4gSWYgYW4gaXRlbSdzIHRpbWluZyBpcyBudWxsLCB0aGVuIHRoYXQgaXRlbSBzaG91bGRcbiAgICogbm90IHRha2UgcGxhY2UgaW4gdGhlIGFuaW1hdGlvbiwgYW5kIHNob3VsZCBiZSBoaWRkZW4gaW5zdGVhZC5cbiAgICovXG4gIGVmZmVjdFRpbWluZ3NGb3JTZWxlY3Rpb25BbmltYXRpb24oZWxlbWVudCwgZnJvbVNlbGVjdGlvbiwgdG9TZWxlY3Rpb24pIHtcblxuICAgIGxldCBpdGVtcyA9IGVsZW1lbnQuaXRlbXM7XG4gICAgaWYgKCFpdGVtcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgaXRlbUNvdW50ID0gaXRlbXMubGVuZ3RoO1xuICAgIGxldCBzZWxlY3Rpb25XcmFwcyA9IGVsZW1lbnQuc2VsZWN0aW9uV3JhcHM7XG4gICAgbGV0IHRvSW5kZXggPSBGcmFjdGlvbmFsU2VsZWN0aW9uLmhlbHBlcnMud3JhcHBlZFNlbGVjdGlvblBhcnRzKHRvU2VsZWN0aW9uLCBpdGVtQ291bnQsIHNlbGVjdGlvbldyYXBzKS5pbmRleDtcbiAgICBsZXQgdG90YWxTdGVwcyA9IHN0ZXBzVG9JbmRleChpdGVtQ291bnQsIHNlbGVjdGlvbldyYXBzLCBmcm9tU2VsZWN0aW9uLCB0b1NlbGVjdGlvbik7XG4gICAgbGV0IGRpcmVjdGlvbiA9IHRvdGFsU3RlcHMgPj0gMCA/ICdub3JtYWwnOiAncmV2ZXJzZSc7XG4gICAgbGV0IGZpbGwgPSAnYm90aCc7XG4gICAgbGV0IHRvdGFsRHVyYXRpb24gPSBlbGVtZW50LnNlbGVjdGlvbkFuaW1hdGlvbkR1cmF0aW9uO1xuICAgIGxldCBzdGVwRHVyYXRpb24gPSB0b3RhbFN0ZXBzICE9PSAwID9cbiAgICAgIHRvdGFsRHVyYXRpb24gKiAyIC8gTWF0aC5jZWlsKE1hdGguYWJzKHRvdGFsU3RlcHMpKSA6XG4gICAgICAwOyAgLy8gTm8gc3RlcHMgcmVxdWlyZWQsIGFuaW1hdGlvbiB3aWxsIGJlIGluc3RhbnRlbm91cy5cblxuICAgIGxldCB0aW1pbmdzID0gaXRlbXMubWFwKChpdGVtLCBpdGVtSW5kZXgpID0+IHtcbiAgICAgIGxldCBzdGVwcyA9IHN0ZXBzVG9JbmRleChpdGVtQ291bnQsIHNlbGVjdGlvbldyYXBzLCBpdGVtSW5kZXgsIHRvU2VsZWN0aW9uKTtcbiAgICAgIC8vIElmIHdlIGluY2x1ZGUgdGhpcyBpdGVtIGluIHRoZSBzdGFnZ2VyZWQgc2VxdWVuY2Ugb2YgYW5pbWF0aW9ucyB3ZSdyZVxuICAgICAgLy8gY3JlYXRpbmcsIHdoZXJlIHdvdWxkIHRoZSBpdGVtIGFwcGVhciBpbiB0aGUgc2VxdWVuY2U/XG4gICAgICBsZXQgcG9zaXRpb25JblNlcXVlbmNlID0gdG90YWxTdGVwcyAtIHN0ZXBzO1xuICAgICAgaWYgKHRvdGFsU3RlcHMgPCAwKSB7XG4gICAgICAgIHBvc2l0aW9uSW5TZXF1ZW5jZSA9IC1wb3NpdGlvbkluU2VxdWVuY2U7XG4gICAgICB9XG4gICAgICAvLyBTbywgaXMgdGhpcyBpdGVtIHJlYWxseSBpbmNsdWRlZCBpbiB0aGUgc2VxdWVuY2U/XG4gICAgICBpZiAoTWF0aC5jZWlsKHBvc2l0aW9uSW5TZXF1ZW5jZSkgPj0gMCAmJiBwb3NpdGlvbkluU2VxdWVuY2UgPD0gTWF0aC5hYnModG90YWxTdGVwcykpIHtcbiAgICAgICAgLy8gTm90ZSB0aGF0IGRlbGF5IGZvciBmaXJzdCBpdGVtIHdpbGwgYmUgbmVnYXRpdmUuIFRoYXQgd2lsbCBjYXVzZVxuICAgICAgICAvLyB0aGUgYW5pbWF0aW9uIHRvIHN0YXJ0IGhhbGZ3YXkgdGhyb3VnaCwgd2hpY2ggaXMgd2hhdCB3ZSB3YW50LlxuICAgICAgICBsZXQgZGVsYXkgPSBzdGVwRHVyYXRpb24gKiAocG9zaXRpb25JblNlcXVlbmNlIC0gMSkvMjtcbiAgICAgICAgbGV0IGVuZERlbGF5ID0gaXRlbUluZGV4ID09PSB0b0luZGV4ID9cbiAgICAgICAgICAtc3RlcER1cmF0aW9uLzIgOiAgIC8vIFN0b3AgaGFsZndheSB0aHJvdWdoLlxuICAgICAgICAgIDA7ICAgICAgICAgICAgICAvLyBQbGF5IGFuaW1hdGlvbiB1bnRpbCBlbmQuXG4gICAgICAgIHJldHVybiB7IGR1cmF0aW9uOiBzdGVwRHVyYXRpb24sIGRpcmVjdGlvbiwgZmlsbCwgZGVsYXksIGVuZERlbGF5IH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB0aW1pbmdzO1xuICB9XG5cbn07XG5cblxuLy8gS2V5ZnJhbWVzIGZvciBzdGFuZGFyZCBzZWxlY3Rpb24gYW5pbWF0aW9uIGVmZmVjdHMuXG5taXhpbi5zdGFuZGFyZEVmZmVjdEtleWZyYW1lcyA9IHtcblxuICAvLyBTaW1wbGUgY3Jvc3NmYWRlXG4gIGNyb3NzZmFkZTogW1xuICAgIHsgb3BhY2l0eTogMCB9LFxuICAgIHsgb3BhY2l0eTogMSB9LFxuICAgIHsgb3BhY2l0eTogMCB9XG4gIF0sXG5cbiAgLy8gUmV2ZWFsLCBhcyBpZiBzbGlkaW5nIHRoZSB0b3AgY2FyZCBvZmYgYSBkZWNrIG9mIGNhcmRzXG4gIHJldmVhbDogW1xuICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwJSknLCB6SW5kZXg6IDAgfSxcbiAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCUpJywgekluZGV4OiAxIH0sXG4gICAgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC0xMDAlKScsIHpJbmRleDogMiB9XG4gIF0sXG5cbiAgLy8gR29vZ2xlIFBob3Rvcy1zdHlsZSByZXZlYWwtd2l0aC1mYWRlIGFuaW1hdGlvblxuICByZXZlYWxXaXRoRmFkZTogW1xuICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwJSkgc2NhbGUoMC43NSknLCBvcGFjaXR5OiAwLCB6SW5kZXg6IDAgfSxcbiAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCUpIHNjYWxlKDEuMCknLCBvcGFjaXR5OiAxLCB6SW5kZXg6IDEgfSxcbiAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTEwMCUpIHNjYWxlKDEuMCknLCBvcGFjaXR5OiAxLCB6SW5kZXg6IDIgfVxuICBdLFxuXG4gIC8vIENhcm91c2VsIHZhcmlhbnQgd2l0aCBhIGJpdCBvZiBvZmYtc3RhZ2UgZWxlbWVudHMgc2hvd2luZ1xuICBzaG93QWRqYWNlbnQ6IFtcbiAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoNzglKSBzY2FsZSgwLjcpJywgekluZGV4OiAwIH0sXG4gICAgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDAlKSBzY2FsZSgwLjgyKScsIHpJbmRleDogMSB9LFxuICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNzglKSBzY2FsZSgwLjcpJywgekluZGV4OiAwIH1cbiAgXSxcblxuICAvLyBTaW1wbGUgc2xpZGVcbiAgc2xpZGU6IFtcbiAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMTAwJSknIH0sXG4gICAgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC0xMDAlKScgfVxuICBdLFxuXG4gIC8vIFNsaWRlLCB3aXRoIGEgZ2FwIGJldHdlZW5cbiAgc2xpZGVXaXRoR2FwOiBbXG4gICAgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDExMCUpJyB9LFxuICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtMTEwJSknIH1cbiAgXVxuXG59O1xuXG5cbi8qXG4gKiBTbW9vdGhseSBhbmltYXRlIHRoZSBzZWxlY3Rpb24gYmV0d2VlbiB0aGUgaW5kaWNhdGVkIFwiZnJvbVwiIGFuZCBcInRvXCJcbiAqIGluZGljZXMuIFRoZSBmb3JtZXIgY2FuIGJlIGEgZnJhY3Rpb24sIGUuZy4sIHdoZW4gdGhlIHVzZXIgcmVsZWFzZXMgYSBmaW5nZXJcbiAqIHRvIGNvbXBsZXRlIGEgdG91Y2ggZHJhZywgYW5kIHRoZSBzZWxlY3Rpb24gd2lsbCBzbmFwIHRvIHRoZSBjbG9zZXN0IHdob2xlXG4gKiBpbmRleC5cbiAqL1xuZnVuY3Rpb24gYW5pbWF0ZVNlbGVjdGlvbihlbGVtZW50LCBmcm9tU2VsZWN0aW9uLCB0b1NlbGVjdGlvbikge1xuXG4gIHJlc2V0QW5pbWF0aW9ucyhlbGVtZW50KTtcblxuICBpZiAoZWxlbWVudFtsYXN0QW5pbWF0aW9uU3ltYm9sXSkge1xuICAgIC8vIENhbmNlbCB0aGUgZWZmZWN0cyBvZiB0aGUgbGFzdCBzZWxlY3Rpb24gYW5pbWF0aW9uIGluIHByb2dyZXNzLlxuICAgIGVsZW1lbnRbbGFzdEFuaW1hdGlvblN5bWJvbF0ub25maW5pc2ggPSBudWxsO1xuICAgIGVsZW1lbnRbbGFzdEFuaW1hdGlvblN5bWJvbF0gPSBudWxsO1xuICB9XG5cbiAgLy8gQ2FsY3VsYXRlIHRoZSBhbmltYXRpb24gdGltaW5ncy5cbiAgbGV0IGl0ZW1zID0gZWxlbWVudC5pdGVtcztcbiAgbGV0IGtleWZyYW1lcyA9IGVsZW1lbnQuc2VsZWN0aW9uQW5pbWF0aW9uS2V5ZnJhbWVzO1xuICBlbGVtZW50W3BsYXlpbmdBbmltYXRpb25TeW1ib2xdID0gdHJ1ZTtcbiAgbGV0IHRpbWluZ3MgPSBtaXhpbi5oZWxwZXJzLmVmZmVjdFRpbWluZ3NGb3JTZWxlY3Rpb25BbmltYXRpb24oZWxlbWVudCwgZnJvbVNlbGVjdGlvbiwgdG9TZWxlY3Rpb24pO1xuICAvLyBsZXQgbGFzdEFuaW1hdGlvbkRldGFpbHM7XG5cbiAgLy8gRmlndXJlIG91dCB3aGljaCBpdGVtIHdpbGwgYmUgdGhlIG9uZSAqYWZ0ZXIqIHRoZSBvbmUgd2UncmUgc2VsZWN0aW5nLlxuICBsZXQgaXRlbUNvdW50ID0gaXRlbXMubGVuZ3RoO1xuICBsZXQgc2VsZWN0aW9uV3JhcHMgPSBlbGVtZW50LnNlbGVjdGlvbldyYXBzO1xuICBsZXQgc2VsZWN0aW9uSW5kZXggPSBGcmFjdGlvbmFsU2VsZWN0aW9uLmhlbHBlcnMuc2VsZWN0aW9uUGFydHModG9TZWxlY3Rpb24sIGl0ZW1Db3VudCwgc2VsZWN0aW9uV3JhcHMpLmluZGV4O1xuICBsZXQgdG90YWxTdGVwcyA9IHN0ZXBzVG9JbmRleChpdGVtQ291bnQsIHNlbGVjdGlvbldyYXBzLCBmcm9tU2VsZWN0aW9uLCB0b1NlbGVjdGlvbik7XG4gIGxldCBmb3J3YXJkID0gdG90YWxTdGVwcyA+PSAwO1xuICBsZXQgbmV4dFVwSW5kZXggPSBzZWxlY3Rpb25JbmRleCArIChmb3J3YXJkID8gMSA6IC0gMSk7XG4gIGlmIChzZWxlY3Rpb25XcmFwcykge1xuICAgIG5leHRVcEluZGV4ID0gRnJhY3Rpb25hbFNlbGVjdGlvbi5oZWxwZXJzLndyYXBwZWRTZWxlY3Rpb24obmV4dFVwSW5kZXgsIGl0ZW1Db3VudCk7XG4gIH0gZWxzZSBpZiAoIWlzSXRlbUluZGV4SW5Cb3VuZHMoZWxlbWVudCwgbmV4dFVwSW5kZXgpKSB7XG4gICAgbmV4dFVwSW5kZXggPSBudWxsOyAvLyBBdCBzdGFydC9lbmQgb2YgbGlzdDsgZG9uJ3QgaGF2ZSBhIG5leHQgaXRlbSB0byBzaG93LlxuICB9XG5cbiAgLy8gUGxheSB0aGUgYW5pbWF0aW9ucyB1c2luZyB0aG9zZSB0aW1pbmdzLlxuICBsZXQgbGFzdEFuaW1hdGlvbkRldGFpbHM7XG4gIHRpbWluZ3MuZm9yRWFjaCgodGltaW5nLCBpbmRleCkgPT4ge1xuICAgIGxldCBpdGVtID0gaXRlbXNbaW5kZXhdO1xuICAgIGlmICh0aW1pbmcpIHtcbiAgICAgIHNob3dJdGVtKGl0ZW0sIHRydWUpO1xuICAgICAgbGV0IGFuaW1hdGlvbiA9IGl0ZW0uYW5pbWF0ZShrZXlmcmFtZXMsIHRpbWluZyk7XG4gICAgICBpZiAoaW5kZXggPT09IG5leHRVcEluZGV4KSB7XG4gICAgICAgIC8vIFRoaXMgaXRlbSB3aWxsIGJlIGFuaW1hdGVkLCBzbyB3aWxsIGFscmVhZHkgYmUgaW4gdGhlIGRlc2lyZWQgc3RhdGVcbiAgICAgICAgLy8gYWZ0ZXIgdGhlIGFuaW1hdGlvbiBjb21wbGV0ZXMuXG4gICAgICAgIG5leHRVcEluZGV4ID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIGlmICh0aW1pbmcuZW5kRGVsYXkgIT09IDApIHtcbiAgICAgICAgLy8gVGhpcyBpcyB0aGUgYW5pbWF0aW9uIGZvciB0aGUgaXRlbSB0aGF0IHdpbGwgYmUgbGVmdCBzZWxlY3RlZC5cbiAgICAgICAgLy8gV2Ugd2FudCB0byBjbGVhbiB1cCB3aGVuIHRoaXMgYW5pbWF0aW9uIGNvbXBsZXRlcy5cbiAgICAgICAgbGFzdEFuaW1hdGlvbkRldGFpbHMgPSB7IGFuaW1hdGlvbiwgaW5kZXgsIHRpbWluZywgZm9yd2FyZCB9O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUaGlzIGl0ZW0gZG9lc24ndCBwYXJ0aWNpcGF0ZSBpbiB0aGUgYW5pbWF0aW9uLlxuICAgICAgc2hvd0l0ZW0oaXRlbSwgZmFsc2UpO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKGxhc3RBbmltYXRpb25EZXRhaWxzICE9IG51bGwpIHtcbiAgICAvLyBBcnJhbmdlIGZvciBjbGVhbi11cCB3b3JrIHRvIGJlIHBlcmZvcm1lZC5cbiAgICBsYXN0QW5pbWF0aW9uRGV0YWlscy5uZXh0VXBJbmRleCA9IG5leHRVcEluZGV4O1xuICAgIGxhc3RBbmltYXRpb25EZXRhaWxzLmFuaW1hdGlvbi5vbmZpbmlzaCA9IGV2ZW50ID0+IHNlbGVjdGlvbkFuaW1hdGlvbkZpbmlzaGVkKGVsZW1lbnQsIGxhc3RBbmltYXRpb25EZXRhaWxzKTtcbiAgICBlbGVtZW50W2xhc3RBbmltYXRpb25TeW1ib2xdID0gbGFzdEFuaW1hdGlvbkRldGFpbHMuYW5pbWF0aW9uO1xuICB9IGVsc2Uge1xuICAgIC8vIFNob3VsZG4ndCBoYXBwZW4gLS0gd2Ugc2hvdWxkIGFsd2F5cyBoYXZlIGF0IGxlYXN0IG9uZSBhbmltYXRpb24uXG4gICAgZWxlbWVudFtwbGF5aW5nQW5pbWF0aW9uU3ltYm9sXSA9IGZhbHNlO1xuICB9XG59XG5cblxuZnVuY3Rpb24gZ2V0QW5pbWF0aW9uRm9ySXRlbUluZGV4KGVsZW1lbnQsIGluZGV4KSB7XG4gIGlmIChlbGVtZW50W2FuaW1hdGlvblN5bWJvbF0gPT0gbnVsbCkge1xuICAgIC8vIE5vdCByZWFkeSB5ZXQ7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgbGV0IGFuaW1hdGlvbiA9IGVsZW1lbnRbYW5pbWF0aW9uU3ltYm9sXVtpbmRleF07XG4gIGlmICghYW5pbWF0aW9uKSB7XG4gICAgbGV0IGl0ZW0gPSBlbGVtZW50Lml0ZW1zW2luZGV4XTtcbiAgICBhbmltYXRpb24gPSBpdGVtLmFuaW1hdGUoZWxlbWVudC5zZWxlY3Rpb25BbmltYXRpb25LZXlmcmFtZXMsIHtcbiAgICAgIGR1cmF0aW9uOiBlbGVtZW50LnNlbGVjdGlvbkFuaW1hdGlvbkR1cmF0aW9uLFxuICAgICAgZmlsbDogJ2JvdGgnXG4gICAgfSk7XG4gICAgYW5pbWF0aW9uLnBhdXNlKCk7XG4gICAgZWxlbWVudFthbmltYXRpb25TeW1ib2xdW2luZGV4XSA9IGFuaW1hdGlvbjtcbiAgfVxuICByZXR1cm4gYW5pbWF0aW9uO1xufVxuXG5mdW5jdGlvbiBpc0l0ZW1JbmRleEluQm91bmRzKGVsZW1lbnQsIGluZGV4KSB7XG4gIHJldHVybiBpbmRleCA+PSAwICYmIGVsZW1lbnQuaXRlbXMgJiYgaW5kZXggPCBlbGVtZW50Lml0ZW1zLmxlbmd0aDtcbn1cblxuLypcbiAqIFJlbmRlciB0aGUgc2VsZWN0aW9uIHN0YXRlIG9mIHRoZSBlbGVtZW50LlxuICpcbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gcmUtcmVuZGVyIGEgcHJldmlvdXMgc2VsZWN0aW9uIHN0YXRlIChpZiB0aGVcbiAqIHNlbGVjdGVkSW5kZXggcGFyYW0gaXMgb21pdHRlZCksIHJlbmRlciB0aGUgc2VsZWN0aW9uIGluc3RhbnRseSBhdCBhIGdpdmVuXG4gKiB3aG9sZSBvciBmcmFjdGlvbmFsIHNlbGVjdGlvbiBpbmRleCwgb3IgYW5pbWF0ZSB0byBhIGdpdmVuIHNlbGVjdGlvbiBpbmRleC5cbiAqXG4gKiBUaGVyZSBhcmUgc2V2ZXJhbCBkaXN0aW5jdCBzY2VuYXJpb3Mgd2UgbmVlZCB0byBjb3ZlcjpcbiAqXG4gKiAxLiBJbml0aWFsIHBvc2l0aW9uaW5nLCBvciByZXBvc2l0aW9uaW5nIGFmdGVyIGNoYW5naW5nIGEgcHJvcGVydHkgbGlrZVxuICogICAgc2VsZWN0aW9uQW5pbWF0aW9uS2V5ZnJhbWVzIHRoYXQgYWZmZWN0cyByZW5kZXJpbmcuXG4gKiAyLiBBbmltYXRlIG9uIHNlbGVjdGVkSW5kZXggY2hhbmdlLiBUaGlzIHNob3VsZCBvdmVycmlkZSBhbnkgYW5pbWF0aW9uL3N3aXBlXG4gKiAgICBhbHJlYWR5IGluIHByb2dyZXNzLlxuICogMy4gSW5zdGFudGx5IHJlbmRlciB0aGUgY3VycmVudCBwb3NpdGlvbiBvZiBhIGRyYWcgb3BlcmF0aW9uIGluIHByb2dyZXNzLlxuICogNC4gQ29tcGxldGUgYSBkcmFnIG9wZXJhdGlvbi4gSWYgdGhlIGRyYWcgd2Fzbid0IGZhciBlbm91Z2ggdG8gYWZmZWN0XG4gKiAgICBzZWxlY3Rpb24sIHdlJ2xsIGp1c3QgYmUgcmVzdG9yaW5nIHRoZSBzZWxlY3RlZEZyYWN0aW9uIHRvIDAuXG4gKlxuICogSWYgdGhlIGxpc3QgZG9lcyBub3Qgd3JhcCwgYW55IHNlbGVjdGlvbiBwb3NpdGlvbiBvdXRzaWRlIHRoZSBsaXN0J3MgYm91bmRzXG4gKiB3aWxsIGJlIGRhbXBlZCB0byBwcm9kdWNlIGEgdmlzdWFsIGVmZmVjdCBvZiB0ZW5zaW9uLlxuICovXG5mdW5jdGlvbiByZW5kZXJTZWxlY3Rpb24oZWxlbWVudCwgc2VsZWN0ZWRJbmRleD1lbGVtZW50LnNlbGVjdGVkSW5kZXgsIHNlbGVjdGVkRnJhY3Rpb249ZWxlbWVudC5zZWxlY3RlZEZyYWN0aW9uKSB7XG4gIGxldCBpdGVtQ291bnQgPSBlbGVtZW50Lml0ZW1zID8gZWxlbWVudC5pdGVtcy5sZW5ndGggOiAwO1xuICBpZiAoaXRlbUNvdW50ID09PSAwKSB7XG4gICAgLy8gTm90aGluZyB0byByZW5kZXIuXG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChzZWxlY3RlZEluZGV4IDwgMCkge1xuICAgIC8vIFRPRE86IEhhbmRsZSBubyBzZWxlY3Rpb24uXG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCBzZWxlY3Rpb24gPSBzZWxlY3RlZEluZGV4ICsgc2VsZWN0ZWRGcmFjdGlvbjtcbiAgaWYgKGVsZW1lbnQuc2VsZWN0aW9uV3JhcHMpIHtcbiAgICAvLyBBcHBseSB3cmFwcGluZyB0byBlbnN1cmUgY29uc2lzdGVudCByZXByZXNlbnRhdGlvbiBvZiBzZWxlY3Rpb24uXG4gICAgc2VsZWN0aW9uID0gRnJhY3Rpb25hbFNlbGVjdGlvbi5oZWxwZXJzLndyYXBwZWRTZWxlY3Rpb24oc2VsZWN0aW9uLCBpdGVtQ291bnQpO1xuICB9IGVsc2Uge1xuICAgIC8vIEFwcGx5IGRhbXBpbmcgaWYgbmVjZXNzYXJ5LlxuICAgIHNlbGVjdGlvbiA9IEZyYWN0aW9uYWxTZWxlY3Rpb24uaGVscGVycy5kYW1wZWRTZWxlY3Rpb24oc2VsZWN0aW9uLCBpdGVtQ291bnQpO1xuICB9XG4gIGxldCBwcmV2aW91c1NlbGVjdGlvbiA9IGVsZW1lbnRbcHJldmlvdXNTZWxlY3Rpb25TeW1ib2xdO1xuICBpZiAoZWxlbWVudFtzaG93VHJhbnNpdGlvblN5bWJvbF0gJiYgcHJldmlvdXNTZWxlY3Rpb24gIT0gbnVsbCAmJlxuICAgICAgcHJldmlvdXNTZWxlY3Rpb24gIT09IHNlbGVjdGlvbikge1xuICAgIC8vIEFuaW1hdGUgc2VsZWN0aW9uIGZyb20gcHJldmlvdXMgc3RhdGUgdG8gbmV3IHN0YXRlLlxuICAgIGFuaW1hdGVTZWxlY3Rpb24oZWxlbWVudCwgcHJldmlvdXNTZWxlY3Rpb24sIHNlbGVjdGlvbik7XG4gIH0gZWxzZSBpZiAoc2VsZWN0ZWRGcmFjdGlvbiA9PT0gMCAmJiBlbGVtZW50W3BsYXlpbmdBbmltYXRpb25TeW1ib2xdKSB7XG4gICAgLy8gQWxyZWFkeSBpbiBwcm9jZXNzIG9mIGFuaW1hdGluZyB0byBmcmFjdGlvbiAwLiBEdXJpbmcgdGhhdCBwcm9jZXNzLFxuICAgIC8vIGlnbm9yZSBzdWJzZXF1ZW50IGF0dGVtcHRzIHRvIHJlbmRlclNlbGVjdGlvbiB0byBmcmFjdGlvbiAwLlxuICAgIHJldHVybjtcbiAgfSBlbHNlIHtcbiAgICAvLyBSZW5kZXIgY3VycmVudCBzZWxlY3Rpb24gc3RhdGUgaW5zdGFudGx5LlxuICAgIHJlbmRlclNlbGVjdGlvbkluc3RhbnRseShlbGVtZW50LCBzZWxlY3Rpb24pO1xuICB9XG4gIGVsZW1lbnRbcHJldmlvdXNTZWxlY3Rpb25TeW1ib2xdID0gc2VsZWN0aW9uO1xufVxuXG4vKlxuICogSW5zdGFudGx5IHJlbmRlciAoZG9uJ3QgYW5pbWF0ZSkgdGhlIGVsZW1lbnQncyBpdGVtcyBhdCB0aGUgZ2l2ZW4gd2hvbGUgb3JcbiAqIGZyYWN0aW9uYWwgc2VsZWN0aW9uIGluZGV4LlxuICovXG5mdW5jdGlvbiByZW5kZXJTZWxlY3Rpb25JbnN0YW50bHkoZWxlbWVudCwgdG9TZWxlY3Rpb24pIHtcbiAgbGV0IGFuaW1hdGlvbkZyYWN0aW9ucyA9IG1peGluLmhlbHBlcnMuYW5pbWF0aW9uRnJhY3Rpb25zRm9yU2VsZWN0aW9uKGVsZW1lbnQsIHRvU2VsZWN0aW9uKTtcbiAgYW5pbWF0aW9uRnJhY3Rpb25zLm1hcCgoYW5pbWF0aW9uRnJhY3Rpb24sIGluZGV4KSA9PiB7XG4gICAgbGV0IGl0ZW0gPSBlbGVtZW50Lml0ZW1zW2luZGV4XTtcbiAgICBpZiAoYW5pbWF0aW9uRnJhY3Rpb24gIT0gbnVsbCkge1xuICAgICAgc2hvd0l0ZW0oaXRlbSwgdHJ1ZSk7XG4gICAgICBzZXRBbmltYXRpb25GcmFjdGlvbihlbGVtZW50LCBpbmRleCwgYW5pbWF0aW9uRnJhY3Rpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaG93SXRlbShpdGVtLCBmYWxzZSk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVzZXRBbmltYXRpb25zKGVsZW1lbnQpIHtcbiAgbGV0IGl0ZW1Db3VudCA9IGVsZW1lbnQuaXRlbXMgPyBlbGVtZW50Lml0ZW1zLmxlbmd0aCA6IDA7XG4gIGVsZW1lbnRbYW5pbWF0aW9uU3ltYm9sXSA9IG5ldyBBcnJheShpdGVtQ291bnQpO1xufVxuXG4vKlxuICogVGhlIGxhc3QgYW5pbWF0aW9uIGluIG91ciBzZWxlY3Rpb24gYW5pbWF0aW9uIGhhcyBjb21wbGV0ZWQuIENsZWFuIHVwLlxuICovXG5mdW5jdGlvbiBzZWxlY3Rpb25BbmltYXRpb25GaW5pc2hlZChlbGVtZW50LCBkZXRhaWxzKSB7XG5cbiAgLy8gRm9yY2UgdGhlIGFuaW1hdGlvbiB0byB0aGUgbWlkcG9pbnQuIFdlIHVzZWQgdG8ganVzdCBkZXBlbmQgb24gc2V0dGluZ1xuICAvLyBhIG5lZ2F0aXZlIGVuZERlbGF5IGFuZCBmaWxsOiAnYm90aCcsIGJ1dCBhIGNoYW5nZSBpbiBDaHJvbWVcbiAgLy8gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTYwMDI0OCkgY2F1c2VzXG4gIC8vIGFuIGFuaW1hdGlvbiB0byBqdW1wIHRvIGl0cyBmaW5hbCB2YWx1ZSBhZnRlciB0aGUgZW5kRGVsYXkgaXMgaGl0LiBTaW5jZSB3ZVxuICAvLyB3YW50IHRvIGxlYXZlIHRoZSBhbmltYXRpb24gcGF1c2VkIGhhbGZ3YXkgdGhyb3VnaCwgd2UgZm9yY2UgdGhhdC5cbiAgZGV0YWlscy5hbmltYXRpb24ucGF1c2UoKTtcbiAgc2V0QW5pbWF0aW9uRnJhY3Rpb24oZWxlbWVudCwgZGV0YWlscy5pbmRleCwgMC41KTtcblxuICAvLyBXaGVuIHRoZSBsYXN0IGFuaW1hdGlvbiBjb21wbGV0ZXMsIHNob3cgdGhlIG5leHQgaXRlbSBpbiB0aGUgZGlyZWN0aW9uXG4gIC8vIHdlJ3JlIGdvaW5nLiBUaGlzIHdhaXRpbmcgaXMgYSBoYWNrIHRvIGF2b2lkIGhhdmluZyBzdGF0aWMgaXRlbXMgaGlnaGVyIGluXG4gIC8vIHRoZSBuYXR1cmFsIHotb3JkZXIgb2JzY3VyZSBpdGVtcyBkdXJpbmcgYW5pbWF0aW9uLlxuICBpZiAoZGV0YWlscy5uZXh0VXBJbmRleCAhPSBudWxsKSB7XG4gICAgbGV0IG5leHRVcEl0ZW0gPSBlbGVtZW50Lml0ZW1zW2RldGFpbHMubmV4dFVwSW5kZXhdO1xuICAgIGxldCBhbmltYXRpb25GcmFjdGlvbiA9IGRldGFpbHMuZm9yd2FyZCA/IDAgOiAxO1xuICAgIHNldEFuaW1hdGlvbkZyYWN0aW9uKGVsZW1lbnQsIGRldGFpbHMubmV4dFVwSW5kZXgsIGFuaW1hdGlvbkZyYWN0aW9uKTtcbiAgICBzaG93SXRlbShuZXh0VXBJdGVtLCB0cnVlKTtcbiAgfVxuXG4gIGVsZW1lbnRbcGxheWluZ0FuaW1hdGlvblN5bWJvbF0gPSBmYWxzZTtcbiAgZWxlbWVudFtsYXN0QW5pbWF0aW9uU3ltYm9sXSA9IG51bGw7XG59XG5cbi8qXG4gKiBQYXVzZSB0aGUgaW5kaWNhdGVkIGFuaW1hdGlvbiBhbmQgaGF2ZSBpdCBzaG93IHRoZSBhbmltYXRpb24gYXQgdGhlIGdpdmVuXG4gKiBmcmFjdGlvbiAoYmV0d2VlbiAwIGFuZCAxKSBvZiB0aGUgd2F5IHRocm91Z2ggdGhlIGFuaW1hdGlvbi5cbiAqL1xuZnVuY3Rpb24gc2V0QW5pbWF0aW9uRnJhY3Rpb24oZWxlbWVudCwgaXRlbUluZGV4LCBmcmFjdGlvbikge1xuICBsZXQgYW5pbWF0aW9uID0gZ2V0QW5pbWF0aW9uRm9ySXRlbUluZGV4KGVsZW1lbnQsIGl0ZW1JbmRleCk7XG4gIGlmIChhbmltYXRpb24pIHtcbiAgICBsZXQgZHVyYXRpb24gPSBlbGVtZW50LnNlbGVjdGlvbkFuaW1hdGlvbkR1cmF0aW9uO1xuICAgIGlmIChkdXJhdGlvbikge1xuICAgICAgYW5pbWF0aW9uLmN1cnJlbnRUaW1lID0gZnJhY3Rpb24gKiBkdXJhdGlvbjtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvd0l0ZW0oaXRlbSwgZmxhZykge1xuICBpdGVtLnN0eWxlLnZpc2liaWxpdHkgPSBmbGFnID8gJ3Zpc2libGUnIDogJ2hpZGRlbic7XG59XG5cbi8qXG4gKiBGaWd1cmUgb3V0IGhvdyBtYW55IHN0ZXBzIGl0IHdpbGwgdGFrZSB0byBnbyBmcm9tIGZyb21TZWxlY3Rpb24gdG9cbiAqIHRvU2VsZWN0aW9uLiBUbyBnbyBmcm9tIGl0ZW0gMyB0byBpdGVtIDQgaXMgb25lIHN0ZXAuXG4gKlxuICogSWYgd3JhcHBpbmcgaXMgYWxsb3dlZCwgdGhlbiBnb2luZyBmcm9tIHRoZSBsYXN0IGl0ZW0gdG8gdGhlIGZpcnN0IHdpbGwgdGFrZVxuICogb25lIHN0ZXAgKGZvcndhcmQpLCBhbmQgZ29pbmcgZnJvbSB0aGUgZmlyc3QgaXRlbSB0byB0aGUgbGFzdCB3aWxsIHRha2Ugb25lXG4gKiBzdGVwIChiYWNrd2FyZCkuXG4gKi9cbmZ1bmN0aW9uIHN0ZXBzVG9JbmRleChsZW5ndGgsIGFsbG93V3JhcCwgZnJvbVNlbGVjdGlvbiwgdG9TZWxlY3Rpb24pIHtcbiAgbGV0IHN0ZXBzID0gdG9TZWxlY3Rpb24gLSBmcm9tU2VsZWN0aW9uO1xuICAvLyBXcmFwcGluZyBvbmx5IGtpY2tzIGluIHdoZW4gbGlzdCBoYXMgbW9yZSB0aGFuIDEgaXRlbS5cbiAgaWYgKGFsbG93V3JhcCAmJiBsZW5ndGggPiAxKSB7XG4gICAgbGV0IHdyYXBTdGVwcyA9IGxlbmd0aCAtIE1hdGguYWJzKHN0ZXBzKTtcbiAgICBpZiAod3JhcFN0ZXBzIDw9IDEpIHtcbiAgICAgIC8vIFNwZWNpYWwgY2FzZVxuICAgICAgc3RlcHMgPSBzdGVwcyA8IDAgP1xuICAgICAgICB3cmFwU3RlcHMgOiAgIC8vIFdyYXAgZm9yd2FyZCBmcm9tIGxhc3QgaXRlbSB0byBmaXJzdC5cbiAgICAgICAgLXdyYXBTdGVwczsgICAvLyBXcmFwIGJhY2t3YXJkIGZyb20gZmlyc3QgaXRlbSB0byBsYXN0LlxuICAgIH1cbiAgfVxuICByZXR1cm4gc3RlcHM7XG59XG4iLCIvLyBVc2VkIHRvIGFzc2lnbiB1bmlxdWUgSURzIHRvIGl0ZW0gZWxlbWVudHMgd2l0aG91dCBJRHMuXG5sZXQgaWRDb3VudCA9IDA7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBTZWxlY3Rpb25BcmlhQWN0aXZlLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggdHJlYXRzIHRoZSBzZWxlY3RlZCBpdGVtIGluIGEgbGlzdCBhcyB0aGUgYWN0aXZlIGl0ZW0gaW4gQVJJQVxuICAgKiBhY2Nlc3NpYmlsaXR5IHRlcm1zLlxuICAgKlxuICAgKiBIYW5kbGluZyBBUklBIHNlbGVjdGlvbiBzdGF0ZSBwcm9wZXJseSBpcyBhY3R1YWxseSBxdWl0ZSBjb21wbGV4OlxuICAgKlxuICAgKiAqIFRoZSBpdGVtcyBpbiB0aGUgbGlzdCBuZWVkIHRvIGJlIGluZGljYXRlZCBhcyBwb3NzaWJsZSBpdGVtcyB2aWEgYW4gQVJJQVxuICAgKiAgIGByb2xlYCBhdHRyaWJ1dGUgdmFsdWUgc3VjaCBhcyBcIm9wdGlvblwiLlxuICAgKiAqIFRoZSBzZWxlY3RlZCBpdGVtIG5lZWQgdG8gYmUgbWFya2VkIGFzIHNlbGVjdGVkIGJ5IHNldHRpbmcgdGhlIGl0ZW0nc1xuICAgKiAgIGBhcmlhLXNlbGVjdGVkYCBhdHRyaWJ1dGUgdG8gdHJ1ZSAqYW5kKiB0aGUgb3RoZXIgaXRlbXMgbmVlZCBiZSBtYXJrZWQgYXNcbiAgICogICAqbm90KiBzZWxlY3RlZCBieSBzZXR0aW5nIGBhcmlhLXNlbGVjdGVkYCB0byBmYWxzZS5cbiAgICogKiBUaGUgb3V0ZXJtb3N0IGVsZW1lbnQgd2l0aCB0aGUga2V5Ym9hcmQgZm9jdXMgbmVlZHMgdG8gaGF2ZSBhdHRyaWJ1dGVzXG4gICAqICAgc2V0IG9uIGl0IHNvIHRoYXQgdGhlIHNlbGVjdGlvbiBpcyBrbm93YWJsZSBhdCB0aGUgbGlzdCBsZXZlbCB2aWEgdGhlXG4gICAqICAgYGFyaWEtYWN0aXZlZGVzY2VuZGFudGAgYXR0cmlidXRlLlxuICAgKiAqIFVzZSBvZiBgYXJpYS1hY3RpdmVkZXNjZW5kYW50YCBpbiB0dXJuIHJlcXVpcmVzIHRoYXQgYWxsIGl0ZW1zIGluIHRoZVxuICAgKiAgIGxpc3QgaGF2ZSBJRCBhdHRyaWJ1dGVzIGFzc2lnbmVkIHRvIHRoZW0uXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gdHJpZXMgdG8gYWRkcmVzcyBhbGwgb2YgdGhlIGFib3ZlIHJlcXVpcmVtZW50cy4gVG8gdGhhdCBlbmQsXG4gICAqIHRoaXMgbWl4aW4gd2lsbCBhc3NpZ24gZ2VuZXJhdGVkIElEcyB0byBhbnkgaXRlbSB0aGF0IGRvZXNuJ3QgYWxyZWFkeSBoYXZlXG4gICAqIGFuIElELlxuICAgKlxuICAgKiBBUklBIHJlbGllcyBvbiBlbGVtZW50cyB0byBwcm92aWRlIGByb2xlYCBhdHRyaWJ1dGVzLiBUaGlzIG1peGluIHdpbGwgYXBwbHlcbiAgICogYSBkZWZhdWx0IHJvbGUgb2YgXCJsaXN0Ym94XCIgb24gdGhlIG91dGVyIGxpc3QgaWYgaXQgZG9lc24ndCBhbHJlYWR5IGhhdmUgYW5cbiAgICogZXhwbGljaXQgcm9sZS4gU2ltaWxhcmx5LCB0aGlzIG1peGluIHdpbGwgYXBwbHkgYSBkZWZhdWx0IHJvbGUgb2YgXCJvcHRpb25cIlxuICAgKiB0byBhbnkgbGlzdCBpdGVtIHRoYXQgZG9lcyBub3QgYWxyZWFkeSBoYXZlIGEgcm9sZSBzcGVjaWZpZWQuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyBhIHNldCBvZiBtZW1iZXJzIHRoYXQgbWFuYWdlIHRoZSBzdGF0ZSBvZiB0aGUgc2VsZWN0aW9uOlxuICAgKiBgYXBwbHlTZWxlY3Rpb25gLCBgaXRlbUFkZGVkYCwgYW5kIGBzZWxlY3RlZEluZGV4YC4gWW91IGNhbiBzdXBwbHkgdGhlc2VcbiAgICogeW91cnNlbGYsIG9yIGRvIHNvIHZpYSB0aGUgW0l0ZW1zU2VsZWN0aW9uXShJdGVtc1NlbGVjdGlvbi5tZCkgbWl4aW4uXG4gICAqL1xuICBjbGFzcyBTZWxlY3Rpb25BcmlhQWN0aXZlIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBhcHBseVNlbGVjdGlvbihpdGVtLCBzZWxlY3RlZCkge1xuICAgICAgaWYgKHN1cGVyLmFwcGx5U2VsZWN0aW9uKSB7IHN1cGVyLmFwcGx5U2VsZWN0aW9uKGl0ZW0sIHNlbGVjdGVkKTsgfVxuICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCBzZWxlY3RlZCk7XG4gICAgICBsZXQgaXRlbUlkID0gaXRlbS5pZDtcbiAgICAgIGlmIChpdGVtSWQpIHtcbiAgICAgICAgbGV0IG91dGVybW9zdCA9IHRoaXMuY29sbGVjdGl2ZSA/XG4gICAgICAgICAgdGhpcy5jb2xsZWN0aXZlLm91dGVybW9zdEVsZW1lbnQgOlxuICAgICAgICAgIHRoaXM7XG4gICAgICAgIG91dGVybW9zdC5zZXRBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcsIGl0ZW1JZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29sbGVjdGl2ZUNoYW5nZWQoKSB7XG4gICAgICBpZiAoc3VwZXIuY29sbGVjdGl2ZUNoYW5nZWQpIHsgc3VwZXIuY29sbGVjdGl2ZUNoYW5nZWQoKTsgfVxuXG4gICAgICAvLyBFbnN1cmUgdGhlIG91dGVybW9zdCBhc3BlY3QgaGFzIGFuIEFSSUEgcm9sZS5cbiAgICAgIGxldCBvdXRlcm1vc3RFbGVtZW50ID0gdGhpcy5jb2xsZWN0aXZlLm91dGVybW9zdEVsZW1lbnQ7XG4gICAgICBpZiAoIW91dGVybW9zdEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdyb2xlJykpIHtcbiAgICAgICAgLy8gVHJ5IHRvIHByb21vdGUgYW4gQVJJQSByb2xlIGZyb20gYW4gaW5uZXIgZWxlbWVudC4gSWYgbm9uZSBpcyBmb3VuZCxcbiAgICAgICAgLy8gdXNlIGEgZGVmYXVsdCByb2xlLlxuICAgICAgICBsZXQgcm9sZSA9IGdldENvbGxlY3RpdmVBcmlhUm9sZSh0aGlzLmNvbGxlY3RpdmUpIHx8ICdsaXN0Ym94JztcbiAgICAgICAgb3V0ZXJtb3N0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCByb2xlKTtcbiAgICAgIH1cbiAgICAgIGlmICghb3V0ZXJtb3N0RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcpKSB7XG4gICAgICAgIC8vIFRyeSB0byBwcm9tb3RlIGFuIEFSSUEgYWN0aXZlZGVzY2VuZGFudCB2YWx1ZSBmcm9tIGFuIGlubmVyIGVsZW1lbnQuXG4gICAgICAgIGxldCBkZXNjZW5kYW50ID0gZ2V0Q29sbGVjdGl2ZUFyaWFBY3RpdmVEZXNjZW5kYW50KHRoaXMuY29sbGVjdGl2ZSk7XG4gICAgICAgIGlmIChkZXNjZW5kYW50KSB7XG4gICAgICAgICAgb3V0ZXJtb3N0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcsIGRlc2NlbmRhbnQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFJlbW92ZSB0aGUgQVJJQSByb2xlIGFuZCBhY3RpdmVkZXNjZW5kYW50IHZhbHVlcyBmcm9tIHRoZSBjb2xsZWN0aXZlJ3NcbiAgICAgIC8vIGlubmVyIGVsZW1lbnRzLlxuICAgICAgdGhpcy5jb2xsZWN0aXZlLmVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGlmIChlbGVtZW50ICE9PSBvdXRlcm1vc3RFbGVtZW50KSB7XG4gICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcpO1xuICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdyb2xlJywgJ25vbmUnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuICAgICAgaWYgKCF0aGlzLmdldEF0dHJpYnV0ZSgncm9sZScpKSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2xpc3Rib3gnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpdGVtQWRkZWQoaXRlbSkge1xuICAgICAgaWYgKHN1cGVyLml0ZW1BZGRlZCkgeyBzdXBlci5pdGVtQWRkZWQoaXRlbSk7IH1cblxuICAgICAgaWYgKCFpdGVtLmdldEF0dHJpYnV0ZSgncm9sZScpKSB7XG4gICAgICAgIC8vIEFzc2lnbiBhIGRlZmF1bHQgQVJJQSByb2xlLlxuICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgncm9sZScsICdvcHRpb24nKTtcbiAgICAgIH1cblxuICAgICAgLy8gRW5zdXJlIGVhY2ggaXRlbSBoYXMgYW4gSUQgc28gd2UgY2FuIHNldCBhcmlhLWFjdGl2ZWRlc2NlbmRhbnQgb24gdGhlXG4gICAgICAvLyBvdmVyYWxsIGxpc3Qgd2hlbmV2ZXIgdGhlIHNlbGVjdGlvbiBjaGFuZ2VzLlxuICAgICAgLy9cbiAgICAgIC8vIFRoZSBJRCB3aWxsIHRha2UgdGhlIGZvcm0gb2YgYSBiYXNlIElEIHBsdXMgYSB1bmlxdWUgaW50ZWdlci4gVGhlIGJhc2VcbiAgICAgIC8vIElEIHdpbGwgYmUgaW5jb3Jwb3JhdGUgdGhlIGNvbXBvbmVudCdzIG93biBJRC4gRS5nLiwgaWYgYSBjb21wb25lbnQgaGFzXG4gICAgICAvLyBJRCBcImZvb1wiLCB0aGVuIGl0cyBpdGVtcyB3aWxsIGhhdmUgSURzIHRoYXQgbG9vayBsaWtlIFwiX2Zvb09wdGlvbjFcIi4gSWZcbiAgICAgIC8vIHRoZSBjb21wbmVudCBoYXMgbm8gSUQgaXRzZWxmLCBpdHMgaXRlbXMgd2lsbCBnZXQgSURzIHRoYXQgbG9vayBsaWtlXG4gICAgICAvLyBcIl9vcHRpb24xXCIuIEl0ZW0gSURzIGFyZSBwcmVmaXhlZCB3aXRoIGFuIHVuZGVyc2NvcmUgdG8gZGlmZmVyZW50aWF0ZVxuICAgICAgLy8gdGhlbSBmcm9tIG1hbnVhbGx5LWFzc2lnbmVkIElEcywgYW5kIHRvIG1pbmltaXplIHRoZSBwb3RlbnRpYWwgZm9yIElEXG4gICAgICAvLyBjb25mbGljdHMuXG4gICAgICBpZiAoIWl0ZW0uaWQpIHtcbiAgICAgICAgbGV0IGJhc2VJZCA9IHRoaXMuaWQgP1xuICAgICAgICAgICAgXCJfXCIgKyB0aGlzLmlkICsgXCJPcHRpb25cIiA6XG4gICAgICAgICAgICBcIl9vcHRpb25cIjtcbiAgICAgICAgaXRlbS5pZCA9IGJhc2VJZCArIGlkQ291bnQrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgc2VsZWN0ZWRJdGVtKCkge1xuICAgICAgcmV0dXJuIHN1cGVyLnNlbGVjdGVkSXRlbTtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGVkSXRlbShpdGVtKSB7XG4gICAgICBpZiAoJ3NlbGVjdGVkSXRlbScgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJdGVtID0gaXRlbTsgfVxuICAgICAgLy8gQ2F0Y2ggdGhlIGNhc2Ugd2hlcmUgdGhlIHNlbGVjdGlvbiBpcyByZW1vdmVkLlxuICAgICAgaWYgKGl0ZW0gPT0gbnVsbCkge1xuICAgICAgICBsZXQgb3V0ZXJtb3N0ID0gdGhpcy5jb2xsZWN0aXZlID9cbiAgICAgICAgICB0aGlzLmNvbGxlY3RpdmUub3V0ZXJtb3N0RWxlbWVudCA6XG4gICAgICAgICAgdGhpcztcbiAgICAgICAgb3V0ZXJtb3N0LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1hY3RpdmVkZXNjZW5kYW50Jyk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gU2VsZWN0aW9uQXJpYUFjdGl2ZTtcbn07XG5cblxuLy8gUmV0dXJuIHRoZSBmaXJzdCBBUklBIGFjdGl2ZWRlc2NlbmRhbnQgZGVmaW5lZCBieSB0aGUgY29sbGVjdGl2ZS5cbmZ1bmN0aW9uIGdldENvbGxlY3RpdmVBcmlhQWN0aXZlRGVzY2VuZGFudChjb2xsZWN0aXZlKSB7XG4gIGxldCBkZXNjZW5kYW50cyA9IGNvbGxlY3RpdmUuZWxlbWVudHMubWFwKGVsZW1lbnQgPT4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcpKTtcbiAgbGV0IG5vbk51bGxEZXNjZW5kYW50cyA9IGRlc2NlbmRhbnRzLmZpbHRlcihkZXNjZW5kYW50ID0+IGRlc2NlbmRhbnQgIT09IG51bGwpO1xuICByZXR1cm4gbm9uTnVsbERlc2NlbmRhbnRzWzBdO1xufVxuXG5cbi8vIFJldHVybiB0aGUgZmlyc3QgQVJJQSBsYWJlbCBkZWZpbmVkIGJ5IHRoZSBjb2xsZWN0aXZlLlxuZnVuY3Rpb24gZ2V0Q29sbGVjdGl2ZUFyaWFSb2xlKGNvbGxlY3RpdmUpIHtcbiAgbGV0IHJvbGVzID0gY29sbGVjdGl2ZS5lbGVtZW50cy5tYXAoZWxlbWVudCA9PiBlbGVtZW50LmdldEF0dHJpYnV0ZSgncm9sZScpKTtcbiAgbGV0IG5vbk51bGxSb2xlcyA9IHJvbGVzLmZpbHRlcihyb2xlID0+IHJvbGUgIT09IG51bGwpO1xuICByZXR1cm4gbm9uTnVsbFJvbGVzWzBdO1xufVxuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBTZWxlY3Rpb25IaWdobGlnaHQuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBhcHBsaWVzIHN0YW5kYXJkIGhpZ2hsaWdodCBjb2xvcnMgdG8gYSBzZWxlY3RlZCBpdGVtLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGhpZ2hsaWdodHMgdGV4dHVhbCBpdGVtcyAoZS5nLiwgaW4gYSBsaXN0KSBpbiBhIHN0YW5kYXJkIHdheSBieVxuICAgKiB1c2luZyB0aGUgQ1NTIGBoaWdobGlnaHRgIGFuZCBgaGlnaGxpZ2h0dGV4dGAgY29sb3IgdmFsdWVzLiBUaGVzZSB2YWx1ZXNcbiAgICogcmVzcGVjdCBvcGVyYXRpbmcgc3lzdGVtIGRlZmF1bHRzIGFuZCB1c2VyIHByZWZlcmVuY2VzLCBhbmQgaGVuY2UgYXJlIGdvb2RcbiAgICogZGVmYXVsdCB2YWx1ZXMgZm9yIGhpZ2hsaWdodCBjb2xvcnMuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyBhbiBgYXBwbHlTZWxlY3Rpb25gIG1ldGhvZCB0byBiZSBjYWxsZWQgb24gYW4gaXRlbSB3aGVuXG4gICAqIGl0cyBzZWxlY3RlZCBzdGF0ZSBjaGFuZ2VzLiBZb3UgY2FuIHVzZSB0aGVcbiAgICogW0l0ZW1zU2VsZWN0aW9uXShJdGVtc1NlbGVjdGlvbi5tZCkgbWl4aW4gZm9yIHRoYXQgcHVycG9zZS5cbiAgICovXG4gIGNsYXNzIFNlbGVjdGlvbkhpZ2hsaWdodCBleHRlbmRzIGJhc2Uge1xuXG4gICAgYXBwbHlTZWxlY3Rpb24oaXRlbSwgc2VsZWN0ZWQpIHtcbiAgICAgIGlmIChzdXBlci5hcHBseVNlbGVjdGlvbikgeyBzdXBlci5hcHBseVNlbGVjdGlvbihpdGVtLCBzZWxlY3RlZCk7IH1cbiAgICAgIGl0ZW0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gc2VsZWN0ZWQgPyAnaGlnaGxpZ2h0JyA6ICcnO1xuICAgICAgaXRlbS5zdHlsZS5jb2xvciA9IHNlbGVjdGVkID8gJ2hpZ2hsaWdodHRleHQnIDogJyc7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gU2VsZWN0aW9uSGlnaGxpZ2h0O1xufTtcbiIsIi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggU2VsZWN0aW9uSW5WaWV3LiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggc2Nyb2xscyBhIGNvbnRhaW5lciB0byBlbnN1cmUgdGhhdCBhIG5ld2x5LXNlbGVjdGVkIGl0ZW0gaXNcbiAgICogdmlzaWJsZSB0byB0aGUgdXNlci5cbiAgICpcbiAgICogV2hlbiB0aGUgc2VsZWN0ZWQgaXRlbSBpbiBhIGxpc3QtbGlrZSBjb21wb25lbnQgY2hhbmdlcywgaXQncyBlYXNpZXIgZm9yXG4gICAqIHRoZSB0byBjb25maXJtIHRoYXQgdGhlIHNlbGVjdGlvbiBoYXMgY2hhbmdlZCB0byBhbiBhcHByb3ByaWF0ZSBpdGVtIGlmIHRoZVxuICAgKiB1c2VyIGNhbiBhY3R1YWxseSBzZWUgdGhhdCBpdGVtLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGV4cGVjdHMgYSBgc2VsZWN0ZWRJdGVtYCBwcm9wZXJ0eSB0byBiZSBzZXQgd2hlbiB0aGUgc2VsZWN0aW9uXG4gICAqIGNoYW5nZXMuIFlvdSBjYW4gc3VwcGx5IHRoYXQgeW91cnNlbGYsIG9yIHVzZSB0aGVcbiAgICogW0l0ZW1zU2VsZWN0aW9uXShJdGVtc1NlbGVjdGlvbi5tZCkgbWl4aW4uXG4gICAqL1xuICBjbGFzcyBTZWxlY3Rpb25JblZpZXcgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGF0dGFjaGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuYXR0YWNoZWRDYWxsYmFjaykgeyBzdXBlci5hdHRhY2hlZENhbGxiYWNrKCk7IH1cbiAgICAgIGxldCBzZWxlY3RlZEl0ZW0gPSB0aGlzLnNlbGVjdGVkSXRlbTtcbiAgICAgIGlmIChzZWxlY3RlZEl0ZW0pIHtcbiAgICAgICAgdGhpcy5zY3JvbGxJdGVtSW50b1ZpZXcoc2VsZWN0ZWRJdGVtKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgc2VsZWN0ZWRJdGVtKCkge1xuICAgICAgcmV0dXJuIHN1cGVyLnNlbGVjdGVkSXRlbTtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGVkSXRlbShpdGVtKSB7XG4gICAgICBpZiAoJ3NlbGVjdGVkSXRlbScgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJdGVtID0gaXRlbTsgfVxuICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgLy8gS2VlcCB0aGUgc2VsZWN0ZWQgaXRlbSBpbiB2aWV3LlxuICAgICAgICB0aGlzLnNjcm9sbEl0ZW1JbnRvVmlldyhpdGVtKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTY3JvbGwgdGhlIGdpdmVuIGVsZW1lbnQgY29tcGxldGVseSBpbnRvIHZpZXcsIG1pbmltaXppbmcgdGhlIGRlZ3JlZSBvZlxuICAgICAqIHNjcm9sbGluZyBwZXJmb3JtZWQuXG4gICAgICpcbiAgICAgKiBCbGluayBoYXMgYSBgc2Nyb2xsSW50b1ZpZXdJZk5lZWRlZCgpYCBmdW5jdGlvbiB0aGF0IGRvZXMgc29tZXRoaW5nXG4gICAgICogc2ltaWxhciwgYnV0IHVuZm9ydHVuYXRlbHkgaXQncyBub24tc3RhbmRhcmQsIGFuZCBpbiBhbnkgZXZlbnQgb2Z0ZW4gZW5kc1xuICAgICAqIHVwIHNjcm9sbGluZyBtb3JlIHRoYW4gaXMgYWJzb2x1dGVseSBuZWNlc3NhcnkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpdGVtIC0gdGhlIGl0ZW0gdG8gc2Nyb2xsIGludG8gdmlldy5cbiAgICAgKi9cbiAgICBzY3JvbGxJdGVtSW50b1ZpZXcoaXRlbSkge1xuICAgICAgaWYgKHN1cGVyLnNjcm9sbEl0ZW1JbnRvVmlldykgeyBzdXBlci5zY3JvbGxJdGVtSW50b1ZpZXcoKTsgfVxuICAgICAgLy8gR2V0IHRoZSByZWxhdGl2ZSBwb3NpdGlvbiBvZiB0aGUgaXRlbSB3aXRoIHJlc3BlY3QgdG8gdGhlIHRvcCBvZiB0aGVcbiAgICAgIC8vIGxpc3QncyBzY3JvbGxhYmxlIGNhbnZhcy4gQW4gaXRlbSBhdCB0aGUgdG9wIG9mIHRoZSBsaXN0IHdpbGwgaGF2ZSBhXG4gICAgICAvLyBlbGVtZW50VG9wIG9mIDAuXG5cbiAgICAgIGxldCBzY3JvbGxUYXJnZXQgPSB0aGlzLnNjcm9sbFRhcmdldDtcbiAgICAgIGxldCBlbGVtZW50VG9wID0gaXRlbS5vZmZzZXRUb3AgLSBzY3JvbGxUYXJnZXQub2Zmc2V0VG9wIC0gc2Nyb2xsVGFyZ2V0LmNsaWVudFRvcDtcbiAgICAgIGxldCBlbGVtZW50Qm90dG9tID0gZWxlbWVudFRvcCArIGl0ZW0ub2Zmc2V0SGVpZ2h0O1xuICAgICAgLy8gRGV0ZXJtaW5lIHRoZSBib3R0b20gb2YgdGhlIHNjcm9sbGFibGUgY2FudmFzLlxuICAgICAgbGV0IHNjcm9sbEJvdHRvbSA9IHNjcm9sbFRhcmdldC5zY3JvbGxUb3AgKyBzY3JvbGxUYXJnZXQuY2xpZW50SGVpZ2h0O1xuICAgICAgaWYgKGVsZW1lbnRCb3R0b20gPiBzY3JvbGxCb3R0b20pIHtcbiAgICAgICAgLy8gU2Nyb2xsIHVwIHVudGlsIGl0ZW0gaXMgZW50aXJlbHkgdmlzaWJsZS5cbiAgICAgICAgc2Nyb2xsVGFyZ2V0LnNjcm9sbFRvcCArPSBlbGVtZW50Qm90dG9tIC0gc2Nyb2xsQm90dG9tO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZWxlbWVudFRvcCA8IHNjcm9sbFRhcmdldC5zY3JvbGxUb3ApIHtcbiAgICAgICAgLy8gU2Nyb2xsIGRvd24gdW50aWwgaXRlbSBpcyBlbnRpcmVseSB2aXNpYmxlLlxuICAgICAgICBzY3JvbGxUYXJnZXQuc2Nyb2xsVG9wID0gZWxlbWVudFRvcDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZWxlbWVudCB0aGF0IHNob3VsZCBiZSBzY3JvbGxlZCB0byBicmluZyBhbiBpdGVtIGludG8gdmlldy5cbiAgICAgKlxuICAgICAqIFRoZSBkZWZhdWx0IHZhbHVlIG9mIHRoaXMgcHJvcGVydHkgaXMgdGhlIGVsZW1lbnQgaXRzZWxmLlxuICAgICAqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIGdldCBzY3JvbGxUYXJnZXQoKSB7XG4gICAgICAvLyBQcmVmZXIgYmFzZSByZXN1bHQuXG4gICAgICByZXR1cm4gJ3Njcm9sbFRhcmdldCcgaW4gYmFzZS5wcm90b3R5cGUgPyBzdXBlci5zY3JvbGxUYXJnZXQgOiB0aGlzO1xuICAgIH1cbiAgICBzZXQgc2Nyb2xsVGFyZ2V0KGVsZW1lbnQpIHtcbiAgICAgIGlmICgnc2Nyb2xsVGFyZ2V0JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zY3JvbGxUYXJnZXQgPSBlbGVtZW50OyB9XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gU2VsZWN0aW9uSW5WaWV3O1xufTtcbiIsIi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggU2hhZG93RWxlbWVudFJlZmVyZW5jZXMuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB0byBjcmVhdGUgcmVmZXJlbmNlcyB0byBlbGVtZW50cyBpbiBhIGNvbXBvbmVudCdzIFNoYWRvdyBET00gc3VidHJlZS5cbiAgICpcbiAgICogVGhpcyBhZGRzIGEgbWVtYmVyIG9uIHRoZSBjb21wb25lbnQgY2FsbGVkIGB0aGlzLiRgIHRoYXQgY2FuIGJlIHVzZWQgdG9cbiAgICogcmVmZXJlbmNlIHNoYWRvdyBlbGVtZW50cyB3aXRoIElEcy4gRS5nLiwgaWYgY29tcG9uZW50J3Mgc2hhZG93IGNvbnRhaW5zIGFuXG4gICAqIGVsZW1lbnQgYDxidXR0b24gaWQ9XCJmb29cIj5gLCB0aGVuIHRoaXMgbWl4aW4gd2lsbCBjcmVhdGUgYSBtZW1iZXJcbiAgICogYHRoaXMuJC5mb29gIHRoYXQgcG9pbnRzIHRvIHRoYXQgYnV0dG9uLlxuICAgKlxuICAgKiBTdWNoIHJlZmVyZW5jZXMgc2ltcGxpZnkgYSBjb21wb25lbnQncyBhY2Nlc3MgdG8gaXRzIG93biBlbGVtZW50cy4gSW5cbiAgICogZXhjaGFuZ2UsIHRoaXMgbWl4aW4gdHJhZGVzIG9mZiBhIG9uZS10aW1lIGNvc3Qgb2YgcXVlcnlpbmcgYWxsIGVsZW1lbnRzIGluXG4gICAqIHRoZSBzaGFkb3cgdHJlZSBpbnN0ZWFkIG9mIHBheWluZyBhbiBvbmdvaW5nIGNvc3QgdG8gcXVlcnkgZm9yIGFuIGVsZW1lbnRcbiAgICogZWFjaCB0aW1lIHRoZSBjb21wb25lbnQgd2FudHMgdG8gaW5zcGVjdCBvciBtYW5pcHVsYXRlIGl0LlxuICAgKlxuICAgKiBUaGlzIG1peGluIGV4cGVjdHMgdGhlIGNvbXBvbmVudCB0byBkZWZpbmUgYSBTaGFkb3cgRE9NIHN1YnRyZWUuIFlvdSBjYW5cbiAgICogY3JlYXRlIHRoYXQgdHJlZSB5b3Vyc2VsZiwgb3IgbWFrZSB1c2Ugb2YgdGhlXG4gICAqIFtTaGFkb3dUZW1wbGF0ZV0oU2hhZG93VGVtcGxhdGUubWQpIG1peGluLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGlzIGluc3BpcmVkIGJ5IFBvbHltZXIncyBbYXV0b21hdGljXG4gICAqIG5vZGUgZmluZGluZ10oaHR0cHM6Ly93d3cucG9seW1lci1wcm9qZWN0Lm9yZy8xLjAvZG9jcy9kZXZndWlkZS9sb2NhbC1kb20uaHRtbCNub2RlLWZpbmRpbmcpXG4gICAqIGZlYXR1cmUuXG4gICAqL1xuICBjbGFzcyBTaGFkb3dFbGVtZW50UmVmZXJlbmNlcyBleHRlbmRzIGJhc2Uge1xuXG4gICAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuICAgICAgaWYgKHRoaXMuc2hhZG93Um9vdCkge1xuICAgICAgICAvLyBMb29rIGZvciBlbGVtZW50cyBpbiB0aGUgc2hhZG93IHN1YnRyZWUgdGhhdCBoYXZlIGlkIGF0dHJpYnV0ZXMuXG4gICAgICAgIC8vIEFuIGFsdGVybmF0aXZlbHkgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtaXhpbiB3b3VsZCBiZSB0byBqdXN0IGRlZmluZVxuICAgICAgICAvLyBhIHRoaXMuJCBnZXR0ZXIgdGhhdCBsYXppbHkgZG9lcyB0aGlzIHNlYXJjaCB0aGUgZmlyc3QgdGltZSBzb21lb25lXG4gICAgICAgIC8vIHRyaWVzIHRvIGFjY2VzcyB0aGlzLiQuIFRoYXQgbWlnaHQgaW50cm9kdWNlIHNvbWUgY29tcGxleGl0eSDigJMgaWYgdGhlXG4gICAgICAgIC8vIHRoZSB0cmVlIGNoYW5nZWQgYWZ0ZXIgaXQgd2FzIGZpcnN0IHBvcHVsYXRlZCwgdGhlIHJlc3VsdCBvZlxuICAgICAgICAvLyBzZWFyY2hpbmcgZm9yIGEgbm9kZSBtaWdodCBiZSBzb21ld2hhdCB1bnByZWRpY3RhYmxlLlxuICAgICAgICB0aGlzLiQgPSB7fTtcbiAgICAgICAgbGV0IG5vZGVzV2l0aElkcyA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yQWxsKCdbaWRdJyk7XG4gICAgICAgIFtdLmZvckVhY2guY2FsbChub2Rlc1dpdGhJZHMsIG5vZGUgPT4ge1xuICAgICAgICAgIGxldCBpZCA9IG5vZGUuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgICAgICAgIHRoaXMuJFtpZF0gPSBub2RlO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29sbGVjdGlvbiBvZiByZWZlcmVuY2VzIHRvIHRoZSBlbGVtZW50cyB3aXRoIElEcyBpbiBhIGNvbXBvbmVudCdzXG4gICAgICogU2hhZG93IERPTSBzdWJ0cmVlLlxuICAgICAqXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKiBAbWVtYmVyICRcbiAgICAgKi9cbiAgfVxuXG4gIHJldHVybiBTaGFkb3dFbGVtZW50UmVmZXJlbmNlcztcbn07XG4iLCIvKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFNoYWRvd1RlbXBsYXRlLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gZm9yIHN0YW1waW5nIGEgdGVtcGxhdGUgaW50byBhIFNoYWRvdyBET00gc3VidHJlZSB1cG9uIGNvbXBvbmVudFxuICAgKiBpbnN0YW50aWF0aW9uLlxuICAgKlxuICAgKiBUbyB1c2UgdGhpcyBtaXhpbiwgZGVmaW5lIGEgYHRlbXBsYXRlYCBwcm9wZXJ0eSBhcyBhIHN0cmluZyBvciBIVE1MXG4gICAqIGA8dGVtcGxhdGU+YCBlbGVtZW50OlxuICAgKlxuICAgKiAgICAgY2xhc3MgTXlFbGVtZW50IGV4dGVuZHMgU2hhZG93VGVtcGxhdGUoSFRNTEVsZW1lbnQpIHtcbiAgICogICAgICAgZ2V0IHRlbXBsYXRlKCkge1xuICAgKiAgICAgICAgIHJldHVybiBgSGVsbG8sIDxlbT53b3JsZDwvZW0+LmA7XG4gICAqICAgICAgIH1cbiAgICogICAgIH1cbiAgICpcbiAgICogV2hlbiB5b3VyIGNvbXBvbmVudCBjbGFzcyBpcyBpbnN0YW50aWF0ZWQsIGEgc2hhZG93IHJvb3Qgd2lsbCBiZSBjcmVhdGVkIG9uXG4gICAqIHRoZSBpbnN0YW5jZSwgYW5kIHRoZSBjb250ZW50cyBvZiB0aGUgdGVtcGxhdGUgd2lsbCBiZSBjbG9uZWQgaW50byB0aGVcbiAgICogc2hhZG93IHJvb3QuIElmIHlvdXIgY29tcG9uZW50IGRvZXMgbm90IGRlZmluZSBhIGB0ZW1wbGF0ZWAgcHJvcGVydHksIHRoaXNcbiAgICogbWl4aW4gaGFzIG5vIGVmZmVjdC5cbiAgICpcbiAgICogRm9yIHRoZSB0aW1lIGJlaW5nLCB0aGlzIGV4dGVuc2lvbiByZXRhaW5zIHN1cHBvcnQgZm9yIFNoYWRvdyBET00gdjAuIFRoYXRcbiAgICogd2lsbCBldmVudHVhbGx5IGJlIGRlcHJlY2F0ZWQgYXMgYnJvd3NlcnMgKGFuZCB0aGUgU2hhZG93IERPTSBwb2x5ZmlsbClcbiAgICogaW1wbGVtZW50IFNoYWRvdyBET00gdjEuXG4gICAqL1xuICBjbGFzcyBTaGFkb3dUZW1wbGF0ZSBleHRlbmRzIGJhc2Uge1xuXG4gICAgLypcbiAgICAgKiBJZiB0aGUgY29tcG9uZW50IGRlZmluZXMgYSB0ZW1wbGF0ZSwgYSBzaGFkb3cgcm9vdCB3aWxsIGJlIGNyZWF0ZWQgb24gdGhlXG4gICAgICogY29tcG9uZW50IGluc3RhbmNlLCBhbmQgdGhlIHRlbXBsYXRlIHN0YW1wZWQgaW50byBpdC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICBsZXQgdGVtcGxhdGUgPSB0aGlzLnRlbXBsYXRlO1xuICAgICAgLy8gVE9ETzogU2F2ZSB0aGUgcHJvY2Vzc2VkIHRlbXBsYXRlIHdpdGggdGhlIGNvbXBvbmVudCdzIGNsYXNzIHByb3RvdHlwZVxuICAgICAgLy8gc28gaXQgZG9lc24ndCBuZWVkIHRvIGJlIHByb2Nlc3NlZCB3aXRoIGV2ZXJ5IGluc3RhbnRpYXRpb24uXG4gICAgICBpZiAodGVtcGxhdGUpIHtcblxuICAgICAgICBpZiAodHlwZW9mIHRlbXBsYXRlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIC8vIFVwZ3JhZGUgcGxhaW4gc3RyaW5nIHRvIHJlYWwgdGVtcGxhdGUuXG4gICAgICAgICAgdGVtcGxhdGUgPSBjcmVhdGVUZW1wbGF0ZVdpdGhJbm5lckhUTUwodGVtcGxhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHdpbmRvdy5TaGFkb3dET01Qb2x5ZmlsbCkge1xuICAgICAgICAgIHNoaW1UZW1wbGF0ZVN0eWxlcyh0ZW1wbGF0ZSwgdGhpcy5sb2NhbE5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJvb3QgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcbiAgICAgICAgbGV0IGNsb25lID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0ZW1wbGF0ZS5jb250ZW50LCB0cnVlKTtcbiAgICAgICAgcm9vdC5hcHBlbmRDaGlsZChjbG9uZSk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gU2hhZG93VGVtcGxhdGU7XG59O1xuXG5cbi8vIENvbnZlcnQgYSBwbGFpbiBzdHJpbmcgb2YgSFRNTCBpbnRvIGEgcmVhbCB0ZW1wbGF0ZSBlbGVtZW50LlxuZnVuY3Rpb24gY3JlYXRlVGVtcGxhdGVXaXRoSW5uZXJIVE1MKGlubmVySFRNTCkge1xuICBsZXQgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAvLyBSRVZJRVc6IElzIHRoZXJlIGFuIGVhc2llciB3YXkgdG8gZG8gdGhpcz9cbiAgLy8gV2UnZCBsaWtlIHRvIGp1c3Qgc2V0IGlubmVySFRNTCBvbiB0aGUgdGVtcGxhdGUgY29udGVudCwgYnV0IHNpbmNlIGl0J3NcbiAgLy8gYSBEb2N1bWVudEZyYWdtZW50LCB0aGF0IGRvZXNuJ3Qgd29yay5cbiAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuaW5uZXJIVE1MID0gaW5uZXJIVE1MO1xuICB3aGlsZSAoZGl2LmNoaWxkTm9kZXMubGVuZ3RoID4gMCkge1xuICAgIHRlbXBsYXRlLmNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2LmNoaWxkTm9kZXNbMF0pO1xuICB9XG4gIHJldHVybiB0ZW1wbGF0ZTtcbn1cblxuLy8gSW52b2tlIGJhc2ljIHN0eWxlIHNoaW1taW5nIHdpdGggU2hhZG93Q1NTLlxuZnVuY3Rpb24gc2hpbVRlbXBsYXRlU3R5bGVzKHRlbXBsYXRlLCB0YWcpIHtcbiAgd2luZG93LldlYkNvbXBvbmVudHMuU2hhZG93Q1NTLnNoaW1TdHlsaW5nKHRlbXBsYXRlLmNvbnRlbnQsIHRhZyk7XG59XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4vY3JlYXRlU3ltYm9sJztcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3QgZGVsdGFYU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdkZWx0YVgnKTtcbmNvbnN0IGRlbHRhWVN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnZGVsdGFZJyk7XG5jb25zdCBtdWx0aVRvdWNoU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdtdWx0aVRvdWNoJyk7XG5jb25zdCBwcmV2aW91c1hTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3ByZXZpb3VzWCcpO1xuY29uc3QgcHJldmlvdXNZU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdwcmV2aW91c1knKTtcbmNvbnN0IHN0YXJ0WFN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnc3RhcnRYJyk7XG5jb25zdCB0cmF2ZWxGcmFjdGlvblN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgndHJhdmVsRnJhY3Rpb24nKTtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFN3aXBlRGlyZWN0aW9uLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggbWFwcyB0b3VjaCBnZXN0dXJlcyAoc3dpcGUgbGVmdCwgc3dpcGUgcmlnaHQpIHRvIGRpcmVjdGlvblxuICAgKiBzZW1hbnRpY3MgKGdvIHJpZ2h0LCBnbyBsZWZ0KS5cbiAgICpcbiAgICogQnkgZGVmYXVsdCwgdGhpcyBtaXhpbiBwcmVzZW50cyBubyB1c2VyLXZpc2libGUgZWZmZWN0czsgaXQganVzdCBpbmRpY2F0ZXMgYVxuICAgKiBkaXJlY3Rpb24gaW4gd2hpY2ggdGhlIHVzZXIgaXMgY3VycmVudGx5IHN3aXBpbmcgb3IgaGFzIGZpbmlzaGVkIHN3aXBpbmcuIFRvXG4gICAqIG1hcCB0aGUgZGlyZWN0aW9uIHRvIGEgY2hhbmdlIGluIHNlbGVjdGlvbiwgdXNlIHRoZVxuICAgKiBbRGlyZWN0aW9uU2VsZWN0aW9uXShEaXJlY3Rpb25TZWxlY3Rpb24ubWQpIG1peGluLlxuICAgKi9cbiAgY2xhc3MgU3dpcGVEaXJlY3Rpb24gZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cblxuICAgICAgLy8gRm9yIHRoZSBjb21wb25lbnQgdG8gcmVjZWl2ZSBQb2ludGVyRXZlbnRzIGluIElFL0VkZ2UsIHdlIG5lZWQgdG8gc2V0XG4gICAgICAvLyB0b3VjaC1hY3Rpb246IG5vbmUuIE9ubHkgbWFrZSB0aGlzIGNoYW5nZSBpZiB0b3VjaC1hY3Rpb24gaXMgY3VycmVudGx5XG4gICAgICAvLyB0aGUgZGVmYXVsdCB2YWx1ZSAoXCJhdXRvXCIpLCBpbiBjYXNlIHRoZSBkZXZlbG9wZXIga25vd3MgYmV0dGVyIHRoYW4gd2VcbiAgICAgIC8vIGRvIHdoYXQgdGhleSB3YW50IGluIHRoZWlyIHBhcnRpY3VsYXIgY29udGV4dC5cbiAgICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKHRoaXMpLnRvdWNoQWN0aW9uID09PSAnYXV0bycpIHtcbiAgICAgICAgdGhpcy5zdHlsZS50b3VjaEFjdGlvbiA9ICdub25lJztcbiAgICAgIH1cblxuICAgICAgdGhpcy50cmF2ZWxGcmFjdGlvbiA9IDA7XG5cbiAgICAgIC8vIFRPRE86IFRvdWNoIGV2ZW50cyBjb3VsZCBiZSBmYWN0b3JlZCBvdXQgaW50byBpdHMgb3duIG1peGluLlxuXG4gICAgICAvLyBJbiBhbGwgdG91Y2ggZXZlbnRzLCBvbmx5IGhhbmRsZSBzaW5nbGUgdG91Y2hlcy4gV2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgLy8gaW5hZHZlcnRlbnRseSBkbyB3b3JrIHdoZW4gdGhlIHVzZXIncyB0cnlpbmcgdG8gcGluY2gtem9vbSBmb3IgZXhhbXBsZS5cbiAgICAgIC8vIFRPRE86IEV2ZW4gYmV0dGVyIGFwcHJvYWNoIHRoYW4gYmVsb3cgd291bGQgYmUgdG8gaWdub3JlIHRvdWNoZXMgYWZ0ZXJcbiAgICAgIC8vIHRoZSBmaXJzdCBpZiB0aGUgdXNlciBoYXMgYWxyZWFkeSBiZWd1biBhIHN3aXBlLlxuICAgICAgaWYgKHdpbmRvdy5Qb2ludGVyRXZlbnQpIHtcbiAgICAgICAgLy8gUHJlZmVyIGxpc3RlbmluZyB0byBzdGFuZGFyZCBwb2ludGVyIGV2ZW50cy5cbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIGV2ZW50ID0+IHtcbiAgICAgICAgICBpZiAoaXNFdmVudEZvclBlbk9yUHJpbWFyeVRvdWNoKGV2ZW50KSkge1xuICAgICAgICAgICAgdG91Y2hTdGFydCh0aGlzLCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJtb3ZlJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGlmIChpc0V2ZW50Rm9yUGVuT3JQcmltYXJ5VG91Y2goZXZlbnQpKSB7XG4gICAgICAgICAgICBsZXQgaGFuZGxlZCA9IHRvdWNoTW92ZSh0aGlzLCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcbiAgICAgICAgICAgIGlmIChoYW5kbGVkKSB7XG4gICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVydXAnLCBldmVudCA9PiB7XG4gICAgICAgICAgaWYgKGlzRXZlbnRGb3JQZW5PclByaW1hcnlUb3VjaChldmVudCkpIHtcbiAgICAgICAgICAgIHRvdWNoRW5kKHRoaXMsIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBQb2ludGVyIGV2ZW50cyBub3Qgc3VwcG9ydGVkIC0tIGxpc3RlbiB0byBvbGRlciB0b3VjaCBldmVudHMuXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICBpZiAodGhpc1ttdWx0aVRvdWNoU3ltYm9sXSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQudG91Y2hlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIGxldCBjbGllbnRYID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgICAgIGxldCBjbGllbnRZID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WTtcbiAgICAgICAgICAgIHRvdWNoU3RhcnQodGhpcywgY2xpZW50WCwgY2xpZW50WSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXNbbXVsdGlUb3VjaFN5bWJvbF0gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGlmICghdGhpc1ttdWx0aVRvdWNoU3ltYm9sXSAmJiBldmVudC50b3VjaGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgbGV0IGNsaWVudFggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICAgICAgbGV0IGNsaWVudFkgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZO1xuICAgICAgICAgICAgbGV0IGhhbmRsZWQgPSB0b3VjaE1vdmUodGhpcywgY2xpZW50WCwgY2xpZW50WSk7XG4gICAgICAgICAgICBpZiAoaGFuZGxlZCkge1xuICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBldmVudCA9PiB7XG4gICAgICAgICAgaWYgKGV2ZW50LnRvdWNoZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAvLyBBbGwgdG91Y2hlcyByZW1vdmVkOyBnZXN0dXJlIGlzIGNvbXBsZXRlLlxuICAgICAgICAgICAgaWYgKCF0aGlzW211bHRpVG91Y2hTeW1ib2xdKSB7XG4gICAgICAgICAgICAgIC8vIFNpbmdsZS10b3VjaCBzd2lwZSBoYXMgZmluaXNoZWQuXG4gICAgICAgICAgICAgIGxldCBjbGllbnRYID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgICAgICAgbGV0IGNsaWVudFkgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZO1xuICAgICAgICAgICAgICB0b3VjaEVuZCh0aGlzLCBjbGllbnRYLCBjbGllbnRZKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXNbbXVsdGlUb3VjaFN5bWJvbF0gPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSBsZWZ0LlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy5cbiAgICAgKi9cbiAgICBnb0xlZnQoKSB7XG4gICAgICBpZiAoc3VwZXIuZ29MZWZ0KSB7IHJldHVybiBzdXBlci5nb0xlZnQoKTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSByaWdodC5cbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuXG4gICAgICovXG4gICAgZ29SaWdodCgpIHtcbiAgICAgIGlmIChzdXBlci5nb1JpZ2h0KSB7IHJldHVybiBzdXBlci5nb1JpZ2h0KCk7IH1cbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IGltcGxlbWVudGF0aW9uLlxuICAgIGdldCBzaG93VHJhbnNpdGlvbigpIHtcbiAgICAgIHJldHVybiBzdXBlci5zaG93VHJhbnNpdGlvbjtcbiAgICB9XG4gICAgc2V0IHNob3dUcmFuc2l0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoJ3Nob3dUcmFuc2l0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zaG93VHJhbnNpdGlvbiA9IHZhbHVlOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGRpc3RhbmNlIHRoZSBmaXJzdCB0b3VjaHBvaW50IGhhcyB0cmF2ZWxlZCBzaW5jZSB0aGUgYmVnaW5uaW5nIG9mIGFcbiAgICAgKiBkcmFnLCBleHByZXNzZWQgYXMgYSBmcmFjdGlvbiBvZiB0aGUgZWxlbWVudCdzIHdpZHRoLlxuICAgICAqXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICovXG4gICAgZ2V0IHRyYXZlbEZyYWN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXNbdHJhdmVsRnJhY3Rpb25TeW1ib2xdO1xuICAgIH1cbiAgICBzZXQgdHJhdmVsRnJhY3Rpb24odmFsdWUpIHtcbiAgICAgIGlmICgndHJhdmVsRnJhY3Rpb24nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnRyYXZlbEZyYWN0aW9uID0gdmFsdWU7IH1cbiAgICAgIHRoaXNbdHJhdmVsRnJhY3Rpb25TeW1ib2xdID0gdmFsdWU7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gU3dpcGVEaXJlY3Rpb247XG59O1xuXG5cbi8vIFJldHVybiB0cnVlIGlmIHRoZSBwb2ludGVyIGV2ZW50IGlzIGZvciB0aGUgcGVuLCBvciB0aGUgcHJpbWFyeSB0b3VjaCBwb2ludC5cbmZ1bmN0aW9uIGlzRXZlbnRGb3JQZW5PclByaW1hcnlUb3VjaChldmVudCkge1xuICByZXR1cm4gZXZlbnQucG9pbnRlclR5cGUgPT09ICdwZW4nIHx8XG4gICAgICAoZXZlbnQucG9pbnRlclR5cGUgPT09ICd0b3VjaCcgJiYgZXZlbnQuaXNQcmltYXJ5KTtcbn1cblxuXG5mdW5jdGlvbiB0b3VjaFN0YXJ0KGVsZW1lbnQsIGNsaWVudFgsIGNsaWVudFkpIHtcbiAgZWxlbWVudC5zaG93VHJhbnNpdGlvbiA9IGZhbHNlO1xuICBlbGVtZW50W3N0YXJ0WFN5bWJvbF0gPSBjbGllbnRYO1xuICBlbGVtZW50W3ByZXZpb3VzWFN5bWJvbF0gPSBjbGllbnRYO1xuICBlbGVtZW50W3ByZXZpb3VzWVN5bWJvbF0gPSBjbGllbnRZO1xuICBlbGVtZW50W2RlbHRhWFN5bWJvbF0gPSAwO1xuICBlbGVtZW50W2RlbHRhWVN5bWJvbF0gPSAwO1xufVxuXG5mdW5jdGlvbiB0b3VjaE1vdmUoZWxlbWVudCwgY2xpZW50WCwgY2xpZW50WSkge1xuICBlbGVtZW50W2RlbHRhWFN5bWJvbF0gPSBjbGllbnRYIC0gZWxlbWVudFtwcmV2aW91c1hTeW1ib2xdO1xuICBlbGVtZW50W2RlbHRhWVN5bWJvbF0gPSBjbGllbnRZIC0gZWxlbWVudFtwcmV2aW91c1lTeW1ib2xdO1xuICBlbGVtZW50W3ByZXZpb3VzWFN5bWJvbF0gPSBjbGllbnRYO1xuICBlbGVtZW50W3ByZXZpb3VzWVN5bWJvbF0gPSBjbGllbnRZO1xuICBpZiAoTWF0aC5hYnMoZWxlbWVudFtkZWx0YVhTeW1ib2xdKSA+IE1hdGguYWJzKGVsZW1lbnRbZGVsdGFZU3ltYm9sXSkpIHtcbiAgICAvLyBNb3ZlIHdhcyBtb3N0bHkgaG9yaXpvbnRhbC5cbiAgICB0cmFja1RvKGVsZW1lbnQsIGNsaWVudFgpO1xuICAgIC8vIEluZGljYXRlIHRoYXQgdGhlIGV2ZW50IHdhcyBoYW5kbGVkLiBJdCdkIGJlIG5pY2VyIGlmIHdlIGRpZG4ndCBoYXZlXG4gICAgLy8gdG8gZG8gdGhpcyBzbyB0aGF0LCBlLmcuLCBhIHVzZXIgY291bGQgYmUgc3dpcGluZyBsZWZ0IGFuZCByaWdodFxuICAgIC8vIHdoaWxlIHNpbXVsdGFuZW91c2x5IHNjcm9sbGluZyB1cCBhbmQgZG93bi4gKE5hdGl2ZSB0b3VjaCBhcHBzIGNhbiBkb1xuICAgIC8vIHRoYXQuKSBIb3dldmVyLCBNb2JpbGUgU2FmYXJpIHdhbnRzIHRvIGhhbmRsZSBzd2lwZSBldmVudHMgbmVhciB0aGVcbiAgICAvLyBwYWdlIGFuZCBpbnRlcnByZXQgdGhlbSBhcyBuYXZpZ2F0aW9ucy4gVG8gYXZvaWQgaGF2aW5nIGEgaG9yaXppb250YWxcbiAgICAvLyBzd2lwZSBtaXNpbnRlcHJldGVkIGFzIGEgbmF2aWdhdGlvbiwgd2UgaW5kaWNhdGUgdGhhdCB3ZSd2ZSBoYW5kbGVkXG4gICAgLy8gdGhlIGV2ZW50LCBhbmQgcHJldmVudCBkZWZhdWx0IGJlaGF2aW9yLlxuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIC8vIE1vdmUgd2FzIG1vc3RseSB2ZXJ0aWNhbC5cbiAgICByZXR1cm4gZmFsc2U7IC8vIE5vdCBoYW5kbGVkXG4gIH1cbn1cblxuZnVuY3Rpb24gdG91Y2hFbmQoZWxlbWVudCwgY2xpZW50WCwgY2xpZW50WSkge1xuICBlbGVtZW50LnNob3dUcmFuc2l0aW9uID0gdHJ1ZTtcbiAgaWYgKGVsZW1lbnRbZGVsdGFYU3ltYm9sXSA+PSAyMCkge1xuICAgIC8vIEZpbmlzaGVkIGdvaW5nIHJpZ2h0IGF0IGhpZ2ggc3BlZWQuXG4gICAgZWxlbWVudC5nb0xlZnQoKTtcbiAgfSBlbHNlIGlmIChlbGVtZW50W2RlbHRhWFN5bWJvbF0gPD0gLTIwKSB7XG4gICAgLy8gRmluaXNoZWQgZ29pbmcgbGVmdCBhdCBoaWdoIHNwZWVkLlxuICAgIGVsZW1lbnQuZ29SaWdodCgpO1xuICB9IGVsc2Uge1xuICAgIC8vIEZpbmlzaGVkIGF0IGxvdyBzcGVlZC5cbiAgICB0cmFja1RvKGVsZW1lbnQsIGNsaWVudFgpO1xuICAgIGxldCB0cmF2ZWxGcmFjdGlvbiA9IGVsZW1lbnQudHJhdmVsRnJhY3Rpb247XG4gICAgaWYgKHRyYXZlbEZyYWN0aW9uID49IDAuNSkge1xuICAgICAgZWxlbWVudC5nb1JpZ2h0KCk7XG4gICAgfSBlbHNlIGlmICh0cmF2ZWxGcmFjdGlvbiA8PSAtMC41KSB7XG4gICAgICBlbGVtZW50LmdvTGVmdCgpO1xuICAgIH1cbiAgfVxuICBlbGVtZW50LnRyYXZlbEZyYWN0aW9uID0gMDtcbiAgZWxlbWVudFtkZWx0YVhTeW1ib2xdID0gbnVsbDtcbiAgZWxlbWVudFtkZWx0YVlTeW1ib2xdID0gbnVsbDtcbn1cblxuZnVuY3Rpb24gdHJhY2tUbyhlbGVtZW50LCB4KSB7XG4gIGxldCB3aWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gIGxldCBkcmFnRGlzdGFuY2UgPSBlbGVtZW50W3N0YXJ0WFN5bWJvbF0gLSB4O1xuICBsZXQgZnJhY3Rpb24gPSB3aWR0aCA+IDAgP1xuICAgIGRyYWdEaXN0YW5jZSAvIHdpZHRoIDpcbiAgICAwO1xuICBlbGVtZW50LnRyYXZlbEZyYWN0aW9uID0gZnJhY3Rpb247XG59XG4iLCJpbXBvcnQgQ29sbGVjdGl2ZSBmcm9tICcuL0NvbGxlY3RpdmUnO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggVGFyZ2V0SW5Db2xsZWN0aXZlLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggYWxsb3dzIGEgY29tcG9uZW50IHRvIHByb3ZpZGUgYWdncmVnYXRlIGJlaGF2aW9yIHdpdGggb3RoZXJcbiAgICogZWxlbWVudHMsIGUuZy4sIGZvciBrZXlib2FyZCBoYW5kbGluZy5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBpbXBsaWNpdGx5IGNyZWF0ZXMgYSBjb2xsZWN0aXZlIGZvciBhIGNvbXBvbmVudCBzbyB0aGF0IGl0IGNhblxuICAgKiBwYXJ0aWNpcGF0ZSBpbiBjb2xsZWN0aXZlIGtleWJvYXJkIGhhbmRsaW5nLiBTZWUgdGhlXG4gICAqIFtDb2xsZWN0aXZlXShDb2xsZWN0aXZlLm1kKSBjbGFzcyBmb3IgZGV0YWlscy5cbiAgICpcbiAgICogWW91IGNhbiB1c2UgdGhpcyBtaXhpbiBpbiBjb25qdW5jdGlvbiB3aXRoXG4gICAqIFtDb250ZW50Rmlyc3RDaGlsZFRhcmdldF0oQ29udGVudEZpcnN0Q2hpbGRUYXJnZXQubWQpIHRvIGF1dG9tYXRpY2FsbHkgaGF2ZVxuICAgKiB0aGUgY29tcG9uZW50J3MgY29sbGVjdGl2ZSBleHRlbmRlZCB0byBpdHMgZmlyc3QgY2hpbGQuXG4gICAqL1xuICBjbGFzcyBUYXJnZXRJbkNvbGxlY3RpdmUgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cbiAgICAgIHRoaXMuY29sbGVjdGl2ZSA9IG5ldyBDb2xsZWN0aXZlKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMvc2V0cyB0aGUgY3VycmVudCB0YXJnZXQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIFNldCB0aGlzIHRvIHBvaW50IHRvIGFub3RoZXIgZWxlbWVudC4gVGhhdCB0YXJnZXQgZWxlbWVudCB3aWxsIGJlXG4gICAgICogaW1wbGljaXRseSBhZGRlZCB0byB0aGUgY29tcG9uZW50J3MgY29sbGVjdGl2ZS4gVGhhdCBpcywgdGhlIGNvbXBvbmVudFxuICAgICAqIGFuZCBpdHMgdGFyZ2V0IHdpbGwgc2hhcmUgcmVzcG9uc2liaWxpdHkgZm9yIGhhbmRsaW5nIGtleWJvYXJkIGV2ZW50cy5cbiAgICAgKlxuICAgICAqIFlvdSBjYW4gc2V0IHRoaXMgcHJvcGVydHkgeW91cnNlbGYsIG9yIHlvdSBjYW4gdXNlIHRoZVxuICAgICAqIENvbnRlbnRGaXJzdENoaWxkVGFyZ2V0IG1peGluIHRvIGF1dG9tYXRpY2FsbHkgc2V0IHRoZSB0YXJnZXQgdG8gdGhlXG4gICAgICogY29tcG9uZW50J3MgZmlyc3QgY2hpbGQuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgZ2V0IHRhcmdldCgpIHtcbiAgICAgIHJldHVybiBzdXBlci50YXJnZXQ7XG4gICAgfVxuICAgIHNldCB0YXJnZXQoZWxlbWVudCkge1xuICAgICAgaWYgKCd0YXJnZXQnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnRhcmdldCA9IGVsZW1lbnQ7IH1cbiAgICAgIHRoaXMuY29sbGVjdGl2ZS5hc3NpbWlsYXRlKGVsZW1lbnQpO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIFRhcmdldEluQ29sbGVjdGl2ZTtcbn07XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4vY3JlYXRlU3ltYm9sJztcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3QgaXRlbXNDaGFuZ2VkTGlzdGVuZXJTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2l0ZW1zQ2hhbmdlZExpc3RlbmVyJyk7XG5jb25zdCBzZWxlY3RlZEl0ZW1DaGFuZ2VkTGlzdGVuZXJTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3NlbGVjdGVkSXRlbUNoYW5nZWRMaXN0ZW5lcicpO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggVGFyZ2V0U2VsZWN0aW9uLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggYWxsb3dzIGEgY29tcG9uZW50IHRvIGRlbGVnYXRlIGl0cyBvd24gc2VsZWN0aW9uIHNlbWFudGljcyB0byBhXG4gICAqIHRhcmdldCBlbGVtZW50LlxuICAgKlxuICAgKiBUaGlzIGlzIHVzZWZ1bCB3aGVuIGRlZmluaW5nIGNvbXBvbmVudHMgdGhhdCBhY3QgYXMgb3B0aW9uYWwgZmVhdHVyZXMgZm9yIGFcbiAgICogY29tcG9uZW50IHRoYXQgYWN0cyBsaWtlIGEgbGlzdC4gU2VlIGJhc2ljLWFycm93LXNlbGVjdGlvbiBhbmRcbiAgICogYmFzaWMtcGFnZS1kb3RzIGZvciBleGFtcGxlcyBvZiBjb21wb25lbnRzIHVzZWQgYXMgb3B0aW9uYWwgZmVhdHVyZXMgZm9yXG4gICAqIGNvbXBvbmVudHMgbGlrZSBiYXNpYy1jYXJvdXNlbC4gQSB0eXBpY2FsIHVzYWdlIG1pZ2h0IGJlOlxuICAgKlxuICAgKiAgICAgPGJhc2ljLWFycm93LXNlbGVjdGlvbj5cbiAgICogICAgICAgPGJhc2ljLWNhcm91c2VsPlxuICAgKiAgICAgICAgIC4uLiBpbWFnZXMsIGV0Yy4gLi4uXG4gICAqICAgICAgIDwvYmFzaWMtY2Fyb3VzZWw+XG4gICAqICAgICA8L2Jhc2ljLWFycm93LXNlbGVjdGlvbj5cbiAgICpcbiAgICogQmVjYXVzZSBiYXNpYy1hcnJvdy1zZWxlY3Rpb24gdXNlcyB0aGVcbiAgICogW1RhcmdldFNlbGVjdGlvbl0oVGFyZ2V0U2VsZWN0aW9uLm1kKSBtaXhpbiwgaXQgZXhwb3NlcyBtZW1iZXJzIHRvIGFjY2VzcyBhXG4gICAqIHNlbGVjdGlvbjogYHNlbGVjdE5leHRgLCBgc2VsZWN0UHJldmlvdXNgLCBgc2VsZWN0ZWRJbmRleGAsIGV0Yy4gVGhlc2UgYXJlXG4gICAqIGFsbCBkZWxlZ2F0ZWQgdG8gdGhlIGNoaWxkIGNvbXBvbmVudCAoaGVyZSwgYSBiYXNpYy1jYXJvdXNlbCkuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyBhIGB0YXJnZXRgIHByb3BlcnR5IHRvIGJlIHNldCB0byB0aGUgZWxlbWVudCBhY3R1YWxseVxuICAgKiBtYW5hZ2luZyB0aGUgc2VsZWN0aW9uLiBZb3UgY2FuIHNldCB0aGF0IHByb3BlcnR5IHlvdXJzZWxmLCBvciB5b3UgY2FuIHVzZVxuICAgKiB0aGUgW0NvbnRlbnRGaXJzdENoaWxkVGFyZ2V0XShDb250ZW50Rmlyc3RDaGlsZFRhcmdldC5tZCkgbWl4aW4gdG9cbiAgICogaW1wbGljaXRseSB0YWtlIHRoZSBjb21wb25lbnQncyBmaXJzdCBjaGlsZCBhcyB0aGUgdGFyZ2V0LiBUaGlzIGlzIHdoYXRcbiAgICogYmFzaWMtYXJyb3ctc2VsZWN0aW9uIChhYm92ZSkgZG9lcy5cbiAgICovXG4gIGNsYXNzIFRhcmdldFNlbGVjdGlvbiBleHRlbmRzIGJhc2Uge1xuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgc2V0IG9mIGl0ZW1zIGluIHRoZSBsaXN0LlxuICAgICAqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50W119XG4gICAgICovXG4gICAgZ2V0IGl0ZW1zKCkge1xuICAgICAgbGV0IHRhcmdldCA9IHRoaXMudGFyZ2V0O1xuICAgICAgbGV0IGl0ZW1zID0gdGFyZ2V0ICYmIHRhcmdldC5pdGVtcztcbiAgICAgIHJldHVybiBpdGVtcyB8fCBbXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIHdoZW4gdGhlIHVuZGVybHlpbmcgY29udGVudHMgY2hhbmdlLiBJdCBpcyBhbHNvXG4gICAgICogaW52b2tlZCBvbiBjb21wb25lbnQgaW5pdGlhbGl6YXRpb24g4oCTIHNpbmNlIHRoZSBpdGVtcyBoYXZlIFwiY2hhbmdlZFwiIGZyb21cbiAgICAgKiBiZWluZyBub3RoaW5nLlxuICAgICAqL1xuICAgIGl0ZW1zQ2hhbmdlZCgpIHtcbiAgICAgIGlmIChzdXBlci5pdGVtc0NoYW5nZWQpIHsgc3VwZXIuaXRlbXNDaGFuZ2VkKCk7IH1cbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2l0ZW1zLWNoYW5nZWQnKSk7XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdGVkRnJhY3Rpb24oKSB7XG4gICAgICBsZXQgdGFyZ2V0ID0gdGhpcy50YXJnZXQ7XG4gICAgICByZXR1cm4gdGFyZ2V0ICYmIHRhcmdldC5zZWxlY3RlZEZyYWN0aW9uO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0ZWRGcmFjdGlvbihmcmFjdGlvbikge1xuICAgICAgaWYgKCdzZWxlY3RlZEZyYWN0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEZyYWN0aW9uID0gZnJhY3Rpb247IH1cbiAgICAgIGxldCB0YXJnZXQgPSB0aGlzLnRhcmdldDtcbiAgICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0LnNlbGVjdGVkRnJhY3Rpb24gIT09IGZyYWN0aW9uKSB7XG4gICAgICAgIHRhcmdldC5zZWxlY3RlZEZyYWN0aW9uID0gZnJhY3Rpb247XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnRseSBzZWxlY3RlZCBpdGVtLCBvciBudWxsIGlmIHRoZXJlIGlzIG5vIHNlbGVjdGlvbi5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0ZWRJdGVtKCkge1xuICAgICAgbGV0IHRhcmdldCA9IHRoaXMudGFyZ2V0O1xuICAgICAgcmV0dXJuIHRhcmdldCAmJiB0YXJnZXQuc2VsZWN0ZWRJdGVtO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0ZWRJdGVtKGl0ZW0pIHtcbiAgICAgIGlmICgnc2VsZWN0ZWRJdGVtJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEl0ZW0gPSBpdGVtOyB9XG4gICAgICBsZXQgdGFyZ2V0ID0gdGhpcy50YXJnZXQ7XG4gICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgIHRhcmdldC5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRoaXMgbWV0aG9kIGV4aXN0cyBzbyB3cmFwcGluZyBjb21wb25lbnRzIGNhbiBoYW5kbGUgYSBjaGFuZ2UgaW4gdGhlXG4gICAgLy8gc2VsZWN0aW9uIHdpdGhvdXQgcG90ZW50aWFsbHkgcmUtaW52b2tpbmcgdGhlIHNlbGVjdGVkSXRlbSBzZXR0ZXIuIFRoaXNcbiAgICAvLyBpcyBraW5kIG9mIHVuc2F0aXNmeWluZywgdGhvdWdoLiBJdCdkIGJlIG5pY2VyIHRvIGxldCBzdWNoIGNvbXBvbmVudHNcbiAgICAvLyBqdXN0IGltcGxlbWVudCB0aGUgZ2V0dGVyL3NldHRlciBmb3Igc2VsZWN0ZWRJdGVtLCBidXQgaGF2ZSBhIHdheSB0b1xuICAgIC8vIGtub3cgd2hldGhlciB0aGV5IG5lZWQgdG8gYWxzbyB0aGF0IHByb3BlcnR5IGdldHRlci9zZXR0ZXIgZm9yIHRoZSB0YXJnZXRcbiAgICAvLyBjb21wb25lbnQuXG4gICAgc2VsZWN0ZWRJdGVtQ2hhbmdlZCgpIHtcbiAgICAgIGlmIChzdXBlci5zZWxlY3RlZEl0ZW1DaGFuZ2VkKSB7IHN1cGVyLnNlbGVjdGVkSXRlbUNoYW5nZWQoKTsgfVxuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnc2VsZWN0ZWQtaXRlbS1jaGFuZ2VkJykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRydWUgaWYgc2VsZWN0aW9uIG5hdmlnYXRpb25zIHdyYXAgZnJvbSBsYXN0IHRvIGZpcnN0LCBhbmQgdmljZSB2ZXJzYS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBkZWZhdWx0IHtmYWxzZX1cbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0aW9uV3JhcHMoKSB7XG4gICAgICBsZXQgdGFyZ2V0ID0gdGhpcy50YXJnZXQ7XG4gICAgICByZXR1cm4gdGFyZ2V0ICYmIHRhcmdldC5zZWxlY3Rpb25XcmFwcztcbiAgICB9XG4gICAgc2V0IHNlbGVjdGlvbldyYXBzKHZhbHVlKSB7XG4gICAgICBpZiAoJ3NlbGVjdGlvbldyYXBzJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3Rpb25XcmFwcyA9IHZhbHVlOyB9XG4gICAgICBsZXQgdGFyZ2V0ID0gdGhpcy50YXJnZXQ7XG4gICAgICBpZiggdGFyZ2V0KSB7XG4gICAgICAgIHRhcmdldC5zZWxlY3Rpb25XcmFwcyA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMvc2V0cyB0aGUgdGFyZ2V0IGVsZW1lbnQgdG8gd2hpY2ggdGhpcyBjb21wb25lbnQgd2lsbCBkZWxlZ2F0ZVxuICAgICAqIHNlbGVjdGlvbiBhY3Rpb25zLlxuICAgICAqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIGdldCB0YXJnZXQoKSB7XG4gICAgICByZXR1cm4gc3VwZXIudGFyZ2V0O1xuICAgIH1cbiAgICBzZXQgdGFyZ2V0KGVsZW1lbnQpIHtcbiAgICAgIGlmICgndGFyZ2V0JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci50YXJnZXQgPSBlbGVtZW50OyB9XG4gICAgICBpZiAodGhpc1tpdGVtc0NoYW5nZWRMaXN0ZW5lclN5bWJvbF0pIHtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdpdGVtcy1jaGFuZ2VkJywgdGhpc1tpdGVtc0NoYW5nZWRMaXN0ZW5lclN5bWJvbF0pO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXNbc2VsZWN0ZWRJdGVtQ2hhbmdlZExpc3RlbmVyU3ltYm9sXSkge1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3NlbGVjdGVkLWl0ZW0tY2hhbmdlZCcsIHRoaXNbc2VsZWN0ZWRJdGVtQ2hhbmdlZExpc3RlbmVyU3ltYm9sXSk7XG4gICAgICB9XG4gICAgICB0aGlzW2l0ZW1zQ2hhbmdlZExpc3RlbmVyU3ltYm9sXSA9IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaXRlbXMtY2hhbmdlZCcsIGV2ZW50ID0+IHtcbiAgICAgICAgdGhpcy5pdGVtc0NoYW5nZWQoKTtcbiAgICAgIH0pO1xuICAgICAgdGhpc1tzZWxlY3RlZEl0ZW1DaGFuZ2VkTGlzdGVuZXJTeW1ib2xdID0gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzZWxlY3RlZC1pdGVtLWNoYW5nZWQnLCBldmVudCA9PiB7XG4gICAgICAgIC8vIFJFVklFVzogQ29tcG9uZW50cyBhcHBseWluZyBUYXJnZXRTZWxlY3Rpb24gYm90aCBsaXN0ZW4gdG8gdGhpc1xuICAgICAgICAvLyBldmVudCAob24gdGhlIHRhcmdldCksIGFuZCByYWlzZSBpdCB0aGVtc2VsdmVzLiBJbiB0aGVvcnksIHRoZXkncmVcbiAgICAgICAgLy8gZXhwZWN0ZWQgdG8gKm5vdCogY2F0Y2ggdGhlIGV2ZW50cyB0aGV5IHJhaXNlIHRoZW1zZWx2ZXMsIGJ1dCBDaHJvbWVcbiAgICAgICAgLy8gKGF0IGxlYXN0KSBhcHBlYXJzIHRvIHZpb2xhdGUgdGhhdCBleHBlY3RhdGlvbi4gVGhhdCBpcywgaXQnc1xuICAgICAgICAvLyBwb3NzaWJsZSB0byBoYXZlIGV2ZW50LnRhcmdldCA9PT0gdGhpcy4gTW9yZSBjb25mdXNpbmdseSwgdGhlIGd1YXJkXG4gICAgICAgIC8vIGJlbG93LCB3aGljaCBpcyBpbnRlbmRlZCB0byBhdm9pZCByZWN1cnNpdmUgY2FsbHMgdG9cbiAgICAgICAgLy8gc2VsZWN0ZWRJdGVtQ2hhbmdlZCwgZG9lc24ndCB3b3JrIGFzIGV4cGVjdGVkLiBFdmVuIGlmIHRoZSBkZWJ1Z2dlclxuICAgICAgICAvLyBzaG93cyBldmVudC50YXJnZXQgPT09IHRoaXMsIHRoZSBjb250ZW50cyBvZiB0aGUgXCJpZlwiIHN0YXRlbWVudCB3aWxsXG4gICAgICAgIC8vIGJlIGV4ZWN1dGVkLlxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ICE9PSB0aGlzKSB7XG4gICAgICAgICAgLy8gTGV0IHRoZSBjb21wb25lbnQga25vdyB0aGUgdGFyZ2V0J3Mgc2VsZWN0aW9uIGNoYW5nZWQsIGJ1dCB3aXRob3V0XG4gICAgICAgICAgLy8gcmUtaW52b2tpbmcgdGhlIHNlbGVjdEluZGV4L3NlbGVjdGVkSXRlbSBzZXR0ZXIuXG4gICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1DaGFuZ2VkKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gRm9yY2UgaW5pdGlhbCByZWZyZXNoLlxuICAgICAgdGhpcy5pdGVtc0NoYW5nZWQoKTtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBUYXJnZXRTZWxlY3Rpb247XG59O1xuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuL2NyZWF0ZVN5bWJvbCc7XG5cbmNvbnN0IHBsYXlpbmdTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3BsYXlpbmcnKTtcbmNvbnN0IHNlbGVjdGlvblRpbWVyRHVyYXRpb25TeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3NlbGVjdGlvblRpbWVyRHVyYXRpb24nKTtcbmNvbnN0IHRpbWVyVGltZW91dFN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgndGltZXJUaW1lb3V0Jyk7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBUaW1lclNlbGVjdGlvbi4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIHByb3ZpZGVzIGZvciBhdXRvbWF0aWMgdGltZWQgY2hhbmdlcyBpbiBzZWxlY3Rpb24uXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gaXMgdXNlZnVsIGZvciBjcmVhdGluZyBzbGlkZXNob3ctbGlrZSBlbGVtZW50cy5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIHRoZSBjb21wb25lbnQgdG8gZGVmaW5lIGFuIGBpdGVtc2AgcHJvcGVydHksIGFzIHdlbGwgYXNcbiAgICogYHNlbGVjdEZpcnN0YCBhbmQgYHNlbGVjdE5leHRgIG1ldGhvZHMuIFlvdSBjYW4gaW1wbGVtZW50IHRob3NlIHlvdXJzZWxmLFxuICAgKiBvciB1c2UgdGhlIFtDb250ZW50QXNJdGVtc10oQ29udGVudEFzSXRlbXMubWQpIGFuZFxuICAgKiBbSXRlbXNTZWxlY3Rpb25dKEl0ZW1zU2VsZWN0aW9uLm1kKSBtaXhpbnMuXG4gICAqL1xuICBjbGFzcyBUaW1lclNlbGVjdGlvbiBleHRlbmRzIGJhc2Uge1xuXG4gICAgY29udGVudENoYW5nZWQoKSB7XG4gICAgICBpZiAoc3VwZXIuY29udGVudENoYW5nZWQpIHsgc3VwZXIuY29udGVudENoYW5nZWQoKTsgfVxuICAgICAgcmVzdGFydFRpbWVyKHRoaXMpO1xuICAgIH1cblxuICAgIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cblxuICAgICAgLy8gU2V0IGRlZmF1bHRzLlxuICAgICAgaWYgKHR5cGVvZiB0aGlzLnBsYXlpbmcgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMucGxheWluZyA9IHRoaXMuZGVmYXVsdHMucGxheWluZztcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5zZWxlY3Rpb25UaW1lckR1cmF0aW9uID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLnNlbGVjdGlvblRpbWVyRHVyYXRpb24gPSB0aGlzLmRlZmF1bHRzLnNlbGVjdGlvblRpbWVyRHVyYXRpb247XG4gICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IGRlZmF1bHRzKCkge1xuICAgICAgbGV0IGRlZmF1bHRzID0gc3VwZXIuZGVmYXVsdHMgfHwge307XG4gICAgICBkZWZhdWx0cy5wbGF5aW5nID0gZmFsc2U7XG4gICAgICBkZWZhdWx0cy5zZWxlY3Rpb25UaW1lckR1cmF0aW9uID0gMTAwMDtcbiAgICAgIHJldHVybiBkZWZhdWx0cztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCZWdpbiBhdXRvbWF0aWMgcHJvZ3Jlc3Npb24gb2YgdGhlIHNlbGVjdGlvbi5cbiAgICAgKi9cbiAgICBwbGF5KCkge1xuICAgICAgaWYgKHN1cGVyLnBsYXkpIHsgc3VwZXIucGxheSgpOyB9XG4gICAgICBzdGFydFRpbWVyKHRoaXMpO1xuICAgICAgdGhpc1twbGF5aW5nU3ltYm9sXSA9IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGF1c2UgYXV0b21hdGljIHByb2dyZXNzaW9uIG9mIHRoZSBzZWxlY3Rpb24uXG4gICAgICovXG4gICAgcGF1c2UoKSB7XG4gICAgICBpZiAoc3VwZXIucGF1c2UpIHsgc3VwZXIucGF1c2UoKTsgfVxuICAgICAgY2xlYXJUaW1lcih0aGlzKTtcbiAgICAgIHRoaXNbcGxheWluZ1N5bWJvbF0gPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHRoZSBzZWxlY3Rpb24gaXMgYmVpbmcgYXV0b21hdGljYWxseSBhZHZhbmNlZC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG4gICAgZ2V0IHBsYXlpbmcoKSB7XG4gICAgICByZXR1cm4gdGhpc1twbGF5aW5nU3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IHBsYXlpbmcocGxheWluZykge1xuICAgICAgaWYgKCdwbGF5aW5nJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5wbGF5aW5nID0gcGxheWluZzsgfVxuICAgICAgcGxheWluZyA9IFN0cmluZyhwbGF5aW5nKSA9PT0gJ3RydWUnOyAvLyBDYXN0IHRvIGJvb2xlYW5cbiAgICAgIGlmIChwbGF5aW5nICE9PSB0aGlzW3BsYXlpbmdTeW1ib2xdKSB7XG4gICAgICAgIGlmIChwbGF5aW5nKSB7XG4gICAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5wYXVzZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBXaGVuIHRoZSBzZWxlY3RlZCBpdGVtIGNoYW5nZXMgKGJlY2F1c2Ugb2Ygc29tZXRoaW5nIHRoaXMgbWl4aW4gZGlkLCBvclxuICAgICAqIHdhcyBjaGFuZ2VkIGJ5IGFuIG91dHNpZGUgYWdlbnQgbGlrZSB0aGUgdXNlciksIHdlIHdhaXQgYmVmb3JlIGFkdmFuY2luZ1xuICAgICAqIHRvIHRoZSBuZXh0IGl0ZW0uIEJ5IHRyaWdnZXJpbmcgdGhlIG5leHQgaXRlbSB0aGlzIHdheSwgd2UgaW1wbGljaXRseSBnZXRcbiAgICAgKiBhIGRlc2lyYWJsZSBiZWhhdmlvcjogaWYgdGhlIHVzZXIgY2hhbmdlcyB0aGUgc2VsZWN0aW9uIChlLmcuLCBpbiBhXG4gICAgICogY2Fyb3VzZWwpLCB3ZSBsZXQgdGhlbSBzZWUgdGhhdCBzZWxlY3Rpb24gc3RhdGUgZm9yIGEgd2hpbGUgYmVmb3JlXG4gICAgICogYWR2YW5jaW5nIHRoZSBzZWxlY3Rpb24gb3Vyc2VsdmVzLlxuICAgICAqL1xuICAgIGdldCBzZWxlY3RlZEl0ZW0oKSB7XG4gICAgICByZXR1cm4gc3VwZXIuc2VsZWN0ZWRJdGVtO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0ZWRJdGVtKGl0ZW0pIHtcbiAgICAgIGlmICgnc2VsZWN0ZWRJdGVtJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEl0ZW0gPSBpdGVtOyB9XG4gICAgICByZXN0YXJ0VGltZXIodGhpcyk7XG4gICAgfVxuXG4gICAgLy8gSW4gY2FzZSB0aGlzIG1peGluIGlzIGJlaW5nIHVzZWQgd2l0aCBUYXJnZXRTZWxlY3Rpb24uXG4gICAgc2VsZWN0ZWRJdGVtQ2hhbmdlZCgpIHtcbiAgICAgIGlmIChzdXBlci5zZWxlY3RlZEl0ZW1DaGFuZ2VkKSB7IHN1cGVyLnNlbGVjdGVkSXRlbUNoYW5nZWQoKTsgfVxuICAgICAgcmVzdGFydFRpbWVyKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSB0aW1lIGluIG1pbGxpc2Vjb25kcyB0aGF0IHdpbGwgZWxhcHNlIGFmdGVyIHRoZSBzZWxlY3Rpb24gY2hhbmdlc1xuICAgICAqIGJlZm9yZSB0aGUgc2VsZWN0aW9uIHdpbGwgYmUgYWR2YW5jZWQgdG8gdGhlIG5leHQgaXRlbSBpbiB0aGUgbGlzdC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9IC0gVGltZSBpbiBtaWxsaXNlY29uZHNcbiAgICAgKiBAZGVmYXVsdCAxMDAwICgxIHNlY29uZClcbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0aW9uVGltZXJEdXJhdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzW3NlbGVjdGlvblRpbWVyRHVyYXRpb25TeW1ib2xdO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0aW9uVGltZXJEdXJhdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKCdzZWxlY3Rpb25UaW1lckR1cmF0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3Rpb25UaW1lckR1cmF0aW9uID0gdmFsdWU7IH1cbiAgICAgIHRoaXNbc2VsZWN0aW9uVGltZXJEdXJhdGlvblN5bWJvbF0gPSBwYXJzZUludCh2YWx1ZSk7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gVGltZXJTZWxlY3Rpb247XG59O1xuXG5cbmZ1bmN0aW9uIGNsZWFyVGltZXIoZWxlbWVudCkge1xuICBpZiAoZWxlbWVudFt0aW1lclRpbWVvdXRTeW1ib2xdKSB7XG4gICAgY2xlYXJUaW1lb3V0KGVsZW1lbnRbdGltZXJUaW1lb3V0U3ltYm9sXSk7XG4gICAgZWxlbWVudFt0aW1lclRpbWVvdXRTeW1ib2xdID0gbnVsbDtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXN0YXJ0VGltZXIoZWxlbWVudCkge1xuICBjbGVhclRpbWVyKGVsZW1lbnQpO1xuICBpZiAoZWxlbWVudC5wbGF5aW5nICYmIGVsZW1lbnQuaXRlbXMgJiYgZWxlbWVudC5pdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgc3RhcnRUaW1lcihlbGVtZW50KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdGFydFRpbWVyKGVsZW1lbnQpIHtcbiAgLy8gSWYgcGxheSgpIGlzIGNhbGxlZCBtb3JlIHRoYW4gb25jZSwgY2FuY2VsIGFueSBleGlzdGluZyB0aW1lci5cbiAgY2xlYXJUaW1lcihlbGVtZW50KTtcbiAgZWxlbWVudFt0aW1lclRpbWVvdXRTeW1ib2xdID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgc2VsZWN0TmV4dFdpdGhXcmFwKGVsZW1lbnQpO1xuICB9LCBlbGVtZW50LnNlbGVjdGlvblRpbWVyRHVyYXRpb24pO1xufVxuXG4vLyBTZWxlY3QgdGhlIG5leHQgaXRlbSwgd3JhcHBpbmcgdG8gZmlyc3QgaXRlbSBpZiBuZWNlc3NhcnkuXG5mdW5jdGlvbiBzZWxlY3ROZXh0V2l0aFdyYXAoZWxlbWVudCkge1xuICBsZXQgaXRlbXMgPSBlbGVtZW50Lml0ZW1zO1xuICBpZiAoaXRlbXMgJiYgaXRlbXMubGVuZ3RoID4gMCkge1xuICAgIGlmIChlbGVtZW50LnNlbGVjdGVkSW5kZXggPT0gbnVsbCB8fCBlbGVtZW50LnNlbGVjdGVkSW5kZXggPT09IGl0ZW1zLmxlbmd0aCAtIDEpIHtcbiAgICAgIGVsZW1lbnQuc2VsZWN0Rmlyc3QoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5zZWxlY3ROZXh0KCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL2NyZWF0ZVN5bWJvbCc7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IGFic29yYkRlY2VsZXJhdGlvblN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnYWJzb3JiRGVjZWxlcmF0aW9uJyk7XG5jb25zdCBsYXN0RGVsdGFYU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdsYXN0RGVsdGFYJyk7XG5jb25zdCBsYXN0V2hlZWxUaW1lb3V0U3ltYm9sID0gY3JlYXRlU3ltYm9sKCdsYXN0V2hlZWxUaW1lb3V0Jyk7XG5jb25zdCBwb3N0TmF2aWdhdGVEZWxheUNvbXBsZXRlU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdwb3N0TmF2aWdhdGVEZWxheUNvbXBsZXRlJyk7XG5jb25zdCB3aGVlbERpc3RhbmNlU3ltYm9sID0gY3JlYXRlU3ltYm9sKCd3aGVlbERpc3RhbmNlJyk7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBUcmFja3BhZERpcmVjdGlvbi4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIG1hcHMgYSBob3Jpem9udGFsIHRyYWNrcGFkIHN3aXBlIGdlc3R1cmVzIChvciBob3Jpem9udGFsIG1vdXNlXG4gICAqIHdoZWVsIGFjdGlvbnMpIHRvIGRpcmVjdGlvbiBzZW1hbnRpY3MuXG4gICAqXG4gICAqIFlvdSBjYW4gdXNlIHRoaXMgbWl4aW4gd2l0aCBhIG1peGluIGxpa2VcbiAgICogW0RpcmVjdGlvblNlbGVjdGlvbl0oRGlyZWN0aW9uU2VsZWN0aW9uLm1kKSB0byBsZXQgdGhlIHVzZXIgY2hhbmdlIHRoZVxuICAgKiBzZWxlY3Rpb24gd2l0aCB0aGUgdHJhY2twYWQgb3IgbW91c2Ugd2hlZWwuXG4gICAqXG4gICAqIFRvIHJlc3BvbmQgdG8gdGhlIHRyYWNrcGFkLCB3ZSBjYW4gbGlzdGVuIHRvIHRoZSBET00ncyBcIndoZWVsXCIgZXZlbnRzLlxuICAgKiBUaGVzZSBldmVudHMgYXJlIGZpcmVkIGFzIHRoZSB1c2VyIGRyYWdzIHRoZWlyIGZpbmdlcnMgYWNyb3NzIGEgdHJhY2twYWQuXG4gICAqIFVuZm9ydHVuYXRlbHksIGJyb3dzZXJzIGFyZSBtaXNzaW5nIGEgY3JpdGljYWwgZXZlbnQg4oCUwqB0aGVyZSBpcyBubyBldmVudFxuICAgKiB3aGVuIHRoZSB1c2VyICpzdG9wcyogYSBnZXN0dXJlZCBvbiB0aGUgdHJhY2twYWQgb3IgbW91c2Ugd2hlZWwuXG4gICAqXG4gICAqIFRvIG1ha2UgdGhpbmdzIHdvcnNlLCB0aGUgbWFpbnN0cmVhbSBicm93c2VycyBjb250aW51ZSB0byBnZW5lcmF0ZSBmYWtlXG4gICAqIHdoZWVsIGV2ZW50cyBldmVuIGFmdGVyIHRoZSB1c2VyIGhhcyBzdG9wcGVkIGRyYWdnaW5nIHRoZWlyIGZpbmdlcnMuIFRoZXNlXG4gICAqIGZha2UgZXZlbnRzIHNpbXVsYXRlIHRoZSB1c2VyIGdyYWR1YWxseSBzbG93aW5nIGRvd24gdGhlIGRyYWcgdW50aWwgdGhleVxuICAgKiBjb21lIHRvIGEgc21vb3RoIHN0b3AuIEluIHNvbWUgY29udGV4dHMsIHRoZXNlIGZha2Ugd2hlZWwgZXZlbnRzIG1pZ2h0IGJlXG4gICAqIGhlbHBmdWwsIGJ1dCBpbiB0cnlpbmcgdG8gc3VwcGx5IHR5cGljYWwgdHJhY2twYWQgc3dpcGUgbmF2aWdhdGlvbiwgdGhlc2VcbiAgICogZmFrZSBldmVudHMgZ2V0IGluIHRoZSB3YXkuXG4gICAqXG4gICAqIFRoaXMgY29tcG9uZW50IHVzZXMgaGV1cmlzdGljcyB0byB3b3JrIGFyb3VuZCB0aGVzZSBwcm9ibGVtcywgYnV0IHRoZVxuICAgKiBjb21wbGV4IG5hdHVyZSBvZiB0aGUgcHJvYmxlbSBtYWtlIGl0IGV4dHJlbWVseSBkaWZmaWN1bHQgdG8gYWNoaWV2ZSB0aGVcbiAgICogc2FtZSBkZWdyZWUgb2YgdHJhY2twYWQgcmVzcG9uc2l2ZW5lc3MgcG9zc2libGUgd2l0aCBuYXRpdmUgYXBwbGljYXRpb25zLlxuICAgKi9cbiAgY2xhc3MgVHJhY2twYWREaXJlY3Rpb24gZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBldmVudCA9PiB7XG4gICAgICAgIGxldCBoYW5kbGVkID0gd2hlZWwodGhpcywgZXZlbnQpO1xuICAgICAgICBpZiAoaGFuZGxlZCkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmVzZXRXaGVlbFRyYWNraW5nKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSBsZWZ0LlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy5cbiAgICAgKi9cbiAgICBnb0xlZnQoKSB7XG4gICAgICBpZiAoc3VwZXIuZ29MZWZ0KSB7IHJldHVybiBzdXBlci5nb0xlZnQoKTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSByaWdodC5cbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuXG4gICAgICovXG4gICAgZ29SaWdodCgpIHtcbiAgICAgIGlmIChzdXBlci5nb1JpZ2h0KSB7IHJldHVybiBzdXBlci5nb1JpZ2h0KCk7IH1cbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IGltcGxlbWVudGF0aW9uLlxuICAgIGdldCBzaG93VHJhbnNpdGlvbigpIHtcbiAgICAgIHJldHVybiBzdXBlci5zaG93VHJhbnNpdGlvbjtcbiAgICB9XG4gICAgc2V0IHNob3dUcmFuc2l0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoJ3Nob3dUcmFuc2l0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zaG93VHJhbnNpdGlvbiA9IHZhbHVlOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGRpc3RhbmNlIHRoZSB1c2VyIGhhcyBtb3ZlZCB0aGUgZmlyc3QgdG91Y2hwb2ludCBzaW5jZSB0aGUgYmVnaW5uaW5nXG4gICAgICogb2YgYSB0cmFja3BhZC93aGVlbCBvcGVyYXRpb24sIGV4cHJlc3NlZCBhcyBhIGZyYWN0aW9uIG9mIHRoZSBlbGVtZW50J3NcbiAgICAgKiB3aWR0aC5cbiAgICAgKlxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqL1xuICAgIGdldCB0cmF2ZWxGcmFjdGlvbigpIHtcbiAgICAgIHJldHVybiBzdXBlci50cmF2ZWxGcmFjdGlvbjtcbiAgICB9XG4gICAgc2V0IHRyYXZlbEZyYWN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoJ3RyYXZlbEZyYWN0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci50cmF2ZWxGcmFjdGlvbiA9IHZhbHVlOyB9XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gVHJhY2twYWREaXJlY3Rpb247XG59O1xuXG5cbi8vIFRpbWUgd2Ugd2FpdCBmb2xsb3dpbmcgYSBuYXZpZ2F0aW9uIGJlZm9yZSBwYXlpbmcgYXR0ZW50aW9uIHRvIHdoZWVsXG4vLyBldmVudHMgYWdhaW4uXG5jb25zdCBQT1NUX05BVklHQVRFX1RJTUUgPSAyNTA7XG5cbi8vIFRpbWUgd2Ugd2FpdCBhZnRlciB0aGUgbGFzdCB3aGVlbCBldmVudCBiZWZvcmUgd2UgcmVzZXQgdGhpbmdzLlxuY29uc3QgV0hFRUxfVElNRSA9IDEwMDtcblxuXG4vLyBGb2xsb3dpbmcgYSBuYXZpZ2F0aW9uLCBwYXJ0aWFsbHkgcmVzZXQgb3VyIHdoZWVsIHRyYWNraW5nLlxuZnVuY3Rpb24gcG9zdE5hdmlnYXRlKGVsZW1lbnQpIHtcbiAgZWxlbWVudC50cmF2ZWxGcmFjdGlvbiA9IDA7XG4gIGVsZW1lbnRbd2hlZWxEaXN0YW5jZVN5bWJvbF0gPSAwO1xuICBlbGVtZW50W3Bvc3ROYXZpZ2F0ZURlbGF5Q29tcGxldGVTeW1ib2xdID0gdHJ1ZTtcbiAgZWxlbWVudFthYnNvcmJEZWNlbGVyYXRpb25TeW1ib2xdID0gdHJ1ZTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZWxlbWVudFtwb3N0TmF2aWdhdGVEZWxheUNvbXBsZXRlU3ltYm9sXSA9IGZhbHNlO1xuICB9LCBQT1NUX05BVklHQVRFX1RJTUUpO1xufVxuXG4vLyBSZXNldCBhbGwgc3RhdGUgcmVsYXRlZCB0byB0aGUgdHJhY2tpbmcgb2YgdGhlIHdoZWVsLlxuZnVuY3Rpb24gcmVzZXRXaGVlbFRyYWNraW5nKGVsZW1lbnQpIHtcbiAgZWxlbWVudC50cmF2ZWxGcmFjdGlvbiA9IDA7XG4gIGVsZW1lbnRbd2hlZWxEaXN0YW5jZVN5bWJvbF0gPSAwO1xuICBlbGVtZW50W2xhc3REZWx0YVhTeW1ib2xdID0gMDtcbiAgZWxlbWVudFthYnNvcmJEZWNlbGVyYXRpb25TeW1ib2xdID0gZmFsc2U7XG4gIGVsZW1lbnRbcG9zdE5hdmlnYXRlRGVsYXlDb21wbGV0ZVN5bWJvbF0gPSBmYWxzZTtcbiAgaWYgKGVsZW1lbnRbbGFzdFdoZWVsVGltZW91dFN5bWJvbF0pIHtcbiAgICBjbGVhclRpbWVvdXQoZWxlbWVudFtsYXN0V2hlZWxUaW1lb3V0U3ltYm9sXSk7XG4gICAgZWxlbWVudFtsYXN0V2hlZWxUaW1lb3V0U3ltYm9sXSA9IG51bGw7XG4gIH1cbn1cblxuLy8gRGVmaW5lIG91ciBvd24gc2lnbiBmdW5jdGlvbiwgc2luY2UgKGFzIG9mIE1heSAyMDE1KSwgU2FmYXJpIGFuZCBJRSBkb24ndFxuLy8gc3VwcGx5IE1hdGguc2lnbigpLlxuZnVuY3Rpb24gc2lnbih4KSB7XG4gIHJldHVybiAoeCA9PT0gMCkgP1xuICAgIDAgOlxuICAgICh4ID4gMCkgP1xuICAgICAgMSA6XG4gICAgICAtMTtcbn1cblxuLy8gVE9ETzogRGFtcGluZywgb3Igc29tZSBvdGhlciB0cmVhdG1lbnQgZm9yIGdvaW5nIHBhc3QgdGhlIGVuZHMuXG5cbi8qXG4gKiBBIHdoZWVsIGV2ZW50IGhhcyBiZWVuIGdlbmVyYXRlZC4gVGhpcyBjb3VsZCBiZSBhIHJlYWwgd2hlZWwgZXZlbnQsIG9yIGl0XG4gKiBjb3VsZCBiZSBmYWtlIChzZWUgbm90ZXMgaW4gdGhlIGhlYWRlcikuXG4gKlxuICogVGhpcyBoYW5kbGVyIHVzZXMgc2V2ZXJhbCBzdHJhdGVnaWVzIHRvIHRyeSB0byBhcHByb3hpbWF0ZSBuYXRpdmUgdHJhY2twYWRcbiAqIHN3aXBlIG5hdmlnYXRpb24uXG4gKlxuICogSWYgdGhlIHVzZXIgaGFzIGRyYWdnZWQgZW5vdWdoIHRvIGNhdXNlIGEgbmF2aWdhdGlvbiwgdGhlbiBmb3IgYSBzaG9ydFxuICogZGVsYXkgZm9sbG93aW5nIHRoYXQgbmF2aWdhdGlvbiwgc3Vic2VxdWVudCB3aGVlbCBldmVudHMgd2lsbCBiZSBpZ25vcmVkLlxuICpcbiAqIEZ1cnRoZXJtb3JlLCBmb2xsd293aW5nIGEgbmF2aWdhdGlvbiwgd2UgaWdub3JlIGFsbCB3aGVlbCBldmVudHMgdW50aWwgd2VcbiAqIHJlY2VpdmUgYXQgbGVhc3Qgb25lIGV2ZW50IHdoZXJlIHRoZSBldmVudCdzIGRlbHRhWCAoZGlzdGFuY2UgdHJhdmVsZWQpIGlzXG4gKiAqZ3JlYXRlciogdGhhbiB0aGUgcHJldmlvdXMgZXZlbnQncyBkZWx0YVguIFRoaXMgaGVscHMgdXMgZmlsdGVyIG91dCB0aGVcbiAqIGZha2Ugd2hlZWwgZXZlbnRzIGdlbmVyYXRlZCBieSB0aGUgYnJvd3NlciB0byBzaW11bGF0ZSBkZWNlbGVyYXRpb24uXG4gKlxuICovXG5mdW5jdGlvbiB3aGVlbChlbGVtZW50LCBldmVudCkge1xuXG4gIC8vIFNpbmNlIHdlIGhhdmUgYSBuZXcgd2hlZWwgZXZlbnQsIHJlc2V0IG91ciB0aW1lciB3YWl0aW5nIGZvciB0aGUgbGFzdFxuICAvLyB3aGVlbCBldmVudCB0byBwYXNzLlxuICBpZiAoZWxlbWVudFtsYXN0V2hlZWxUaW1lb3V0U3ltYm9sXSkge1xuICAgIGNsZWFyVGltZW91dChlbGVtZW50W2xhc3RXaGVlbFRpbWVvdXRTeW1ib2xdKTtcbiAgfVxuICBlbGVtZW50W2xhc3RXaGVlbFRpbWVvdXRTeW1ib2xdID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgd2hlZWxUaW1lZE91dChlbGVtZW50KTtcbiAgfSwgV0hFRUxfVElNRSk7XG5cbiAgbGV0IGRlbHRhWCA9IGV2ZW50LmRlbHRhWDtcbiAgbGV0IGRlbHRhWSA9IGV2ZW50LmRlbHRhWTtcblxuICAvLyBTZWUgaWYgZWxlbWVudCBldmVudCByZXByZXNlbnRzIGFjY2VsZXJhdGlvbiBvciBkZWNlbGVyYXRpb24uXG4gIGxldCBhY2NlbGVyYXRpb24gPSBzaWduKGRlbHRhWCkgKiAoZGVsdGFYIC0gZWxlbWVudFtsYXN0RGVsdGFYU3ltYm9sXSk7XG4gIGVsZW1lbnRbbGFzdERlbHRhWFN5bWJvbF0gPSBkZWx0YVg7XG4gIC8vIGNvbnNvbGUubG9nKGRlbHRhWCArIFwiIFwiICsgYWNjZWxlcmF0aW9uICsgXCIgXCIgKyBlbGVtZW50W2Fic29yYkRlY2VsZXJhdGlvblN5bWJvbF0gKyBcIiBcIiArIGVsZW1lbnRbcG9zdE5hdmlnYXRlRGVsYXlDb21wbGV0ZVN5bWJvbF0pO1xuXG4gIGlmIChNYXRoLmFicyhkZWx0YVgpIDwgTWF0aC5hYnMoZGVsdGFZKSkge1xuICAgIC8vIE1vdmUgd2FzIG1vc3RseSB2ZXJ0aWNhbC4gVGhlIHVzZXIgbWF5IGJlIHRyeWluZyBzY3JvbGwgd2l0aCB0aGVcbiAgICAvLyB0cmFja3BhZC93aGVlbC4gVG8gYmUgb24gdGhlIHNhZmUsIHdlIGlnbm9yZSBzdWNoIGV2ZW50cy5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoZWxlbWVudFtwb3N0TmF2aWdhdGVEZWxheUNvbXBsZXRlU3ltYm9sXSkge1xuICAgIC8vIEl0J3MgdG9vIHNvb24gYWZ0ZXIgYSBuYXZpZ2F0aW9uOyBpZ25vcmUgdGhlIGV2ZW50LlxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cblxuICBpZiAoYWNjZWxlcmF0aW9uID4gMCkge1xuICAgIC8vIFRoZSBldmVudHMgYXJlIG5vdCAob3IgYXJlIG5vIGxvbmdlcikgZGVjZWxlcmF0aW5nLCBzbyB3ZSBjYW4gc3RhcnRcbiAgICAvLyBwYXlpbmcgYXR0ZW50aW9uIHRvIHRoZW0gYWdhaW4uXG4gICAgZWxlbWVudFthYnNvcmJEZWNlbGVyYXRpb25TeW1ib2xdID0gZmFsc2U7XG4gIH0gZWxzZSBpZiAoZWxlbWVudFthYnNvcmJEZWNlbGVyYXRpb25TeW1ib2xdKSB7XG4gICAgLy8gVGhlIHdoZWVsIGV2ZW50IHdhcyBsaWtlbHkgZmFrZWQgdG8gc2ltdWxhdGUgZGVjZWxlcmF0aW9uOyBpZ25vcmUgaXQuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBlbGVtZW50W3doZWVsRGlzdGFuY2VTeW1ib2xdICs9IGRlbHRhWDtcblxuICAvLyBVcGRhdGUgdGhlIHRyYXZlbCBmcmFjdGlvbiBvZiB0aGUgZWxlbWVudCBiZWluZyBuYXZpZ2F0ZWQuXG4gIGxldCB3aWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gIGxldCB0cmF2ZWxGcmFjdGlvbiA9IHdpZHRoID4gMCA/XG4gICAgZWxlbWVudFt3aGVlbERpc3RhbmNlU3ltYm9sXSAvIHdpZHRoIDpcbiAgICAwO1xuICBlbGVtZW50LnNob3dUcmFuc2l0aW9uID0gZmFsc2U7XG4gIHRyYXZlbEZyYWN0aW9uID0gc2lnbih0cmF2ZWxGcmFjdGlvbikgKiBNYXRoLm1pbihNYXRoLmFicyh0cmF2ZWxGcmFjdGlvbiksIDEpO1xuICBlbGVtZW50LnRyYXZlbEZyYWN0aW9uID0gdHJhdmVsRnJhY3Rpb247XG5cbiAgLy8gSWYgdGhlIHVzZXIgaGFzIGRyYWdnZWQgZW5vdWdoIHRvIHJlYWNoIHRoZSBwcmV2aW91cy9uZXh0IGl0ZW0sIHRoZW5cbiAgLy8gY29tcGxldGUgYSBuYXZpZ2F0aW9uIHRvIHRoYXQgaXRlbS5cbiAgaWYgKHRyYXZlbEZyYWN0aW9uID09PSAxKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJnb1JpZ2h0XCIpO1xuICAgIGVsZW1lbnQuc2hvd1RyYW5zaXRpb24gPSB0cnVlO1xuICAgIGVsZW1lbnQuZ29SaWdodCgpO1xuICAgIHBvc3ROYXZpZ2F0ZShlbGVtZW50KTtcbiAgfSBlbHNlIGlmICh0cmF2ZWxGcmFjdGlvbiA9PT0gLTEpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcImdvTGVmdFwiKTtcbiAgICBlbGVtZW50LnNob3dUcmFuc2l0aW9uID0gdHJ1ZTtcbiAgICBlbGVtZW50LmdvTGVmdCgpO1xuICAgIHBvc3ROYXZpZ2F0ZShlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG4vLyBBIHN1ZmZpY2llbnRseSBsb25nIHBlcmlvZCBvZiB0aW1lIGhhcyBwYXNzZWQgc2luY2UgdGhlIGxhc3Qgd2hlZWwgZXZlbnQuXG4vLyBXZSBzbmFwIHRoZSBzZWxlY3Rpb24gdG8gdGhlIGNsb3Nlc3QgaXRlbSwgdGhlbiByZXNldCBvdXIgc3RhdGUuXG5mdW5jdGlvbiB3aGVlbFRpbWVkT3V0KGVsZW1lbnQpIHtcbiAgLy8gY29uc29sZS5sb2coXCJ0aW1lb3V0XCIpO1xuXG4gIC8vIFNuYXAgdG8gdGhlIGNsb3Nlc3QgaXRlbS5cbiAgZWxlbWVudC5zaG93VHJhbnNpdGlvbiA9IHRydWU7XG4gIGxldCB0cmF2ZWxGcmFjdGlvbiA9IGVsZW1lbnQudHJhdmVsRnJhY3Rpb247XG4gIGlmICh0cmF2ZWxGcmFjdGlvbiA+PSAwLjUpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcInNuYXAgcmlnaHRcIik7XG4gICAgZWxlbWVudC5nb1JpZ2h0KCk7XG4gIH0gZWxzZSBpZiAodHJhdmVsRnJhY3Rpb24gPD0gLTAuNSkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwic25hcCBsZWZ0XCIpO1xuICAgIGVsZW1lbnQuZ29MZWZ0KCk7XG4gIH1cblxuICAvLyBUT0RPOiBMaXN0ZW4gZm9yIHRoZSB0cmFuc2l0aW9uIHRvIGNvbXBsZXRlLCBhbmQgdGhlbiByZXN0b3JlXG4gIC8vIHNob3dUcmFuc2l0aW9uIHRvIGZhbHNlIChvciB0aGUgcHJldmlvdXMgdmFsdWUpLlxuXG4gIHJlc2V0V2hlZWxUcmFja2luZyhlbGVtZW50KTtcbn1cbiIsIi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIGNyZWF0ZSBhIHN5bWJvbCB0aGF0IGNhbiBiZSB1c2VkIGZvciBhc3NvY2lhdGluZyBwcml2YXRlXG4gKiBkYXRhIHdpdGggYW4gZWxlbWVudC5cbiAqXG4gKiBNaXhpbnMgYW5kIGNvbXBvbmVudCBjbGFzc2VzIG9mdGVuIHdhbnQgdG8gYXNzb2NpYXRlIHByaXZhdGUgZGF0YSB3aXRoIGFuXG4gKiBlbGVtZW50IGluc3RhbmNlLCBidXQgSmF2YVNjcmlwdCBkb2VzIG5vdCBoYXZlIGRpcmVjdCBzdXBwb3J0IGZvciB0cnVlXG4gKiBwcml2YXRlIHByb3BlcnRpZXMuIE9uZSBhcHByb2FjaCBpcyB0byB1c2UgdGhlXG4gKiBbU3ltYm9sXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9TeW1ib2wpXG4gKiBkYXRhIHR5cGUgdG8gc2V0IGFuZCByZXRyaWV2ZSBkYXRhIG9uIGFuIGVsZW1lbnQuXG4gKlxuICogVW5mb3J0dW5hdGVseSwgdGhlIFN5bWJvbCB0eXBlIGlzIG5vdCBhdmFpbGFibGUgaW4gSW50ZXJuZXQgRXhwbG9yZXIgMTEuIFRoZVxuICogYGNyZWF0ZVN5bWJvbGAgaGVscGVyIGZ1bmN0aW9uIGV4aXN0cyBhcyBhIHdvcmthcm91bmQgZm9yIElFIDExLiBSYXRoZXIgdGhhblxuICogcmV0dXJuaW5nIGEgdHJ1ZSBTeW1ib2wsIGl0IHNpbXBseSByZXR1cm5zIGFuIHVuZGVyc2NvcmUtcHJlZml4ZWQgc3RyaW5nLlxuICpcbiAqIFVzYWdlOlxuICpcbiAqICAgICBjb25zdCBmb29TeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2ZvbycpO1xuICpcbiAqICAgICBjbGFzcyBNeUVsZW1lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gKiAgICAgICBnZXQgZm9vKCkge1xuICogICAgICAgICByZXR1cm4gdGhpc1tmb29TeW1ib2xdO1xuICogICAgICAgfVxuICogICAgICAgc2V0IGZvbyh2YWx1ZSkge1xuICogICAgICAgICB0aGlzW2Zvb1N5bWJvbF0gPSB2YWx1ZTtcbiAqICAgICAgIH1cbiAqICAgICB9XG4gKlxuICogSW4gSUUgMTEsIHRoaXMgc2FtcGxlIHdpbGwgXCJoaWRlXCIgZGF0YSBiZWhpbmQgYW4gaW5zdGFuY2UgcHJvcGVydHkgdGhpcy5fZm9vLlxuICogVGhlIHVzZSBvZiB0aGUgdW5kZXJzY29yZSBpcyBtZWFudCB0byByZWR1Y2UgKG5vdCBlbGltaW5hdGUpIHRoZSBwb3RlbnRpYWxcbiAqIGZvciBuYW1lIGNvbmZsaWN0cywgYW5kIGRpc2NvdXJhZ2UgKG5vdCBwcmV2ZW50KSBleHRlcm5hbCBhY2Nlc3MgdG8gdGhpc1xuICogZGF0YS4gSW4gbW9kZXJuIGJyb3dzZXJzLCB0aGUgYWJvdmUgY29kZSB3aWxsIGVsaW1pbmF0ZSB0aGUgcG90ZW50aWFsIG9mXG4gKiBuYW1pbmcgY29uZmxpY3RzLCBhbmQgYmV0dGVyIGhpZGUgdGhlIGRhdGEgYmVoaW5kIGEgcmVhbCBTeW1ib2wuXG4gKlxuICogQGZ1bmN0aW9uIGNyZWF0ZVN5bWJvbFxuICogQHBhcmFtIHtzdHJpbmd9IGRlc2NyaXB0aW9uIC0gQSBzdHJpbmcgdG8gaWRlbnRpZnkgdGhlIHN5bWJvbCB3aGVuIGRlYnVnZ2luZ1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTeW1ib2woZGVzY3JpcHRpb24pIHtcbiAgcmV0dXJuIHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgP1xuICAgIFN5bWJvbChkZXNjcmlwdGlvbikgOlxuICAgIGBfJHtkZXNjcmlwdGlvbn1gO1xufVxuIiwiLypcbiAqIE1pY3JvdGFzayBoZWxwZXIgZm9yIElFIDExLlxuICpcbiAqIEV4ZWN1dGluZyBhIGZ1bmN0aW9uIGFzIGEgbWljcm90YXNrIGlzIHRyaXZpYWwgaW4gYnJvd3NlcnMgdGhhdCBzdXBwb3J0XG4gKiBwcm9taXNlcywgd2hvc2UgdGhlbigpIGNsYXVzZXMgdXNlIG1pY3JvdGFzayB0aW1pbmcuIElFIDExIGRvZXNuJ3Qgc3VwcG9ydFxuICogcHJvbWlzZXMsIGJ1dCBkb2VzIHN1cHBvcnQgTXV0YXRpb25PYnNlcnZlcnMsIHdoaWNoIGFyZSBhbHNvIGV4ZWN1dGVkIGFzXG4gKiBtaWNyb3Rhc2tzLiBTbyB0aGlzIGhlbHBlciB1c2VzIGFuIE11dGF0aW9uT2JzZXJ2ZXIgdG8gYWNoaWV2ZSBtaWNyb3Rhc2tcbiAqIHRpbWluZy5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9qYWtlYXJjaGliYWxkLmNvbS8yMDE1L3Rhc2tzLW1pY3JvdGFza3MtcXVldWVzLWFuZC1zY2hlZHVsZXMvXG4gKlxuICogSW5zcGlyZWQgYnkgUG9seW1lcidzIGFzeW5jKCkgZnVuY3Rpb24uXG4gKi9cblxuXG4vLyBUaGUgcXVldWUgb2YgcGVuZGluZyBjYWxsYmFja3MgdG8gYmUgZXhlY3V0ZWQgYXMgbWljcm90YXNrcy5cbmxldCBjYWxsYmFja3MgPSBbXTtcblxuLy8gQ3JlYXRlIGFuIGVsZW1lbnQgdGhhdCB3ZSB3aWxsIG1vZGlmeSB0byBmb3JjZSBvYnNlcnZhYmxlIG11dGF0aW9ucy5cbmxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuXG4vLyBBIG1vbm90b25pY2FsbHktaW5jcmVhc2luZyB2YWx1ZS5cbmxldCBjb3VudGVyID0gMDtcblxuXG4vKipcbiAqIEFkZCBhIGNhbGxiYWNrIHRvIHRoZSBtaWNyb3Rhc2sgcXVldWUuXG4gKlxuICogVGhpcyB1c2VzIGEgTXV0YXRpb25PYnNlcnZlciBzbyB0aGF0IGl0IHdvcmtzIG9uIElFIDExLlxuICpcbiAqIE5PVEU6IElFIDExIG1heSBhY3R1YWxseSB1c2UgdGltZW91dCB0aW1pbmcgd2l0aCBNdXRhdGlvbk9ic2VydmVycy4gVGhpc1xuICogbmVlZHMgbW9yZSBpbnZlc3RpZ2F0aW9uLlxuICpcbiAqIEBmdW5jdGlvbiBtaWNyb3Rhc2tcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pY3JvdGFzayhjYWxsYmFjaykge1xuICBjYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gIC8vIEZvcmNlIGEgbXV0YXRpb24uXG4gIGVsZW1lbnQudGV4dENvbnRlbnQgPSArK2NvdW50ZXI7XG59XG5cblxuLy8gRXhlY3V0ZSBhbnkgcGVuZGluZyBjYWxsYmFja3MuXG5mdW5jdGlvbiBleGVjdXRlQ2FsbGJhY2tzKCkge1xuICB3aGlsZSAoY2FsbGJhY2tzLmxlbmd0aCA+IDApIHtcbiAgICBsZXQgY2FsbGJhY2sgPSBjYWxsYmFja3Muc2hpZnQoKTtcbiAgICBjYWxsYmFjaygpO1xuICB9XG59XG5cblxuLy8gQ3JlYXRlIHRoZSBvYnNlcnZlci5cbmxldCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGV4ZWN1dGVDYWxsYmFja3MpO1xub2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50LCB7XG4gIGNoYXJhY3RlckRhdGE6IHRydWVcbn0pO1xuIiwiLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gZm9yIHJlbmRlcmluZyBhbiBhcnJheSBvZiBpdGVtcyBhcyBlbGVtZW50cy5cbiAqXG4gKiBUaGlzIGlzIG5vdCBhIG1peGluLCBidXQgYSBmdW5jdGlvbiBjb21wb25lbnRzIGNhbiB1c2UgaWYgdGhleSBuZWVkIHRvXG4gKiBnZW5lcmF0ZSBhIHNldCBvZiBlbGVtZW50cyBmb3IgdGhlIGl0ZW1zIGluIGFuIGFycmF5LlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gd2lsbCByZXVzZSBleGlzdGluZyBlbGVtZW50cyBpZiBwb3NzaWJsZS4gRS5nLiwgaWYgaXQgaXMgY2FsbGVkXG4gKiB0byByZW5kZXIgYW4gYXJyYXkgb2YgNCBpdGVtcywgYW5kIGxhdGVyIGNhbGxlZCB0byByZW5kZXIgYW4gYXJyYXkgb2YgNVxuICogaXRlbXMsIGl0IGNhbiByZXVzZSB0aGUgZXhpc3RpbmcgNCBpdGVtcywgY3JlYXRpbmcganVzdCBvbmUgbmV3IGVsZW1lbnQuXG4gKiBOb3RlLCBob3dldmVyLCB0aGF0IHRoaXMgcmUtcmVuZGVyaW5nIGlzIG5vdCBhdXRvbWF0aWMuIElmLCBhZnRlciBjYWxsaW5nXG4gKiB0aGlzIGZ1bmN0aW9uLCB5b3UgbWFuaXB1bGF0ZSB0aGUgYXJyYXkgeW91IHVzZWQsIHlvdSBtdXN0IHN0aWxsIGNhbGwgdGhpc1xuICogZnVuY3Rpb24gYWdhaW4gdG8gcmUtcmVuZGVyIHRoZSBhcnJheS5cbiAqXG4gKiBUaGUgYHJlbmRlckl0ZW1gIHBhcmFtZXRlciB0YWtlcyBhIGZ1bmN0aW9uIG9mIHR3byBhcmd1bWVudHM6IGFuIGl0ZW0gdG9cbiAqIHRvIHJlbmRlciwgYW5kIGFuIGV4aXN0aW5nIGVsZW1lbnQgKGlmIG9uZSBleGlzdHMpIHdoaWNoIGNhbiBiZSByZXB1cnBvc2VkIHRvXG4gKiByZW5kZXIgdGhhdCBpdGVtLiBJZiB0aGUgbGF0dGVyIGFyZ3VtZW50IGlzIG51bGwsIHRoZSBgcmVuZGVySXRlbSgpYCBmdW5jdGlvblxuICogc2hvdWxkIGNyZWF0ZSBhIG5ldyBlbGVtZW50IGFuZCByZXR1cm4gaXQuIFRoZSBmdW5jdGlvbiBzaG91bGQgZG8gdGhlIHNhbWVcbiAqIGlmIHRoZSBzdXBwbGllZCBleGlzdGluZyBlbGVtZW50IGlzIG5vdCBzdWl0YWJsZSBmb3IgcmVuZGVyaW5nIHRoZSBnaXZlblxuICogaXRlbTsgdGhlIHJldHVybmVkIGVsZW1lbnQgd2lsbCBiZSB1c2VkIHRvIHJlcGxhY2UgdGhlIGV4aXN0aW5nIG9uZS4gSWYgdGhlXG4gKiBleGlzdGluZyBlbGVtZW50ICppcyogc3VpdGFibGUsIHRoZSBmdW5jdGlvbiBjYW4gc2ltcGx5IHVwZGF0ZSBpdCBhbmQgcmV0dXJuXG4gKiBpdCBhcyBpcy5cbiAqXG4gKiBFeGFtcGxlOiBUaGUgZm9sbG93aW5nIHdpbGwgcmVuZGVyIGFuIGFycmF5IG9mIHN0cmluZ3MgaW4gZGl2cyBhcyBjaGlsZHJlblxuICogb2YgdGhlIGBjb250YWluZXJgIGVsZW1lbnQ6XG4gKlxuICogICAgIGxldCBzdHJpbmdzID0gWydhJywgJ2InLCAnYycsIC4uLl07XG4gKiAgICAgbGV0IGNvbnRhaW5lciA9IHRoaXMucXVlcnlTZWxlY3RvciguLi4pO1xuICogICAgIHJlbmRlckFycmF5QXNFbGVtZW50cyhzdHJpbmdzLCBjb250YWluZXIsIChzdHJpbmcsIGVsZW1lbnQpID0+IHtcbiAqICAgICAgIGlmICghZWxlbWVudCkge1xuICogICAgICAgICAvLyBObyBlbGVtZW50IGV4aXN0cyB5ZXQsIHNvIGNyZWF0ZSBhIG5ldyBvbmUuXG4gKiAgICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAqICAgICAgIH1cbiAqICAgICAgIC8vIFNldC91cGRhdGUgdGhlIHRleHQgY29udGVudCBvZiB0aGUgZWxlbWVudC5cbiAqICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBzdHJpbmc7XG4gKiAgICAgICByZXR1cm4gZWxlbWVudDtcbiAqICAgICB9KTtcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBpdGVtcyAtIHRoZSBpdGVtcyB0byByZW5kZXJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRhaW5lciAtIHRoZSBwYXJlbnQgdGhhdCB3aWxsIGhvbGQgdGhlIGVsZW1lbnRzXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSByZW5kZXJJdGVtIC0gcmV0dXJucyBhIG5ldyBlbGVtZW50IGZvciBhbiBpdGVtLCBvclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcHVycG9zZXMgYW4gZXhpc3RpbmcgZWxlbWVudCBmb3IgYW4gaXRlbVxuICovXG5mdW5jdGlvbiByZW5kZXJBcnJheUFzRWxlbWVudHMoaXRlbXMsIGNvbnRhaW5lciwgcmVuZGVySXRlbSkge1xuICAvLyBDcmVhdGUgYSBuZXcgc2V0IG9mIGVsZW1lbnRzIGZvciB0aGUgY3VycmVudCBpdGVtcy5cbiAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICBsZXQgb2xkRWxlbWVudCA9IGNvbnRhaW5lci5jaGlsZE5vZGVzW2luZGV4XTtcbiAgICBsZXQgbmV3RWxlbWVudCA9IHJlbmRlckl0ZW0oaXRlbSwgb2xkRWxlbWVudCk7XG4gICAgaWYgKG5ld0VsZW1lbnQpIHtcbiAgICAgIGlmICghb2xkRWxlbWVudCkge1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmV3RWxlbWVudCk7XG4gICAgICB9IGVsc2UgaWYgKG5ld0VsZW1lbnQgIT09IG9sZEVsZW1lbnQpIHtcbiAgICAgICAgY29udGFpbmVyLnJlcGxhY2VDaGlsZChuZXdFbGVtZW50LCBvbGRFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIC8vIElmIHRoZSBhcnJheSBzaHJhbmssIHJlbW92ZSB0aGUgZXh0cmEgZWxlbWVudHMgd2hpY2ggYXJlIG5vIGxvbmdlciBuZWVkZWQuXG4gIHdoaWxlIChjb250YWluZXIuY2hpbGROb2Rlcy5sZW5ndGggPiBpdGVtcy5sZW5ndGgpIHtcbiAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmNoaWxkTm9kZXNbaXRlbXMubGVuZ3RoXSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyQXJyYXlBc0VsZW1lbnRzO1xuIiwiLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gZm9yIHN0YW5kYXJkIGNsYXNzTGlzdC50b2dnbGUoKSBiZWhhdmlvciBvbiBvbGQgYnJvd3NlcnMsXG4gKiBuYW1lbHkgSUUgMTEuXG4gKlxuICogVGhlIHN0YW5kYXJkXG4gKiBbY2xhc3NsaXN0XShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRWxlbWVudC9jbGFzc0xpc3QpXG4gKiBvYmplY3QgaGFzIGEgYHRvZ2dsZSgpYCBmdW5jdGlvbiB0aGF0IHN1cHBvcnRzIGEgc2Vjb25kIEJvb2xlYW4gcGFyYW1ldGVyXG4gKiB0aGF0IGNhbiBiZSB1c2VkIHRvIHN1Y2NpbmN0bHkgdHVybiBhIGNsYXNzIG9uIG9yIG9mZi4gVGhpcyBmZWF0dXJlIGlzIG9mdGVuXG4gKiB1c2VmdWwgaW4gZGVzaWduaW5nIGN1c3RvbSBlbGVtZW50cywgd2hpY2ggbWF5IHdhbnQgdG8gZXh0ZXJuYWxseSByZWZsZWN0XG4gKiBjb21wb25lbnQgc3RhdGUgaW4gYSBDU1MgY2xhc3MgdGhhdCBjYW4gYmUgdXNlZCBmb3Igc3R5bGluZyBwdXJwb3Nlcy5cbiAqXG4gKiBVbmZvcnR1bmF0ZWx5LCBJRSAxMSBkb2VzIG5vdCBzdXBwb3J0IHRoZSBCb29sZWFuIHBhcmFtZXRlciB0b1xuICogYGNsYXNzTGlzdC50b2dnbGUoKWAuIFRoaXMgaGVscGVyIGZ1bmN0aW9uIGJlaGF2ZXMgbGlrZSB0aGUgc3RhbmRhcmRcbiAqIGB0b2dnbGUoKWAsIGluY2x1ZGluZyBzdXBwb3J0IGZvciB0aGUgQm9vbGVhbiBwYXJhbWV0ZXIsIHNvIHRoYXQgaXQgY2FuIGJlXG4gKiB1c2VkIGV2ZW4gb24gSUUgMTEuXG4gKlxuICogQGZ1bmN0aW9uIHRvZ2dsZUNsYXNzXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gVGhlIGVsZW1lbnQgdG8gbW9kaWZ5XG4gKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIC0gVGhlIGNsYXNzIHRvIGFkZC9yZW1vdmVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZvcmNlXSAtIEZvcmNlIHRoZSBjbGFzcyB0byBiZSBhZGRlZCAoaWYgdHJ1ZSkgb3IgcmVtb3ZlZFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgKGlmIGZhbHNlKVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b2dnbGVDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUsIGZvcmNlKSB7XG4gIGxldCBjbGFzc0xpc3QgPSBlbGVtZW50LmNsYXNzTGlzdDtcbiAgbGV0IGFkZENsYXNzID0gKHR5cGVvZiBmb3JjZSA9PT0gJ3VuZGVmaW5lZCcpID9cbiAgICAhY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkgOlxuICAgIGZvcmNlO1xuICBpZiAoYWRkQ2xhc3MpIHtcbiAgICBjbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICB9XG4gIHJldHVybiBhZGRDbGFzcztcbn1cbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvY3JlYXRlU3ltYm9sJztcbmltcG9ydCBXcmFwcGVkU3RhbmRhcmRFbGVtZW50IGZyb20gJy4uLy4uL2Jhc2ljLXdyYXBwZWQtc3RhbmRhcmQtZWxlbWVudC9zcmMvV3JhcHBlZFN0YW5kYXJkRWxlbWVudCc7XG5pbXBvcnQgdG9nZ2xlQ2xhc3MgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvdG9nZ2xlQ2xhc3MnO1xuXG5cbi8vIFN5bWJvbHMgZm9yIHByaXZhdGUgZGF0YSBtZW1iZXJzIG9uIGFuIGVsZW1lbnQuXG5jb25zdCBhcmVhTGlua1N5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnYXJlYUxpbmsnKTtcblxuXG4vKipcbiAqIEFuIGFuY2hvciAobGluaykgdGhhdCBoaWdobGlnaHRzIGl0c2VsZiB3aGVuIGl0cyBkZXN0aW5hdGlvbiBtYXRjaGVzIHRoZVxuICogY3VycmVudCBsb2NhdGlvbi5cbiAqXG4gKiBbTGl2ZSBkZW1vXShodHRwOi8vYmFzaWN3ZWJjb21wb25lbnRzLm9yZy9iYXNpYy13ZWItY29tcG9uZW50cy9wYWNrYWdlcy9iYXNpYy1jdXJyZW50LWFuY2hvci8pXG4gKlxuICogU3VjaCBhIGxpbmsgY29tbW9ubHkgYXBwZWFycyBpbiB0b29sYmFycywgc2lkZSBiYXJzLCBhbmQgb3RoZXIgbmF2aWdhdGlvblxuICogZWxlbWVudHMuIEluIHRoZXNlIHNpdHVhdGlvbnMsIHlvdSBnZW5lcmFsbHkgd2FudCB0aGUgdXNlciB0byB1bmRlcnN0YW5kIHdoYXRcbiAqIHBhZ2Ugb3IgYXJlYSB0aGUgdXNlciBpcyBhbHJlYWR5IG9uLlxuICpcbiAqIFdoZW4gdGhlIGxpbmsgaXMgY3VycmVudCDigJQgd2hlbiBpdCBwb2ludHMgdG8gdGhlIGN1cnJlbnQgbG9jYXRpb24g4oCUIHRoZVxuICogbGluayB3aWxsIGhhdmUgdGhlIENTUyBgY3VycmVudGAgY2xhc3MgYXBwbGllZCB0byBpdCwgYW5kIGl0cyBgY3VycmVudGBcbiAqIHByb3BlcnR5IHdpbGwgYmUgdHJ1ZS5cbiAqXG4gKiBOb3RlOiBvbmUgbGltaXRhdGlvbiBvZiB0aGlzIGNvbXBvbmVudCBpcyB0aGF0LCBieSBkZWZhdWx0LCB0aGUgbGluayBkb2VzXG4gKiAqbm90KiBzaG93IHRoZSBzdGFuZGFyZCBsaW5rIGNvbG9yICh1c3VhbGx5IGJsdWUpIGFuZCB0ZXh0IGRlY29yYXRpb25cbiAqICh1bmRlcmxpbmUpLiBIb3dldmVyLCBpbiBuYXZpZ2F0aW9uIGVsZW1lbnRzIGxpa2UgdG9vbGJhcnMsIHlvdSBvZnRlbiB3aWxsXG4gKiB3YW50IHRvIGV4cGxpY2l0bHkgc3BlY2lmaWMgbGluayBjb2xvcnMgYW55d2F5LCBlLmcuLCB0byByZWZsZWN0IHlvdXJcbiAqIGFwcGxpY2F0aW9uJ3MgdmlzdWFsIHN0eWxlIGFuZCBicmFuZC5cbiAqL1xuY2xhc3MgQ3VycmVudEFuY2hvciBleHRlbmRzIFdyYXBwZWRTdGFuZGFyZEVsZW1lbnQud3JhcCgnYScpIHtcblxuICAvKipcbiAgICogVHJ1ZSBpZiB0aGUgbGluayBwb2ludHMgdG8gYW4gYXJlYSB3aXRoaW4gYSBzaXRlLCBub3QganVzdCBhIHNpbmdsZSBwYWdlLlxuICAgKlxuICAgKiBJZiB0cnVlLCB0aGUgbWF0Y2hpbmcgcnVsZSB0byBkZXRlcm1pbmUgd2hldGhlciB0aGUgbGluayBpcyBjdXJyZW50IGNoYW5nZXM6XG4gICAqIGFuIGFyZWEgbGluayBpcyBjb25zaWRlcmVkIHRvIGJlIGN1cnJlbnQgaWYgdGhlIGxpbmsncyBkZXN0aW5hdGlvbiBmb3JtcyBhXG4gICAqIHByZWZpeCBvZiB0aGUgY3VycmVudCBsb2NhdGlvbiAoaW5zdGVhZCBvZiBtYXRjaGluZyB0aGUgY29tcGxldGUgVVJMKS5cbiAgICpcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBnZXQgYXJlYUxpbmsoKSB7XG4gICAgcmV0dXJuIHRoaXNbYXJlYUxpbmtTeW1ib2xdO1xuICB9XG4gIHNldCBhcmVhTGluayh2YWx1ZSkge1xuICAgIC8vIENhc3QgYm9vbGVhbiBvciBzdHJpbmcgdmFsdWVzIHRvIGJvb2xlYW4uXG4gICAgdGhpc1thcmVhTGlua1N5bWJvbF0gPSAoU3RyaW5nKHZhbHVlKSA9PT0gJ3RydWUnKTtcbiAgICByZWZyZXNoKHRoaXMpO1xuICB9XG5cbiAgYXR0YWNoZWRDYWxsYmFjaygpIHtcbiAgICBpZiAoc3VwZXIuYXR0YWNoZWRDYWxsYmFjaykgeyBzdXBlci5hdHRhY2hlZENhbGxiYWNrKCk7IH1cbiAgICByZWZyZXNoKHRoaXMpO1xuICB9XG5cbiAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIGV2ZW50ID0+IHtcbiAgICAgIHJlZnJlc2godGhpcyk7XG4gICAgfSk7XG5cbiAgICAvLyBTdHVwaWQgRWRnZS9JRSBcInN1cHBvcnRcIiBwb3BzdGF0ZSwgYnV0IGRvbid0IGZpcmUgaXQgb24gaGFzaGNoYW5nZS5cbiAgICAvLyBTbyB3ZSBoYXZlIHRvIGxpc3RlbiBmb3IgaGFzaGNoYW5nZSBhcyB3ZWxsLCB3aXRoIHRoZSByZXN1bHQgdGhhdCBhXG4gICAgLy8gc3RhbmRhcmRzLWNvbXBsaWFudCBicm93c2VyIG1heSBlbmQgdXAgcmVmcmVzaGluZyB0aGUgbGluayB0d2ljZS5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIGV2ZW50ID0+IHtcbiAgICAgIHJlZnJlc2godGhpcyk7XG4gICAgfSk7XG5cbiAgICAvLyBTZXQgZGVmYXVsdHMuXG4gICAgaWYgKHR5cGVvZiB0aGlzLmFyZWFMaW5rID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5hcmVhTGluayA9IHRoaXMuZGVmYXVsdHMuYXJlYUxpbms7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRydWUgaWYgdGhlIGxpbmsncyBkZXN0aW5hdGlvbiBtYXRjaGVzIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gICAqXG4gICAqIElmIHRoaXMgaXMgdHJ1ZSwgdGhlIGVsZW1lbnQgd2lsbCBoYXZlIGFuIGBjdXJyZW50YCBDU1MgY2xhc3MgYXBwbGllZCB0byBpdC5cbiAgICpcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBnZXQgY3VycmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jbGFzc0xpc3QuY29udGFpbnMoJ2N1cnJlbnQnKTtcbiAgfVxuICBzZXQgY3VycmVudCh2YWx1ZSkge1xuICAgIHRvZ2dsZUNsYXNzKHRoaXMsICdjdXJyZW50JywgdmFsdWUpO1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2N1cnJlbnQtY2hhbmdlZCcpKTtcbiAgfVxuXG4gIGdldCBkZWZhdWx0cygpIHtcbiAgICBsZXQgZGVmYXVsdHMgPSBzdXBlci5kZWZhdWx0cyB8fCB7fTtcbiAgICBkZWZhdWx0cy5hcmVhTGluayA9IGZhbHNlO1xuICAgIHJldHVybiBkZWZhdWx0cztcbiAgfVxuXG4gIC8vIEF1Z21lbnQgaHJlZiBpbXBsZW1lbnRhdGlvbiBzbyB0aGF0IGNoYW5naW5nIGhyZWYgY2hlY2tzIHRoZSBhY3RpdmUgc3RhdHVzLlxuICBnZXQgaHJlZigpIHtcbiAgICByZXR1cm4gc3VwZXIuaHJlZjtcbiAgfVxuICBzZXQgaHJlZih2YWx1ZSkge1xuICAgIHN1cGVyLmhyZWYgPSB2YWx1ZTtcbiAgICByZWZyZXNoKHRoaXMpO1xuICB9XG5cbiAgZ2V0IHRlbXBsYXRlKCkge1xuICAgIC8vIFJlc2V0IHN0eWxlcyBzbyB0aGF0IGNvbG9yIGNhbiBiZSBzcGVjaWZpZWQgZnJvbSB0aGUgb3V0c2lkZSB3aXRob3V0XG4gICAgLy8gaGF2aW5nIHRvIGRlZmluZSBhIENTUyB2YXJpYWJsZS5cbiAgICByZXR1cm4gYFxuICAgICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG5cbiAgICAgICNpbm5lciB7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcbiAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8YSBpZD1cImlubmVyXCI+PHNsb3Q+PC9zbG90PjwvYT5gO1xuICB9XG5cbn1cblxuXG4vLyBVcGRhdGUgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIHRoZSBlbGVtZW50IGJhc2VkIG9uIHRoZSBjdXJyZW50IGxvY2F0aW9uLlxuZnVuY3Rpb24gcmVmcmVzaChlbGVtZW50KSB7XG4gIGxldCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgbGV0IG1hdGNoO1xuICBpZiAoZWxlbWVudC5hcmVhTGluaykge1xuICAgIC8vIE1hdGNoIHByZWZpeFxuICAgIGxldCBwcmVmaXggPSBlbGVtZW50LmhyZWY7XG4gICAgLy8gSWYgcHJlZml4IGRvZXNuJ3QgZW5kIGluIHNsYXNoLCBhZGQgYSBzbGFzaC5cbiAgICAvLyBXZSB3YW50IHRvIGF2b2lkIG1hdGNoaW5nIGluIHRoZSBtaWRkbGUgb2YgYSBmb2xkZXIgbmFtZS5cbiAgICBpZiAocHJlZml4Lmxlbmd0aCA8IHVybC5sZW5ndGggJiYgcHJlZml4LnN1YnN0cigtMSkgIT09ICcvJykge1xuICAgICAgcHJlZml4ICs9ICcvJztcbiAgICB9XG4gICAgbWF0Y2ggPSAodXJsLnN1YnN0cigwLCBwcmVmaXgubGVuZ3RoKSA9PT0gcHJlZml4KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBNYXRjaCB3aG9sZSBwYXRoXG4gICAgbWF0Y2ggPSAodXJsID09PSBlbGVtZW50LmhyZWYpO1xuICB9XG4gIGVsZW1lbnQuY3VycmVudCA9IG1hdGNoO1xufVxuXG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYmFzaWMtY3VycmVudC1hbmNob3InLCBDdXJyZW50QW5jaG9yKTtcbiIsImltcG9ydCBDb21wb3NhYmxlIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NvbXBvc2FibGUnO1xuaW1wb3J0IFNoYWRvd1RlbXBsYXRlIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NoYWRvd1RlbXBsYXRlJztcbmltcG9ydCBTaGFkb3dFbGVtZW50UmVmZXJlbmNlcyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TaGFkb3dFbGVtZW50UmVmZXJlbmNlcyc7XG5pbXBvcnQgQXR0cmlidXRlTWFyc2hhbGxpbmcgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQXR0cmlidXRlTWFyc2hhbGxpbmcnO1xuaW1wb3J0IERpc3RyaWJ1dGVkQ2hpbGRyZW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlzdHJpYnV0ZWRDaGlsZHJlbic7XG5cblxuLyoqXG4gKiBBIHNhbXBsZSBnZW5lcmFsLXB1cnBvc2UgYmFzZSBjbGFzcyBmb3IgZGVmaW5pbmcgY3VzdG9tIGVsZW1lbnRzIHRoYXQgbWl4ZXNcbiAqIGluIHNvbWUgY29tbW9uIGZlYXR1cmVzOiB0ZW1wbGF0ZSBzdGFtcGluZyBpbnRvIGEgc2hhZG93IHJvb3QsIHNoYWRvdyBlbGVtZW50XG4gKiByZWZlcmVuY2VzLCBtYXJzaGFsbGluZyBhdHRyaWJ1dGVzIHRvIHByb3BlcnRpZXMsIGFuZCByZXRyaWV2aW5nIHRoZSBjaGlsZHJlblxuICogZGlzdHJpYnV0ZWQgdG8gYSBjb21wb25lbnQuXG4gKlxuICogVGhpcyBiYXNlIGNsYXNzIGlzIG5vdCBzcGVjaWFsIGluIGFueSB3YXksIGFuZCBpcyBkZWZpbmVkIG9ubHkgYXMgYVxuICogY29udmVuaWVudCBzaG9ydGhhbmQgZm9yIGFwcGx5aW5nIHRoZSBtaXhpbnMgbGlzdGVkIGFib3ZlLiBZb3UgY2FuIHVzZSB0aGlzXG4gKiBjbGFzcyBhcyBhIGJhc2UgY2xhc3MgZm9yIHlvdXIgb3duIGVsZW1lbnRzLCBvciBlYXNpbHkgY3JlYXRlIHlvdXIgb3duIGJhc2VcbiAqIGNsYXNzIGJ5IGFwcGx5aW5nIHRoZSBzYW1lIHNldCBvZiBtaXhpbnMuXG4gKlxuICogVGhlIEVsZW1lbnRCYXNlIGJhc2UgY2xhc3MgZG9lcyBub3QgcmVnaXN0ZXIgaXRzZWxmIGFzIGEgY3VzdG9tIGVsZW1lbnQgd2l0aFxuICogdGhlIGJyb3dzZXIsIGFuZCBoZW5jZSBjYW5ub3QgYmUgaW5kZXBlbmRlbnRseSBpbnN0YW50aWF0ZWQuXG4gKlxuICogQG1peGVzIEF0dHJpYnV0ZU1hcnNoYWxsaW5nIFxuICogQG1peGVzIENvbXBvc2FibGVcbiAqIEBtaXhlcyBEaXN0cmlidXRlZENoaWxkcmVuXG4gKiBAbWl4ZXMgU2hhZG93RWxlbWVudFJlZmVyZW5jZXNcbiAqIEBtaXhlcyBTaGFkb3dUZW1wbGF0ZVxuICovXG5jbGFzcyBFbGVtZW50QmFzZSBleHRlbmRzIENvbXBvc2FibGUoSFRNTEVsZW1lbnQpLmNvbXBvc2UoXG4gIFNoYWRvd1RlbXBsYXRlLCAgICAgICAgICAvLyBiZWZvcmUgbm9kZSBmaW5kaW5nLCBzbyBzaGFkb3cgcm9vdCBpcyBwb3B1bGF0ZWRcbiAgU2hhZG93RWxlbWVudFJlZmVyZW5jZXMsIC8vIGJlZm9yZSBtYXJzaGFsbGluZywgc28gcHJvcGVydGllcyBjYW4gdXNlIHJlZnNcbiAgQXR0cmlidXRlTWFyc2hhbGxpbmcsXG4gIERpc3RyaWJ1dGVkQ2hpbGRyZW5cbikge1xuXG4gIC8qXG4gICAqIERlYnVnZ2luZyB1dGlsaXR5OiBsb2dzIGEgbWVzc2FnZSwgcHJlZml4ZWQgYnkgdGhlIGNvbXBvbmVudCdzIHRhZy5cbiAgICovXG4gIGxvZyh0ZXh0KSB7XG4gICAgaWYgKHN1cGVyLmxvZykgeyBzdXBlci5sb2codGV4dCk7IH1cbiAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmxvY2FsTmFtZX06ICR7dGV4dH1gKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVsZW1lbnRCYXNlO1xuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9jcmVhdGVTeW1ib2wnO1xuaW1wb3J0IEVsZW1lbnRCYXNlIGZyb20gJy4uLy4uL2Jhc2ljLWVsZW1lbnQtYmFzZS9zcmMvRWxlbWVudEJhc2UnO1xuXG5cbi8vIFN5bWJvbHMgZm9yIHByaXZhdGUgZGF0YSBtZW1iZXJzIG9uIGFuIGVsZW1lbnQuXG5jb25zdCBmYWRlQ29sb3JTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2ZhZGVDb2xvcicpO1xuXG5cbi8qKlxuICogRmFkZXMgb3V0IGNvbnRlbnQgdGhhdCBvdmVyZmxvd3Mgc28gdGhlIHVzZXIga25vd3MgdGhlcmUncyBtb3JlLlxuICpcbiAqIFRoaXMgY29tcG9uZW50IGRvZXNuJ3QgaGFuZGxlIGludGVyYWN0aXZpdHkuXG4gKlxuICogVGhlIGNvbXBvbmVudCBuZWVkcyB0byBrbm93IHRoZSBjb2xvciBpdCBzaG91bGQgZmFkZSB0bywgd2hpY2ggaXQgdHJpZXMgdG9cbiAqIGluZmVyIGZyb20gdGhlIGJhY2tncm91bmQgY29sb3IuIEluIHNvbWUgc2l0dWF0aW9ucywgdGhpcyBtYXkgbm90IHdvcmssIGluXG4gKiB3aGljaCBjYXNlIHlvdSBjYW4gZXhwbGljaXRseSBzZXQgdGhlIGZhZGVDb2xvciBhdHRyaWJ1dGUuXG4gKlxuICogVGhlIGNvbXBvbmVudCBjdXJyZW50bHkgYWx3YXlzIGRpc3BsYXlzIHRoZSBmYWRlLCBldmVuIGlmIHRoZSBjb21wb25lbnQnc1xuICogY29udGVudCBpcyBzaG9ydCBlbm91Z2ggdG8gZml0IGNvbXBsZXRlbHkgaW4gdmlldy5cbiAqXG4gKiBAZXh0ZW5kcyBFbGVtZW50QmFzZVxuICovXG5jbGFzcyBGYWRlT3ZlcmZsb3cgZXh0ZW5kcyBFbGVtZW50QmFzZSB7XG5cbiAgYXR0YWNoZWRDYWxsYmFjaygpIHtcbiAgICBpZiAoc3VwZXIuYXR0YWNoZWRDYWxsYmFjaykgeyBzdXBlci5hdHRhY2hlZENhbGxiYWNrKCk7IH1cbiAgICBpZiAodGhpcy5mYWRlQ29sb3IgPT0gbnVsbCkge1xuICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgY29sb3Igb2YgdGhlIGZhZGUuXG4gICAqXG4gICAqIFRoZSBmYWRlIGNvbG9yIHNob3VsZCBtYXRjaCB0aGUgYmFja2dyb3VuZCBjb2xvci4gVGhlIGNvbXBvbmVudCBkb2VzIGl0c1xuICAgKiBiZXN0IHRvIGluZmVyIHRoZSBiYWNrZ3JvdW5kIGNvbG9yLCBidXQgaW4gc29tZSBzaXR1YXRpb25zLCB0aGF0IG1heSBub3RcbiAgICogd29yay4gSW4gdGhvc2UgY2FzZXMsIHlvdSBjYW4gbWFudWFsbHkgaWRlbnRpZnkgdGhlIGJhY2tncm91bmQgY29sb3IuXG4gICAqIFRoaXMgc2hvdWxkIGJlIGEgc29saWQgY29sb3IuXG4gICAqXG4gICAqIEBhdHRyaWJ1dGUgZmFkZUNvbG9yXG4gICAqIEBkZWZhdWx0IHdoaXRlXG4gICAqL1xuICBnZXQgZmFkZUNvbG9yKCkge1xuICAgIHJldHVybiB0aGlzW2ZhZGVDb2xvclN5bWJvbF07XG4gIH1cbiAgc2V0IGZhZGVDb2xvcih2YWx1ZSkge1xuICAgIHRoaXNbZmFkZUNvbG9yU3ltYm9sXSA9IHZhbHVlO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgbGV0IHJnYiA9IGV4dHJhY3RSZ2JWYWx1ZXModmFsdWUpO1xuICAgICAgaWYgKHJnYikge1xuICAgICAgICBsZXQgZmFkZUNvbG9yVHJhbnNwYXJlbnQgPSBgcmdiYSgke3JnYi5yfSwke3JnYi5nfSwke3JnYi5ifSwwKWA7XG4gICAgICAgIGxldCBncmFkaWVudCA9IGBsaW5lYXItZ3JhZGllbnQoJHtmYWRlQ29sb3JUcmFuc3BhcmVudH0gMCUsICR7dmFsdWV9IDEwMCUpYDtcbiAgICAgICAgdGhpcy4kLmZhZGUuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gZ3JhZGllbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEluZmVyIHRoZSBmYWRlIGNvbG9yIGZyb20gYmFja2dyb3VuZCBjb2xvci4gSWYgeW91IGhhdmUgcHJvZ3JhbW1hdGljYWxseVxuICAgKiBjaGFuZ2VkIHRoZSBjb2xvciBiZWhpbmQgdGhlIGNvbXBvbmVudCwgeW91IGNhbiBpbnZva2UgdGhpcyBtZXRob2QgdG8gaGF2ZVxuICAgKiB0aGUgY29tcG9uZW50IHRyeSB0byBwaWNrIHVwIHRoZSBuZXcgYmFja2dyb3VuZCBjb2xvci5cbiAgICovXG4gIHJlZnJlc2goKSB7XG4gICAgLy8gVE9ETzogQXV0b21hdGljYWxseSBoaWRlIHRoZSBmYWRlIGlmIGFsbCB0aGUgY29udGVudCBjYW4gYmUgc2Vlbi5cbiAgICB0aGlzLmZhZGVDb2xvciA9IGZpbmRCYWNrZ3JvdW5kQ29sb3IodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogVHJ1ZSBpZiB0aGUgY29tcG9uZW50IHNob3VsZCBzaG93IHRoZSBmYWRlIHRvIHRoZSBiYWNrZ3JvdW5kIGNvbG9yLlxuICAgKlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKi9cbiAgZ2V0IHNob3dGYWRlKCkge1xuICAgIHJldHVybiB0aGlzLiQuZmFkZS5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZSc7XG4gIH1cbiAgc2V0IHNob3dGYWRlKHZhbHVlKSB7XG4gICAgdGhpcy4kLmZhZGUuc3R5bGUuZGlzcGxheSA9IHZhbHVlID8gJycgOiAnbm9uZSc7XG4gIH1cblxuICBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cblxuICAgICAgI2ZhZGUge1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGhlaWdodDogM2VtO1xuICAgICAgICBtYXgtaGVpZ2h0OiA1MCU7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyAvKiBMZXRzIHVzZXIgaW50ZXJhY3Qgd2l0aCBjb250ZW50IHRocm91Z2ggdGhlIGZhZGUuICovXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGlkPVwiZmFkZVwiPjwvZGl2PlxuICAgICAgPHNsb3Q+PC9zbG90PlxuICAgIGA7XG4gIH1cblxufVxuXG5cbi8vIFJldHVybiB0aGUgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgZ2l2ZW4gZWxlbWVudC4gSWYgdGhlIGNvbG9yIGlzXG4vLyBcInRyYW5zcGFyZW50XCIgKHRoZSBkZWZhdWx0IGluIE1vemlsbGEgYW5kIElFKSBvciBcInJnYmEoMCwgMCwgMCwgMClcIiAodGhlXG4vLyBkZWZhdWx0IHRyYW5zcGFyZW50IHZhbHVlIGluIEJsaW5rIGFuZCBXZWJraXQpLCB3YWxrIHVwIHRoZSBwYXJlbnQgY2hhaW5cbi8vIHVudGlsIGEgbm9uLXRyYW5zcGFyZW50IGNvbG9yIGlzIGZvdW5kLlxuZnVuY3Rpb24gZmluZEJhY2tncm91bmRDb2xvcihlbGVtZW50KSB7XG4gIGlmIChlbGVtZW50ID09IG51bGwgfHwgdHlwZW9mIGVsZW1lbnQuc3R5bGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gVGhpcyBlbGVtZW50IGhhcyBubyBiYWNrZ3JvdW5kLCBhc3N1bWUgd2hpdGUuXG4gICAgcmV0dXJuICdyZ2IoMjU1LDI1NSwyNTUpJztcbiAgfVxuICBsZXQgYmFja2dyb3VuZENvbG9yID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5iYWNrZ3JvdW5kQ29sb3I7XG4gIGlmIChiYWNrZ3JvdW5kQ29sb3IgPT09ICd0cmFuc3BhcmVudCcgfHwgYmFja2dyb3VuZENvbG9yID09PSAncmdiYSgwLCAwLCAwLCAwKScpIHtcbiAgICByZXR1cm4gZmluZEJhY2tncm91bmRDb2xvcihlbGVtZW50LnBhcmVudE5vZGUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBiYWNrZ3JvdW5kQ29sb3I7XG4gIH1cbn1cblxuXG4vLyBSZXR1cm4gdGhlIGluZGl2aWR1YWwgUkdCIHZhbHVlcyBmcm9tIGEgQ1NTIGNvbG9yIHN0cmluZy5cbmZ1bmN0aW9uIGV4dHJhY3RSZ2JWYWx1ZXMocmdiU3RyaW5nKSB7XG4gIGxldCByZ2JSZWdleCA9IC9yZ2JhP1xcKFxccyooXFxkKylcXHMqLFxccyooXFxkKylcXHMqLFxccyooXFxkKylcXHMqKD86LFxccypbXFxkXFwuXStcXHMqKT9cXCkvO1xuICBsZXQgbWF0Y2ggPSByZ2JSZWdleC5leGVjKHJnYlN0cmluZyk7XG4gIGlmIChtYXRjaCkge1xuICAgIHJldHVybiB7XG4gICAgICByOiBwYXJzZUludChtYXRjaFsxXSksXG4gICAgICBnOiBwYXJzZUludChtYXRjaFsyXSksXG4gICAgICBiOiBwYXJzZUludChtYXRjaFszXSlcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdiYXNpYy1mYWRlLW92ZXJmbG93JywgRmFkZU92ZXJmbG93KTtcbmV4cG9ydCBkZWZhdWx0IEZhZGVPdmVyZmxvdztcbiIsImltcG9ydCBFbGVtZW50QmFzZSBmcm9tICcuLi8uLi9iYXNpYy1lbGVtZW50LWJhc2Uvc3JjL0VsZW1lbnRCYXNlJztcbmltcG9ydCBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50IGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQnO1xuaW1wb3J0IENsaWNrU2VsZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NsaWNrU2VsZWN0aW9uJztcbmltcG9ydCBDb250ZW50QXNJdGVtcyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Db250ZW50QXNJdGVtcyc7XG5pbXBvcnQgRGlyZWN0aW9uU2VsZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0RpcmVjdGlvblNlbGVjdGlvbic7XG5pbXBvcnQgR2VuZXJpYyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9HZW5lcmljJztcbmltcG9ydCBJdGVtc1NlbGVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9JdGVtc1NlbGVjdGlvbic7XG5pbXBvcnQgS2V5Ym9hcmQgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvS2V5Ym9hcmQnO1xuaW1wb3J0IEtleWJvYXJkRGlyZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0tleWJvYXJkRGlyZWN0aW9uJztcbmltcG9ydCBLZXlib2FyZFBhZ2VkU2VsZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0tleWJvYXJkUGFnZWRTZWxlY3Rpb24nO1xuaW1wb3J0IEtleWJvYXJkUHJlZml4U2VsZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0tleWJvYXJkUHJlZml4U2VsZWN0aW9uJztcbmltcG9ydCBPYnNlcnZlQ29udGVudENoYW5nZXMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvT2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzJztcbmltcG9ydCBTZWxlY3Rpb25BcmlhQWN0aXZlIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NlbGVjdGlvbkFyaWFBY3RpdmUnO1xuaW1wb3J0IFNlbGVjdGlvbkhpZ2hsaWdodCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TZWxlY3Rpb25IaWdobGlnaHQnO1xuaW1wb3J0IFNlbGVjdGlvbkluVmlldyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TZWxlY3Rpb25JblZpZXcnO1xuaW1wb3J0IFRhcmdldEluQ29sbGVjdGl2ZSBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9UYXJnZXRJbkNvbGxlY3RpdmUnO1xuXG5cbi8qKlxuICogQSBzaW5nbGUtc2VsZWN0aW9uIGxpc3QgYm94IHRoYXQgc3VwcG9ydHMgc2VsZWN0aW9uIGhpZ2hsaWdodGluZyAodXNpbmcgdGhlXG4gKiBzeXN0ZW0gaGlnaGxpZ2h0IGNvbG9yKSBhbmQga2V5Ym9hcmQgbmF2aWdhdGlvbi5cbiAqXG4gKiBbTGl2ZSBkZW1vXShodHRwOi8vYmFzaWN3ZWJjb21wb25lbnRzLm9yZy9iYXNpYy13ZWItY29tcG9uZW50cy9wYWNrYWdlcy9iYXNpYy1saXN0LWJveC8pXG4gKlxuICogVGhlIHVzZXIgY2FuIHNlbGVjdCBhbiBpdGVtIHdpdGggdGhlIG1vdXNlL3RvdWNoIG9yIGtleWJvYXJkOiBVcC9Eb3duLCBQYWdlXG4gKiBVcC9Eb3duLCBIb21lL0VuZC5cbiAqXG4gKiBMaWtlIG90aGVyIEJhc2ljIFdlYiBDb21wb25lbnRzLCB0aGlzIGNhbiBoYW5kbGUgZGlzdHJpYnV0ZWQgY29udGVudDogeW91IGNhblxuICogaW5jbHVkZSBhIGNvbnRlbnQgZWxlbWVudCBpbnNpZGUgYSBiYXNpYy1saXN0LWJveCwgYW5kIHRoZSBsaXN0IHdpbGwgbmF2aWdhdGVcbiAqIHRocm91Z2ggdGhlIGRpc3RyaWJ1dGVkIGNvbnRlbnQuXG4gKlxuICogVGhpcyBjb21wb25lbnQgaW5jbHVkZXMgYmFzaWMgQVJJQSBzdXBwb3J0IHRvIHByb3ZpZGUgYSByZWFzb25hYmxlIGRlZmF1bHRcbiAqIGV4cGVyaWVuY2UsIGUuZy4sIGZvciBzY3JlZW4gcmVhZGVycy4gVGhlIGxpc3QgY29tcG9uZW50IGl0c2VsZiB3aWxsIGJlXG4gKiBhc3NpZ25lZCBhbiBhcHByb3ByaWF0ZSBBUklBIHJvbGUgKGRlZmF1bHQgaXMgXCJsaXN0Ym94XCIpLiBUaGUgSUQgb2YgdGhlXG4gKiBzZWxlY3RlZCBpdGVtIHdpbGwgYmUgcmVmbGVjdGVkIGluIGFuIFwiYXJpYS1hY3RpdmVkZXNjZW5kYW50XCIgYXR0cmlidXRlXG4gKiBhcHBsaWVkIHRvIHRoZSBsaXN0LiBUbyBzdXBwb3J0IHRoaXMgZmVhdHVyZSwgYWxsIGl0ZW1zIGluIHRoZSBsaXN0IG5lZWRcbiAqIHVuaXF1ZSBJRHMuIElmIGFuIGl0ZW0gZG9lcyBub3QgaGF2ZSBhbiBJRCwgYmFzaWMtbGlzdC1ib3ggd2lsbCBhdXRvbWF0aWNhbGx5XG4gKiBhc3NpZ24gYSBkZWZhdWx0IElELlxuICpcbiAqIFRoZSBrZXlib2FyZCBpbnRlcmFjdGlvbiBtb2RlbCBnZW5lcmFsbHkgZm9sbG93cyB0aGF0IG9mIE1pY3Jvc29mdCBXaW5kb3dzJ1xuICogbGlzdCBib3hlcyBpbnN0ZWFkIG9mIHRob3NlIGluIE9TIFg6XG4gKlxuICogKiBUaGUgUGFnZSBVcC9Eb3duIGFuZCBIb21lL0VuZCBrZXlzIGFjdHVhbGx5IG1vdmUgdGhlIHNlbGVjdGlvbiwgcmF0aGVyIHRoYW5cbiAqICAganVzdCBzY3JvbGxpbmcgdGhlIGxpc3QuIFRoZSBmb3JtZXIgYmVoYXZpb3Igc2VlbXMgbW9yZSBnZW5lcmFsbHkgdXNlZnVsXG4gKiAgIGZvciBrZXlib2FyZCB1c2Vycy5cbiAqXG4gKiAqIFByZXNzaW5nIFBhZ2UgVXAvRG93biB3aWxsIG1vdmUgdGhlIHNlbGVjdGlvbiB0byB0aGUgdG9wbW9zdC9ib3R0b21tb3N0XG4gKiAgIHZpc2libGUgaXRlbSBpZiB0aGUgc2VsZWN0aW9uIGlzIG5vdCBhbHJlYWR5IHRoZXJlLiBUaGVyZWFmdGVyLCB0aGUga2V5XG4gKiAgIHdpbGwgbW92ZSB0aGUgc2VsZWN0aW9uIHVwL2Rvd24gYnkgYSBwYWdlLCBhbmQgKHBlciB0aGUgYWJvdmUgcG9pbnQpIG1ha2VcbiAqICAgdGhlIHNlbGVjdGVkIGl0ZW0gdmlzaWJsZS5cbiAqXG4gKiBQcm9ncmFtbWF0aWNhbGx5IHNlbGVjdGluZyBhbiBpdGVtIChieSBzZXR0aW5nIHRoZSBzZWxlY3RlZCBwcm9wZXJ0eSkgc2Nyb2xsc1xuICogdGhlIGl0ZW0gaW50byB2aWV3LlxuICpcbiAqIFRoZSB1c2VyIGNhbiBhbHNvIHNlbGVjdCBhbiBpdGVtIGJ5IHR5cGluZyB0aGUgYmVnaW5uaW5nIG9mIGFuIGl0ZW0ncyB0ZXh0LlxuICpcbiAqIEBleHRlbmRzIEVsZW1lbnRCYXNlXG4gKiBAbWl4ZXMgQ2xpY2tTZWxlY3Rpb25cbiAqIEBtaXhlcyBDb250ZW50QXNJdGVtc1xuICogQG1peGVzIERpcmVjdGlvblNlbGVjdGlvblxuICogQG1peGVzIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnRcbiAqIEBtaXhlcyBHZW5lcmljXG4gKiBAbWl4ZXMgSXRlbXNTZWxlY3Rpb25cbiAqIEBtaXhlcyBLZXlib2FyZFxuICogQG1peGVzIEtleWJvYXJkRGlyZWN0aW9uXG4gKiBAbWl4ZXMgS2V5Ym9hcmRQYWdlZFNlbGVjdGlvblxuICogQG1peGVzIEtleWJvYXJkUHJlZml4U2VsZWN0aW9uXG4gKiBAbWl4ZXMgT2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzXG4gKiBAbWl4ZXMgU2VsZWN0aW9uQXJpYUFjdGl2ZVxuICogQG1peGVzIFNlbGVjdGlvbkhpZ2hsaWdodFxuICogQG1peGVzIFNlbGVjdGlvbkluVmlld1xuICogQG1peGVzIFRhcmdldEluQ29sbGVjdGl2ZVxuICovXG5jbGFzcyBMaXN0Qm94IGV4dGVuZHMgRWxlbWVudEJhc2UuY29tcG9zZShcbiAgQ2xpY2tTZWxlY3Rpb24sXG4gIENvbnRlbnRBc0l0ZW1zLFxuICBEaXJlY3Rpb25TZWxlY3Rpb24sXG4gIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQsXG4gIEdlbmVyaWMsXG4gIEl0ZW1zU2VsZWN0aW9uLFxuICBLZXlib2FyZCxcbiAgS2V5Ym9hcmREaXJlY3Rpb24sXG4gIEtleWJvYXJkUGFnZWRTZWxlY3Rpb24sXG4gIEtleWJvYXJkUHJlZml4U2VsZWN0aW9uLFxuICBPYnNlcnZlQ29udGVudENoYW5nZXMsXG4gIFNlbGVjdGlvbkFyaWFBY3RpdmUsXG4gIFNlbGVjdGlvbkhpZ2hsaWdodCxcbiAgU2VsZWN0aW9uSW5WaWV3LFxuICBUYXJnZXRJbkNvbGxlY3RpdmVcbikge1xuXG4gIGdldCBkZWZhdWx0cygpIHtcbiAgICBsZXQgZGVmYXVsdHMgPSBzdXBlci5kZWZhdWx0cyB8fCB7fTtcbiAgICBkZWZhdWx0cy5uYXZpZ2F0aW9uQXhpcyA9ICd2ZXJ0aWNhbCc7XG4gICAgcmV0dXJuIGRlZmF1bHRzO1xuICB9XG5cbiAgZ2V0IHNjcm9sbFRhcmdldCgpIHtcbiAgICByZXR1cm4gdGhpcy4kLml0ZW1zQ29udGFpbmVyO1xuICB9XG5cbiAgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBgXG4gICAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAgICAgfVxuXG4gICAgICBbdGFyZ2V0PVwiY2hpbGRcIl0ge1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC13ZWJraXQtZmxleDogMTtcbiAgICAgICAgZmxleDogMTtcbiAgICAgIH1cblxuICAgICAgI2l0ZW1zQ29udGFpbmVyIHtcbiAgICAgICAgLXdlYmtpdC1mbGV4OiAxO1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDsgLyogZm9yIG1vbWVudHVtIHNjcm9sbGluZyAqL1xuICAgICAgfVxuXG4gICAgICAvKiBHZW5lcmljIGFwcGVhcmFuY2UgKi9cbiAgICAgIDpob3N0KFtnZW5lcmljPVwiXCJdKSB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2dlbmVyaWM9XCJcIl0pICNpdGVtc0NvbnRhaW5lciA6OmNvbnRlbnQgPiAqIHtcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICBwYWRkaW5nOiAwLjI1ZW07XG4gICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGlkPVwiaXRlbXNDb250YWluZXJcIiByb2xlPVwibm9uZVwiPlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZXh0IGNvbnRlbnQgb2YgdGhlIHNlbGVjdGVkIGl0ZW0uXG4gICAqXG4gICAqIFNldHRpbmcgdGhpcyB2YWx1ZSB0byBhIHN0cmluZyB3aWxsIGF0dGVtcHQgdG8gc2VsZWN0IHRoZSBmaXJzdCBsaXN0IGl0ZW1cbiAgICogd2hvc2UgdGV4dCBjb250ZW50IG1hdGNoIHRoYXQgc3RyaW5nLiBTZXR0aW5nIHRoaXMgdG8gYSBzdHJpbmcgbm90IG1hdGNoaW5nXG4gICAqIGFueSBsaXN0IGl0ZW0gd2lsbCByZXN1bHQgaW4gbm8gc2VsZWN0aW9uLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkSXRlbSA9PSBudWxsIHx8IHRoaXMuc2VsZWN0ZWRJdGVtLnRleHRDb250ZW50ID09IG51bGwgP1xuICAgICAgJycgOlxuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0udGV4dENvbnRlbnQ7XG4gIH1cbiAgc2V0IHZhbHVlKHRleHQpIHtcblxuICAgIGxldCBjdXJyZW50SW5kZXggPSB0aGlzLnNlbGVjdGVkSW5kZXg7XG4gICAgbGV0IG5ld0luZGV4ID0gLTE7IC8vIEFzc3VtZSB3ZSB3b24ndCBmaW5kIHRoZSB0ZXh0LlxuXG4gICAgLy8gRmluZCB0aGUgaXRlbSB3aXRoIHRoZSBpbmRpY2F0ZWQgdGV4dC5cbiAgICBsZXQgaXRlbXMgPSB0aGlzLml0ZW1zO1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSBpdGVtcy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGl0ZW1zW2ldLnRleHRDb250ZW50ID09PSB0ZXh0KSB7XG4gICAgICAgIG5ld0luZGV4ID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5ld0luZGV4ICE9PSBjdXJyZW50SW5kZXgpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IG5ld0luZGV4O1xuICAgICAgbGV0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCd2YWx1ZS1jaGFuZ2VkJyk7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gdGhlIGxpc3QncyB2YWx1ZSBwcm9wZXJ0eSBjaGFuZ2VzLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgTGlzdEJveFxuICAgKiBAZXZlbnQgdmFsdWUtY2hhbmdlZFxuICAgKi9cbn1cblxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2Jhc2ljLWxpc3QtYm94JywgTGlzdEJveCk7XG5leHBvcnQgZGVmYXVsdCBMaXN0Qm94O1xuIiwiaW1wb3J0IEVsZW1lbnRCYXNlIGZyb20gJy4uLy4uL2Jhc2ljLWVsZW1lbnQtYmFzZS9zcmMvRWxlbWVudEJhc2UnO1xuaW1wb3J0IERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCc7XG5pbXBvcnQgQ29udGVudEFzSXRlbXMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ29udGVudEFzSXRlbXMnO1xuaW1wb3J0IEl0ZW1zU2VsZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0l0ZW1zU2VsZWN0aW9uJztcbmltcG9ydCBPYnNlcnZlQ29udGVudENoYW5nZXMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvT2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzJztcbmltcG9ydCBTZWxlY3Rpb25BcmlhQWN0aXZlIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NlbGVjdGlvbkFyaWFBY3RpdmUnO1xuaW1wb3J0IFRhcmdldEluQ29sbGVjdGl2ZSBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9UYXJnZXRJbkNvbGxlY3RpdmUnO1xuXG5sZXQgYmFzZSA9IEVsZW1lbnRCYXNlLmNvbXBvc2UoXG4gIENvbnRlbnRBc0l0ZW1zLFxuICBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50LFxuICBJdGVtc1NlbGVjdGlvbixcbiAgT2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzLFxuICBTZWxlY3Rpb25BcmlhQWN0aXZlLFxuICBUYXJnZXRJbkNvbGxlY3RpdmVcbik7XG5cblxuLyoqXG4gKiBTaG93cyBleGFjdGx5IG9uZSBjaGlsZCBlbGVtZW50IGF0IGEgdGltZS4gVGhpcyBjYW4gYmUgdXNlZnVsLCBmb3IgZXhhbXBsZSxcbiAqIGlmIGEgZ2l2ZW4gVUkgZWxlbWVudCBoYXMgbXVsdGlwbGUgbW9kZXMgdGhhdCBwcmVzZW50IHN1YnN0YW50aWFsbHkgZGlmZmVyZW50XG4gKiBlbGVtZW50cy5cbiAqXG4gKiBUaGUgdHJhbnNpdGlvbiBiZXR3ZWVuIGNoaWxkIGVsZW1lbnRzIGlzIGluc3RhbnRlbm91cy4gSWYgeW91J2QgbGlrZSB0aGVcbiAqIHRyYW5zaXRpb24gdG8gYmUgYWNjb21wYW5pZWQgYnkgdmlzaWJsZSBhbmltYXRlZCBlZmZlY3RzLCBzZWVcbiAqIFtiYXNpYy1hbmltYXRpb24tc3RhZ2VdKC4uL2Jhc2ljLWFuaW1hdGlvbi1zdGFnZSkuXG4gKlxuICogVGhpcyBjb21wb25lbnQgZG9lc24ndCBwcm92aWRlIGFueSBVSSBmb3IgY2hhbmdpbmcgd2hpY2ggbW9kZSBpcyBzaG93bi5cbiAqXG4gKiBAZXh0ZW5kcyBFbGVtZW50QmFzZVxuICogQG1peGVzIENvbnRlbnRBc0l0ZW1zXG4gKiBAbWl4ZXMgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudFxuICogQG1peGVzIEl0ZW1zU2VsZWN0aW9uXG4gKiBAbWl4ZXMgT2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzXG4gKiBAbWl4ZXMgU2VsZWN0aW9uQXJpYUFjdGl2ZVxuICogQG1peGVzIFRhcmdldEluQ29sbGVjdGl2ZVxuICovXG5jbGFzcyBNb2RlcyBleHRlbmRzIGJhc2Uge1xuXG4gIGFwcGx5U2VsZWN0aW9uKGl0ZW0sIHNlbGVjdGVkKSB7XG4gICAgaWYgKHN1cGVyLmFwcGx5U2VsZWN0aW9uKSB7IHN1cGVyLmFwcGx5U2VsZWN0aW9uKGl0ZW0sIHNlbGVjdGVkKTsgfVxuICAgIGl0ZW0uc3R5bGUuZGlzcGxheSA9IHNlbGVjdGVkID8gJycgOiAnbm9uZSc7XG4gICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgIXNlbGVjdGVkKTtcbiAgfVxuXG4gIGdldCBkZWZhdWx0cygpIHtcbiAgICBsZXQgZGVmYXVsdHMgPSBzdXBlci5kZWZhdWx0cyB8fCB7fTtcbiAgICBkZWZhdWx0cy5zZWxlY3Rpb25SZXF1aXJlZCA9IHRydWU7XG4gICAgcmV0dXJuIGRlZmF1bHRzO1xuICB9XG5cbn1cblxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2Jhc2ljLW1vZGVzJywgTW9kZXMpO1xuZXhwb3J0IGRlZmF1bHQgTW9kZXM7XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL2NyZWF0ZVN5bWJvbCc7XG5pbXBvcnQgRWxlbWVudEJhc2UgZnJvbSAnLi4vLi4vYmFzaWMtZWxlbWVudC1iYXNlL3NyYy9FbGVtZW50QmFzZSc7XG5pbXBvcnQgQ29udGVudEZpcnN0Q2hpbGRUYXJnZXQgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ29udGVudEZpcnN0Q2hpbGRUYXJnZXQnO1xuaW1wb3J0IERpcmVjdGlvblNlbGVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXJlY3Rpb25TZWxlY3Rpb24nO1xuaW1wb3J0IERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCc7XG5pbXBvcnQgSXRlbXNTZWxlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvSXRlbXNTZWxlY3Rpb24nO1xuaW1wb3J0IEtleWJvYXJkIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0tleWJvYXJkJztcbmltcG9ydCBLZXlib2FyZERpcmVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9LZXlib2FyZERpcmVjdGlvbic7XG5pbXBvcnQgT2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL09ic2VydmVDb250ZW50Q2hhbmdlcyc7XG5pbXBvcnQgcmVuZGVyQXJyYXlBc0VsZW1lbnRzIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL3JlbmRlckFycmF5QXNFbGVtZW50cyc7XG5pbXBvcnQgVGFyZ2V0SW5Db2xsZWN0aXZlIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1RhcmdldEluQ29sbGVjdGl2ZSc7XG5pbXBvcnQgVGFyZ2V0U2VsZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1RhcmdldFNlbGVjdGlvbic7XG5pbXBvcnQgdG9nZ2xlQ2xhc3MgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvdG9nZ2xlQ2xhc3MnO1xuXG5cbi8vIFN5bWJvbHMgZm9yIHByaXZhdGUgZGF0YSBtZW1iZXJzIG9uIGFuIGVsZW1lbnQuXG5jb25zdCBzZWxlY3RlZEZyYWN0aW9uQ2hhbmdlZExpc3RlbmVyU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdzZWxlY3RlZEZyYWN0aW9uQ2hhbmdlZExpc3RlbmVyJyk7XG5cblxubGV0IGJhc2UgPSBFbGVtZW50QmFzZS5jb21wb3NlKFxuICBDb250ZW50Rmlyc3RDaGlsZFRhcmdldCxcbiAgRGlyZWN0aW9uU2VsZWN0aW9uLFxuICBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50LFxuICBJdGVtc1NlbGVjdGlvbixcbiAgS2V5Ym9hcmQsXG4gIEtleWJvYXJkRGlyZWN0aW9uLFxuICBPYnNlcnZlQ29udGVudENoYW5nZXMsXG4gIFRhcmdldEluQ29sbGVjdGl2ZSxcbiAgVGFyZ2V0U2VsZWN0aW9uXG4pO1xuXG4vKipcbiAqIFByZXNlbnRzIGEgc2V0IG9mIHNtYWxsIGRvdHMgdG8gc2hvdyBsaXN0IGl0ZW0gY291bnQgYW5kIHNlbGVjdCBsaXN0IGl0ZW1zLlxuICpcbiAqIFlvdSBjYW4gc2VlIGEgW2xpdmUgZGVtb10oaHR0cDovL2Jhc2ljd2ViY29tcG9uZW50cy5vcmcvYmFzaWMtd2ViLWNvbXBvbmVudHMvcGFja2FnZXMvYmFzaWMtY2Fyb3VzZWwvY2Fyb3VzZWxXaXRoRG90cy5odG1sKVxuICogb2YgdGhpcyBjb21wb25lbnQgYXBwbGllZCB0byBhIGNhcm91c2VsLlxuICpcbiAqIFRoZXJlIHdpbGwgYmUgb25lIGRvdCBmb3IgZWFjaCBpdGVtLCBhbmQgdGhlIGRvdCBmb3IgdGhlIGN1cnJlbnRseSBzZWxlY3RlZFxuICogaXRlbSB3aWxsIGJlIHNob3duIHNlbGVjdGVkLlxuICpcbiAqIFR5cGljYWwgdXNhZ2U6XG4gKlxuICogICAgIDxiYXNpYy1wYWdlLWRvdHM+XG4gKiAgICAgICA8YmFzaWMtY2Fyb3VzZWw+XG4gKiAgICAgICAgIC4uLiBpbWFnZXMsIGV0Yy4gLi4uXG4gKiAgICAgICA8L2Jhc2ljLWNhcm91c2VsPlxuICogICAgIDwvYmFzaWMtcGFnZS1kb3RzPlxuICpcbiAqIEFsdGhvdWdoIHRoZSBkb3RzIGFyZSBxdWl0ZSBzbWFsbCBieSBkZWZhdWx0LCBjbGlja2luZy90YXBwaW5nIGEgZG90IHdpbGxcbiAqIHdpbGwgc2VsZWN0IHRoZSBjb3JyZXNwb25kaW5nIGxpc3QgaXRlbS5cbiAqXG4gKiBAZXh0ZW5kcyBFbGVtZW50QmFzZVxuICogQG1peGVzIENvbnRlbnRGaXJzdENoaWxkVGFyZ2V0XG4gKiBAbWl4ZXMgRGlyZWN0aW9uU2VsZWN0aW9uXG4gKiBAbWl4ZXMgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudFxuICogQG1peGVzIEl0ZW1zU2VsZWN0aW9uXG4gKiBAbWl4ZXMgS2V5Ym9hcmRcbiAqIEBtaXhlcyBLZXlib2FyZERpcmVjdGlvblxuICogQG1peGVzIE9ic2VydmVDb250ZW50Q2hhbmdlc1xuICogQG1peGVzIFRhcmdldEluQ29sbGVjdGl2ZVxuICogQG1peGVzIFRhcmdldFNlbGVjdGlvblxuICovXG5jbGFzcyBQYWdlRG90cyBleHRlbmRzIGJhc2Uge1xuXG4gIGFwcGx5U2VsZWN0aW9uKGl0ZW0sIHNlbGVjdGVkKSB7XG4gICAgaWYgKHN1cGVyLmFwcGx5U2VsZWN0aW9uKSB7IHN1cGVyLmFwcGx5U2VsZWN0aW9uKGl0ZW0sIHNlbGVjdGVkKTsgfVxuICAgIGxldCBpbmRleCA9IHRoaXMuaXRlbXMuaW5kZXhPZihpdGVtKTtcbiAgICAvLyBTZWUgaWYgdGhlIGNvcnJlc3BvbmRpbmcgZG90IGhhcyBhbHJlYWR5IGJlZW4gY3JlYXRlZC5cbiAgICAvLyBJZiBub3QsIHRoZSBjb3JyZWN0IGRvdCB3aWxsIGJlIHNlbGVjdGVkIHdoZW4gaXQgZ2V0cyBjcmVhdGVkLlxuICAgIGxldCBkb3RzID0gdGhpcy5kb3RzO1xuICAgIGlmIChkb3RzICYmIGRvdHMubGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIGxldCBkb3QgPSB0aGlzLmRvdHNbaW5kZXhdO1xuICAgICAgaWYgKGRvdCkge1xuICAgICAgICB0b2dnbGVDbGFzcyhkb3QsICdzZWxlY3RlZCcsIHNlbGVjdGVkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7XG5cbiAgICB0aGlzLiQuZG90cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgIGxldCBkb3QgPSBldmVudC50YXJnZXQ7XG4gICAgICBsZXQgZG90SW5kZXggPSB0aGlzLmRvdHMuaW5kZXhPZihkb3QpO1xuICAgICAgaWYgKGRvdEluZGV4ID49IDApIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gZG90SW5kZXg7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBnZXQgZGVmYXVsdHMoKSB7XG4gICAgbGV0IGRlZmF1bHRzID0gc3VwZXIuZGVmYXVsdHMgfHwge307XG4gICAgZGVmYXVsdHMubmF2aWdhdGlvbkF4aXMgPSAnaG9yaXpvbnRhbCc7XG4gICAgcmV0dXJuIGRlZmF1bHRzO1xuICB9XG5cbiAgZ2V0IGRvdHMoKSB7XG4gICAgcmV0dXJuIFtdLnNsaWNlLmNhbGwodGhpcy4kLmRvdHMucXVlcnlTZWxlY3RvckFsbCgnLmRvdCcpKTtcbiAgfVxuXG4gIGl0ZW1zQ2hhbmdlZCgpIHtcbiAgICBpZiAoc3VwZXIuaXRlbXNDaGFuZ2VkKSB7IHN1cGVyLml0ZW1zQ2hhbmdlZCgpOyB9XG4gICAgcmVuZGVyQXJyYXlBc0VsZW1lbnRzKHRoaXMuaXRlbXMsIHRoaXMuJC5kb3RzLCAoaXRlbSwgZWxlbWVudCkgPT4ge1xuICAgICAgLy8gV2UgZG9uJ3QgdXNlIHRoZSBpdGVtIHBhcmFtZXRlciwgYmVjYXVzZSBhbnkgaXRlbSB3aWxsIHByb2R1Y2UgYW5cbiAgICAgIC8vIGlkZW50aWNhbCBjb3JyZXNwb25kaW5nIGRvdC5cbiAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZG90Jyk7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3R5bGUtc2NvcGUnKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdiYXNpYy1wYWdlLWRvdHMnKTtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnbm9uZScpO1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnNlbGVjdGVkSXRlbUNoYW5nZWQoKTsgIC8vIEluIGNhc2UgcG9zaXRpb24gb2Ygc2VsZWN0ZWQgaXRlbSBtb3ZlZC5cbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgZGlzdGFuY2UgdGhlIHVzZXIgaGFzIG1vdmVkIHRoZSBmaXJzdCB0b3VjaHBvaW50IHNpbmNlIHRoZSBiZWdpbm5pbmdcbiAgICogb2YgYSBkcmFnLCBleHByZXNzZWQgYXMgYSBmcmFjdGlvbiBvZiB0aGUgZWxlbWVudCdzIHdpZHRoLlxuICAgKlxuICAgKiBAdHlwZSBudW1iZXJcbiAgICovXG4gIGdldCBzZWxlY3RlZEZyYWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldCAmJiB0aGlzLnRhcmdldC5zZWxlY3RlZEZyYWN0aW9uO1xuICB9XG4gIHNldCBzZWxlY3RlZEZyYWN0aW9uKHZhbHVlKSB7XG4gICAgaWYgKCdzZWxlY3RlZEZyYWN0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEZyYWN0aW9uID0gdmFsdWU7IH1cbiAgICBpZiAodGhpcy50YXJnZXQgJiYgdGhpcy50YXJnZXQuc2VsZWN0ZWRGcmFjdGlvbiAhPT0gdmFsdWUpIHtcbiAgICAgIHRoaXMudGFyZ2V0LnNlbGVjdGVkRnJhY3Rpb24gPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVuZGVyVHJhbnNpdGlvbih0aGlzLCB0aGlzLnNlbGVjdGVkSW5kZXgsIHZhbHVlKTtcbiAgICB9XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnc2VsZWN0aW9uLWZyYWN0aW9uLWNoYW5nZWQnKSk7XG4gIH1cblxuICBzZWxlY3RlZEl0ZW1DaGFuZ2VkKCkge1xuICAgIGlmIChzdXBlci5zZWxlY3RlZEl0ZW1DaGFuZ2VkKSB7IHN1cGVyLnNlbGVjdGVkSXRlbUNoYW5nZWQoKTsgfVxuICAgIGxldCBzZWxlY3RlZEluZGV4ID0gdGhpcy5zZWxlY3RlZEluZGV4O1xuICAgIHRoaXMuZG90cy5mb3JFYWNoKChkb3QsIGkpID0+IHtcbiAgICAgIHRvZ2dsZUNsYXNzKGRvdCwgJ3NlbGVjdGVkJywgaSA9PT0gc2VsZWN0ZWRJbmRleCk7XG4gICAgfSk7XG4gIH1cblxuICBnZXQgdGFyZ2V0KCkge1xuICAgIHJldHVybiBzdXBlci50YXJnZXQ7XG4gIH1cbiAgc2V0IHRhcmdldChlbGVtZW50KSB7XG4gICAgaWYgKCd0YXJnZXQnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnRhcmdldCA9IGVsZW1lbnQ7IH1cbiAgICBpZiAodGhpc1tzZWxlY3RlZEZyYWN0aW9uQ2hhbmdlZExpc3RlbmVyU3ltYm9sXSkge1xuICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdzZWxlY3Rpb24tZnJhY3Rpb24tY2hhbmdlZCcsIHRoaXNbc2VsZWN0ZWRGcmFjdGlvbkNoYW5nZWRMaXN0ZW5lclN5bWJvbF0pO1xuICAgIH1cbiAgICB0aGlzW3NlbGVjdGVkRnJhY3Rpb25DaGFuZ2VkTGlzdGVuZXJTeW1ib2xdID0gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzZWxlY3Rpb24tZnJhY3Rpb24tY2hhbmdlZCcsIGV2ZW50ID0+IHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRGcmFjdGlvbiA9IGVsZW1lbnQuc2VsZWN0ZWRGcmFjdGlvbjtcbiAgICB9KTtcbiAgfVxuXG4gIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gYFxuICAgICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgI2RvdHMge1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICB9XG5cbiAgICAgICNjb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC13ZWJraXQtZmxleDogMTtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgfVxuXG4gICAgICAjY29udGFpbmVyIDo6Y29udGVudCA+ICoge1xuICAgICAgICAtd2Via2l0LWZsZXg6IDE7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICB9XG5cbiAgICAgIC5kb3Qge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGhlaWdodDogOHB4O1xuICAgICAgICBtYXJnaW46IDdweCA1cHg7XG4gICAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzIGJveC1zaGFkb3cgMC4ycztcbiAgICAgICAgd2lkdGg6IDhweDtcbiAgICAgIH1cblxuICAgICAgLmRvdDpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxcHggM3B4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgICAgIH1cblxuICAgICAgLmRvdC5zZWxlY3RlZCB7XG4gICAgICAgIG9wYWNpdHk6IDAuOTU7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICAuZG90IHtcbiAgICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgaWQ9XCJkb3RzXCI+PC9kaXY+XG4gICAgICA8ZGl2IGlkPVwiY29udGFpbmVyXCIgcm9sZT1cIm5vbmVcIj5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG59XG5cblxuLy8gUmV0dXJuIHRoZSBpbmRleCwgZW5zdXJpbmcgaXQgc3RheXMgYmV0d2VlbiAwIGFuZCB0aGUgZ2l2ZW4gbGVuZ3RoLlxuZnVuY3Rpb24ga2VlcEluZGV4V2l0aGluQm91bmRzKGxlbmd0aCwgaW5kZXgpIHtcbiAgLy8gSGFuZGxlIHBvc3NpYmlsaXR5IG9mIG5lZ2F0aXZlIG1vZC5cbiAgLy8gU2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE4NjE4MjUwLzc2NDcyXG4gIHJldHVybiAoKGluZGV4ICUgbGVuZ3RoKSArIGxlbmd0aCkgJSBsZW5ndGg7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRyYW5zaXRpb24oZWxlbWVudCwgc2VsZWN0ZWRJbmRleCwgc2VsZWN0ZWRGcmFjdGlvbikge1xuICBsZXQgZG90cyA9IGVsZW1lbnQuZG90cztcbiAgaWYgKCFkb3RzIHx8IGRvdHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCBkb3RDb3VudCA9IGRvdHMubGVuZ3RoO1xuICBsZXQgb3BhY2l0eU1pbmltdW0gPSAwLjQ7XG4gIGxldCBvcGFjaXR5TWF4aW11bSA9IDAuOTU7XG4gIGxldCBvcGFjaXR5UmFuZ2UgPSBvcGFjaXR5TWF4aW11bSAtIG9wYWNpdHlNaW5pbXVtO1xuICBsZXQgZnJhY3Rpb25hbEluZGV4ID0gc2VsZWN0ZWRJbmRleCArIHNlbGVjdGVkRnJhY3Rpb247XG4gIGxldCBsZWZ0SW5kZXggPSBNYXRoLmZsb29yKGZyYWN0aW9uYWxJbmRleCk7XG4gIGxldCByaWdodEluZGV4ID0gTWF0aC5jZWlsKGZyYWN0aW9uYWxJbmRleCk7XG4gIGxldCBzZWxlY3Rpb25XcmFwcyA9IGVsZW1lbnQuc2VsZWN0aW9uV3JhcHM7XG4gIGxldCBhd2F5SW5kZXggPSBzZWxlY3RlZEZyYWN0aW9uID49IDAgPyBsZWZ0SW5kZXggOiByaWdodEluZGV4O1xuICBsZXQgdG93YXJkSW5kZXggPSBzZWxlY3RlZEZyYWN0aW9uID49IDAgPyByaWdodEluZGV4IDogbGVmdEluZGV4O1xuICBpZiAoc2VsZWN0aW9uV3JhcHMpIHtcbiAgICBhd2F5SW5kZXggPSBrZWVwSW5kZXhXaXRoaW5Cb3VuZHMoZG90Q291bnQsIGF3YXlJbmRleCk7XG4gICAgdG93YXJkSW5kZXggPSBrZWVwSW5kZXhXaXRoaW5Cb3VuZHMoZG90Q291bnQsIHRvd2FyZEluZGV4KTtcbiAgfVxuICAvLyBTdHVwaWQgSUUgZG9lc24ndCBoYXZlIE1hdGgudHJ1bmMuXG4gIC8vIGxldCB0cnVuY2F0ZWRTZWxlY3RlZEZyYWN0aW9uID0gTWF0aC50cnVuYyhzZWxlY3RlZEZyYWN0aW9uKTtcbiAgbGV0IHRydW5jYXRlZFNlbGVjdGVkRnJhY3Rpb24gPSBzZWxlY3RlZEZyYWN0aW9uIDwgMCA/IE1hdGguY2VpbChzZWxlY3RlZEZyYWN0aW9uKSA6IE1hdGguZmxvb3Ioc2VsZWN0ZWRGcmFjdGlvbik7XG4gIGxldCBwcm9ncmVzcyA9IHNlbGVjdGVkRnJhY3Rpb24gLSB0cnVuY2F0ZWRTZWxlY3RlZEZyYWN0aW9uO1xuICBsZXQgb3BhY2l0eVByb2dyZXNzVGhyb3VnaFJhbmdlID0gTWF0aC5hYnMocHJvZ3Jlc3MpICogb3BhY2l0eVJhbmdlO1xuICBkb3RzLmZvckVhY2goKGRvdCwgaW5kZXgpID0+IHtcbiAgICBsZXQgZG90T3BhY2l0eTtcbiAgICBpZiAoc2VsZWN0ZWRGcmFjdGlvbiA9PT0gMCkge1xuICAgICAgLy8gUmVtb3ZlIGV4cGxpY2l0IG9wYWNpdHkgYW5kIHJlbHkgb24gc3R5bGluZy5cbiAgICAgIGRvdE9wYWNpdHkgPSAnJztcbiAgICB9IGVsc2UgaWYgKGluZGV4ID09PSBhd2F5SW5kZXgpIHtcbiAgICAgIGRvdE9wYWNpdHkgPSBvcGFjaXR5TWF4aW11bSAtIG9wYWNpdHlQcm9ncmVzc1Rocm91Z2hSYW5nZTtcbiAgICB9IGVsc2UgaWYgKGluZGV4ID09PSB0b3dhcmRJbmRleCkge1xuICAgICAgZG90T3BhY2l0eSA9IG9wYWNpdHlNaW5pbXVtICsgb3BhY2l0eVByb2dyZXNzVGhyb3VnaFJhbmdlO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb3RPcGFjaXR5ID0gb3BhY2l0eU1pbmltdW07XG4gICAgfVxuICAgIGRvdC5zdHlsZS5vcGFjaXR5ID0gZG90T3BhY2l0eTtcbiAgfSk7XG59XG5cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdiYXNpYy1wYWdlLWRvdHMnLCBQYWdlRG90cyk7XG5leHBvcnQgZGVmYXVsdCBQYWdlRG90cztcbiIsImltcG9ydCBFbGVtZW50QmFzZSBmcm9tICcuLi8uLi9iYXNpYy1lbGVtZW50LWJhc2Uvc3JjL0VsZW1lbnRCYXNlJztcbmltcG9ydCBDb250ZW50Rmlyc3RDaGlsZFRhcmdldCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Db250ZW50Rmlyc3RDaGlsZFRhcmdldCc7XG5pbXBvcnQgRGlyZWN0aW9uU2VsZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0RpcmVjdGlvblNlbGVjdGlvbic7XG5pbXBvcnQgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50JztcbmltcG9ydCBJdGVtc1NlbGVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9JdGVtc1NlbGVjdGlvbic7XG5pbXBvcnQgS2V5Ym9hcmQgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvS2V5Ym9hcmQnO1xuaW1wb3J0IEtleWJvYXJkRGlyZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0tleWJvYXJkRGlyZWN0aW9uJztcbmltcG9ydCBPYnNlcnZlQ29udGVudENoYW5nZXMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvT2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzJztcbmltcG9ydCBUYXJnZXRJbkNvbGxlY3RpdmUgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvVGFyZ2V0SW5Db2xsZWN0aXZlJztcbmltcG9ydCBUYXJnZXRTZWxlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvVGFyZ2V0U2VsZWN0aW9uJztcbmltcG9ydCB0b2dnbGVDbGFzcyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy90b2dnbGVDbGFzcyc7XG5cblxubGV0IGJhc2UgPSBFbGVtZW50QmFzZS5jb21wb3NlKFxuICBDb250ZW50Rmlyc3RDaGlsZFRhcmdldCxcbiAgRGlyZWN0aW9uU2VsZWN0aW9uLFxuICBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50LFxuICBJdGVtc1NlbGVjdGlvbixcbiAgS2V5Ym9hcmQsXG4gIEtleWJvYXJkRGlyZWN0aW9uLFxuICBPYnNlcnZlQ29udGVudENoYW5nZXMsXG4gIFRhcmdldEluQ29sbGVjdGl2ZSxcbiAgVGFyZ2V0U2VsZWN0aW9uXG4pO1xuXG4vKipcbiAqIEF1eGlsaWFyeSBjb21wb25lbnQgZm9yIG1hbmFnaW5nIHBsYXliYWNrIG9mIGEgc2xpZGVzaG93LCBhdWRpbyBwbGF5bGlzdCwgZXRjLlxuICpcbiAqIFRoaXMgY29tcG9uZW50IGNhbiBiZSB1c2VkIHRvIHdyYXAgYSBjb21wb25lbnQgbGlrZVxuICogW2Jhc2ljLXNsaWRlc2hvd10oLi4vYmFzaWMtc2xpZGVzaG93KS4gRXhhbXBsZTpcbiAqXG4gKiAgICAgPGJhc2ljLXBsYXktY29udHJvbHM+XG4gKiAgICAgICA8YmFzaWMtc2xpZGVzaG93PlxuICogICAgICAgICAuLi4gaW1hZ2VzLCBldGMuIC4uLlxuICogICAgICAgPC9iYXNpYy1zbGlkZXNob3c+XG4gKiAgICAgPC9iYXNpYy1wbGF5LWNvbnRyb2xzPlxuICpcbiAqIEBleHRlbmRzIEVsZW1lbnRCYXNlXG4gKiBAbWl4ZXMgQ29udGVudEZpcnN0Q2hpbGRUYXJnZXRcbiAqIEBtaXhlcyBEaXJlY3Rpb25TZWxlY3Rpb25cbiAqIEBtaXhlcyBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50XG4gKiBAbWl4ZXMgSXRlbXNTZWxlY3Rpb25cbiAqIEBtaXhlcyBLZXlib2FyZFxuICogQG1peGVzIEtleWJvYXJkRGlyZWN0aW9uXG4gKiBAbWl4ZXMgT2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzXG4gKiBAbWl4ZXMgVGFyZ2V0SW5Db2xsZWN0aXZlXG4gKiBAbWl4ZXMgVGFyZ2V0U2VsZWN0aW9uXG4gKi9cbmNsYXNzIFBsYXlDb250cm9scyBleHRlbmRzIGJhc2Uge1xuXG4gIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLiQucHJldmlvdXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICB0aGlzLnNlbGVjdFByZXZpb3VzKCk7XG4gICAgfSk7XG4gICAgdGhpcy4kLnBsYXlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICB0aGlzLnBsYXlpbmcgPSAhdGhpcy5wbGF5aW5nO1xuICAgIH0pO1xuICAgIHRoaXMuJC5uZXh0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgdGhpcy5zZWxlY3ROZXh0KCk7XG4gICAgfSk7XG4gICAgdG9nZ2xlQ2xhc3ModGhpcywgJ3BsYXlpbmcnLCB0aGlzLnBsYXlpbmcpO1xuICB9XG5cbiAga2V5ZG93bihldmVudCkge1xuICAgIGxldCBoYW5kbGVkO1xuXG4gICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICBjYXNlIDMyOiAvKiBTcGFjZSAqL1xuICAgICAgICB0aGlzLnBsYXlpbmcgPSAhdGhpcy5wbGF5aW5nO1xuICAgICAgICBoYW5kbGVkID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgLy8gUHJlZmVyIG1peGluIHJlc3VsdCBpZiBpdCdzIGRlZmluZWQsIG90aGVyd2lzZSB1c2UgYmFzZSByZXN1bHQuXG4gICAgcmV0dXJuIGhhbmRsZWQgfHwgKHN1cGVyLmtleWRvd24gJiYgc3VwZXIua2V5ZG93bihldmVudCkpO1xuICB9XG5cbiAgcGF1c2UoKSB7XG4gICAgaWYgKHRoaXMudGFyZ2V0KSB7XG4gICAgICB0aGlzLnRhcmdldC5wYXVzZSgpO1xuICAgIH1cbiAgfVxuXG4gIHBsYXkoKSB7XG4gICAgaWYgKHRoaXMudGFyZ2V0KSB7XG4gICAgICB0aGlzLnRhcmdldC5wbGF5KCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHBsYXlpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0ICYmIHRoaXMudGFyZ2V0LnBsYXlpbmc7XG4gIH1cbiAgc2V0IHBsYXlpbmcodmFsdWUpIHtcbiAgICBpZiAoJ3BsYXlpbmcnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnBsYXlpbmcgPSB2YWx1ZTsgfVxuICAgIGlmICh0aGlzLnRhcmdldCkge1xuICAgICAgdGhpcy50YXJnZXQucGxheWluZyA9IHZhbHVlO1xuICAgIH1cbiAgICB0b2dnbGVDbGFzcyh0aGlzLCAncGxheWluZycsIHZhbHVlKTtcbiAgfVxuXG4gIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gYFxuICAgICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgI2J1dHRvbnMge1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICB9XG5cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGZpbGw6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgIH1cbiAgICAgIDpob3N0KDpob3ZlcikgYnV0dG9uIHtcbiAgICAgICAgZmlsbDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICAgICAgfVxuICAgICAgYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgZmlsbDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KTtcbiAgICAgIH1cbiAgICAgIGJ1dHRvbjphY3RpdmUge1xuICAgICAgICBmaWxsOiB3aGl0ZTtcbiAgICAgIH1cblxuICAgICAgLmljb24ge1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgfVxuICAgICAgI3BsYXlCdXR0b24gLmljb24ge1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgfVxuXG4gICAgICA6aG9zdCgucGxheWluZykgLnBhdXNlZENvbnRyb2wge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgICAgOmhvc3QoOm5vdCgucGxheWluZykpIC5wbGF5aW5nQ29udHJvbCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgICNjb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC13ZWJraXQtZmxleDogMTtcbiAgICAgICAgZmxleDogMTtcbiAgICAgIH1cblxuICAgICAgI2NvbnRhaW5lciA6OmNvbnRlbnQgPiAqIHtcbiAgICAgICAgLXdlYmtpdC1mbGV4OiAxO1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBpZD1cImJ1dHRvbnNcIj5cbiAgICAgICAgPGJ1dHRvbiBpZD1cInByZXZpb3VzQnV0dG9uXCI+XG4gICAgICAgICAgPHN2ZyBjbGFzcz1cImljb25cIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkIG1lZXRcIj5cbiAgICAgICAgICAgIDxnIGlkPVwic2tpcC1wcmV2aW91c1wiPlxuICAgICAgICAgICAgICA8cGF0aCBkPVwiTTYgNmgydjEySDZ6bTMuNSA2bDguNSA2VjZ6XCIvPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBpZD1cInBsYXlCdXR0b25cIj5cbiAgICAgICAgICA8c3ZnIGNsYXNzPVwiaWNvbiBwbGF5aW5nQ29udHJvbFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWQgbWVldFwiPlxuICAgICAgICAgICAgPGcgaWQ9XCJwYXVzZS1jaXJjbGUtb3V0bGluZVwiPlxuICAgICAgICAgICAgICA8cGF0aCBkPVwiTTkgMTZoMlY4SDl2OHptMy0xNEM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMCAxOGMtNC40MSAwLTgtMy41OS04LThzMy41OS04IDgtOCA4IDMuNTkgOCA4LTMuNTkgOC04IDh6bTEtNGgyVjhoLTJ2OHpcIj48L3BhdGg+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPHN2ZyBjbGFzcz1cImljb24gcGF1c2VkQ29udHJvbFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWQgbWVldFwiPlxuICAgICAgICAgICAgPGcgaWQ9XCJwbGF5LWNpcmNsZS1vdXRsaW5lXCI+XG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTAgMTYuNWw2LTQuNS02LTQuNXY5ek0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0wIDE4Yy00LjQxIDAtOC0zLjU5LTgtOHMzLjU5LTggOC04IDggMy41OSA4IDgtMy41OSA4LTggOHpcIj48L3BhdGg+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGlkPVwibmV4dEJ1dHRvblwiPlxuICAgICAgICAgIDxzdmcgY2xhc3M9XCJpY29uXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBtZWV0XCI+XG4gICAgICAgICAgICA8ZyBpZD1cInNraXAtbmV4dFwiPlxuICAgICAgICAgICAgICA8cGF0aCBkPVwiTTYgMThsOC41LTZMNiA2djEyek0xNiA2djEyaDJWNmgtMnpcIi8+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgaWQ9XCJjb250YWluZXJcIiByb2xlPVwibm9uZVwiPlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbn1cblxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2Jhc2ljLXBsYXktY29udHJvbHMnLCBQbGF5Q29udHJvbHMpO1xuIiwiaW1wb3J0IEVsZW1lbnRCYXNlIGZyb20gJy4uLy4uL2Jhc2ljLWVsZW1lbnQtYmFzZS9zcmMvRWxlbWVudEJhc2UnO1xuaW1wb3J0IENvbnRlbnRGaXJzdENoaWxkVGFyZ2V0IGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NvbnRlbnRGaXJzdENoaWxkVGFyZ2V0JztcbmltcG9ydCBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50IGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQnO1xuaW1wb3J0IEl0ZW1zU2VsZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0l0ZW1zU2VsZWN0aW9uJztcbmltcG9ydCBLZXlib2FyZCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9LZXlib2FyZCc7XG5pbXBvcnQgS2V5Ym9hcmREaXJlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvS2V5Ym9hcmREaXJlY3Rpb24nO1xuaW1wb3J0IE9ic2VydmVDb250ZW50Q2hhbmdlcyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9PYnNlcnZlQ29udGVudENoYW5nZXMnO1xuaW1wb3J0IFRhcmdldEluQ29sbGVjdGl2ZSBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9UYXJnZXRJbkNvbGxlY3RpdmUnO1xuaW1wb3J0IFRhcmdldFNlbGVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9UYXJnZXRTZWxlY3Rpb24nO1xuaW1wb3J0IFRpbWVyU2VsZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1RpbWVyU2VsZWN0aW9uJztcblxuXG5sZXQgYmFzZSA9IEVsZW1lbnRCYXNlLmNvbXBvc2UoXG4gIENvbnRlbnRGaXJzdENoaWxkVGFyZ2V0LFxuICBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50LFxuICBJdGVtc1NlbGVjdGlvbixcbiAgS2V5Ym9hcmQsXG4gIEtleWJvYXJkRGlyZWN0aW9uLFxuICBPYnNlcnZlQ29udGVudENoYW5nZXMsXG4gIFRhcmdldEluQ29sbGVjdGl2ZSxcbiAgVGFyZ2V0U2VsZWN0aW9uLFxuICBUaW1lclNlbGVjdGlvblxuKTtcblxuXG4vKipcbiAqIEF1eGlsaWFyeSBjb21wb25lbnQgdG8gYWR2YW5jZSBhIHNlbGVjdGlvbiB3aXRoIGEgdGltZXIuXG4gKlxuICogVGhpcyBjb21wb25lbnQgaXMgZ2VuZXJhbGx5IHVzZWQgdG8gd3JhcCBhIGNvbXBvbmVudCBsaWtlXG4gKiBbYmFzaWMtY2Fyb3VzZWxdKC4uL2Jhc2ljLWNhcm91c2VsKSBvciB0aGUgc2ltcGxlclxuICogW2Jhc2ljLXNsaWRpbmctY2Fyb3VzZWxdKC4uL2Jhc2ljLXNsaWRpbmctY2Fyb3VzZWwpIHRvIGFkZCBzbGlkZXNob3dcbiAqIGJlaGF2aW9yLiBGb3IgYSBzdGFuZGFsb25lIHNsaWRlc2hvdyBjb21wb25lbnQsIHNlZVxuICogW2Jhc2ljLXNsaWRlc2hvd10oLi4vYmFzaWMtc2xpZGVzaG93KS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqICAgICA8YmFzaWMtc2xpZGVzaG93LXRpbWVyPlxuICogICAgICAgPGJhc2ljLWNhcm91c2VsPlxuICogICAgICAgICAuLi4gaW1hZ2VzIG9yIG90aGVyIGVsZW1lbnRzIC4uLlxuICogICAgICAgPC9iYXNpYy1jYXJvdXNlbD5cbiAqICAgICA8L2Jhc2ljLXNsaWRlc2hvdy10aW1lcj5cbiAqXG4gKiBUaGUgYmFzaWMtc2xpZGVzaG93LXRpbWVyIGNvbXBvbmVudCBwcm92aWRlcyBubyB2aXNpYmxlIHVzZXIgaW50ZXJmYWNlXG4gKiBlbGVtZW50cywgYW5kIGV4aXN0cyBjaGllZmx5IGFzIGEgY29udmVuaWVuY2UgZm9yIHVzZSBpbiBzY2VuYXJpb3MgbGlrZSB0aGVcbiAqIG9uZSBhYm92ZS4gSWYgeW91J3JlIGRldmVsb3BpbmcgYSBjb21wb25lbnQgdGhhdCB3aWxsIGFsd2F5cyB3YW50IHRvIHByb3ZpZGVcbiAqIHNsaWRlc2hvdyBzZW1hbnRpY3MsIGNvbnNpZGVyIGRpcmVjdGx5IGFwcGx5aW5nIHRoZVxuICogW1RpbWVyU2VsZWN0aW9uXSguLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL2RvY3MvVGltZXJTZWxlY3Rpb24ubWQpIG1peGluXG4gKiB0byB5b3VyIGNvbXBvbmVudC5cbiAqXG4gKiBAZXh0ZW5kcyBFbGVtZW50QmFzZVxuICovXG5jbGFzcyBTbGlkZXNob3dUaW1lciBleHRlbmRzIGJhc2Uge1xuXG4gIGdldCBkZWZhdWx0cygpIHtcbiAgICBsZXQgZGVmYXVsdHMgPSBzdXBlci5kZWZhdWx0cyB8fCB7fTtcbiAgICBkZWZhdWx0cy5wbGF5aW5nID0gdHJ1ZTtcbiAgICBkZWZhdWx0cy5zZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvbiA9IDUwMDtcbiAgICBkZWZhdWx0cy5zZWxlY3Rpb25SZXF1aXJlZCA9IHRydWU7XG4gICAgZGVmYXVsdHMuc2VsZWN0aW9uVGltZXJEdXJhdGlvbiA9IDMwMDA7XG4gICAgcmV0dXJuIGRlZmF1bHRzO1xuICB9XG5cbiAgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBgXG4gICAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgYDtcbiAgfVxuXG59XG5cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdiYXNpYy1zbGlkZXNob3ctdGltZXInLCBTbGlkZXNob3dUaW1lcik7XG4iLCJpbXBvcnQgRWxlbWVudEJhc2UgZnJvbSAnLi4vLi4vYmFzaWMtZWxlbWVudC1iYXNlL3NyYy9FbGVtZW50QmFzZSc7XG5pbXBvcnQgQ29udGVudEFzSXRlbXMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ29udGVudEFzSXRlbXMnO1xuaW1wb3J0IERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCc7XG5pbXBvcnQgRnJhY3Rpb25hbFNlbGVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9GcmFjdGlvbmFsU2VsZWN0aW9uJztcbmltcG9ydCBJdGVtc1NlbGVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9JdGVtc1NlbGVjdGlvbic7XG5pbXBvcnQgT2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL09ic2VydmVDb250ZW50Q2hhbmdlcyc7XG5pbXBvcnQgU2VsZWN0aW9uQW5pbWF0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NlbGVjdGlvbkFuaW1hdGlvbic7XG5pbXBvcnQgU2VsZWN0aW9uQXJpYUFjdGl2ZSBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TZWxlY3Rpb25BcmlhQWN0aXZlJztcbmltcG9ydCBUaW1lclNlbGVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9UaW1lclNlbGVjdGlvbic7XG5cblxubGV0IGJhc2UgPSBFbGVtZW50QmFzZS5jb21wb3NlKFxuICBDb250ZW50QXNJdGVtcyxcbiAgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCxcbiAgRnJhY3Rpb25hbFNlbGVjdGlvbixcbiAgSXRlbXNTZWxlY3Rpb24sXG4gIE9ic2VydmVDb250ZW50Q2hhbmdlcyxcbiAgU2VsZWN0aW9uQW5pbWF0aW9uLFxuICBTZWxlY3Rpb25BcmlhQWN0aXZlLFxuICBUaW1lclNlbGVjdGlvblxuKTtcblxuLyoqXG4gKiBTbGlkZXNob3cgd2l0aCBhbmltYXRlZCB0cmFuc2l0aW9ucy5cbiAqXG4gKiBCeSBkZWZhdWx0IHRoZSBzbGlkZXNob3cgd2lsbCBpbW1lZGlhdGVseSBiZWdpbiBwbGF5aW5nIHdoZW4gaXQgaXMgY29ubmVjdGVkXG4gKiB0byB0aGUgZG9jdW1lbnQsIGFkdmFuY2UgZXZlcnkgMzAwMCBtcyAoMyBzZWNvbmRzKSwgYW5kIHVzZSBhIHNpbXBsZVxuICogY3Jvc3NmYWRlIGVmZmVjdC5cbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBjYW4gYmUgdXNlZCBvbiBpdHMgb3duLiBUbyBpbmNvcnBvcmF0ZSBzbGlkZXNob3cgYmVoYXZpb3IgaW50b1xuICogYSBjb21wb25lbnQgb2YgeW91ciBvd24sIGFwcGx5IHRoZVxuICogW1RpbWVyU2VsZWN0aW9uXSguLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL2RvY3MvVGltZXJTZWxlY3Rpb24ubWQpIG1peGluLiBUb1xuICogYWRkIHNsaWRlc2hvdyBmdW5jdGlvbmFsaXR5IHRvIGEgY29tcG9uZW50IHN1Y2ggYXMgYSBjYXJvdXNlbCwgd3JhcCBpdCB3aXRoXG4gKiB0aGUgYXV4aWxpYXJ5IFtiYXNpYy1zbGlkZXNob3ctdGltZXJdKC4uL2Jhc2ljLXNsaWRlc2hvdy10aW1lcikgY29tcG9uZW50LlxuICpcbiAqIEBleHRlbmRzIEVsZW1lbnRCYXNlXG4gKiBAbWl4ZXMgQ29udGVudEFzSXRlbXNcbiAqIEBtaXhlcyBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50XG4gKiBAbWl4ZXMgRnJhY3Rpb25hbFNlbGVjdGlvblxuICogQG1peGVzIEl0ZW1zU2VsZWN0aW9uXG4gKiBAbWl4ZXMgT2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzXG4gKiBAbWl4ZXMgU2VsZWN0aW9uQW5pbWF0aW9uXG4gKiBAbWl4ZXMgU2VsZWN0aW9uQXJpYUFjdGl2ZVxuICogQG1peGVzIFRpbWVyU2VsZWN0aW9uXG4gKi9cbmNsYXNzIFNsaWRlc2hvdyBleHRlbmRzIGJhc2Uge1xuXG4gIGdldCBkZWZhdWx0cygpIHtcbiAgICBsZXQgZGVmYXVsdHMgPSBzdXBlci5kZWZhdWx0cyB8fCB7fTtcbiAgICBkZWZhdWx0cy5wbGF5aW5nID0gdHJ1ZTtcbiAgICBkZWZhdWx0cy5zZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvbiA9IDUwMDtcbiAgICBkZWZhdWx0cy5zZWxlY3Rpb25BbmltYXRpb25FZmZlY3QgPSAnY3Jvc3NmYWRlJztcbiAgICBkZWZhdWx0cy5zZWxlY3Rpb25SZXF1aXJlZCA9IHRydWU7XG4gICAgZGVmYXVsdHMuc2VsZWN0aW9uVGltZXJEdXJhdGlvbiA9IDMwMDA7XG4gICAgZGVmYXVsdHMuc2VsZWN0aW9uV3JhcHMgPSB0cnVlO1xuICAgIHJldHVybiBkZWZhdWx0cztcbiAgfVxuXG4gIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gYFxuICAgICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgI2NvbnRhaW5lciA6OmNvbnRlbnQgPiAqIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBpZD1cImNvbnRhaW5lclwiIHJvbGU9XCJub25lXCI+XG4gICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxufVxuXG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYmFzaWMtc2xpZGVzaG93JywgU2xpZGVzaG93KTtcbiIsImltcG9ydCBFbGVtZW50QmFzZSBmcm9tICcuLi8uLi9iYXNpYy1lbGVtZW50LWJhc2Uvc3JjL0VsZW1lbnRCYXNlJztcbmltcG9ydCBDb250ZW50QXNJdGVtcyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Db250ZW50QXNJdGVtcyc7XG5pbXBvcnQgRGlyZWN0aW9uU2VsZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0RpcmVjdGlvblNlbGVjdGlvbic7XG5pbXBvcnQgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50JztcbmltcG9ydCBGcmFjdGlvbmFsU2VsZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0ZyYWN0aW9uYWxTZWxlY3Rpb24nO1xuaW1wb3J0IEl0ZW1zU2VsZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0l0ZW1zU2VsZWN0aW9uJztcbmltcG9ydCBLZXlib2FyZCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9LZXlib2FyZCc7XG5pbXBvcnQgS2V5Ym9hcmREaXJlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvS2V5Ym9hcmREaXJlY3Rpb24nO1xuaW1wb3J0IE9ic2VydmVDb250ZW50Q2hhbmdlcyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9PYnNlcnZlQ29udGVudENoYW5nZXMnO1xuaW1wb3J0IFNlbGVjdGlvbkFyaWFBY3RpdmUgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2VsZWN0aW9uQXJpYUFjdGl2ZSc7XG5pbXBvcnQgU2xpZGluZ1ZpZXdwb3J0IGZyb20gJy4uLy4uL2Jhc2ljLXNsaWRpbmctdmlld3BvcnQvc3JjL1NsaWRpbmdWaWV3cG9ydCc7IC8vIGpzaGludCBpZ25vcmU6bGluZVxuaW1wb3J0IFN3aXBlRGlyZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1N3aXBlRGlyZWN0aW9uJztcbmltcG9ydCBUYXJnZXRJbkNvbGxlY3RpdmUgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvVGFyZ2V0SW5Db2xsZWN0aXZlJztcbmltcG9ydCBUcmFja3BhZERpcmVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9UcmFja3BhZERpcmVjdGlvbic7XG5cbmxldCBiYXNlID0gRWxlbWVudEJhc2UuY29tcG9zZShcbiAgQ29udGVudEFzSXRlbXMsXG4gIERpcmVjdGlvblNlbGVjdGlvbixcbiAgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCxcbiAgRnJhY3Rpb25hbFNlbGVjdGlvbixcbiAgSXRlbXNTZWxlY3Rpb24sXG4gIEtleWJvYXJkLFxuICBLZXlib2FyZERpcmVjdGlvbixcbiAgT2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzLFxuICBTZWxlY3Rpb25BcmlhQWN0aXZlLFxuICBTd2lwZURpcmVjdGlvbixcbiAgVGFyZ2V0SW5Db2xsZWN0aXZlLFxuICBUcmFja3BhZERpcmVjdGlvblxuKTtcblxuXG4vKipcbiAqIExldHMgdGhlIHVzZXIgbmF2aWdhdGUgbGF0ZXJhbGx5IHRocm91Z2ggYSBzZXF1ZW5jZSBvZiBjaGlsZCBlbGVtZW50cy5cbiAqXG4gKiBbTGl2ZSBkZW1vXShodHRwOi8vYmFzaWN3ZWJjb21wb25lbnRzLm9yZy9iYXNpYy13ZWItY29tcG9uZW50cy9wYWNrYWdlcy9iYXNpYy1jYXJvdXNlbC8pXG4gKlxuICogYmFzaWMtc2xpZGluZy1jYXJvdXNlbCBpcyBhbiBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgY2Fyb3VzZWwgdXNlciBpbnRlcmZhY2UgcGF0dGVybixcbiAqIGNvbW1vbmx5IHVzZWQgZm9yIG5hdmlnYXRpbmcgYmV0d2VlbiBpbWFnZXMsIHBhZ2VzLCBhbmQgb3RoZXIgZWxlbWVudHMuIFRoaXNcbiAqIHBhdHRlcm4gcHJlc2VudHMgdGhlIHVzZXIgd2l0aCBhIGxpbmVhciBzZXF1ZW5jZSBvZiBlbGVtZW50cywgb25seSBvbmUgb2ZcbiAqIHdoaWNoIGlzIHNob3duIGF0IGEgdGltZS4gVGhlIHVzZXIgY2FuIG5hdmlnYXRlIHRvIHRoZSBuZXh0L3ByZXZpb3VzIGVsZW1lbnRcbiAqIHdpdGggYSB2YXJpZXR5IG9mIGlucHV0IG1ldGhvZHMuXG4gKlxuICogYmFzaWMtc2xpZGluZy1jYXJvdXNlbCBpcyBhIHNpbXBsZXIgdmFyaWF0aW9uIG9mIHRoZSBtb3JlIHNvcGhpc3RpY2F0ZWRcbiAqIFtiYXNpYy1jYXJvdXNlbF0oLi4vYmFzaWMtY2Fyb3VzZWwpIGNvbXBvbmVudC4gVGhlIGxhdHRlciBpbmNsdWRlcyBzdXBwb3J0XG4gKiBmb3IgX3dyYXBwaW5nXyAoZ29pbmcgZm9yd2FyZCBmcm9tIHRoZSBsYXN0IGl0ZW0gdG8gdGhlIGZpcnN0LCBhbmQgdmljZSB2ZXJzYSksXG4gKiBhbmQgbW9yZSBjb21wbGV4IHZpc3VhbCB0cmFuc2l0aW9ucy4gVGhvc2UgdHJhbnNpdGlvbnMgZW50YWlsIHVzZSBvZiB0aGVcbiAqIFdlYiBBbmltYXRpb24gQVBJLCB3aGljaCByZXF1aXJlcyBhIHBvbHlmaWxsIGluIG9sZGVyIGJyb3dzZXJzLiBIZW5jZSwgdGhlXG4gKiBzaW1wbGVyIGJhc2ljLXNsaWRpbmctY2Fyb3VzZWwgbWF5IGJlIGEgbW9yZSBhcHByb3ByaWF0ZSBjaG9pY2UgaWYgZmFjdG9yc1xuICogc3VjaCBhcyBkb3dubG9hZCBzaXplIGFyZSBjcml0aWNhbC5cbiAqXG4gKiBCZXlvbmQgdGhvc2UgZGlmZmVyZW5jZXMsIGJhc2ljLXNsaWRpbmctY2Fyb3VzZWwgb2ZmZXJzIHRoZSBzYW1lIEFQSSwgdXNhZ2VcbiAqIHJlY29tbWVuZGF0aW9ucywgYW5kIHN1cHBvcnQgZm9yIGtleWJvYXJkL3RvdWNoL21vdXNlIGFuZCBhc3Npc3RpdmUgZGV2aWNlcy5cbiAqIFNlZSB0aGF0IGNvbXBvbmVudCBmb3IgbW9yZSBkZXRhaWxzIG9uIHVzZS5cbiAqXG4gKiBAZXh0ZW5kcyBFbGVtZW50QmFzZVxuICogQG1peGVzIENvbnRlbnRBc0l0ZW1zXG4gKiBAbWl4ZXMgRGlyZWN0aW9uU2VsZWN0aW9uXG4gKiBAbWl4ZXMgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudFxuICogQG1peGVzIEdlbmVyaWNcbiAqIEBtaXhlcyBJdGVtc1NlbGVjdGlvblxuICogQG1peGVzIEtleWJvYXJkXG4gKiBAbWl4ZXMgS2V5Ym9hcmREaXJlY3Rpb25cbiAqIEBtaXhlcyBPYnNlcnZlQ29udGVudENoYW5nZXNcbiAqIEBtaXhlcyBTZWxlY3Rpb25BcmlhQWN0aXZlXG4gKiBAbWl4ZXMgU3dpcGVEaXJlY3Rpb25cbiAqIEBtaXhlcyBUYXJnZXRJbkNvbGxlY3RpdmVcbiAqIEBtaXhlcyBUcmFja3BhZERpcmVjdGlvblxuICovXG5jbGFzcyBTbGlkaW5nQ2Fyb3VzZWwgZXh0ZW5kcyBiYXNlIHtcblxuICBhdHRhY2hlZENhbGxiYWNrKCkge1xuICAgIGlmIChzdXBlci5hdHRhY2hlZENhbGxiYWNrKSB7IHN1cGVyLmF0dGFjaGVkQ2FsbGJhY2soKTsgfVxuICAgIC8vIEhBQ0tcbiAgICB0aGlzLml0ZW1zQ2hhbmdlZCgpO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRzKCkge1xuICAgIGxldCBkZWZhdWx0cyA9IHN1cGVyLmRlZmF1bHRzIHx8IHt9O1xuICAgIGRlZmF1bHRzLm5hdmlnYXRpb25BeGlzID0gJ2hvcml6b250YWwnO1xuICAgIGRlZmF1bHRzLnNlbGVjdGlvblJlcXVpcmVkID0gdHJ1ZTtcbiAgICByZXR1cm4gZGVmYXVsdHM7XG4gIH1cblxuICBnZXQgc2VsZWN0ZWRGcmFjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kLnZpZXdwb3J0LnNlbGVjdGVkRnJhY3Rpb247XG4gIH1cbiAgc2V0IHNlbGVjdGVkRnJhY3Rpb24odmFsdWUpIHtcbiAgICBpZiAoJ3NlbGVjdGVkRnJhY3Rpb24nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkRnJhY3Rpb24gPSB2YWx1ZTsgfVxuICAgIHRoaXMuJC52aWV3cG9ydC5zZWxlY3RlZEZyYWN0aW9uID0gdmFsdWU7XG4gICAgbGV0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdzZWxlY3Rpb24tZnJhY3Rpb24tY2hhbmdlZCcpO1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gIH1cblxuICBnZXQgc2VsZWN0ZWRJbmRleCgpIHtcbiAgICByZXR1cm4gc3VwZXIuc2VsZWN0ZWRJbmRleDtcbiAgfVxuICBzZXQgc2VsZWN0ZWRJbmRleCh2YWx1ZSkge1xuICAgIGlmICgnc2VsZWN0ZWRJbmRleCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJbmRleCA9IHZhbHVlOyB9XG4gICAgdGhpcy4kLnZpZXdwb3J0LnNlbGVjdGVkSW5kZXggPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBzZWxlY3RlZEl0ZW0oKSB7XG4gICAgcmV0dXJuIHN1cGVyLnNlbGVjdGVkSXRlbTtcbiAgfVxuICBzZXQgc2VsZWN0ZWRJdGVtKGl0ZW0pIHtcbiAgICBpZiAoJ3NlbGVjdGVkSXRlbScgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJdGVtID0gaXRlbTsgfVxuICAgIHRoaXMuJC52aWV3cG9ydC5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSB3aGV0aGVyIGEgdHJhbnNpdGlvbiBzaG91bGQgYmUgc2hvd24gZHVyaW5nIHNlbGVjdGlvbi5cbiAgICpcbiAgICogQ29tcG9uZW50cyBsaWtlIGNhcm91c2VscyBvZnRlbiBkZWZpbmUgYW5pbWF0ZWQgQ1NTIHRyYW5zaXRpb25zIGZvclxuICAgKiBzbGlkaW5nIGVmZmVjdHMuIFN1Y2ggYSB0cmFuc2l0aW9uIHNob3VsZCB1c3VhbGx5ICpub3QqIGJlIGFwcGxpZWQgd2hpbGVcbiAgICogdGhlIHVzZXIgaXMgZHJhZ2dpbmcsIGJlY2F1c2UgYSBDU1MgYW5pbWF0aW9uIHdpbGwgaW50cm9kdWNlIGEgbGFnIHRoYXRcbiAgICogbWFrZXMgdGhlIHN3aXBlIGZlZWwgc2x1Z2dpc2guIEluc3RlYWQsIGFzIGxvbmcgYXMgdGhlIHVzZXIgaXMgZHJhZ2dpbmdcbiAgICogd2l0aCB0aGVpciBmaW5nZXIgZG93biwgdGhlIHRyYW5zaXRpb24gc2hvdWxkIGJlIHN1cHByZXNzZWQuIFdoZW4gdGhlXG4gICAqIHVzZXIgcmVsZWFzZXMgdGhlaXIgZmluZ2VyLCB0aGUgdHJhbnNpdGlvbiBjYW4gYmUgcmVzdG9yZWQsIGFsbG93aW5nIHRoZVxuICAgKiBhbmltYXRpb24gdG8gc2hvdyB0aGUgY2Fyb3VzZWwgc2xpZGluZyBpbnRvIGl0cyBmaW5hbCBwb3NpdGlvbi5cbiAgICpcbiAgICogTm90ZTogVGhpcyBwcm9wZXJ0eSBpcyBvbmx5IGludGVuZGVkIHRvIGxldCBhIGNvbXBvbmVudCBjb29wZXJhdGUgd2l0aFxuICAgKiBtaXhpbnMgdGhhdCBtYXkgYmUgYXBwbGllZCB0byBpdCwgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBsZXQgc29tZW9uZVxuICAgKiB1c2luZyBjb21wb25lbnQgcGVybWFuZW50bHkgZW5hYmxlIG9yIGRpc2FibGUgdHJhbnNpdGlvbiBlZmZlY3RzLlxuICAgKlxuICAgKiBAdHlwZSB7Ym9vbGVhbn0gdHJ1ZSBpZiBhIGNvbXBvbmVudC1wcm92aWRlZCB0cmFuc2l0aW9uIHNob3VsZCBiZSBzaG93bixcbiAgICogZmFsc2UgaWYgbm90LlxuICAgKi9cbiAgZ2V0IHNob3dUcmFuc2l0aW9uKCkge1xuICAgIHJldHVybiBzdXBlci5zaG93VHJhbnNpdGlvbiB8fCB0aGlzLiQudmlld3BvcnQuc2hvd1RyYW5zaXRpb247XG4gIH1cbiAgc2V0IHNob3dUcmFuc2l0aW9uKHZhbHVlKSB7XG4gICAgaWYgKCdzaG93VHJhbnNpdGlvbicgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2hvd1RyYW5zaXRpb24gPSB2YWx1ZTsgfVxuICAgIHRoaXMuJC52aWV3cG9ydC5zaG93VHJhbnNpdGlvbiA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBgXG4gICAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIH1cblxuICAgICAgYmFzaWMtc2xpZGluZy12aWV3cG9ydCB7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLXdlYmtpdC1mbGV4OiAxO1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGJhc2ljLXNsaWRpbmctdmlld3BvcnQgaWQ9XCJ2aWV3cG9ydFwiIHJvbGU9XCJub25lXCI+XG4gICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgIDwvYmFzaWMtc2xpZGluZy12aWV3cG9ydD5cbiAgICBgO1xuICB9XG59XG5cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdiYXNpYy1zbGlkaW5nLWNhcm91c2VsJywgU2xpZGluZ0Nhcm91c2VsKTtcbmV4cG9ydCBkZWZhdWx0IFNsaWRpbmdDYXJvdXNlbDtcbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvY3JlYXRlU3ltYm9sJztcbmltcG9ydCBFbGVtZW50QmFzZSBmcm9tICcuLi8uLi9iYXNpYy1lbGVtZW50LWJhc2Uvc3JjL0VsZW1lbnRCYXNlJztcbmltcG9ydCBGcmFjdGlvbmFsU2VsZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0ZyYWN0aW9uYWxTZWxlY3Rpb24nO1xuaW1wb3J0IFNwcmVhZEl0ZW1zIGZyb20gJy4uLy4uL2Jhc2ljLXNwcmVhZC1pdGVtcy9zcmMvU3ByZWFkSXRlbXMnOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcbmltcG9ydCB0b2dnbGVDbGFzcyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy90b2dnbGVDbGFzcyc7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IHNlbGVjdGVkSXRlbVN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnc2VsZWN0ZWRJdGVtJyk7XG5cblxubGV0IGJhc2UgPSBFbGVtZW50QmFzZS5jb21wb3NlKFxuICBGcmFjdGlvbmFsU2VsZWN0aW9uXG4pO1xuXG5cbi8qKlxuICogUHJlc2VudHMgbGlzdCBpdGVtcyBpbiBhIHZpZXdwb3J0IHN1Y2ggdGhhdCBvbmx5IGEgc2luZ2xlIGl0ZW0gaXMgdmlzaWJsZSBhdFxuICogYSB0aW1lLlxuICpcbiAqIE5hdmlnYXRpbmcgYmV0d2VlbiBpdGVtcyB3aWxsIGJlIHJlcHJlc2VudGVkIHdpdGggYSBob3Jpem9udGFsIHZpc3VhbFxuICogc2xpZGluZyBlZmZlY3QuIEZvciBtb3JlIGNvbXBsZXggdmlzdWFsIGVmZmVjdHMsIHNlZVxuICogW2Jhc2ljLWFuaW1hdGlvbi1zdGFnZV0oLi4vYmFzaWMtYW5pbWF0aW9uLXN0YWdlKSwgd2hpY2ggdGFrZXMgYWR2YW50YWdlIG9mXG4gKiB0aGUgV2ViIEFuaW1hdGlvbnMgQVBJLlxuICpcbiAqIFRoaXMgY29tcG9uZW50IGhhbmRsZXMgdGhlIHJlbmRlcmluZyByZXNwb25zaWJpbGl0aWVzIGZvciB0aGUgYmFzaWMtY2Fyb3VzZWxcbiAqIGNvbXBvbmVudC5cbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBjdXJyZW50bHkgcmVxdWlyZXMgdGhhdCB5b3UgZXhwbGljaXRseSBhcHBseSBhIHNpemUgdG8gaXQuXG4gKlxuICogQGV4dGVuZHMgRWxlbWVudEJhc2VcbiAqL1xuY2xhc3MgU2xpZGluZ1ZpZXdwb3J0IGV4dGVuZHMgYmFzZSB7XG5cbiAgYXR0YWNoZWRDYWxsYmFjaygpIHtcbiAgICBpZiAoc3VwZXIuYXR0YWNoZWRDYWxsYmFjaykgeyBzdXBlci5hdHRhY2hlZENhbGxiYWNrKCk7IH1cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cbiAgICB0aGlzLnNlbGVjdGVkRnJhY3Rpb24gPSAwO1xuICAgIHRoaXMuc2hvd1RyYW5zaXRpb24gPSB0cnVlO1xuICB9XG5cbiAgZ2V0IGNvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuJC5zbGlkaW5nQ29udGFpbmVyLmNvbnRlbnQ7XG4gIH1cblxuICBnZXQgaXRlbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuJC5zbGlkaW5nQ29udGFpbmVyLml0ZW1zO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmIChzdXBlci5yZW5kZXIpIHsgc3VwZXIucmVuZGVyKCk7IH1cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyU2VsZWN0aW9uLmJpbmQodGhpcykpO1xuICB9XG5cbiAgZ2V0IHNlbGVjdGVkRnJhY3Rpb24oKSB7XG4gICAgcmV0dXJuIHN1cGVyLnNlbGVjdGVkRnJhY3Rpb247XG4gIH1cbiAgc2V0IHNlbGVjdGVkRnJhY3Rpb24odmFsdWUpIHtcbiAgICBpZiAoJ3NlbGVjdGVkRnJhY3Rpb24nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkRnJhY3Rpb24gPSB2YWx1ZTsgfVxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBnZXQgc2VsZWN0ZWRJbmRleCgpIHtcbiAgICBsZXQgaXRlbXMgPSB0aGlzLml0ZW1zO1xuICAgIGxldCBzZWxlY3RlZEl0ZW0gPSB0aGlzLnNlbGVjdGVkSXRlbTtcbiAgICByZXR1cm4gaXRlbXMgJiYgc2VsZWN0ZWRJdGVtID9cbiAgICAgIGl0ZW1zLmluZGV4T2Yoc2VsZWN0ZWRJdGVtKSA6XG4gICAgICAtMTtcbiAgfVxuICBzZXQgc2VsZWN0ZWRJbmRleChpbmRleCkge1xuICAgIGlmICgnc2VsZWN0ZWRJbmRleCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJbmRleCA9IGluZGV4OyB9XG4gICAgbGV0IGl0ZW0gPSB0aGlzLml0ZW1zICYmIHRoaXMuaXRlbXNbaW5kZXhdO1xuICAgIGlmIChpdGVtKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IGl0ZW07XG4gICAgfVxuICB9XG5cbiAgZ2V0IHNlbGVjdGVkSXRlbSgpIHtcbiAgICByZXR1cm4gdGhpc1tzZWxlY3RlZEl0ZW1TeW1ib2xdO1xuICB9XG4gIHNldCBzZWxlY3RlZEl0ZW0oaXRlbSkge1xuICAgIGlmICgnc2VsZWN0ZWRJdGVtJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEl0ZW0gPSBpdGVtOyB9XG4gICAgdGhpc1tzZWxlY3RlZEl0ZW1TeW1ib2xdID0gaXRlbTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgZ2V0IHNob3dUcmFuc2l0aW9uKCkge1xuICAgIHJldHVybiBzdXBlci5zaG93VHJhbnNpdGlvbiB8fCB0aGlzLmNsYXNzTGlzdC5jb250YWlucygnc2hvd1RyYW5zaXRpb24nKTtcbiAgfVxuICBzZXQgc2hvd1RyYW5zaXRpb24odmFsdWUpIHtcbiAgICBpZiAoJ3Nob3dUcmFuc2l0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zaG93VHJhbnNpdGlvbiA9IHZhbHVlOyB9XG4gICAgdG9nZ2xlQ2xhc3ModGhpcywgJ3Nob3dUcmFuc2l0aW9uJywgdmFsdWUpO1xuICB9XG5cbiAgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBgXG4gICAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgICNzbGlkaW5nQ29udGFpbmVyIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIC8qXG4gICAgICAgICBTZXQgd2lkdGggZm9yIElFL0VkZ2UuIEl0J3Mgbm90IGNsZWFyIHdoeSB0aGV5IG5lZWQgdGhpcywgYW5kIHRoZSBvdGhlclxuICAgICAgICAgYnJvd3NlcnMgZG9uJ3QuXG4gICAgICAgICAqL1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoLnNob3dUcmFuc2l0aW9uKSAjc2xpZGluZ0NvbnRhaW5lciB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4ycyBlYXNlLW91dDtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1vdXQ7XG4gICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8YmFzaWMtc3ByZWFkLWl0ZW1zIGlkPVwic2xpZGluZ0NvbnRhaW5lclwiIHJvbGU9XCJub25lXCI+XG4gICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgIDwvYmFzaWMtc3ByZWFkLWl0ZW1zPlxuICAgIGA7XG4gIH1cblxufVxuXG5cbi8vIE5vdGU6IEluIHRoaXMgcm91dGluZSwgXCJ0aGlzXCIgaXMgYm91bmQgdG8gYW4gZWxlbWVudCBpbnN0YW5jZS5cbmZ1bmN0aW9uIHJlbmRlclNlbGVjdGlvbigpIHtcbiAgaWYgKCF0aGlzLnNlbGVjdGVkSXRlbSkge1xuICAgIHJldHVybjtcbiAgfVxuICBsZXQgc2VsZWN0aW9uID0gRnJhY3Rpb25hbFNlbGVjdGlvbi5oZWxwZXJzLmVsZW1lbnRTZWxlY3Rpb24odGhpcyk7XG4gIGxldCBpdGVtQ291bnQgPSB0aGlzLml0ZW1zID8gdGhpcy5pdGVtcy5sZW5ndGggOiAwO1xuICBsZXQgZGFtcGVkID0gRnJhY3Rpb25hbFNlbGVjdGlvbi5oZWxwZXJzLmRhbXBlZFNlbGVjdGlvbihzZWxlY3Rpb24sIGl0ZW1Db3VudCk7XG4gIC8vIFVzZSBhIHBlcmNlbnRhZ2Ugc28gdGhlIHRyYW5zZm9ybSB3aWxsIHN0aWxsIHdvcmsgaWYgc2NyZWVuIHNpemUgY2hhbmdlc1xuICAvLyAoZS5nLiwgaWYgZGV2aWNlIG9yaWVudGF0aW9uIGNoYW5nZXMpLlxuICBsZXQgbGVmdCA9IC1kYW1wZWQgKiAxMDA7XG4gIGxldCB0cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgnICsgbGVmdCArICclKSc7XG4gIHRoaXMuJC5zbGlkaW5nQ29udGFpbmVyLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgdGhpcy4kLnNsaWRpbmdDb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xufVxuXG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYmFzaWMtc2xpZGluZy12aWV3cG9ydCcsIFNsaWRpbmdWaWV3cG9ydCk7XG5leHBvcnQgZGVmYXVsdCBTbGlkaW5nVmlld3BvcnQ7XG4iLCJpbXBvcnQgRWxlbWVudEJhc2UgZnJvbSAnLi4vLi4vYmFzaWMtZWxlbWVudC1iYXNlL3NyYy9FbGVtZW50QmFzZSc7XG5pbXBvcnQgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50JztcbmltcG9ydCBPYnNlcnZlQ29udGVudENoYW5nZXMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvT2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzJztcblxuXG4vKipcbiAqIFNwcmVhZHMgb3V0IGEgc2V0IG9mIGl0ZW1zIGhvcml6b250YWxseSBzbyB0aGV5IHRha2UgZXF1YWwgc3BhY2UuXG4gKlxuICogW0xpdmUgZGVtb10oaHR0cDovL2Jhc2ljd2ViY29tcG9uZW50cy5vcmcvYmFzaWMtd2ViLWNvbXBvbmVudHMvcGFja2FnZXMvYmFzaWMtc3ByZWFkLWl0ZW1zLylcbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBpcyB1c2VkLCBmb3IgZXhhbXBsZSwgYnkgdGhlIGJhc2ljLXNsaWRpbmctdmlld3BvcnQgY29tcG9uZW50XG4gKiB0byBlbnN1cmUgdGhhdCBjaGlsZHJlbiBvZiBkaWZmZXJlbnQgc2l6ZSB3aWxsIHRha2UgdXAgdGhlIHNhbWUgYW1vdW50IG9mXG4gKiBob3Jpem9udGFsIHNwYWNlLlxuICpcbiAqIFRoaXMgY29tcG9uZW50IGN1cnJlbnRseSByZXF1aXJlcyBhbiBleHBsaWNpdCBzaXplIGJ5IGFwcGxpZWQgdG8gaXQuXG4gKlxuICogQGV4dGVuZHMgRWxlbWVudEJhc2VcbiAqIEBtaXhlcyBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50XG4gKiBAbWl4ZXMgT2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzXG4gKi9cbmNsYXNzIFNwcmVhZEl0ZW1zIGV4dGVuZHMgRWxlbWVudEJhc2UuY29tcG9zZShcbiAgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCxcbiAgT2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzXG4pIHtcblxuICBhdHRhY2hlZENhbGxiYWNrKCkge1xuICAgIGlmIChzdXBlci5hdHRhY2hlZENhbGxiYWNrKSB7IHN1cGVyLmF0dGFjaGVkQ2FsbGJhY2soKTsgfVxuICAgIC8vIEhBQ0tcbiAgICB0aGlzLml0ZW1zQ2hhbmdlZCgpO1xuICB9XG5cbiAgZ2V0IGl0ZW1zKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XG4gIH1cblxuICAvLyBUT0RPOiBTaG91bGQgYWxzbyBoYW5kbGUgY29udGVudENoYW5nZWQoKSwgYnV0IG5lZWQgdG8gcmF0aW9uYWxpemUgd2l0aFxuICAvLyBpbnZvY2F0aW9uIG9mIGl0ZW1zQ2hhbmdlZCBpbiBhdHRhY2hlZENhbGxiYWNrLlxuICBpdGVtc0NoYW5nZWQoKSB7XG4gICAgaWYgKHN1cGVyLml0ZW1zQ2hhbmdlZCkgeyBzdXBlci5pdGVtc0NoYW5nZWQoKTsgfVxuICAgIGxldCBpdGVtcyA9IHRoaXMuaXRlbXM7XG4gICAgbGV0IGNvdW50ID0gaXRlbXMubGVuZ3RoO1xuICAgIHRoaXMuJC5zcHJlYWRDb250YWluZXIuc3R5bGUud2lkdGggPSAoY291bnQgKiAxMDApICsgJyUnO1xuICAgIGxldCBpdGVtV2lkdGggPSAoMTAwIC8gY291bnQpICsgXCIlXCI7XG4gICAgW10uZm9yRWFjaC5jYWxsKGl0ZW1zLCBpdGVtID0+IHtcbiAgICAgIGl0ZW0uc3R5bGUud2lkdGggPSBpdGVtV2lkdGg7XG4gICAgfSk7XG4gIH1cblxuICBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgICNzcHJlYWRDb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICAjc3ByZWFkQ29udGFpbmVyIDo6Y29udGVudCA+ICoge1xuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICBvYmplY3QtZml0OiB2YXIoLS1iYXNpYy1pdGVtLW9iamVjdC1maXQsIGNvbnRhaW4pO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xuICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBpZD1cInNwcmVhZENvbnRhaW5lclwiPlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbn1cblxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2Jhc2ljLXNwcmVhZC1pdGVtcycsIFNwcmVhZEl0ZW1zKTtcbmV4cG9ydCBkZWZhdWx0IFNwcmVhZEl0ZW1zO1xuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9jcmVhdGVTeW1ib2wnO1xuaW1wb3J0IEVsZW1lbnRCYXNlIGZyb20gJy4uLy4uL2Jhc2ljLWVsZW1lbnQtYmFzZS9zcmMvRWxlbWVudEJhc2UnO1xuaW1wb3J0IENvbnRlbnRGaXJzdENoaWxkVGFyZ2V0IGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NvbnRlbnRGaXJzdENoaWxkVGFyZ2V0JztcbmltcG9ydCBEaXJlY3Rpb25TZWxlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlyZWN0aW9uU2VsZWN0aW9uJztcbmltcG9ydCBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50IGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQnO1xuaW1wb3J0IEdlbmVyaWMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvR2VuZXJpYyc7XG5pbXBvcnQgSXRlbXNTZWxlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvSXRlbXNTZWxlY3Rpb24nO1xuaW1wb3J0IEtleWJvYXJkRGlyZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0tleWJvYXJkRGlyZWN0aW9uJztcbmltcG9ydCBPYnNlcnZlQ29udGVudENoYW5nZXMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvT2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzJztcbmltcG9ydCByZW5kZXJBcnJheUFzRWxlbWVudHMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvcmVuZGVyQXJyYXlBc0VsZW1lbnRzJztcbmltcG9ydCBUYXJnZXRTZWxlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvVGFyZ2V0U2VsZWN0aW9uJztcbmltcG9ydCB0b2dnbGVDbGFzcyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy90b2dnbGVDbGFzcyc7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IHRhYlBvc2l0aW9uU3ltYm9sID0gY3JlYXRlU3ltYm9sKCd0YWJQb3NpdGlvbicpO1xuXG5cbi8vIFVzZWQgdG8gYXNzaWduIHVuaXF1ZSBJRHMgdG8gdGFicyBmb3IgQVJJQSBwdXJwb3Nlcy5cbmxldCBpZENvdW50ID0gMDtcblxuXG5sZXQgYmFzZSA9IEVsZW1lbnRCYXNlLmNvbXBvc2UoXG4gIENvbnRlbnRGaXJzdENoaWxkVGFyZ2V0LFxuICBEaXJlY3Rpb25TZWxlY3Rpb24sXG4gIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQsXG4gIEdlbmVyaWMsXG4gIEl0ZW1zU2VsZWN0aW9uLFxuICBLZXlib2FyZERpcmVjdGlvbixcbiAgT2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzLFxuICBUYXJnZXRTZWxlY3Rpb25cbik7XG5cblxuLyoqXG4gKiBBIHN0cmlwIG9mIHRhYnMgZm9yIHNlbGVjdGluZyBvbmUgb2YgdGhlIGNvbXBvbmVudCdzIGNoaWxkcmVuLlxuICpcbiAqIFRoZSBjb21wb25lbnQgY3JlYXRlcyBhIHRhYiB0byByZXByZXNlbnQgZWFjaCBvZiBpdHMgbGlnaHQgRE9NIGNoaWxkcmVuLlxuICogVGhlIHRhYiBuYW1lIGlzIG9idGFpbmVkIGJ5IGV4YW1pbmluZyB0aGUgY2hpbGRyZW4gZm9yIGFuIGBhcmlhLWxhYmVsYFxuICogcHJvcGVydHkuXG4gKlxuICogVXNlIHRhYnMgd2hlbiB5b3Ugd2FudCB0byBwcm92aWRlIGEgbGFyZ2Ugc2V0IG9mIG9wdGlvbnMgb3IgZWxlbWVudHMgdGhhblxuICogY2FuIGNvbWZvcnRhYmx5IGZpdCBpbmxpbmUsIHRoZSBvcHRpb25zIGNhbiBiZSBjb2hlcmVudGx5IGdyb3VwZWQgaW50byBwYWdlcyxcbiAqIGFuZCB5b3Ugd2FudCB0byBhdm9pZCBtYWtpbmcgdGhlIHVzZXIgbmF2aWdhdGUgdG8gYSBzZXBhcmF0ZSBwYWdlLiBUYWJzIHdvcmtcbiAqIGJlc3QgaWYgeW91IG9ubHkgaGF2ZSBhIHNtYWxsIGhhbmRmdWwgb2YgcGFnZXMsIHNheSAy4oCTNy5cbiAqXG4gKiBUaGUgYmFzaWMtdGFiLXN0cmlwIGNvbXBvbmVudCBkb2VzIG5vdCBkZWZpbmUgaG93IGEgc2VsZWN0ZWQgY2hpbGQgaXNcbiAqIHJlcHJlc2VudGVkLiBJZiB5b3UncmUgbG9va2luZyBmb3IgdGhlIHN0YW5kYXJkIGJlaGF2aW9yIG9mIGp1c3Qgc2hvd2luZyBvbmx5XG4gKiB0aGUgc2VsZWN0ZWQgY2hpbGQsIHlvdSBjYW4gdXNlIHRoaXMgY29tcG9uZW50IGluIGNvbWJpbmF0aW9uIHdpdGggdGhlXG4gKiBzZXBhcmF0ZSBbYmFzaWMtbW9kZXNdKC4uL2Jhc2ljLW1vZGVzLykgY29tcG9uZW50LiBBIHR5cGljYWwgYXJyYW5nZW1lbnQ6XG4gKlxuICogICAgIDxiYXNpYy10YWItc3RyaXA+XG4gKiAgICAgICA8YmFzaWMtbW9kZXMgYXJpYS1sYWJlbD1cIlBhbmVsc1wiPlxuICogICAgICAgICA8ZGl2IGFyaWEtbGFiZWw9XCJPbmVcIj5QYWdlIG9uZTwvZGl2PlxuICogICAgICAgICA8ZGl2IGFyaWEtbGFiZWw9XCJUd29cIj5QYWdlIHR3bzwvZGl2PlxuICogICAgICAgICA8ZGl2IGFyaWEtbGFiZWw9XCJUaHJlZVwiPlBhZ2UgdGhyZWU8L2Rpdj5cbiAqICAgICAgIDwvYmFzaWMtbW9kZXM+XG4gKiAgICAgPC9iYXNpYy10YWItc3RyaXA+XG4gKlxuICogVGhlIGFib3ZlIGNvbWJpbmF0aW9uIGlzIHNvIGNvbW1vbiBpdCBpcyBwcm92aWRlZCBhcyBhIHNpbmdsZSBjb21wb25lbnQsXG4gKiBbYmFzaWMtdGFic10oLi4vYmFzaWMtdGFicy8pLlxuICpcbiAqIFRoZSB1c2VyIGNhbiBzZWxlY3QgYSB0YWIgd2l0aCB0aGUgbW91c2Ugb3IgdG91Y2gsIGFzIHdlbGwgYXMgYnkgdGhyb3VnaCB0aGVcbiAqIGtleWJvYXJkLiBFYWNoIHRhYiBhcHBlYXJzIGFzIGEgc2VwYXJhdGUgYnV0dG9uIGluIHRoZSB0YWIgb3JkZXIuXG4gKiBBZGRpdGlvbmFsbHksIGlmIHRoZSBmb2N1cyBpcyBjdXJyZW50bHkgb24gYSB0YWIsIHRoZSB1c2VyIGNhbiBxdWlja2x5XG4gKiBuYXZpZ2F0ZSBiZXR3ZWVuIHRhYnMgd2l0aCB0aGUgbGVmdC9yaWdodCBhcnJvdyBrZXlzIChvciwgaWYgdGhlIHRhYnMgYXJlXG4gKiBpbiB2ZXJ0aWNhbCBwb3NpdGlvbiwgdGhlIHVwL2Rvd24gYXJyb3cga2V5cykuXG4gKlxuICogQnkgZGVmYXVsdCwgdGhlIHRhYnMgYXJlIHNob3duIGdyb3VwZWQgdG8gdGhlIGxlZnQsIHdoZXJlIGVhY2ggdGFiIGlzIG9ubHlcbiAqIGFzIGJpZyBhcyBuZWNlc3NhcnkuIFlvdSBjYW4gYXBwbHkgdGhlIGBzcHJlYWRgIENTUyBjbGFzcyB0byBhXG4gKiBiYXNpYy10YWItc3RyaXAgZWxlbWVudCBmb3IgYSB2YXJpYW50IGFwcGVhcmFuY2UgaW4gd2hpY2ggdGhlIGF2YWlsYWJsZSB3aWR0aFxuICogb2YgdGhlIGVsZW1lbnQgaXMgZGl2aWRlZCB1cCBlcXVhbGx5IGFtb25nIHRhYnMuXG4gKlxuICogVGhlIGdlbmVyaWMgZGVmYXVsdCBzdHlsaW5nIG9mIHRoZSB0YWIgc3RyaXAgd2lsbCBwcmVzZW50IHRoZSBjbGFzc2ljXG4gKiBza2V1bW9ycGhpYyBsb29rIG9mIHJvdW5kZWQgdGFicyBhdHRhY2hlZCB0byBhIHN1cmZhY2UuIFlvdSBjYW4gcmVtb3ZlIHRoaXNcbiAqIHN0eWxpbmcgYnkgc2V0dGluZyB0aGUgYGdlbmVyaWNgIHByb3BlcnR5L2F0dHJpYnV0ZSB0byBmYWxzZS5cbiAqXG4gKiBAZXh0ZW5kcyBFbGVtZW50QmFzZVxuICogQG1peGVzIENvbnRlbnRGaXJzdENoaWxkVGFyZ2V0XG4gKiBAbWl4ZXMgRGlyZWN0aW9uU2VsZWN0aW9uXG4gKiBAbWl4ZXMgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudFxuICogQG1peGVzIEdlbmVyaWNcbiAqIEBtaXhlcyBJdGVtc1NlbGVjdGlvblxuICogQG1peGVzIEtleWJvYXJkRGlyZWN0aW9uXG4gKiBAbWl4ZXMgT2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzXG4gKiBAbWl4ZXMgVGFyZ2V0U2VsZWN0aW9uXG4gKi9cbmNsYXNzIFRhYlN0cmlwIGV4dGVuZHMgYmFzZSB7XG5cbiAgYXBwbHlTZWxlY3Rpb24oaXRlbSwgc2VsZWN0ZWQpIHtcbiAgICBpZiAoc3VwZXIuYXBwbHlTZWxlY3Rpb24pIHsgc3VwZXIuYXBwbHlTZWxlY3Rpb24oaXRlbSwgc2VsZWN0ZWQpOyB9XG4gICAgbGV0IGluZGV4ID0gdGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pO1xuICAgIC8vIFNlZSBpZiB0aGUgY29ycmVzcG9uZGluZyB0YWIgaGFzIGFscmVhZHkgYmVlbiBjcmVhdGVkLlxuICAgIC8vIElmIG5vdCwgdGhlIGNvcnJlY3QgdGFiIHdpbGwgYmUgc2VsZWN0ZWQgd2hlbiBpdCBnZXRzIGNyZWF0ZWQuXG4gICAgbGV0IHRhYnMgPSB0aGlzLnRhYnM7XG4gICAgaWYgKHRhYnMgJiYgdGFicy5sZW5ndGggPiBpbmRleCkge1xuICAgICAgbGV0IHRhYiA9IHRoaXMudGFic1tpbmRleF07XG4gICAgICBpZiAodGFiKSB7XG4gICAgICAgIGFwcGx5U2VsZWN0aW9uVG9UYWIodGFiLCBzZWxlY3RlZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpO1xuXG4gICAgdGhpcy4kLnRhYnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICBsZXQgdGFiID0gZXZlbnQudGFyZ2V0O1xuICAgICAgbGV0IHRhYkluZGV4ID0gdGhpcy50YWJzLmluZGV4T2YodGFiKTtcbiAgICAgIGlmICh0YWJJbmRleCA+PSAwKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHRhYkluZGV4O1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gTGlzdGVuIHRvIGtleWRvd24gZXZlbnRzIG9uIHRoZSB0YWJzLCBub3Qgb24gcGFnZXMuXG4gICAgdGhpcy4kLnRhYnMuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGV2ZW50ID0+IHtcbiAgICAgIGxldCBoYW5kbGVkID0gdGhpcy5rZXlkb3duKGV2ZW50KTtcbiAgICAgIGlmIChoYW5kbGVkKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCF0aGlzLmdldEF0dHJpYnV0ZSgncm9sZScpKSB7XG4gICAgICAvLyBBc3NpZ24gYSBkZWZhdWx0IEFSSUEgcm9sZS5cbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdyb2xlJywgJ3RhYmxpc3QnKTtcbiAgICB9XG5cbiAgICAvLyBTZXQgZGVmYXVsdHMuXG4gICAgaWYgKHR5cGVvZiB0aGlzLnRhYlBvc2l0aW9uID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy50YWJQb3NpdGlvbiA9IHRoaXMuZGVmYXVsdHMudGFiUG9zaXRpb247XG4gICAgfVxuICB9XG5cbiAgZ2V0IGRlZmF1bHRzKCkge1xuICAgIGxldCBkZWZhdWx0cyA9IHN1cGVyLmRlZmF1bHRzIHx8IHt9O1xuICAgIGRlZmF1bHRzLnRhYlBvc2l0aW9uID0gJ3RvcCc7XG4gICAgcmV0dXJuIGRlZmF1bHRzO1xuICB9XG5cbiAgZ2V0IHRhYnMoKSB7XG4gICAgcmV0dXJuIFtdLnNsaWNlLmNhbGwodGhpcy4kLnRhYnMucXVlcnlTZWxlY3RvckFsbCgnLnRhYicpKTtcbiAgfVxuXG4gIGl0ZW1zQ2hhbmdlZCgpIHtcbiAgICBpZiAoc3VwZXIuaXRlbXNDaGFuZ2VkKSB7IHN1cGVyLml0ZW1zQ2hhbmdlZCgpOyB9XG5cbiAgICBsZXQgYmFzZUlkID0gdGhpcy5pZCA/XG4gICAgICBcIl9cIiArIHRoaXMuaWQgKyBcIlBhbmVsXCIgOlxuICAgICAgXCJfcGFuZWxcIjtcblxuICAgIC8vIENvbmZpcm0gdGhhdCBpdGVtcyBoYXZlIGF0IGxlYXN0IGEgZGVmYXVsdCByb2xlIGFuZCBJRCBmb3IgQVJJQSBwdXJwb3Nlcy5cbiAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpZiAoIWl0ZW0uZ2V0QXR0cmlidXRlKCdyb2xlJykpIHtcbiAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAndGFicGFuZWwnKTtcbiAgICAgIH1cbiAgICAgIGlmICghaXRlbS5pZCkge1xuICAgICAgICBpdGVtLmlkID0gYmFzZUlkICsgaWRDb3VudCsrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gQ3JlYXRlIHRhYnMuXG4gICAgcmVuZGVyQXJyYXlBc0VsZW1lbnRzKHRoaXMuaXRlbXMsIHRoaXMuJC50YWJzLCAoaXRlbSwgZWxlbWVudCkgPT4ge1xuICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0YWInKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzdHlsZS1zY29wZScpO1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Jhc2ljLXRhYi1zdHJpcCcpO1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgncm9sZScsICd0YWInKTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICB9XG4gICAgICBlbGVtZW50LmlkID0gaXRlbS5pZCArICdfdGFiJztcbiAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBpdGVtLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpO1xuXG4gICAgICAvLyBQb2ludCB0YWIgYW5kIHBhbmVsIGF0IGVhY2ggb3RoZXIuXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycsIGl0ZW0uaWQpO1xuICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWxsZWRieScsIGVsZW1lbnQuaWQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zZWxlY3RlZEl0ZW1DaGFuZ2VkKCk7ICAvLyBJbiBjYXNlIHBvc2l0aW9uIG9mIHNlbGVjdGVkIGl0ZW0gbW92ZWQuXG4gIH1cblxuICBrZXlkb3duKGV2ZW50KSB7XG4gICAgbGV0IGhhbmRsZWQgPSBzdXBlci5rZXlkb3duKGV2ZW50KTtcbiAgICBpZiAoaGFuZGxlZCkge1xuICAgICAgLy8gSWYgdGhlIGV2ZW50IHJlc3VsdGVkIGluIGEgY2hhbmdlIG9mIHNlbGVjdGlvbiwgbW92ZSB0aGUgZm9jdXMgdG8gdGhlXG4gICAgICAvLyBuZXdseS1zZWxlY3RlZCB0YWIuXG4gICAgICB0aGlzLnRhYnNbdGhpcy5zZWxlY3RlZEluZGV4XS5mb2N1cygpO1xuICAgIH1cbiAgICByZXR1cm4gaGFuZGxlZDtcbiAgfVxuXG4gIHNlbGVjdGVkSXRlbUNoYW5nZWQoKSB7XG4gICAgaWYgKHN1cGVyLnNlbGVjdGVkSXRlbUNoYW5nZWQpIHsgc3VwZXIuc2VsZWN0ZWRJdGVtQ2hhbmdlZCgpOyB9XG4gICAgbGV0IHNlbGVjdGVkSW5kZXggPSB0aGlzLnNlbGVjdGVkSW5kZXg7XG4gICAgdGhpcy50YWJzLmZvckVhY2goKHRhYiwgaSkgPT4ge1xuICAgICAgYXBwbHlTZWxlY3Rpb25Ub1RhYih0YWIsIGkgPT09IHNlbGVjdGVkSW5kZXgpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBwb3NpdGlvbiBvZiB0aGUgdGFiIHN0cmlwIHJlbGF0aXZlIHRvIHRoZSBlbGVtZW50J3MgY2hpbGRyZW4uIFZhbGlkXG4gICAqIHZhbHVlcyBhcmUgXCJ0b3BcIiwgXCJsZWZ0XCIsIFwicmlnaHRcIiwgYW5kIFwiYm90dG9tXCIuXG4gICAqXG4gICAqIEBkZWZhdWx0IFwidG9wXCJcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCB0YWJQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpc1t0YWJQb3NpdGlvblN5bWJvbF07XG4gIH1cbiAgc2V0IHRhYlBvc2l0aW9uKHBvc2l0aW9uKSB7XG4gICAgdGhpc1t0YWJQb3NpdGlvblN5bWJvbF0gPSBwb3NpdGlvbjtcblxuICAgIGlmICh0aGlzLmdldEF0dHJpYnV0ZSgndGFiLXBvc2l0aW9uJykgIT09IHBvc2l0aW9uKSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgndGFiLXBvc2l0aW9uJywgcG9zaXRpb24pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFBoeXNpY2FsbHkgcmVvcmRlciB0aGUgdGFicyBhbmQgcGFnZXMgdG8gcmVmbGVjdCB0aGUgZGVzaXJlZCBhcnJhbmdlbWVudC5cbiAgICAvLyBXZSBjb3VsZCBjaGFuZ2UgdGhlIHZpc3VhbCBhcHBlYXJhbmNlIGJ5IHJldmVyc2luZyB0aGUgb3JkZXIgb2YgdGhlIGZsZXhcbiAgICAvLyBib3gsIGJ1dCB0aGVuIHRoZSB2aXN1YWwgb3JkZXIgd291bGRuJ3QgcmVmbGVjdCB0aGUgZG9jdW1lbnQgb3JkZXIsIHdoaWNoXG4gICAgLy8gZGV0ZXJtaW5lcyBmb2N1cyBvcmRlci4gVGhhdCB3b3VsZCBzdXJwcmlzZSBhIHVzZXIgdHJ5aW5nIHRvIHRhYiB0aHJvdWdoXG4gICAgLy8gdGhlIGNvbnRyb2xzLlxuICAgIGxldCBmaXJzdEVsZW1lbnQgPSAocG9zaXRpb24gPT09ICd0b3AnIHx8IHBvc2l0aW9uID09PSAnbGVmdCcpID9cbiAgICAgIHRoaXMuJC50YWJzIDpcbiAgICAgIHRoaXMuJC5wYWdlcztcbiAgICBsZXQgbGFzdEVsZW1lbnQgPSAocG9zaXRpb24gPT09ICd0b3AnIHx8IHBvc2l0aW9uID09PSAnbGVmdCcpID9cbiAgICAgIHRoaXMuJC5wYWdlcyA6XG4gICAgICB0aGlzLiQudGFicztcbiAgICBpZiAoZmlyc3RFbGVtZW50Lm5leHRTaWJsaW5nICE9PSBsYXN0RWxlbWVudCkge1xuICAgICAgdGhpcy5zaGFkb3dSb290Lmluc2VydEJlZm9yZShmaXJzdEVsZW1lbnQsIGxhc3RFbGVtZW50KTtcbiAgICB9XG5cbiAgICB0aGlzLm5hdmlnYXRpb25BeGlzID0gKHBvc2l0aW9uID09PSAndG9wJyB8fCBwb3NpdGlvbiA9PT0gJ2JvdHRvbScpID9cbiAgICAgICdob3Jpem9udGFsJyA6XG4gICAgICAndmVydGljYWwnO1xuICB9XG5cbiAgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBgXG4gICAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIC8qXG4gICAgICAgKiBBdm9pZCBoYXZpbmcgdGFiIGNvbnRhaW5lciBzdHJldGNoIGFjcm9zcy4gVXNlciB3b24ndCBiZSBhYmxlIHRvIHNlZVxuICAgICAgICogaXQsIGJ1dCBzaW5jZSBpdCBoYW5kbGVzIHRoZSBrZXlib2FyZCwgaW4gTW9iaWxlIFNhZmFyaSBhIHRhcCBvbiB0aGVcbiAgICAgICAqIGNvbnRhaW5lciBiYWNrZ3JvdW5kIHdpbGwgY2F1c2UgdGhlIHJlZ2lvbiB0byBmbGFzaC4gQWxpZ25pbmcgdGhlXG4gICAgICAgKiByZWdpb24gY29sbGFwc2VzIGl0IGRvd24gdG8gaG9sZCBpdHMgY29udGVudHMuXG4gICAgICAgKi9cbiAgICAgICN0YWJzIHtcbiAgICAgICAgLyogRm9yIElFIGJ1ZyAoY2xpY2tpbmcgdGFiIHByb2R1Y2VzIGdhcCBiZXR3ZWVuIHRhYiBhbmQgcGFnZSkuICovXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLypcbiAgICAgICAgICogVHJ5IHRvIG9idGFpbiBmYXN0LXRhcCBiZWhhdmlvciBvbiBhbGwgdGFicy5cbiAgICAgICAgICogU2VlIGh0dHBzOi8vd2Via2l0Lm9yZy9ibG9nLzU2MTAvbW9yZS1yZXNwb25zaXZlLXRhcHBpbmctb24taW9zLy5cbiAgICAgICAgICovXG4gICAgICAgIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xuICAgICAgfVxuICAgICAgOmhvc3QoOm5vdCguc3ByZWFkKSkgI3RhYnMge1xuICAgICAgICAtd2Via2l0LWFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgICB9XG5cbiAgICAgICNwYWdlcyB7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLXdlYmtpdC1mbGV4OiAxO1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB9XG5cbiAgICAgICNwYWdlcyA6OmNvbnRlbnQgPiAqIHtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAtd2Via2l0LWZsZXg6IDE7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICB9XG5cbiAgICAgIC50YWIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICAvKiBMZWZ0L3JpZ2h0IHBvc2l0aW9ucyAqL1xuICAgICAgOmhvc3QoW3RhYi1wb3NpdGlvbj1cImxlZnRcIl0pLFxuICAgICAgOmhvc3QoW3RhYi1wb3NpdGlvbj1cInJpZ2h0XCJdKSB7XG4gICAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIH1cbiAgICAgIDpob3N0KFt0YWItcG9zaXRpb249XCJsZWZ0XCJdKSAjdGFicyxcbiAgICAgIDpob3N0KFt0YWItcG9zaXRpb249XCJyaWdodFwiXSkgI3RhYnMge1xuICAgICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB9XG5cbiAgICAgIC8qIFNwcmVhZCB2YXJpYW50ICovXG4gICAgICA6aG9zdCguc3ByZWFkKSAjdGFicyB7XG4gICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICAgfVxuICAgICAgOmhvc3QoLnNwcmVhZCkgLnRhYiB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICB9XG5cbiAgICAgIC8qIEdlbmVyaWMgc3R5bGUgKi9cbiAgICAgIDpob3N0KFtnZW5lcmljPVwiXCJdKSAjcGFnZXMge1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2dlbmVyaWM9XCJcIl0pIC50YWIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwLjVlbSAwLjc1ZW07XG4gICAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjI1cztcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2dlbmVyaWM9XCJcIl0pIC50YWIuc2VsZWN0ZWQge1xuICAgICAgICBib3JkZXItY29sb3I6ICNjY2M7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtnZW5lcmljPVwiXCJdKSAudGFiOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICAgIH1cblxuICAgICAgLyogR2VuZXJpYywgdG9wL2JvdHRvbSBwb3NpdGlvbnMgKi9cbiAgICAgIDpob3N0KFtnZW5lcmljPVwiXCJdW3RhYi1wb3NpdGlvbj1cInRvcFwiXSkgLnRhYjpub3QoOmxhc3QtY2hpbGQpLFxuICAgICAgOmhvc3QoW2dlbmVyaWM9XCJcIl1bdGFiLXBvc2l0aW9uPVwiYm90dG9tXCJdKSAudGFiOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuMmVtO1xuICAgICAgfVxuXG4gICAgICAvKiBHZW5lcmljLCB0b3AgcG9zaXRpb24gKi9cbiAgICAgIDpob3N0KFtnZW5lcmljPVwiXCJdW3RhYi1wb3NpdGlvbj1cInRvcFwiXSkgLnRhYiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVlbSAwLjI1ZW0gMCAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xuICAgICAgfVxuICAgICAgOmhvc3QoW2dlbmVyaWM9XCJcIl1bdGFiLXBvc2l0aW9uPVwidG9wXCJdKSAudGFiLnNlbGVjdGVkIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG5cbiAgICAgIC8qIEdlbmVyaWMsIGJvdHRvbSBwb3NpdGlvbiAqL1xuICAgICAgOmhvc3QoW2dlbmVyaWM9XCJcIl1bdGFiLXBvc2l0aW9uPVwiYm90dG9tXCJdKSAudGFiIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDAuMjVlbSAwLjI1ZW07XG4gICAgICAgIG1hcmdpbi10b3A6IC0xcHg7XG4gICAgICB9XG4gICAgICA6aG9zdChbZ2VuZXJpYz1cIlwiXVt0YWItcG9zaXRpb249XCJib3R0b21cIl0pIC50YWIuc2VsZWN0ZWQge1xuICAgICAgICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cblxuICAgICAgLyogR2VuZXJpYywgbGVmdC9yaWdodCBwb3NpdGlvbnMgKi9cbiAgICAgIDpob3N0KFtnZW5lcmljPVwiXCJdW3RhYi1wb3NpdGlvbj1cImxlZnRcIl0pIC50YWI6bm90KDpsYXN0LWNoaWxkKSxcbiAgICAgIDpob3N0KFtnZW5lcmljPVwiXCJdW3RhYi1wb3NpdGlvbj1cInJpZ2h0XCJdKSAudGFiOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjJlbTtcbiAgICAgIH1cblxuICAgICAgLyogR2VuZXJpYywgbGVmdCBwb3NpdGlvbiAqL1xuICAgICAgOmhvc3QoW2dlbmVyaWM9XCJcIl1bdGFiLXBvc2l0aW9uPVwibGVmdFwiXSkgLnRhYiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVlbSAwIDAgMC4yNWVtO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IC0xcHg7XG4gICAgICB9XG4gICAgICA6aG9zdChbZ2VuZXJpYz1cIlwiXVt0YWItcG9zaXRpb249XCJsZWZ0XCJdKSAudGFiLnNlbGVjdGVkIHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cblxuICAgICAgLyogR2VuZXJpYywgcmlnaHQgcG9zaXRpb24gKi9cbiAgICAgIDpob3N0KFtnZW5lcmljPVwiXCJdW3RhYi1wb3NpdGlvbj1cInJpZ2h0XCJdKSAudGFiIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwLjI1ZW0gMC4yNWVtIDA7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xuICAgICAgfVxuICAgICAgOmhvc3QoW2dlbmVyaWM9XCJcIl1bdGFiLXBvc2l0aW9uPVwicmlnaHRcIl0pIC50YWIuc2VsZWN0ZWQge1xuICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGlkPVwidGFic1wiPjwvZGl2PlxuICAgICAgPGRpdiBpZD1cInBhZ2VzXCI+XG4gICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxufVxuXG5cbmZ1bmN0aW9uIGFwcGx5U2VsZWN0aW9uVG9UYWIodGFiLCBzZWxlY3RlZCkge1xuICB0b2dnbGVDbGFzcyh0YWIsICdzZWxlY3RlZCcsIHNlbGVjdGVkKTtcbiAgdGFiLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsIHNlbGVjdGVkKTtcbn1cblxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2Jhc2ljLXRhYi1zdHJpcCcsIFRhYlN0cmlwKTtcbmV4cG9ydCBkZWZhdWx0IFRhYlN0cmlwO1xuIiwiaW1wb3J0IEVsZW1lbnRCYXNlIGZyb20gJy4uLy4uL2Jhc2ljLWVsZW1lbnQtYmFzZS9zcmMvRWxlbWVudEJhc2UnO1xuaW1wb3J0IEdlbmVyaWMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvR2VuZXJpYyc7XG5pbXBvcnQgSXRlbXNTZWxlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvSXRlbXNTZWxlY3Rpb24nO1xuaW1wb3J0IE1vZGVzIGZyb20gJy4uLy4uL2Jhc2ljLW1vZGVzL3NyYy9Nb2Rlcyc7IC8vIGpzaGludCBpZ25vcmU6bGluZVxuaW1wb3J0IFRhYlN0cmlwIGZyb20gJy4uLy4uL2Jhc2ljLXRhYi1zdHJpcC9zcmMvVGFiU3RyaXAnOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcbmltcG9ydCBUYXJnZXRTZWxlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvVGFyZ2V0U2VsZWN0aW9uJztcblxuXG4vKipcbiAqIEEgc2V0IG9mIHBhZ2VzIHdpdGggYSB0YWIgc3RyaXAgZ292ZXJuaW5nIHdoaWNoIHBhZ2UgaXMgc2hvd24uXG4gKlxuICogVGhpcyBzdG9jayBjb21iaW5hdGlvbiBwdXRzIHRvZ2V0aGVyIGEgW2Jhc2ljLXRhYi1zdHJpcF0oLi4vYmFzaWMtdGFiLXN0cmlwLylcbiAqIGFuZCBhIFtiYXNpYy1tb2Rlc10oLi4vYmFzaWMtbW9kZXMvKSBlbGVtZW50LiBJZiB5b3UnZCBsaWtlIHRvIGNyZWF0ZVxuICogc29tZXRoaW5nIG1vcmUgY29tcGxleCB0aGFuIHRoaXMgYXJyYW5nZW1lbnQsIHlvdSBjYW4gdXNlIGVpdGhlciBvZiB0aG9zZVxuICogZWxlbWVudHMgb24gaXRzIG93bi5cbiAqXG4gKiBTaW5jZSB0aGlzIGNvbXBvbmVudCB1c2VzIGJhc2ljLXRhYi1zdHJpcCBpbnRlcm5hbGx5LCBpdCBvYnRhaW5zIHRoZSBuYW1lcyBvZlxuICogdGhlIGluZGl2aWR1YWwgdGFicyB0aGUgc2FtZSB3YXk6IGZyb20gYSBjaGlsZCdzIGBhcmlhLWxhYmVsYCBwcm9wZXJ0eS5cbiAqIEV4YW1wbGU6XG4gKlxuICogICAgIDxiYXNpYy10YWJzPlxuICogICAgICAgPGRpdiBhcmlhLWxhYmVsPVwiT25lXCI+UGFnZSBvbmU8L2Rpdj5cbiAqICAgICAgIDxkaXYgYXJpYS1sYWJlbD1cIlR3b1wiPlBhZ2UgdHdvPC9kaXY+XG4gKiAgICAgICA8ZGl2IGFyaWEtbGFiZWw9XCJUaHJlZVwiPlBhZ2UgdGhyZWU8L2Rpdj5cbiAqICAgICA8L2Jhc2ljLXRhYnM+XG4gKlxuICogQGV4dGVuZHMgRWxlbWVudEJhc2VcbiAqIEBtaXhlcyBJdGVtc1NlbGVjdGlvblxuICogQG1peGVzIFRhcmdldFNlbGVjdGlvblxuICovXG5jbGFzcyBUYWJzIGV4dGVuZHMgRWxlbWVudEJhc2UuY29tcG9zZShcbiAgR2VuZXJpYyxcbiAgSXRlbXNTZWxlY3Rpb24sXG4gIFRhcmdldFNlbGVjdGlvblxuKSB7XG5cbiAgZ2V0IGdlbmVyaWMoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdlbmVyaWM7XG4gIH1cbiAgc2V0IGdlbmVyaWModmFsdWUpIHtcbiAgICBzdXBlci5nZW5lcmljID0gdmFsdWU7XG4gICAgLy8gRm9yd2FyZCB0aGUgZ2VuZXJpYyB2YWx1ZSB0byB0aGUgdGFiIHN0cmlwLlxuICAgIHRoaXMuJC50YWJTdHJpcC5nZW5lcmljID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHBvc2l0aW9uIG9mIHRoZSB0YWIgc3RyaXAgcmVsYXRpdmUgdG8gdGhlIGVsZW1lbnQncyBjaGlsZHJlbi4gVmFsaWRcbiAgICogdmFsdWVzIGFyZSBcInRvcFwiLCBcImxlZnRcIiwgXCJyaWdodFwiLCBhbmQgXCJib3R0b21cIi5cbiAgICpcbiAgICogQGRlZmF1bHQgXCJ0b3BcIlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IHRhYlBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiQgJiYgdGhpcy4kLnRhYlN0cmlwLnRhYlBvc2l0aW9uO1xuICB9XG4gIHNldCB0YWJQb3NpdGlvbihwb3NpdGlvbikge1xuICAgIHRoaXMuJC50YWJTdHJpcC50YWJQb3NpdGlvbiA9IHBvc2l0aW9uO1xuICB9XG5cbiAgZ2V0IHRhcmdldCgpIHtcbiAgICByZXR1cm4gdGhpcy4kICYmIHRoaXMuJC5tb2RlcztcbiAgfVxuXG4gIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gYFxuICAgICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIH1cblxuICAgICAgI3RhYlN0cmlwIHtcbiAgICAgICAgLXdlYmtpdC1mbGV4OiAxO1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgfVxuXG4gICAgICAjbW9kZXMgOjpjb250ZW50ID4gKiB7XG4gICAgICAgIC13ZWJraXQtZmxleDogMTtcbiAgICAgICAgZmxleDogMTtcbiAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxiYXNpYy10YWItc3RyaXAgaWQ9XCJ0YWJTdHJpcFwiPlxuICAgICAgICA8YmFzaWMtbW9kZXMgaWQ9XCJtb2Rlc1wiPlxuICAgICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgICAgPC9iYXNpYy1tb2Rlcz5cbiAgICAgIDwvYmFzaWMtdGFiLXN0cmlwPlxuICAgIGA7XG4gIH1cblxufVxuXG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYmFzaWMtdGFicycsIFRhYnMpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX0FuaW1hdGlvblN0YWdlID0gcmVxdWlyZSgnLi4vLi4vYmFzaWMtYW5pbWF0aW9uLXN0YWdlL3NyYy9BbmltYXRpb25TdGFnZScpO1xuXG52YXIgX0FuaW1hdGlvblN0YWdlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0FuaW1hdGlvblN0YWdlKTtcblxudmFyIF9BcnJvd1NlbGVjdGlvbiA9IHJlcXVpcmUoJy4uLy4uL2Jhc2ljLWFycm93LXNlbGVjdGlvbi9zcmMvQXJyb3dTZWxlY3Rpb24nKTtcblxudmFyIF9BcnJvd1NlbGVjdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BcnJvd1NlbGVjdGlvbik7XG5cbnZhciBfQXV0b3NpemVUZXh0YXJlYSA9IHJlcXVpcmUoJy4uLy4uL2Jhc2ljLWF1dG9zaXplLXRleHRhcmVhL3NyYy9BdXRvc2l6ZVRleHRhcmVhJyk7XG5cbnZhciBfQXV0b3NpemVUZXh0YXJlYTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BdXRvc2l6ZVRleHRhcmVhKTtcblxudmFyIF9DYXJvdXNlbCA9IHJlcXVpcmUoJy4uLy4uL2Jhc2ljLWNhcm91c2VsL3NyYy9DYXJvdXNlbCcpO1xuXG52YXIgX0Nhcm91c2VsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Nhcm91c2VsKTtcblxudmFyIF9Db2xsYXBzaWJsZVBhbmVsID0gcmVxdWlyZSgnLi4vLi4vYmFzaWMtY29sbGFwc2libGUtcGFuZWwvc3JjL0NvbGxhcHNpYmxlUGFuZWwnKTtcblxudmFyIF9Db2xsYXBzaWJsZVBhbmVsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NvbGxhcHNpYmxlUGFuZWwpO1xuXG52YXIgX0N1cnJlbnRBbmNob3IgPSByZXF1aXJlKCcuLi8uLi9iYXNpYy1jdXJyZW50LWFuY2hvci9zcmMvQ3VycmVudEFuY2hvcicpO1xuXG52YXIgX0N1cnJlbnRBbmNob3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ3VycmVudEFuY2hvcik7XG5cbnZhciBfRmFkZU92ZXJmbG93ID0gcmVxdWlyZSgnLi4vLi4vYmFzaWMtZmFkZS1vdmVyZmxvdy9zcmMvRmFkZU92ZXJmbG93Jyk7XG5cbnZhciBfRmFkZU92ZXJmbG93MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0ZhZGVPdmVyZmxvdyk7XG5cbnZhciBfTGlzdEJveCA9IHJlcXVpcmUoJy4uLy4uL2Jhc2ljLWxpc3QtYm94L3NyYy9MaXN0Qm94Jyk7XG5cbnZhciBfTGlzdEJveDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9MaXN0Qm94KTtcblxudmFyIF9Nb2RlcyA9IHJlcXVpcmUoJy4uLy4uL2Jhc2ljLW1vZGVzL3NyYy9Nb2RlcycpO1xuXG52YXIgX01vZGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01vZGVzKTtcblxudmFyIF9QYWdlRG90cyA9IHJlcXVpcmUoJy4uLy4uL2Jhc2ljLXBhZ2UtZG90cy9zcmMvUGFnZURvdHMnKTtcblxudmFyIF9QYWdlRG90czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9QYWdlRG90cyk7XG5cbnZhciBfUGxheUNvbnRyb2xzID0gcmVxdWlyZSgnLi4vLi4vYmFzaWMtcGxheS1jb250cm9scy9zcmMvUGxheUNvbnRyb2xzJyk7XG5cbnZhciBfUGxheUNvbnRyb2xzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BsYXlDb250cm9scyk7XG5cbnZhciBfU2xpZGVzaG93ID0gcmVxdWlyZSgnLi4vLi4vYmFzaWMtc2xpZGVzaG93L3NyYy9TbGlkZXNob3cnKTtcblxudmFyIF9TbGlkZXNob3cyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU2xpZGVzaG93KTtcblxudmFyIF9TbGlkZXNob3dUaW1lciA9IHJlcXVpcmUoJy4uLy4uL2Jhc2ljLXNsaWRlc2hvdy10aW1lci9zcmMvU2xpZGVzaG93VGltZXInKTtcblxudmFyIF9TbGlkZXNob3dUaW1lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TbGlkZXNob3dUaW1lcik7XG5cbnZhciBfU2xpZGluZ0Nhcm91c2VsID0gcmVxdWlyZSgnLi4vLi4vYmFzaWMtc2xpZGluZy1jYXJvdXNlbC9zcmMvU2xpZGluZ0Nhcm91c2VsJyk7XG5cbnZhciBfU2xpZGluZ0Nhcm91c2VsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1NsaWRpbmdDYXJvdXNlbCk7XG5cbnZhciBfU2xpZGluZ1ZpZXdwb3J0ID0gcmVxdWlyZSgnLi4vLi4vYmFzaWMtc2xpZGluZy12aWV3cG9ydC9zcmMvU2xpZGluZ1ZpZXdwb3J0Jyk7XG5cbnZhciBfU2xpZGluZ1ZpZXdwb3J0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1NsaWRpbmdWaWV3cG9ydCk7XG5cbnZhciBfU3ByZWFkSXRlbXMgPSByZXF1aXJlKCcuLi8uLi9iYXNpYy1zcHJlYWQtaXRlbXMvc3JjL1NwcmVhZEl0ZW1zJyk7XG5cbnZhciBfU3ByZWFkSXRlbXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU3ByZWFkSXRlbXMpO1xuXG52YXIgX1RhYnMgPSByZXF1aXJlKCcuLi8uLi9iYXNpYy10YWJzL3NyYy9UYWJzJyk7XG5cbnZhciBfVGFiczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UYWJzKTtcblxudmFyIF9UYWJTdHJpcCA9IHJlcXVpcmUoJy4uLy4uL2Jhc2ljLXRhYi1zdHJpcC9zcmMvVGFiU3RyaXAnKTtcblxudmFyIF9UYWJTdHJpcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UYWJTdHJpcCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJaUlzSW1acGJHVWlPaUpoYkd3dWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXMTE5IiwiaW1wb3J0IEVsZW1lbnRCYXNlIGZyb20gJy4uLy4uL2Jhc2ljLWVsZW1lbnQtYmFzZS9zcmMvRWxlbWVudEJhc2UnO1xuXG5cbi8qXG4gKiBBIHNldCBvZiBldmVudHMgd2hpY2gsIGlmIGZpcmVkIGJ5IHRoZSBpbm5lciBzdGFuZGFyZCBlbGVtZW50LCBzaG91bGQgYmVcbiAqIHJlLXJhaXNlZCBieSB0aGUgY3VzdG9tIGVsZW1lbnQuIChXZSBvbmx5IG5lZWQgdG8gZG8gdGhhdCB1bmRlciBuYXRpdmVcbiAqIFNoYWRvdyBET00sIG5vdCB0aGUgcG9seWZpbGwuKVxuICpcbiAqIFRoZXNlIGFyZSBldmVudHMgd2hpY2ggYXJlIHNwZWMnZWQgdG8gTk9UIGdldCByZXRhcmdldHRlZCBhY3Jvc3MgYSBTaGFkb3cgRE9NXG4gKiBib3VuZGFyeSwgb3JnYW5pemVkIGJ5IHdoaWNoIGVsZW1lbnQocykgcmFpc2UgdGhlIGV2ZW50cy4gVG8gcHJvcGVybHlcbiAqIHNpbXVsYXRlIHRoZXNlLCB3ZSB3aWxsIG5lZWQgdG8gbGlzdGVuIGZvciB0aGUgcmVhbCBldmVudHMsIHRoZW4gcmUtcmFpc2UgYVxuICogc2ltdWxhdGlvbiBvZiB0aGUgb3JpZ2luYWwgZXZlbnQuIEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWVcbiAqIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9zaGFkb3ctZG9tLyNoLWV2ZW50cy10aGF0LWFyZS1ub3QtbGVha2VkLWludG8tYW5jZXN0b3ItdHJlZXMuXG4gKlxuICogSXQgYXBwZWFycyB0aGF0IHdlIGRvICpub3QqIG5lZWQgdG8gcmUtcmFpc2UgdGhlIG5vbi1idWJibGluZyBcImZvY3VzXCIgYW5kXG4gKiBcImJsdXJcIiBldmVudHMuIFRoZXNlIGFwcGVhciB0byBiZSBhdXRvbWF0aWNhbGx5IHJlLXJhaXNlZCBhcyBleHBlY3RlZCAtLSBidXRcbiAqIGl0J3Mgbm90IGNsZWFyIHdoeSB0aGF0IGhhcHBlbnMuXG4gKlxuICogVGhlIGxpc3QgYmVsb3cgaXMgcmVhc29uYWJseSBjb21wbGV0ZS4gSXQgb21pdHMgZWxlbWVudHMgdGhhdCBjYW5ub3QgYmVcbiAqIHdyYXBwZWQgKHNlZSBjbGFzcyBub3RlcyBhYm92ZSkuIEFsc28sIHdlIGhhdmVuJ3QgYWN0dWFsbHkgdHJpZWQgd3JhcHBpbmdcbiAqIGV2ZXJ5IGVsZW1lbnQgaW4gdGhpcyBsaXN0OyBzb21lIG9mIHRoZSBtb3JlIG9ic2N1cmUgb25lcyBtaWdodCBub3QgYWN0dWFsbHlcbiAqIHdvcmsgYXMgZXhwZWN0ZWQsIGJ1dCBpdCB3YXMgZWFzaWVyIHRvIGluY2x1ZGUgdGhlbSBmb3IgY29tcGxldGVuZXNzIHRoYW5cbiAqIHRvIGFjdHVhbGx5IHZlcmlmeSB3aGV0aGVyIG9yIG5vdCB0aGUgZWxlbWVudCBjYW4gYmUgd3JhcHBlZC5cbiAqL1xuY29uc3QgcmVyYWlzZUV2ZW50cyA9IHtcbiAgYWRkcmVzczogWydzY3JvbGwnXSxcbiAgYmxvY2txdW90ZTogWydzY3JvbGwnXSxcbiAgY2FwdGlvbjogWydzY3JvbGwnXSxcbiAgY2VudGVyOiBbJ3Njcm9sbCddLFxuICBkZDogWydzY3JvbGwnXSxcbiAgZGlyOiBbJ3Njcm9sbCddLFxuICBkaXY6IFsnc2Nyb2xsJ10sXG4gIGRsOiBbJ3Njcm9sbCddLFxuICBkdDogWydzY3JvbGwnXSxcbiAgZmllbGRzZXQ6IFsnc2Nyb2xsJ10sXG4gIGZvcm06IFsncmVzZXQnLCAnc2Nyb2xsJ10sXG4gIGZyYW1lOiBbJ2xvYWQnXSxcbiAgaDE6IFsnc2Nyb2xsJ10sXG4gIGgyOiBbJ3Njcm9sbCddLFxuICBoMzogWydzY3JvbGwnXSxcbiAgaDQ6IFsnc2Nyb2xsJ10sXG4gIGg1OiBbJ3Njcm9sbCddLFxuICBoNjogWydzY3JvbGwnXSxcbiAgaWZyYW1lOiBbJ2xvYWQnXSxcbiAgaW1nOiBbJ2Fib3J0JywgJ2Vycm9yJywgJ2xvYWQnXSxcbiAgaW5wdXQ6IFsnYWJvcnQnLCAnY2hhbmdlJywgJ2Vycm9yJywgJ3NlbGVjdCcsICdsb2FkJ10sXG4gIGtleWdlbjogWydyZXNldCcsICdzZWxlY3QnXSxcbiAgbGk6IFsnc2Nyb2xsJ10sXG4gIGxpbms6IFsnbG9hZCddLFxuICBtZW51OiBbJ3Njcm9sbCddLFxuICBvYmplY3Q6IFsnZXJyb3InLCAnc2Nyb2xsJ10sXG4gIG9sOiBbJ3Njcm9sbCddLFxuICBwOiBbJ3Njcm9sbCddLFxuICBzY3JpcHQ6IFsnZXJyb3InLCAnbG9hZCddLFxuICBzZWxlY3Q6IFsnY2hhbmdlJywgJ3Njcm9sbCddLFxuICB0Ym9keTogWydzY3JvbGwnXSxcbiAgdGZvb3Q6IFsnc2Nyb2xsJ10sXG4gIHRoZWFkOiBbJ3Njcm9sbCddLFxuICB0ZXh0YXJlYTogWydjaGFuZ2UnLCAnc2VsZWN0JywgJ3Njcm9sbCddXG59O1xuXG5cbi8vIEtlZXAgdHJhY2sgb2Ygd2hpY2ggcmUtcmFpc2VkIGV2ZW50cyBzaG91bGQgYnViYmxlLlxuY29uc3QgZXZlbnRCdWJibGVzID0ge1xuICBhYm9ydDogdHJ1ZSxcbiAgY2hhbmdlOiB0cnVlLFxuICByZXNldDogdHJ1ZVxufTtcblxuXG4vLyBFbGVtZW50cyB3aGljaCBhcmUgZGlzcGxheTogYmxvY2sgYnkgZGVmYXVsdC5cbi8vIFNvdXJjZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRNTC9CbG9jay1sZXZlbF9lbGVtZW50c1xuY29uc3QgYmxvY2tFbGVtZW50cyA9IFtcbiAgJ2FkZHJlc3MnLFxuICAnYXJ0aWNsZScsXG4gICdhc2lkZScsXG4gICdibG9ja3F1b3RlJyxcbiAgJ2NhbnZhcycsXG4gICdkZCcsXG4gICdkaXYnLFxuICAnZGwnLFxuICAnZmllbGRzZXQnLFxuICAnZmlnY2FwdGlvbicsXG4gICdmaWd1cmUnLFxuICAnZm9vdGVyJyxcbiAgJ2Zvcm0nLFxuICAnaDEnLFxuICAnaDInLFxuICAnaDMnLFxuICAnaDQnLFxuICAnaDUnLFxuICAnaDYnLFxuICAnaGVhZGVyJyxcbiAgJ2hncm91cCcsXG4gICdocicsXG4gICdsaScsXG4gICdtYWluJyxcbiAgJ25hdicsXG4gICdub3NjcmlwdCcsXG4gICdvbCcsXG4gICdvdXRwdXQnLFxuICAncCcsXG4gICdwcmUnLFxuICAnc2VjdGlvbicsXG4gICd0YWJsZScsXG4gICd0Zm9vdCcsXG4gICd1bCcsXG4gICd2aWRlbydcbl07XG5cblxuLyoqXG4gKiBXcmFwcyBhIHN0YW5kYXJkIEhUTUwgZWxlbWVudCBzbyB0aGF0IHRoZSBzdGFuZGFyZCBiZWhhdmlvciBjYW4gdGhlbiBiZVxuICogZXh0ZW5kZWQuXG4gKlxuICogW0xpdmUgZGVtb10oaHR0cDovL2Jhc2ljd2ViY29tcG9uZW50cy5vcmcvYmFzaWMtd2ViLWNvbXBvbmVudHMvcGFja2FnZXMvYmFzaWMtd3JhcHBlZC1zdGFuZGFyZC1lbGVtZW50LylcbiAqXG4gKiBTZWUgYWxzbyBbYmFzaWMtYXV0b3NpemUtdGV4dGFyZWFdKC4uL2Jhc2ljLWF1dG9zaXplLXRleHRhcmVhKSBhbmRcbiAqIFtiYXNpYy1jdXJyZW50LWFuY2hvcl0oLi4vYmFzaWMtY3VycmVudC1hbmNob3IpLiBUaGUgZm9ybWVyIHVzZXNcbiAqIFdyYXBwZWRTdGFuZGFyZEVsZW1lbnQgdG8gd3JhcCBhIHN0YW5kYXJkIGA8dGV4dGFyZWE+YCBhbmQgYDxhPmAsXG4gKiByZXNwZWN0aXZlbHkuXG4gKlxuICogVGhlIEN1c3RvbSBFbGVtZW50cyBzcGVjIGRvZXMgbm90IGN1cnJlbnRseSAoYXMgb2YgTWFyY2ggMjAxNikgYWxsb3cgeW91IHRvXG4gKiBleHRlbmQgdGhlIGJlaGF2aW9yIG9mIGEgc3RhbmRhcmQgSFRNTCBlbGVtZW50IGxpa2UgYDxhPmAgb3IgYDxidXR0b24+YC5cbiAqIEFzIGEgcGFydGlhbCB3b3JrYXJvdW5kLCB0aGUgV3JhcHBlZFN0YW5kYXJkRWxlbWVudCBjbGFzcyBjYW4gY3JlYXRlIGEgY2xhc3NcbiAqIGZvciB5b3UgdGhhdCB3cmFwcyBhbiBpbnN0YW5jZSBvZiBhIHN0YW5kYXJkIEhUTUwgZWxlbWVudC4gRm9yIGV4YW1wbGUsIHRoZVxuICogY29kZSBiZWxvdyBjcmVhdGVzIGEgY2xhc3MgdGhhdCB3aWxsIHdyYXAgYW4gaW5zdGFuY2Ugb2YgYSBzdGFuZGFyZCBgPGE+YFxuICogZWxlbWVudDpcbiAqXG4gKiAgICAgY2xhc3MgV3JhcHBlZEEgZXh0ZW5kcyBXcmFwcGVkU3RhbmRhcmRFbGVtZW50LndyYXAoJ2EnKSB7XG4gKiAgICAgICBjdXN0b21NZXRob2QoKSB7IC4uLiB9XG4gKiAgICAgfVxuICogICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnd3JhcHBlZC1hJywgV3JhcHBlZEEpO1xuICpcbiAqIEFuIGluc3RhbmNlIG9mIHRoZSByZXN1bHRpbmcgY2xhc3Mgd2lsbCBsb29rIHRvIHRoZSB1c2VyIGxpa2UgYW4gaW5zdGFuY2Ugb2ZcbiAqIHRoZSBzdGFuZGFyZCBlbGVtZW50IGNsYXNzIGl0IHdyYXBzLiBUaGUgcmVzdWx0aW5nIGNsYXNzIHdpbGwgKm5vdCogYmUgYW5cbiAqIGBpbnN0YW5jZW9mYCB0aGUgc3RhbmRhcmQgY2xhc3MgKGhlcmUsIEhUTUxBbmNob3JFbGVtZW50KS4gQW5vdGhlciBsaW1pdGF0aW9uXG4gKiBpcyB0aGF0IHRoZSByZXN1bHRpbmcgYDx3cmFwcGVkLWE+YCB3aWxsIG5vdCBhdXRvbWF0aWNhbGx5IHBpY2sgdXAgQ1NTIHN0eWxlc1xuICogZm9yIHN0YW5kYXJkIGA8YT5gIGVsZW1lbnRzLiBIb3dldmVyLCB0aGUgcmVzdWx0aW5nIGNsYXNzICpjYW4qIGJlIGV4dGVuZGVkLlxuICogRS5nLiwgaW5zdGFuY2VzIG9mIHRoZSBhYm92ZSBjbGFzcyBoYXZlIGEgYGN1c3RvbU1ldGhvZCgpYCBhdmFpbGFibGUgdG8gdGhlbS5cbiAqXG4gKiBBbnkgcHJvcGVydGllcyBkZWZpbmVkIGJ5IHRoZSBvcmlnaW5hbCBzdGFuZGFyZCBlbGVtZW50IHdpbGwgYmUgZXhwb3NlZCBvblxuICogdGhlIHJlc3VsdGluZyB3cmFwcGVyIGNsYXNzLCBhbmQgY2FsbHMgdG8gZ2V0IG9yIHNldCB0aG9zZSBwcm9wZXJ0aWVzIHdpbGwgYmVcbiAqIGRlbGVnYXRlZCB0byB0aGUgd3JhcHBlZCBlbGVtZW50IGluc3RhbmNlLiBDb250aW51aW5nIHRoZSBhYm92ZSBleGFtcGxlOlxuICpcbiAqICAgICBsZXQgd3JhcHBlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3dyYXBwZWQtYScpO1xuICogICAgIHdyYXBwZWQuaHJlZiA9ICdodHRwOi8vZXhhbXBsZS5jb20vJztcbiAqICAgICB3cmFwcGVkLnRleHRDb250ZW50ID0gJ0NsaWNrIGhlcmUnO1xuICpcbiAqIEhlcmUsIHRoZSBjcmVhdGVkIGN1c3RvbSBgPHdyYXBwZWQtYT5gIGVsZW1lbnQgd2lsbCBjb250YWluIGluc2lkZSBpdHNcbiAqIHNoYWRvdyB0cmVlIGFuIGluc3RhbmNlIG9mIGEgc3RhbmRhcmQgYDxhPmAgZWxlbWVudC4gVGhlIGNhbGwgdG8gc2V0IHRoZVxuICogd3JhcHBlcidzIGBocmVmYCBwcm9wZXJ0eSB3aWxsIHVsdGltYXRlbHkgc2V0IHRoZSBgaHJlZmAgb24gdGhlIGlubmVyIGxpbmsuXG4gKiBNb3Jlb3ZlciwgdGhlIHRleHQgY29udGVudCBvZiB0aGUgYDx3cmFwcGVkLWE+YCBlbGVtZW50IHdpbGwgYXBwZWFyIGluc2lkZVxuICogdGhlIGlubmVyIGxpbmsuIFRoZSByZXN1bHQgb2YgYWxsIHRoaXMgaXMgdGhhdCB0aGUgdXNlciB3aWxsIHNlZSB3aGF0ICpsb29rcypcbiAqIGxpa2UgYSBub3JtYWwgbGluaywganVzdCBhcyBpZiB5b3UgaGFkIHdyaXR0ZW5cbiAqIGA8YSBocmVmPVwiaHR0cDovL2V4YW1wbGUuY29tL1wiPkNsaWNrIGhlcmU8L2E+YC4gSG93ZXZlciwgdGhlIGFjdHVhbCBlbGVtZW50XG4gKiB3aWxsIGJlIGFuIGluc3RhbmNlIG9mIHlvdXIgY3VzdG9tIGNsYXNzLCB3aXRoIHdoYXRldmVyIGJlaGF2aW9yIHlvdSd2ZVxuICogZGVmaW5lZCBmb3IgaXQuXG4gKlxuICogV3JhcHBlZCBlbGVtZW50cyBzaG91bGQgcmFpc2UgdGhlIHNhbWUgZXZlbnRzIGFzIHRoZSBvcmlnaW5hbCBzdGFuZGFyZFxuICogZWxlbWVudHMuIEUuZy4sIGlmIHlvdSB3cmFwIGFuIGA8aW1nPmAgZWxlbWVudCwgdGhlIHdyYXBwZWQgcmVzdWx0IHdpbGwgcmFpc2VcbiAqIHRoZSBzdGFuZGFyZCBgbG9hZGAgZXZlbnQgYXMgZXhwZWN0ZWQuXG4gKlxuICogU29tZSBlbGVtZW50cywgc3VjaCBhcyBgPGJvZHk+YCwgYDxodG1sPmAsIGFuZCBgPHN0eWxlPmAgY2Fubm90IGJlIHdyYXBwZWRcbiAqIGFuZCBzdGlsbCBhY2hpZXZlIHRoZWlyIHN0YW5kYXJkIGJlaGF2aW9yLlxuICpcbiAqIEBleHRlbmRzIEVsZW1lbnRCYXNlXG4gKi9cbmNsYXNzIFdyYXBwZWRTdGFuZGFyZEVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50QmFzZSB7XG5cbiAgLyoqXG4gICAqIEEgZGVzY3JpcHRpb24gZm9yIHRoZSB1c2VyIG9mIHRoZSBlbGVtZW50J3MgcHVycG9zZSBvbiB0aGUgcGFnZS4gU2V0dGluZ1xuICAgKiB0aGlzIGFwcGxpZXMgdGhlIGxhYmVsIHRvIHRoZSBpbm5lciBlbGVtZW50LCBlbnN1cmluZyB0aGF0IHNjcmVlbiByZWFkZXJzXG4gICAqIGFuZCBvdGhlciBhc3Npc3RpdmUgdGVjaG5vbG9naWVzIHdpbGwgcHJvdmlkZSBhIG1lYW5pbmdmdWwgZGVzY3JpcHRpb24gdG9cbiAgICogdGhlIHVzZXIuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgYXJpYUxhYmVsKCkge1xuICAgIHJldHVybiB0aGlzLmlubmVyLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpO1xuICB9XG4gIHNldCBhcmlhTGFiZWwobGFiZWwpIHtcbiAgICAvLyBQcm9wYWdhdGUgdGhlIEFSSUEgbGFiZWwgdG8gdGhlIGlubmVyIHRleHRhcmVhLlxuICAgIHRoaXMuaW5uZXIuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgbGFiZWwpO1xuICB9XG5cblxuICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuXG4gICAgLy8gTGlzdGVuIGZvciBhbnkgZXZlbnRzIHJhaXNlZCBieSB0aGUgaW5uZXIgZWxlbWVudCB3aGljaCB3aWxsIG5vdFxuICAgIC8vIGF1dG9tYXRpY2FsbHkgYmUgcmV0YXJnZXR0ZWQgYWNyb3NzIHRoZSBTaGFkb3cgRE9NIGJvdW5kYXJ5LCBhbmQgcmUtcmFpc2VcbiAgICAvLyB0aG9zZSBldmVudHMgd2hlbiB0aGV5IGhhcHBlbi5cbiAgICAvL1xuICAgIC8vIE5vdGU6IEl0J3MgdW5jbGVhciB3aHkgd2UgbmVlZCB0byBkbyB0aGlzIGluIHRoZSBTaGFkb3cgRE9NIHBvbHlmaWxsLlxuICAgIC8vIEluIHRoZW9yeSwgZXZlbnRzIGluIHRoZSBsaWdodCBET00gc2hvdWxkIGJ1YmJsZSBhcyBub3JtYWwuIEJ1dCB0aGlzXG4gICAgLy8gY29kZSBhcHBlYXJzIHRvIGJlIHJlcXVpcmVkIGluIHRoZSBwb2x5ZmlsbCBjYXNlIGFzIHdlbGwuXG4gICAgbGV0IGV2ZW50TmFtZXMgPSByZXJhaXNlRXZlbnRzW3RoaXMuZXh0ZW5kc10gfHwgW107XG4gICAgZXZlbnROYW1lcy5mb3JFYWNoKGV2ZW50TmFtZSA9PiB7XG4gICAgICB0aGlzLmlubmVyLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCByZWFsRXZlbnQgPT4ge1xuICAgICAgICBsZXQgZXZlbnQgPSBuZXcgRXZlbnQoZXZlbnROYW1lLCB7XG4gICAgICAgICAgYnViYmxlczogZXZlbnRCdWJibGVzW2V2ZW50TmFtZV0gfHwgZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhlIGlubmVyIHN0YW5kYXJkIEhUTUwgZWxlbWVudC5cbiAgICpcbiAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgKi9cbiAgZ2V0IGlubmVyKCkge1xuICAgIHJldHVybiB0aGlzLiQuaW5uZXI7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIGNvcGllZCBpbnRvIHRoZSBzaGFkb3cgdHJlZSBvZiBuZXcgaW5zdGFuY2VzIG9mIHRoaXMgZWxlbWVudC5cbiAgICpcbiAgICogVGhlIGRlZmF1bHQgdmFsdWUgb2YgdGhpcyBwcm9wZXJ0eSBpcyBhIHRlbXBsYXRlIHRoYXQgaW5jbHVkZXMgYW4gaW5zdGFuY2VcbiAgICogdGhlIHN0YW5kYXJkIGVsZW1lbnQgYmVpbmcgd3JhcHBlZCwgd2l0aCBhIGA8c2xvdD5gIGVsZW1lbnQgaW5zaWRlIHRoYXRcbiAgICogdG8gcGljayB1cCB0aGUgZWxlbWVudCdzIGxpZ2h0IERPTSBjb250ZW50LiBGb3IgZXhhbXBsZSwgaWYgeW91IHdyYXAgYW5cbiAgICogYDxhPmAgZWxlbWVudCwgdGhlbiB0aGUgZGVmYXVsdCB0ZW1wbGF0ZSB3aWxsIGxvb2sgbGlrZTpcbiAgICpcbiAgICogICAgIDx0ZW1wbGF0ZT5cbiAgICogICAgICAgPHN0eWxlPlxuICAgKiAgICAgICA6aG9zdCB7XG4gICAqICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgKiAgICAgICB9XG4gICAqICAgICAgIDwvc3R5bGU+XG4gICAqICAgICAgIDxhIGlkPVwiaW5uZXJcIj5cbiAgICogICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAqICAgICAgIDwvYT5cbiAgICogICAgIDwvdGVtcGxhdGU+XG4gICAqXG4gICAqIFRoZSBgZGlzcGxheWAgc3R5bGluZyBhcHBsaWVkIHRvIHRoZSBob3N0IHdpbGwgYmUgYGJsb2NrYCBmb3IgZWxlbWVudHMgdGhhdFxuICAgKiBhcmUgYmxvY2sgZWxlbWVudHMgYnkgZGVmYXVsdCwgYW5kIGBpbmxpbmUtYmxvY2tgIChub3QgYGlubGluZWApIGZvciBvdGhlclxuICAgKiBlbGVtZW50cy5cbiAgICpcbiAgICogSWYgeW91J2QgbGlrZSB0aGUgdGVtcGxhdGUgdG8gaW5jbHVkZSBvdGhlciBlbGVtZW50cywgdGhlbiBvdmVycmlkZSB0aGlzXG4gICAqIHByb3BlcnR5IGFuZCByZXR1cm4gYSB0ZW1wbGF0ZSBvZiB5b3VyIG93bi4gVGhlIHRlbXBsYXRlIHNob3VsZCBpbmNsdWRlIGFuXG4gICAqIGluc3RhbmNlIG9mIHRoZSBzdGFuZGFyZCBIVE1MIGVsZW1lbnQgeW91IGFyZSB3cmFwcGluZywgYW5kIHRoZSBJRCBvZiB0aGF0XG4gICAqIGVsZW1lbnQgc2hvdWxkIGJlIFwiaW5uZXJcIi5cbiAgICpcbiAgICogQHR5cGUgeyhzdHJpbmd8SFRNTFRlbXBsYXRlRWxlbWVudCl9XG4gICAqL1xuICBnZXQgdGVtcGxhdGUoKSB7XG4gICAgbGV0IGRpc3BsYXkgPSBibG9ja0VsZW1lbnRzLmluZGV4T2YodGhpcy5leHRlbmRzKSA+PSAwID9cbiAgICAgICdibG9jaycgOlxuICAgICAgJ2lubGluZS1ibG9jayc7XG4gICAgLy8gVE9ETzogVXNlIHNsb3QgaW5zdGVhZCBvZiBjb250ZW50LlxuICAgIHJldHVybiBgPHN0eWxlPjpob3N0IHsgZGlzcGxheTogJHtkaXNwbGF5fX08L3N0eWxlPjwke3RoaXMuZXh0ZW5kc30gaWQ9XCJpbm5lclwiPjxjb250ZW50PjwvY29udGVudD48LyR7dGhpcy5leHRlbmRzfWA7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGNsYXNzIHRoYXQgd3JhcHMgYSBzdGFuZGFyZCBIVE1MIGVsZW1lbnQuXG4gICAqXG4gICAqIE5vdGUgdGhhdCB0aGUgcmVzdWx0aW5nIGNsYXNzIGlzIGEgc3ViY2xhc3Mgb2YgV3JhcHBlZFN0YW5kYXJkRWxlbWVudCwgbm90XG4gICAqIHRoZSBzdGFuZGFyZCBjbGFzcyBiZWluZyB3cmFwcGVkLiBFLmcuLCBpZiB5b3UgY2FsbFxuICAgKiBgV3JhcHBlZFN0YW5kYXJkRWxlbWVudC53cmFwKCdhJylgLCB5b3Ugd2lsbCBnZXQgYSBjbGFzcyB3aG9zZSBzaGFkb3cgdHJlZVxuICAgKiB3aWxsIGluY2x1ZGUgYW4gYW5jaG9yIGVsZW1lbnQsIGJ1dCB0aGUgY2xhc3Mgd2lsbCAqbm90KiBpbmhlcml0IGZyb21cbiAgICogSFRNTEFuY2hvckVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBleHRlbmRzVGFnIC0gdGhlIHN0YW5kYXJkIEhUTUwgZWxlbWVudCB0YWcgdG8gZXh0ZW5kXG4gICAqL1xuICBzdGF0aWMgd3JhcChleHRlbmRzVGFnKSB7XG5cbiAgICAvLyBDcmVhdGUgdGhlIG5ldyBjbGFzcy5cbiAgICBjbGFzcyBXcmFwcGVkIGV4dGVuZHMgV3JhcHBlZFN0YW5kYXJkRWxlbWVudCB7fVxuXG4gICAgLy8gSW5kaWNhdGUgd2hpY2ggdGFnIGl0IHdyYXBzLlxuICAgIFdyYXBwZWQucHJvdG90eXBlLmV4dGVuZHMgPSBleHRlbmRzVGFnO1xuXG4gICAgLy8gQ3JlYXRlIGdldHRlci9zZXR0ZXJzIHRoYXQgZGVsZWdhdGUgdG8gdGhlIHdyYXBwZWQgZWxlbWVudC5cbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZXh0ZW5kc1RhZyk7XG4gICAgbGV0IGV4dGVuZHNQcm90b3R5cGUgPSBlbGVtZW50LmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgICBsZXQgbmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhleHRlbmRzUHJvdG90eXBlKTtcbiAgICBuYW1lcy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICBsZXQgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZXh0ZW5kc1Byb3RvdHlwZSwgbmFtZSk7XG4gICAgICAgIGxldCBkZWxlZ2F0ZSA9IGNyZWF0ZVByb3BlcnR5RGVsZWdhdGUobmFtZSwgZGVzY3JpcHRvcik7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShXcmFwcGVkLnByb3RvdHlwZSwgbmFtZSwgZGVsZWdhdGUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIFdyYXBwZWQ7XG4gIH1cblxufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVByb3BlcnR5RGVsZWdhdGUobmFtZSwgZGVzY3JpcHRvcikge1xuICBsZXQgZGVsZWdhdGUgPSB7XG4gICAgY29uZmlndXJhYmxlOiBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSxcbiAgICBlbnVtZXJhYmxlOiBkZXNjcmlwdG9yLmVudW1lcmFibGUsXG4gIH07XG4gIGlmIChkZXNjcmlwdG9yLmdldCkge1xuICAgIGRlbGVnYXRlLmdldCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW5uZXJbbmFtZV07XG4gICAgfTtcbiAgfVxuICBpZiAoZGVzY3JpcHRvci5zZXQpIHtcbiAgICBkZWxlZ2F0ZS5zZXQgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgdGhpcy5pbm5lcltuYW1lXSA9IHZhbHVlO1xuICAgIH07XG4gIH1cbiAgaWYgKGRlc2NyaXB0b3Iud3JpdGFibGUpIHtcbiAgICBkZWxlZ2F0ZS53cml0YWJsZSA9IGRlc2NyaXB0b3Iud3JpdGFibGU7XG4gIH1cbiAgcmV0dXJuIGRlbGVnYXRlO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFdyYXBwZWRTdGFuZGFyZEVsZW1lbnQ7XG4iXX0=
