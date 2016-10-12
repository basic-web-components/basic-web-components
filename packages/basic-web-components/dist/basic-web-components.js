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

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AnimationStage).apply(this, arguments));
  }

  _createClass(AnimationStage, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      if (_get(Object.getPrototypeOf(AnimationStage.prototype), 'connectedCallback', this)) {
        _get(Object.getPrototypeOf(AnimationStage.prototype), 'connectedCallback', this).call(this);
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

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ArrowSelection).call(this));

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
      if (_get(Object.getPrototypeOf(ArrowSelection.prototype), 'connectedCallback', this)) {
        _get(Object.getPrototypeOf(ArrowSelection.prototype), 'connectedCallback', this).call(this);
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

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AutosizeTextarea).call(this));

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
      if (_get(Object.getPrototypeOf(AutosizeTextarea.prototype), 'connectedCallback', this)) {
        _get(Object.getPrototypeOf(AutosizeTextarea.prototype), 'connectedCallback', this).call(this);
      }
      initializeWhenRendered(this);
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
      return '\n      <style>\n      :host {\n        display: -webkit-flex;\n        display: flex;\n        overflow: hidden;\n        position: relative;\n      }\n\n      #container ::slotted(*) {\n        height: 100%;\n        object-fit: contain;\n        position: absolute;\n        width: 100%;\n        will-change: transform;\n      }\n      </style>\n\n      <div id="container" role="none">\n        <slot></slot>\n      </div>\n    ';
    }
  }]);

  return Carousel;
}(base);

customElements.define('basic-carousel', Carousel);
exports.default = Carousel;

},{"../../basic-component-mixins/src/ContentAsItems":10,"../../basic-component-mixins/src/DirectionSelection":12,"../../basic-component-mixins/src/DistributedChildrenAsContent":14,"../../basic-component-mixins/src/FractionalSelection":15,"../../basic-component-mixins/src/Keyboard":17,"../../basic-component-mixins/src/KeyboardDirection":18,"../../basic-component-mixins/src/SelectionAnimation":22,"../../basic-component-mixins/src/SelectionAriaActive":23,"../../basic-component-mixins/src/SingleSelection":28,"../../basic-component-mixins/src/SwipeDirection":29,"../../basic-component-mixins/src/TargetInCollective":30,"../../basic-component-mixins/src/TrackpadDirection":33,"../../basic-element-base/src/ElementBase":39}],5:[function(require,module,exports){
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

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CollapsiblePanel).call(this));

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

},{"../../basic-component-mixins/src/OpenClose":21,"../../basic-element-base/src/ElementBase":39}],6:[function(require,module,exports){
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

},{"../src/microtask":35,"./createSymbol":34}],7:[function(require,module,exports){
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

      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ClickSelection).call(this));

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

},{"./createSymbol":34,"./toggleClass":37}],11:[function(require,module,exports){
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
        this[targetSymbol] = element;
        if ('target' in base.prototype) {
          _set(Object.getPrototypeOf(ContentFirstChildTarget.prototype), 'target', element, this);
        }
      }
    }]);

    return ContentFirstChildTarget;
  }(base);

  return ContentFirstChildTarget;
};

},{"./createSymbol":34}],12:[function(require,module,exports){
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

},{}],13:[function(require,module,exports){
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

},{}],14:[function(require,module,exports){
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

},{"./microtask":35}],15:[function(require,module,exports){
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

},{"./createSymbol":34}],16:[function(require,module,exports){
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

      // Set defaults.

      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Generic).call(this));

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
        if (_get(Object.getPrototypeOf(Generic.prototype), 'attributeChangedCallback', this)) {
          _get(Object.getPrototypeOf(Generic.prototype), 'attributeChangedCallback', this).call(this, name, oldValue, newValue);
        }
      }
    }, {
      key: 'connectedCallback',
      value: function connectedCallback() {
        if (_get(Object.getPrototypeOf(Generic.prototype), 'connectedCallback', this)) {
          _get(Object.getPrototypeOf(Generic.prototype), 'connectedCallback', this).call(this);
        }
        reflectAttribute(this);
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
        var parsed = typeof value === 'string' ? String(value) !== 'false' : value;
        this[genericSymbol] = parsed;
        if ('generic' in base.prototype) {
          _set(Object.getPrototypeOf(Generic.prototype), 'generic', value, this);
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
    }, {
      key: 'connectedCallback',
      value: function connectedCallback() {
        if (_get(Object.getPrototypeOf(Keyboard.prototype), 'connectedCallback', this)) {
          _get(Object.getPrototypeOf(Keyboard.prototype), 'connectedCallback', this).call(this);
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
}

function stopListeningToKeydown(element) {
  element.removeEventListener('keydown', element[keydownListenerSymbol]);
  element[keydownListenerSymbol] = null;
  element.removeAttribute('tabindex');
}

},{"./createSymbol":34}],18:[function(require,module,exports){
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

},{"./createSymbol":34}],19:[function(require,module,exports){
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

},{}],20:[function(require,module,exports){
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

},{"./createSymbol":34}],21:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

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

      // Set defaults.

      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(OpenClose).call(this));

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
        if (_get(Object.getPrototypeOf(OpenClose.prototype), 'connectedCallback', this)) {
          _get(Object.getPrototypeOf(OpenClose.prototype), 'connectedCallback', this).call(this);
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
        if (_get(Object.getPrototypeOf(OpenClose.prototype), 'render', this)) {
          _get(Object.getPrototypeOf(OpenClose.prototype), 'render', this).call(this);
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
          _set(Object.getPrototypeOf(OpenClose.prototype), 'closed', value, this);
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
        var defaults = _get(Object.getPrototypeOf(OpenClose.prototype), 'defaults', this) || {};
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

      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SelectionAnimation).call(this));

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
        this[selectionAnimationDurationSymbol] = value;
        if ('selectionAnimationDuration' in base.prototype) {
          _set(Object.getPrototypeOf(SelectionAnimation.prototype), 'selectionAnimationDuration', value, this);
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
          _set(Object.getPrototypeOf(SelectionAnimation.prototype), 'selectionAnimationEffect', value, this);
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
          _set(Object.getPrototypeOf(SelectionAnimation.prototype), 'selectionAnimationKeyframes', value, this);
        }
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
        this[showTransitionSymbol] = value;
        if ('showTransition' in base.prototype) {
          _set(Object.getPrototypeOf(SelectionAnimation.prototype), 'showTransition', value, this);
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

  resetAnimations(element);

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
  var lastAnimationDetails = undefined;
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
function resetAnimations(element) {
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

      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SelectionHighlight).call(this));

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
   * [SingleSelection](SingleSelection.md) mixin.
   */

  var SelectionInView = function (_base) {
    _inherits(SelectionInView, _base);

    function SelectionInView() {
      _classCallCheck(this, SelectionInView);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(SelectionInView).apply(this, arguments));
    }

    _createClass(SelectionInView, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        if (_get(Object.getPrototypeOf(SelectionInView.prototype), 'connectedCallback', this)) {
          _get(Object.getPrototypeOf(SelectionInView.prototype), 'connectedCallback', this).call(this);
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

},{}],28:[function(require,module,exports){
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

},{"./createSymbol":34,"./microtask":35}],29:[function(require,module,exports){
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

      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SwipeDirection).call(this));

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

    _createClass(SwipeDirection, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        if (_get(Object.getPrototypeOf(SwipeDirection.prototype), 'connectedCallback', this)) {
          _get(Object.getPrototypeOf(SwipeDirection.prototype), 'connectedCallback', this).call(this);
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

},{"./createSymbol":34}],30:[function(require,module,exports){
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

},{"./Collective":8}],31:[function(require,module,exports){
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

},{"./createSymbol":34}],32:[function(require,module,exports){
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
   * [SingleSelection](SingleSelection.md) mixins.
   */

  var TimerSelection = function (_base) {
    _inherits(TimerSelection, _base);

    function TimerSelection() {
      _classCallCheck(this, TimerSelection);

      // Set defaults.

      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TimerSelection).call(this));

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
        if (_get(Object.getPrototypeOf(TimerSelection.prototype), 'contentChanged', this)) {
          _get(Object.getPrototypeOf(TimerSelection.prototype), 'contentChanged', this).call(this);
        }
        restartTimer(this);
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
        var previousPlaying = this[playingSymbol];
        var parsed = String(playing) === 'true'; // Cast to boolean
        if ('playing' in base.prototype) {
          _set(Object.getPrototypeOf(TimerSelection.prototype), 'playing', playing, this);
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
        this[selectionTimerDurationSymbol] = parseInt(value);
        if ('selectionTimerDuration' in base.prototype) {
          _set(Object.getPrototypeOf(TimerSelection.prototype), 'selectionTimerDuration', value, this);
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

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CurrentAnchor).call(this));

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
      if (_get(Object.getPrototypeOf(CurrentAnchor.prototype), 'connectedCallback', this)) {
        _get(Object.getPrototypeOf(CurrentAnchor.prototype), 'connectedCallback', this).call(this);
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

},{"../../basic-component-mixins/src/createSymbol":34,"../../basic-component-mixins/src/toggleClass":37,"../../basic-wrapped-standard-element/src/WrappedStandardElement":53}],39:[function(require,module,exports){
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

},{"../../basic-component-mixins/src/AttributeMarshalling":6,"../../basic-component-mixins/src/Composable":9,"../../basic-component-mixins/src/DistributedChildren":13,"../../basic-component-mixins/src/ShadowElementReferences":26,"../../basic-component-mixins/src/ShadowTemplate":27}],40:[function(require,module,exports){
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
    key: 'connectedCallback',
    value: function connectedCallback() {
      if (_get(Object.getPrototypeOf(FadeOverflow.prototype), 'connectedCallback', this)) {
        _get(Object.getPrototypeOf(FadeOverflow.prototype), 'connectedCallback', this).call(this);
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

},{"../../basic-component-mixins/src/ContentAsItems":10,"../../basic-component-mixins/src/DistributedChildrenAsContent":14,"../../basic-component-mixins/src/SelectionAriaActive":23,"../../basic-component-mixins/src/SingleSelection":28,"../../basic-component-mixins/src/TargetInCollective":30,"../../basic-element-base/src/ElementBase":39}],43:[function(require,module,exports){
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

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PageDots).call(this));

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
      this.dispatchEvent(new CustomEvent('selected-fraction-changed'));
    }
  }, {
    key: 'target',
    get: function get() {
      return _get(Object.getPrototypeOf(PageDots.prototype), 'target', this);
    },
    set: function set(element) {
      var _this2 = this;

      if ('target' in base.prototype) {
        _set(Object.getPrototypeOf(PageDots.prototype), 'target', element, this);
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

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PlayControls).call(this));

    _this.$.previousButton.addEventListener('click', function (event) {
      _this.selectPrevious();
    });
    _this.$.playButton.addEventListener('click', function (event) {
      _this.playing = !_this.playing;
    });
    _this.$.nextButton.addEventListener('click', function (event) {
      _this.selectNext();
    });
    (0, _toggleClass2.default)(_this, 'playing', _this.playing);
    return _this;
  }

  _createClass(PlayControls, [{
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
      return '\n      <style>\n      :host {\n        display: -webkit-flex;\n        display: flex;\n        position: relative;\n      }\n\n      #buttons {\n        bottom: 0;\n        box-sizing: border-box;\n        padding: 0.5em;\n        position: absolute;\n        text-align: center;\n        width: 100%;\n        z-index: 1;\n      }\n\n      button {\n        background: transparent;\n        border: none;\n        fill: rgba(255, 255, 255, 0.5);\n        padding: 0;\n        vertical-align: middle;\n      }\n      :host(:hover) button {\n        fill: rgba(255, 255, 255, 0.7);\n      }\n      button:hover {\n        fill: rgba(255, 255, 255, 0.85);\n      }\n      button:active {\n        fill: white;\n      }\n\n      .icon {\n        height: 30px;\n        width: 30px;\n      }\n      #playButton .icon {\n        height: 40px;\n        width: 40px;\n      }\n\n      :host(.playing) .pausedControl {\n        display: none;\n      }\n      :host(:not(.playing)) .playingControl {\n        display: none;\n      }\n\n      #container {\n        display: -webkit-flex;\n        display: flex;\n        -webkit-flex: 1;\n        flex: 1;\n      }\n\n      #container ::slotted(*) {\n        -webkit-flex: 1;\n        flex: 1;\n      }\n      </style>\n\n      <div id="buttons">\n        <button id="previousButton">\n          <svg class="icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">\n            <g id="skip-previous">\n              <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>\n            </g>\n          </svg>\n        </button>\n        <button id="playButton">\n          <svg class="icon playingControl" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">\n            <g id="pause-circle-outline">\n              <path d="M9 16h2V8H9v8zm3-14C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-4h2V8h-2v8z"></path>\n            </g>\n          </svg>\n          <svg class="icon pausedControl" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">\n            <g id="play-circle-outline">\n              <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>\n            </g>\n          </svg>\n        </button>\n        <button id="nextButton">\n          <svg class="icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">\n            <g id="skip-next">\n              <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>\n            </g>\n          </svg>\n        </button>\n      </div>\n\n      <div id="container" role="none">\n        <slot></slot>\n      </div>\n    ';
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
      return '\n      <style>\n      :host {\n        display: -webkit-flex;\n        display: flex;\n        overflow: hidden;\n        position: relative;\n      }\n\n      #container ::slotted(*) {\n        height: 100%;\n        object-fit: contain;\n        position: absolute;\n        width: 100%;\n        will-change: transform;\n      }\n      </style>\n\n      <div id="container" role="none">\n        <slot></slot>\n      </div>\n    ';
    }
  }]);

  return Slideshow;
}(base);

customElements.define('basic-slideshow', Slideshow);

},{"../../basic-component-mixins/src/ContentAsItems":10,"../../basic-component-mixins/src/DistributedChildrenAsContent":14,"../../basic-component-mixins/src/FractionalSelection":15,"../../basic-component-mixins/src/SelectionAnimation":22,"../../basic-component-mixins/src/SelectionAriaActive":23,"../../basic-component-mixins/src/SingleSelection":28,"../../basic-component-mixins/src/TimerSelection":32,"../../basic-element-base/src/ElementBase":39}],47:[function(require,module,exports){
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

},{"../../basic-component-mixins/src/ContentAsItems":10,"../../basic-component-mixins/src/DirectionSelection":12,"../../basic-component-mixins/src/DistributedChildrenAsContent":14,"../../basic-component-mixins/src/FractionalSelection":15,"../../basic-component-mixins/src/Keyboard":17,"../../basic-component-mixins/src/KeyboardDirection":18,"../../basic-component-mixins/src/SelectionAriaActive":23,"../../basic-component-mixins/src/SingleSelection":28,"../../basic-component-mixins/src/SwipeDirection":29,"../../basic-component-mixins/src/TargetInCollective":30,"../../basic-component-mixins/src/TrackpadDirection":33,"../../basic-element-base/src/ElementBase":39,"../../basic-sliding-viewport/src/SlidingViewport":48}],48:[function(require,module,exports){
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

},{"../../basic-component-mixins/src/FractionalSelection":15,"../../basic-component-mixins/src/createSymbol":34,"../../basic-component-mixins/src/toggleClass":37,"../../basic-element-base/src/ElementBase":39,"../../basic-spread-items/src/SpreadItems":49}],49:[function(require,module,exports){
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

},{"../../basic-component-mixins/src/DistributedChildrenAsContent":14,"../../basic-element-base/src/ElementBase":39}],50:[function(require,module,exports){
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

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TabStrip).call(this));

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

    if (!_this.getAttribute('role')) {
      // Assign a default ARIA role.
      _this.setAttribute('role', 'tablist');
    }

    // Set defaults.
    if (typeof _this.tabPosition === 'undefined') {
      _this.tabPosition = _this.defaults.tabPosition;
    }
    return _this;
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

    // Listen for any events raised by the inner element which will not
    // automatically be retargetted across the Shadow DOM boundary, and re-raise
    // those events when they happen.
    //
    // Note: It's unclear why we need to do this in the Shadow DOM polyfill.
    // In theory, events in the light DOM should bubble as normal. But this
    // code appears to be required in the polyfill case as well.

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(WrappedStandardElement).call(this));

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

},{"../../basic-element-base/src/ElementBase":39}]},{},[52])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwYWNrYWdlcy9iYXNpYy1hbmltYXRpb24tc3RhZ2Uvc3JjL0FuaW1hdGlvblN0YWdlLmpzIiwicGFja2FnZXMvYmFzaWMtYXJyb3ctc2VsZWN0aW9uL3NyYy9BcnJvd1NlbGVjdGlvbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWF1dG9zaXplLXRleHRhcmVhL3NyYy9BdXRvc2l6ZVRleHRhcmVhLmpzIiwicGFja2FnZXMvYmFzaWMtY2Fyb3VzZWwvc3JjL0Nhcm91c2VsLmpzIiwicGFja2FnZXMvYmFzaWMtY29sbGFwc2libGUtcGFuZWwvc3JjL0NvbGxhcHNpYmxlUGFuZWwuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9BdHRyaWJ1dGVNYXJzaGFsbGluZy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NsaWNrU2VsZWN0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ29sbGVjdGl2ZS5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NvbXBvc2FibGUuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Db250ZW50QXNJdGVtcy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NvbnRlbnRGaXJzdENoaWxkVGFyZ2V0LmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlyZWN0aW9uU2VsZWN0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlzdHJpYnV0ZWRDaGlsZHJlbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9GcmFjdGlvbmFsU2VsZWN0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvR2VuZXJpYy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0tleWJvYXJkLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvS2V5Ym9hcmREaXJlY3Rpb24uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9LZXlib2FyZFBhZ2VkU2VsZWN0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvS2V5Ym9hcmRQcmVmaXhTZWxlY3Rpb24uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9PcGVuQ2xvc2UuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TZWxlY3Rpb25BbmltYXRpb24uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TZWxlY3Rpb25BcmlhQWN0aXZlLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2VsZWN0aW9uSGlnaGxpZ2h0LmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2VsZWN0aW9uSW5WaWV3LmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2hhZG93RWxlbWVudFJlZmVyZW5jZXMuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TaGFkb3dUZW1wbGF0ZS5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NpbmdsZVNlbGVjdGlvbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1N3aXBlRGlyZWN0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvVGFyZ2V0SW5Db2xsZWN0aXZlLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvVGFyZ2V0U2VsZWN0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvVGltZXJTZWxlY3Rpb24uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9UcmFja3BhZERpcmVjdGlvbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL2NyZWF0ZVN5bWJvbC5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL21pY3JvdGFzay5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL3JlbmRlckFycmF5QXNFbGVtZW50cy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL3RvZ2dsZUNsYXNzLmpzIiwicGFja2FnZXMvYmFzaWMtY3VycmVudC1hbmNob3Ivc3JjL0N1cnJlbnRBbmNob3IuanMiLCJwYWNrYWdlcy9iYXNpYy1lbGVtZW50LWJhc2Uvc3JjL0VsZW1lbnRCYXNlLmpzIiwicGFja2FnZXMvYmFzaWMtZmFkZS1vdmVyZmxvdy9zcmMvRmFkZU92ZXJmbG93LmpzIiwicGFja2FnZXMvYmFzaWMtbGlzdC1ib3gvc3JjL0xpc3RCb3guanMiLCJwYWNrYWdlcy9iYXNpYy1tb2Rlcy9zcmMvTW9kZXMuanMiLCJwYWNrYWdlcy9iYXNpYy1wYWdlLWRvdHMvc3JjL1BhZ2VEb3RzLmpzIiwicGFja2FnZXMvYmFzaWMtcGxheS1jb250cm9scy9zcmMvUGxheUNvbnRyb2xzLmpzIiwicGFja2FnZXMvYmFzaWMtc2xpZGVzaG93LXRpbWVyL3NyYy9TbGlkZXNob3dUaW1lci5qcyIsInBhY2thZ2VzL2Jhc2ljLXNsaWRlc2hvdy9zcmMvU2xpZGVzaG93LmpzIiwicGFja2FnZXMvYmFzaWMtc2xpZGluZy1jYXJvdXNlbC9zcmMvU2xpZGluZ0Nhcm91c2VsLmpzIiwicGFja2FnZXMvYmFzaWMtc2xpZGluZy12aWV3cG9ydC9zcmMvU2xpZGluZ1ZpZXdwb3J0LmpzIiwicGFja2FnZXMvYmFzaWMtc3ByZWFkLWl0ZW1zL3NyYy9TcHJlYWRJdGVtcy5qcyIsInBhY2thZ2VzL2Jhc2ljLXRhYi1zdHJpcC9zcmMvVGFiU3RyaXAuanMiLCJwYWNrYWdlcy9iYXNpYy10YWJzL3NyYy9UYWJzLmpzIiwicGFja2FnZXMvYmFzaWMtd2ViLWNvbXBvbmVudHMvc3JjL2FsbC5qcyIsInBhY2thZ2VzL2Jhc2ljLXdyYXBwZWQtc3RhbmRhcmQtZWxlbWVudC9zcmMvV3JhcHBlZFN0YW5kYXJkRWxlbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1NBLElBQUksSUFBSSxHQUFHLHNCQUFZLE9BQU8seUxBTzdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUM7SUE0QkksY0FBYztZQUFkLGNBQWM7O1dBQWQsY0FBYzswQkFBZCxjQUFjOztrRUFBZCxjQUFjOzs7ZUFBZCxjQUFjOzt3Q0FFRTtBQUNsQixxQ0FIRSxjQUFjLHlDQUdhO0FBQUUsbUNBSDdCLGNBQWMsbURBR3lDO09BQUU7QUFDM0QsVUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztLQUMvQjs7O3dCQUVjO0FBQ2Isb1VBZ0JFO0tBQ0g7OztTQXpCRyxjQUFjO0VBQVMsSUFBSTs7QUE4QmpDLGNBQWMsQ0FBQyxNQUFNLENBQUMsdUJBQXVCLEVBQUUsY0FBYyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RC9ELElBQU0sdUJBQXVCLEdBQUcsNEJBQWEsbUJBQW1CLENBQUMsQ0FBQztBQUNsRSxJQUFNLHVCQUF1QixHQUFHLDRCQUFhLG1CQUFtQixDQUFDLENBQUM7QUFDbEUsSUFBTSxnQkFBZ0IsR0FBRyw0QkFBYSxZQUFZLENBQUMsQ0FBQztBQUNwRCxJQUFNLGdCQUFn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RSxVQUFVLENBQUMsVUFBVTtHQUNsQyxDQUFDO0FBQ0YsTUFBSSxVQUFVLENBQUMsR0FBRyxFQUFFO0FBQ2xCLFlBQVEsQ0FBQyxHQUFHLEdBQUcsWUFBVztBQUN4QixhQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDekIsQ0FBQztHQUNIO0FBQ0QsTUFBSSxVQUFVLENBQUMsR0FBRyxFQUFFO0FBQ2xCLFlBQVEsQ0FBQyxHQUFHLEdBQUcsVUFBUyxLQUFLLEVBQUU7QUFDN0IsVUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7S0FDMUIsQ0FBQztHQUNIO0FBQ0QsTUFBSSxVQUFVLENBQUMsUUFBUSxFQUFFO0FBQ3ZCLFlBQVEsQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQztHQUN6QztBQUNELFNBQU8sUUFBUSxDQUFDO0NBQ2pCOztrQkFHYyxzQkFBc0IiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IEVsZW1lbnRCYXNlIGZyb20gJy4uLy4uL2Jhc2ljLWVsZW1lbnQtYmFzZS9zcmMvRWxlbWVudEJhc2UnO1xuaW1wb3J0IENvbnRlbnRBc0l0ZW1zIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NvbnRlbnRBc0l0ZW1zJztcbmltcG9ydCBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50IGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQnO1xuaW1wb3J0IEZyYWN0aW9uYWxTZWxlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRnJhY3Rpb25hbFNlbGVjdGlvbic7XG5pbXBvcnQgU2VsZWN0aW9uQW5pbWF0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NlbGVjdGlvbkFuaW1hdGlvbic7XG5pbXBvcnQgU2VsZWN0aW9uQXJpYUFjdGl2ZSBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TZWxlY3Rpb25BcmlhQWN0aXZlJztcbmltcG9ydCBTaW5nbGVTZWxlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2luZ2xlU2VsZWN0aW9uJztcblxuXG5sZXQgYmFzZSA9IEVsZW1lbnRCYXNlLmNvbXBvc2UoXG4gIENvbnRlbnRBc0l0ZW1zLFxuICBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50LFxuICBGcmFjdGlvbmFsU2VsZWN0aW9uLFxuICBTZWxlY3Rpb25BbmltYXRpb24sXG4gIFNlbGVjdGlvbkFyaWFBY3RpdmUsXG4gIFNpbmdsZVNlbGVjdGlvblxuKTtcblxuLyoqXG4gKiBQcmVzZW50cyBhIHNpbmdsZSBpdGVtIGFzIHNlbGVjdGVkLCBwcm92aWRpbmcgYW5pbWF0ZWQgdHJhbnNpdGlvbnMgd2hlbiB0aGVcbiAqIHNlbGVjdGlvbiBjaGFuZ2VzLiBUaGUgc2FtZSBhbmltYXRpb24gY2FuIGJlIHNob3duIGF0IGFuIGFyYml0cmFyeSBwb2ludCxcbiAqIGdlbmVyYWxseSB1c2VkIHRvIHJlZmxlY3QgYSB1c2VyLWNvbnRyb2xsZWQgdG91Y2ggb3IgdHJhY2twYWQgZHJhZyBvcGVyYXRpb25cbiAqIGluIHByb2dyZXNzLlxuICpcbiAqIFtMaXZlIGRlbW9dKGh0dHA6Ly9iYXNpY3dlYmNvbXBvbmVudHMub3JnL2Jhc2ljLXdlYi1jb21wb25lbnRzL3BhY2thZ2VzL2Jhc2ljLWFuaW1hdGlvbi1zdGFnZS8pXG4gKlxuICogVGhpcyBjb21wb25lbnQgaXMgaW50ZW5kZWQgdG8gYmUgdXNlZCBhcyBhIHByb2dyYW1tYXRpYyByZW5kZXJpbmcgc3VyZmFjZSBmb3JcbiAqIGNvbXBvbmVudHMgd2hpY2ggd2FudCB0byBzaG93IHRyYW5zaXRpb25hbCBlZmZlY3RzLlxuICpcbiAqIFRoZSBjb21wb25lbnQgdXNlcyB0aGUgW1NlbGVjdGlvbkFuaW1hdGlvbl0oLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9kb2NzL1NlbGVjdGlvbkFuaW1hdGlvbi5tZClcbiAqIG1peGluLCB3aGljaCBpbiB0dXJuIHVzZXMgdGhlIFdlYiBBbmltYXRpb25zIEFQSS4gRm9yIHVzZSBvbiBicm93c2VycyB3aGljaFxuICogZG8gbm90IHN1cHBvcnQgdGhhdCBBUEkgbmF0aXZlbHksIHlvdSB3aWxsIG5lZWQgdG8gbG9hZCB0aGVcbiAqIFtXZWIgQW5pbWF0aW9ucyBwb2x5ZmlsbF0oaHR0cHM6Ly9naXRodWIuY29tL3dlYi1hbmltYXRpb25zL3dlYi1hbmltYXRpb25zLWpzKS5cbiAqXG4gKiBGb3IgYSBzaW1wbGVyIGNvbXBvbmVudCB0aGF0IGV4aGliaXRzIG9ubHkgYSBzbGlkaW5nIGVmZmVjdCwgYnV0IGRvZXMgbm90XG4gKiByZXF1aXJlIHRoZSBXZWIgQW5pbWF0aW9ucyBBUEksIHNlZSBbYmFzaWMtc2xpZGluZy12aWV3cG9ydF0oLi4vYmFzaWMtc2xpZGluZy12aWV3cG9ydCkuXG4gKlxuICogQGV4dGVuZHMgRWxlbWVudEJhc2VcbiAqIEBtaXhlcyBDb250ZW50QXNJdGVtc1xuICogQG1peGVzIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnRcbiAqIEBtaXhlcyBTZWxlY3Rpb25BbmltYXRpb25cbiAqIEBtaXhlcyBTZWxlY3Rpb25BcmlhQWN0aXZlXG4gKiBAbWl4ZXMgU2luZ2xlU2VsZWN0aW9uXG4gKi9cbmNsYXNzIEFuaW1hdGlvblN0YWdlIGV4dGVuZHMgYmFzZSB7XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKSB7IHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7IH1cbiAgICB0aGlzLnNlbGVjdGlvblJlcXVpcmVkID0gdHJ1ZTtcbiAgfVxuXG4gIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gYFxuICAgICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIDo6c2xvdHRlZCgqKSB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgYDtcbiAgfVxuXG59XG5cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdiYXNpYy1hbmltYXRpb24tc3RhZ2UnLCBBbmltYXRpb25TdGFnZSk7XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL2NyZWF0ZVN5bWJvbCc7XG5pbXBvcnQgRWxlbWVudEJhc2UgZnJvbSAnLi4vLi4vYmFzaWMtZWxlbWVudC1iYXNlL3NyYy9FbGVtZW50QmFzZSc7XG5pbXBvcnQgQ29udGVudEZpcnN0Q2hpbGRUYXJnZXQgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ29udGVudEZpcnN0Q2hpbGRUYXJnZXQnO1xuaW1wb3J0IERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCc7XG5pbXBvcnQgRGlyZWN0aW9uU2VsZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0RpcmVjdGlvblNlbGVjdGlvbic7XG5pbXBvcnQgS2V5Ym9hcmQgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvS2V5Ym9hcmQnO1xuaW1wb3J0IEtleWJvYXJkRGlyZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0tleWJvYXJkRGlyZWN0aW9uJztcbmltcG9ydCBTaW5nbGVTZWxlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2luZ2xlU2VsZWN0aW9uJztcbmltcG9ydCBUYXJnZXRJbkNvbGxlY3RpdmUgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvVGFyZ2V0SW5Db2xsZWN0aXZlJztcbmltcG9ydCBUYXJnZXRTZWxlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvVGFyZ2V0U2VsZWN0aW9uJztcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3QgbW91c2Vkb3duTGlzdGVuZXJTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ21vdXNlZG93bkxpc3RlbmVyJyk7XG5jb25zdCBtb3VzZW1vdmVMaXN0ZW5lclN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnbW91c2Vtb3ZlTGlzdGVuZXInKTtcbmNvbnN0IGxhc3RNb3VzZVhTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2xhc3RNb3VzZVgnKTtcbmNvbnN0IGxhc3RNb3VzZVlTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2xhc3RNb3VzZVknKTtcbmNvbnN0IG1vdXNlVGltZW91dFN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnbW91c2VUaW1lb3V0Jyk7XG5cblxubGV0IGJhc2UgPSBFbGVtZW50QmFzZS5jb21wb3NlKFxuICBDb250ZW50Rmlyc3RDaGlsZFRhcmdldCxcbiAgRGlyZWN0aW9uU2VsZWN0aW9uLFxuICBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50LFxuICBLZXlib2FyZCxcbiAgS2V5Ym9hcmREaXJlY3Rpb24sXG4gIFNpbmdsZVNlbGVjdGlvbixcbiAgVGFyZ2V0SW5Db2xsZWN0aXZlLFxuICBUYXJnZXRTZWxlY3Rpb25cbik7XG5cbi8qKlxuICogQ29tcG9uZW50IHdoaWNoIGFkZHMgcHJvbWluZW50IGxlZnQgYW5kIHJpZ2h0IGFycm93IGJ1dHRvbnMgdG8gYSB3cmFwcGVkXG4gKiBjaGlsZCBzdWNoIGFzIGEgY2Fyb3VzZWwuXG4gKlxuICogWW91IGNhbiBzZWUgYSBbbGl2ZSBkZW1vXShodHRwOi8vYmFzaWN3ZWJjb21wb25lbnRzLm9yZy9iYXNpYy13ZWItY29tcG9uZW50cy9wYWNrYWdlcy9iYXNpYy1jYXJvdXNlbC9jYXJvdXNlbFdpdGhBcnJvd3MuaHRtbClcbiAqIG9mIHRoaXMgY29tcG9uZW50IGFwcGxpZWQgdG8gYSBjYXJvdXNlbC5cbiAqXG4gKiBDbGlja2luZyB0aGUgbGVmdC9yaWdodCBidXR0b25zIHNlbGVjdHMgdGhlIHByZXZpb3VzL25leHQgaXRlbS5cbiAqXG4gKiBUeXBpY2FsIHVzYWdlOlxuICpcbiAqICAgICA8YmFzaWMtYXJyb3ctc2VsZWN0aW9uPlxuICogICAgICAgPGJhc2ljLWNhcm91c2VsPlxuICogICAgICAgICAuLi4gaW1hZ2VzLCBldGMuIC4uLlxuICogICAgICAgPC9iYXNpYy1jYXJvdXNlbD5cbiAqICAgICA8L2Jhc2ljLWFycm93LXNlbGVjdGlvbj5cbiAqXG4gKiBCeSBkZWZhdWx0LCB0aGUgYXJyb3cgYnV0dG9ucyBhcmUgc2hvd24gb24gZGV2aWNlcyB3aXRoIGEgbW91c2Ugb3IgbW91c2UtbGlrZVxuICogcG9pbnRpbmcgZGV2aWNlLiBUaGV5IGFyZSBub3Qgc2hvd24gb24gYSB0b3VjaC1jYXBhYmxlIGRldmljZSB1bmxlc3MgbW91c2VcbiAqIG1vdmVtZW50IGlzIGRldGVjdGVkLiBUbyBjYXVzZSB0aGUgYnV0dG9ucyB0byBhbHdheXMgYXBwZWFyLCBhcHBseSB0aGVcbiAqICdzaG93QXJyb3dzJyBDU1MgY2xhc3MuXG4gKlxuICogQGV4dGVuZHMgRWxlbWVudEJhc2VcbiAqIEBtaXhlcyBDb250ZW50Rmlyc3RDaGlsZFRhcmdldFxuICogQG1peGVzIERpcmVjdGlvblNlbGVjdGlvblxuICogQG1peGVzIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnRcbiAqIEBtaXhlcyBLZXlib2FyZFxuICogQG1peGVzIEtleWJvYXJkRGlyZWN0aW9uXG4gKiBAbWl4ZXMgU2luZ2xlU2VsZWN0aW9uXG4gKiBAbWl4ZXMgVGFyZ2V0SW5Db2xsZWN0aXZlXG4gKiBAbWl4ZXMgVGFyZ2V0U2VsZWN0aW9uXG4gKi9cbmNsYXNzIEFycm93U2VsZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuJC5idXR0b25MZWZ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgdGhpcy5zZWxlY3RQcmV2aW91cygpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSk7XG4gICAgdGhpcy4kLmJ1dHRvblJpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgdGhpcy5zZWxlY3ROZXh0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9KTtcbiAgICBhc3N1bWVCdXR0b25Gb2N1cyh0aGlzLCB0aGlzLiQuYnV0dG9uTGVmdCk7XG4gICAgYXNzdW1lQnV0dG9uRm9jdXModGhpcywgdGhpcy4kLmJ1dHRvblJpZ2h0KTtcbiAgfVxuXG4gIGdldCBjYW5TZWxlY3ROZXh0KCkge1xuICAgIHJldHVybiBzdXBlci5jYW5TZWxlY3ROZXh0O1xuICB9XG4gIHNldCBjYW5TZWxlY3ROZXh0KGNhblNlbGVjdE5leHQpIHtcbiAgICBpZiAoJ2NhblNlbGVjdE5leHQnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLmNhblNlbGVjdE5leHQgPSBjYW5TZWxlY3ROZXh0OyB9XG4gICAgaWYgKHRoaXMuJCkge1xuICAgICAgdGhpcy4kLmJ1dHRvblJpZ2h0LmRpc2FibGVkID0gIWNhblNlbGVjdE5leHQ7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGNhblNlbGVjdFByZXZpb3VzKCkge1xuICAgIHJldHVybiBzdXBlci5jYW5TZWxlY3RQcmV2aW91cztcbiAgfVxuICBzZXQgY2FuU2VsZWN0UHJldmlvdXMoY2FuU2VsZWN0UHJldmlvdXMpIHtcbiAgICBpZiAoJ2NhblNlbGVjdFByZXZpb3VzJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5jYW5TZWxlY3RQcmV2aW91cyA9IGNhblNlbGVjdFByZXZpb3VzOyB9XG4gICAgaWYgKHRoaXMuJCkge1xuICAgICAgdGhpcy4kLmJ1dHRvbkxlZnQuZGlzYWJsZWQgPSAhY2FuU2VsZWN0UHJldmlvdXM7XG4gICAgfVxuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKSB7IHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7IH1cblxuICAgIGlmICghdGhpcy5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3dBcnJvd3MnKSkge1xuICAgICAgLy8gRGV0ZXJtaW5lIHdoZXRoZXIgd2Ugc2hvdWxkIHNob3cgYXJyb3cgYnV0dG9ucyBvciBub3QuXG4gICAgICBpZiAoZGV2aWNlU3VwcG9ydHNUb3VjaCgpKSB7XG4gICAgICAgIC8vIEEgdG91Y2ggZGV2aWNlIG1pZ2h0IGFsc28gc3VwcG9ydCBhIG1vdXNlLCBidXQgd2UgY2FuJ3Qga25vdyB3aGV0aGVyXG4gICAgICAgIC8vIHRoZXJlJ3MgYWN0dWFsbHkgYSBtb3VzZSB1bnRpbCB3ZSBoZWFyIGZyb20gaXQuXG4gICAgICAgIGxpc3RlbkZvck1vdXNlKHRoaXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVGhlIGRldmljZSBkb2Vzbid0IHN1cHBvcnQgdG91Y2gsIHNvIGFzc3VtZSBpdCBoYXMgYSBtb3VzZS5cbiAgICAgICAgc2hvd0Fycm93cyh0aGlzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXQgZGVmYXVsdHMoKSB7XG4gICAgbGV0IGRlZmF1bHRzID0gc3VwZXIuZGVmYXVsdHMgfHwge307XG4gICAgZGVmYXVsdHMubmF2aWdhdGlvbkF4aXMgPSAnaG9yaXpvbnRhbCc7XG4gICAgcmV0dXJuIGRlZmF1bHRzO1xuICB9XG5cbiAgc2VsZWN0ZWRJdGVtQ2hhbmdlZCgpIHtcbiAgICBpZiAoc3VwZXIuc2VsZWN0ZWRJdGVtQ2hhbmdlZCkgeyBzdXBlci5zZWxlY3RlZEl0ZW1DaGFuZ2VkKCk7IH1cbiAgICAvLyBIQUNLOiBGb3JjZSBhbiB1cGRhdGUgb2YgdGhlIHNldCBvZiBwb3NzaWJsZSBuYXZpZ2F0aW9ucy5cbiAgICB0aGlzLml0ZW1zQ2hhbmdlZCgpO1xuICB9XG5cbiAgLypcbiAgICogVGhlIHRlbXBsYXRlIHVzZXMgdGhlIGNoZXZyb24tbGVmdCBhbmQgY2hldnJvbi1yaWdodCBTVkcgaWNvbnMgZnJvbVxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vUG9seW1lckVsZW1lbnRzL2lyb24taWNvbnMvYmxvYi9tYXN0ZXIvaXJvbi1pY29ucy5odG1sLlxuICAgKi9cbiAgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBgXG4gICAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIH1cblxuICAgICAgI2NvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLXdlYmtpdC1mbGV4OiAxO1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgfVxuXG4gICAgICAjY29udGFpbmVyIDo6c2xvdHRlZCgqKSB7XG4gICAgICAgIC13ZWJraXQtZmxleDogMTtcbiAgICAgICAgZmxleDogMTtcbiAgICAgIH1cblxuICAgICAgLm5hdmlnYXRpb25CdXR0b24ge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgICAgIGZpbGw6IGN1cnJlbnRDb2xvcjtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBvdXRsaW5lOiBub25lOyAvKiBSRVZJRVc6IEFjY2Vzc2liaWxpdHkgc2hvdWxkIGJlIHByb3ZpZGVkIGJ5IG90aGVyIGVsZW1lbnRzLiAqL1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgfVxuXG4gICAgICAubmF2aWdhdGlvbkJ1dHRvbjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgICAgLm5hdmlnYXRpb25CdXR0b246YWN0aXZlOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xuICAgICAgfVxuICAgICAgLm5hdmlnYXRpb25CdXR0b246ZGlzYWJsZWQge1xuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCg6bm90KC5zaG93QXJyb3dzKSkgLm5hdmlnYXRpb25CdXR0b24ge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICB9XG5cbiAgICAgIC5uYXZpZ2F0aW9uQnV0dG9uIC5pY29uIHtcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICB3aWR0aDogNDhweDtcbiAgICAgIH1cblxuICAgICAgLyogT3ZlcmxheSB2YXJpYW50ICovXG4gICAgICA6aG9zdCgub3ZlcmxheSkge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gICAgICA6aG9zdCgub3ZlcmxheSkgLm5hdmlnYXRpb25CdXR0b24ge1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgfVxuICAgICAgOmhvc3QoLm92ZXJsYXkpICNidXR0b25MZWZ0IHtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgIH1cbiAgICAgIDpob3N0KC5vdmVybGF5KSAjYnV0dG9uUmlnaHQge1xuICAgICAgICByaWdodDogMDtcbiAgICAgIH1cbiAgICAgIDpob3N0KC5vdmVybGF5KSAubmF2aWdhdGlvbkJ1dHRvbjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICAgIH1cbiAgICAgIDpob3N0KC5vdmVybGF5KSAubmF2aWdhdGlvbkJ1dHRvbjphY3RpdmU6bm90KDpkaXNhYmxlZCkge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gICAgICB9XG4gICAgICA6aG9zdCgub3ZlcmxheSkgLm5hdmlnYXRpb25CdXR0b246ZGlzYWJsZWQge1xuICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPCEtLVxuICAgICAgQWNjZXNzaWJpbGl0eSBub3RlOiBzaW5jZSB0aGUgbmF2aWdhdGlvbiBvZmZlcmVkIGJ5IHRoZSBhcnJvdyBidXR0b25zIHNob3VsZFxuICAgICAgYmUgcmVkdW5kYW50ICh0aGF0IGlzLCB0aGVyZSBzaG91bGQgYmUgb3RoZXIgd2F5cyBvZiBuYXZpZ2F0aW5nIHRoZSBsaXN0KSxcbiAgICAgIHdlIG1hcmsgdGhlIGJ1dHRvbiBhcyBhcmlhLWhpZGRlbiBzbyB0aGF0IGFzc2lzdGl2ZSBkZXZpY2VzIGlnbm9yZSB0aGVtLlxuICAgICAgLS0+XG4gICAgICA8YnV0dG9uIGlkPVwiYnV0dG9uTGVmdFwiIGNsYXNzPVwibmF2aWdhdGlvbkJ1dHRvblwiIGRpc2FibGVkIHRhYmluZGV4PVwiLTFcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgPHN2ZyBjbGFzcz1cImljb25cIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkIG1lZXRcIj5cbiAgICAgICAgICA8ZyBpZD1cImNoZXZyb24tbGVmdFwiPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0xNS40MSA3LjQxTDE0IDZsLTYgNiA2IDYgMS40MS0xLjQxTDEwLjgzIDEyelwiLz5cbiAgICAgICAgICA8L2c+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8ZGl2IGlkPVwiY29udGFpbmVyXCIgcm9sZT1cIm5vbmVcIj5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIGlkPVwiYnV0dG9uUmlnaHRcIiBjbGFzcz1cIm5hdmlnYXRpb25CdXR0b25cIiBkaXNhYmxlZCB0YWJpbmRleD1cIi0xXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgIDxzdmcgY2xhc3M9XCJpY29uXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBtZWV0XCI+XG4gICAgICAgICAgPGcgaWQ9XCJjaGV2cm9uLXJpZ2h0XCI+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTEwIDZMOC41OSA3LjQxIDEzLjE3IDEybC00LjU4IDQuNTlMMTAgMThsNi02elwiLz5cbiAgICAgICAgICA8L2c+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9idXR0b24+XG4gICAgYDtcbiAgfVxuXG59XG5cblxuLypcbiAqIEJ5IGRlZmF1bHQsIGEgYnV0dG9uIHdpbGwgYWx3YXlzIHRha2UgZm9jdXMgb24gbW91c2Vkb3duLiBGb3IgdGhpcyBjb21wb25lbnQsXG4gKiB3ZSB3YW50IHRvIG92ZXJyaWRlIHRoYXQgYmVoYXZpb3IsIHN1Y2ggdGhhdCBhIG1vdXNlZG93biBvbiBhIGJ1dHRvbiBrZWVwc1xuICogdGhlIGZvY3VzIG9uIHRoZSBvdXRlciBjb21wb25lbnQuXG4gKi9cbmZ1bmN0aW9uIGFzc3VtZUJ1dHRvbkZvY3VzKGVsZW1lbnQsIGJ1dHRvbikge1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZXZlbnQgPT4ge1xuICAgIC8vIEdpdmVuIHRoZSBvdXRlciBlbGVtZW50IGZvY3VzIGlmIGl0IGRvZXNuJ3QgYWxyZWFkeSBoYXZlIGl0LlxuICAgIGxldCBvdXRlcm1vc3QgPSBlbGVtZW50LmNvbGxlY3RpdmUub3V0ZXJtb3N0RWxlbWVudDtcbiAgICBpZiAob3V0ZXJtb3N0KSB7XG4gICAgICBvdXRlcm1vc3QuZm9jdXMoKTtcbiAgICB9XG4gICAgLy8gUHJldmVudCB0aGUgZGVmYXVsdCBmb2N1cy1vbi1tb3VzZWRvd24gYmVoYXZpb3IuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfSk7XG59XG5cblxuZnVuY3Rpb24gZGV2aWNlU3VwcG9ydHNUb3VjaCgpIHtcbiAgcmV0dXJuICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fFxuICAgICAgKHdpbmRvdy5Eb2N1bWVudFRvdWNoICYmIGRvY3VtZW50IGluc3RhbmNlb2Ygd2luZG93LkRvY3VtZW50VG91Y2gpO1xufVxuXG5cbi8vIFdlIHRyeSB0byBkZXRlY3QgdGhlIHByZXNlbmNlIG9mIGEgbW91c2UgYnkgbGlzdGVuaW5nIGZvciBtb3VzZW1vdmUgZXZlbnRzXG4vLyB3aGljaCBhcmUgKm5vdCogdGhlIHJlc3VsdCBvZiBhIG1vdXNlZG93bi4gT24gYSB0b3VjaCBkZXZpY2UsIGEgdGFwIG9uIHRoZVxuLy8gcGFnZSB3aWxsIGdlbmVyYXRlIGEgZmFrZSBtb3VzZW1vdmUsIGZvbGxvd2VkIGJ5IGEgbW91c2Vkb3duLiBXZSBkb24ndCB3YW50XG4vLyB0byByZXNwb25kIHRvIHRob3NlIGZha2UgbW91c2Vtb3ZlIGV2ZW50cy4gVG8gZGlzY3JpbWluYXRlIGJldHdlZW4gZmFrZSBhbmRcbi8vIHJlYWwgbW91c2Vtb3ZlIGV2ZW50cywgd2hlbiB3ZSBnZXQgYSBtb3VzZW1vdmUgZXZlbnQsIHdlIHdhaXQgZm9yIGEgYml0IHRvXG4vLyBzZWUgaWYgdGhlIHNhbWUgbG9jYXRpb24gaXMgcmVwb3J0ZWQgYXMgdGhlIGxvY2F0aW9uIG9mIGEgc3Vic2VxdWVudFxuLy8gbW91c2Vkb3duLlxuZnVuY3Rpb24gbGlzdGVuRm9yTW91c2UoZWxlbWVudCkge1xuXG4gIGVsZW1lbnRbbW91c2Vkb3duTGlzdGVuZXJTeW1ib2xdID0gZXZlbnQgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGBtb3VzZWRvd24gJHtldmVudC5wYWdlWH0sICR7ZXZlbnQucGFnZVl9YCk7XG4gICAgaWYgKGVsZW1lbnRbbW91c2VUaW1lb3V0U3ltYm9sXSkge1xuICAgICAgY2xlYXJUaW1lb3V0KGVsZW1lbnRbbW91c2VUaW1lb3V0U3ltYm9sXSk7XG4gICAgfVxuICAgIGVsZW1lbnRbbGFzdE1vdXNlWFN5bWJvbF0gPSBldmVudC5wYWdlWDtcbiAgICBlbGVtZW50W2xhc3RNb3VzZVlTeW1ib2xdID0gZXZlbnQucGFnZVk7XG4gIH07XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlbGVtZW50W21vdXNlZG93bkxpc3RlbmVyU3ltYm9sXSk7XG5cbiAgZWxlbWVudFttb3VzZW1vdmVMaXN0ZW5lclN5bWJvbF0gPSBldmVudCA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coYHNldHRpbmcgdGltZW91dGApO1xuICAgIC8vIFBvc3Rwb25lIGNoZWNraW5nIHRoZSBtb3VzZW1vdmUgbG9jYXRpb24gdG8gZ2l2ZSB0aGUgbW91c2Vkb3duIGV2ZW50IGFcbiAgICAvLyBjaGFuY2UgdG8gZmlyZS4gVGhlIDI1MCBtcyBkZWxheSBpcyBqdXN0IGd1ZXNzd29yazsgYSBzaG9ydGVyIGRlbGF5XG4gICAgLy8gZG9lc24ndCBzZWVtIHRvIHdvcmsuXG4gICAgZWxlbWVudFttb3VzZVRpbWVvdXRTeW1ib2xdID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhgcG9zdHBvbmVkIG1vdXNlbW92ZSAke2V2ZW50LnBhZ2VYfSwgJHtldmVudC5wYWdlWX1gKTtcbiAgICAgIGlmIChlbGVtZW50W2xhc3RNb3VzZVhTeW1ib2xdICE9IG51bGwgJiYgZXZlbnQucGFnZVggIT09IGVsZW1lbnRbbGFzdE1vdXNlWFN5bWJvbF0gfHxcbiAgICAgICAgICBlbGVtZW50W2xhc3RNb3VzZVlTeW1ib2xdICE9IG51bGwgJiYgZXZlbnQucGFnZVkgIT09IGVsZW1lbnRbbGFzdE1vdXNlWVN5bWJvbF0pIHtcbiAgICAgICAgLy8gbW91c2Vtb3ZlIGV2ZW50IHdhcyBhdCBhIGxvY2F0aW9uIG90aGVyIHRoYW4gdGhlIGxhc3QgbW91c2Vkb3duLFxuICAgICAgICAvLyBhbmQgaGVuY2UgbW9zdCBsaWtlbHkgYSByZWFsIG1vdXNlbW92ZSBldmVudC5cbiAgICAgICAgbW91c2VEZXRlY3RlZChlbGVtZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnRbbGFzdE1vdXNlWFN5bWJvbF0gPSBldmVudC5wYWdlWDtcbiAgICAgICAgZWxlbWVudFtsYXN0TW91c2VZU3ltYm9sXSA9IGV2ZW50LnBhZ2VZO1xuICAgICAgfVxuICAgIH0sIDI1MCk7XG4gIH07XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBlbGVtZW50W21vdXNlbW92ZUxpc3RlbmVyU3ltYm9sXSk7XG59XG5cblxuZnVuY3Rpb24gbW91c2VEZXRlY3RlZChlbGVtZW50KSB7XG4gIC8vIGNvbnNvbGUubG9nKGBtb3VzZSBkZXRlY3RlZGApO1xuICBzaG93QXJyb3dzKGVsZW1lbnQpO1xuXG4gIC8vIFdlIGNhbiBzdG9wIGxpc3RlbmluZyBmb3IgbW91c2UgZXZlbnRzIG5vdy5cbiAgaWYgKGVsZW1lbnRbbW91c2VUaW1lb3V0U3ltYm9sXSkge1xuICAgIGNsZWFyVGltZW91dChlbGVtZW50W21vdXNlVGltZW91dFN5bWJvbF0pO1xuICB9XG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlbGVtZW50W21vdXNlZG93bkxpc3RlbmVyU3ltYm9sXSk7XG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBlbGVtZW50W21vdXNlbW92ZUxpc3RlbmVyU3ltYm9sXSk7XG4gIGVsZW1lbnRbbW91c2Vkb3duTGlzdGVuZXJTeW1ib2xdID0gbnVsbDtcbiAgZWxlbWVudFttb3VzZW1vdmVMaXN0ZW5lclN5bWJvbF0gPSBudWxsO1xufVxuXG5cbmZ1bmN0aW9uIHNob3dBcnJvd3MoZWxlbWVudCkge1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Nob3dBcnJvd3MnKTtcbn1cblxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2Jhc2ljLWFycm93LXNlbGVjdGlvbicsIEFycm93U2VsZWN0aW9uKTtcbmV4cG9ydCBkZWZhdWx0IEFycm93U2VsZWN0aW9uO1xuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9jcmVhdGVTeW1ib2wnO1xuaW1wb3J0IFdyYXBwZWRTdGFuZGFyZEVsZW1lbnQgZnJvbSAnLi4vLi4vYmFzaWMtd3JhcHBlZC1zdGFuZGFyZC1lbGVtZW50L3NyYy9XcmFwcGVkU3RhbmRhcmRFbGVtZW50JztcbmltcG9ydCBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50IGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQnO1xuaW1wb3J0IEdlbmVyaWMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvR2VuZXJpYyc7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IGxpbmVIZWlnaHRTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2xpbmVIZWlnaHQnKTtcbmNvbnN0IG1pbmltdW1Sb3dzU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdtaW5pbXVtUm93cycpO1xuY29uc3QgdmFsdWVUcmFja3NDb250ZW50U3ltYm9sID0gY3JlYXRlU3ltYm9sKCd2YWx1ZVRyYWNrc0NvbnRlbnQnKTtcblxubGV0IGJhc2UgPSBXcmFwcGVkU3RhbmRhcmRFbGVtZW50LndyYXAoJ3RleHRhcmVhJykuY29tcG9zZShcbiAgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCxcbiAgR2VuZXJpY1xuKTtcblxuLyoqXG4gKiBBIHRleHQgYXJlYSB0aGF0IG1ha2VzIGl0c2VsZiBiaWcgZW5vdWdoIHRvIHNob3cgaXRzIGNvbnRlbnQuXG4gKlxuICogW0xpdmUgZGVtb10oaHR0cDovL2Jhc2ljd2ViY29tcG9uZW50cy5vcmcvYmFzaWMtd2ViLWNvbXBvbmVudHMvcGFja2FnZXMvYmFzaWMtYXV0b3NpemUtdGV4dGFyZWEvKVxuICpcbiAqIFRoaXMgdGV4dCBpbnB1dCBjb21wb25lbnQgaXMgdXNlZnVsIGluIHNpdHVhdGlvbnMgd2hlcmUgeW91IHdhbnQgdG8gYXNrIHRoZVxuICogdXNlciB0byBlbnRlciBhcyBtdWNoIHRleHQgYXMgdGhleSB3YW50LCBidXQgZG9uJ3Qgd2FudCB0byB0YWtlIHVwIGEgbG90IG9mXG4gKiByb29tIG9uIHRoZSBwYWdlLlxuICpcbiAqIFRoZSBjb21wb25lbnQgd29ya3MgYnkgY29weWluZyB0aGUgdGV4dCB0byBhbiBpbnZpc2libGUgZWxlbWVudCB3aGljaCB3aWxsXG4gKiBhdXRvbWF0aWNhbGx5IGdyb3cgaW4gc2l6ZTsgdGhlIGV4cGFuZGluZyBjb3B5IHdpbGwgZXhwYW5kIHRoZSBjb250YWluZXIsXG4gKiB3aGljaCBpbiB0dXJuIHdpbGwgdmVydGljYWxseSBzdHJldGNoIHRoZSB0ZXh0IGFyZWEgdG8gbWF0Y2guXG4gKlxuICogVGhpcyBjb21wb25lbnQgZ2VuZXJhbGx5IGV4cG9zZXMgYWxsIHRoZSBzYW1lIGF0dHJpYnV0ZXMvcHJvcGVydGllcyBhcyBhXG4gKiBzdGFuZGFyZCBIVE1MIGA8dGV4dGFyZWE+YC5cbiAqXG4gKiBAbWl4ZXMgR2VuZXJpY1xuICogQG1peGVzIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnRcbiAqL1xuY2xhc3MgQXV0b3NpemVUZXh0YXJlYSBleHRlbmRzIGJhc2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmlubmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZXZlbnQgPT4ge1xuICAgICAgdmFsdWVDaGFuZ2VkKHRoaXMpO1xuICAgIH0pO1xuICAgIHRoaXMuaW5uZXIuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBldmVudCA9PiB7XG4gICAgICBrZXlwcmVzcyh0aGlzLCBldmVudCk7XG4gICAgfSk7XG5cbiAgICAvLyBTZXQgZGVmYXVsdHMuXG4gICAgaWYgKHR5cGVvZiB0aGlzLm1pbmltdW1Sb3dzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5taW5pbXVtUm93cyA9IHRoaXMuZGVmYXVsdHMubWluaW11bVJvd3M7XG4gICAgfVxuXG4gICAgLy8gQSBzdGFuZGFyZCB0ZXh0YXJlYSBoYXMgaXRzIHZhbHVlIHRyYWNrIGl0cyB0ZXh0Q29udGVudCBieSBkZWZhdWx0LlxuICAgIC8vIFRoYXQgaXMsIGNoYW5nZXMgdG8gdGV4dENvbnRlbnQgdXBkYXRlIHRoZSB2YWx1ZS4gSG93ZXZlciwgaWYgYW4gYXR0ZW1wdFxuICAgIC8vIGlzIG1hZGUgdG8gY2hhbmdlIHRoZSB2YWx1ZSBkaXJlY3RseSwgdGhpcyBicmVha3MgdGhlIGF1dG9tYXRpYyB0cmFja2luZy5cbiAgICAvLyBGcm9tIHRoYXQgcG9pbnQgb24sIGNoYW5nZXMgdG8gdGV4dENvbnRlbnQgZG8gKm5vdCogdXBkYXRlIHRoZSB2YWx1ZS5cbiAgICB0aGlzW3ZhbHVlVHJhY2tzQ29udGVudFN5bWJvbF0gPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2l6ZSB0aGUgZWxlbWVudCBzdWNoIHRoYXQgdGhlIHRleHRhcmVhIGNhbiBleGFjdGx5IGNvbnRhaW4gaXRzIGNvbnRlbnQuXG4gICAqIEJ5IGRlZmF1bHQsIHRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbmV2ZXIgdGhlIHRleHQgY29udGVudCBjaGFuZ2VzLlxuICAgKi9cbiAgYXV0b1NpemUoKSB7XG4gICAgLy8gSWYgd2UgaGFkIHNwZWN1bGF0aXZlbHkgYWRkZWQgYW4gZXh0cmEgbGluZSBiZWNhdXNlIG9mIGFuIEVudGVyIGtleXByZXNzLFxuICAgIC8vIHdlIGNhbiBub3cgaGlkZSB0aGUgZXh0cmEgbGluZS5cbiAgICB0aGlzLiQuZXh0cmFMaW5lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAvLyBXZSByZXNpemUgYnkgY29weWluZyB0aGUgdGV4dGFyZWEgY29udGVudHMgdG8gdGhlIGVsZW1lbnQgaXRzZWxmOyB0aGVcbiAgICAvLyB0ZXh0IHdpbGwgdGhlbiBhcHBlYXIgKHZpYSA8c2xvdD4pIGluc2lkZSB0aGUgaW52aXNpYmxlIGRpdi4gSWZcbiAgICAvLyB3ZSd2ZSBzZXQgdGhpbmdzIHVwIGNvcnJlY3RseSwgdGhpcyBuZXcgY29udGVudCBzaG91bGQgdGFrZSB1cCB0aGUgc2FtZVxuICAgIC8vIGFtb3VudCBvZiByb29tIGFzIHRoZSBzYW1lIHRleHQgaW4gdGhlIHRleHRhcmVhLiBVcGRhdGluZyB0aGUgZWxlbWVudCdzXG4gICAgLy8gY29udGVudCBhZGp1c3RzIHRoZSBlbGVtZW50J3Mgc2l6ZSwgd2hpY2ggaW4gdHVybiB3aWxsIG1ha2UgdGhlIHRleHRhcmVhXG4gICAgLy8gdGhlIGNvcnJlY3QgaGVpZ2h0LlxuICAgIHRoaXMuJC50ZXh0Q29weS50ZXh0Q29udGVudCA9IHRoaXMudmFsdWU7XG4gIH1cblxuICAvLyBOb3JtYWxseSB0aGUgdmFsdWUgb2YgdGhlIGVsZW1lbnQgaXMgc2V0IGFuZCByZWFkIHRocm91Z2ggaXRzIHZhbHVlXG4gIC8vIGF0dHJpYnV0ZS4gQXMgYSBjb252ZW5pZW5jZSwgYW5kIHRvIG1pcnJvciBzdGFuZGFyZCB0ZXh0YXJlYSBiZWhhdmlvciwgaXRcbiAgLy8gaXMgcG9zc2libGUgdG8gc2V0IHRoZSBjb250ZW50IG9mIHRoZSB0ZXh0YXJlYSBieSBpbmNsdWRpbmcgdGV4dCBiZXR3ZWVuXG4gIC8vIHRoZSBvcGVuaW5nIGFuZCBjbG9zaW5nIHRhZy4gVGhpcyB3b3JrcyBvbmx5IGluIG9uZSBkaXJlY3Rpb246IHNldHRpbmcgdGhlXG4gIC8vIHRhZyBjb250ZW50IHVwZGF0ZXMgdGhlIHRleHRhcmVhLCBidXQgdXNlciBlZGl0cyBpbiB0aGUgdGV4dGFyZWEgYXJlIG5vdFxuICAvLyByZWZsZWN0ZWQgaW4gdGhlIHRhZyBjb250ZW50LiBXZSBjYXB0dXJlIHRoZSB2YWx1ZSBvZiB0aGUgaW5pdGlhbCB0ZXh0XG4gIC8vIGNvbnRlbnQgaW4gb3JkZXIgdG8gc2V0IHRoZSB2YWx1ZSBwcm9wZXJ0eSBkdXJpbmcgdGhlIGNyZWF0ZSBldmVudC5cbiAgLy8gVE9ETzogTm9ybWFsaXplIGluZGVudGF0aW9uIGluIHRoZSB0ZXh0IGNvbnRlbnQuIFVzZXJzIHdpbGwgb2Z0ZW4gd2FudCB0b1xuICAvLyBpbmRlbnQgdGhlIG1hcmt1cCBzbyB0aGF0IGl0IGxvb2tzIHByZXR0eS4gV2Ugc2hvdWxkIGRldGVjdCB0aGUgaW5kZW50YXRpb25cbiAgLy8gbGV2ZWwgYW5kIHJlbW92ZSBhbnkgaW5kZW50YXRpb24gd2hpdGVzcGFjZVxuICAvLyBUT0RPOiBDb25zaWRlciB1c2luZyBjb250ZW50IGlubmVySFRNTCByYXRoZXIgdGhhbiBwbGFpbiB0ZXh0LiBUaGUgbmF0aXZlXG4gIC8vIHRleHRhcmVhIGVsZW1lbnQgd2lsbCBpbmNsdWRlIEhUTUwsIG5vdCBqdXN0IHRoZSBzdHJpcHBlZCB0ZXh0LCBhcyBpbml0aWFsXG4gIC8vIHZhbHVlIHByb3BlcnR5IHRleHQuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGlmIChzdXBlci5jb25uZWN0ZWRDYWxsYmFjaykgeyBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpOyB9XG4gICAgaW5pdGlhbGl6ZVdoZW5SZW5kZXJlZCh0aGlzKTtcbiAgfVxuXG4gIGNvbnRlbnRDaGFuZ2VkKCkge1xuICAgIGlmIChzdXBlci5jb250ZW50Q2hhbmdlZCkgeyBzdXBlci5jb250ZW50Q2hhbmdlZCgpOyB9XG4gICAgaWYgKHRoaXNbdmFsdWVUcmFja3NDb250ZW50U3ltYm9sXSkge1xuICAgICAgbGV0IHRleHQgPSBnZXRUZXh0Q29udGVudCh0aGlzKTtcbiAgICAgIHRoaXMuaW5uZXIudmFsdWUgPSB1bmVzY2FwZUh0bWwodGV4dCk7XG4gICAgICB2YWx1ZUNoYW5nZWQodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGRlZmF1bHRzKCkge1xuICAgIGxldCBkZWZhdWx0cyA9IHN1cGVyLmRlZmF1bHRzIHx8IHt9O1xuICAgIGRlZmF1bHRzLm1pbmltdW1Sb3dzID0gMTtcbiAgICByZXR1cm4gZGVmYXVsdHM7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB0aGUgbWluaW11bSBudW1iZXIgb2Ygcm93cyBzaG93bi4gVGhpcyBpcyBzaW1pbGFyIHRvIHRoZSByb3dzXG4gICAqIGF0dHJpYnV0ZSBvbiBhIHN0YW5kYXJkIHRleHRhcmVhLCBidXQgYmVjYXVzZSB0aGlzIGVsZW1lbnQgY2FuIGdyb3csIGlzXG4gICAqIGV4cHJlc3NlZCBhcyBhIG1pbmltdW0gcmF0aGVyIHRoYW4gYSBmaXhlZCBudW1iZXIuXG4gICAqXG4gICAqIEJ5IGRlZmF1bHQsIHRoaXMgcHJvcGVydHkgaXMgMSwgc28gd2hlbiBlbXB0eSwgdGhlIHRleHQgYXJlYSB3aWxsIGJlIGFcbiAgICogc2luZ2xlIGxpbmUgdGFsbC4gVGhhdCdzIGVmZmljaWVudCBpbiB0ZXJtcyBvZiB0aGUgc3BhY2UgaXQgY29uc3VtZXMsIGJ1dFxuICAgKiB1bnRpbCB0aGUgdXNlciBpbnRlcmFjdHMgd2l0aCB0aGUgZWxlbWVudCwgdGhleSBtYXkgbm90IHJlYWxpemUgdGhleSBjYW5cbiAgICogZW50ZXIgbXVsdGlwbGUgbGluZXMgb2YgdGV4dC4gU2V0dGluZyB0aGUgcHJvcGVydHkgdG8gYSB2YWx1ZSBoaWdoZXIgdGhhbiAxXG4gICAqIHdpbGwgc2lnbmFsIHRvIHRoZSB1c2VyIHRoYXQgdGhleSBjYW4gZW50ZXIgbXVsdGlwbGUgbGluZXMgb2YgYSB0ZXh0LlxuICAgKlxuICAgKiBCeSBzZXR0aW5nIHRoaXMgcHJvcGVydHksIHlvdSBjYW4gYWxzbyBjb21tdW5pY2F0ZSB0byB0aGUgdXNlciBzb21lIHNlbnNlXG4gICAqIG9mIGhvdyBtdWNoIHRleHQgeW91J3JlIGV4cGVjdGluZyB0aGVtIHRvIHByb3ZpZGUuIEZvciBleGFtcGxlLCBvbiBhXG4gICAqIGZlZWRiYWNrIGZvcm0sIGFza2luZyB0aGUgdXNlciB0byBlbnRlciB0aGVpciBmZWVkYmFjayBpbiBhIHNpbmdsZS1saW5lXG4gICAqIHRleHQgYm94IGltcGxpZXMgeW91IGRvbid0IHJlYWxseSB3YW50IHRoZW0gdG8gZW50ZXIgbXVjaCB0ZXh0IOKAlCBldmVuIGlmXG4gICAqIHRoZSB0ZXh0IGJveCB3aWxsIGdyb3cgd2hlbiB0aGV5IHR5cGUuIEJ5IHNldHRpbmcgdGhpcyB0byBhIHZhbHVlIGxpa2UsXG4gICAqIHNheSwgMTAgcm93cywgeW91IGNhbiBzaWduYWwgdGhhdCB5b3UncmUgZnVsbHkgZXhwZWN0aW5nIHRoZW0gdG8gZW50ZXIgbW9yZVxuICAgKiB0ZXh0LlxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKiBAZGVmYXVsdCAxXG4gICAqL1xuICBnZXQgbWluaW11bVJvd3MoKSB7XG4gICAgcmV0dXJuIHRoaXNbbWluaW11bVJvd3NTeW1ib2xdO1xuICB9XG4gIHNldCBtaW5pbXVtUm93cyh2YWx1ZSkge1xuICAgIHRoaXNbbWluaW11bVJvd3NTeW1ib2xdID0gcGFyc2VJbnQodmFsdWUpO1xuICAgIGlmICh0aGlzW2xpbmVIZWlnaHRTeW1ib2xdKSB7XG4gICAgICBzZXRNaW5pbXVtSGVpZ2h0KHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gYFxuICAgICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgI2F1dG9TaXplQ29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICAvKlxuICAgICAgICogRW5zdXJlIGJvdGggdGhlIHRleHQgYXJlYSBhbmQgY29weSBlbmQgdXAgd2l0aCB0aGUgZWxlbWVudCdzIG93biBmb250XG4gICAgICAgKiBtZXRyaWNzLCBzbyB0aGF0IHRleHQgd2lsbCBsYXkgb3V0IHRoZSBzYW1lIGluIGJvdGggb2YgdGhlbS5cbiAgICAgICAqL1xuICAgICAgI2lubmVyLFxuICAgICAgI2NvcHlDb250YWluZXIge1xuICAgICAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgIGZvbnQtc3R5bGU6IGluaGVyaXQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuXG4gICAgICAjaW5uZXIge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmVzaXplOiBub25lO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBAYXBwbHkoLS10ZXh0YXJlYSk7XG4gICAgICB9XG5cbiAgICAgICNjb3B5Q29udGFpbmVyIHtcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7IC8qIFNvIGxpbmVzIHdyYXAgKi9cbiAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkOyAvKiBTbyB3ZSBicmVhayBhdCB3b3JkIGJvdW5kYXJpZXMgd2hlbiBwb3NzaWJsZSAqL1xuICAgICAgfVxuXG4gICAgICAjY29udGVudENvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8IS0tXG4gICAgICBUaGUgaW52aXNpYmxlIGNvcHlDb250YWluZXIgY29udGFpbnMgYW4gZXh0cmFTcGFjZSBlbGVtZW50IHRoYXQgZW5zdXJlcyB0aGF0LFxuICAgICAgZXZlbiBpZiB0aGUgbGFzdCBsaW5lIG9mIHRoZSB0ZXh0YXJlYSBpcyBibGFuaywgdGhlcmUgd2lsbCBiZSBzb21ldGhpbmcgaW4gdGhlXG4gICAgICBsaW5lIHRoYXQgZm9yY2VzIHRoZSB0ZXh0IGNvcHkgdG8gZ3JvdyBieSBhIGxpbmUuIFRoaXMgZXh0cmEgc3BhY2UgaXMgYSB0aGluXG4gICAgICBzcGFjZSwgdG8gcmVkdWNlIHRoZSBhbW91bnQgYnkgd2hpY2ggdGhlIHRleHQgY29weSB3aWxsIHByZW1hdHVyZWx5IGdyb3cuXG5cbiAgICAgIFRoZSBjb3B5Q29udGFpbmVyIGFsc28gY29udGFpbnMgYW4gZXh0cmFMaW5lIGVsZW1lbnQgZXhpc3RzIHRvIGRlYWwgd2l0aCB0aGVcbiAgICAgIGZhY3QgdGhhdCwgaWYgdGhlIHVzZXIgcHJlc3NlcyB0aGUgRW50ZXIga2V5IGRvd24sIHRoZSB0ZXh0YXJlYSdzIGNvbnRlbnQgd2lsbFxuICAgICAgbW92ZSBiZWZvcmUgdGhlIGNvbXBsZXRlIHRleHQgaXMgYXZhaWxhYmxlLiBTZWUgbm90ZXMgYXQgX2tleXByZXNzLlxuXG4gICAgICBMYXN0bHksIHdlIHB1dCB0aGUgSFRNTCBjb250ZW50IGVsZW1lbnQgaW50byBhIHNlcGFyYXRlIGNvbnRhaW5lciBzbyB3ZSBjYW5cbiAgICAgIGhpZGUgaXQuIFdlIG5lZWQgdG8gaGF2ZSBhIGNvbnRlbnQgZWxlbWVudCBzb21ld2hlcmUgaW4gdGhlIHRlbXBsYXRlIHRvXG4gICAgICBjb252aW5jZSBQb2x5bWVyIHRoYXQgd2UgY2FyZSBhYm91dCB0aGUgY29udGVudCBpbiB0aGUgU2hhZHkgRE9NIGNhc2UgLS1cbiAgICAgIHdpdGhvdXQgdGhhdCBjb250ZW50IGVsZW1lbnQsIFNoYWR5IERPTSB3aWxsIGNvbmNsdWRlIHRoZSBlbGVtZW50IGRvZXNuJ3RcbiAgICAgIG5lZWQgaXRzIGxpZ2h0IERPTSBjb250ZW50LCBhbmQgd2lsbCB0aHJvdyBpdCBhd2F5LlxuICAgICAgLS0+XG4gICAgICA8ZGl2IGlkPVwiYXV0b1NpemVDb250YWluZXJcIj5cbiAgICAgICAgPHRleHRhcmVhIGlkPVwiaW5uZXJcIj48L3RleHRhcmVhPlxuICAgICAgICA8ZGl2IGlkPVwiY29weUNvbnRhaW5lclwiPjxzcGFuIGlkPVwidGV4dENvcHlcIj48L3NwYW4+PHNwYW4gaWQ9XCJleHRyYVNwYWNlXCI+JnRoaW5zcDs8L3NwYW4+PGRpdiBpZD1cImV4dHJhTGluZVwiPiZuYnNwOzwvZGl2PjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGlkPVwiY29udGVudENvbnRhaW5lclwiPlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZXh0IGN1cnJlbnRseSBzaG93biBpbiB0aGUgdGV4dGFyZWEuXG4gICAqXG4gICAqIE5vdGUgdGhhdCB0aGUgdGV4dCBzaG93biBpbiB0aGUgdGV4dGFyZWEgY2FuIGFsc28gYmUgdXBkYXRlZCBieSBjaGFuZ2luZ1xuICAgKiB0aGUgZWxlbWVudCdzIGlubmVySFRNTC90ZXh0Q29udGVudC4gSG93ZXZlciwgaWYgdGhlIHZhbHVlIHByb3BlcnR5IGlzXG4gICAqIGV4cGxpY2l0bHkgc2V0LCB0aGF0IHdpbGwgb3ZlcnJpZGUgdGhlIGlubmVySFRNTC90ZXh0Q29udGVudC5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbm5lci52YWx1ZTtcbiAgfVxuICBzZXQgdmFsdWUodGV4dCkge1xuICAgIC8vIEV4cGxpY2l0bHkgc2V0dGluZyB2YWx1ZSBicmVha3MgYXV0b21hdGljIHVwZGF0ZSBvZiB2YWx1ZSBmcm9tIGNvbnRlbnQuXG4gICAgdGhpc1t2YWx1ZVRyYWNrc0NvbnRlbnRTeW1ib2xdID0gZmFsc2U7XG4gICAgdGhpcy5pbm5lci52YWx1ZSA9IHRleHQ7XG4gICAgdmFsdWVDaGFuZ2VkKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gdGhlIHVzZXIgdHlwZXMgaW4gdGhlIHRleHRhcmVhLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQXV0b3NpemVUZXh0YXJlYVxuICAgKiBAZXZlbnQgY2hhbmdlXG4gICAqL1xufVxuXG5cbmZ1bmN0aW9uIGdldFRleHRDb250ZW50KGVsZW1lbnQpIHtcbiAgbGV0IHRleHQgPSBlbGVtZW50LmRpc3RyaWJ1dGVkVGV4dENvbnRlbnQ7XG5cbiAgLy8gVHJpbSB0aGUgdGV4dC5cbiAgLy8gVGhpcyBpcyBub24tc3RhbmRhcmQgdGV4dGFyZWEgYmVoYXZpb3IuIEEgc3RhbmRhcmQgdGV4dGFyZWEgd2lsbCB0cmltIHRoZVxuICAvLyBmaXJzdCBjaGFyYWN0ZXIgaWYgaXQncyBhIG5ld2xpbmUsIGJ1dCB0aGF0J3MgaXQuIEhvd2V2ZXIsIGF1dGhvcnMgd2lsbFxuICAvLyB3YW50IHRvIGJlIGFibGUgdG8gcGxhY2UgdGhlIG9wZW5pbmcgYW5kIGNsb3NpbmcgdGFncyBvbiB0aGVpciBvd24gbGluZXMuXG4gIC8vIFNvIGl0IHNlZW1zIG1vcmUgaGVscGZ1bCB0byB0cmltIHdoaXRlc3BhY2Ugb24gZWl0aGVyIHNpZGUuXG4gIHRleHQgPSB0ZXh0LnRyaW0oKTtcblxuICByZXR1cm4gdGV4dDtcbn1cblxuXG4vLyBTZXQgdXAgb25jZSB0aGlzIGNvbXBvbmVudCBoYXMgYmVlbiByZW5kZXJlZC5cbi8vXG4vLyBPbiBDaHJvbWUgKGFzIG9mIDEwLzIzLzE0KSBhdCBsZWFzdCwgaWYgYW4gaW5zdGFuY2UgaWYgdGhpcyBjb21wb25lbnQgaXNcbi8vIGFkZGVkIGR5bmFtaWNhbGx5LCBpdHMgYXR0YWNoZWQgaGFuZGxlciBtYXkgdHJpZ2dlciBiZWZvcmUgaXRzIGJlZW5cbi8vIHJlbmRlcmVkLiBUaGF0IHdvdWxkIGNhdXNlIG91ciBsYXlvdXQgY2FsY3VsYXRpb25zIHRvIGJlIGluY29ycmVjdC5cbi8vXG5mdW5jdGlvbiBpbml0aWFsaXplV2hlblJlbmRlcmVkKGVsZW1lbnQpIHtcblxuICAvLyBJZiB0aGUgY29tcG9uZW50IGhhcyBiZWVuIHJlbmRlcmVkLCBvdXIgaGVpZ2h0IHNob3VsZCBiZSBub256ZXJvLlxuICBpZiAoZWxlbWVudC5jbGllbnRIZWlnaHQgPT09IDApIHtcbiAgICAvLyBOb3QgcmVuZGVyZWQgeWV0OiB3YWl0IGEgYml0IGJlZm9yZSB0cnlpbmcgYWdhaW4uXG4gICAgc2V0VGltZW91dCgoKSA9PiBpbml0aWFsaXplV2hlblJlbmRlcmVkKGVsZW1lbnQpLCAxMCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gSWYgd2UgcmVhY2ggdGhpcyBwb2ludCwgdGhlIGNvbXBvbmVudCdzIGVsZW1lbnRzIHNob3VsZCBieSBzdHlsZWQuXG5cbiAgLy8gRm9yIGF1dG8tc2l6aW5nIHRvIHdvcmssIHdlIG5lZWQgdGhlIHRleHQgY29weSB0byBoYXZlIHRoZSBzYW1lIGJvcmRlcixcbiAgLy8gcGFkZGluZywgYW5kIG90aGVyIHJlbGV2YW50IGNoYXJhY3RlcmlzdGljcyBhcyB0aGUgb3JpZ2luYWwgdGV4dCBhcmVhLlxuICAvLyBTaW5jZSB0aG9zZSBhc3BlY3RzIGFyZSBhZmZlY3RlZCBieSBDU1MsIHdlIGhhdmUgdG8gd2FpdCB1bnRpbCB0aGVcbiAgLy8gZWxlbWVudCBpcyBpbiB0aGUgZG9jdW1lbnQgYmVmb3JlIHdlIGNhbiB1cGRhdGUgdGhlIHRleHQgY29weS5cbiAgbGV0IHRleHRCb3hTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudC5pbm5lcik7XG4gIGxldCBjb3B5Q29udGFpbmVyU3R5bGUgPSBlbGVtZW50LiQuY29weUNvbnRhaW5lci5zdHlsZTtcbiAgY29weUNvbnRhaW5lclN0eWxlLmJvcmRlckJvdHRvbVN0eWxlICA9IHRleHRCb3hTdHlsZS5ib3JkZXJCb3R0b21TdHlsZTtcbiAgY29weUNvbnRhaW5lclN0eWxlLmJvcmRlckJvdHRvbVdpZHRoICA9IHRleHRCb3hTdHlsZS5ib3JkZXJCb3R0b21XaWR0aDtcbiAgY29weUNvbnRhaW5lclN0eWxlLmJvcmRlckxlZnRTdHlsZSAgICA9IHRleHRCb3hTdHlsZS5ib3JkZXJMZWZ0U3R5bGU7XG4gIGNvcHlDb250YWluZXJTdHlsZS5ib3JkZXJMZWZ0V2lkdGggICAgPSB0ZXh0Qm94U3R5bGUuYm9yZGVyTGVmdFdpZHRoO1xuICBjb3B5Q29udGFpbmVyU3R5bGUuYm9yZGVyUmlnaHRTdHlsZSAgID0gdGV4dEJveFN0eWxlLmJvcmRlclJpZ2h0U3R5bGU7XG4gIGNvcHlDb250YWluZXJTdHlsZS5ib3JkZXJSaWdodFdpZHRoICAgPSB0ZXh0Qm94U3R5bGUuYm9yZGVyUmlnaHRXaWR0aDtcbiAgY29weUNvbnRhaW5lclN0eWxlLmJvcmRlclRvcFN0eWxlICAgICA9IHRleHRCb3hTdHlsZS5ib3JkZXJUb3BTdHlsZTtcbiAgY29weUNvbnRhaW5lclN0eWxlLmJvcmRlclRvcFdpZHRoICAgICA9IHRleHRCb3hTdHlsZS5ib3JkZXJUb3BXaWR0aDtcbiAgY29weUNvbnRhaW5lclN0eWxlLnBhZGRpbmdCb3R0b20gICAgICA9IHRleHRCb3hTdHlsZS5wYWRkaW5nQm90dG9tO1xuICBjb3B5Q29udGFpbmVyU3R5bGUucGFkZGluZ0xlZnQgICAgICAgID0gdGV4dEJveFN0eWxlLnBhZGRpbmdMZWZ0O1xuICBjb3B5Q29udGFpbmVyU3R5bGUucGFkZGluZ1JpZ2h0ICAgICAgID0gdGV4dEJveFN0eWxlLnBhZGRpbmdSaWdodDtcbiAgY29weUNvbnRhaW5lclN0eWxlLnBhZGRpbmdUb3AgICAgICAgICA9IHRleHRCb3hTdHlsZS5wYWRkaW5nVG9wO1xuXG4gIC8vIFVzZSB0aGUgZXh0cmFMaW5lIG1lbWJlciB0byBnYXVnZSB0aGUgZXhwZWN0ZWQgaGVpZ2h0IG9mIGEgc2luZ2xlIGxpbmUgb2ZcbiAgLy8gdGV4dC4gV2UgY2FuJ3QgdXNlIGxpbmVIZWlnaHQsIGJlY2F1c2UgdGhhdCBjYW4gYmUgcmVwb3J0ZWQgYXMgXCJub3JtYWxcIixcbiAgLy8gYW5kIHdlIHdhbnQgdG8ga25vdyB0aGUgYWN0dWFsIHBpeGVsIGhlaWdodC5cbiAgZWxlbWVudC4kLmV4dHJhTGluZS5zdHlsZS5kaXNwbGF5ID0gJ2luaGVyaXQnO1xuICBlbGVtZW50W2xpbmVIZWlnaHRTeW1ib2xdID0gZWxlbWVudC4kLmV4dHJhTGluZS5jbGllbnRIZWlnaHQ7XG5cbiAgLy8gTm93IHRoYXQgd2Uga25vdyB0aGUgbGluZSBoZWlnaHQsIHdlIGNhbiBoaWRlIHRoZSBleHRyYSBsaW5lLlxuICBlbGVtZW50LiQuZXh0cmFMaW5lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgLy8gVXNlIHRoZSBsaW5lIGhlaWdodCBpbiBjb25qdW5jdGlvbiB3aXRoIG1pbmltdW1Sb3dzIHRvIGVzdGFibGlzaCB0aGVcbiAgLy8gb3ZlcmFsbCBtaW5pbXVtIGhlaWdodCBvZiB0aGUgY29tcG9uZW50LlxuICBzZXRNaW5pbXVtSGVpZ2h0KGVsZW1lbnQpO1xufVxuXG5cbi8vIFNwZWN1bGF0aXZlbHkgYWRkIGEgbGluZSB0byBvdXIgY29weSBvZiB0aGUgdGV4dC4gV2UncmUgbm90IHN1cmUgd2hhdCB0aGVcbi8vIGV4YWN0IGVmZmVjdCBvZiB0eXBpbmcgdGhpcyBjaGFyYWN0ZXIgd2lsbCBiZSwgYW5kIGF0IHRoaXMgcG9pbnQgaXQncyBub3Rcbi8vIHJlZmxlY3RlZCB5ZXQgaW4gdGhlIHRleHRhcmVhJ3MgY29udGVudC4gV2Ugc3BlY3VsYXRlIHRoYXQgaXQgd2lsbCBhZGQgYVxuLy8gbGluZSB0byB0aGUgdGV4dCBhbmQgc2l6ZSBhY2NvcmRpbmdseS4gKE9uZSBvdGhlciBwb3NzaWJpbGl0eSBpcyB0aGF0IHRoZVxuLy8gdXNlcidzIHJlcGxhY2luZyBhIHNlbGVjdGVkIGNodW5rIG9mIHRleHQgd2l0aCBhIG5ld2xpbmUuKSBJbiBhbnkgZXZlbnQsXG4vLyBvbmNlIHdlIGdldCB0aGUga2V5dXAgb3IgY2hhbmdlIGV2ZW50LCB3ZSdsbCBtYWtlIGFueSBmaW5hbCBhZGp1c3RtZW50cy5cbi8vXG4vLyBUT0RPOiBJZiB0aGUgdXNlciBob2xkcyBkb3duIHRoZSBFbnRlciBrZXksIHdlIGNhbiBnZXQgYSBidW5jaCBvZiBrZXlwcmVzc1xuLy8gZXZlbnRzIGJlZm9yZSB3ZSBnZXQga2V5dXAuIFRoaXMgY2F1c2VzIGZsaWNrZXIuIEluc3RlYWQgb2Ygc3VwcG9ydGluZyBvbmx5XG4vLyBhIHNpbmdsZSBleHRyYSBzcGVjdWxhdGl2ZSBsaW5lLCB3ZSBzaG91bGQgZ3JvdyB0aGUgc3BlY3VsYXRpdmUgZWxlbWVudCB0b1xuLy8gY29udGFpbiB0aGUgbnVtYmVyIG9mIEVudGVyIGtleXByZXNzZXMgd2UndmUgcmVjZWl2ZWQuXG5mdW5jdGlvbiBrZXlwcmVzcyhlbGVtZW50LCBldmVudCkge1xuICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMgLyogRW50ZXIgKi8pIHtcbiAgICBlbGVtZW50LiQuZXh0cmFMaW5lLnN0eWxlLmRpc3BsYXkgPSAnaW5oZXJpdCc7XG4gIH1cbn1cblxuXG4vLyBTZXR0aW5nIHRoZSBtaW5pbXVtUm93cyBhdHRyaWJ1dGUgdHJhbnNsYXRlcyBpbnRvIHNldHRpbmcgdGhlIG1pbmltdW1cbi8vIGhlaWdodCBvbiB0aGUgdGV4dCBjb3B5IGNvbnRhaW5lci5cbmZ1bmN0aW9uIHNldE1pbmltdW1IZWlnaHQoZWxlbWVudCkge1xuICBsZXQgY29weUNvbnRhaW5lciA9IGVsZW1lbnQuJC5jb3B5Q29udGFpbmVyO1xuICBsZXQgb3V0ZXJIZWlnaHQgPSBjb3B5Q29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgbGV0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShjb3B5Q29udGFpbmVyKTtcbiAgbGV0IHBhZGRpbmdUb3AgPSBwYXJzZUZsb2F0KHN0eWxlLnBhZGRpbmdUb3ApO1xuICBsZXQgcGFkZGluZ0JvdHRvbSA9IHBhcnNlRmxvYXQoc3R5bGUucGFkZGluZ0JvdHRvbSk7XG4gIGxldCBpbm5lckhlaWdodCA9IGNvcHlDb250YWluZXIuY2xpZW50SGVpZ2h0IC0gcGFkZGluZ1RvcCAtIHBhZGRpbmdCb3R0b207XG4gIGxldCBib3JkZXJzUGx1c1BhZGRpbmcgPSBvdXRlckhlaWdodCAtIGlubmVySGVpZ2h0O1xuICBsZXQgbWluSGVpZ2h0ID0gKGVsZW1lbnQubWluaW11bVJvd3MgKiBlbGVtZW50W2xpbmVIZWlnaHRTeW1ib2xdKSArIGJvcmRlcnNQbHVzUGFkZGluZztcbiAgbWluSGVpZ2h0ID0gTWF0aC5jZWlsKG1pbkhlaWdodCk7XG4gIGNvcHlDb250YWluZXIuc3R5bGUubWluSGVpZ2h0ID0gbWluSGVpZ2h0ICsgJ3B4Jztcbn1cblxuXG5mdW5jdGlvbiB1bmVzY2FwZUh0bWwoaHRtbCkge1xuICByZXR1cm4gaHRtbFxuICAgIC5yZXBsYWNlKC8mYW1wOy9nLCAnJicpXG4gICAgLnJlcGxhY2UoLyZsdDsvZywgJzwnKVxuICAgIC5yZXBsYWNlKC8mZ3Q7L2csIFwiPlwiKVxuICAgIC5yZXBsYWNlKC8mcXVvdDsvZywgJ1xcXCInKVxuICAgIC5yZXBsYWNlKC8mIzAzOTsvZywgJ1xcJycpO1xufVxuXG5cbi8qXG4gKiBIYW5kbGUgYSBjaGFuZ2UgaW4gdGhlIGVsZW1lbnQncyB2YWx1ZSBwcm9wZXJ0eS5cbiAqL1xuZnVuY3Rpb24gdmFsdWVDaGFuZ2VkKGVsZW1lbnQpIHtcbiAgZWxlbWVudC5hdXRvU2l6ZSgpO1xuICBlbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCd2YWx1ZS1jaGFuZ2VkJykpO1xufVxuXG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYmFzaWMtYXV0b3NpemUtdGV4dGFyZWEnLCBBdXRvc2l6ZVRleHRhcmVhKTtcbmV4cG9ydCBkZWZhdWx0IEF1dG9zaXplVGV4dGFyZWE7XG4iLCJpbXBvcnQgRWxlbWVudEJhc2UgZnJvbSAnLi4vLi4vYmFzaWMtZWxlbWVudC1iYXNlL3NyYy9FbGVtZW50QmFzZSc7XG5cbmltcG9ydCBDb250ZW50QXNJdGVtcyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Db250ZW50QXNJdGVtcyc7XG5pbXBvcnQgRGlyZWN0aW9uU2VsZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0RpcmVjdGlvblNlbGVjdGlvbic7XG5pbXBvcnQgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50JztcbmltcG9ydCBGcmFjdGlvbmFsU2VsZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0ZyYWN0aW9uYWxTZWxlY3Rpb24nO1xuaW1wb3J0IEtleWJvYXJkIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0tleWJvYXJkJztcbmltcG9ydCBLZXlib2FyZERpcmVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9LZXlib2FyZERpcmVjdGlvbic7XG5pbXBvcnQgU2VsZWN0aW9uQXJpYUFjdGl2ZSBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TZWxlY3Rpb25BcmlhQWN0aXZlJztcbmltcG9ydCBTZWxlY3Rpb25BbmltYXRpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2VsZWN0aW9uQW5pbWF0aW9uJztcbmltcG9ydCBTaW5nbGVTZWxlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2luZ2xlU2VsZWN0aW9uJztcbmltcG9ydCBTd2lwZURpcmVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Td2lwZURpcmVjdGlvbic7XG5pbXBvcnQgVGFyZ2V0SW5Db2xsZWN0aXZlIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1RhcmdldEluQ29sbGVjdGl2ZSc7XG5pbXBvcnQgVHJhY2twYWREaXJlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvVHJhY2twYWREaXJlY3Rpb24nO1xuXG5cbmxldCBiYXNlID0gRWxlbWVudEJhc2UuY29tcG9zZShcbiAgQ29udGVudEFzSXRlbXMsXG4gIERpcmVjdGlvblNlbGVjdGlvbixcbiAgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCxcbiAgRnJhY3Rpb25hbFNlbGVjdGlvbixcbiAgS2V5Ym9hcmQsXG4gIEtleWJvYXJkRGlyZWN0aW9uLFxuICBTZWxlY3Rpb25BbmltYXRpb24sXG4gIFNlbGVjdGlvbkFyaWFBY3RpdmUsXG4gIFNpbmdsZVNlbGVjdGlvbixcbiAgU3dpcGVEaXJlY3Rpb24sXG4gIFRhcmdldEluQ29sbGVjdGl2ZSxcbiAgVHJhY2twYWREaXJlY3Rpb25cbik7XG5cblxuLyoqXG4gKiBMZXRzIHRoZSB1c2VyIG5hdmlnYXRlIGxhdGVyYWxseSB0aHJvdWdoIGEgc2VxdWVuY2Ugb2YgY2hpbGQgZWxlbWVudHMuXG4gKlxuICogYmFzaWMtY2Fyb3VzZWwgaXMgYW4gaW1wbGVtZW50YXRpb24gb2YgdGhlIGNhcm91c2VsIHVzZXIgaW50ZXJmYWNlIHBhdHRlcm4sXG4gKiBjb21tb25seSB1c2VkIGZvciBuYXZpZ2F0aW5nIGJldHdlZW4gaW1hZ2VzLCBwYWdlcywgYW5kIG90aGVyIGVsZW1lbnRzLiBUaGlzXG4gKiBwYXR0ZXJuIHByZXNlbnRzIHRoZSB1c2VyIHdpdGggYSBsaW5lYXIgc2VxdWVuY2Ugb2YgZWxlbWVudHMsIG9ubHkgb25lIG9mXG4gKiB3aGljaCBpcyBzaG93biBhdCBhIHRpbWUuIFRoZSB1c2VyIGNhbiBuYXZpZ2F0ZSB0byB0aGUgbmV4dC9wcmV2aW91cyBlbGVtZW50XG4gKiB3aXRoIGEgdmFyaWV0eSBvZiBpbnB1dCBtZXRob2RzLlxuICpcbiAqIFtMaXZlIGRlbW9dKGh0dHA6Ly9iYXNpY3dlYmNvbXBvbmVudHMub3JnL2Jhc2ljLXdlYi1jb21wb25lbnRzL3BhY2thZ2VzL2Jhc2ljLWNhcm91c2VsLylcbiAqXG4gKiBUaGUgYWJvdmUgZGVtbyBhZGRzIHRoZSBvcHRpb25hbFxuICogW2Jhc2ljLWFycm93LXNlbGVjdGlvbl0oLi4vYmFzaWMtYXJyb3ctc2VsZWN0aW9uKSBhbmRcbiAqIFtiYXNpYy1wYWdlLWRvdHNdKC4uL2Jhc2ljLXBhZ2UtZG90cykgY29tcG9uZW50cy4gWW91IGNhbiBhbHNvIHZpZXcgYVxuICogW3BsYWluIGRlbW9dKGh0dHA6Ly9iYXNpY3dlYmNvbXBvbmVudHMub3JnL2Jhc2ljLXdlYi1jb21wb25lbnRzL3BhY2thZ2VzL2Jhc2ljLWNhcm91c2VsL3BsYWluLmh0bWwpXG4gKiBkZW1vLlxuICpcbiAqIGJhc2ljLWNhcm91c2VsIHVzZXMgaXRzIGNoaWxkcmVuIGFzIHRoZSBlbGVtZW50cyB0aGUgdXNlciB3aWxsIG5hdmlnYXRlXG4gKiB0aHJvdWdoLiBJbiBhIHR5cGljYWwgdXNlLCBhIGJhc2ljLWNhcm91c2VsIGNhbiBiZSB1c2VkIHRvIG5hdmlnYXRlIGJldHdlZW4gYVxuICogc2VxdWVuY2Ugb2YgaW1hZ2VzOlxuICpcbiAqICAgICA8YmFzaWMtY2Fyb3VzZWw+XG4gKiAgICAgICA8aW1nIHNyYz1cImltYWdlMS5qcGdcIj5cbiAqICAgICAgIDxpbWcgc3JjPVwiaW1hZ2UyLmpwZ1wiPlxuICogICAgICAgPGltZyBzcmM9XCJpbWFnZTMuanBnXCI+XG4gKiAgICAgPC9iYXNpYy1jYXJvdXNlbD5cbiAqXG4gKiBUaGUgY2hpbGQgZWxlbWVudHMgY2FuIGJlIG9mIGFueSB0eXBlIOKAlMKgdGhleSBhcmUgbm90IHJlc3RyaWN0ZWQgdG8gaW1hZ2VzLlxuICpcbiAqIFRoaXMgY29tcG9uZW50IGF0dGVtcHRzIHRvIG1lZXQgdGhlIFtHb2xkIFN0YW5kYXJkIGZvciB3ZWIgY29tcG9uZW50c11cbiAqIChodHRwczovL2dpdGh1Yi5jb20vd2ViY29tcG9uZW50cy9nb2xkLXN0YW5kYXJkL3dpa2kpIHNvIHRoYXQgaXQgaXMgZ2VuZXJhbGx5XG4gKiBhcyBmbGV4aWJsZSBhbmQgcm9idXN0IGFzIHN0YW5kYXJkIEhUTUwgZWxlbWVudHMuIEZvciBleGFtcGxlLCBpdCBtZWV0cyB0aGVcbiAqIFwiQ29udGVudCBDaGFuZ2VzXCIgY3JpdGVyaWE6IHRoZSBjYXJvdXNlbCB3aWxsIGFkYXB0IHRvIG5ldyBjaGlsZCBlbGVtZW50c1xuICogYWRkZWQgb3IgcmVtb3ZlZCBhdCBydW50aW1lLlxuICpcbiAqIEN1cnJlbnRseSwgdGhpcyBjb21wb25lbnQgZG9lcyBub3QgbWVldCB0aGUgR29sZCBTdGFuZGFyZCBjcml0ZXJpYSBcIlNpemUgdG9cbiAqIENvbnRlbnRcIi4gQXMgYSByZXN1bHQsIGZvciB0aGUgdGltZSBiZWluZywgKip5b3UgbXVzdCBtYW51YWxseSBzZXQgYSBzaXplIG9uXG4gKiB0aGlzIGNvbXBvbmVudCoqLiBUd28gYXBwcm9hY2hlcyBhcmUgdG86IDEpIHN0cmV0Y2ggdGhlIGNvbXBvbmVudCBhY3Jvc3NcbiAqIHdoYXRldmVyIHN1cmZhY2UgaXQgaXMgY29udGFpbmVkIHdpdGhpbiwgb3IgMikgc2V0IGl0IHRvIGJlIGxhcmdlciB0aGFuIHRoZVxuICogbGFyZ2VzdCBjaGlsZCBlbGVtZW50IHlvdSB3YW50IHRvIGRpc3BsYXkuIFRoZSBmb3JtZXIgYXBwcm9hY2ggaXMgbW9yZVxuICogY29tbW9uLCBhbmQgY2FuIGJlIGFjaGlldmVkIHdpdGggQ1NTIHN0eWxpbmcgc3VjaCBhczpcbiAqXG4gKiAgICAgaHRtbCB7XG4gKiAgICAgICBoZWlnaHQ6IDEwMCU7XG4gKiAgICAgfVxuICpcbiAqICAgICBib2R5IHtcbiAqICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAqICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gKiAgICAgICBoZWlnaHQ6IDEwMCU7XG4gKiAgICAgICBtYXJnaW46IDA7XG4gKiAgICAgfVxuICpcbiAqICAgICBiYXNpYy1jYXJvdXNlbCB7XG4gKiAgICAgICAtd2Via2l0LWZsZXg6IDE7XG4gKiAgICAgICBmbGV4OiAxO1xuICogICAgIH1cbiAqXG4gKiBUaGUgc3RhbmRhcmQgYmFzaWMtY2Fyb3VzZWwgY29tcG9uZW50IHN1cHBvcnRzIG5hdmlnYXRpb24gdmlhIHRoZSBmb2xsb3dpbmdcbiAqIGlucHV0IG1ldGhvZHM6XG4gKlxuICogKiBLZXlib2FyZC4gV2hlbiB0aGUgY2Fyb3VzZWwgaGFzIGZvY3VzLCB0aGUgdXNlciBjYW4gcHJlc3MgTGVmdCwgUmlnaHQsXG4gKiAgIEhvbWUsIG9yIEVuZC4gVGhlc2UgbmF2aWdhdGUgdG8gdGhlIGV4cGVjdGVkIGVsZW1lbnQuXG4gKiAqIFRvdWNoLiBPbiBtb2JpbGUgYW5kIG90aGVyIHRvdWNoLWVuYWJsZWQgZGV2aWNlcywgdGhlIHVzZXIgY2FuIGRyYWcgbGVmdCBvclxuICogICByaWdodC5cbiAqICogVHJhY2twYWQuIFRoZSB1c2VyIGNhbiBzd2lwZSBsZWZ0IG9yIHJpZ2h0IG9uIGEgdHJhY2twYWQgdG8gbmF2aWdhdGUuXG4gKlxuICogQmVjYXVzZSBjYXJvdXNlbHMgYXJlIHVzZWQgaW4gYSB3aWRlIHZhcmlldHkgb2YgY2lyY3Vtc3RhbmNlcywgYnkgZGVmYXVsdFxuICogYmFzaWMtY2Fyb3VzZWwgcHJvdmlkZXMgYSBtaW5pbWFsIGFwcGVhcmFuY2UgYW5kIG5vIHNlcGFyYXRlbHkgaW50ZXJhY3RpdmVcbiAqIGVsZW1lbnRzIHN1Y2ggYXMgYXJyb3cgYnV0dG9ucyBvbiB0aGUgc2lkZSBvciBkb3RzIGFsb25nIHRoZSBib3R0b20uIFRob3NlXG4gKiBlbGVtZW50cyBjYW4gYmUgYWRkZWQgYnkgd3JhcHBpbmcgYSBiYXNpYy1jYXJvdXNlbCBpbiBvcHRpb25hbCBhY2Nlc3NvcmllczpcbiAqXG4gKiAqIFtiYXNpYy1hcnJvdy1zZWxlY3Rpb25dKC4uL2Jhc2ljLWFycm93LXNlbGVjdGlvbikuXG4gKiAgIFRoaXMgYWRkcyBwcm9taW5lbnQgbGVmdCBhbmQgcmlnaHQgYXJyb3cgYnV0dG9ucyBvbiB0aGUgc2lkZSBvZiB0aGUgY2Fyb3VzZWwuXG4gKiAqIFtiYXNpYy1wYWdlLWRvdHNdKC4uL2Jhc2ljLXBhZ2UtZG90cykuXG4gKiAgIFRoaXMgYWRkcyBhIHNlcmllcyBvZiBzbWFsbCBkb3RzIGJlbG93IHRoZSBjYXJvdXNlbCB0byBpbmRpY2F0ZSB0aGUgdXNlcidzXG4gKiAgIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIHNlcXVlbmNlLlxuICogKiBbYmFzaWMtc2xpZGVzaG93LXRpbWVyXSguLi9iYXNpYy1zbGlkZXNob3ctdGltZXIpLlxuICogICBBZHZhbmNlcyB0byB0aGUgbmV4dCBpdGVtIG9uIGEgdGltZXIuXG4gKiAqIFtiYXNpYy10YWItc3RyaXBdKC4uL2Jhc2ljLXRhYi1zdHJpcCkuXG4gKiAgIEFkZHMgYSBzdHJpcCBvZiB0cmFkaXRpb25hbCB0YWIgYnV0dG9ucy5cbiAqXG4gKiBTZWUgdGhvc2UgY29tcG9uZW50cyBmb3IgbW9yZSBkZXRhaWxzLCBidXQgaW4gZ2VuZXJhbCB5b3UgY2FuIGNvbnN0cnVjdCBhXG4gKiBjb21tb24gY2Fyb3VzZWwgd2l0aCBib3RoIGFycm93IGJ1dHRvbnMgYW5kIGRvdHMgbGlrZSBzbzpcbiAqXG4gKiAgICAgPGJhc2ljLWFycm93LXNlbGVjdGlvbj5cbiAqICAgICAgIDxiYXNpYy1wYWdlLWRvdHM+XG4gKiAgICAgICAgIDxiYXNpYy1jYXJvdXNlbD5cbiAqICAgICAgICAgICAuLi4gaW1hZ2VzLCBldGMuIC4uLlxuICogICAgICAgICA8L2Jhc2ljLWNhcm91c2VsPlxuICogICAgICAgPC9iYXNpYy1wYWdlLWRvdHM+XG4gKiAgICAgPC9iYXNpYy1hcnJvdy1zZWxlY3Rpb24+XG4gKlxuICogRm9yIHVuaXZlcnNhbCBhY2Nlc3MsIGJhc2ljLWNhcm91c2VsIGF1dG9tYXRpY2FsbHkgYWRkcyBhIHZhcmlldHkgb2ZcbiAqIFtBUklBXShodHRwOi8vd3d3LnczLm9yZy9XQUkvaW50cm8vYXJpYSkgcHJvcGVydGllcyB0byBpdHNlbGYgYW5kIHRvIGNoaWxkXG4gKiBlbGVtZW50cy4gVGhpcyBoZWxwcyB1c2VycyBuYXZpZ2F0ZSB0aGUgc2VxdWVuY2Ugb2YgZWxlbWVudHMgaW4gdGhlIGNhcm91c2VsXG4gKiB1c2luZyBhc3Npc3RpdmUgdGVjaG5vbG9naWVzLlxuICpcbiAqIEBleHRlbmRzIEVsZW1lbnRCYXNlXG4gKiBAbWl4ZXMgQ29udGVudEFzSXRlbXNcbiAqIEBtaXhlcyBEaXJlY3Rpb25TZWxlY3Rpb25cbiAqIEBtaXhlcyBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50XG4gKiBAbWl4ZXMgRnJhY3Rpb25hbFNlbGVjdGlvblxuICogQG1peGVzIEdlbmVyaWNcbiAqIEBtaXhlcyBLZXlib2FyZFxuICogQG1peGVzIEtleWJvYXJkRGlyZWN0aW9uXG4gKiBAbWl4ZXMgU2VsZWN0aW9uQW5pbWF0aW9uXG4gKiBAbWl4ZXMgU2VsZWN0aW9uQXJpYUFjdGl2ZVxuICogQG1peGVzIFNpbmdsZVNlbGVjdGlvblxuICogQG1peGVzIFN3aXBlRGlyZWN0aW9uXG4gKiBAbWl4ZXMgVGFyZ2V0SW5Db2xsZWN0aXZlXG4gKiBAbWl4ZXMgVGFyZ2V0U2VsZWN0aW9uXG4gKiBAbWl4ZXMgVHJhY2twYWREaXJlY3Rpb25cbiAqL1xuY2xhc3MgQ2Fyb3VzZWwgZXh0ZW5kcyBiYXNlIHtcblxuICBnZXQgZGVmYXVsdHMoKSB7XG4gICAgbGV0IGRlZmF1bHRzID0gc3VwZXIuZGVmYXVsdHMgfHwge307XG4gICAgZGVmYXVsdHMubmF2aWdhdGlvbkF4aXMgPSAnaG9yaXpvbnRhbCc7XG4gICAgZGVmYXVsdHMuc2VsZWN0aW9uQW5pbWF0aW9uRWZmZWN0ID0gJ3NsaWRlV2l0aEdhcCc7XG4gICAgZGVmYXVsdHMuc2VsZWN0aW9uUmVxdWlyZWQgPSB0cnVlO1xuICAgIHJldHVybiBkZWZhdWx0cztcbiAgfVxuXG4gIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gYFxuICAgICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgI2NvbnRhaW5lciA6OnNsb3R0ZWQoKikge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGlkPVwiY29udGFpbmVyXCIgcm9sZT1cIm5vbmVcIj5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG59XG5cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdiYXNpYy1jYXJvdXNlbCcsIENhcm91c2VsKTtcbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsO1xuIiwiaW1wb3J0IEVsZW1lbnRCYXNlIGZyb20gJy4uLy4uL2Jhc2ljLWVsZW1lbnQtYmFzZS9zcmMvRWxlbWVudEJhc2UnO1xuaW1wb3J0IE9wZW5DbG9zZSBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9PcGVuQ2xvc2UnO1xuXG5cbi8qKlxuICogQSBwYW5lbCB3aGljaCBjYW4gYmUgZXhwYW5kZWQvY29sbGFwc2VkIHdpdGggYW4gYW5pbWF0ZWQgdHJhbnNpdGlvbi5cbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBjb21iaW5lcyB0aGUgT3BlbkNsb3NlIG1peGluIGFuZCBhIHNpbXBsZSBDU1MgaGVpZ2h0XG4gKiBhbmltYXRpb24uXG4gKlxuICogVGhpcyBjb21wb25lbnQgaGFuZGxlcyBvbmx5IHRoZSBkdXRpZXMgb2YgY29sbGFwc2luZyBhbmQgZXhwYW5kaW5nLiBJdCBkb2VzXG4gKiBub3QgcHJvdmlkZSBhIHVzZXIgaW50ZXJmYWNlIGZvciB0aGUgdXNlciB0byB0cmlnZ2VyIHRoZSBjaGFuZ2UgaW4gc3RhdGU7XG4gKiB5b3UgbXVzdCBwcm92aWRlIHRoYXQgdXNlciBpbnRlcmZhY2UgeW91cnNlbGYuXG4gKlxuICogQGV4dGVuZHMgRWxlbWVudEJhc2VcbiAqIEBtaXhlcyBPcGVuQ2xvc2VcbiAqL1xuY2xhc3MgQ29sbGFwc2libGVQYW5lbCBleHRlbmRzIE9wZW5DbG9zZShFbGVtZW50QmFzZSkge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy4kLm92ZXJmbG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuY2xvc2VkKSB7XG4gICAgICAgIC8vIFJlbW92ZSB0aGUgaGFyZC1jb2RlZCBoZWlnaHQgd2UgYXBwbGllZCBmb3IgdGhlIHRyYW5zaXRpb24gc28gdGhhdFxuICAgICAgICAvLyB0aGUgZWxlbWVudCB3aWxsIHJlZmxvdyBjb3JyZWN0bHksIGUuZy4sIG9uIHdpbmRvdyByZXNpemUuXG4gICAgICAgIHRoaXMuJC5vdmVyZmxvdy5zdHlsZS5oZWlnaHQgPSAnJztcbiAgICAgIH1cbiAgICAgIC8vIEVuc3VyZSB0aGUgYW5pbWF0aW9uIG9ubHkgcGxheXMgb25jZS4gRm9yIHNvbWUgcmVhc29uLCBTYWZhcmkgd2lsbCBzaG93XG4gICAgICAvLyB0aGUgYW5pbWF0aW9uIHR3aWNlIHdpdGhvdXQgdGhpcyBsaW5lLCBldmVuIHRob3VnaCB0aGUgcmVuZGVyIGZ1bmN0aW9uXG4gICAgICAvLyBleHBsaWNpdGx5IHJlbW92ZXMgdGhpcyBjbGFzcyB3aGVuIGl0IHNldHMgdGhlIG9sZCBoZWlnaHQuIE5laXRoZXJcbiAgICAgIC8vIENocm9tZSBub3IgRmlyZWZveCBzZWVtIHRvIG5lZWQgdGhpcyBsaW5lLlxuICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdzaG93VHJhbnNpdGlvbicpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKGNsb3NpbmcpIHtcbiAgICBzdXBlci5yZW5kZXIoY2xvc2luZyk7XG5cbiAgICBsZXQgbmF0dXJhbEhlaWdodCA9IHRoaXMuJC5jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgIGlmIChuYXR1cmFsSGVpZ2h0ID09PSAwKSB7XG4gICAgICAvLyBNb3N0IGxpa2VseSBoYXZlbid0IGhhZCBhIGNoYW5jZSB0byByZW5kZXIgeWV0LlxuICAgICAgdGhpcy4kLm92ZXJmbG93LnN0eWxlLmhlaWdodCA9IGNsb3NpbmcgPyAwIDogJyc7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gV2l0aG91dCBhbmltYXRpbmcsIHNldCBzdGFydGluZyBoZWlnaHQgb2YgdHJhbnNpdGlvbi5cbiAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3dUcmFuc2l0aW9uJyk7XG4gICAgbGV0IG9sZEhlaWdodCA9IGNsb3NpbmcgPyBuYXR1cmFsSGVpZ2h0IDogMDtcbiAgICB0aGlzLiQub3ZlcmZsb3cuc3R5bGUuaGVpZ2h0ID0gb2xkSGVpZ2h0ICsgJ3B4JztcblxuICAgIC8vIEZvcmNlIGEgcmVsYXlvdXQgc28gdGhhdCB0aGUgc3RhcnRpbmcgaGVpZ2h0IGlzIGFwcGxpZWQuXG4gICAgLy8gVGhpcyBjYW4gYmUgYWNoaWV2ZWQgYnkgcmVhZGluZyBhIHByb3BlcnR5IGxpa2Ugb2Zmc2V0SGVpZ2h0LlxuICAgIHRoaXMuJC5vdmVyZmxvdy5vZmZzZXRIZWlnaHQ7IC8vIGpzaGludCBpZ25vcmU6bGluZVxuXG4gICAgLy8gVHVybiBhbmltYXRpb24gb24sIGFuZCBlbmRpbmcgaGVpZ2h0IG9mIHRyYW5zaXRpb24uXG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdzaG93VHJhbnNpdGlvbicpO1xuICAgIGxldCBuZXdIZWlnaHQgPSBjbG9zaW5nID8gMCA6IG5hdHVyYWxIZWlnaHQ7XG4gICAgdGhpcy4kLm92ZXJmbG93LnN0eWxlLmhlaWdodCA9IG5ld0hlaWdodCArICdweCc7XG4gIH1cblxuICBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG5cbiAgICAgIDpob3N0KC5zaG93VHJhbnNpdGlvbikgI292ZXJmbG93IHtcbiAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuMnM7XG4gICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGlkPVwib3ZlcmZsb3dcIiByb2xlPVwibm9uZVwiPlxuICAgICAgICA8ZGl2IGlkPVwiY29udGFpbmVyXCIgcm9sZT1cIm5vbmVcIj5cbiAgICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG59XG5cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdiYXNpYy1jb2xsYXBzaWJsZS1wYW5lbCcsIENvbGxhcHNpYmxlUGFuZWwpO1xuZXhwb3J0IGRlZmF1bHQgQ29sbGFwc2libGVQYW5lbDtcbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi9jcmVhdGVTeW1ib2wnO1xuaW1wb3J0IG1pY3JvdGFzayBmcm9tICcuLi9zcmMvbWljcm90YXNrJztcblxuXG4vLyBNZW1vaXplZCBtYXBzIG9mIGF0dHJpYnV0ZSB0byBwcm9wZXJ0eSBuYW1lcyBhbmQgdmljZSB2ZXJzYS5cbmNvbnN0IGF0dHJpYnV0ZVRvUHJvcGVydHlOYW1lcyA9IHt9O1xuY29uc3QgcHJvcGVydHlOYW1lc1RvQXR0cmlidXRlcyA9IHt9O1xuXG5cbi8vIFN5bWJvbHMgZm9yIHByaXZhdGUgZGF0YSBtZW1iZXJzIG9uIGFuIGVsZW1lbnQuXG5jb25zdCBzYWZlVG9TZXRBdHRyaWJ1dGVzU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdjb25zdHJ1Y3RlZCcpO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggQXR0cmlidXRlTWFyc2hhbGxpbmcuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBtYXJzaGFsbHMgYXR0cmlidXRlcyB0byBwcm9wZXJ0aWVzIGFuZCB2aWNlIHZlcnNhLlxuICAgKlxuICAgKiBJZiB5b3VyIGNvbXBvbmVudCBleHBvc2VzIGEgc2V0dGVyIGZvciBhIHByb3BlcnR5LCBpdCdzIGdlbmVyYWxseSBhIGdvb2RcbiAgICogaWRlYSB0byBsZXQgZGV2cyB1c2luZyB5b3VyIGNvbXBvbmVudCBiZSBhYmxlIHRvIHNldCB0aGF0IHByb3BlcnR5IGluIEhUTUxcbiAgICogdmlhIGFuIGVsZW1lbnQgYXR0cmlidXRlLiBZb3UgY2FuIGNvZGUgdGhhdCB5b3Vyc2VsZiBieSB3cml0aW5nIGFuXG4gICAqIGBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tgLCBvciB5b3UgY2FuIHVzZSB0aGlzIG1peGluIHRvIGdldCBhIGRlZ3JlZSBvZlxuICAgKiBhdXRvbWF0aWMgc3VwcG9ydC5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBpbXBsZW1lbnRzIGFuIGBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tgIHRoYXQgd2lsbCBhdHRlbXB0IHRvXG4gICAqIGNvbnZlcnQgYSBjaGFuZ2UgaW4gYW4gZWxlbWVudCBhdHRyaWJ1dGUgaW50byBhIGNhbGwgdG8gdGhlIGNvcnJlc3BvbmRpbmdcbiAgICogcHJvcGVydHkgc2V0dGVyLiBBdHRyaWJ1dGVzIHR5cGljYWxseSBmb2xsb3cgaHlwaGVuYXRlZCBuYW1lcyAoXCJmb28tYmFyXCIpLFxuICAgKiB3aGVyZWFzIHByb3BlcnRpZXMgdHlwaWNhbGx5IHVzZSBjYW1lbENhc2UgbmFtZXMgKFwiZm9vQmFyXCIpLiBUaGlzIG1peGluXG4gICAqIHJlc3BlY3RzIHRoYXQgY29udmVudGlvbiwgYXV0b21hdGljYWxseSBtYXBwaW5nIHRoZSBoeXBoZW5hdGVkIGF0dHJpYnV0ZVxuICAgKiBuYW1lIHRvIHRoZSBjb3JyZXNwb25kaW5nIGNhbWVsQ2FzZSBwcm9wZXJ0eSBuYW1lLlxuICAgKlxuICAgKiBFeGFtcGxlOiBZb3UgZGVmaW5lIGEgY29tcG9uZW50IHVzaW5nIHRoaXMgbWl4aW46XG4gICAqXG4gICAqICAgICBjbGFzcyBNeUVsZW1lbnQgZXh0ZW5kcyBBdHRyaWJ1dGVNYXJzaGFsbGluZyhIVE1MRWxlbWVudCkge1xuICAgKiAgICAgICBnZXQgZm9vQmFyKCkgeyByZXR1cm4gdGhpcy5fZm9vQmFyOyB9XG4gICAqICAgICAgIHNldCBmb29CYXIodmFsdWUpIHsgdGhpcy5fZm9vQmFyID0gdmFsdWU7IH1cbiAgICogICAgIH1cbiAgICogICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbXktZWxlbWVudCcsIE15RWxlbWVudCk7XG4gICAqXG4gICAqIElmIHNvbWVvbmUgdGhlbiBpbnN0YW50aWF0ZXMgeW91ciBjb21wb25lbnQgaW4gSFRNTDpcbiAgICpcbiAgICogICAgIDxteS1lbGVtZW50IGZvby1iYXI9XCJIZWxsb1wiPjwvbXktZWxlbWVudD5cbiAgICpcbiAgICogVGhlbiwgYWZ0ZXIgdGhlIGVsZW1lbnQgaGFzIGJlZW4gdXBncmFkZWQsIHRoZSBgZm9vQmFyYCBzZXR0ZXIgd2lsbFxuICAgKiBhdXRvbWF0aWNhbGx5IGJlIGludm9rZWQgd2l0aCB0aGUgaW5pdGlhbCB2YWx1ZSBcIkhlbGxvXCIuXG4gICAqXG4gICAqIEZvciB0aGUgdGltZSBiZWluZywgdGhpcyBtaXhpbiBvbmx5IHN1cHBvcnRzIHN0cmluZy12YWx1ZWQgcHJvcGVydGllcy5cbiAgICogSWYgeW91J2QgbGlrZSB0byBjb252ZXJ0IHN0cmluZyBhdHRyaWJ1dGVzIHRvIG90aGVyIHR5cGVzIChudW1iZXJzLFxuICAgKiBib29sZWFucyksIHlvdSBuZWVkIHRvIGltcGxlbWVudCBgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrYCB5b3Vyc2VsZi5cbiAgICovXG4gIGNsYXNzIEF0dHJpYnV0ZU1hcnNoYWxsaW5nIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICBtaWNyb3Rhc2soKCkgPT4ge1xuICAgICAgICB0aGlzW3NhZmVUb1NldEF0dHJpYnV0ZXNTeW1ib2xdID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogSGFuZGxlIGEgY2hhbmdlIHRvIHRoZSBhdHRyaWJ1dGUgd2l0aCB0aGUgZ2l2ZW4gbmFtZS5cbiAgICAgKi9cbiAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soYXR0cmlidXRlTmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG4gICAgICBpZiAoc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKSB7IHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjaygpOyB9XG4gICAgICBsZXQgcHJvcGVydHlOYW1lID0gYXR0cmlidXRlVG9Qcm9wZXJ0eU5hbWUoYXR0cmlidXRlTmFtZSk7XG4gICAgICAvLyBJZiB0aGUgYXR0cmlidXRlIG5hbWUgY29ycmVzcG9uZHMgdG8gYSBwcm9wZXJ0eSBuYW1lLCBzZXQgdGhlIHByb3BlcnR5LlxuICAgICAgLy8gSWdub3JlIHN0YW5kYXJkIEhUTUxFbGVtZW50IHByb3BlcnRpZXMgaGFuZGxlZCBieSB0aGUgRE9NLlxuICAgICAgaWYgKHByb3BlcnR5TmFtZSBpbiB0aGlzICYmICEocHJvcGVydHlOYW1lIGluIEhUTUxFbGVtZW50LnByb3RvdHlwZSkpIHtcbiAgICAgICAgdGhpc1twcm9wZXJ0eU5hbWVdID0gbmV3VmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2spIHsgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTsgfVxuICAgICAgdGhpc1tzYWZlVG9TZXRBdHRyaWJ1dGVzU3ltYm9sXSA9IHRydWU7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG4gICAgICByZXR1cm4gYXR0cmlidXRlc0ZvckNsYXNzKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldC91bnNldCB0aGUgYXR0cmlidXRlIHdpdGggdGhlIGluZGljYXRlZCBuYW1lLlxuICAgICAqXG4gICAgICogVGhpcyBtZXRob2QgZXhpc3RzIHByaW1hcmlseSB0byBoYW5kbGUgdGhlIGNhc2Ugd2hlcmUgYW4gZWxlbWVudCB3YW50cyB0b1xuICAgICAqIHNldCBhIGRlZmF1bHQgcHJvcGVydHkgdmFsdWUgdGhhdCBzaG91bGQgYmUgcmVmbGVjdGVkIGFzIGFuIGF0dHJpYnV0ZS4gQW5cbiAgICAgKiBpbXBvcnRhbnQgbGltaXRhdGlvbiBvZiBjdXN0b20gZWxlbWVudCBjb25zdHVyY3RvcnMgaXMgdGhhdCB0aGV5IGNhbm5vdFxuICAgICAqIHNldCBhdHRyaWJ1dGVzLiBBIGNhbGwgdG8gYHJlZmxlY3RBdHRyaWJ1dGVgIGR1cmluZyB0aGUgY29uc3RydWN0b3Igd2lsbFxuICAgICAqIGJlIHNhZmVseSBkZWZlcnJlZCB1bnRpbCBhZnRlciB0aGUgY29uc3RydWN0b3IgaGFzIGNvbXBsZXRlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyaWJ1dGVOYW1lIC0gVGhlIG5hbWUgb2YgdGhlICphdHRyaWJ1dGUqIChub3QgcHJvcGVydHkpIHRvIHNldC5cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gc2V0LiBJZiBudWxsLCB0aGUgYXR0cmlidXRlIHdpbGwgYmUgcmVtb3ZlZC5cbiAgICAgKi9cbiAgICByZWZsZWN0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIHZhbHVlKSB7XG4gICAgICBpZiAodGhpc1tzYWZlVG9TZXRBdHRyaWJ1dGVzU3ltYm9sXSkge1xuICAgICAgICAvLyBTYWZlIHRvIHNldCBhdHRyaWJ1dGVzIGltbWVkaWF0ZWx5LlxuICAgICAgICByZWZsZWN0QXR0cmlidXRlVG9FbGVtZW50KHRoaXMsIGF0dHJpYnV0ZU5hbWUsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIERlZmVyIHNldHRpbmcgYXR0cmlidXRlcy5cbiAgICAgICAgbWljcm90YXNrKCgpID0+IHJlZmxlY3RBdHRyaWJ1dGVUb0VsZW1lbnQodGhpcywgYXR0cmlidXRlTmFtZSwgdmFsdWUpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBBdHRyaWJ1dGVNYXJzaGFsbGluZztcbn07XG5cblxuLy8gQ29udmVydCBoeXBoZW5hdGVkIGZvby1iYXIgYXR0cmlidXRlIG5hbWUgdG8gY2FtZWwgY2FzZSBmb29CYXIgcHJvcGVydHkgbmFtZS5cbmZ1bmN0aW9uIGF0dHJpYnV0ZVRvUHJvcGVydHlOYW1lKGF0dHJpYnV0ZU5hbWUpIHtcbiAgbGV0IHByb3BlcnR5TmFtZSA9IGF0dHJpYnV0ZVRvUHJvcGVydHlOYW1lc1thdHRyaWJ1dGVOYW1lXTtcbiAgaWYgKCFwcm9wZXJ0eU5hbWUpIHtcbiAgICAvLyBDb252ZXJ0IGFuZCBtZW1vaXplLlxuICAgIGxldCBoeXBlblJlZ0V4ID0gLy0oW2Etel0pL2c7XG4gICAgcHJvcGVydHlOYW1lID0gYXR0cmlidXRlTmFtZS5yZXBsYWNlKGh5cGVuUmVnRXgsXG4gICAgICAgIG1hdGNoID0+IG1hdGNoWzFdLnRvVXBwZXJDYXNlKCkpO1xuICAgIGF0dHJpYnV0ZVRvUHJvcGVydHlOYW1lc1thdHRyaWJ1dGVOYW1lXSA9IHByb3BlcnR5TmFtZTtcbiAgfVxuICByZXR1cm4gcHJvcGVydHlOYW1lO1xufVxuXG5mdW5jdGlvbiBhdHRyaWJ1dGVzRm9yQ2xhc3MoY2xhc3NGbikge1xuXG4gIC8vIFdlIHRyZWF0IHRoZSBlbGVtZW50IGJhc2UgY2xhc3NlcyBhcyBpZiB0aGV5IGhhdmUgbm8gYXR0cmlidXRlcywgc2luY2Ugd2VcbiAgLy8gZG9uJ3Qgd2FudCB0byByZWNlaXZlIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayBmb3IgdGhlbS5cbiAgaWYgKGNsYXNzRm4gPT09IEhUTUxFbGVtZW50IHx8IGNsYXNzRm4gPT09IE9iamVjdCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIC8vIEdldCBhdHRyaWJ1dGVzIGZvciBwYXJlbnQgY2xhc3MuXG4gIGxldCBiYXNlQ2xhc3MgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoY2xhc3NGbi5wcm90b3R5cGUpLmNvbnN0cnVjdG9yO1xuICBsZXQgYmFzZUF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzRm9yQ2xhc3MoYmFzZUNsYXNzKTtcblxuICAvLyBHZXQgYXR0cmlidXRlcyBmb3IgdGhpcyBjbGFzcy5cbiAgbGV0IHByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhjbGFzc0ZuLnByb3RvdHlwZSk7XG4gIGxldCBzZXR0ZXJOYW1lcyA9IHByb3BlcnR5TmFtZXMuZmlsdGVyKHByb3BlcnR5TmFtZSA9PlxuICAgIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKFxuICAgICAgICBjbGFzc0ZuLnByb3RvdHlwZSwgcHJvcGVydHlOYW1lKS5zZXQgPT09ICdmdW5jdGlvbicpO1xuICBsZXQgYXR0cmlidXRlcyA9IHNldHRlck5hbWVzLm1hcChzZXR0ZXJOYW1lID0+XG4gICAgICBwcm9wZXJ0eU5hbWVUb0F0dHJpYnV0ZShzZXR0ZXJOYW1lKSk7XG5cbiAgLy8gTWVyZ2UuXG4gIGxldCBkaWZmID0gYXR0cmlidXRlcy5maWx0ZXIoYXR0cmlidXRlID0+XG4gICAgICBiYXNlQXR0cmlidXRlcy5pbmRleE9mKGF0dHJpYnV0ZSkgPCAwKTtcbiAgcmV0dXJuIGJhc2VBdHRyaWJ1dGVzLmNvbmNhdChkaWZmKTtcbn1cblxuLy8gQ29udmVydCBhIGNhbWVsIGNhc2UgZm9vQmFyIHByb3BlcnR5IG5hbWUgdG8gYSBoeXBoZW5hdGVkIGZvby1iYXIgYXR0cmlidXRlLlxuZnVuY3Rpb24gcHJvcGVydHlOYW1lVG9BdHRyaWJ1dGUocHJvcGVydHlOYW1lKSB7XG4gIGxldCBhdHRyaWJ1dGUgPSBwcm9wZXJ0eU5hbWVzVG9BdHRyaWJ1dGVzW3Byb3BlcnR5TmFtZV07XG4gIGlmICghYXR0cmlidXRlKSB7XG4gICAgLy8gQ29udmVydCBhbmQgbWVtb2l6ZS5cbiAgICBsZXQgdXBwZXJjYXNlUmVnRXggPSAvKFtBLVpdKS9nO1xuICAgIGF0dHJpYnV0ZSA9IHByb3BlcnR5TmFtZS5yZXBsYWNlKHVwcGVyY2FzZVJlZ0V4LCAnLSQxJykudG9Mb3dlckNhc2UoKTtcbiAgfVxuICByZXR1cm4gYXR0cmlidXRlO1xufVxuXG4vLyBSZWZsZWN0IHRoZSBhdHRyaWJ1dGUgd2l0aCB0aGUgZ2l2ZW4gZWxlbWVudC5cbi8vIElmIHRoZSBhdHRyaWJ1dGUgaXMgbnVsbCwgcmVtb3ZlIHRoZSBhdHRyaWJ1dGUuXG5mdW5jdGlvbiByZWZsZWN0QXR0cmlidXRlVG9FbGVtZW50KGVsZW1lbnQsIGF0dHJpYnV0ZU5hbWUsIHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgdmFsdWUpO1xuICB9XG59XG4iLCIvKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIENsaWNrU2VsZWN0aW9uLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggbWFwcyBhIGNsaWNrIChhY3R1YWxseSwgYSBtb3VzZWRvd24pIHRvIGEgc2VsZWN0aW9uLlxuICAgKlxuICAgKiBUaGlzIHNpbXBsZSBtaXhpbiBpcyB1c2VmdWwgaW4gbGlzdCBib3gtbGlrZSBlbGVtZW50cywgd2hlcmUgYSBjbGljayBvbiBhXG4gICAqIGxpc3QgaXRlbSBpbXBsaWNpdGx5IHNlbGVjdHMgaXQuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyB0aGUgY29tcG9uZW50IHRvIHByb3ZpZGUgYW4gYGl0ZW1zYCBwcm9wZXJ0eS4gWW91IGNhblxuICAgKiBwcm92aWRlIHRoYXQgcHJvcGVydHkgeW91cnNlbGYsIG9yIHVzZSB0aGVcbiAgICogW0NvbnRlbnRBc0l0ZW1zXShDb250ZW50QXNJdGVtcy5tZCkgbWl4aW4uIFRoaXMgbWl4aW4gYWxzbyBleHBlY3RzIHRoZVxuICAgKiBjb21wb25lbnQgdG8gZGVmaW5lIGEgYHNlbGVjdGVkSW5kZXhgIHByb3BlcnR5LiBZb3UgY2FuIHByb3ZpZGUgdGhhdFxuICAgKiB5b3Vyc2VsZiwgb3IgdXNlIHRoZSBbU2luZ2xlU2VsZWN0aW9uXShTaW5nbGVTZWxlY3Rpb24ubWQpIG1peGluLlxuICAgKi9cbiAgY2xhc3MgQ2xpY2tTZWxlY3Rpb24gZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIC8qXG4gICAgICAgKiBSRVZJRVc6IFdoaWNoIGV2ZW50IHNob3VsZCB3ZSBsaXN0ZW4gdG8gaGVyZT9cbiAgICAgICAqXG4gICAgICAgKiBUaGUgc3RhbmRhcmQgdXNlIGZvciB0aGlzIG1peGluIGlzIGluIGxpc3QgYm94ZXMuIExpc3QgYm94ZXMgZG9uJ3RcbiAgICAgICAqIGFwcGVhciB0byBiZSBjb25zaXN0ZW50IHdpdGggcmVnYXJkIHRvIHdoZXRoZXIgdGhleSBzZWxlY3Qgb24gbW91c2Vkb3duXG4gICAgICAgKiBvciBjbGljay9tb3VzZXVwLlxuICAgICAgICovXG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGV2ZW50ID0+IHtcbiAgICAgICAgc2VsZWN0VGFyZ2V0KHRoaXMsIGV2ZW50LnRhcmdldCk7XG4gICAgICAgIC8vIE5vdGU6IFdlIGRvbid0IGNhbGwgcHJldmVudERlZmF1bHQgaGVyZS4gVGhlIGRlZmF1bHQgYmVoYXZpb3IgZm9yXG4gICAgICAgIC8vIG1vdXNlZG93biBpbmNsdWRlcyBzZXR0aW5nIGtleWJvYXJkIGZvY3VzIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3RcbiAgICAgICAgLy8gYWxyZWFkeSBoYXZlIHRoZSBmb2N1cywgYW5kIHdlIHdhbnQgdG8gcHJlc2VydmUgdGhhdCBiZWhhdmlvci5cbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IGltcGxlbWVudGF0aW9uLiBUaGlzIHdpbGwgdHlwaWNhbGx5IGJlIGhhbmRsZWQgYnkgb3RoZXIgbWl4aW5zLlxuICAgIGdldCBzZWxlY3RlZEluZGV4KCkge1xuICAgICAgcmV0dXJuIHN1cGVyLnNlbGVjdGVkSW5kZXg7XG4gICAgfVxuICAgIHNldCBzZWxlY3RlZEluZGV4KGluZGV4KSB7XG4gICAgICBpZiAoJ3NlbGVjdGVkSW5kZXgnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkSW5kZXggPSBpbmRleDsgfVxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIENsaWNrU2VsZWN0aW9uO1xufTtcblxuXG4vLyBUT0RPOiBIYW5kbGUgdGhlIGNhc2Ugd2hlcmUgYSBsaXN0IGl0ZW0gaGFzIHN1YmVsZW1lbnRzLiBXYWxrIHVwIHRoZSBET01cbi8vIGhpZXJhcmNoeSB1bnRpbCB3ZSBmaW5kIGFuIGl0ZW0gaW4gdGhlIGxpc3QsIG9yIGNvbWUgYmFjayB0byB0aGlzIGVsZW1lbnQsXG4vLyBpbiB3aGljaCBjYXNlIHRoZSBlbGVtZW50IHRoYXQgd2FzIHRhcHBlZCBpc24ndCBhbiBpdGVtIChhbmQgc2hvdWxkIGJlXG4vLyBpZ25vcmVkKS5cbmZ1bmN0aW9uIHNlbGVjdFRhcmdldChlbGVtZW50LCB0YXJnZXQpIHtcbiAgbGV0IGluZGV4ID0gZWxlbWVudC5pdGVtcyAmJiBlbGVtZW50Lml0ZW1zLmluZGV4T2YodGFyZ2V0KTtcbiAgaWYgKGluZGV4ID49IDApIHtcbiAgICBlbGVtZW50LnNlbGVjdGVkSW5kZXggPSBpbmRleDtcbiAgfVxufVxuIiwiLyoqXG4gKiBBIGdyb3VwIG9mIGVsZW1lbnRzIHRoYXQgaGF2ZSBiZWVuIGFzc29jaWF0ZWQgZm9yIHRoZSBwdXJwb3NlIG9mXG4gKiBhY2NvbXBsaXNoaW5nIHNvbWUgY29sbGVjdGl2ZSBiZWhhdmlvciwgZS5nLiwga2V5Ym9hcmQgaGFuZGxpbmcuXG4gKlxuICogVGhlcmUgYXJlIGNlcnRhaW4gY29tcG9uZW50cyB0aGF0IHdhbnQgdG8gY29vcGVyYXRpdmVseSBoYW5kbGUgdGhlIGtleWJvYXJkLlxuICogRm9yIGV4YW1wbGUsIHRoZSBiYXNpYy1hcnJvdy1zZWxlY3Rpb24gYW5kIGJhc2ljLXBhZ2UtZG90cyBjb21wb25lbnRzIGFyZVxuICogb3B0aW9uYWwgY29tcG9uZW50cyB0aGF0IGNhbiBhdWdtZW50IHRoZSBhcHBlYXJhbmNlIGFuZCBiZWhhdmlvciBvZiBhbiBpbm5lclxuICogYmFzaWMtY2Fyb3VzZWwsIGFkZGluZyBhcnJvdyBidXR0b25zIGFuZCBkb3QgYnV0dG9ucywgcmVzcGVjdGl2ZWx5LiBXaGVuXG4gKiB0aGVzZSBjb21wb25lbnRzIGFyZSBuZXN0ZWQgdG9nZXRoZXIsIHRoZXkgZm9ybSBhbiBpbXBsaWNpdCB1bml0IGNhbGxlZCBhXG4gKiAqY29sbGVjdGl2ZSo6XG4gKlxuICogICAgIDxiYXNpYy1hcnJvdy1zZWxlY3Rpb24+XG4gKiAgICAgICA8YmFzaWMtcGFnZS1kb3RzPlxuICogICAgICAgICA8YmFzaWMtY2Fyb3VzZWw+XG4gKiAgICAgICAgICAgLi4uIGltYWdlcywgZXRjLiAuLi5cbiAqICAgICAgICAgPC9iYXNpYy1jYXJvdXNlbD5cbiAqICAgICAgIDwvYmFzaWMtcGFnZS1kb3RzPlxuICogICAgIDwvYmFzaWMtYXJyb3ctc2VsZWN0aW9uPlxuICpcbiAqIEluIHRoaXMgY29uZmlndXJhdGlvbiwgdGhlIHRocmVlIGNvbXBvbmVudHMgd2lsbCBhbGwgaGF2ZSBhIGB0aGlzLmNvbGxlY3RpdmVgXG4gKiByZWZlcmVuY2UgdGhhdCByZWZlcnMgdG8gYSBzaGFyZWQgaW5zdGFuY2Ugb2YgdGhlIGBDb2xsZWN0aXZlYCBjbGFzcy5cbiAqXG4gKiBUaGUgW0tleWJvYXJkXShLZXlib2FyZC5tZCkgbWl4aW4gdGhleSB1c2UgaXMgc2Vuc2l0aXZlIHRvIHRoZSBwcmVzZW5jZSBvZlxuICogdGhlIGNvbGxlY3RpdmUuIEFtb25nIG90aGVyIHRoaW5ncywgaXQgd2lsbCBlbnN1cmUgdGhhdCBvbmx5IHRoZSBvdXRlcm1vc3RcbiAqIGVsZW1lbnQgYWJvdmUg4oCUwqB0aGUgYmFzaWMtYXJyb3ctc2VsZWN0aW9uIOKAlMKgd2lsbCBiZSBhIHRhYiBzdG9wIHRoYXQgY2FuXG4gKiByZWNlaXZlIHRoZSBrZXlib2FyZCBmb2N1cy4gVGhpcyBsZXRzIHRoZSB1c2VyIHBlcmNlaXZlIHRoZSBjb21wb25lbnRcbiAqIGFycmFuZ2VtZW50IGFib3ZlIGFzIGEgc2luZ2xlIHVuaXQuIFRoZSBLZXlib2FyZCBtaXhpbiB3aWxsIGFsc28gZ2l2ZSBlYWNoXG4gKiBlbGVtZW50IGluIHRoZSBjb2xsZWN0aXZlIGEgY2hhbmNlIHRvIHByb2Nlc3MgYW55IGtleWJvYXJkIGV2ZW50cy4gU28sIGV2ZW5cbiAqIHRob3VnaCB0aGUgYmFzaWMtYXJyb3ctc2VsZWN0aW9uIGVsZW1lbnQgd2lsbCBoYXZlIHRoZSBmb2N1cywgdGhlIHN0YW5kYXJkXG4gKiBrZXlib2FyZCBuYXZpZ2F0aW9uIHByb3ZpZGVkIGJ5IGJhc2ljLWNhcm91c2VsIHdpbGwgY29udGludWUgdG8gd29yay5cbiAqXG4gKiBUaGUgW1NlbGVjdGlvbkFyaWFBY3RpdmVdKFNlbGVjdGlvbkFyaWFBY3RpdmUubWQpIG1peGluIGFsc28gcmVzcGVjdHNcbiAqIGNvbGxlY3RpdmVzIHdoZW4gdXNpbmcgdGhlIGBhcmlhLWFjdGl2ZWRlc2NlbmRhbnRgIGFuZCBgcm9sZWAgYXR0cmlidXRlcy5cbiAqIFRob3NlIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgb3V0ZXJtb3N0IGVsZW1lbnQgKGJhc2ljLWFycm93LXNlbGVjdGlvbiwgYWJvdmUpXG4gKiBzbyB0aGF0IEFSSUEgY2FuIGNvcnJlY3RseSB1bmRlcnN0YW5kIHRoZSBhcnJhbmdlbWVudCBvZiB0aGUgZWxlbWVudHMuXG4gKlxuICogWW91IGNhbiBwdXQgZWxlbWVudHMgaW50byBjb2xsZWN0aXZlcyB5b3Vyc2VsZiwgb3IgeW91IGNhbiB1c2UgdGhlXG4gKiBbVGFyZ2V0SW5Db2xsZWN0aXZlXShUYXJnZXRJbkNvbGxlY3RpdmUubWQpIG1peGluLlxuICovXG5jbGFzcyBDb2xsZWN0aXZlIHtcblxuICAvKipcbiAgICogQ3JlYXRlIGEgY29sbGVjdGl2ZS5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRUxlbWVudFtdfSBbZWxlbWVudHNdIC0gSW5pdGlhbCBlbGVtZW50cyB0byBhZGQuXG4gICAqL1xuICBjb25zdHJ1Y3RvciguLi5lbGVtZW50cykge1xuICAgIC8qKlxuICAgICAqIFRoZSBlbGVtZW50cyBpbiB0aGUgY29sbGVjdGl2ZS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudFtdfVxuICAgICAqL1xuICAgIHRoaXMuZWxlbWVudHMgPSBbXTtcbiAgICBlbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4gdGhpcy5hc3NpbWlsYXRlKGVsZW1lbnQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgdGhlIGluZGljYXRlZCB0YXJnZXQgdG8gdGhlIGNvbGxlY3RpdmUuXG4gICAqXG4gICAqIEJ5IGNvbnZlbnRpb24sIGlmIHR3byBlbGVtZW50cyB3YW50cyB0byBwYXJ0aWNpcGF0ZSBpbiBhIGNvbGxlY3RpdmUsIGFuZFxuICAgKiBvbmUgZWxlbWVudCBpcyBhbiBhbmNlc3RvciBvZiB0aGUgb3RoZXIgaW4gdGhlIERPTSwgdGhlIGFuY2VzdG9yIHNob3VsZFxuICAgKiBhc3NpbWlsYXRlIHRoZSBkZXNjZW5kYW50IGluc3RlYWQgb2YgdGhlIG90aGVyIHdheSBhcm91bmQuXG4gICAqXG4gICAqIEFmdGVyIGFzc2ltaWxhdGlvbiwgYW55IGVsZW1lbnQgaW4gdGhlIGNvbGxlY3RpdmUgdGhhdCBkZWZpbmVzIGFcbiAgICogYGNvbGxlY3RpdmVDaGFuZ2VkYCBtZXRob2Qgd2lsbCBoYXZlIHRoYXQgbWV0aG9kIGludm9rZWQuIFRoaXMgYWxsb3dzXG4gICAqIHRoZSBjb2xsZWN0aXZlJ3MgZWxlbWVudHMgdG8gcmVzcG9uZCB0byBjaGFuZ2VzIGluIHRoZSBjb2xsZWN0aXZlLlxuICAgKlxuICAgKiBAcGFyYW0geyhIVE1MRWxlbWVudHxDb2xsZWN0aXZlKX0gdGFyZ2V0IC0gVGhlIGVsZW1lbnQgb3IgY29sbGVjdGl2ZSB0byBhZGQuXG4gICAqL1xuICBhc3NpbWlsYXRlKHRhcmdldCkge1xuICAgIGxldCBjb2xsZWN0aXZlQ2hhbmdlZDtcbiAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgQ29sbGVjdGl2ZSkge1xuICAgICAgY29sbGVjdGl2ZUNoYW5nZWQgPSBhc3NpbWlsYXRlQ29sbGVjdGl2ZSh0aGlzLCB0YXJnZXQpO1xuICAgIH0gZWxzZSBpZiAodGFyZ2V0LmNvbGxlY3RpdmUpIHtcbiAgICAgIC8vIFRhcmdldCBpcyBhbHJlYWR5IHBhcnQgb2YgYSBjb2xsZWN0aXZlLCBhc3NpbWlsYXRlIGl0LlxuICAgICAgY29sbGVjdGl2ZUNoYW5nZWQgPSBhc3NpbWlsYXRlQ29sbGVjdGl2ZSh0aGlzLCB0YXJnZXQuY29sbGVjdGl2ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEFzc2ltaWxhdGUgYW4gaW5kaXZpZHVhbCBlbGVtZW50LlxuICAgICAgY29sbGVjdGl2ZUNoYW5nZWQgPSBhc3NpbWlsYXRlRWxlbWVudCh0aGlzLCB0YXJnZXQpO1xuICAgIH1cblxuICAgIGlmIChjb2xsZWN0aXZlQ2hhbmdlZCkge1xuICAgICAgdGhpcy5pbnZva2VNZXRob2QoJ2NvbGxlY3RpdmVDaGFuZ2VkJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEludm9rZSBhIG1ldGhvZCBvbiBhbGwgZWxlbWVudHMgaW4gdGhlIGNvbGxlY3RpdmUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2QgLSBUaGUgbmFtZSBvZiB0aGUgbWV0aG9kIHRvIGludm9rZSBvbiBhbGwgZWxlbWVudHMuXG4gICAqIEBwYXJhbSB7b2JqZWN0W119IFthcmdzXSAtIFRoZSBhcmd1bWVudHMgdG8gdGhlIG1ldGhvZFxuICAgKi9cbiAgaW52b2tlTWV0aG9kKG1ldGhvZCwgLi4uYXJncykge1xuICAgIC8vIEludm9rZSBmcm9tIGlubmVybW9zdCB0byBvdXRlcm1vc3QuXG4gICAgbGV0IGVsZW1lbnRzID0gdGhpcy5lbGVtZW50cztcbiAgICBmb3IgKGxldCBpID0gZWxlbWVudHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCBlbGVtZW50ID0gZWxlbWVudHNbaV07XG4gICAgICBpZiAoZWxlbWVudFttZXRob2RdKSB7XG4gICAgICAgIGVsZW1lbnRbbWV0aG9kXS5hcHBseShlbGVtZW50LCBhcmdzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhlIG91dGVybW9zdCBlbGVtZW50IGluIHRoZSBjb2xsZWN0aXZlLlxuICAgKiBCeSBjb252ZW50aW9uLCB0aGlzIGlzIHRoZSBmaXJzdCBlbGVtZW50IGluIHRoZSBgZWxlbWVudHNgIGFycmF5LlxuICAgKi9cbiAgZ2V0IG91dGVybW9zdEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudHNbMF07XG4gIH1cblxufVxuXG5cbi8vIFRoZSBmaXJzdCBjb2xsZWN0aXZlIGFzc2ltaWxhdGVzIHRoZSBzZWNvbmQuXG5mdW5jdGlvbiBhc3NpbWlsYXRlQ29sbGVjdGl2ZShjb2xsZWN0aXZlMSwgY29sbGVjdGl2ZTIpIHtcbiAgaWYgKGNvbGxlY3RpdmUxID09PSBjb2xsZWN0aXZlMikge1xuICAgIC8vIENvbGxlY3RpdmVzIGFyZSBzYW1lOyBpZ25vcmUuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgbGV0IGVsZW1lbnRzID0gY29sbGVjdGl2ZTIuZWxlbWVudHM7XG5cbiAgLy8gT2xkIGNvbGxlY3RpdmUgd2lsbCBubyBsb25nZXIgaGF2ZSBhbnkgZWxlbWVudHMgb2YgaXRzIG93bi5cbiAgY29sbGVjdGl2ZTIuZWxlbWVudHMgPSBbXTtcblxuICBlbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIGFzc2ltaWxhdGVFbGVtZW50KGNvbGxlY3RpdmUxLCBlbGVtZW50KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cblxuLy8gQXNzaW1pbGF0ZSB0aGUgaW5kaWNhdGVkIGVsZW1lbnQuXG5mdW5jdGlvbiBhc3NpbWlsYXRlRWxlbWVudChjb2xsZWN0aXZlLCBlbGVtZW50KSB7XG4gIGlmIChlbGVtZW50LmNvbGxlY3RpdmUgPT09IGNvbGxlY3RpdmUpIHtcbiAgICAvLyBBbHJlYWR5IHBhcnQgb2YgdGhpcyBjb2xsZWN0aXZlLlxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBlbGVtZW50LmNvbGxlY3RpdmUgPSBjb2xsZWN0aXZlO1xuICBjb2xsZWN0aXZlLmVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gIHJldHVybiB0cnVlO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IENvbGxlY3RpdmU7XG4iLCIvKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIENvbXBvc2FibGUuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB0byBtYWtlIGEgY2xhc3MgbW9yZSBlYXNpbHkgY29tcG9zYWJsZSB3aXRoIG90aGVyIG1peGlucy5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBjb250cmlidXRlcyBhIGBjb21wb3NlYCBtZXRob2QgdGhhdCBhcHBsaWVzIGEgc2V0IG9mIG1peGluXG4gICAqIGZ1bmN0aW9ucyBhbmQgcmV0dXJucyB0aGUgcmVzdWx0aW5nIG5ldyBjbGFzcy4gVGhpcyBzdWdhciBjYW4gbWFrZSB0aGVcbiAgICogYXBwbGljYXRpb24gb2YgbWFueSBtaXhpbnMgYXQgb25jZSBlYXNpZXIgdG8gcmVhZC5cbiAgICovXG4gIGNsYXNzIENvbXBvc2FibGUgZXh0ZW5kcyBiYXNlIHtcblxuICAgIC8qKlxuICAgICAqIEFwcGx5IGEgc2V0IG9mIG1peGluIGZ1bmN0aW9ucyBvciBtaXhpbiBvYmplY3RzIHRvIHRoZSBwcmVzZW50IGNsYXNzIGFuZFxuICAgICAqIHJldHVybiB0aGUgbmV3IGNsYXNzLlxuICAgICAqXG4gICAgICogSW5zdGVhZCBvZiB3cml0aW5nOlxuICAgICAqXG4gICAgICogICAgIGxldCBNeUNsYXNzID0gTWl4aW4xKE1peGluMihNaXhpbjMoTWl4aW40KE1peGluNShCYXNlQ2xhc3MpKSkpKTtcbiAgICAgKlxuICAgICAqIFlvdSBjYW4gd3JpdGU6XG4gICAgICpcbiAgICAgKiAgICAgbGV0IE15Q2xhc3MgPSBDb21wb3NhYmxlKEJhc2VDbGFzcykuY29tcG9zZShcbiAgICAgKiAgICAgICBNaXhpbjEsXG4gICAgICogICAgICAgTWl4aW4yLFxuICAgICAqICAgICAgIE1peGluMyxcbiAgICAgKiAgICAgICBNaXhpbjQsXG4gICAgICogICAgICAgTWl4aW41XG4gICAgICogICAgICk7XG4gICAgICpcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGNhbiBhbHNvIHRha2UgbWl4aW4gb2JqZWN0cy4gQSBtaXhpbiBvYmplY3QgaXMganVzdCBhXG4gICAgICogc2hvcnRoYW5kIGZvciBhIG1peGluIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBhIG5ldyBzdWJjbGFzcyB3aXRoIHRoZSBnaXZlblxuICAgICAqIG1lbWJlcnMuIFRoZSBtaXhpbiBvYmplY3QncyBtZW1iZXJzIGFyZSAqbm90KiBjb3BpZWQgZGlyZWN0bHkgb250byB0aGVcbiAgICAgKiBwcm90b3R5cGUgb2YgdGhlIGJhc2UgY2xhc3MsIGFzIHdpdGggdHJhZGl0aW9uYWwgbWl4aW5zLlxuICAgICAqXG4gICAgICogSW4gYWRkaXRpb24gdG8gcHJvdmlkaW5nIHN5bnRhY3RpYyBzdWdhciwgdGhpcyBtaXhpbiBjYW4gYmUgdXNlZCB0b1xuICAgICAqIGRlZmluZSBhIGNsYXNzIGluIEVTNSwgd2hpY2ggbGFja3MgRVM2J3MgYGNsYXNzYCBrZXl3b3JkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHsuLi5taXhpbnN9IG1peGlucyAtIEEgc2V0IG9mIG1peGluIGZ1bmN0aW9ucyBvciBvYmplY3RzIHRvIGFwcGx5LlxuICAgICAqL1xuICAgIHN0YXRpYyBjb21wb3NlKC4uLm1peGlucykge1xuICAgICAgLy8gV2UgY3JlYXRlIGEgbmV3IHN1YmNsYXNzIGZvciBlYWNoIG1peGluIGluIHR1cm4uIFRoZSByZXN1bHQgYmVjb21lc1xuICAgICAgLy8gdGhlIGJhc2UgY2xhc3MgZXh0ZW5kZWQgYnkgYW55IHN1YnNlcXVlbnQgbWl4aW5zLiBJdCB0dXJucyBvdXQgdGhhdFxuICAgICAgLy8gd2UgY2FuIHVzZSBBcnJheS5yZWR1Y2UoKSB0byBjb25jaXNlbHkgZXhwcmVzcyB0aGlzLCB1c2luZyB0aGUgY3VycmVudFxuICAgICAgLy8gb2JqZWN0IGFzIHRoZSBzZWVkIGZvciByZWR1Y2UoKS5cbiAgICAgIHJldHVybiBtaXhpbnMucmVkdWNlKGNvbXBvc2VDbGFzcywgdGhpcyk7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gQ29tcG9zYWJsZTtcbn07XG5cblxuLy8gUHJvcGVydGllcyBkZWZpbmVkIGJ5IE9iamVjdCB0aGF0IHdlIGRvbid0IHdhbnQgdG8gbWl4aW4uXG5jb25zdCBOT05fTUlYQUJMRV9PQkpFQ1RfUFJPUEVSVElFUyA9IFtcbiAgJ2NvbnN0cnVjdG9yJ1xuXTtcblxuLypcbiAqIEFwcGx5IHRoZSBtaXhpbiB0byB0aGUgZ2l2ZW4gYmFzZSBjbGFzcyB0byByZXR1cm4gYSBuZXcgY2xhc3MuXG4gKiBUaGUgbWl4aW4gY2FuIGVpdGhlciBiZSBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgbW9kaWZpZWQgY2xhc3MsIG9yIGFcbiAqIHBsYWluIG9iamVjdCB3aG9zZSBtZW1iZXJzIHdpbGwgYmUgY29waWVkIHRvIHRoZSBuZXcgY2xhc3MnIHByb3RvdHlwZS5cbiAqL1xuZnVuY3Rpb24gY29tcG9zZUNsYXNzKGJhc2UsIG1peGluKSB7XG4gIGlmICh0eXBlb2YgbWl4aW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBNaXhpbiBmdW5jdGlvblxuICAgIHJldHVybiBtaXhpbihiYXNlKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBNaXhpbiBvYmplY3RcbiAgICBjbGFzcyBTdWJjbGFzcyBleHRlbmRzIGJhc2Uge31cbiAgICBjb3B5T3duUHJvcGVydGllcyhtaXhpbiwgU3ViY2xhc3MucHJvdG90eXBlLCBOT05fTUlYQUJMRV9PQkpFQ1RfUFJPUEVSVElFUyk7XG4gICAgcmV0dXJuIFN1YmNsYXNzO1xuICB9XG59XG5cblxuLypcbiAqIENvcHkgdGhlIGdpdmVuIHByb3BlcnRpZXMvbWV0aG9kcyB0byB0aGUgdGFyZ2V0LlxuICogUmV0dXJuIHRoZSB1cGRhdGVkIHRhcmdldC5cbiAqL1xuZnVuY3Rpb24gY29weU93blByb3BlcnRpZXMoc291cmNlLCB0YXJnZXQsIGlnbm9yZVByb3BlcnR5TmFtZXMgPSBbXSkge1xuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2UpLmZvckVhY2gobmFtZSA9PiB7XG4gICAgaWYgKGlnbm9yZVByb3BlcnR5TmFtZXMuaW5kZXhPZihuYW1lKSA8IDApIHtcbiAgICAgIGxldCBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIG5hbWUpO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHRhcmdldDtcbn1cbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi9jcmVhdGVTeW1ib2wnO1xuaW1wb3J0IHRvZ2dsZUNsYXNzIGZyb20gJy4vdG9nZ2xlQ2xhc3MnO1xuXG5cbi8vIFN5bWJvbHMgZm9yIHByaXZhdGUgZGF0YSBtZW1iZXJzIG9uIGFuIGVsZW1lbnQuXG5jb25zdCBpdGVtc1N5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnaXRlbXMnKTtcbmNvbnN0IGl0ZW1Jbml0aWFsaXplZFN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnaXRlbUluaXRpYWxpemVkJyk7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBDb250ZW50QXNJdGVtcy4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIG1hcHMgY29udGVudCBzZW1hbnRpY3MgKGVsZW1lbnRzKSB0byBsaXN0IGl0ZW0gc2VtYW50aWNzLlxuICAgKlxuICAgKiBJdGVtcyBkaWZmZXIgZnJvbSBlbGVtZW50IGNvbnRlbnRzIGluIHNldmVyYWwgd2F5czpcbiAgICpcbiAgICogKiBUaGV5IGFyZSBvZnRlbiByZWZlcmVuY2VkIHZpYSBpbmRleC5cbiAgICogKiBUaGV5IG1heSBoYXZlIGEgc2VsZWN0aW9uIHN0YXRlLlxuICAgKiAqIEl0J3MgY29tbW9uIHRvIGRvIHdvcmsgdG8gaW5pdGlhbGl6ZSB0aGUgYXBwZWFyYW5jZSBvciBzdGF0ZSBvZiBhIG5ld1xuICAgKiAgIGl0ZW0uXG4gICAqICogQXV4aWxpYXJ5IGludmlzaWJsZSBjaGlsZCBlbGVtZW50cyBhcmUgZmlsdGVyZWQgb3V0IGFuZCBub3QgY291bnRlZCBhc1xuICAgKiAgIGl0ZW1zLiBBdXhpbGlhcnkgZWxlbWVudHMgaW5jbHVkZSBsaW5rLCBzY3JpcHQsIHN0eWxlLCBhbmQgdGVtcGxhdGVcbiAgICogICBlbGVtZW50cy4gVGhpcyBmaWx0ZXJpbmcgZW5zdXJlcyB0aGF0IHRob3NlIGF1eGlsaWFyeSBlbGVtZW50cyBjYW4gYmVcbiAgICogICB1c2VkIGluIG1hcmt1cCBpbnNpZGUgb2YgYSBsaXN0IHdpdGhvdXQgYmVpbmcgdHJlYXRlZCBhcyBsaXN0IGl0ZW1zLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGV4cGVjdHMgYSBjb21wb25lbnQgdG8gcHJvdmlkZSBhIGBjb250ZW50YCBwcm9wZXJ0eSByZXR1cm5pbmcgYVxuICAgKiByYXcgc2V0IG9mIGVsZW1lbnRzLiBZb3UgY2FuIHByb3ZpZGUgdGhhdCB5b3Vyc2VsZiwgb3IgdXNlIHRoZVxuICAgKiBbRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudF0oRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudC5tZCkgbWl4aW4uXG4gICAqXG4gICAqIFRoZSBtb3N0IGNvbW1vbmx5IHJlZmVyZW5jZWQgcHJvcGVydHkgZGVmaW5lZCBieSB0aGlzIG1peGluIGlzIHRoZSBgaXRlbXNgXG4gICAqIHByb3BlcnR5LiBUbyBhdm9pZCBoYXZpbmcgdG8gZG8gd29yayBlYWNoIHRpbWUgdGhhdCBwcm9wZXJ0eSBpcyByZXF1ZXN0ZWQsXG4gICAqIHRoaXMgbWl4aW4gc3VwcG9ydHMgYW4gb3B0aW1pemVkIG1vZGUuIElmIHlvdSBpbnZva2UgdGhlIGBjb250ZW50Q2hhbmdlZGBcbiAgICogbWV0aG9kIHdoZW4gdGhlIHNldCBvZiBpdGVtcyBjaGFuZ2VzLCB0aGUgbWl4aW4gY29uY2x1ZGVzIHRoYXQgeW91J2xsIHRha2VcbiAgICogY2FyZSBvZiBub3RpZnlpbmcgaXQgb2YgZnV0dXJlIGNoYW5nZXMsIGFuZCB0dXJucyBvbiB0aGUgb3B0aW1pemF0aW9uLiBXaXRoXG4gICAqIHRoYXQgb24sIHRoZSBtaXhpbiBzYXZlcyBhIHJlZmVyZW5jZSB0byB0aGUgY29tcHV0ZWQgc2V0IG9mIGl0ZW1zLCBhbmQgd2lsbFxuICAgKiByZXR1cm4gdGhhdCBpbW1lZGlhdGVseSBvbiBzdWJzZXF1ZW50IGNhbGxzIHRvIHRoZSBgaXRlbXNgIHByb3BlcnR5LiBJZiB5b3VcbiAgICogdXNlIHRoaXMgbWl4aW4gaW4gY29uanVuY3Rpb24gd2l0aCB0aGVcbiAgICogW0Rpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnRdKERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQubWQpIG1peGluLCB0aGVcbiAgICogYGNvbnRlbnRDaGFuZ2VkYCBtZXRob2Qgd2lsbCBiZSBpbnZva2VkIGZvciB5b3Ugd2hlbiB0aGUgZWxlbWVudCdzIGNoaWxkcmVuXG4gICAqIGNoYW5nZSwgdHVybmluZyBvbiB0aGUgb3B0aW1pemF0aW9uIGF1dG9tYXRpY2FsbHkuXG4gICAqL1xuICBjbGFzcyBDb250ZW50QXNJdGVtcyBleHRlbmRzIGJhc2Uge1xuXG4gICAgLyoqXG4gICAgICogQXBwbHkgdGhlIHNlbGVjdGlvbiBzdGF0ZSB0byBhIHNpbmdsZSBpdGVtLlxuICAgICAqXG4gICAgICogSW52b2tlIHRoaXMgbWV0aG9kIHRvIHNpZ25hbCB0aGF0IHRoZSBzZWxlY3RlZCBzdGF0ZSBvZiB0aGUgaW5kaWNhdGVkIGl0ZW1cbiAgICAgKiBoYXMgY2hhbmdlZC4gQnkgZGVmYXVsdCwgdGhpcyBhcHBsaWVzIGEgYHNlbGVjdGVkYCBDU1MgY2xhc3MgaWYgdGhlIGl0ZW1cbiAgICAgKiBpcyBzZWxlY3RlZCwgYW5kIHJlbW92ZWQgaXQgaWYgbm90IHNlbGVjdGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaXRlbSAtIFRoZSBpdGVtIHdob3NlIHNlbGVjdGlvbiBzdGF0ZSBoYXMgY2hhbmdlZC5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNlbGVjdGVkIC0gVHJ1ZSBpZiB0aGUgaXRlbSBpcyBzZWxlY3RlZCwgZmFsc2UgaWYgbm90LlxuICAgICAqL1xuICAgIGFwcGx5U2VsZWN0aW9uKGl0ZW0sIHNlbGVjdGVkKSB7XG4gICAgICBpZiAoc3VwZXIuYXBwbHlTZWxlY3Rpb24pIHsgc3VwZXIuYXBwbHlTZWxlY3Rpb24oaXRlbSwgc2VsZWN0ZWQpOyB9XG4gICAgICB0b2dnbGVDbGFzcyhpdGVtLCAnc2VsZWN0ZWQnLCBzZWxlY3RlZCk7XG4gICAgfVxuXG4gICAgY29udGVudENoYW5nZWQoKSB7XG4gICAgICBpZiAoc3VwZXIuY29udGVudENoYW5nZWQpIHsgc3VwZXIuY29udGVudENoYW5nZWQoKTsgfVxuXG4gICAgICAvLyBTaW5jZSB3ZSBnb3QgdGhlIGNvbnRlbnRDaGFuZ2VkIGNhbGwsIHdlJ2xsIGFzc3VtZSB3ZSdsbCBiZSBub3RpZmllZCBpZlxuICAgICAgLy8gdGhlIHNldCBvZiBpdGVtcyBjaGFuZ2VzIGxhdGVyLiBXZSB0dXJuIG9uIG1lbW9pemF0aW9uIG9mIHRoZSBpdGVtc1xuICAgICAgLy8gcHJvcGVydHkgYnkgc2V0dGluZyBvdXIgaW50ZXJuYWwgcHJvcGVydHkgdG8gbnVsbCAoaW5zdGVhZCBvZlxuICAgICAgLy8gdW5kZWZpbmVkKS5cbiAgICAgIHRoaXNbaXRlbXNTeW1ib2xdID0gbnVsbDtcblxuICAgICAgdGhpcy5pdGVtc0NoYW5nZWQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIHdoZW5ldmVyIGEgbmV3IGl0ZW0gaXMgYWRkZWQgdG8gdGhlIGxpc3QuXG4gICAgICpcbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuIFlvdSBjYW4gb3ZlcnJpZGVcbiAgICAgKiB0aGlzIHRvIHBlcmZvcm0gcGVyLWl0ZW0gaW5pdGlhbGl6YXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpdGVtIC0gVGhlIGl0ZW0gdGhhdCB3YXMgYWRkZWQuXG4gICAgICovXG4gICAgaXRlbUFkZGVkKGl0ZW0pIHtcbiAgICAgIGlmIChzdXBlci5pdGVtQWRkZWQpIHsgc3VwZXIuaXRlbUFkZGVkKGl0ZW0pOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgc2V0IG9mIGl0ZW1zIGluIHRoZSBsaXN0LiBTZWUgdGhlIHRvcC1sZXZlbCBkb2N1bWVudGF0aW9uIGZvclxuICAgICAqIG1peGluIGZvciBhIGRlc2NyaXB0aW9uIG9mIGhvdyBpdGVtcyBkaWZmZXIgZnJvbSBwbGFpbiBjb250ZW50LlxuICAgICAqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50W119XG4gICAgICovXG4gICAgZ2V0IGl0ZW1zKCkge1xuICAgICAgbGV0IGl0ZW1zO1xuICAgICAgaWYgKHRoaXNbaXRlbXNTeW1ib2xdID09IG51bGwpIHtcbiAgICAgICAgaXRlbXMgPSBmaWx0ZXJBdXhpbGlhcnlFbGVtZW50cyh0aGlzLmNvbnRlbnQpO1xuICAgICAgICAvLyBOb3RlOiB0ZXN0IGZvciAqZXF1YWxpdHkqIHdpdGggbnVsbDsgZG9uJ3QgdHJlYXQgdW5kZWZpbmVkIGFzIGEgbWF0Y2guXG4gICAgICAgIGlmICh0aGlzW2l0ZW1zU3ltYm9sXSA9PT0gbnVsbCkge1xuICAgICAgICAgIC8vIE1lbW9pemUgdGhlIHNldCBvZiBpdGVtcy5cbiAgICAgICAgICB0aGlzW2l0ZW1zU3ltYm9sXSA9IGl0ZW1zO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBSZXR1cm4gdGhlIG1lbW9pemVkIGl0ZW1zLlxuICAgICAgICBpdGVtcyA9IHRoaXNbaXRlbXNTeW1ib2xdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbiB0aGUgdW5kZXJseWluZyBjb250ZW50cyBjaGFuZ2UuIEl0IGlzIGFsc29cbiAgICAgKiBpbnZva2VkIG9uIGNvbXBvbmVudCBpbml0aWFsaXphdGlvbiDigJMgc2luY2UgdGhlIGl0ZW1zIGhhdmUgXCJjaGFuZ2VkXCIgZnJvbVxuICAgICAqIGJlaW5nIG5vdGhpbmcuXG4gICAgICovXG4gICAgaXRlbXNDaGFuZ2VkKCkge1xuICAgICAgaWYgKHN1cGVyLml0ZW1zQ2hhbmdlZCkgeyBzdXBlci5pdGVtc0NoYW5nZWQoKTsgfVxuXG4gICAgICAvLyBQZXJmb3JtIHBlci1pdGVtIGluaXRpYWxpemF0aW9uLlxuICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoIWl0ZW1baXRlbUluaXRpYWxpemVkU3ltYm9sXSkge1xuICAgICAgICAgIHRoaXMuaXRlbUFkZGVkKGl0ZW0pO1xuICAgICAgICAgIGl0ZW1baXRlbUluaXRpYWxpemVkU3ltYm9sXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdpdGVtcy1jaGFuZ2VkJykpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogQGV2ZW50IGl0ZW1zLWNoYW5nZWRcbiAgICAgKlxuICAgICAqIFRoaXMgZXZlbnQgaXMgcmFpc2VkIHdoZW4gdGhlIHNldCBvZiBpdGVtcyBjaGFuZ2VzLlxuICAgICAqL1xuICB9XG5cbiAgcmV0dXJuIENvbnRlbnRBc0l0ZW1zO1xufTtcblxuXG4vLyBSZXR1cm4gdGhlIGdpdmVuIGVsZW1lbnRzLCBmaWx0ZXJpbmcgb3V0IGF1eGlsaWFyeSBlbGVtZW50cyB0aGF0IGFyZW4ndFxuLy8gdHlwaWNhbGx5IHZpc2libGUuIEl0ZW1zIHdoaWNoIGFyZSBub3QgZWxlbWVudHMgYXJlIHJldHVybmVkIGFzIGlzLlxuZnVuY3Rpb24gZmlsdGVyQXV4aWxpYXJ5RWxlbWVudHMoaXRlbXMpIHtcbiAgbGV0IGF1eGlsaWFyeVRhZ3MgPSBbXG4gICAgJ2xpbmsnLFxuICAgICdzY3JpcHQnLFxuICAgICdzdHlsZScsXG4gICAgJ3RlbXBsYXRlJ1xuICBdO1xuICByZXR1cm4gW10uZmlsdGVyLmNhbGwoaXRlbXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICByZXR1cm4gIWl0ZW0ubG9jYWxOYW1lIHx8IGF1eGlsaWFyeVRhZ3MuaW5kZXhPZihpdGVtLmxvY2FsTmFtZSkgPCAwO1xuICB9KTtcbn1cblxuXG4vKipcbiAqIEZpcmVzIHdoZW4gdGhlIGl0ZW1zIGluIHRoZSBsaXN0IGNoYW5nZS5cbiAqXG4gKiBAbWVtYmVyb2YgQ29udGVudEFzSXRlbXNcbiAqIEBldmVudCBpdGVtcy1jaGFuZ2VkXG4gKi9cbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi9jcmVhdGVTeW1ib2wnO1xuXG5cbi8vIFN5bWJvbHMgZm9yIHByaXZhdGUgZGF0YSBtZW1iZXJzIG9uIGFuIGVsZW1lbnQuXG5jb25zdCB0YXJnZXRTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3RhcmdldCcpO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggQ29udGVudEZpcnN0Q2hpbGRUYXJnZXQuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB0aGF0IGRlZmluZXMgdGhlIHRhcmdldCBvZiBhIGNvbXBvbmVudCDigJQgdGhlIGVsZW1lbnQgdGhlIGNvbXBvbmVudCBpc1xuICAgKiBtYW5hZ2luZyBvciBzb21laG93IHJlc3BvbnNpYmxlIGZvciDigJQgYXMgaXRzIGZpcnN0IGNoaWxkLlxuICAgKlxuICAgKiBTb21lIGNvbXBvbmVudHMgc2VydmUgdG8gZGVjb3JhdGUgb3IgbW9kaWZ5IG90aGVyIGVsZW1lbnRzLiBBIGNvbW1vblxuICAgKiBwYXR0ZXJuIGlzIHRvIGhhdmUgb25lIGNvbXBvbmVudCB3cmFwIGFub3RoZXIsIGFuZCBoYXZlIHRoZSBvdXRlciwgcGFyZW50XG4gICAqIGNvbXBvbmVudCBpbXBsaWNpdGx5IG1vZGlmeSB0aGUgY2hpbGQuIFRoaXMgbWl4aW4gZmFjaWxpdGF0ZXMgdGhpcyBieVxuICAgKiBpbXBsaWNpdGx5IHRha2luZyBhbiBlbGVtZW50J3MgZmlyc3QgY2hpbGQgYXMgaXRzIFwidGFyZ2V0XCIuXG4gICAqXG4gICAqIEV4YW1wbGU6XG4gICAqXG4gICAqICAgICA8b3V0ZXItZWxlbWVudD5cbiAgICogICAgICAgPGlubmVyLWVsZW1lbnQ+PC9pbm5lci1lbGVtZW50PlxuICAgKiAgICAgPC9vdXRlci1lbGVtZW50PlxuICAgKlxuICAgKiBJZiBgb3V0ZXItZWxlbWVudGAgdXNlcyB0aGlzIG1peGluLCB0aGVuIGl0cyBgdGFyZ2V0YCBwcm9wZXJ0eSB3aWxsIGJlXG4gICAqIHNldCB0byBwb2ludCB0byB0aGUgYGlubmVyLWVsZW1lbnRgLCBiZWNhdXNlIHRoYXQgaXMgaXRzIGZpcnN0IGNoaWxkLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGV4cGVjdHMgYSBgY29udGVudGAgcHJvcGVydHkgdGhhdCByZXR1cm5zIHRoZSBlbGVtZW50J3MgY29udGVudC5cbiAgICogWW91IGNhbiBpbXBsZW1lbnQgdGhhdCB5b3Vyc2VsZiwgb3IgdXNlIHRoZVxuICAgKiBbRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudF0oRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudC5tZCkgbWl4aW4uXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gY2FuIGJlIGNvbWJpbmVkIHdpdGggdGhlXG4gICAqIFtUYXJnZXRJbkNvbGxlY3RpdmVdKFRhcmdldEluQ29sbGVjdGl2ZS5tZCkgbWl4aW4gdG8gaGF2ZSBhIGNvbXBvbmVudFxuICAgKiBwYXJ0aWNpcGF0ZSBpbiBjb2xsZWN0aXZlIGtleWJvYXJkIGhhbmRsaW5nLlxuICAgKi9cbiAgY2xhc3MgQ29udGVudEZpcnN0Q2hpbGRUYXJnZXQgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbnRlbnRDaGFuZ2VkKCkge1xuICAgICAgaWYgKHN1cGVyLmNvbnRlbnRDaGFuZ2VkKSB7IHN1cGVyLmNvbnRlbnRDaGFuZ2VkKCk7IH1cbiAgICAgIGxldCBjb250ZW50ID0gdGhpcy5jb250ZW50O1xuICAgICAgbGV0IHRhcmdldCA9IGNvbnRlbnQgJiYgY29udGVudFswXTtcbiAgICAgIC8vIEEgY29tcG9uZW50IHVzaW5nIGEgdGFyZ2V0IHdpbGwgbGlrZWx5IGRvIGEgYnVuY2ggb2Ygd29yayB3aGVuIHRoZVxuICAgICAgLy8gdGFyZ2V0IGNoYW5nZXMsIHNvIG9ubHkgc2V0IHRoZSB0YXJnZXQgaWYgaXQncyBhY3R1YWxseSBjaGFuZ2VkLlxuICAgICAgaWYgKHRhcmdldCAmJiB0YXJnZXQgIT09IHRoaXMudGFyZ2V0KSB7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMvc2V0cyB0aGUgY3VycmVudCB0YXJnZXQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICBnZXQgdGFyZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXNbdGFyZ2V0U3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IHRhcmdldChlbGVtZW50KSB7XG4gICAgICB0aGlzW3RhcmdldFN5bWJvbF0gPSBlbGVtZW50O1xuICAgICAgaWYgKCd0YXJnZXQnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnRhcmdldCA9IGVsZW1lbnQ7IH1cbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBDb250ZW50Rmlyc3RDaGlsZFRhcmdldDtcbn07XG4iLCIvKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIERpcmVjdGlvblNlbGVjdGlvbi4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIG1hcHMgZGlyZWN0aW9uIHNlbWFudGljcyAoZ29MZWZ0LCBnb1JpZ2h0LCBldGMuKSB0byBzZWxlY3Rpb25cbiAgICogc2VtYW50aWNzIChzZWxlY3RQcmV2aW91cywgc2VsZWN0TmV4dCwgZXRjLikuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gY2FuIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGVcbiAgICogW0tleWJvYXJkRGlyZWN0aW9uXShLZXlib2FyZERpcmVjdGlvbi5tZCkgbWl4aW4gKHdoaWNoIG1hcHMga2V5Ym9hcmQgZXZlbnRzXG4gICAqIHRvIGRpcmVjdGlvbnMpIGFuZCBhIG1peGluIHRoYXQgaGFuZGxlcyBzZWxlY3Rpb24gbGlrZVxuICAgKiBbU2luZ2xlU2VsZWN0aW9uXShTaW5nbGVTZWxlY3Rpb24ubWQpLlxuICAgKi9cbiAgY2xhc3MgRGlyZWN0aW9uU2VsZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBnb0Rvd24oKSB7XG4gICAgICBpZiAoc3VwZXIuZ29Eb3duKSB7IHN1cGVyLmdvRG93bigpOyB9XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3ROZXh0KCk7XG4gICAgfVxuXG4gICAgZ29FbmQoKSB7XG4gICAgICBpZiAoc3VwZXIuZ29FbmQpIHsgc3VwZXIuZ29FbmQoKTsgfVxuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0TGFzdCgpO1xuICAgIH1cblxuICAgIGdvTGVmdCgpIHtcbiAgICAgIGlmIChzdXBlci5nb0xlZnQpIHsgc3VwZXIuZ29MZWZ0KCk7IH1cbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdFByZXZpb3VzKCk7XG4gICAgfVxuXG4gICAgZ29SaWdodCgpIHtcbiAgICAgIGlmIChzdXBlci5nb1JpZ2h0KSB7IHN1cGVyLmdvUmlnaHQoKTsgfVxuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0TmV4dCgpO1xuICAgIH1cblxuICAgIGdvU3RhcnQoKSB7XG4gICAgICBpZiAoc3VwZXIuZ29TdGFydCkgeyBzdXBlci5nb1N0YXJ0KCk7IH1cbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdEZpcnN0KCk7XG4gICAgfVxuXG4gICAgZ29VcCgpIHtcbiAgICAgIGlmIChzdXBlci5nb1VwKSB7IHN1cGVyLmdvVXAoKTsgfVxuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0UHJldmlvdXMoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IGltcGxlbWVudGF0aW9uLiBUaGlzIHdpbGwgdHlwaWNhbGx5IGJlIGhhbmRsZWQgYnkgb3RoZXIgbWl4aW5zLlxuICAgIGdldCBzZWxlY3RlZEZyYWN0aW9uKCkge1xuICAgICAgcmV0dXJuIHN1cGVyLnNlbGVjdGVkRnJhY3Rpb247XG4gICAgfVxuICAgIHNldCBzZWxlY3RlZEZyYWN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoJ3NlbGVjdGVkRnJhY3Rpb24nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkRnJhY3Rpb24gPSB2YWx1ZTsgfVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgaW1wbGVtZW50YXRpb24uIFRoaXMgd2lsbCB0eXBpY2FsbHkgYmUgaGFuZGxlZCBieSBvdGhlciBtaXhpbnMuXG4gICAgc2VsZWN0Rmlyc3QoKSB7XG4gICAgICBpZiAoc3VwZXIuc2VsZWN0Rmlyc3QpIHsgcmV0dXJuIHN1cGVyLnNlbGVjdEZpcnN0KCk7IH1cbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IGltcGxlbWVudGF0aW9uLiBUaGlzIHdpbGwgdHlwaWNhbGx5IGJlIGhhbmRsZWQgYnkgb3RoZXIgbWl4aW5zLlxuICAgIHNlbGVjdExhc3QoKSB7XG4gICAgICBpZiAoc3VwZXIuc2VsZWN0TGFzdCkgeyByZXR1cm4gc3VwZXIuc2VsZWN0TGFzdCgpOyB9XG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCBpbXBsZW1lbnRhdGlvbi4gVGhpcyB3aWxsIHR5cGljYWxseSBiZSBoYW5kbGVkIGJ5IG90aGVyIG1peGlucy5cbiAgICBzZWxlY3ROZXh0KCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdE5leHQpIHsgcmV0dXJuIHN1cGVyLnNlbGVjdE5leHQoKTsgfVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgaW1wbGVtZW50YXRpb24uIFRoaXMgd2lsbCB0eXBpY2FsbHkgYmUgaGFuZGxlZCBieSBvdGhlciBtaXhpbnMuXG4gICAgc2VsZWN0UHJldmlvdXMoKSB7XG4gICAgICBpZiAoc3VwZXIuc2VsZWN0UHJldmlvdXMpIHsgcmV0dXJuIHN1cGVyLnNlbGVjdFByZXZpb3VzKCk7IH1cbiAgICB9XG5cbiAgICAvLyBNYXAgZHJhZyB0cmF2ZWwgZnJhY3Rpb24gdG8gc2VsZWN0aW9uIGZyYWN0aW9uLlxuICAgIGdldCB0cmF2ZWxGcmFjdGlvbigpIHtcbiAgICAgIHJldHVybiBzdXBlci50cmF2ZWxGcmFjdGlvbjtcbiAgICB9XG4gICAgc2V0IHRyYXZlbEZyYWN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoJ3RyYXZlbEZyYWN0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci50cmF2ZWxGcmFjdGlvbiA9IHZhbHVlOyB9XG4gICAgICB0aGlzLnNlbGVjdGVkRnJhY3Rpb24gPSB2YWx1ZTtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBEaXJlY3Rpb25TZWxlY3Rpb247XG59O1xuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBEaXN0cmlidXRlZENoaWxkcmVuLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggZGVmaW5lcyBoZWxwZXJzIGZvciBhY2Nlc3NpbmcgYSBjb21wb25lbnQncyBkaXN0cmlidXRlZFxuICAgKiBjaGlsZHJlbiBhcyBhIGZsYXR0ZW5lZCBhcnJheSBvciBzdHJpbmcuXG4gICAqXG4gICAqIFRoZSBzdGFuZGFyZCBET00gQVBJIHByb3ZpZGVzIHNldmVyYWwgd2F5cyBvZiBhY2Nlc3NpbmcgY2hpbGQgY29udGVudDpcbiAgICogYGNoaWxkcmVuYCwgYGNoaWxkTm9kZXNgLCBhbmQgYHRleHRDb250ZW50YC4gTm9uZSBvZiB0aGVzZSBmdW5jdGlvbnMgYXJlXG4gICAqIFNoYWRvdyBET00gYXdhcmUuIFRoaXMgbWl4aW4gZGVmaW5lcyB2YXJpYXRpb25zIG9mIHRob3NlIGZ1bmN0aW9ucyB0aGF0XG4gICAqICphcmUqIFNoYWRvdyBET00gYXdhcmUuXG4gICAqXG4gICAqIEV4YW1wbGU6IHlvdSBjcmVhdGUgYSBjb21wb25lbnQgYDxjb3VudC1jaGlsZHJlbj5gIHRoYXQgZGlzcGxheXMgYSBudW1iZXJcbiAgICogZXF1YWwgdG8gdGhlIG51bWJlciBvZiBjaGlsZHJlbiBwbGFjZWQgaW5zaWRlIHRoYXQgY29tcG9uZW50LiBJZiBzb21lb25lXG4gICAqIGluc3RhbnRpYXRlcyB5b3VyIGNvbXBvbmVudCBsaWtlOlxuICAgKlxuICAgKiAgICAgPGNvdW50LWNoaWxkcmVuPlxuICAgKiAgICAgICA8ZGl2PjwvZGl2PlxuICAgKiAgICAgICA8ZGl2PjwvZGl2PlxuICAgKiAgICAgICA8ZGl2PjwvZGl2PlxuICAgKiAgICAgPC9jb3VudC1jaGlsZHJlbj5cbiAgICpcbiAgICogVGhlbiB0aGUgY29tcG9uZW50IHNob3VsZCBzaG93IFwiM1wiLCBiZWNhdXNlIHRoZXJlIGFyZSB0aHJlZSBjaGlsZHJlbi4gVG9cbiAgICogY2FsY3VsYXRlIHRoZSBudW1iZXIgb2YgY2hpbGRyZW4sIHRoZSBjb21wb25lbnQgY2FuIGp1c3QgY2FsY3VsYXRlXG4gICAqIGB0aGlzLmNoaWxkcmVuLmxlbmd0aGAuIEhvd2V2ZXIsIHN1cHBvc2Ugc29tZW9uZSBpbnN0YW50aWF0ZXMgeW91clxuICAgKiBjb21wb25lbnQgaW5zaWRlIG9uZSBvZiB0aGVpciBvd24gY29tcG9uZW50cywgYW5kIHB1dHMgYSBgPHNsb3Q+YCBlbGVtZW50XG4gICAqIGluc2lkZSB5b3VyIGNvbXBvbmVudDpcbiAgICpcbiAgICogICAgIDxjb3VudC1jaGlsZHJlbj5cbiAgICogICAgICAgPHNsb3Q+PC9zbG90PlxuICAgKiAgICAgPC9jb3VudC1jaGlsZHJlbj5cbiAgICpcbiAgICogSWYgeW91ciBjb21wb25lbnQgb25seSBsb29rcyBhdCBgdGhpcy5jaGlsZHJlbmAsIGl0IHdpbGwgYWx3YXlzIHNlZSBleGFjdGx5XG4gICAqIG9uZSBjaGlsZCDigJTCoHRoZSBgPHNsb3Q+YCBlbGVtZW50LiBCdXQgdGhlIHVzZXIgbG9va2luZyBhdCB0aGUgcGFnZSB3aWxsXG4gICAqICpzZWUqIGFueSBub2RlcyBkaXN0cmlidXRlZCB0byB0aGF0IHNsb3QuIFRvIG1hdGNoIHdoYXQgdGhlIHVzZXIgc2VlcywgeW91clxuICAgKiBjb21wb25lbnQgc2hvdWxkIGV4cGFuZCBhbnkgYDxzbG90PmAgZWxlbWVudHMgaXQgY29udGFpbnMuXG4gICAqXG4gICAqIFRoYXQgaXMgdGhlIHByb2JsZW0gdGhpcyBtaXhpbiBzb2x2ZXMuIEFmdGVyIGFwcGx5aW5nIHRoaXMgbWl4aW4sIHlvdXJcbiAgICogY29tcG9uZW50IGNvZGUgaGFzIGFjY2VzcyB0byBgdGhpcy5kaXN0cmlidXRlZENoaWxkcmVuYCwgd2hvc2UgYGxlbmd0aGBcbiAgICogd2lsbCByZXR1cm4gdGhlIHRvdGFsIG51bWJlciBvZiBhbGwgY2hpbGRyZW4gZGlzdHJpYnV0ZWQgdG8geW91ciBjb21wb25lbnRcbiAgICogaW4gdGhlIGNvbXBvc2VkIHRyZWUuXG4gICAqXG4gICAqIE5vdGU6IFRoZSBsYXRlc3QgQ3VzdG9tIEVsZW1lbnRzIEFQSSBkZXNpZ24gY2FsbHMgZm9yIGEgbmV3IGZ1bmN0aW9uLFxuICAgKiBgZ2V0QXNzaWduZWROb2Rlc2AgdGhhdCB0YWtlcyBhbiBvcHRpb25hbCBgZGVlcGAgcGFyYW1ldGVyLCB0aGF0IHdpbGwgc29sdmVcbiAgICogdGhpcyBwcm9ibGVtIGF0IHRoZSBBUEkgbGV2ZWwuXG4gICAqL1xuICBjbGFzcyBEaXN0cmlidXRlZENoaWxkcmVuIGV4dGVuZHMgYmFzZSB7XG5cbiAgICAvKipcbiAgICAgKiBBbiBpbi1vcmRlciBjb2xsZWN0aW9uIG9mIGRpc3RyaWJ1dGVkIGNoaWxkcmVuLCBleHBhbmRpbmcgYW55IHNsb3RcbiAgICAgKiBlbGVtZW50cy4gTGlrZSB0aGUgc3RhbmRhcmQgY2hpbGRyZW4gcHJvcGVydHksIHRoaXMgc2tpcHMgdGV4dCBub2Rlcy5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudFtdfVxuICAgICAqL1xuICAgIGdldCBkaXN0cmlidXRlZENoaWxkcmVuKCkge1xuICAgICAgcmV0dXJuIGV4cGFuZENvbnRlbnRFbGVtZW50cyh0aGlzLmNoaWxkcmVuLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQW4gaW4tb3JkZXIgY29sbGVjdGlvbiBvZiBkaXN0cmlidXRlZCBjaGlsZCBub2RlcywgZXhwYW5kaW5nIGFueSBzbG90XG4gICAgICogZWxlbWVudHMuIExpa2UgdGhlIHN0YW5kYXJkIGNoaWxkTm9kZXMgcHJvcGVydHksIHRoaXMgaW5jbHVkZXMgdGV4dFxuICAgICAqIG5vZGVzLlxuICAgICAqXG4gICAgICogQHR5cGUge05vZGVbXX1cbiAgICAgKi9cbiAgICBnZXQgZGlzdHJpYnV0ZWRDaGlsZE5vZGVzKCkge1xuICAgICAgcmV0dXJuIGV4cGFuZENvbnRlbnRFbGVtZW50cyh0aGlzLmNoaWxkTm9kZXMsIHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBjb25jYXRlbmF0ZWQgdGV4dCBjb250ZW50IG9mIGFsbCBkaXN0cmlidXRlZCBjaGlsZCBub2RlcywgZXhwYW5kaW5nXG4gICAgICogYW55IHNsb3QgZWxlbWVudHMuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldCBkaXN0cmlidXRlZFRleHRDb250ZW50KCkge1xuICAgICAgbGV0IHN0cmluZ3MgPSB0aGlzLmRpc3RyaWJ1dGVkQ2hpbGROb2Rlcy5tYXAoZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkLnRleHRDb250ZW50O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gc3RyaW5ncy5qb2luKCcnKTtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBEaXN0cmlidXRlZENoaWxkcmVuO1xufTtcblxuXG4vKlxuICogR2l2ZW4gYSBhcnJheSBvZiBub2RlcywgcmV0dXJuIGEgbmV3IGFycmF5IHdpdGggYW55IGNvbnRlbnQgZWxlbWVudHMgZXhwYW5kZWRcbiAqIHRvIHRoZSBub2RlcyBkaXN0cmlidXRlZCB0byB0aGF0IGNvbnRlbnQgZWxlbWVudC4gVGhpcyBydWxlIGlzIGFwcGxpZWRcbiAqIHJlY3Vyc2l2ZWx5LlxuICpcbiAqIElmIGluY2x1ZGVUZXh0Tm9kZXMgaXMgdHJ1ZSwgdGV4dCBub2RlcyB3aWxsIGJlIGluY2x1ZGVkLCBhcyBpbiB0aGVcbiAqIHN0YW5kYXJkIGNoaWxkTm9kZXMgcHJvcGVydHk7IGJ5IGRlZmF1bHQsIHRoaXMgc2tpcHMgdGV4dCBub2RlcywgbGlrZSB0aGVcbiAqIHN0YW5kYXJkIGNoaWxkcmVuIHByb3BlcnR5LlxuICovXG5mdW5jdGlvbiBleHBhbmRDb250ZW50RWxlbWVudHMobm9kZXMsIGluY2x1ZGVUZXh0Tm9kZXMpIHtcbiAgbGV0IGV4cGFuZGVkID0gQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKG5vZGVzLCBub2RlID0+IHtcbiAgICAvLyBXZSB3YW50IHRvIHNlZSBpZiB0aGUgbm9kZSBpcyBhbiBpbnN0YW5jZW9mIEhUTUxTbG90RUxlbWVudCwgYnV0XG4gICAgLy8gdGhhdCBjbGFzcyB3b24ndCBleGlzdCBpZiB0aGUgYnJvd3NlciB0aGF0IGRvZXNuJ3Qgc3VwcG9ydCBuYXRpdmVcbiAgICAvLyBTaGFkb3cgRE9NIGFuZCBpZiB0aGUgU2hhZG93IERPTSBwb2x5ZmlsbCBoYXNuJ3QgYmVlbiBsb2FkZWQuIEluc3RlYWQsXG4gICAgLy8gd2UgZG8gYSBzaW1wbGlzdGljIGNoZWNrIHRvIHNlZSBpZiB0aGUgdGFnIG5hbWUgaXMgXCJzbG90XCIuXG4gICAgbGV0IGlzU2xvdCA9IHR5cGVvZiBIVE1MU2xvdEVsZW1lbnQgIT09ICd1bmRlZmluZWQnID9cbiAgICAgIG5vZGUgaW5zdGFuY2VvZiBIVE1MU2xvdEVsZW1lbnQgOlxuICAgICAgbm9kZS5sb2NhbE5hbWUgPT09ICdzbG90JztcbiAgICBpZiAoaXNTbG90KSB7XG4gICAgICAvLyBVc2UgdGhlIG5vZGVzIGFzc2lnbmVkIHRvIHRoaXMgbm9kZSBpbnN0ZWFkLlxuICAgICAgbGV0IGFzc2lnbmVkTm9kZXMgPSBub2RlLmFzc2lnbmVkTm9kZXMoeyBmbGF0dGVuOiB0cnVlIH0pO1xuICAgICAgcmV0dXJuIGFzc2lnbmVkTm9kZXMgP1xuICAgICAgICBleHBhbmRDb250ZW50RWxlbWVudHMoYXNzaWduZWROb2RlcywgaW5jbHVkZVRleHROb2RlcykgOlxuICAgICAgICBbXTtcbiAgICB9IGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgLy8gUGxhaW4gZWxlbWVudDsgdXNlIGFzIGlzLlxuICAgICAgcmV0dXJuIFtub2RlXTtcbiAgICB9IGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBUZXh0ICYmIGluY2x1ZGVUZXh0Tm9kZXMpIHtcbiAgICAgIC8vIFRleHQgbm9kZS5cbiAgICAgIHJldHVybiBbbm9kZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIENvbW1lbnQsIHByb2Nlc3NpbmcgaW5zdHJ1Y3Rpb24sIGV0Yy47IHNraXAuXG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9KTtcbiAgbGV0IGZsYXR0ZW5lZCA9IFtdLmNvbmNhdCguLi5leHBhbmRlZCk7XG4gIHJldHVybiBmbGF0dGVuZWQ7XG59XG4iLCJpbXBvcnQgbWljcm90YXNrIGZyb20gJy4vbWljcm90YXNrJztcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBkZWZpbmVzIGEgY29tcG9uZW50J3MgY29udGVudCBhcyBpdHMgY2hpbGRyZW4sIGV4cGFuZGluZyBhbnlcbiAgICogbm9kZXMgZGlzdHJpYnV0ZWQgdG8gdGhlIGNvbXBvbmVudCdzIHNsb3RzLlxuICAgKlxuICAgKiBUaGlzIGFsc28gcHJvdmlkZXMgbm90aWZpY2F0aW9uIG9mIGNoYW5nZXMgdG8gYSBjb21wb25lbnQncyBjb250ZW50LiBJdFxuICAgKiB3aWxsIGludm9rZSBhIGBjb250ZW50Q2hhbmdlZGAgbWV0aG9kIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBmaXJzdFxuICAgKiBpbnN0YW50aWF0ZWQsIGFuZCB3aGVuZXZlciBpdHMgZGlzdHJpYnV0ZWQgY2hpbGRyZW4gY2hhbmdlLiBUaGlzIGlzIGFuXG4gICAqIGVhc3kgd2F5IHRvIHNhdGlzZnkgdGhlIEdvbGQgU3RhbmRhcmQgY2hlY2tsaXN0IGl0ZW0gZm9yIG1vbml0b3JpbmdcbiAgICogW0NvbnRlbnQgQ2hhbmdlc10oaHR0cHM6Ly9naXRodWIuY29tL3dlYmNvbXBvbmVudHMvZ29sZC1zdGFuZGFyZC93aWtpL0NvbnRlbnQtQ2hhbmdlcykuXG4gICAqXG4gICAqIEV4YW1wbGU6XG4gICAqXG4gICAqIGBgYFxuICAgKiBsZXQgYmFzZSA9IERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQoRGlzdHJpYnV0ZWRDaGlsZHJlbihIVE1MRWxlbWVudCkpO1xuICAgKiBjbGFzcyBDb3VudGluZ0VsZW1lbnQgZXh0ZW5kcyBiYXNlIHtcbiAgICpcbiAgICogICBjb25zdHJ1Y3RvcigpIHtcbiAgICogICAgIHN1cGVyKCk7XG4gICAqICAgICBsZXQgcm9vdCA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICAgKiAgICAgcm9vdC5pbm5lckhUTUwgPSBgPHNsb3Q+PC9zbG90PmA7XG4gICAqICAgfVxuICAgKlxuICAgKiAgIGNvbnRlbnRDaGFuZ2VkKCkge1xuICAgKiAgICAgLy8gQ291bnQgdGhlIGNvbXBvbmVudCdzIGNoaWxkcmVuLCBib3RoIGluaXRpYWxseSBhbmQgd2hlbiBjaGFuZ2VkLlxuICAgKiAgICAgdGhpcy5jb3VudCA9IHRoaXMuZGlzdHJpYnV0ZWRDaGlsZHJlbi5sZW5ndGg7XG4gICAqICAgfVxuICAgKlxuICAgKiB9XG4gICAqIGBgYFxuICAgKlxuICAgKiBUaGlzIG1peGluIGlzIGludGVuZGVkIGZvciB1c2Ugd2l0aCB0aGVcbiAgICogW0Rpc3RyaWJ1dGVkQ2hpbGRyZW5dKERpc3RyaWJ1dGVkQ2hpbGRyZW4ubWQpIG1peGluLiBTZWUgdGhhdCBtaXhpbiBmb3IgYVxuICAgKiBkaXNjdXNzaW9uIG9mIGhvdyB0aGF0IHdvcmtzLiBUaGlzIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQgbWl4aW5cbiAgICogcHJvdmlkZXMgYW4gZWFzeSB3YXkgb2YgZGVmaW5pbmcgdGhlIFwiY29udGVudFwiIG9mIGEgY29tcG9uZW50IGFzIHRoZVxuICAgKiBjb21wb25lbnQncyBkaXN0cmlidXRlZCBjaGlsZHJlbi4gVGhhdCBpbiB0dXJuIGxldHMgbWl4aW5zIGxpa2VcbiAgICogW0NvbnRlbnRBc0l0ZW1zXShDb250ZW50QXNJdGVtcy5tZCkgbWFuaXB1bGF0ZSB0aGUgY2hpbGRyZW4gYXMgbGlzdCBpdGVtcy5cbiAgICovXG4gIGNsYXNzIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcblxuICAgICAgaWYgKHRoaXMuc2hhZG93Um9vdCkge1xuICAgICAgICAvLyBMaXN0ZW4gdG8gY2hhbmdlcyBvbiBhbGwgc2xvdHMuXG4gICAgICAgIGxldCBzbG90cyA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yQWxsKCdzbG90Jyk7XG4gICAgICAgIHNsb3RzLmZvckVhY2goc2xvdCA9PiBzbG90LmFkZEV2ZW50TGlzdGVuZXIoJ3Nsb3RjaGFuZ2UnLCBldmVudCA9PiB7XG4gICAgICAgICAgdGhpcy5jb250ZW50Q2hhbmdlZCgpO1xuICAgICAgICB9KSk7XG4gICAgICB9XG5cbiAgICAgIC8vIE1ha2UgYW4gaW5pdGlhbCBjYWxsIHRvIGNvbnRlbnRDaGFuZ2VkKCkgc28gdGhhdCB0aGUgY29tcG9uZW50IGNhbiBkb1xuICAgICAgLy8gaW5pdGlhbGl6YXRpb24gdGhhdCBpdCBub3JtYWxseSBkb2VzIHdoZW4gY29udGVudCBjaGFuZ2VzLlxuICAgICAgLy9cbiAgICAgIC8vIFRoaXMgd2lsbCBpbnZva2UgY29udGVudENoYW5nZWQoKSBoYW5kbGVycyBpbiBvdGhlciBtaXhpbnMuIEluIG9yZGVyXG4gICAgICAvLyB0aGF0IHRob3NlIG1peGlucyBoYXZlIGEgY2hhbmNlIHRvIGNvbXBsZXRlIHRoZWlyIG93biBpbml0aWFsaXphdGlvbixcbiAgICAgIC8vIHdlIGFkZCB0aGUgY29udGVudENoYW5nZWQoKSBjYWxsIHRvIHRoZSBtaWNyb3Rhc2sgcXVldWUuXG4gICAgICBtaWNyb3Rhc2soKCkgPT4gdGhpcy5jb250ZW50Q2hhbmdlZCgpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIGNvbnRlbnRzIG9mIHRoZSBjb21wb25lbnQgKGluY2x1ZGluZyBkaXN0cmlidXRlZFxuICAgICAqIGNoaWxkcmVuKSBoYXZlIGNoYW5nZWQuXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBhbHNvIGludm9rZWQgd2hlbiBhIGNvbXBvbmVudCBpcyBmaXJzdCBpbnN0YW50aWF0ZWQ7IHRoZVxuICAgICAqIGNvbnRlbnRzIGhhdmUgZXNzZW50aWFsbHkgXCJjaGFuZ2VkXCIgZnJvbSBiZWluZyBub3RoaW5nLiBUaGlzIGFsbG93cyB0aGVcbiAgICAgKiBjb21wb25lbnQgdG8gcGVyZm9ybSBpbml0aWFsIHByb2Nlc3Npbmcgb2YgaXRzIGNoaWxkcmVuLlxuICAgICAqL1xuICAgIGNvbnRlbnRDaGFuZ2VkKCkge1xuICAgICAgaWYgKHN1cGVyLmNvbnRlbnRDaGFuZ2VkKSB7IHN1cGVyLmNvbnRlbnRDaGFuZ2VkKCk7IH1cbiAgICAgIGxldCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnY29udGVudC1jaGFuZ2VkJyk7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBjb250ZW50IG9mIHRoaXMgY29tcG9uZW50LCBkZWZpbmVkIHRvIGJlIHRoZSBmbGF0dGVuZWQgYXJyYXkgb2ZcbiAgICAgKiBjaGlsZHJlbiBkaXN0cmlidXRlZCB0byB0aGUgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50W119XG4gICAgICovXG4gICAgZ2V0IGNvbnRlbnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5kaXN0cmlidXRlZENoaWxkcmVuO1xuICAgIH1cbiAgICBzZXQgY29udGVudCh2YWx1ZSkge1xuICAgICAgaWYgKCdjb250ZW50JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5jb250ZW50ID0gdmFsdWU7IH1cbiAgICAgIC8vIFRPRE86IFNldCB0aGUgY2hpbGRyZW4gdG8gdGhlIGdpdmVuIHZhbHVlICh3aGljaCBzaG91bGQgYmUgYW4gYXJyYXkgb2ZcbiAgICAgIC8vIGVsZW1lbnRzKT9cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGV2ZW50IGlzIHJhaXNlZCB3aGVuIHRoZSBjb21wb25lbnQncyBjb250ZW50cyAoaW5jbHVkaW5nIGRpc3RyaWJ1dGVkXG4gICAgICogY2hpbGRyZW4pIGhhdmUgY2hhbmdlZC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50XG4gICAgICogQGV2ZW50IGNvbnRlbnQtY2hhbmdlZFxuICAgICAqL1xuICB9XG5cbiAgcmV0dXJuIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQ7XG59O1xuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuL2NyZWF0ZVN5bWJvbCc7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IHNlbGVjdGVkRnJhY3Rpb25TeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3NlbGVjdGVkRnJhY3Rpb24nKTtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIEZyYWN0aW9uYWxTZWxlY3Rpb24uICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXhpbihiYXNlKSB7XG5cbiAgLyoqXG4gICAqIEFkZHMgc3VwcG9ydCBmb3IgZnJhY3Rpb25hbCBzZWxlY3Rpb246IHRyZWF0aW5nIGEgc2VsZWN0aW9uIGFzIGEgcmVhbFxuICAgKiBudW1iZXIgdGhhdCBjb21iaW5lcyBhbiBpbnRlZ2VyIHBvcnRpb24gKGFuIGluZGV4IGludG8gYSBsaXN0KSwgYW5kIGFcbiAgICogZnJhY3Rpb24gKGluZGljYXRpbmcgaG93IGZhciBvZiB0aGUgd2F5IHdlIGFyZSB0byB0aGUgbmV4dCBvciBwcmV2aW91c1xuICAgKiBpdGVtKS5cbiAgICpcbiAgICogVGhpcyBpcyB1c2VmdWwgaW4gY29tcG9uZW50cyB0aGF0IHN1cHBvcnQgaW5jcmVtZW50YWwgb3BlcmF0aW9ucyBkdXJpbmdcbiAgICogZHJhZ2dpbmcgYW5kIHN3aXBpbmcuIEV4YW1wbGU6IGEgY2Fyb3VzZWwgY29tcG9uZW50IGhhcyBzZXZlcmFsIGl0ZW1zLCBhbmQgdGhlXG4gICAqIGN1cnJlbnRseSBzZWxlY3RlZCBpdGVtIGlzIGl0ZW0gMy4gVGhlIHVzZXIgYmVnaW5zIHN3aXBpbmcgdG8gdGhlIGxlZnQsXG4gICAqIG1vdmluZyB0b3dhcmRzIHNlbGVjdGluZyBpdGVtIDQuIEhhbGZ3YXkgdGhyb3VnaCB0aGlzIG9wZXJhdGlvbiwgdGhlXG4gICAqIGZyYWN0aW9uYWwgc2VsZWN0aW9uIHZhbHVlIGlzIDMuNS5cbiAgICpcbiAgICogVGhpcyB2YWx1ZSBwZXJtaXRzIGNvbW11bmljYXRpb24gYmV0d2VlbiBtaXhpbnMgbGlrZVxuICAgKiBbU3dpcGVEaXJlY3Rpb25dKC4vU3dpcGVEaXJlY3Rpb24ubWQpIGFuZFxuICAgKiBbVHJhY2twYWREaXJlY3Rpb25dKC4vVHJhY2twYWREaXJlY3Rpb24ubWQpLCB3aGljaCBnZW5lcmF0ZSBmcmFjdGlvbmFsXG4gICAqIHNlbGVjdGlvbiB2YWx1ZXMsIGFuZCBtaXhpbnMgbGlrZVxuICAgKiBbU2VsZWN0aW9uQW5pbWF0aW9uXSguL1NlbGVjdGlvbkFuaW1hdGlvbi5tZCksIHdoaWNoIGNhbiByZW5kZXIgc2VsZWN0aW9uXG4gICAqIGF0IGEgZnJhY3Rpb25hbCB2YWx1ZS5cbiAgICovXG4gIGNsYXNzIEZyYWN0aW9uYWxTZWxlY3Rpb24gZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKSB7IHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7IH1cbiAgICAgIHRoaXMuc2VsZWN0ZWRGcmFjdGlvbiA9IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSBmcmFjdGlvbmFsIHZhbHVlIGluZGljYXRpbmcgaG93IGZhciB0aGUgdXNlciBoYXMgY3VycmVudGx5IGFkdmFuY2VkIHRvXG4gICAgICogdGhlIG5leHQvcHJldmlvdXMgaXRlbS4gRS5nLiwgYSBgc2VsZWN0ZWRGcmFjdGlvbmAgb2YgMy41IGluZGljYXRlcyB0aGVcbiAgICAgKiB1c2VyIGlzIGhhbGZ3YXkgYmV0d2VlbiBpdGVtcyAzIGFuZCA0LlxuICAgICAqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0ZWRGcmFjdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzW3NlbGVjdGVkRnJhY3Rpb25TeW1ib2xdO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0ZWRGcmFjdGlvbih2YWx1ZSkge1xuICAgICAgdGhpc1tzZWxlY3RlZEZyYWN0aW9uU3ltYm9sXSA9IHZhbHVlO1xuICAgICAgaWYgKCdzZWxlY3RlZEZyYWN0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEZyYWN0aW9uID0gdmFsdWU7IH1cbiAgICAgIGxldCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnc2VsZWN0ZWQtZnJhY3Rpb24tY2hhbmdlZCcpO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBGcmFjdGlvbmFsU2VsZWN0aW9uO1xufVxuXG5cbm1peGluLmhlbHBlcnMgPSB7XG5cbiAgLypcbiAgICogRGFtcGVuIGEgc2VsZWN0aW9uIHRoYXQgZ29lcyBwYXN0IHRoZSBiZWdpbm5pbmcgb3IgZW5kIG9mIGEgbGlzdC4gVGhpcyBpc1xuICAgKiBnZW5lcmFsbHkgdXNlZCB0byBwcm9kdWNlIGEgdmlzdWFsIGVmZmVjdCBvZiB0ZW5zaW9uIGFzIHRoZSB1c2VyIHRyaWVzIHRvXG4gICAqIGdvIGZ1cnRoZXIgaW4gYSBkaXJlY3Rpb24gdGhhdCBoYXMgbm8gbW9yZSBpdGVtcy5cbiAgICpcbiAgICogRXhhbXBsZTogc3VwcG9zZSBgaXRlbUNvdW50YCBpcyA1LCBpbmRpY2F0aW5nIGEgbGlzdCBvZiA1IGl0ZW1zLiBUaGUgaW5kZXggb2ZcbiAgICogdGhlIGxhc3QgaXRlbSBpcyA0LiBJZiB0aGUgYHNlbGVjdGlvbmAgcGFyYW1ldGVyIGlzIDQuNSwgdGhlIHVzZXIgaXMgdHJ5aW5nXG4gICAqIHRvIGdvIHBhc3QgdGhpcyBsYXN0IGl0ZW0uIFdoZW4gYSBkYW1waW5nIGZ1bmN0aW9uIGlzIGFwcGxpZWQsIHRoZSByZXN1bHRpbmdcbiAgICogdmFsdWUgd2lsbCBiZSBsZXNzIHRoYW4gNC41ICh0aGUgYWN0dWFsIHZhbHVlIHdpbGwgYmUgNC4yNSkuIFdoZW4gdGhpc1xuICAgKiBzZWxlY3Rpb24gc3RhdGUgaXMgcmVuZGVyZWQsIHRoZSB1c2VyIHdpbGwgc2VlIHRoYXQsIGVhY2ggdW5pdCBkaXN0YW5jZSB0aGVcbiAgICogZHJhZyB0cmF2ZWxzIGhhcyBsZXNzIGFuZCBsZXNzIHZpc2libGUgZWZmZWN0LiBUaGlzIGlzIHBlcmNlaXZlZCBhcyB0ZW5zaW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2VsZWN0aW9uIC0gQSByZWFsIG51bWJlciBpbmRpY2F0aW5nIGEgc2VsZWN0aW9uIHBvc2l0aW9uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpdGVtQ291bnQgLSBBbiBpbnRlZ2VyIGZvciB0aGUgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZSBsaXN0XG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IEEgcmVhbCBudW1iZXIgcmVwcmVzZW50aW5nIHRoZSBkYW1wZWQgc2VsZWN0aW9uIHZhbHVlLlxuICAgKi9cbiAgZGFtcGVkU2VsZWN0aW9uKHNlbGVjdGlvbiwgaXRlbUNvdW50KSB7XG4gICAgbGV0IGRhbXBlZDtcbiAgICBsZXQgYm91bmQgPSBpdGVtQ291bnQgLSAxO1xuICAgIGlmIChzZWxlY3Rpb24gPCAwKSB7XG4gICAgICAvLyBUcnlpbmcgdG8gZ28gcGFzdCBiZWdpbm5pbmcgb2YgbGlzdC4gQXBwbHkgdGVuc2lvbiBmcm9tIHRoZSBsZWZ0IGVkZ2UuXG4gICAgICBkYW1wZWQgPSAtbWl4aW4uaGVscGVycy5kYW1waW5nKC1zZWxlY3Rpb24pO1xuICAgIH0gZWxzZSBpZiAoc2VsZWN0aW9uID49IGJvdW5kKSB7XG4gICAgICAvLyBUcnlpbmcgdG8gZ28gcGFzdCBlbmQgb2YgbGlzdC4gQXBwbHkgdGVuc2lvbiBmcm9tIHRoZSByaWdodCBlZGdlLlxuICAgICAgZGFtcGVkID0gYm91bmQgKyBtaXhpbi5oZWxwZXJzLmRhbXBpbmcoc2VsZWN0aW9uIC0gYm91bmQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBObyBkYW1waW5nIHJlcXVpcmVkLlxuICAgICAgZGFtcGVkID0gc2VsZWN0aW9uO1xuICAgIH1cbiAgICByZXR1cm4gZGFtcGVkO1xuICB9LFxuXG4gIC8qXG4gICAqIENhbGN1bGF0ZSBkYW1waW5nIGFzIGEgZnVuY3Rpb24gb2YgdGhlIGRpc3RhbmNlIHBhc3QgdGhlIG1pbmltdW0vbWF4aW11bVxuICAgKiB2YWx1ZXMuXG4gICAqXG4gICAqIFdlIHdhbnQgdG8gYXN5bXB0b3RpY2FsbHkgYXBwcm9hY2ggYW4gYWJzb2x1dGUgbWluaW11bSBvZiAxIHVuaXRcbiAgICogYmVsb3cvYWJvdmUgdGhlIGFjdHVhbCBtaW5pbXVtL21heGltdW0uIFRoaXMgcmVxdWlyZXMgY2FsY3VsYXRpbmcgYVxuICAgKiBoeXBlcmJvbGljIGZ1bmN0aW9uLlxuICAgKlxuICAgKiBTZWUgaHR0cDovL3d3dy53b2xmcmFtYWxwaGEuY29tL2lucHV0Lz9pPXkrJTNEKy0xJTJGJTI4eCUyQjElMjkrJTJCKzFcbiAgICogZm9yIHRoZSBvbmUgd2UgdXNlLiBUaGUgb25seSBwb3J0aW9uIG9mIHRoYXQgZnVuY3Rpb24gd2UgY2FyZSBhYm91dCBpcyB3aGVuXG4gICAqIHggaXMgemVybyBvciBncmVhdGVyLiBBbiBpbXBvcnRhbnQgY29uc2lkZXJhdGlvbiBpcyB0aGF0IHRoZSBjdXJ2ZSBiZVxuICAgKiB0YW5nZW50IHRvIHRoZSBkaWFnb25hbCBsaW5lIHg9eSBhdCAoMCwgMCkuIFRoaXMgZW5zdXJlcyBzbW9vdGggY29udGludWl0eVxuICAgKiB3aXRoIHRoZSBub3JtYWwgZHJhZyBiZWhhdmlvciwgaW4gd2hpY2ggdGhlIHZpc2libGUgc2xpZGluZyBpcyBsaW5lYXIgd2l0aFxuICAgKiB0aGUgZGlzdGFuY2UgdGhlIHRvdWNocG9pbnQgaGFzIGJlZW4gZHJhZ2dlZC5cbiAgICovXG4gIGRhbXBpbmcoeCkge1xuICAgIGxldCB5ID0gKC0xIC8gKHggKyAxKSkgKyAxO1xuICAgIHJldHVybiB5O1xuICB9LFxuXG4gIC8qXG4gICAqIFJldHVybiB0aGUgY3VycmVudCBmcmFjdGlvbmFsIHNlbGVjdGlvbiB2YWx1ZSBmb3IgdGhlIGdpdmVuIGVsZW1lbnQuXG4gICAqXG4gICAqIFRoaXMgc2ltcGx5IGFkZHMgdGhlIGVsZW1lbnQncyBgc2VsZWN0ZWRJbmRleGAgYW5kIGBzZWxlY3RlZEZyYWN0aW9uYFxuICAgKiBwcm9wZXJ0aWVzLlxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gQW4gZWxlbWVudCB0aGF0IHN1cHBvcnRzIHNlbGVjdGlvblxuICAgKi9cbiAgZWxlbWVudFNlbGVjdGlvbihlbGVtZW50KSB7XG4gICAgbGV0IHNlbGVjdGVkSW5kZXggPSBlbGVtZW50LnNlbGVjdGVkSW5kZXg7XG4gICAgaWYgKHNlbGVjdGVkSW5kZXggPCAwKSB7XG4gICAgICAvLyBObyBzZWxlY3Rpb25cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHNlbGVjdGVkRnJhY3Rpb24gPSBlbGVtZW50LnNlbGVjdGVkRnJhY3Rpb24gfHwgMDtcbiAgICByZXR1cm4gc2VsZWN0ZWRJbmRleCArIHNlbGVjdGVkRnJhY3Rpb247XG4gIH0sXG5cbiAgLypcbiAgICogQnJlYWtzIGEgZnJhY3Rpb25hbCBzZWxlY3Rpb24gaW50byBpdHMgaW50ZWdlciBhbmQgZnJhY3Rpb25hbCBwYXJ0cy5cbiAgICpcbiAgICogRXhhbXBsZTogaWYgcGFzc2VkIDMuNSwgdGhpcyByZXR1cm5zIHsgaW5kZXg6IDMsIGZyYWN0aW9uOiA1IH0uXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzZWxlY3Rpb24g4oCTwqBBIHJlYWwgbnVtYmVyIHJlcHJlc2VudGluZyBhIHNlbGVjdGlvbiBwb2ludFxuICAgKiBAcmV0dXJucyB7b2JqZWN0fSAtIEFuIG9iamVjdCB3aXRoIGFuIGBpbmRleGAgcHJvcGVydHkgaG9sZGluZyB0aGVcbiAgICogc2VsZWN0aW9uJ3MgaW50ZWdlciBjb21wb25lbnQsIGFuZCBhIGBmcmFjdGlvbmAgcHJvcGVydHkgaG9sZGluZyB0aGVcbiAgICogc2VsZWN0aW9uJ3MgZnJhY3Rpb25hbCBjb21wb25lbnQuXG4gICAqL1xuICBzZWxlY3Rpb25QYXJ0cyhzZWxlY3Rpb24pIHtcbiAgICAvLyBTdHVwaWQgSUUgZG9lc24ndCBoYXZlIE1hdGgudHJ1bmMuXG4gICAgLy8gbGV0IGluZGV4ID0gTWF0aC50cnVuYyhzZWxlY3Rpb24pO1xuICAgIGxldCBpbmRleCA9IHNlbGVjdGlvbiA8IDAgPyBNYXRoLmNlaWwoc2VsZWN0aW9uKSA6IE1hdGguZmxvb3Ioc2VsZWN0aW9uKTtcbiAgICBsZXQgZnJhY3Rpb24gPSBzZWxlY3Rpb24gLSBpbmRleDtcbiAgICByZXR1cm4geyBpbmRleCwgZnJhY3Rpb24gfTtcbiAgfSxcblxuICAvKlxuICAgKiBSZXR1cm5zIGEgZnJhY3Rpb25hbCBzZWxlY3Rpb24gcG9pbnQgYWZ0ZXIgYWNjb3VudGluZyBmb3Igd3JhcHBpbmcsIGVuc3VyaW5nXG4gICAqIHRoYXQgdGhlIGludGVnZXIgcG9ydGlvbiBvZiB0aGUgc2VsZWN0aW9uIHN0YXlzIGJldHdlZW4gMCBhbmQgYGl0ZW1Db3VudGAtMS5cbiAgICogVGhhdCBpcywgdGhlIGludGVnZXIgcG9ydGlvbiB3aWxsIGFsd2F5cyBiZSBhIHZhbGlkIGluZGV4IGludG8gdGhlIGxpc3QuXG4gICAqXG4gICAqIEV4YW1wbGUgb2Ygd3JhcHBpbmcgcGFzdCB0aGUgZW5kIG9mIHRoZSBsaXN0OiBpZiBgc2VsZWN0aW9uYCBpcyA1LjUgYW5kXG4gICAqIGBpdGVtQ291bnRgIGlzIDUsIHRoaXMgcmV0dXJucyAwLjUuIEV4YW1wbGUgb2Ygd3JhcHBpbmcgcGFzdCB0aGUgYmVnaW5uaW5nIG9mXG4gICAqIHRoZSBsaXN0OiBpZiBgc2VsZWN0aW9uYCBpcyAwLjUgYW5kIGBpdGVtQ291bnRgIGlzIDUsIHRoaXMgcmV0dXJucyA0LjUuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzZWxlY3Rpb24gLSBBIHJlYWwgbnVtYmVyIHJlcHJlc2VudGluZyBhIHNlbGVjdGlvbiBwb2ludFxuICAgKiBAcGFyYW0ge251bWJlcn0gaXRlbUNvdW50IC0gVGhlIG51bWJlciBvZiBpdGVtcyBpbiB0aGUgbGlzdFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSAtIFRoZSByZXN1bHQgb2Ygd3JhcHBpbmcgdGhlIHNlbGVjdGlvbiBwb2ludFxuICAgKi9cbiAgd3JhcHBlZFNlbGVjdGlvbihzZWxlY3Rpb24sIGl0ZW1Db3VudCkge1xuICAgIC8vIEhhbmRsZXMgcG9zc2liaWxpdHkgb2YgbmVnYXRpdmUgbW9kLlxuICAgIC8vIFNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xODYxODI1MC83NjQ3MlxuICAgIHJldHVybiAoKHNlbGVjdGlvbiAlIGl0ZW1Db3VudCkgKyBpdGVtQ291bnQpICUgaXRlbUNvdW50O1xuICB9LFxuXG4gIC8qXG4gICAqIFJldHVybiB0aGUgcGFydHMgb2YgYSBzZWxlY3Rpb24sIGZpcnN0IHdyYXBwaW5nIGlmIG5lY2Vzc2FyeS5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNlbGVjdGlvbiDigJMgQSByZWFsIG51bWJlciByZXByZXNlbnRpbmcgYSBzZWxlY3Rpb24gcG9pbnRcbiAgICogQHBhcmFtIHtudW1iZXJ9IGl0ZW1Db3VudCAtIFRoZSBudW1iZXIgb2YgaXRlbXMgaW4gdGhlIGxpc3RcbiAgICogQHBhcmFtIHtib29sZWFufSB3cmFwIOKAkyBUcnVlIGlmIHRoZSBzZWxlY3Rpb24gc2hvdWxkIHdyYXAgdG8gc3RheSB3aXRoaW4gdGhlXG4gICAqIGxpc3RcbiAgICogQHJldHVybnMge29iamVjdH0g4oCTIFRoZSBwYXJ0cyBvZiB0aGUgc2VsZWN0aW9uLCB1c2luZyB0aGUgc2FtZSBmb3JtYXQgYXNcbiAgICogYHNlbGVjdGlvblBhcnRzYC5cbiAgICovXG4gIHdyYXBwZWRTZWxlY3Rpb25QYXJ0cyhzZWxlY3Rpb24sIGl0ZW1Db3VudCwgd3JhcCkge1xuICAgIGlmICh3cmFwKSB7XG4gICAgICBzZWxlY3Rpb24gPSBtaXhpbi5oZWxwZXJzLndyYXBwZWRTZWxlY3Rpb24oc2VsZWN0aW9uLCBpdGVtQ291bnQpO1xuICAgIH1cbiAgICByZXR1cm4gbWl4aW4uaGVscGVycy5zZWxlY3Rpb25QYXJ0cyhzZWxlY3Rpb24pO1xuICB9XG5cbn07XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4vY3JlYXRlU3ltYm9sJztcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3QgZ2VuZXJpY1N5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnZ2VuZXJpYycpO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggR2VuZXJpYy4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIGFsbG93cyBhIGNvbXBvbmVudCB0byBzdXBwb3J0IGEgXCJnZW5lcmljXCIgc3R5bGU6IGEgbWluaW1hbGlzdFxuICAgKiBzdHlsZSB0aGF0IGNhbiBlYXNpbHkgYmUgcmVtb3ZlZCB0byByZXNldCBpdHMgdmlzdWFsIGFwcGVhcmFuY2UgdG8gYVxuICAgKiBiYXNlbGluZSBzdGF0ZS5cbiAgICpcbiAgICogQnkgZGVmYXVsdCwgYSBjb21wb25lbnQgc2hvdWxkIHByb3ZpZGUgYSBtaW5pbWFsIHZpc3VhbCBwcmVzZW50YXRpb24gdGhhdFxuICAgKiBhbGxvd3MgdGhlIGNvbXBvbmVudCB0byBmdW5jdGlvbi4gSG93ZXZlciwgdGhlIG1vcmUgc3R5bGluZyB0aGUgY29tcG9uZW50XG4gICAqIHByb3ZpZGVzIGJ5IGRlZmF1bHQsIHRoZSBoYXJkZXIgaXQgYmVjb21lcyB0byBnZXQgdGhlIGNvbXBvbmVudCB0byBmaXQgaW5cbiAgICogaW4gb3RoZXIgc2V0dGluZ3MuIEVhY2ggQ1NTIHJ1bGUgaGFzIHRvIGJlIG92ZXJyaWRkZW4uIFdvcnNlLCBuZXcgQ1NTIHJ1bGVzXG4gICAqIGFkZGVkIHRvIHRoZSBkZWZhdWx0IHN0eWxlIHdvbid0IGJlIG92ZXJyaWRkZW4gYnkgZGVmYXVsdCwgbWFraW5nIGl0IGhhcmRcbiAgICogdG8ga25vdyB3aGV0aGVyIGEgbmV3IHZlcnNpb24gb2YgYSBjb21wb25lbnQgd2lsbCBzdGlsbCBsb29rIG9rYXkuXG4gICAqXG4gICAqIEFzIGEgY29tcHJvbWlzZSwgdGhlIG1peGluIGRlZmluZXMgYSBgZ2VuZXJpY2AgYXR0cmlidXRlLiBUaGlzIGF0dHJpYnV0ZSBpc1xuICAgKiBub3JtYWxseSBzZXQgYnkgZGVmYXVsdCwgYW5kIHN0eWxlcyBjYW4gYmUgd3JpdHRlbiB0aGF0IGFwcGx5IG9ubHkgd2hlbiB0aGVcbiAgICogZ2VuZXJpYyBhdHRyaWJ1dGUgaXMgc2V0LiBUaGlzIGFsbG93cyB0aGUgY29uc3RydWN0aW9uIG9mIENTUyBydWxlcyB0aGF0XG4gICAqIHdpbGwgb25seSBhcHBseSB0byBnZW5lcmljIGNvbXBvbmVudHMgbGlrZTpcbiAgICpcbiAgICogICAgIDpob3N0KFtnZW5lcmljPVwiXCJdKSB7XG4gICAqICAgICAgIC4uLiBHZW5lcmljIGFwcGVhcmFuY2UgZGVmaW5lZCBoZXJlIC4uLlxuICAgKiAgICAgfVxuICAgKlxuICAgKiBUaGlzIG1ha2VzIGl0IGVhc3kgdG8gcmVtb3ZlIGFsbCBkZWZhdWx0IHN0eWxpbmcg4oCUIHNldCB0aGUgYGdlbmVyaWNgXG4gICAqIGF0dHJpYnV0ZSB0byBmYWxzZSwgYW5kIGFsbCBkZWZhdWx0IHN0eWxpbmcgd2lsbCBiZSByZW1vdmVkLlxuICAgKi9cbiAgY2xhc3MgR2VuZXJpYyBleHRlbmRzIGJhc2Uge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgLy8gU2V0IGRlZmF1bHRzLlxuICAgICAgaWYgKHR5cGVvZiB0aGlzLmdlbmVyaWMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuZ2VuZXJpYyA9IHRoaXMuZGVmYXVsdHMuZ2VuZXJpYztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUaGlzIG1peGluIGRvZXNuJ3QgYWN0dWFsbHkgcmVzcG9uZCB0byBhdHRyaWJ1dGUgY2hhbmdlcywgYnV0IHJlbGllc1xuICAgIC8vIG9uIHNlcGFyYXRlbHktZGVmaW5lZCBiZWhhdmlvciAoZS5nLiwgaW4gQXR0cmlidXRlTWFyc2hhbGxpbmcpIGZvciB0aGF0LlxuICAgIC8vIFN0aWxsLCB3ZSBuZWVkIGRlZmluZSBhIGJhc2VsaW5lIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayB0aGF0IGRvZXNcbiAgICAvLyBub3RoaW5nLCBpbiBjYXNlIHRoaXMgbWl4aW4gZ2V0cyB1c2VkIG9uIGl0cyBvd24uXG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xuICAgICAgaWYgKHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjaykgeyBzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKTsgfVxuICAgIH1cblxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKSB7IHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7IH1cbiAgICAgIHJlZmxlY3RBdHRyaWJ1dGUodGhpcyk7XG4gICAgfVxuXG4gICAgZ2V0IGRlZmF1bHRzKCkge1xuICAgICAgbGV0IGRlZmF1bHRzID0gc3VwZXIuZGVmYXVsdHMgfHwge307XG4gICAgICBkZWZhdWx0cy5nZW5lcmljID0gdHJ1ZTtcbiAgICAgIHJldHVybiBkZWZhdWx0cztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHRoZSBjb21wb25lbnQgd291bGQgbGlrZSB0byByZWNlaXZlIGdlbmVyaWMgc3R5bGluZy5cbiAgICAgKlxuICAgICAqIFRoaXMgcHJvcGVydHkgaXMgdHJ1ZSBieSBkZWZhdWx0IOKAlMKgc2V0IGl0IHRvIGZhbHNlIHRvIHR1cm4gb2ZmIGFsbFxuICAgICAqIGdlbmVyaWMgc3R5bGVzLiBUaGlzIG1ha2VzIGl0IGVhc2llciB0byBhcHBseSBjdXN0b20gc3R5bGluZzsgeW91IHdvbid0XG4gICAgICogaGF2ZSB0byBleHBsaWNpdGx5IG92ZXJyaWRlIHN0eWxpbmcgeW91IGRvbid0IHdhbnQuXG4gICAgICpcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqL1xuICAgIGdldCBnZW5lcmljKCkge1xuICAgICAgcmV0dXJuIHRoaXNbZ2VuZXJpY1N5bWJvbF07XG4gICAgfVxuICAgIHNldCBnZW5lcmljKHZhbHVlKSB7XG4gICAgICBsZXQgcGFyc2VkID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/XG4gICAgICAgIFN0cmluZyh2YWx1ZSkgIT09ICdmYWxzZScgOlxuICAgICAgICB2YWx1ZTtcbiAgICAgIHRoaXNbZ2VuZXJpY1N5bWJvbF0gPSBwYXJzZWQ7XG4gICAgICBpZiAoJ2dlbmVyaWMnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLmdlbmVyaWMgPSB2YWx1ZTsgfVxuICAgIFxuICAgICAgcmVmbGVjdEF0dHJpYnV0ZSh0aGlzKTtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBHZW5lcmljO1xufTtcblxuXG4vLyBXZSByb2xsIG91ciBvd24gYXR0cmlidXRlIHNldHRpbmcgc28gdGhhdCBhbiBleHBsaWNpdGx5IGZhbHNlIHZhbHVlXG4vLyBzaG93cyB1cCBhcyBnZW5lcmljPVwiZmFsc2VcIi5cbmZ1bmN0aW9uIHJlZmxlY3RBdHRyaWJ1dGUoZWxlbWVudCkge1xuICBpZiAoIWVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgIHJldHVybjtcbiAgfVxuICBsZXQgZ2VuZXJpYyA9IGVsZW1lbnQuZ2VuZXJpYztcbiAgaWYgKGdlbmVyaWMgPT09IGZhbHNlKSB7XG4gICAgLy8gRXhwbGljaXRseSB1c2UgZmFsc2Ugc3RyaW5nLlxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdnZW5lcmljJywgJ2ZhbHNlJyk7XG4gIH0gZWxzZSBpZiAoZ2VuZXJpYyA9PSBudWxsKSB7XG4gICAgLy8gRXhwbGljaXRseSByZW1vdmUgYXR0cmlidXRlLlxuICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdnZW5lcmljJyk7XG4gIH0gZWxzZSB7XG4gICAgLy8gVXNlIHRoZSBlbXB0eSBzdHJpbmcgdG8gZ2V0IGF0dHJpYnV0ZSB0byBhcHBlYXIgd2l0aCBubyB2YWx1ZS5cbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZ2VuZXJpYycsICcnKTtcbiAgfVxufVxuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuL2NyZWF0ZVN5bWJvbCc7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IGtleWRvd25MaXN0ZW5lclN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgna2V5ZG93bkxpc3RlbmVyJyk7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBLZXlib2FyZC4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIG1hbmFnZXMgdGhlIGtleWRvd24gaGFuZGxpbmcgZm9yIGEgY29tcG9uZW50LlxuICAgKlxuICAgKiBUaGlzIG1peGluIGhhbmRsZXMgc2V2ZXJhbCBrZXlib2FyZC1yZWxhdGVkIGZlYXR1cmVzLlxuICAgKlxuICAgKiBGaXJzdCwgaXQgd2lyZXMgdXAgYSBzaW5nbGUga2V5ZG93biBldmVudCBoYW5kbGVyIHRoYXQgY2FuIGJlIHNoYXJlZCBieVxuICAgKiBtdWx0aXBsZSBtaXhpbnMgb24gYSBjb21wb25lbnQuIFRoZSBldmVudCBoYW5kbGVyIHdpbGwgaW52b2tlIGEgYGtleWRvd25gXG4gICAqIG1ldGhvZCB3aXRoIHRoZSBldmVudCBvYmplY3QsIGFuZCBhbnkgbWl4aW4gYWxvbmcgdGhlIHByb3RvdHlwZSBjaGFpbiB0aGF0XG4gICAqIHdhbnRzIHRvIGhhbmRsZSB0aGF0IG1ldGhvZCBjYW4gZG8gc28uXG4gICAqXG4gICAqIElmIGEgbWl4aW4gd2FudHMgdG8gaW5kaWNhdGUgdGhhdCBrZXlib2FyZCBldmVudCBoYXMgYmVlbiBoYW5kbGVkLCBhbmQgdGhhdFxuICAgKiBvdGhlciBtaXhpbnMgc2hvdWxkICpub3QqIGhhbmRsZSBpdCwgdGhlIG1peGluJ3MgYGtleWRvd25gIGhhbmRsZXIgc2hvdWxkXG4gICAqIHJldHVybiBhIHZhbHVlIG9mIHRydWUuIFRoZSBjb252ZW50aW9uIHRoYXQgc2VlbXMgdG8gd29yayB3ZWxsIGlzIHRoYXQgYVxuICAgKiBtaXhpbiBzaG91bGQgc2VlIGlmIGl0IHdhbnRzIHRvIGhhbmRsZSB0aGUgZXZlbnQgYW5kLCBpZiBub3QsIHRoZW4gYXNrIHRoZVxuICAgKiBzdXBlcmNsYXNzIHRvIHNlZSBpZiBpdCB3YW50cyB0byBoYW5kbGUgdGhlIGV2ZW50LiBUaGlzIGhhcyB0aGUgZWZmZWN0IG9mXG4gICAqIGdpdmluZyB0aGUgbWl4aW4gdGhhdCB3YXMgYXBwbGllZCBsYXN0IHRoZSBmaXJzdCBjaGFuY2UgYXQgaGFuZGxpbmcgYVxuICAgKiBrZXlib2FyZCBldmVudC5cbiAgICpcbiAgICogRXhhbXBsZTpcbiAgICpcbiAgICogICAgIGtleWRvd24oZXZlbnQpIHtcbiAgICogICAgICAgbGV0IGhhbmRsZWQ7XG4gICAqICAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgKiAgICAgICAgIC8vIEhhbmRsZSB0aGUga2V5cyB5b3Ugd2FudCwgc2V0dGluZyBoYW5kbGVkID0gdHJ1ZSBpZiBhcHByb3ByaWF0ZS5cbiAgICogICAgICAgfVxuICAgKiAgICAgICAvLyBQcmVmZXIgbWl4aW4gcmVzdWx0IGlmIGl0J3MgZGVmaW5lZCwgb3RoZXJ3aXNlIHVzZSBiYXNlIHJlc3VsdC5cbiAgICogICAgICAgcmV0dXJuIGhhbmRsZWQgfHwgKHN1cGVyLmtleWRvd24gJiYgc3VwZXIua2V5ZG93bihldmVudCkpO1xuICAgKiAgICAgfVxuICAgKlxuICAgKiBBIHNlY29uZCBmZWF0dXJlIHByb3ZpZGVkIGJ5IHRoaXMgbWl4aW4gaXMgdGhhdCBpdCBpbXBsaWNpdGx5IG1ha2VzIHRoZVxuICAgKiBjb21wb25lbnQgYSB0YWIgc3RvcCBpZiBpdCBpc24ndCBhbHJlYWR5LCBieSBzZXR0aW5nIGB0YWJJbmRleGAgdG8gMC4gVGhpc1xuICAgKiBoYXMgdGhlIGVmZmVjdCBvZiBhZGRpbmcgdGhlIGNvbXBvbmVudCB0byB0aGUgdGFiIG9yZGVyIGluIGRvY3VtZW50IG9yZGVyLlxuICAgKlxuICAgKiBGaW5hbGx5LCB0aGlzIG1peGluIGlzIGRlc2lnbmVkIHRvIHdvcmsgd2l0aCB0aGUgb3B0aW9uYWxcbiAgICogW0NvbGxlY3RpdmVdKENvbGxlY3RpdmUubWQpIGNsYXNzIHZpYSBhIG1peGluIGxpa2VcbiAgICogW1RhcmdldEluQ29sbGVjdGl2ZV0oVGFyZ2V0SW5Db2xsZWN0aXZlLm1kKS4gVGhpcyBhbGxvd3MgYSBzZXQgb2YgcmVsYXRlZFxuICAgKiBjb21wb25lbnQgaW5zdGFuY2VzIHRvIGNvb3BlcmF0aXZlbHkgaGFuZGxlIHRoZSBrZXlib2FyZC4gU2VlIHRoZVxuICAgKiBDb2xsZWN0aXZlIGNsYXNzIGZvciBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3MgS2V5Ym9hcmQgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIC8vIEFzc3VtZSB0aGlzIGNvbXBvbmVudCBpcyBnb2luZyB0byBoYW5kbGUgdGhlIGtleWJvYXJkIG9uIGl0cyBvd24uXG4gICAgICAvLyBSRVZJRVc6IE1vdmUgdG8gY29ubmVjdGVkQ2FsbGJhY2s/XG4gICAgICBzdGFydExpc3RlbmluZ1RvS2V5ZG93bih0aGlzKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIElmIHdlJ3JlIG5vdyB0aGUgb3V0ZXJtb3N0IGVsZW1lbnQgb2YgdGhlIGNvbGxlY3RpdmUsIHNldCB1cCB0byByZWNlaXZlXG4gICAgICoga2V5Ym9hcmQgZXZlbnRzLiBJZiB3ZSdyZSBubyBsb25nZXIgdGhlIG91dGVybW9zdCBlbGVtZW50LCBzdG9wXG4gICAgICogbGlzdGVuaW5nLlxuICAgICAqL1xuICAgIGNvbGxlY3RpdmVDaGFuZ2VkKCkge1xuICAgICAgaWYgKHN1cGVyLmNvbGxlY3RpdmVDaGFuZ2VkKSB7IHN1cGVyLmNvbGxlY3RpdmVDaGFuZ2VkKCk7IH1cblxuICAgICAgaWYgKHRoaXMuY29sbGVjdGl2ZS5vdXRlcm1vc3RFbGVtZW50ICE9PSB0aGlzKSB7XG4gICAgICAgIC8vIFdlJ3JlIG5vIGxvbmdlciB0aGUgb3V0ZXJtb3N0IGVsZW1lbnQ7IHN0b3AgbGlzdGVuaW5nLlxuICAgICAgICBpZiAoaXNMaXN0ZW5pbmdUb0tleWRvd24odGhpcykpIHtcbiAgICAgICAgICBzdG9wTGlzdGVuaW5nVG9LZXlkb3duKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgIC8vIFNpbmNlIHdlJ3JlIGdvaW5nIHRvIGhhbmRsZSB0aGUga2V5Ym9hcmQsIHNlZSBpZiB3ZSBjYW4gYWRvcHQgYW4gQVJJQVxuICAgICAgICAvLyBsYWJlbCBmcm9tIGFuIGlubmVyIGVsZW1lbnQgb2YgdGhlIGNvbGxlY3RpdmUuXG4gICAgICAgIGxldCBsYWJlbCA9IGdldENvbGxlY3RpdmVBcmlhTGFiZWwodGhpcy5jb2xsZWN0aXZlKTtcbiAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBsYWJlbCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFpc0xpc3RlbmluZ1RvS2V5ZG93bih0aGlzKSkge1xuICAgICAgICBzdGFydExpc3RlbmluZ1RvS2V5ZG93bih0aGlzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jb25uZWN0ZWRDYWxsYmFjaykgeyBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpOyB9XG4gICAgICAvLyBTZXQgYSBkZWZhdWx0IHRhYiBpbmRleCBvZiAwIChkb2N1bWVudCBvcmRlcikgaWYgbm8gdGFiIGluZGV4IGV4aXN0cy5cbiAgICAgIC8vIE1TIEVkZ2UgcmVxdWlyZXMgd2UgZXhwbGljaXRseSBjaGVjayBmb3IgcHJlc2VuY2Ugb2YgdGFiaW5kZXggYXR0cmlidXRlLlxuICAgICAgaWYgKHRoaXMuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpID09IG51bGwgfHwgdGhpcy50YWJJbmRleCA8IDApIHtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgdGhlIGluZGljYXRlZCBrZXlib2FyZCBldmVudC5cbiAgICAgKlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy4gVGhpcyB3aWxsXG4gICAgICogdHlwaWNhbGx5IGJlIGhhbmRsZWQgYnkgb3RoZXIgbWl4aW5zLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBldmVudCAtIHRoZSBrZXlib2FyZCBldmVudFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhlIGV2ZW50IHdhcyBoYW5kbGVkXG4gICAgICovXG4gICAga2V5ZG93bihldmVudCkge1xuICAgICAgaWYgKHN1cGVyLmtleWRvd24pIHsgcmV0dXJuIHN1cGVyLmtleWRvd24oZXZlbnQpOyB9XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gS2V5Ym9hcmQ7XG59O1xuXG5cbi8vIEZpcmUgdGhlIGtleWRvd24oKSBtZXRob2Qgb24gdGhlIGVsZW1lbnQgb3IgKGlmIGl0IGJlbG9uZ3MgdG8gYSBjb2xsZWN0aXZlKVxuLy8gYWxsIGVsZW1lbnRzIGluIHRoZSBjb2xsZWN0aXZlLlxuLy9cbi8vIE5vdGU6IHRoZSB2YWx1ZSBvZiAndGhpcycgaXMgYm91bmQgdG8gdGhlIGVsZW1lbnQgd2hpY2ggcmVjZWl2ZWQgdGhlIGV2ZW50LlxuZnVuY3Rpb24ga2V5ZG93bihldmVudCkge1xuXG4gIGxldCBoYW5kbGVkID0gZmFsc2U7XG5cbiAgaWYgKHRoaXMuY29sbGVjdGl2ZSkge1xuICAgIC8vIEdpdmUgY29sbGVjdGl2ZSBlbGVtZW50cyBhIHNob3QgYXQgdGhlIGV2ZW50LCB3b3JraW5nIGZyb20gaW5uZXJtb3N0IHRvXG4gICAgLy8gb3V0ZXJtb3N0ICh0aGlzIGVsZW1lbnQpLlxuICAgIGxldCBlbGVtZW50cyA9IHRoaXMuY29sbGVjdGl2ZS5lbGVtZW50cztcbiAgICBmb3IgKGxldCBpID0gZWxlbWVudHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCBlbGVtZW50ID0gZWxlbWVudHNbaV07XG4gICAgICBoYW5kbGVkID0gZWxlbWVudC5rZXlkb3duICYmIGVsZW1lbnQua2V5ZG93bihldmVudCk7XG4gICAgICBpZiAoaGFuZGxlZCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gQ29tcG9uZW50IGlzIGhhbmRsaW5nIHRoZSBrZXlib2FyZCBvbiBpdHMgb3duLlxuICAgIGhhbmRsZWQgPSB0aGlzLmtleWRvd24oZXZlbnQpO1xuICB9XG5cbiAgaWYgKGhhbmRsZWQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG59XG5cblxuLy8gUmV0dXJuIHRoZSBmaXJzdCBBUklBIGxhYmVsIGRlZmluZWQgYnkgdGhlIGNvbGxlY3RpdmUuXG5mdW5jdGlvbiBnZXRDb2xsZWN0aXZlQXJpYUxhYmVsKGNvbGxlY3RpdmUpIHtcbiAgbGV0IGxhYmVscyA9IGNvbGxlY3RpdmUuZWxlbWVudHMubWFwKGVsZW1lbnQgPT4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSk7XG4gIC8vIFdvdWxkIHByZWZlciB0byB1c2UgQXJyYXkucHJvdG90eXBlLmZpbmQgaGVyZSwgYnV0IElFIDExIGRvZXNuJ3QgaGF2ZSBpdC5cbiAgbGV0IG5vbk51bGxMYWJlbHMgPSBsYWJlbHMuZmlsdGVyKGxhYmVsID0+IGxhYmVsICE9IG51bGwpO1xuICByZXR1cm4gbm9uTnVsbExhYmVsc1swXTtcbn1cblxuXG5mdW5jdGlvbiBpc0xpc3RlbmluZ1RvS2V5ZG93bihlbGVtZW50KSB7XG4gIHJldHVybiBlbGVtZW50W2tleWRvd25MaXN0ZW5lclN5bWJvbF0gIT0gbnVsbDtcbn1cblxuXG5mdW5jdGlvbiBzdGFydExpc3RlbmluZ1RvS2V5ZG93bihlbGVtZW50KSB7XG4gIGVsZW1lbnRba2V5ZG93bkxpc3RlbmVyU3ltYm9sXSA9IGtleWRvd24uYmluZChlbGVtZW50KTtcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZWxlbWVudFtrZXlkb3duTGlzdGVuZXJTeW1ib2xdKTtcbn1cblxuXG5mdW5jdGlvbiBzdG9wTGlzdGVuaW5nVG9LZXlkb3duKGVsZW1lbnQpIHtcbiAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZWxlbWVudFtrZXlkb3duTGlzdGVuZXJTeW1ib2xdKTtcbiAgZWxlbWVudFtrZXlkb3duTGlzdGVuZXJTeW1ib2xdID0gbnVsbDtcbiAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG59XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4vY3JlYXRlU3ltYm9sJztcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3QgbmF2aWdhdGlvbkF4aXNTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ25hdmlnYXRpb25BeGlzJyk7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBLZXlib2FyZERpcmVjdGlvbi4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIG1hcHMgZGlyZWN0aW9uIGtleXMgKExlZnQsIFJpZ2h0LCBldGMuKSB0byBkaXJlY3Rpb24gc2VtYW50aWNzXG4gICAqIChnbyBsZWZ0LCBnbyByaWdodCwgZXRjLikuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyB0aGUgY29tcG9uZW50IHRvIGludm9rZSBhIGBrZXlkb3duYCBtZXRob2Qgd2hlbiBhIGtleSBpc1xuICAgKiBwcmVzc2VkLiBZb3UgY2FuIHVzZSB0aGUgW0tleWJvYXJkXShLZXlib2FyZC5tZCkgbWl4aW4gZm9yIHRoYXQgcHVycG9zZSwgb3JcbiAgICogd2lyZSB1cCB5b3VyIG93biBrZXlib2FyZCBoYW5kbGluZyBhbmQgY2FsbCBga2V5ZG93bmAgeW91cnNlbGYuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gY2FsbHMgbWV0aG9kcyBzdWNoIGFzIGBnb0xlZnRgIGFuZCBgZ29SaWdodGAuIFlvdSBjYW4gZGVmaW5lXG4gICAqIHdoYXQgdGhhdCBtZWFucyBieSBpbXBsZW1lbnRpbmcgdGhvc2UgbWV0aG9kcyB5b3Vyc2VsZi4gSWYgeW91IHdhbnQgdG8gdXNlXG4gICAqIGRpcmVjdGlvbiBrZXlzIHRvIG5hdmlnYXRlIGEgc2VsZWN0aW9uLCB1c2UgdGhpcyBtaXhpbiB3aXRoIHRoZVxuICAgKiBbRGlyZWN0aW9uU2VsZWN0aW9uXShEaXJlY3Rpb25TZWxlY3Rpb24ubWQpIG1peGluLlxuICAgKi9cbiAgY2xhc3MgS2V5Ym9hcmREaXJlY3Rpb24gZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIC8vIFNldCBkZWZhdWx0cy5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5uYXZpZ2F0aW9uQXhpcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5uYXZpZ2F0aW9uQXhpcyA9IHRoaXMuZGVmYXVsdHMubmF2aWdhdGlvbkF4aXM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IGRlZmF1bHRzKCkge1xuICAgICAgbGV0IGRlZmF1bHRzID0gc3VwZXIuZGVmYXVsdHMgfHwge307XG4gICAgICBkZWZhdWx0cy5uYXZpZ2F0aW9uQXhpcyA9ICdib3RoJztcbiAgICAgIHJldHVybiBkZWZhdWx0cztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgZG93bi5cbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuXG4gICAgICovXG4gICAgZ29Eb3duKCkge1xuICAgICAgaWYgKHN1cGVyLmdvRG93bikgeyByZXR1cm4gc3VwZXIuZ29Eb3duKCk7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgdG8gdGhlIGVuZCAoZS5nLiwgb2YgYSBsaXN0KS5cbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuXG4gICAgICovXG4gICAgZ29FbmQoKSB7XG4gICAgICBpZiAoc3VwZXIuZ29FbmQpIHsgcmV0dXJuIHN1cGVyLmdvRW5kKCk7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgbGVmdC5cbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuXG4gICAgICovXG4gICAgZ29MZWZ0KCkge1xuICAgICAgaWYgKHN1cGVyLmdvTGVmdCkgeyByZXR1cm4gc3VwZXIuZ29MZWZ0KCk7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgcmlnaHQuXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLlxuICAgICAqL1xuICAgIGdvUmlnaHQoKSB7XG4gICAgICBpZiAoc3VwZXIuZ29SaWdodCkgeyByZXR1cm4gc3VwZXIuZ29SaWdodCgpOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIHRvIHRoZSBzdGFydCAoZS5nLiwgb2YgYVxuICAgICAqIGxpc3QpLiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuXG4gICAgICovXG4gICAgZ29TdGFydCgpIHtcbiAgICAgIGlmIChzdXBlci5nb1N0YXJ0KSB7IHJldHVybiBzdXBlci5nb1N0YXJ0KCk7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgdXAuXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLlxuICAgICAqL1xuICAgIGdvVXAoKSB7XG4gICAgICBpZiAoc3VwZXIuZ29VcCkgeyByZXR1cm4gc3VwZXIuZ29VcCgpOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHRoZSBkaXJlY3Rpb24gb2YgcGVybWl0dGVkIG5hdmlnYXRpb24gd2l0aCB0aGUga2V5Ym9hcmQuXG4gICAgICpcbiAgICAgKiBBY2NlcHRlZCB2YWx1ZXMgYXJlIFwiaG9yaXpvbnRhbFwiLCBcInZlcnRpY2FsXCIsIG9yIFwiYm90aFwiICh0aGUgZGVmYXVsdCkuXG4gICAgICogSWYgdGhpcyBwcm9wZXJ0eSBpcyBcImhvcml6b250YWxcIiwgdGhlIFVwIEFycm93IGFuZCBEb3duIEFycm93IGtleXMgd2lsbFxuICAgICAqIGJlIGlnbm9yZWQuIENvbnZlcnNlbHksIGlmIHRoaXMgaXMgXCJ2ZXJ0aWNhbFwiLCB0aGUgTGVmdCBBcnJvdyBhbmQgUmlnaHRcbiAgICAgKiBBcnJvdyBrZXlzIHdpbGwgYmUgaWdub3JlZC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0IG5hdmlnYXRpb25BeGlzKCkge1xuICAgICAgcmV0dXJuIHRoaXNbbmF2aWdhdGlvbkF4aXNTeW1ib2xdO1xuICAgIH1cbiAgICBzZXQgbmF2aWdhdGlvbkF4aXModmFsdWUpIHtcbiAgICAgIHRoaXNbbmF2aWdhdGlvbkF4aXNTeW1ib2xdID0gdmFsdWU7XG4gICAgICBpZiAoJ25hdmlnYXRpb25BeGlzJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5uYXZpZ2F0aW9uQXhpcyA9IHZhbHVlOyB9XG4gICAgfVxuXG4gICAga2V5ZG93bihldmVudCkge1xuICAgICAgbGV0IGhhbmRsZWQ7XG5cbiAgICAgIGxldCBheGlzID0gdGhpcy5uYXZpZ2F0aW9uQXhpcztcbiAgICAgIGxldCBob3Jpem9udGFsID0gKGF4aXMgPT09ICdob3Jpem9udGFsJyB8fCBheGlzID09PSAnYm90aCcpO1xuICAgICAgbGV0IHZlcnRpY2FsID0gKGF4aXMgPT09ICd2ZXJ0aWNhbCcgfHwgYXhpcyA9PT0gJ2JvdGgnKTtcblxuICAgICAgLy8gSWdub3JlIExlZnQvUmlnaHQga2V5cyB3aGVuIG1ldGFLZXkgb3IgYWx0S2V5IG1vZGlmaWVyIGlzIGFsc28gcHJlc3NlZCxcbiAgICAgIC8vIGFzIHRoZSB1c2VyIG1heSBiZSB0cnlpbmcgdG8gbmF2aWdhdGUgYmFjayBvciBmb3J3YXJkIGluIHRoZSBicm93c2VyLlxuICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgIGNhc2UgMzU6IC8vIEVuZFxuICAgICAgICAgIGhhbmRsZWQgPSB0aGlzLmdvRW5kKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzY6IC8vIEhvbWVcbiAgICAgICAgICBoYW5kbGVkID0gdGhpcy5nb1N0YXJ0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzc6IC8vIExlZnRcbiAgICAgICAgICBpZiAoaG9yaXpvbnRhbCAmJiAhZXZlbnQubWV0YUtleSAmJiAhZXZlbnQuYWx0S2V5KSB7XG4gICAgICAgICAgICBoYW5kbGVkID0gdGhpcy5nb0xlZnQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzg6IC8vIFVwXG4gICAgICAgICAgaWYgKHZlcnRpY2FsKSB7XG4gICAgICAgICAgICBoYW5kbGVkID0gZXZlbnQuYWx0S2V5ID8gdGhpcy5nb1N0YXJ0KCkgOiB0aGlzLmdvVXAoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzk6IC8vIFJpZ2h0XG4gICAgICAgICAgaWYgKGhvcml6b250YWwgJiYgIWV2ZW50Lm1ldGFLZXkgJiYgIWV2ZW50LmFsdEtleSkge1xuICAgICAgICAgICAgaGFuZGxlZCA9IHRoaXMuZ29SaWdodCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0MDogLy8gRG93blxuICAgICAgICAgIGlmICh2ZXJ0aWNhbCkge1xuICAgICAgICAgICAgaGFuZGxlZCA9IGV2ZW50LmFsdEtleSA/IHRoaXMuZ29FbmQoKSA6IHRoaXMuZ29Eb3duKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgLy8gUHJlZmVyIG1peGluIHJlc3VsdCBpZiBpdCdzIGRlZmluZWQsIG90aGVyd2lzZSB1c2UgYmFzZSByZXN1bHQuXG4gICAgICByZXR1cm4gaGFuZGxlZCB8fCAoc3VwZXIua2V5ZG93biAmJiBzdXBlci5rZXlkb3duKGV2ZW50KSk7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gS2V5Ym9hcmREaXJlY3Rpb247XG59O1xuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBLZXlib2FyZFBhZ2VkU2VsZWN0aW9uLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggbWFwcyBwYWdlIGtleXMgKFBhZ2UgVXAsIFBhZ2UgRG93bikgaW50byBvcGVyYXRpb25zIHRoYXQgbW92ZVxuICAgKiB0aGUgc2VsZWN0aW9uIGJ5IG9uZSBwYWdlLlxuICAgKlxuICAgKiBUaGUga2V5Ym9hcmQgaW50ZXJhY3Rpb24gbW9kZWwgZ2VuZXJhbGx5IGZvbGxvd3MgdGhhdCBvZiBNaWNyb3NvZnQgV2luZG93cydcbiAgICogbGlzdCBib3hlcyBpbnN0ZWFkIG9mIHRob3NlIGluIE9TIFg6XG4gICAqXG4gICAqICogVGhlIFBhZ2UgVXAvRG93biBhbmQgSG9tZS9FbmQga2V5cyBhY3R1YWxseSBjaGFuZ2UgdGhlIHNlbGVjdGlvbiwgcmF0aGVyXG4gICAqICAgdGhhbiBqdXN0IHNjcm9sbGluZy4gVGhlIGZvcm1lciBiZWhhdmlvciBzZWVtcyBtb3JlIGdlbmVyYWxseSB1c2VmdWwgZm9yXG4gICAqICAga2V5Ym9hcmQgdXNlcnMuXG4gICAqXG4gICAqICogUHJlc3NpbmcgUGFnZSBVcC9Eb3duIHdpbGwgY2hhbmdlIHRoZSBzZWxlY3Rpb24gdG8gdGhlIHRvcG1vc3QvYm90dG9tbW9zdFxuICAgKiAgIHZpc2libGUgaXRlbSBpZiB0aGUgc2VsZWN0aW9uIGlzIG5vdCBhbHJlYWR5IHRoZXJlLiBUaGVyZWFmdGVyLCB0aGUga2V5XG4gICAqICAgd2lsbCBtb3ZlIHRoZSBzZWxlY3Rpb24gdXAvZG93biBieSBhIHBhZ2UsIGFuZCAocGVyIHRoZSBhYm92ZSBwb2ludCkgbWFrZVxuICAgKiAgIHRoZSBzZWxlY3RlZCBpdGVtIHZpc2libGUuXG4gICAqXG4gICAqIFRvIGVuc3VyZSB0aGUgc2VsZWN0ZWQgaXRlbSBpcyBpbiB2aWV3IGZvbGxvd2luZyB1c2Ugb2YgUGFnZSBVcC9Eb3duLCB1c2VcbiAgICogdGhlIHJlbGF0ZWQgW1NlbGVjdGlvbkluVmlld10oU2VsZWN0aW9uSW5WaWV3Lm1kKSBtaXhpbi5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIHRoZSBjb21wb25lbnQgdG8gaW52b2tlIGEgYGtleWRvd25gIG1ldGhvZCB3aGVuIGEga2V5IGlzXG4gICAqIHByZXNzZWQuIFlvdSBjYW4gdXNlIHRoZSBbS2V5Ym9hcmRdKEtleWJvYXJkLm1kKSBtaXhpbiBmb3IgdGhhdCBwdXJwb3NlLCBvclxuICAgKiB3aXJlIHVwIHlvdXIgb3duIGtleWJvYXJkIGhhbmRsaW5nIGFuZCBjYWxsIGBrZXlkb3duYCB5b3Vyc2VsZi5cbiAgICovXG4gIGNsYXNzIEtleWJvYXJkUGFnZWRTZWxlY3Rpb24gZXh0ZW5kcyBiYXNlIHtcblxuICAgIGtleWRvd24oZXZlbnQpIHtcbiAgICAgIGxldCBoYW5kbGVkO1xuICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgIGNhc2UgMzM6IC8vIFBhZ2UgVXBcbiAgICAgICAgICBoYW5kbGVkID0gdGhpcy5wYWdlVXAoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzNDogLy8gUGFnZSBEb3duXG4gICAgICAgICAgaGFuZGxlZCA9IHRoaXMucGFnZURvd24oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIC8vIFByZWZlciBtaXhpbiByZXN1bHQgaWYgaXQncyBkZWZpbmVkLCBvdGhlcndpc2UgdXNlIGJhc2UgcmVzdWx0LlxuICAgICAgcmV0dXJuIGhhbmRsZWQgfHwgKHN1cGVyLmtleWRvd24gJiYgc3VwZXIua2V5ZG93bihldmVudCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNjcm9sbCBkb3duIG9uZSBwYWdlLlxuICAgICAqL1xuICAgIHBhZ2VEb3duKCkge1xuICAgICAgaWYgKHN1cGVyLnBhZ2VEb3duKSB7IHN1cGVyLnBhZ2VEb3duKCk7IH1cbiAgICAgIHJldHVybiBzY3JvbGxPbmVQYWdlKHRoaXMsIHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNjcm9sbCB1cCBvbmUgcGFnZS5cbiAgICAgKi9cbiAgICBwYWdlVXAoKSB7XG4gICAgICBpZiAoc3VwZXIucGFnZVVwKSB7IHN1cGVyLnBhZ2VVcCgpOyB9XG4gICAgICByZXR1cm4gc2Nyb2xsT25lUGFnZSh0aGlzLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGVsZW1lbnQgdGhhdCBzaG91bGQgYmUgc2Nyb2xsZWQgd2l0aCB0aGUgUGFnZSBVcC9Eb3duIGtleXMuXG4gICAgICogRGVmYXVsdCBpcyB0aGUgY3VycmVudCBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIGdldCBzY3JvbGxUYXJnZXQoKSB7XG4gICAgICAvLyBQcmVmZXIgYmFzZSByZXN1bHQuXG4gICAgICByZXR1cm4gJ3Njcm9sbFRhcmdldCcgaW4gYmFzZS5wcm90b3R5cGUgPyBzdXBlci5zY3JvbGxUYXJnZXQgOiB0aGlzO1xuICAgIH1cbiAgICBzZXQgc2Nyb2xsVGFyZ2V0KGVsZW1lbnQpIHtcbiAgICAgIGlmICgnc2Nyb2xsVGFyZ2V0JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zY3JvbGxUYXJnZXQgPSBlbGVtZW50OyB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIEtleWJvYXJkUGFnZWRTZWxlY3Rpb247XG59O1xuXG5cbi8vIFJldHVybiB0aGUgaXRlbSB3aG9zZSBjb250ZW50IHNwYW5zIHRoZSBnaXZlbiB5IHBvc2l0aW9uIChyZWxhdGl2ZSB0byB0aGVcbi8vIHRvcCBvZiB0aGUgbGlzdCdzIHNjcm9sbGluZyBjbGllbnQgYXJlYSksIG9yIG51bGwgaWYgbm90IGZvdW5kLlxuLy9cbi8vIElmIGRvd253YXJkIGlzIHRydWUsIG1vdmUgZG93biB0aGUgbGlzdCBvZiBpdGVtcyB0byBmaW5kIHRoZSBmaXJzdCBpdGVtXG4vLyBmb3VuZCBhdCB0aGUgZ2l2ZW4geSBwb3NpdGlvbjsgaWYgZG93bndhcmQgaXMgZmFsc2UsIG1vdmUgdXAgdGhlIGxpc3Qgb2Zcbi8vIGl0ZW1zIHRvIGZpbmQgdGhlIGxhc3QgaXRlbSBhdCB0aGF0IHBvc2l0aW9uLlxuZnVuY3Rpb24gZ2V0SW5kZXhPZkl0ZW1BdFkoZWxlbWVudCwgeSwgZG93bndhcmQpIHtcbiAgbGV0IGl0ZW1zID0gZWxlbWVudC5pdGVtcztcbiAgbGV0IHN0YXJ0ID0gZG93bndhcmQgPyAwIDogaXRlbXMubGVuZ3RoIC0gMTtcbiAgbGV0IGVuZCA9IGRvd253YXJkID8gaXRlbXMubGVuZ3RoIDogMDtcbiAgbGV0IHN0ZXAgPSBkb3dud2FyZCA/IDEgOiAtMTtcbiAgbGV0IHNjcm9sbFRhcmdldCA9IGVsZW1lbnQuc2Nyb2xsVGFyZ2V0O1xuICBsZXQgdG9wT2ZDbGllbnRBcmVhID0gc2Nyb2xsVGFyZ2V0Lm9mZnNldFRvcCArIHNjcm9sbFRhcmdldC5jbGllbnRUb3A7XG5cbiAgLy8gRmluZCB0aGUgaXRlbSBzcGFubmluZyB0aGUgaW5kaWNhdGVkIHkgY29vcmRpbmF0ZS5cbiAgbGV0IGl0ZW07XG4gIGxldCBpdGVtSW5kZXggPSBzdGFydDtcbiAgbGV0IGl0ZW1Ub3A7XG4gIGxldCBmb3VuZCA9IGZhbHNlO1xuICB3aGlsZSAoaXRlbUluZGV4ICE9PSBlbmQpIHtcbiAgICBpdGVtID0gaXRlbXNbaXRlbUluZGV4XTtcbiAgICBpdGVtVG9wID0gaXRlbS5vZmZzZXRUb3AgLSB0b3BPZkNsaWVudEFyZWE7XG4gICAgbGV0IGl0ZW1Cb3R0b20gPSBpdGVtVG9wICsgaXRlbS5vZmZzZXRIZWlnaHQ7XG4gICAgaWYgKGl0ZW1Ub3AgPD0geSAmJiBpdGVtQm90dG9tID49IHkpIHtcbiAgICAgIC8vIEl0ZW0gc3BhbnMgdGhlIGluZGljYXRlZCB5IGNvb3JkaW5hdGUuXG4gICAgICBmb3VuZCA9IHRydWU7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaXRlbUluZGV4ICs9IHN0ZXA7XG4gIH1cblxuICBpZiAoIWZvdW5kKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvLyBXZSBtYXkgaGF2ZSBmb3VuZCBhbiBpdGVtIHdob3NlIHBhZGRpbmcgc3BhbnMgdGhlIGdpdmVuIHkgY29vcmRpbmF0ZSxcbiAgLy8gYnV0IHdob3NlIGNvbnRlbnQgaXMgYWN0dWFsbHkgYWJvdmUvYmVsb3cgdGhhdCBwb2ludC5cbiAgLy8gVE9ETzogSWYgdGhlIGl0ZW0gaGFzIGEgYm9yZGVyLCB0aGVuIHBhZGRpbmcgc2hvdWxkIGJlIGluY2x1ZGVkIGluXG4gIC8vIGNvbnNpZGVyaW5nIGEgaGl0LlxuICBsZXQgaXRlbVN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShpdGVtKTtcbiAgbGV0IGl0ZW1QYWRkaW5nVG9wID0gcGFyc2VGbG9hdChpdGVtU3R5bGUucGFkZGluZ1RvcCk7XG4gIGxldCBpdGVtUGFkZGluZ0JvdHRvbSA9IHBhcnNlRmxvYXQoaXRlbVN0eWxlLnBhZGRpbmdCb3R0b20pO1xuICBsZXQgY29udGVudFRvcCA9IGl0ZW1Ub3AgKyBpdGVtLmNsaWVudFRvcCArIGl0ZW1QYWRkaW5nVG9wO1xuICBsZXQgY29udGVudEJvdHRvbSA9IGNvbnRlbnRUb3AgKyBpdGVtLmNsaWVudEhlaWdodCAtIGl0ZW1QYWRkaW5nVG9wIC0gaXRlbVBhZGRpbmdCb3R0b207XG4gIGlmIChkb3dud2FyZCAmJiBjb250ZW50VG9wIDw9IHkgfHwgIWRvd253YXJkICYmIGNvbnRlbnRCb3R0b20gPj0geSkge1xuICAgIC8vIFRoZSBpbmRpY2F0ZWQgY29vcmRpbmF0ZSBoaXRzIHRoZSBhY3R1YWwgaXRlbSBjb250ZW50LlxuICAgIHJldHVybiBpdGVtSW5kZXg7XG4gIH1cbiAgZWxzZSB7XG4gICAgLy8gVGhlIGluZGljYXRlZCBjb29yZGluYXRlIGZhbGxzIHdpdGhpbiB0aGUgaXRlbSdzIHBhZGRpbmcuIEJhY2sgdXAgdG9cbiAgICAvLyB0aGUgaXRlbSBiZWxvdy9hYm92ZSB0aGUgaXRlbSB3ZSBmb3VuZCBhbmQgcmV0dXJuIHRoYXQuXG4gICAgcmV0dXJuIGl0ZW1JbmRleCAtIHN0ZXA7XG4gIH1cbn1cblxuLy8gTW92ZSBieSBvbmUgcGFnZSBkb3dud2FyZCAoaWYgZG93bndhcmQgaXMgdHJ1ZSksIG9yIHVwd2FyZCAoaWYgZmFsc2UpLlxuLy8gUmV0dXJuIHRydWUgaWYgd2UgZW5kZWQgdXAgY2hhbmdpbmcgdGhlIHNlbGVjdGlvbiwgZmFsc2UgaWYgbm90LlxuLy8gVE9ETzogQmV0dGVyIHN1cHBvcnQgZm9yIGhvcml6b250YWwgbGlzdHMuXG5mdW5jdGlvbiBzY3JvbGxPbmVQYWdlKGVsZW1lbnQsIGRvd253YXJkKSB7XG5cbiAgLy8gRGV0ZXJtaW5lIHRoZSBpdGVtIHZpc2libGUganVzdCBhdCB0aGUgZWRnZSBvZiBkaXJlY3Rpb24gd2UncmUgaGVhZGluZy5cbiAgLy8gV2UnbGwgc2VsZWN0IHRoYXQgaXRlbSBpZiBpdCdzIG5vdCBhbHJlYWR5IHNlbGVjdGVkLlxuICBsZXQgc2Nyb2xsVGFyZ2V0ID0gZWxlbWVudC5zY3JvbGxUYXJnZXQ7XG4gIGxldCBlZGdlID0gc2Nyb2xsVGFyZ2V0LnNjcm9sbFRvcCArIChkb3dud2FyZCA/IHNjcm9sbFRhcmdldC5jbGllbnRIZWlnaHQgOiAwKTtcbiAgbGV0IGluZGV4T2ZJdGVtQXRFZGdlID0gZ2V0SW5kZXhPZkl0ZW1BdFkoZWxlbWVudCwgZWRnZSwgZG93bndhcmQpO1xuXG4gIGxldCBzZWxlY3RlZEluZGV4ID0gZWxlbWVudC5zZWxlY3RlZEluZGV4O1xuICBsZXQgbmV3SW5kZXg7XG4gIGlmIChpbmRleE9mSXRlbUF0RWRnZSAmJiBzZWxlY3RlZEluZGV4ID09PSBpbmRleE9mSXRlbUF0RWRnZSkge1xuICAgIC8vIFRoZSBpdGVtIGF0IHRoZSBlZGdlIHdhcyBhbHJlYWR5IHNlbGVjdGVkLCBzbyBzY3JvbGwgaW4gdGhlIGluZGljYXRlZFxuICAgIC8vIGRpcmVjdGlvbiBieSBvbmUgcGFnZS4gTGVhdmUgdGhlIG5ldyBpdGVtIGF0IHRoYXQgZWRnZSBzZWxlY3RlZC5cbiAgICBsZXQgZGVsdGEgPSAoZG93bndhcmQgPyAxIDogLTEpICogc2Nyb2xsVGFyZ2V0LmNsaWVudEhlaWdodDtcbiAgICBuZXdJbmRleCA9IGdldEluZGV4T2ZJdGVtQXRZKGVsZW1lbnQsIGVkZ2UgKyBkZWx0YSwgZG93bndhcmQpO1xuICB9XG4gIGVsc2Uge1xuICAgIC8vIFRoZSBpdGVtIGF0IHRoZSBlZGdlIHdhc24ndCBzZWxlY3RlZCB5ZXQuIEluc3RlYWQgb2Ygc2Nyb2xsaW5nLCB3ZSdsbFxuICAgIC8vIGp1c3Qgc2VsZWN0IHRoYXQgaXRlbS4gVGhhdCBpcywgdGhlIGZpcnN0IGF0dGVtcHQgdG8gcGFnZSB1cC9kb3duXG4gICAgLy8gdXN1YWxseSBqdXN0IG1vdmVzIHRoZSBzZWxlY3Rpb24gdG8gdGhlIGVkZ2UgaW4gdGhhdCBkaXJlY3Rpb24uXG4gICAgbmV3SW5kZXggPSBpbmRleE9mSXRlbUF0RWRnZTtcbiAgfVxuXG4gIGlmICghbmV3SW5kZXgpIHtcbiAgICAvLyBXZSBjYW4ndCBmaW5kIGFuIGl0ZW0gaW4gdGhlIGRpcmVjdGlvbiB3ZSB3YW50IHRvIHRyYXZlbC4gU2VsZWN0IHRoZVxuICAgIC8vIGxhc3QgaXRlbSAoaWYgbW92aW5nIGRvd253YXJkKSBvciBmaXJzdCBpdGVtIChpZiBtb3ZpbmcgdXB3YXJkKS5cbiAgICBuZXdJbmRleCA9IChkb3dud2FyZCA/IGVsZW1lbnQuaXRlbXMubGVuZ3RoIC0gMSA6IDApO1xuICB9XG5cbiAgaWYgKG5ld0luZGV4ICE9PSBzZWxlY3RlZEluZGV4KSB7XG4gICAgZWxlbWVudC5zZWxlY3RlZEluZGV4ID0gbmV3SW5kZXg7XG4gICAgcmV0dXJuIHRydWU7IC8vIFdlIGhhbmRsZWQgdGhlIHBhZ2UgdXAvZG93biBvdXJzZWx2ZXMuXG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlOyAvLyBXZSBkaWRuJ3QgZG8gYW55dGhpbmcuXG4gIH1cbn1cbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi9jcmVhdGVTeW1ib2wnO1xuXG5cbi8vIFN5bWJvbHMgZm9yIHByaXZhdGUgZGF0YSBtZW1iZXJzIG9uIGFuIGVsZW1lbnQuXG5jb25zdCBpdGVtVGV4dENvbnRlbnRzU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdpdGVtVGV4dENvbnRlbnRzJyk7XG5jb25zdCB0eXBlZFByZWZpeFN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgndHlwZWRQcmVmaXgnKTtcbmNvbnN0IHByZWZpeFRpbWVvdXRTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3ByZWZpeFRpbWVvdXQnKTtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIEtleWJvYXJkUHJlZml4U2VsZWN0aW9uLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gdGhhdCBoYW5kbGVzIGxpc3QgYm94LXN0eWxlIHByZWZpeCB0eXBpbmcsIGluIHdoaWNoIHRoZSB1c2VyIGNhbiB0eXBlXG4gICAqIGEgc3RyaW5nIHRvIHNlbGVjdCB0aGUgZmlyc3QgaXRlbSB0aGF0IGJlZ2lucyB3aXRoIHRoYXQgc3RyaW5nLlxuICAgKlxuICAgKiBFeGFtcGxlOiBzdXBwb3NlIGEgY29tcG9uZW50IHVzaW5nIHRoaXMgbWl4aW4gaGFzIHRoZSBmb2xsb3dpbmcgaXRlbXM6XG4gICAqXG4gICAqICAgICA8c2FtcGxlLWxpc3QtY29tcG9uZW50PlxuICAgKiAgICAgICA8ZGl2PkFwcGxlPC9kaXY+XG4gICAqICAgICAgIDxkaXY+QXByaWNvdDwvZGl2PlxuICAgKiAgICAgICA8ZGl2PkJhbmFuYTwvZGl2PlxuICAgKiAgICAgICA8ZGl2PkJsYWNrYmVycnk8L2Rpdj5cbiAgICogICAgICAgPGRpdj5CbHVlYmVycnk8L2Rpdj5cbiAgICogICAgICAgPGRpdj5DYW50YWxvdXBlPC9kaXY+XG4gICAqICAgICAgIDxkaXY+Q2hlcnJ5PC9kaXY+XG4gICAqICAgICAgIDxkaXY+TGVtb248L2Rpdj5cbiAgICogICAgICAgPGRpdj5MaW1lPC9kaXY+XG4gICAqICAgICA8L3NhbXBsZS1saXN0LWNvbXBvbmVudD5cbiAgICpcbiAgICogSWYgdGhpcyBjb21wb25lbnQgcmVjZWl2ZXMgdGhlIGZvY3VzLCBhbmQgdGhlIHVzZXIgcHJlc3NlcyB0aGUgXCJiXCIgb3IgXCJCXCJcbiAgICoga2V5LCB0aGUgXCJCYW5hbmFcIiBpdGVtIHdpbGwgYmUgc2VsZWN0ZWQsIGJlY2F1c2UgaXQncyB0aGUgZmlyc3QgaXRlbSB0aGF0XG4gICAqIG1hdGNoZXMgdGhlIHByZWZpeCBcImJcIi4gKE1hdGNoaW5nIGlzIGNhc2UtaW5zZW5zaXRpdmUuKSBJZiB0aGUgdXNlciBub3dcbiAgICogcHJlc3NlcyB0aGUgXCJsXCIgb3IgXCJMXCIga2V5IHF1aWNrbHksIHRoZSBwcmVmaXggdG8gbWF0Y2ggYmVjb21lcyBcImJsXCIsIHNvXG4gICAqIFwiQmxhY2tiZXJyeVwiIHdpbGwgYmUgc2VsZWN0ZWQuXG4gICAqXG4gICAqIFRoZSBwcmVmaXggdHlwaW5nIGZlYXR1cmUgaGFzIGEgb25lIHNlY29uZCB0aW1lb3V0IOKAlMKgdGhlIHByZWZpeCB0byBtYXRjaFxuICAgKiB3aWxsIGJlIHJlc2V0IGFmdGVyIGEgc2Vjb25kIGhhcyBwYXNzZWQgc2luY2UgdGhlIHVzZXIgbGFzdCB0eXBlZCBhIGtleS5cbiAgICogSWYsIGluIHRoZSBhYm92ZSBleGFtcGxlLCB0aGUgdXNlciB3YWl0cyBhIHNlY29uZCBiZXR3ZWVuIHR5cGluZyBcImJcIiBhbmRcbiAgICogXCJsXCIsIHRoZSBwcmVmaXggd2lsbCBiZWNvbWUgXCJsXCIsIHNvIFwiTGVtb25cIiB3b3VsZCBiZSBzZWxlY3RlZC5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIHRoZSBjb21wb25lbnQgdG8gaW52b2tlIGEgYGtleWRvd25gIG1ldGhvZCB3aGVuIGEga2V5IGlzXG4gICAqIHByZXNzZWQuIFlvdSBjYW4gdXNlIHRoZSBbS2V5Ym9hcmRdKEtleWJvYXJkLm1kKSBtaXhpbiBmb3IgdGhhdCBwdXJwb3NlLCBvclxuICAgKiB3aXJlIHVwIHlvdXIgb3duIGtleWJvYXJkIGhhbmRsaW5nIGFuZCBjYWxsIGBrZXlkb3duYCB5b3Vyc2VsZi5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBhbHNvIGV4cGVjdHMgdGhlIGNvbXBvbmVudCB0byBwcm92aWRlIGFuIGBpdGVtc2AgcHJvcGVydHkuIFRoZVxuICAgKiBgdGV4dENvbnRlbnRgIG9mIHRob3NlIGl0ZW1zIHdpbGwgYmUgdXNlZCBmb3IgcHVycG9zZXMgb2YgcHJlZml4IG1hdGNoaW5nLlxuICAgKi9cbiAgY2xhc3MgS2V5Ym9hcmRQcmVmaXhTZWxlY3Rpb24gZXh0ZW5kcyBiYXNlIHtcblxuICAgIC8vIFRPRE86IElmIHRoZSBzZXQgb2YgaXRlbXMgaXMgY2hhbmdlZCwgcmVzZXQgdGhlIHByZWZpeC5cbiAgICAvLyBpdGVtc0NoYW5nZWQoKSB7XG4gICAgLy8gICB0aGlzW2l0ZW1UZXh0Q29udGVudHNTeW1ib2xdID0gbnVsbDtcbiAgICAvLyAgIHJlc2V0VHlwZWRQcmVmaXgodGhpcyk7XG4gICAgLy8gfVxuXG4gICAgLy8gVE9ETzogSWYgdGhlIHNlbGVjdGlvbiBpcyBjaGFuZ2VkIGJ5IHNvbWUgb3RoZXIgbWVhbnMgKGUuZy4sIGFycm93IGtleXMpXG4gICAgLy8gb3RoZXIgdGhhbiBwcmVmaXggdHlwaW5nLCB0aGVuIHRoYXQgYWN0IHNob3VsZCByZXNldCB0aGUgcHJlZml4LlxuXG4gICAga2V5ZG93bihldmVudCkge1xuICAgICAgbGV0IGhhbmRsZWQ7XG4gICAgICBsZXQgcmVzZXRQcmVmaXggPSB0cnVlO1xuXG4gICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgY2FzZSA4OiAvLyBCYWNrc3BhY2VcbiAgICAgICAgICBoYW5kbGVCYWNrc3BhY2UodGhpcyk7XG4gICAgICAgICAgaGFuZGxlZCA9IHRydWU7XG4gICAgICAgICAgcmVzZXRQcmVmaXggPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyNzogLy8gRXNjYXBlXG4gICAgICAgICAgaGFuZGxlZCA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgaWYgKCFldmVudC5jdHJsS2V5ICYmICFldmVudC5tZXRhS2V5ICYmICFldmVudC5hbHRLZXkgJiZcbiAgICAgICAgICAgICAgZXZlbnQud2hpY2ggIT09IDMyIC8qIFNwYWNlICovKSB7XG4gICAgICAgICAgICBoYW5kbGVQbGFpbkNoYXJhY3Rlcih0aGlzLCBTdHJpbmcuZnJvbUNoYXJDb2RlKGV2ZW50LndoaWNoKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlc2V0UHJlZml4ID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXNldFByZWZpeCkge1xuICAgICAgICByZXNldFR5cGVkUHJlZml4KHRoaXMpO1xuICAgICAgfVxuXG4gICAgICAvLyBQcmVmZXIgbWl4aW4gcmVzdWx0IGlmIGl0J3MgZGVmaW5lZCwgb3RoZXJ3aXNlIHVzZSBiYXNlIHJlc3VsdC5cbiAgICAgIHJldHVybiBoYW5kbGVkIHx8IChzdXBlci5rZXlkb3duICYmIHN1cGVyLmtleWRvd24oZXZlbnQpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgdGhlIGZpcnN0IGl0ZW0gd2hvc2UgdGV4dCBjb250ZW50IGJlZ2lucyB3aXRoIHRoZSBnaXZlbiBwcmVmaXguXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcHJlZml4IFtTdHJpbmddIFRoZSBwcmVmaXggc3RyaW5nIHRvIHNlYXJjaCBmb3JcbiAgICAgKi9cbiAgICBzZWxlY3RJdGVtV2l0aFRleHRQcmVmaXgocHJlZml4KSB7XG4gICAgICBpZiAoc3VwZXIuc2VsZWN0SXRlbVdpdGhUZXh0UHJlZml4KSB7IHN1cGVyLnNlbGVjdEl0ZW1XaXRoVGV4dFByZWZpeChwcmVmaXgpOyB9XG4gICAgICBpZiAocHJlZml4ID09IG51bGwgfHwgcHJlZml4Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsZXQgaW5kZXggPSBnZXRJbmRleE9mSXRlbVdpdGhUZXh0UHJlZml4KHRoaXMsIHByZWZpeCk7XG4gICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBpbmRleDtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBLZXlib2FyZFByZWZpeFNlbGVjdGlvbjtcbn07XG5cblxuLy8gVGltZSBpbiBtaWxsaXNlY29uZHMgYWZ0ZXIgd2hpY2ggdGhlIHVzZXIgaXMgY29uc2lkZXJlZCB0byBoYXZlIHN0b3BwZWRcbi8vIHR5cGluZy5cbmNvbnN0IFBSRUZJWF9USU1FT1VUX0RVUkFUSU9OID0gMTAwMDtcblxuXG4vLyBSZXR1cm4gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBpdGVtIHdpdGggdGhlIGdpdmVuIHByZWZpeCwgZWxzZSAtMS5cbmZ1bmN0aW9uIGdldEluZGV4T2ZJdGVtV2l0aFRleHRQcmVmaXgoZWxlbWVudCwgcHJlZml4KSB7XG4gIGxldCBpdGVtVGV4dENvbnRlbnRzID0gZ2V0SXRlbVRleHRDb250ZW50cyhlbGVtZW50KTtcbiAgbGV0IHByZWZpeExlbmd0aCA9IHByZWZpeC5sZW5ndGg7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbVRleHRDb250ZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBpdGVtVGV4dENvbnRlbnQgPSBpdGVtVGV4dENvbnRlbnRzW2ldO1xuICAgIGlmIChpdGVtVGV4dENvbnRlbnQuc3Vic3RyKDAsIHByZWZpeExlbmd0aCkgPT09IHByZWZpeCkge1xuICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxuLy8gUmV0dXJuIGFuIGFycmF5IG9mIHRoZSB0ZXh0IGNvbnRlbnQgKGluIGxvd2VyY2FzZSkgb2YgYWxsIGl0ZW1zLlxuLy8gQ2FjaGUgdGhlc2UgcmVzdWx0cy5cbmZ1bmN0aW9uIGdldEl0ZW1UZXh0Q29udGVudHMoZWxlbWVudCkge1xuICBpZiAoIWVsZW1lbnRbaXRlbVRleHRDb250ZW50c1N5bWJvbF0pIHtcbiAgICBsZXQgaXRlbXMgPSBlbGVtZW50Lml0ZW1zO1xuICAgIGVsZW1lbnRbaXRlbVRleHRDb250ZW50c1N5bWJvbF0gPSBpdGVtcy5tYXAoY2hpbGQgPT4ge1xuICAgICAgbGV0IHRleHQgPSBjaGlsZC50ZXh0Q29udGVudCB8fCBjaGlsZC5hbHQ7XG4gICAgICByZXR1cm4gdGV4dC50b0xvd2VyQ2FzZSgpO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBlbGVtZW50W2l0ZW1UZXh0Q29udGVudHNTeW1ib2xdO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVCYWNrc3BhY2UoZWxlbWVudCkge1xuICBsZXQgbGVuZ3RoID0gZWxlbWVudFt0eXBlZFByZWZpeFN5bWJvbF0gPyBlbGVtZW50W3R5cGVkUHJlZml4U3ltYm9sXS5sZW5ndGggOiAwO1xuICBpZiAobGVuZ3RoID4gMCkge1xuICAgIGVsZW1lbnRbdHlwZWRQcmVmaXhTeW1ib2xdID0gZWxlbWVudFt0eXBlZFByZWZpeFN5bWJvbF0uc3Vic3RyKDAsIGxlbmd0aCAtIDEpO1xuICB9XG4gIGVsZW1lbnQuc2VsZWN0SXRlbVdpdGhUZXh0UHJlZml4KGVsZW1lbnRbdHlwZWRQcmVmaXhTeW1ib2xdKTtcbiAgc2V0UHJlZml4VGltZW91dChlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlUGxhaW5DaGFyYWN0ZXIoZWxlbWVudCwgY2hhcikge1xuICBsZXQgcHJlZml4ID0gZWxlbWVudFt0eXBlZFByZWZpeFN5bWJvbF0gfHwgJyc7XG4gIGVsZW1lbnRbdHlwZWRQcmVmaXhTeW1ib2xdID0gcHJlZml4ICsgY2hhci50b0xvd2VyQ2FzZSgpO1xuICBlbGVtZW50LnNlbGVjdEl0ZW1XaXRoVGV4dFByZWZpeChlbGVtZW50W3R5cGVkUHJlZml4U3ltYm9sXSk7XG4gIHNldFByZWZpeFRpbWVvdXQoZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0UHJlZml4VGltZW91dChlbGVtZW50KSB7XG4gIGlmIChlbGVtZW50W3ByZWZpeFRpbWVvdXRTeW1ib2xdKSB7XG4gICAgY2xlYXJUaW1lb3V0KGVsZW1lbnRbcHJlZml4VGltZW91dFN5bWJvbF0pO1xuICAgIGVsZW1lbnRbcHJlZml4VGltZW91dFN5bWJvbF0gPSBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNldFR5cGVkUHJlZml4KGVsZW1lbnQpIHtcbiAgZWxlbWVudFt0eXBlZFByZWZpeFN5bWJvbF0gPSAnJztcbiAgcmVzZXRQcmVmaXhUaW1lb3V0KGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBzZXRQcmVmaXhUaW1lb3V0KGVsZW1lbnQpIHtcbiAgcmVzZXRQcmVmaXhUaW1lb3V0KGVsZW1lbnQpO1xuICBlbGVtZW50W3ByZWZpeFRpbWVvdXRTeW1ib2xdID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgcmVzZXRUeXBlZFByZWZpeChlbGVtZW50KTtcbiAgfSwgUFJFRklYX1RJTUVPVVRfRFVSQVRJT04pO1xufVxuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuL2NyZWF0ZVN5bWJvbCc7XG5pbXBvcnQgdG9nZ2xlQ2xhc3MgZnJvbSAnLi90b2dnbGVDbGFzcyc7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IGNsb3NlZFN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnY2xvc2VkJyk7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBPcGVuQ2xvc2UuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBhZGRzIGNsb3NlL29wZW4gc2VtYW50aWNzLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGRvZXMgbm90IHByb2R1Y2UgYW55IHVzZXItdmlzaWJsZSBlZmZlY3RzLiBJbnN0ZWFkIGl0IGFwcGxpZXNcbiAgICogYSBgYmFzaWMtY2xvc2VkYCBDU1MgY2xhc3MgdG8gdGhlIGNvbXBvbmVudCBob3N0IGlmIHRoZSBob3N0IGlzXG4gICAqIGNsb3NlZCwgYW5kIGEgYGJhc2ljLW9wZW5lZGAgY2xhc3MgaWYgb3BlbmVkLiBJdCBhbHNvIGludm9rZXMgYSBgcmVuZGVyYFxuICAgKiBmdW5jdGlvbiB0aGF0IGNhbiBiZSBvdmVycmlkZGVuIHRvIGFwcGx5IGN1c3RvbSBlZmZlY3RzLlxuICAgKi9cbiAgY2xhc3MgT3BlbkNsb3NlIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICAvLyBTZXQgZGVmYXVsdHMuXG4gICAgICBpZiAodHlwZW9mIHRoaXMuY2xvc2VkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLmNsb3NlZCA9IHRoaXMuZGVmYXVsdHMuY2xvc2VkO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsb3NlIHRoZSBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gc2V0dGluZyB0aGUgYGNsb3NlZGAgcHJvcGVydHkgdG8gdHJ1ZS5cbiAgICAgKi9cbiAgICBjbG9zZSgpIHtcbiAgICAgIHRoaXMuY2xvc2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHRoZSBjb21wb25lbnQgaXMgY3VyZW50bHkgY2xvc2VkLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cbiAgICBnZXQgY2xvc2VkKCkge1xuICAgICAgcmV0dXJuIHRoaXNbY2xvc2VkU3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IGNsb3NlZCh2YWx1ZSkge1xuICAgICAgbGV0IHByZXZpb3VzQ2xvc2VkID0gdGhpc1tjbG9zZWRTeW1ib2xdO1xuICAgICAgdGhpc1tjbG9zZWRTeW1ib2xdID0gdmFsdWU7XG4gICAgICBpZiAoJ2Nsb3NlZCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuY2xvc2VkID0gdmFsdWU7IH1cbiAgICAgIGlmICh2YWx1ZSAhPT0gcHJldmlvdXNDbG9zZWQpIHtcbiAgICAgICAgdGhpcy5yZW5kZXIodmFsdWUpO1xuXG4gICAgICAgIGxldCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnY2xvc2VkLWNoYW5nZWQnKTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jb25uZWN0ZWRDYWxsYmFjaykgeyBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpOyB9XG4gICAgICB0aGlzLnJlbmRlcih0aGlzLmNsb3NlZCk7XG4gICAgfVxuXG4gICAgZ2V0IGRlZmF1bHRzKCkge1xuICAgICAgbGV0IGRlZmF1bHRzID0gc3VwZXIuZGVmYXVsdHMgfHwge307XG4gICAgICBkZWZhdWx0cy5jbG9zZWQgPSBmYWxzZTtcbiAgICAgIHJldHVybiBkZWZhdWx0cztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPcGVuIHRoZSBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gc2V0dGluZyB0aGUgYGNsb3NlZGAgcHJvcGVydHkgdG8gZmFsc2UuXG4gICAgICovXG4gICAgb3BlbigpIHtcbiAgICAgIHRoaXMuY2xvc2VkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybSBjdXN0b20gcmVuZGVyaW5nIG9mIHRoZSBjbG9zZS9vcGVuIHRyYW5zaXRpb24uXG4gICAgICpcbiAgICAgKiBZb3UgY2FuIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHBlcmZvcm0gY3VzdG9tIGVmZmVjdHMuIElmIHlvdSBkbyBzbyxcbiAgICAgKiBiZSBzdXJlIHRvIGludm9rZSBgc3VwZXIoKWAgaW4geW91ciBpbXBsZW1lbnRhdGlvbiB0byBnZXQgdGhlIGJhc2VsaW5lXG4gICAgICogYmVoYXZpb3IuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGNsb3NpbmcgLSBUcnVlIGlmIHRoZSBjb21wb25lbnQgaXMgYmVpbmcgY2xvc2VkLFxuICAgICAqICAgICAgICBmYWxzZSBpZiBpdCdzIGJlaW5nIG9wZW5lZC5cbiAgICAgKi9cbiAgICByZW5kZXIoY2xvc2luZykge1xuICAgICAgaWYgKHN1cGVyLnJlbmRlcikgeyBzdXBlci5yZW5kZXIoKTsgfVxuICAgICAgaWYgKCF0aGlzLnBhcmVudE5vZGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdG9nZ2xlQ2xhc3ModGhpcywgJ2Jhc2ljLWNsb3NlZCcsIGNsb3NpbmcpO1xuICAgICAgdG9nZ2xlQ2xhc3ModGhpcywgJ2Jhc2ljLW9wZW5lZCcsICFjbG9zaW5nKTtcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgIWNsb3NpbmcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZSB0aGUgY29tcG9uZW50J3Mgb3Blbi9jbG9zZWQgc3RhdGUuXG4gICAgICovXG4gICAgdG9nZ2xlKCkge1xuICAgICAgdGhpcy5jbG9zZWQgPSAhdGhpcy5jbG9zZWQ7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gT3BlbkNsb3NlO1xufTtcbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi9jcmVhdGVTeW1ib2wnO1xuaW1wb3J0IEZyYWN0aW9uYWxTZWxlY3Rpb24gZnJvbSAnLi9GcmFjdGlvbmFsU2VsZWN0aW9uJztcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3QgYW5pbWF0aW9uU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdhbmltYXRpb24nKTtcbmNvbnN0IGxhc3RBbmltYXRpb25TeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2xhc3RBbmltYXRpb24nKTtcbmNvbnN0IHBsYXlpbmdBbmltYXRpb25TeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2FuaW1hdGluZ1NlbGVjdGlvbicpO1xuY29uc3QgcHJldmlvdXNTZWxlY3Rpb25TeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3ByZXZpb3VzU2VsZWN0aW9uJyk7XG5jb25zdCBzZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvblN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb24nKTtcbmNvbnN0IHNlbGVjdGlvbkFuaW1hdGlvbkVmZmVjdFN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnc2VsZWN0aW9uQW5pbWF0aW9uRWZmZWN0Jyk7XG5jb25zdCBzZWxlY3Rpb25BbmltYXRpb25LZXlmcmFtZXNTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3NlbGVjdGlvbkFuaW1hdGlvbktleWZyYW1lcycpO1xuY29uc3Qgc2hvd1RyYW5zaXRpb25TeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3Nob3dUcmFuc2l0aW9uJyk7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBTZWxlY3Rpb25BbmltYXRpb24uICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXhpbihiYXNlKSB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIHVzZXMgYW5pbWF0aW9uIHRvIHNob3cgdHJhbnNpdGlvbnMgYmV0d2VlbiBzZWxlY3Rpb24gc3RhdGVzLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGNhbiBiZSB1c2VkIGJ5IGNvbXBvbmVudHMgdGhhdCB3YW50IHRvIHByb3ZpZGUgdmlzaWJsZVxuICAgKiBhbmltYXRpb25zIHdoZW4gY2hhbmdpbmcgdGhlIHNlbGVjdGlvbi4gRm9yIGV4YW1wbGUsIGEgY2Fyb3VzZWwgY29tcG9uZW50XG4gICAqIG1heSB3YW50IHRvIGRlZmluZSBhIHNsaWRpbmcgYW5pbWF0aW9uIGVmZmVjdCBzaG93biB3aGVuIG1vdmluZyBiZXR3ZWVuXG4gICAqIGl0ZW1zLlxuICAgKlxuICAgKiBUaGUgYW5pbWF0aW9uIGlzIGRlZmluZWQgYnkgYSBgc2VsZWN0aW9uQW5pbWF0aW9uS2V5ZnJhbWVzYCBwcm9wZXJ0eTsgc2VlXG4gICAqIHRoYXQgcHJvcGVydHkgZm9yIGRldGFpbHMgb24gaG93IHRvIGRlZmluZSB0aGVzZSBrZXlmcmFtZXMuIFRoaXMgYW5pbWF0aW9uXG4gICAqIHdpbGwgYmUgdXNlZCBpbiB0d28gd2F5cy4gRmlyc3QsIHdoZW4gbW92aW5nIHN0cmljdGx5IGJldHdlZW4gaXRlbXMsIHRoZVxuICAgKiBhbmltYXRpb24gd2lsbCBwbGF5IHNtb290aGx5IHRvIHNob3cgdGhlIHNlbGVjdGlvbiBjaGFuZ2luZy4gU2Vjb25kLCB0aGVcbiAgICogYW5pbWF0aW9uIGNhbiBiZSB1c2VkIHRvIHJlbmRlciB0aGUgc2VsZWN0aW9uIGF0IGEgZml4ZWQgcG9pbnQgaW4gdGhlXG4gICAqIHRyYW5zaXRpb24gYmV0d2VlbiBzdGF0ZXMuIEUuZy4sIGlmIHRoZSB1c2VyIHBhdXNlcyBoYWxmd2F5IHRocm91Z2hcbiAgICogZHJhZ2dpbmcgYW4gZWxlbWVudCB1c2luZyB0aGUgW1N3aXBlRGlyZWN0aW9uXShTd2lwZURpcmVjdGlvbi5tZCkgb3JcbiAgICogW1RyYWNrcGFkRGlyZWN0aW9uXShUcmFja3BhZERpcmVjdGlvbi5tZCkgbWl4aW5zLCB0aGVuIHRoZSBzZWxlY3Rpb25cbiAgICogYW5pbWF0aW9uIHdpbGwgYmUgc2hvd24gYXQgdGhlIHBvaW50IGV4YWN0bHkgaGFsZndheSB0aHJvdWdoLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGV4cGVjdHMgYSBjb21wb25lbnQgdG8gcHJvdmlkZSBhbiBgaXRlbXNgIGFycmF5IG9mIGFsbCBlbGVtZW50c1xuICAgKiBpbiB0aGUgbGlzdCwgd2hpY2ggY2FuIGJlIHByb3ZpZGVkIHZpYSB0aGVcbiAgICogW0NvbnRlbnRBc0l0ZW1zXShDb250ZW50QXNJdGVtcy5tZCkgbWl4aW4uIFRoaXMgbWl4aW4gYWxzbyBleHBlY3RzXG4gICAqIGBzZWxlY3RlZEluZGV4YCBhbmQgYHNlbGVjdGVkSXRlbWAgcHJvcGVydGllcywgd2hpY2ggY2FuIGJlIHByb3ZpZGVkIHZpYVxuICAgKiB0aGUgW1NpbmdsZVNlbGVjdGlvbl0oU2luZ2xlU2VsZWN0aW9uLm1kKSBtaXhpbi5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBzdXBwb3J0cyBhIGBzZWxlY3Rpb25XcmFwc2AgcHJvcGVydHkuIFdoZW4gdHJ1ZSwgdGhlIHVzZXIgY2FuXG4gICAqIG5hdmlnYXRlIGZvcndhcmQgZnJvbSB0aGUgbGFzdCBpdGVtIGluIHRoZSBsaXN0IGFuZCB3cmFwIGFyb3VuZCB0byB0aGVcbiAgICogZmlyc3QgaXRlbSwgb3IgbmF2aWdhdGUgYmFja3dhcmQgZnJvbSB0aGUgZmlyc3QgaXRlbSBhbmQgd3JhcCBhcm91bmQgdG8gdGhlXG4gICAqIGxhc3QgaXRlbS5cbiAgICpcbiAgICogVGhpcyBtaXhpbiB1c2VzIHRoZSBXZWIgQW5pbWF0aW9ucyBBUEkuIEZvciB1c2Ugb24gYnJvd3NlcnMgd2hpY2hcbiAgICogZG8gbm90IHN1cHBvcnQgdGhhdCBBUEkgbmF0aXZlbHksIHlvdSB3aWxsIG5lZWQgdG8gbG9hZCB0aGVcbiAgICogW1dlYiBBbmltYXRpb25zIHBvbHlmaWxsXShodHRwczovL2dpdGh1Yi5jb20vd2ViLWFuaW1hdGlvbnMvd2ViLWFuaW1hdGlvbnMtanMpLlxuICAgKi9cbiAgY2xhc3MgU2VsZWN0aW9uQW5pbWF0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG5cbiAgICAgIC8vIFNldCBkZWZhdWx0cy5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5zZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvbiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvbiA9IHRoaXMuZGVmYXVsdHMuc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb247XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHRoaXMuc2VsZWN0aW9uQW5pbWF0aW9uRWZmZWN0ID09PSAndW5kZWZpbmVkJyAmJiB0aGlzLnNlbGVjdGlvbkFuaW1hdGlvbktleWZyYW1lcyA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uQW5pbWF0aW9uRWZmZWN0ID0gdGhpcy5kZWZhdWx0cy5zZWxlY3Rpb25BbmltYXRpb25FZmZlY3Q7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2hvd1RyYW5zaXRpb24gPSB0cnVlO1xuICAgIH1cblxuICAgIGdldCBkZWZhdWx0cygpIHtcbiAgICAgIGxldCBkZWZhdWx0cyA9IHN1cGVyLmRlZmF1bHRzIHx8IHt9O1xuICAgICAgZGVmYXVsdHMuc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb24gPSAyNTA7XG4gICAgICBkZWZhdWx0cy5zZWxlY3Rpb25BbmltYXRpb25FZmZlY3QgPSAnc2xpZGUnO1xuICAgICAgcmV0dXJuIGRlZmF1bHRzO1xuICAgIH1cblxuICAgIGl0ZW1BZGRlZChpdGVtKSB7XG4gICAgICAvLyBXZSBtYXJrIG5ldyBpdGVtcyBpbiB0aGUgbGlzdCBhcyBleHBsaWNpdGx5IHZpc2libGUgdG8gQVJJQS4gT3RoZXJ3aXNlLFxuICAgICAgLy8gd2hlbiBhbiBpdGVtIGlzbid0IHZpc2libGUgb24gdGhlIHNjcmVlbiwgQVJJQSB3aWxsIGFzc3VtZSB0aGUgaXRlbSBpc1xuICAgICAgLy8gb2Ygbm8gaW50ZXJlc3QgdG8gdGhlIHVzZXIsIGFuZCBsZWF2ZSBpdCBvdXQgb2YgdGhlIGFjY2Vzc2liaWxpdHkgdHJlZS5cbiAgICAgIC8vIElmIHRoZSBsaXN0IGNvbnRhaW5zIDEwIGl0ZW1zLCBidXQgb25seSAzIGFyZSB2aXNpYmxlLCBhIHNjcmVlbiByZWFkZXJcbiAgICAgIC8vIG1pZ2h0IHRoZW4gYW5ub3VuY2UgdGhlIGxpc3Qgb25seSBoYXMgMyBpdGVtcy4gVG8gZW5zdXJlIHRoYXQgc2NyZWVuXG4gICAgICAvLyByZWFkZXJzIGFuZCBvdGhlciBhc3Npc3RpdmUgdGVjaG5vbG9naWVzIGFubm91bmNlIHRoZSBjb3JyZWN0IHRvdGFsXG4gICAgICAvLyBudW1iZXIgb2YgaXRlbXMsIHdlIGV4cGxpY2l0bHkgbWFyayBhbGwgaXRlbXMgYXMgbm90IGhpZGRlbi4gVGhpcyB3aWxsXG4gICAgICAvLyBleHBvc2UgdGhlbSBhbGwgaW4gdGhlIGFjY2Vzc2liaWxpdHkgdHJlZSwgZXZlbiB0aGUgaXRlbXMgd2hpY2ggYXJlXG4gICAgICAvLyBjdXJyZW50bHkgbm90IHJlbmRlcmVkLlxuICAgICAgLy9cbiAgICAgIC8vIFRPRE86IEdlbmVyYWxseSBzcGVha2luZywgdGhpcyBlbnRpcmUgbWl4aW4gYXNzdW1lcyB0aGF0IHRoZSB1c2VyIGNhblxuICAgICAgLy8gbmF2aWdhdGUgdGhyb3VnaCBhbGwgaXRlbXMgaW4gYSBsaXN0LiBCdXQgYW4gYXBwIGNvdWxkIHN0eWxlIGFuIGl0ZW0gYXNcbiAgICAgIC8vIGRpc3BsYXk6bm9uZSBvciB2aXNpYmlsaXR5OmhpZGRlbiBiZWNhdXNlIHRoZSB1c2VyIGlzIG5vdCBhbGxvd2VkIHRvXG4gICAgICAvLyBpbnRlcmFjdCB3aXRoIHRoYXQgaXRlbSBhdCB0aGUgbW9tZW50LiBTdXBwb3J0IGZvciB0aGlzIHNjZW5hcmlvIHNob3VsZFxuICAgICAgLy8gYmUgYWRkZWQuIFRoaXMgd291bGQgZW50YWlsIGNoYW5naW5nIGFsbCBsb2NhdGlvbnMgd2hlcmUgYSBtaXhpblxuICAgICAgLy8gZnVuY3Rpb24gaXMgY291bnRpbmcgaXRlbXMsIGl0ZXJhdGluZyBvdmVyIHRoZSAodmlzaWJsZSkgaXRlbXMsIGFuZFxuICAgICAgLy8gc2hvd2luZyBvciBoaWRpbmcgaXRlbXMuIEFtb25nIG90aGVyIHRoaW5ncywgdGhlIGNvZGUgYmVsb3cgdG8gbWFrZVxuICAgICAgLy8gaXRlbXMgdmlzaWJsZSB0byBBUklBIHdvdWxkIG5lZWQgdG8gZGlzY3JpbWluYXRlIGJldHdlZW4gaXRlbXMgd2hpY2hcbiAgICAgIC8vIGFyZSBpbnZpc2libGUgYmVjYXVzZSBvZiBhbmltYXRpb24gc3RhdGUsIG9yIGludmlzaWJsZSBiZWNhdXNlIHRoZSB1c2VyXG4gICAgICAvLyBzaG91bGRuJ3QgaW50ZXJhY3Qgd2l0aCB0aGVtLlxuICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgZmFsc2UpO1xuICAgIH1cblxuICAgIGl0ZW1zQ2hhbmdlZCgpIHtcbiAgICAgIGlmIChzdXBlci5pdGVtc0NoYW5nZWQpIHsgc3VwZXIuaXRlbXNDaGFuZ2VkKCk7IH1cbiAgICAgIHJlc2V0QW5pbWF0aW9ucyh0aGlzKTtcbiAgICAgIHJlbmRlclNlbGVjdGlvbih0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIGZyYWN0aW9uYWwgdmFsdWUgaW5kaWNhdGluZyBob3cgZmFyIHRoZSB1c2VyIGhhcyBjdXJyZW50bHkgYWR2YW5jZWQgdG9cbiAgICAgKiB0aGUgbmV4dC9wcmV2aW91cyBpdGVtLiBFLmcuLCBhIGBzZWxlY3RlZEZyYWN0aW9uYCBvZiAzLjUgaW5kaWNhdGVzIHRoZVxuICAgICAqIHVzZXIgaXMgaGFsZndheSBiZXR3ZWVuIGl0ZW1zIDMgYW5kIDQuXG4gICAgICpcbiAgICAgKiBGb3IgbW9yZSBkZXRhaWxzLCBzZWUgdGhlIFtGcmFjdGlvbmFsU2VsZWN0aW9uXShGcmFjdGlvbmFsU2VsZWN0aW9uLm1kKVxuICAgICAqIG1peGluLlxuICAgICAqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0ZWRGcmFjdGlvbigpIHtcbiAgICAgIHJldHVybiBzdXBlci5zZWxlY3RlZEZyYWN0aW9uIHx8IDA7XG4gICAgfVxuICAgIHNldCBzZWxlY3RlZEZyYWN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoJ3NlbGVjdGVkRnJhY3Rpb24nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkRnJhY3Rpb24gPSB2YWx1ZTsgfVxuICAgICAgcmVuZGVyU2VsZWN0aW9uKHRoaXMsIHRoaXMuc2VsZWN0ZWRJbmRleCwgdmFsdWUpO1xuICAgIH1cblxuICAgIGdldCBzZWxlY3RlZEl0ZW0oKSB7XG4gICAgICByZXR1cm4gc3VwZXIuc2VsZWN0ZWRJdGVtO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0ZWRJdGVtKGl0ZW0pIHtcbiAgICAgIGlmICgnc2VsZWN0ZWRJdGVtJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEl0ZW0gPSBpdGVtOyB9XG4gICAgICByZW5kZXJTZWxlY3Rpb24odGhpcywgdGhpcy5zZWxlY3RlZEluZGV4LCAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZHVyYXRpb24gb2YgYSBzZWxlY3Rpb24gYW5pbWF0aW9uIGluIG1pbGxpc2Vjb25kcy5cbiAgICAgKlxuICAgICAqIFRoaXMgbWVhc3VyZXMgdGhlIGFtb3VudCBvZiB0aW1lIHJlcXVpcmVkIGZvciBhIHNlbGVjdGlvbiBhbmltYXRpb24gdG9cbiAgICAgKiBjb21wbGV0ZS4gVGhpcyBudW1iZXIgcmVtYWlucyBjb25zdGFudCwgZXZlbiBpZiB0aGUgbnVtYmVyIG9mIGl0ZW1zIGJlaW5nXG4gICAgICogYW5pbWF0ZWQgaW5jcmVhc2VzLlxuICAgICAqXG4gICAgICogVGhlIGRlZmF1bHQgdmFsdWUgaXMgMjUwIG1pbGxpc2Vjb25kcyAoYSBxdWFydGVyIGEgc2Vjb25kKS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQGRlZmF1bHQgMjUwXG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGlvbkFuaW1hdGlvbkR1cmF0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXNbc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb25TeW1ib2xdO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb24odmFsdWUpIHtcbiAgICAgIHRoaXNbc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb25TeW1ib2xdID0gdmFsdWU7XG4gICAgICBpZiAoJ3NlbGVjdGlvbkFuaW1hdGlvbkR1cmF0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvbiA9IHZhbHVlOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIG5hbWUgb2YgYSBzdGFuZGFyZCBzZWxlY3Rpb24gYW5pbWF0aW9uIGVmZmVjdC5cbiAgICAgKlxuICAgICAqIFRoaXMgaXMgYSBzaG9ydGhhbmQgZm9yIHNldHRpbmcgdGhlIGBzZWxlY3Rpb25BbmltYXRpb25LZXlmcmFtZXNgXG4gICAgICogcHJvcGVydHkgdG8gc3RhbmRhcmQga2V5ZnJhbWVzLiBTdXBwb3J0ZWQgc3RyaW5nIHZhbHVlczpcbiAgICAgKlxuICAgICAqICogXCJjcm9zc2ZhZGVcIlxuICAgICAqICogXCJyZXZlYWxcIlxuICAgICAqICogXCJyZXZlYWxXaXRoRmFkZVwiXG4gICAgICogKiBcInNob3dBZGphY2VudFwiXG4gICAgICogKiBcInNsaWRlXCJcbiAgICAgKiAqIFwic2xpZGVXaXRoR2FwXCJcbiAgICAgKlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQGRlZmF1bHQgXCJzbGlkZVwiXG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGlvbkFuaW1hdGlvbkVmZmVjdCgpIHtcbiAgICAgIHJldHVybiB0aGlzW3NlbGVjdGlvbkFuaW1hdGlvbkVmZmVjdFN5bWJvbF07XG4gICAgfVxuICAgIHNldCBzZWxlY3Rpb25BbmltYXRpb25FZmZlY3QodmFsdWUpIHtcbiAgICAgIHRoaXNbc2VsZWN0aW9uQW5pbWF0aW9uRWZmZWN0U3ltYm9sXSA9IHZhbHVlO1xuICAgICAgaWYgKCdzZWxlY3Rpb25BbmltYXRpb25FZmZlY3QnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGlvbkFuaW1hdGlvbkVmZmVjdCA9IHZhbHVlOyB9XG4gICAgICB0aGlzLnNlbGVjdGlvbkFuaW1hdGlvbktleWZyYW1lcyA9IG1peGluLnN0YW5kYXJkRWZmZWN0S2V5ZnJhbWVzW3ZhbHVlXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUga2V5ZnJhbWVzIHRoYXQgZGVmaW5lIGFuIGFuaW1hdGlvbiB0aGF0IHBsYXlzIGZvciBhbiBpdGVtIHdoZW4gbW92aW5nXG4gICAgICogZm9yd2FyZCBpbiB0aGUgc2VxdWVuY2UuXG4gICAgICpcbiAgICAgKiBUaGlzIGlzIGFuIGFycmF5IG9mIENTUyBydWxlcyB0aGF0IHdpbGwgYmUgYXBwbGllZC4gVGhlc2UgYXJlIHVzZWQgYXNcbiAgICAgKiBba2V5ZnJhbWVzXShodHRwOi8vdzNjLmdpdGh1Yi5pby93ZWItYW5pbWF0aW9ucy8ja2V5ZnJhbWVzLXNlY3Rpb24pXG4gICAgICogdG8gYW5pbWF0ZSB0aGUgaXRlbSB3aXRoIHRoZVxuICAgICAqIFtXZWIgQW5pbWF0aW9ucyBBUEldKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9hbmltYXRpb24pLlxuICAgICAqXG4gICAgICogVGhlIGFuaW1hdGlvbiByZXByZXNlbnRzIHRoZSBzdGF0ZSBvZiB0aGUgbmV4dCBpdGVtIGFzIGl0IG1vdmVzIGZyb21cbiAgICAgKiBjb21wbGV0ZWx5IHVuc2VsZWN0ZWQgKG9mZnN0YWdlLCB1c3VhbGx5IHJpZ2h0KSwgdG8gc2VsZWN0ZWQgKGNlbnRlclxuICAgICAqIHN0YWdlKSwgdG8gY29tcGxldGVseSB1bnNlbGVjdGVkIChvZmZzdGFnZSwgdXN1YWxseSBsZWZ0KS4gVGhlIGNlbnRlciB0aW1lXG4gICAgICogb2YgdGhlIGFuaW1hdGlvbiBzaG91bGQgY29ycmVzcG9uZCB0byB0aGUgaXRlbSdzIHF1aXNjZW50IHNlbGVjdGVkIHN0YXRlLFxuICAgICAqIHR5cGljYWxseSBpbiB0aGUgY2VudGVyIG9mIHRoZSBzdGFnZSBhbmQgYXQgdGhlIGl0ZW0ncyBsYXJnZXN0IHNpemUuXG4gICAgICpcbiAgICAgKiBUaGUgZGVmYXVsdCBmb3J3YXJkIGFuaW1hdGlvbiBpcyBhIHNtb290aCBzbGlkZSBhdCBmdWxsIHNpemUgZnJvbSByaWdodCB0b1xuICAgICAqIGxlZnQuXG4gICAgICpcbiAgICAgKiBXaGVuIG1vdmluZyB0aGUgc2VsZWN0aW9uIGJhY2t3YXJkLCB0aGlzIGFuaW1hdGlvbiBpcyBwbGF5ZWQgaW4gcmV2ZXJzZS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtjc3NSdWxlc1tdfVxuICAgICAqL1xuICAgIGdldCBzZWxlY3Rpb25BbmltYXRpb25LZXlmcmFtZXMoKSB7XG4gICAgICAvLyBTdGFuZGFyZCBhbmltYXRpb24gc2xpZGVzIGxlZnQvcmlnaHQsIGtlZXBzIGFkamFjZW50IGl0ZW1zIG91dCBvZiB2aWV3LlxuICAgICAgcmV0dXJuIHRoaXNbc2VsZWN0aW9uQW5pbWF0aW9uS2V5ZnJhbWVzU3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGlvbkFuaW1hdGlvbktleWZyYW1lcyh2YWx1ZSkge1xuICAgICAgdGhpc1tzZWxlY3Rpb25BbmltYXRpb25LZXlmcmFtZXNTeW1ib2xdID0gdmFsdWU7XG4gICAgICBpZiAoJ3NlbGVjdGlvbkFuaW1hdGlvbktleWZyYW1lcycgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0aW9uQW5pbWF0aW9uS2V5ZnJhbWVzID0gdmFsdWU7IH1cbiAgICAgIHJlc2V0QW5pbWF0aW9ucyh0aGlzKTtcbiAgICAgIHJlbmRlclNlbGVjdGlvbih0aGlzKTtcbiAgICB9XG5cbiAgICBnZXQgc2VsZWN0aW9uV3JhcHMoKSB7XG4gICAgICByZXR1cm4gc3VwZXIuc2VsZWN0aW9uV3JhcHM7XG4gICAgfVxuICAgIHNldCBzZWxlY3Rpb25XcmFwcyh2YWx1ZSkge1xuICAgICAgaWYgKCdzZWxlY3Rpb25XcmFwcycgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0aW9uV3JhcHMgPSB2YWx1ZTsgfVxuICAgICAgcmVzZXRBbmltYXRpb25zKHRoaXMpO1xuICAgICAgcmVuZGVyU2VsZWN0aW9uKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERldGVybWluZSB3aGV0aGVyIGEgdHJhbnNpdGlvbiBzaG91bGQgYmUgc2hvd24gZHVyaW5nIHNlbGVjdGlvbi5cbiAgICAgKlxuICAgICAqIENvbXBvbmVudHMgbGlrZSBjYXJvdXNlbHMgb2Z0ZW4gZGVmaW5lIGFuaW1hdGVkIENTUyB0cmFuc2l0aW9ucyBmb3JcbiAgICAgKiBzbGlkaW5nIGVmZmVjdHMuIFN1Y2ggYSB0cmFuc2l0aW9uIHNob3VsZCB1c3VhbGx5ICpub3QqIGJlIGFwcGxpZWQgd2hpbGVcbiAgICAgKiB0aGUgdXNlciBpcyBkcmFnZ2luZywgYmVjYXVzZSBhIENTUyBhbmltYXRpb24gd2lsbCBpbnRyb2R1Y2UgYSBsYWcgdGhhdFxuICAgICAqIG1ha2VzIHRoZSBzd2lwZSBmZWVsIHNsdWdnaXNoLiBJbnN0ZWFkLCBhcyBsb25nIGFzIHRoZSB1c2VyIGlzIGRyYWdnaW5nXG4gICAgICogd2l0aCB0aGVpciBmaW5nZXIgZG93biwgdGhlIHRyYW5zaXRpb24gc2hvdWxkIGJlIHN1cHByZXNzZWQuIFdoZW4gdGhlXG4gICAgICogdXNlciByZWxlYXNlcyB0aGVpciBmaW5nZXIsIHRoZSB0cmFuc2l0aW9uIGNhbiBiZSByZXN0b3JlZCwgYWxsb3dpbmcgdGhlXG4gICAgICogYW5pbWF0aW9uIHRvIHNob3cgdGhlIGNhcm91c2VsIHNsaWRpbmcgaW50byBpdHMgZmluYWwgcG9zaXRpb24uXG4gICAgICpcbiAgICAgKiBOb3RlOiBUaGlzIHByb3BlcnR5IGlzIG9ubHkgaW50ZW5kZWQgdG8gbGV0IGEgY29tcG9uZW50IGNvb3BlcmF0ZSB3aXRoXG4gICAgICogbWl4aW5zIHRoYXQgbWF5IGJlIGFwcGxpZWQgdG8gaXQsIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gbGV0IHNvbWVvbmVcbiAgICAgKiB1c2luZyBjb21wb25lbnQgcGVybWFuZW50bHkgZW5hYmxlIG9yIGRpc2FibGUgdHJhbnNpdGlvbiBlZmZlY3RzLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59IHRydWUgaWYgYSBjb21wb25lbnQtcHJvdmlkZWQgdHJhbnNpdGlvbiBzaG91bGQgYmUgc2hvd24sXG4gICAgICogZmFsc2UgaWYgbm90LlxuICAgICAqL1xuICAgIC8vIFRPRE86IFJlbmFtZSAoYW5kIGZsaXAgbWVhbmluZykgdG8gc29tZXRoaW5nIGxpa2UgZHJhZ2dpbmcoKT9cbiAgICBnZXQgc2hvd1RyYW5zaXRpb24oKSB7XG4gICAgICByZXR1cm4gc3VwZXIuc2hvd1RyYW5zaXRpb24gfHwgdGhpc1tzaG93VHJhbnNpdGlvblN5bWJvbF07XG4gICAgfVxuICAgIHNldCBzaG93VHJhbnNpdGlvbih2YWx1ZSkge1xuICAgICAgdGhpc1tzaG93VHJhbnNpdGlvblN5bWJvbF0gPSB2YWx1ZTtcbiAgICAgIGlmICgnc2hvd1RyYW5zaXRpb24nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNob3dUcmFuc2l0aW9uID0gdmFsdWU7IH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gU2VsZWN0aW9uQW5pbWF0aW9uO1xufVxuXG5cbi8vIFdlIGV4cG9zZSBoZWxwZXJzIG9uIHRoZSBtaXhpbiBmdW5jdGlvbiB0aGF0IHdlIHdhbnQgdG8gYmUgYWJsZSB0byB1bml0IHRlc3QuXG4vLyBTaW5jZSB0aGVzZSBhcmUgb24gdGhlIGZ1bmN0aW9uLCBub3Qgb24gdGhlIGNsYXNzIGVtaXR0ZWQgYnkgdGhlIGZ1bmN0aW9uLFxuLy8gdGhleSBkb24ndCBlbmQgdXAgZ2V0dGluZyBleHBvc2VkIG9uIGFjdHVhbCBlbGVtZW50IGluc3RhbmNlcy5cbm1peGluLmhlbHBlcnMgPSB7XG5cbiAgLypcbiAgICogQ2FsY3VsYXRlIHRoZSBhbmltYXRpb24gZnJhY3Rpb25zIGZvciBhbiBlbGVtZW50J3MgaXRlbXMgYXQgdGhlIGdpdmVuXG4gICAqIHNlbGVjdGlvbiBwb2ludC4gVGhpcyBpcyB1c2VkIHdoZW4gcmVuZGVyaW5nIHRoZSBlbGVtZW50J3Mgc2VsZWN0aW9uIHN0YXRlXG4gICAqIGluc3RhbnRhbmVvdXNseS5cbiAgICpcbiAgICogVGhpcyBmdW5jdGlvbiBjb25zaWRlcnMgdGhlIHNlbGVjdGVkSW5kZXggcGFyYW1ldGVyLCB3aGljaCBjYW4gYmUgYSB3aG9sZVxuICAgKiBvciBmcmFjdGlvbmFsIG51bWJlciwgYW5kIGRldGVybWluZXMgd2hpY2ggaXRlbXMgd2lsbCBiZSB2aXNpYmxlIGF0IHRoYXRcbiAgICogaW5kZXguIFRoaXMgZnVuY3Rpb24gdGhlbiBjYWxjdWxhdGVzIGEgY29ycmVzcG9uZGluZyBhbmltYXRpb24gZnJhY3Rpb246IGFcbiAgICogbnVtYmVyIGJldHdlZW4gMCBhbmQgMSBpbmRpY2F0aW5nIGhvdyBmYXIgdGhyb3VnaCB0aGUgc2VsZWN0aW9uIGFuaW1hdGlvblxuICAgKiBhbiBpdGVtIHNob3VsZCBiZSBzaG93biwgb3IgbnVsbCBpZiB0aGUgaXRlbSBzaG91bGQgbm90IGJlIHZpc2libGUgYXQgdGhhdFxuICAgKiBzZWxlY3Rpb24gaW5kZXguIFRoZXNlIGZyYWN0aW9ucyBhcmUgcmV0dXJuZWQgYXMgYW4gYXJyYXksIHdoZXJlIHRoZVxuICAgKiBhbmltYXRpb24gZnJhY3Rpb24gYXQgcG9zaXRpb24gTiBjb3JyZXNwb25kcyB0byBob3cgaXRlbSBOIHNob3VsZCBiZSBzaG93bi5cbiAgICovXG4gIGFuaW1hdGlvbkZyYWN0aW9uc0ZvclNlbGVjdGlvbihlbGVtZW50LCBzZWxlY3Rpb24pIHtcblxuICAgIGxldCBpdGVtcyA9IGVsZW1lbnQuaXRlbXM7XG4gICAgaWYgKCFpdGVtcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBpdGVtQ291bnQgPSBpdGVtcy5sZW5ndGg7XG4gICAgbGV0IHNlbGVjdGlvbldyYXBzID0gZWxlbWVudC5zZWxlY3Rpb25XcmFwcztcblxuICAgIHJldHVybiBpdGVtcy5tYXAoKGl0ZW0sIGl0ZW1JbmRleCkgPT4ge1xuICAgICAgLy8gSG93IG1hbnkgc3RlcHMgZnJvbSB0aGUgc2VsZWN0aW9uIHBvaW50IHRvIHRoaXMgaXRlbT9cbiAgICAgIGxldCBzdGVwcyA9IHN0ZXBzVG9JbmRleChpdGVtQ291bnQsIHNlbGVjdGlvbldyYXBzLCBzZWxlY3Rpb24sIGl0ZW1JbmRleCk7XG4gICAgICAvLyBUbyBjb252ZXJ0IHN0ZXBzIHRvIGFuaW1hdGlvbiBmcmFjdGlvbjpcbiAgICAgIC8vIHN0ZXBzICAgICAgYW5pbWF0aW9uIGZyYWN0aW9uXG4gICAgICAvLyAgMSAgICAgICAgIDAgICAgIChzdGFnZSByaWdodClcbiAgICAgIC8vICAwICAgICAgICAgMC41ICAgKGNlbnRlciBzdGFnZSlcbiAgICAgIC8vIC0xICAgICAgICAgMSAgICAgKHN0YWdlIGxlZnQpXG4gICAgICBsZXQgYW5pbWF0aW9uRnJhY3Rpb24gPSAoMSAtIHN0ZXBzKSAvIDI7XG4gICAgICByZXR1cm4gKGFuaW1hdGlvbkZyYWN0aW9uID49IDAgJiYgYW5pbWF0aW9uRnJhY3Rpb24gPD0gMSkgP1xuICAgICAgICBhbmltYXRpb25GcmFjdGlvbiA6XG4gICAgICAgIG51bGw7IC8vIE91dHNpZGUgYW5pbWF0aW9uIHJhbmdlXG4gICAgfSk7XG4gIH0sXG5cbiAgLypcbiAgICogQ2FsY3VsYXRlIHRoZSBhbmltYXRpb24gdGltaW5ncyB0aGF0IHNob3VsZCBiZSB1c2VkIHRvIHNtb290aGx5IGFuaW1hdGUgdGhlXG4gICAqIGVsZW1lbnQncyBpdGVtcyBmcm9tIG9uZSBzZWxlY3Rpb24gc3RhdGUgdG8gYW5vdGhlci5cbiAgICpcbiAgICogVGhpcyByZXR1cm5zIGFuIGFycmF5IG9mIHRpbWluZ3MsIHdoZXJlIHRoZSB0aW1pbmcgYXQgcG9zaXRpb24gTiBzaG91bGQgYmVcbiAgICogdXNlZCB0byBhbmltYXRlIGl0ZW0gTi4gSWYgYW4gaXRlbSdzIHRpbWluZyBpcyBudWxsLCB0aGVuIHRoYXQgaXRlbSBzaG91bGRcbiAgICogbm90IHRha2UgcGxhY2UgaW4gdGhlIGFuaW1hdGlvbiwgYW5kIHNob3VsZCBiZSBoaWRkZW4gaW5zdGVhZC5cbiAgICovXG4gIGVmZmVjdFRpbWluZ3NGb3JTZWxlY3Rpb25BbmltYXRpb24oZWxlbWVudCwgZnJvbVNlbGVjdGlvbiwgdG9TZWxlY3Rpb24pIHtcblxuICAgIGxldCBpdGVtcyA9IGVsZW1lbnQuaXRlbXM7XG4gICAgaWYgKCFpdGVtcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgaXRlbUNvdW50ID0gaXRlbXMubGVuZ3RoO1xuICAgIGxldCBzZWxlY3Rpb25XcmFwcyA9IGVsZW1lbnQuc2VsZWN0aW9uV3JhcHM7XG4gICAgbGV0IHRvSW5kZXggPSBGcmFjdGlvbmFsU2VsZWN0aW9uLmhlbHBlcnMud3JhcHBlZFNlbGVjdGlvblBhcnRzKHRvU2VsZWN0aW9uLCBpdGVtQ291bnQsIHNlbGVjdGlvbldyYXBzKS5pbmRleDtcbiAgICBsZXQgdG90YWxTdGVwcyA9IHN0ZXBzVG9JbmRleChpdGVtQ291bnQsIHNlbGVjdGlvbldyYXBzLCBmcm9tU2VsZWN0aW9uLCB0b1NlbGVjdGlvbik7XG4gICAgbGV0IGRpcmVjdGlvbiA9IHRvdGFsU3RlcHMgPj0gMCA/ICdub3JtYWwnOiAncmV2ZXJzZSc7XG4gICAgbGV0IGZpbGwgPSAnYm90aCc7XG4gICAgbGV0IHRvdGFsRHVyYXRpb24gPSBlbGVtZW50LnNlbGVjdGlvbkFuaW1hdGlvbkR1cmF0aW9uO1xuICAgIGxldCBzdGVwRHVyYXRpb24gPSB0b3RhbFN0ZXBzICE9PSAwID9cbiAgICAgIHRvdGFsRHVyYXRpb24gKiAyIC8gTWF0aC5jZWlsKE1hdGguYWJzKHRvdGFsU3RlcHMpKSA6XG4gICAgICAwOyAgLy8gTm8gc3RlcHMgcmVxdWlyZWQsIGFuaW1hdGlvbiB3aWxsIGJlIGluc3RhbnRlbm91cy5cblxuICAgIGxldCB0aW1pbmdzID0gaXRlbXMubWFwKChpdGVtLCBpdGVtSW5kZXgpID0+IHtcbiAgICAgIGxldCBzdGVwcyA9IHN0ZXBzVG9JbmRleChpdGVtQ291bnQsIHNlbGVjdGlvbldyYXBzLCBpdGVtSW5kZXgsIHRvU2VsZWN0aW9uKTtcbiAgICAgIC8vIElmIHdlIGluY2x1ZGUgdGhpcyBpdGVtIGluIHRoZSBzdGFnZ2VyZWQgc2VxdWVuY2Ugb2YgYW5pbWF0aW9ucyB3ZSdyZVxuICAgICAgLy8gY3JlYXRpbmcsIHdoZXJlIHdvdWxkIHRoZSBpdGVtIGFwcGVhciBpbiB0aGUgc2VxdWVuY2U/XG4gICAgICBsZXQgcG9zaXRpb25JblNlcXVlbmNlID0gdG90YWxTdGVwcyAtIHN0ZXBzO1xuICAgICAgaWYgKHRvdGFsU3RlcHMgPCAwKSB7XG4gICAgICAgIHBvc2l0aW9uSW5TZXF1ZW5jZSA9IC1wb3NpdGlvbkluU2VxdWVuY2U7XG4gICAgICB9XG4gICAgICAvLyBTbywgaXMgdGhpcyBpdGVtIHJlYWxseSBpbmNsdWRlZCBpbiB0aGUgc2VxdWVuY2U/XG4gICAgICBpZiAoTWF0aC5jZWlsKHBvc2l0aW9uSW5TZXF1ZW5jZSkgPj0gMCAmJiBwb3NpdGlvbkluU2VxdWVuY2UgPD0gTWF0aC5hYnModG90YWxTdGVwcykpIHtcbiAgICAgICAgLy8gTm90ZSB0aGF0IGRlbGF5IGZvciBmaXJzdCBpdGVtIHdpbGwgYmUgbmVnYXRpdmUuIFRoYXQgd2lsbCBjYXVzZVxuICAgICAgICAvLyB0aGUgYW5pbWF0aW9uIHRvIHN0YXJ0IGhhbGZ3YXkgdGhyb3VnaCwgd2hpY2ggaXMgd2hhdCB3ZSB3YW50LlxuICAgICAgICBsZXQgZGVsYXkgPSBzdGVwRHVyYXRpb24gKiAocG9zaXRpb25JblNlcXVlbmNlIC0gMSkvMjtcbiAgICAgICAgbGV0IGVuZERlbGF5ID0gaXRlbUluZGV4ID09PSB0b0luZGV4ID9cbiAgICAgICAgICAtc3RlcER1cmF0aW9uLzIgOiAgIC8vIFN0b3AgaGFsZndheSB0aHJvdWdoLlxuICAgICAgICAgIDA7ICAgICAgICAgICAgICAvLyBQbGF5IGFuaW1hdGlvbiB1bnRpbCBlbmQuXG4gICAgICAgIHJldHVybiB7IGR1cmF0aW9uOiBzdGVwRHVyYXRpb24sIGRpcmVjdGlvbiwgZmlsbCwgZGVsYXksIGVuZERlbGF5IH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB0aW1pbmdzO1xuICB9XG5cbn07XG5cblxuLy8gS2V5ZnJhbWVzIGZvciBzdGFuZGFyZCBzZWxlY3Rpb24gYW5pbWF0aW9uIGVmZmVjdHMuXG5taXhpbi5zdGFuZGFyZEVmZmVjdEtleWZyYW1lcyA9IHtcblxuICAvLyBTaW1wbGUgY3Jvc3NmYWRlXG4gIGNyb3NzZmFkZTogW1xuICAgIHsgb3BhY2l0eTogMCB9LFxuICAgIHsgb3BhY2l0eTogMSB9LFxuICAgIHsgb3BhY2l0eTogMCB9XG4gIF0sXG5cbiAgLy8gUmV2ZWFsLCBhcyBpZiBzbGlkaW5nIHRoZSB0b3AgY2FyZCBvZmYgYSBkZWNrIG9mIGNhcmRzXG4gIHJldmVhbDogW1xuICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwJSknLCB6SW5kZXg6IDAgfSxcbiAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCUpJywgekluZGV4OiAxIH0sXG4gICAgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC0xMDAlKScsIHpJbmRleDogMiB9XG4gIF0sXG5cbiAgLy8gR29vZ2xlIFBob3Rvcy1zdHlsZSByZXZlYWwtd2l0aC1mYWRlIGFuaW1hdGlvblxuICByZXZlYWxXaXRoRmFkZTogW1xuICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwJSkgc2NhbGUoMC43NSknLCBvcGFjaXR5OiAwLCB6SW5kZXg6IDAgfSxcbiAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCUpIHNjYWxlKDEuMCknLCBvcGFjaXR5OiAxLCB6SW5kZXg6IDEgfSxcbiAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTEwMCUpIHNjYWxlKDEuMCknLCBvcGFjaXR5OiAxLCB6SW5kZXg6IDIgfVxuICBdLFxuXG4gIC8vIENhcm91c2VsIHZhcmlhbnQgd2l0aCBhIGJpdCBvZiBvZmYtc3RhZ2UgZWxlbWVudHMgc2hvd2luZ1xuICBzaG93QWRqYWNlbnQ6IFtcbiAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoNzglKSBzY2FsZSgwLjcpJywgekluZGV4OiAwIH0sXG4gICAgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDAlKSBzY2FsZSgwLjgyKScsIHpJbmRleDogMSB9LFxuICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNzglKSBzY2FsZSgwLjcpJywgekluZGV4OiAwIH1cbiAgXSxcblxuICAvLyBTaW1wbGUgc2xpZGVcbiAgc2xpZGU6IFtcbiAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMTAwJSknIH0sXG4gICAgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC0xMDAlKScgfVxuICBdLFxuXG4gIC8vIFNsaWRlLCB3aXRoIGEgZ2FwIGJldHdlZW5cbiAgc2xpZGVXaXRoR2FwOiBbXG4gICAgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDExMCUpJyB9LFxuICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtMTEwJSknIH1cbiAgXVxuXG59O1xuXG5cbi8qXG4gKiBTbW9vdGhseSBhbmltYXRlIHRoZSBzZWxlY3Rpb24gYmV0d2VlbiB0aGUgaW5kaWNhdGVkIFwiZnJvbVwiIGFuZCBcInRvXCJcbiAqIGluZGljZXMuIFRoZSBmb3JtZXIgY2FuIGJlIGEgZnJhY3Rpb24sIGUuZy4sIHdoZW4gdGhlIHVzZXIgcmVsZWFzZXMgYSBmaW5nZXJcbiAqIHRvIGNvbXBsZXRlIGEgdG91Y2ggZHJhZywgYW5kIHRoZSBzZWxlY3Rpb24gd2lsbCBzbmFwIHRvIHRoZSBjbG9zZXN0IHdob2xlXG4gKiBpbmRleC5cbiAqL1xuZnVuY3Rpb24gYW5pbWF0ZVNlbGVjdGlvbihlbGVtZW50LCBmcm9tU2VsZWN0aW9uLCB0b1NlbGVjdGlvbikge1xuXG4gIHJlc2V0QW5pbWF0aW9ucyhlbGVtZW50KTtcblxuICAvLyBDYWxjdWxhdGUgdGhlIGFuaW1hdGlvbiB0aW1pbmdzLlxuICBsZXQgaXRlbXMgPSBlbGVtZW50Lml0ZW1zO1xuICBsZXQga2V5ZnJhbWVzID0gZWxlbWVudC5zZWxlY3Rpb25BbmltYXRpb25LZXlmcmFtZXM7XG4gIGVsZW1lbnRbcGxheWluZ0FuaW1hdGlvblN5bWJvbF0gPSB0cnVlO1xuICBsZXQgdGltaW5ncyA9IG1peGluLmhlbHBlcnMuZWZmZWN0VGltaW5nc0ZvclNlbGVjdGlvbkFuaW1hdGlvbihlbGVtZW50LCBmcm9tU2VsZWN0aW9uLCB0b1NlbGVjdGlvbik7XG5cbiAgLy8gRmlndXJlIG91dCB3aGljaCBpdGVtIHdpbGwgYmUgdGhlIG9uZSAqYWZ0ZXIqIHRoZSBvbmUgd2UncmUgc2VsZWN0aW5nLlxuICBsZXQgaXRlbUNvdW50ID0gaXRlbXMubGVuZ3RoO1xuICBsZXQgc2VsZWN0aW9uV3JhcHMgPSBlbGVtZW50LnNlbGVjdGlvbldyYXBzO1xuICBsZXQgc2VsZWN0aW9uSW5kZXggPSBGcmFjdGlvbmFsU2VsZWN0aW9uLmhlbHBlcnMuc2VsZWN0aW9uUGFydHModG9TZWxlY3Rpb24sIGl0ZW1Db3VudCwgc2VsZWN0aW9uV3JhcHMpLmluZGV4O1xuICBsZXQgdG90YWxTdGVwcyA9IHN0ZXBzVG9JbmRleChpdGVtQ291bnQsIHNlbGVjdGlvbldyYXBzLCBmcm9tU2VsZWN0aW9uLCB0b1NlbGVjdGlvbik7XG4gIGxldCBmb3J3YXJkID0gdG90YWxTdGVwcyA+PSAwO1xuICBsZXQgbmV4dFVwSW5kZXggPSBzZWxlY3Rpb25JbmRleCArIChmb3J3YXJkID8gMSA6IC0gMSk7XG4gIGlmIChzZWxlY3Rpb25XcmFwcykge1xuICAgIG5leHRVcEluZGV4ID0gRnJhY3Rpb25hbFNlbGVjdGlvbi5oZWxwZXJzLndyYXBwZWRTZWxlY3Rpb24obmV4dFVwSW5kZXgsIGl0ZW1Db3VudCk7XG4gIH0gZWxzZSBpZiAoIWlzSXRlbUluZGV4SW5Cb3VuZHMoZWxlbWVudCwgbmV4dFVwSW5kZXgpKSB7XG4gICAgbmV4dFVwSW5kZXggPSBudWxsOyAvLyBBdCBzdGFydC9lbmQgb2YgbGlzdDsgZG9uJ3QgaGF2ZSBhIG5leHQgaXRlbSB0byBzaG93LlxuICB9XG5cbiAgLy8gUGxheSB0aGUgYW5pbWF0aW9ucyB1c2luZyB0aG9zZSB0aW1pbmdzLlxuICBsZXQgbGFzdEFuaW1hdGlvbkRldGFpbHM7XG4gIHRpbWluZ3MuZm9yRWFjaCgodGltaW5nLCBpbmRleCkgPT4ge1xuICAgIGxldCBpdGVtID0gaXRlbXNbaW5kZXhdO1xuICAgIGlmICh0aW1pbmcpIHtcbiAgICAgIHNob3dJdGVtKGl0ZW0sIHRydWUpO1xuICAgICAgbGV0IGFuaW1hdGlvbiA9IGl0ZW0uYW5pbWF0ZShrZXlmcmFtZXMsIHRpbWluZyk7XG4gICAgICBlbGVtZW50W2FuaW1hdGlvblN5bWJvbF1baW5kZXhdID0gYW5pbWF0aW9uO1xuICAgICAgaWYgKGluZGV4ID09PSBuZXh0VXBJbmRleCkge1xuICAgICAgICAvLyBUaGlzIGl0ZW0gd2lsbCBiZSBhbmltYXRlZCwgc28gd2lsbCBhbHJlYWR5IGJlIGluIHRoZSBkZXNpcmVkIHN0YXRlXG4gICAgICAgIC8vIGFmdGVyIHRoZSBhbmltYXRpb24gY29tcGxldGVzLlxuICAgICAgICBuZXh0VXBJbmRleCA9IG51bGw7XG4gICAgICB9XG4gICAgICBpZiAodGltaW5nLmVuZERlbGF5ICE9PSAwKSB7XG4gICAgICAgIC8vIFRoaXMgaXMgdGhlIGFuaW1hdGlvbiBmb3IgdGhlIGl0ZW0gdGhhdCB3aWxsIGJlIGxlZnQgc2VsZWN0ZWQuXG4gICAgICAgIC8vIFdlIHdhbnQgdG8gY2xlYW4gdXAgd2hlbiB0aGlzIGFuaW1hdGlvbiBjb21wbGV0ZXMuXG4gICAgICAgIGxhc3RBbmltYXRpb25EZXRhaWxzID0geyBhbmltYXRpb24sIGluZGV4LCB0aW1pbmcsIGZvcndhcmQgfTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVGhpcyBpdGVtIGRvZXNuJ3QgcGFydGljaXBhdGUgaW4gdGhlIGFuaW1hdGlvbi5cbiAgICAgIHNob3dJdGVtKGl0ZW0sIGZhbHNlKTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChsYXN0QW5pbWF0aW9uRGV0YWlscyAhPSBudWxsKSB7XG4gICAgLy8gQXJyYW5nZSBmb3IgY2xlYW4tdXAgd29yayB0byBiZSBwZXJmb3JtZWQuXG4gICAgbGFzdEFuaW1hdGlvbkRldGFpbHMubmV4dFVwSW5kZXggPSBuZXh0VXBJbmRleDtcbiAgICBsYXN0QW5pbWF0aW9uRGV0YWlscy5hbmltYXRpb24ub25maW5pc2ggPSBldmVudCA9PiBzZWxlY3Rpb25BbmltYXRpb25GaW5pc2hlZChlbGVtZW50LCBsYXN0QW5pbWF0aW9uRGV0YWlscyk7XG4gICAgZWxlbWVudFtsYXN0QW5pbWF0aW9uU3ltYm9sXSA9IGxhc3RBbmltYXRpb25EZXRhaWxzLmFuaW1hdGlvbjtcbiAgfSBlbHNlIHtcbiAgICAvLyBTaG91bGRuJ3QgaGFwcGVuIC0tIHdlIHNob3VsZCBhbHdheXMgaGF2ZSBhdCBsZWFzdCBvbmUgYW5pbWF0aW9uLlxuICAgIGVsZW1lbnRbcGxheWluZ0FuaW1hdGlvblN5bWJvbF0gPSBmYWxzZTtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIGdldEFuaW1hdGlvbkZvckl0ZW1JbmRleChlbGVtZW50LCBpbmRleCkge1xuICBpZiAoZWxlbWVudFthbmltYXRpb25TeW1ib2xdID09IG51bGwpIHtcbiAgICAvLyBOb3QgcmVhZHkgeWV0O1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGxldCBhbmltYXRpb24gPSBlbGVtZW50W2FuaW1hdGlvblN5bWJvbF1baW5kZXhdO1xuICBpZiAoIWFuaW1hdGlvbikge1xuICAgIGxldCBpdGVtID0gZWxlbWVudC5pdGVtc1tpbmRleF07XG4gICAgYW5pbWF0aW9uID0gaXRlbS5hbmltYXRlKGVsZW1lbnQuc2VsZWN0aW9uQW5pbWF0aW9uS2V5ZnJhbWVzLCB7XG4gICAgICBkdXJhdGlvbjogZWxlbWVudC5zZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvbixcbiAgICAgIGZpbGw6ICdib3RoJ1xuICAgIH0pO1xuICAgIGFuaW1hdGlvbi5wYXVzZSgpO1xuICAgIGVsZW1lbnRbYW5pbWF0aW9uU3ltYm9sXVtpbmRleF0gPSBhbmltYXRpb247XG4gIH1cbiAgcmV0dXJuIGFuaW1hdGlvbjtcbn1cblxuZnVuY3Rpb24gaXNJdGVtSW5kZXhJbkJvdW5kcyhlbGVtZW50LCBpbmRleCkge1xuICByZXR1cm4gaW5kZXggPj0gMCAmJiBlbGVtZW50Lml0ZW1zICYmIGluZGV4IDwgZWxlbWVudC5pdGVtcy5sZW5ndGg7XG59XG5cbi8qXG4gKiBSZW5kZXIgdGhlIHNlbGVjdGlvbiBzdGF0ZSBvZiB0aGUgZWxlbWVudC5cbiAqXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIHJlLXJlbmRlciBhIHByZXZpb3VzIHNlbGVjdGlvbiBzdGF0ZSAoaWYgdGhlXG4gKiBzZWxlY3RlZEluZGV4IHBhcmFtIGlzIG9taXR0ZWQpLCByZW5kZXIgdGhlIHNlbGVjdGlvbiBpbnN0YW50bHkgYXQgYSBnaXZlblxuICogd2hvbGUgb3IgZnJhY3Rpb25hbCBzZWxlY3Rpb24gaW5kZXgsIG9yIGFuaW1hdGUgdG8gYSBnaXZlbiBzZWxlY3Rpb24gaW5kZXguXG4gKlxuICogVGhlcmUgYXJlIHNldmVyYWwgZGlzdGluY3Qgc2NlbmFyaW9zIHdlIG5lZWQgdG8gY292ZXI6XG4gKlxuICogMS4gSW5pdGlhbCBwb3NpdGlvbmluZywgb3IgcmVwb3NpdGlvbmluZyBhZnRlciBjaGFuZ2luZyBhIHByb3BlcnR5IGxpa2VcbiAqICAgIHNlbGVjdGlvbkFuaW1hdGlvbktleWZyYW1lcyB0aGF0IGFmZmVjdHMgcmVuZGVyaW5nLlxuICogMi4gQW5pbWF0ZSBvbiBzZWxlY3RlZEluZGV4IGNoYW5nZS4gVGhpcyBzaG91bGQgb3ZlcnJpZGUgYW55IGFuaW1hdGlvbi9zd2lwZVxuICogICAgYWxyZWFkeSBpbiBwcm9ncmVzcy5cbiAqIDMuIEluc3RhbnRseSByZW5kZXIgdGhlIGN1cnJlbnQgcG9zaXRpb24gb2YgYSBkcmFnIG9wZXJhdGlvbiBpbiBwcm9ncmVzcy5cbiAqIDQuIENvbXBsZXRlIGEgZHJhZyBvcGVyYXRpb24uIElmIHRoZSBkcmFnIHdhc24ndCBmYXIgZW5vdWdoIHRvIGFmZmVjdFxuICogICAgc2VsZWN0aW9uLCB3ZSdsbCBqdXN0IGJlIHJlc3RvcmluZyB0aGUgc2VsZWN0ZWRGcmFjdGlvbiB0byAwLlxuICpcbiAqIElmIHRoZSBsaXN0IGRvZXMgbm90IHdyYXAsIGFueSBzZWxlY3Rpb24gcG9zaXRpb24gb3V0c2lkZSB0aGUgbGlzdCdzIGJvdW5kc1xuICogd2lsbCBiZSBkYW1wZWQgdG8gcHJvZHVjZSBhIHZpc3VhbCBlZmZlY3Qgb2YgdGVuc2lvbi5cbiAqL1xuZnVuY3Rpb24gcmVuZGVyU2VsZWN0aW9uKGVsZW1lbnQsIHNlbGVjdGVkSW5kZXg9ZWxlbWVudC5zZWxlY3RlZEluZGV4LCBzZWxlY3RlZEZyYWN0aW9uPWVsZW1lbnQuc2VsZWN0ZWRGcmFjdGlvbikge1xuICBsZXQgaXRlbUNvdW50ID0gZWxlbWVudC5pdGVtcyA/IGVsZW1lbnQuaXRlbXMubGVuZ3RoIDogMDtcbiAgaWYgKGl0ZW1Db3VudCA9PT0gMCkge1xuICAgIC8vIE5vdGhpbmcgdG8gcmVuZGVyLlxuICAgIHJldHVybjtcbiAgfVxuICBpZiAoc2VsZWN0ZWRJbmRleCA8IDApIHtcbiAgICAvLyBUT0RPOiBIYW5kbGUgbm8gc2VsZWN0aW9uLlxuICAgIHJldHVybjtcbiAgfVxuICBsZXQgc2VsZWN0aW9uID0gc2VsZWN0ZWRJbmRleCArIHNlbGVjdGVkRnJhY3Rpb247XG4gIGlmIChlbGVtZW50LnNlbGVjdGlvbldyYXBzKSB7XG4gICAgLy8gQXBwbHkgd3JhcHBpbmcgdG8gZW5zdXJlIGNvbnNpc3RlbnQgcmVwcmVzZW50YXRpb24gb2Ygc2VsZWN0aW9uLlxuICAgIHNlbGVjdGlvbiA9IEZyYWN0aW9uYWxTZWxlY3Rpb24uaGVscGVycy53cmFwcGVkU2VsZWN0aW9uKHNlbGVjdGlvbiwgaXRlbUNvdW50KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBBcHBseSBkYW1waW5nIGlmIG5lY2Vzc2FyeS5cbiAgICBzZWxlY3Rpb24gPSBGcmFjdGlvbmFsU2VsZWN0aW9uLmhlbHBlcnMuZGFtcGVkU2VsZWN0aW9uKHNlbGVjdGlvbiwgaXRlbUNvdW50KTtcbiAgfVxuICBsZXQgcHJldmlvdXNTZWxlY3Rpb24gPSBlbGVtZW50W3ByZXZpb3VzU2VsZWN0aW9uU3ltYm9sXTtcbiAgaWYgKGVsZW1lbnRbc2hvd1RyYW5zaXRpb25TeW1ib2xdICYmIHByZXZpb3VzU2VsZWN0aW9uICE9IG51bGwgJiZcbiAgICAgIHByZXZpb3VzU2VsZWN0aW9uICE9PSBzZWxlY3Rpb24pIHtcbiAgICAvLyBBbmltYXRlIHNlbGVjdGlvbiBmcm9tIHByZXZpb3VzIHN0YXRlIHRvIG5ldyBzdGF0ZS5cbiAgICBhbmltYXRlU2VsZWN0aW9uKGVsZW1lbnQsIHByZXZpb3VzU2VsZWN0aW9uLCBzZWxlY3Rpb24pO1xuICB9IGVsc2UgaWYgKHNlbGVjdGVkRnJhY3Rpb24gPT09IDAgJiYgZWxlbWVudFtwbGF5aW5nQW5pbWF0aW9uU3ltYm9sXSkge1xuICAgIC8vIEFscmVhZHkgaW4gcHJvY2VzcyBvZiBhbmltYXRpbmcgdG8gZnJhY3Rpb24gMC4gRHVyaW5nIHRoYXQgcHJvY2VzcyxcbiAgICAvLyBpZ25vcmUgc3Vic2VxdWVudCBhdHRlbXB0cyB0byByZW5kZXJTZWxlY3Rpb24gdG8gZnJhY3Rpb24gMC5cbiAgICByZXR1cm47XG4gIH0gZWxzZSB7XG4gICAgLy8gUmVuZGVyIGN1cnJlbnQgc2VsZWN0aW9uIHN0YXRlIGluc3RhbnRseS5cbiAgICByZW5kZXJTZWxlY3Rpb25JbnN0YW50bHkoZWxlbWVudCwgc2VsZWN0aW9uKTtcbiAgfVxuICBlbGVtZW50W3ByZXZpb3VzU2VsZWN0aW9uU3ltYm9sXSA9IHNlbGVjdGlvbjtcbn1cblxuLypcbiAqIEluc3RhbnRseSByZW5kZXIgKGRvbid0IGFuaW1hdGUpIHRoZSBlbGVtZW50J3MgaXRlbXMgYXQgdGhlIGdpdmVuIHdob2xlIG9yXG4gKiBmcmFjdGlvbmFsIHNlbGVjdGlvbiBpbmRleC5cbiAqL1xuZnVuY3Rpb24gcmVuZGVyU2VsZWN0aW9uSW5zdGFudGx5KGVsZW1lbnQsIHRvU2VsZWN0aW9uKSB7XG4gIGxldCBhbmltYXRpb25GcmFjdGlvbnMgPSBtaXhpbi5oZWxwZXJzLmFuaW1hdGlvbkZyYWN0aW9uc0ZvclNlbGVjdGlvbihlbGVtZW50LCB0b1NlbGVjdGlvbik7XG4gIGFuaW1hdGlvbkZyYWN0aW9ucy5tYXAoKGFuaW1hdGlvbkZyYWN0aW9uLCBpbmRleCkgPT4ge1xuICAgIGxldCBpdGVtID0gZWxlbWVudC5pdGVtc1tpbmRleF07XG4gICAgaWYgKGFuaW1hdGlvbkZyYWN0aW9uICE9IG51bGwpIHtcbiAgICAgIHNob3dJdGVtKGl0ZW0sIHRydWUpO1xuICAgICAgc2V0QW5pbWF0aW9uRnJhY3Rpb24oZWxlbWVudCwgaW5kZXgsIGFuaW1hdGlvbkZyYWN0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2hvd0l0ZW0oaXRlbSwgZmFsc2UpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qXG4gKiBXZSBtYWludGFpbiBhbiBhcnJheSBjb250YWluaW5nIGFuIGFuaW1hdGlvbiBwZXIgaXRlbS4gVGhpcyBpcyB1c2VkIGZvciB0d29cbiAqIHJlYXNvbnM6XG4gKlxuICogKiBEdXJpbmcgYSBkcmFnIG9wZXJhdGlvbiwgd2Ugd2FudCB0byBiZSBhYmxlIHRvIHJldXNlIGFuaW1hdGlvbnMgYmV0d2VlblxuICogICBkcmFnIHVwZGF0ZXMuXG4gKiAqIFdoZW4gYSBzZWxlY3Rpb24gYW5pbWF0aW9uIGNvbXBsZXRlcywgd2UgbmVlZCB0byBiZSBhYmxlIHRvIGxlYXZlIHRoZVxuICogICB2aXNpYmlsZSBpdGVtcyBpbiBhIHBhdXNlZCBzdGF0ZS4gTGF0ZXIsIHdlJ2xsIHdhbnQgdG8gYmUgYWJsZSB0byBjbGVhbiB1cFxuICogICB0aG9zZSBhbmltYXRpb25zLlxuICpcbiAqIE5vdGUgdGhhdCB0aGlzIGFycmF5IGlzIHNwYXJzZTogaXQgd2lsbCBvbmx5IGhvbGQgdXAgZnJvbSAw4oCTMyBhbmltYXRpb25zIGF0XG4gKiBhbnkgZ2l2ZW4gcG9pbnQuXG4gKi9cbmZ1bmN0aW9uIHJlc2V0QW5pbWF0aW9ucyhlbGVtZW50KSB7XG4gIGxldCBhbmltYXRpb25zID0gZWxlbWVudFthbmltYXRpb25TeW1ib2xdO1xuICBpZiAoYW5pbWF0aW9ucykge1xuICAgIC8vIENhbmNlbCBleGlzdGluZyBhbmltYXRpb25zIHRvIHJlbW92ZSB0aGUgZWZmZWN0cyB0aGV5J3JlIGFwcGx5aW5nLlxuICAgIGFuaW1hdGlvbnMuZm9yRWFjaCgoYW5pbWF0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGFuaW1hdGlvbikge1xuICAgICAgICBhbmltYXRpb24uY2FuY2VsKCk7XG4gICAgICAgIGFuaW1hdGlvbnNbaW5kZXhdID0gbnVsbDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBsZXQgaXRlbUNvdW50ID0gZWxlbWVudC5pdGVtcyA/IGVsZW1lbnQuaXRlbXMubGVuZ3RoIDogMDtcbiAgaWYgKCFhbmltYXRpb25zIHx8IGFuaW1hdGlvbnMubGVuZ3RoICE9PSBpdGVtQ291bnQpIHtcbiAgICAvLyBIYXZlbid0IGFuaW1hdGVkIGJlZm9yZSB3aXRoIHRoaXMgbnVtYmVyIG9mIGl0ZW1zOyAocmUpY3JlYXRlIGFycmF5LlxuICAgIGVsZW1lbnRbYW5pbWF0aW9uU3ltYm9sXSA9IG5ldyBBcnJheShpdGVtQ291bnQpO1xuICB9XG59XG5cbi8qXG4gKiBUaGUgbGFzdCBhbmltYXRpb24gaW4gb3VyIHNlbGVjdGlvbiBhbmltYXRpb24gaGFzIGNvbXBsZXRlZC4gQ2xlYW4gdXAuXG4gKi9cbmZ1bmN0aW9uIHNlbGVjdGlvbkFuaW1hdGlvbkZpbmlzaGVkKGVsZW1lbnQsIGRldGFpbHMpIHtcblxuICAvLyBXaGVuIHRoZSBsYXN0IGFuaW1hdGlvbiBjb21wbGV0ZXMsIHNob3cgdGhlIG5leHQgaXRlbSBpbiB0aGUgZGlyZWN0aW9uXG4gIC8vIHdlJ3JlIGdvaW5nLiBXYWl0aW5nIHRvIHRoYXQgdW50aWwgdGhpcyBwb2ludCBpcyBhIGJpdCBvZiBhIGhhY2sgdG8gYXZvaWRcbiAgLy8gaGF2aW5nIGEgbmV4dCBpdGVtIHRoYXQncyBoaWdoZXIgaW4gdGhlIG5hdHVyYWwgei1vcmRlciBvYnNjdXJlIG90aGVyIGl0ZW1zXG4gIC8vIGR1cmluZyBhbmltYXRpb24uXG4gIGxldCBuZXh0VXBJbmRleCA9IGRldGFpbHMubmV4dFVwSW5kZXg7XG4gIGlmIChuZXh0VXBJbmRleCAhPSBudWxsKSB7XG4gICAgaWYgKGVsZW1lbnRbYW5pbWF0aW9uU3ltYm9sXVtuZXh0VXBJbmRleF0pIHtcbiAgICAgIC8vIENhbmNlbCBleGlzdGluZyBzZWxlY3Rpb24gYW5pbWF0aW9uIHNvIHdlIGNhbiBjb25zdHJ1Y3QgYSBuZXcgb25lLlxuICAgICAgZWxlbWVudFthbmltYXRpb25TeW1ib2xdW25leHRVcEluZGV4XS5jYW5jZWwoKTtcbiAgICAgIGVsZW1lbnRbYW5pbWF0aW9uU3ltYm9sXVtuZXh0VXBJbmRleF0gPSBudWxsO1xuICAgIH1cbiAgICBsZXQgYW5pbWF0aW9uRnJhY3Rpb24gPSBkZXRhaWxzLmZvcndhcmQgPyAwIDogMTtcbiAgICBzZXRBbmltYXRpb25GcmFjdGlvbihlbGVtZW50LCBuZXh0VXBJbmRleCwgYW5pbWF0aW9uRnJhY3Rpb24pO1xuICAgIHNob3dJdGVtKGVsZW1lbnQuaXRlbXNbbmV4dFVwSW5kZXhdLCB0cnVlKTtcbiAgfVxuXG4gIGVsZW1lbnRbbGFzdEFuaW1hdGlvblN5bWJvbF0ub25maW5pc2ggPSBudWxsO1xuICBlbGVtZW50W3BsYXlpbmdBbmltYXRpb25TeW1ib2xdID0gZmFsc2U7XG59XG5cbi8qXG4gKiBQYXVzZSB0aGUgaW5kaWNhdGVkIGFuaW1hdGlvbiBhbmQgaGF2ZSBpdCBzaG93IHRoZSBhbmltYXRpb24gYXQgdGhlIGdpdmVuXG4gKiBmcmFjdGlvbiAoYmV0d2VlbiAwIGFuZCAxKSBvZiB0aGUgd2F5IHRocm91Z2ggdGhlIGFuaW1hdGlvbi5cbiAqL1xuZnVuY3Rpb24gc2V0QW5pbWF0aW9uRnJhY3Rpb24oZWxlbWVudCwgaXRlbUluZGV4LCBmcmFjdGlvbikge1xuICBsZXQgYW5pbWF0aW9uID0gZ2V0QW5pbWF0aW9uRm9ySXRlbUluZGV4KGVsZW1lbnQsIGl0ZW1JbmRleCk7XG4gIGlmIChhbmltYXRpb24pIHtcbiAgICBsZXQgZHVyYXRpb24gPSBlbGVtZW50LnNlbGVjdGlvbkFuaW1hdGlvbkR1cmF0aW9uO1xuICAgIGlmIChkdXJhdGlvbikge1xuICAgICAgYW5pbWF0aW9uLmN1cnJlbnRUaW1lID0gZnJhY3Rpb24gKiBkdXJhdGlvbjtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvd0l0ZW0oaXRlbSwgZmxhZykge1xuICBpdGVtLnN0eWxlLnZpc2liaWxpdHkgPSBmbGFnID8gJ3Zpc2libGUnIDogJ2hpZGRlbic7XG59XG5cbi8qXG4gKiBGaWd1cmUgb3V0IGhvdyBtYW55IHN0ZXBzIGl0IHdpbGwgdGFrZSB0byBnbyBmcm9tIGZyb21TZWxlY3Rpb24gdG9cbiAqIHRvU2VsZWN0aW9uLiBUbyBnbyBmcm9tIGl0ZW0gMyB0byBpdGVtIDQgaXMgb25lIHN0ZXAuXG4gKlxuICogSWYgd3JhcHBpbmcgaXMgYWxsb3dlZCwgdGhlbiBnb2luZyBmcm9tIHRoZSBsYXN0IGl0ZW0gdG8gdGhlIGZpcnN0IHdpbGwgdGFrZVxuICogb25lIHN0ZXAgKGZvcndhcmQpLCBhbmQgZ29pbmcgZnJvbSB0aGUgZmlyc3QgaXRlbSB0byB0aGUgbGFzdCB3aWxsIHRha2Ugb25lXG4gKiBzdGVwIChiYWNrd2FyZCkuXG4gKi9cbmZ1bmN0aW9uIHN0ZXBzVG9JbmRleChsZW5ndGgsIGFsbG93V3JhcCwgZnJvbVNlbGVjdGlvbiwgdG9TZWxlY3Rpb24pIHtcbiAgbGV0IHN0ZXBzID0gdG9TZWxlY3Rpb24gLSBmcm9tU2VsZWN0aW9uO1xuICAvLyBXcmFwcGluZyBvbmx5IGtpY2tzIGluIHdoZW4gbGlzdCBoYXMgbW9yZSB0aGFuIDEgaXRlbS5cbiAgaWYgKGFsbG93V3JhcCAmJiBsZW5ndGggPiAxKSB7XG4gICAgbGV0IHdyYXBTdGVwcyA9IGxlbmd0aCAtIE1hdGguYWJzKHN0ZXBzKTtcbiAgICBpZiAod3JhcFN0ZXBzIDw9IDEpIHtcbiAgICAgIC8vIFNwZWNpYWwgY2FzZVxuICAgICAgc3RlcHMgPSBzdGVwcyA8IDAgP1xuICAgICAgICB3cmFwU3RlcHMgOiAgIC8vIFdyYXAgZm9yd2FyZCBmcm9tIGxhc3QgaXRlbSB0byBmaXJzdC5cbiAgICAgICAgLXdyYXBTdGVwczsgICAvLyBXcmFwIGJhY2t3YXJkIGZyb20gZmlyc3QgaXRlbSB0byBsYXN0LlxuICAgIH1cbiAgfVxuICByZXR1cm4gc3RlcHM7XG59XG4iLCIvLyBVc2VkIHRvIGFzc2lnbiB1bmlxdWUgSURzIHRvIGl0ZW0gZWxlbWVudHMgd2l0aG91dCBJRHMuXG5sZXQgaWRDb3VudCA9IDA7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBTZWxlY3Rpb25BcmlhQWN0aXZlLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggdHJlYXRzIHRoZSBzZWxlY3RlZCBpdGVtIGluIGEgbGlzdCBhcyB0aGUgYWN0aXZlIGl0ZW0gaW4gQVJJQVxuICAgKiBhY2Nlc3NpYmlsaXR5IHRlcm1zLlxuICAgKlxuICAgKiBIYW5kbGluZyBBUklBIHNlbGVjdGlvbiBzdGF0ZSBwcm9wZXJseSBpcyBhY3R1YWxseSBxdWl0ZSBjb21wbGV4OlxuICAgKlxuICAgKiAqIFRoZSBpdGVtcyBpbiB0aGUgbGlzdCBuZWVkIHRvIGJlIGluZGljYXRlZCBhcyBwb3NzaWJsZSBpdGVtcyB2aWEgYW4gQVJJQVxuICAgKiAgIGByb2xlYCBhdHRyaWJ1dGUgdmFsdWUgc3VjaCBhcyBcIm9wdGlvblwiLlxuICAgKiAqIFRoZSBzZWxlY3RlZCBpdGVtIG5lZWQgdG8gYmUgbWFya2VkIGFzIHNlbGVjdGVkIGJ5IHNldHRpbmcgdGhlIGl0ZW0nc1xuICAgKiAgIGBhcmlhLXNlbGVjdGVkYCBhdHRyaWJ1dGUgdG8gdHJ1ZSAqYW5kKiB0aGUgb3RoZXIgaXRlbXMgbmVlZCBiZSBtYXJrZWQgYXNcbiAgICogICAqbm90KiBzZWxlY3RlZCBieSBzZXR0aW5nIGBhcmlhLXNlbGVjdGVkYCB0byBmYWxzZS5cbiAgICogKiBUaGUgb3V0ZXJtb3N0IGVsZW1lbnQgd2l0aCB0aGUga2V5Ym9hcmQgZm9jdXMgbmVlZHMgdG8gaGF2ZSBhdHRyaWJ1dGVzXG4gICAqICAgc2V0IG9uIGl0IHNvIHRoYXQgdGhlIHNlbGVjdGlvbiBpcyBrbm93YWJsZSBhdCB0aGUgbGlzdCBsZXZlbCB2aWEgdGhlXG4gICAqICAgYGFyaWEtYWN0aXZlZGVzY2VuZGFudGAgYXR0cmlidXRlLlxuICAgKiAqIFVzZSBvZiBgYXJpYS1hY3RpdmVkZXNjZW5kYW50YCBpbiB0dXJuIHJlcXVpcmVzIHRoYXQgYWxsIGl0ZW1zIGluIHRoZVxuICAgKiAgIGxpc3QgaGF2ZSBJRCBhdHRyaWJ1dGVzIGFzc2lnbmVkIHRvIHRoZW0uXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gdHJpZXMgdG8gYWRkcmVzcyBhbGwgb2YgdGhlIGFib3ZlIHJlcXVpcmVtZW50cy4gVG8gdGhhdCBlbmQsXG4gICAqIHRoaXMgbWl4aW4gd2lsbCBhc3NpZ24gZ2VuZXJhdGVkIElEcyB0byBhbnkgaXRlbSB0aGF0IGRvZXNuJ3QgYWxyZWFkeSBoYXZlXG4gICAqIGFuIElELlxuICAgKlxuICAgKiBBUklBIHJlbGllcyBvbiBlbGVtZW50cyB0byBwcm92aWRlIGByb2xlYCBhdHRyaWJ1dGVzLiBUaGlzIG1peGluIHdpbGwgYXBwbHlcbiAgICogYSBkZWZhdWx0IHJvbGUgb2YgXCJsaXN0Ym94XCIgb24gdGhlIG91dGVyIGxpc3QgaWYgaXQgZG9lc24ndCBhbHJlYWR5IGhhdmUgYW5cbiAgICogZXhwbGljaXQgcm9sZS4gU2ltaWxhcmx5LCB0aGlzIG1peGluIHdpbGwgYXBwbHkgYSBkZWZhdWx0IHJvbGUgb2YgXCJvcHRpb25cIlxuICAgKiB0byBhbnkgbGlzdCBpdGVtIHRoYXQgZG9lcyBub3QgYWxyZWFkeSBoYXZlIGEgcm9sZSBzcGVjaWZpZWQuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyBhIHNldCBvZiBtZW1iZXJzIHRoYXQgbWFuYWdlIHRoZSBzdGF0ZSBvZiB0aGUgc2VsZWN0aW9uOlxuICAgKiBgYXBwbHlTZWxlY3Rpb25gLCBgaXRlbUFkZGVkYCwgYW5kIGBzZWxlY3RlZEluZGV4YC4gWW91IGNhbiBzdXBwbHkgdGhlc2VcbiAgICogeW91cnNlbGYsIG9yIGRvIHNvIHZpYSB0aGUgW1NpbmdsZVNlbGVjdGlvbl0oU2luZ2xlU2VsZWN0aW9uLm1kKSBtaXhpbi5cbiAgICovXG4gIGNsYXNzIFNlbGVjdGlvbkFyaWFBY3RpdmUgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGFwcGx5U2VsZWN0aW9uKGl0ZW0sIHNlbGVjdGVkKSB7XG4gICAgICBpZiAoc3VwZXIuYXBwbHlTZWxlY3Rpb24pIHsgc3VwZXIuYXBwbHlTZWxlY3Rpb24oaXRlbSwgc2VsZWN0ZWQpOyB9XG4gICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsIHNlbGVjdGVkKTtcbiAgICAgIGxldCBpdGVtSWQgPSBpdGVtLmlkO1xuICAgICAgaWYgKGl0ZW1JZCkge1xuICAgICAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgICBvdXRlcm1vc3RFbGVtZW50KHRoaXMpLnNldEF0dHJpYnV0ZSgnYXJpYS1hY3RpdmVkZXNjZW5kYW50JywgaXRlbUlkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbGxlY3RpdmVDaGFuZ2VkKCkge1xuICAgICAgaWYgKHN1cGVyLmNvbGxlY3RpdmVDaGFuZ2VkKSB7IHN1cGVyLmNvbGxlY3RpdmVDaGFuZ2VkKCk7IH1cbiAgICAgIHNldEFyaWFBdHRyaWJ1dGVzKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKSB7IHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7IH1cbiAgICAgIHNldEFyaWFBdHRyaWJ1dGVzKHRoaXMpO1xuICAgIH1cblxuICAgIGl0ZW1BZGRlZChpdGVtKSB7XG4gICAgICBpZiAoc3VwZXIuaXRlbUFkZGVkKSB7IHN1cGVyLml0ZW1BZGRlZChpdGVtKTsgfVxuXG4gICAgICBpZiAoIWl0ZW0uZ2V0QXR0cmlidXRlKCdyb2xlJykpIHtcbiAgICAgICAgLy8gQXNzaWduIGEgZGVmYXVsdCBBUklBIHJvbGUuXG4gICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdyb2xlJywgJ29wdGlvbicpO1xuICAgICAgfVxuXG4gICAgICAvLyBFbnN1cmUgZWFjaCBpdGVtIGhhcyBhbiBJRCBzbyB3ZSBjYW4gc2V0IGFyaWEtYWN0aXZlZGVzY2VuZGFudCBvbiB0aGVcbiAgICAgIC8vIG92ZXJhbGwgbGlzdCB3aGVuZXZlciB0aGUgc2VsZWN0aW9uIGNoYW5nZXMuXG4gICAgICAvL1xuICAgICAgLy8gVGhlIElEIHdpbGwgdGFrZSB0aGUgZm9ybSBvZiBhIGJhc2UgSUQgcGx1cyBhIHVuaXF1ZSBpbnRlZ2VyLiBUaGUgYmFzZVxuICAgICAgLy8gSUQgd2lsbCBiZSBpbmNvcnBvcmF0ZSB0aGUgY29tcG9uZW50J3Mgb3duIElELiBFLmcuLCBpZiBhIGNvbXBvbmVudCBoYXNcbiAgICAgIC8vIElEIFwiZm9vXCIsIHRoZW4gaXRzIGl0ZW1zIHdpbGwgaGF2ZSBJRHMgdGhhdCBsb29rIGxpa2UgXCJfZm9vT3B0aW9uMVwiLiBJZlxuICAgICAgLy8gdGhlIGNvbXBuZW50IGhhcyBubyBJRCBpdHNlbGYsIGl0cyBpdGVtcyB3aWxsIGdldCBJRHMgdGhhdCBsb29rIGxpa2VcbiAgICAgIC8vIFwiX29wdGlvbjFcIi4gSXRlbSBJRHMgYXJlIHByZWZpeGVkIHdpdGggYW4gdW5kZXJzY29yZSB0byBkaWZmZXJlbnRpYXRlXG4gICAgICAvLyB0aGVtIGZyb20gbWFudWFsbHktYXNzaWduZWQgSURzLCBhbmQgdG8gbWluaW1pemUgdGhlIHBvdGVudGlhbCBmb3IgSURcbiAgICAgIC8vIGNvbmZsaWN0cy5cbiAgICAgIGlmICghaXRlbS5pZCkge1xuICAgICAgICBsZXQgYmFzZUlkID0gdGhpcy5pZCA/XG4gICAgICAgICAgICBcIl9cIiArIHRoaXMuaWQgKyBcIk9wdGlvblwiIDpcbiAgICAgICAgICAgIFwiX29wdGlvblwiO1xuICAgICAgICBpdGVtLmlkID0gYmFzZUlkICsgaWRDb3VudCsrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGdldCBzZWxlY3RlZEl0ZW0oKSB7XG4gICAgICByZXR1cm4gc3VwZXIuc2VsZWN0ZWRJdGVtO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0ZWRJdGVtKGl0ZW0pIHtcbiAgICAgIGlmICgnc2VsZWN0ZWRJdGVtJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEl0ZW0gPSBpdGVtOyB9XG4gICAgICAvLyBDYXRjaCB0aGUgY2FzZSB3aGVyZSB0aGUgc2VsZWN0aW9uIGlzIHJlbW92ZWQuXG4gICAgICBpZiAoaXRlbSA9PSBudWxsKSB7XG4gICAgICAgIG91dGVybW9zdEVsZW1lbnQodGhpcykucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBTZWxlY3Rpb25BcmlhQWN0aXZlO1xufTtcblxuXG4vLyBSZXR1cm4gdGhlIGZpcnN0IEFSSUEgYWN0aXZlZGVzY2VuZGFudCBkZWZpbmVkIGJ5IHRoZSBjb2xsZWN0aXZlLlxuZnVuY3Rpb24gZ2V0Q29sbGVjdGl2ZUFyaWFBY3RpdmVEZXNjZW5kYW50KGNvbGxlY3RpdmUpIHtcbiAgbGV0IGRlc2NlbmRhbnRzID0gY29sbGVjdGl2ZS5lbGVtZW50cy5tYXAoZWxlbWVudCA9PiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1hY3RpdmVkZXNjZW5kYW50JykpO1xuICBsZXQgbm9uTnVsbERlc2NlbmRhbnRzID0gZGVzY2VuZGFudHMuZmlsdGVyKGRlc2NlbmRhbnQgPT4gZGVzY2VuZGFudCAhPT0gbnVsbCk7XG4gIHJldHVybiBub25OdWxsRGVzY2VuZGFudHNbMF07XG59XG5cblxuLy8gUmV0dXJuIHRoZSBmaXJzdCBBUklBIGxhYmVsIGRlZmluZWQgYnkgdGhlIGNvbGxlY3RpdmUuXG5mdW5jdGlvbiBnZXRDb2xsZWN0aXZlQXJpYVJvbGUoY29sbGVjdGl2ZSkge1xuICBsZXQgcm9sZXMgPSBjb2xsZWN0aXZlLmVsZW1lbnRzLm1hcChlbGVtZW50ID0+IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdyb2xlJykpO1xuICBsZXQgbm9uTnVsbFJvbGVzID0gcm9sZXMuZmlsdGVyKHJvbGUgPT4gcm9sZSAhPT0gbnVsbCk7XG4gIHJldHVybiBub25OdWxsUm9sZXNbMF07XG59XG5cbmZ1bmN0aW9uIG91dGVybW9zdEVsZW1lbnQoZWxlbWVudCkge1xuICByZXR1cm4gZWxlbWVudC5jb2xsZWN0aXZlID9cbiAgICBlbGVtZW50LmNvbGxlY3RpdmUub3V0ZXJtb3N0RWxlbWVudCA6XG4gICAgZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gc2V0QXJpYUF0dHJpYnV0ZXMoZWxlbWVudCkge1xuXG4gIGlmICghZWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgcmV0dXJuOyAvLyBOb3QgaW4gZG9jdW1lbnQgeWV0XG4gIH1cbiAgaWYgKGVsZW1lbnQuY29sbGVjdGl2ZSAmJiBlbGVtZW50ICE9PSBlbGVtZW50LmNvbGxlY3RpdmUub3V0ZXJtb3N0RWxlbWVudCkge1xuICAgIC8vIE5vdCB0aGUgb3V0ZXJtb3N0IGVsZW1lbnQsIGRvIG5vdGhpbmcgYW5kIGxldCB0aGUgb3V0ZXJtb3N0IGVsZW1lbnRcbiAgICAvLyBoYW5kbGUgdGhpbmdzLlxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIEVuc3VyZSB0aGUgZWxlbWVudCBoYXMgYW4gQVJJQSByb2xlLlxuICBpZiAoIWVsZW1lbnQuZ2V0QXR0cmlidXRlKCdyb2xlJykpIHtcbiAgICAvLyBUcnkgdG8gcHJvbW90ZSBhbiBBUklBIHJvbGUgZnJvbSBhbiBpbm5lciBlbGVtZW50LiBJZiBub25lIGlzIGZvdW5kLFxuICAgIC8vIHVzZSBhIGRlZmF1bHQgcm9sZS5cbiAgICBsZXQgcm9sZSA9IGVsZW1lbnQuY29sbGVjdGl2ZSAmJiBnZXRDb2xsZWN0aXZlQXJpYVJvbGUoZWxlbWVudC5jb2xsZWN0aXZlKTtcbiAgICByb2xlID0gcm9sZSB8fCAnbGlzdGJveCc7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCByb2xlKTtcbiAgfVxuXG4gIGlmICghZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcpICYmIGVsZW1lbnQuY29sbGVjdGl2ZSkge1xuICAgIC8vIFRyeSB0byBwcm9tb3RlIGFuIEFSSUEgYWN0aXZlZGVzY2VuZGFudCB2YWx1ZSBmcm9tIGFuIGlubmVyIGVsZW1lbnQuXG4gICAgbGV0IGRlc2NlbmRhbnQgPSBnZXRDb2xsZWN0aXZlQXJpYUFjdGl2ZURlc2NlbmRhbnQoZWxlbWVudC5jb2xsZWN0aXZlKTtcbiAgICBpZiAoZGVzY2VuZGFudCkge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcsIGRlc2NlbmRhbnQpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChlbGVtZW50LmNvbGxlY3RpdmUpIHtcbiAgICAvLyBSZW1vdmUgdGhlIEFSSUEgcm9sZSBhbmQgYWN0aXZlZGVzY2VuZGFudCB2YWx1ZXMgZnJvbSB0aGUgY29sbGVjdGl2ZSdzXG4gICAgLy8gaW5uZXIgZWxlbWVudHMuXG4gICAgZWxlbWVudC5jb2xsZWN0aXZlLmVsZW1lbnRzLmZvckVhY2gobWVtYmVyID0+IHtcbiAgICAgIGlmIChtZW1iZXIgIT09IGVsZW1lbnQpIHtcbiAgICAgICAgbWVtYmVyLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1hY3RpdmVkZXNjZW5kYW50Jyk7XG4gICAgICAgIG1lbWJlci5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnbm9uZScpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbn1cbiIsIi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggU2VsZWN0aW9uSGlnaGxpZ2h0LiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggYXBwbGllcyBzdGFuZGFyZCBoaWdobGlnaHQgY29sb3JzIHRvIGEgc2VsZWN0ZWQgaXRlbS5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBoaWdobGlnaHRzIHRleHR1YWwgaXRlbXMgKGUuZy4sIGluIGEgbGlzdCkgaW4gYSBzdGFuZGFyZCB3YXkgYnlcbiAgICogdXNpbmcgdGhlIENTUyBgaGlnaGxpZ2h0YCBhbmQgYGhpZ2hsaWdodHRleHRgIGNvbG9yIHZhbHVlcy4gVGhlc2UgdmFsdWVzXG4gICAqIHJlc3BlY3Qgb3BlcmF0aW5nIHN5c3RlbSBkZWZhdWx0cyBhbmQgdXNlciBwcmVmZXJlbmNlcywgYW5kIGhlbmNlIGFyZSBnb29kXG4gICAqIGRlZmF1bHQgdmFsdWVzIGZvciBoaWdobGlnaHQgY29sb3JzLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGV4cGVjdHMgYSBgc2VsZWN0ZWRgIGNsYXNzIHRvIGJlIGFwcGxpZWQgdG8gc2VsZWN0ZWQgaXRlbXMuIFlvdVxuICAgKiBjYW4gdXNlIHRoZSBbQ29udGVudEFzSXRlbXNdKENvbnRlbnRBc0l0ZW1zLm1kKSBtaXhpbiBmb3IgdGhhdCBwdXJwb3NlLlxuICAgKi9cbiAgY2xhc3MgU2VsZWN0aW9uSGlnaGxpZ2h0IGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICBpZiAodGhpcy5zaGFkb3dSb290KSB7XG4gICAgICAgIGxldCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgIHN0eWxlLmlubmVySFRNTCA9IGBcbiAgICAgICAgICA6OnNsb3R0ZWQoLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoaWdobGlnaHQ7XG4gICAgICAgICAgICBjb2xvcjogaGlnaGxpZ2h0dGV4dDtcbiAgICAgICAgICB9XG4gICAgICAgIGA7XG4gICAgICAgIHRoaXMuc2hhZG93Um9vdC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gU2VsZWN0aW9uSGlnaGxpZ2h0O1xufTtcbiIsIi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggU2VsZWN0aW9uSW5WaWV3LiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggc2Nyb2xscyBhIGNvbnRhaW5lciB0byBlbnN1cmUgdGhhdCBhIG5ld2x5LXNlbGVjdGVkIGl0ZW0gaXNcbiAgICogdmlzaWJsZSB0byB0aGUgdXNlci5cbiAgICpcbiAgICogV2hlbiB0aGUgc2VsZWN0ZWQgaXRlbSBpbiBhIGxpc3QtbGlrZSBjb21wb25lbnQgY2hhbmdlcywgaXQncyBlYXNpZXIgZm9yXG4gICAqIHRoZSB0byBjb25maXJtIHRoYXQgdGhlIHNlbGVjdGlvbiBoYXMgY2hhbmdlZCB0byBhbiBhcHByb3ByaWF0ZSBpdGVtIGlmIHRoZVxuICAgKiB1c2VyIGNhbiBhY3R1YWxseSBzZWUgdGhhdCBpdGVtLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGV4cGVjdHMgYSBgc2VsZWN0ZWRJdGVtYCBwcm9wZXJ0eSB0byBiZSBzZXQgd2hlbiB0aGUgc2VsZWN0aW9uXG4gICAqIGNoYW5nZXMuIFlvdSBjYW4gc3VwcGx5IHRoYXQgeW91cnNlbGYsIG9yIHVzZSB0aGVcbiAgICogW1NpbmdsZVNlbGVjdGlvbl0oU2luZ2xlU2VsZWN0aW9uLm1kKSBtaXhpbi5cbiAgICovXG4gIGNsYXNzIFNlbGVjdGlvbkluVmlldyBleHRlbmRzIGJhc2Uge1xuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2spIHsgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTsgfVxuICAgICAgbGV0IHNlbGVjdGVkSXRlbSA9IHRoaXMuc2VsZWN0ZWRJdGVtO1xuICAgICAgaWYgKHNlbGVjdGVkSXRlbSkge1xuICAgICAgICB0aGlzLnNjcm9sbEl0ZW1JbnRvVmlldyhzZWxlY3RlZEl0ZW0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGdldCBzZWxlY3RlZEl0ZW0oKSB7XG4gICAgICByZXR1cm4gc3VwZXIuc2VsZWN0ZWRJdGVtO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0ZWRJdGVtKGl0ZW0pIHtcbiAgICAgIGlmICgnc2VsZWN0ZWRJdGVtJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEl0ZW0gPSBpdGVtOyB9XG4gICAgICBpZiAoaXRlbSkge1xuICAgICAgICAvLyBLZWVwIHRoZSBzZWxlY3RlZCBpdGVtIGluIHZpZXcuXG4gICAgICAgIHRoaXMuc2Nyb2xsSXRlbUludG9WaWV3KGl0ZW0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNjcm9sbCB0aGUgZ2l2ZW4gZWxlbWVudCBjb21wbGV0ZWx5IGludG8gdmlldywgbWluaW1pemluZyB0aGUgZGVncmVlIG9mXG4gICAgICogc2Nyb2xsaW5nIHBlcmZvcm1lZC5cbiAgICAgKlxuICAgICAqIEJsaW5rIGhhcyBhIGBzY3JvbGxJbnRvVmlld0lmTmVlZGVkKClgIGZ1bmN0aW9uIHRoYXQgZG9lcyBzb21ldGhpbmdcbiAgICAgKiBzaW1pbGFyLCBidXQgdW5mb3J0dW5hdGVseSBpdCdzIG5vbi1zdGFuZGFyZCwgYW5kIGluIGFueSBldmVudCBvZnRlbiBlbmRzXG4gICAgICogdXAgc2Nyb2xsaW5nIG1vcmUgdGhhbiBpcyBhYnNvbHV0ZWx5IG5lY2Vzc2FyeS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGl0ZW0gLSB0aGUgaXRlbSB0byBzY3JvbGwgaW50byB2aWV3LlxuICAgICAqL1xuICAgIHNjcm9sbEl0ZW1JbnRvVmlldyhpdGVtKSB7XG4gICAgICBpZiAoc3VwZXIuc2Nyb2xsSXRlbUludG9WaWV3KSB7IHN1cGVyLnNjcm9sbEl0ZW1JbnRvVmlldygpOyB9XG4gICAgICAvLyBHZXQgdGhlIHJlbGF0aXZlIHBvc2l0aW9uIG9mIHRoZSBpdGVtIHdpdGggcmVzcGVjdCB0byB0aGUgdG9wIG9mIHRoZVxuICAgICAgLy8gbGlzdCdzIHNjcm9sbGFibGUgY2FudmFzLiBBbiBpdGVtIGF0IHRoZSB0b3Agb2YgdGhlIGxpc3Qgd2lsbCBoYXZlIGFcbiAgICAgIC8vIGVsZW1lbnRUb3Agb2YgMC5cblxuICAgICAgbGV0IHNjcm9sbFRhcmdldCA9IHRoaXMuc2Nyb2xsVGFyZ2V0O1xuICAgICAgbGV0IGVsZW1lbnRUb3AgPSBpdGVtLm9mZnNldFRvcCAtIHNjcm9sbFRhcmdldC5vZmZzZXRUb3AgLSBzY3JvbGxUYXJnZXQuY2xpZW50VG9wO1xuICAgICAgbGV0IGVsZW1lbnRCb3R0b20gPSBlbGVtZW50VG9wICsgaXRlbS5vZmZzZXRIZWlnaHQ7XG4gICAgICAvLyBEZXRlcm1pbmUgdGhlIGJvdHRvbSBvZiB0aGUgc2Nyb2xsYWJsZSBjYW52YXMuXG4gICAgICBsZXQgc2Nyb2xsQm90dG9tID0gc2Nyb2xsVGFyZ2V0LnNjcm9sbFRvcCArIHNjcm9sbFRhcmdldC5jbGllbnRIZWlnaHQ7XG4gICAgICBpZiAoZWxlbWVudEJvdHRvbSA+IHNjcm9sbEJvdHRvbSkge1xuICAgICAgICAvLyBTY3JvbGwgdXAgdW50aWwgaXRlbSBpcyBlbnRpcmVseSB2aXNpYmxlLlxuICAgICAgICBzY3JvbGxUYXJnZXQuc2Nyb2xsVG9wICs9IGVsZW1lbnRCb3R0b20gLSBzY3JvbGxCb3R0b207XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChlbGVtZW50VG9wIDwgc2Nyb2xsVGFyZ2V0LnNjcm9sbFRvcCkge1xuICAgICAgICAvLyBTY3JvbGwgZG93biB1bnRpbCBpdGVtIGlzIGVudGlyZWx5IHZpc2libGUuXG4gICAgICAgIHNjcm9sbFRhcmdldC5zY3JvbGxUb3AgPSBlbGVtZW50VG9wO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBlbGVtZW50IHRoYXQgc2hvdWxkIGJlIHNjcm9sbGVkIHRvIGJyaW5nIGFuIGl0ZW0gaW50byB2aWV3LlxuICAgICAqXG4gICAgICogVGhlIGRlZmF1bHQgdmFsdWUgb2YgdGhpcyBwcm9wZXJ0eSBpcyB0aGUgZWxlbWVudCBpdHNlbGYuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgZ2V0IHNjcm9sbFRhcmdldCgpIHtcbiAgICAgIC8vIFByZWZlciBiYXNlIHJlc3VsdC5cbiAgICAgIHJldHVybiAnc2Nyb2xsVGFyZ2V0JyBpbiBiYXNlLnByb3RvdHlwZSA/IHN1cGVyLnNjcm9sbFRhcmdldCA6IHRoaXM7XG4gICAgfVxuICAgIHNldCBzY3JvbGxUYXJnZXQoZWxlbWVudCkge1xuICAgICAgaWYgKCdzY3JvbGxUYXJnZXQnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNjcm9sbFRhcmdldCA9IGVsZW1lbnQ7IH1cbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBTZWxlY3Rpb25JblZpZXc7XG59O1xuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBTaGFkb3dFbGVtZW50UmVmZXJlbmNlcy4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHRvIGNyZWF0ZSByZWZlcmVuY2VzIHRvIGVsZW1lbnRzIGluIGEgY29tcG9uZW50J3MgU2hhZG93IERPTSBzdWJ0cmVlLlxuICAgKlxuICAgKiBUaGlzIGFkZHMgYSBtZW1iZXIgb24gdGhlIGNvbXBvbmVudCBjYWxsZWQgYHRoaXMuJGAgdGhhdCBjYW4gYmUgdXNlZCB0b1xuICAgKiByZWZlcmVuY2Ugc2hhZG93IGVsZW1lbnRzIHdpdGggSURzLiBFLmcuLCBpZiBjb21wb25lbnQncyBzaGFkb3cgY29udGFpbnMgYW5cbiAgICogZWxlbWVudCBgPGJ1dHRvbiBpZD1cImZvb1wiPmAsIHRoZW4gdGhpcyBtaXhpbiB3aWxsIGNyZWF0ZSBhIG1lbWJlclxuICAgKiBgdGhpcy4kLmZvb2AgdGhhdCBwb2ludHMgdG8gdGhhdCBidXR0b24uXG4gICAqXG4gICAqIFN1Y2ggcmVmZXJlbmNlcyBzaW1wbGlmeSBhIGNvbXBvbmVudCdzIGFjY2VzcyB0byBpdHMgb3duIGVsZW1lbnRzLiBJblxuICAgKiBleGNoYW5nZSwgdGhpcyBtaXhpbiB0cmFkZXMgb2ZmIGEgb25lLXRpbWUgY29zdCBvZiBxdWVyeWluZyBhbGwgZWxlbWVudHMgaW5cbiAgICogdGhlIHNoYWRvdyB0cmVlIGluc3RlYWQgb2YgcGF5aW5nIGFuIG9uZ29pbmcgY29zdCB0byBxdWVyeSBmb3IgYW4gZWxlbWVudFxuICAgKiBlYWNoIHRpbWUgdGhlIGNvbXBvbmVudCB3YW50cyB0byBpbnNwZWN0IG9yIG1hbmlwdWxhdGUgaXQuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyB0aGUgY29tcG9uZW50IHRvIGRlZmluZSBhIFNoYWRvdyBET00gc3VidHJlZS4gWW91IGNhblxuICAgKiBjcmVhdGUgdGhhdCB0cmVlIHlvdXJzZWxmLCBvciBtYWtlIHVzZSBvZiB0aGVcbiAgICogW1NoYWRvd1RlbXBsYXRlXShTaGFkb3dUZW1wbGF0ZS5tZCkgbWl4aW4uXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gaXMgaW5zcGlyZWQgYnkgUG9seW1lcidzIFthdXRvbWF0aWNcbiAgICogbm9kZSBmaW5kaW5nXShodHRwczovL3d3dy5wb2x5bWVyLXByb2plY3Qub3JnLzEuMC9kb2NzL2Rldmd1aWRlL2xvY2FsLWRvbS5odG1sI25vZGUtZmluZGluZylcbiAgICogZmVhdHVyZS5cbiAgICovXG4gIGNsYXNzIFNoYWRvd0VsZW1lbnRSZWZlcmVuY2VzIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICBpZiAodGhpcy5zaGFkb3dSb290KSB7XG4gICAgICAgIC8vIExvb2sgZm9yIGVsZW1lbnRzIGluIHRoZSBzaGFkb3cgc3VidHJlZSB0aGF0IGhhdmUgaWQgYXR0cmlidXRlcy5cbiAgICAgICAgLy8gQW4gYWx0ZXJuYXRpdmVseSBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1peGluIHdvdWxkIGJlIHRvIGp1c3QgZGVmaW5lXG4gICAgICAgIC8vIGEgdGhpcy4kIGdldHRlciB0aGF0IGxhemlseSBkb2VzIHRoaXMgc2VhcmNoIHRoZSBmaXJzdCB0aW1lIHNvbWVvbmVcbiAgICAgICAgLy8gdHJpZXMgdG8gYWNjZXNzIHRoaXMuJC4gVGhhdCBtaWdodCBpbnRyb2R1Y2Ugc29tZSBjb21wbGV4aXR5IOKAkyBpZiB0aGVcbiAgICAgICAgLy8gdGhlIHRyZWUgY2hhbmdlZCBhZnRlciBpdCB3YXMgZmlyc3QgcG9wdWxhdGVkLCB0aGUgcmVzdWx0IG9mXG4gICAgICAgIC8vIHNlYXJjaGluZyBmb3IgYSBub2RlIG1pZ2h0IGJlIHNvbWV3aGF0IHVucHJlZGljdGFibGUuXG4gICAgICAgIHRoaXMuJCA9IHt9O1xuICAgICAgICBsZXQgbm9kZXNXaXRoSWRzID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpZF0nKTtcbiAgICAgICAgW10uZm9yRWFjaC5jYWxsKG5vZGVzV2l0aElkcywgbm9kZSA9PiB7XG4gICAgICAgICAgbGV0IGlkID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICAgICAgdGhpcy4kW2lkXSA9IG5vZGU7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBjb2xsZWN0aW9uIG9mIHJlZmVyZW5jZXMgdG8gdGhlIGVsZW1lbnRzIHdpdGggSURzIGluIGEgY29tcG9uZW50J3NcbiAgICAgKiBTaGFkb3cgRE9NIHN1YnRyZWUuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqIEBtZW1iZXIgJFxuICAgICAqL1xuICB9XG5cbiAgcmV0dXJuIFNoYWRvd0VsZW1lbnRSZWZlcmVuY2VzO1xufTtcbiIsIi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggU2hhZG93VGVtcGxhdGUuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiBmb3Igc3RhbXBpbmcgYSB0ZW1wbGF0ZSBpbnRvIGEgU2hhZG93IERPTSBzdWJ0cmVlIHVwb24gY29tcG9uZW50XG4gICAqIGluc3RhbnRpYXRpb24uXG4gICAqXG4gICAqIFRvIHVzZSB0aGlzIG1peGluLCBkZWZpbmUgYSBgdGVtcGxhdGVgIHByb3BlcnR5IGFzIGEgc3RyaW5nIG9yIEhUTUxcbiAgICogYDx0ZW1wbGF0ZT5gIGVsZW1lbnQ6XG4gICAqXG4gICAqICAgICBjbGFzcyBNeUVsZW1lbnQgZXh0ZW5kcyBTaGFkb3dUZW1wbGF0ZShIVE1MRWxlbWVudCkge1xuICAgKiAgICAgICBnZXQgdGVtcGxhdGUoKSB7XG4gICAqICAgICAgICAgcmV0dXJuIGBIZWxsbywgPGVtPndvcmxkPC9lbT4uYDtcbiAgICogICAgICAgfVxuICAgKiAgICAgfVxuICAgKlxuICAgKiBXaGVuIHlvdXIgY29tcG9uZW50IGNsYXNzIGlzIGluc3RhbnRpYXRlZCwgYSBzaGFkb3cgcm9vdCB3aWxsIGJlIGNyZWF0ZWQgb25cbiAgICogdGhlIGluc3RhbmNlLCBhbmQgdGhlIGNvbnRlbnRzIG9mIHRoZSB0ZW1wbGF0ZSB3aWxsIGJlIGNsb25lZCBpbnRvIHRoZVxuICAgKiBzaGFkb3cgcm9vdC4gSWYgeW91ciBjb21wb25lbnQgZG9lcyBub3QgZGVmaW5lIGEgYHRlbXBsYXRlYCBwcm9wZXJ0eSwgdGhpc1xuICAgKiBtaXhpbiBoYXMgbm8gZWZmZWN0LlxuICAgKlxuICAgKiBGb3IgdGhlIHRpbWUgYmVpbmcsIHRoaXMgZXh0ZW5zaW9uIHJldGFpbnMgc3VwcG9ydCBmb3IgU2hhZG93IERPTSB2MC4gVGhhdFxuICAgKiB3aWxsIGV2ZW50dWFsbHkgYmUgZGVwcmVjYXRlZCBhcyBicm93c2VycyAoYW5kIHRoZSBTaGFkb3cgRE9NIHBvbHlmaWxsKVxuICAgKiBpbXBsZW1lbnQgU2hhZG93IERPTSB2MS5cbiAgICovXG4gIGNsYXNzIFNoYWRvd1RlbXBsYXRlIGV4dGVuZHMgYmFzZSB7XG5cbiAgICAvKlxuICAgICAqIElmIHRoZSBjb21wb25lbnQgZGVmaW5lcyBhIHRlbXBsYXRlLCBhIHNoYWRvdyByb290IHdpbGwgYmUgY3JlYXRlZCBvbiB0aGVcbiAgICAgKiBjb21wb25lbnQgaW5zdGFuY2UsIGFuZCB0aGUgdGVtcGxhdGUgc3RhbXBlZCBpbnRvIGl0LlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIGxldCB0ZW1wbGF0ZSA9IHRoaXMudGVtcGxhdGU7XG4gICAgICAvLyBUT0RPOiBTYXZlIHRoZSBwcm9jZXNzZWQgdGVtcGxhdGUgd2l0aCB0aGUgY29tcG9uZW50J3MgY2xhc3MgcHJvdG90eXBlXG4gICAgICAvLyBzbyBpdCBkb2Vzbid0IG5lZWQgdG8gYmUgcHJvY2Vzc2VkIHdpdGggZXZlcnkgaW5zdGFudGlhdGlvbi5cbiAgICAgIGlmICh0ZW1wbGF0ZSkge1xuXG4gICAgICAgIGlmICh0eXBlb2YgdGVtcGxhdGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgLy8gVXBncmFkZSBwbGFpbiBzdHJpbmcgdG8gcmVhbCB0ZW1wbGF0ZS5cbiAgICAgICAgICB0ZW1wbGF0ZSA9IGNyZWF0ZVRlbXBsYXRlV2l0aElubmVySFRNTCh0ZW1wbGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAod2luZG93LlNoYWRvd0RPTVBvbHlmaWxsKSB7XG4gICAgICAgICAgc2hpbVRlbXBsYXRlU3R5bGVzKHRlbXBsYXRlLCB0aGlzLmxvY2FsTmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcm9vdCA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICAgICAgICBsZXQgY2xvbmUgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRlbXBsYXRlLmNvbnRlbnQsIHRydWUpO1xuICAgICAgICByb290LmFwcGVuZENoaWxkKGNsb25lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBTaGFkb3dUZW1wbGF0ZTtcbn07XG5cblxuLy8gQ29udmVydCBhIHBsYWluIHN0cmluZyBvZiBIVE1MIGludG8gYSByZWFsIHRlbXBsYXRlIGVsZW1lbnQuXG5mdW5jdGlvbiBjcmVhdGVUZW1wbGF0ZVdpdGhJbm5lckhUTUwoaW5uZXJIVE1MKSB7XG4gIGxldCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gIC8vIFJFVklFVzogSXMgdGhlcmUgYW4gZWFzaWVyIHdheSB0byBkbyB0aGlzP1xuICAvLyBXZSdkIGxpa2UgdG8ganVzdCBzZXQgaW5uZXJIVE1MIG9uIHRoZSB0ZW1wbGF0ZSBjb250ZW50LCBidXQgc2luY2UgaXQnc1xuICAvLyBhIERvY3VtZW50RnJhZ21lbnQsIHRoYXQgZG9lc24ndCB3b3JrLlxuICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gIHdoaWxlIChkaXYuY2hpbGROb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgdGVtcGxhdGUuY29udGVudC5hcHBlbmRDaGlsZChkaXYuY2hpbGROb2Rlc1swXSk7XG4gIH1cbiAgcmV0dXJuIHRlbXBsYXRlO1xufVxuXG4vLyBJbnZva2UgYmFzaWMgc3R5bGUgc2hpbW1pbmcgd2l0aCBTaGFkb3dDU1MuXG5mdW5jdGlvbiBzaGltVGVtcGxhdGVTdHlsZXModGVtcGxhdGUsIHRhZykge1xuICB3aW5kb3cuV2ViQ29tcG9uZW50cy5TaGFkb3dDU1Muc2hpbVN0eWxpbmcodGVtcGxhdGUuY29udGVudCwgdGFnKTtcbn1cbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi9jcmVhdGVTeW1ib2wnO1xuaW1wb3J0IG1pY3JvdGFzayBmcm9tICcuL21pY3JvdGFzayc7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IGNhblNlbGVjdE5leHRTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2NhblNlbGVjdE5leHQnKTtcbmNvbnN0IGNhblNlbGVjdFByZXZpb3VzU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdjYW5TZWxlY3RQcmV2aW91cycpO1xuY29uc3Qgc2VsZWN0ZWRJdGVtU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdzZWxlY3RlZEl0ZW0nKTtcbmNvbnN0IHNlbGVjdGlvblJlcXVpcmVkU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdzZWxlY3Rpb25SZXF1aXJlZCcpO1xuY29uc3Qgc2VsZWN0aW9uV3JhcHNTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3NlbGVjdGlvbldyYXBzJyk7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBTaW5nbGVTZWxlY3Rpb24uICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBtYW5hZ2VzIHNpbmdsZS1zZWxlY3Rpb24gc2VtYW50aWNzIGZvciBpdGVtcyBpbiBhIGxpc3QuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyBhIGNvbXBvbmVudCB0byBwcm92aWRlIGFuIGBpdGVtc2AgYXJyYXkgb2YgYWxsIGVsZW1lbnRzXG4gICAqIGluIHRoZSBsaXN0LiBBIHN0YW5kYXJkIHdheSB0byBkbyB0aGF0IHdpdGggaXMgdGhlXG4gICAqIFtDb250ZW50QXNJdGVtc10oQ29udGVudEFzSXRlbXMubWQpIG1peGluLCB3aGljaCB0YWtlcyBhIGNvbXBvbmVudCdzXG4gICAqIGNvbnRlbnQgKHR5cGljYWxseSBpdHMgZGlzdHJpYnV0ZWQgY2hpbGRyZW4pIGFzIHRoZSBzZXQgb2YgbGlzdCBpdGVtczsgc2VlXG4gICAqIHRoYXQgbWl4aW4gZm9yIGRldGFpbHMuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gdHJhY2tzIGEgc2luZ2xlIHNlbGVjdGVkIGl0ZW0gaW4gdGhlIGxpc3QsIGFuZCBwcm92aWRlcyBtZWFucyB0b1xuICAgKiBnZXQgYW5kIHNldCB0aGF0IHN0YXRlIGJ5IGl0ZW0gcG9zaXRpb24gKGBzZWxlY3RlZEluZGV4YCkgb3IgaXRlbSBpZGVudGl0eVxuICAgKiAoYHNlbGVjdGVkSXRlbWApLiBUaGUgc2VsZWN0aW9uIGNhbiBiZSBtb3ZlZCBpbiB0aGUgbGlzdCB2aWEgdGhlIG1ldGhvZHNcbiAgICogYHNlbGVjdEZpcnN0YCwgYHNlbGVjdExhc3RgLCBgc2VsZWN0TmV4dGAsIGFuZCBgc2VsZWN0UHJldmlvdXNgLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGRvZXMgbm90IHByb2R1Y2UgYW55IHVzZXItdmlzaWJsZSBlZmZlY3RzIHRvIHJlcHJlc2VudFxuICAgKiBzZWxlY3Rpb24uIE90aGVyIG1peGlucywgc3VjaCBhc1xuICAgKiBbU2VsZWN0aW9uQXJpYUFjdGl2ZV0oU2VsZWN0aW9uQXJpYUFjdGl2ZS5tZCksXG4gICAqIFtTZWxlY3Rpb25IaWdobGlnaHRdKFNlbGVjdGlvbkhpZ2hsaWdodC5tZCkgYW5kXG4gICAqIFtTZWxlY3Rpb25JblZpZXddKFNlbGVjdGlvbkluVmlldy5tZCksIG1vZGlmeSB0aGUgc2VsZWN0ZWQgaXRlbSBpbiBjb21tb25cbiAgICogd2F5cyB0byBsZXQgdGhlIHVzZXIga25vdyBhIGdpdmVuIGl0ZW0gaXMgc2VsZWN0ZWQgb3Igbm90IHNlbGVjdGVkLlxuICAgKi9cbiAgY2xhc3MgU2luZ2xlU2VsZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICAvLyBTZXQgZGVmYXVsdHMuXG4gICAgICBpZiAodHlwZW9mIHRoaXMuc2VsZWN0aW9uUmVxdWlyZWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uUmVxdWlyZWQgPSB0aGlzLmRlZmF1bHRzLnNlbGVjdGlvblJlcXVpcmVkO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiB0aGlzLnNlbGVjdGlvbldyYXBzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbldyYXBzID0gdGhpcy5kZWZhdWx0cy5zZWxlY3Rpb25XcmFwcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBcHBseSB0aGUgaW5kaWNhdGUgc2VsZWN0aW9uIHN0YXRlIHRvIHRoZSBpdGVtLlxuICAgICAqXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLiBVc2VyLXZpc2libGVcbiAgICAgKiBlZmZlY3RzIHdpbGwgdHlwaWNhbGx5IGJlIGhhbmRsZWQgYnkgb3RoZXIgbWl4aW5zLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaXRlbSAtIHRoZSBpdGVtIGJlaW5nIHNlbGVjdGVkL2Rlc2VsZWN0ZWRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNlbGVjdGVkIC0gdHJ1ZSBpZiB0aGUgaXRlbSBpcyBzZWxlY3RlZCwgZmFsc2UgaWYgbm90XG4gICAgICovXG4gICAgYXBwbHlTZWxlY3Rpb24oaXRlbSwgc2VsZWN0ZWQpIHtcbiAgICAgIGlmIChzdXBlci5hcHBseVNlbGVjdGlvbikgeyBzdXBlci5hcHBseVNlbGVjdGlvbihpdGVtLCBzZWxlY3RlZCk7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHRoZSBzZWxlY3Rpb24gY2FuIGJlIG1vdmVkIHRvIHRoZSBuZXh0IGl0ZW0sIGZhbHNlIGlmIG5vdCAodGhlXG4gICAgICogc2VsZWN0ZWQgaXRlbSBpcyB0aGUgbGFzdCBpdGVtIGluIHRoZSBsaXN0KS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIGdldCBjYW5TZWxlY3ROZXh0KCkge1xuICAgICAgcmV0dXJuIHRoaXNbY2FuU2VsZWN0TmV4dFN5bWJvbF07XG4gICAgfVxuICAgIHNldCBjYW5TZWxlY3ROZXh0KGNhblNlbGVjdE5leHQpIHtcbiAgICAgIHRoaXNbY2FuU2VsZWN0TmV4dFN5bWJvbF0gPSBjYW5TZWxlY3ROZXh0O1xuICAgICAgaWYgKCdjYW5TZWxlY3ROZXh0JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5jYW5TZWxlY3ROZXh0ID0gY2FuU2VsZWN0TmV4dDsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRydWUgaWYgdGhlIHNlbGVjdGlvbiBjYW4gYmUgbW92ZWQgdG8gdGhlIHByZXZpb3VzIGl0ZW0sIGZhbHNlIGlmIG5vdFxuICAgICAqICh0aGUgc2VsZWN0ZWQgaXRlbSBpcyB0aGUgZmlyc3Qgb25lIGluIHRoZSBsaXN0KS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIGdldCBjYW5TZWxlY3RQcmV2aW91cygpIHtcbiAgICAgIHJldHVybiB0aGlzW2NhblNlbGVjdFByZXZpb3VzU3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IGNhblNlbGVjdFByZXZpb3VzKGNhblNlbGVjdFByZXZpb3VzKSB7XG4gICAgICB0aGlzW2NhblNlbGVjdFByZXZpb3VzU3ltYm9sXSA9IGNhblNlbGVjdFByZXZpb3VzO1xuICAgICAgaWYgKCdjYW5TZWxlY3RQcmV2aW91cycgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuY2FuU2VsZWN0UHJldmlvdXMgPSBjYW5TZWxlY3RQcmV2aW91czsgfVxuICAgIH1cblxuICAgIGdldCBkZWZhdWx0cygpIHtcbiAgICAgIGxldCBkZWZhdWx0cyA9IHN1cGVyLmRlZmF1bHRzIHx8IHt9O1xuICAgICAgZGVmYXVsdHMuc2VsZWN0aW9uUmVxdWlyZWQgPSBmYWxzZTtcbiAgICAgIGRlZmF1bHRzLnNlbGVjdGlvbldyYXBzID0gZmFsc2U7XG4gICAgICByZXR1cm4gZGVmYXVsdHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIGEgbmV3IGl0ZW0gYmVpbmcgYWRkZWQgdG8gdGhlIGxpc3QuXG4gICAgICpcbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBzaW1wbHkgc2V0cyB0aGUgaXRlbSdzXG4gICAgICogc2VsZWN0aW9uIHN0YXRlIHRvIGZhbHNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaXRlbSAtIHRoZSBpdGVtIGJlaW5nIGFkZGVkXG4gICAgICovXG4gICAgaXRlbUFkZGVkKGl0ZW0pIHtcbiAgICAgIGlmIChzdXBlci5pdGVtQWRkZWQpIHsgc3VwZXIuaXRlbUFkZGVkKGl0ZW0pOyB9XG4gICAgICB0aGlzLmFwcGx5U2VsZWN0aW9uKGl0ZW0sIGl0ZW0gPT09IHRoaXMuc2VsZWN0ZWRJdGVtKTtcbiAgICB9XG5cbiAgICBpdGVtc0NoYW5nZWQoKSB7XG4gICAgICBpZiAoc3VwZXIuaXRlbXNDaGFuZ2VkKSB7IHN1cGVyLml0ZW1zQ2hhbmdlZCgpOyB9XG5cbiAgICAgIGlmICh0aGlzLnNlbGVjdGlvblJlcXVpcmVkKSB7XG4gICAgICAgIC8vIEVuc3VyZSBzZWxlY3Rpb24sIGJ1dCBkbyB0aGlzIGluIHRoZSBuZXh0IHRpY2sgdG8gZ2l2ZSBvdGhlciBtaXhpbnMgYVxuICAgICAgICAvLyBjaGFuY2UgdG8gZG8gdGhlaXIgb3duIGl0ZW1zQ2hhbmdlZCB3b3JrLlxuICAgICAgICBtaWNyb3Rhc2soKCkgPT4ge1xuICAgICAgICAgIGVuc3VyZVNlbGVjdGlvbih0aGlzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjaGFuZ2UgaW4gaXRlbXMgbWF5IGhhdmUgYWZmZWN0ZWQgd2hpY2ggbmF2aWdhdGlvbnMgYXJlIHBvc3NpYmxlLlxuICAgICAgdXBkYXRlUG9zc2libGVOYXZpZ2F0aW9ucyh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW5kZXggb2YgdGhlIGl0ZW0gd2hpY2ggaXMgY3VycmVudGx5IHNlbGVjdGVkLlxuICAgICAqXG4gICAgICogSWYgYHNlbGVjdGlvbldyYXBzYCBpcyBmYWxzZSwgdGhlIGluZGV4IGlzIC0xIGlmIHRoZXJlIGlzIG5vIHNlbGVjdGlvbi5cbiAgICAgKiBJbiB0aGF0IGNhc2UsIHNldHRpbmcgdGhlIGluZGV4IHRvIC0xIHdpbGwgZGVzZWxlY3QgYW55XG4gICAgICogY3VycmVudGx5LXNlbGVjdGVkIGl0ZW0uXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldCBzZWxlY3RlZEluZGV4KCkge1xuICAgICAgbGV0IHNlbGVjdGVkSXRlbSA9IHRoaXMuc2VsZWN0ZWRJdGVtO1xuXG4gICAgICAvLyBUT0RPOiBJZiBzZWxlY3Rpb24gd2Fzbid0IGZvdW5kLCBtb3N0IGxpa2VseSBjYXVzZSBpcyB0aGF0IHRoZSBET00gd2FzXG4gICAgICAvLyBtYW5pcHVsYXRlZCBmcm9tIHVuZGVybmVhdGggdXMuIE9uY2Ugd2UgdHJhY2sgY29udGVudCBjaGFuZ2VzLCB0dXJuXG4gICAgICAvLyB0aGlzIGludG8gYSB3YXJuaW5nLlxuICAgICAgLy8gVE9ETzogTWVtb2l6ZVxuICAgICAgcmV0dXJuIHNlbGVjdGVkSXRlbSA/XG4gICAgICAgIHRoaXMuaXRlbXMuaW5kZXhPZihzZWxlY3RlZEl0ZW0pIDpcbiAgICAgICAgLTE7XG4gICAgfVxuICAgIHNldCBzZWxlY3RlZEluZGV4KGluZGV4KSB7XG4gICAgICAvLyBUT0RPOiBQdWxsIHNldHRpbmcgb2Ygc2VsZWN0ZWRJdGVtIGFib3ZlIHN1cGVyKCkgY2FsbC4gKi9cbiAgICAgIGlmICgnc2VsZWN0ZWRJbmRleCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJbmRleCA9IGluZGV4OyB9XG4gICAgICBsZXQgaXRlbXMgPSB0aGlzLml0ZW1zO1xuICAgICAgbGV0IGl0ZW07XG4gICAgICBpZiAoaW5kZXggPCAwIHx8IGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpdGVtID0gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGl0ZW0gPSBpdGVtc1tpbmRleF07XG4gICAgICB9XG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IGl0ZW07XG5cbiAgICAgIGxldCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnc2VsZWN0ZWQtaW5kZXgtY2hhbmdlZCcsIHtcbiAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgc2VsZWN0ZWRJbmRleDogaW5kZXgsXG4gICAgICAgICAgdmFsdWU6IGluZGV4IC8vIGZvciBQb2x5bWVyIGJpbmRpbmdcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgaXRlbSwgb3IgbnVsbCBpZiB0aGVyZSBpcyBubyBzZWxlY3Rpb24uXG4gICAgICpcbiAgICAgKiBTZXR0aW5nIHRoaXMgcHJvcGVydHkgdG8gbnVsbCBkZXNlbGVjdHMgYW55IGN1cnJlbnRseS1zZWxlY3RlZCBpdGVtLlxuICAgICAqXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0ZWRJdGVtKCkge1xuICAgICAgcmV0dXJuIHRoaXNbc2VsZWN0ZWRJdGVtU3ltYm9sXSB8fCBudWxsO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0ZWRJdGVtKGl0ZW0pIHtcbiAgICAgIGxldCBwcmV2aW91c0l0ZW0gPSB0aGlzW3NlbGVjdGVkSXRlbVN5bWJvbF07XG4gICAgICAvLyBUT0RPOiBDb25maXJtIGl0ZW0gaXMgYWN0dWFsbHkgaW4gdGhlIGxpc3QgYmVmb3JlIHNlbGVjdGluZy5cbiAgICAgIHRoaXNbc2VsZWN0ZWRJdGVtU3ltYm9sXSA9IGl0ZW07XG5cbiAgICAgIGlmICgnc2VsZWN0ZWRJdGVtJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEl0ZW0gPSBpdGVtOyB9XG4gICAgICBpZiAocHJldmlvdXNJdGVtKSB7XG4gICAgICAgIGlmIChpdGVtID09PSBwcmV2aW91c0l0ZW0pIHtcbiAgICAgICAgICAvLyBUaGUgaW5kaWNhdGVkIGl0ZW0gaXMgYWxyZWFkeSB0aGUgc2VsZWN0ZWQgaXRlbS5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVtb3ZlIHByZXZpb3VzIHNlbGVjdGlvbi5cbiAgICAgICAgdGhpcy5hcHBseVNlbGVjdGlvbihwcmV2aW91c0l0ZW0sIGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgdGhpcy5hcHBseVNlbGVjdGlvbihpdGVtLCB0cnVlKTtcbiAgICAgIH1cblxuICAgICAgLy8gVE9ETzogUmF0aW9uYWxpemUgd2l0aCBzZWxlY3RlZEluZGV4IHNvIHdlJ3JlIG5vdCByZWNhbGN1bGF0aW5nIGl0ZW1cbiAgICAgIC8vIG9yIGluZGV4IGluIGVhY2ggc2V0dGVyLlxuICAgICAgdXBkYXRlUG9zc2libGVOYXZpZ2F0aW9ucyh0aGlzKTtcblxuICAgICAgbGV0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdzZWxlY3RlZC1pdGVtLWNoYW5nZWQnLCB7XG4gICAgICAgIGRldGFpbDoge1xuICAgICAgICAgIHNlbGVjdGVkSXRlbTogaXRlbSxcbiAgICAgICAgICBwcmV2aW91c0l0ZW06IHByZXZpb3VzSXRlbSxcbiAgICAgICAgICB2YWx1ZTogaXRlbSAvLyBmb3IgUG9seW1lciBiaW5kaW5nXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgdGhlIGZpcnN0IGl0ZW0gaW4gdGhlIGxpc3QuXG4gICAgICovXG4gICAgc2VsZWN0Rmlyc3QoKSB7XG4gICAgICBpZiAoc3VwZXIuc2VsZWN0Rmlyc3QpIHsgc3VwZXIuc2VsZWN0Rmlyc3QoKTsgfVxuICAgICAgcmV0dXJuIHNlbGVjdEluZGV4KHRoaXMsIDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRydWUgaWYgdGhlIGxpc3Qgc2hvdWxkIGFsd2F5cyBoYXZlIGEgc2VsZWN0aW9uIChpZiBpdCBoYXMgaXRlbXMpLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0aW9uUmVxdWlyZWQoKSB7XG4gICAgICByZXR1cm4gdGhpc1tzZWxlY3Rpb25SZXF1aXJlZFN5bWJvbF07XG4gICAgfVxuICAgIHNldCBzZWxlY3Rpb25SZXF1aXJlZChzZWxlY3Rpb25SZXF1aXJlZCkge1xuICAgICAgdGhpc1tzZWxlY3Rpb25SZXF1aXJlZFN5bWJvbF0gPSBzZWxlY3Rpb25SZXF1aXJlZDtcbiAgICAgIGlmICgnc2VsZWN0aW9uUmVxdWlyZWQnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGlvblJlcXVpcmVkID0gc2VsZWN0aW9uUmVxdWlyZWQ7IH1cbiAgICAgIGlmIChzZWxlY3Rpb25SZXF1aXJlZCkge1xuICAgICAgICBlbnN1cmVTZWxlY3Rpb24odGhpcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IHRoZSBsYXN0IGl0ZW0gaW4gdGhlIGxpc3QuXG4gICAgICovXG4gICAgc2VsZWN0TGFzdCgpIHtcbiAgICAgIGlmIChzdXBlci5zZWxlY3RMYXN0KSB7IHN1cGVyLnNlbGVjdExhc3QoKTsgfVxuICAgICAgcmV0dXJuIHNlbGVjdEluZGV4KHRoaXMsIHRoaXMuaXRlbXMubGVuZ3RoIC0gMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IHRoZSBuZXh0IGl0ZW0gaW4gdGhlIGxpc3QuXG4gICAgICovXG4gICAgc2VsZWN0TmV4dCgpIHtcbiAgICAgIGlmIChzdXBlci5zZWxlY3ROZXh0KSB7IHN1cGVyLnNlbGVjdE5leHQoKTsgfVxuICAgICAgcmV0dXJuIHNlbGVjdEluZGV4KHRoaXMsIHRoaXMuc2VsZWN0ZWRJbmRleCArIDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCB0aGUgcHJldmlvdXMgaXRlbSBpbiB0aGUgbGlzdC5cbiAgICAgKlxuICAgICAqIElmIHRoZSBsaXN0IGhhcyBubyBzZWxlY3Rpb24sIHRoZSBsYXN0IGl0ZW0gd2lsbCBiZSBzZWxlY3RlZC5cbiAgICAgKi9cbiAgICBzZWxlY3RQcmV2aW91cygpIHtcbiAgICAgIGlmIChzdXBlci5zZWxlY3RQcmV2aW91cykgeyBzdXBlci5zZWxlY3RQcmV2aW91cygpOyB9XG4gICAgICBsZXQgbmV3SW5kZXggPSB0aGlzLnNlbGVjdGVkSW5kZXggPCAwID9cbiAgICAgICAgdGhpcy5pdGVtcy5sZW5ndGggLSAxIDogICAgIC8vIE5vIHNlbGVjdGlvbiB5ZXQ7IHNlbGVjdCBsYXN0IGl0ZW0uXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCAtIDE7XG4gICAgICByZXR1cm4gc2VsZWN0SW5kZXgodGhpcywgbmV3SW5kZXgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRydWUgaWYgc2VsZWN0aW9uIG5hdmlnYXRpb25zIHdyYXAgZnJvbSBsYXN0IHRvIGZpcnN0LCBhbmQgdmljZSB2ZXJzYS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGlvbldyYXBzKCkge1xuICAgICAgcmV0dXJuIHRoaXNbc2VsZWN0aW9uV3JhcHNTeW1ib2xdO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0aW9uV3JhcHModmFsdWUpIHtcbiAgICAgIHRoaXNbc2VsZWN0aW9uV3JhcHNTeW1ib2xdID0gU3RyaW5nKHZhbHVlKSA9PT0gJ3RydWUnO1xuICAgICAgaWYgKCdzZWxlY3Rpb25XcmFwcycgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0aW9uV3JhcHMgPSB2YWx1ZTsgfVxuICAgICAgdXBkYXRlUG9zc2libGVOYXZpZ2F0aW9ucyh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaXJlcyB3aGVuIHRoZSBzZWxlY3RlZEl0ZW0gcHJvcGVydHkgY2hhbmdlcy5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBTaW5nbGVTZWxlY3Rpb25cbiAgICAgKiBAZXZlbnQgc2VsZWN0ZWQtaXRlbS1jaGFuZ2VkXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZGV0YWlsLnNlbGVjdGVkSXRlbSBUaGUgbmV3IHNlbGVjdGVkIGl0ZW0uXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZGV0YWlsLnByZXZpb3VzSXRlbSBUaGUgcHJldmlvdXNseSBzZWxlY3RlZCBpdGVtLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogRmlyZXMgd2hlbiB0aGUgc2VsZWN0ZWRJbmRleCBwcm9wZXJ0eSBjaGFuZ2VzLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIFNpbmdsZVNlbGVjdGlvblxuICAgICAqIEBldmVudCBzZWxlY3RlZC1pbmRleC1jaGFuZ2VkXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGRldGFpbC5zZWxlY3RlZEluZGV4IFRoZSBuZXcgc2VsZWN0ZWQgaW5kZXguXG4gICAgICovXG5cbiAgfVxuXG4gIHJldHVybiBTaW5nbGVTZWxlY3Rpb247XG59O1xuXG5cbi8vIElmIG5vIGl0ZW0gaXMgc2VsZWN0ZWQsIHNlbGVjdCBhIGRlZmF1bHQgaXRlbS5cbmZ1bmN0aW9uIGVuc3VyZVNlbGVjdGlvbihlbGVtZW50KSB7XG4gIGxldCBpbmRleCA9IGVsZW1lbnQuc2VsZWN0ZWRJbmRleDtcbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIC8vIFNlbGVjdGVkIGl0ZW0gaXMgbm8gbG9uZ2VyIGluIHRoZSBjdXJyZW50IHNldCBvZiBpdGVtcy5cbiAgICBpZiAoZWxlbWVudC5pdGVtcyAmJiBlbGVtZW50Lml0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIFNlbGVjdCB0aGUgZmlyc3QgaXRlbS5cbiAgICAgIC8vIFRPRE86IElmIHRoZSBwcmV2aW91c2x5LXNlbGVjdGVkIGl0ZW0gaGFzIGJlZW4gZGVsZXRlZCwgdHJ5IHRvIHNlbGVjdFxuICAgICAgLy8gYW4gaXRlbSBhZGphY2VudCB0byB0aGUgcG9zaXRpb24gaXQgaGVsZC5cbiAgICAgIGVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE5vIGl0ZW1zIGZvciB1cyB0byBzZWxlY3QsIGJ1dCB3ZSBjYW4gYXQgbGVhc3Qgc2lnbmFsIHRoYXQgdGhlcmUncyBub1xuICAgICAgLy8gbG9uZ2VyIGEgc2VsZWN0aW9uLlxuICAgICAgZWxlbWVudC5zZWxlY3RlZEl0ZW0gPSBudWxsO1xuICAgIH1cbiAgfVxufVxuXG4vLyBFbnN1cmUgdGhlIGdpdmVuIGluZGV4IGlzIHdpdGhpbiBib3VuZHMsIGFuZCBzZWxlY3QgaXQgaWYgaXQncyBub3QgYWxyZWFkeVxuLy8gc2VsZWN0ZWQuXG5mdW5jdGlvbiBzZWxlY3RJbmRleChlbGVtZW50LCBpbmRleCkge1xuICBsZXQgY291bnQgPSBlbGVtZW50Lml0ZW1zLmxlbmd0aDtcbiAgbGV0IGJvdW5kZWRJbmRleDtcbiAgaWYgKGVsZW1lbnQuc2VsZWN0aW9uV3JhcHMpIHtcbiAgICAvLyBKYXZhU2NyaXB0IG1vZCBkb2Vzbid0IGhhbmRsZSBuZWdhdGl2ZSBudW1iZXJzIHRoZSB3YXkgd2Ugd2FudCB0byB3cmFwLlxuICAgIC8vIFNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xODYxODI1MC83NjQ3MlxuICAgIGJvdW5kZWRJbmRleCA9ICgoaW5kZXggJSBjb3VudCkgKyBjb3VudCkgJSBjb3VudDtcbiAgfSBlbHNlIHtcbiAgICAvLyBLZWVwIGluZGV4IHdpdGhpbiBib3VuZHMgb2YgYXJyYXkuXG4gICAgYm91bmRlZEluZGV4ID0gTWF0aC5tYXgoTWF0aC5taW4oaW5kZXgsIGNvdW50IC0gMSksIDApO1xuICB9XG4gIGxldCBwcmV2aW91c0luZGV4ID0gZWxlbWVudC5zZWxlY3RlZEluZGV4O1xuICBpZiAocHJldmlvdXNJbmRleCAhPT0gYm91bmRlZEluZGV4KSB7XG4gICAgZWxlbWVudC5zZWxlY3RlZEluZGV4ID0gYm91bmRlZEluZGV4O1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG4vLyBGb2xsb3dpbmcgYSBjaGFuZ2UgaW4gc2VsZWN0aW9uLCByZXBvcnQgd2hldGhlciBpdCdzIG5vdyBwb3NzaWJsZSB0b1xuLy8gZ28gbmV4dC9wcmV2aW91cyBmcm9tIHRoZSBnaXZlbiBpbmRleC5cbmZ1bmN0aW9uIHVwZGF0ZVBvc3NpYmxlTmF2aWdhdGlvbnMoZWxlbWVudCkge1xuICBsZXQgY2FuU2VsZWN0TmV4dDtcbiAgbGV0IGNhblNlbGVjdFByZXZpb3VzO1xuICBsZXQgaXRlbXMgPSBlbGVtZW50Lml0ZW1zO1xuICBpZiAoaXRlbXMgPT0gbnVsbCB8fCBpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAvLyBObyBpdGVtcyB0byBzZWxlY3QuXG4gICAgY2FuU2VsZWN0TmV4dCA9IGZhbHNlO1xuICAgIGNhblNlbGVjdFByZXZpb3VzID0gZmFsc2U7XG4gIH0gaWYgKGVsZW1lbnQuc2VsZWN0aW9uV3JhcHMpIHtcbiAgICAvLyBTaW5jZSB0aGVyZSBhcmUgaXRlbXMsIGNhbiBhbHdheXMgZ28gbmV4dC9wcmV2aW91cy5cbiAgICBjYW5TZWxlY3ROZXh0ID0gdHJ1ZTtcbiAgICBjYW5TZWxlY3RQcmV2aW91cyA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgbGV0IGluZGV4ID0gZWxlbWVudC5zZWxlY3RlZEluZGV4O1xuICAgIGlmIChpbmRleCA8IDAgJiYgaXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgLy8gU3BlY2lhbCBjYXNlLiBJZiB0aGVyZSBhcmUgaXRlbXMgYnV0IG5vIHNlbGVjdGlvbiwgZGVjbGFyZSB0aGF0IGl0J3NcbiAgICAgIC8vIGFsd2F5cyBwb3NzaWJsZSB0byBnbyBuZXh0L3ByZXZpb3VzIHRvIGNyZWF0ZSBhIHNlbGVjdGlvbi5cbiAgICAgIGNhblNlbGVjdE5leHQgPSB0cnVlO1xuICAgICAgY2FuU2VsZWN0UHJldmlvdXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBOb3JtYWwgY2FzZTogd2UgaGF2ZSBhbiBpbmRleCBpbiBhIGxpc3QgdGhhdCBoYXMgaXRlbXMuXG4gICAgICBjYW5TZWxlY3RQcmV2aW91cyA9IChpbmRleCA+IDApO1xuICAgICAgY2FuU2VsZWN0TmV4dCA9IChpbmRleCA8IGl0ZW1zLmxlbmd0aCAtIDEpO1xuICAgIH1cbiAgfVxuICBlbGVtZW50LmNhblNlbGVjdE5leHQgPSBjYW5TZWxlY3ROZXh0O1xuICBlbGVtZW50LmNhblNlbGVjdFByZXZpb3VzID0gY2FuU2VsZWN0UHJldmlvdXM7XG59XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4vY3JlYXRlU3ltYm9sJztcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3QgZGVsdGFYU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdkZWx0YVgnKTtcbmNvbnN0IGRlbHRhWVN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnZGVsdGFZJyk7XG5jb25zdCBtdWx0aVRvdWNoU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdtdWx0aVRvdWNoJyk7XG5jb25zdCBwcmV2aW91c1hTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3ByZXZpb3VzWCcpO1xuY29uc3QgcHJldmlvdXNZU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdwcmV2aW91c1knKTtcbmNvbnN0IHN0YXJ0WFN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnc3RhcnRYJyk7XG5jb25zdCB0cmF2ZWxGcmFjdGlvblN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgndHJhdmVsRnJhY3Rpb24nKTtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFN3aXBlRGlyZWN0aW9uLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggbWFwcyB0b3VjaCBnZXN0dXJlcyAoc3dpcGUgbGVmdCwgc3dpcGUgcmlnaHQpIHRvIGRpcmVjdGlvblxuICAgKiBzZW1hbnRpY3MgKGdvIHJpZ2h0LCBnbyBsZWZ0KS5cbiAgICpcbiAgICogQnkgZGVmYXVsdCwgdGhpcyBtaXhpbiBwcmVzZW50cyBubyB1c2VyLXZpc2libGUgZWZmZWN0czsgaXQganVzdCBpbmRpY2F0ZXMgYVxuICAgKiBkaXJlY3Rpb24gaW4gd2hpY2ggdGhlIHVzZXIgaXMgY3VycmVudGx5IHN3aXBpbmcgb3IgaGFzIGZpbmlzaGVkIHN3aXBpbmcuIFRvXG4gICAqIG1hcCB0aGUgZGlyZWN0aW9uIHRvIGEgY2hhbmdlIGluIHNlbGVjdGlvbiwgdXNlIHRoZVxuICAgKiBbRGlyZWN0aW9uU2VsZWN0aW9uXShEaXJlY3Rpb25TZWxlY3Rpb24ubWQpIG1peGluLlxuICAgKi9cbiAgY2xhc3MgU3dpcGVEaXJlY3Rpb24gZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcblxuICAgICAgdGhpcy50cmF2ZWxGcmFjdGlvbiA9IDA7XG5cbiAgICAgIC8vIFRPRE86IFRvdWNoIGV2ZW50cyBjb3VsZCBiZSBmYWN0b3JlZCBvdXQgaW50byBpdHMgb3duIG1peGluLlxuXG4gICAgICAvLyBJbiBhbGwgdG91Y2ggZXZlbnRzLCBvbmx5IGhhbmRsZSBzaW5nbGUgdG91Y2hlcy4gV2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgLy8gaW5hZHZlcnRlbnRseSBkbyB3b3JrIHdoZW4gdGhlIHVzZXIncyB0cnlpbmcgdG8gcGluY2gtem9vbSBmb3IgZXhhbXBsZS5cbiAgICAgIC8vIFRPRE86IEV2ZW4gYmV0dGVyIGFwcHJvYWNoIHRoYW4gYmVsb3cgd291bGQgYmUgdG8gaWdub3JlIHRvdWNoZXMgYWZ0ZXJcbiAgICAgIC8vIHRoZSBmaXJzdCBpZiB0aGUgdXNlciBoYXMgYWxyZWFkeSBiZWd1biBhIHN3aXBlLlxuICAgICAgaWYgKHdpbmRvdy5Qb2ludGVyRXZlbnQpIHtcbiAgICAgICAgLy8gUHJlZmVyIGxpc3RlbmluZyB0byBzdGFuZGFyZCBwb2ludGVyIGV2ZW50cy5cbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIGV2ZW50ID0+IHtcbiAgICAgICAgICBpZiAoaXNFdmVudEZvclBlbk9yUHJpbWFyeVRvdWNoKGV2ZW50KSkge1xuICAgICAgICAgICAgdG91Y2hTdGFydCh0aGlzLCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJtb3ZlJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGlmIChpc0V2ZW50Rm9yUGVuT3JQcmltYXJ5VG91Y2goZXZlbnQpKSB7XG4gICAgICAgICAgICBsZXQgaGFuZGxlZCA9IHRvdWNoTW92ZSh0aGlzLCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcbiAgICAgICAgICAgIGlmIChoYW5kbGVkKSB7XG4gICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVydXAnLCBldmVudCA9PiB7XG4gICAgICAgICAgaWYgKGlzRXZlbnRGb3JQZW5PclByaW1hcnlUb3VjaChldmVudCkpIHtcbiAgICAgICAgICAgIHRvdWNoRW5kKHRoaXMsIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBQb2ludGVyIGV2ZW50cyBub3Qgc3VwcG9ydGVkIC0tIGxpc3RlbiB0byBvbGRlciB0b3VjaCBldmVudHMuXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICBpZiAodGhpc1ttdWx0aVRvdWNoU3ltYm9sXSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQudG91Y2hlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIGxldCBjbGllbnRYID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgICAgIGxldCBjbGllbnRZID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WTtcbiAgICAgICAgICAgIHRvdWNoU3RhcnQodGhpcywgY2xpZW50WCwgY2xpZW50WSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXNbbXVsdGlUb3VjaFN5bWJvbF0gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGlmICghdGhpc1ttdWx0aVRvdWNoU3ltYm9sXSAmJiBldmVudC50b3VjaGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgbGV0IGNsaWVudFggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICAgICAgbGV0IGNsaWVudFkgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZO1xuICAgICAgICAgICAgbGV0IGhhbmRsZWQgPSB0b3VjaE1vdmUodGhpcywgY2xpZW50WCwgY2xpZW50WSk7XG4gICAgICAgICAgICBpZiAoaGFuZGxlZCkge1xuICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBldmVudCA9PiB7XG4gICAgICAgICAgaWYgKGV2ZW50LnRvdWNoZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAvLyBBbGwgdG91Y2hlcyByZW1vdmVkOyBnZXN0dXJlIGlzIGNvbXBsZXRlLlxuICAgICAgICAgICAgaWYgKCF0aGlzW211bHRpVG91Y2hTeW1ib2xdKSB7XG4gICAgICAgICAgICAgIC8vIFNpbmdsZS10b3VjaCBzd2lwZSBoYXMgZmluaXNoZWQuXG4gICAgICAgICAgICAgIGxldCBjbGllbnRYID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgICAgICAgbGV0IGNsaWVudFkgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZO1xuICAgICAgICAgICAgICB0b3VjaEVuZCh0aGlzLCBjbGllbnRYLCBjbGllbnRZKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXNbbXVsdGlUb3VjaFN5bWJvbF0gPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKSB7IHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7IH1cblxuICAgICAgLy8gRm9yIHRoZSBjb21wb25lbnQgdG8gcmVjZWl2ZSBQb2ludGVyRXZlbnRzIGluIElFL0VkZ2UsIHdlIG5lZWQgdG8gc2V0XG4gICAgICAvLyB0b3VjaC1hY3Rpb246IG5vbmUuIE9ubHkgbWFrZSB0aGlzIGNoYW5nZSBpZiB0b3VjaC1hY3Rpb24gaXMgY3VycmVudGx5XG4gICAgICAvLyB0aGUgZGVmYXVsdCB2YWx1ZSAoXCJhdXRvXCIpLCBpbiBjYXNlIHRoZSBkZXZlbG9wZXIga25vd3MgYmV0dGVyIHRoYW4gd2VcbiAgICAgIC8vIGRvIHdoYXQgdGhleSB3YW50IGluIHRoZWlyIHBhcnRpY3VsYXIgY29udGV4dC5cbiAgICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKHRoaXMpLnRvdWNoQWN0aW9uID09PSAnYXV0bycpIHtcbiAgICAgICAgdGhpcy5zdHlsZS50b3VjaEFjdGlvbiA9ICdub25lJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgbGVmdC5cbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuXG4gICAgICovXG4gICAgZ29MZWZ0KCkge1xuICAgICAgaWYgKHN1cGVyLmdvTGVmdCkgeyByZXR1cm4gc3VwZXIuZ29MZWZ0KCk7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgcmlnaHQuXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLlxuICAgICAqL1xuICAgIGdvUmlnaHQoKSB7XG4gICAgICBpZiAoc3VwZXIuZ29SaWdodCkgeyByZXR1cm4gc3VwZXIuZ29SaWdodCgpOyB9XG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCBpbXBsZW1lbnRhdGlvbi5cbiAgICBnZXQgc2hvd1RyYW5zaXRpb24oKSB7XG4gICAgICByZXR1cm4gc3VwZXIuc2hvd1RyYW5zaXRpb247XG4gICAgfVxuICAgIHNldCBzaG93VHJhbnNpdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKCdzaG93VHJhbnNpdGlvbicgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2hvd1RyYW5zaXRpb24gPSB2YWx1ZTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBkaXN0YW5jZSB0aGUgZmlyc3QgdG91Y2hwb2ludCBoYXMgdHJhdmVsZWQgc2luY2UgdGhlIGJlZ2lubmluZyBvZiBhXG4gICAgICogZHJhZywgZXhwcmVzc2VkIGFzIGEgZnJhY3Rpb24gb2YgdGhlIGVsZW1lbnQncyB3aWR0aC5cbiAgICAgKlxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqL1xuICAgIGdldCB0cmF2ZWxGcmFjdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzW3RyYXZlbEZyYWN0aW9uU3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IHRyYXZlbEZyYWN0aW9uKHZhbHVlKSB7XG4gICAgICB0aGlzW3RyYXZlbEZyYWN0aW9uU3ltYm9sXSA9IHZhbHVlO1xuICAgICAgaWYgKCd0cmF2ZWxGcmFjdGlvbicgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIudHJhdmVsRnJhY3Rpb24gPSB2YWx1ZTsgfVxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIFN3aXBlRGlyZWN0aW9uO1xufTtcblxuXG4vLyBSZXR1cm4gdHJ1ZSBpZiB0aGUgcG9pbnRlciBldmVudCBpcyBmb3IgdGhlIHBlbiwgb3IgdGhlIHByaW1hcnkgdG91Y2ggcG9pbnQuXG5mdW5jdGlvbiBpc0V2ZW50Rm9yUGVuT3JQcmltYXJ5VG91Y2goZXZlbnQpIHtcbiAgcmV0dXJuIGV2ZW50LnBvaW50ZXJUeXBlID09PSAncGVuJyB8fFxuICAgICAgKGV2ZW50LnBvaW50ZXJUeXBlID09PSAndG91Y2gnICYmIGV2ZW50LmlzUHJpbWFyeSk7XG59XG5cblxuZnVuY3Rpb24gdG91Y2hTdGFydChlbGVtZW50LCBjbGllbnRYLCBjbGllbnRZKSB7XG4gIGVsZW1lbnQuc2hvd1RyYW5zaXRpb24gPSBmYWxzZTtcbiAgZWxlbWVudFtzdGFydFhTeW1ib2xdID0gY2xpZW50WDtcbiAgZWxlbWVudFtwcmV2aW91c1hTeW1ib2xdID0gY2xpZW50WDtcbiAgZWxlbWVudFtwcmV2aW91c1lTeW1ib2xdID0gY2xpZW50WTtcbiAgZWxlbWVudFtkZWx0YVhTeW1ib2xdID0gMDtcbiAgZWxlbWVudFtkZWx0YVlTeW1ib2xdID0gMDtcbn1cblxuZnVuY3Rpb24gdG91Y2hNb3ZlKGVsZW1lbnQsIGNsaWVudFgsIGNsaWVudFkpIHtcbiAgZWxlbWVudFtkZWx0YVhTeW1ib2xdID0gY2xpZW50WCAtIGVsZW1lbnRbcHJldmlvdXNYU3ltYm9sXTtcbiAgZWxlbWVudFtkZWx0YVlTeW1ib2xdID0gY2xpZW50WSAtIGVsZW1lbnRbcHJldmlvdXNZU3ltYm9sXTtcbiAgZWxlbWVudFtwcmV2aW91c1hTeW1ib2xdID0gY2xpZW50WDtcbiAgZWxlbWVudFtwcmV2aW91c1lTeW1ib2xdID0gY2xpZW50WTtcbiAgaWYgKE1hdGguYWJzKGVsZW1lbnRbZGVsdGFYU3ltYm9sXSkgPiBNYXRoLmFicyhlbGVtZW50W2RlbHRhWVN5bWJvbF0pKSB7XG4gICAgLy8gTW92ZSB3YXMgbW9zdGx5IGhvcml6b250YWwuXG4gICAgdHJhY2tUbyhlbGVtZW50LCBjbGllbnRYKTtcbiAgICAvLyBJbmRpY2F0ZSB0aGF0IHRoZSBldmVudCB3YXMgaGFuZGxlZC4gSXQnZCBiZSBuaWNlciBpZiB3ZSBkaWRuJ3QgaGF2ZVxuICAgIC8vIHRvIGRvIHRoaXMgc28gdGhhdCwgZS5nLiwgYSB1c2VyIGNvdWxkIGJlIHN3aXBpbmcgbGVmdCBhbmQgcmlnaHRcbiAgICAvLyB3aGlsZSBzaW11bHRhbmVvdXNseSBzY3JvbGxpbmcgdXAgYW5kIGRvd24uIChOYXRpdmUgdG91Y2ggYXBwcyBjYW4gZG9cbiAgICAvLyB0aGF0LikgSG93ZXZlciwgTW9iaWxlIFNhZmFyaSB3YW50cyB0byBoYW5kbGUgc3dpcGUgZXZlbnRzIG5lYXIgdGhlXG4gICAgLy8gcGFnZSBhbmQgaW50ZXJwcmV0IHRoZW0gYXMgbmF2aWdhdGlvbnMuIFRvIGF2b2lkIGhhdmluZyBhIGhvcml6aW9udGFsXG4gICAgLy8gc3dpcGUgbWlzaW50ZXByZXRlZCBhcyBhIG5hdmlnYXRpb24sIHdlIGluZGljYXRlIHRoYXQgd2UndmUgaGFuZGxlZFxuICAgIC8vIHRoZSBldmVudCwgYW5kIHByZXZlbnQgZGVmYXVsdCBiZWhhdmlvci5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICAvLyBNb3ZlIHdhcyBtb3N0bHkgdmVydGljYWwuXG4gICAgcmV0dXJuIGZhbHNlOyAvLyBOb3QgaGFuZGxlZFxuICB9XG59XG5cbmZ1bmN0aW9uIHRvdWNoRW5kKGVsZW1lbnQsIGNsaWVudFgsIGNsaWVudFkpIHtcbiAgZWxlbWVudC5zaG93VHJhbnNpdGlvbiA9IHRydWU7XG4gIGlmIChlbGVtZW50W2RlbHRhWFN5bWJvbF0gPj0gMjApIHtcbiAgICAvLyBGaW5pc2hlZCBnb2luZyByaWdodCBhdCBoaWdoIHNwZWVkLlxuICAgIGVsZW1lbnQuZ29MZWZ0KCk7XG4gIH0gZWxzZSBpZiAoZWxlbWVudFtkZWx0YVhTeW1ib2xdIDw9IC0yMCkge1xuICAgIC8vIEZpbmlzaGVkIGdvaW5nIGxlZnQgYXQgaGlnaCBzcGVlZC5cbiAgICBlbGVtZW50LmdvUmlnaHQoKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBGaW5pc2hlZCBhdCBsb3cgc3BlZWQuXG4gICAgdHJhY2tUbyhlbGVtZW50LCBjbGllbnRYKTtcbiAgICBsZXQgdHJhdmVsRnJhY3Rpb24gPSBlbGVtZW50LnRyYXZlbEZyYWN0aW9uO1xuICAgIGlmICh0cmF2ZWxGcmFjdGlvbiA+PSAwLjUpIHtcbiAgICAgIGVsZW1lbnQuZ29SaWdodCgpO1xuICAgIH0gZWxzZSBpZiAodHJhdmVsRnJhY3Rpb24gPD0gLTAuNSkge1xuICAgICAgZWxlbWVudC5nb0xlZnQoKTtcbiAgICB9XG4gIH1cbiAgZWxlbWVudC50cmF2ZWxGcmFjdGlvbiA9IDA7XG4gIGVsZW1lbnRbZGVsdGFYU3ltYm9sXSA9IG51bGw7XG4gIGVsZW1lbnRbZGVsdGFZU3ltYm9sXSA9IG51bGw7XG59XG5cbmZ1bmN0aW9uIHRyYWNrVG8oZWxlbWVudCwgeCkge1xuICBsZXQgd2lkdGggPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xuICBsZXQgZHJhZ0Rpc3RhbmNlID0gZWxlbWVudFtzdGFydFhTeW1ib2xdIC0geDtcbiAgbGV0IGZyYWN0aW9uID0gd2lkdGggPiAwID9cbiAgICBkcmFnRGlzdGFuY2UgLyB3aWR0aCA6XG4gICAgMDtcbiAgZWxlbWVudC50cmF2ZWxGcmFjdGlvbiA9IGZyYWN0aW9uO1xufVxuIiwiaW1wb3J0IENvbGxlY3RpdmUgZnJvbSAnLi9Db2xsZWN0aXZlJztcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFRhcmdldEluQ29sbGVjdGl2ZS4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIGFsbG93cyBhIGNvbXBvbmVudCB0byBwcm92aWRlIGFnZ3JlZ2F0ZSBiZWhhdmlvciB3aXRoIG90aGVyXG4gICAqIGVsZW1lbnRzLCBlLmcuLCBmb3Iga2V5Ym9hcmQgaGFuZGxpbmcuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gaW1wbGljaXRseSBjcmVhdGVzIGEgY29sbGVjdGl2ZSBmb3IgYSBjb21wb25lbnQgc28gdGhhdCBpdCBjYW5cbiAgICogcGFydGljaXBhdGUgaW4gY29sbGVjdGl2ZSBrZXlib2FyZCBoYW5kbGluZy4gU2VlIHRoZVxuICAgKiBbQ29sbGVjdGl2ZV0oQ29sbGVjdGl2ZS5tZCkgY2xhc3MgZm9yIGRldGFpbHMuXG4gICAqXG4gICAqIFlvdSBjYW4gdXNlIHRoaXMgbWl4aW4gaW4gY29uanVuY3Rpb24gd2l0aFxuICAgKiBbQ29udGVudEZpcnN0Q2hpbGRUYXJnZXRdKENvbnRlbnRGaXJzdENoaWxkVGFyZ2V0Lm1kKSB0byBhdXRvbWF0aWNhbGx5IGhhdmVcbiAgICogdGhlIGNvbXBvbmVudCdzIGNvbGxlY3RpdmUgZXh0ZW5kZWQgdG8gaXRzIGZpcnN0IGNoaWxkLlxuICAgKi9cbiAgY2xhc3MgVGFyZ2V0SW5Db2xsZWN0aXZlIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICB0aGlzLmNvbGxlY3RpdmUgPSBuZXcgQ29sbGVjdGl2ZSh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzL3NldHMgdGhlIGN1cnJlbnQgdGFyZ2V0IG9mIHRoZSBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBTZXQgdGhpcyB0byBwb2ludCB0byBhbm90aGVyIGVsZW1lbnQuIFRoYXQgdGFyZ2V0IGVsZW1lbnQgd2lsbCBiZVxuICAgICAqIGltcGxpY2l0bHkgYWRkZWQgdG8gdGhlIGNvbXBvbmVudCdzIGNvbGxlY3RpdmUuIFRoYXQgaXMsIHRoZSBjb21wb25lbnRcbiAgICAgKiBhbmQgaXRzIHRhcmdldCB3aWxsIHNoYXJlIHJlc3BvbnNpYmlsaXR5IGZvciBoYW5kbGluZyBrZXlib2FyZCBldmVudHMuXG4gICAgICpcbiAgICAgKiBZb3UgY2FuIHNldCB0aGlzIHByb3BlcnR5IHlvdXJzZWxmLCBvciB5b3UgY2FuIHVzZSB0aGVcbiAgICAgKiBDb250ZW50Rmlyc3RDaGlsZFRhcmdldCBtaXhpbiB0byBhdXRvbWF0aWNhbGx5IHNldCB0aGUgdGFyZ2V0IHRvIHRoZVxuICAgICAqIGNvbXBvbmVudCdzIGZpcnN0IGNoaWxkLlxuICAgICAqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIGdldCB0YXJnZXQoKSB7XG4gICAgICByZXR1cm4gc3VwZXIudGFyZ2V0O1xuICAgIH1cbiAgICBzZXQgdGFyZ2V0KGVsZW1lbnQpIHtcbiAgICAgIGlmICgndGFyZ2V0JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci50YXJnZXQgPSBlbGVtZW50OyB9XG4gICAgICB0aGlzLmNvbGxlY3RpdmUuYXNzaW1pbGF0ZShlbGVtZW50KTtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBUYXJnZXRJbkNvbGxlY3RpdmU7XG59O1xuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuL2NyZWF0ZVN5bWJvbCc7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IGl0ZW1zQ2hhbmdlZExpc3RlbmVyU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdpdGVtc0NoYW5nZWRMaXN0ZW5lcicpO1xuY29uc3Qgc2VsZWN0ZWRJdGVtQ2hhbmdlZExpc3RlbmVyU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdzZWxlY3RlZEl0ZW1DaGFuZ2VkTGlzdGVuZXInKTtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFRhcmdldFNlbGVjdGlvbi4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIGFsbG93cyBhIGNvbXBvbmVudCB0byBkZWxlZ2F0ZSBpdHMgb3duIHNlbGVjdGlvbiBzZW1hbnRpY3MgdG8gYVxuICAgKiB0YXJnZXQgZWxlbWVudC5cbiAgICpcbiAgICogVGhpcyBpcyB1c2VmdWwgd2hlbiBkZWZpbmluZyBjb21wb25lbnRzIHRoYXQgYWN0IGFzIG9wdGlvbmFsIGZlYXR1cmVzIGZvciBhXG4gICAqIGNvbXBvbmVudCB0aGF0IGFjdHMgbGlrZSBhIGxpc3QuIFNlZSBiYXNpYy1hcnJvdy1zZWxlY3Rpb24gYW5kXG4gICAqIGJhc2ljLXBhZ2UtZG90cyBmb3IgZXhhbXBsZXMgb2YgY29tcG9uZW50cyB1c2VkIGFzIG9wdGlvbmFsIGZlYXR1cmVzIGZvclxuICAgKiBjb21wb25lbnRzIGxpa2UgYmFzaWMtY2Fyb3VzZWwuIEEgdHlwaWNhbCB1c2FnZSBtaWdodCBiZTpcbiAgICpcbiAgICogICAgIDxiYXNpYy1hcnJvdy1zZWxlY3Rpb24+XG4gICAqICAgICAgIDxiYXNpYy1jYXJvdXNlbD5cbiAgICogICAgICAgICAuLi4gaW1hZ2VzLCBldGMuIC4uLlxuICAgKiAgICAgICA8L2Jhc2ljLWNhcm91c2VsPlxuICAgKiAgICAgPC9iYXNpYy1hcnJvdy1zZWxlY3Rpb24+XG4gICAqXG4gICAqIEJlY2F1c2UgYmFzaWMtYXJyb3ctc2VsZWN0aW9uIHVzZXMgdGhlXG4gICAqIFtUYXJnZXRTZWxlY3Rpb25dKFRhcmdldFNlbGVjdGlvbi5tZCkgbWl4aW4sIGl0IGV4cG9zZXMgbWVtYmVycyB0byBhY2Nlc3MgYVxuICAgKiBzZWxlY3Rpb246IGBzZWxlY3ROZXh0YCwgYHNlbGVjdFByZXZpb3VzYCwgYHNlbGVjdGVkSW5kZXhgLCBldGMuIFRoZXNlIGFyZVxuICAgKiBhbGwgZGVsZWdhdGVkIHRvIHRoZSBjaGlsZCBjb21wb25lbnQgKGhlcmUsIGEgYmFzaWMtY2Fyb3VzZWwpLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGV4cGVjdHMgYSBgdGFyZ2V0YCBwcm9wZXJ0eSB0byBiZSBzZXQgdG8gdGhlIGVsZW1lbnQgYWN0dWFsbHlcbiAgICogbWFuYWdpbmcgdGhlIHNlbGVjdGlvbi4gWW91IGNhbiBzZXQgdGhhdCBwcm9wZXJ0eSB5b3Vyc2VsZiwgb3IgeW91IGNhbiB1c2VcbiAgICogdGhlIFtDb250ZW50Rmlyc3RDaGlsZFRhcmdldF0oQ29udGVudEZpcnN0Q2hpbGRUYXJnZXQubWQpIG1peGluIHRvXG4gICAqIGltcGxpY2l0bHkgdGFrZSB0aGUgY29tcG9uZW50J3MgZmlyc3QgY2hpbGQgYXMgdGhlIHRhcmdldC4gVGhpcyBpcyB3aGF0XG4gICAqIGJhc2ljLWFycm93LXNlbGVjdGlvbiAoYWJvdmUpIGRvZXMuXG4gICAqL1xuICBjbGFzcyBUYXJnZXRTZWxlY3Rpb24gZXh0ZW5kcyBiYXNlIHtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IHNldCBvZiBpdGVtcyBpbiB0aGUgbGlzdC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudFtdfVxuICAgICAqL1xuICAgIGdldCBpdGVtcygpIHtcbiAgICAgIGxldCB0YXJnZXQgPSB0aGlzLnRhcmdldDtcbiAgICAgIGxldCBpdGVtcyA9IHRhcmdldCAmJiB0YXJnZXQuaXRlbXM7XG4gICAgICByZXR1cm4gaXRlbXMgfHwgW107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgaXMgaW52b2tlZCB3aGVuIHRoZSB1bmRlcmx5aW5nIGNvbnRlbnRzIGNoYW5nZS4gSXQgaXMgYWxzb1xuICAgICAqIGludm9rZWQgb24gY29tcG9uZW50IGluaXRpYWxpemF0aW9uIOKAkyBzaW5jZSB0aGUgaXRlbXMgaGF2ZSBcImNoYW5nZWRcIiBmcm9tXG4gICAgICogYmVpbmcgbm90aGluZy5cbiAgICAgKi9cbiAgICBpdGVtc0NoYW5nZWQoKSB7XG4gICAgICBpZiAoc3VwZXIuaXRlbXNDaGFuZ2VkKSB7IHN1cGVyLml0ZW1zQ2hhbmdlZCgpOyB9XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdpdGVtcy1jaGFuZ2VkJykpO1xuICAgIH1cblxuICAgIGdldCBzZWxlY3RlZEZyYWN0aW9uKCkge1xuICAgICAgbGV0IHRhcmdldCA9IHRoaXMudGFyZ2V0O1xuICAgICAgcmV0dXJuIHRhcmdldCAmJiB0YXJnZXQuc2VsZWN0ZWRGcmFjdGlvbjtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGVkRnJhY3Rpb24oZnJhY3Rpb24pIHtcbiAgICAgIGlmICgnc2VsZWN0ZWRGcmFjdGlvbicgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRGcmFjdGlvbiA9IGZyYWN0aW9uOyB9XG4gICAgICBsZXQgdGFyZ2V0ID0gdGhpcy50YXJnZXQ7XG4gICAgICBpZiAodGFyZ2V0ICYmIHRhcmdldC5zZWxlY3RlZEZyYWN0aW9uICE9PSBmcmFjdGlvbikge1xuICAgICAgICB0YXJnZXQuc2VsZWN0ZWRGcmFjdGlvbiA9IGZyYWN0aW9uO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgaXRlbSwgb3IgbnVsbCBpZiB0aGVyZSBpcyBubyBzZWxlY3Rpb24uXG4gICAgICpcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGVkSXRlbSgpIHtcbiAgICAgIGxldCB0YXJnZXQgPSB0aGlzLnRhcmdldDtcbiAgICAgIHJldHVybiB0YXJnZXQgJiYgdGFyZ2V0LnNlbGVjdGVkSXRlbTtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGVkSXRlbShpdGVtKSB7XG4gICAgICBpZiAoJ3NlbGVjdGVkSXRlbScgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJdGVtID0gaXRlbTsgfVxuICAgICAgbGV0IHRhcmdldCA9IHRoaXMudGFyZ2V0O1xuICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICB0YXJnZXQuc2VsZWN0ZWRJdGVtID0gaXRlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUaGlzIG1ldGhvZCBleGlzdHMgc28gd3JhcHBpbmcgY29tcG9uZW50cyBjYW4gaGFuZGxlIGEgY2hhbmdlIGluIHRoZVxuICAgIC8vIHNlbGVjdGlvbiB3aXRob3V0IHBvdGVudGlhbGx5IHJlLWludm9raW5nIHRoZSBzZWxlY3RlZEl0ZW0gc2V0dGVyLiBUaGlzXG4gICAgLy8gaXMga2luZCBvZiB1bnNhdGlzZnlpbmcsIHRob3VnaC4gSXQnZCBiZSBuaWNlciB0byBsZXQgc3VjaCBjb21wb25lbnRzXG4gICAgLy8ganVzdCBpbXBsZW1lbnQgdGhlIGdldHRlci9zZXR0ZXIgZm9yIHNlbGVjdGVkSXRlbSwgYnV0IGhhdmUgYSB3YXkgdG9cbiAgICAvLyBrbm93IHdoZXRoZXIgdGhleSBuZWVkIHRvIGFsc28gdGhhdCBwcm9wZXJ0eSBnZXR0ZXIvc2V0dGVyIGZvciB0aGUgdGFyZ2V0XG4gICAgLy8gY29tcG9uZW50LlxuICAgIHNlbGVjdGVkSXRlbUNoYW5nZWQoKSB7XG4gICAgICBpZiAoc3VwZXIuc2VsZWN0ZWRJdGVtQ2hhbmdlZCkgeyBzdXBlci5zZWxlY3RlZEl0ZW1DaGFuZ2VkKCk7IH1cbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3NlbGVjdGVkLWl0ZW0tY2hhbmdlZCcpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHNlbGVjdGlvbiBuYXZpZ2F0aW9ucyB3cmFwIGZyb20gbGFzdCB0byBmaXJzdCwgYW5kIHZpY2UgdmVyc2EuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAZGVmYXVsdCB7ZmFsc2V9XG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGlvbldyYXBzKCkge1xuICAgICAgbGV0IHRhcmdldCA9IHRoaXMudGFyZ2V0O1xuICAgICAgcmV0dXJuIHRhcmdldCAmJiB0YXJnZXQuc2VsZWN0aW9uV3JhcHM7XG4gICAgfVxuICAgIHNldCBzZWxlY3Rpb25XcmFwcyh2YWx1ZSkge1xuICAgICAgaWYgKCdzZWxlY3Rpb25XcmFwcycgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0aW9uV3JhcHMgPSB2YWx1ZTsgfVxuICAgICAgbGV0IHRhcmdldCA9IHRoaXMudGFyZ2V0O1xuICAgICAgaWYoIHRhcmdldCkge1xuICAgICAgICB0YXJnZXQuc2VsZWN0aW9uV3JhcHMgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzL3NldHMgdGhlIHRhcmdldCBlbGVtZW50IHRvIHdoaWNoIHRoaXMgY29tcG9uZW50IHdpbGwgZGVsZWdhdGVcbiAgICAgKiBzZWxlY3Rpb24gYWN0aW9ucy5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICBnZXQgdGFyZ2V0KCkge1xuICAgICAgcmV0dXJuIHN1cGVyLnRhcmdldDtcbiAgICB9XG4gICAgc2V0IHRhcmdldChlbGVtZW50KSB7XG4gICAgICBpZiAoJ3RhcmdldCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIudGFyZ2V0ID0gZWxlbWVudDsgfVxuICAgICAgaWYgKHRoaXNbaXRlbXNDaGFuZ2VkTGlzdGVuZXJTeW1ib2xdKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignaXRlbXMtY2hhbmdlZCcsIHRoaXNbaXRlbXNDaGFuZ2VkTGlzdGVuZXJTeW1ib2xdKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzW3NlbGVjdGVkSXRlbUNoYW5nZWRMaXN0ZW5lclN5bWJvbF0pIHtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdzZWxlY3RlZC1pdGVtLWNoYW5nZWQnLCB0aGlzW3NlbGVjdGVkSXRlbUNoYW5nZWRMaXN0ZW5lclN5bWJvbF0pO1xuICAgICAgfVxuICAgICAgdGhpc1tpdGVtc0NoYW5nZWRMaXN0ZW5lclN5bWJvbF0gPSBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2l0ZW1zLWNoYW5nZWQnLCBldmVudCA9PiB7XG4gICAgICAgIHRoaXMuaXRlbXNDaGFuZ2VkKCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXNbc2VsZWN0ZWRJdGVtQ2hhbmdlZExpc3RlbmVyU3ltYm9sXSA9IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2VsZWN0ZWQtaXRlbS1jaGFuZ2VkJywgZXZlbnQgPT4ge1xuICAgICAgICAvLyBSRVZJRVc6IENvbXBvbmVudHMgYXBwbHlpbmcgVGFyZ2V0U2VsZWN0aW9uIGJvdGggbGlzdGVuIHRvIHRoaXNcbiAgICAgICAgLy8gZXZlbnQgKG9uIHRoZSB0YXJnZXQpLCBhbmQgcmFpc2UgaXQgdGhlbXNlbHZlcy4gSW4gdGhlb3J5LCB0aGV5J3JlXG4gICAgICAgIC8vIGV4cGVjdGVkIHRvICpub3QqIGNhdGNoIHRoZSBldmVudHMgdGhleSByYWlzZSB0aGVtc2VsdmVzLCBidXQgQ2hyb21lXG4gICAgICAgIC8vIChhdCBsZWFzdCkgYXBwZWFycyB0byB2aW9sYXRlIHRoYXQgZXhwZWN0YXRpb24uIFRoYXQgaXMsIGl0J3NcbiAgICAgICAgLy8gcG9zc2libGUgdG8gaGF2ZSBldmVudC50YXJnZXQgPT09IHRoaXMuIE1vcmUgY29uZnVzaW5nbHksIHRoZSBndWFyZFxuICAgICAgICAvLyBiZWxvdywgd2hpY2ggaXMgaW50ZW5kZWQgdG8gYXZvaWQgcmVjdXJzaXZlIGNhbGxzIHRvXG4gICAgICAgIC8vIHNlbGVjdGVkSXRlbUNoYW5nZWQsIGRvZXNuJ3Qgd29yayBhcyBleHBlY3RlZC4gRXZlbiBpZiB0aGUgZGVidWdnZXJcbiAgICAgICAgLy8gc2hvd3MgZXZlbnQudGFyZ2V0ID09PSB0aGlzLCB0aGUgY29udGVudHMgb2YgdGhlIFwiaWZcIiBzdGF0ZW1lbnQgd2lsbFxuICAgICAgICAvLyBiZSBleGVjdXRlZC5cbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gdGhpcykge1xuICAgICAgICAgIC8vIExldCB0aGUgY29tcG9uZW50IGtub3cgdGhlIHRhcmdldCdzIHNlbGVjdGlvbiBjaGFuZ2VkLCBidXQgd2l0aG91dFxuICAgICAgICAgIC8vIHJlLWludm9raW5nIHRoZSBzZWxlY3RJbmRleC9zZWxlY3RlZEl0ZW0gc2V0dGVyLlxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtQ2hhbmdlZCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIEZvcmNlIGluaXRpYWwgcmVmcmVzaC5cbiAgICAgIHRoaXMuaXRlbXNDaGFuZ2VkKCk7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gVGFyZ2V0U2VsZWN0aW9uO1xufTtcbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi9jcmVhdGVTeW1ib2wnO1xuXG5jb25zdCBwbGF5aW5nU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdwbGF5aW5nJyk7XG5jb25zdCBzZWxlY3Rpb25UaW1lckR1cmF0aW9uU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdzZWxlY3Rpb25UaW1lckR1cmF0aW9uJyk7XG5jb25zdCB0aW1lclRpbWVvdXRTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3RpbWVyVGltZW91dCcpO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggVGltZXJTZWxlY3Rpb24uICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBwcm92aWRlcyBmb3IgYXV0b21hdGljIHRpbWVkIGNoYW5nZXMgaW4gc2VsZWN0aW9uLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGlzIHVzZWZ1bCBmb3IgY3JlYXRpbmcgc2xpZGVzaG93LWxpa2UgZWxlbWVudHMuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyB0aGUgY29tcG9uZW50IHRvIGRlZmluZSBhbiBgaXRlbXNgIHByb3BlcnR5LCBhcyB3ZWxsIGFzXG4gICAqIGBzZWxlY3RGaXJzdGAgYW5kIGBzZWxlY3ROZXh0YCBtZXRob2RzLiBZb3UgY2FuIGltcGxlbWVudCB0aG9zZSB5b3Vyc2VsZixcbiAgICogb3IgdXNlIHRoZSBbQ29udGVudEFzSXRlbXNdKENvbnRlbnRBc0l0ZW1zLm1kKSBhbmRcbiAgICogW1NpbmdsZVNlbGVjdGlvbl0oU2luZ2xlU2VsZWN0aW9uLm1kKSBtaXhpbnMuXG4gICAqL1xuICBjbGFzcyBUaW1lclNlbGVjdGlvbiBleHRlbmRzIGJhc2Uge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgLy8gU2V0IGRlZmF1bHRzLlxuICAgICAgaWYgKHR5cGVvZiB0aGlzLnBsYXlpbmcgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMucGxheWluZyA9IHRoaXMuZGVmYXVsdHMucGxheWluZztcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5zZWxlY3Rpb25UaW1lckR1cmF0aW9uID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLnNlbGVjdGlvblRpbWVyRHVyYXRpb24gPSB0aGlzLmRlZmF1bHRzLnNlbGVjdGlvblRpbWVyRHVyYXRpb247XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29udGVudENoYW5nZWQoKSB7XG4gICAgICBpZiAoc3VwZXIuY29udGVudENoYW5nZWQpIHsgc3VwZXIuY29udGVudENoYW5nZWQoKTsgfVxuICAgICAgcmVzdGFydFRpbWVyKHRoaXMpO1xuICAgIH1cblxuICAgIGdldCBkZWZhdWx0cygpIHtcbiAgICAgIGxldCBkZWZhdWx0cyA9IHN1cGVyLmRlZmF1bHRzIHx8IHt9O1xuICAgICAgZGVmYXVsdHMucGxheWluZyA9IGZhbHNlO1xuICAgICAgZGVmYXVsdHMuc2VsZWN0aW9uVGltZXJEdXJhdGlvbiA9IDEwMDA7XG4gICAgICByZXR1cm4gZGVmYXVsdHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQmVnaW4gYXV0b21hdGljIHByb2dyZXNzaW9uIG9mIHRoZSBzZWxlY3Rpb24uXG4gICAgICovXG4gICAgcGxheSgpIHtcbiAgICAgIGlmIChzdXBlci5wbGF5KSB7IHN1cGVyLnBsYXkoKTsgfVxuICAgICAgc3RhcnRUaW1lcih0aGlzKTtcbiAgICAgIHRoaXNbcGxheWluZ1N5bWJvbF0gPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhdXNlIGF1dG9tYXRpYyBwcm9ncmVzc2lvbiBvZiB0aGUgc2VsZWN0aW9uLlxuICAgICAqL1xuICAgIHBhdXNlKCkge1xuICAgICAgaWYgKHN1cGVyLnBhdXNlKSB7IHN1cGVyLnBhdXNlKCk7IH1cbiAgICAgIGNsZWFyVGltZXIodGhpcyk7XG4gICAgICB0aGlzW3BsYXlpbmdTeW1ib2xdID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiB0aGUgc2VsZWN0aW9uIGlzIGJlaW5nIGF1dG9tYXRpY2FsbHkgYWR2YW5jZWQuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuICAgIGdldCBwbGF5aW5nKCkge1xuICAgICAgcmV0dXJuIHRoaXNbcGxheWluZ1N5bWJvbF07XG4gICAgfVxuICAgIHNldCBwbGF5aW5nKHBsYXlpbmcpIHtcbiAgICAgIGxldCBwcmV2aW91c1BsYXlpbmcgPSB0aGlzW3BsYXlpbmdTeW1ib2xdO1xuICAgICAgbGV0IHBhcnNlZCA9IFN0cmluZyhwbGF5aW5nKSA9PT0gJ3RydWUnOyAvLyBDYXN0IHRvIGJvb2xlYW5cbiAgICAgIGlmICgncGxheWluZycgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIucGxheWluZyA9IHBsYXlpbmc7IH1cbiAgICAgIGlmIChwYXJzZWQgIT09IHByZXZpb3VzUGxheWluZykge1xuICAgICAgICBpZiAocGxheWluZykge1xuICAgICAgICAgIHRoaXMucGxheSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICogV2hlbiB0aGUgc2VsZWN0ZWQgaXRlbSBjaGFuZ2VzIChiZWNhdXNlIG9mIHNvbWV0aGluZyB0aGlzIG1peGluIGRpZCwgb3JcbiAgICAgKiB3YXMgY2hhbmdlZCBieSBhbiBvdXRzaWRlIGFnZW50IGxpa2UgdGhlIHVzZXIpLCB3ZSB3YWl0IGJlZm9yZSBhZHZhbmNpbmdcbiAgICAgKiB0byB0aGUgbmV4dCBpdGVtLiBCeSB0cmlnZ2VyaW5nIHRoZSBuZXh0IGl0ZW0gdGhpcyB3YXksIHdlIGltcGxpY2l0bHkgZ2V0XG4gICAgICogYSBkZXNpcmFibGUgYmVoYXZpb3I6IGlmIHRoZSB1c2VyIGNoYW5nZXMgdGhlIHNlbGVjdGlvbiAoZS5nLiwgaW4gYVxuICAgICAqIGNhcm91c2VsKSwgd2UgbGV0IHRoZW0gc2VlIHRoYXQgc2VsZWN0aW9uIHN0YXRlIGZvciBhIHdoaWxlIGJlZm9yZVxuICAgICAqIGFkdmFuY2luZyB0aGUgc2VsZWN0aW9uIG91cnNlbHZlcy5cbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0ZWRJdGVtKCkge1xuICAgICAgcmV0dXJuIHN1cGVyLnNlbGVjdGVkSXRlbTtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGVkSXRlbShpdGVtKSB7XG4gICAgICBpZiAoJ3NlbGVjdGVkSXRlbScgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJdGVtID0gaXRlbTsgfVxuICAgICAgcmVzdGFydFRpbWVyKHRoaXMpO1xuICAgIH1cblxuICAgIC8vIEluIGNhc2UgdGhpcyBtaXhpbiBpcyBiZWluZyB1c2VkIHdpdGggVGFyZ2V0U2VsZWN0aW9uLlxuICAgIHNlbGVjdGVkSXRlbUNoYW5nZWQoKSB7XG4gICAgICBpZiAoc3VwZXIuc2VsZWN0ZWRJdGVtQ2hhbmdlZCkgeyBzdXBlci5zZWxlY3RlZEl0ZW1DaGFuZ2VkKCk7IH1cbiAgICAgIHJlc3RhcnRUaW1lcih0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGltZSBpbiBtaWxsaXNlY29uZHMgdGhhdCB3aWxsIGVsYXBzZSBhZnRlciB0aGUgc2VsZWN0aW9uIGNoYW5nZXNcbiAgICAgKiBiZWZvcmUgdGhlIHNlbGVjdGlvbiB3aWxsIGJlIGFkdmFuY2VkIHRvIHRoZSBuZXh0IGl0ZW0gaW4gdGhlIGxpc3QuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bnVtYmVyfSAtIFRpbWUgaW4gbWlsbGlzZWNvbmRzXG4gICAgICogQGRlZmF1bHQgMTAwMCAoMSBzZWNvbmQpXG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGlvblRpbWVyRHVyYXRpb24oKSB7XG4gICAgICByZXR1cm4gdGhpc1tzZWxlY3Rpb25UaW1lckR1cmF0aW9uU3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGlvblRpbWVyRHVyYXRpb24odmFsdWUpIHtcbiAgICAgIHRoaXNbc2VsZWN0aW9uVGltZXJEdXJhdGlvblN5bWJvbF0gPSBwYXJzZUludCh2YWx1ZSk7XG4gICAgICBpZiAoJ3NlbGVjdGlvblRpbWVyRHVyYXRpb24nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGlvblRpbWVyRHVyYXRpb24gPSB2YWx1ZTsgfVxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIFRpbWVyU2VsZWN0aW9uO1xufTtcblxuXG5mdW5jdGlvbiBjbGVhclRpbWVyKGVsZW1lbnQpIHtcbiAgaWYgKGVsZW1lbnRbdGltZXJUaW1lb3V0U3ltYm9sXSkge1xuICAgIGNsZWFyVGltZW91dChlbGVtZW50W3RpbWVyVGltZW91dFN5bWJvbF0pO1xuICAgIGVsZW1lbnRbdGltZXJUaW1lb3V0U3ltYm9sXSA9IG51bGw7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzdGFydFRpbWVyKGVsZW1lbnQpIHtcbiAgY2xlYXJUaW1lcihlbGVtZW50KTtcbiAgaWYgKGVsZW1lbnQucGxheWluZyAmJiBlbGVtZW50Lml0ZW1zICYmIGVsZW1lbnQuaXRlbXMubGVuZ3RoID4gMCkge1xuICAgIHN0YXJ0VGltZXIoZWxlbWVudCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RhcnRUaW1lcihlbGVtZW50KSB7XG4gIC8vIElmIHBsYXkoKSBpcyBjYWxsZWQgbW9yZSB0aGFuIG9uY2UsIGNhbmNlbCBhbnkgZXhpc3RpbmcgdGltZXIuXG4gIGNsZWFyVGltZXIoZWxlbWVudCk7XG4gIGVsZW1lbnRbdGltZXJUaW1lb3V0U3ltYm9sXSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHNlbGVjdE5leHRXaXRoV3JhcChlbGVtZW50KTtcbiAgfSwgZWxlbWVudC5zZWxlY3Rpb25UaW1lckR1cmF0aW9uKTtcbn1cblxuLy8gU2VsZWN0IHRoZSBuZXh0IGl0ZW0sIHdyYXBwaW5nIHRvIGZpcnN0IGl0ZW0gaWYgbmVjZXNzYXJ5LlxuZnVuY3Rpb24gc2VsZWN0TmV4dFdpdGhXcmFwKGVsZW1lbnQpIHtcbiAgbGV0IGl0ZW1zID0gZWxlbWVudC5pdGVtcztcbiAgaWYgKGl0ZW1zICYmIGl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICBpZiAoZWxlbWVudC5zZWxlY3RlZEluZGV4ID09IG51bGwgfHwgZWxlbWVudC5zZWxlY3RlZEluZGV4ID09PSBpdGVtcy5sZW5ndGggLSAxKSB7XG4gICAgICBlbGVtZW50LnNlbGVjdEZpcnN0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQuc2VsZWN0TmV4dCgpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9jcmVhdGVTeW1ib2wnO1xuXG5cbi8vIFN5bWJvbHMgZm9yIHByaXZhdGUgZGF0YSBtZW1iZXJzIG9uIGFuIGVsZW1lbnQuXG5jb25zdCBhYnNvcmJEZWNlbGVyYXRpb25TeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2Fic29yYkRlY2VsZXJhdGlvbicpO1xuY29uc3QgbGFzdERlbHRhWFN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnbGFzdERlbHRhWCcpO1xuY29uc3QgbGFzdFdoZWVsVGltZW91dFN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnbGFzdFdoZWVsVGltZW91dCcpO1xuY29uc3QgcG9zdE5hdmlnYXRlRGVsYXlDb21wbGV0ZVN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgncG9zdE5hdmlnYXRlRGVsYXlDb21wbGV0ZScpO1xuY29uc3Qgd2hlZWxEaXN0YW5jZVN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnd2hlZWxEaXN0YW5jZScpO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggVHJhY2twYWREaXJlY3Rpb24uICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBtYXBzIGEgaG9yaXpvbnRhbCB0cmFja3BhZCBzd2lwZSBnZXN0dXJlcyAob3IgaG9yaXpvbnRhbCBtb3VzZVxuICAgKiB3aGVlbCBhY3Rpb25zKSB0byBkaXJlY3Rpb24gc2VtYW50aWNzLlxuICAgKlxuICAgKiBZb3UgY2FuIHVzZSB0aGlzIG1peGluIHdpdGggYSBtaXhpbiBsaWtlXG4gICAqIFtEaXJlY3Rpb25TZWxlY3Rpb25dKERpcmVjdGlvblNlbGVjdGlvbi5tZCkgdG8gbGV0IHRoZSB1c2VyIGNoYW5nZSB0aGVcbiAgICogc2VsZWN0aW9uIHdpdGggdGhlIHRyYWNrcGFkIG9yIG1vdXNlIHdoZWVsLlxuICAgKlxuICAgKiBUbyByZXNwb25kIHRvIHRoZSB0cmFja3BhZCwgd2UgY2FuIGxpc3RlbiB0byB0aGUgRE9NJ3MgXCJ3aGVlbFwiIGV2ZW50cy5cbiAgICogVGhlc2UgZXZlbnRzIGFyZSBmaXJlZCBhcyB0aGUgdXNlciBkcmFncyB0aGVpciBmaW5nZXJzIGFjcm9zcyBhIHRyYWNrcGFkLlxuICAgKiBVbmZvcnR1bmF0ZWx5LCBicm93c2VycyBhcmUgbWlzc2luZyBhIGNyaXRpY2FsIGV2ZW50IOKAlMKgdGhlcmUgaXMgbm8gZXZlbnRcbiAgICogd2hlbiB0aGUgdXNlciAqc3RvcHMqIGEgZ2VzdHVyZWQgb24gdGhlIHRyYWNrcGFkIG9yIG1vdXNlIHdoZWVsLlxuICAgKlxuICAgKiBUbyBtYWtlIHRoaW5ncyB3b3JzZSwgdGhlIG1haW5zdHJlYW0gYnJvd3NlcnMgY29udGludWUgdG8gZ2VuZXJhdGUgZmFrZVxuICAgKiB3aGVlbCBldmVudHMgZXZlbiBhZnRlciB0aGUgdXNlciBoYXMgc3RvcHBlZCBkcmFnZ2luZyB0aGVpciBmaW5nZXJzLiBUaGVzZVxuICAgKiBmYWtlIGV2ZW50cyBzaW11bGF0ZSB0aGUgdXNlciBncmFkdWFsbHkgc2xvd2luZyBkb3duIHRoZSBkcmFnIHVudGlsIHRoZXlcbiAgICogY29tZSB0byBhIHNtb290aCBzdG9wLiBJbiBzb21lIGNvbnRleHRzLCB0aGVzZSBmYWtlIHdoZWVsIGV2ZW50cyBtaWdodCBiZVxuICAgKiBoZWxwZnVsLCBidXQgaW4gdHJ5aW5nIHRvIHN1cHBseSB0eXBpY2FsIHRyYWNrcGFkIHN3aXBlIG5hdmlnYXRpb24sIHRoZXNlXG4gICAqIGZha2UgZXZlbnRzIGdldCBpbiB0aGUgd2F5LlxuICAgKlxuICAgKiBUaGlzIGNvbXBvbmVudCB1c2VzIGhldXJpc3RpY3MgdG8gd29yayBhcm91bmQgdGhlc2UgcHJvYmxlbXMsIGJ1dCB0aGVcbiAgICogY29tcGxleCBuYXR1cmUgb2YgdGhlIHByb2JsZW0gbWFrZSBpdCBleHRyZW1lbHkgZGlmZmljdWx0IHRvIGFjaGlldmUgdGhlXG4gICAqIHNhbWUgZGVncmVlIG9mIHRyYWNrcGFkIHJlc3BvbnNpdmVuZXNzIHBvc3NpYmxlIHdpdGggbmF0aXZlIGFwcGxpY2F0aW9ucy5cbiAgICovXG4gIGNsYXNzIFRyYWNrcGFkRGlyZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgZXZlbnQgPT4ge1xuICAgICAgICBsZXQgaGFuZGxlZCA9IHdoZWVsKHRoaXMsIGV2ZW50KTtcbiAgICAgICAgaWYgKGhhbmRsZWQpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJlc2V0V2hlZWxUcmFja2luZyh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgbGVmdC5cbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuXG4gICAgICovXG4gICAgZ29MZWZ0KCkge1xuICAgICAgaWYgKHN1cGVyLmdvTGVmdCkgeyByZXR1cm4gc3VwZXIuZ29MZWZ0KCk7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgcmlnaHQuXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLlxuICAgICAqL1xuICAgIGdvUmlnaHQoKSB7XG4gICAgICBpZiAoc3VwZXIuZ29SaWdodCkgeyByZXR1cm4gc3VwZXIuZ29SaWdodCgpOyB9XG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCBpbXBsZW1lbnRhdGlvbi5cbiAgICBnZXQgc2hvd1RyYW5zaXRpb24oKSB7XG4gICAgICByZXR1cm4gc3VwZXIuc2hvd1RyYW5zaXRpb247XG4gICAgfVxuICAgIHNldCBzaG93VHJhbnNpdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKCdzaG93VHJhbnNpdGlvbicgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2hvd1RyYW5zaXRpb24gPSB2YWx1ZTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBkaXN0YW5jZSB0aGUgdXNlciBoYXMgbW92ZWQgdGhlIGZpcnN0IHRvdWNocG9pbnQgc2luY2UgdGhlIGJlZ2lubmluZ1xuICAgICAqIG9mIGEgdHJhY2twYWQvd2hlZWwgb3BlcmF0aW9uLCBleHByZXNzZWQgYXMgYSBmcmFjdGlvbiBvZiB0aGUgZWxlbWVudCdzXG4gICAgICogd2lkdGguXG4gICAgICpcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKi9cbiAgICBnZXQgdHJhdmVsRnJhY3Rpb24oKSB7XG4gICAgICByZXR1cm4gc3VwZXIudHJhdmVsRnJhY3Rpb247XG4gICAgfVxuICAgIHNldCB0cmF2ZWxGcmFjdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKCd0cmF2ZWxGcmFjdGlvbicgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIudHJhdmVsRnJhY3Rpb24gPSB2YWx1ZTsgfVxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIFRyYWNrcGFkRGlyZWN0aW9uO1xufTtcblxuXG4vLyBUaW1lIHdlIHdhaXQgZm9sbG93aW5nIGEgbmF2aWdhdGlvbiBiZWZvcmUgcGF5aW5nIGF0dGVudGlvbiB0byB3aGVlbFxuLy8gZXZlbnRzIGFnYWluLlxuY29uc3QgUE9TVF9OQVZJR0FURV9USU1FID0gMjUwO1xuXG4vLyBUaW1lIHdlIHdhaXQgYWZ0ZXIgdGhlIGxhc3Qgd2hlZWwgZXZlbnQgYmVmb3JlIHdlIHJlc2V0IHRoaW5ncy5cbmNvbnN0IFdIRUVMX1RJTUUgPSAxMDA7XG5cblxuLy8gRm9sbG93aW5nIGEgbmF2aWdhdGlvbiwgcGFydGlhbGx5IHJlc2V0IG91ciB3aGVlbCB0cmFja2luZy5cbmZ1bmN0aW9uIHBvc3ROYXZpZ2F0ZShlbGVtZW50KSB7XG4gIGVsZW1lbnQudHJhdmVsRnJhY3Rpb24gPSAwO1xuICBlbGVtZW50W3doZWVsRGlzdGFuY2VTeW1ib2xdID0gMDtcbiAgZWxlbWVudFtwb3N0TmF2aWdhdGVEZWxheUNvbXBsZXRlU3ltYm9sXSA9IHRydWU7XG4gIGVsZW1lbnRbYWJzb3JiRGVjZWxlcmF0aW9uU3ltYm9sXSA9IHRydWU7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGVsZW1lbnRbcG9zdE5hdmlnYXRlRGVsYXlDb21wbGV0ZVN5bWJvbF0gPSBmYWxzZTtcbiAgfSwgUE9TVF9OQVZJR0FURV9USU1FKTtcbn1cblxuLy8gUmVzZXQgYWxsIHN0YXRlIHJlbGF0ZWQgdG8gdGhlIHRyYWNraW5nIG9mIHRoZSB3aGVlbC5cbmZ1bmN0aW9uIHJlc2V0V2hlZWxUcmFja2luZyhlbGVtZW50KSB7XG4gIGVsZW1lbnQudHJhdmVsRnJhY3Rpb24gPSAwO1xuICBlbGVtZW50W3doZWVsRGlzdGFuY2VTeW1ib2xdID0gMDtcbiAgZWxlbWVudFtsYXN0RGVsdGFYU3ltYm9sXSA9IDA7XG4gIGVsZW1lbnRbYWJzb3JiRGVjZWxlcmF0aW9uU3ltYm9sXSA9IGZhbHNlO1xuICBlbGVtZW50W3Bvc3ROYXZpZ2F0ZURlbGF5Q29tcGxldGVTeW1ib2xdID0gZmFsc2U7XG4gIGlmIChlbGVtZW50W2xhc3RXaGVlbFRpbWVvdXRTeW1ib2xdKSB7XG4gICAgY2xlYXJUaW1lb3V0KGVsZW1lbnRbbGFzdFdoZWVsVGltZW91dFN5bWJvbF0pO1xuICAgIGVsZW1lbnRbbGFzdFdoZWVsVGltZW91dFN5bWJvbF0gPSBudWxsO1xuICB9XG59XG5cbi8vIERlZmluZSBvdXIgb3duIHNpZ24gZnVuY3Rpb24sIHNpbmNlIChhcyBvZiBNYXkgMjAxNSksIFNhZmFyaSBhbmQgSUUgZG9uJ3Rcbi8vIHN1cHBseSBNYXRoLnNpZ24oKS5cbmZ1bmN0aW9uIHNpZ24oeCkge1xuICByZXR1cm4gKHggPT09IDApID9cbiAgICAwIDpcbiAgICAoeCA+IDApID9cbiAgICAgIDEgOlxuICAgICAgLTE7XG59XG5cbi8vIFRPRE86IERhbXBpbmcsIG9yIHNvbWUgb3RoZXIgdHJlYXRtZW50IGZvciBnb2luZyBwYXN0IHRoZSBlbmRzLlxuXG4vKlxuICogQSB3aGVlbCBldmVudCBoYXMgYmVlbiBnZW5lcmF0ZWQuIFRoaXMgY291bGQgYmUgYSByZWFsIHdoZWVsIGV2ZW50LCBvciBpdFxuICogY291bGQgYmUgZmFrZSAoc2VlIG5vdGVzIGluIHRoZSBoZWFkZXIpLlxuICpcbiAqIFRoaXMgaGFuZGxlciB1c2VzIHNldmVyYWwgc3RyYXRlZ2llcyB0byB0cnkgdG8gYXBwcm94aW1hdGUgbmF0aXZlIHRyYWNrcGFkXG4gKiBzd2lwZSBuYXZpZ2F0aW9uLlxuICpcbiAqIElmIHRoZSB1c2VyIGhhcyBkcmFnZ2VkIGVub3VnaCB0byBjYXVzZSBhIG5hdmlnYXRpb24sIHRoZW4gZm9yIGEgc2hvcnRcbiAqIGRlbGF5IGZvbGxvd2luZyB0aGF0IG5hdmlnYXRpb24sIHN1YnNlcXVlbnQgd2hlZWwgZXZlbnRzIHdpbGwgYmUgaWdub3JlZC5cbiAqXG4gKiBGdXJ0aGVybW9yZSwgZm9sbHdvd2luZyBhIG5hdmlnYXRpb24sIHdlIGlnbm9yZSBhbGwgd2hlZWwgZXZlbnRzIHVudGlsIHdlXG4gKiByZWNlaXZlIGF0IGxlYXN0IG9uZSBldmVudCB3aGVyZSB0aGUgZXZlbnQncyBkZWx0YVggKGRpc3RhbmNlIHRyYXZlbGVkKSBpc1xuICogKmdyZWF0ZXIqIHRoYW4gdGhlIHByZXZpb3VzIGV2ZW50J3MgZGVsdGFYLiBUaGlzIGhlbHBzIHVzIGZpbHRlciBvdXQgdGhlXG4gKiBmYWtlIHdoZWVsIGV2ZW50cyBnZW5lcmF0ZWQgYnkgdGhlIGJyb3dzZXIgdG8gc2ltdWxhdGUgZGVjZWxlcmF0aW9uLlxuICpcbiAqL1xuZnVuY3Rpb24gd2hlZWwoZWxlbWVudCwgZXZlbnQpIHtcblxuICAvLyBTaW5jZSB3ZSBoYXZlIGEgbmV3IHdoZWVsIGV2ZW50LCByZXNldCBvdXIgdGltZXIgd2FpdGluZyBmb3IgdGhlIGxhc3RcbiAgLy8gd2hlZWwgZXZlbnQgdG8gcGFzcy5cbiAgaWYgKGVsZW1lbnRbbGFzdFdoZWVsVGltZW91dFN5bWJvbF0pIHtcbiAgICBjbGVhclRpbWVvdXQoZWxlbWVudFtsYXN0V2hlZWxUaW1lb3V0U3ltYm9sXSk7XG4gIH1cbiAgZWxlbWVudFtsYXN0V2hlZWxUaW1lb3V0U3ltYm9sXSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHdoZWVsVGltZWRPdXQoZWxlbWVudCk7XG4gIH0sIFdIRUVMX1RJTUUpO1xuXG4gIGxldCBkZWx0YVggPSBldmVudC5kZWx0YVg7XG4gIGxldCBkZWx0YVkgPSBldmVudC5kZWx0YVk7XG5cbiAgLy8gU2VlIGlmIGVsZW1lbnQgZXZlbnQgcmVwcmVzZW50cyBhY2NlbGVyYXRpb24gb3IgZGVjZWxlcmF0aW9uLlxuICBsZXQgYWNjZWxlcmF0aW9uID0gc2lnbihkZWx0YVgpICogKGRlbHRhWCAtIGVsZW1lbnRbbGFzdERlbHRhWFN5bWJvbF0pO1xuICBlbGVtZW50W2xhc3REZWx0YVhTeW1ib2xdID0gZGVsdGFYO1xuICAvLyBjb25zb2xlLmxvZyhkZWx0YVggKyBcIiBcIiArIGFjY2VsZXJhdGlvbiArIFwiIFwiICsgZWxlbWVudFthYnNvcmJEZWNlbGVyYXRpb25TeW1ib2xdICsgXCIgXCIgKyBlbGVtZW50W3Bvc3ROYXZpZ2F0ZURlbGF5Q29tcGxldGVTeW1ib2xdKTtcblxuICBpZiAoTWF0aC5hYnMoZGVsdGFYKSA8IE1hdGguYWJzKGRlbHRhWSkpIHtcbiAgICAvLyBNb3ZlIHdhcyBtb3N0bHkgdmVydGljYWwuIFRoZSB1c2VyIG1heSBiZSB0cnlpbmcgc2Nyb2xsIHdpdGggdGhlXG4gICAgLy8gdHJhY2twYWQvd2hlZWwuIFRvIGJlIG9uIHRoZSBzYWZlLCB3ZSBpZ25vcmUgc3VjaCBldmVudHMuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGVsZW1lbnRbcG9zdE5hdmlnYXRlRGVsYXlDb21wbGV0ZVN5bWJvbF0pIHtcbiAgICAvLyBJdCdzIHRvbyBzb29uIGFmdGVyIGEgbmF2aWdhdGlvbjsgaWdub3JlIHRoZSBldmVudC5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG5cbiAgaWYgKGFjY2VsZXJhdGlvbiA+IDApIHtcbiAgICAvLyBUaGUgZXZlbnRzIGFyZSBub3QgKG9yIGFyZSBubyBsb25nZXIpIGRlY2VsZXJhdGluZywgc28gd2UgY2FuIHN0YXJ0XG4gICAgLy8gcGF5aW5nIGF0dGVudGlvbiB0byB0aGVtIGFnYWluLlxuICAgIGVsZW1lbnRbYWJzb3JiRGVjZWxlcmF0aW9uU3ltYm9sXSA9IGZhbHNlO1xuICB9IGVsc2UgaWYgKGVsZW1lbnRbYWJzb3JiRGVjZWxlcmF0aW9uU3ltYm9sXSkge1xuICAgIC8vIFRoZSB3aGVlbCBldmVudCB3YXMgbGlrZWx5IGZha2VkIHRvIHNpbXVsYXRlIGRlY2VsZXJhdGlvbjsgaWdub3JlIGl0LlxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZWxlbWVudFt3aGVlbERpc3RhbmNlU3ltYm9sXSArPSBkZWx0YVg7XG5cbiAgLy8gVXBkYXRlIHRoZSB0cmF2ZWwgZnJhY3Rpb24gb2YgdGhlIGVsZW1lbnQgYmVpbmcgbmF2aWdhdGVkLlxuICBsZXQgd2lkdGggPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xuICBsZXQgdHJhdmVsRnJhY3Rpb24gPSB3aWR0aCA+IDAgP1xuICAgIGVsZW1lbnRbd2hlZWxEaXN0YW5jZVN5bWJvbF0gLyB3aWR0aCA6XG4gICAgMDtcbiAgZWxlbWVudC5zaG93VHJhbnNpdGlvbiA9IGZhbHNlO1xuICB0cmF2ZWxGcmFjdGlvbiA9IHNpZ24odHJhdmVsRnJhY3Rpb24pICogTWF0aC5taW4oTWF0aC5hYnModHJhdmVsRnJhY3Rpb24pLCAxKTtcbiAgZWxlbWVudC50cmF2ZWxGcmFjdGlvbiA9IHRyYXZlbEZyYWN0aW9uO1xuXG4gIC8vIElmIHRoZSB1c2VyIGhhcyBkcmFnZ2VkIGVub3VnaCB0byByZWFjaCB0aGUgcHJldmlvdXMvbmV4dCBpdGVtLCB0aGVuXG4gIC8vIGNvbXBsZXRlIGEgbmF2aWdhdGlvbiB0byB0aGF0IGl0ZW0uXG4gIGlmICh0cmF2ZWxGcmFjdGlvbiA9PT0gMSkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiZ29SaWdodFwiKTtcbiAgICBlbGVtZW50LnNob3dUcmFuc2l0aW9uID0gdHJ1ZTtcbiAgICBlbGVtZW50LmdvUmlnaHQoKTtcbiAgICBwb3N0TmF2aWdhdGUoZWxlbWVudCk7XG4gIH0gZWxzZSBpZiAodHJhdmVsRnJhY3Rpb24gPT09IC0xKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJnb0xlZnRcIik7XG4gICAgZWxlbWVudC5zaG93VHJhbnNpdGlvbiA9IHRydWU7XG4gICAgZWxlbWVudC5nb0xlZnQoKTtcbiAgICBwb3N0TmF2aWdhdGUoZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLy8gQSBzdWZmaWNpZW50bHkgbG9uZyBwZXJpb2Qgb2YgdGltZSBoYXMgcGFzc2VkIHNpbmNlIHRoZSBsYXN0IHdoZWVsIGV2ZW50LlxuLy8gV2Ugc25hcCB0aGUgc2VsZWN0aW9uIHRvIHRoZSBjbG9zZXN0IGl0ZW0sIHRoZW4gcmVzZXQgb3VyIHN0YXRlLlxuZnVuY3Rpb24gd2hlZWxUaW1lZE91dChlbGVtZW50KSB7XG4gIC8vIGNvbnNvbGUubG9nKFwidGltZW91dFwiKTtcblxuICAvLyBTbmFwIHRvIHRoZSBjbG9zZXN0IGl0ZW0uXG4gIGVsZW1lbnQuc2hvd1RyYW5zaXRpb24gPSB0cnVlO1xuICBsZXQgdHJhdmVsRnJhY3Rpb24gPSBlbGVtZW50LnRyYXZlbEZyYWN0aW9uO1xuICBpZiAodHJhdmVsRnJhY3Rpb24gPj0gMC41KSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJzbmFwIHJpZ2h0XCIpO1xuICAgIGVsZW1lbnQuZ29SaWdodCgpO1xuICB9IGVsc2UgaWYgKHRyYXZlbEZyYWN0aW9uIDw9IC0wLjUpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcInNuYXAgbGVmdFwiKTtcbiAgICBlbGVtZW50LmdvTGVmdCgpO1xuICB9XG5cbiAgLy8gVE9ETzogTGlzdGVuIGZvciB0aGUgdHJhbnNpdGlvbiB0byBjb21wbGV0ZSwgYW5kIHRoZW4gcmVzdG9yZVxuICAvLyBzaG93VHJhbnNpdGlvbiB0byBmYWxzZSAob3IgdGhlIHByZXZpb3VzIHZhbHVlKS5cblxuICByZXNldFdoZWVsVHJhY2tpbmcoZWxlbWVudCk7XG59XG4iLCIvKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBjcmVhdGUgYSBzeW1ib2wgdGhhdCBjYW4gYmUgdXNlZCBmb3IgYXNzb2NpYXRpbmcgcHJpdmF0ZVxuICogZGF0YSB3aXRoIGFuIGVsZW1lbnQuXG4gKlxuICogTWl4aW5zIGFuZCBjb21wb25lbnQgY2xhc3NlcyBvZnRlbiB3YW50IHRvIGFzc29jaWF0ZSBwcml2YXRlIGRhdGEgd2l0aCBhblxuICogZWxlbWVudCBpbnN0YW5jZSwgYnV0IEphdmFTY3JpcHQgZG9lcyBub3QgaGF2ZSBkaXJlY3Qgc3VwcG9ydCBmb3IgdHJ1ZVxuICogcHJpdmF0ZSBwcm9wZXJ0aWVzLiBPbmUgYXBwcm9hY2ggaXMgdG8gdXNlIHRoZVxuICogW1N5bWJvbF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvU3ltYm9sKVxuICogZGF0YSB0eXBlIHRvIHNldCBhbmQgcmV0cmlldmUgZGF0YSBvbiBhbiBlbGVtZW50LlxuICpcbiAqIFVuZm9ydHVuYXRlbHksIHRoZSBTeW1ib2wgdHlwZSBpcyBub3QgYXZhaWxhYmxlIGluIEludGVybmV0IEV4cGxvcmVyIDExLiBUaGVcbiAqIGBjcmVhdGVTeW1ib2xgIGhlbHBlciBmdW5jdGlvbiBleGlzdHMgYXMgYSB3b3JrYXJvdW5kIGZvciBJRSAxMS4gUmF0aGVyIHRoYW5cbiAqIHJldHVybmluZyBhIHRydWUgU3ltYm9sLCBpdCBzaW1wbHkgcmV0dXJucyBhbiB1bmRlcnNjb3JlLXByZWZpeGVkIHN0cmluZy5cbiAqXG4gKiBVc2FnZTpcbiAqXG4gKiAgICAgY29uc3QgZm9vU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdmb28nKTtcbiAqXG4gKiAgICAgY2xhc3MgTXlFbGVtZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICogICAgICAgZ2V0IGZvbygpIHtcbiAqICAgICAgICAgcmV0dXJuIHRoaXNbZm9vU3ltYm9sXTtcbiAqICAgICAgIH1cbiAqICAgICAgIHNldCBmb28odmFsdWUpIHtcbiAqICAgICAgICAgdGhpc1tmb29TeW1ib2xdID0gdmFsdWU7XG4gKiAgICAgICB9XG4gKiAgICAgfVxuICpcbiAqIEluIElFIDExLCB0aGlzIHNhbXBsZSB3aWxsIFwiaGlkZVwiIGRhdGEgYmVoaW5kIGFuIGluc3RhbmNlIHByb3BlcnR5IHRoaXMuX2Zvby5cbiAqIFRoZSB1c2Ugb2YgdGhlIHVuZGVyc2NvcmUgaXMgbWVhbnQgdG8gcmVkdWNlIChub3QgZWxpbWluYXRlKSB0aGUgcG90ZW50aWFsXG4gKiBmb3IgbmFtZSBjb25mbGljdHMsIGFuZCBkaXNjb3VyYWdlIChub3QgcHJldmVudCkgZXh0ZXJuYWwgYWNjZXNzIHRvIHRoaXNcbiAqIGRhdGEuIEluIG1vZGVybiBicm93c2VycywgdGhlIGFib3ZlIGNvZGUgd2lsbCBlbGltaW5hdGUgdGhlIHBvdGVudGlhbCBvZlxuICogbmFtaW5nIGNvbmZsaWN0cywgYW5kIGJldHRlciBoaWRlIHRoZSBkYXRhIGJlaGluZCBhIHJlYWwgU3ltYm9sLlxuICpcbiAqIEBmdW5jdGlvbiBjcmVhdGVTeW1ib2xcbiAqIEBwYXJhbSB7c3RyaW5nfSBkZXNjcmlwdGlvbiAtIEEgc3RyaW5nIHRvIGlkZW50aWZ5IHRoZSBzeW1ib2wgd2hlbiBkZWJ1Z2dpbmdcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU3ltYm9sKGRlc2NyaXB0aW9uKSB7XG4gIHJldHVybiB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nID9cbiAgICBTeW1ib2woZGVzY3JpcHRpb24pIDpcbiAgICBgXyR7ZGVzY3JpcHRpb259YDtcbn1cbiIsIi8qXG4gKiBNaWNyb3Rhc2sgaGVscGVyIGZvciBJRSAxMS5cbiAqXG4gKiBFeGVjdXRpbmcgYSBmdW5jdGlvbiBhcyBhIG1pY3JvdGFzayBpcyB0cml2aWFsIGluIGJyb3dzZXJzIHRoYXQgc3VwcG9ydFxuICogcHJvbWlzZXMsIHdob3NlIHRoZW4oKSBjbGF1c2VzIHVzZSBtaWNyb3Rhc2sgdGltaW5nLiBJRSAxMSBkb2Vzbid0IHN1cHBvcnRcbiAqIHByb21pc2VzLCBidXQgZG9lcyBzdXBwb3J0IE11dGF0aW9uT2JzZXJ2ZXJzLCB3aGljaCBhcmUgYWxzbyBleGVjdXRlZCBhc1xuICogbWljcm90YXNrcy4gU28gdGhpcyBoZWxwZXIgdXNlcyBhbiBNdXRhdGlvbk9ic2VydmVyIHRvIGFjaGlldmUgbWljcm90YXNrXG4gKiB0aW1pbmcuXG4gKlxuICogU2VlIGh0dHBzOi8vamFrZWFyY2hpYmFsZC5jb20vMjAxNS90YXNrcy1taWNyb3Rhc2tzLXF1ZXVlcy1hbmQtc2NoZWR1bGVzL1xuICpcbiAqIEluc3BpcmVkIGJ5IFBvbHltZXIncyBhc3luYygpIGZ1bmN0aW9uLlxuICovXG5cblxuLy8gVGhlIHF1ZXVlIG9mIHBlbmRpbmcgY2FsbGJhY2tzIHRvIGJlIGV4ZWN1dGVkIGFzIG1pY3JvdGFza3MuXG5sZXQgY2FsbGJhY2tzID0gW107XG5cbi8vIENyZWF0ZSBhbiBlbGVtZW50IHRoYXQgd2Ugd2lsbCBtb2RpZnkgdG8gZm9yY2Ugb2JzZXJ2YWJsZSBtdXRhdGlvbnMuXG5sZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcblxuLy8gQSBtb25vdG9uaWNhbGx5LWluY3JlYXNpbmcgdmFsdWUuXG5sZXQgY291bnRlciA9IDA7XG5cblxuLyoqXG4gKiBBZGQgYSBjYWxsYmFjayB0byB0aGUgbWljcm90YXNrIHF1ZXVlLlxuICpcbiAqIFRoaXMgdXNlcyBhIE11dGF0aW9uT2JzZXJ2ZXIgc28gdGhhdCBpdCB3b3JrcyBvbiBJRSAxMS5cbiAqXG4gKiBOT1RFOiBJRSAxMSBtYXkgYWN0dWFsbHkgdXNlIHRpbWVvdXQgdGltaW5nIHdpdGggTXV0YXRpb25PYnNlcnZlcnMuIFRoaXNcbiAqIG5lZWRzIG1vcmUgaW52ZXN0aWdhdGlvbi5cbiAqXG4gKiBAZnVuY3Rpb24gbWljcm90YXNrXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaWNyb3Rhc2soY2FsbGJhY2spIHtcbiAgY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICAvLyBGb3JjZSBhIG11dGF0aW9uLlxuICBlbGVtZW50LnRleHRDb250ZW50ID0gKytjb3VudGVyO1xufVxuXG5cbi8vIEV4ZWN1dGUgYW55IHBlbmRpbmcgY2FsbGJhY2tzLlxuZnVuY3Rpb24gZXhlY3V0ZUNhbGxiYWNrcygpIHtcbiAgd2hpbGUgKGNhbGxiYWNrcy5sZW5ndGggPiAwKSB7XG4gICAgbGV0IGNhbGxiYWNrID0gY2FsbGJhY2tzLnNoaWZ0KCk7XG4gICAgY2FsbGJhY2soKTtcbiAgfVxufVxuXG5cbi8vIENyZWF0ZSB0aGUgb2JzZXJ2ZXIuXG5sZXQgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihleGVjdXRlQ2FsbGJhY2tzKTtcbm9ic2VydmVyLm9ic2VydmUoZWxlbWVudCwge1xuICBjaGFyYWN0ZXJEYXRhOiB0cnVlXG59KTtcbiIsIi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIGZvciByZW5kZXJpbmcgYW4gYXJyYXkgb2YgaXRlbXMgYXMgZWxlbWVudHMuXG4gKlxuICogVGhpcyBpcyBub3QgYSBtaXhpbiwgYnV0IGEgZnVuY3Rpb24gY29tcG9uZW50cyBjYW4gdXNlIGlmIHRoZXkgbmVlZCB0b1xuICogZ2VuZXJhdGUgYSBzZXQgb2YgZWxlbWVudHMgZm9yIHRoZSBpdGVtcyBpbiBhbiBhcnJheS5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHdpbGwgcmV1c2UgZXhpc3RpbmcgZWxlbWVudHMgaWYgcG9zc2libGUuIEUuZy4sIGlmIGl0IGlzIGNhbGxlZFxuICogdG8gcmVuZGVyIGFuIGFycmF5IG9mIDQgaXRlbXMsIGFuZCBsYXRlciBjYWxsZWQgdG8gcmVuZGVyIGFuIGFycmF5IG9mIDVcbiAqIGl0ZW1zLCBpdCBjYW4gcmV1c2UgdGhlIGV4aXN0aW5nIDQgaXRlbXMsIGNyZWF0aW5nIGp1c3Qgb25lIG5ldyBlbGVtZW50LlxuICogTm90ZSwgaG93ZXZlciwgdGhhdCB0aGlzIHJlLXJlbmRlcmluZyBpcyBub3QgYXV0b21hdGljLiBJZiwgYWZ0ZXIgY2FsbGluZ1xuICogdGhpcyBmdW5jdGlvbiwgeW91IG1hbmlwdWxhdGUgdGhlIGFycmF5IHlvdSB1c2VkLCB5b3UgbXVzdCBzdGlsbCBjYWxsIHRoaXNcbiAqIGZ1bmN0aW9uIGFnYWluIHRvIHJlLXJlbmRlciB0aGUgYXJyYXkuXG4gKlxuICogVGhlIGByZW5kZXJJdGVtYCBwYXJhbWV0ZXIgdGFrZXMgYSBmdW5jdGlvbiBvZiB0d28gYXJndW1lbnRzOiBhbiBpdGVtIHRvXG4gKiB0byByZW5kZXIsIGFuZCBhbiBleGlzdGluZyBlbGVtZW50IChpZiBvbmUgZXhpc3RzKSB3aGljaCBjYW4gYmUgcmVwdXJwb3NlZCB0b1xuICogcmVuZGVyIHRoYXQgaXRlbS4gSWYgdGhlIGxhdHRlciBhcmd1bWVudCBpcyBudWxsLCB0aGUgYHJlbmRlckl0ZW0oKWAgZnVuY3Rpb25cbiAqIHNob3VsZCBjcmVhdGUgYSBuZXcgZWxlbWVudCBhbmQgcmV0dXJuIGl0LiBUaGUgZnVuY3Rpb24gc2hvdWxkIGRvIHRoZSBzYW1lXG4gKiBpZiB0aGUgc3VwcGxpZWQgZXhpc3RpbmcgZWxlbWVudCBpcyBub3Qgc3VpdGFibGUgZm9yIHJlbmRlcmluZyB0aGUgZ2l2ZW5cbiAqIGl0ZW07IHRoZSByZXR1cm5lZCBlbGVtZW50IHdpbGwgYmUgdXNlZCB0byByZXBsYWNlIHRoZSBleGlzdGluZyBvbmUuIElmIHRoZVxuICogZXhpc3RpbmcgZWxlbWVudCAqaXMqIHN1aXRhYmxlLCB0aGUgZnVuY3Rpb24gY2FuIHNpbXBseSB1cGRhdGUgaXQgYW5kIHJldHVyblxuICogaXQgYXMgaXMuXG4gKlxuICogRXhhbXBsZTogVGhlIGZvbGxvd2luZyB3aWxsIHJlbmRlciBhbiBhcnJheSBvZiBzdHJpbmdzIGluIGRpdnMgYXMgY2hpbGRyZW5cbiAqIG9mIHRoZSBgY29udGFpbmVyYCBlbGVtZW50OlxuICpcbiAqICAgICBsZXQgc3RyaW5ncyA9IFsnYScsICdiJywgJ2MnLCAuLi5dO1xuICogICAgIGxldCBjb250YWluZXIgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoLi4uKTtcbiAqICAgICByZW5kZXJBcnJheUFzRWxlbWVudHMoc3RyaW5ncywgY29udGFpbmVyLCAoc3RyaW5nLCBlbGVtZW50KSA9PiB7XG4gKiAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAqICAgICAgICAgLy8gTm8gZWxlbWVudCBleGlzdHMgeWV0LCBzbyBjcmVhdGUgYSBuZXcgb25lLlxuICogICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gKiAgICAgICB9XG4gKiAgICAgICAvLyBTZXQvdXBkYXRlIHRoZSB0ZXh0IGNvbnRlbnQgb2YgdGhlIGVsZW1lbnQuXG4gKiAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gc3RyaW5nO1xuICogICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gKiAgICAgfSk7XG4gKlxuICogQHBhcmFtIHtBcnJheX0gaXRlbXMgLSB0aGUgaXRlbXMgdG8gcmVuZGVyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250YWluZXIgLSB0aGUgcGFyZW50IHRoYXQgd2lsbCBob2xkIHRoZSBlbGVtZW50c1xuICogQHBhcmFtIHtmdW5jdGlvbn0gcmVuZGVySXRlbSAtIHJldHVybnMgYSBuZXcgZWxlbWVudCBmb3IgYW4gaXRlbSwgb3JcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXB1cnBvc2VzIGFuIGV4aXN0aW5nIGVsZW1lbnQgZm9yIGFuIGl0ZW1cbiAqL1xuZnVuY3Rpb24gcmVuZGVyQXJyYXlBc0VsZW1lbnRzKGl0ZW1zLCBjb250YWluZXIsIHJlbmRlckl0ZW0pIHtcbiAgLy8gQ3JlYXRlIGEgbmV3IHNldCBvZiBlbGVtZW50cyBmb3IgdGhlIGN1cnJlbnQgaXRlbXMuXG4gIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgbGV0IG9sZEVsZW1lbnQgPSBjb250YWluZXIuY2hpbGROb2Rlc1tpbmRleF07XG4gICAgbGV0IG5ld0VsZW1lbnQgPSByZW5kZXJJdGVtKGl0ZW0sIG9sZEVsZW1lbnQpO1xuICAgIGlmIChuZXdFbGVtZW50KSB7XG4gICAgICBpZiAoIW9sZEVsZW1lbnQpIHtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0VsZW1lbnQpO1xuICAgICAgfSBlbHNlIGlmIChuZXdFbGVtZW50ICE9PSBvbGRFbGVtZW50KSB7XG4gICAgICAgIGNvbnRhaW5lci5yZXBsYWNlQ2hpbGQobmV3RWxlbWVudCwgb2xkRWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICAvLyBJZiB0aGUgYXJyYXkgc2hyYW5rLCByZW1vdmUgdGhlIGV4dHJhIGVsZW1lbnRzIHdoaWNoIGFyZSBubyBsb25nZXIgbmVlZGVkLlxuICB3aGlsZSAoY29udGFpbmVyLmNoaWxkTm9kZXMubGVuZ3RoID4gaXRlbXMubGVuZ3RoKSB7XG4gICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5jaGlsZE5vZGVzW2l0ZW1zLmxlbmd0aF0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckFycmF5QXNFbGVtZW50cztcbiIsIi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIGZvciBzdGFuZGFyZCBjbGFzc0xpc3QudG9nZ2xlKCkgYmVoYXZpb3Igb24gb2xkIGJyb3dzZXJzLFxuICogbmFtZWx5IElFIDExLlxuICpcbiAqIFRoZSBzdGFuZGFyZFxuICogW2NsYXNzbGlzdF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0VsZW1lbnQvY2xhc3NMaXN0KVxuICogb2JqZWN0IGhhcyBhIGB0b2dnbGUoKWAgZnVuY3Rpb24gdGhhdCBzdXBwb3J0cyBhIHNlY29uZCBCb29sZWFuIHBhcmFtZXRlclxuICogdGhhdCBjYW4gYmUgdXNlZCB0byBzdWNjaW5jdGx5IHR1cm4gYSBjbGFzcyBvbiBvciBvZmYuIFRoaXMgZmVhdHVyZSBpcyBvZnRlblxuICogdXNlZnVsIGluIGRlc2lnbmluZyBjdXN0b20gZWxlbWVudHMsIHdoaWNoIG1heSB3YW50IHRvIGV4dGVybmFsbHkgcmVmbGVjdFxuICogY29tcG9uZW50IHN0YXRlIGluIGEgQ1NTIGNsYXNzIHRoYXQgY2FuIGJlIHVzZWQgZm9yIHN0eWxpbmcgcHVycG9zZXMuXG4gKlxuICogVW5mb3J0dW5hdGVseSwgSUUgMTEgZG9lcyBub3Qgc3VwcG9ydCB0aGUgQm9vbGVhbiBwYXJhbWV0ZXIgdG9cbiAqIGBjbGFzc0xpc3QudG9nZ2xlKClgLiBUaGlzIGhlbHBlciBmdW5jdGlvbiBiZWhhdmVzIGxpa2UgdGhlIHN0YW5kYXJkXG4gKiBgdG9nZ2xlKClgLCBpbmNsdWRpbmcgc3VwcG9ydCBmb3IgdGhlIEJvb2xlYW4gcGFyYW1ldGVyLCBzbyB0aGF0IGl0IGNhbiBiZVxuICogdXNlZCBldmVuIG9uIElFIDExLlxuICpcbiAqIEBmdW5jdGlvbiB0b2dnbGVDbGFzc1xuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIFRoZSBlbGVtZW50IHRvIG1vZGlmeVxuICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSAtIFRoZSBjbGFzcyB0byBhZGQvcmVtb3ZlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtmb3JjZV0gLSBGb3JjZSB0aGUgY2xhc3MgdG8gYmUgYWRkZWQgKGlmIHRydWUpIG9yIHJlbW92ZWRcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpZiBmYWxzZSlcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9nZ2xlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lLCBmb3JjZSkge1xuICBsZXQgY2xhc3NMaXN0ID0gZWxlbWVudC5jbGFzc0xpc3Q7XG4gIGxldCBhZGRDbGFzcyA9ICh0eXBlb2YgZm9yY2UgPT09ICd1bmRlZmluZWQnKSA/XG4gICAgIWNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpIDpcbiAgICBmb3JjZTtcbiAgaWYgKGFkZENsYXNzKSB7XG4gICAgY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICB9IGVsc2Uge1xuICAgIGNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgfVxuICByZXR1cm4gYWRkQ2xhc3M7XG59XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL2NyZWF0ZVN5bWJvbCc7XG5pbXBvcnQgV3JhcHBlZFN0YW5kYXJkRWxlbWVudCBmcm9tICcuLi8uLi9iYXNpYy13cmFwcGVkLXN0YW5kYXJkLWVsZW1lbnQvc3JjL1dyYXBwZWRTdGFuZGFyZEVsZW1lbnQnO1xuaW1wb3J0IHRvZ2dsZUNsYXNzIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL3RvZ2dsZUNsYXNzJztcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3QgYXJlYUxpbmtTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2FyZWFMaW5rJyk7XG5cblxuLyoqXG4gKiBBbiBhbmNob3IgKGxpbmspIHRoYXQgaGlnaGxpZ2h0cyBpdHNlbGYgd2hlbiBpdHMgZGVzdGluYXRpb24gbWF0Y2hlcyB0aGVcbiAqIGN1cnJlbnQgbG9jYXRpb24uXG4gKlxuICogW0xpdmUgZGVtb10oaHR0cDovL2Jhc2ljd2ViY29tcG9uZW50cy5vcmcvYmFzaWMtd2ViLWNvbXBvbmVudHMvcGFja2FnZXMvYmFzaWMtY3VycmVudC1hbmNob3IvKVxuICpcbiAqIFN1Y2ggYSBsaW5rIGNvbW1vbmx5IGFwcGVhcnMgaW4gdG9vbGJhcnMsIHNpZGUgYmFycywgYW5kIG90aGVyIG5hdmlnYXRpb25cbiAqIGVsZW1lbnRzLiBJbiB0aGVzZSBzaXR1YXRpb25zLCB5b3UgZ2VuZXJhbGx5IHdhbnQgdGhlIHVzZXIgdG8gdW5kZXJzdGFuZCB3aGF0XG4gKiBwYWdlIG9yIGFyZWEgdGhlIHVzZXIgaXMgYWxyZWFkeSBvbi5cbiAqXG4gKiBXaGVuIHRoZSBsaW5rIGlzIGN1cnJlbnQg4oCUIHdoZW4gaXQgcG9pbnRzIHRvIHRoZSBjdXJyZW50IGxvY2F0aW9uIOKAlCB0aGVcbiAqIGxpbmsgd2lsbCBoYXZlIHRoZSBDU1MgYGN1cnJlbnRgIGNsYXNzIGFwcGxpZWQgdG8gaXQsIGFuZCBpdHMgYGN1cnJlbnRgXG4gKiBwcm9wZXJ0eSB3aWxsIGJlIHRydWUuXG4gKlxuICogTm90ZTogb25lIGxpbWl0YXRpb24gb2YgdGhpcyBjb21wb25lbnQgaXMgdGhhdCwgYnkgZGVmYXVsdCwgdGhlIGxpbmsgZG9lc1xuICogKm5vdCogc2hvdyB0aGUgc3RhbmRhcmQgbGluayBjb2xvciAodXN1YWxseSBibHVlKSBhbmQgdGV4dCBkZWNvcmF0aW9uXG4gKiAodW5kZXJsaW5lKS4gSG93ZXZlciwgaW4gbmF2aWdhdGlvbiBlbGVtZW50cyBsaWtlIHRvb2xiYXJzLCB5b3Ugb2Z0ZW4gd2lsbFxuICogd2FudCB0byBleHBsaWNpdGx5IHNwZWNpZmljIGxpbmsgY29sb3JzIGFueXdheSwgZS5nLiwgdG8gcmVmbGVjdCB5b3VyXG4gKiBhcHBsaWNhdGlvbidzIHZpc3VhbCBzdHlsZSBhbmQgYnJhbmQuXG4gKi9cbmNsYXNzIEN1cnJlbnRBbmNob3IgZXh0ZW5kcyBXcmFwcGVkU3RhbmRhcmRFbGVtZW50LndyYXAoJ2EnKSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIGV2ZW50ID0+IHtcbiAgICAgIHJlZnJlc2godGhpcyk7XG4gICAgfSk7XG5cbiAgICAvLyBTdHVwaWQgRWRnZS9JRSBcInN1cHBvcnRcIiBwb3BzdGF0ZSwgYnV0IGRvbid0IGZpcmUgaXQgb24gaGFzaGNoYW5nZS5cbiAgICAvLyBTbyB3ZSBoYXZlIHRvIGxpc3RlbiBmb3IgaGFzaGNoYW5nZSBhcyB3ZWxsLCB3aXRoIHRoZSByZXN1bHQgdGhhdCBhXG4gICAgLy8gc3RhbmRhcmRzLWNvbXBsaWFudCBicm93c2VyIG1heSBlbmQgdXAgcmVmcmVzaGluZyB0aGUgbGluayB0d2ljZS5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIGV2ZW50ID0+IHtcbiAgICAgIHJlZnJlc2godGhpcyk7XG4gICAgfSk7XG5cbiAgICAvLyBTZXQgZGVmYXVsdHMuXG4gICAgaWYgKHR5cGVvZiB0aGlzLmFyZWFMaW5rID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5hcmVhTGluayA9IHRoaXMuZGVmYXVsdHMuYXJlYUxpbms7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRydWUgaWYgdGhlIGxpbmsgcG9pbnRzIHRvIGFuIGFyZWEgd2l0aGluIGEgc2l0ZSwgbm90IGp1c3QgYSBzaW5nbGUgcGFnZS5cbiAgICpcbiAgICogSWYgdHJ1ZSwgdGhlIG1hdGNoaW5nIHJ1bGUgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGxpbmsgaXMgY3VycmVudCBjaGFuZ2VzOlxuICAgKiBhbiBhcmVhIGxpbmsgaXMgY29uc2lkZXJlZCB0byBiZSBjdXJyZW50IGlmIHRoZSBsaW5rJ3MgZGVzdGluYXRpb24gZm9ybXMgYVxuICAgKiBwcmVmaXggb2YgdGhlIGN1cnJlbnQgbG9jYXRpb24gKGluc3RlYWQgb2YgbWF0Y2hpbmcgdGhlIGNvbXBsZXRlIFVSTCkuXG4gICAqXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgZ2V0IGFyZWFMaW5rKCkge1xuICAgIHJldHVybiB0aGlzW2FyZWFMaW5rU3ltYm9sXTtcbiAgfVxuICBzZXQgYXJlYUxpbmsodmFsdWUpIHtcbiAgICAvLyBDYXN0IGJvb2xlYW4gb3Igc3RyaW5nIHZhbHVlcyB0byBib29sZWFuLlxuICAgIHRoaXNbYXJlYUxpbmtTeW1ib2xdID0gKFN0cmluZyh2YWx1ZSkgPT09ICd0cnVlJyk7XG4gICAgcmVmcmVzaCh0aGlzKTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGlmIChzdXBlci5jb25uZWN0ZWRDYWxsYmFjaykgeyBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpOyB9XG4gICAgcmVmcmVzaCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcnVlIGlmIHRoZSBsaW5rJ3MgZGVzdGluYXRpb24gbWF0Y2hlcyB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICAgKlxuICAgKiBJZiB0aGlzIGlzIHRydWUsIHRoZSBlbGVtZW50IHdpbGwgaGF2ZSBhbiBgY3VycmVudGAgQ1NTIGNsYXNzIGFwcGxpZWQgdG8gaXQuXG4gICAqXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgZ2V0IGN1cnJlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdjdXJyZW50Jyk7XG4gIH1cbiAgc2V0IGN1cnJlbnQodmFsdWUpIHtcbiAgICB0b2dnbGVDbGFzcyh0aGlzLCAnY3VycmVudCcsIHZhbHVlKTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjdXJyZW50LWNoYW5nZWQnKSk7XG4gIH1cblxuICBnZXQgZGVmYXVsdHMoKSB7XG4gICAgbGV0IGRlZmF1bHRzID0gc3VwZXIuZGVmYXVsdHMgfHwge307XG4gICAgZGVmYXVsdHMuYXJlYUxpbmsgPSBmYWxzZTtcbiAgICByZXR1cm4gZGVmYXVsdHM7XG4gIH1cblxuICAvLyBBdWdtZW50IGhyZWYgaW1wbGVtZW50YXRpb24gc28gdGhhdCBjaGFuZ2luZyBocmVmIGNoZWNrcyB0aGUgYWN0aXZlIHN0YXR1cy5cbiAgZ2V0IGhyZWYoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmhyZWY7XG4gIH1cbiAgc2V0IGhyZWYodmFsdWUpIHtcbiAgICBzdXBlci5ocmVmID0gdmFsdWU7XG4gICAgcmVmcmVzaCh0aGlzKTtcbiAgfVxuXG4gIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICAvLyBSZXNldCBzdHlsZXMgc28gdGhhdCBjb2xvciBjYW4gYmUgc3BlY2lmaWVkIGZyb20gdGhlIG91dHNpZGUgd2l0aG91dFxuICAgIC8vIGhhdmluZyB0byBkZWZpbmUgYSBDU1MgdmFyaWFibGUuXG4gICAgcmV0dXJuIGBcbiAgICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgfVxuXG4gICAgICAjaW5uZXIge1xuICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XG4gICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGEgaWQ9XCJpbm5lclwiPjxzbG90Pjwvc2xvdD48L2E+YDtcbiAgfVxuXG59XG5cblxuLy8gVXBkYXRlIHRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGUgZWxlbWVudCBiYXNlZCBvbiB0aGUgY3VycmVudCBsb2NhdGlvbi5cbmZ1bmN0aW9uIHJlZnJlc2goZWxlbWVudCkge1xuICBsZXQgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gIGxldCBtYXRjaDtcbiAgaWYgKGVsZW1lbnQuYXJlYUxpbmspIHtcbiAgICAvLyBNYXRjaCBwcmVmaXhcbiAgICBsZXQgcHJlZml4ID0gZWxlbWVudC5ocmVmO1xuICAgIC8vIElmIHByZWZpeCBkb2Vzbid0IGVuZCBpbiBzbGFzaCwgYWRkIGEgc2xhc2guXG4gICAgLy8gV2Ugd2FudCB0byBhdm9pZCBtYXRjaGluZyBpbiB0aGUgbWlkZGxlIG9mIGEgZm9sZGVyIG5hbWUuXG4gICAgaWYgKHByZWZpeC5sZW5ndGggPCB1cmwubGVuZ3RoICYmIHByZWZpeC5zdWJzdHIoLTEpICE9PSAnLycpIHtcbiAgICAgIHByZWZpeCArPSAnLyc7XG4gICAgfVxuICAgIG1hdGNoID0gKHVybC5zdWJzdHIoMCwgcHJlZml4Lmxlbmd0aCkgPT09IHByZWZpeCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gTWF0Y2ggd2hvbGUgcGF0aFxuICAgIG1hdGNoID0gKHVybCA9PT0gZWxlbWVudC5ocmVmKTtcbiAgfVxuICBlbGVtZW50LmN1cnJlbnQgPSBtYXRjaDtcbn1cblxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2Jhc2ljLWN1cnJlbnQtYW5jaG9yJywgQ3VycmVudEFuY2hvcik7XG4iLCJpbXBvcnQgQ29tcG9zYWJsZSBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Db21wb3NhYmxlJztcbmltcG9ydCBTaGFkb3dUZW1wbGF0ZSBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TaGFkb3dUZW1wbGF0ZSc7XG5pbXBvcnQgU2hhZG93RWxlbWVudFJlZmVyZW5jZXMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2hhZG93RWxlbWVudFJlZmVyZW5jZXMnO1xuaW1wb3J0IEF0dHJpYnV0ZU1hcnNoYWxsaW5nIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0F0dHJpYnV0ZU1hcnNoYWxsaW5nJztcbmltcG9ydCBEaXN0cmlidXRlZENoaWxkcmVuIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW4nO1xuXG5cbi8qKlxuICogQSBzYW1wbGUgZ2VuZXJhbC1wdXJwb3NlIGJhc2UgY2xhc3MgZm9yIGRlZmluaW5nIGN1c3RvbSBlbGVtZW50cyB0aGF0IG1peGVzXG4gKiBpbiBzb21lIGNvbW1vbiBmZWF0dXJlczogdGVtcGxhdGUgc3RhbXBpbmcgaW50byBhIHNoYWRvdyByb290LCBzaGFkb3cgZWxlbWVudFxuICogcmVmZXJlbmNlcywgbWFyc2hhbGxpbmcgYXR0cmlidXRlcyB0byBwcm9wZXJ0aWVzLCBhbmQgcmV0cmlldmluZyB0aGUgY2hpbGRyZW5cbiAqIGRpc3RyaWJ1dGVkIHRvIGEgY29tcG9uZW50LlxuICpcbiAqIFRoaXMgYmFzZSBjbGFzcyBpcyBub3Qgc3BlY2lhbCBpbiBhbnkgd2F5LCBhbmQgaXMgZGVmaW5lZCBvbmx5IGFzIGFcbiAqIGNvbnZlbmllbnQgc2hvcnRoYW5kIGZvciBhcHBseWluZyB0aGUgbWl4aW5zIGxpc3RlZCBhYm92ZS4gWW91IGNhbiB1c2UgdGhpc1xuICogY2xhc3MgYXMgYSBiYXNlIGNsYXNzIGZvciB5b3VyIG93biBlbGVtZW50cywgb3IgZWFzaWx5IGNyZWF0ZSB5b3VyIG93biBiYXNlXG4gKiBjbGFzcyBieSBhcHBseWluZyB0aGUgc2FtZSBzZXQgb2YgbWl4aW5zLlxuICpcbiAqIFRoZSBFbGVtZW50QmFzZSBiYXNlIGNsYXNzIGRvZXMgbm90IHJlZ2lzdGVyIGl0c2VsZiBhcyBhIGN1c3RvbSBlbGVtZW50IHdpdGhcbiAqIHRoZSBicm93c2VyLCBhbmQgaGVuY2UgY2Fubm90IGJlIGluZGVwZW5kZW50bHkgaW5zdGFudGlhdGVkLlxuICpcbiAqIEBtaXhlcyBBdHRyaWJ1dGVNYXJzaGFsbGluZyBcbiAqIEBtaXhlcyBDb21wb3NhYmxlXG4gKiBAbWl4ZXMgRGlzdHJpYnV0ZWRDaGlsZHJlblxuICogQG1peGVzIFNoYWRvd0VsZW1lbnRSZWZlcmVuY2VzXG4gKiBAbWl4ZXMgU2hhZG93VGVtcGxhdGVcbiAqL1xuY2xhc3MgRWxlbWVudEJhc2UgZXh0ZW5kcyBDb21wb3NhYmxlKEhUTUxFbGVtZW50KS5jb21wb3NlKFxuICBTaGFkb3dUZW1wbGF0ZSwgICAgICAgICAgLy8gYmVmb3JlIG5vZGUgZmluZGluZywgc28gc2hhZG93IHJvb3QgaXMgcG9wdWxhdGVkXG4gIFNoYWRvd0VsZW1lbnRSZWZlcmVuY2VzLCAvLyBiZWZvcmUgbWFyc2hhbGxpbmcsIHNvIHByb3BlcnRpZXMgY2FuIHVzZSByZWZzXG4gIEF0dHJpYnV0ZU1hcnNoYWxsaW5nLFxuICBEaXN0cmlidXRlZENoaWxkcmVuXG4pIHtcblxuICAvKlxuICAgKiBEZWJ1Z2dpbmcgdXRpbGl0eTogbG9ncyBhIG1lc3NhZ2UsIHByZWZpeGVkIGJ5IHRoZSBjb21wb25lbnQncyB0YWcuXG4gICAqL1xuICBsb2codGV4dCkge1xuICAgIGlmIChzdXBlci5sb2cpIHsgc3VwZXIubG9nKHRleHQpOyB9XG4gICAgY29uc29sZS5sb2coYCR7dGhpcy5sb2NhbE5hbWV9OiAke3RleHR9YCk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBFbGVtZW50QmFzZTtcbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvY3JlYXRlU3ltYm9sJztcbmltcG9ydCBFbGVtZW50QmFzZSBmcm9tICcuLi8uLi9iYXNpYy1lbGVtZW50LWJhc2Uvc3JjL0VsZW1lbnRCYXNlJztcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3QgZmFkZUNvbG9yU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdmYWRlQ29sb3InKTtcblxuXG4vKipcbiAqIEZhZGVzIG91dCBjb250ZW50IHRoYXQgb3ZlcmZsb3dzIHNvIHRoZSB1c2VyIGtub3dzIHRoZXJlJ3MgbW9yZS5cbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBkb2Vzbid0IGhhbmRsZSBpbnRlcmFjdGl2aXR5LlxuICpcbiAqIFRoZSBjb21wb25lbnQgbmVlZHMgdG8ga25vdyB0aGUgY29sb3IgaXQgc2hvdWxkIGZhZGUgdG8sIHdoaWNoIGl0IHRyaWVzIHRvXG4gKiBpbmZlciBmcm9tIHRoZSBiYWNrZ3JvdW5kIGNvbG9yLiBJbiBzb21lIHNpdHVhdGlvbnMsIHRoaXMgbWF5IG5vdCB3b3JrLCBpblxuICogd2hpY2ggY2FzZSB5b3UgY2FuIGV4cGxpY2l0bHkgc2V0IHRoZSBmYWRlQ29sb3IgYXR0cmlidXRlLlxuICpcbiAqIFRoZSBjb21wb25lbnQgY3VycmVudGx5IGFsd2F5cyBkaXNwbGF5cyB0aGUgZmFkZSwgZXZlbiBpZiB0aGUgY29tcG9uZW50J3NcbiAqIGNvbnRlbnQgaXMgc2hvcnQgZW5vdWdoIHRvIGZpdCBjb21wbGV0ZWx5IGluIHZpZXcuXG4gKlxuICogQGV4dGVuZHMgRWxlbWVudEJhc2VcbiAqL1xuY2xhc3MgRmFkZU92ZXJmbG93IGV4dGVuZHMgRWxlbWVudEJhc2Uge1xuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGlmIChzdXBlci5jb25uZWN0ZWRDYWxsYmFjaykgeyBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpOyB9XG4gICAgaWYgKHRoaXMuZmFkZUNvbG9yID09IG51bGwpIHtcbiAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgY29sb3Igb2YgdGhlIGZhZGUuXG4gICAqXG4gICAqIFRoZSBmYWRlIGNvbG9yIHNob3VsZCBtYXRjaCB0aGUgYmFja2dyb3VuZCBjb2xvci4gVGhlIGNvbXBvbmVudCBkb2VzIGl0c1xuICAgKiBiZXN0IHRvIGluZmVyIHRoZSBiYWNrZ3JvdW5kIGNvbG9yLCBidXQgaW4gc29tZSBzaXR1YXRpb25zLCB0aGF0IG1heSBub3RcbiAgICogd29yay4gSW4gdGhvc2UgY2FzZXMsIHlvdSBjYW4gbWFudWFsbHkgaWRlbnRpZnkgdGhlIGJhY2tncm91bmQgY29sb3IuXG4gICAqIFRoaXMgc2hvdWxkIGJlIGEgc29saWQgY29sb3IuXG4gICAqXG4gICAqIEBhdHRyaWJ1dGUgZmFkZUNvbG9yXG4gICAqIEBkZWZhdWx0IHdoaXRlXG4gICAqL1xuICBnZXQgZmFkZUNvbG9yKCkge1xuICAgIHJldHVybiB0aGlzW2ZhZGVDb2xvclN5bWJvbF07XG4gIH1cbiAgc2V0IGZhZGVDb2xvcih2YWx1ZSkge1xuICAgIHRoaXNbZmFkZUNvbG9yU3ltYm9sXSA9IHZhbHVlO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgbGV0IHJnYiA9IGV4dHJhY3RSZ2JWYWx1ZXModmFsdWUpO1xuICAgICAgaWYgKHJnYikge1xuICAgICAgICBsZXQgZmFkZUNvbG9yVHJhbnNwYXJlbnQgPSBgcmdiYSgke3JnYi5yfSwke3JnYi5nfSwke3JnYi5ifSwwKWA7XG4gICAgICAgIGxldCBncmFkaWVudCA9IGBsaW5lYXItZ3JhZGllbnQoJHtmYWRlQ29sb3JUcmFuc3BhcmVudH0gMCUsICR7dmFsdWV9IDEwMCUpYDtcbiAgICAgICAgdGhpcy4kLmZhZGUuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gZ3JhZGllbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEluZmVyIHRoZSBmYWRlIGNvbG9yIGZyb20gYmFja2dyb3VuZCBjb2xvci4gSWYgeW91IGhhdmUgcHJvZ3JhbW1hdGljYWxseVxuICAgKiBjaGFuZ2VkIHRoZSBjb2xvciBiZWhpbmQgdGhlIGNvbXBvbmVudCwgeW91IGNhbiBpbnZva2UgdGhpcyBtZXRob2QgdG8gaGF2ZVxuICAgKiB0aGUgY29tcG9uZW50IHRyeSB0byBwaWNrIHVwIHRoZSBuZXcgYmFja2dyb3VuZCBjb2xvci5cbiAgICovXG4gIHJlZnJlc2goKSB7XG4gICAgLy8gVE9ETzogQXV0b21hdGljYWxseSBoaWRlIHRoZSBmYWRlIGlmIGFsbCB0aGUgY29udGVudCBjYW4gYmUgc2Vlbi5cbiAgICB0aGlzLmZhZGVDb2xvciA9IGZpbmRCYWNrZ3JvdW5kQ29sb3IodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogVHJ1ZSBpZiB0aGUgY29tcG9uZW50IHNob3VsZCBzaG93IHRoZSBmYWRlIHRvIHRoZSBiYWNrZ3JvdW5kIGNvbG9yLlxuICAgKlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKi9cbiAgZ2V0IHNob3dGYWRlKCkge1xuICAgIHJldHVybiB0aGlzLiQuZmFkZS5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZSc7XG4gIH1cbiAgc2V0IHNob3dGYWRlKHZhbHVlKSB7XG4gICAgdGhpcy4kLmZhZGUuc3R5bGUuZGlzcGxheSA9IHZhbHVlID8gJycgOiAnbm9uZSc7XG4gIH1cblxuICBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cblxuICAgICAgI2ZhZGUge1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGhlaWdodDogM2VtO1xuICAgICAgICBtYXgtaGVpZ2h0OiA1MCU7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyAvKiBMZXRzIHVzZXIgaW50ZXJhY3Qgd2l0aCBjb250ZW50IHRocm91Z2ggdGhlIGZhZGUuICovXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGlkPVwiZmFkZVwiPjwvZGl2PlxuICAgICAgPHNsb3Q+PC9zbG90PlxuICAgIGA7XG4gIH1cblxufVxuXG5cbi8vIFJldHVybiB0aGUgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgZ2l2ZW4gZWxlbWVudC4gSWYgdGhlIGNvbG9yIGlzXG4vLyBcInRyYW5zcGFyZW50XCIgKHRoZSBkZWZhdWx0IGluIE1vemlsbGEgYW5kIElFKSBvciBcInJnYmEoMCwgMCwgMCwgMClcIiAodGhlXG4vLyBkZWZhdWx0IHRyYW5zcGFyZW50IHZhbHVlIGluIEJsaW5rIGFuZCBXZWJraXQpLCB3YWxrIHVwIHRoZSBwYXJlbnQgY2hhaW5cbi8vIHVudGlsIGEgbm9uLXRyYW5zcGFyZW50IGNvbG9yIGlzIGZvdW5kLlxuZnVuY3Rpb24gZmluZEJhY2tncm91bmRDb2xvcihlbGVtZW50KSB7XG4gIGlmIChlbGVtZW50ID09IG51bGwgfHwgdHlwZW9mIGVsZW1lbnQuc3R5bGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gVGhpcyBlbGVtZW50IGhhcyBubyBiYWNrZ3JvdW5kLCBhc3N1bWUgd2hpdGUuXG4gICAgcmV0dXJuICdyZ2IoMjU1LDI1NSwyNTUpJztcbiAgfVxuICBsZXQgYmFja2dyb3VuZENvbG9yID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5iYWNrZ3JvdW5kQ29sb3I7XG4gIGlmIChiYWNrZ3JvdW5kQ29sb3IgPT09ICd0cmFuc3BhcmVudCcgfHwgYmFja2dyb3VuZENvbG9yID09PSAncmdiYSgwLCAwLCAwLCAwKScpIHtcbiAgICByZXR1cm4gZmluZEJhY2tncm91bmRDb2xvcihlbGVtZW50LnBhcmVudE5vZGUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBiYWNrZ3JvdW5kQ29sb3I7XG4gIH1cbn1cblxuXG4vLyBSZXR1cm4gdGhlIGluZGl2aWR1YWwgUkdCIHZhbHVlcyBmcm9tIGEgQ1NTIGNvbG9yIHN0cmluZy5cbmZ1bmN0aW9uIGV4dHJhY3RSZ2JWYWx1ZXMocmdiU3RyaW5nKSB7XG4gIGxldCByZ2JSZWdleCA9IC9yZ2JhP1xcKFxccyooXFxkKylcXHMqLFxccyooXFxkKylcXHMqLFxccyooXFxkKylcXHMqKD86LFxccypbXFxkXFwuXStcXHMqKT9cXCkvO1xuICBsZXQgbWF0Y2ggPSByZ2JSZWdleC5leGVjKHJnYlN0cmluZyk7XG4gIGlmIChtYXRjaCkge1xuICAgIHJldHVybiB7XG4gICAgICByOiBwYXJzZUludChtYXRjaFsxXSksXG4gICAgICBnOiBwYXJzZUludChtYXRjaFsyXSksXG4gICAgICBiOiBwYXJzZUludChtYXRjaFszXSlcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdiYXNpYy1mYWRlLW92ZXJmbG93JywgRmFkZU92ZXJmbG93KTtcbmV4cG9ydCBkZWZhdWx0IEZhZGVPdmVyZmxvdztcbiIsImltcG9ydCBFbGVtZW50QmFzZSBmcm9tICcuLi8uLi9iYXNpYy1lbGVtZW50LWJhc2Uvc3JjL0VsZW1lbnRCYXNlJztcbmltcG9ydCBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50IGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQnO1xuaW1wb3J0IENsaWNrU2VsZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NsaWNrU2VsZWN0aW9uJztcbmltcG9ydCBDb250ZW50QXNJdGVtcyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Db250ZW50QXNJdGVtcyc7XG5pbXBvcnQgRGlyZWN0aW9uU2VsZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0RpcmVjdGlvblNlbGVjdGlvbic7XG5pbXBvcnQgR2VuZXJpYyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9HZW5lcmljJztcbmltcG9ydCBLZXlib2FyZCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9LZXlib2FyZCc7XG5pbXBvcnQgS2V5Ym9hcmREaXJlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvS2V5Ym9hcmREaXJlY3Rpb24nO1xuaW1wb3J0IEtleWJvYXJkUGFnZWRTZWxlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvS2V5Ym9hcmRQYWdlZFNlbGVjdGlvbic7XG5pbXBvcnQgS2V5Ym9hcmRQcmVmaXhTZWxlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvS2V5Ym9hcmRQcmVmaXhTZWxlY3Rpb24nO1xuaW1wb3J0IFNlbGVjdGlvbkFyaWFBY3RpdmUgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2VsZWN0aW9uQXJpYUFjdGl2ZSc7XG5pbXBvcnQgU2VsZWN0aW9uSGlnaGxpZ2h0IGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NlbGVjdGlvbkhpZ2hsaWdodCc7XG5pbXBvcnQgU2VsZWN0aW9uSW5WaWV3IGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NlbGVjdGlvbkluVmlldyc7XG5pbXBvcnQgU2luZ2xlU2VsZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NpbmdsZVNlbGVjdGlvbic7XG5cblxuLyoqXG4gKiBBIHNpbmdsZS1zZWxlY3Rpb24gbGlzdCBib3ggdGhhdCBzdXBwb3J0cyBzZWxlY3Rpb24gaGlnaGxpZ2h0aW5nICh1c2luZyB0aGVcbiAqIHN5c3RlbSBoaWdobGlnaHQgY29sb3IpIGFuZCBrZXlib2FyZCBuYXZpZ2F0aW9uLlxuICpcbiAqIFtMaXZlIGRlbW9dKGh0dHA6Ly9iYXNpY3dlYmNvbXBvbmVudHMub3JnL2Jhc2ljLXdlYi1jb21wb25lbnRzL3BhY2thZ2VzL2Jhc2ljLWxpc3QtYm94LylcbiAqXG4gKiBUaGUgdXNlciBjYW4gc2VsZWN0IGFuIGl0ZW0gd2l0aCB0aGUgbW91c2UvdG91Y2ggb3Iga2V5Ym9hcmQ6IFVwL0Rvd24sIFBhZ2VcbiAqIFVwL0Rvd24sIEhvbWUvRW5kLlxuICpcbiAqIExpa2Ugb3RoZXIgQmFzaWMgV2ViIENvbXBvbmVudHMsIHRoaXMgY2FuIGhhbmRsZSBkaXN0cmlidXRlZCBjb250ZW50OiB5b3UgY2FuXG4gKiBpbmNsdWRlIGEgY29udGVudCBlbGVtZW50IGluc2lkZSBhIGJhc2ljLWxpc3QtYm94LCBhbmQgdGhlIGxpc3Qgd2lsbCBuYXZpZ2F0ZVxuICogdGhyb3VnaCB0aGUgZGlzdHJpYnV0ZWQgY29udGVudC5cbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBpbmNsdWRlcyBiYXNpYyBBUklBIHN1cHBvcnQgdG8gcHJvdmlkZSBhIHJlYXNvbmFibGUgZGVmYXVsdFxuICogZXhwZXJpZW5jZSwgZS5nLiwgZm9yIHNjcmVlbiByZWFkZXJzLiBUaGUgbGlzdCBjb21wb25lbnQgaXRzZWxmIHdpbGwgYmVcbiAqIGFzc2lnbmVkIGFuIGFwcHJvcHJpYXRlIEFSSUEgcm9sZSAoZGVmYXVsdCBpcyBcImxpc3Rib3hcIikuIFRoZSBJRCBvZiB0aGVcbiAqIHNlbGVjdGVkIGl0ZW0gd2lsbCBiZSByZWZsZWN0ZWQgaW4gYW4gXCJhcmlhLWFjdGl2ZWRlc2NlbmRhbnRcIiBhdHRyaWJ1dGVcbiAqIGFwcGxpZWQgdG8gdGhlIGxpc3QuIFRvIHN1cHBvcnQgdGhpcyBmZWF0dXJlLCBhbGwgaXRlbXMgaW4gdGhlIGxpc3QgbmVlZFxuICogdW5pcXVlIElEcy4gSWYgYW4gaXRlbSBkb2VzIG5vdCBoYXZlIGFuIElELCBiYXNpYy1saXN0LWJveCB3aWxsIGF1dG9tYXRpY2FsbHlcbiAqIGFzc2lnbiBhIGRlZmF1bHQgSUQuXG4gKlxuICogVGhlIGtleWJvYXJkIGludGVyYWN0aW9uIG1vZGVsIGdlbmVyYWxseSBmb2xsb3dzIHRoYXQgb2YgTWljcm9zb2Z0IFdpbmRvd3MnXG4gKiBsaXN0IGJveGVzIGluc3RlYWQgb2YgdGhvc2UgaW4gT1MgWDpcbiAqXG4gKiAqIFRoZSBQYWdlIFVwL0Rvd24gYW5kIEhvbWUvRW5kIGtleXMgYWN0dWFsbHkgbW92ZSB0aGUgc2VsZWN0aW9uLCByYXRoZXIgdGhhblxuICogICBqdXN0IHNjcm9sbGluZyB0aGUgbGlzdC4gVGhlIGZvcm1lciBiZWhhdmlvciBzZWVtcyBtb3JlIGdlbmVyYWxseSB1c2VmdWxcbiAqICAgZm9yIGtleWJvYXJkIHVzZXJzLlxuICpcbiAqICogUHJlc3NpbmcgUGFnZSBVcC9Eb3duIHdpbGwgbW92ZSB0aGUgc2VsZWN0aW9uIHRvIHRoZSB0b3Btb3N0L2JvdHRvbW1vc3RcbiAqICAgdmlzaWJsZSBpdGVtIGlmIHRoZSBzZWxlY3Rpb24gaXMgbm90IGFscmVhZHkgdGhlcmUuIFRoZXJlYWZ0ZXIsIHRoZSBrZXlcbiAqICAgd2lsbCBtb3ZlIHRoZSBzZWxlY3Rpb24gdXAvZG93biBieSBhIHBhZ2UsIGFuZCAocGVyIHRoZSBhYm92ZSBwb2ludCkgbWFrZVxuICogICB0aGUgc2VsZWN0ZWQgaXRlbSB2aXNpYmxlLlxuICpcbiAqIFByb2dyYW1tYXRpY2FsbHkgc2VsZWN0aW5nIGFuIGl0ZW0gKGJ5IHNldHRpbmcgdGhlIHNlbGVjdGVkIHByb3BlcnR5KSBzY3JvbGxzXG4gKiB0aGUgaXRlbSBpbnRvIHZpZXcuXG4gKlxuICogVGhlIHVzZXIgY2FuIGFsc28gc2VsZWN0IGFuIGl0ZW0gYnkgdHlwaW5nIHRoZSBiZWdpbm5pbmcgb2YgYW4gaXRlbSdzIHRleHQuXG4gKlxuICogQGV4dGVuZHMgRWxlbWVudEJhc2VcbiAqIEBtaXhlcyBDbGlja1NlbGVjdGlvblxuICogQG1peGVzIENvbnRlbnRBc0l0ZW1zXG4gKiBAbWl4ZXMgRGlyZWN0aW9uU2VsZWN0aW9uXG4gKiBAbWl4ZXMgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudFxuICogQG1peGVzIEdlbmVyaWNcbiAqIEBtaXhlcyBLZXlib2FyZFxuICogQG1peGVzIEtleWJvYXJkRGlyZWN0aW9uXG4gKiBAbWl4ZXMgS2V5Ym9hcmRQYWdlZFNlbGVjdGlvblxuICogQG1peGVzIEtleWJvYXJkUHJlZml4U2VsZWN0aW9uXG4gKiBAbWl4ZXMgU2VsZWN0aW9uQXJpYUFjdGl2ZVxuICogQG1peGVzIFNlbGVjdGlvbkhpZ2hsaWdodFxuICogQG1peGVzIFNlbGVjdGlvbkluVmlld1xuICogQG1peGVzIFNpbmdsZVNlbGVjdGlvblxuICovXG5jbGFzcyBMaXN0Qm94IGV4dGVuZHMgRWxlbWVudEJhc2UuY29tcG9zZShcbiAgQ2xpY2tTZWxlY3Rpb24sXG4gIENvbnRlbnRBc0l0ZW1zLFxuICBEaXJlY3Rpb25TZWxlY3Rpb24sXG4gIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQsXG4gIEdlbmVyaWMsXG4gIEtleWJvYXJkLFxuICBLZXlib2FyZERpcmVjdGlvbixcbiAgS2V5Ym9hcmRQYWdlZFNlbGVjdGlvbixcbiAgS2V5Ym9hcmRQcmVmaXhTZWxlY3Rpb24sXG4gIFNlbGVjdGlvbkFyaWFBY3RpdmUsXG4gIFNlbGVjdGlvbkhpZ2hsaWdodCxcbiAgU2VsZWN0aW9uSW5WaWV3LFxuICBTaW5nbGVTZWxlY3Rpb25cbikge1xuXG4gIGdldCBkZWZhdWx0cygpIHtcbiAgICBsZXQgZGVmYXVsdHMgPSBzdXBlci5kZWZhdWx0cyB8fCB7fTtcbiAgICBkZWZhdWx0cy5uYXZpZ2F0aW9uQXhpcyA9ICd2ZXJ0aWNhbCc7XG4gICAgcmV0dXJuIGRlZmF1bHRzO1xuICB9XG5cbiAgZ2V0IHNjcm9sbFRhcmdldCgpIHtcbiAgICByZXR1cm4gdGhpcy4kLml0ZW1zQ29udGFpbmVyO1xuICB9XG5cbiAgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBgXG4gICAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAgICAgfVxuXG4gICAgICBbdGFyZ2V0PVwiY2hpbGRcIl0ge1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC13ZWJraXQtZmxleDogMTtcbiAgICAgICAgZmxleDogMTtcbiAgICAgIH1cblxuICAgICAgI2l0ZW1zQ29udGFpbmVyIHtcbiAgICAgICAgLXdlYmtpdC1mbGV4OiAxO1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDsgLyogZm9yIG1vbWVudHVtIHNjcm9sbGluZyAqL1xuICAgICAgfVxuXG4gICAgICAvKiBHZW5lcmljIGFwcGVhcmFuY2UgKi9cbiAgICAgIDpob3N0KFtnZW5lcmljPVwiXCJdKSB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2dlbmVyaWM9XCJcIl0pICNpdGVtc0NvbnRhaW5lciA6OnNsb3R0ZWQoKikge1xuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgIHBhZGRpbmc6IDAuMjVlbTtcbiAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgaWQ9XCJpdGVtc0NvbnRhaW5lclwiIHJvbGU9XCJub25lXCI+XG4gICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRleHQgY29udGVudCBvZiB0aGUgc2VsZWN0ZWQgaXRlbS5cbiAgICpcbiAgICogU2V0dGluZyB0aGlzIHZhbHVlIHRvIGEgc3RyaW5nIHdpbGwgYXR0ZW1wdCB0byBzZWxlY3QgdGhlIGZpcnN0IGxpc3QgaXRlbVxuICAgKiB3aG9zZSB0ZXh0IGNvbnRlbnQgbWF0Y2ggdGhhdCBzdHJpbmcuIFNldHRpbmcgdGhpcyB0byBhIHN0cmluZyBub3QgbWF0Y2hpbmdcbiAgICogYW55IGxpc3QgaXRlbSB3aWxsIHJlc3VsdCBpbiBubyBzZWxlY3Rpb24uXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRJdGVtID09IG51bGwgfHwgdGhpcy5zZWxlY3RlZEl0ZW0udGV4dENvbnRlbnQgPT0gbnVsbCA/XG4gICAgICAnJyA6XG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbS50ZXh0Q29udGVudDtcbiAgfVxuICBzZXQgdmFsdWUodGV4dCkge1xuXG4gICAgbGV0IGN1cnJlbnRJbmRleCA9IHRoaXMuc2VsZWN0ZWRJbmRleDtcbiAgICBsZXQgbmV3SW5kZXggPSAtMTsgLy8gQXNzdW1lIHdlIHdvbid0IGZpbmQgdGhlIHRleHQuXG5cbiAgICAvLyBGaW5kIHRoZSBpdGVtIHdpdGggdGhlIGluZGljYXRlZCB0ZXh0LlxuICAgIGxldCBpdGVtcyA9IHRoaXMuaXRlbXM7XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IGl0ZW1zLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaXRlbXNbaV0udGV4dENvbnRlbnQgPT09IHRleHQpIHtcbiAgICAgICAgbmV3SW5kZXggPSBpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobmV3SW5kZXggIT09IGN1cnJlbnRJbmRleCkge1xuICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gbmV3SW5kZXg7XG4gICAgICBsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3ZhbHVlLWNoYW5nZWQnKTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgfVxuICB9XG5cblxuICAvKipcbiAgICogRmlyZXMgd2hlbiB0aGUgbGlzdCdzIHZhbHVlIHByb3BlcnR5IGNoYW5nZXMuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBMaXN0Qm94XG4gICAqIEBldmVudCB2YWx1ZS1jaGFuZ2VkXG4gICAqL1xufVxuXG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYmFzaWMtbGlzdC1ib3gnLCBMaXN0Qm94KTtcbmV4cG9ydCBkZWZhdWx0IExpc3RCb3g7XG4iLCJpbXBvcnQgRWxlbWVudEJhc2UgZnJvbSAnLi4vLi4vYmFzaWMtZWxlbWVudC1iYXNlL3NyYy9FbGVtZW50QmFzZSc7XG5pbXBvcnQgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50JztcbmltcG9ydCBDb250ZW50QXNJdGVtcyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Db250ZW50QXNJdGVtcyc7XG5pbXBvcnQgU2VsZWN0aW9uQXJpYUFjdGl2ZSBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TZWxlY3Rpb25BcmlhQWN0aXZlJztcbmltcG9ydCBTaW5nbGVTZWxlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2luZ2xlU2VsZWN0aW9uJztcbmltcG9ydCBUYXJnZXRJbkNvbGxlY3RpdmUgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvVGFyZ2V0SW5Db2xsZWN0aXZlJztcblxubGV0IGJhc2UgPSBFbGVtZW50QmFzZS5jb21wb3NlKFxuICBDb250ZW50QXNJdGVtcyxcbiAgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCxcbiAgU2VsZWN0aW9uQXJpYUFjdGl2ZSxcbiAgU2luZ2xlU2VsZWN0aW9uLFxuICBUYXJnZXRJbkNvbGxlY3RpdmVcbik7XG5cblxuLyoqXG4gKiBTaG93cyBleGFjdGx5IG9uZSBjaGlsZCBlbGVtZW50IGF0IGEgdGltZS4gVGhpcyBjYW4gYmUgdXNlZnVsLCBmb3IgZXhhbXBsZSxcbiAqIGlmIGEgZ2l2ZW4gVUkgZWxlbWVudCBoYXMgbXVsdGlwbGUgbW9kZXMgdGhhdCBwcmVzZW50IHN1YnN0YW50aWFsbHkgZGlmZmVyZW50XG4gKiBlbGVtZW50cy5cbiAqXG4gKiBUaGUgdHJhbnNpdGlvbiBiZXR3ZWVuIGNoaWxkIGVsZW1lbnRzIGlzIGluc3RhbnRlbm91cy4gSWYgeW91J2QgbGlrZSB0aGVcbiAqIHRyYW5zaXRpb24gdG8gYmUgYWNjb21wYW5pZWQgYnkgdmlzaWJsZSBhbmltYXRlZCBlZmZlY3RzLCBzZWVcbiAqIFtiYXNpYy1hbmltYXRpb24tc3RhZ2VdKC4uL2Jhc2ljLWFuaW1hdGlvbi1zdGFnZSkuXG4gKlxuICogVGhpcyBjb21wb25lbnQgZG9lc24ndCBwcm92aWRlIGFueSBVSSBmb3IgY2hhbmdpbmcgd2hpY2ggbW9kZSBpcyBzaG93bi5cbiAqXG4gKiBAZXh0ZW5kcyBFbGVtZW50QmFzZVxuICogQG1peGVzIENvbnRlbnRBc0l0ZW1zXG4gKiBAbWl4ZXMgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudFxuICogQG1peGVzIFNlbGVjdGlvbkFyaWFBY3RpdmVcbiAqIEBtaXhlcyBTaW5nbGVTZWxlY3Rpb25cbiAqIEBtaXhlcyBUYXJnZXRJbkNvbGxlY3RpdmVcbiAqL1xuY2xhc3MgTW9kZXMgZXh0ZW5kcyBiYXNlIHtcblxuICBhcHBseVNlbGVjdGlvbihpdGVtLCBzZWxlY3RlZCkge1xuICAgIGlmIChzdXBlci5hcHBseVNlbGVjdGlvbikgeyBzdXBlci5hcHBseVNlbGVjdGlvbihpdGVtLCBzZWxlY3RlZCk7IH1cbiAgICBpdGVtLnN0eWxlLmRpc3BsYXkgPSBzZWxlY3RlZCA/ICcnIDogJ25vbmUnO1xuICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICFzZWxlY3RlZCk7XG4gIH1cblxuICBnZXQgZGVmYXVsdHMoKSB7XG4gICAgbGV0IGRlZmF1bHRzID0gc3VwZXIuZGVmYXVsdHMgfHwge307XG4gICAgZGVmYXVsdHMuc2VsZWN0aW9uUmVxdWlyZWQgPSB0cnVlO1xuICAgIHJldHVybiBkZWZhdWx0cztcbiAgfVxuXG59XG5cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdiYXNpYy1tb2RlcycsIE1vZGVzKTtcbmV4cG9ydCBkZWZhdWx0IE1vZGVzO1xuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9jcmVhdGVTeW1ib2wnO1xuaW1wb3J0IEVsZW1lbnRCYXNlIGZyb20gJy4uLy4uL2Jhc2ljLWVsZW1lbnQtYmFzZS9zcmMvRWxlbWVudEJhc2UnO1xuaW1wb3J0IENvbnRlbnRGaXJzdENoaWxkVGFyZ2V0IGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NvbnRlbnRGaXJzdENoaWxkVGFyZ2V0JztcbmltcG9ydCBEaXJlY3Rpb25TZWxlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlyZWN0aW9uU2VsZWN0aW9uJztcbmltcG9ydCBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50IGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQnO1xuaW1wb3J0IEtleWJvYXJkIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0tleWJvYXJkJztcbmltcG9ydCBLZXlib2FyZERpcmVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9LZXlib2FyZERpcmVjdGlvbic7XG5pbXBvcnQgcmVuZGVyQXJyYXlBc0VsZW1lbnRzIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL3JlbmRlckFycmF5QXNFbGVtZW50cyc7XG5pbXBvcnQgU2luZ2xlU2VsZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NpbmdsZVNlbGVjdGlvbic7XG5pbXBvcnQgVGFyZ2V0SW5Db2xsZWN0aXZlIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1RhcmdldEluQ29sbGVjdGl2ZSc7XG5pbXBvcnQgVGFyZ2V0U2VsZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1RhcmdldFNlbGVjdGlvbic7XG5pbXBvcnQgdG9nZ2xlQ2xhc3MgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvdG9nZ2xlQ2xhc3MnO1xuXG5cbi8vIFN5bWJvbHMgZm9yIHByaXZhdGUgZGF0YSBtZW1iZXJzIG9uIGFuIGVsZW1lbnQuXG5jb25zdCBzZWxlY3RlZEZyYWN0aW9uQ2hhbmdlZExpc3RlbmVyU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdzZWxlY3RlZEZyYWN0aW9uQ2hhbmdlZExpc3RlbmVyJyk7XG5cblxubGV0IGJhc2UgPSBFbGVtZW50QmFzZS5jb21wb3NlKFxuICBDb250ZW50Rmlyc3RDaGlsZFRhcmdldCxcbiAgRGlyZWN0aW9uU2VsZWN0aW9uLFxuICBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50LFxuICBLZXlib2FyZCxcbiAgS2V5Ym9hcmREaXJlY3Rpb24sXG4gIFNpbmdsZVNlbGVjdGlvbixcbiAgVGFyZ2V0SW5Db2xsZWN0aXZlLFxuICBUYXJnZXRTZWxlY3Rpb25cbik7XG5cbi8qKlxuICogUHJlc2VudHMgYSBzZXQgb2Ygc21hbGwgZG90cyB0byBzaG93IGxpc3QgaXRlbSBjb3VudCBhbmQgc2VsZWN0IGxpc3QgaXRlbXMuXG4gKlxuICogWW91IGNhbiBzZWUgYSBbbGl2ZSBkZW1vXShodHRwOi8vYmFzaWN3ZWJjb21wb25lbnRzLm9yZy9iYXNpYy13ZWItY29tcG9uZW50cy9wYWNrYWdlcy9iYXNpYy1jYXJvdXNlbC9jYXJvdXNlbFdpdGhEb3RzLmh0bWwpXG4gKiBvZiB0aGlzIGNvbXBvbmVudCBhcHBsaWVkIHRvIGEgY2Fyb3VzZWwuXG4gKlxuICogVGhlcmUgd2lsbCBiZSBvbmUgZG90IGZvciBlYWNoIGl0ZW0sIGFuZCB0aGUgZG90IGZvciB0aGUgY3VycmVudGx5IHNlbGVjdGVkXG4gKiBpdGVtIHdpbGwgYmUgc2hvd24gc2VsZWN0ZWQuXG4gKlxuICogVHlwaWNhbCB1c2FnZTpcbiAqXG4gKiAgICAgPGJhc2ljLXBhZ2UtZG90cz5cbiAqICAgICAgIDxiYXNpYy1jYXJvdXNlbD5cbiAqICAgICAgICAgLi4uIGltYWdlcywgZXRjLiAuLi5cbiAqICAgICAgIDwvYmFzaWMtY2Fyb3VzZWw+XG4gKiAgICAgPC9iYXNpYy1wYWdlLWRvdHM+XG4gKlxuICogQWx0aG91Z2ggdGhlIGRvdHMgYXJlIHF1aXRlIHNtYWxsIGJ5IGRlZmF1bHQsIGNsaWNraW5nL3RhcHBpbmcgYSBkb3Qgd2lsbFxuICogd2lsbCBzZWxlY3QgdGhlIGNvcnJlc3BvbmRpbmcgbGlzdCBpdGVtLlxuICpcbiAqIEBleHRlbmRzIEVsZW1lbnRCYXNlXG4gKiBAbWl4ZXMgQ29udGVudEZpcnN0Q2hpbGRUYXJnZXRcbiAqIEBtaXhlcyBEaXJlY3Rpb25TZWxlY3Rpb25cbiAqIEBtaXhlcyBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50XG4gKiBAbWl4ZXMgS2V5Ym9hcmRcbiAqIEBtaXhlcyBLZXlib2FyZERpcmVjdGlvblxuICogQG1peGVzIFNpbmdsZVNlbGVjdGlvblxuICogQG1peGVzIFRhcmdldEluQ29sbGVjdGl2ZVxuICogQG1peGVzIFRhcmdldFNlbGVjdGlvblxuICovXG5jbGFzcyBQYWdlRG90cyBleHRlbmRzIGJhc2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLiQuZG90cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgIGxldCBkb3QgPSBldmVudC50YXJnZXQ7XG4gICAgICBsZXQgZG90SW5kZXggPSB0aGlzLmRvdHMuaW5kZXhPZihkb3QpO1xuICAgICAgaWYgKGRvdEluZGV4ID49IDApIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gZG90SW5kZXg7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhcHBseVNlbGVjdGlvbihpdGVtLCBzZWxlY3RlZCkge1xuICAgIGlmIChzdXBlci5hcHBseVNlbGVjdGlvbikgeyBzdXBlci5hcHBseVNlbGVjdGlvbihpdGVtLCBzZWxlY3RlZCk7IH1cbiAgICBsZXQgaW5kZXggPSB0aGlzLml0ZW1zLmluZGV4T2YoaXRlbSk7XG4gICAgLy8gU2VlIGlmIHRoZSBjb3JyZXNwb25kaW5nIGRvdCBoYXMgYWxyZWFkeSBiZWVuIGNyZWF0ZWQuXG4gICAgLy8gSWYgbm90LCB0aGUgY29ycmVjdCBkb3Qgd2lsbCBiZSBzZWxlY3RlZCB3aGVuIGl0IGdldHMgY3JlYXRlZC5cbiAgICBsZXQgZG90cyA9IHRoaXMuZG90cztcbiAgICBpZiAoZG90cyAmJiBkb3RzLmxlbmd0aCA+IGluZGV4KSB7XG4gICAgICBsZXQgZG90ID0gdGhpcy5kb3RzW2luZGV4XTtcbiAgICAgIGlmIChkb3QpIHtcbiAgICAgICAgdG9nZ2xlQ2xhc3MoZG90LCAnc2VsZWN0ZWQnLCBzZWxlY3RlZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0IGRlZmF1bHRzKCkge1xuICAgIGxldCBkZWZhdWx0cyA9IHN1cGVyLmRlZmF1bHRzIHx8IHt9O1xuICAgIGRlZmF1bHRzLm5hdmlnYXRpb25BeGlzID0gJ2hvcml6b250YWwnO1xuICAgIHJldHVybiBkZWZhdWx0cztcbiAgfVxuXG4gIGdldCBkb3RzKCkge1xuICAgIHJldHVybiBbXS5zbGljZS5jYWxsKHRoaXMuJC5kb3RzLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kb3QnKSk7XG4gIH1cblxuICBpdGVtc0NoYW5nZWQoKSB7XG4gICAgaWYgKHN1cGVyLml0ZW1zQ2hhbmdlZCkgeyBzdXBlci5pdGVtc0NoYW5nZWQoKTsgfVxuICAgIHJlbmRlckFycmF5QXNFbGVtZW50cyh0aGlzLml0ZW1zLCB0aGlzLiQuZG90cywgKGl0ZW0sIGVsZW1lbnQpID0+IHtcbiAgICAgIC8vIFdlIGRvbid0IHVzZSB0aGUgaXRlbSBwYXJhbWV0ZXIsIGJlY2F1c2UgYW55IGl0ZW0gd2lsbCBwcm9kdWNlIGFuXG4gICAgICAvLyBpZGVudGljYWwgY29ycmVzcG9uZGluZyBkb3QuXG4gICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RvdCcpO1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3N0eWxlLXNjb3BlJyk7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYmFzaWMtcGFnZS1kb3RzJyk7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdyb2xlJywgJ25vbmUnKTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5zZWxlY3RlZEl0ZW1DaGFuZ2VkKCk7ICAvLyBJbiBjYXNlIHBvc2l0aW9uIG9mIHNlbGVjdGVkIGl0ZW0gbW92ZWQuXG4gIH1cblxuICAvKipcbiAgICogVGhlIGRpc3RhbmNlIHRoZSB1c2VyIGhhcyBtb3ZlZCB0aGUgZmlyc3QgdG91Y2hwb2ludCBzaW5jZSB0aGUgYmVnaW5uaW5nXG4gICAqIG9mIGEgZHJhZywgZXhwcmVzc2VkIGFzIGEgZnJhY3Rpb24gb2YgdGhlIGVsZW1lbnQncyB3aWR0aC5cbiAgICpcbiAgICogQHR5cGUgbnVtYmVyXG4gICAqL1xuICBnZXQgc2VsZWN0ZWRGcmFjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXQgJiYgdGhpcy50YXJnZXQuc2VsZWN0ZWRGcmFjdGlvbjtcbiAgfVxuICBzZXQgc2VsZWN0ZWRGcmFjdGlvbih2YWx1ZSkge1xuICAgIGlmICgnc2VsZWN0ZWRGcmFjdGlvbicgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRGcmFjdGlvbiA9IHZhbHVlOyB9XG4gICAgaWYgKHRoaXMudGFyZ2V0ICYmIHRoaXMudGFyZ2V0LnNlbGVjdGVkRnJhY3Rpb24gIT09IHZhbHVlKSB7XG4gICAgICB0aGlzLnRhcmdldC5zZWxlY3RlZEZyYWN0aW9uID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbmRlclRyYW5zaXRpb24odGhpcywgdGhpcy5zZWxlY3RlZEluZGV4LCB2YWx1ZSk7XG4gICAgfVxuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3NlbGVjdGVkLWZyYWN0aW9uLWNoYW5nZWQnKSk7XG4gIH1cblxuICBzZWxlY3RlZEl0ZW1DaGFuZ2VkKCkge1xuICAgIGlmIChzdXBlci5zZWxlY3RlZEl0ZW1DaGFuZ2VkKSB7IHN1cGVyLnNlbGVjdGVkSXRlbUNoYW5nZWQoKTsgfVxuICAgIGxldCBzZWxlY3RlZEluZGV4ID0gdGhpcy5zZWxlY3RlZEluZGV4O1xuICAgIHRoaXMuZG90cy5mb3JFYWNoKChkb3QsIGkpID0+IHtcbiAgICAgIHRvZ2dsZUNsYXNzKGRvdCwgJ3NlbGVjdGVkJywgaSA9PT0gc2VsZWN0ZWRJbmRleCk7XG4gICAgfSk7XG4gIH1cblxuICBnZXQgdGFyZ2V0KCkge1xuICAgIHJldHVybiBzdXBlci50YXJnZXQ7XG4gIH1cbiAgc2V0IHRhcmdldChlbGVtZW50KSB7XG4gICAgaWYgKCd0YXJnZXQnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnRhcmdldCA9IGVsZW1lbnQ7IH1cbiAgICBpZiAodGhpc1tzZWxlY3RlZEZyYWN0aW9uQ2hhbmdlZExpc3RlbmVyU3ltYm9sXSkge1xuICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdzZWxlY3RlZC1mcmFjdGlvbi1jaGFuZ2VkJywgdGhpc1tzZWxlY3RlZEZyYWN0aW9uQ2hhbmdlZExpc3RlbmVyU3ltYm9sXSk7XG4gICAgfVxuICAgIHRoaXNbc2VsZWN0ZWRGcmFjdGlvbkNoYW5nZWRMaXN0ZW5lclN5bWJvbF0gPSBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3NlbGVjdGVkLWZyYWN0aW9uLWNoYW5nZWQnLCBldmVudCA9PiB7XG4gICAgICB0aGlzLnNlbGVjdGVkRnJhY3Rpb24gPSBlbGVtZW50LnNlbGVjdGVkRnJhY3Rpb247XG4gICAgfSk7XG4gIH1cblxuICBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgICNkb3RzIHtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgfVxuXG4gICAgICAjY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAtd2Via2l0LWZsZXg6IDE7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICAgIH1cblxuICAgICAgI2NvbnRhaW5lciA6OnNsb3R0ZWQoKikge1xuICAgICAgICAtd2Via2l0LWZsZXg6IDE7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICB9XG5cbiAgICAgIC5kb3Qge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGhlaWdodDogOHB4O1xuICAgICAgICBtYXJnaW46IDdweCA1cHg7XG4gICAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzIGJveC1zaGFkb3cgMC4ycztcbiAgICAgICAgd2lkdGg6IDhweDtcbiAgICAgIH1cblxuICAgICAgLmRvdDpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxcHggM3B4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgICAgIH1cblxuICAgICAgLmRvdC5zZWxlY3RlZCB7XG4gICAgICAgIG9wYWNpdHk6IDAuOTU7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICAuZG90IHtcbiAgICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgaWQ9XCJkb3RzXCI+PC9kaXY+XG4gICAgICA8ZGl2IGlkPVwiY29udGFpbmVyXCIgcm9sZT1cIm5vbmVcIj5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG59XG5cblxuLy8gUmV0dXJuIHRoZSBpbmRleCwgZW5zdXJpbmcgaXQgc3RheXMgYmV0d2VlbiAwIGFuZCB0aGUgZ2l2ZW4gbGVuZ3RoLlxuZnVuY3Rpb24ga2VlcEluZGV4V2l0aGluQm91bmRzKGxlbmd0aCwgaW5kZXgpIHtcbiAgLy8gSGFuZGxlIHBvc3NpYmlsaXR5IG9mIG5lZ2F0aXZlIG1vZC5cbiAgLy8gU2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE4NjE4MjUwLzc2NDcyXG4gIHJldHVybiAoKGluZGV4ICUgbGVuZ3RoKSArIGxlbmd0aCkgJSBsZW5ndGg7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRyYW5zaXRpb24oZWxlbWVudCwgc2VsZWN0ZWRJbmRleCwgc2VsZWN0ZWRGcmFjdGlvbikge1xuICBsZXQgZG90cyA9IGVsZW1lbnQuZG90cztcbiAgaWYgKCFkb3RzIHx8IGRvdHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCBkb3RDb3VudCA9IGRvdHMubGVuZ3RoO1xuICBsZXQgb3BhY2l0eU1pbmltdW0gPSAwLjQ7XG4gIGxldCBvcGFjaXR5TWF4aW11bSA9IDAuOTU7XG4gIGxldCBvcGFjaXR5UmFuZ2UgPSBvcGFjaXR5TWF4aW11bSAtIG9wYWNpdHlNaW5pbXVtO1xuICBsZXQgZnJhY3Rpb25hbEluZGV4ID0gc2VsZWN0ZWRJbmRleCArIHNlbGVjdGVkRnJhY3Rpb247XG4gIGxldCBsZWZ0SW5kZXggPSBNYXRoLmZsb29yKGZyYWN0aW9uYWxJbmRleCk7XG4gIGxldCByaWdodEluZGV4ID0gTWF0aC5jZWlsKGZyYWN0aW9uYWxJbmRleCk7XG4gIGxldCBzZWxlY3Rpb25XcmFwcyA9IGVsZW1lbnQuc2VsZWN0aW9uV3JhcHM7XG4gIGxldCBhd2F5SW5kZXggPSBzZWxlY3RlZEZyYWN0aW9uID49IDAgPyBsZWZ0SW5kZXggOiByaWdodEluZGV4O1xuICBsZXQgdG93YXJkSW5kZXggPSBzZWxlY3RlZEZyYWN0aW9uID49IDAgPyByaWdodEluZGV4IDogbGVmdEluZGV4O1xuICBpZiAoc2VsZWN0aW9uV3JhcHMpIHtcbiAgICBhd2F5SW5kZXggPSBrZWVwSW5kZXhXaXRoaW5Cb3VuZHMoZG90Q291bnQsIGF3YXlJbmRleCk7XG4gICAgdG93YXJkSW5kZXggPSBrZWVwSW5kZXhXaXRoaW5Cb3VuZHMoZG90Q291bnQsIHRvd2FyZEluZGV4KTtcbiAgfVxuICAvLyBTdHVwaWQgSUUgZG9lc24ndCBoYXZlIE1hdGgudHJ1bmMuXG4gIC8vIGxldCB0cnVuY2F0ZWRTZWxlY3RlZEZyYWN0aW9uID0gTWF0aC50cnVuYyhzZWxlY3RlZEZyYWN0aW9uKTtcbiAgbGV0IHRydW5jYXRlZFNlbGVjdGVkRnJhY3Rpb24gPSBzZWxlY3RlZEZyYWN0aW9uIDwgMCA/IE1hdGguY2VpbChzZWxlY3RlZEZyYWN0aW9uKSA6IE1hdGguZmxvb3Ioc2VsZWN0ZWRGcmFjdGlvbik7XG4gIGxldCBwcm9ncmVzcyA9IHNlbGVjdGVkRnJhY3Rpb24gLSB0cnVuY2F0ZWRTZWxlY3RlZEZyYWN0aW9uO1xuICBsZXQgb3BhY2l0eVByb2dyZXNzVGhyb3VnaFJhbmdlID0gTWF0aC5hYnMocHJvZ3Jlc3MpICogb3BhY2l0eVJhbmdlO1xuICBkb3RzLmZvckVhY2goKGRvdCwgaW5kZXgpID0+IHtcbiAgICBsZXQgZG90T3BhY2l0eTtcbiAgICBpZiAoc2VsZWN0ZWRGcmFjdGlvbiA9PT0gMCkge1xuICAgICAgLy8gUmVtb3ZlIGV4cGxpY2l0IG9wYWNpdHkgYW5kIHJlbHkgb24gc3R5bGluZy5cbiAgICAgIGRvdE9wYWNpdHkgPSAnJztcbiAgICB9IGVsc2UgaWYgKGluZGV4ID09PSBhd2F5SW5kZXgpIHtcbiAgICAgIGRvdE9wYWNpdHkgPSBvcGFjaXR5TWF4aW11bSAtIG9wYWNpdHlQcm9ncmVzc1Rocm91Z2hSYW5nZTtcbiAgICB9IGVsc2UgaWYgKGluZGV4ID09PSB0b3dhcmRJbmRleCkge1xuICAgICAgZG90T3BhY2l0eSA9IG9wYWNpdHlNaW5pbXVtICsgb3BhY2l0eVByb2dyZXNzVGhyb3VnaFJhbmdlO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb3RPcGFjaXR5ID0gb3BhY2l0eU1pbmltdW07XG4gICAgfVxuICAgIGRvdC5zdHlsZS5vcGFjaXR5ID0gZG90T3BhY2l0eTtcbiAgfSk7XG59XG5cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdiYXNpYy1wYWdlLWRvdHMnLCBQYWdlRG90cyk7XG5leHBvcnQgZGVmYXVsdCBQYWdlRG90cztcbiIsImltcG9ydCBFbGVtZW50QmFzZSBmcm9tICcuLi8uLi9iYXNpYy1lbGVtZW50LWJhc2Uvc3JjL0VsZW1lbnRCYXNlJztcbmltcG9ydCBDb250ZW50Rmlyc3RDaGlsZFRhcmdldCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Db250ZW50Rmlyc3RDaGlsZFRhcmdldCc7XG5pbXBvcnQgRGlyZWN0aW9uU2VsZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0RpcmVjdGlvblNlbGVjdGlvbic7XG5pbXBvcnQgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50JztcbmltcG9ydCBLZXlib2FyZCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9LZXlib2FyZCc7XG5pbXBvcnQgS2V5Ym9hcmREaXJlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvS2V5Ym9hcmREaXJlY3Rpb24nO1xuaW1wb3J0IFNpbmdsZVNlbGVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TaW5nbGVTZWxlY3Rpb24nO1xuaW1wb3J0IFRhcmdldEluQ29sbGVjdGl2ZSBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9UYXJnZXRJbkNvbGxlY3RpdmUnO1xuaW1wb3J0IFRhcmdldFNlbGVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9UYXJnZXRTZWxlY3Rpb24nO1xuaW1wb3J0IHRvZ2dsZUNsYXNzIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL3RvZ2dsZUNsYXNzJztcblxuXG5sZXQgYmFzZSA9IEVsZW1lbnRCYXNlLmNvbXBvc2UoXG4gIENvbnRlbnRGaXJzdENoaWxkVGFyZ2V0LFxuICBEaXJlY3Rpb25TZWxlY3Rpb24sXG4gIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQsXG4gIEtleWJvYXJkLFxuICBLZXlib2FyZERpcmVjdGlvbixcbiAgU2luZ2xlU2VsZWN0aW9uLFxuICBUYXJnZXRJbkNvbGxlY3RpdmUsXG4gIFRhcmdldFNlbGVjdGlvblxuKTtcblxuLyoqXG4gKiBBdXhpbGlhcnkgY29tcG9uZW50IGZvciBtYW5hZ2luZyBwbGF5YmFjayBvZiBhIHNsaWRlc2hvdywgYXVkaW8gcGxheWxpc3QsIGV0Yy5cbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBjYW4gYmUgdXNlZCB0byB3cmFwIGEgY29tcG9uZW50IGxpa2VcbiAqIFtiYXNpYy1zbGlkZXNob3ddKC4uL2Jhc2ljLXNsaWRlc2hvdykuIEV4YW1wbGU6XG4gKlxuICogICAgIDxiYXNpYy1wbGF5LWNvbnRyb2xzPlxuICogICAgICAgPGJhc2ljLXNsaWRlc2hvdz5cbiAqICAgICAgICAgLi4uIGltYWdlcywgZXRjLiAuLi5cbiAqICAgICAgIDwvYmFzaWMtc2xpZGVzaG93PlxuICogICAgIDwvYmFzaWMtcGxheS1jb250cm9scz5cbiAqXG4gKiBAZXh0ZW5kcyBFbGVtZW50QmFzZVxuICogQG1peGVzIENvbnRlbnRGaXJzdENoaWxkVGFyZ2V0XG4gKiBAbWl4ZXMgRGlyZWN0aW9uU2VsZWN0aW9uXG4gKiBAbWl4ZXMgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudFxuICogQG1peGVzIEtleWJvYXJkXG4gKiBAbWl4ZXMgS2V5Ym9hcmREaXJlY3Rpb25cbiAqIEBtaXhlcyBTaW5nbGVTZWxlY3Rpb25cbiAqIEBtaXhlcyBUYXJnZXRJbkNvbGxlY3RpdmVcbiAqIEBtaXhlcyBUYXJnZXRTZWxlY3Rpb25cbiAqL1xuY2xhc3MgUGxheUNvbnRyb2xzIGV4dGVuZHMgYmFzZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLiQucHJldmlvdXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICB0aGlzLnNlbGVjdFByZXZpb3VzKCk7XG4gICAgfSk7XG4gICAgdGhpcy4kLnBsYXlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICB0aGlzLnBsYXlpbmcgPSAhdGhpcy5wbGF5aW5nO1xuICAgIH0pO1xuICAgIHRoaXMuJC5uZXh0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgdGhpcy5zZWxlY3ROZXh0KCk7XG4gICAgfSk7XG4gICAgdG9nZ2xlQ2xhc3ModGhpcywgJ3BsYXlpbmcnLCB0aGlzLnBsYXlpbmcpO1xuICB9XG5cbiAga2V5ZG93bihldmVudCkge1xuICAgIGxldCBoYW5kbGVkO1xuXG4gICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICBjYXNlIDMyOiAvKiBTcGFjZSAqL1xuICAgICAgICB0aGlzLnBsYXlpbmcgPSAhdGhpcy5wbGF5aW5nO1xuICAgICAgICBoYW5kbGVkID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgLy8gUHJlZmVyIG1peGluIHJlc3VsdCBpZiBpdCdzIGRlZmluZWQsIG90aGVyd2lzZSB1c2UgYmFzZSByZXN1bHQuXG4gICAgcmV0dXJuIGhhbmRsZWQgfHwgKHN1cGVyLmtleWRvd24gJiYgc3VwZXIua2V5ZG93bihldmVudCkpO1xuICB9XG5cbiAgcGF1c2UoKSB7XG4gICAgaWYgKHRoaXMudGFyZ2V0KSB7XG4gICAgICB0aGlzLnRhcmdldC5wYXVzZSgpO1xuICAgIH1cbiAgfVxuXG4gIHBsYXkoKSB7XG4gICAgaWYgKHRoaXMudGFyZ2V0KSB7XG4gICAgICB0aGlzLnRhcmdldC5wbGF5KCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHBsYXlpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0ICYmIHRoaXMudGFyZ2V0LnBsYXlpbmc7XG4gIH1cbiAgc2V0IHBsYXlpbmcodmFsdWUpIHtcbiAgICBpZiAoJ3BsYXlpbmcnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnBsYXlpbmcgPSB2YWx1ZTsgfVxuICAgIGlmICh0aGlzLnRhcmdldCkge1xuICAgICAgdGhpcy50YXJnZXQucGxheWluZyA9IHZhbHVlO1xuICAgIH1cbiAgICB0b2dnbGVDbGFzcyh0aGlzLCAncGxheWluZycsIHZhbHVlKTtcbiAgfVxuXG4gIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gYFxuICAgICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgI2J1dHRvbnMge1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICB9XG5cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGZpbGw6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgIH1cbiAgICAgIDpob3N0KDpob3ZlcikgYnV0dG9uIHtcbiAgICAgICAgZmlsbDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICAgICAgfVxuICAgICAgYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgZmlsbDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KTtcbiAgICAgIH1cbiAgICAgIGJ1dHRvbjphY3RpdmUge1xuICAgICAgICBmaWxsOiB3aGl0ZTtcbiAgICAgIH1cblxuICAgICAgLmljb24ge1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgfVxuICAgICAgI3BsYXlCdXR0b24gLmljb24ge1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgfVxuXG4gICAgICA6aG9zdCgucGxheWluZykgLnBhdXNlZENvbnRyb2wge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgICAgOmhvc3QoOm5vdCgucGxheWluZykpIC5wbGF5aW5nQ29udHJvbCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgICNjb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC13ZWJraXQtZmxleDogMTtcbiAgICAgICAgZmxleDogMTtcbiAgICAgIH1cblxuICAgICAgI2NvbnRhaW5lciA6OnNsb3R0ZWQoKikge1xuICAgICAgICAtd2Via2l0LWZsZXg6IDE7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGlkPVwiYnV0dG9uc1wiPlxuICAgICAgICA8YnV0dG9uIGlkPVwicHJldmlvdXNCdXR0b25cIj5cbiAgICAgICAgICA8c3ZnIGNsYXNzPVwiaWNvblwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWQgbWVldFwiPlxuICAgICAgICAgICAgPGcgaWQ9XCJza2lwLXByZXZpb3VzXCI+XG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNiA2aDJ2MTJINnptMy41IDZsOC41IDZWNnpcIi8+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGlkPVwicGxheUJ1dHRvblwiPlxuICAgICAgICAgIDxzdmcgY2xhc3M9XCJpY29uIHBsYXlpbmdDb250cm9sXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBtZWV0XCI+XG4gICAgICAgICAgICA8ZyBpZD1cInBhdXNlLWNpcmNsZS1vdXRsaW5lXCI+XG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNOSAxNmgyVjhIOXY4em0zLTE0QzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0wIDE4Yy00LjQxIDAtOC0zLjU5LTgtOHMzLjU5LTggOC04IDggMy41OSA4IDgtMy41OSA4LTggOHptMS00aDJWOGgtMnY4elwiPjwvcGF0aD5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8c3ZnIGNsYXNzPVwiaWNvbiBwYXVzZWRDb250cm9sXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBtZWV0XCI+XG4gICAgICAgICAgICA8ZyBpZD1cInBsYXktY2lyY2xlLW91dGxpbmVcIj5cbiAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMCAxNi41bDYtNC41LTYtNC41djl6TTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgMThjLTQuNDEgMC04LTMuNTktOC04czMuNTktOCA4LTggOCAzLjU5IDggOC0zLjU5IDgtOCA4elwiPjwvcGF0aD5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gaWQ9XCJuZXh0QnV0dG9uXCI+XG4gICAgICAgICAgPHN2ZyBjbGFzcz1cImljb25cIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkIG1lZXRcIj5cbiAgICAgICAgICAgIDxnIGlkPVwic2tpcC1uZXh0XCI+XG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNiAxOGw4LjUtNkw2IDZ2MTJ6TTE2IDZ2MTJoMlY2aC0yelwiLz5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBpZD1cImNvbnRhaW5lclwiIHJvbGU9XCJub25lXCI+XG4gICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxufVxuXG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYmFzaWMtcGxheS1jb250cm9scycsIFBsYXlDb250cm9scyk7XG4iLCJpbXBvcnQgRWxlbWVudEJhc2UgZnJvbSAnLi4vLi4vYmFzaWMtZWxlbWVudC1iYXNlL3NyYy9FbGVtZW50QmFzZSc7XG5pbXBvcnQgQ29udGVudEZpcnN0Q2hpbGRUYXJnZXQgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ29udGVudEZpcnN0Q2hpbGRUYXJnZXQnO1xuaW1wb3J0IERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCc7XG5pbXBvcnQgU2luZ2xlU2VsZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NpbmdsZVNlbGVjdGlvbic7XG5pbXBvcnQgS2V5Ym9hcmQgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvS2V5Ym9hcmQnO1xuaW1wb3J0IEtleWJvYXJkRGlyZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0tleWJvYXJkRGlyZWN0aW9uJztcbmltcG9ydCBUYXJnZXRJbkNvbGxlY3RpdmUgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvVGFyZ2V0SW5Db2xsZWN0aXZlJztcbmltcG9ydCBUYXJnZXRTZWxlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvVGFyZ2V0U2VsZWN0aW9uJztcbmltcG9ydCBUaW1lclNlbGVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9UaW1lclNlbGVjdGlvbic7XG5cblxubGV0IGJhc2UgPSBFbGVtZW50QmFzZS5jb21wb3NlKFxuICBDb250ZW50Rmlyc3RDaGlsZFRhcmdldCxcbiAgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCxcbiAgU2luZ2xlU2VsZWN0aW9uLFxuICBLZXlib2FyZCxcbiAgS2V5Ym9hcmREaXJlY3Rpb24sXG4gIFRhcmdldEluQ29sbGVjdGl2ZSxcbiAgVGFyZ2V0U2VsZWN0aW9uLFxuICBUaW1lclNlbGVjdGlvblxuKTtcblxuXG4vKipcbiAqIEF1eGlsaWFyeSBjb21wb25lbnQgdG8gYWR2YW5jZSBhIHNlbGVjdGlvbiB3aXRoIGEgdGltZXIuXG4gKlxuICogVGhpcyBjb21wb25lbnQgaXMgZ2VuZXJhbGx5IHVzZWQgdG8gd3JhcCBhIGNvbXBvbmVudCBsaWtlXG4gKiBbYmFzaWMtY2Fyb3VzZWxdKC4uL2Jhc2ljLWNhcm91c2VsKSBvciB0aGUgc2ltcGxlclxuICogW2Jhc2ljLXNsaWRpbmctY2Fyb3VzZWxdKC4uL2Jhc2ljLXNsaWRpbmctY2Fyb3VzZWwpIHRvIGFkZCBzbGlkZXNob3dcbiAqIGJlaGF2aW9yLiBGb3IgYSBzdGFuZGFsb25lIHNsaWRlc2hvdyBjb21wb25lbnQsIHNlZVxuICogW2Jhc2ljLXNsaWRlc2hvd10oLi4vYmFzaWMtc2xpZGVzaG93KS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqICAgICA8YmFzaWMtc2xpZGVzaG93LXRpbWVyPlxuICogICAgICAgPGJhc2ljLWNhcm91c2VsPlxuICogICAgICAgICAuLi4gaW1hZ2VzIG9yIG90aGVyIGVsZW1lbnRzIC4uLlxuICogICAgICAgPC9iYXNpYy1jYXJvdXNlbD5cbiAqICAgICA8L2Jhc2ljLXNsaWRlc2hvdy10aW1lcj5cbiAqXG4gKiBUaGUgYmFzaWMtc2xpZGVzaG93LXRpbWVyIGNvbXBvbmVudCBwcm92aWRlcyBubyB2aXNpYmxlIHVzZXIgaW50ZXJmYWNlXG4gKiBlbGVtZW50cywgYW5kIGV4aXN0cyBjaGllZmx5IGFzIGEgY29udmVuaWVuY2UgZm9yIHVzZSBpbiBzY2VuYXJpb3MgbGlrZSB0aGVcbiAqIG9uZSBhYm92ZS4gSWYgeW91J3JlIGRldmVsb3BpbmcgYSBjb21wb25lbnQgdGhhdCB3aWxsIGFsd2F5cyB3YW50IHRvIHByb3ZpZGVcbiAqIHNsaWRlc2hvdyBzZW1hbnRpY3MsIGNvbnNpZGVyIGRpcmVjdGx5IGFwcGx5aW5nIHRoZVxuICogW1RpbWVyU2VsZWN0aW9uXSguLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL2RvY3MvVGltZXJTZWxlY3Rpb24ubWQpIG1peGluXG4gKiB0byB5b3VyIGNvbXBvbmVudC5cbiAqXG4gKiBAZXh0ZW5kcyBFbGVtZW50QmFzZVxuICovXG5jbGFzcyBTbGlkZXNob3dUaW1lciBleHRlbmRzIGJhc2Uge1xuXG4gIGdldCBkZWZhdWx0cygpIHtcbiAgICBsZXQgZGVmYXVsdHMgPSBzdXBlci5kZWZhdWx0cyB8fCB7fTtcbiAgICBkZWZhdWx0cy5wbGF5aW5nID0gdHJ1ZTtcbiAgICBkZWZhdWx0cy5zZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvbiA9IDUwMDtcbiAgICBkZWZhdWx0cy5zZWxlY3Rpb25SZXF1aXJlZCA9IHRydWU7XG4gICAgZGVmYXVsdHMuc2VsZWN0aW9uVGltZXJEdXJhdGlvbiA9IDMwMDA7XG4gICAgcmV0dXJuIGRlZmF1bHRzO1xuICB9XG5cbiAgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBgXG4gICAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgYDtcbiAgfVxuXG59XG5cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdiYXNpYy1zbGlkZXNob3ctdGltZXInLCBTbGlkZXNob3dUaW1lcik7XG4iLCJpbXBvcnQgRWxlbWVudEJhc2UgZnJvbSAnLi4vLi4vYmFzaWMtZWxlbWVudC1iYXNlL3NyYy9FbGVtZW50QmFzZSc7XG5pbXBvcnQgQ29udGVudEFzSXRlbXMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ29udGVudEFzSXRlbXMnO1xuaW1wb3J0IERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCc7XG5pbXBvcnQgRnJhY3Rpb25hbFNlbGVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9GcmFjdGlvbmFsU2VsZWN0aW9uJztcbmltcG9ydCBTZWxlY3Rpb25BbmltYXRpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2VsZWN0aW9uQW5pbWF0aW9uJztcbmltcG9ydCBTZWxlY3Rpb25BcmlhQWN0aXZlIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NlbGVjdGlvbkFyaWFBY3RpdmUnO1xuaW1wb3J0IFNpbmdsZVNlbGVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TaW5nbGVTZWxlY3Rpb24nO1xuaW1wb3J0IFRpbWVyU2VsZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1RpbWVyU2VsZWN0aW9uJztcblxuXG5sZXQgYmFzZSA9IEVsZW1lbnRCYXNlLmNvbXBvc2UoXG4gIENvbnRlbnRBc0l0ZW1zLFxuICBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50LFxuICBGcmFjdGlvbmFsU2VsZWN0aW9uLFxuICBTZWxlY3Rpb25BbmltYXRpb24sXG4gIFNlbGVjdGlvbkFyaWFBY3RpdmUsXG4gIFNpbmdsZVNlbGVjdGlvbixcbiAgVGltZXJTZWxlY3Rpb25cbik7XG5cbi8qKlxuICogU2xpZGVzaG93IHdpdGggYW5pbWF0ZWQgdHJhbnNpdGlvbnMuXG4gKlxuICogQnkgZGVmYXVsdCB0aGUgc2xpZGVzaG93IHdpbGwgaW1tZWRpYXRlbHkgYmVnaW4gcGxheWluZyB3aGVuIGl0IGlzIGNvbm5lY3RlZFxuICogdG8gdGhlIGRvY3VtZW50LCBhZHZhbmNlIGV2ZXJ5IDMwMDAgbXMgKDMgc2Vjb25kcyksIGFuZCB1c2UgYSBzaW1wbGVcbiAqIGNyb3NzZmFkZSBlZmZlY3QuXG4gKlxuICogVGhpcyBjb21wb25lbnQgY2FuIGJlIHVzZWQgb24gaXRzIG93bi4gVG8gaW5jb3Jwb3JhdGUgc2xpZGVzaG93IGJlaGF2aW9yIGludG9cbiAqIGEgY29tcG9uZW50IG9mIHlvdXIgb3duLCBhcHBseSB0aGVcbiAqIFtUaW1lclNlbGVjdGlvbl0oLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9kb2NzL1RpbWVyU2VsZWN0aW9uLm1kKSBtaXhpbi4gVG9cbiAqIGFkZCBzbGlkZXNob3cgZnVuY3Rpb25hbGl0eSB0byBhIGNvbXBvbmVudCBzdWNoIGFzIGEgY2Fyb3VzZWwsIHdyYXAgaXQgd2l0aFxuICogdGhlIGF1eGlsaWFyeSBbYmFzaWMtc2xpZGVzaG93LXRpbWVyXSguLi9iYXNpYy1zbGlkZXNob3ctdGltZXIpIGNvbXBvbmVudC5cbiAqXG4gKiBAZXh0ZW5kcyBFbGVtZW50QmFzZVxuICogQG1peGVzIENvbnRlbnRBc0l0ZW1zXG4gKiBAbWl4ZXMgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudFxuICogQG1peGVzIEZyYWN0aW9uYWxTZWxlY3Rpb25cbiAqIEBtaXhlcyBTZWxlY3Rpb25BbmltYXRpb25cbiAqIEBtaXhlcyBTZWxlY3Rpb25BcmlhQWN0aXZlXG4gKiBAbWl4ZXMgU2luZ2xlU2VsZWN0aW9uXG4gKiBAbWl4ZXMgVGltZXJTZWxlY3Rpb25cbiAqL1xuY2xhc3MgU2xpZGVzaG93IGV4dGVuZHMgYmFzZSB7XG5cbiAgZ2V0IGRlZmF1bHRzKCkge1xuICAgIGxldCBkZWZhdWx0cyA9IHN1cGVyLmRlZmF1bHRzIHx8IHt9O1xuICAgIGRlZmF1bHRzLnBsYXlpbmcgPSB0cnVlO1xuICAgIGRlZmF1bHRzLnNlbGVjdGlvbkFuaW1hdGlvbkR1cmF0aW9uID0gNTAwO1xuICAgIGRlZmF1bHRzLnNlbGVjdGlvbkFuaW1hdGlvbkVmZmVjdCA9ICdjcm9zc2ZhZGUnO1xuICAgIGRlZmF1bHRzLnNlbGVjdGlvblJlcXVpcmVkID0gdHJ1ZTtcbiAgICBkZWZhdWx0cy5zZWxlY3Rpb25UaW1lckR1cmF0aW9uID0gMzAwMDtcbiAgICBkZWZhdWx0cy5zZWxlY3Rpb25XcmFwcyA9IHRydWU7XG4gICAgcmV0dXJuIGRlZmF1bHRzO1xuICB9XG5cbiAgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBgXG4gICAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICAjY29udGFpbmVyIDo6c2xvdHRlZCgqKSB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgaWQ9XCJjb250YWluZXJcIiByb2xlPVwibm9uZVwiPlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbn1cblxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2Jhc2ljLXNsaWRlc2hvdycsIFNsaWRlc2hvdyk7XG4iLCJpbXBvcnQgRWxlbWVudEJhc2UgZnJvbSAnLi4vLi4vYmFzaWMtZWxlbWVudC1iYXNlL3NyYy9FbGVtZW50QmFzZSc7XG5pbXBvcnQgQ29udGVudEFzSXRlbXMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ29udGVudEFzSXRlbXMnO1xuaW1wb3J0IERpcmVjdGlvblNlbGVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXJlY3Rpb25TZWxlY3Rpb24nO1xuaW1wb3J0IERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCc7XG5pbXBvcnQgRnJhY3Rpb25hbFNlbGVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9GcmFjdGlvbmFsU2VsZWN0aW9uJztcbmltcG9ydCBLZXlib2FyZCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9LZXlib2FyZCc7XG5pbXBvcnQgS2V5Ym9hcmREaXJlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvS2V5Ym9hcmREaXJlY3Rpb24nO1xuaW1wb3J0IFNlbGVjdGlvbkFyaWFBY3RpdmUgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2VsZWN0aW9uQXJpYUFjdGl2ZSc7XG5pbXBvcnQgU2luZ2xlU2VsZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NpbmdsZVNlbGVjdGlvbic7XG5pbXBvcnQgU2xpZGluZ1ZpZXdwb3J0IGZyb20gJy4uLy4uL2Jhc2ljLXNsaWRpbmctdmlld3BvcnQvc3JjL1NsaWRpbmdWaWV3cG9ydCc7IC8vIGpzaGludCBpZ25vcmU6bGluZVxuaW1wb3J0IFN3aXBlRGlyZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1N3aXBlRGlyZWN0aW9uJztcbmltcG9ydCBUYXJnZXRJbkNvbGxlY3RpdmUgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvVGFyZ2V0SW5Db2xsZWN0aXZlJztcbmltcG9ydCBUcmFja3BhZERpcmVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9UcmFja3BhZERpcmVjdGlvbic7XG5cbmxldCBiYXNlID0gRWxlbWVudEJhc2UuY29tcG9zZShcbiAgQ29udGVudEFzSXRlbXMsXG4gIERpcmVjdGlvblNlbGVjdGlvbixcbiAgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCxcbiAgRnJhY3Rpb25hbFNlbGVjdGlvbixcbiAgS2V5Ym9hcmQsXG4gIEtleWJvYXJkRGlyZWN0aW9uLFxuICBTZWxlY3Rpb25BcmlhQWN0aXZlLFxuICBTaW5nbGVTZWxlY3Rpb24sXG4gIFN3aXBlRGlyZWN0aW9uLFxuICBUYXJnZXRJbkNvbGxlY3RpdmUsXG4gIFRyYWNrcGFkRGlyZWN0aW9uXG4pO1xuXG5cbi8qKlxuICogTGV0cyB0aGUgdXNlciBuYXZpZ2F0ZSBsYXRlcmFsbHkgdGhyb3VnaCBhIHNlcXVlbmNlIG9mIGNoaWxkIGVsZW1lbnRzLlxuICpcbiAqIFtMaXZlIGRlbW9dKGh0dHA6Ly9iYXNpY3dlYmNvbXBvbmVudHMub3JnL2Jhc2ljLXdlYi1jb21wb25lbnRzL3BhY2thZ2VzL2Jhc2ljLWNhcm91c2VsLylcbiAqXG4gKiBiYXNpYy1zbGlkaW5nLWNhcm91c2VsIGlzIGFuIGltcGxlbWVudGF0aW9uIG9mIHRoZSBjYXJvdXNlbCB1c2VyIGludGVyZmFjZSBwYXR0ZXJuLFxuICogY29tbW9ubHkgdXNlZCBmb3IgbmF2aWdhdGluZyBiZXR3ZWVuIGltYWdlcywgcGFnZXMsIGFuZCBvdGhlciBlbGVtZW50cy4gVGhpc1xuICogcGF0dGVybiBwcmVzZW50cyB0aGUgdXNlciB3aXRoIGEgbGluZWFyIHNlcXVlbmNlIG9mIGVsZW1lbnRzLCBvbmx5IG9uZSBvZlxuICogd2hpY2ggaXMgc2hvd24gYXQgYSB0aW1lLiBUaGUgdXNlciBjYW4gbmF2aWdhdGUgdG8gdGhlIG5leHQvcHJldmlvdXMgZWxlbWVudFxuICogd2l0aCBhIHZhcmlldHkgb2YgaW5wdXQgbWV0aG9kcy5cbiAqXG4gKiBiYXNpYy1zbGlkaW5nLWNhcm91c2VsIGlzIGEgc2ltcGxlciB2YXJpYXRpb24gb2YgdGhlIG1vcmUgc29waGlzdGljYXRlZFxuICogW2Jhc2ljLWNhcm91c2VsXSguLi9iYXNpYy1jYXJvdXNlbCkgY29tcG9uZW50LiBUaGUgbGF0dGVyIGluY2x1ZGVzIHN1cHBvcnRcbiAqIGZvciBfd3JhcHBpbmdfIChnb2luZyBmb3J3YXJkIGZyb20gdGhlIGxhc3QgaXRlbSB0byB0aGUgZmlyc3QsIGFuZCB2aWNlIHZlcnNhKSxcbiAqIGFuZCBtb3JlIGNvbXBsZXggdmlzdWFsIHRyYW5zaXRpb25zLiBUaG9zZSB0cmFuc2l0aW9ucyBlbnRhaWwgdXNlIG9mIHRoZVxuICogV2ViIEFuaW1hdGlvbiBBUEksIHdoaWNoIHJlcXVpcmVzIGEgcG9seWZpbGwgaW4gb2xkZXIgYnJvd3NlcnMuIEhlbmNlLCB0aGVcbiAqIHNpbXBsZXIgYmFzaWMtc2xpZGluZy1jYXJvdXNlbCBtYXkgYmUgYSBtb3JlIGFwcHJvcHJpYXRlIGNob2ljZSBpZiBmYWN0b3JzXG4gKiBzdWNoIGFzIGRvd25sb2FkIHNpemUgYXJlIGNyaXRpY2FsLlxuICpcbiAqIEJleW9uZCB0aG9zZSBkaWZmZXJlbmNlcywgYmFzaWMtc2xpZGluZy1jYXJvdXNlbCBvZmZlcnMgdGhlIHNhbWUgQVBJLCB1c2FnZVxuICogcmVjb21tZW5kYXRpb25zLCBhbmQgc3VwcG9ydCBmb3Iga2V5Ym9hcmQvdG91Y2gvbW91c2UgYW5kIGFzc2lzdGl2ZSBkZXZpY2VzLlxuICogU2VlIHRoYXQgY29tcG9uZW50IGZvciBtb3JlIGRldGFpbHMgb24gdXNlLlxuICpcbiAqIEBleHRlbmRzIEVsZW1lbnRCYXNlXG4gKiBAbWl4ZXMgQ29udGVudEFzSXRlbXNcbiAqIEBtaXhlcyBEaXJlY3Rpb25TZWxlY3Rpb25cbiAqIEBtaXhlcyBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50XG4gKiBAbWl4ZXMgR2VuZXJpY1xuICogQG1peGVzIEtleWJvYXJkXG4gKiBAbWl4ZXMgS2V5Ym9hcmREaXJlY3Rpb25cbiAqIEBtaXhlcyBTZWxlY3Rpb25BcmlhQWN0aXZlXG4gKiBAbWl4ZXMgU2luZ2xlU2VsZWN0aW9uXG4gKiBAbWl4ZXMgU3dpcGVEaXJlY3Rpb25cbiAqIEBtaXhlcyBUYXJnZXRJbkNvbGxlY3RpdmVcbiAqIEBtaXhlcyBUcmFja3BhZERpcmVjdGlvblxuICovXG5jbGFzcyBTbGlkaW5nQ2Fyb3VzZWwgZXh0ZW5kcyBiYXNlIHtcblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBpZiAoc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2spIHsgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTsgfVxuICAgIC8vIEhBQ0tcbiAgICB0aGlzLml0ZW1zQ2hhbmdlZCgpO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRzKCkge1xuICAgIGxldCBkZWZhdWx0cyA9IHN1cGVyLmRlZmF1bHRzIHx8IHt9O1xuICAgIGRlZmF1bHRzLm5hdmlnYXRpb25BeGlzID0gJ2hvcml6b250YWwnO1xuICAgIGRlZmF1bHRzLnNlbGVjdGlvblJlcXVpcmVkID0gdHJ1ZTtcbiAgICByZXR1cm4gZGVmYXVsdHM7XG4gIH1cblxuICBnZXQgc2VsZWN0ZWRGcmFjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kLnZpZXdwb3J0LnNlbGVjdGVkRnJhY3Rpb247XG4gIH1cbiAgc2V0IHNlbGVjdGVkRnJhY3Rpb24odmFsdWUpIHtcbiAgICBpZiAoJ3NlbGVjdGVkRnJhY3Rpb24nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkRnJhY3Rpb24gPSB2YWx1ZTsgfVxuICAgIHRoaXMuJC52aWV3cG9ydC5zZWxlY3RlZEZyYWN0aW9uID0gdmFsdWU7XG4gICAgbGV0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdzZWxlY3RlZC1mcmFjdGlvbi1jaGFuZ2VkJyk7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgfVxuXG4gIGdldCBzZWxlY3RlZEluZGV4KCkge1xuICAgIHJldHVybiBzdXBlci5zZWxlY3RlZEluZGV4O1xuICB9XG4gIHNldCBzZWxlY3RlZEluZGV4KHZhbHVlKSB7XG4gICAgaWYgKCdzZWxlY3RlZEluZGV4JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEluZGV4ID0gdmFsdWU7IH1cbiAgICB0aGlzLiQudmlld3BvcnQuc2VsZWN0ZWRJbmRleCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHNlbGVjdGVkSXRlbSgpIHtcbiAgICByZXR1cm4gc3VwZXIuc2VsZWN0ZWRJdGVtO1xuICB9XG4gIHNldCBzZWxlY3RlZEl0ZW0oaXRlbSkge1xuICAgIGlmICgnc2VsZWN0ZWRJdGVtJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEl0ZW0gPSBpdGVtOyB9XG4gICAgdGhpcy4kLnZpZXdwb3J0LnNlbGVjdGVkSXRlbSA9IGl0ZW07XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIHdoZXRoZXIgYSB0cmFuc2l0aW9uIHNob3VsZCBiZSBzaG93biBkdXJpbmcgc2VsZWN0aW9uLlxuICAgKlxuICAgKiBDb21wb25lbnRzIGxpa2UgY2Fyb3VzZWxzIG9mdGVuIGRlZmluZSBhbmltYXRlZCBDU1MgdHJhbnNpdGlvbnMgZm9yXG4gICAqIHNsaWRpbmcgZWZmZWN0cy4gU3VjaCBhIHRyYW5zaXRpb24gc2hvdWxkIHVzdWFsbHkgKm5vdCogYmUgYXBwbGllZCB3aGlsZVxuICAgKiB0aGUgdXNlciBpcyBkcmFnZ2luZywgYmVjYXVzZSBhIENTUyBhbmltYXRpb24gd2lsbCBpbnRyb2R1Y2UgYSBsYWcgdGhhdFxuICAgKiBtYWtlcyB0aGUgc3dpcGUgZmVlbCBzbHVnZ2lzaC4gSW5zdGVhZCwgYXMgbG9uZyBhcyB0aGUgdXNlciBpcyBkcmFnZ2luZ1xuICAgKiB3aXRoIHRoZWlyIGZpbmdlciBkb3duLCB0aGUgdHJhbnNpdGlvbiBzaG91bGQgYmUgc3VwcHJlc3NlZC4gV2hlbiB0aGVcbiAgICogdXNlciByZWxlYXNlcyB0aGVpciBmaW5nZXIsIHRoZSB0cmFuc2l0aW9uIGNhbiBiZSByZXN0b3JlZCwgYWxsb3dpbmcgdGhlXG4gICAqIGFuaW1hdGlvbiB0byBzaG93IHRoZSBjYXJvdXNlbCBzbGlkaW5nIGludG8gaXRzIGZpbmFsIHBvc2l0aW9uLlxuICAgKlxuICAgKiBOb3RlOiBUaGlzIHByb3BlcnR5IGlzIG9ubHkgaW50ZW5kZWQgdG8gbGV0IGEgY29tcG9uZW50IGNvb3BlcmF0ZSB3aXRoXG4gICAqIG1peGlucyB0aGF0IG1heSBiZSBhcHBsaWVkIHRvIGl0LCBhbmQgaXMgbm90IGludGVuZGVkIHRvIGxldCBzb21lb25lXG4gICAqIHVzaW5nIGNvbXBvbmVudCBwZXJtYW5lbnRseSBlbmFibGUgb3IgZGlzYWJsZSB0cmFuc2l0aW9uIGVmZmVjdHMuXG4gICAqXG4gICAqIEB0eXBlIHtib29sZWFufSB0cnVlIGlmIGEgY29tcG9uZW50LXByb3ZpZGVkIHRyYW5zaXRpb24gc2hvdWxkIGJlIHNob3duLFxuICAgKiBmYWxzZSBpZiBub3QuXG4gICAqL1xuICBnZXQgc2hvd1RyYW5zaXRpb24oKSB7XG4gICAgcmV0dXJuIHN1cGVyLnNob3dUcmFuc2l0aW9uIHx8IHRoaXMuJC52aWV3cG9ydC5zaG93VHJhbnNpdGlvbjtcbiAgfVxuICBzZXQgc2hvd1RyYW5zaXRpb24odmFsdWUpIHtcbiAgICBpZiAoJ3Nob3dUcmFuc2l0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zaG93VHJhbnNpdGlvbiA9IHZhbHVlOyB9XG4gICAgdGhpcy4kLnZpZXdwb3J0LnNob3dUcmFuc2l0aW9uID0gdmFsdWU7XG4gIH1cblxuICBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgfVxuXG4gICAgICBiYXNpYy1zbGlkaW5nLXZpZXdwb3J0IHtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAtd2Via2l0LWZsZXg6IDE7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8YmFzaWMtc2xpZGluZy12aWV3cG9ydCBpZD1cInZpZXdwb3J0XCIgcm9sZT1cIm5vbmVcIj5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgPC9iYXNpYy1zbGlkaW5nLXZpZXdwb3J0PlxuICAgIGA7XG4gIH1cbn1cblxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2Jhc2ljLXNsaWRpbmctY2Fyb3VzZWwnLCBTbGlkaW5nQ2Fyb3VzZWwpO1xuZXhwb3J0IGRlZmF1bHQgU2xpZGluZ0Nhcm91c2VsO1xuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9jcmVhdGVTeW1ib2wnO1xuaW1wb3J0IEVsZW1lbnRCYXNlIGZyb20gJy4uLy4uL2Jhc2ljLWVsZW1lbnQtYmFzZS9zcmMvRWxlbWVudEJhc2UnO1xuaW1wb3J0IEZyYWN0aW9uYWxTZWxlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRnJhY3Rpb25hbFNlbGVjdGlvbic7XG5pbXBvcnQgU3ByZWFkSXRlbXMgZnJvbSAnLi4vLi4vYmFzaWMtc3ByZWFkLWl0ZW1zL3NyYy9TcHJlYWRJdGVtcyc7IC8vIGpzaGludCBpZ25vcmU6bGluZVxuaW1wb3J0IHRvZ2dsZUNsYXNzIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL3RvZ2dsZUNsYXNzJztcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3Qgc2VsZWN0ZWRJdGVtU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdzZWxlY3RlZEl0ZW0nKTtcblxuXG5sZXQgYmFzZSA9IEVsZW1lbnRCYXNlLmNvbXBvc2UoXG4gIEZyYWN0aW9uYWxTZWxlY3Rpb25cbik7XG5cblxuLyoqXG4gKiBQcmVzZW50cyBsaXN0IGl0ZW1zIGluIGEgdmlld3BvcnQgc3VjaCB0aGF0IG9ubHkgYSBzaW5nbGUgaXRlbSBpcyB2aXNpYmxlIGF0XG4gKiBhIHRpbWUuXG4gKlxuICogTmF2aWdhdGluZyBiZXR3ZWVuIGl0ZW1zIHdpbGwgYmUgcmVwcmVzZW50ZWQgd2l0aCBhIGhvcml6b250YWwgdmlzdWFsXG4gKiBzbGlkaW5nIGVmZmVjdC4gRm9yIG1vcmUgY29tcGxleCB2aXN1YWwgZWZmZWN0cywgc2VlXG4gKiBbYmFzaWMtYW5pbWF0aW9uLXN0YWdlXSguLi9iYXNpYy1hbmltYXRpb24tc3RhZ2UpLCB3aGljaCB0YWtlcyBhZHZhbnRhZ2Ugb2ZcbiAqIHRoZSBXZWIgQW5pbWF0aW9ucyBBUEkuXG4gKlxuICogVGhpcyBjb21wb25lbnQgaGFuZGxlcyB0aGUgcmVuZGVyaW5nIHJlc3BvbnNpYmlsaXRpZXMgZm9yIHRoZSBiYXNpYy1jYXJvdXNlbFxuICogY29tcG9uZW50LlxuICpcbiAqIFRoaXMgY29tcG9uZW50IGN1cnJlbnRseSByZXF1aXJlcyB0aGF0IHlvdSBleHBsaWNpdGx5IGFwcGx5IGEgc2l6ZSB0byBpdC5cbiAqXG4gKiBAZXh0ZW5kcyBFbGVtZW50QmFzZVxuICovXG5jbGFzcyBTbGlkaW5nVmlld3BvcnQgZXh0ZW5kcyBiYXNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc2VsZWN0ZWRGcmFjdGlvbiA9IDA7XG4gICAgdGhpcy5zaG93VHJhbnNpdGlvbiA9IHRydWU7XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBpZiAoc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2spIHsgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTsgfVxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBnZXQgY29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy4kLnNsaWRpbmdDb250YWluZXIuY29udGVudDtcbiAgfVxuXG4gIGdldCBpdGVtcygpIHtcbiAgICByZXR1cm4gdGhpcy4kLnNsaWRpbmdDb250YWluZXIuaXRlbXM7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHN1cGVyLnJlbmRlcikgeyBzdXBlci5yZW5kZXIoKTsgfVxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXJTZWxlY3Rpb24uYmluZCh0aGlzKSk7XG4gIH1cblxuICBnZXQgc2VsZWN0ZWRGcmFjdGlvbigpIHtcbiAgICByZXR1cm4gc3VwZXIuc2VsZWN0ZWRGcmFjdGlvbjtcbiAgfVxuICBzZXQgc2VsZWN0ZWRGcmFjdGlvbih2YWx1ZSkge1xuICAgIGlmICgnc2VsZWN0ZWRGcmFjdGlvbicgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRGcmFjdGlvbiA9IHZhbHVlOyB9XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIGdldCBzZWxlY3RlZEluZGV4KCkge1xuICAgIGxldCBpdGVtcyA9IHRoaXMuaXRlbXM7XG4gICAgbGV0IHNlbGVjdGVkSXRlbSA9IHRoaXMuc2VsZWN0ZWRJdGVtO1xuICAgIHJldHVybiBpdGVtcyAmJiBzZWxlY3RlZEl0ZW0gP1xuICAgICAgaXRlbXMuaW5kZXhPZihzZWxlY3RlZEl0ZW0pIDpcbiAgICAgIC0xO1xuICB9XG4gIHNldCBzZWxlY3RlZEluZGV4KGluZGV4KSB7XG4gICAgaWYgKCdzZWxlY3RlZEluZGV4JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEluZGV4ID0gaW5kZXg7IH1cbiAgICBsZXQgaXRlbSA9IHRoaXMuaXRlbXMgJiYgdGhpcy5pdGVtc1tpbmRleF07XG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gaXRlbTtcbiAgICB9XG4gIH1cblxuICBnZXQgc2VsZWN0ZWRJdGVtKCkge1xuICAgIHJldHVybiB0aGlzW3NlbGVjdGVkSXRlbVN5bWJvbF07XG4gIH1cbiAgc2V0IHNlbGVjdGVkSXRlbShpdGVtKSB7XG4gICAgaWYgKCdzZWxlY3RlZEl0ZW0nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkSXRlbSA9IGl0ZW07IH1cbiAgICB0aGlzW3NlbGVjdGVkSXRlbVN5bWJvbF0gPSBpdGVtO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBnZXQgc2hvd1RyYW5zaXRpb24oKSB7XG4gICAgcmV0dXJuIHN1cGVyLnNob3dUcmFuc2l0aW9uIHx8IHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93VHJhbnNpdGlvbicpO1xuICB9XG4gIHNldCBzaG93VHJhbnNpdGlvbih2YWx1ZSkge1xuICAgIGlmICgnc2hvd1RyYW5zaXRpb24nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNob3dUcmFuc2l0aW9uID0gdmFsdWU7IH1cbiAgICB0b2dnbGVDbGFzcyh0aGlzLCAnc2hvd1RyYW5zaXRpb24nLCB2YWx1ZSk7XG4gIH1cblxuICBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgI3NsaWRpbmdDb250YWluZXIge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgLypcbiAgICAgICAgIFNldCB3aWR0aCBmb3IgSUUvRWRnZS4gSXQncyBub3QgY2xlYXIgd2h5IHRoZXkgbmVlZCB0aGlzLCBhbmQgdGhlIG90aGVyXG4gICAgICAgICBicm93c2VycyBkb24ndC5cbiAgICAgICAgICovXG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCguc2hvd1RyYW5zaXRpb24pICNzbGlkaW5nQ29udGFpbmVyIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjJzIGVhc2Utb3V0O1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLW91dDtcbiAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxiYXNpYy1zcHJlYWQtaXRlbXMgaWQ9XCJzbGlkaW5nQ29udGFpbmVyXCIgcm9sZT1cIm5vbmVcIj5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgPC9iYXNpYy1zcHJlYWQtaXRlbXM+XG4gICAgYDtcbiAgfVxuXG59XG5cblxuLy8gTm90ZTogSW4gdGhpcyByb3V0aW5lLCBcInRoaXNcIiBpcyBib3VuZCB0byBhbiBlbGVtZW50IGluc3RhbmNlLlxuZnVuY3Rpb24gcmVuZGVyU2VsZWN0aW9uKCkge1xuICBpZiAoIXRoaXMuc2VsZWN0ZWRJdGVtKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCBzZWxlY3Rpb24gPSBGcmFjdGlvbmFsU2VsZWN0aW9uLmhlbHBlcnMuZWxlbWVudFNlbGVjdGlvbih0aGlzKTtcbiAgbGV0IGl0ZW1Db3VudCA9IHRoaXMuaXRlbXMgPyB0aGlzLml0ZW1zLmxlbmd0aCA6IDA7XG4gIGxldCBkYW1wZWQgPSBGcmFjdGlvbmFsU2VsZWN0aW9uLmhlbHBlcnMuZGFtcGVkU2VsZWN0aW9uKHNlbGVjdGlvbiwgaXRlbUNvdW50KTtcbiAgLy8gVXNlIGEgcGVyY2VudGFnZSBzbyB0aGUgdHJhbnNmb3JtIHdpbGwgc3RpbGwgd29yayBpZiBzY3JlZW4gc2l6ZSBjaGFuZ2VzXG4gIC8vIChlLmcuLCBpZiBkZXZpY2Ugb3JpZW50YXRpb24gY2hhbmdlcykuXG4gIGxldCBsZWZ0ID0gLWRhbXBlZCAqIDEwMDtcbiAgbGV0IHRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKCcgKyBsZWZ0ICsgJyUpJztcbiAgdGhpcy4kLnNsaWRpbmdDb250YWluZXIuc3R5bGUud2Via2l0VHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICB0aGlzLiQuc2xpZGluZ0NvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG59XG5cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdiYXNpYy1zbGlkaW5nLXZpZXdwb3J0JywgU2xpZGluZ1ZpZXdwb3J0KTtcbmV4cG9ydCBkZWZhdWx0IFNsaWRpbmdWaWV3cG9ydDtcbiIsImltcG9ydCBFbGVtZW50QmFzZSBmcm9tICcuLi8uLi9iYXNpYy1lbGVtZW50LWJhc2Uvc3JjL0VsZW1lbnRCYXNlJztcbmltcG9ydCBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50IGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQnO1xuXG5cbi8qKlxuICogU3ByZWFkcyBvdXQgYSBzZXQgb2YgaXRlbXMgaG9yaXpvbnRhbGx5IHNvIHRoZXkgdGFrZSBlcXVhbCBzcGFjZS5cbiAqXG4gKiBbTGl2ZSBkZW1vXShodHRwOi8vYmFzaWN3ZWJjb21wb25lbnRzLm9yZy9iYXNpYy13ZWItY29tcG9uZW50cy9wYWNrYWdlcy9iYXNpYy1zcHJlYWQtaXRlbXMvKVxuICpcbiAqIFRoaXMgY29tcG9uZW50IGlzIHVzZWQsIGZvciBleGFtcGxlLCBieSB0aGUgYmFzaWMtc2xpZGluZy12aWV3cG9ydCBjb21wb25lbnRcbiAqIHRvIGVuc3VyZSB0aGF0IGNoaWxkcmVuIG9mIGRpZmZlcmVudCBzaXplIHdpbGwgdGFrZSB1cCB0aGUgc2FtZSBhbW91bnQgb2ZcbiAqIGhvcml6b250YWwgc3BhY2UuXG4gKlxuICogVGhpcyBjb21wb25lbnQgY3VycmVudGx5IHJlcXVpcmVzIGFuIGV4cGxpY2l0IHNpemUgYnkgYXBwbGllZCB0byBpdC5cbiAqXG4gKiBAZXh0ZW5kcyBFbGVtZW50QmFzZVxuICogQG1peGVzIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnRcbiAqL1xuY2xhc3MgU3ByZWFkSXRlbXMgZXh0ZW5kcyBFbGVtZW50QmFzZS5jb21wb3NlKFxuICBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50XG4pIHtcblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBpZiAoc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2spIHsgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTsgfVxuICAgIC8vIEhBQ0tcbiAgICB0aGlzLml0ZW1zQ2hhbmdlZCgpO1xuICB9XG5cbiAgZ2V0IGl0ZW1zKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XG4gIH1cblxuICAvLyBUT0RPOiBTaG91bGQgYWxzbyBoYW5kbGUgY29udGVudENoYW5nZWQoKSwgYnV0IG5lZWQgdG8gcmF0aW9uYWxpemUgd2l0aFxuICAvLyBpbnZvY2F0aW9uIG9mIGl0ZW1zQ2hhbmdlZCBpbiBjb25uZWN0ZWRDYWxsYmFjay5cbiAgaXRlbXNDaGFuZ2VkKCkge1xuICAgIGlmIChzdXBlci5pdGVtc0NoYW5nZWQpIHsgc3VwZXIuaXRlbXNDaGFuZ2VkKCk7IH1cbiAgICBsZXQgaXRlbXMgPSB0aGlzLml0ZW1zO1xuICAgIGxldCBjb3VudCA9IGl0ZW1zLmxlbmd0aDtcbiAgICB0aGlzLiQuc3ByZWFkQ29udGFpbmVyLnN0eWxlLndpZHRoID0gKGNvdW50ICogMTAwKSArICclJztcbiAgICBsZXQgaXRlbVdpZHRoID0gKDEwMCAvIGNvdW50KSArIFwiJVwiO1xuICAgIFtdLmZvckVhY2guY2FsbChpdGVtcywgaXRlbSA9PiB7XG4gICAgICBpdGVtLnN0eWxlLndpZHRoID0gaXRlbVdpZHRoO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBgXG4gICAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuXG4gICAgICAjc3ByZWFkQ29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgI3NwcmVhZENvbnRhaW5lciA6OnNsb3R0ZWQoKikge1xuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICBvYmplY3QtZml0OiB2YXIoLS1iYXNpYy1pdGVtLW9iamVjdC1maXQsIGNvbnRhaW4pO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xuICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBpZD1cInNwcmVhZENvbnRhaW5lclwiPlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbn1cblxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2Jhc2ljLXNwcmVhZC1pdGVtcycsIFNwcmVhZEl0ZW1zKTtcbmV4cG9ydCBkZWZhdWx0IFNwcmVhZEl0ZW1zO1xuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9jcmVhdGVTeW1ib2wnO1xuaW1wb3J0IEVsZW1lbnRCYXNlIGZyb20gJy4uLy4uL2Jhc2ljLWVsZW1lbnQtYmFzZS9zcmMvRWxlbWVudEJhc2UnO1xuaW1wb3J0IENvbnRlbnRGaXJzdENoaWxkVGFyZ2V0IGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NvbnRlbnRGaXJzdENoaWxkVGFyZ2V0JztcbmltcG9ydCBEaXJlY3Rpb25TZWxlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlyZWN0aW9uU2VsZWN0aW9uJztcbmltcG9ydCBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50IGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQnO1xuaW1wb3J0IEdlbmVyaWMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvR2VuZXJpYyc7XG5pbXBvcnQgS2V5Ym9hcmREaXJlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvS2V5Ym9hcmREaXJlY3Rpb24nO1xuaW1wb3J0IHJlbmRlckFycmF5QXNFbGVtZW50cyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9yZW5kZXJBcnJheUFzRWxlbWVudHMnO1xuaW1wb3J0IFNpbmdsZVNlbGVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TaW5nbGVTZWxlY3Rpb24nO1xuaW1wb3J0IFRhcmdldFNlbGVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9UYXJnZXRTZWxlY3Rpb24nO1xuaW1wb3J0IHRvZ2dsZUNsYXNzIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL3RvZ2dsZUNsYXNzJztcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3QgdGFiUG9zaXRpb25TeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3RhYlBvc2l0aW9uJyk7XG5cblxuLy8gVXNlZCB0byBhc3NpZ24gdW5pcXVlIElEcyB0byB0YWJzIGZvciBBUklBIHB1cnBvc2VzLlxubGV0IGlkQ291bnQgPSAwO1xuXG5cbmxldCBiYXNlID0gRWxlbWVudEJhc2UuY29tcG9zZShcbiAgQ29udGVudEZpcnN0Q2hpbGRUYXJnZXQsXG4gIERpcmVjdGlvblNlbGVjdGlvbixcbiAgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCxcbiAgR2VuZXJpYyxcbiAgS2V5Ym9hcmREaXJlY3Rpb24sXG4gIFNpbmdsZVNlbGVjdGlvbixcbiAgVGFyZ2V0U2VsZWN0aW9uXG4pO1xuXG5cbi8qKlxuICogQSBzdHJpcCBvZiB0YWJzIGZvciBzZWxlY3Rpbmcgb25lIG9mIHRoZSBjb21wb25lbnQncyBjaGlsZHJlbi5cbiAqXG4gKiBUaGUgY29tcG9uZW50IGNyZWF0ZXMgYSB0YWIgdG8gcmVwcmVzZW50IGVhY2ggb2YgaXRzIGxpZ2h0IERPTSBjaGlsZHJlbi5cbiAqIFRoZSB0YWIgbmFtZSBpcyBvYnRhaW5lZCBieSBleGFtaW5pbmcgdGhlIGNoaWxkcmVuIGZvciBhbiBgYXJpYS1sYWJlbGBcbiAqIHByb3BlcnR5LlxuICpcbiAqIFVzZSB0YWJzIHdoZW4geW91IHdhbnQgdG8gcHJvdmlkZSBhIGxhcmdlIHNldCBvZiBvcHRpb25zIG9yIGVsZW1lbnRzIHRoYW5cbiAqIGNhbiBjb21mb3J0YWJseSBmaXQgaW5saW5lLCB0aGUgb3B0aW9ucyBjYW4gYmUgY29oZXJlbnRseSBncm91cGVkIGludG8gcGFnZXMsXG4gKiBhbmQgeW91IHdhbnQgdG8gYXZvaWQgbWFraW5nIHRoZSB1c2VyIG5hdmlnYXRlIHRvIGEgc2VwYXJhdGUgcGFnZS4gVGFicyB3b3JrXG4gKiBiZXN0IGlmIHlvdSBvbmx5IGhhdmUgYSBzbWFsbCBoYW5kZnVsIG9mIHBhZ2VzLCBzYXkgMuKAkzcuXG4gKlxuICogVGhlIGJhc2ljLXRhYi1zdHJpcCBjb21wb25lbnQgZG9lcyBub3QgZGVmaW5lIGhvdyBhIHNlbGVjdGVkIGNoaWxkIGlzXG4gKiByZXByZXNlbnRlZC4gSWYgeW91J3JlIGxvb2tpbmcgZm9yIHRoZSBzdGFuZGFyZCBiZWhhdmlvciBvZiBqdXN0IHNob3dpbmcgb25seVxuICogdGhlIHNlbGVjdGVkIGNoaWxkLCB5b3UgY2FuIHVzZSB0aGlzIGNvbXBvbmVudCBpbiBjb21iaW5hdGlvbiB3aXRoIHRoZVxuICogc2VwYXJhdGUgW2Jhc2ljLW1vZGVzXSguLi9iYXNpYy1tb2Rlcy8pIGNvbXBvbmVudC4gQSB0eXBpY2FsIGFycmFuZ2VtZW50OlxuICpcbiAqICAgICA8YmFzaWMtdGFiLXN0cmlwPlxuICogICAgICAgPGJhc2ljLW1vZGVzIGFyaWEtbGFiZWw9XCJQYW5lbHNcIj5cbiAqICAgICAgICAgPGRpdiBhcmlhLWxhYmVsPVwiT25lXCI+UGFnZSBvbmU8L2Rpdj5cbiAqICAgICAgICAgPGRpdiBhcmlhLWxhYmVsPVwiVHdvXCI+UGFnZSB0d288L2Rpdj5cbiAqICAgICAgICAgPGRpdiBhcmlhLWxhYmVsPVwiVGhyZWVcIj5QYWdlIHRocmVlPC9kaXY+XG4gKiAgICAgICA8L2Jhc2ljLW1vZGVzPlxuICogICAgIDwvYmFzaWMtdGFiLXN0cmlwPlxuICpcbiAqIFRoZSBhYm92ZSBjb21iaW5hdGlvbiBpcyBzbyBjb21tb24gaXQgaXMgcHJvdmlkZWQgYXMgYSBzaW5nbGUgY29tcG9uZW50LFxuICogW2Jhc2ljLXRhYnNdKC4uL2Jhc2ljLXRhYnMvKS5cbiAqXG4gKiBUaGUgdXNlciBjYW4gc2VsZWN0IGEgdGFiIHdpdGggdGhlIG1vdXNlIG9yIHRvdWNoLCBhcyB3ZWxsIGFzIGJ5IHRocm91Z2ggdGhlXG4gKiBrZXlib2FyZC4gRWFjaCB0YWIgYXBwZWFycyBhcyBhIHNlcGFyYXRlIGJ1dHRvbiBpbiB0aGUgdGFiIG9yZGVyLlxuICogQWRkaXRpb25hbGx5LCBpZiB0aGUgZm9jdXMgaXMgY3VycmVudGx5IG9uIGEgdGFiLCB0aGUgdXNlciBjYW4gcXVpY2tseVxuICogbmF2aWdhdGUgYmV0d2VlbiB0YWJzIHdpdGggdGhlIGxlZnQvcmlnaHQgYXJyb3cga2V5cyAob3IsIGlmIHRoZSB0YWJzIGFyZVxuICogaW4gdmVydGljYWwgcG9zaXRpb24sIHRoZSB1cC9kb3duIGFycm93IGtleXMpLlxuICpcbiAqIEJ5IGRlZmF1bHQsIHRoZSB0YWJzIGFyZSBzaG93biBncm91cGVkIHRvIHRoZSBsZWZ0LCB3aGVyZSBlYWNoIHRhYiBpcyBvbmx5XG4gKiBhcyBiaWcgYXMgbmVjZXNzYXJ5LiBZb3UgY2FuIGFwcGx5IHRoZSBgc3ByZWFkYCBDU1MgY2xhc3MgdG8gYVxuICogYmFzaWMtdGFiLXN0cmlwIGVsZW1lbnQgZm9yIGEgdmFyaWFudCBhcHBlYXJhbmNlIGluIHdoaWNoIHRoZSBhdmFpbGFibGUgd2lkdGhcbiAqIG9mIHRoZSBlbGVtZW50IGlzIGRpdmlkZWQgdXAgZXF1YWxseSBhbW9uZyB0YWJzLlxuICpcbiAqIFRoZSBnZW5lcmljIGRlZmF1bHQgc3R5bGluZyBvZiB0aGUgdGFiIHN0cmlwIHdpbGwgcHJlc2VudCB0aGUgY2xhc3NpY1xuICogc2tldW1vcnBoaWMgbG9vayBvZiByb3VuZGVkIHRhYnMgYXR0YWNoZWQgdG8gYSBzdXJmYWNlLiBZb3UgY2FuIHJlbW92ZSB0aGlzXG4gKiBzdHlsaW5nIGJ5IHNldHRpbmcgdGhlIGBnZW5lcmljYCBwcm9wZXJ0eS9hdHRyaWJ1dGUgdG8gZmFsc2UuXG4gKlxuICogQGV4dGVuZHMgRWxlbWVudEJhc2VcbiAqIEBtaXhlcyBDb250ZW50Rmlyc3RDaGlsZFRhcmdldFxuICogQG1peGVzIERpcmVjdGlvblNlbGVjdGlvblxuICogQG1peGVzIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnRcbiAqIEBtaXhlcyBHZW5lcmljXG4gKiBAbWl4ZXMgS2V5Ym9hcmREaXJlY3Rpb25cbiAqIEBtaXhlcyBTaW5nbGVTZWxlY3Rpb25cbiAqIEBtaXhlcyBUYXJnZXRTZWxlY3Rpb25cbiAqL1xuY2xhc3MgVGFiU3RyaXAgZXh0ZW5kcyBiYXNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy4kLnRhYnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICBsZXQgdGFiID0gZXZlbnQudGFyZ2V0O1xuICAgICAgbGV0IHRhYkluZGV4ID0gdGhpcy50YWJzLmluZGV4T2YodGFiKTtcbiAgICAgIGlmICh0YWJJbmRleCA+PSAwKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHRhYkluZGV4O1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gTGlzdGVuIHRvIGtleWRvd24gZXZlbnRzIG9uIHRoZSB0YWJzLCBub3Qgb24gcGFnZXMuXG4gICAgdGhpcy4kLnRhYnMuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGV2ZW50ID0+IHtcbiAgICAgIGxldCBoYW5kbGVkID0gdGhpcy5rZXlkb3duKGV2ZW50KTtcbiAgICAgIGlmIChoYW5kbGVkKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCF0aGlzLmdldEF0dHJpYnV0ZSgncm9sZScpKSB7XG4gICAgICAvLyBBc3NpZ24gYSBkZWZhdWx0IEFSSUEgcm9sZS5cbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdyb2xlJywgJ3RhYmxpc3QnKTtcbiAgICB9XG5cbiAgICAvLyBTZXQgZGVmYXVsdHMuXG4gICAgaWYgKHR5cGVvZiB0aGlzLnRhYlBvc2l0aW9uID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy50YWJQb3NpdGlvbiA9IHRoaXMuZGVmYXVsdHMudGFiUG9zaXRpb247XG4gICAgfVxuICB9XG5cbiAgYXBwbHlTZWxlY3Rpb24oaXRlbSwgc2VsZWN0ZWQpIHtcbiAgICBpZiAoc3VwZXIuYXBwbHlTZWxlY3Rpb24pIHsgc3VwZXIuYXBwbHlTZWxlY3Rpb24oaXRlbSwgc2VsZWN0ZWQpOyB9XG4gICAgbGV0IGluZGV4ID0gdGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pO1xuICAgIC8vIFNlZSBpZiB0aGUgY29ycmVzcG9uZGluZyB0YWIgaGFzIGFscmVhZHkgYmVlbiBjcmVhdGVkLlxuICAgIC8vIElmIG5vdCwgdGhlIGNvcnJlY3QgdGFiIHdpbGwgYmUgc2VsZWN0ZWQgd2hlbiBpdCBnZXRzIGNyZWF0ZWQuXG4gICAgbGV0IHRhYnMgPSB0aGlzLnRhYnM7XG4gICAgaWYgKHRhYnMgJiYgdGFicy5sZW5ndGggPiBpbmRleCkge1xuICAgICAgbGV0IHRhYiA9IHRoaXMudGFic1tpbmRleF07XG4gICAgICBpZiAodGFiKSB7XG4gICAgICAgIGFwcGx5U2VsZWN0aW9uVG9UYWIodGFiLCBzZWxlY3RlZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0IGRlZmF1bHRzKCkge1xuICAgIGxldCBkZWZhdWx0cyA9IHN1cGVyLmRlZmF1bHRzIHx8IHt9O1xuICAgIGRlZmF1bHRzLnRhYlBvc2l0aW9uID0gJ3RvcCc7XG4gICAgcmV0dXJuIGRlZmF1bHRzO1xuICB9XG5cbiAgZ2V0IHRhYnMoKSB7XG4gICAgcmV0dXJuIFtdLnNsaWNlLmNhbGwodGhpcy4kLnRhYnMucXVlcnlTZWxlY3RvckFsbCgnLnRhYicpKTtcbiAgfVxuXG4gIGl0ZW1zQ2hhbmdlZCgpIHtcbiAgICBpZiAoc3VwZXIuaXRlbXNDaGFuZ2VkKSB7IHN1cGVyLml0ZW1zQ2hhbmdlZCgpOyB9XG5cbiAgICBsZXQgYmFzZUlkID0gdGhpcy5pZCA/XG4gICAgICBcIl9cIiArIHRoaXMuaWQgKyBcIlBhbmVsXCIgOlxuICAgICAgXCJfcGFuZWxcIjtcblxuICAgIC8vIENvbmZpcm0gdGhhdCBpdGVtcyBoYXZlIGF0IGxlYXN0IGEgZGVmYXVsdCByb2xlIGFuZCBJRCBmb3IgQVJJQSBwdXJwb3Nlcy5cbiAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpZiAoIWl0ZW0uZ2V0QXR0cmlidXRlKCdyb2xlJykpIHtcbiAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAndGFicGFuZWwnKTtcbiAgICAgIH1cbiAgICAgIGlmICghaXRlbS5pZCkge1xuICAgICAgICBpdGVtLmlkID0gYmFzZUlkICsgaWRDb3VudCsrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gQ3JlYXRlIHRhYnMuXG4gICAgcmVuZGVyQXJyYXlBc0VsZW1lbnRzKHRoaXMuaXRlbXMsIHRoaXMuJC50YWJzLCAoaXRlbSwgZWxlbWVudCkgPT4ge1xuICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0YWInKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzdHlsZS1zY29wZScpO1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Jhc2ljLXRhYi1zdHJpcCcpO1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgncm9sZScsICd0YWInKTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICB9XG4gICAgICBlbGVtZW50LmlkID0gaXRlbS5pZCArICdfdGFiJztcbiAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBpdGVtLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpO1xuXG4gICAgICAvLyBQb2ludCB0YWIgYW5kIHBhbmVsIGF0IGVhY2ggb3RoZXIuXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycsIGl0ZW0uaWQpO1xuICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWxsZWRieScsIGVsZW1lbnQuaWQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zZWxlY3RlZEl0ZW1DaGFuZ2VkKCk7ICAvLyBJbiBjYXNlIHBvc2l0aW9uIG9mIHNlbGVjdGVkIGl0ZW0gbW92ZWQuXG4gIH1cblxuICBrZXlkb3duKGV2ZW50KSB7XG4gICAgbGV0IGhhbmRsZWQgPSBzdXBlci5rZXlkb3duKGV2ZW50KTtcbiAgICBpZiAoaGFuZGxlZCkge1xuICAgICAgLy8gSWYgdGhlIGV2ZW50IHJlc3VsdGVkIGluIGEgY2hhbmdlIG9mIHNlbGVjdGlvbiwgbW92ZSB0aGUgZm9jdXMgdG8gdGhlXG4gICAgICAvLyBuZXdseS1zZWxlY3RlZCB0YWIuXG4gICAgICB0aGlzLnRhYnNbdGhpcy5zZWxlY3RlZEluZGV4XS5mb2N1cygpO1xuICAgIH1cbiAgICByZXR1cm4gaGFuZGxlZDtcbiAgfVxuXG4gIHNlbGVjdGVkSXRlbUNoYW5nZWQoKSB7XG4gICAgaWYgKHN1cGVyLnNlbGVjdGVkSXRlbUNoYW5nZWQpIHsgc3VwZXIuc2VsZWN0ZWRJdGVtQ2hhbmdlZCgpOyB9XG4gICAgbGV0IHNlbGVjdGVkSW5kZXggPSB0aGlzLnNlbGVjdGVkSW5kZXg7XG4gICAgdGhpcy50YWJzLmZvckVhY2goKHRhYiwgaSkgPT4ge1xuICAgICAgYXBwbHlTZWxlY3Rpb25Ub1RhYih0YWIsIGkgPT09IHNlbGVjdGVkSW5kZXgpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBwb3NpdGlvbiBvZiB0aGUgdGFiIHN0cmlwIHJlbGF0aXZlIHRvIHRoZSBlbGVtZW50J3MgY2hpbGRyZW4uIFZhbGlkXG4gICAqIHZhbHVlcyBhcmUgXCJ0b3BcIiwgXCJsZWZ0XCIsIFwicmlnaHRcIiwgYW5kIFwiYm90dG9tXCIuXG4gICAqXG4gICAqIEBkZWZhdWx0IFwidG9wXCJcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCB0YWJQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpc1t0YWJQb3NpdGlvblN5bWJvbF07XG4gIH1cbiAgc2V0IHRhYlBvc2l0aW9uKHBvc2l0aW9uKSB7XG4gICAgdGhpc1t0YWJQb3NpdGlvblN5bWJvbF0gPSBwb3NpdGlvbjtcblxuICAgIGlmICh0aGlzLmdldEF0dHJpYnV0ZSgndGFiLXBvc2l0aW9uJykgIT09IHBvc2l0aW9uKSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgndGFiLXBvc2l0aW9uJywgcG9zaXRpb24pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFBoeXNpY2FsbHkgcmVvcmRlciB0aGUgdGFicyBhbmQgcGFnZXMgdG8gcmVmbGVjdCB0aGUgZGVzaXJlZCBhcnJhbmdlbWVudC5cbiAgICAvLyBXZSBjb3VsZCBjaGFuZ2UgdGhlIHZpc3VhbCBhcHBlYXJhbmNlIGJ5IHJldmVyc2luZyB0aGUgb3JkZXIgb2YgdGhlIGZsZXhcbiAgICAvLyBib3gsIGJ1dCB0aGVuIHRoZSB2aXN1YWwgb3JkZXIgd291bGRuJ3QgcmVmbGVjdCB0aGUgZG9jdW1lbnQgb3JkZXIsIHdoaWNoXG4gICAgLy8gZGV0ZXJtaW5lcyBmb2N1cyBvcmRlci4gVGhhdCB3b3VsZCBzdXJwcmlzZSBhIHVzZXIgdHJ5aW5nIHRvIHRhYiB0aHJvdWdoXG4gICAgLy8gdGhlIGNvbnRyb2xzLlxuICAgIGxldCBmaXJzdEVsZW1lbnQgPSAocG9zaXRpb24gPT09ICd0b3AnIHx8IHBvc2l0aW9uID09PSAnbGVmdCcpID9cbiAgICAgIHRoaXMuJC50YWJzIDpcbiAgICAgIHRoaXMuJC5wYWdlcztcbiAgICBsZXQgbGFzdEVsZW1lbnQgPSAocG9zaXRpb24gPT09ICd0b3AnIHx8IHBvc2l0aW9uID09PSAnbGVmdCcpID9cbiAgICAgIHRoaXMuJC5wYWdlcyA6XG4gICAgICB0aGlzLiQudGFicztcbiAgICBpZiAoZmlyc3RFbGVtZW50Lm5leHRTaWJsaW5nICE9PSBsYXN0RWxlbWVudCkge1xuICAgICAgdGhpcy5zaGFkb3dSb290Lmluc2VydEJlZm9yZShmaXJzdEVsZW1lbnQsIGxhc3RFbGVtZW50KTtcbiAgICB9XG5cbiAgICB0aGlzLm5hdmlnYXRpb25BeGlzID0gKHBvc2l0aW9uID09PSAndG9wJyB8fCBwb3NpdGlvbiA9PT0gJ2JvdHRvbScpID9cbiAgICAgICdob3Jpem9udGFsJyA6XG4gICAgICAndmVydGljYWwnO1xuICB9XG5cbiAgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBgXG4gICAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIC8qXG4gICAgICAgKiBBdm9pZCBoYXZpbmcgdGFiIGNvbnRhaW5lciBzdHJldGNoIGFjcm9zcy4gVXNlciB3b24ndCBiZSBhYmxlIHRvIHNlZVxuICAgICAgICogaXQsIGJ1dCBzaW5jZSBpdCBoYW5kbGVzIHRoZSBrZXlib2FyZCwgaW4gTW9iaWxlIFNhZmFyaSBhIHRhcCBvbiB0aGVcbiAgICAgICAqIGNvbnRhaW5lciBiYWNrZ3JvdW5kIHdpbGwgY2F1c2UgdGhlIHJlZ2lvbiB0byBmbGFzaC4gQWxpZ25pbmcgdGhlXG4gICAgICAgKiByZWdpb24gY29sbGFwc2VzIGl0IGRvd24gdG8gaG9sZCBpdHMgY29udGVudHMuXG4gICAgICAgKi9cbiAgICAgICN0YWJzIHtcbiAgICAgICAgLyogRm9yIElFIGJ1ZyAoY2xpY2tpbmcgdGFiIHByb2R1Y2VzIGdhcCBiZXR3ZWVuIHRhYiBhbmQgcGFnZSkuICovXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLypcbiAgICAgICAgICogVHJ5IHRvIG9idGFpbiBmYXN0LXRhcCBiZWhhdmlvciBvbiBhbGwgdGFicy5cbiAgICAgICAgICogU2VlIGh0dHBzOi8vd2Via2l0Lm9yZy9ibG9nLzU2MTAvbW9yZS1yZXNwb25zaXZlLXRhcHBpbmctb24taW9zLy5cbiAgICAgICAgICovXG4gICAgICAgIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xuICAgICAgfVxuICAgICAgOmhvc3QoOm5vdCguc3ByZWFkKSkgI3RhYnMge1xuICAgICAgICAtd2Via2l0LWFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgICB9XG5cbiAgICAgICNwYWdlcyB7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLXdlYmtpdC1mbGV4OiAxO1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB9XG5cbiAgICAgICNwYWdlcyA6OnNsb3R0ZWQoKikge1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC13ZWJraXQtZmxleDogMTtcbiAgICAgICAgZmxleDogMTtcbiAgICAgIH1cblxuICAgICAgLnRhYiB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIC8qIExlZnQvcmlnaHQgcG9zaXRpb25zICovXG4gICAgICA6aG9zdChbdGFiLXBvc2l0aW9uPVwibGVmdFwiXSksXG4gICAgICA6aG9zdChbdGFiLXBvc2l0aW9uPVwicmlnaHRcIl0pIHtcbiAgICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgfVxuICAgICAgOmhvc3QoW3RhYi1wb3NpdGlvbj1cImxlZnRcIl0pICN0YWJzLFxuICAgICAgOmhvc3QoW3RhYi1wb3NpdGlvbj1cInJpZ2h0XCJdKSAjdGFicyB7XG4gICAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIH1cblxuICAgICAgLyogU3ByZWFkIHZhcmlhbnQgKi9cbiAgICAgIDpob3N0KC5zcHJlYWQpICN0YWJzIHtcbiAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICB9XG4gICAgICA6aG9zdCguc3ByZWFkKSAudGFiIHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgIH1cblxuICAgICAgLyogR2VuZXJpYyBzdHlsZSAqL1xuICAgICAgOmhvc3QoW2dlbmVyaWM9XCJcIl0pICNwYWdlcyB7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZ2VuZXJpYz1cIlwiXSkgLnRhYiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDAuNWVtIDAuNzVlbTtcbiAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMjVzO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZ2VuZXJpYz1cIlwiXSkgLnRhYi5zZWxlY3RlZCB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI2NjYztcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2dlbmVyaWM9XCJcIl0pIC50YWI6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgICAgfVxuXG4gICAgICAvKiBHZW5lcmljLCB0b3AvYm90dG9tIHBvc2l0aW9ucyAqL1xuICAgICAgOmhvc3QoW2dlbmVyaWM9XCJcIl1bdGFiLXBvc2l0aW9uPVwidG9wXCJdKSAudGFiOm5vdCg6bGFzdC1jaGlsZCksXG4gICAgICA6aG9zdChbZ2VuZXJpYz1cIlwiXVt0YWItcG9zaXRpb249XCJib3R0b21cIl0pIC50YWI6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMC4yZW07XG4gICAgICB9XG5cbiAgICAgIC8qIEdlbmVyaWMsIHRvcCBwb3NpdGlvbiAqL1xuICAgICAgOmhvc3QoW2dlbmVyaWM9XCJcIl1bdGFiLXBvc2l0aW9uPVwidG9wXCJdKSAudGFiIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNWVtIDAuMjVlbSAwIDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XG4gICAgICB9XG4gICAgICA6aG9zdChbZ2VuZXJpYz1cIlwiXVt0YWItcG9zaXRpb249XCJ0b3BcIl0pIC50YWIuc2VsZWN0ZWQge1xuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cblxuICAgICAgLyogR2VuZXJpYywgYm90dG9tIHBvc2l0aW9uICovXG4gICAgICA6aG9zdChbZ2VuZXJpYz1cIlwiXVt0YWItcG9zaXRpb249XCJib3R0b21cIl0pIC50YWIge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgMC4yNWVtIDAuMjVlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogLTFweDtcbiAgICAgIH1cbiAgICAgIDpob3N0KFtnZW5lcmljPVwiXCJdW3RhYi1wb3NpdGlvbj1cImJvdHRvbVwiXSkgLnRhYi5zZWxlY3RlZCB7XG4gICAgICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuXG4gICAgICAvKiBHZW5lcmljLCBsZWZ0L3JpZ2h0IHBvc2l0aW9ucyAqL1xuICAgICAgOmhvc3QoW2dlbmVyaWM9XCJcIl1bdGFiLXBvc2l0aW9uPVwibGVmdFwiXSkgLnRhYjpub3QoOmxhc3QtY2hpbGQpLFxuICAgICAgOmhvc3QoW2dlbmVyaWM9XCJcIl1bdGFiLXBvc2l0aW9uPVwicmlnaHRcIl0pIC50YWI6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuMmVtO1xuICAgICAgfVxuXG4gICAgICAvKiBHZW5lcmljLCBsZWZ0IHBvc2l0aW9uICovXG4gICAgICA6aG9zdChbZ2VuZXJpYz1cIlwiXVt0YWItcG9zaXRpb249XCJsZWZ0XCJdKSAudGFiIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNWVtIDAgMCAwLjI1ZW07XG4gICAgICAgIG1hcmdpbi1yaWdodDogLTFweDtcbiAgICAgIH1cbiAgICAgIDpob3N0KFtnZW5lcmljPVwiXCJdW3RhYi1wb3NpdGlvbj1cImxlZnRcIl0pIC50YWIuc2VsZWN0ZWQge1xuICAgICAgICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuXG4gICAgICAvKiBHZW5lcmljLCByaWdodCBwb3NpdGlvbiAqL1xuICAgICAgOmhvc3QoW2dlbmVyaWM9XCJcIl1bdGFiLXBvc2l0aW9uPVwicmlnaHRcIl0pIC50YWIge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAuMjVlbSAwLjI1ZW0gMDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xcHg7XG4gICAgICB9XG4gICAgICA6aG9zdChbZ2VuZXJpYz1cIlwiXVt0YWItcG9zaXRpb249XCJyaWdodFwiXSkgLnRhYi5zZWxlY3RlZCB7XG4gICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgaWQ9XCJ0YWJzXCI+PC9kaXY+XG4gICAgICA8ZGl2IGlkPVwicGFnZXNcIj5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG59XG5cblxuZnVuY3Rpb24gYXBwbHlTZWxlY3Rpb25Ub1RhYih0YWIsIHNlbGVjdGVkKSB7XG4gIHRvZ2dsZUNsYXNzKHRhYiwgJ3NlbGVjdGVkJywgc2VsZWN0ZWQpO1xuICB0YWIuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgc2VsZWN0ZWQpO1xufVxuXG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYmFzaWMtdGFiLXN0cmlwJywgVGFiU3RyaXApO1xuZXhwb3J0IGRlZmF1bHQgVGFiU3RyaXA7XG4iLCJpbXBvcnQgRWxlbWVudEJhc2UgZnJvbSAnLi4vLi4vYmFzaWMtZWxlbWVudC1iYXNlL3NyYy9FbGVtZW50QmFzZSc7XG5pbXBvcnQgR2VuZXJpYyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9HZW5lcmljJztcbmltcG9ydCBNb2RlcyBmcm9tICcuLi8uLi9iYXNpYy1tb2Rlcy9zcmMvTW9kZXMnOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcbmltcG9ydCBUYWJTdHJpcCBmcm9tICcuLi8uLi9iYXNpYy10YWItc3RyaXAvc3JjL1RhYlN0cmlwJzsgLy8ganNoaW50IGlnbm9yZTpsaW5lXG5pbXBvcnQgU2luZ2xlU2VsZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NpbmdsZVNlbGVjdGlvbic7XG5pbXBvcnQgVGFyZ2V0U2VsZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1RhcmdldFNlbGVjdGlvbic7XG5cblxuLyoqXG4gKiBBIHNldCBvZiBwYWdlcyB3aXRoIGEgdGFiIHN0cmlwIGdvdmVybmluZyB3aGljaCBwYWdlIGlzIHNob3duLlxuICpcbiAqIFRoaXMgc3RvY2sgY29tYmluYXRpb24gcHV0cyB0b2dldGhlciBhIFtiYXNpYy10YWItc3RyaXBdKC4uL2Jhc2ljLXRhYi1zdHJpcC8pXG4gKiBhbmQgYSBbYmFzaWMtbW9kZXNdKC4uL2Jhc2ljLW1vZGVzLykgZWxlbWVudC4gSWYgeW91J2QgbGlrZSB0byBjcmVhdGVcbiAqIHNvbWV0aGluZyBtb3JlIGNvbXBsZXggdGhhbiB0aGlzIGFycmFuZ2VtZW50LCB5b3UgY2FuIHVzZSBlaXRoZXIgb2YgdGhvc2VcbiAqIGVsZW1lbnRzIG9uIGl0cyBvd24uXG4gKlxuICogU2luY2UgdGhpcyBjb21wb25lbnQgdXNlcyBiYXNpYy10YWItc3RyaXAgaW50ZXJuYWxseSwgaXQgb2J0YWlucyB0aGUgbmFtZXMgb2ZcbiAqIHRoZSBpbmRpdmlkdWFsIHRhYnMgdGhlIHNhbWUgd2F5OiBmcm9tIGEgY2hpbGQncyBgYXJpYS1sYWJlbGAgcHJvcGVydHkuXG4gKiBFeGFtcGxlOlxuICpcbiAqICAgICA8YmFzaWMtdGFicz5cbiAqICAgICAgIDxkaXYgYXJpYS1sYWJlbD1cIk9uZVwiPlBhZ2Ugb25lPC9kaXY+XG4gKiAgICAgICA8ZGl2IGFyaWEtbGFiZWw9XCJUd29cIj5QYWdlIHR3bzwvZGl2PlxuICogICAgICAgPGRpdiBhcmlhLWxhYmVsPVwiVGhyZWVcIj5QYWdlIHRocmVlPC9kaXY+XG4gKiAgICAgPC9iYXNpYy10YWJzPlxuICpcbiAqIEBleHRlbmRzIEVsZW1lbnRCYXNlXG4gKiBAbWl4ZXMgR2VuZXJpY1xuICogQG1peGVzIFNpbmdsZVNlbGVjdGlvblxuICogQG1peGVzIFRhcmdldFNlbGVjdGlvblxuICovXG5jbGFzcyBUYWJzIGV4dGVuZHMgRWxlbWVudEJhc2UuY29tcG9zZShcbiAgR2VuZXJpYyxcbiAgU2luZ2xlU2VsZWN0aW9uLFxuICBUYXJnZXRTZWxlY3Rpb25cbikge1xuXG4gIGdldCBnZW5lcmljKCkge1xuICAgIHJldHVybiBzdXBlci5nZW5lcmljO1xuICB9XG4gIHNldCBnZW5lcmljKHZhbHVlKSB7XG4gICAgc3VwZXIuZ2VuZXJpYyA9IHZhbHVlO1xuICAgIC8vIEZvcndhcmQgdGhlIGdlbmVyaWMgdmFsdWUgdG8gdGhlIHRhYiBzdHJpcC5cbiAgICB0aGlzLiQudGFiU3RyaXAuZ2VuZXJpYyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBwb3NpdGlvbiBvZiB0aGUgdGFiIHN0cmlwIHJlbGF0aXZlIHRvIHRoZSBlbGVtZW50J3MgY2hpbGRyZW4uIFZhbGlkXG4gICAqIHZhbHVlcyBhcmUgXCJ0b3BcIiwgXCJsZWZ0XCIsIFwicmlnaHRcIiwgYW5kIFwiYm90dG9tXCIuXG4gICAqXG4gICAqIEBkZWZhdWx0IFwidG9wXCJcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCB0YWJQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kICYmIHRoaXMuJC50YWJTdHJpcC50YWJQb3NpdGlvbjtcbiAgfVxuICBzZXQgdGFiUG9zaXRpb24ocG9zaXRpb24pIHtcbiAgICB0aGlzLiQudGFiU3RyaXAudGFiUG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgfVxuXG4gIGdldCB0YXJnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuJCAmJiB0aGlzLiQubW9kZXM7XG4gIH1cblxuICBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB9XG5cbiAgICAgICN0YWJTdHJpcCB7XG4gICAgICAgIC13ZWJraXQtZmxleDogMTtcbiAgICAgICAgZmxleDogMTtcbiAgICAgIH1cblxuICAgICAgI21vZGVzIDo6c2xvdHRlZCgqKSB7XG4gICAgICAgIC13ZWJraXQtZmxleDogMTtcbiAgICAgICAgZmxleDogMTtcbiAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxiYXNpYy10YWItc3RyaXAgaWQ9XCJ0YWJTdHJpcFwiPlxuICAgICAgICA8YmFzaWMtbW9kZXMgaWQ9XCJtb2Rlc1wiPlxuICAgICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgICAgPC9iYXNpYy1tb2Rlcz5cbiAgICAgIDwvYmFzaWMtdGFiLXN0cmlwPlxuICAgIGA7XG4gIH1cblxufVxuXG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYmFzaWMtdGFicycsIFRhYnMpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX0FuaW1hdGlvblN0YWdlID0gcmVxdWlyZSgnLi4vLi4vYmFzaWMtYW5pbWF0aW9uLXN0YWdlL3NyYy9BbmltYXRpb25TdGFnZScpO1xuXG52YXIgX0FuaW1hdGlvblN0YWdlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0FuaW1hdGlvblN0YWdlKTtcblxudmFyIF9BcnJvd1NlbGVjdGlvbiA9IHJlcXVpcmUoJy4uLy4uL2Jhc2ljLWFycm93LXNlbGVjdGlvbi9zcmMvQXJyb3dTZWxlY3Rpb24nKTtcblxudmFyIF9BcnJvd1NlbGVjdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BcnJvd1NlbGVjdGlvbik7XG5cbnZhciBfQXV0b3NpemVUZXh0YXJlYSA9IHJlcXVpcmUoJy4uLy4uL2Jhc2ljLWF1dG9zaXplLXRleHRhcmVhL3NyYy9BdXRvc2l6ZVRleHRhcmVhJyk7XG5cbnZhciBfQXV0b3NpemVUZXh0YXJlYTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BdXRvc2l6ZVRleHRhcmVhKTtcblxudmFyIF9DYXJvdXNlbCA9IHJlcXVpcmUoJy4uLy4uL2Jhc2ljLWNhcm91c2VsL3NyYy9DYXJvdXNlbCcpO1xuXG52YXIgX0Nhcm91c2VsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Nhcm91c2VsKTtcblxudmFyIF9Db2xsYXBzaWJsZVBhbmVsID0gcmVxdWlyZSgnLi4vLi4vYmFzaWMtY29sbGFwc2libGUtcGFuZWwvc3JjL0NvbGxhcHNpYmxlUGFuZWwnKTtcblxudmFyIF9Db2xsYXBzaWJsZVBhbmVsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NvbGxhcHNpYmxlUGFuZWwpO1xuXG52YXIgX0N1cnJlbnRBbmNob3IgPSByZXF1aXJlKCcuLi8uLi9iYXNpYy1jdXJyZW50LWFuY2hvci9zcmMvQ3VycmVudEFuY2hvcicpO1xuXG52YXIgX0N1cnJlbnRBbmNob3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ3VycmVudEFuY2hvcik7XG5cbnZhciBfRmFkZU92ZXJmbG93ID0gcmVxdWlyZSgnLi4vLi4vYmFzaWMtZmFkZS1vdmVyZmxvdy9zcmMvRmFkZU92ZXJmbG93Jyk7XG5cbnZhciBfRmFkZU92ZXJmbG93MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0ZhZGVPdmVyZmxvdyk7XG5cbnZhciBfTGlzdEJveCA9IHJlcXVpcmUoJy4uLy4uL2Jhc2ljLWxpc3QtYm94L3NyYy9MaXN0Qm94Jyk7XG5cbnZhciBfTGlzdEJveDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9MaXN0Qm94KTtcblxudmFyIF9Nb2RlcyA9IHJlcXVpcmUoJy4uLy4uL2Jhc2ljLW1vZGVzL3NyYy9Nb2RlcycpO1xuXG52YXIgX01vZGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01vZGVzKTtcblxudmFyIF9QYWdlRG90cyA9IHJlcXVpcmUoJy4uLy4uL2Jhc2ljLXBhZ2UtZG90cy9zcmMvUGFnZURvdHMnKTtcblxudmFyIF9QYWdlRG90czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9QYWdlRG90cyk7XG5cbnZhciBfUGxheUNvbnRyb2xzID0gcmVxdWlyZSgnLi4vLi4vYmFzaWMtcGxheS1jb250cm9scy9zcmMvUGxheUNvbnRyb2xzJyk7XG5cbnZhciBfUGxheUNvbnRyb2xzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BsYXlDb250cm9scyk7XG5cbnZhciBfU2xpZGVzaG93ID0gcmVxdWlyZSgnLi4vLi4vYmFzaWMtc2xpZGVzaG93L3NyYy9TbGlkZXNob3cnKTtcblxudmFyIF9TbGlkZXNob3cyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU2xpZGVzaG93KTtcblxudmFyIF9TbGlkZXNob3dUaW1lciA9IHJlcXVpcmUoJy4uLy4uL2Jhc2ljLXNsaWRlc2hvdy10aW1lci9zcmMvU2xpZGVzaG93VGltZXInKTtcblxudmFyIF9TbGlkZXNob3dUaW1lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TbGlkZXNob3dUaW1lcik7XG5cbnZhciBfU2xpZGluZ0Nhcm91c2VsID0gcmVxdWlyZSgnLi4vLi4vYmFzaWMtc2xpZGluZy1jYXJvdXNlbC9zcmMvU2xpZGluZ0Nhcm91c2VsJyk7XG5cbnZhciBfU2xpZGluZ0Nhcm91c2VsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1NsaWRpbmdDYXJvdXNlbCk7XG5cbnZhciBfU2xpZGluZ1ZpZXdwb3J0ID0gcmVxdWlyZSgnLi4vLi4vYmFzaWMtc2xpZGluZy12aWV3cG9ydC9zcmMvU2xpZGluZ1ZpZXdwb3J0Jyk7XG5cbnZhciBfU2xpZGluZ1ZpZXdwb3J0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1NsaWRpbmdWaWV3cG9ydCk7XG5cbnZhciBfU3ByZWFkSXRlbXMgPSByZXF1aXJlKCcuLi8uLi9iYXNpYy1zcHJlYWQtaXRlbXMvc3JjL1NwcmVhZEl0ZW1zJyk7XG5cbnZhciBfU3ByZWFkSXRlbXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU3ByZWFkSXRlbXMpO1xuXG52YXIgX1RhYnMgPSByZXF1aXJlKCcuLi8uLi9iYXNpYy10YWJzL3NyYy9UYWJzJyk7XG5cbnZhciBfVGFiczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UYWJzKTtcblxudmFyIF9UYWJTdHJpcCA9IHJlcXVpcmUoJy4uLy4uL2Jhc2ljLXRhYi1zdHJpcC9zcmMvVGFiU3RyaXAnKTtcblxudmFyIF9UYWJTdHJpcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UYWJTdHJpcCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJaUlzSW1acGJHVWlPaUpoYkd3dWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXMTE5IiwiaW1wb3J0IEVsZW1lbnRCYXNlIGZyb20gJy4uLy4uL2Jhc2ljLWVsZW1lbnQtYmFzZS9zcmMvRWxlbWVudEJhc2UnO1xuXG5cbi8qXG4gKiBBIHNldCBvZiBldmVudHMgd2hpY2gsIGlmIGZpcmVkIGJ5IHRoZSBpbm5lciBzdGFuZGFyZCBlbGVtZW50LCBzaG91bGQgYmVcbiAqIHJlLXJhaXNlZCBieSB0aGUgY3VzdG9tIGVsZW1lbnQuIChXZSBvbmx5IG5lZWQgdG8gZG8gdGhhdCB1bmRlciBuYXRpdmVcbiAqIFNoYWRvdyBET00sIG5vdCB0aGUgcG9seWZpbGwuKVxuICpcbiAqIFRoZXNlIGFyZSBldmVudHMgd2hpY2ggYXJlIHNwZWMnZWQgdG8gTk9UIGdldCByZXRhcmdldHRlZCBhY3Jvc3MgYSBTaGFkb3cgRE9NXG4gKiBib3VuZGFyeSwgb3JnYW5pemVkIGJ5IHdoaWNoIGVsZW1lbnQocykgcmFpc2UgdGhlIGV2ZW50cy4gVG8gcHJvcGVybHlcbiAqIHNpbXVsYXRlIHRoZXNlLCB3ZSB3aWxsIG5lZWQgdG8gbGlzdGVuIGZvciB0aGUgcmVhbCBldmVudHMsIHRoZW4gcmUtcmFpc2UgYVxuICogc2ltdWxhdGlvbiBvZiB0aGUgb3JpZ2luYWwgZXZlbnQuIEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWVcbiAqIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9zaGFkb3ctZG9tLyNoLWV2ZW50cy10aGF0LWFyZS1ub3QtbGVha2VkLWludG8tYW5jZXN0b3ItdHJlZXMuXG4gKlxuICogSXQgYXBwZWFycyB0aGF0IHdlIGRvICpub3QqIG5lZWQgdG8gcmUtcmFpc2UgdGhlIG5vbi1idWJibGluZyBcImZvY3VzXCIgYW5kXG4gKiBcImJsdXJcIiBldmVudHMuIFRoZXNlIGFwcGVhciB0byBiZSBhdXRvbWF0aWNhbGx5IHJlLXJhaXNlZCBhcyBleHBlY3RlZCAtLSBidXRcbiAqIGl0J3Mgbm90IGNsZWFyIHdoeSB0aGF0IGhhcHBlbnMuXG4gKlxuICogVGhlIGxpc3QgYmVsb3cgaXMgcmVhc29uYWJseSBjb21wbGV0ZS4gSXQgb21pdHMgZWxlbWVudHMgdGhhdCBjYW5ub3QgYmVcbiAqIHdyYXBwZWQgKHNlZSBjbGFzcyBub3RlcyBhYm92ZSkuIEFsc28sIHdlIGhhdmVuJ3QgYWN0dWFsbHkgdHJpZWQgd3JhcHBpbmdcbiAqIGV2ZXJ5IGVsZW1lbnQgaW4gdGhpcyBsaXN0OyBzb21lIG9mIHRoZSBtb3JlIG9ic2N1cmUgb25lcyBtaWdodCBub3QgYWN0dWFsbHlcbiAqIHdvcmsgYXMgZXhwZWN0ZWQsIGJ1dCBpdCB3YXMgZWFzaWVyIHRvIGluY2x1ZGUgdGhlbSBmb3IgY29tcGxldGVuZXNzIHRoYW5cbiAqIHRvIGFjdHVhbGx5IHZlcmlmeSB3aGV0aGVyIG9yIG5vdCB0aGUgZWxlbWVudCBjYW4gYmUgd3JhcHBlZC5cbiAqL1xuY29uc3QgcmVyYWlzZUV2ZW50cyA9IHtcbiAgYWRkcmVzczogWydzY3JvbGwnXSxcbiAgYmxvY2txdW90ZTogWydzY3JvbGwnXSxcbiAgY2FwdGlvbjogWydzY3JvbGwnXSxcbiAgY2VudGVyOiBbJ3Njcm9sbCddLFxuICBkZDogWydzY3JvbGwnXSxcbiAgZGlyOiBbJ3Njcm9sbCddLFxuICBkaXY6IFsnc2Nyb2xsJ10sXG4gIGRsOiBbJ3Njcm9sbCddLFxuICBkdDogWydzY3JvbGwnXSxcbiAgZmllbGRzZXQ6IFsnc2Nyb2xsJ10sXG4gIGZvcm06IFsncmVzZXQnLCAnc2Nyb2xsJ10sXG4gIGZyYW1lOiBbJ2xvYWQnXSxcbiAgaDE6IFsnc2Nyb2xsJ10sXG4gIGgyOiBbJ3Njcm9sbCddLFxuICBoMzogWydzY3JvbGwnXSxcbiAgaDQ6IFsnc2Nyb2xsJ10sXG4gIGg1OiBbJ3Njcm9sbCddLFxuICBoNjogWydzY3JvbGwnXSxcbiAgaWZyYW1lOiBbJ2xvYWQnXSxcbiAgaW1nOiBbJ2Fib3J0JywgJ2Vycm9yJywgJ2xvYWQnXSxcbiAgaW5wdXQ6IFsnYWJvcnQnLCAnY2hhbmdlJywgJ2Vycm9yJywgJ3NlbGVjdCcsICdsb2FkJ10sXG4gIGtleWdlbjogWydyZXNldCcsICdzZWxlY3QnXSxcbiAgbGk6IFsnc2Nyb2xsJ10sXG4gIGxpbms6IFsnbG9hZCddLFxuICBtZW51OiBbJ3Njcm9sbCddLFxuICBvYmplY3Q6IFsnZXJyb3InLCAnc2Nyb2xsJ10sXG4gIG9sOiBbJ3Njcm9sbCddLFxuICBwOiBbJ3Njcm9sbCddLFxuICBzY3JpcHQ6IFsnZXJyb3InLCAnbG9hZCddLFxuICBzZWxlY3Q6IFsnY2hhbmdlJywgJ3Njcm9sbCddLFxuICB0Ym9keTogWydzY3JvbGwnXSxcbiAgdGZvb3Q6IFsnc2Nyb2xsJ10sXG4gIHRoZWFkOiBbJ3Njcm9sbCddLFxuICB0ZXh0YXJlYTogWydjaGFuZ2UnLCAnc2VsZWN0JywgJ3Njcm9sbCddXG59O1xuXG5cbi8vIEtlZXAgdHJhY2sgb2Ygd2hpY2ggcmUtcmFpc2VkIGV2ZW50cyBzaG91bGQgYnViYmxlLlxuY29uc3QgZXZlbnRCdWJibGVzID0ge1xuICBhYm9ydDogdHJ1ZSxcbiAgY2hhbmdlOiB0cnVlLFxuICByZXNldDogdHJ1ZVxufTtcblxuXG4vLyBFbGVtZW50cyB3aGljaCBhcmUgZGlzcGxheTogYmxvY2sgYnkgZGVmYXVsdC5cbi8vIFNvdXJjZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRNTC9CbG9jay1sZXZlbF9lbGVtZW50c1xuY29uc3QgYmxvY2tFbGVtZW50cyA9IFtcbiAgJ2FkZHJlc3MnLFxuICAnYXJ0aWNsZScsXG4gICdhc2lkZScsXG4gICdibG9ja3F1b3RlJyxcbiAgJ2NhbnZhcycsXG4gICdkZCcsXG4gICdkaXYnLFxuICAnZGwnLFxuICAnZmllbGRzZXQnLFxuICAnZmlnY2FwdGlvbicsXG4gICdmaWd1cmUnLFxuICAnZm9vdGVyJyxcbiAgJ2Zvcm0nLFxuICAnaDEnLFxuICAnaDInLFxuICAnaDMnLFxuICAnaDQnLFxuICAnaDUnLFxuICAnaDYnLFxuICAnaGVhZGVyJyxcbiAgJ2hncm91cCcsXG4gICdocicsXG4gICdsaScsXG4gICdtYWluJyxcbiAgJ25hdicsXG4gICdub3NjcmlwdCcsXG4gICdvbCcsXG4gICdvdXRwdXQnLFxuICAncCcsXG4gICdwcmUnLFxuICAnc2VjdGlvbicsXG4gICd0YWJsZScsXG4gICd0Zm9vdCcsXG4gICd1bCcsXG4gICd2aWRlbydcbl07XG5cblxuLyoqXG4gKiBXcmFwcyBhIHN0YW5kYXJkIEhUTUwgZWxlbWVudCBzbyB0aGF0IHRoZSBzdGFuZGFyZCBiZWhhdmlvciBjYW4gdGhlbiBiZVxuICogZXh0ZW5kZWQuXG4gKlxuICogW0xpdmUgZGVtb10oaHR0cDovL2Jhc2ljd2ViY29tcG9uZW50cy5vcmcvYmFzaWMtd2ViLWNvbXBvbmVudHMvcGFja2FnZXMvYmFzaWMtd3JhcHBlZC1zdGFuZGFyZC1lbGVtZW50LylcbiAqXG4gKiBTZWUgYWxzbyBbYmFzaWMtYXV0b3NpemUtdGV4dGFyZWFdKC4uL2Jhc2ljLWF1dG9zaXplLXRleHRhcmVhKSBhbmRcbiAqIFtiYXNpYy1jdXJyZW50LWFuY2hvcl0oLi4vYmFzaWMtY3VycmVudC1hbmNob3IpLiBUaGUgZm9ybWVyIHVzZXNcbiAqIFdyYXBwZWRTdGFuZGFyZEVsZW1lbnQgdG8gd3JhcCBhIHN0YW5kYXJkIGA8dGV4dGFyZWE+YCBhbmQgYDxhPmAsXG4gKiByZXNwZWN0aXZlbHkuXG4gKlxuICogVGhlIEN1c3RvbSBFbGVtZW50cyBzcGVjIGRvZXMgbm90IGN1cnJlbnRseSAoYXMgb2YgTWFyY2ggMjAxNikgYWxsb3cgeW91IHRvXG4gKiBleHRlbmQgdGhlIGJlaGF2aW9yIG9mIGEgc3RhbmRhcmQgSFRNTCBlbGVtZW50IGxpa2UgYDxhPmAgb3IgYDxidXR0b24+YC5cbiAqIEFzIGEgcGFydGlhbCB3b3JrYXJvdW5kLCB0aGUgV3JhcHBlZFN0YW5kYXJkRWxlbWVudCBjbGFzcyBjYW4gY3JlYXRlIGEgY2xhc3NcbiAqIGZvciB5b3UgdGhhdCB3cmFwcyBhbiBpbnN0YW5jZSBvZiBhIHN0YW5kYXJkIEhUTUwgZWxlbWVudC4gRm9yIGV4YW1wbGUsIHRoZVxuICogY29kZSBiZWxvdyBjcmVhdGVzIGEgY2xhc3MgdGhhdCB3aWxsIHdyYXAgYW4gaW5zdGFuY2Ugb2YgYSBzdGFuZGFyZCBgPGE+YFxuICogZWxlbWVudDpcbiAqXG4gKiAgICAgY2xhc3MgV3JhcHBlZEEgZXh0ZW5kcyBXcmFwcGVkU3RhbmRhcmRFbGVtZW50LndyYXAoJ2EnKSB7XG4gKiAgICAgICBjdXN0b21NZXRob2QoKSB7IC4uLiB9XG4gKiAgICAgfVxuICogICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnd3JhcHBlZC1hJywgV3JhcHBlZEEpO1xuICpcbiAqIEFuIGluc3RhbmNlIG9mIHRoZSByZXN1bHRpbmcgY2xhc3Mgd2lsbCBsb29rIHRvIHRoZSB1c2VyIGxpa2UgYW4gaW5zdGFuY2Ugb2ZcbiAqIHRoZSBzdGFuZGFyZCBlbGVtZW50IGNsYXNzIGl0IHdyYXBzLiBUaGUgcmVzdWx0aW5nIGNsYXNzIHdpbGwgKm5vdCogYmUgYW5cbiAqIGBpbnN0YW5jZW9mYCB0aGUgc3RhbmRhcmQgY2xhc3MgKGhlcmUsIEhUTUxBbmNob3JFbGVtZW50KS4gQW5vdGhlciBsaW1pdGF0aW9uXG4gKiBpcyB0aGF0IHRoZSByZXN1bHRpbmcgYDx3cmFwcGVkLWE+YCB3aWxsIG5vdCBhdXRvbWF0aWNhbGx5IHBpY2sgdXAgQ1NTIHN0eWxlc1xuICogZm9yIHN0YW5kYXJkIGA8YT5gIGVsZW1lbnRzLiBIb3dldmVyLCB0aGUgcmVzdWx0aW5nIGNsYXNzICpjYW4qIGJlIGV4dGVuZGVkLlxuICogRS5nLiwgaW5zdGFuY2VzIG9mIHRoZSBhYm92ZSBjbGFzcyBoYXZlIGEgYGN1c3RvbU1ldGhvZCgpYCBhdmFpbGFibGUgdG8gdGhlbS5cbiAqXG4gKiBBbnkgcHJvcGVydGllcyBkZWZpbmVkIGJ5IHRoZSBvcmlnaW5hbCBzdGFuZGFyZCBlbGVtZW50IHdpbGwgYmUgZXhwb3NlZCBvblxuICogdGhlIHJlc3VsdGluZyB3cmFwcGVyIGNsYXNzLCBhbmQgY2FsbHMgdG8gZ2V0IG9yIHNldCB0aG9zZSBwcm9wZXJ0aWVzIHdpbGwgYmVcbiAqIGRlbGVnYXRlZCB0byB0aGUgd3JhcHBlZCBlbGVtZW50IGluc3RhbmNlLiBDb250aW51aW5nIHRoZSBhYm92ZSBleGFtcGxlOlxuICpcbiAqICAgICBsZXQgd3JhcHBlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3dyYXBwZWQtYScpO1xuICogICAgIHdyYXBwZWQuaHJlZiA9ICdodHRwOi8vZXhhbXBsZS5jb20vJztcbiAqICAgICB3cmFwcGVkLnRleHRDb250ZW50ID0gJ0NsaWNrIGhlcmUnO1xuICpcbiAqIEhlcmUsIHRoZSBjcmVhdGVkIGN1c3RvbSBgPHdyYXBwZWQtYT5gIGVsZW1lbnQgd2lsbCBjb250YWluIGluc2lkZSBpdHNcbiAqIHNoYWRvdyB0cmVlIGFuIGluc3RhbmNlIG9mIGEgc3RhbmRhcmQgYDxhPmAgZWxlbWVudC4gVGhlIGNhbGwgdG8gc2V0IHRoZVxuICogd3JhcHBlcidzIGBocmVmYCBwcm9wZXJ0eSB3aWxsIHVsdGltYXRlbHkgc2V0IHRoZSBgaHJlZmAgb24gdGhlIGlubmVyIGxpbmsuXG4gKiBNb3Jlb3ZlciwgdGhlIHRleHQgY29udGVudCBvZiB0aGUgYDx3cmFwcGVkLWE+YCBlbGVtZW50IHdpbGwgYXBwZWFyIGluc2lkZVxuICogdGhlIGlubmVyIGxpbmsuIFRoZSByZXN1bHQgb2YgYWxsIHRoaXMgaXMgdGhhdCB0aGUgdXNlciB3aWxsIHNlZSB3aGF0ICpsb29rcypcbiAqIGxpa2UgYSBub3JtYWwgbGluaywganVzdCBhcyBpZiB5b3UgaGFkIHdyaXR0ZW5cbiAqIGA8YSBocmVmPVwiaHR0cDovL2V4YW1wbGUuY29tL1wiPkNsaWNrIGhlcmU8L2E+YC4gSG93ZXZlciwgdGhlIGFjdHVhbCBlbGVtZW50XG4gKiB3aWxsIGJlIGFuIGluc3RhbmNlIG9mIHlvdXIgY3VzdG9tIGNsYXNzLCB3aXRoIHdoYXRldmVyIGJlaGF2aW9yIHlvdSd2ZVxuICogZGVmaW5lZCBmb3IgaXQuXG4gKlxuICogV3JhcHBlZCBlbGVtZW50cyBzaG91bGQgcmFpc2UgdGhlIHNhbWUgZXZlbnRzIGFzIHRoZSBvcmlnaW5hbCBzdGFuZGFyZFxuICogZWxlbWVudHMuIEUuZy4sIGlmIHlvdSB3cmFwIGFuIGA8aW1nPmAgZWxlbWVudCwgdGhlIHdyYXBwZWQgcmVzdWx0IHdpbGwgcmFpc2VcbiAqIHRoZSBzdGFuZGFyZCBgbG9hZGAgZXZlbnQgYXMgZXhwZWN0ZWQuXG4gKlxuICogU29tZSBlbGVtZW50cywgc3VjaCBhcyBgPGJvZHk+YCwgYDxodG1sPmAsIGFuZCBgPHN0eWxlPmAgY2Fubm90IGJlIHdyYXBwZWRcbiAqIGFuZCBzdGlsbCBhY2hpZXZlIHRoZWlyIHN0YW5kYXJkIGJlaGF2aW9yLlxuICpcbiAqIEBleHRlbmRzIEVsZW1lbnRCYXNlXG4gKi9cbmNsYXNzIFdyYXBwZWRTdGFuZGFyZEVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50QmFzZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8vIExpc3RlbiBmb3IgYW55IGV2ZW50cyByYWlzZWQgYnkgdGhlIGlubmVyIGVsZW1lbnQgd2hpY2ggd2lsbCBub3RcbiAgICAvLyBhdXRvbWF0aWNhbGx5IGJlIHJldGFyZ2V0dGVkIGFjcm9zcyB0aGUgU2hhZG93IERPTSBib3VuZGFyeSwgYW5kIHJlLXJhaXNlXG4gICAgLy8gdGhvc2UgZXZlbnRzIHdoZW4gdGhleSBoYXBwZW4uXG4gICAgLy9cbiAgICAvLyBOb3RlOiBJdCdzIHVuY2xlYXIgd2h5IHdlIG5lZWQgdG8gZG8gdGhpcyBpbiB0aGUgU2hhZG93IERPTSBwb2x5ZmlsbC5cbiAgICAvLyBJbiB0aGVvcnksIGV2ZW50cyBpbiB0aGUgbGlnaHQgRE9NIHNob3VsZCBidWJibGUgYXMgbm9ybWFsLiBCdXQgdGhpc1xuICAgIC8vIGNvZGUgYXBwZWFycyB0byBiZSByZXF1aXJlZCBpbiB0aGUgcG9seWZpbGwgY2FzZSBhcyB3ZWxsLlxuICAgIGxldCBldmVudE5hbWVzID0gcmVyYWlzZUV2ZW50c1t0aGlzLmV4dGVuZHNdIHx8IFtdO1xuICAgIGV2ZW50TmFtZXMuZm9yRWFjaChldmVudE5hbWUgPT4ge1xuICAgICAgdGhpcy5pbm5lci5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgcmVhbEV2ZW50ID0+IHtcbiAgICAgICAgbGV0IGV2ZW50ID0gbmV3IEV2ZW50KGV2ZW50TmFtZSwge1xuICAgICAgICAgIGJ1YmJsZXM6IGV2ZW50QnViYmxlc1tldmVudE5hbWVdIHx8IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQSBkZXNjcmlwdGlvbiBmb3IgdGhlIHVzZXIgb2YgdGhlIGVsZW1lbnQncyBwdXJwb3NlIG9uIHRoZSBwYWdlLiBTZXR0aW5nXG4gICAqIHRoaXMgYXBwbGllcyB0aGUgbGFiZWwgdG8gdGhlIGlubmVyIGVsZW1lbnQsIGVuc3VyaW5nIHRoYXQgc2NyZWVuIHJlYWRlcnNcbiAgICogYW5kIG90aGVyIGFzc2lzdGl2ZSB0ZWNobm9sb2dpZXMgd2lsbCBwcm92aWRlIGEgbWVhbmluZ2Z1bCBkZXNjcmlwdGlvbiB0b1xuICAgKiB0aGUgdXNlci5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCBhcmlhTGFiZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5uZXIuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJyk7XG4gIH1cbiAgc2V0IGFyaWFMYWJlbChsYWJlbCkge1xuICAgIC8vIFByb3BhZ2F0ZSB0aGUgQVJJQSBsYWJlbCB0byB0aGUgaW5uZXIgdGV4dGFyZWEuXG4gICAgdGhpcy5pbm5lci5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBsYWJlbCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHJlZmVyZW5jZSB0byB0aGUgaW5uZXIgc3RhbmRhcmQgSFRNTCBlbGVtZW50LlxuICAgKlxuICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAqL1xuICBnZXQgaW5uZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuJC5pbm5lcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgY29waWVkIGludG8gdGhlIHNoYWRvdyB0cmVlIG9mIG5ldyBpbnN0YW5jZXMgb2YgdGhpcyBlbGVtZW50LlxuICAgKlxuICAgKiBUaGUgZGVmYXVsdCB2YWx1ZSBvZiB0aGlzIHByb3BlcnR5IGlzIGEgdGVtcGxhdGUgdGhhdCBpbmNsdWRlcyBhbiBpbnN0YW5jZVxuICAgKiB0aGUgc3RhbmRhcmQgZWxlbWVudCBiZWluZyB3cmFwcGVkLCB3aXRoIGEgYDxzbG90PmAgZWxlbWVudCBpbnNpZGUgdGhhdFxuICAgKiB0byBwaWNrIHVwIHRoZSBlbGVtZW50J3MgbGlnaHQgRE9NIGNvbnRlbnQuIEZvciBleGFtcGxlLCBpZiB5b3Ugd3JhcCBhblxuICAgKiBgPGE+YCBlbGVtZW50LCB0aGVuIHRoZSBkZWZhdWx0IHRlbXBsYXRlIHdpbGwgbG9vayBsaWtlOlxuICAgKlxuICAgKiAgICAgPHRlbXBsYXRlPlxuICAgKiAgICAgICA8c3R5bGU+XG4gICAqICAgICAgIDpob3N0IHtcbiAgICogICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAqICAgICAgIH1cbiAgICogICAgICAgPC9zdHlsZT5cbiAgICogICAgICAgPGEgaWQ9XCJpbm5lclwiPlxuICAgKiAgICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICogICAgICAgPC9hPlxuICAgKiAgICAgPC90ZW1wbGF0ZT5cbiAgICpcbiAgICogVGhlIGBkaXNwbGF5YCBzdHlsaW5nIGFwcGxpZWQgdG8gdGhlIGhvc3Qgd2lsbCBiZSBgYmxvY2tgIGZvciBlbGVtZW50cyB0aGF0XG4gICAqIGFyZSBibG9jayBlbGVtZW50cyBieSBkZWZhdWx0LCBhbmQgYGlubGluZS1ibG9ja2AgKG5vdCBgaW5saW5lYCkgZm9yIG90aGVyXG4gICAqIGVsZW1lbnRzLlxuICAgKlxuICAgKiBJZiB5b3UnZCBsaWtlIHRoZSB0ZW1wbGF0ZSB0byBpbmNsdWRlIG90aGVyIGVsZW1lbnRzLCB0aGVuIG92ZXJyaWRlIHRoaXNcbiAgICogcHJvcGVydHkgYW5kIHJldHVybiBhIHRlbXBsYXRlIG9mIHlvdXIgb3duLiBUaGUgdGVtcGxhdGUgc2hvdWxkIGluY2x1ZGUgYW5cbiAgICogaW5zdGFuY2Ugb2YgdGhlIHN0YW5kYXJkIEhUTUwgZWxlbWVudCB5b3UgYXJlIHdyYXBwaW5nLCBhbmQgdGhlIElEIG9mIHRoYXRcbiAgICogZWxlbWVudCBzaG91bGQgYmUgXCJpbm5lclwiLlxuICAgKlxuICAgKiBAdHlwZSB7KHN0cmluZ3xIVE1MVGVtcGxhdGVFbGVtZW50KX1cbiAgICovXG4gIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICBsZXQgZGlzcGxheSA9IGJsb2NrRWxlbWVudHMuaW5kZXhPZih0aGlzLmV4dGVuZHMpID49IDAgP1xuICAgICAgJ2Jsb2NrJyA6XG4gICAgICAnaW5saW5lLWJsb2NrJztcbiAgICAvLyBUT0RPOiBVc2Ugc2xvdCBpbnN0ZWFkIG9mIGNvbnRlbnQuXG4gICAgcmV0dXJuIGA8c3R5bGU+Omhvc3QgeyBkaXNwbGF5OiAke2Rpc3BsYXl9fTwvc3R5bGU+PCR7dGhpcy5leHRlbmRzfSBpZD1cImlubmVyXCI+PHNsb3Q+PC9zbG90PjwvJHt0aGlzLmV4dGVuZHN9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgY2xhc3MgdGhhdCB3cmFwcyBhIHN0YW5kYXJkIEhUTUwgZWxlbWVudC5cbiAgICpcbiAgICogTm90ZSB0aGF0IHRoZSByZXN1bHRpbmcgY2xhc3MgaXMgYSBzdWJjbGFzcyBvZiBXcmFwcGVkU3RhbmRhcmRFbGVtZW50LCBub3RcbiAgICogdGhlIHN0YW5kYXJkIGNsYXNzIGJlaW5nIHdyYXBwZWQuIEUuZy4sIGlmIHlvdSBjYWxsXG4gICAqIGBXcmFwcGVkU3RhbmRhcmRFbGVtZW50LndyYXAoJ2EnKWAsIHlvdSB3aWxsIGdldCBhIGNsYXNzIHdob3NlIHNoYWRvdyB0cmVlXG4gICAqIHdpbGwgaW5jbHVkZSBhbiBhbmNob3IgZWxlbWVudCwgYnV0IHRoZSBjbGFzcyB3aWxsICpub3QqIGluaGVyaXQgZnJvbVxuICAgKiBIVE1MQW5jaG9yRWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV4dGVuZHNUYWcgLSB0aGUgc3RhbmRhcmQgSFRNTCBlbGVtZW50IHRhZyB0byBleHRlbmRcbiAgICovXG4gIHN0YXRpYyB3cmFwKGV4dGVuZHNUYWcpIHtcblxuICAgIC8vIENyZWF0ZSB0aGUgbmV3IGNsYXNzLlxuICAgIGNsYXNzIFdyYXBwZWQgZXh0ZW5kcyBXcmFwcGVkU3RhbmRhcmRFbGVtZW50IHt9XG5cbiAgICAvLyBJbmRpY2F0ZSB3aGljaCB0YWcgaXQgd3JhcHMuXG4gICAgV3JhcHBlZC5wcm90b3R5cGUuZXh0ZW5kcyA9IGV4dGVuZHNUYWc7XG5cbiAgICAvLyBDcmVhdGUgZ2V0dGVyL3NldHRlcnMgdGhhdCBkZWxlZ2F0ZSB0byB0aGUgd3JhcHBlZCBlbGVtZW50LlxuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChleHRlbmRzVGFnKTtcbiAgICBsZXQgZXh0ZW5kc1Byb3RvdHlwZSA9IGVsZW1lbnQuY29uc3RydWN0b3IucHJvdG90eXBlO1xuICAgIGxldCBuYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGV4dGVuZHNQcm90b3R5cGUpO1xuICAgIG5hbWVzLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgIGxldCBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihleHRlbmRzUHJvdG90eXBlLCBuYW1lKTtcbiAgICAgICAgbGV0IGRlbGVnYXRlID0gY3JlYXRlUHJvcGVydHlEZWxlZ2F0ZShuYW1lLCBkZXNjcmlwdG9yKTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdyYXBwZWQucHJvdG90eXBlLCBuYW1lLCBkZWxlZ2F0ZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gV3JhcHBlZDtcbiAgfVxuXG59XG5cblxuZnVuY3Rpb24gY3JlYXRlUHJvcGVydHlEZWxlZ2F0ZShuYW1lLCBkZXNjcmlwdG9yKSB7XG4gIGxldCBkZWxlZ2F0ZSA9IHtcbiAgICBjb25maWd1cmFibGU6IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlLFxuICAgIGVudW1lcmFibGU6IGRlc2NyaXB0b3IuZW51bWVyYWJsZSxcbiAgfTtcbiAgaWYgKGRlc2NyaXB0b3IuZ2V0KSB7XG4gICAgZGVsZWdhdGUuZ2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbm5lcltuYW1lXTtcbiAgICB9O1xuICB9XG4gIGlmIChkZXNjcmlwdG9yLnNldCkge1xuICAgIGRlbGVnYXRlLnNldCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICB0aGlzLmlubmVyW25hbWVdID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuICBpZiAoZGVzY3JpcHRvci53cml0YWJsZSkge1xuICAgIGRlbGVnYXRlLndyaXRhYmxlID0gZGVzY3JpcHRvci53cml0YWJsZTtcbiAgfVxuICByZXR1cm4gZGVsZWdhdGU7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgV3JhcHBlZFN0YW5kYXJkRWxlbWVudDtcbiJdfQ==
