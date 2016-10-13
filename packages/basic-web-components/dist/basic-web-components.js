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

var _SelectionAnimation = require('../../basic-component-mixins/src/SelectionAnimation');

var _SelectionAnimation2 = _interopRequireDefault(_SelectionAnimation);

var _SelectionAriaActive = require('../../basic-component-mixins/src/SelectionAriaActive');

var _SelectionAriaActive2 = _interopRequireDefault(_SelectionAriaActive);

var _SingleSelection = require('../../basic-component-mixins/src/SingleSelection');

var _SingleSelection2 = _interopRequireDefault(_SingleSelection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var base = _ElementBase2.default.compose(_ContentAsItems2.default, _DistributedChildrenAsContent2.default, _FractionalSelection2.default, _SelectionAnimation2.default, _SelectionAriaActive2.default, _SingleSelection2.default);

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
 * @mixes SelectionAnimation
 * @mixes SelectionAriaActive
 * @mixes SingleSelection
 */

var AnimationStage = function (_base) {
  _inherits(AnimationStage, _base);

  function AnimationStage() {
    _classCallCheck(this, AnimationStage);

    return _possibleConstructorReturn(this, (AnimationStage.__proto__ || Object.getPrototypeOf(AnimationStage)).apply(this, arguments));
  }

  _createClass(AnimationStage, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      if (_get(AnimationStage.prototype.__proto__ || Object.getPrototypeOf(AnimationStage.prototype), 'connectedCallback', this)) {
        _get(AnimationStage.prototype.__proto__ || Object.getPrototypeOf(AnimationStage.prototype), 'connectedCallback', this).call(this);
      }
      this.selectionRequired = true;
    }
  }, {
    key: 'template',
    get: function get() {
      return '\n      <style>\n      :host {\n        overflow: hidden;\n        position: relative;\n      }\n\n      ::slotted(*) {\n        height: 100%;\n        object-fit: contain;\n        position: absolute;\n        width: 100%;\n        will-change: transform;\n      }\n      </style>\n      <slot></slot>\n    ';
    }
  }]);

  return AnimationStage;
}(base);

customElements.define('basic-animation-stage', AnimationStage);

},{"../../basic-component-mixins/src/ContentAsItems":10,"../../basic-component-mixins/src/DistributedChildrenAsContent":14,"../../basic-component-mixins/src/FractionalSelection":15,"../../basic-component-mixins/src/SelectionAnimation":22,"../../basic-component-mixins/src/SelectionAriaActive":23,"../../basic-component-mixins/src/SingleSelection":28,"../../basic-element-base/src/ElementBase":39}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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

var _Keyboard = require('../../basic-component-mixins/src/Keyboard');

var _Keyboard2 = _interopRequireDefault(_Keyboard);

var _KeyboardDirection = require('../../basic-component-mixins/src/KeyboardDirection');

var _KeyboardDirection2 = _interopRequireDefault(_KeyboardDirection);

var _SingleSelection = require('../../basic-component-mixins/src/SingleSelection');

var _SingleSelection2 = _interopRequireDefault(_SingleSelection);

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

var base = _ElementBase2.default.compose(_ContentFirstChildTarget2.default, _DirectionSelection2.default, _DistributedChildrenAsContent2.default, _Keyboard2.default, _KeyboardDirection2.default, _SingleSelection2.default, _TargetInCollective2.default, _TargetSelection2.default);

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
 * @mixes Keyboard
 * @mixes KeyboardDirection
 * @mixes SingleSelection
 * @mixes TargetInCollective
 * @mixes TargetSelection
 */

var ArrowSelection = function (_base) {
  _inherits(ArrowSelection, _base);

  function ArrowSelection() {
    _classCallCheck(this, ArrowSelection);

    var _this = _possibleConstructorReturn(this, (ArrowSelection.__proto__ || Object.getPrototypeOf(ArrowSelection)).call(this));

    _this.$.buttonLeft.addEventListener('click', function (event) {
      _this.selectPrevious();
      event.stopPropagation();
    });
    _this.$.buttonRight.addEventListener('click', function (event) {
      _this.selectNext();
      event.stopPropagation();
    });
    assumeButtonFocus(_this, _this.$.buttonLeft);
    assumeButtonFocus(_this, _this.$.buttonRight);
    return _this;
  }

  _createClass(ArrowSelection, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      if (_get(ArrowSelection.prototype.__proto__ || Object.getPrototypeOf(ArrowSelection.prototype), 'connectedCallback', this)) {
        _get(ArrowSelection.prototype.__proto__ || Object.getPrototypeOf(ArrowSelection.prototype), 'connectedCallback', this).call(this);
      }

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
      if (_get(ArrowSelection.prototype.__proto__ || Object.getPrototypeOf(ArrowSelection.prototype), 'selectedItemChanged', this)) {
        _get(ArrowSelection.prototype.__proto__ || Object.getPrototypeOf(ArrowSelection.prototype), 'selectedItemChanged', this).call(this);
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
      return _get(ArrowSelection.prototype.__proto__ || Object.getPrototypeOf(ArrowSelection.prototype), 'canSelectNext', this);
    },
    set: function set(canSelectNext) {
      if ('canSelectNext' in base.prototype) {
        _set(ArrowSelection.prototype.__proto__ || Object.getPrototypeOf(ArrowSelection.prototype), 'canSelectNext', canSelectNext, this);
      }
      if (this.$) {
        this.$.buttonRight.disabled = !canSelectNext;
      }
    }
  }, {
    key: 'canSelectPrevious',
    get: function get() {
      return _get(ArrowSelection.prototype.__proto__ || Object.getPrototypeOf(ArrowSelection.prototype), 'canSelectPrevious', this);
    },
    set: function set(canSelectPrevious) {
      if ('canSelectPrevious' in base.prototype) {
        _set(ArrowSelection.prototype.__proto__ || Object.getPrototypeOf(ArrowSelection.prototype), 'canSelectPrevious', canSelectPrevious, this);
      }
      if (this.$) {
        this.$.buttonLeft.disabled = !canSelectPrevious;
      }
    }
  }, {
    key: 'defaults',
    get: function get() {
      var defaults = _get(ArrowSelection.prototype.__proto__ || Object.getPrototypeOf(ArrowSelection.prototype), 'defaults', this) || {};
      defaults.navigationAxis = 'horizontal';
      return defaults;
    }
  }, {
    key: 'template',
    get: function get() {
      return '\n      <style>\n      :host {\n        display: -webkit-flex;\n        display: flex;\n      }\n\n      #container {\n        display: -webkit-flex;\n        display: flex;\n        -webkit-flex: 1;\n        flex: 1;\n      }\n\n      #container ::slotted(*) {\n        -webkit-flex: 1;\n        flex: 1;\n      }\n\n      .navigationButton {\n        background: transparent;\n        border: 1px solid transparent;\n        box-sizing: border-box;\n        color: rgba(0, 0, 0, 0.7);\n        fill: currentColor;\n        margin: 0;\n        opacity: 1;\n        outline: none; /* REVIEW: Accessibility should be provided by other elements. */\n        padding: 0;\n        transition: opacity 1s;\n        z-index: 1;\n      }\n\n      .navigationButton:hover:not(:disabled) {\n        background: rgba(0, 0, 0, 0.5);\n        color: rgba(0, 0, 0, 0.8);\n        cursor: pointer;\n      }\n      .navigationButton:active:not(:disabled) {\n        background: rgba(0, 0, 0, 0.7);\n        color: rgba(0, 0, 0, 0.9);\n      }\n      .navigationButton:disabled {\n        color: rgba(0, 0, 0, 0.2);\n      }\n\n      :host(:not(.showArrows)) .navigationButton {\n        opacity: 0;\n        visibility: hidden;\n      }\n\n      .navigationButton .icon {\n        height: 48px;\n        width: 48px;\n      }\n\n      /* Overlay variant */\n      :host(.overlay) {\n        position: relative;\n      }\n      :host(.overlay) .navigationButton {\n        bottom: 0;\n        color: rgba(255, 255, 255, 0.7);\n        position: absolute;\n        top: 0;\n      }\n      :host(.overlay) #buttonLeft {\n        left: 0;\n      }\n      :host(.overlay) #buttonRight {\n        right: 0;\n      }\n      :host(.overlay) .navigationButton:hover:not(:disabled) {\n        background: rgba(255, 255, 255, 0.2);\n        color: rgba(255, 255, 255, 0.8);\n      }\n      :host(.overlay) .navigationButton:active:not(:disabled) {\n        background: rgba(255, 255, 255, 0.4);\n        color: rgba(255, 255, 255, 0.9);\n      }\n      :host(.overlay) .navigationButton:disabled {\n        color: rgba(255, 255, 255, 0.3);\n      }\n      </style>\n\n      <!--\n      Accessibility note: since the navigation offered by the arrow buttons should\n      be redundant (that is, there should be other ways of navigating the list),\n      we mark the button as aria-hidden so that assistive devices ignore them.\n      -->\n      <button id="buttonLeft" class="navigationButton" disabled tabindex="-1" aria-hidden="true">\n        <svg class="icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">\n          <g id="chevron-left">\n            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>\n          </g>\n        </svg>\n      </button>\n      <div id="container" role="none">\n        <slot></slot>\n      </div>\n      <button id="buttonRight" class="navigationButton" disabled tabindex="-1" aria-hidden="true">\n        <svg class="icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">\n          <g id="chevron-right">\n            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>\n          </g>\n        </svg>\n      </button>\n    ';
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

},{"../../basic-component-mixins/src/ContentFirstChildTarget":11,"../../basic-component-mixins/src/DirectionSelection":12,"../../basic-component-mixins/src/DistributedChildrenAsContent":14,"../../basic-component-mixins/src/Keyboard":17,"../../basic-component-mixins/src/KeyboardDirection":18,"../../basic-component-mixins/src/SingleSelection":28,"../../basic-component-mixins/src/TargetInCollective":30,"../../basic-component-mixins/src/TargetSelection":31,"../../basic-component-mixins/src/createSymbol":34,"../../basic-element-base/src/ElementBase":39}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createSymbol = require('../../basic-component-mixins/src/createSymbol');

var _createSymbol2 = _interopRequireDefault(_createSymbol);

var _WrappedStandardElement = require('../../basic-wrapped-standard-element/src/WrappedStandardElement');

var _WrappedStandardElement2 = _interopRequireDefault(_WrappedStandardElement);

var _DistributedChildrenAsContent = require('../../basic-component-mixins/src/DistributedChildrenAsContent');

var _DistributedChildrenAsContent2 = _interopRequireDefault(_DistributedChildrenAsContent);

var _Generic = require('../../basic-component-mixins/src/Generic');

var _Generic2 = _interopRequireDefault(_Generic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Symbols for private data members on an element.
var lineHeightSymbol = (0, _createSymbol2.default)('lineHeight');
var minimumRowsSymbol = (0, _createSymbol2.default)('minimumRows');
var valueTracksContentSymbol = (0, _createSymbol2.default)('valueTracksContent');

var base = _WrappedStandardElement2.default.wrap('textarea').compose(_DistributedChildrenAsContent2.default, _Generic2.default);

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
 */

var AutosizeTextarea = function (_base) {
  _inherits(AutosizeTextarea, _base);

  function AutosizeTextarea() {
    _classCallCheck(this, AutosizeTextarea);

    var _this = _possibleConstructorReturn(this, (AutosizeTextarea.__proto__ || Object.getPrototypeOf(AutosizeTextarea)).call(this));

    _this.inner.addEventListener('input', function (event) {
      valueChanged(_this);
    });
    _this.inner.addEventListener('keypress', function (event) {
      keypress(_this, event);
    });

    // Set defaults.
    if (typeof _this.minimumRows === 'undefined') {
      _this.minimumRows = _this.defaults.minimumRows;
    }

    // A standard textarea has its value track its textContent by default.
    // That is, changes to textContent update the value. However, if an attempt
    // is made to change the value directly, this breaks the automatic tracking.
    // From that point on, changes to textContent do *not* update the value.
    _this[valueTracksContentSymbol] = true;
    return _this;
  }

  /**
   * Resize the element such that the textarea can exactly contain its content.
   * By default, this method is invoked whenever the text content changes.
   */


  _createClass(AutosizeTextarea, [{
    key: 'autoSize',
    value: function autoSize() {
      // If we had speculatively added an extra line because of an Enter keypress,
      // we can now hide the extra line.
      this.$.extraLine.style.display = 'none';

      // We resize by copying the textarea contents to the element itself; the
      // text will then appear (via <slot>) inside the invisible div. If
      // we've set things up correctly, this new content should take up the same
      // amount of room as the same text in the textarea. Updating the element's
      // content adjusts the element's size, which in turn will make the textarea
      // the correct height.
      this.$.textCopy.textContent = this.value;
    }

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

  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      if (_get(AutosizeTextarea.prototype.__proto__ || Object.getPrototypeOf(AutosizeTextarea.prototype), 'connectedCallback', this)) {
        _get(AutosizeTextarea.prototype.__proto__ || Object.getPrototypeOf(AutosizeTextarea.prototype), 'connectedCallback', this).call(this);
      }
      initializeWhenRendered(this);
    }
  }, {
    key: 'contentChanged',
    value: function contentChanged() {
      if (_get(AutosizeTextarea.prototype.__proto__ || Object.getPrototypeOf(AutosizeTextarea.prototype), 'contentChanged', this)) {
        _get(AutosizeTextarea.prototype.__proto__ || Object.getPrototypeOf(AutosizeTextarea.prototype), 'contentChanged', this).call(this);
      }
      if (this[valueTracksContentSymbol]) {
        var text = getTextContent(this);
        this.inner.value = unescapeHtml(text);
        valueChanged(this);
      }
    }
  }, {
    key: 'defaults',
    get: function get() {
      var defaults = _get(AutosizeTextarea.prototype.__proto__ || Object.getPrototypeOf(AutosizeTextarea.prototype), 'defaults', this) || {};
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
}(base);

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

},{"../../basic-component-mixins/src/DistributedChildrenAsContent":14,"../../basic-component-mixins/src/Generic":16,"../../basic-component-mixins/src/createSymbol":34,"../../basic-wrapped-standard-element/src/WrappedStandardElement":53}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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

var _SelectionAnimation = require('../../basic-component-mixins/src/SelectionAnimation');

var _SelectionAnimation2 = _interopRequireDefault(_SelectionAnimation);

var _SingleSelection = require('../../basic-component-mixins/src/SingleSelection');

var _SingleSelection2 = _interopRequireDefault(_SingleSelection);

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

var base = _ElementBase2.default.compose(_ContentAsItems2.default, _DirectionSelection2.default, _DistributedChildrenAsContent2.default, _FractionalSelection2.default, _Keyboard2.default, _KeyboardDirection2.default, _SelectionAnimation2.default, _SelectionAriaActive2.default, _SingleSelection2.default, _SwipeDirection2.default, _TargetInCollective2.default, _TrackpadDirection2.default);

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
 * @mixes Keyboard
 * @mixes KeyboardDirection
 * @mixes SelectionAnimation
 * @mixes SelectionAriaActive
 * @mixes SingleSelection
 * @mixes SwipeDirection
 * @mixes TargetInCollective
 * @mixes TargetSelection
 * @mixes TrackpadDirection
 */

var Carousel = function (_base) {
  _inherits(Carousel, _base);

  function Carousel() {
    _classCallCheck(this, Carousel);

    return _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).apply(this, arguments));
  }

  _createClass(Carousel, [{
    key: 'defaults',
    get: function get() {
      var defaults = _get(Carousel.prototype.__proto__ || Object.getPrototypeOf(Carousel.prototype), 'defaults', this) || {};
      defaults.navigationAxis = 'horizontal';
      defaults.selectionAnimationEffect = 'slideWithGap';
      defaults.selectionRequired = true;
      return defaults;
    }
  }, {
    key: 'template',
    get: function get() {
      return '\n      <style>\n      :host {\n        display: -webkit-flex;\n        display: flex;\n        overflow: hidden;\n        position: relative;\n      }\n\n      #container ::slotted(*) {\n        height: 100%;\n        object-fit: contain;\n        position: absolute;\n        width: 100%;\n        will-change: transform;\n      }\n      </style>\n\n      <div id="container" role="none">\n        <slot></slot>\n      </div>\n    ';
    }
  }]);

  return Carousel;
}(base);

customElements.define('basic-carousel', Carousel);
exports.default = Carousel;

},{"../../basic-component-mixins/src/ContentAsItems":10,"../../basic-component-mixins/src/DirectionSelection":12,"../../basic-component-mixins/src/DistributedChildrenAsContent":14,"../../basic-component-mixins/src/FractionalSelection":15,"../../basic-component-mixins/src/Keyboard":17,"../../basic-component-mixins/src/KeyboardDirection":18,"../../basic-component-mixins/src/SelectionAnimation":22,"../../basic-component-mixins/src/SelectionAriaActive":23,"../../basic-component-mixins/src/SingleSelection":28,"../../basic-component-mixins/src/SwipeDirection":29,"../../basic-component-mixins/src/TargetInCollective":30,"../../basic-component-mixins/src/TrackpadDirection":33,"../../basic-element-base/src/ElementBase":39}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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

    var _this = _possibleConstructorReturn(this, (CollapsiblePanel.__proto__ || Object.getPrototypeOf(CollapsiblePanel)).call(this));

    _this.$.overflow.addEventListener('transitionend', function () {
      if (!_this.closed) {
        // Remove the hard-coded height we applied for the transition so that
        // the element will reflow correctly, e.g., on window resize.
        _this.$.overflow.style.height = '';
      }
      // Ensure the animation only plays once. For some reason, Safari will show
      // the animation twice without this line, even though the render function
      // explicitly removes this class when it sets the old height. Neither
      // Chrome nor Firefox seem to need this line.
      _this.classList.remove('showTransition');
    });
    return _this;
  }

  _createClass(CollapsiblePanel, [{
    key: 'render',
    value: function render(closing) {
      _get(CollapsiblePanel.prototype.__proto__ || Object.getPrototypeOf(CollapsiblePanel.prototype), 'render', this).call(this, closing);

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

},{"../../basic-component-mixins/src/OpenClose":21,"../../basic-element-base/src/ElementBase":39}],6:[function(require,module,exports){
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Memoized maps of attribute to property names and vice versa.
var attributeToPropertyNames = {};
var propertyNamesToAttributes = {};

// Symbols for private data members on an element.
var safeToSetAttributesSymbol = (0, _createSymbol2.default)('safeToSetAttributes');
var pendingAttributesSymbol = (0, _createSymbol2.default)('pendingAttributes');
var pendingClassesSymbol = (0, _createSymbol2.default)('pendingClasses');

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

        this[safeToSetAttributesSymbol] = true;

        // Set any pending attributes.
        if (this[pendingAttributesSymbol]) {
          for (var attribute in this[pendingAttributesSymbol]) {
            var value = this[pendingAttributesSymbol][attribute];
            reflectAttributeToElement(this, attribute, value);
          }
          this[pendingAttributesSymbol] = null;
        }

        // Set any pending classes.
        if (this[pendingClassesSymbol]) {
          for (var className in this[pendingClassesSymbol]) {
            var _value = this[pendingClassesSymbol][className];
            _reflectClass(this, className, _value);
          }
        }
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
        if (this[safeToSetAttributesSymbol]) {
          // Safe to set attributes immediately.
          reflectAttributeToElement(this, attribute, value);
        } else {
          // Defer setting attributes until the first time we're connected.
          if (!this[pendingAttributesSymbol]) {
            this[pendingAttributesSymbol] = {};
          }
          this[pendingAttributesSymbol][attribute] = value;
        }
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
       * @param {object} value - The value to set. If null, the class will be removed.
       */

    }, {
      key: 'reflectClass',
      value: function reflectClass(className, value) {
        if (this[safeToSetAttributesSymbol]) {
          // Safe to set class immediately.
          _reflectClass(this, className, value);
        } else {
          // Defer setting class until the first time we're connected.
          if (!this[pendingClassesSymbol]) {
            this[pendingClassesSymbol] = {};
          }
          this[pendingClassesSymbol][className] = value;
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

// Reflect the attribute to the given element.
// If the value is null, remove the attribute.
function reflectAttributeToElement(element, attributeName, value) {
  if (value === null || typeof value === 'undefined') {
    element.removeAttribute(attributeName);
  } else {
    element.setAttribute(attributeName, value);
  }
}

// Reflect the class to the given element.
// If the value is null, remove the class.
function _reflectClass(element, className, value) {
  if (value === null) {
    element.classList.remove(className);
  } else {
    (0, _toggleClass2.default)(element, className, value);
  }
}

},{"./createSymbol":34,"./toggleClass":37}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
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
      var collectiveChanged = void 0;
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

},{}],10:[function(require,module,exports){
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
        if (_get(ContentAsItems.prototype.__proto__ || Object.getPrototypeOf(ContentAsItems.prototype), 'applySelection', this)) {
          _get(ContentAsItems.prototype.__proto__ || Object.getPrototypeOf(ContentAsItems.prototype), 'applySelection', this).call(this, item, selected);
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
      key: 'itemAdded',
      value: function itemAdded(item) {
        if (_get(ContentAsItems.prototype.__proto__ || Object.getPrototypeOf(ContentAsItems.prototype), 'itemAdded', this)) {
          _get(ContentAsItems.prototype.__proto__ || Object.getPrototypeOf(ContentAsItems.prototype), 'itemAdded', this).call(this, item);
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

},{"./createSymbol":34,"./toggleClass":37}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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

      return _possibleConstructorReturn(this, (ContentFirstChildTarget.__proto__ || Object.getPrototypeOf(ContentFirstChildTarget)).apply(this, arguments));
    }

    _createClass(ContentFirstChildTarget, [{
      key: 'contentChanged',
      value: function contentChanged() {
        if (_get(ContentFirstChildTarget.prototype.__proto__ || Object.getPrototypeOf(ContentFirstChildTarget.prototype), 'contentChanged', this)) {
          _get(ContentFirstChildTarget.prototype.__proto__ || Object.getPrototypeOf(ContentFirstChildTarget.prototype), 'contentChanged', this).call(this);
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
        this[targetSymbol] = element;
        if ('target' in base.prototype) {
          _set(ContentFirstChildTarget.prototype.__proto__ || Object.getPrototypeOf(ContentFirstChildTarget.prototype), 'target', element, this);
        }
      }
    }]);

    return ContentFirstChildTarget;
  }(base);

  return ContentFirstChildTarget;
};

},{"./createSymbol":34}],12:[function(require,module,exports){
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
   * [SingleSelection](SingleSelection.md).
   */
  var DirectionSelection = function (_base) {
    _inherits(DirectionSelection, _base);

    function DirectionSelection() {
      _classCallCheck(this, DirectionSelection);

      return _possibleConstructorReturn(this, (DirectionSelection.__proto__ || Object.getPrototypeOf(DirectionSelection)).apply(this, arguments));
    }

    _createClass(DirectionSelection, [{
      key: 'goDown',
      value: function goDown() {
        if (_get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), 'goDown', this)) {
          _get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), 'goDown', this).call(this);
        }
        return this.selectNext();
      }
    }, {
      key: 'goEnd',
      value: function goEnd() {
        if (_get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), 'goEnd', this)) {
          _get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), 'goEnd', this).call(this);
        }
        return this.selectLast();
      }
    }, {
      key: 'goLeft',
      value: function goLeft() {
        if (_get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), 'goLeft', this)) {
          _get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), 'goLeft', this).call(this);
        }
        return this.selectPrevious();
      }
    }, {
      key: 'goRight',
      value: function goRight() {
        if (_get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), 'goRight', this)) {
          _get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), 'goRight', this).call(this);
        }
        return this.selectNext();
      }
    }, {
      key: 'goStart',
      value: function goStart() {
        if (_get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), 'goStart', this)) {
          _get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), 'goStart', this).call(this);
        }
        return this.selectFirst();
      }
    }, {
      key: 'goUp',
      value: function goUp() {
        if (_get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), 'goUp', this)) {
          _get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), 'goUp', this).call(this);
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

},{}],13:[function(require,module,exports){
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

},{}],14:[function(require,module,exports){
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

},{"./microtask":35}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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

      return _possibleConstructorReturn(this, (FractionalSelection.__proto__ || Object.getPrototypeOf(FractionalSelection)).apply(this, arguments));
    }

    _createClass(FractionalSelection, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        if (_get(FractionalSelection.prototype.__proto__ || Object.getPrototypeOf(FractionalSelection.prototype), 'connectedCallback', this)) {
          _get(FractionalSelection.prototype.__proto__ || Object.getPrototypeOf(FractionalSelection.prototype), 'connectedCallback', this).call(this);
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
          _set(FractionalSelection.prototype.__proto__ || Object.getPrototypeOf(FractionalSelection.prototype), 'selectedFraction', value, this);
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
    var damped = void 0;
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

},{"./createSymbol":34}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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

      // Set defaults.
      var _this = _possibleConstructorReturn(this, (Generic.__proto__ || Object.getPrototypeOf(Generic)).call(this));

      if (typeof _this.generic === 'undefined') {
        _this.generic = _this.defaults.generic;
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
        reflectAttribute(this);
      }
    }, {
      key: 'defaults',
      get: function get() {
        var defaults = _get(Generic.prototype.__proto__ || Object.getPrototypeOf(Generic.prototype), 'defaults', this) || {};
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

        reflectAttribute(this);
      }
    }]);

    return Generic;
  }(base);

  return Generic;
};

// We roll our own attribute setting so that an explicitly false value
// shows up as generic="false".


function reflectAttribute(element) {
  if (!element.parentNode) {
    return;
  }
  var generic = element.generic;
  if (generic === false) {
    // Explicitly use false string.
    element.setAttribute('generic', 'false');
  } else if (generic == null) {
    // Explicitly remove attribute.
    element.removeAttribute('generic');
  } else {
    // Use the empty string to get attribute to appear with no value.
    element.setAttribute('generic', '');
  }
}

},{"./createSymbol":34}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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
            this.setAttribute('aria-label', label);
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
      key: 'keydown',
      value: function keydown(event) {
        if (_get(Keyboard.prototype.__proto__ || Object.getPrototypeOf(Keyboard.prototype), 'keydown', this)) {
          return _get(Keyboard.prototype.__proto__ || Object.getPrototypeOf(Keyboard.prototype), 'keydown', this).call(this, event);
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
}

function stopListeningToKeydown(element) {
  element.removeEventListener('keydown', element[keydownListenerSymbol]);
  element[keydownListenerSymbol] = null;
  element.removeAttribute('tabindex');
}

},{"./createSymbol":34}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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
      var _this = _possibleConstructorReturn(this, (KeyboardDirection.__proto__ || Object.getPrototypeOf(KeyboardDirection)).call(this));

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
        if (_get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), 'goDown', this)) {
          return _get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), 'goDown', this).call(this);
        }
      }

      /**
       * Invoked when the user wants to go/navigate to the end (e.g., of a list).
       * The default implementation of this method does nothing.
       */

    }, {
      key: 'goEnd',
      value: function goEnd() {
        if (_get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), 'goEnd', this)) {
          return _get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), 'goEnd', this).call(this);
        }
      }

      /**
       * Invoked when the user wants to go/navigate left.
       * The default implementation of this method does nothing.
       */

    }, {
      key: 'goLeft',
      value: function goLeft() {
        if (_get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), 'goLeft', this)) {
          return _get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), 'goLeft', this).call(this);
        }
      }

      /**
       * Invoked when the user wants to go/navigate right.
       * The default implementation of this method does nothing.
       */

    }, {
      key: 'goRight',
      value: function goRight() {
        if (_get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), 'goRight', this)) {
          return _get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), 'goRight', this).call(this);
        }
      }

      /**
       * Invoked when the user wants to go/navigate to the start (e.g., of a
       * list). The default implementation of this method does nothing.
       */

    }, {
      key: 'goStart',
      value: function goStart() {
        if (_get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), 'goStart', this)) {
          return _get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), 'goStart', this).call(this);
        }
      }

      /**
       * Invoked when the user wants to go/navigate up.
       * The default implementation of this method does nothing.
       */

    }, {
      key: 'goUp',
      value: function goUp() {
        if (_get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), 'goUp', this)) {
          return _get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), 'goUp', this).call(this);
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
        var handled = void 0;

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
        return handled || _get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), 'keydown', this) && _get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), 'keydown', this).call(this, event);
      }
    }, {
      key: 'defaults',
      get: function get() {
        var defaults = _get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), 'defaults', this) || {};
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

},{"./createSymbol":34}],19:[function(require,module,exports){
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
      key: 'keydown',
      value: function keydown(event) {
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
        return handled || _get(KeyboardPagedSelection.prototype.__proto__ || Object.getPrototypeOf(KeyboardPagedSelection.prototype), 'keydown', this) && _get(KeyboardPagedSelection.prototype.__proto__ || Object.getPrototypeOf(KeyboardPagedSelection.prototype), 'keydown', this).call(this, event);
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

},{}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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

      return _possibleConstructorReturn(this, (KeyboardPrefixSelection.__proto__ || Object.getPrototypeOf(KeyboardPrefixSelection)).apply(this, arguments));
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
        return handled || _get(KeyboardPrefixSelection.prototype.__proto__ || Object.getPrototypeOf(KeyboardPrefixSelection.prototype), 'keydown', this) && _get(KeyboardPrefixSelection.prototype.__proto__ || Object.getPrototypeOf(KeyboardPrefixSelection.prototype), 'keydown', this).call(this, event);
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

},{"./createSymbol":34}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

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

      // Set defaults.
      var _this = _possibleConstructorReturn(this, (OpenClose.__proto__ || Object.getPrototypeOf(OpenClose)).call(this));

      if (typeof _this.closed === 'undefined') {
        _this.closed = _this.defaults.closed;
      }
      return _this;
    }

    /**
     * Close the component.
     *
     * This is equivalent to setting the `closed` property to true.
     */


    _createClass(OpenClose, [{
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
      key: 'connectedCallback',
      value: function connectedCallback() {
        if (_get(OpenClose.prototype.__proto__ || Object.getPrototypeOf(OpenClose.prototype), 'connectedCallback', this)) {
          _get(OpenClose.prototype.__proto__ || Object.getPrototypeOf(OpenClose.prototype), 'connectedCallback', this).call(this);
        }
        this.render(this.closed);
      }
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
        if (_get(OpenClose.prototype.__proto__ || Object.getPrototypeOf(OpenClose.prototype), 'render', this)) {
          _get(OpenClose.prototype.__proto__ || Object.getPrototypeOf(OpenClose.prototype), 'render', this).call(this);
        }
        if (!this.parentNode) {
          return;
        }
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
        var previousClosed = this[closedSymbol];
        this[closedSymbol] = value;
        if ('closed' in base.prototype) {
          _set(OpenClose.prototype.__proto__ || Object.getPrototypeOf(OpenClose.prototype), 'closed', value, this);
        }
        if (value !== previousClosed) {
          this.render(value);

          var event = new CustomEvent('closed-changed');
          this.dispatchEvent(event);
        }
      }
    }, {
      key: 'defaults',
      get: function get() {
        var defaults = _get(OpenClose.prototype.__proto__ || Object.getPrototypeOf(OpenClose.prototype), 'defaults', this) || {};
        defaults.closed = false;
        return defaults;
      }
    }]);

    return OpenClose;
  }(base);

  return OpenClose;
};

},{"./createSymbol":34,"./toggleClass":37}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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
var resetAnimationsOnNextRenderSymbol = (0, _createSymbol2.default)('resetAnimationsOnNextRender');

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
   * the [SingleSelection](SingleSelection.md) mixin.
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

      // Set defaults.
      var _this = _possibleConstructorReturn(this, (SelectionAnimation.__proto__ || Object.getPrototypeOf(SelectionAnimation)).call(this));

      if (typeof _this.selectionAnimationDuration === 'undefined') {
        _this.selectionAnimationDuration = _this.defaults.selectionAnimationDuration;
      }
      if (typeof _this.selectionAnimationEffect === 'undefined' && _this.selectionAnimationKeyframes == null) {
        _this.selectionAnimationEffect = _this.defaults.selectionAnimationEffect;
      }

      _this.showTransition = true;
      return _this;
    }

    _createClass(SelectionAnimation, [{
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
        if (_get(SelectionAnimation.prototype.__proto__ || Object.getPrototypeOf(SelectionAnimation.prototype), 'itemsChanged', this)) {
          _get(SelectionAnimation.prototype.__proto__ || Object.getPrototypeOf(SelectionAnimation.prototype), 'itemsChanged', this).call(this);
        }
        _resetAnimations(this);
        renderSelection(this);
      }
    }, {
      key: 'resetAnimations',
      value: function resetAnimations() {
        _resetAnimations(this);
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
      key: 'touchStart',
      value: function touchStart() {
        if (_get(SelectionAnimation.prototype.__proto__ || Object.getPrototypeOf(SelectionAnimation.prototype), 'touchStart', this)) {
          _get(SelectionAnimation.prototype.__proto__ || Object.getPrototypeOf(SelectionAnimation.prototype), 'touchStart', this).call(this);
        }
        // The animations currently applied to the items won't be valid for the
        // new drag operation.
        this[resetAnimationsOnNextRenderSymbol] = true;
      }
    }, {
      key: 'defaults',
      get: function get() {
        var defaults = _get(SelectionAnimation.prototype.__proto__ || Object.getPrototypeOf(SelectionAnimation.prototype), 'defaults', this) || {};
        defaults.selectionAnimationDuration = 250;
        defaults.selectionAnimationEffect = 'slide';
        return defaults;
      }
    }, {
      key: 'selectedFraction',
      get: function get() {
        return _get(SelectionAnimation.prototype.__proto__ || Object.getPrototypeOf(SelectionAnimation.prototype), 'selectedFraction', this) || 0;
      },
      set: function set(value) {
        if ('selectedFraction' in base.prototype) {
          _set(SelectionAnimation.prototype.__proto__ || Object.getPrototypeOf(SelectionAnimation.prototype), 'selectedFraction', value, this);
        }
        renderSelection(this, this.selectedIndex, value);
      }
    }, {
      key: 'selectedItem',
      get: function get() {
        return _get(SelectionAnimation.prototype.__proto__ || Object.getPrototypeOf(SelectionAnimation.prototype), 'selectedItem', this);
      },
      set: function set(item) {
        if ('selectedItem' in base.prototype) {
          _set(SelectionAnimation.prototype.__proto__ || Object.getPrototypeOf(SelectionAnimation.prototype), 'selectedItem', item, this);
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
        this[selectionAnimationDurationSymbol] = value;
        if ('selectionAnimationDuration' in base.prototype) {
          _set(SelectionAnimation.prototype.__proto__ || Object.getPrototypeOf(SelectionAnimation.prototype), 'selectionAnimationDuration', value, this);
        }
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
        this[selectionAnimationEffectSymbol] = value;
        if ('selectionAnimationEffect' in base.prototype) {
          _set(SelectionAnimation.prototype.__proto__ || Object.getPrototypeOf(SelectionAnimation.prototype), 'selectionAnimationEffect', value, this);
        }
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
        this[selectionAnimationKeyframesSymbol] = value;
        if ('selectionAnimationKeyframes' in base.prototype) {
          _set(SelectionAnimation.prototype.__proto__ || Object.getPrototypeOf(SelectionAnimation.prototype), 'selectionAnimationKeyframes', value, this);
        }
        _resetAnimations(this);
        renderSelection(this);
      }
    }, {
      key: 'selectionWraps',
      get: function get() {
        return _get(SelectionAnimation.prototype.__proto__ || Object.getPrototypeOf(SelectionAnimation.prototype), 'selectionWraps', this);
      },
      set: function set(value) {
        if ('selectionWraps' in base.prototype) {
          _set(SelectionAnimation.prototype.__proto__ || Object.getPrototypeOf(SelectionAnimation.prototype), 'selectionWraps', value, this);
        }
        _resetAnimations(this);
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
        return _get(SelectionAnimation.prototype.__proto__ || Object.getPrototypeOf(SelectionAnimation.prototype), 'showTransition', this) || this[showTransitionSymbol];
      },
      set: function set(value) {
        this[showTransitionSymbol] = value;
        if ('showTransition' in base.prototype) {
          _set(SelectionAnimation.prototype.__proto__ || Object.getPrototypeOf(SelectionAnimation.prototype), 'showTransition', value, this);
        }
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

  _resetAnimations(element);

  // Calculate the animation timings.
  var items = element.items;
  var keyframes = element.selectionAnimationKeyframes;
  element[playingAnimationSymbol] = true;
  var timings = mixin.helpers.effectTimingsForSelectionAnimation(element, fromSelection, toSelection);

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
  var lastAnimationDetails = void 0;
  timings.forEach(function (timing, index) {
    var item = items[index];
    if (timing) {
      showItem(item, true);
      var animation = item.animate(keyframes, timing);
      element[animationSymbol][index] = animation;
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
  var selectedIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : element.selectedIndex;
  var selectedFraction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : element.selectedFraction;

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
  if (element[resetAnimationsOnNextRenderSymbol]) {
    _resetAnimations(element);
    element[resetAnimationsOnNextRenderSymbol] = false;
  }
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

/*
 * We maintain an array containing an animation per item. This is used for two
 * reasons:
 *
 * * During a drag operation, we want to be able to reuse animations between
 *   drag updates.
 * * When a selection animation completes, we need to be able to leave the
 *   visibile items in a paused state. Later, we'll want to be able to clean up
 *   those animations.
 *
 * Note that this array is sparse: it will only hold up from 0–3 animations at
 * any given point.
 */
function _resetAnimations(element) {
  var animations = element[animationSymbol];
  if (animations) {
    // Cancel existing animations to remove the effects they're applying.
    animations.forEach(function (animation, index) {
      if (animation) {
        animation.cancel();
        animations[index] = null;
      }
    });
  }
  var itemCount = element.items ? element.items.length : 0;
  if (!animations || animations.length !== itemCount) {
    // Haven't animated before with this number of items; (re)create array.
    element[animationSymbol] = new Array(itemCount);
  }
}

/*
 * The last animation in our selection animation has completed. Clean up.
 */
function selectionAnimationFinished(element, details) {

  // When the last animation completes, show the next item in the direction
  // we're going. Waiting to that until this point is a bit of a hack to avoid
  // having a next item that's higher in the natural z-order obscure other items
  // during animation.
  var nextUpIndex = details.nextUpIndex;
  if (nextUpIndex != null) {
    if (element[animationSymbol][nextUpIndex]) {
      // Cancel existing selection animation so we can construct a new one.
      element[animationSymbol][nextUpIndex].cancel();
      element[animationSymbol][nextUpIndex] = null;
    }
    var animationFraction = details.forward ? 0 : 1;
    setAnimationFraction(element, nextUpIndex, animationFraction);
    showItem(element.items[nextUpIndex], true);
  }

  element[lastAnimationSymbol].onfinish = null;
  element[playingAnimationSymbol] = false;
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

},{"./FractionalSelection":15,"./createSymbol":34}],23:[function(require,module,exports){
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
   * yourself, or do so via the [SingleSelection](SingleSelection.md) mixin.
   */
  var SelectionAriaActive = function (_base) {
    _inherits(SelectionAriaActive, _base);

    function SelectionAriaActive() {
      _classCallCheck(this, SelectionAriaActive);

      return _possibleConstructorReturn(this, (SelectionAriaActive.__proto__ || Object.getPrototypeOf(SelectionAriaActive)).apply(this, arguments));
    }

    _createClass(SelectionAriaActive, [{
      key: 'applySelection',
      value: function applySelection(item, selected) {
        if (_get(SelectionAriaActive.prototype.__proto__ || Object.getPrototypeOf(SelectionAriaActive.prototype), 'applySelection', this)) {
          _get(SelectionAriaActive.prototype.__proto__ || Object.getPrototypeOf(SelectionAriaActive.prototype), 'applySelection', this).call(this, item, selected);
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
      key: 'itemAdded',
      value: function itemAdded(item) {
        if (_get(SelectionAriaActive.prototype.__proto__ || Object.getPrototypeOf(SelectionAriaActive.prototype), 'itemAdded', this)) {
          _get(SelectionAriaActive.prototype.__proto__ || Object.getPrototypeOf(SelectionAriaActive.prototype), 'itemAdded', this).call(this, item);
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

},{}],24:[function(require,module,exports){
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

},{}],25:[function(require,module,exports){
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

},{}],26:[function(require,module,exports){
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

},{}],27:[function(require,module,exports){
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

},{}],28:[function(require,module,exports){
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
        if (_get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'applySelection', this)) {
          _get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'applySelection', this).call(this, item, selected);
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
        if (_get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'itemAdded', this)) {
          _get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'itemAdded', this).call(this, item);
        }
        this.applySelection(item, item === this.selectedItem);
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
      key: 'defaults',
      get: function get() {
        var defaults = _get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'defaults', this) || {};
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
        var item = void 0;
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
          _set(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'selectedItem', item, this);
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
  var boundedIndex = void 0;
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

},{"./createSymbol":34,"./microtask":35}],29:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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

      var _this = _possibleConstructorReturn(this, (SwipeDirection.__proto__ || Object.getPrototypeOf(SwipeDirection)).call(this));

      _this.travelFraction = 0;

      // In all touch events, only handle single touches. We don't want to
      // inadvertently do work when the user's trying to pinch-zoom for example.
      // TODO: Even better approach than below would be to ignore touches after
      // the first if the user has already begun a swipe.
      // TODO: Touch events should probably be factored out into its own mixin.
      if (window.PointerEvent) {
        // Prefer listening to standard pointer events.
        _this.addEventListener('pointerdown', function (event) {
          if (isEventForPenOrPrimaryTouch(event)) {
            _this.touchStart(event.clientX, event.clientY);
          }
        });
        _this.addEventListener('pointermove', function (event) {
          if (isEventForPenOrPrimaryTouch(event)) {
            var handled = _this.touchMove(event.clientX, event.clientY);
            if (handled) {
              event.preventDefault();
            }
          }
        });
        _this.addEventListener('pointerup', function (event) {
          if (isEventForPenOrPrimaryTouch(event)) {
            _this.touchEnd(event.clientX, event.clientY);
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
            _this.touchStart(clientX, clientY);
          } else {
            _this[multiTouchSymbol] = true;
          }
        });
        _this.addEventListener('touchmove', function (event) {
          if (!_this[multiTouchSymbol] && event.touches.length === 1) {
            var clientX = event.changedTouches[0].clientX;
            var clientY = event.changedTouches[0].clientY;
            var handled = _this.touchMove(clientX, clientY);
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
              _this.touchEnd(clientX, clientY);
            }
            _this[multiTouchSymbol] = false;
          }
        });
      }
      return _this;
    }

    _createClass(SwipeDirection, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        if (_get(SwipeDirection.prototype.__proto__ || Object.getPrototypeOf(SwipeDirection.prototype), 'connectedCallback', this)) {
          _get(SwipeDirection.prototype.__proto__ || Object.getPrototypeOf(SwipeDirection.prototype), 'connectedCallback', this).call(this);
        }

        // For the component to receive PointerEvents in IE/Edge, we need to set
        // touch-action: none. Only make this change if touch-action is currently
        // the default value ("auto"), in case the developer knows better than we
        // do what they want in their particular context.
        if (getComputedStyle(this).touchAction === 'auto') {
          this.style.touchAction = 'none';
        }
      }

      /**
       * Invoked when the user wants to go/navigate left.
       * The default implementation of this method does nothing.
       */

    }, {
      key: 'goLeft',
      value: function goLeft() {
        if (_get(SwipeDirection.prototype.__proto__ || Object.getPrototypeOf(SwipeDirection.prototype), 'goLeft', this)) {
          return _get(SwipeDirection.prototype.__proto__ || Object.getPrototypeOf(SwipeDirection.prototype), 'goLeft', this).call(this);
        }
      }

      /**
       * Invoked when the user wants to go/navigate right.
       * The default implementation of this method does nothing.
       */

    }, {
      key: 'goRight',
      value: function goRight() {
        if (_get(SwipeDirection.prototype.__proto__ || Object.getPrototypeOf(SwipeDirection.prototype), 'goRight', this)) {
          return _get(SwipeDirection.prototype.__proto__ || Object.getPrototypeOf(SwipeDirection.prototype), 'goRight', this).call(this);
        }
      }

      // Default implementation.

    }, {
      key: 'touchEnd',


      /**
       * Invoked when the user has finished a touch operation.
       *
       * @param {number} clientX - The horizontal component of the first touch point
       * @param {number} clientY - The vertical component of the first touch point
       */
      value: function touchEnd(clientX, clientY) {
        if (_get(SwipeDirection.prototype.__proto__ || Object.getPrototypeOf(SwipeDirection.prototype), 'touchEnd', this)) {
          _get(SwipeDirection.prototype.__proto__ || Object.getPrototypeOf(SwipeDirection.prototype), 'touchEnd', this).call(this);
        }
        this.showTransition = true;
        if (this[deltaXSymbol] >= 20) {
          // Finished going right at high speed.
          this.goLeft();
        } else if (this[deltaXSymbol] <= -20) {
          // Finished going left at high speed.
          this.goRight();
        } else {
          // Finished at low speed.
          trackTo(this, clientX);
          var travelFraction = this.travelFraction;
          if (travelFraction >= 0.5) {
            this.goRight();
          } else if (travelFraction <= -0.5) {
            this.goLeft();
          }
        }
        this.travelFraction = 0;
        this[deltaXSymbol] = null;
        this[deltaYSymbol] = null;
      }

      /**
       * Invoked when the user has moved during a touch operation.
       *
       * @param {number} clientX - The horizontal component of the first touch point
       * @param {number} clientY - The vertical component of the first touch point
       */

    }, {
      key: 'touchMove',
      value: function touchMove(clientX, clientY) {
        if (_get(SwipeDirection.prototype.__proto__ || Object.getPrototypeOf(SwipeDirection.prototype), 'touchMove', this)) {
          _get(SwipeDirection.prototype.__proto__ || Object.getPrototypeOf(SwipeDirection.prototype), 'touchMove', this).call(this);
        }

        this[deltaXSymbol] = clientX - this[previousXSymbol];
        this[deltaYSymbol] = clientY - this[previousYSymbol];
        this[previousXSymbol] = clientX;
        this[previousYSymbol] = clientY;
        if (Math.abs(this[deltaXSymbol]) > Math.abs(this[deltaYSymbol])) {
          // Move was mostly horizontal.
          trackTo(this, clientX);
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

      /**
       * Invoked when the user has begun a touch operation.
       *
       * @param {number} clientX - The horizontal component of the first touch point
       * @param {number} clientY - The vertical component of the first touch point
       */

    }, {
      key: 'touchStart',
      value: function touchStart(clientX, clientY) {
        if (_get(SwipeDirection.prototype.__proto__ || Object.getPrototypeOf(SwipeDirection.prototype), 'touchStart', this)) {
          _get(SwipeDirection.prototype.__proto__ || Object.getPrototypeOf(SwipeDirection.prototype), 'touchStart', this).call(this);
        }
        this.showTransition = false;
        this[startXSymbol] = clientX;
        this[previousXSymbol] = clientX;
        this[previousYSymbol] = clientY;
        this[deltaXSymbol] = 0;
        this[deltaYSymbol] = 0;
      }

      /**
       * The distance the first touchpoint has traveled since the beginning of a
       * drag, expressed as a fraction of the element's width.
       *
       * @type number
       */

    }, {
      key: 'showTransition',
      get: function get() {
        return _get(SwipeDirection.prototype.__proto__ || Object.getPrototypeOf(SwipeDirection.prototype), 'showTransition', this);
      },
      set: function set(value) {
        if ('showTransition' in base.prototype) {
          _set(SwipeDirection.prototype.__proto__ || Object.getPrototypeOf(SwipeDirection.prototype), 'showTransition', value, this);
        }
      }
    }, {
      key: 'travelFraction',
      get: function get() {
        return this[travelFractionSymbol];
      },
      set: function set(value) {
        this[travelFractionSymbol] = value;
        if ('travelFraction' in base.prototype) {
          _set(SwipeDirection.prototype.__proto__ || Object.getPrototypeOf(SwipeDirection.prototype), 'travelFraction', value, this);
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

function trackTo(element, x) {
  var width = element.offsetWidth;
  var dragDistance = element[startXSymbol] - x;
  var fraction = width > 0 ? dragDistance / width : 0;
  element.travelFraction = fraction;
}

},{"./createSymbol":34}],30:[function(require,module,exports){
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

      var _this = _possibleConstructorReturn(this, (TargetInCollective.__proto__ || Object.getPrototypeOf(TargetInCollective)).call(this));

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
        return _get(TargetInCollective.prototype.__proto__ || Object.getPrototypeOf(TargetInCollective.prototype), 'target', this);
      },
      set: function set(element) {
        if ('target' in base.prototype) {
          _set(TargetInCollective.prototype.__proto__ || Object.getPrototypeOf(TargetInCollective.prototype), 'target', element, this);
        }
        this.collective.assimilate(element);
      }
    }]);

    return TargetInCollective;
  }(base);

  return TargetInCollective;
};

},{"./Collective":8}],31:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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

      return _possibleConstructorReturn(this, (TargetSelection.__proto__ || Object.getPrototypeOf(TargetSelection)).apply(this, arguments));
    }

    _createClass(TargetSelection, [{
      key: 'itemsChanged',


      /**
       * This method is invoked when the underlying contents change. It is also
       * invoked on component initialization – since the items have "changed" from
       * being nothing.
       */
      value: function itemsChanged() {
        if (_get(TargetSelection.prototype.__proto__ || Object.getPrototypeOf(TargetSelection.prototype), 'itemsChanged', this)) {
          _get(TargetSelection.prototype.__proto__ || Object.getPrototypeOf(TargetSelection.prototype), 'itemsChanged', this).call(this);
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
        if (_get(TargetSelection.prototype.__proto__ || Object.getPrototypeOf(TargetSelection.prototype), 'selectedItemChanged', this)) {
          _get(TargetSelection.prototype.__proto__ || Object.getPrototypeOf(TargetSelection.prototype), 'selectedItemChanged', this).call(this);
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
          _set(TargetSelection.prototype.__proto__ || Object.getPrototypeOf(TargetSelection.prototype), 'selectedFraction', fraction, this);
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
          _set(TargetSelection.prototype.__proto__ || Object.getPrototypeOf(TargetSelection.prototype), 'selectedItem', item, this);
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
          _set(TargetSelection.prototype.__proto__ || Object.getPrototypeOf(TargetSelection.prototype), 'selectionWraps', value, this);
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
        return _get(TargetSelection.prototype.__proto__ || Object.getPrototypeOf(TargetSelection.prototype), 'target', this);
      },
      set: function set(element) {
        var _this2 = this;

        if ('target' in base.prototype) {
          _set(TargetSelection.prototype.__proto__ || Object.getPrototypeOf(TargetSelection.prototype), 'target', element, this);
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

},{"./createSymbol":34}],32:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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
   * [SingleSelection](SingleSelection.md) mixins.
   */
  var TimerSelection = function (_base) {
    _inherits(TimerSelection, _base);

    function TimerSelection() {
      _classCallCheck(this, TimerSelection);

      // Set defaults.
      var _this = _possibleConstructorReturn(this, (TimerSelection.__proto__ || Object.getPrototypeOf(TimerSelection)).call(this));

      if (typeof _this.playing === 'undefined') {
        _this.playing = _this.defaults.playing;
      }
      if (typeof _this.selectionTimerDuration === 'undefined') {
        _this.selectionTimerDuration = _this.defaults.selectionTimerDuration;
      }
      return _this;
    }

    _createClass(TimerSelection, [{
      key: 'contentChanged',
      value: function contentChanged() {
        if (_get(TimerSelection.prototype.__proto__ || Object.getPrototypeOf(TimerSelection.prototype), 'contentChanged', this)) {
          _get(TimerSelection.prototype.__proto__ || Object.getPrototypeOf(TimerSelection.prototype), 'contentChanged', this).call(this);
        }
        restartTimer(this);
      }
    }, {
      key: 'play',


      /**
       * Begin automatic progression of the selection.
       */
      value: function play() {
        if (_get(TimerSelection.prototype.__proto__ || Object.getPrototypeOf(TimerSelection.prototype), 'play', this)) {
          _get(TimerSelection.prototype.__proto__ || Object.getPrototypeOf(TimerSelection.prototype), 'play', this).call(this);
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
        if (_get(TimerSelection.prototype.__proto__ || Object.getPrototypeOf(TimerSelection.prototype), 'pause', this)) {
          _get(TimerSelection.prototype.__proto__ || Object.getPrototypeOf(TimerSelection.prototype), 'pause', this).call(this);
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
        if (_get(TimerSelection.prototype.__proto__ || Object.getPrototypeOf(TimerSelection.prototype), 'selectedItemChanged', this)) {
          _get(TimerSelection.prototype.__proto__ || Object.getPrototypeOf(TimerSelection.prototype), 'selectedItemChanged', this).call(this);
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
        var defaults = _get(TimerSelection.prototype.__proto__ || Object.getPrototypeOf(TimerSelection.prototype), 'defaults', this) || {};
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
        var previousPlaying = this[playingSymbol];
        var parsed = String(playing) === 'true'; // Cast to boolean
        if ('playing' in base.prototype) {
          _set(TimerSelection.prototype.__proto__ || Object.getPrototypeOf(TimerSelection.prototype), 'playing', playing, this);
        }
        if (parsed !== previousPlaying) {
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
        return _get(TimerSelection.prototype.__proto__ || Object.getPrototypeOf(TimerSelection.prototype), 'selectedItem', this);
      },
      set: function set(item) {
        if ('selectedItem' in base.prototype) {
          _set(TimerSelection.prototype.__proto__ || Object.getPrototypeOf(TimerSelection.prototype), 'selectedItem', item, this);
        }
        restartTimer(this);
      }
    }, {
      key: 'selectionTimerDuration',
      get: function get() {
        return this[selectionTimerDurationSymbol];
      },
      set: function set(value) {
        this[selectionTimerDurationSymbol] = parseInt(value);
        if ('selectionTimerDuration' in base.prototype) {
          _set(TimerSelection.prototype.__proto__ || Object.getPrototypeOf(TimerSelection.prototype), 'selectionTimerDuration', value, this);
        }
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

},{"./createSymbol":34}],33:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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

      var _this = _possibleConstructorReturn(this, (TrackpadDirection.__proto__ || Object.getPrototypeOf(TrackpadDirection)).call(this));

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
        if (_get(TrackpadDirection.prototype.__proto__ || Object.getPrototypeOf(TrackpadDirection.prototype), 'goLeft', this)) {
          return _get(TrackpadDirection.prototype.__proto__ || Object.getPrototypeOf(TrackpadDirection.prototype), 'goLeft', this).call(this);
        }
      }

      /**
       * Invoked when the user wants to go/navigate right.
       * The default implementation of this method does nothing.
       */

    }, {
      key: 'goRight',
      value: function goRight() {
        if (_get(TrackpadDirection.prototype.__proto__ || Object.getPrototypeOf(TrackpadDirection.prototype), 'goRight', this)) {
          return _get(TrackpadDirection.prototype.__proto__ || Object.getPrototypeOf(TrackpadDirection.prototype), 'goRight', this).call(this);
        }
      }

      // Default implementation.

    }, {
      key: 'showTransition',
      get: function get() {
        return _get(TrackpadDirection.prototype.__proto__ || Object.getPrototypeOf(TrackpadDirection.prototype), 'showTransition', this);
      },
      set: function set(value) {
        if ('showTransition' in base.prototype) {
          _set(TrackpadDirection.prototype.__proto__ || Object.getPrototypeOf(TrackpadDirection.prototype), 'showTransition', value, this);
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
        return _get(TrackpadDirection.prototype.__proto__ || Object.getPrototypeOf(TrackpadDirection.prototype), 'travelFraction', this);
      },
      set: function set(value) {
        if ('travelFraction' in base.prototype) {
          _set(TrackpadDirection.prototype.__proto__ || Object.getPrototypeOf(TrackpadDirection.prototype), 'travelFraction', value, this);
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

},{"../../basic-component-mixins/src/createSymbol":34}],34:[function(require,module,exports){
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

},{}],35:[function(require,module,exports){
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

},{}],36:[function(require,module,exports){
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

},{}],37:[function(require,module,exports){
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

},{}],38:[function(require,module,exports){
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

    var _this = _possibleConstructorReturn(this, (CurrentAnchor.__proto__ || Object.getPrototypeOf(CurrentAnchor)).call(this));

    window.addEventListener('popstate', function (event) {
      refresh(_this);
    });

    // Stupid Edge/IE "support" popstate, but don't fire it on hashchange.
    // So we have to listen for hashchange as well, with the result that a
    // standards-compliant browser may end up refreshing the link twice.
    window.addEventListener('hashchange', function (event) {
      refresh(_this);
    });

    // Set defaults.
    if (typeof _this.areaLink === 'undefined') {
      _this.areaLink = _this.defaults.areaLink;
    }
    return _this;
  }

  /**
   * True if the link points to an area within a site, not just a single page.
   *
   * If true, the matching rule to determine whether the link is current changes:
   * an area link is considered to be current if the link's destination forms a
   * prefix of the current location (instead of matching the complete URL).
   *
   * @type {boolean}
   */


  _createClass(CurrentAnchor, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      if (_get(CurrentAnchor.prototype.__proto__ || Object.getPrototypeOf(CurrentAnchor.prototype), 'connectedCallback', this)) {
        _get(CurrentAnchor.prototype.__proto__ || Object.getPrototypeOf(CurrentAnchor.prototype), 'connectedCallback', this).call(this);
      }
      refresh(this);
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
      var defaults = _get(CurrentAnchor.prototype.__proto__ || Object.getPrototypeOf(CurrentAnchor.prototype), 'defaults', this) || {};
      defaults.areaLink = false;
      return defaults;
    }

    // Augment href implementation so that changing href checks the active status.

  }, {
    key: 'href',
    get: function get() {
      return _get(CurrentAnchor.prototype.__proto__ || Object.getPrototypeOf(CurrentAnchor.prototype), 'href', this);
    },
    set: function set(value) {
      _set(CurrentAnchor.prototype.__proto__ || Object.getPrototypeOf(CurrentAnchor.prototype), 'href', value, this);
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
  var match = void 0;
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

},{"../../basic-component-mixins/src/createSymbol":34,"../../basic-component-mixins/src/toggleClass":37,"../../basic-wrapped-standard-element/src/WrappedStandardElement":53}],39:[function(require,module,exports){
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

},{"../../basic-component-mixins/src/AttributeMarshalling":6,"../../basic-component-mixins/src/Composable":9,"../../basic-component-mixins/src/DistributedChildren":13,"../../basic-component-mixins/src/ShadowElementReferences":26,"../../basic-component-mixins/src/ShadowTemplate":27}],40:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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

    return _possibleConstructorReturn(this, (FadeOverflow.__proto__ || Object.getPrototypeOf(FadeOverflow)).apply(this, arguments));
  }

  _createClass(FadeOverflow, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      if (_get(FadeOverflow.prototype.__proto__ || Object.getPrototypeOf(FadeOverflow.prototype), 'connectedCallback', this)) {
        _get(FadeOverflow.prototype.__proto__ || Object.getPrototypeOf(FadeOverflow.prototype), 'connectedCallback', this).call(this);
      }
      if (this.fadeColor == null) {
        this.refresh();
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

},{"../../basic-component-mixins/src/createSymbol":34,"../../basic-element-base/src/ElementBase":39}],41:[function(require,module,exports){
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
    key: 'defaults',
    get: function get() {
      var defaults = _get(ListBox.prototype.__proto__ || Object.getPrototypeOf(ListBox.prototype), 'defaults', this) || {};
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

},{"../../basic-component-mixins/src/ClickSelection":7,"../../basic-component-mixins/src/ContentAsItems":10,"../../basic-component-mixins/src/DirectionSelection":12,"../../basic-component-mixins/src/DistributedChildrenAsContent":14,"../../basic-component-mixins/src/Generic":16,"../../basic-component-mixins/src/Keyboard":17,"../../basic-component-mixins/src/KeyboardDirection":18,"../../basic-component-mixins/src/KeyboardPagedSelection":19,"../../basic-component-mixins/src/KeyboardPrefixSelection":20,"../../basic-component-mixins/src/SelectionAriaActive":23,"../../basic-component-mixins/src/SelectionHighlight":24,"../../basic-component-mixins/src/SelectionInView":25,"../../basic-component-mixins/src/SingleSelection":28,"../../basic-element-base/src/ElementBase":39}],42:[function(require,module,exports){
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

    return _possibleConstructorReturn(this, (Modes.__proto__ || Object.getPrototypeOf(Modes)).apply(this, arguments));
  }

  _createClass(Modes, [{
    key: 'applySelection',
    value: function applySelection(item, selected) {
      if (_get(Modes.prototype.__proto__ || Object.getPrototypeOf(Modes.prototype), 'applySelection', this)) {
        _get(Modes.prototype.__proto__ || Object.getPrototypeOf(Modes.prototype), 'applySelection', this).call(this, item, selected);
      }
      item.style.display = selected ? '' : 'none';
      item.setAttribute('aria-hidden', !selected);
    }
  }, {
    key: 'defaults',
    get: function get() {
      var defaults = _get(Modes.prototype.__proto__ || Object.getPrototypeOf(Modes.prototype), 'defaults', this) || {};
      defaults.selectionRequired = true;
      return defaults;
    }
  }, {
    key: 'template',
    get: function get() {
      return '<slot></slot>';
    }
  }]);

  return Modes;
}(base);

customElements.define('basic-modes', Modes);
exports.default = Modes;

},{"../../basic-component-mixins/src/ContentAsItems":10,"../../basic-component-mixins/src/DistributedChildrenAsContent":14,"../../basic-component-mixins/src/SelectionAriaActive":23,"../../basic-component-mixins/src/SingleSelection":28,"../../basic-component-mixins/src/TargetInCollective":30,"../../basic-element-base/src/ElementBase":39}],43:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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

var _Keyboard = require('../../basic-component-mixins/src/Keyboard');

var _Keyboard2 = _interopRequireDefault(_Keyboard);

var _KeyboardDirection = require('../../basic-component-mixins/src/KeyboardDirection');

var _KeyboardDirection2 = _interopRequireDefault(_KeyboardDirection);

var _renderArrayAsElements = require('../../basic-component-mixins/src/renderArrayAsElements');

var _renderArrayAsElements2 = _interopRequireDefault(_renderArrayAsElements);

var _SingleSelection = require('../../basic-component-mixins/src/SingleSelection');

var _SingleSelection2 = _interopRequireDefault(_SingleSelection);

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

var base = _ElementBase2.default.compose(_ContentFirstChildTarget2.default, _DirectionSelection2.default, _DistributedChildrenAsContent2.default, _Keyboard2.default, _KeyboardDirection2.default, _SingleSelection2.default, _TargetInCollective2.default, _TargetSelection2.default);

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
 * @mixes Keyboard
 * @mixes KeyboardDirection
 * @mixes SingleSelection
 * @mixes TargetInCollective
 * @mixes TargetSelection
 */

var PageDots = function (_base) {
  _inherits(PageDots, _base);

  function PageDots() {
    _classCallCheck(this, PageDots);

    var _this = _possibleConstructorReturn(this, (PageDots.__proto__ || Object.getPrototypeOf(PageDots)).call(this));

    _this.$.dots.addEventListener('click', function (event) {
      var dot = event.target;
      var dotIndex = _this.dots.indexOf(dot);
      if (dotIndex >= 0) {
        _this.selectedIndex = dotIndex;
      }
    });
    return _this;
  }

  _createClass(PageDots, [{
    key: 'applySelection',
    value: function applySelection(item, selected) {
      if (_get(PageDots.prototype.__proto__ || Object.getPrototypeOf(PageDots.prototype), 'applySelection', this)) {
        _get(PageDots.prototype.__proto__ || Object.getPrototypeOf(PageDots.prototype), 'applySelection', this).call(this, item, selected);
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
    key: 'itemsChanged',
    value: function itemsChanged() {
      if (_get(PageDots.prototype.__proto__ || Object.getPrototypeOf(PageDots.prototype), 'itemsChanged', this)) {
        _get(PageDots.prototype.__proto__ || Object.getPrototypeOf(PageDots.prototype), 'itemsChanged', this).call(this);
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
      if (_get(PageDots.prototype.__proto__ || Object.getPrototypeOf(PageDots.prototype), 'selectedItemChanged', this)) {
        _get(PageDots.prototype.__proto__ || Object.getPrototypeOf(PageDots.prototype), 'selectedItemChanged', this).call(this);
      }
      var selectedIndex = this.selectedIndex;
      this.dots.forEach(function (dot, i) {
        (0, _toggleClass2.default)(dot, 'selected', i === selectedIndex);
      });
    }
  }, {
    key: 'defaults',
    get: function get() {
      var defaults = _get(PageDots.prototype.__proto__ || Object.getPrototypeOf(PageDots.prototype), 'defaults', this) || {};
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
        _set(PageDots.prototype.__proto__ || Object.getPrototypeOf(PageDots.prototype), 'selectedFraction', value, this);
      }
      if (this.target && this.target.selectedFraction !== value) {
        this.target.selectedFraction = value;
      } else {
        renderTransition(this, this.selectedIndex, value);
      }
      this.dispatchEvent(new CustomEvent('selected-fraction-changed'));
    }
  }, {
    key: 'target',
    get: function get() {
      return _get(PageDots.prototype.__proto__ || Object.getPrototypeOf(PageDots.prototype), 'target', this);
    },
    set: function set(element) {
      var _this2 = this;

      if ('target' in base.prototype) {
        _set(PageDots.prototype.__proto__ || Object.getPrototypeOf(PageDots.prototype), 'target', element, this);
      }
      if (this[selectedFractionChangedListenerSymbol]) {
        this.removeEventListener('selected-fraction-changed', this[selectedFractionChangedListenerSymbol]);
      }
      this[selectedFractionChangedListenerSymbol] = element.addEventListener('selected-fraction-changed', function (event) {
        _this2.selectedFraction = element.selectedFraction;
      });
    }
  }, {
    key: 'template',
    get: function get() {
      return '\n      <style>\n      :host {\n        display: -webkit-flex;\n        display: flex;\n        position: relative;\n      }\n\n      #dots {\n        bottom: 0;\n        display: -webkit-flex;\n        display: flex;\n        -webkit-justify-content: center;\n        justify-content: center;\n        position: absolute;\n        width: 100%;\n        z-index: 1;\n      }\n\n      #container {\n        display: -webkit-flex;\n        display: flex;\n        -webkit-flex: 1;\n        flex: 1;\n        position: relative;\n        z-index: 0;\n      }\n\n      #container ::slotted(*) {\n        -webkit-flex: 1;\n        flex: 1;\n      }\n\n      .dot {\n        background: rgb(255, 255, 255);\n        border-radius: 7px;\n        box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.5);\n        box-sizing: border-box;\n        cursor: pointer;\n        height: 8px;\n        margin: 7px 5px;\n        opacity: 0.4;\n        padding: 0;\n        transition: background 0.2s box-shadow 0.2s;\n        width: 8px;\n      }\n\n      .dot:hover {\n        background: rgba(0, 0, 0, 0.75);\n        box-shadow: 0 0 1px 3px rgba(255, 255, 255, 0.5);\n      }\n\n      .dot.selected {\n        opacity: 0.95;\n      }\n\n      @media (min-width: 768px) {\n        .dot {\n          height: 12px;\n          width: 12px;\n        }\n      }\n      </style>\n\n      <div id="dots"></div>\n      <div id="container" role="none">\n        <slot></slot>\n      </div>\n    ';
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
    var dotOpacity = void 0;
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

},{"../../basic-component-mixins/src/ContentFirstChildTarget":11,"../../basic-component-mixins/src/DirectionSelection":12,"../../basic-component-mixins/src/DistributedChildrenAsContent":14,"../../basic-component-mixins/src/Keyboard":17,"../../basic-component-mixins/src/KeyboardDirection":18,"../../basic-component-mixins/src/SingleSelection":28,"../../basic-component-mixins/src/TargetInCollective":30,"../../basic-component-mixins/src/TargetSelection":31,"../../basic-component-mixins/src/createSymbol":34,"../../basic-component-mixins/src/renderArrayAsElements":36,"../../basic-component-mixins/src/toggleClass":37,"../../basic-element-base/src/ElementBase":39}],44:[function(require,module,exports){
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

var _Keyboard = require('../../basic-component-mixins/src/Keyboard');

var _Keyboard2 = _interopRequireDefault(_Keyboard);

var _KeyboardDirection = require('../../basic-component-mixins/src/KeyboardDirection');

var _KeyboardDirection2 = _interopRequireDefault(_KeyboardDirection);

var _SingleSelection = require('../../basic-component-mixins/src/SingleSelection');

var _SingleSelection2 = _interopRequireDefault(_SingleSelection);

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

var base = _ElementBase2.default.compose(_ContentFirstChildTarget2.default, _DirectionSelection2.default, _DistributedChildrenAsContent2.default, _Keyboard2.default, _KeyboardDirection2.default, _SingleSelection2.default, _TargetInCollective2.default, _TargetSelection2.default);

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
 * @mixes Keyboard
 * @mixes KeyboardDirection
 * @mixes SingleSelection
 * @mixes TargetInCollective
 * @mixes TargetSelection
 */

var PlayControls = function (_base) {
  _inherits(PlayControls, _base);

  function PlayControls() {
    _classCallCheck(this, PlayControls);

    var _this = _possibleConstructorReturn(this, (PlayControls.__proto__ || Object.getPrototypeOf(PlayControls)).call(this));

    _this.$.previousButton.addEventListener('click', function (event) {
      _this.selectPrevious();
    });
    _this.$.playButton.addEventListener('click', function (event) {
      _this.playing = !_this.playing;
    });
    _this.$.nextButton.addEventListener('click', function (event) {
      _this.selectNext();
    });
    return _this;
  }

  _createClass(PlayControls, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      if (_get(PlayControls.prototype.__proto__ || Object.getPrototypeOf(PlayControls.prototype), 'connectedCallback', this)) {
        _get(PlayControls.prototype.__proto__ || Object.getPrototypeOf(PlayControls.prototype), 'connectedCallback', this).call(this);
      }
      (0, _toggleClass2.default)(this, 'playing', this.playing);
    }
  }, {
    key: 'keydown',
    value: function keydown(event) {
      var handled = void 0;

      switch (event.keyCode) {
        case 32:
          /* Space */
          this.playing = !this.playing;
          handled = true;
          break;
      }

      // Prefer mixin result if it's defined, otherwise use base result.
      return handled || _get(PlayControls.prototype.__proto__ || Object.getPrototypeOf(PlayControls.prototype), 'keydown', this) && _get(PlayControls.prototype.__proto__ || Object.getPrototypeOf(PlayControls.prototype), 'keydown', this).call(this, event);
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
        _set(PlayControls.prototype.__proto__ || Object.getPrototypeOf(PlayControls.prototype), 'playing', value, this);
      }
      if (this.target) {
        this.target.playing = value;
      }
      if (this.parentNode) {
        (0, _toggleClass2.default)(this, 'playing', value);
      }
    }
  }, {
    key: 'template',
    get: function get() {
      return '\n      <style>\n      :host {\n        display: -webkit-flex;\n        display: flex;\n        position: relative;\n      }\n\n      #buttons {\n        bottom: 0;\n        box-sizing: border-box;\n        padding: 0.5em;\n        position: absolute;\n        text-align: center;\n        width: 100%;\n        z-index: 1;\n      }\n\n      button {\n        background: transparent;\n        border: none;\n        fill: rgba(255, 255, 255, 0.5);\n        padding: 0;\n        transition: fill 0.5s;\n        vertical-align: middle;\n      }\n      :host(:hover) button {\n        fill: rgba(255, 255, 255, 0.7);\n      }\n      button:hover {\n        fill: rgba(255, 255, 255, 0.85);\n      }\n      button:active {\n        fill: white;\n      }\n\n      .icon {\n        height: 30px;\n        width: 30px;\n      }\n      #playButton .icon {\n        height: 40px;\n        width: 40px;\n      }\n\n      :host(.playing) .pausedControl {\n        display: none;\n      }\n      :host(:not(.playing)) .playingControl {\n        display: none;\n      }\n\n      #container {\n        display: -webkit-flex;\n        display: flex;\n        -webkit-flex: 1;\n        flex: 1;\n      }\n\n      #container ::slotted(*) {\n        -webkit-flex: 1;\n        flex: 1;\n      }\n      </style>\n\n      <div id="buttons">\n        <button id="previousButton">\n          <svg class="icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">\n            <g id="skip-previous">\n              <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>\n            </g>\n          </svg>\n        </button>\n        <button id="playButton">\n          <svg class="icon playingControl" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">\n            <g id="pause-circle-outline">\n              <path d="M9 16h2V8H9v8zm3-14C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-4h2V8h-2v8z"></path>\n            </g>\n          </svg>\n          <svg class="icon pausedControl" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">\n            <g id="play-circle-outline">\n              <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>\n            </g>\n          </svg>\n        </button>\n        <button id="nextButton">\n          <svg class="icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">\n            <g id="skip-next">\n              <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>\n            </g>\n          </svg>\n        </button>\n      </div>\n\n      <div id="container" role="none">\n        <slot></slot>\n      </div>\n    ';
    }
  }]);

  return PlayControls;
}(base);

customElements.define('basic-play-controls', PlayControls);

},{"../../basic-component-mixins/src/ContentFirstChildTarget":11,"../../basic-component-mixins/src/DirectionSelection":12,"../../basic-component-mixins/src/DistributedChildrenAsContent":14,"../../basic-component-mixins/src/Keyboard":17,"../../basic-component-mixins/src/KeyboardDirection":18,"../../basic-component-mixins/src/SingleSelection":28,"../../basic-component-mixins/src/TargetInCollective":30,"../../basic-component-mixins/src/TargetSelection":31,"../../basic-component-mixins/src/toggleClass":37,"../../basic-element-base/src/ElementBase":39}],45:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _ElementBase = require('../../basic-element-base/src/ElementBase');

var _ElementBase2 = _interopRequireDefault(_ElementBase);

var _ContentFirstChildTarget = require('../../basic-component-mixins/src/ContentFirstChildTarget');

var _ContentFirstChildTarget2 = _interopRequireDefault(_ContentFirstChildTarget);

var _DistributedChildrenAsContent = require('../../basic-component-mixins/src/DistributedChildrenAsContent');

var _DistributedChildrenAsContent2 = _interopRequireDefault(_DistributedChildrenAsContent);

var _SingleSelection = require('../../basic-component-mixins/src/SingleSelection');

var _SingleSelection2 = _interopRequireDefault(_SingleSelection);

var _Keyboard = require('../../basic-component-mixins/src/Keyboard');

var _Keyboard2 = _interopRequireDefault(_Keyboard);

var _KeyboardDirection = require('../../basic-component-mixins/src/KeyboardDirection');

var _KeyboardDirection2 = _interopRequireDefault(_KeyboardDirection);

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

var base = _ElementBase2.default.compose(_ContentFirstChildTarget2.default, _DistributedChildrenAsContent2.default, _SingleSelection2.default, _Keyboard2.default, _KeyboardDirection2.default, _TargetInCollective2.default, _TargetSelection2.default, _TimerSelection2.default);

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

    return _possibleConstructorReturn(this, (SlideshowTimer.__proto__ || Object.getPrototypeOf(SlideshowTimer)).apply(this, arguments));
  }

  _createClass(SlideshowTimer, [{
    key: 'defaults',
    get: function get() {
      var defaults = _get(SlideshowTimer.prototype.__proto__ || Object.getPrototypeOf(SlideshowTimer.prototype), 'defaults', this) || {};
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

},{"../../basic-component-mixins/src/ContentFirstChildTarget":11,"../../basic-component-mixins/src/DistributedChildrenAsContent":14,"../../basic-component-mixins/src/Keyboard":17,"../../basic-component-mixins/src/KeyboardDirection":18,"../../basic-component-mixins/src/SingleSelection":28,"../../basic-component-mixins/src/TargetInCollective":30,"../../basic-component-mixins/src/TargetSelection":31,"../../basic-component-mixins/src/TimerSelection":32,"../../basic-element-base/src/ElementBase":39}],46:[function(require,module,exports){
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

var _SelectionAnimation = require('../../basic-component-mixins/src/SelectionAnimation');

var _SelectionAnimation2 = _interopRequireDefault(_SelectionAnimation);

var _SelectionAriaActive = require('../../basic-component-mixins/src/SelectionAriaActive');

var _SelectionAriaActive2 = _interopRequireDefault(_SelectionAriaActive);

var _SingleSelection = require('../../basic-component-mixins/src/SingleSelection');

var _SingleSelection2 = _interopRequireDefault(_SingleSelection);

var _TimerSelection = require('../../basic-component-mixins/src/TimerSelection');

var _TimerSelection2 = _interopRequireDefault(_TimerSelection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var base = _ElementBase2.default.compose(_ContentAsItems2.default, _DistributedChildrenAsContent2.default, _FractionalSelection2.default, _SelectionAnimation2.default, _SelectionAriaActive2.default, _SingleSelection2.default, _TimerSelection2.default);

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
 * @mixes SelectionAnimation
 * @mixes SelectionAriaActive
 * @mixes SingleSelection
 * @mixes TimerSelection
 */

var Slideshow = function (_base) {
  _inherits(Slideshow, _base);

  function Slideshow() {
    _classCallCheck(this, Slideshow);

    return _possibleConstructorReturn(this, (Slideshow.__proto__ || Object.getPrototypeOf(Slideshow)).apply(this, arguments));
  }

  _createClass(Slideshow, [{
    key: 'defaults',
    get: function get() {
      var defaults = _get(Slideshow.prototype.__proto__ || Object.getPrototypeOf(Slideshow.prototype), 'defaults', this) || {};
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
      return '\n      <style>\n      :host {\n        display: -webkit-flex;\n        display: flex;\n        overflow: hidden;\n        position: relative;\n      }\n\n      #container ::slotted(*) {\n        height: 100%;\n        object-fit: contain;\n        position: absolute;\n        width: 100%;\n        will-change: transform;\n      }\n      </style>\n\n      <div id="container" role="none">\n        <slot></slot>\n      </div>\n    ';
    }
  }]);

  return Slideshow;
}(base);

customElements.define('basic-slideshow', Slideshow);

},{"../../basic-component-mixins/src/ContentAsItems":10,"../../basic-component-mixins/src/DistributedChildrenAsContent":14,"../../basic-component-mixins/src/FractionalSelection":15,"../../basic-component-mixins/src/SelectionAnimation":22,"../../basic-component-mixins/src/SelectionAriaActive":23,"../../basic-component-mixins/src/SingleSelection":28,"../../basic-component-mixins/src/TimerSelection":32,"../../basic-element-base/src/ElementBase":39}],47:[function(require,module,exports){
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

    return _possibleConstructorReturn(this, (SlidingCarousel.__proto__ || Object.getPrototypeOf(SlidingCarousel)).apply(this, arguments));
  }

  _createClass(SlidingCarousel, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      if (_get(SlidingCarousel.prototype.__proto__ || Object.getPrototypeOf(SlidingCarousel.prototype), 'connectedCallback', this)) {
        _get(SlidingCarousel.prototype.__proto__ || Object.getPrototypeOf(SlidingCarousel.prototype), 'connectedCallback', this).call(this);
      }
      // HACK
      this.itemsChanged();
    }
  }, {
    key: 'defaults',
    get: function get() {
      var defaults = _get(SlidingCarousel.prototype.__proto__ || Object.getPrototypeOf(SlidingCarousel.prototype), 'defaults', this) || {};
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
        _set(SlidingCarousel.prototype.__proto__ || Object.getPrototypeOf(SlidingCarousel.prototype), 'selectedFraction', value, this);
      }
      this.$.viewport.selectedFraction = value;
      var event = new CustomEvent('selected-fraction-changed');
      this.dispatchEvent(event);
    }
  }, {
    key: 'selectedIndex',
    get: function get() {
      return _get(SlidingCarousel.prototype.__proto__ || Object.getPrototypeOf(SlidingCarousel.prototype), 'selectedIndex', this);
    },
    set: function set(value) {
      if ('selectedIndex' in base.prototype) {
        _set(SlidingCarousel.prototype.__proto__ || Object.getPrototypeOf(SlidingCarousel.prototype), 'selectedIndex', value, this);
      }
      this.$.viewport.selectedIndex = value;
    }
  }, {
    key: 'selectedItem',
    get: function get() {
      return _get(SlidingCarousel.prototype.__proto__ || Object.getPrototypeOf(SlidingCarousel.prototype), 'selectedItem', this);
    },
    set: function set(item) {
      if ('selectedItem' in base.prototype) {
        _set(SlidingCarousel.prototype.__proto__ || Object.getPrototypeOf(SlidingCarousel.prototype), 'selectedItem', item, this);
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
      return _get(SlidingCarousel.prototype.__proto__ || Object.getPrototypeOf(SlidingCarousel.prototype), 'showTransition', this) || this.$.viewport.showTransition;
    },
    set: function set(value) {
      if ('showTransition' in base.prototype) {
        _set(SlidingCarousel.prototype.__proto__ || Object.getPrototypeOf(SlidingCarousel.prototype), 'showTransition', value, this);
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

},{"../../basic-component-mixins/src/ContentAsItems":10,"../../basic-component-mixins/src/DirectionSelection":12,"../../basic-component-mixins/src/DistributedChildrenAsContent":14,"../../basic-component-mixins/src/FractionalSelection":15,"../../basic-component-mixins/src/Keyboard":17,"../../basic-component-mixins/src/KeyboardDirection":18,"../../basic-component-mixins/src/SelectionAriaActive":23,"../../basic-component-mixins/src/SingleSelection":28,"../../basic-component-mixins/src/SwipeDirection":29,"../../basic-component-mixins/src/TargetInCollective":30,"../../basic-component-mixins/src/TrackpadDirection":33,"../../basic-element-base/src/ElementBase":39,"../../basic-sliding-viewport/src/SlidingViewport":48}],48:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createSymbol = require('../../basic-component-mixins/src/createSymbol');

var _createSymbol2 = _interopRequireDefault(_createSymbol);

var _ElementBase = require('../../basic-element-base/src/ElementBase');

var _ElementBase2 = _interopRequireDefault(_ElementBase);

var _FractionalSelection = require('../../basic-component-mixins/src/FractionalSelection');

var _FractionalSelection2 = _interopRequireDefault(_FractionalSelection);

var _SpreadItems = require('../../basic-spread-items/src/SpreadItems');

var _SpreadItems2 = _interopRequireDefault(_SpreadItems);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// jshint ignore:line


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

    var _this = _possibleConstructorReturn(this, (SlidingViewport.__proto__ || Object.getPrototypeOf(SlidingViewport)).call(this));

    _this.selectedFraction = 0;
    _this.showTransition = true;
    return _this;
  }

  _createClass(SlidingViewport, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      if (_get(SlidingViewport.prototype.__proto__ || Object.getPrototypeOf(SlidingViewport.prototype), 'connectedCallback', this)) {
        _get(SlidingViewport.prototype.__proto__ || Object.getPrototypeOf(SlidingViewport.prototype), 'connectedCallback', this).call(this);
      }
      this.render();
    }
  }, {
    key: 'render',
    value: function render() {
      if (_get(SlidingViewport.prototype.__proto__ || Object.getPrototypeOf(SlidingViewport.prototype), 'render', this)) {
        _get(SlidingViewport.prototype.__proto__ || Object.getPrototypeOf(SlidingViewport.prototype), 'render', this).call(this);
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
      return _get(SlidingViewport.prototype.__proto__ || Object.getPrototypeOf(SlidingViewport.prototype), 'selectedFraction', this);
    },
    set: function set(value) {
      if ('selectedFraction' in base.prototype) {
        _set(SlidingViewport.prototype.__proto__ || Object.getPrototypeOf(SlidingViewport.prototype), 'selectedFraction', value, this);
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
        _set(SlidingViewport.prototype.__proto__ || Object.getPrototypeOf(SlidingViewport.prototype), 'selectedIndex', index, this);
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
        _set(SlidingViewport.prototype.__proto__ || Object.getPrototypeOf(SlidingViewport.prototype), 'selectedItem', item, this);
      }
      this[selectedItemSymbol] = item;
      this.render();
    }
  }, {
    key: 'showTransition',
    get: function get() {
      return _get(SlidingViewport.prototype.__proto__ || Object.getPrototypeOf(SlidingViewport.prototype), 'showTransition', this) || this.classList.contains('showTransition');
    },
    set: function set(value) {
      if ('showTransition' in base.prototype) {
        _set(SlidingViewport.prototype.__proto__ || Object.getPrototypeOf(SlidingViewport.prototype), 'showTransition', value, this);
      }
      this.reflectClass('showTransition', value);
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

},{"../../basic-component-mixins/src/FractionalSelection":15,"../../basic-component-mixins/src/createSymbol":34,"../../basic-element-base/src/ElementBase":39,"../../basic-spread-items/src/SpreadItems":49}],49:[function(require,module,exports){
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

    return _possibleConstructorReturn(this, (SpreadItems.__proto__ || Object.getPrototypeOf(SpreadItems)).apply(this, arguments));
  }

  _createClass(SpreadItems, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      if (_get(SpreadItems.prototype.__proto__ || Object.getPrototypeOf(SpreadItems.prototype), 'connectedCallback', this)) {
        _get(SpreadItems.prototype.__proto__ || Object.getPrototypeOf(SpreadItems.prototype), 'connectedCallback', this).call(this);
      }
      // HACK
      this.itemsChanged();
    }
  }, {
    key: 'itemsChanged',


    // TODO: Should also handle contentChanged(), but need to rationalize with
    // invocation of itemsChanged in connectedCallback.
    value: function itemsChanged() {
      if (_get(SpreadItems.prototype.__proto__ || Object.getPrototypeOf(SpreadItems.prototype), 'itemsChanged', this)) {
        _get(SpreadItems.prototype.__proto__ || Object.getPrototypeOf(SpreadItems.prototype), 'itemsChanged', this).call(this);
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

},{"../../basic-component-mixins/src/DistributedChildrenAsContent":14,"../../basic-element-base/src/ElementBase":39}],50:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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

var _KeyboardDirection = require('../../basic-component-mixins/src/KeyboardDirection');

var _KeyboardDirection2 = _interopRequireDefault(_KeyboardDirection);

var _renderArrayAsElements = require('../../basic-component-mixins/src/renderArrayAsElements');

var _renderArrayAsElements2 = _interopRequireDefault(_renderArrayAsElements);

var _SingleSelection = require('../../basic-component-mixins/src/SingleSelection');

var _SingleSelection2 = _interopRequireDefault(_SingleSelection);

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

var base = _ElementBase2.default.compose(_ContentFirstChildTarget2.default, _DirectionSelection2.default, _DistributedChildrenAsContent2.default, _Generic2.default, _KeyboardDirection2.default, _SingleSelection2.default, _TargetSelection2.default);

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
 * @mixes KeyboardDirection
 * @mixes SingleSelection
 * @mixes TargetSelection
 */

var TabStrip = function (_base) {
  _inherits(TabStrip, _base);

  function TabStrip() {
    _classCallCheck(this, TabStrip);

    var _this = _possibleConstructorReturn(this, (TabStrip.__proto__ || Object.getPrototypeOf(TabStrip)).call(this));

    _this.$.tabs.addEventListener('click', function (event) {
      var tab = event.target;
      var tabIndex = _this.tabs.indexOf(tab);
      if (tabIndex >= 0) {
        _this.selectedIndex = tabIndex;
      }
    });

    // Listen to keydown events on the tabs, not on pages.
    _this.$.tabs.addEventListener('keydown', function (event) {
      var handled = _this.keydown(event);
      if (handled) {
        event.preventDefault();
        event.stopPropagation();
      }
    });

    // Set defaults.
    if (typeof _this.tabPosition === 'undefined') {
      _this.tabPosition = _this.defaults.tabPosition;
    }
    return _this;
  }

  _createClass(TabStrip, [{
    key: 'applySelection',
    value: function applySelection(item, selected) {
      if (_get(TabStrip.prototype.__proto__ || Object.getPrototypeOf(TabStrip.prototype), 'applySelection', this)) {
        _get(TabStrip.prototype.__proto__ || Object.getPrototypeOf(TabStrip.prototype), 'applySelection', this).call(this, item, selected);
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
    key: 'connectedCallback',
    value: function connectedCallback() {
      if (_get(TabStrip.prototype.__proto__ || Object.getPrototypeOf(TabStrip.prototype), 'connectedCallback', this)) {
        _get(TabStrip.prototype.__proto__ || Object.getPrototypeOf(TabStrip.prototype), 'connectedCallback', this).call(this);
      }
      if (!this.getAttribute('role')) {
        // Assign a default ARIA role.
        this.setAttribute('role', 'tablist');
      }
    }
  }, {
    key: 'itemsChanged',
    value: function itemsChanged() {
      if (_get(TabStrip.prototype.__proto__ || Object.getPrototypeOf(TabStrip.prototype), 'itemsChanged', this)) {
        _get(TabStrip.prototype.__proto__ || Object.getPrototypeOf(TabStrip.prototype), 'itemsChanged', this).call(this);
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
        }
        element.id = item.id + '_tab';
        element.textContent = item.getAttribute('aria-label');

        // Point tab and panel at each other.
        element.setAttribute('aria-controls', item.id);
        item.setAttribute('aria-labelledby', element.id);

        return element;
      });

      this.selectedItemChanged(); // In case position of selected item moved.
    }
  }, {
    key: 'keydown',
    value: function keydown(event) {
      var handled = _get(TabStrip.prototype.__proto__ || Object.getPrototypeOf(TabStrip.prototype), 'keydown', this).call(this, event);
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
      if (_get(TabStrip.prototype.__proto__ || Object.getPrototypeOf(TabStrip.prototype), 'selectedItemChanged', this)) {
        _get(TabStrip.prototype.__proto__ || Object.getPrototypeOf(TabStrip.prototype), 'selectedItemChanged', this).call(this);
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
      var defaults = _get(TabStrip.prototype.__proto__ || Object.getPrototypeOf(TabStrip.prototype), 'defaults', this) || {};
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

      this.reflectAttribute('tab-position', position);

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
      return '\n      <style>\n      :host {\n        display: -webkit-flex;\n        display: flex;\n        -webkit-flex-direction: column;\n        flex-direction: column;\n        position: relative;\n      }\n\n      /*\n       * Avoid having tab container stretch across. User won\'t be able to see\n       * it, but since it handles the keyboard, in Mobile Safari a tap on the\n       * container background will cause the region to flash. Aligning the\n       * region collapses it down to hold its contents.\n       */\n      #tabs {\n        /* For IE bug (clicking tab produces gap between tab and page). */\n        display: -webkit-flex;\n        display: flex;\n        /*\n         * Try to obtain fast-tap behavior on all tabs.\n         * See https://webkit.org/blog/5610/more-responsive-tapping-on-ios/.\n         */\n        touch-action: manipulation;\n      }\n      :host(:not(.spread)) #tabs {\n        -webkit-align-self: flex-start;\n        align-self: flex-start;\n      }\n\n      #pages {\n        display: -webkit-flex;\n        display: flex;\n        -webkit-flex: 1;\n        flex: 1;\n        -webkit-flex-direction: column;\n        flex-direction: column;\n      }\n\n      #pages ::slotted(*) {\n        display: -webkit-flex;\n        display: flex;\n        -webkit-flex: 1;\n        flex: 1;\n      }\n\n      .tab {\n        cursor: pointer;\n        display: inline-block;\n        font-family: inherit;\n        font-size: inherit;\n        position: relative;\n      }\n\n      /* Left/right positions */\n      :host([tab-position="left"]),\n      :host([tab-position="right"]) {\n        -webkit-flex-direction: row;\n        flex-direction: row;\n      }\n      :host([tab-position="left"]) #tabs,\n      :host([tab-position="right"]) #tabs {\n        -webkit-flex-direction: column;\n        flex-direction: column;\n      }\n\n      /* Spread variant */\n      :host(.spread) #tabs {\n        -webkit-align-items: stretch;\n        align-items: stretch;\n      }\n      :host(.spread) .tab {\n        flex: 1;\n      }\n\n      /* Generic style */\n      :host([generic=""]) #pages {\n        background: white;\n        border: 1px solid #ccc;\n        box-sizing: border-box;\n      }\n\n      :host([generic=""]) .tab {\n        background: white;\n        border: 1px solid #ccc;\n        margin: 0;\n        padding: 0.5em 0.75em;\n        transition: border-color 0.25s;\n      }\n\n      :host([generic=""]) .tab.selected {\n        border-color: #ccc;\n        opacity: 1;\n      }\n\n      :host([generic=""]) .tab:hover {\n        background-color: #eee;\n      }\n\n      /* Generic, top/bottom positions */\n      :host([generic=""][tab-position="top"]) .tab:not(:last-child),\n      :host([generic=""][tab-position="bottom"]) .tab:not(:last-child) {\n        margin-right: 0.2em;\n      }\n\n      /* Generic, top position */\n      :host([generic=""][tab-position="top"]) .tab {\n        border-radius: 0.25em 0.25em 0 0;\n        margin-bottom: -1px;\n      }\n      :host([generic=""][tab-position="top"]) .tab.selected {\n        border-bottom-color: transparent;\n      }\n\n      /* Generic, bottom position */\n      :host([generic=""][tab-position="bottom"]) .tab {\n        border-radius: 0 0 0.25em 0.25em;\n        margin-top: -1px;\n      }\n      :host([generic=""][tab-position="bottom"]) .tab.selected {\n        border-top-color: transparent;\n      }\n\n      /* Generic, left/right positions */\n      :host([generic=""][tab-position="left"]) .tab:not(:last-child),\n      :host([generic=""][tab-position="right"]) .tab:not(:last-child) {\n        margin-bottom: 0.2em;\n      }\n\n      /* Generic, left position */\n      :host([generic=""][tab-position="left"]) .tab {\n        border-radius: 0.25em 0 0 0.25em;\n        margin-right: -1px;\n      }\n      :host([generic=""][tab-position="left"]) .tab.selected {\n        border-right-color: transparent;\n      }\n\n      /* Generic, right position */\n      :host([generic=""][tab-position="right"]) .tab {\n        border-radius: 0 0.25em 0.25em 0;\n        margin-left: -1px;\n      }\n      :host([generic=""][tab-position="right"]) .tab.selected {\n        border-left-color: transparent;\n      }\n      </style>\n\n      <div id="tabs"></div>\n      <div id="pages">\n        <slot></slot>\n      </div>\n    ';
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

},{"../../basic-component-mixins/src/ContentFirstChildTarget":11,"../../basic-component-mixins/src/DirectionSelection":12,"../../basic-component-mixins/src/DistributedChildrenAsContent":14,"../../basic-component-mixins/src/Generic":16,"../../basic-component-mixins/src/KeyboardDirection":18,"../../basic-component-mixins/src/SingleSelection":28,"../../basic-component-mixins/src/TargetSelection":31,"../../basic-component-mixins/src/createSymbol":34,"../../basic-component-mixins/src/renderArrayAsElements":36,"../../basic-component-mixins/src/toggleClass":37,"../../basic-element-base/src/ElementBase":39}],51:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _ElementBase = require('../../basic-element-base/src/ElementBase');

var _ElementBase2 = _interopRequireDefault(_ElementBase);

var _Generic = require('../../basic-component-mixins/src/Generic');

var _Generic2 = _interopRequireDefault(_Generic);

var _Modes = require('../../basic-modes/src/Modes');

var _Modes2 = _interopRequireDefault(_Modes);

var _TabStrip = require('../../basic-tab-strip/src/TabStrip');

var _TabStrip2 = _interopRequireDefault(_TabStrip);

var _SingleSelection = require('../../basic-component-mixins/src/SingleSelection');

var _SingleSelection2 = _interopRequireDefault(_SingleSelection);

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
 * @mixes Generic
 * @mixes SingleSelection
 * @mixes TargetSelection
 */
var Tabs = function (_ElementBase$compose) {
  _inherits(Tabs, _ElementBase$compose);

  function Tabs() {
    _classCallCheck(this, Tabs);

    return _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).apply(this, arguments));
  }

  _createClass(Tabs, [{
    key: 'generic',
    get: function get() {
      return _get(Tabs.prototype.__proto__ || Object.getPrototypeOf(Tabs.prototype), 'generic', this);
    },
    set: function set(value) {
      _set(Tabs.prototype.__proto__ || Object.getPrototypeOf(Tabs.prototype), 'generic', value, this);
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
      return '\n      <style>\n      :host {\n        display: -webkit-flex;\n        display: flex;\n        -webkit-flex-direction: column;\n        flex-direction: column;\n      }\n\n      #tabStrip {\n        -webkit-flex: 1;\n        flex: 1;\n      }\n\n      #modes ::slotted(*) {\n        -webkit-flex: 1;\n        flex: 1;\n      }\n      </style>\n\n      <basic-tab-strip id="tabStrip">\n        <basic-modes id="modes">\n          <slot></slot>\n        </basic-modes>\n      </basic-tab-strip>\n    ';
    }
  }]);

  return Tabs;
}(_ElementBase2.default.compose(_Generic2.default, _SingleSelection2.default, _TargetSelection2.default));

customElements.define('basic-tabs', Tabs);

},{"../../basic-component-mixins/src/Generic":16,"../../basic-component-mixins/src/SingleSelection":28,"../../basic-component-mixins/src/TargetSelection":31,"../../basic-element-base/src/ElementBase":39,"../../basic-modes/src/Modes":42,"../../basic-tab-strip/src/TabStrip":50}],52:[function(require,module,exports){
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

},{"../../basic-animation-stage/src/AnimationStage":1,"../../basic-arrow-selection/src/ArrowSelection":2,"../../basic-autosize-textarea/src/AutosizeTextarea":3,"../../basic-carousel/src/Carousel":4,"../../basic-collapsible-panel/src/CollapsiblePanel":5,"../../basic-current-anchor/src/CurrentAnchor":38,"../../basic-fade-overflow/src/FadeOverflow":40,"../../basic-list-box/src/ListBox":41,"../../basic-modes/src/Modes":42,"../../basic-page-dots/src/PageDots":43,"../../basic-play-controls/src/PlayControls":44,"../../basic-slideshow-timer/src/SlideshowTimer":45,"../../basic-slideshow/src/Slideshow":46,"../../basic-sliding-carousel/src/SlidingCarousel":47,"../../basic-sliding-viewport/src/SlidingViewport":48,"../../basic-spread-items/src/SpreadItems":49,"../../basic-tab-strip/src/TabStrip":50,"../../basic-tabs/src/Tabs":51}],53:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

    // Listen for any events raised by the inner element which will not
    // automatically be retargetted across the Shadow DOM boundary, and re-raise
    // those events when they happen.
    //
    // Note: It's unclear why we need to do this in the Shadow DOM polyfill.
    // In theory, events in the light DOM should bubble as normal. But this
    // code appears to be required in the polyfill case as well.
    var _this = _possibleConstructorReturn(this, (WrappedStandardElement.__proto__ || Object.getPrototypeOf(WrappedStandardElement)).call(this));

    var eventNames = reraiseEvents[_this.extends] || [];
    eventNames.forEach(function (eventName) {
      _this.inner.addEventListener(eventName, function (realEvent) {
        var event = new Event(eventName, {
          bubbles: eventBubbles[eventName] || false
        });
        _this.dispatchEvent(event);
      });
    });
    return _this;
  }

  /**
   * A description for the user of the element's purpose on the page. Setting
   * this applies the label to the inner element, ensuring that screen readers
   * and other assistive technologies will provide a meaningful description to
   * the user.
   *
   * @type {string}
   */


  _createClass(WrappedStandardElement, [{
    key: 'ariaLabel',
    get: function get() {
      return this.inner.getAttribute('aria-label');
    },
    set: function set(label) {
      // Propagate the ARIA label to the inner textarea.
      this.inner.setAttribute('aria-label', label);
    }

    /**
     * Returns a reference to the inner standard HTML element.
     *
     * @type {HTMLElement}
     */

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
      return '<style>:host { display: ' + display + '}</style><' + this.extends + ' id="inner"><slot></slot></' + this.extends;
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

          return _possibleConstructorReturn(this, (Wrapped.__proto__ || Object.getPrototypeOf(Wrapped)).apply(this, arguments));
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

},{"../../basic-element-base/src/ElementBase":39}]},{},[52])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwYWNrYWdlcy9iYXNpYy1hbmltYXRpb24tc3RhZ2Uvc3JjL0FuaW1hdGlvblN0YWdlLmpzIiwicGFja2FnZXMvYmFzaWMtYXJyb3ctc2VsZWN0aW9uL3NyYy9BcnJvd1NlbGVjdGlvbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWF1dG9zaXplLXRleHRhcmVhL3NyYy9BdXRvc2l6ZVRleHRhcmVhLmpzIiwicGFja2FnZXMvYmFzaWMtY2Fyb3VzZWwvc3JjL0Nhcm91c2VsLmpzIiwicGFja2FnZXMvYmFzaWMtY29sbGFwc2libGUtcGFuZWwvc3JjL0NvbGxhcHNpYmxlUGFuZWwuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9BdHRyaWJ1dGVNYXJzaGFsbGluZy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NsaWNrU2VsZWN0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ29sbGVjdGl2ZS5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NvbXBvc2FibGUuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Db250ZW50QXNJdGVtcy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NvbnRlbnRGaXJzdENoaWxkVGFyZ2V0LmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlyZWN0aW9uU2VsZWN0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlzdHJpYnV0ZWRDaGlsZHJlbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9GcmFjdGlvbmFsU2VsZWN0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvR2VuZXJpYy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0tleWJvYXJkLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvS2V5Ym9hcmREaXJlY3Rpb24uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9LZXlib2FyZFBhZ2VkU2VsZWN0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvS2V5Ym9hcmRQcmVmaXhTZWxlY3Rpb24uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9PcGVuQ2xvc2UuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TZWxlY3Rpb25BbmltYXRpb24uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TZWxlY3Rpb25BcmlhQWN0aXZlLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2VsZWN0aW9uSGlnaGxpZ2h0LmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2VsZWN0aW9uSW5WaWV3LmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2hhZG93RWxlbWVudFJlZmVyZW5jZXMuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TaGFkb3dUZW1wbGF0ZS5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NpbmdsZVNlbGVjdGlvbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1N3aXBlRGlyZWN0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvVGFyZ2V0SW5Db2xsZWN0aXZlLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvVGFyZ2V0U2VsZWN0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvVGltZXJTZWxlY3Rpb24uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9UcmFja3BhZERpcmVjdGlvbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL2NyZWF0ZVN5bWJvbC5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL21pY3JvdGFzay5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL3JlbmRlckFycmF5QXNFbGVtZW50cy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL3RvZ2dsZUNsYXNzLmpzIiwicGFja2FnZXMvYmFzaWMtY3VycmVudC1hbmNob3Ivc3JjL0N1cnJlbnRBbmNob3IuanMiLCJwYWNrYWdlcy9iYXNpYy1lbGVtZW50LWJhc2Uvc3JjL0VsZW1lbnRCYXNlLmpzIiwicGFja2FnZXMvYmFzaWMtZmFkZS1vdmVyZmxvdy9zcmMvRmFkZU92ZXJmbG93LmpzIiwicGFja2FnZXMvYmFzaWMtbGlzdC1ib3gvc3JjL0xpc3RCb3guanMiLCJwYWNrYWdlcy9iYXNpYy1tb2Rlcy9zcmMvTW9kZXMuanMiLCJwYWNrYWdlcy9iYXNpYy1wYWdlLWRvdHMvc3JjL1BhZ2VEb3RzLmpzIiwicGFja2FnZXMvYmFzaWMtcGxheS1jb250cm9scy9zcmMvUGxheUNvbnRyb2xzLmpzIiwicGFja2FnZXMvYmFzaWMtc2xpZGVzaG93LXRpbWVyL3NyYy9TbGlkZXNob3dUaW1lci5qcyIsInBhY2thZ2VzL2Jhc2ljLXNsaWRlc2hvdy9zcmMvU2xpZGVzaG93LmpzIiwicGFja2FnZXMvYmFzaWMtc2xpZGluZy1jYXJvdXNlbC9zcmMvU2xpZGluZ0Nhcm91c2VsLmpzIiwicGFja2FnZXMvYmFzaWMtc2xpZGluZy12aWV3cG9ydC9zcmMvU2xpZGluZ1ZpZXdwb3J0LmpzIiwicGFja2FnZXMvYmFzaWMtc3ByZWFkLWl0ZW1zL3NyYy9TcHJlYWRJdGVtcy5qcyIsInBhY2thZ2VzL2Jhc2ljLXRhYi1zdHJpcC9zcmMvVGFiU3RyaXAuanMiLCJwYWNrYWdlcy9iYXNpYy10YWJzL3NyYy9UYWJzLmpzIiwicGFja2FnZXMvYmFzaWMtd2ViLWNvbXBvbmVudHMvc3JjL2FsbC5qcyIsInBhY2thZ2VzL2Jhc2ljLXdyYXBwZWQtc3RhbmRhcmQtZWxlbWVudC9zcmMvV3JhcHBlZFN0YW5kYXJkRWxlbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFHQSxJQUFJLE9BQU8sc0JBQVksT0FBWix5TEFBWDs7QUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBMEJNLGM7Ozs7Ozs7Ozs7O3dDQUVnQjtBQUNsQixrSUFBNkI7QUFBRTtBQUE0QjtBQUMzRCxXQUFLLGlCQUFMLEdBQXlCLElBQXpCO0FBQ0Q7Ozt3QkFFYztBQUNiO0FBaUJEOzs7O0VBekIwQixJOztBQThCN0IsZUFBZSxNQUFmLENBQXNCLHVCQUF0QixFQUErQyxjQUEvQzs7Ozs7Ozs7Ozs7Ozs7O0FDMUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFHQTtBQUNBLElBQU0sMEJBQTBCLDRCQUFhLG1CQUFiLENBQWhDO0FBQ0EsSUFBTSwwQkFBMEIsNEJBQWEsbUJBQWIsQ0FBaEM7QUFDQSxJQUFNLG1CQUFtQiw0QkFBYSxZQUFiLENBQXpCO0FBQ0EsSUFBTSxtQkFBbUIsNEJBQWEsWUFBYixDQUF6QjtBQUNBLElBQU0scUJBQXFCLDRCQUFhLGNBQWIsQ0FBM0I7O0FBR0EsSUFBSSxPQUFPLHNCQUFZLE9BQVosOE9B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Q0FBUDtBQUNELEtBRkQ7QUFHRDtBQUNELE1BQUksV0FBVyxHQUFmLEVBQW9CO0FBQ2xCLGFBQVMsR0FBVCxHQUFlLFVBQVMsS0FBVCxFQUFnQjtBQUM3QixXQUFLLEtBQUwsQ0FBVyxJQUFYLElBQW1CLEtBQW5CO0FBQ0QsS0FGRDtBQUdEO0FBQ0QsTUFBSSxXQUFXLFFBQWYsRUFBeUI7QUFDdkIsYUFBUyxRQUFULEdBQW9CLFdBQVcsUUFBL0I7QUFDRDtBQUNELFNBQU8sUUFBUDtBQUNEOztrQkFHYyxzQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgRWxlbWVudEJhc2UgZnJvbSAnLi4vLi4vYmFzaWMtZWxlbWVudC1iYXNlL3NyYy9FbGVtZW50QmFzZSc7XG5pbXBvcnQgQ29udGVudEFzSXRlbXMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ29udGVudEFzSXRlbXMnO1xuaW1wb3J0IERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCc7XG5pbXBvcnQgRnJhY3Rpb25hbFNlbGVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9GcmFjdGlvbmFsU2VsZWN0aW9uJztcbmltcG9ydCBTZWxlY3Rpb25BbmltYXRpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2VsZWN0aW9uQW5pbWF0aW9uJztcbmltcG9ydCBTZWxlY3Rpb25BcmlhQWN0aXZlIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NlbGVjdGlvbkFyaWFBY3RpdmUnO1xuaW1wb3J0IFNpbmdsZVNlbGVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TaW5nbGVTZWxlY3Rpb24nO1xuXG5cbmxldCBiYXNlID0gRWxlbWVudEJhc2UuY29tcG9zZShcbiAgQ29udGVudEFzSXRlbXMsXG4gIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQsXG4gIEZyYWN0aW9uYWxTZWxlY3Rpb24sXG4gIFNlbGVjdGlvbkFuaW1hdGlvbixcbiAgU2VsZWN0aW9uQXJpYUFjdGl2ZSxcbiAgU2luZ2xlU2VsZWN0aW9uXG4pO1xuXG4vKipcbiAqIFByZXNlbnRzIGEgc2luZ2xlIGl0ZW0gYXMgc2VsZWN0ZWQsIHByb3ZpZGluZyBhbmltYXRlZCB0cmFuc2l0aW9ucyB3aGVuIHRoZVxuICogc2VsZWN0aW9uIGNoYW5nZXMuIFRoZSBzYW1lIGFuaW1hdGlvbiBjYW4gYmUgc2hvd24gYXQgYW4gYXJiaXRyYXJ5IHBvaW50LFxuICogZ2VuZXJhbGx5IHVzZWQgdG8gcmVmbGVjdCBhIHVzZXItY29udHJvbGxlZCB0b3VjaCBvciB0cmFja3BhZCBkcmFnIG9wZXJhdGlvblxuICogaW4gcHJvZ3Jlc3MuXG4gKlxuICogW0xpdmUgZGVtb10oaHR0cDovL2Jhc2ljd2ViY29tcG9uZW50cy5vcmcvYmFzaWMtd2ViLWNvbXBvbmVudHMvcGFja2FnZXMvYmFzaWMtYW5pbWF0aW9uLXN0YWdlLylcbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBpcyBpbnRlbmRlZCB0byBiZSB1c2VkIGFzIGEgcHJvZ3JhbW1hdGljIHJlbmRlcmluZyBzdXJmYWNlIGZvclxuICogY29tcG9uZW50cyB3aGljaCB3YW50IHRvIHNob3cgdHJhbnNpdGlvbmFsIGVmZmVjdHMuXG4gKlxuICogVGhlIGNvbXBvbmVudCB1c2VzIHRoZSBbU2VsZWN0aW9uQW5pbWF0aW9uXSguLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL2RvY3MvU2VsZWN0aW9uQW5pbWF0aW9uLm1kKVxuICogbWl4aW4sIHdoaWNoIGluIHR1cm4gdXNlcyB0aGUgV2ViIEFuaW1hdGlvbnMgQVBJLiBGb3IgdXNlIG9uIGJyb3dzZXJzIHdoaWNoXG4gKiBkbyBub3Qgc3VwcG9ydCB0aGF0IEFQSSBuYXRpdmVseSwgeW91IHdpbGwgbmVlZCB0byBsb2FkIHRoZVxuICogW1dlYiBBbmltYXRpb25zIHBvbHlmaWxsXShodHRwczovL2dpdGh1Yi5jb20vd2ViLWFuaW1hdGlvbnMvd2ViLWFuaW1hdGlvbnMtanMpLlxuICpcbiAqIEZvciBhIHNpbXBsZXIgY29tcG9uZW50IHRoYXQgZXhoaWJpdHMgb25seSBhIHNsaWRpbmcgZWZmZWN0LCBidXQgZG9lcyBub3RcbiAqIHJlcXVpcmUgdGhlIFdlYiBBbmltYXRpb25zIEFQSSwgc2VlIFtiYXNpYy1zbGlkaW5nLXZpZXdwb3J0XSguLi9iYXNpYy1zbGlkaW5nLXZpZXdwb3J0KS5cbiAqXG4gKiBAZXh0ZW5kcyBFbGVtZW50QmFzZVxuICogQG1peGVzIENvbnRlbnRBc0l0ZW1zXG4gKiBAbWl4ZXMgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudFxuICogQG1peGVzIFNlbGVjdGlvbkFuaW1hdGlvblxuICogQG1peGVzIFNlbGVjdGlvbkFyaWFBY3RpdmVcbiAqIEBtaXhlcyBTaW5nbGVTZWxlY3Rpb25cbiAqL1xuY2xhc3MgQW5pbWF0aW9uU3RhZ2UgZXh0ZW5kcyBiYXNlIHtcblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBpZiAoc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2spIHsgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTsgfVxuICAgIHRoaXMuc2VsZWN0aW9uUmVxdWlyZWQgPSB0cnVlO1xuICB9XG5cbiAgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBgXG4gICAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgOjpzbG90dGVkKCopIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICBgO1xuICB9XG5cbn1cblxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2Jhc2ljLWFuaW1hdGlvbi1zdGFnZScsIEFuaW1hdGlvblN0YWdlKTtcbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvY3JlYXRlU3ltYm9sJztcbmltcG9ydCBFbGVtZW50QmFzZSBmcm9tICcuLi8uLi9iYXNpYy1lbGVtZW50LWJhc2Uvc3JjL0VsZW1lbnRCYXNlJztcbmltcG9ydCBDb250ZW50Rmlyc3RDaGlsZFRhcmdldCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Db250ZW50Rmlyc3RDaGlsZFRhcmdldCc7XG5pbXBvcnQgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50JztcbmltcG9ydCBEaXJlY3Rpb25TZWxlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlyZWN0aW9uU2VsZWN0aW9uJztcbmltcG9ydCBLZXlib2FyZCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9LZXlib2FyZCc7XG5pbXBvcnQgS2V5Ym9hcmREaXJlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvS2V5Ym9hcmREaXJlY3Rpb24nO1xuaW1wb3J0IFNpbmdsZVNlbGVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TaW5nbGVTZWxlY3Rpb24nO1xuaW1wb3J0IFRhcmdldEluQ29sbGVjdGl2ZSBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9UYXJnZXRJbkNvbGxlY3RpdmUnO1xuaW1wb3J0IFRhcmdldFNlbGVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9UYXJnZXRTZWxlY3Rpb24nO1xuXG5cbi8vIFN5bWJvbHMgZm9yIHByaXZhdGUgZGF0YSBtZW1iZXJzIG9uIGFuIGVsZW1lbnQuXG5jb25zdCBtb3VzZWRvd25MaXN0ZW5lclN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnbW91c2Vkb3duTGlzdGVuZXInKTtcbmNvbnN0IG1vdXNlbW92ZUxpc3RlbmVyU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdtb3VzZW1vdmVMaXN0ZW5lcicpO1xuY29uc3QgbGFzdE1vdXNlWFN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnbGFzdE1vdXNlWCcpO1xuY29uc3QgbGFzdE1vdXNlWVN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnbGFzdE1vdXNlWScpO1xuY29uc3QgbW91c2VUaW1lb3V0U3ltYm9sID0gY3JlYXRlU3ltYm9sKCdtb3VzZVRpbWVvdXQnKTtcblxuXG5sZXQgYmFzZSA9IEVsZW1lbnRCYXNlLmNvbXBvc2UoXG4gIENvbnRlbnRGaXJzdENoaWxkVGFyZ2V0LFxuICBEaXJlY3Rpb25TZWxlY3Rpb24sXG4gIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQsXG4gIEtleWJvYXJkLFxuICBLZXlib2FyZERpcmVjdGlvbixcbiAgU2luZ2xlU2VsZWN0aW9uLFxuICBUYXJnZXRJbkNvbGxlY3RpdmUsXG4gIFRhcmdldFNlbGVjdGlvblxuKTtcblxuLyoqXG4gKiBDb21wb25lbnQgd2hpY2ggYWRkcyBwcm9taW5lbnQgbGVmdCBhbmQgcmlnaHQgYXJyb3cgYnV0dG9ucyB0byBhIHdyYXBwZWRcbiAqIGNoaWxkIHN1Y2ggYXMgYSBjYXJvdXNlbC5cbiAqXG4gKiBZb3UgY2FuIHNlZSBhIFtsaXZlIGRlbW9dKGh0dHA6Ly9iYXNpY3dlYmNvbXBvbmVudHMub3JnL2Jhc2ljLXdlYi1jb21wb25lbnRzL3BhY2thZ2VzL2Jhc2ljLWNhcm91c2VsL2Nhcm91c2VsV2l0aEFycm93cy5odG1sKVxuICogb2YgdGhpcyBjb21wb25lbnQgYXBwbGllZCB0byBhIGNhcm91c2VsLlxuICpcbiAqIENsaWNraW5nIHRoZSBsZWZ0L3JpZ2h0IGJ1dHRvbnMgc2VsZWN0cyB0aGUgcHJldmlvdXMvbmV4dCBpdGVtLlxuICpcbiAqIFR5cGljYWwgdXNhZ2U6XG4gKlxuICogICAgIDxiYXNpYy1hcnJvdy1zZWxlY3Rpb24+XG4gKiAgICAgICA8YmFzaWMtY2Fyb3VzZWw+XG4gKiAgICAgICAgIC4uLiBpbWFnZXMsIGV0Yy4gLi4uXG4gKiAgICAgICA8L2Jhc2ljLWNhcm91c2VsPlxuICogICAgIDwvYmFzaWMtYXJyb3ctc2VsZWN0aW9uPlxuICpcbiAqIEJ5IGRlZmF1bHQsIHRoZSBhcnJvdyBidXR0b25zIGFyZSBzaG93biBvbiBkZXZpY2VzIHdpdGggYSBtb3VzZSBvciBtb3VzZS1saWtlXG4gKiBwb2ludGluZyBkZXZpY2UuIFRoZXkgYXJlIG5vdCBzaG93biBvbiBhIHRvdWNoLWNhcGFibGUgZGV2aWNlIHVubGVzcyBtb3VzZVxuICogbW92ZW1lbnQgaXMgZGV0ZWN0ZWQuIFRvIGNhdXNlIHRoZSBidXR0b25zIHRvIGFsd2F5cyBhcHBlYXIsIGFwcGx5IHRoZVxuICogJ3Nob3dBcnJvd3MnIENTUyBjbGFzcy5cbiAqXG4gKiBAZXh0ZW5kcyBFbGVtZW50QmFzZVxuICogQG1peGVzIENvbnRlbnRGaXJzdENoaWxkVGFyZ2V0XG4gKiBAbWl4ZXMgRGlyZWN0aW9uU2VsZWN0aW9uXG4gKiBAbWl4ZXMgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudFxuICogQG1peGVzIEtleWJvYXJkXG4gKiBAbWl4ZXMgS2V5Ym9hcmREaXJlY3Rpb25cbiAqIEBtaXhlcyBTaW5nbGVTZWxlY3Rpb25cbiAqIEBtaXhlcyBUYXJnZXRJbkNvbGxlY3RpdmVcbiAqIEBtaXhlcyBUYXJnZXRTZWxlY3Rpb25cbiAqL1xuY2xhc3MgQXJyb3dTZWxlY3Rpb24gZXh0ZW5kcyBiYXNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy4kLmJ1dHRvbkxlZnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICB0aGlzLnNlbGVjdFByZXZpb3VzKCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9KTtcbiAgICB0aGlzLiQuYnV0dG9uUmlnaHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICB0aGlzLnNlbGVjdE5leHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pO1xuICAgIGFzc3VtZUJ1dHRvbkZvY3VzKHRoaXMsIHRoaXMuJC5idXR0b25MZWZ0KTtcbiAgICBhc3N1bWVCdXR0b25Gb2N1cyh0aGlzLCB0aGlzLiQuYnV0dG9uUmlnaHQpO1xuICB9XG5cbiAgZ2V0IGNhblNlbGVjdE5leHQoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmNhblNlbGVjdE5leHQ7XG4gIH1cbiAgc2V0IGNhblNlbGVjdE5leHQoY2FuU2VsZWN0TmV4dCkge1xuICAgIGlmICgnY2FuU2VsZWN0TmV4dCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuY2FuU2VsZWN0TmV4dCA9IGNhblNlbGVjdE5leHQ7IH1cbiAgICBpZiAodGhpcy4kKSB7XG4gICAgICB0aGlzLiQuYnV0dG9uUmlnaHQuZGlzYWJsZWQgPSAhY2FuU2VsZWN0TmV4dDtcbiAgICB9XG4gIH1cblxuICBnZXQgY2FuU2VsZWN0UHJldmlvdXMoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmNhblNlbGVjdFByZXZpb3VzO1xuICB9XG4gIHNldCBjYW5TZWxlY3RQcmV2aW91cyhjYW5TZWxlY3RQcmV2aW91cykge1xuICAgIGlmICgnY2FuU2VsZWN0UHJldmlvdXMnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLmNhblNlbGVjdFByZXZpb3VzID0gY2FuU2VsZWN0UHJldmlvdXM7IH1cbiAgICBpZiAodGhpcy4kKSB7XG4gICAgICB0aGlzLiQuYnV0dG9uTGVmdC5kaXNhYmxlZCA9ICFjYW5TZWxlY3RQcmV2aW91cztcbiAgICB9XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBpZiAoc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2spIHsgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTsgfVxuXG4gICAgaWYgKCF0aGlzLmNsYXNzTGlzdC5jb250YWlucygnc2hvd0Fycm93cycpKSB7XG4gICAgICAvLyBEZXRlcm1pbmUgd2hldGhlciB3ZSBzaG91bGQgc2hvdyBhcnJvdyBidXR0b25zIG9yIG5vdC5cbiAgICAgIGlmIChkZXZpY2VTdXBwb3J0c1RvdWNoKCkpIHtcbiAgICAgICAgLy8gQSB0b3VjaCBkZXZpY2UgbWlnaHQgYWxzbyBzdXBwb3J0IGEgbW91c2UsIGJ1dCB3ZSBjYW4ndCBrbm93IHdoZXRoZXJcbiAgICAgICAgLy8gdGhlcmUncyBhY3R1YWxseSBhIG1vdXNlIHVudGlsIHdlIGhlYXIgZnJvbSBpdC5cbiAgICAgICAgbGlzdGVuRm9yTW91c2UodGhpcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUaGUgZGV2aWNlIGRvZXNuJ3Qgc3VwcG9ydCB0b3VjaCwgc28gYXNzdW1lIGl0IGhhcyBhIG1vdXNlLlxuICAgICAgICBzaG93QXJyb3dzKHRoaXMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldCBkZWZhdWx0cygpIHtcbiAgICBsZXQgZGVmYXVsdHMgPSBzdXBlci5kZWZhdWx0cyB8fCB7fTtcbiAgICBkZWZhdWx0cy5uYXZpZ2F0aW9uQXhpcyA9ICdob3Jpem9udGFsJztcbiAgICByZXR1cm4gZGVmYXVsdHM7XG4gIH1cblxuICBzZWxlY3RlZEl0ZW1DaGFuZ2VkKCkge1xuICAgIGlmIChzdXBlci5zZWxlY3RlZEl0ZW1DaGFuZ2VkKSB7IHN1cGVyLnNlbGVjdGVkSXRlbUNoYW5nZWQoKTsgfVxuICAgIC8vIEhBQ0s6IEZvcmNlIGFuIHVwZGF0ZSBvZiB0aGUgc2V0IG9mIHBvc3NpYmxlIG5hdmlnYXRpb25zLlxuICAgIHRoaXMuaXRlbXNDaGFuZ2VkKCk7XG4gIH1cblxuICAvKlxuICAgKiBUaGUgdGVtcGxhdGUgdXNlcyB0aGUgY2hldnJvbi1sZWZ0IGFuZCBjaGV2cm9uLXJpZ2h0IFNWRyBpY29ucyBmcm9tXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9Qb2x5bWVyRWxlbWVudHMvaXJvbi1pY29ucy9ibG9iL21hc3Rlci9pcm9uLWljb25zLmh0bWwuXG4gICAqL1xuICBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgfVxuXG4gICAgICAjY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAtd2Via2l0LWZsZXg6IDE7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICB9XG5cbiAgICAgICNjb250YWluZXIgOjpzbG90dGVkKCopIHtcbiAgICAgICAgLXdlYmtpdC1mbGV4OiAxO1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgfVxuXG4gICAgICAubmF2aWdhdGlvbkJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICAgICAgZmlsbDogY3VycmVudENvbG9yO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7IC8qIFJFVklFVzogQWNjZXNzaWJpbGl0eSBzaG91bGQgYmUgcHJvdmlkZWQgYnkgb3RoZXIgZWxlbWVudHMuICovXG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXM7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICB9XG5cbiAgICAgIC5uYXZpZ2F0aW9uQnV0dG9uOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgICAubmF2aWdhdGlvbkJ1dHRvbjphY3RpdmU6bm90KDpkaXNhYmxlZCkge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XG4gICAgICB9XG4gICAgICAubmF2aWdhdGlvbkJ1dHRvbjpkaXNhYmxlZCB7XG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KDpub3QoLnNob3dBcnJvd3MpKSAubmF2aWdhdGlvbkJ1dHRvbiB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgIH1cblxuICAgICAgLm5hdmlnYXRpb25CdXR0b24gLmljb24ge1xuICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgIHdpZHRoOiA0OHB4O1xuICAgICAgfVxuXG4gICAgICAvKiBPdmVybGF5IHZhcmlhbnQgKi9cbiAgICAgIDpob3N0KC5vdmVybGF5KSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgICAgIDpob3N0KC5vdmVybGF5KSAubmF2aWdhdGlvbkJ1dHRvbiB7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICB9XG4gICAgICA6aG9zdCgub3ZlcmxheSkgI2J1dHRvbkxlZnQge1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgfVxuICAgICAgOmhvc3QoLm92ZXJsYXkpICNidXR0b25SaWdodCB7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgfVxuICAgICAgOmhvc3QoLm92ZXJsYXkpIC5uYXZpZ2F0aW9uQnV0dG9uOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgICAgfVxuICAgICAgOmhvc3QoLm92ZXJsYXkpIC5uYXZpZ2F0aW9uQnV0dG9uOmFjdGl2ZTpub3QoOmRpc2FibGVkKSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgICAgIH1cbiAgICAgIDpob3N0KC5vdmVybGF5KSAubmF2aWdhdGlvbkJ1dHRvbjpkaXNhYmxlZCB7XG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8IS0tXG4gICAgICBBY2Nlc3NpYmlsaXR5IG5vdGU6IHNpbmNlIHRoZSBuYXZpZ2F0aW9uIG9mZmVyZWQgYnkgdGhlIGFycm93IGJ1dHRvbnMgc2hvdWxkXG4gICAgICBiZSByZWR1bmRhbnQgKHRoYXQgaXMsIHRoZXJlIHNob3VsZCBiZSBvdGhlciB3YXlzIG9mIG5hdmlnYXRpbmcgdGhlIGxpc3QpLFxuICAgICAgd2UgbWFyayB0aGUgYnV0dG9uIGFzIGFyaWEtaGlkZGVuIHNvIHRoYXQgYXNzaXN0aXZlIGRldmljZXMgaWdub3JlIHRoZW0uXG4gICAgICAtLT5cbiAgICAgIDxidXR0b24gaWQ9XCJidXR0b25MZWZ0XCIgY2xhc3M9XCJuYXZpZ2F0aW9uQnV0dG9uXCIgZGlzYWJsZWQgdGFiaW5kZXg9XCItMVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICA8c3ZnIGNsYXNzPVwiaWNvblwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWQgbWVldFwiPlxuICAgICAgICAgIDxnIGlkPVwiY2hldnJvbi1sZWZ0XCI+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTE1LjQxIDcuNDFMMTQgNmwtNiA2IDYgNiAxLjQxLTEuNDFMMTAuODMgMTJ6XCIvPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxkaXYgaWQ9XCJjb250YWluZXJcIiByb2xlPVwibm9uZVwiPlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gaWQ9XCJidXR0b25SaWdodFwiIGNsYXNzPVwibmF2aWdhdGlvbkJ1dHRvblwiIGRpc2FibGVkIHRhYmluZGV4PVwiLTFcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgPHN2ZyBjbGFzcz1cImljb25cIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkIG1lZXRcIj5cbiAgICAgICAgICA8ZyBpZD1cImNoZXZyb24tcmlnaHRcIj5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTAgNkw4LjU5IDcuNDEgMTMuMTcgMTJsLTQuNTggNC41OUwxMCAxOGw2LTZ6XCIvPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2J1dHRvbj5cbiAgICBgO1xuICB9XG5cbn1cblxuXG4vKlxuICogQnkgZGVmYXVsdCwgYSBidXR0b24gd2lsbCBhbHdheXMgdGFrZSBmb2N1cyBvbiBtb3VzZWRvd24uIEZvciB0aGlzIGNvbXBvbmVudCxcbiAqIHdlIHdhbnQgdG8gb3ZlcnJpZGUgdGhhdCBiZWhhdmlvciwgc3VjaCB0aGF0IGEgbW91c2Vkb3duIG9uIGEgYnV0dG9uIGtlZXBzXG4gKiB0aGUgZm9jdXMgb24gdGhlIG91dGVyIGNvbXBvbmVudC5cbiAqL1xuZnVuY3Rpb24gYXNzdW1lQnV0dG9uRm9jdXMoZWxlbWVudCwgYnV0dG9uKSB7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBldmVudCA9PiB7XG4gICAgLy8gR2l2ZW4gdGhlIG91dGVyIGVsZW1lbnQgZm9jdXMgaWYgaXQgZG9lc24ndCBhbHJlYWR5IGhhdmUgaXQuXG4gICAgbGV0IG91dGVybW9zdCA9IGVsZW1lbnQuY29sbGVjdGl2ZS5vdXRlcm1vc3RFbGVtZW50O1xuICAgIGlmIChvdXRlcm1vc3QpIHtcbiAgICAgIG91dGVybW9zdC5mb2N1cygpO1xuICAgIH1cbiAgICAvLyBQcmV2ZW50IHRoZSBkZWZhdWx0IGZvY3VzLW9uLW1vdXNlZG93biBiZWhhdmlvci5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9KTtcbn1cblxuXG5mdW5jdGlvbiBkZXZpY2VTdXBwb3J0c1RvdWNoKCkge1xuICByZXR1cm4gJ29udG91Y2hzdGFydCcgaW4gd2luZG93IHx8XG4gICAgICAod2luZG93LkRvY3VtZW50VG91Y2ggJiYgZG9jdW1lbnQgaW5zdGFuY2VvZiB3aW5kb3cuRG9jdW1lbnRUb3VjaCk7XG59XG5cblxuLy8gV2UgdHJ5IHRvIGRldGVjdCB0aGUgcHJlc2VuY2Ugb2YgYSBtb3VzZSBieSBsaXN0ZW5pbmcgZm9yIG1vdXNlbW92ZSBldmVudHNcbi8vIHdoaWNoIGFyZSAqbm90KiB0aGUgcmVzdWx0IG9mIGEgbW91c2Vkb3duLiBPbiBhIHRvdWNoIGRldmljZSwgYSB0YXAgb24gdGhlXG4vLyBwYWdlIHdpbGwgZ2VuZXJhdGUgYSBmYWtlIG1vdXNlbW92ZSwgZm9sbG93ZWQgYnkgYSBtb3VzZWRvd24uIFdlIGRvbid0IHdhbnRcbi8vIHRvIHJlc3BvbmQgdG8gdGhvc2UgZmFrZSBtb3VzZW1vdmUgZXZlbnRzLiBUbyBkaXNjcmltaW5hdGUgYmV0d2VlbiBmYWtlIGFuZFxuLy8gcmVhbCBtb3VzZW1vdmUgZXZlbnRzLCB3aGVuIHdlIGdldCBhIG1vdXNlbW92ZSBldmVudCwgd2Ugd2FpdCBmb3IgYSBiaXQgdG9cbi8vIHNlZSBpZiB0aGUgc2FtZSBsb2NhdGlvbiBpcyByZXBvcnRlZCBhcyB0aGUgbG9jYXRpb24gb2YgYSBzdWJzZXF1ZW50XG4vLyBtb3VzZWRvd24uXG5mdW5jdGlvbiBsaXN0ZW5Gb3JNb3VzZShlbGVtZW50KSB7XG5cbiAgZWxlbWVudFttb3VzZWRvd25MaXN0ZW5lclN5bWJvbF0gPSBldmVudCA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coYG1vdXNlZG93biAke2V2ZW50LnBhZ2VYfSwgJHtldmVudC5wYWdlWX1gKTtcbiAgICBpZiAoZWxlbWVudFttb3VzZVRpbWVvdXRTeW1ib2xdKSB7XG4gICAgICBjbGVhclRpbWVvdXQoZWxlbWVudFttb3VzZVRpbWVvdXRTeW1ib2xdKTtcbiAgICB9XG4gICAgZWxlbWVudFtsYXN0TW91c2VYU3ltYm9sXSA9IGV2ZW50LnBhZ2VYO1xuICAgIGVsZW1lbnRbbGFzdE1vdXNlWVN5bWJvbF0gPSBldmVudC5wYWdlWTtcbiAgfTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGVsZW1lbnRbbW91c2Vkb3duTGlzdGVuZXJTeW1ib2xdKTtcblxuICBlbGVtZW50W21vdXNlbW92ZUxpc3RlbmVyU3ltYm9sXSA9IGV2ZW50ID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhgc2V0dGluZyB0aW1lb3V0YCk7XG4gICAgLy8gUG9zdHBvbmUgY2hlY2tpbmcgdGhlIG1vdXNlbW92ZSBsb2NhdGlvbiB0byBnaXZlIHRoZSBtb3VzZWRvd24gZXZlbnQgYVxuICAgIC8vIGNoYW5jZSB0byBmaXJlLiBUaGUgMjUwIG1zIGRlbGF5IGlzIGp1c3QgZ3Vlc3N3b3JrOyBhIHNob3J0ZXIgZGVsYXlcbiAgICAvLyBkb2Vzbid0IHNlZW0gdG8gd29yay5cbiAgICBlbGVtZW50W21vdXNlVGltZW91dFN5bWJvbF0gPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGBwb3N0cG9uZWQgbW91c2Vtb3ZlICR7ZXZlbnQucGFnZVh9LCAke2V2ZW50LnBhZ2VZfWApO1xuICAgICAgaWYgKGVsZW1lbnRbbGFzdE1vdXNlWFN5bWJvbF0gIT0gbnVsbCAmJiBldmVudC5wYWdlWCAhPT0gZWxlbWVudFtsYXN0TW91c2VYU3ltYm9sXSB8fFxuICAgICAgICAgIGVsZW1lbnRbbGFzdE1vdXNlWVN5bWJvbF0gIT0gbnVsbCAmJiBldmVudC5wYWdlWSAhPT0gZWxlbWVudFtsYXN0TW91c2VZU3ltYm9sXSkge1xuICAgICAgICAvLyBtb3VzZW1vdmUgZXZlbnQgd2FzIGF0IGEgbG9jYXRpb24gb3RoZXIgdGhhbiB0aGUgbGFzdCBtb3VzZWRvd24sXG4gICAgICAgIC8vIGFuZCBoZW5jZSBtb3N0IGxpa2VseSBhIHJlYWwgbW91c2Vtb3ZlIGV2ZW50LlxuICAgICAgICBtb3VzZURldGVjdGVkKGVsZW1lbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudFtsYXN0TW91c2VYU3ltYm9sXSA9IGV2ZW50LnBhZ2VYO1xuICAgICAgICBlbGVtZW50W2xhc3RNb3VzZVlTeW1ib2xdID0gZXZlbnQucGFnZVk7XG4gICAgICB9XG4gICAgfSwgMjUwKTtcbiAgfTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGVsZW1lbnRbbW91c2Vtb3ZlTGlzdGVuZXJTeW1ib2xdKTtcbn1cblxuXG5mdW5jdGlvbiBtb3VzZURldGVjdGVkKGVsZW1lbnQpIHtcbiAgLy8gY29uc29sZS5sb2coYG1vdXNlIGRldGVjdGVkYCk7XG4gIHNob3dBcnJvd3MoZWxlbWVudCk7XG5cbiAgLy8gV2UgY2FuIHN0b3AgbGlzdGVuaW5nIGZvciBtb3VzZSBldmVudHMgbm93LlxuICBpZiAoZWxlbWVudFttb3VzZVRpbWVvdXRTeW1ib2xdKSB7XG4gICAgY2xlYXJUaW1lb3V0KGVsZW1lbnRbbW91c2VUaW1lb3V0U3ltYm9sXSk7XG4gIH1cbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGVsZW1lbnRbbW91c2Vkb3duTGlzdGVuZXJTeW1ib2xdKTtcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGVsZW1lbnRbbW91c2Vtb3ZlTGlzdGVuZXJTeW1ib2xdKTtcbiAgZWxlbWVudFttb3VzZWRvd25MaXN0ZW5lclN5bWJvbF0gPSBudWxsO1xuICBlbGVtZW50W21vdXNlbW92ZUxpc3RlbmVyU3ltYm9sXSA9IG51bGw7XG59XG5cblxuZnVuY3Rpb24gc2hvd0Fycm93cyhlbGVtZW50KSB7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2hvd0Fycm93cycpO1xufVxuXG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYmFzaWMtYXJyb3ctc2VsZWN0aW9uJywgQXJyb3dTZWxlY3Rpb24pO1xuZXhwb3J0IGRlZmF1bHQgQXJyb3dTZWxlY3Rpb247XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL2NyZWF0ZVN5bWJvbCc7XG5pbXBvcnQgV3JhcHBlZFN0YW5kYXJkRWxlbWVudCBmcm9tICcuLi8uLi9iYXNpYy13cmFwcGVkLXN0YW5kYXJkLWVsZW1lbnQvc3JjL1dyYXBwZWRTdGFuZGFyZEVsZW1lbnQnO1xuaW1wb3J0IERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCc7XG5pbXBvcnQgR2VuZXJpYyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9HZW5lcmljJztcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3QgbGluZUhlaWdodFN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnbGluZUhlaWdodCcpO1xuY29uc3QgbWluaW11bVJvd3NTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ21pbmltdW1Sb3dzJyk7XG5jb25zdCB2YWx1ZVRyYWNrc0NvbnRlbnRTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3ZhbHVlVHJhY2tzQ29udGVudCcpO1xuXG5sZXQgYmFzZSA9IFdyYXBwZWRTdGFuZGFyZEVsZW1lbnQud3JhcCgndGV4dGFyZWEnKS5jb21wb3NlKFxuICBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50LFxuICBHZW5lcmljXG4pO1xuXG4vKipcbiAqIEEgdGV4dCBhcmVhIHRoYXQgbWFrZXMgaXRzZWxmIGJpZyBlbm91Z2ggdG8gc2hvdyBpdHMgY29udGVudC5cbiAqXG4gKiBbTGl2ZSBkZW1vXShodHRwOi8vYmFzaWN3ZWJjb21wb25lbnRzLm9yZy9iYXNpYy13ZWItY29tcG9uZW50cy9wYWNrYWdlcy9iYXNpYy1hdXRvc2l6ZS10ZXh0YXJlYS8pXG4gKlxuICogVGhpcyB0ZXh0IGlucHV0IGNvbXBvbmVudCBpcyB1c2VmdWwgaW4gc2l0dWF0aW9ucyB3aGVyZSB5b3Ugd2FudCB0byBhc2sgdGhlXG4gKiB1c2VyIHRvIGVudGVyIGFzIG11Y2ggdGV4dCBhcyB0aGV5IHdhbnQsIGJ1dCBkb24ndCB3YW50IHRvIHRha2UgdXAgYSBsb3Qgb2ZcbiAqIHJvb20gb24gdGhlIHBhZ2UuXG4gKlxuICogVGhlIGNvbXBvbmVudCB3b3JrcyBieSBjb3B5aW5nIHRoZSB0ZXh0IHRvIGFuIGludmlzaWJsZSBlbGVtZW50IHdoaWNoIHdpbGxcbiAqIGF1dG9tYXRpY2FsbHkgZ3JvdyBpbiBzaXplOyB0aGUgZXhwYW5kaW5nIGNvcHkgd2lsbCBleHBhbmQgdGhlIGNvbnRhaW5lcixcbiAqIHdoaWNoIGluIHR1cm4gd2lsbCB2ZXJ0aWNhbGx5IHN0cmV0Y2ggdGhlIHRleHQgYXJlYSB0byBtYXRjaC5cbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBnZW5lcmFsbHkgZXhwb3NlcyBhbGwgdGhlIHNhbWUgYXR0cmlidXRlcy9wcm9wZXJ0aWVzIGFzIGFcbiAqIHN0YW5kYXJkIEhUTUwgYDx0ZXh0YXJlYT5gLlxuICpcbiAqIEBtaXhlcyBHZW5lcmljXG4gKiBAbWl4ZXMgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudFxuICovXG5jbGFzcyBBdXRvc2l6ZVRleHRhcmVhIGV4dGVuZHMgYmFzZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuaW5uZXIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBldmVudCA9PiB7XG4gICAgICB2YWx1ZUNoYW5nZWQodGhpcyk7XG4gICAgfSk7XG4gICAgdGhpcy5pbm5lci5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGV2ZW50ID0+IHtcbiAgICAgIGtleXByZXNzKHRoaXMsIGV2ZW50KTtcbiAgICB9KTtcblxuICAgIC8vIFNldCBkZWZhdWx0cy5cbiAgICBpZiAodHlwZW9mIHRoaXMubWluaW11bVJvd3MgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLm1pbmltdW1Sb3dzID0gdGhpcy5kZWZhdWx0cy5taW5pbXVtUm93cztcbiAgICB9XG5cbiAgICAvLyBBIHN0YW5kYXJkIHRleHRhcmVhIGhhcyBpdHMgdmFsdWUgdHJhY2sgaXRzIHRleHRDb250ZW50IGJ5IGRlZmF1bHQuXG4gICAgLy8gVGhhdCBpcywgY2hhbmdlcyB0byB0ZXh0Q29udGVudCB1cGRhdGUgdGhlIHZhbHVlLiBIb3dldmVyLCBpZiBhbiBhdHRlbXB0XG4gICAgLy8gaXMgbWFkZSB0byBjaGFuZ2UgdGhlIHZhbHVlIGRpcmVjdGx5LCB0aGlzIGJyZWFrcyB0aGUgYXV0b21hdGljIHRyYWNraW5nLlxuICAgIC8vIEZyb20gdGhhdCBwb2ludCBvbiwgY2hhbmdlcyB0byB0ZXh0Q29udGVudCBkbyAqbm90KiB1cGRhdGUgdGhlIHZhbHVlLlxuICAgIHRoaXNbdmFsdWVUcmFja3NDb250ZW50U3ltYm9sXSA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogUmVzaXplIHRoZSBlbGVtZW50IHN1Y2ggdGhhdCB0aGUgdGV4dGFyZWEgY2FuIGV4YWN0bHkgY29udGFpbiBpdHMgY29udGVudC5cbiAgICogQnkgZGVmYXVsdCwgdGhpcyBtZXRob2QgaXMgaW52b2tlZCB3aGVuZXZlciB0aGUgdGV4dCBjb250ZW50IGNoYW5nZXMuXG4gICAqL1xuICBhdXRvU2l6ZSgpIHtcbiAgICAvLyBJZiB3ZSBoYWQgc3BlY3VsYXRpdmVseSBhZGRlZCBhbiBleHRyYSBsaW5lIGJlY2F1c2Ugb2YgYW4gRW50ZXIga2V5cHJlc3MsXG4gICAgLy8gd2UgY2FuIG5vdyBoaWRlIHRoZSBleHRyYSBsaW5lLlxuICAgIHRoaXMuJC5leHRyYUxpbmUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgIC8vIFdlIHJlc2l6ZSBieSBjb3B5aW5nIHRoZSB0ZXh0YXJlYSBjb250ZW50cyB0byB0aGUgZWxlbWVudCBpdHNlbGY7IHRoZVxuICAgIC8vIHRleHQgd2lsbCB0aGVuIGFwcGVhciAodmlhIDxzbG90PikgaW5zaWRlIHRoZSBpbnZpc2libGUgZGl2LiBJZlxuICAgIC8vIHdlJ3ZlIHNldCB0aGluZ3MgdXAgY29ycmVjdGx5LCB0aGlzIG5ldyBjb250ZW50IHNob3VsZCB0YWtlIHVwIHRoZSBzYW1lXG4gICAgLy8gYW1vdW50IG9mIHJvb20gYXMgdGhlIHNhbWUgdGV4dCBpbiB0aGUgdGV4dGFyZWEuIFVwZGF0aW5nIHRoZSBlbGVtZW50J3NcbiAgICAvLyBjb250ZW50IGFkanVzdHMgdGhlIGVsZW1lbnQncyBzaXplLCB3aGljaCBpbiB0dXJuIHdpbGwgbWFrZSB0aGUgdGV4dGFyZWFcbiAgICAvLyB0aGUgY29ycmVjdCBoZWlnaHQuXG4gICAgdGhpcy4kLnRleHRDb3B5LnRleHRDb250ZW50ID0gdGhpcy52YWx1ZTtcbiAgfVxuXG4gIC8vIE5vcm1hbGx5IHRoZSB2YWx1ZSBvZiB0aGUgZWxlbWVudCBpcyBzZXQgYW5kIHJlYWQgdGhyb3VnaCBpdHMgdmFsdWVcbiAgLy8gYXR0cmlidXRlLiBBcyBhIGNvbnZlbmllbmNlLCBhbmQgdG8gbWlycm9yIHN0YW5kYXJkIHRleHRhcmVhIGJlaGF2aW9yLCBpdFxuICAvLyBpcyBwb3NzaWJsZSB0byBzZXQgdGhlIGNvbnRlbnQgb2YgdGhlIHRleHRhcmVhIGJ5IGluY2x1ZGluZyB0ZXh0IGJldHdlZW5cbiAgLy8gdGhlIG9wZW5pbmcgYW5kIGNsb3NpbmcgdGFnLiBUaGlzIHdvcmtzIG9ubHkgaW4gb25lIGRpcmVjdGlvbjogc2V0dGluZyB0aGVcbiAgLy8gdGFnIGNvbnRlbnQgdXBkYXRlcyB0aGUgdGV4dGFyZWEsIGJ1dCB1c2VyIGVkaXRzIGluIHRoZSB0ZXh0YXJlYSBhcmUgbm90XG4gIC8vIHJlZmxlY3RlZCBpbiB0aGUgdGFnIGNvbnRlbnQuIFdlIGNhcHR1cmUgdGhlIHZhbHVlIG9mIHRoZSBpbml0aWFsIHRleHRcbiAgLy8gY29udGVudCBpbiBvcmRlciB0byBzZXQgdGhlIHZhbHVlIHByb3BlcnR5IGR1cmluZyB0aGUgY3JlYXRlIGV2ZW50LlxuICAvLyBUT0RPOiBOb3JtYWxpemUgaW5kZW50YXRpb24gaW4gdGhlIHRleHQgY29udGVudC4gVXNlcnMgd2lsbCBvZnRlbiB3YW50IHRvXG4gIC8vIGluZGVudCB0aGUgbWFya3VwIHNvIHRoYXQgaXQgbG9va3MgcHJldHR5LiBXZSBzaG91bGQgZGV0ZWN0IHRoZSBpbmRlbnRhdGlvblxuICAvLyBsZXZlbCBhbmQgcmVtb3ZlIGFueSBpbmRlbnRhdGlvbiB3aGl0ZXNwYWNlXG4gIC8vIFRPRE86IENvbnNpZGVyIHVzaW5nIGNvbnRlbnQgaW5uZXJIVE1MIHJhdGhlciB0aGFuIHBsYWluIHRleHQuIFRoZSBuYXRpdmVcbiAgLy8gdGV4dGFyZWEgZWxlbWVudCB3aWxsIGluY2x1ZGUgSFRNTCwgbm90IGp1c3QgdGhlIHN0cmlwcGVkIHRleHQsIGFzIGluaXRpYWxcbiAgLy8gdmFsdWUgcHJvcGVydHkgdGV4dC5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKSB7IHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7IH1cbiAgICBpbml0aWFsaXplV2hlblJlbmRlcmVkKHRoaXMpO1xuICB9XG5cbiAgY29udGVudENoYW5nZWQoKSB7XG4gICAgaWYgKHN1cGVyLmNvbnRlbnRDaGFuZ2VkKSB7IHN1cGVyLmNvbnRlbnRDaGFuZ2VkKCk7IH1cbiAgICBpZiAodGhpc1t2YWx1ZVRyYWNrc0NvbnRlbnRTeW1ib2xdKSB7XG4gICAgICBsZXQgdGV4dCA9IGdldFRleHRDb250ZW50KHRoaXMpO1xuICAgICAgdGhpcy5pbm5lci52YWx1ZSA9IHVuZXNjYXBlSHRtbCh0ZXh0KTtcbiAgICAgIHZhbHVlQ2hhbmdlZCh0aGlzKTtcbiAgICB9XG4gIH1cblxuICBnZXQgZGVmYXVsdHMoKSB7XG4gICAgbGV0IGRlZmF1bHRzID0gc3VwZXIuZGVmYXVsdHMgfHwge307XG4gICAgZGVmYXVsdHMubWluaW11bVJvd3MgPSAxO1xuICAgIHJldHVybiBkZWZhdWx0cztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHRoZSBtaW5pbXVtIG51bWJlciBvZiByb3dzIHNob3duLiBUaGlzIGlzIHNpbWlsYXIgdG8gdGhlIHJvd3NcbiAgICogYXR0cmlidXRlIG9uIGEgc3RhbmRhcmQgdGV4dGFyZWEsIGJ1dCBiZWNhdXNlIHRoaXMgZWxlbWVudCBjYW4gZ3JvdywgaXNcbiAgICogZXhwcmVzc2VkIGFzIGEgbWluaW11bSByYXRoZXIgdGhhbiBhIGZpeGVkIG51bWJlci5cbiAgICpcbiAgICogQnkgZGVmYXVsdCwgdGhpcyBwcm9wZXJ0eSBpcyAxLCBzbyB3aGVuIGVtcHR5LCB0aGUgdGV4dCBhcmVhIHdpbGwgYmUgYVxuICAgKiBzaW5nbGUgbGluZSB0YWxsLiBUaGF0J3MgZWZmaWNpZW50IGluIHRlcm1zIG9mIHRoZSBzcGFjZSBpdCBjb25zdW1lcywgYnV0XG4gICAqIHVudGlsIHRoZSB1c2VyIGludGVyYWN0cyB3aXRoIHRoZSBlbGVtZW50LCB0aGV5IG1heSBub3QgcmVhbGl6ZSB0aGV5IGNhblxuICAgKiBlbnRlciBtdWx0aXBsZSBsaW5lcyBvZiB0ZXh0LiBTZXR0aW5nIHRoZSBwcm9wZXJ0eSB0byBhIHZhbHVlIGhpZ2hlciB0aGFuIDFcbiAgICogd2lsbCBzaWduYWwgdG8gdGhlIHVzZXIgdGhhdCB0aGV5IGNhbiBlbnRlciBtdWx0aXBsZSBsaW5lcyBvZiBhIHRleHQuXG4gICAqXG4gICAqIEJ5IHNldHRpbmcgdGhpcyBwcm9wZXJ0eSwgeW91IGNhbiBhbHNvIGNvbW11bmljYXRlIHRvIHRoZSB1c2VyIHNvbWUgc2Vuc2VcbiAgICogb2YgaG93IG11Y2ggdGV4dCB5b3UncmUgZXhwZWN0aW5nIHRoZW0gdG8gcHJvdmlkZS4gRm9yIGV4YW1wbGUsIG9uIGFcbiAgICogZmVlZGJhY2sgZm9ybSwgYXNraW5nIHRoZSB1c2VyIHRvIGVudGVyIHRoZWlyIGZlZWRiYWNrIGluIGEgc2luZ2xlLWxpbmVcbiAgICogdGV4dCBib3ggaW1wbGllcyB5b3UgZG9uJ3QgcmVhbGx5IHdhbnQgdGhlbSB0byBlbnRlciBtdWNoIHRleHQg4oCUIGV2ZW4gaWZcbiAgICogdGhlIHRleHQgYm94IHdpbGwgZ3JvdyB3aGVuIHRoZXkgdHlwZS4gQnkgc2V0dGluZyB0aGlzIHRvIGEgdmFsdWUgbGlrZSxcbiAgICogc2F5LCAxMCByb3dzLCB5b3UgY2FuIHNpZ25hbCB0aGF0IHlvdSdyZSBmdWxseSBleHBlY3RpbmcgdGhlbSB0byBlbnRlciBtb3JlXG4gICAqIHRleHQuXG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBkZWZhdWx0IDFcbiAgICovXG4gIGdldCBtaW5pbXVtUm93cygpIHtcbiAgICByZXR1cm4gdGhpc1ttaW5pbXVtUm93c1N5bWJvbF07XG4gIH1cbiAgc2V0IG1pbmltdW1Sb3dzKHZhbHVlKSB7XG4gICAgdGhpc1ttaW5pbXVtUm93c1N5bWJvbF0gPSBwYXJzZUludCh2YWx1ZSk7XG4gICAgaWYgKHRoaXNbbGluZUhlaWdodFN5bWJvbF0pIHtcbiAgICAgIHNldE1pbmltdW1IZWlnaHQodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBgXG4gICAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuXG4gICAgICAjYXV0b1NpemVDb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIC8qXG4gICAgICAgKiBFbnN1cmUgYm90aCB0aGUgdGV4dCBhcmVhIGFuZCBjb3B5IGVuZCB1cCB3aXRoIHRoZSBlbGVtZW50J3Mgb3duIGZvbnRcbiAgICAgICAqIG1ldHJpY3MsIHNvIHRoYXQgdGV4dCB3aWxsIGxheSBvdXQgdGhlIHNhbWUgaW4gYm90aCBvZiB0aGVtLlxuICAgICAgICovXG4gICAgICAjaW5uZXIsXG4gICAgICAjY29weUNvbnRhaW5lciB7XG4gICAgICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgICAgZm9udC1zdHlsZTogaW5oZXJpdDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG5cbiAgICAgICNpbm5lciB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByZXNpemU6IG5vbmU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIEBhcHBseSgtLXRleHRhcmVhKTtcbiAgICAgIH1cblxuICAgICAgI2NvcHlDb250YWluZXIge1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDsgLyogU28gbGluZXMgd3JhcCAqL1xuICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7IC8qIFNvIHdlIGJyZWFrIGF0IHdvcmQgYm91bmRhcmllcyB3aGVuIHBvc3NpYmxlICovXG4gICAgICB9XG5cbiAgICAgICNjb250ZW50Q29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDwhLS1cbiAgICAgIFRoZSBpbnZpc2libGUgY29weUNvbnRhaW5lciBjb250YWlucyBhbiBleHRyYVNwYWNlIGVsZW1lbnQgdGhhdCBlbnN1cmVzIHRoYXQsXG4gICAgICBldmVuIGlmIHRoZSBsYXN0IGxpbmUgb2YgdGhlIHRleHRhcmVhIGlzIGJsYW5rLCB0aGVyZSB3aWxsIGJlIHNvbWV0aGluZyBpbiB0aGVcbiAgICAgIGxpbmUgdGhhdCBmb3JjZXMgdGhlIHRleHQgY29weSB0byBncm93IGJ5IGEgbGluZS4gVGhpcyBleHRyYSBzcGFjZSBpcyBhIHRoaW5cbiAgICAgIHNwYWNlLCB0byByZWR1Y2UgdGhlIGFtb3VudCBieSB3aGljaCB0aGUgdGV4dCBjb3B5IHdpbGwgcHJlbWF0dXJlbHkgZ3Jvdy5cblxuICAgICAgVGhlIGNvcHlDb250YWluZXIgYWxzbyBjb250YWlucyBhbiBleHRyYUxpbmUgZWxlbWVudCBleGlzdHMgdG8gZGVhbCB3aXRoIHRoZVxuICAgICAgZmFjdCB0aGF0LCBpZiB0aGUgdXNlciBwcmVzc2VzIHRoZSBFbnRlciBrZXkgZG93biwgdGhlIHRleHRhcmVhJ3MgY29udGVudCB3aWxsXG4gICAgICBtb3ZlIGJlZm9yZSB0aGUgY29tcGxldGUgdGV4dCBpcyBhdmFpbGFibGUuIFNlZSBub3RlcyBhdCBfa2V5cHJlc3MuXG5cbiAgICAgIExhc3RseSwgd2UgcHV0IHRoZSBIVE1MIGNvbnRlbnQgZWxlbWVudCBpbnRvIGEgc2VwYXJhdGUgY29udGFpbmVyIHNvIHdlIGNhblxuICAgICAgaGlkZSBpdC4gV2UgbmVlZCB0byBoYXZlIGEgY29udGVudCBlbGVtZW50IHNvbWV3aGVyZSBpbiB0aGUgdGVtcGxhdGUgdG9cbiAgICAgIGNvbnZpbmNlIFBvbHltZXIgdGhhdCB3ZSBjYXJlIGFib3V0IHRoZSBjb250ZW50IGluIHRoZSBTaGFkeSBET00gY2FzZSAtLVxuICAgICAgd2l0aG91dCB0aGF0IGNvbnRlbnQgZWxlbWVudCwgU2hhZHkgRE9NIHdpbGwgY29uY2x1ZGUgdGhlIGVsZW1lbnQgZG9lc24ndFxuICAgICAgbmVlZCBpdHMgbGlnaHQgRE9NIGNvbnRlbnQsIGFuZCB3aWxsIHRocm93IGl0IGF3YXkuXG4gICAgICAtLT5cbiAgICAgIDxkaXYgaWQ9XCJhdXRvU2l6ZUNvbnRhaW5lclwiPlxuICAgICAgICA8dGV4dGFyZWEgaWQ9XCJpbm5lclwiPjwvdGV4dGFyZWE+XG4gICAgICAgIDxkaXYgaWQ9XCJjb3B5Q29udGFpbmVyXCI+PHNwYW4gaWQ9XCJ0ZXh0Q29weVwiPjwvc3Bhbj48c3BhbiBpZD1cImV4dHJhU3BhY2VcIj4mdGhpbnNwOzwvc3Bhbj48ZGl2IGlkPVwiZXh0cmFMaW5lXCI+Jm5ic3A7PC9kaXY+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgaWQ9XCJjb250ZW50Q29udGFpbmVyXCI+XG4gICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRleHQgY3VycmVudGx5IHNob3duIGluIHRoZSB0ZXh0YXJlYS5cbiAgICpcbiAgICogTm90ZSB0aGF0IHRoZSB0ZXh0IHNob3duIGluIHRoZSB0ZXh0YXJlYSBjYW4gYWxzbyBiZSB1cGRhdGVkIGJ5IGNoYW5naW5nXG4gICAqIHRoZSBlbGVtZW50J3MgaW5uZXJIVE1ML3RleHRDb250ZW50LiBIb3dldmVyLCBpZiB0aGUgdmFsdWUgcHJvcGVydHkgaXNcbiAgICogZXhwbGljaXRseSBzZXQsIHRoYXQgd2lsbCBvdmVycmlkZSB0aGUgaW5uZXJIVE1ML3RleHRDb250ZW50LlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmlubmVyLnZhbHVlO1xuICB9XG4gIHNldCB2YWx1ZSh0ZXh0KSB7XG4gICAgLy8gRXhwbGljaXRseSBzZXR0aW5nIHZhbHVlIGJyZWFrcyBhdXRvbWF0aWMgdXBkYXRlIG9mIHZhbHVlIGZyb20gY29udGVudC5cbiAgICB0aGlzW3ZhbHVlVHJhY2tzQ29udGVudFN5bWJvbF0gPSBmYWxzZTtcbiAgICB0aGlzLmlubmVyLnZhbHVlID0gdGV4dDtcbiAgICB2YWx1ZUNoYW5nZWQodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgd2hlbiB0aGUgdXNlciB0eXBlcyBpbiB0aGUgdGV4dGFyZWEuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBBdXRvc2l6ZVRleHRhcmVhXG4gICAqIEBldmVudCBjaGFuZ2VcbiAgICovXG59XG5cblxuZnVuY3Rpb24gZ2V0VGV4dENvbnRlbnQoZWxlbWVudCkge1xuICBsZXQgdGV4dCA9IGVsZW1lbnQuZGlzdHJpYnV0ZWRUZXh0Q29udGVudDtcblxuICAvLyBUcmltIHRoZSB0ZXh0LlxuICAvLyBUaGlzIGlzIG5vbi1zdGFuZGFyZCB0ZXh0YXJlYSBiZWhhdmlvci4gQSBzdGFuZGFyZCB0ZXh0YXJlYSB3aWxsIHRyaW0gdGhlXG4gIC8vIGZpcnN0IGNoYXJhY3RlciBpZiBpdCdzIGEgbmV3bGluZSwgYnV0IHRoYXQncyBpdC4gSG93ZXZlciwgYXV0aG9ycyB3aWxsXG4gIC8vIHdhbnQgdG8gYmUgYWJsZSB0byBwbGFjZSB0aGUgb3BlbmluZyBhbmQgY2xvc2luZyB0YWdzIG9uIHRoZWlyIG93biBsaW5lcy5cbiAgLy8gU28gaXQgc2VlbXMgbW9yZSBoZWxwZnVsIHRvIHRyaW0gd2hpdGVzcGFjZSBvbiBlaXRoZXIgc2lkZS5cbiAgdGV4dCA9IHRleHQudHJpbSgpO1xuXG4gIHJldHVybiB0ZXh0O1xufVxuXG5cbi8vIFNldCB1cCBvbmNlIHRoaXMgY29tcG9uZW50IGhhcyBiZWVuIHJlbmRlcmVkLlxuLy9cbi8vIE9uIENocm9tZSAoYXMgb2YgMTAvMjMvMTQpIGF0IGxlYXN0LCBpZiBhbiBpbnN0YW5jZSBpZiB0aGlzIGNvbXBvbmVudCBpc1xuLy8gYWRkZWQgZHluYW1pY2FsbHksIGl0cyBhdHRhY2hlZCBoYW5kbGVyIG1heSB0cmlnZ2VyIGJlZm9yZSBpdHMgYmVlblxuLy8gcmVuZGVyZWQuIFRoYXQgd291bGQgY2F1c2Ugb3VyIGxheW91dCBjYWxjdWxhdGlvbnMgdG8gYmUgaW5jb3JyZWN0LlxuLy9cbmZ1bmN0aW9uIGluaXRpYWxpemVXaGVuUmVuZGVyZWQoZWxlbWVudCkge1xuXG4gIC8vIElmIHRoZSBjb21wb25lbnQgaGFzIGJlZW4gcmVuZGVyZWQsIG91ciBoZWlnaHQgc2hvdWxkIGJlIG5vbnplcm8uXG4gIGlmIChlbGVtZW50LmNsaWVudEhlaWdodCA9PT0gMCkge1xuICAgIC8vIE5vdCByZW5kZXJlZCB5ZXQ6IHdhaXQgYSBiaXQgYmVmb3JlIHRyeWluZyBhZ2Fpbi5cbiAgICBzZXRUaW1lb3V0KCgpID0+IGluaXRpYWxpemVXaGVuUmVuZGVyZWQoZWxlbWVudCksIDEwKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBJZiB3ZSByZWFjaCB0aGlzIHBvaW50LCB0aGUgY29tcG9uZW50J3MgZWxlbWVudHMgc2hvdWxkIGJ5IHN0eWxlZC5cblxuICAvLyBGb3IgYXV0by1zaXppbmcgdG8gd29yaywgd2UgbmVlZCB0aGUgdGV4dCBjb3B5IHRvIGhhdmUgdGhlIHNhbWUgYm9yZGVyLFxuICAvLyBwYWRkaW5nLCBhbmQgb3RoZXIgcmVsZXZhbnQgY2hhcmFjdGVyaXN0aWNzIGFzIHRoZSBvcmlnaW5hbCB0ZXh0IGFyZWEuXG4gIC8vIFNpbmNlIHRob3NlIGFzcGVjdHMgYXJlIGFmZmVjdGVkIGJ5IENTUywgd2UgaGF2ZSB0byB3YWl0IHVudGlsIHRoZVxuICAvLyBlbGVtZW50IGlzIGluIHRoZSBkb2N1bWVudCBiZWZvcmUgd2UgY2FuIHVwZGF0ZSB0aGUgdGV4dCBjb3B5LlxuICBsZXQgdGV4dEJveFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LmlubmVyKTtcbiAgbGV0IGNvcHlDb250YWluZXJTdHlsZSA9IGVsZW1lbnQuJC5jb3B5Q29udGFpbmVyLnN0eWxlO1xuICBjb3B5Q29udGFpbmVyU3R5bGUuYm9yZGVyQm90dG9tU3R5bGUgID0gdGV4dEJveFN0eWxlLmJvcmRlckJvdHRvbVN0eWxlO1xuICBjb3B5Q29udGFpbmVyU3R5bGUuYm9yZGVyQm90dG9tV2lkdGggID0gdGV4dEJveFN0eWxlLmJvcmRlckJvdHRvbVdpZHRoO1xuICBjb3B5Q29udGFpbmVyU3R5bGUuYm9yZGVyTGVmdFN0eWxlICAgID0gdGV4dEJveFN0eWxlLmJvcmRlckxlZnRTdHlsZTtcbiAgY29weUNvbnRhaW5lclN0eWxlLmJvcmRlckxlZnRXaWR0aCAgICA9IHRleHRCb3hTdHlsZS5ib3JkZXJMZWZ0V2lkdGg7XG4gIGNvcHlDb250YWluZXJTdHlsZS5ib3JkZXJSaWdodFN0eWxlICAgPSB0ZXh0Qm94U3R5bGUuYm9yZGVyUmlnaHRTdHlsZTtcbiAgY29weUNvbnRhaW5lclN0eWxlLmJvcmRlclJpZ2h0V2lkdGggICA9IHRleHRCb3hTdHlsZS5ib3JkZXJSaWdodFdpZHRoO1xuICBjb3B5Q29udGFpbmVyU3R5bGUuYm9yZGVyVG9wU3R5bGUgICAgID0gdGV4dEJveFN0eWxlLmJvcmRlclRvcFN0eWxlO1xuICBjb3B5Q29udGFpbmVyU3R5bGUuYm9yZGVyVG9wV2lkdGggICAgID0gdGV4dEJveFN0eWxlLmJvcmRlclRvcFdpZHRoO1xuICBjb3B5Q29udGFpbmVyU3R5bGUucGFkZGluZ0JvdHRvbSAgICAgID0gdGV4dEJveFN0eWxlLnBhZGRpbmdCb3R0b207XG4gIGNvcHlDb250YWluZXJTdHlsZS5wYWRkaW5nTGVmdCAgICAgICAgPSB0ZXh0Qm94U3R5bGUucGFkZGluZ0xlZnQ7XG4gIGNvcHlDb250YWluZXJTdHlsZS5wYWRkaW5nUmlnaHQgICAgICAgPSB0ZXh0Qm94U3R5bGUucGFkZGluZ1JpZ2h0O1xuICBjb3B5Q29udGFpbmVyU3R5bGUucGFkZGluZ1RvcCAgICAgICAgID0gdGV4dEJveFN0eWxlLnBhZGRpbmdUb3A7XG5cbiAgLy8gVXNlIHRoZSBleHRyYUxpbmUgbWVtYmVyIHRvIGdhdWdlIHRoZSBleHBlY3RlZCBoZWlnaHQgb2YgYSBzaW5nbGUgbGluZSBvZlxuICAvLyB0ZXh0LiBXZSBjYW4ndCB1c2UgbGluZUhlaWdodCwgYmVjYXVzZSB0aGF0IGNhbiBiZSByZXBvcnRlZCBhcyBcIm5vcm1hbFwiLFxuICAvLyBhbmQgd2Ugd2FudCB0byBrbm93IHRoZSBhY3R1YWwgcGl4ZWwgaGVpZ2h0LlxuICBlbGVtZW50LiQuZXh0cmFMaW5lLnN0eWxlLmRpc3BsYXkgPSAnaW5oZXJpdCc7XG4gIGVsZW1lbnRbbGluZUhlaWdodFN5bWJvbF0gPSBlbGVtZW50LiQuZXh0cmFMaW5lLmNsaWVudEhlaWdodDtcblxuICAvLyBOb3cgdGhhdCB3ZSBrbm93IHRoZSBsaW5lIGhlaWdodCwgd2UgY2FuIGhpZGUgdGhlIGV4dHJhIGxpbmUuXG4gIGVsZW1lbnQuJC5leHRyYUxpbmUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAvLyBVc2UgdGhlIGxpbmUgaGVpZ2h0IGluIGNvbmp1bmN0aW9uIHdpdGggbWluaW11bVJvd3MgdG8gZXN0YWJsaXNoIHRoZVxuICAvLyBvdmVyYWxsIG1pbmltdW0gaGVpZ2h0IG9mIHRoZSBjb21wb25lbnQuXG4gIHNldE1pbmltdW1IZWlnaHQoZWxlbWVudCk7XG59XG5cblxuLy8gU3BlY3VsYXRpdmVseSBhZGQgYSBsaW5lIHRvIG91ciBjb3B5IG9mIHRoZSB0ZXh0LiBXZSdyZSBub3Qgc3VyZSB3aGF0IHRoZVxuLy8gZXhhY3QgZWZmZWN0IG9mIHR5cGluZyB0aGlzIGNoYXJhY3RlciB3aWxsIGJlLCBhbmQgYXQgdGhpcyBwb2ludCBpdCdzIG5vdFxuLy8gcmVmbGVjdGVkIHlldCBpbiB0aGUgdGV4dGFyZWEncyBjb250ZW50LiBXZSBzcGVjdWxhdGUgdGhhdCBpdCB3aWxsIGFkZCBhXG4vLyBsaW5lIHRvIHRoZSB0ZXh0IGFuZCBzaXplIGFjY29yZGluZ2x5LiAoT25lIG90aGVyIHBvc3NpYmlsaXR5IGlzIHRoYXQgdGhlXG4vLyB1c2VyJ3MgcmVwbGFjaW5nIGEgc2VsZWN0ZWQgY2h1bmsgb2YgdGV4dCB3aXRoIGEgbmV3bGluZS4pIEluIGFueSBldmVudCxcbi8vIG9uY2Ugd2UgZ2V0IHRoZSBrZXl1cCBvciBjaGFuZ2UgZXZlbnQsIHdlJ2xsIG1ha2UgYW55IGZpbmFsIGFkanVzdG1lbnRzLlxuLy9cbi8vIFRPRE86IElmIHRoZSB1c2VyIGhvbGRzIGRvd24gdGhlIEVudGVyIGtleSwgd2UgY2FuIGdldCBhIGJ1bmNoIG9mIGtleXByZXNzXG4vLyBldmVudHMgYmVmb3JlIHdlIGdldCBrZXl1cC4gVGhpcyBjYXVzZXMgZmxpY2tlci4gSW5zdGVhZCBvZiBzdXBwb3J0aW5nIG9ubHlcbi8vIGEgc2luZ2xlIGV4dHJhIHNwZWN1bGF0aXZlIGxpbmUsIHdlIHNob3VsZCBncm93IHRoZSBzcGVjdWxhdGl2ZSBlbGVtZW50IHRvXG4vLyBjb250YWluIHRoZSBudW1iZXIgb2YgRW50ZXIga2V5cHJlc3NlcyB3ZSd2ZSByZWNlaXZlZC5cbmZ1bmN0aW9uIGtleXByZXNzKGVsZW1lbnQsIGV2ZW50KSB7XG4gIGlmIChldmVudC5rZXlDb2RlID09PSAxMyAvKiBFbnRlciAqLykge1xuICAgIGVsZW1lbnQuJC5leHRyYUxpbmUuc3R5bGUuZGlzcGxheSA9ICdpbmhlcml0JztcbiAgfVxufVxuXG5cbi8vIFNldHRpbmcgdGhlIG1pbmltdW1Sb3dzIGF0dHJpYnV0ZSB0cmFuc2xhdGVzIGludG8gc2V0dGluZyB0aGUgbWluaW11bVxuLy8gaGVpZ2h0IG9uIHRoZSB0ZXh0IGNvcHkgY29udGFpbmVyLlxuZnVuY3Rpb24gc2V0TWluaW11bUhlaWdodChlbGVtZW50KSB7XG4gIGxldCBjb3B5Q29udGFpbmVyID0gZWxlbWVudC4kLmNvcHlDb250YWluZXI7XG4gIGxldCBvdXRlckhlaWdodCA9IGNvcHlDb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICBsZXQgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGNvcHlDb250YWluZXIpO1xuICBsZXQgcGFkZGluZ1RvcCA9IHBhcnNlRmxvYXQoc3R5bGUucGFkZGluZ1RvcCk7XG4gIGxldCBwYWRkaW5nQm90dG9tID0gcGFyc2VGbG9hdChzdHlsZS5wYWRkaW5nQm90dG9tKTtcbiAgbGV0IGlubmVySGVpZ2h0ID0gY29weUNvbnRhaW5lci5jbGllbnRIZWlnaHQgLSBwYWRkaW5nVG9wIC0gcGFkZGluZ0JvdHRvbTtcbiAgbGV0IGJvcmRlcnNQbHVzUGFkZGluZyA9IG91dGVySGVpZ2h0IC0gaW5uZXJIZWlnaHQ7XG4gIGxldCBtaW5IZWlnaHQgPSAoZWxlbWVudC5taW5pbXVtUm93cyAqIGVsZW1lbnRbbGluZUhlaWdodFN5bWJvbF0pICsgYm9yZGVyc1BsdXNQYWRkaW5nO1xuICBtaW5IZWlnaHQgPSBNYXRoLmNlaWwobWluSGVpZ2h0KTtcbiAgY29weUNvbnRhaW5lci5zdHlsZS5taW5IZWlnaHQgPSBtaW5IZWlnaHQgKyAncHgnO1xufVxuXG5cbmZ1bmN0aW9uIHVuZXNjYXBlSHRtbChodG1sKSB7XG4gIHJldHVybiBodG1sXG4gICAgLnJlcGxhY2UoLyZhbXA7L2csICcmJylcbiAgICAucmVwbGFjZSgvJmx0Oy9nLCAnPCcpXG4gICAgLnJlcGxhY2UoLyZndDsvZywgXCI+XCIpXG4gICAgLnJlcGxhY2UoLyZxdW90Oy9nLCAnXFxcIicpXG4gICAgLnJlcGxhY2UoLyYjMDM5Oy9nLCAnXFwnJyk7XG59XG5cblxuLypcbiAqIEhhbmRsZSBhIGNoYW5nZSBpbiB0aGUgZWxlbWVudCdzIHZhbHVlIHByb3BlcnR5LlxuICovXG5mdW5jdGlvbiB2YWx1ZUNoYW5nZWQoZWxlbWVudCkge1xuICBlbGVtZW50LmF1dG9TaXplKCk7XG4gIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3ZhbHVlLWNoYW5nZWQnKSk7XG59XG5cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdiYXNpYy1hdXRvc2l6ZS10ZXh0YXJlYScsIEF1dG9zaXplVGV4dGFyZWEpO1xuZXhwb3J0IGRlZmF1bHQgQXV0b3NpemVUZXh0YXJlYTtcbiIsImltcG9ydCBFbGVtZW50QmFzZSBmcm9tICcuLi8uLi9iYXNpYy1lbGVtZW50LWJhc2Uvc3JjL0VsZW1lbnRCYXNlJztcblxuaW1wb3J0IENvbnRlbnRBc0l0ZW1zIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NvbnRlbnRBc0l0ZW1zJztcbmltcG9ydCBEaXJlY3Rpb25TZWxlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlyZWN0aW9uU2VsZWN0aW9uJztcbmltcG9ydCBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50IGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQnO1xuaW1wb3J0IEZyYWN0aW9uYWxTZWxlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRnJhY3Rpb25hbFNlbGVjdGlvbic7XG5pbXBvcnQgS2V5Ym9hcmQgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvS2V5Ym9hcmQnO1xuaW1wb3J0IEtleWJvYXJkRGlyZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0tleWJvYXJkRGlyZWN0aW9uJztcbmltcG9ydCBTZWxlY3Rpb25BcmlhQWN0aXZlIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NlbGVjdGlvbkFyaWFBY3RpdmUnO1xuaW1wb3J0IFNlbGVjdGlvbkFuaW1hdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TZWxlY3Rpb25BbmltYXRpb24nO1xuaW1wb3J0IFNpbmdsZVNlbGVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TaW5nbGVTZWxlY3Rpb24nO1xuaW1wb3J0IFN3aXBlRGlyZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1N3aXBlRGlyZWN0aW9uJztcbmltcG9ydCBUYXJnZXRJbkNvbGxlY3RpdmUgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvVGFyZ2V0SW5Db2xsZWN0aXZlJztcbmltcG9ydCBUcmFja3BhZERpcmVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9UcmFja3BhZERpcmVjdGlvbic7XG5cblxubGV0IGJhc2UgPSBFbGVtZW50QmFzZS5jb21wb3NlKFxuICBDb250ZW50QXNJdGVtcyxcbiAgRGlyZWN0aW9uU2VsZWN0aW9uLFxuICBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50LFxuICBGcmFjdGlvbmFsU2VsZWN0aW9uLFxuICBLZXlib2FyZCxcbiAgS2V5Ym9hcmREaXJlY3Rpb24sXG4gIFNlbGVjdGlvbkFuaW1hdGlvbixcbiAgU2VsZWN0aW9uQXJpYUFjdGl2ZSxcbiAgU2luZ2xlU2VsZWN0aW9uLFxuICBTd2lwZURpcmVjdGlvbixcbiAgVGFyZ2V0SW5Db2xsZWN0aXZlLFxuICBUcmFja3BhZERpcmVjdGlvblxuKTtcblxuXG4vKipcbiAqIExldHMgdGhlIHVzZXIgbmF2aWdhdGUgbGF0ZXJhbGx5IHRocm91Z2ggYSBzZXF1ZW5jZSBvZiBjaGlsZCBlbGVtZW50cy5cbiAqXG4gKiBiYXNpYy1jYXJvdXNlbCBpcyBhbiBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgY2Fyb3VzZWwgdXNlciBpbnRlcmZhY2UgcGF0dGVybixcbiAqIGNvbW1vbmx5IHVzZWQgZm9yIG5hdmlnYXRpbmcgYmV0d2VlbiBpbWFnZXMsIHBhZ2VzLCBhbmQgb3RoZXIgZWxlbWVudHMuIFRoaXNcbiAqIHBhdHRlcm4gcHJlc2VudHMgdGhlIHVzZXIgd2l0aCBhIGxpbmVhciBzZXF1ZW5jZSBvZiBlbGVtZW50cywgb25seSBvbmUgb2ZcbiAqIHdoaWNoIGlzIHNob3duIGF0IGEgdGltZS4gVGhlIHVzZXIgY2FuIG5hdmlnYXRlIHRvIHRoZSBuZXh0L3ByZXZpb3VzIGVsZW1lbnRcbiAqIHdpdGggYSB2YXJpZXR5IG9mIGlucHV0IG1ldGhvZHMuXG4gKlxuICogW0xpdmUgZGVtb10oaHR0cDovL2Jhc2ljd2ViY29tcG9uZW50cy5vcmcvYmFzaWMtd2ViLWNvbXBvbmVudHMvcGFja2FnZXMvYmFzaWMtY2Fyb3VzZWwvKVxuICpcbiAqIFRoZSBhYm92ZSBkZW1vIGFkZHMgdGhlIG9wdGlvbmFsXG4gKiBbYmFzaWMtYXJyb3ctc2VsZWN0aW9uXSguLi9iYXNpYy1hcnJvdy1zZWxlY3Rpb24pIGFuZFxuICogW2Jhc2ljLXBhZ2UtZG90c10oLi4vYmFzaWMtcGFnZS1kb3RzKSBjb21wb25lbnRzLiBZb3UgY2FuIGFsc28gdmlldyBhXG4gKiBbcGxhaW4gZGVtb10oaHR0cDovL2Jhc2ljd2ViY29tcG9uZW50cy5vcmcvYmFzaWMtd2ViLWNvbXBvbmVudHMvcGFja2FnZXMvYmFzaWMtY2Fyb3VzZWwvcGxhaW4uaHRtbClcbiAqIGRlbW8uXG4gKlxuICogYmFzaWMtY2Fyb3VzZWwgdXNlcyBpdHMgY2hpbGRyZW4gYXMgdGhlIGVsZW1lbnRzIHRoZSB1c2VyIHdpbGwgbmF2aWdhdGVcbiAqIHRocm91Z2guIEluIGEgdHlwaWNhbCB1c2UsIGEgYmFzaWMtY2Fyb3VzZWwgY2FuIGJlIHVzZWQgdG8gbmF2aWdhdGUgYmV0d2VlbiBhXG4gKiBzZXF1ZW5jZSBvZiBpbWFnZXM6XG4gKlxuICogICAgIDxiYXNpYy1jYXJvdXNlbD5cbiAqICAgICAgIDxpbWcgc3JjPVwiaW1hZ2UxLmpwZ1wiPlxuICogICAgICAgPGltZyBzcmM9XCJpbWFnZTIuanBnXCI+XG4gKiAgICAgICA8aW1nIHNyYz1cImltYWdlMy5qcGdcIj5cbiAqICAgICA8L2Jhc2ljLWNhcm91c2VsPlxuICpcbiAqIFRoZSBjaGlsZCBlbGVtZW50cyBjYW4gYmUgb2YgYW55IHR5cGUg4oCUwqB0aGV5IGFyZSBub3QgcmVzdHJpY3RlZCB0byBpbWFnZXMuXG4gKlxuICogVGhpcyBjb21wb25lbnQgYXR0ZW1wdHMgdG8gbWVldCB0aGUgW0dvbGQgU3RhbmRhcmQgZm9yIHdlYiBjb21wb25lbnRzXVxuICogKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJjb21wb25lbnRzL2dvbGQtc3RhbmRhcmQvd2lraSkgc28gdGhhdCBpdCBpcyBnZW5lcmFsbHlcbiAqIGFzIGZsZXhpYmxlIGFuZCByb2J1c3QgYXMgc3RhbmRhcmQgSFRNTCBlbGVtZW50cy4gRm9yIGV4YW1wbGUsIGl0IG1lZXRzIHRoZVxuICogXCJDb250ZW50IENoYW5nZXNcIiBjcml0ZXJpYTogdGhlIGNhcm91c2VsIHdpbGwgYWRhcHQgdG8gbmV3IGNoaWxkIGVsZW1lbnRzXG4gKiBhZGRlZCBvciByZW1vdmVkIGF0IHJ1bnRpbWUuXG4gKlxuICogQ3VycmVudGx5LCB0aGlzIGNvbXBvbmVudCBkb2VzIG5vdCBtZWV0IHRoZSBHb2xkIFN0YW5kYXJkIGNyaXRlcmlhIFwiU2l6ZSB0b1xuICogQ29udGVudFwiLiBBcyBhIHJlc3VsdCwgZm9yIHRoZSB0aW1lIGJlaW5nLCAqKnlvdSBtdXN0IG1hbnVhbGx5IHNldCBhIHNpemUgb25cbiAqIHRoaXMgY29tcG9uZW50KiouIFR3byBhcHByb2FjaGVzIGFyZSB0bzogMSkgc3RyZXRjaCB0aGUgY29tcG9uZW50IGFjcm9zc1xuICogd2hhdGV2ZXIgc3VyZmFjZSBpdCBpcyBjb250YWluZWQgd2l0aGluLCBvciAyKSBzZXQgaXQgdG8gYmUgbGFyZ2VyIHRoYW4gdGhlXG4gKiBsYXJnZXN0IGNoaWxkIGVsZW1lbnQgeW91IHdhbnQgdG8gZGlzcGxheS4gVGhlIGZvcm1lciBhcHByb2FjaCBpcyBtb3JlXG4gKiBjb21tb24sIGFuZCBjYW4gYmUgYWNoaWV2ZWQgd2l0aCBDU1Mgc3R5bGluZyBzdWNoIGFzOlxuICpcbiAqICAgICBodG1sIHtcbiAqICAgICAgIGhlaWdodDogMTAwJTtcbiAqICAgICB9XG4gKlxuICogICAgIGJvZHkge1xuICogICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICogICAgICAgZGlzcGxheTogZmxleDtcbiAqICAgICAgIGhlaWdodDogMTAwJTtcbiAqICAgICAgIG1hcmdpbjogMDtcbiAqICAgICB9XG4gKlxuICogICAgIGJhc2ljLWNhcm91c2VsIHtcbiAqICAgICAgIC13ZWJraXQtZmxleDogMTtcbiAqICAgICAgIGZsZXg6IDE7XG4gKiAgICAgfVxuICpcbiAqIFRoZSBzdGFuZGFyZCBiYXNpYy1jYXJvdXNlbCBjb21wb25lbnQgc3VwcG9ydHMgbmF2aWdhdGlvbiB2aWEgdGhlIGZvbGxvd2luZ1xuICogaW5wdXQgbWV0aG9kczpcbiAqXG4gKiAqIEtleWJvYXJkLiBXaGVuIHRoZSBjYXJvdXNlbCBoYXMgZm9jdXMsIHRoZSB1c2VyIGNhbiBwcmVzcyBMZWZ0LCBSaWdodCxcbiAqICAgSG9tZSwgb3IgRW5kLiBUaGVzZSBuYXZpZ2F0ZSB0byB0aGUgZXhwZWN0ZWQgZWxlbWVudC5cbiAqICogVG91Y2guIE9uIG1vYmlsZSBhbmQgb3RoZXIgdG91Y2gtZW5hYmxlZCBkZXZpY2VzLCB0aGUgdXNlciBjYW4gZHJhZyBsZWZ0IG9yXG4gKiAgIHJpZ2h0LlxuICogKiBUcmFja3BhZC4gVGhlIHVzZXIgY2FuIHN3aXBlIGxlZnQgb3IgcmlnaHQgb24gYSB0cmFja3BhZCB0byBuYXZpZ2F0ZS5cbiAqXG4gKiBCZWNhdXNlIGNhcm91c2VscyBhcmUgdXNlZCBpbiBhIHdpZGUgdmFyaWV0eSBvZiBjaXJjdW1zdGFuY2VzLCBieSBkZWZhdWx0XG4gKiBiYXNpYy1jYXJvdXNlbCBwcm92aWRlcyBhIG1pbmltYWwgYXBwZWFyYW5jZSBhbmQgbm8gc2VwYXJhdGVseSBpbnRlcmFjdGl2ZVxuICogZWxlbWVudHMgc3VjaCBhcyBhcnJvdyBidXR0b25zIG9uIHRoZSBzaWRlIG9yIGRvdHMgYWxvbmcgdGhlIGJvdHRvbS4gVGhvc2VcbiAqIGVsZW1lbnRzIGNhbiBiZSBhZGRlZCBieSB3cmFwcGluZyBhIGJhc2ljLWNhcm91c2VsIGluIG9wdGlvbmFsIGFjY2Vzc29yaWVzOlxuICpcbiAqICogW2Jhc2ljLWFycm93LXNlbGVjdGlvbl0oLi4vYmFzaWMtYXJyb3ctc2VsZWN0aW9uKS5cbiAqICAgVGhpcyBhZGRzIHByb21pbmVudCBsZWZ0IGFuZCByaWdodCBhcnJvdyBidXR0b25zIG9uIHRoZSBzaWRlIG9mIHRoZSBjYXJvdXNlbC5cbiAqICogW2Jhc2ljLXBhZ2UtZG90c10oLi4vYmFzaWMtcGFnZS1kb3RzKS5cbiAqICAgVGhpcyBhZGRzIGEgc2VyaWVzIG9mIHNtYWxsIGRvdHMgYmVsb3cgdGhlIGNhcm91c2VsIHRvIGluZGljYXRlIHRoZSB1c2VyJ3NcbiAqICAgY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgc2VxdWVuY2UuXG4gKiAqIFtiYXNpYy1zbGlkZXNob3ctdGltZXJdKC4uL2Jhc2ljLXNsaWRlc2hvdy10aW1lcikuXG4gKiAgIEFkdmFuY2VzIHRvIHRoZSBuZXh0IGl0ZW0gb24gYSB0aW1lci5cbiAqICogW2Jhc2ljLXRhYi1zdHJpcF0oLi4vYmFzaWMtdGFiLXN0cmlwKS5cbiAqICAgQWRkcyBhIHN0cmlwIG9mIHRyYWRpdGlvbmFsIHRhYiBidXR0b25zLlxuICpcbiAqIFNlZSB0aG9zZSBjb21wb25lbnRzIGZvciBtb3JlIGRldGFpbHMsIGJ1dCBpbiBnZW5lcmFsIHlvdSBjYW4gY29uc3RydWN0IGFcbiAqIGNvbW1vbiBjYXJvdXNlbCB3aXRoIGJvdGggYXJyb3cgYnV0dG9ucyBhbmQgZG90cyBsaWtlIHNvOlxuICpcbiAqICAgICA8YmFzaWMtYXJyb3ctc2VsZWN0aW9uPlxuICogICAgICAgPGJhc2ljLXBhZ2UtZG90cz5cbiAqICAgICAgICAgPGJhc2ljLWNhcm91c2VsPlxuICogICAgICAgICAgIC4uLiBpbWFnZXMsIGV0Yy4gLi4uXG4gKiAgICAgICAgIDwvYmFzaWMtY2Fyb3VzZWw+XG4gKiAgICAgICA8L2Jhc2ljLXBhZ2UtZG90cz5cbiAqICAgICA8L2Jhc2ljLWFycm93LXNlbGVjdGlvbj5cbiAqXG4gKiBGb3IgdW5pdmVyc2FsIGFjY2VzcywgYmFzaWMtY2Fyb3VzZWwgYXV0b21hdGljYWxseSBhZGRzIGEgdmFyaWV0eSBvZlxuICogW0FSSUFdKGh0dHA6Ly93d3cudzMub3JnL1dBSS9pbnRyby9hcmlhKSBwcm9wZXJ0aWVzIHRvIGl0c2VsZiBhbmQgdG8gY2hpbGRcbiAqIGVsZW1lbnRzLiBUaGlzIGhlbHBzIHVzZXJzIG5hdmlnYXRlIHRoZSBzZXF1ZW5jZSBvZiBlbGVtZW50cyBpbiB0aGUgY2Fyb3VzZWxcbiAqIHVzaW5nIGFzc2lzdGl2ZSB0ZWNobm9sb2dpZXMuXG4gKlxuICogQGV4dGVuZHMgRWxlbWVudEJhc2VcbiAqIEBtaXhlcyBDb250ZW50QXNJdGVtc1xuICogQG1peGVzIERpcmVjdGlvblNlbGVjdGlvblxuICogQG1peGVzIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnRcbiAqIEBtaXhlcyBGcmFjdGlvbmFsU2VsZWN0aW9uXG4gKiBAbWl4ZXMgR2VuZXJpY1xuICogQG1peGVzIEtleWJvYXJkXG4gKiBAbWl4ZXMgS2V5Ym9hcmREaXJlY3Rpb25cbiAqIEBtaXhlcyBTZWxlY3Rpb25BbmltYXRpb25cbiAqIEBtaXhlcyBTZWxlY3Rpb25BcmlhQWN0aXZlXG4gKiBAbWl4ZXMgU2luZ2xlU2VsZWN0aW9uXG4gKiBAbWl4ZXMgU3dpcGVEaXJlY3Rpb25cbiAqIEBtaXhlcyBUYXJnZXRJbkNvbGxlY3RpdmVcbiAqIEBtaXhlcyBUYXJnZXRTZWxlY3Rpb25cbiAqIEBtaXhlcyBUcmFja3BhZERpcmVjdGlvblxuICovXG5jbGFzcyBDYXJvdXNlbCBleHRlbmRzIGJhc2Uge1xuXG4gIGdldCBkZWZhdWx0cygpIHtcbiAgICBsZXQgZGVmYXVsdHMgPSBzdXBlci5kZWZhdWx0cyB8fCB7fTtcbiAgICBkZWZhdWx0cy5uYXZpZ2F0aW9uQXhpcyA9ICdob3Jpem9udGFsJztcbiAgICBkZWZhdWx0cy5zZWxlY3Rpb25BbmltYXRpb25FZmZlY3QgPSAnc2xpZGVXaXRoR2FwJztcbiAgICBkZWZhdWx0cy5zZWxlY3Rpb25SZXF1aXJlZCA9IHRydWU7XG4gICAgcmV0dXJuIGRlZmF1bHRzO1xuICB9XG5cbiAgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBgXG4gICAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICAjY29udGFpbmVyIDo6c2xvdHRlZCgqKSB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgaWQ9XCJjb250YWluZXJcIiByb2xlPVwibm9uZVwiPlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbn1cblxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2Jhc2ljLWNhcm91c2VsJywgQ2Fyb3VzZWwpO1xuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWw7XG4iLCJpbXBvcnQgRWxlbWVudEJhc2UgZnJvbSAnLi4vLi4vYmFzaWMtZWxlbWVudC1iYXNlL3NyYy9FbGVtZW50QmFzZSc7XG5pbXBvcnQgT3BlbkNsb3NlIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL09wZW5DbG9zZSc7XG5cblxuLyoqXG4gKiBBIHBhbmVsIHdoaWNoIGNhbiBiZSBleHBhbmRlZC9jb2xsYXBzZWQgd2l0aCBhbiBhbmltYXRlZCB0cmFuc2l0aW9uLlxuICpcbiAqIFRoaXMgY29tcG9uZW50IGNvbWJpbmVzIHRoZSBPcGVuQ2xvc2UgbWl4aW4gYW5kIGEgc2ltcGxlIENTUyBoZWlnaHRcbiAqIGFuaW1hdGlvbi5cbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBoYW5kbGVzIG9ubHkgdGhlIGR1dGllcyBvZiBjb2xsYXBzaW5nIGFuZCBleHBhbmRpbmcuIEl0IGRvZXNcbiAqIG5vdCBwcm92aWRlIGEgdXNlciBpbnRlcmZhY2UgZm9yIHRoZSB1c2VyIHRvIHRyaWdnZXIgdGhlIGNoYW5nZSBpbiBzdGF0ZTtcbiAqIHlvdSBtdXN0IHByb3ZpZGUgdGhhdCB1c2VyIGludGVyZmFjZSB5b3Vyc2VsZi5cbiAqXG4gKiBAZXh0ZW5kcyBFbGVtZW50QmFzZVxuICogQG1peGVzIE9wZW5DbG9zZVxuICovXG5jbGFzcyBDb2xsYXBzaWJsZVBhbmVsIGV4dGVuZHMgT3BlbkNsb3NlKEVsZW1lbnRCYXNlKSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLiQub3ZlcmZsb3cuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsICgpID0+IHtcbiAgICAgIGlmICghdGhpcy5jbG9zZWQpIHtcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBoYXJkLWNvZGVkIGhlaWdodCB3ZSBhcHBsaWVkIGZvciB0aGUgdHJhbnNpdGlvbiBzbyB0aGF0XG4gICAgICAgIC8vIHRoZSBlbGVtZW50IHdpbGwgcmVmbG93IGNvcnJlY3RseSwgZS5nLiwgb24gd2luZG93IHJlc2l6ZS5cbiAgICAgICAgdGhpcy4kLm92ZXJmbG93LnN0eWxlLmhlaWdodCA9ICcnO1xuICAgICAgfVxuICAgICAgLy8gRW5zdXJlIHRoZSBhbmltYXRpb24gb25seSBwbGF5cyBvbmNlLiBGb3Igc29tZSByZWFzb24sIFNhZmFyaSB3aWxsIHNob3dcbiAgICAgIC8vIHRoZSBhbmltYXRpb24gdHdpY2Ugd2l0aG91dCB0aGlzIGxpbmUsIGV2ZW4gdGhvdWdoIHRoZSByZW5kZXIgZnVuY3Rpb25cbiAgICAgIC8vIGV4cGxpY2l0bHkgcmVtb3ZlcyB0aGlzIGNsYXNzIHdoZW4gaXQgc2V0cyB0aGUgb2xkIGhlaWdodC4gTmVpdGhlclxuICAgICAgLy8gQ2hyb21lIG5vciBGaXJlZm94IHNlZW0gdG8gbmVlZCB0aGlzIGxpbmUuXG4gICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3dUcmFuc2l0aW9uJyk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoY2xvc2luZykge1xuICAgIHN1cGVyLnJlbmRlcihjbG9zaW5nKTtcblxuICAgIGxldCBuYXR1cmFsSGVpZ2h0ID0gdGhpcy4kLmNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgaWYgKG5hdHVyYWxIZWlnaHQgPT09IDApIHtcbiAgICAgIC8vIE1vc3QgbGlrZWx5IGhhdmVuJ3QgaGFkIGEgY2hhbmNlIHRvIHJlbmRlciB5ZXQuXG4gICAgICB0aGlzLiQub3ZlcmZsb3cuc3R5bGUuaGVpZ2h0ID0gY2xvc2luZyA/IDAgOiAnJztcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBXaXRob3V0IGFuaW1hdGluZywgc2V0IHN0YXJ0aW5nIGhlaWdodCBvZiB0cmFuc2l0aW9uLlxuICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnc2hvd1RyYW5zaXRpb24nKTtcbiAgICBsZXQgb2xkSGVpZ2h0ID0gY2xvc2luZyA/IG5hdHVyYWxIZWlnaHQgOiAwO1xuICAgIHRoaXMuJC5vdmVyZmxvdy5zdHlsZS5oZWlnaHQgPSBvbGRIZWlnaHQgKyAncHgnO1xuXG4gICAgLy8gRm9yY2UgYSByZWxheW91dCBzbyB0aGF0IHRoZSBzdGFydGluZyBoZWlnaHQgaXMgYXBwbGllZC5cbiAgICAvLyBUaGlzIGNhbiBiZSBhY2hpZXZlZCBieSByZWFkaW5nIGEgcHJvcGVydHkgbGlrZSBvZmZzZXRIZWlnaHQuXG4gICAgdGhpcy4kLm92ZXJmbG93Lm9mZnNldEhlaWdodDsgLy8ganNoaW50IGlnbm9yZTpsaW5lXG5cbiAgICAvLyBUdXJuIGFuaW1hdGlvbiBvbiwgYW5kIGVuZGluZyBoZWlnaHQgb2YgdHJhbnNpdGlvbi5cbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ3Nob3dUcmFuc2l0aW9uJyk7XG4gICAgbGV0IG5ld0hlaWdodCA9IGNsb3NpbmcgPyAwIDogbmF0dXJhbEhlaWdodDtcbiAgICB0aGlzLiQub3ZlcmZsb3cuc3R5bGUuaGVpZ2h0ID0gbmV3SGVpZ2h0ICsgJ3B4JztcbiAgfVxuXG4gIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gYFxuICAgICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoLnNob3dUcmFuc2l0aW9uKSAjb3ZlcmZsb3cge1xuICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4ycztcbiAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgaWQ9XCJvdmVyZmxvd1wiIHJvbGU9XCJub25lXCI+XG4gICAgICAgIDxkaXYgaWQ9XCJjb250YWluZXJcIiByb2xlPVwibm9uZVwiPlxuICAgICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbn1cblxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2Jhc2ljLWNvbGxhcHNpYmxlLXBhbmVsJywgQ29sbGFwc2libGVQYW5lbCk7XG5leHBvcnQgZGVmYXVsdCBDb2xsYXBzaWJsZVBhbmVsO1xuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuL2NyZWF0ZVN5bWJvbCc7XG5pbXBvcnQgdG9nZ2xlQ2xhc3MgZnJvbSAnLi90b2dnbGVDbGFzcyc7XG5cblxuLy8gTWVtb2l6ZWQgbWFwcyBvZiBhdHRyaWJ1dGUgdG8gcHJvcGVydHkgbmFtZXMgYW5kIHZpY2UgdmVyc2EuXG5jb25zdCBhdHRyaWJ1dGVUb1Byb3BlcnR5TmFtZXMgPSB7fTtcbmNvbnN0IHByb3BlcnR5TmFtZXNUb0F0dHJpYnV0ZXMgPSB7fTtcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3Qgc2FmZVRvU2V0QXR0cmlidXRlc1N5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnc2FmZVRvU2V0QXR0cmlidXRlcycpO1xuY29uc3QgcGVuZGluZ0F0dHJpYnV0ZXNTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3BlbmRpbmdBdHRyaWJ1dGVzJyk7XG5jb25zdCBwZW5kaW5nQ2xhc3Nlc1N5bWJvbCA9IGNyZWF0ZVN5bWJvbCgncGVuZGluZ0NsYXNzZXMnKTtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIEF0dHJpYnV0ZU1hcnNoYWxsaW5nLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggbWFyc2hhbGxzIGF0dHJpYnV0ZXMgdG8gcHJvcGVydGllcyBhbmQgdmljZSB2ZXJzYS5cbiAgICpcbiAgICogSWYgeW91ciBjb21wb25lbnQgZXhwb3NlcyBhIHNldHRlciBmb3IgYSBwcm9wZXJ0eSwgaXQncyBnZW5lcmFsbHkgYSBnb29kXG4gICAqIGlkZWEgdG8gbGV0IGRldnMgdXNpbmcgeW91ciBjb21wb25lbnQgYmUgYWJsZSB0byBzZXQgdGhhdCBwcm9wZXJ0eSBpbiBIVE1MXG4gICAqIHZpYSBhbiBlbGVtZW50IGF0dHJpYnV0ZS4gWW91IGNhbiBjb2RlIHRoYXQgeW91cnNlbGYgYnkgd3JpdGluZyBhblxuICAgKiBgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrYCwgb3IgeW91IGNhbiB1c2UgdGhpcyBtaXhpbiB0byBnZXQgYSBkZWdyZWUgb2ZcbiAgICogYXV0b21hdGljIHN1cHBvcnQuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gaW1wbGVtZW50cyBhbiBgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrYCB0aGF0IHdpbGwgYXR0ZW1wdCB0b1xuICAgKiBjb252ZXJ0IGEgY2hhbmdlIGluIGFuIGVsZW1lbnQgYXR0cmlidXRlIGludG8gYSBjYWxsIHRvIHRoZSBjb3JyZXNwb25kaW5nXG4gICAqIHByb3BlcnR5IHNldHRlci4gQXR0cmlidXRlcyB0eXBpY2FsbHkgZm9sbG93IGh5cGhlbmF0ZWQgbmFtZXMgKFwiZm9vLWJhclwiKSxcbiAgICogd2hlcmVhcyBwcm9wZXJ0aWVzIHR5cGljYWxseSB1c2UgY2FtZWxDYXNlIG5hbWVzIChcImZvb0JhclwiKS4gVGhpcyBtaXhpblxuICAgKiByZXNwZWN0cyB0aGF0IGNvbnZlbnRpb24sIGF1dG9tYXRpY2FsbHkgbWFwcGluZyB0aGUgaHlwaGVuYXRlZCBhdHRyaWJ1dGVcbiAgICogbmFtZSB0byB0aGUgY29ycmVzcG9uZGluZyBjYW1lbENhc2UgcHJvcGVydHkgbmFtZS5cbiAgICpcbiAgICogRXhhbXBsZTogWW91IGRlZmluZSBhIGNvbXBvbmVudCB1c2luZyB0aGlzIG1peGluOlxuICAgKlxuICAgKiAgICAgY2xhc3MgTXlFbGVtZW50IGV4dGVuZHMgQXR0cmlidXRlTWFyc2hhbGxpbmcoSFRNTEVsZW1lbnQpIHtcbiAgICogICAgICAgZ2V0IGZvb0JhcigpIHsgcmV0dXJuIHRoaXMuX2Zvb0JhcjsgfVxuICAgKiAgICAgICBzZXQgZm9vQmFyKHZhbHVlKSB7IHRoaXMuX2Zvb0JhciA9IHZhbHVlOyB9XG4gICAqICAgICB9XG4gICAqICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ215LWVsZW1lbnQnLCBNeUVsZW1lbnQpO1xuICAgKlxuICAgKiBJZiBzb21lb25lIHRoZW4gaW5zdGFudGlhdGVzIHlvdXIgY29tcG9uZW50IGluIEhUTUw6XG4gICAqXG4gICAqICAgICA8bXktZWxlbWVudCBmb28tYmFyPVwiSGVsbG9cIj48L215LWVsZW1lbnQ+XG4gICAqXG4gICAqIFRoZW4sIGFmdGVyIHRoZSBlbGVtZW50IGhhcyBiZWVuIHVwZ3JhZGVkLCB0aGUgYGZvb0JhcmAgc2V0dGVyIHdpbGxcbiAgICogYXV0b21hdGljYWxseSBiZSBpbnZva2VkIHdpdGggdGhlIGluaXRpYWwgdmFsdWUgXCJIZWxsb1wiLlxuICAgKlxuICAgKiBGb3IgdGhlIHRpbWUgYmVpbmcsIHRoaXMgbWl4aW4gb25seSBzdXBwb3J0cyBzdHJpbmctdmFsdWVkIHByb3BlcnRpZXMuXG4gICAqIElmIHlvdSdkIGxpa2UgdG8gY29udmVydCBzdHJpbmcgYXR0cmlidXRlcyB0byBvdGhlciB0eXBlcyAobnVtYmVycyxcbiAgICogYm9vbGVhbnMpLCB5b3UgbmVlZCB0byBpbXBsZW1lbnQgYGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja2AgeW91cnNlbGYuXG4gICAqL1xuICBjbGFzcyBBdHRyaWJ1dGVNYXJzaGFsbGluZyBleHRlbmRzIGJhc2Uge1xuXG4gICAgLypcbiAgICAgKiBIYW5kbGUgYSBjaGFuZ2UgdG8gdGhlIGF0dHJpYnV0ZSB3aXRoIHRoZSBnaXZlbiBuYW1lLlxuICAgICAqL1xuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhhdHRyaWJ1dGVOYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcbiAgICAgIGlmIChzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2spIHsgc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKCk7IH1cbiAgICAgIGxldCBwcm9wZXJ0eU5hbWUgPSBhdHRyaWJ1dGVUb1Byb3BlcnR5TmFtZShhdHRyaWJ1dGVOYW1lKTtcbiAgICAgIC8vIElmIHRoZSBhdHRyaWJ1dGUgbmFtZSBjb3JyZXNwb25kcyB0byBhIHByb3BlcnR5IG5hbWUsIHNldCB0aGUgcHJvcGVydHkuXG4gICAgICAvLyBJZ25vcmUgc3RhbmRhcmQgSFRNTEVsZW1lbnQgcHJvcGVydGllcyBoYW5kbGVkIGJ5IHRoZSBET00uXG4gICAgICBpZiAocHJvcGVydHlOYW1lIGluIHRoaXMgJiYgIShwcm9wZXJ0eU5hbWUgaW4gSFRNTEVsZW1lbnQucHJvdG90eXBlKSkge1xuICAgICAgICB0aGlzW3Byb3BlcnR5TmFtZV0gPSBuZXdWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jb25uZWN0ZWRDYWxsYmFjaykgeyBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpOyB9XG5cbiAgICAgIHRoaXNbc2FmZVRvU2V0QXR0cmlidXRlc1N5bWJvbF0gPSB0cnVlO1xuXG4gICAgICAvLyBTZXQgYW55IHBlbmRpbmcgYXR0cmlidXRlcy5cbiAgICAgIGlmICh0aGlzW3BlbmRpbmdBdHRyaWJ1dGVzU3ltYm9sXSkge1xuICAgICAgICBmb3IgKGxldCBhdHRyaWJ1dGUgaW4gdGhpc1twZW5kaW5nQXR0cmlidXRlc1N5bWJvbF0pIHtcbiAgICAgICAgICBsZXQgdmFsdWUgPSB0aGlzW3BlbmRpbmdBdHRyaWJ1dGVzU3ltYm9sXVthdHRyaWJ1dGVdO1xuICAgICAgICAgIHJlZmxlY3RBdHRyaWJ1dGVUb0VsZW1lbnQodGhpcywgYXR0cmlidXRlLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpc1twZW5kaW5nQXR0cmlidXRlc1N5bWJvbF0gPSBudWxsO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXQgYW55IHBlbmRpbmcgY2xhc3Nlcy5cbiAgICAgIGlmICh0aGlzW3BlbmRpbmdDbGFzc2VzU3ltYm9sXSkge1xuICAgICAgICBmb3IgKGxldCBjbGFzc05hbWUgaW4gdGhpc1twZW5kaW5nQ2xhc3Nlc1N5bWJvbF0pIHtcbiAgICAgICAgICBsZXQgdmFsdWUgPSB0aGlzW3BlbmRpbmdDbGFzc2VzU3ltYm9sXVtjbGFzc05hbWVdO1xuICAgICAgICAgIHJlZmxlY3RDbGFzcyh0aGlzLCBjbGFzc05hbWUsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xuICAgICAgcmV0dXJuIGF0dHJpYnV0ZXNGb3JDbGFzcyh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQvdW5zZXQgdGhlIGF0dHJpYnV0ZSB3aXRoIHRoZSBpbmRpY2F0ZWQgbmFtZS5cbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIGV4aXN0cyBwcmltYXJpbHkgdG8gaGFuZGxlIHRoZSBjYXNlIHdoZXJlIGFuIGVsZW1lbnQgd2FudHMgdG9cbiAgICAgKiBzZXQgYSBkZWZhdWx0IHByb3BlcnR5IHZhbHVlIHRoYXQgc2hvdWxkIGJlIHJlZmxlY3RlZCBhcyBhbiBhdHRyaWJ1dGUuIEFuXG4gICAgICogaW1wb3J0YW50IGxpbWl0YXRpb24gb2YgY3VzdG9tIGVsZW1lbnQgY29uc3R1cmN0b3JzIGlzIHRoYXQgdGhleSBjYW5ub3RcbiAgICAgKiBzZXQgYXR0cmlidXRlcy4gQSBjYWxsIHRvIGByZWZsZWN0QXR0cmlidXRlYCBkdXJpbmcgdGhlIGNvbnN0cnVjdG9yIHdpbGxcbiAgICAgKiBiZSBkZWZlcnJlZCB1bnRpbCB0aGUgZWxlbWVudCBpcyBjb25uZWN0ZWQgdG8gdGhlIGRvY3VtZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZSAtIFRoZSBuYW1lIG9mIHRoZSAqYXR0cmlidXRlKiAobm90IHByb3BlcnR5KSB0byBzZXQuXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIHNldC4gSWYgbnVsbCwgdGhlIGF0dHJpYnV0ZSB3aWxsIGJlIHJlbW92ZWQuXG4gICAgICovXG4gICAgcmVmbGVjdEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKSB7XG4gICAgICBpZiAodGhpc1tzYWZlVG9TZXRBdHRyaWJ1dGVzU3ltYm9sXSkge1xuICAgICAgICAvLyBTYWZlIHRvIHNldCBhdHRyaWJ1dGVzIGltbWVkaWF0ZWx5LlxuICAgICAgICByZWZsZWN0QXR0cmlidXRlVG9FbGVtZW50KHRoaXMsIGF0dHJpYnV0ZSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRGVmZXIgc2V0dGluZyBhdHRyaWJ1dGVzIHVudGlsIHRoZSBmaXJzdCB0aW1lIHdlJ3JlIGNvbm5lY3RlZC5cbiAgICAgICAgaWYgKCF0aGlzW3BlbmRpbmdBdHRyaWJ1dGVzU3ltYm9sXSkge1xuICAgICAgICAgIHRoaXNbcGVuZGluZ0F0dHJpYnV0ZXNTeW1ib2xdID0ge307XG4gICAgICAgIH1cbiAgICAgICAgdGhpc1twZW5kaW5nQXR0cmlidXRlc1N5bWJvbF1bYXR0cmlidXRlXSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldC91bnNldCB0aGUgY2xhc3Mgd2l0aCB0aGUgaW5kaWNhdGVkIG5hbWUuXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBleGlzdHMgcHJpbWFyaWx5IHRvIGhhbmRsZSB0aGUgY2FzZSB3aGVyZSBhbiBlbGVtZW50IHdhbnRzIHRvXG4gICAgICogc2V0IGEgZGVmYXVsdCBwcm9wZXJ0eSB2YWx1ZSB0aGF0IHNob3VsZCBiZSByZWZsZWN0ZWQgYXMgYXMgY2xhc3MuIEFuXG4gICAgICogaW1wb3J0YW50IGxpbWl0YXRpb24gb2YgY3VzdG9tIGVsZW1lbnQgY29uc3R1cmN0b3JzIGlzIHRoYXQgdGhleSBjYW5ub3RcbiAgICAgKiBzZXQgYXR0cmlidXRlcywgaW5jbHVkaW5nIHRoZSBgY2xhc3NgIGF0dHJpYnV0ZS4gQSBjYWxsIHRvXG4gICAgICogYHJlZmxlY3RDbGFzc2AgZHVyaW5nIHRoZSBjb25zdHJ1Y3RvciB3aWxsIGJlIGRlZmVycmVkIHVudGlsIHRoZSBlbGVtZW50XG4gICAgICogaXMgY29ubmVjdGVkIHRvIHRoZSBkb2N1bWVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgLSBUaGUgbmFtZSBvZiB0aGUgY2xhc3MgdG8gc2V0LlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBzZXQuIElmIG51bGwsIHRoZSBjbGFzcyB3aWxsIGJlIHJlbW92ZWQuXG4gICAgICovXG4gICAgcmVmbGVjdENsYXNzKGNsYXNzTmFtZSwgdmFsdWUpIHtcbiAgICAgIGlmICh0aGlzW3NhZmVUb1NldEF0dHJpYnV0ZXNTeW1ib2xdKSB7XG4gICAgICAgIC8vIFNhZmUgdG8gc2V0IGNsYXNzIGltbWVkaWF0ZWx5LlxuICAgICAgICByZWZsZWN0Q2xhc3ModGhpcywgY2xhc3NOYW1lLCB2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBEZWZlciBzZXR0aW5nIGNsYXNzIHVudGlsIHRoZSBmaXJzdCB0aW1lIHdlJ3JlIGNvbm5lY3RlZC5cbiAgICAgICAgaWYgKCF0aGlzW3BlbmRpbmdDbGFzc2VzU3ltYm9sXSkge1xuICAgICAgICAgIHRoaXNbcGVuZGluZ0NsYXNzZXNTeW1ib2xdID0ge307XG4gICAgICAgIH1cbiAgICAgICAgdGhpc1twZW5kaW5nQ2xhc3Nlc1N5bWJvbF1bY2xhc3NOYW1lXSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIEF0dHJpYnV0ZU1hcnNoYWxsaW5nO1xufTtcblxuXG4vLyBDb252ZXJ0IGh5cGhlbmF0ZWQgZm9vLWJhciBhdHRyaWJ1dGUgbmFtZSB0byBjYW1lbCBjYXNlIGZvb0JhciBwcm9wZXJ0eSBuYW1lLlxuZnVuY3Rpb24gYXR0cmlidXRlVG9Qcm9wZXJ0eU5hbWUoYXR0cmlidXRlTmFtZSkge1xuICBsZXQgcHJvcGVydHlOYW1lID0gYXR0cmlidXRlVG9Qcm9wZXJ0eU5hbWVzW2F0dHJpYnV0ZU5hbWVdO1xuICBpZiAoIXByb3BlcnR5TmFtZSkge1xuICAgIC8vIENvbnZlcnQgYW5kIG1lbW9pemUuXG4gICAgbGV0IGh5cGVuUmVnRXggPSAvLShbYS16XSkvZztcbiAgICBwcm9wZXJ0eU5hbWUgPSBhdHRyaWJ1dGVOYW1lLnJlcGxhY2UoaHlwZW5SZWdFeCxcbiAgICAgICAgbWF0Y2ggPT4gbWF0Y2hbMV0udG9VcHBlckNhc2UoKSk7XG4gICAgYXR0cmlidXRlVG9Qcm9wZXJ0eU5hbWVzW2F0dHJpYnV0ZU5hbWVdID0gcHJvcGVydHlOYW1lO1xuICB9XG4gIHJldHVybiBwcm9wZXJ0eU5hbWU7XG59XG5cbmZ1bmN0aW9uIGF0dHJpYnV0ZXNGb3JDbGFzcyhjbGFzc0ZuKSB7XG5cbiAgLy8gV2UgdHJlYXQgdGhlIGVsZW1lbnQgYmFzZSBjbGFzc2VzIGFzIGlmIHRoZXkgaGF2ZSBubyBhdHRyaWJ1dGVzLCBzaW5jZSB3ZVxuICAvLyBkb24ndCB3YW50IHRvIHJlY2VpdmUgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrIGZvciB0aGVtLlxuICBpZiAoY2xhc3NGbiA9PT0gSFRNTEVsZW1lbnQgfHwgY2xhc3NGbiA9PT0gT2JqZWN0KSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgLy8gR2V0IGF0dHJpYnV0ZXMgZm9yIHBhcmVudCBjbGFzcy5cbiAgbGV0IGJhc2VDbGFzcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihjbGFzc0ZuLnByb3RvdHlwZSkuY29uc3RydWN0b3I7XG4gIGxldCBiYXNlQXR0cmlidXRlcyA9IGF0dHJpYnV0ZXNGb3JDbGFzcyhiYXNlQ2xhc3MpO1xuXG4gIC8vIEdldCBhdHRyaWJ1dGVzIGZvciB0aGlzIGNsYXNzLlxuICBsZXQgcHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGNsYXNzRm4ucHJvdG90eXBlKTtcbiAgbGV0IHNldHRlck5hbWVzID0gcHJvcGVydHlOYW1lcy5maWx0ZXIocHJvcGVydHlOYW1lID0+XG4gICAgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoXG4gICAgICAgIGNsYXNzRm4ucHJvdG90eXBlLCBwcm9wZXJ0eU5hbWUpLnNldCA9PT0gJ2Z1bmN0aW9uJyk7XG4gIGxldCBhdHRyaWJ1dGVzID0gc2V0dGVyTmFtZXMubWFwKHNldHRlck5hbWUgPT5cbiAgICAgIHByb3BlcnR5TmFtZVRvQXR0cmlidXRlKHNldHRlck5hbWUpKTtcblxuICAvLyBNZXJnZS5cbiAgbGV0IGRpZmYgPSBhdHRyaWJ1dGVzLmZpbHRlcihhdHRyaWJ1dGUgPT5cbiAgICAgIGJhc2VBdHRyaWJ1dGVzLmluZGV4T2YoYXR0cmlidXRlKSA8IDApO1xuICByZXR1cm4gYmFzZUF0dHJpYnV0ZXMuY29uY2F0KGRpZmYpO1xufVxuXG4vLyBDb252ZXJ0IGEgY2FtZWwgY2FzZSBmb29CYXIgcHJvcGVydHkgbmFtZSB0byBhIGh5cGhlbmF0ZWQgZm9vLWJhciBhdHRyaWJ1dGUuXG5mdW5jdGlvbiBwcm9wZXJ0eU5hbWVUb0F0dHJpYnV0ZShwcm9wZXJ0eU5hbWUpIHtcbiAgbGV0IGF0dHJpYnV0ZSA9IHByb3BlcnR5TmFtZXNUb0F0dHJpYnV0ZXNbcHJvcGVydHlOYW1lXTtcbiAgaWYgKCFhdHRyaWJ1dGUpIHtcbiAgICAvLyBDb252ZXJ0IGFuZCBtZW1vaXplLlxuICAgIGxldCB1cHBlcmNhc2VSZWdFeCA9IC8oW0EtWl0pL2c7XG4gICAgYXR0cmlidXRlID0gcHJvcGVydHlOYW1lLnJlcGxhY2UodXBwZXJjYXNlUmVnRXgsICctJDEnKS50b0xvd2VyQ2FzZSgpO1xuICB9XG4gIHJldHVybiBhdHRyaWJ1dGU7XG59XG5cbi8vIFJlZmxlY3QgdGhlIGF0dHJpYnV0ZSB0byB0aGUgZ2l2ZW4gZWxlbWVudC5cbi8vIElmIHRoZSB2YWx1ZSBpcyBudWxsLCByZW1vdmUgdGhlIGF0dHJpYnV0ZS5cbmZ1bmN0aW9uIHJlZmxlY3RBdHRyaWJ1dGVUb0VsZW1lbnQoZWxlbWVudCwgYXR0cmlidXRlTmFtZSwgdmFsdWUpIHtcbiAgaWYgKHZhbHVlID09PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKTtcbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCB2YWx1ZSk7XG4gIH1cbn1cblxuLy8gUmVmbGVjdCB0aGUgY2xhc3MgdG8gdGhlIGdpdmVuIGVsZW1lbnQuXG4vLyBJZiB0aGUgdmFsdWUgaXMgbnVsbCwgcmVtb3ZlIHRoZSBjbGFzcy5cbmZ1bmN0aW9uIHJlZmxlY3RDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUsIHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICB9IGVsc2Uge1xuICAgIHRvZ2dsZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSwgdmFsdWUpO1xuICB9XG59XG4iLCIvKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIENsaWNrU2VsZWN0aW9uLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggbWFwcyBhIGNsaWNrIChhY3R1YWxseSwgYSBtb3VzZWRvd24pIHRvIGEgc2VsZWN0aW9uLlxuICAgKlxuICAgKiBUaGlzIHNpbXBsZSBtaXhpbiBpcyB1c2VmdWwgaW4gbGlzdCBib3gtbGlrZSBlbGVtZW50cywgd2hlcmUgYSBjbGljayBvbiBhXG4gICAqIGxpc3QgaXRlbSBpbXBsaWNpdGx5IHNlbGVjdHMgaXQuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyB0aGUgY29tcG9uZW50IHRvIHByb3ZpZGUgYW4gYGl0ZW1zYCBwcm9wZXJ0eS4gWW91IGNhblxuICAgKiBwcm92aWRlIHRoYXQgcHJvcGVydHkgeW91cnNlbGYsIG9yIHVzZSB0aGVcbiAgICogW0NvbnRlbnRBc0l0ZW1zXShDb250ZW50QXNJdGVtcy5tZCkgbWl4aW4uIFRoaXMgbWl4aW4gYWxzbyBleHBlY3RzIHRoZVxuICAgKiBjb21wb25lbnQgdG8gZGVmaW5lIGEgYHNlbGVjdGVkSW5kZXhgIHByb3BlcnR5LiBZb3UgY2FuIHByb3ZpZGUgdGhhdFxuICAgKiB5b3Vyc2VsZiwgb3IgdXNlIHRoZSBbU2luZ2xlU2VsZWN0aW9uXShTaW5nbGVTZWxlY3Rpb24ubWQpIG1peGluLlxuICAgKi9cbiAgY2xhc3MgQ2xpY2tTZWxlY3Rpb24gZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIC8qXG4gICAgICAgKiBSRVZJRVc6IFdoaWNoIGV2ZW50IHNob3VsZCB3ZSBsaXN0ZW4gdG8gaGVyZT9cbiAgICAgICAqXG4gICAgICAgKiBUaGUgc3RhbmRhcmQgdXNlIGZvciB0aGlzIG1peGluIGlzIGluIGxpc3QgYm94ZXMuIExpc3QgYm94ZXMgZG9uJ3RcbiAgICAgICAqIGFwcGVhciB0byBiZSBjb25zaXN0ZW50IHdpdGggcmVnYXJkIHRvIHdoZXRoZXIgdGhleSBzZWxlY3Qgb24gbW91c2Vkb3duXG4gICAgICAgKiBvciBjbGljay9tb3VzZXVwLlxuICAgICAgICovXG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGV2ZW50ID0+IHtcbiAgICAgICAgc2VsZWN0VGFyZ2V0KHRoaXMsIGV2ZW50LnRhcmdldCk7XG4gICAgICAgIC8vIE5vdGU6IFdlIGRvbid0IGNhbGwgcHJldmVudERlZmF1bHQgaGVyZS4gVGhlIGRlZmF1bHQgYmVoYXZpb3IgZm9yXG4gICAgICAgIC8vIG1vdXNlZG93biBpbmNsdWRlcyBzZXR0aW5nIGtleWJvYXJkIGZvY3VzIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3RcbiAgICAgICAgLy8gYWxyZWFkeSBoYXZlIHRoZSBmb2N1cywgYW5kIHdlIHdhbnQgdG8gcHJlc2VydmUgdGhhdCBiZWhhdmlvci5cbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IGltcGxlbWVudGF0aW9uLiBUaGlzIHdpbGwgdHlwaWNhbGx5IGJlIGhhbmRsZWQgYnkgb3RoZXIgbWl4aW5zLlxuICAgIGdldCBzZWxlY3RlZEluZGV4KCkge1xuICAgICAgcmV0dXJuIHN1cGVyLnNlbGVjdGVkSW5kZXg7XG4gICAgfVxuICAgIHNldCBzZWxlY3RlZEluZGV4KGluZGV4KSB7XG4gICAgICBpZiAoJ3NlbGVjdGVkSW5kZXgnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkSW5kZXggPSBpbmRleDsgfVxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIENsaWNrU2VsZWN0aW9uO1xufTtcblxuXG4vLyBUT0RPOiBIYW5kbGUgdGhlIGNhc2Ugd2hlcmUgYSBsaXN0IGl0ZW0gaGFzIHN1YmVsZW1lbnRzLiBXYWxrIHVwIHRoZSBET01cbi8vIGhpZXJhcmNoeSB1bnRpbCB3ZSBmaW5kIGFuIGl0ZW0gaW4gdGhlIGxpc3QsIG9yIGNvbWUgYmFjayB0byB0aGlzIGVsZW1lbnQsXG4vLyBpbiB3aGljaCBjYXNlIHRoZSBlbGVtZW50IHRoYXQgd2FzIHRhcHBlZCBpc24ndCBhbiBpdGVtIChhbmQgc2hvdWxkIGJlXG4vLyBpZ25vcmVkKS5cbmZ1bmN0aW9uIHNlbGVjdFRhcmdldChlbGVtZW50LCB0YXJnZXQpIHtcbiAgbGV0IGluZGV4ID0gZWxlbWVudC5pdGVtcyAmJiBlbGVtZW50Lml0ZW1zLmluZGV4T2YodGFyZ2V0KTtcbiAgaWYgKGluZGV4ID49IDApIHtcbiAgICBlbGVtZW50LnNlbGVjdGVkSW5kZXggPSBpbmRleDtcbiAgfVxufVxuIiwiLyoqXG4gKiBBIGdyb3VwIG9mIGVsZW1lbnRzIHRoYXQgaGF2ZSBiZWVuIGFzc29jaWF0ZWQgZm9yIHRoZSBwdXJwb3NlIG9mXG4gKiBhY2NvbXBsaXNoaW5nIHNvbWUgY29sbGVjdGl2ZSBiZWhhdmlvciwgZS5nLiwga2V5Ym9hcmQgaGFuZGxpbmcuXG4gKlxuICogVGhlcmUgYXJlIGNlcnRhaW4gY29tcG9uZW50cyB0aGF0IHdhbnQgdG8gY29vcGVyYXRpdmVseSBoYW5kbGUgdGhlIGtleWJvYXJkLlxuICogRm9yIGV4YW1wbGUsIHRoZSBiYXNpYy1hcnJvdy1zZWxlY3Rpb24gYW5kIGJhc2ljLXBhZ2UtZG90cyBjb21wb25lbnRzIGFyZVxuICogb3B0aW9uYWwgY29tcG9uZW50cyB0aGF0IGNhbiBhdWdtZW50IHRoZSBhcHBlYXJhbmNlIGFuZCBiZWhhdmlvciBvZiBhbiBpbm5lclxuICogYmFzaWMtY2Fyb3VzZWwsIGFkZGluZyBhcnJvdyBidXR0b25zIGFuZCBkb3QgYnV0dG9ucywgcmVzcGVjdGl2ZWx5LiBXaGVuXG4gKiB0aGVzZSBjb21wb25lbnRzIGFyZSBuZXN0ZWQgdG9nZXRoZXIsIHRoZXkgZm9ybSBhbiBpbXBsaWNpdCB1bml0IGNhbGxlZCBhXG4gKiAqY29sbGVjdGl2ZSo6XG4gKlxuICogICAgIDxiYXNpYy1hcnJvdy1zZWxlY3Rpb24+XG4gKiAgICAgICA8YmFzaWMtcGFnZS1kb3RzPlxuICogICAgICAgICA8YmFzaWMtY2Fyb3VzZWw+XG4gKiAgICAgICAgICAgLi4uIGltYWdlcywgZXRjLiAuLi5cbiAqICAgICAgICAgPC9iYXNpYy1jYXJvdXNlbD5cbiAqICAgICAgIDwvYmFzaWMtcGFnZS1kb3RzPlxuICogICAgIDwvYmFzaWMtYXJyb3ctc2VsZWN0aW9uPlxuICpcbiAqIEluIHRoaXMgY29uZmlndXJhdGlvbiwgdGhlIHRocmVlIGNvbXBvbmVudHMgd2lsbCBhbGwgaGF2ZSBhIGB0aGlzLmNvbGxlY3RpdmVgXG4gKiByZWZlcmVuY2UgdGhhdCByZWZlcnMgdG8gYSBzaGFyZWQgaW5zdGFuY2Ugb2YgdGhlIGBDb2xsZWN0aXZlYCBjbGFzcy5cbiAqXG4gKiBUaGUgW0tleWJvYXJkXShLZXlib2FyZC5tZCkgbWl4aW4gdGhleSB1c2UgaXMgc2Vuc2l0aXZlIHRvIHRoZSBwcmVzZW5jZSBvZlxuICogdGhlIGNvbGxlY3RpdmUuIEFtb25nIG90aGVyIHRoaW5ncywgaXQgd2lsbCBlbnN1cmUgdGhhdCBvbmx5IHRoZSBvdXRlcm1vc3RcbiAqIGVsZW1lbnQgYWJvdmUg4oCUwqB0aGUgYmFzaWMtYXJyb3ctc2VsZWN0aW9uIOKAlMKgd2lsbCBiZSBhIHRhYiBzdG9wIHRoYXQgY2FuXG4gKiByZWNlaXZlIHRoZSBrZXlib2FyZCBmb2N1cy4gVGhpcyBsZXRzIHRoZSB1c2VyIHBlcmNlaXZlIHRoZSBjb21wb25lbnRcbiAqIGFycmFuZ2VtZW50IGFib3ZlIGFzIGEgc2luZ2xlIHVuaXQuIFRoZSBLZXlib2FyZCBtaXhpbiB3aWxsIGFsc28gZ2l2ZSBlYWNoXG4gKiBlbGVtZW50IGluIHRoZSBjb2xsZWN0aXZlIGEgY2hhbmNlIHRvIHByb2Nlc3MgYW55IGtleWJvYXJkIGV2ZW50cy4gU28sIGV2ZW5cbiAqIHRob3VnaCB0aGUgYmFzaWMtYXJyb3ctc2VsZWN0aW9uIGVsZW1lbnQgd2lsbCBoYXZlIHRoZSBmb2N1cywgdGhlIHN0YW5kYXJkXG4gKiBrZXlib2FyZCBuYXZpZ2F0aW9uIHByb3ZpZGVkIGJ5IGJhc2ljLWNhcm91c2VsIHdpbGwgY29udGludWUgdG8gd29yay5cbiAqXG4gKiBUaGUgW1NlbGVjdGlvbkFyaWFBY3RpdmVdKFNlbGVjdGlvbkFyaWFBY3RpdmUubWQpIG1peGluIGFsc28gcmVzcGVjdHNcbiAqIGNvbGxlY3RpdmVzIHdoZW4gdXNpbmcgdGhlIGBhcmlhLWFjdGl2ZWRlc2NlbmRhbnRgIGFuZCBgcm9sZWAgYXR0cmlidXRlcy5cbiAqIFRob3NlIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgb3V0ZXJtb3N0IGVsZW1lbnQgKGJhc2ljLWFycm93LXNlbGVjdGlvbiwgYWJvdmUpXG4gKiBzbyB0aGF0IEFSSUEgY2FuIGNvcnJlY3RseSB1bmRlcnN0YW5kIHRoZSBhcnJhbmdlbWVudCBvZiB0aGUgZWxlbWVudHMuXG4gKlxuICogWW91IGNhbiBwdXQgZWxlbWVudHMgaW50byBjb2xsZWN0aXZlcyB5b3Vyc2VsZiwgb3IgeW91IGNhbiB1c2UgdGhlXG4gKiBbVGFyZ2V0SW5Db2xsZWN0aXZlXShUYXJnZXRJbkNvbGxlY3RpdmUubWQpIG1peGluLlxuICovXG5jbGFzcyBDb2xsZWN0aXZlIHtcblxuICAvKipcbiAgICogQ3JlYXRlIGEgY29sbGVjdGl2ZS5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRUxlbWVudFtdfSBbZWxlbWVudHNdIC0gSW5pdGlhbCBlbGVtZW50cyB0byBhZGQuXG4gICAqL1xuICBjb25zdHJ1Y3RvciguLi5lbGVtZW50cykge1xuICAgIC8qKlxuICAgICAqIFRoZSBlbGVtZW50cyBpbiB0aGUgY29sbGVjdGl2ZS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudFtdfVxuICAgICAqL1xuICAgIHRoaXMuZWxlbWVudHMgPSBbXTtcbiAgICBlbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4gdGhpcy5hc3NpbWlsYXRlKGVsZW1lbnQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgdGhlIGluZGljYXRlZCB0YXJnZXQgdG8gdGhlIGNvbGxlY3RpdmUuXG4gICAqXG4gICAqIEJ5IGNvbnZlbnRpb24sIGlmIHR3byBlbGVtZW50cyB3YW50cyB0byBwYXJ0aWNpcGF0ZSBpbiBhIGNvbGxlY3RpdmUsIGFuZFxuICAgKiBvbmUgZWxlbWVudCBpcyBhbiBhbmNlc3RvciBvZiB0aGUgb3RoZXIgaW4gdGhlIERPTSwgdGhlIGFuY2VzdG9yIHNob3VsZFxuICAgKiBhc3NpbWlsYXRlIHRoZSBkZXNjZW5kYW50IGluc3RlYWQgb2YgdGhlIG90aGVyIHdheSBhcm91bmQuXG4gICAqXG4gICAqIEFmdGVyIGFzc2ltaWxhdGlvbiwgYW55IGVsZW1lbnQgaW4gdGhlIGNvbGxlY3RpdmUgdGhhdCBkZWZpbmVzIGFcbiAgICogYGNvbGxlY3RpdmVDaGFuZ2VkYCBtZXRob2Qgd2lsbCBoYXZlIHRoYXQgbWV0aG9kIGludm9rZWQuIFRoaXMgYWxsb3dzXG4gICAqIHRoZSBjb2xsZWN0aXZlJ3MgZWxlbWVudHMgdG8gcmVzcG9uZCB0byBjaGFuZ2VzIGluIHRoZSBjb2xsZWN0aXZlLlxuICAgKlxuICAgKiBAcGFyYW0geyhIVE1MRWxlbWVudHxDb2xsZWN0aXZlKX0gdGFyZ2V0IC0gVGhlIGVsZW1lbnQgb3IgY29sbGVjdGl2ZSB0byBhZGQuXG4gICAqL1xuICBhc3NpbWlsYXRlKHRhcmdldCkge1xuICAgIGxldCBjb2xsZWN0aXZlQ2hhbmdlZDtcbiAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgQ29sbGVjdGl2ZSkge1xuICAgICAgY29sbGVjdGl2ZUNoYW5nZWQgPSBhc3NpbWlsYXRlQ29sbGVjdGl2ZSh0aGlzLCB0YXJnZXQpO1xuICAgIH0gZWxzZSBpZiAodGFyZ2V0LmNvbGxlY3RpdmUpIHtcbiAgICAgIC8vIFRhcmdldCBpcyBhbHJlYWR5IHBhcnQgb2YgYSBjb2xsZWN0aXZlLCBhc3NpbWlsYXRlIGl0LlxuICAgICAgY29sbGVjdGl2ZUNoYW5nZWQgPSBhc3NpbWlsYXRlQ29sbGVjdGl2ZSh0aGlzLCB0YXJnZXQuY29sbGVjdGl2ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEFzc2ltaWxhdGUgYW4gaW5kaXZpZHVhbCBlbGVtZW50LlxuICAgICAgY29sbGVjdGl2ZUNoYW5nZWQgPSBhc3NpbWlsYXRlRWxlbWVudCh0aGlzLCB0YXJnZXQpO1xuICAgIH1cblxuICAgIGlmIChjb2xsZWN0aXZlQ2hhbmdlZCkge1xuICAgICAgdGhpcy5pbnZva2VNZXRob2QoJ2NvbGxlY3RpdmVDaGFuZ2VkJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEludm9rZSBhIG1ldGhvZCBvbiBhbGwgZWxlbWVudHMgaW4gdGhlIGNvbGxlY3RpdmUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2QgLSBUaGUgbmFtZSBvZiB0aGUgbWV0aG9kIHRvIGludm9rZSBvbiBhbGwgZWxlbWVudHMuXG4gICAqIEBwYXJhbSB7b2JqZWN0W119IFthcmdzXSAtIFRoZSBhcmd1bWVudHMgdG8gdGhlIG1ldGhvZFxuICAgKi9cbiAgaW52b2tlTWV0aG9kKG1ldGhvZCwgLi4uYXJncykge1xuICAgIC8vIEludm9rZSBmcm9tIGlubmVybW9zdCB0byBvdXRlcm1vc3QuXG4gICAgbGV0IGVsZW1lbnRzID0gdGhpcy5lbGVtZW50cztcbiAgICBmb3IgKGxldCBpID0gZWxlbWVudHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCBlbGVtZW50ID0gZWxlbWVudHNbaV07XG4gICAgICBpZiAoZWxlbWVudFttZXRob2RdKSB7XG4gICAgICAgIGVsZW1lbnRbbWV0aG9kXS5hcHBseShlbGVtZW50LCBhcmdzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhlIG91dGVybW9zdCBlbGVtZW50IGluIHRoZSBjb2xsZWN0aXZlLlxuICAgKiBCeSBjb252ZW50aW9uLCB0aGlzIGlzIHRoZSBmaXJzdCBlbGVtZW50IGluIHRoZSBgZWxlbWVudHNgIGFycmF5LlxuICAgKi9cbiAgZ2V0IG91dGVybW9zdEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudHNbMF07XG4gIH1cblxufVxuXG5cbi8vIFRoZSBmaXJzdCBjb2xsZWN0aXZlIGFzc2ltaWxhdGVzIHRoZSBzZWNvbmQuXG5mdW5jdGlvbiBhc3NpbWlsYXRlQ29sbGVjdGl2ZShjb2xsZWN0aXZlMSwgY29sbGVjdGl2ZTIpIHtcbiAgaWYgKGNvbGxlY3RpdmUxID09PSBjb2xsZWN0aXZlMikge1xuICAgIC8vIENvbGxlY3RpdmVzIGFyZSBzYW1lOyBpZ25vcmUuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgbGV0IGVsZW1lbnRzID0gY29sbGVjdGl2ZTIuZWxlbWVudHM7XG5cbiAgLy8gT2xkIGNvbGxlY3RpdmUgd2lsbCBubyBsb25nZXIgaGF2ZSBhbnkgZWxlbWVudHMgb2YgaXRzIG93bi5cbiAgY29sbGVjdGl2ZTIuZWxlbWVudHMgPSBbXTtcblxuICBlbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIGFzc2ltaWxhdGVFbGVtZW50KGNvbGxlY3RpdmUxLCBlbGVtZW50KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cblxuLy8gQXNzaW1pbGF0ZSB0aGUgaW5kaWNhdGVkIGVsZW1lbnQuXG5mdW5jdGlvbiBhc3NpbWlsYXRlRWxlbWVudChjb2xsZWN0aXZlLCBlbGVtZW50KSB7XG4gIGlmIChlbGVtZW50LmNvbGxlY3RpdmUgPT09IGNvbGxlY3RpdmUpIHtcbiAgICAvLyBBbHJlYWR5IHBhcnQgb2YgdGhpcyBjb2xsZWN0aXZlLlxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBlbGVtZW50LmNvbGxlY3RpdmUgPSBjb2xsZWN0aXZlO1xuICBjb2xsZWN0aXZlLmVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gIHJldHVybiB0cnVlO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IENvbGxlY3RpdmU7XG4iLCIvKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIENvbXBvc2FibGUuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB0byBtYWtlIGEgY2xhc3MgbW9yZSBlYXNpbHkgY29tcG9zYWJsZSB3aXRoIG90aGVyIG1peGlucy5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBjb250cmlidXRlcyBhIGBjb21wb3NlYCBtZXRob2QgdGhhdCBhcHBsaWVzIGEgc2V0IG9mIG1peGluXG4gICAqIGZ1bmN0aW9ucyBhbmQgcmV0dXJucyB0aGUgcmVzdWx0aW5nIG5ldyBjbGFzcy4gVGhpcyBzdWdhciBjYW4gbWFrZSB0aGVcbiAgICogYXBwbGljYXRpb24gb2YgbWFueSBtaXhpbnMgYXQgb25jZSBlYXNpZXIgdG8gcmVhZC5cbiAgICovXG4gIGNsYXNzIENvbXBvc2FibGUgZXh0ZW5kcyBiYXNlIHtcblxuICAgIC8qKlxuICAgICAqIEFwcGx5IGEgc2V0IG9mIG1peGluIGZ1bmN0aW9ucyBvciBtaXhpbiBvYmplY3RzIHRvIHRoZSBwcmVzZW50IGNsYXNzIGFuZFxuICAgICAqIHJldHVybiB0aGUgbmV3IGNsYXNzLlxuICAgICAqXG4gICAgICogSW5zdGVhZCBvZiB3cml0aW5nOlxuICAgICAqXG4gICAgICogICAgIGxldCBNeUNsYXNzID0gTWl4aW4xKE1peGluMihNaXhpbjMoTWl4aW40KE1peGluNShCYXNlQ2xhc3MpKSkpKTtcbiAgICAgKlxuICAgICAqIFlvdSBjYW4gd3JpdGU6XG4gICAgICpcbiAgICAgKiAgICAgbGV0IE15Q2xhc3MgPSBDb21wb3NhYmxlKEJhc2VDbGFzcykuY29tcG9zZShcbiAgICAgKiAgICAgICBNaXhpbjEsXG4gICAgICogICAgICAgTWl4aW4yLFxuICAgICAqICAgICAgIE1peGluMyxcbiAgICAgKiAgICAgICBNaXhpbjQsXG4gICAgICogICAgICAgTWl4aW41XG4gICAgICogICAgICk7XG4gICAgICpcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGNhbiBhbHNvIHRha2UgbWl4aW4gb2JqZWN0cy4gQSBtaXhpbiBvYmplY3QgaXMganVzdCBhXG4gICAgICogc2hvcnRoYW5kIGZvciBhIG1peGluIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBhIG5ldyBzdWJjbGFzcyB3aXRoIHRoZSBnaXZlblxuICAgICAqIG1lbWJlcnMuIFRoZSBtaXhpbiBvYmplY3QncyBtZW1iZXJzIGFyZSAqbm90KiBjb3BpZWQgZGlyZWN0bHkgb250byB0aGVcbiAgICAgKiBwcm90b3R5cGUgb2YgdGhlIGJhc2UgY2xhc3MsIGFzIHdpdGggdHJhZGl0aW9uYWwgbWl4aW5zLlxuICAgICAqXG4gICAgICogSW4gYWRkaXRpb24gdG8gcHJvdmlkaW5nIHN5bnRhY3RpYyBzdWdhciwgdGhpcyBtaXhpbiBjYW4gYmUgdXNlZCB0b1xuICAgICAqIGRlZmluZSBhIGNsYXNzIGluIEVTNSwgd2hpY2ggbGFja3MgRVM2J3MgYGNsYXNzYCBrZXl3b3JkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHsuLi5taXhpbnN9IG1peGlucyAtIEEgc2V0IG9mIG1peGluIGZ1bmN0aW9ucyBvciBvYmplY3RzIHRvIGFwcGx5LlxuICAgICAqL1xuICAgIHN0YXRpYyBjb21wb3NlKC4uLm1peGlucykge1xuICAgICAgLy8gV2UgY3JlYXRlIGEgbmV3IHN1YmNsYXNzIGZvciBlYWNoIG1peGluIGluIHR1cm4uIFRoZSByZXN1bHQgYmVjb21lc1xuICAgICAgLy8gdGhlIGJhc2UgY2xhc3MgZXh0ZW5kZWQgYnkgYW55IHN1YnNlcXVlbnQgbWl4aW5zLiBJdCB0dXJucyBvdXQgdGhhdFxuICAgICAgLy8gd2UgY2FuIHVzZSBBcnJheS5yZWR1Y2UoKSB0byBjb25jaXNlbHkgZXhwcmVzcyB0aGlzLCB1c2luZyB0aGUgY3VycmVudFxuICAgICAgLy8gb2JqZWN0IGFzIHRoZSBzZWVkIGZvciByZWR1Y2UoKS5cbiAgICAgIHJldHVybiBtaXhpbnMucmVkdWNlKGNvbXBvc2VDbGFzcywgdGhpcyk7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gQ29tcG9zYWJsZTtcbn07XG5cblxuLy8gUHJvcGVydGllcyBkZWZpbmVkIGJ5IE9iamVjdCB0aGF0IHdlIGRvbid0IHdhbnQgdG8gbWl4aW4uXG5jb25zdCBOT05fTUlYQUJMRV9PQkpFQ1RfUFJPUEVSVElFUyA9IFtcbiAgJ2NvbnN0cnVjdG9yJ1xuXTtcblxuLypcbiAqIEFwcGx5IHRoZSBtaXhpbiB0byB0aGUgZ2l2ZW4gYmFzZSBjbGFzcyB0byByZXR1cm4gYSBuZXcgY2xhc3MuXG4gKiBUaGUgbWl4aW4gY2FuIGVpdGhlciBiZSBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgbW9kaWZpZWQgY2xhc3MsIG9yIGFcbiAqIHBsYWluIG9iamVjdCB3aG9zZSBtZW1iZXJzIHdpbGwgYmUgY29waWVkIHRvIHRoZSBuZXcgY2xhc3MnIHByb3RvdHlwZS5cbiAqL1xuZnVuY3Rpb24gY29tcG9zZUNsYXNzKGJhc2UsIG1peGluKSB7XG4gIGlmICh0eXBlb2YgbWl4aW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBNaXhpbiBmdW5jdGlvblxuICAgIHJldHVybiBtaXhpbihiYXNlKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBNaXhpbiBvYmplY3RcbiAgICBjbGFzcyBTdWJjbGFzcyBleHRlbmRzIGJhc2Uge31cbiAgICBjb3B5T3duUHJvcGVydGllcyhtaXhpbiwgU3ViY2xhc3MucHJvdG90eXBlLCBOT05fTUlYQUJMRV9PQkpFQ1RfUFJPUEVSVElFUyk7XG4gICAgcmV0dXJuIFN1YmNsYXNzO1xuICB9XG59XG5cblxuLypcbiAqIENvcHkgdGhlIGdpdmVuIHByb3BlcnRpZXMvbWV0aG9kcyB0byB0aGUgdGFyZ2V0LlxuICogUmV0dXJuIHRoZSB1cGRhdGVkIHRhcmdldC5cbiAqL1xuZnVuY3Rpb24gY29weU93blByb3BlcnRpZXMoc291cmNlLCB0YXJnZXQsIGlnbm9yZVByb3BlcnR5TmFtZXMgPSBbXSkge1xuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2UpLmZvckVhY2gobmFtZSA9PiB7XG4gICAgaWYgKGlnbm9yZVByb3BlcnR5TmFtZXMuaW5kZXhPZihuYW1lKSA8IDApIHtcbiAgICAgIGxldCBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIG5hbWUpO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHRhcmdldDtcbn1cbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi9jcmVhdGVTeW1ib2wnO1xuaW1wb3J0IHRvZ2dsZUNsYXNzIGZyb20gJy4vdG9nZ2xlQ2xhc3MnO1xuXG5cbi8vIFN5bWJvbHMgZm9yIHByaXZhdGUgZGF0YSBtZW1iZXJzIG9uIGFuIGVsZW1lbnQuXG5jb25zdCBpdGVtc1N5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnaXRlbXMnKTtcbmNvbnN0IGl0ZW1Jbml0aWFsaXplZFN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnaXRlbUluaXRpYWxpemVkJyk7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBDb250ZW50QXNJdGVtcy4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIG1hcHMgY29udGVudCBzZW1hbnRpY3MgKGVsZW1lbnRzKSB0byBsaXN0IGl0ZW0gc2VtYW50aWNzLlxuICAgKlxuICAgKiBJdGVtcyBkaWZmZXIgZnJvbSBlbGVtZW50IGNvbnRlbnRzIGluIHNldmVyYWwgd2F5czpcbiAgICpcbiAgICogKiBUaGV5IGFyZSBvZnRlbiByZWZlcmVuY2VkIHZpYSBpbmRleC5cbiAgICogKiBUaGV5IG1heSBoYXZlIGEgc2VsZWN0aW9uIHN0YXRlLlxuICAgKiAqIEl0J3MgY29tbW9uIHRvIGRvIHdvcmsgdG8gaW5pdGlhbGl6ZSB0aGUgYXBwZWFyYW5jZSBvciBzdGF0ZSBvZiBhIG5ld1xuICAgKiAgIGl0ZW0uXG4gICAqICogQXV4aWxpYXJ5IGludmlzaWJsZSBjaGlsZCBlbGVtZW50cyBhcmUgZmlsdGVyZWQgb3V0IGFuZCBub3QgY291bnRlZCBhc1xuICAgKiAgIGl0ZW1zLiBBdXhpbGlhcnkgZWxlbWVudHMgaW5jbHVkZSBsaW5rLCBzY3JpcHQsIHN0eWxlLCBhbmQgdGVtcGxhdGVcbiAgICogICBlbGVtZW50cy4gVGhpcyBmaWx0ZXJpbmcgZW5zdXJlcyB0aGF0IHRob3NlIGF1eGlsaWFyeSBlbGVtZW50cyBjYW4gYmVcbiAgICogICB1c2VkIGluIG1hcmt1cCBpbnNpZGUgb2YgYSBsaXN0IHdpdGhvdXQgYmVpbmcgdHJlYXRlZCBhcyBsaXN0IGl0ZW1zLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGV4cGVjdHMgYSBjb21wb25lbnQgdG8gcHJvdmlkZSBhIGBjb250ZW50YCBwcm9wZXJ0eSByZXR1cm5pbmcgYVxuICAgKiByYXcgc2V0IG9mIGVsZW1lbnRzLiBZb3UgY2FuIHByb3ZpZGUgdGhhdCB5b3Vyc2VsZiwgb3IgdXNlIHRoZVxuICAgKiBbRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudF0oRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudC5tZCkgbWl4aW4uXG4gICAqXG4gICAqIFRoZSBtb3N0IGNvbW1vbmx5IHJlZmVyZW5jZWQgcHJvcGVydHkgZGVmaW5lZCBieSB0aGlzIG1peGluIGlzIHRoZSBgaXRlbXNgXG4gICAqIHByb3BlcnR5LiBUbyBhdm9pZCBoYXZpbmcgdG8gZG8gd29yayBlYWNoIHRpbWUgdGhhdCBwcm9wZXJ0eSBpcyByZXF1ZXN0ZWQsXG4gICAqIHRoaXMgbWl4aW4gc3VwcG9ydHMgYW4gb3B0aW1pemVkIG1vZGUuIElmIHlvdSBpbnZva2UgdGhlIGBjb250ZW50Q2hhbmdlZGBcbiAgICogbWV0aG9kIHdoZW4gdGhlIHNldCBvZiBpdGVtcyBjaGFuZ2VzLCB0aGUgbWl4aW4gY29uY2x1ZGVzIHRoYXQgeW91J2xsIHRha2VcbiAgICogY2FyZSBvZiBub3RpZnlpbmcgaXQgb2YgZnV0dXJlIGNoYW5nZXMsIGFuZCB0dXJucyBvbiB0aGUgb3B0aW1pemF0aW9uLiBXaXRoXG4gICAqIHRoYXQgb24sIHRoZSBtaXhpbiBzYXZlcyBhIHJlZmVyZW5jZSB0byB0aGUgY29tcHV0ZWQgc2V0IG9mIGl0ZW1zLCBhbmQgd2lsbFxuICAgKiByZXR1cm4gdGhhdCBpbW1lZGlhdGVseSBvbiBzdWJzZXF1ZW50IGNhbGxzIHRvIHRoZSBgaXRlbXNgIHByb3BlcnR5LiBJZiB5b3VcbiAgICogdXNlIHRoaXMgbWl4aW4gaW4gY29uanVuY3Rpb24gd2l0aCB0aGVcbiAgICogW0Rpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnRdKERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQubWQpIG1peGluLCB0aGVcbiAgICogYGNvbnRlbnRDaGFuZ2VkYCBtZXRob2Qgd2lsbCBiZSBpbnZva2VkIGZvciB5b3Ugd2hlbiB0aGUgZWxlbWVudCdzIGNoaWxkcmVuXG4gICAqIGNoYW5nZSwgdHVybmluZyBvbiB0aGUgb3B0aW1pemF0aW9uIGF1dG9tYXRpY2FsbHkuXG4gICAqL1xuICBjbGFzcyBDb250ZW50QXNJdGVtcyBleHRlbmRzIGJhc2Uge1xuXG4gICAgLyoqXG4gICAgICogQXBwbHkgdGhlIHNlbGVjdGlvbiBzdGF0ZSB0byBhIHNpbmdsZSBpdGVtLlxuICAgICAqXG4gICAgICogSW52b2tlIHRoaXMgbWV0aG9kIHRvIHNpZ25hbCB0aGF0IHRoZSBzZWxlY3RlZCBzdGF0ZSBvZiB0aGUgaW5kaWNhdGVkIGl0ZW1cbiAgICAgKiBoYXMgY2hhbmdlZC4gQnkgZGVmYXVsdCwgdGhpcyBhcHBsaWVzIGEgYHNlbGVjdGVkYCBDU1MgY2xhc3MgaWYgdGhlIGl0ZW1cbiAgICAgKiBpcyBzZWxlY3RlZCwgYW5kIHJlbW92ZWQgaXQgaWYgbm90IHNlbGVjdGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaXRlbSAtIFRoZSBpdGVtIHdob3NlIHNlbGVjdGlvbiBzdGF0ZSBoYXMgY2hhbmdlZC5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNlbGVjdGVkIC0gVHJ1ZSBpZiB0aGUgaXRlbSBpcyBzZWxlY3RlZCwgZmFsc2UgaWYgbm90LlxuICAgICAqL1xuICAgIGFwcGx5U2VsZWN0aW9uKGl0ZW0sIHNlbGVjdGVkKSB7XG4gICAgICBpZiAoc3VwZXIuYXBwbHlTZWxlY3Rpb24pIHsgc3VwZXIuYXBwbHlTZWxlY3Rpb24oaXRlbSwgc2VsZWN0ZWQpOyB9XG4gICAgICB0b2dnbGVDbGFzcyhpdGVtLCAnc2VsZWN0ZWQnLCBzZWxlY3RlZCk7XG4gICAgfVxuXG4gICAgY29udGVudENoYW5nZWQoKSB7XG4gICAgICBpZiAoc3VwZXIuY29udGVudENoYW5nZWQpIHsgc3VwZXIuY29udGVudENoYW5nZWQoKTsgfVxuXG4gICAgICAvLyBTaW5jZSB3ZSBnb3QgdGhlIGNvbnRlbnRDaGFuZ2VkIGNhbGwsIHdlJ2xsIGFzc3VtZSB3ZSdsbCBiZSBub3RpZmllZCBpZlxuICAgICAgLy8gdGhlIHNldCBvZiBpdGVtcyBjaGFuZ2VzIGxhdGVyLiBXZSB0dXJuIG9uIG1lbW9pemF0aW9uIG9mIHRoZSBpdGVtc1xuICAgICAgLy8gcHJvcGVydHkgYnkgc2V0dGluZyBvdXIgaW50ZXJuYWwgcHJvcGVydHkgdG8gbnVsbCAoaW5zdGVhZCBvZlxuICAgICAgLy8gdW5kZWZpbmVkKS5cbiAgICAgIHRoaXNbaXRlbXNTeW1ib2xdID0gbnVsbDtcblxuICAgICAgdGhpcy5pdGVtc0NoYW5nZWQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIHdoZW5ldmVyIGEgbmV3IGl0ZW0gaXMgYWRkZWQgdG8gdGhlIGxpc3QuXG4gICAgICpcbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuIFlvdSBjYW4gb3ZlcnJpZGVcbiAgICAgKiB0aGlzIHRvIHBlcmZvcm0gcGVyLWl0ZW0gaW5pdGlhbGl6YXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpdGVtIC0gVGhlIGl0ZW0gdGhhdCB3YXMgYWRkZWQuXG4gICAgICovXG4gICAgaXRlbUFkZGVkKGl0ZW0pIHtcbiAgICAgIGlmIChzdXBlci5pdGVtQWRkZWQpIHsgc3VwZXIuaXRlbUFkZGVkKGl0ZW0pOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgc2V0IG9mIGl0ZW1zIGluIHRoZSBsaXN0LiBTZWUgdGhlIHRvcC1sZXZlbCBkb2N1bWVudGF0aW9uIGZvclxuICAgICAqIG1peGluIGZvciBhIGRlc2NyaXB0aW9uIG9mIGhvdyBpdGVtcyBkaWZmZXIgZnJvbSBwbGFpbiBjb250ZW50LlxuICAgICAqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50W119XG4gICAgICovXG4gICAgZ2V0IGl0ZW1zKCkge1xuICAgICAgbGV0IGl0ZW1zO1xuICAgICAgaWYgKHRoaXNbaXRlbXNTeW1ib2xdID09IG51bGwpIHtcbiAgICAgICAgaXRlbXMgPSBmaWx0ZXJBdXhpbGlhcnlFbGVtZW50cyh0aGlzLmNvbnRlbnQpO1xuICAgICAgICAvLyBOb3RlOiB0ZXN0IGZvciAqZXF1YWxpdHkqIHdpdGggbnVsbDsgZG9uJ3QgdHJlYXQgdW5kZWZpbmVkIGFzIGEgbWF0Y2guXG4gICAgICAgIGlmICh0aGlzW2l0ZW1zU3ltYm9sXSA9PT0gbnVsbCkge1xuICAgICAgICAgIC8vIE1lbW9pemUgdGhlIHNldCBvZiBpdGVtcy5cbiAgICAgICAgICB0aGlzW2l0ZW1zU3ltYm9sXSA9IGl0ZW1zO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBSZXR1cm4gdGhlIG1lbW9pemVkIGl0ZW1zLlxuICAgICAgICBpdGVtcyA9IHRoaXNbaXRlbXNTeW1ib2xdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbiB0aGUgdW5kZXJseWluZyBjb250ZW50cyBjaGFuZ2UuIEl0IGlzIGFsc29cbiAgICAgKiBpbnZva2VkIG9uIGNvbXBvbmVudCBpbml0aWFsaXphdGlvbiDigJMgc2luY2UgdGhlIGl0ZW1zIGhhdmUgXCJjaGFuZ2VkXCIgZnJvbVxuICAgICAqIGJlaW5nIG5vdGhpbmcuXG4gICAgICovXG4gICAgaXRlbXNDaGFuZ2VkKCkge1xuICAgICAgaWYgKHN1cGVyLml0ZW1zQ2hhbmdlZCkgeyBzdXBlci5pdGVtc0NoYW5nZWQoKTsgfVxuXG4gICAgICAvLyBQZXJmb3JtIHBlci1pdGVtIGluaXRpYWxpemF0aW9uLlxuICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoIWl0ZW1baXRlbUluaXRpYWxpemVkU3ltYm9sXSkge1xuICAgICAgICAgIHRoaXMuaXRlbUFkZGVkKGl0ZW0pO1xuICAgICAgICAgIGl0ZW1baXRlbUluaXRpYWxpemVkU3ltYm9sXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdpdGVtcy1jaGFuZ2VkJykpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogQGV2ZW50IGl0ZW1zLWNoYW5nZWRcbiAgICAgKlxuICAgICAqIFRoaXMgZXZlbnQgaXMgcmFpc2VkIHdoZW4gdGhlIHNldCBvZiBpdGVtcyBjaGFuZ2VzLlxuICAgICAqL1xuICB9XG5cbiAgcmV0dXJuIENvbnRlbnRBc0l0ZW1zO1xufTtcblxuXG4vLyBSZXR1cm4gdGhlIGdpdmVuIGVsZW1lbnRzLCBmaWx0ZXJpbmcgb3V0IGF1eGlsaWFyeSBlbGVtZW50cyB0aGF0IGFyZW4ndFxuLy8gdHlwaWNhbGx5IHZpc2libGUuIEl0ZW1zIHdoaWNoIGFyZSBub3QgZWxlbWVudHMgYXJlIHJldHVybmVkIGFzIGlzLlxuZnVuY3Rpb24gZmlsdGVyQXV4aWxpYXJ5RWxlbWVudHMoaXRlbXMpIHtcbiAgbGV0IGF1eGlsaWFyeVRhZ3MgPSBbXG4gICAgJ2xpbmsnLFxuICAgICdzY3JpcHQnLFxuICAgICdzdHlsZScsXG4gICAgJ3RlbXBsYXRlJ1xuICBdO1xuICByZXR1cm4gW10uZmlsdGVyLmNhbGwoaXRlbXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICByZXR1cm4gIWl0ZW0ubG9jYWxOYW1lIHx8IGF1eGlsaWFyeVRhZ3MuaW5kZXhPZihpdGVtLmxvY2FsTmFtZSkgPCAwO1xuICB9KTtcbn1cblxuXG4vKipcbiAqIEZpcmVzIHdoZW4gdGhlIGl0ZW1zIGluIHRoZSBsaXN0IGNoYW5nZS5cbiAqXG4gKiBAbWVtYmVyb2YgQ29udGVudEFzSXRlbXNcbiAqIEBldmVudCBpdGVtcy1jaGFuZ2VkXG4gKi9cbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi9jcmVhdGVTeW1ib2wnO1xuXG5cbi8vIFN5bWJvbHMgZm9yIHByaXZhdGUgZGF0YSBtZW1iZXJzIG9uIGFuIGVsZW1lbnQuXG5jb25zdCB0YXJnZXRTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3RhcmdldCcpO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggQ29udGVudEZpcnN0Q2hpbGRUYXJnZXQuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB0aGF0IGRlZmluZXMgdGhlIHRhcmdldCBvZiBhIGNvbXBvbmVudCDigJQgdGhlIGVsZW1lbnQgdGhlIGNvbXBvbmVudCBpc1xuICAgKiBtYW5hZ2luZyBvciBzb21laG93IHJlc3BvbnNpYmxlIGZvciDigJQgYXMgaXRzIGZpcnN0IGNoaWxkLlxuICAgKlxuICAgKiBTb21lIGNvbXBvbmVudHMgc2VydmUgdG8gZGVjb3JhdGUgb3IgbW9kaWZ5IG90aGVyIGVsZW1lbnRzLiBBIGNvbW1vblxuICAgKiBwYXR0ZXJuIGlzIHRvIGhhdmUgb25lIGNvbXBvbmVudCB3cmFwIGFub3RoZXIsIGFuZCBoYXZlIHRoZSBvdXRlciwgcGFyZW50XG4gICAqIGNvbXBvbmVudCBpbXBsaWNpdGx5IG1vZGlmeSB0aGUgY2hpbGQuIFRoaXMgbWl4aW4gZmFjaWxpdGF0ZXMgdGhpcyBieVxuICAgKiBpbXBsaWNpdGx5IHRha2luZyBhbiBlbGVtZW50J3MgZmlyc3QgY2hpbGQgYXMgaXRzIFwidGFyZ2V0XCIuXG4gICAqXG4gICAqIEV4YW1wbGU6XG4gICAqXG4gICAqICAgICA8b3V0ZXItZWxlbWVudD5cbiAgICogICAgICAgPGlubmVyLWVsZW1lbnQ+PC9pbm5lci1lbGVtZW50PlxuICAgKiAgICAgPC9vdXRlci1lbGVtZW50PlxuICAgKlxuICAgKiBJZiBgb3V0ZXItZWxlbWVudGAgdXNlcyB0aGlzIG1peGluLCB0aGVuIGl0cyBgdGFyZ2V0YCBwcm9wZXJ0eSB3aWxsIGJlXG4gICAqIHNldCB0byBwb2ludCB0byB0aGUgYGlubmVyLWVsZW1lbnRgLCBiZWNhdXNlIHRoYXQgaXMgaXRzIGZpcnN0IGNoaWxkLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGV4cGVjdHMgYSBgY29udGVudGAgcHJvcGVydHkgdGhhdCByZXR1cm5zIHRoZSBlbGVtZW50J3MgY29udGVudC5cbiAgICogWW91IGNhbiBpbXBsZW1lbnQgdGhhdCB5b3Vyc2VsZiwgb3IgdXNlIHRoZVxuICAgKiBbRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudF0oRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudC5tZCkgbWl4aW4uXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gY2FuIGJlIGNvbWJpbmVkIHdpdGggdGhlXG4gICAqIFtUYXJnZXRJbkNvbGxlY3RpdmVdKFRhcmdldEluQ29sbGVjdGl2ZS5tZCkgbWl4aW4gdG8gaGF2ZSBhIGNvbXBvbmVudFxuICAgKiBwYXJ0aWNpcGF0ZSBpbiBjb2xsZWN0aXZlIGtleWJvYXJkIGhhbmRsaW5nLlxuICAgKi9cbiAgY2xhc3MgQ29udGVudEZpcnN0Q2hpbGRUYXJnZXQgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbnRlbnRDaGFuZ2VkKCkge1xuICAgICAgaWYgKHN1cGVyLmNvbnRlbnRDaGFuZ2VkKSB7IHN1cGVyLmNvbnRlbnRDaGFuZ2VkKCk7IH1cbiAgICAgIGxldCBjb250ZW50ID0gdGhpcy5jb250ZW50O1xuICAgICAgbGV0IHRhcmdldCA9IGNvbnRlbnQgJiYgY29udGVudFswXTtcbiAgICAgIC8vIEEgY29tcG9uZW50IHVzaW5nIGEgdGFyZ2V0IHdpbGwgbGlrZWx5IGRvIGEgYnVuY2ggb2Ygd29yayB3aGVuIHRoZVxuICAgICAgLy8gdGFyZ2V0IGNoYW5nZXMsIHNvIG9ubHkgc2V0IHRoZSB0YXJnZXQgaWYgaXQncyBhY3R1YWxseSBjaGFuZ2VkLlxuICAgICAgaWYgKHRhcmdldCAmJiB0YXJnZXQgIT09IHRoaXMudGFyZ2V0KSB7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMvc2V0cyB0aGUgY3VycmVudCB0YXJnZXQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICBnZXQgdGFyZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXNbdGFyZ2V0U3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IHRhcmdldChlbGVtZW50KSB7XG4gICAgICB0aGlzW3RhcmdldFN5bWJvbF0gPSBlbGVtZW50O1xuICAgICAgaWYgKCd0YXJnZXQnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnRhcmdldCA9IGVsZW1lbnQ7IH1cbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBDb250ZW50Rmlyc3RDaGlsZFRhcmdldDtcbn07XG4iLCIvKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIERpcmVjdGlvblNlbGVjdGlvbi4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIG1hcHMgZGlyZWN0aW9uIHNlbWFudGljcyAoZ29MZWZ0LCBnb1JpZ2h0LCBldGMuKSB0byBzZWxlY3Rpb25cbiAgICogc2VtYW50aWNzIChzZWxlY3RQcmV2aW91cywgc2VsZWN0TmV4dCwgZXRjLikuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gY2FuIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGVcbiAgICogW0tleWJvYXJkRGlyZWN0aW9uXShLZXlib2FyZERpcmVjdGlvbi5tZCkgbWl4aW4gKHdoaWNoIG1hcHMga2V5Ym9hcmQgZXZlbnRzXG4gICAqIHRvIGRpcmVjdGlvbnMpIGFuZCBhIG1peGluIHRoYXQgaGFuZGxlcyBzZWxlY3Rpb24gbGlrZVxuICAgKiBbU2luZ2xlU2VsZWN0aW9uXShTaW5nbGVTZWxlY3Rpb24ubWQpLlxuICAgKi9cbiAgY2xhc3MgRGlyZWN0aW9uU2VsZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBnb0Rvd24oKSB7XG4gICAgICBpZiAoc3VwZXIuZ29Eb3duKSB7IHN1cGVyLmdvRG93bigpOyB9XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3ROZXh0KCk7XG4gICAgfVxuXG4gICAgZ29FbmQoKSB7XG4gICAgICBpZiAoc3VwZXIuZ29FbmQpIHsgc3VwZXIuZ29FbmQoKTsgfVxuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0TGFzdCgpO1xuICAgIH1cblxuICAgIGdvTGVmdCgpIHtcbiAgICAgIGlmIChzdXBlci5nb0xlZnQpIHsgc3VwZXIuZ29MZWZ0KCk7IH1cbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdFByZXZpb3VzKCk7XG4gICAgfVxuXG4gICAgZ29SaWdodCgpIHtcbiAgICAgIGlmIChzdXBlci5nb1JpZ2h0KSB7IHN1cGVyLmdvUmlnaHQoKTsgfVxuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0TmV4dCgpO1xuICAgIH1cblxuICAgIGdvU3RhcnQoKSB7XG4gICAgICBpZiAoc3VwZXIuZ29TdGFydCkgeyBzdXBlci5nb1N0YXJ0KCk7IH1cbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdEZpcnN0KCk7XG4gICAgfVxuXG4gICAgZ29VcCgpIHtcbiAgICAgIGlmIChzdXBlci5nb1VwKSB7IHN1cGVyLmdvVXAoKTsgfVxuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0UHJldmlvdXMoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IGltcGxlbWVudGF0aW9uLiBUaGlzIHdpbGwgdHlwaWNhbGx5IGJlIGhhbmRsZWQgYnkgb3RoZXIgbWl4aW5zLlxuICAgIGdldCBzZWxlY3RlZEZyYWN0aW9uKCkge1xuICAgICAgcmV0dXJuIHN1cGVyLnNlbGVjdGVkRnJhY3Rpb247XG4gICAgfVxuICAgIHNldCBzZWxlY3RlZEZyYWN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoJ3NlbGVjdGVkRnJhY3Rpb24nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkRnJhY3Rpb24gPSB2YWx1ZTsgfVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgaW1wbGVtZW50YXRpb24uIFRoaXMgd2lsbCB0eXBpY2FsbHkgYmUgaGFuZGxlZCBieSBvdGhlciBtaXhpbnMuXG4gICAgc2VsZWN0Rmlyc3QoKSB7XG4gICAgICBpZiAoc3VwZXIuc2VsZWN0Rmlyc3QpIHsgcmV0dXJuIHN1cGVyLnNlbGVjdEZpcnN0KCk7IH1cbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IGltcGxlbWVudGF0aW9uLiBUaGlzIHdpbGwgdHlwaWNhbGx5IGJlIGhhbmRsZWQgYnkgb3RoZXIgbWl4aW5zLlxuICAgIHNlbGVjdExhc3QoKSB7XG4gICAgICBpZiAoc3VwZXIuc2VsZWN0TGFzdCkgeyByZXR1cm4gc3VwZXIuc2VsZWN0TGFzdCgpOyB9XG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCBpbXBsZW1lbnRhdGlvbi4gVGhpcyB3aWxsIHR5cGljYWxseSBiZSBoYW5kbGVkIGJ5IG90aGVyIG1peGlucy5cbiAgICBzZWxlY3ROZXh0KCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdE5leHQpIHsgcmV0dXJuIHN1cGVyLnNlbGVjdE5leHQoKTsgfVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgaW1wbGVtZW50YXRpb24uIFRoaXMgd2lsbCB0eXBpY2FsbHkgYmUgaGFuZGxlZCBieSBvdGhlciBtaXhpbnMuXG4gICAgc2VsZWN0UHJldmlvdXMoKSB7XG4gICAgICBpZiAoc3VwZXIuc2VsZWN0UHJldmlvdXMpIHsgcmV0dXJuIHN1cGVyLnNlbGVjdFByZXZpb3VzKCk7IH1cbiAgICB9XG5cbiAgICAvLyBNYXAgZHJhZyB0cmF2ZWwgZnJhY3Rpb24gdG8gc2VsZWN0aW9uIGZyYWN0aW9uLlxuICAgIGdldCB0cmF2ZWxGcmFjdGlvbigpIHtcbiAgICAgIHJldHVybiBzdXBlci50cmF2ZWxGcmFjdGlvbjtcbiAgICB9XG4gICAgc2V0IHRyYXZlbEZyYWN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoJ3RyYXZlbEZyYWN0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci50cmF2ZWxGcmFjdGlvbiA9IHZhbHVlOyB9XG4gICAgICB0aGlzLnNlbGVjdGVkRnJhY3Rpb24gPSB2YWx1ZTtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBEaXJlY3Rpb25TZWxlY3Rpb247XG59O1xuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBEaXN0cmlidXRlZENoaWxkcmVuLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggZGVmaW5lcyBoZWxwZXJzIGZvciBhY2Nlc3NpbmcgYSBjb21wb25lbnQncyBkaXN0cmlidXRlZFxuICAgKiBjaGlsZHJlbiBhcyBhIGZsYXR0ZW5lZCBhcnJheSBvciBzdHJpbmcuXG4gICAqXG4gICAqIFRoZSBzdGFuZGFyZCBET00gQVBJIHByb3ZpZGVzIHNldmVyYWwgd2F5cyBvZiBhY2Nlc3NpbmcgY2hpbGQgY29udGVudDpcbiAgICogYGNoaWxkcmVuYCwgYGNoaWxkTm9kZXNgLCBhbmQgYHRleHRDb250ZW50YC4gTm9uZSBvZiB0aGVzZSBmdW5jdGlvbnMgYXJlXG4gICAqIFNoYWRvdyBET00gYXdhcmUuIFRoaXMgbWl4aW4gZGVmaW5lcyB2YXJpYXRpb25zIG9mIHRob3NlIGZ1bmN0aW9ucyB0aGF0XG4gICAqICphcmUqIFNoYWRvdyBET00gYXdhcmUuXG4gICAqXG4gICAqIEV4YW1wbGU6IHlvdSBjcmVhdGUgYSBjb21wb25lbnQgYDxjb3VudC1jaGlsZHJlbj5gIHRoYXQgZGlzcGxheXMgYSBudW1iZXJcbiAgICogZXF1YWwgdG8gdGhlIG51bWJlciBvZiBjaGlsZHJlbiBwbGFjZWQgaW5zaWRlIHRoYXQgY29tcG9uZW50LiBJZiBzb21lb25lXG4gICAqIGluc3RhbnRpYXRlcyB5b3VyIGNvbXBvbmVudCBsaWtlOlxuICAgKlxuICAgKiAgICAgPGNvdW50LWNoaWxkcmVuPlxuICAgKiAgICAgICA8ZGl2PjwvZGl2PlxuICAgKiAgICAgICA8ZGl2PjwvZGl2PlxuICAgKiAgICAgICA8ZGl2PjwvZGl2PlxuICAgKiAgICAgPC9jb3VudC1jaGlsZHJlbj5cbiAgICpcbiAgICogVGhlbiB0aGUgY29tcG9uZW50IHNob3VsZCBzaG93IFwiM1wiLCBiZWNhdXNlIHRoZXJlIGFyZSB0aHJlZSBjaGlsZHJlbi4gVG9cbiAgICogY2FsY3VsYXRlIHRoZSBudW1iZXIgb2YgY2hpbGRyZW4sIHRoZSBjb21wb25lbnQgY2FuIGp1c3QgY2FsY3VsYXRlXG4gICAqIGB0aGlzLmNoaWxkcmVuLmxlbmd0aGAuIEhvd2V2ZXIsIHN1cHBvc2Ugc29tZW9uZSBpbnN0YW50aWF0ZXMgeW91clxuICAgKiBjb21wb25lbnQgaW5zaWRlIG9uZSBvZiB0aGVpciBvd24gY29tcG9uZW50cywgYW5kIHB1dHMgYSBgPHNsb3Q+YCBlbGVtZW50XG4gICAqIGluc2lkZSB5b3VyIGNvbXBvbmVudDpcbiAgICpcbiAgICogICAgIDxjb3VudC1jaGlsZHJlbj5cbiAgICogICAgICAgPHNsb3Q+PC9zbG90PlxuICAgKiAgICAgPC9jb3VudC1jaGlsZHJlbj5cbiAgICpcbiAgICogSWYgeW91ciBjb21wb25lbnQgb25seSBsb29rcyBhdCBgdGhpcy5jaGlsZHJlbmAsIGl0IHdpbGwgYWx3YXlzIHNlZSBleGFjdGx5XG4gICAqIG9uZSBjaGlsZCDigJTCoHRoZSBgPHNsb3Q+YCBlbGVtZW50LiBCdXQgdGhlIHVzZXIgbG9va2luZyBhdCB0aGUgcGFnZSB3aWxsXG4gICAqICpzZWUqIGFueSBub2RlcyBkaXN0cmlidXRlZCB0byB0aGF0IHNsb3QuIFRvIG1hdGNoIHdoYXQgdGhlIHVzZXIgc2VlcywgeW91clxuICAgKiBjb21wb25lbnQgc2hvdWxkIGV4cGFuZCBhbnkgYDxzbG90PmAgZWxlbWVudHMgaXQgY29udGFpbnMuXG4gICAqXG4gICAqIFRoYXQgaXMgdGhlIHByb2JsZW0gdGhpcyBtaXhpbiBzb2x2ZXMuIEFmdGVyIGFwcGx5aW5nIHRoaXMgbWl4aW4sIHlvdXJcbiAgICogY29tcG9uZW50IGNvZGUgaGFzIGFjY2VzcyB0byBgdGhpcy5kaXN0cmlidXRlZENoaWxkcmVuYCwgd2hvc2UgYGxlbmd0aGBcbiAgICogd2lsbCByZXR1cm4gdGhlIHRvdGFsIG51bWJlciBvZiBhbGwgY2hpbGRyZW4gZGlzdHJpYnV0ZWQgdG8geW91ciBjb21wb25lbnRcbiAgICogaW4gdGhlIGNvbXBvc2VkIHRyZWUuXG4gICAqXG4gICAqIE5vdGU6IFRoZSBsYXRlc3QgQ3VzdG9tIEVsZW1lbnRzIEFQSSBkZXNpZ24gY2FsbHMgZm9yIGEgbmV3IGZ1bmN0aW9uLFxuICAgKiBgZ2V0QXNzaWduZWROb2Rlc2AgdGhhdCB0YWtlcyBhbiBvcHRpb25hbCBgZGVlcGAgcGFyYW1ldGVyLCB0aGF0IHdpbGwgc29sdmVcbiAgICogdGhpcyBwcm9ibGVtIGF0IHRoZSBBUEkgbGV2ZWwuXG4gICAqL1xuICBjbGFzcyBEaXN0cmlidXRlZENoaWxkcmVuIGV4dGVuZHMgYmFzZSB7XG5cbiAgICAvKipcbiAgICAgKiBBbiBpbi1vcmRlciBjb2xsZWN0aW9uIG9mIGRpc3RyaWJ1dGVkIGNoaWxkcmVuLCBleHBhbmRpbmcgYW55IHNsb3RcbiAgICAgKiBlbGVtZW50cy4gTGlrZSB0aGUgc3RhbmRhcmQgY2hpbGRyZW4gcHJvcGVydHksIHRoaXMgc2tpcHMgdGV4dCBub2Rlcy5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudFtdfVxuICAgICAqL1xuICAgIGdldCBkaXN0cmlidXRlZENoaWxkcmVuKCkge1xuICAgICAgcmV0dXJuIGV4cGFuZENvbnRlbnRFbGVtZW50cyh0aGlzLmNoaWxkcmVuLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQW4gaW4tb3JkZXIgY29sbGVjdGlvbiBvZiBkaXN0cmlidXRlZCBjaGlsZCBub2RlcywgZXhwYW5kaW5nIGFueSBzbG90XG4gICAgICogZWxlbWVudHMuIExpa2UgdGhlIHN0YW5kYXJkIGNoaWxkTm9kZXMgcHJvcGVydHksIHRoaXMgaW5jbHVkZXMgdGV4dFxuICAgICAqIG5vZGVzLlxuICAgICAqXG4gICAgICogQHR5cGUge05vZGVbXX1cbiAgICAgKi9cbiAgICBnZXQgZGlzdHJpYnV0ZWRDaGlsZE5vZGVzKCkge1xuICAgICAgcmV0dXJuIGV4cGFuZENvbnRlbnRFbGVtZW50cyh0aGlzLmNoaWxkTm9kZXMsIHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBjb25jYXRlbmF0ZWQgdGV4dCBjb250ZW50IG9mIGFsbCBkaXN0cmlidXRlZCBjaGlsZCBub2RlcywgZXhwYW5kaW5nXG4gICAgICogYW55IHNsb3QgZWxlbWVudHMuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldCBkaXN0cmlidXRlZFRleHRDb250ZW50KCkge1xuICAgICAgbGV0IHN0cmluZ3MgPSB0aGlzLmRpc3RyaWJ1dGVkQ2hpbGROb2Rlcy5tYXAoZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkLnRleHRDb250ZW50O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gc3RyaW5ncy5qb2luKCcnKTtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBEaXN0cmlidXRlZENoaWxkcmVuO1xufTtcblxuXG4vKlxuICogR2l2ZW4gYSBhcnJheSBvZiBub2RlcywgcmV0dXJuIGEgbmV3IGFycmF5IHdpdGggYW55IGNvbnRlbnQgZWxlbWVudHMgZXhwYW5kZWRcbiAqIHRvIHRoZSBub2RlcyBkaXN0cmlidXRlZCB0byB0aGF0IGNvbnRlbnQgZWxlbWVudC4gVGhpcyBydWxlIGlzIGFwcGxpZWRcbiAqIHJlY3Vyc2l2ZWx5LlxuICpcbiAqIElmIGluY2x1ZGVUZXh0Tm9kZXMgaXMgdHJ1ZSwgdGV4dCBub2RlcyB3aWxsIGJlIGluY2x1ZGVkLCBhcyBpbiB0aGVcbiAqIHN0YW5kYXJkIGNoaWxkTm9kZXMgcHJvcGVydHk7IGJ5IGRlZmF1bHQsIHRoaXMgc2tpcHMgdGV4dCBub2RlcywgbGlrZSB0aGVcbiAqIHN0YW5kYXJkIGNoaWxkcmVuIHByb3BlcnR5LlxuICovXG5mdW5jdGlvbiBleHBhbmRDb250ZW50RWxlbWVudHMobm9kZXMsIGluY2x1ZGVUZXh0Tm9kZXMpIHtcbiAgbGV0IGV4cGFuZGVkID0gQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKG5vZGVzLCBub2RlID0+IHtcbiAgICAvLyBXZSB3YW50IHRvIHNlZSBpZiB0aGUgbm9kZSBpcyBhbiBpbnN0YW5jZW9mIEhUTUxTbG90RUxlbWVudCwgYnV0XG4gICAgLy8gdGhhdCBjbGFzcyB3b24ndCBleGlzdCBpZiB0aGUgYnJvd3NlciB0aGF0IGRvZXNuJ3Qgc3VwcG9ydCBuYXRpdmVcbiAgICAvLyBTaGFkb3cgRE9NIGFuZCBpZiB0aGUgU2hhZG93IERPTSBwb2x5ZmlsbCBoYXNuJ3QgYmVlbiBsb2FkZWQuIEluc3RlYWQsXG4gICAgLy8gd2UgZG8gYSBzaW1wbGlzdGljIGNoZWNrIHRvIHNlZSBpZiB0aGUgdGFnIG5hbWUgaXMgXCJzbG90XCIuXG4gICAgbGV0IGlzU2xvdCA9IHR5cGVvZiBIVE1MU2xvdEVsZW1lbnQgIT09ICd1bmRlZmluZWQnID9cbiAgICAgIG5vZGUgaW5zdGFuY2VvZiBIVE1MU2xvdEVsZW1lbnQgOlxuICAgICAgbm9kZS5sb2NhbE5hbWUgPT09ICdzbG90JztcbiAgICBpZiAoaXNTbG90KSB7XG4gICAgICAvLyBVc2UgdGhlIG5vZGVzIGFzc2lnbmVkIHRvIHRoaXMgbm9kZSBpbnN0ZWFkLlxuICAgICAgbGV0IGFzc2lnbmVkTm9kZXMgPSBub2RlLmFzc2lnbmVkTm9kZXMoeyBmbGF0dGVuOiB0cnVlIH0pO1xuICAgICAgcmV0dXJuIGFzc2lnbmVkTm9kZXMgP1xuICAgICAgICBleHBhbmRDb250ZW50RWxlbWVudHMoYXNzaWduZWROb2RlcywgaW5jbHVkZVRleHROb2RlcykgOlxuICAgICAgICBbXTtcbiAgICB9IGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgLy8gUGxhaW4gZWxlbWVudDsgdXNlIGFzIGlzLlxuICAgICAgcmV0dXJuIFtub2RlXTtcbiAgICB9IGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBUZXh0ICYmIGluY2x1ZGVUZXh0Tm9kZXMpIHtcbiAgICAgIC8vIFRleHQgbm9kZS5cbiAgICAgIHJldHVybiBbbm9kZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIENvbW1lbnQsIHByb2Nlc3NpbmcgaW5zdHJ1Y3Rpb24sIGV0Yy47IHNraXAuXG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9KTtcbiAgbGV0IGZsYXR0ZW5lZCA9IFtdLmNvbmNhdCguLi5leHBhbmRlZCk7XG4gIHJldHVybiBmbGF0dGVuZWQ7XG59XG4iLCJpbXBvcnQgbWljcm90YXNrIGZyb20gJy4vbWljcm90YXNrJztcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBkZWZpbmVzIGEgY29tcG9uZW50J3MgY29udGVudCBhcyBpdHMgY2hpbGRyZW4sIGV4cGFuZGluZyBhbnlcbiAgICogbm9kZXMgZGlzdHJpYnV0ZWQgdG8gdGhlIGNvbXBvbmVudCdzIHNsb3RzLlxuICAgKlxuICAgKiBUaGlzIGFsc28gcHJvdmlkZXMgbm90aWZpY2F0aW9uIG9mIGNoYW5nZXMgdG8gYSBjb21wb25lbnQncyBjb250ZW50LiBJdFxuICAgKiB3aWxsIGludm9rZSBhIGBjb250ZW50Q2hhbmdlZGAgbWV0aG9kIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBmaXJzdFxuICAgKiBpbnN0YW50aWF0ZWQsIGFuZCB3aGVuZXZlciBpdHMgZGlzdHJpYnV0ZWQgY2hpbGRyZW4gY2hhbmdlLiBUaGlzIGlzIGFuXG4gICAqIGVhc3kgd2F5IHRvIHNhdGlzZnkgdGhlIEdvbGQgU3RhbmRhcmQgY2hlY2tsaXN0IGl0ZW0gZm9yIG1vbml0b3JpbmdcbiAgICogW0NvbnRlbnQgQ2hhbmdlc10oaHR0cHM6Ly9naXRodWIuY29tL3dlYmNvbXBvbmVudHMvZ29sZC1zdGFuZGFyZC93aWtpL0NvbnRlbnQtQ2hhbmdlcykuXG4gICAqXG4gICAqIEV4YW1wbGU6XG4gICAqXG4gICAqIGBgYFxuICAgKiBsZXQgYmFzZSA9IERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQoRGlzdHJpYnV0ZWRDaGlsZHJlbihIVE1MRWxlbWVudCkpO1xuICAgKiBjbGFzcyBDb3VudGluZ0VsZW1lbnQgZXh0ZW5kcyBiYXNlIHtcbiAgICpcbiAgICogICBjb25zdHJ1Y3RvcigpIHtcbiAgICogICAgIHN1cGVyKCk7XG4gICAqICAgICBsZXQgcm9vdCA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICAgKiAgICAgcm9vdC5pbm5lckhUTUwgPSBgPHNsb3Q+PC9zbG90PmA7XG4gICAqICAgfVxuICAgKlxuICAgKiAgIGNvbnRlbnRDaGFuZ2VkKCkge1xuICAgKiAgICAgLy8gQ291bnQgdGhlIGNvbXBvbmVudCdzIGNoaWxkcmVuLCBib3RoIGluaXRpYWxseSBhbmQgd2hlbiBjaGFuZ2VkLlxuICAgKiAgICAgdGhpcy5jb3VudCA9IHRoaXMuZGlzdHJpYnV0ZWRDaGlsZHJlbi5sZW5ndGg7XG4gICAqICAgfVxuICAgKlxuICAgKiB9XG4gICAqIGBgYFxuICAgKlxuICAgKiBOb3RlIHRoYXQgY29udGVudCBjaGFuZ2UgZGV0ZWN0aW9uIGRlcGVuZHMgdXBvbiB0aGUgZWxlbWVudCBoYXZpbmcgYXQgbGVhc3RcbiAgICogb25lIGBzbG90YCBlbGVtZW50IGluIGl0cyBzaGFkb3cgc3VidHJlZS5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBpcyBpbnRlbmRlZCBmb3IgdXNlIHdpdGggdGhlXG4gICAqIFtEaXN0cmlidXRlZENoaWxkcmVuXShEaXN0cmlidXRlZENoaWxkcmVuLm1kKSBtaXhpbi4gU2VlIHRoYXQgbWl4aW4gZm9yIGFcbiAgICogZGlzY3Vzc2lvbiBvZiBob3cgdGhhdCB3b3Jrcy4gVGhpcyBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50IG1peGluXG4gICAqIHByb3ZpZGVzIGFuIGVhc3kgd2F5IG9mIGRlZmluaW5nIHRoZSBcImNvbnRlbnRcIiBvZiBhIGNvbXBvbmVudCBhcyB0aGVcbiAgICogY29tcG9uZW50J3MgZGlzdHJpYnV0ZWQgY2hpbGRyZW4uIFRoYXQgaW4gdHVybiBsZXRzIG1peGlucyBsaWtlXG4gICAqIFtDb250ZW50QXNJdGVtc10oQ29udGVudEFzSXRlbXMubWQpIG1hbmlwdWxhdGUgdGhlIGNoaWxkcmVuIGFzIGxpc3QgaXRlbXMuXG4gICAqL1xuICBjbGFzcyBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50IGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG5cbiAgICAgIGlmICh0aGlzLnNoYWRvd1Jvb3QpIHtcbiAgICAgICAgLy8gTGlzdGVuIHRvIGNoYW5nZXMgb24gYWxsIHNsb3RzLlxuICAgICAgICBsZXQgc2xvdHMgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvckFsbCgnc2xvdCcpO1xuICAgICAgICBzbG90cy5mb3JFYWNoKHNsb3QgPT4gc2xvdC5hZGRFdmVudExpc3RlbmVyKCdzbG90Y2hhbmdlJywgZXZlbnQgPT4ge1xuICAgICAgICAgIHRoaXMuY29udGVudENoYW5nZWQoKTtcbiAgICAgICAgfSkpO1xuICAgICAgfVxuXG4gICAgICAvLyBNYWtlIGFuIGluaXRpYWwgY2FsbCB0byBjb250ZW50Q2hhbmdlZCgpIHNvIHRoYXQgdGhlIGNvbXBvbmVudCBjYW4gZG9cbiAgICAgIC8vIGluaXRpYWxpemF0aW9uIHRoYXQgaXQgbm9ybWFsbHkgZG9lcyB3aGVuIGNvbnRlbnQgY2hhbmdlcy5cbiAgICAgIC8vXG4gICAgICAvLyBUaGlzIHdpbGwgaW52b2tlIGNvbnRlbnRDaGFuZ2VkKCkgaGFuZGxlcnMgaW4gb3RoZXIgbWl4aW5zLiBJbiBvcmRlclxuICAgICAgLy8gdGhhdCB0aG9zZSBtaXhpbnMgaGF2ZSBhIGNoYW5jZSB0byBjb21wbGV0ZSB0aGVpciBvd24gaW5pdGlhbGl6YXRpb24sXG4gICAgICAvLyB3ZSBhZGQgdGhlIGNvbnRlbnRDaGFuZ2VkKCkgY2FsbCB0byB0aGUgbWljcm90YXNrIHF1ZXVlLlxuICAgICAgbWljcm90YXNrKCgpID0+IHRoaXMuY29udGVudENoYW5nZWQoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSBjb250ZW50cyBvZiB0aGUgY29tcG9uZW50IChpbmNsdWRpbmcgZGlzdHJpYnV0ZWRcbiAgICAgKiBjaGlsZHJlbikgaGF2ZSBjaGFuZ2VkLlxuICAgICAqXG4gICAgICogVGhpcyBtZXRob2QgaXMgYWxzbyBpbnZva2VkIHdoZW4gYSBjb21wb25lbnQgaXMgZmlyc3QgaW5zdGFudGlhdGVkOyB0aGVcbiAgICAgKiBjb250ZW50cyBoYXZlIGVzc2VudGlhbGx5IFwiY2hhbmdlZFwiIGZyb20gYmVpbmcgbm90aGluZy4gVGhpcyBhbGxvd3MgdGhlXG4gICAgICogY29tcG9uZW50IHRvIHBlcmZvcm0gaW5pdGlhbCBwcm9jZXNzaW5nIG9mIGl0cyBjaGlsZHJlbi5cbiAgICAgKi9cbiAgICBjb250ZW50Q2hhbmdlZCgpIHtcbiAgICAgIGlmIChzdXBlci5jb250ZW50Q2hhbmdlZCkgeyBzdXBlci5jb250ZW50Q2hhbmdlZCgpOyB9XG4gICAgICBsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2NvbnRlbnQtY2hhbmdlZCcpO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29udGVudCBvZiB0aGlzIGNvbXBvbmVudCwgZGVmaW5lZCB0byBiZSB0aGUgZmxhdHRlbmVkIGFycmF5IG9mXG4gICAgICogY2hpbGRyZW4gZGlzdHJpYnV0ZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudFtdfVxuICAgICAqL1xuICAgIGdldCBjb250ZW50KCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGlzdHJpYnV0ZWRDaGlsZHJlbjtcbiAgICB9XG4gICAgc2V0IGNvbnRlbnQodmFsdWUpIHtcbiAgICAgIGlmICgnY29udGVudCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuY29udGVudCA9IHZhbHVlOyB9XG4gICAgICAvLyBUT0RPOiBTZXQgdGhlIGNoaWxkcmVuIHRvIHRoZSBnaXZlbiB2YWx1ZSAod2hpY2ggc2hvdWxkIGJlIGFuIGFycmF5IG9mXG4gICAgICAvLyBlbGVtZW50cyk/XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBldmVudCBpcyByYWlzZWQgd2hlbiB0aGUgY29tcG9uZW50J3MgY29udGVudHMgKGluY2x1ZGluZyBkaXN0cmlidXRlZFxuICAgICAqIGNoaWxkcmVuKSBoYXZlIGNoYW5nZWQuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudFxuICAgICAqIEBldmVudCBjb250ZW50LWNoYW5nZWRcbiAgICAgKi9cbiAgfVxuXG4gIHJldHVybiBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50O1xufTtcbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi9jcmVhdGVTeW1ib2wnO1xuXG5cbi8vIFN5bWJvbHMgZm9yIHByaXZhdGUgZGF0YSBtZW1iZXJzIG9uIGFuIGVsZW1lbnQuXG5jb25zdCBzZWxlY3RlZEZyYWN0aW9uU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdzZWxlY3RlZEZyYWN0aW9uJyk7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBGcmFjdGlvbmFsU2VsZWN0aW9uLiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl4aW4oYmFzZSkge1xuXG4gIC8qKlxuICAgKiBBZGRzIHN1cHBvcnQgZm9yIGZyYWN0aW9uYWwgc2VsZWN0aW9uOiB0cmVhdGluZyBhIHNlbGVjdGlvbiBhcyBhIHJlYWxcbiAgICogbnVtYmVyIHRoYXQgY29tYmluZXMgYW4gaW50ZWdlciBwb3J0aW9uIChhbiBpbmRleCBpbnRvIGEgbGlzdCksIGFuZCBhXG4gICAqIGZyYWN0aW9uIChpbmRpY2F0aW5nIGhvdyBmYXIgb2YgdGhlIHdheSB3ZSBhcmUgdG8gdGhlIG5leHQgb3IgcHJldmlvdXNcbiAgICogaXRlbSkuXG4gICAqXG4gICAqIFRoaXMgaXMgdXNlZnVsIGluIGNvbXBvbmVudHMgdGhhdCBzdXBwb3J0IGluY3JlbWVudGFsIG9wZXJhdGlvbnMgZHVyaW5nXG4gICAqIGRyYWdnaW5nIGFuZCBzd2lwaW5nLiBFeGFtcGxlOiBhIGNhcm91c2VsIGNvbXBvbmVudCBoYXMgc2V2ZXJhbCBpdGVtcywgYW5kIHRoZVxuICAgKiBjdXJyZW50bHkgc2VsZWN0ZWQgaXRlbSBpcyBpdGVtIDMuIFRoZSB1c2VyIGJlZ2lucyBzd2lwaW5nIHRvIHRoZSBsZWZ0LFxuICAgKiBtb3ZpbmcgdG93YXJkcyBzZWxlY3RpbmcgaXRlbSA0LiBIYWxmd2F5IHRocm91Z2ggdGhpcyBvcGVyYXRpb24sIHRoZVxuICAgKiBmcmFjdGlvbmFsIHNlbGVjdGlvbiB2YWx1ZSBpcyAzLjUuXG4gICAqXG4gICAqIFRoaXMgdmFsdWUgcGVybWl0cyBjb21tdW5pY2F0aW9uIGJldHdlZW4gbWl4aW5zIGxpa2VcbiAgICogW1N3aXBlRGlyZWN0aW9uXSguL1N3aXBlRGlyZWN0aW9uLm1kKSBhbmRcbiAgICogW1RyYWNrcGFkRGlyZWN0aW9uXSguL1RyYWNrcGFkRGlyZWN0aW9uLm1kKSwgd2hpY2ggZ2VuZXJhdGUgZnJhY3Rpb25hbFxuICAgKiBzZWxlY3Rpb24gdmFsdWVzLCBhbmQgbWl4aW5zIGxpa2VcbiAgICogW1NlbGVjdGlvbkFuaW1hdGlvbl0oLi9TZWxlY3Rpb25BbmltYXRpb24ubWQpLCB3aGljaCBjYW4gcmVuZGVyIHNlbGVjdGlvblxuICAgKiBhdCBhIGZyYWN0aW9uYWwgdmFsdWUuXG4gICAqL1xuICBjbGFzcyBGcmFjdGlvbmFsU2VsZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jb25uZWN0ZWRDYWxsYmFjaykgeyBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpOyB9XG4gICAgICB0aGlzLnNlbGVjdGVkRnJhY3Rpb24gPSAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgZnJhY3Rpb25hbCB2YWx1ZSBpbmRpY2F0aW5nIGhvdyBmYXIgdGhlIHVzZXIgaGFzIGN1cnJlbnRseSBhZHZhbmNlZCB0b1xuICAgICAqIHRoZSBuZXh0L3ByZXZpb3VzIGl0ZW0uIEUuZy4sIGEgYHNlbGVjdGVkRnJhY3Rpb25gIG9mIDMuNSBpbmRpY2F0ZXMgdGhlXG4gICAgICogdXNlciBpcyBoYWxmd2F5IGJldHdlZW4gaXRlbXMgMyBhbmQgNC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGVkRnJhY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpc1tzZWxlY3RlZEZyYWN0aW9uU3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGVkRnJhY3Rpb24odmFsdWUpIHtcbiAgICAgIHRoaXNbc2VsZWN0ZWRGcmFjdGlvblN5bWJvbF0gPSB2YWx1ZTtcbiAgICAgIGlmICgnc2VsZWN0ZWRGcmFjdGlvbicgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRGcmFjdGlvbiA9IHZhbHVlOyB9XG4gICAgICBsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3NlbGVjdGVkLWZyYWN0aW9uLWNoYW5nZWQnKTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gRnJhY3Rpb25hbFNlbGVjdGlvbjtcbn1cblxuXG5taXhpbi5oZWxwZXJzID0ge1xuXG4gIC8qXG4gICAqIERhbXBlbiBhIHNlbGVjdGlvbiB0aGF0IGdvZXMgcGFzdCB0aGUgYmVnaW5uaW5nIG9yIGVuZCBvZiBhIGxpc3QuIFRoaXMgaXNcbiAgICogZ2VuZXJhbGx5IHVzZWQgdG8gcHJvZHVjZSBhIHZpc3VhbCBlZmZlY3Qgb2YgdGVuc2lvbiBhcyB0aGUgdXNlciB0cmllcyB0b1xuICAgKiBnbyBmdXJ0aGVyIGluIGEgZGlyZWN0aW9uIHRoYXQgaGFzIG5vIG1vcmUgaXRlbXMuXG4gICAqXG4gICAqIEV4YW1wbGU6IHN1cHBvc2UgYGl0ZW1Db3VudGAgaXMgNSwgaW5kaWNhdGluZyBhIGxpc3Qgb2YgNSBpdGVtcy4gVGhlIGluZGV4IG9mXG4gICAqIHRoZSBsYXN0IGl0ZW0gaXMgNC4gSWYgdGhlIGBzZWxlY3Rpb25gIHBhcmFtZXRlciBpcyA0LjUsIHRoZSB1c2VyIGlzIHRyeWluZ1xuICAgKiB0byBnbyBwYXN0IHRoaXMgbGFzdCBpdGVtLiBXaGVuIGEgZGFtcGluZyBmdW5jdGlvbiBpcyBhcHBsaWVkLCB0aGUgcmVzdWx0aW5nXG4gICAqIHZhbHVlIHdpbGwgYmUgbGVzcyB0aGFuIDQuNSAodGhlIGFjdHVhbCB2YWx1ZSB3aWxsIGJlIDQuMjUpLiBXaGVuIHRoaXNcbiAgICogc2VsZWN0aW9uIHN0YXRlIGlzIHJlbmRlcmVkLCB0aGUgdXNlciB3aWxsIHNlZSB0aGF0LCBlYWNoIHVuaXQgZGlzdGFuY2UgdGhlXG4gICAqIGRyYWcgdHJhdmVscyBoYXMgbGVzcyBhbmQgbGVzcyB2aXNpYmxlIGVmZmVjdC4gVGhpcyBpcyBwZXJjZWl2ZWQgYXMgdGVuc2lvbi5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNlbGVjdGlvbiAtIEEgcmVhbCBudW1iZXIgaW5kaWNhdGluZyBhIHNlbGVjdGlvbiBwb3NpdGlvblxuICAgKiBAcGFyYW0ge251bWJlcn0gaXRlbUNvdW50IC0gQW4gaW50ZWdlciBmb3IgdGhlIG51bWJlciBvZiBpdGVtcyBpbiB0aGUgbGlzdFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBBIHJlYWwgbnVtYmVyIHJlcHJlc2VudGluZyB0aGUgZGFtcGVkIHNlbGVjdGlvbiB2YWx1ZS5cbiAgICovXG4gIGRhbXBlZFNlbGVjdGlvbihzZWxlY3Rpb24sIGl0ZW1Db3VudCkge1xuICAgIGxldCBkYW1wZWQ7XG4gICAgbGV0IGJvdW5kID0gaXRlbUNvdW50IC0gMTtcbiAgICBpZiAoc2VsZWN0aW9uIDwgMCkge1xuICAgICAgLy8gVHJ5aW5nIHRvIGdvIHBhc3QgYmVnaW5uaW5nIG9mIGxpc3QuIEFwcGx5IHRlbnNpb24gZnJvbSB0aGUgbGVmdCBlZGdlLlxuICAgICAgZGFtcGVkID0gLW1peGluLmhlbHBlcnMuZGFtcGluZygtc2VsZWN0aW9uKTtcbiAgICB9IGVsc2UgaWYgKHNlbGVjdGlvbiA+PSBib3VuZCkge1xuICAgICAgLy8gVHJ5aW5nIHRvIGdvIHBhc3QgZW5kIG9mIGxpc3QuIEFwcGx5IHRlbnNpb24gZnJvbSB0aGUgcmlnaHQgZWRnZS5cbiAgICAgIGRhbXBlZCA9IGJvdW5kICsgbWl4aW4uaGVscGVycy5kYW1waW5nKHNlbGVjdGlvbiAtIGJvdW5kKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTm8gZGFtcGluZyByZXF1aXJlZC5cbiAgICAgIGRhbXBlZCA9IHNlbGVjdGlvbjtcbiAgICB9XG4gICAgcmV0dXJuIGRhbXBlZDtcbiAgfSxcblxuICAvKlxuICAgKiBDYWxjdWxhdGUgZGFtcGluZyBhcyBhIGZ1bmN0aW9uIG9mIHRoZSBkaXN0YW5jZSBwYXN0IHRoZSBtaW5pbXVtL21heGltdW1cbiAgICogdmFsdWVzLlxuICAgKlxuICAgKiBXZSB3YW50IHRvIGFzeW1wdG90aWNhbGx5IGFwcHJvYWNoIGFuIGFic29sdXRlIG1pbmltdW0gb2YgMSB1bml0XG4gICAqIGJlbG93L2Fib3ZlIHRoZSBhY3R1YWwgbWluaW11bS9tYXhpbXVtLiBUaGlzIHJlcXVpcmVzIGNhbGN1bGF0aW5nIGFcbiAgICogaHlwZXJib2xpYyBmdW5jdGlvbi5cbiAgICpcbiAgICogU2VlIGh0dHA6Ly93d3cud29sZnJhbWFscGhhLmNvbS9pbnB1dC8/aT15KyUzRCstMSUyRiUyOHglMkIxJTI5KyUyQisxXG4gICAqIGZvciB0aGUgb25lIHdlIHVzZS4gVGhlIG9ubHkgcG9ydGlvbiBvZiB0aGF0IGZ1bmN0aW9uIHdlIGNhcmUgYWJvdXQgaXMgd2hlblxuICAgKiB4IGlzIHplcm8gb3IgZ3JlYXRlci4gQW4gaW1wb3J0YW50IGNvbnNpZGVyYXRpb24gaXMgdGhhdCB0aGUgY3VydmUgYmVcbiAgICogdGFuZ2VudCB0byB0aGUgZGlhZ29uYWwgbGluZSB4PXkgYXQgKDAsIDApLiBUaGlzIGVuc3VyZXMgc21vb3RoIGNvbnRpbnVpdHlcbiAgICogd2l0aCB0aGUgbm9ybWFsIGRyYWcgYmVoYXZpb3IsIGluIHdoaWNoIHRoZSB2aXNpYmxlIHNsaWRpbmcgaXMgbGluZWFyIHdpdGhcbiAgICogdGhlIGRpc3RhbmNlIHRoZSB0b3VjaHBvaW50IGhhcyBiZWVuIGRyYWdnZWQuXG4gICAqL1xuICBkYW1waW5nKHgpIHtcbiAgICBsZXQgeSA9ICgtMSAvICh4ICsgMSkpICsgMTtcbiAgICByZXR1cm4geTtcbiAgfSxcblxuICAvKlxuICAgKiBSZXR1cm4gdGhlIGN1cnJlbnQgZnJhY3Rpb25hbCBzZWxlY3Rpb24gdmFsdWUgZm9yIHRoZSBnaXZlbiBlbGVtZW50LlxuICAgKlxuICAgKiBUaGlzIHNpbXBseSBhZGRzIHRoZSBlbGVtZW50J3MgYHNlbGVjdGVkSW5kZXhgIGFuZCBgc2VsZWN0ZWRGcmFjdGlvbmBcbiAgICogcHJvcGVydGllcy5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIEFuIGVsZW1lbnQgdGhhdCBzdXBwb3J0cyBzZWxlY3Rpb25cbiAgICovXG4gIGVsZW1lbnRTZWxlY3Rpb24oZWxlbWVudCkge1xuICAgIGxldCBzZWxlY3RlZEluZGV4ID0gZWxlbWVudC5zZWxlY3RlZEluZGV4O1xuICAgIGlmIChzZWxlY3RlZEluZGV4IDwgMCkge1xuICAgICAgLy8gTm8gc2VsZWN0aW9uXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBzZWxlY3RlZEZyYWN0aW9uID0gZWxlbWVudC5zZWxlY3RlZEZyYWN0aW9uIHx8IDA7XG4gICAgcmV0dXJuIHNlbGVjdGVkSW5kZXggKyBzZWxlY3RlZEZyYWN0aW9uO1xuICB9LFxuXG4gIC8qXG4gICAqIEJyZWFrcyBhIGZyYWN0aW9uYWwgc2VsZWN0aW9uIGludG8gaXRzIGludGVnZXIgYW5kIGZyYWN0aW9uYWwgcGFydHMuXG4gICAqXG4gICAqIEV4YW1wbGU6IGlmIHBhc3NlZCAzLjUsIHRoaXMgcmV0dXJucyB7IGluZGV4OiAzLCBmcmFjdGlvbjogNSB9LlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2VsZWN0aW9uIOKAk8KgQSByZWFsIG51bWJlciByZXByZXNlbnRpbmcgYSBzZWxlY3Rpb24gcG9pbnRcbiAgICogQHJldHVybnMge29iamVjdH0gLSBBbiBvYmplY3Qgd2l0aCBhbiBgaW5kZXhgIHByb3BlcnR5IGhvbGRpbmcgdGhlXG4gICAqIHNlbGVjdGlvbidzIGludGVnZXIgY29tcG9uZW50LCBhbmQgYSBgZnJhY3Rpb25gIHByb3BlcnR5IGhvbGRpbmcgdGhlXG4gICAqIHNlbGVjdGlvbidzIGZyYWN0aW9uYWwgY29tcG9uZW50LlxuICAgKi9cbiAgc2VsZWN0aW9uUGFydHMoc2VsZWN0aW9uKSB7XG4gICAgLy8gU3R1cGlkIElFIGRvZXNuJ3QgaGF2ZSBNYXRoLnRydW5jLlxuICAgIC8vIGxldCBpbmRleCA9IE1hdGgudHJ1bmMoc2VsZWN0aW9uKTtcbiAgICBsZXQgaW5kZXggPSBzZWxlY3Rpb24gPCAwID8gTWF0aC5jZWlsKHNlbGVjdGlvbikgOiBNYXRoLmZsb29yKHNlbGVjdGlvbik7XG4gICAgbGV0IGZyYWN0aW9uID0gc2VsZWN0aW9uIC0gaW5kZXg7XG4gICAgcmV0dXJuIHsgaW5kZXgsIGZyYWN0aW9uIH07XG4gIH0sXG5cbiAgLypcbiAgICogUmV0dXJucyBhIGZyYWN0aW9uYWwgc2VsZWN0aW9uIHBvaW50IGFmdGVyIGFjY291bnRpbmcgZm9yIHdyYXBwaW5nLCBlbnN1cmluZ1xuICAgKiB0aGF0IHRoZSBpbnRlZ2VyIHBvcnRpb24gb2YgdGhlIHNlbGVjdGlvbiBzdGF5cyBiZXR3ZWVuIDAgYW5kIGBpdGVtQ291bnRgLTEuXG4gICAqIFRoYXQgaXMsIHRoZSBpbnRlZ2VyIHBvcnRpb24gd2lsbCBhbHdheXMgYmUgYSB2YWxpZCBpbmRleCBpbnRvIHRoZSBsaXN0LlxuICAgKlxuICAgKiBFeGFtcGxlIG9mIHdyYXBwaW5nIHBhc3QgdGhlIGVuZCBvZiB0aGUgbGlzdDogaWYgYHNlbGVjdGlvbmAgaXMgNS41IGFuZFxuICAgKiBgaXRlbUNvdW50YCBpcyA1LCB0aGlzIHJldHVybnMgMC41LiBFeGFtcGxlIG9mIHdyYXBwaW5nIHBhc3QgdGhlIGJlZ2lubmluZyBvZlxuICAgKiB0aGUgbGlzdDogaWYgYHNlbGVjdGlvbmAgaXMgMC41IGFuZCBgaXRlbUNvdW50YCBpcyA1LCB0aGlzIHJldHVybnMgNC41LlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2VsZWN0aW9uIC0gQSByZWFsIG51bWJlciByZXByZXNlbnRpbmcgYSBzZWxlY3Rpb24gcG9pbnRcbiAgICogQHBhcmFtIHtudW1iZXJ9IGl0ZW1Db3VudCAtIFRoZSBudW1iZXIgb2YgaXRlbXMgaW4gdGhlIGxpc3RcbiAgICogQHJldHVybnMge251bWJlcn0gLSBUaGUgcmVzdWx0IG9mIHdyYXBwaW5nIHRoZSBzZWxlY3Rpb24gcG9pbnRcbiAgICovXG4gIHdyYXBwZWRTZWxlY3Rpb24oc2VsZWN0aW9uLCBpdGVtQ291bnQpIHtcbiAgICAvLyBIYW5kbGVzIHBvc3NpYmlsaXR5IG9mIG5lZ2F0aXZlIG1vZC5cbiAgICAvLyBTZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTg2MTgyNTAvNzY0NzJcbiAgICByZXR1cm4gKChzZWxlY3Rpb24gJSBpdGVtQ291bnQpICsgaXRlbUNvdW50KSAlIGl0ZW1Db3VudDtcbiAgfSxcblxuICAvKlxuICAgKiBSZXR1cm4gdGhlIHBhcnRzIG9mIGEgc2VsZWN0aW9uLCBmaXJzdCB3cmFwcGluZyBpZiBuZWNlc3NhcnkuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzZWxlY3Rpb24g4oCTIEEgcmVhbCBudW1iZXIgcmVwcmVzZW50aW5nIGEgc2VsZWN0aW9uIHBvaW50XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpdGVtQ291bnQgLSBUaGUgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZSBsaXN0XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gd3JhcCDigJMgVHJ1ZSBpZiB0aGUgc2VsZWN0aW9uIHNob3VsZCB3cmFwIHRvIHN0YXkgd2l0aGluIHRoZVxuICAgKiBsaXN0XG4gICAqIEByZXR1cm5zIHtvYmplY3R9IOKAkyBUaGUgcGFydHMgb2YgdGhlIHNlbGVjdGlvbiwgdXNpbmcgdGhlIHNhbWUgZm9ybWF0IGFzXG4gICAqIGBzZWxlY3Rpb25QYXJ0c2AuXG4gICAqL1xuICB3cmFwcGVkU2VsZWN0aW9uUGFydHMoc2VsZWN0aW9uLCBpdGVtQ291bnQsIHdyYXApIHtcbiAgICBpZiAod3JhcCkge1xuICAgICAgc2VsZWN0aW9uID0gbWl4aW4uaGVscGVycy53cmFwcGVkU2VsZWN0aW9uKHNlbGVjdGlvbiwgaXRlbUNvdW50KTtcbiAgICB9XG4gICAgcmV0dXJuIG1peGluLmhlbHBlcnMuc2VsZWN0aW9uUGFydHMoc2VsZWN0aW9uKTtcbiAgfVxuXG59O1xuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuL2NyZWF0ZVN5bWJvbCc7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IGdlbmVyaWNTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2dlbmVyaWMnKTtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIEdlbmVyaWMuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBhbGxvd3MgYSBjb21wb25lbnQgdG8gc3VwcG9ydCBhIFwiZ2VuZXJpY1wiIHN0eWxlOiBhIG1pbmltYWxpc3RcbiAgICogc3R5bGUgdGhhdCBjYW4gZWFzaWx5IGJlIHJlbW92ZWQgdG8gcmVzZXQgaXRzIHZpc3VhbCBhcHBlYXJhbmNlIHRvIGFcbiAgICogYmFzZWxpbmUgc3RhdGUuXG4gICAqXG4gICAqIEJ5IGRlZmF1bHQsIGEgY29tcG9uZW50IHNob3VsZCBwcm92aWRlIGEgbWluaW1hbCB2aXN1YWwgcHJlc2VudGF0aW9uIHRoYXRcbiAgICogYWxsb3dzIHRoZSBjb21wb25lbnQgdG8gZnVuY3Rpb24uIEhvd2V2ZXIsIHRoZSBtb3JlIHN0eWxpbmcgdGhlIGNvbXBvbmVudFxuICAgKiBwcm92aWRlcyBieSBkZWZhdWx0LCB0aGUgaGFyZGVyIGl0IGJlY29tZXMgdG8gZ2V0IHRoZSBjb21wb25lbnQgdG8gZml0IGluXG4gICAqIGluIG90aGVyIHNldHRpbmdzLiBFYWNoIENTUyBydWxlIGhhcyB0byBiZSBvdmVycmlkZGVuLiBXb3JzZSwgbmV3IENTUyBydWxlc1xuICAgKiBhZGRlZCB0byB0aGUgZGVmYXVsdCBzdHlsZSB3b24ndCBiZSBvdmVycmlkZGVuIGJ5IGRlZmF1bHQsIG1ha2luZyBpdCBoYXJkXG4gICAqIHRvIGtub3cgd2hldGhlciBhIG5ldyB2ZXJzaW9uIG9mIGEgY29tcG9uZW50IHdpbGwgc3RpbGwgbG9vayBva2F5LlxuICAgKlxuICAgKiBBcyBhIGNvbXByb21pc2UsIHRoZSBtaXhpbiBkZWZpbmVzIGEgYGdlbmVyaWNgIGF0dHJpYnV0ZS4gVGhpcyBhdHRyaWJ1dGUgaXNcbiAgICogbm9ybWFsbHkgc2V0IGJ5IGRlZmF1bHQsIGFuZCBzdHlsZXMgY2FuIGJlIHdyaXR0ZW4gdGhhdCBhcHBseSBvbmx5IHdoZW4gdGhlXG4gICAqIGdlbmVyaWMgYXR0cmlidXRlIGlzIHNldC4gVGhpcyBhbGxvd3MgdGhlIGNvbnN0cnVjdGlvbiBvZiBDU1MgcnVsZXMgdGhhdFxuICAgKiB3aWxsIG9ubHkgYXBwbHkgdG8gZ2VuZXJpYyBjb21wb25lbnRzIGxpa2U6XG4gICAqXG4gICAqICAgICA6aG9zdChbZ2VuZXJpYz1cIlwiXSkge1xuICAgKiAgICAgICAuLi4gR2VuZXJpYyBhcHBlYXJhbmNlIGRlZmluZWQgaGVyZSAuLi5cbiAgICogICAgIH1cbiAgICpcbiAgICogVGhpcyBtYWtlcyBpdCBlYXN5IHRvIHJlbW92ZSBhbGwgZGVmYXVsdCBzdHlsaW5nIOKAlCBzZXQgdGhlIGBnZW5lcmljYFxuICAgKiBhdHRyaWJ1dGUgdG8gZmFsc2UsIGFuZCBhbGwgZGVmYXVsdCBzdHlsaW5nIHdpbGwgYmUgcmVtb3ZlZC5cbiAgICovXG4gIGNsYXNzIEdlbmVyaWMgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIC8vIFNldCBkZWZhdWx0cy5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5nZW5lcmljID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLmdlbmVyaWMgPSB0aGlzLmRlZmF1bHRzLmdlbmVyaWM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVGhpcyBtaXhpbiBkb2Vzbid0IGFjdHVhbGx5IHJlc3BvbmQgdG8gYXR0cmlidXRlIGNoYW5nZXMsIGJ1dCByZWxpZXNcbiAgICAvLyBvbiBzZXBhcmF0ZWx5LWRlZmluZWQgYmVoYXZpb3IgKGUuZy4sIGluIEF0dHJpYnV0ZU1hcnNoYWxsaW5nKSBmb3IgdGhhdC5cbiAgICAvLyBTdGlsbCwgd2UgbmVlZCBkZWZpbmUgYSBiYXNlbGluZSBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sgdGhhdCBkb2VzXG4gICAgLy8gbm90aGluZywgaW4gY2FzZSB0aGlzIG1peGluIGdldHMgdXNlZCBvbiBpdHMgb3duLlxuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcbiAgICAgIGlmIChzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2spIHsgc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSk7IH1cbiAgICB9XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jb25uZWN0ZWRDYWxsYmFjaykgeyBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpOyB9XG4gICAgICByZWZsZWN0QXR0cmlidXRlKHRoaXMpO1xuICAgIH1cblxuICAgIGdldCBkZWZhdWx0cygpIHtcbiAgICAgIGxldCBkZWZhdWx0cyA9IHN1cGVyLmRlZmF1bHRzIHx8IHt9O1xuICAgICAgZGVmYXVsdHMuZ2VuZXJpYyA9IHRydWU7XG4gICAgICByZXR1cm4gZGVmYXVsdHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiB0aGUgY29tcG9uZW50IHdvdWxkIGxpa2UgdG8gcmVjZWl2ZSBnZW5lcmljIHN0eWxpbmcuXG4gICAgICpcbiAgICAgKiBUaGlzIHByb3BlcnR5IGlzIHRydWUgYnkgZGVmYXVsdCDigJTCoHNldCBpdCB0byBmYWxzZSB0byB0dXJuIG9mZiBhbGxcbiAgICAgKiBnZW5lcmljIHN0eWxlcy4gVGhpcyBtYWtlcyBpdCBlYXNpZXIgdG8gYXBwbHkgY3VzdG9tIHN0eWxpbmc7IHlvdSB3b24ndFxuICAgICAqIGhhdmUgdG8gZXhwbGljaXRseSBvdmVycmlkZSBzdHlsaW5nIHlvdSBkb24ndCB3YW50LlxuICAgICAqXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKi9cbiAgICBnZXQgZ2VuZXJpYygpIHtcbiAgICAgIHJldHVybiB0aGlzW2dlbmVyaWNTeW1ib2xdO1xuICAgIH1cbiAgICBzZXQgZ2VuZXJpYyh2YWx1ZSkge1xuICAgICAgbGV0IHBhcnNlZCA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgP1xuICAgICAgICBTdHJpbmcodmFsdWUpICE9PSAnZmFsc2UnIDpcbiAgICAgICAgdmFsdWU7XG4gICAgICB0aGlzW2dlbmVyaWNTeW1ib2xdID0gcGFyc2VkO1xuICAgICAgaWYgKCdnZW5lcmljJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5nZW5lcmljID0gdmFsdWU7IH1cbiAgICBcbiAgICAgIHJlZmxlY3RBdHRyaWJ1dGUodGhpcyk7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gR2VuZXJpYztcbn07XG5cblxuLy8gV2Ugcm9sbCBvdXIgb3duIGF0dHJpYnV0ZSBzZXR0aW5nIHNvIHRoYXQgYW4gZXhwbGljaXRseSBmYWxzZSB2YWx1ZVxuLy8gc2hvd3MgdXAgYXMgZ2VuZXJpYz1cImZhbHNlXCIuXG5mdW5jdGlvbiByZWZsZWN0QXR0cmlidXRlKGVsZW1lbnQpIHtcbiAgaWYgKCFlbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgbGV0IGdlbmVyaWMgPSBlbGVtZW50LmdlbmVyaWM7XG4gIGlmIChnZW5lcmljID09PSBmYWxzZSkge1xuICAgIC8vIEV4cGxpY2l0bHkgdXNlIGZhbHNlIHN0cmluZy5cbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZ2VuZXJpYycsICdmYWxzZScpO1xuICB9IGVsc2UgaWYgKGdlbmVyaWMgPT0gbnVsbCkge1xuICAgIC8vIEV4cGxpY2l0bHkgcmVtb3ZlIGF0dHJpYnV0ZS5cbiAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZ2VuZXJpYycpO1xuICB9IGVsc2Uge1xuICAgIC8vIFVzZSB0aGUgZW1wdHkgc3RyaW5nIHRvIGdldCBhdHRyaWJ1dGUgdG8gYXBwZWFyIHdpdGggbm8gdmFsdWUuXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2dlbmVyaWMnLCAnJyk7XG4gIH1cbn1cbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi9jcmVhdGVTeW1ib2wnO1xuXG5cbi8vIFN5bWJvbHMgZm9yIHByaXZhdGUgZGF0YSBtZW1iZXJzIG9uIGFuIGVsZW1lbnQuXG5jb25zdCBrZXlkb3duTGlzdGVuZXJTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2tleWRvd25MaXN0ZW5lcicpO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggS2V5Ym9hcmQuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBtYW5hZ2VzIHRoZSBrZXlkb3duIGhhbmRsaW5nIGZvciBhIGNvbXBvbmVudC5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBoYW5kbGVzIHNldmVyYWwga2V5Ym9hcmQtcmVsYXRlZCBmZWF0dXJlcy5cbiAgICpcbiAgICogRmlyc3QsIGl0IHdpcmVzIHVwIGEgc2luZ2xlIGtleWRvd24gZXZlbnQgaGFuZGxlciB0aGF0IGNhbiBiZSBzaGFyZWQgYnlcbiAgICogbXVsdGlwbGUgbWl4aW5zIG9uIGEgY29tcG9uZW50LiBUaGUgZXZlbnQgaGFuZGxlciB3aWxsIGludm9rZSBhIGBrZXlkb3duYFxuICAgKiBtZXRob2Qgd2l0aCB0aGUgZXZlbnQgb2JqZWN0LCBhbmQgYW55IG1peGluIGFsb25nIHRoZSBwcm90b3R5cGUgY2hhaW4gdGhhdFxuICAgKiB3YW50cyB0byBoYW5kbGUgdGhhdCBtZXRob2QgY2FuIGRvIHNvLlxuICAgKlxuICAgKiBJZiBhIG1peGluIHdhbnRzIHRvIGluZGljYXRlIHRoYXQga2V5Ym9hcmQgZXZlbnQgaGFzIGJlZW4gaGFuZGxlZCwgYW5kIHRoYXRcbiAgICogb3RoZXIgbWl4aW5zIHNob3VsZCAqbm90KiBoYW5kbGUgaXQsIHRoZSBtaXhpbidzIGBrZXlkb3duYCBoYW5kbGVyIHNob3VsZFxuICAgKiByZXR1cm4gYSB2YWx1ZSBvZiB0cnVlLiBUaGUgY29udmVudGlvbiB0aGF0IHNlZW1zIHRvIHdvcmsgd2VsbCBpcyB0aGF0IGFcbiAgICogbWl4aW4gc2hvdWxkIHNlZSBpZiBpdCB3YW50cyB0byBoYW5kbGUgdGhlIGV2ZW50IGFuZCwgaWYgbm90LCB0aGVuIGFzayB0aGVcbiAgICogc3VwZXJjbGFzcyB0byBzZWUgaWYgaXQgd2FudHMgdG8gaGFuZGxlIHRoZSBldmVudC4gVGhpcyBoYXMgdGhlIGVmZmVjdCBvZlxuICAgKiBnaXZpbmcgdGhlIG1peGluIHRoYXQgd2FzIGFwcGxpZWQgbGFzdCB0aGUgZmlyc3QgY2hhbmNlIGF0IGhhbmRsaW5nIGFcbiAgICoga2V5Ym9hcmQgZXZlbnQuXG4gICAqXG4gICAqIEV4YW1wbGU6XG4gICAqXG4gICAqICAgICBrZXlkb3duKGV2ZW50KSB7XG4gICAqICAgICAgIGxldCBoYW5kbGVkO1xuICAgKiAgICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICogICAgICAgICAvLyBIYW5kbGUgdGhlIGtleXMgeW91IHdhbnQsIHNldHRpbmcgaGFuZGxlZCA9IHRydWUgaWYgYXBwcm9wcmlhdGUuXG4gICAqICAgICAgIH1cbiAgICogICAgICAgLy8gUHJlZmVyIG1peGluIHJlc3VsdCBpZiBpdCdzIGRlZmluZWQsIG90aGVyd2lzZSB1c2UgYmFzZSByZXN1bHQuXG4gICAqICAgICAgIHJldHVybiBoYW5kbGVkIHx8IChzdXBlci5rZXlkb3duICYmIHN1cGVyLmtleWRvd24oZXZlbnQpKTtcbiAgICogICAgIH1cbiAgICpcbiAgICogQSBzZWNvbmQgZmVhdHVyZSBwcm92aWRlZCBieSB0aGlzIG1peGluIGlzIHRoYXQgaXQgaW1wbGljaXRseSBtYWtlcyB0aGVcbiAgICogY29tcG9uZW50IGEgdGFiIHN0b3AgaWYgaXQgaXNuJ3QgYWxyZWFkeSwgYnkgc2V0dGluZyBgdGFiSW5kZXhgIHRvIDAuIFRoaXNcbiAgICogaGFzIHRoZSBlZmZlY3Qgb2YgYWRkaW5nIHRoZSBjb21wb25lbnQgdG8gdGhlIHRhYiBvcmRlciBpbiBkb2N1bWVudCBvcmRlci5cbiAgICpcbiAgICogRmluYWxseSwgdGhpcyBtaXhpbiBpcyBkZXNpZ25lZCB0byB3b3JrIHdpdGggdGhlIG9wdGlvbmFsXG4gICAqIFtDb2xsZWN0aXZlXShDb2xsZWN0aXZlLm1kKSBjbGFzcyB2aWEgYSBtaXhpbiBsaWtlXG4gICAqIFtUYXJnZXRJbkNvbGxlY3RpdmVdKFRhcmdldEluQ29sbGVjdGl2ZS5tZCkuIFRoaXMgYWxsb3dzIGEgc2V0IG9mIHJlbGF0ZWRcbiAgICogY29tcG9uZW50IGluc3RhbmNlcyB0byBjb29wZXJhdGl2ZWx5IGhhbmRsZSB0aGUga2V5Ym9hcmQuIFNlZSB0aGVcbiAgICogQ29sbGVjdGl2ZSBjbGFzcyBmb3IgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzIEtleWJvYXJkIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICAvLyBBc3N1bWUgdGhpcyBjb21wb25lbnQgaXMgZ29pbmcgdG8gaGFuZGxlIHRoZSBrZXlib2FyZCBvbiBpdHMgb3duLlxuICAgICAgLy8gUkVWSUVXOiBNb3ZlIHRvIGNvbm5lY3RlZENhbGxiYWNrP1xuICAgICAgc3RhcnRMaXN0ZW5pbmdUb0tleWRvd24odGhpcyk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBJZiB3ZSdyZSBub3cgdGhlIG91dGVybW9zdCBlbGVtZW50IG9mIHRoZSBjb2xsZWN0aXZlLCBzZXQgdXAgdG8gcmVjZWl2ZVxuICAgICAqIGtleWJvYXJkIGV2ZW50cy4gSWYgd2UncmUgbm8gbG9uZ2VyIHRoZSBvdXRlcm1vc3QgZWxlbWVudCwgc3RvcFxuICAgICAqIGxpc3RlbmluZy5cbiAgICAgKi9cbiAgICBjb2xsZWN0aXZlQ2hhbmdlZCgpIHtcbiAgICAgIGlmIChzdXBlci5jb2xsZWN0aXZlQ2hhbmdlZCkgeyBzdXBlci5jb2xsZWN0aXZlQ2hhbmdlZCgpOyB9XG5cbiAgICAgIGlmICh0aGlzLmNvbGxlY3RpdmUub3V0ZXJtb3N0RWxlbWVudCAhPT0gdGhpcykge1xuICAgICAgICAvLyBXZSdyZSBubyBsb25nZXIgdGhlIG91dGVybW9zdCBlbGVtZW50OyBzdG9wIGxpc3RlbmluZy5cbiAgICAgICAgaWYgKGlzTGlzdGVuaW5nVG9LZXlkb3duKHRoaXMpKSB7XG4gICAgICAgICAgc3RvcExpc3RlbmluZ1RvS2V5ZG93bih0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAvLyBTaW5jZSB3ZSdyZSBnb2luZyB0byBoYW5kbGUgdGhlIGtleWJvYXJkLCBzZWUgaWYgd2UgY2FuIGFkb3B0IGFuIEFSSUFcbiAgICAgICAgLy8gbGFiZWwgZnJvbSBhbiBpbm5lciBlbGVtZW50IG9mIHRoZSBjb2xsZWN0aXZlLlxuICAgICAgICBsZXQgbGFiZWwgPSBnZXRDb2xsZWN0aXZlQXJpYUxhYmVsKHRoaXMuY29sbGVjdGl2ZSk7XG4gICAgICAgIGlmIChsYWJlbCkge1xuICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgbGFiZWwpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNMaXN0ZW5pbmdUb0tleWRvd24odGhpcykpIHtcbiAgICAgICAgc3RhcnRMaXN0ZW5pbmdUb0tleWRvd24odGhpcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2spIHsgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTsgfVxuICAgICAgLy8gU2V0IGEgZGVmYXVsdCB0YWIgaW5kZXggb2YgMCAoZG9jdW1lbnQgb3JkZXIpIGlmIG5vIHRhYiBpbmRleCBleGlzdHMuXG4gICAgICAvLyBNUyBFZGdlIHJlcXVpcmVzIHdlIGV4cGxpY2l0bHkgY2hlY2sgZm9yIHByZXNlbmNlIG9mIHRhYmluZGV4IGF0dHJpYnV0ZS5cbiAgICAgIGlmICh0aGlzLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSA9PSBudWxsIHx8IHRoaXMudGFiSW5kZXggPCAwKSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIHRoZSBpbmRpY2F0ZWQga2V5Ym9hcmQgZXZlbnQuXG4gICAgICpcbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuIFRoaXMgd2lsbFxuICAgICAqIHR5cGljYWxseSBiZSBoYW5kbGVkIGJ5IG90aGVyIG1peGlucy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7S2V5Ym9hcmRFdmVudH0gZXZlbnQgLSB0aGUga2V5Ym9hcmQgZXZlbnRcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZSBldmVudCB3YXMgaGFuZGxlZFxuICAgICAqL1xuICAgIGtleWRvd24oZXZlbnQpIHtcbiAgICAgIGlmIChzdXBlci5rZXlkb3duKSB7IHJldHVybiBzdXBlci5rZXlkb3duKGV2ZW50KTsgfVxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIEtleWJvYXJkO1xufTtcblxuXG4vLyBGaXJlIHRoZSBrZXlkb3duKCkgbWV0aG9kIG9uIHRoZSBlbGVtZW50IG9yIChpZiBpdCBiZWxvbmdzIHRvIGEgY29sbGVjdGl2ZSlcbi8vIGFsbCBlbGVtZW50cyBpbiB0aGUgY29sbGVjdGl2ZS5cbi8vXG4vLyBOb3RlOiB0aGUgdmFsdWUgb2YgJ3RoaXMnIGlzIGJvdW5kIHRvIHRoZSBlbGVtZW50IHdoaWNoIHJlY2VpdmVkIHRoZSBldmVudC5cbmZ1bmN0aW9uIGtleWRvd24oZXZlbnQpIHtcblxuICBsZXQgaGFuZGxlZCA9IGZhbHNlO1xuXG4gIGlmICh0aGlzLmNvbGxlY3RpdmUpIHtcbiAgICAvLyBHaXZlIGNvbGxlY3RpdmUgZWxlbWVudHMgYSBzaG90IGF0IHRoZSBldmVudCwgd29ya2luZyBmcm9tIGlubmVybW9zdCB0b1xuICAgIC8vIG91dGVybW9zdCAodGhpcyBlbGVtZW50KS5cbiAgICBsZXQgZWxlbWVudHMgPSB0aGlzLmNvbGxlY3RpdmUuZWxlbWVudHM7XG4gICAgZm9yIChsZXQgaSA9IGVsZW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xuICAgICAgaGFuZGxlZCA9IGVsZW1lbnQua2V5ZG93biAmJiBlbGVtZW50LmtleWRvd24oZXZlbnQpO1xuICAgICAgaWYgKGhhbmRsZWQpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIENvbXBvbmVudCBpcyBoYW5kbGluZyB0aGUga2V5Ym9hcmQgb24gaXRzIG93bi5cbiAgICBoYW5kbGVkID0gdGhpcy5rZXlkb3duKGV2ZW50KTtcbiAgfVxuXG4gIGlmIChoYW5kbGVkKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxufVxuXG5cbi8vIFJldHVybiB0aGUgZmlyc3QgQVJJQSBsYWJlbCBkZWZpbmVkIGJ5IHRoZSBjb2xsZWN0aXZlLlxuZnVuY3Rpb24gZ2V0Q29sbGVjdGl2ZUFyaWFMYWJlbChjb2xsZWN0aXZlKSB7XG4gIGxldCBsYWJlbHMgPSBjb2xsZWN0aXZlLmVsZW1lbnRzLm1hcChlbGVtZW50ID0+IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJykpO1xuICAvLyBXb3VsZCBwcmVmZXIgdG8gdXNlIEFycmF5LnByb3RvdHlwZS5maW5kIGhlcmUsIGJ1dCBJRSAxMSBkb2Vzbid0IGhhdmUgaXQuXG4gIGxldCBub25OdWxsTGFiZWxzID0gbGFiZWxzLmZpbHRlcihsYWJlbCA9PiBsYWJlbCAhPSBudWxsKTtcbiAgcmV0dXJuIG5vbk51bGxMYWJlbHNbMF07XG59XG5cblxuZnVuY3Rpb24gaXNMaXN0ZW5pbmdUb0tleWRvd24oZWxlbWVudCkge1xuICByZXR1cm4gZWxlbWVudFtrZXlkb3duTGlzdGVuZXJTeW1ib2xdICE9IG51bGw7XG59XG5cblxuZnVuY3Rpb24gc3RhcnRMaXN0ZW5pbmdUb0tleWRvd24oZWxlbWVudCkge1xuICBlbGVtZW50W2tleWRvd25MaXN0ZW5lclN5bWJvbF0gPSBrZXlkb3duLmJpbmQoZWxlbWVudCk7XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGVsZW1lbnRba2V5ZG93bkxpc3RlbmVyU3ltYm9sXSk7XG59XG5cblxuZnVuY3Rpb24gc3RvcExpc3RlbmluZ1RvS2V5ZG93bihlbGVtZW50KSB7XG4gIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGVsZW1lbnRba2V5ZG93bkxpc3RlbmVyU3ltYm9sXSk7XG4gIGVsZW1lbnRba2V5ZG93bkxpc3RlbmVyU3ltYm9sXSA9IG51bGw7XG4gIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xufVxuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuL2NyZWF0ZVN5bWJvbCc7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IG5hdmlnYXRpb25BeGlzU3ltYm9sID0gY3JlYXRlU3ltYm9sKCduYXZpZ2F0aW9uQXhpcycpO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggS2V5Ym9hcmREaXJlY3Rpb24uICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBtYXBzIGRpcmVjdGlvbiBrZXlzIChMZWZ0LCBSaWdodCwgZXRjLikgdG8gZGlyZWN0aW9uIHNlbWFudGljc1xuICAgKiAoZ28gbGVmdCwgZ28gcmlnaHQsIGV0Yy4pLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGV4cGVjdHMgdGhlIGNvbXBvbmVudCB0byBpbnZva2UgYSBga2V5ZG93bmAgbWV0aG9kIHdoZW4gYSBrZXkgaXNcbiAgICogcHJlc3NlZC4gWW91IGNhbiB1c2UgdGhlIFtLZXlib2FyZF0oS2V5Ym9hcmQubWQpIG1peGluIGZvciB0aGF0IHB1cnBvc2UsIG9yXG4gICAqIHdpcmUgdXAgeW91ciBvd24ga2V5Ym9hcmQgaGFuZGxpbmcgYW5kIGNhbGwgYGtleWRvd25gIHlvdXJzZWxmLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGNhbGxzIG1ldGhvZHMgc3VjaCBhcyBgZ29MZWZ0YCBhbmQgYGdvUmlnaHRgLiBZb3UgY2FuIGRlZmluZVxuICAgKiB3aGF0IHRoYXQgbWVhbnMgYnkgaW1wbGVtZW50aW5nIHRob3NlIG1ldGhvZHMgeW91cnNlbGYuIElmIHlvdSB3YW50IHRvIHVzZVxuICAgKiBkaXJlY3Rpb24ga2V5cyB0byBuYXZpZ2F0ZSBhIHNlbGVjdGlvbiwgdXNlIHRoaXMgbWl4aW4gd2l0aCB0aGVcbiAgICogW0RpcmVjdGlvblNlbGVjdGlvbl0oRGlyZWN0aW9uU2VsZWN0aW9uLm1kKSBtaXhpbi5cbiAgICovXG4gIGNsYXNzIEtleWJvYXJkRGlyZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICAvLyBTZXQgZGVmYXVsdHMuXG4gICAgICBpZiAodHlwZW9mIHRoaXMubmF2aWdhdGlvbkF4aXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMubmF2aWdhdGlvbkF4aXMgPSB0aGlzLmRlZmF1bHRzLm5hdmlnYXRpb25BeGlzO1xuICAgICAgfVxuICAgIH1cblxuICAgIGdldCBkZWZhdWx0cygpIHtcbiAgICAgIGxldCBkZWZhdWx0cyA9IHN1cGVyLmRlZmF1bHRzIHx8IHt9O1xuICAgICAgZGVmYXVsdHMubmF2aWdhdGlvbkF4aXMgPSAnYm90aCc7XG4gICAgICByZXR1cm4gZGVmYXVsdHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIGRvd24uXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLlxuICAgICAqL1xuICAgIGdvRG93bigpIHtcbiAgICAgIGlmIChzdXBlci5nb0Rvd24pIHsgcmV0dXJuIHN1cGVyLmdvRG93bigpOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIHRvIHRoZSBlbmQgKGUuZy4sIG9mIGEgbGlzdCkuXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLlxuICAgICAqL1xuICAgIGdvRW5kKCkge1xuICAgICAgaWYgKHN1cGVyLmdvRW5kKSB7IHJldHVybiBzdXBlci5nb0VuZCgpOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIGxlZnQuXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLlxuICAgICAqL1xuICAgIGdvTGVmdCgpIHtcbiAgICAgIGlmIChzdXBlci5nb0xlZnQpIHsgcmV0dXJuIHN1cGVyLmdvTGVmdCgpOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIHJpZ2h0LlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy5cbiAgICAgKi9cbiAgICBnb1JpZ2h0KCkge1xuICAgICAgaWYgKHN1cGVyLmdvUmlnaHQpIHsgcmV0dXJuIHN1cGVyLmdvUmlnaHQoKTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSB0byB0aGUgc3RhcnQgKGUuZy4sIG9mIGFcbiAgICAgKiBsaXN0KS4gVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLlxuICAgICAqL1xuICAgIGdvU3RhcnQoKSB7XG4gICAgICBpZiAoc3VwZXIuZ29TdGFydCkgeyByZXR1cm4gc3VwZXIuZ29TdGFydCgpOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIHVwLlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy5cbiAgICAgKi9cbiAgICBnb1VwKCkge1xuICAgICAgaWYgKHN1cGVyLmdvVXApIHsgcmV0dXJuIHN1cGVyLmdvVXAoKTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB0aGUgZGlyZWN0aW9uIG9mIHBlcm1pdHRlZCBuYXZpZ2F0aW9uIHdpdGggdGhlIGtleWJvYXJkLlxuICAgICAqXG4gICAgICogQWNjZXB0ZWQgdmFsdWVzIGFyZSBcImhvcml6b250YWxcIiwgXCJ2ZXJ0aWNhbFwiLCBvciBcImJvdGhcIiAodGhlIGRlZmF1bHQpLlxuICAgICAqIElmIHRoaXMgcHJvcGVydHkgaXMgXCJob3Jpem9udGFsXCIsIHRoZSBVcCBBcnJvdyBhbmQgRG93biBBcnJvdyBrZXlzIHdpbGxcbiAgICAgKiBiZSBpZ25vcmVkLiBDb252ZXJzZWx5LCBpZiB0aGlzIGlzIFwidmVydGljYWxcIiwgdGhlIExlZnQgQXJyb3cgYW5kIFJpZ2h0XG4gICAgICogQXJyb3cga2V5cyB3aWxsIGJlIGlnbm9yZWQuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldCBuYXZpZ2F0aW9uQXhpcygpIHtcbiAgICAgIHJldHVybiB0aGlzW25hdmlnYXRpb25BeGlzU3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IG5hdmlnYXRpb25BeGlzKHZhbHVlKSB7XG4gICAgICB0aGlzW25hdmlnYXRpb25BeGlzU3ltYm9sXSA9IHZhbHVlO1xuICAgICAgaWYgKCduYXZpZ2F0aW9uQXhpcycgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIubmF2aWdhdGlvbkF4aXMgPSB2YWx1ZTsgfVxuICAgIH1cblxuICAgIGtleWRvd24oZXZlbnQpIHtcbiAgICAgIGxldCBoYW5kbGVkO1xuXG4gICAgICBsZXQgYXhpcyA9IHRoaXMubmF2aWdhdGlvbkF4aXM7XG4gICAgICBsZXQgaG9yaXpvbnRhbCA9IChheGlzID09PSAnaG9yaXpvbnRhbCcgfHwgYXhpcyA9PT0gJ2JvdGgnKTtcbiAgICAgIGxldCB2ZXJ0aWNhbCA9IChheGlzID09PSAndmVydGljYWwnIHx8IGF4aXMgPT09ICdib3RoJyk7XG5cbiAgICAgIC8vIElnbm9yZSBMZWZ0L1JpZ2h0IGtleXMgd2hlbiBtZXRhS2V5IG9yIGFsdEtleSBtb2RpZmllciBpcyBhbHNvIHByZXNzZWQsXG4gICAgICAvLyBhcyB0aGUgdXNlciBtYXkgYmUgdHJ5aW5nIHRvIG5hdmlnYXRlIGJhY2sgb3IgZm9yd2FyZCBpbiB0aGUgYnJvd3Nlci5cbiAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgICBjYXNlIDM1OiAvLyBFbmRcbiAgICAgICAgICBoYW5kbGVkID0gdGhpcy5nb0VuZCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM2OiAvLyBIb21lXG4gICAgICAgICAgaGFuZGxlZCA9IHRoaXMuZ29TdGFydCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM3OiAvLyBMZWZ0XG4gICAgICAgICAgaWYgKGhvcml6b250YWwgJiYgIWV2ZW50Lm1ldGFLZXkgJiYgIWV2ZW50LmFsdEtleSkge1xuICAgICAgICAgICAgaGFuZGxlZCA9IHRoaXMuZ29MZWZ0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM4OiAvLyBVcFxuICAgICAgICAgIGlmICh2ZXJ0aWNhbCkge1xuICAgICAgICAgICAgaGFuZGxlZCA9IGV2ZW50LmFsdEtleSA/IHRoaXMuZ29TdGFydCgpIDogdGhpcy5nb1VwKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM5OiAvLyBSaWdodFxuICAgICAgICAgIGlmIChob3Jpem9udGFsICYmICFldmVudC5tZXRhS2V5ICYmICFldmVudC5hbHRLZXkpIHtcbiAgICAgICAgICAgIGhhbmRsZWQgPSB0aGlzLmdvUmlnaHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDA6IC8vIERvd25cbiAgICAgICAgICBpZiAodmVydGljYWwpIHtcbiAgICAgICAgICAgIGhhbmRsZWQgPSBldmVudC5hbHRLZXkgPyB0aGlzLmdvRW5kKCkgOiB0aGlzLmdvRG93bigpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIC8vIFByZWZlciBtaXhpbiByZXN1bHQgaWYgaXQncyBkZWZpbmVkLCBvdGhlcndpc2UgdXNlIGJhc2UgcmVzdWx0LlxuICAgICAgcmV0dXJuIGhhbmRsZWQgfHwgKHN1cGVyLmtleWRvd24gJiYgc3VwZXIua2V5ZG93bihldmVudCkpO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIEtleWJvYXJkRGlyZWN0aW9uO1xufTtcbiIsIi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggS2V5Ym9hcmRQYWdlZFNlbGVjdGlvbi4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIG1hcHMgcGFnZSBrZXlzIChQYWdlIFVwLCBQYWdlIERvd24pIGludG8gb3BlcmF0aW9ucyB0aGF0IG1vdmVcbiAgICogdGhlIHNlbGVjdGlvbiBieSBvbmUgcGFnZS5cbiAgICpcbiAgICogVGhlIGtleWJvYXJkIGludGVyYWN0aW9uIG1vZGVsIGdlbmVyYWxseSBmb2xsb3dzIHRoYXQgb2YgTWljcm9zb2Z0IFdpbmRvd3MnXG4gICAqIGxpc3QgYm94ZXMgaW5zdGVhZCBvZiB0aG9zZSBpbiBPUyBYOlxuICAgKlxuICAgKiAqIFRoZSBQYWdlIFVwL0Rvd24gYW5kIEhvbWUvRW5kIGtleXMgYWN0dWFsbHkgY2hhbmdlIHRoZSBzZWxlY3Rpb24sIHJhdGhlclxuICAgKiAgIHRoYW4ganVzdCBzY3JvbGxpbmcuIFRoZSBmb3JtZXIgYmVoYXZpb3Igc2VlbXMgbW9yZSBnZW5lcmFsbHkgdXNlZnVsIGZvclxuICAgKiAgIGtleWJvYXJkIHVzZXJzLlxuICAgKlxuICAgKiAqIFByZXNzaW5nIFBhZ2UgVXAvRG93biB3aWxsIGNoYW5nZSB0aGUgc2VsZWN0aW9uIHRvIHRoZSB0b3Btb3N0L2JvdHRvbW1vc3RcbiAgICogICB2aXNpYmxlIGl0ZW0gaWYgdGhlIHNlbGVjdGlvbiBpcyBub3QgYWxyZWFkeSB0aGVyZS4gVGhlcmVhZnRlciwgdGhlIGtleVxuICAgKiAgIHdpbGwgbW92ZSB0aGUgc2VsZWN0aW9uIHVwL2Rvd24gYnkgYSBwYWdlLCBhbmQgKHBlciB0aGUgYWJvdmUgcG9pbnQpIG1ha2VcbiAgICogICB0aGUgc2VsZWN0ZWQgaXRlbSB2aXNpYmxlLlxuICAgKlxuICAgKiBUbyBlbnN1cmUgdGhlIHNlbGVjdGVkIGl0ZW0gaXMgaW4gdmlldyBmb2xsb3dpbmcgdXNlIG9mIFBhZ2UgVXAvRG93biwgdXNlXG4gICAqIHRoZSByZWxhdGVkIFtTZWxlY3Rpb25JblZpZXddKFNlbGVjdGlvbkluVmlldy5tZCkgbWl4aW4uXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyB0aGUgY29tcG9uZW50IHRvIGludm9rZSBhIGBrZXlkb3duYCBtZXRob2Qgd2hlbiBhIGtleSBpc1xuICAgKiBwcmVzc2VkLiBZb3UgY2FuIHVzZSB0aGUgW0tleWJvYXJkXShLZXlib2FyZC5tZCkgbWl4aW4gZm9yIHRoYXQgcHVycG9zZSwgb3JcbiAgICogd2lyZSB1cCB5b3VyIG93biBrZXlib2FyZCBoYW5kbGluZyBhbmQgY2FsbCBga2V5ZG93bmAgeW91cnNlbGYuXG4gICAqL1xuICBjbGFzcyBLZXlib2FyZFBhZ2VkU2VsZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBrZXlkb3duKGV2ZW50KSB7XG4gICAgICBsZXQgaGFuZGxlZDtcbiAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgICBjYXNlIDMzOiAvLyBQYWdlIFVwXG4gICAgICAgICAgaGFuZGxlZCA9IHRoaXMucGFnZVVwKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzQ6IC8vIFBhZ2UgRG93blxuICAgICAgICAgIGhhbmRsZWQgPSB0aGlzLnBhZ2VEb3duKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICAvLyBQcmVmZXIgbWl4aW4gcmVzdWx0IGlmIGl0J3MgZGVmaW5lZCwgb3RoZXJ3aXNlIHVzZSBiYXNlIHJlc3VsdC5cbiAgICAgIHJldHVybiBoYW5kbGVkIHx8IChzdXBlci5rZXlkb3duICYmIHN1cGVyLmtleWRvd24oZXZlbnQpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTY3JvbGwgZG93biBvbmUgcGFnZS5cbiAgICAgKi9cbiAgICBwYWdlRG93bigpIHtcbiAgICAgIGlmIChzdXBlci5wYWdlRG93bikgeyBzdXBlci5wYWdlRG93bigpOyB9XG4gICAgICByZXR1cm4gc2Nyb2xsT25lUGFnZSh0aGlzLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTY3JvbGwgdXAgb25lIHBhZ2UuXG4gICAgICovXG4gICAgcGFnZVVwKCkge1xuICAgICAgaWYgKHN1cGVyLnBhZ2VVcCkgeyBzdXBlci5wYWdlVXAoKTsgfVxuICAgICAgcmV0dXJuIHNjcm9sbE9uZVBhZ2UodGhpcywgZmFsc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBlbGVtZW50IHRoYXQgc2hvdWxkIGJlIHNjcm9sbGVkIHdpdGggdGhlIFBhZ2UgVXAvRG93biBrZXlzLlxuICAgICAqIERlZmF1bHQgaXMgdGhlIGN1cnJlbnQgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICBnZXQgc2Nyb2xsVGFyZ2V0KCkge1xuICAgICAgLy8gUHJlZmVyIGJhc2UgcmVzdWx0LlxuICAgICAgcmV0dXJuICdzY3JvbGxUYXJnZXQnIGluIGJhc2UucHJvdG90eXBlID8gc3VwZXIuc2Nyb2xsVGFyZ2V0IDogdGhpcztcbiAgICB9XG4gICAgc2V0IHNjcm9sbFRhcmdldChlbGVtZW50KSB7XG4gICAgICBpZiAoJ3Njcm9sbFRhcmdldCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2Nyb2xsVGFyZ2V0ID0gZWxlbWVudDsgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBLZXlib2FyZFBhZ2VkU2VsZWN0aW9uO1xufTtcblxuXG4vLyBSZXR1cm4gdGhlIGl0ZW0gd2hvc2UgY29udGVudCBzcGFucyB0aGUgZ2l2ZW4geSBwb3NpdGlvbiAocmVsYXRpdmUgdG8gdGhlXG4vLyB0b3Agb2YgdGhlIGxpc3QncyBzY3JvbGxpbmcgY2xpZW50IGFyZWEpLCBvciBudWxsIGlmIG5vdCBmb3VuZC5cbi8vXG4vLyBJZiBkb3dud2FyZCBpcyB0cnVlLCBtb3ZlIGRvd24gdGhlIGxpc3Qgb2YgaXRlbXMgdG8gZmluZCB0aGUgZmlyc3QgaXRlbVxuLy8gZm91bmQgYXQgdGhlIGdpdmVuIHkgcG9zaXRpb247IGlmIGRvd253YXJkIGlzIGZhbHNlLCBtb3ZlIHVwIHRoZSBsaXN0IG9mXG4vLyBpdGVtcyB0byBmaW5kIHRoZSBsYXN0IGl0ZW0gYXQgdGhhdCBwb3NpdGlvbi5cbmZ1bmN0aW9uIGdldEluZGV4T2ZJdGVtQXRZKGVsZW1lbnQsIHksIGRvd253YXJkKSB7XG4gIGxldCBpdGVtcyA9IGVsZW1lbnQuaXRlbXM7XG4gIGxldCBzdGFydCA9IGRvd253YXJkID8gMCA6IGl0ZW1zLmxlbmd0aCAtIDE7XG4gIGxldCBlbmQgPSBkb3dud2FyZCA/IGl0ZW1zLmxlbmd0aCA6IDA7XG4gIGxldCBzdGVwID0gZG93bndhcmQgPyAxIDogLTE7XG4gIGxldCBzY3JvbGxUYXJnZXQgPSBlbGVtZW50LnNjcm9sbFRhcmdldDtcbiAgbGV0IHRvcE9mQ2xpZW50QXJlYSA9IHNjcm9sbFRhcmdldC5vZmZzZXRUb3AgKyBzY3JvbGxUYXJnZXQuY2xpZW50VG9wO1xuXG4gIC8vIEZpbmQgdGhlIGl0ZW0gc3Bhbm5pbmcgdGhlIGluZGljYXRlZCB5IGNvb3JkaW5hdGUuXG4gIGxldCBpdGVtO1xuICBsZXQgaXRlbUluZGV4ID0gc3RhcnQ7XG4gIGxldCBpdGVtVG9wO1xuICBsZXQgZm91bmQgPSBmYWxzZTtcbiAgd2hpbGUgKGl0ZW1JbmRleCAhPT0gZW5kKSB7XG4gICAgaXRlbSA9IGl0ZW1zW2l0ZW1JbmRleF07XG4gICAgaXRlbVRvcCA9IGl0ZW0ub2Zmc2V0VG9wIC0gdG9wT2ZDbGllbnRBcmVhO1xuICAgIGxldCBpdGVtQm90dG9tID0gaXRlbVRvcCArIGl0ZW0ub2Zmc2V0SGVpZ2h0O1xuICAgIGlmIChpdGVtVG9wIDw9IHkgJiYgaXRlbUJvdHRvbSA+PSB5KSB7XG4gICAgICAvLyBJdGVtIHNwYW5zIHRoZSBpbmRpY2F0ZWQgeSBjb29yZGluYXRlLlxuICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGl0ZW1JbmRleCArPSBzdGVwO1xuICB9XG5cbiAgaWYgKCFmb3VuZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLy8gV2UgbWF5IGhhdmUgZm91bmQgYW4gaXRlbSB3aG9zZSBwYWRkaW5nIHNwYW5zIHRoZSBnaXZlbiB5IGNvb3JkaW5hdGUsXG4gIC8vIGJ1dCB3aG9zZSBjb250ZW50IGlzIGFjdHVhbGx5IGFib3ZlL2JlbG93IHRoYXQgcG9pbnQuXG4gIC8vIFRPRE86IElmIHRoZSBpdGVtIGhhcyBhIGJvcmRlciwgdGhlbiBwYWRkaW5nIHNob3VsZCBiZSBpbmNsdWRlZCBpblxuICAvLyBjb25zaWRlcmluZyBhIGhpdC5cbiAgbGV0IGl0ZW1TdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoaXRlbSk7XG4gIGxldCBpdGVtUGFkZGluZ1RvcCA9IHBhcnNlRmxvYXQoaXRlbVN0eWxlLnBhZGRpbmdUb3ApO1xuICBsZXQgaXRlbVBhZGRpbmdCb3R0b20gPSBwYXJzZUZsb2F0KGl0ZW1TdHlsZS5wYWRkaW5nQm90dG9tKTtcbiAgbGV0IGNvbnRlbnRUb3AgPSBpdGVtVG9wICsgaXRlbS5jbGllbnRUb3AgKyBpdGVtUGFkZGluZ1RvcDtcbiAgbGV0IGNvbnRlbnRCb3R0b20gPSBjb250ZW50VG9wICsgaXRlbS5jbGllbnRIZWlnaHQgLSBpdGVtUGFkZGluZ1RvcCAtIGl0ZW1QYWRkaW5nQm90dG9tO1xuICBpZiAoZG93bndhcmQgJiYgY29udGVudFRvcCA8PSB5IHx8ICFkb3dud2FyZCAmJiBjb250ZW50Qm90dG9tID49IHkpIHtcbiAgICAvLyBUaGUgaW5kaWNhdGVkIGNvb3JkaW5hdGUgaGl0cyB0aGUgYWN0dWFsIGl0ZW0gY29udGVudC5cbiAgICByZXR1cm4gaXRlbUluZGV4O1xuICB9XG4gIGVsc2Uge1xuICAgIC8vIFRoZSBpbmRpY2F0ZWQgY29vcmRpbmF0ZSBmYWxscyB3aXRoaW4gdGhlIGl0ZW0ncyBwYWRkaW5nLiBCYWNrIHVwIHRvXG4gICAgLy8gdGhlIGl0ZW0gYmVsb3cvYWJvdmUgdGhlIGl0ZW0gd2UgZm91bmQgYW5kIHJldHVybiB0aGF0LlxuICAgIHJldHVybiBpdGVtSW5kZXggLSBzdGVwO1xuICB9XG59XG5cbi8vIE1vdmUgYnkgb25lIHBhZ2UgZG93bndhcmQgKGlmIGRvd253YXJkIGlzIHRydWUpLCBvciB1cHdhcmQgKGlmIGZhbHNlKS5cbi8vIFJldHVybiB0cnVlIGlmIHdlIGVuZGVkIHVwIGNoYW5naW5nIHRoZSBzZWxlY3Rpb24sIGZhbHNlIGlmIG5vdC5cbi8vIFRPRE86IEJldHRlciBzdXBwb3J0IGZvciBob3Jpem9udGFsIGxpc3RzLlxuZnVuY3Rpb24gc2Nyb2xsT25lUGFnZShlbGVtZW50LCBkb3dud2FyZCkge1xuXG4gIC8vIERldGVybWluZSB0aGUgaXRlbSB2aXNpYmxlIGp1c3QgYXQgdGhlIGVkZ2Ugb2YgZGlyZWN0aW9uIHdlJ3JlIGhlYWRpbmcuXG4gIC8vIFdlJ2xsIHNlbGVjdCB0aGF0IGl0ZW0gaWYgaXQncyBub3QgYWxyZWFkeSBzZWxlY3RlZC5cbiAgbGV0IHNjcm9sbFRhcmdldCA9IGVsZW1lbnQuc2Nyb2xsVGFyZ2V0O1xuICBsZXQgZWRnZSA9IHNjcm9sbFRhcmdldC5zY3JvbGxUb3AgKyAoZG93bndhcmQgPyBzY3JvbGxUYXJnZXQuY2xpZW50SGVpZ2h0IDogMCk7XG4gIGxldCBpbmRleE9mSXRlbUF0RWRnZSA9IGdldEluZGV4T2ZJdGVtQXRZKGVsZW1lbnQsIGVkZ2UsIGRvd253YXJkKTtcblxuICBsZXQgc2VsZWN0ZWRJbmRleCA9IGVsZW1lbnQuc2VsZWN0ZWRJbmRleDtcbiAgbGV0IG5ld0luZGV4O1xuICBpZiAoaW5kZXhPZkl0ZW1BdEVkZ2UgJiYgc2VsZWN0ZWRJbmRleCA9PT0gaW5kZXhPZkl0ZW1BdEVkZ2UpIHtcbiAgICAvLyBUaGUgaXRlbSBhdCB0aGUgZWRnZSB3YXMgYWxyZWFkeSBzZWxlY3RlZCwgc28gc2Nyb2xsIGluIHRoZSBpbmRpY2F0ZWRcbiAgICAvLyBkaXJlY3Rpb24gYnkgb25lIHBhZ2UuIExlYXZlIHRoZSBuZXcgaXRlbSBhdCB0aGF0IGVkZ2Ugc2VsZWN0ZWQuXG4gICAgbGV0IGRlbHRhID0gKGRvd253YXJkID8gMSA6IC0xKSAqIHNjcm9sbFRhcmdldC5jbGllbnRIZWlnaHQ7XG4gICAgbmV3SW5kZXggPSBnZXRJbmRleE9mSXRlbUF0WShlbGVtZW50LCBlZGdlICsgZGVsdGEsIGRvd253YXJkKTtcbiAgfVxuICBlbHNlIHtcbiAgICAvLyBUaGUgaXRlbSBhdCB0aGUgZWRnZSB3YXNuJ3Qgc2VsZWN0ZWQgeWV0LiBJbnN0ZWFkIG9mIHNjcm9sbGluZywgd2UnbGxcbiAgICAvLyBqdXN0IHNlbGVjdCB0aGF0IGl0ZW0uIFRoYXQgaXMsIHRoZSBmaXJzdCBhdHRlbXB0IHRvIHBhZ2UgdXAvZG93blxuICAgIC8vIHVzdWFsbHkganVzdCBtb3ZlcyB0aGUgc2VsZWN0aW9uIHRvIHRoZSBlZGdlIGluIHRoYXQgZGlyZWN0aW9uLlxuICAgIG5ld0luZGV4ID0gaW5kZXhPZkl0ZW1BdEVkZ2U7XG4gIH1cblxuICBpZiAoIW5ld0luZGV4KSB7XG4gICAgLy8gV2UgY2FuJ3QgZmluZCBhbiBpdGVtIGluIHRoZSBkaXJlY3Rpb24gd2Ugd2FudCB0byB0cmF2ZWwuIFNlbGVjdCB0aGVcbiAgICAvLyBsYXN0IGl0ZW0gKGlmIG1vdmluZyBkb3dud2FyZCkgb3IgZmlyc3QgaXRlbSAoaWYgbW92aW5nIHVwd2FyZCkuXG4gICAgbmV3SW5kZXggPSAoZG93bndhcmQgPyBlbGVtZW50Lml0ZW1zLmxlbmd0aCAtIDEgOiAwKTtcbiAgfVxuXG4gIGlmIChuZXdJbmRleCAhPT0gc2VsZWN0ZWRJbmRleCkge1xuICAgIGVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9IG5ld0luZGV4O1xuICAgIHJldHVybiB0cnVlOyAvLyBXZSBoYW5kbGVkIHRoZSBwYWdlIHVwL2Rvd24gb3Vyc2VsdmVzLlxuICB9XG4gIGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTsgLy8gV2UgZGlkbid0IGRvIGFueXRoaW5nLlxuICB9XG59XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4vY3JlYXRlU3ltYm9sJztcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3QgaXRlbVRleHRDb250ZW50c1N5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnaXRlbVRleHRDb250ZW50cycpO1xuY29uc3QgdHlwZWRQcmVmaXhTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3R5cGVkUHJlZml4Jyk7XG5jb25zdCBwcmVmaXhUaW1lb3V0U3ltYm9sID0gY3JlYXRlU3ltYm9sKCdwcmVmaXhUaW1lb3V0Jyk7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBLZXlib2FyZFByZWZpeFNlbGVjdGlvbi4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHRoYXQgaGFuZGxlcyBsaXN0IGJveC1zdHlsZSBwcmVmaXggdHlwaW5nLCBpbiB3aGljaCB0aGUgdXNlciBjYW4gdHlwZVxuICAgKiBhIHN0cmluZyB0byBzZWxlY3QgdGhlIGZpcnN0IGl0ZW0gdGhhdCBiZWdpbnMgd2l0aCB0aGF0IHN0cmluZy5cbiAgICpcbiAgICogRXhhbXBsZTogc3VwcG9zZSBhIGNvbXBvbmVudCB1c2luZyB0aGlzIG1peGluIGhhcyB0aGUgZm9sbG93aW5nIGl0ZW1zOlxuICAgKlxuICAgKiAgICAgPHNhbXBsZS1saXN0LWNvbXBvbmVudD5cbiAgICogICAgICAgPGRpdj5BcHBsZTwvZGl2PlxuICAgKiAgICAgICA8ZGl2PkFwcmljb3Q8L2Rpdj5cbiAgICogICAgICAgPGRpdj5CYW5hbmE8L2Rpdj5cbiAgICogICAgICAgPGRpdj5CbGFja2JlcnJ5PC9kaXY+XG4gICAqICAgICAgIDxkaXY+Qmx1ZWJlcnJ5PC9kaXY+XG4gICAqICAgICAgIDxkaXY+Q2FudGFsb3VwZTwvZGl2PlxuICAgKiAgICAgICA8ZGl2PkNoZXJyeTwvZGl2PlxuICAgKiAgICAgICA8ZGl2PkxlbW9uPC9kaXY+XG4gICAqICAgICAgIDxkaXY+TGltZTwvZGl2PlxuICAgKiAgICAgPC9zYW1wbGUtbGlzdC1jb21wb25lbnQ+XG4gICAqXG4gICAqIElmIHRoaXMgY29tcG9uZW50IHJlY2VpdmVzIHRoZSBmb2N1cywgYW5kIHRoZSB1c2VyIHByZXNzZXMgdGhlIFwiYlwiIG9yIFwiQlwiXG4gICAqIGtleSwgdGhlIFwiQmFuYW5hXCIgaXRlbSB3aWxsIGJlIHNlbGVjdGVkLCBiZWNhdXNlIGl0J3MgdGhlIGZpcnN0IGl0ZW0gdGhhdFxuICAgKiBtYXRjaGVzIHRoZSBwcmVmaXggXCJiXCIuIChNYXRjaGluZyBpcyBjYXNlLWluc2Vuc2l0aXZlLikgSWYgdGhlIHVzZXIgbm93XG4gICAqIHByZXNzZXMgdGhlIFwibFwiIG9yIFwiTFwiIGtleSBxdWlja2x5LCB0aGUgcHJlZml4IHRvIG1hdGNoIGJlY29tZXMgXCJibFwiLCBzb1xuICAgKiBcIkJsYWNrYmVycnlcIiB3aWxsIGJlIHNlbGVjdGVkLlxuICAgKlxuICAgKiBUaGUgcHJlZml4IHR5cGluZyBmZWF0dXJlIGhhcyBhIG9uZSBzZWNvbmQgdGltZW91dCDigJTCoHRoZSBwcmVmaXggdG8gbWF0Y2hcbiAgICogd2lsbCBiZSByZXNldCBhZnRlciBhIHNlY29uZCBoYXMgcGFzc2VkIHNpbmNlIHRoZSB1c2VyIGxhc3QgdHlwZWQgYSBrZXkuXG4gICAqIElmLCBpbiB0aGUgYWJvdmUgZXhhbXBsZSwgdGhlIHVzZXIgd2FpdHMgYSBzZWNvbmQgYmV0d2VlbiB0eXBpbmcgXCJiXCIgYW5kXG4gICAqIFwibFwiLCB0aGUgcHJlZml4IHdpbGwgYmVjb21lIFwibFwiLCBzbyBcIkxlbW9uXCIgd291bGQgYmUgc2VsZWN0ZWQuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyB0aGUgY29tcG9uZW50IHRvIGludm9rZSBhIGBrZXlkb3duYCBtZXRob2Qgd2hlbiBhIGtleSBpc1xuICAgKiBwcmVzc2VkLiBZb3UgY2FuIHVzZSB0aGUgW0tleWJvYXJkXShLZXlib2FyZC5tZCkgbWl4aW4gZm9yIHRoYXQgcHVycG9zZSwgb3JcbiAgICogd2lyZSB1cCB5b3VyIG93biBrZXlib2FyZCBoYW5kbGluZyBhbmQgY2FsbCBga2V5ZG93bmAgeW91cnNlbGYuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gYWxzbyBleHBlY3RzIHRoZSBjb21wb25lbnQgdG8gcHJvdmlkZSBhbiBgaXRlbXNgIHByb3BlcnR5LiBUaGVcbiAgICogYHRleHRDb250ZW50YCBvZiB0aG9zZSBpdGVtcyB3aWxsIGJlIHVzZWQgZm9yIHB1cnBvc2VzIG9mIHByZWZpeCBtYXRjaGluZy5cbiAgICovXG4gIGNsYXNzIEtleWJvYXJkUHJlZml4U2VsZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgICAvLyBUT0RPOiBJZiB0aGUgc2V0IG9mIGl0ZW1zIGlzIGNoYW5nZWQsIHJlc2V0IHRoZSBwcmVmaXguXG4gICAgLy8gaXRlbXNDaGFuZ2VkKCkge1xuICAgIC8vICAgdGhpc1tpdGVtVGV4dENvbnRlbnRzU3ltYm9sXSA9IG51bGw7XG4gICAgLy8gICByZXNldFR5cGVkUHJlZml4KHRoaXMpO1xuICAgIC8vIH1cblxuICAgIC8vIFRPRE86IElmIHRoZSBzZWxlY3Rpb24gaXMgY2hhbmdlZCBieSBzb21lIG90aGVyIG1lYW5zIChlLmcuLCBhcnJvdyBrZXlzKVxuICAgIC8vIG90aGVyIHRoYW4gcHJlZml4IHR5cGluZywgdGhlbiB0aGF0IGFjdCBzaG91bGQgcmVzZXQgdGhlIHByZWZpeC5cblxuICAgIGtleWRvd24oZXZlbnQpIHtcbiAgICAgIGxldCBoYW5kbGVkO1xuICAgICAgbGV0IHJlc2V0UHJlZml4ID0gdHJ1ZTtcblxuICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgIGNhc2UgODogLy8gQmFja3NwYWNlXG4gICAgICAgICAgaGFuZGxlQmFja3NwYWNlKHRoaXMpO1xuICAgICAgICAgIGhhbmRsZWQgPSB0cnVlO1xuICAgICAgICAgIHJlc2V0UHJlZml4ID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjc6IC8vIEVzY2FwZVxuICAgICAgICAgIGhhbmRsZWQgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGlmICghZXZlbnQuY3RybEtleSAmJiAhZXZlbnQubWV0YUtleSAmJiAhZXZlbnQuYWx0S2V5ICYmXG4gICAgICAgICAgICAgIGV2ZW50LndoaWNoICE9PSAzMiAvKiBTcGFjZSAqLykge1xuICAgICAgICAgICAgaGFuZGxlUGxhaW5DaGFyYWN0ZXIodGhpcywgU3RyaW5nLmZyb21DaGFyQ29kZShldmVudC53aGljaCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXNldFByZWZpeCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVzZXRQcmVmaXgpIHtcbiAgICAgICAgcmVzZXRUeXBlZFByZWZpeCh0aGlzKTtcbiAgICAgIH1cblxuICAgICAgLy8gUHJlZmVyIG1peGluIHJlc3VsdCBpZiBpdCdzIGRlZmluZWQsIG90aGVyd2lzZSB1c2UgYmFzZSByZXN1bHQuXG4gICAgICByZXR1cm4gaGFuZGxlZCB8fCAoc3VwZXIua2V5ZG93biAmJiBzdXBlci5rZXlkb3duKGV2ZW50KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IHRoZSBmaXJzdCBpdGVtIHdob3NlIHRleHQgY29udGVudCBiZWdpbnMgd2l0aCB0aGUgZ2l2ZW4gcHJlZml4LlxuICAgICAqXG4gICAgICogQHBhcmFtIHByZWZpeCBbU3RyaW5nXSBUaGUgcHJlZml4IHN0cmluZyB0byBzZWFyY2ggZm9yXG4gICAgICovXG4gICAgc2VsZWN0SXRlbVdpdGhUZXh0UHJlZml4KHByZWZpeCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdEl0ZW1XaXRoVGV4dFByZWZpeCkgeyBzdXBlci5zZWxlY3RJdGVtV2l0aFRleHRQcmVmaXgocHJlZml4KTsgfVxuICAgICAgaWYgKHByZWZpeCA9PSBudWxsIHx8IHByZWZpeC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGV0IGluZGV4ID0gZ2V0SW5kZXhPZkl0ZW1XaXRoVGV4dFByZWZpeCh0aGlzLCBwcmVmaXgpO1xuICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gS2V5Ym9hcmRQcmVmaXhTZWxlY3Rpb247XG59O1xuXG5cbi8vIFRpbWUgaW4gbWlsbGlzZWNvbmRzIGFmdGVyIHdoaWNoIHRoZSB1c2VyIGlzIGNvbnNpZGVyZWQgdG8gaGF2ZSBzdG9wcGVkXG4vLyB0eXBpbmcuXG5jb25zdCBQUkVGSVhfVElNRU9VVF9EVVJBVElPTiA9IDEwMDA7XG5cblxuLy8gUmV0dXJuIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgaXRlbSB3aXRoIHRoZSBnaXZlbiBwcmVmaXgsIGVsc2UgLTEuXG5mdW5jdGlvbiBnZXRJbmRleE9mSXRlbVdpdGhUZXh0UHJlZml4KGVsZW1lbnQsIHByZWZpeCkge1xuICBsZXQgaXRlbVRleHRDb250ZW50cyA9IGdldEl0ZW1UZXh0Q29udGVudHMoZWxlbWVudCk7XG4gIGxldCBwcmVmaXhMZW5ndGggPSBwcmVmaXgubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1UZXh0Q29udGVudHMubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgaXRlbVRleHRDb250ZW50ID0gaXRlbVRleHRDb250ZW50c1tpXTtcbiAgICBpZiAoaXRlbVRleHRDb250ZW50LnN1YnN0cigwLCBwcmVmaXhMZW5ndGgpID09PSBwcmVmaXgpIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbi8vIFJldHVybiBhbiBhcnJheSBvZiB0aGUgdGV4dCBjb250ZW50IChpbiBsb3dlcmNhc2UpIG9mIGFsbCBpdGVtcy5cbi8vIENhY2hlIHRoZXNlIHJlc3VsdHMuXG5mdW5jdGlvbiBnZXRJdGVtVGV4dENvbnRlbnRzKGVsZW1lbnQpIHtcbiAgaWYgKCFlbGVtZW50W2l0ZW1UZXh0Q29udGVudHNTeW1ib2xdKSB7XG4gICAgbGV0IGl0ZW1zID0gZWxlbWVudC5pdGVtcztcbiAgICBlbGVtZW50W2l0ZW1UZXh0Q29udGVudHNTeW1ib2xdID0gaXRlbXMubWFwKGNoaWxkID0+IHtcbiAgICAgIGxldCB0ZXh0ID0gY2hpbGQudGV4dENvbnRlbnQgfHwgY2hpbGQuYWx0O1xuICAgICAgcmV0dXJuIHRleHQudG9Mb3dlckNhc2UoKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gZWxlbWVudFtpdGVtVGV4dENvbnRlbnRzU3ltYm9sXTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlQmFja3NwYWNlKGVsZW1lbnQpIHtcbiAgbGV0IGxlbmd0aCA9IGVsZW1lbnRbdHlwZWRQcmVmaXhTeW1ib2xdID8gZWxlbWVudFt0eXBlZFByZWZpeFN5bWJvbF0ubGVuZ3RoIDogMDtcbiAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICBlbGVtZW50W3R5cGVkUHJlZml4U3ltYm9sXSA9IGVsZW1lbnRbdHlwZWRQcmVmaXhTeW1ib2xdLnN1YnN0cigwLCBsZW5ndGggLSAxKTtcbiAgfVxuICBlbGVtZW50LnNlbGVjdEl0ZW1XaXRoVGV4dFByZWZpeChlbGVtZW50W3R5cGVkUHJlZml4U3ltYm9sXSk7XG4gIHNldFByZWZpeFRpbWVvdXQoZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVBsYWluQ2hhcmFjdGVyKGVsZW1lbnQsIGNoYXIpIHtcbiAgbGV0IHByZWZpeCA9IGVsZW1lbnRbdHlwZWRQcmVmaXhTeW1ib2xdIHx8ICcnO1xuICBlbGVtZW50W3R5cGVkUHJlZml4U3ltYm9sXSA9IHByZWZpeCArIGNoYXIudG9Mb3dlckNhc2UoKTtcbiAgZWxlbWVudC5zZWxlY3RJdGVtV2l0aFRleHRQcmVmaXgoZWxlbWVudFt0eXBlZFByZWZpeFN5bWJvbF0pO1xuICBzZXRQcmVmaXhUaW1lb3V0KGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiByZXNldFByZWZpeFRpbWVvdXQoZWxlbWVudCkge1xuICBpZiAoZWxlbWVudFtwcmVmaXhUaW1lb3V0U3ltYm9sXSkge1xuICAgIGNsZWFyVGltZW91dChlbGVtZW50W3ByZWZpeFRpbWVvdXRTeW1ib2xdKTtcbiAgICBlbGVtZW50W3ByZWZpeFRpbWVvdXRTeW1ib2xdID0gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzZXRUeXBlZFByZWZpeChlbGVtZW50KSB7XG4gIGVsZW1lbnRbdHlwZWRQcmVmaXhTeW1ib2xdID0gJyc7XG4gIHJlc2V0UHJlZml4VGltZW91dChlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gc2V0UHJlZml4VGltZW91dChlbGVtZW50KSB7XG4gIHJlc2V0UHJlZml4VGltZW91dChlbGVtZW50KTtcbiAgZWxlbWVudFtwcmVmaXhUaW1lb3V0U3ltYm9sXSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHJlc2V0VHlwZWRQcmVmaXgoZWxlbWVudCk7XG4gIH0sIFBSRUZJWF9USU1FT1VUX0RVUkFUSU9OKTtcbn1cbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi9jcmVhdGVTeW1ib2wnO1xuaW1wb3J0IHRvZ2dsZUNsYXNzIGZyb20gJy4vdG9nZ2xlQ2xhc3MnO1xuXG5cbi8vIFN5bWJvbHMgZm9yIHByaXZhdGUgZGF0YSBtZW1iZXJzIG9uIGFuIGVsZW1lbnQuXG5jb25zdCBjbG9zZWRTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2Nsb3NlZCcpO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggT3BlbkNsb3NlLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggYWRkcyBjbG9zZS9vcGVuIHNlbWFudGljcy5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBkb2VzIG5vdCBwcm9kdWNlIGFueSB1c2VyLXZpc2libGUgZWZmZWN0cy4gSW5zdGVhZCBpdCBhcHBsaWVzXG4gICAqIGEgYGJhc2ljLWNsb3NlZGAgQ1NTIGNsYXNzIHRvIHRoZSBjb21wb25lbnQgaG9zdCBpZiB0aGUgaG9zdCBpc1xuICAgKiBjbG9zZWQsIGFuZCBhIGBiYXNpYy1vcGVuZWRgIGNsYXNzIGlmIG9wZW5lZC4gSXQgYWxzbyBpbnZva2VzIGEgYHJlbmRlcmBcbiAgICogZnVuY3Rpb24gdGhhdCBjYW4gYmUgb3ZlcnJpZGRlbiB0byBhcHBseSBjdXN0b20gZWZmZWN0cy5cbiAgICovXG4gIGNsYXNzIE9wZW5DbG9zZSBleHRlbmRzIGJhc2Uge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgLy8gU2V0IGRlZmF1bHRzLlxuICAgICAgaWYgKHR5cGVvZiB0aGlzLmNsb3NlZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5jbG9zZWQgPSB0aGlzLmRlZmF1bHRzLmNsb3NlZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbG9zZSB0aGUgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIHNldHRpbmcgdGhlIGBjbG9zZWRgIHByb3BlcnR5IHRvIHRydWUuXG4gICAgICovXG4gICAgY2xvc2UoKSB7XG4gICAgICB0aGlzLmNsb3NlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiB0aGUgY29tcG9uZW50IGlzIGN1cmVudGx5IGNsb3NlZC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG4gICAgZ2V0IGNsb3NlZCgpIHtcbiAgICAgIHJldHVybiB0aGlzW2Nsb3NlZFN5bWJvbF07XG4gICAgfVxuICAgIHNldCBjbG9zZWQodmFsdWUpIHtcbiAgICAgIGxldCBwcmV2aW91c0Nsb3NlZCA9IHRoaXNbY2xvc2VkU3ltYm9sXTtcbiAgICAgIHRoaXNbY2xvc2VkU3ltYm9sXSA9IHZhbHVlO1xuICAgICAgaWYgKCdjbG9zZWQnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLmNsb3NlZCA9IHZhbHVlOyB9XG4gICAgICBpZiAodmFsdWUgIT09IHByZXZpb3VzQ2xvc2VkKSB7XG4gICAgICAgIHRoaXMucmVuZGVyKHZhbHVlKTtcblxuICAgICAgICBsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2Nsb3NlZC1jaGFuZ2VkJyk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2spIHsgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTsgfVxuICAgICAgdGhpcy5yZW5kZXIodGhpcy5jbG9zZWQpO1xuICAgIH1cblxuICAgIGdldCBkZWZhdWx0cygpIHtcbiAgICAgIGxldCBkZWZhdWx0cyA9IHN1cGVyLmRlZmF1bHRzIHx8IHt9O1xuICAgICAgZGVmYXVsdHMuY2xvc2VkID0gZmFsc2U7XG4gICAgICByZXR1cm4gZGVmYXVsdHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3BlbiB0aGUgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIHNldHRpbmcgdGhlIGBjbG9zZWRgIHByb3BlcnR5IHRvIGZhbHNlLlxuICAgICAqL1xuICAgIG9wZW4oKSB7XG4gICAgICB0aGlzLmNsb3NlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm0gY3VzdG9tIHJlbmRlcmluZyBvZiB0aGUgY2xvc2Uvb3BlbiB0cmFuc2l0aW9uLlxuICAgICAqXG4gICAgICogWW91IGNhbiBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwZXJmb3JtIGN1c3RvbSBlZmZlY3RzLiBJZiB5b3UgZG8gc28sXG4gICAgICogYmUgc3VyZSB0byBpbnZva2UgYHN1cGVyKClgIGluIHlvdXIgaW1wbGVtZW50YXRpb24gdG8gZ2V0IHRoZSBiYXNlbGluZVxuICAgICAqIGJlaGF2aW9yLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtib29sZWFufSBjbG9zaW5nIC0gVHJ1ZSBpZiB0aGUgY29tcG9uZW50IGlzIGJlaW5nIGNsb3NlZCxcbiAgICAgKiAgICAgICAgZmFsc2UgaWYgaXQncyBiZWluZyBvcGVuZWQuXG4gICAgICovXG4gICAgcmVuZGVyKGNsb3NpbmcpIHtcbiAgICAgIGlmIChzdXBlci5yZW5kZXIpIHsgc3VwZXIucmVuZGVyKCk7IH1cbiAgICAgIGlmICghdGhpcy5wYXJlbnROb2RlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRvZ2dsZUNsYXNzKHRoaXMsICdiYXNpYy1jbG9zZWQnLCBjbG9zaW5nKTtcbiAgICAgIHRvZ2dsZUNsYXNzKHRoaXMsICdiYXNpYy1vcGVuZWQnLCAhY2xvc2luZyk7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICFjbG9zaW5nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGUgdGhlIGNvbXBvbmVudCdzIG9wZW4vY2xvc2VkIHN0YXRlLlxuICAgICAqL1xuICAgIHRvZ2dsZSgpIHtcbiAgICAgIHRoaXMuY2xvc2VkID0gIXRoaXMuY2xvc2VkO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIE9wZW5DbG9zZTtcbn07XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4vY3JlYXRlU3ltYm9sJztcbmltcG9ydCBGcmFjdGlvbmFsU2VsZWN0aW9uIGZyb20gJy4vRnJhY3Rpb25hbFNlbGVjdGlvbic7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IGFuaW1hdGlvblN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnYW5pbWF0aW9uJyk7XG5jb25zdCBsYXN0QW5pbWF0aW9uU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdsYXN0QW5pbWF0aW9uJyk7XG5jb25zdCBwbGF5aW5nQW5pbWF0aW9uU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdhbmltYXRpbmdTZWxlY3Rpb24nKTtcbmNvbnN0IHByZXZpb3VzU2VsZWN0aW9uU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdwcmV2aW91c1NlbGVjdGlvbicpO1xuY29uc3Qgc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb25TeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3NlbGVjdGlvbkFuaW1hdGlvbkR1cmF0aW9uJyk7XG5jb25zdCBzZWxlY3Rpb25BbmltYXRpb25FZmZlY3RTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3NlbGVjdGlvbkFuaW1hdGlvbkVmZmVjdCcpO1xuY29uc3Qgc2VsZWN0aW9uQW5pbWF0aW9uS2V5ZnJhbWVzU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdzZWxlY3Rpb25BbmltYXRpb25LZXlmcmFtZXMnKTtcbmNvbnN0IHNob3dUcmFuc2l0aW9uU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdzaG93VHJhbnNpdGlvbicpO1xuY29uc3QgcmVzZXRBbmltYXRpb25zT25OZXh0UmVuZGVyU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdyZXNldEFuaW1hdGlvbnNPbk5leHRSZW5kZXInKTtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFNlbGVjdGlvbkFuaW1hdGlvbi4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1peGluKGJhc2UpIHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggdXNlcyBhbmltYXRpb24gdG8gc2hvdyB0cmFuc2l0aW9ucyBiZXR3ZWVuIHNlbGVjdGlvbiBzdGF0ZXMuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gY2FuIGJlIHVzZWQgYnkgY29tcG9uZW50cyB0aGF0IHdhbnQgdG8gcHJvdmlkZSB2aXNpYmxlXG4gICAqIGFuaW1hdGlvbnMgd2hlbiBjaGFuZ2luZyB0aGUgc2VsZWN0aW9uLiBGb3IgZXhhbXBsZSwgYSBjYXJvdXNlbCBjb21wb25lbnRcbiAgICogbWF5IHdhbnQgdG8gZGVmaW5lIGEgc2xpZGluZyBhbmltYXRpb24gZWZmZWN0IHNob3duIHdoZW4gbW92aW5nIGJldHdlZW5cbiAgICogaXRlbXMuXG4gICAqXG4gICAqIFRoZSBhbmltYXRpb24gaXMgZGVmaW5lZCBieSBhIGBzZWxlY3Rpb25BbmltYXRpb25LZXlmcmFtZXNgIHByb3BlcnR5OyBzZWVcbiAgICogdGhhdCBwcm9wZXJ0eSBmb3IgZGV0YWlscyBvbiBob3cgdG8gZGVmaW5lIHRoZXNlIGtleWZyYW1lcy4gVGhpcyBhbmltYXRpb25cbiAgICogd2lsbCBiZSB1c2VkIGluIHR3byB3YXlzLiBGaXJzdCwgd2hlbiBtb3Zpbmcgc3RyaWN0bHkgYmV0d2VlbiBpdGVtcywgdGhlXG4gICAqIGFuaW1hdGlvbiB3aWxsIHBsYXkgc21vb3RobHkgdG8gc2hvdyB0aGUgc2VsZWN0aW9uIGNoYW5naW5nLiBTZWNvbmQsIHRoZVxuICAgKiBhbmltYXRpb24gY2FuIGJlIHVzZWQgdG8gcmVuZGVyIHRoZSBzZWxlY3Rpb24gYXQgYSBmaXhlZCBwb2ludCBpbiB0aGVcbiAgICogdHJhbnNpdGlvbiBiZXR3ZWVuIHN0YXRlcy4gRS5nLiwgaWYgdGhlIHVzZXIgcGF1c2VzIGhhbGZ3YXkgdGhyb3VnaFxuICAgKiBkcmFnZ2luZyBhbiBlbGVtZW50IHVzaW5nIHRoZSBbU3dpcGVEaXJlY3Rpb25dKFN3aXBlRGlyZWN0aW9uLm1kKSBvclxuICAgKiBbVHJhY2twYWREaXJlY3Rpb25dKFRyYWNrcGFkRGlyZWN0aW9uLm1kKSBtaXhpbnMsIHRoZW4gdGhlIHNlbGVjdGlvblxuICAgKiBhbmltYXRpb24gd2lsbCBiZSBzaG93biBhdCB0aGUgcG9pbnQgZXhhY3RseSBoYWxmd2F5IHRocm91Z2guXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyBhIGNvbXBvbmVudCB0byBwcm92aWRlIGFuIGBpdGVtc2AgYXJyYXkgb2YgYWxsIGVsZW1lbnRzXG4gICAqIGluIHRoZSBsaXN0LCB3aGljaCBjYW4gYmUgcHJvdmlkZWQgdmlhIHRoZVxuICAgKiBbQ29udGVudEFzSXRlbXNdKENvbnRlbnRBc0l0ZW1zLm1kKSBtaXhpbi4gVGhpcyBtaXhpbiBhbHNvIGV4cGVjdHNcbiAgICogYHNlbGVjdGVkSW5kZXhgIGFuZCBgc2VsZWN0ZWRJdGVtYCBwcm9wZXJ0aWVzLCB3aGljaCBjYW4gYmUgcHJvdmlkZWQgdmlhXG4gICAqIHRoZSBbU2luZ2xlU2VsZWN0aW9uXShTaW5nbGVTZWxlY3Rpb24ubWQpIG1peGluLlxuICAgKlxuICAgKiBUaGlzIG1peGluIHN1cHBvcnRzIGEgYHNlbGVjdGlvbldyYXBzYCBwcm9wZXJ0eS4gV2hlbiB0cnVlLCB0aGUgdXNlciBjYW5cbiAgICogbmF2aWdhdGUgZm9yd2FyZCBmcm9tIHRoZSBsYXN0IGl0ZW0gaW4gdGhlIGxpc3QgYW5kIHdyYXAgYXJvdW5kIHRvIHRoZVxuICAgKiBmaXJzdCBpdGVtLCBvciBuYXZpZ2F0ZSBiYWNrd2FyZCBmcm9tIHRoZSBmaXJzdCBpdGVtIGFuZCB3cmFwIGFyb3VuZCB0byB0aGVcbiAgICogbGFzdCBpdGVtLlxuICAgKlxuICAgKiBUaGlzIG1peGluIHVzZXMgdGhlIFdlYiBBbmltYXRpb25zIEFQSS4gRm9yIHVzZSBvbiBicm93c2VycyB3aGljaFxuICAgKiBkbyBub3Qgc3VwcG9ydCB0aGF0IEFQSSBuYXRpdmVseSwgeW91IHdpbGwgbmVlZCB0byBsb2FkIHRoZVxuICAgKiBbV2ViIEFuaW1hdGlvbnMgcG9seWZpbGxdKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWItYW5pbWF0aW9ucy93ZWItYW5pbWF0aW9ucy1qcykuXG4gICAqL1xuICBjbGFzcyBTZWxlY3Rpb25BbmltYXRpb24gZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcblxuICAgICAgLy8gU2V0IGRlZmF1bHRzLlxuICAgICAgaWYgKHR5cGVvZiB0aGlzLnNlbGVjdGlvbkFuaW1hdGlvbkR1cmF0aW9uID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbkFuaW1hdGlvbkR1cmF0aW9uID0gdGhpcy5kZWZhdWx0cy5zZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvbjtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5zZWxlY3Rpb25BbmltYXRpb25FZmZlY3QgPT09ICd1bmRlZmluZWQnICYmIHRoaXMuc2VsZWN0aW9uQW5pbWF0aW9uS2V5ZnJhbWVzID09IG51bGwpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25BbmltYXRpb25FZmZlY3QgPSB0aGlzLmRlZmF1bHRzLnNlbGVjdGlvbkFuaW1hdGlvbkVmZmVjdDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zaG93VHJhbnNpdGlvbiA9IHRydWU7XG4gICAgfVxuXG4gICAgZ2V0IGRlZmF1bHRzKCkge1xuICAgICAgbGV0IGRlZmF1bHRzID0gc3VwZXIuZGVmYXVsdHMgfHwge307XG4gICAgICBkZWZhdWx0cy5zZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvbiA9IDI1MDtcbiAgICAgIGRlZmF1bHRzLnNlbGVjdGlvbkFuaW1hdGlvbkVmZmVjdCA9ICdzbGlkZSc7XG4gICAgICByZXR1cm4gZGVmYXVsdHM7XG4gICAgfVxuXG4gICAgaXRlbUFkZGVkKGl0ZW0pIHtcbiAgICAgIC8vIFdlIG1hcmsgbmV3IGl0ZW1zIGluIHRoZSBsaXN0IGFzIGV4cGxpY2l0bHkgdmlzaWJsZSB0byBBUklBLiBPdGhlcndpc2UsXG4gICAgICAvLyB3aGVuIGFuIGl0ZW0gaXNuJ3QgdmlzaWJsZSBvbiB0aGUgc2NyZWVuLCBBUklBIHdpbGwgYXNzdW1lIHRoZSBpdGVtIGlzXG4gICAgICAvLyBvZiBubyBpbnRlcmVzdCB0byB0aGUgdXNlciwgYW5kIGxlYXZlIGl0IG91dCBvZiB0aGUgYWNjZXNzaWJpbGl0eSB0cmVlLlxuICAgICAgLy8gSWYgdGhlIGxpc3QgY29udGFpbnMgMTAgaXRlbXMsIGJ1dCBvbmx5IDMgYXJlIHZpc2libGUsIGEgc2NyZWVuIHJlYWRlclxuICAgICAgLy8gbWlnaHQgdGhlbiBhbm5vdW5jZSB0aGUgbGlzdCBvbmx5IGhhcyAzIGl0ZW1zLiBUbyBlbnN1cmUgdGhhdCBzY3JlZW5cbiAgICAgIC8vIHJlYWRlcnMgYW5kIG90aGVyIGFzc2lzdGl2ZSB0ZWNobm9sb2dpZXMgYW5ub3VuY2UgdGhlIGNvcnJlY3QgdG90YWxcbiAgICAgIC8vIG51bWJlciBvZiBpdGVtcywgd2UgZXhwbGljaXRseSBtYXJrIGFsbCBpdGVtcyBhcyBub3QgaGlkZGVuLiBUaGlzIHdpbGxcbiAgICAgIC8vIGV4cG9zZSB0aGVtIGFsbCBpbiB0aGUgYWNjZXNzaWJpbGl0eSB0cmVlLCBldmVuIHRoZSBpdGVtcyB3aGljaCBhcmVcbiAgICAgIC8vIGN1cnJlbnRseSBub3QgcmVuZGVyZWQuXG4gICAgICAvL1xuICAgICAgLy8gVE9ETzogR2VuZXJhbGx5IHNwZWFraW5nLCB0aGlzIGVudGlyZSBtaXhpbiBhc3N1bWVzIHRoYXQgdGhlIHVzZXIgY2FuXG4gICAgICAvLyBuYXZpZ2F0ZSB0aHJvdWdoIGFsbCBpdGVtcyBpbiBhIGxpc3QuIEJ1dCBhbiBhcHAgY291bGQgc3R5bGUgYW4gaXRlbSBhc1xuICAgICAgLy8gZGlzcGxheTpub25lIG9yIHZpc2liaWxpdHk6aGlkZGVuIGJlY2F1c2UgdGhlIHVzZXIgaXMgbm90IGFsbG93ZWQgdG9cbiAgICAgIC8vIGludGVyYWN0IHdpdGggdGhhdCBpdGVtIGF0IHRoZSBtb21lbnQuIFN1cHBvcnQgZm9yIHRoaXMgc2NlbmFyaW8gc2hvdWxkXG4gICAgICAvLyBiZSBhZGRlZC4gVGhpcyB3b3VsZCBlbnRhaWwgY2hhbmdpbmcgYWxsIGxvY2F0aW9ucyB3aGVyZSBhIG1peGluXG4gICAgICAvLyBmdW5jdGlvbiBpcyBjb3VudGluZyBpdGVtcywgaXRlcmF0aW5nIG92ZXIgdGhlICh2aXNpYmxlKSBpdGVtcywgYW5kXG4gICAgICAvLyBzaG93aW5nIG9yIGhpZGluZyBpdGVtcy4gQW1vbmcgb3RoZXIgdGhpbmdzLCB0aGUgY29kZSBiZWxvdyB0byBtYWtlXG4gICAgICAvLyBpdGVtcyB2aXNpYmxlIHRvIEFSSUEgd291bGQgbmVlZCB0byBkaXNjcmltaW5hdGUgYmV0d2VlbiBpdGVtcyB3aGljaFxuICAgICAgLy8gYXJlIGludmlzaWJsZSBiZWNhdXNlIG9mIGFuaW1hdGlvbiBzdGF0ZSwgb3IgaW52aXNpYmxlIGJlY2F1c2UgdGhlIHVzZXJcbiAgICAgIC8vIHNob3VsZG4ndCBpbnRlcmFjdCB3aXRoIHRoZW0uXG4gICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgaXRlbXNDaGFuZ2VkKCkge1xuICAgICAgaWYgKHN1cGVyLml0ZW1zQ2hhbmdlZCkgeyBzdXBlci5pdGVtc0NoYW5nZWQoKTsgfVxuICAgICAgcmVzZXRBbmltYXRpb25zKHRoaXMpO1xuICAgICAgcmVuZGVyU2VsZWN0aW9uKHRoaXMpO1xuICAgIH1cblxuICAgIHJlc2V0QW5pbWF0aW9ucygpIHtcbiAgICAgIHJlc2V0QW5pbWF0aW9ucyh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIGZyYWN0aW9uYWwgdmFsdWUgaW5kaWNhdGluZyBob3cgZmFyIHRoZSB1c2VyIGhhcyBjdXJyZW50bHkgYWR2YW5jZWQgdG9cbiAgICAgKiB0aGUgbmV4dC9wcmV2aW91cyBpdGVtLiBFLmcuLCBhIGBzZWxlY3RlZEZyYWN0aW9uYCBvZiAzLjUgaW5kaWNhdGVzIHRoZVxuICAgICAqIHVzZXIgaXMgaGFsZndheSBiZXR3ZWVuIGl0ZW1zIDMgYW5kIDQuXG4gICAgICpcbiAgICAgKiBGb3IgbW9yZSBkZXRhaWxzLCBzZWUgdGhlIFtGcmFjdGlvbmFsU2VsZWN0aW9uXShGcmFjdGlvbmFsU2VsZWN0aW9uLm1kKVxuICAgICAqIG1peGluLlxuICAgICAqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0ZWRGcmFjdGlvbigpIHtcbiAgICAgIHJldHVybiBzdXBlci5zZWxlY3RlZEZyYWN0aW9uIHx8IDA7XG4gICAgfVxuICAgIHNldCBzZWxlY3RlZEZyYWN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoJ3NlbGVjdGVkRnJhY3Rpb24nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkRnJhY3Rpb24gPSB2YWx1ZTsgfVxuICAgICAgcmVuZGVyU2VsZWN0aW9uKHRoaXMsIHRoaXMuc2VsZWN0ZWRJbmRleCwgdmFsdWUpO1xuICAgIH1cblxuICAgIGdldCBzZWxlY3RlZEl0ZW0oKSB7XG4gICAgICByZXR1cm4gc3VwZXIuc2VsZWN0ZWRJdGVtO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0ZWRJdGVtKGl0ZW0pIHtcbiAgICAgIGlmICgnc2VsZWN0ZWRJdGVtJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEl0ZW0gPSBpdGVtOyB9XG4gICAgICByZW5kZXJTZWxlY3Rpb24odGhpcywgdGhpcy5zZWxlY3RlZEluZGV4LCAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZHVyYXRpb24gb2YgYSBzZWxlY3Rpb24gYW5pbWF0aW9uIGluIG1pbGxpc2Vjb25kcy5cbiAgICAgKlxuICAgICAqIFRoaXMgbWVhc3VyZXMgdGhlIGFtb3VudCBvZiB0aW1lIHJlcXVpcmVkIGZvciBhIHNlbGVjdGlvbiBhbmltYXRpb24gdG9cbiAgICAgKiBjb21wbGV0ZS4gVGhpcyBudW1iZXIgcmVtYWlucyBjb25zdGFudCwgZXZlbiBpZiB0aGUgbnVtYmVyIG9mIGl0ZW1zIGJlaW5nXG4gICAgICogYW5pbWF0ZWQgaW5jcmVhc2VzLlxuICAgICAqXG4gICAgICogVGhlIGRlZmF1bHQgdmFsdWUgaXMgMjUwIG1pbGxpc2Vjb25kcyAoYSBxdWFydGVyIGEgc2Vjb25kKS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQGRlZmF1bHQgMjUwXG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGlvbkFuaW1hdGlvbkR1cmF0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXNbc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb25TeW1ib2xdO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb24odmFsdWUpIHtcbiAgICAgIHRoaXNbc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb25TeW1ib2xdID0gdmFsdWU7XG4gICAgICBpZiAoJ3NlbGVjdGlvbkFuaW1hdGlvbkR1cmF0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvbiA9IHZhbHVlOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIG5hbWUgb2YgYSBzdGFuZGFyZCBzZWxlY3Rpb24gYW5pbWF0aW9uIGVmZmVjdC5cbiAgICAgKlxuICAgICAqIFRoaXMgaXMgYSBzaG9ydGhhbmQgZm9yIHNldHRpbmcgdGhlIGBzZWxlY3Rpb25BbmltYXRpb25LZXlmcmFtZXNgXG4gICAgICogcHJvcGVydHkgdG8gc3RhbmRhcmQga2V5ZnJhbWVzLiBTdXBwb3J0ZWQgc3RyaW5nIHZhbHVlczpcbiAgICAgKlxuICAgICAqICogXCJjcm9zc2ZhZGVcIlxuICAgICAqICogXCJyZXZlYWxcIlxuICAgICAqICogXCJyZXZlYWxXaXRoRmFkZVwiXG4gICAgICogKiBcInNob3dBZGphY2VudFwiXG4gICAgICogKiBcInNsaWRlXCJcbiAgICAgKiAqIFwic2xpZGVXaXRoR2FwXCJcbiAgICAgKlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQGRlZmF1bHQgXCJzbGlkZVwiXG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGlvbkFuaW1hdGlvbkVmZmVjdCgpIHtcbiAgICAgIHJldHVybiB0aGlzW3NlbGVjdGlvbkFuaW1hdGlvbkVmZmVjdFN5bWJvbF07XG4gICAgfVxuICAgIHNldCBzZWxlY3Rpb25BbmltYXRpb25FZmZlY3QodmFsdWUpIHtcbiAgICAgIHRoaXNbc2VsZWN0aW9uQW5pbWF0aW9uRWZmZWN0U3ltYm9sXSA9IHZhbHVlO1xuICAgICAgaWYgKCdzZWxlY3Rpb25BbmltYXRpb25FZmZlY3QnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGlvbkFuaW1hdGlvbkVmZmVjdCA9IHZhbHVlOyB9XG4gICAgICB0aGlzLnNlbGVjdGlvbkFuaW1hdGlvbktleWZyYW1lcyA9IG1peGluLnN0YW5kYXJkRWZmZWN0S2V5ZnJhbWVzW3ZhbHVlXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUga2V5ZnJhbWVzIHRoYXQgZGVmaW5lIGFuIGFuaW1hdGlvbiB0aGF0IHBsYXlzIGZvciBhbiBpdGVtIHdoZW4gbW92aW5nXG4gICAgICogZm9yd2FyZCBpbiB0aGUgc2VxdWVuY2UuXG4gICAgICpcbiAgICAgKiBUaGlzIGlzIGFuIGFycmF5IG9mIENTUyBydWxlcyB0aGF0IHdpbGwgYmUgYXBwbGllZC4gVGhlc2UgYXJlIHVzZWQgYXNcbiAgICAgKiBba2V5ZnJhbWVzXShodHRwOi8vdzNjLmdpdGh1Yi5pby93ZWItYW5pbWF0aW9ucy8ja2V5ZnJhbWVzLXNlY3Rpb24pXG4gICAgICogdG8gYW5pbWF0ZSB0aGUgaXRlbSB3aXRoIHRoZVxuICAgICAqIFtXZWIgQW5pbWF0aW9ucyBBUEldKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9hbmltYXRpb24pLlxuICAgICAqXG4gICAgICogVGhlIGFuaW1hdGlvbiByZXByZXNlbnRzIHRoZSBzdGF0ZSBvZiB0aGUgbmV4dCBpdGVtIGFzIGl0IG1vdmVzIGZyb21cbiAgICAgKiBjb21wbGV0ZWx5IHVuc2VsZWN0ZWQgKG9mZnN0YWdlLCB1c3VhbGx5IHJpZ2h0KSwgdG8gc2VsZWN0ZWQgKGNlbnRlclxuICAgICAqIHN0YWdlKSwgdG8gY29tcGxldGVseSB1bnNlbGVjdGVkIChvZmZzdGFnZSwgdXN1YWxseSBsZWZ0KS4gVGhlIGNlbnRlciB0aW1lXG4gICAgICogb2YgdGhlIGFuaW1hdGlvbiBzaG91bGQgY29ycmVzcG9uZCB0byB0aGUgaXRlbSdzIHF1aXNjZW50IHNlbGVjdGVkIHN0YXRlLFxuICAgICAqIHR5cGljYWxseSBpbiB0aGUgY2VudGVyIG9mIHRoZSBzdGFnZSBhbmQgYXQgdGhlIGl0ZW0ncyBsYXJnZXN0IHNpemUuXG4gICAgICpcbiAgICAgKiBUaGUgZGVmYXVsdCBmb3J3YXJkIGFuaW1hdGlvbiBpcyBhIHNtb290aCBzbGlkZSBhdCBmdWxsIHNpemUgZnJvbSByaWdodCB0b1xuICAgICAqIGxlZnQuXG4gICAgICpcbiAgICAgKiBXaGVuIG1vdmluZyB0aGUgc2VsZWN0aW9uIGJhY2t3YXJkLCB0aGlzIGFuaW1hdGlvbiBpcyBwbGF5ZWQgaW4gcmV2ZXJzZS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtjc3NSdWxlc1tdfVxuICAgICAqL1xuICAgIGdldCBzZWxlY3Rpb25BbmltYXRpb25LZXlmcmFtZXMoKSB7XG4gICAgICAvLyBTdGFuZGFyZCBhbmltYXRpb24gc2xpZGVzIGxlZnQvcmlnaHQsIGtlZXBzIGFkamFjZW50IGl0ZW1zIG91dCBvZiB2aWV3LlxuICAgICAgcmV0dXJuIHRoaXNbc2VsZWN0aW9uQW5pbWF0aW9uS2V5ZnJhbWVzU3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGlvbkFuaW1hdGlvbktleWZyYW1lcyh2YWx1ZSkge1xuICAgICAgdGhpc1tzZWxlY3Rpb25BbmltYXRpb25LZXlmcmFtZXNTeW1ib2xdID0gdmFsdWU7XG4gICAgICBpZiAoJ3NlbGVjdGlvbkFuaW1hdGlvbktleWZyYW1lcycgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0aW9uQW5pbWF0aW9uS2V5ZnJhbWVzID0gdmFsdWU7IH1cbiAgICAgIHJlc2V0QW5pbWF0aW9ucyh0aGlzKTtcbiAgICAgIHJlbmRlclNlbGVjdGlvbih0aGlzKTtcbiAgICB9XG5cbiAgICBnZXQgc2VsZWN0aW9uV3JhcHMoKSB7XG4gICAgICByZXR1cm4gc3VwZXIuc2VsZWN0aW9uV3JhcHM7XG4gICAgfVxuICAgIHNldCBzZWxlY3Rpb25XcmFwcyh2YWx1ZSkge1xuICAgICAgaWYgKCdzZWxlY3Rpb25XcmFwcycgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0aW9uV3JhcHMgPSB2YWx1ZTsgfVxuICAgICAgcmVzZXRBbmltYXRpb25zKHRoaXMpO1xuICAgICAgcmVuZGVyU2VsZWN0aW9uKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERldGVybWluZSB3aGV0aGVyIGEgdHJhbnNpdGlvbiBzaG91bGQgYmUgc2hvd24gZHVyaW5nIHNlbGVjdGlvbi5cbiAgICAgKlxuICAgICAqIENvbXBvbmVudHMgbGlrZSBjYXJvdXNlbHMgb2Z0ZW4gZGVmaW5lIGFuaW1hdGVkIENTUyB0cmFuc2l0aW9ucyBmb3JcbiAgICAgKiBzbGlkaW5nIGVmZmVjdHMuIFN1Y2ggYSB0cmFuc2l0aW9uIHNob3VsZCB1c3VhbGx5ICpub3QqIGJlIGFwcGxpZWQgd2hpbGVcbiAgICAgKiB0aGUgdXNlciBpcyBkcmFnZ2luZywgYmVjYXVzZSBhIENTUyBhbmltYXRpb24gd2lsbCBpbnRyb2R1Y2UgYSBsYWcgdGhhdFxuICAgICAqIG1ha2VzIHRoZSBzd2lwZSBmZWVsIHNsdWdnaXNoLiBJbnN0ZWFkLCBhcyBsb25nIGFzIHRoZSB1c2VyIGlzIGRyYWdnaW5nXG4gICAgICogd2l0aCB0aGVpciBmaW5nZXIgZG93biwgdGhlIHRyYW5zaXRpb24gc2hvdWxkIGJlIHN1cHByZXNzZWQuIFdoZW4gdGhlXG4gICAgICogdXNlciByZWxlYXNlcyB0aGVpciBmaW5nZXIsIHRoZSB0cmFuc2l0aW9uIGNhbiBiZSByZXN0b3JlZCwgYWxsb3dpbmcgdGhlXG4gICAgICogYW5pbWF0aW9uIHRvIHNob3cgdGhlIGNhcm91c2VsIHNsaWRpbmcgaW50byBpdHMgZmluYWwgcG9zaXRpb24uXG4gICAgICpcbiAgICAgKiBOb3RlOiBUaGlzIHByb3BlcnR5IGlzIG9ubHkgaW50ZW5kZWQgdG8gbGV0IGEgY29tcG9uZW50IGNvb3BlcmF0ZSB3aXRoXG4gICAgICogbWl4aW5zIHRoYXQgbWF5IGJlIGFwcGxpZWQgdG8gaXQsIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gbGV0IHNvbWVvbmVcbiAgICAgKiB1c2luZyBjb21wb25lbnQgcGVybWFuZW50bHkgZW5hYmxlIG9yIGRpc2FibGUgdHJhbnNpdGlvbiBlZmZlY3RzLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59IHRydWUgaWYgYSBjb21wb25lbnQtcHJvdmlkZWQgdHJhbnNpdGlvbiBzaG91bGQgYmUgc2hvd24sXG4gICAgICogZmFsc2UgaWYgbm90LlxuICAgICAqL1xuICAgIC8vIFRPRE86IFJlbmFtZSAoYW5kIGZsaXAgbWVhbmluZykgdG8gc29tZXRoaW5nIGxpa2UgZHJhZ2dpbmcoKT9cbiAgICBnZXQgc2hvd1RyYW5zaXRpb24oKSB7XG4gICAgICByZXR1cm4gc3VwZXIuc2hvd1RyYW5zaXRpb24gfHwgdGhpc1tzaG93VHJhbnNpdGlvblN5bWJvbF07XG4gICAgfVxuICAgIHNldCBzaG93VHJhbnNpdGlvbih2YWx1ZSkge1xuICAgICAgdGhpc1tzaG93VHJhbnNpdGlvblN5bWJvbF0gPSB2YWx1ZTtcbiAgICAgIGlmICgnc2hvd1RyYW5zaXRpb24nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNob3dUcmFuc2l0aW9uID0gdmFsdWU7IH1cbiAgICB9XG5cbiAgICB0b3VjaFN0YXJ0KCkge1xuICAgICAgaWYgKHN1cGVyLnRvdWNoU3RhcnQpIHsgc3VwZXIudG91Y2hTdGFydCgpOyB9XG4gICAgICAvLyBUaGUgYW5pbWF0aW9ucyBjdXJyZW50bHkgYXBwbGllZCB0byB0aGUgaXRlbXMgd29uJ3QgYmUgdmFsaWQgZm9yIHRoZVxuICAgICAgLy8gbmV3IGRyYWcgb3BlcmF0aW9uLlxuICAgICAgdGhpc1tyZXNldEFuaW1hdGlvbnNPbk5leHRSZW5kZXJTeW1ib2xdID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gU2VsZWN0aW9uQW5pbWF0aW9uO1xufVxuXG5cbi8vIFdlIGV4cG9zZSBoZWxwZXJzIG9uIHRoZSBtaXhpbiBmdW5jdGlvbiB0aGF0IHdlIHdhbnQgdG8gYmUgYWJsZSB0byB1bml0IHRlc3QuXG4vLyBTaW5jZSB0aGVzZSBhcmUgb24gdGhlIGZ1bmN0aW9uLCBub3Qgb24gdGhlIGNsYXNzIGVtaXR0ZWQgYnkgdGhlIGZ1bmN0aW9uLFxuLy8gdGhleSBkb24ndCBlbmQgdXAgZ2V0dGluZyBleHBvc2VkIG9uIGFjdHVhbCBlbGVtZW50IGluc3RhbmNlcy5cbm1peGluLmhlbHBlcnMgPSB7XG5cbiAgLypcbiAgICogQ2FsY3VsYXRlIHRoZSBhbmltYXRpb24gZnJhY3Rpb25zIGZvciBhbiBlbGVtZW50J3MgaXRlbXMgYXQgdGhlIGdpdmVuXG4gICAqIHNlbGVjdGlvbiBwb2ludC4gVGhpcyBpcyB1c2VkIHdoZW4gcmVuZGVyaW5nIHRoZSBlbGVtZW50J3Mgc2VsZWN0aW9uIHN0YXRlXG4gICAqIGluc3RhbnRhbmVvdXNseS5cbiAgICpcbiAgICogVGhpcyBmdW5jdGlvbiBjb25zaWRlcnMgdGhlIHNlbGVjdGVkSW5kZXggcGFyYW1ldGVyLCB3aGljaCBjYW4gYmUgYSB3aG9sZVxuICAgKiBvciBmcmFjdGlvbmFsIG51bWJlciwgYW5kIGRldGVybWluZXMgd2hpY2ggaXRlbXMgd2lsbCBiZSB2aXNpYmxlIGF0IHRoYXRcbiAgICogaW5kZXguIFRoaXMgZnVuY3Rpb24gdGhlbiBjYWxjdWxhdGVzIGEgY29ycmVzcG9uZGluZyBhbmltYXRpb24gZnJhY3Rpb246IGFcbiAgICogbnVtYmVyIGJldHdlZW4gMCBhbmQgMSBpbmRpY2F0aW5nIGhvdyBmYXIgdGhyb3VnaCB0aGUgc2VsZWN0aW9uIGFuaW1hdGlvblxuICAgKiBhbiBpdGVtIHNob3VsZCBiZSBzaG93biwgb3IgbnVsbCBpZiB0aGUgaXRlbSBzaG91bGQgbm90IGJlIHZpc2libGUgYXQgdGhhdFxuICAgKiBzZWxlY3Rpb24gaW5kZXguIFRoZXNlIGZyYWN0aW9ucyBhcmUgcmV0dXJuZWQgYXMgYW4gYXJyYXksIHdoZXJlIHRoZVxuICAgKiBhbmltYXRpb24gZnJhY3Rpb24gYXQgcG9zaXRpb24gTiBjb3JyZXNwb25kcyB0byBob3cgaXRlbSBOIHNob3VsZCBiZSBzaG93bi5cbiAgICovXG4gIGFuaW1hdGlvbkZyYWN0aW9uc0ZvclNlbGVjdGlvbihlbGVtZW50LCBzZWxlY3Rpb24pIHtcblxuICAgIGxldCBpdGVtcyA9IGVsZW1lbnQuaXRlbXM7XG4gICAgaWYgKCFpdGVtcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBpdGVtQ291bnQgPSBpdGVtcy5sZW5ndGg7XG4gICAgbGV0IHNlbGVjdGlvbldyYXBzID0gZWxlbWVudC5zZWxlY3Rpb25XcmFwcztcblxuICAgIHJldHVybiBpdGVtcy5tYXAoKGl0ZW0sIGl0ZW1JbmRleCkgPT4ge1xuICAgICAgLy8gSG93IG1hbnkgc3RlcHMgZnJvbSB0aGUgc2VsZWN0aW9uIHBvaW50IHRvIHRoaXMgaXRlbT9cbiAgICAgIGxldCBzdGVwcyA9IHN0ZXBzVG9JbmRleChpdGVtQ291bnQsIHNlbGVjdGlvbldyYXBzLCBzZWxlY3Rpb24sIGl0ZW1JbmRleCk7XG4gICAgICAvLyBUbyBjb252ZXJ0IHN0ZXBzIHRvIGFuaW1hdGlvbiBmcmFjdGlvbjpcbiAgICAgIC8vIHN0ZXBzICAgICAgYW5pbWF0aW9uIGZyYWN0aW9uXG4gICAgICAvLyAgMSAgICAgICAgIDAgICAgIChzdGFnZSByaWdodClcbiAgICAgIC8vICAwICAgICAgICAgMC41ICAgKGNlbnRlciBzdGFnZSlcbiAgICAgIC8vIC0xICAgICAgICAgMSAgICAgKHN0YWdlIGxlZnQpXG4gICAgICBsZXQgYW5pbWF0aW9uRnJhY3Rpb24gPSAoMSAtIHN0ZXBzKSAvIDI7XG4gICAgICByZXR1cm4gKGFuaW1hdGlvbkZyYWN0aW9uID49IDAgJiYgYW5pbWF0aW9uRnJhY3Rpb24gPD0gMSkgP1xuICAgICAgICBhbmltYXRpb25GcmFjdGlvbiA6XG4gICAgICAgIG51bGw7IC8vIE91dHNpZGUgYW5pbWF0aW9uIHJhbmdlXG4gICAgfSk7XG4gIH0sXG5cbiAgLypcbiAgICogQ2FsY3VsYXRlIHRoZSBhbmltYXRpb24gdGltaW5ncyB0aGF0IHNob3VsZCBiZSB1c2VkIHRvIHNtb290aGx5IGFuaW1hdGUgdGhlXG4gICAqIGVsZW1lbnQncyBpdGVtcyBmcm9tIG9uZSBzZWxlY3Rpb24gc3RhdGUgdG8gYW5vdGhlci5cbiAgICpcbiAgICogVGhpcyByZXR1cm5zIGFuIGFycmF5IG9mIHRpbWluZ3MsIHdoZXJlIHRoZSB0aW1pbmcgYXQgcG9zaXRpb24gTiBzaG91bGQgYmVcbiAgICogdXNlZCB0byBhbmltYXRlIGl0ZW0gTi4gSWYgYW4gaXRlbSdzIHRpbWluZyBpcyBudWxsLCB0aGVuIHRoYXQgaXRlbSBzaG91bGRcbiAgICogbm90IHRha2UgcGxhY2UgaW4gdGhlIGFuaW1hdGlvbiwgYW5kIHNob3VsZCBiZSBoaWRkZW4gaW5zdGVhZC5cbiAgICovXG4gIGVmZmVjdFRpbWluZ3NGb3JTZWxlY3Rpb25BbmltYXRpb24oZWxlbWVudCwgZnJvbVNlbGVjdGlvbiwgdG9TZWxlY3Rpb24pIHtcblxuICAgIGxldCBpdGVtcyA9IGVsZW1lbnQuaXRlbXM7XG4gICAgaWYgKCFpdGVtcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgaXRlbUNvdW50ID0gaXRlbXMubGVuZ3RoO1xuICAgIGxldCBzZWxlY3Rpb25XcmFwcyA9IGVsZW1lbnQuc2VsZWN0aW9uV3JhcHM7XG4gICAgbGV0IHRvSW5kZXggPSBGcmFjdGlvbmFsU2VsZWN0aW9uLmhlbHBlcnMud3JhcHBlZFNlbGVjdGlvblBhcnRzKHRvU2VsZWN0aW9uLCBpdGVtQ291bnQsIHNlbGVjdGlvbldyYXBzKS5pbmRleDtcbiAgICBsZXQgdG90YWxTdGVwcyA9IHN0ZXBzVG9JbmRleChpdGVtQ291bnQsIHNlbGVjdGlvbldyYXBzLCBmcm9tU2VsZWN0aW9uLCB0b1NlbGVjdGlvbik7XG4gICAgbGV0IGRpcmVjdGlvbiA9IHRvdGFsU3RlcHMgPj0gMCA/ICdub3JtYWwnOiAncmV2ZXJzZSc7XG4gICAgbGV0IGZpbGwgPSAnYm90aCc7XG4gICAgbGV0IHRvdGFsRHVyYXRpb24gPSBlbGVtZW50LnNlbGVjdGlvbkFuaW1hdGlvbkR1cmF0aW9uO1xuICAgIGxldCBzdGVwRHVyYXRpb24gPSB0b3RhbFN0ZXBzICE9PSAwID9cbiAgICAgIHRvdGFsRHVyYXRpb24gKiAyIC8gTWF0aC5jZWlsKE1hdGguYWJzKHRvdGFsU3RlcHMpKSA6XG4gICAgICAwOyAgLy8gTm8gc3RlcHMgcmVxdWlyZWQsIGFuaW1hdGlvbiB3aWxsIGJlIGluc3RhbnRlbm91cy5cblxuICAgIGxldCB0aW1pbmdzID0gaXRlbXMubWFwKChpdGVtLCBpdGVtSW5kZXgpID0+IHtcbiAgICAgIGxldCBzdGVwcyA9IHN0ZXBzVG9JbmRleChpdGVtQ291bnQsIHNlbGVjdGlvbldyYXBzLCBpdGVtSW5kZXgsIHRvU2VsZWN0aW9uKTtcbiAgICAgIC8vIElmIHdlIGluY2x1ZGUgdGhpcyBpdGVtIGluIHRoZSBzdGFnZ2VyZWQgc2VxdWVuY2Ugb2YgYW5pbWF0aW9ucyB3ZSdyZVxuICAgICAgLy8gY3JlYXRpbmcsIHdoZXJlIHdvdWxkIHRoZSBpdGVtIGFwcGVhciBpbiB0aGUgc2VxdWVuY2U/XG4gICAgICBsZXQgcG9zaXRpb25JblNlcXVlbmNlID0gdG90YWxTdGVwcyAtIHN0ZXBzO1xuICAgICAgaWYgKHRvdGFsU3RlcHMgPCAwKSB7XG4gICAgICAgIHBvc2l0aW9uSW5TZXF1ZW5jZSA9IC1wb3NpdGlvbkluU2VxdWVuY2U7XG4gICAgICB9XG4gICAgICAvLyBTbywgaXMgdGhpcyBpdGVtIHJlYWxseSBpbmNsdWRlZCBpbiB0aGUgc2VxdWVuY2U/XG4gICAgICBpZiAoTWF0aC5jZWlsKHBvc2l0aW9uSW5TZXF1ZW5jZSkgPj0gMCAmJiBwb3NpdGlvbkluU2VxdWVuY2UgPD0gTWF0aC5hYnModG90YWxTdGVwcykpIHtcbiAgICAgICAgLy8gTm90ZSB0aGF0IGRlbGF5IGZvciBmaXJzdCBpdGVtIHdpbGwgYmUgbmVnYXRpdmUuIFRoYXQgd2lsbCBjYXVzZVxuICAgICAgICAvLyB0aGUgYW5pbWF0aW9uIHRvIHN0YXJ0IGhhbGZ3YXkgdGhyb3VnaCwgd2hpY2ggaXMgd2hhdCB3ZSB3YW50LlxuICAgICAgICBsZXQgZGVsYXkgPSBzdGVwRHVyYXRpb24gKiAocG9zaXRpb25JblNlcXVlbmNlIC0gMSkvMjtcbiAgICAgICAgbGV0IGVuZERlbGF5ID0gaXRlbUluZGV4ID09PSB0b0luZGV4ID9cbiAgICAgICAgICAtc3RlcER1cmF0aW9uLzIgOiAgIC8vIFN0b3AgaGFsZndheSB0aHJvdWdoLlxuICAgICAgICAgIDA7ICAgICAgICAgICAgICAvLyBQbGF5IGFuaW1hdGlvbiB1bnRpbCBlbmQuXG4gICAgICAgIHJldHVybiB7IGR1cmF0aW9uOiBzdGVwRHVyYXRpb24sIGRpcmVjdGlvbiwgZmlsbCwgZGVsYXksIGVuZERlbGF5IH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB0aW1pbmdzO1xuICB9XG5cbn07XG5cblxuLy8gS2V5ZnJhbWVzIGZvciBzdGFuZGFyZCBzZWxlY3Rpb24gYW5pbWF0aW9uIGVmZmVjdHMuXG5taXhpbi5zdGFuZGFyZEVmZmVjdEtleWZyYW1lcyA9IHtcblxuICAvLyBTaW1wbGUgY3Jvc3NmYWRlXG4gIGNyb3NzZmFkZTogW1xuICAgIHsgb3BhY2l0eTogMCB9LFxuICAgIHsgb3BhY2l0eTogMSB9LFxuICAgIHsgb3BhY2l0eTogMCB9XG4gIF0sXG5cbiAgLy8gUmV2ZWFsLCBhcyBpZiBzbGlkaW5nIHRoZSB0b3AgY2FyZCBvZmYgYSBkZWNrIG9mIGNhcmRzXG4gIHJldmVhbDogW1xuICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwJSknLCB6SW5kZXg6IDAgfSxcbiAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCUpJywgekluZGV4OiAxIH0sXG4gICAgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC0xMDAlKScsIHpJbmRleDogMiB9XG4gIF0sXG5cbiAgLy8gR29vZ2xlIFBob3Rvcy1zdHlsZSByZXZlYWwtd2l0aC1mYWRlIGFuaW1hdGlvblxuICByZXZlYWxXaXRoRmFkZTogW1xuICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwJSkgc2NhbGUoMC43NSknLCBvcGFjaXR5OiAwLCB6SW5kZXg6IDAgfSxcbiAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCUpIHNjYWxlKDEuMCknLCBvcGFjaXR5OiAxLCB6SW5kZXg6IDEgfSxcbiAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTEwMCUpIHNjYWxlKDEuMCknLCBvcGFjaXR5OiAxLCB6SW5kZXg6IDIgfVxuICBdLFxuXG4gIC8vIENhcm91c2VsIHZhcmlhbnQgd2l0aCBhIGJpdCBvZiBvZmYtc3RhZ2UgZWxlbWVudHMgc2hvd2luZ1xuICBzaG93QWRqYWNlbnQ6IFtcbiAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoNzglKSBzY2FsZSgwLjcpJywgekluZGV4OiAwIH0sXG4gICAgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDAlKSBzY2FsZSgwLjgyKScsIHpJbmRleDogMSB9LFxuICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNzglKSBzY2FsZSgwLjcpJywgekluZGV4OiAwIH1cbiAgXSxcblxuICAvLyBTaW1wbGUgc2xpZGVcbiAgc2xpZGU6IFtcbiAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMTAwJSknIH0sXG4gICAgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC0xMDAlKScgfVxuICBdLFxuXG4gIC8vIFNsaWRlLCB3aXRoIGEgZ2FwIGJldHdlZW5cbiAgc2xpZGVXaXRoR2FwOiBbXG4gICAgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDExMCUpJyB9LFxuICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtMTEwJSknIH1cbiAgXVxuXG59O1xuXG5cbi8qXG4gKiBTbW9vdGhseSBhbmltYXRlIHRoZSBzZWxlY3Rpb24gYmV0d2VlbiB0aGUgaW5kaWNhdGVkIFwiZnJvbVwiIGFuZCBcInRvXCJcbiAqIGluZGljZXMuIFRoZSBmb3JtZXIgY2FuIGJlIGEgZnJhY3Rpb24sIGUuZy4sIHdoZW4gdGhlIHVzZXIgcmVsZWFzZXMgYSBmaW5nZXJcbiAqIHRvIGNvbXBsZXRlIGEgdG91Y2ggZHJhZywgYW5kIHRoZSBzZWxlY3Rpb24gd2lsbCBzbmFwIHRvIHRoZSBjbG9zZXN0IHdob2xlXG4gKiBpbmRleC5cbiAqL1xuZnVuY3Rpb24gYW5pbWF0ZVNlbGVjdGlvbihlbGVtZW50LCBmcm9tU2VsZWN0aW9uLCB0b1NlbGVjdGlvbikge1xuXG4gIHJlc2V0QW5pbWF0aW9ucyhlbGVtZW50KTtcblxuICAvLyBDYWxjdWxhdGUgdGhlIGFuaW1hdGlvbiB0aW1pbmdzLlxuICBsZXQgaXRlbXMgPSBlbGVtZW50Lml0ZW1zO1xuICBsZXQga2V5ZnJhbWVzID0gZWxlbWVudC5zZWxlY3Rpb25BbmltYXRpb25LZXlmcmFtZXM7XG4gIGVsZW1lbnRbcGxheWluZ0FuaW1hdGlvblN5bWJvbF0gPSB0cnVlO1xuICBsZXQgdGltaW5ncyA9IG1peGluLmhlbHBlcnMuZWZmZWN0VGltaW5nc0ZvclNlbGVjdGlvbkFuaW1hdGlvbihlbGVtZW50LCBmcm9tU2VsZWN0aW9uLCB0b1NlbGVjdGlvbik7XG5cbiAgLy8gRmlndXJlIG91dCB3aGljaCBpdGVtIHdpbGwgYmUgdGhlIG9uZSAqYWZ0ZXIqIHRoZSBvbmUgd2UncmUgc2VsZWN0aW5nLlxuICBsZXQgaXRlbUNvdW50ID0gaXRlbXMubGVuZ3RoO1xuICBsZXQgc2VsZWN0aW9uV3JhcHMgPSBlbGVtZW50LnNlbGVjdGlvbldyYXBzO1xuICBsZXQgc2VsZWN0aW9uSW5kZXggPSBGcmFjdGlvbmFsU2VsZWN0aW9uLmhlbHBlcnMuc2VsZWN0aW9uUGFydHModG9TZWxlY3Rpb24sIGl0ZW1Db3VudCwgc2VsZWN0aW9uV3JhcHMpLmluZGV4O1xuICBsZXQgdG90YWxTdGVwcyA9IHN0ZXBzVG9JbmRleChpdGVtQ291bnQsIHNlbGVjdGlvbldyYXBzLCBmcm9tU2VsZWN0aW9uLCB0b1NlbGVjdGlvbik7XG4gIGxldCBmb3J3YXJkID0gdG90YWxTdGVwcyA+PSAwO1xuICBsZXQgbmV4dFVwSW5kZXggPSBzZWxlY3Rpb25JbmRleCArIChmb3J3YXJkID8gMSA6IC0gMSk7XG4gIGlmIChzZWxlY3Rpb25XcmFwcykge1xuICAgIG5leHRVcEluZGV4ID0gRnJhY3Rpb25hbFNlbGVjdGlvbi5oZWxwZXJzLndyYXBwZWRTZWxlY3Rpb24obmV4dFVwSW5kZXgsIGl0ZW1Db3VudCk7XG4gIH0gZWxzZSBpZiAoIWlzSXRlbUluZGV4SW5Cb3VuZHMoZWxlbWVudCwgbmV4dFVwSW5kZXgpKSB7XG4gICAgbmV4dFVwSW5kZXggPSBudWxsOyAvLyBBdCBzdGFydC9lbmQgb2YgbGlzdDsgZG9uJ3QgaGF2ZSBhIG5leHQgaXRlbSB0byBzaG93LlxuICB9XG5cbiAgLy8gUGxheSB0aGUgYW5pbWF0aW9ucyB1c2luZyB0aG9zZSB0aW1pbmdzLlxuICBsZXQgbGFzdEFuaW1hdGlvbkRldGFpbHM7XG4gIHRpbWluZ3MuZm9yRWFjaCgodGltaW5nLCBpbmRleCkgPT4ge1xuICAgIGxldCBpdGVtID0gaXRlbXNbaW5kZXhdO1xuICAgIGlmICh0aW1pbmcpIHtcbiAgICAgIHNob3dJdGVtKGl0ZW0sIHRydWUpO1xuICAgICAgbGV0IGFuaW1hdGlvbiA9IGl0ZW0uYW5pbWF0ZShrZXlmcmFtZXMsIHRpbWluZyk7XG4gICAgICBlbGVtZW50W2FuaW1hdGlvblN5bWJvbF1baW5kZXhdID0gYW5pbWF0aW9uO1xuICAgICAgaWYgKGluZGV4ID09PSBuZXh0VXBJbmRleCkge1xuICAgICAgICAvLyBUaGlzIGl0ZW0gd2lsbCBiZSBhbmltYXRlZCwgc28gd2lsbCBhbHJlYWR5IGJlIGluIHRoZSBkZXNpcmVkIHN0YXRlXG4gICAgICAgIC8vIGFmdGVyIHRoZSBhbmltYXRpb24gY29tcGxldGVzLlxuICAgICAgICBuZXh0VXBJbmRleCA9IG51bGw7XG4gICAgICB9XG4gICAgICBpZiAodGltaW5nLmVuZERlbGF5ICE9PSAwKSB7XG4gICAgICAgIC8vIFRoaXMgaXMgdGhlIGFuaW1hdGlvbiBmb3IgdGhlIGl0ZW0gdGhhdCB3aWxsIGJlIGxlZnQgc2VsZWN0ZWQuXG4gICAgICAgIC8vIFdlIHdhbnQgdG8gY2xlYW4gdXAgd2hlbiB0aGlzIGFuaW1hdGlvbiBjb21wbGV0ZXMuXG4gICAgICAgIGxhc3RBbmltYXRpb25EZXRhaWxzID0geyBhbmltYXRpb24sIGluZGV4LCB0aW1pbmcsIGZvcndhcmQgfTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVGhpcyBpdGVtIGRvZXNuJ3QgcGFydGljaXBhdGUgaW4gdGhlIGFuaW1hdGlvbi5cbiAgICAgIHNob3dJdGVtKGl0ZW0sIGZhbHNlKTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChsYXN0QW5pbWF0aW9uRGV0YWlscyAhPSBudWxsKSB7XG4gICAgLy8gQXJyYW5nZSBmb3IgY2xlYW4tdXAgd29yayB0byBiZSBwZXJmb3JtZWQuXG4gICAgbGFzdEFuaW1hdGlvbkRldGFpbHMubmV4dFVwSW5kZXggPSBuZXh0VXBJbmRleDtcbiAgICBsYXN0QW5pbWF0aW9uRGV0YWlscy5hbmltYXRpb24ub25maW5pc2ggPSBldmVudCA9PiBzZWxlY3Rpb25BbmltYXRpb25GaW5pc2hlZChlbGVtZW50LCBsYXN0QW5pbWF0aW9uRGV0YWlscyk7XG4gICAgZWxlbWVudFtsYXN0QW5pbWF0aW9uU3ltYm9sXSA9IGxhc3RBbmltYXRpb25EZXRhaWxzLmFuaW1hdGlvbjtcbiAgfSBlbHNlIHtcbiAgICAvLyBTaG91bGRuJ3QgaGFwcGVuIC0tIHdlIHNob3VsZCBhbHdheXMgaGF2ZSBhdCBsZWFzdCBvbmUgYW5pbWF0aW9uLlxuICAgIGVsZW1lbnRbcGxheWluZ0FuaW1hdGlvblN5bWJvbF0gPSBmYWxzZTtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIGdldEFuaW1hdGlvbkZvckl0ZW1JbmRleChlbGVtZW50LCBpbmRleCkge1xuICBpZiAoZWxlbWVudFthbmltYXRpb25TeW1ib2xdID09IG51bGwpIHtcbiAgICAvLyBOb3QgcmVhZHkgeWV0O1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGxldCBhbmltYXRpb24gPSBlbGVtZW50W2FuaW1hdGlvblN5bWJvbF1baW5kZXhdO1xuICBpZiAoIWFuaW1hdGlvbikge1xuICAgIGxldCBpdGVtID0gZWxlbWVudC5pdGVtc1tpbmRleF07XG4gICAgYW5pbWF0aW9uID0gaXRlbS5hbmltYXRlKGVsZW1lbnQuc2VsZWN0aW9uQW5pbWF0aW9uS2V5ZnJhbWVzLCB7XG4gICAgICBkdXJhdGlvbjogZWxlbWVudC5zZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvbixcbiAgICAgIGZpbGw6ICdib3RoJ1xuICAgIH0pO1xuICAgIGFuaW1hdGlvbi5wYXVzZSgpO1xuICAgIGVsZW1lbnRbYW5pbWF0aW9uU3ltYm9sXVtpbmRleF0gPSBhbmltYXRpb247XG4gIH1cbiAgcmV0dXJuIGFuaW1hdGlvbjtcbn1cblxuZnVuY3Rpb24gaXNJdGVtSW5kZXhJbkJvdW5kcyhlbGVtZW50LCBpbmRleCkge1xuICByZXR1cm4gaW5kZXggPj0gMCAmJiBlbGVtZW50Lml0ZW1zICYmIGluZGV4IDwgZWxlbWVudC5pdGVtcy5sZW5ndGg7XG59XG5cbi8qXG4gKiBSZW5kZXIgdGhlIHNlbGVjdGlvbiBzdGF0ZSBvZiB0aGUgZWxlbWVudC5cbiAqXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIHJlLXJlbmRlciBhIHByZXZpb3VzIHNlbGVjdGlvbiBzdGF0ZSAoaWYgdGhlXG4gKiBzZWxlY3RlZEluZGV4IHBhcmFtIGlzIG9taXR0ZWQpLCByZW5kZXIgdGhlIHNlbGVjdGlvbiBpbnN0YW50bHkgYXQgYSBnaXZlblxuICogd2hvbGUgb3IgZnJhY3Rpb25hbCBzZWxlY3Rpb24gaW5kZXgsIG9yIGFuaW1hdGUgdG8gYSBnaXZlbiBzZWxlY3Rpb24gaW5kZXguXG4gKlxuICogVGhlcmUgYXJlIHNldmVyYWwgZGlzdGluY3Qgc2NlbmFyaW9zIHdlIG5lZWQgdG8gY292ZXI6XG4gKlxuICogMS4gSW5pdGlhbCBwb3NpdGlvbmluZywgb3IgcmVwb3NpdGlvbmluZyBhZnRlciBjaGFuZ2luZyBhIHByb3BlcnR5IGxpa2VcbiAqICAgIHNlbGVjdGlvbkFuaW1hdGlvbktleWZyYW1lcyB0aGF0IGFmZmVjdHMgcmVuZGVyaW5nLlxuICogMi4gQW5pbWF0ZSBvbiBzZWxlY3RlZEluZGV4IGNoYW5nZS4gVGhpcyBzaG91bGQgb3ZlcnJpZGUgYW55IGFuaW1hdGlvbi9zd2lwZVxuICogICAgYWxyZWFkeSBpbiBwcm9ncmVzcy5cbiAqIDMuIEluc3RhbnRseSByZW5kZXIgdGhlIGN1cnJlbnQgcG9zaXRpb24gb2YgYSBkcmFnIG9wZXJhdGlvbiBpbiBwcm9ncmVzcy5cbiAqIDQuIENvbXBsZXRlIGEgZHJhZyBvcGVyYXRpb24uIElmIHRoZSBkcmFnIHdhc24ndCBmYXIgZW5vdWdoIHRvIGFmZmVjdFxuICogICAgc2VsZWN0aW9uLCB3ZSdsbCBqdXN0IGJlIHJlc3RvcmluZyB0aGUgc2VsZWN0ZWRGcmFjdGlvbiB0byAwLlxuICpcbiAqIElmIHRoZSBsaXN0IGRvZXMgbm90IHdyYXAsIGFueSBzZWxlY3Rpb24gcG9zaXRpb24gb3V0c2lkZSB0aGUgbGlzdCdzIGJvdW5kc1xuICogd2lsbCBiZSBkYW1wZWQgdG8gcHJvZHVjZSBhIHZpc3VhbCBlZmZlY3Qgb2YgdGVuc2lvbi5cbiAqL1xuZnVuY3Rpb24gcmVuZGVyU2VsZWN0aW9uKGVsZW1lbnQsIHNlbGVjdGVkSW5kZXg9ZWxlbWVudC5zZWxlY3RlZEluZGV4LCBzZWxlY3RlZEZyYWN0aW9uPWVsZW1lbnQuc2VsZWN0ZWRGcmFjdGlvbikge1xuICBsZXQgaXRlbUNvdW50ID0gZWxlbWVudC5pdGVtcyA/IGVsZW1lbnQuaXRlbXMubGVuZ3RoIDogMDtcbiAgaWYgKGl0ZW1Db3VudCA9PT0gMCkge1xuICAgIC8vIE5vdGhpbmcgdG8gcmVuZGVyLlxuICAgIHJldHVybjtcbiAgfVxuICBpZiAoc2VsZWN0ZWRJbmRleCA8IDApIHtcbiAgICAvLyBUT0RPOiBIYW5kbGUgbm8gc2VsZWN0aW9uLlxuICAgIHJldHVybjtcbiAgfVxuICBsZXQgc2VsZWN0aW9uID0gc2VsZWN0ZWRJbmRleCArIHNlbGVjdGVkRnJhY3Rpb247XG4gIGlmIChlbGVtZW50LnNlbGVjdGlvbldyYXBzKSB7XG4gICAgLy8gQXBwbHkgd3JhcHBpbmcgdG8gZW5zdXJlIGNvbnNpc3RlbnQgcmVwcmVzZW50YXRpb24gb2Ygc2VsZWN0aW9uLlxuICAgIHNlbGVjdGlvbiA9IEZyYWN0aW9uYWxTZWxlY3Rpb24uaGVscGVycy53cmFwcGVkU2VsZWN0aW9uKHNlbGVjdGlvbiwgaXRlbUNvdW50KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBBcHBseSBkYW1waW5nIGlmIG5lY2Vzc2FyeS5cbiAgICBzZWxlY3Rpb24gPSBGcmFjdGlvbmFsU2VsZWN0aW9uLmhlbHBlcnMuZGFtcGVkU2VsZWN0aW9uKHNlbGVjdGlvbiwgaXRlbUNvdW50KTtcbiAgfVxuICBsZXQgcHJldmlvdXNTZWxlY3Rpb24gPSBlbGVtZW50W3ByZXZpb3VzU2VsZWN0aW9uU3ltYm9sXTtcbiAgaWYgKGVsZW1lbnRbc2hvd1RyYW5zaXRpb25TeW1ib2xdICYmIHByZXZpb3VzU2VsZWN0aW9uICE9IG51bGwgJiZcbiAgICAgIHByZXZpb3VzU2VsZWN0aW9uICE9PSBzZWxlY3Rpb24pIHtcbiAgICAvLyBBbmltYXRlIHNlbGVjdGlvbiBmcm9tIHByZXZpb3VzIHN0YXRlIHRvIG5ldyBzdGF0ZS5cbiAgICBhbmltYXRlU2VsZWN0aW9uKGVsZW1lbnQsIHByZXZpb3VzU2VsZWN0aW9uLCBzZWxlY3Rpb24pO1xuICB9IGVsc2UgaWYgKHNlbGVjdGVkRnJhY3Rpb24gPT09IDAgJiYgZWxlbWVudFtwbGF5aW5nQW5pbWF0aW9uU3ltYm9sXSkge1xuICAgIC8vIEFscmVhZHkgaW4gcHJvY2VzcyBvZiBhbmltYXRpbmcgdG8gZnJhY3Rpb24gMC4gRHVyaW5nIHRoYXQgcHJvY2VzcyxcbiAgICAvLyBpZ25vcmUgc3Vic2VxdWVudCBhdHRlbXB0cyB0byByZW5kZXJTZWxlY3Rpb24gdG8gZnJhY3Rpb24gMC5cbiAgICByZXR1cm47XG4gIH0gZWxzZSB7XG4gICAgLy8gUmVuZGVyIGN1cnJlbnQgc2VsZWN0aW9uIHN0YXRlIGluc3RhbnRseS5cbiAgICByZW5kZXJTZWxlY3Rpb25JbnN0YW50bHkoZWxlbWVudCwgc2VsZWN0aW9uKTtcbiAgfVxuICBlbGVtZW50W3ByZXZpb3VzU2VsZWN0aW9uU3ltYm9sXSA9IHNlbGVjdGlvbjtcbn1cblxuLypcbiAqIEluc3RhbnRseSByZW5kZXIgKGRvbid0IGFuaW1hdGUpIHRoZSBlbGVtZW50J3MgaXRlbXMgYXQgdGhlIGdpdmVuIHdob2xlIG9yXG4gKiBmcmFjdGlvbmFsIHNlbGVjdGlvbiBpbmRleC5cbiAqL1xuZnVuY3Rpb24gcmVuZGVyU2VsZWN0aW9uSW5zdGFudGx5KGVsZW1lbnQsIHRvU2VsZWN0aW9uKSB7XG4gIGlmIChlbGVtZW50W3Jlc2V0QW5pbWF0aW9uc09uTmV4dFJlbmRlclN5bWJvbF0pIHtcbiAgICByZXNldEFuaW1hdGlvbnMoZWxlbWVudCk7XG4gICAgZWxlbWVudFtyZXNldEFuaW1hdGlvbnNPbk5leHRSZW5kZXJTeW1ib2xdID0gZmFsc2U7XG4gIH1cbiAgbGV0IGFuaW1hdGlvbkZyYWN0aW9ucyA9IG1peGluLmhlbHBlcnMuYW5pbWF0aW9uRnJhY3Rpb25zRm9yU2VsZWN0aW9uKGVsZW1lbnQsIHRvU2VsZWN0aW9uKTtcbiAgYW5pbWF0aW9uRnJhY3Rpb25zLm1hcCgoYW5pbWF0aW9uRnJhY3Rpb24sIGluZGV4KSA9PiB7XG4gICAgbGV0IGl0ZW0gPSBlbGVtZW50Lml0ZW1zW2luZGV4XTtcbiAgICBpZiAoYW5pbWF0aW9uRnJhY3Rpb24gIT0gbnVsbCkge1xuICAgICAgc2hvd0l0ZW0oaXRlbSwgdHJ1ZSk7XG4gICAgICBzZXRBbmltYXRpb25GcmFjdGlvbihlbGVtZW50LCBpbmRleCwgYW5pbWF0aW9uRnJhY3Rpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaG93SXRlbShpdGVtLCBmYWxzZSk7XG4gICAgfVxuICB9KTtcbn1cblxuLypcbiAqIFdlIG1haW50YWluIGFuIGFycmF5IGNvbnRhaW5pbmcgYW4gYW5pbWF0aW9uIHBlciBpdGVtLiBUaGlzIGlzIHVzZWQgZm9yIHR3b1xuICogcmVhc29uczpcbiAqXG4gKiAqIER1cmluZyBhIGRyYWcgb3BlcmF0aW9uLCB3ZSB3YW50IHRvIGJlIGFibGUgdG8gcmV1c2UgYW5pbWF0aW9ucyBiZXR3ZWVuXG4gKiAgIGRyYWcgdXBkYXRlcy5cbiAqICogV2hlbiBhIHNlbGVjdGlvbiBhbmltYXRpb24gY29tcGxldGVzLCB3ZSBuZWVkIHRvIGJlIGFibGUgdG8gbGVhdmUgdGhlXG4gKiAgIHZpc2liaWxlIGl0ZW1zIGluIGEgcGF1c2VkIHN0YXRlLiBMYXRlciwgd2UnbGwgd2FudCB0byBiZSBhYmxlIHRvIGNsZWFuIHVwXG4gKiAgIHRob3NlIGFuaW1hdGlvbnMuXG4gKlxuICogTm90ZSB0aGF0IHRoaXMgYXJyYXkgaXMgc3BhcnNlOiBpdCB3aWxsIG9ubHkgaG9sZCB1cCBmcm9tIDDigJMzIGFuaW1hdGlvbnMgYXRcbiAqIGFueSBnaXZlbiBwb2ludC5cbiAqL1xuZnVuY3Rpb24gcmVzZXRBbmltYXRpb25zKGVsZW1lbnQpIHtcbiAgbGV0IGFuaW1hdGlvbnMgPSBlbGVtZW50W2FuaW1hdGlvblN5bWJvbF07XG4gIGlmIChhbmltYXRpb25zKSB7XG4gICAgLy8gQ2FuY2VsIGV4aXN0aW5nIGFuaW1hdGlvbnMgdG8gcmVtb3ZlIHRoZSBlZmZlY3RzIHRoZXkncmUgYXBwbHlpbmcuXG4gICAgYW5pbWF0aW9ucy5mb3JFYWNoKChhbmltYXRpb24sIGluZGV4KSA9PiB7XG4gICAgICBpZiAoYW5pbWF0aW9uKSB7XG4gICAgICAgIGFuaW1hdGlvbi5jYW5jZWwoKTtcbiAgICAgICAgYW5pbWF0aW9uc1tpbmRleF0gPSBudWxsO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGxldCBpdGVtQ291bnQgPSBlbGVtZW50Lml0ZW1zID8gZWxlbWVudC5pdGVtcy5sZW5ndGggOiAwO1xuICBpZiAoIWFuaW1hdGlvbnMgfHwgYW5pbWF0aW9ucy5sZW5ndGggIT09IGl0ZW1Db3VudCkge1xuICAgIC8vIEhhdmVuJ3QgYW5pbWF0ZWQgYmVmb3JlIHdpdGggdGhpcyBudW1iZXIgb2YgaXRlbXM7IChyZSljcmVhdGUgYXJyYXkuXG4gICAgZWxlbWVudFthbmltYXRpb25TeW1ib2xdID0gbmV3IEFycmF5KGl0ZW1Db3VudCk7XG4gIH1cbn1cblxuLypcbiAqIFRoZSBsYXN0IGFuaW1hdGlvbiBpbiBvdXIgc2VsZWN0aW9uIGFuaW1hdGlvbiBoYXMgY29tcGxldGVkLiBDbGVhbiB1cC5cbiAqL1xuZnVuY3Rpb24gc2VsZWN0aW9uQW5pbWF0aW9uRmluaXNoZWQoZWxlbWVudCwgZGV0YWlscykge1xuXG4gIC8vIFdoZW4gdGhlIGxhc3QgYW5pbWF0aW9uIGNvbXBsZXRlcywgc2hvdyB0aGUgbmV4dCBpdGVtIGluIHRoZSBkaXJlY3Rpb25cbiAgLy8gd2UncmUgZ29pbmcuIFdhaXRpbmcgdG8gdGhhdCB1bnRpbCB0aGlzIHBvaW50IGlzIGEgYml0IG9mIGEgaGFjayB0byBhdm9pZFxuICAvLyBoYXZpbmcgYSBuZXh0IGl0ZW0gdGhhdCdzIGhpZ2hlciBpbiB0aGUgbmF0dXJhbCB6LW9yZGVyIG9ic2N1cmUgb3RoZXIgaXRlbXNcbiAgLy8gZHVyaW5nIGFuaW1hdGlvbi5cbiAgbGV0IG5leHRVcEluZGV4ID0gZGV0YWlscy5uZXh0VXBJbmRleDtcbiAgaWYgKG5leHRVcEluZGV4ICE9IG51bGwpIHtcbiAgICBpZiAoZWxlbWVudFthbmltYXRpb25TeW1ib2xdW25leHRVcEluZGV4XSkge1xuICAgICAgLy8gQ2FuY2VsIGV4aXN0aW5nIHNlbGVjdGlvbiBhbmltYXRpb24gc28gd2UgY2FuIGNvbnN0cnVjdCBhIG5ldyBvbmUuXG4gICAgICBlbGVtZW50W2FuaW1hdGlvblN5bWJvbF1bbmV4dFVwSW5kZXhdLmNhbmNlbCgpO1xuICAgICAgZWxlbWVudFthbmltYXRpb25TeW1ib2xdW25leHRVcEluZGV4XSA9IG51bGw7XG4gICAgfVxuICAgIGxldCBhbmltYXRpb25GcmFjdGlvbiA9IGRldGFpbHMuZm9yd2FyZCA/IDAgOiAxO1xuICAgIHNldEFuaW1hdGlvbkZyYWN0aW9uKGVsZW1lbnQsIG5leHRVcEluZGV4LCBhbmltYXRpb25GcmFjdGlvbik7XG4gICAgc2hvd0l0ZW0oZWxlbWVudC5pdGVtc1tuZXh0VXBJbmRleF0sIHRydWUpO1xuICB9XG5cbiAgZWxlbWVudFtsYXN0QW5pbWF0aW9uU3ltYm9sXS5vbmZpbmlzaCA9IG51bGw7XG4gIGVsZW1lbnRbcGxheWluZ0FuaW1hdGlvblN5bWJvbF0gPSBmYWxzZTtcbn1cblxuLypcbiAqIFBhdXNlIHRoZSBpbmRpY2F0ZWQgYW5pbWF0aW9uIGFuZCBoYXZlIGl0IHNob3cgdGhlIGFuaW1hdGlvbiBhdCB0aGUgZ2l2ZW5cbiAqIGZyYWN0aW9uIChiZXR3ZWVuIDAgYW5kIDEpIG9mIHRoZSB3YXkgdGhyb3VnaCB0aGUgYW5pbWF0aW9uLlxuICovXG5mdW5jdGlvbiBzZXRBbmltYXRpb25GcmFjdGlvbihlbGVtZW50LCBpdGVtSW5kZXgsIGZyYWN0aW9uKSB7XG4gIGxldCBhbmltYXRpb24gPSBnZXRBbmltYXRpb25Gb3JJdGVtSW5kZXgoZWxlbWVudCwgaXRlbUluZGV4KTtcbiAgaWYgKGFuaW1hdGlvbikge1xuICAgIGxldCBkdXJhdGlvbiA9IGVsZW1lbnQuc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb247XG4gICAgaWYgKGR1cmF0aW9uKSB7XG4gICAgICBhbmltYXRpb24uY3VycmVudFRpbWUgPSBmcmFjdGlvbiAqIGR1cmF0aW9uO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzaG93SXRlbShpdGVtLCBmbGFnKSB7XG4gIGl0ZW0uc3R5bGUudmlzaWJpbGl0eSA9IGZsYWcgPyAndmlzaWJsZScgOiAnaGlkZGVuJztcbn1cblxuLypcbiAqIEZpZ3VyZSBvdXQgaG93IG1hbnkgc3RlcHMgaXQgd2lsbCB0YWtlIHRvIGdvIGZyb20gZnJvbVNlbGVjdGlvbiB0b1xuICogdG9TZWxlY3Rpb24uIFRvIGdvIGZyb20gaXRlbSAzIHRvIGl0ZW0gNCBpcyBvbmUgc3RlcC5cbiAqXG4gKiBJZiB3cmFwcGluZyBpcyBhbGxvd2VkLCB0aGVuIGdvaW5nIGZyb20gdGhlIGxhc3QgaXRlbSB0byB0aGUgZmlyc3Qgd2lsbCB0YWtlXG4gKiBvbmUgc3RlcCAoZm9yd2FyZCksIGFuZCBnb2luZyBmcm9tIHRoZSBmaXJzdCBpdGVtIHRvIHRoZSBsYXN0IHdpbGwgdGFrZSBvbmVcbiAqIHN0ZXAgKGJhY2t3YXJkKS5cbiAqL1xuZnVuY3Rpb24gc3RlcHNUb0luZGV4KGxlbmd0aCwgYWxsb3dXcmFwLCBmcm9tU2VsZWN0aW9uLCB0b1NlbGVjdGlvbikge1xuICBsZXQgc3RlcHMgPSB0b1NlbGVjdGlvbiAtIGZyb21TZWxlY3Rpb247XG4gIC8vIFdyYXBwaW5nIG9ubHkga2lja3MgaW4gd2hlbiBsaXN0IGhhcyBtb3JlIHRoYW4gMSBpdGVtLlxuICBpZiAoYWxsb3dXcmFwICYmIGxlbmd0aCA+IDEpIHtcbiAgICBsZXQgd3JhcFN0ZXBzID0gbGVuZ3RoIC0gTWF0aC5hYnMoc3RlcHMpO1xuICAgIGlmICh3cmFwU3RlcHMgPD0gMSkge1xuICAgICAgLy8gU3BlY2lhbCBjYXNlXG4gICAgICBzdGVwcyA9IHN0ZXBzIDwgMCA/XG4gICAgICAgIHdyYXBTdGVwcyA6ICAgLy8gV3JhcCBmb3J3YXJkIGZyb20gbGFzdCBpdGVtIHRvIGZpcnN0LlxuICAgICAgICAtd3JhcFN0ZXBzOyAgIC8vIFdyYXAgYmFja3dhcmQgZnJvbSBmaXJzdCBpdGVtIHRvIGxhc3QuXG4gICAgfVxuICB9XG4gIHJldHVybiBzdGVwcztcbn1cbiIsIi8vIFVzZWQgdG8gYXNzaWduIHVuaXF1ZSBJRHMgdG8gaXRlbSBlbGVtZW50cyB3aXRob3V0IElEcy5cbmxldCBpZENvdW50ID0gMDtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFNlbGVjdGlvbkFyaWFBY3RpdmUuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCB0cmVhdHMgdGhlIHNlbGVjdGVkIGl0ZW0gaW4gYSBsaXN0IGFzIHRoZSBhY3RpdmUgaXRlbSBpbiBBUklBXG4gICAqIGFjY2Vzc2liaWxpdHkgdGVybXMuXG4gICAqXG4gICAqIEhhbmRsaW5nIEFSSUEgc2VsZWN0aW9uIHN0YXRlIHByb3Blcmx5IGlzIGFjdHVhbGx5IHF1aXRlIGNvbXBsZXg6XG4gICAqXG4gICAqICogVGhlIGl0ZW1zIGluIHRoZSBsaXN0IG5lZWQgdG8gYmUgaW5kaWNhdGVkIGFzIHBvc3NpYmxlIGl0ZW1zIHZpYSBhbiBBUklBXG4gICAqICAgYHJvbGVgIGF0dHJpYnV0ZSB2YWx1ZSBzdWNoIGFzIFwib3B0aW9uXCIuXG4gICAqICogVGhlIHNlbGVjdGVkIGl0ZW0gbmVlZCB0byBiZSBtYXJrZWQgYXMgc2VsZWN0ZWQgYnkgc2V0dGluZyB0aGUgaXRlbSdzXG4gICAqICAgYGFyaWEtc2VsZWN0ZWRgIGF0dHJpYnV0ZSB0byB0cnVlICphbmQqIHRoZSBvdGhlciBpdGVtcyBuZWVkIGJlIG1hcmtlZCBhc1xuICAgKiAgICpub3QqIHNlbGVjdGVkIGJ5IHNldHRpbmcgYGFyaWEtc2VsZWN0ZWRgIHRvIGZhbHNlLlxuICAgKiAqIFRoZSBvdXRlcm1vc3QgZWxlbWVudCB3aXRoIHRoZSBrZXlib2FyZCBmb2N1cyBuZWVkcyB0byBoYXZlIGF0dHJpYnV0ZXNcbiAgICogICBzZXQgb24gaXQgc28gdGhhdCB0aGUgc2VsZWN0aW9uIGlzIGtub3dhYmxlIGF0IHRoZSBsaXN0IGxldmVsIHZpYSB0aGVcbiAgICogICBgYXJpYS1hY3RpdmVkZXNjZW5kYW50YCBhdHRyaWJ1dGUuXG4gICAqICogVXNlIG9mIGBhcmlhLWFjdGl2ZWRlc2NlbmRhbnRgIGluIHR1cm4gcmVxdWlyZXMgdGhhdCBhbGwgaXRlbXMgaW4gdGhlXG4gICAqICAgbGlzdCBoYXZlIElEIGF0dHJpYnV0ZXMgYXNzaWduZWQgdG8gdGhlbS5cbiAgICpcbiAgICogVGhpcyBtaXhpbiB0cmllcyB0byBhZGRyZXNzIGFsbCBvZiB0aGUgYWJvdmUgcmVxdWlyZW1lbnRzLiBUbyB0aGF0IGVuZCxcbiAgICogdGhpcyBtaXhpbiB3aWxsIGFzc2lnbiBnZW5lcmF0ZWQgSURzIHRvIGFueSBpdGVtIHRoYXQgZG9lc24ndCBhbHJlYWR5IGhhdmVcbiAgICogYW4gSUQuXG4gICAqXG4gICAqIEFSSUEgcmVsaWVzIG9uIGVsZW1lbnRzIHRvIHByb3ZpZGUgYHJvbGVgIGF0dHJpYnV0ZXMuIFRoaXMgbWl4aW4gd2lsbCBhcHBseVxuICAgKiBhIGRlZmF1bHQgcm9sZSBvZiBcImxpc3Rib3hcIiBvbiB0aGUgb3V0ZXIgbGlzdCBpZiBpdCBkb2Vzbid0IGFscmVhZHkgaGF2ZSBhblxuICAgKiBleHBsaWNpdCByb2xlLiBTaW1pbGFybHksIHRoaXMgbWl4aW4gd2lsbCBhcHBseSBhIGRlZmF1bHQgcm9sZSBvZiBcIm9wdGlvblwiXG4gICAqIHRvIGFueSBsaXN0IGl0ZW0gdGhhdCBkb2VzIG5vdCBhbHJlYWR5IGhhdmUgYSByb2xlIHNwZWNpZmllZC5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIGEgc2V0IG9mIG1lbWJlcnMgdGhhdCBtYW5hZ2UgdGhlIHN0YXRlIG9mIHRoZSBzZWxlY3Rpb246XG4gICAqIGBhcHBseVNlbGVjdGlvbmAsIGBpdGVtQWRkZWRgLCBhbmQgYHNlbGVjdGVkSW5kZXhgLiBZb3UgY2FuIHN1cHBseSB0aGVzZVxuICAgKiB5b3Vyc2VsZiwgb3IgZG8gc28gdmlhIHRoZSBbU2luZ2xlU2VsZWN0aW9uXShTaW5nbGVTZWxlY3Rpb24ubWQpIG1peGluLlxuICAgKi9cbiAgY2xhc3MgU2VsZWN0aW9uQXJpYUFjdGl2ZSBleHRlbmRzIGJhc2Uge1xuXG4gICAgYXBwbHlTZWxlY3Rpb24oaXRlbSwgc2VsZWN0ZWQpIHtcbiAgICAgIGlmIChzdXBlci5hcHBseVNlbGVjdGlvbikgeyBzdXBlci5hcHBseVNlbGVjdGlvbihpdGVtLCBzZWxlY3RlZCk7IH1cbiAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgc2VsZWN0ZWQpO1xuICAgICAgbGV0IGl0ZW1JZCA9IGl0ZW0uaWQ7XG4gICAgICBpZiAoaXRlbUlkKSB7XG4gICAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICAgIG91dGVybW9zdEVsZW1lbnQodGhpcykuc2V0QXR0cmlidXRlKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnLCBpdGVtSWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29sbGVjdGl2ZUNoYW5nZWQoKSB7XG4gICAgICBpZiAoc3VwZXIuY29sbGVjdGl2ZUNoYW5nZWQpIHsgc3VwZXIuY29sbGVjdGl2ZUNoYW5nZWQoKTsgfVxuICAgICAgc2V0QXJpYUF0dHJpYnV0ZXModGhpcyk7XG4gICAgfVxuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2spIHsgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTsgfVxuICAgICAgc2V0QXJpYUF0dHJpYnV0ZXModGhpcyk7XG4gICAgfVxuXG4gICAgaXRlbUFkZGVkKGl0ZW0pIHtcbiAgICAgIGlmIChzdXBlci5pdGVtQWRkZWQpIHsgc3VwZXIuaXRlbUFkZGVkKGl0ZW0pOyB9XG5cbiAgICAgIGlmICghaXRlbS5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSkge1xuICAgICAgICAvLyBBc3NpZ24gYSBkZWZhdWx0IEFSSUEgcm9sZS5cbiAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnb3B0aW9uJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIEVuc3VyZSBlYWNoIGl0ZW0gaGFzIGFuIElEIHNvIHdlIGNhbiBzZXQgYXJpYS1hY3RpdmVkZXNjZW5kYW50IG9uIHRoZVxuICAgICAgLy8gb3ZlcmFsbCBsaXN0IHdoZW5ldmVyIHRoZSBzZWxlY3Rpb24gY2hhbmdlcy5cbiAgICAgIC8vXG4gICAgICAvLyBUaGUgSUQgd2lsbCB0YWtlIHRoZSBmb3JtIG9mIGEgYmFzZSBJRCBwbHVzIGEgdW5pcXVlIGludGVnZXIuIFRoZSBiYXNlXG4gICAgICAvLyBJRCB3aWxsIGJlIGluY29ycG9yYXRlIHRoZSBjb21wb25lbnQncyBvd24gSUQuIEUuZy4sIGlmIGEgY29tcG9uZW50IGhhc1xuICAgICAgLy8gSUQgXCJmb29cIiwgdGhlbiBpdHMgaXRlbXMgd2lsbCBoYXZlIElEcyB0aGF0IGxvb2sgbGlrZSBcIl9mb29PcHRpb24xXCIuIElmXG4gICAgICAvLyB0aGUgY29tcG5lbnQgaGFzIG5vIElEIGl0c2VsZiwgaXRzIGl0ZW1zIHdpbGwgZ2V0IElEcyB0aGF0IGxvb2sgbGlrZVxuICAgICAgLy8gXCJfb3B0aW9uMVwiLiBJdGVtIElEcyBhcmUgcHJlZml4ZWQgd2l0aCBhbiB1bmRlcnNjb3JlIHRvIGRpZmZlcmVudGlhdGVcbiAgICAgIC8vIHRoZW0gZnJvbSBtYW51YWxseS1hc3NpZ25lZCBJRHMsIGFuZCB0byBtaW5pbWl6ZSB0aGUgcG90ZW50aWFsIGZvciBJRFxuICAgICAgLy8gY29uZmxpY3RzLlxuICAgICAgaWYgKCFpdGVtLmlkKSB7XG4gICAgICAgIGxldCBiYXNlSWQgPSB0aGlzLmlkID9cbiAgICAgICAgICAgIFwiX1wiICsgdGhpcy5pZCArIFwiT3B0aW9uXCIgOlxuICAgICAgICAgICAgXCJfb3B0aW9uXCI7XG4gICAgICAgIGl0ZW0uaWQgPSBiYXNlSWQgKyBpZENvdW50Kys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdGVkSXRlbSgpIHtcbiAgICAgIHJldHVybiBzdXBlci5zZWxlY3RlZEl0ZW07XG4gICAgfVxuICAgIHNldCBzZWxlY3RlZEl0ZW0oaXRlbSkge1xuICAgICAgaWYgKCdzZWxlY3RlZEl0ZW0nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkSXRlbSA9IGl0ZW07IH1cbiAgICAgIC8vIENhdGNoIHRoZSBjYXNlIHdoZXJlIHRoZSBzZWxlY3Rpb24gaXMgcmVtb3ZlZC5cbiAgICAgIGlmIChpdGVtID09IG51bGwpIHtcbiAgICAgICAgb3V0ZXJtb3N0RWxlbWVudCh0aGlzKS5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIFNlbGVjdGlvbkFyaWFBY3RpdmU7XG59O1xuXG5cbi8vIFJldHVybiB0aGUgZmlyc3QgQVJJQSBhY3RpdmVkZXNjZW5kYW50IGRlZmluZWQgYnkgdGhlIGNvbGxlY3RpdmUuXG5mdW5jdGlvbiBnZXRDb2xsZWN0aXZlQXJpYUFjdGl2ZURlc2NlbmRhbnQoY29sbGVjdGl2ZSkge1xuICBsZXQgZGVzY2VuZGFudHMgPSBjb2xsZWN0aXZlLmVsZW1lbnRzLm1hcChlbGVtZW50ID0+IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnKSk7XG4gIGxldCBub25OdWxsRGVzY2VuZGFudHMgPSBkZXNjZW5kYW50cy5maWx0ZXIoZGVzY2VuZGFudCA9PiBkZXNjZW5kYW50ICE9PSBudWxsKTtcbiAgcmV0dXJuIG5vbk51bGxEZXNjZW5kYW50c1swXTtcbn1cblxuXG4vLyBSZXR1cm4gdGhlIGZpcnN0IEFSSUEgbGFiZWwgZGVmaW5lZCBieSB0aGUgY29sbGVjdGl2ZS5cbmZ1bmN0aW9uIGdldENvbGxlY3RpdmVBcmlhUm9sZShjb2xsZWN0aXZlKSB7XG4gIGxldCByb2xlcyA9IGNvbGxlY3RpdmUuZWxlbWVudHMubWFwKGVsZW1lbnQgPT4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSk7XG4gIGxldCBub25OdWxsUm9sZXMgPSByb2xlcy5maWx0ZXIocm9sZSA9PiByb2xlICE9PSBudWxsKTtcbiAgcmV0dXJuIG5vbk51bGxSb2xlc1swXTtcbn1cblxuZnVuY3Rpb24gb3V0ZXJtb3N0RWxlbWVudChlbGVtZW50KSB7XG4gIHJldHVybiBlbGVtZW50LmNvbGxlY3RpdmUgP1xuICAgIGVsZW1lbnQuY29sbGVjdGl2ZS5vdXRlcm1vc3RFbGVtZW50IDpcbiAgICBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBzZXRBcmlhQXR0cmlidXRlcyhlbGVtZW50KSB7XG5cbiAgaWYgKCFlbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICByZXR1cm47IC8vIE5vdCBpbiBkb2N1bWVudCB5ZXRcbiAgfVxuICBpZiAoZWxlbWVudC5jb2xsZWN0aXZlICYmIGVsZW1lbnQgIT09IGVsZW1lbnQuY29sbGVjdGl2ZS5vdXRlcm1vc3RFbGVtZW50KSB7XG4gICAgLy8gTm90IHRoZSBvdXRlcm1vc3QgZWxlbWVudCwgZG8gbm90aGluZyBhbmQgbGV0IHRoZSBvdXRlcm1vc3QgZWxlbWVudFxuICAgIC8vIGhhbmRsZSB0aGluZ3MuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRW5zdXJlIHRoZSBlbGVtZW50IGhhcyBhbiBBUklBIHJvbGUuXG4gIGlmICghZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSkge1xuICAgIC8vIFRyeSB0byBwcm9tb3RlIGFuIEFSSUEgcm9sZSBmcm9tIGFuIGlubmVyIGVsZW1lbnQuIElmIG5vbmUgaXMgZm91bmQsXG4gICAgLy8gdXNlIGEgZGVmYXVsdCByb2xlLlxuICAgIGxldCByb2xlID0gZWxlbWVudC5jb2xsZWN0aXZlICYmIGdldENvbGxlY3RpdmVBcmlhUm9sZShlbGVtZW50LmNvbGxlY3RpdmUpO1xuICAgIHJvbGUgPSByb2xlIHx8ICdsaXN0Ym94JztcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgncm9sZScsIHJvbGUpO1xuICB9XG5cbiAgaWYgKCFlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1hY3RpdmVkZXNjZW5kYW50JykgJiYgZWxlbWVudC5jb2xsZWN0aXZlKSB7XG4gICAgLy8gVHJ5IHRvIHByb21vdGUgYW4gQVJJQSBhY3RpdmVkZXNjZW5kYW50IHZhbHVlIGZyb20gYW4gaW5uZXIgZWxlbWVudC5cbiAgICBsZXQgZGVzY2VuZGFudCA9IGdldENvbGxlY3RpdmVBcmlhQWN0aXZlRGVzY2VuZGFudChlbGVtZW50LmNvbGxlY3RpdmUpO1xuICAgIGlmIChkZXNjZW5kYW50KSB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1hY3RpdmVkZXNjZW5kYW50JywgZGVzY2VuZGFudCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVsZW1lbnQuY29sbGVjdGl2ZSkge1xuICAgIC8vIFJlbW92ZSB0aGUgQVJJQSByb2xlIGFuZCBhY3RpdmVkZXNjZW5kYW50IHZhbHVlcyBmcm9tIHRoZSBjb2xsZWN0aXZlJ3NcbiAgICAvLyBpbm5lciBlbGVtZW50cy5cbiAgICBlbGVtZW50LmNvbGxlY3RpdmUuZWxlbWVudHMuZm9yRWFjaChtZW1iZXIgPT4ge1xuICAgICAgaWYgKG1lbWJlciAhPT0gZWxlbWVudCkge1xuICAgICAgICBtZW1iZXIucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnKTtcbiAgICAgICAgbWVtYmVyLnNldEF0dHJpYnV0ZSgncm9sZScsICdub25lJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxufVxuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBTZWxlY3Rpb25IaWdobGlnaHQuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBhcHBsaWVzIHN0YW5kYXJkIGhpZ2hsaWdodCBjb2xvcnMgdG8gYSBzZWxlY3RlZCBpdGVtLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGhpZ2hsaWdodHMgdGV4dHVhbCBpdGVtcyAoZS5nLiwgaW4gYSBsaXN0KSBpbiBhIHN0YW5kYXJkIHdheSBieVxuICAgKiB1c2luZyB0aGUgQ1NTIGBoaWdobGlnaHRgIGFuZCBgaGlnaGxpZ2h0dGV4dGAgY29sb3IgdmFsdWVzLiBUaGVzZSB2YWx1ZXNcbiAgICogcmVzcGVjdCBvcGVyYXRpbmcgc3lzdGVtIGRlZmF1bHRzIGFuZCB1c2VyIHByZWZlcmVuY2VzLCBhbmQgaGVuY2UgYXJlIGdvb2RcbiAgICogZGVmYXVsdCB2YWx1ZXMgZm9yIGhpZ2hsaWdodCBjb2xvcnMuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyBhIGBzZWxlY3RlZGAgY2xhc3MgdG8gYmUgYXBwbGllZCB0byBzZWxlY3RlZCBpdGVtcy4gWW91XG4gICAqIGNhbiB1c2UgdGhlIFtDb250ZW50QXNJdGVtc10oQ29udGVudEFzSXRlbXMubWQpIG1peGluIGZvciB0aGF0IHB1cnBvc2UuXG4gICAqL1xuICBjbGFzcyBTZWxlY3Rpb25IaWdobGlnaHQgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIGlmICh0aGlzLnNoYWRvd1Jvb3QpIHtcbiAgICAgICAgbGV0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgc3R5bGUuaW5uZXJIVE1MID0gYFxuICAgICAgICAgIDo6c2xvdHRlZCguc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhpZ2hsaWdodDtcbiAgICAgICAgICAgIGNvbG9yOiBoaWdobGlnaHR0ZXh0O1xuICAgICAgICAgIH1cbiAgICAgICAgYDtcbiAgICAgICAgdGhpcy5zaGFkb3dSb290LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBTZWxlY3Rpb25IaWdobGlnaHQ7XG59O1xuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBTZWxlY3Rpb25JblZpZXcuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBzY3JvbGxzIGEgY29udGFpbmVyIHRvIGVuc3VyZSB0aGF0IGEgbmV3bHktc2VsZWN0ZWQgaXRlbSBpc1xuICAgKiB2aXNpYmxlIHRvIHRoZSB1c2VyLlxuICAgKlxuICAgKiBXaGVuIHRoZSBzZWxlY3RlZCBpdGVtIGluIGEgbGlzdC1saWtlIGNvbXBvbmVudCBjaGFuZ2VzLCBpdCdzIGVhc2llciBmb3JcbiAgICogdGhlIHRvIGNvbmZpcm0gdGhhdCB0aGUgc2VsZWN0aW9uIGhhcyBjaGFuZ2VkIHRvIGFuIGFwcHJvcHJpYXRlIGl0ZW0gaWYgdGhlXG4gICAqIHVzZXIgY2FuIGFjdHVhbGx5IHNlZSB0aGF0IGl0ZW0uXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyBhIGBzZWxlY3RlZEl0ZW1gIHByb3BlcnR5IHRvIGJlIHNldCB3aGVuIHRoZSBzZWxlY3Rpb25cbiAgICogY2hhbmdlcy4gWW91IGNhbiBzdXBwbHkgdGhhdCB5b3Vyc2VsZiwgb3IgdXNlIHRoZVxuICAgKiBbU2luZ2xlU2VsZWN0aW9uXShTaW5nbGVTZWxlY3Rpb24ubWQpIG1peGluLlxuICAgKi9cbiAgY2xhc3MgU2VsZWN0aW9uSW5WaWV3IGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jb25uZWN0ZWRDYWxsYmFjaykgeyBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpOyB9XG4gICAgICBsZXQgc2VsZWN0ZWRJdGVtID0gdGhpcy5zZWxlY3RlZEl0ZW07XG4gICAgICBpZiAoc2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsSXRlbUludG9WaWV3KHNlbGVjdGVkSXRlbSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdGVkSXRlbSgpIHtcbiAgICAgIHJldHVybiBzdXBlci5zZWxlY3RlZEl0ZW07XG4gICAgfVxuICAgIHNldCBzZWxlY3RlZEl0ZW0oaXRlbSkge1xuICAgICAgaWYgKCdzZWxlY3RlZEl0ZW0nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkSXRlbSA9IGl0ZW07IH1cbiAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgIC8vIEtlZXAgdGhlIHNlbGVjdGVkIGl0ZW0gaW4gdmlldy5cbiAgICAgICAgdGhpcy5zY3JvbGxJdGVtSW50b1ZpZXcoaXRlbSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2Nyb2xsIHRoZSBnaXZlbiBlbGVtZW50IGNvbXBsZXRlbHkgaW50byB2aWV3LCBtaW5pbWl6aW5nIHRoZSBkZWdyZWUgb2ZcbiAgICAgKiBzY3JvbGxpbmcgcGVyZm9ybWVkLlxuICAgICAqXG4gICAgICogQmxpbmsgaGFzIGEgYHNjcm9sbEludG9WaWV3SWZOZWVkZWQoKWAgZnVuY3Rpb24gdGhhdCBkb2VzIHNvbWV0aGluZ1xuICAgICAqIHNpbWlsYXIsIGJ1dCB1bmZvcnR1bmF0ZWx5IGl0J3Mgbm9uLXN0YW5kYXJkLCBhbmQgaW4gYW55IGV2ZW50IG9mdGVuIGVuZHNcbiAgICAgKiB1cCBzY3JvbGxpbmcgbW9yZSB0aGFuIGlzIGFic29sdXRlbHkgbmVjZXNzYXJ5LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaXRlbSAtIHRoZSBpdGVtIHRvIHNjcm9sbCBpbnRvIHZpZXcuXG4gICAgICovXG4gICAgc2Nyb2xsSXRlbUludG9WaWV3KGl0ZW0pIHtcbiAgICAgIGlmIChzdXBlci5zY3JvbGxJdGVtSW50b1ZpZXcpIHsgc3VwZXIuc2Nyb2xsSXRlbUludG9WaWV3KCk7IH1cbiAgICAgIC8vIEdldCB0aGUgcmVsYXRpdmUgcG9zaXRpb24gb2YgdGhlIGl0ZW0gd2l0aCByZXNwZWN0IHRvIHRoZSB0b3Agb2YgdGhlXG4gICAgICAvLyBsaXN0J3Mgc2Nyb2xsYWJsZSBjYW52YXMuIEFuIGl0ZW0gYXQgdGhlIHRvcCBvZiB0aGUgbGlzdCB3aWxsIGhhdmUgYVxuICAgICAgLy8gZWxlbWVudFRvcCBvZiAwLlxuXG4gICAgICBsZXQgc2Nyb2xsVGFyZ2V0ID0gdGhpcy5zY3JvbGxUYXJnZXQ7XG4gICAgICBsZXQgZWxlbWVudFRvcCA9IGl0ZW0ub2Zmc2V0VG9wIC0gc2Nyb2xsVGFyZ2V0Lm9mZnNldFRvcCAtIHNjcm9sbFRhcmdldC5jbGllbnRUb3A7XG4gICAgICBsZXQgZWxlbWVudEJvdHRvbSA9IGVsZW1lbnRUb3AgKyBpdGVtLm9mZnNldEhlaWdodDtcbiAgICAgIC8vIERldGVybWluZSB0aGUgYm90dG9tIG9mIHRoZSBzY3JvbGxhYmxlIGNhbnZhcy5cbiAgICAgIGxldCBzY3JvbGxCb3R0b20gPSBzY3JvbGxUYXJnZXQuc2Nyb2xsVG9wICsgc2Nyb2xsVGFyZ2V0LmNsaWVudEhlaWdodDtcbiAgICAgIGlmIChlbGVtZW50Qm90dG9tID4gc2Nyb2xsQm90dG9tKSB7XG4gICAgICAgIC8vIFNjcm9sbCB1cCB1bnRpbCBpdGVtIGlzIGVudGlyZWx5IHZpc2libGUuXG4gICAgICAgIHNjcm9sbFRhcmdldC5zY3JvbGxUb3AgKz0gZWxlbWVudEJvdHRvbSAtIHNjcm9sbEJvdHRvbTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGVsZW1lbnRUb3AgPCBzY3JvbGxUYXJnZXQuc2Nyb2xsVG9wKSB7XG4gICAgICAgIC8vIFNjcm9sbCBkb3duIHVudGlsIGl0ZW0gaXMgZW50aXJlbHkgdmlzaWJsZS5cbiAgICAgICAgc2Nyb2xsVGFyZ2V0LnNjcm9sbFRvcCA9IGVsZW1lbnRUb3A7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGVsZW1lbnQgdGhhdCBzaG91bGQgYmUgc2Nyb2xsZWQgdG8gYnJpbmcgYW4gaXRlbSBpbnRvIHZpZXcuXG4gICAgICpcbiAgICAgKiBUaGUgZGVmYXVsdCB2YWx1ZSBvZiB0aGlzIHByb3BlcnR5IGlzIHRoZSBlbGVtZW50IGl0c2VsZi5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICBnZXQgc2Nyb2xsVGFyZ2V0KCkge1xuICAgICAgLy8gUHJlZmVyIGJhc2UgcmVzdWx0LlxuICAgICAgcmV0dXJuICdzY3JvbGxUYXJnZXQnIGluIGJhc2UucHJvdG90eXBlID8gc3VwZXIuc2Nyb2xsVGFyZ2V0IDogdGhpcztcbiAgICB9XG4gICAgc2V0IHNjcm9sbFRhcmdldChlbGVtZW50KSB7XG4gICAgICBpZiAoJ3Njcm9sbFRhcmdldCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2Nyb2xsVGFyZ2V0ID0gZWxlbWVudDsgfVxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIFNlbGVjdGlvbkluVmlldztcbn07XG4iLCIvKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFNoYWRvd0VsZW1lbnRSZWZlcmVuY2VzLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gdG8gY3JlYXRlIHJlZmVyZW5jZXMgdG8gZWxlbWVudHMgaW4gYSBjb21wb25lbnQncyBTaGFkb3cgRE9NIHN1YnRyZWUuXG4gICAqXG4gICAqIFRoaXMgYWRkcyBhIG1lbWJlciBvbiB0aGUgY29tcG9uZW50IGNhbGxlZCBgdGhpcy4kYCB0aGF0IGNhbiBiZSB1c2VkIHRvXG4gICAqIHJlZmVyZW5jZSBzaGFkb3cgZWxlbWVudHMgd2l0aCBJRHMuIEUuZy4sIGlmIGNvbXBvbmVudCdzIHNoYWRvdyBjb250YWlucyBhblxuICAgKiBlbGVtZW50IGA8YnV0dG9uIGlkPVwiZm9vXCI+YCwgdGhlbiB0aGlzIG1peGluIHdpbGwgY3JlYXRlIGEgbWVtYmVyXG4gICAqIGB0aGlzLiQuZm9vYCB0aGF0IHBvaW50cyB0byB0aGF0IGJ1dHRvbi5cbiAgICpcbiAgICogU3VjaCByZWZlcmVuY2VzIHNpbXBsaWZ5IGEgY29tcG9uZW50J3MgYWNjZXNzIHRvIGl0cyBvd24gZWxlbWVudHMuIEluXG4gICAqIGV4Y2hhbmdlLCB0aGlzIG1peGluIHRyYWRlcyBvZmYgYSBvbmUtdGltZSBjb3N0IG9mIHF1ZXJ5aW5nIGFsbCBlbGVtZW50cyBpblxuICAgKiB0aGUgc2hhZG93IHRyZWUgaW5zdGVhZCBvZiBwYXlpbmcgYW4gb25nb2luZyBjb3N0IHRvIHF1ZXJ5IGZvciBhbiBlbGVtZW50XG4gICAqIGVhY2ggdGltZSB0aGUgY29tcG9uZW50IHdhbnRzIHRvIGluc3BlY3Qgb3IgbWFuaXB1bGF0ZSBpdC5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIHRoZSBjb21wb25lbnQgdG8gZGVmaW5lIGEgU2hhZG93IERPTSBzdWJ0cmVlLiBZb3UgY2FuXG4gICAqIGNyZWF0ZSB0aGF0IHRyZWUgeW91cnNlbGYsIG9yIG1ha2UgdXNlIG9mIHRoZVxuICAgKiBbU2hhZG93VGVtcGxhdGVdKFNoYWRvd1RlbXBsYXRlLm1kKSBtaXhpbi5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBpcyBpbnNwaXJlZCBieSBQb2x5bWVyJ3MgW2F1dG9tYXRpY1xuICAgKiBub2RlIGZpbmRpbmddKGh0dHBzOi8vd3d3LnBvbHltZXItcHJvamVjdC5vcmcvMS4wL2RvY3MvZGV2Z3VpZGUvbG9jYWwtZG9tLmh0bWwjbm9kZS1maW5kaW5nKVxuICAgKiBmZWF0dXJlLlxuICAgKi9cbiAgY2xhc3MgU2hhZG93RWxlbWVudFJlZmVyZW5jZXMgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIGlmICh0aGlzLnNoYWRvd1Jvb3QpIHtcbiAgICAgICAgLy8gTG9vayBmb3IgZWxlbWVudHMgaW4gdGhlIHNoYWRvdyBzdWJ0cmVlIHRoYXQgaGF2ZSBpZCBhdHRyaWJ1dGVzLlxuICAgICAgICAvLyBBbiBhbHRlcm5hdGl2ZWx5IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWl4aW4gd291bGQgYmUgdG8ganVzdCBkZWZpbmVcbiAgICAgICAgLy8gYSB0aGlzLiQgZ2V0dGVyIHRoYXQgbGF6aWx5IGRvZXMgdGhpcyBzZWFyY2ggdGhlIGZpcnN0IHRpbWUgc29tZW9uZVxuICAgICAgICAvLyB0cmllcyB0byBhY2Nlc3MgdGhpcy4kLiBUaGF0IG1pZ2h0IGludHJvZHVjZSBzb21lIGNvbXBsZXhpdHkg4oCTIGlmIHRoZVxuICAgICAgICAvLyB0aGUgdHJlZSBjaGFuZ2VkIGFmdGVyIGl0IHdhcyBmaXJzdCBwb3B1bGF0ZWQsIHRoZSByZXN1bHQgb2ZcbiAgICAgICAgLy8gc2VhcmNoaW5nIGZvciBhIG5vZGUgbWlnaHQgYmUgc29tZXdoYXQgdW5wcmVkaWN0YWJsZS5cbiAgICAgICAgdGhpcy4kID0ge307XG4gICAgICAgIGxldCBub2Rlc1dpdGhJZHMgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvckFsbCgnW2lkXScpO1xuICAgICAgICBbXS5mb3JFYWNoLmNhbGwobm9kZXNXaXRoSWRzLCBub2RlID0+IHtcbiAgICAgICAgICBsZXQgaWQgPSBub2RlLmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgICB0aGlzLiRbaWRdID0gbm9kZTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbGxlY3Rpb24gb2YgcmVmZXJlbmNlcyB0byB0aGUgZWxlbWVudHMgd2l0aCBJRHMgaW4gYSBjb21wb25lbnQnc1xuICAgICAqIFNoYWRvdyBET00gc3VidHJlZS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICogQG1lbWJlciAkXG4gICAgICovXG4gIH1cblxuICByZXR1cm4gU2hhZG93RWxlbWVudFJlZmVyZW5jZXM7XG59O1xuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBTaGFkb3dUZW1wbGF0ZS4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIGZvciBzdGFtcGluZyBhIHRlbXBsYXRlIGludG8gYSBTaGFkb3cgRE9NIHN1YnRyZWUgdXBvbiBjb21wb25lbnRcbiAgICogaW5zdGFudGlhdGlvbi5cbiAgICpcbiAgICogVG8gdXNlIHRoaXMgbWl4aW4sIGRlZmluZSBhIGB0ZW1wbGF0ZWAgcHJvcGVydHkgYXMgYSBzdHJpbmcgb3IgSFRNTFxuICAgKiBgPHRlbXBsYXRlPmAgZWxlbWVudDpcbiAgICpcbiAgICogICAgIGNsYXNzIE15RWxlbWVudCBleHRlbmRzIFNoYWRvd1RlbXBsYXRlKEhUTUxFbGVtZW50KSB7XG4gICAqICAgICAgIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICogICAgICAgICByZXR1cm4gYEhlbGxvLCA8ZW0+d29ybGQ8L2VtPi5gO1xuICAgKiAgICAgICB9XG4gICAqICAgICB9XG4gICAqXG4gICAqIFdoZW4geW91ciBjb21wb25lbnQgY2xhc3MgaXMgaW5zdGFudGlhdGVkLCBhIHNoYWRvdyByb290IHdpbGwgYmUgY3JlYXRlZCBvblxuICAgKiB0aGUgaW5zdGFuY2UsIGFuZCB0aGUgY29udGVudHMgb2YgdGhlIHRlbXBsYXRlIHdpbGwgYmUgY2xvbmVkIGludG8gdGhlXG4gICAqIHNoYWRvdyByb290LiBJZiB5b3VyIGNvbXBvbmVudCBkb2VzIG5vdCBkZWZpbmUgYSBgdGVtcGxhdGVgIHByb3BlcnR5LCB0aGlzXG4gICAqIG1peGluIGhhcyBubyBlZmZlY3QuXG4gICAqXG4gICAqIEZvciB0aGUgdGltZSBiZWluZywgdGhpcyBleHRlbnNpb24gcmV0YWlucyBzdXBwb3J0IGZvciBTaGFkb3cgRE9NIHYwLiBUaGF0XG4gICAqIHdpbGwgZXZlbnR1YWxseSBiZSBkZXByZWNhdGVkIGFzIGJyb3dzZXJzIChhbmQgdGhlIFNoYWRvdyBET00gcG9seWZpbGwpXG4gICAqIGltcGxlbWVudCBTaGFkb3cgRE9NIHYxLlxuICAgKi9cbiAgY2xhc3MgU2hhZG93VGVtcGxhdGUgZXh0ZW5kcyBiYXNlIHtcblxuICAgIC8qXG4gICAgICogSWYgdGhlIGNvbXBvbmVudCBkZWZpbmVzIGEgdGVtcGxhdGUsIGEgc2hhZG93IHJvb3Qgd2lsbCBiZSBjcmVhdGVkIG9uIHRoZVxuICAgICAqIGNvbXBvbmVudCBpbnN0YW5jZSwgYW5kIHRoZSB0ZW1wbGF0ZSBzdGFtcGVkIGludG8gaXQuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgbGV0IHRlbXBsYXRlID0gdGhpcy50ZW1wbGF0ZTtcbiAgICAgIC8vIFRPRE86IFNhdmUgdGhlIHByb2Nlc3NlZCB0ZW1wbGF0ZSB3aXRoIHRoZSBjb21wb25lbnQncyBjbGFzcyBwcm90b3R5cGVcbiAgICAgIC8vIHNvIGl0IGRvZXNuJ3QgbmVlZCB0byBiZSBwcm9jZXNzZWQgd2l0aCBldmVyeSBpbnN0YW50aWF0aW9uLlxuICAgICAgaWYgKHRlbXBsYXRlKSB7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0ZW1wbGF0ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAvLyBVcGdyYWRlIHBsYWluIHN0cmluZyB0byByZWFsIHRlbXBsYXRlLlxuICAgICAgICAgIHRlbXBsYXRlID0gY3JlYXRlVGVtcGxhdGVXaXRoSW5uZXJIVE1MKHRlbXBsYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh3aW5kb3cuU2hhZG93RE9NUG9seWZpbGwpIHtcbiAgICAgICAgICBzaGltVGVtcGxhdGVTdHlsZXModGVtcGxhdGUsIHRoaXMubG9jYWxOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByb290ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gICAgICAgIGxldCBjbG9uZSA9IGRvY3VtZW50LmltcG9ydE5vZGUodGVtcGxhdGUuY29udGVudCwgdHJ1ZSk7XG4gICAgICAgIHJvb3QuYXBwZW5kQ2hpbGQoY2xvbmUpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIFNoYWRvd1RlbXBsYXRlO1xufTtcblxuXG4vLyBDb252ZXJ0IGEgcGxhaW4gc3RyaW5nIG9mIEhUTUwgaW50byBhIHJlYWwgdGVtcGxhdGUgZWxlbWVudC5cbmZ1bmN0aW9uIGNyZWF0ZVRlbXBsYXRlV2l0aElubmVySFRNTChpbm5lckhUTUwpIHtcbiAgbGV0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgLy8gUkVWSUVXOiBJcyB0aGVyZSBhbiBlYXNpZXIgd2F5IHRvIGRvIHRoaXM/XG4gIC8vIFdlJ2QgbGlrZSB0byBqdXN0IHNldCBpbm5lckhUTUwgb24gdGhlIHRlbXBsYXRlIGNvbnRlbnQsIGJ1dCBzaW5jZSBpdCdzXG4gIC8vIGEgRG9jdW1lbnRGcmFnbWVudCwgdGhhdCBkb2Vzbid0IHdvcmsuXG4gIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LmlubmVySFRNTCA9IGlubmVySFRNTDtcbiAgd2hpbGUgKGRpdi5jaGlsZE5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICB0ZW1wbGF0ZS5jb250ZW50LmFwcGVuZENoaWxkKGRpdi5jaGlsZE5vZGVzWzBdKTtcbiAgfVxuICByZXR1cm4gdGVtcGxhdGU7XG59XG5cbi8vIEludm9rZSBiYXNpYyBzdHlsZSBzaGltbWluZyB3aXRoIFNoYWRvd0NTUy5cbmZ1bmN0aW9uIHNoaW1UZW1wbGF0ZVN0eWxlcyh0ZW1wbGF0ZSwgdGFnKSB7XG4gIHdpbmRvdy5XZWJDb21wb25lbnRzLlNoYWRvd0NTUy5zaGltU3R5bGluZyh0ZW1wbGF0ZS5jb250ZW50LCB0YWcpO1xufVxuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuL2NyZWF0ZVN5bWJvbCc7XG5pbXBvcnQgbWljcm90YXNrIGZyb20gJy4vbWljcm90YXNrJztcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3QgY2FuU2VsZWN0TmV4dFN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnY2FuU2VsZWN0TmV4dCcpO1xuY29uc3QgY2FuU2VsZWN0UHJldmlvdXNTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2NhblNlbGVjdFByZXZpb3VzJyk7XG5jb25zdCBzZWxlY3RlZEl0ZW1TeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3NlbGVjdGVkSXRlbScpO1xuY29uc3Qgc2VsZWN0aW9uUmVxdWlyZWRTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3NlbGVjdGlvblJlcXVpcmVkJyk7XG5jb25zdCBzZWxlY3Rpb25XcmFwc1N5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnc2VsZWN0aW9uV3JhcHMnKTtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFNpbmdsZVNlbGVjdGlvbi4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIG1hbmFnZXMgc2luZ2xlLXNlbGVjdGlvbiBzZW1hbnRpY3MgZm9yIGl0ZW1zIGluIGEgbGlzdC5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIGEgY29tcG9uZW50IHRvIHByb3ZpZGUgYW4gYGl0ZW1zYCBhcnJheSBvZiBhbGwgZWxlbWVudHNcbiAgICogaW4gdGhlIGxpc3QuIEEgc3RhbmRhcmQgd2F5IHRvIGRvIHRoYXQgd2l0aCBpcyB0aGVcbiAgICogW0NvbnRlbnRBc0l0ZW1zXShDb250ZW50QXNJdGVtcy5tZCkgbWl4aW4sIHdoaWNoIHRha2VzIGEgY29tcG9uZW50J3NcbiAgICogY29udGVudCAodHlwaWNhbGx5IGl0cyBkaXN0cmlidXRlZCBjaGlsZHJlbikgYXMgdGhlIHNldCBvZiBsaXN0IGl0ZW1zOyBzZWVcbiAgICogdGhhdCBtaXhpbiBmb3IgZGV0YWlscy5cbiAgICpcbiAgICogVGhpcyBtaXhpbiB0cmFja3MgYSBzaW5nbGUgc2VsZWN0ZWQgaXRlbSBpbiB0aGUgbGlzdCwgYW5kIHByb3ZpZGVzIG1lYW5zIHRvXG4gICAqIGdldCBhbmQgc2V0IHRoYXQgc3RhdGUgYnkgaXRlbSBwb3NpdGlvbiAoYHNlbGVjdGVkSW5kZXhgKSBvciBpdGVtIGlkZW50aXR5XG4gICAqIChgc2VsZWN0ZWRJdGVtYCkuIFRoZSBzZWxlY3Rpb24gY2FuIGJlIG1vdmVkIGluIHRoZSBsaXN0IHZpYSB0aGUgbWV0aG9kc1xuICAgKiBgc2VsZWN0Rmlyc3RgLCBgc2VsZWN0TGFzdGAsIGBzZWxlY3ROZXh0YCwgYW5kIGBzZWxlY3RQcmV2aW91c2AuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZG9lcyBub3QgcHJvZHVjZSBhbnkgdXNlci12aXNpYmxlIGVmZmVjdHMgdG8gcmVwcmVzZW50XG4gICAqIHNlbGVjdGlvbi4gT3RoZXIgbWl4aW5zLCBzdWNoIGFzXG4gICAqIFtTZWxlY3Rpb25BcmlhQWN0aXZlXShTZWxlY3Rpb25BcmlhQWN0aXZlLm1kKSxcbiAgICogW1NlbGVjdGlvbkhpZ2hsaWdodF0oU2VsZWN0aW9uSGlnaGxpZ2h0Lm1kKSBhbmRcbiAgICogW1NlbGVjdGlvbkluVmlld10oU2VsZWN0aW9uSW5WaWV3Lm1kKSwgbW9kaWZ5IHRoZSBzZWxlY3RlZCBpdGVtIGluIGNvbW1vblxuICAgKiB3YXlzIHRvIGxldCB0aGUgdXNlciBrbm93IGEgZ2l2ZW4gaXRlbSBpcyBzZWxlY3RlZCBvciBub3Qgc2VsZWN0ZWQuXG4gICAqL1xuICBjbGFzcyBTaW5nbGVTZWxlY3Rpb24gZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIC8vIFNldCBkZWZhdWx0cy5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5zZWxlY3Rpb25SZXF1aXJlZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25SZXF1aXJlZCA9IHRoaXMuZGVmYXVsdHMuc2VsZWN0aW9uUmVxdWlyZWQ7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHRoaXMuc2VsZWN0aW9uV3JhcHMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uV3JhcHMgPSB0aGlzLmRlZmF1bHRzLnNlbGVjdGlvbldyYXBzO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFwcGx5IHRoZSBpbmRpY2F0ZSBzZWxlY3Rpb24gc3RhdGUgdG8gdGhlIGl0ZW0uXG4gICAgICpcbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuIFVzZXItdmlzaWJsZVxuICAgICAqIGVmZmVjdHMgd2lsbCB0eXBpY2FsbHkgYmUgaGFuZGxlZCBieSBvdGhlciBtaXhpbnMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpdGVtIC0gdGhlIGl0ZW0gYmVpbmcgc2VsZWN0ZWQvZGVzZWxlY3RlZFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gc2VsZWN0ZWQgLSB0cnVlIGlmIHRoZSBpdGVtIGlzIHNlbGVjdGVkLCBmYWxzZSBpZiBub3RcbiAgICAgKi9cbiAgICBhcHBseVNlbGVjdGlvbihpdGVtLCBzZWxlY3RlZCkge1xuICAgICAgaWYgKHN1cGVyLmFwcGx5U2VsZWN0aW9uKSB7IHN1cGVyLmFwcGx5U2VsZWN0aW9uKGl0ZW0sIHNlbGVjdGVkKTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRydWUgaWYgdGhlIHNlbGVjdGlvbiBjYW4gYmUgbW92ZWQgdG8gdGhlIG5leHQgaXRlbSwgZmFsc2UgaWYgbm90ICh0aGVcbiAgICAgKiBzZWxlY3RlZCBpdGVtIGlzIHRoZSBsYXN0IGl0ZW0gaW4gdGhlIGxpc3QpLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgZ2V0IGNhblNlbGVjdE5leHQoKSB7XG4gICAgICByZXR1cm4gdGhpc1tjYW5TZWxlY3ROZXh0U3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IGNhblNlbGVjdE5leHQoY2FuU2VsZWN0TmV4dCkge1xuICAgICAgdGhpc1tjYW5TZWxlY3ROZXh0U3ltYm9sXSA9IGNhblNlbGVjdE5leHQ7XG4gICAgICBpZiAoJ2NhblNlbGVjdE5leHQnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLmNhblNlbGVjdE5leHQgPSBjYW5TZWxlY3ROZXh0OyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiB0aGUgc2VsZWN0aW9uIGNhbiBiZSBtb3ZlZCB0byB0aGUgcHJldmlvdXMgaXRlbSwgZmFsc2UgaWYgbm90XG4gICAgICogKHRoZSBzZWxlY3RlZCBpdGVtIGlzIHRoZSBmaXJzdCBvbmUgaW4gdGhlIGxpc3QpLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgZ2V0IGNhblNlbGVjdFByZXZpb3VzKCkge1xuICAgICAgcmV0dXJuIHRoaXNbY2FuU2VsZWN0UHJldmlvdXNTeW1ib2xdO1xuICAgIH1cbiAgICBzZXQgY2FuU2VsZWN0UHJldmlvdXMoY2FuU2VsZWN0UHJldmlvdXMpIHtcbiAgICAgIHRoaXNbY2FuU2VsZWN0UHJldmlvdXNTeW1ib2xdID0gY2FuU2VsZWN0UHJldmlvdXM7XG4gICAgICBpZiAoJ2NhblNlbGVjdFByZXZpb3VzJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5jYW5TZWxlY3RQcmV2aW91cyA9IGNhblNlbGVjdFByZXZpb3VzOyB9XG4gICAgfVxuXG4gICAgZ2V0IGRlZmF1bHRzKCkge1xuICAgICAgbGV0IGRlZmF1bHRzID0gc3VwZXIuZGVmYXVsdHMgfHwge307XG4gICAgICBkZWZhdWx0cy5zZWxlY3Rpb25SZXF1aXJlZCA9IGZhbHNlO1xuICAgICAgZGVmYXVsdHMuc2VsZWN0aW9uV3JhcHMgPSBmYWxzZTtcbiAgICAgIHJldHVybiBkZWZhdWx0cztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgYSBuZXcgaXRlbSBiZWluZyBhZGRlZCB0byB0aGUgbGlzdC5cbiAgICAgKlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIHNpbXBseSBzZXRzIHRoZSBpdGVtJ3NcbiAgICAgKiBzZWxlY3Rpb24gc3RhdGUgdG8gZmFsc2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpdGVtIC0gdGhlIGl0ZW0gYmVpbmcgYWRkZWRcbiAgICAgKi9cbiAgICBpdGVtQWRkZWQoaXRlbSkge1xuICAgICAgaWYgKHN1cGVyLml0ZW1BZGRlZCkgeyBzdXBlci5pdGVtQWRkZWQoaXRlbSk7IH1cbiAgICAgIHRoaXMuYXBwbHlTZWxlY3Rpb24oaXRlbSwgaXRlbSA9PT0gdGhpcy5zZWxlY3RlZEl0ZW0pO1xuICAgIH1cblxuICAgIGl0ZW1zQ2hhbmdlZCgpIHtcbiAgICAgIGlmIChzdXBlci5pdGVtc0NoYW5nZWQpIHsgc3VwZXIuaXRlbXNDaGFuZ2VkKCk7IH1cblxuICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uUmVxdWlyZWQpIHtcbiAgICAgICAgLy8gRW5zdXJlIHNlbGVjdGlvbiwgYnV0IGRvIHRoaXMgaW4gdGhlIG5leHQgdGljayB0byBnaXZlIG90aGVyIG1peGlucyBhXG4gICAgICAgIC8vIGNoYW5jZSB0byBkbyB0aGVpciBvd24gaXRlbXNDaGFuZ2VkIHdvcmsuXG4gICAgICAgIG1pY3JvdGFzaygoKSA9PiB7XG4gICAgICAgICAgZW5zdXJlU2VsZWN0aW9uKHRoaXMpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNoYW5nZSBpbiBpdGVtcyBtYXkgaGF2ZSBhZmZlY3RlZCB3aGljaCBuYXZpZ2F0aW9ucyBhcmUgcG9zc2libGUuXG4gICAgICB1cGRhdGVQb3NzaWJsZU5hdmlnYXRpb25zKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBpbmRleCBvZiB0aGUgaXRlbSB3aGljaCBpcyBjdXJyZW50bHkgc2VsZWN0ZWQuXG4gICAgICpcbiAgICAgKiBJZiBgc2VsZWN0aW9uV3JhcHNgIGlzIGZhbHNlLCB0aGUgaW5kZXggaXMgLTEgaWYgdGhlcmUgaXMgbm8gc2VsZWN0aW9uLlxuICAgICAqIEluIHRoYXQgY2FzZSwgc2V0dGluZyB0aGUgaW5kZXggdG8gLTEgd2lsbCBkZXNlbGVjdCBhbnlcbiAgICAgKiBjdXJyZW50bHktc2VsZWN0ZWQgaXRlbS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGVkSW5kZXgoKSB7XG4gICAgICBsZXQgc2VsZWN0ZWRJdGVtID0gdGhpcy5zZWxlY3RlZEl0ZW07XG5cbiAgICAgIC8vIFRPRE86IElmIHNlbGVjdGlvbiB3YXNuJ3QgZm91bmQsIG1vc3QgbGlrZWx5IGNhdXNlIGlzIHRoYXQgdGhlIERPTSB3YXNcbiAgICAgIC8vIG1hbmlwdWxhdGVkIGZyb20gdW5kZXJuZWF0aCB1cy4gT25jZSB3ZSB0cmFjayBjb250ZW50IGNoYW5nZXMsIHR1cm5cbiAgICAgIC8vIHRoaXMgaW50byBhIHdhcm5pbmcuXG4gICAgICAvLyBUT0RPOiBNZW1vaXplXG4gICAgICByZXR1cm4gc2VsZWN0ZWRJdGVtID9cbiAgICAgICAgdGhpcy5pdGVtcy5pbmRleE9mKHNlbGVjdGVkSXRlbSkgOlxuICAgICAgICAtMTtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGVkSW5kZXgoaW5kZXgpIHtcbiAgICAgIC8vIFRPRE86IFB1bGwgc2V0dGluZyBvZiBzZWxlY3RlZEl0ZW0gYWJvdmUgc3VwZXIoKSBjYWxsLiAqL1xuICAgICAgaWYgKCdzZWxlY3RlZEluZGV4JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEluZGV4ID0gaW5kZXg7IH1cbiAgICAgIGxldCBpdGVtcyA9IHRoaXMuaXRlbXM7XG4gICAgICBsZXQgaXRlbTtcbiAgICAgIGlmIChpbmRleCA8IDAgfHwgaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGl0ZW0gPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbSA9IGl0ZW1zW2luZGV4XTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gaXRlbTtcblxuICAgICAgbGV0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdzZWxlY3RlZC1pbmRleC1jaGFuZ2VkJywge1xuICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICBzZWxlY3RlZEluZGV4OiBpbmRleCxcbiAgICAgICAgICB2YWx1ZTogaW5kZXggLy8gZm9yIFBvbHltZXIgYmluZGluZ1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnRseSBzZWxlY3RlZCBpdGVtLCBvciBudWxsIGlmIHRoZXJlIGlzIG5vIHNlbGVjdGlvbi5cbiAgICAgKlxuICAgICAqIFNldHRpbmcgdGhpcyBwcm9wZXJ0eSB0byBudWxsIGRlc2VsZWN0cyBhbnkgY3VycmVudGx5LXNlbGVjdGVkIGl0ZW0uXG4gICAgICpcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqL1xuICAgIGdldCBzZWxlY3RlZEl0ZW0oKSB7XG4gICAgICByZXR1cm4gdGhpc1tzZWxlY3RlZEl0ZW1TeW1ib2xdIHx8IG51bGw7XG4gICAgfVxuICAgIHNldCBzZWxlY3RlZEl0ZW0oaXRlbSkge1xuICAgICAgbGV0IHByZXZpb3VzSXRlbSA9IHRoaXNbc2VsZWN0ZWRJdGVtU3ltYm9sXTtcbiAgICAgIC8vIFRPRE86IENvbmZpcm0gaXRlbSBpcyBhY3R1YWxseSBpbiB0aGUgbGlzdCBiZWZvcmUgc2VsZWN0aW5nLlxuICAgICAgdGhpc1tzZWxlY3RlZEl0ZW1TeW1ib2xdID0gaXRlbTtcblxuICAgICAgaWYgKCdzZWxlY3RlZEl0ZW0nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkSXRlbSA9IGl0ZW07IH1cbiAgICAgIGlmIChwcmV2aW91c0l0ZW0pIHtcbiAgICAgICAgaWYgKGl0ZW0gPT09IHByZXZpb3VzSXRlbSkge1xuICAgICAgICAgIC8vIFRoZSBpbmRpY2F0ZWQgaXRlbSBpcyBhbHJlYWR5IHRoZSBzZWxlY3RlZCBpdGVtLlxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBSZW1vdmUgcHJldmlvdXMgc2VsZWN0aW9uLlxuICAgICAgICB0aGlzLmFwcGx5U2VsZWN0aW9uKHByZXZpb3VzSXRlbSwgZmFsc2UpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbSkge1xuICAgICAgICB0aGlzLmFwcGx5U2VsZWN0aW9uKGl0ZW0sIHRydWUpO1xuICAgICAgfVxuXG4gICAgICAvLyBUT0RPOiBSYXRpb25hbGl6ZSB3aXRoIHNlbGVjdGVkSW5kZXggc28gd2UncmUgbm90IHJlY2FsY3VsYXRpbmcgaXRlbVxuICAgICAgLy8gb3IgaW5kZXggaW4gZWFjaCBzZXR0ZXIuXG4gICAgICB1cGRhdGVQb3NzaWJsZU5hdmlnYXRpb25zKHRoaXMpO1xuXG4gICAgICBsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3NlbGVjdGVkLWl0ZW0tY2hhbmdlZCcsIHtcbiAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgc2VsZWN0ZWRJdGVtOiBpdGVtLFxuICAgICAgICAgIHByZXZpb3VzSXRlbTogcHJldmlvdXNJdGVtLFxuICAgICAgICAgIHZhbHVlOiBpdGVtIC8vIGZvciBQb2x5bWVyIGJpbmRpbmdcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCB0aGUgZmlyc3QgaXRlbSBpbiB0aGUgbGlzdC5cbiAgICAgKi9cbiAgICBzZWxlY3RGaXJzdCgpIHtcbiAgICAgIGlmIChzdXBlci5zZWxlY3RGaXJzdCkgeyBzdXBlci5zZWxlY3RGaXJzdCgpOyB9XG4gICAgICByZXR1cm4gc2VsZWN0SW5kZXgodGhpcywgMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiB0aGUgbGlzdCBzaG91bGQgYWx3YXlzIGhhdmUgYSBzZWxlY3Rpb24gKGlmIGl0IGhhcyBpdGVtcykuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuICAgIGdldCBzZWxlY3Rpb25SZXF1aXJlZCgpIHtcbiAgICAgIHJldHVybiB0aGlzW3NlbGVjdGlvblJlcXVpcmVkU3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGlvblJlcXVpcmVkKHNlbGVjdGlvblJlcXVpcmVkKSB7XG4gICAgICB0aGlzW3NlbGVjdGlvblJlcXVpcmVkU3ltYm9sXSA9IHNlbGVjdGlvblJlcXVpcmVkO1xuICAgICAgaWYgKCdzZWxlY3Rpb25SZXF1aXJlZCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0aW9uUmVxdWlyZWQgPSBzZWxlY3Rpb25SZXF1aXJlZDsgfVxuICAgICAgaWYgKHNlbGVjdGlvblJlcXVpcmVkKSB7XG4gICAgICAgIGVuc3VyZVNlbGVjdGlvbih0aGlzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgdGhlIGxhc3QgaXRlbSBpbiB0aGUgbGlzdC5cbiAgICAgKi9cbiAgICBzZWxlY3RMYXN0KCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdExhc3QpIHsgc3VwZXIuc2VsZWN0TGFzdCgpOyB9XG4gICAgICByZXR1cm4gc2VsZWN0SW5kZXgodGhpcywgdGhpcy5pdGVtcy5sZW5ndGggLSAxKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgdGhlIG5leHQgaXRlbSBpbiB0aGUgbGlzdC5cbiAgICAgKi9cbiAgICBzZWxlY3ROZXh0KCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdE5leHQpIHsgc3VwZXIuc2VsZWN0TmV4dCgpOyB9XG4gICAgICByZXR1cm4gc2VsZWN0SW5kZXgodGhpcywgdGhpcy5zZWxlY3RlZEluZGV4ICsgMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IHRoZSBwcmV2aW91cyBpdGVtIGluIHRoZSBsaXN0LlxuICAgICAqXG4gICAgICogSWYgdGhlIGxpc3QgaGFzIG5vIHNlbGVjdGlvbiwgdGhlIGxhc3QgaXRlbSB3aWxsIGJlIHNlbGVjdGVkLlxuICAgICAqL1xuICAgIHNlbGVjdFByZXZpb3VzKCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdFByZXZpb3VzKSB7IHN1cGVyLnNlbGVjdFByZXZpb3VzKCk7IH1cbiAgICAgIGxldCBuZXdJbmRleCA9IHRoaXMuc2VsZWN0ZWRJbmRleCA8IDAgP1xuICAgICAgICB0aGlzLml0ZW1zLmxlbmd0aCAtIDEgOiAgICAgLy8gTm8gc2VsZWN0aW9uIHlldDsgc2VsZWN0IGxhc3QgaXRlbS5cbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4IC0gMTtcbiAgICAgIHJldHVybiBzZWxlY3RJbmRleCh0aGlzLCBuZXdJbmRleCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiBzZWxlY3Rpb24gbmF2aWdhdGlvbnMgd3JhcCBmcm9tIGxhc3QgdG8gZmlyc3QsIGFuZCB2aWNlIHZlcnNhLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0aW9uV3JhcHMoKSB7XG4gICAgICByZXR1cm4gdGhpc1tzZWxlY3Rpb25XcmFwc1N5bWJvbF07XG4gICAgfVxuICAgIHNldCBzZWxlY3Rpb25XcmFwcyh2YWx1ZSkge1xuICAgICAgdGhpc1tzZWxlY3Rpb25XcmFwc1N5bWJvbF0gPSBTdHJpbmcodmFsdWUpID09PSAndHJ1ZSc7XG4gICAgICBpZiAoJ3NlbGVjdGlvbldyYXBzJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3Rpb25XcmFwcyA9IHZhbHVlOyB9XG4gICAgICB1cGRhdGVQb3NzaWJsZU5hdmlnYXRpb25zKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpcmVzIHdoZW4gdGhlIHNlbGVjdGVkSXRlbSBwcm9wZXJ0eSBjaGFuZ2VzLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIFNpbmdsZVNlbGVjdGlvblxuICAgICAqIEBldmVudCBzZWxlY3RlZC1pdGVtLWNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBkZXRhaWwuc2VsZWN0ZWRJdGVtIFRoZSBuZXcgc2VsZWN0ZWQgaXRlbS5cbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBkZXRhaWwucHJldmlvdXNJdGVtIFRoZSBwcmV2aW91c2x5IHNlbGVjdGVkIGl0ZW0uXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBGaXJlcyB3aGVuIHRoZSBzZWxlY3RlZEluZGV4IHByb3BlcnR5IGNoYW5nZXMuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgU2luZ2xlU2VsZWN0aW9uXG4gICAgICogQGV2ZW50IHNlbGVjdGVkLWluZGV4LWNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGV0YWlsLnNlbGVjdGVkSW5kZXggVGhlIG5ldyBzZWxlY3RlZCBpbmRleC5cbiAgICAgKi9cblxuICB9XG5cbiAgcmV0dXJuIFNpbmdsZVNlbGVjdGlvbjtcbn07XG5cblxuLy8gSWYgbm8gaXRlbSBpcyBzZWxlY3RlZCwgc2VsZWN0IGEgZGVmYXVsdCBpdGVtLlxuZnVuY3Rpb24gZW5zdXJlU2VsZWN0aW9uKGVsZW1lbnQpIHtcbiAgbGV0IGluZGV4ID0gZWxlbWVudC5zZWxlY3RlZEluZGV4O1xuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgLy8gU2VsZWN0ZWQgaXRlbSBpcyBubyBsb25nZXIgaW4gdGhlIGN1cnJlbnQgc2V0IG9mIGl0ZW1zLlxuICAgIGlmIChlbGVtZW50Lml0ZW1zICYmIGVsZW1lbnQuaXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgLy8gU2VsZWN0IHRoZSBmaXJzdCBpdGVtLlxuICAgICAgLy8gVE9ETzogSWYgdGhlIHByZXZpb3VzbHktc2VsZWN0ZWQgaXRlbSBoYXMgYmVlbiBkZWxldGVkLCB0cnkgdG8gc2VsZWN0XG4gICAgICAvLyBhbiBpdGVtIGFkamFjZW50IHRvIHRoZSBwb3NpdGlvbiBpdCBoZWxkLlxuICAgICAgZWxlbWVudC5zZWxlY3RlZEluZGV4ID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTm8gaXRlbXMgZm9yIHVzIHRvIHNlbGVjdCwgYnV0IHdlIGNhbiBhdCBsZWFzdCBzaWduYWwgdGhhdCB0aGVyZSdzIG5vXG4gICAgICAvLyBsb25nZXIgYSBzZWxlY3Rpb24uXG4gICAgICBlbGVtZW50LnNlbGVjdGVkSXRlbSA9IG51bGw7XG4gICAgfVxuICB9XG59XG5cbi8vIEVuc3VyZSB0aGUgZ2l2ZW4gaW5kZXggaXMgd2l0aGluIGJvdW5kcywgYW5kIHNlbGVjdCBpdCBpZiBpdCdzIG5vdCBhbHJlYWR5XG4vLyBzZWxlY3RlZC5cbmZ1bmN0aW9uIHNlbGVjdEluZGV4KGVsZW1lbnQsIGluZGV4KSB7XG4gIGxldCBjb3VudCA9IGVsZW1lbnQuaXRlbXMubGVuZ3RoO1xuICBsZXQgYm91bmRlZEluZGV4O1xuICBpZiAoZWxlbWVudC5zZWxlY3Rpb25XcmFwcykge1xuICAgIC8vIEphdmFTY3JpcHQgbW9kIGRvZXNuJ3QgaGFuZGxlIG5lZ2F0aXZlIG51bWJlcnMgdGhlIHdheSB3ZSB3YW50IHRvIHdyYXAuXG4gICAgLy8gU2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE4NjE4MjUwLzc2NDcyXG4gICAgYm91bmRlZEluZGV4ID0gKChpbmRleCAlIGNvdW50KSArIGNvdW50KSAlIGNvdW50O1xuICB9IGVsc2Uge1xuICAgIC8vIEtlZXAgaW5kZXggd2l0aGluIGJvdW5kcyBvZiBhcnJheS5cbiAgICBib3VuZGVkSW5kZXggPSBNYXRoLm1heChNYXRoLm1pbihpbmRleCwgY291bnQgLSAxKSwgMCk7XG4gIH1cbiAgbGV0IHByZXZpb3VzSW5kZXggPSBlbGVtZW50LnNlbGVjdGVkSW5kZXg7XG4gIGlmIChwcmV2aW91c0luZGV4ICE9PSBib3VuZGVkSW5kZXgpIHtcbiAgICBlbGVtZW50LnNlbGVjdGVkSW5kZXggPSBib3VuZGVkSW5kZXg7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8vIEZvbGxvd2luZyBhIGNoYW5nZSBpbiBzZWxlY3Rpb24sIHJlcG9ydCB3aGV0aGVyIGl0J3Mgbm93IHBvc3NpYmxlIHRvXG4vLyBnbyBuZXh0L3ByZXZpb3VzIGZyb20gdGhlIGdpdmVuIGluZGV4LlxuZnVuY3Rpb24gdXBkYXRlUG9zc2libGVOYXZpZ2F0aW9ucyhlbGVtZW50KSB7XG4gIGxldCBjYW5TZWxlY3ROZXh0O1xuICBsZXQgY2FuU2VsZWN0UHJldmlvdXM7XG4gIGxldCBpdGVtcyA9IGVsZW1lbnQuaXRlbXM7XG4gIGlmIChpdGVtcyA9PSBudWxsIHx8IGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgIC8vIE5vIGl0ZW1zIHRvIHNlbGVjdC5cbiAgICBjYW5TZWxlY3ROZXh0ID0gZmFsc2U7XG4gICAgY2FuU2VsZWN0UHJldmlvdXMgPSBmYWxzZTtcbiAgfSBpZiAoZWxlbWVudC5zZWxlY3Rpb25XcmFwcykge1xuICAgIC8vIFNpbmNlIHRoZXJlIGFyZSBpdGVtcywgY2FuIGFsd2F5cyBnbyBuZXh0L3ByZXZpb3VzLlxuICAgIGNhblNlbGVjdE5leHQgPSB0cnVlO1xuICAgIGNhblNlbGVjdFByZXZpb3VzID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgaW5kZXggPSBlbGVtZW50LnNlbGVjdGVkSW5kZXg7XG4gICAgaWYgKGluZGV4IDwgMCAmJiBpdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAvLyBTcGVjaWFsIGNhc2UuIElmIHRoZXJlIGFyZSBpdGVtcyBidXQgbm8gc2VsZWN0aW9uLCBkZWNsYXJlIHRoYXQgaXQnc1xuICAgICAgLy8gYWx3YXlzIHBvc3NpYmxlIHRvIGdvIG5leHQvcHJldmlvdXMgdG8gY3JlYXRlIGEgc2VsZWN0aW9uLlxuICAgICAgY2FuU2VsZWN0TmV4dCA9IHRydWU7XG4gICAgICBjYW5TZWxlY3RQcmV2aW91cyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE5vcm1hbCBjYXNlOiB3ZSBoYXZlIGFuIGluZGV4IGluIGEgbGlzdCB0aGF0IGhhcyBpdGVtcy5cbiAgICAgIGNhblNlbGVjdFByZXZpb3VzID0gKGluZGV4ID4gMCk7XG4gICAgICBjYW5TZWxlY3ROZXh0ID0gKGluZGV4IDwgaXRlbXMubGVuZ3RoIC0gMSk7XG4gICAgfVxuICB9XG4gIGVsZW1lbnQuY2FuU2VsZWN0TmV4dCA9IGNhblNlbGVjdE5leHQ7XG4gIGVsZW1lbnQuY2FuU2VsZWN0UHJldmlvdXMgPSBjYW5TZWxlY3RQcmV2aW91cztcbn1cbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi9jcmVhdGVTeW1ib2wnO1xuXG5cbi8vIFN5bWJvbHMgZm9yIHByaXZhdGUgZGF0YSBtZW1iZXJzIG9uIGFuIGVsZW1lbnQuXG5jb25zdCBkZWx0YVhTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2RlbHRhWCcpO1xuY29uc3QgZGVsdGFZU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdkZWx0YVknKTtcbmNvbnN0IG11bHRpVG91Y2hTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ211bHRpVG91Y2gnKTtcbmNvbnN0IHByZXZpb3VzWFN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgncHJldmlvdXNYJyk7XG5jb25zdCBwcmV2aW91c1lTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3ByZXZpb3VzWScpO1xuY29uc3Qgc3RhcnRYU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdzdGFydFgnKTtcbmNvbnN0IHRyYXZlbEZyYWN0aW9uU3ltYm9sID0gY3JlYXRlU3ltYm9sKCd0cmF2ZWxGcmFjdGlvbicpO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggU3dpcGVEaXJlY3Rpb24uICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBtYXBzIHRvdWNoIGdlc3R1cmVzIChzd2lwZSBsZWZ0LCBzd2lwZSByaWdodCkgdG8gZGlyZWN0aW9uXG4gICAqIHNlbWFudGljcyAoZ28gcmlnaHQsIGdvIGxlZnQpLlxuICAgKlxuICAgKiBCeSBkZWZhdWx0LCB0aGlzIG1peGluIHByZXNlbnRzIG5vIHVzZXItdmlzaWJsZSBlZmZlY3RzOyBpdCBqdXN0IGluZGljYXRlcyBhXG4gICAqIGRpcmVjdGlvbiBpbiB3aGljaCB0aGUgdXNlciBpcyBjdXJyZW50bHkgc3dpcGluZyBvciBoYXMgZmluaXNoZWQgc3dpcGluZy4gVG9cbiAgICogbWFwIHRoZSBkaXJlY3Rpb24gdG8gYSBjaGFuZ2UgaW4gc2VsZWN0aW9uLCB1c2UgdGhlXG4gICAqIFtEaXJlY3Rpb25TZWxlY3Rpb25dKERpcmVjdGlvblNlbGVjdGlvbi5tZCkgbWl4aW4uXG4gICAqL1xuICBjbGFzcyBTd2lwZURpcmVjdGlvbiBleHRlbmRzIGJhc2Uge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuXG4gICAgICB0aGlzLnRyYXZlbEZyYWN0aW9uID0gMDtcblxuICAgICAgLy8gSW4gYWxsIHRvdWNoIGV2ZW50cywgb25seSBoYW5kbGUgc2luZ2xlIHRvdWNoZXMuIFdlIGRvbid0IHdhbnQgdG9cbiAgICAgIC8vIGluYWR2ZXJ0ZW50bHkgZG8gd29yayB3aGVuIHRoZSB1c2VyJ3MgdHJ5aW5nIHRvIHBpbmNoLXpvb20gZm9yIGV4YW1wbGUuXG4gICAgICAvLyBUT0RPOiBFdmVuIGJldHRlciBhcHByb2FjaCB0aGFuIGJlbG93IHdvdWxkIGJlIHRvIGlnbm9yZSB0b3VjaGVzIGFmdGVyXG4gICAgICAvLyB0aGUgZmlyc3QgaWYgdGhlIHVzZXIgaGFzIGFscmVhZHkgYmVndW4gYSBzd2lwZS5cbiAgICAgIC8vIFRPRE86IFRvdWNoIGV2ZW50cyBzaG91bGQgcHJvYmFibHkgYmUgZmFjdG9yZWQgb3V0IGludG8gaXRzIG93biBtaXhpbi5cbiAgICAgIGlmICh3aW5kb3cuUG9pbnRlckV2ZW50KSB7XG4gICAgICAgIC8vIFByZWZlciBsaXN0ZW5pbmcgdG8gc3RhbmRhcmQgcG9pbnRlciBldmVudHMuXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCBldmVudCA9PiB7XG4gICAgICAgICAgaWYgKGlzRXZlbnRGb3JQZW5PclByaW1hcnlUb3VjaChldmVudCkpIHtcbiAgICAgICAgICAgIHRoaXMudG91Y2hTdGFydChldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJtb3ZlJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGlmIChpc0V2ZW50Rm9yUGVuT3JQcmltYXJ5VG91Y2goZXZlbnQpKSB7XG4gICAgICAgICAgICBsZXQgaGFuZGxlZCA9IHRoaXMudG91Y2hNb3ZlKGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuICAgICAgICAgICAgaWYgKGhhbmRsZWQpIHtcbiAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICBpZiAoaXNFdmVudEZvclBlbk9yUHJpbWFyeVRvdWNoKGV2ZW50KSkge1xuICAgICAgICAgICAgdGhpcy50b3VjaEVuZChldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUG9pbnRlciBldmVudHMgbm90IHN1cHBvcnRlZCAtLSBsaXN0ZW4gdG8gb2xkZXIgdG91Y2ggZXZlbnRzLlxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBldmVudCA9PiB7XG4gICAgICAgICAgaWYgKHRoaXNbbXVsdGlUb3VjaFN5bWJvbF0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnRvdWNoZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBsZXQgY2xpZW50WCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgICAgICBsZXQgY2xpZW50WSA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFk7XG4gICAgICAgICAgICB0aGlzLnRvdWNoU3RhcnQoY2xpZW50WCwgY2xpZW50WSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXNbbXVsdGlUb3VjaFN5bWJvbF0gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGlmICghdGhpc1ttdWx0aVRvdWNoU3ltYm9sXSAmJiBldmVudC50b3VjaGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgbGV0IGNsaWVudFggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICAgICAgbGV0IGNsaWVudFkgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZO1xuICAgICAgICAgICAgbGV0IGhhbmRsZWQgPSB0aGlzLnRvdWNoTW92ZShjbGllbnRYLCBjbGllbnRZKTtcbiAgICAgICAgICAgIGlmIChoYW5kbGVkKSB7XG4gICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICBpZiAoZXZlbnQudG91Y2hlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIC8vIEFsbCB0b3VjaGVzIHJlbW92ZWQ7IGdlc3R1cmUgaXMgY29tcGxldGUuXG4gICAgICAgICAgICBpZiAoIXRoaXNbbXVsdGlUb3VjaFN5bWJvbF0pIHtcbiAgICAgICAgICAgICAgLy8gU2luZ2xlLXRvdWNoIHN3aXBlIGhhcyBmaW5pc2hlZC5cbiAgICAgICAgICAgICAgbGV0IGNsaWVudFggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICAgICAgICBsZXQgY2xpZW50WSA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFk7XG4gICAgICAgICAgICAgIHRoaXMudG91Y2hFbmQoY2xpZW50WCwgY2xpZW50WSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzW211bHRpVG91Y2hTeW1ib2xdID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jb25uZWN0ZWRDYWxsYmFjaykgeyBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpOyB9XG5cbiAgICAgIC8vIEZvciB0aGUgY29tcG9uZW50IHRvIHJlY2VpdmUgUG9pbnRlckV2ZW50cyBpbiBJRS9FZGdlLCB3ZSBuZWVkIHRvIHNldFxuICAgICAgLy8gdG91Y2gtYWN0aW9uOiBub25lLiBPbmx5IG1ha2UgdGhpcyBjaGFuZ2UgaWYgdG91Y2gtYWN0aW9uIGlzIGN1cnJlbnRseVxuICAgICAgLy8gdGhlIGRlZmF1bHQgdmFsdWUgKFwiYXV0b1wiKSwgaW4gY2FzZSB0aGUgZGV2ZWxvcGVyIGtub3dzIGJldHRlciB0aGFuIHdlXG4gICAgICAvLyBkbyB3aGF0IHRoZXkgd2FudCBpbiB0aGVpciBwYXJ0aWN1bGFyIGNvbnRleHQuXG4gICAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzKS50b3VjaEFjdGlvbiA9PT0gJ2F1dG8nKSB7XG4gICAgICAgIHRoaXMuc3R5bGUudG91Y2hBY3Rpb24gPSAnbm9uZSc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIGxlZnQuXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLlxuICAgICAqL1xuICAgIGdvTGVmdCgpIHtcbiAgICAgIGlmIChzdXBlci5nb0xlZnQpIHsgcmV0dXJuIHN1cGVyLmdvTGVmdCgpOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIHJpZ2h0LlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy5cbiAgICAgKi9cbiAgICBnb1JpZ2h0KCkge1xuICAgICAgaWYgKHN1cGVyLmdvUmlnaHQpIHsgcmV0dXJuIHN1cGVyLmdvUmlnaHQoKTsgfVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgaW1wbGVtZW50YXRpb24uXG4gICAgZ2V0IHNob3dUcmFuc2l0aW9uKCkge1xuICAgICAgcmV0dXJuIHN1cGVyLnNob3dUcmFuc2l0aW9uO1xuICAgIH1cbiAgICBzZXQgc2hvd1RyYW5zaXRpb24odmFsdWUpIHtcbiAgICAgIGlmICgnc2hvd1RyYW5zaXRpb24nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNob3dUcmFuc2l0aW9uID0gdmFsdWU7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIHVzZXIgaGFzIGZpbmlzaGVkIGEgdG91Y2ggb3BlcmF0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNsaWVudFggLSBUaGUgaG9yaXpvbnRhbCBjb21wb25lbnQgb2YgdGhlIGZpcnN0IHRvdWNoIHBvaW50XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNsaWVudFkgLSBUaGUgdmVydGljYWwgY29tcG9uZW50IG9mIHRoZSBmaXJzdCB0b3VjaCBwb2ludFxuICAgICAqL1xuICAgIHRvdWNoRW5kKGNsaWVudFgsIGNsaWVudFkpIHtcbiAgICAgIGlmIChzdXBlci50b3VjaEVuZCkgeyBzdXBlci50b3VjaEVuZCgpOyB9XG4gICAgICB0aGlzLnNob3dUcmFuc2l0aW9uID0gdHJ1ZTtcbiAgICAgIGlmICh0aGlzW2RlbHRhWFN5bWJvbF0gPj0gMjApIHtcbiAgICAgICAgLy8gRmluaXNoZWQgZ29pbmcgcmlnaHQgYXQgaGlnaCBzcGVlZC5cbiAgICAgICAgdGhpcy5nb0xlZnQoKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpc1tkZWx0YVhTeW1ib2xdIDw9IC0yMCkge1xuICAgICAgICAvLyBGaW5pc2hlZCBnb2luZyBsZWZ0IGF0IGhpZ2ggc3BlZWQuXG4gICAgICAgIHRoaXMuZ29SaWdodCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRmluaXNoZWQgYXQgbG93IHNwZWVkLlxuICAgICAgICB0cmFja1RvKHRoaXMsIGNsaWVudFgpO1xuICAgICAgICBsZXQgdHJhdmVsRnJhY3Rpb24gPSB0aGlzLnRyYXZlbEZyYWN0aW9uO1xuICAgICAgICBpZiAodHJhdmVsRnJhY3Rpb24gPj0gMC41KSB7XG4gICAgICAgICAgdGhpcy5nb1JpZ2h0KCk7XG4gICAgICAgIH0gZWxzZSBpZiAodHJhdmVsRnJhY3Rpb24gPD0gLTAuNSkge1xuICAgICAgICAgIHRoaXMuZ29MZWZ0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMudHJhdmVsRnJhY3Rpb24gPSAwO1xuICAgICAgdGhpc1tkZWx0YVhTeW1ib2xdID0gbnVsbDtcbiAgICAgIHRoaXNbZGVsdGFZU3ltYm9sXSA9IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIGhhcyBtb3ZlZCBkdXJpbmcgYSB0b3VjaCBvcGVyYXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY2xpZW50WCAtIFRoZSBob3Jpem9udGFsIGNvbXBvbmVudCBvZiB0aGUgZmlyc3QgdG91Y2ggcG9pbnRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY2xpZW50WSAtIFRoZSB2ZXJ0aWNhbCBjb21wb25lbnQgb2YgdGhlIGZpcnN0IHRvdWNoIHBvaW50XG4gICAgICovXG4gICAgdG91Y2hNb3ZlKGNsaWVudFgsIGNsaWVudFkpIHtcbiAgICAgIGlmIChzdXBlci50b3VjaE1vdmUpIHsgc3VwZXIudG91Y2hNb3ZlKCk7IH1cblxuICAgICAgdGhpc1tkZWx0YVhTeW1ib2xdID0gY2xpZW50WCAtIHRoaXNbcHJldmlvdXNYU3ltYm9sXTtcbiAgICAgIHRoaXNbZGVsdGFZU3ltYm9sXSA9IGNsaWVudFkgLSB0aGlzW3ByZXZpb3VzWVN5bWJvbF07XG4gICAgICB0aGlzW3ByZXZpb3VzWFN5bWJvbF0gPSBjbGllbnRYO1xuICAgICAgdGhpc1twcmV2aW91c1lTeW1ib2xdID0gY2xpZW50WTtcbiAgICAgIGlmIChNYXRoLmFicyh0aGlzW2RlbHRhWFN5bWJvbF0pID4gTWF0aC5hYnModGhpc1tkZWx0YVlTeW1ib2xdKSkge1xuICAgICAgICAvLyBNb3ZlIHdhcyBtb3N0bHkgaG9yaXpvbnRhbC5cbiAgICAgICAgdHJhY2tUbyh0aGlzLCBjbGllbnRYKTtcbiAgICAgICAgLy8gSW5kaWNhdGUgdGhhdCB0aGUgZXZlbnQgd2FzIGhhbmRsZWQuIEl0J2QgYmUgbmljZXIgaWYgd2UgZGlkbid0IGhhdmVcbiAgICAgICAgLy8gdG8gZG8gdGhpcyBzbyB0aGF0LCBlLmcuLCBhIHVzZXIgY291bGQgYmUgc3dpcGluZyBsZWZ0IGFuZCByaWdodFxuICAgICAgICAvLyB3aGlsZSBzaW11bHRhbmVvdXNseSBzY3JvbGxpbmcgdXAgYW5kIGRvd24uIChOYXRpdmUgdG91Y2ggYXBwcyBjYW4gZG9cbiAgICAgICAgLy8gdGhhdC4pIEhvd2V2ZXIsIE1vYmlsZSBTYWZhcmkgd2FudHMgdG8gaGFuZGxlIHN3aXBlIGV2ZW50cyBuZWFyIHRoZVxuICAgICAgICAvLyBwYWdlIGFuZCBpbnRlcnByZXQgdGhlbSBhcyBuYXZpZ2F0aW9ucy4gVG8gYXZvaWQgaGF2aW5nIGEgaG9yaXppb250YWxcbiAgICAgICAgLy8gc3dpcGUgbWlzaW50ZXByZXRlZCBhcyBhIG5hdmlnYXRpb24sIHdlIGluZGljYXRlIHRoYXQgd2UndmUgaGFuZGxlZFxuICAgICAgICAvLyB0aGUgZXZlbnQsIGFuZCBwcmV2ZW50IGRlZmF1bHQgYmVoYXZpb3IuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTW92ZSB3YXMgbW9zdGx5IHZlcnRpY2FsLlxuICAgICAgICByZXR1cm4gZmFsc2U7IC8vIE5vdCBoYW5kbGVkXG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIGhhcyBiZWd1biBhIHRvdWNoIG9wZXJhdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjbGllbnRYIC0gVGhlIGhvcml6b250YWwgY29tcG9uZW50IG9mIHRoZSBmaXJzdCB0b3VjaCBwb2ludFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjbGllbnRZIC0gVGhlIHZlcnRpY2FsIGNvbXBvbmVudCBvZiB0aGUgZmlyc3QgdG91Y2ggcG9pbnRcbiAgICAgKi9cbiAgICB0b3VjaFN0YXJ0KGNsaWVudFgsIGNsaWVudFkpIHtcbiAgICAgIGlmIChzdXBlci50b3VjaFN0YXJ0KSB7IHN1cGVyLnRvdWNoU3RhcnQoKTsgfVxuICAgICAgdGhpcy5zaG93VHJhbnNpdGlvbiA9IGZhbHNlO1xuICAgICAgdGhpc1tzdGFydFhTeW1ib2xdID0gY2xpZW50WDtcbiAgICAgIHRoaXNbcHJldmlvdXNYU3ltYm9sXSA9IGNsaWVudFg7XG4gICAgICB0aGlzW3ByZXZpb3VzWVN5bWJvbF0gPSBjbGllbnRZO1xuICAgICAgdGhpc1tkZWx0YVhTeW1ib2xdID0gMDtcbiAgICAgIHRoaXNbZGVsdGFZU3ltYm9sXSA9IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGRpc3RhbmNlIHRoZSBmaXJzdCB0b3VjaHBvaW50IGhhcyB0cmF2ZWxlZCBzaW5jZSB0aGUgYmVnaW5uaW5nIG9mIGFcbiAgICAgKiBkcmFnLCBleHByZXNzZWQgYXMgYSBmcmFjdGlvbiBvZiB0aGUgZWxlbWVudCdzIHdpZHRoLlxuICAgICAqXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICovXG4gICAgZ2V0IHRyYXZlbEZyYWN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXNbdHJhdmVsRnJhY3Rpb25TeW1ib2xdO1xuICAgIH1cbiAgICBzZXQgdHJhdmVsRnJhY3Rpb24odmFsdWUpIHtcbiAgICAgIHRoaXNbdHJhdmVsRnJhY3Rpb25TeW1ib2xdID0gdmFsdWU7XG4gICAgICBpZiAoJ3RyYXZlbEZyYWN0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci50cmF2ZWxGcmFjdGlvbiA9IHZhbHVlOyB9XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gU3dpcGVEaXJlY3Rpb247XG59O1xuXG5cbi8vIFJldHVybiB0cnVlIGlmIHRoZSBwb2ludGVyIGV2ZW50IGlzIGZvciB0aGUgcGVuLCBvciB0aGUgcHJpbWFyeSB0b3VjaCBwb2ludC5cbmZ1bmN0aW9uIGlzRXZlbnRGb3JQZW5PclByaW1hcnlUb3VjaChldmVudCkge1xuICByZXR1cm4gZXZlbnQucG9pbnRlclR5cGUgPT09ICdwZW4nIHx8XG4gICAgICAoZXZlbnQucG9pbnRlclR5cGUgPT09ICd0b3VjaCcgJiYgZXZlbnQuaXNQcmltYXJ5KTtcbn1cblxuZnVuY3Rpb24gdHJhY2tUbyhlbGVtZW50LCB4KSB7XG4gIGxldCB3aWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gIGxldCBkcmFnRGlzdGFuY2UgPSBlbGVtZW50W3N0YXJ0WFN5bWJvbF0gLSB4O1xuICBsZXQgZnJhY3Rpb24gPSB3aWR0aCA+IDAgP1xuICAgIGRyYWdEaXN0YW5jZSAvIHdpZHRoIDpcbiAgICAwO1xuICBlbGVtZW50LnRyYXZlbEZyYWN0aW9uID0gZnJhY3Rpb247XG59XG4iLCJpbXBvcnQgQ29sbGVjdGl2ZSBmcm9tICcuL0NvbGxlY3RpdmUnO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggVGFyZ2V0SW5Db2xsZWN0aXZlLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggYWxsb3dzIGEgY29tcG9uZW50IHRvIHByb3ZpZGUgYWdncmVnYXRlIGJlaGF2aW9yIHdpdGggb3RoZXJcbiAgICogZWxlbWVudHMsIGUuZy4sIGZvciBrZXlib2FyZCBoYW5kbGluZy5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBpbXBsaWNpdGx5IGNyZWF0ZXMgYSBjb2xsZWN0aXZlIGZvciBhIGNvbXBvbmVudCBzbyB0aGF0IGl0IGNhblxuICAgKiBwYXJ0aWNpcGF0ZSBpbiBjb2xsZWN0aXZlIGtleWJvYXJkIGhhbmRsaW5nLiBTZWUgdGhlXG4gICAqIFtDb2xsZWN0aXZlXShDb2xsZWN0aXZlLm1kKSBjbGFzcyBmb3IgZGV0YWlscy5cbiAgICpcbiAgICogWW91IGNhbiB1c2UgdGhpcyBtaXhpbiBpbiBjb25qdW5jdGlvbiB3aXRoXG4gICAqIFtDb250ZW50Rmlyc3RDaGlsZFRhcmdldF0oQ29udGVudEZpcnN0Q2hpbGRUYXJnZXQubWQpIHRvIGF1dG9tYXRpY2FsbHkgaGF2ZVxuICAgKiB0aGUgY29tcG9uZW50J3MgY29sbGVjdGl2ZSBleHRlbmRlZCB0byBpdHMgZmlyc3QgY2hpbGQuXG4gICAqL1xuICBjbGFzcyBUYXJnZXRJbkNvbGxlY3RpdmUgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMuY29sbGVjdGl2ZSA9IG5ldyBDb2xsZWN0aXZlKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMvc2V0cyB0aGUgY3VycmVudCB0YXJnZXQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIFNldCB0aGlzIHRvIHBvaW50IHRvIGFub3RoZXIgZWxlbWVudC4gVGhhdCB0YXJnZXQgZWxlbWVudCB3aWxsIGJlXG4gICAgICogaW1wbGljaXRseSBhZGRlZCB0byB0aGUgY29tcG9uZW50J3MgY29sbGVjdGl2ZS4gVGhhdCBpcywgdGhlIGNvbXBvbmVudFxuICAgICAqIGFuZCBpdHMgdGFyZ2V0IHdpbGwgc2hhcmUgcmVzcG9uc2liaWxpdHkgZm9yIGhhbmRsaW5nIGtleWJvYXJkIGV2ZW50cy5cbiAgICAgKlxuICAgICAqIFlvdSBjYW4gc2V0IHRoaXMgcHJvcGVydHkgeW91cnNlbGYsIG9yIHlvdSBjYW4gdXNlIHRoZVxuICAgICAqIENvbnRlbnRGaXJzdENoaWxkVGFyZ2V0IG1peGluIHRvIGF1dG9tYXRpY2FsbHkgc2V0IHRoZSB0YXJnZXQgdG8gdGhlXG4gICAgICogY29tcG9uZW50J3MgZmlyc3QgY2hpbGQuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgZ2V0IHRhcmdldCgpIHtcbiAgICAgIHJldHVybiBzdXBlci50YXJnZXQ7XG4gICAgfVxuICAgIHNldCB0YXJnZXQoZWxlbWVudCkge1xuICAgICAgaWYgKCd0YXJnZXQnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnRhcmdldCA9IGVsZW1lbnQ7IH1cbiAgICAgIHRoaXMuY29sbGVjdGl2ZS5hc3NpbWlsYXRlKGVsZW1lbnQpO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIFRhcmdldEluQ29sbGVjdGl2ZTtcbn07XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4vY3JlYXRlU3ltYm9sJztcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3QgaXRlbXNDaGFuZ2VkTGlzdGVuZXJTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2l0ZW1zQ2hhbmdlZExpc3RlbmVyJyk7XG5jb25zdCBzZWxlY3RlZEl0ZW1DaGFuZ2VkTGlzdGVuZXJTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3NlbGVjdGVkSXRlbUNoYW5nZWRMaXN0ZW5lcicpO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggVGFyZ2V0U2VsZWN0aW9uLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggYWxsb3dzIGEgY29tcG9uZW50IHRvIGRlbGVnYXRlIGl0cyBvd24gc2VsZWN0aW9uIHNlbWFudGljcyB0byBhXG4gICAqIHRhcmdldCBlbGVtZW50LlxuICAgKlxuICAgKiBUaGlzIGlzIHVzZWZ1bCB3aGVuIGRlZmluaW5nIGNvbXBvbmVudHMgdGhhdCBhY3QgYXMgb3B0aW9uYWwgZmVhdHVyZXMgZm9yIGFcbiAgICogY29tcG9uZW50IHRoYXQgYWN0cyBsaWtlIGEgbGlzdC4gU2VlIGJhc2ljLWFycm93LXNlbGVjdGlvbiBhbmRcbiAgICogYmFzaWMtcGFnZS1kb3RzIGZvciBleGFtcGxlcyBvZiBjb21wb25lbnRzIHVzZWQgYXMgb3B0aW9uYWwgZmVhdHVyZXMgZm9yXG4gICAqIGNvbXBvbmVudHMgbGlrZSBiYXNpYy1jYXJvdXNlbC4gQSB0eXBpY2FsIHVzYWdlIG1pZ2h0IGJlOlxuICAgKlxuICAgKiAgICAgPGJhc2ljLWFycm93LXNlbGVjdGlvbj5cbiAgICogICAgICAgPGJhc2ljLWNhcm91c2VsPlxuICAgKiAgICAgICAgIC4uLiBpbWFnZXMsIGV0Yy4gLi4uXG4gICAqICAgICAgIDwvYmFzaWMtY2Fyb3VzZWw+XG4gICAqICAgICA8L2Jhc2ljLWFycm93LXNlbGVjdGlvbj5cbiAgICpcbiAgICogQmVjYXVzZSBiYXNpYy1hcnJvdy1zZWxlY3Rpb24gdXNlcyB0aGVcbiAgICogW1RhcmdldFNlbGVjdGlvbl0oVGFyZ2V0U2VsZWN0aW9uLm1kKSBtaXhpbiwgaXQgZXhwb3NlcyBtZW1iZXJzIHRvIGFjY2VzcyBhXG4gICAqIHNlbGVjdGlvbjogYHNlbGVjdE5leHRgLCBgc2VsZWN0UHJldmlvdXNgLCBgc2VsZWN0ZWRJbmRleGAsIGV0Yy4gVGhlc2UgYXJlXG4gICAqIGFsbCBkZWxlZ2F0ZWQgdG8gdGhlIGNoaWxkIGNvbXBvbmVudCAoaGVyZSwgYSBiYXNpYy1jYXJvdXNlbCkuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyBhIGB0YXJnZXRgIHByb3BlcnR5IHRvIGJlIHNldCB0byB0aGUgZWxlbWVudCBhY3R1YWxseVxuICAgKiBtYW5hZ2luZyB0aGUgc2VsZWN0aW9uLiBZb3UgY2FuIHNldCB0aGF0IHByb3BlcnR5IHlvdXJzZWxmLCBvciB5b3UgY2FuIHVzZVxuICAgKiB0aGUgW0NvbnRlbnRGaXJzdENoaWxkVGFyZ2V0XShDb250ZW50Rmlyc3RDaGlsZFRhcmdldC5tZCkgbWl4aW4gdG9cbiAgICogaW1wbGljaXRseSB0YWtlIHRoZSBjb21wb25lbnQncyBmaXJzdCBjaGlsZCBhcyB0aGUgdGFyZ2V0LiBUaGlzIGlzIHdoYXRcbiAgICogYmFzaWMtYXJyb3ctc2VsZWN0aW9uIChhYm92ZSkgZG9lcy5cbiAgICovXG4gIGNsYXNzIFRhcmdldFNlbGVjdGlvbiBleHRlbmRzIGJhc2Uge1xuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgc2V0IG9mIGl0ZW1zIGluIHRoZSBsaXN0LlxuICAgICAqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50W119XG4gICAgICovXG4gICAgZ2V0IGl0ZW1zKCkge1xuICAgICAgbGV0IHRhcmdldCA9IHRoaXMudGFyZ2V0O1xuICAgICAgbGV0IGl0ZW1zID0gdGFyZ2V0ICYmIHRhcmdldC5pdGVtcztcbiAgICAgIHJldHVybiBpdGVtcyB8fCBbXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIHdoZW4gdGhlIHVuZGVybHlpbmcgY29udGVudHMgY2hhbmdlLiBJdCBpcyBhbHNvXG4gICAgICogaW52b2tlZCBvbiBjb21wb25lbnQgaW5pdGlhbGl6YXRpb24g4oCTIHNpbmNlIHRoZSBpdGVtcyBoYXZlIFwiY2hhbmdlZFwiIGZyb21cbiAgICAgKiBiZWluZyBub3RoaW5nLlxuICAgICAqL1xuICAgIGl0ZW1zQ2hhbmdlZCgpIHtcbiAgICAgIGlmIChzdXBlci5pdGVtc0NoYW5nZWQpIHsgc3VwZXIuaXRlbXNDaGFuZ2VkKCk7IH1cbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2l0ZW1zLWNoYW5nZWQnKSk7XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdGVkRnJhY3Rpb24oKSB7XG4gICAgICBsZXQgdGFyZ2V0ID0gdGhpcy50YXJnZXQ7XG4gICAgICByZXR1cm4gdGFyZ2V0ICYmIHRhcmdldC5zZWxlY3RlZEZyYWN0aW9uO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0ZWRGcmFjdGlvbihmcmFjdGlvbikge1xuICAgICAgaWYgKCdzZWxlY3RlZEZyYWN0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEZyYWN0aW9uID0gZnJhY3Rpb247IH1cbiAgICAgIGxldCB0YXJnZXQgPSB0aGlzLnRhcmdldDtcbiAgICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0LnNlbGVjdGVkRnJhY3Rpb24gIT09IGZyYWN0aW9uKSB7XG4gICAgICAgIHRhcmdldC5zZWxlY3RlZEZyYWN0aW9uID0gZnJhY3Rpb247XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnRseSBzZWxlY3RlZCBpdGVtLCBvciBudWxsIGlmIHRoZXJlIGlzIG5vIHNlbGVjdGlvbi5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0ZWRJdGVtKCkge1xuICAgICAgbGV0IHRhcmdldCA9IHRoaXMudGFyZ2V0O1xuICAgICAgcmV0dXJuIHRhcmdldCAmJiB0YXJnZXQuc2VsZWN0ZWRJdGVtO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0ZWRJdGVtKGl0ZW0pIHtcbiAgICAgIGlmICgnc2VsZWN0ZWRJdGVtJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEl0ZW0gPSBpdGVtOyB9XG4gICAgICBsZXQgdGFyZ2V0ID0gdGhpcy50YXJnZXQ7XG4gICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgIHRhcmdldC5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRoaXMgbWV0aG9kIGV4aXN0cyBzbyB3cmFwcGluZyBjb21wb25lbnRzIGNhbiBoYW5kbGUgYSBjaGFuZ2UgaW4gdGhlXG4gICAgLy8gc2VsZWN0aW9uIHdpdGhvdXQgcG90ZW50aWFsbHkgcmUtaW52b2tpbmcgdGhlIHNlbGVjdGVkSXRlbSBzZXR0ZXIuIFRoaXNcbiAgICAvLyBpcyBraW5kIG9mIHVuc2F0aXNmeWluZywgdGhvdWdoLiBJdCdkIGJlIG5pY2VyIHRvIGxldCBzdWNoIGNvbXBvbmVudHNcbiAgICAvLyBqdXN0IGltcGxlbWVudCB0aGUgZ2V0dGVyL3NldHRlciBmb3Igc2VsZWN0ZWRJdGVtLCBidXQgaGF2ZSBhIHdheSB0b1xuICAgIC8vIGtub3cgd2hldGhlciB0aGV5IG5lZWQgdG8gYWxzbyB0aGF0IHByb3BlcnR5IGdldHRlci9zZXR0ZXIgZm9yIHRoZSB0YXJnZXRcbiAgICAvLyBjb21wb25lbnQuXG4gICAgc2VsZWN0ZWRJdGVtQ2hhbmdlZCgpIHtcbiAgICAgIGlmIChzdXBlci5zZWxlY3RlZEl0ZW1DaGFuZ2VkKSB7IHN1cGVyLnNlbGVjdGVkSXRlbUNoYW5nZWQoKTsgfVxuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnc2VsZWN0ZWQtaXRlbS1jaGFuZ2VkJykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRydWUgaWYgc2VsZWN0aW9uIG5hdmlnYXRpb25zIHdyYXAgZnJvbSBsYXN0IHRvIGZpcnN0LCBhbmQgdmljZSB2ZXJzYS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBkZWZhdWx0IHtmYWxzZX1cbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0aW9uV3JhcHMoKSB7XG4gICAgICBsZXQgdGFyZ2V0ID0gdGhpcy50YXJnZXQ7XG4gICAgICByZXR1cm4gdGFyZ2V0ICYmIHRhcmdldC5zZWxlY3Rpb25XcmFwcztcbiAgICB9XG4gICAgc2V0IHNlbGVjdGlvbldyYXBzKHZhbHVlKSB7XG4gICAgICBpZiAoJ3NlbGVjdGlvbldyYXBzJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3Rpb25XcmFwcyA9IHZhbHVlOyB9XG4gICAgICBsZXQgdGFyZ2V0ID0gdGhpcy50YXJnZXQ7XG4gICAgICBpZiggdGFyZ2V0KSB7XG4gICAgICAgIHRhcmdldC5zZWxlY3Rpb25XcmFwcyA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMvc2V0cyB0aGUgdGFyZ2V0IGVsZW1lbnQgdG8gd2hpY2ggdGhpcyBjb21wb25lbnQgd2lsbCBkZWxlZ2F0ZVxuICAgICAqIHNlbGVjdGlvbiBhY3Rpb25zLlxuICAgICAqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIGdldCB0YXJnZXQoKSB7XG4gICAgICByZXR1cm4gc3VwZXIudGFyZ2V0O1xuICAgIH1cbiAgICBzZXQgdGFyZ2V0KGVsZW1lbnQpIHtcbiAgICAgIGlmICgndGFyZ2V0JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci50YXJnZXQgPSBlbGVtZW50OyB9XG4gICAgICBpZiAodGhpc1tpdGVtc0NoYW5nZWRMaXN0ZW5lclN5bWJvbF0pIHtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdpdGVtcy1jaGFuZ2VkJywgdGhpc1tpdGVtc0NoYW5nZWRMaXN0ZW5lclN5bWJvbF0pO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXNbc2VsZWN0ZWRJdGVtQ2hhbmdlZExpc3RlbmVyU3ltYm9sXSkge1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3NlbGVjdGVkLWl0ZW0tY2hhbmdlZCcsIHRoaXNbc2VsZWN0ZWRJdGVtQ2hhbmdlZExpc3RlbmVyU3ltYm9sXSk7XG4gICAgICB9XG4gICAgICB0aGlzW2l0ZW1zQ2hhbmdlZExpc3RlbmVyU3ltYm9sXSA9IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaXRlbXMtY2hhbmdlZCcsIGV2ZW50ID0+IHtcbiAgICAgICAgdGhpcy5pdGVtc0NoYW5nZWQoKTtcbiAgICAgIH0pO1xuICAgICAgdGhpc1tzZWxlY3RlZEl0ZW1DaGFuZ2VkTGlzdGVuZXJTeW1ib2xdID0gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzZWxlY3RlZC1pdGVtLWNoYW5nZWQnLCBldmVudCA9PiB7XG4gICAgICAgIC8vIFJFVklFVzogQ29tcG9uZW50cyBhcHBseWluZyBUYXJnZXRTZWxlY3Rpb24gYm90aCBsaXN0ZW4gdG8gdGhpc1xuICAgICAgICAvLyBldmVudCAob24gdGhlIHRhcmdldCksIGFuZCByYWlzZSBpdCB0aGVtc2VsdmVzLiBJbiB0aGVvcnksIHRoZXkncmVcbiAgICAgICAgLy8gZXhwZWN0ZWQgdG8gKm5vdCogY2F0Y2ggdGhlIGV2ZW50cyB0aGV5IHJhaXNlIHRoZW1zZWx2ZXMsIGJ1dCBDaHJvbWVcbiAgICAgICAgLy8gKGF0IGxlYXN0KSBhcHBlYXJzIHRvIHZpb2xhdGUgdGhhdCBleHBlY3RhdGlvbi4gVGhhdCBpcywgaXQnc1xuICAgICAgICAvLyBwb3NzaWJsZSB0byBoYXZlIGV2ZW50LnRhcmdldCA9PT0gdGhpcy4gTW9yZSBjb25mdXNpbmdseSwgdGhlIGd1YXJkXG4gICAgICAgIC8vIGJlbG93LCB3aGljaCBpcyBpbnRlbmRlZCB0byBhdm9pZCByZWN1cnNpdmUgY2FsbHMgdG9cbiAgICAgICAgLy8gc2VsZWN0ZWRJdGVtQ2hhbmdlZCwgZG9lc24ndCB3b3JrIGFzIGV4cGVjdGVkLiBFdmVuIGlmIHRoZSBkZWJ1Z2dlclxuICAgICAgICAvLyBzaG93cyBldmVudC50YXJnZXQgPT09IHRoaXMsIHRoZSBjb250ZW50cyBvZiB0aGUgXCJpZlwiIHN0YXRlbWVudCB3aWxsXG4gICAgICAgIC8vIGJlIGV4ZWN1dGVkLlxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ICE9PSB0aGlzKSB7XG4gICAgICAgICAgLy8gTGV0IHRoZSBjb21wb25lbnQga25vdyB0aGUgdGFyZ2V0J3Mgc2VsZWN0aW9uIGNoYW5nZWQsIGJ1dCB3aXRob3V0XG4gICAgICAgICAgLy8gcmUtaW52b2tpbmcgdGhlIHNlbGVjdEluZGV4L3NlbGVjdGVkSXRlbSBzZXR0ZXIuXG4gICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1DaGFuZ2VkKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gRm9yY2UgaW5pdGlhbCByZWZyZXNoLlxuICAgICAgdGhpcy5pdGVtc0NoYW5nZWQoKTtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBUYXJnZXRTZWxlY3Rpb247XG59O1xuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuL2NyZWF0ZVN5bWJvbCc7XG5cbmNvbnN0IHBsYXlpbmdTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3BsYXlpbmcnKTtcbmNvbnN0IHNlbGVjdGlvblRpbWVyRHVyYXRpb25TeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3NlbGVjdGlvblRpbWVyRHVyYXRpb24nKTtcbmNvbnN0IHRpbWVyVGltZW91dFN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgndGltZXJUaW1lb3V0Jyk7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBUaW1lclNlbGVjdGlvbi4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIHByb3ZpZGVzIGZvciBhdXRvbWF0aWMgdGltZWQgY2hhbmdlcyBpbiBzZWxlY3Rpb24uXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gaXMgdXNlZnVsIGZvciBjcmVhdGluZyBzbGlkZXNob3ctbGlrZSBlbGVtZW50cy5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIHRoZSBjb21wb25lbnQgdG8gZGVmaW5lIGFuIGBpdGVtc2AgcHJvcGVydHksIGFzIHdlbGwgYXNcbiAgICogYHNlbGVjdEZpcnN0YCBhbmQgYHNlbGVjdE5leHRgIG1ldGhvZHMuIFlvdSBjYW4gaW1wbGVtZW50IHRob3NlIHlvdXJzZWxmLFxuICAgKiBvciB1c2UgdGhlIFtDb250ZW50QXNJdGVtc10oQ29udGVudEFzSXRlbXMubWQpIGFuZFxuICAgKiBbU2luZ2xlU2VsZWN0aW9uXShTaW5nbGVTZWxlY3Rpb24ubWQpIG1peGlucy5cbiAgICovXG4gIGNsYXNzIFRpbWVyU2VsZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICAvLyBTZXQgZGVmYXVsdHMuXG4gICAgICBpZiAodHlwZW9mIHRoaXMucGxheWluZyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5wbGF5aW5nID0gdGhpcy5kZWZhdWx0cy5wbGF5aW5nO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiB0aGlzLnNlbGVjdGlvblRpbWVyRHVyYXRpb24gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uVGltZXJEdXJhdGlvbiA9IHRoaXMuZGVmYXVsdHMuc2VsZWN0aW9uVGltZXJEdXJhdGlvbjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb250ZW50Q2hhbmdlZCgpIHtcbiAgICAgIGlmIChzdXBlci5jb250ZW50Q2hhbmdlZCkgeyBzdXBlci5jb250ZW50Q2hhbmdlZCgpOyB9XG4gICAgICByZXN0YXJ0VGltZXIodGhpcyk7XG4gICAgfVxuXG4gICAgZ2V0IGRlZmF1bHRzKCkge1xuICAgICAgbGV0IGRlZmF1bHRzID0gc3VwZXIuZGVmYXVsdHMgfHwge307XG4gICAgICBkZWZhdWx0cy5wbGF5aW5nID0gZmFsc2U7XG4gICAgICBkZWZhdWx0cy5zZWxlY3Rpb25UaW1lckR1cmF0aW9uID0gMTAwMDtcbiAgICAgIHJldHVybiBkZWZhdWx0cztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCZWdpbiBhdXRvbWF0aWMgcHJvZ3Jlc3Npb24gb2YgdGhlIHNlbGVjdGlvbi5cbiAgICAgKi9cbiAgICBwbGF5KCkge1xuICAgICAgaWYgKHN1cGVyLnBsYXkpIHsgc3VwZXIucGxheSgpOyB9XG4gICAgICBzdGFydFRpbWVyKHRoaXMpO1xuICAgICAgdGhpc1twbGF5aW5nU3ltYm9sXSA9IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGF1c2UgYXV0b21hdGljIHByb2dyZXNzaW9uIG9mIHRoZSBzZWxlY3Rpb24uXG4gICAgICovXG4gICAgcGF1c2UoKSB7XG4gICAgICBpZiAoc3VwZXIucGF1c2UpIHsgc3VwZXIucGF1c2UoKTsgfVxuICAgICAgY2xlYXJUaW1lcih0aGlzKTtcbiAgICAgIHRoaXNbcGxheWluZ1N5bWJvbF0gPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHRoZSBzZWxlY3Rpb24gaXMgYmVpbmcgYXV0b21hdGljYWxseSBhZHZhbmNlZC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG4gICAgZ2V0IHBsYXlpbmcoKSB7XG4gICAgICByZXR1cm4gdGhpc1twbGF5aW5nU3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IHBsYXlpbmcocGxheWluZykge1xuICAgICAgbGV0IHByZXZpb3VzUGxheWluZyA9IHRoaXNbcGxheWluZ1N5bWJvbF07XG4gICAgICBsZXQgcGFyc2VkID0gU3RyaW5nKHBsYXlpbmcpID09PSAndHJ1ZSc7IC8vIENhc3QgdG8gYm9vbGVhblxuICAgICAgaWYgKCdwbGF5aW5nJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5wbGF5aW5nID0gcGxheWluZzsgfVxuICAgICAgaWYgKHBhcnNlZCAhPT0gcHJldmlvdXNQbGF5aW5nKSB7XG4gICAgICAgIGlmIChwbGF5aW5nKSB7XG4gICAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5wYXVzZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBXaGVuIHRoZSBzZWxlY3RlZCBpdGVtIGNoYW5nZXMgKGJlY2F1c2Ugb2Ygc29tZXRoaW5nIHRoaXMgbWl4aW4gZGlkLCBvclxuICAgICAqIHdhcyBjaGFuZ2VkIGJ5IGFuIG91dHNpZGUgYWdlbnQgbGlrZSB0aGUgdXNlciksIHdlIHdhaXQgYmVmb3JlIGFkdmFuY2luZ1xuICAgICAqIHRvIHRoZSBuZXh0IGl0ZW0uIEJ5IHRyaWdnZXJpbmcgdGhlIG5leHQgaXRlbSB0aGlzIHdheSwgd2UgaW1wbGljaXRseSBnZXRcbiAgICAgKiBhIGRlc2lyYWJsZSBiZWhhdmlvcjogaWYgdGhlIHVzZXIgY2hhbmdlcyB0aGUgc2VsZWN0aW9uIChlLmcuLCBpbiBhXG4gICAgICogY2Fyb3VzZWwpLCB3ZSBsZXQgdGhlbSBzZWUgdGhhdCBzZWxlY3Rpb24gc3RhdGUgZm9yIGEgd2hpbGUgYmVmb3JlXG4gICAgICogYWR2YW5jaW5nIHRoZSBzZWxlY3Rpb24gb3Vyc2VsdmVzLlxuICAgICAqL1xuICAgIGdldCBzZWxlY3RlZEl0ZW0oKSB7XG4gICAgICByZXR1cm4gc3VwZXIuc2VsZWN0ZWRJdGVtO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0ZWRJdGVtKGl0ZW0pIHtcbiAgICAgIGlmICgnc2VsZWN0ZWRJdGVtJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEl0ZW0gPSBpdGVtOyB9XG4gICAgICByZXN0YXJ0VGltZXIodGhpcyk7XG4gICAgfVxuXG4gICAgLy8gSW4gY2FzZSB0aGlzIG1peGluIGlzIGJlaW5nIHVzZWQgd2l0aCBUYXJnZXRTZWxlY3Rpb24uXG4gICAgc2VsZWN0ZWRJdGVtQ2hhbmdlZCgpIHtcbiAgICAgIGlmIChzdXBlci5zZWxlY3RlZEl0ZW1DaGFuZ2VkKSB7IHN1cGVyLnNlbGVjdGVkSXRlbUNoYW5nZWQoKTsgfVxuICAgICAgcmVzdGFydFRpbWVyKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSB0aW1lIGluIG1pbGxpc2Vjb25kcyB0aGF0IHdpbGwgZWxhcHNlIGFmdGVyIHRoZSBzZWxlY3Rpb24gY2hhbmdlc1xuICAgICAqIGJlZm9yZSB0aGUgc2VsZWN0aW9uIHdpbGwgYmUgYWR2YW5jZWQgdG8gdGhlIG5leHQgaXRlbSBpbiB0aGUgbGlzdC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9IC0gVGltZSBpbiBtaWxsaXNlY29uZHNcbiAgICAgKiBAZGVmYXVsdCAxMDAwICgxIHNlY29uZClcbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0aW9uVGltZXJEdXJhdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzW3NlbGVjdGlvblRpbWVyRHVyYXRpb25TeW1ib2xdO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0aW9uVGltZXJEdXJhdGlvbih2YWx1ZSkge1xuICAgICAgdGhpc1tzZWxlY3Rpb25UaW1lckR1cmF0aW9uU3ltYm9sXSA9IHBhcnNlSW50KHZhbHVlKTtcbiAgICAgIGlmICgnc2VsZWN0aW9uVGltZXJEdXJhdGlvbicgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0aW9uVGltZXJEdXJhdGlvbiA9IHZhbHVlOyB9XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gVGltZXJTZWxlY3Rpb247XG59O1xuXG5cbmZ1bmN0aW9uIGNsZWFyVGltZXIoZWxlbWVudCkge1xuICBpZiAoZWxlbWVudFt0aW1lclRpbWVvdXRTeW1ib2xdKSB7XG4gICAgY2xlYXJUaW1lb3V0KGVsZW1lbnRbdGltZXJUaW1lb3V0U3ltYm9sXSk7XG4gICAgZWxlbWVudFt0aW1lclRpbWVvdXRTeW1ib2xdID0gbnVsbDtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXN0YXJ0VGltZXIoZWxlbWVudCkge1xuICBjbGVhclRpbWVyKGVsZW1lbnQpO1xuICBpZiAoZWxlbWVudC5wbGF5aW5nICYmIGVsZW1lbnQuaXRlbXMgJiYgZWxlbWVudC5pdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgc3RhcnRUaW1lcihlbGVtZW50KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdGFydFRpbWVyKGVsZW1lbnQpIHtcbiAgLy8gSWYgcGxheSgpIGlzIGNhbGxlZCBtb3JlIHRoYW4gb25jZSwgY2FuY2VsIGFueSBleGlzdGluZyB0aW1lci5cbiAgY2xlYXJUaW1lcihlbGVtZW50KTtcbiAgZWxlbWVudFt0aW1lclRpbWVvdXRTeW1ib2xdID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgc2VsZWN0TmV4dFdpdGhXcmFwKGVsZW1lbnQpO1xuICB9LCBlbGVtZW50LnNlbGVjdGlvblRpbWVyRHVyYXRpb24pO1xufVxuXG4vLyBTZWxlY3QgdGhlIG5leHQgaXRlbSwgd3JhcHBpbmcgdG8gZmlyc3QgaXRlbSBpZiBuZWNlc3NhcnkuXG5mdW5jdGlvbiBzZWxlY3ROZXh0V2l0aFdyYXAoZWxlbWVudCkge1xuICBsZXQgaXRlbXMgPSBlbGVtZW50Lml0ZW1zO1xuICBpZiAoaXRlbXMgJiYgaXRlbXMubGVuZ3RoID4gMCkge1xuICAgIGlmIChlbGVtZW50LnNlbGVjdGVkSW5kZXggPT0gbnVsbCB8fCBlbGVtZW50LnNlbGVjdGVkSW5kZXggPT09IGl0ZW1zLmxlbmd0aCAtIDEpIHtcbiAgICAgIGVsZW1lbnQuc2VsZWN0Rmlyc3QoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5zZWxlY3ROZXh0KCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL2NyZWF0ZVN5bWJvbCc7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IGFic29yYkRlY2VsZXJhdGlvblN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnYWJzb3JiRGVjZWxlcmF0aW9uJyk7XG5jb25zdCBsYXN0RGVsdGFYU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdsYXN0RGVsdGFYJyk7XG5jb25zdCBsYXN0V2hlZWxUaW1lb3V0U3ltYm9sID0gY3JlYXRlU3ltYm9sKCdsYXN0V2hlZWxUaW1lb3V0Jyk7XG5jb25zdCBwb3N0TmF2aWdhdGVEZWxheUNvbXBsZXRlU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdwb3N0TmF2aWdhdGVEZWxheUNvbXBsZXRlJyk7XG5jb25zdCB3aGVlbERpc3RhbmNlU3ltYm9sID0gY3JlYXRlU3ltYm9sKCd3aGVlbERpc3RhbmNlJyk7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBUcmFja3BhZERpcmVjdGlvbi4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIG1hcHMgYSBob3Jpem9udGFsIHRyYWNrcGFkIHN3aXBlIGdlc3R1cmVzIChvciBob3Jpem9udGFsIG1vdXNlXG4gICAqIHdoZWVsIGFjdGlvbnMpIHRvIGRpcmVjdGlvbiBzZW1hbnRpY3MuXG4gICAqXG4gICAqIFlvdSBjYW4gdXNlIHRoaXMgbWl4aW4gd2l0aCBhIG1peGluIGxpa2VcbiAgICogW0RpcmVjdGlvblNlbGVjdGlvbl0oRGlyZWN0aW9uU2VsZWN0aW9uLm1kKSB0byBsZXQgdGhlIHVzZXIgY2hhbmdlIHRoZVxuICAgKiBzZWxlY3Rpb24gd2l0aCB0aGUgdHJhY2twYWQgb3IgbW91c2Ugd2hlZWwuXG4gICAqXG4gICAqIFRvIHJlc3BvbmQgdG8gdGhlIHRyYWNrcGFkLCB3ZSBjYW4gbGlzdGVuIHRvIHRoZSBET00ncyBcIndoZWVsXCIgZXZlbnRzLlxuICAgKiBUaGVzZSBldmVudHMgYXJlIGZpcmVkIGFzIHRoZSB1c2VyIGRyYWdzIHRoZWlyIGZpbmdlcnMgYWNyb3NzIGEgdHJhY2twYWQuXG4gICAqIFVuZm9ydHVuYXRlbHksIGJyb3dzZXJzIGFyZSBtaXNzaW5nIGEgY3JpdGljYWwgZXZlbnQg4oCUwqB0aGVyZSBpcyBubyBldmVudFxuICAgKiB3aGVuIHRoZSB1c2VyICpzdG9wcyogYSBnZXN0dXJlZCBvbiB0aGUgdHJhY2twYWQgb3IgbW91c2Ugd2hlZWwuXG4gICAqXG4gICAqIFRvIG1ha2UgdGhpbmdzIHdvcnNlLCB0aGUgbWFpbnN0cmVhbSBicm93c2VycyBjb250aW51ZSB0byBnZW5lcmF0ZSBmYWtlXG4gICAqIHdoZWVsIGV2ZW50cyBldmVuIGFmdGVyIHRoZSB1c2VyIGhhcyBzdG9wcGVkIGRyYWdnaW5nIHRoZWlyIGZpbmdlcnMuIFRoZXNlXG4gICAqIGZha2UgZXZlbnRzIHNpbXVsYXRlIHRoZSB1c2VyIGdyYWR1YWxseSBzbG93aW5nIGRvd24gdGhlIGRyYWcgdW50aWwgdGhleVxuICAgKiBjb21lIHRvIGEgc21vb3RoIHN0b3AuIEluIHNvbWUgY29udGV4dHMsIHRoZXNlIGZha2Ugd2hlZWwgZXZlbnRzIG1pZ2h0IGJlXG4gICAqIGhlbHBmdWwsIGJ1dCBpbiB0cnlpbmcgdG8gc3VwcGx5IHR5cGljYWwgdHJhY2twYWQgc3dpcGUgbmF2aWdhdGlvbiwgdGhlc2VcbiAgICogZmFrZSBldmVudHMgZ2V0IGluIHRoZSB3YXkuXG4gICAqXG4gICAqIFRoaXMgY29tcG9uZW50IHVzZXMgaGV1cmlzdGljcyB0byB3b3JrIGFyb3VuZCB0aGVzZSBwcm9ibGVtcywgYnV0IHRoZVxuICAgKiBjb21wbGV4IG5hdHVyZSBvZiB0aGUgcHJvYmxlbSBtYWtlIGl0IGV4dHJlbWVseSBkaWZmaWN1bHQgdG8gYWNoaWV2ZSB0aGVcbiAgICogc2FtZSBkZWdyZWUgb2YgdHJhY2twYWQgcmVzcG9uc2l2ZW5lc3MgcG9zc2libGUgd2l0aCBuYXRpdmUgYXBwbGljYXRpb25zLlxuICAgKi9cbiAgY2xhc3MgVHJhY2twYWREaXJlY3Rpb24gZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBldmVudCA9PiB7XG4gICAgICAgIGxldCBoYW5kbGVkID0gd2hlZWwodGhpcywgZXZlbnQpO1xuICAgICAgICBpZiAoaGFuZGxlZCkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmVzZXRXaGVlbFRyYWNraW5nKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSBsZWZ0LlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy5cbiAgICAgKi9cbiAgICBnb0xlZnQoKSB7XG4gICAgICBpZiAoc3VwZXIuZ29MZWZ0KSB7IHJldHVybiBzdXBlci5nb0xlZnQoKTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSByaWdodC5cbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuXG4gICAgICovXG4gICAgZ29SaWdodCgpIHtcbiAgICAgIGlmIChzdXBlci5nb1JpZ2h0KSB7IHJldHVybiBzdXBlci5nb1JpZ2h0KCk7IH1cbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IGltcGxlbWVudGF0aW9uLlxuICAgIGdldCBzaG93VHJhbnNpdGlvbigpIHtcbiAgICAgIHJldHVybiBzdXBlci5zaG93VHJhbnNpdGlvbjtcbiAgICB9XG4gICAgc2V0IHNob3dUcmFuc2l0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoJ3Nob3dUcmFuc2l0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zaG93VHJhbnNpdGlvbiA9IHZhbHVlOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGRpc3RhbmNlIHRoZSB1c2VyIGhhcyBtb3ZlZCB0aGUgZmlyc3QgdG91Y2hwb2ludCBzaW5jZSB0aGUgYmVnaW5uaW5nXG4gICAgICogb2YgYSB0cmFja3BhZC93aGVlbCBvcGVyYXRpb24sIGV4cHJlc3NlZCBhcyBhIGZyYWN0aW9uIG9mIHRoZSBlbGVtZW50J3NcbiAgICAgKiB3aWR0aC5cbiAgICAgKlxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqL1xuICAgIGdldCB0cmF2ZWxGcmFjdGlvbigpIHtcbiAgICAgIHJldHVybiBzdXBlci50cmF2ZWxGcmFjdGlvbjtcbiAgICB9XG4gICAgc2V0IHRyYXZlbEZyYWN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoJ3RyYXZlbEZyYWN0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci50cmF2ZWxGcmFjdGlvbiA9IHZhbHVlOyB9XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gVHJhY2twYWREaXJlY3Rpb247XG59O1xuXG5cbi8vIFRpbWUgd2Ugd2FpdCBmb2xsb3dpbmcgYSBuYXZpZ2F0aW9uIGJlZm9yZSBwYXlpbmcgYXR0ZW50aW9uIHRvIHdoZWVsXG4vLyBldmVudHMgYWdhaW4uXG5jb25zdCBQT1NUX05BVklHQVRFX1RJTUUgPSAyNTA7XG5cbi8vIFRpbWUgd2Ugd2FpdCBhZnRlciB0aGUgbGFzdCB3aGVlbCBldmVudCBiZWZvcmUgd2UgcmVzZXQgdGhpbmdzLlxuY29uc3QgV0hFRUxfVElNRSA9IDEwMDtcblxuXG4vLyBGb2xsb3dpbmcgYSBuYXZpZ2F0aW9uLCBwYXJ0aWFsbHkgcmVzZXQgb3VyIHdoZWVsIHRyYWNraW5nLlxuZnVuY3Rpb24gcG9zdE5hdmlnYXRlKGVsZW1lbnQpIHtcbiAgZWxlbWVudC50cmF2ZWxGcmFjdGlvbiA9IDA7XG4gIGVsZW1lbnRbd2hlZWxEaXN0YW5jZVN5bWJvbF0gPSAwO1xuICBlbGVtZW50W3Bvc3ROYXZpZ2F0ZURlbGF5Q29tcGxldGVTeW1ib2xdID0gdHJ1ZTtcbiAgZWxlbWVudFthYnNvcmJEZWNlbGVyYXRpb25TeW1ib2xdID0gdHJ1ZTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZWxlbWVudFtwb3N0TmF2aWdhdGVEZWxheUNvbXBsZXRlU3ltYm9sXSA9IGZhbHNlO1xuICB9LCBQT1NUX05BVklHQVRFX1RJTUUpO1xufVxuXG4vLyBSZXNldCBhbGwgc3RhdGUgcmVsYXRlZCB0byB0aGUgdHJhY2tpbmcgb2YgdGhlIHdoZWVsLlxuZnVuY3Rpb24gcmVzZXRXaGVlbFRyYWNraW5nKGVsZW1lbnQpIHtcbiAgZWxlbWVudC50cmF2ZWxGcmFjdGlvbiA9IDA7XG4gIGVsZW1lbnRbd2hlZWxEaXN0YW5jZVN5bWJvbF0gPSAwO1xuICBlbGVtZW50W2xhc3REZWx0YVhTeW1ib2xdID0gMDtcbiAgZWxlbWVudFthYnNvcmJEZWNlbGVyYXRpb25TeW1ib2xdID0gZmFsc2U7XG4gIGVsZW1lbnRbcG9zdE5hdmlnYXRlRGVsYXlDb21wbGV0ZVN5bWJvbF0gPSBmYWxzZTtcbiAgaWYgKGVsZW1lbnRbbGFzdFdoZWVsVGltZW91dFN5bWJvbF0pIHtcbiAgICBjbGVhclRpbWVvdXQoZWxlbWVudFtsYXN0V2hlZWxUaW1lb3V0U3ltYm9sXSk7XG4gICAgZWxlbWVudFtsYXN0V2hlZWxUaW1lb3V0U3ltYm9sXSA9IG51bGw7XG4gIH1cbn1cblxuLy8gRGVmaW5lIG91ciBvd24gc2lnbiBmdW5jdGlvbiwgc2luY2UgKGFzIG9mIE1heSAyMDE1KSwgU2FmYXJpIGFuZCBJRSBkb24ndFxuLy8gc3VwcGx5IE1hdGguc2lnbigpLlxuZnVuY3Rpb24gc2lnbih4KSB7XG4gIHJldHVybiAoeCA9PT0gMCkgP1xuICAgIDAgOlxuICAgICh4ID4gMCkgP1xuICAgICAgMSA6XG4gICAgICAtMTtcbn1cblxuLy8gVE9ETzogRGFtcGluZywgb3Igc29tZSBvdGhlciB0cmVhdG1lbnQgZm9yIGdvaW5nIHBhc3QgdGhlIGVuZHMuXG5cbi8qXG4gKiBBIHdoZWVsIGV2ZW50IGhhcyBiZWVuIGdlbmVyYXRlZC4gVGhpcyBjb3VsZCBiZSBhIHJlYWwgd2hlZWwgZXZlbnQsIG9yIGl0XG4gKiBjb3VsZCBiZSBmYWtlIChzZWUgbm90ZXMgaW4gdGhlIGhlYWRlcikuXG4gKlxuICogVGhpcyBoYW5kbGVyIHVzZXMgc2V2ZXJhbCBzdHJhdGVnaWVzIHRvIHRyeSB0byBhcHByb3hpbWF0ZSBuYXRpdmUgdHJhY2twYWRcbiAqIHN3aXBlIG5hdmlnYXRpb24uXG4gKlxuICogSWYgdGhlIHVzZXIgaGFzIGRyYWdnZWQgZW5vdWdoIHRvIGNhdXNlIGEgbmF2aWdhdGlvbiwgdGhlbiBmb3IgYSBzaG9ydFxuICogZGVsYXkgZm9sbG93aW5nIHRoYXQgbmF2aWdhdGlvbiwgc3Vic2VxdWVudCB3aGVlbCBldmVudHMgd2lsbCBiZSBpZ25vcmVkLlxuICpcbiAqIEZ1cnRoZXJtb3JlLCBmb2xsd293aW5nIGEgbmF2aWdhdGlvbiwgd2UgaWdub3JlIGFsbCB3aGVlbCBldmVudHMgdW50aWwgd2VcbiAqIHJlY2VpdmUgYXQgbGVhc3Qgb25lIGV2ZW50IHdoZXJlIHRoZSBldmVudCdzIGRlbHRhWCAoZGlzdGFuY2UgdHJhdmVsZWQpIGlzXG4gKiAqZ3JlYXRlciogdGhhbiB0aGUgcHJldmlvdXMgZXZlbnQncyBkZWx0YVguIFRoaXMgaGVscHMgdXMgZmlsdGVyIG91dCB0aGVcbiAqIGZha2Ugd2hlZWwgZXZlbnRzIGdlbmVyYXRlZCBieSB0aGUgYnJvd3NlciB0byBzaW11bGF0ZSBkZWNlbGVyYXRpb24uXG4gKlxuICovXG5mdW5jdGlvbiB3aGVlbChlbGVtZW50LCBldmVudCkge1xuXG4gIC8vIFNpbmNlIHdlIGhhdmUgYSBuZXcgd2hlZWwgZXZlbnQsIHJlc2V0IG91ciB0aW1lciB3YWl0aW5nIGZvciB0aGUgbGFzdFxuICAvLyB3aGVlbCBldmVudCB0byBwYXNzLlxuICBpZiAoZWxlbWVudFtsYXN0V2hlZWxUaW1lb3V0U3ltYm9sXSkge1xuICAgIGNsZWFyVGltZW91dChlbGVtZW50W2xhc3RXaGVlbFRpbWVvdXRTeW1ib2xdKTtcbiAgfVxuICBlbGVtZW50W2xhc3RXaGVlbFRpbWVvdXRTeW1ib2xdID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgd2hlZWxUaW1lZE91dChlbGVtZW50KTtcbiAgfSwgV0hFRUxfVElNRSk7XG5cbiAgbGV0IGRlbHRhWCA9IGV2ZW50LmRlbHRhWDtcbiAgbGV0IGRlbHRhWSA9IGV2ZW50LmRlbHRhWTtcblxuICAvLyBTZWUgaWYgZWxlbWVudCBldmVudCByZXByZXNlbnRzIGFjY2VsZXJhdGlvbiBvciBkZWNlbGVyYXRpb24uXG4gIGxldCBhY2NlbGVyYXRpb24gPSBzaWduKGRlbHRhWCkgKiAoZGVsdGFYIC0gZWxlbWVudFtsYXN0RGVsdGFYU3ltYm9sXSk7XG4gIGVsZW1lbnRbbGFzdERlbHRhWFN5bWJvbF0gPSBkZWx0YVg7XG4gIC8vIGNvbnNvbGUubG9nKGRlbHRhWCArIFwiIFwiICsgYWNjZWxlcmF0aW9uICsgXCIgXCIgKyBlbGVtZW50W2Fic29yYkRlY2VsZXJhdGlvblN5bWJvbF0gKyBcIiBcIiArIGVsZW1lbnRbcG9zdE5hdmlnYXRlRGVsYXlDb21wbGV0ZVN5bWJvbF0pO1xuXG4gIGlmIChNYXRoLmFicyhkZWx0YVgpIDwgTWF0aC5hYnMoZGVsdGFZKSkge1xuICAgIC8vIE1vdmUgd2FzIG1vc3RseSB2ZXJ0aWNhbC4gVGhlIHVzZXIgbWF5IGJlIHRyeWluZyBzY3JvbGwgd2l0aCB0aGVcbiAgICAvLyB0cmFja3BhZC93aGVlbC4gVG8gYmUgb24gdGhlIHNhZmUsIHdlIGlnbm9yZSBzdWNoIGV2ZW50cy5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoZWxlbWVudFtwb3N0TmF2aWdhdGVEZWxheUNvbXBsZXRlU3ltYm9sXSkge1xuICAgIC8vIEl0J3MgdG9vIHNvb24gYWZ0ZXIgYSBuYXZpZ2F0aW9uOyBpZ25vcmUgdGhlIGV2ZW50LlxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cblxuICBpZiAoYWNjZWxlcmF0aW9uID4gMCkge1xuICAgIC8vIFRoZSBldmVudHMgYXJlIG5vdCAob3IgYXJlIG5vIGxvbmdlcikgZGVjZWxlcmF0aW5nLCBzbyB3ZSBjYW4gc3RhcnRcbiAgICAvLyBwYXlpbmcgYXR0ZW50aW9uIHRvIHRoZW0gYWdhaW4uXG4gICAgZWxlbWVudFthYnNvcmJEZWNlbGVyYXRpb25TeW1ib2xdID0gZmFsc2U7XG4gIH0gZWxzZSBpZiAoZWxlbWVudFthYnNvcmJEZWNlbGVyYXRpb25TeW1ib2xdKSB7XG4gICAgLy8gVGhlIHdoZWVsIGV2ZW50IHdhcyBsaWtlbHkgZmFrZWQgdG8gc2ltdWxhdGUgZGVjZWxlcmF0aW9uOyBpZ25vcmUgaXQuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBlbGVtZW50W3doZWVsRGlzdGFuY2VTeW1ib2xdICs9IGRlbHRhWDtcblxuICAvLyBVcGRhdGUgdGhlIHRyYXZlbCBmcmFjdGlvbiBvZiB0aGUgZWxlbWVudCBiZWluZyBuYXZpZ2F0ZWQuXG4gIGxldCB3aWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gIGxldCB0cmF2ZWxGcmFjdGlvbiA9IHdpZHRoID4gMCA/XG4gICAgZWxlbWVudFt3aGVlbERpc3RhbmNlU3ltYm9sXSAvIHdpZHRoIDpcbiAgICAwO1xuICBlbGVtZW50LnNob3dUcmFuc2l0aW9uID0gZmFsc2U7XG4gIHRyYXZlbEZyYWN0aW9uID0gc2lnbih0cmF2ZWxGcmFjdGlvbikgKiBNYXRoLm1pbihNYXRoLmFicyh0cmF2ZWxGcmFjdGlvbiksIDEpO1xuICBlbGVtZW50LnRyYXZlbEZyYWN0aW9uID0gdHJhdmVsRnJhY3Rpb247XG5cbiAgLy8gSWYgdGhlIHVzZXIgaGFzIGRyYWdnZWQgZW5vdWdoIHRvIHJlYWNoIHRoZSBwcmV2aW91cy9uZXh0IGl0ZW0sIHRoZW5cbiAgLy8gY29tcGxldGUgYSBuYXZpZ2F0aW9uIHRvIHRoYXQgaXRlbS5cbiAgaWYgKHRyYXZlbEZyYWN0aW9uID09PSAxKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJnb1JpZ2h0XCIpO1xuICAgIGVsZW1lbnQuc2hvd1RyYW5zaXRpb24gPSB0cnVlO1xuICAgIGVsZW1lbnQuZ29SaWdodCgpO1xuICAgIHBvc3ROYXZpZ2F0ZShlbGVtZW50KTtcbiAgfSBlbHNlIGlmICh0cmF2ZWxGcmFjdGlvbiA9PT0gLTEpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcImdvTGVmdFwiKTtcbiAgICBlbGVtZW50LnNob3dUcmFuc2l0aW9uID0gdHJ1ZTtcbiAgICBlbGVtZW50LmdvTGVmdCgpO1xuICAgIHBvc3ROYXZpZ2F0ZShlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG4vLyBBIHN1ZmZpY2llbnRseSBsb25nIHBlcmlvZCBvZiB0aW1lIGhhcyBwYXNzZWQgc2luY2UgdGhlIGxhc3Qgd2hlZWwgZXZlbnQuXG4vLyBXZSBzbmFwIHRoZSBzZWxlY3Rpb24gdG8gdGhlIGNsb3Nlc3QgaXRlbSwgdGhlbiByZXNldCBvdXIgc3RhdGUuXG5mdW5jdGlvbiB3aGVlbFRpbWVkT3V0KGVsZW1lbnQpIHtcbiAgLy8gY29uc29sZS5sb2coXCJ0aW1lb3V0XCIpO1xuXG4gIC8vIFNuYXAgdG8gdGhlIGNsb3Nlc3QgaXRlbS5cbiAgZWxlbWVudC5zaG93VHJhbnNpdGlvbiA9IHRydWU7XG4gIGxldCB0cmF2ZWxGcmFjdGlvbiA9IGVsZW1lbnQudHJhdmVsRnJhY3Rpb247XG4gIGlmICh0cmF2ZWxGcmFjdGlvbiA+PSAwLjUpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcInNuYXAgcmlnaHRcIik7XG4gICAgZWxlbWVudC5nb1JpZ2h0KCk7XG4gIH0gZWxzZSBpZiAodHJhdmVsRnJhY3Rpb24gPD0gLTAuNSkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwic25hcCBsZWZ0XCIpO1xuICAgIGVsZW1lbnQuZ29MZWZ0KCk7XG4gIH1cblxuICAvLyBUT0RPOiBMaXN0ZW4gZm9yIHRoZSB0cmFuc2l0aW9uIHRvIGNvbXBsZXRlLCBhbmQgdGhlbiByZXN0b3JlXG4gIC8vIHNob3dUcmFuc2l0aW9uIHRvIGZhbHNlIChvciB0aGUgcHJldmlvdXMgdmFsdWUpLlxuXG4gIHJlc2V0V2hlZWxUcmFja2luZyhlbGVtZW50KTtcbn1cbiIsIi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIGNyZWF0ZSBhIHN5bWJvbCB0aGF0IGNhbiBiZSB1c2VkIGZvciBhc3NvY2lhdGluZyBwcml2YXRlXG4gKiBkYXRhIHdpdGggYW4gZWxlbWVudC5cbiAqXG4gKiBNaXhpbnMgYW5kIGNvbXBvbmVudCBjbGFzc2VzIG9mdGVuIHdhbnQgdG8gYXNzb2NpYXRlIHByaXZhdGUgZGF0YSB3aXRoIGFuXG4gKiBlbGVtZW50IGluc3RhbmNlLCBidXQgSmF2YVNjcmlwdCBkb2VzIG5vdCBoYXZlIGRpcmVjdCBzdXBwb3J0IGZvciB0cnVlXG4gKiBwcml2YXRlIHByb3BlcnRpZXMuIE9uZSBhcHByb2FjaCBpcyB0byB1c2UgdGhlXG4gKiBbU3ltYm9sXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9TeW1ib2wpXG4gKiBkYXRhIHR5cGUgdG8gc2V0IGFuZCByZXRyaWV2ZSBkYXRhIG9uIGFuIGVsZW1lbnQuXG4gKlxuICogVW5mb3J0dW5hdGVseSwgdGhlIFN5bWJvbCB0eXBlIGlzIG5vdCBhdmFpbGFibGUgaW4gSW50ZXJuZXQgRXhwbG9yZXIgMTEuIFRoZVxuICogYGNyZWF0ZVN5bWJvbGAgaGVscGVyIGZ1bmN0aW9uIGV4aXN0cyBhcyBhIHdvcmthcm91bmQgZm9yIElFIDExLiBSYXRoZXIgdGhhblxuICogcmV0dXJuaW5nIGEgdHJ1ZSBTeW1ib2wsIGl0IHNpbXBseSByZXR1cm5zIGFuIHVuZGVyc2NvcmUtcHJlZml4ZWQgc3RyaW5nLlxuICpcbiAqIFVzYWdlOlxuICpcbiAqICAgICBjb25zdCBmb29TeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2ZvbycpO1xuICpcbiAqICAgICBjbGFzcyBNeUVsZW1lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gKiAgICAgICBnZXQgZm9vKCkge1xuICogICAgICAgICByZXR1cm4gdGhpc1tmb29TeW1ib2xdO1xuICogICAgICAgfVxuICogICAgICAgc2V0IGZvbyh2YWx1ZSkge1xuICogICAgICAgICB0aGlzW2Zvb1N5bWJvbF0gPSB2YWx1ZTtcbiAqICAgICAgIH1cbiAqICAgICB9XG4gKlxuICogSW4gSUUgMTEsIHRoaXMgc2FtcGxlIHdpbGwgXCJoaWRlXCIgZGF0YSBiZWhpbmQgYW4gaW5zdGFuY2UgcHJvcGVydHkgdGhpcy5fZm9vLlxuICogVGhlIHVzZSBvZiB0aGUgdW5kZXJzY29yZSBpcyBtZWFudCB0byByZWR1Y2UgKG5vdCBlbGltaW5hdGUpIHRoZSBwb3RlbnRpYWxcbiAqIGZvciBuYW1lIGNvbmZsaWN0cywgYW5kIGRpc2NvdXJhZ2UgKG5vdCBwcmV2ZW50KSBleHRlcm5hbCBhY2Nlc3MgdG8gdGhpc1xuICogZGF0YS4gSW4gbW9kZXJuIGJyb3dzZXJzLCB0aGUgYWJvdmUgY29kZSB3aWxsIGVsaW1pbmF0ZSB0aGUgcG90ZW50aWFsIG9mXG4gKiBuYW1pbmcgY29uZmxpY3RzLCBhbmQgYmV0dGVyIGhpZGUgdGhlIGRhdGEgYmVoaW5kIGEgcmVhbCBTeW1ib2wuXG4gKlxuICogQGZ1bmN0aW9uIGNyZWF0ZVN5bWJvbFxuICogQHBhcmFtIHtzdHJpbmd9IGRlc2NyaXB0aW9uIC0gQSBzdHJpbmcgdG8gaWRlbnRpZnkgdGhlIHN5bWJvbCB3aGVuIGRlYnVnZ2luZ1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTeW1ib2woZGVzY3JpcHRpb24pIHtcbiAgcmV0dXJuIHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgP1xuICAgIFN5bWJvbChkZXNjcmlwdGlvbikgOlxuICAgIGBfJHtkZXNjcmlwdGlvbn1gO1xufVxuIiwiLypcbiAqIE1pY3JvdGFzayBoZWxwZXIgZm9yIElFIDExLlxuICpcbiAqIEV4ZWN1dGluZyBhIGZ1bmN0aW9uIGFzIGEgbWljcm90YXNrIGlzIHRyaXZpYWwgaW4gYnJvd3NlcnMgdGhhdCBzdXBwb3J0XG4gKiBwcm9taXNlcywgd2hvc2UgdGhlbigpIGNsYXVzZXMgdXNlIG1pY3JvdGFzayB0aW1pbmcuIElFIDExIGRvZXNuJ3Qgc3VwcG9ydFxuICogcHJvbWlzZXMsIGJ1dCBkb2VzIHN1cHBvcnQgTXV0YXRpb25PYnNlcnZlcnMsIHdoaWNoIGFyZSBhbHNvIGV4ZWN1dGVkIGFzXG4gKiBtaWNyb3Rhc2tzLiBTbyB0aGlzIGhlbHBlciB1c2VzIGFuIE11dGF0aW9uT2JzZXJ2ZXIgdG8gYWNoaWV2ZSBtaWNyb3Rhc2tcbiAqIHRpbWluZy5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9qYWtlYXJjaGliYWxkLmNvbS8yMDE1L3Rhc2tzLW1pY3JvdGFza3MtcXVldWVzLWFuZC1zY2hlZHVsZXMvXG4gKlxuICogSW5zcGlyZWQgYnkgUG9seW1lcidzIGFzeW5jKCkgZnVuY3Rpb24uXG4gKi9cblxuXG4vLyBUaGUgcXVldWUgb2YgcGVuZGluZyBjYWxsYmFja3MgdG8gYmUgZXhlY3V0ZWQgYXMgbWljcm90YXNrcy5cbmxldCBjYWxsYmFja3MgPSBbXTtcblxuLy8gQ3JlYXRlIGFuIGVsZW1lbnQgdGhhdCB3ZSB3aWxsIG1vZGlmeSB0byBmb3JjZSBvYnNlcnZhYmxlIG11dGF0aW9ucy5cbmxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuXG4vLyBBIG1vbm90b25pY2FsbHktaW5jcmVhc2luZyB2YWx1ZS5cbmxldCBjb3VudGVyID0gMDtcblxuXG4vKipcbiAqIEFkZCBhIGNhbGxiYWNrIHRvIHRoZSBtaWNyb3Rhc2sgcXVldWUuXG4gKlxuICogVGhpcyB1c2VzIGEgTXV0YXRpb25PYnNlcnZlciBzbyB0aGF0IGl0IHdvcmtzIG9uIElFIDExLlxuICpcbiAqIE5PVEU6IElFIDExIG1heSBhY3R1YWxseSB1c2UgdGltZW91dCB0aW1pbmcgd2l0aCBNdXRhdGlvbk9ic2VydmVycy4gVGhpc1xuICogbmVlZHMgbW9yZSBpbnZlc3RpZ2F0aW9uLlxuICpcbiAqIEBmdW5jdGlvbiBtaWNyb3Rhc2tcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pY3JvdGFzayhjYWxsYmFjaykge1xuICBjYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gIC8vIEZvcmNlIGEgbXV0YXRpb24uXG4gIGVsZW1lbnQudGV4dENvbnRlbnQgPSArK2NvdW50ZXI7XG59XG5cblxuLy8gRXhlY3V0ZSBhbnkgcGVuZGluZyBjYWxsYmFja3MuXG5mdW5jdGlvbiBleGVjdXRlQ2FsbGJhY2tzKCkge1xuICB3aGlsZSAoY2FsbGJhY2tzLmxlbmd0aCA+IDApIHtcbiAgICBsZXQgY2FsbGJhY2sgPSBjYWxsYmFja3Muc2hpZnQoKTtcbiAgICBjYWxsYmFjaygpO1xuICB9XG59XG5cblxuLy8gQ3JlYXRlIHRoZSBvYnNlcnZlci5cbmxldCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGV4ZWN1dGVDYWxsYmFja3MpO1xub2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50LCB7XG4gIGNoYXJhY3RlckRhdGE6IHRydWVcbn0pO1xuIiwiLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gZm9yIHJlbmRlcmluZyBhbiBhcnJheSBvZiBpdGVtcyBhcyBlbGVtZW50cy5cbiAqXG4gKiBUaGlzIGlzIG5vdCBhIG1peGluLCBidXQgYSBmdW5jdGlvbiBjb21wb25lbnRzIGNhbiB1c2UgaWYgdGhleSBuZWVkIHRvXG4gKiBnZW5lcmF0ZSBhIHNldCBvZiBlbGVtZW50cyBmb3IgdGhlIGl0ZW1zIGluIGFuIGFycmF5LlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gd2lsbCByZXVzZSBleGlzdGluZyBlbGVtZW50cyBpZiBwb3NzaWJsZS4gRS5nLiwgaWYgaXQgaXMgY2FsbGVkXG4gKiB0byByZW5kZXIgYW4gYXJyYXkgb2YgNCBpdGVtcywgYW5kIGxhdGVyIGNhbGxlZCB0byByZW5kZXIgYW4gYXJyYXkgb2YgNVxuICogaXRlbXMsIGl0IGNhbiByZXVzZSB0aGUgZXhpc3RpbmcgNCBpdGVtcywgY3JlYXRpbmcganVzdCBvbmUgbmV3IGVsZW1lbnQuXG4gKiBOb3RlLCBob3dldmVyLCB0aGF0IHRoaXMgcmUtcmVuZGVyaW5nIGlzIG5vdCBhdXRvbWF0aWMuIElmLCBhZnRlciBjYWxsaW5nXG4gKiB0aGlzIGZ1bmN0aW9uLCB5b3UgbWFuaXB1bGF0ZSB0aGUgYXJyYXkgeW91IHVzZWQsIHlvdSBtdXN0IHN0aWxsIGNhbGwgdGhpc1xuICogZnVuY3Rpb24gYWdhaW4gdG8gcmUtcmVuZGVyIHRoZSBhcnJheS5cbiAqXG4gKiBUaGUgYHJlbmRlckl0ZW1gIHBhcmFtZXRlciB0YWtlcyBhIGZ1bmN0aW9uIG9mIHR3byBhcmd1bWVudHM6IGFuIGl0ZW0gdG9cbiAqIHRvIHJlbmRlciwgYW5kIGFuIGV4aXN0aW5nIGVsZW1lbnQgKGlmIG9uZSBleGlzdHMpIHdoaWNoIGNhbiBiZSByZXB1cnBvc2VkIHRvXG4gKiByZW5kZXIgdGhhdCBpdGVtLiBJZiB0aGUgbGF0dGVyIGFyZ3VtZW50IGlzIG51bGwsIHRoZSBgcmVuZGVySXRlbSgpYCBmdW5jdGlvblxuICogc2hvdWxkIGNyZWF0ZSBhIG5ldyBlbGVtZW50IGFuZCByZXR1cm4gaXQuIFRoZSBmdW5jdGlvbiBzaG91bGQgZG8gdGhlIHNhbWVcbiAqIGlmIHRoZSBzdXBwbGllZCBleGlzdGluZyBlbGVtZW50IGlzIG5vdCBzdWl0YWJsZSBmb3IgcmVuZGVyaW5nIHRoZSBnaXZlblxuICogaXRlbTsgdGhlIHJldHVybmVkIGVsZW1lbnQgd2lsbCBiZSB1c2VkIHRvIHJlcGxhY2UgdGhlIGV4aXN0aW5nIG9uZS4gSWYgdGhlXG4gKiBleGlzdGluZyBlbGVtZW50ICppcyogc3VpdGFibGUsIHRoZSBmdW5jdGlvbiBjYW4gc2ltcGx5IHVwZGF0ZSBpdCBhbmQgcmV0dXJuXG4gKiBpdCBhcyBpcy5cbiAqXG4gKiBFeGFtcGxlOiBUaGUgZm9sbG93aW5nIHdpbGwgcmVuZGVyIGFuIGFycmF5IG9mIHN0cmluZ3MgaW4gZGl2cyBhcyBjaGlsZHJlblxuICogb2YgdGhlIGBjb250YWluZXJgIGVsZW1lbnQ6XG4gKlxuICogICAgIGxldCBzdHJpbmdzID0gWydhJywgJ2InLCAnYycsIC4uLl07XG4gKiAgICAgbGV0IGNvbnRhaW5lciA9IHRoaXMucXVlcnlTZWxlY3RvciguLi4pO1xuICogICAgIHJlbmRlckFycmF5QXNFbGVtZW50cyhzdHJpbmdzLCBjb250YWluZXIsIChzdHJpbmcsIGVsZW1lbnQpID0+IHtcbiAqICAgICAgIGlmICghZWxlbWVudCkge1xuICogICAgICAgICAvLyBObyBlbGVtZW50IGV4aXN0cyB5ZXQsIHNvIGNyZWF0ZSBhIG5ldyBvbmUuXG4gKiAgICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAqICAgICAgIH1cbiAqICAgICAgIC8vIFNldC91cGRhdGUgdGhlIHRleHQgY29udGVudCBvZiB0aGUgZWxlbWVudC5cbiAqICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBzdHJpbmc7XG4gKiAgICAgICByZXR1cm4gZWxlbWVudDtcbiAqICAgICB9KTtcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBpdGVtcyAtIHRoZSBpdGVtcyB0byByZW5kZXJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRhaW5lciAtIHRoZSBwYXJlbnQgdGhhdCB3aWxsIGhvbGQgdGhlIGVsZW1lbnRzXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSByZW5kZXJJdGVtIC0gcmV0dXJucyBhIG5ldyBlbGVtZW50IGZvciBhbiBpdGVtLCBvclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcHVycG9zZXMgYW4gZXhpc3RpbmcgZWxlbWVudCBmb3IgYW4gaXRlbVxuICovXG5mdW5jdGlvbiByZW5kZXJBcnJheUFzRWxlbWVudHMoaXRlbXMsIGNvbnRhaW5lciwgcmVuZGVySXRlbSkge1xuICAvLyBDcmVhdGUgYSBuZXcgc2V0IG9mIGVsZW1lbnRzIGZvciB0aGUgY3VycmVudCBpdGVtcy5cbiAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICBsZXQgb2xkRWxlbWVudCA9IGNvbnRhaW5lci5jaGlsZE5vZGVzW2luZGV4XTtcbiAgICBsZXQgbmV3RWxlbWVudCA9IHJlbmRlckl0ZW0oaXRlbSwgb2xkRWxlbWVudCk7XG4gICAgaWYgKG5ld0VsZW1lbnQpIHtcbiAgICAgIGlmICghb2xkRWxlbWVudCkge1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmV3RWxlbWVudCk7XG4gICAgICB9IGVsc2UgaWYgKG5ld0VsZW1lbnQgIT09IG9sZEVsZW1lbnQpIHtcbiAgICAgICAgY29udGFpbmVyLnJlcGxhY2VDaGlsZChuZXdFbGVtZW50LCBvbGRFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIC8vIElmIHRoZSBhcnJheSBzaHJhbmssIHJlbW92ZSB0aGUgZXh0cmEgZWxlbWVudHMgd2hpY2ggYXJlIG5vIGxvbmdlciBuZWVkZWQuXG4gIHdoaWxlIChjb250YWluZXIuY2hpbGROb2Rlcy5sZW5ndGggPiBpdGVtcy5sZW5ndGgpIHtcbiAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmNoaWxkTm9kZXNbaXRlbXMubGVuZ3RoXSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyQXJyYXlBc0VsZW1lbnRzO1xuIiwiLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gZm9yIHN0YW5kYXJkIGNsYXNzTGlzdC50b2dnbGUoKSBiZWhhdmlvciBvbiBvbGQgYnJvd3NlcnMsXG4gKiBuYW1lbHkgSUUgMTEuXG4gKlxuICogVGhlIHN0YW5kYXJkXG4gKiBbY2xhc3NsaXN0XShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRWxlbWVudC9jbGFzc0xpc3QpXG4gKiBvYmplY3QgaGFzIGEgYHRvZ2dsZSgpYCBmdW5jdGlvbiB0aGF0IHN1cHBvcnRzIGEgc2Vjb25kIEJvb2xlYW4gcGFyYW1ldGVyXG4gKiB0aGF0IGNhbiBiZSB1c2VkIHRvIHN1Y2NpbmN0bHkgdHVybiBhIGNsYXNzIG9uIG9yIG9mZi4gVGhpcyBmZWF0dXJlIGlzIG9mdGVuXG4gKiB1c2VmdWwgaW4gZGVzaWduaW5nIGN1c3RvbSBlbGVtZW50cywgd2hpY2ggbWF5IHdhbnQgdG8gZXh0ZXJuYWxseSByZWZsZWN0XG4gKiBjb21wb25lbnQgc3RhdGUgaW4gYSBDU1MgY2xhc3MgdGhhdCBjYW4gYmUgdXNlZCBmb3Igc3R5bGluZyBwdXJwb3Nlcy5cbiAqXG4gKiBVbmZvcnR1bmF0ZWx5LCBJRSAxMSBkb2VzIG5vdCBzdXBwb3J0IHRoZSBCb29sZWFuIHBhcmFtZXRlciB0b1xuICogYGNsYXNzTGlzdC50b2dnbGUoKWAuIFRoaXMgaGVscGVyIGZ1bmN0aW9uIGJlaGF2ZXMgbGlrZSB0aGUgc3RhbmRhcmRcbiAqIGB0b2dnbGUoKWAsIGluY2x1ZGluZyBzdXBwb3J0IGZvciB0aGUgQm9vbGVhbiBwYXJhbWV0ZXIsIHNvIHRoYXQgaXQgY2FuIGJlXG4gKiB1c2VkIGV2ZW4gb24gSUUgMTEuXG4gKlxuICogQGZ1bmN0aW9uIHRvZ2dsZUNsYXNzXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gVGhlIGVsZW1lbnQgdG8gbW9kaWZ5XG4gKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIC0gVGhlIGNsYXNzIHRvIGFkZC9yZW1vdmVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZvcmNlXSAtIEZvcmNlIHRoZSBjbGFzcyB0byBiZSBhZGRlZCAoaWYgdHJ1ZSkgb3IgcmVtb3ZlZFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgKGlmIGZhbHNlKVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b2dnbGVDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUsIGZvcmNlKSB7XG4gIGxldCBjbGFzc0xpc3QgPSBlbGVtZW50LmNsYXNzTGlzdDtcbiAgbGV0IGFkZENsYXNzID0gKHR5cGVvZiBmb3JjZSA9PT0gJ3VuZGVmaW5lZCcpID9cbiAgICAhY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkgOlxuICAgIGZvcmNlO1xuICBpZiAoYWRkQ2xhc3MpIHtcbiAgICBjbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICB9XG4gIHJldHVybiBhZGRDbGFzcztcbn1cbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvY3JlYXRlU3ltYm9sJztcbmltcG9ydCBXcmFwcGVkU3RhbmRhcmRFbGVtZW50IGZyb20gJy4uLy4uL2Jhc2ljLXdyYXBwZWQtc3RhbmRhcmQtZWxlbWVudC9zcmMvV3JhcHBlZFN0YW5kYXJkRWxlbWVudCc7XG5pbXBvcnQgdG9nZ2xlQ2xhc3MgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvdG9nZ2xlQ2xhc3MnO1xuXG5cbi8vIFN5bWJvbHMgZm9yIHByaXZhdGUgZGF0YSBtZW1iZXJzIG9uIGFuIGVsZW1lbnQuXG5jb25zdCBhcmVhTGlua1N5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnYXJlYUxpbmsnKTtcblxuXG4vKipcbiAqIEFuIGFuY2hvciAobGluaykgdGhhdCBoaWdobGlnaHRzIGl0c2VsZiB3aGVuIGl0cyBkZXN0aW5hdGlvbiBtYXRjaGVzIHRoZVxuICogY3VycmVudCBsb2NhdGlvbi5cbiAqXG4gKiBbTGl2ZSBkZW1vXShodHRwOi8vYmFzaWN3ZWJjb21wb25lbnRzLm9yZy9iYXNpYy13ZWItY29tcG9uZW50cy9wYWNrYWdlcy9iYXNpYy1jdXJyZW50LWFuY2hvci8pXG4gKlxuICogU3VjaCBhIGxpbmsgY29tbW9ubHkgYXBwZWFycyBpbiB0b29sYmFycywgc2lkZSBiYXJzLCBhbmQgb3RoZXIgbmF2aWdhdGlvblxuICogZWxlbWVudHMuIEluIHRoZXNlIHNpdHVhdGlvbnMsIHlvdSBnZW5lcmFsbHkgd2FudCB0aGUgdXNlciB0byB1bmRlcnN0YW5kIHdoYXRcbiAqIHBhZ2Ugb3IgYXJlYSB0aGUgdXNlciBpcyBhbHJlYWR5IG9uLlxuICpcbiAqIFdoZW4gdGhlIGxpbmsgaXMgY3VycmVudCDigJQgd2hlbiBpdCBwb2ludHMgdG8gdGhlIGN1cnJlbnQgbG9jYXRpb24g4oCUIHRoZVxuICogbGluayB3aWxsIGhhdmUgdGhlIENTUyBgY3VycmVudGAgY2xhc3MgYXBwbGllZCB0byBpdCwgYW5kIGl0cyBgY3VycmVudGBcbiAqIHByb3BlcnR5IHdpbGwgYmUgdHJ1ZS5cbiAqXG4gKiBOb3RlOiBvbmUgbGltaXRhdGlvbiBvZiB0aGlzIGNvbXBvbmVudCBpcyB0aGF0LCBieSBkZWZhdWx0LCB0aGUgbGluayBkb2VzXG4gKiAqbm90KiBzaG93IHRoZSBzdGFuZGFyZCBsaW5rIGNvbG9yICh1c3VhbGx5IGJsdWUpIGFuZCB0ZXh0IGRlY29yYXRpb25cbiAqICh1bmRlcmxpbmUpLiBIb3dldmVyLCBpbiBuYXZpZ2F0aW9uIGVsZW1lbnRzIGxpa2UgdG9vbGJhcnMsIHlvdSBvZnRlbiB3aWxsXG4gKiB3YW50IHRvIGV4cGxpY2l0bHkgc3BlY2lmaWMgbGluayBjb2xvcnMgYW55d2F5LCBlLmcuLCB0byByZWZsZWN0IHlvdXJcbiAqIGFwcGxpY2F0aW9uJ3MgdmlzdWFsIHN0eWxlIGFuZCBicmFuZC5cbiAqL1xuY2xhc3MgQ3VycmVudEFuY2hvciBleHRlbmRzIFdyYXBwZWRTdGFuZGFyZEVsZW1lbnQud3JhcCgnYScpIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgZXZlbnQgPT4ge1xuICAgICAgcmVmcmVzaCh0aGlzKTtcbiAgICB9KTtcblxuICAgIC8vIFN0dXBpZCBFZGdlL0lFIFwic3VwcG9ydFwiIHBvcHN0YXRlLCBidXQgZG9uJ3QgZmlyZSBpdCBvbiBoYXNoY2hhbmdlLlxuICAgIC8vIFNvIHdlIGhhdmUgdG8gbGlzdGVuIGZvciBoYXNoY2hhbmdlIGFzIHdlbGwsIHdpdGggdGhlIHJlc3VsdCB0aGF0IGFcbiAgICAvLyBzdGFuZGFyZHMtY29tcGxpYW50IGJyb3dzZXIgbWF5IGVuZCB1cCByZWZyZXNoaW5nIHRoZSBsaW5rIHR3aWNlLlxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgZXZlbnQgPT4ge1xuICAgICAgcmVmcmVzaCh0aGlzKTtcbiAgICB9KTtcblxuICAgIC8vIFNldCBkZWZhdWx0cy5cbiAgICBpZiAodHlwZW9mIHRoaXMuYXJlYUxpbmsgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLmFyZWFMaW5rID0gdGhpcy5kZWZhdWx0cy5hcmVhTGluaztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVHJ1ZSBpZiB0aGUgbGluayBwb2ludHMgdG8gYW4gYXJlYSB3aXRoaW4gYSBzaXRlLCBub3QganVzdCBhIHNpbmdsZSBwYWdlLlxuICAgKlxuICAgKiBJZiB0cnVlLCB0aGUgbWF0Y2hpbmcgcnVsZSB0byBkZXRlcm1pbmUgd2hldGhlciB0aGUgbGluayBpcyBjdXJyZW50IGNoYW5nZXM6XG4gICAqIGFuIGFyZWEgbGluayBpcyBjb25zaWRlcmVkIHRvIGJlIGN1cnJlbnQgaWYgdGhlIGxpbmsncyBkZXN0aW5hdGlvbiBmb3JtcyBhXG4gICAqIHByZWZpeCBvZiB0aGUgY3VycmVudCBsb2NhdGlvbiAoaW5zdGVhZCBvZiBtYXRjaGluZyB0aGUgY29tcGxldGUgVVJMKS5cbiAgICpcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBnZXQgYXJlYUxpbmsoKSB7XG4gICAgcmV0dXJuIHRoaXNbYXJlYUxpbmtTeW1ib2xdO1xuICB9XG4gIHNldCBhcmVhTGluayh2YWx1ZSkge1xuICAgIC8vIENhc3QgYm9vbGVhbiBvciBzdHJpbmcgdmFsdWVzIHRvIGJvb2xlYW4uXG4gICAgdGhpc1thcmVhTGlua1N5bWJvbF0gPSAoU3RyaW5nKHZhbHVlKSA9PT0gJ3RydWUnKTtcbiAgICByZWZyZXNoKHRoaXMpO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKSB7IHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7IH1cbiAgICByZWZyZXNoKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRydWUgaWYgdGhlIGxpbmsncyBkZXN0aW5hdGlvbiBtYXRjaGVzIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gICAqXG4gICAqIElmIHRoaXMgaXMgdHJ1ZSwgdGhlIGVsZW1lbnQgd2lsbCBoYXZlIGFuIGBjdXJyZW50YCBDU1MgY2xhc3MgYXBwbGllZCB0byBpdC5cbiAgICpcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBnZXQgY3VycmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jbGFzc0xpc3QuY29udGFpbnMoJ2N1cnJlbnQnKTtcbiAgfVxuICBzZXQgY3VycmVudCh2YWx1ZSkge1xuICAgIHRvZ2dsZUNsYXNzKHRoaXMsICdjdXJyZW50JywgdmFsdWUpO1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2N1cnJlbnQtY2hhbmdlZCcpKTtcbiAgfVxuXG4gIGdldCBkZWZhdWx0cygpIHtcbiAgICBsZXQgZGVmYXVsdHMgPSBzdXBlci5kZWZhdWx0cyB8fCB7fTtcbiAgICBkZWZhdWx0cy5hcmVhTGluayA9IGZhbHNlO1xuICAgIHJldHVybiBkZWZhdWx0cztcbiAgfVxuXG4gIC8vIEF1Z21lbnQgaHJlZiBpbXBsZW1lbnRhdGlvbiBzbyB0aGF0IGNoYW5naW5nIGhyZWYgY2hlY2tzIHRoZSBhY3RpdmUgc3RhdHVzLlxuICBnZXQgaHJlZigpIHtcbiAgICByZXR1cm4gc3VwZXIuaHJlZjtcbiAgfVxuICBzZXQgaHJlZih2YWx1ZSkge1xuICAgIHN1cGVyLmhyZWYgPSB2YWx1ZTtcbiAgICByZWZyZXNoKHRoaXMpO1xuICB9XG5cbiAgZ2V0IHRlbXBsYXRlKCkge1xuICAgIC8vIFJlc2V0IHN0eWxlcyBzbyB0aGF0IGNvbG9yIGNhbiBiZSBzcGVjaWZpZWQgZnJvbSB0aGUgb3V0c2lkZSB3aXRob3V0XG4gICAgLy8gaGF2aW5nIHRvIGRlZmluZSBhIENTUyB2YXJpYWJsZS5cbiAgICByZXR1cm4gYFxuICAgICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG5cbiAgICAgICNpbm5lciB7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcbiAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8YSBpZD1cImlubmVyXCI+PHNsb3Q+PC9zbG90PjwvYT5gO1xuICB9XG5cbn1cblxuXG4vLyBVcGRhdGUgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIHRoZSBlbGVtZW50IGJhc2VkIG9uIHRoZSBjdXJyZW50IGxvY2F0aW9uLlxuZnVuY3Rpb24gcmVmcmVzaChlbGVtZW50KSB7XG4gIGxldCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgbGV0IG1hdGNoO1xuICBpZiAoZWxlbWVudC5hcmVhTGluaykge1xuICAgIC8vIE1hdGNoIHByZWZpeFxuICAgIGxldCBwcmVmaXggPSBlbGVtZW50LmhyZWY7XG4gICAgLy8gSWYgcHJlZml4IGRvZXNuJ3QgZW5kIGluIHNsYXNoLCBhZGQgYSBzbGFzaC5cbiAgICAvLyBXZSB3YW50IHRvIGF2b2lkIG1hdGNoaW5nIGluIHRoZSBtaWRkbGUgb2YgYSBmb2xkZXIgbmFtZS5cbiAgICBpZiAocHJlZml4Lmxlbmd0aCA8IHVybC5sZW5ndGggJiYgcHJlZml4LnN1YnN0cigtMSkgIT09ICcvJykge1xuICAgICAgcHJlZml4ICs9ICcvJztcbiAgICB9XG4gICAgbWF0Y2ggPSAodXJsLnN1YnN0cigwLCBwcmVmaXgubGVuZ3RoKSA9PT0gcHJlZml4KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBNYXRjaCB3aG9sZSBwYXRoXG4gICAgbWF0Y2ggPSAodXJsID09PSBlbGVtZW50LmhyZWYpO1xuICB9XG4gIGVsZW1lbnQuY3VycmVudCA9IG1hdGNoO1xufVxuXG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYmFzaWMtY3VycmVudC1hbmNob3InLCBDdXJyZW50QW5jaG9yKTtcbiIsImltcG9ydCBDb21wb3NhYmxlIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NvbXBvc2FibGUnO1xuaW1wb3J0IFNoYWRvd1RlbXBsYXRlIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NoYWRvd1RlbXBsYXRlJztcbmltcG9ydCBTaGFkb3dFbGVtZW50UmVmZXJlbmNlcyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TaGFkb3dFbGVtZW50UmVmZXJlbmNlcyc7XG5pbXBvcnQgQXR0cmlidXRlTWFyc2hhbGxpbmcgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQXR0cmlidXRlTWFyc2hhbGxpbmcnO1xuaW1wb3J0IERpc3RyaWJ1dGVkQ2hpbGRyZW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlzdHJpYnV0ZWRDaGlsZHJlbic7XG5cblxuLyoqXG4gKiBBIHNhbXBsZSBnZW5lcmFsLXB1cnBvc2UgYmFzZSBjbGFzcyBmb3IgZGVmaW5pbmcgY3VzdG9tIGVsZW1lbnRzIHRoYXQgbWl4ZXNcbiAqIGluIHNvbWUgY29tbW9uIGZlYXR1cmVzOiB0ZW1wbGF0ZSBzdGFtcGluZyBpbnRvIGEgc2hhZG93IHJvb3QsIHNoYWRvdyBlbGVtZW50XG4gKiByZWZlcmVuY2VzLCBtYXJzaGFsbGluZyBhdHRyaWJ1dGVzIHRvIHByb3BlcnRpZXMsIGFuZCByZXRyaWV2aW5nIHRoZSBjaGlsZHJlblxuICogZGlzdHJpYnV0ZWQgdG8gYSBjb21wb25lbnQuXG4gKlxuICogVGhpcyBiYXNlIGNsYXNzIGlzIG5vdCBzcGVjaWFsIGluIGFueSB3YXksIGFuZCBpcyBkZWZpbmVkIG9ubHkgYXMgYVxuICogY29udmVuaWVudCBzaG9ydGhhbmQgZm9yIGFwcGx5aW5nIHRoZSBtaXhpbnMgbGlzdGVkIGFib3ZlLiBZb3UgY2FuIHVzZSB0aGlzXG4gKiBjbGFzcyBhcyBhIGJhc2UgY2xhc3MgZm9yIHlvdXIgb3duIGVsZW1lbnRzLCBvciBlYXNpbHkgY3JlYXRlIHlvdXIgb3duIGJhc2VcbiAqIGNsYXNzIGJ5IGFwcGx5aW5nIHRoZSBzYW1lIHNldCBvZiBtaXhpbnMuXG4gKlxuICogVGhlIEVsZW1lbnRCYXNlIGJhc2UgY2xhc3MgZG9lcyBub3QgcmVnaXN0ZXIgaXRzZWxmIGFzIGEgY3VzdG9tIGVsZW1lbnQgd2l0aFxuICogdGhlIGJyb3dzZXIsIGFuZCBoZW5jZSBjYW5ub3QgYmUgaW5kZXBlbmRlbnRseSBpbnN0YW50aWF0ZWQuXG4gKlxuICogQG1peGVzIEF0dHJpYnV0ZU1hcnNoYWxsaW5nIFxuICogQG1peGVzIENvbXBvc2FibGVcbiAqIEBtaXhlcyBEaXN0cmlidXRlZENoaWxkcmVuXG4gKiBAbWl4ZXMgU2hhZG93RWxlbWVudFJlZmVyZW5jZXNcbiAqIEBtaXhlcyBTaGFkb3dUZW1wbGF0ZVxuICovXG5jbGFzcyBFbGVtZW50QmFzZSBleHRlbmRzIENvbXBvc2FibGUoSFRNTEVsZW1lbnQpLmNvbXBvc2UoXG4gIFNoYWRvd1RlbXBsYXRlLCAgICAgICAgICAvLyBiZWZvcmUgbm9kZSBmaW5kaW5nLCBzbyBzaGFkb3cgcm9vdCBpcyBwb3B1bGF0ZWRcbiAgU2hhZG93RWxlbWVudFJlZmVyZW5jZXMsIC8vIGJlZm9yZSBtYXJzaGFsbGluZywgc28gcHJvcGVydGllcyBjYW4gdXNlIHJlZnNcbiAgQXR0cmlidXRlTWFyc2hhbGxpbmcsXG4gIERpc3RyaWJ1dGVkQ2hpbGRyZW5cbikge1xuXG4gIC8qXG4gICAqIERlYnVnZ2luZyB1dGlsaXR5OiBsb2dzIGEgbWVzc2FnZSwgcHJlZml4ZWQgYnkgdGhlIGNvbXBvbmVudCdzIHRhZy5cbiAgICovXG4gIGxvZyh0ZXh0KSB7XG4gICAgaWYgKHN1cGVyLmxvZykgeyBzdXBlci5sb2codGV4dCk7IH1cbiAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmxvY2FsTmFtZX06ICR7dGV4dH1gKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVsZW1lbnRCYXNlO1xuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9jcmVhdGVTeW1ib2wnO1xuaW1wb3J0IEVsZW1lbnRCYXNlIGZyb20gJy4uLy4uL2Jhc2ljLWVsZW1lbnQtYmFzZS9zcmMvRWxlbWVudEJhc2UnO1xuXG5cbi8vIFN5bWJvbHMgZm9yIHByaXZhdGUgZGF0YSBtZW1iZXJzIG9uIGFuIGVsZW1lbnQuXG5jb25zdCBmYWRlQ29sb3JTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2ZhZGVDb2xvcicpO1xuXG5cbi8qKlxuICogRmFkZXMgb3V0IGNvbnRlbnQgdGhhdCBvdmVyZmxvd3Mgc28gdGhlIHVzZXIga25vd3MgdGhlcmUncyBtb3JlLlxuICpcbiAqIFRoaXMgY29tcG9uZW50IGRvZXNuJ3QgaGFuZGxlIGludGVyYWN0aXZpdHkuXG4gKlxuICogVGhlIGNvbXBvbmVudCBuZWVkcyB0byBrbm93IHRoZSBjb2xvciBpdCBzaG91bGQgZmFkZSB0bywgd2hpY2ggaXQgdHJpZXMgdG9cbiAqIGluZmVyIGZyb20gdGhlIGJhY2tncm91bmQgY29sb3IuIEluIHNvbWUgc2l0dWF0aW9ucywgdGhpcyBtYXkgbm90IHdvcmssIGluXG4gKiB3aGljaCBjYXNlIHlvdSBjYW4gZXhwbGljaXRseSBzZXQgdGhlIGZhZGVDb2xvciBhdHRyaWJ1dGUuXG4gKlxuICogVGhlIGNvbXBvbmVudCBjdXJyZW50bHkgYWx3YXlzIGRpc3BsYXlzIHRoZSBmYWRlLCBldmVuIGlmIHRoZSBjb21wb25lbnQnc1xuICogY29udGVudCBpcyBzaG9ydCBlbm91Z2ggdG8gZml0IGNvbXBsZXRlbHkgaW4gdmlldy5cbiAqXG4gKiBAZXh0ZW5kcyBFbGVtZW50QmFzZVxuICovXG5jbGFzcyBGYWRlT3ZlcmZsb3cgZXh0ZW5kcyBFbGVtZW50QmFzZSB7XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKSB7IHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7IH1cbiAgICBpZiAodGhpcy5mYWRlQ29sb3IgPT0gbnVsbCkge1xuICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBjb2xvciBvZiB0aGUgZmFkZS5cbiAgICpcbiAgICogVGhlIGZhZGUgY29sb3Igc2hvdWxkIG1hdGNoIHRoZSBiYWNrZ3JvdW5kIGNvbG9yLiBUaGUgY29tcG9uZW50IGRvZXMgaXRzXG4gICAqIGJlc3QgdG8gaW5mZXIgdGhlIGJhY2tncm91bmQgY29sb3IsIGJ1dCBpbiBzb21lIHNpdHVhdGlvbnMsIHRoYXQgbWF5IG5vdFxuICAgKiB3b3JrLiBJbiB0aG9zZSBjYXNlcywgeW91IGNhbiBtYW51YWxseSBpZGVudGlmeSB0aGUgYmFja2dyb3VuZCBjb2xvci5cbiAgICogVGhpcyBzaG91bGQgYmUgYSBzb2xpZCBjb2xvci5cbiAgICpcbiAgICogQGF0dHJpYnV0ZSBmYWRlQ29sb3JcbiAgICogQGRlZmF1bHQgd2hpdGVcbiAgICovXG4gIGdldCBmYWRlQ29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXNbZmFkZUNvbG9yU3ltYm9sXTtcbiAgfVxuICBzZXQgZmFkZUNvbG9yKHZhbHVlKSB7XG4gICAgdGhpc1tmYWRlQ29sb3JTeW1ib2xdID0gdmFsdWU7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBsZXQgcmdiID0gZXh0cmFjdFJnYlZhbHVlcyh2YWx1ZSk7XG4gICAgICBpZiAocmdiKSB7XG4gICAgICAgIGxldCBmYWRlQ29sb3JUcmFuc3BhcmVudCA9IGByZ2JhKCR7cmdiLnJ9LCR7cmdiLmd9LCR7cmdiLmJ9LDApYDtcbiAgICAgICAgbGV0IGdyYWRpZW50ID0gYGxpbmVhci1ncmFkaWVudCgke2ZhZGVDb2xvclRyYW5zcGFyZW50fSAwJSwgJHt2YWx1ZX0gMTAwJSlgO1xuICAgICAgICB0aGlzLiQuZmFkZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBncmFkaWVudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSW5mZXIgdGhlIGZhZGUgY29sb3IgZnJvbSBiYWNrZ3JvdW5kIGNvbG9yLiBJZiB5b3UgaGF2ZSBwcm9ncmFtbWF0aWNhbGx5XG4gICAqIGNoYW5nZWQgdGhlIGNvbG9yIGJlaGluZCB0aGUgY29tcG9uZW50LCB5b3UgY2FuIGludm9rZSB0aGlzIG1ldGhvZCB0byBoYXZlXG4gICAqIHRoZSBjb21wb25lbnQgdHJ5IHRvIHBpY2sgdXAgdGhlIG5ldyBiYWNrZ3JvdW5kIGNvbG9yLlxuICAgKi9cbiAgcmVmcmVzaCgpIHtcbiAgICAvLyBUT0RPOiBBdXRvbWF0aWNhbGx5IGhpZGUgdGhlIGZhZGUgaWYgYWxsIHRoZSBjb250ZW50IGNhbiBiZSBzZWVuLlxuICAgIHRoaXMuZmFkZUNvbG9yID0gZmluZEJhY2tncm91bmRDb2xvcih0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcnVlIGlmIHRoZSBjb21wb25lbnQgc2hvdWxkIHNob3cgdGhlIGZhZGUgdG8gdGhlIGJhY2tncm91bmQgY29sb3IuXG4gICAqXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCB0cnVlXG4gICAqL1xuICBnZXQgc2hvd0ZhZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuJC5mYWRlLnN0eWxlLmRpc3BsYXkgIT09ICdub25lJztcbiAgfVxuICBzZXQgc2hvd0ZhZGUodmFsdWUpIHtcbiAgICB0aGlzLiQuZmFkZS5zdHlsZS5kaXNwbGF5ID0gdmFsdWUgPyAnJyA6ICdub25lJztcbiAgfVxuXG4gIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gYFxuICAgICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuXG4gICAgICAjZmFkZSB7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgaGVpZ2h0OiAzZW07XG4gICAgICAgIG1heC1oZWlnaHQ6IDUwJTtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IC8qIExldHMgdXNlciBpbnRlcmFjdCB3aXRoIGNvbnRlbnQgdGhyb3VnaCB0aGUgZmFkZS4gKi9cbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgaWQ9XCJmYWRlXCI+PC9kaXY+XG4gICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgYDtcbiAgfVxuXG59XG5cblxuLy8gUmV0dXJuIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSBnaXZlbiBlbGVtZW50LiBJZiB0aGUgY29sb3IgaXNcbi8vIFwidHJhbnNwYXJlbnRcIiAodGhlIGRlZmF1bHQgaW4gTW96aWxsYSBhbmQgSUUpIG9yIFwicmdiYSgwLCAwLCAwLCAwKVwiICh0aGVcbi8vIGRlZmF1bHQgdHJhbnNwYXJlbnQgdmFsdWUgaW4gQmxpbmsgYW5kIFdlYmtpdCksIHdhbGsgdXAgdGhlIHBhcmVudCBjaGFpblxuLy8gdW50aWwgYSBub24tdHJhbnNwYXJlbnQgY29sb3IgaXMgZm91bmQuXG5mdW5jdGlvbiBmaW5kQmFja2dyb3VuZENvbG9yKGVsZW1lbnQpIHtcbiAgaWYgKGVsZW1lbnQgPT0gbnVsbCB8fCB0eXBlb2YgZWxlbWVudC5zdHlsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBUaGlzIGVsZW1lbnQgaGFzIG5vIGJhY2tncm91bmQsIGFzc3VtZSB3aGl0ZS5cbiAgICByZXR1cm4gJ3JnYigyNTUsMjU1LDI1NSknO1xuICB9XG4gIGxldCBiYWNrZ3JvdW5kQ29sb3IgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmJhY2tncm91bmRDb2xvcjtcbiAgaWYgKGJhY2tncm91bmRDb2xvciA9PT0gJ3RyYW5zcGFyZW50JyB8fCBiYWNrZ3JvdW5kQ29sb3IgPT09ICdyZ2JhKDAsIDAsIDAsIDApJykge1xuICAgIHJldHVybiBmaW5kQmFja2dyb3VuZENvbG9yKGVsZW1lbnQucGFyZW50Tm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGJhY2tncm91bmRDb2xvcjtcbiAgfVxufVxuXG5cbi8vIFJldHVybiB0aGUgaW5kaXZpZHVhbCBSR0IgdmFsdWVzIGZyb20gYSBDU1MgY29sb3Igc3RyaW5nLlxuZnVuY3Rpb24gZXh0cmFjdFJnYlZhbHVlcyhyZ2JTdHJpbmcpIHtcbiAgbGV0IHJnYlJlZ2V4ID0gL3JnYmE/XFwoXFxzKihcXGQrKVxccyosXFxzKihcXGQrKVxccyosXFxzKihcXGQrKVxccyooPzosXFxzKltcXGRcXC5dK1xccyopP1xcKS87XG4gIGxldCBtYXRjaCA9IHJnYlJlZ2V4LmV4ZWMocmdiU3RyaW5nKTtcbiAgaWYgKG1hdGNoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHI6IHBhcnNlSW50KG1hdGNoWzFdKSxcbiAgICAgIGc6IHBhcnNlSW50KG1hdGNoWzJdKSxcbiAgICAgIGI6IHBhcnNlSW50KG1hdGNoWzNdKVxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2Jhc2ljLWZhZGUtb3ZlcmZsb3cnLCBGYWRlT3ZlcmZsb3cpO1xuZXhwb3J0IGRlZmF1bHQgRmFkZU92ZXJmbG93O1xuIiwiaW1wb3J0IEVsZW1lbnRCYXNlIGZyb20gJy4uLy4uL2Jhc2ljLWVsZW1lbnQtYmFzZS9zcmMvRWxlbWVudEJhc2UnO1xuaW1wb3J0IERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCc7XG5pbXBvcnQgQ2xpY2tTZWxlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ2xpY2tTZWxlY3Rpb24nO1xuaW1wb3J0IENvbnRlbnRBc0l0ZW1zIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NvbnRlbnRBc0l0ZW1zJztcbmltcG9ydCBEaXJlY3Rpb25TZWxlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlyZWN0aW9uU2VsZWN0aW9uJztcbmltcG9ydCBHZW5lcmljIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0dlbmVyaWMnO1xuaW1wb3J0IEtleWJvYXJkIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0tleWJvYXJkJztcbmltcG9ydCBLZXlib2FyZERpcmVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9LZXlib2FyZERpcmVjdGlvbic7XG5pbXBvcnQgS2V5Ym9hcmRQYWdlZFNlbGVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9LZXlib2FyZFBhZ2VkU2VsZWN0aW9uJztcbmltcG9ydCBLZXlib2FyZFByZWZpeFNlbGVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9LZXlib2FyZFByZWZpeFNlbGVjdGlvbic7XG5pbXBvcnQgU2VsZWN0aW9uQXJpYUFjdGl2ZSBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TZWxlY3Rpb25BcmlhQWN0aXZlJztcbmltcG9ydCBTZWxlY3Rpb25IaWdobGlnaHQgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2VsZWN0aW9uSGlnaGxpZ2h0JztcbmltcG9ydCBTZWxlY3Rpb25JblZpZXcgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2VsZWN0aW9uSW5WaWV3JztcbmltcG9ydCBTaW5nbGVTZWxlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2luZ2xlU2VsZWN0aW9uJztcblxuXG4vKipcbiAqIEEgc2luZ2xlLXNlbGVjdGlvbiBsaXN0IGJveCB0aGF0IHN1cHBvcnRzIHNlbGVjdGlvbiBoaWdobGlnaHRpbmcgKHVzaW5nIHRoZVxuICogc3lzdGVtIGhpZ2hsaWdodCBjb2xvcikgYW5kIGtleWJvYXJkIG5hdmlnYXRpb24uXG4gKlxuICogW0xpdmUgZGVtb10oaHR0cDovL2Jhc2ljd2ViY29tcG9uZW50cy5vcmcvYmFzaWMtd2ViLWNvbXBvbmVudHMvcGFja2FnZXMvYmFzaWMtbGlzdC1ib3gvKVxuICpcbiAqIFRoZSB1c2VyIGNhbiBzZWxlY3QgYW4gaXRlbSB3aXRoIHRoZSBtb3VzZS90b3VjaCBvciBrZXlib2FyZDogVXAvRG93biwgUGFnZVxuICogVXAvRG93biwgSG9tZS9FbmQuXG4gKlxuICogTGlrZSBvdGhlciBCYXNpYyBXZWIgQ29tcG9uZW50cywgdGhpcyBjYW4gaGFuZGxlIGRpc3RyaWJ1dGVkIGNvbnRlbnQ6IHlvdSBjYW5cbiAqIGluY2x1ZGUgYSBjb250ZW50IGVsZW1lbnQgaW5zaWRlIGEgYmFzaWMtbGlzdC1ib3gsIGFuZCB0aGUgbGlzdCB3aWxsIG5hdmlnYXRlXG4gKiB0aHJvdWdoIHRoZSBkaXN0cmlidXRlZCBjb250ZW50LlxuICpcbiAqIFRoaXMgY29tcG9uZW50IGluY2x1ZGVzIGJhc2ljIEFSSUEgc3VwcG9ydCB0byBwcm92aWRlIGEgcmVhc29uYWJsZSBkZWZhdWx0XG4gKiBleHBlcmllbmNlLCBlLmcuLCBmb3Igc2NyZWVuIHJlYWRlcnMuIFRoZSBsaXN0IGNvbXBvbmVudCBpdHNlbGYgd2lsbCBiZVxuICogYXNzaWduZWQgYW4gYXBwcm9wcmlhdGUgQVJJQSByb2xlIChkZWZhdWx0IGlzIFwibGlzdGJveFwiKS4gVGhlIElEIG9mIHRoZVxuICogc2VsZWN0ZWQgaXRlbSB3aWxsIGJlIHJlZmxlY3RlZCBpbiBhbiBcImFyaWEtYWN0aXZlZGVzY2VuZGFudFwiIGF0dHJpYnV0ZVxuICogYXBwbGllZCB0byB0aGUgbGlzdC4gVG8gc3VwcG9ydCB0aGlzIGZlYXR1cmUsIGFsbCBpdGVtcyBpbiB0aGUgbGlzdCBuZWVkXG4gKiB1bmlxdWUgSURzLiBJZiBhbiBpdGVtIGRvZXMgbm90IGhhdmUgYW4gSUQsIGJhc2ljLWxpc3QtYm94IHdpbGwgYXV0b21hdGljYWxseVxuICogYXNzaWduIGEgZGVmYXVsdCBJRC5cbiAqXG4gKiBUaGUga2V5Ym9hcmQgaW50ZXJhY3Rpb24gbW9kZWwgZ2VuZXJhbGx5IGZvbGxvd3MgdGhhdCBvZiBNaWNyb3NvZnQgV2luZG93cydcbiAqIGxpc3QgYm94ZXMgaW5zdGVhZCBvZiB0aG9zZSBpbiBPUyBYOlxuICpcbiAqICogVGhlIFBhZ2UgVXAvRG93biBhbmQgSG9tZS9FbmQga2V5cyBhY3R1YWxseSBtb3ZlIHRoZSBzZWxlY3Rpb24sIHJhdGhlciB0aGFuXG4gKiAgIGp1c3Qgc2Nyb2xsaW5nIHRoZSBsaXN0LiBUaGUgZm9ybWVyIGJlaGF2aW9yIHNlZW1zIG1vcmUgZ2VuZXJhbGx5IHVzZWZ1bFxuICogICBmb3Iga2V5Ym9hcmQgdXNlcnMuXG4gKlxuICogKiBQcmVzc2luZyBQYWdlIFVwL0Rvd24gd2lsbCBtb3ZlIHRoZSBzZWxlY3Rpb24gdG8gdGhlIHRvcG1vc3QvYm90dG9tbW9zdFxuICogICB2aXNpYmxlIGl0ZW0gaWYgdGhlIHNlbGVjdGlvbiBpcyBub3QgYWxyZWFkeSB0aGVyZS4gVGhlcmVhZnRlciwgdGhlIGtleVxuICogICB3aWxsIG1vdmUgdGhlIHNlbGVjdGlvbiB1cC9kb3duIGJ5IGEgcGFnZSwgYW5kIChwZXIgdGhlIGFib3ZlIHBvaW50KSBtYWtlXG4gKiAgIHRoZSBzZWxlY3RlZCBpdGVtIHZpc2libGUuXG4gKlxuICogUHJvZ3JhbW1hdGljYWxseSBzZWxlY3RpbmcgYW4gaXRlbSAoYnkgc2V0dGluZyB0aGUgc2VsZWN0ZWQgcHJvcGVydHkpIHNjcm9sbHNcbiAqIHRoZSBpdGVtIGludG8gdmlldy5cbiAqXG4gKiBUaGUgdXNlciBjYW4gYWxzbyBzZWxlY3QgYW4gaXRlbSBieSB0eXBpbmcgdGhlIGJlZ2lubmluZyBvZiBhbiBpdGVtJ3MgdGV4dC5cbiAqXG4gKiBAZXh0ZW5kcyBFbGVtZW50QmFzZVxuICogQG1peGVzIENsaWNrU2VsZWN0aW9uXG4gKiBAbWl4ZXMgQ29udGVudEFzSXRlbXNcbiAqIEBtaXhlcyBEaXJlY3Rpb25TZWxlY3Rpb25cbiAqIEBtaXhlcyBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50XG4gKiBAbWl4ZXMgR2VuZXJpY1xuICogQG1peGVzIEtleWJvYXJkXG4gKiBAbWl4ZXMgS2V5Ym9hcmREaXJlY3Rpb25cbiAqIEBtaXhlcyBLZXlib2FyZFBhZ2VkU2VsZWN0aW9uXG4gKiBAbWl4ZXMgS2V5Ym9hcmRQcmVmaXhTZWxlY3Rpb25cbiAqIEBtaXhlcyBTZWxlY3Rpb25BcmlhQWN0aXZlXG4gKiBAbWl4ZXMgU2VsZWN0aW9uSGlnaGxpZ2h0XG4gKiBAbWl4ZXMgU2VsZWN0aW9uSW5WaWV3XG4gKiBAbWl4ZXMgU2luZ2xlU2VsZWN0aW9uXG4gKi9cbmNsYXNzIExpc3RCb3ggZXh0ZW5kcyBFbGVtZW50QmFzZS5jb21wb3NlKFxuICBDbGlja1NlbGVjdGlvbixcbiAgQ29udGVudEFzSXRlbXMsXG4gIERpcmVjdGlvblNlbGVjdGlvbixcbiAgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCxcbiAgR2VuZXJpYyxcbiAgS2V5Ym9hcmQsXG4gIEtleWJvYXJkRGlyZWN0aW9uLFxuICBLZXlib2FyZFBhZ2VkU2VsZWN0aW9uLFxuICBLZXlib2FyZFByZWZpeFNlbGVjdGlvbixcbiAgU2VsZWN0aW9uQXJpYUFjdGl2ZSxcbiAgU2VsZWN0aW9uSGlnaGxpZ2h0LFxuICBTZWxlY3Rpb25JblZpZXcsXG4gIFNpbmdsZVNlbGVjdGlvblxuKSB7XG5cbiAgZ2V0IGRlZmF1bHRzKCkge1xuICAgIGxldCBkZWZhdWx0cyA9IHN1cGVyLmRlZmF1bHRzIHx8IHt9O1xuICAgIGRlZmF1bHRzLm5hdmlnYXRpb25BeGlzID0gJ3ZlcnRpY2FsJztcbiAgICByZXR1cm4gZGVmYXVsdHM7XG4gIH1cblxuICBnZXQgc2Nyb2xsVGFyZ2V0KCkge1xuICAgIHJldHVybiB0aGlzLiQuaXRlbXNDb250YWluZXI7XG4gIH1cblxuICBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgICB9XG5cbiAgICAgIFt0YXJnZXQ9XCJjaGlsZFwiXSB7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLXdlYmtpdC1mbGV4OiAxO1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgfVxuXG4gICAgICAjaXRlbXNDb250YWluZXIge1xuICAgICAgICAtd2Via2l0LWZsZXg6IDE7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsOyAvKiBmb3IgbW9tZW50dW0gc2Nyb2xsaW5nICovXG4gICAgICB9XG5cbiAgICAgIC8qIEdlbmVyaWMgYXBwZWFyYW5jZSAqL1xuICAgICAgOmhvc3QoW2dlbmVyaWM9XCJcIl0pIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZ2VuZXJpYz1cIlwiXSkgI2l0ZW1zQ29udGFpbmVyIDo6c2xvdHRlZCgqKSB7XG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgcGFkZGluZzogMC4yNWVtO1xuICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBpZD1cIml0ZW1zQ29udGFpbmVyXCIgcm9sZT1cIm5vbmVcIj5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGV4dCBjb250ZW50IG9mIHRoZSBzZWxlY3RlZCBpdGVtLlxuICAgKlxuICAgKiBTZXR0aW5nIHRoaXMgdmFsdWUgdG8gYSBzdHJpbmcgd2lsbCBhdHRlbXB0IHRvIHNlbGVjdCB0aGUgZmlyc3QgbGlzdCBpdGVtXG4gICAqIHdob3NlIHRleHQgY29udGVudCBtYXRjaCB0aGF0IHN0cmluZy4gU2V0dGluZyB0aGlzIHRvIGEgc3RyaW5nIG5vdCBtYXRjaGluZ1xuICAgKiBhbnkgbGlzdCBpdGVtIHdpbGwgcmVzdWx0IGluIG5vIHNlbGVjdGlvbi5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEl0ZW0gPT0gbnVsbCB8fCB0aGlzLnNlbGVjdGVkSXRlbS50ZXh0Q29udGVudCA9PSBudWxsID9cbiAgICAgICcnIDpcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtLnRleHRDb250ZW50O1xuICB9XG4gIHNldCB2YWx1ZSh0ZXh0KSB7XG5cbiAgICBsZXQgY3VycmVudEluZGV4ID0gdGhpcy5zZWxlY3RlZEluZGV4O1xuICAgIGxldCBuZXdJbmRleCA9IC0xOyAvLyBBc3N1bWUgd2Ugd29uJ3QgZmluZCB0aGUgdGV4dC5cblxuICAgIC8vIEZpbmQgdGhlIGl0ZW0gd2l0aCB0aGUgaW5kaWNhdGVkIHRleHQuXG4gICAgbGV0IGl0ZW1zID0gdGhpcy5pdGVtcztcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuZ3RoID0gaXRlbXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChpdGVtc1tpXS50ZXh0Q29udGVudCA9PT0gdGV4dCkge1xuICAgICAgICBuZXdJbmRleCA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuZXdJbmRleCAhPT0gY3VycmVudEluZGV4KSB7XG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBuZXdJbmRleDtcbiAgICAgIGxldCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgndmFsdWUtY2hhbmdlZCcpO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICB9XG4gIH1cblxuXG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIHRoZSBsaXN0J3MgdmFsdWUgcHJvcGVydHkgY2hhbmdlcy5cbiAgICpcbiAgICogQG1lbWJlcm9mIExpc3RCb3hcbiAgICogQGV2ZW50IHZhbHVlLWNoYW5nZWRcbiAgICovXG59XG5cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdiYXNpYy1saXN0LWJveCcsIExpc3RCb3gpO1xuZXhwb3J0IGRlZmF1bHQgTGlzdEJveDtcbiIsImltcG9ydCBFbGVtZW50QmFzZSBmcm9tICcuLi8uLi9iYXNpYy1lbGVtZW50LWJhc2Uvc3JjL0VsZW1lbnRCYXNlJztcbmltcG9ydCBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50IGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQnO1xuaW1wb3J0IENvbnRlbnRBc0l0ZW1zIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NvbnRlbnRBc0l0ZW1zJztcbmltcG9ydCBTZWxlY3Rpb25BcmlhQWN0aXZlIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NlbGVjdGlvbkFyaWFBY3RpdmUnO1xuaW1wb3J0IFNpbmdsZVNlbGVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TaW5nbGVTZWxlY3Rpb24nO1xuaW1wb3J0IFRhcmdldEluQ29sbGVjdGl2ZSBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9UYXJnZXRJbkNvbGxlY3RpdmUnO1xuXG5sZXQgYmFzZSA9IEVsZW1lbnRCYXNlLmNvbXBvc2UoXG4gIENvbnRlbnRBc0l0ZW1zLFxuICBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50LFxuICBTZWxlY3Rpb25BcmlhQWN0aXZlLFxuICBTaW5nbGVTZWxlY3Rpb24sXG4gIFRhcmdldEluQ29sbGVjdGl2ZVxuKTtcblxuXG4vKipcbiAqIFNob3dzIGV4YWN0bHkgb25lIGNoaWxkIGVsZW1lbnQgYXQgYSB0aW1lLiBUaGlzIGNhbiBiZSB1c2VmdWwsIGZvciBleGFtcGxlLFxuICogaWYgYSBnaXZlbiBVSSBlbGVtZW50IGhhcyBtdWx0aXBsZSBtb2RlcyB0aGF0IHByZXNlbnQgc3Vic3RhbnRpYWxseSBkaWZmZXJlbnRcbiAqIGVsZW1lbnRzLlxuICpcbiAqIFRoZSB0cmFuc2l0aW9uIGJldHdlZW4gY2hpbGQgZWxlbWVudHMgaXMgaW5zdGFudGVub3VzLiBJZiB5b3UnZCBsaWtlIHRoZVxuICogdHJhbnNpdGlvbiB0byBiZSBhY2NvbXBhbmllZCBieSB2aXNpYmxlIGFuaW1hdGVkIGVmZmVjdHMsIHNlZVxuICogW2Jhc2ljLWFuaW1hdGlvbi1zdGFnZV0oLi4vYmFzaWMtYW5pbWF0aW9uLXN0YWdlKS5cbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBkb2Vzbid0IHByb3ZpZGUgYW55IFVJIGZvciBjaGFuZ2luZyB3aGljaCBtb2RlIGlzIHNob3duLlxuICpcbiAqIEBleHRlbmRzIEVsZW1lbnRCYXNlXG4gKiBAbWl4ZXMgQ29udGVudEFzSXRlbXNcbiAqIEBtaXhlcyBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50XG4gKiBAbWl4ZXMgU2VsZWN0aW9uQXJpYUFjdGl2ZVxuICogQG1peGVzIFNpbmdsZVNlbGVjdGlvblxuICogQG1peGVzIFRhcmdldEluQ29sbGVjdGl2ZVxuICovXG5jbGFzcyBNb2RlcyBleHRlbmRzIGJhc2Uge1xuXG4gIGFwcGx5U2VsZWN0aW9uKGl0ZW0sIHNlbGVjdGVkKSB7XG4gICAgaWYgKHN1cGVyLmFwcGx5U2VsZWN0aW9uKSB7IHN1cGVyLmFwcGx5U2VsZWN0aW9uKGl0ZW0sIHNlbGVjdGVkKTsgfVxuICAgIGl0ZW0uc3R5bGUuZGlzcGxheSA9IHNlbGVjdGVkID8gJycgOiAnbm9uZSc7XG4gICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgIXNlbGVjdGVkKTtcbiAgfVxuXG4gIGdldCBkZWZhdWx0cygpIHtcbiAgICBsZXQgZGVmYXVsdHMgPSBzdXBlci5kZWZhdWx0cyB8fCB7fTtcbiAgICBkZWZhdWx0cy5zZWxlY3Rpb25SZXF1aXJlZCA9IHRydWU7XG4gICAgcmV0dXJuIGRlZmF1bHRzO1xuICB9XG5cbiAgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBgPHNsb3Q+PC9zbG90PmA7XG4gIH1cblxufVxuXG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYmFzaWMtbW9kZXMnLCBNb2Rlcyk7XG5leHBvcnQgZGVmYXVsdCBNb2RlcztcbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvY3JlYXRlU3ltYm9sJztcbmltcG9ydCBFbGVtZW50QmFzZSBmcm9tICcuLi8uLi9iYXNpYy1lbGVtZW50LWJhc2Uvc3JjL0VsZW1lbnRCYXNlJztcbmltcG9ydCBDb250ZW50Rmlyc3RDaGlsZFRhcmdldCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Db250ZW50Rmlyc3RDaGlsZFRhcmdldCc7XG5pbXBvcnQgRGlyZWN0aW9uU2VsZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0RpcmVjdGlvblNlbGVjdGlvbic7XG5pbXBvcnQgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50JztcbmltcG9ydCBLZXlib2FyZCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9LZXlib2FyZCc7XG5pbXBvcnQgS2V5Ym9hcmREaXJlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvS2V5Ym9hcmREaXJlY3Rpb24nO1xuaW1wb3J0IHJlbmRlckFycmF5QXNFbGVtZW50cyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9yZW5kZXJBcnJheUFzRWxlbWVudHMnO1xuaW1wb3J0IFNpbmdsZVNlbGVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TaW5nbGVTZWxlY3Rpb24nO1xuaW1wb3J0IFRhcmdldEluQ29sbGVjdGl2ZSBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9UYXJnZXRJbkNvbGxlY3RpdmUnO1xuaW1wb3J0IFRhcmdldFNlbGVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9UYXJnZXRTZWxlY3Rpb24nO1xuaW1wb3J0IHRvZ2dsZUNsYXNzIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL3RvZ2dsZUNsYXNzJztcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3Qgc2VsZWN0ZWRGcmFjdGlvbkNoYW5nZWRMaXN0ZW5lclN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnc2VsZWN0ZWRGcmFjdGlvbkNoYW5nZWRMaXN0ZW5lcicpO1xuXG5cbmxldCBiYXNlID0gRWxlbWVudEJhc2UuY29tcG9zZShcbiAgQ29udGVudEZpcnN0Q2hpbGRUYXJnZXQsXG4gIERpcmVjdGlvblNlbGVjdGlvbixcbiAgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCxcbiAgS2V5Ym9hcmQsXG4gIEtleWJvYXJkRGlyZWN0aW9uLFxuICBTaW5nbGVTZWxlY3Rpb24sXG4gIFRhcmdldEluQ29sbGVjdGl2ZSxcbiAgVGFyZ2V0U2VsZWN0aW9uXG4pO1xuXG4vKipcbiAqIFByZXNlbnRzIGEgc2V0IG9mIHNtYWxsIGRvdHMgdG8gc2hvdyBsaXN0IGl0ZW0gY291bnQgYW5kIHNlbGVjdCBsaXN0IGl0ZW1zLlxuICpcbiAqIFlvdSBjYW4gc2VlIGEgW2xpdmUgZGVtb10oaHR0cDovL2Jhc2ljd2ViY29tcG9uZW50cy5vcmcvYmFzaWMtd2ViLWNvbXBvbmVudHMvcGFja2FnZXMvYmFzaWMtY2Fyb3VzZWwvY2Fyb3VzZWxXaXRoRG90cy5odG1sKVxuICogb2YgdGhpcyBjb21wb25lbnQgYXBwbGllZCB0byBhIGNhcm91c2VsLlxuICpcbiAqIFRoZXJlIHdpbGwgYmUgb25lIGRvdCBmb3IgZWFjaCBpdGVtLCBhbmQgdGhlIGRvdCBmb3IgdGhlIGN1cnJlbnRseSBzZWxlY3RlZFxuICogaXRlbSB3aWxsIGJlIHNob3duIHNlbGVjdGVkLlxuICpcbiAqIFR5cGljYWwgdXNhZ2U6XG4gKlxuICogICAgIDxiYXNpYy1wYWdlLWRvdHM+XG4gKiAgICAgICA8YmFzaWMtY2Fyb3VzZWw+XG4gKiAgICAgICAgIC4uLiBpbWFnZXMsIGV0Yy4gLi4uXG4gKiAgICAgICA8L2Jhc2ljLWNhcm91c2VsPlxuICogICAgIDwvYmFzaWMtcGFnZS1kb3RzPlxuICpcbiAqIEFsdGhvdWdoIHRoZSBkb3RzIGFyZSBxdWl0ZSBzbWFsbCBieSBkZWZhdWx0LCBjbGlja2luZy90YXBwaW5nIGEgZG90IHdpbGxcbiAqIHdpbGwgc2VsZWN0IHRoZSBjb3JyZXNwb25kaW5nIGxpc3QgaXRlbS5cbiAqXG4gKiBAZXh0ZW5kcyBFbGVtZW50QmFzZVxuICogQG1peGVzIENvbnRlbnRGaXJzdENoaWxkVGFyZ2V0XG4gKiBAbWl4ZXMgRGlyZWN0aW9uU2VsZWN0aW9uXG4gKiBAbWl4ZXMgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudFxuICogQG1peGVzIEtleWJvYXJkXG4gKiBAbWl4ZXMgS2V5Ym9hcmREaXJlY3Rpb25cbiAqIEBtaXhlcyBTaW5nbGVTZWxlY3Rpb25cbiAqIEBtaXhlcyBUYXJnZXRJbkNvbGxlY3RpdmVcbiAqIEBtaXhlcyBUYXJnZXRTZWxlY3Rpb25cbiAqL1xuY2xhc3MgUGFnZURvdHMgZXh0ZW5kcyBiYXNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy4kLmRvdHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICBsZXQgZG90ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgbGV0IGRvdEluZGV4ID0gdGhpcy5kb3RzLmluZGV4T2YoZG90KTtcbiAgICAgIGlmIChkb3RJbmRleCA+PSAwKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IGRvdEluZGV4O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYXBwbHlTZWxlY3Rpb24oaXRlbSwgc2VsZWN0ZWQpIHtcbiAgICBpZiAoc3VwZXIuYXBwbHlTZWxlY3Rpb24pIHsgc3VwZXIuYXBwbHlTZWxlY3Rpb24oaXRlbSwgc2VsZWN0ZWQpOyB9XG4gICAgbGV0IGluZGV4ID0gdGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pO1xuICAgIC8vIFNlZSBpZiB0aGUgY29ycmVzcG9uZGluZyBkb3QgaGFzIGFscmVhZHkgYmVlbiBjcmVhdGVkLlxuICAgIC8vIElmIG5vdCwgdGhlIGNvcnJlY3QgZG90IHdpbGwgYmUgc2VsZWN0ZWQgd2hlbiBpdCBnZXRzIGNyZWF0ZWQuXG4gICAgbGV0IGRvdHMgPSB0aGlzLmRvdHM7XG4gICAgaWYgKGRvdHMgJiYgZG90cy5sZW5ndGggPiBpbmRleCkge1xuICAgICAgbGV0IGRvdCA9IHRoaXMuZG90c1tpbmRleF07XG4gICAgICBpZiAoZG90KSB7XG4gICAgICAgIHRvZ2dsZUNsYXNzKGRvdCwgJ3NlbGVjdGVkJywgc2VsZWN0ZWQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldCBkZWZhdWx0cygpIHtcbiAgICBsZXQgZGVmYXVsdHMgPSBzdXBlci5kZWZhdWx0cyB8fCB7fTtcbiAgICBkZWZhdWx0cy5uYXZpZ2F0aW9uQXhpcyA9ICdob3Jpem9udGFsJztcbiAgICByZXR1cm4gZGVmYXVsdHM7XG4gIH1cblxuICBnZXQgZG90cygpIHtcbiAgICByZXR1cm4gW10uc2xpY2UuY2FsbCh0aGlzLiQuZG90cy5xdWVyeVNlbGVjdG9yQWxsKCcuZG90JykpO1xuICB9XG5cbiAgaXRlbXNDaGFuZ2VkKCkge1xuICAgIGlmIChzdXBlci5pdGVtc0NoYW5nZWQpIHsgc3VwZXIuaXRlbXNDaGFuZ2VkKCk7IH1cbiAgICByZW5kZXJBcnJheUFzRWxlbWVudHModGhpcy5pdGVtcywgdGhpcy4kLmRvdHMsIChpdGVtLCBlbGVtZW50KSA9PiB7XG4gICAgICAvLyBXZSBkb24ndCB1c2UgdGhlIGl0ZW0gcGFyYW1ldGVyLCBiZWNhdXNlIGFueSBpdGVtIHdpbGwgcHJvZHVjZSBhblxuICAgICAgLy8gaWRlbnRpY2FsIGNvcnJlc3BvbmRpbmcgZG90LlxuICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkb3QnKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzdHlsZS1zY29wZScpO1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Jhc2ljLXBhZ2UtZG90cycpO1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgncm9sZScsICdub25lJyk7XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuc2VsZWN0ZWRJdGVtQ2hhbmdlZCgpOyAgLy8gSW4gY2FzZSBwb3NpdGlvbiBvZiBzZWxlY3RlZCBpdGVtIG1vdmVkLlxuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBkaXN0YW5jZSB0aGUgdXNlciBoYXMgbW92ZWQgdGhlIGZpcnN0IHRvdWNocG9pbnQgc2luY2UgdGhlIGJlZ2lubmluZ1xuICAgKiBvZiBhIGRyYWcsIGV4cHJlc3NlZCBhcyBhIGZyYWN0aW9uIG9mIHRoZSBlbGVtZW50J3Mgd2lkdGguXG4gICAqXG4gICAqIEB0eXBlIG51bWJlclxuICAgKi9cbiAgZ2V0IHNlbGVjdGVkRnJhY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0ICYmIHRoaXMudGFyZ2V0LnNlbGVjdGVkRnJhY3Rpb247XG4gIH1cbiAgc2V0IHNlbGVjdGVkRnJhY3Rpb24odmFsdWUpIHtcbiAgICBpZiAoJ3NlbGVjdGVkRnJhY3Rpb24nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkRnJhY3Rpb24gPSB2YWx1ZTsgfVxuICAgIGlmICh0aGlzLnRhcmdldCAmJiB0aGlzLnRhcmdldC5zZWxlY3RlZEZyYWN0aW9uICE9PSB2YWx1ZSkge1xuICAgICAgdGhpcy50YXJnZXQuc2VsZWN0ZWRGcmFjdGlvbiA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW5kZXJUcmFuc2l0aW9uKHRoaXMsIHRoaXMuc2VsZWN0ZWRJbmRleCwgdmFsdWUpO1xuICAgIH1cbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdzZWxlY3RlZC1mcmFjdGlvbi1jaGFuZ2VkJykpO1xuICB9XG5cbiAgc2VsZWN0ZWRJdGVtQ2hhbmdlZCgpIHtcbiAgICBpZiAoc3VwZXIuc2VsZWN0ZWRJdGVtQ2hhbmdlZCkgeyBzdXBlci5zZWxlY3RlZEl0ZW1DaGFuZ2VkKCk7IH1cbiAgICBsZXQgc2VsZWN0ZWRJbmRleCA9IHRoaXMuc2VsZWN0ZWRJbmRleDtcbiAgICB0aGlzLmRvdHMuZm9yRWFjaCgoZG90LCBpKSA9PiB7XG4gICAgICB0b2dnbGVDbGFzcyhkb3QsICdzZWxlY3RlZCcsIGkgPT09IHNlbGVjdGVkSW5kZXgpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0IHRhcmdldCgpIHtcbiAgICByZXR1cm4gc3VwZXIudGFyZ2V0O1xuICB9XG4gIHNldCB0YXJnZXQoZWxlbWVudCkge1xuICAgIGlmICgndGFyZ2V0JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci50YXJnZXQgPSBlbGVtZW50OyB9XG4gICAgaWYgKHRoaXNbc2VsZWN0ZWRGcmFjdGlvbkNoYW5nZWRMaXN0ZW5lclN5bWJvbF0pIHtcbiAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2VsZWN0ZWQtZnJhY3Rpb24tY2hhbmdlZCcsIHRoaXNbc2VsZWN0ZWRGcmFjdGlvbkNoYW5nZWRMaXN0ZW5lclN5bWJvbF0pO1xuICAgIH1cbiAgICB0aGlzW3NlbGVjdGVkRnJhY3Rpb25DaGFuZ2VkTGlzdGVuZXJTeW1ib2xdID0gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzZWxlY3RlZC1mcmFjdGlvbi1jaGFuZ2VkJywgZXZlbnQgPT4ge1xuICAgICAgdGhpcy5zZWxlY3RlZEZyYWN0aW9uID0gZWxlbWVudC5zZWxlY3RlZEZyYWN0aW9uO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBgXG4gICAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICAjZG90cyB7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgIH1cblxuICAgICAgI2NvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLXdlYmtpdC1mbGV4OiAxO1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgICB9XG5cbiAgICAgICNjb250YWluZXIgOjpzbG90dGVkKCopIHtcbiAgICAgICAgLXdlYmtpdC1mbGV4OiAxO1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgfVxuXG4gICAgICAuZG90IHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBoZWlnaHQ6IDhweDtcbiAgICAgICAgbWFyZ2luOiA3cHggNXB4O1xuICAgICAgICBvcGFjaXR5OiAwLjQ7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyBib3gtc2hhZG93IDAuMnM7XG4gICAgICAgIHdpZHRoOiA4cHg7XG4gICAgICB9XG5cbiAgICAgIC5kb3Q6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMXB4IDNweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gICAgICB9XG5cbiAgICAgIC5kb3Quc2VsZWN0ZWQge1xuICAgICAgICBvcGFjaXR5OiAwLjk1O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgLmRvdCB7XG4gICAgICAgICAgaGVpZ2h0OiAxMnB4O1xuICAgICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGlkPVwiZG90c1wiPjwvZGl2PlxuICAgICAgPGRpdiBpZD1cImNvbnRhaW5lclwiIHJvbGU9XCJub25lXCI+XG4gICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxufVxuXG5cbi8vIFJldHVybiB0aGUgaW5kZXgsIGVuc3VyaW5nIGl0IHN0YXlzIGJldHdlZW4gMCBhbmQgdGhlIGdpdmVuIGxlbmd0aC5cbmZ1bmN0aW9uIGtlZXBJbmRleFdpdGhpbkJvdW5kcyhsZW5ndGgsIGluZGV4KSB7XG4gIC8vIEhhbmRsZSBwb3NzaWJpbGl0eSBvZiBuZWdhdGl2ZSBtb2QuXG4gIC8vIFNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xODYxODI1MC83NjQ3MlxuICByZXR1cm4gKChpbmRleCAlIGxlbmd0aCkgKyBsZW5ndGgpICUgbGVuZ3RoO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUcmFuc2l0aW9uKGVsZW1lbnQsIHNlbGVjdGVkSW5kZXgsIHNlbGVjdGVkRnJhY3Rpb24pIHtcbiAgbGV0IGRvdHMgPSBlbGVtZW50LmRvdHM7XG4gIGlmICghZG90cyB8fCBkb3RzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybjtcbiAgfVxuICBsZXQgZG90Q291bnQgPSBkb3RzLmxlbmd0aDtcbiAgbGV0IG9wYWNpdHlNaW5pbXVtID0gMC40O1xuICBsZXQgb3BhY2l0eU1heGltdW0gPSAwLjk1O1xuICBsZXQgb3BhY2l0eVJhbmdlID0gb3BhY2l0eU1heGltdW0gLSBvcGFjaXR5TWluaW11bTtcbiAgbGV0IGZyYWN0aW9uYWxJbmRleCA9IHNlbGVjdGVkSW5kZXggKyBzZWxlY3RlZEZyYWN0aW9uO1xuICBsZXQgbGVmdEluZGV4ID0gTWF0aC5mbG9vcihmcmFjdGlvbmFsSW5kZXgpO1xuICBsZXQgcmlnaHRJbmRleCA9IE1hdGguY2VpbChmcmFjdGlvbmFsSW5kZXgpO1xuICBsZXQgc2VsZWN0aW9uV3JhcHMgPSBlbGVtZW50LnNlbGVjdGlvbldyYXBzO1xuICBsZXQgYXdheUluZGV4ID0gc2VsZWN0ZWRGcmFjdGlvbiA+PSAwID8gbGVmdEluZGV4IDogcmlnaHRJbmRleDtcbiAgbGV0IHRvd2FyZEluZGV4ID0gc2VsZWN0ZWRGcmFjdGlvbiA+PSAwID8gcmlnaHRJbmRleCA6IGxlZnRJbmRleDtcbiAgaWYgKHNlbGVjdGlvbldyYXBzKSB7XG4gICAgYXdheUluZGV4ID0ga2VlcEluZGV4V2l0aGluQm91bmRzKGRvdENvdW50LCBhd2F5SW5kZXgpO1xuICAgIHRvd2FyZEluZGV4ID0ga2VlcEluZGV4V2l0aGluQm91bmRzKGRvdENvdW50LCB0b3dhcmRJbmRleCk7XG4gIH1cbiAgLy8gU3R1cGlkIElFIGRvZXNuJ3QgaGF2ZSBNYXRoLnRydW5jLlxuICAvLyBsZXQgdHJ1bmNhdGVkU2VsZWN0ZWRGcmFjdGlvbiA9IE1hdGgudHJ1bmMoc2VsZWN0ZWRGcmFjdGlvbik7XG4gIGxldCB0cnVuY2F0ZWRTZWxlY3RlZEZyYWN0aW9uID0gc2VsZWN0ZWRGcmFjdGlvbiA8IDAgPyBNYXRoLmNlaWwoc2VsZWN0ZWRGcmFjdGlvbikgOiBNYXRoLmZsb29yKHNlbGVjdGVkRnJhY3Rpb24pO1xuICBsZXQgcHJvZ3Jlc3MgPSBzZWxlY3RlZEZyYWN0aW9uIC0gdHJ1bmNhdGVkU2VsZWN0ZWRGcmFjdGlvbjtcbiAgbGV0IG9wYWNpdHlQcm9ncmVzc1Rocm91Z2hSYW5nZSA9IE1hdGguYWJzKHByb2dyZXNzKSAqIG9wYWNpdHlSYW5nZTtcbiAgZG90cy5mb3JFYWNoKChkb3QsIGluZGV4KSA9PiB7XG4gICAgbGV0IGRvdE9wYWNpdHk7XG4gICAgaWYgKHNlbGVjdGVkRnJhY3Rpb24gPT09IDApIHtcbiAgICAgIC8vIFJlbW92ZSBleHBsaWNpdCBvcGFjaXR5IGFuZCByZWx5IG9uIHN0eWxpbmcuXG4gICAgICBkb3RPcGFjaXR5ID0gJyc7XG4gICAgfSBlbHNlIGlmIChpbmRleCA9PT0gYXdheUluZGV4KSB7XG4gICAgICBkb3RPcGFjaXR5ID0gb3BhY2l0eU1heGltdW0gLSBvcGFjaXR5UHJvZ3Jlc3NUaHJvdWdoUmFuZ2U7XG4gICAgfSBlbHNlIGlmIChpbmRleCA9PT0gdG93YXJkSW5kZXgpIHtcbiAgICAgIGRvdE9wYWNpdHkgPSBvcGFjaXR5TWluaW11bSArIG9wYWNpdHlQcm9ncmVzc1Rocm91Z2hSYW5nZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG90T3BhY2l0eSA9IG9wYWNpdHlNaW5pbXVtO1xuICAgIH1cbiAgICBkb3Quc3R5bGUub3BhY2l0eSA9IGRvdE9wYWNpdHk7XG4gIH0pO1xufVxuXG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYmFzaWMtcGFnZS1kb3RzJywgUGFnZURvdHMpO1xuZXhwb3J0IGRlZmF1bHQgUGFnZURvdHM7XG4iLCJpbXBvcnQgRWxlbWVudEJhc2UgZnJvbSAnLi4vLi4vYmFzaWMtZWxlbWVudC1iYXNlL3NyYy9FbGVtZW50QmFzZSc7XG5pbXBvcnQgQ29udGVudEZpcnN0Q2hpbGRUYXJnZXQgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ29udGVudEZpcnN0Q2hpbGRUYXJnZXQnO1xuaW1wb3J0IERpcmVjdGlvblNlbGVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXJlY3Rpb25TZWxlY3Rpb24nO1xuaW1wb3J0IERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCc7XG5pbXBvcnQgS2V5Ym9hcmQgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvS2V5Ym9hcmQnO1xuaW1wb3J0IEtleWJvYXJkRGlyZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0tleWJvYXJkRGlyZWN0aW9uJztcbmltcG9ydCBTaW5nbGVTZWxlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2luZ2xlU2VsZWN0aW9uJztcbmltcG9ydCBUYXJnZXRJbkNvbGxlY3RpdmUgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvVGFyZ2V0SW5Db2xsZWN0aXZlJztcbmltcG9ydCBUYXJnZXRTZWxlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvVGFyZ2V0U2VsZWN0aW9uJztcbmltcG9ydCB0b2dnbGVDbGFzcyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy90b2dnbGVDbGFzcyc7XG5cblxubGV0IGJhc2UgPSBFbGVtZW50QmFzZS5jb21wb3NlKFxuICBDb250ZW50Rmlyc3RDaGlsZFRhcmdldCxcbiAgRGlyZWN0aW9uU2VsZWN0aW9uLFxuICBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50LFxuICBLZXlib2FyZCxcbiAgS2V5Ym9hcmREaXJlY3Rpb24sXG4gIFNpbmdsZVNlbGVjdGlvbixcbiAgVGFyZ2V0SW5Db2xsZWN0aXZlLFxuICBUYXJnZXRTZWxlY3Rpb25cbik7XG5cbi8qKlxuICogQXV4aWxpYXJ5IGNvbXBvbmVudCBmb3IgbWFuYWdpbmcgcGxheWJhY2sgb2YgYSBzbGlkZXNob3csIGF1ZGlvIHBsYXlsaXN0LCBldGMuXG4gKlxuICogVGhpcyBjb21wb25lbnQgY2FuIGJlIHVzZWQgdG8gd3JhcCBhIGNvbXBvbmVudCBsaWtlXG4gKiBbYmFzaWMtc2xpZGVzaG93XSguLi9iYXNpYy1zbGlkZXNob3cpLiBFeGFtcGxlOlxuICpcbiAqICAgICA8YmFzaWMtcGxheS1jb250cm9scz5cbiAqICAgICAgIDxiYXNpYy1zbGlkZXNob3c+XG4gKiAgICAgICAgIC4uLiBpbWFnZXMsIGV0Yy4gLi4uXG4gKiAgICAgICA8L2Jhc2ljLXNsaWRlc2hvdz5cbiAqICAgICA8L2Jhc2ljLXBsYXktY29udHJvbHM+XG4gKlxuICogQGV4dGVuZHMgRWxlbWVudEJhc2VcbiAqIEBtaXhlcyBDb250ZW50Rmlyc3RDaGlsZFRhcmdldFxuICogQG1peGVzIERpcmVjdGlvblNlbGVjdGlvblxuICogQG1peGVzIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnRcbiAqIEBtaXhlcyBLZXlib2FyZFxuICogQG1peGVzIEtleWJvYXJkRGlyZWN0aW9uXG4gKiBAbWl4ZXMgU2luZ2xlU2VsZWN0aW9uXG4gKiBAbWl4ZXMgVGFyZ2V0SW5Db2xsZWN0aXZlXG4gKiBAbWl4ZXMgVGFyZ2V0U2VsZWN0aW9uXG4gKi9cbmNsYXNzIFBsYXlDb250cm9scyBleHRlbmRzIGJhc2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy4kLnByZXZpb3VzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgdGhpcy5zZWxlY3RQcmV2aW91cygpO1xuICAgIH0pO1xuICAgIHRoaXMuJC5wbGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgdGhpcy5wbGF5aW5nID0gIXRoaXMucGxheWluZztcbiAgICB9KTtcbiAgICB0aGlzLiQubmV4dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgIHRoaXMuc2VsZWN0TmV4dCgpO1xuICAgIH0pO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKSB7IHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7IH1cbiAgICB0b2dnbGVDbGFzcyh0aGlzLCAncGxheWluZycsIHRoaXMucGxheWluZyk7XG4gIH1cblxuICBrZXlkb3duKGV2ZW50KSB7XG4gICAgbGV0IGhhbmRsZWQ7XG5cbiAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgIGNhc2UgMzI6IC8qIFNwYWNlICovXG4gICAgICAgIHRoaXMucGxheWluZyA9ICF0aGlzLnBsYXlpbmc7XG4gICAgICAgIGhhbmRsZWQgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICAvLyBQcmVmZXIgbWl4aW4gcmVzdWx0IGlmIGl0J3MgZGVmaW5lZCwgb3RoZXJ3aXNlIHVzZSBiYXNlIHJlc3VsdC5cbiAgICByZXR1cm4gaGFuZGxlZCB8fCAoc3VwZXIua2V5ZG93biAmJiBzdXBlci5rZXlkb3duKGV2ZW50KSk7XG4gIH1cblxuICBwYXVzZSgpIHtcbiAgICBpZiAodGhpcy50YXJnZXQpIHtcbiAgICAgIHRoaXMudGFyZ2V0LnBhdXNlKCk7XG4gICAgfVxuICB9XG5cbiAgcGxheSgpIHtcbiAgICBpZiAodGhpcy50YXJnZXQpIHtcbiAgICAgIHRoaXMudGFyZ2V0LnBsYXkoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgcGxheWluZygpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXQgJiYgdGhpcy50YXJnZXQucGxheWluZztcbiAgfVxuICBzZXQgcGxheWluZyh2YWx1ZSkge1xuICAgIGlmICgncGxheWluZycgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIucGxheWluZyA9IHZhbHVlOyB9XG4gICAgaWYgKHRoaXMudGFyZ2V0KSB7XG4gICAgICB0aGlzLnRhcmdldC5wbGF5aW5nID0gdmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLnBhcmVudE5vZGUpIHtcbiAgICAgIHRvZ2dsZUNsYXNzKHRoaXMsICdwbGF5aW5nJywgdmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gYFxuICAgICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgI2J1dHRvbnMge1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICB9XG5cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGZpbGw6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgdHJhbnNpdGlvbjogZmlsbCAwLjVzO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgfVxuICAgICAgOmhvc3QoOmhvdmVyKSBidXR0b24ge1xuICAgICAgICBmaWxsOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gICAgICB9XG4gICAgICBidXR0b246aG92ZXIge1xuICAgICAgICBmaWxsOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpO1xuICAgICAgfVxuICAgICAgYnV0dG9uOmFjdGl2ZSB7XG4gICAgICAgIGZpbGw6IHdoaXRlO1xuICAgICAgfVxuXG4gICAgICAuaWNvbiB7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICB9XG4gICAgICAjcGxheUJ1dHRvbiAuaWNvbiB7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KC5wbGF5aW5nKSAucGF1c2VkQ29udHJvbCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgICA6aG9zdCg6bm90KC5wbGF5aW5nKSkgLnBsYXlpbmdDb250cm9sIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgI2NvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLXdlYmtpdC1mbGV4OiAxO1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgfVxuXG4gICAgICAjY29udGFpbmVyIDo6c2xvdHRlZCgqKSB7XG4gICAgICAgIC13ZWJraXQtZmxleDogMTtcbiAgICAgICAgZmxleDogMTtcbiAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgaWQ9XCJidXR0b25zXCI+XG4gICAgICAgIDxidXR0b24gaWQ9XCJwcmV2aW91c0J1dHRvblwiPlxuICAgICAgICAgIDxzdmcgY2xhc3M9XCJpY29uXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBtZWV0XCI+XG4gICAgICAgICAgICA8ZyBpZD1cInNraXAtcHJldmlvdXNcIj5cbiAgICAgICAgICAgICAgPHBhdGggZD1cIk02IDZoMnYxMkg2em0zLjUgNmw4LjUgNlY2elwiLz5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gaWQ9XCJwbGF5QnV0dG9uXCI+XG4gICAgICAgICAgPHN2ZyBjbGFzcz1cImljb24gcGxheWluZ0NvbnRyb2xcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkIG1lZXRcIj5cbiAgICAgICAgICAgIDxnIGlkPVwicGF1c2UtY2lyY2xlLW91dGxpbmVcIj5cbiAgICAgICAgICAgICAgPHBhdGggZD1cIk05IDE2aDJWOEg5djh6bTMtMTRDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgMThjLTQuNDEgMC04LTMuNTktOC04czMuNTktOCA4LTggOCAzLjU5IDggOC0zLjU5IDgtOCA4em0xLTRoMlY4aC0ydjh6XCI+PC9wYXRoPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDxzdmcgY2xhc3M9XCJpY29uIHBhdXNlZENvbnRyb2xcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkIG1lZXRcIj5cbiAgICAgICAgICAgIDxnIGlkPVwicGxheS1jaXJjbGUtb3V0bGluZVwiPlxuICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEwIDE2LjVsNi00LjUtNi00LjV2OXpNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMCAxOGMtNC40MSAwLTgtMy41OS04LThzMy41OS04IDgtOCA4IDMuNTkgOCA4LTMuNTkgOC04IDh6XCI+PC9wYXRoPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBpZD1cIm5leHRCdXR0b25cIj5cbiAgICAgICAgICA8c3ZnIGNsYXNzPVwiaWNvblwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWQgbWVldFwiPlxuICAgICAgICAgICAgPGcgaWQ9XCJza2lwLW5leHRcIj5cbiAgICAgICAgICAgICAgPHBhdGggZD1cIk02IDE4bDguNS02TDYgNnYxMnpNMTYgNnYxMmgyVjZoLTJ6XCIvPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGlkPVwiY29udGFpbmVyXCIgcm9sZT1cIm5vbmVcIj5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG59XG5cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdiYXNpYy1wbGF5LWNvbnRyb2xzJywgUGxheUNvbnRyb2xzKTtcbiIsImltcG9ydCBFbGVtZW50QmFzZSBmcm9tICcuLi8uLi9iYXNpYy1lbGVtZW50LWJhc2Uvc3JjL0VsZW1lbnRCYXNlJztcbmltcG9ydCBDb250ZW50Rmlyc3RDaGlsZFRhcmdldCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Db250ZW50Rmlyc3RDaGlsZFRhcmdldCc7XG5pbXBvcnQgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50JztcbmltcG9ydCBTaW5nbGVTZWxlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2luZ2xlU2VsZWN0aW9uJztcbmltcG9ydCBLZXlib2FyZCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9LZXlib2FyZCc7XG5pbXBvcnQgS2V5Ym9hcmREaXJlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvS2V5Ym9hcmREaXJlY3Rpb24nO1xuaW1wb3J0IFRhcmdldEluQ29sbGVjdGl2ZSBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9UYXJnZXRJbkNvbGxlY3RpdmUnO1xuaW1wb3J0IFRhcmdldFNlbGVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9UYXJnZXRTZWxlY3Rpb24nO1xuaW1wb3J0IFRpbWVyU2VsZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1RpbWVyU2VsZWN0aW9uJztcblxuXG5sZXQgYmFzZSA9IEVsZW1lbnRCYXNlLmNvbXBvc2UoXG4gIENvbnRlbnRGaXJzdENoaWxkVGFyZ2V0LFxuICBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50LFxuICBTaW5nbGVTZWxlY3Rpb24sXG4gIEtleWJvYXJkLFxuICBLZXlib2FyZERpcmVjdGlvbixcbiAgVGFyZ2V0SW5Db2xsZWN0aXZlLFxuICBUYXJnZXRTZWxlY3Rpb24sXG4gIFRpbWVyU2VsZWN0aW9uXG4pO1xuXG5cbi8qKlxuICogQXV4aWxpYXJ5IGNvbXBvbmVudCB0byBhZHZhbmNlIGEgc2VsZWN0aW9uIHdpdGggYSB0aW1lci5cbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBpcyBnZW5lcmFsbHkgdXNlZCB0byB3cmFwIGEgY29tcG9uZW50IGxpa2VcbiAqIFtiYXNpYy1jYXJvdXNlbF0oLi4vYmFzaWMtY2Fyb3VzZWwpIG9yIHRoZSBzaW1wbGVyXG4gKiBbYmFzaWMtc2xpZGluZy1jYXJvdXNlbF0oLi4vYmFzaWMtc2xpZGluZy1jYXJvdXNlbCkgdG8gYWRkIHNsaWRlc2hvd1xuICogYmVoYXZpb3IuIEZvciBhIHN0YW5kYWxvbmUgc2xpZGVzaG93IGNvbXBvbmVudCwgc2VlXG4gKiBbYmFzaWMtc2xpZGVzaG93XSguLi9iYXNpYy1zbGlkZXNob3cpLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogICAgIDxiYXNpYy1zbGlkZXNob3ctdGltZXI+XG4gKiAgICAgICA8YmFzaWMtY2Fyb3VzZWw+XG4gKiAgICAgICAgIC4uLiBpbWFnZXMgb3Igb3RoZXIgZWxlbWVudHMgLi4uXG4gKiAgICAgICA8L2Jhc2ljLWNhcm91c2VsPlxuICogICAgIDwvYmFzaWMtc2xpZGVzaG93LXRpbWVyPlxuICpcbiAqIFRoZSBiYXNpYy1zbGlkZXNob3ctdGltZXIgY29tcG9uZW50IHByb3ZpZGVzIG5vIHZpc2libGUgdXNlciBpbnRlcmZhY2VcbiAqIGVsZW1lbnRzLCBhbmQgZXhpc3RzIGNoaWVmbHkgYXMgYSBjb252ZW5pZW5jZSBmb3IgdXNlIGluIHNjZW5hcmlvcyBsaWtlIHRoZVxuICogb25lIGFib3ZlLiBJZiB5b3UncmUgZGV2ZWxvcGluZyBhIGNvbXBvbmVudCB0aGF0IHdpbGwgYWx3YXlzIHdhbnQgdG8gcHJvdmlkZVxuICogc2xpZGVzaG93IHNlbWFudGljcywgY29uc2lkZXIgZGlyZWN0bHkgYXBwbHlpbmcgdGhlXG4gKiBbVGltZXJTZWxlY3Rpb25dKC4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvZG9jcy9UaW1lclNlbGVjdGlvbi5tZCkgbWl4aW5cbiAqIHRvIHlvdXIgY29tcG9uZW50LlxuICpcbiAqIEBleHRlbmRzIEVsZW1lbnRCYXNlXG4gKi9cbmNsYXNzIFNsaWRlc2hvd1RpbWVyIGV4dGVuZHMgYmFzZSB7XG5cbiAgZ2V0IGRlZmF1bHRzKCkge1xuICAgIGxldCBkZWZhdWx0cyA9IHN1cGVyLmRlZmF1bHRzIHx8IHt9O1xuICAgIGRlZmF1bHRzLnBsYXlpbmcgPSB0cnVlO1xuICAgIGRlZmF1bHRzLnNlbGVjdGlvbkFuaW1hdGlvbkR1cmF0aW9uID0gNTAwO1xuICAgIGRlZmF1bHRzLnNlbGVjdGlvblJlcXVpcmVkID0gdHJ1ZTtcbiAgICBkZWZhdWx0cy5zZWxlY3Rpb25UaW1lckR1cmF0aW9uID0gMzAwMDtcbiAgICByZXR1cm4gZGVmYXVsdHM7XG4gIH1cblxuICBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICBgO1xuICB9XG5cbn1cblxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2Jhc2ljLXNsaWRlc2hvdy10aW1lcicsIFNsaWRlc2hvd1RpbWVyKTtcbiIsImltcG9ydCBFbGVtZW50QmFzZSBmcm9tICcuLi8uLi9iYXNpYy1lbGVtZW50LWJhc2Uvc3JjL0VsZW1lbnRCYXNlJztcbmltcG9ydCBDb250ZW50QXNJdGVtcyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Db250ZW50QXNJdGVtcyc7XG5pbXBvcnQgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50JztcbmltcG9ydCBGcmFjdGlvbmFsU2VsZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0ZyYWN0aW9uYWxTZWxlY3Rpb24nO1xuaW1wb3J0IFNlbGVjdGlvbkFuaW1hdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TZWxlY3Rpb25BbmltYXRpb24nO1xuaW1wb3J0IFNlbGVjdGlvbkFyaWFBY3RpdmUgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2VsZWN0aW9uQXJpYUFjdGl2ZSc7XG5pbXBvcnQgU2luZ2xlU2VsZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NpbmdsZVNlbGVjdGlvbic7XG5pbXBvcnQgVGltZXJTZWxlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvVGltZXJTZWxlY3Rpb24nO1xuXG5cbmxldCBiYXNlID0gRWxlbWVudEJhc2UuY29tcG9zZShcbiAgQ29udGVudEFzSXRlbXMsXG4gIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQsXG4gIEZyYWN0aW9uYWxTZWxlY3Rpb24sXG4gIFNlbGVjdGlvbkFuaW1hdGlvbixcbiAgU2VsZWN0aW9uQXJpYUFjdGl2ZSxcbiAgU2luZ2xlU2VsZWN0aW9uLFxuICBUaW1lclNlbGVjdGlvblxuKTtcblxuLyoqXG4gKiBTbGlkZXNob3cgd2l0aCBhbmltYXRlZCB0cmFuc2l0aW9ucy5cbiAqXG4gKiBCeSBkZWZhdWx0IHRoZSBzbGlkZXNob3cgd2lsbCBpbW1lZGlhdGVseSBiZWdpbiBwbGF5aW5nIHdoZW4gaXQgaXMgY29ubmVjdGVkXG4gKiB0byB0aGUgZG9jdW1lbnQsIGFkdmFuY2UgZXZlcnkgMzAwMCBtcyAoMyBzZWNvbmRzKSwgYW5kIHVzZSBhIHNpbXBsZVxuICogY3Jvc3NmYWRlIGVmZmVjdC5cbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBjYW4gYmUgdXNlZCBvbiBpdHMgb3duLiBUbyBpbmNvcnBvcmF0ZSBzbGlkZXNob3cgYmVoYXZpb3IgaW50b1xuICogYSBjb21wb25lbnQgb2YgeW91ciBvd24sIGFwcGx5IHRoZVxuICogW1RpbWVyU2VsZWN0aW9uXSguLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL2RvY3MvVGltZXJTZWxlY3Rpb24ubWQpIG1peGluLiBUb1xuICogYWRkIHNsaWRlc2hvdyBmdW5jdGlvbmFsaXR5IHRvIGEgY29tcG9uZW50IHN1Y2ggYXMgYSBjYXJvdXNlbCwgd3JhcCBpdCB3aXRoXG4gKiB0aGUgYXV4aWxpYXJ5IFtiYXNpYy1zbGlkZXNob3ctdGltZXJdKC4uL2Jhc2ljLXNsaWRlc2hvdy10aW1lcikgY29tcG9uZW50LlxuICpcbiAqIEBleHRlbmRzIEVsZW1lbnRCYXNlXG4gKiBAbWl4ZXMgQ29udGVudEFzSXRlbXNcbiAqIEBtaXhlcyBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50XG4gKiBAbWl4ZXMgRnJhY3Rpb25hbFNlbGVjdGlvblxuICogQG1peGVzIFNlbGVjdGlvbkFuaW1hdGlvblxuICogQG1peGVzIFNlbGVjdGlvbkFyaWFBY3RpdmVcbiAqIEBtaXhlcyBTaW5nbGVTZWxlY3Rpb25cbiAqIEBtaXhlcyBUaW1lclNlbGVjdGlvblxuICovXG5jbGFzcyBTbGlkZXNob3cgZXh0ZW5kcyBiYXNlIHtcblxuICBnZXQgZGVmYXVsdHMoKSB7XG4gICAgbGV0IGRlZmF1bHRzID0gc3VwZXIuZGVmYXVsdHMgfHwge307XG4gICAgZGVmYXVsdHMucGxheWluZyA9IHRydWU7XG4gICAgZGVmYXVsdHMuc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb24gPSA1MDA7XG4gICAgZGVmYXVsdHMuc2VsZWN0aW9uQW5pbWF0aW9uRWZmZWN0ID0gJ2Nyb3NzZmFkZSc7XG4gICAgZGVmYXVsdHMuc2VsZWN0aW9uUmVxdWlyZWQgPSB0cnVlO1xuICAgIGRlZmF1bHRzLnNlbGVjdGlvblRpbWVyRHVyYXRpb24gPSAzMDAwO1xuICAgIGRlZmF1bHRzLnNlbGVjdGlvbldyYXBzID0gdHJ1ZTtcbiAgICByZXR1cm4gZGVmYXVsdHM7XG4gIH1cblxuICBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgICNjb250YWluZXIgOjpzbG90dGVkKCopIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBpZD1cImNvbnRhaW5lclwiIHJvbGU9XCJub25lXCI+XG4gICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxufVxuXG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYmFzaWMtc2xpZGVzaG93JywgU2xpZGVzaG93KTtcbiIsImltcG9ydCBFbGVtZW50QmFzZSBmcm9tICcuLi8uLi9iYXNpYy1lbGVtZW50LWJhc2Uvc3JjL0VsZW1lbnRCYXNlJztcbmltcG9ydCBDb250ZW50QXNJdGVtcyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Db250ZW50QXNJdGVtcyc7XG5pbXBvcnQgRGlyZWN0aW9uU2VsZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0RpcmVjdGlvblNlbGVjdGlvbic7XG5pbXBvcnQgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50JztcbmltcG9ydCBGcmFjdGlvbmFsU2VsZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0ZyYWN0aW9uYWxTZWxlY3Rpb24nO1xuaW1wb3J0IEtleWJvYXJkIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0tleWJvYXJkJztcbmltcG9ydCBLZXlib2FyZERpcmVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9LZXlib2FyZERpcmVjdGlvbic7XG5pbXBvcnQgU2VsZWN0aW9uQXJpYUFjdGl2ZSBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TZWxlY3Rpb25BcmlhQWN0aXZlJztcbmltcG9ydCBTaW5nbGVTZWxlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2luZ2xlU2VsZWN0aW9uJztcbmltcG9ydCBTbGlkaW5nVmlld3BvcnQgZnJvbSAnLi4vLi4vYmFzaWMtc2xpZGluZy12aWV3cG9ydC9zcmMvU2xpZGluZ1ZpZXdwb3J0JzsgLy8ganNoaW50IGlnbm9yZTpsaW5lXG5pbXBvcnQgU3dpcGVEaXJlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU3dpcGVEaXJlY3Rpb24nO1xuaW1wb3J0IFRhcmdldEluQ29sbGVjdGl2ZSBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9UYXJnZXRJbkNvbGxlY3RpdmUnO1xuaW1wb3J0IFRyYWNrcGFkRGlyZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1RyYWNrcGFkRGlyZWN0aW9uJztcblxubGV0IGJhc2UgPSBFbGVtZW50QmFzZS5jb21wb3NlKFxuICBDb250ZW50QXNJdGVtcyxcbiAgRGlyZWN0aW9uU2VsZWN0aW9uLFxuICBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50LFxuICBGcmFjdGlvbmFsU2VsZWN0aW9uLFxuICBLZXlib2FyZCxcbiAgS2V5Ym9hcmREaXJlY3Rpb24sXG4gIFNlbGVjdGlvbkFyaWFBY3RpdmUsXG4gIFNpbmdsZVNlbGVjdGlvbixcbiAgU3dpcGVEaXJlY3Rpb24sXG4gIFRhcmdldEluQ29sbGVjdGl2ZSxcbiAgVHJhY2twYWREaXJlY3Rpb25cbik7XG5cblxuLyoqXG4gKiBMZXRzIHRoZSB1c2VyIG5hdmlnYXRlIGxhdGVyYWxseSB0aHJvdWdoIGEgc2VxdWVuY2Ugb2YgY2hpbGQgZWxlbWVudHMuXG4gKlxuICogW0xpdmUgZGVtb10oaHR0cDovL2Jhc2ljd2ViY29tcG9uZW50cy5vcmcvYmFzaWMtd2ViLWNvbXBvbmVudHMvcGFja2FnZXMvYmFzaWMtY2Fyb3VzZWwvKVxuICpcbiAqIGJhc2ljLXNsaWRpbmctY2Fyb3VzZWwgaXMgYW4gaW1wbGVtZW50YXRpb24gb2YgdGhlIGNhcm91c2VsIHVzZXIgaW50ZXJmYWNlIHBhdHRlcm4sXG4gKiBjb21tb25seSB1c2VkIGZvciBuYXZpZ2F0aW5nIGJldHdlZW4gaW1hZ2VzLCBwYWdlcywgYW5kIG90aGVyIGVsZW1lbnRzLiBUaGlzXG4gKiBwYXR0ZXJuIHByZXNlbnRzIHRoZSB1c2VyIHdpdGggYSBsaW5lYXIgc2VxdWVuY2Ugb2YgZWxlbWVudHMsIG9ubHkgb25lIG9mXG4gKiB3aGljaCBpcyBzaG93biBhdCBhIHRpbWUuIFRoZSB1c2VyIGNhbiBuYXZpZ2F0ZSB0byB0aGUgbmV4dC9wcmV2aW91cyBlbGVtZW50XG4gKiB3aXRoIGEgdmFyaWV0eSBvZiBpbnB1dCBtZXRob2RzLlxuICpcbiAqIGJhc2ljLXNsaWRpbmctY2Fyb3VzZWwgaXMgYSBzaW1wbGVyIHZhcmlhdGlvbiBvZiB0aGUgbW9yZSBzb3BoaXN0aWNhdGVkXG4gKiBbYmFzaWMtY2Fyb3VzZWxdKC4uL2Jhc2ljLWNhcm91c2VsKSBjb21wb25lbnQuIFRoZSBsYXR0ZXIgaW5jbHVkZXMgc3VwcG9ydFxuICogZm9yIF93cmFwcGluZ18gKGdvaW5nIGZvcndhcmQgZnJvbSB0aGUgbGFzdCBpdGVtIHRvIHRoZSBmaXJzdCwgYW5kIHZpY2UgdmVyc2EpLFxuICogYW5kIG1vcmUgY29tcGxleCB2aXN1YWwgdHJhbnNpdGlvbnMuIFRob3NlIHRyYW5zaXRpb25zIGVudGFpbCB1c2Ugb2YgdGhlXG4gKiBXZWIgQW5pbWF0aW9uIEFQSSwgd2hpY2ggcmVxdWlyZXMgYSBwb2x5ZmlsbCBpbiBvbGRlciBicm93c2Vycy4gSGVuY2UsIHRoZVxuICogc2ltcGxlciBiYXNpYy1zbGlkaW5nLWNhcm91c2VsIG1heSBiZSBhIG1vcmUgYXBwcm9wcmlhdGUgY2hvaWNlIGlmIGZhY3RvcnNcbiAqIHN1Y2ggYXMgZG93bmxvYWQgc2l6ZSBhcmUgY3JpdGljYWwuXG4gKlxuICogQmV5b25kIHRob3NlIGRpZmZlcmVuY2VzLCBiYXNpYy1zbGlkaW5nLWNhcm91c2VsIG9mZmVycyB0aGUgc2FtZSBBUEksIHVzYWdlXG4gKiByZWNvbW1lbmRhdGlvbnMsIGFuZCBzdXBwb3J0IGZvciBrZXlib2FyZC90b3VjaC9tb3VzZSBhbmQgYXNzaXN0aXZlIGRldmljZXMuXG4gKiBTZWUgdGhhdCBjb21wb25lbnQgZm9yIG1vcmUgZGV0YWlscyBvbiB1c2UuXG4gKlxuICogQGV4dGVuZHMgRWxlbWVudEJhc2VcbiAqIEBtaXhlcyBDb250ZW50QXNJdGVtc1xuICogQG1peGVzIERpcmVjdGlvblNlbGVjdGlvblxuICogQG1peGVzIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnRcbiAqIEBtaXhlcyBHZW5lcmljXG4gKiBAbWl4ZXMgS2V5Ym9hcmRcbiAqIEBtaXhlcyBLZXlib2FyZERpcmVjdGlvblxuICogQG1peGVzIFNlbGVjdGlvbkFyaWFBY3RpdmVcbiAqIEBtaXhlcyBTaW5nbGVTZWxlY3Rpb25cbiAqIEBtaXhlcyBTd2lwZURpcmVjdGlvblxuICogQG1peGVzIFRhcmdldEluQ29sbGVjdGl2ZVxuICogQG1peGVzIFRyYWNrcGFkRGlyZWN0aW9uXG4gKi9cbmNsYXNzIFNsaWRpbmdDYXJvdXNlbCBleHRlbmRzIGJhc2Uge1xuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGlmIChzdXBlci5jb25uZWN0ZWRDYWxsYmFjaykgeyBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpOyB9XG4gICAgLy8gSEFDS1xuICAgIHRoaXMuaXRlbXNDaGFuZ2VkKCk7XG4gIH1cblxuICBnZXQgZGVmYXVsdHMoKSB7XG4gICAgbGV0IGRlZmF1bHRzID0gc3VwZXIuZGVmYXVsdHMgfHwge307XG4gICAgZGVmYXVsdHMubmF2aWdhdGlvbkF4aXMgPSAnaG9yaXpvbnRhbCc7XG4gICAgZGVmYXVsdHMuc2VsZWN0aW9uUmVxdWlyZWQgPSB0cnVlO1xuICAgIHJldHVybiBkZWZhdWx0cztcbiAgfVxuXG4gIGdldCBzZWxlY3RlZEZyYWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiQudmlld3BvcnQuc2VsZWN0ZWRGcmFjdGlvbjtcbiAgfVxuICBzZXQgc2VsZWN0ZWRGcmFjdGlvbih2YWx1ZSkge1xuICAgIGlmICgnc2VsZWN0ZWRGcmFjdGlvbicgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRGcmFjdGlvbiA9IHZhbHVlOyB9XG4gICAgdGhpcy4kLnZpZXdwb3J0LnNlbGVjdGVkRnJhY3Rpb24gPSB2YWx1ZTtcbiAgICBsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3NlbGVjdGVkLWZyYWN0aW9uLWNoYW5nZWQnKTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICB9XG5cbiAgZ2V0IHNlbGVjdGVkSW5kZXgoKSB7XG4gICAgcmV0dXJuIHN1cGVyLnNlbGVjdGVkSW5kZXg7XG4gIH1cbiAgc2V0IHNlbGVjdGVkSW5kZXgodmFsdWUpIHtcbiAgICBpZiAoJ3NlbGVjdGVkSW5kZXgnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkSW5kZXggPSB2YWx1ZTsgfVxuICAgIHRoaXMuJC52aWV3cG9ydC5zZWxlY3RlZEluZGV4ID0gdmFsdWU7XG4gIH1cblxuICBnZXQgc2VsZWN0ZWRJdGVtKCkge1xuICAgIHJldHVybiBzdXBlci5zZWxlY3RlZEl0ZW07XG4gIH1cbiAgc2V0IHNlbGVjdGVkSXRlbShpdGVtKSB7XG4gICAgaWYgKCdzZWxlY3RlZEl0ZW0nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkSXRlbSA9IGl0ZW07IH1cbiAgICB0aGlzLiQudmlld3BvcnQuc2VsZWN0ZWRJdGVtID0gaXRlbTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgd2hldGhlciBhIHRyYW5zaXRpb24gc2hvdWxkIGJlIHNob3duIGR1cmluZyBzZWxlY3Rpb24uXG4gICAqXG4gICAqIENvbXBvbmVudHMgbGlrZSBjYXJvdXNlbHMgb2Z0ZW4gZGVmaW5lIGFuaW1hdGVkIENTUyB0cmFuc2l0aW9ucyBmb3JcbiAgICogc2xpZGluZyBlZmZlY3RzLiBTdWNoIGEgdHJhbnNpdGlvbiBzaG91bGQgdXN1YWxseSAqbm90KiBiZSBhcHBsaWVkIHdoaWxlXG4gICAqIHRoZSB1c2VyIGlzIGRyYWdnaW5nLCBiZWNhdXNlIGEgQ1NTIGFuaW1hdGlvbiB3aWxsIGludHJvZHVjZSBhIGxhZyB0aGF0XG4gICAqIG1ha2VzIHRoZSBzd2lwZSBmZWVsIHNsdWdnaXNoLiBJbnN0ZWFkLCBhcyBsb25nIGFzIHRoZSB1c2VyIGlzIGRyYWdnaW5nXG4gICAqIHdpdGggdGhlaXIgZmluZ2VyIGRvd24sIHRoZSB0cmFuc2l0aW9uIHNob3VsZCBiZSBzdXBwcmVzc2VkLiBXaGVuIHRoZVxuICAgKiB1c2VyIHJlbGVhc2VzIHRoZWlyIGZpbmdlciwgdGhlIHRyYW5zaXRpb24gY2FuIGJlIHJlc3RvcmVkLCBhbGxvd2luZyB0aGVcbiAgICogYW5pbWF0aW9uIHRvIHNob3cgdGhlIGNhcm91c2VsIHNsaWRpbmcgaW50byBpdHMgZmluYWwgcG9zaXRpb24uXG4gICAqXG4gICAqIE5vdGU6IFRoaXMgcHJvcGVydHkgaXMgb25seSBpbnRlbmRlZCB0byBsZXQgYSBjb21wb25lbnQgY29vcGVyYXRlIHdpdGhcbiAgICogbWl4aW5zIHRoYXQgbWF5IGJlIGFwcGxpZWQgdG8gaXQsIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gbGV0IHNvbWVvbmVcbiAgICogdXNpbmcgY29tcG9uZW50IHBlcm1hbmVudGx5IGVuYWJsZSBvciBkaXNhYmxlIHRyYW5zaXRpb24gZWZmZWN0cy5cbiAgICpcbiAgICogQHR5cGUge2Jvb2xlYW59IHRydWUgaWYgYSBjb21wb25lbnQtcHJvdmlkZWQgdHJhbnNpdGlvbiBzaG91bGQgYmUgc2hvd24sXG4gICAqIGZhbHNlIGlmIG5vdC5cbiAgICovXG4gIGdldCBzaG93VHJhbnNpdGlvbigpIHtcbiAgICByZXR1cm4gc3VwZXIuc2hvd1RyYW5zaXRpb24gfHwgdGhpcy4kLnZpZXdwb3J0LnNob3dUcmFuc2l0aW9uO1xuICB9XG4gIHNldCBzaG93VHJhbnNpdGlvbih2YWx1ZSkge1xuICAgIGlmICgnc2hvd1RyYW5zaXRpb24nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNob3dUcmFuc2l0aW9uID0gdmFsdWU7IH1cbiAgICB0aGlzLiQudmlld3BvcnQuc2hvd1RyYW5zaXRpb24gPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gYFxuICAgICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB9XG5cbiAgICAgIGJhc2ljLXNsaWRpbmctdmlld3BvcnQge1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC13ZWJraXQtZmxleDogMTtcbiAgICAgICAgZmxleDogMTtcbiAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxiYXNpYy1zbGlkaW5nLXZpZXdwb3J0IGlkPVwidmlld3BvcnRcIiByb2xlPVwibm9uZVwiPlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICA8L2Jhc2ljLXNsaWRpbmctdmlld3BvcnQ+XG4gICAgYDtcbiAgfVxufVxuXG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYmFzaWMtc2xpZGluZy1jYXJvdXNlbCcsIFNsaWRpbmdDYXJvdXNlbCk7XG5leHBvcnQgZGVmYXVsdCBTbGlkaW5nQ2Fyb3VzZWw7XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL2NyZWF0ZVN5bWJvbCc7XG5pbXBvcnQgRWxlbWVudEJhc2UgZnJvbSAnLi4vLi4vYmFzaWMtZWxlbWVudC1iYXNlL3NyYy9FbGVtZW50QmFzZSc7XG5pbXBvcnQgRnJhY3Rpb25hbFNlbGVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9GcmFjdGlvbmFsU2VsZWN0aW9uJztcbmltcG9ydCBTcHJlYWRJdGVtcyBmcm9tICcuLi8uLi9iYXNpYy1zcHJlYWQtaXRlbXMvc3JjL1NwcmVhZEl0ZW1zJzsgLy8ganNoaW50IGlnbm9yZTpsaW5lXG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IHNlbGVjdGVkSXRlbVN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnc2VsZWN0ZWRJdGVtJyk7XG5cblxubGV0IGJhc2UgPSBFbGVtZW50QmFzZS5jb21wb3NlKFxuICBGcmFjdGlvbmFsU2VsZWN0aW9uXG4pO1xuXG5cbi8qKlxuICogUHJlc2VudHMgbGlzdCBpdGVtcyBpbiBhIHZpZXdwb3J0IHN1Y2ggdGhhdCBvbmx5IGEgc2luZ2xlIGl0ZW0gaXMgdmlzaWJsZSBhdFxuICogYSB0aW1lLlxuICpcbiAqIE5hdmlnYXRpbmcgYmV0d2VlbiBpdGVtcyB3aWxsIGJlIHJlcHJlc2VudGVkIHdpdGggYSBob3Jpem9udGFsIHZpc3VhbFxuICogc2xpZGluZyBlZmZlY3QuIEZvciBtb3JlIGNvbXBsZXggdmlzdWFsIGVmZmVjdHMsIHNlZVxuICogW2Jhc2ljLWFuaW1hdGlvbi1zdGFnZV0oLi4vYmFzaWMtYW5pbWF0aW9uLXN0YWdlKSwgd2hpY2ggdGFrZXMgYWR2YW50YWdlIG9mXG4gKiB0aGUgV2ViIEFuaW1hdGlvbnMgQVBJLlxuICpcbiAqIFRoaXMgY29tcG9uZW50IGhhbmRsZXMgdGhlIHJlbmRlcmluZyByZXNwb25zaWJpbGl0aWVzIGZvciB0aGUgYmFzaWMtY2Fyb3VzZWxcbiAqIGNvbXBvbmVudC5cbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBjdXJyZW50bHkgcmVxdWlyZXMgdGhhdCB5b3UgZXhwbGljaXRseSBhcHBseSBhIHNpemUgdG8gaXQuXG4gKlxuICogQGV4dGVuZHMgRWxlbWVudEJhc2VcbiAqL1xuY2xhc3MgU2xpZGluZ1ZpZXdwb3J0IGV4dGVuZHMgYmFzZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnNlbGVjdGVkRnJhY3Rpb24gPSAwO1xuICAgIHRoaXMuc2hvd1RyYW5zaXRpb24gPSB0cnVlO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKSB7IHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7IH1cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgZ2V0IGNvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuJC5zbGlkaW5nQ29udGFpbmVyLmNvbnRlbnQ7XG4gIH1cblxuICBnZXQgaXRlbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuJC5zbGlkaW5nQ29udGFpbmVyLml0ZW1zO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmIChzdXBlci5yZW5kZXIpIHsgc3VwZXIucmVuZGVyKCk7IH1cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyU2VsZWN0aW9uLmJpbmQodGhpcykpO1xuICB9XG5cbiAgZ2V0IHNlbGVjdGVkRnJhY3Rpb24oKSB7XG4gICAgcmV0dXJuIHN1cGVyLnNlbGVjdGVkRnJhY3Rpb247XG4gIH1cbiAgc2V0IHNlbGVjdGVkRnJhY3Rpb24odmFsdWUpIHtcbiAgICBpZiAoJ3NlbGVjdGVkRnJhY3Rpb24nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkRnJhY3Rpb24gPSB2YWx1ZTsgfVxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBnZXQgc2VsZWN0ZWRJbmRleCgpIHtcbiAgICBsZXQgaXRlbXMgPSB0aGlzLml0ZW1zO1xuICAgIGxldCBzZWxlY3RlZEl0ZW0gPSB0aGlzLnNlbGVjdGVkSXRlbTtcbiAgICByZXR1cm4gaXRlbXMgJiYgc2VsZWN0ZWRJdGVtID9cbiAgICAgIGl0ZW1zLmluZGV4T2Yoc2VsZWN0ZWRJdGVtKSA6XG4gICAgICAtMTtcbiAgfVxuICBzZXQgc2VsZWN0ZWRJbmRleChpbmRleCkge1xuICAgIGlmICgnc2VsZWN0ZWRJbmRleCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJbmRleCA9IGluZGV4OyB9XG4gICAgbGV0IGl0ZW0gPSB0aGlzLml0ZW1zICYmIHRoaXMuaXRlbXNbaW5kZXhdO1xuICAgIGlmIChpdGVtKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IGl0ZW07XG4gICAgfVxuICB9XG5cbiAgZ2V0IHNlbGVjdGVkSXRlbSgpIHtcbiAgICByZXR1cm4gdGhpc1tzZWxlY3RlZEl0ZW1TeW1ib2xdO1xuICB9XG4gIHNldCBzZWxlY3RlZEl0ZW0oaXRlbSkge1xuICAgIGlmICgnc2VsZWN0ZWRJdGVtJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEl0ZW0gPSBpdGVtOyB9XG4gICAgdGhpc1tzZWxlY3RlZEl0ZW1TeW1ib2xdID0gaXRlbTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgZ2V0IHNob3dUcmFuc2l0aW9uKCkge1xuICAgIHJldHVybiBzdXBlci5zaG93VHJhbnNpdGlvbiB8fCB0aGlzLmNsYXNzTGlzdC5jb250YWlucygnc2hvd1RyYW5zaXRpb24nKTtcbiAgfVxuICBzZXQgc2hvd1RyYW5zaXRpb24odmFsdWUpIHtcbiAgICBpZiAoJ3Nob3dUcmFuc2l0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zaG93VHJhbnNpdGlvbiA9IHZhbHVlOyB9XG4gICAgdGhpcy5yZWZsZWN0Q2xhc3MoJ3Nob3dUcmFuc2l0aW9uJywgdmFsdWUpO1xuICB9XG5cbiAgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBgXG4gICAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgICNzbGlkaW5nQ29udGFpbmVyIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIC8qXG4gICAgICAgICBTZXQgd2lkdGggZm9yIElFL0VkZ2UuIEl0J3Mgbm90IGNsZWFyIHdoeSB0aGV5IG5lZWQgdGhpcywgYW5kIHRoZSBvdGhlclxuICAgICAgICAgYnJvd3NlcnMgZG9uJ3QuXG4gICAgICAgICAqL1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoLnNob3dUcmFuc2l0aW9uKSAjc2xpZGluZ0NvbnRhaW5lciB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4ycyBlYXNlLW91dDtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1vdXQ7XG4gICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8YmFzaWMtc3ByZWFkLWl0ZW1zIGlkPVwic2xpZGluZ0NvbnRhaW5lclwiIHJvbGU9XCJub25lXCI+XG4gICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgIDwvYmFzaWMtc3ByZWFkLWl0ZW1zPlxuICAgIGA7XG4gIH1cblxufVxuXG5cbi8vIE5vdGU6IEluIHRoaXMgcm91dGluZSwgXCJ0aGlzXCIgaXMgYm91bmQgdG8gYW4gZWxlbWVudCBpbnN0YW5jZS5cbmZ1bmN0aW9uIHJlbmRlclNlbGVjdGlvbigpIHtcbiAgaWYgKCF0aGlzLnNlbGVjdGVkSXRlbSkge1xuICAgIHJldHVybjtcbiAgfVxuICBsZXQgc2VsZWN0aW9uID0gRnJhY3Rpb25hbFNlbGVjdGlvbi5oZWxwZXJzLmVsZW1lbnRTZWxlY3Rpb24odGhpcyk7XG4gIGxldCBpdGVtQ291bnQgPSB0aGlzLml0ZW1zID8gdGhpcy5pdGVtcy5sZW5ndGggOiAwO1xuICBsZXQgZGFtcGVkID0gRnJhY3Rpb25hbFNlbGVjdGlvbi5oZWxwZXJzLmRhbXBlZFNlbGVjdGlvbihzZWxlY3Rpb24sIGl0ZW1Db3VudCk7XG4gIC8vIFVzZSBhIHBlcmNlbnRhZ2Ugc28gdGhlIHRyYW5zZm9ybSB3aWxsIHN0aWxsIHdvcmsgaWYgc2NyZWVuIHNpemUgY2hhbmdlc1xuICAvLyAoZS5nLiwgaWYgZGV2aWNlIG9yaWVudGF0aW9uIGNoYW5nZXMpLlxuICBsZXQgbGVmdCA9IC1kYW1wZWQgKiAxMDA7XG4gIGxldCB0cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgnICsgbGVmdCArICclKSc7XG4gIHRoaXMuJC5zbGlkaW5nQ29udGFpbmVyLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgdGhpcy4kLnNsaWRpbmdDb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xufVxuXG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYmFzaWMtc2xpZGluZy12aWV3cG9ydCcsIFNsaWRpbmdWaWV3cG9ydCk7XG5leHBvcnQgZGVmYXVsdCBTbGlkaW5nVmlld3BvcnQ7XG4iLCJpbXBvcnQgRWxlbWVudEJhc2UgZnJvbSAnLi4vLi4vYmFzaWMtZWxlbWVudC1iYXNlL3NyYy9FbGVtZW50QmFzZSc7XG5pbXBvcnQgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50JztcblxuXG4vKipcbiAqIFNwcmVhZHMgb3V0IGEgc2V0IG9mIGl0ZW1zIGhvcml6b250YWxseSBzbyB0aGV5IHRha2UgZXF1YWwgc3BhY2UuXG4gKlxuICogW0xpdmUgZGVtb10oaHR0cDovL2Jhc2ljd2ViY29tcG9uZW50cy5vcmcvYmFzaWMtd2ViLWNvbXBvbmVudHMvcGFja2FnZXMvYmFzaWMtc3ByZWFkLWl0ZW1zLylcbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBpcyB1c2VkLCBmb3IgZXhhbXBsZSwgYnkgdGhlIGJhc2ljLXNsaWRpbmctdmlld3BvcnQgY29tcG9uZW50XG4gKiB0byBlbnN1cmUgdGhhdCBjaGlsZHJlbiBvZiBkaWZmZXJlbnQgc2l6ZSB3aWxsIHRha2UgdXAgdGhlIHNhbWUgYW1vdW50IG9mXG4gKiBob3Jpem9udGFsIHNwYWNlLlxuICpcbiAqIFRoaXMgY29tcG9uZW50IGN1cnJlbnRseSByZXF1aXJlcyBhbiBleHBsaWNpdCBzaXplIGJ5IGFwcGxpZWQgdG8gaXQuXG4gKlxuICogQGV4dGVuZHMgRWxlbWVudEJhc2VcbiAqIEBtaXhlcyBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50XG4gKi9cbmNsYXNzIFNwcmVhZEl0ZW1zIGV4dGVuZHMgRWxlbWVudEJhc2UuY29tcG9zZShcbiAgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudFxuKSB7XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKSB7IHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7IH1cbiAgICAvLyBIQUNLXG4gICAgdGhpcy5pdGVtc0NoYW5nZWQoKTtcbiAgfVxuXG4gIGdldCBpdGVtcygpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG5cbiAgLy8gVE9ETzogU2hvdWxkIGFsc28gaGFuZGxlIGNvbnRlbnRDaGFuZ2VkKCksIGJ1dCBuZWVkIHRvIHJhdGlvbmFsaXplIHdpdGhcbiAgLy8gaW52b2NhdGlvbiBvZiBpdGVtc0NoYW5nZWQgaW4gY29ubmVjdGVkQ2FsbGJhY2suXG4gIGl0ZW1zQ2hhbmdlZCgpIHtcbiAgICBpZiAoc3VwZXIuaXRlbXNDaGFuZ2VkKSB7IHN1cGVyLml0ZW1zQ2hhbmdlZCgpOyB9XG4gICAgbGV0IGl0ZW1zID0gdGhpcy5pdGVtcztcbiAgICBsZXQgY291bnQgPSBpdGVtcy5sZW5ndGg7XG4gICAgdGhpcy4kLnNwcmVhZENvbnRhaW5lci5zdHlsZS53aWR0aCA9IChjb3VudCAqIDEwMCkgKyAnJSc7XG4gICAgbGV0IGl0ZW1XaWR0aCA9ICgxMDAgLyBjb3VudCkgKyBcIiVcIjtcbiAgICBbXS5mb3JFYWNoLmNhbGwoaXRlbXMsIGl0ZW0gPT4ge1xuICAgICAgaXRlbS5zdHlsZS53aWR0aCA9IGl0ZW1XaWR0aDtcbiAgICB9KTtcbiAgfVxuXG4gIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gYFxuICAgICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgI3NwcmVhZENvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgICNzcHJlYWRDb250YWluZXIgOjpzbG90dGVkKCopIHtcbiAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgICAgb2JqZWN0LWZpdDogdmFyKC0tYmFzaWMtaXRlbS1vYmplY3QtZml0LCBjb250YWluKTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcbiAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgaWQ9XCJzcHJlYWRDb250YWluZXJcIj5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG59XG5cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdiYXNpYy1zcHJlYWQtaXRlbXMnLCBTcHJlYWRJdGVtcyk7XG5leHBvcnQgZGVmYXVsdCBTcHJlYWRJdGVtcztcbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvY3JlYXRlU3ltYm9sJztcbmltcG9ydCBFbGVtZW50QmFzZSBmcm9tICcuLi8uLi9iYXNpYy1lbGVtZW50LWJhc2Uvc3JjL0VsZW1lbnRCYXNlJztcbmltcG9ydCBDb250ZW50Rmlyc3RDaGlsZFRhcmdldCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Db250ZW50Rmlyc3RDaGlsZFRhcmdldCc7XG5pbXBvcnQgRGlyZWN0aW9uU2VsZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0RpcmVjdGlvblNlbGVjdGlvbic7XG5pbXBvcnQgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50JztcbmltcG9ydCBHZW5lcmljIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0dlbmVyaWMnO1xuaW1wb3J0IEtleWJvYXJkRGlyZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0tleWJvYXJkRGlyZWN0aW9uJztcbmltcG9ydCByZW5kZXJBcnJheUFzRWxlbWVudHMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvcmVuZGVyQXJyYXlBc0VsZW1lbnRzJztcbmltcG9ydCBTaW5nbGVTZWxlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2luZ2xlU2VsZWN0aW9uJztcbmltcG9ydCBUYXJnZXRTZWxlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvVGFyZ2V0U2VsZWN0aW9uJztcbmltcG9ydCB0b2dnbGVDbGFzcyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy90b2dnbGVDbGFzcyc7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IHRhYlBvc2l0aW9uU3ltYm9sID0gY3JlYXRlU3ltYm9sKCd0YWJQb3NpdGlvbicpO1xuXG5cbi8vIFVzZWQgdG8gYXNzaWduIHVuaXF1ZSBJRHMgdG8gdGFicyBmb3IgQVJJQSBwdXJwb3Nlcy5cbmxldCBpZENvdW50ID0gMDtcblxuXG5sZXQgYmFzZSA9IEVsZW1lbnRCYXNlLmNvbXBvc2UoXG4gIENvbnRlbnRGaXJzdENoaWxkVGFyZ2V0LFxuICBEaXJlY3Rpb25TZWxlY3Rpb24sXG4gIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQsXG4gIEdlbmVyaWMsXG4gIEtleWJvYXJkRGlyZWN0aW9uLFxuICBTaW5nbGVTZWxlY3Rpb24sXG4gIFRhcmdldFNlbGVjdGlvblxuKTtcblxuXG4vKipcbiAqIEEgc3RyaXAgb2YgdGFicyBmb3Igc2VsZWN0aW5nIG9uZSBvZiB0aGUgY29tcG9uZW50J3MgY2hpbGRyZW4uXG4gKlxuICogVGhlIGNvbXBvbmVudCBjcmVhdGVzIGEgdGFiIHRvIHJlcHJlc2VudCBlYWNoIG9mIGl0cyBsaWdodCBET00gY2hpbGRyZW4uXG4gKiBUaGUgdGFiIG5hbWUgaXMgb2J0YWluZWQgYnkgZXhhbWluaW5nIHRoZSBjaGlsZHJlbiBmb3IgYW4gYGFyaWEtbGFiZWxgXG4gKiBwcm9wZXJ0eS5cbiAqXG4gKiBVc2UgdGFicyB3aGVuIHlvdSB3YW50IHRvIHByb3ZpZGUgYSBsYXJnZSBzZXQgb2Ygb3B0aW9ucyBvciBlbGVtZW50cyB0aGFuXG4gKiBjYW4gY29tZm9ydGFibHkgZml0IGlubGluZSwgdGhlIG9wdGlvbnMgY2FuIGJlIGNvaGVyZW50bHkgZ3JvdXBlZCBpbnRvIHBhZ2VzLFxuICogYW5kIHlvdSB3YW50IHRvIGF2b2lkIG1ha2luZyB0aGUgdXNlciBuYXZpZ2F0ZSB0byBhIHNlcGFyYXRlIHBhZ2UuIFRhYnMgd29ya1xuICogYmVzdCBpZiB5b3Ugb25seSBoYXZlIGEgc21hbGwgaGFuZGZ1bCBvZiBwYWdlcywgc2F5IDLigJM3LlxuICpcbiAqIFRoZSBiYXNpYy10YWItc3RyaXAgY29tcG9uZW50IGRvZXMgbm90IGRlZmluZSBob3cgYSBzZWxlY3RlZCBjaGlsZCBpc1xuICogcmVwcmVzZW50ZWQuIElmIHlvdSdyZSBsb29raW5nIGZvciB0aGUgc3RhbmRhcmQgYmVoYXZpb3Igb2YganVzdCBzaG93aW5nIG9ubHlcbiAqIHRoZSBzZWxlY3RlZCBjaGlsZCwgeW91IGNhbiB1c2UgdGhpcyBjb21wb25lbnQgaW4gY29tYmluYXRpb24gd2l0aCB0aGVcbiAqIHNlcGFyYXRlIFtiYXNpYy1tb2Rlc10oLi4vYmFzaWMtbW9kZXMvKSBjb21wb25lbnQuIEEgdHlwaWNhbCBhcnJhbmdlbWVudDpcbiAqXG4gKiAgICAgPGJhc2ljLXRhYi1zdHJpcD5cbiAqICAgICAgIDxiYXNpYy1tb2RlcyBhcmlhLWxhYmVsPVwiUGFuZWxzXCI+XG4gKiAgICAgICAgIDxkaXYgYXJpYS1sYWJlbD1cIk9uZVwiPlBhZ2Ugb25lPC9kaXY+XG4gKiAgICAgICAgIDxkaXYgYXJpYS1sYWJlbD1cIlR3b1wiPlBhZ2UgdHdvPC9kaXY+XG4gKiAgICAgICAgIDxkaXYgYXJpYS1sYWJlbD1cIlRocmVlXCI+UGFnZSB0aHJlZTwvZGl2PlxuICogICAgICAgPC9iYXNpYy1tb2Rlcz5cbiAqICAgICA8L2Jhc2ljLXRhYi1zdHJpcD5cbiAqXG4gKiBUaGUgYWJvdmUgY29tYmluYXRpb24gaXMgc28gY29tbW9uIGl0IGlzIHByb3ZpZGVkIGFzIGEgc2luZ2xlIGNvbXBvbmVudCxcbiAqIFtiYXNpYy10YWJzXSguLi9iYXNpYy10YWJzLykuXG4gKlxuICogVGhlIHVzZXIgY2FuIHNlbGVjdCBhIHRhYiB3aXRoIHRoZSBtb3VzZSBvciB0b3VjaCwgYXMgd2VsbCBhcyBieSB0aHJvdWdoIHRoZVxuICoga2V5Ym9hcmQuIEVhY2ggdGFiIGFwcGVhcnMgYXMgYSBzZXBhcmF0ZSBidXR0b24gaW4gdGhlIHRhYiBvcmRlci5cbiAqIEFkZGl0aW9uYWxseSwgaWYgdGhlIGZvY3VzIGlzIGN1cnJlbnRseSBvbiBhIHRhYiwgdGhlIHVzZXIgY2FuIHF1aWNrbHlcbiAqIG5hdmlnYXRlIGJldHdlZW4gdGFicyB3aXRoIHRoZSBsZWZ0L3JpZ2h0IGFycm93IGtleXMgKG9yLCBpZiB0aGUgdGFicyBhcmVcbiAqIGluIHZlcnRpY2FsIHBvc2l0aW9uLCB0aGUgdXAvZG93biBhcnJvdyBrZXlzKS5cbiAqXG4gKiBCeSBkZWZhdWx0LCB0aGUgdGFicyBhcmUgc2hvd24gZ3JvdXBlZCB0byB0aGUgbGVmdCwgd2hlcmUgZWFjaCB0YWIgaXMgb25seVxuICogYXMgYmlnIGFzIG5lY2Vzc2FyeS4gWW91IGNhbiBhcHBseSB0aGUgYHNwcmVhZGAgQ1NTIGNsYXNzIHRvIGFcbiAqIGJhc2ljLXRhYi1zdHJpcCBlbGVtZW50IGZvciBhIHZhcmlhbnQgYXBwZWFyYW5jZSBpbiB3aGljaCB0aGUgYXZhaWxhYmxlIHdpZHRoXG4gKiBvZiB0aGUgZWxlbWVudCBpcyBkaXZpZGVkIHVwIGVxdWFsbHkgYW1vbmcgdGFicy5cbiAqXG4gKiBUaGUgZ2VuZXJpYyBkZWZhdWx0IHN0eWxpbmcgb2YgdGhlIHRhYiBzdHJpcCB3aWxsIHByZXNlbnQgdGhlIGNsYXNzaWNcbiAqIHNrZXVtb3JwaGljIGxvb2sgb2Ygcm91bmRlZCB0YWJzIGF0dGFjaGVkIHRvIGEgc3VyZmFjZS4gWW91IGNhbiByZW1vdmUgdGhpc1xuICogc3R5bGluZyBieSBzZXR0aW5nIHRoZSBgZ2VuZXJpY2AgcHJvcGVydHkvYXR0cmlidXRlIHRvIGZhbHNlLlxuICpcbiAqIEBleHRlbmRzIEVsZW1lbnRCYXNlXG4gKiBAbWl4ZXMgQ29udGVudEZpcnN0Q2hpbGRUYXJnZXRcbiAqIEBtaXhlcyBEaXJlY3Rpb25TZWxlY3Rpb25cbiAqIEBtaXhlcyBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50XG4gKiBAbWl4ZXMgR2VuZXJpY1xuICogQG1peGVzIEtleWJvYXJkRGlyZWN0aW9uXG4gKiBAbWl4ZXMgU2luZ2xlU2VsZWN0aW9uXG4gKiBAbWl4ZXMgVGFyZ2V0U2VsZWN0aW9uXG4gKi9cbmNsYXNzIFRhYlN0cmlwIGV4dGVuZHMgYmFzZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuJC50YWJzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgbGV0IHRhYiA9IGV2ZW50LnRhcmdldDtcbiAgICAgIGxldCB0YWJJbmRleCA9IHRoaXMudGFicy5pbmRleE9mKHRhYik7XG4gICAgICBpZiAodGFiSW5kZXggPj0gMCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSB0YWJJbmRleDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIExpc3RlbiB0byBrZXlkb3duIGV2ZW50cyBvbiB0aGUgdGFicywgbm90IG9uIHBhZ2VzLlxuICAgIHRoaXMuJC50YWJzLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBldmVudCA9PiB7XG4gICAgICBsZXQgaGFuZGxlZCA9IHRoaXMua2V5ZG93bihldmVudCk7XG4gICAgICBpZiAoaGFuZGxlZCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFNldCBkZWZhdWx0cy5cbiAgICBpZiAodHlwZW9mIHRoaXMudGFiUG9zaXRpb24gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnRhYlBvc2l0aW9uID0gdGhpcy5kZWZhdWx0cy50YWJQb3NpdGlvbjtcbiAgICB9XG4gIH1cblxuICBhcHBseVNlbGVjdGlvbihpdGVtLCBzZWxlY3RlZCkge1xuICAgIGlmIChzdXBlci5hcHBseVNlbGVjdGlvbikgeyBzdXBlci5hcHBseVNlbGVjdGlvbihpdGVtLCBzZWxlY3RlZCk7IH1cbiAgICBsZXQgaW5kZXggPSB0aGlzLml0ZW1zLmluZGV4T2YoaXRlbSk7XG4gICAgLy8gU2VlIGlmIHRoZSBjb3JyZXNwb25kaW5nIHRhYiBoYXMgYWxyZWFkeSBiZWVuIGNyZWF0ZWQuXG4gICAgLy8gSWYgbm90LCB0aGUgY29ycmVjdCB0YWIgd2lsbCBiZSBzZWxlY3RlZCB3aGVuIGl0IGdldHMgY3JlYXRlZC5cbiAgICBsZXQgdGFicyA9IHRoaXMudGFicztcbiAgICBpZiAodGFicyAmJiB0YWJzLmxlbmd0aCA+IGluZGV4KSB7XG4gICAgICBsZXQgdGFiID0gdGhpcy50YWJzW2luZGV4XTtcbiAgICAgIGlmICh0YWIpIHtcbiAgICAgICAgYXBwbHlTZWxlY3Rpb25Ub1RhYih0YWIsIHNlbGVjdGVkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBpZiAoc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2spIHsgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTsgfVxuICAgIGlmICghdGhpcy5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSkge1xuICAgICAgLy8gQXNzaWduIGEgZGVmYXVsdCBBUklBIHJvbGUuXG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgncm9sZScsICd0YWJsaXN0Jyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGRlZmF1bHRzKCkge1xuICAgIGxldCBkZWZhdWx0cyA9IHN1cGVyLmRlZmF1bHRzIHx8IHt9O1xuICAgIGRlZmF1bHRzLnRhYlBvc2l0aW9uID0gJ3RvcCc7XG4gICAgcmV0dXJuIGRlZmF1bHRzO1xuICB9XG5cbiAgZ2V0IHRhYnMoKSB7XG4gICAgcmV0dXJuIFtdLnNsaWNlLmNhbGwodGhpcy4kLnRhYnMucXVlcnlTZWxlY3RvckFsbCgnLnRhYicpKTtcbiAgfVxuXG4gIGl0ZW1zQ2hhbmdlZCgpIHtcbiAgICBpZiAoc3VwZXIuaXRlbXNDaGFuZ2VkKSB7IHN1cGVyLml0ZW1zQ2hhbmdlZCgpOyB9XG5cbiAgICBsZXQgYmFzZUlkID0gdGhpcy5pZCA/XG4gICAgICBcIl9cIiArIHRoaXMuaWQgKyBcIlBhbmVsXCIgOlxuICAgICAgXCJfcGFuZWxcIjtcblxuICAgIC8vIENvbmZpcm0gdGhhdCBpdGVtcyBoYXZlIGF0IGxlYXN0IGEgZGVmYXVsdCByb2xlIGFuZCBJRCBmb3IgQVJJQSBwdXJwb3Nlcy5cbiAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpZiAoIWl0ZW0uZ2V0QXR0cmlidXRlKCdyb2xlJykpIHtcbiAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAndGFicGFuZWwnKTtcbiAgICAgIH1cbiAgICAgIGlmICghaXRlbS5pZCkge1xuICAgICAgICBpdGVtLmlkID0gYmFzZUlkICsgaWRDb3VudCsrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gQ3JlYXRlIHRhYnMuXG4gICAgcmVuZGVyQXJyYXlBc0VsZW1lbnRzKHRoaXMuaXRlbXMsIHRoaXMuJC50YWJzLCAoaXRlbSwgZWxlbWVudCkgPT4ge1xuICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0YWInKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzdHlsZS1zY29wZScpO1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Jhc2ljLXRhYi1zdHJpcCcpO1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgncm9sZScsICd0YWInKTtcbiAgICAgIH1cbiAgICAgIGVsZW1lbnQuaWQgPSBpdGVtLmlkICsgJ190YWInO1xuICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGl0ZW0uZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJyk7XG5cbiAgICAgIC8vIFBvaW50IHRhYiBhbmQgcGFuZWwgYXQgZWFjaCBvdGhlci5cbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWNvbnRyb2xzJywgaXRlbS5pZCk7XG4gICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbGxlZGJ5JywgZWxlbWVudC5pZCk7XG4gICAgICBcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH0pO1xuXG4gICAgdGhpcy5zZWxlY3RlZEl0ZW1DaGFuZ2VkKCk7ICAvLyBJbiBjYXNlIHBvc2l0aW9uIG9mIHNlbGVjdGVkIGl0ZW0gbW92ZWQuXG4gIH1cblxuICBrZXlkb3duKGV2ZW50KSB7XG4gICAgbGV0IGhhbmRsZWQgPSBzdXBlci5rZXlkb3duKGV2ZW50KTtcbiAgICBpZiAoaGFuZGxlZCkge1xuICAgICAgLy8gSWYgdGhlIGV2ZW50IHJlc3VsdGVkIGluIGEgY2hhbmdlIG9mIHNlbGVjdGlvbiwgbW92ZSB0aGUgZm9jdXMgdG8gdGhlXG4gICAgICAvLyBuZXdseS1zZWxlY3RlZCB0YWIuXG4gICAgICB0aGlzLnRhYnNbdGhpcy5zZWxlY3RlZEluZGV4XS5mb2N1cygpO1xuICAgIH1cbiAgICByZXR1cm4gaGFuZGxlZDtcbiAgfVxuXG4gIHNlbGVjdGVkSXRlbUNoYW5nZWQoKSB7XG4gICAgaWYgKHN1cGVyLnNlbGVjdGVkSXRlbUNoYW5nZWQpIHsgc3VwZXIuc2VsZWN0ZWRJdGVtQ2hhbmdlZCgpOyB9XG4gICAgbGV0IHNlbGVjdGVkSW5kZXggPSB0aGlzLnNlbGVjdGVkSW5kZXg7XG4gICAgdGhpcy50YWJzLmZvckVhY2goKHRhYiwgaSkgPT4ge1xuICAgICAgYXBwbHlTZWxlY3Rpb25Ub1RhYih0YWIsIGkgPT09IHNlbGVjdGVkSW5kZXgpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBwb3NpdGlvbiBvZiB0aGUgdGFiIHN0cmlwIHJlbGF0aXZlIHRvIHRoZSBlbGVtZW50J3MgY2hpbGRyZW4uIFZhbGlkXG4gICAqIHZhbHVlcyBhcmUgXCJ0b3BcIiwgXCJsZWZ0XCIsIFwicmlnaHRcIiwgYW5kIFwiYm90dG9tXCIuXG4gICAqXG4gICAqIEBkZWZhdWx0IFwidG9wXCJcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCB0YWJQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpc1t0YWJQb3NpdGlvblN5bWJvbF07XG4gIH1cbiAgc2V0IHRhYlBvc2l0aW9uKHBvc2l0aW9uKSB7XG4gICAgdGhpc1t0YWJQb3NpdGlvblN5bWJvbF0gPSBwb3NpdGlvbjtcblxuICAgIHRoaXMucmVmbGVjdEF0dHJpYnV0ZSgndGFiLXBvc2l0aW9uJywgcG9zaXRpb24pO1xuXG4gICAgLy8gUGh5c2ljYWxseSByZW9yZGVyIHRoZSB0YWJzIGFuZCBwYWdlcyB0byByZWZsZWN0IHRoZSBkZXNpcmVkIGFycmFuZ2VtZW50LlxuICAgIC8vIFdlIGNvdWxkIGNoYW5nZSB0aGUgdmlzdWFsIGFwcGVhcmFuY2UgYnkgcmV2ZXJzaW5nIHRoZSBvcmRlciBvZiB0aGUgZmxleFxuICAgIC8vIGJveCwgYnV0IHRoZW4gdGhlIHZpc3VhbCBvcmRlciB3b3VsZG4ndCByZWZsZWN0IHRoZSBkb2N1bWVudCBvcmRlciwgd2hpY2hcbiAgICAvLyBkZXRlcm1pbmVzIGZvY3VzIG9yZGVyLiBUaGF0IHdvdWxkIHN1cnByaXNlIGEgdXNlciB0cnlpbmcgdG8gdGFiIHRocm91Z2hcbiAgICAvLyB0aGUgY29udHJvbHMuXG4gICAgbGV0IGZpcnN0RWxlbWVudCA9IChwb3NpdGlvbiA9PT0gJ3RvcCcgfHwgcG9zaXRpb24gPT09ICdsZWZ0JykgP1xuICAgICAgdGhpcy4kLnRhYnMgOlxuICAgICAgdGhpcy4kLnBhZ2VzO1xuICAgIGxldCBsYXN0RWxlbWVudCA9IChwb3NpdGlvbiA9PT0gJ3RvcCcgfHwgcG9zaXRpb24gPT09ICdsZWZ0JykgP1xuICAgICAgdGhpcy4kLnBhZ2VzIDpcbiAgICAgIHRoaXMuJC50YWJzO1xuICAgIGlmIChmaXJzdEVsZW1lbnQubmV4dFNpYmxpbmcgIT09IGxhc3RFbGVtZW50KSB7XG4gICAgICB0aGlzLnNoYWRvd1Jvb3QuaW5zZXJ0QmVmb3JlKGZpcnN0RWxlbWVudCwgbGFzdEVsZW1lbnQpO1xuICAgIH1cblxuICAgIHRoaXMubmF2aWdhdGlvbkF4aXMgPSAocG9zaXRpb24gPT09ICd0b3AnIHx8IHBvc2l0aW9uID09PSAnYm90dG9tJykgP1xuICAgICAgJ2hvcml6b250YWwnIDpcbiAgICAgICd2ZXJ0aWNhbCc7XG4gIH1cblxuICBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgLypcbiAgICAgICAqIEF2b2lkIGhhdmluZyB0YWIgY29udGFpbmVyIHN0cmV0Y2ggYWNyb3NzLiBVc2VyIHdvbid0IGJlIGFibGUgdG8gc2VlXG4gICAgICAgKiBpdCwgYnV0IHNpbmNlIGl0IGhhbmRsZXMgdGhlIGtleWJvYXJkLCBpbiBNb2JpbGUgU2FmYXJpIGEgdGFwIG9uIHRoZVxuICAgICAgICogY29udGFpbmVyIGJhY2tncm91bmQgd2lsbCBjYXVzZSB0aGUgcmVnaW9uIHRvIGZsYXNoLiBBbGlnbmluZyB0aGVcbiAgICAgICAqIHJlZ2lvbiBjb2xsYXBzZXMgaXQgZG93biB0byBob2xkIGl0cyBjb250ZW50cy5cbiAgICAgICAqL1xuICAgICAgI3RhYnMge1xuICAgICAgICAvKiBGb3IgSUUgYnVnIChjbGlja2luZyB0YWIgcHJvZHVjZXMgZ2FwIGJldHdlZW4gdGFiIGFuZCBwYWdlKS4gKi9cbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAvKlxuICAgICAgICAgKiBUcnkgdG8gb2J0YWluIGZhc3QtdGFwIGJlaGF2aW9yIG9uIGFsbCB0YWJzLlxuICAgICAgICAgKiBTZWUgaHR0cHM6Ly93ZWJraXQub3JnL2Jsb2cvNTYxMC9tb3JlLXJlc3BvbnNpdmUtdGFwcGluZy1vbi1pb3MvLlxuICAgICAgICAgKi9cbiAgICAgICAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG4gICAgICB9XG4gICAgICA6aG9zdCg6bm90KC5zcHJlYWQpKSAjdGFicyB7XG4gICAgICAgIC13ZWJraXQtYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAgIH1cblxuICAgICAgI3BhZ2VzIHtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAtd2Via2l0LWZsZXg6IDE7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIH1cblxuICAgICAgI3BhZ2VzIDo6c2xvdHRlZCgqKSB7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLXdlYmtpdC1mbGV4OiAxO1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgfVxuXG4gICAgICAudGFiIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgLyogTGVmdC9yaWdodCBwb3NpdGlvbnMgKi9cbiAgICAgIDpob3N0KFt0YWItcG9zaXRpb249XCJsZWZ0XCJdKSxcbiAgICAgIDpob3N0KFt0YWItcG9zaXRpb249XCJyaWdodFwiXSkge1xuICAgICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICB9XG4gICAgICA6aG9zdChbdGFiLXBvc2l0aW9uPVwibGVmdFwiXSkgI3RhYnMsXG4gICAgICA6aG9zdChbdGFiLXBvc2l0aW9uPVwicmlnaHRcIl0pICN0YWJzIHtcbiAgICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgfVxuXG4gICAgICAvKiBTcHJlYWQgdmFyaWFudCAqL1xuICAgICAgOmhvc3QoLnNwcmVhZCkgI3RhYnMge1xuICAgICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgIH1cbiAgICAgIDpob3N0KC5zcHJlYWQpIC50YWIge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgfVxuXG4gICAgICAvKiBHZW5lcmljIHN0eWxlICovXG4gICAgICA6aG9zdChbZ2VuZXJpYz1cIlwiXSkgI3BhZ2VzIHtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtnZW5lcmljPVwiXCJdKSAudGFiIHtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMC41ZW0gMC43NWVtO1xuICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4yNXM7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtnZW5lcmljPVwiXCJdKSAudGFiLnNlbGVjdGVkIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjY2NjO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZ2VuZXJpYz1cIlwiXSkgLnRhYjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgICB9XG5cbiAgICAgIC8qIEdlbmVyaWMsIHRvcC9ib3R0b20gcG9zaXRpb25zICovXG4gICAgICA6aG9zdChbZ2VuZXJpYz1cIlwiXVt0YWItcG9zaXRpb249XCJ0b3BcIl0pIC50YWI6bm90KDpsYXN0LWNoaWxkKSxcbiAgICAgIDpob3N0KFtnZW5lcmljPVwiXCJdW3RhYi1wb3NpdGlvbj1cImJvdHRvbVwiXSkgLnRhYjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjJlbTtcbiAgICAgIH1cblxuICAgICAgLyogR2VuZXJpYywgdG9wIHBvc2l0aW9uICovXG4gICAgICA6aG9zdChbZ2VuZXJpYz1cIlwiXVt0YWItcG9zaXRpb249XCJ0b3BcIl0pIC50YWIge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1ZW0gMC4yNWVtIDAgMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTFweDtcbiAgICAgIH1cbiAgICAgIDpob3N0KFtnZW5lcmljPVwiXCJdW3RhYi1wb3NpdGlvbj1cInRvcFwiXSkgLnRhYi5zZWxlY3RlZCB7XG4gICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuXG4gICAgICAvKiBHZW5lcmljLCBib3R0b20gcG9zaXRpb24gKi9cbiAgICAgIDpob3N0KFtnZW5lcmljPVwiXCJdW3RhYi1wb3NpdGlvbj1cImJvdHRvbVwiXSkgLnRhYiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAwLjI1ZW0gMC4yNWVtO1xuICAgICAgICBtYXJnaW4tdG9wOiAtMXB4O1xuICAgICAgfVxuICAgICAgOmhvc3QoW2dlbmVyaWM9XCJcIl1bdGFiLXBvc2l0aW9uPVwiYm90dG9tXCJdKSAudGFiLnNlbGVjdGVkIHtcbiAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG5cbiAgICAgIC8qIEdlbmVyaWMsIGxlZnQvcmlnaHQgcG9zaXRpb25zICovXG4gICAgICA6aG9zdChbZ2VuZXJpYz1cIlwiXVt0YWItcG9zaXRpb249XCJsZWZ0XCJdKSAudGFiOm5vdCg6bGFzdC1jaGlsZCksXG4gICAgICA6aG9zdChbZ2VuZXJpYz1cIlwiXVt0YWItcG9zaXRpb249XCJyaWdodFwiXSkgLnRhYjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC4yZW07XG4gICAgICB9XG5cbiAgICAgIC8qIEdlbmVyaWMsIGxlZnQgcG9zaXRpb24gKi9cbiAgICAgIDpob3N0KFtnZW5lcmljPVwiXCJdW3RhYi1wb3NpdGlvbj1cImxlZnRcIl0pIC50YWIge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1ZW0gMCAwIDAuMjVlbTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMXB4O1xuICAgICAgfVxuICAgICAgOmhvc3QoW2dlbmVyaWM9XCJcIl1bdGFiLXBvc2l0aW9uPVwibGVmdFwiXSkgLnRhYi5zZWxlY3RlZCB7XG4gICAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG5cbiAgICAgIC8qIEdlbmVyaWMsIHJpZ2h0IHBvc2l0aW9uICovXG4gICAgICA6aG9zdChbZ2VuZXJpYz1cIlwiXVt0YWItcG9zaXRpb249XCJyaWdodFwiXSkgLnRhYiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMC4yNWVtIDAuMjVlbSAwO1xuICAgICAgICBtYXJnaW4tbGVmdDogLTFweDtcbiAgICAgIH1cbiAgICAgIDpob3N0KFtnZW5lcmljPVwiXCJdW3RhYi1wb3NpdGlvbj1cInJpZ2h0XCJdKSAudGFiLnNlbGVjdGVkIHtcbiAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBpZD1cInRhYnNcIj48L2Rpdj5cbiAgICAgIDxkaXYgaWQ9XCJwYWdlc1wiPlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbn1cblxuXG5mdW5jdGlvbiBhcHBseVNlbGVjdGlvblRvVGFiKHRhYiwgc2VsZWN0ZWQpIHtcbiAgdG9nZ2xlQ2xhc3ModGFiLCAnc2VsZWN0ZWQnLCBzZWxlY3RlZCk7XG4gIHRhYi5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCBzZWxlY3RlZCk7XG59XG5cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdiYXNpYy10YWItc3RyaXAnLCBUYWJTdHJpcCk7XG5leHBvcnQgZGVmYXVsdCBUYWJTdHJpcDtcbiIsImltcG9ydCBFbGVtZW50QmFzZSBmcm9tICcuLi8uLi9iYXNpYy1lbGVtZW50LWJhc2Uvc3JjL0VsZW1lbnRCYXNlJztcbmltcG9ydCBHZW5lcmljIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0dlbmVyaWMnO1xuaW1wb3J0IE1vZGVzIGZyb20gJy4uLy4uL2Jhc2ljLW1vZGVzL3NyYy9Nb2Rlcyc7IC8vIGpzaGludCBpZ25vcmU6bGluZVxuaW1wb3J0IFRhYlN0cmlwIGZyb20gJy4uLy4uL2Jhc2ljLXRhYi1zdHJpcC9zcmMvVGFiU3RyaXAnOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcbmltcG9ydCBTaW5nbGVTZWxlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2luZ2xlU2VsZWN0aW9uJztcbmltcG9ydCBUYXJnZXRTZWxlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvVGFyZ2V0U2VsZWN0aW9uJztcblxuXG4vKipcbiAqIEEgc2V0IG9mIHBhZ2VzIHdpdGggYSB0YWIgc3RyaXAgZ292ZXJuaW5nIHdoaWNoIHBhZ2UgaXMgc2hvd24uXG4gKlxuICogVGhpcyBzdG9jayBjb21iaW5hdGlvbiBwdXRzIHRvZ2V0aGVyIGEgW2Jhc2ljLXRhYi1zdHJpcF0oLi4vYmFzaWMtdGFiLXN0cmlwLylcbiAqIGFuZCBhIFtiYXNpYy1tb2Rlc10oLi4vYmFzaWMtbW9kZXMvKSBlbGVtZW50LiBJZiB5b3UnZCBsaWtlIHRvIGNyZWF0ZVxuICogc29tZXRoaW5nIG1vcmUgY29tcGxleCB0aGFuIHRoaXMgYXJyYW5nZW1lbnQsIHlvdSBjYW4gdXNlIGVpdGhlciBvZiB0aG9zZVxuICogZWxlbWVudHMgb24gaXRzIG93bi5cbiAqXG4gKiBTaW5jZSB0aGlzIGNvbXBvbmVudCB1c2VzIGJhc2ljLXRhYi1zdHJpcCBpbnRlcm5hbGx5LCBpdCBvYnRhaW5zIHRoZSBuYW1lcyBvZlxuICogdGhlIGluZGl2aWR1YWwgdGFicyB0aGUgc2FtZSB3YXk6IGZyb20gYSBjaGlsZCdzIGBhcmlhLWxhYmVsYCBwcm9wZXJ0eS5cbiAqIEV4YW1wbGU6XG4gKlxuICogICAgIDxiYXNpYy10YWJzPlxuICogICAgICAgPGRpdiBhcmlhLWxhYmVsPVwiT25lXCI+UGFnZSBvbmU8L2Rpdj5cbiAqICAgICAgIDxkaXYgYXJpYS1sYWJlbD1cIlR3b1wiPlBhZ2UgdHdvPC9kaXY+XG4gKiAgICAgICA8ZGl2IGFyaWEtbGFiZWw9XCJUaHJlZVwiPlBhZ2UgdGhyZWU8L2Rpdj5cbiAqICAgICA8L2Jhc2ljLXRhYnM+XG4gKlxuICogQGV4dGVuZHMgRWxlbWVudEJhc2VcbiAqIEBtaXhlcyBHZW5lcmljXG4gKiBAbWl4ZXMgU2luZ2xlU2VsZWN0aW9uXG4gKiBAbWl4ZXMgVGFyZ2V0U2VsZWN0aW9uXG4gKi9cbmNsYXNzIFRhYnMgZXh0ZW5kcyBFbGVtZW50QmFzZS5jb21wb3NlKFxuICBHZW5lcmljLFxuICBTaW5nbGVTZWxlY3Rpb24sXG4gIFRhcmdldFNlbGVjdGlvblxuKSB7XG5cbiAgZ2V0IGdlbmVyaWMoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdlbmVyaWM7XG4gIH1cbiAgc2V0IGdlbmVyaWModmFsdWUpIHtcbiAgICBzdXBlci5nZW5lcmljID0gdmFsdWU7XG4gICAgLy8gRm9yd2FyZCB0aGUgZ2VuZXJpYyB2YWx1ZSB0byB0aGUgdGFiIHN0cmlwLlxuICAgIHRoaXMuJC50YWJTdHJpcC5nZW5lcmljID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHBvc2l0aW9uIG9mIHRoZSB0YWIgc3RyaXAgcmVsYXRpdmUgdG8gdGhlIGVsZW1lbnQncyBjaGlsZHJlbi4gVmFsaWRcbiAgICogdmFsdWVzIGFyZSBcInRvcFwiLCBcImxlZnRcIiwgXCJyaWdodFwiLCBhbmQgXCJib3R0b21cIi5cbiAgICpcbiAgICogQGRlZmF1bHQgXCJ0b3BcIlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IHRhYlBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiQgJiYgdGhpcy4kLnRhYlN0cmlwLnRhYlBvc2l0aW9uO1xuICB9XG4gIHNldCB0YWJQb3NpdGlvbihwb3NpdGlvbikge1xuICAgIHRoaXMuJC50YWJTdHJpcC50YWJQb3NpdGlvbiA9IHBvc2l0aW9uO1xuICB9XG5cbiAgZ2V0IHRhcmdldCgpIHtcbiAgICByZXR1cm4gdGhpcy4kICYmIHRoaXMuJC5tb2RlcztcbiAgfVxuXG4gIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gYFxuICAgICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIH1cblxuICAgICAgI3RhYlN0cmlwIHtcbiAgICAgICAgLXdlYmtpdC1mbGV4OiAxO1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgfVxuXG4gICAgICAjbW9kZXMgOjpzbG90dGVkKCopIHtcbiAgICAgICAgLXdlYmtpdC1mbGV4OiAxO1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGJhc2ljLXRhYi1zdHJpcCBpZD1cInRhYlN0cmlwXCI+XG4gICAgICAgIDxiYXNpYy1tb2RlcyBpZD1cIm1vZGVzXCI+XG4gICAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgICA8L2Jhc2ljLW1vZGVzPlxuICAgICAgPC9iYXNpYy10YWItc3RyaXA+XG4gICAgYDtcbiAgfVxuXG59XG5cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdiYXNpYy10YWJzJywgVGFicyk7XG4iLCIvLyBUaGUgaW1wb3J0ZWQgbW9kdWxlcyByZWdpc3RlciB0aGUgY29tcG9uZW50cyBnbG9iYWxseSwgc28gd2UgZG9uJ3QgaGF2ZSB0byBkb1xuLy8gYW55dGhpbmcgd2l0aCB0aGUgcmVzdWx0IG9mIHRoZSBpbXBvcnQuIFdlIGRpc2FibGUgbGludGluZyBmb3IgdGhpcyBzZWN0aW9uXG4vLyB0byBhdm9pZCBtZXNzYWdlcyBhYm91dCB2YXJpYWJsZXMgYmVpbmcgZGVmaW5lZCBidXQgbmV2ZXIgdXNlZC5cbi8qIGpzaGludCBpZ25vcmU6c3RhcnQgKi9cbmltcG9ydCBBbmltYXRpb25TdGFnZSBmcm9tICcuLi8uLi9iYXNpYy1hbmltYXRpb24tc3RhZ2Uvc3JjL0FuaW1hdGlvblN0YWdlJztcbmltcG9ydCBBcnJvd1NlbGVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1hcnJvdy1zZWxlY3Rpb24vc3JjL0Fycm93U2VsZWN0aW9uJztcbmltcG9ydCBBdXRvc2l6ZVRleHRhcmVhIGZyb20gJy4uLy4uL2Jhc2ljLWF1dG9zaXplLXRleHRhcmVhL3NyYy9BdXRvc2l6ZVRleHRhcmVhJztcbmltcG9ydCBDYXJvdXNlbCBmcm9tICcuLi8uLi9iYXNpYy1jYXJvdXNlbC9zcmMvQ2Fyb3VzZWwnO1xuaW1wb3J0IENvbGxhcHNpYmxlUGFuZWwgZnJvbSAnLi4vLi4vYmFzaWMtY29sbGFwc2libGUtcGFuZWwvc3JjL0NvbGxhcHNpYmxlUGFuZWwnO1xuaW1wb3J0IEN1cnJlbnRBbmNob3IgZnJvbSAnLi4vLi4vYmFzaWMtY3VycmVudC1hbmNob3Ivc3JjL0N1cnJlbnRBbmNob3InO1xuaW1wb3J0IEZhZGVPdmVyZmxvdyBmcm9tICcuLi8uLi9iYXNpYy1mYWRlLW92ZXJmbG93L3NyYy9GYWRlT3ZlcmZsb3cnO1xuaW1wb3J0IExpc3RCb3ggZnJvbSAnLi4vLi4vYmFzaWMtbGlzdC1ib3gvc3JjL0xpc3RCb3gnO1xuaW1wb3J0IE1vZGVzIGZyb20gJy4uLy4uL2Jhc2ljLW1vZGVzL3NyYy9Nb2Rlcyc7XG5pbXBvcnQgUGFnZURvdHMgZnJvbSAnLi4vLi4vYmFzaWMtcGFnZS1kb3RzL3NyYy9QYWdlRG90cyc7XG5pbXBvcnQgUGxheUNvbnRyb2xzIGZyb20gJy4uLy4uL2Jhc2ljLXBsYXktY29udHJvbHMvc3JjL1BsYXlDb250cm9scyc7XG5pbXBvcnQgU2xpZGVzaG93IGZyb20gJy4uLy4uL2Jhc2ljLXNsaWRlc2hvdy9zcmMvU2xpZGVzaG93JztcbmltcG9ydCBTbGlkZXNob3dUaW1lciBmcm9tICcuLi8uLi9iYXNpYy1zbGlkZXNob3ctdGltZXIvc3JjL1NsaWRlc2hvd1RpbWVyJztcbmltcG9ydCBTbGlkaW5nQ2Fyb3VzZWwgZnJvbSAnLi4vLi4vYmFzaWMtc2xpZGluZy1jYXJvdXNlbC9zcmMvU2xpZGluZ0Nhcm91c2VsJztcbmltcG9ydCBTbGlkaW5nVmlld3BvcnQgZnJvbSAnLi4vLi4vYmFzaWMtc2xpZGluZy12aWV3cG9ydC9zcmMvU2xpZGluZ1ZpZXdwb3J0JztcbmltcG9ydCBTcHJlYWRJdGVtcyBmcm9tICcuLi8uLi9iYXNpYy1zcHJlYWQtaXRlbXMvc3JjL1NwcmVhZEl0ZW1zJztcbmltcG9ydCBUYWJzIGZyb20gJy4uLy4uL2Jhc2ljLXRhYnMvc3JjL1RhYnMnO1xuaW1wb3J0IFRhYlN0cmlwIGZyb20gJy4uLy4uL2Jhc2ljLXRhYi1zdHJpcC9zcmMvVGFiU3RyaXAnO1xuLyoganNoaW50IGlnbm9yZTplbmQgKi9cbiIsImltcG9ydCBFbGVtZW50QmFzZSBmcm9tICcuLi8uLi9iYXNpYy1lbGVtZW50LWJhc2Uvc3JjL0VsZW1lbnRCYXNlJztcblxuXG4vKlxuICogQSBzZXQgb2YgZXZlbnRzIHdoaWNoLCBpZiBmaXJlZCBieSB0aGUgaW5uZXIgc3RhbmRhcmQgZWxlbWVudCwgc2hvdWxkIGJlXG4gKiByZS1yYWlzZWQgYnkgdGhlIGN1c3RvbSBlbGVtZW50LiAoV2Ugb25seSBuZWVkIHRvIGRvIHRoYXQgdW5kZXIgbmF0aXZlXG4gKiBTaGFkb3cgRE9NLCBub3QgdGhlIHBvbHlmaWxsLilcbiAqXG4gKiBUaGVzZSBhcmUgZXZlbnRzIHdoaWNoIGFyZSBzcGVjJ2VkIHRvIE5PVCBnZXQgcmV0YXJnZXR0ZWQgYWNyb3NzIGEgU2hhZG93IERPTVxuICogYm91bmRhcnksIG9yZ2FuaXplZCBieSB3aGljaCBlbGVtZW50KHMpIHJhaXNlIHRoZSBldmVudHMuIFRvIHByb3Blcmx5XG4gKiBzaW11bGF0ZSB0aGVzZSwgd2Ugd2lsbCBuZWVkIHRvIGxpc3RlbiBmb3IgdGhlIHJlYWwgZXZlbnRzLCB0aGVuIHJlLXJhaXNlIGFcbiAqIHNpbXVsYXRpb24gb2YgdGhlIG9yaWdpbmFsIGV2ZW50LiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlXG4gKiBodHRwczovL3d3dy53My5vcmcvVFIvc2hhZG93LWRvbS8jaC1ldmVudHMtdGhhdC1hcmUtbm90LWxlYWtlZC1pbnRvLWFuY2VzdG9yLXRyZWVzLlxuICpcbiAqIEl0IGFwcGVhcnMgdGhhdCB3ZSBkbyAqbm90KiBuZWVkIHRvIHJlLXJhaXNlIHRoZSBub24tYnViYmxpbmcgXCJmb2N1c1wiIGFuZFxuICogXCJibHVyXCIgZXZlbnRzLiBUaGVzZSBhcHBlYXIgdG8gYmUgYXV0b21hdGljYWxseSByZS1yYWlzZWQgYXMgZXhwZWN0ZWQgLS0gYnV0XG4gKiBpdCdzIG5vdCBjbGVhciB3aHkgdGhhdCBoYXBwZW5zLlxuICpcbiAqIFRoZSBsaXN0IGJlbG93IGlzIHJlYXNvbmFibHkgY29tcGxldGUuIEl0IG9taXRzIGVsZW1lbnRzIHRoYXQgY2Fubm90IGJlXG4gKiB3cmFwcGVkIChzZWUgY2xhc3Mgbm90ZXMgYWJvdmUpLiBBbHNvLCB3ZSBoYXZlbid0IGFjdHVhbGx5IHRyaWVkIHdyYXBwaW5nXG4gKiBldmVyeSBlbGVtZW50IGluIHRoaXMgbGlzdDsgc29tZSBvZiB0aGUgbW9yZSBvYnNjdXJlIG9uZXMgbWlnaHQgbm90IGFjdHVhbGx5XG4gKiB3b3JrIGFzIGV4cGVjdGVkLCBidXQgaXQgd2FzIGVhc2llciB0byBpbmNsdWRlIHRoZW0gZm9yIGNvbXBsZXRlbmVzcyB0aGFuXG4gKiB0byBhY3R1YWxseSB2ZXJpZnkgd2hldGhlciBvciBub3QgdGhlIGVsZW1lbnQgY2FuIGJlIHdyYXBwZWQuXG4gKi9cbmNvbnN0IHJlcmFpc2VFdmVudHMgPSB7XG4gIGFkZHJlc3M6IFsnc2Nyb2xsJ10sXG4gIGJsb2NrcXVvdGU6IFsnc2Nyb2xsJ10sXG4gIGNhcHRpb246IFsnc2Nyb2xsJ10sXG4gIGNlbnRlcjogWydzY3JvbGwnXSxcbiAgZGQ6IFsnc2Nyb2xsJ10sXG4gIGRpcjogWydzY3JvbGwnXSxcbiAgZGl2OiBbJ3Njcm9sbCddLFxuICBkbDogWydzY3JvbGwnXSxcbiAgZHQ6IFsnc2Nyb2xsJ10sXG4gIGZpZWxkc2V0OiBbJ3Njcm9sbCddLFxuICBmb3JtOiBbJ3Jlc2V0JywgJ3Njcm9sbCddLFxuICBmcmFtZTogWydsb2FkJ10sXG4gIGgxOiBbJ3Njcm9sbCddLFxuICBoMjogWydzY3JvbGwnXSxcbiAgaDM6IFsnc2Nyb2xsJ10sXG4gIGg0OiBbJ3Njcm9sbCddLFxuICBoNTogWydzY3JvbGwnXSxcbiAgaDY6IFsnc2Nyb2xsJ10sXG4gIGlmcmFtZTogWydsb2FkJ10sXG4gIGltZzogWydhYm9ydCcsICdlcnJvcicsICdsb2FkJ10sXG4gIGlucHV0OiBbJ2Fib3J0JywgJ2NoYW5nZScsICdlcnJvcicsICdzZWxlY3QnLCAnbG9hZCddLFxuICBrZXlnZW46IFsncmVzZXQnLCAnc2VsZWN0J10sXG4gIGxpOiBbJ3Njcm9sbCddLFxuICBsaW5rOiBbJ2xvYWQnXSxcbiAgbWVudTogWydzY3JvbGwnXSxcbiAgb2JqZWN0OiBbJ2Vycm9yJywgJ3Njcm9sbCddLFxuICBvbDogWydzY3JvbGwnXSxcbiAgcDogWydzY3JvbGwnXSxcbiAgc2NyaXB0OiBbJ2Vycm9yJywgJ2xvYWQnXSxcbiAgc2VsZWN0OiBbJ2NoYW5nZScsICdzY3JvbGwnXSxcbiAgdGJvZHk6IFsnc2Nyb2xsJ10sXG4gIHRmb290OiBbJ3Njcm9sbCddLFxuICB0aGVhZDogWydzY3JvbGwnXSxcbiAgdGV4dGFyZWE6IFsnY2hhbmdlJywgJ3NlbGVjdCcsICdzY3JvbGwnXVxufTtcblxuXG4vLyBLZWVwIHRyYWNrIG9mIHdoaWNoIHJlLXJhaXNlZCBldmVudHMgc2hvdWxkIGJ1YmJsZS5cbmNvbnN0IGV2ZW50QnViYmxlcyA9IHtcbiAgYWJvcnQ6IHRydWUsXG4gIGNoYW5nZTogdHJ1ZSxcbiAgcmVzZXQ6IHRydWVcbn07XG5cblxuLy8gRWxlbWVudHMgd2hpY2ggYXJlIGRpc3BsYXk6IGJsb2NrIGJ5IGRlZmF1bHQuXG4vLyBTb3VyY2U6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvQmxvY2stbGV2ZWxfZWxlbWVudHNcbmNvbnN0IGJsb2NrRWxlbWVudHMgPSBbXG4gICdhZGRyZXNzJyxcbiAgJ2FydGljbGUnLFxuICAnYXNpZGUnLFxuICAnYmxvY2txdW90ZScsXG4gICdjYW52YXMnLFxuICAnZGQnLFxuICAnZGl2JyxcbiAgJ2RsJyxcbiAgJ2ZpZWxkc2V0JyxcbiAgJ2ZpZ2NhcHRpb24nLFxuICAnZmlndXJlJyxcbiAgJ2Zvb3RlcicsXG4gICdmb3JtJyxcbiAgJ2gxJyxcbiAgJ2gyJyxcbiAgJ2gzJyxcbiAgJ2g0JyxcbiAgJ2g1JyxcbiAgJ2g2JyxcbiAgJ2hlYWRlcicsXG4gICdoZ3JvdXAnLFxuICAnaHInLFxuICAnbGknLFxuICAnbWFpbicsXG4gICduYXYnLFxuICAnbm9zY3JpcHQnLFxuICAnb2wnLFxuICAnb3V0cHV0JyxcbiAgJ3AnLFxuICAncHJlJyxcbiAgJ3NlY3Rpb24nLFxuICAndGFibGUnLFxuICAndGZvb3QnLFxuICAndWwnLFxuICAndmlkZW8nXG5dO1xuXG5cbi8qKlxuICogV3JhcHMgYSBzdGFuZGFyZCBIVE1MIGVsZW1lbnQgc28gdGhhdCB0aGUgc3RhbmRhcmQgYmVoYXZpb3IgY2FuIHRoZW4gYmVcbiAqIGV4dGVuZGVkLlxuICpcbiAqIFtMaXZlIGRlbW9dKGh0dHA6Ly9iYXNpY3dlYmNvbXBvbmVudHMub3JnL2Jhc2ljLXdlYi1jb21wb25lbnRzL3BhY2thZ2VzL2Jhc2ljLXdyYXBwZWQtc3RhbmRhcmQtZWxlbWVudC8pXG4gKlxuICogU2VlIGFsc28gW2Jhc2ljLWF1dG9zaXplLXRleHRhcmVhXSguLi9iYXNpYy1hdXRvc2l6ZS10ZXh0YXJlYSkgYW5kXG4gKiBbYmFzaWMtY3VycmVudC1hbmNob3JdKC4uL2Jhc2ljLWN1cnJlbnQtYW5jaG9yKS4gVGhlIGZvcm1lciB1c2VzXG4gKiBXcmFwcGVkU3RhbmRhcmRFbGVtZW50IHRvIHdyYXAgYSBzdGFuZGFyZCBgPHRleHRhcmVhPmAgYW5kIGA8YT5gLFxuICogcmVzcGVjdGl2ZWx5LlxuICpcbiAqIFRoZSBDdXN0b20gRWxlbWVudHMgc3BlYyBkb2VzIG5vdCBjdXJyZW50bHkgKGFzIG9mIE1hcmNoIDIwMTYpIGFsbG93IHlvdSB0b1xuICogZXh0ZW5kIHRoZSBiZWhhdmlvciBvZiBhIHN0YW5kYXJkIEhUTUwgZWxlbWVudCBsaWtlIGA8YT5gIG9yIGA8YnV0dG9uPmAuXG4gKiBBcyBhIHBhcnRpYWwgd29ya2Fyb3VuZCwgdGhlIFdyYXBwZWRTdGFuZGFyZEVsZW1lbnQgY2xhc3MgY2FuIGNyZWF0ZSBhIGNsYXNzXG4gKiBmb3IgeW91IHRoYXQgd3JhcHMgYW4gaW5zdGFuY2Ugb2YgYSBzdGFuZGFyZCBIVE1MIGVsZW1lbnQuIEZvciBleGFtcGxlLCB0aGVcbiAqIGNvZGUgYmVsb3cgY3JlYXRlcyBhIGNsYXNzIHRoYXQgd2lsbCB3cmFwIGFuIGluc3RhbmNlIG9mIGEgc3RhbmRhcmQgYDxhPmBcbiAqIGVsZW1lbnQ6XG4gKlxuICogICAgIGNsYXNzIFdyYXBwZWRBIGV4dGVuZHMgV3JhcHBlZFN0YW5kYXJkRWxlbWVudC53cmFwKCdhJykge1xuICogICAgICAgY3VzdG9tTWV0aG9kKCkgeyAuLi4gfVxuICogICAgIH1cbiAqICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ3dyYXBwZWQtYScsIFdyYXBwZWRBKTtcbiAqXG4gKiBBbiBpbnN0YW5jZSBvZiB0aGUgcmVzdWx0aW5nIGNsYXNzIHdpbGwgbG9vayB0byB0aGUgdXNlciBsaWtlIGFuIGluc3RhbmNlIG9mXG4gKiB0aGUgc3RhbmRhcmQgZWxlbWVudCBjbGFzcyBpdCB3cmFwcy4gVGhlIHJlc3VsdGluZyBjbGFzcyB3aWxsICpub3QqIGJlIGFuXG4gKiBgaW5zdGFuY2VvZmAgdGhlIHN0YW5kYXJkIGNsYXNzIChoZXJlLCBIVE1MQW5jaG9yRWxlbWVudCkuIEFub3RoZXIgbGltaXRhdGlvblxuICogaXMgdGhhdCB0aGUgcmVzdWx0aW5nIGA8d3JhcHBlZC1hPmAgd2lsbCBub3QgYXV0b21hdGljYWxseSBwaWNrIHVwIENTUyBzdHlsZXNcbiAqIGZvciBzdGFuZGFyZCBgPGE+YCBlbGVtZW50cy4gSG93ZXZlciwgdGhlIHJlc3VsdGluZyBjbGFzcyAqY2FuKiBiZSBleHRlbmRlZC5cbiAqIEUuZy4sIGluc3RhbmNlcyBvZiB0aGUgYWJvdmUgY2xhc3MgaGF2ZSBhIGBjdXN0b21NZXRob2QoKWAgYXZhaWxhYmxlIHRvIHRoZW0uXG4gKlxuICogQW55IHByb3BlcnRpZXMgZGVmaW5lZCBieSB0aGUgb3JpZ2luYWwgc3RhbmRhcmQgZWxlbWVudCB3aWxsIGJlIGV4cG9zZWQgb25cbiAqIHRoZSByZXN1bHRpbmcgd3JhcHBlciBjbGFzcywgYW5kIGNhbGxzIHRvIGdldCBvciBzZXQgdGhvc2UgcHJvcGVydGllcyB3aWxsIGJlXG4gKiBkZWxlZ2F0ZWQgdG8gdGhlIHdyYXBwZWQgZWxlbWVudCBpbnN0YW5jZS4gQ29udGludWluZyB0aGUgYWJvdmUgZXhhbXBsZTpcbiAqXG4gKiAgICAgbGV0IHdyYXBwZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd3cmFwcGVkLWEnKTtcbiAqICAgICB3cmFwcGVkLmhyZWYgPSAnaHR0cDovL2V4YW1wbGUuY29tLyc7XG4gKiAgICAgd3JhcHBlZC50ZXh0Q29udGVudCA9ICdDbGljayBoZXJlJztcbiAqXG4gKiBIZXJlLCB0aGUgY3JlYXRlZCBjdXN0b20gYDx3cmFwcGVkLWE+YCBlbGVtZW50IHdpbGwgY29udGFpbiBpbnNpZGUgaXRzXG4gKiBzaGFkb3cgdHJlZSBhbiBpbnN0YW5jZSBvZiBhIHN0YW5kYXJkIGA8YT5gIGVsZW1lbnQuIFRoZSBjYWxsIHRvIHNldCB0aGVcbiAqIHdyYXBwZXIncyBgaHJlZmAgcHJvcGVydHkgd2lsbCB1bHRpbWF0ZWx5IHNldCB0aGUgYGhyZWZgIG9uIHRoZSBpbm5lciBsaW5rLlxuICogTW9yZW92ZXIsIHRoZSB0ZXh0IGNvbnRlbnQgb2YgdGhlIGA8d3JhcHBlZC1hPmAgZWxlbWVudCB3aWxsIGFwcGVhciBpbnNpZGVcbiAqIHRoZSBpbm5lciBsaW5rLiBUaGUgcmVzdWx0IG9mIGFsbCB0aGlzIGlzIHRoYXQgdGhlIHVzZXIgd2lsbCBzZWUgd2hhdCAqbG9va3MqXG4gKiBsaWtlIGEgbm9ybWFsIGxpbmssIGp1c3QgYXMgaWYgeW91IGhhZCB3cml0dGVuXG4gKiBgPGEgaHJlZj1cImh0dHA6Ly9leGFtcGxlLmNvbS9cIj5DbGljayBoZXJlPC9hPmAuIEhvd2V2ZXIsIHRoZSBhY3R1YWwgZWxlbWVudFxuICogd2lsbCBiZSBhbiBpbnN0YW5jZSBvZiB5b3VyIGN1c3RvbSBjbGFzcywgd2l0aCB3aGF0ZXZlciBiZWhhdmlvciB5b3UndmVcbiAqIGRlZmluZWQgZm9yIGl0LlxuICpcbiAqIFdyYXBwZWQgZWxlbWVudHMgc2hvdWxkIHJhaXNlIHRoZSBzYW1lIGV2ZW50cyBhcyB0aGUgb3JpZ2luYWwgc3RhbmRhcmRcbiAqIGVsZW1lbnRzLiBFLmcuLCBpZiB5b3Ugd3JhcCBhbiBgPGltZz5gIGVsZW1lbnQsIHRoZSB3cmFwcGVkIHJlc3VsdCB3aWxsIHJhaXNlXG4gKiB0aGUgc3RhbmRhcmQgYGxvYWRgIGV2ZW50IGFzIGV4cGVjdGVkLlxuICpcbiAqIFNvbWUgZWxlbWVudHMsIHN1Y2ggYXMgYDxib2R5PmAsIGA8aHRtbD5gLCBhbmQgYDxzdHlsZT5gIGNhbm5vdCBiZSB3cmFwcGVkXG4gKiBhbmQgc3RpbGwgYWNoaWV2ZSB0aGVpciBzdGFuZGFyZCBiZWhhdmlvci5cbiAqXG4gKiBAZXh0ZW5kcyBFbGVtZW50QmFzZVxuICovXG5jbGFzcyBXcmFwcGVkU3RhbmRhcmRFbGVtZW50IGV4dGVuZHMgRWxlbWVudEJhc2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICAvLyBMaXN0ZW4gZm9yIGFueSBldmVudHMgcmFpc2VkIGJ5IHRoZSBpbm5lciBlbGVtZW50IHdoaWNoIHdpbGwgbm90XG4gICAgLy8gYXV0b21hdGljYWxseSBiZSByZXRhcmdldHRlZCBhY3Jvc3MgdGhlIFNoYWRvdyBET00gYm91bmRhcnksIGFuZCByZS1yYWlzZVxuICAgIC8vIHRob3NlIGV2ZW50cyB3aGVuIHRoZXkgaGFwcGVuLlxuICAgIC8vXG4gICAgLy8gTm90ZTogSXQncyB1bmNsZWFyIHdoeSB3ZSBuZWVkIHRvIGRvIHRoaXMgaW4gdGhlIFNoYWRvdyBET00gcG9seWZpbGwuXG4gICAgLy8gSW4gdGhlb3J5LCBldmVudHMgaW4gdGhlIGxpZ2h0IERPTSBzaG91bGQgYnViYmxlIGFzIG5vcm1hbC4gQnV0IHRoaXNcbiAgICAvLyBjb2RlIGFwcGVhcnMgdG8gYmUgcmVxdWlyZWQgaW4gdGhlIHBvbHlmaWxsIGNhc2UgYXMgd2VsbC5cbiAgICBsZXQgZXZlbnROYW1lcyA9IHJlcmFpc2VFdmVudHNbdGhpcy5leHRlbmRzXSB8fCBbXTtcbiAgICBldmVudE5hbWVzLmZvckVhY2goZXZlbnROYW1lID0+IHtcbiAgICAgIHRoaXMuaW5uZXIuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIHJlYWxFdmVudCA9PiB7XG4gICAgICAgIGxldCBldmVudCA9IG5ldyBFdmVudChldmVudE5hbWUsIHtcbiAgICAgICAgICBidWJibGVzOiBldmVudEJ1YmJsZXNbZXZlbnROYW1lXSB8fCBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgZGVzY3JpcHRpb24gZm9yIHRoZSB1c2VyIG9mIHRoZSBlbGVtZW50J3MgcHVycG9zZSBvbiB0aGUgcGFnZS4gU2V0dGluZ1xuICAgKiB0aGlzIGFwcGxpZXMgdGhlIGxhYmVsIHRvIHRoZSBpbm5lciBlbGVtZW50LCBlbnN1cmluZyB0aGF0IHNjcmVlbiByZWFkZXJzXG4gICAqIGFuZCBvdGhlciBhc3Npc3RpdmUgdGVjaG5vbG9naWVzIHdpbGwgcHJvdmlkZSBhIG1lYW5pbmdmdWwgZGVzY3JpcHRpb24gdG9cbiAgICogdGhlIHVzZXIuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgYXJpYUxhYmVsKCkge1xuICAgIHJldHVybiB0aGlzLmlubmVyLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpO1xuICB9XG4gIHNldCBhcmlhTGFiZWwobGFiZWwpIHtcbiAgICAvLyBQcm9wYWdhdGUgdGhlIEFSSUEgbGFiZWwgdG8gdGhlIGlubmVyIHRleHRhcmVhLlxuICAgIHRoaXMuaW5uZXIuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgbGFiZWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhlIGlubmVyIHN0YW5kYXJkIEhUTUwgZWxlbWVudC5cbiAgICpcbiAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgKi9cbiAgZ2V0IGlubmVyKCkge1xuICAgIHJldHVybiB0aGlzLiQuaW5uZXI7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIGNvcGllZCBpbnRvIHRoZSBzaGFkb3cgdHJlZSBvZiBuZXcgaW5zdGFuY2VzIG9mIHRoaXMgZWxlbWVudC5cbiAgICpcbiAgICogVGhlIGRlZmF1bHQgdmFsdWUgb2YgdGhpcyBwcm9wZXJ0eSBpcyBhIHRlbXBsYXRlIHRoYXQgaW5jbHVkZXMgYW4gaW5zdGFuY2VcbiAgICogdGhlIHN0YW5kYXJkIGVsZW1lbnQgYmVpbmcgd3JhcHBlZCwgd2l0aCBhIGA8c2xvdD5gIGVsZW1lbnQgaW5zaWRlIHRoYXRcbiAgICogdG8gcGljayB1cCB0aGUgZWxlbWVudCdzIGxpZ2h0IERPTSBjb250ZW50LiBGb3IgZXhhbXBsZSwgaWYgeW91IHdyYXAgYW5cbiAgICogYDxhPmAgZWxlbWVudCwgdGhlbiB0aGUgZGVmYXVsdCB0ZW1wbGF0ZSB3aWxsIGxvb2sgbGlrZTpcbiAgICpcbiAgICogICAgIDx0ZW1wbGF0ZT5cbiAgICogICAgICAgPHN0eWxlPlxuICAgKiAgICAgICA6aG9zdCB7XG4gICAqICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgKiAgICAgICB9XG4gICAqICAgICAgIDwvc3R5bGU+XG4gICAqICAgICAgIDxhIGlkPVwiaW5uZXJcIj5cbiAgICogICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAqICAgICAgIDwvYT5cbiAgICogICAgIDwvdGVtcGxhdGU+XG4gICAqXG4gICAqIFRoZSBgZGlzcGxheWAgc3R5bGluZyBhcHBsaWVkIHRvIHRoZSBob3N0IHdpbGwgYmUgYGJsb2NrYCBmb3IgZWxlbWVudHMgdGhhdFxuICAgKiBhcmUgYmxvY2sgZWxlbWVudHMgYnkgZGVmYXVsdCwgYW5kIGBpbmxpbmUtYmxvY2tgIChub3QgYGlubGluZWApIGZvciBvdGhlclxuICAgKiBlbGVtZW50cy5cbiAgICpcbiAgICogSWYgeW91J2QgbGlrZSB0aGUgdGVtcGxhdGUgdG8gaW5jbHVkZSBvdGhlciBlbGVtZW50cywgdGhlbiBvdmVycmlkZSB0aGlzXG4gICAqIHByb3BlcnR5IGFuZCByZXR1cm4gYSB0ZW1wbGF0ZSBvZiB5b3VyIG93bi4gVGhlIHRlbXBsYXRlIHNob3VsZCBpbmNsdWRlIGFuXG4gICAqIGluc3RhbmNlIG9mIHRoZSBzdGFuZGFyZCBIVE1MIGVsZW1lbnQgeW91IGFyZSB3cmFwcGluZywgYW5kIHRoZSBJRCBvZiB0aGF0XG4gICAqIGVsZW1lbnQgc2hvdWxkIGJlIFwiaW5uZXJcIi5cbiAgICpcbiAgICogQHR5cGUgeyhzdHJpbmd8SFRNTFRlbXBsYXRlRWxlbWVudCl9XG4gICAqL1xuICBnZXQgdGVtcGxhdGUoKSB7XG4gICAgbGV0IGRpc3BsYXkgPSBibG9ja0VsZW1lbnRzLmluZGV4T2YodGhpcy5leHRlbmRzKSA+PSAwID9cbiAgICAgICdibG9jaycgOlxuICAgICAgJ2lubGluZS1ibG9jayc7XG4gICAgLy8gVE9ETzogVXNlIHNsb3QgaW5zdGVhZCBvZiBjb250ZW50LlxuICAgIHJldHVybiBgPHN0eWxlPjpob3N0IHsgZGlzcGxheTogJHtkaXNwbGF5fX08L3N0eWxlPjwke3RoaXMuZXh0ZW5kc30gaWQ9XCJpbm5lclwiPjxzbG90Pjwvc2xvdD48LyR7dGhpcy5leHRlbmRzfWA7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGNsYXNzIHRoYXQgd3JhcHMgYSBzdGFuZGFyZCBIVE1MIGVsZW1lbnQuXG4gICAqXG4gICAqIE5vdGUgdGhhdCB0aGUgcmVzdWx0aW5nIGNsYXNzIGlzIGEgc3ViY2xhc3Mgb2YgV3JhcHBlZFN0YW5kYXJkRWxlbWVudCwgbm90XG4gICAqIHRoZSBzdGFuZGFyZCBjbGFzcyBiZWluZyB3cmFwcGVkLiBFLmcuLCBpZiB5b3UgY2FsbFxuICAgKiBgV3JhcHBlZFN0YW5kYXJkRWxlbWVudC53cmFwKCdhJylgLCB5b3Ugd2lsbCBnZXQgYSBjbGFzcyB3aG9zZSBzaGFkb3cgdHJlZVxuICAgKiB3aWxsIGluY2x1ZGUgYW4gYW5jaG9yIGVsZW1lbnQsIGJ1dCB0aGUgY2xhc3Mgd2lsbCAqbm90KiBpbmhlcml0IGZyb21cbiAgICogSFRNTEFuY2hvckVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBleHRlbmRzVGFnIC0gdGhlIHN0YW5kYXJkIEhUTUwgZWxlbWVudCB0YWcgdG8gZXh0ZW5kXG4gICAqL1xuICBzdGF0aWMgd3JhcChleHRlbmRzVGFnKSB7XG5cbiAgICAvLyBDcmVhdGUgdGhlIG5ldyBjbGFzcy5cbiAgICBjbGFzcyBXcmFwcGVkIGV4dGVuZHMgV3JhcHBlZFN0YW5kYXJkRWxlbWVudCB7fVxuXG4gICAgLy8gSW5kaWNhdGUgd2hpY2ggdGFnIGl0IHdyYXBzLlxuICAgIFdyYXBwZWQucHJvdG90eXBlLmV4dGVuZHMgPSBleHRlbmRzVGFnO1xuXG4gICAgLy8gQ3JlYXRlIGdldHRlci9zZXR0ZXJzIHRoYXQgZGVsZWdhdGUgdG8gdGhlIHdyYXBwZWQgZWxlbWVudC5cbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZXh0ZW5kc1RhZyk7XG4gICAgbGV0IGV4dGVuZHNQcm90b3R5cGUgPSBlbGVtZW50LmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgICBsZXQgbmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhleHRlbmRzUHJvdG90eXBlKTtcbiAgICBuYW1lcy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICBsZXQgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZXh0ZW5kc1Byb3RvdHlwZSwgbmFtZSk7XG4gICAgICAgIGxldCBkZWxlZ2F0ZSA9IGNyZWF0ZVByb3BlcnR5RGVsZWdhdGUobmFtZSwgZGVzY3JpcHRvcik7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShXcmFwcGVkLnByb3RvdHlwZSwgbmFtZSwgZGVsZWdhdGUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIFdyYXBwZWQ7XG4gIH1cblxufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVByb3BlcnR5RGVsZWdhdGUobmFtZSwgZGVzY3JpcHRvcikge1xuICBsZXQgZGVsZWdhdGUgPSB7XG4gICAgY29uZmlndXJhYmxlOiBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSxcbiAgICBlbnVtZXJhYmxlOiBkZXNjcmlwdG9yLmVudW1lcmFibGUsXG4gIH07XG4gIGlmIChkZXNjcmlwdG9yLmdldCkge1xuICAgIGRlbGVnYXRlLmdldCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW5uZXJbbmFtZV07XG4gICAgfTtcbiAgfVxuICBpZiAoZGVzY3JpcHRvci5zZXQpIHtcbiAgICBkZWxlZ2F0ZS5zZXQgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgdGhpcy5pbm5lcltuYW1lXSA9IHZhbHVlO1xuICAgIH07XG4gIH1cbiAgaWYgKGRlc2NyaXB0b3Iud3JpdGFibGUpIHtcbiAgICBkZWxlZ2F0ZS53cml0YWJsZSA9IGRlc2NyaXB0b3Iud3JpdGFibGU7XG4gIH1cbiAgcmV0dXJuIGRlbGVnYXRlO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFdyYXBwZWRTdGFuZGFyZEVsZW1lbnQ7XG4iXX0=
