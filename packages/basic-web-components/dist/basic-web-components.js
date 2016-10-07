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

    if (!_this.classList.contains('showArrows')) {
      // Determine whether we should show arrow buttons or not.
      if (deviceSupportsTouch()) {
        // A touch device might also support a mouse, but we can't know whether
        // there's actually a mouse until we hear from it.
        listenForMouse(_this);
      } else {
        // The device doesn't support touch, so assume it has a mouse.
        showArrows(_this);
      }
    }
    return _this;
  }

  _createClass(ArrowSelection, [{
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
   * [SingleSelection](SingleSelection.md) mixin for that purpose.
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwYWNrYWdlcy9iYXNpYy1hbmltYXRpb24tc3RhZ2Uvc3JjL0FuaW1hdGlvblN0YWdlLmpzIiwicGFja2FnZXMvYmFzaWMtYXJyb3ctc2VsZWN0aW9uL3NyYy9BcnJvd1NlbGVjdGlvbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWF1dG9zaXplLXRleHRhcmVhL3NyYy9BdXRvc2l6ZVRleHRhcmVhLmpzIiwicGFja2FnZXMvYmFzaWMtY2Fyb3VzZWwvc3JjL0Nhcm91c2VsLmpzIiwicGFja2FnZXMvYmFzaWMtY29sbGFwc2libGUtcGFuZWwvc3JjL0NvbGxhcHNpYmxlUGFuZWwuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9BdHRyaWJ1dGVNYXJzaGFsbGluZy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NsaWNrU2VsZWN0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ29sbGVjdGl2ZS5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NvbXBvc2FibGUuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Db250ZW50QXNJdGVtcy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NvbnRlbnRGaXJzdENoaWxkVGFyZ2V0LmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlyZWN0aW9uU2VsZWN0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlzdHJpYnV0ZWRDaGlsZHJlbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9GcmFjdGlvbmFsU2VsZWN0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvR2VuZXJpYy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0tleWJvYXJkLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvS2V5Ym9hcmREaXJlY3Rpb24uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9LZXlib2FyZFBhZ2VkU2VsZWN0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvS2V5Ym9hcmRQcmVmaXhTZWxlY3Rpb24uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9PcGVuQ2xvc2UuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TZWxlY3Rpb25BbmltYXRpb24uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TZWxlY3Rpb25BcmlhQWN0aXZlLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2VsZWN0aW9uSGlnaGxpZ2h0LmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2VsZWN0aW9uSW5WaWV3LmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2hhZG93RWxlbWVudFJlZmVyZW5jZXMuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TaGFkb3dUZW1wbGF0ZS5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NpbmdsZVNlbGVjdGlvbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1N3aXBlRGlyZWN0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvVGFyZ2V0SW5Db2xsZWN0aXZlLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvVGFyZ2V0U2VsZWN0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvVGltZXJTZWxlY3Rpb24uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9UcmFja3BhZERpcmVjdGlvbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL2NyZWF0ZVN5bWJvbC5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL21pY3JvdGFzay5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL3JlbmRlckFycmF5QXNFbGVtZW50cy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL3RvZ2dsZUNsYXNzLmpzIiwicGFja2FnZXMvYmFzaWMtY3VycmVudC1hbmNob3Ivc3JjL0N1cnJlbnRBbmNob3IuanMiLCJwYWNrYWdlcy9iYXNpYy1lbGVtZW50LWJhc2Uvc3JjL0VsZW1lbnRCYXNlLmpzIiwicGFja2FnZXMvYmFzaWMtZmFkZS1vdmVyZmxvdy9zcmMvRmFkZU92ZXJmbG93LmpzIiwicGFja2FnZXMvYmFzaWMtbGlzdC1ib3gvc3JjL0xpc3RCb3guanMiLCJwYWNrYWdlcy9iYXNpYy1tb2Rlcy9zcmMvTW9kZXMuanMiLCJwYWNrYWdlcy9iYXNpYy1wYWdlLWRvdHMvc3JjL1BhZ2VEb3RzLmpzIiwicGFja2FnZXMvYmFzaWMtcGxheS1jb250cm9scy9zcmMvUGxheUNvbnRyb2xzLmpzIiwicGFja2FnZXMvYmFzaWMtc2xpZGVzaG93LXRpbWVyL3NyYy9TbGlkZXNob3dUaW1lci5qcyIsInBhY2thZ2VzL2Jhc2ljLXNsaWRlc2hvdy9zcmMvU2xpZGVzaG93LmpzIiwicGFja2FnZXMvYmFzaWMtc2xpZGluZy1jYXJvdXNlbC9zcmMvU2xpZGluZ0Nhcm91c2VsLmpzIiwicGFja2FnZXMvYmFzaWMtc2xpZGluZy12aWV3cG9ydC9zcmMvU2xpZGluZ1ZpZXdwb3J0LmpzIiwicGFja2FnZXMvYmFzaWMtc3ByZWFkLWl0ZW1zL3NyYy9TcHJlYWRJdGVtcy5qcyIsInBhY2thZ2VzL2Jhc2ljLXRhYi1zdHJpcC9zcmMvVGFiU3RyaXAuanMiLCJwYWNrYWdlcy9iYXNpYy10YWJzL3NyYy9UYWJzLmpzIiwicGFja2FnZXMvYmFzaWMtd2ViLWNvbXBvbmVudHMvc3JjL2FsbC5qcyIsInBhY2thZ2VzL2Jhc2ljLXdyYXBwZWQtc3RhbmRhcmQtZWxlbWVudC9zcmMvV3JhcHBlZFN0YW5kYXJkRWxlbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1NBLElBQUksSUFBSSxHQUFHLHNCQUFZLE9BQU8seUxBTzdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUM7SUE0QkksY0FBYztZQUFkLGNBQWM7O1dBQWQsY0FBYzswQkFBZCxjQUFjOztrRUFBZCxjQUFjOzs7ZUFBZCxjQUFjOzt3Q0FFRTtBQUNsQixxQ0FIRSxjQUFjLHlDQUdhO0FBQUUsbUNBSDdCLGNBQWMsbURBR3lDO09BQUU7QUFDM0QsVUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztLQUMvQjs7O3dCQUVjO0FBQ2Isb1VBZ0JFO0tBQ0g7OztTQXpCRyxjQUFjO0VBQVMsSUFBSTs7QUE4QmpDLGNBQWMsQ0FBQyxNQUFNLENBQUMsdUJBQXVCLEVBQUUsY0FBYyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RC9ELElBQU0sdUJBQXVCLEdBQUcsNEJBQWEsbUJBQW1CLENBQUMsQ0FBQztBQUNsRSxJQUFNLHVCQUF1QixHQUFHLDRCQUFhLG1CQUFtQixDQUFDLENBQUM7QUFDbEUsSUFBTSxnQkFBZ0IsR0FBRyw0QkFBYSxZQUFZLENBQUMsQ0FBQztBQUNwRCxJQUFNLGdCQUFn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QUM1RCxDQUFDLENBQUM7O0FBRUgsYUFBTyxPQUFPLENBQUM7S0FDaEI7OztTQXBIRyxzQkFBc0I7OztBQXlINUIsU0FBUyxzQkFBc0IsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFO0FBQ2hELE1BQUksUUFBUSxHQUFHO0FBQ2IsZ0JBQVksRUFBRSxVQUFVLENBQUMsWUFBWTtBQUNyQyxjQUFVLEVBQUUsVUFBVSxDQUFDLFVBQVU7R0FDbEMsQ0FBQztBQUNGLE1BQUksVUFBVSxDQUFDLEdBQUcsRUFBRTtBQUNsQixZQUFRLENBQUMsR0FBRyxHQUFHLFlBQVc7QUFDeEIsYUFBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3pCLENBQUM7R0FDSDtBQUNELE1BQUksVUFBVSxDQUFDLEdBQUcsRUFBRTtBQUNsQixZQUFRLENBQUMsR0FBRyxHQUFHLFVBQVMsS0FBSyxFQUFFO0FBQzdCLFVBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO0tBQzFCLENBQUM7R0FDSDtBQUNELE1BQUksVUFBVSxDQUFDLFFBQVEsRUFBRTtBQUN2QixZQUFRLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUM7R0FDekM7QUFDRCxTQUFPLFFBQVEsQ0FBQztDQUNqQjs7a0JBR2Msc0JBQXNCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBFbGVtZW50QmFzZSBmcm9tICcuLi8uLi9iYXNpYy1lbGVtZW50LWJhc2Uvc3JjL0VsZW1lbnRCYXNlJztcbmltcG9ydCBDb250ZW50QXNJdGVtcyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Db250ZW50QXNJdGVtcyc7XG5pbXBvcnQgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50JztcbmltcG9ydCBGcmFjdGlvbmFsU2VsZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0ZyYWN0aW9uYWxTZWxlY3Rpb24nO1xuaW1wb3J0IFNlbGVjdGlvbkFuaW1hdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TZWxlY3Rpb25BbmltYXRpb24nO1xuaW1wb3J0IFNlbGVjdGlvbkFyaWFBY3RpdmUgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2VsZWN0aW9uQXJpYUFjdGl2ZSc7XG5pbXBvcnQgU2luZ2xlU2VsZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NpbmdsZVNlbGVjdGlvbic7XG5cblxubGV0IGJhc2UgPSBFbGVtZW50QmFzZS5jb21wb3NlKFxuICBDb250ZW50QXNJdGVtcyxcbiAgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCxcbiAgRnJhY3Rpb25hbFNlbGVjdGlvbixcbiAgU2VsZWN0aW9uQW5pbWF0aW9uLFxuICBTZWxlY3Rpb25BcmlhQWN0aXZlLFxuICBTaW5nbGVTZWxlY3Rpb25cbik7XG5cbi8qKlxuICogUHJlc2VudHMgYSBzaW5nbGUgaXRlbSBhcyBzZWxlY3RlZCwgcHJvdmlkaW5nIGFuaW1hdGVkIHRyYW5zaXRpb25zIHdoZW4gdGhlXG4gKiBzZWxlY3Rpb24gY2hhbmdlcy4gVGhlIHNhbWUgYW5pbWF0aW9uIGNhbiBiZSBzaG93biBhdCBhbiBhcmJpdHJhcnkgcG9pbnQsXG4gKiBnZW5lcmFsbHkgdXNlZCB0byByZWZsZWN0IGEgdXNlci1jb250cm9sbGVkIHRvdWNoIG9yIHRyYWNrcGFkIGRyYWcgb3BlcmF0aW9uXG4gKiBpbiBwcm9ncmVzcy5cbiAqXG4gKiBbTGl2ZSBkZW1vXShodHRwOi8vYmFzaWN3ZWJjb21wb25lbnRzLm9yZy9iYXNpYy13ZWItY29tcG9uZW50cy9wYWNrYWdlcy9iYXNpYy1hbmltYXRpb24tc3RhZ2UvKVxuICpcbiAqIFRoaXMgY29tcG9uZW50IGlzIGludGVuZGVkIHRvIGJlIHVzZWQgYXMgYSBwcm9ncmFtbWF0aWMgcmVuZGVyaW5nIHN1cmZhY2UgZm9yXG4gKiBjb21wb25lbnRzIHdoaWNoIHdhbnQgdG8gc2hvdyB0cmFuc2l0aW9uYWwgZWZmZWN0cy5cbiAqXG4gKiBUaGUgY29tcG9uZW50IHVzZXMgdGhlIFtTZWxlY3Rpb25BbmltYXRpb25dKC4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvZG9jcy9TZWxlY3Rpb25BbmltYXRpb24ubWQpXG4gKiBtaXhpbiwgd2hpY2ggaW4gdHVybiB1c2VzIHRoZSBXZWIgQW5pbWF0aW9ucyBBUEkuIEZvciB1c2Ugb24gYnJvd3NlcnMgd2hpY2hcbiAqIGRvIG5vdCBzdXBwb3J0IHRoYXQgQVBJIG5hdGl2ZWx5LCB5b3Ugd2lsbCBuZWVkIHRvIGxvYWQgdGhlXG4gKiBbV2ViIEFuaW1hdGlvbnMgcG9seWZpbGxdKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWItYW5pbWF0aW9ucy93ZWItYW5pbWF0aW9ucy1qcykuXG4gKlxuICogRm9yIGEgc2ltcGxlciBjb21wb25lbnQgdGhhdCBleGhpYml0cyBvbmx5IGEgc2xpZGluZyBlZmZlY3QsIGJ1dCBkb2VzIG5vdFxuICogcmVxdWlyZSB0aGUgV2ViIEFuaW1hdGlvbnMgQVBJLCBzZWUgW2Jhc2ljLXNsaWRpbmctdmlld3BvcnRdKC4uL2Jhc2ljLXNsaWRpbmctdmlld3BvcnQpLlxuICpcbiAqIEBleHRlbmRzIEVsZW1lbnRCYXNlXG4gKiBAbWl4ZXMgQ29udGVudEFzSXRlbXNcbiAqIEBtaXhlcyBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50XG4gKiBAbWl4ZXMgU2VsZWN0aW9uQW5pbWF0aW9uXG4gKiBAbWl4ZXMgU2VsZWN0aW9uQXJpYUFjdGl2ZVxuICogQG1peGVzIFNpbmdsZVNlbGVjdGlvblxuICovXG5jbGFzcyBBbmltYXRpb25TdGFnZSBleHRlbmRzIGJhc2Uge1xuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGlmIChzdXBlci5jb25uZWN0ZWRDYWxsYmFjaykgeyBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpOyB9XG4gICAgdGhpcy5zZWxlY3Rpb25SZXF1aXJlZCA9IHRydWU7XG4gIH1cblxuICBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICA6OnNsb3R0ZWQoKikge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPHNsb3Q+PC9zbG90PlxuICAgIGA7XG4gIH1cblxufVxuXG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYmFzaWMtYW5pbWF0aW9uLXN0YWdlJywgQW5pbWF0aW9uU3RhZ2UpO1xuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9jcmVhdGVTeW1ib2wnO1xuaW1wb3J0IEVsZW1lbnRCYXNlIGZyb20gJy4uLy4uL2Jhc2ljLWVsZW1lbnQtYmFzZS9zcmMvRWxlbWVudEJhc2UnO1xuaW1wb3J0IENvbnRlbnRGaXJzdENoaWxkVGFyZ2V0IGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NvbnRlbnRGaXJzdENoaWxkVGFyZ2V0JztcbmltcG9ydCBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50IGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQnO1xuaW1wb3J0IERpcmVjdGlvblNlbGVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXJlY3Rpb25TZWxlY3Rpb24nO1xuaW1wb3J0IEtleWJvYXJkIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0tleWJvYXJkJztcbmltcG9ydCBLZXlib2FyZERpcmVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9LZXlib2FyZERpcmVjdGlvbic7XG5pbXBvcnQgU2luZ2xlU2VsZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NpbmdsZVNlbGVjdGlvbic7XG5pbXBvcnQgVGFyZ2V0SW5Db2xsZWN0aXZlIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1RhcmdldEluQ29sbGVjdGl2ZSc7XG5pbXBvcnQgVGFyZ2V0U2VsZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1RhcmdldFNlbGVjdGlvbic7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IG1vdXNlZG93bkxpc3RlbmVyU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdtb3VzZWRvd25MaXN0ZW5lcicpO1xuY29uc3QgbW91c2Vtb3ZlTGlzdGVuZXJTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ21vdXNlbW92ZUxpc3RlbmVyJyk7XG5jb25zdCBsYXN0TW91c2VYU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdsYXN0TW91c2VYJyk7XG5jb25zdCBsYXN0TW91c2VZU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdsYXN0TW91c2VZJyk7XG5jb25zdCBtb3VzZVRpbWVvdXRTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ21vdXNlVGltZW91dCcpO1xuXG5cbmxldCBiYXNlID0gRWxlbWVudEJhc2UuY29tcG9zZShcbiAgQ29udGVudEZpcnN0Q2hpbGRUYXJnZXQsXG4gIERpcmVjdGlvblNlbGVjdGlvbixcbiAgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCxcbiAgS2V5Ym9hcmQsXG4gIEtleWJvYXJkRGlyZWN0aW9uLFxuICBTaW5nbGVTZWxlY3Rpb24sXG4gIFRhcmdldEluQ29sbGVjdGl2ZSxcbiAgVGFyZ2V0U2VsZWN0aW9uXG4pO1xuXG4vKipcbiAqIENvbXBvbmVudCB3aGljaCBhZGRzIHByb21pbmVudCBsZWZ0IGFuZCByaWdodCBhcnJvdyBidXR0b25zIHRvIGEgd3JhcHBlZFxuICogY2hpbGQgc3VjaCBhcyBhIGNhcm91c2VsLlxuICpcbiAqIFlvdSBjYW4gc2VlIGEgW2xpdmUgZGVtb10oaHR0cDovL2Jhc2ljd2ViY29tcG9uZW50cy5vcmcvYmFzaWMtd2ViLWNvbXBvbmVudHMvcGFja2FnZXMvYmFzaWMtY2Fyb3VzZWwvY2Fyb3VzZWxXaXRoQXJyb3dzLmh0bWwpXG4gKiBvZiB0aGlzIGNvbXBvbmVudCBhcHBsaWVkIHRvIGEgY2Fyb3VzZWwuXG4gKlxuICogQ2xpY2tpbmcgdGhlIGxlZnQvcmlnaHQgYnV0dG9ucyBzZWxlY3RzIHRoZSBwcmV2aW91cy9uZXh0IGl0ZW0uXG4gKlxuICogVHlwaWNhbCB1c2FnZTpcbiAqXG4gKiAgICAgPGJhc2ljLWFycm93LXNlbGVjdGlvbj5cbiAqICAgICAgIDxiYXNpYy1jYXJvdXNlbD5cbiAqICAgICAgICAgLi4uIGltYWdlcywgZXRjLiAuLi5cbiAqICAgICAgIDwvYmFzaWMtY2Fyb3VzZWw+XG4gKiAgICAgPC9iYXNpYy1hcnJvdy1zZWxlY3Rpb24+XG4gKlxuICogQnkgZGVmYXVsdCwgdGhlIGFycm93IGJ1dHRvbnMgYXJlIHNob3duIG9uIGRldmljZXMgd2l0aCBhIG1vdXNlIG9yIG1vdXNlLWxpa2VcbiAqIHBvaW50aW5nIGRldmljZS4gVGhleSBhcmUgbm90IHNob3duIG9uIGEgdG91Y2gtY2FwYWJsZSBkZXZpY2UgdW5sZXNzIG1vdXNlXG4gKiBtb3ZlbWVudCBpcyBkZXRlY3RlZC4gVG8gY2F1c2UgdGhlIGJ1dHRvbnMgdG8gYWx3YXlzIGFwcGVhciwgYXBwbHkgdGhlXG4gKiAnc2hvd0Fycm93cycgQ1NTIGNsYXNzLlxuICpcbiAqIEBleHRlbmRzIEVsZW1lbnRCYXNlXG4gKiBAbWl4ZXMgQ29udGVudEZpcnN0Q2hpbGRUYXJnZXRcbiAqIEBtaXhlcyBEaXJlY3Rpb25TZWxlY3Rpb25cbiAqIEBtaXhlcyBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50XG4gKiBAbWl4ZXMgS2V5Ym9hcmRcbiAqIEBtaXhlcyBLZXlib2FyZERpcmVjdGlvblxuICogQG1peGVzIFNpbmdsZVNlbGVjdGlvblxuICogQG1peGVzIFRhcmdldEluQ29sbGVjdGl2ZVxuICogQG1peGVzIFRhcmdldFNlbGVjdGlvblxuICovXG5jbGFzcyBBcnJvd1NlbGVjdGlvbiBleHRlbmRzIGJhc2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLiQuYnV0dG9uTGVmdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgIHRoaXMuc2VsZWN0UHJldmlvdXMoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pO1xuICAgIHRoaXMuJC5idXR0b25SaWdodC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgIHRoaXMuc2VsZWN0TmV4dCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSk7XG4gICAgYXNzdW1lQnV0dG9uRm9jdXModGhpcywgdGhpcy4kLmJ1dHRvbkxlZnQpO1xuICAgIGFzc3VtZUJ1dHRvbkZvY3VzKHRoaXMsIHRoaXMuJC5idXR0b25SaWdodCk7XG5cbiAgICBpZiAoIXRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93QXJyb3dzJykpIHtcbiAgICAgIC8vIERldGVybWluZSB3aGV0aGVyIHdlIHNob3VsZCBzaG93IGFycm93IGJ1dHRvbnMgb3Igbm90LlxuICAgICAgaWYgKGRldmljZVN1cHBvcnRzVG91Y2goKSkge1xuICAgICAgICAvLyBBIHRvdWNoIGRldmljZSBtaWdodCBhbHNvIHN1cHBvcnQgYSBtb3VzZSwgYnV0IHdlIGNhbid0IGtub3cgd2hldGhlclxuICAgICAgICAvLyB0aGVyZSdzIGFjdHVhbGx5IGEgbW91c2UgdW50aWwgd2UgaGVhciBmcm9tIGl0LlxuICAgICAgICBsaXN0ZW5Gb3JNb3VzZSh0aGlzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFRoZSBkZXZpY2UgZG9lc24ndCBzdXBwb3J0IHRvdWNoLCBzbyBhc3N1bWUgaXQgaGFzIGEgbW91c2UuXG4gICAgICAgIHNob3dBcnJvd3ModGhpcyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0IGNhblNlbGVjdE5leHQoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmNhblNlbGVjdE5leHQ7XG4gIH1cbiAgc2V0IGNhblNlbGVjdE5leHQoY2FuU2VsZWN0TmV4dCkge1xuICAgIGlmICgnY2FuU2VsZWN0TmV4dCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuY2FuU2VsZWN0TmV4dCA9IGNhblNlbGVjdE5leHQ7IH1cbiAgICBpZiAodGhpcy4kKSB7XG4gICAgICB0aGlzLiQuYnV0dG9uUmlnaHQuZGlzYWJsZWQgPSAhY2FuU2VsZWN0TmV4dDtcbiAgICB9XG4gIH1cblxuICBnZXQgY2FuU2VsZWN0UHJldmlvdXMoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmNhblNlbGVjdFByZXZpb3VzO1xuICB9XG4gIHNldCBjYW5TZWxlY3RQcmV2aW91cyhjYW5TZWxlY3RQcmV2aW91cykge1xuICAgIGlmICgnY2FuU2VsZWN0UHJldmlvdXMnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLmNhblNlbGVjdFByZXZpb3VzID0gY2FuU2VsZWN0UHJldmlvdXM7IH1cbiAgICBpZiAodGhpcy4kKSB7XG4gICAgICB0aGlzLiQuYnV0dG9uTGVmdC5kaXNhYmxlZCA9ICFjYW5TZWxlY3RQcmV2aW91cztcbiAgICB9XG4gIH1cblxuICBnZXQgZGVmYXVsdHMoKSB7XG4gICAgbGV0IGRlZmF1bHRzID0gc3VwZXIuZGVmYXVsdHMgfHwge307XG4gICAgZGVmYXVsdHMubmF2aWdhdGlvbkF4aXMgPSAnaG9yaXpvbnRhbCc7XG4gICAgcmV0dXJuIGRlZmF1bHRzO1xuICB9XG5cbiAgc2VsZWN0ZWRJdGVtQ2hhbmdlZCgpIHtcbiAgICBpZiAoc3VwZXIuc2VsZWN0ZWRJdGVtQ2hhbmdlZCkgeyBzdXBlci5zZWxlY3RlZEl0ZW1DaGFuZ2VkKCk7IH1cbiAgICAvLyBIQUNLOiBGb3JjZSBhbiB1cGRhdGUgb2YgdGhlIHNldCBvZiBwb3NzaWJsZSBuYXZpZ2F0aW9ucy5cbiAgICB0aGlzLml0ZW1zQ2hhbmdlZCgpO1xuICB9XG5cbiAgLypcbiAgICogVGhlIHRlbXBsYXRlIHVzZXMgdGhlIGNoZXZyb24tbGVmdCBhbmQgY2hldnJvbi1yaWdodCBTVkcgaWNvbnMgZnJvbVxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vUG9seW1lckVsZW1lbnRzL2lyb24taWNvbnMvYmxvYi9tYXN0ZXIvaXJvbi1pY29ucy5odG1sLlxuICAgKi9cbiAgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBgXG4gICAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIH1cblxuICAgICAgI2NvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLXdlYmtpdC1mbGV4OiAxO1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgfVxuXG4gICAgICAjY29udGFpbmVyIDo6c2xvdHRlZCgqKSB7XG4gICAgICAgIC13ZWJraXQtZmxleDogMTtcbiAgICAgICAgZmxleDogMTtcbiAgICAgIH1cblxuICAgICAgLm5hdmlnYXRpb25CdXR0b24ge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgICAgIGZpbGw6IGN1cnJlbnRDb2xvcjtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBvdXRsaW5lOiBub25lOyAvKiBSRVZJRVc6IEFjY2Vzc2liaWxpdHkgc2hvdWxkIGJlIHByb3ZpZGVkIGJ5IG90aGVyIGVsZW1lbnRzLiAqL1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgfVxuXG4gICAgICAubmF2aWdhdGlvbkJ1dHRvbjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgICAgLm5hdmlnYXRpb25CdXR0b246YWN0aXZlOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xuICAgICAgfVxuICAgICAgLm5hdmlnYXRpb25CdXR0b246ZGlzYWJsZWQge1xuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCg6bm90KC5zaG93QXJyb3dzKSkgLm5hdmlnYXRpb25CdXR0b24ge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICB9XG5cbiAgICAgIC5uYXZpZ2F0aW9uQnV0dG9uIC5pY29uIHtcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICB3aWR0aDogNDhweDtcbiAgICAgIH1cblxuICAgICAgLyogT3ZlcmxheSB2YXJpYW50ICovXG4gICAgICA6aG9zdCgub3ZlcmxheSkge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gICAgICA6aG9zdCgub3ZlcmxheSkgLm5hdmlnYXRpb25CdXR0b24ge1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgfVxuICAgICAgOmhvc3QoLm92ZXJsYXkpICNidXR0b25MZWZ0IHtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgIH1cbiAgICAgIDpob3N0KC5vdmVybGF5KSAjYnV0dG9uUmlnaHQge1xuICAgICAgICByaWdodDogMDtcbiAgICAgIH1cbiAgICAgIDpob3N0KC5vdmVybGF5KSAubmF2aWdhdGlvbkJ1dHRvbjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICAgIH1cbiAgICAgIDpob3N0KC5vdmVybGF5KSAubmF2aWdhdGlvbkJ1dHRvbjphY3RpdmU6bm90KDpkaXNhYmxlZCkge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gICAgICB9XG4gICAgICA6aG9zdCgub3ZlcmxheSkgLm5hdmlnYXRpb25CdXR0b246ZGlzYWJsZWQge1xuICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPCEtLVxuICAgICAgQWNjZXNzaWJpbGl0eSBub3RlOiBzaW5jZSB0aGUgbmF2aWdhdGlvbiBvZmZlcmVkIGJ5IHRoZSBhcnJvdyBidXR0b25zIHNob3VsZFxuICAgICAgYmUgcmVkdW5kYW50ICh0aGF0IGlzLCB0aGVyZSBzaG91bGQgYmUgb3RoZXIgd2F5cyBvZiBuYXZpZ2F0aW5nIHRoZSBsaXN0KSxcbiAgICAgIHdlIG1hcmsgdGhlIGJ1dHRvbiBhcyBhcmlhLWhpZGRlbiBzbyB0aGF0IGFzc2lzdGl2ZSBkZXZpY2VzIGlnbm9yZSB0aGVtLlxuICAgICAgLS0+XG4gICAgICA8YnV0dG9uIGlkPVwiYnV0dG9uTGVmdFwiIGNsYXNzPVwibmF2aWdhdGlvbkJ1dHRvblwiIGRpc2FibGVkIHRhYmluZGV4PVwiLTFcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgPHN2ZyBjbGFzcz1cImljb25cIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkIG1lZXRcIj5cbiAgICAgICAgICA8ZyBpZD1cImNoZXZyb24tbGVmdFwiPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0xNS40MSA3LjQxTDE0IDZsLTYgNiA2IDYgMS40MS0xLjQxTDEwLjgzIDEyelwiLz5cbiAgICAgICAgICA8L2c+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8ZGl2IGlkPVwiY29udGFpbmVyXCIgcm9sZT1cIm5vbmVcIj5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIGlkPVwiYnV0dG9uUmlnaHRcIiBjbGFzcz1cIm5hdmlnYXRpb25CdXR0b25cIiBkaXNhYmxlZCB0YWJpbmRleD1cIi0xXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgIDxzdmcgY2xhc3M9XCJpY29uXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBtZWV0XCI+XG4gICAgICAgICAgPGcgaWQ9XCJjaGV2cm9uLXJpZ2h0XCI+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTEwIDZMOC41OSA3LjQxIDEzLjE3IDEybC00LjU4IDQuNTlMMTAgMThsNi02elwiLz5cbiAgICAgICAgICA8L2c+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9idXR0b24+XG4gICAgYDtcbiAgfVxuXG59XG5cblxuLypcbiAqIEJ5IGRlZmF1bHQsIGEgYnV0dG9uIHdpbGwgYWx3YXlzIHRha2UgZm9jdXMgb24gbW91c2Vkb3duLiBGb3IgdGhpcyBjb21wb25lbnQsXG4gKiB3ZSB3YW50IHRvIG92ZXJyaWRlIHRoYXQgYmVoYXZpb3IsIHN1Y2ggdGhhdCBhIG1vdXNlZG93biBvbiBhIGJ1dHRvbiBrZWVwc1xuICogdGhlIGZvY3VzIG9uIHRoZSBvdXRlciBjb21wb25lbnQuXG4gKi9cbmZ1bmN0aW9uIGFzc3VtZUJ1dHRvbkZvY3VzKGVsZW1lbnQsIGJ1dHRvbikge1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZXZlbnQgPT4ge1xuICAgIC8vIEdpdmVuIHRoZSBvdXRlciBlbGVtZW50IGZvY3VzIGlmIGl0IGRvZXNuJ3QgYWxyZWFkeSBoYXZlIGl0LlxuICAgIGxldCBvdXRlcm1vc3QgPSBlbGVtZW50LmNvbGxlY3RpdmUub3V0ZXJtb3N0RWxlbWVudDtcbiAgICBpZiAob3V0ZXJtb3N0KSB7XG4gICAgICBvdXRlcm1vc3QuZm9jdXMoKTtcbiAgICB9XG4gICAgLy8gUHJldmVudCB0aGUgZGVmYXVsdCBmb2N1cy1vbi1tb3VzZWRvd24gYmVoYXZpb3IuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfSk7XG59XG5cblxuZnVuY3Rpb24gZGV2aWNlU3VwcG9ydHNUb3VjaCgpIHtcbiAgcmV0dXJuICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fFxuICAgICAgKHdpbmRvdy5Eb2N1bWVudFRvdWNoICYmIGRvY3VtZW50IGluc3RhbmNlb2Ygd2luZG93LkRvY3VtZW50VG91Y2gpO1xufVxuXG5cbi8vIFdlIHRyeSB0byBkZXRlY3QgdGhlIHByZXNlbmNlIG9mIGEgbW91c2UgYnkgbGlzdGVuaW5nIGZvciBtb3VzZW1vdmUgZXZlbnRzXG4vLyB3aGljaCBhcmUgKm5vdCogdGhlIHJlc3VsdCBvZiBhIG1vdXNlZG93bi4gT24gYSB0b3VjaCBkZXZpY2UsIGEgdGFwIG9uIHRoZVxuLy8gcGFnZSB3aWxsIGdlbmVyYXRlIGEgZmFrZSBtb3VzZW1vdmUsIGZvbGxvd2VkIGJ5IGEgbW91c2Vkb3duLiBXZSBkb24ndCB3YW50XG4vLyB0byByZXNwb25kIHRvIHRob3NlIGZha2UgbW91c2Vtb3ZlIGV2ZW50cy4gVG8gZGlzY3JpbWluYXRlIGJldHdlZW4gZmFrZSBhbmRcbi8vIHJlYWwgbW91c2Vtb3ZlIGV2ZW50cywgd2hlbiB3ZSBnZXQgYSBtb3VzZW1vdmUgZXZlbnQsIHdlIHdhaXQgZm9yIGEgYml0IHRvXG4vLyBzZWUgaWYgdGhlIHNhbWUgbG9jYXRpb24gaXMgcmVwb3J0ZWQgYXMgdGhlIGxvY2F0aW9uIG9mIGEgc3Vic2VxdWVudFxuLy8gbW91c2Vkb3duLlxuZnVuY3Rpb24gbGlzdGVuRm9yTW91c2UoZWxlbWVudCkge1xuXG4gIGVsZW1lbnRbbW91c2Vkb3duTGlzdGVuZXJTeW1ib2xdID0gZXZlbnQgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGBtb3VzZWRvd24gJHtldmVudC5wYWdlWH0sICR7ZXZlbnQucGFnZVl9YCk7XG4gICAgaWYgKGVsZW1lbnRbbW91c2VUaW1lb3V0U3ltYm9sXSkge1xuICAgICAgY2xlYXJUaW1lb3V0KGVsZW1lbnRbbW91c2VUaW1lb3V0U3ltYm9sXSk7XG4gICAgfVxuICAgIGVsZW1lbnRbbGFzdE1vdXNlWFN5bWJvbF0gPSBldmVudC5wYWdlWDtcbiAgICBlbGVtZW50W2xhc3RNb3VzZVlTeW1ib2xdID0gZXZlbnQucGFnZVk7XG4gIH07XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlbGVtZW50W21vdXNlZG93bkxpc3RlbmVyU3ltYm9sXSk7XG5cbiAgZWxlbWVudFttb3VzZW1vdmVMaXN0ZW5lclN5bWJvbF0gPSBldmVudCA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coYHNldHRpbmcgdGltZW91dGApO1xuICAgIC8vIFBvc3Rwb25lIGNoZWNraW5nIHRoZSBtb3VzZW1vdmUgbG9jYXRpb24gdG8gZ2l2ZSB0aGUgbW91c2Vkb3duIGV2ZW50IGFcbiAgICAvLyBjaGFuY2UgdG8gZmlyZS4gVGhlIDI1MCBtcyBkZWxheSBpcyBqdXN0IGd1ZXNzd29yazsgYSBzaG9ydGVyIGRlbGF5XG4gICAgLy8gZG9lc24ndCBzZWVtIHRvIHdvcmsuXG4gICAgZWxlbWVudFttb3VzZVRpbWVvdXRTeW1ib2xdID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhgcG9zdHBvbmVkIG1vdXNlbW92ZSAke2V2ZW50LnBhZ2VYfSwgJHtldmVudC5wYWdlWX1gKTtcbiAgICAgIGlmIChlbGVtZW50W2xhc3RNb3VzZVhTeW1ib2xdICE9IG51bGwgJiYgZXZlbnQucGFnZVggIT09IGVsZW1lbnRbbGFzdE1vdXNlWFN5bWJvbF0gfHxcbiAgICAgICAgICBlbGVtZW50W2xhc3RNb3VzZVlTeW1ib2xdICE9IG51bGwgJiYgZXZlbnQucGFnZVkgIT09IGVsZW1lbnRbbGFzdE1vdXNlWVN5bWJvbF0pIHtcbiAgICAgICAgLy8gbW91c2Vtb3ZlIGV2ZW50IHdhcyBhdCBhIGxvY2F0aW9uIG90aGVyIHRoYW4gdGhlIGxhc3QgbW91c2Vkb3duLFxuICAgICAgICAvLyBhbmQgaGVuY2UgbW9zdCBsaWtlbHkgYSByZWFsIG1vdXNlbW92ZSBldmVudC5cbiAgICAgICAgbW91c2VEZXRlY3RlZChlbGVtZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnRbbGFzdE1vdXNlWFN5bWJvbF0gPSBldmVudC5wYWdlWDtcbiAgICAgICAgZWxlbWVudFtsYXN0TW91c2VZU3ltYm9sXSA9IGV2ZW50LnBhZ2VZO1xuICAgICAgfVxuICAgIH0sIDI1MCk7XG4gIH07XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBlbGVtZW50W21vdXNlbW92ZUxpc3RlbmVyU3ltYm9sXSk7XG59XG5cblxuZnVuY3Rpb24gbW91c2VEZXRlY3RlZChlbGVtZW50KSB7XG4gIC8vIGNvbnNvbGUubG9nKGBtb3VzZSBkZXRlY3RlZGApO1xuICBzaG93QXJyb3dzKGVsZW1lbnQpO1xuXG4gIC8vIFdlIGNhbiBzdG9wIGxpc3RlbmluZyBmb3IgbW91c2UgZXZlbnRzIG5vdy5cbiAgaWYgKGVsZW1lbnRbbW91c2VUaW1lb3V0U3ltYm9sXSkge1xuICAgIGNsZWFyVGltZW91dChlbGVtZW50W21vdXNlVGltZW91dFN5bWJvbF0pO1xuICB9XG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlbGVtZW50W21vdXNlZG93bkxpc3RlbmVyU3ltYm9sXSk7XG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBlbGVtZW50W21vdXNlbW92ZUxpc3RlbmVyU3ltYm9sXSk7XG4gIGVsZW1lbnRbbW91c2Vkb3duTGlzdGVuZXJTeW1ib2xdID0gbnVsbDtcbiAgZWxlbWVudFttb3VzZW1vdmVMaXN0ZW5lclN5bWJvbF0gPSBudWxsO1xufVxuXG5cbmZ1bmN0aW9uIHNob3dBcnJvd3MoZWxlbWVudCkge1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Nob3dBcnJvd3MnKTtcbn1cblxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2Jhc2ljLWFycm93LXNlbGVjdGlvbicsIEFycm93U2VsZWN0aW9uKTtcbmV4cG9ydCBkZWZhdWx0IEFycm93U2VsZWN0aW9uO1xuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9jcmVhdGVTeW1ib2wnO1xuaW1wb3J0IFdyYXBwZWRTdGFuZGFyZEVsZW1lbnQgZnJvbSAnLi4vLi4vYmFzaWMtd3JhcHBlZC1zdGFuZGFyZC1lbGVtZW50L3NyYy9XcmFwcGVkU3RhbmRhcmRFbGVtZW50JztcbmltcG9ydCBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50IGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQnO1xuaW1wb3J0IEdlbmVyaWMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvR2VuZXJpYyc7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IGxpbmVIZWlnaHRTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2xpbmVIZWlnaHQnKTtcbmNvbnN0IG1pbmltdW1Sb3dzU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdtaW5pbXVtUm93cycpO1xuY29uc3QgdmFsdWVUcmFja3NDb250ZW50U3ltYm9sID0gY3JlYXRlU3ltYm9sKCd2YWx1ZVRyYWNrc0NvbnRlbnQnKTtcblxubGV0IGJhc2UgPSBXcmFwcGVkU3RhbmRhcmRFbGVtZW50LndyYXAoJ3RleHRhcmVhJykuY29tcG9zZShcbiAgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCxcbiAgR2VuZXJpY1xuKTtcblxuLyoqXG4gKiBBIHRleHQgYXJlYSB0aGF0IG1ha2VzIGl0c2VsZiBiaWcgZW5vdWdoIHRvIHNob3cgaXRzIGNvbnRlbnQuXG4gKlxuICogW0xpdmUgZGVtb10oaHR0cDovL2Jhc2ljd2ViY29tcG9uZW50cy5vcmcvYmFzaWMtd2ViLWNvbXBvbmVudHMvcGFja2FnZXMvYmFzaWMtYXV0b3NpemUtdGV4dGFyZWEvKVxuICpcbiAqIFRoaXMgdGV4dCBpbnB1dCBjb21wb25lbnQgaXMgdXNlZnVsIGluIHNpdHVhdGlvbnMgd2hlcmUgeW91IHdhbnQgdG8gYXNrIHRoZVxuICogdXNlciB0byBlbnRlciBhcyBtdWNoIHRleHQgYXMgdGhleSB3YW50LCBidXQgZG9uJ3Qgd2FudCB0byB0YWtlIHVwIGEgbG90IG9mXG4gKiByb29tIG9uIHRoZSBwYWdlLlxuICpcbiAqIFRoZSBjb21wb25lbnQgd29ya3MgYnkgY29weWluZyB0aGUgdGV4dCB0byBhbiBpbnZpc2libGUgZWxlbWVudCB3aGljaCB3aWxsXG4gKiBhdXRvbWF0aWNhbGx5IGdyb3cgaW4gc2l6ZTsgdGhlIGV4cGFuZGluZyBjb3B5IHdpbGwgZXhwYW5kIHRoZSBjb250YWluZXIsXG4gKiB3aGljaCBpbiB0dXJuIHdpbGwgdmVydGljYWxseSBzdHJldGNoIHRoZSB0ZXh0IGFyZWEgdG8gbWF0Y2guXG4gKlxuICogVGhpcyBjb21wb25lbnQgZ2VuZXJhbGx5IGV4cG9zZXMgYWxsIHRoZSBzYW1lIGF0dHJpYnV0ZXMvcHJvcGVydGllcyBhcyBhXG4gKiBzdGFuZGFyZCBIVE1MIGA8dGV4dGFyZWE+YC5cbiAqXG4gKiBAbWl4ZXMgR2VuZXJpY1xuICogQG1peGVzIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnRcbiAqL1xuY2xhc3MgQXV0b3NpemVUZXh0YXJlYSBleHRlbmRzIGJhc2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmlubmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZXZlbnQgPT4ge1xuICAgICAgdmFsdWVDaGFuZ2VkKHRoaXMpO1xuICAgIH0pO1xuICAgIHRoaXMuaW5uZXIuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBldmVudCA9PiB7XG4gICAgICBrZXlwcmVzcyh0aGlzLCBldmVudCk7XG4gICAgfSk7XG5cbiAgICAvLyBTZXQgZGVmYXVsdHMuXG4gICAgaWYgKHR5cGVvZiB0aGlzLm1pbmltdW1Sb3dzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5taW5pbXVtUm93cyA9IHRoaXMuZGVmYXVsdHMubWluaW11bVJvd3M7XG4gICAgfVxuXG4gICAgLy8gQSBzdGFuZGFyZCB0ZXh0YXJlYSBoYXMgaXRzIHZhbHVlIHRyYWNrIGl0cyB0ZXh0Q29udGVudCBieSBkZWZhdWx0LlxuICAgIC8vIFRoYXQgaXMsIGNoYW5nZXMgdG8gdGV4dENvbnRlbnQgdXBkYXRlIHRoZSB2YWx1ZS4gSG93ZXZlciwgaWYgYW4gYXR0ZW1wdFxuICAgIC8vIGlzIG1hZGUgdG8gY2hhbmdlIHRoZSB2YWx1ZSBkaXJlY3RseSwgdGhpcyBicmVha3MgdGhlIGF1dG9tYXRpYyB0cmFja2luZy5cbiAgICAvLyBGcm9tIHRoYXQgcG9pbnQgb24sIGNoYW5nZXMgdG8gdGV4dENvbnRlbnQgZG8gKm5vdCogdXBkYXRlIHRoZSB2YWx1ZS5cbiAgICB0aGlzW3ZhbHVlVHJhY2tzQ29udGVudFN5bWJvbF0gPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2l6ZSB0aGUgZWxlbWVudCBzdWNoIHRoYXQgdGhlIHRleHRhcmVhIGNhbiBleGFjdGx5IGNvbnRhaW4gaXRzIGNvbnRlbnQuXG4gICAqIEJ5IGRlZmF1bHQsIHRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbmV2ZXIgdGhlIHRleHQgY29udGVudCBjaGFuZ2VzLlxuICAgKi9cbiAgYXV0b1NpemUoKSB7XG4gICAgLy8gSWYgd2UgaGFkIHNwZWN1bGF0aXZlbHkgYWRkZWQgYW4gZXh0cmEgbGluZSBiZWNhdXNlIG9mIGFuIEVudGVyIGtleXByZXNzLFxuICAgIC8vIHdlIGNhbiBub3cgaGlkZSB0aGUgZXh0cmEgbGluZS5cbiAgICB0aGlzLiQuZXh0cmFMaW5lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAvLyBXZSByZXNpemUgYnkgY29weWluZyB0aGUgdGV4dGFyZWEgY29udGVudHMgdG8gdGhlIGVsZW1lbnQgaXRzZWxmOyB0aGVcbiAgICAvLyB0ZXh0IHdpbGwgdGhlbiBhcHBlYXIgKHZpYSA8c2xvdD4pIGluc2lkZSB0aGUgaW52aXNpYmxlIGRpdi4gSWZcbiAgICAvLyB3ZSd2ZSBzZXQgdGhpbmdzIHVwIGNvcnJlY3RseSwgdGhpcyBuZXcgY29udGVudCBzaG91bGQgdGFrZSB1cCB0aGUgc2FtZVxuICAgIC8vIGFtb3VudCBvZiByb29tIGFzIHRoZSBzYW1lIHRleHQgaW4gdGhlIHRleHRhcmVhLiBVcGRhdGluZyB0aGUgZWxlbWVudCdzXG4gICAgLy8gY29udGVudCBhZGp1c3RzIHRoZSBlbGVtZW50J3Mgc2l6ZSwgd2hpY2ggaW4gdHVybiB3aWxsIG1ha2UgdGhlIHRleHRhcmVhXG4gICAgLy8gdGhlIGNvcnJlY3QgaGVpZ2h0LlxuICAgIHRoaXMuJC50ZXh0Q29weS50ZXh0Q29udGVudCA9IHRoaXMudmFsdWU7XG4gIH1cblxuICAvLyBOb3JtYWxseSB0aGUgdmFsdWUgb2YgdGhlIGVsZW1lbnQgaXMgc2V0IGFuZCByZWFkIHRocm91Z2ggaXRzIHZhbHVlXG4gIC8vIGF0dHJpYnV0ZS4gQXMgYSBjb252ZW5pZW5jZSwgYW5kIHRvIG1pcnJvciBzdGFuZGFyZCB0ZXh0YXJlYSBiZWhhdmlvciwgaXRcbiAgLy8gaXMgcG9zc2libGUgdG8gc2V0IHRoZSBjb250ZW50IG9mIHRoZSB0ZXh0YXJlYSBieSBpbmNsdWRpbmcgdGV4dCBiZXR3ZWVuXG4gIC8vIHRoZSBvcGVuaW5nIGFuZCBjbG9zaW5nIHRhZy4gVGhpcyB3b3JrcyBvbmx5IGluIG9uZSBkaXJlY3Rpb246IHNldHRpbmcgdGhlXG4gIC8vIHRhZyBjb250ZW50IHVwZGF0ZXMgdGhlIHRleHRhcmVhLCBidXQgdXNlciBlZGl0cyBpbiB0aGUgdGV4dGFyZWEgYXJlIG5vdFxuICAvLyByZWZsZWN0ZWQgaW4gdGhlIHRhZyBjb250ZW50LiBXZSBjYXB0dXJlIHRoZSB2YWx1ZSBvZiB0aGUgaW5pdGlhbCB0ZXh0XG4gIC8vIGNvbnRlbnQgaW4gb3JkZXIgdG8gc2V0IHRoZSB2YWx1ZSBwcm9wZXJ0eSBkdXJpbmcgdGhlIGNyZWF0ZSBldmVudC5cbiAgLy8gVE9ETzogTm9ybWFsaXplIGluZGVudGF0aW9uIGluIHRoZSB0ZXh0IGNvbnRlbnQuIFVzZXJzIHdpbGwgb2Z0ZW4gd2FudCB0b1xuICAvLyBpbmRlbnQgdGhlIG1hcmt1cCBzbyB0aGF0IGl0IGxvb2tzIHByZXR0eS4gV2Ugc2hvdWxkIGRldGVjdCB0aGUgaW5kZW50YXRpb25cbiAgLy8gbGV2ZWwgYW5kIHJlbW92ZSBhbnkgaW5kZW50YXRpb24gd2hpdGVzcGFjZVxuICAvLyBUT0RPOiBDb25zaWRlciB1c2luZyBjb250ZW50IGlubmVySFRNTCByYXRoZXIgdGhhbiBwbGFpbiB0ZXh0LiBUaGUgbmF0aXZlXG4gIC8vIHRleHRhcmVhIGVsZW1lbnQgd2lsbCBpbmNsdWRlIEhUTUwsIG5vdCBqdXN0IHRoZSBzdHJpcHBlZCB0ZXh0LCBhcyBpbml0aWFsXG4gIC8vIHZhbHVlIHByb3BlcnR5IHRleHQuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGlmIChzdXBlci5jb25uZWN0ZWRDYWxsYmFjaykgeyBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpOyB9XG4gICAgaW5pdGlhbGl6ZVdoZW5SZW5kZXJlZCh0aGlzKTtcbiAgfVxuXG4gIGNvbnRlbnRDaGFuZ2VkKCkge1xuICAgIGlmIChzdXBlci5jb250ZW50Q2hhbmdlZCkgeyBzdXBlci5jb250ZW50Q2hhbmdlZCgpOyB9XG4gICAgaWYgKHRoaXNbdmFsdWVUcmFja3NDb250ZW50U3ltYm9sXSkge1xuICAgICAgbGV0IHRleHQgPSBnZXRUZXh0Q29udGVudCh0aGlzKTtcbiAgICAgIHRoaXMuaW5uZXIudmFsdWUgPSB1bmVzY2FwZUh0bWwodGV4dCk7XG4gICAgICB2YWx1ZUNoYW5nZWQodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGRlZmF1bHRzKCkge1xuICAgIGxldCBkZWZhdWx0cyA9IHN1cGVyLmRlZmF1bHRzIHx8IHt9O1xuICAgIGRlZmF1bHRzLm1pbmltdW1Sb3dzID0gMTtcbiAgICByZXR1cm4gZGVmYXVsdHM7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB0aGUgbWluaW11bSBudW1iZXIgb2Ygcm93cyBzaG93bi4gVGhpcyBpcyBzaW1pbGFyIHRvIHRoZSByb3dzXG4gICAqIGF0dHJpYnV0ZSBvbiBhIHN0YW5kYXJkIHRleHRhcmVhLCBidXQgYmVjYXVzZSB0aGlzIGVsZW1lbnQgY2FuIGdyb3csIGlzXG4gICAqIGV4cHJlc3NlZCBhcyBhIG1pbmltdW0gcmF0aGVyIHRoYW4gYSBmaXhlZCBudW1iZXIuXG4gICAqXG4gICAqIEJ5IGRlZmF1bHQsIHRoaXMgcHJvcGVydHkgaXMgMSwgc28gd2hlbiBlbXB0eSwgdGhlIHRleHQgYXJlYSB3aWxsIGJlIGFcbiAgICogc2luZ2xlIGxpbmUgdGFsbC4gVGhhdCdzIGVmZmljaWVudCBpbiB0ZXJtcyBvZiB0aGUgc3BhY2UgaXQgY29uc3VtZXMsIGJ1dFxuICAgKiB1bnRpbCB0aGUgdXNlciBpbnRlcmFjdHMgd2l0aCB0aGUgZWxlbWVudCwgdGhleSBtYXkgbm90IHJlYWxpemUgdGhleSBjYW5cbiAgICogZW50ZXIgbXVsdGlwbGUgbGluZXMgb2YgdGV4dC4gU2V0dGluZyB0aGUgcHJvcGVydHkgdG8gYSB2YWx1ZSBoaWdoZXIgdGhhbiAxXG4gICAqIHdpbGwgc2lnbmFsIHRvIHRoZSB1c2VyIHRoYXQgdGhleSBjYW4gZW50ZXIgbXVsdGlwbGUgbGluZXMgb2YgYSB0ZXh0LlxuICAgKlxuICAgKiBCeSBzZXR0aW5nIHRoaXMgcHJvcGVydHksIHlvdSBjYW4gYWxzbyBjb21tdW5pY2F0ZSB0byB0aGUgdXNlciBzb21lIHNlbnNlXG4gICAqIG9mIGhvdyBtdWNoIHRleHQgeW91J3JlIGV4cGVjdGluZyB0aGVtIHRvIHByb3ZpZGUuIEZvciBleGFtcGxlLCBvbiBhXG4gICAqIGZlZWRiYWNrIGZvcm0sIGFza2luZyB0aGUgdXNlciB0byBlbnRlciB0aGVpciBmZWVkYmFjayBpbiBhIHNpbmdsZS1saW5lXG4gICAqIHRleHQgYm94IGltcGxpZXMgeW91IGRvbid0IHJlYWxseSB3YW50IHRoZW0gdG8gZW50ZXIgbXVjaCB0ZXh0IOKAlCBldmVuIGlmXG4gICAqIHRoZSB0ZXh0IGJveCB3aWxsIGdyb3cgd2hlbiB0aGV5IHR5cGUuIEJ5IHNldHRpbmcgdGhpcyB0byBhIHZhbHVlIGxpa2UsXG4gICAqIHNheSwgMTAgcm93cywgeW91IGNhbiBzaWduYWwgdGhhdCB5b3UncmUgZnVsbHkgZXhwZWN0aW5nIHRoZW0gdG8gZW50ZXIgbW9yZVxuICAgKiB0ZXh0LlxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKiBAZGVmYXVsdCAxXG4gICAqL1xuICBnZXQgbWluaW11bVJvd3MoKSB7XG4gICAgcmV0dXJuIHRoaXNbbWluaW11bVJvd3NTeW1ib2xdO1xuICB9XG4gIHNldCBtaW5pbXVtUm93cyh2YWx1ZSkge1xuICAgIHRoaXNbbWluaW11bVJvd3NTeW1ib2xdID0gcGFyc2VJbnQodmFsdWUpO1xuICAgIGlmICh0aGlzW2xpbmVIZWlnaHRTeW1ib2xdKSB7XG4gICAgICBzZXRNaW5pbXVtSGVpZ2h0KHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gYFxuICAgICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgI2F1dG9TaXplQ29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICAvKlxuICAgICAgICogRW5zdXJlIGJvdGggdGhlIHRleHQgYXJlYSBhbmQgY29weSBlbmQgdXAgd2l0aCB0aGUgZWxlbWVudCdzIG93biBmb250XG4gICAgICAgKiBtZXRyaWNzLCBzbyB0aGF0IHRleHQgd2lsbCBsYXkgb3V0IHRoZSBzYW1lIGluIGJvdGggb2YgdGhlbS5cbiAgICAgICAqL1xuICAgICAgI2lubmVyLFxuICAgICAgI2NvcHlDb250YWluZXIge1xuICAgICAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgIGZvbnQtc3R5bGU6IGluaGVyaXQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuXG4gICAgICAjaW5uZXIge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmVzaXplOiBub25lO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBAYXBwbHkoLS10ZXh0YXJlYSk7XG4gICAgICB9XG5cbiAgICAgICNjb3B5Q29udGFpbmVyIHtcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7IC8qIFNvIGxpbmVzIHdyYXAgKi9cbiAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkOyAvKiBTbyB3ZSBicmVhayBhdCB3b3JkIGJvdW5kYXJpZXMgd2hlbiBwb3NzaWJsZSAqL1xuICAgICAgfVxuXG4gICAgICAjY29udGVudENvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8IS0tXG4gICAgICBUaGUgaW52aXNpYmxlIGNvcHlDb250YWluZXIgY29udGFpbnMgYW4gZXh0cmFTcGFjZSBlbGVtZW50IHRoYXQgZW5zdXJlcyB0aGF0LFxuICAgICAgZXZlbiBpZiB0aGUgbGFzdCBsaW5lIG9mIHRoZSB0ZXh0YXJlYSBpcyBibGFuaywgdGhlcmUgd2lsbCBiZSBzb21ldGhpbmcgaW4gdGhlXG4gICAgICBsaW5lIHRoYXQgZm9yY2VzIHRoZSB0ZXh0IGNvcHkgdG8gZ3JvdyBieSBhIGxpbmUuIFRoaXMgZXh0cmEgc3BhY2UgaXMgYSB0aGluXG4gICAgICBzcGFjZSwgdG8gcmVkdWNlIHRoZSBhbW91bnQgYnkgd2hpY2ggdGhlIHRleHQgY29weSB3aWxsIHByZW1hdHVyZWx5IGdyb3cuXG5cbiAgICAgIFRoZSBjb3B5Q29udGFpbmVyIGFsc28gY29udGFpbnMgYW4gZXh0cmFMaW5lIGVsZW1lbnQgZXhpc3RzIHRvIGRlYWwgd2l0aCB0aGVcbiAgICAgIGZhY3QgdGhhdCwgaWYgdGhlIHVzZXIgcHJlc3NlcyB0aGUgRW50ZXIga2V5IGRvd24sIHRoZSB0ZXh0YXJlYSdzIGNvbnRlbnQgd2lsbFxuICAgICAgbW92ZSBiZWZvcmUgdGhlIGNvbXBsZXRlIHRleHQgaXMgYXZhaWxhYmxlLiBTZWUgbm90ZXMgYXQgX2tleXByZXNzLlxuXG4gICAgICBMYXN0bHksIHdlIHB1dCB0aGUgSFRNTCBjb250ZW50IGVsZW1lbnQgaW50byBhIHNlcGFyYXRlIGNvbnRhaW5lciBzbyB3ZSBjYW5cbiAgICAgIGhpZGUgaXQuIFdlIG5lZWQgdG8gaGF2ZSBhIGNvbnRlbnQgZWxlbWVudCBzb21ld2hlcmUgaW4gdGhlIHRlbXBsYXRlIHRvXG4gICAgICBjb252aW5jZSBQb2x5bWVyIHRoYXQgd2UgY2FyZSBhYm91dCB0aGUgY29udGVudCBpbiB0aGUgU2hhZHkgRE9NIGNhc2UgLS1cbiAgICAgIHdpdGhvdXQgdGhhdCBjb250ZW50IGVsZW1lbnQsIFNoYWR5IERPTSB3aWxsIGNvbmNsdWRlIHRoZSBlbGVtZW50IGRvZXNuJ3RcbiAgICAgIG5lZWQgaXRzIGxpZ2h0IERPTSBjb250ZW50LCBhbmQgd2lsbCB0aHJvdyBpdCBhd2F5LlxuICAgICAgLS0+XG4gICAgICA8ZGl2IGlkPVwiYXV0b1NpemVDb250YWluZXJcIj5cbiAgICAgICAgPHRleHRhcmVhIGlkPVwiaW5uZXJcIj48L3RleHRhcmVhPlxuICAgICAgICA8ZGl2IGlkPVwiY29weUNvbnRhaW5lclwiPjxzcGFuIGlkPVwidGV4dENvcHlcIj48L3NwYW4+PHNwYW4gaWQ9XCJleHRyYVNwYWNlXCI+JnRoaW5zcDs8L3NwYW4+PGRpdiBpZD1cImV4dHJhTGluZVwiPiZuYnNwOzwvZGl2PjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGlkPVwiY29udGVudENvbnRhaW5lclwiPlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZXh0IGN1cnJlbnRseSBzaG93biBpbiB0aGUgdGV4dGFyZWEuXG4gICAqXG4gICAqIE5vdGUgdGhhdCB0aGUgdGV4dCBzaG93biBpbiB0aGUgdGV4dGFyZWEgY2FuIGFsc28gYmUgdXBkYXRlZCBieSBjaGFuZ2luZ1xuICAgKiB0aGUgZWxlbWVudCdzIGlubmVySFRNTC90ZXh0Q29udGVudC4gSG93ZXZlciwgaWYgdGhlIHZhbHVlIHByb3BlcnR5IGlzXG4gICAqIGV4cGxpY2l0bHkgc2V0LCB0aGF0IHdpbGwgb3ZlcnJpZGUgdGhlIGlubmVySFRNTC90ZXh0Q29udGVudC5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbm5lci52YWx1ZTtcbiAgfVxuICBzZXQgdmFsdWUodGV4dCkge1xuICAgIC8vIEV4cGxpY2l0bHkgc2V0dGluZyB2YWx1ZSBicmVha3MgYXV0b21hdGljIHVwZGF0ZSBvZiB2YWx1ZSBmcm9tIGNvbnRlbnQuXG4gICAgdGhpc1t2YWx1ZVRyYWNrc0NvbnRlbnRTeW1ib2xdID0gZmFsc2U7XG4gICAgdGhpcy5pbm5lci52YWx1ZSA9IHRleHQ7XG4gICAgdmFsdWVDaGFuZ2VkKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gdGhlIHVzZXIgdHlwZXMgaW4gdGhlIHRleHRhcmVhLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQXV0b3NpemVUZXh0YXJlYVxuICAgKiBAZXZlbnQgY2hhbmdlXG4gICAqL1xufVxuXG5cbmZ1bmN0aW9uIGdldFRleHRDb250ZW50KGVsZW1lbnQpIHtcbiAgbGV0IHRleHQgPSBlbGVtZW50LmRpc3RyaWJ1dGVkVGV4dENvbnRlbnQ7XG5cbiAgLy8gVHJpbSB0aGUgdGV4dC5cbiAgLy8gVGhpcyBpcyBub24tc3RhbmRhcmQgdGV4dGFyZWEgYmVoYXZpb3IuIEEgc3RhbmRhcmQgdGV4dGFyZWEgd2lsbCB0cmltIHRoZVxuICAvLyBmaXJzdCBjaGFyYWN0ZXIgaWYgaXQncyBhIG5ld2xpbmUsIGJ1dCB0aGF0J3MgaXQuIEhvd2V2ZXIsIGF1dGhvcnMgd2lsbFxuICAvLyB3YW50IHRvIGJlIGFibGUgdG8gcGxhY2UgdGhlIG9wZW5pbmcgYW5kIGNsb3NpbmcgdGFncyBvbiB0aGVpciBvd24gbGluZXMuXG4gIC8vIFNvIGl0IHNlZW1zIG1vcmUgaGVscGZ1bCB0byB0cmltIHdoaXRlc3BhY2Ugb24gZWl0aGVyIHNpZGUuXG4gIHRleHQgPSB0ZXh0LnRyaW0oKTtcblxuICByZXR1cm4gdGV4dDtcbn1cblxuXG4vLyBTZXQgdXAgb25jZSB0aGlzIGNvbXBvbmVudCBoYXMgYmVlbiByZW5kZXJlZC5cbi8vXG4vLyBPbiBDaHJvbWUgKGFzIG9mIDEwLzIzLzE0KSBhdCBsZWFzdCwgaWYgYW4gaW5zdGFuY2UgaWYgdGhpcyBjb21wb25lbnQgaXNcbi8vIGFkZGVkIGR5bmFtaWNhbGx5LCBpdHMgYXR0YWNoZWQgaGFuZGxlciBtYXkgdHJpZ2dlciBiZWZvcmUgaXRzIGJlZW5cbi8vIHJlbmRlcmVkLiBUaGF0IHdvdWxkIGNhdXNlIG91ciBsYXlvdXQgY2FsY3VsYXRpb25zIHRvIGJlIGluY29ycmVjdC5cbi8vXG5mdW5jdGlvbiBpbml0aWFsaXplV2hlblJlbmRlcmVkKGVsZW1lbnQpIHtcblxuICAvLyBJZiB0aGUgY29tcG9uZW50IGhhcyBiZWVuIHJlbmRlcmVkLCBvdXIgaGVpZ2h0IHNob3VsZCBiZSBub256ZXJvLlxuICBpZiAoZWxlbWVudC5jbGllbnRIZWlnaHQgPT09IDApIHtcbiAgICAvLyBOb3QgcmVuZGVyZWQgeWV0OiB3YWl0IGEgYml0IGJlZm9yZSB0cnlpbmcgYWdhaW4uXG4gICAgc2V0VGltZW91dCgoKSA9PiBpbml0aWFsaXplV2hlblJlbmRlcmVkKGVsZW1lbnQpLCAxMCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gSWYgd2UgcmVhY2ggdGhpcyBwb2ludCwgdGhlIGNvbXBvbmVudCdzIGVsZW1lbnRzIHNob3VsZCBieSBzdHlsZWQuXG5cbiAgLy8gRm9yIGF1dG8tc2l6aW5nIHRvIHdvcmssIHdlIG5lZWQgdGhlIHRleHQgY29weSB0byBoYXZlIHRoZSBzYW1lIGJvcmRlcixcbiAgLy8gcGFkZGluZywgYW5kIG90aGVyIHJlbGV2YW50IGNoYXJhY3RlcmlzdGljcyBhcyB0aGUgb3JpZ2luYWwgdGV4dCBhcmVhLlxuICAvLyBTaW5jZSB0aG9zZSBhc3BlY3RzIGFyZSBhZmZlY3RlZCBieSBDU1MsIHdlIGhhdmUgdG8gd2FpdCB1bnRpbCB0aGVcbiAgLy8gZWxlbWVudCBpcyBpbiB0aGUgZG9jdW1lbnQgYmVmb3JlIHdlIGNhbiB1cGRhdGUgdGhlIHRleHQgY29weS5cbiAgbGV0IHRleHRCb3hTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudC5pbm5lcik7XG4gIGxldCBjb3B5Q29udGFpbmVyU3R5bGUgPSBlbGVtZW50LiQuY29weUNvbnRhaW5lci5zdHlsZTtcbiAgY29weUNvbnRhaW5lclN0eWxlLmJvcmRlckJvdHRvbVN0eWxlICA9IHRleHRCb3hTdHlsZS5ib3JkZXJCb3R0b21TdHlsZTtcbiAgY29weUNvbnRhaW5lclN0eWxlLmJvcmRlckJvdHRvbVdpZHRoICA9IHRleHRCb3hTdHlsZS5ib3JkZXJCb3R0b21XaWR0aDtcbiAgY29weUNvbnRhaW5lclN0eWxlLmJvcmRlckxlZnRTdHlsZSAgICA9IHRleHRCb3hTdHlsZS5ib3JkZXJMZWZ0U3R5bGU7XG4gIGNvcHlDb250YWluZXJTdHlsZS5ib3JkZXJMZWZ0V2lkdGggICAgPSB0ZXh0Qm94U3R5bGUuYm9yZGVyTGVmdFdpZHRoO1xuICBjb3B5Q29udGFpbmVyU3R5bGUuYm9yZGVyUmlnaHRTdHlsZSAgID0gdGV4dEJveFN0eWxlLmJvcmRlclJpZ2h0U3R5bGU7XG4gIGNvcHlDb250YWluZXJTdHlsZS5ib3JkZXJSaWdodFdpZHRoICAgPSB0ZXh0Qm94U3R5bGUuYm9yZGVyUmlnaHRXaWR0aDtcbiAgY29weUNvbnRhaW5lclN0eWxlLmJvcmRlclRvcFN0eWxlICAgICA9IHRleHRCb3hTdHlsZS5ib3JkZXJUb3BTdHlsZTtcbiAgY29weUNvbnRhaW5lclN0eWxlLmJvcmRlclRvcFdpZHRoICAgICA9IHRleHRCb3hTdHlsZS5ib3JkZXJUb3BXaWR0aDtcbiAgY29weUNvbnRhaW5lclN0eWxlLnBhZGRpbmdCb3R0b20gICAgICA9IHRleHRCb3hTdHlsZS5wYWRkaW5nQm90dG9tO1xuICBjb3B5Q29udGFpbmVyU3R5bGUucGFkZGluZ0xlZnQgICAgICAgID0gdGV4dEJveFN0eWxlLnBhZGRpbmdMZWZ0O1xuICBjb3B5Q29udGFpbmVyU3R5bGUucGFkZGluZ1JpZ2h0ICAgICAgID0gdGV4dEJveFN0eWxlLnBhZGRpbmdSaWdodDtcbiAgY29weUNvbnRhaW5lclN0eWxlLnBhZGRpbmdUb3AgICAgICAgICA9IHRleHRCb3hTdHlsZS5wYWRkaW5nVG9wO1xuXG4gIC8vIFVzZSB0aGUgZXh0cmFMaW5lIG1lbWJlciB0byBnYXVnZSB0aGUgZXhwZWN0ZWQgaGVpZ2h0IG9mIGEgc2luZ2xlIGxpbmUgb2ZcbiAgLy8gdGV4dC4gV2UgY2FuJ3QgdXNlIGxpbmVIZWlnaHQsIGJlY2F1c2UgdGhhdCBjYW4gYmUgcmVwb3J0ZWQgYXMgXCJub3JtYWxcIixcbiAgLy8gYW5kIHdlIHdhbnQgdG8ga25vdyB0aGUgYWN0dWFsIHBpeGVsIGhlaWdodC5cbiAgZWxlbWVudC4kLmV4dHJhTGluZS5zdHlsZS5kaXNwbGF5ID0gJ2luaGVyaXQnO1xuICBlbGVtZW50W2xpbmVIZWlnaHRTeW1ib2xdID0gZWxlbWVudC4kLmV4dHJhTGluZS5jbGllbnRIZWlnaHQ7XG5cbiAgLy8gTm93IHRoYXQgd2Uga25vdyB0aGUgbGluZSBoZWlnaHQsIHdlIGNhbiBoaWRlIHRoZSBleHRyYSBsaW5lLlxuICBlbGVtZW50LiQuZXh0cmFMaW5lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgLy8gVXNlIHRoZSBsaW5lIGhlaWdodCBpbiBjb25qdW5jdGlvbiB3aXRoIG1pbmltdW1Sb3dzIHRvIGVzdGFibGlzaCB0aGVcbiAgLy8gb3ZlcmFsbCBtaW5pbXVtIGhlaWdodCBvZiB0aGUgY29tcG9uZW50LlxuICBzZXRNaW5pbXVtSGVpZ2h0KGVsZW1lbnQpO1xufVxuXG5cbi8vIFNwZWN1bGF0aXZlbHkgYWRkIGEgbGluZSB0byBvdXIgY29weSBvZiB0aGUgdGV4dC4gV2UncmUgbm90IHN1cmUgd2hhdCB0aGVcbi8vIGV4YWN0IGVmZmVjdCBvZiB0eXBpbmcgdGhpcyBjaGFyYWN0ZXIgd2lsbCBiZSwgYW5kIGF0IHRoaXMgcG9pbnQgaXQncyBub3Rcbi8vIHJlZmxlY3RlZCB5ZXQgaW4gdGhlIHRleHRhcmVhJ3MgY29udGVudC4gV2Ugc3BlY3VsYXRlIHRoYXQgaXQgd2lsbCBhZGQgYVxuLy8gbGluZSB0byB0aGUgdGV4dCBhbmQgc2l6ZSBhY2NvcmRpbmdseS4gKE9uZSBvdGhlciBwb3NzaWJpbGl0eSBpcyB0aGF0IHRoZVxuLy8gdXNlcidzIHJlcGxhY2luZyBhIHNlbGVjdGVkIGNodW5rIG9mIHRleHQgd2l0aCBhIG5ld2xpbmUuKSBJbiBhbnkgZXZlbnQsXG4vLyBvbmNlIHdlIGdldCB0aGUga2V5dXAgb3IgY2hhbmdlIGV2ZW50LCB3ZSdsbCBtYWtlIGFueSBmaW5hbCBhZGp1c3RtZW50cy5cbi8vXG4vLyBUT0RPOiBJZiB0aGUgdXNlciBob2xkcyBkb3duIHRoZSBFbnRlciBrZXksIHdlIGNhbiBnZXQgYSBidW5jaCBvZiBrZXlwcmVzc1xuLy8gZXZlbnRzIGJlZm9yZSB3ZSBnZXQga2V5dXAuIFRoaXMgY2F1c2VzIGZsaWNrZXIuIEluc3RlYWQgb2Ygc3VwcG9ydGluZyBvbmx5XG4vLyBhIHNpbmdsZSBleHRyYSBzcGVjdWxhdGl2ZSBsaW5lLCB3ZSBzaG91bGQgZ3JvdyB0aGUgc3BlY3VsYXRpdmUgZWxlbWVudCB0b1xuLy8gY29udGFpbiB0aGUgbnVtYmVyIG9mIEVudGVyIGtleXByZXNzZXMgd2UndmUgcmVjZWl2ZWQuXG5mdW5jdGlvbiBrZXlwcmVzcyhlbGVtZW50LCBldmVudCkge1xuICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMgLyogRW50ZXIgKi8pIHtcbiAgICBlbGVtZW50LiQuZXh0cmFMaW5lLnN0eWxlLmRpc3BsYXkgPSAnaW5oZXJpdCc7XG4gIH1cbn1cblxuXG4vLyBTZXR0aW5nIHRoZSBtaW5pbXVtUm93cyBhdHRyaWJ1dGUgdHJhbnNsYXRlcyBpbnRvIHNldHRpbmcgdGhlIG1pbmltdW1cbi8vIGhlaWdodCBvbiB0aGUgdGV4dCBjb3B5IGNvbnRhaW5lci5cbmZ1bmN0aW9uIHNldE1pbmltdW1IZWlnaHQoZWxlbWVudCkge1xuICBsZXQgY29weUNvbnRhaW5lciA9IGVsZW1lbnQuJC5jb3B5Q29udGFpbmVyO1xuICBsZXQgb3V0ZXJIZWlnaHQgPSBjb3B5Q29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgbGV0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShjb3B5Q29udGFpbmVyKTtcbiAgbGV0IHBhZGRpbmdUb3AgPSBwYXJzZUZsb2F0KHN0eWxlLnBhZGRpbmdUb3ApO1xuICBsZXQgcGFkZGluZ0JvdHRvbSA9IHBhcnNlRmxvYXQoc3R5bGUucGFkZGluZ0JvdHRvbSk7XG4gIGxldCBpbm5lckhlaWdodCA9IGNvcHlDb250YWluZXIuY2xpZW50SGVpZ2h0IC0gcGFkZGluZ1RvcCAtIHBhZGRpbmdCb3R0b207XG4gIGxldCBib3JkZXJzUGx1c1BhZGRpbmcgPSBvdXRlckhlaWdodCAtIGlubmVySGVpZ2h0O1xuICBsZXQgbWluSGVpZ2h0ID0gKGVsZW1lbnQubWluaW11bVJvd3MgKiBlbGVtZW50W2xpbmVIZWlnaHRTeW1ib2xdKSArIGJvcmRlcnNQbHVzUGFkZGluZztcbiAgbWluSGVpZ2h0ID0gTWF0aC5jZWlsKG1pbkhlaWdodCk7XG4gIGNvcHlDb250YWluZXIuc3R5bGUubWluSGVpZ2h0ID0gbWluSGVpZ2h0ICsgJ3B4Jztcbn1cblxuXG5mdW5jdGlvbiB1bmVzY2FwZUh0bWwoaHRtbCkge1xuICByZXR1cm4gaHRtbFxuICAgIC5yZXBsYWNlKC8mYW1wOy9nLCAnJicpXG4gICAgLnJlcGxhY2UoLyZsdDsvZywgJzwnKVxuICAgIC5yZXBsYWNlKC8mZ3Q7L2csIFwiPlwiKVxuICAgIC5yZXBsYWNlKC8mcXVvdDsvZywgJ1xcXCInKVxuICAgIC5yZXBsYWNlKC8mIzAzOTsvZywgJ1xcJycpO1xufVxuXG5cbi8qXG4gKiBIYW5kbGUgYSBjaGFuZ2UgaW4gdGhlIGVsZW1lbnQncyB2YWx1ZSBwcm9wZXJ0eS5cbiAqL1xuZnVuY3Rpb24gdmFsdWVDaGFuZ2VkKGVsZW1lbnQpIHtcbiAgZWxlbWVudC5hdXRvU2l6ZSgpO1xuICBlbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCd2YWx1ZS1jaGFuZ2VkJykpO1xufVxuXG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYmFzaWMtYXV0b3NpemUtdGV4dGFyZWEnLCBBdXRvc2l6ZVRleHRhcmVhKTtcbmV4cG9ydCBkZWZhdWx0IEF1dG9zaXplVGV4dGFyZWE7XG4iLCJpbXBvcnQgRWxlbWVudEJhc2UgZnJvbSAnLi4vLi4vYmFzaWMtZWxlbWVudC1iYXNlL3NyYy9FbGVtZW50QmFzZSc7XG5cbmltcG9ydCBDb250ZW50QXNJdGVtcyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Db250ZW50QXNJdGVtcyc7XG5pbXBvcnQgRGlyZWN0aW9uU2VsZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0RpcmVjdGlvblNlbGVjdGlvbic7XG5pbXBvcnQgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50JztcbmltcG9ydCBGcmFjdGlvbmFsU2VsZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0ZyYWN0aW9uYWxTZWxlY3Rpb24nO1xuaW1wb3J0IEtleWJvYXJkIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0tleWJvYXJkJztcbmltcG9ydCBLZXlib2FyZERpcmVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9LZXlib2FyZERpcmVjdGlvbic7XG5pbXBvcnQgU2VsZWN0aW9uQXJpYUFjdGl2ZSBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TZWxlY3Rpb25BcmlhQWN0aXZlJztcbmltcG9ydCBTZWxlY3Rpb25BbmltYXRpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2VsZWN0aW9uQW5pbWF0aW9uJztcbmltcG9ydCBTaW5nbGVTZWxlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2luZ2xlU2VsZWN0aW9uJztcbmltcG9ydCBTd2lwZURpcmVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Td2lwZURpcmVjdGlvbic7XG5pbXBvcnQgVGFyZ2V0SW5Db2xsZWN0aXZlIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1RhcmdldEluQ29sbGVjdGl2ZSc7XG5pbXBvcnQgVHJhY2twYWREaXJlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvVHJhY2twYWREaXJlY3Rpb24nO1xuXG5cbmxldCBiYXNlID0gRWxlbWVudEJhc2UuY29tcG9zZShcbiAgQ29udGVudEFzSXRlbXMsXG4gIERpcmVjdGlvblNlbGVjdGlvbixcbiAgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCxcbiAgRnJhY3Rpb25hbFNlbGVjdGlvbixcbiAgS2V5Ym9hcmQsXG4gIEtleWJvYXJkRGlyZWN0aW9uLFxuICBTZWxlY3Rpb25BbmltYXRpb24sXG4gIFNlbGVjdGlvbkFyaWFBY3RpdmUsXG4gIFNpbmdsZVNlbGVjdGlvbixcbiAgU3dpcGVEaXJlY3Rpb24sXG4gIFRhcmdldEluQ29sbGVjdGl2ZSxcbiAgVHJhY2twYWREaXJlY3Rpb25cbik7XG5cblxuLyoqXG4gKiBMZXRzIHRoZSB1c2VyIG5hdmlnYXRlIGxhdGVyYWxseSB0aHJvdWdoIGEgc2VxdWVuY2Ugb2YgY2hpbGQgZWxlbWVudHMuXG4gKlxuICogYmFzaWMtY2Fyb3VzZWwgaXMgYW4gaW1wbGVtZW50YXRpb24gb2YgdGhlIGNhcm91c2VsIHVzZXIgaW50ZXJmYWNlIHBhdHRlcm4sXG4gKiBjb21tb25seSB1c2VkIGZvciBuYXZpZ2F0aW5nIGJldHdlZW4gaW1hZ2VzLCBwYWdlcywgYW5kIG90aGVyIGVsZW1lbnRzLiBUaGlzXG4gKiBwYXR0ZXJuIHByZXNlbnRzIHRoZSB1c2VyIHdpdGggYSBsaW5lYXIgc2VxdWVuY2Ugb2YgZWxlbWVudHMsIG9ubHkgb25lIG9mXG4gKiB3aGljaCBpcyBzaG93biBhdCBhIHRpbWUuIFRoZSB1c2VyIGNhbiBuYXZpZ2F0ZSB0byB0aGUgbmV4dC9wcmV2aW91cyBlbGVtZW50XG4gKiB3aXRoIGEgdmFyaWV0eSBvZiBpbnB1dCBtZXRob2RzLlxuICpcbiAqIFtMaXZlIGRlbW9dKGh0dHA6Ly9iYXNpY3dlYmNvbXBvbmVudHMub3JnL2Jhc2ljLXdlYi1jb21wb25lbnRzL3BhY2thZ2VzL2Jhc2ljLWNhcm91c2VsLylcbiAqXG4gKiBUaGUgYWJvdmUgZGVtbyBhZGRzIHRoZSBvcHRpb25hbFxuICogW2Jhc2ljLWFycm93LXNlbGVjdGlvbl0oLi4vYmFzaWMtYXJyb3ctc2VsZWN0aW9uKSBhbmRcbiAqIFtiYXNpYy1wYWdlLWRvdHNdKC4uL2Jhc2ljLXBhZ2UtZG90cykgY29tcG9uZW50cy4gWW91IGNhbiBhbHNvIHZpZXcgYVxuICogW3BsYWluIGRlbW9dKGh0dHA6Ly9iYXNpY3dlYmNvbXBvbmVudHMub3JnL2Jhc2ljLXdlYi1jb21wb25lbnRzL3BhY2thZ2VzL2Jhc2ljLWNhcm91c2VsL3BsYWluLmh0bWwpXG4gKiBkZW1vLlxuICpcbiAqIGJhc2ljLWNhcm91c2VsIHVzZXMgaXRzIGNoaWxkcmVuIGFzIHRoZSBlbGVtZW50cyB0aGUgdXNlciB3aWxsIG5hdmlnYXRlXG4gKiB0aHJvdWdoLiBJbiBhIHR5cGljYWwgdXNlLCBhIGJhc2ljLWNhcm91c2VsIGNhbiBiZSB1c2VkIHRvIG5hdmlnYXRlIGJldHdlZW4gYVxuICogc2VxdWVuY2Ugb2YgaW1hZ2VzOlxuICpcbiAqICAgICA8YmFzaWMtY2Fyb3VzZWw+XG4gKiAgICAgICA8aW1nIHNyYz1cImltYWdlMS5qcGdcIj5cbiAqICAgICAgIDxpbWcgc3JjPVwiaW1hZ2UyLmpwZ1wiPlxuICogICAgICAgPGltZyBzcmM9XCJpbWFnZTMuanBnXCI+XG4gKiAgICAgPC9iYXNpYy1jYXJvdXNlbD5cbiAqXG4gKiBUaGUgY2hpbGQgZWxlbWVudHMgY2FuIGJlIG9mIGFueSB0eXBlIOKAlMKgdGhleSBhcmUgbm90IHJlc3RyaWN0ZWQgdG8gaW1hZ2VzLlxuICpcbiAqIFRoaXMgY29tcG9uZW50IGF0dGVtcHRzIHRvIG1lZXQgdGhlIFtHb2xkIFN0YW5kYXJkIGZvciB3ZWIgY29tcG9uZW50c11cbiAqIChodHRwczovL2dpdGh1Yi5jb20vd2ViY29tcG9uZW50cy9nb2xkLXN0YW5kYXJkL3dpa2kpIHNvIHRoYXQgaXQgaXMgZ2VuZXJhbGx5XG4gKiBhcyBmbGV4aWJsZSBhbmQgcm9idXN0IGFzIHN0YW5kYXJkIEhUTUwgZWxlbWVudHMuIEZvciBleGFtcGxlLCBpdCBtZWV0cyB0aGVcbiAqIFwiQ29udGVudCBDaGFuZ2VzXCIgY3JpdGVyaWE6IHRoZSBjYXJvdXNlbCB3aWxsIGFkYXB0IHRvIG5ldyBjaGlsZCBlbGVtZW50c1xuICogYWRkZWQgb3IgcmVtb3ZlZCBhdCBydW50aW1lLlxuICpcbiAqIEN1cnJlbnRseSwgdGhpcyBjb21wb25lbnQgZG9lcyBub3QgbWVldCB0aGUgR29sZCBTdGFuZGFyZCBjcml0ZXJpYSBcIlNpemUgdG9cbiAqIENvbnRlbnRcIi4gQXMgYSByZXN1bHQsIGZvciB0aGUgdGltZSBiZWluZywgKip5b3UgbXVzdCBtYW51YWxseSBzZXQgYSBzaXplIG9uXG4gKiB0aGlzIGNvbXBvbmVudCoqLiBUd28gYXBwcm9hY2hlcyBhcmUgdG86IDEpIHN0cmV0Y2ggdGhlIGNvbXBvbmVudCBhY3Jvc3NcbiAqIHdoYXRldmVyIHN1cmZhY2UgaXQgaXMgY29udGFpbmVkIHdpdGhpbiwgb3IgMikgc2V0IGl0IHRvIGJlIGxhcmdlciB0aGFuIHRoZVxuICogbGFyZ2VzdCBjaGlsZCBlbGVtZW50IHlvdSB3YW50IHRvIGRpc3BsYXkuIFRoZSBmb3JtZXIgYXBwcm9hY2ggaXMgbW9yZVxuICogY29tbW9uLCBhbmQgY2FuIGJlIGFjaGlldmVkIHdpdGggQ1NTIHN0eWxpbmcgc3VjaCBhczpcbiAqXG4gKiAgICAgaHRtbCB7XG4gKiAgICAgICBoZWlnaHQ6IDEwMCU7XG4gKiAgICAgfVxuICpcbiAqICAgICBib2R5IHtcbiAqICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAqICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gKiAgICAgICBoZWlnaHQ6IDEwMCU7XG4gKiAgICAgICBtYXJnaW46IDA7XG4gKiAgICAgfVxuICpcbiAqICAgICBiYXNpYy1jYXJvdXNlbCB7XG4gKiAgICAgICAtd2Via2l0LWZsZXg6IDE7XG4gKiAgICAgICBmbGV4OiAxO1xuICogICAgIH1cbiAqXG4gKiBUaGUgc3RhbmRhcmQgYmFzaWMtY2Fyb3VzZWwgY29tcG9uZW50IHN1cHBvcnRzIG5hdmlnYXRpb24gdmlhIHRoZSBmb2xsb3dpbmdcbiAqIGlucHV0IG1ldGhvZHM6XG4gKlxuICogKiBLZXlib2FyZC4gV2hlbiB0aGUgY2Fyb3VzZWwgaGFzIGZvY3VzLCB0aGUgdXNlciBjYW4gcHJlc3MgTGVmdCwgUmlnaHQsXG4gKiAgIEhvbWUsIG9yIEVuZC4gVGhlc2UgbmF2aWdhdGUgdG8gdGhlIGV4cGVjdGVkIGVsZW1lbnQuXG4gKiAqIFRvdWNoLiBPbiBtb2JpbGUgYW5kIG90aGVyIHRvdWNoLWVuYWJsZWQgZGV2aWNlcywgdGhlIHVzZXIgY2FuIGRyYWcgbGVmdCBvclxuICogICByaWdodC5cbiAqICogVHJhY2twYWQuIFRoZSB1c2VyIGNhbiBzd2lwZSBsZWZ0IG9yIHJpZ2h0IG9uIGEgdHJhY2twYWQgdG8gbmF2aWdhdGUuXG4gKlxuICogQmVjYXVzZSBjYXJvdXNlbHMgYXJlIHVzZWQgaW4gYSB3aWRlIHZhcmlldHkgb2YgY2lyY3Vtc3RhbmNlcywgYnkgZGVmYXVsdFxuICogYmFzaWMtY2Fyb3VzZWwgcHJvdmlkZXMgYSBtaW5pbWFsIGFwcGVhcmFuY2UgYW5kIG5vIHNlcGFyYXRlbHkgaW50ZXJhY3RpdmVcbiAqIGVsZW1lbnRzIHN1Y2ggYXMgYXJyb3cgYnV0dG9ucyBvbiB0aGUgc2lkZSBvciBkb3RzIGFsb25nIHRoZSBib3R0b20uIFRob3NlXG4gKiBlbGVtZW50cyBjYW4gYmUgYWRkZWQgYnkgd3JhcHBpbmcgYSBiYXNpYy1jYXJvdXNlbCBpbiBvcHRpb25hbCBhY2Nlc3NvcmllczpcbiAqXG4gKiAqIFtiYXNpYy1hcnJvdy1zZWxlY3Rpb25dKC4uL2Jhc2ljLWFycm93LXNlbGVjdGlvbikuXG4gKiAgIFRoaXMgYWRkcyBwcm9taW5lbnQgbGVmdCBhbmQgcmlnaHQgYXJyb3cgYnV0dG9ucyBvbiB0aGUgc2lkZSBvZiB0aGUgY2Fyb3VzZWwuXG4gKiAqIFtiYXNpYy1wYWdlLWRvdHNdKC4uL2Jhc2ljLXBhZ2UtZG90cykuXG4gKiAgIFRoaXMgYWRkcyBhIHNlcmllcyBvZiBzbWFsbCBkb3RzIGJlbG93IHRoZSBjYXJvdXNlbCB0byBpbmRpY2F0ZSB0aGUgdXNlcidzXG4gKiAgIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIHNlcXVlbmNlLlxuICogKiBbYmFzaWMtc2xpZGVzaG93LXRpbWVyXSguLi9iYXNpYy1zbGlkZXNob3ctdGltZXIpLlxuICogICBBZHZhbmNlcyB0byB0aGUgbmV4dCBpdGVtIG9uIGEgdGltZXIuXG4gKiAqIFtiYXNpYy10YWItc3RyaXBdKC4uL2Jhc2ljLXRhYi1zdHJpcCkuXG4gKiAgIEFkZHMgYSBzdHJpcCBvZiB0cmFkaXRpb25hbCB0YWIgYnV0dG9ucy5cbiAqXG4gKiBTZWUgdGhvc2UgY29tcG9uZW50cyBmb3IgbW9yZSBkZXRhaWxzLCBidXQgaW4gZ2VuZXJhbCB5b3UgY2FuIGNvbnN0cnVjdCBhXG4gKiBjb21tb24gY2Fyb3VzZWwgd2l0aCBib3RoIGFycm93IGJ1dHRvbnMgYW5kIGRvdHMgbGlrZSBzbzpcbiAqXG4gKiAgICAgPGJhc2ljLWFycm93LXNlbGVjdGlvbj5cbiAqICAgICAgIDxiYXNpYy1wYWdlLWRvdHM+XG4gKiAgICAgICAgIDxiYXNpYy1jYXJvdXNlbD5cbiAqICAgICAgICAgICAuLi4gaW1hZ2VzLCBldGMuIC4uLlxuICogICAgICAgICA8L2Jhc2ljLWNhcm91c2VsPlxuICogICAgICAgPC9iYXNpYy1wYWdlLWRvdHM+XG4gKiAgICAgPC9iYXNpYy1hcnJvdy1zZWxlY3Rpb24+XG4gKlxuICogRm9yIHVuaXZlcnNhbCBhY2Nlc3MsIGJhc2ljLWNhcm91c2VsIGF1dG9tYXRpY2FsbHkgYWRkcyBhIHZhcmlldHkgb2ZcbiAqIFtBUklBXShodHRwOi8vd3d3LnczLm9yZy9XQUkvaW50cm8vYXJpYSkgcHJvcGVydGllcyB0byBpdHNlbGYgYW5kIHRvIGNoaWxkXG4gKiBlbGVtZW50cy4gVGhpcyBoZWxwcyB1c2VycyBuYXZpZ2F0ZSB0aGUgc2VxdWVuY2Ugb2YgZWxlbWVudHMgaW4gdGhlIGNhcm91c2VsXG4gKiB1c2luZyBhc3Npc3RpdmUgdGVjaG5vbG9naWVzLlxuICpcbiAqIEBleHRlbmRzIEVsZW1lbnRCYXNlXG4gKiBAbWl4ZXMgQ29udGVudEFzSXRlbXNcbiAqIEBtaXhlcyBEaXJlY3Rpb25TZWxlY3Rpb25cbiAqIEBtaXhlcyBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50XG4gKiBAbWl4ZXMgRnJhY3Rpb25hbFNlbGVjdGlvblxuICogQG1peGVzIEdlbmVyaWNcbiAqIEBtaXhlcyBLZXlib2FyZFxuICogQG1peGVzIEtleWJvYXJkRGlyZWN0aW9uXG4gKiBAbWl4ZXMgU2VsZWN0aW9uQW5pbWF0aW9uXG4gKiBAbWl4ZXMgU2VsZWN0aW9uQXJpYUFjdGl2ZVxuICogQG1peGVzIFNpbmdsZVNlbGVjdGlvblxuICogQG1peGVzIFN3aXBlRGlyZWN0aW9uXG4gKiBAbWl4ZXMgVGFyZ2V0SW5Db2xsZWN0aXZlXG4gKiBAbWl4ZXMgVGFyZ2V0U2VsZWN0aW9uXG4gKiBAbWl4ZXMgVHJhY2twYWREaXJlY3Rpb25cbiAqL1xuY2xhc3MgQ2Fyb3VzZWwgZXh0ZW5kcyBiYXNlIHtcblxuICBnZXQgZGVmYXVsdHMoKSB7XG4gICAgbGV0IGRlZmF1bHRzID0gc3VwZXIuZGVmYXVsdHMgfHwge307XG4gICAgZGVmYXVsdHMubmF2aWdhdGlvbkF4aXMgPSAnaG9yaXpvbnRhbCc7XG4gICAgZGVmYXVsdHMuc2VsZWN0aW9uQW5pbWF0aW9uRWZmZWN0ID0gJ3NsaWRlV2l0aEdhcCc7XG4gICAgZGVmYXVsdHMuc2VsZWN0aW9uUmVxdWlyZWQgPSB0cnVlO1xuICAgIHJldHVybiBkZWZhdWx0cztcbiAgfVxuXG4gIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gYFxuICAgICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgI2NvbnRhaW5lciA6OnNsb3R0ZWQoKikge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGlkPVwiY29udGFpbmVyXCIgcm9sZT1cIm5vbmVcIj5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG59XG5cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdiYXNpYy1jYXJvdXNlbCcsIENhcm91c2VsKTtcbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsO1xuIiwiaW1wb3J0IEVsZW1lbnRCYXNlIGZyb20gJy4uLy4uL2Jhc2ljLWVsZW1lbnQtYmFzZS9zcmMvRWxlbWVudEJhc2UnO1xuaW1wb3J0IE9wZW5DbG9zZSBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9PcGVuQ2xvc2UnO1xuXG5cbi8qKlxuICogQSBwYW5lbCB3aGljaCBjYW4gYmUgZXhwYW5kZWQvY29sbGFwc2VkIHdpdGggYW4gYW5pbWF0ZWQgdHJhbnNpdGlvbi5cbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBjb21iaW5lcyB0aGUgT3BlbkNsb3NlIG1peGluIGFuZCBhIHNpbXBsZSBDU1MgaGVpZ2h0XG4gKiBhbmltYXRpb24uXG4gKlxuICogVGhpcyBjb21wb25lbnQgaGFuZGxlcyBvbmx5IHRoZSBkdXRpZXMgb2YgY29sbGFwc2luZyBhbmQgZXhwYW5kaW5nLiBJdCBkb2VzXG4gKiBub3QgcHJvdmlkZSBhIHVzZXIgaW50ZXJmYWNlIGZvciB0aGUgdXNlciB0byB0cmlnZ2VyIHRoZSBjaGFuZ2UgaW4gc3RhdGU7XG4gKiB5b3UgbXVzdCBwcm92aWRlIHRoYXQgdXNlciBpbnRlcmZhY2UgeW91cnNlbGYuXG4gKlxuICogQGV4dGVuZHMgRWxlbWVudEJhc2VcbiAqIEBtaXhlcyBPcGVuQ2xvc2VcbiAqL1xuY2xhc3MgQ29sbGFwc2libGVQYW5lbCBleHRlbmRzIE9wZW5DbG9zZShFbGVtZW50QmFzZSkge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy4kLm92ZXJmbG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuY2xvc2VkKSB7XG4gICAgICAgIC8vIFJlbW92ZSB0aGUgaGFyZC1jb2RlZCBoZWlnaHQgd2UgYXBwbGllZCBmb3IgdGhlIHRyYW5zaXRpb24gc28gdGhhdFxuICAgICAgICAvLyB0aGUgZWxlbWVudCB3aWxsIHJlZmxvdyBjb3JyZWN0bHksIGUuZy4sIG9uIHdpbmRvdyByZXNpemUuXG4gICAgICAgIHRoaXMuJC5vdmVyZmxvdy5zdHlsZS5oZWlnaHQgPSAnJztcbiAgICAgIH1cbiAgICAgIC8vIEVuc3VyZSB0aGUgYW5pbWF0aW9uIG9ubHkgcGxheXMgb25jZS4gRm9yIHNvbWUgcmVhc29uLCBTYWZhcmkgd2lsbCBzaG93XG4gICAgICAvLyB0aGUgYW5pbWF0aW9uIHR3aWNlIHdpdGhvdXQgdGhpcyBsaW5lLCBldmVuIHRob3VnaCB0aGUgcmVuZGVyIGZ1bmN0aW9uXG4gICAgICAvLyBleHBsaWNpdGx5IHJlbW92ZXMgdGhpcyBjbGFzcyB3aGVuIGl0IHNldHMgdGhlIG9sZCBoZWlnaHQuIE5laXRoZXJcbiAgICAgIC8vIENocm9tZSBub3IgRmlyZWZveCBzZWVtIHRvIG5lZWQgdGhpcyBsaW5lLlxuICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdzaG93VHJhbnNpdGlvbicpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKGNsb3NpbmcpIHtcbiAgICBzdXBlci5yZW5kZXIoY2xvc2luZyk7XG5cbiAgICBsZXQgbmF0dXJhbEhlaWdodCA9IHRoaXMuJC5jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgIGlmIChuYXR1cmFsSGVpZ2h0ID09PSAwKSB7XG4gICAgICAvLyBNb3N0IGxpa2VseSBoYXZlbid0IGhhZCBhIGNoYW5jZSB0byByZW5kZXIgeWV0LlxuICAgICAgdGhpcy4kLm92ZXJmbG93LnN0eWxlLmhlaWdodCA9IGNsb3NpbmcgPyAwIDogJyc7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gV2l0aG91dCBhbmltYXRpbmcsIHNldCBzdGFydGluZyBoZWlnaHQgb2YgdHJhbnNpdGlvbi5cbiAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3dUcmFuc2l0aW9uJyk7XG4gICAgbGV0IG9sZEhlaWdodCA9IGNsb3NpbmcgPyBuYXR1cmFsSGVpZ2h0IDogMDtcbiAgICB0aGlzLiQub3ZlcmZsb3cuc3R5bGUuaGVpZ2h0ID0gb2xkSGVpZ2h0ICsgJ3B4JztcblxuICAgIC8vIEZvcmNlIGEgcmVsYXlvdXQgc28gdGhhdCB0aGUgc3RhcnRpbmcgaGVpZ2h0IGlzIGFwcGxpZWQuXG4gICAgLy8gVGhpcyBjYW4gYmUgYWNoaWV2ZWQgYnkgcmVhZGluZyBhIHByb3BlcnR5IGxpa2Ugb2Zmc2V0SGVpZ2h0LlxuICAgIHRoaXMuJC5vdmVyZmxvdy5vZmZzZXRIZWlnaHQ7IC8vIGpzaGludCBpZ25vcmU6bGluZVxuXG4gICAgLy8gVHVybiBhbmltYXRpb24gb24sIGFuZCBlbmRpbmcgaGVpZ2h0IG9mIHRyYW5zaXRpb24uXG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdzaG93VHJhbnNpdGlvbicpO1xuICAgIGxldCBuZXdIZWlnaHQgPSBjbG9zaW5nID8gMCA6IG5hdHVyYWxIZWlnaHQ7XG4gICAgdGhpcy4kLm92ZXJmbG93LnN0eWxlLmhlaWdodCA9IG5ld0hlaWdodCArICdweCc7XG4gIH1cblxuICBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG5cbiAgICAgIDpob3N0KC5zaG93VHJhbnNpdGlvbikgI292ZXJmbG93IHtcbiAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuMnM7XG4gICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGlkPVwib3ZlcmZsb3dcIiByb2xlPVwibm9uZVwiPlxuICAgICAgICA8ZGl2IGlkPVwiY29udGFpbmVyXCIgcm9sZT1cIm5vbmVcIj5cbiAgICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG59XG5cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdiYXNpYy1jb2xsYXBzaWJsZS1wYW5lbCcsIENvbGxhcHNpYmxlUGFuZWwpO1xuZXhwb3J0IGRlZmF1bHQgQ29sbGFwc2libGVQYW5lbDtcbiIsIi8vIE1lbW9pemVkIG1hcHMgb2YgYXR0cmlidXRlIHRvIHByb3BlcnR5IG5hbWVzIGFuZCB2aWNlIHZlcnNhLlxuY29uc3QgYXR0cmlidXRlVG9Qcm9wZXJ0eU5hbWVzID0ge307XG5jb25zdCBwcm9wZXJ0eU5hbWVzVG9BdHRyaWJ1dGVzID0ge307XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBBdHRyaWJ1dGVNYXJzaGFsbGluZy4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIG1hcnNoYWxscyBhdHRyaWJ1dGVzIHRvIHByb3BlcnRpZXMgKGFuZCBldmVudHVhbGx5IHZpY2UgdmVyc2EpLlxuICAgKlxuICAgKiBJZiB5b3VyIGNvbXBvbmVudCBleHBvc2VzIGEgc2V0dGVyIGZvciBhIHByb3BlcnR5LCBpdCdzIGdlbmVyYWxseSBhIGdvb2RcbiAgICogaWRlYSB0byBsZXQgZGV2cyB1c2luZyB5b3VyIGNvbXBvbmVudCBiZSBhYmxlIHRvIHNldCB0aGF0IHByb3BlcnR5IGluIEhUTUxcbiAgICogdmlhIGFuIGVsZW1lbnQgYXR0cmlidXRlLiBZb3UgY2FuIGNvZGUgdGhhdCB5b3Vyc2VsZiBieSB3cml0aW5nIGFuXG4gICAqIGBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tgLCBvciB5b3UgY2FuIHVzZSB0aGlzIG1peGluIHRvIGdldCBhIGRlZ3JlZSBvZlxuICAgKiBhdXRvbWF0aWMgc3VwcG9ydC5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBpbXBsZW1lbnRzIGFuIGBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tgIHRoYXQgd2lsbCBhdHRlbXB0IHRvXG4gICAqIGNvbnZlcnQgYSBjaGFuZ2UgaW4gYW4gZWxlbWVudCBhdHRyaWJ1dGUgaW50byBhIGNhbGwgdG8gdGhlIGNvcnJlc3BvbmRpbmdcbiAgICogcHJvcGVydHkgc2V0dGVyLiBBdHRyaWJ1dGVzIHR5cGljYWxseSBmb2xsb3cgaHlwaGVuYXRlZCBuYW1lcyAoXCJmb28tYmFyXCIpLFxuICAgKiB3aGVyZWFzIHByb3BlcnRpZXMgdHlwaWNhbGx5IHVzZSBjYW1lbENhc2UgbmFtZXMgKFwiZm9vQmFyXCIpLiBUaGlzIG1peGluXG4gICAqIHJlc3BlY3RzIHRoYXQgY29udmVudGlvbiwgYXV0b21hdGljYWxseSBtYXBwaW5nIHRoZSBoeXBoZW5hdGVkIGF0dHJpYnV0ZVxuICAgKiBuYW1lIHRvIHRoZSBjb3JyZXNwb25kaW5nIGNhbWVsQ2FzZSBwcm9wZXJ0eSBuYW1lLlxuICAgKlxuICAgKiBFeGFtcGxlOiBZb3UgZGVmaW5lIGEgY29tcG9uZW50IHVzaW5nIHRoaXMgbWl4aW46XG4gICAqXG4gICAqICAgICBjbGFzcyBNeUVsZW1lbnQgZXh0ZW5kcyBBdHRyaWJ1dGVNYXJzaGFsbGluZyhIVE1MRWxlbWVudCkge1xuICAgKiAgICAgICBnZXQgZm9vQmFyKCkgeyByZXR1cm4gdGhpcy5fZm9vQmFyOyB9XG4gICAqICAgICAgIHNldCBmb29CYXIodmFsdWUpIHsgdGhpcy5fZm9vQmFyID0gdmFsdWU7IH1cbiAgICogICAgIH1cbiAgICogICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbXktZWxlbWVudCcsIE15RWxlbWVudCk7XG4gICAqXG4gICAqIElmIHNvbWVvbmUgdGhlbiBpbnN0YW50aWF0ZXMgeW91ciBjb21wb25lbnQgaW4gSFRNTDpcbiAgICpcbiAgICogICAgIDxteS1lbGVtZW50IGZvby1iYXI9XCJIZWxsb1wiPjwvbXktZWxlbWVudD5cbiAgICpcbiAgICogVGhlbiwgYWZ0ZXIgdGhlIGVsZW1lbnQgaGFzIGJlZW4gdXBncmFkZWQsIHRoZSBgZm9vQmFyYCBzZXR0ZXIgd2lsbFxuICAgKiBhdXRvbWF0aWNhbGx5IGJlIGludm9rZWQgd2l0aCB0aGUgaW5pdGlhbCB2YWx1ZSBcIkhlbGxvXCIuXG4gICAqXG4gICAqIEZvciB0aGUgdGltZSBiZWluZywgdGhpcyBtaXhpbiBvbmx5IHN1cHBvcnRzIHN0cmluZy12YWx1ZWQgcHJvcGVydGllcy5cbiAgICogSWYgeW91J2QgbGlrZSB0byBjb252ZXJ0IHN0cmluZyBhdHRyaWJ1dGVzIHRvIG90aGVyIHR5cGVzIChudW1iZXJzLFxuICAgKiBib29sZWFucyksIHlvdSBuZWVkIHRvIGltcGxlbWVudCBgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrYCB5b3Vyc2VsZi5cbiAgICovXG4gIGNsYXNzIEF0dHJpYnV0ZU1hcnNoYWxsaW5nIGV4dGVuZHMgYmFzZSB7XG5cbiAgICAvKlxuICAgICAqIEhhbmRsZSBhIGNoYW5nZSB0byB0aGUgYXR0cmlidXRlIHdpdGggdGhlIGdpdmVuIG5hbWUuXG4gICAgICovXG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKGF0dHJpYnV0ZU5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xuICAgICAgaWYgKHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjaykgeyBzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soKTsgfVxuICAgICAgbGV0IHByb3BlcnR5TmFtZSA9IGF0dHJpYnV0ZVRvUHJvcGVydHlOYW1lKGF0dHJpYnV0ZU5hbWUpO1xuICAgICAgLy8gSWYgdGhlIGF0dHJpYnV0ZSBuYW1lIGNvcnJlc3BvbmRzIHRvIGEgcHJvcGVydHkgbmFtZSwgc2V0IHRoZSBwcm9wZXJ0eS5cbiAgICAgIC8vIElnbm9yZSBzdGFuZGFyZCBIVE1MRWxlbWVudCBwcm9wZXJ0aWVzIGhhbmRsZWQgYnkgdGhlIERPTS5cbiAgICAgIGlmIChwcm9wZXJ0eU5hbWUgaW4gdGhpcyAmJiAhKHByb3BlcnR5TmFtZSBpbiBIVE1MRWxlbWVudC5wcm90b3R5cGUpKSB7XG4gICAgICAgIHRoaXNbcHJvcGVydHlOYW1lXSA9IG5ld1ZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xuICAgICAgcmV0dXJuIGF0dHJpYnV0ZXNGb3JDbGFzcyh0aGlzKTtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBBdHRyaWJ1dGVNYXJzaGFsbGluZztcbn07XG5cblxuLy8gQ29udmVydCBoeXBoZW5hdGVkIGZvby1iYXIgYXR0cmlidXRlIG5hbWUgdG8gY2FtZWwgY2FzZSBmb29CYXIgcHJvcGVydHkgbmFtZS5cbmZ1bmN0aW9uIGF0dHJpYnV0ZVRvUHJvcGVydHlOYW1lKGF0dHJpYnV0ZU5hbWUpIHtcbiAgbGV0IHByb3BlcnR5TmFtZSA9IGF0dHJpYnV0ZVRvUHJvcGVydHlOYW1lc1thdHRyaWJ1dGVOYW1lXTtcbiAgaWYgKCFwcm9wZXJ0eU5hbWUpIHtcbiAgICAvLyBDb252ZXJ0IGFuZCBtZW1vaXplLlxuICAgIGxldCBoeXBlblJlZ0V4ID0gLy0oW2Etel0pL2c7XG4gICAgcHJvcGVydHlOYW1lID0gYXR0cmlidXRlTmFtZS5yZXBsYWNlKGh5cGVuUmVnRXgsXG4gICAgICAgIG1hdGNoID0+IG1hdGNoWzFdLnRvVXBwZXJDYXNlKCkpO1xuICAgIGF0dHJpYnV0ZVRvUHJvcGVydHlOYW1lc1thdHRyaWJ1dGVOYW1lXSA9IHByb3BlcnR5TmFtZTtcbiAgfVxuICByZXR1cm4gcHJvcGVydHlOYW1lO1xufVxuXG5mdW5jdGlvbiBhdHRyaWJ1dGVzRm9yQ2xhc3MoY2xhc3NGbikge1xuXG4gIC8vIFdlIHRyZWF0IHRoZSBlbGVtZW50IGJhc2UgY2xhc3NlcyBhcyBpZiB0aGV5IGhhdmUgbm8gYXR0cmlidXRlcywgc2luY2Ugd2VcbiAgLy8gZG9uJ3Qgd2FudCB0byByZWNlaXZlIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayBmb3IgdGhlbS5cbiAgaWYgKGNsYXNzRm4gPT09IEhUTUxFbGVtZW50IHx8IGNsYXNzRm4gPT09IE9iamVjdCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIC8vIEdldCBhdHRyaWJ1dGVzIGZvciBwYXJlbnQgY2xhc3MuXG4gIGxldCBiYXNlQ2xhc3MgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoY2xhc3NGbi5wcm90b3R5cGUpLmNvbnN0cnVjdG9yO1xuICBsZXQgYmFzZUF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzRm9yQ2xhc3MoYmFzZUNsYXNzKTtcblxuICAvLyBHZXQgYXR0cmlidXRlcyBmb3IgdGhpcyBjbGFzcy5cbiAgbGV0IHByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhjbGFzc0ZuLnByb3RvdHlwZSk7XG4gIGxldCBzZXR0ZXJOYW1lcyA9IHByb3BlcnR5TmFtZXMuZmlsdGVyKHByb3BlcnR5TmFtZSA9PlxuICAgIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKFxuICAgICAgICBjbGFzc0ZuLnByb3RvdHlwZSwgcHJvcGVydHlOYW1lKS5zZXQgPT09ICdmdW5jdGlvbicpO1xuICBsZXQgYXR0cmlidXRlcyA9IHNldHRlck5hbWVzLm1hcChzZXR0ZXJOYW1lID0+XG4gICAgICBwcm9wZXJ0eU5hbWVUb0F0dHJpYnV0ZShzZXR0ZXJOYW1lKSk7XG5cbiAgLy8gTWVyZ2UuXG4gIGxldCBkaWZmID0gYXR0cmlidXRlcy5maWx0ZXIoYXR0cmlidXRlID0+XG4gICAgICBiYXNlQXR0cmlidXRlcy5pbmRleE9mKGF0dHJpYnV0ZSkgPCAwKTtcbiAgcmV0dXJuIGJhc2VBdHRyaWJ1dGVzLmNvbmNhdChkaWZmKTtcbn1cblxuLy8gQ29udmVydCBhIGNhbWVsIGNhc2UgZm9vQmFyIHByb3BlcnR5IG5hbWUgdG8gYSBoeXBoZW5hdGVkIGZvby1iYXIgYXR0cmlidXRlLlxuZnVuY3Rpb24gcHJvcGVydHlOYW1lVG9BdHRyaWJ1dGUocHJvcGVydHlOYW1lKSB7XG4gIGxldCBhdHRyaWJ1dGUgPSBwcm9wZXJ0eU5hbWVzVG9BdHRyaWJ1dGVzW3Byb3BlcnR5TmFtZV07XG4gIGlmICghYXR0cmlidXRlKSB7XG4gICAgLy8gQ29udmVydCBhbmQgbWVtb2l6ZS5cbiAgICBsZXQgdXBwZXJjYXNlUmVnRXggPSAvKFtBLVpdKS9nO1xuICAgIGF0dHJpYnV0ZSA9IHByb3BlcnR5TmFtZS5yZXBsYWNlKHVwcGVyY2FzZVJlZ0V4LCAnLSQxJykudG9Mb3dlckNhc2UoKTtcbiAgfVxuICByZXR1cm4gYXR0cmlidXRlO1xufVxuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBDbGlja1NlbGVjdGlvbi4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIG1hcHMgYSBjbGljayAoYWN0dWFsbHksIGEgbW91c2Vkb3duKSB0byBhIHNlbGVjdGlvbi5cbiAgICpcbiAgICogVGhpcyBzaW1wbGUgbWl4aW4gaXMgdXNlZnVsIGluIGxpc3QgYm94LWxpa2UgZWxlbWVudHMsIHdoZXJlIGEgY2xpY2sgb24gYVxuICAgKiBsaXN0IGl0ZW0gaW1wbGljaXRseSBzZWxlY3RzIGl0LlxuICAgKlxuICAgKiBUaGlzIG1peGluIGV4cGVjdHMgdGhlIGNvbXBvbmVudCB0byBwcm92aWRlIGFuIGBpdGVtc2AgcHJvcGVydHkuIFlvdSBjYW5cbiAgICogcHJvdmlkZSB0aGF0IHByb3BlcnR5IHlvdXJzZWxmLCBvciB1c2UgdGhlXG4gICAqIFtDb250ZW50QXNJdGVtc10oQ29udGVudEFzSXRlbXMubWQpIG1peGluLiBUaGlzIG1peGluIGFsc28gZXhwZWN0cyB0aGVcbiAgICogY29tcG9uZW50IHRvIGRlZmluZSBhIGBzZWxlY3RlZEluZGV4YCBwcm9wZXJ0eS4gWW91IGNhbiBwcm92aWRlIHRoYXRcbiAgICogeW91cnNlbGYsIG9yIHVzZSB0aGUgW1NpbmdsZVNlbGVjdGlvbl0oU2luZ2xlU2VsZWN0aW9uLm1kKSBtaXhpbi5cbiAgICovXG4gIGNsYXNzIENsaWNrU2VsZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICAvKlxuICAgICAgICogUkVWSUVXOiBXaGljaCBldmVudCBzaG91bGQgd2UgbGlzdGVuIHRvIGhlcmU/XG4gICAgICAgKlxuICAgICAgICogVGhlIHN0YW5kYXJkIHVzZSBmb3IgdGhpcyBtaXhpbiBpcyBpbiBsaXN0IGJveGVzLiBMaXN0IGJveGVzIGRvbid0XG4gICAgICAgKiBhcHBlYXIgdG8gYmUgY29uc2lzdGVudCB3aXRoIHJlZ2FyZCB0byB3aGV0aGVyIHRoZXkgc2VsZWN0IG9uIG1vdXNlZG93blxuICAgICAgICogb3IgY2xpY2svbW91c2V1cC5cbiAgICAgICAqL1xuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBldmVudCA9PiB7XG4gICAgICAgIHNlbGVjdFRhcmdldCh0aGlzLCBldmVudC50YXJnZXQpO1xuICAgICAgICAvLyBOb3RlOiBXZSBkb24ndCBjYWxsIHByZXZlbnREZWZhdWx0IGhlcmUuIFRoZSBkZWZhdWx0IGJlaGF2aW9yIGZvclxuICAgICAgICAvLyBtb3VzZWRvd24gaW5jbHVkZXMgc2V0dGluZyBrZXlib2FyZCBmb2N1cyBpZiB0aGUgZWxlbWVudCBkb2Vzbid0XG4gICAgICAgIC8vIGFscmVhZHkgaGF2ZSB0aGUgZm9jdXMsIGFuZCB3ZSB3YW50IHRvIHByZXNlcnZlIHRoYXQgYmVoYXZpb3IuXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCBpbXBsZW1lbnRhdGlvbi4gVGhpcyB3aWxsIHR5cGljYWxseSBiZSBoYW5kbGVkIGJ5IG90aGVyIG1peGlucy5cbiAgICBnZXQgc2VsZWN0ZWRJbmRleCgpIHtcbiAgICAgIHJldHVybiBzdXBlci5zZWxlY3RlZEluZGV4O1xuICAgIH1cbiAgICBzZXQgc2VsZWN0ZWRJbmRleChpbmRleCkge1xuICAgICAgaWYgKCdzZWxlY3RlZEluZGV4JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEluZGV4ID0gaW5kZXg7IH1cbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBDbGlja1NlbGVjdGlvbjtcbn07XG5cblxuLy8gVE9ETzogSGFuZGxlIHRoZSBjYXNlIHdoZXJlIGEgbGlzdCBpdGVtIGhhcyBzdWJlbGVtZW50cy4gV2FsayB1cCB0aGUgRE9NXG4vLyBoaWVyYXJjaHkgdW50aWwgd2UgZmluZCBhbiBpdGVtIGluIHRoZSBsaXN0LCBvciBjb21lIGJhY2sgdG8gdGhpcyBlbGVtZW50LFxuLy8gaW4gd2hpY2ggY2FzZSB0aGUgZWxlbWVudCB0aGF0IHdhcyB0YXBwZWQgaXNuJ3QgYW4gaXRlbSAoYW5kIHNob3VsZCBiZVxuLy8gaWdub3JlZCkuXG5mdW5jdGlvbiBzZWxlY3RUYXJnZXQoZWxlbWVudCwgdGFyZ2V0KSB7XG4gIGxldCBpbmRleCA9IGVsZW1lbnQuaXRlbXMgJiYgZWxlbWVudC5pdGVtcy5pbmRleE9mKHRhcmdldCk7XG4gIGlmIChpbmRleCA+PSAwKSB7XG4gICAgZWxlbWVudC5zZWxlY3RlZEluZGV4ID0gaW5kZXg7XG4gIH1cbn1cbiIsIi8qKlxuICogQSBncm91cCBvZiBlbGVtZW50cyB0aGF0IGhhdmUgYmVlbiBhc3NvY2lhdGVkIGZvciB0aGUgcHVycG9zZSBvZlxuICogYWNjb21wbGlzaGluZyBzb21lIGNvbGxlY3RpdmUgYmVoYXZpb3IsIGUuZy4sIGtleWJvYXJkIGhhbmRsaW5nLlxuICpcbiAqIFRoZXJlIGFyZSBjZXJ0YWluIGNvbXBvbmVudHMgdGhhdCB3YW50IHRvIGNvb3BlcmF0aXZlbHkgaGFuZGxlIHRoZSBrZXlib2FyZC5cbiAqIEZvciBleGFtcGxlLCB0aGUgYmFzaWMtYXJyb3ctc2VsZWN0aW9uIGFuZCBiYXNpYy1wYWdlLWRvdHMgY29tcG9uZW50cyBhcmVcbiAqIG9wdGlvbmFsIGNvbXBvbmVudHMgdGhhdCBjYW4gYXVnbWVudCB0aGUgYXBwZWFyYW5jZSBhbmQgYmVoYXZpb3Igb2YgYW4gaW5uZXJcbiAqIGJhc2ljLWNhcm91c2VsLCBhZGRpbmcgYXJyb3cgYnV0dG9ucyBhbmQgZG90IGJ1dHRvbnMsIHJlc3BlY3RpdmVseS4gV2hlblxuICogdGhlc2UgY29tcG9uZW50cyBhcmUgbmVzdGVkIHRvZ2V0aGVyLCB0aGV5IGZvcm0gYW4gaW1wbGljaXQgdW5pdCBjYWxsZWQgYVxuICogKmNvbGxlY3RpdmUqOlxuICpcbiAqICAgICA8YmFzaWMtYXJyb3ctc2VsZWN0aW9uPlxuICogICAgICAgPGJhc2ljLXBhZ2UtZG90cz5cbiAqICAgICAgICAgPGJhc2ljLWNhcm91c2VsPlxuICogICAgICAgICAgIC4uLiBpbWFnZXMsIGV0Yy4gLi4uXG4gKiAgICAgICAgIDwvYmFzaWMtY2Fyb3VzZWw+XG4gKiAgICAgICA8L2Jhc2ljLXBhZ2UtZG90cz5cbiAqICAgICA8L2Jhc2ljLWFycm93LXNlbGVjdGlvbj5cbiAqXG4gKiBJbiB0aGlzIGNvbmZpZ3VyYXRpb24sIHRoZSB0aHJlZSBjb21wb25lbnRzIHdpbGwgYWxsIGhhdmUgYSBgdGhpcy5jb2xsZWN0aXZlYFxuICogcmVmZXJlbmNlIHRoYXQgcmVmZXJzIHRvIGEgc2hhcmVkIGluc3RhbmNlIG9mIHRoZSBgQ29sbGVjdGl2ZWAgY2xhc3MuXG4gKlxuICogVGhlIFtLZXlib2FyZF0oS2V5Ym9hcmQubWQpIG1peGluIHRoZXkgdXNlIGlzIHNlbnNpdGl2ZSB0byB0aGUgcHJlc2VuY2Ugb2ZcbiAqIHRoZSBjb2xsZWN0aXZlLiBBbW9uZyBvdGhlciB0aGluZ3MsIGl0IHdpbGwgZW5zdXJlIHRoYXQgb25seSB0aGUgb3V0ZXJtb3N0XG4gKiBlbGVtZW50IGFib3ZlIOKAlMKgdGhlIGJhc2ljLWFycm93LXNlbGVjdGlvbiDigJTCoHdpbGwgYmUgYSB0YWIgc3RvcCB0aGF0IGNhblxuICogcmVjZWl2ZSB0aGUga2V5Ym9hcmQgZm9jdXMuIFRoaXMgbGV0cyB0aGUgdXNlciBwZXJjZWl2ZSB0aGUgY29tcG9uZW50XG4gKiBhcnJhbmdlbWVudCBhYm92ZSBhcyBhIHNpbmdsZSB1bml0LiBUaGUgS2V5Ym9hcmQgbWl4aW4gd2lsbCBhbHNvIGdpdmUgZWFjaFxuICogZWxlbWVudCBpbiB0aGUgY29sbGVjdGl2ZSBhIGNoYW5jZSB0byBwcm9jZXNzIGFueSBrZXlib2FyZCBldmVudHMuIFNvLCBldmVuXG4gKiB0aG91Z2ggdGhlIGJhc2ljLWFycm93LXNlbGVjdGlvbiBlbGVtZW50IHdpbGwgaGF2ZSB0aGUgZm9jdXMsIHRoZSBzdGFuZGFyZFxuICoga2V5Ym9hcmQgbmF2aWdhdGlvbiBwcm92aWRlZCBieSBiYXNpYy1jYXJvdXNlbCB3aWxsIGNvbnRpbnVlIHRvIHdvcmsuXG4gKlxuICogVGhlIFtTZWxlY3Rpb25BcmlhQWN0aXZlXShTZWxlY3Rpb25BcmlhQWN0aXZlLm1kKSBtaXhpbiBhbHNvIHJlc3BlY3RzXG4gKiBjb2xsZWN0aXZlcyB3aGVuIHVzaW5nIHRoZSBgYXJpYS1hY3RpdmVkZXNjZW5kYW50YCBhbmQgYHJvbGVgIGF0dHJpYnV0ZXMuXG4gKiBUaG9zZSB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIG91dGVybW9zdCBlbGVtZW50IChiYXNpYy1hcnJvdy1zZWxlY3Rpb24sIGFib3ZlKVxuICogc28gdGhhdCBBUklBIGNhbiBjb3JyZWN0bHkgdW5kZXJzdGFuZCB0aGUgYXJyYW5nZW1lbnQgb2YgdGhlIGVsZW1lbnRzLlxuICpcbiAqIFlvdSBjYW4gcHV0IGVsZW1lbnRzIGludG8gY29sbGVjdGl2ZXMgeW91cnNlbGYsIG9yIHlvdSBjYW4gdXNlIHRoZVxuICogW1RhcmdldEluQ29sbGVjdGl2ZV0oVGFyZ2V0SW5Db2xsZWN0aXZlLm1kKSBtaXhpbi5cbiAqL1xuY2xhc3MgQ29sbGVjdGl2ZSB7XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGNvbGxlY3RpdmUuXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVMZW1lbnRbXX0gW2VsZW1lbnRzXSAtIEluaXRpYWwgZWxlbWVudHMgdG8gYWRkLlxuICAgKi9cbiAgY29uc3RydWN0b3IoLi4uZWxlbWVudHMpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgZWxlbWVudHMgaW4gdGhlIGNvbGxlY3RpdmUuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnRbXX1cbiAgICAgKi9cbiAgICB0aGlzLmVsZW1lbnRzID0gW107XG4gICAgZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHRoaXMuYXNzaW1pbGF0ZShlbGVtZW50KSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIHRoZSBpbmRpY2F0ZWQgdGFyZ2V0IHRvIHRoZSBjb2xsZWN0aXZlLlxuICAgKlxuICAgKiBCeSBjb252ZW50aW9uLCBpZiB0d28gZWxlbWVudHMgd2FudHMgdG8gcGFydGljaXBhdGUgaW4gYSBjb2xsZWN0aXZlLCBhbmRcbiAgICogb25lIGVsZW1lbnQgaXMgYW4gYW5jZXN0b3Igb2YgdGhlIG90aGVyIGluIHRoZSBET00sIHRoZSBhbmNlc3RvciBzaG91bGRcbiAgICogYXNzaW1pbGF0ZSB0aGUgZGVzY2VuZGFudCBpbnN0ZWFkIG9mIHRoZSBvdGhlciB3YXkgYXJvdW5kLlxuICAgKlxuICAgKiBBZnRlciBhc3NpbWlsYXRpb24sIGFueSBlbGVtZW50IGluIHRoZSBjb2xsZWN0aXZlIHRoYXQgZGVmaW5lcyBhXG4gICAqIGBjb2xsZWN0aXZlQ2hhbmdlZGAgbWV0aG9kIHdpbGwgaGF2ZSB0aGF0IG1ldGhvZCBpbnZva2VkLiBUaGlzIGFsbG93c1xuICAgKiB0aGUgY29sbGVjdGl2ZSdzIGVsZW1lbnRzIHRvIHJlc3BvbmQgdG8gY2hhbmdlcyBpbiB0aGUgY29sbGVjdGl2ZS5cbiAgICpcbiAgICogQHBhcmFtIHsoSFRNTEVsZW1lbnR8Q29sbGVjdGl2ZSl9IHRhcmdldCAtIFRoZSBlbGVtZW50IG9yIGNvbGxlY3RpdmUgdG8gYWRkLlxuICAgKi9cbiAgYXNzaW1pbGF0ZSh0YXJnZXQpIHtcbiAgICBsZXQgY29sbGVjdGl2ZUNoYW5nZWQ7XG4gICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIENvbGxlY3RpdmUpIHtcbiAgICAgIGNvbGxlY3RpdmVDaGFuZ2VkID0gYXNzaW1pbGF0ZUNvbGxlY3RpdmUodGhpcywgdGFyZ2V0KTtcbiAgICB9IGVsc2UgaWYgKHRhcmdldC5jb2xsZWN0aXZlKSB7XG4gICAgICAvLyBUYXJnZXQgaXMgYWxyZWFkeSBwYXJ0IG9mIGEgY29sbGVjdGl2ZSwgYXNzaW1pbGF0ZSBpdC5cbiAgICAgIGNvbGxlY3RpdmVDaGFuZ2VkID0gYXNzaW1pbGF0ZUNvbGxlY3RpdmUodGhpcywgdGFyZ2V0LmNvbGxlY3RpdmUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBBc3NpbWlsYXRlIGFuIGluZGl2aWR1YWwgZWxlbWVudC5cbiAgICAgIGNvbGxlY3RpdmVDaGFuZ2VkID0gYXNzaW1pbGF0ZUVsZW1lbnQodGhpcywgdGFyZ2V0KTtcbiAgICB9XG5cbiAgICBpZiAoY29sbGVjdGl2ZUNoYW5nZWQpIHtcbiAgICAgIHRoaXMuaW52b2tlTWV0aG9kKCdjb2xsZWN0aXZlQ2hhbmdlZCcpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJbnZva2UgYSBtZXRob2Qgb24gYWxsIGVsZW1lbnRzIGluIHRoZSBjb2xsZWN0aXZlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kIC0gVGhlIG5hbWUgb2YgdGhlIG1ldGhvZCB0byBpbnZva2Ugb24gYWxsIGVsZW1lbnRzLlxuICAgKiBAcGFyYW0ge29iamVjdFtdfSBbYXJnc10gLSBUaGUgYXJndW1lbnRzIHRvIHRoZSBtZXRob2RcbiAgICovXG4gIGludm9rZU1ldGhvZChtZXRob2QsIC4uLmFyZ3MpIHtcbiAgICAvLyBJbnZva2UgZnJvbSBpbm5lcm1vc3QgdG8gb3V0ZXJtb3N0LlxuICAgIGxldCBlbGVtZW50cyA9IHRoaXMuZWxlbWVudHM7XG4gICAgZm9yIChsZXQgaSA9IGVsZW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xuICAgICAgaWYgKGVsZW1lbnRbbWV0aG9kXSkge1xuICAgICAgICBlbGVtZW50W21ldGhvZF0uYXBwbHkoZWxlbWVudCwgYXJncyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBvdXRlcm1vc3QgZWxlbWVudCBpbiB0aGUgY29sbGVjdGl2ZS5cbiAgICogQnkgY29udmVudGlvbiwgdGhpcyBpcyB0aGUgZmlyc3QgZWxlbWVudCBpbiB0aGUgYGVsZW1lbnRzYCBhcnJheS5cbiAgICovXG4gIGdldCBvdXRlcm1vc3RFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRzWzBdO1xuICB9XG5cbn1cblxuXG4vLyBUaGUgZmlyc3QgY29sbGVjdGl2ZSBhc3NpbWlsYXRlcyB0aGUgc2Vjb25kLlxuZnVuY3Rpb24gYXNzaW1pbGF0ZUNvbGxlY3RpdmUoY29sbGVjdGl2ZTEsIGNvbGxlY3RpdmUyKSB7XG4gIGlmIChjb2xsZWN0aXZlMSA9PT0gY29sbGVjdGl2ZTIpIHtcbiAgICAvLyBDb2xsZWN0aXZlcyBhcmUgc2FtZTsgaWdub3JlLlxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGxldCBlbGVtZW50cyA9IGNvbGxlY3RpdmUyLmVsZW1lbnRzO1xuXG4gIC8vIE9sZCBjb2xsZWN0aXZlIHdpbGwgbm8gbG9uZ2VyIGhhdmUgYW55IGVsZW1lbnRzIG9mIGl0cyBvd24uXG4gIGNvbGxlY3RpdmUyLmVsZW1lbnRzID0gW107XG5cbiAgZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICBhc3NpbWlsYXRlRWxlbWVudChjb2xsZWN0aXZlMSwgZWxlbWVudCk7XG4gIH0pO1xuXG4gIHJldHVybiB0cnVlO1xufVxuXG5cbi8vIEFzc2ltaWxhdGUgdGhlIGluZGljYXRlZCBlbGVtZW50LlxuZnVuY3Rpb24gYXNzaW1pbGF0ZUVsZW1lbnQoY29sbGVjdGl2ZSwgZWxlbWVudCkge1xuICBpZiAoZWxlbWVudC5jb2xsZWN0aXZlID09PSBjb2xsZWN0aXZlKSB7XG4gICAgLy8gQWxyZWFkeSBwYXJ0IG9mIHRoaXMgY29sbGVjdGl2ZS5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgZWxlbWVudC5jb2xsZWN0aXZlID0gY29sbGVjdGl2ZTtcbiAgY29sbGVjdGl2ZS5lbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBDb2xsZWN0aXZlO1xuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBDb21wb3NhYmxlLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gdG8gbWFrZSBhIGNsYXNzIG1vcmUgZWFzaWx5IGNvbXBvc2FibGUgd2l0aCBvdGhlciBtaXhpbnMuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gY29udHJpYnV0ZXMgYSBgY29tcG9zZWAgbWV0aG9kIHRoYXQgYXBwbGllcyBhIHNldCBvZiBtaXhpblxuICAgKiBmdW5jdGlvbnMgYW5kIHJldHVybnMgdGhlIHJlc3VsdGluZyBuZXcgY2xhc3MuIFRoaXMgc3VnYXIgY2FuIG1ha2UgdGhlXG4gICAqIGFwcGxpY2F0aW9uIG9mIG1hbnkgbWl4aW5zIGF0IG9uY2UgZWFzaWVyIHRvIHJlYWQuXG4gICAqL1xuICBjbGFzcyBDb21wb3NhYmxlIGV4dGVuZHMgYmFzZSB7XG5cbiAgICAvKipcbiAgICAgKiBBcHBseSBhIHNldCBvZiBtaXhpbiBmdW5jdGlvbnMgb3IgbWl4aW4gb2JqZWN0cyB0byB0aGUgcHJlc2VudCBjbGFzcyBhbmRcbiAgICAgKiByZXR1cm4gdGhlIG5ldyBjbGFzcy5cbiAgICAgKlxuICAgICAqIEluc3RlYWQgb2Ygd3JpdGluZzpcbiAgICAgKlxuICAgICAqICAgICBsZXQgTXlDbGFzcyA9IE1peGluMShNaXhpbjIoTWl4aW4zKE1peGluNChNaXhpbjUoQmFzZUNsYXNzKSkpKSk7XG4gICAgICpcbiAgICAgKiBZb3UgY2FuIHdyaXRlOlxuICAgICAqXG4gICAgICogICAgIGxldCBNeUNsYXNzID0gQ29tcG9zYWJsZShCYXNlQ2xhc3MpLmNvbXBvc2UoXG4gICAgICogICAgICAgTWl4aW4xLFxuICAgICAqICAgICAgIE1peGluMixcbiAgICAgKiAgICAgICBNaXhpbjMsXG4gICAgICogICAgICAgTWl4aW40LFxuICAgICAqICAgICAgIE1peGluNVxuICAgICAqICAgICApO1xuICAgICAqXG4gICAgICogVGhpcyBmdW5jdGlvbiBjYW4gYWxzbyB0YWtlIG1peGluIG9iamVjdHMuIEEgbWl4aW4gb2JqZWN0IGlzIGp1c3QgYVxuICAgICAqIHNob3J0aGFuZCBmb3IgYSBtaXhpbiBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYSBuZXcgc3ViY2xhc3Mgd2l0aCB0aGUgZ2l2ZW5cbiAgICAgKiBtZW1iZXJzLiBUaGUgbWl4aW4gb2JqZWN0J3MgbWVtYmVycyBhcmUgKm5vdCogY29waWVkIGRpcmVjdGx5IG9udG8gdGhlXG4gICAgICogcHJvdG90eXBlIG9mIHRoZSBiYXNlIGNsYXNzLCBhcyB3aXRoIHRyYWRpdGlvbmFsIG1peGlucy5cbiAgICAgKlxuICAgICAqIEluIGFkZGl0aW9uIHRvIHByb3ZpZGluZyBzeW50YWN0aWMgc3VnYXIsIHRoaXMgbWl4aW4gY2FuIGJlIHVzZWQgdG9cbiAgICAgKiBkZWZpbmUgYSBjbGFzcyBpbiBFUzUsIHdoaWNoIGxhY2tzIEVTNidzIGBjbGFzc2Aga2V5d29yZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Li4ubWl4aW5zfSBtaXhpbnMgLSBBIHNldCBvZiBtaXhpbiBmdW5jdGlvbnMgb3Igb2JqZWN0cyB0byBhcHBseS5cbiAgICAgKi9cbiAgICBzdGF0aWMgY29tcG9zZSguLi5taXhpbnMpIHtcbiAgICAgIC8vIFdlIGNyZWF0ZSBhIG5ldyBzdWJjbGFzcyBmb3IgZWFjaCBtaXhpbiBpbiB0dXJuLiBUaGUgcmVzdWx0IGJlY29tZXNcbiAgICAgIC8vIHRoZSBiYXNlIGNsYXNzIGV4dGVuZGVkIGJ5IGFueSBzdWJzZXF1ZW50IG1peGlucy4gSXQgdHVybnMgb3V0IHRoYXRcbiAgICAgIC8vIHdlIGNhbiB1c2UgQXJyYXkucmVkdWNlKCkgdG8gY29uY2lzZWx5IGV4cHJlc3MgdGhpcywgdXNpbmcgdGhlIGN1cnJlbnRcbiAgICAgIC8vIG9iamVjdCBhcyB0aGUgc2VlZCBmb3IgcmVkdWNlKCkuXG4gICAgICByZXR1cm4gbWl4aW5zLnJlZHVjZShjb21wb3NlQ2xhc3MsIHRoaXMpO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIENvbXBvc2FibGU7XG59O1xuXG5cbi8vIFByb3BlcnRpZXMgZGVmaW5lZCBieSBPYmplY3QgdGhhdCB3ZSBkb24ndCB3YW50IHRvIG1peGluLlxuY29uc3QgTk9OX01JWEFCTEVfT0JKRUNUX1BST1BFUlRJRVMgPSBbXG4gICdjb25zdHJ1Y3Rvcidcbl07XG5cbi8qXG4gKiBBcHBseSB0aGUgbWl4aW4gdG8gdGhlIGdpdmVuIGJhc2UgY2xhc3MgdG8gcmV0dXJuIGEgbmV3IGNsYXNzLlxuICogVGhlIG1peGluIGNhbiBlaXRoZXIgYmUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIG1vZGlmaWVkIGNsYXNzLCBvciBhXG4gKiBwbGFpbiBvYmplY3Qgd2hvc2UgbWVtYmVycyB3aWxsIGJlIGNvcGllZCB0byB0aGUgbmV3IGNsYXNzJyBwcm90b3R5cGUuXG4gKi9cbmZ1bmN0aW9uIGNvbXBvc2VDbGFzcyhiYXNlLCBtaXhpbikge1xuICBpZiAodHlwZW9mIG1peGluID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gTWl4aW4gZnVuY3Rpb25cbiAgICByZXR1cm4gbWl4aW4oYmFzZSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gTWl4aW4gb2JqZWN0XG4gICAgY2xhc3MgU3ViY2xhc3MgZXh0ZW5kcyBiYXNlIHt9XG4gICAgY29weU93blByb3BlcnRpZXMobWl4aW4sIFN1YmNsYXNzLnByb3RvdHlwZSwgTk9OX01JWEFCTEVfT0JKRUNUX1BST1BFUlRJRVMpO1xuICAgIHJldHVybiBTdWJjbGFzcztcbiAgfVxufVxuXG5cbi8qXG4gKiBDb3B5IHRoZSBnaXZlbiBwcm9wZXJ0aWVzL21ldGhvZHMgdG8gdGhlIHRhcmdldC5cbiAqIFJldHVybiB0aGUgdXBkYXRlZCB0YXJnZXQuXG4gKi9cbmZ1bmN0aW9uIGNvcHlPd25Qcm9wZXJ0aWVzKHNvdXJjZSwgdGFyZ2V0LCBpZ25vcmVQcm9wZXJ0eU5hbWVzID0gW10pIHtcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoc291cmNlKS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgIGlmIChpZ25vcmVQcm9wZXJ0eU5hbWVzLmluZGV4T2YobmFtZSkgPCAwKSB7XG4gICAgICBsZXQgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBuYW1lKTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB0YXJnZXQ7XG59XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4vY3JlYXRlU3ltYm9sJztcbmltcG9ydCB0b2dnbGVDbGFzcyBmcm9tICcuL3RvZ2dsZUNsYXNzJztcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3QgaXRlbXNTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2l0ZW1zJyk7XG5jb25zdCBpdGVtSW5pdGlhbGl6ZWRTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2l0ZW1Jbml0aWFsaXplZCcpO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggQ29udGVudEFzSXRlbXMuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBtYXBzIGNvbnRlbnQgc2VtYW50aWNzIChlbGVtZW50cykgdG8gbGlzdCBpdGVtIHNlbWFudGljcy5cbiAgICpcbiAgICogSXRlbXMgZGlmZmVyIGZyb20gZWxlbWVudCBjb250ZW50cyBpbiBzZXZlcmFsIHdheXM6XG4gICAqXG4gICAqICogVGhleSBhcmUgb2Z0ZW4gcmVmZXJlbmNlZCB2aWEgaW5kZXguXG4gICAqICogVGhleSBtYXkgaGF2ZSBhIHNlbGVjdGlvbiBzdGF0ZS5cbiAgICogKiBJdCdzIGNvbW1vbiB0byBkbyB3b3JrIHRvIGluaXRpYWxpemUgdGhlIGFwcGVhcmFuY2Ugb3Igc3RhdGUgb2YgYSBuZXdcbiAgICogICBpdGVtLlxuICAgKiAqIEF1eGlsaWFyeSBpbnZpc2libGUgY2hpbGQgZWxlbWVudHMgYXJlIGZpbHRlcmVkIG91dCBhbmQgbm90IGNvdW50ZWQgYXNcbiAgICogICBpdGVtcy4gQXV4aWxpYXJ5IGVsZW1lbnRzIGluY2x1ZGUgbGluaywgc2NyaXB0LCBzdHlsZSwgYW5kIHRlbXBsYXRlXG4gICAqICAgZWxlbWVudHMuIFRoaXMgZmlsdGVyaW5nIGVuc3VyZXMgdGhhdCB0aG9zZSBhdXhpbGlhcnkgZWxlbWVudHMgY2FuIGJlXG4gICAqICAgdXNlZCBpbiBtYXJrdXAgaW5zaWRlIG9mIGEgbGlzdCB3aXRob3V0IGJlaW5nIHRyZWF0ZWQgYXMgbGlzdCBpdGVtcy5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIGEgY29tcG9uZW50IHRvIHByb3ZpZGUgYSBgY29udGVudGAgcHJvcGVydHkgcmV0dXJuaW5nIGFcbiAgICogcmF3IHNldCBvZiBlbGVtZW50cy4gWW91IGNhbiBwcm92aWRlIHRoYXQgeW91cnNlbGYsIG9yIHVzZSB0aGVcbiAgICogW0Rpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnRdKERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQubWQpIG1peGluLlxuICAgKlxuICAgKiBUaGUgbW9zdCBjb21tb25seSByZWZlcmVuY2VkIHByb3BlcnR5IGRlZmluZWQgYnkgdGhpcyBtaXhpbiBpcyB0aGUgYGl0ZW1zYFxuICAgKiBwcm9wZXJ0eS4gVG8gYXZvaWQgaGF2aW5nIHRvIGRvIHdvcmsgZWFjaCB0aW1lIHRoYXQgcHJvcGVydHkgaXMgcmVxdWVzdGVkLFxuICAgKiB0aGlzIG1peGluIHN1cHBvcnRzIGFuIG9wdGltaXplZCBtb2RlLiBJZiB5b3UgaW52b2tlIHRoZSBgY29udGVudENoYW5nZWRgXG4gICAqIG1ldGhvZCB3aGVuIHRoZSBzZXQgb2YgaXRlbXMgY2hhbmdlcywgdGhlIG1peGluIGNvbmNsdWRlcyB0aGF0IHlvdSdsbCB0YWtlXG4gICAqIGNhcmUgb2Ygbm90aWZ5aW5nIGl0IG9mIGZ1dHVyZSBjaGFuZ2VzLCBhbmQgdHVybnMgb24gdGhlIG9wdGltaXphdGlvbi4gV2l0aFxuICAgKiB0aGF0IG9uLCB0aGUgbWl4aW4gc2F2ZXMgYSByZWZlcmVuY2UgdG8gdGhlIGNvbXB1dGVkIHNldCBvZiBpdGVtcywgYW5kIHdpbGxcbiAgICogcmV0dXJuIHRoYXQgaW1tZWRpYXRlbHkgb24gc3Vic2VxdWVudCBjYWxscyB0byB0aGUgYGl0ZW1zYCBwcm9wZXJ0eS4gSWYgeW91XG4gICAqIHVzZSB0aGlzIG1peGluIGluIGNvbmp1bmN0aW9uIHdpdGggdGhlXG4gICAqIFtEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50XShEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50Lm1kKSBtaXhpbiwgdGhlXG4gICAqIGBjb250ZW50Q2hhbmdlZGAgbWV0aG9kIHdpbGwgYmUgaW52b2tlZCBmb3IgeW91IHdoZW4gdGhlIGVsZW1lbnQncyBjaGlsZHJlblxuICAgKiBjaGFuZ2UsIHR1cm5pbmcgb24gdGhlIG9wdGltaXphdGlvbiBhdXRvbWF0aWNhbGx5LlxuICAgKi9cbiAgY2xhc3MgQ29udGVudEFzSXRlbXMgZXh0ZW5kcyBiYXNlIHtcblxuICAgIC8qKlxuICAgICAqIEFwcGx5IHRoZSBzZWxlY3Rpb24gc3RhdGUgdG8gYSBzaW5nbGUgaXRlbS5cbiAgICAgKlxuICAgICAqIEludm9rZSB0aGlzIG1ldGhvZCB0byBzaWduYWwgdGhhdCB0aGUgc2VsZWN0ZWQgc3RhdGUgb2YgdGhlIGluZGljYXRlZCBpdGVtXG4gICAgICogaGFzIGNoYW5nZWQuIEJ5IGRlZmF1bHQsIHRoaXMgYXBwbGllcyBhIGBzZWxlY3RlZGAgQ1NTIGNsYXNzIGlmIHRoZSBpdGVtXG4gICAgICogaXMgc2VsZWN0ZWQsIGFuZCByZW1vdmVkIGl0IGlmIG5vdCBzZWxlY3RlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGl0ZW0gLSBUaGUgaXRlbSB3aG9zZSBzZWxlY3Rpb24gc3RhdGUgaGFzIGNoYW5nZWQuXG4gICAgICogQHBhcmFtIHtib29sZWFufSBzZWxlY3RlZCAtIFRydWUgaWYgdGhlIGl0ZW0gaXMgc2VsZWN0ZWQsIGZhbHNlIGlmIG5vdC5cbiAgICAgKi9cbiAgICBhcHBseVNlbGVjdGlvbihpdGVtLCBzZWxlY3RlZCkge1xuICAgICAgaWYgKHN1cGVyLmFwcGx5U2VsZWN0aW9uKSB7IHN1cGVyLmFwcGx5U2VsZWN0aW9uKGl0ZW0sIHNlbGVjdGVkKTsgfVxuICAgICAgdG9nZ2xlQ2xhc3MoaXRlbSwgJ3NlbGVjdGVkJywgc2VsZWN0ZWQpO1xuICAgIH1cblxuICAgIGNvbnRlbnRDaGFuZ2VkKCkge1xuICAgICAgaWYgKHN1cGVyLmNvbnRlbnRDaGFuZ2VkKSB7IHN1cGVyLmNvbnRlbnRDaGFuZ2VkKCk7IH1cblxuICAgICAgLy8gU2luY2Ugd2UgZ290IHRoZSBjb250ZW50Q2hhbmdlZCBjYWxsLCB3ZSdsbCBhc3N1bWUgd2UnbGwgYmUgbm90aWZpZWQgaWZcbiAgICAgIC8vIHRoZSBzZXQgb2YgaXRlbXMgY2hhbmdlcyBsYXRlci4gV2UgdHVybiBvbiBtZW1vaXphdGlvbiBvZiB0aGUgaXRlbXNcbiAgICAgIC8vIHByb3BlcnR5IGJ5IHNldHRpbmcgb3VyIGludGVybmFsIHByb3BlcnR5IHRvIG51bGwgKGluc3RlYWQgb2ZcbiAgICAgIC8vIHVuZGVmaW5lZCkuXG4gICAgICB0aGlzW2l0ZW1zU3ltYm9sXSA9IG51bGw7XG5cbiAgICAgIHRoaXMuaXRlbXNDaGFuZ2VkKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgaXMgaW52b2tlZCB3aGVuZXZlciBhIG5ldyBpdGVtIGlzIGFkZGVkIHRvIHRoZSBsaXN0LlxuICAgICAqXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLiBZb3UgY2FuIG92ZXJyaWRlXG4gICAgICogdGhpcyB0byBwZXJmb3JtIHBlci1pdGVtIGluaXRpYWxpemF0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaXRlbSAtIFRoZSBpdGVtIHRoYXQgd2FzIGFkZGVkLlxuICAgICAqL1xuICAgIGl0ZW1BZGRlZChpdGVtKSB7XG4gICAgICBpZiAoc3VwZXIuaXRlbUFkZGVkKSB7IHN1cGVyLml0ZW1BZGRlZChpdGVtKTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IHNldCBvZiBpdGVtcyBpbiB0aGUgbGlzdC4gU2VlIHRoZSB0b3AtbGV2ZWwgZG9jdW1lbnRhdGlvbiBmb3JcbiAgICAgKiBtaXhpbiBmb3IgYSBkZXNjcmlwdGlvbiBvZiBob3cgaXRlbXMgZGlmZmVyIGZyb20gcGxhaW4gY29udGVudC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudFtdfVxuICAgICAqL1xuICAgIGdldCBpdGVtcygpIHtcbiAgICAgIGxldCBpdGVtcztcbiAgICAgIGlmICh0aGlzW2l0ZW1zU3ltYm9sXSA9PSBudWxsKSB7XG4gICAgICAgIGl0ZW1zID0gZmlsdGVyQXV4aWxpYXJ5RWxlbWVudHModGhpcy5jb250ZW50KTtcbiAgICAgICAgLy8gTm90ZTogdGVzdCBmb3IgKmVxdWFsaXR5KiB3aXRoIG51bGw7IGRvbid0IHRyZWF0IHVuZGVmaW5lZCBhcyBhIG1hdGNoLlxuICAgICAgICBpZiAodGhpc1tpdGVtc1N5bWJvbF0gPT09IG51bGwpIHtcbiAgICAgICAgICAvLyBNZW1vaXplIHRoZSBzZXQgb2YgaXRlbXMuXG4gICAgICAgICAgdGhpc1tpdGVtc1N5bWJvbF0gPSBpdGVtcztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUmV0dXJuIHRoZSBtZW1vaXplZCBpdGVtcy5cbiAgICAgICAgaXRlbXMgPSB0aGlzW2l0ZW1zU3ltYm9sXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpdGVtcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIHdoZW4gdGhlIHVuZGVybHlpbmcgY29udGVudHMgY2hhbmdlLiBJdCBpcyBhbHNvXG4gICAgICogaW52b2tlZCBvbiBjb21wb25lbnQgaW5pdGlhbGl6YXRpb24g4oCTIHNpbmNlIHRoZSBpdGVtcyBoYXZlIFwiY2hhbmdlZFwiIGZyb21cbiAgICAgKiBiZWluZyBub3RoaW5nLlxuICAgICAqL1xuICAgIGl0ZW1zQ2hhbmdlZCgpIHtcbiAgICAgIGlmIChzdXBlci5pdGVtc0NoYW5nZWQpIHsgc3VwZXIuaXRlbXNDaGFuZ2VkKCk7IH1cblxuICAgICAgLy8gUGVyZm9ybSBwZXItaXRlbSBpbml0aWFsaXphdGlvbi5cbiAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaWYgKCFpdGVtW2l0ZW1Jbml0aWFsaXplZFN5bWJvbF0pIHtcbiAgICAgICAgICB0aGlzLml0ZW1BZGRlZChpdGVtKTtcbiAgICAgICAgICBpdGVtW2l0ZW1Jbml0aWFsaXplZFN5bWJvbF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnaXRlbXMtY2hhbmdlZCcpKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEBldmVudCBpdGVtcy1jaGFuZ2VkXG4gICAgICpcbiAgICAgKiBUaGlzIGV2ZW50IGlzIHJhaXNlZCB3aGVuIHRoZSBzZXQgb2YgaXRlbXMgY2hhbmdlcy5cbiAgICAgKi9cbiAgfVxuXG4gIHJldHVybiBDb250ZW50QXNJdGVtcztcbn07XG5cblxuLy8gUmV0dXJuIHRoZSBnaXZlbiBlbGVtZW50cywgZmlsdGVyaW5nIG91dCBhdXhpbGlhcnkgZWxlbWVudHMgdGhhdCBhcmVuJ3Rcbi8vIHR5cGljYWxseSB2aXNpYmxlLiBJdGVtcyB3aGljaCBhcmUgbm90IGVsZW1lbnRzIGFyZSByZXR1cm5lZCBhcyBpcy5cbmZ1bmN0aW9uIGZpbHRlckF1eGlsaWFyeUVsZW1lbnRzKGl0ZW1zKSB7XG4gIGxldCBhdXhpbGlhcnlUYWdzID0gW1xuICAgICdsaW5rJyxcbiAgICAnc2NyaXB0JyxcbiAgICAnc3R5bGUnLFxuICAgICd0ZW1wbGF0ZSdcbiAgXTtcbiAgcmV0dXJuIFtdLmZpbHRlci5jYWxsKGl0ZW1zLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgcmV0dXJuICFpdGVtLmxvY2FsTmFtZSB8fCBhdXhpbGlhcnlUYWdzLmluZGV4T2YoaXRlbS5sb2NhbE5hbWUpIDwgMDtcbiAgfSk7XG59XG5cblxuLyoqXG4gKiBGaXJlcyB3aGVuIHRoZSBpdGVtcyBpbiB0aGUgbGlzdCBjaGFuZ2UuXG4gKlxuICogQG1lbWJlcm9mIENvbnRlbnRBc0l0ZW1zXG4gKiBAZXZlbnQgaXRlbXMtY2hhbmdlZFxuICovXG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4vY3JlYXRlU3ltYm9sJztcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3QgdGFyZ2V0U3ltYm9sID0gY3JlYXRlU3ltYm9sKCd0YXJnZXQnKTtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIENvbnRlbnRGaXJzdENoaWxkVGFyZ2V0LiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gdGhhdCBkZWZpbmVzIHRoZSB0YXJnZXQgb2YgYSBjb21wb25lbnQg4oCUIHRoZSBlbGVtZW50IHRoZSBjb21wb25lbnQgaXNcbiAgICogbWFuYWdpbmcgb3Igc29tZWhvdyByZXNwb25zaWJsZSBmb3Ig4oCUIGFzIGl0cyBmaXJzdCBjaGlsZC5cbiAgICpcbiAgICogU29tZSBjb21wb25lbnRzIHNlcnZlIHRvIGRlY29yYXRlIG9yIG1vZGlmeSBvdGhlciBlbGVtZW50cy4gQSBjb21tb25cbiAgICogcGF0dGVybiBpcyB0byBoYXZlIG9uZSBjb21wb25lbnQgd3JhcCBhbm90aGVyLCBhbmQgaGF2ZSB0aGUgb3V0ZXIsIHBhcmVudFxuICAgKiBjb21wb25lbnQgaW1wbGljaXRseSBtb2RpZnkgdGhlIGNoaWxkLiBUaGlzIG1peGluIGZhY2lsaXRhdGVzIHRoaXMgYnlcbiAgICogaW1wbGljaXRseSB0YWtpbmcgYW4gZWxlbWVudCdzIGZpcnN0IGNoaWxkIGFzIGl0cyBcInRhcmdldFwiLlxuICAgKlxuICAgKiBFeGFtcGxlOlxuICAgKlxuICAgKiAgICAgPG91dGVyLWVsZW1lbnQ+XG4gICAqICAgICAgIDxpbm5lci1lbGVtZW50PjwvaW5uZXItZWxlbWVudD5cbiAgICogICAgIDwvb3V0ZXItZWxlbWVudD5cbiAgICpcbiAgICogSWYgYG91dGVyLWVsZW1lbnRgIHVzZXMgdGhpcyBtaXhpbiwgdGhlbiBpdHMgYHRhcmdldGAgcHJvcGVydHkgd2lsbCBiZVxuICAgKiBzZXQgdG8gcG9pbnQgdG8gdGhlIGBpbm5lci1lbGVtZW50YCwgYmVjYXVzZSB0aGF0IGlzIGl0cyBmaXJzdCBjaGlsZC5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIGEgYGNvbnRlbnRgIHByb3BlcnR5IHRoYXQgcmV0dXJucyB0aGUgZWxlbWVudCdzIGNvbnRlbnQuXG4gICAqIFlvdSBjYW4gaW1wbGVtZW50IHRoYXQgeW91cnNlbGYsIG9yIHVzZSB0aGVcbiAgICogW0Rpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnRdKERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQubWQpIG1peGluLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGNhbiBiZSBjb21iaW5lZCB3aXRoIHRoZVxuICAgKiBbVGFyZ2V0SW5Db2xsZWN0aXZlXShUYXJnZXRJbkNvbGxlY3RpdmUubWQpIG1peGluIHRvIGhhdmUgYSBjb21wb25lbnRcbiAgICogcGFydGljaXBhdGUgaW4gY29sbGVjdGl2ZSBrZXlib2FyZCBoYW5kbGluZy5cbiAgICovXG4gIGNsYXNzIENvbnRlbnRGaXJzdENoaWxkVGFyZ2V0IGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb250ZW50Q2hhbmdlZCgpIHtcbiAgICAgIGlmIChzdXBlci5jb250ZW50Q2hhbmdlZCkgeyBzdXBlci5jb250ZW50Q2hhbmdlZCgpOyB9XG4gICAgICBsZXQgY29udGVudCA9IHRoaXMuY29udGVudDtcbiAgICAgIGxldCB0YXJnZXQgPSBjb250ZW50ICYmIGNvbnRlbnRbMF07XG4gICAgICAvLyBBIGNvbXBvbmVudCB1c2luZyBhIHRhcmdldCB3aWxsIGxpa2VseSBkbyBhIGJ1bmNoIG9mIHdvcmsgd2hlbiB0aGVcbiAgICAgIC8vIHRhcmdldCBjaGFuZ2VzLCBzbyBvbmx5IHNldCB0aGUgdGFyZ2V0IGlmIGl0J3MgYWN0dWFsbHkgY2hhbmdlZC5cbiAgICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSB0aGlzLnRhcmdldCkge1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzL3NldHMgdGhlIGN1cnJlbnQgdGFyZ2V0IG9mIHRoZSBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgZ2V0IHRhcmdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzW3RhcmdldFN5bWJvbF07XG4gICAgfVxuICAgIHNldCB0YXJnZXQoZWxlbWVudCkge1xuICAgICAgdGhpc1t0YXJnZXRTeW1ib2xdID0gZWxlbWVudDtcbiAgICAgIGlmICgndGFyZ2V0JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci50YXJnZXQgPSBlbGVtZW50OyB9XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gQ29udGVudEZpcnN0Q2hpbGRUYXJnZXQ7XG59O1xuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBEaXJlY3Rpb25TZWxlY3Rpb24uICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBtYXBzIGRpcmVjdGlvbiBzZW1hbnRpY3MgKGdvTGVmdCwgZ29SaWdodCwgZXRjLikgdG8gc2VsZWN0aW9uXG4gICAqIHNlbWFudGljcyAoc2VsZWN0UHJldmlvdXMsIHNlbGVjdE5leHQsIGV0Yy4pLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGNhbiBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggdGhlXG4gICAqIFtLZXlib2FyZERpcmVjdGlvbl0oS2V5Ym9hcmREaXJlY3Rpb24ubWQpIG1peGluICh3aGljaCBtYXBzIGtleWJvYXJkIGV2ZW50c1xuICAgKiB0byBkaXJlY3Rpb25zKSBhbmQgYSBtaXhpbiB0aGF0IGhhbmRsZXMgc2VsZWN0aW9uIGxpa2VcbiAgICogW1NpbmdsZVNlbGVjdGlvbl0oU2luZ2xlU2VsZWN0aW9uLm1kKS5cbiAgICovXG4gIGNsYXNzIERpcmVjdGlvblNlbGVjdGlvbiBleHRlbmRzIGJhc2Uge1xuXG4gICAgZ29Eb3duKCkge1xuICAgICAgaWYgKHN1cGVyLmdvRG93bikgeyBzdXBlci5nb0Rvd24oKTsgfVxuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0TmV4dCgpO1xuICAgIH1cblxuICAgIGdvRW5kKCkge1xuICAgICAgaWYgKHN1cGVyLmdvRW5kKSB7IHN1cGVyLmdvRW5kKCk7IH1cbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdExhc3QoKTtcbiAgICB9XG5cbiAgICBnb0xlZnQoKSB7XG4gICAgICBpZiAoc3VwZXIuZ29MZWZ0KSB7IHN1cGVyLmdvTGVmdCgpOyB9XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RQcmV2aW91cygpO1xuICAgIH1cblxuICAgIGdvUmlnaHQoKSB7XG4gICAgICBpZiAoc3VwZXIuZ29SaWdodCkgeyBzdXBlci5nb1JpZ2h0KCk7IH1cbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdE5leHQoKTtcbiAgICB9XG5cbiAgICBnb1N0YXJ0KCkge1xuICAgICAgaWYgKHN1cGVyLmdvU3RhcnQpIHsgc3VwZXIuZ29TdGFydCgpOyB9XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RGaXJzdCgpO1xuICAgIH1cblxuICAgIGdvVXAoKSB7XG4gICAgICBpZiAoc3VwZXIuZ29VcCkgeyBzdXBlci5nb1VwKCk7IH1cbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdFByZXZpb3VzKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCBpbXBsZW1lbnRhdGlvbi4gVGhpcyB3aWxsIHR5cGljYWxseSBiZSBoYW5kbGVkIGJ5IG90aGVyIG1peGlucy5cbiAgICBnZXQgc2VsZWN0ZWRGcmFjdGlvbigpIHtcbiAgICAgIHJldHVybiBzdXBlci5zZWxlY3RlZEZyYWN0aW9uO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0ZWRGcmFjdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKCdzZWxlY3RlZEZyYWN0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEZyYWN0aW9uID0gdmFsdWU7IH1cbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IGltcGxlbWVudGF0aW9uLiBUaGlzIHdpbGwgdHlwaWNhbGx5IGJlIGhhbmRsZWQgYnkgb3RoZXIgbWl4aW5zLlxuICAgIHNlbGVjdEZpcnN0KCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdEZpcnN0KSB7IHJldHVybiBzdXBlci5zZWxlY3RGaXJzdCgpOyB9XG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCBpbXBsZW1lbnRhdGlvbi4gVGhpcyB3aWxsIHR5cGljYWxseSBiZSBoYW5kbGVkIGJ5IG90aGVyIG1peGlucy5cbiAgICBzZWxlY3RMYXN0KCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdExhc3QpIHsgcmV0dXJuIHN1cGVyLnNlbGVjdExhc3QoKTsgfVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgaW1wbGVtZW50YXRpb24uIFRoaXMgd2lsbCB0eXBpY2FsbHkgYmUgaGFuZGxlZCBieSBvdGhlciBtaXhpbnMuXG4gICAgc2VsZWN0TmV4dCgpIHtcbiAgICAgIGlmIChzdXBlci5zZWxlY3ROZXh0KSB7IHJldHVybiBzdXBlci5zZWxlY3ROZXh0KCk7IH1cbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IGltcGxlbWVudGF0aW9uLiBUaGlzIHdpbGwgdHlwaWNhbGx5IGJlIGhhbmRsZWQgYnkgb3RoZXIgbWl4aW5zLlxuICAgIHNlbGVjdFByZXZpb3VzKCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdFByZXZpb3VzKSB7IHJldHVybiBzdXBlci5zZWxlY3RQcmV2aW91cygpOyB9XG4gICAgfVxuXG4gICAgLy8gTWFwIGRyYWcgdHJhdmVsIGZyYWN0aW9uIHRvIHNlbGVjdGlvbiBmcmFjdGlvbi5cbiAgICBnZXQgdHJhdmVsRnJhY3Rpb24oKSB7XG4gICAgICByZXR1cm4gc3VwZXIudHJhdmVsRnJhY3Rpb247XG4gICAgfVxuICAgIHNldCB0cmF2ZWxGcmFjdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKCd0cmF2ZWxGcmFjdGlvbicgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIudHJhdmVsRnJhY3Rpb24gPSB2YWx1ZTsgfVxuICAgICAgdGhpcy5zZWxlY3RlZEZyYWN0aW9uID0gdmFsdWU7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gRGlyZWN0aW9uU2VsZWN0aW9uO1xufTtcbiIsIi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggRGlzdHJpYnV0ZWRDaGlsZHJlbi4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIGRlZmluZXMgaGVscGVycyBmb3IgYWNjZXNzaW5nIGEgY29tcG9uZW50J3MgZGlzdHJpYnV0ZWRcbiAgICogY2hpbGRyZW4gYXMgYSBmbGF0dGVuZWQgYXJyYXkgb3Igc3RyaW5nLlxuICAgKlxuICAgKiBUaGUgc3RhbmRhcmQgRE9NIEFQSSBwcm92aWRlcyBzZXZlcmFsIHdheXMgb2YgYWNjZXNzaW5nIGNoaWxkIGNvbnRlbnQ6XG4gICAqIGBjaGlsZHJlbmAsIGBjaGlsZE5vZGVzYCwgYW5kIGB0ZXh0Q29udGVudGAuIE5vbmUgb2YgdGhlc2UgZnVuY3Rpb25zIGFyZVxuICAgKiBTaGFkb3cgRE9NIGF3YXJlLiBUaGlzIG1peGluIGRlZmluZXMgdmFyaWF0aW9ucyBvZiB0aG9zZSBmdW5jdGlvbnMgdGhhdFxuICAgKiAqYXJlKiBTaGFkb3cgRE9NIGF3YXJlLlxuICAgKlxuICAgKiBFeGFtcGxlOiB5b3UgY3JlYXRlIGEgY29tcG9uZW50IGA8Y291bnQtY2hpbGRyZW4+YCB0aGF0IGRpc3BsYXlzIGEgbnVtYmVyXG4gICAqIGVxdWFsIHRvIHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gcGxhY2VkIGluc2lkZSB0aGF0IGNvbXBvbmVudC4gSWYgc29tZW9uZVxuICAgKiBpbnN0YW50aWF0ZXMgeW91ciBjb21wb25lbnQgbGlrZTpcbiAgICpcbiAgICogICAgIDxjb3VudC1jaGlsZHJlbj5cbiAgICogICAgICAgPGRpdj48L2Rpdj5cbiAgICogICAgICAgPGRpdj48L2Rpdj5cbiAgICogICAgICAgPGRpdj48L2Rpdj5cbiAgICogICAgIDwvY291bnQtY2hpbGRyZW4+XG4gICAqXG4gICAqIFRoZW4gdGhlIGNvbXBvbmVudCBzaG91bGQgc2hvdyBcIjNcIiwgYmVjYXVzZSB0aGVyZSBhcmUgdGhyZWUgY2hpbGRyZW4uIFRvXG4gICAqIGNhbGN1bGF0ZSB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuLCB0aGUgY29tcG9uZW50IGNhbiBqdXN0IGNhbGN1bGF0ZVxuICAgKiBgdGhpcy5jaGlsZHJlbi5sZW5ndGhgLiBIb3dldmVyLCBzdXBwb3NlIHNvbWVvbmUgaW5zdGFudGlhdGVzIHlvdXJcbiAgICogY29tcG9uZW50IGluc2lkZSBvbmUgb2YgdGhlaXIgb3duIGNvbXBvbmVudHMsIGFuZCBwdXRzIGEgYDxzbG90PmAgZWxlbWVudFxuICAgKiBpbnNpZGUgeW91ciBjb21wb25lbnQ6XG4gICAqXG4gICAqICAgICA8Y291bnQtY2hpbGRyZW4+XG4gICAqICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICogICAgIDwvY291bnQtY2hpbGRyZW4+XG4gICAqXG4gICAqIElmIHlvdXIgY29tcG9uZW50IG9ubHkgbG9va3MgYXQgYHRoaXMuY2hpbGRyZW5gLCBpdCB3aWxsIGFsd2F5cyBzZWUgZXhhY3RseVxuICAgKiBvbmUgY2hpbGQg4oCUwqB0aGUgYDxzbG90PmAgZWxlbWVudC4gQnV0IHRoZSB1c2VyIGxvb2tpbmcgYXQgdGhlIHBhZ2Ugd2lsbFxuICAgKiAqc2VlKiBhbnkgbm9kZXMgZGlzdHJpYnV0ZWQgdG8gdGhhdCBzbG90LiBUbyBtYXRjaCB3aGF0IHRoZSB1c2VyIHNlZXMsIHlvdXJcbiAgICogY29tcG9uZW50IHNob3VsZCBleHBhbmQgYW55IGA8c2xvdD5gIGVsZW1lbnRzIGl0IGNvbnRhaW5zLlxuICAgKlxuICAgKiBUaGF0IGlzIHRoZSBwcm9ibGVtIHRoaXMgbWl4aW4gc29sdmVzLiBBZnRlciBhcHBseWluZyB0aGlzIG1peGluLCB5b3VyXG4gICAqIGNvbXBvbmVudCBjb2RlIGhhcyBhY2Nlc3MgdG8gYHRoaXMuZGlzdHJpYnV0ZWRDaGlsZHJlbmAsIHdob3NlIGBsZW5ndGhgXG4gICAqIHdpbGwgcmV0dXJuIHRoZSB0b3RhbCBudW1iZXIgb2YgYWxsIGNoaWxkcmVuIGRpc3RyaWJ1dGVkIHRvIHlvdXIgY29tcG9uZW50XG4gICAqIGluIHRoZSBjb21wb3NlZCB0cmVlLlxuICAgKlxuICAgKiBOb3RlOiBUaGUgbGF0ZXN0IEN1c3RvbSBFbGVtZW50cyBBUEkgZGVzaWduIGNhbGxzIGZvciBhIG5ldyBmdW5jdGlvbixcbiAgICogYGdldEFzc2lnbmVkTm9kZXNgIHRoYXQgdGFrZXMgYW4gb3B0aW9uYWwgYGRlZXBgIHBhcmFtZXRlciwgdGhhdCB3aWxsIHNvbHZlXG4gICAqIHRoaXMgcHJvYmxlbSBhdCB0aGUgQVBJIGxldmVsLlxuICAgKi9cbiAgY2xhc3MgRGlzdHJpYnV0ZWRDaGlsZHJlbiBleHRlbmRzIGJhc2Uge1xuXG4gICAgLyoqXG4gICAgICogQW4gaW4tb3JkZXIgY29sbGVjdGlvbiBvZiBkaXN0cmlidXRlZCBjaGlsZHJlbiwgZXhwYW5kaW5nIGFueSBzbG90XG4gICAgICogZWxlbWVudHMuIExpa2UgdGhlIHN0YW5kYXJkIGNoaWxkcmVuIHByb3BlcnR5LCB0aGlzIHNraXBzIHRleHQgbm9kZXMuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnRbXX1cbiAgICAgKi9cbiAgICBnZXQgZGlzdHJpYnV0ZWRDaGlsZHJlbigpIHtcbiAgICAgIHJldHVybiBleHBhbmRDb250ZW50RWxlbWVudHModGhpcy5jaGlsZHJlbiwgZmFsc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFuIGluLW9yZGVyIGNvbGxlY3Rpb24gb2YgZGlzdHJpYnV0ZWQgY2hpbGQgbm9kZXMsIGV4cGFuZGluZyBhbnkgc2xvdFxuICAgICAqIGVsZW1lbnRzLiBMaWtlIHRoZSBzdGFuZGFyZCBjaGlsZE5vZGVzIHByb3BlcnR5LCB0aGlzIGluY2x1ZGVzIHRleHRcbiAgICAgKiBub2Rlcy5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtOb2RlW119XG4gICAgICovXG4gICAgZ2V0IGRpc3RyaWJ1dGVkQ2hpbGROb2RlcygpIHtcbiAgICAgIHJldHVybiBleHBhbmRDb250ZW50RWxlbWVudHModGhpcy5jaGlsZE5vZGVzLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29uY2F0ZW5hdGVkIHRleHQgY29udGVudCBvZiBhbGwgZGlzdHJpYnV0ZWQgY2hpbGQgbm9kZXMsIGV4cGFuZGluZ1xuICAgICAqIGFueSBzbG90IGVsZW1lbnRzLlxuICAgICAqXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXQgZGlzdHJpYnV0ZWRUZXh0Q29udGVudCgpIHtcbiAgICAgIGxldCBzdHJpbmdzID0gdGhpcy5kaXN0cmlidXRlZENoaWxkTm9kZXMubWFwKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICAgIHJldHVybiBjaGlsZC50ZXh0Q29udGVudDtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHN0cmluZ3Muam9pbignJyk7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gRGlzdHJpYnV0ZWRDaGlsZHJlbjtcbn07XG5cblxuLypcbiAqIEdpdmVuIGEgYXJyYXkgb2Ygbm9kZXMsIHJldHVybiBhIG5ldyBhcnJheSB3aXRoIGFueSBjb250ZW50IGVsZW1lbnRzIGV4cGFuZGVkXG4gKiB0byB0aGUgbm9kZXMgZGlzdHJpYnV0ZWQgdG8gdGhhdCBjb250ZW50IGVsZW1lbnQuIFRoaXMgcnVsZSBpcyBhcHBsaWVkXG4gKiByZWN1cnNpdmVseS5cbiAqXG4gKiBJZiBpbmNsdWRlVGV4dE5vZGVzIGlzIHRydWUsIHRleHQgbm9kZXMgd2lsbCBiZSBpbmNsdWRlZCwgYXMgaW4gdGhlXG4gKiBzdGFuZGFyZCBjaGlsZE5vZGVzIHByb3BlcnR5OyBieSBkZWZhdWx0LCB0aGlzIHNraXBzIHRleHQgbm9kZXMsIGxpa2UgdGhlXG4gKiBzdGFuZGFyZCBjaGlsZHJlbiBwcm9wZXJ0eS5cbiAqL1xuZnVuY3Rpb24gZXhwYW5kQ29udGVudEVsZW1lbnRzKG5vZGVzLCBpbmNsdWRlVGV4dE5vZGVzKSB7XG4gIGxldCBleHBhbmRlZCA9IEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChub2Rlcywgbm9kZSA9PiB7XG4gICAgLy8gV2Ugd2FudCB0byBzZWUgaWYgdGhlIG5vZGUgaXMgYW4gaW5zdGFuY2VvZiBIVE1MU2xvdEVMZW1lbnQsIGJ1dFxuICAgIC8vIHRoYXQgY2xhc3Mgd29uJ3QgZXhpc3QgaWYgdGhlIGJyb3dzZXIgdGhhdCBkb2Vzbid0IHN1cHBvcnQgbmF0aXZlXG4gICAgLy8gU2hhZG93IERPTSBhbmQgaWYgdGhlIFNoYWRvdyBET00gcG9seWZpbGwgaGFzbid0IGJlZW4gbG9hZGVkLiBJbnN0ZWFkLFxuICAgIC8vIHdlIGRvIGEgc2ltcGxpc3RpYyBjaGVjayB0byBzZWUgaWYgdGhlIHRhZyBuYW1lIGlzIFwic2xvdFwiLlxuICAgIGxldCBpc1Nsb3QgPSB0eXBlb2YgSFRNTFNsb3RFbGVtZW50ICE9PSAndW5kZWZpbmVkJyA/XG4gICAgICBub2RlIGluc3RhbmNlb2YgSFRNTFNsb3RFbGVtZW50IDpcbiAgICAgIG5vZGUubG9jYWxOYW1lID09PSAnc2xvdCc7XG4gICAgaWYgKGlzU2xvdCkge1xuICAgICAgLy8gVXNlIHRoZSBub2RlcyBhc3NpZ25lZCB0byB0aGlzIG5vZGUgaW5zdGVhZC5cbiAgICAgIGxldCBhc3NpZ25lZE5vZGVzID0gbm9kZS5hc3NpZ25lZE5vZGVzKHsgZmxhdHRlbjogdHJ1ZSB9KTtcbiAgICAgIHJldHVybiBhc3NpZ25lZE5vZGVzID9cbiAgICAgICAgZXhwYW5kQ29udGVudEVsZW1lbnRzKGFzc2lnbmVkTm9kZXMsIGluY2x1ZGVUZXh0Tm9kZXMpIDpcbiAgICAgICAgW107XG4gICAgfSBlbHNlIGlmIChub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIC8vIFBsYWluIGVsZW1lbnQ7IHVzZSBhcyBpcy5cbiAgICAgIHJldHVybiBbbm9kZV07XG4gICAgfSBlbHNlIGlmIChub2RlIGluc3RhbmNlb2YgVGV4dCAmJiBpbmNsdWRlVGV4dE5vZGVzKSB7XG4gICAgICAvLyBUZXh0IG5vZGUuXG4gICAgICByZXR1cm4gW25vZGVdO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDb21tZW50LCBwcm9jZXNzaW5nIGluc3RydWN0aW9uLCBldGMuOyBza2lwLlxuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfSk7XG4gIGxldCBmbGF0dGVuZWQgPSBbXS5jb25jYXQoLi4uZXhwYW5kZWQpO1xuICByZXR1cm4gZmxhdHRlbmVkO1xufVxuIiwiaW1wb3J0IG1pY3JvdGFzayBmcm9tICcuL21pY3JvdGFzayc7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50LiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggZGVmaW5lcyBhIGNvbXBvbmVudCdzIGNvbnRlbnQgYXMgaXRzIGNoaWxkcmVuLCBleHBhbmRpbmcgYW55XG4gICAqIG5vZGVzIGRpc3RyaWJ1dGVkIHRvIHRoZSBjb21wb25lbnQncyBzbG90cy5cbiAgICpcbiAgICogVGhpcyBhbHNvIHByb3ZpZGVzIG5vdGlmaWNhdGlvbiBvZiBjaGFuZ2VzIHRvIGEgY29tcG9uZW50J3MgY29udGVudC4gSXRcbiAgICogd2lsbCBpbnZva2UgYSBgY29udGVudENoYW5nZWRgIG1ldGhvZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgZmlyc3RcbiAgICogaW5zdGFudGlhdGVkLCBhbmQgd2hlbmV2ZXIgaXRzIGRpc3RyaWJ1dGVkIGNoaWxkcmVuIGNoYW5nZS4gVGhpcyBpcyBhblxuICAgKiBlYXN5IHdheSB0byBzYXRpc2Z5IHRoZSBHb2xkIFN0YW5kYXJkIGNoZWNrbGlzdCBpdGVtIGZvciBtb25pdG9yaW5nXG4gICAqIFtDb250ZW50IENoYW5nZXNdKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJjb21wb25lbnRzL2dvbGQtc3RhbmRhcmQvd2lraS9Db250ZW50LUNoYW5nZXMpLlxuICAgKlxuICAgKiBFeGFtcGxlOlxuICAgKlxuICAgKiBgYGBcbiAgICogbGV0IGJhc2UgPSBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50KERpc3RyaWJ1dGVkQ2hpbGRyZW4oSFRNTEVsZW1lbnQpKTtcbiAgICogY2xhc3MgQ291bnRpbmdFbGVtZW50IGV4dGVuZHMgYmFzZSB7XG4gICAqXG4gICAqICAgY29uc3RydWN0b3IoKSB7XG4gICAqICAgICBzdXBlcigpO1xuICAgKiAgICAgbGV0IHJvb3QgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcbiAgICogICAgIHJvb3QuaW5uZXJIVE1MID0gYDxzbG90Pjwvc2xvdD5gO1xuICAgKiAgIH1cbiAgICpcbiAgICogICBjb250ZW50Q2hhbmdlZCgpIHtcbiAgICogICAgIC8vIENvdW50IHRoZSBjb21wb25lbnQncyBjaGlsZHJlbiwgYm90aCBpbml0aWFsbHkgYW5kIHdoZW4gY2hhbmdlZC5cbiAgICogICAgIHRoaXMuY291bnQgPSB0aGlzLmRpc3RyaWJ1dGVkQ2hpbGRyZW4ubGVuZ3RoO1xuICAgKiAgIH1cbiAgICpcbiAgICogfVxuICAgKiBgYGBcbiAgICpcbiAgICogVGhpcyBtaXhpbiBpcyBpbnRlbmRlZCBmb3IgdXNlIHdpdGggdGhlXG4gICAqIFtEaXN0cmlidXRlZENoaWxkcmVuXShEaXN0cmlidXRlZENoaWxkcmVuLm1kKSBtaXhpbi4gU2VlIHRoYXQgbWl4aW4gZm9yIGFcbiAgICogZGlzY3Vzc2lvbiBvZiBob3cgdGhhdCB3b3Jrcy4gVGhpcyBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50IG1peGluXG4gICAqIHByb3ZpZGVzIGFuIGVhc3kgd2F5IG9mIGRlZmluaW5nIHRoZSBcImNvbnRlbnRcIiBvZiBhIGNvbXBvbmVudCBhcyB0aGVcbiAgICogY29tcG9uZW50J3MgZGlzdHJpYnV0ZWQgY2hpbGRyZW4uIFRoYXQgaW4gdHVybiBsZXRzIG1peGlucyBsaWtlXG4gICAqIFtDb250ZW50QXNJdGVtc10oQ29udGVudEFzSXRlbXMubWQpIG1hbmlwdWxhdGUgdGhlIGNoaWxkcmVuIGFzIGxpc3QgaXRlbXMuXG4gICAqL1xuICBjbGFzcyBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50IGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG5cbiAgICAgIGlmICh0aGlzLnNoYWRvd1Jvb3QpIHtcbiAgICAgICAgLy8gTGlzdGVuIHRvIGNoYW5nZXMgb24gYWxsIHNsb3RzLlxuICAgICAgICBsZXQgc2xvdHMgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvckFsbCgnc2xvdCcpO1xuICAgICAgICBzbG90cy5mb3JFYWNoKHNsb3QgPT4gc2xvdC5hZGRFdmVudExpc3RlbmVyKCdzbG90Y2hhbmdlJywgZXZlbnQgPT4ge1xuICAgICAgICAgIHRoaXMuY29udGVudENoYW5nZWQoKTtcbiAgICAgICAgfSkpO1xuICAgICAgfVxuXG4gICAgICAvLyBNYWtlIGFuIGluaXRpYWwgY2FsbCB0byBjb250ZW50Q2hhbmdlZCgpIHNvIHRoYXQgdGhlIGNvbXBvbmVudCBjYW4gZG9cbiAgICAgIC8vIGluaXRpYWxpemF0aW9uIHRoYXQgaXQgbm9ybWFsbHkgZG9lcyB3aGVuIGNvbnRlbnQgY2hhbmdlcy5cbiAgICAgIC8vXG4gICAgICAvLyBUaGlzIHdpbGwgaW52b2tlIGNvbnRlbnRDaGFuZ2VkKCkgaGFuZGxlcnMgaW4gb3RoZXIgbWl4aW5zLiBJbiBvcmRlclxuICAgICAgLy8gdGhhdCB0aG9zZSBtaXhpbnMgaGF2ZSBhIGNoYW5jZSB0byBjb21wbGV0ZSB0aGVpciBvd24gaW5pdGlhbGl6YXRpb24sXG4gICAgICAvLyB3ZSBhZGQgdGhlIGNvbnRlbnRDaGFuZ2VkKCkgY2FsbCB0byB0aGUgbWljcm90YXNrIHF1ZXVlLlxuICAgICAgbWljcm90YXNrKCgpID0+IHRoaXMuY29udGVudENoYW5nZWQoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSBjb250ZW50cyBvZiB0aGUgY29tcG9uZW50IChpbmNsdWRpbmcgZGlzdHJpYnV0ZWRcbiAgICAgKiBjaGlsZHJlbikgaGF2ZSBjaGFuZ2VkLlxuICAgICAqXG4gICAgICogVGhpcyBtZXRob2QgaXMgYWxzbyBpbnZva2VkIHdoZW4gYSBjb21wb25lbnQgaXMgZmlyc3QgaW5zdGFudGlhdGVkOyB0aGVcbiAgICAgKiBjb250ZW50cyBoYXZlIGVzc2VudGlhbGx5IFwiY2hhbmdlZFwiIGZyb20gYmVpbmcgbm90aGluZy4gVGhpcyBhbGxvd3MgdGhlXG4gICAgICogY29tcG9uZW50IHRvIHBlcmZvcm0gaW5pdGlhbCBwcm9jZXNzaW5nIG9mIGl0cyBjaGlsZHJlbi5cbiAgICAgKi9cbiAgICBjb250ZW50Q2hhbmdlZCgpIHtcbiAgICAgIGlmIChzdXBlci5jb250ZW50Q2hhbmdlZCkgeyBzdXBlci5jb250ZW50Q2hhbmdlZCgpOyB9XG4gICAgICBsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2NvbnRlbnQtY2hhbmdlZCcpO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29udGVudCBvZiB0aGlzIGNvbXBvbmVudCwgZGVmaW5lZCB0byBiZSB0aGUgZmxhdHRlbmVkIGFycmF5IG9mXG4gICAgICogY2hpbGRyZW4gZGlzdHJpYnV0ZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudFtdfVxuICAgICAqL1xuICAgIGdldCBjb250ZW50KCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGlzdHJpYnV0ZWRDaGlsZHJlbjtcbiAgICB9XG4gICAgc2V0IGNvbnRlbnQodmFsdWUpIHtcbiAgICAgIGlmICgnY29udGVudCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuY29udGVudCA9IHZhbHVlOyB9XG4gICAgICAvLyBUT0RPOiBTZXQgdGhlIGNoaWxkcmVuIHRvIHRoZSBnaXZlbiB2YWx1ZSAod2hpY2ggc2hvdWxkIGJlIGFuIGFycmF5IG9mXG4gICAgICAvLyBlbGVtZW50cyk/XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBldmVudCBpcyByYWlzZWQgd2hlbiB0aGUgY29tcG9uZW50J3MgY29udGVudHMgKGluY2x1ZGluZyBkaXN0cmlidXRlZFxuICAgICAqIGNoaWxkcmVuKSBoYXZlIGNoYW5nZWQuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudFxuICAgICAqIEBldmVudCBjb250ZW50LWNoYW5nZWRcbiAgICAgKi9cbiAgfVxuXG4gIHJldHVybiBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50O1xufTtcbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi9jcmVhdGVTeW1ib2wnO1xuXG5cbi8vIFN5bWJvbHMgZm9yIHByaXZhdGUgZGF0YSBtZW1iZXJzIG9uIGFuIGVsZW1lbnQuXG5jb25zdCBzZWxlY3RlZEZyYWN0aW9uU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdzZWxlY3RlZEZyYWN0aW9uJyk7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBGcmFjdGlvbmFsU2VsZWN0aW9uLiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl4aW4oYmFzZSkge1xuXG4gIC8qKlxuICAgKiBBZGRzIHN1cHBvcnQgZm9yIGZyYWN0aW9uYWwgc2VsZWN0aW9uOiB0cmVhdGluZyBhIHNlbGVjdGlvbiBhcyBhIHJlYWxcbiAgICogbnVtYmVyIHRoYXQgY29tYmluZXMgYW4gaW50ZWdlciBwb3J0aW9uIChhbiBpbmRleCBpbnRvIGEgbGlzdCksIGFuZCBhXG4gICAqIGZyYWN0aW9uIChpbmRpY2F0aW5nIGhvdyBmYXIgb2YgdGhlIHdheSB3ZSBhcmUgdG8gdGhlIG5leHQgb3IgcHJldmlvdXNcbiAgICogaXRlbSkuXG4gICAqXG4gICAqIFRoaXMgaXMgdXNlZnVsIGluIGNvbXBvbmVudHMgdGhhdCBzdXBwb3J0IGluY3JlbWVudGFsIG9wZXJhdGlvbnMgZHVyaW5nXG4gICAqIGRyYWdnaW5nIGFuZCBzd2lwaW5nLiBFeGFtcGxlOiBhIGNhcm91c2VsIGNvbXBvbmVudCBoYXMgc2V2ZXJhbCBpdGVtcywgYW5kIHRoZVxuICAgKiBjdXJyZW50bHkgc2VsZWN0ZWQgaXRlbSBpcyBpdGVtIDMuIFRoZSB1c2VyIGJlZ2lucyBzd2lwaW5nIHRvIHRoZSBsZWZ0LFxuICAgKiBtb3ZpbmcgdG93YXJkcyBzZWxlY3RpbmcgaXRlbSA0LiBIYWxmd2F5IHRocm91Z2ggdGhpcyBvcGVyYXRpb24sIHRoZVxuICAgKiBmcmFjdGlvbmFsIHNlbGVjdGlvbiB2YWx1ZSBpcyAzLjUuXG4gICAqXG4gICAqIFRoaXMgdmFsdWUgcGVybWl0cyBjb21tdW5pY2F0aW9uIGJldHdlZW4gbWl4aW5zIGxpa2VcbiAgICogW1N3aXBlRGlyZWN0aW9uXSguL1N3aXBlRGlyZWN0aW9uLm1kKSBhbmRcbiAgICogW1RyYWNrcGFkRGlyZWN0aW9uXSguL1RyYWNrcGFkRGlyZWN0aW9uLm1kKSwgd2hpY2ggZ2VuZXJhdGUgZnJhY3Rpb25hbFxuICAgKiBzZWxlY3Rpb24gdmFsdWVzLCBhbmQgbWl4aW5zIGxpa2VcbiAgICogW1NlbGVjdGlvbkFuaW1hdGlvbl0oLi9TZWxlY3Rpb25BbmltYXRpb24ubWQpLCB3aGljaCBjYW4gcmVuZGVyIHNlbGVjdGlvblxuICAgKiBhdCBhIGZyYWN0aW9uYWwgdmFsdWUuXG4gICAqL1xuICBjbGFzcyBGcmFjdGlvbmFsU2VsZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jb25uZWN0ZWRDYWxsYmFjaykgeyBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpOyB9XG4gICAgICB0aGlzLnNlbGVjdGVkRnJhY3Rpb24gPSAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgZnJhY3Rpb25hbCB2YWx1ZSBpbmRpY2F0aW5nIGhvdyBmYXIgdGhlIHVzZXIgaGFzIGN1cnJlbnRseSBhZHZhbmNlZCB0b1xuICAgICAqIHRoZSBuZXh0L3ByZXZpb3VzIGl0ZW0uIEUuZy4sIGEgYHNlbGVjdGVkRnJhY3Rpb25gIG9mIDMuNSBpbmRpY2F0ZXMgdGhlXG4gICAgICogdXNlciBpcyBoYWxmd2F5IGJldHdlZW4gaXRlbXMgMyBhbmQgNC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGVkRnJhY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpc1tzZWxlY3RlZEZyYWN0aW9uU3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGVkRnJhY3Rpb24odmFsdWUpIHtcbiAgICAgIHRoaXNbc2VsZWN0ZWRGcmFjdGlvblN5bWJvbF0gPSB2YWx1ZTtcbiAgICAgIGlmICgnc2VsZWN0ZWRGcmFjdGlvbicgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRGcmFjdGlvbiA9IHZhbHVlOyB9XG4gICAgICBsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3NlbGVjdGVkLWZyYWN0aW9uLWNoYW5nZWQnKTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gRnJhY3Rpb25hbFNlbGVjdGlvbjtcbn1cblxuXG5taXhpbi5oZWxwZXJzID0ge1xuXG4gIC8qXG4gICAqIERhbXBlbiBhIHNlbGVjdGlvbiB0aGF0IGdvZXMgcGFzdCB0aGUgYmVnaW5uaW5nIG9yIGVuZCBvZiBhIGxpc3QuIFRoaXMgaXNcbiAgICogZ2VuZXJhbGx5IHVzZWQgdG8gcHJvZHVjZSBhIHZpc3VhbCBlZmZlY3Qgb2YgdGVuc2lvbiBhcyB0aGUgdXNlciB0cmllcyB0b1xuICAgKiBnbyBmdXJ0aGVyIGluIGEgZGlyZWN0aW9uIHRoYXQgaGFzIG5vIG1vcmUgaXRlbXMuXG4gICAqXG4gICAqIEV4YW1wbGU6IHN1cHBvc2UgYGl0ZW1Db3VudGAgaXMgNSwgaW5kaWNhdGluZyBhIGxpc3Qgb2YgNSBpdGVtcy4gVGhlIGluZGV4IG9mXG4gICAqIHRoZSBsYXN0IGl0ZW0gaXMgNC4gSWYgdGhlIGBzZWxlY3Rpb25gIHBhcmFtZXRlciBpcyA0LjUsIHRoZSB1c2VyIGlzIHRyeWluZ1xuICAgKiB0byBnbyBwYXN0IHRoaXMgbGFzdCBpdGVtLiBXaGVuIGEgZGFtcGluZyBmdW5jdGlvbiBpcyBhcHBsaWVkLCB0aGUgcmVzdWx0aW5nXG4gICAqIHZhbHVlIHdpbGwgYmUgbGVzcyB0aGFuIDQuNSAodGhlIGFjdHVhbCB2YWx1ZSB3aWxsIGJlIDQuMjUpLiBXaGVuIHRoaXNcbiAgICogc2VsZWN0aW9uIHN0YXRlIGlzIHJlbmRlcmVkLCB0aGUgdXNlciB3aWxsIHNlZSB0aGF0LCBlYWNoIHVuaXQgZGlzdGFuY2UgdGhlXG4gICAqIGRyYWcgdHJhdmVscyBoYXMgbGVzcyBhbmQgbGVzcyB2aXNpYmxlIGVmZmVjdC4gVGhpcyBpcyBwZXJjZWl2ZWQgYXMgdGVuc2lvbi5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNlbGVjdGlvbiAtIEEgcmVhbCBudW1iZXIgaW5kaWNhdGluZyBhIHNlbGVjdGlvbiBwb3NpdGlvblxuICAgKiBAcGFyYW0ge251bWJlcn0gaXRlbUNvdW50IC0gQW4gaW50ZWdlciBmb3IgdGhlIG51bWJlciBvZiBpdGVtcyBpbiB0aGUgbGlzdFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBBIHJlYWwgbnVtYmVyIHJlcHJlc2VudGluZyB0aGUgZGFtcGVkIHNlbGVjdGlvbiB2YWx1ZS5cbiAgICovXG4gIGRhbXBlZFNlbGVjdGlvbihzZWxlY3Rpb24sIGl0ZW1Db3VudCkge1xuICAgIGxldCBkYW1wZWQ7XG4gICAgbGV0IGJvdW5kID0gaXRlbUNvdW50IC0gMTtcbiAgICBpZiAoc2VsZWN0aW9uIDwgMCkge1xuICAgICAgLy8gVHJ5aW5nIHRvIGdvIHBhc3QgYmVnaW5uaW5nIG9mIGxpc3QuIEFwcGx5IHRlbnNpb24gZnJvbSB0aGUgbGVmdCBlZGdlLlxuICAgICAgZGFtcGVkID0gLW1peGluLmhlbHBlcnMuZGFtcGluZygtc2VsZWN0aW9uKTtcbiAgICB9IGVsc2UgaWYgKHNlbGVjdGlvbiA+PSBib3VuZCkge1xuICAgICAgLy8gVHJ5aW5nIHRvIGdvIHBhc3QgZW5kIG9mIGxpc3QuIEFwcGx5IHRlbnNpb24gZnJvbSB0aGUgcmlnaHQgZWRnZS5cbiAgICAgIGRhbXBlZCA9IGJvdW5kICsgbWl4aW4uaGVscGVycy5kYW1waW5nKHNlbGVjdGlvbiAtIGJvdW5kKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTm8gZGFtcGluZyByZXF1aXJlZC5cbiAgICAgIGRhbXBlZCA9IHNlbGVjdGlvbjtcbiAgICB9XG4gICAgcmV0dXJuIGRhbXBlZDtcbiAgfSxcblxuICAvKlxuICAgKiBDYWxjdWxhdGUgZGFtcGluZyBhcyBhIGZ1bmN0aW9uIG9mIHRoZSBkaXN0YW5jZSBwYXN0IHRoZSBtaW5pbXVtL21heGltdW1cbiAgICogdmFsdWVzLlxuICAgKlxuICAgKiBXZSB3YW50IHRvIGFzeW1wdG90aWNhbGx5IGFwcHJvYWNoIGFuIGFic29sdXRlIG1pbmltdW0gb2YgMSB1bml0XG4gICAqIGJlbG93L2Fib3ZlIHRoZSBhY3R1YWwgbWluaW11bS9tYXhpbXVtLiBUaGlzIHJlcXVpcmVzIGNhbGN1bGF0aW5nIGFcbiAgICogaHlwZXJib2xpYyBmdW5jdGlvbi5cbiAgICpcbiAgICogU2VlIGh0dHA6Ly93d3cud29sZnJhbWFscGhhLmNvbS9pbnB1dC8/aT15KyUzRCstMSUyRiUyOHglMkIxJTI5KyUyQisxXG4gICAqIGZvciB0aGUgb25lIHdlIHVzZS4gVGhlIG9ubHkgcG9ydGlvbiBvZiB0aGF0IGZ1bmN0aW9uIHdlIGNhcmUgYWJvdXQgaXMgd2hlblxuICAgKiB4IGlzIHplcm8gb3IgZ3JlYXRlci4gQW4gaW1wb3J0YW50IGNvbnNpZGVyYXRpb24gaXMgdGhhdCB0aGUgY3VydmUgYmVcbiAgICogdGFuZ2VudCB0byB0aGUgZGlhZ29uYWwgbGluZSB4PXkgYXQgKDAsIDApLiBUaGlzIGVuc3VyZXMgc21vb3RoIGNvbnRpbnVpdHlcbiAgICogd2l0aCB0aGUgbm9ybWFsIGRyYWcgYmVoYXZpb3IsIGluIHdoaWNoIHRoZSB2aXNpYmxlIHNsaWRpbmcgaXMgbGluZWFyIHdpdGhcbiAgICogdGhlIGRpc3RhbmNlIHRoZSB0b3VjaHBvaW50IGhhcyBiZWVuIGRyYWdnZWQuXG4gICAqL1xuICBkYW1waW5nKHgpIHtcbiAgICBsZXQgeSA9ICgtMSAvICh4ICsgMSkpICsgMTtcbiAgICByZXR1cm4geTtcbiAgfSxcblxuICAvKlxuICAgKiBSZXR1cm4gdGhlIGN1cnJlbnQgZnJhY3Rpb25hbCBzZWxlY3Rpb24gdmFsdWUgZm9yIHRoZSBnaXZlbiBlbGVtZW50LlxuICAgKlxuICAgKiBUaGlzIHNpbXBseSBhZGRzIHRoZSBlbGVtZW50J3MgYHNlbGVjdGVkSW5kZXhgIGFuZCBgc2VsZWN0ZWRGcmFjdGlvbmBcbiAgICogcHJvcGVydGllcy5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIEFuIGVsZW1lbnQgdGhhdCBzdXBwb3J0cyBzZWxlY3Rpb25cbiAgICovXG4gIGVsZW1lbnRTZWxlY3Rpb24oZWxlbWVudCkge1xuICAgIGxldCBzZWxlY3RlZEluZGV4ID0gZWxlbWVudC5zZWxlY3RlZEluZGV4O1xuICAgIGlmIChzZWxlY3RlZEluZGV4IDwgMCkge1xuICAgICAgLy8gTm8gc2VsZWN0aW9uXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBzZWxlY3RlZEZyYWN0aW9uID0gZWxlbWVudC5zZWxlY3RlZEZyYWN0aW9uIHx8IDA7XG4gICAgcmV0dXJuIHNlbGVjdGVkSW5kZXggKyBzZWxlY3RlZEZyYWN0aW9uO1xuICB9LFxuXG4gIC8qXG4gICAqIEJyZWFrcyBhIGZyYWN0aW9uYWwgc2VsZWN0aW9uIGludG8gaXRzIGludGVnZXIgYW5kIGZyYWN0aW9uYWwgcGFydHMuXG4gICAqXG4gICAqIEV4YW1wbGU6IGlmIHBhc3NlZCAzLjUsIHRoaXMgcmV0dXJucyB7IGluZGV4OiAzLCBmcmFjdGlvbjogNSB9LlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2VsZWN0aW9uIOKAk8KgQSByZWFsIG51bWJlciByZXByZXNlbnRpbmcgYSBzZWxlY3Rpb24gcG9pbnRcbiAgICogQHJldHVybnMge29iamVjdH0gLSBBbiBvYmplY3Qgd2l0aCBhbiBgaW5kZXhgIHByb3BlcnR5IGhvbGRpbmcgdGhlXG4gICAqIHNlbGVjdGlvbidzIGludGVnZXIgY29tcG9uZW50LCBhbmQgYSBgZnJhY3Rpb25gIHByb3BlcnR5IGhvbGRpbmcgdGhlXG4gICAqIHNlbGVjdGlvbidzIGZyYWN0aW9uYWwgY29tcG9uZW50LlxuICAgKi9cbiAgc2VsZWN0aW9uUGFydHMoc2VsZWN0aW9uKSB7XG4gICAgLy8gU3R1cGlkIElFIGRvZXNuJ3QgaGF2ZSBNYXRoLnRydW5jLlxuICAgIC8vIGxldCBpbmRleCA9IE1hdGgudHJ1bmMoc2VsZWN0aW9uKTtcbiAgICBsZXQgaW5kZXggPSBzZWxlY3Rpb24gPCAwID8gTWF0aC5jZWlsKHNlbGVjdGlvbikgOiBNYXRoLmZsb29yKHNlbGVjdGlvbik7XG4gICAgbGV0IGZyYWN0aW9uID0gc2VsZWN0aW9uIC0gaW5kZXg7XG4gICAgcmV0dXJuIHsgaW5kZXgsIGZyYWN0aW9uIH07XG4gIH0sXG5cbiAgLypcbiAgICogUmV0dXJucyBhIGZyYWN0aW9uYWwgc2VsZWN0aW9uIHBvaW50IGFmdGVyIGFjY291bnRpbmcgZm9yIHdyYXBwaW5nLCBlbnN1cmluZ1xuICAgKiB0aGF0IHRoZSBpbnRlZ2VyIHBvcnRpb24gb2YgdGhlIHNlbGVjdGlvbiBzdGF5cyBiZXR3ZWVuIDAgYW5kIGBpdGVtQ291bnRgLTEuXG4gICAqIFRoYXQgaXMsIHRoZSBpbnRlZ2VyIHBvcnRpb24gd2lsbCBhbHdheXMgYmUgYSB2YWxpZCBpbmRleCBpbnRvIHRoZSBsaXN0LlxuICAgKlxuICAgKiBFeGFtcGxlIG9mIHdyYXBwaW5nIHBhc3QgdGhlIGVuZCBvZiB0aGUgbGlzdDogaWYgYHNlbGVjdGlvbmAgaXMgNS41IGFuZFxuICAgKiBgaXRlbUNvdW50YCBpcyA1LCB0aGlzIHJldHVybnMgMC41LiBFeGFtcGxlIG9mIHdyYXBwaW5nIHBhc3QgdGhlIGJlZ2lubmluZyBvZlxuICAgKiB0aGUgbGlzdDogaWYgYHNlbGVjdGlvbmAgaXMgMC41IGFuZCBgaXRlbUNvdW50YCBpcyA1LCB0aGlzIHJldHVybnMgNC41LlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2VsZWN0aW9uIC0gQSByZWFsIG51bWJlciByZXByZXNlbnRpbmcgYSBzZWxlY3Rpb24gcG9pbnRcbiAgICogQHBhcmFtIHtudW1iZXJ9IGl0ZW1Db3VudCAtIFRoZSBudW1iZXIgb2YgaXRlbXMgaW4gdGhlIGxpc3RcbiAgICogQHJldHVybnMge251bWJlcn0gLSBUaGUgcmVzdWx0IG9mIHdyYXBwaW5nIHRoZSBzZWxlY3Rpb24gcG9pbnRcbiAgICovXG4gIHdyYXBwZWRTZWxlY3Rpb24oc2VsZWN0aW9uLCBpdGVtQ291bnQpIHtcbiAgICAvLyBIYW5kbGVzIHBvc3NpYmlsaXR5IG9mIG5lZ2F0aXZlIG1vZC5cbiAgICAvLyBTZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTg2MTgyNTAvNzY0NzJcbiAgICByZXR1cm4gKChzZWxlY3Rpb24gJSBpdGVtQ291bnQpICsgaXRlbUNvdW50KSAlIGl0ZW1Db3VudDtcbiAgfSxcblxuICAvKlxuICAgKiBSZXR1cm4gdGhlIHBhcnRzIG9mIGEgc2VsZWN0aW9uLCBmaXJzdCB3cmFwcGluZyBpZiBuZWNlc3NhcnkuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzZWxlY3Rpb24g4oCTIEEgcmVhbCBudW1iZXIgcmVwcmVzZW50aW5nIGEgc2VsZWN0aW9uIHBvaW50XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpdGVtQ291bnQgLSBUaGUgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZSBsaXN0XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gd3JhcCDigJMgVHJ1ZSBpZiB0aGUgc2VsZWN0aW9uIHNob3VsZCB3cmFwIHRvIHN0YXkgd2l0aGluIHRoZVxuICAgKiBsaXN0XG4gICAqIEByZXR1cm5zIHtvYmplY3R9IOKAkyBUaGUgcGFydHMgb2YgdGhlIHNlbGVjdGlvbiwgdXNpbmcgdGhlIHNhbWUgZm9ybWF0IGFzXG4gICAqIGBzZWxlY3Rpb25QYXJ0c2AuXG4gICAqL1xuICB3cmFwcGVkU2VsZWN0aW9uUGFydHMoc2VsZWN0aW9uLCBpdGVtQ291bnQsIHdyYXApIHtcbiAgICBpZiAod3JhcCkge1xuICAgICAgc2VsZWN0aW9uID0gbWl4aW4uaGVscGVycy53cmFwcGVkU2VsZWN0aW9uKHNlbGVjdGlvbiwgaXRlbUNvdW50KTtcbiAgICB9XG4gICAgcmV0dXJuIG1peGluLmhlbHBlcnMuc2VsZWN0aW9uUGFydHMoc2VsZWN0aW9uKTtcbiAgfVxuXG59O1xuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuL2NyZWF0ZVN5bWJvbCc7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IGdlbmVyaWNTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2dlbmVyaWMnKTtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIEdlbmVyaWMuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBhbGxvd3MgYSBjb21wb25lbnQgdG8gc3VwcG9ydCBhIFwiZ2VuZXJpY1wiIHN0eWxlOiBhIG1pbmltYWxpc3RcbiAgICogc3R5bGUgdGhhdCBjYW4gZWFzaWx5IGJlIHJlbW92ZWQgdG8gcmVzZXQgaXRzIHZpc3VhbCBhcHBlYXJhbmNlIHRvIGFcbiAgICogYmFzZWxpbmUgc3RhdGUuXG4gICAqXG4gICAqIEJ5IGRlZmF1bHQsIGEgY29tcG9uZW50IHNob3VsZCBwcm92aWRlIGEgbWluaW1hbCB2aXN1YWwgcHJlc2VudGF0aW9uIHRoYXRcbiAgICogYWxsb3dzIHRoZSBjb21wb25lbnQgdG8gZnVuY3Rpb24uIEhvd2V2ZXIsIHRoZSBtb3JlIHN0eWxpbmcgdGhlIGNvbXBvbmVudFxuICAgKiBwcm92aWRlcyBieSBkZWZhdWx0LCB0aGUgaGFyZGVyIGl0IGJlY29tZXMgdG8gZ2V0IHRoZSBjb21wb25lbnQgdG8gZml0IGluXG4gICAqIGluIG90aGVyIHNldHRpbmdzLiBFYWNoIENTUyBydWxlIGhhcyB0byBiZSBvdmVycmlkZGVuLiBXb3JzZSwgbmV3IENTUyBydWxlc1xuICAgKiBhZGRlZCB0byB0aGUgZGVmYXVsdCBzdHlsZSB3b24ndCBiZSBvdmVycmlkZGVuIGJ5IGRlZmF1bHQsIG1ha2luZyBpdCBoYXJkXG4gICAqIHRvIGtub3cgd2hldGhlciBhIG5ldyB2ZXJzaW9uIG9mIGEgY29tcG9uZW50IHdpbGwgc3RpbGwgbG9vayBva2F5LlxuICAgKlxuICAgKiBBcyBhIGNvbXByb21pc2UsIHRoZSBtaXhpbiBkZWZpbmVzIGEgYGdlbmVyaWNgIGF0dHJpYnV0ZS4gVGhpcyBhdHRyaWJ1dGUgaXNcbiAgICogbm9ybWFsbHkgc2V0IGJ5IGRlZmF1bHQsIGFuZCBzdHlsZXMgY2FuIGJlIHdyaXR0ZW4gdGhhdCBhcHBseSBvbmx5IHdoZW4gdGhlXG4gICAqIGdlbmVyaWMgYXR0cmlidXRlIGlzIHNldC4gVGhpcyBhbGxvd3MgdGhlIGNvbnN0cnVjdGlvbiBvZiBDU1MgcnVsZXMgdGhhdFxuICAgKiB3aWxsIG9ubHkgYXBwbHkgdG8gZ2VuZXJpYyBjb21wb25lbnRzIGxpa2U6XG4gICAqXG4gICAqICAgICA6aG9zdChbZ2VuZXJpYz1cIlwiXSkge1xuICAgKiAgICAgICAuLi4gR2VuZXJpYyBhcHBlYXJhbmNlIGRlZmluZWQgaGVyZSAuLi5cbiAgICogICAgIH1cbiAgICpcbiAgICogVGhpcyBtYWtlcyBpdCBlYXN5IHRvIHJlbW92ZSBhbGwgZGVmYXVsdCBzdHlsaW5nIOKAlCBzZXQgdGhlIGBnZW5lcmljYFxuICAgKiBhdHRyaWJ1dGUgdG8gZmFsc2UsIGFuZCBhbGwgZGVmYXVsdCBzdHlsaW5nIHdpbGwgYmUgcmVtb3ZlZC5cbiAgICovXG4gIGNsYXNzIEdlbmVyaWMgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIC8vIFNldCBkZWZhdWx0cy5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5nZW5lcmljID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLmdlbmVyaWMgPSB0aGlzLmRlZmF1bHRzLmdlbmVyaWM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVGhpcyBtaXhpbiBkb2Vzbid0IGFjdHVhbGx5IHJlc3BvbmQgdG8gYXR0cmlidXRlIGNoYW5nZXMsIGJ1dCByZWxpZXNcbiAgICAvLyBvbiBzZXBhcmF0ZWx5LWRlZmluZWQgYmVoYXZpb3IgKGUuZy4sIGluIEF0dHJpYnV0ZU1hcnNoYWxsaW5nKSBmb3IgdGhhdC5cbiAgICAvLyBTdGlsbCwgd2UgbmVlZCBkZWZpbmUgYSBiYXNlbGluZSBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sgdGhhdCBkb2VzXG4gICAgLy8gbm90aGluZywgaW4gY2FzZSB0aGlzIG1peGluIGdldHMgdXNlZCBvbiBpdHMgb3duLlxuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcbiAgICAgIGlmIChzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2spIHsgc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSk7IH1cbiAgICB9XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jb25uZWN0ZWRDYWxsYmFjaykgeyBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpOyB9XG4gICAgICByZWZsZWN0QXR0cmlidXRlKHRoaXMpO1xuICAgIH1cblxuICAgIGdldCBkZWZhdWx0cygpIHtcbiAgICAgIGxldCBkZWZhdWx0cyA9IHN1cGVyLmRlZmF1bHRzIHx8IHt9O1xuICAgICAgZGVmYXVsdHMuZ2VuZXJpYyA9IHRydWU7XG4gICAgICByZXR1cm4gZGVmYXVsdHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiB0aGUgY29tcG9uZW50IHdvdWxkIGxpa2UgdG8gcmVjZWl2ZSBnZW5lcmljIHN0eWxpbmcuXG4gICAgICpcbiAgICAgKiBUaGlzIHByb3BlcnR5IGlzIHRydWUgYnkgZGVmYXVsdCDigJTCoHNldCBpdCB0byBmYWxzZSB0byB0dXJuIG9mZiBhbGxcbiAgICAgKiBnZW5lcmljIHN0eWxlcy4gVGhpcyBtYWtlcyBpdCBlYXNpZXIgdG8gYXBwbHkgY3VzdG9tIHN0eWxpbmc7IHlvdSB3b24ndFxuICAgICAqIGhhdmUgdG8gZXhwbGljaXRseSBvdmVycmlkZSBzdHlsaW5nIHlvdSBkb24ndCB3YW50LlxuICAgICAqXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKi9cbiAgICBnZXQgZ2VuZXJpYygpIHtcbiAgICAgIHJldHVybiB0aGlzW2dlbmVyaWNTeW1ib2xdO1xuICAgIH1cbiAgICBzZXQgZ2VuZXJpYyh2YWx1ZSkge1xuICAgICAgbGV0IHBhcnNlZCA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgP1xuICAgICAgICBTdHJpbmcodmFsdWUpICE9PSAnZmFsc2UnIDpcbiAgICAgICAgdmFsdWU7XG4gICAgICB0aGlzW2dlbmVyaWNTeW1ib2xdID0gcGFyc2VkO1xuICAgICAgaWYgKCdnZW5lcmljJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5nZW5lcmljID0gdmFsdWU7IH1cbiAgICBcbiAgICAgIHJlZmxlY3RBdHRyaWJ1dGUodGhpcyk7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gR2VuZXJpYztcbn07XG5cblxuLy8gV2Ugcm9sbCBvdXIgb3duIGF0dHJpYnV0ZSBzZXR0aW5nIHNvIHRoYXQgYW4gZXhwbGljaXRseSBmYWxzZSB2YWx1ZVxuLy8gc2hvd3MgdXAgYXMgZ2VuZXJpYz1cImZhbHNlXCIuXG5mdW5jdGlvbiByZWZsZWN0QXR0cmlidXRlKGVsZW1lbnQpIHtcbiAgaWYgKCFlbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgbGV0IGdlbmVyaWMgPSBlbGVtZW50LmdlbmVyaWM7XG4gIGlmIChnZW5lcmljID09PSBmYWxzZSkge1xuICAgIC8vIEV4cGxpY2l0bHkgdXNlIGZhbHNlIHN0cmluZy5cbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZ2VuZXJpYycsICdmYWxzZScpO1xuICB9IGVsc2UgaWYgKGdlbmVyaWMgPT0gbnVsbCkge1xuICAgIC8vIEV4cGxpY2l0bHkgcmVtb3ZlIGF0dHJpYnV0ZS5cbiAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZ2VuZXJpYycpO1xuICB9IGVsc2Uge1xuICAgIC8vIFVzZSB0aGUgZW1wdHkgc3RyaW5nIHRvIGdldCBhdHRyaWJ1dGUgdG8gYXBwZWFyIHdpdGggbm8gdmFsdWUuXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2dlbmVyaWMnLCAnJyk7XG4gIH1cbn1cbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi9jcmVhdGVTeW1ib2wnO1xuXG5cbi8vIFN5bWJvbHMgZm9yIHByaXZhdGUgZGF0YSBtZW1iZXJzIG9uIGFuIGVsZW1lbnQuXG5jb25zdCBrZXlkb3duTGlzdGVuZXJTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2tleWRvd25MaXN0ZW5lcicpO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggS2V5Ym9hcmQuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBtYW5hZ2VzIHRoZSBrZXlkb3duIGhhbmRsaW5nIGZvciBhIGNvbXBvbmVudC5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBoYW5kbGVzIHNldmVyYWwga2V5Ym9hcmQtcmVsYXRlZCBmZWF0dXJlcy5cbiAgICpcbiAgICogRmlyc3QsIGl0IHdpcmVzIHVwIGEgc2luZ2xlIGtleWRvd24gZXZlbnQgaGFuZGxlciB0aGF0IGNhbiBiZSBzaGFyZWQgYnlcbiAgICogbXVsdGlwbGUgbWl4aW5zIG9uIGEgY29tcG9uZW50LiBUaGUgZXZlbnQgaGFuZGxlciB3aWxsIGludm9rZSBhIGBrZXlkb3duYFxuICAgKiBtZXRob2Qgd2l0aCB0aGUgZXZlbnQgb2JqZWN0LCBhbmQgYW55IG1peGluIGFsb25nIHRoZSBwcm90b3R5cGUgY2hhaW4gdGhhdFxuICAgKiB3YW50cyB0byBoYW5kbGUgdGhhdCBtZXRob2QgY2FuIGRvIHNvLlxuICAgKlxuICAgKiBJZiBhIG1peGluIHdhbnRzIHRvIGluZGljYXRlIHRoYXQga2V5Ym9hcmQgZXZlbnQgaGFzIGJlZW4gaGFuZGxlZCwgYW5kIHRoYXRcbiAgICogb3RoZXIgbWl4aW5zIHNob3VsZCAqbm90KiBoYW5kbGUgaXQsIHRoZSBtaXhpbidzIGBrZXlkb3duYCBoYW5kbGVyIHNob3VsZFxuICAgKiByZXR1cm4gYSB2YWx1ZSBvZiB0cnVlLiBUaGUgY29udmVudGlvbiB0aGF0IHNlZW1zIHRvIHdvcmsgd2VsbCBpcyB0aGF0IGFcbiAgICogbWl4aW4gc2hvdWxkIHNlZSBpZiBpdCB3YW50cyB0byBoYW5kbGUgdGhlIGV2ZW50IGFuZCwgaWYgbm90LCB0aGVuIGFzayB0aGVcbiAgICogc3VwZXJjbGFzcyB0byBzZWUgaWYgaXQgd2FudHMgdG8gaGFuZGxlIHRoZSBldmVudC4gVGhpcyBoYXMgdGhlIGVmZmVjdCBvZlxuICAgKiBnaXZpbmcgdGhlIG1peGluIHRoYXQgd2FzIGFwcGxpZWQgbGFzdCB0aGUgZmlyc3QgY2hhbmNlIGF0IGhhbmRsaW5nIGFcbiAgICoga2V5Ym9hcmQgZXZlbnQuXG4gICAqXG4gICAqIEV4YW1wbGU6XG4gICAqXG4gICAqICAgICBrZXlkb3duKGV2ZW50KSB7XG4gICAqICAgICAgIGxldCBoYW5kbGVkO1xuICAgKiAgICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICogICAgICAgICAvLyBIYW5kbGUgdGhlIGtleXMgeW91IHdhbnQsIHNldHRpbmcgaGFuZGxlZCA9IHRydWUgaWYgYXBwcm9wcmlhdGUuXG4gICAqICAgICAgIH1cbiAgICogICAgICAgLy8gUHJlZmVyIG1peGluIHJlc3VsdCBpZiBpdCdzIGRlZmluZWQsIG90aGVyd2lzZSB1c2UgYmFzZSByZXN1bHQuXG4gICAqICAgICAgIHJldHVybiBoYW5kbGVkIHx8IChzdXBlci5rZXlkb3duICYmIHN1cGVyLmtleWRvd24oZXZlbnQpKTtcbiAgICogICAgIH1cbiAgICpcbiAgICogQSBzZWNvbmQgZmVhdHVyZSBwcm92aWRlZCBieSB0aGlzIG1peGluIGlzIHRoYXQgaXQgaW1wbGljaXRseSBtYWtlcyB0aGVcbiAgICogY29tcG9uZW50IGEgdGFiIHN0b3AgaWYgaXQgaXNuJ3QgYWxyZWFkeSwgYnkgc2V0dGluZyBgdGFiSW5kZXhgIHRvIDAuIFRoaXNcbiAgICogaGFzIHRoZSBlZmZlY3Qgb2YgYWRkaW5nIHRoZSBjb21wb25lbnQgdG8gdGhlIHRhYiBvcmRlciBpbiBkb2N1bWVudCBvcmRlci5cbiAgICpcbiAgICogRmluYWxseSwgdGhpcyBtaXhpbiBpcyBkZXNpZ25lZCB0byB3b3JrIHdpdGggdGhlIG9wdGlvbmFsXG4gICAqIFtDb2xsZWN0aXZlXShDb2xsZWN0aXZlLm1kKSBjbGFzcyB2aWEgYSBtaXhpbiBsaWtlXG4gICAqIFtUYXJnZXRJbkNvbGxlY3RpdmVdKFRhcmdldEluQ29sbGVjdGl2ZS5tZCkuIFRoaXMgYWxsb3dzIGEgc2V0IG9mIHJlbGF0ZWRcbiAgICogY29tcG9uZW50IGluc3RhbmNlcyB0byBjb29wZXJhdGl2ZWx5IGhhbmRsZSB0aGUga2V5Ym9hcmQuIFNlZSB0aGVcbiAgICogQ29sbGVjdGl2ZSBjbGFzcyBmb3IgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzIEtleWJvYXJkIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICAvLyBBc3N1bWUgdGhpcyBjb21wb25lbnQgaXMgZ29pbmcgdG8gaGFuZGxlIHRoZSBrZXlib2FyZCBvbiBpdHMgb3duLlxuICAgICAgLy8gUkVWSUVXOiBNb3ZlIHRvIGNvbm5lY3RlZENhbGxiYWNrP1xuICAgICAgc3RhcnRMaXN0ZW5pbmdUb0tleWRvd24odGhpcyk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBJZiB3ZSdyZSBub3cgdGhlIG91dGVybW9zdCBlbGVtZW50IG9mIHRoZSBjb2xsZWN0aXZlLCBzZXQgdXAgdG8gcmVjZWl2ZVxuICAgICAqIGtleWJvYXJkIGV2ZW50cy4gSWYgd2UncmUgbm8gbG9uZ2VyIHRoZSBvdXRlcm1vc3QgZWxlbWVudCwgc3RvcFxuICAgICAqIGxpc3RlbmluZy5cbiAgICAgKi9cbiAgICBjb2xsZWN0aXZlQ2hhbmdlZCgpIHtcbiAgICAgIGlmIChzdXBlci5jb2xsZWN0aXZlQ2hhbmdlZCkgeyBzdXBlci5jb2xsZWN0aXZlQ2hhbmdlZCgpOyB9XG5cbiAgICAgIGlmICh0aGlzLmNvbGxlY3RpdmUub3V0ZXJtb3N0RWxlbWVudCAhPT0gdGhpcykge1xuICAgICAgICAvLyBXZSdyZSBubyBsb25nZXIgdGhlIG91dGVybW9zdCBlbGVtZW50OyBzdG9wIGxpc3RlbmluZy5cbiAgICAgICAgaWYgKGlzTGlzdGVuaW5nVG9LZXlkb3duKHRoaXMpKSB7XG4gICAgICAgICAgc3RvcExpc3RlbmluZ1RvS2V5ZG93bih0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAvLyBTaW5jZSB3ZSdyZSBnb2luZyB0byBoYW5kbGUgdGhlIGtleWJvYXJkLCBzZWUgaWYgd2UgY2FuIGFkb3B0IGFuIEFSSUFcbiAgICAgICAgLy8gbGFiZWwgZnJvbSBhbiBpbm5lciBlbGVtZW50IG9mIHRoZSBjb2xsZWN0aXZlLlxuICAgICAgICBsZXQgbGFiZWwgPSBnZXRDb2xsZWN0aXZlQXJpYUxhYmVsKHRoaXMuY29sbGVjdGl2ZSk7XG4gICAgICAgIGlmIChsYWJlbCkge1xuICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgbGFiZWwpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNMaXN0ZW5pbmdUb0tleWRvd24odGhpcykpIHtcbiAgICAgICAgc3RhcnRMaXN0ZW5pbmdUb0tleWRvd24odGhpcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2spIHsgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTsgfVxuICAgICAgLy8gU2V0IGEgZGVmYXVsdCB0YWIgaW5kZXggb2YgMCAoZG9jdW1lbnQgb3JkZXIpIGlmIG5vIHRhYiBpbmRleCBleGlzdHMuXG4gICAgICAvLyBNUyBFZGdlIHJlcXVpcmVzIHdlIGV4cGxpY2l0bHkgY2hlY2sgZm9yIHByZXNlbmNlIG9mIHRhYmluZGV4IGF0dHJpYnV0ZS5cbiAgICAgIGlmICh0aGlzLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSA9PSBudWxsIHx8IHRoaXMudGFiSW5kZXggPCAwKSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIHRoZSBpbmRpY2F0ZWQga2V5Ym9hcmQgZXZlbnQuXG4gICAgICpcbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuIFRoaXMgd2lsbFxuICAgICAqIHR5cGljYWxseSBiZSBoYW5kbGVkIGJ5IG90aGVyIG1peGlucy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7S2V5Ym9hcmRFdmVudH0gZXZlbnQgLSB0aGUga2V5Ym9hcmQgZXZlbnRcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZSBldmVudCB3YXMgaGFuZGxlZFxuICAgICAqL1xuICAgIGtleWRvd24oZXZlbnQpIHtcbiAgICAgIGlmIChzdXBlci5rZXlkb3duKSB7IHJldHVybiBzdXBlci5rZXlkb3duKGV2ZW50KTsgfVxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIEtleWJvYXJkO1xufTtcblxuXG4vLyBGaXJlIHRoZSBrZXlkb3duKCkgbWV0aG9kIG9uIHRoZSBlbGVtZW50IG9yIChpZiBpdCBiZWxvbmdzIHRvIGEgY29sbGVjdGl2ZSlcbi8vIGFsbCBlbGVtZW50cyBpbiB0aGUgY29sbGVjdGl2ZS5cbi8vXG4vLyBOb3RlOiB0aGUgdmFsdWUgb2YgJ3RoaXMnIGlzIGJvdW5kIHRvIHRoZSBlbGVtZW50IHdoaWNoIHJlY2VpdmVkIHRoZSBldmVudC5cbmZ1bmN0aW9uIGtleWRvd24oZXZlbnQpIHtcblxuICBsZXQgaGFuZGxlZCA9IGZhbHNlO1xuXG4gIGlmICh0aGlzLmNvbGxlY3RpdmUpIHtcbiAgICAvLyBHaXZlIGNvbGxlY3RpdmUgZWxlbWVudHMgYSBzaG90IGF0IHRoZSBldmVudCwgd29ya2luZyBmcm9tIGlubmVybW9zdCB0b1xuICAgIC8vIG91dGVybW9zdCAodGhpcyBlbGVtZW50KS5cbiAgICBsZXQgZWxlbWVudHMgPSB0aGlzLmNvbGxlY3RpdmUuZWxlbWVudHM7XG4gICAgZm9yIChsZXQgaSA9IGVsZW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xuICAgICAgaGFuZGxlZCA9IGVsZW1lbnQua2V5ZG93biAmJiBlbGVtZW50LmtleWRvd24oZXZlbnQpO1xuICAgICAgaWYgKGhhbmRsZWQpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIENvbXBvbmVudCBpcyBoYW5kbGluZyB0aGUga2V5Ym9hcmQgb24gaXRzIG93bi5cbiAgICBoYW5kbGVkID0gdGhpcy5rZXlkb3duKGV2ZW50KTtcbiAgfVxuXG4gIGlmIChoYW5kbGVkKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxufVxuXG5cbi8vIFJldHVybiB0aGUgZmlyc3QgQVJJQSBsYWJlbCBkZWZpbmVkIGJ5IHRoZSBjb2xsZWN0aXZlLlxuZnVuY3Rpb24gZ2V0Q29sbGVjdGl2ZUFyaWFMYWJlbChjb2xsZWN0aXZlKSB7XG4gIGxldCBsYWJlbHMgPSBjb2xsZWN0aXZlLmVsZW1lbnRzLm1hcChlbGVtZW50ID0+IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJykpO1xuICAvLyBXb3VsZCBwcmVmZXIgdG8gdXNlIEFycmF5LnByb3RvdHlwZS5maW5kIGhlcmUsIGJ1dCBJRSAxMSBkb2Vzbid0IGhhdmUgaXQuXG4gIGxldCBub25OdWxsTGFiZWxzID0gbGFiZWxzLmZpbHRlcihsYWJlbCA9PiBsYWJlbCAhPSBudWxsKTtcbiAgcmV0dXJuIG5vbk51bGxMYWJlbHNbMF07XG59XG5cblxuZnVuY3Rpb24gaXNMaXN0ZW5pbmdUb0tleWRvd24oZWxlbWVudCkge1xuICByZXR1cm4gZWxlbWVudFtrZXlkb3duTGlzdGVuZXJTeW1ib2xdICE9IG51bGw7XG59XG5cblxuZnVuY3Rpb24gc3RhcnRMaXN0ZW5pbmdUb0tleWRvd24oZWxlbWVudCkge1xuICBlbGVtZW50W2tleWRvd25MaXN0ZW5lclN5bWJvbF0gPSBrZXlkb3duLmJpbmQoZWxlbWVudCk7XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGVsZW1lbnRba2V5ZG93bkxpc3RlbmVyU3ltYm9sXSk7XG59XG5cblxuZnVuY3Rpb24gc3RvcExpc3RlbmluZ1RvS2V5ZG93bihlbGVtZW50KSB7XG4gIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGVsZW1lbnRba2V5ZG93bkxpc3RlbmVyU3ltYm9sXSk7XG4gIGVsZW1lbnRba2V5ZG93bkxpc3RlbmVyU3ltYm9sXSA9IG51bGw7XG4gIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xufVxuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuL2NyZWF0ZVN5bWJvbCc7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IG5hdmlnYXRpb25BeGlzU3ltYm9sID0gY3JlYXRlU3ltYm9sKCduYXZpZ2F0aW9uQXhpcycpO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggS2V5Ym9hcmREaXJlY3Rpb24uICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBtYXBzIGRpcmVjdGlvbiBrZXlzIChMZWZ0LCBSaWdodCwgZXRjLikgdG8gZGlyZWN0aW9uIHNlbWFudGljc1xuICAgKiAoZ28gbGVmdCwgZ28gcmlnaHQsIGV0Yy4pLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGV4cGVjdHMgdGhlIGNvbXBvbmVudCB0byBpbnZva2UgYSBga2V5ZG93bmAgbWV0aG9kIHdoZW4gYSBrZXkgaXNcbiAgICogcHJlc3NlZC4gWW91IGNhbiB1c2UgdGhlIFtLZXlib2FyZF0oS2V5Ym9hcmQubWQpIG1peGluIGZvciB0aGF0IHB1cnBvc2UsIG9yXG4gICAqIHdpcmUgdXAgeW91ciBvd24ga2V5Ym9hcmQgaGFuZGxpbmcgYW5kIGNhbGwgYGtleWRvd25gIHlvdXJzZWxmLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGNhbGxzIG1ldGhvZHMgc3VjaCBhcyBgZ29MZWZ0YCBhbmQgYGdvUmlnaHRgLiBZb3UgY2FuIGRlZmluZVxuICAgKiB3aGF0IHRoYXQgbWVhbnMgYnkgaW1wbGVtZW50aW5nIHRob3NlIG1ldGhvZHMgeW91cnNlbGYuIElmIHlvdSB3YW50IHRvIHVzZVxuICAgKiBkaXJlY3Rpb24ga2V5cyB0byBuYXZpZ2F0ZSBhIHNlbGVjdGlvbiwgdXNlIHRoaXMgbWl4aW4gd2l0aCB0aGVcbiAgICogW0RpcmVjdGlvblNlbGVjdGlvbl0oRGlyZWN0aW9uU2VsZWN0aW9uLm1kKSBtaXhpbi5cbiAgICovXG4gIGNsYXNzIEtleWJvYXJkRGlyZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICAvLyBTZXQgZGVmYXVsdHMuXG4gICAgICBpZiAodHlwZW9mIHRoaXMubmF2aWdhdGlvbkF4aXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMubmF2aWdhdGlvbkF4aXMgPSB0aGlzLmRlZmF1bHRzLm5hdmlnYXRpb25BeGlzO1xuICAgICAgfVxuICAgIH1cblxuICAgIGdldCBkZWZhdWx0cygpIHtcbiAgICAgIGxldCBkZWZhdWx0cyA9IHN1cGVyLmRlZmF1bHRzIHx8IHt9O1xuICAgICAgZGVmYXVsdHMubmF2aWdhdGlvbkF4aXMgPSAnYm90aCc7XG4gICAgICByZXR1cm4gZGVmYXVsdHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIGRvd24uXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLlxuICAgICAqL1xuICAgIGdvRG93bigpIHtcbiAgICAgIGlmIChzdXBlci5nb0Rvd24pIHsgcmV0dXJuIHN1cGVyLmdvRG93bigpOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIHRvIHRoZSBlbmQgKGUuZy4sIG9mIGEgbGlzdCkuXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLlxuICAgICAqL1xuICAgIGdvRW5kKCkge1xuICAgICAgaWYgKHN1cGVyLmdvRW5kKSB7IHJldHVybiBzdXBlci5nb0VuZCgpOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIGxlZnQuXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLlxuICAgICAqL1xuICAgIGdvTGVmdCgpIHtcbiAgICAgIGlmIChzdXBlci5nb0xlZnQpIHsgcmV0dXJuIHN1cGVyLmdvTGVmdCgpOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIHJpZ2h0LlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy5cbiAgICAgKi9cbiAgICBnb1JpZ2h0KCkge1xuICAgICAgaWYgKHN1cGVyLmdvUmlnaHQpIHsgcmV0dXJuIHN1cGVyLmdvUmlnaHQoKTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSB0byB0aGUgc3RhcnQgKGUuZy4sIG9mIGFcbiAgICAgKiBsaXN0KS4gVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLlxuICAgICAqL1xuICAgIGdvU3RhcnQoKSB7XG4gICAgICBpZiAoc3VwZXIuZ29TdGFydCkgeyByZXR1cm4gc3VwZXIuZ29TdGFydCgpOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIHVwLlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy5cbiAgICAgKi9cbiAgICBnb1VwKCkge1xuICAgICAgaWYgKHN1cGVyLmdvVXApIHsgcmV0dXJuIHN1cGVyLmdvVXAoKTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB0aGUgZGlyZWN0aW9uIG9mIHBlcm1pdHRlZCBuYXZpZ2F0aW9uIHdpdGggdGhlIGtleWJvYXJkLlxuICAgICAqXG4gICAgICogQWNjZXB0ZWQgdmFsdWVzIGFyZSBcImhvcml6b250YWxcIiwgXCJ2ZXJ0aWNhbFwiLCBvciBcImJvdGhcIiAodGhlIGRlZmF1bHQpLlxuICAgICAqIElmIHRoaXMgcHJvcGVydHkgaXMgXCJob3Jpem9udGFsXCIsIHRoZSBVcCBBcnJvdyBhbmQgRG93biBBcnJvdyBrZXlzIHdpbGxcbiAgICAgKiBiZSBpZ25vcmVkLiBDb252ZXJzZWx5LCBpZiB0aGlzIGlzIFwidmVydGljYWxcIiwgdGhlIExlZnQgQXJyb3cgYW5kIFJpZ2h0XG4gICAgICogQXJyb3cga2V5cyB3aWxsIGJlIGlnbm9yZWQuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldCBuYXZpZ2F0aW9uQXhpcygpIHtcbiAgICAgIHJldHVybiB0aGlzW25hdmlnYXRpb25BeGlzU3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IG5hdmlnYXRpb25BeGlzKHZhbHVlKSB7XG4gICAgICB0aGlzW25hdmlnYXRpb25BeGlzU3ltYm9sXSA9IHZhbHVlO1xuICAgICAgaWYgKCduYXZpZ2F0aW9uQXhpcycgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIubmF2aWdhdGlvbkF4aXMgPSB2YWx1ZTsgfVxuICAgIH1cblxuICAgIGtleWRvd24oZXZlbnQpIHtcbiAgICAgIGxldCBoYW5kbGVkO1xuXG4gICAgICBsZXQgYXhpcyA9IHRoaXMubmF2aWdhdGlvbkF4aXM7XG4gICAgICBsZXQgaG9yaXpvbnRhbCA9IChheGlzID09PSAnaG9yaXpvbnRhbCcgfHwgYXhpcyA9PT0gJ2JvdGgnKTtcbiAgICAgIGxldCB2ZXJ0aWNhbCA9IChheGlzID09PSAndmVydGljYWwnIHx8IGF4aXMgPT09ICdib3RoJyk7XG5cbiAgICAgIC8vIElnbm9yZSBMZWZ0L1JpZ2h0IGtleXMgd2hlbiBtZXRhS2V5IG9yIGFsdEtleSBtb2RpZmllciBpcyBhbHNvIHByZXNzZWQsXG4gICAgICAvLyBhcyB0aGUgdXNlciBtYXkgYmUgdHJ5aW5nIHRvIG5hdmlnYXRlIGJhY2sgb3IgZm9yd2FyZCBpbiB0aGUgYnJvd3Nlci5cbiAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgICBjYXNlIDM1OiAvLyBFbmRcbiAgICAgICAgICBoYW5kbGVkID0gdGhpcy5nb0VuZCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM2OiAvLyBIb21lXG4gICAgICAgICAgaGFuZGxlZCA9IHRoaXMuZ29TdGFydCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM3OiAvLyBMZWZ0XG4gICAgICAgICAgaWYgKGhvcml6b250YWwgJiYgIWV2ZW50Lm1ldGFLZXkgJiYgIWV2ZW50LmFsdEtleSkge1xuICAgICAgICAgICAgaGFuZGxlZCA9IHRoaXMuZ29MZWZ0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM4OiAvLyBVcFxuICAgICAgICAgIGlmICh2ZXJ0aWNhbCkge1xuICAgICAgICAgICAgaGFuZGxlZCA9IGV2ZW50LmFsdEtleSA/IHRoaXMuZ29TdGFydCgpIDogdGhpcy5nb1VwKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM5OiAvLyBSaWdodFxuICAgICAgICAgIGlmIChob3Jpem9udGFsICYmICFldmVudC5tZXRhS2V5ICYmICFldmVudC5hbHRLZXkpIHtcbiAgICAgICAgICAgIGhhbmRsZWQgPSB0aGlzLmdvUmlnaHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDA6IC8vIERvd25cbiAgICAgICAgICBpZiAodmVydGljYWwpIHtcbiAgICAgICAgICAgIGhhbmRsZWQgPSBldmVudC5hbHRLZXkgPyB0aGlzLmdvRW5kKCkgOiB0aGlzLmdvRG93bigpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIC8vIFByZWZlciBtaXhpbiByZXN1bHQgaWYgaXQncyBkZWZpbmVkLCBvdGhlcndpc2UgdXNlIGJhc2UgcmVzdWx0LlxuICAgICAgcmV0dXJuIGhhbmRsZWQgfHwgKHN1cGVyLmtleWRvd24gJiYgc3VwZXIua2V5ZG93bihldmVudCkpO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIEtleWJvYXJkRGlyZWN0aW9uO1xufTtcbiIsIi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggS2V5Ym9hcmRQYWdlZFNlbGVjdGlvbi4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIG1hcHMgcGFnZSBrZXlzIChQYWdlIFVwLCBQYWdlIERvd24pIGludG8gb3BlcmF0aW9ucyB0aGF0IG1vdmVcbiAgICogdGhlIHNlbGVjdGlvbiBieSBvbmUgcGFnZS5cbiAgICpcbiAgICogVGhlIGtleWJvYXJkIGludGVyYWN0aW9uIG1vZGVsIGdlbmVyYWxseSBmb2xsb3dzIHRoYXQgb2YgTWljcm9zb2Z0IFdpbmRvd3MnXG4gICAqIGxpc3QgYm94ZXMgaW5zdGVhZCBvZiB0aG9zZSBpbiBPUyBYOlxuICAgKlxuICAgKiAqIFRoZSBQYWdlIFVwL0Rvd24gYW5kIEhvbWUvRW5kIGtleXMgYWN0dWFsbHkgY2hhbmdlIHRoZSBzZWxlY3Rpb24sIHJhdGhlclxuICAgKiAgIHRoYW4ganVzdCBzY3JvbGxpbmcuIFRoZSBmb3JtZXIgYmVoYXZpb3Igc2VlbXMgbW9yZSBnZW5lcmFsbHkgdXNlZnVsIGZvclxuICAgKiAgIGtleWJvYXJkIHVzZXJzLlxuICAgKlxuICAgKiAqIFByZXNzaW5nIFBhZ2UgVXAvRG93biB3aWxsIGNoYW5nZSB0aGUgc2VsZWN0aW9uIHRvIHRoZSB0b3Btb3N0L2JvdHRvbW1vc3RcbiAgICogICB2aXNpYmxlIGl0ZW0gaWYgdGhlIHNlbGVjdGlvbiBpcyBub3QgYWxyZWFkeSB0aGVyZS4gVGhlcmVhZnRlciwgdGhlIGtleVxuICAgKiAgIHdpbGwgbW92ZSB0aGUgc2VsZWN0aW9uIHVwL2Rvd24gYnkgYSBwYWdlLCBhbmQgKHBlciB0aGUgYWJvdmUgcG9pbnQpIG1ha2VcbiAgICogICB0aGUgc2VsZWN0ZWQgaXRlbSB2aXNpYmxlLlxuICAgKlxuICAgKiBUbyBlbnN1cmUgdGhlIHNlbGVjdGVkIGl0ZW0gaXMgaW4gdmlldyBmb2xsb3dpbmcgdXNlIG9mIFBhZ2UgVXAvRG93biwgdXNlXG4gICAqIHRoZSByZWxhdGVkIFtTZWxlY3Rpb25JblZpZXddKFNlbGVjdGlvbkluVmlldy5tZCkgbWl4aW4uXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyB0aGUgY29tcG9uZW50IHRvIGludm9rZSBhIGBrZXlkb3duYCBtZXRob2Qgd2hlbiBhIGtleSBpc1xuICAgKiBwcmVzc2VkLiBZb3UgY2FuIHVzZSB0aGUgW0tleWJvYXJkXShLZXlib2FyZC5tZCkgbWl4aW4gZm9yIHRoYXQgcHVycG9zZSwgb3JcbiAgICogd2lyZSB1cCB5b3VyIG93biBrZXlib2FyZCBoYW5kbGluZyBhbmQgY2FsbCBga2V5ZG93bmAgeW91cnNlbGYuXG4gICAqL1xuICBjbGFzcyBLZXlib2FyZFBhZ2VkU2VsZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBrZXlkb3duKGV2ZW50KSB7XG4gICAgICBsZXQgaGFuZGxlZDtcbiAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgICBjYXNlIDMzOiAvLyBQYWdlIFVwXG4gICAgICAgICAgaGFuZGxlZCA9IHRoaXMucGFnZVVwKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzQ6IC8vIFBhZ2UgRG93blxuICAgICAgICAgIGhhbmRsZWQgPSB0aGlzLnBhZ2VEb3duKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICAvLyBQcmVmZXIgbWl4aW4gcmVzdWx0IGlmIGl0J3MgZGVmaW5lZCwgb3RoZXJ3aXNlIHVzZSBiYXNlIHJlc3VsdC5cbiAgICAgIHJldHVybiBoYW5kbGVkIHx8IChzdXBlci5rZXlkb3duICYmIHN1cGVyLmtleWRvd24oZXZlbnQpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTY3JvbGwgZG93biBvbmUgcGFnZS5cbiAgICAgKi9cbiAgICBwYWdlRG93bigpIHtcbiAgICAgIGlmIChzdXBlci5wYWdlRG93bikgeyBzdXBlci5wYWdlRG93bigpOyB9XG4gICAgICByZXR1cm4gc2Nyb2xsT25lUGFnZSh0aGlzLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTY3JvbGwgdXAgb25lIHBhZ2UuXG4gICAgICovXG4gICAgcGFnZVVwKCkge1xuICAgICAgaWYgKHN1cGVyLnBhZ2VVcCkgeyBzdXBlci5wYWdlVXAoKTsgfVxuICAgICAgcmV0dXJuIHNjcm9sbE9uZVBhZ2UodGhpcywgZmFsc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBlbGVtZW50IHRoYXQgc2hvdWxkIGJlIHNjcm9sbGVkIHdpdGggdGhlIFBhZ2UgVXAvRG93biBrZXlzLlxuICAgICAqIERlZmF1bHQgaXMgdGhlIGN1cnJlbnQgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICBnZXQgc2Nyb2xsVGFyZ2V0KCkge1xuICAgICAgLy8gUHJlZmVyIGJhc2UgcmVzdWx0LlxuICAgICAgcmV0dXJuICdzY3JvbGxUYXJnZXQnIGluIGJhc2UucHJvdG90eXBlID8gc3VwZXIuc2Nyb2xsVGFyZ2V0IDogdGhpcztcbiAgICB9XG4gICAgc2V0IHNjcm9sbFRhcmdldChlbGVtZW50KSB7XG4gICAgICBpZiAoJ3Njcm9sbFRhcmdldCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2Nyb2xsVGFyZ2V0ID0gZWxlbWVudDsgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBLZXlib2FyZFBhZ2VkU2VsZWN0aW9uO1xufTtcblxuXG4vLyBSZXR1cm4gdGhlIGl0ZW0gd2hvc2UgY29udGVudCBzcGFucyB0aGUgZ2l2ZW4geSBwb3NpdGlvbiAocmVsYXRpdmUgdG8gdGhlXG4vLyB0b3Agb2YgdGhlIGxpc3QncyBzY3JvbGxpbmcgY2xpZW50IGFyZWEpLCBvciBudWxsIGlmIG5vdCBmb3VuZC5cbi8vXG4vLyBJZiBkb3dud2FyZCBpcyB0cnVlLCBtb3ZlIGRvd24gdGhlIGxpc3Qgb2YgaXRlbXMgdG8gZmluZCB0aGUgZmlyc3QgaXRlbVxuLy8gZm91bmQgYXQgdGhlIGdpdmVuIHkgcG9zaXRpb247IGlmIGRvd253YXJkIGlzIGZhbHNlLCBtb3ZlIHVwIHRoZSBsaXN0IG9mXG4vLyBpdGVtcyB0byBmaW5kIHRoZSBsYXN0IGl0ZW0gYXQgdGhhdCBwb3NpdGlvbi5cbmZ1bmN0aW9uIGdldEluZGV4T2ZJdGVtQXRZKGVsZW1lbnQsIHksIGRvd253YXJkKSB7XG4gIGxldCBpdGVtcyA9IGVsZW1lbnQuaXRlbXM7XG4gIGxldCBzdGFydCA9IGRvd253YXJkID8gMCA6IGl0ZW1zLmxlbmd0aCAtIDE7XG4gIGxldCBlbmQgPSBkb3dud2FyZCA/IGl0ZW1zLmxlbmd0aCA6IDA7XG4gIGxldCBzdGVwID0gZG93bndhcmQgPyAxIDogLTE7XG4gIGxldCBzY3JvbGxUYXJnZXQgPSBlbGVtZW50LnNjcm9sbFRhcmdldDtcbiAgbGV0IHRvcE9mQ2xpZW50QXJlYSA9IHNjcm9sbFRhcmdldC5vZmZzZXRUb3AgKyBzY3JvbGxUYXJnZXQuY2xpZW50VG9wO1xuXG4gIC8vIEZpbmQgdGhlIGl0ZW0gc3Bhbm5pbmcgdGhlIGluZGljYXRlZCB5IGNvb3JkaW5hdGUuXG4gIGxldCBpdGVtO1xuICBsZXQgaXRlbUluZGV4ID0gc3RhcnQ7XG4gIGxldCBpdGVtVG9wO1xuICBsZXQgZm91bmQgPSBmYWxzZTtcbiAgd2hpbGUgKGl0ZW1JbmRleCAhPT0gZW5kKSB7XG4gICAgaXRlbSA9IGl0ZW1zW2l0ZW1JbmRleF07XG4gICAgaXRlbVRvcCA9IGl0ZW0ub2Zmc2V0VG9wIC0gdG9wT2ZDbGllbnRBcmVhO1xuICAgIGxldCBpdGVtQm90dG9tID0gaXRlbVRvcCArIGl0ZW0ub2Zmc2V0SGVpZ2h0O1xuICAgIGlmIChpdGVtVG9wIDw9IHkgJiYgaXRlbUJvdHRvbSA+PSB5KSB7XG4gICAgICAvLyBJdGVtIHNwYW5zIHRoZSBpbmRpY2F0ZWQgeSBjb29yZGluYXRlLlxuICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGl0ZW1JbmRleCArPSBzdGVwO1xuICB9XG5cbiAgaWYgKCFmb3VuZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLy8gV2UgbWF5IGhhdmUgZm91bmQgYW4gaXRlbSB3aG9zZSBwYWRkaW5nIHNwYW5zIHRoZSBnaXZlbiB5IGNvb3JkaW5hdGUsXG4gIC8vIGJ1dCB3aG9zZSBjb250ZW50IGlzIGFjdHVhbGx5IGFib3ZlL2JlbG93IHRoYXQgcG9pbnQuXG4gIC8vIFRPRE86IElmIHRoZSBpdGVtIGhhcyBhIGJvcmRlciwgdGhlbiBwYWRkaW5nIHNob3VsZCBiZSBpbmNsdWRlZCBpblxuICAvLyBjb25zaWRlcmluZyBhIGhpdC5cbiAgbGV0IGl0ZW1TdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoaXRlbSk7XG4gIGxldCBpdGVtUGFkZGluZ1RvcCA9IHBhcnNlRmxvYXQoaXRlbVN0eWxlLnBhZGRpbmdUb3ApO1xuICBsZXQgaXRlbVBhZGRpbmdCb3R0b20gPSBwYXJzZUZsb2F0KGl0ZW1TdHlsZS5wYWRkaW5nQm90dG9tKTtcbiAgbGV0IGNvbnRlbnRUb3AgPSBpdGVtVG9wICsgaXRlbS5jbGllbnRUb3AgKyBpdGVtUGFkZGluZ1RvcDtcbiAgbGV0IGNvbnRlbnRCb3R0b20gPSBjb250ZW50VG9wICsgaXRlbS5jbGllbnRIZWlnaHQgLSBpdGVtUGFkZGluZ1RvcCAtIGl0ZW1QYWRkaW5nQm90dG9tO1xuICBpZiAoZG93bndhcmQgJiYgY29udGVudFRvcCA8PSB5IHx8ICFkb3dud2FyZCAmJiBjb250ZW50Qm90dG9tID49IHkpIHtcbiAgICAvLyBUaGUgaW5kaWNhdGVkIGNvb3JkaW5hdGUgaGl0cyB0aGUgYWN0dWFsIGl0ZW0gY29udGVudC5cbiAgICByZXR1cm4gaXRlbUluZGV4O1xuICB9XG4gIGVsc2Uge1xuICAgIC8vIFRoZSBpbmRpY2F0ZWQgY29vcmRpbmF0ZSBmYWxscyB3aXRoaW4gdGhlIGl0ZW0ncyBwYWRkaW5nLiBCYWNrIHVwIHRvXG4gICAgLy8gdGhlIGl0ZW0gYmVsb3cvYWJvdmUgdGhlIGl0ZW0gd2UgZm91bmQgYW5kIHJldHVybiB0aGF0LlxuICAgIHJldHVybiBpdGVtSW5kZXggLSBzdGVwO1xuICB9XG59XG5cbi8vIE1vdmUgYnkgb25lIHBhZ2UgZG93bndhcmQgKGlmIGRvd253YXJkIGlzIHRydWUpLCBvciB1cHdhcmQgKGlmIGZhbHNlKS5cbi8vIFJldHVybiB0cnVlIGlmIHdlIGVuZGVkIHVwIGNoYW5naW5nIHRoZSBzZWxlY3Rpb24sIGZhbHNlIGlmIG5vdC5cbi8vIFRPRE86IEJldHRlciBzdXBwb3J0IGZvciBob3Jpem9udGFsIGxpc3RzLlxuZnVuY3Rpb24gc2Nyb2xsT25lUGFnZShlbGVtZW50LCBkb3dud2FyZCkge1xuXG4gIC8vIERldGVybWluZSB0aGUgaXRlbSB2aXNpYmxlIGp1c3QgYXQgdGhlIGVkZ2Ugb2YgZGlyZWN0aW9uIHdlJ3JlIGhlYWRpbmcuXG4gIC8vIFdlJ2xsIHNlbGVjdCB0aGF0IGl0ZW0gaWYgaXQncyBub3QgYWxyZWFkeSBzZWxlY3RlZC5cbiAgbGV0IHNjcm9sbFRhcmdldCA9IGVsZW1lbnQuc2Nyb2xsVGFyZ2V0O1xuICBsZXQgZWRnZSA9IHNjcm9sbFRhcmdldC5zY3JvbGxUb3AgKyAoZG93bndhcmQgPyBzY3JvbGxUYXJnZXQuY2xpZW50SGVpZ2h0IDogMCk7XG4gIGxldCBpbmRleE9mSXRlbUF0RWRnZSA9IGdldEluZGV4T2ZJdGVtQXRZKGVsZW1lbnQsIGVkZ2UsIGRvd253YXJkKTtcblxuICBsZXQgc2VsZWN0ZWRJbmRleCA9IGVsZW1lbnQuc2VsZWN0ZWRJbmRleDtcbiAgbGV0IG5ld0luZGV4O1xuICBpZiAoaW5kZXhPZkl0ZW1BdEVkZ2UgJiYgc2VsZWN0ZWRJbmRleCA9PT0gaW5kZXhPZkl0ZW1BdEVkZ2UpIHtcbiAgICAvLyBUaGUgaXRlbSBhdCB0aGUgZWRnZSB3YXMgYWxyZWFkeSBzZWxlY3RlZCwgc28gc2Nyb2xsIGluIHRoZSBpbmRpY2F0ZWRcbiAgICAvLyBkaXJlY3Rpb24gYnkgb25lIHBhZ2UuIExlYXZlIHRoZSBuZXcgaXRlbSBhdCB0aGF0IGVkZ2Ugc2VsZWN0ZWQuXG4gICAgbGV0IGRlbHRhID0gKGRvd253YXJkID8gMSA6IC0xKSAqIHNjcm9sbFRhcmdldC5jbGllbnRIZWlnaHQ7XG4gICAgbmV3SW5kZXggPSBnZXRJbmRleE9mSXRlbUF0WShlbGVtZW50LCBlZGdlICsgZGVsdGEsIGRvd253YXJkKTtcbiAgfVxuICBlbHNlIHtcbiAgICAvLyBUaGUgaXRlbSBhdCB0aGUgZWRnZSB3YXNuJ3Qgc2VsZWN0ZWQgeWV0LiBJbnN0ZWFkIG9mIHNjcm9sbGluZywgd2UnbGxcbiAgICAvLyBqdXN0IHNlbGVjdCB0aGF0IGl0ZW0uIFRoYXQgaXMsIHRoZSBmaXJzdCBhdHRlbXB0IHRvIHBhZ2UgdXAvZG93blxuICAgIC8vIHVzdWFsbHkganVzdCBtb3ZlcyB0aGUgc2VsZWN0aW9uIHRvIHRoZSBlZGdlIGluIHRoYXQgZGlyZWN0aW9uLlxuICAgIG5ld0luZGV4ID0gaW5kZXhPZkl0ZW1BdEVkZ2U7XG4gIH1cblxuICBpZiAoIW5ld0luZGV4KSB7XG4gICAgLy8gV2UgY2FuJ3QgZmluZCBhbiBpdGVtIGluIHRoZSBkaXJlY3Rpb24gd2Ugd2FudCB0byB0cmF2ZWwuIFNlbGVjdCB0aGVcbiAgICAvLyBsYXN0IGl0ZW0gKGlmIG1vdmluZyBkb3dud2FyZCkgb3IgZmlyc3QgaXRlbSAoaWYgbW92aW5nIHVwd2FyZCkuXG4gICAgbmV3SW5kZXggPSAoZG93bndhcmQgPyBlbGVtZW50Lml0ZW1zLmxlbmd0aCAtIDEgOiAwKTtcbiAgfVxuXG4gIGlmIChuZXdJbmRleCAhPT0gc2VsZWN0ZWRJbmRleCkge1xuICAgIGVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9IG5ld0luZGV4O1xuICAgIHJldHVybiB0cnVlOyAvLyBXZSBoYW5kbGVkIHRoZSBwYWdlIHVwL2Rvd24gb3Vyc2VsdmVzLlxuICB9XG4gIGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTsgLy8gV2UgZGlkbid0IGRvIGFueXRoaW5nLlxuICB9XG59XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4vY3JlYXRlU3ltYm9sJztcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3QgaXRlbVRleHRDb250ZW50c1N5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnaXRlbVRleHRDb250ZW50cycpO1xuY29uc3QgdHlwZWRQcmVmaXhTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3R5cGVkUHJlZml4Jyk7XG5jb25zdCBwcmVmaXhUaW1lb3V0U3ltYm9sID0gY3JlYXRlU3ltYm9sKCdwcmVmaXhUaW1lb3V0Jyk7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBLZXlib2FyZFByZWZpeFNlbGVjdGlvbi4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHRoYXQgaGFuZGxlcyBsaXN0IGJveC1zdHlsZSBwcmVmaXggdHlwaW5nLCBpbiB3aGljaCB0aGUgdXNlciBjYW4gdHlwZVxuICAgKiBhIHN0cmluZyB0byBzZWxlY3QgdGhlIGZpcnN0IGl0ZW0gdGhhdCBiZWdpbnMgd2l0aCB0aGF0IHN0cmluZy5cbiAgICpcbiAgICogRXhhbXBsZTogc3VwcG9zZSBhIGNvbXBvbmVudCB1c2luZyB0aGlzIG1peGluIGhhcyB0aGUgZm9sbG93aW5nIGl0ZW1zOlxuICAgKlxuICAgKiAgICAgPHNhbXBsZS1saXN0LWNvbXBvbmVudD5cbiAgICogICAgICAgPGRpdj5BcHBsZTwvZGl2PlxuICAgKiAgICAgICA8ZGl2PkFwcmljb3Q8L2Rpdj5cbiAgICogICAgICAgPGRpdj5CYW5hbmE8L2Rpdj5cbiAgICogICAgICAgPGRpdj5CbGFja2JlcnJ5PC9kaXY+XG4gICAqICAgICAgIDxkaXY+Qmx1ZWJlcnJ5PC9kaXY+XG4gICAqICAgICAgIDxkaXY+Q2FudGFsb3VwZTwvZGl2PlxuICAgKiAgICAgICA8ZGl2PkNoZXJyeTwvZGl2PlxuICAgKiAgICAgICA8ZGl2PkxlbW9uPC9kaXY+XG4gICAqICAgICAgIDxkaXY+TGltZTwvZGl2PlxuICAgKiAgICAgPC9zYW1wbGUtbGlzdC1jb21wb25lbnQ+XG4gICAqXG4gICAqIElmIHRoaXMgY29tcG9uZW50IHJlY2VpdmVzIHRoZSBmb2N1cywgYW5kIHRoZSB1c2VyIHByZXNzZXMgdGhlIFwiYlwiIG9yIFwiQlwiXG4gICAqIGtleSwgdGhlIFwiQmFuYW5hXCIgaXRlbSB3aWxsIGJlIHNlbGVjdGVkLCBiZWNhdXNlIGl0J3MgdGhlIGZpcnN0IGl0ZW0gdGhhdFxuICAgKiBtYXRjaGVzIHRoZSBwcmVmaXggXCJiXCIuIChNYXRjaGluZyBpcyBjYXNlLWluc2Vuc2l0aXZlLikgSWYgdGhlIHVzZXIgbm93XG4gICAqIHByZXNzZXMgdGhlIFwibFwiIG9yIFwiTFwiIGtleSBxdWlja2x5LCB0aGUgcHJlZml4IHRvIG1hdGNoIGJlY29tZXMgXCJibFwiLCBzb1xuICAgKiBcIkJsYWNrYmVycnlcIiB3aWxsIGJlIHNlbGVjdGVkLlxuICAgKlxuICAgKiBUaGUgcHJlZml4IHR5cGluZyBmZWF0dXJlIGhhcyBhIG9uZSBzZWNvbmQgdGltZW91dCDigJTCoHRoZSBwcmVmaXggdG8gbWF0Y2hcbiAgICogd2lsbCBiZSByZXNldCBhZnRlciBhIHNlY29uZCBoYXMgcGFzc2VkIHNpbmNlIHRoZSB1c2VyIGxhc3QgdHlwZWQgYSBrZXkuXG4gICAqIElmLCBpbiB0aGUgYWJvdmUgZXhhbXBsZSwgdGhlIHVzZXIgd2FpdHMgYSBzZWNvbmQgYmV0d2VlbiB0eXBpbmcgXCJiXCIgYW5kXG4gICAqIFwibFwiLCB0aGUgcHJlZml4IHdpbGwgYmVjb21lIFwibFwiLCBzbyBcIkxlbW9uXCIgd291bGQgYmUgc2VsZWN0ZWQuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyB0aGUgY29tcG9uZW50IHRvIGludm9rZSBhIGBrZXlkb3duYCBtZXRob2Qgd2hlbiBhIGtleSBpc1xuICAgKiBwcmVzc2VkLiBZb3UgY2FuIHVzZSB0aGUgW0tleWJvYXJkXShLZXlib2FyZC5tZCkgbWl4aW4gZm9yIHRoYXQgcHVycG9zZSwgb3JcbiAgICogd2lyZSB1cCB5b3VyIG93biBrZXlib2FyZCBoYW5kbGluZyBhbmQgY2FsbCBga2V5ZG93bmAgeW91cnNlbGYuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gYWxzbyBleHBlY3RzIHRoZSBjb21wb25lbnQgdG8gcHJvdmlkZSBhbiBgaXRlbXNgIHByb3BlcnR5LiBUaGVcbiAgICogYHRleHRDb250ZW50YCBvZiB0aG9zZSBpdGVtcyB3aWxsIGJlIHVzZWQgZm9yIHB1cnBvc2VzIG9mIHByZWZpeCBtYXRjaGluZy5cbiAgICovXG4gIGNsYXNzIEtleWJvYXJkUHJlZml4U2VsZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgICAvLyBUT0RPOiBJZiB0aGUgc2V0IG9mIGl0ZW1zIGlzIGNoYW5nZWQsIHJlc2V0IHRoZSBwcmVmaXguXG4gICAgLy8gaXRlbXNDaGFuZ2VkKCkge1xuICAgIC8vICAgdGhpc1tpdGVtVGV4dENvbnRlbnRzU3ltYm9sXSA9IG51bGw7XG4gICAgLy8gICByZXNldFR5cGVkUHJlZml4KHRoaXMpO1xuICAgIC8vIH1cblxuICAgIC8vIFRPRE86IElmIHRoZSBzZWxlY3Rpb24gaXMgY2hhbmdlZCBieSBzb21lIG90aGVyIG1lYW5zIChlLmcuLCBhcnJvdyBrZXlzKVxuICAgIC8vIG90aGVyIHRoYW4gcHJlZml4IHR5cGluZywgdGhlbiB0aGF0IGFjdCBzaG91bGQgcmVzZXQgdGhlIHByZWZpeC5cblxuICAgIGtleWRvd24oZXZlbnQpIHtcbiAgICAgIGxldCBoYW5kbGVkO1xuICAgICAgbGV0IHJlc2V0UHJlZml4ID0gdHJ1ZTtcblxuICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgIGNhc2UgODogLy8gQmFja3NwYWNlXG4gICAgICAgICAgaGFuZGxlQmFja3NwYWNlKHRoaXMpO1xuICAgICAgICAgIGhhbmRsZWQgPSB0cnVlO1xuICAgICAgICAgIHJlc2V0UHJlZml4ID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjc6IC8vIEVzY2FwZVxuICAgICAgICAgIGhhbmRsZWQgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGlmICghZXZlbnQuY3RybEtleSAmJiAhZXZlbnQubWV0YUtleSAmJiAhZXZlbnQuYWx0S2V5ICYmXG4gICAgICAgICAgICAgIGV2ZW50LndoaWNoICE9PSAzMiAvKiBTcGFjZSAqLykge1xuICAgICAgICAgICAgaGFuZGxlUGxhaW5DaGFyYWN0ZXIodGhpcywgU3RyaW5nLmZyb21DaGFyQ29kZShldmVudC53aGljaCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXNldFByZWZpeCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVzZXRQcmVmaXgpIHtcbiAgICAgICAgcmVzZXRUeXBlZFByZWZpeCh0aGlzKTtcbiAgICAgIH1cblxuICAgICAgLy8gUHJlZmVyIG1peGluIHJlc3VsdCBpZiBpdCdzIGRlZmluZWQsIG90aGVyd2lzZSB1c2UgYmFzZSByZXN1bHQuXG4gICAgICByZXR1cm4gaGFuZGxlZCB8fCAoc3VwZXIua2V5ZG93biAmJiBzdXBlci5rZXlkb3duKGV2ZW50KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IHRoZSBmaXJzdCBpdGVtIHdob3NlIHRleHQgY29udGVudCBiZWdpbnMgd2l0aCB0aGUgZ2l2ZW4gcHJlZml4LlxuICAgICAqXG4gICAgICogQHBhcmFtIHByZWZpeCBbU3RyaW5nXSBUaGUgcHJlZml4IHN0cmluZyB0byBzZWFyY2ggZm9yXG4gICAgICovXG4gICAgc2VsZWN0SXRlbVdpdGhUZXh0UHJlZml4KHByZWZpeCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdEl0ZW1XaXRoVGV4dFByZWZpeCkgeyBzdXBlci5zZWxlY3RJdGVtV2l0aFRleHRQcmVmaXgocHJlZml4KTsgfVxuICAgICAgaWYgKHByZWZpeCA9PSBudWxsIHx8IHByZWZpeC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGV0IGluZGV4ID0gZ2V0SW5kZXhPZkl0ZW1XaXRoVGV4dFByZWZpeCh0aGlzLCBwcmVmaXgpO1xuICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gS2V5Ym9hcmRQcmVmaXhTZWxlY3Rpb247XG59O1xuXG5cbi8vIFRpbWUgaW4gbWlsbGlzZWNvbmRzIGFmdGVyIHdoaWNoIHRoZSB1c2VyIGlzIGNvbnNpZGVyZWQgdG8gaGF2ZSBzdG9wcGVkXG4vLyB0eXBpbmcuXG5jb25zdCBQUkVGSVhfVElNRU9VVF9EVVJBVElPTiA9IDEwMDA7XG5cblxuLy8gUmV0dXJuIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgaXRlbSB3aXRoIHRoZSBnaXZlbiBwcmVmaXgsIGVsc2UgLTEuXG5mdW5jdGlvbiBnZXRJbmRleE9mSXRlbVdpdGhUZXh0UHJlZml4KGVsZW1lbnQsIHByZWZpeCkge1xuICBsZXQgaXRlbVRleHRDb250ZW50cyA9IGdldEl0ZW1UZXh0Q29udGVudHMoZWxlbWVudCk7XG4gIGxldCBwcmVmaXhMZW5ndGggPSBwcmVmaXgubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1UZXh0Q29udGVudHMubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgaXRlbVRleHRDb250ZW50ID0gaXRlbVRleHRDb250ZW50c1tpXTtcbiAgICBpZiAoaXRlbVRleHRDb250ZW50LnN1YnN0cigwLCBwcmVmaXhMZW5ndGgpID09PSBwcmVmaXgpIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbi8vIFJldHVybiBhbiBhcnJheSBvZiB0aGUgdGV4dCBjb250ZW50IChpbiBsb3dlcmNhc2UpIG9mIGFsbCBpdGVtcy5cbi8vIENhY2hlIHRoZXNlIHJlc3VsdHMuXG5mdW5jdGlvbiBnZXRJdGVtVGV4dENvbnRlbnRzKGVsZW1lbnQpIHtcbiAgaWYgKCFlbGVtZW50W2l0ZW1UZXh0Q29udGVudHNTeW1ib2xdKSB7XG4gICAgbGV0IGl0ZW1zID0gZWxlbWVudC5pdGVtcztcbiAgICBlbGVtZW50W2l0ZW1UZXh0Q29udGVudHNTeW1ib2xdID0gaXRlbXMubWFwKGNoaWxkID0+IHtcbiAgICAgIGxldCB0ZXh0ID0gY2hpbGQudGV4dENvbnRlbnQgfHwgY2hpbGQuYWx0O1xuICAgICAgcmV0dXJuIHRleHQudG9Mb3dlckNhc2UoKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gZWxlbWVudFtpdGVtVGV4dENvbnRlbnRzU3ltYm9sXTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlQmFja3NwYWNlKGVsZW1lbnQpIHtcbiAgbGV0IGxlbmd0aCA9IGVsZW1lbnRbdHlwZWRQcmVmaXhTeW1ib2xdID8gZWxlbWVudFt0eXBlZFByZWZpeFN5bWJvbF0ubGVuZ3RoIDogMDtcbiAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICBlbGVtZW50W3R5cGVkUHJlZml4U3ltYm9sXSA9IGVsZW1lbnRbdHlwZWRQcmVmaXhTeW1ib2xdLnN1YnN0cigwLCBsZW5ndGggLSAxKTtcbiAgfVxuICBlbGVtZW50LnNlbGVjdEl0ZW1XaXRoVGV4dFByZWZpeChlbGVtZW50W3R5cGVkUHJlZml4U3ltYm9sXSk7XG4gIHNldFByZWZpeFRpbWVvdXQoZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVBsYWluQ2hhcmFjdGVyKGVsZW1lbnQsIGNoYXIpIHtcbiAgbGV0IHByZWZpeCA9IGVsZW1lbnRbdHlwZWRQcmVmaXhTeW1ib2xdIHx8ICcnO1xuICBlbGVtZW50W3R5cGVkUHJlZml4U3ltYm9sXSA9IHByZWZpeCArIGNoYXIudG9Mb3dlckNhc2UoKTtcbiAgZWxlbWVudC5zZWxlY3RJdGVtV2l0aFRleHRQcmVmaXgoZWxlbWVudFt0eXBlZFByZWZpeFN5bWJvbF0pO1xuICBzZXRQcmVmaXhUaW1lb3V0KGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiByZXNldFByZWZpeFRpbWVvdXQoZWxlbWVudCkge1xuICBpZiAoZWxlbWVudFtwcmVmaXhUaW1lb3V0U3ltYm9sXSkge1xuICAgIGNsZWFyVGltZW91dChlbGVtZW50W3ByZWZpeFRpbWVvdXRTeW1ib2xdKTtcbiAgICBlbGVtZW50W3ByZWZpeFRpbWVvdXRTeW1ib2xdID0gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzZXRUeXBlZFByZWZpeChlbGVtZW50KSB7XG4gIGVsZW1lbnRbdHlwZWRQcmVmaXhTeW1ib2xdID0gJyc7XG4gIHJlc2V0UHJlZml4VGltZW91dChlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gc2V0UHJlZml4VGltZW91dChlbGVtZW50KSB7XG4gIHJlc2V0UHJlZml4VGltZW91dChlbGVtZW50KTtcbiAgZWxlbWVudFtwcmVmaXhUaW1lb3V0U3ltYm9sXSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHJlc2V0VHlwZWRQcmVmaXgoZWxlbWVudCk7XG4gIH0sIFBSRUZJWF9USU1FT1VUX0RVUkFUSU9OKTtcbn1cbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi9jcmVhdGVTeW1ib2wnO1xuaW1wb3J0IHRvZ2dsZUNsYXNzIGZyb20gJy4vdG9nZ2xlQ2xhc3MnO1xuXG5cbi8vIFN5bWJvbHMgZm9yIHByaXZhdGUgZGF0YSBtZW1iZXJzIG9uIGFuIGVsZW1lbnQuXG5jb25zdCBjbG9zZWRTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2Nsb3NlZCcpO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggT3BlbkNsb3NlLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggYWRkcyBjbG9zZS9vcGVuIHNlbWFudGljcy5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBkb2VzIG5vdCBwcm9kdWNlIGFueSB1c2VyLXZpc2libGUgZWZmZWN0cy4gSW5zdGVhZCBpdCBhcHBsaWVzXG4gICAqIGEgYGJhc2ljLWNsb3NlZGAgQ1NTIGNsYXNzIHRvIHRoZSBjb21wb25lbnQgaG9zdCBpZiB0aGUgaG9zdCBpc1xuICAgKiBjbG9zZWQsIGFuZCBhIGBiYXNpYy1vcGVuZWRgIGNsYXNzIGlmIG9wZW5lZC4gSXQgYWxzbyBpbnZva2VzIGEgYHJlbmRlcmBcbiAgICogZnVuY3Rpb24gdGhhdCBjYW4gYmUgb3ZlcnJpZGRlbiB0byBhcHBseSBjdXN0b20gZWZmZWN0cy5cbiAgICovXG4gIGNsYXNzIE9wZW5DbG9zZSBleHRlbmRzIGJhc2Uge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgLy8gU2V0IGRlZmF1bHRzLlxuICAgICAgaWYgKHR5cGVvZiB0aGlzLmNsb3NlZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5jbG9zZWQgPSB0aGlzLmRlZmF1bHRzLmNsb3NlZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbG9zZSB0aGUgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIHNldHRpbmcgdGhlIGBjbG9zZWRgIHByb3BlcnR5IHRvIHRydWUuXG4gICAgICovXG4gICAgY2xvc2UoKSB7XG4gICAgICB0aGlzLmNsb3NlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiB0aGUgY29tcG9uZW50IGlzIGN1cmVudGx5IGNsb3NlZC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG4gICAgZ2V0IGNsb3NlZCgpIHtcbiAgICAgIHJldHVybiB0aGlzW2Nsb3NlZFN5bWJvbF07XG4gICAgfVxuICAgIHNldCBjbG9zZWQodmFsdWUpIHtcbiAgICAgIGxldCBwcmV2aW91c0Nsb3NlZCA9IHRoaXNbY2xvc2VkU3ltYm9sXTtcbiAgICAgIHRoaXNbY2xvc2VkU3ltYm9sXSA9IHZhbHVlO1xuICAgICAgaWYgKCdjbG9zZWQnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLmNsb3NlZCA9IHZhbHVlOyB9XG4gICAgICBpZiAodmFsdWUgIT09IHByZXZpb3VzQ2xvc2VkKSB7XG4gICAgICAgIHRoaXMucmVuZGVyKHZhbHVlKTtcblxuICAgICAgICBsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2Nsb3NlZC1jaGFuZ2VkJyk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2spIHsgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTsgfVxuICAgICAgdGhpcy5yZW5kZXIodGhpcy5jbG9zZWQpO1xuICAgIH1cblxuICAgIGdldCBkZWZhdWx0cygpIHtcbiAgICAgIGxldCBkZWZhdWx0cyA9IHN1cGVyLmRlZmF1bHRzIHx8IHt9O1xuICAgICAgZGVmYXVsdHMuY2xvc2VkID0gZmFsc2U7XG4gICAgICByZXR1cm4gZGVmYXVsdHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3BlbiB0aGUgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIHNldHRpbmcgdGhlIGBjbG9zZWRgIHByb3BlcnR5IHRvIGZhbHNlLlxuICAgICAqL1xuICAgIG9wZW4oKSB7XG4gICAgICB0aGlzLmNsb3NlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm0gY3VzdG9tIHJlbmRlcmluZyBvZiB0aGUgY2xvc2Uvb3BlbiB0cmFuc2l0aW9uLlxuICAgICAqXG4gICAgICogWW91IGNhbiBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwZXJmb3JtIGN1c3RvbSBlZmZlY3RzLiBJZiB5b3UgZG8gc28sXG4gICAgICogYmUgc3VyZSB0byBpbnZva2UgYHN1cGVyKClgIGluIHlvdXIgaW1wbGVtZW50YXRpb24gdG8gZ2V0IHRoZSBiYXNlbGluZVxuICAgICAqIGJlaGF2aW9yLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtib29sZWFufSBjbG9zaW5nIC0gVHJ1ZSBpZiB0aGUgY29tcG9uZW50IGlzIGJlaW5nIGNsb3NlZCxcbiAgICAgKiAgICAgICAgZmFsc2UgaWYgaXQncyBiZWluZyBvcGVuZWQuXG4gICAgICovXG4gICAgcmVuZGVyKGNsb3NpbmcpIHtcbiAgICAgIGlmIChzdXBlci5yZW5kZXIpIHsgc3VwZXIucmVuZGVyKCk7IH1cbiAgICAgIGlmICghdGhpcy5wYXJlbnROb2RlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRvZ2dsZUNsYXNzKHRoaXMsICdiYXNpYy1jbG9zZWQnLCBjbG9zaW5nKTtcbiAgICAgIHRvZ2dsZUNsYXNzKHRoaXMsICdiYXNpYy1vcGVuZWQnLCAhY2xvc2luZyk7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICFjbG9zaW5nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGUgdGhlIGNvbXBvbmVudCdzIG9wZW4vY2xvc2VkIHN0YXRlLlxuICAgICAqL1xuICAgIHRvZ2dsZSgpIHtcbiAgICAgIHRoaXMuY2xvc2VkID0gIXRoaXMuY2xvc2VkO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIE9wZW5DbG9zZTtcbn07XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4vY3JlYXRlU3ltYm9sJztcbmltcG9ydCBGcmFjdGlvbmFsU2VsZWN0aW9uIGZyb20gJy4vRnJhY3Rpb25hbFNlbGVjdGlvbic7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IGFuaW1hdGlvblN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnYW5pbWF0aW9uJyk7XG5jb25zdCBsYXN0QW5pbWF0aW9uU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdsYXN0QW5pbWF0aW9uJyk7XG5jb25zdCBwbGF5aW5nQW5pbWF0aW9uU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdhbmltYXRpbmdTZWxlY3Rpb24nKTtcbmNvbnN0IHByZXZpb3VzU2VsZWN0aW9uU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdwcmV2aW91c1NlbGVjdGlvbicpO1xuY29uc3Qgc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb25TeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3NlbGVjdGlvbkFuaW1hdGlvbkR1cmF0aW9uJyk7XG5jb25zdCBzZWxlY3Rpb25BbmltYXRpb25FZmZlY3RTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3NlbGVjdGlvbkFuaW1hdGlvbkVmZmVjdCcpO1xuY29uc3Qgc2VsZWN0aW9uQW5pbWF0aW9uS2V5ZnJhbWVzU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdzZWxlY3Rpb25BbmltYXRpb25LZXlmcmFtZXMnKTtcbmNvbnN0IHNob3dUcmFuc2l0aW9uU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdzaG93VHJhbnNpdGlvbicpO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggU2VsZWN0aW9uQW5pbWF0aW9uLiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl4aW4oYmFzZSkge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCB1c2VzIGFuaW1hdGlvbiB0byBzaG93IHRyYW5zaXRpb25zIGJldHdlZW4gc2VsZWN0aW9uIHN0YXRlcy5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBjYW4gYmUgdXNlZCBieSBjb21wb25lbnRzIHRoYXQgd2FudCB0byBwcm92aWRlIHZpc2libGVcbiAgICogYW5pbWF0aW9ucyB3aGVuIGNoYW5naW5nIHRoZSBzZWxlY3Rpb24uIEZvciBleGFtcGxlLCBhIGNhcm91c2VsIGNvbXBvbmVudFxuICAgKiBtYXkgd2FudCB0byBkZWZpbmUgYSBzbGlkaW5nIGFuaW1hdGlvbiBlZmZlY3Qgc2hvd24gd2hlbiBtb3ZpbmcgYmV0d2VlblxuICAgKiBpdGVtcy5cbiAgICpcbiAgICogVGhlIGFuaW1hdGlvbiBpcyBkZWZpbmVkIGJ5IGEgYHNlbGVjdGlvbkFuaW1hdGlvbktleWZyYW1lc2AgcHJvcGVydHk7IHNlZVxuICAgKiB0aGF0IHByb3BlcnR5IGZvciBkZXRhaWxzIG9uIGhvdyB0byBkZWZpbmUgdGhlc2Uga2V5ZnJhbWVzLiBUaGlzIGFuaW1hdGlvblxuICAgKiB3aWxsIGJlIHVzZWQgaW4gdHdvIHdheXMuIEZpcnN0LCB3aGVuIG1vdmluZyBzdHJpY3RseSBiZXR3ZWVuIGl0ZW1zLCB0aGVcbiAgICogYW5pbWF0aW9uIHdpbGwgcGxheSBzbW9vdGhseSB0byBzaG93IHRoZSBzZWxlY3Rpb24gY2hhbmdpbmcuIFNlY29uZCwgdGhlXG4gICAqIGFuaW1hdGlvbiBjYW4gYmUgdXNlZCB0byByZW5kZXIgdGhlIHNlbGVjdGlvbiBhdCBhIGZpeGVkIHBvaW50IGluIHRoZVxuICAgKiB0cmFuc2l0aW9uIGJldHdlZW4gc3RhdGVzLiBFLmcuLCBpZiB0aGUgdXNlciBwYXVzZXMgaGFsZndheSB0aHJvdWdoXG4gICAqIGRyYWdnaW5nIGFuIGVsZW1lbnQgdXNpbmcgdGhlIFtTd2lwZURpcmVjdGlvbl0oU3dpcGVEaXJlY3Rpb24ubWQpIG9yXG4gICAqIFtUcmFja3BhZERpcmVjdGlvbl0oVHJhY2twYWREaXJlY3Rpb24ubWQpIG1peGlucywgdGhlbiB0aGUgc2VsZWN0aW9uXG4gICAqIGFuaW1hdGlvbiB3aWxsIGJlIHNob3duIGF0IHRoZSBwb2ludCBleGFjdGx5IGhhbGZ3YXkgdGhyb3VnaC5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIGEgY29tcG9uZW50IHRvIHByb3ZpZGUgYW4gYGl0ZW1zYCBhcnJheSBvZiBhbGwgZWxlbWVudHNcbiAgICogaW4gdGhlIGxpc3QsIHdoaWNoIGNhbiBiZSBwcm92aWRlZCB2aWEgdGhlXG4gICAqIFtDb250ZW50QXNJdGVtc10oQ29udGVudEFzSXRlbXMubWQpIG1peGluLiBUaGlzIG1peGluIGFsc28gZXhwZWN0c1xuICAgKiBgc2VsZWN0ZWRJbmRleGAgYW5kIGBzZWxlY3RlZEl0ZW1gIHByb3BlcnRpZXMsIHdoaWNoIGNhbiBiZSBwcm92aWRlZCB2aWFcbiAgICogdGhlIFtTaW5nbGVTZWxlY3Rpb25dKFNpbmdsZVNlbGVjdGlvbi5tZCkgbWl4aW4uXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gc3VwcG9ydHMgYSBgc2VsZWN0aW9uV3JhcHNgIHByb3BlcnR5LiBXaGVuIHRydWUsIHRoZSB1c2VyIGNhblxuICAgKiBuYXZpZ2F0ZSBmb3J3YXJkIGZyb20gdGhlIGxhc3QgaXRlbSBpbiB0aGUgbGlzdCBhbmQgd3JhcCBhcm91bmQgdG8gdGhlXG4gICAqIGZpcnN0IGl0ZW0sIG9yIG5hdmlnYXRlIGJhY2t3YXJkIGZyb20gdGhlIGZpcnN0IGl0ZW0gYW5kIHdyYXAgYXJvdW5kIHRvIHRoZVxuICAgKiBsYXN0IGl0ZW0uXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gdXNlcyB0aGUgV2ViIEFuaW1hdGlvbnMgQVBJLiBGb3IgdXNlIG9uIGJyb3dzZXJzIHdoaWNoXG4gICAqIGRvIG5vdCBzdXBwb3J0IHRoYXQgQVBJIG5hdGl2ZWx5LCB5b3Ugd2lsbCBuZWVkIHRvIGxvYWQgdGhlXG4gICAqIFtXZWIgQW5pbWF0aW9ucyBwb2x5ZmlsbF0oaHR0cHM6Ly9naXRodWIuY29tL3dlYi1hbmltYXRpb25zL3dlYi1hbmltYXRpb25zLWpzKS5cbiAgICovXG4gIGNsYXNzIFNlbGVjdGlvbkFuaW1hdGlvbiBleHRlbmRzIGJhc2Uge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuXG4gICAgICAvLyBTZXQgZGVmYXVsdHMuXG4gICAgICBpZiAodHlwZW9mIHRoaXMuc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb24gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb24gPSB0aGlzLmRlZmF1bHRzLnNlbGVjdGlvbkFuaW1hdGlvbkR1cmF0aW9uO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiB0aGlzLnNlbGVjdGlvbkFuaW1hdGlvbkVmZmVjdCA9PT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5zZWxlY3Rpb25BbmltYXRpb25LZXlmcmFtZXMgPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbkFuaW1hdGlvbkVmZmVjdCA9IHRoaXMuZGVmYXVsdHMuc2VsZWN0aW9uQW5pbWF0aW9uRWZmZWN0O1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNob3dUcmFuc2l0aW9uID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBnZXQgZGVmYXVsdHMoKSB7XG4gICAgICBsZXQgZGVmYXVsdHMgPSBzdXBlci5kZWZhdWx0cyB8fCB7fTtcbiAgICAgIGRlZmF1bHRzLnNlbGVjdGlvbkFuaW1hdGlvbkR1cmF0aW9uID0gMjUwO1xuICAgICAgZGVmYXVsdHMuc2VsZWN0aW9uQW5pbWF0aW9uRWZmZWN0ID0gJ3NsaWRlJztcbiAgICAgIHJldHVybiBkZWZhdWx0cztcbiAgICB9XG5cbiAgICBpdGVtQWRkZWQoaXRlbSkge1xuICAgICAgLy8gV2UgbWFyayBuZXcgaXRlbXMgaW4gdGhlIGxpc3QgYXMgZXhwbGljaXRseSB2aXNpYmxlIHRvIEFSSUEuIE90aGVyd2lzZSxcbiAgICAgIC8vIHdoZW4gYW4gaXRlbSBpc24ndCB2aXNpYmxlIG9uIHRoZSBzY3JlZW4sIEFSSUEgd2lsbCBhc3N1bWUgdGhlIGl0ZW0gaXNcbiAgICAgIC8vIG9mIG5vIGludGVyZXN0IHRvIHRoZSB1c2VyLCBhbmQgbGVhdmUgaXQgb3V0IG9mIHRoZSBhY2Nlc3NpYmlsaXR5IHRyZWUuXG4gICAgICAvLyBJZiB0aGUgbGlzdCBjb250YWlucyAxMCBpdGVtcywgYnV0IG9ubHkgMyBhcmUgdmlzaWJsZSwgYSBzY3JlZW4gcmVhZGVyXG4gICAgICAvLyBtaWdodCB0aGVuIGFubm91bmNlIHRoZSBsaXN0IG9ubHkgaGFzIDMgaXRlbXMuIFRvIGVuc3VyZSB0aGF0IHNjcmVlblxuICAgICAgLy8gcmVhZGVycyBhbmQgb3RoZXIgYXNzaXN0aXZlIHRlY2hub2xvZ2llcyBhbm5vdW5jZSB0aGUgY29ycmVjdCB0b3RhbFxuICAgICAgLy8gbnVtYmVyIG9mIGl0ZW1zLCB3ZSBleHBsaWNpdGx5IG1hcmsgYWxsIGl0ZW1zIGFzIG5vdCBoaWRkZW4uIFRoaXMgd2lsbFxuICAgICAgLy8gZXhwb3NlIHRoZW0gYWxsIGluIHRoZSBhY2Nlc3NpYmlsaXR5IHRyZWUsIGV2ZW4gdGhlIGl0ZW1zIHdoaWNoIGFyZVxuICAgICAgLy8gY3VycmVudGx5IG5vdCByZW5kZXJlZC5cbiAgICAgIC8vXG4gICAgICAvLyBUT0RPOiBHZW5lcmFsbHkgc3BlYWtpbmcsIHRoaXMgZW50aXJlIG1peGluIGFzc3VtZXMgdGhhdCB0aGUgdXNlciBjYW5cbiAgICAgIC8vIG5hdmlnYXRlIHRocm91Z2ggYWxsIGl0ZW1zIGluIGEgbGlzdC4gQnV0IGFuIGFwcCBjb3VsZCBzdHlsZSBhbiBpdGVtIGFzXG4gICAgICAvLyBkaXNwbGF5Om5vbmUgb3IgdmlzaWJpbGl0eTpoaWRkZW4gYmVjYXVzZSB0aGUgdXNlciBpcyBub3QgYWxsb3dlZCB0b1xuICAgICAgLy8gaW50ZXJhY3Qgd2l0aCB0aGF0IGl0ZW0gYXQgdGhlIG1vbWVudC4gU3VwcG9ydCBmb3IgdGhpcyBzY2VuYXJpbyBzaG91bGRcbiAgICAgIC8vIGJlIGFkZGVkLiBUaGlzIHdvdWxkIGVudGFpbCBjaGFuZ2luZyBhbGwgbG9jYXRpb25zIHdoZXJlIGEgbWl4aW5cbiAgICAgIC8vIGZ1bmN0aW9uIGlzIGNvdW50aW5nIGl0ZW1zLCBpdGVyYXRpbmcgb3ZlciB0aGUgKHZpc2libGUpIGl0ZW1zLCBhbmRcbiAgICAgIC8vIHNob3dpbmcgb3IgaGlkaW5nIGl0ZW1zLiBBbW9uZyBvdGhlciB0aGluZ3MsIHRoZSBjb2RlIGJlbG93IHRvIG1ha2VcbiAgICAgIC8vIGl0ZW1zIHZpc2libGUgdG8gQVJJQSB3b3VsZCBuZWVkIHRvIGRpc2NyaW1pbmF0ZSBiZXR3ZWVuIGl0ZW1zIHdoaWNoXG4gICAgICAvLyBhcmUgaW52aXNpYmxlIGJlY2F1c2Ugb2YgYW5pbWF0aW9uIHN0YXRlLCBvciBpbnZpc2libGUgYmVjYXVzZSB0aGUgdXNlclxuICAgICAgLy8gc2hvdWxkbid0IGludGVyYWN0IHdpdGggdGhlbS5cbiAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBpdGVtc0NoYW5nZWQoKSB7XG4gICAgICBpZiAoc3VwZXIuaXRlbXNDaGFuZ2VkKSB7IHN1cGVyLml0ZW1zQ2hhbmdlZCgpOyB9XG4gICAgICByZXNldEFuaW1hdGlvbnModGhpcyk7XG4gICAgICByZW5kZXJTZWxlY3Rpb24odGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSBmcmFjdGlvbmFsIHZhbHVlIGluZGljYXRpbmcgaG93IGZhciB0aGUgdXNlciBoYXMgY3VycmVudGx5IGFkdmFuY2VkIHRvXG4gICAgICogdGhlIG5leHQvcHJldmlvdXMgaXRlbS4gRS5nLiwgYSBgc2VsZWN0ZWRGcmFjdGlvbmAgb2YgMy41IGluZGljYXRlcyB0aGVcbiAgICAgKiB1c2VyIGlzIGhhbGZ3YXkgYmV0d2VlbiBpdGVtcyAzIGFuZCA0LlxuICAgICAqXG4gICAgICogRm9yIG1vcmUgZGV0YWlscywgc2VlIHRoZSBbRnJhY3Rpb25hbFNlbGVjdGlvbl0oRnJhY3Rpb25hbFNlbGVjdGlvbi5tZClcbiAgICAgKiBtaXhpbi5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGVkRnJhY3Rpb24oKSB7XG4gICAgICByZXR1cm4gc3VwZXIuc2VsZWN0ZWRGcmFjdGlvbiB8fCAwO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0ZWRGcmFjdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKCdzZWxlY3RlZEZyYWN0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEZyYWN0aW9uID0gdmFsdWU7IH1cbiAgICAgIHJlbmRlclNlbGVjdGlvbih0aGlzLCB0aGlzLnNlbGVjdGVkSW5kZXgsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBnZXQgc2VsZWN0ZWRJdGVtKCkge1xuICAgICAgcmV0dXJuIHN1cGVyLnNlbGVjdGVkSXRlbTtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGVkSXRlbShpdGVtKSB7XG4gICAgICBpZiAoJ3NlbGVjdGVkSXRlbScgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJdGVtID0gaXRlbTsgfVxuICAgICAgcmVuZGVyU2VsZWN0aW9uKHRoaXMsIHRoaXMuc2VsZWN0ZWRJbmRleCwgMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGR1cmF0aW9uIG9mIGEgc2VsZWN0aW9uIGFuaW1hdGlvbiBpbiBtaWxsaXNlY29uZHMuXG4gICAgICpcbiAgICAgKiBUaGlzIG1lYXN1cmVzIHRoZSBhbW91bnQgb2YgdGltZSByZXF1aXJlZCBmb3IgYSBzZWxlY3Rpb24gYW5pbWF0aW9uIHRvXG4gICAgICogY29tcGxldGUuIFRoaXMgbnVtYmVyIHJlbWFpbnMgY29uc3RhbnQsIGV2ZW4gaWYgdGhlIG51bWJlciBvZiBpdGVtcyBiZWluZ1xuICAgICAqIGFuaW1hdGVkIGluY3JlYXNlcy5cbiAgICAgKlxuICAgICAqIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDI1MCBtaWxsaXNlY29uZHMgKGEgcXVhcnRlciBhIHNlY29uZCkuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBkZWZhdWx0IDI1MFxuICAgICAqL1xuICAgIGdldCBzZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzW3NlbGVjdGlvbkFuaW1hdGlvbkR1cmF0aW9uU3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGlvbkFuaW1hdGlvbkR1cmF0aW9uKHZhbHVlKSB7XG4gICAgICB0aGlzW3NlbGVjdGlvbkFuaW1hdGlvbkR1cmF0aW9uU3ltYm9sXSA9IHZhbHVlO1xuICAgICAgaWYgKCdzZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvbicgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb24gPSB2YWx1ZTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBuYW1lIG9mIGEgc3RhbmRhcmQgc2VsZWN0aW9uIGFuaW1hdGlvbiBlZmZlY3QuXG4gICAgICpcbiAgICAgKiBUaGlzIGlzIGEgc2hvcnRoYW5kIGZvciBzZXR0aW5nIHRoZSBgc2VsZWN0aW9uQW5pbWF0aW9uS2V5ZnJhbWVzYFxuICAgICAqIHByb3BlcnR5IHRvIHN0YW5kYXJkIGtleWZyYW1lcy4gU3VwcG9ydGVkIHN0cmluZyB2YWx1ZXM6XG4gICAgICpcbiAgICAgKiAqIFwiY3Jvc3NmYWRlXCJcbiAgICAgKiAqIFwicmV2ZWFsXCJcbiAgICAgKiAqIFwicmV2ZWFsV2l0aEZhZGVcIlxuICAgICAqICogXCJzaG93QWRqYWNlbnRcIlxuICAgICAqICogXCJzbGlkZVwiXG4gICAgICogKiBcInNsaWRlV2l0aEdhcFwiXG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBkZWZhdWx0IFwic2xpZGVcIlxuICAgICAqL1xuICAgIGdldCBzZWxlY3Rpb25BbmltYXRpb25FZmZlY3QoKSB7XG4gICAgICByZXR1cm4gdGhpc1tzZWxlY3Rpb25BbmltYXRpb25FZmZlY3RTeW1ib2xdO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0aW9uQW5pbWF0aW9uRWZmZWN0KHZhbHVlKSB7XG4gICAgICB0aGlzW3NlbGVjdGlvbkFuaW1hdGlvbkVmZmVjdFN5bWJvbF0gPSB2YWx1ZTtcbiAgICAgIGlmICgnc2VsZWN0aW9uQW5pbWF0aW9uRWZmZWN0JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3Rpb25BbmltYXRpb25FZmZlY3QgPSB2YWx1ZTsgfVxuICAgICAgdGhpcy5zZWxlY3Rpb25BbmltYXRpb25LZXlmcmFtZXMgPSBtaXhpbi5zdGFuZGFyZEVmZmVjdEtleWZyYW1lc1t2YWx1ZV07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGtleWZyYW1lcyB0aGF0IGRlZmluZSBhbiBhbmltYXRpb24gdGhhdCBwbGF5cyBmb3IgYW4gaXRlbSB3aGVuIG1vdmluZ1xuICAgICAqIGZvcndhcmQgaW4gdGhlIHNlcXVlbmNlLlxuICAgICAqXG4gICAgICogVGhpcyBpcyBhbiBhcnJheSBvZiBDU1MgcnVsZXMgdGhhdCB3aWxsIGJlIGFwcGxpZWQuIFRoZXNlIGFyZSB1c2VkIGFzXG4gICAgICogW2tleWZyYW1lc10oaHR0cDovL3czYy5naXRodWIuaW8vd2ViLWFuaW1hdGlvbnMvI2tleWZyYW1lcy1zZWN0aW9uKVxuICAgICAqIHRvIGFuaW1hdGUgdGhlIGl0ZW0gd2l0aCB0aGVcbiAgICAgKiBbV2ViIEFuaW1hdGlvbnMgQVBJXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvYW5pbWF0aW9uKS5cbiAgICAgKlxuICAgICAqIFRoZSBhbmltYXRpb24gcmVwcmVzZW50cyB0aGUgc3RhdGUgb2YgdGhlIG5leHQgaXRlbSBhcyBpdCBtb3ZlcyBmcm9tXG4gICAgICogY29tcGxldGVseSB1bnNlbGVjdGVkIChvZmZzdGFnZSwgdXN1YWxseSByaWdodCksIHRvIHNlbGVjdGVkIChjZW50ZXJcbiAgICAgKiBzdGFnZSksIHRvIGNvbXBsZXRlbHkgdW5zZWxlY3RlZCAob2Zmc3RhZ2UsIHVzdWFsbHkgbGVmdCkuIFRoZSBjZW50ZXIgdGltZVxuICAgICAqIG9mIHRoZSBhbmltYXRpb24gc2hvdWxkIGNvcnJlc3BvbmQgdG8gdGhlIGl0ZW0ncyBxdWlzY2VudCBzZWxlY3RlZCBzdGF0ZSxcbiAgICAgKiB0eXBpY2FsbHkgaW4gdGhlIGNlbnRlciBvZiB0aGUgc3RhZ2UgYW5kIGF0IHRoZSBpdGVtJ3MgbGFyZ2VzdCBzaXplLlxuICAgICAqXG4gICAgICogVGhlIGRlZmF1bHQgZm9yd2FyZCBhbmltYXRpb24gaXMgYSBzbW9vdGggc2xpZGUgYXQgZnVsbCBzaXplIGZyb20gcmlnaHQgdG9cbiAgICAgKiBsZWZ0LlxuICAgICAqXG4gICAgICogV2hlbiBtb3ZpbmcgdGhlIHNlbGVjdGlvbiBiYWNrd2FyZCwgdGhpcyBhbmltYXRpb24gaXMgcGxheWVkIGluIHJldmVyc2UuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Y3NzUnVsZXNbXX1cbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0aW9uQW5pbWF0aW9uS2V5ZnJhbWVzKCkge1xuICAgICAgLy8gU3RhbmRhcmQgYW5pbWF0aW9uIHNsaWRlcyBsZWZ0L3JpZ2h0LCBrZWVwcyBhZGphY2VudCBpdGVtcyBvdXQgb2Ygdmlldy5cbiAgICAgIHJldHVybiB0aGlzW3NlbGVjdGlvbkFuaW1hdGlvbktleWZyYW1lc1N5bWJvbF07XG4gICAgfVxuICAgIHNldCBzZWxlY3Rpb25BbmltYXRpb25LZXlmcmFtZXModmFsdWUpIHtcbiAgICAgIHRoaXNbc2VsZWN0aW9uQW5pbWF0aW9uS2V5ZnJhbWVzU3ltYm9sXSA9IHZhbHVlO1xuICAgICAgaWYgKCdzZWxlY3Rpb25BbmltYXRpb25LZXlmcmFtZXMnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGlvbkFuaW1hdGlvbktleWZyYW1lcyA9IHZhbHVlOyB9XG4gICAgICByZXNldEFuaW1hdGlvbnModGhpcyk7XG4gICAgICByZW5kZXJTZWxlY3Rpb24odGhpcyk7XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdGlvbldyYXBzKCkge1xuICAgICAgcmV0dXJuIHN1cGVyLnNlbGVjdGlvbldyYXBzO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0aW9uV3JhcHModmFsdWUpIHtcbiAgICAgIGlmICgnc2VsZWN0aW9uV3JhcHMnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGlvbldyYXBzID0gdmFsdWU7IH1cbiAgICAgIHJlc2V0QW5pbWF0aW9ucyh0aGlzKTtcbiAgICAgIHJlbmRlclNlbGVjdGlvbih0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmUgd2hldGhlciBhIHRyYW5zaXRpb24gc2hvdWxkIGJlIHNob3duIGR1cmluZyBzZWxlY3Rpb24uXG4gICAgICpcbiAgICAgKiBDb21wb25lbnRzIGxpa2UgY2Fyb3VzZWxzIG9mdGVuIGRlZmluZSBhbmltYXRlZCBDU1MgdHJhbnNpdGlvbnMgZm9yXG4gICAgICogc2xpZGluZyBlZmZlY3RzLiBTdWNoIGEgdHJhbnNpdGlvbiBzaG91bGQgdXN1YWxseSAqbm90KiBiZSBhcHBsaWVkIHdoaWxlXG4gICAgICogdGhlIHVzZXIgaXMgZHJhZ2dpbmcsIGJlY2F1c2UgYSBDU1MgYW5pbWF0aW9uIHdpbGwgaW50cm9kdWNlIGEgbGFnIHRoYXRcbiAgICAgKiBtYWtlcyB0aGUgc3dpcGUgZmVlbCBzbHVnZ2lzaC4gSW5zdGVhZCwgYXMgbG9uZyBhcyB0aGUgdXNlciBpcyBkcmFnZ2luZ1xuICAgICAqIHdpdGggdGhlaXIgZmluZ2VyIGRvd24sIHRoZSB0cmFuc2l0aW9uIHNob3VsZCBiZSBzdXBwcmVzc2VkLiBXaGVuIHRoZVxuICAgICAqIHVzZXIgcmVsZWFzZXMgdGhlaXIgZmluZ2VyLCB0aGUgdHJhbnNpdGlvbiBjYW4gYmUgcmVzdG9yZWQsIGFsbG93aW5nIHRoZVxuICAgICAqIGFuaW1hdGlvbiB0byBzaG93IHRoZSBjYXJvdXNlbCBzbGlkaW5nIGludG8gaXRzIGZpbmFsIHBvc2l0aW9uLlxuICAgICAqXG4gICAgICogTm90ZTogVGhpcyBwcm9wZXJ0eSBpcyBvbmx5IGludGVuZGVkIHRvIGxldCBhIGNvbXBvbmVudCBjb29wZXJhdGUgd2l0aFxuICAgICAqIG1peGlucyB0aGF0IG1heSBiZSBhcHBsaWVkIHRvIGl0LCBhbmQgaXMgbm90IGludGVuZGVkIHRvIGxldCBzb21lb25lXG4gICAgICogdXNpbmcgY29tcG9uZW50IHBlcm1hbmVudGx5IGVuYWJsZSBvciBkaXNhYmxlIHRyYW5zaXRpb24gZWZmZWN0cy5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtib29sZWFufSB0cnVlIGlmIGEgY29tcG9uZW50LXByb3ZpZGVkIHRyYW5zaXRpb24gc2hvdWxkIGJlIHNob3duLFxuICAgICAqIGZhbHNlIGlmIG5vdC5cbiAgICAgKi9cbiAgICAvLyBUT0RPOiBSZW5hbWUgKGFuZCBmbGlwIG1lYW5pbmcpIHRvIHNvbWV0aGluZyBsaWtlIGRyYWdnaW5nKCk/XG4gICAgZ2V0IHNob3dUcmFuc2l0aW9uKCkge1xuICAgICAgcmV0dXJuIHN1cGVyLnNob3dUcmFuc2l0aW9uIHx8IHRoaXNbc2hvd1RyYW5zaXRpb25TeW1ib2xdO1xuICAgIH1cbiAgICBzZXQgc2hvd1RyYW5zaXRpb24odmFsdWUpIHtcbiAgICAgIHRoaXNbc2hvd1RyYW5zaXRpb25TeW1ib2xdID0gdmFsdWU7XG4gICAgICBpZiAoJ3Nob3dUcmFuc2l0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zaG93VHJhbnNpdGlvbiA9IHZhbHVlOyB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFNlbGVjdGlvbkFuaW1hdGlvbjtcbn1cblxuXG4vLyBXZSBleHBvc2UgaGVscGVycyBvbiB0aGUgbWl4aW4gZnVuY3Rpb24gdGhhdCB3ZSB3YW50IHRvIGJlIGFibGUgdG8gdW5pdCB0ZXN0LlxuLy8gU2luY2UgdGhlc2UgYXJlIG9uIHRoZSBmdW5jdGlvbiwgbm90IG9uIHRoZSBjbGFzcyBlbWl0dGVkIGJ5IHRoZSBmdW5jdGlvbixcbi8vIHRoZXkgZG9uJ3QgZW5kIHVwIGdldHRpbmcgZXhwb3NlZCBvbiBhY3R1YWwgZWxlbWVudCBpbnN0YW5jZXMuXG5taXhpbi5oZWxwZXJzID0ge1xuXG4gIC8qXG4gICAqIENhbGN1bGF0ZSB0aGUgYW5pbWF0aW9uIGZyYWN0aW9ucyBmb3IgYW4gZWxlbWVudCdzIGl0ZW1zIGF0IHRoZSBnaXZlblxuICAgKiBzZWxlY3Rpb24gcG9pbnQuIFRoaXMgaXMgdXNlZCB3aGVuIHJlbmRlcmluZyB0aGUgZWxlbWVudCdzIHNlbGVjdGlvbiBzdGF0ZVxuICAgKiBpbnN0YW50YW5lb3VzbHkuXG4gICAqXG4gICAqIFRoaXMgZnVuY3Rpb24gY29uc2lkZXJzIHRoZSBzZWxlY3RlZEluZGV4IHBhcmFtZXRlciwgd2hpY2ggY2FuIGJlIGEgd2hvbGVcbiAgICogb3IgZnJhY3Rpb25hbCBudW1iZXIsIGFuZCBkZXRlcm1pbmVzIHdoaWNoIGl0ZW1zIHdpbGwgYmUgdmlzaWJsZSBhdCB0aGF0XG4gICAqIGluZGV4LiBUaGlzIGZ1bmN0aW9uIHRoZW4gY2FsY3VsYXRlcyBhIGNvcnJlc3BvbmRpbmcgYW5pbWF0aW9uIGZyYWN0aW9uOiBhXG4gICAqIG51bWJlciBiZXR3ZWVuIDAgYW5kIDEgaW5kaWNhdGluZyBob3cgZmFyIHRocm91Z2ggdGhlIHNlbGVjdGlvbiBhbmltYXRpb25cbiAgICogYW4gaXRlbSBzaG91bGQgYmUgc2hvd24sIG9yIG51bGwgaWYgdGhlIGl0ZW0gc2hvdWxkIG5vdCBiZSB2aXNpYmxlIGF0IHRoYXRcbiAgICogc2VsZWN0aW9uIGluZGV4LiBUaGVzZSBmcmFjdGlvbnMgYXJlIHJldHVybmVkIGFzIGFuIGFycmF5LCB3aGVyZSB0aGVcbiAgICogYW5pbWF0aW9uIGZyYWN0aW9uIGF0IHBvc2l0aW9uIE4gY29ycmVzcG9uZHMgdG8gaG93IGl0ZW0gTiBzaG91bGQgYmUgc2hvd24uXG4gICAqL1xuICBhbmltYXRpb25GcmFjdGlvbnNGb3JTZWxlY3Rpb24oZWxlbWVudCwgc2VsZWN0aW9uKSB7XG5cbiAgICBsZXQgaXRlbXMgPSBlbGVtZW50Lml0ZW1zO1xuICAgIGlmICghaXRlbXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgaXRlbUNvdW50ID0gaXRlbXMubGVuZ3RoO1xuICAgIGxldCBzZWxlY3Rpb25XcmFwcyA9IGVsZW1lbnQuc2VsZWN0aW9uV3JhcHM7XG5cbiAgICByZXR1cm4gaXRlbXMubWFwKChpdGVtLCBpdGVtSW5kZXgpID0+IHtcbiAgICAgIC8vIEhvdyBtYW55IHN0ZXBzIGZyb20gdGhlIHNlbGVjdGlvbiBwb2ludCB0byB0aGlzIGl0ZW0/XG4gICAgICBsZXQgc3RlcHMgPSBzdGVwc1RvSW5kZXgoaXRlbUNvdW50LCBzZWxlY3Rpb25XcmFwcywgc2VsZWN0aW9uLCBpdGVtSW5kZXgpO1xuICAgICAgLy8gVG8gY29udmVydCBzdGVwcyB0byBhbmltYXRpb24gZnJhY3Rpb246XG4gICAgICAvLyBzdGVwcyAgICAgIGFuaW1hdGlvbiBmcmFjdGlvblxuICAgICAgLy8gIDEgICAgICAgICAwICAgICAoc3RhZ2UgcmlnaHQpXG4gICAgICAvLyAgMCAgICAgICAgIDAuNSAgIChjZW50ZXIgc3RhZ2UpXG4gICAgICAvLyAtMSAgICAgICAgIDEgICAgIChzdGFnZSBsZWZ0KVxuICAgICAgbGV0IGFuaW1hdGlvbkZyYWN0aW9uID0gKDEgLSBzdGVwcykgLyAyO1xuICAgICAgcmV0dXJuIChhbmltYXRpb25GcmFjdGlvbiA+PSAwICYmIGFuaW1hdGlvbkZyYWN0aW9uIDw9IDEpID9cbiAgICAgICAgYW5pbWF0aW9uRnJhY3Rpb24gOlxuICAgICAgICBudWxsOyAvLyBPdXRzaWRlIGFuaW1hdGlvbiByYW5nZVxuICAgIH0pO1xuICB9LFxuXG4gIC8qXG4gICAqIENhbGN1bGF0ZSB0aGUgYW5pbWF0aW9uIHRpbWluZ3MgdGhhdCBzaG91bGQgYmUgdXNlZCB0byBzbW9vdGhseSBhbmltYXRlIHRoZVxuICAgKiBlbGVtZW50J3MgaXRlbXMgZnJvbSBvbmUgc2VsZWN0aW9uIHN0YXRlIHRvIGFub3RoZXIuXG4gICAqXG4gICAqIFRoaXMgcmV0dXJucyBhbiBhcnJheSBvZiB0aW1pbmdzLCB3aGVyZSB0aGUgdGltaW5nIGF0IHBvc2l0aW9uIE4gc2hvdWxkIGJlXG4gICAqIHVzZWQgdG8gYW5pbWF0ZSBpdGVtIE4uIElmIGFuIGl0ZW0ncyB0aW1pbmcgaXMgbnVsbCwgdGhlbiB0aGF0IGl0ZW0gc2hvdWxkXG4gICAqIG5vdCB0YWtlIHBsYWNlIGluIHRoZSBhbmltYXRpb24sIGFuZCBzaG91bGQgYmUgaGlkZGVuIGluc3RlYWQuXG4gICAqL1xuICBlZmZlY3RUaW1pbmdzRm9yU2VsZWN0aW9uQW5pbWF0aW9uKGVsZW1lbnQsIGZyb21TZWxlY3Rpb24sIHRvU2VsZWN0aW9uKSB7XG5cbiAgICBsZXQgaXRlbXMgPSBlbGVtZW50Lml0ZW1zO1xuICAgIGlmICghaXRlbXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGl0ZW1Db3VudCA9IGl0ZW1zLmxlbmd0aDtcbiAgICBsZXQgc2VsZWN0aW9uV3JhcHMgPSBlbGVtZW50LnNlbGVjdGlvbldyYXBzO1xuICAgIGxldCB0b0luZGV4ID0gRnJhY3Rpb25hbFNlbGVjdGlvbi5oZWxwZXJzLndyYXBwZWRTZWxlY3Rpb25QYXJ0cyh0b1NlbGVjdGlvbiwgaXRlbUNvdW50LCBzZWxlY3Rpb25XcmFwcykuaW5kZXg7XG4gICAgbGV0IHRvdGFsU3RlcHMgPSBzdGVwc1RvSW5kZXgoaXRlbUNvdW50LCBzZWxlY3Rpb25XcmFwcywgZnJvbVNlbGVjdGlvbiwgdG9TZWxlY3Rpb24pO1xuICAgIGxldCBkaXJlY3Rpb24gPSB0b3RhbFN0ZXBzID49IDAgPyAnbm9ybWFsJzogJ3JldmVyc2UnO1xuICAgIGxldCBmaWxsID0gJ2JvdGgnO1xuICAgIGxldCB0b3RhbER1cmF0aW9uID0gZWxlbWVudC5zZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvbjtcbiAgICBsZXQgc3RlcER1cmF0aW9uID0gdG90YWxTdGVwcyAhPT0gMCA/XG4gICAgICB0b3RhbER1cmF0aW9uICogMiAvIE1hdGguY2VpbChNYXRoLmFicyh0b3RhbFN0ZXBzKSkgOlxuICAgICAgMDsgIC8vIE5vIHN0ZXBzIHJlcXVpcmVkLCBhbmltYXRpb24gd2lsbCBiZSBpbnN0YW50ZW5vdXMuXG5cbiAgICBsZXQgdGltaW5ncyA9IGl0ZW1zLm1hcCgoaXRlbSwgaXRlbUluZGV4KSA9PiB7XG4gICAgICBsZXQgc3RlcHMgPSBzdGVwc1RvSW5kZXgoaXRlbUNvdW50LCBzZWxlY3Rpb25XcmFwcywgaXRlbUluZGV4LCB0b1NlbGVjdGlvbik7XG4gICAgICAvLyBJZiB3ZSBpbmNsdWRlIHRoaXMgaXRlbSBpbiB0aGUgc3RhZ2dlcmVkIHNlcXVlbmNlIG9mIGFuaW1hdGlvbnMgd2UncmVcbiAgICAgIC8vIGNyZWF0aW5nLCB3aGVyZSB3b3VsZCB0aGUgaXRlbSBhcHBlYXIgaW4gdGhlIHNlcXVlbmNlP1xuICAgICAgbGV0IHBvc2l0aW9uSW5TZXF1ZW5jZSA9IHRvdGFsU3RlcHMgLSBzdGVwcztcbiAgICAgIGlmICh0b3RhbFN0ZXBzIDwgMCkge1xuICAgICAgICBwb3NpdGlvbkluU2VxdWVuY2UgPSAtcG9zaXRpb25JblNlcXVlbmNlO1xuICAgICAgfVxuICAgICAgLy8gU28sIGlzIHRoaXMgaXRlbSByZWFsbHkgaW5jbHVkZWQgaW4gdGhlIHNlcXVlbmNlP1xuICAgICAgaWYgKE1hdGguY2VpbChwb3NpdGlvbkluU2VxdWVuY2UpID49IDAgJiYgcG9zaXRpb25JblNlcXVlbmNlIDw9IE1hdGguYWJzKHRvdGFsU3RlcHMpKSB7XG4gICAgICAgIC8vIE5vdGUgdGhhdCBkZWxheSBmb3IgZmlyc3QgaXRlbSB3aWxsIGJlIG5lZ2F0aXZlLiBUaGF0IHdpbGwgY2F1c2VcbiAgICAgICAgLy8gdGhlIGFuaW1hdGlvbiB0byBzdGFydCBoYWxmd2F5IHRocm91Z2gsIHdoaWNoIGlzIHdoYXQgd2Ugd2FudC5cbiAgICAgICAgbGV0IGRlbGF5ID0gc3RlcER1cmF0aW9uICogKHBvc2l0aW9uSW5TZXF1ZW5jZSAtIDEpLzI7XG4gICAgICAgIGxldCBlbmREZWxheSA9IGl0ZW1JbmRleCA9PT0gdG9JbmRleCA/XG4gICAgICAgICAgLXN0ZXBEdXJhdGlvbi8yIDogICAvLyBTdG9wIGhhbGZ3YXkgdGhyb3VnaC5cbiAgICAgICAgICAwOyAgICAgICAgICAgICAgLy8gUGxheSBhbmltYXRpb24gdW50aWwgZW5kLlxuICAgICAgICByZXR1cm4geyBkdXJhdGlvbjogc3RlcER1cmF0aW9uLCBkaXJlY3Rpb24sIGZpbGwsIGRlbGF5LCBlbmREZWxheSB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGltaW5ncztcbiAgfVxuXG59O1xuXG5cbi8vIEtleWZyYW1lcyBmb3Igc3RhbmRhcmQgc2VsZWN0aW9uIGFuaW1hdGlvbiBlZmZlY3RzLlxubWl4aW4uc3RhbmRhcmRFZmZlY3RLZXlmcmFtZXMgPSB7XG5cbiAgLy8gU2ltcGxlIGNyb3NzZmFkZVxuICBjcm9zc2ZhZGU6IFtcbiAgICB7IG9wYWNpdHk6IDAgfSxcbiAgICB7IG9wYWNpdHk6IDEgfSxcbiAgICB7IG9wYWNpdHk6IDAgfVxuICBdLFxuXG4gIC8vIFJldmVhbCwgYXMgaWYgc2xpZGluZyB0aGUgdG9wIGNhcmQgb2ZmIGEgZGVjayBvZiBjYXJkc1xuICByZXZlYWw6IFtcbiAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCUpJywgekluZGV4OiAwIH0sXG4gICAgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDAlKScsIHpJbmRleDogMSB9LFxuICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtMTAwJSknLCB6SW5kZXg6IDIgfVxuICBdLFxuXG4gIC8vIEdvb2dsZSBQaG90b3Mtc3R5bGUgcmV2ZWFsLXdpdGgtZmFkZSBhbmltYXRpb25cbiAgcmV2ZWFsV2l0aEZhZGU6IFtcbiAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCUpIHNjYWxlKDAuNzUpJywgb3BhY2l0eTogMCwgekluZGV4OiAwIH0sXG4gICAgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDAlKSBzY2FsZSgxLjApJywgb3BhY2l0eTogMSwgekluZGV4OiAxIH0sXG4gICAgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC0xMDAlKSBzY2FsZSgxLjApJywgb3BhY2l0eTogMSwgekluZGV4OiAyIH1cbiAgXSxcblxuICAvLyBDYXJvdXNlbCB2YXJpYW50IHdpdGggYSBiaXQgb2Ygb2ZmLXN0YWdlIGVsZW1lbnRzIHNob3dpbmdcbiAgc2hvd0FkamFjZW50OiBbXG4gICAgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDc4JSkgc2NhbGUoMC43KScsIHpJbmRleDogMCB9LFxuICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwJSkgc2NhbGUoMC44MiknLCB6SW5kZXg6IDEgfSxcbiAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTc4JSkgc2NhbGUoMC43KScsIHpJbmRleDogMCB9XG4gIF0sXG5cbiAgLy8gU2ltcGxlIHNsaWRlXG4gIHNsaWRlOiBbXG4gICAgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDEwMCUpJyB9LFxuICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtMTAwJSknIH1cbiAgXSxcblxuICAvLyBTbGlkZSwgd2l0aCBhIGdhcCBiZXR3ZWVuXG4gIHNsaWRlV2l0aEdhcDogW1xuICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgxMTAlKScgfSxcbiAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTExMCUpJyB9XG4gIF1cblxufTtcblxuXG4vKlxuICogU21vb3RobHkgYW5pbWF0ZSB0aGUgc2VsZWN0aW9uIGJldHdlZW4gdGhlIGluZGljYXRlZCBcImZyb21cIiBhbmQgXCJ0b1wiXG4gKiBpbmRpY2VzLiBUaGUgZm9ybWVyIGNhbiBiZSBhIGZyYWN0aW9uLCBlLmcuLCB3aGVuIHRoZSB1c2VyIHJlbGVhc2VzIGEgZmluZ2VyXG4gKiB0byBjb21wbGV0ZSBhIHRvdWNoIGRyYWcsIGFuZCB0aGUgc2VsZWN0aW9uIHdpbGwgc25hcCB0byB0aGUgY2xvc2VzdCB3aG9sZVxuICogaW5kZXguXG4gKi9cbmZ1bmN0aW9uIGFuaW1hdGVTZWxlY3Rpb24oZWxlbWVudCwgZnJvbVNlbGVjdGlvbiwgdG9TZWxlY3Rpb24pIHtcblxuICByZXNldEFuaW1hdGlvbnMoZWxlbWVudCk7XG5cbiAgLy8gQ2FsY3VsYXRlIHRoZSBhbmltYXRpb24gdGltaW5ncy5cbiAgbGV0IGl0ZW1zID0gZWxlbWVudC5pdGVtcztcbiAgbGV0IGtleWZyYW1lcyA9IGVsZW1lbnQuc2VsZWN0aW9uQW5pbWF0aW9uS2V5ZnJhbWVzO1xuICBlbGVtZW50W3BsYXlpbmdBbmltYXRpb25TeW1ib2xdID0gdHJ1ZTtcbiAgbGV0IHRpbWluZ3MgPSBtaXhpbi5oZWxwZXJzLmVmZmVjdFRpbWluZ3NGb3JTZWxlY3Rpb25BbmltYXRpb24oZWxlbWVudCwgZnJvbVNlbGVjdGlvbiwgdG9TZWxlY3Rpb24pO1xuXG4gIC8vIEZpZ3VyZSBvdXQgd2hpY2ggaXRlbSB3aWxsIGJlIHRoZSBvbmUgKmFmdGVyKiB0aGUgb25lIHdlJ3JlIHNlbGVjdGluZy5cbiAgbGV0IGl0ZW1Db3VudCA9IGl0ZW1zLmxlbmd0aDtcbiAgbGV0IHNlbGVjdGlvbldyYXBzID0gZWxlbWVudC5zZWxlY3Rpb25XcmFwcztcbiAgbGV0IHNlbGVjdGlvbkluZGV4ID0gRnJhY3Rpb25hbFNlbGVjdGlvbi5oZWxwZXJzLnNlbGVjdGlvblBhcnRzKHRvU2VsZWN0aW9uLCBpdGVtQ291bnQsIHNlbGVjdGlvbldyYXBzKS5pbmRleDtcbiAgbGV0IHRvdGFsU3RlcHMgPSBzdGVwc1RvSW5kZXgoaXRlbUNvdW50LCBzZWxlY3Rpb25XcmFwcywgZnJvbVNlbGVjdGlvbiwgdG9TZWxlY3Rpb24pO1xuICBsZXQgZm9yd2FyZCA9IHRvdGFsU3RlcHMgPj0gMDtcbiAgbGV0IG5leHRVcEluZGV4ID0gc2VsZWN0aW9uSW5kZXggKyAoZm9yd2FyZCA/IDEgOiAtIDEpO1xuICBpZiAoc2VsZWN0aW9uV3JhcHMpIHtcbiAgICBuZXh0VXBJbmRleCA9IEZyYWN0aW9uYWxTZWxlY3Rpb24uaGVscGVycy53cmFwcGVkU2VsZWN0aW9uKG5leHRVcEluZGV4LCBpdGVtQ291bnQpO1xuICB9IGVsc2UgaWYgKCFpc0l0ZW1JbmRleEluQm91bmRzKGVsZW1lbnQsIG5leHRVcEluZGV4KSkge1xuICAgIG5leHRVcEluZGV4ID0gbnVsbDsgLy8gQXQgc3RhcnQvZW5kIG9mIGxpc3Q7IGRvbid0IGhhdmUgYSBuZXh0IGl0ZW0gdG8gc2hvdy5cbiAgfVxuXG4gIC8vIFBsYXkgdGhlIGFuaW1hdGlvbnMgdXNpbmcgdGhvc2UgdGltaW5ncy5cbiAgbGV0IGxhc3RBbmltYXRpb25EZXRhaWxzO1xuICB0aW1pbmdzLmZvckVhY2goKHRpbWluZywgaW5kZXgpID0+IHtcbiAgICBsZXQgaXRlbSA9IGl0ZW1zW2luZGV4XTtcbiAgICBpZiAodGltaW5nKSB7XG4gICAgICBzaG93SXRlbShpdGVtLCB0cnVlKTtcbiAgICAgIGxldCBhbmltYXRpb24gPSBpdGVtLmFuaW1hdGUoa2V5ZnJhbWVzLCB0aW1pbmcpO1xuICAgICAgZWxlbWVudFthbmltYXRpb25TeW1ib2xdW2luZGV4XSA9IGFuaW1hdGlvbjtcbiAgICAgIGlmIChpbmRleCA9PT0gbmV4dFVwSW5kZXgpIHtcbiAgICAgICAgLy8gVGhpcyBpdGVtIHdpbGwgYmUgYW5pbWF0ZWQsIHNvIHdpbGwgYWxyZWFkeSBiZSBpbiB0aGUgZGVzaXJlZCBzdGF0ZVxuICAgICAgICAvLyBhZnRlciB0aGUgYW5pbWF0aW9uIGNvbXBsZXRlcy5cbiAgICAgICAgbmV4dFVwSW5kZXggPSBudWxsO1xuICAgICAgfVxuICAgICAgaWYgKHRpbWluZy5lbmREZWxheSAhPT0gMCkge1xuICAgICAgICAvLyBUaGlzIGlzIHRoZSBhbmltYXRpb24gZm9yIHRoZSBpdGVtIHRoYXQgd2lsbCBiZSBsZWZ0IHNlbGVjdGVkLlxuICAgICAgICAvLyBXZSB3YW50IHRvIGNsZWFuIHVwIHdoZW4gdGhpcyBhbmltYXRpb24gY29tcGxldGVzLlxuICAgICAgICBsYXN0QW5pbWF0aW9uRGV0YWlscyA9IHsgYW5pbWF0aW9uLCBpbmRleCwgdGltaW5nLCBmb3J3YXJkIH07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRoaXMgaXRlbSBkb2Vzbid0IHBhcnRpY2lwYXRlIGluIHRoZSBhbmltYXRpb24uXG4gICAgICBzaG93SXRlbShpdGVtLCBmYWxzZSk7XG4gICAgfVxuICB9KTtcblxuICBpZiAobGFzdEFuaW1hdGlvbkRldGFpbHMgIT0gbnVsbCkge1xuICAgIC8vIEFycmFuZ2UgZm9yIGNsZWFuLXVwIHdvcmsgdG8gYmUgcGVyZm9ybWVkLlxuICAgIGxhc3RBbmltYXRpb25EZXRhaWxzLm5leHRVcEluZGV4ID0gbmV4dFVwSW5kZXg7XG4gICAgbGFzdEFuaW1hdGlvbkRldGFpbHMuYW5pbWF0aW9uLm9uZmluaXNoID0gZXZlbnQgPT4gc2VsZWN0aW9uQW5pbWF0aW9uRmluaXNoZWQoZWxlbWVudCwgbGFzdEFuaW1hdGlvbkRldGFpbHMpO1xuICAgIGVsZW1lbnRbbGFzdEFuaW1hdGlvblN5bWJvbF0gPSBsYXN0QW5pbWF0aW9uRGV0YWlscy5hbmltYXRpb247XG4gIH0gZWxzZSB7XG4gICAgLy8gU2hvdWxkbid0IGhhcHBlbiAtLSB3ZSBzaG91bGQgYWx3YXlzIGhhdmUgYXQgbGVhc3Qgb25lIGFuaW1hdGlvbi5cbiAgICBlbGVtZW50W3BsYXlpbmdBbmltYXRpb25TeW1ib2xdID0gZmFsc2U7XG4gIH1cbn1cblxuXG5mdW5jdGlvbiBnZXRBbmltYXRpb25Gb3JJdGVtSW5kZXgoZWxlbWVudCwgaW5kZXgpIHtcbiAgaWYgKGVsZW1lbnRbYW5pbWF0aW9uU3ltYm9sXSA9PSBudWxsKSB7XG4gICAgLy8gTm90IHJlYWR5IHlldDtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBsZXQgYW5pbWF0aW9uID0gZWxlbWVudFthbmltYXRpb25TeW1ib2xdW2luZGV4XTtcbiAgaWYgKCFhbmltYXRpb24pIHtcbiAgICBsZXQgaXRlbSA9IGVsZW1lbnQuaXRlbXNbaW5kZXhdO1xuICAgIGFuaW1hdGlvbiA9IGl0ZW0uYW5pbWF0ZShlbGVtZW50LnNlbGVjdGlvbkFuaW1hdGlvbktleWZyYW1lcywge1xuICAgICAgZHVyYXRpb246IGVsZW1lbnQuc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb24sXG4gICAgICBmaWxsOiAnYm90aCdcbiAgICB9KTtcbiAgICBhbmltYXRpb24ucGF1c2UoKTtcbiAgICBlbGVtZW50W2FuaW1hdGlvblN5bWJvbF1baW5kZXhdID0gYW5pbWF0aW9uO1xuICB9XG4gIHJldHVybiBhbmltYXRpb247XG59XG5cbmZ1bmN0aW9uIGlzSXRlbUluZGV4SW5Cb3VuZHMoZWxlbWVudCwgaW5kZXgpIHtcbiAgcmV0dXJuIGluZGV4ID49IDAgJiYgZWxlbWVudC5pdGVtcyAmJiBpbmRleCA8IGVsZW1lbnQuaXRlbXMubGVuZ3RoO1xufVxuXG4vKlxuICogUmVuZGVyIHRoZSBzZWxlY3Rpb24gc3RhdGUgb2YgdGhlIGVsZW1lbnQuXG4gKlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byByZS1yZW5kZXIgYSBwcmV2aW91cyBzZWxlY3Rpb24gc3RhdGUgKGlmIHRoZVxuICogc2VsZWN0ZWRJbmRleCBwYXJhbSBpcyBvbWl0dGVkKSwgcmVuZGVyIHRoZSBzZWxlY3Rpb24gaW5zdGFudGx5IGF0IGEgZ2l2ZW5cbiAqIHdob2xlIG9yIGZyYWN0aW9uYWwgc2VsZWN0aW9uIGluZGV4LCBvciBhbmltYXRlIHRvIGEgZ2l2ZW4gc2VsZWN0aW9uIGluZGV4LlxuICpcbiAqIFRoZXJlIGFyZSBzZXZlcmFsIGRpc3RpbmN0IHNjZW5hcmlvcyB3ZSBuZWVkIHRvIGNvdmVyOlxuICpcbiAqIDEuIEluaXRpYWwgcG9zaXRpb25pbmcsIG9yIHJlcG9zaXRpb25pbmcgYWZ0ZXIgY2hhbmdpbmcgYSBwcm9wZXJ0eSBsaWtlXG4gKiAgICBzZWxlY3Rpb25BbmltYXRpb25LZXlmcmFtZXMgdGhhdCBhZmZlY3RzIHJlbmRlcmluZy5cbiAqIDIuIEFuaW1hdGUgb24gc2VsZWN0ZWRJbmRleCBjaGFuZ2UuIFRoaXMgc2hvdWxkIG92ZXJyaWRlIGFueSBhbmltYXRpb24vc3dpcGVcbiAqICAgIGFscmVhZHkgaW4gcHJvZ3Jlc3MuXG4gKiAzLiBJbnN0YW50bHkgcmVuZGVyIHRoZSBjdXJyZW50IHBvc2l0aW9uIG9mIGEgZHJhZyBvcGVyYXRpb24gaW4gcHJvZ3Jlc3MuXG4gKiA0LiBDb21wbGV0ZSBhIGRyYWcgb3BlcmF0aW9uLiBJZiB0aGUgZHJhZyB3YXNuJ3QgZmFyIGVub3VnaCB0byBhZmZlY3RcbiAqICAgIHNlbGVjdGlvbiwgd2UnbGwganVzdCBiZSByZXN0b3JpbmcgdGhlIHNlbGVjdGVkRnJhY3Rpb24gdG8gMC5cbiAqXG4gKiBJZiB0aGUgbGlzdCBkb2VzIG5vdCB3cmFwLCBhbnkgc2VsZWN0aW9uIHBvc2l0aW9uIG91dHNpZGUgdGhlIGxpc3QncyBib3VuZHNcbiAqIHdpbGwgYmUgZGFtcGVkIHRvIHByb2R1Y2UgYSB2aXN1YWwgZWZmZWN0IG9mIHRlbnNpb24uXG4gKi9cbmZ1bmN0aW9uIHJlbmRlclNlbGVjdGlvbihlbGVtZW50LCBzZWxlY3RlZEluZGV4PWVsZW1lbnQuc2VsZWN0ZWRJbmRleCwgc2VsZWN0ZWRGcmFjdGlvbj1lbGVtZW50LnNlbGVjdGVkRnJhY3Rpb24pIHtcbiAgbGV0IGl0ZW1Db3VudCA9IGVsZW1lbnQuaXRlbXMgPyBlbGVtZW50Lml0ZW1zLmxlbmd0aCA6IDA7XG4gIGlmIChpdGVtQ291bnQgPT09IDApIHtcbiAgICAvLyBOb3RoaW5nIHRvIHJlbmRlci5cbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHNlbGVjdGVkSW5kZXggPCAwKSB7XG4gICAgLy8gVE9ETzogSGFuZGxlIG5vIHNlbGVjdGlvbi5cbiAgICByZXR1cm47XG4gIH1cbiAgbGV0IHNlbGVjdGlvbiA9IHNlbGVjdGVkSW5kZXggKyBzZWxlY3RlZEZyYWN0aW9uO1xuICBpZiAoZWxlbWVudC5zZWxlY3Rpb25XcmFwcykge1xuICAgIC8vIEFwcGx5IHdyYXBwaW5nIHRvIGVuc3VyZSBjb25zaXN0ZW50IHJlcHJlc2VudGF0aW9uIG9mIHNlbGVjdGlvbi5cbiAgICBzZWxlY3Rpb24gPSBGcmFjdGlvbmFsU2VsZWN0aW9uLmhlbHBlcnMud3JhcHBlZFNlbGVjdGlvbihzZWxlY3Rpb24sIGl0ZW1Db3VudCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gQXBwbHkgZGFtcGluZyBpZiBuZWNlc3NhcnkuXG4gICAgc2VsZWN0aW9uID0gRnJhY3Rpb25hbFNlbGVjdGlvbi5oZWxwZXJzLmRhbXBlZFNlbGVjdGlvbihzZWxlY3Rpb24sIGl0ZW1Db3VudCk7XG4gIH1cbiAgbGV0IHByZXZpb3VzU2VsZWN0aW9uID0gZWxlbWVudFtwcmV2aW91c1NlbGVjdGlvblN5bWJvbF07XG4gIGlmIChlbGVtZW50W3Nob3dUcmFuc2l0aW9uU3ltYm9sXSAmJiBwcmV2aW91c1NlbGVjdGlvbiAhPSBudWxsICYmXG4gICAgICBwcmV2aW91c1NlbGVjdGlvbiAhPT0gc2VsZWN0aW9uKSB7XG4gICAgLy8gQW5pbWF0ZSBzZWxlY3Rpb24gZnJvbSBwcmV2aW91cyBzdGF0ZSB0byBuZXcgc3RhdGUuXG4gICAgYW5pbWF0ZVNlbGVjdGlvbihlbGVtZW50LCBwcmV2aW91c1NlbGVjdGlvbiwgc2VsZWN0aW9uKTtcbiAgfSBlbHNlIGlmIChzZWxlY3RlZEZyYWN0aW9uID09PSAwICYmIGVsZW1lbnRbcGxheWluZ0FuaW1hdGlvblN5bWJvbF0pIHtcbiAgICAvLyBBbHJlYWR5IGluIHByb2Nlc3Mgb2YgYW5pbWF0aW5nIHRvIGZyYWN0aW9uIDAuIER1cmluZyB0aGF0IHByb2Nlc3MsXG4gICAgLy8gaWdub3JlIHN1YnNlcXVlbnQgYXR0ZW1wdHMgdG8gcmVuZGVyU2VsZWN0aW9uIHRvIGZyYWN0aW9uIDAuXG4gICAgcmV0dXJuO1xuICB9IGVsc2Uge1xuICAgIC8vIFJlbmRlciBjdXJyZW50IHNlbGVjdGlvbiBzdGF0ZSBpbnN0YW50bHkuXG4gICAgcmVuZGVyU2VsZWN0aW9uSW5zdGFudGx5KGVsZW1lbnQsIHNlbGVjdGlvbik7XG4gIH1cbiAgZWxlbWVudFtwcmV2aW91c1NlbGVjdGlvblN5bWJvbF0gPSBzZWxlY3Rpb247XG59XG5cbi8qXG4gKiBJbnN0YW50bHkgcmVuZGVyIChkb24ndCBhbmltYXRlKSB0aGUgZWxlbWVudCdzIGl0ZW1zIGF0IHRoZSBnaXZlbiB3aG9sZSBvclxuICogZnJhY3Rpb25hbCBzZWxlY3Rpb24gaW5kZXguXG4gKi9cbmZ1bmN0aW9uIHJlbmRlclNlbGVjdGlvbkluc3RhbnRseShlbGVtZW50LCB0b1NlbGVjdGlvbikge1xuICBsZXQgYW5pbWF0aW9uRnJhY3Rpb25zID0gbWl4aW4uaGVscGVycy5hbmltYXRpb25GcmFjdGlvbnNGb3JTZWxlY3Rpb24oZWxlbWVudCwgdG9TZWxlY3Rpb24pO1xuICBhbmltYXRpb25GcmFjdGlvbnMubWFwKChhbmltYXRpb25GcmFjdGlvbiwgaW5kZXgpID0+IHtcbiAgICBsZXQgaXRlbSA9IGVsZW1lbnQuaXRlbXNbaW5kZXhdO1xuICAgIGlmIChhbmltYXRpb25GcmFjdGlvbiAhPSBudWxsKSB7XG4gICAgICBzaG93SXRlbShpdGVtLCB0cnVlKTtcbiAgICAgIHNldEFuaW1hdGlvbkZyYWN0aW9uKGVsZW1lbnQsIGluZGV4LCBhbmltYXRpb25GcmFjdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNob3dJdGVtKGl0ZW0sIGZhbHNlKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKlxuICogV2UgbWFpbnRhaW4gYW4gYXJyYXkgY29udGFpbmluZyBhbiBhbmltYXRpb24gcGVyIGl0ZW0uIFRoaXMgaXMgdXNlZCBmb3IgdHdvXG4gKiByZWFzb25zOlxuICpcbiAqICogRHVyaW5nIGEgZHJhZyBvcGVyYXRpb24sIHdlIHdhbnQgdG8gYmUgYWJsZSB0byByZXVzZSBhbmltYXRpb25zIGJldHdlZW5cbiAqICAgZHJhZyB1cGRhdGVzLlxuICogKiBXaGVuIGEgc2VsZWN0aW9uIGFuaW1hdGlvbiBjb21wbGV0ZXMsIHdlIG5lZWQgdG8gYmUgYWJsZSB0byBsZWF2ZSB0aGVcbiAqICAgdmlzaWJpbGUgaXRlbXMgaW4gYSBwYXVzZWQgc3RhdGUuIExhdGVyLCB3ZSdsbCB3YW50IHRvIGJlIGFibGUgdG8gY2xlYW4gdXBcbiAqICAgdGhvc2UgYW5pbWF0aW9ucy5cbiAqXG4gKiBOb3RlIHRoYXQgdGhpcyBhcnJheSBpcyBzcGFyc2U6IGl0IHdpbGwgb25seSBob2xkIHVwIGZyb20gMOKAkzMgYW5pbWF0aW9ucyBhdFxuICogYW55IGdpdmVuIHBvaW50LlxuICovXG5mdW5jdGlvbiByZXNldEFuaW1hdGlvbnMoZWxlbWVudCkge1xuICBsZXQgYW5pbWF0aW9ucyA9IGVsZW1lbnRbYW5pbWF0aW9uU3ltYm9sXTtcbiAgaWYgKGFuaW1hdGlvbnMpIHtcbiAgICAvLyBDYW5jZWwgZXhpc3RpbmcgYW5pbWF0aW9ucyB0byByZW1vdmUgdGhlIGVmZmVjdHMgdGhleSdyZSBhcHBseWluZy5cbiAgICBhbmltYXRpb25zLmZvckVhY2goKGFuaW1hdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChhbmltYXRpb24pIHtcbiAgICAgICAgYW5pbWF0aW9uLmNhbmNlbCgpO1xuICAgICAgICBhbmltYXRpb25zW2luZGV4XSA9IG51bGw7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgbGV0IGl0ZW1Db3VudCA9IGVsZW1lbnQuaXRlbXMgPyBlbGVtZW50Lml0ZW1zLmxlbmd0aCA6IDA7XG4gIGlmICghYW5pbWF0aW9ucyB8fCBhbmltYXRpb25zLmxlbmd0aCAhPT0gaXRlbUNvdW50KSB7XG4gICAgLy8gSGF2ZW4ndCBhbmltYXRlZCBiZWZvcmUgd2l0aCB0aGlzIG51bWJlciBvZiBpdGVtczsgKHJlKWNyZWF0ZSBhcnJheS5cbiAgICBlbGVtZW50W2FuaW1hdGlvblN5bWJvbF0gPSBuZXcgQXJyYXkoaXRlbUNvdW50KTtcbiAgfVxufVxuXG4vKlxuICogVGhlIGxhc3QgYW5pbWF0aW9uIGluIG91ciBzZWxlY3Rpb24gYW5pbWF0aW9uIGhhcyBjb21wbGV0ZWQuIENsZWFuIHVwLlxuICovXG5mdW5jdGlvbiBzZWxlY3Rpb25BbmltYXRpb25GaW5pc2hlZChlbGVtZW50LCBkZXRhaWxzKSB7XG5cbiAgLy8gV2hlbiB0aGUgbGFzdCBhbmltYXRpb24gY29tcGxldGVzLCBzaG93IHRoZSBuZXh0IGl0ZW0gaW4gdGhlIGRpcmVjdGlvblxuICAvLyB3ZSdyZSBnb2luZy4gV2FpdGluZyB0byB0aGF0IHVudGlsIHRoaXMgcG9pbnQgaXMgYSBiaXQgb2YgYSBoYWNrIHRvIGF2b2lkXG4gIC8vIGhhdmluZyBhIG5leHQgaXRlbSB0aGF0J3MgaGlnaGVyIGluIHRoZSBuYXR1cmFsIHotb3JkZXIgb2JzY3VyZSBvdGhlciBpdGVtc1xuICAvLyBkdXJpbmcgYW5pbWF0aW9uLlxuICBsZXQgbmV4dFVwSW5kZXggPSBkZXRhaWxzLm5leHRVcEluZGV4O1xuICBpZiAobmV4dFVwSW5kZXggIT0gbnVsbCkge1xuICAgIGlmIChlbGVtZW50W2FuaW1hdGlvblN5bWJvbF1bbmV4dFVwSW5kZXhdKSB7XG4gICAgICAvLyBDYW5jZWwgZXhpc3Rpbmcgc2VsZWN0aW9uIGFuaW1hdGlvbiBzbyB3ZSBjYW4gY29uc3RydWN0IGEgbmV3IG9uZS5cbiAgICAgIGVsZW1lbnRbYW5pbWF0aW9uU3ltYm9sXVtuZXh0VXBJbmRleF0uY2FuY2VsKCk7XG4gICAgICBlbGVtZW50W2FuaW1hdGlvblN5bWJvbF1bbmV4dFVwSW5kZXhdID0gbnVsbDtcbiAgICB9XG4gICAgbGV0IGFuaW1hdGlvbkZyYWN0aW9uID0gZGV0YWlscy5mb3J3YXJkID8gMCA6IDE7XG4gICAgc2V0QW5pbWF0aW9uRnJhY3Rpb24oZWxlbWVudCwgbmV4dFVwSW5kZXgsIGFuaW1hdGlvbkZyYWN0aW9uKTtcbiAgICBzaG93SXRlbShlbGVtZW50Lml0ZW1zW25leHRVcEluZGV4XSwgdHJ1ZSk7XG4gIH1cblxuICBlbGVtZW50W2xhc3RBbmltYXRpb25TeW1ib2xdLm9uZmluaXNoID0gbnVsbDtcbiAgZWxlbWVudFtwbGF5aW5nQW5pbWF0aW9uU3ltYm9sXSA9IGZhbHNlO1xufVxuXG4vKlxuICogUGF1c2UgdGhlIGluZGljYXRlZCBhbmltYXRpb24gYW5kIGhhdmUgaXQgc2hvdyB0aGUgYW5pbWF0aW9uIGF0IHRoZSBnaXZlblxuICogZnJhY3Rpb24gKGJldHdlZW4gMCBhbmQgMSkgb2YgdGhlIHdheSB0aHJvdWdoIHRoZSBhbmltYXRpb24uXG4gKi9cbmZ1bmN0aW9uIHNldEFuaW1hdGlvbkZyYWN0aW9uKGVsZW1lbnQsIGl0ZW1JbmRleCwgZnJhY3Rpb24pIHtcbiAgbGV0IGFuaW1hdGlvbiA9IGdldEFuaW1hdGlvbkZvckl0ZW1JbmRleChlbGVtZW50LCBpdGVtSW5kZXgpO1xuICBpZiAoYW5pbWF0aW9uKSB7XG4gICAgbGV0IGR1cmF0aW9uID0gZWxlbWVudC5zZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvbjtcbiAgICBpZiAoZHVyYXRpb24pIHtcbiAgICAgIGFuaW1hdGlvbi5jdXJyZW50VGltZSA9IGZyYWN0aW9uICogZHVyYXRpb247XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNob3dJdGVtKGl0ZW0sIGZsYWcpIHtcbiAgaXRlbS5zdHlsZS52aXNpYmlsaXR5ID0gZmxhZyA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nO1xufVxuXG4vKlxuICogRmlndXJlIG91dCBob3cgbWFueSBzdGVwcyBpdCB3aWxsIHRha2UgdG8gZ28gZnJvbSBmcm9tU2VsZWN0aW9uIHRvXG4gKiB0b1NlbGVjdGlvbi4gVG8gZ28gZnJvbSBpdGVtIDMgdG8gaXRlbSA0IGlzIG9uZSBzdGVwLlxuICpcbiAqIElmIHdyYXBwaW5nIGlzIGFsbG93ZWQsIHRoZW4gZ29pbmcgZnJvbSB0aGUgbGFzdCBpdGVtIHRvIHRoZSBmaXJzdCB3aWxsIHRha2VcbiAqIG9uZSBzdGVwIChmb3J3YXJkKSwgYW5kIGdvaW5nIGZyb20gdGhlIGZpcnN0IGl0ZW0gdG8gdGhlIGxhc3Qgd2lsbCB0YWtlIG9uZVxuICogc3RlcCAoYmFja3dhcmQpLlxuICovXG5mdW5jdGlvbiBzdGVwc1RvSW5kZXgobGVuZ3RoLCBhbGxvd1dyYXAsIGZyb21TZWxlY3Rpb24sIHRvU2VsZWN0aW9uKSB7XG4gIGxldCBzdGVwcyA9IHRvU2VsZWN0aW9uIC0gZnJvbVNlbGVjdGlvbjtcbiAgLy8gV3JhcHBpbmcgb25seSBraWNrcyBpbiB3aGVuIGxpc3QgaGFzIG1vcmUgdGhhbiAxIGl0ZW0uXG4gIGlmIChhbGxvd1dyYXAgJiYgbGVuZ3RoID4gMSkge1xuICAgIGxldCB3cmFwU3RlcHMgPSBsZW5ndGggLSBNYXRoLmFicyhzdGVwcyk7XG4gICAgaWYgKHdyYXBTdGVwcyA8PSAxKSB7XG4gICAgICAvLyBTcGVjaWFsIGNhc2VcbiAgICAgIHN0ZXBzID0gc3RlcHMgPCAwID9cbiAgICAgICAgd3JhcFN0ZXBzIDogICAvLyBXcmFwIGZvcndhcmQgZnJvbSBsYXN0IGl0ZW0gdG8gZmlyc3QuXG4gICAgICAgIC13cmFwU3RlcHM7ICAgLy8gV3JhcCBiYWNrd2FyZCBmcm9tIGZpcnN0IGl0ZW0gdG8gbGFzdC5cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0ZXBzO1xufVxuIiwiLy8gVXNlZCB0byBhc3NpZ24gdW5pcXVlIElEcyB0byBpdGVtIGVsZW1lbnRzIHdpdGhvdXQgSURzLlxubGV0IGlkQ291bnQgPSAwO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggU2VsZWN0aW9uQXJpYUFjdGl2ZS4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIHRyZWF0cyB0aGUgc2VsZWN0ZWQgaXRlbSBpbiBhIGxpc3QgYXMgdGhlIGFjdGl2ZSBpdGVtIGluIEFSSUFcbiAgICogYWNjZXNzaWJpbGl0eSB0ZXJtcy5cbiAgICpcbiAgICogSGFuZGxpbmcgQVJJQSBzZWxlY3Rpb24gc3RhdGUgcHJvcGVybHkgaXMgYWN0dWFsbHkgcXVpdGUgY29tcGxleDpcbiAgICpcbiAgICogKiBUaGUgaXRlbXMgaW4gdGhlIGxpc3QgbmVlZCB0byBiZSBpbmRpY2F0ZWQgYXMgcG9zc2libGUgaXRlbXMgdmlhIGFuIEFSSUFcbiAgICogICBgcm9sZWAgYXR0cmlidXRlIHZhbHVlIHN1Y2ggYXMgXCJvcHRpb25cIi5cbiAgICogKiBUaGUgc2VsZWN0ZWQgaXRlbSBuZWVkIHRvIGJlIG1hcmtlZCBhcyBzZWxlY3RlZCBieSBzZXR0aW5nIHRoZSBpdGVtJ3NcbiAgICogICBgYXJpYS1zZWxlY3RlZGAgYXR0cmlidXRlIHRvIHRydWUgKmFuZCogdGhlIG90aGVyIGl0ZW1zIG5lZWQgYmUgbWFya2VkIGFzXG4gICAqICAgKm5vdCogc2VsZWN0ZWQgYnkgc2V0dGluZyBgYXJpYS1zZWxlY3RlZGAgdG8gZmFsc2UuXG4gICAqICogVGhlIG91dGVybW9zdCBlbGVtZW50IHdpdGggdGhlIGtleWJvYXJkIGZvY3VzIG5lZWRzIHRvIGhhdmUgYXR0cmlidXRlc1xuICAgKiAgIHNldCBvbiBpdCBzbyB0aGF0IHRoZSBzZWxlY3Rpb24gaXMga25vd2FibGUgYXQgdGhlIGxpc3QgbGV2ZWwgdmlhIHRoZVxuICAgKiAgIGBhcmlhLWFjdGl2ZWRlc2NlbmRhbnRgIGF0dHJpYnV0ZS5cbiAgICogKiBVc2Ugb2YgYGFyaWEtYWN0aXZlZGVzY2VuZGFudGAgaW4gdHVybiByZXF1aXJlcyB0aGF0IGFsbCBpdGVtcyBpbiB0aGVcbiAgICogICBsaXN0IGhhdmUgSUQgYXR0cmlidXRlcyBhc3NpZ25lZCB0byB0aGVtLlxuICAgKlxuICAgKiBUaGlzIG1peGluIHRyaWVzIHRvIGFkZHJlc3MgYWxsIG9mIHRoZSBhYm92ZSByZXF1aXJlbWVudHMuIFRvIHRoYXQgZW5kLFxuICAgKiB0aGlzIG1peGluIHdpbGwgYXNzaWduIGdlbmVyYXRlZCBJRHMgdG8gYW55IGl0ZW0gdGhhdCBkb2Vzbid0IGFscmVhZHkgaGF2ZVxuICAgKiBhbiBJRC5cbiAgICpcbiAgICogQVJJQSByZWxpZXMgb24gZWxlbWVudHMgdG8gcHJvdmlkZSBgcm9sZWAgYXR0cmlidXRlcy4gVGhpcyBtaXhpbiB3aWxsIGFwcGx5XG4gICAqIGEgZGVmYXVsdCByb2xlIG9mIFwibGlzdGJveFwiIG9uIHRoZSBvdXRlciBsaXN0IGlmIGl0IGRvZXNuJ3QgYWxyZWFkeSBoYXZlIGFuXG4gICAqIGV4cGxpY2l0IHJvbGUuIFNpbWlsYXJseSwgdGhpcyBtaXhpbiB3aWxsIGFwcGx5IGEgZGVmYXVsdCByb2xlIG9mIFwib3B0aW9uXCJcbiAgICogdG8gYW55IGxpc3QgaXRlbSB0aGF0IGRvZXMgbm90IGFscmVhZHkgaGF2ZSBhIHJvbGUgc3BlY2lmaWVkLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGV4cGVjdHMgYSBzZXQgb2YgbWVtYmVycyB0aGF0IG1hbmFnZSB0aGUgc3RhdGUgb2YgdGhlIHNlbGVjdGlvbjpcbiAgICogYGFwcGx5U2VsZWN0aW9uYCwgYGl0ZW1BZGRlZGAsIGFuZCBgc2VsZWN0ZWRJbmRleGAuIFlvdSBjYW4gc3VwcGx5IHRoZXNlXG4gICAqIHlvdXJzZWxmLCBvciBkbyBzbyB2aWEgdGhlIFtTaW5nbGVTZWxlY3Rpb25dKFNpbmdsZVNlbGVjdGlvbi5tZCkgbWl4aW4uXG4gICAqL1xuICBjbGFzcyBTZWxlY3Rpb25BcmlhQWN0aXZlIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBhcHBseVNlbGVjdGlvbihpdGVtLCBzZWxlY3RlZCkge1xuICAgICAgaWYgKHN1cGVyLmFwcGx5U2VsZWN0aW9uKSB7IHN1cGVyLmFwcGx5U2VsZWN0aW9uKGl0ZW0sIHNlbGVjdGVkKTsgfVxuICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCBzZWxlY3RlZCk7XG4gICAgICBsZXQgaXRlbUlkID0gaXRlbS5pZDtcbiAgICAgIGlmIChpdGVtSWQpIHtcbiAgICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgICAgb3V0ZXJtb3N0RWxlbWVudCh0aGlzKS5zZXRBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcsIGl0ZW1JZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb2xsZWN0aXZlQ2hhbmdlZCgpIHtcbiAgICAgIGlmIChzdXBlci5jb2xsZWN0aXZlQ2hhbmdlZCkgeyBzdXBlci5jb2xsZWN0aXZlQ2hhbmdlZCgpOyB9XG4gICAgICBzZXRBcmlhQXR0cmlidXRlcyh0aGlzKTtcbiAgICB9XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jb25uZWN0ZWRDYWxsYmFjaykgeyBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpOyB9XG4gICAgICBzZXRBcmlhQXR0cmlidXRlcyh0aGlzKTtcbiAgICB9XG5cbiAgICBpdGVtQWRkZWQoaXRlbSkge1xuICAgICAgaWYgKHN1cGVyLml0ZW1BZGRlZCkgeyBzdXBlci5pdGVtQWRkZWQoaXRlbSk7IH1cblxuICAgICAgaWYgKCFpdGVtLmdldEF0dHJpYnV0ZSgncm9sZScpKSB7XG4gICAgICAgIC8vIEFzc2lnbiBhIGRlZmF1bHQgQVJJQSByb2xlLlxuICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgncm9sZScsICdvcHRpb24nKTtcbiAgICAgIH1cblxuICAgICAgLy8gRW5zdXJlIGVhY2ggaXRlbSBoYXMgYW4gSUQgc28gd2UgY2FuIHNldCBhcmlhLWFjdGl2ZWRlc2NlbmRhbnQgb24gdGhlXG4gICAgICAvLyBvdmVyYWxsIGxpc3Qgd2hlbmV2ZXIgdGhlIHNlbGVjdGlvbiBjaGFuZ2VzLlxuICAgICAgLy9cbiAgICAgIC8vIFRoZSBJRCB3aWxsIHRha2UgdGhlIGZvcm0gb2YgYSBiYXNlIElEIHBsdXMgYSB1bmlxdWUgaW50ZWdlci4gVGhlIGJhc2VcbiAgICAgIC8vIElEIHdpbGwgYmUgaW5jb3Jwb3JhdGUgdGhlIGNvbXBvbmVudCdzIG93biBJRC4gRS5nLiwgaWYgYSBjb21wb25lbnQgaGFzXG4gICAgICAvLyBJRCBcImZvb1wiLCB0aGVuIGl0cyBpdGVtcyB3aWxsIGhhdmUgSURzIHRoYXQgbG9vayBsaWtlIFwiX2Zvb09wdGlvbjFcIi4gSWZcbiAgICAgIC8vIHRoZSBjb21wbmVudCBoYXMgbm8gSUQgaXRzZWxmLCBpdHMgaXRlbXMgd2lsbCBnZXQgSURzIHRoYXQgbG9vayBsaWtlXG4gICAgICAvLyBcIl9vcHRpb24xXCIuIEl0ZW0gSURzIGFyZSBwcmVmaXhlZCB3aXRoIGFuIHVuZGVyc2NvcmUgdG8gZGlmZmVyZW50aWF0ZVxuICAgICAgLy8gdGhlbSBmcm9tIG1hbnVhbGx5LWFzc2lnbmVkIElEcywgYW5kIHRvIG1pbmltaXplIHRoZSBwb3RlbnRpYWwgZm9yIElEXG4gICAgICAvLyBjb25mbGljdHMuXG4gICAgICBpZiAoIWl0ZW0uaWQpIHtcbiAgICAgICAgbGV0IGJhc2VJZCA9IHRoaXMuaWQgP1xuICAgICAgICAgICAgXCJfXCIgKyB0aGlzLmlkICsgXCJPcHRpb25cIiA6XG4gICAgICAgICAgICBcIl9vcHRpb25cIjtcbiAgICAgICAgaXRlbS5pZCA9IGJhc2VJZCArIGlkQ291bnQrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgc2VsZWN0ZWRJdGVtKCkge1xuICAgICAgcmV0dXJuIHN1cGVyLnNlbGVjdGVkSXRlbTtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGVkSXRlbShpdGVtKSB7XG4gICAgICBpZiAoJ3NlbGVjdGVkSXRlbScgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJdGVtID0gaXRlbTsgfVxuICAgICAgLy8gQ2F0Y2ggdGhlIGNhc2Ugd2hlcmUgdGhlIHNlbGVjdGlvbiBpcyByZW1vdmVkLlxuICAgICAgaWYgKGl0ZW0gPT0gbnVsbCkge1xuICAgICAgICBvdXRlcm1vc3RFbGVtZW50KHRoaXMpLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1hY3RpdmVkZXNjZW5kYW50Jyk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gU2VsZWN0aW9uQXJpYUFjdGl2ZTtcbn07XG5cblxuLy8gUmV0dXJuIHRoZSBmaXJzdCBBUklBIGFjdGl2ZWRlc2NlbmRhbnQgZGVmaW5lZCBieSB0aGUgY29sbGVjdGl2ZS5cbmZ1bmN0aW9uIGdldENvbGxlY3RpdmVBcmlhQWN0aXZlRGVzY2VuZGFudChjb2xsZWN0aXZlKSB7XG4gIGxldCBkZXNjZW5kYW50cyA9IGNvbGxlY3RpdmUuZWxlbWVudHMubWFwKGVsZW1lbnQgPT4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcpKTtcbiAgbGV0IG5vbk51bGxEZXNjZW5kYW50cyA9IGRlc2NlbmRhbnRzLmZpbHRlcihkZXNjZW5kYW50ID0+IGRlc2NlbmRhbnQgIT09IG51bGwpO1xuICByZXR1cm4gbm9uTnVsbERlc2NlbmRhbnRzWzBdO1xufVxuXG5cbi8vIFJldHVybiB0aGUgZmlyc3QgQVJJQSBsYWJlbCBkZWZpbmVkIGJ5IHRoZSBjb2xsZWN0aXZlLlxuZnVuY3Rpb24gZ2V0Q29sbGVjdGl2ZUFyaWFSb2xlKGNvbGxlY3RpdmUpIHtcbiAgbGV0IHJvbGVzID0gY29sbGVjdGl2ZS5lbGVtZW50cy5tYXAoZWxlbWVudCA9PiBlbGVtZW50LmdldEF0dHJpYnV0ZSgncm9sZScpKTtcbiAgbGV0IG5vbk51bGxSb2xlcyA9IHJvbGVzLmZpbHRlcihyb2xlID0+IHJvbGUgIT09IG51bGwpO1xuICByZXR1cm4gbm9uTnVsbFJvbGVzWzBdO1xufVxuXG5mdW5jdGlvbiBvdXRlcm1vc3RFbGVtZW50KGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQuY29sbGVjdGl2ZSA/XG4gICAgZWxlbWVudC5jb2xsZWN0aXZlLm91dGVybW9zdEVsZW1lbnQgOlxuICAgIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHNldEFyaWFBdHRyaWJ1dGVzKGVsZW1lbnQpIHtcblxuICBpZiAoIWVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgIHJldHVybjsgLy8gTm90IGluIGRvY3VtZW50IHlldFxuICB9XG4gIGlmIChlbGVtZW50LmNvbGxlY3RpdmUgJiYgZWxlbWVudCAhPT0gZWxlbWVudC5jb2xsZWN0aXZlLm91dGVybW9zdEVsZW1lbnQpIHtcbiAgICAvLyBOb3QgdGhlIG91dGVybW9zdCBlbGVtZW50LCBkbyBub3RoaW5nIGFuZCBsZXQgdGhlIG91dGVybW9zdCBlbGVtZW50XG4gICAgLy8gaGFuZGxlIHRoaW5ncy5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBFbnN1cmUgdGhlIGVsZW1lbnQgaGFzIGFuIEFSSUEgcm9sZS5cbiAgaWYgKCFlbGVtZW50LmdldEF0dHJpYnV0ZSgncm9sZScpKSB7XG4gICAgLy8gVHJ5IHRvIHByb21vdGUgYW4gQVJJQSByb2xlIGZyb20gYW4gaW5uZXIgZWxlbWVudC4gSWYgbm9uZSBpcyBmb3VuZCxcbiAgICAvLyB1c2UgYSBkZWZhdWx0IHJvbGUuXG4gICAgbGV0IHJvbGUgPSBlbGVtZW50LmNvbGxlY3RpdmUgJiYgZ2V0Q29sbGVjdGl2ZUFyaWFSb2xlKGVsZW1lbnQuY29sbGVjdGl2ZSk7XG4gICAgcm9sZSA9IHJvbGUgfHwgJ2xpc3Rib3gnO1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdyb2xlJywgcm9sZSk7XG4gIH1cblxuICBpZiAoIWVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnKSAmJiBlbGVtZW50LmNvbGxlY3RpdmUpIHtcbiAgICAvLyBUcnkgdG8gcHJvbW90ZSBhbiBBUklBIGFjdGl2ZWRlc2NlbmRhbnQgdmFsdWUgZnJvbSBhbiBpbm5lciBlbGVtZW50LlxuICAgIGxldCBkZXNjZW5kYW50ID0gZ2V0Q29sbGVjdGl2ZUFyaWFBY3RpdmVEZXNjZW5kYW50KGVsZW1lbnQuY29sbGVjdGl2ZSk7XG4gICAgaWYgKGRlc2NlbmRhbnQpIHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnLCBkZXNjZW5kYW50KTtcbiAgICB9XG4gIH1cblxuICBpZiAoZWxlbWVudC5jb2xsZWN0aXZlKSB7XG4gICAgLy8gUmVtb3ZlIHRoZSBBUklBIHJvbGUgYW5kIGFjdGl2ZWRlc2NlbmRhbnQgdmFsdWVzIGZyb20gdGhlIGNvbGxlY3RpdmUnc1xuICAgIC8vIGlubmVyIGVsZW1lbnRzLlxuICAgIGVsZW1lbnQuY29sbGVjdGl2ZS5lbGVtZW50cy5mb3JFYWNoKG1lbWJlciA9PiB7XG4gICAgICBpZiAobWVtYmVyICE9PSBlbGVtZW50KSB7XG4gICAgICAgIG1lbWJlci5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcpO1xuICAgICAgICBtZW1iZXIuc2V0QXR0cmlidXRlKCdyb2xlJywgJ25vbmUnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG59XG4iLCIvKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFNlbGVjdGlvbkhpZ2hsaWdodC4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIGFwcGxpZXMgc3RhbmRhcmQgaGlnaGxpZ2h0IGNvbG9ycyB0byBhIHNlbGVjdGVkIGl0ZW0uXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gaGlnaGxpZ2h0cyB0ZXh0dWFsIGl0ZW1zIChlLmcuLCBpbiBhIGxpc3QpIGluIGEgc3RhbmRhcmQgd2F5IGJ5XG4gICAqIHVzaW5nIHRoZSBDU1MgYGhpZ2hsaWdodGAgYW5kIGBoaWdobGlnaHR0ZXh0YCBjb2xvciB2YWx1ZXMuIFRoZXNlIHZhbHVlc1xuICAgKiByZXNwZWN0IG9wZXJhdGluZyBzeXN0ZW0gZGVmYXVsdHMgYW5kIHVzZXIgcHJlZmVyZW5jZXMsIGFuZCBoZW5jZSBhcmUgZ29vZFxuICAgKiBkZWZhdWx0IHZhbHVlcyBmb3IgaGlnaGxpZ2h0IGNvbG9ycy5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIGFuIGBhcHBseVNlbGVjdGlvbmAgbWV0aG9kIHRvIGJlIGNhbGxlZCBvbiBhbiBpdGVtIHdoZW5cbiAgICogaXRzIHNlbGVjdGVkIHN0YXRlIGNoYW5nZXMuIFlvdSBjYW4gdXNlIHRoZVxuICAgKiBbU2luZ2xlU2VsZWN0aW9uXShTaW5nbGVTZWxlY3Rpb24ubWQpIG1peGluIGZvciB0aGF0IHB1cnBvc2UuXG4gICAqL1xuICBjbGFzcyBTZWxlY3Rpb25IaWdobGlnaHQgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGFwcGx5U2VsZWN0aW9uKGl0ZW0sIHNlbGVjdGVkKSB7XG4gICAgICBpZiAoc3VwZXIuYXBwbHlTZWxlY3Rpb24pIHsgc3VwZXIuYXBwbHlTZWxlY3Rpb24oaXRlbSwgc2VsZWN0ZWQpOyB9XG4gICAgICBpdGVtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHNlbGVjdGVkID8gJ2hpZ2hsaWdodCcgOiAnJztcbiAgICAgIGl0ZW0uc3R5bGUuY29sb3IgPSBzZWxlY3RlZCA/ICdoaWdobGlnaHR0ZXh0JyA6ICcnO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIFNlbGVjdGlvbkhpZ2hsaWdodDtcbn07XG4iLCIvKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFNlbGVjdGlvbkluVmlldy4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIHNjcm9sbHMgYSBjb250YWluZXIgdG8gZW5zdXJlIHRoYXQgYSBuZXdseS1zZWxlY3RlZCBpdGVtIGlzXG4gICAqIHZpc2libGUgdG8gdGhlIHVzZXIuXG4gICAqXG4gICAqIFdoZW4gdGhlIHNlbGVjdGVkIGl0ZW0gaW4gYSBsaXN0LWxpa2UgY29tcG9uZW50IGNoYW5nZXMsIGl0J3MgZWFzaWVyIGZvclxuICAgKiB0aGUgdG8gY29uZmlybSB0aGF0IHRoZSBzZWxlY3Rpb24gaGFzIGNoYW5nZWQgdG8gYW4gYXBwcm9wcmlhdGUgaXRlbSBpZiB0aGVcbiAgICogdXNlciBjYW4gYWN0dWFsbHkgc2VlIHRoYXQgaXRlbS5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIGEgYHNlbGVjdGVkSXRlbWAgcHJvcGVydHkgdG8gYmUgc2V0IHdoZW4gdGhlIHNlbGVjdGlvblxuICAgKiBjaGFuZ2VzLiBZb3UgY2FuIHN1cHBseSB0aGF0IHlvdXJzZWxmLCBvciB1c2UgdGhlXG4gICAqIFtTaW5nbGVTZWxlY3Rpb25dKFNpbmdsZVNlbGVjdGlvbi5tZCkgbWl4aW4uXG4gICAqL1xuICBjbGFzcyBTZWxlY3Rpb25JblZpZXcgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKSB7IHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7IH1cbiAgICAgIGxldCBzZWxlY3RlZEl0ZW0gPSB0aGlzLnNlbGVjdGVkSXRlbTtcbiAgICAgIGlmIChzZWxlY3RlZEl0ZW0pIHtcbiAgICAgICAgdGhpcy5zY3JvbGxJdGVtSW50b1ZpZXcoc2VsZWN0ZWRJdGVtKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgc2VsZWN0ZWRJdGVtKCkge1xuICAgICAgcmV0dXJuIHN1cGVyLnNlbGVjdGVkSXRlbTtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGVkSXRlbShpdGVtKSB7XG4gICAgICBpZiAoJ3NlbGVjdGVkSXRlbScgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJdGVtID0gaXRlbTsgfVxuICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgLy8gS2VlcCB0aGUgc2VsZWN0ZWQgaXRlbSBpbiB2aWV3LlxuICAgICAgICB0aGlzLnNjcm9sbEl0ZW1JbnRvVmlldyhpdGVtKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTY3JvbGwgdGhlIGdpdmVuIGVsZW1lbnQgY29tcGxldGVseSBpbnRvIHZpZXcsIG1pbmltaXppbmcgdGhlIGRlZ3JlZSBvZlxuICAgICAqIHNjcm9sbGluZyBwZXJmb3JtZWQuXG4gICAgICpcbiAgICAgKiBCbGluayBoYXMgYSBgc2Nyb2xsSW50b1ZpZXdJZk5lZWRlZCgpYCBmdW5jdGlvbiB0aGF0IGRvZXMgc29tZXRoaW5nXG4gICAgICogc2ltaWxhciwgYnV0IHVuZm9ydHVuYXRlbHkgaXQncyBub24tc3RhbmRhcmQsIGFuZCBpbiBhbnkgZXZlbnQgb2Z0ZW4gZW5kc1xuICAgICAqIHVwIHNjcm9sbGluZyBtb3JlIHRoYW4gaXMgYWJzb2x1dGVseSBuZWNlc3NhcnkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpdGVtIC0gdGhlIGl0ZW0gdG8gc2Nyb2xsIGludG8gdmlldy5cbiAgICAgKi9cbiAgICBzY3JvbGxJdGVtSW50b1ZpZXcoaXRlbSkge1xuICAgICAgaWYgKHN1cGVyLnNjcm9sbEl0ZW1JbnRvVmlldykgeyBzdXBlci5zY3JvbGxJdGVtSW50b1ZpZXcoKTsgfVxuICAgICAgLy8gR2V0IHRoZSByZWxhdGl2ZSBwb3NpdGlvbiBvZiB0aGUgaXRlbSB3aXRoIHJlc3BlY3QgdG8gdGhlIHRvcCBvZiB0aGVcbiAgICAgIC8vIGxpc3QncyBzY3JvbGxhYmxlIGNhbnZhcy4gQW4gaXRlbSBhdCB0aGUgdG9wIG9mIHRoZSBsaXN0IHdpbGwgaGF2ZSBhXG4gICAgICAvLyBlbGVtZW50VG9wIG9mIDAuXG5cbiAgICAgIGxldCBzY3JvbGxUYXJnZXQgPSB0aGlzLnNjcm9sbFRhcmdldDtcbiAgICAgIGxldCBlbGVtZW50VG9wID0gaXRlbS5vZmZzZXRUb3AgLSBzY3JvbGxUYXJnZXQub2Zmc2V0VG9wIC0gc2Nyb2xsVGFyZ2V0LmNsaWVudFRvcDtcbiAgICAgIGxldCBlbGVtZW50Qm90dG9tID0gZWxlbWVudFRvcCArIGl0ZW0ub2Zmc2V0SGVpZ2h0O1xuICAgICAgLy8gRGV0ZXJtaW5lIHRoZSBib3R0b20gb2YgdGhlIHNjcm9sbGFibGUgY2FudmFzLlxuICAgICAgbGV0IHNjcm9sbEJvdHRvbSA9IHNjcm9sbFRhcmdldC5zY3JvbGxUb3AgKyBzY3JvbGxUYXJnZXQuY2xpZW50SGVpZ2h0O1xuICAgICAgaWYgKGVsZW1lbnRCb3R0b20gPiBzY3JvbGxCb3R0b20pIHtcbiAgICAgICAgLy8gU2Nyb2xsIHVwIHVudGlsIGl0ZW0gaXMgZW50aXJlbHkgdmlzaWJsZS5cbiAgICAgICAgc2Nyb2xsVGFyZ2V0LnNjcm9sbFRvcCArPSBlbGVtZW50Qm90dG9tIC0gc2Nyb2xsQm90dG9tO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZWxlbWVudFRvcCA8IHNjcm9sbFRhcmdldC5zY3JvbGxUb3ApIHtcbiAgICAgICAgLy8gU2Nyb2xsIGRvd24gdW50aWwgaXRlbSBpcyBlbnRpcmVseSB2aXNpYmxlLlxuICAgICAgICBzY3JvbGxUYXJnZXQuc2Nyb2xsVG9wID0gZWxlbWVudFRvcDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZWxlbWVudCB0aGF0IHNob3VsZCBiZSBzY3JvbGxlZCB0byBicmluZyBhbiBpdGVtIGludG8gdmlldy5cbiAgICAgKlxuICAgICAqIFRoZSBkZWZhdWx0IHZhbHVlIG9mIHRoaXMgcHJvcGVydHkgaXMgdGhlIGVsZW1lbnQgaXRzZWxmLlxuICAgICAqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIGdldCBzY3JvbGxUYXJnZXQoKSB7XG4gICAgICAvLyBQcmVmZXIgYmFzZSByZXN1bHQuXG4gICAgICByZXR1cm4gJ3Njcm9sbFRhcmdldCcgaW4gYmFzZS5wcm90b3R5cGUgPyBzdXBlci5zY3JvbGxUYXJnZXQgOiB0aGlzO1xuICAgIH1cbiAgICBzZXQgc2Nyb2xsVGFyZ2V0KGVsZW1lbnQpIHtcbiAgICAgIGlmICgnc2Nyb2xsVGFyZ2V0JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zY3JvbGxUYXJnZXQgPSBlbGVtZW50OyB9XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gU2VsZWN0aW9uSW5WaWV3O1xufTtcbiIsIi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggU2hhZG93RWxlbWVudFJlZmVyZW5jZXMuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB0byBjcmVhdGUgcmVmZXJlbmNlcyB0byBlbGVtZW50cyBpbiBhIGNvbXBvbmVudCdzIFNoYWRvdyBET00gc3VidHJlZS5cbiAgICpcbiAgICogVGhpcyBhZGRzIGEgbWVtYmVyIG9uIHRoZSBjb21wb25lbnQgY2FsbGVkIGB0aGlzLiRgIHRoYXQgY2FuIGJlIHVzZWQgdG9cbiAgICogcmVmZXJlbmNlIHNoYWRvdyBlbGVtZW50cyB3aXRoIElEcy4gRS5nLiwgaWYgY29tcG9uZW50J3Mgc2hhZG93IGNvbnRhaW5zIGFuXG4gICAqIGVsZW1lbnQgYDxidXR0b24gaWQ9XCJmb29cIj5gLCB0aGVuIHRoaXMgbWl4aW4gd2lsbCBjcmVhdGUgYSBtZW1iZXJcbiAgICogYHRoaXMuJC5mb29gIHRoYXQgcG9pbnRzIHRvIHRoYXQgYnV0dG9uLlxuICAgKlxuICAgKiBTdWNoIHJlZmVyZW5jZXMgc2ltcGxpZnkgYSBjb21wb25lbnQncyBhY2Nlc3MgdG8gaXRzIG93biBlbGVtZW50cy4gSW5cbiAgICogZXhjaGFuZ2UsIHRoaXMgbWl4aW4gdHJhZGVzIG9mZiBhIG9uZS10aW1lIGNvc3Qgb2YgcXVlcnlpbmcgYWxsIGVsZW1lbnRzIGluXG4gICAqIHRoZSBzaGFkb3cgdHJlZSBpbnN0ZWFkIG9mIHBheWluZyBhbiBvbmdvaW5nIGNvc3QgdG8gcXVlcnkgZm9yIGFuIGVsZW1lbnRcbiAgICogZWFjaCB0aW1lIHRoZSBjb21wb25lbnQgd2FudHMgdG8gaW5zcGVjdCBvciBtYW5pcHVsYXRlIGl0LlxuICAgKlxuICAgKiBUaGlzIG1peGluIGV4cGVjdHMgdGhlIGNvbXBvbmVudCB0byBkZWZpbmUgYSBTaGFkb3cgRE9NIHN1YnRyZWUuIFlvdSBjYW5cbiAgICogY3JlYXRlIHRoYXQgdHJlZSB5b3Vyc2VsZiwgb3IgbWFrZSB1c2Ugb2YgdGhlXG4gICAqIFtTaGFkb3dUZW1wbGF0ZV0oU2hhZG93VGVtcGxhdGUubWQpIG1peGluLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGlzIGluc3BpcmVkIGJ5IFBvbHltZXIncyBbYXV0b21hdGljXG4gICAqIG5vZGUgZmluZGluZ10oaHR0cHM6Ly93d3cucG9seW1lci1wcm9qZWN0Lm9yZy8xLjAvZG9jcy9kZXZndWlkZS9sb2NhbC1kb20uaHRtbCNub2RlLWZpbmRpbmcpXG4gICAqIGZlYXR1cmUuXG4gICAqL1xuICBjbGFzcyBTaGFkb3dFbGVtZW50UmVmZXJlbmNlcyBleHRlbmRzIGJhc2Uge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgaWYgKHRoaXMuc2hhZG93Um9vdCkge1xuICAgICAgICAvLyBMb29rIGZvciBlbGVtZW50cyBpbiB0aGUgc2hhZG93IHN1YnRyZWUgdGhhdCBoYXZlIGlkIGF0dHJpYnV0ZXMuXG4gICAgICAgIC8vIEFuIGFsdGVybmF0aXZlbHkgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtaXhpbiB3b3VsZCBiZSB0byBqdXN0IGRlZmluZVxuICAgICAgICAvLyBhIHRoaXMuJCBnZXR0ZXIgdGhhdCBsYXppbHkgZG9lcyB0aGlzIHNlYXJjaCB0aGUgZmlyc3QgdGltZSBzb21lb25lXG4gICAgICAgIC8vIHRyaWVzIHRvIGFjY2VzcyB0aGlzLiQuIFRoYXQgbWlnaHQgaW50cm9kdWNlIHNvbWUgY29tcGxleGl0eSDigJMgaWYgdGhlXG4gICAgICAgIC8vIHRoZSB0cmVlIGNoYW5nZWQgYWZ0ZXIgaXQgd2FzIGZpcnN0IHBvcHVsYXRlZCwgdGhlIHJlc3VsdCBvZlxuICAgICAgICAvLyBzZWFyY2hpbmcgZm9yIGEgbm9kZSBtaWdodCBiZSBzb21ld2hhdCB1bnByZWRpY3RhYmxlLlxuICAgICAgICB0aGlzLiQgPSB7fTtcbiAgICAgICAgbGV0IG5vZGVzV2l0aElkcyA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yQWxsKCdbaWRdJyk7XG4gICAgICAgIFtdLmZvckVhY2guY2FsbChub2Rlc1dpdGhJZHMsIG5vZGUgPT4ge1xuICAgICAgICAgIGxldCBpZCA9IG5vZGUuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgICAgICAgIHRoaXMuJFtpZF0gPSBub2RlO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29sbGVjdGlvbiBvZiByZWZlcmVuY2VzIHRvIHRoZSBlbGVtZW50cyB3aXRoIElEcyBpbiBhIGNvbXBvbmVudCdzXG4gICAgICogU2hhZG93IERPTSBzdWJ0cmVlLlxuICAgICAqXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKiBAbWVtYmVyICRcbiAgICAgKi9cbiAgfVxuXG4gIHJldHVybiBTaGFkb3dFbGVtZW50UmVmZXJlbmNlcztcbn07XG4iLCIvKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFNoYWRvd1RlbXBsYXRlLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gZm9yIHN0YW1waW5nIGEgdGVtcGxhdGUgaW50byBhIFNoYWRvdyBET00gc3VidHJlZSB1cG9uIGNvbXBvbmVudFxuICAgKiBpbnN0YW50aWF0aW9uLlxuICAgKlxuICAgKiBUbyB1c2UgdGhpcyBtaXhpbiwgZGVmaW5lIGEgYHRlbXBsYXRlYCBwcm9wZXJ0eSBhcyBhIHN0cmluZyBvciBIVE1MXG4gICAqIGA8dGVtcGxhdGU+YCBlbGVtZW50OlxuICAgKlxuICAgKiAgICAgY2xhc3MgTXlFbGVtZW50IGV4dGVuZHMgU2hhZG93VGVtcGxhdGUoSFRNTEVsZW1lbnQpIHtcbiAgICogICAgICAgZ2V0IHRlbXBsYXRlKCkge1xuICAgKiAgICAgICAgIHJldHVybiBgSGVsbG8sIDxlbT53b3JsZDwvZW0+LmA7XG4gICAqICAgICAgIH1cbiAgICogICAgIH1cbiAgICpcbiAgICogV2hlbiB5b3VyIGNvbXBvbmVudCBjbGFzcyBpcyBpbnN0YW50aWF0ZWQsIGEgc2hhZG93IHJvb3Qgd2lsbCBiZSBjcmVhdGVkIG9uXG4gICAqIHRoZSBpbnN0YW5jZSwgYW5kIHRoZSBjb250ZW50cyBvZiB0aGUgdGVtcGxhdGUgd2lsbCBiZSBjbG9uZWQgaW50byB0aGVcbiAgICogc2hhZG93IHJvb3QuIElmIHlvdXIgY29tcG9uZW50IGRvZXMgbm90IGRlZmluZSBhIGB0ZW1wbGF0ZWAgcHJvcGVydHksIHRoaXNcbiAgICogbWl4aW4gaGFzIG5vIGVmZmVjdC5cbiAgICpcbiAgICogRm9yIHRoZSB0aW1lIGJlaW5nLCB0aGlzIGV4dGVuc2lvbiByZXRhaW5zIHN1cHBvcnQgZm9yIFNoYWRvdyBET00gdjAuIFRoYXRcbiAgICogd2lsbCBldmVudHVhbGx5IGJlIGRlcHJlY2F0ZWQgYXMgYnJvd3NlcnMgKGFuZCB0aGUgU2hhZG93IERPTSBwb2x5ZmlsbClcbiAgICogaW1wbGVtZW50IFNoYWRvdyBET00gdjEuXG4gICAqL1xuICBjbGFzcyBTaGFkb3dUZW1wbGF0ZSBleHRlbmRzIGJhc2Uge1xuXG4gICAgLypcbiAgICAgKiBJZiB0aGUgY29tcG9uZW50IGRlZmluZXMgYSB0ZW1wbGF0ZSwgYSBzaGFkb3cgcm9vdCB3aWxsIGJlIGNyZWF0ZWQgb24gdGhlXG4gICAgICogY29tcG9uZW50IGluc3RhbmNlLCBhbmQgdGhlIHRlbXBsYXRlIHN0YW1wZWQgaW50byBpdC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICBsZXQgdGVtcGxhdGUgPSB0aGlzLnRlbXBsYXRlO1xuICAgICAgLy8gVE9ETzogU2F2ZSB0aGUgcHJvY2Vzc2VkIHRlbXBsYXRlIHdpdGggdGhlIGNvbXBvbmVudCdzIGNsYXNzIHByb3RvdHlwZVxuICAgICAgLy8gc28gaXQgZG9lc24ndCBuZWVkIHRvIGJlIHByb2Nlc3NlZCB3aXRoIGV2ZXJ5IGluc3RhbnRpYXRpb24uXG4gICAgICBpZiAodGVtcGxhdGUpIHtcblxuICAgICAgICBpZiAodHlwZW9mIHRlbXBsYXRlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIC8vIFVwZ3JhZGUgcGxhaW4gc3RyaW5nIHRvIHJlYWwgdGVtcGxhdGUuXG4gICAgICAgICAgdGVtcGxhdGUgPSBjcmVhdGVUZW1wbGF0ZVdpdGhJbm5lckhUTUwodGVtcGxhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHdpbmRvdy5TaGFkb3dET01Qb2x5ZmlsbCkge1xuICAgICAgICAgIHNoaW1UZW1wbGF0ZVN0eWxlcyh0ZW1wbGF0ZSwgdGhpcy5sb2NhbE5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJvb3QgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcbiAgICAgICAgbGV0IGNsb25lID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0ZW1wbGF0ZS5jb250ZW50LCB0cnVlKTtcbiAgICAgICAgcm9vdC5hcHBlbmRDaGlsZChjbG9uZSk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gU2hhZG93VGVtcGxhdGU7XG59O1xuXG5cbi8vIENvbnZlcnQgYSBwbGFpbiBzdHJpbmcgb2YgSFRNTCBpbnRvIGEgcmVhbCB0ZW1wbGF0ZSBlbGVtZW50LlxuZnVuY3Rpb24gY3JlYXRlVGVtcGxhdGVXaXRoSW5uZXJIVE1MKGlubmVySFRNTCkge1xuICBsZXQgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAvLyBSRVZJRVc6IElzIHRoZXJlIGFuIGVhc2llciB3YXkgdG8gZG8gdGhpcz9cbiAgLy8gV2UnZCBsaWtlIHRvIGp1c3Qgc2V0IGlubmVySFRNTCBvbiB0aGUgdGVtcGxhdGUgY29udGVudCwgYnV0IHNpbmNlIGl0J3NcbiAgLy8gYSBEb2N1bWVudEZyYWdtZW50LCB0aGF0IGRvZXNuJ3Qgd29yay5cbiAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuaW5uZXJIVE1MID0gaW5uZXJIVE1MO1xuICB3aGlsZSAoZGl2LmNoaWxkTm9kZXMubGVuZ3RoID4gMCkge1xuICAgIHRlbXBsYXRlLmNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2LmNoaWxkTm9kZXNbMF0pO1xuICB9XG4gIHJldHVybiB0ZW1wbGF0ZTtcbn1cblxuLy8gSW52b2tlIGJhc2ljIHN0eWxlIHNoaW1taW5nIHdpdGggU2hhZG93Q1NTLlxuZnVuY3Rpb24gc2hpbVRlbXBsYXRlU3R5bGVzKHRlbXBsYXRlLCB0YWcpIHtcbiAgd2luZG93LldlYkNvbXBvbmVudHMuU2hhZG93Q1NTLnNoaW1TdHlsaW5nKHRlbXBsYXRlLmNvbnRlbnQsIHRhZyk7XG59XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4vY3JlYXRlU3ltYm9sJztcbmltcG9ydCBtaWNyb3Rhc2sgZnJvbSAnLi9taWNyb3Rhc2snO1xuXG5cbi8vIFN5bWJvbHMgZm9yIHByaXZhdGUgZGF0YSBtZW1iZXJzIG9uIGFuIGVsZW1lbnQuXG5jb25zdCBjYW5TZWxlY3ROZXh0U3ltYm9sID0gY3JlYXRlU3ltYm9sKCdjYW5TZWxlY3ROZXh0Jyk7XG5jb25zdCBjYW5TZWxlY3RQcmV2aW91c1N5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnY2FuU2VsZWN0UHJldmlvdXMnKTtcbmNvbnN0IHNlbGVjdGVkSXRlbVN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnc2VsZWN0ZWRJdGVtJyk7XG5jb25zdCBzZWxlY3Rpb25SZXF1aXJlZFN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnc2VsZWN0aW9uUmVxdWlyZWQnKTtcbmNvbnN0IHNlbGVjdGlvbldyYXBzU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdzZWxlY3Rpb25XcmFwcycpO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggU2luZ2xlU2VsZWN0aW9uLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggbWFuYWdlcyBzaW5nbGUtc2VsZWN0aW9uIHNlbWFudGljcyBmb3IgaXRlbXMgaW4gYSBsaXN0LlxuICAgKlxuICAgKiBUaGlzIG1peGluIGV4cGVjdHMgYSBjb21wb25lbnQgdG8gcHJvdmlkZSBhbiBgaXRlbXNgIGFycmF5IG9mIGFsbCBlbGVtZW50c1xuICAgKiBpbiB0aGUgbGlzdC4gQSBzdGFuZGFyZCB3YXkgdG8gZG8gdGhhdCB3aXRoIGlzIHRoZVxuICAgKiBbQ29udGVudEFzSXRlbXNdKENvbnRlbnRBc0l0ZW1zLm1kKSBtaXhpbiwgd2hpY2ggdGFrZXMgYSBjb21wb25lbnQnc1xuICAgKiBjb250ZW50ICh0eXBpY2FsbHkgaXRzIGRpc3RyaWJ1dGVkIGNoaWxkcmVuKSBhcyB0aGUgc2V0IG9mIGxpc3QgaXRlbXM7IHNlZVxuICAgKiB0aGF0IG1peGluIGZvciBkZXRhaWxzLlxuICAgKlxuICAgKiBUaGlzIG1peGluIHRyYWNrcyBhIHNpbmdsZSBzZWxlY3RlZCBpdGVtIGluIHRoZSBsaXN0LCBhbmQgcHJvdmlkZXMgbWVhbnMgdG9cbiAgICogZ2V0IGFuZCBzZXQgdGhhdCBzdGF0ZSBieSBpdGVtIHBvc2l0aW9uIChgc2VsZWN0ZWRJbmRleGApIG9yIGl0ZW0gaWRlbnRpdHlcbiAgICogKGBzZWxlY3RlZEl0ZW1gKS4gVGhlIHNlbGVjdGlvbiBjYW4gYmUgbW92ZWQgaW4gdGhlIGxpc3QgdmlhIHRoZSBtZXRob2RzXG4gICAqIGBzZWxlY3RGaXJzdGAsIGBzZWxlY3RMYXN0YCwgYHNlbGVjdE5leHRgLCBhbmQgYHNlbGVjdFByZXZpb3VzYC5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBkb2VzIG5vdCBwcm9kdWNlIGFueSB1c2VyLXZpc2libGUgZWZmZWN0cyB0byByZXByZXNlbnRcbiAgICogc2VsZWN0aW9uLiBPdGhlciBtaXhpbnMsIHN1Y2ggYXNcbiAgICogW1NlbGVjdGlvbkFyaWFBY3RpdmVdKFNlbGVjdGlvbkFyaWFBY3RpdmUubWQpLFxuICAgKiBbU2VsZWN0aW9uSGlnaGxpZ2h0XShTZWxlY3Rpb25IaWdobGlnaHQubWQpIGFuZFxuICAgKiBbU2VsZWN0aW9uSW5WaWV3XShTZWxlY3Rpb25JblZpZXcubWQpLCBtb2RpZnkgdGhlIHNlbGVjdGVkIGl0ZW0gaW4gY29tbW9uXG4gICAqIHdheXMgdG8gbGV0IHRoZSB1c2VyIGtub3cgYSBnaXZlbiBpdGVtIGlzIHNlbGVjdGVkIG9yIG5vdCBzZWxlY3RlZC5cbiAgICovXG4gIGNsYXNzIFNpbmdsZVNlbGVjdGlvbiBleHRlbmRzIGJhc2Uge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgLy8gU2V0IGRlZmF1bHRzLlxuICAgICAgaWYgKHR5cGVvZiB0aGlzLnNlbGVjdGlvblJlcXVpcmVkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLnNlbGVjdGlvblJlcXVpcmVkID0gdGhpcy5kZWZhdWx0cy5zZWxlY3Rpb25SZXF1aXJlZDtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5zZWxlY3Rpb25XcmFwcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25XcmFwcyA9IHRoaXMuZGVmYXVsdHMuc2VsZWN0aW9uV3JhcHM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXBwbHkgdGhlIGluZGljYXRlIHNlbGVjdGlvbiBzdGF0ZSB0byB0aGUgaXRlbS5cbiAgICAgKlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy4gVXNlci12aXNpYmxlXG4gICAgICogZWZmZWN0cyB3aWxsIHR5cGljYWxseSBiZSBoYW5kbGVkIGJ5IG90aGVyIG1peGlucy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGl0ZW0gLSB0aGUgaXRlbSBiZWluZyBzZWxlY3RlZC9kZXNlbGVjdGVkXG4gICAgICogQHBhcmFtIHtib29sZWFufSBzZWxlY3RlZCAtIHRydWUgaWYgdGhlIGl0ZW0gaXMgc2VsZWN0ZWQsIGZhbHNlIGlmIG5vdFxuICAgICAqL1xuICAgIGFwcGx5U2VsZWN0aW9uKGl0ZW0sIHNlbGVjdGVkKSB7XG4gICAgICBpZiAoc3VwZXIuYXBwbHlTZWxlY3Rpb24pIHsgc3VwZXIuYXBwbHlTZWxlY3Rpb24oaXRlbSwgc2VsZWN0ZWQpOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiB0aGUgc2VsZWN0aW9uIGNhbiBiZSBtb3ZlZCB0byB0aGUgbmV4dCBpdGVtLCBmYWxzZSBpZiBub3QgKHRoZVxuICAgICAqIHNlbGVjdGVkIGl0ZW0gaXMgdGhlIGxhc3QgaXRlbSBpbiB0aGUgbGlzdCkuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBnZXQgY2FuU2VsZWN0TmV4dCgpIHtcbiAgICAgIHJldHVybiB0aGlzW2NhblNlbGVjdE5leHRTeW1ib2xdO1xuICAgIH1cbiAgICBzZXQgY2FuU2VsZWN0TmV4dChjYW5TZWxlY3ROZXh0KSB7XG4gICAgICB0aGlzW2NhblNlbGVjdE5leHRTeW1ib2xdID0gY2FuU2VsZWN0TmV4dDtcbiAgICAgIGlmICgnY2FuU2VsZWN0TmV4dCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuY2FuU2VsZWN0TmV4dCA9IGNhblNlbGVjdE5leHQ7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHRoZSBzZWxlY3Rpb24gY2FuIGJlIG1vdmVkIHRvIHRoZSBwcmV2aW91cyBpdGVtLCBmYWxzZSBpZiBub3RcbiAgICAgKiAodGhlIHNlbGVjdGVkIGl0ZW0gaXMgdGhlIGZpcnN0IG9uZSBpbiB0aGUgbGlzdCkuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBnZXQgY2FuU2VsZWN0UHJldmlvdXMoKSB7XG4gICAgICByZXR1cm4gdGhpc1tjYW5TZWxlY3RQcmV2aW91c1N5bWJvbF07XG4gICAgfVxuICAgIHNldCBjYW5TZWxlY3RQcmV2aW91cyhjYW5TZWxlY3RQcmV2aW91cykge1xuICAgICAgdGhpc1tjYW5TZWxlY3RQcmV2aW91c1N5bWJvbF0gPSBjYW5TZWxlY3RQcmV2aW91cztcbiAgICAgIGlmICgnY2FuU2VsZWN0UHJldmlvdXMnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLmNhblNlbGVjdFByZXZpb3VzID0gY2FuU2VsZWN0UHJldmlvdXM7IH1cbiAgICB9XG5cbiAgICBnZXQgZGVmYXVsdHMoKSB7XG4gICAgICBsZXQgZGVmYXVsdHMgPSBzdXBlci5kZWZhdWx0cyB8fCB7fTtcbiAgICAgIGRlZmF1bHRzLnNlbGVjdGlvblJlcXVpcmVkID0gZmFsc2U7XG4gICAgICBkZWZhdWx0cy5zZWxlY3Rpb25XcmFwcyA9IGZhbHNlO1xuICAgICAgcmV0dXJuIGRlZmF1bHRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBhIG5ldyBpdGVtIGJlaW5nIGFkZGVkIHRvIHRoZSBsaXN0LlxuICAgICAqXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2Qgc2ltcGx5IHNldHMgdGhlIGl0ZW0nc1xuICAgICAqIHNlbGVjdGlvbiBzdGF0ZSB0byBmYWxzZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGl0ZW0gLSB0aGUgaXRlbSBiZWluZyBhZGRlZFxuICAgICAqL1xuICAgIGl0ZW1BZGRlZChpdGVtKSB7XG4gICAgICBpZiAoc3VwZXIuaXRlbUFkZGVkKSB7IHN1cGVyLml0ZW1BZGRlZChpdGVtKTsgfVxuICAgICAgdGhpcy5hcHBseVNlbGVjdGlvbihpdGVtLCBpdGVtID09PSB0aGlzLnNlbGVjdGVkSXRlbSk7XG4gICAgfVxuXG4gICAgaXRlbXNDaGFuZ2VkKCkge1xuICAgICAgaWYgKHN1cGVyLml0ZW1zQ2hhbmdlZCkgeyBzdXBlci5pdGVtc0NoYW5nZWQoKTsgfVxuXG4gICAgICBpZiAodGhpcy5zZWxlY3Rpb25SZXF1aXJlZCkge1xuICAgICAgICAvLyBFbnN1cmUgc2VsZWN0aW9uLCBidXQgZG8gdGhpcyBpbiB0aGUgbmV4dCB0aWNrIHRvIGdpdmUgb3RoZXIgbWl4aW5zIGFcbiAgICAgICAgLy8gY2hhbmNlIHRvIGRvIHRoZWlyIG93biBpdGVtc0NoYW5nZWQgd29yay5cbiAgICAgICAgbWljcm90YXNrKCgpID0+IHtcbiAgICAgICAgICBlbnN1cmVTZWxlY3Rpb24odGhpcyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY2hhbmdlIGluIGl0ZW1zIG1heSBoYXZlIGFmZmVjdGVkIHdoaWNoIG5hdmlnYXRpb25zIGFyZSBwb3NzaWJsZS5cbiAgICAgIHVwZGF0ZVBvc3NpYmxlTmF2aWdhdGlvbnModGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGluZGV4IG9mIHRoZSBpdGVtIHdoaWNoIGlzIGN1cnJlbnRseSBzZWxlY3RlZC5cbiAgICAgKlxuICAgICAqIElmIGBzZWxlY3Rpb25XcmFwc2AgaXMgZmFsc2UsIHRoZSBpbmRleCBpcyAtMSBpZiB0aGVyZSBpcyBubyBzZWxlY3Rpb24uXG4gICAgICogSW4gdGhhdCBjYXNlLCBzZXR0aW5nIHRoZSBpbmRleCB0byAtMSB3aWxsIGRlc2VsZWN0IGFueVxuICAgICAqIGN1cnJlbnRseS1zZWxlY3RlZCBpdGVtLlxuICAgICAqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0ZWRJbmRleCgpIHtcbiAgICAgIGxldCBzZWxlY3RlZEl0ZW0gPSB0aGlzLnNlbGVjdGVkSXRlbTtcblxuICAgICAgLy8gVE9ETzogSWYgc2VsZWN0aW9uIHdhc24ndCBmb3VuZCwgbW9zdCBsaWtlbHkgY2F1c2UgaXMgdGhhdCB0aGUgRE9NIHdhc1xuICAgICAgLy8gbWFuaXB1bGF0ZWQgZnJvbSB1bmRlcm5lYXRoIHVzLiBPbmNlIHdlIHRyYWNrIGNvbnRlbnQgY2hhbmdlcywgdHVyblxuICAgICAgLy8gdGhpcyBpbnRvIGEgd2FybmluZy5cbiAgICAgIC8vIFRPRE86IE1lbW9pemVcbiAgICAgIHJldHVybiBzZWxlY3RlZEl0ZW0gP1xuICAgICAgICB0aGlzLml0ZW1zLmluZGV4T2Yoc2VsZWN0ZWRJdGVtKSA6XG4gICAgICAgIC0xO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0ZWRJbmRleChpbmRleCkge1xuICAgICAgLy8gVE9ETzogUHVsbCBzZXR0aW5nIG9mIHNlbGVjdGVkSXRlbSBhYm92ZSBzdXBlcigpIGNhbGwuICovXG4gICAgICBpZiAoJ3NlbGVjdGVkSW5kZXgnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkSW5kZXggPSBpbmRleDsgfVxuICAgICAgbGV0IGl0ZW1zID0gdGhpcy5pdGVtcztcbiAgICAgIGxldCBpdGVtO1xuICAgICAgaWYgKGluZGV4IDwgMCB8fCBpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaXRlbSA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpdGVtID0gaXRlbXNbaW5kZXhdO1xuICAgICAgfVxuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xuXG4gICAgICBsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3NlbGVjdGVkLWluZGV4LWNoYW5nZWQnLCB7XG4gICAgICAgIGRldGFpbDoge1xuICAgICAgICAgIHNlbGVjdGVkSW5kZXg6IGluZGV4LFxuICAgICAgICAgIHZhbHVlOiBpbmRleCAvLyBmb3IgUG9seW1lciBiaW5kaW5nXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudGx5IHNlbGVjdGVkIGl0ZW0sIG9yIG51bGwgaWYgdGhlcmUgaXMgbm8gc2VsZWN0aW9uLlxuICAgICAqXG4gICAgICogU2V0dGluZyB0aGlzIHByb3BlcnR5IHRvIG51bGwgZGVzZWxlY3RzIGFueSBjdXJyZW50bHktc2VsZWN0ZWQgaXRlbS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGVkSXRlbSgpIHtcbiAgICAgIHJldHVybiB0aGlzW3NlbGVjdGVkSXRlbVN5bWJvbF0gfHwgbnVsbDtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGVkSXRlbShpdGVtKSB7XG4gICAgICBsZXQgcHJldmlvdXNJdGVtID0gdGhpc1tzZWxlY3RlZEl0ZW1TeW1ib2xdO1xuICAgICAgLy8gVE9ETzogQ29uZmlybSBpdGVtIGlzIGFjdHVhbGx5IGluIHRoZSBsaXN0IGJlZm9yZSBzZWxlY3RpbmcuXG4gICAgICB0aGlzW3NlbGVjdGVkSXRlbVN5bWJvbF0gPSBpdGVtO1xuXG4gICAgICBpZiAoJ3NlbGVjdGVkSXRlbScgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJdGVtID0gaXRlbTsgfVxuICAgICAgaWYgKHByZXZpb3VzSXRlbSkge1xuICAgICAgICBpZiAoaXRlbSA9PT0gcHJldmlvdXNJdGVtKSB7XG4gICAgICAgICAgLy8gVGhlIGluZGljYXRlZCBpdGVtIGlzIGFscmVhZHkgdGhlIHNlbGVjdGVkIGl0ZW0uXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJlbW92ZSBwcmV2aW91cyBzZWxlY3Rpb24uXG4gICAgICAgIHRoaXMuYXBwbHlTZWxlY3Rpb24ocHJldmlvdXNJdGVtLCBmYWxzZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgIHRoaXMuYXBwbHlTZWxlY3Rpb24oaXRlbSwgdHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFRPRE86IFJhdGlvbmFsaXplIHdpdGggc2VsZWN0ZWRJbmRleCBzbyB3ZSdyZSBub3QgcmVjYWxjdWxhdGluZyBpdGVtXG4gICAgICAvLyBvciBpbmRleCBpbiBlYWNoIHNldHRlci5cbiAgICAgIHVwZGF0ZVBvc3NpYmxlTmF2aWdhdGlvbnModGhpcyk7XG5cbiAgICAgIGxldCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnc2VsZWN0ZWQtaXRlbS1jaGFuZ2VkJywge1xuICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICBzZWxlY3RlZEl0ZW06IGl0ZW0sXG4gICAgICAgICAgcHJldmlvdXNJdGVtOiBwcmV2aW91c0l0ZW0sXG4gICAgICAgICAgdmFsdWU6IGl0ZW0gLy8gZm9yIFBvbHltZXIgYmluZGluZ1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IHRoZSBmaXJzdCBpdGVtIGluIHRoZSBsaXN0LlxuICAgICAqL1xuICAgIHNlbGVjdEZpcnN0KCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdEZpcnN0KSB7IHN1cGVyLnNlbGVjdEZpcnN0KCk7IH1cbiAgICAgIHJldHVybiBzZWxlY3RJbmRleCh0aGlzLCAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHRoZSBsaXN0IHNob3VsZCBhbHdheXMgaGF2ZSBhIHNlbGVjdGlvbiAoaWYgaXQgaGFzIGl0ZW1zKS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGlvblJlcXVpcmVkKCkge1xuICAgICAgcmV0dXJuIHRoaXNbc2VsZWN0aW9uUmVxdWlyZWRTeW1ib2xdO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0aW9uUmVxdWlyZWQoc2VsZWN0aW9uUmVxdWlyZWQpIHtcbiAgICAgIHRoaXNbc2VsZWN0aW9uUmVxdWlyZWRTeW1ib2xdID0gc2VsZWN0aW9uUmVxdWlyZWQ7XG4gICAgICBpZiAoJ3NlbGVjdGlvblJlcXVpcmVkJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3Rpb25SZXF1aXJlZCA9IHNlbGVjdGlvblJlcXVpcmVkOyB9XG4gICAgICBpZiAoc2VsZWN0aW9uUmVxdWlyZWQpIHtcbiAgICAgICAgZW5zdXJlU2VsZWN0aW9uKHRoaXMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCB0aGUgbGFzdCBpdGVtIGluIHRoZSBsaXN0LlxuICAgICAqL1xuICAgIHNlbGVjdExhc3QoKSB7XG4gICAgICBpZiAoc3VwZXIuc2VsZWN0TGFzdCkgeyBzdXBlci5zZWxlY3RMYXN0KCk7IH1cbiAgICAgIHJldHVybiBzZWxlY3RJbmRleCh0aGlzLCB0aGlzLml0ZW1zLmxlbmd0aCAtIDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCB0aGUgbmV4dCBpdGVtIGluIHRoZSBsaXN0LlxuICAgICAqL1xuICAgIHNlbGVjdE5leHQoKSB7XG4gICAgICBpZiAoc3VwZXIuc2VsZWN0TmV4dCkgeyBzdXBlci5zZWxlY3ROZXh0KCk7IH1cbiAgICAgIHJldHVybiBzZWxlY3RJbmRleCh0aGlzLCB0aGlzLnNlbGVjdGVkSW5kZXggKyAxKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgdGhlIHByZXZpb3VzIGl0ZW0gaW4gdGhlIGxpc3QuXG4gICAgICpcbiAgICAgKiBJZiB0aGUgbGlzdCBoYXMgbm8gc2VsZWN0aW9uLCB0aGUgbGFzdCBpdGVtIHdpbGwgYmUgc2VsZWN0ZWQuXG4gICAgICovXG4gICAgc2VsZWN0UHJldmlvdXMoKSB7XG4gICAgICBpZiAoc3VwZXIuc2VsZWN0UHJldmlvdXMpIHsgc3VwZXIuc2VsZWN0UHJldmlvdXMoKTsgfVxuICAgICAgbGV0IG5ld0luZGV4ID0gdGhpcy5zZWxlY3RlZEluZGV4IDwgMCA/XG4gICAgICAgIHRoaXMuaXRlbXMubGVuZ3RoIC0gMSA6ICAgICAvLyBObyBzZWxlY3Rpb24geWV0OyBzZWxlY3QgbGFzdCBpdGVtLlxuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggLSAxO1xuICAgICAgcmV0dXJuIHNlbGVjdEluZGV4KHRoaXMsIG5ld0luZGV4KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHNlbGVjdGlvbiBuYXZpZ2F0aW9ucyB3cmFwIGZyb20gbGFzdCB0byBmaXJzdCwgYW5kIHZpY2UgdmVyc2EuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuICAgIGdldCBzZWxlY3Rpb25XcmFwcygpIHtcbiAgICAgIHJldHVybiB0aGlzW3NlbGVjdGlvbldyYXBzU3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGlvbldyYXBzKHZhbHVlKSB7XG4gICAgICB0aGlzW3NlbGVjdGlvbldyYXBzU3ltYm9sXSA9IFN0cmluZyh2YWx1ZSkgPT09ICd0cnVlJztcbiAgICAgIGlmICgnc2VsZWN0aW9uV3JhcHMnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGlvbldyYXBzID0gdmFsdWU7IH1cbiAgICAgIHVwZGF0ZVBvc3NpYmxlTmF2aWdhdGlvbnModGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmlyZXMgd2hlbiB0aGUgc2VsZWN0ZWRJdGVtIHByb3BlcnR5IGNoYW5nZXMuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgU2luZ2xlU2VsZWN0aW9uXG4gICAgICogQGV2ZW50IHNlbGVjdGVkLWl0ZW0tY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGRldGFpbC5zZWxlY3RlZEl0ZW0gVGhlIG5ldyBzZWxlY3RlZCBpdGVtLlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGRldGFpbC5wcmV2aW91c0l0ZW0gVGhlIHByZXZpb3VzbHkgc2VsZWN0ZWQgaXRlbS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEZpcmVzIHdoZW4gdGhlIHNlbGVjdGVkSW5kZXggcHJvcGVydHkgY2hhbmdlcy5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBTaW5nbGVTZWxlY3Rpb25cbiAgICAgKiBAZXZlbnQgc2VsZWN0ZWQtaW5kZXgtY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkZXRhaWwuc2VsZWN0ZWRJbmRleCBUaGUgbmV3IHNlbGVjdGVkIGluZGV4LlxuICAgICAqL1xuXG4gIH1cblxuICByZXR1cm4gU2luZ2xlU2VsZWN0aW9uO1xufTtcblxuXG4vLyBJZiBubyBpdGVtIGlzIHNlbGVjdGVkLCBzZWxlY3QgYSBkZWZhdWx0IGl0ZW0uXG5mdW5jdGlvbiBlbnN1cmVTZWxlY3Rpb24oZWxlbWVudCkge1xuICBsZXQgaW5kZXggPSBlbGVtZW50LnNlbGVjdGVkSW5kZXg7XG4gIGlmIChpbmRleCA8IDApIHtcbiAgICAvLyBTZWxlY3RlZCBpdGVtIGlzIG5vIGxvbmdlciBpbiB0aGUgY3VycmVudCBzZXQgb2YgaXRlbXMuXG4gICAgaWYgKGVsZW1lbnQuaXRlbXMgJiYgZWxlbWVudC5pdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAvLyBTZWxlY3QgdGhlIGZpcnN0IGl0ZW0uXG4gICAgICAvLyBUT0RPOiBJZiB0aGUgcHJldmlvdXNseS1zZWxlY3RlZCBpdGVtIGhhcyBiZWVuIGRlbGV0ZWQsIHRyeSB0byBzZWxlY3RcbiAgICAgIC8vIGFuIGl0ZW0gYWRqYWNlbnQgdG8gdGhlIHBvc2l0aW9uIGl0IGhlbGQuXG4gICAgICBlbGVtZW50LnNlbGVjdGVkSW5kZXggPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBObyBpdGVtcyBmb3IgdXMgdG8gc2VsZWN0LCBidXQgd2UgY2FuIGF0IGxlYXN0IHNpZ25hbCB0aGF0IHRoZXJlJ3Mgbm9cbiAgICAgIC8vIGxvbmdlciBhIHNlbGVjdGlvbi5cbiAgICAgIGVsZW1lbnQuc2VsZWN0ZWRJdGVtID0gbnVsbDtcbiAgICB9XG4gIH1cbn1cblxuLy8gRW5zdXJlIHRoZSBnaXZlbiBpbmRleCBpcyB3aXRoaW4gYm91bmRzLCBhbmQgc2VsZWN0IGl0IGlmIGl0J3Mgbm90IGFscmVhZHlcbi8vIHNlbGVjdGVkLlxuZnVuY3Rpb24gc2VsZWN0SW5kZXgoZWxlbWVudCwgaW5kZXgpIHtcbiAgbGV0IGNvdW50ID0gZWxlbWVudC5pdGVtcy5sZW5ndGg7XG4gIGxldCBib3VuZGVkSW5kZXg7XG4gIGlmIChlbGVtZW50LnNlbGVjdGlvbldyYXBzKSB7XG4gICAgLy8gSmF2YVNjcmlwdCBtb2QgZG9lc24ndCBoYW5kbGUgbmVnYXRpdmUgbnVtYmVycyB0aGUgd2F5IHdlIHdhbnQgdG8gd3JhcC5cbiAgICAvLyBTZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTg2MTgyNTAvNzY0NzJcbiAgICBib3VuZGVkSW5kZXggPSAoKGluZGV4ICUgY291bnQpICsgY291bnQpICUgY291bnQ7XG4gIH0gZWxzZSB7XG4gICAgLy8gS2VlcCBpbmRleCB3aXRoaW4gYm91bmRzIG9mIGFycmF5LlxuICAgIGJvdW5kZWRJbmRleCA9IE1hdGgubWF4KE1hdGgubWluKGluZGV4LCBjb3VudCAtIDEpLCAwKTtcbiAgfVxuICBsZXQgcHJldmlvdXNJbmRleCA9IGVsZW1lbnQuc2VsZWN0ZWRJbmRleDtcbiAgaWYgKHByZXZpb3VzSW5kZXggIT09IGJvdW5kZWRJbmRleCkge1xuICAgIGVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9IGJvdW5kZWRJbmRleDtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuLy8gRm9sbG93aW5nIGEgY2hhbmdlIGluIHNlbGVjdGlvbiwgcmVwb3J0IHdoZXRoZXIgaXQncyBub3cgcG9zc2libGUgdG9cbi8vIGdvIG5leHQvcHJldmlvdXMgZnJvbSB0aGUgZ2l2ZW4gaW5kZXguXG5mdW5jdGlvbiB1cGRhdGVQb3NzaWJsZU5hdmlnYXRpb25zKGVsZW1lbnQpIHtcbiAgbGV0IGNhblNlbGVjdE5leHQ7XG4gIGxldCBjYW5TZWxlY3RQcmV2aW91cztcbiAgbGV0IGl0ZW1zID0gZWxlbWVudC5pdGVtcztcbiAgaWYgKGl0ZW1zID09IG51bGwgfHwgaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgLy8gTm8gaXRlbXMgdG8gc2VsZWN0LlxuICAgIGNhblNlbGVjdE5leHQgPSBmYWxzZTtcbiAgICBjYW5TZWxlY3RQcmV2aW91cyA9IGZhbHNlO1xuICB9IGlmIChlbGVtZW50LnNlbGVjdGlvbldyYXBzKSB7XG4gICAgLy8gU2luY2UgdGhlcmUgYXJlIGl0ZW1zLCBjYW4gYWx3YXlzIGdvIG5leHQvcHJldmlvdXMuXG4gICAgY2FuU2VsZWN0TmV4dCA9IHRydWU7XG4gICAgY2FuU2VsZWN0UHJldmlvdXMgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGxldCBpbmRleCA9IGVsZW1lbnQuc2VsZWN0ZWRJbmRleDtcbiAgICBpZiAoaW5kZXggPCAwICYmIGl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIFNwZWNpYWwgY2FzZS4gSWYgdGhlcmUgYXJlIGl0ZW1zIGJ1dCBubyBzZWxlY3Rpb24sIGRlY2xhcmUgdGhhdCBpdCdzXG4gICAgICAvLyBhbHdheXMgcG9zc2libGUgdG8gZ28gbmV4dC9wcmV2aW91cyB0byBjcmVhdGUgYSBzZWxlY3Rpb24uXG4gICAgICBjYW5TZWxlY3ROZXh0ID0gdHJ1ZTtcbiAgICAgIGNhblNlbGVjdFByZXZpb3VzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTm9ybWFsIGNhc2U6IHdlIGhhdmUgYW4gaW5kZXggaW4gYSBsaXN0IHRoYXQgaGFzIGl0ZW1zLlxuICAgICAgY2FuU2VsZWN0UHJldmlvdXMgPSAoaW5kZXggPiAwKTtcbiAgICAgIGNhblNlbGVjdE5leHQgPSAoaW5kZXggPCBpdGVtcy5sZW5ndGggLSAxKTtcbiAgICB9XG4gIH1cbiAgZWxlbWVudC5jYW5TZWxlY3ROZXh0ID0gY2FuU2VsZWN0TmV4dDtcbiAgZWxlbWVudC5jYW5TZWxlY3RQcmV2aW91cyA9IGNhblNlbGVjdFByZXZpb3VzO1xufVxuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuL2NyZWF0ZVN5bWJvbCc7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IGRlbHRhWFN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnZGVsdGFYJyk7XG5jb25zdCBkZWx0YVlTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2RlbHRhWScpO1xuY29uc3QgbXVsdGlUb3VjaFN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnbXVsdGlUb3VjaCcpO1xuY29uc3QgcHJldmlvdXNYU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdwcmV2aW91c1gnKTtcbmNvbnN0IHByZXZpb3VzWVN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgncHJldmlvdXNZJyk7XG5jb25zdCBzdGFydFhTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3N0YXJ0WCcpO1xuY29uc3QgdHJhdmVsRnJhY3Rpb25TeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3RyYXZlbEZyYWN0aW9uJyk7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBTd2lwZURpcmVjdGlvbi4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIG1hcHMgdG91Y2ggZ2VzdHVyZXMgKHN3aXBlIGxlZnQsIHN3aXBlIHJpZ2h0KSB0byBkaXJlY3Rpb25cbiAgICogc2VtYW50aWNzIChnbyByaWdodCwgZ28gbGVmdCkuXG4gICAqXG4gICAqIEJ5IGRlZmF1bHQsIHRoaXMgbWl4aW4gcHJlc2VudHMgbm8gdXNlci12aXNpYmxlIGVmZmVjdHM7IGl0IGp1c3QgaW5kaWNhdGVzIGFcbiAgICogZGlyZWN0aW9uIGluIHdoaWNoIHRoZSB1c2VyIGlzIGN1cnJlbnRseSBzd2lwaW5nIG9yIGhhcyBmaW5pc2hlZCBzd2lwaW5nLiBUb1xuICAgKiBtYXAgdGhlIGRpcmVjdGlvbiB0byBhIGNoYW5nZSBpbiBzZWxlY3Rpb24sIHVzZSB0aGVcbiAgICogW0RpcmVjdGlvblNlbGVjdGlvbl0oRGlyZWN0aW9uU2VsZWN0aW9uLm1kKSBtaXhpbi5cbiAgICovXG4gIGNsYXNzIFN3aXBlRGlyZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG5cbiAgICAgIHRoaXMudHJhdmVsRnJhY3Rpb24gPSAwO1xuXG4gICAgICAvLyBUT0RPOiBUb3VjaCBldmVudHMgY291bGQgYmUgZmFjdG9yZWQgb3V0IGludG8gaXRzIG93biBtaXhpbi5cblxuICAgICAgLy8gSW4gYWxsIHRvdWNoIGV2ZW50cywgb25seSBoYW5kbGUgc2luZ2xlIHRvdWNoZXMuIFdlIGRvbid0IHdhbnQgdG9cbiAgICAgIC8vIGluYWR2ZXJ0ZW50bHkgZG8gd29yayB3aGVuIHRoZSB1c2VyJ3MgdHJ5aW5nIHRvIHBpbmNoLXpvb20gZm9yIGV4YW1wbGUuXG4gICAgICAvLyBUT0RPOiBFdmVuIGJldHRlciBhcHByb2FjaCB0aGFuIGJlbG93IHdvdWxkIGJlIHRvIGlnbm9yZSB0b3VjaGVzIGFmdGVyXG4gICAgICAvLyB0aGUgZmlyc3QgaWYgdGhlIHVzZXIgaGFzIGFscmVhZHkgYmVndW4gYSBzd2lwZS5cbiAgICAgIGlmICh3aW5kb3cuUG9pbnRlckV2ZW50KSB7XG4gICAgICAgIC8vIFByZWZlciBsaXN0ZW5pbmcgdG8gc3RhbmRhcmQgcG9pbnRlciBldmVudHMuXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCBldmVudCA9PiB7XG4gICAgICAgICAgaWYgKGlzRXZlbnRGb3JQZW5PclByaW1hcnlUb3VjaChldmVudCkpIHtcbiAgICAgICAgICAgIHRvdWNoU3RhcnQodGhpcywgZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVybW92ZScsIGV2ZW50ID0+IHtcbiAgICAgICAgICBpZiAoaXNFdmVudEZvclBlbk9yUHJpbWFyeVRvdWNoKGV2ZW50KSkge1xuICAgICAgICAgICAgbGV0IGhhbmRsZWQgPSB0b3VjaE1vdmUodGhpcywgZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XG4gICAgICAgICAgICBpZiAoaGFuZGxlZCkge1xuICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGlmIChpc0V2ZW50Rm9yUGVuT3JQcmltYXJ5VG91Y2goZXZlbnQpKSB7XG4gICAgICAgICAgICB0b3VjaEVuZCh0aGlzLCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUG9pbnRlciBldmVudHMgbm90IHN1cHBvcnRlZCAtLSBsaXN0ZW4gdG8gb2xkZXIgdG91Y2ggZXZlbnRzLlxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBldmVudCA9PiB7XG4gICAgICAgICAgaWYgKHRoaXNbbXVsdGlUb3VjaFN5bWJvbF0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnRvdWNoZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBsZXQgY2xpZW50WCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgICAgICBsZXQgY2xpZW50WSA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFk7XG4gICAgICAgICAgICB0b3VjaFN0YXJ0KHRoaXMsIGNsaWVudFgsIGNsaWVudFkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzW211bHRpVG91Y2hTeW1ib2xdID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGV2ZW50ID0+IHtcbiAgICAgICAgICBpZiAoIXRoaXNbbXVsdGlUb3VjaFN5bWJvbF0gJiYgZXZlbnQudG91Y2hlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIGxldCBjbGllbnRYID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgICAgIGxldCBjbGllbnRZID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WTtcbiAgICAgICAgICAgIGxldCBoYW5kbGVkID0gdG91Y2hNb3ZlKHRoaXMsIGNsaWVudFgsIGNsaWVudFkpO1xuICAgICAgICAgICAgaWYgKGhhbmRsZWQpIHtcbiAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGlmIChldmVudC50b3VjaGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgLy8gQWxsIHRvdWNoZXMgcmVtb3ZlZDsgZ2VzdHVyZSBpcyBjb21wbGV0ZS5cbiAgICAgICAgICAgIGlmICghdGhpc1ttdWx0aVRvdWNoU3ltYm9sXSkge1xuICAgICAgICAgICAgICAvLyBTaW5nbGUtdG91Y2ggc3dpcGUgaGFzIGZpbmlzaGVkLlxuICAgICAgICAgICAgICBsZXQgY2xpZW50WCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgICAgICAgIGxldCBjbGllbnRZID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WTtcbiAgICAgICAgICAgICAgdG91Y2hFbmQodGhpcywgY2xpZW50WCwgY2xpZW50WSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzW211bHRpVG91Y2hTeW1ib2xdID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jb25uZWN0ZWRDYWxsYmFjaykgeyBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpOyB9XG5cbiAgICAgIC8vIEZvciB0aGUgY29tcG9uZW50IHRvIHJlY2VpdmUgUG9pbnRlckV2ZW50cyBpbiBJRS9FZGdlLCB3ZSBuZWVkIHRvIHNldFxuICAgICAgLy8gdG91Y2gtYWN0aW9uOiBub25lLiBPbmx5IG1ha2UgdGhpcyBjaGFuZ2UgaWYgdG91Y2gtYWN0aW9uIGlzIGN1cnJlbnRseVxuICAgICAgLy8gdGhlIGRlZmF1bHQgdmFsdWUgKFwiYXV0b1wiKSwgaW4gY2FzZSB0aGUgZGV2ZWxvcGVyIGtub3dzIGJldHRlciB0aGFuIHdlXG4gICAgICAvLyBkbyB3aGF0IHRoZXkgd2FudCBpbiB0aGVpciBwYXJ0aWN1bGFyIGNvbnRleHQuXG4gICAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzKS50b3VjaEFjdGlvbiA9PT0gJ2F1dG8nKSB7XG4gICAgICAgIHRoaXMuc3R5bGUudG91Y2hBY3Rpb24gPSAnbm9uZSc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIGxlZnQuXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLlxuICAgICAqL1xuICAgIGdvTGVmdCgpIHtcbiAgICAgIGlmIChzdXBlci5nb0xlZnQpIHsgcmV0dXJuIHN1cGVyLmdvTGVmdCgpOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIHJpZ2h0LlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy5cbiAgICAgKi9cbiAgICBnb1JpZ2h0KCkge1xuICAgICAgaWYgKHN1cGVyLmdvUmlnaHQpIHsgcmV0dXJuIHN1cGVyLmdvUmlnaHQoKTsgfVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgaW1wbGVtZW50YXRpb24uXG4gICAgZ2V0IHNob3dUcmFuc2l0aW9uKCkge1xuICAgICAgcmV0dXJuIHN1cGVyLnNob3dUcmFuc2l0aW9uO1xuICAgIH1cbiAgICBzZXQgc2hvd1RyYW5zaXRpb24odmFsdWUpIHtcbiAgICAgIGlmICgnc2hvd1RyYW5zaXRpb24nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNob3dUcmFuc2l0aW9uID0gdmFsdWU7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGlzdGFuY2UgdGhlIGZpcnN0IHRvdWNocG9pbnQgaGFzIHRyYXZlbGVkIHNpbmNlIHRoZSBiZWdpbm5pbmcgb2YgYVxuICAgICAqIGRyYWcsIGV4cHJlc3NlZCBhcyBhIGZyYWN0aW9uIG9mIHRoZSBlbGVtZW50J3Mgd2lkdGguXG4gICAgICpcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKi9cbiAgICBnZXQgdHJhdmVsRnJhY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpc1t0cmF2ZWxGcmFjdGlvblN5bWJvbF07XG4gICAgfVxuICAgIHNldCB0cmF2ZWxGcmFjdGlvbih2YWx1ZSkge1xuICAgICAgdGhpc1t0cmF2ZWxGcmFjdGlvblN5bWJvbF0gPSB2YWx1ZTtcbiAgICAgIGlmICgndHJhdmVsRnJhY3Rpb24nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnRyYXZlbEZyYWN0aW9uID0gdmFsdWU7IH1cbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBTd2lwZURpcmVjdGlvbjtcbn07XG5cblxuLy8gUmV0dXJuIHRydWUgaWYgdGhlIHBvaW50ZXIgZXZlbnQgaXMgZm9yIHRoZSBwZW4sIG9yIHRoZSBwcmltYXJ5IHRvdWNoIHBvaW50LlxuZnVuY3Rpb24gaXNFdmVudEZvclBlbk9yUHJpbWFyeVRvdWNoKGV2ZW50KSB7XG4gIHJldHVybiBldmVudC5wb2ludGVyVHlwZSA9PT0gJ3BlbicgfHxcbiAgICAgIChldmVudC5wb2ludGVyVHlwZSA9PT0gJ3RvdWNoJyAmJiBldmVudC5pc1ByaW1hcnkpO1xufVxuXG5cbmZ1bmN0aW9uIHRvdWNoU3RhcnQoZWxlbWVudCwgY2xpZW50WCwgY2xpZW50WSkge1xuICBlbGVtZW50LnNob3dUcmFuc2l0aW9uID0gZmFsc2U7XG4gIGVsZW1lbnRbc3RhcnRYU3ltYm9sXSA9IGNsaWVudFg7XG4gIGVsZW1lbnRbcHJldmlvdXNYU3ltYm9sXSA9IGNsaWVudFg7XG4gIGVsZW1lbnRbcHJldmlvdXNZU3ltYm9sXSA9IGNsaWVudFk7XG4gIGVsZW1lbnRbZGVsdGFYU3ltYm9sXSA9IDA7XG4gIGVsZW1lbnRbZGVsdGFZU3ltYm9sXSA9IDA7XG59XG5cbmZ1bmN0aW9uIHRvdWNoTW92ZShlbGVtZW50LCBjbGllbnRYLCBjbGllbnRZKSB7XG4gIGVsZW1lbnRbZGVsdGFYU3ltYm9sXSA9IGNsaWVudFggLSBlbGVtZW50W3ByZXZpb3VzWFN5bWJvbF07XG4gIGVsZW1lbnRbZGVsdGFZU3ltYm9sXSA9IGNsaWVudFkgLSBlbGVtZW50W3ByZXZpb3VzWVN5bWJvbF07XG4gIGVsZW1lbnRbcHJldmlvdXNYU3ltYm9sXSA9IGNsaWVudFg7XG4gIGVsZW1lbnRbcHJldmlvdXNZU3ltYm9sXSA9IGNsaWVudFk7XG4gIGlmIChNYXRoLmFicyhlbGVtZW50W2RlbHRhWFN5bWJvbF0pID4gTWF0aC5hYnMoZWxlbWVudFtkZWx0YVlTeW1ib2xdKSkge1xuICAgIC8vIE1vdmUgd2FzIG1vc3RseSBob3Jpem9udGFsLlxuICAgIHRyYWNrVG8oZWxlbWVudCwgY2xpZW50WCk7XG4gICAgLy8gSW5kaWNhdGUgdGhhdCB0aGUgZXZlbnQgd2FzIGhhbmRsZWQuIEl0J2QgYmUgbmljZXIgaWYgd2UgZGlkbid0IGhhdmVcbiAgICAvLyB0byBkbyB0aGlzIHNvIHRoYXQsIGUuZy4sIGEgdXNlciBjb3VsZCBiZSBzd2lwaW5nIGxlZnQgYW5kIHJpZ2h0XG4gICAgLy8gd2hpbGUgc2ltdWx0YW5lb3VzbHkgc2Nyb2xsaW5nIHVwIGFuZCBkb3duLiAoTmF0aXZlIHRvdWNoIGFwcHMgY2FuIGRvXG4gICAgLy8gdGhhdC4pIEhvd2V2ZXIsIE1vYmlsZSBTYWZhcmkgd2FudHMgdG8gaGFuZGxlIHN3aXBlIGV2ZW50cyBuZWFyIHRoZVxuICAgIC8vIHBhZ2UgYW5kIGludGVycHJldCB0aGVtIGFzIG5hdmlnYXRpb25zLiBUbyBhdm9pZCBoYXZpbmcgYSBob3JpemlvbnRhbFxuICAgIC8vIHN3aXBlIG1pc2ludGVwcmV0ZWQgYXMgYSBuYXZpZ2F0aW9uLCB3ZSBpbmRpY2F0ZSB0aGF0IHdlJ3ZlIGhhbmRsZWRcbiAgICAvLyB0aGUgZXZlbnQsIGFuZCBwcmV2ZW50IGRlZmF1bHQgYmVoYXZpb3IuXG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgLy8gTW92ZSB3YXMgbW9zdGx5IHZlcnRpY2FsLlxuICAgIHJldHVybiBmYWxzZTsgLy8gTm90IGhhbmRsZWRcbiAgfVxufVxuXG5mdW5jdGlvbiB0b3VjaEVuZChlbGVtZW50LCBjbGllbnRYLCBjbGllbnRZKSB7XG4gIGVsZW1lbnQuc2hvd1RyYW5zaXRpb24gPSB0cnVlO1xuICBpZiAoZWxlbWVudFtkZWx0YVhTeW1ib2xdID49IDIwKSB7XG4gICAgLy8gRmluaXNoZWQgZ29pbmcgcmlnaHQgYXQgaGlnaCBzcGVlZC5cbiAgICBlbGVtZW50LmdvTGVmdCgpO1xuICB9IGVsc2UgaWYgKGVsZW1lbnRbZGVsdGFYU3ltYm9sXSA8PSAtMjApIHtcbiAgICAvLyBGaW5pc2hlZCBnb2luZyBsZWZ0IGF0IGhpZ2ggc3BlZWQuXG4gICAgZWxlbWVudC5nb1JpZ2h0KCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gRmluaXNoZWQgYXQgbG93IHNwZWVkLlxuICAgIHRyYWNrVG8oZWxlbWVudCwgY2xpZW50WCk7XG4gICAgbGV0IHRyYXZlbEZyYWN0aW9uID0gZWxlbWVudC50cmF2ZWxGcmFjdGlvbjtcbiAgICBpZiAodHJhdmVsRnJhY3Rpb24gPj0gMC41KSB7XG4gICAgICBlbGVtZW50LmdvUmlnaHQoKTtcbiAgICB9IGVsc2UgaWYgKHRyYXZlbEZyYWN0aW9uIDw9IC0wLjUpIHtcbiAgICAgIGVsZW1lbnQuZ29MZWZ0KCk7XG4gICAgfVxuICB9XG4gIGVsZW1lbnQudHJhdmVsRnJhY3Rpb24gPSAwO1xuICBlbGVtZW50W2RlbHRhWFN5bWJvbF0gPSBudWxsO1xuICBlbGVtZW50W2RlbHRhWVN5bWJvbF0gPSBudWxsO1xufVxuXG5mdW5jdGlvbiB0cmFja1RvKGVsZW1lbnQsIHgpIHtcbiAgbGV0IHdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgbGV0IGRyYWdEaXN0YW5jZSA9IGVsZW1lbnRbc3RhcnRYU3ltYm9sXSAtIHg7XG4gIGxldCBmcmFjdGlvbiA9IHdpZHRoID4gMCA/XG4gICAgZHJhZ0Rpc3RhbmNlIC8gd2lkdGggOlxuICAgIDA7XG4gIGVsZW1lbnQudHJhdmVsRnJhY3Rpb24gPSBmcmFjdGlvbjtcbn1cbiIsImltcG9ydCBDb2xsZWN0aXZlIGZyb20gJy4vQ29sbGVjdGl2ZSc7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBUYXJnZXRJbkNvbGxlY3RpdmUuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBhbGxvd3MgYSBjb21wb25lbnQgdG8gcHJvdmlkZSBhZ2dyZWdhdGUgYmVoYXZpb3Igd2l0aCBvdGhlclxuICAgKiBlbGVtZW50cywgZS5nLiwgZm9yIGtleWJvYXJkIGhhbmRsaW5nLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGltcGxpY2l0bHkgY3JlYXRlcyBhIGNvbGxlY3RpdmUgZm9yIGEgY29tcG9uZW50IHNvIHRoYXQgaXQgY2FuXG4gICAqIHBhcnRpY2lwYXRlIGluIGNvbGxlY3RpdmUga2V5Ym9hcmQgaGFuZGxpbmcuIFNlZSB0aGVcbiAgICogW0NvbGxlY3RpdmVdKENvbGxlY3RpdmUubWQpIGNsYXNzIGZvciBkZXRhaWxzLlxuICAgKlxuICAgKiBZb3UgY2FuIHVzZSB0aGlzIG1peGluIGluIGNvbmp1bmN0aW9uIHdpdGhcbiAgICogW0NvbnRlbnRGaXJzdENoaWxkVGFyZ2V0XShDb250ZW50Rmlyc3RDaGlsZFRhcmdldC5tZCkgdG8gYXV0b21hdGljYWxseSBoYXZlXG4gICAqIHRoZSBjb21wb25lbnQncyBjb2xsZWN0aXZlIGV4dGVuZGVkIHRvIGl0cyBmaXJzdCBjaGlsZC5cbiAgICovXG4gIGNsYXNzIFRhcmdldEluQ29sbGVjdGl2ZSBleHRlbmRzIGJhc2Uge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgdGhpcy5jb2xsZWN0aXZlID0gbmV3IENvbGxlY3RpdmUodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cy9zZXRzIHRoZSBjdXJyZW50IHRhcmdldCBvZiB0aGUgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogU2V0IHRoaXMgdG8gcG9pbnQgdG8gYW5vdGhlciBlbGVtZW50LiBUaGF0IHRhcmdldCBlbGVtZW50IHdpbGwgYmVcbiAgICAgKiBpbXBsaWNpdGx5IGFkZGVkIHRvIHRoZSBjb21wb25lbnQncyBjb2xsZWN0aXZlLiBUaGF0IGlzLCB0aGUgY29tcG9uZW50XG4gICAgICogYW5kIGl0cyB0YXJnZXQgd2lsbCBzaGFyZSByZXNwb25zaWJpbGl0eSBmb3IgaGFuZGxpbmcga2V5Ym9hcmQgZXZlbnRzLlxuICAgICAqXG4gICAgICogWW91IGNhbiBzZXQgdGhpcyBwcm9wZXJ0eSB5b3Vyc2VsZiwgb3IgeW91IGNhbiB1c2UgdGhlXG4gICAgICogQ29udGVudEZpcnN0Q2hpbGRUYXJnZXQgbWl4aW4gdG8gYXV0b21hdGljYWxseSBzZXQgdGhlIHRhcmdldCB0byB0aGVcbiAgICAgKiBjb21wb25lbnQncyBmaXJzdCBjaGlsZC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICBnZXQgdGFyZ2V0KCkge1xuICAgICAgcmV0dXJuIHN1cGVyLnRhcmdldDtcbiAgICB9XG4gICAgc2V0IHRhcmdldChlbGVtZW50KSB7XG4gICAgICBpZiAoJ3RhcmdldCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIudGFyZ2V0ID0gZWxlbWVudDsgfVxuICAgICAgdGhpcy5jb2xsZWN0aXZlLmFzc2ltaWxhdGUoZWxlbWVudCk7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gVGFyZ2V0SW5Db2xsZWN0aXZlO1xufTtcbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi9jcmVhdGVTeW1ib2wnO1xuXG5cbi8vIFN5bWJvbHMgZm9yIHByaXZhdGUgZGF0YSBtZW1iZXJzIG9uIGFuIGVsZW1lbnQuXG5jb25zdCBpdGVtc0NoYW5nZWRMaXN0ZW5lclN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnaXRlbXNDaGFuZ2VkTGlzdGVuZXInKTtcbmNvbnN0IHNlbGVjdGVkSXRlbUNoYW5nZWRMaXN0ZW5lclN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnc2VsZWN0ZWRJdGVtQ2hhbmdlZExpc3RlbmVyJyk7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBUYXJnZXRTZWxlY3Rpb24uICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBhbGxvd3MgYSBjb21wb25lbnQgdG8gZGVsZWdhdGUgaXRzIG93biBzZWxlY3Rpb24gc2VtYW50aWNzIHRvIGFcbiAgICogdGFyZ2V0IGVsZW1lbnQuXG4gICAqXG4gICAqIFRoaXMgaXMgdXNlZnVsIHdoZW4gZGVmaW5pbmcgY29tcG9uZW50cyB0aGF0IGFjdCBhcyBvcHRpb25hbCBmZWF0dXJlcyBmb3IgYVxuICAgKiBjb21wb25lbnQgdGhhdCBhY3RzIGxpa2UgYSBsaXN0LiBTZWUgYmFzaWMtYXJyb3ctc2VsZWN0aW9uIGFuZFxuICAgKiBiYXNpYy1wYWdlLWRvdHMgZm9yIGV4YW1wbGVzIG9mIGNvbXBvbmVudHMgdXNlZCBhcyBvcHRpb25hbCBmZWF0dXJlcyBmb3JcbiAgICogY29tcG9uZW50cyBsaWtlIGJhc2ljLWNhcm91c2VsLiBBIHR5cGljYWwgdXNhZ2UgbWlnaHQgYmU6XG4gICAqXG4gICAqICAgICA8YmFzaWMtYXJyb3ctc2VsZWN0aW9uPlxuICAgKiAgICAgICA8YmFzaWMtY2Fyb3VzZWw+XG4gICAqICAgICAgICAgLi4uIGltYWdlcywgZXRjLiAuLi5cbiAgICogICAgICAgPC9iYXNpYy1jYXJvdXNlbD5cbiAgICogICAgIDwvYmFzaWMtYXJyb3ctc2VsZWN0aW9uPlxuICAgKlxuICAgKiBCZWNhdXNlIGJhc2ljLWFycm93LXNlbGVjdGlvbiB1c2VzIHRoZVxuICAgKiBbVGFyZ2V0U2VsZWN0aW9uXShUYXJnZXRTZWxlY3Rpb24ubWQpIG1peGluLCBpdCBleHBvc2VzIG1lbWJlcnMgdG8gYWNjZXNzIGFcbiAgICogc2VsZWN0aW9uOiBgc2VsZWN0TmV4dGAsIGBzZWxlY3RQcmV2aW91c2AsIGBzZWxlY3RlZEluZGV4YCwgZXRjLiBUaGVzZSBhcmVcbiAgICogYWxsIGRlbGVnYXRlZCB0byB0aGUgY2hpbGQgY29tcG9uZW50IChoZXJlLCBhIGJhc2ljLWNhcm91c2VsKS5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIGEgYHRhcmdldGAgcHJvcGVydHkgdG8gYmUgc2V0IHRvIHRoZSBlbGVtZW50IGFjdHVhbGx5XG4gICAqIG1hbmFnaW5nIHRoZSBzZWxlY3Rpb24uIFlvdSBjYW4gc2V0IHRoYXQgcHJvcGVydHkgeW91cnNlbGYsIG9yIHlvdSBjYW4gdXNlXG4gICAqIHRoZSBbQ29udGVudEZpcnN0Q2hpbGRUYXJnZXRdKENvbnRlbnRGaXJzdENoaWxkVGFyZ2V0Lm1kKSBtaXhpbiB0b1xuICAgKiBpbXBsaWNpdGx5IHRha2UgdGhlIGNvbXBvbmVudCdzIGZpcnN0IGNoaWxkIGFzIHRoZSB0YXJnZXQuIFRoaXMgaXMgd2hhdFxuICAgKiBiYXNpYy1hcnJvdy1zZWxlY3Rpb24gKGFib3ZlKSBkb2VzLlxuICAgKi9cbiAgY2xhc3MgVGFyZ2V0U2VsZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCBzZXQgb2YgaXRlbXMgaW4gdGhlIGxpc3QuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnRbXX1cbiAgICAgKi9cbiAgICBnZXQgaXRlbXMoKSB7XG4gICAgICBsZXQgdGFyZ2V0ID0gdGhpcy50YXJnZXQ7XG4gICAgICBsZXQgaXRlbXMgPSB0YXJnZXQgJiYgdGFyZ2V0Lml0ZW1zO1xuICAgICAgcmV0dXJuIGl0ZW1zIHx8IFtdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbiB0aGUgdW5kZXJseWluZyBjb250ZW50cyBjaGFuZ2UuIEl0IGlzIGFsc29cbiAgICAgKiBpbnZva2VkIG9uIGNvbXBvbmVudCBpbml0aWFsaXphdGlvbiDigJMgc2luY2UgdGhlIGl0ZW1zIGhhdmUgXCJjaGFuZ2VkXCIgZnJvbVxuICAgICAqIGJlaW5nIG5vdGhpbmcuXG4gICAgICovXG4gICAgaXRlbXNDaGFuZ2VkKCkge1xuICAgICAgaWYgKHN1cGVyLml0ZW1zQ2hhbmdlZCkgeyBzdXBlci5pdGVtc0NoYW5nZWQoKTsgfVxuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnaXRlbXMtY2hhbmdlZCcpKTtcbiAgICB9XG5cbiAgICBnZXQgc2VsZWN0ZWRGcmFjdGlvbigpIHtcbiAgICAgIGxldCB0YXJnZXQgPSB0aGlzLnRhcmdldDtcbiAgICAgIHJldHVybiB0YXJnZXQgJiYgdGFyZ2V0LnNlbGVjdGVkRnJhY3Rpb247XG4gICAgfVxuICAgIHNldCBzZWxlY3RlZEZyYWN0aW9uKGZyYWN0aW9uKSB7XG4gICAgICBpZiAoJ3NlbGVjdGVkRnJhY3Rpb24nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkRnJhY3Rpb24gPSBmcmFjdGlvbjsgfVxuICAgICAgbGV0IHRhcmdldCA9IHRoaXMudGFyZ2V0O1xuICAgICAgaWYgKHRhcmdldCAmJiB0YXJnZXQuc2VsZWN0ZWRGcmFjdGlvbiAhPT0gZnJhY3Rpb24pIHtcbiAgICAgICAgdGFyZ2V0LnNlbGVjdGVkRnJhY3Rpb24gPSBmcmFjdGlvbjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudGx5IHNlbGVjdGVkIGl0ZW0sIG9yIG51bGwgaWYgdGhlcmUgaXMgbm8gc2VsZWN0aW9uLlxuICAgICAqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIGdldCBzZWxlY3RlZEl0ZW0oKSB7XG4gICAgICBsZXQgdGFyZ2V0ID0gdGhpcy50YXJnZXQ7XG4gICAgICByZXR1cm4gdGFyZ2V0ICYmIHRhcmdldC5zZWxlY3RlZEl0ZW07XG4gICAgfVxuICAgIHNldCBzZWxlY3RlZEl0ZW0oaXRlbSkge1xuICAgICAgaWYgKCdzZWxlY3RlZEl0ZW0nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkSXRlbSA9IGl0ZW07IH1cbiAgICAgIGxldCB0YXJnZXQgPSB0aGlzLnRhcmdldDtcbiAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgdGFyZ2V0LnNlbGVjdGVkSXRlbSA9IGl0ZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVGhpcyBtZXRob2QgZXhpc3RzIHNvIHdyYXBwaW5nIGNvbXBvbmVudHMgY2FuIGhhbmRsZSBhIGNoYW5nZSBpbiB0aGVcbiAgICAvLyBzZWxlY3Rpb24gd2l0aG91dCBwb3RlbnRpYWxseSByZS1pbnZva2luZyB0aGUgc2VsZWN0ZWRJdGVtIHNldHRlci4gVGhpc1xuICAgIC8vIGlzIGtpbmQgb2YgdW5zYXRpc2Z5aW5nLCB0aG91Z2guIEl0J2QgYmUgbmljZXIgdG8gbGV0IHN1Y2ggY29tcG9uZW50c1xuICAgIC8vIGp1c3QgaW1wbGVtZW50IHRoZSBnZXR0ZXIvc2V0dGVyIGZvciBzZWxlY3RlZEl0ZW0sIGJ1dCBoYXZlIGEgd2F5IHRvXG4gICAgLy8ga25vdyB3aGV0aGVyIHRoZXkgbmVlZCB0byBhbHNvIHRoYXQgcHJvcGVydHkgZ2V0dGVyL3NldHRlciBmb3IgdGhlIHRhcmdldFxuICAgIC8vIGNvbXBvbmVudC5cbiAgICBzZWxlY3RlZEl0ZW1DaGFuZ2VkKCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdGVkSXRlbUNoYW5nZWQpIHsgc3VwZXIuc2VsZWN0ZWRJdGVtQ2hhbmdlZCgpOyB9XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdzZWxlY3RlZC1pdGVtLWNoYW5nZWQnKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiBzZWxlY3Rpb24gbmF2aWdhdGlvbnMgd3JhcCBmcm9tIGxhc3QgdG8gZmlyc3QsIGFuZCB2aWNlIHZlcnNhLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQGRlZmF1bHQge2ZhbHNlfVxuICAgICAqL1xuICAgIGdldCBzZWxlY3Rpb25XcmFwcygpIHtcbiAgICAgIGxldCB0YXJnZXQgPSB0aGlzLnRhcmdldDtcbiAgICAgIHJldHVybiB0YXJnZXQgJiYgdGFyZ2V0LnNlbGVjdGlvbldyYXBzO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0aW9uV3JhcHModmFsdWUpIHtcbiAgICAgIGlmICgnc2VsZWN0aW9uV3JhcHMnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGlvbldyYXBzID0gdmFsdWU7IH1cbiAgICAgIGxldCB0YXJnZXQgPSB0aGlzLnRhcmdldDtcbiAgICAgIGlmKCB0YXJnZXQpIHtcbiAgICAgICAgdGFyZ2V0LnNlbGVjdGlvbldyYXBzID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cy9zZXRzIHRoZSB0YXJnZXQgZWxlbWVudCB0byB3aGljaCB0aGlzIGNvbXBvbmVudCB3aWxsIGRlbGVnYXRlXG4gICAgICogc2VsZWN0aW9uIGFjdGlvbnMuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgZ2V0IHRhcmdldCgpIHtcbiAgICAgIHJldHVybiBzdXBlci50YXJnZXQ7XG4gICAgfVxuICAgIHNldCB0YXJnZXQoZWxlbWVudCkge1xuICAgICAgaWYgKCd0YXJnZXQnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnRhcmdldCA9IGVsZW1lbnQ7IH1cbiAgICAgIGlmICh0aGlzW2l0ZW1zQ2hhbmdlZExpc3RlbmVyU3ltYm9sXSkge1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2l0ZW1zLWNoYW5nZWQnLCB0aGlzW2l0ZW1zQ2hhbmdlZExpc3RlbmVyU3ltYm9sXSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpc1tzZWxlY3RlZEl0ZW1DaGFuZ2VkTGlzdGVuZXJTeW1ib2xdKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2VsZWN0ZWQtaXRlbS1jaGFuZ2VkJywgdGhpc1tzZWxlY3RlZEl0ZW1DaGFuZ2VkTGlzdGVuZXJTeW1ib2xdKTtcbiAgICAgIH1cbiAgICAgIHRoaXNbaXRlbXNDaGFuZ2VkTGlzdGVuZXJTeW1ib2xdID0gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpdGVtcy1jaGFuZ2VkJywgZXZlbnQgPT4ge1xuICAgICAgICB0aGlzLml0ZW1zQ2hhbmdlZCgpO1xuICAgICAgfSk7XG4gICAgICB0aGlzW3NlbGVjdGVkSXRlbUNoYW5nZWRMaXN0ZW5lclN5bWJvbF0gPSBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3NlbGVjdGVkLWl0ZW0tY2hhbmdlZCcsIGV2ZW50ID0+IHtcbiAgICAgICAgLy8gUkVWSUVXOiBDb21wb25lbnRzIGFwcGx5aW5nIFRhcmdldFNlbGVjdGlvbiBib3RoIGxpc3RlbiB0byB0aGlzXG4gICAgICAgIC8vIGV2ZW50IChvbiB0aGUgdGFyZ2V0KSwgYW5kIHJhaXNlIGl0IHRoZW1zZWx2ZXMuIEluIHRoZW9yeSwgdGhleSdyZVxuICAgICAgICAvLyBleHBlY3RlZCB0byAqbm90KiBjYXRjaCB0aGUgZXZlbnRzIHRoZXkgcmFpc2UgdGhlbXNlbHZlcywgYnV0IENocm9tZVxuICAgICAgICAvLyAoYXQgbGVhc3QpIGFwcGVhcnMgdG8gdmlvbGF0ZSB0aGF0IGV4cGVjdGF0aW9uLiBUaGF0IGlzLCBpdCdzXG4gICAgICAgIC8vIHBvc3NpYmxlIHRvIGhhdmUgZXZlbnQudGFyZ2V0ID09PSB0aGlzLiBNb3JlIGNvbmZ1c2luZ2x5LCB0aGUgZ3VhcmRcbiAgICAgICAgLy8gYmVsb3csIHdoaWNoIGlzIGludGVuZGVkIHRvIGF2b2lkIHJlY3Vyc2l2ZSBjYWxscyB0b1xuICAgICAgICAvLyBzZWxlY3RlZEl0ZW1DaGFuZ2VkLCBkb2Vzbid0IHdvcmsgYXMgZXhwZWN0ZWQuIEV2ZW4gaWYgdGhlIGRlYnVnZ2VyXG4gICAgICAgIC8vIHNob3dzIGV2ZW50LnRhcmdldCA9PT0gdGhpcywgdGhlIGNvbnRlbnRzIG9mIHRoZSBcImlmXCIgc3RhdGVtZW50IHdpbGxcbiAgICAgICAgLy8gYmUgZXhlY3V0ZWQuXG4gICAgICAgIGlmIChldmVudC50YXJnZXQgIT09IHRoaXMpIHtcbiAgICAgICAgICAvLyBMZXQgdGhlIGNvbXBvbmVudCBrbm93IHRoZSB0YXJnZXQncyBzZWxlY3Rpb24gY2hhbmdlZCwgYnV0IHdpdGhvdXRcbiAgICAgICAgICAvLyByZS1pbnZva2luZyB0aGUgc2VsZWN0SW5kZXgvc2VsZWN0ZWRJdGVtIHNldHRlci5cbiAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbUNoYW5nZWQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBGb3JjZSBpbml0aWFsIHJlZnJlc2guXG4gICAgICB0aGlzLml0ZW1zQ2hhbmdlZCgpO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIFRhcmdldFNlbGVjdGlvbjtcbn07XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4vY3JlYXRlU3ltYm9sJztcblxuY29uc3QgcGxheWluZ1N5bWJvbCA9IGNyZWF0ZVN5bWJvbCgncGxheWluZycpO1xuY29uc3Qgc2VsZWN0aW9uVGltZXJEdXJhdGlvblN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnc2VsZWN0aW9uVGltZXJEdXJhdGlvbicpO1xuY29uc3QgdGltZXJUaW1lb3V0U3ltYm9sID0gY3JlYXRlU3ltYm9sKCd0aW1lclRpbWVvdXQnKTtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFRpbWVyU2VsZWN0aW9uLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggcHJvdmlkZXMgZm9yIGF1dG9tYXRpYyB0aW1lZCBjaGFuZ2VzIGluIHNlbGVjdGlvbi5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBpcyB1c2VmdWwgZm9yIGNyZWF0aW5nIHNsaWRlc2hvdy1saWtlIGVsZW1lbnRzLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGV4cGVjdHMgdGhlIGNvbXBvbmVudCB0byBkZWZpbmUgYW4gYGl0ZW1zYCBwcm9wZXJ0eSwgYXMgd2VsbCBhc1xuICAgKiBgc2VsZWN0Rmlyc3RgIGFuZCBgc2VsZWN0TmV4dGAgbWV0aG9kcy4gWW91IGNhbiBpbXBsZW1lbnQgdGhvc2UgeW91cnNlbGYsXG4gICAqIG9yIHVzZSB0aGUgW0NvbnRlbnRBc0l0ZW1zXShDb250ZW50QXNJdGVtcy5tZCkgYW5kXG4gICAqIFtTaW5nbGVTZWxlY3Rpb25dKFNpbmdsZVNlbGVjdGlvbi5tZCkgbWl4aW5zLlxuICAgKi9cbiAgY2xhc3MgVGltZXJTZWxlY3Rpb24gZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIC8vIFNldCBkZWZhdWx0cy5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5wbGF5aW5nID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLnBsYXlpbmcgPSB0aGlzLmRlZmF1bHRzLnBsYXlpbmc7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHRoaXMuc2VsZWN0aW9uVGltZXJEdXJhdGlvbiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25UaW1lckR1cmF0aW9uID0gdGhpcy5kZWZhdWx0cy5zZWxlY3Rpb25UaW1lckR1cmF0aW9uO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnRlbnRDaGFuZ2VkKCkge1xuICAgICAgaWYgKHN1cGVyLmNvbnRlbnRDaGFuZ2VkKSB7IHN1cGVyLmNvbnRlbnRDaGFuZ2VkKCk7IH1cbiAgICAgIHJlc3RhcnRUaW1lcih0aGlzKTtcbiAgICB9XG5cbiAgICBnZXQgZGVmYXVsdHMoKSB7XG4gICAgICBsZXQgZGVmYXVsdHMgPSBzdXBlci5kZWZhdWx0cyB8fCB7fTtcbiAgICAgIGRlZmF1bHRzLnBsYXlpbmcgPSBmYWxzZTtcbiAgICAgIGRlZmF1bHRzLnNlbGVjdGlvblRpbWVyRHVyYXRpb24gPSAxMDAwO1xuICAgICAgcmV0dXJuIGRlZmF1bHRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJlZ2luIGF1dG9tYXRpYyBwcm9ncmVzc2lvbiBvZiB0aGUgc2VsZWN0aW9uLlxuICAgICAqL1xuICAgIHBsYXkoKSB7XG4gICAgICBpZiAoc3VwZXIucGxheSkgeyBzdXBlci5wbGF5KCk7IH1cbiAgICAgIHN0YXJ0VGltZXIodGhpcyk7XG4gICAgICB0aGlzW3BsYXlpbmdTeW1ib2xdID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXVzZSBhdXRvbWF0aWMgcHJvZ3Jlc3Npb24gb2YgdGhlIHNlbGVjdGlvbi5cbiAgICAgKi9cbiAgICBwYXVzZSgpIHtcbiAgICAgIGlmIChzdXBlci5wYXVzZSkgeyBzdXBlci5wYXVzZSgpOyB9XG4gICAgICBjbGVhclRpbWVyKHRoaXMpO1xuICAgICAgdGhpc1twbGF5aW5nU3ltYm9sXSA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRydWUgaWYgdGhlIHNlbGVjdGlvbiBpcyBiZWluZyBhdXRvbWF0aWNhbGx5IGFkdmFuY2VkLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cbiAgICBnZXQgcGxheWluZygpIHtcbiAgICAgIHJldHVybiB0aGlzW3BsYXlpbmdTeW1ib2xdO1xuICAgIH1cbiAgICBzZXQgcGxheWluZyhwbGF5aW5nKSB7XG4gICAgICBsZXQgcHJldmlvdXNQbGF5aW5nID0gdGhpc1twbGF5aW5nU3ltYm9sXTtcbiAgICAgIGxldCBwYXJzZWQgPSBTdHJpbmcocGxheWluZykgPT09ICd0cnVlJzsgLy8gQ2FzdCB0byBib29sZWFuXG4gICAgICBpZiAoJ3BsYXlpbmcnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnBsYXlpbmcgPSBwbGF5aW5nOyB9XG4gICAgICBpZiAocGFyc2VkICE9PSBwcmV2aW91c1BsYXlpbmcpIHtcbiAgICAgICAgaWYgKHBsYXlpbmcpIHtcbiAgICAgICAgICB0aGlzLnBsYXkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnBhdXNlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFdoZW4gdGhlIHNlbGVjdGVkIGl0ZW0gY2hhbmdlcyAoYmVjYXVzZSBvZiBzb21ldGhpbmcgdGhpcyBtaXhpbiBkaWQsIG9yXG4gICAgICogd2FzIGNoYW5nZWQgYnkgYW4gb3V0c2lkZSBhZ2VudCBsaWtlIHRoZSB1c2VyKSwgd2Ugd2FpdCBiZWZvcmUgYWR2YW5jaW5nXG4gICAgICogdG8gdGhlIG5leHQgaXRlbS4gQnkgdHJpZ2dlcmluZyB0aGUgbmV4dCBpdGVtIHRoaXMgd2F5LCB3ZSBpbXBsaWNpdGx5IGdldFxuICAgICAqIGEgZGVzaXJhYmxlIGJlaGF2aW9yOiBpZiB0aGUgdXNlciBjaGFuZ2VzIHRoZSBzZWxlY3Rpb24gKGUuZy4sIGluIGFcbiAgICAgKiBjYXJvdXNlbCksIHdlIGxldCB0aGVtIHNlZSB0aGF0IHNlbGVjdGlvbiBzdGF0ZSBmb3IgYSB3aGlsZSBiZWZvcmVcbiAgICAgKiBhZHZhbmNpbmcgdGhlIHNlbGVjdGlvbiBvdXJzZWx2ZXMuXG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGVkSXRlbSgpIHtcbiAgICAgIHJldHVybiBzdXBlci5zZWxlY3RlZEl0ZW07XG4gICAgfVxuICAgIHNldCBzZWxlY3RlZEl0ZW0oaXRlbSkge1xuICAgICAgaWYgKCdzZWxlY3RlZEl0ZW0nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkSXRlbSA9IGl0ZW07IH1cbiAgICAgIHJlc3RhcnRUaW1lcih0aGlzKTtcbiAgICB9XG5cbiAgICAvLyBJbiBjYXNlIHRoaXMgbWl4aW4gaXMgYmVpbmcgdXNlZCB3aXRoIFRhcmdldFNlbGVjdGlvbi5cbiAgICBzZWxlY3RlZEl0ZW1DaGFuZ2VkKCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdGVkSXRlbUNoYW5nZWQpIHsgc3VwZXIuc2VsZWN0ZWRJdGVtQ2hhbmdlZCgpOyB9XG4gICAgICByZXN0YXJ0VGltZXIodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIHRpbWUgaW4gbWlsbGlzZWNvbmRzIHRoYXQgd2lsbCBlbGFwc2UgYWZ0ZXIgdGhlIHNlbGVjdGlvbiBjaGFuZ2VzXG4gICAgICogYmVmb3JlIHRoZSBzZWxlY3Rpb24gd2lsbCBiZSBhZHZhbmNlZCB0byB0aGUgbmV4dCBpdGVtIGluIHRoZSBsaXN0LlxuICAgICAqXG4gICAgICogQHR5cGUge251bWJlcn0gLSBUaW1lIGluIG1pbGxpc2Vjb25kc1xuICAgICAqIEBkZWZhdWx0IDEwMDAgKDEgc2Vjb25kKVxuICAgICAqL1xuICAgIGdldCBzZWxlY3Rpb25UaW1lckR1cmF0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXNbc2VsZWN0aW9uVGltZXJEdXJhdGlvblN5bWJvbF07XG4gICAgfVxuICAgIHNldCBzZWxlY3Rpb25UaW1lckR1cmF0aW9uKHZhbHVlKSB7XG4gICAgICB0aGlzW3NlbGVjdGlvblRpbWVyRHVyYXRpb25TeW1ib2xdID0gcGFyc2VJbnQodmFsdWUpO1xuICAgICAgaWYgKCdzZWxlY3Rpb25UaW1lckR1cmF0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3Rpb25UaW1lckR1cmF0aW9uID0gdmFsdWU7IH1cbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBUaW1lclNlbGVjdGlvbjtcbn07XG5cblxuZnVuY3Rpb24gY2xlYXJUaW1lcihlbGVtZW50KSB7XG4gIGlmIChlbGVtZW50W3RpbWVyVGltZW91dFN5bWJvbF0pIHtcbiAgICBjbGVhclRpbWVvdXQoZWxlbWVudFt0aW1lclRpbWVvdXRTeW1ib2xdKTtcbiAgICBlbGVtZW50W3RpbWVyVGltZW91dFN5bWJvbF0gPSBudWxsO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlc3RhcnRUaW1lcihlbGVtZW50KSB7XG4gIGNsZWFyVGltZXIoZWxlbWVudCk7XG4gIGlmIChlbGVtZW50LnBsYXlpbmcgJiYgZWxlbWVudC5pdGVtcyAmJiBlbGVtZW50Lml0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICBzdGFydFRpbWVyKGVsZW1lbnQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0YXJ0VGltZXIoZWxlbWVudCkge1xuICAvLyBJZiBwbGF5KCkgaXMgY2FsbGVkIG1vcmUgdGhhbiBvbmNlLCBjYW5jZWwgYW55IGV4aXN0aW5nIHRpbWVyLlxuICBjbGVhclRpbWVyKGVsZW1lbnQpO1xuICBlbGVtZW50W3RpbWVyVGltZW91dFN5bWJvbF0gPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBzZWxlY3ROZXh0V2l0aFdyYXAoZWxlbWVudCk7XG4gIH0sIGVsZW1lbnQuc2VsZWN0aW9uVGltZXJEdXJhdGlvbik7XG59XG5cbi8vIFNlbGVjdCB0aGUgbmV4dCBpdGVtLCB3cmFwcGluZyB0byBmaXJzdCBpdGVtIGlmIG5lY2Vzc2FyeS5cbmZ1bmN0aW9uIHNlbGVjdE5leHRXaXRoV3JhcChlbGVtZW50KSB7XG4gIGxldCBpdGVtcyA9IGVsZW1lbnQuaXRlbXM7XG4gIGlmIChpdGVtcyAmJiBpdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgaWYgKGVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9PSBudWxsIHx8IGVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9PT0gaXRlbXMubGVuZ3RoIC0gMSkge1xuICAgICAgZWxlbWVudC5zZWxlY3RGaXJzdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LnNlbGVjdE5leHQoKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvY3JlYXRlU3ltYm9sJztcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3QgYWJzb3JiRGVjZWxlcmF0aW9uU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdhYnNvcmJEZWNlbGVyYXRpb24nKTtcbmNvbnN0IGxhc3REZWx0YVhTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2xhc3REZWx0YVgnKTtcbmNvbnN0IGxhc3RXaGVlbFRpbWVvdXRTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2xhc3RXaGVlbFRpbWVvdXQnKTtcbmNvbnN0IHBvc3ROYXZpZ2F0ZURlbGF5Q29tcGxldGVTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3Bvc3ROYXZpZ2F0ZURlbGF5Q29tcGxldGUnKTtcbmNvbnN0IHdoZWVsRGlzdGFuY2VTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3doZWVsRGlzdGFuY2UnKTtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFRyYWNrcGFkRGlyZWN0aW9uLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggbWFwcyBhIGhvcml6b250YWwgdHJhY2twYWQgc3dpcGUgZ2VzdHVyZXMgKG9yIGhvcml6b250YWwgbW91c2VcbiAgICogd2hlZWwgYWN0aW9ucykgdG8gZGlyZWN0aW9uIHNlbWFudGljcy5cbiAgICpcbiAgICogWW91IGNhbiB1c2UgdGhpcyBtaXhpbiB3aXRoIGEgbWl4aW4gbGlrZVxuICAgKiBbRGlyZWN0aW9uU2VsZWN0aW9uXShEaXJlY3Rpb25TZWxlY3Rpb24ubWQpIHRvIGxldCB0aGUgdXNlciBjaGFuZ2UgdGhlXG4gICAqIHNlbGVjdGlvbiB3aXRoIHRoZSB0cmFja3BhZCBvciBtb3VzZSB3aGVlbC5cbiAgICpcbiAgICogVG8gcmVzcG9uZCB0byB0aGUgdHJhY2twYWQsIHdlIGNhbiBsaXN0ZW4gdG8gdGhlIERPTSdzIFwid2hlZWxcIiBldmVudHMuXG4gICAqIFRoZXNlIGV2ZW50cyBhcmUgZmlyZWQgYXMgdGhlIHVzZXIgZHJhZ3MgdGhlaXIgZmluZ2VycyBhY3Jvc3MgYSB0cmFja3BhZC5cbiAgICogVW5mb3J0dW5hdGVseSwgYnJvd3NlcnMgYXJlIG1pc3NpbmcgYSBjcml0aWNhbCBldmVudCDigJTCoHRoZXJlIGlzIG5vIGV2ZW50XG4gICAqIHdoZW4gdGhlIHVzZXIgKnN0b3BzKiBhIGdlc3R1cmVkIG9uIHRoZSB0cmFja3BhZCBvciBtb3VzZSB3aGVlbC5cbiAgICpcbiAgICogVG8gbWFrZSB0aGluZ3Mgd29yc2UsIHRoZSBtYWluc3RyZWFtIGJyb3dzZXJzIGNvbnRpbnVlIHRvIGdlbmVyYXRlIGZha2VcbiAgICogd2hlZWwgZXZlbnRzIGV2ZW4gYWZ0ZXIgdGhlIHVzZXIgaGFzIHN0b3BwZWQgZHJhZ2dpbmcgdGhlaXIgZmluZ2Vycy4gVGhlc2VcbiAgICogZmFrZSBldmVudHMgc2ltdWxhdGUgdGhlIHVzZXIgZ3JhZHVhbGx5IHNsb3dpbmcgZG93biB0aGUgZHJhZyB1bnRpbCB0aGV5XG4gICAqIGNvbWUgdG8gYSBzbW9vdGggc3RvcC4gSW4gc29tZSBjb250ZXh0cywgdGhlc2UgZmFrZSB3aGVlbCBldmVudHMgbWlnaHQgYmVcbiAgICogaGVscGZ1bCwgYnV0IGluIHRyeWluZyB0byBzdXBwbHkgdHlwaWNhbCB0cmFja3BhZCBzd2lwZSBuYXZpZ2F0aW9uLCB0aGVzZVxuICAgKiBmYWtlIGV2ZW50cyBnZXQgaW4gdGhlIHdheS5cbiAgICpcbiAgICogVGhpcyBjb21wb25lbnQgdXNlcyBoZXVyaXN0aWNzIHRvIHdvcmsgYXJvdW5kIHRoZXNlIHByb2JsZW1zLCBidXQgdGhlXG4gICAqIGNvbXBsZXggbmF0dXJlIG9mIHRoZSBwcm9ibGVtIG1ha2UgaXQgZXh0cmVtZWx5IGRpZmZpY3VsdCB0byBhY2hpZXZlIHRoZVxuICAgKiBzYW1lIGRlZ3JlZSBvZiB0cmFja3BhZCByZXNwb25zaXZlbmVzcyBwb3NzaWJsZSB3aXRoIG5hdGl2ZSBhcHBsaWNhdGlvbnMuXG4gICAqL1xuICBjbGFzcyBUcmFja3BhZERpcmVjdGlvbiBleHRlbmRzIGJhc2Uge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIGV2ZW50ID0+IHtcbiAgICAgICAgbGV0IGhhbmRsZWQgPSB3aGVlbCh0aGlzLCBldmVudCk7XG4gICAgICAgIGlmIChoYW5kbGVkKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXNldFdoZWVsVHJhY2tpbmcodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIGxlZnQuXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLlxuICAgICAqL1xuICAgIGdvTGVmdCgpIHtcbiAgICAgIGlmIChzdXBlci5nb0xlZnQpIHsgcmV0dXJuIHN1cGVyLmdvTGVmdCgpOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIHJpZ2h0LlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy5cbiAgICAgKi9cbiAgICBnb1JpZ2h0KCkge1xuICAgICAgaWYgKHN1cGVyLmdvUmlnaHQpIHsgcmV0dXJuIHN1cGVyLmdvUmlnaHQoKTsgfVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgaW1wbGVtZW50YXRpb24uXG4gICAgZ2V0IHNob3dUcmFuc2l0aW9uKCkge1xuICAgICAgcmV0dXJuIHN1cGVyLnNob3dUcmFuc2l0aW9uO1xuICAgIH1cbiAgICBzZXQgc2hvd1RyYW5zaXRpb24odmFsdWUpIHtcbiAgICAgIGlmICgnc2hvd1RyYW5zaXRpb24nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNob3dUcmFuc2l0aW9uID0gdmFsdWU7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGlzdGFuY2UgdGhlIHVzZXIgaGFzIG1vdmVkIHRoZSBmaXJzdCB0b3VjaHBvaW50IHNpbmNlIHRoZSBiZWdpbm5pbmdcbiAgICAgKiBvZiBhIHRyYWNrcGFkL3doZWVsIG9wZXJhdGlvbiwgZXhwcmVzc2VkIGFzIGEgZnJhY3Rpb24gb2YgdGhlIGVsZW1lbnQnc1xuICAgICAqIHdpZHRoLlxuICAgICAqXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICovXG4gICAgZ2V0IHRyYXZlbEZyYWN0aW9uKCkge1xuICAgICAgcmV0dXJuIHN1cGVyLnRyYXZlbEZyYWN0aW9uO1xuICAgIH1cbiAgICBzZXQgdHJhdmVsRnJhY3Rpb24odmFsdWUpIHtcbiAgICAgIGlmICgndHJhdmVsRnJhY3Rpb24nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnRyYXZlbEZyYWN0aW9uID0gdmFsdWU7IH1cbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBUcmFja3BhZERpcmVjdGlvbjtcbn07XG5cblxuLy8gVGltZSB3ZSB3YWl0IGZvbGxvd2luZyBhIG5hdmlnYXRpb24gYmVmb3JlIHBheWluZyBhdHRlbnRpb24gdG8gd2hlZWxcbi8vIGV2ZW50cyBhZ2Fpbi5cbmNvbnN0IFBPU1RfTkFWSUdBVEVfVElNRSA9IDI1MDtcblxuLy8gVGltZSB3ZSB3YWl0IGFmdGVyIHRoZSBsYXN0IHdoZWVsIGV2ZW50IGJlZm9yZSB3ZSByZXNldCB0aGluZ3MuXG5jb25zdCBXSEVFTF9USU1FID0gMTAwO1xuXG5cbi8vIEZvbGxvd2luZyBhIG5hdmlnYXRpb24sIHBhcnRpYWxseSByZXNldCBvdXIgd2hlZWwgdHJhY2tpbmcuXG5mdW5jdGlvbiBwb3N0TmF2aWdhdGUoZWxlbWVudCkge1xuICBlbGVtZW50LnRyYXZlbEZyYWN0aW9uID0gMDtcbiAgZWxlbWVudFt3aGVlbERpc3RhbmNlU3ltYm9sXSA9IDA7XG4gIGVsZW1lbnRbcG9zdE5hdmlnYXRlRGVsYXlDb21wbGV0ZVN5bWJvbF0gPSB0cnVlO1xuICBlbGVtZW50W2Fic29yYkRlY2VsZXJhdGlvblN5bWJvbF0gPSB0cnVlO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBlbGVtZW50W3Bvc3ROYXZpZ2F0ZURlbGF5Q29tcGxldGVTeW1ib2xdID0gZmFsc2U7XG4gIH0sIFBPU1RfTkFWSUdBVEVfVElNRSk7XG59XG5cbi8vIFJlc2V0IGFsbCBzdGF0ZSByZWxhdGVkIHRvIHRoZSB0cmFja2luZyBvZiB0aGUgd2hlZWwuXG5mdW5jdGlvbiByZXNldFdoZWVsVHJhY2tpbmcoZWxlbWVudCkge1xuICBlbGVtZW50LnRyYXZlbEZyYWN0aW9uID0gMDtcbiAgZWxlbWVudFt3aGVlbERpc3RhbmNlU3ltYm9sXSA9IDA7XG4gIGVsZW1lbnRbbGFzdERlbHRhWFN5bWJvbF0gPSAwO1xuICBlbGVtZW50W2Fic29yYkRlY2VsZXJhdGlvblN5bWJvbF0gPSBmYWxzZTtcbiAgZWxlbWVudFtwb3N0TmF2aWdhdGVEZWxheUNvbXBsZXRlU3ltYm9sXSA9IGZhbHNlO1xuICBpZiAoZWxlbWVudFtsYXN0V2hlZWxUaW1lb3V0U3ltYm9sXSkge1xuICAgIGNsZWFyVGltZW91dChlbGVtZW50W2xhc3RXaGVlbFRpbWVvdXRTeW1ib2xdKTtcbiAgICBlbGVtZW50W2xhc3RXaGVlbFRpbWVvdXRTeW1ib2xdID0gbnVsbDtcbiAgfVxufVxuXG4vLyBEZWZpbmUgb3VyIG93biBzaWduIGZ1bmN0aW9uLCBzaW5jZSAoYXMgb2YgTWF5IDIwMTUpLCBTYWZhcmkgYW5kIElFIGRvbid0XG4vLyBzdXBwbHkgTWF0aC5zaWduKCkuXG5mdW5jdGlvbiBzaWduKHgpIHtcbiAgcmV0dXJuICh4ID09PSAwKSA/XG4gICAgMCA6XG4gICAgKHggPiAwKSA/XG4gICAgICAxIDpcbiAgICAgIC0xO1xufVxuXG4vLyBUT0RPOiBEYW1waW5nLCBvciBzb21lIG90aGVyIHRyZWF0bWVudCBmb3IgZ29pbmcgcGFzdCB0aGUgZW5kcy5cblxuLypcbiAqIEEgd2hlZWwgZXZlbnQgaGFzIGJlZW4gZ2VuZXJhdGVkLiBUaGlzIGNvdWxkIGJlIGEgcmVhbCB3aGVlbCBldmVudCwgb3IgaXRcbiAqIGNvdWxkIGJlIGZha2UgKHNlZSBub3RlcyBpbiB0aGUgaGVhZGVyKS5cbiAqXG4gKiBUaGlzIGhhbmRsZXIgdXNlcyBzZXZlcmFsIHN0cmF0ZWdpZXMgdG8gdHJ5IHRvIGFwcHJveGltYXRlIG5hdGl2ZSB0cmFja3BhZFxuICogc3dpcGUgbmF2aWdhdGlvbi5cbiAqXG4gKiBJZiB0aGUgdXNlciBoYXMgZHJhZ2dlZCBlbm91Z2ggdG8gY2F1c2UgYSBuYXZpZ2F0aW9uLCB0aGVuIGZvciBhIHNob3J0XG4gKiBkZWxheSBmb2xsb3dpbmcgdGhhdCBuYXZpZ2F0aW9uLCBzdWJzZXF1ZW50IHdoZWVsIGV2ZW50cyB3aWxsIGJlIGlnbm9yZWQuXG4gKlxuICogRnVydGhlcm1vcmUsIGZvbGx3b3dpbmcgYSBuYXZpZ2F0aW9uLCB3ZSBpZ25vcmUgYWxsIHdoZWVsIGV2ZW50cyB1bnRpbCB3ZVxuICogcmVjZWl2ZSBhdCBsZWFzdCBvbmUgZXZlbnQgd2hlcmUgdGhlIGV2ZW50J3MgZGVsdGFYIChkaXN0YW5jZSB0cmF2ZWxlZCkgaXNcbiAqICpncmVhdGVyKiB0aGFuIHRoZSBwcmV2aW91cyBldmVudCdzIGRlbHRhWC4gVGhpcyBoZWxwcyB1cyBmaWx0ZXIgb3V0IHRoZVxuICogZmFrZSB3aGVlbCBldmVudHMgZ2VuZXJhdGVkIGJ5IHRoZSBicm93c2VyIHRvIHNpbXVsYXRlIGRlY2VsZXJhdGlvbi5cbiAqXG4gKi9cbmZ1bmN0aW9uIHdoZWVsKGVsZW1lbnQsIGV2ZW50KSB7XG5cbiAgLy8gU2luY2Ugd2UgaGF2ZSBhIG5ldyB3aGVlbCBldmVudCwgcmVzZXQgb3VyIHRpbWVyIHdhaXRpbmcgZm9yIHRoZSBsYXN0XG4gIC8vIHdoZWVsIGV2ZW50IHRvIHBhc3MuXG4gIGlmIChlbGVtZW50W2xhc3RXaGVlbFRpbWVvdXRTeW1ib2xdKSB7XG4gICAgY2xlYXJUaW1lb3V0KGVsZW1lbnRbbGFzdFdoZWVsVGltZW91dFN5bWJvbF0pO1xuICB9XG4gIGVsZW1lbnRbbGFzdFdoZWVsVGltZW91dFN5bWJvbF0gPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICB3aGVlbFRpbWVkT3V0KGVsZW1lbnQpO1xuICB9LCBXSEVFTF9USU1FKTtcblxuICBsZXQgZGVsdGFYID0gZXZlbnQuZGVsdGFYO1xuICBsZXQgZGVsdGFZID0gZXZlbnQuZGVsdGFZO1xuXG4gIC8vIFNlZSBpZiBlbGVtZW50IGV2ZW50IHJlcHJlc2VudHMgYWNjZWxlcmF0aW9uIG9yIGRlY2VsZXJhdGlvbi5cbiAgbGV0IGFjY2VsZXJhdGlvbiA9IHNpZ24oZGVsdGFYKSAqIChkZWx0YVggLSBlbGVtZW50W2xhc3REZWx0YVhTeW1ib2xdKTtcbiAgZWxlbWVudFtsYXN0RGVsdGFYU3ltYm9sXSA9IGRlbHRhWDtcbiAgLy8gY29uc29sZS5sb2coZGVsdGFYICsgXCIgXCIgKyBhY2NlbGVyYXRpb24gKyBcIiBcIiArIGVsZW1lbnRbYWJzb3JiRGVjZWxlcmF0aW9uU3ltYm9sXSArIFwiIFwiICsgZWxlbWVudFtwb3N0TmF2aWdhdGVEZWxheUNvbXBsZXRlU3ltYm9sXSk7XG5cbiAgaWYgKE1hdGguYWJzKGRlbHRhWCkgPCBNYXRoLmFicyhkZWx0YVkpKSB7XG4gICAgLy8gTW92ZSB3YXMgbW9zdGx5IHZlcnRpY2FsLiBUaGUgdXNlciBtYXkgYmUgdHJ5aW5nIHNjcm9sbCB3aXRoIHRoZVxuICAgIC8vIHRyYWNrcGFkL3doZWVsLiBUbyBiZSBvbiB0aGUgc2FmZSwgd2UgaWdub3JlIHN1Y2ggZXZlbnRzLlxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChlbGVtZW50W3Bvc3ROYXZpZ2F0ZURlbGF5Q29tcGxldGVTeW1ib2xdKSB7XG4gICAgLy8gSXQncyB0b28gc29vbiBhZnRlciBhIG5hdmlnYXRpb247IGlnbm9yZSB0aGUgZXZlbnQuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuXG4gIGlmIChhY2NlbGVyYXRpb24gPiAwKSB7XG4gICAgLy8gVGhlIGV2ZW50cyBhcmUgbm90IChvciBhcmUgbm8gbG9uZ2VyKSBkZWNlbGVyYXRpbmcsIHNvIHdlIGNhbiBzdGFydFxuICAgIC8vIHBheWluZyBhdHRlbnRpb24gdG8gdGhlbSBhZ2Fpbi5cbiAgICBlbGVtZW50W2Fic29yYkRlY2VsZXJhdGlvblN5bWJvbF0gPSBmYWxzZTtcbiAgfSBlbHNlIGlmIChlbGVtZW50W2Fic29yYkRlY2VsZXJhdGlvblN5bWJvbF0pIHtcbiAgICAvLyBUaGUgd2hlZWwgZXZlbnQgd2FzIGxpa2VseSBmYWtlZCB0byBzaW11bGF0ZSBkZWNlbGVyYXRpb247IGlnbm9yZSBpdC5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGVsZW1lbnRbd2hlZWxEaXN0YW5jZVN5bWJvbF0gKz0gZGVsdGFYO1xuXG4gIC8vIFVwZGF0ZSB0aGUgdHJhdmVsIGZyYWN0aW9uIG9mIHRoZSBlbGVtZW50IGJlaW5nIG5hdmlnYXRlZC5cbiAgbGV0IHdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgbGV0IHRyYXZlbEZyYWN0aW9uID0gd2lkdGggPiAwID9cbiAgICBlbGVtZW50W3doZWVsRGlzdGFuY2VTeW1ib2xdIC8gd2lkdGggOlxuICAgIDA7XG4gIGVsZW1lbnQuc2hvd1RyYW5zaXRpb24gPSBmYWxzZTtcbiAgdHJhdmVsRnJhY3Rpb24gPSBzaWduKHRyYXZlbEZyYWN0aW9uKSAqIE1hdGgubWluKE1hdGguYWJzKHRyYXZlbEZyYWN0aW9uKSwgMSk7XG4gIGVsZW1lbnQudHJhdmVsRnJhY3Rpb24gPSB0cmF2ZWxGcmFjdGlvbjtcblxuICAvLyBJZiB0aGUgdXNlciBoYXMgZHJhZ2dlZCBlbm91Z2ggdG8gcmVhY2ggdGhlIHByZXZpb3VzL25leHQgaXRlbSwgdGhlblxuICAvLyBjb21wbGV0ZSBhIG5hdmlnYXRpb24gdG8gdGhhdCBpdGVtLlxuICBpZiAodHJhdmVsRnJhY3Rpb24gPT09IDEpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcImdvUmlnaHRcIik7XG4gICAgZWxlbWVudC5zaG93VHJhbnNpdGlvbiA9IHRydWU7XG4gICAgZWxlbWVudC5nb1JpZ2h0KCk7XG4gICAgcG9zdE5hdmlnYXRlKGVsZW1lbnQpO1xuICB9IGVsc2UgaWYgKHRyYXZlbEZyYWN0aW9uID09PSAtMSkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiZ29MZWZ0XCIpO1xuICAgIGVsZW1lbnQuc2hvd1RyYW5zaXRpb24gPSB0cnVlO1xuICAgIGVsZW1lbnQuZ29MZWZ0KCk7XG4gICAgcG9zdE5hdmlnYXRlKGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8vIEEgc3VmZmljaWVudGx5IGxvbmcgcGVyaW9kIG9mIHRpbWUgaGFzIHBhc3NlZCBzaW5jZSB0aGUgbGFzdCB3aGVlbCBldmVudC5cbi8vIFdlIHNuYXAgdGhlIHNlbGVjdGlvbiB0byB0aGUgY2xvc2VzdCBpdGVtLCB0aGVuIHJlc2V0IG91ciBzdGF0ZS5cbmZ1bmN0aW9uIHdoZWVsVGltZWRPdXQoZWxlbWVudCkge1xuICAvLyBjb25zb2xlLmxvZyhcInRpbWVvdXRcIik7XG5cbiAgLy8gU25hcCB0byB0aGUgY2xvc2VzdCBpdGVtLlxuICBlbGVtZW50LnNob3dUcmFuc2l0aW9uID0gdHJ1ZTtcbiAgbGV0IHRyYXZlbEZyYWN0aW9uID0gZWxlbWVudC50cmF2ZWxGcmFjdGlvbjtcbiAgaWYgKHRyYXZlbEZyYWN0aW9uID49IDAuNSkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwic25hcCByaWdodFwiKTtcbiAgICBlbGVtZW50LmdvUmlnaHQoKTtcbiAgfSBlbHNlIGlmICh0cmF2ZWxGcmFjdGlvbiA8PSAtMC41KSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJzbmFwIGxlZnRcIik7XG4gICAgZWxlbWVudC5nb0xlZnQoKTtcbiAgfVxuXG4gIC8vIFRPRE86IExpc3RlbiBmb3IgdGhlIHRyYW5zaXRpb24gdG8gY29tcGxldGUsIGFuZCB0aGVuIHJlc3RvcmVcbiAgLy8gc2hvd1RyYW5zaXRpb24gdG8gZmFsc2UgKG9yIHRoZSBwcmV2aW91cyB2YWx1ZSkuXG5cbiAgcmVzZXRXaGVlbFRyYWNraW5nKGVsZW1lbnQpO1xufVxuIiwiLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gY3JlYXRlIGEgc3ltYm9sIHRoYXQgY2FuIGJlIHVzZWQgZm9yIGFzc29jaWF0aW5nIHByaXZhdGVcbiAqIGRhdGEgd2l0aCBhbiBlbGVtZW50LlxuICpcbiAqIE1peGlucyBhbmQgY29tcG9uZW50IGNsYXNzZXMgb2Z0ZW4gd2FudCB0byBhc3NvY2lhdGUgcHJpdmF0ZSBkYXRhIHdpdGggYW5cbiAqIGVsZW1lbnQgaW5zdGFuY2UsIGJ1dCBKYXZhU2NyaXB0IGRvZXMgbm90IGhhdmUgZGlyZWN0IHN1cHBvcnQgZm9yIHRydWVcbiAqIHByaXZhdGUgcHJvcGVydGllcy4gT25lIGFwcHJvYWNoIGlzIHRvIHVzZSB0aGVcbiAqIFtTeW1ib2xdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL1N5bWJvbClcbiAqIGRhdGEgdHlwZSB0byBzZXQgYW5kIHJldHJpZXZlIGRhdGEgb24gYW4gZWxlbWVudC5cbiAqXG4gKiBVbmZvcnR1bmF0ZWx5LCB0aGUgU3ltYm9sIHR5cGUgaXMgbm90IGF2YWlsYWJsZSBpbiBJbnRlcm5ldCBFeHBsb3JlciAxMS4gVGhlXG4gKiBgY3JlYXRlU3ltYm9sYCBoZWxwZXIgZnVuY3Rpb24gZXhpc3RzIGFzIGEgd29ya2Fyb3VuZCBmb3IgSUUgMTEuIFJhdGhlciB0aGFuXG4gKiByZXR1cm5pbmcgYSB0cnVlIFN5bWJvbCwgaXQgc2ltcGx5IHJldHVybnMgYW4gdW5kZXJzY29yZS1wcmVmaXhlZCBzdHJpbmcuXG4gKlxuICogVXNhZ2U6XG4gKlxuICogICAgIGNvbnN0IGZvb1N5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnZm9vJyk7XG4gKlxuICogICAgIGNsYXNzIE15RWxlbWVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAqICAgICAgIGdldCBmb28oKSB7XG4gKiAgICAgICAgIHJldHVybiB0aGlzW2Zvb1N5bWJvbF07XG4gKiAgICAgICB9XG4gKiAgICAgICBzZXQgZm9vKHZhbHVlKSB7XG4gKiAgICAgICAgIHRoaXNbZm9vU3ltYm9sXSA9IHZhbHVlO1xuICogICAgICAgfVxuICogICAgIH1cbiAqXG4gKiBJbiBJRSAxMSwgdGhpcyBzYW1wbGUgd2lsbCBcImhpZGVcIiBkYXRhIGJlaGluZCBhbiBpbnN0YW5jZSBwcm9wZXJ0eSB0aGlzLl9mb28uXG4gKiBUaGUgdXNlIG9mIHRoZSB1bmRlcnNjb3JlIGlzIG1lYW50IHRvIHJlZHVjZSAobm90IGVsaW1pbmF0ZSkgdGhlIHBvdGVudGlhbFxuICogZm9yIG5hbWUgY29uZmxpY3RzLCBhbmQgZGlzY291cmFnZSAobm90IHByZXZlbnQpIGV4dGVybmFsIGFjY2VzcyB0byB0aGlzXG4gKiBkYXRhLiBJbiBtb2Rlcm4gYnJvd3NlcnMsIHRoZSBhYm92ZSBjb2RlIHdpbGwgZWxpbWluYXRlIHRoZSBwb3RlbnRpYWwgb2ZcbiAqIG5hbWluZyBjb25mbGljdHMsIGFuZCBiZXR0ZXIgaGlkZSB0aGUgZGF0YSBiZWhpbmQgYSByZWFsIFN5bWJvbC5cbiAqXG4gKiBAZnVuY3Rpb24gY3JlYXRlU3ltYm9sXG4gKiBAcGFyYW0ge3N0cmluZ30gZGVzY3JpcHRpb24gLSBBIHN0cmluZyB0byBpZGVudGlmeSB0aGUgc3ltYm9sIHdoZW4gZGVidWdnaW5nXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVN5bWJvbChkZXNjcmlwdGlvbikge1xuICByZXR1cm4gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyA/XG4gICAgU3ltYm9sKGRlc2NyaXB0aW9uKSA6XG4gICAgYF8ke2Rlc2NyaXB0aW9ufWA7XG59XG4iLCIvKlxuICogTWljcm90YXNrIGhlbHBlciBmb3IgSUUgMTEuXG4gKlxuICogRXhlY3V0aW5nIGEgZnVuY3Rpb24gYXMgYSBtaWNyb3Rhc2sgaXMgdHJpdmlhbCBpbiBicm93c2VycyB0aGF0IHN1cHBvcnRcbiAqIHByb21pc2VzLCB3aG9zZSB0aGVuKCkgY2xhdXNlcyB1c2UgbWljcm90YXNrIHRpbWluZy4gSUUgMTEgZG9lc24ndCBzdXBwb3J0XG4gKiBwcm9taXNlcywgYnV0IGRvZXMgc3VwcG9ydCBNdXRhdGlvbk9ic2VydmVycywgd2hpY2ggYXJlIGFsc28gZXhlY3V0ZWQgYXNcbiAqIG1pY3JvdGFza3MuIFNvIHRoaXMgaGVscGVyIHVzZXMgYW4gTXV0YXRpb25PYnNlcnZlciB0byBhY2hpZXZlIG1pY3JvdGFza1xuICogdGltaW5nLlxuICpcbiAqIFNlZSBodHRwczovL2pha2VhcmNoaWJhbGQuY29tLzIwMTUvdGFza3MtbWljcm90YXNrcy1xdWV1ZXMtYW5kLXNjaGVkdWxlcy9cbiAqXG4gKiBJbnNwaXJlZCBieSBQb2x5bWVyJ3MgYXN5bmMoKSBmdW5jdGlvbi5cbiAqL1xuXG5cbi8vIFRoZSBxdWV1ZSBvZiBwZW5kaW5nIGNhbGxiYWNrcyB0byBiZSBleGVjdXRlZCBhcyBtaWNyb3Rhc2tzLlxubGV0IGNhbGxiYWNrcyA9IFtdO1xuXG4vLyBDcmVhdGUgYW4gZWxlbWVudCB0aGF0IHdlIHdpbGwgbW9kaWZ5IHRvIGZvcmNlIG9ic2VydmFibGUgbXV0YXRpb25zLlxubGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG5cbi8vIEEgbW9ub3RvbmljYWxseS1pbmNyZWFzaW5nIHZhbHVlLlxubGV0IGNvdW50ZXIgPSAwO1xuXG5cbi8qKlxuICogQWRkIGEgY2FsbGJhY2sgdG8gdGhlIG1pY3JvdGFzayBxdWV1ZS5cbiAqXG4gKiBUaGlzIHVzZXMgYSBNdXRhdGlvbk9ic2VydmVyIHNvIHRoYXQgaXQgd29ya3Mgb24gSUUgMTEuXG4gKlxuICogTk9URTogSUUgMTEgbWF5IGFjdHVhbGx5IHVzZSB0aW1lb3V0IHRpbWluZyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXJzLiBUaGlzXG4gKiBuZWVkcyBtb3JlIGludmVzdGlnYXRpb24uXG4gKlxuICogQGZ1bmN0aW9uIG1pY3JvdGFza1xuICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWljcm90YXNrKGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgLy8gRm9yY2UgYSBtdXRhdGlvbi5cbiAgZWxlbWVudC50ZXh0Q29udGVudCA9ICsrY291bnRlcjtcbn1cblxuXG4vLyBFeGVjdXRlIGFueSBwZW5kaW5nIGNhbGxiYWNrcy5cbmZ1bmN0aW9uIGV4ZWN1dGVDYWxsYmFja3MoKSB7XG4gIHdoaWxlIChjYWxsYmFja3MubGVuZ3RoID4gMCkge1xuICAgIGxldCBjYWxsYmFjayA9IGNhbGxiYWNrcy5zaGlmdCgpO1xuICAgIGNhbGxiYWNrKCk7XG4gIH1cbn1cblxuXG4vLyBDcmVhdGUgdGhlIG9ic2VydmVyLlxubGV0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZXhlY3V0ZUNhbGxiYWNrcyk7XG5vYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQsIHtcbiAgY2hhcmFjdGVyRGF0YTogdHJ1ZVxufSk7XG4iLCIvKipcbiAqIEhlbHBlciBmdW5jdGlvbiBmb3IgcmVuZGVyaW5nIGFuIGFycmF5IG9mIGl0ZW1zIGFzIGVsZW1lbnRzLlxuICpcbiAqIFRoaXMgaXMgbm90IGEgbWl4aW4sIGJ1dCBhIGZ1bmN0aW9uIGNvbXBvbmVudHMgY2FuIHVzZSBpZiB0aGV5IG5lZWQgdG9cbiAqIGdlbmVyYXRlIGEgc2V0IG9mIGVsZW1lbnRzIGZvciB0aGUgaXRlbXMgaW4gYW4gYXJyYXkuXG4gKlxuICogVGhpcyBmdW5jdGlvbiB3aWxsIHJldXNlIGV4aXN0aW5nIGVsZW1lbnRzIGlmIHBvc3NpYmxlLiBFLmcuLCBpZiBpdCBpcyBjYWxsZWRcbiAqIHRvIHJlbmRlciBhbiBhcnJheSBvZiA0IGl0ZW1zLCBhbmQgbGF0ZXIgY2FsbGVkIHRvIHJlbmRlciBhbiBhcnJheSBvZiA1XG4gKiBpdGVtcywgaXQgY2FuIHJldXNlIHRoZSBleGlzdGluZyA0IGl0ZW1zLCBjcmVhdGluZyBqdXN0IG9uZSBuZXcgZWxlbWVudC5cbiAqIE5vdGUsIGhvd2V2ZXIsIHRoYXQgdGhpcyByZS1yZW5kZXJpbmcgaXMgbm90IGF1dG9tYXRpYy4gSWYsIGFmdGVyIGNhbGxpbmdcbiAqIHRoaXMgZnVuY3Rpb24sIHlvdSBtYW5pcHVsYXRlIHRoZSBhcnJheSB5b3UgdXNlZCwgeW91IG11c3Qgc3RpbGwgY2FsbCB0aGlzXG4gKiBmdW5jdGlvbiBhZ2FpbiB0byByZS1yZW5kZXIgdGhlIGFycmF5LlxuICpcbiAqIFRoZSBgcmVuZGVySXRlbWAgcGFyYW1ldGVyIHRha2VzIGEgZnVuY3Rpb24gb2YgdHdvIGFyZ3VtZW50czogYW4gaXRlbSB0b1xuICogdG8gcmVuZGVyLCBhbmQgYW4gZXhpc3RpbmcgZWxlbWVudCAoaWYgb25lIGV4aXN0cykgd2hpY2ggY2FuIGJlIHJlcHVycG9zZWQgdG9cbiAqIHJlbmRlciB0aGF0IGl0ZW0uIElmIHRoZSBsYXR0ZXIgYXJndW1lbnQgaXMgbnVsbCwgdGhlIGByZW5kZXJJdGVtKClgIGZ1bmN0aW9uXG4gKiBzaG91bGQgY3JlYXRlIGEgbmV3IGVsZW1lbnQgYW5kIHJldHVybiBpdC4gVGhlIGZ1bmN0aW9uIHNob3VsZCBkbyB0aGUgc2FtZVxuICogaWYgdGhlIHN1cHBsaWVkIGV4aXN0aW5nIGVsZW1lbnQgaXMgbm90IHN1aXRhYmxlIGZvciByZW5kZXJpbmcgdGhlIGdpdmVuXG4gKiBpdGVtOyB0aGUgcmV0dXJuZWQgZWxlbWVudCB3aWxsIGJlIHVzZWQgdG8gcmVwbGFjZSB0aGUgZXhpc3Rpbmcgb25lLiBJZiB0aGVcbiAqIGV4aXN0aW5nIGVsZW1lbnQgKmlzKiBzdWl0YWJsZSwgdGhlIGZ1bmN0aW9uIGNhbiBzaW1wbHkgdXBkYXRlIGl0IGFuZCByZXR1cm5cbiAqIGl0IGFzIGlzLlxuICpcbiAqIEV4YW1wbGU6IFRoZSBmb2xsb3dpbmcgd2lsbCByZW5kZXIgYW4gYXJyYXkgb2Ygc3RyaW5ncyBpbiBkaXZzIGFzIGNoaWxkcmVuXG4gKiBvZiB0aGUgYGNvbnRhaW5lcmAgZWxlbWVudDpcbiAqXG4gKiAgICAgbGV0IHN0cmluZ3MgPSBbJ2EnLCAnYicsICdjJywgLi4uXTtcbiAqICAgICBsZXQgY29udGFpbmVyID0gdGhpcy5xdWVyeVNlbGVjdG9yKC4uLik7XG4gKiAgICAgcmVuZGVyQXJyYXlBc0VsZW1lbnRzKHN0cmluZ3MsIGNvbnRhaW5lciwgKHN0cmluZywgZWxlbWVudCkgPT4ge1xuICogICAgICAgaWYgKCFlbGVtZW50KSB7XG4gKiAgICAgICAgIC8vIE5vIGVsZW1lbnQgZXhpc3RzIHlldCwgc28gY3JlYXRlIGEgbmV3IG9uZS5cbiAqICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICogICAgICAgfVxuICogICAgICAgLy8gU2V0L3VwZGF0ZSB0aGUgdGV4dCBjb250ZW50IG9mIHRoZSBlbGVtZW50LlxuICogICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IHN0cmluZztcbiAqICAgICAgIHJldHVybiBlbGVtZW50O1xuICogICAgIH0pO1xuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGl0ZW1zIC0gdGhlIGl0ZW1zIHRvIHJlbmRlclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGFpbmVyIC0gdGhlIHBhcmVudCB0aGF0IHdpbGwgaG9sZCB0aGUgZWxlbWVudHNcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHJlbmRlckl0ZW0gLSByZXR1cm5zIGEgbmV3IGVsZW1lbnQgZm9yIGFuIGl0ZW0sIG9yXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwdXJwb3NlcyBhbiBleGlzdGluZyBlbGVtZW50IGZvciBhbiBpdGVtXG4gKi9cbmZ1bmN0aW9uIHJlbmRlckFycmF5QXNFbGVtZW50cyhpdGVtcywgY29udGFpbmVyLCByZW5kZXJJdGVtKSB7XG4gIC8vIENyZWF0ZSBhIG5ldyBzZXQgb2YgZWxlbWVudHMgZm9yIHRoZSBjdXJyZW50IGl0ZW1zLlxuICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIGxldCBvbGRFbGVtZW50ID0gY29udGFpbmVyLmNoaWxkTm9kZXNbaW5kZXhdO1xuICAgIGxldCBuZXdFbGVtZW50ID0gcmVuZGVySXRlbShpdGVtLCBvbGRFbGVtZW50KTtcbiAgICBpZiAobmV3RWxlbWVudCkge1xuICAgICAgaWYgKCFvbGRFbGVtZW50KSB7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdFbGVtZW50KTtcbiAgICAgIH0gZWxzZSBpZiAobmV3RWxlbWVudCAhPT0gb2xkRWxlbWVudCkge1xuICAgICAgICBjb250YWluZXIucmVwbGFjZUNoaWxkKG5ld0VsZW1lbnQsIG9sZEVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgLy8gSWYgdGhlIGFycmF5IHNocmFuaywgcmVtb3ZlIHRoZSBleHRyYSBlbGVtZW50cyB3aGljaCBhcmUgbm8gbG9uZ2VyIG5lZWRlZC5cbiAgd2hpbGUgKGNvbnRhaW5lci5jaGlsZE5vZGVzLmxlbmd0aCA+IGl0ZW1zLmxlbmd0aCkge1xuICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIuY2hpbGROb2Rlc1tpdGVtcy5sZW5ndGhdKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJBcnJheUFzRWxlbWVudHM7XG4iLCIvKipcbiAqIEhlbHBlciBmdW5jdGlvbiBmb3Igc3RhbmRhcmQgY2xhc3NMaXN0LnRvZ2dsZSgpIGJlaGF2aW9yIG9uIG9sZCBicm93c2VycyxcbiAqIG5hbWVseSBJRSAxMS5cbiAqXG4gKiBUaGUgc3RhbmRhcmRcbiAqIFtjbGFzc2xpc3RdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9FbGVtZW50L2NsYXNzTGlzdClcbiAqIG9iamVjdCBoYXMgYSBgdG9nZ2xlKClgIGZ1bmN0aW9uIHRoYXQgc3VwcG9ydHMgYSBzZWNvbmQgQm9vbGVhbiBwYXJhbWV0ZXJcbiAqIHRoYXQgY2FuIGJlIHVzZWQgdG8gc3VjY2luY3RseSB0dXJuIGEgY2xhc3Mgb24gb3Igb2ZmLiBUaGlzIGZlYXR1cmUgaXMgb2Z0ZW5cbiAqIHVzZWZ1bCBpbiBkZXNpZ25pbmcgY3VzdG9tIGVsZW1lbnRzLCB3aGljaCBtYXkgd2FudCB0byBleHRlcm5hbGx5IHJlZmxlY3RcbiAqIGNvbXBvbmVudCBzdGF0ZSBpbiBhIENTUyBjbGFzcyB0aGF0IGNhbiBiZSB1c2VkIGZvciBzdHlsaW5nIHB1cnBvc2VzLlxuICpcbiAqIFVuZm9ydHVuYXRlbHksIElFIDExIGRvZXMgbm90IHN1cHBvcnQgdGhlIEJvb2xlYW4gcGFyYW1ldGVyIHRvXG4gKiBgY2xhc3NMaXN0LnRvZ2dsZSgpYC4gVGhpcyBoZWxwZXIgZnVuY3Rpb24gYmVoYXZlcyBsaWtlIHRoZSBzdGFuZGFyZFxuICogYHRvZ2dsZSgpYCwgaW5jbHVkaW5nIHN1cHBvcnQgZm9yIHRoZSBCb29sZWFuIHBhcmFtZXRlciwgc28gdGhhdCBpdCBjYW4gYmVcbiAqIHVzZWQgZXZlbiBvbiBJRSAxMS5cbiAqXG4gKiBAZnVuY3Rpb24gdG9nZ2xlQ2xhc3NcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBUaGUgZWxlbWVudCB0byBtb2RpZnlcbiAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgLSBUaGUgY2xhc3MgdG8gYWRkL3JlbW92ZVxuICogQHBhcmFtIHtib29sZWFufSBbZm9yY2VdIC0gRm9yY2UgdGhlIGNsYXNzIHRvIGJlIGFkZGVkIChpZiB0cnVlKSBvciByZW1vdmVkXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaWYgZmFsc2UpXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvZ2dsZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSwgZm9yY2UpIHtcbiAgbGV0IGNsYXNzTGlzdCA9IGVsZW1lbnQuY2xhc3NMaXN0O1xuICBsZXQgYWRkQ2xhc3MgPSAodHlwZW9mIGZvcmNlID09PSAndW5kZWZpbmVkJykgP1xuICAgICFjbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSA6XG4gICAgZm9yY2U7XG4gIGlmIChhZGRDbGFzcykge1xuICAgIGNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgfSBlbHNlIHtcbiAgICBjbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gIH1cbiAgcmV0dXJuIGFkZENsYXNzO1xufVxuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9jcmVhdGVTeW1ib2wnO1xuaW1wb3J0IFdyYXBwZWRTdGFuZGFyZEVsZW1lbnQgZnJvbSAnLi4vLi4vYmFzaWMtd3JhcHBlZC1zdGFuZGFyZC1lbGVtZW50L3NyYy9XcmFwcGVkU3RhbmRhcmRFbGVtZW50JztcbmltcG9ydCB0b2dnbGVDbGFzcyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy90b2dnbGVDbGFzcyc7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IGFyZWFMaW5rU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdhcmVhTGluaycpO1xuXG5cbi8qKlxuICogQW4gYW5jaG9yIChsaW5rKSB0aGF0IGhpZ2hsaWdodHMgaXRzZWxmIHdoZW4gaXRzIGRlc3RpbmF0aW9uIG1hdGNoZXMgdGhlXG4gKiBjdXJyZW50IGxvY2F0aW9uLlxuICpcbiAqIFtMaXZlIGRlbW9dKGh0dHA6Ly9iYXNpY3dlYmNvbXBvbmVudHMub3JnL2Jhc2ljLXdlYi1jb21wb25lbnRzL3BhY2thZ2VzL2Jhc2ljLWN1cnJlbnQtYW5jaG9yLylcbiAqXG4gKiBTdWNoIGEgbGluayBjb21tb25seSBhcHBlYXJzIGluIHRvb2xiYXJzLCBzaWRlIGJhcnMsIGFuZCBvdGhlciBuYXZpZ2F0aW9uXG4gKiBlbGVtZW50cy4gSW4gdGhlc2Ugc2l0dWF0aW9ucywgeW91IGdlbmVyYWxseSB3YW50IHRoZSB1c2VyIHRvIHVuZGVyc3RhbmQgd2hhdFxuICogcGFnZSBvciBhcmVhIHRoZSB1c2VyIGlzIGFscmVhZHkgb24uXG4gKlxuICogV2hlbiB0aGUgbGluayBpcyBjdXJyZW50IOKAlCB3aGVuIGl0IHBvaW50cyB0byB0aGUgY3VycmVudCBsb2NhdGlvbiDigJQgdGhlXG4gKiBsaW5rIHdpbGwgaGF2ZSB0aGUgQ1NTIGBjdXJyZW50YCBjbGFzcyBhcHBsaWVkIHRvIGl0LCBhbmQgaXRzIGBjdXJyZW50YFxuICogcHJvcGVydHkgd2lsbCBiZSB0cnVlLlxuICpcbiAqIE5vdGU6IG9uZSBsaW1pdGF0aW9uIG9mIHRoaXMgY29tcG9uZW50IGlzIHRoYXQsIGJ5IGRlZmF1bHQsIHRoZSBsaW5rIGRvZXNcbiAqICpub3QqIHNob3cgdGhlIHN0YW5kYXJkIGxpbmsgY29sb3IgKHVzdWFsbHkgYmx1ZSkgYW5kIHRleHQgZGVjb3JhdGlvblxuICogKHVuZGVybGluZSkuIEhvd2V2ZXIsIGluIG5hdmlnYXRpb24gZWxlbWVudHMgbGlrZSB0b29sYmFycywgeW91IG9mdGVuIHdpbGxcbiAqIHdhbnQgdG8gZXhwbGljaXRseSBzcGVjaWZpYyBsaW5rIGNvbG9ycyBhbnl3YXksIGUuZy4sIHRvIHJlZmxlY3QgeW91clxuICogYXBwbGljYXRpb24ncyB2aXN1YWwgc3R5bGUgYW5kIGJyYW5kLlxuICovXG5jbGFzcyBDdXJyZW50QW5jaG9yIGV4dGVuZHMgV3JhcHBlZFN0YW5kYXJkRWxlbWVudC53cmFwKCdhJykge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCBldmVudCA9PiB7XG4gICAgICByZWZyZXNoKHRoaXMpO1xuICAgIH0pO1xuXG4gICAgLy8gU3R1cGlkIEVkZ2UvSUUgXCJzdXBwb3J0XCIgcG9wc3RhdGUsIGJ1dCBkb24ndCBmaXJlIGl0IG9uIGhhc2hjaGFuZ2UuXG4gICAgLy8gU28gd2UgaGF2ZSB0byBsaXN0ZW4gZm9yIGhhc2hjaGFuZ2UgYXMgd2VsbCwgd2l0aCB0aGUgcmVzdWx0IHRoYXQgYVxuICAgIC8vIHN0YW5kYXJkcy1jb21wbGlhbnQgYnJvd3NlciBtYXkgZW5kIHVwIHJlZnJlc2hpbmcgdGhlIGxpbmsgdHdpY2UuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCBldmVudCA9PiB7XG4gICAgICByZWZyZXNoKHRoaXMpO1xuICAgIH0pO1xuXG4gICAgLy8gU2V0IGRlZmF1bHRzLlxuICAgIGlmICh0eXBlb2YgdGhpcy5hcmVhTGluayA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuYXJlYUxpbmsgPSB0aGlzLmRlZmF1bHRzLmFyZWFMaW5rO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUcnVlIGlmIHRoZSBsaW5rIHBvaW50cyB0byBhbiBhcmVhIHdpdGhpbiBhIHNpdGUsIG5vdCBqdXN0IGEgc2luZ2xlIHBhZ2UuXG4gICAqXG4gICAqIElmIHRydWUsIHRoZSBtYXRjaGluZyBydWxlIHRvIGRldGVybWluZSB3aGV0aGVyIHRoZSBsaW5rIGlzIGN1cnJlbnQgY2hhbmdlczpcbiAgICogYW4gYXJlYSBsaW5rIGlzIGNvbnNpZGVyZWQgdG8gYmUgY3VycmVudCBpZiB0aGUgbGluaydzIGRlc3RpbmF0aW9uIGZvcm1zIGFcbiAgICogcHJlZml4IG9mIHRoZSBjdXJyZW50IGxvY2F0aW9uIChpbnN0ZWFkIG9mIG1hdGNoaW5nIHRoZSBjb21wbGV0ZSBVUkwpLlxuICAgKlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIGdldCBhcmVhTGluaygpIHtcbiAgICByZXR1cm4gdGhpc1thcmVhTGlua1N5bWJvbF07XG4gIH1cbiAgc2V0IGFyZWFMaW5rKHZhbHVlKSB7XG4gICAgLy8gQ2FzdCBib29sZWFuIG9yIHN0cmluZyB2YWx1ZXMgdG8gYm9vbGVhbi5cbiAgICB0aGlzW2FyZWFMaW5rU3ltYm9sXSA9IChTdHJpbmcodmFsdWUpID09PSAndHJ1ZScpO1xuICAgIHJlZnJlc2godGhpcyk7XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBpZiAoc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2spIHsgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTsgfVxuICAgIHJlZnJlc2godGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogVHJ1ZSBpZiB0aGUgbGluaydzIGRlc3RpbmF0aW9uIG1hdGNoZXMgdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAgICpcbiAgICogSWYgdGhpcyBpcyB0cnVlLCB0aGUgZWxlbWVudCB3aWxsIGhhdmUgYW4gYGN1cnJlbnRgIENTUyBjbGFzcyBhcHBsaWVkIHRvIGl0LlxuICAgKlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIGdldCBjdXJyZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNsYXNzTGlzdC5jb250YWlucygnY3VycmVudCcpO1xuICB9XG4gIHNldCBjdXJyZW50KHZhbHVlKSB7XG4gICAgdG9nZ2xlQ2xhc3ModGhpcywgJ2N1cnJlbnQnLCB2YWx1ZSk7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY3VycmVudC1jaGFuZ2VkJykpO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRzKCkge1xuICAgIGxldCBkZWZhdWx0cyA9IHN1cGVyLmRlZmF1bHRzIHx8IHt9O1xuICAgIGRlZmF1bHRzLmFyZWFMaW5rID0gZmFsc2U7XG4gICAgcmV0dXJuIGRlZmF1bHRzO1xuICB9XG5cbiAgLy8gQXVnbWVudCBocmVmIGltcGxlbWVudGF0aW9uIHNvIHRoYXQgY2hhbmdpbmcgaHJlZiBjaGVja3MgdGhlIGFjdGl2ZSBzdGF0dXMuXG4gIGdldCBocmVmKCkge1xuICAgIHJldHVybiBzdXBlci5ocmVmO1xuICB9XG4gIHNldCBocmVmKHZhbHVlKSB7XG4gICAgc3VwZXIuaHJlZiA9IHZhbHVlO1xuICAgIHJlZnJlc2godGhpcyk7XG4gIH1cblxuICBnZXQgdGVtcGxhdGUoKSB7XG4gICAgLy8gUmVzZXQgc3R5bGVzIHNvIHRoYXQgY29sb3IgY2FuIGJlIHNwZWNpZmllZCBmcm9tIHRoZSBvdXRzaWRlIHdpdGhvdXRcbiAgICAvLyBoYXZpbmcgdG8gZGVmaW5lIGEgQ1NTIHZhcmlhYmxlLlxuICAgIHJldHVybiBgXG4gICAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIH1cblxuICAgICAgI2lubmVyIHtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xuICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxhIGlkPVwiaW5uZXJcIj48c2xvdD48L3Nsb3Q+PC9hPmA7XG4gIH1cblxufVxuXG5cbi8vIFVwZGF0ZSB0aGUgY3VycmVudCBzdGF0dXMgb2YgdGhlIGVsZW1lbnQgYmFzZWQgb24gdGhlIGN1cnJlbnQgbG9jYXRpb24uXG5mdW5jdGlvbiByZWZyZXNoKGVsZW1lbnQpIHtcbiAgbGV0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICBsZXQgbWF0Y2g7XG4gIGlmIChlbGVtZW50LmFyZWFMaW5rKSB7XG4gICAgLy8gTWF0Y2ggcHJlZml4XG4gICAgbGV0IHByZWZpeCA9IGVsZW1lbnQuaHJlZjtcbiAgICAvLyBJZiBwcmVmaXggZG9lc24ndCBlbmQgaW4gc2xhc2gsIGFkZCBhIHNsYXNoLlxuICAgIC8vIFdlIHdhbnQgdG8gYXZvaWQgbWF0Y2hpbmcgaW4gdGhlIG1pZGRsZSBvZiBhIGZvbGRlciBuYW1lLlxuICAgIGlmIChwcmVmaXgubGVuZ3RoIDwgdXJsLmxlbmd0aCAmJiBwcmVmaXguc3Vic3RyKC0xKSAhPT0gJy8nKSB7XG4gICAgICBwcmVmaXggKz0gJy8nO1xuICAgIH1cbiAgICBtYXRjaCA9ICh1cmwuc3Vic3RyKDAsIHByZWZpeC5sZW5ndGgpID09PSBwcmVmaXgpO1xuICB9IGVsc2Uge1xuICAgIC8vIE1hdGNoIHdob2xlIHBhdGhcbiAgICBtYXRjaCA9ICh1cmwgPT09IGVsZW1lbnQuaHJlZik7XG4gIH1cbiAgZWxlbWVudC5jdXJyZW50ID0gbWF0Y2g7XG59XG5cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdiYXNpYy1jdXJyZW50LWFuY2hvcicsIEN1cnJlbnRBbmNob3IpO1xuIiwiaW1wb3J0IENvbXBvc2FibGUgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ29tcG9zYWJsZSc7XG5pbXBvcnQgU2hhZG93VGVtcGxhdGUgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2hhZG93VGVtcGxhdGUnO1xuaW1wb3J0IFNoYWRvd0VsZW1lbnRSZWZlcmVuY2VzIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NoYWRvd0VsZW1lbnRSZWZlcmVuY2VzJztcbmltcG9ydCBBdHRyaWJ1dGVNYXJzaGFsbGluZyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9BdHRyaWJ1dGVNYXJzaGFsbGluZyc7XG5pbXBvcnQgRGlzdHJpYnV0ZWRDaGlsZHJlbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXN0cmlidXRlZENoaWxkcmVuJztcblxuXG4vKipcbiAqIEEgc2FtcGxlIGdlbmVyYWwtcHVycG9zZSBiYXNlIGNsYXNzIGZvciBkZWZpbmluZyBjdXN0b20gZWxlbWVudHMgdGhhdCBtaXhlc1xuICogaW4gc29tZSBjb21tb24gZmVhdHVyZXM6IHRlbXBsYXRlIHN0YW1waW5nIGludG8gYSBzaGFkb3cgcm9vdCwgc2hhZG93IGVsZW1lbnRcbiAqIHJlZmVyZW5jZXMsIG1hcnNoYWxsaW5nIGF0dHJpYnV0ZXMgdG8gcHJvcGVydGllcywgYW5kIHJldHJpZXZpbmcgdGhlIGNoaWxkcmVuXG4gKiBkaXN0cmlidXRlZCB0byBhIGNvbXBvbmVudC5cbiAqXG4gKiBUaGlzIGJhc2UgY2xhc3MgaXMgbm90IHNwZWNpYWwgaW4gYW55IHdheSwgYW5kIGlzIGRlZmluZWQgb25seSBhcyBhXG4gKiBjb252ZW5pZW50IHNob3J0aGFuZCBmb3IgYXBwbHlpbmcgdGhlIG1peGlucyBsaXN0ZWQgYWJvdmUuIFlvdSBjYW4gdXNlIHRoaXNcbiAqIGNsYXNzIGFzIGEgYmFzZSBjbGFzcyBmb3IgeW91ciBvd24gZWxlbWVudHMsIG9yIGVhc2lseSBjcmVhdGUgeW91ciBvd24gYmFzZVxuICogY2xhc3MgYnkgYXBwbHlpbmcgdGhlIHNhbWUgc2V0IG9mIG1peGlucy5cbiAqXG4gKiBUaGUgRWxlbWVudEJhc2UgYmFzZSBjbGFzcyBkb2VzIG5vdCByZWdpc3RlciBpdHNlbGYgYXMgYSBjdXN0b20gZWxlbWVudCB3aXRoXG4gKiB0aGUgYnJvd3NlciwgYW5kIGhlbmNlIGNhbm5vdCBiZSBpbmRlcGVuZGVudGx5IGluc3RhbnRpYXRlZC5cbiAqXG4gKiBAbWl4ZXMgQXR0cmlidXRlTWFyc2hhbGxpbmcgXG4gKiBAbWl4ZXMgQ29tcG9zYWJsZVxuICogQG1peGVzIERpc3RyaWJ1dGVkQ2hpbGRyZW5cbiAqIEBtaXhlcyBTaGFkb3dFbGVtZW50UmVmZXJlbmNlc1xuICogQG1peGVzIFNoYWRvd1RlbXBsYXRlXG4gKi9cbmNsYXNzIEVsZW1lbnRCYXNlIGV4dGVuZHMgQ29tcG9zYWJsZShIVE1MRWxlbWVudCkuY29tcG9zZShcbiAgU2hhZG93VGVtcGxhdGUsICAgICAgICAgIC8vIGJlZm9yZSBub2RlIGZpbmRpbmcsIHNvIHNoYWRvdyByb290IGlzIHBvcHVsYXRlZFxuICBTaGFkb3dFbGVtZW50UmVmZXJlbmNlcywgLy8gYmVmb3JlIG1hcnNoYWxsaW5nLCBzbyBwcm9wZXJ0aWVzIGNhbiB1c2UgcmVmc1xuICBBdHRyaWJ1dGVNYXJzaGFsbGluZyxcbiAgRGlzdHJpYnV0ZWRDaGlsZHJlblxuKSB7XG5cbiAgLypcbiAgICogRGVidWdnaW5nIHV0aWxpdHk6IGxvZ3MgYSBtZXNzYWdlLCBwcmVmaXhlZCBieSB0aGUgY29tcG9uZW50J3MgdGFnLlxuICAgKi9cbiAgbG9nKHRleHQpIHtcbiAgICBpZiAoc3VwZXIubG9nKSB7IHN1cGVyLmxvZyh0ZXh0KTsgfVxuICAgIGNvbnNvbGUubG9nKGAke3RoaXMubG9jYWxOYW1lfTogJHt0ZXh0fWApO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWxlbWVudEJhc2U7XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL2NyZWF0ZVN5bWJvbCc7XG5pbXBvcnQgRWxlbWVudEJhc2UgZnJvbSAnLi4vLi4vYmFzaWMtZWxlbWVudC1iYXNlL3NyYy9FbGVtZW50QmFzZSc7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IGZhZGVDb2xvclN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnZmFkZUNvbG9yJyk7XG5cblxuLyoqXG4gKiBGYWRlcyBvdXQgY29udGVudCB0aGF0IG92ZXJmbG93cyBzbyB0aGUgdXNlciBrbm93cyB0aGVyZSdzIG1vcmUuXG4gKlxuICogVGhpcyBjb21wb25lbnQgZG9lc24ndCBoYW5kbGUgaW50ZXJhY3Rpdml0eS5cbiAqXG4gKiBUaGUgY29tcG9uZW50IG5lZWRzIHRvIGtub3cgdGhlIGNvbG9yIGl0IHNob3VsZCBmYWRlIHRvLCB3aGljaCBpdCB0cmllcyB0b1xuICogaW5mZXIgZnJvbSB0aGUgYmFja2dyb3VuZCBjb2xvci4gSW4gc29tZSBzaXR1YXRpb25zLCB0aGlzIG1heSBub3Qgd29yaywgaW5cbiAqIHdoaWNoIGNhc2UgeW91IGNhbiBleHBsaWNpdGx5IHNldCB0aGUgZmFkZUNvbG9yIGF0dHJpYnV0ZS5cbiAqXG4gKiBUaGUgY29tcG9uZW50IGN1cnJlbnRseSBhbHdheXMgZGlzcGxheXMgdGhlIGZhZGUsIGV2ZW4gaWYgdGhlIGNvbXBvbmVudCdzXG4gKiBjb250ZW50IGlzIHNob3J0IGVub3VnaCB0byBmaXQgY29tcGxldGVseSBpbiB2aWV3LlxuICpcbiAqIEBleHRlbmRzIEVsZW1lbnRCYXNlXG4gKi9cbmNsYXNzIEZhZGVPdmVyZmxvdyBleHRlbmRzIEVsZW1lbnRCYXNlIHtcblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBpZiAoc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2spIHsgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTsgfVxuICAgIGlmICh0aGlzLmZhZGVDb2xvciA9PSBudWxsKSB7XG4gICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhlIGNvbG9yIG9mIHRoZSBmYWRlLlxuICAgKlxuICAgKiBUaGUgZmFkZSBjb2xvciBzaG91bGQgbWF0Y2ggdGhlIGJhY2tncm91bmQgY29sb3IuIFRoZSBjb21wb25lbnQgZG9lcyBpdHNcbiAgICogYmVzdCB0byBpbmZlciB0aGUgYmFja2dyb3VuZCBjb2xvciwgYnV0IGluIHNvbWUgc2l0dWF0aW9ucywgdGhhdCBtYXkgbm90XG4gICAqIHdvcmsuIEluIHRob3NlIGNhc2VzLCB5b3UgY2FuIG1hbnVhbGx5IGlkZW50aWZ5IHRoZSBiYWNrZ3JvdW5kIGNvbG9yLlxuICAgKiBUaGlzIHNob3VsZCBiZSBhIHNvbGlkIGNvbG9yLlxuICAgKlxuICAgKiBAYXR0cmlidXRlIGZhZGVDb2xvclxuICAgKiBAZGVmYXVsdCB3aGl0ZVxuICAgKi9cbiAgZ2V0IGZhZGVDb2xvcigpIHtcbiAgICByZXR1cm4gdGhpc1tmYWRlQ29sb3JTeW1ib2xdO1xuICB9XG4gIHNldCBmYWRlQ29sb3IodmFsdWUpIHtcbiAgICB0aGlzW2ZhZGVDb2xvclN5bWJvbF0gPSB2YWx1ZTtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGxldCByZ2IgPSBleHRyYWN0UmdiVmFsdWVzKHZhbHVlKTtcbiAgICAgIGlmIChyZ2IpIHtcbiAgICAgICAgbGV0IGZhZGVDb2xvclRyYW5zcGFyZW50ID0gYHJnYmEoJHtyZ2Iucn0sJHtyZ2IuZ30sJHtyZ2IuYn0sMClgO1xuICAgICAgICBsZXQgZ3JhZGllbnQgPSBgbGluZWFyLWdyYWRpZW50KCR7ZmFkZUNvbG9yVHJhbnNwYXJlbnR9IDAlLCAke3ZhbHVlfSAxMDAlKWA7XG4gICAgICAgIHRoaXMuJC5mYWRlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGdyYWRpZW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJbmZlciB0aGUgZmFkZSBjb2xvciBmcm9tIGJhY2tncm91bmQgY29sb3IuIElmIHlvdSBoYXZlIHByb2dyYW1tYXRpY2FsbHlcbiAgICogY2hhbmdlZCB0aGUgY29sb3IgYmVoaW5kIHRoZSBjb21wb25lbnQsIHlvdSBjYW4gaW52b2tlIHRoaXMgbWV0aG9kIHRvIGhhdmVcbiAgICogdGhlIGNvbXBvbmVudCB0cnkgdG8gcGljayB1cCB0aGUgbmV3IGJhY2tncm91bmQgY29sb3IuXG4gICAqL1xuICByZWZyZXNoKCkge1xuICAgIC8vIFRPRE86IEF1dG9tYXRpY2FsbHkgaGlkZSB0aGUgZmFkZSBpZiBhbGwgdGhlIGNvbnRlbnQgY2FuIGJlIHNlZW4uXG4gICAgdGhpcy5mYWRlQ29sb3IgPSBmaW5kQmFja2dyb3VuZENvbG9yKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRydWUgaWYgdGhlIGNvbXBvbmVudCBzaG91bGQgc2hvdyB0aGUgZmFkZSB0byB0aGUgYmFja2dyb3VuZCBjb2xvci5cbiAgICpcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBkZWZhdWx0IHRydWVcbiAgICovXG4gIGdldCBzaG93RmFkZSgpIHtcbiAgICByZXR1cm4gdGhpcy4kLmZhZGUuc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnO1xuICB9XG4gIHNldCBzaG93RmFkZSh2YWx1ZSkge1xuICAgIHRoaXMuJC5mYWRlLnN0eWxlLmRpc3BsYXkgPSB2YWx1ZSA/ICcnIDogJ25vbmUnO1xuICB9XG5cbiAgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBgXG4gICAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG5cbiAgICAgICNmYWRlIHtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBoZWlnaHQ6IDNlbTtcbiAgICAgICAgbWF4LWhlaWdodDogNTAlO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgLyogTGV0cyB1c2VyIGludGVyYWN0IHdpdGggY29udGVudCB0aHJvdWdoIHRoZSBmYWRlLiAqL1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBpZD1cImZhZGVcIj48L2Rpdj5cbiAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICBgO1xuICB9XG5cbn1cblxuXG4vLyBSZXR1cm4gdGhlIGJhY2tncm91bmQgY29sb3Igb2YgdGhlIGdpdmVuIGVsZW1lbnQuIElmIHRoZSBjb2xvciBpc1xuLy8gXCJ0cmFuc3BhcmVudFwiICh0aGUgZGVmYXVsdCBpbiBNb3ppbGxhIGFuZCBJRSkgb3IgXCJyZ2JhKDAsIDAsIDAsIDApXCIgKHRoZVxuLy8gZGVmYXVsdCB0cmFuc3BhcmVudCB2YWx1ZSBpbiBCbGluayBhbmQgV2Via2l0KSwgd2FsayB1cCB0aGUgcGFyZW50IGNoYWluXG4vLyB1bnRpbCBhIG5vbi10cmFuc3BhcmVudCBjb2xvciBpcyBmb3VuZC5cbmZ1bmN0aW9uIGZpbmRCYWNrZ3JvdW5kQ29sb3IoZWxlbWVudCkge1xuICBpZiAoZWxlbWVudCA9PSBudWxsIHx8IHR5cGVvZiBlbGVtZW50LnN0eWxlID09PSAndW5kZWZpbmVkJykge1xuICAgIC8vIFRoaXMgZWxlbWVudCBoYXMgbm8gYmFja2dyb3VuZCwgYXNzdW1lIHdoaXRlLlxuICAgIHJldHVybiAncmdiKDI1NSwyNTUsMjU1KSc7XG4gIH1cbiAgbGV0IGJhY2tncm91bmRDb2xvciA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuYmFja2dyb3VuZENvbG9yO1xuICBpZiAoYmFja2dyb3VuZENvbG9yID09PSAndHJhbnNwYXJlbnQnIHx8IGJhY2tncm91bmRDb2xvciA9PT0gJ3JnYmEoMCwgMCwgMCwgMCknKSB7XG4gICAgcmV0dXJuIGZpbmRCYWNrZ3JvdW5kQ29sb3IoZWxlbWVudC5wYXJlbnROb2RlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYmFja2dyb3VuZENvbG9yO1xuICB9XG59XG5cblxuLy8gUmV0dXJuIHRoZSBpbmRpdmlkdWFsIFJHQiB2YWx1ZXMgZnJvbSBhIENTUyBjb2xvciBzdHJpbmcuXG5mdW5jdGlvbiBleHRyYWN0UmdiVmFsdWVzKHJnYlN0cmluZykge1xuICBsZXQgcmdiUmVnZXggPSAvcmdiYT9cXChcXHMqKFxcZCspXFxzKixcXHMqKFxcZCspXFxzKixcXHMqKFxcZCspXFxzKig/OixcXHMqW1xcZFxcLl0rXFxzKik/XFwpLztcbiAgbGV0IG1hdGNoID0gcmdiUmVnZXguZXhlYyhyZ2JTdHJpbmcpO1xuICBpZiAobWF0Y2gpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcjogcGFyc2VJbnQobWF0Y2hbMV0pLFxuICAgICAgZzogcGFyc2VJbnQobWF0Y2hbMl0pLFxuICAgICAgYjogcGFyc2VJbnQobWF0Y2hbM10pXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYmFzaWMtZmFkZS1vdmVyZmxvdycsIEZhZGVPdmVyZmxvdyk7XG5leHBvcnQgZGVmYXVsdCBGYWRlT3ZlcmZsb3c7XG4iLCJpbXBvcnQgRWxlbWVudEJhc2UgZnJvbSAnLi4vLi4vYmFzaWMtZWxlbWVudC1iYXNlL3NyYy9FbGVtZW50QmFzZSc7XG5pbXBvcnQgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50JztcbmltcG9ydCBDbGlja1NlbGVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9DbGlja1NlbGVjdGlvbic7XG5pbXBvcnQgQ29udGVudEFzSXRlbXMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ29udGVudEFzSXRlbXMnO1xuaW1wb3J0IERpcmVjdGlvblNlbGVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXJlY3Rpb25TZWxlY3Rpb24nO1xuaW1wb3J0IEdlbmVyaWMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvR2VuZXJpYyc7XG5pbXBvcnQgS2V5Ym9hcmQgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvS2V5Ym9hcmQnO1xuaW1wb3J0IEtleWJvYXJkRGlyZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0tleWJvYXJkRGlyZWN0aW9uJztcbmltcG9ydCBLZXlib2FyZFBhZ2VkU2VsZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0tleWJvYXJkUGFnZWRTZWxlY3Rpb24nO1xuaW1wb3J0IEtleWJvYXJkUHJlZml4U2VsZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0tleWJvYXJkUHJlZml4U2VsZWN0aW9uJztcbmltcG9ydCBTZWxlY3Rpb25BcmlhQWN0aXZlIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NlbGVjdGlvbkFyaWFBY3RpdmUnO1xuaW1wb3J0IFNlbGVjdGlvbkhpZ2hsaWdodCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TZWxlY3Rpb25IaWdobGlnaHQnO1xuaW1wb3J0IFNlbGVjdGlvbkluVmlldyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TZWxlY3Rpb25JblZpZXcnO1xuaW1wb3J0IFNpbmdsZVNlbGVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TaW5nbGVTZWxlY3Rpb24nO1xuXG5cbi8qKlxuICogQSBzaW5nbGUtc2VsZWN0aW9uIGxpc3QgYm94IHRoYXQgc3VwcG9ydHMgc2VsZWN0aW9uIGhpZ2hsaWdodGluZyAodXNpbmcgdGhlXG4gKiBzeXN0ZW0gaGlnaGxpZ2h0IGNvbG9yKSBhbmQga2V5Ym9hcmQgbmF2aWdhdGlvbi5cbiAqXG4gKiBbTGl2ZSBkZW1vXShodHRwOi8vYmFzaWN3ZWJjb21wb25lbnRzLm9yZy9iYXNpYy13ZWItY29tcG9uZW50cy9wYWNrYWdlcy9iYXNpYy1saXN0LWJveC8pXG4gKlxuICogVGhlIHVzZXIgY2FuIHNlbGVjdCBhbiBpdGVtIHdpdGggdGhlIG1vdXNlL3RvdWNoIG9yIGtleWJvYXJkOiBVcC9Eb3duLCBQYWdlXG4gKiBVcC9Eb3duLCBIb21lL0VuZC5cbiAqXG4gKiBMaWtlIG90aGVyIEJhc2ljIFdlYiBDb21wb25lbnRzLCB0aGlzIGNhbiBoYW5kbGUgZGlzdHJpYnV0ZWQgY29udGVudDogeW91IGNhblxuICogaW5jbHVkZSBhIGNvbnRlbnQgZWxlbWVudCBpbnNpZGUgYSBiYXNpYy1saXN0LWJveCwgYW5kIHRoZSBsaXN0IHdpbGwgbmF2aWdhdGVcbiAqIHRocm91Z2ggdGhlIGRpc3RyaWJ1dGVkIGNvbnRlbnQuXG4gKlxuICogVGhpcyBjb21wb25lbnQgaW5jbHVkZXMgYmFzaWMgQVJJQSBzdXBwb3J0IHRvIHByb3ZpZGUgYSByZWFzb25hYmxlIGRlZmF1bHRcbiAqIGV4cGVyaWVuY2UsIGUuZy4sIGZvciBzY3JlZW4gcmVhZGVycy4gVGhlIGxpc3QgY29tcG9uZW50IGl0c2VsZiB3aWxsIGJlXG4gKiBhc3NpZ25lZCBhbiBhcHByb3ByaWF0ZSBBUklBIHJvbGUgKGRlZmF1bHQgaXMgXCJsaXN0Ym94XCIpLiBUaGUgSUQgb2YgdGhlXG4gKiBzZWxlY3RlZCBpdGVtIHdpbGwgYmUgcmVmbGVjdGVkIGluIGFuIFwiYXJpYS1hY3RpdmVkZXNjZW5kYW50XCIgYXR0cmlidXRlXG4gKiBhcHBsaWVkIHRvIHRoZSBsaXN0LiBUbyBzdXBwb3J0IHRoaXMgZmVhdHVyZSwgYWxsIGl0ZW1zIGluIHRoZSBsaXN0IG5lZWRcbiAqIHVuaXF1ZSBJRHMuIElmIGFuIGl0ZW0gZG9lcyBub3QgaGF2ZSBhbiBJRCwgYmFzaWMtbGlzdC1ib3ggd2lsbCBhdXRvbWF0aWNhbGx5XG4gKiBhc3NpZ24gYSBkZWZhdWx0IElELlxuICpcbiAqIFRoZSBrZXlib2FyZCBpbnRlcmFjdGlvbiBtb2RlbCBnZW5lcmFsbHkgZm9sbG93cyB0aGF0IG9mIE1pY3Jvc29mdCBXaW5kb3dzJ1xuICogbGlzdCBib3hlcyBpbnN0ZWFkIG9mIHRob3NlIGluIE9TIFg6XG4gKlxuICogKiBUaGUgUGFnZSBVcC9Eb3duIGFuZCBIb21lL0VuZCBrZXlzIGFjdHVhbGx5IG1vdmUgdGhlIHNlbGVjdGlvbiwgcmF0aGVyIHRoYW5cbiAqICAganVzdCBzY3JvbGxpbmcgdGhlIGxpc3QuIFRoZSBmb3JtZXIgYmVoYXZpb3Igc2VlbXMgbW9yZSBnZW5lcmFsbHkgdXNlZnVsXG4gKiAgIGZvciBrZXlib2FyZCB1c2Vycy5cbiAqXG4gKiAqIFByZXNzaW5nIFBhZ2UgVXAvRG93biB3aWxsIG1vdmUgdGhlIHNlbGVjdGlvbiB0byB0aGUgdG9wbW9zdC9ib3R0b21tb3N0XG4gKiAgIHZpc2libGUgaXRlbSBpZiB0aGUgc2VsZWN0aW9uIGlzIG5vdCBhbHJlYWR5IHRoZXJlLiBUaGVyZWFmdGVyLCB0aGUga2V5XG4gKiAgIHdpbGwgbW92ZSB0aGUgc2VsZWN0aW9uIHVwL2Rvd24gYnkgYSBwYWdlLCBhbmQgKHBlciB0aGUgYWJvdmUgcG9pbnQpIG1ha2VcbiAqICAgdGhlIHNlbGVjdGVkIGl0ZW0gdmlzaWJsZS5cbiAqXG4gKiBQcm9ncmFtbWF0aWNhbGx5IHNlbGVjdGluZyBhbiBpdGVtIChieSBzZXR0aW5nIHRoZSBzZWxlY3RlZCBwcm9wZXJ0eSkgc2Nyb2xsc1xuICogdGhlIGl0ZW0gaW50byB2aWV3LlxuICpcbiAqIFRoZSB1c2VyIGNhbiBhbHNvIHNlbGVjdCBhbiBpdGVtIGJ5IHR5cGluZyB0aGUgYmVnaW5uaW5nIG9mIGFuIGl0ZW0ncyB0ZXh0LlxuICpcbiAqIEBleHRlbmRzIEVsZW1lbnRCYXNlXG4gKiBAbWl4ZXMgQ2xpY2tTZWxlY3Rpb25cbiAqIEBtaXhlcyBDb250ZW50QXNJdGVtc1xuICogQG1peGVzIERpcmVjdGlvblNlbGVjdGlvblxuICogQG1peGVzIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnRcbiAqIEBtaXhlcyBHZW5lcmljXG4gKiBAbWl4ZXMgS2V5Ym9hcmRcbiAqIEBtaXhlcyBLZXlib2FyZERpcmVjdGlvblxuICogQG1peGVzIEtleWJvYXJkUGFnZWRTZWxlY3Rpb25cbiAqIEBtaXhlcyBLZXlib2FyZFByZWZpeFNlbGVjdGlvblxuICogQG1peGVzIFNlbGVjdGlvbkFyaWFBY3RpdmVcbiAqIEBtaXhlcyBTZWxlY3Rpb25IaWdobGlnaHRcbiAqIEBtaXhlcyBTZWxlY3Rpb25JblZpZXdcbiAqIEBtaXhlcyBTaW5nbGVTZWxlY3Rpb25cbiAqL1xuY2xhc3MgTGlzdEJveCBleHRlbmRzIEVsZW1lbnRCYXNlLmNvbXBvc2UoXG4gIENsaWNrU2VsZWN0aW9uLFxuICBDb250ZW50QXNJdGVtcyxcbiAgRGlyZWN0aW9uU2VsZWN0aW9uLFxuICBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50LFxuICBHZW5lcmljLFxuICBLZXlib2FyZCxcbiAgS2V5Ym9hcmREaXJlY3Rpb24sXG4gIEtleWJvYXJkUGFnZWRTZWxlY3Rpb24sXG4gIEtleWJvYXJkUHJlZml4U2VsZWN0aW9uLFxuICBTZWxlY3Rpb25BcmlhQWN0aXZlLFxuICBTZWxlY3Rpb25IaWdobGlnaHQsXG4gIFNlbGVjdGlvbkluVmlldyxcbiAgU2luZ2xlU2VsZWN0aW9uXG4pIHtcblxuICBnZXQgZGVmYXVsdHMoKSB7XG4gICAgbGV0IGRlZmF1bHRzID0gc3VwZXIuZGVmYXVsdHMgfHwge307XG4gICAgZGVmYXVsdHMubmF2aWdhdGlvbkF4aXMgPSAndmVydGljYWwnO1xuICAgIHJldHVybiBkZWZhdWx0cztcbiAgfVxuXG4gIGdldCBzY3JvbGxUYXJnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuJC5pdGVtc0NvbnRhaW5lcjtcbiAgfVxuXG4gIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gYFxuICAgICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgICAgIH1cblxuICAgICAgW3RhcmdldD1cImNoaWxkXCJdIHtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAtd2Via2l0LWZsZXg6IDE7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICB9XG5cbiAgICAgICNpdGVtc0NvbnRhaW5lciB7XG4gICAgICAgIC13ZWJraXQtZmxleDogMTtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7IC8qIGZvciBtb21lbnR1bSBzY3JvbGxpbmcgKi9cbiAgICAgIH1cblxuICAgICAgLyogR2VuZXJpYyBhcHBlYXJhbmNlICovXG4gICAgICA6aG9zdChbZ2VuZXJpYz1cIlwiXSkge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtnZW5lcmljPVwiXCJdKSAjaXRlbXNDb250YWluZXIgOjpzbG90dGVkKCopIHtcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICBwYWRkaW5nOiAwLjI1ZW07XG4gICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGlkPVwiaXRlbXNDb250YWluZXJcIiByb2xlPVwibm9uZVwiPlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZXh0IGNvbnRlbnQgb2YgdGhlIHNlbGVjdGVkIGl0ZW0uXG4gICAqXG4gICAqIFNldHRpbmcgdGhpcyB2YWx1ZSB0byBhIHN0cmluZyB3aWxsIGF0dGVtcHQgdG8gc2VsZWN0IHRoZSBmaXJzdCBsaXN0IGl0ZW1cbiAgICogd2hvc2UgdGV4dCBjb250ZW50IG1hdGNoIHRoYXQgc3RyaW5nLiBTZXR0aW5nIHRoaXMgdG8gYSBzdHJpbmcgbm90IG1hdGNoaW5nXG4gICAqIGFueSBsaXN0IGl0ZW0gd2lsbCByZXN1bHQgaW4gbm8gc2VsZWN0aW9uLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkSXRlbSA9PSBudWxsIHx8IHRoaXMuc2VsZWN0ZWRJdGVtLnRleHRDb250ZW50ID09IG51bGwgP1xuICAgICAgJycgOlxuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0udGV4dENvbnRlbnQ7XG4gIH1cbiAgc2V0IHZhbHVlKHRleHQpIHtcblxuICAgIGxldCBjdXJyZW50SW5kZXggPSB0aGlzLnNlbGVjdGVkSW5kZXg7XG4gICAgbGV0IG5ld0luZGV4ID0gLTE7IC8vIEFzc3VtZSB3ZSB3b24ndCBmaW5kIHRoZSB0ZXh0LlxuXG4gICAgLy8gRmluZCB0aGUgaXRlbSB3aXRoIHRoZSBpbmRpY2F0ZWQgdGV4dC5cbiAgICBsZXQgaXRlbXMgPSB0aGlzLml0ZW1zO1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSBpdGVtcy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGl0ZW1zW2ldLnRleHRDb250ZW50ID09PSB0ZXh0KSB7XG4gICAgICAgIG5ld0luZGV4ID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5ld0luZGV4ICE9PSBjdXJyZW50SW5kZXgpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IG5ld0luZGV4O1xuICAgICAgbGV0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCd2YWx1ZS1jaGFuZ2VkJyk7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gdGhlIGxpc3QncyB2YWx1ZSBwcm9wZXJ0eSBjaGFuZ2VzLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgTGlzdEJveFxuICAgKiBAZXZlbnQgdmFsdWUtY2hhbmdlZFxuICAgKi9cbn1cblxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2Jhc2ljLWxpc3QtYm94JywgTGlzdEJveCk7XG5leHBvcnQgZGVmYXVsdCBMaXN0Qm94O1xuIiwiaW1wb3J0IEVsZW1lbnRCYXNlIGZyb20gJy4uLy4uL2Jhc2ljLWVsZW1lbnQtYmFzZS9zcmMvRWxlbWVudEJhc2UnO1xuaW1wb3J0IERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCc7XG5pbXBvcnQgQ29udGVudEFzSXRlbXMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ29udGVudEFzSXRlbXMnO1xuaW1wb3J0IFNlbGVjdGlvbkFyaWFBY3RpdmUgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2VsZWN0aW9uQXJpYUFjdGl2ZSc7XG5pbXBvcnQgU2luZ2xlU2VsZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NpbmdsZVNlbGVjdGlvbic7XG5pbXBvcnQgVGFyZ2V0SW5Db2xsZWN0aXZlIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1RhcmdldEluQ29sbGVjdGl2ZSc7XG5cbmxldCBiYXNlID0gRWxlbWVudEJhc2UuY29tcG9zZShcbiAgQ29udGVudEFzSXRlbXMsXG4gIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQsXG4gIFNlbGVjdGlvbkFyaWFBY3RpdmUsXG4gIFNpbmdsZVNlbGVjdGlvbixcbiAgVGFyZ2V0SW5Db2xsZWN0aXZlXG4pO1xuXG5cbi8qKlxuICogU2hvd3MgZXhhY3RseSBvbmUgY2hpbGQgZWxlbWVudCBhdCBhIHRpbWUuIFRoaXMgY2FuIGJlIHVzZWZ1bCwgZm9yIGV4YW1wbGUsXG4gKiBpZiBhIGdpdmVuIFVJIGVsZW1lbnQgaGFzIG11bHRpcGxlIG1vZGVzIHRoYXQgcHJlc2VudCBzdWJzdGFudGlhbGx5IGRpZmZlcmVudFxuICogZWxlbWVudHMuXG4gKlxuICogVGhlIHRyYW5zaXRpb24gYmV0d2VlbiBjaGlsZCBlbGVtZW50cyBpcyBpbnN0YW50ZW5vdXMuIElmIHlvdSdkIGxpa2UgdGhlXG4gKiB0cmFuc2l0aW9uIHRvIGJlIGFjY29tcGFuaWVkIGJ5IHZpc2libGUgYW5pbWF0ZWQgZWZmZWN0cywgc2VlXG4gKiBbYmFzaWMtYW5pbWF0aW9uLXN0YWdlXSguLi9iYXNpYy1hbmltYXRpb24tc3RhZ2UpLlxuICpcbiAqIFRoaXMgY29tcG9uZW50IGRvZXNuJ3QgcHJvdmlkZSBhbnkgVUkgZm9yIGNoYW5naW5nIHdoaWNoIG1vZGUgaXMgc2hvd24uXG4gKlxuICogQGV4dGVuZHMgRWxlbWVudEJhc2VcbiAqIEBtaXhlcyBDb250ZW50QXNJdGVtc1xuICogQG1peGVzIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnRcbiAqIEBtaXhlcyBTZWxlY3Rpb25BcmlhQWN0aXZlXG4gKiBAbWl4ZXMgU2luZ2xlU2VsZWN0aW9uXG4gKiBAbWl4ZXMgVGFyZ2V0SW5Db2xsZWN0aXZlXG4gKi9cbmNsYXNzIE1vZGVzIGV4dGVuZHMgYmFzZSB7XG5cbiAgYXBwbHlTZWxlY3Rpb24oaXRlbSwgc2VsZWN0ZWQpIHtcbiAgICBpZiAoc3VwZXIuYXBwbHlTZWxlY3Rpb24pIHsgc3VwZXIuYXBwbHlTZWxlY3Rpb24oaXRlbSwgc2VsZWN0ZWQpOyB9XG4gICAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gc2VsZWN0ZWQgPyAnJyA6ICdub25lJztcbiAgICBpdGVtLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAhc2VsZWN0ZWQpO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRzKCkge1xuICAgIGxldCBkZWZhdWx0cyA9IHN1cGVyLmRlZmF1bHRzIHx8IHt9O1xuICAgIGRlZmF1bHRzLnNlbGVjdGlvblJlcXVpcmVkID0gdHJ1ZTtcbiAgICByZXR1cm4gZGVmYXVsdHM7XG4gIH1cblxufVxuXG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYmFzaWMtbW9kZXMnLCBNb2Rlcyk7XG5leHBvcnQgZGVmYXVsdCBNb2RlcztcbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvY3JlYXRlU3ltYm9sJztcbmltcG9ydCBFbGVtZW50QmFzZSBmcm9tICcuLi8uLi9iYXNpYy1lbGVtZW50LWJhc2Uvc3JjL0VsZW1lbnRCYXNlJztcbmltcG9ydCBDb250ZW50Rmlyc3RDaGlsZFRhcmdldCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Db250ZW50Rmlyc3RDaGlsZFRhcmdldCc7XG5pbXBvcnQgRGlyZWN0aW9uU2VsZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0RpcmVjdGlvblNlbGVjdGlvbic7XG5pbXBvcnQgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50JztcbmltcG9ydCBLZXlib2FyZCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9LZXlib2FyZCc7XG5pbXBvcnQgS2V5Ym9hcmREaXJlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvS2V5Ym9hcmREaXJlY3Rpb24nO1xuaW1wb3J0IHJlbmRlckFycmF5QXNFbGVtZW50cyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9yZW5kZXJBcnJheUFzRWxlbWVudHMnO1xuaW1wb3J0IFNpbmdsZVNlbGVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TaW5nbGVTZWxlY3Rpb24nO1xuaW1wb3J0IFRhcmdldEluQ29sbGVjdGl2ZSBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9UYXJnZXRJbkNvbGxlY3RpdmUnO1xuaW1wb3J0IFRhcmdldFNlbGVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9UYXJnZXRTZWxlY3Rpb24nO1xuaW1wb3J0IHRvZ2dsZUNsYXNzIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL3RvZ2dsZUNsYXNzJztcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3Qgc2VsZWN0ZWRGcmFjdGlvbkNoYW5nZWRMaXN0ZW5lclN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnc2VsZWN0ZWRGcmFjdGlvbkNoYW5nZWRMaXN0ZW5lcicpO1xuXG5cbmxldCBiYXNlID0gRWxlbWVudEJhc2UuY29tcG9zZShcbiAgQ29udGVudEZpcnN0Q2hpbGRUYXJnZXQsXG4gIERpcmVjdGlvblNlbGVjdGlvbixcbiAgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCxcbiAgS2V5Ym9hcmQsXG4gIEtleWJvYXJkRGlyZWN0aW9uLFxuICBTaW5nbGVTZWxlY3Rpb24sXG4gIFRhcmdldEluQ29sbGVjdGl2ZSxcbiAgVGFyZ2V0U2VsZWN0aW9uXG4pO1xuXG4vKipcbiAqIFByZXNlbnRzIGEgc2V0IG9mIHNtYWxsIGRvdHMgdG8gc2hvdyBsaXN0IGl0ZW0gY291bnQgYW5kIHNlbGVjdCBsaXN0IGl0ZW1zLlxuICpcbiAqIFlvdSBjYW4gc2VlIGEgW2xpdmUgZGVtb10oaHR0cDovL2Jhc2ljd2ViY29tcG9uZW50cy5vcmcvYmFzaWMtd2ViLWNvbXBvbmVudHMvcGFja2FnZXMvYmFzaWMtY2Fyb3VzZWwvY2Fyb3VzZWxXaXRoRG90cy5odG1sKVxuICogb2YgdGhpcyBjb21wb25lbnQgYXBwbGllZCB0byBhIGNhcm91c2VsLlxuICpcbiAqIFRoZXJlIHdpbGwgYmUgb25lIGRvdCBmb3IgZWFjaCBpdGVtLCBhbmQgdGhlIGRvdCBmb3IgdGhlIGN1cnJlbnRseSBzZWxlY3RlZFxuICogaXRlbSB3aWxsIGJlIHNob3duIHNlbGVjdGVkLlxuICpcbiAqIFR5cGljYWwgdXNhZ2U6XG4gKlxuICogICAgIDxiYXNpYy1wYWdlLWRvdHM+XG4gKiAgICAgICA8YmFzaWMtY2Fyb3VzZWw+XG4gKiAgICAgICAgIC4uLiBpbWFnZXMsIGV0Yy4gLi4uXG4gKiAgICAgICA8L2Jhc2ljLWNhcm91c2VsPlxuICogICAgIDwvYmFzaWMtcGFnZS1kb3RzPlxuICpcbiAqIEFsdGhvdWdoIHRoZSBkb3RzIGFyZSBxdWl0ZSBzbWFsbCBieSBkZWZhdWx0LCBjbGlja2luZy90YXBwaW5nIGEgZG90IHdpbGxcbiAqIHdpbGwgc2VsZWN0IHRoZSBjb3JyZXNwb25kaW5nIGxpc3QgaXRlbS5cbiAqXG4gKiBAZXh0ZW5kcyBFbGVtZW50QmFzZVxuICogQG1peGVzIENvbnRlbnRGaXJzdENoaWxkVGFyZ2V0XG4gKiBAbWl4ZXMgRGlyZWN0aW9uU2VsZWN0aW9uXG4gKiBAbWl4ZXMgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudFxuICogQG1peGVzIEtleWJvYXJkXG4gKiBAbWl4ZXMgS2V5Ym9hcmREaXJlY3Rpb25cbiAqIEBtaXhlcyBTaW5nbGVTZWxlY3Rpb25cbiAqIEBtaXhlcyBUYXJnZXRJbkNvbGxlY3RpdmVcbiAqIEBtaXhlcyBUYXJnZXRTZWxlY3Rpb25cbiAqL1xuY2xhc3MgUGFnZURvdHMgZXh0ZW5kcyBiYXNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy4kLmRvdHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICBsZXQgZG90ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgbGV0IGRvdEluZGV4ID0gdGhpcy5kb3RzLmluZGV4T2YoZG90KTtcbiAgICAgIGlmIChkb3RJbmRleCA+PSAwKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IGRvdEluZGV4O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYXBwbHlTZWxlY3Rpb24oaXRlbSwgc2VsZWN0ZWQpIHtcbiAgICBpZiAoc3VwZXIuYXBwbHlTZWxlY3Rpb24pIHsgc3VwZXIuYXBwbHlTZWxlY3Rpb24oaXRlbSwgc2VsZWN0ZWQpOyB9XG4gICAgbGV0IGluZGV4ID0gdGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pO1xuICAgIC8vIFNlZSBpZiB0aGUgY29ycmVzcG9uZGluZyBkb3QgaGFzIGFscmVhZHkgYmVlbiBjcmVhdGVkLlxuICAgIC8vIElmIG5vdCwgdGhlIGNvcnJlY3QgZG90IHdpbGwgYmUgc2VsZWN0ZWQgd2hlbiBpdCBnZXRzIGNyZWF0ZWQuXG4gICAgbGV0IGRvdHMgPSB0aGlzLmRvdHM7XG4gICAgaWYgKGRvdHMgJiYgZG90cy5sZW5ndGggPiBpbmRleCkge1xuICAgICAgbGV0IGRvdCA9IHRoaXMuZG90c1tpbmRleF07XG4gICAgICBpZiAoZG90KSB7XG4gICAgICAgIHRvZ2dsZUNsYXNzKGRvdCwgJ3NlbGVjdGVkJywgc2VsZWN0ZWQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldCBkZWZhdWx0cygpIHtcbiAgICBsZXQgZGVmYXVsdHMgPSBzdXBlci5kZWZhdWx0cyB8fCB7fTtcbiAgICBkZWZhdWx0cy5uYXZpZ2F0aW9uQXhpcyA9ICdob3Jpem9udGFsJztcbiAgICByZXR1cm4gZGVmYXVsdHM7XG4gIH1cblxuICBnZXQgZG90cygpIHtcbiAgICByZXR1cm4gW10uc2xpY2UuY2FsbCh0aGlzLiQuZG90cy5xdWVyeVNlbGVjdG9yQWxsKCcuZG90JykpO1xuICB9XG5cbiAgaXRlbXNDaGFuZ2VkKCkge1xuICAgIGlmIChzdXBlci5pdGVtc0NoYW5nZWQpIHsgc3VwZXIuaXRlbXNDaGFuZ2VkKCk7IH1cbiAgICByZW5kZXJBcnJheUFzRWxlbWVudHModGhpcy5pdGVtcywgdGhpcy4kLmRvdHMsIChpdGVtLCBlbGVtZW50KSA9PiB7XG4gICAgICAvLyBXZSBkb24ndCB1c2UgdGhlIGl0ZW0gcGFyYW1ldGVyLCBiZWNhdXNlIGFueSBpdGVtIHdpbGwgcHJvZHVjZSBhblxuICAgICAgLy8gaWRlbnRpY2FsIGNvcnJlc3BvbmRpbmcgZG90LlxuICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkb3QnKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzdHlsZS1zY29wZScpO1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Jhc2ljLXBhZ2UtZG90cycpO1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgncm9sZScsICdub25lJyk7XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuc2VsZWN0ZWRJdGVtQ2hhbmdlZCgpOyAgLy8gSW4gY2FzZSBwb3NpdGlvbiBvZiBzZWxlY3RlZCBpdGVtIG1vdmVkLlxuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBkaXN0YW5jZSB0aGUgdXNlciBoYXMgbW92ZWQgdGhlIGZpcnN0IHRvdWNocG9pbnQgc2luY2UgdGhlIGJlZ2lubmluZ1xuICAgKiBvZiBhIGRyYWcsIGV4cHJlc3NlZCBhcyBhIGZyYWN0aW9uIG9mIHRoZSBlbGVtZW50J3Mgd2lkdGguXG4gICAqXG4gICAqIEB0eXBlIG51bWJlclxuICAgKi9cbiAgZ2V0IHNlbGVjdGVkRnJhY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0ICYmIHRoaXMudGFyZ2V0LnNlbGVjdGVkRnJhY3Rpb247XG4gIH1cbiAgc2V0IHNlbGVjdGVkRnJhY3Rpb24odmFsdWUpIHtcbiAgICBpZiAoJ3NlbGVjdGVkRnJhY3Rpb24nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkRnJhY3Rpb24gPSB2YWx1ZTsgfVxuICAgIGlmICh0aGlzLnRhcmdldCAmJiB0aGlzLnRhcmdldC5zZWxlY3RlZEZyYWN0aW9uICE9PSB2YWx1ZSkge1xuICAgICAgdGhpcy50YXJnZXQuc2VsZWN0ZWRGcmFjdGlvbiA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW5kZXJUcmFuc2l0aW9uKHRoaXMsIHRoaXMuc2VsZWN0ZWRJbmRleCwgdmFsdWUpO1xuICAgIH1cbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdzZWxlY3RlZC1mcmFjdGlvbi1jaGFuZ2VkJykpO1xuICB9XG5cbiAgc2VsZWN0ZWRJdGVtQ2hhbmdlZCgpIHtcbiAgICBpZiAoc3VwZXIuc2VsZWN0ZWRJdGVtQ2hhbmdlZCkgeyBzdXBlci5zZWxlY3RlZEl0ZW1DaGFuZ2VkKCk7IH1cbiAgICBsZXQgc2VsZWN0ZWRJbmRleCA9IHRoaXMuc2VsZWN0ZWRJbmRleDtcbiAgICB0aGlzLmRvdHMuZm9yRWFjaCgoZG90LCBpKSA9PiB7XG4gICAgICB0b2dnbGVDbGFzcyhkb3QsICdzZWxlY3RlZCcsIGkgPT09IHNlbGVjdGVkSW5kZXgpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0IHRhcmdldCgpIHtcbiAgICByZXR1cm4gc3VwZXIudGFyZ2V0O1xuICB9XG4gIHNldCB0YXJnZXQoZWxlbWVudCkge1xuICAgIGlmICgndGFyZ2V0JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci50YXJnZXQgPSBlbGVtZW50OyB9XG4gICAgaWYgKHRoaXNbc2VsZWN0ZWRGcmFjdGlvbkNoYW5nZWRMaXN0ZW5lclN5bWJvbF0pIHtcbiAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2VsZWN0ZWQtZnJhY3Rpb24tY2hhbmdlZCcsIHRoaXNbc2VsZWN0ZWRGcmFjdGlvbkNoYW5nZWRMaXN0ZW5lclN5bWJvbF0pO1xuICAgIH1cbiAgICB0aGlzW3NlbGVjdGVkRnJhY3Rpb25DaGFuZ2VkTGlzdGVuZXJTeW1ib2xdID0gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzZWxlY3RlZC1mcmFjdGlvbi1jaGFuZ2VkJywgZXZlbnQgPT4ge1xuICAgICAgdGhpcy5zZWxlY3RlZEZyYWN0aW9uID0gZWxlbWVudC5zZWxlY3RlZEZyYWN0aW9uO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBgXG4gICAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICAjZG90cyB7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgIH1cblxuICAgICAgI2NvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLXdlYmtpdC1mbGV4OiAxO1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgICB9XG5cbiAgICAgICNjb250YWluZXIgOjpzbG90dGVkKCopIHtcbiAgICAgICAgLXdlYmtpdC1mbGV4OiAxO1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgfVxuXG4gICAgICAuZG90IHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBoZWlnaHQ6IDhweDtcbiAgICAgICAgbWFyZ2luOiA3cHggNXB4O1xuICAgICAgICBvcGFjaXR5OiAwLjQ7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyBib3gtc2hhZG93IDAuMnM7XG4gICAgICAgIHdpZHRoOiA4cHg7XG4gICAgICB9XG5cbiAgICAgIC5kb3Q6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMXB4IDNweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gICAgICB9XG5cbiAgICAgIC5kb3Quc2VsZWN0ZWQge1xuICAgICAgICBvcGFjaXR5OiAwLjk1O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgLmRvdCB7XG4gICAgICAgICAgaGVpZ2h0OiAxMnB4O1xuICAgICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGlkPVwiZG90c1wiPjwvZGl2PlxuICAgICAgPGRpdiBpZD1cImNvbnRhaW5lclwiIHJvbGU9XCJub25lXCI+XG4gICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxufVxuXG5cbi8vIFJldHVybiB0aGUgaW5kZXgsIGVuc3VyaW5nIGl0IHN0YXlzIGJldHdlZW4gMCBhbmQgdGhlIGdpdmVuIGxlbmd0aC5cbmZ1bmN0aW9uIGtlZXBJbmRleFdpdGhpbkJvdW5kcyhsZW5ndGgsIGluZGV4KSB7XG4gIC8vIEhhbmRsZSBwb3NzaWJpbGl0eSBvZiBuZWdhdGl2ZSBtb2QuXG4gIC8vIFNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xODYxODI1MC83NjQ3MlxuICByZXR1cm4gKChpbmRleCAlIGxlbmd0aCkgKyBsZW5ndGgpICUgbGVuZ3RoO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUcmFuc2l0aW9uKGVsZW1lbnQsIHNlbGVjdGVkSW5kZXgsIHNlbGVjdGVkRnJhY3Rpb24pIHtcbiAgbGV0IGRvdHMgPSBlbGVtZW50LmRvdHM7XG4gIGlmICghZG90cyB8fCBkb3RzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybjtcbiAgfVxuICBsZXQgZG90Q291bnQgPSBkb3RzLmxlbmd0aDtcbiAgbGV0IG9wYWNpdHlNaW5pbXVtID0gMC40O1xuICBsZXQgb3BhY2l0eU1heGltdW0gPSAwLjk1O1xuICBsZXQgb3BhY2l0eVJhbmdlID0gb3BhY2l0eU1heGltdW0gLSBvcGFjaXR5TWluaW11bTtcbiAgbGV0IGZyYWN0aW9uYWxJbmRleCA9IHNlbGVjdGVkSW5kZXggKyBzZWxlY3RlZEZyYWN0aW9uO1xuICBsZXQgbGVmdEluZGV4ID0gTWF0aC5mbG9vcihmcmFjdGlvbmFsSW5kZXgpO1xuICBsZXQgcmlnaHRJbmRleCA9IE1hdGguY2VpbChmcmFjdGlvbmFsSW5kZXgpO1xuICBsZXQgc2VsZWN0aW9uV3JhcHMgPSBlbGVtZW50LnNlbGVjdGlvbldyYXBzO1xuICBsZXQgYXdheUluZGV4ID0gc2VsZWN0ZWRGcmFjdGlvbiA+PSAwID8gbGVmdEluZGV4IDogcmlnaHRJbmRleDtcbiAgbGV0IHRvd2FyZEluZGV4ID0gc2VsZWN0ZWRGcmFjdGlvbiA+PSAwID8gcmlnaHRJbmRleCA6IGxlZnRJbmRleDtcbiAgaWYgKHNlbGVjdGlvbldyYXBzKSB7XG4gICAgYXdheUluZGV4ID0ga2VlcEluZGV4V2l0aGluQm91bmRzKGRvdENvdW50LCBhd2F5SW5kZXgpO1xuICAgIHRvd2FyZEluZGV4ID0ga2VlcEluZGV4V2l0aGluQm91bmRzKGRvdENvdW50LCB0b3dhcmRJbmRleCk7XG4gIH1cbiAgLy8gU3R1cGlkIElFIGRvZXNuJ3QgaGF2ZSBNYXRoLnRydW5jLlxuICAvLyBsZXQgdHJ1bmNhdGVkU2VsZWN0ZWRGcmFjdGlvbiA9IE1hdGgudHJ1bmMoc2VsZWN0ZWRGcmFjdGlvbik7XG4gIGxldCB0cnVuY2F0ZWRTZWxlY3RlZEZyYWN0aW9uID0gc2VsZWN0ZWRGcmFjdGlvbiA8IDAgPyBNYXRoLmNlaWwoc2VsZWN0ZWRGcmFjdGlvbikgOiBNYXRoLmZsb29yKHNlbGVjdGVkRnJhY3Rpb24pO1xuICBsZXQgcHJvZ3Jlc3MgPSBzZWxlY3RlZEZyYWN0aW9uIC0gdHJ1bmNhdGVkU2VsZWN0ZWRGcmFjdGlvbjtcbiAgbGV0IG9wYWNpdHlQcm9ncmVzc1Rocm91Z2hSYW5nZSA9IE1hdGguYWJzKHByb2dyZXNzKSAqIG9wYWNpdHlSYW5nZTtcbiAgZG90cy5mb3JFYWNoKChkb3QsIGluZGV4KSA9PiB7XG4gICAgbGV0IGRvdE9wYWNpdHk7XG4gICAgaWYgKHNlbGVjdGVkRnJhY3Rpb24gPT09IDApIHtcbiAgICAgIC8vIFJlbW92ZSBleHBsaWNpdCBvcGFjaXR5IGFuZCByZWx5IG9uIHN0eWxpbmcuXG4gICAgICBkb3RPcGFjaXR5ID0gJyc7XG4gICAgfSBlbHNlIGlmIChpbmRleCA9PT0gYXdheUluZGV4KSB7XG4gICAgICBkb3RPcGFjaXR5ID0gb3BhY2l0eU1heGltdW0gLSBvcGFjaXR5UHJvZ3Jlc3NUaHJvdWdoUmFuZ2U7XG4gICAgfSBlbHNlIGlmIChpbmRleCA9PT0gdG93YXJkSW5kZXgpIHtcbiAgICAgIGRvdE9wYWNpdHkgPSBvcGFjaXR5TWluaW11bSArIG9wYWNpdHlQcm9ncmVzc1Rocm91Z2hSYW5nZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG90T3BhY2l0eSA9IG9wYWNpdHlNaW5pbXVtO1xuICAgIH1cbiAgICBkb3Quc3R5bGUub3BhY2l0eSA9IGRvdE9wYWNpdHk7XG4gIH0pO1xufVxuXG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYmFzaWMtcGFnZS1kb3RzJywgUGFnZURvdHMpO1xuZXhwb3J0IGRlZmF1bHQgUGFnZURvdHM7XG4iLCJpbXBvcnQgRWxlbWVudEJhc2UgZnJvbSAnLi4vLi4vYmFzaWMtZWxlbWVudC1iYXNlL3NyYy9FbGVtZW50QmFzZSc7XG5pbXBvcnQgQ29udGVudEZpcnN0Q2hpbGRUYXJnZXQgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ29udGVudEZpcnN0Q2hpbGRUYXJnZXQnO1xuaW1wb3J0IERpcmVjdGlvblNlbGVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXJlY3Rpb25TZWxlY3Rpb24nO1xuaW1wb3J0IERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCc7XG5pbXBvcnQgS2V5Ym9hcmQgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvS2V5Ym9hcmQnO1xuaW1wb3J0IEtleWJvYXJkRGlyZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0tleWJvYXJkRGlyZWN0aW9uJztcbmltcG9ydCBTaW5nbGVTZWxlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2luZ2xlU2VsZWN0aW9uJztcbmltcG9ydCBUYXJnZXRJbkNvbGxlY3RpdmUgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvVGFyZ2V0SW5Db2xsZWN0aXZlJztcbmltcG9ydCBUYXJnZXRTZWxlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvVGFyZ2V0U2VsZWN0aW9uJztcbmltcG9ydCB0b2dnbGVDbGFzcyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy90b2dnbGVDbGFzcyc7XG5cblxubGV0IGJhc2UgPSBFbGVtZW50QmFzZS5jb21wb3NlKFxuICBDb250ZW50Rmlyc3RDaGlsZFRhcmdldCxcbiAgRGlyZWN0aW9uU2VsZWN0aW9uLFxuICBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50LFxuICBLZXlib2FyZCxcbiAgS2V5Ym9hcmREaXJlY3Rpb24sXG4gIFNpbmdsZVNlbGVjdGlvbixcbiAgVGFyZ2V0SW5Db2xsZWN0aXZlLFxuICBUYXJnZXRTZWxlY3Rpb25cbik7XG5cbi8qKlxuICogQXV4aWxpYXJ5IGNvbXBvbmVudCBmb3IgbWFuYWdpbmcgcGxheWJhY2sgb2YgYSBzbGlkZXNob3csIGF1ZGlvIHBsYXlsaXN0LCBldGMuXG4gKlxuICogVGhpcyBjb21wb25lbnQgY2FuIGJlIHVzZWQgdG8gd3JhcCBhIGNvbXBvbmVudCBsaWtlXG4gKiBbYmFzaWMtc2xpZGVzaG93XSguLi9iYXNpYy1zbGlkZXNob3cpLiBFeGFtcGxlOlxuICpcbiAqICAgICA8YmFzaWMtcGxheS1jb250cm9scz5cbiAqICAgICAgIDxiYXNpYy1zbGlkZXNob3c+XG4gKiAgICAgICAgIC4uLiBpbWFnZXMsIGV0Yy4gLi4uXG4gKiAgICAgICA8L2Jhc2ljLXNsaWRlc2hvdz5cbiAqICAgICA8L2Jhc2ljLXBsYXktY29udHJvbHM+XG4gKlxuICogQGV4dGVuZHMgRWxlbWVudEJhc2VcbiAqIEBtaXhlcyBDb250ZW50Rmlyc3RDaGlsZFRhcmdldFxuICogQG1peGVzIERpcmVjdGlvblNlbGVjdGlvblxuICogQG1peGVzIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnRcbiAqIEBtaXhlcyBLZXlib2FyZFxuICogQG1peGVzIEtleWJvYXJkRGlyZWN0aW9uXG4gKiBAbWl4ZXMgU2luZ2xlU2VsZWN0aW9uXG4gKiBAbWl4ZXMgVGFyZ2V0SW5Db2xsZWN0aXZlXG4gKiBAbWl4ZXMgVGFyZ2V0U2VsZWN0aW9uXG4gKi9cbmNsYXNzIFBsYXlDb250cm9scyBleHRlbmRzIGJhc2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy4kLnByZXZpb3VzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgdGhpcy5zZWxlY3RQcmV2aW91cygpO1xuICAgIH0pO1xuICAgIHRoaXMuJC5wbGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgdGhpcy5wbGF5aW5nID0gIXRoaXMucGxheWluZztcbiAgICB9KTtcbiAgICB0aGlzLiQubmV4dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgIHRoaXMuc2VsZWN0TmV4dCgpO1xuICAgIH0pO1xuICAgIHRvZ2dsZUNsYXNzKHRoaXMsICdwbGF5aW5nJywgdGhpcy5wbGF5aW5nKTtcbiAgfVxuXG4gIGtleWRvd24oZXZlbnQpIHtcbiAgICBsZXQgaGFuZGxlZDtcblxuICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgY2FzZSAzMjogLyogU3BhY2UgKi9cbiAgICAgICAgdGhpcy5wbGF5aW5nID0gIXRoaXMucGxheWluZztcbiAgICAgICAgaGFuZGxlZCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIC8vIFByZWZlciBtaXhpbiByZXN1bHQgaWYgaXQncyBkZWZpbmVkLCBvdGhlcndpc2UgdXNlIGJhc2UgcmVzdWx0LlxuICAgIHJldHVybiBoYW5kbGVkIHx8IChzdXBlci5rZXlkb3duICYmIHN1cGVyLmtleWRvd24oZXZlbnQpKTtcbiAgfVxuXG4gIHBhdXNlKCkge1xuICAgIGlmICh0aGlzLnRhcmdldCkge1xuICAgICAgdGhpcy50YXJnZXQucGF1c2UoKTtcbiAgICB9XG4gIH1cblxuICBwbGF5KCkge1xuICAgIGlmICh0aGlzLnRhcmdldCkge1xuICAgICAgdGhpcy50YXJnZXQucGxheSgpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBwbGF5aW5nKCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldCAmJiB0aGlzLnRhcmdldC5wbGF5aW5nO1xuICB9XG4gIHNldCBwbGF5aW5nKHZhbHVlKSB7XG4gICAgaWYgKCdwbGF5aW5nJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5wbGF5aW5nID0gdmFsdWU7IH1cbiAgICBpZiAodGhpcy50YXJnZXQpIHtcbiAgICAgIHRoaXMudGFyZ2V0LnBsYXlpbmcgPSB2YWx1ZTtcbiAgICB9XG4gICAgdG9nZ2xlQ2xhc3ModGhpcywgJ3BsYXlpbmcnLCB2YWx1ZSk7XG4gIH1cblxuICBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgICNidXR0b25zIHtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgfVxuXG4gICAgICBidXR0b24ge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBmaWxsOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICB9XG4gICAgICA6aG9zdCg6aG92ZXIpIGJ1dHRvbiB7XG4gICAgICAgIGZpbGw6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgICAgIH1cbiAgICAgIGJ1dHRvbjpob3ZlciB7XG4gICAgICAgIGZpbGw6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSk7XG4gICAgICB9XG4gICAgICBidXR0b246YWN0aXZlIHtcbiAgICAgICAgZmlsbDogd2hpdGU7XG4gICAgICB9XG5cbiAgICAgIC5pY29uIHtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgIH1cbiAgICAgICNwbGF5QnV0dG9uIC5pY29uIHtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoLnBsYXlpbmcpIC5wYXVzZWRDb250cm9sIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICAgIDpob3N0KDpub3QoLnBsYXlpbmcpKSAucGxheWluZ0NvbnRyb2wge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICAjY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAtd2Via2l0LWZsZXg6IDE7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICB9XG5cbiAgICAgICNjb250YWluZXIgOjpzbG90dGVkKCopIHtcbiAgICAgICAgLXdlYmtpdC1mbGV4OiAxO1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBpZD1cImJ1dHRvbnNcIj5cbiAgICAgICAgPGJ1dHRvbiBpZD1cInByZXZpb3VzQnV0dG9uXCI+XG4gICAgICAgICAgPHN2ZyBjbGFzcz1cImljb25cIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkIG1lZXRcIj5cbiAgICAgICAgICAgIDxnIGlkPVwic2tpcC1wcmV2aW91c1wiPlxuICAgICAgICAgICAgICA8cGF0aCBkPVwiTTYgNmgydjEySDZ6bTMuNSA2bDguNSA2VjZ6XCIvPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBpZD1cInBsYXlCdXR0b25cIj5cbiAgICAgICAgICA8c3ZnIGNsYXNzPVwiaWNvbiBwbGF5aW5nQ29udHJvbFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWQgbWVldFwiPlxuICAgICAgICAgICAgPGcgaWQ9XCJwYXVzZS1jaXJjbGUtb3V0bGluZVwiPlxuICAgICAgICAgICAgICA8cGF0aCBkPVwiTTkgMTZoMlY4SDl2OHptMy0xNEM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMCAxOGMtNC40MSAwLTgtMy41OS04LThzMy41OS04IDgtOCA4IDMuNTkgOCA4LTMuNTkgOC04IDh6bTEtNGgyVjhoLTJ2OHpcIj48L3BhdGg+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPHN2ZyBjbGFzcz1cImljb24gcGF1c2VkQ29udHJvbFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWQgbWVldFwiPlxuICAgICAgICAgICAgPGcgaWQ9XCJwbGF5LWNpcmNsZS1vdXRsaW5lXCI+XG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTAgMTYuNWw2LTQuNS02LTQuNXY5ek0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0wIDE4Yy00LjQxIDAtOC0zLjU5LTgtOHMzLjU5LTggOC04IDggMy41OSA4IDgtMy41OSA4LTggOHpcIj48L3BhdGg+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGlkPVwibmV4dEJ1dHRvblwiPlxuICAgICAgICAgIDxzdmcgY2xhc3M9XCJpY29uXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBtZWV0XCI+XG4gICAgICAgICAgICA8ZyBpZD1cInNraXAtbmV4dFwiPlxuICAgICAgICAgICAgICA8cGF0aCBkPVwiTTYgMThsOC41LTZMNiA2djEyek0xNiA2djEyaDJWNmgtMnpcIi8+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgaWQ9XCJjb250YWluZXJcIiByb2xlPVwibm9uZVwiPlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbn1cblxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2Jhc2ljLXBsYXktY29udHJvbHMnLCBQbGF5Q29udHJvbHMpO1xuIiwiaW1wb3J0IEVsZW1lbnRCYXNlIGZyb20gJy4uLy4uL2Jhc2ljLWVsZW1lbnQtYmFzZS9zcmMvRWxlbWVudEJhc2UnO1xuaW1wb3J0IENvbnRlbnRGaXJzdENoaWxkVGFyZ2V0IGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NvbnRlbnRGaXJzdENoaWxkVGFyZ2V0JztcbmltcG9ydCBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50IGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQnO1xuaW1wb3J0IFNpbmdsZVNlbGVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TaW5nbGVTZWxlY3Rpb24nO1xuaW1wb3J0IEtleWJvYXJkIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0tleWJvYXJkJztcbmltcG9ydCBLZXlib2FyZERpcmVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9LZXlib2FyZERpcmVjdGlvbic7XG5pbXBvcnQgVGFyZ2V0SW5Db2xsZWN0aXZlIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1RhcmdldEluQ29sbGVjdGl2ZSc7XG5pbXBvcnQgVGFyZ2V0U2VsZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1RhcmdldFNlbGVjdGlvbic7XG5pbXBvcnQgVGltZXJTZWxlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvVGltZXJTZWxlY3Rpb24nO1xuXG5cbmxldCBiYXNlID0gRWxlbWVudEJhc2UuY29tcG9zZShcbiAgQ29udGVudEZpcnN0Q2hpbGRUYXJnZXQsXG4gIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQsXG4gIFNpbmdsZVNlbGVjdGlvbixcbiAgS2V5Ym9hcmQsXG4gIEtleWJvYXJkRGlyZWN0aW9uLFxuICBUYXJnZXRJbkNvbGxlY3RpdmUsXG4gIFRhcmdldFNlbGVjdGlvbixcbiAgVGltZXJTZWxlY3Rpb25cbik7XG5cblxuLyoqXG4gKiBBdXhpbGlhcnkgY29tcG9uZW50IHRvIGFkdmFuY2UgYSBzZWxlY3Rpb24gd2l0aCBhIHRpbWVyLlxuICpcbiAqIFRoaXMgY29tcG9uZW50IGlzIGdlbmVyYWxseSB1c2VkIHRvIHdyYXAgYSBjb21wb25lbnQgbGlrZVxuICogW2Jhc2ljLWNhcm91c2VsXSguLi9iYXNpYy1jYXJvdXNlbCkgb3IgdGhlIHNpbXBsZXJcbiAqIFtiYXNpYy1zbGlkaW5nLWNhcm91c2VsXSguLi9iYXNpYy1zbGlkaW5nLWNhcm91c2VsKSB0byBhZGQgc2xpZGVzaG93XG4gKiBiZWhhdmlvci4gRm9yIGEgc3RhbmRhbG9uZSBzbGlkZXNob3cgY29tcG9uZW50LCBzZWVcbiAqIFtiYXNpYy1zbGlkZXNob3ddKC4uL2Jhc2ljLXNsaWRlc2hvdykuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgICAgPGJhc2ljLXNsaWRlc2hvdy10aW1lcj5cbiAqICAgICAgIDxiYXNpYy1jYXJvdXNlbD5cbiAqICAgICAgICAgLi4uIGltYWdlcyBvciBvdGhlciBlbGVtZW50cyAuLi5cbiAqICAgICAgIDwvYmFzaWMtY2Fyb3VzZWw+XG4gKiAgICAgPC9iYXNpYy1zbGlkZXNob3ctdGltZXI+XG4gKlxuICogVGhlIGJhc2ljLXNsaWRlc2hvdy10aW1lciBjb21wb25lbnQgcHJvdmlkZXMgbm8gdmlzaWJsZSB1c2VyIGludGVyZmFjZVxuICogZWxlbWVudHMsIGFuZCBleGlzdHMgY2hpZWZseSBhcyBhIGNvbnZlbmllbmNlIGZvciB1c2UgaW4gc2NlbmFyaW9zIGxpa2UgdGhlXG4gKiBvbmUgYWJvdmUuIElmIHlvdSdyZSBkZXZlbG9waW5nIGEgY29tcG9uZW50IHRoYXQgd2lsbCBhbHdheXMgd2FudCB0byBwcm92aWRlXG4gKiBzbGlkZXNob3cgc2VtYW50aWNzLCBjb25zaWRlciBkaXJlY3RseSBhcHBseWluZyB0aGVcbiAqIFtUaW1lclNlbGVjdGlvbl0oLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9kb2NzL1RpbWVyU2VsZWN0aW9uLm1kKSBtaXhpblxuICogdG8geW91ciBjb21wb25lbnQuXG4gKlxuICogQGV4dGVuZHMgRWxlbWVudEJhc2VcbiAqL1xuY2xhc3MgU2xpZGVzaG93VGltZXIgZXh0ZW5kcyBiYXNlIHtcblxuICBnZXQgZGVmYXVsdHMoKSB7XG4gICAgbGV0IGRlZmF1bHRzID0gc3VwZXIuZGVmYXVsdHMgfHwge307XG4gICAgZGVmYXVsdHMucGxheWluZyA9IHRydWU7XG4gICAgZGVmYXVsdHMuc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb24gPSA1MDA7XG4gICAgZGVmYXVsdHMuc2VsZWN0aW9uUmVxdWlyZWQgPSB0cnVlO1xuICAgIGRlZmF1bHRzLnNlbGVjdGlvblRpbWVyRHVyYXRpb24gPSAzMDAwO1xuICAgIHJldHVybiBkZWZhdWx0cztcbiAgfVxuXG4gIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gYFxuICAgICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPHNsb3Q+PC9zbG90PlxuICAgIGA7XG4gIH1cblxufVxuXG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYmFzaWMtc2xpZGVzaG93LXRpbWVyJywgU2xpZGVzaG93VGltZXIpO1xuIiwiaW1wb3J0IEVsZW1lbnRCYXNlIGZyb20gJy4uLy4uL2Jhc2ljLWVsZW1lbnQtYmFzZS9zcmMvRWxlbWVudEJhc2UnO1xuaW1wb3J0IENvbnRlbnRBc0l0ZW1zIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NvbnRlbnRBc0l0ZW1zJztcbmltcG9ydCBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50IGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQnO1xuaW1wb3J0IEZyYWN0aW9uYWxTZWxlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRnJhY3Rpb25hbFNlbGVjdGlvbic7XG5pbXBvcnQgU2VsZWN0aW9uQW5pbWF0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NlbGVjdGlvbkFuaW1hdGlvbic7XG5pbXBvcnQgU2VsZWN0aW9uQXJpYUFjdGl2ZSBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TZWxlY3Rpb25BcmlhQWN0aXZlJztcbmltcG9ydCBTaW5nbGVTZWxlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2luZ2xlU2VsZWN0aW9uJztcbmltcG9ydCBUaW1lclNlbGVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9UaW1lclNlbGVjdGlvbic7XG5cblxubGV0IGJhc2UgPSBFbGVtZW50QmFzZS5jb21wb3NlKFxuICBDb250ZW50QXNJdGVtcyxcbiAgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCxcbiAgRnJhY3Rpb25hbFNlbGVjdGlvbixcbiAgU2VsZWN0aW9uQW5pbWF0aW9uLFxuICBTZWxlY3Rpb25BcmlhQWN0aXZlLFxuICBTaW5nbGVTZWxlY3Rpb24sXG4gIFRpbWVyU2VsZWN0aW9uXG4pO1xuXG4vKipcbiAqIFNsaWRlc2hvdyB3aXRoIGFuaW1hdGVkIHRyYW5zaXRpb25zLlxuICpcbiAqIEJ5IGRlZmF1bHQgdGhlIHNsaWRlc2hvdyB3aWxsIGltbWVkaWF0ZWx5IGJlZ2luIHBsYXlpbmcgd2hlbiBpdCBpcyBjb25uZWN0ZWRcbiAqIHRvIHRoZSBkb2N1bWVudCwgYWR2YW5jZSBldmVyeSAzMDAwIG1zICgzIHNlY29uZHMpLCBhbmQgdXNlIGEgc2ltcGxlXG4gKiBjcm9zc2ZhZGUgZWZmZWN0LlxuICpcbiAqIFRoaXMgY29tcG9uZW50IGNhbiBiZSB1c2VkIG9uIGl0cyBvd24uIFRvIGluY29ycG9yYXRlIHNsaWRlc2hvdyBiZWhhdmlvciBpbnRvXG4gKiBhIGNvbXBvbmVudCBvZiB5b3VyIG93biwgYXBwbHkgdGhlXG4gKiBbVGltZXJTZWxlY3Rpb25dKC4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvZG9jcy9UaW1lclNlbGVjdGlvbi5tZCkgbWl4aW4uIFRvXG4gKiBhZGQgc2xpZGVzaG93IGZ1bmN0aW9uYWxpdHkgdG8gYSBjb21wb25lbnQgc3VjaCBhcyBhIGNhcm91c2VsLCB3cmFwIGl0IHdpdGhcbiAqIHRoZSBhdXhpbGlhcnkgW2Jhc2ljLXNsaWRlc2hvdy10aW1lcl0oLi4vYmFzaWMtc2xpZGVzaG93LXRpbWVyKSBjb21wb25lbnQuXG4gKlxuICogQGV4dGVuZHMgRWxlbWVudEJhc2VcbiAqIEBtaXhlcyBDb250ZW50QXNJdGVtc1xuICogQG1peGVzIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnRcbiAqIEBtaXhlcyBGcmFjdGlvbmFsU2VsZWN0aW9uXG4gKiBAbWl4ZXMgU2VsZWN0aW9uQW5pbWF0aW9uXG4gKiBAbWl4ZXMgU2VsZWN0aW9uQXJpYUFjdGl2ZVxuICogQG1peGVzIFNpbmdsZVNlbGVjdGlvblxuICogQG1peGVzIFRpbWVyU2VsZWN0aW9uXG4gKi9cbmNsYXNzIFNsaWRlc2hvdyBleHRlbmRzIGJhc2Uge1xuXG4gIGdldCBkZWZhdWx0cygpIHtcbiAgICBsZXQgZGVmYXVsdHMgPSBzdXBlci5kZWZhdWx0cyB8fCB7fTtcbiAgICBkZWZhdWx0cy5wbGF5aW5nID0gdHJ1ZTtcbiAgICBkZWZhdWx0cy5zZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvbiA9IDUwMDtcbiAgICBkZWZhdWx0cy5zZWxlY3Rpb25BbmltYXRpb25FZmZlY3QgPSAnY3Jvc3NmYWRlJztcbiAgICBkZWZhdWx0cy5zZWxlY3Rpb25SZXF1aXJlZCA9IHRydWU7XG4gICAgZGVmYXVsdHMuc2VsZWN0aW9uVGltZXJEdXJhdGlvbiA9IDMwMDA7XG4gICAgZGVmYXVsdHMuc2VsZWN0aW9uV3JhcHMgPSB0cnVlO1xuICAgIHJldHVybiBkZWZhdWx0cztcbiAgfVxuXG4gIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gYFxuICAgICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgI2NvbnRhaW5lciA6OnNsb3R0ZWQoKikge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGlkPVwiY29udGFpbmVyXCIgcm9sZT1cIm5vbmVcIj5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG59XG5cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdiYXNpYy1zbGlkZXNob3cnLCBTbGlkZXNob3cpO1xuIiwiaW1wb3J0IEVsZW1lbnRCYXNlIGZyb20gJy4uLy4uL2Jhc2ljLWVsZW1lbnQtYmFzZS9zcmMvRWxlbWVudEJhc2UnO1xuaW1wb3J0IENvbnRlbnRBc0l0ZW1zIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NvbnRlbnRBc0l0ZW1zJztcbmltcG9ydCBEaXJlY3Rpb25TZWxlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlyZWN0aW9uU2VsZWN0aW9uJztcbmltcG9ydCBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50IGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQnO1xuaW1wb3J0IEZyYWN0aW9uYWxTZWxlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRnJhY3Rpb25hbFNlbGVjdGlvbic7XG5pbXBvcnQgS2V5Ym9hcmQgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvS2V5Ym9hcmQnO1xuaW1wb3J0IEtleWJvYXJkRGlyZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0tleWJvYXJkRGlyZWN0aW9uJztcbmltcG9ydCBTZWxlY3Rpb25BcmlhQWN0aXZlIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NlbGVjdGlvbkFyaWFBY3RpdmUnO1xuaW1wb3J0IFNpbmdsZVNlbGVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TaW5nbGVTZWxlY3Rpb24nO1xuaW1wb3J0IFNsaWRpbmdWaWV3cG9ydCBmcm9tICcuLi8uLi9iYXNpYy1zbGlkaW5nLXZpZXdwb3J0L3NyYy9TbGlkaW5nVmlld3BvcnQnOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcbmltcG9ydCBTd2lwZURpcmVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Td2lwZURpcmVjdGlvbic7XG5pbXBvcnQgVGFyZ2V0SW5Db2xsZWN0aXZlIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1RhcmdldEluQ29sbGVjdGl2ZSc7XG5pbXBvcnQgVHJhY2twYWREaXJlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvVHJhY2twYWREaXJlY3Rpb24nO1xuXG5sZXQgYmFzZSA9IEVsZW1lbnRCYXNlLmNvbXBvc2UoXG4gIENvbnRlbnRBc0l0ZW1zLFxuICBEaXJlY3Rpb25TZWxlY3Rpb24sXG4gIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQsXG4gIEZyYWN0aW9uYWxTZWxlY3Rpb24sXG4gIEtleWJvYXJkLFxuICBLZXlib2FyZERpcmVjdGlvbixcbiAgU2VsZWN0aW9uQXJpYUFjdGl2ZSxcbiAgU2luZ2xlU2VsZWN0aW9uLFxuICBTd2lwZURpcmVjdGlvbixcbiAgVGFyZ2V0SW5Db2xsZWN0aXZlLFxuICBUcmFja3BhZERpcmVjdGlvblxuKTtcblxuXG4vKipcbiAqIExldHMgdGhlIHVzZXIgbmF2aWdhdGUgbGF0ZXJhbGx5IHRocm91Z2ggYSBzZXF1ZW5jZSBvZiBjaGlsZCBlbGVtZW50cy5cbiAqXG4gKiBbTGl2ZSBkZW1vXShodHRwOi8vYmFzaWN3ZWJjb21wb25lbnRzLm9yZy9iYXNpYy13ZWItY29tcG9uZW50cy9wYWNrYWdlcy9iYXNpYy1jYXJvdXNlbC8pXG4gKlxuICogYmFzaWMtc2xpZGluZy1jYXJvdXNlbCBpcyBhbiBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgY2Fyb3VzZWwgdXNlciBpbnRlcmZhY2UgcGF0dGVybixcbiAqIGNvbW1vbmx5IHVzZWQgZm9yIG5hdmlnYXRpbmcgYmV0d2VlbiBpbWFnZXMsIHBhZ2VzLCBhbmQgb3RoZXIgZWxlbWVudHMuIFRoaXNcbiAqIHBhdHRlcm4gcHJlc2VudHMgdGhlIHVzZXIgd2l0aCBhIGxpbmVhciBzZXF1ZW5jZSBvZiBlbGVtZW50cywgb25seSBvbmUgb2ZcbiAqIHdoaWNoIGlzIHNob3duIGF0IGEgdGltZS4gVGhlIHVzZXIgY2FuIG5hdmlnYXRlIHRvIHRoZSBuZXh0L3ByZXZpb3VzIGVsZW1lbnRcbiAqIHdpdGggYSB2YXJpZXR5IG9mIGlucHV0IG1ldGhvZHMuXG4gKlxuICogYmFzaWMtc2xpZGluZy1jYXJvdXNlbCBpcyBhIHNpbXBsZXIgdmFyaWF0aW9uIG9mIHRoZSBtb3JlIHNvcGhpc3RpY2F0ZWRcbiAqIFtiYXNpYy1jYXJvdXNlbF0oLi4vYmFzaWMtY2Fyb3VzZWwpIGNvbXBvbmVudC4gVGhlIGxhdHRlciBpbmNsdWRlcyBzdXBwb3J0XG4gKiBmb3IgX3dyYXBwaW5nXyAoZ29pbmcgZm9yd2FyZCBmcm9tIHRoZSBsYXN0IGl0ZW0gdG8gdGhlIGZpcnN0LCBhbmQgdmljZSB2ZXJzYSksXG4gKiBhbmQgbW9yZSBjb21wbGV4IHZpc3VhbCB0cmFuc2l0aW9ucy4gVGhvc2UgdHJhbnNpdGlvbnMgZW50YWlsIHVzZSBvZiB0aGVcbiAqIFdlYiBBbmltYXRpb24gQVBJLCB3aGljaCByZXF1aXJlcyBhIHBvbHlmaWxsIGluIG9sZGVyIGJyb3dzZXJzLiBIZW5jZSwgdGhlXG4gKiBzaW1wbGVyIGJhc2ljLXNsaWRpbmctY2Fyb3VzZWwgbWF5IGJlIGEgbW9yZSBhcHByb3ByaWF0ZSBjaG9pY2UgaWYgZmFjdG9yc1xuICogc3VjaCBhcyBkb3dubG9hZCBzaXplIGFyZSBjcml0aWNhbC5cbiAqXG4gKiBCZXlvbmQgdGhvc2UgZGlmZmVyZW5jZXMsIGJhc2ljLXNsaWRpbmctY2Fyb3VzZWwgb2ZmZXJzIHRoZSBzYW1lIEFQSSwgdXNhZ2VcbiAqIHJlY29tbWVuZGF0aW9ucywgYW5kIHN1cHBvcnQgZm9yIGtleWJvYXJkL3RvdWNoL21vdXNlIGFuZCBhc3Npc3RpdmUgZGV2aWNlcy5cbiAqIFNlZSB0aGF0IGNvbXBvbmVudCBmb3IgbW9yZSBkZXRhaWxzIG9uIHVzZS5cbiAqXG4gKiBAZXh0ZW5kcyBFbGVtZW50QmFzZVxuICogQG1peGVzIENvbnRlbnRBc0l0ZW1zXG4gKiBAbWl4ZXMgRGlyZWN0aW9uU2VsZWN0aW9uXG4gKiBAbWl4ZXMgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudFxuICogQG1peGVzIEdlbmVyaWNcbiAqIEBtaXhlcyBLZXlib2FyZFxuICogQG1peGVzIEtleWJvYXJkRGlyZWN0aW9uXG4gKiBAbWl4ZXMgU2VsZWN0aW9uQXJpYUFjdGl2ZVxuICogQG1peGVzIFNpbmdsZVNlbGVjdGlvblxuICogQG1peGVzIFN3aXBlRGlyZWN0aW9uXG4gKiBAbWl4ZXMgVGFyZ2V0SW5Db2xsZWN0aXZlXG4gKiBAbWl4ZXMgVHJhY2twYWREaXJlY3Rpb25cbiAqL1xuY2xhc3MgU2xpZGluZ0Nhcm91c2VsIGV4dGVuZHMgYmFzZSB7XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKSB7IHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7IH1cbiAgICAvLyBIQUNLXG4gICAgdGhpcy5pdGVtc0NoYW5nZWQoKTtcbiAgfVxuXG4gIGdldCBkZWZhdWx0cygpIHtcbiAgICBsZXQgZGVmYXVsdHMgPSBzdXBlci5kZWZhdWx0cyB8fCB7fTtcbiAgICBkZWZhdWx0cy5uYXZpZ2F0aW9uQXhpcyA9ICdob3Jpem9udGFsJztcbiAgICBkZWZhdWx0cy5zZWxlY3Rpb25SZXF1aXJlZCA9IHRydWU7XG4gICAgcmV0dXJuIGRlZmF1bHRzO1xuICB9XG5cbiAgZ2V0IHNlbGVjdGVkRnJhY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJC52aWV3cG9ydC5zZWxlY3RlZEZyYWN0aW9uO1xuICB9XG4gIHNldCBzZWxlY3RlZEZyYWN0aW9uKHZhbHVlKSB7XG4gICAgaWYgKCdzZWxlY3RlZEZyYWN0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEZyYWN0aW9uID0gdmFsdWU7IH1cbiAgICB0aGlzLiQudmlld3BvcnQuc2VsZWN0ZWRGcmFjdGlvbiA9IHZhbHVlO1xuICAgIGxldCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnc2VsZWN0ZWQtZnJhY3Rpb24tY2hhbmdlZCcpO1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gIH1cblxuICBnZXQgc2VsZWN0ZWRJbmRleCgpIHtcbiAgICByZXR1cm4gc3VwZXIuc2VsZWN0ZWRJbmRleDtcbiAgfVxuICBzZXQgc2VsZWN0ZWRJbmRleCh2YWx1ZSkge1xuICAgIGlmICgnc2VsZWN0ZWRJbmRleCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJbmRleCA9IHZhbHVlOyB9XG4gICAgdGhpcy4kLnZpZXdwb3J0LnNlbGVjdGVkSW5kZXggPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBzZWxlY3RlZEl0ZW0oKSB7XG4gICAgcmV0dXJuIHN1cGVyLnNlbGVjdGVkSXRlbTtcbiAgfVxuICBzZXQgc2VsZWN0ZWRJdGVtKGl0ZW0pIHtcbiAgICBpZiAoJ3NlbGVjdGVkSXRlbScgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJdGVtID0gaXRlbTsgfVxuICAgIHRoaXMuJC52aWV3cG9ydC5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSB3aGV0aGVyIGEgdHJhbnNpdGlvbiBzaG91bGQgYmUgc2hvd24gZHVyaW5nIHNlbGVjdGlvbi5cbiAgICpcbiAgICogQ29tcG9uZW50cyBsaWtlIGNhcm91c2VscyBvZnRlbiBkZWZpbmUgYW5pbWF0ZWQgQ1NTIHRyYW5zaXRpb25zIGZvclxuICAgKiBzbGlkaW5nIGVmZmVjdHMuIFN1Y2ggYSB0cmFuc2l0aW9uIHNob3VsZCB1c3VhbGx5ICpub3QqIGJlIGFwcGxpZWQgd2hpbGVcbiAgICogdGhlIHVzZXIgaXMgZHJhZ2dpbmcsIGJlY2F1c2UgYSBDU1MgYW5pbWF0aW9uIHdpbGwgaW50cm9kdWNlIGEgbGFnIHRoYXRcbiAgICogbWFrZXMgdGhlIHN3aXBlIGZlZWwgc2x1Z2dpc2guIEluc3RlYWQsIGFzIGxvbmcgYXMgdGhlIHVzZXIgaXMgZHJhZ2dpbmdcbiAgICogd2l0aCB0aGVpciBmaW5nZXIgZG93biwgdGhlIHRyYW5zaXRpb24gc2hvdWxkIGJlIHN1cHByZXNzZWQuIFdoZW4gdGhlXG4gICAqIHVzZXIgcmVsZWFzZXMgdGhlaXIgZmluZ2VyLCB0aGUgdHJhbnNpdGlvbiBjYW4gYmUgcmVzdG9yZWQsIGFsbG93aW5nIHRoZVxuICAgKiBhbmltYXRpb24gdG8gc2hvdyB0aGUgY2Fyb3VzZWwgc2xpZGluZyBpbnRvIGl0cyBmaW5hbCBwb3NpdGlvbi5cbiAgICpcbiAgICogTm90ZTogVGhpcyBwcm9wZXJ0eSBpcyBvbmx5IGludGVuZGVkIHRvIGxldCBhIGNvbXBvbmVudCBjb29wZXJhdGUgd2l0aFxuICAgKiBtaXhpbnMgdGhhdCBtYXkgYmUgYXBwbGllZCB0byBpdCwgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBsZXQgc29tZW9uZVxuICAgKiB1c2luZyBjb21wb25lbnQgcGVybWFuZW50bHkgZW5hYmxlIG9yIGRpc2FibGUgdHJhbnNpdGlvbiBlZmZlY3RzLlxuICAgKlxuICAgKiBAdHlwZSB7Ym9vbGVhbn0gdHJ1ZSBpZiBhIGNvbXBvbmVudC1wcm92aWRlZCB0cmFuc2l0aW9uIHNob3VsZCBiZSBzaG93bixcbiAgICogZmFsc2UgaWYgbm90LlxuICAgKi9cbiAgZ2V0IHNob3dUcmFuc2l0aW9uKCkge1xuICAgIHJldHVybiBzdXBlci5zaG93VHJhbnNpdGlvbiB8fCB0aGlzLiQudmlld3BvcnQuc2hvd1RyYW5zaXRpb247XG4gIH1cbiAgc2V0IHNob3dUcmFuc2l0aW9uKHZhbHVlKSB7XG4gICAgaWYgKCdzaG93VHJhbnNpdGlvbicgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2hvd1RyYW5zaXRpb24gPSB2YWx1ZTsgfVxuICAgIHRoaXMuJC52aWV3cG9ydC5zaG93VHJhbnNpdGlvbiA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBgXG4gICAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIH1cblxuICAgICAgYmFzaWMtc2xpZGluZy12aWV3cG9ydCB7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLXdlYmtpdC1mbGV4OiAxO1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGJhc2ljLXNsaWRpbmctdmlld3BvcnQgaWQ9XCJ2aWV3cG9ydFwiIHJvbGU9XCJub25lXCI+XG4gICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgIDwvYmFzaWMtc2xpZGluZy12aWV3cG9ydD5cbiAgICBgO1xuICB9XG59XG5cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdiYXNpYy1zbGlkaW5nLWNhcm91c2VsJywgU2xpZGluZ0Nhcm91c2VsKTtcbmV4cG9ydCBkZWZhdWx0IFNsaWRpbmdDYXJvdXNlbDtcbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvY3JlYXRlU3ltYm9sJztcbmltcG9ydCBFbGVtZW50QmFzZSBmcm9tICcuLi8uLi9iYXNpYy1lbGVtZW50LWJhc2Uvc3JjL0VsZW1lbnRCYXNlJztcbmltcG9ydCBGcmFjdGlvbmFsU2VsZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0ZyYWN0aW9uYWxTZWxlY3Rpb24nO1xuaW1wb3J0IFNwcmVhZEl0ZW1zIGZyb20gJy4uLy4uL2Jhc2ljLXNwcmVhZC1pdGVtcy9zcmMvU3ByZWFkSXRlbXMnOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcbmltcG9ydCB0b2dnbGVDbGFzcyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy90b2dnbGVDbGFzcyc7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IHNlbGVjdGVkSXRlbVN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnc2VsZWN0ZWRJdGVtJyk7XG5cblxubGV0IGJhc2UgPSBFbGVtZW50QmFzZS5jb21wb3NlKFxuICBGcmFjdGlvbmFsU2VsZWN0aW9uXG4pO1xuXG5cbi8qKlxuICogUHJlc2VudHMgbGlzdCBpdGVtcyBpbiBhIHZpZXdwb3J0IHN1Y2ggdGhhdCBvbmx5IGEgc2luZ2xlIGl0ZW0gaXMgdmlzaWJsZSBhdFxuICogYSB0aW1lLlxuICpcbiAqIE5hdmlnYXRpbmcgYmV0d2VlbiBpdGVtcyB3aWxsIGJlIHJlcHJlc2VudGVkIHdpdGggYSBob3Jpem9udGFsIHZpc3VhbFxuICogc2xpZGluZyBlZmZlY3QuIEZvciBtb3JlIGNvbXBsZXggdmlzdWFsIGVmZmVjdHMsIHNlZVxuICogW2Jhc2ljLWFuaW1hdGlvbi1zdGFnZV0oLi4vYmFzaWMtYW5pbWF0aW9uLXN0YWdlKSwgd2hpY2ggdGFrZXMgYWR2YW50YWdlIG9mXG4gKiB0aGUgV2ViIEFuaW1hdGlvbnMgQVBJLlxuICpcbiAqIFRoaXMgY29tcG9uZW50IGhhbmRsZXMgdGhlIHJlbmRlcmluZyByZXNwb25zaWJpbGl0aWVzIGZvciB0aGUgYmFzaWMtY2Fyb3VzZWxcbiAqIGNvbXBvbmVudC5cbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBjdXJyZW50bHkgcmVxdWlyZXMgdGhhdCB5b3UgZXhwbGljaXRseSBhcHBseSBhIHNpemUgdG8gaXQuXG4gKlxuICogQGV4dGVuZHMgRWxlbWVudEJhc2VcbiAqL1xuY2xhc3MgU2xpZGluZ1ZpZXdwb3J0IGV4dGVuZHMgYmFzZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnNlbGVjdGVkRnJhY3Rpb24gPSAwO1xuICAgIHRoaXMuc2hvd1RyYW5zaXRpb24gPSB0cnVlO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKSB7IHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7IH1cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgZ2V0IGNvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuJC5zbGlkaW5nQ29udGFpbmVyLmNvbnRlbnQ7XG4gIH1cblxuICBnZXQgaXRlbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuJC5zbGlkaW5nQ29udGFpbmVyLml0ZW1zO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmIChzdXBlci5yZW5kZXIpIHsgc3VwZXIucmVuZGVyKCk7IH1cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyU2VsZWN0aW9uLmJpbmQodGhpcykpO1xuICB9XG5cbiAgZ2V0IHNlbGVjdGVkRnJhY3Rpb24oKSB7XG4gICAgcmV0dXJuIHN1cGVyLnNlbGVjdGVkRnJhY3Rpb247XG4gIH1cbiAgc2V0IHNlbGVjdGVkRnJhY3Rpb24odmFsdWUpIHtcbiAgICBpZiAoJ3NlbGVjdGVkRnJhY3Rpb24nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkRnJhY3Rpb24gPSB2YWx1ZTsgfVxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBnZXQgc2VsZWN0ZWRJbmRleCgpIHtcbiAgICBsZXQgaXRlbXMgPSB0aGlzLml0ZW1zO1xuICAgIGxldCBzZWxlY3RlZEl0ZW0gPSB0aGlzLnNlbGVjdGVkSXRlbTtcbiAgICByZXR1cm4gaXRlbXMgJiYgc2VsZWN0ZWRJdGVtID9cbiAgICAgIGl0ZW1zLmluZGV4T2Yoc2VsZWN0ZWRJdGVtKSA6XG4gICAgICAtMTtcbiAgfVxuICBzZXQgc2VsZWN0ZWRJbmRleChpbmRleCkge1xuICAgIGlmICgnc2VsZWN0ZWRJbmRleCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJbmRleCA9IGluZGV4OyB9XG4gICAgbGV0IGl0ZW0gPSB0aGlzLml0ZW1zICYmIHRoaXMuaXRlbXNbaW5kZXhdO1xuICAgIGlmIChpdGVtKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IGl0ZW07XG4gICAgfVxuICB9XG5cbiAgZ2V0IHNlbGVjdGVkSXRlbSgpIHtcbiAgICByZXR1cm4gdGhpc1tzZWxlY3RlZEl0ZW1TeW1ib2xdO1xuICB9XG4gIHNldCBzZWxlY3RlZEl0ZW0oaXRlbSkge1xuICAgIGlmICgnc2VsZWN0ZWRJdGVtJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEl0ZW0gPSBpdGVtOyB9XG4gICAgdGhpc1tzZWxlY3RlZEl0ZW1TeW1ib2xdID0gaXRlbTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgZ2V0IHNob3dUcmFuc2l0aW9uKCkge1xuICAgIHJldHVybiBzdXBlci5zaG93VHJhbnNpdGlvbiB8fCB0aGlzLmNsYXNzTGlzdC5jb250YWlucygnc2hvd1RyYW5zaXRpb24nKTtcbiAgfVxuICBzZXQgc2hvd1RyYW5zaXRpb24odmFsdWUpIHtcbiAgICBpZiAoJ3Nob3dUcmFuc2l0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zaG93VHJhbnNpdGlvbiA9IHZhbHVlOyB9XG4gICAgdG9nZ2xlQ2xhc3ModGhpcywgJ3Nob3dUcmFuc2l0aW9uJywgdmFsdWUpO1xuICB9XG5cbiAgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBgXG4gICAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgICNzbGlkaW5nQ29udGFpbmVyIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIC8qXG4gICAgICAgICBTZXQgd2lkdGggZm9yIElFL0VkZ2UuIEl0J3Mgbm90IGNsZWFyIHdoeSB0aGV5IG5lZWQgdGhpcywgYW5kIHRoZSBvdGhlclxuICAgICAgICAgYnJvd3NlcnMgZG9uJ3QuXG4gICAgICAgICAqL1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoLnNob3dUcmFuc2l0aW9uKSAjc2xpZGluZ0NvbnRhaW5lciB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4ycyBlYXNlLW91dDtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1vdXQ7XG4gICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8YmFzaWMtc3ByZWFkLWl0ZW1zIGlkPVwic2xpZGluZ0NvbnRhaW5lclwiIHJvbGU9XCJub25lXCI+XG4gICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgIDwvYmFzaWMtc3ByZWFkLWl0ZW1zPlxuICAgIGA7XG4gIH1cblxufVxuXG5cbi8vIE5vdGU6IEluIHRoaXMgcm91dGluZSwgXCJ0aGlzXCIgaXMgYm91bmQgdG8gYW4gZWxlbWVudCBpbnN0YW5jZS5cbmZ1bmN0aW9uIHJlbmRlclNlbGVjdGlvbigpIHtcbiAgaWYgKCF0aGlzLnNlbGVjdGVkSXRlbSkge1xuICAgIHJldHVybjtcbiAgfVxuICBsZXQgc2VsZWN0aW9uID0gRnJhY3Rpb25hbFNlbGVjdGlvbi5oZWxwZXJzLmVsZW1lbnRTZWxlY3Rpb24odGhpcyk7XG4gIGxldCBpdGVtQ291bnQgPSB0aGlzLml0ZW1zID8gdGhpcy5pdGVtcy5sZW5ndGggOiAwO1xuICBsZXQgZGFtcGVkID0gRnJhY3Rpb25hbFNlbGVjdGlvbi5oZWxwZXJzLmRhbXBlZFNlbGVjdGlvbihzZWxlY3Rpb24sIGl0ZW1Db3VudCk7XG4gIC8vIFVzZSBhIHBlcmNlbnRhZ2Ugc28gdGhlIHRyYW5zZm9ybSB3aWxsIHN0aWxsIHdvcmsgaWYgc2NyZWVuIHNpemUgY2hhbmdlc1xuICAvLyAoZS5nLiwgaWYgZGV2aWNlIG9yaWVudGF0aW9uIGNoYW5nZXMpLlxuICBsZXQgbGVmdCA9IC1kYW1wZWQgKiAxMDA7XG4gIGxldCB0cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgnICsgbGVmdCArICclKSc7XG4gIHRoaXMuJC5zbGlkaW5nQ29udGFpbmVyLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgdGhpcy4kLnNsaWRpbmdDb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xufVxuXG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYmFzaWMtc2xpZGluZy12aWV3cG9ydCcsIFNsaWRpbmdWaWV3cG9ydCk7XG5leHBvcnQgZGVmYXVsdCBTbGlkaW5nVmlld3BvcnQ7XG4iLCJpbXBvcnQgRWxlbWVudEJhc2UgZnJvbSAnLi4vLi4vYmFzaWMtZWxlbWVudC1iYXNlL3NyYy9FbGVtZW50QmFzZSc7XG5pbXBvcnQgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50JztcblxuXG4vKipcbiAqIFNwcmVhZHMgb3V0IGEgc2V0IG9mIGl0ZW1zIGhvcml6b250YWxseSBzbyB0aGV5IHRha2UgZXF1YWwgc3BhY2UuXG4gKlxuICogW0xpdmUgZGVtb10oaHR0cDovL2Jhc2ljd2ViY29tcG9uZW50cy5vcmcvYmFzaWMtd2ViLWNvbXBvbmVudHMvcGFja2FnZXMvYmFzaWMtc3ByZWFkLWl0ZW1zLylcbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBpcyB1c2VkLCBmb3IgZXhhbXBsZSwgYnkgdGhlIGJhc2ljLXNsaWRpbmctdmlld3BvcnQgY29tcG9uZW50XG4gKiB0byBlbnN1cmUgdGhhdCBjaGlsZHJlbiBvZiBkaWZmZXJlbnQgc2l6ZSB3aWxsIHRha2UgdXAgdGhlIHNhbWUgYW1vdW50IG9mXG4gKiBob3Jpem9udGFsIHNwYWNlLlxuICpcbiAqIFRoaXMgY29tcG9uZW50IGN1cnJlbnRseSByZXF1aXJlcyBhbiBleHBsaWNpdCBzaXplIGJ5IGFwcGxpZWQgdG8gaXQuXG4gKlxuICogQGV4dGVuZHMgRWxlbWVudEJhc2VcbiAqIEBtaXhlcyBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50XG4gKi9cbmNsYXNzIFNwcmVhZEl0ZW1zIGV4dGVuZHMgRWxlbWVudEJhc2UuY29tcG9zZShcbiAgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudFxuKSB7XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKSB7IHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7IH1cbiAgICAvLyBIQUNLXG4gICAgdGhpcy5pdGVtc0NoYW5nZWQoKTtcbiAgfVxuXG4gIGdldCBpdGVtcygpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG5cbiAgLy8gVE9ETzogU2hvdWxkIGFsc28gaGFuZGxlIGNvbnRlbnRDaGFuZ2VkKCksIGJ1dCBuZWVkIHRvIHJhdGlvbmFsaXplIHdpdGhcbiAgLy8gaW52b2NhdGlvbiBvZiBpdGVtc0NoYW5nZWQgaW4gY29ubmVjdGVkQ2FsbGJhY2suXG4gIGl0ZW1zQ2hhbmdlZCgpIHtcbiAgICBpZiAoc3VwZXIuaXRlbXNDaGFuZ2VkKSB7IHN1cGVyLml0ZW1zQ2hhbmdlZCgpOyB9XG4gICAgbGV0IGl0ZW1zID0gdGhpcy5pdGVtcztcbiAgICBsZXQgY291bnQgPSBpdGVtcy5sZW5ndGg7XG4gICAgdGhpcy4kLnNwcmVhZENvbnRhaW5lci5zdHlsZS53aWR0aCA9IChjb3VudCAqIDEwMCkgKyAnJSc7XG4gICAgbGV0IGl0ZW1XaWR0aCA9ICgxMDAgLyBjb3VudCkgKyBcIiVcIjtcbiAgICBbXS5mb3JFYWNoLmNhbGwoaXRlbXMsIGl0ZW0gPT4ge1xuICAgICAgaXRlbS5zdHlsZS53aWR0aCA9IGl0ZW1XaWR0aDtcbiAgICB9KTtcbiAgfVxuXG4gIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gYFxuICAgICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgI3NwcmVhZENvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgICNzcHJlYWRDb250YWluZXIgOjpzbG90dGVkKCopIHtcbiAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgICAgb2JqZWN0LWZpdDogdmFyKC0tYmFzaWMtaXRlbS1vYmplY3QtZml0LCBjb250YWluKTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcbiAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgaWQ9XCJzcHJlYWRDb250YWluZXJcIj5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG59XG5cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdiYXNpYy1zcHJlYWQtaXRlbXMnLCBTcHJlYWRJdGVtcyk7XG5leHBvcnQgZGVmYXVsdCBTcHJlYWRJdGVtcztcbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvY3JlYXRlU3ltYm9sJztcbmltcG9ydCBFbGVtZW50QmFzZSBmcm9tICcuLi8uLi9iYXNpYy1lbGVtZW50LWJhc2Uvc3JjL0VsZW1lbnRCYXNlJztcbmltcG9ydCBDb250ZW50Rmlyc3RDaGlsZFRhcmdldCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Db250ZW50Rmlyc3RDaGlsZFRhcmdldCc7XG5pbXBvcnQgRGlyZWN0aW9uU2VsZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0RpcmVjdGlvblNlbGVjdGlvbic7XG5pbXBvcnQgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50JztcbmltcG9ydCBHZW5lcmljIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0dlbmVyaWMnO1xuaW1wb3J0IEtleWJvYXJkRGlyZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0tleWJvYXJkRGlyZWN0aW9uJztcbmltcG9ydCByZW5kZXJBcnJheUFzRWxlbWVudHMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvcmVuZGVyQXJyYXlBc0VsZW1lbnRzJztcbmltcG9ydCBTaW5nbGVTZWxlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2luZ2xlU2VsZWN0aW9uJztcbmltcG9ydCBUYXJnZXRTZWxlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvVGFyZ2V0U2VsZWN0aW9uJztcbmltcG9ydCB0b2dnbGVDbGFzcyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy90b2dnbGVDbGFzcyc7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IHRhYlBvc2l0aW9uU3ltYm9sID0gY3JlYXRlU3ltYm9sKCd0YWJQb3NpdGlvbicpO1xuXG5cbi8vIFVzZWQgdG8gYXNzaWduIHVuaXF1ZSBJRHMgdG8gdGFicyBmb3IgQVJJQSBwdXJwb3Nlcy5cbmxldCBpZENvdW50ID0gMDtcblxuXG5sZXQgYmFzZSA9IEVsZW1lbnRCYXNlLmNvbXBvc2UoXG4gIENvbnRlbnRGaXJzdENoaWxkVGFyZ2V0LFxuICBEaXJlY3Rpb25TZWxlY3Rpb24sXG4gIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQsXG4gIEdlbmVyaWMsXG4gIEtleWJvYXJkRGlyZWN0aW9uLFxuICBTaW5nbGVTZWxlY3Rpb24sXG4gIFRhcmdldFNlbGVjdGlvblxuKTtcblxuXG4vKipcbiAqIEEgc3RyaXAgb2YgdGFicyBmb3Igc2VsZWN0aW5nIG9uZSBvZiB0aGUgY29tcG9uZW50J3MgY2hpbGRyZW4uXG4gKlxuICogVGhlIGNvbXBvbmVudCBjcmVhdGVzIGEgdGFiIHRvIHJlcHJlc2VudCBlYWNoIG9mIGl0cyBsaWdodCBET00gY2hpbGRyZW4uXG4gKiBUaGUgdGFiIG5hbWUgaXMgb2J0YWluZWQgYnkgZXhhbWluaW5nIHRoZSBjaGlsZHJlbiBmb3IgYW4gYGFyaWEtbGFiZWxgXG4gKiBwcm9wZXJ0eS5cbiAqXG4gKiBVc2UgdGFicyB3aGVuIHlvdSB3YW50IHRvIHByb3ZpZGUgYSBsYXJnZSBzZXQgb2Ygb3B0aW9ucyBvciBlbGVtZW50cyB0aGFuXG4gKiBjYW4gY29tZm9ydGFibHkgZml0IGlubGluZSwgdGhlIG9wdGlvbnMgY2FuIGJlIGNvaGVyZW50bHkgZ3JvdXBlZCBpbnRvIHBhZ2VzLFxuICogYW5kIHlvdSB3YW50IHRvIGF2b2lkIG1ha2luZyB0aGUgdXNlciBuYXZpZ2F0ZSB0byBhIHNlcGFyYXRlIHBhZ2UuIFRhYnMgd29ya1xuICogYmVzdCBpZiB5b3Ugb25seSBoYXZlIGEgc21hbGwgaGFuZGZ1bCBvZiBwYWdlcywgc2F5IDLigJM3LlxuICpcbiAqIFRoZSBiYXNpYy10YWItc3RyaXAgY29tcG9uZW50IGRvZXMgbm90IGRlZmluZSBob3cgYSBzZWxlY3RlZCBjaGlsZCBpc1xuICogcmVwcmVzZW50ZWQuIElmIHlvdSdyZSBsb29raW5nIGZvciB0aGUgc3RhbmRhcmQgYmVoYXZpb3Igb2YganVzdCBzaG93aW5nIG9ubHlcbiAqIHRoZSBzZWxlY3RlZCBjaGlsZCwgeW91IGNhbiB1c2UgdGhpcyBjb21wb25lbnQgaW4gY29tYmluYXRpb24gd2l0aCB0aGVcbiAqIHNlcGFyYXRlIFtiYXNpYy1tb2Rlc10oLi4vYmFzaWMtbW9kZXMvKSBjb21wb25lbnQuIEEgdHlwaWNhbCBhcnJhbmdlbWVudDpcbiAqXG4gKiAgICAgPGJhc2ljLXRhYi1zdHJpcD5cbiAqICAgICAgIDxiYXNpYy1tb2RlcyBhcmlhLWxhYmVsPVwiUGFuZWxzXCI+XG4gKiAgICAgICAgIDxkaXYgYXJpYS1sYWJlbD1cIk9uZVwiPlBhZ2Ugb25lPC9kaXY+XG4gKiAgICAgICAgIDxkaXYgYXJpYS1sYWJlbD1cIlR3b1wiPlBhZ2UgdHdvPC9kaXY+XG4gKiAgICAgICAgIDxkaXYgYXJpYS1sYWJlbD1cIlRocmVlXCI+UGFnZSB0aHJlZTwvZGl2PlxuICogICAgICAgPC9iYXNpYy1tb2Rlcz5cbiAqICAgICA8L2Jhc2ljLXRhYi1zdHJpcD5cbiAqXG4gKiBUaGUgYWJvdmUgY29tYmluYXRpb24gaXMgc28gY29tbW9uIGl0IGlzIHByb3ZpZGVkIGFzIGEgc2luZ2xlIGNvbXBvbmVudCxcbiAqIFtiYXNpYy10YWJzXSguLi9iYXNpYy10YWJzLykuXG4gKlxuICogVGhlIHVzZXIgY2FuIHNlbGVjdCBhIHRhYiB3aXRoIHRoZSBtb3VzZSBvciB0b3VjaCwgYXMgd2VsbCBhcyBieSB0aHJvdWdoIHRoZVxuICoga2V5Ym9hcmQuIEVhY2ggdGFiIGFwcGVhcnMgYXMgYSBzZXBhcmF0ZSBidXR0b24gaW4gdGhlIHRhYiBvcmRlci5cbiAqIEFkZGl0aW9uYWxseSwgaWYgdGhlIGZvY3VzIGlzIGN1cnJlbnRseSBvbiBhIHRhYiwgdGhlIHVzZXIgY2FuIHF1aWNrbHlcbiAqIG5hdmlnYXRlIGJldHdlZW4gdGFicyB3aXRoIHRoZSBsZWZ0L3JpZ2h0IGFycm93IGtleXMgKG9yLCBpZiB0aGUgdGFicyBhcmVcbiAqIGluIHZlcnRpY2FsIHBvc2l0aW9uLCB0aGUgdXAvZG93biBhcnJvdyBrZXlzKS5cbiAqXG4gKiBCeSBkZWZhdWx0LCB0aGUgdGFicyBhcmUgc2hvd24gZ3JvdXBlZCB0byB0aGUgbGVmdCwgd2hlcmUgZWFjaCB0YWIgaXMgb25seVxuICogYXMgYmlnIGFzIG5lY2Vzc2FyeS4gWW91IGNhbiBhcHBseSB0aGUgYHNwcmVhZGAgQ1NTIGNsYXNzIHRvIGFcbiAqIGJhc2ljLXRhYi1zdHJpcCBlbGVtZW50IGZvciBhIHZhcmlhbnQgYXBwZWFyYW5jZSBpbiB3aGljaCB0aGUgYXZhaWxhYmxlIHdpZHRoXG4gKiBvZiB0aGUgZWxlbWVudCBpcyBkaXZpZGVkIHVwIGVxdWFsbHkgYW1vbmcgdGFicy5cbiAqXG4gKiBUaGUgZ2VuZXJpYyBkZWZhdWx0IHN0eWxpbmcgb2YgdGhlIHRhYiBzdHJpcCB3aWxsIHByZXNlbnQgdGhlIGNsYXNzaWNcbiAqIHNrZXVtb3JwaGljIGxvb2sgb2Ygcm91bmRlZCB0YWJzIGF0dGFjaGVkIHRvIGEgc3VyZmFjZS4gWW91IGNhbiByZW1vdmUgdGhpc1xuICogc3R5bGluZyBieSBzZXR0aW5nIHRoZSBgZ2VuZXJpY2AgcHJvcGVydHkvYXR0cmlidXRlIHRvIGZhbHNlLlxuICpcbiAqIEBleHRlbmRzIEVsZW1lbnRCYXNlXG4gKiBAbWl4ZXMgQ29udGVudEZpcnN0Q2hpbGRUYXJnZXRcbiAqIEBtaXhlcyBEaXJlY3Rpb25TZWxlY3Rpb25cbiAqIEBtaXhlcyBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50XG4gKiBAbWl4ZXMgR2VuZXJpY1xuICogQG1peGVzIEtleWJvYXJkRGlyZWN0aW9uXG4gKiBAbWl4ZXMgU2luZ2xlU2VsZWN0aW9uXG4gKiBAbWl4ZXMgVGFyZ2V0U2VsZWN0aW9uXG4gKi9cbmNsYXNzIFRhYlN0cmlwIGV4dGVuZHMgYmFzZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuJC50YWJzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgbGV0IHRhYiA9IGV2ZW50LnRhcmdldDtcbiAgICAgIGxldCB0YWJJbmRleCA9IHRoaXMudGFicy5pbmRleE9mKHRhYik7XG4gICAgICBpZiAodGFiSW5kZXggPj0gMCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSB0YWJJbmRleDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIExpc3RlbiB0byBrZXlkb3duIGV2ZW50cyBvbiB0aGUgdGFicywgbm90IG9uIHBhZ2VzLlxuICAgIHRoaXMuJC50YWJzLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBldmVudCA9PiB7XG4gICAgICBsZXQgaGFuZGxlZCA9IHRoaXMua2V5ZG93bihldmVudCk7XG4gICAgICBpZiAoaGFuZGxlZCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICghdGhpcy5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSkge1xuICAgICAgLy8gQXNzaWduIGEgZGVmYXVsdCBBUklBIHJvbGUuXG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgncm9sZScsICd0YWJsaXN0Jyk7XG4gICAgfVxuXG4gICAgLy8gU2V0IGRlZmF1bHRzLlxuICAgIGlmICh0eXBlb2YgdGhpcy50YWJQb3NpdGlvbiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMudGFiUG9zaXRpb24gPSB0aGlzLmRlZmF1bHRzLnRhYlBvc2l0aW9uO1xuICAgIH1cbiAgfVxuXG4gIGFwcGx5U2VsZWN0aW9uKGl0ZW0sIHNlbGVjdGVkKSB7XG4gICAgaWYgKHN1cGVyLmFwcGx5U2VsZWN0aW9uKSB7IHN1cGVyLmFwcGx5U2VsZWN0aW9uKGl0ZW0sIHNlbGVjdGVkKTsgfVxuICAgIGxldCBpbmRleCA9IHRoaXMuaXRlbXMuaW5kZXhPZihpdGVtKTtcbiAgICAvLyBTZWUgaWYgdGhlIGNvcnJlc3BvbmRpbmcgdGFiIGhhcyBhbHJlYWR5IGJlZW4gY3JlYXRlZC5cbiAgICAvLyBJZiBub3QsIHRoZSBjb3JyZWN0IHRhYiB3aWxsIGJlIHNlbGVjdGVkIHdoZW4gaXQgZ2V0cyBjcmVhdGVkLlxuICAgIGxldCB0YWJzID0gdGhpcy50YWJzO1xuICAgIGlmICh0YWJzICYmIHRhYnMubGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIGxldCB0YWIgPSB0aGlzLnRhYnNbaW5kZXhdO1xuICAgICAgaWYgKHRhYikge1xuICAgICAgICBhcHBseVNlbGVjdGlvblRvVGFiKHRhYiwgc2VsZWN0ZWQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldCBkZWZhdWx0cygpIHtcbiAgICBsZXQgZGVmYXVsdHMgPSBzdXBlci5kZWZhdWx0cyB8fCB7fTtcbiAgICBkZWZhdWx0cy50YWJQb3NpdGlvbiA9ICd0b3AnO1xuICAgIHJldHVybiBkZWZhdWx0cztcbiAgfVxuXG4gIGdldCB0YWJzKCkge1xuICAgIHJldHVybiBbXS5zbGljZS5jYWxsKHRoaXMuJC50YWJzLnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWInKSk7XG4gIH1cblxuICBpdGVtc0NoYW5nZWQoKSB7XG4gICAgaWYgKHN1cGVyLml0ZW1zQ2hhbmdlZCkgeyBzdXBlci5pdGVtc0NoYW5nZWQoKTsgfVxuXG4gICAgbGV0IGJhc2VJZCA9IHRoaXMuaWQgP1xuICAgICAgXCJfXCIgKyB0aGlzLmlkICsgXCJQYW5lbFwiIDpcbiAgICAgIFwiX3BhbmVsXCI7XG5cbiAgICAvLyBDb25maXJtIHRoYXQgaXRlbXMgaGF2ZSBhdCBsZWFzdCBhIGRlZmF1bHQgcm9sZSBhbmQgSUQgZm9yIEFSSUEgcHVycG9zZXMuXG4gICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaWYgKCFpdGVtLmdldEF0dHJpYnV0ZSgncm9sZScpKSB7XG4gICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdyb2xlJywgJ3RhYnBhbmVsJyk7XG4gICAgICB9XG4gICAgICBpZiAoIWl0ZW0uaWQpIHtcbiAgICAgICAgaXRlbS5pZCA9IGJhc2VJZCArIGlkQ291bnQrKztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIENyZWF0ZSB0YWJzLlxuICAgIHJlbmRlckFycmF5QXNFbGVtZW50cyh0aGlzLml0ZW1zLCB0aGlzLiQudGFicywgKGl0ZW0sIGVsZW1lbnQpID0+IHtcbiAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3R5bGUtc2NvcGUnKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdiYXNpYy10YWItc3RyaXAnKTtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAndGFiJyk7XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgfVxuICAgICAgZWxlbWVudC5pZCA9IGl0ZW0uaWQgKyAnX3RhYic7XG4gICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gaXRlbS5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKTtcblxuICAgICAgLy8gUG9pbnQgdGFiIGFuZCBwYW5lbCBhdCBlYWNoIG90aGVyLlxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtY29udHJvbHMnLCBpdGVtLmlkKTtcbiAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsbGVkYnknLCBlbGVtZW50LmlkKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc2VsZWN0ZWRJdGVtQ2hhbmdlZCgpOyAgLy8gSW4gY2FzZSBwb3NpdGlvbiBvZiBzZWxlY3RlZCBpdGVtIG1vdmVkLlxuICB9XG5cbiAga2V5ZG93bihldmVudCkge1xuICAgIGxldCBoYW5kbGVkID0gc3VwZXIua2V5ZG93bihldmVudCk7XG4gICAgaWYgKGhhbmRsZWQpIHtcbiAgICAgIC8vIElmIHRoZSBldmVudCByZXN1bHRlZCBpbiBhIGNoYW5nZSBvZiBzZWxlY3Rpb24sIG1vdmUgdGhlIGZvY3VzIHRvIHRoZVxuICAgICAgLy8gbmV3bHktc2VsZWN0ZWQgdGFiLlxuICAgICAgdGhpcy50YWJzW3RoaXMuc2VsZWN0ZWRJbmRleF0uZm9jdXMoKTtcbiAgICB9XG4gICAgcmV0dXJuIGhhbmRsZWQ7XG4gIH1cblxuICBzZWxlY3RlZEl0ZW1DaGFuZ2VkKCkge1xuICAgIGlmIChzdXBlci5zZWxlY3RlZEl0ZW1DaGFuZ2VkKSB7IHN1cGVyLnNlbGVjdGVkSXRlbUNoYW5nZWQoKTsgfVxuICAgIGxldCBzZWxlY3RlZEluZGV4ID0gdGhpcy5zZWxlY3RlZEluZGV4O1xuICAgIHRoaXMudGFicy5mb3JFYWNoKCh0YWIsIGkpID0+IHtcbiAgICAgIGFwcGx5U2VsZWN0aW9uVG9UYWIodGFiLCBpID09PSBzZWxlY3RlZEluZGV4KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgcG9zaXRpb24gb2YgdGhlIHRhYiBzdHJpcCByZWxhdGl2ZSB0byB0aGUgZWxlbWVudCdzIGNoaWxkcmVuLiBWYWxpZFxuICAgKiB2YWx1ZXMgYXJlIFwidG9wXCIsIFwibGVmdFwiLCBcInJpZ2h0XCIsIGFuZCBcImJvdHRvbVwiLlxuICAgKlxuICAgKiBAZGVmYXVsdCBcInRvcFwiXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgdGFiUG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXNbdGFiUG9zaXRpb25TeW1ib2xdO1xuICB9XG4gIHNldCB0YWJQb3NpdGlvbihwb3NpdGlvbikge1xuICAgIHRoaXNbdGFiUG9zaXRpb25TeW1ib2xdID0gcG9zaXRpb247XG5cbiAgICBpZiAodGhpcy5nZXRBdHRyaWJ1dGUoJ3RhYi1wb3NpdGlvbicpICE9PSBwb3NpdGlvbikge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3RhYi1wb3NpdGlvbicsIHBvc2l0aW9uKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBQaHlzaWNhbGx5IHJlb3JkZXIgdGhlIHRhYnMgYW5kIHBhZ2VzIHRvIHJlZmxlY3QgdGhlIGRlc2lyZWQgYXJyYW5nZW1lbnQuXG4gICAgLy8gV2UgY291bGQgY2hhbmdlIHRoZSB2aXN1YWwgYXBwZWFyYW5jZSBieSByZXZlcnNpbmcgdGhlIG9yZGVyIG9mIHRoZSBmbGV4XG4gICAgLy8gYm94LCBidXQgdGhlbiB0aGUgdmlzdWFsIG9yZGVyIHdvdWxkbid0IHJlZmxlY3QgdGhlIGRvY3VtZW50IG9yZGVyLCB3aGljaFxuICAgIC8vIGRldGVybWluZXMgZm9jdXMgb3JkZXIuIFRoYXQgd291bGQgc3VycHJpc2UgYSB1c2VyIHRyeWluZyB0byB0YWIgdGhyb3VnaFxuICAgIC8vIHRoZSBjb250cm9scy5cbiAgICBsZXQgZmlyc3RFbGVtZW50ID0gKHBvc2l0aW9uID09PSAndG9wJyB8fCBwb3NpdGlvbiA9PT0gJ2xlZnQnKSA/XG4gICAgICB0aGlzLiQudGFicyA6XG4gICAgICB0aGlzLiQucGFnZXM7XG4gICAgbGV0IGxhc3RFbGVtZW50ID0gKHBvc2l0aW9uID09PSAndG9wJyB8fCBwb3NpdGlvbiA9PT0gJ2xlZnQnKSA/XG4gICAgICB0aGlzLiQucGFnZXMgOlxuICAgICAgdGhpcy4kLnRhYnM7XG4gICAgaWYgKGZpcnN0RWxlbWVudC5uZXh0U2libGluZyAhPT0gbGFzdEVsZW1lbnQpIHtcbiAgICAgIHRoaXMuc2hhZG93Um9vdC5pbnNlcnRCZWZvcmUoZmlyc3RFbGVtZW50LCBsYXN0RWxlbWVudCk7XG4gICAgfVxuXG4gICAgdGhpcy5uYXZpZ2F0aW9uQXhpcyA9IChwb3NpdGlvbiA9PT0gJ3RvcCcgfHwgcG9zaXRpb24gPT09ICdib3R0b20nKSA/XG4gICAgICAnaG9yaXpvbnRhbCcgOlxuICAgICAgJ3ZlcnRpY2FsJztcbiAgfVxuXG4gIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gYFxuICAgICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICAvKlxuICAgICAgICogQXZvaWQgaGF2aW5nIHRhYiBjb250YWluZXIgc3RyZXRjaCBhY3Jvc3MuIFVzZXIgd29uJ3QgYmUgYWJsZSB0byBzZWVcbiAgICAgICAqIGl0LCBidXQgc2luY2UgaXQgaGFuZGxlcyB0aGUga2V5Ym9hcmQsIGluIE1vYmlsZSBTYWZhcmkgYSB0YXAgb24gdGhlXG4gICAgICAgKiBjb250YWluZXIgYmFja2dyb3VuZCB3aWxsIGNhdXNlIHRoZSByZWdpb24gdG8gZmxhc2guIEFsaWduaW5nIHRoZVxuICAgICAgICogcmVnaW9uIGNvbGxhcHNlcyBpdCBkb3duIHRvIGhvbGQgaXRzIGNvbnRlbnRzLlxuICAgICAgICovXG4gICAgICAjdGFicyB7XG4gICAgICAgIC8qIEZvciBJRSBidWcgKGNsaWNraW5nIHRhYiBwcm9kdWNlcyBnYXAgYmV0d2VlbiB0YWIgYW5kIHBhZ2UpLiAqL1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC8qXG4gICAgICAgICAqIFRyeSB0byBvYnRhaW4gZmFzdC10YXAgYmVoYXZpb3Igb24gYWxsIHRhYnMuXG4gICAgICAgICAqIFNlZSBodHRwczovL3dlYmtpdC5vcmcvYmxvZy81NjEwL21vcmUtcmVzcG9uc2l2ZS10YXBwaW5nLW9uLWlvcy8uXG4gICAgICAgICAqL1xuICAgICAgICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbiAgICAgIH1cbiAgICAgIDpob3N0KDpub3QoLnNwcmVhZCkpICN0YWJzIHtcbiAgICAgICAgLXdlYmtpdC1hbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgfVxuXG4gICAgICAjcGFnZXMge1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC13ZWJraXQtZmxleDogMTtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgfVxuXG4gICAgICAjcGFnZXMgOjpzbG90dGVkKCopIHtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAtd2Via2l0LWZsZXg6IDE7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICB9XG5cbiAgICAgIC50YWIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICAvKiBMZWZ0L3JpZ2h0IHBvc2l0aW9ucyAqL1xuICAgICAgOmhvc3QoW3RhYi1wb3NpdGlvbj1cImxlZnRcIl0pLFxuICAgICAgOmhvc3QoW3RhYi1wb3NpdGlvbj1cInJpZ2h0XCJdKSB7XG4gICAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIH1cbiAgICAgIDpob3N0KFt0YWItcG9zaXRpb249XCJsZWZ0XCJdKSAjdGFicyxcbiAgICAgIDpob3N0KFt0YWItcG9zaXRpb249XCJyaWdodFwiXSkgI3RhYnMge1xuICAgICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB9XG5cbiAgICAgIC8qIFNwcmVhZCB2YXJpYW50ICovXG4gICAgICA6aG9zdCguc3ByZWFkKSAjdGFicyB7XG4gICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICAgfVxuICAgICAgOmhvc3QoLnNwcmVhZCkgLnRhYiB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICB9XG5cbiAgICAgIC8qIEdlbmVyaWMgc3R5bGUgKi9cbiAgICAgIDpob3N0KFtnZW5lcmljPVwiXCJdKSAjcGFnZXMge1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2dlbmVyaWM9XCJcIl0pIC50YWIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwLjVlbSAwLjc1ZW07XG4gICAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjI1cztcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2dlbmVyaWM9XCJcIl0pIC50YWIuc2VsZWN0ZWQge1xuICAgICAgICBib3JkZXItY29sb3I6ICNjY2M7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtnZW5lcmljPVwiXCJdKSAudGFiOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICAgIH1cblxuICAgICAgLyogR2VuZXJpYywgdG9wL2JvdHRvbSBwb3NpdGlvbnMgKi9cbiAgICAgIDpob3N0KFtnZW5lcmljPVwiXCJdW3RhYi1wb3NpdGlvbj1cInRvcFwiXSkgLnRhYjpub3QoOmxhc3QtY2hpbGQpLFxuICAgICAgOmhvc3QoW2dlbmVyaWM9XCJcIl1bdGFiLXBvc2l0aW9uPVwiYm90dG9tXCJdKSAudGFiOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuMmVtO1xuICAgICAgfVxuXG4gICAgICAvKiBHZW5lcmljLCB0b3AgcG9zaXRpb24gKi9cbiAgICAgIDpob3N0KFtnZW5lcmljPVwiXCJdW3RhYi1wb3NpdGlvbj1cInRvcFwiXSkgLnRhYiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVlbSAwLjI1ZW0gMCAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xuICAgICAgfVxuICAgICAgOmhvc3QoW2dlbmVyaWM9XCJcIl1bdGFiLXBvc2l0aW9uPVwidG9wXCJdKSAudGFiLnNlbGVjdGVkIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG5cbiAgICAgIC8qIEdlbmVyaWMsIGJvdHRvbSBwb3NpdGlvbiAqL1xuICAgICAgOmhvc3QoW2dlbmVyaWM9XCJcIl1bdGFiLXBvc2l0aW9uPVwiYm90dG9tXCJdKSAudGFiIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDAuMjVlbSAwLjI1ZW07XG4gICAgICAgIG1hcmdpbi10b3A6IC0xcHg7XG4gICAgICB9XG4gICAgICA6aG9zdChbZ2VuZXJpYz1cIlwiXVt0YWItcG9zaXRpb249XCJib3R0b21cIl0pIC50YWIuc2VsZWN0ZWQge1xuICAgICAgICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cblxuICAgICAgLyogR2VuZXJpYywgbGVmdC9yaWdodCBwb3NpdGlvbnMgKi9cbiAgICAgIDpob3N0KFtnZW5lcmljPVwiXCJdW3RhYi1wb3NpdGlvbj1cImxlZnRcIl0pIC50YWI6bm90KDpsYXN0LWNoaWxkKSxcbiAgICAgIDpob3N0KFtnZW5lcmljPVwiXCJdW3RhYi1wb3NpdGlvbj1cInJpZ2h0XCJdKSAudGFiOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjJlbTtcbiAgICAgIH1cblxuICAgICAgLyogR2VuZXJpYywgbGVmdCBwb3NpdGlvbiAqL1xuICAgICAgOmhvc3QoW2dlbmVyaWM9XCJcIl1bdGFiLXBvc2l0aW9uPVwibGVmdFwiXSkgLnRhYiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVlbSAwIDAgMC4yNWVtO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IC0xcHg7XG4gICAgICB9XG4gICAgICA6aG9zdChbZ2VuZXJpYz1cIlwiXVt0YWItcG9zaXRpb249XCJsZWZ0XCJdKSAudGFiLnNlbGVjdGVkIHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cblxuICAgICAgLyogR2VuZXJpYywgcmlnaHQgcG9zaXRpb24gKi9cbiAgICAgIDpob3N0KFtnZW5lcmljPVwiXCJdW3RhYi1wb3NpdGlvbj1cInJpZ2h0XCJdKSAudGFiIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwLjI1ZW0gMC4yNWVtIDA7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xuICAgICAgfVxuICAgICAgOmhvc3QoW2dlbmVyaWM9XCJcIl1bdGFiLXBvc2l0aW9uPVwicmlnaHRcIl0pIC50YWIuc2VsZWN0ZWQge1xuICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGlkPVwidGFic1wiPjwvZGl2PlxuICAgICAgPGRpdiBpZD1cInBhZ2VzXCI+XG4gICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxufVxuXG5cbmZ1bmN0aW9uIGFwcGx5U2VsZWN0aW9uVG9UYWIodGFiLCBzZWxlY3RlZCkge1xuICB0b2dnbGVDbGFzcyh0YWIsICdzZWxlY3RlZCcsIHNlbGVjdGVkKTtcbiAgdGFiLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsIHNlbGVjdGVkKTtcbn1cblxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2Jhc2ljLXRhYi1zdHJpcCcsIFRhYlN0cmlwKTtcbmV4cG9ydCBkZWZhdWx0IFRhYlN0cmlwO1xuIiwiaW1wb3J0IEVsZW1lbnRCYXNlIGZyb20gJy4uLy4uL2Jhc2ljLWVsZW1lbnQtYmFzZS9zcmMvRWxlbWVudEJhc2UnO1xuaW1wb3J0IEdlbmVyaWMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvR2VuZXJpYyc7XG5pbXBvcnQgTW9kZXMgZnJvbSAnLi4vLi4vYmFzaWMtbW9kZXMvc3JjL01vZGVzJzsgLy8ganNoaW50IGlnbm9yZTpsaW5lXG5pbXBvcnQgVGFiU3RyaXAgZnJvbSAnLi4vLi4vYmFzaWMtdGFiLXN0cmlwL3NyYy9UYWJTdHJpcCc7IC8vIGpzaGludCBpZ25vcmU6bGluZVxuaW1wb3J0IFNpbmdsZVNlbGVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TaW5nbGVTZWxlY3Rpb24nO1xuaW1wb3J0IFRhcmdldFNlbGVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9UYXJnZXRTZWxlY3Rpb24nO1xuXG5cbi8qKlxuICogQSBzZXQgb2YgcGFnZXMgd2l0aCBhIHRhYiBzdHJpcCBnb3Zlcm5pbmcgd2hpY2ggcGFnZSBpcyBzaG93bi5cbiAqXG4gKiBUaGlzIHN0b2NrIGNvbWJpbmF0aW9uIHB1dHMgdG9nZXRoZXIgYSBbYmFzaWMtdGFiLXN0cmlwXSguLi9iYXNpYy10YWItc3RyaXAvKVxuICogYW5kIGEgW2Jhc2ljLW1vZGVzXSguLi9iYXNpYy1tb2Rlcy8pIGVsZW1lbnQuIElmIHlvdSdkIGxpa2UgdG8gY3JlYXRlXG4gKiBzb21ldGhpbmcgbW9yZSBjb21wbGV4IHRoYW4gdGhpcyBhcnJhbmdlbWVudCwgeW91IGNhbiB1c2UgZWl0aGVyIG9mIHRob3NlXG4gKiBlbGVtZW50cyBvbiBpdHMgb3duLlxuICpcbiAqIFNpbmNlIHRoaXMgY29tcG9uZW50IHVzZXMgYmFzaWMtdGFiLXN0cmlwIGludGVybmFsbHksIGl0IG9idGFpbnMgdGhlIG5hbWVzIG9mXG4gKiB0aGUgaW5kaXZpZHVhbCB0YWJzIHRoZSBzYW1lIHdheTogZnJvbSBhIGNoaWxkJ3MgYGFyaWEtbGFiZWxgIHByb3BlcnR5LlxuICogRXhhbXBsZTpcbiAqXG4gKiAgICAgPGJhc2ljLXRhYnM+XG4gKiAgICAgICA8ZGl2IGFyaWEtbGFiZWw9XCJPbmVcIj5QYWdlIG9uZTwvZGl2PlxuICogICAgICAgPGRpdiBhcmlhLWxhYmVsPVwiVHdvXCI+UGFnZSB0d288L2Rpdj5cbiAqICAgICAgIDxkaXYgYXJpYS1sYWJlbD1cIlRocmVlXCI+UGFnZSB0aHJlZTwvZGl2PlxuICogICAgIDwvYmFzaWMtdGFicz5cbiAqXG4gKiBAZXh0ZW5kcyBFbGVtZW50QmFzZVxuICogQG1peGVzIEdlbmVyaWNcbiAqIEBtaXhlcyBTaW5nbGVTZWxlY3Rpb25cbiAqIEBtaXhlcyBUYXJnZXRTZWxlY3Rpb25cbiAqL1xuY2xhc3MgVGFicyBleHRlbmRzIEVsZW1lbnRCYXNlLmNvbXBvc2UoXG4gIEdlbmVyaWMsXG4gIFNpbmdsZVNlbGVjdGlvbixcbiAgVGFyZ2V0U2VsZWN0aW9uXG4pIHtcblxuICBnZXQgZ2VuZXJpYygpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2VuZXJpYztcbiAgfVxuICBzZXQgZ2VuZXJpYyh2YWx1ZSkge1xuICAgIHN1cGVyLmdlbmVyaWMgPSB2YWx1ZTtcbiAgICAvLyBGb3J3YXJkIHRoZSBnZW5lcmljIHZhbHVlIHRvIHRoZSB0YWIgc3RyaXAuXG4gICAgdGhpcy4kLnRhYlN0cmlwLmdlbmVyaWMgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgcG9zaXRpb24gb2YgdGhlIHRhYiBzdHJpcCByZWxhdGl2ZSB0byB0aGUgZWxlbWVudCdzIGNoaWxkcmVuLiBWYWxpZFxuICAgKiB2YWx1ZXMgYXJlIFwidG9wXCIsIFwibGVmdFwiLCBcInJpZ2h0XCIsIGFuZCBcImJvdHRvbVwiLlxuICAgKlxuICAgKiBAZGVmYXVsdCBcInRvcFwiXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgdGFiUG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJCAmJiB0aGlzLiQudGFiU3RyaXAudGFiUG9zaXRpb247XG4gIH1cbiAgc2V0IHRhYlBvc2l0aW9uKHBvc2l0aW9uKSB7XG4gICAgdGhpcy4kLnRhYlN0cmlwLnRhYlBvc2l0aW9uID0gcG9zaXRpb247XG4gIH1cblxuICBnZXQgdGFyZ2V0KCkge1xuICAgIHJldHVybiB0aGlzLiQgJiYgdGhpcy4kLm1vZGVzO1xuICB9XG5cbiAgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBgXG4gICAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgfVxuXG4gICAgICAjdGFiU3RyaXAge1xuICAgICAgICAtd2Via2l0LWZsZXg6IDE7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICB9XG5cbiAgICAgICNtb2RlcyA6OnNsb3R0ZWQoKikge1xuICAgICAgICAtd2Via2l0LWZsZXg6IDE7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8YmFzaWMtdGFiLXN0cmlwIGlkPVwidGFiU3RyaXBcIj5cbiAgICAgICAgPGJhc2ljLW1vZGVzIGlkPVwibW9kZXNcIj5cbiAgICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICAgIDwvYmFzaWMtbW9kZXM+XG4gICAgICA8L2Jhc2ljLXRhYi1zdHJpcD5cbiAgICBgO1xuICB9XG5cbn1cblxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2Jhc2ljLXRhYnMnLCBUYWJzKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9BbmltYXRpb25TdGFnZSA9IHJlcXVpcmUoJy4uLy4uL2Jhc2ljLWFuaW1hdGlvbi1zdGFnZS9zcmMvQW5pbWF0aW9uU3RhZ2UnKTtcblxudmFyIF9BbmltYXRpb25TdGFnZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BbmltYXRpb25TdGFnZSk7XG5cbnZhciBfQXJyb3dTZWxlY3Rpb24gPSByZXF1aXJlKCcuLi8uLi9iYXNpYy1hcnJvdy1zZWxlY3Rpb24vc3JjL0Fycm93U2VsZWN0aW9uJyk7XG5cbnZhciBfQXJyb3dTZWxlY3Rpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQXJyb3dTZWxlY3Rpb24pO1xuXG52YXIgX0F1dG9zaXplVGV4dGFyZWEgPSByZXF1aXJlKCcuLi8uLi9iYXNpYy1hdXRvc2l6ZS10ZXh0YXJlYS9zcmMvQXV0b3NpemVUZXh0YXJlYScpO1xuXG52YXIgX0F1dG9zaXplVGV4dGFyZWEyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQXV0b3NpemVUZXh0YXJlYSk7XG5cbnZhciBfQ2Fyb3VzZWwgPSByZXF1aXJlKCcuLi8uLi9iYXNpYy1jYXJvdXNlbC9zcmMvQ2Fyb3VzZWwnKTtcblxudmFyIF9DYXJvdXNlbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9DYXJvdXNlbCk7XG5cbnZhciBfQ29sbGFwc2libGVQYW5lbCA9IHJlcXVpcmUoJy4uLy4uL2Jhc2ljLWNvbGxhcHNpYmxlLXBhbmVsL3NyYy9Db2xsYXBzaWJsZVBhbmVsJyk7XG5cbnZhciBfQ29sbGFwc2libGVQYW5lbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db2xsYXBzaWJsZVBhbmVsKTtcblxudmFyIF9DdXJyZW50QW5jaG9yID0gcmVxdWlyZSgnLi4vLi4vYmFzaWMtY3VycmVudC1hbmNob3Ivc3JjL0N1cnJlbnRBbmNob3InKTtcblxudmFyIF9DdXJyZW50QW5jaG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0N1cnJlbnRBbmNob3IpO1xuXG52YXIgX0ZhZGVPdmVyZmxvdyA9IHJlcXVpcmUoJy4uLy4uL2Jhc2ljLWZhZGUtb3ZlcmZsb3cvc3JjL0ZhZGVPdmVyZmxvdycpO1xuXG52YXIgX0ZhZGVPdmVyZmxvdzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9GYWRlT3ZlcmZsb3cpO1xuXG52YXIgX0xpc3RCb3ggPSByZXF1aXJlKCcuLi8uLi9iYXNpYy1saXN0LWJveC9zcmMvTGlzdEJveCcpO1xuXG52YXIgX0xpc3RCb3gyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTGlzdEJveCk7XG5cbnZhciBfTW9kZXMgPSByZXF1aXJlKCcuLi8uLi9iYXNpYy1tb2Rlcy9zcmMvTW9kZXMnKTtcblxudmFyIF9Nb2RlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Nb2Rlcyk7XG5cbnZhciBfUGFnZURvdHMgPSByZXF1aXJlKCcuLi8uLi9iYXNpYy1wYWdlLWRvdHMvc3JjL1BhZ2VEb3RzJyk7XG5cbnZhciBfUGFnZURvdHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUGFnZURvdHMpO1xuXG52YXIgX1BsYXlDb250cm9scyA9IHJlcXVpcmUoJy4uLy4uL2Jhc2ljLXBsYXktY29udHJvbHMvc3JjL1BsYXlDb250cm9scycpO1xuXG52YXIgX1BsYXlDb250cm9sczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9QbGF5Q29udHJvbHMpO1xuXG52YXIgX1NsaWRlc2hvdyA9IHJlcXVpcmUoJy4uLy4uL2Jhc2ljLXNsaWRlc2hvdy9zcmMvU2xpZGVzaG93Jyk7XG5cbnZhciBfU2xpZGVzaG93MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1NsaWRlc2hvdyk7XG5cbnZhciBfU2xpZGVzaG93VGltZXIgPSByZXF1aXJlKCcuLi8uLi9iYXNpYy1zbGlkZXNob3ctdGltZXIvc3JjL1NsaWRlc2hvd1RpbWVyJyk7XG5cbnZhciBfU2xpZGVzaG93VGltZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU2xpZGVzaG93VGltZXIpO1xuXG52YXIgX1NsaWRpbmdDYXJvdXNlbCA9IHJlcXVpcmUoJy4uLy4uL2Jhc2ljLXNsaWRpbmctY2Fyb3VzZWwvc3JjL1NsaWRpbmdDYXJvdXNlbCcpO1xuXG52YXIgX1NsaWRpbmdDYXJvdXNlbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TbGlkaW5nQ2Fyb3VzZWwpO1xuXG52YXIgX1NsaWRpbmdWaWV3cG9ydCA9IHJlcXVpcmUoJy4uLy4uL2Jhc2ljLXNsaWRpbmctdmlld3BvcnQvc3JjL1NsaWRpbmdWaWV3cG9ydCcpO1xuXG52YXIgX1NsaWRpbmdWaWV3cG9ydDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TbGlkaW5nVmlld3BvcnQpO1xuXG52YXIgX1NwcmVhZEl0ZW1zID0gcmVxdWlyZSgnLi4vLi4vYmFzaWMtc3ByZWFkLWl0ZW1zL3NyYy9TcHJlYWRJdGVtcycpO1xuXG52YXIgX1NwcmVhZEl0ZW1zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1NwcmVhZEl0ZW1zKTtcblxudmFyIF9UYWJzID0gcmVxdWlyZSgnLi4vLi4vYmFzaWMtdGFicy9zcmMvVGFicycpO1xuXG52YXIgX1RhYnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGFicyk7XG5cbnZhciBfVGFiU3RyaXAgPSByZXF1aXJlKCcuLi8uLi9iYXNpYy10YWItc3RyaXAvc3JjL1RhYlN0cmlwJyk7XG5cbnZhciBfVGFiU3RyaXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGFiU3RyaXApO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYlhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWlJc0ltWnBiR1VpT2lKaGJHd3Vhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2VzExOSIsImltcG9ydCBFbGVtZW50QmFzZSBmcm9tICcuLi8uLi9iYXNpYy1lbGVtZW50LWJhc2Uvc3JjL0VsZW1lbnRCYXNlJztcblxuXG4vKlxuICogQSBzZXQgb2YgZXZlbnRzIHdoaWNoLCBpZiBmaXJlZCBieSB0aGUgaW5uZXIgc3RhbmRhcmQgZWxlbWVudCwgc2hvdWxkIGJlXG4gKiByZS1yYWlzZWQgYnkgdGhlIGN1c3RvbSBlbGVtZW50LiAoV2Ugb25seSBuZWVkIHRvIGRvIHRoYXQgdW5kZXIgbmF0aXZlXG4gKiBTaGFkb3cgRE9NLCBub3QgdGhlIHBvbHlmaWxsLilcbiAqXG4gKiBUaGVzZSBhcmUgZXZlbnRzIHdoaWNoIGFyZSBzcGVjJ2VkIHRvIE5PVCBnZXQgcmV0YXJnZXR0ZWQgYWNyb3NzIGEgU2hhZG93IERPTVxuICogYm91bmRhcnksIG9yZ2FuaXplZCBieSB3aGljaCBlbGVtZW50KHMpIHJhaXNlIHRoZSBldmVudHMuIFRvIHByb3Blcmx5XG4gKiBzaW11bGF0ZSB0aGVzZSwgd2Ugd2lsbCBuZWVkIHRvIGxpc3RlbiBmb3IgdGhlIHJlYWwgZXZlbnRzLCB0aGVuIHJlLXJhaXNlIGFcbiAqIHNpbXVsYXRpb24gb2YgdGhlIG9yaWdpbmFsIGV2ZW50LiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlXG4gKiBodHRwczovL3d3dy53My5vcmcvVFIvc2hhZG93LWRvbS8jaC1ldmVudHMtdGhhdC1hcmUtbm90LWxlYWtlZC1pbnRvLWFuY2VzdG9yLXRyZWVzLlxuICpcbiAqIEl0IGFwcGVhcnMgdGhhdCB3ZSBkbyAqbm90KiBuZWVkIHRvIHJlLXJhaXNlIHRoZSBub24tYnViYmxpbmcgXCJmb2N1c1wiIGFuZFxuICogXCJibHVyXCIgZXZlbnRzLiBUaGVzZSBhcHBlYXIgdG8gYmUgYXV0b21hdGljYWxseSByZS1yYWlzZWQgYXMgZXhwZWN0ZWQgLS0gYnV0XG4gKiBpdCdzIG5vdCBjbGVhciB3aHkgdGhhdCBoYXBwZW5zLlxuICpcbiAqIFRoZSBsaXN0IGJlbG93IGlzIHJlYXNvbmFibHkgY29tcGxldGUuIEl0IG9taXRzIGVsZW1lbnRzIHRoYXQgY2Fubm90IGJlXG4gKiB3cmFwcGVkIChzZWUgY2xhc3Mgbm90ZXMgYWJvdmUpLiBBbHNvLCB3ZSBoYXZlbid0IGFjdHVhbGx5IHRyaWVkIHdyYXBwaW5nXG4gKiBldmVyeSBlbGVtZW50IGluIHRoaXMgbGlzdDsgc29tZSBvZiB0aGUgbW9yZSBvYnNjdXJlIG9uZXMgbWlnaHQgbm90IGFjdHVhbGx5XG4gKiB3b3JrIGFzIGV4cGVjdGVkLCBidXQgaXQgd2FzIGVhc2llciB0byBpbmNsdWRlIHRoZW0gZm9yIGNvbXBsZXRlbmVzcyB0aGFuXG4gKiB0byBhY3R1YWxseSB2ZXJpZnkgd2hldGhlciBvciBub3QgdGhlIGVsZW1lbnQgY2FuIGJlIHdyYXBwZWQuXG4gKi9cbmNvbnN0IHJlcmFpc2VFdmVudHMgPSB7XG4gIGFkZHJlc3M6IFsnc2Nyb2xsJ10sXG4gIGJsb2NrcXVvdGU6IFsnc2Nyb2xsJ10sXG4gIGNhcHRpb246IFsnc2Nyb2xsJ10sXG4gIGNlbnRlcjogWydzY3JvbGwnXSxcbiAgZGQ6IFsnc2Nyb2xsJ10sXG4gIGRpcjogWydzY3JvbGwnXSxcbiAgZGl2OiBbJ3Njcm9sbCddLFxuICBkbDogWydzY3JvbGwnXSxcbiAgZHQ6IFsnc2Nyb2xsJ10sXG4gIGZpZWxkc2V0OiBbJ3Njcm9sbCddLFxuICBmb3JtOiBbJ3Jlc2V0JywgJ3Njcm9sbCddLFxuICBmcmFtZTogWydsb2FkJ10sXG4gIGgxOiBbJ3Njcm9sbCddLFxuICBoMjogWydzY3JvbGwnXSxcbiAgaDM6IFsnc2Nyb2xsJ10sXG4gIGg0OiBbJ3Njcm9sbCddLFxuICBoNTogWydzY3JvbGwnXSxcbiAgaDY6IFsnc2Nyb2xsJ10sXG4gIGlmcmFtZTogWydsb2FkJ10sXG4gIGltZzogWydhYm9ydCcsICdlcnJvcicsICdsb2FkJ10sXG4gIGlucHV0OiBbJ2Fib3J0JywgJ2NoYW5nZScsICdlcnJvcicsICdzZWxlY3QnLCAnbG9hZCddLFxuICBrZXlnZW46IFsncmVzZXQnLCAnc2VsZWN0J10sXG4gIGxpOiBbJ3Njcm9sbCddLFxuICBsaW5rOiBbJ2xvYWQnXSxcbiAgbWVudTogWydzY3JvbGwnXSxcbiAgb2JqZWN0OiBbJ2Vycm9yJywgJ3Njcm9sbCddLFxuICBvbDogWydzY3JvbGwnXSxcbiAgcDogWydzY3JvbGwnXSxcbiAgc2NyaXB0OiBbJ2Vycm9yJywgJ2xvYWQnXSxcbiAgc2VsZWN0OiBbJ2NoYW5nZScsICdzY3JvbGwnXSxcbiAgdGJvZHk6IFsnc2Nyb2xsJ10sXG4gIHRmb290OiBbJ3Njcm9sbCddLFxuICB0aGVhZDogWydzY3JvbGwnXSxcbiAgdGV4dGFyZWE6IFsnY2hhbmdlJywgJ3NlbGVjdCcsICdzY3JvbGwnXVxufTtcblxuXG4vLyBLZWVwIHRyYWNrIG9mIHdoaWNoIHJlLXJhaXNlZCBldmVudHMgc2hvdWxkIGJ1YmJsZS5cbmNvbnN0IGV2ZW50QnViYmxlcyA9IHtcbiAgYWJvcnQ6IHRydWUsXG4gIGNoYW5nZTogdHJ1ZSxcbiAgcmVzZXQ6IHRydWVcbn07XG5cblxuLy8gRWxlbWVudHMgd2hpY2ggYXJlIGRpc3BsYXk6IGJsb2NrIGJ5IGRlZmF1bHQuXG4vLyBTb3VyY2U6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvQmxvY2stbGV2ZWxfZWxlbWVudHNcbmNvbnN0IGJsb2NrRWxlbWVudHMgPSBbXG4gICdhZGRyZXNzJyxcbiAgJ2FydGljbGUnLFxuICAnYXNpZGUnLFxuICAnYmxvY2txdW90ZScsXG4gICdjYW52YXMnLFxuICAnZGQnLFxuICAnZGl2JyxcbiAgJ2RsJyxcbiAgJ2ZpZWxkc2V0JyxcbiAgJ2ZpZ2NhcHRpb24nLFxuICAnZmlndXJlJyxcbiAgJ2Zvb3RlcicsXG4gICdmb3JtJyxcbiAgJ2gxJyxcbiAgJ2gyJyxcbiAgJ2gzJyxcbiAgJ2g0JyxcbiAgJ2g1JyxcbiAgJ2g2JyxcbiAgJ2hlYWRlcicsXG4gICdoZ3JvdXAnLFxuICAnaHInLFxuICAnbGknLFxuICAnbWFpbicsXG4gICduYXYnLFxuICAnbm9zY3JpcHQnLFxuICAnb2wnLFxuICAnb3V0cHV0JyxcbiAgJ3AnLFxuICAncHJlJyxcbiAgJ3NlY3Rpb24nLFxuICAndGFibGUnLFxuICAndGZvb3QnLFxuICAndWwnLFxuICAndmlkZW8nXG5dO1xuXG5cbi8qKlxuICogV3JhcHMgYSBzdGFuZGFyZCBIVE1MIGVsZW1lbnQgc28gdGhhdCB0aGUgc3RhbmRhcmQgYmVoYXZpb3IgY2FuIHRoZW4gYmVcbiAqIGV4dGVuZGVkLlxuICpcbiAqIFtMaXZlIGRlbW9dKGh0dHA6Ly9iYXNpY3dlYmNvbXBvbmVudHMub3JnL2Jhc2ljLXdlYi1jb21wb25lbnRzL3BhY2thZ2VzL2Jhc2ljLXdyYXBwZWQtc3RhbmRhcmQtZWxlbWVudC8pXG4gKlxuICogU2VlIGFsc28gW2Jhc2ljLWF1dG9zaXplLXRleHRhcmVhXSguLi9iYXNpYy1hdXRvc2l6ZS10ZXh0YXJlYSkgYW5kXG4gKiBbYmFzaWMtY3VycmVudC1hbmNob3JdKC4uL2Jhc2ljLWN1cnJlbnQtYW5jaG9yKS4gVGhlIGZvcm1lciB1c2VzXG4gKiBXcmFwcGVkU3RhbmRhcmRFbGVtZW50IHRvIHdyYXAgYSBzdGFuZGFyZCBgPHRleHRhcmVhPmAgYW5kIGA8YT5gLFxuICogcmVzcGVjdGl2ZWx5LlxuICpcbiAqIFRoZSBDdXN0b20gRWxlbWVudHMgc3BlYyBkb2VzIG5vdCBjdXJyZW50bHkgKGFzIG9mIE1hcmNoIDIwMTYpIGFsbG93IHlvdSB0b1xuICogZXh0ZW5kIHRoZSBiZWhhdmlvciBvZiBhIHN0YW5kYXJkIEhUTUwgZWxlbWVudCBsaWtlIGA8YT5gIG9yIGA8YnV0dG9uPmAuXG4gKiBBcyBhIHBhcnRpYWwgd29ya2Fyb3VuZCwgdGhlIFdyYXBwZWRTdGFuZGFyZEVsZW1lbnQgY2xhc3MgY2FuIGNyZWF0ZSBhIGNsYXNzXG4gKiBmb3IgeW91IHRoYXQgd3JhcHMgYW4gaW5zdGFuY2Ugb2YgYSBzdGFuZGFyZCBIVE1MIGVsZW1lbnQuIEZvciBleGFtcGxlLCB0aGVcbiAqIGNvZGUgYmVsb3cgY3JlYXRlcyBhIGNsYXNzIHRoYXQgd2lsbCB3cmFwIGFuIGluc3RhbmNlIG9mIGEgc3RhbmRhcmQgYDxhPmBcbiAqIGVsZW1lbnQ6XG4gKlxuICogICAgIGNsYXNzIFdyYXBwZWRBIGV4dGVuZHMgV3JhcHBlZFN0YW5kYXJkRWxlbWVudC53cmFwKCdhJykge1xuICogICAgICAgY3VzdG9tTWV0aG9kKCkgeyAuLi4gfVxuICogICAgIH1cbiAqICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ3dyYXBwZWQtYScsIFdyYXBwZWRBKTtcbiAqXG4gKiBBbiBpbnN0YW5jZSBvZiB0aGUgcmVzdWx0aW5nIGNsYXNzIHdpbGwgbG9vayB0byB0aGUgdXNlciBsaWtlIGFuIGluc3RhbmNlIG9mXG4gKiB0aGUgc3RhbmRhcmQgZWxlbWVudCBjbGFzcyBpdCB3cmFwcy4gVGhlIHJlc3VsdGluZyBjbGFzcyB3aWxsICpub3QqIGJlIGFuXG4gKiBgaW5zdGFuY2VvZmAgdGhlIHN0YW5kYXJkIGNsYXNzIChoZXJlLCBIVE1MQW5jaG9yRWxlbWVudCkuIEFub3RoZXIgbGltaXRhdGlvblxuICogaXMgdGhhdCB0aGUgcmVzdWx0aW5nIGA8d3JhcHBlZC1hPmAgd2lsbCBub3QgYXV0b21hdGljYWxseSBwaWNrIHVwIENTUyBzdHlsZXNcbiAqIGZvciBzdGFuZGFyZCBgPGE+YCBlbGVtZW50cy4gSG93ZXZlciwgdGhlIHJlc3VsdGluZyBjbGFzcyAqY2FuKiBiZSBleHRlbmRlZC5cbiAqIEUuZy4sIGluc3RhbmNlcyBvZiB0aGUgYWJvdmUgY2xhc3MgaGF2ZSBhIGBjdXN0b21NZXRob2QoKWAgYXZhaWxhYmxlIHRvIHRoZW0uXG4gKlxuICogQW55IHByb3BlcnRpZXMgZGVmaW5lZCBieSB0aGUgb3JpZ2luYWwgc3RhbmRhcmQgZWxlbWVudCB3aWxsIGJlIGV4cG9zZWQgb25cbiAqIHRoZSByZXN1bHRpbmcgd3JhcHBlciBjbGFzcywgYW5kIGNhbGxzIHRvIGdldCBvciBzZXQgdGhvc2UgcHJvcGVydGllcyB3aWxsIGJlXG4gKiBkZWxlZ2F0ZWQgdG8gdGhlIHdyYXBwZWQgZWxlbWVudCBpbnN0YW5jZS4gQ29udGludWluZyB0aGUgYWJvdmUgZXhhbXBsZTpcbiAqXG4gKiAgICAgbGV0IHdyYXBwZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd3cmFwcGVkLWEnKTtcbiAqICAgICB3cmFwcGVkLmhyZWYgPSAnaHR0cDovL2V4YW1wbGUuY29tLyc7XG4gKiAgICAgd3JhcHBlZC50ZXh0Q29udGVudCA9ICdDbGljayBoZXJlJztcbiAqXG4gKiBIZXJlLCB0aGUgY3JlYXRlZCBjdXN0b20gYDx3cmFwcGVkLWE+YCBlbGVtZW50IHdpbGwgY29udGFpbiBpbnNpZGUgaXRzXG4gKiBzaGFkb3cgdHJlZSBhbiBpbnN0YW5jZSBvZiBhIHN0YW5kYXJkIGA8YT5gIGVsZW1lbnQuIFRoZSBjYWxsIHRvIHNldCB0aGVcbiAqIHdyYXBwZXIncyBgaHJlZmAgcHJvcGVydHkgd2lsbCB1bHRpbWF0ZWx5IHNldCB0aGUgYGhyZWZgIG9uIHRoZSBpbm5lciBsaW5rLlxuICogTW9yZW92ZXIsIHRoZSB0ZXh0IGNvbnRlbnQgb2YgdGhlIGA8d3JhcHBlZC1hPmAgZWxlbWVudCB3aWxsIGFwcGVhciBpbnNpZGVcbiAqIHRoZSBpbm5lciBsaW5rLiBUaGUgcmVzdWx0IG9mIGFsbCB0aGlzIGlzIHRoYXQgdGhlIHVzZXIgd2lsbCBzZWUgd2hhdCAqbG9va3MqXG4gKiBsaWtlIGEgbm9ybWFsIGxpbmssIGp1c3QgYXMgaWYgeW91IGhhZCB3cml0dGVuXG4gKiBgPGEgaHJlZj1cImh0dHA6Ly9leGFtcGxlLmNvbS9cIj5DbGljayBoZXJlPC9hPmAuIEhvd2V2ZXIsIHRoZSBhY3R1YWwgZWxlbWVudFxuICogd2lsbCBiZSBhbiBpbnN0YW5jZSBvZiB5b3VyIGN1c3RvbSBjbGFzcywgd2l0aCB3aGF0ZXZlciBiZWhhdmlvciB5b3UndmVcbiAqIGRlZmluZWQgZm9yIGl0LlxuICpcbiAqIFdyYXBwZWQgZWxlbWVudHMgc2hvdWxkIHJhaXNlIHRoZSBzYW1lIGV2ZW50cyBhcyB0aGUgb3JpZ2luYWwgc3RhbmRhcmRcbiAqIGVsZW1lbnRzLiBFLmcuLCBpZiB5b3Ugd3JhcCBhbiBgPGltZz5gIGVsZW1lbnQsIHRoZSB3cmFwcGVkIHJlc3VsdCB3aWxsIHJhaXNlXG4gKiB0aGUgc3RhbmRhcmQgYGxvYWRgIGV2ZW50IGFzIGV4cGVjdGVkLlxuICpcbiAqIFNvbWUgZWxlbWVudHMsIHN1Y2ggYXMgYDxib2R5PmAsIGA8aHRtbD5gLCBhbmQgYDxzdHlsZT5gIGNhbm5vdCBiZSB3cmFwcGVkXG4gKiBhbmQgc3RpbGwgYWNoaWV2ZSB0aGVpciBzdGFuZGFyZCBiZWhhdmlvci5cbiAqXG4gKiBAZXh0ZW5kcyBFbGVtZW50QmFzZVxuICovXG5jbGFzcyBXcmFwcGVkU3RhbmRhcmRFbGVtZW50IGV4dGVuZHMgRWxlbWVudEJhc2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICAvLyBMaXN0ZW4gZm9yIGFueSBldmVudHMgcmFpc2VkIGJ5IHRoZSBpbm5lciBlbGVtZW50IHdoaWNoIHdpbGwgbm90XG4gICAgLy8gYXV0b21hdGljYWxseSBiZSByZXRhcmdldHRlZCBhY3Jvc3MgdGhlIFNoYWRvdyBET00gYm91bmRhcnksIGFuZCByZS1yYWlzZVxuICAgIC8vIHRob3NlIGV2ZW50cyB3aGVuIHRoZXkgaGFwcGVuLlxuICAgIC8vXG4gICAgLy8gTm90ZTogSXQncyB1bmNsZWFyIHdoeSB3ZSBuZWVkIHRvIGRvIHRoaXMgaW4gdGhlIFNoYWRvdyBET00gcG9seWZpbGwuXG4gICAgLy8gSW4gdGhlb3J5LCBldmVudHMgaW4gdGhlIGxpZ2h0IERPTSBzaG91bGQgYnViYmxlIGFzIG5vcm1hbC4gQnV0IHRoaXNcbiAgICAvLyBjb2RlIGFwcGVhcnMgdG8gYmUgcmVxdWlyZWQgaW4gdGhlIHBvbHlmaWxsIGNhc2UgYXMgd2VsbC5cbiAgICBsZXQgZXZlbnROYW1lcyA9IHJlcmFpc2VFdmVudHNbdGhpcy5leHRlbmRzXSB8fCBbXTtcbiAgICBldmVudE5hbWVzLmZvckVhY2goZXZlbnROYW1lID0+IHtcbiAgICAgIHRoaXMuaW5uZXIuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIHJlYWxFdmVudCA9PiB7XG4gICAgICAgIGxldCBldmVudCA9IG5ldyBFdmVudChldmVudE5hbWUsIHtcbiAgICAgICAgICBidWJibGVzOiBldmVudEJ1YmJsZXNbZXZlbnROYW1lXSB8fCBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgZGVzY3JpcHRpb24gZm9yIHRoZSB1c2VyIG9mIHRoZSBlbGVtZW50J3MgcHVycG9zZSBvbiB0aGUgcGFnZS4gU2V0dGluZ1xuICAgKiB0aGlzIGFwcGxpZXMgdGhlIGxhYmVsIHRvIHRoZSBpbm5lciBlbGVtZW50LCBlbnN1cmluZyB0aGF0IHNjcmVlbiByZWFkZXJzXG4gICAqIGFuZCBvdGhlciBhc3Npc3RpdmUgdGVjaG5vbG9naWVzIHdpbGwgcHJvdmlkZSBhIG1lYW5pbmdmdWwgZGVzY3JpcHRpb24gdG9cbiAgICogdGhlIHVzZXIuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgYXJpYUxhYmVsKCkge1xuICAgIHJldHVybiB0aGlzLmlubmVyLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpO1xuICB9XG4gIHNldCBhcmlhTGFiZWwobGFiZWwpIHtcbiAgICAvLyBQcm9wYWdhdGUgdGhlIEFSSUEgbGFiZWwgdG8gdGhlIGlubmVyIHRleHRhcmVhLlxuICAgIHRoaXMuaW5uZXIuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgbGFiZWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhlIGlubmVyIHN0YW5kYXJkIEhUTUwgZWxlbWVudC5cbiAgICpcbiAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgKi9cbiAgZ2V0IGlubmVyKCkge1xuICAgIHJldHVybiB0aGlzLiQuaW5uZXI7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIGNvcGllZCBpbnRvIHRoZSBzaGFkb3cgdHJlZSBvZiBuZXcgaW5zdGFuY2VzIG9mIHRoaXMgZWxlbWVudC5cbiAgICpcbiAgICogVGhlIGRlZmF1bHQgdmFsdWUgb2YgdGhpcyBwcm9wZXJ0eSBpcyBhIHRlbXBsYXRlIHRoYXQgaW5jbHVkZXMgYW4gaW5zdGFuY2VcbiAgICogdGhlIHN0YW5kYXJkIGVsZW1lbnQgYmVpbmcgd3JhcHBlZCwgd2l0aCBhIGA8c2xvdD5gIGVsZW1lbnQgaW5zaWRlIHRoYXRcbiAgICogdG8gcGljayB1cCB0aGUgZWxlbWVudCdzIGxpZ2h0IERPTSBjb250ZW50LiBGb3IgZXhhbXBsZSwgaWYgeW91IHdyYXAgYW5cbiAgICogYDxhPmAgZWxlbWVudCwgdGhlbiB0aGUgZGVmYXVsdCB0ZW1wbGF0ZSB3aWxsIGxvb2sgbGlrZTpcbiAgICpcbiAgICogICAgIDx0ZW1wbGF0ZT5cbiAgICogICAgICAgPHN0eWxlPlxuICAgKiAgICAgICA6aG9zdCB7XG4gICAqICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgKiAgICAgICB9XG4gICAqICAgICAgIDwvc3R5bGU+XG4gICAqICAgICAgIDxhIGlkPVwiaW5uZXJcIj5cbiAgICogICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAqICAgICAgIDwvYT5cbiAgICogICAgIDwvdGVtcGxhdGU+XG4gICAqXG4gICAqIFRoZSBgZGlzcGxheWAgc3R5bGluZyBhcHBsaWVkIHRvIHRoZSBob3N0IHdpbGwgYmUgYGJsb2NrYCBmb3IgZWxlbWVudHMgdGhhdFxuICAgKiBhcmUgYmxvY2sgZWxlbWVudHMgYnkgZGVmYXVsdCwgYW5kIGBpbmxpbmUtYmxvY2tgIChub3QgYGlubGluZWApIGZvciBvdGhlclxuICAgKiBlbGVtZW50cy5cbiAgICpcbiAgICogSWYgeW91J2QgbGlrZSB0aGUgdGVtcGxhdGUgdG8gaW5jbHVkZSBvdGhlciBlbGVtZW50cywgdGhlbiBvdmVycmlkZSB0aGlzXG4gICAqIHByb3BlcnR5IGFuZCByZXR1cm4gYSB0ZW1wbGF0ZSBvZiB5b3VyIG93bi4gVGhlIHRlbXBsYXRlIHNob3VsZCBpbmNsdWRlIGFuXG4gICAqIGluc3RhbmNlIG9mIHRoZSBzdGFuZGFyZCBIVE1MIGVsZW1lbnQgeW91IGFyZSB3cmFwcGluZywgYW5kIHRoZSBJRCBvZiB0aGF0XG4gICAqIGVsZW1lbnQgc2hvdWxkIGJlIFwiaW5uZXJcIi5cbiAgICpcbiAgICogQHR5cGUgeyhzdHJpbmd8SFRNTFRlbXBsYXRlRWxlbWVudCl9XG4gICAqL1xuICBnZXQgdGVtcGxhdGUoKSB7XG4gICAgbGV0IGRpc3BsYXkgPSBibG9ja0VsZW1lbnRzLmluZGV4T2YodGhpcy5leHRlbmRzKSA+PSAwID9cbiAgICAgICdibG9jaycgOlxuICAgICAgJ2lubGluZS1ibG9jayc7XG4gICAgLy8gVE9ETzogVXNlIHNsb3QgaW5zdGVhZCBvZiBjb250ZW50LlxuICAgIHJldHVybiBgPHN0eWxlPjpob3N0IHsgZGlzcGxheTogJHtkaXNwbGF5fX08L3N0eWxlPjwke3RoaXMuZXh0ZW5kc30gaWQ9XCJpbm5lclwiPjxzbG90Pjwvc2xvdD48LyR7dGhpcy5leHRlbmRzfWA7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGNsYXNzIHRoYXQgd3JhcHMgYSBzdGFuZGFyZCBIVE1MIGVsZW1lbnQuXG4gICAqXG4gICAqIE5vdGUgdGhhdCB0aGUgcmVzdWx0aW5nIGNsYXNzIGlzIGEgc3ViY2xhc3Mgb2YgV3JhcHBlZFN0YW5kYXJkRWxlbWVudCwgbm90XG4gICAqIHRoZSBzdGFuZGFyZCBjbGFzcyBiZWluZyB3cmFwcGVkLiBFLmcuLCBpZiB5b3UgY2FsbFxuICAgKiBgV3JhcHBlZFN0YW5kYXJkRWxlbWVudC53cmFwKCdhJylgLCB5b3Ugd2lsbCBnZXQgYSBjbGFzcyB3aG9zZSBzaGFkb3cgdHJlZVxuICAgKiB3aWxsIGluY2x1ZGUgYW4gYW5jaG9yIGVsZW1lbnQsIGJ1dCB0aGUgY2xhc3Mgd2lsbCAqbm90KiBpbmhlcml0IGZyb21cbiAgICogSFRNTEFuY2hvckVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBleHRlbmRzVGFnIC0gdGhlIHN0YW5kYXJkIEhUTUwgZWxlbWVudCB0YWcgdG8gZXh0ZW5kXG4gICAqL1xuICBzdGF0aWMgd3JhcChleHRlbmRzVGFnKSB7XG5cbiAgICAvLyBDcmVhdGUgdGhlIG5ldyBjbGFzcy5cbiAgICBjbGFzcyBXcmFwcGVkIGV4dGVuZHMgV3JhcHBlZFN0YW5kYXJkRWxlbWVudCB7fVxuXG4gICAgLy8gSW5kaWNhdGUgd2hpY2ggdGFnIGl0IHdyYXBzLlxuICAgIFdyYXBwZWQucHJvdG90eXBlLmV4dGVuZHMgPSBleHRlbmRzVGFnO1xuXG4gICAgLy8gQ3JlYXRlIGdldHRlci9zZXR0ZXJzIHRoYXQgZGVsZWdhdGUgdG8gdGhlIHdyYXBwZWQgZWxlbWVudC5cbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZXh0ZW5kc1RhZyk7XG4gICAgbGV0IGV4dGVuZHNQcm90b3R5cGUgPSBlbGVtZW50LmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgICBsZXQgbmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhleHRlbmRzUHJvdG90eXBlKTtcbiAgICBuYW1lcy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICBsZXQgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZXh0ZW5kc1Byb3RvdHlwZSwgbmFtZSk7XG4gICAgICAgIGxldCBkZWxlZ2F0ZSA9IGNyZWF0ZVByb3BlcnR5RGVsZWdhdGUobmFtZSwgZGVzY3JpcHRvcik7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShXcmFwcGVkLnByb3RvdHlwZSwgbmFtZSwgZGVsZWdhdGUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIFdyYXBwZWQ7XG4gIH1cblxufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVByb3BlcnR5RGVsZWdhdGUobmFtZSwgZGVzY3JpcHRvcikge1xuICBsZXQgZGVsZWdhdGUgPSB7XG4gICAgY29uZmlndXJhYmxlOiBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSxcbiAgICBlbnVtZXJhYmxlOiBkZXNjcmlwdG9yLmVudW1lcmFibGUsXG4gIH07XG4gIGlmIChkZXNjcmlwdG9yLmdldCkge1xuICAgIGRlbGVnYXRlLmdldCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW5uZXJbbmFtZV07XG4gICAgfTtcbiAgfVxuICBpZiAoZGVzY3JpcHRvci5zZXQpIHtcbiAgICBkZWxlZ2F0ZS5zZXQgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgdGhpcy5pbm5lcltuYW1lXSA9IHZhbHVlO1xuICAgIH07XG4gIH1cbiAgaWYgKGRlc2NyaXB0b3Iud3JpdGFibGUpIHtcbiAgICBkZWxlZ2F0ZS53cml0YWJsZSA9IGRlc2NyaXB0b3Iud3JpdGFibGU7XG4gIH1cbiAgcmV0dXJuIGRlbGVnYXRlO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFdyYXBwZWRTdGFuZGFyZEVsZW1lbnQ7XG4iXX0=
